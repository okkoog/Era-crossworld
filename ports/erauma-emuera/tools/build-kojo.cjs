// Build-time only: reuse upstream kojo compiler and YAMLJS, never rewrite game JS.
const fs=require('fs'),path=require('path');
const [source,output,compiler,yaml]=process.argv.slice(2).map(x=>path.resolve(x));
const parseKojo=require(compiler),Yaml=require(yaml);
let count=0;
function walk(dir){for(const item of fs.readdirSync(dir,{withFileTypes:true})){
 const input=path.join(dir,item.name);
 if(item.isDirectory())walk(input);
 else if(item.name.endsWith('.kojo')){
   const relative=path.relative(source,input),target=path.join(output,relative+'.js');
   fs.mkdirSync(path.dirname(target),{recursive:true});
   fs.writeFileSync(target,'const era=require("#/era-electron");'+parseKojo(Yaml.parse(fs.readFileSync(input,'utf8'))));count++;
 }
}}
walk(source);console.log(JSON.stringify({compiledKojoFiles:count,compiler,source,output}));
