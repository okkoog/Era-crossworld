#!/usr/bin/env node
'use strict';

// Created 2026-10-04. This tool never writes game files or invents translations.
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const cp = require('child_process');
const VERSION = 1;
const TOOL = 'erauma-translation-handoff';
const LOCALE_ROOT = 'sources/erauma/ere/i18n';
const JP = `${LOCALE_ROOT}/ja-JP`;
const KO = `${LOCALE_ROOT}/ko-KR`;
const CJK = /[\u3040-\u30ff\u3400-\u9fff\uff66-\uff9f]/u;
const HANGUL = /[\uac00-\ud7a3]/u;
const UNSAFE = /(?:^|[^a-z0-9]|_)(?:ero|sex|sexual|erotic|rape|cum|orgasm|orgy|virgin|penis|vagina|clitoris|breast|nipple|dildo|condom|masturbat\w*|semen|inmon|pregnant)(?:$|[^a-z0-9]|_)|性|淫|乳|胸|妊|孕|精液|射精|陰|阴|膣|腟|勃起|子宮|子宫|肛|レイプ|肉棒|肉穴|肉根|鸡巴|下体|胯|私处|私處|臀|フェラ|セックス|オナニ|エロ|エッチ|えっち|愛液|爱液|発情|发情|処女|处女|童貞|童贞|絶頂|绝顶|口交|性爱|做愛|做爱|チンポ|ちんぽ|ちんちん|マンコ|まんこ|おまん|음란|강간|자위|정액|성행위|성노예/iu;
const META_KEYS = new Set(['author','authors','file','path','source','key','id','tag','tags','if','color','background','fontFamily','fontStyle','fontSize','align','sync','acc','random','CHECK','check','version','license','url']);
const CONTROL_CALLS = new Set(['require','get','set','add','getName','getValue','setValue','getCsvProp','getCSVProp','getConfig','setConfig','match','replace','startsWith','endsWith','includes','indexOf','hasOwnProperty']);
// These identifiers describe gender/name metadata, not an erotic action or an age guard.
const GENDER_METADATA = /\b(?:adult_sex_title|phy_sex_title|uma_sex_title|siblings_sex_title|sex_code|sexCode)\b/g;
function unsafeText(text) {return UNSAFE.test(String(text).normalize('NFKC').replace(GENDER_METADATA,'gender_metadata').replace(/性別|性别|性格|性質/g,'gender_metadata'));}
function unsafeNode(node) {
  const pieces=[];
  // Read AST identifiers/literal values; comments/JSDoc are not user-facing prose.
  walk(node,n=>{if(n.type==='Identifier')pieces.push(n.name);else if(n.type==='Literal'&&typeof n.value==='string')pieces.push(n.value);else if(n.type==='TemplateElement')pieces.push(n.value.cooked??n.value.raw);});
  return unsafeText(pieces.join('\n'));
}
const sha = x => crypto.createHash('sha256').update(x).digest('hex');
const slash = x => x.replaceAll('\\','/');
const own = (o,k) => o !== null && typeof o === 'object' && Object.prototype.hasOwnProperty.call(o,k);
const json = x => JSON.stringify(x,null,2)+'\n';
const canonical = x => {
  if (Array.isArray(x)) return x.map(canonical);
  if (x && typeof x === 'object') return Object.fromEntries(Object.keys(x).sort().map(k=>[k,canonical(x[k])]));
  return typeof x === 'bigint' ? x.toString() : x;
};
const digest = x => sha(JSON.stringify(canonical(x)));
function fail(code, detail='') { throw new Error(`${code}${detail ? ': '+detail : ''}`); }
function parseArgs(argv) {
  const args = {mode:argv[0],input:[]};
  for(let i=1;i<argv.length;i++) {
    const flag=argv[i];
    if(!flag.startsWith('--')) fail('ARGUMENT_ERROR',flag);
    const key=flag.slice(2);
    if(['help'].includes(key)) { args[key]=true; continue; }
    if(!argv[i+1] || argv[i+1].startsWith('--')) fail('MISSING_ARGUMENT',flag);
    const value=argv[++i];
    if(key==='input') args.input.push(value); else args[key]=value;
  }
  return args;
}
function walk(n,fn,parents=[],astPath=[]) {
  if(!n || typeof n!=='object') return;
  if(n.type) fn(n,parents,astPath);
  for(const [k,v] of Object.entries(n)) {
    if(['loc','start','end'].includes(k)) continue;
    if(Array.isArray(v)) v.forEach((child,i)=>walk(child,fn,[...parents,n],[...astPath,k,i]));
    else if(v && typeof v==='object') walk(v,fn,[...parents,n],[...astPath,k]);
  }
}
function listFiles(root) {
  if(!fs.existsSync(root)) return [];
  const out=[];
  for(const d of fs.readdirSync(root,{withFileTypes:true}).sort((a,b)=>a.name.localeCompare(b.name))) {
    const f=path.join(root,d.name);
    if(d.isDirectory()) out.push(...listFiles(f)); else if(d.isFile()) out.push(f);
  }
  return out;
}
function inside(root,relative) {
  if(typeof relative!=='string'||path.isAbsolute(relative)||relative.split(/[\\/]/).includes('..')) fail('UNSAFE_RELATIVE_PATH');
  const resolved=path.resolve(root,relative), base=path.resolve(root);
  if(resolved!==base && !resolved.startsWith(base+path.sep)) fail('PATH_OUTSIDE_ROOT');
  return resolved;
}
function prepareOutput(repo,output) {
  if(!output) fail('OUTPUT_REQUIRED');
  const out=path.resolve(output), sourceRoot=path.resolve(repo,'sources');
  const compare=p=>process.platform==='win32'?p.toLowerCase():p;
  if(compare(out)===compare(sourceRoot) || compare(out).startsWith(compare(sourceRoot+path.sep))) fail('OUTPUT_MUST_NOT_BE_GAME_SOURCE');
  if(fs.existsSync(out) && fs.readdirSync(out).length) fail('OUTPUT_DIRECTORY_NOT_EMPTY');
  fs.mkdirSync(out,{recursive:true}); return out;
}
function git(repo,args) {
  try { return cp.execFileSync('git',args,{cwd:repo,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim(); }
  catch { fail('GIT_COMMAND_FAILED'); }
}
function loadParser(args) {
  let acorn; try { acorn=require(args.acorn ? path.resolve(args.acorn) : 'acorn'); } catch { fail('ACORN_REQUIRED','use --acorn'); }
  const parse=(text,source)=>{try{return acorn.parse(text,{ecmaVersion:'latest',sourceType:'script',locations:true});}catch{fail('JS_PARSE_FAILED',source);}};
  let yaml=null;
  if(args.yaml) try { yaml=require(path.resolve(args.yaml)); } catch { fail('YAML_PARSER_LOAD_FAILED'); }
  return {parse,yaml};
}
function exclusionsForModule(module) {
  if(/^timon\/(?:sex|child)(?:\/|$)/i.test(module)) return 'protected_timon_sex_or_child_module';
  if(/pregnant(?:-|_)slave/i.test(module)) return 'protected_pregnant_slave_module';
  if(/^kojo\//i.test(module) && /(?:^|\/)(?:ero|base)(?:[-.\/]|$)|av-sister/i.test(module)) return 'protected_kojo_sex_basement_or_av_sister_module';
  return null;
}
function generatedRanges(text) {
  return [...text.matchAll(/\/\/ GENERATED START[\s\S]*?\/\/ GENERATED END/g)].map(m=>[m.index,m.index+m[0].length]);
}
function inGenerated(node,ranges) {return ranges.some(([a,b])=>node.start<b && node.end>a);}
function propertyKey(n) {return n.key?.name ?? n.key?.value;}
function exportedMembers(ast) {
  const bindings=new Map(), paths=new WeakMap();
  walk(ast,(n,parents,p)=>paths.set(n,p));
  for(const statement of ast.body) {
    if(statement.type==='VariableDeclaration')for(const n of statement.declarations)if(n.id.type==='Identifier'&&n.init)bindings.set(n.id.name,n.init);
    if(['ClassDeclaration','FunctionDeclaration'].includes(statement.type)&&statement.id)bindings.set(statement.id.name,statement);
  }
  let rhs;
  walk(ast,n=>{if(n.type==='AssignmentExpression'&&n.left.type==='MemberExpression'&&n.left.object.name==='module'&&n.left.property.name==='exports')rhs=n.right;});
  function resolve(n,seen=new Set()) {
    if(n?.type==='Identifier'&&bindings.has(n.name)&&!seen.has(n.name)) {seen.add(n.name);return resolve(bindings.get(n.name),seen);}
    if(n?.type==='NewExpression') return resolve(n.callee,seen);
    return n;
  }
  const result=new Map();
  function add(k,node,container) {if(typeof k==='string'||typeof k==='number')result.set(String(k),{node,container,astPath:paths.get(node)});}
  const resolved=resolve(rhs);
  if(resolved?.type==='ObjectExpression') for(const p of resolved.properties) if(p.type==='Property') add(propertyKey(p),p,resolved);
  if(['ClassExpression','ClassDeclaration'].includes(resolved?.type)) for(const p of resolved.body.body) {
    if(p.kind==='constructor') walk(p.value,n=>{if(n.type==='AssignmentExpression'&&n.left.type==='MemberExpression'&&n.left.object.type==='ThisExpression')add(n.left.property.name??n.left.property.value,n.right,p);});
    else add(propertyKey(p),p,resolved);
  }
  // Object.create(Japanese) followed by Object.assign(ko, {...}) is a common override form.
  if(rhs?.type==='Identifier') walk(ast,n=>{
    if(n.type==='CallExpression'&&n.callee.type==='MemberExpression'&&n.callee.object.name==='Object'&&n.callee.property.name==='assign'&&n.arguments[0]?.name===rhs.name)
      for(const obj of n.arguments.slice(1)) if(obj.type==='ObjectExpression') for(const p of obj.properties) if(p.type==='Property')add(propertyKey(p),p,obj);
    if(n.type==='AssignmentExpression'&&n.left.type==='MemberExpression'&&n.left.object.name===rhs.name) add(n.left.property.name??n.left.property.value,n.right,n);
  });
  return {members:result,paths,resolve,supported:result.size>0||resolved?.type==='ObjectExpression'};
}
function placeholders(text) {return [...text.matchAll(/%[^%\r\n]+%|\$\{[^}\r\n]*\}|\{\{[^}\r\n]+\}\}|\{\d+\}/g)].map(m=>m[0]);}
function boundaryWhitespace(text) {return {leading:text.match(/^\s*/u)[0],trailing:text.match(/\s*$/u)[0]};}
function sourceNodeValue(n) {
  if(n.type==='Literal'&&typeof n.value==='string')return n.value;
  if(n.type==='TemplateElement')return n.value.cooked;
  return null;
}
function candidateAllowed(n,parents) {
  for(const p of parents) {
    if(p.type==='Property'&&p.key===n)return false;
    if(p.type==='MemberExpression'&&p.property===n)return false;
    if(['ImportDeclaration','ExportNamedDeclaration'].includes(p.type))return false;
    if(p.type==='SwitchCase'&&p.test===n)return false;
    if(['IfStatement','WhileStatement','ForStatement','ConditionalExpression'].includes(p.type)&&p.test&&n.start>=p.test.start&&n.end<=p.test.end)return false;
    if(p.type==='BinaryExpression'&&p.operator!=='+')return false;
    if(p.type==='CallExpression') {
      const name=p.callee.name??p.callee.property?.name??p.callee.property?.value;
      if(CONTROL_CALLS.has(name)&&p.arguments.some(a=>n.start>=a.start&&n.end<=a.end))return false;
    }
    if(['Property','PropertyDefinition'].includes(p.type)&&META_KEYS.has(String(propertyKey(p))))return false;
  }
  const value=sourceNodeValue(n);
  return typeof value==='string'&&CJK.test(value)&&!/^\s*(?:#\/|https?:\/\/|[a-z]+:|[a-z][a-z0-9._-]*\/)/i.test(value);
}
function dynamicContext(n,parents,text) {
  const dynamic=[], seen=new Set();
  const add=(node,kind)=>{if(!node||sourceNodeValue(node)!==null)return;const source=text.slice(node.start,node.end);if(!seen.has(source)){seen.add(source);dynamic.push({kind,source});}};
  for(let i=parents.length-1;i>=0;i--) {
    const p=parents[i];
    if(p.type==='TemplateLiteral') {p.expressions.forEach(x=>add(x,'template-expression'));break;}
    if(p.type==='ArrayExpression') {p.elements.forEach(x=>add(x,'array-expression'));break;}
    if(p.type==='BinaryExpression'&&p.operator==='+') {const flatten=x=>{if(x.type==='BinaryExpression'&&x.operator==='+'){flatten(x.left);flatten(x.right);}else add(x,'concatenation-expression');};flatten(p);break;}
    if(p.type==='CallExpression') {p.arguments.forEach(x=>add(x,'call-argument'));break;}
  }
  const fn=[...parents].reverse().find(x=>['FunctionExpression','ArrowFunctionExpression','FunctionDeclaration'].includes(x.type));
  return {signature:fn ? fn.params.map(x=>text.slice(x.start,x.end)) : [],dynamicExpressions:dynamic};
}
function recordIndex(repo) {
  const rows=[];
  const currentModules=listFiles(path.join(repo,JP)).map(f=>slash(path.relative(path.join(repo,JP),f)));
  const moduleFor=source=>typeof source==='string'&&source.includes('/i18n/')?source.replace(/^.*\/i18n\/(?:ja-JP|ko-KR)\//,''):null;
  const statusFor=status=>{
    if(/safety|excluded|minor_content/i.test(status))return 'safety_excluded';
    if(/partial|reused_with_current_only_residual/i.test(status))return 'partial_reuse';
    if(/external_adapter|fallback|no_safe|no_character_specific|no_matching|no_direct|not_reusable|structure_changed|untranslated/i.test(status))return 'classified_requires_external_adapter';
    if(/reus|fully|applied/i.test(status))return 'full_reuse';
    return 'recorded_scope_verdict';
  };
  for(const filename of listFiles(path.join(repo,KO)).filter(x=>/^(?:REUSE|REC_APPLICATION).*\.json$/i.test(path.basename(x)))) {
    let r;try{r=JSON.parse(fs.readFileSync(filename,'utf8'));}catch{continue;}
    const module=moduleFor(r.current??r.korean);
    const record=slash(path.relative(repo,filename));
    const add=(a,status)=>{if(!module)return;for(const item of Array.isArray(a)?a:[]) {const keys=typeof item==='string'?[item]:item.key?[item.key]:item.keys??[];for(const key of keys)rows.push({module,key:String(key),status,record,granularity:'key'});}};
    add(r.reusedFull??r.reused,'full_reuse'); add(r.reusedPartial,'partial_reuse'); add(r.classifiedFallback,'classified_no_safe_reuse');
    add(r.excludedFromTextProcessing??r.textProcessingExclusions,'safety_excluded');
    for(const item of Array.isArray(r.checked)?r.checked:[]) {
      let itemModules=[moduleFor(item.current??item.target??item.korean)].filter(Boolean);
      if(!itemModules.length&&typeof item.character==='string') {
        const family=/daily/i.test(r.module??path.basename(filename))?'daily':/rec|recruit/i.test(r.module??path.basename(filename))?'rec':null;
        if(family)itemModules=currentModules.filter(m=>m.startsWith(`kojo/${item.character}/`)&&new RegExp(`/${family}[-.]`).test(m));
      }
      for(const currentModule of itemModules) {
        if(item.status)rows.push({module:currentModule,key:'*',status:statusFor(item.status),record,granularity:'module',recordedStatus:item.status});
        for(const section of Array.isArray(item.sections)?item.sections:[]) if(section.key!==undefined&&section.status)
          rows.push({module:currentModule,key:String(section.key),status:statusFor(section.status),record,granularity:'key',recordedStatus:section.status});
      }
    }
  }
  return rows;
}
function disposition(index,module,key,origin) {
  const matches=index.filter(r=>r.module===module&&(r.key===key||r.key==='*'));
  const keyed=matches.filter(r=>r.key===key), effective=keyed.length?keyed:matches;
  const priority=['safety_excluded','partial_reuse','classified_no_safe_reuse','classified_requires_external_adapter','full_reuse','recorded_scope_verdict'];
  return {status:priority.find(s=>effective.some(m=>m.status===s))??(origin==='ko-own'?'existing_override_residual_no_key_record':'no_key_level_record'),recordGranularity:keyed.length?'key':matches.length?'module':'none',records:[...new Set(matches.map(m=>m.record))],recordedStatuses:[...new Set(effective.map(m=>m.recordedStatus).filter(Boolean))]};
}
function immutableEntry(entry) {const {koreanText,translatorNotes,...rest}=entry;return rest;}
function entryIdentity(entry) {return sha(JSON.stringify([entry.sourceCommit,entry.module,entry.key,entry.sourcePath,entry.astPath??entry.yamlPath,entry.originalHash])).slice(0,32);}
function exportBundle(args) {
  const repo=path.resolve(args.repo??process.cwd()), output=prepareOutput(repo,args.output), {parse,yaml}=loadParser(args);
  const commit=git(repo,['rev-parse','HEAD']); if(args['source-commit']&&args['source-commit']!==commit)fail('SOURCE_COMMIT_DOES_NOT_MATCH_HEAD');
  const index=recordIndex(repo), sources=new Map(), modules=[], exclusions=[], manual=[], classifications=[], expectedMissingSources=[];
  const files=listFiles(path.join(repo,JP)).filter(f=>/\.(js|kojo)$/i.test(f));
  const info=relative=>{if(!sources.has(relative)){const buffer=fs.readFileSync(inside(repo,relative));sources.set(relative,{path:relative,sha256:sha(buffer)});}return sources.get(relative);};
  const addExcluded=(module,key,sourcePath,reason,extra={})=>exclusions.push({module,key,sourcePath,reason,sourceCommit:commit,sexualProseIncluded:false,...extra});
  function addEntry(entries,module,key,sourcePath,origin,originalText,details) {
    const mixedKoreanCjk=HANGUL.test(originalText), possibleNameContext=/(?:name|title|chara|horse|uma)/i.test(key);
    const entry={module,key,kind:details.kind,sourceOrigin:origin,sourcePath,targetPath:`${KO}/${module}`,sourceCommit:commit,sourceFileHash:info(sourcePath).sha256,originalText,originalHash:sha(originalText),koreanText:'',placeholders:placeholders(originalText),boundaryWhitespace:boundaryWhitespace(originalText),mixedKoreanCjk,possibleNameContext,reviewNote:mixedKoreanCjk?'Whole literal retained for review. Preserve existing Korean wording; inspect the remaining CJK text without recomposing old Korean fragments.':possibleNameContext?'This may contain a proper name/title; decide whether its existing form should remain unchanged.':null,reuseDisposition:disposition(index,module,key,origin),...details};
    entry.id=entryIdentity(entry); entry.sourceSlotId=sha(JSON.stringify([entry.sourcePath,entry.astPath??entry.yamlPath,entry.originalHash])).slice(0,32); entries.push(entry);
  }
  for(const filename of files) {
    const module=slash(path.relative(path.join(repo,JP),filename)), jaPath=`${JP}/${module}`, koPath=`${KO}/${module}`;
    info(jaPath); if(fs.existsSync(inside(repo,koPath)))info(koPath);else expectedMissingSources.push(koPath);
    const blocked=exclusionsForModule(module);
    if(blocked) {
      addExcluded(module,null,jaPath,blocked);
      try {
        const names=module.endsWith('.js')?[...exportedMembers(parse(fs.readFileSync(filename,'utf8'),jaPath)).members.keys()]:yaml?.parse?Object.keys(yaml.parse(fs.readFileSync(filename,'utf8'))||{}):[];
        for(const key of names)classifications.push({module,key,sourcePath:jaPath,status:'safety_excluded_from_handoff',priorReuseDisposition:disposition(index,module,key,'ja-fallback')});
      } catch {manual.push({module,sourcePath:jaPath,reason:'excluded_module_key_metadata_unavailable',originalTextIncluded:false});}
      continue;
    }
    const entries=[];
    if(module.endsWith('.js')) {
      const jaText=fs.readFileSync(filename,'utf8'), koExists=fs.existsSync(inside(repo,koPath));
      let jaAst,koAst,jaMembers,koMembers,koText='';
      try {jaAst=parse(jaText,jaPath);jaMembers=exportedMembers(jaAst);if(koExists){koText=fs.readFileSync(inside(repo,koPath),'utf8');koAst=parse(koText,koPath);koMembers=exportedMembers(koAst);}}
      catch {manual.push({module,sourcePath:jaPath,reason:'js_parse_or_export_resolution_failed',originalTextIncluded:false});continue;}
      if(!jaMembers.supported||(koExists&&!koMembers.supported)) {manual.push({module,sourcePath:jaPath,reason:'unsupported_export_or_override_ownership',originalTextIncluded:false});continue;}
      for(const [key,jpMember] of jaMembers.members) {
        const isOwn=koMembers?.members.has(key), sourcePath=isOwn?koPath:jaPath, text=isOwn?koText:jaText, member=isOwn?koMembers.members.get(key):jpMember;
        const owner=isOwn?koMembers:jaMembers, origin=isOwn?'ko-own':'ja-fallback', ranges=generatedRanges(text);
        const value=member.node.value;
        const resolvedValue=value?.type==='Identifier'?owner.resolve(value):null;
        const scanNode=resolvedValue&&resolvedValue!==value?resolvedValue:member.node, body=text.slice(scanNode.start,scanNode.end);
        const state=disposition(index,module,key,origin); classifications.push({module,key,sourcePath,...state});
        if(state.status==='safety_excluded'||unsafeNode(scanNode)) {addExcluded(module,key,sourcePath,state.status==='safety_excluded'?'reuse_record_safety_exclusion':'sexual_reference_or_narration_in_exported_group',{reuseRecords:state.records});continue;}
        const ast=isOwn?koAst:jaAst, rootPaths=isOwn?koMembers.paths:jaMembers.paths;
        walk(scanNode,(n,parents)=>{
          if(!candidateAllowed(n,parents))return;
          const originalText=sourceNodeValue(n);
          if(inGenerated(n,ranges)) {manual.push({module,key,sourcePath,reason:'generated_literal_requires_source_review',astPath:rootPaths.get(n),originalTextIncluded:false});return;}
          const valueContext=dynamicContext(n,parents,text);
          // Context expressions must also pass the safety screen before any prose is exported.
          if(valueContext.dynamicExpressions.some(x=>unsafeText(x.source))) {addExcluded(module,key,sourcePath,'sexual_dynamic_context');return;}
          addEntry(entries,module,key,sourcePath,origin,originalText,{kind:'js',astPath:rootPaths.get(n),sourceRange:[n.start,n.end],sourceTokenHash:sha(text.slice(n.start,n.end)),nodeType:n.type,sourceLine:n.loc.start.line,generated:false,...valueContext});
        });
      }
    } else {
      if(!yaml?.parse) {manual.push({module,sourcePath:jaPath,reason:'yaml_parser_required_for_exact_kojo_slots',originalTextIncluded:false});continue;}
      let ja,ko={};const koExists=fs.existsSync(inside(repo,koPath));
      try {ja=yaml.parse(fs.readFileSync(filename,'utf8'));if(koExists)ko=yaml.parse(fs.readFileSync(inside(repo,koPath),'utf8'))||{};}
      catch {manual.push({module,sourcePath:jaPath,reason:'kojo_yaml_parse_failed',originalTextIncluded:false});continue;}
      if(!ja||typeof ja!=='object'||Array.isArray(ja)) {manual.push({module,sourcePath:jaPath,reason:'unsupported_kojo_root',originalTextIncluded:false});continue;}
      for(const key of Object.keys(ja)) {
        const isOwn=own(ko,key), scene=isOwn?ko[key]:ja[key], sourcePath=isOwn?koPath:jaPath, origin=isOwn?'ko-own':'ja-fallback';
        const state=disposition(index,module,key,origin); classifications.push({module,key,sourcePath,...state});
        if(state.status==='safety_excluded'||unsafeText(JSON.stringify(scene))) {addExcluded(module,key,sourcePath,'sexual_reference_or_narration_in_kojo_scene',{reuseRecords:state.records});continue;}
        function visit(value,yamlPath,displaySlot=false,context=[]) {
          if(typeof value==='string') {
            if(displaySlot&&CJK.test(value)&&!/^\s*(?:#\/|https?:\/\/)/i.test(value))
              addEntry(entries,module,key,sourcePath,origin,value,{kind:'kojo',yamlPath,sourceRange:null,nodeType:'YAMLString',generated:false,signature:['r','d'],dynamicExpressions:context.map(source=>({kind:'kojo-if',source}))});
            return;
          }
          if(Array.isArray(value)) value.forEach((v,i)=>visit(v,[...yamlPath,i],true,context));
          else if(value&&typeof value==='object') {
            const ctx=typeof value.if==='string'?[...context,value.if]:context;
            for(const [k,v] of Object.entries(value)) {
              if(['content','comment','name','title','desc','description','header','footer','label'].includes(k))visit(v,[...yamlPath,k],true,ctx);
              else if(k==='lines')visit(v,[...yamlPath,k],false,ctx);
            }
          }
        }
        visit(scene,[key],false);
      }
    }
    if(entries.length) {
      const outputPath=`modules/${module}.json`; const doc={schemaVersion:VERSION,tool:TOOL,module,sourceCommit:commit,freshKoreanProseWritten:false,instructions:'Edit koreanText only. Leave IDs, original text, source metadata, placeholders and dynamic expressions unchanged.',entries};
      fs.mkdirSync(path.dirname(inside(output,outputPath)),{recursive:true});fs.writeFileSync(inside(output,outputPath),json(doc));
      modules.push({module,path:outputPath,slots:entries.length});
    }
  }
  fs.writeFileSync(path.join(output,'excluded.json'),json({sourceCommit:commit,freshKoreanProseWritten:false,groups:exclusions,manualReview:manual}));
  fs.writeFileSync(path.join(output,'classification.json'),json({sourceCommit:commit,freshKoreanProseWritten:false,keys:classifications,recordedKeyVerdicts:index,reuseRecords:[...new Set(index.map(r=>r.record))],note:'no_key_level_record means no machine-readable key or module verdict was found, not that a previously completed scope was reopened. Module-granularity verdicts and specific sections are distinguished. Safety exclusions remain separate from proven changed/no-direct-reuse decisions.'}));
  const readme=path.join(__dirname,'README_TRANSLATION_HANDOFF.md');if(fs.existsSync(readme))fs.copyFileSync(readme,path.join(output,'TRANSLATION_README.md'));
  const generated=listFiles(output).map(f=>({path:slash(path.relative(output,f)),sha256:sha(fs.readFileSync(f))}));
  const entryIntegrity=[];
  for(const m of modules)for(const e of JSON.parse(fs.readFileSync(inside(output,m.path),'utf8')).entries)entryIntegrity.push({id:e.id,sha256:digest(immutableEntry(e))});
  if(new Set(entryIntegrity.map(e=>e.id)).size!==entryIntegrity.length)fail('DUPLICATE_EXPORT_ID');
  const statusCounts={};for(const c of classifications)statusCounts[c.status]=(statusCounts[c.status]||0)+1;
  const manifest={schemaVersion:VERSION,tool:TOOL,createdAt:new Date().toISOString(),sourceCommit:commit,sourceWorkingTreeDirty:git(repo,['status','--porcelain'])!=='',freshKoreanProseWritten:false,summary:{modules:modules.length,slots:entryIntegrity.length,excludedGroups:exclusions.length,manualReviewGroups:manual.length,classificationCounts:statusCounts},files:generated,sourceFiles:[...sources.values()],expectedMissingSources,entryIntegrity,modules,exclusionsFile:'excluded.json',classificationFile:'classification.json'};
  fs.writeFileSync(path.join(output,'manifest.json'),json(manifest));
  return {mode:'export',sourceCommit:commit,...manifest.summary,output};
}
function bundleReference(args) {
  if(!args.manifest)fail('MANIFEST_REQUIRED');
  const manifestPath=path.resolve(args.manifest), root=path.dirname(manifestPath);let manifest;
  try{manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));}catch{fail('MANIFEST_READ_FAILED');}
  if(manifest.schemaVersion!==VERSION||manifest.tool!==TOOL)fail('UNSUPPORTED_MANIFEST');
  const repo=path.resolve(args.repo??process.cwd());
  if(git(repo,['rev-parse','HEAD'])!==manifest.sourceCommit)fail('STALE_SOURCE_COMMIT');
  for(const f of manifest.sourceFiles)if(!fs.existsSync(inside(repo,f.path))||sha(fs.readFileSync(inside(repo,f.path)))!==f.sha256)fail('STALE_SOURCE_HASH',f.path);
  for(const missing of manifest.expectedMissingSources??[])if(fs.existsSync(inside(repo,missing)))fail('SOURCE_OWNERSHIP_CHANGED',missing);
  const integrity=new Map(manifest.entryIntegrity.map(e=>[e.id,e.sha256]));
  if(integrity.size!==manifest.entryIntegrity.length)fail('DUPLICATE_MANIFEST_ID');
  const entries=new Map();
  for(const m of manifest.modules) {
    let doc;try{doc=JSON.parse(fs.readFileSync(inside(root,m.path),'utf8'));}catch{fail('REFERENCE_MODULE_READ_FAILED',m.path);}
    for(const e of doc.entries) {
      if(entries.has(e.id))fail('DUPLICATE_REFERENCE_ID',e.id);
      if(digest(immutableEntry(e))!==integrity.get(e.id)||entryIdentity(e)!==e.id||sha(e.originalText)!==e.originalHash)fail('REFERENCE_ENTRY_MODIFIED',e.id);
      entries.set(e.id,e);
    }
  }
  if(entries.size!==integrity.size)fail('REFERENCE_ENTRY_COUNT_MISMATCH');
  return {manifest,root,repo,entries};
}
function translationDocuments(args,reference) {
  let inputs=args.input.slice();
  if(args['translation-root'])inputs.push(...listFiles(path.resolve(args['translation-root'])).filter(f=>f.endsWith('.json')&&slash(f).includes('/modules/')));
  if(!inputs.length)inputs=reference.manifest.modules.map(m=>inside(reference.root,m.path));
  return inputs.map(input=>{let doc;try{doc=JSON.parse(fs.readFileSync(path.resolve(input),'utf8'));}catch{fail('TRANSLATION_READ_FAILED',path.basename(input));}return {input,doc};});
}
function validateDocument(doc,reference) {
  if(doc.schemaVersion!==VERSION||doc.tool!==TOOL||doc.sourceCommit!==reference.manifest.sourceCommit||doc.freshKoreanProseWritten!==false)fail('TRANSLATION_HEADER_MISMATCH');
  if(!Array.isArray(doc.entries))fail('ENTRIES_ARRAY_REQUIRED');
  const seen=new Set(); let translated=0;
  for(const e of doc.entries) {
    if(seen.has(e.id))fail('DUPLICATE_TRANSLATION_ID',e.id);seen.add(e.id);
    const expected=reference.entries.get(e.id);if(!expected)fail('UNKNOWN_TRANSLATION_ID',e.id);
    if(doc.module!==undefined&&e.module!==doc.module)fail('TRANSLATION_MODULE_MISMATCH',e.id);
    if(e.sourceCommit!==doc.sourceCommit||digest(immutableEntry(e))!==digest(immutableEntry(expected)))fail('IMMUTABLE_ENTRY_MODIFIED',e.id);
    if(typeof e.koreanText!=='string')fail('KOREAN_TEXT_MUST_BE_STRING',e.id);
    if(own(e,'translatorNotes')&&typeof e.translatorNotes!=='string')fail('TRANSLATOR_NOTES_MUST_BE_STRING',e.id);
    if(e.koreanText!=='') {
      if(!HANGUL.test(e.koreanText))fail('FILLED_TEXT_HAS_NO_KOREAN',e.id);
      if(unsafeText(e.koreanText))fail('TRANSLATION_REQUIRES_SAFETY_REVIEW',e.id);
      if(e.nodeType==='TemplateElement'&&/\$\{/.test(e.koreanText))fail('TEMPLATE_EXPRESSION_BOUNDARY_CHANGED',e.id);
      if(JSON.stringify(placeholders(e.koreanText))!==JSON.stringify(e.placeholders))fail('PLACEHOLDER_SEQUENCE_CHANGED',e.id);
      if(JSON.stringify(boundaryWhitespace(e.koreanText))!==JSON.stringify(e.boundaryWhitespace))fail('FRAGMENT_WHITESPACE_BOUNDARY_CHANGED',e.id);
      translated++;
    }
  }
  return {checked:doc.entries.length,translated,blank:doc.entries.length-translated};
}
function validatedInputs(args) {
  const reference=bundleReference(args), docs=translationDocuments(args,reference), results=[];
  for(const {input,doc} of docs)results.push({file:path.basename(input),...validateDocument(doc,reference)});
  return {reference,docs,results};
}
function mergedTranslations(docs) {
  const merged=new Map();
  for(const {doc} of docs)for(const e of doc.entries) {
    const prior=merged.get(e.id);
    if(prior?.koreanText&&e.koreanText&&prior.koreanText!==e.koreanText)fail('CONFLICTING_TRANSLATIONS',e.id);
    if(!prior||(!prior.koreanText&&e.koreanText))merged.set(e.id,e);
  }
  const entries=[...merged.values()], physical=new Map();
  for(const e of entries)if(e.koreanText) {const prior=physical.get(e.sourceSlotId);if(prior&&prior!==e.koreanText)fail('CONFLICTING_SOURCE_SLOT_TRANSLATIONS',e.id);physical.set(e.sourceSlotId,e.koreanText);}
  return entries;
}
function validateOrCombine(args) {
  const {reference,docs,results}=validatedInputs(args);
  if(args.mode==='combine') {
    if(!args.output)fail('OUTPUT_REQUIRED');const outfile=path.resolve(args.output);
    if(fs.existsSync(outfile))fail('OUTPUT_FILE_EXISTS');
    const sourceRoot=path.resolve(reference.repo,'sources')+path.sep;
    if((process.platform==='win32'?outfile.toLowerCase():outfile).startsWith(process.platform==='win32'?sourceRoot.toLowerCase():sourceRoot))fail('OUTPUT_MUST_NOT_BE_GAME_SOURCE');
    const entries=mergedTranslations(docs);fs.mkdirSync(path.dirname(outfile),{recursive:true});
    fs.writeFileSync(outfile,json({schemaVersion:VERSION,tool:TOOL,sourceCommit:reference.manifest.sourceCommit,freshKoreanProseWritten:false,entries}));
    return {mode:'combine',files:docs.length,entries:entries.length,translated:entries.filter(e=>e.koreanText!=='').length,output:outfile};
  }
  return {mode:'validate',pass:true,files:docs.length,checked:results.reduce((a,r)=>a+r.checked,0),translated:results.reduce((a,r)=>a+r.translated,0),results,gameFilesChanged:false};
}
function preview(args) {
  const {reference,docs}=validatedInputs(args), output=prepareOutput(reference.repo,args.output), entries=mergedTranslations(docs).filter(e=>e.koreanText!==''), plan=[];
  const diff=['# Literal-only review. This file is not an automatically applicable game patch.'];
  for(const e of entries) {
    const direct=e.sourceOrigin==='ko-own'&&e.kind==='js'&&!e.generated;
    const item={id:e.id,module:e.module,key:e.key,targetPath:e.targetPath,sourcePath:e.sourcePath,sourceHash:e.sourceFileHash,originalHash:e.originalHash,astPath:e.astPath??null,yamlPath:e.yamlPath??null,sourceRange:e.sourceRange,disposition:direct?'review_existing_korean_literal_replacement':e.sourceOrigin==='ko-own'?'review_existing_yaml_slot_replacement':'new_override_and_wiring_review_required',gameLogicSynthesis:false};
    if(!direct)item.entryWiringReviewPaths=[`${KO}/${slash(path.dirname(e.module))}/entry.js`.replace('/./','/'),`${KO}/entry.js`];
    plan.push(item);
    diff.push(`\n@@ ${e.sourcePath} key=${e.key} id=${e.id} @@`,`- ${JSON.stringify(e.originalText)}`,`+ ${JSON.stringify(e.koreanText)}`);
  }
  fs.writeFileSync(path.join(output,'literal-review.diff'),diff.join('\n')+'\n');
  fs.writeFileSync(path.join(output,'import-plan.json'),json({schemaVersion:VERSION,sourceCommit:reference.manifest.sourceCommit,gameFilesChanged:false,freshKoreanProseWritten:false,translatedSlots:entries.length,instructions:'Review exact slots and preserve the current structure. No automatic game writes, generated edits, new function bodies or wiring code are produced.',slots:plan}));
  return {mode:'preview',translatedSlots:entries.length,output,gameFilesChanged:false};
}
function help() {
  process.stdout.write('EraUma translation handoff (no game writes)\n\n'+
    'export  --repo PATH --output EMPTY_DIR --acorn MODULE_PATH [--yaml YAMLJS_PATH]\n'+
    'validate --repo PATH --manifest manifest.json [--input FILE ... | --translation-root DIR]\n'+
    'combine --repo PATH --manifest manifest.json --input FILE ... --output NEW_JSON\n'+
    'preview --repo PATH --manifest manifest.json --input FILE ... --output EMPTY_DIR\n'+
    'Only koreanText is editable. Validation checks source commit/files, IDs, immutable metadata, placeholders and fragment boundaries.\n');
}
function main(argv=process.argv.slice(2)) {
  if(!argv.length||['--help','help'].includes(argv[0]))return help();
  const args=parseArgs(argv);if(args.help)return help();
  let result;if(args.mode==='export')result=exportBundle(args);else if(['validate','combine'].includes(args.mode))result=validateOrCombine(args);else if(args.mode==='preview')result=preview(args);else fail('UNKNOWN_MODE');
  process.stdout.write(json(result));return result;
}
if(require.main===module)try{main();}catch(error){process.stderr.write(`Handoff failed: ${error.message}\n`);process.exitCode=1;}
module.exports={main,exportBundle,bundleReference,validateDocument,entryIdentity,immutableEntry,placeholders,exclusionsForModule};
