// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: ports/erauma-emuera/compatibility/era-host.js
// 대상 함수/속성: 
'use strict';
// Deliberately small probe API. Unsupported game APIs throw; they are not silent no-ops.
var __state = 'idle', __error = '', __pending = null, __inputRule = null, __values = Object.create(null);
var __exitRequested = false;
var __inputConfig={};
var __timers=new Map(),__timerId=0;
function setTimeout(callback,milliseconds=0,...args){
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  if(typeof callback!=='function')throw Error('타이머 콜백은 함수여야 합니다');
  const id=++__timerId,delay=Number(milliseconds);
  __timers.set(id,{due:__now()+(Number.isFinite(delay)?Math.max(0,delay):0),callback,args});
  return id;
}
function clearTimeout(id){__timers.delete(id);}
function __nextTimerDelay(){
  if(!__timers.size)return 50;
  let due=Infinity;
  for(const timer of __timers.values())due=Math.min(due,timer.due);
  // A zero native timed wait means an indefinite input wait. Overdue timers need
  // a positive wake-up, while fractional original delays must not fire early.
  return Math.max(1,Math.min(2147483647,Math.ceil(due-__now())));
}
function __pumpTimers(){
  const due=[...__timers.entries()].filter(([,timer])=>timer.due<=__now()).sort((a,b)=>a[1].due-b[1].due||a[0]-b[0]);
  for(const [id,timer] of due){if(__timers.delete(id))timer.callback(...timer.args);}
}
function __text(value) {
  if (Array.isArray(value)) return value.map(__text).join('');
  if (value && typeof value === 'object') {
    if (value.isBr) return '\n';
    if (value.isBlank) return ' '.repeat(value.isBlank === true ? 1 : value.isBlank);
    if (value.isDivider) return ' | ';
    if ('content' in value) return __text(value.content);
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    throw new Error('지원하지 않는 리치 텍스트 객체입니다');
  }
  return String(value ?? '');
}
function __key(key) {
  key = String(key).toLowerCase();
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  if (!/^(global|flag):\d+$/.test(key)) throw new Error('지원하지 않는 변수 경로: '+key);
  return key;
}
const __api = {
  get(key) {
    key=__key(key);
    return key === 'global:0' ? __readGlobal() : __values[key];
  },
  set(key,value) {
    key=__key(key);
    if (key === 'global:0') __writeGlobal(value); else __values[key]=value;
    return value;
  },
  add(key,value) { return value ? this.set(key,this.get(key)+value) : this.get(key); },
  print(content) { __emit('print',__text(content),0); },
  println(content='') { __emit('line',__text(content),0); },
  printButton(content,accelerator,config={}) {
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    if (!Number.isSafeInteger(accelerator)) throw new Error('버튼 단축키는 정수여야 합니다');
    if (!config.disabled) __emit('button',__text(content),accelerator);
  },
  input(config={}) {
    // Electron directs input to the newest inputKey. Older non-awaited promises stay unresolved.
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    if (__pending&&!config.game) throw new Error('동시 입력은 지원되지 않습니다');
    __inputConfig=config;
    __inputRule=config.useRule!==false && config.rule ? new RegExp('^'+config.rule+'$') : null;
    __state='input';
    return new Promise(resolve => { __pending=resolve; });
  },
  async printAndWait(content) { this.println(content); await this.input(); },
  async waitAnyKey() { await this.input(); },
  async saveData(slot) {
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    if(slot!==0) throw new Error('점검 기능은 슬롯 0만 지원합니다');
    __save(JSON.stringify({format:'erauma-compat-probe-v1',values:__values,global0:__readGlobal()}));
    return true;
  },
  async loadData(slot) {
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    if(slot!==0) throw new Error('점검 기능은 슬롯 0만 지원합니다');
    const save=JSON.parse(__load());
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    if(save.format!=='erauma-compat-probe-v1') throw new Error('호환성 점검용 세이브가 아닙니다');
    __values=Object.assign(Object.create(null),save.values); __writeGlobal(save.global0); return true;
  }
};
var era = new Proxy(__api,{get(target,key){
  if (key in target) return target[key];
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  throw new Error('구현되지 않은 Era API: '+String(key));
}});
function __start(fn) {
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  if (__state==='running'||__state==='input') throw new Error('세션이 이미 실행 중입니다');
  __state='running'; __error=''; __exitRequested=false;
  fn().then(()=>{__state='done';},error=>{if(__exitRequested){__state='done';return;}__state='error';__error=String(error)+'\n'+String(error.stack||'');});
}
function __resume(text) {
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
  if(!__pending) throw new Error('대기 중인 입력이 없습니다');
  if(__inputConfig.game&&!__inputConfig.any&&text===''){
    if(__inputConfig.options?.length===1)text=String(__inputConfig.options[0]);
    else {__feedback(__inputMessage('choice'));return;}
  }
  if(__inputRule && !__inputRule.test(text)){
// [번역 대상: 실행기 UI] 아래 원문의 문자열만 번역
    if(__inputConfig.game)__feedback(__inputMessage('pattern'));else __emit('line','입력이 필요한 형식과 일치하지 않습니다.',0);
    return;
  }
  if(__inputConfig.game && !__inputRule && __inputConfig.useRule!==false && __inputConfig.options?.length && !__inputConfig.options.includes(Number(text))){__feedback(__inputMessage('choice'));return;}
  __inputRule=null;
  const resolve=__pending; __pending=null; __state='running';
  const number=Number(text);
  resolve(__inputConfig.game ? (Number.isNaN(number)?text:number) : (text.trim()!=='' && Number.isFinite(number) ? number : text));
}
