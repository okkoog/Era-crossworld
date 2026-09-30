const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset || era.get('talent:74:성모') !== 1) {
      CustomizedInit.init_chara(13);
      CustomizedInit.init_chara(27);
      CustomizedInit.init_chara(59);
      CustomizedInit.init_chara(64);
      CustomizedInit.init_chara(71);
      CustomizedInit.init_chara(86);
      era.set('talent:74:반감획득', -1);
      era.set('talent:74:고통감수', -1);
      era.set('talent:74:수치내성', -1);
      era.set('talent:74:솔직함정도', 1);
      era.set('talent:74:성모', 1);
      era.set('talent:74:고통좋아함', 1);
      era.set('talent:74:음란한몸', -4);
      if (era.get('flag:캐릭터성별') === 1) {
        era.set('callname:74:2', '스즈카 씨');
        era.set('callname:74:13', '맥퀸 오빠');
        era.set('callname:74:27', '라이언 오빠');
        era.set('callname:74:64', '파머 오빠');
        era.set('callname:74:71', '아르당 오빠');
        era.set('callname:74:86', '라모누 오빠');
      } else {
        era.set('callname:74:2', '스즈카 씨');
        era.set('callname:74:13', '맥퀸 님');
        era.set('callname:74:27', '라이언 언니');
        era.set('callname:74:64', '파머 언니');
        era.set('callname:74:71', '아르당 언니');
        era.set('callname:74:86', '라모누 언니');
      }
    }
  }
};
