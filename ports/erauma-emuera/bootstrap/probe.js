function test(a,b) { return a+b; }
era.println('eraUma compatibility test');
era.println('2 + 3 = '+test(2,3));
era.set('global:3','zh-CN');
era.set('global:0',100);
era.printButton('Add 5',5);
const selected=await era.input();
if(selected!==5) throw new Error('Expected numeric input 5');
era.add('global:0',selected);
era.println('GLOBAL:0 = '+era.get('global:0'));
era.println('Language = '+era.get('global:3'));
await era.saveData(0);
