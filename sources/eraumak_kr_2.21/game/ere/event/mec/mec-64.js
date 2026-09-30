const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');
const { i_pama_yandere } = require('#/event/snippets/64');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(`callname:${this.id}:0`, '트레이너');
    }
  }

  get_status(show_train_buff) {
    if (i_pama_yandere()) {
      return [
        {
          color: get_chara_color(this.id),
          content: '의존심',
          title: '오직 당신만이...',
        },
      ];
    }
    return super.get_status(show_train_buff);
  }
};
