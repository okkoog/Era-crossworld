era.set('global:0',100);
era.printButton('Early choice',1);
setTimeout(()=>era.printButton('Late choice',3),250);
const choice=await era.input();
if(choice!==3)throw Error('Expected late choice');
era.add('global:0',choice);
era.println('Timer callback and pending input resumed');
