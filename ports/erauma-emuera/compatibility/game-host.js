'use strict';
// Original modules load lazily and unchanged, retaining CommonJS circular-module semantics.
var __cache=Object.create(null);
function __resolve(name,parent='') {
  if(name==='#/era-electron') return '$era';
  if(name.startsWith('#/')) name=name.slice(2);
  else if(name.startsWith('@/')) name='engine/'+name.slice(2);
  else if(name.startsWith('.')) name=parent.slice(0,parent.lastIndexOf('/')+1)+name;
  const parts=[];
  for(const p of name.split('/')) { if(p==='..') {if(!parts.length)throw Error('Module traversal');parts.pop();}else if(p&&p!=='.')parts.push(p); }
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
    return module.exports;
  } catch(error) { delete __cache[id];throw new Error('Module '+id+': '+error.message); }
}
var console={log:(...x)=>__emit('line',x.join(' '),0),debug:()=>{},warn:(...x)=>__emit('line',x.join(' '),0),error:(...x)=>__emit('line',x.join(' '),0)};
var Buffer={from:(text,encoding)=>{if(encoding!=='utf-8')throw Error('Only UTF-8 save buffer supported');return String(text);}};
function __render(item) {
  if(!item)return;
  if(Array.isArray(item)){item.forEach(__render);return;}
  if(item.type==='button') { if(!item.config?.disabled)__emit('button',__text(item.content),item.accelerator); }
  else if(item.type==='divider')__emit('line','--- '+(item.config?.content||''),0);
  else if(item.type==='image'||item.type==='image.whole')__emit('line','[image omitted]',0);
  else if(item.type==='text')__emit('line',__text(item.content),0);
  else if(item.type==='progress')__emit('line',__text(item.inContent)+' ('+item.percentage+'%) '+__text(item.outContent),0);
  else if(item.columns)__render(item.columns);
  else throw Error('Unsupported UI object: '+JSON.stringify(item));
}
var __game={
  config:__tables.config,defaultConfig:__tables.config,fixedConfig:__tables.fixed,
  extendedTables:__tables.extend,fieldNames:__tables.names,staticData:__tables.static,
  global:{saves:{}},data:{},res:{},path:'game',erePath:'ere',
  quit(){__exitRequested=true;},
  logger:console,log:(x)=>console.log(x),error:(message)=>{throw Error(message);},
  connect(kind,data={}) {
    switch(kind) {
      case 'print':case 'replaceText':__emit('line',__text(data.content),0);break;
      case 'println':__emit('line','',0);break;
      case 'drawLine':__emit('line','---',0);break;
      case 'printButton':__render({type:'button',...data});break;
      case 'printMultiCols':__render(data.columns);break;
      case 'printInColRows':case 'replaceInColRows':__render(data.columns||data.objects);break;
      case 'printImage':case 'printWholeImage':__emit('line','[image omitted]',0);break;
      case 'printProgress':__emit('line',__text(data.inContent)+' '+data.percentage+'% '+__text(data.outContent),0);break;
      case 'notify':__emit('line',__text(data.title)+': '+__text(data.content),0);break;
      case 'printLineChart':
        __emit('line','[chart data] '+JSON.stringify(data.data),0);break;
      case 'setAlign':case 'setBack':case 'setColor':case 'setHorizontalAlign':case 'setMask':case 'setOffset':case 'setOverlay':case 'setTitle':case 'setToBottom':case 'setVerticalAlign':case 'setWidth':case 'playMusic':case 'stopMusic':case 'resumeMusic':case 'pauseMusic':break;
      default:throw Error('Unsupported renderer event: '+kind);
    }
  }
};
const OriginalApi=__require('@/era/model/era-api');
const original=new OriginalApi(__game);
__game.api=original;
Object.values(__tables.static.global||{}).forEach(k=>__game.global[k]=0);
original.resetData();
original.input=__api.input;
original.waitAnyKey=__api.waitAnyKey;
original.clear=async function(){this.totalLines=0;__emit('clear','',0);return 0;};
original.version={engine:3000};
original.isEra=true;
// Presentation delays are omitted in this text-only prototype; game computations are unchanged.
original.delay=async function(){};
original.proxyKojo=function(kojo){return new Proxy(kojo,{get(target,key){
  if(target[key]===undefined)throw Error('Missing kojo key: '+String(key));
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
