/**
 * @file 오구리 캡 - 招募
 * @author 雞雞
 */
const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const lines = require('#/event/rec/rec-6.kojo');
const CustomizedRecruit = require('#/event/rec/rec-common');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_trainer_title } = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    if (await this.check_before_rec()) {
      return;
    }
    const dict = {};
    dict['당신'] = era.get('callname:0:-2');
    dict['우마무스메'] = era.get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
    dict['그녀'] = era.get('flag:캐릭터성별') === 1 ? '그' : '그녀';
    dict['하야카와 타즈나'] = era.get('callname:301:-2');
    dict['플레이어호칭'] = era.get('cflag:0:성별') === 1 ? '선생님' : '씨';
    dict['플레이어이름'] = era.get('callname:0:-1');
    dict['트레이너칭호'] = get_trainer_title().substring(0, 2);
    era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
    const ret = await lines['recruit'](dict);
    await this.recruit_end();
    era.println();
    era.set('cflag:6:육성턴수합산', 0);
    let wait_flag = false,
      motivation_change = 0;
    if (ret[1] === 1) {
      motivation_change++;
    } else {
      wait_flag = sys_like_chara(301, 0, -20) || wait_flag;
      wait_flag = sys_love_uma(301, 2) || wait_flag;
    }
    if (ret[2] === 1) {
      motivation_change++;
    } else {
      sys_change_attr_and_print(0, '체력', -era.get('maxbase:0:체력') * 0.1);
    }
    wait_flag = sys_change_motivation(6, motivation_change) || wait_flag;
    if (wait_flag) {
      await era.waitAnyKey();
    }
    add_event(
      event_hooks.week_end,
      new EventObject(this.id, cb_enum.edu).set_arg('beginning'),
    );
  }

  async recruit_result() {
    await super.recruit_result();
    RaceHistory.get(this.id).add_result(
      23,
      new RaceHistory.RaceResult(
        1,
        race_enum.begin_race,
        1,
        1,
        era.get('flag:현재연도') - 1,
      ),
    );
    era.add(`cflag:${this.id}:육성턴수합산`, 48);
    attr_names.forEach((e) => {
      era.add(`abl:${this.id}:${e}트레이닝레벨`, 2);
      era.add(`base:${this.id}:${e}`, get_random_value(400, 500));
    });
    era.add(`exp:${this.id}:스킬포인트`, 600);
    const available_skills = CharaAvailableSkills.get(this.id);
    const got_skills = available_skills.get().splice(0, 2);
    get_skills_and_print_in_event(this.id, got_skills);
    await era.waitAnyKey();
  }
};
