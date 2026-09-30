'use strict';
// Deliberately small probe API. Unsupported game APIs throw; they are not silent no-ops.
var __state = 'idle', __error = '', __pending = null, __inputRule = null, __values = Object.create(null);
var __exitRequested = false;
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
    if (__pending) throw new Error('Concurrent input is not supported');
    __inputRule=config.useRule && config.rule ? new RegExp(config.rule) : null;
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
  if(__inputRule && !__inputRule.test(text)){__emit('line','Input does not match the required pattern.',0);return;}
  __inputRule=null;
  const resolve=__pending; __pending=null; __state='running';
  const number=Number(text);
  resolve(text.trim()!=='' && Number.isFinite(number) ? number : text);
}
