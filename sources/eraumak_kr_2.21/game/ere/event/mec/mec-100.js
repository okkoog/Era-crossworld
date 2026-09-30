const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

module.exports = class extends CustomizedMec {
  set_callname() {
    if(era.get('cflag:0:성별') == 1) {
    era.set('callname:100:0', era.get('callname:0:-1') + '군' );} 
    else {
    era.set('callname:100:0', era.get('callname:0:-1') + '짱' );}
  }
};
