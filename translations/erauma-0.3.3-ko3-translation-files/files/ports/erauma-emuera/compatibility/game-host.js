// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: ports/erauma-emuera/compatibility/game-host.js
// 대상 함수/속성: 
'use strict';
// Original modules load lazily and unchanged, retaining CommonJS circular-module semantics.
var __cache=Object.create(null);
function __resolve(name,parent='') {
  if(name==='#/era-electron') return '$era';
  if(name.startsWith('#/')) name=name.slice(2);
  else if(name.startsWith('@/')) name='engine/'+name.slice(2);
  else if(name.startsWith('.')) name=parent.slice(0,parent.lastIndexOf('/')+1)+name;
  const parts=[];
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  for(const p of name.split('/')) { if(p==='..') {if(!parts.length)throw Error('모듈 경로 탐색 오류');parts.pop();}else if(p&&p!=='.')parts.push(p); }
  name=parts.join('/');
  if(!/\.(js|json)$/.test(name))name+='.js';
  return name;
}
function __require(name,parent='') {
  if(name==='fs')return {existsSync:__fileExists,readFileSync:__readFile,writeFileSync:__writeFile,mkdirSync:__mkdir,rmSync:__removeFile};
  if(name==='path')return {join:(...parts)=>parts.join('/')};
  if(name==='compressing')return {gzip:{compressFile:async(text,path)=>__gzipSave(text,path),uncompress:async(path,target)=>__gzipLoad(path,target)}};
  const id=__resolve(name,parent);
  if(id==='$era')return era;
  if(__cache[id])return __cache[id].exports;
  const module={exports:{}};__cache[id]=module;
  try {
    const code=__source(id);
    if(id.endsWith('.json'))module.exports=JSON.parse(code);
    else new Function('module','exports','require',code)(module,module.exports,n=>__require(n,id));
    if(id==='i18n/selector.js'){
      const base=module.exports,extra=Object.create(null);let selected=null;
      const extraLanguages=JSON.parse(__languagePacks).filter(language=>!base.lans().includes(language));
      // Register names now, but load entries only when used. Loading a new pack
      // while the selector's callers are still importing can retain unfinished
      // CommonJS exports (notably info-generator -> extended-def -> selector).
      function loadExtra(language){
        if(!extraLanguages.includes(language))return undefined;
        if(Object.prototype.hasOwnProperty.call(extra,language))return extra[language];
        const exported=__require('language-packs/'+language+'/entry');
        const entry=typeof exported==='function'?new exported():exported;
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
        if(!entry||typeof entry!=='object')throw Error('잘못된 언어 팩: '+language);
        extra[language]=entry;
        return entry;
      }
      module.exports={...base,
        i18n:(language=selected||base.lan())=>loadExtra(language)||base.i18n(language),
        lan:()=>selected||base.lan(),lans:()=>[...base.lans(),...extraLanguages],
        set_lan(language){if(extraLanguages.includes(language))selected=language;else {base.set_lan(language);selected=null;}},
        __(key,fallback=key){if(!selected)return base.__(key,fallback);let value=loadExtra(selected);for(const part of (key||'').split('.')){value=value?.[part];if(value===undefined)return typeof fallback==='function'?fallback():fallback;}return String(value);}
      };
    }
    return module.exports;
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  } catch(error) { delete __cache[id];throw new Error('모듈 '+id+': '+error.message); }
}
var console={log:(...x)=>__emit('line',x.join(' '),0),debug:()=>{},warn:(...x)=>__emit('diagnostic',x.join(' '),0),error:(...x)=>__emit('diagnostic',x.join(' '),0)};
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
var Buffer={from:(text,encoding)=>{if(encoding!=='utf-8')throw Error('저장 버퍼는 UTF-8만 지원합니다');return String(text);}};
var __screen=[],__frame=null,__buttonEpoch=0,__notices=[],__inputFeedback='';
var __presentation={color:'#d7e0eb',align:'left',width:24};
var __audioState=null,__audioRevision=0,__background={};
function __out(kind,text,id=0){
  if(__frame)__frame.push([kind,String(text),id,__buttonEpoch]);
  else __emit(kind,String(text),id);
}
function __emitGroup(group){
  if(group.layout)__emit('row-start',JSON.stringify({...group.layout,inactive:group.epoch!==__buttonEpoch}),0);
  for(const event of group){
    if(event[0]==='button'&&event[3]!==__buttonEpoch)__emit('line',event[1],0);
    else __emit(event[0],event[1],event[2]);
  }
  if(group.layout)__emit('row-end','',0);
}
function __redraw(){
  __emit('clear','',0);
  if(__audioState){
    const volume=__game.config.window?.audio??100;
    if(__audioState.volume!==volume){__audioState.volume=volume;__audioState.revision=++__audioRevision;__emit('audio',JSON.stringify({...__audioState,action:'volume'}),0);}
    else __emit('audio',JSON.stringify(__audioState),0);
  }
  __emit('background',JSON.stringify(__background),0);
  for(const group of __screen)__emitGroup(group);
  __notices=__notices.filter(n=>n.expires>__now());
  for(const notice of __notices)__emit('notice',notice.text,0);
  if(__inputFeedback)__emit('notice',__inputFeedback,0);
}
function __feedback(message){__inputFeedback=message;__redraw();}
function __inputMessage(kind){
  const language=__game.global[3]||'zh-CN';
  const messages={
    'ja-JP':['選択肢をクリックするか、[番号]を入力してください。','入力形式を確認してください。'],
    'zh-CN':['请点击选项，或输入 [编号]。','请输入符合要求的内容。'],
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    'en-US':['선택지를 클릭하거나 [번호]를 입력하세요.','필요한 입력 형식을 확인하세요.']
  };
  return (messages[language]||messages['en-US'])[kind==='pattern'?1:0];
}
function __render(item) {
  if(!item)return;
  if(Array.isArray(item)){item.forEach(__render);return;}
  if(item.type==='button') { if(!item.config?.disabled)__out('button',__text(item.content),item.accelerator); else __out('line',__text(item.content)); }
  else if(item.type==='divider')__out('line','--- '+(item.config?.content||''));
  else if(item.type==='image'||item.type==='image.whole')return;
  else if(item.type==='text')__out('line',__text(item.content));
  else if(item.type==='progress')__out('line',__text(item.inContent)+' ('+item.percentage+'%) '+__text(item.outContent));
  else if(item.columns)__render(item.columns);
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  else throw Error('지원하지 않는 UI 객체: '+JSON.stringify(item));
}
function __chart(chart={}){
  const labels=chart.labels||[],datasets=chart.datasets||[];
  __out('line','[chart data] '+labels.length+' samples');
  for(const series of datasets){
    const points=(series.data||[]).map(p=>typeof p==='number'?p:(p&&typeof p==='object'?p.y:Number(p)));
    const values=points.filter(Number.isFinite);
    if(!values.length){__out('line',__text(series.label)+': no numeric values');continue;}
    const format=n=>Number(n.toFixed(3)).toString();
    __out('line',__text(series.label)+': start '+format(values[0])+', finish '+format(values[values.length-1])+', min '+format(Math.min(...values))+', max '+format(Math.max(...values)));
    const indices=[...new Set(Array.from({length:Math.min(9,points.length)},(_,i)=>Math.round(i*(points.length-1)/Math.max(1,Math.min(9,points.length)-1))))];
    __out('line',indices.map(i=>__text(labels[i]??i)+'='+ (Number.isFinite(points[i])?format(points[i]):'-')).join(' | '));
  }
}
var __game={
  config:__tables.config,defaultConfig:__tables.config,fixedConfig:__tables.fixed,
  extendedTables:__tables.extend,fieldNames:__tables.names,staticData:__tables.static,
  global:{saves:{}},data:{},res:__resources,path:'game',erePath:'ere',
  quit(){__exitRequested=true;},
  logger:console,log:(x)=>console.log(x),error:(message,stack)=>{__emit('diagnostic',String(message)+(stack?'\n'+stack:''),0);},
  connect(kind,data={}) {
    const setting={setAlign:'align',setColor:'color',setHorizontalAlign:'horizontalAlign',setOffset:'offset',setVerticalAlign:'verticalAlign',setWidth:'width'}[kind];
    if(setting){__presentation[setting]=data;return;}
    if(['playMusic','stopMusic','resumeMusic','pauseMusic'].includes(kind)){
      __audioState=kind==='playMusic'?{...data,volume:__game.config.window?.audio??100,action:'play'}:{...__audioState,action:kind==='resumeMusic'?'resume':'pause'};
      __audioState.revision=++__audioRevision;__emit('audio',JSON.stringify(__audioState),0);return;
    }
    if(kind==='setBack'||kind==='setMask'||kind==='setOverlay'){
      __background[kind==='setBack'?'back':'overlay']=data;__emit('background',JSON.stringify(__background),0);return;
    }
    if(kind==='setTitle'){__emit('title',String(data),0);return;}
    if(kind==='notify'){
      const text=__text(data.title)+': '+__text(data.content);
      __notices.push({text,expires:__now()+10000});if(__notices.length>8)__notices.shift();
      __emit('notice',text,0);return;
    }
    const group=[];__frame=group;
    group.epoch=__buttonEpoch;
    if(['print','replaceText','drawLine','printButton','printMultiCols','printInColRows','replaceInColRows','printImage','printWholeImage','printProgress','printLineChart'].includes(kind)){
      const types={print:'text',replaceText:'text',drawLine:'divider',printButton:'button',printImage:'image',printWholeImage:'image.whole',printProgress:'progress',printLineChart:'chart'};
      group.layout={columns:types[kind]?[{type:types[kind],...data}]:(data.columns||data.objects||[]),config:{...__presentation,...data.config}};
    }
    try {
    switch(kind) {
      case 'print':case 'replaceText':__out('line',__text(data.content));break;
      case 'println':__out('line','');break;
      case 'setToBottom':__out('line','');break;
      case 'drawLine':__out('line','--- '+(data.config?.content||''));break;
      case 'printButton':__render({type:'button',...data});break;
      case 'printMultiCols':__render(data.columns);break;
      case 'printInColRows':case 'replaceInColRows':__render(data.columns||data.objects);break;
      case 'printImage':case 'printWholeImage':break;
      case 'printProgress':__out('line',__text(data.inContent)+' '+data.percentage+'% '+__text(data.outContent));break;
      case 'printLineChart':
        __chart(data.data);break;
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
      default:throw Error('지원하지 않는 렌더러 이벤트: '+kind);
    }
    } finally {__frame=null;}
    if(kind==='replaceText'||kind==='replaceInColRows'){
      __screen.splice(Math.max(0,__screen.length-1),1,group);__redraw();
    }else{
      __screen.push(group);
      __emitGroup(group);
    }
    if(__pending&&__inputConfig.game)__inputConfig.options=__currentButtons();
  }
};
const OriginalApi=__require('@/era/model/era-api');
const original=new OriginalApi(__game);
__game.api=original;
Object.values(__tables.static.global||{}).forEach(k=>__game.global[k]=0);
original.resetData();
function __currentButtons(){return [...new Set(__screen.flat().filter(e=>e[0]==='button'&&e[3]===__buttonEpoch).map(e=>e[2]))];}
function __inputUsesContinue(){
  if(!__inputConfig.any||__inputRule||__currentButtons().length)return false;
  function hasUrl(value){
    if(!value||typeof value!=='object')return false;
    if(Array.isArray(value))return value.some(hasUrl);
    return typeof value.url==='string'&&value.url.length>0||Object.values(value).some(hasUrl);
  }
  // A value wait must remain active when a current row contains a URL or choice.
  return !__screen.some(group=>group.epoch===__buttonEpoch&&hasUrl(group.layout));
}
original.input=async function(config={}){
  __inputFeedback='';
  __redraw();
  const options=__currentButtons();
  const value=await __api.input({...config,game:true,options});
  this.isContinue=false;
  if(config.disableBefore!==false)__buttonEpoch++;
  if(!this.config.system?.hideUserInput&&!config.hideInput&&!config.any)this.print(value);
  return value;
};
original.clearScreen=async function(lineCount){
  const count=Number(lineCount);
  if(Number.isNaN(count)||count>__screen.length)__screen=[];
  else if(count>0)__screen.splice(Math.max(0,__screen.length-count),count);
  this.setTotalLines(__screen.length);__redraw();return this.totalLines;
};
original.version={engine:3000};
original.isEra=true;
// Interactive gameplay preserves animation timing; deterministic host regressions may skip it.
original.delay=function(milliseconds=0){return !__presentationDelays||this.isContinue?Promise.resolve():new Promise(resolve=>setTimeout(resolve,milliseconds));};
original.proxyKojo=function(kojo){return new Proxy(kojo,{get(target,key){
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  if(target[key]===undefined)return async()=>__emit('diagnostic','[kojo 경고] 누락된 키: '+String(key),0);
  const fn=(data={})=>target[key](typeof data==='object'?Object.entries(data).filter(e=>typeof e[1]==='string').map(([k,v])=>[new RegExp('%'+k+'%','g'),String(v)]):[],data);
  Object.assign(fn,target[key]);return fn;
}});};
// The upstream SDK exports bound methods; destructured callbacks must retain the API receiver.
for(let proto=original;proto&&proto!==Object.prototype;proto=Object.getPrototypeOf(proto)){
  for(const key of Object.getOwnPropertyNames(proto)){
    const descriptor=Object.getOwnPropertyDescriptor(proto,key);
    if(key!=='constructor' && typeof descriptor.value==='function')original[key]=original[key].bind(original);
  }
}
for(const key of ['debug','assert','info','warn'])original.logger[key]=original.logger[key].bind(original);
original.logger.error=__game.error.bind(__game);
era=original;
