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
var console={log:(...x)=>__emit('line',x.join(' '),0),debug:()=>{},warn:(...x)=>__emit('diagnostic',x.join(' '),0),error:(...x)=>__emit('diagnostic',x.join(' '),0)};
var Buffer={from:(text,encoding)=>{if(encoding!=='utf-8')throw Error('Only UTF-8 save buffer supported');return String(text);}};
var __screen=[],__frame=null,__buttonEpoch=0,__notices=[];
function __out(kind,text,id=0){
  if(__frame)__frame.push([kind,String(text),id,__buttonEpoch]);
  else __emit(kind,String(text),id);
}
function __redraw(){
  __emit('clear','',0);
  for(const group of __screen)for(const event of group){
    if(event[0]==='button'&&event[3]!==__buttonEpoch)__emit('line',event[1],0);
    else __emit(event[0],event[1],event[2]);
  }
  __notices=__notices.filter(n=>n.expires>__now());
  for(const notice of __notices)__emit('line',notice.text,0);
}
function __render(item) {
  if(!item)return;
  if(Array.isArray(item)){item.forEach(__render);return;}
  if(item.type==='button') { if(!item.config?.disabled)__out('button',__text(item.content),item.accelerator); else __out('line','[disabled] '+__text(item.content)); }
  else if(item.type==='divider')__out('line','--- '+(item.config?.content||''));
  else if(item.type==='image'||item.type==='image.whole')__out('line','[image omitted]');
  else if(item.type==='text')__out('line',__text(item.content));
  else if(item.type==='progress')__out('line',__text(item.inContent)+' ('+item.percentage+'%) '+__text(item.outContent));
  else if(item.columns)__render(item.columns);
  else throw Error('Unsupported UI object: '+JSON.stringify(item));
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
  global:{saves:{}},data:{},res:{},path:'game',erePath:'ere',
  quit(){__exitRequested=true;},
  logger:console,log:(x)=>console.log(x),error:(message,stack)=>{__emit('diagnostic',String(message)+(stack?'\n'+stack:''),0);},
  connect(kind,data={}) {
    if(['setAlign','setBack','setColor','setHorizontalAlign','setMask','setOffset','setOverlay','setTitle','setVerticalAlign','setWidth','playMusic','stopMusic','resumeMusic','pauseMusic'].includes(kind))return;
    if(kind==='notify'){
      const text=__text(data.title)+': '+__text(data.content);
      __notices.push({text,expires:__now()+10000});if(__notices.length>8)__notices.shift();
      __emit('line',text,0);return;
    }
    const group=[];__frame=group;
    try {
    switch(kind) {
      case 'print':case 'replaceText':__out('line',__text(data.content));break;
      case 'println':__out('line','');break;
      case 'setToBottom':__out('line','');break;
      case 'drawLine':__out('line','--- '+(data.config?.content||''));break;
      case 'printButton':__render({type:'button',...data});break;
      case 'printMultiCols':__render(data.columns);break;
      case 'printInColRows':case 'replaceInColRows':__render(data.columns||data.objects);break;
      case 'printImage':case 'printWholeImage':__out('line','[image omitted]');break;
      case 'printProgress':__out('line',__text(data.inContent)+' '+data.percentage+'% '+__text(data.outContent));break;
      case 'printLineChart':
        __chart(data.data);break;
      default:throw Error('Unsupported renderer event: '+kind);
    }
    } finally {__frame=null;}
    if(kind==='replaceText'||kind==='replaceInColRows'){
      __screen.splice(Math.max(0,__screen.length-1),1,group);__redraw();
    }else{
      __screen.push(group);
      for(const event of group)__emit(event[0],event[1],event[2]);
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
original.input=async function(config={}){
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
// Presentation delays are omitted in the text UI; game computations are unchanged.
original.delay=async function(){};
original.proxyKojo=function(kojo){return new Proxy(kojo,{get(target,key){
  if(target[key]===undefined)return async()=>__emit('diagnostic','[kojo warning] Missing key: '+String(key),0);
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
