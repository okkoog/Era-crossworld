const era = require('#/era-electron');

const {
  sys_check_awake,
  sys_check_race_ready,
} = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');

module.exports = {
  /**
   * @param {number} chara_id
   * @param {number} race_week
   * @param {number} cur_weeks
   */
  generate_race_button(chara_id, race_week, cur_weeks) {
    if (race_week === cur_weeks) {
      return {
        accelerator: 102,
        config: {
          buttonType: 'danger',
          disabled: !sys_check_race_ready(chara_id) || !sys_check_awake(0),
          width: 6,
        },
        content: '레이스 출주',
        type: 'button',
      };
    }
    const edu_weeks = era.get(`cflag:${chara_id}:육성턴수합산`);
    return {
      accelerator: 102,
      config: {
        buttonType: EventMarks.get(0).check(event_hooks.register_race)
          ? 'danger'
          : 'warning',
        disabled:
          !get_custom_mec(chara_id).is_race_register_enabled() ||
          !era.get(`cflag:${chara_id}:종족`) ||
          (chara_id &&
            (typeof edu_weeks !== 'number' ||
              era.get(`cflag:${chara_id}:육성턴수합산`) >= 48 * 3)),
        width: 6,
      },
      content: '레이스 등록',
      type: 'button',
    };
  },
};
