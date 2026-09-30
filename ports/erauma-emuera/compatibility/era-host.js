'use strict';
// Deliberately small probe API. Unsupported game APIs throw; they are not silent no-ops.
var __state = 'idle', __error = '', __pending = null, __inputRule = null, __values = Object.create(null);
var __exitRequested = false;
var __inputConfig={};
var __timers=new Map(),__timerId=0;
function setTimeout(callback,milliseconds=0,...args){
  if(typeof callback!=='function')throw Error('Timer callback must be a function');
  const id=++__timerId,delay=Number(milliseconds);
  __timers.set(id,{due:__now()+(Number.isFinite(delay)?Math.max(0,delay):0),callback,args});
  return id;
}
function clearTimeout(id){__timers.delete(id);}
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
    throw new Error('Unsupported rich text object');
  }
  return String(value ?? '');
}
function __key(key) {
  key = String(key).toLowerCase();
  if (!/^(global|flag):\d+$/.test(key)) throw new Error('Unsupported variable path: '+key);
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
    if (!Number.isSafeInteger(accelerator)) throw new Error('Button accelerator must be integer');
    if (!config.disabled) __emit('button',__text(content),accelerator);
  },
  input(config={}) {
    // Electron directs input to the newest inputKey. Older non-awaited promises stay unresolved.
    if (__pending&&!config.game) throw new Error('Concurrent input is not supported');
    __inputConfig=config;
    __inputRule=config.useRule!==false && config.rule ? new RegExp('^'+config.rule+'$') : null;
    __state='input';
    return new Promise(resolve => { __pending=resolve; });
  },
  async printAndWait(content) { this.println(content); await this.input(); },
  async waitAnyKey() { await this.input(); },
  async saveData(slot) {
    if(slot!==0) throw new Error('Probe supports slot 0 only');
    __save(JSON.stringify({format:'erauma-compat-probe-v1',values:__values,global0:__readGlobal()}));
    return true;
  },
  async loadData(slot) {
    if(slot!==0) throw new Error('Probe supports slot 0 only');
    const save=JSON.parse(__load());
    if(save.format!=='erauma-compat-probe-v1') throw new Error('Not a compatibility probe save');
    __values=Object.assign(Object.create(null),save.values); __writeGlobal(save.global0); return true;
  }
};
var era = new Proxy(__api,{get(target,key){
  if (key in target) return target[key];
  throw new Error('Unimplemented Era API: '+String(key));
}});
function __start(fn) {
  if (__state==='running'||__state==='input') throw new Error('Session is already running');
  __state='running'; __error=''; __exitRequested=false;
  fn().then(()=>{__state='done';},error=>{if(__exitRequested){__state='done';return;}__state='error';__error=String(error)+'\n'+String(error.stack||'');});
}
function __resume(text) {
  if(!__pending) throw new Error('No pending input');
  if(__inputConfig.game&&!__inputConfig.any&&text===''){
    if(__inputConfig.options?.length===1)text=String(__inputConfig.options[0]);
    else {__emit('line','Enter a value or choose a button.',0);return;}
  }
  if(__inputRule && !__inputRule.test(text)){__emit('line','Input does not match the required pattern.',0);return;}
  if(__inputConfig.game && !__inputRule && __inputConfig.useRule!==false && __inputConfig.options?.length && !__inputConfig.options.includes(Number(text))){__emit('line','Choose an enabled button value.',0);return;}
  __inputRule=null;
  const resolve=__pending; __pending=null; __state='running';
  const number=Number(text);
  resolve(__inputConfig.game ? (Number.isNaN(number)?text:number) : (text.trim()!=='' && Number.isFinite(number) ? number : text));
}
