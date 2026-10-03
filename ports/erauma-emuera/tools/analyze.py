"""Reproducible lexical API inventory; counts source call sites, not runtime calls."""
import collections,json,pathlib,re
port=pathlib.Path(__file__).resolve().parents[1]
source=port.parents[1]/'sources/erauma'
ere=source/'ere'
usage=collections.defaultdict(list);requires=collections.Counter();missing=[];dynamic=[];vars=collections.Counter();async_files=[]
files=list(ere.rglob('*.js'))
for p in files:
    if p.name=='era-electron.js':continue
    text=p.read_text(encoding='utf-8-sig');rel=p.relative_to(source).as_posix()
    if re.search(r'\basync\b|\bawait\b',text):async_files.append(rel)
    for i,line in enumerate(text.splitlines(),1):
        if line.lstrip().startswith(('//','*')):continue
        for m in re.finditer(r'\bera\.([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)?)\s*\(',line):usage[m[1]].append({'file':rel,'line':i})
        for m in re.finditer(r'\bera\.(?:get|set|add)\s*\(\s*[\'"`]([^\'"`:]+)',line):vars[m[1]]+=1
    for m in re.finditer(r'\brequire\(\s*([\'\"])(.*?)\1\s*\)',text):
        name=m[2];requires[name]+=1
        if name.startswith('#/') or name.startswith('.'):
            q=ere/name[2:] if name.startswith('#/') else p.parent/name
            if not any(x.is_file() for x in (q,pathlib.Path(str(q)+'.js'),pathlib.Path(str(q)+'.json'),q/'index.js')):
                missing.append({'file':rel,'module':name})
    if re.search(r'require\(\s*(?![\s\'\"])',text):dynamic.append(rel)
sdk=(ere/'era-electron.js').read_text(encoding='utf8')
declared=sorted(set(re.findall(r'^  (?:async )?([A-Za-z_$][\w$]*)\([^\n]*\)\s*\{',sdk,re.M)))
data={'method':'Lexical era.method(...) call sites; excludes whole-line comments and SDK declarations. Not an AST or execution count; aliases/computed calls may be missed.','js_files':len(files),'async_or_await_files':len(async_files),'sdk_methods':declared,'api_usage':dict(sorted(usage.items(),key=lambda x:-len(x[1]))),'variable_prefixes':vars,'unresolved_literal_requires':missing,'external_requires':{k:v for k,v in requires.items() if not k.startswith(('#/','.'))},'dynamic_require_candidates':dynamic}
(port/'docs/api-inventory.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n',encoding='utf8')
rows=['| API | 호출 지점 | 사용 파일 |','|---|---:|---:|']
for name,sites in data['api_usage'].items():rows.append(f'| `{name}` | {len(sites)} | {len(set(x["file"] for x in sites))} |')
(port/'docs/API_USAGE.md').write_text('# Era API 호출 지점 목록\n\n문자열 기반 정적 검색 결과입니다. 실제 실행 횟수가 아니며 동적 호출·별칭은 누락될 수 있습니다. 전체 파일·행 위치는 api-inventory.json 참조.\n\n'+'\n'.join(rows)+'\n',encoding='utf8')
print(json.dumps({'js_files':len(files),'api_names':len(usage),'top':[(k,len(v)) for k,v in list(data['api_usage'].items())[:15]],'missing_count':len(missing),'missing_samples':missing[:10],'external':data['external_requires'],'dynamic':dynamic[:10]},ensure_ascii=False))
