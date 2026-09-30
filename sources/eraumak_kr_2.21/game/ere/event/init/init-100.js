const era = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset) {
      era.set(
        'callname:100:301',
        era.get('flag:캐릭터성별') === 1 ? '하야카와 선생' : '하야카와 씨',
      );
    }
    era.set('item:투혼주입채찍（S용）', 0);
  }
};
