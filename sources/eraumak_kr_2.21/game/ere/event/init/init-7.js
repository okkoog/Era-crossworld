const { get, set } = require('#/era-electron');

const CustomizedInit = require('#/event/init/customized-init');

const { get_random_value } = require('#/utils/value-utils');

const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const { vehicle_enum } = require('#/data/move-const');

module.exports = class extends CustomizedInit {
  init(is_reset) {
    if (!is_reset && get('cflag:0:템플릿캐릭터') !== 7) {
      new GoldShipEduMarks().carrot = get_random_value(1, 4);
    }
    set('item:고루시호', 0);
    if (get('flag:1인용탈것') === vehicle_enum.gold_ship) {
      set('flag:1인용탈것', 0);
    }
  }
};
