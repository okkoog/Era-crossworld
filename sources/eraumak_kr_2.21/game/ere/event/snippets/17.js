const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

/**
 * @param {string} p1
 * @param {string} p2
 */
function flip_params(p1, p2) {
  const tmp = era.get(p1);
  era.set(p1, era.get(p2));
  era.set(p2, tmp);
}

/** @param {LunaEduMarks} event_marks */
function transform(event_marks) {
  event_marks.emperor = 1 - event_marks.emperor;
  flip_params('cflag:17:컨디션', 'cflag:9017:컨디션');
  flip_params('status:17:자멸', 'status:9017:자멸');
  flip_params('status:17:미련', 'status:9017:미련');
  flip_params('status:17:황제', 'status:9017:황제');
  flip_params('status:17:심술', 'status:9017:심술');
  flip_params('status:17:신경쇠약', 'status:9017:신경쇠약');
  flip_params('love:17', 'love:9017');
  flip_params('callname:17:-1', 'callname:9017:-1');
  flip_params('callname:17:-2', 'callname:9017:-2');
  flip_params('callname:0:17', 'callname:0:9017');
  /** @type {Record<string,number>} */
  const relation_entries = era.get('relation:17');
  Object.keys(relation_entries).forEach((chara_id) => {
    flip_params(`callname:17:${chara_id}`, `callname:9017:${chara_id}`);
    flip_params(`relation:17:${chara_id}`, `relation:9017:${chara_id}`);
    flip_params(`callname:${chara_id}:17`, `callname:${chara_id}:9017`);
    flip_params(`relation:${chara_id}:17`, `relation:${chara_id}:9017`);
  });

  new Array(8)
    .fill(0)
    .forEach((_, i) =>
      flip_params(`talent:17:${i + 40}`, `talent:9017:${i + 40}`),
    );
  new Array(18)
    .fill(0)
    .forEach((_, i) => flip_params(`talent:17:${i}`, `talent:9017:${i}`));
}

module.exports = {
  /** @param {LunaEduMarks} edu_marks */
  good_end(edu_marks) {
    global_achievement.c_luna1 = 1;
    if (edu_marks.emperor > 0) {
      transform(edu_marks);
    }
    era.set('callname:17:-1', era.set('callname:17:-2', '심볼리 루돌프'));
    era.set(
      'relation:17:0',
      Math.max(era.get('relation:17:0'), era.get('relation:9017:0')),
    );
    era.set('love:17', Math.max(era.get('love:17'), era.get('love:9017')));
    new Array(7).fill(0).forEach((_, i) => era.set(`status:17:${110 + i}`, 0));
    era.set('status:17:성적성향', 0);
    era.set('status:17:도S', 1);
    sys_like_chara(17, 0, 800, true, 10);
  },
  /**
   * @param {LunaEduMarks} event_marks
   * @param {number} luna
   * @param {number} [extra_punish]
   */
  async handle_debuff(event_marks, luna, extra_punish) {
    let debuff = era.set(
      'status:17:정신손상',
      Math.min(era.get('status:17:정신손상') + (extra_punish || 1), 10),
    );
    era.println();
    await era.printAndWait([
      get_chara_talk(luna).get_colored_name(),
      '의 정신 상태가 더 나빠졌다...',
    ]);
    if (!event_marks.wax_and_wane) {
      event_marks.wax_and_wane++;
      add_event(
        event_hooks.week_end,
        new EventObject(17, cb_enum.edu).set_arg('wax_and_wane'),
      );
    }
    if (debuff >= 3 && !event_marks.a_stones_throw) {
      event_marks.a_stones_throw++;
    }
    if (debuff >= 6) {
      era.set(`status:${luna}:신경쇠약`, 1);
    }
  },
  /**
   * @param {LunaEduMarks} event_marks
   * @param {boolean} luna_end
   */
  normal_end(event_marks, luna_end) {
    if (event_marks.emperor === Number(luna_end)) {
      transform(event_marks);
    }
    era.set('callname:17:-1', era.set('callname:17:-2', '심볼리 루돌프'));
    era.set('status:17:영역', 0);
  },
  transform,
};
