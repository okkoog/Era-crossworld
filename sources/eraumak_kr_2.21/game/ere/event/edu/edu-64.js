/**
 * @file 메지로 파머 - 育成
 * @author KUN
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-64.kojo');
const Edu64Base = require('#/event/edu/edu-events-64/base');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu64Base {
  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async rain(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') > 0) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        '【혼자 있던 어느 비 오는 날, 뜻밖의 만남이 있을지도 모른다】',
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    await print_name_and_show_kojo('비에 흠뻑 젖더라도', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async important_place(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        [
          '【',
          pama.get_colored_name(),
          '가 예전에 여기서 프리 레이스에 참가했었는데……다시 데려와 볼까?】',
        ],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const attr = [0, 0, 0, 0, 0];
    if (
      (
        await print_name_and_show_kojo(
          '중요한 장소니까',
          pama,
          kojo,
          this.dict,
        )
      )[2] === 1
    ) {
      attr[attr_enum.speed] = 10;
    } else {
      attr[attr_enum.intelligence] = 10;
    }
    if (all_reward_in_event(this.id, { attr })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async golf(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【최근 ', pama.get_colored_name(), '는 훈련을 마치고 나면 상점가로 오는 것 같다】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    await print_name_and_show_kojo('먼 길을 돌아 홀인원', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async lottery(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:현재월') !== 1) {
      return;
    }
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【', pama.get_colored_name(), '와 경품 추첨에 참여해 보자!】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const dict = this.dict;
    dict.dice = get_random_value(1, 4);
    const ret = await print_name_and_show_kojo('경품 추첨!', pama, kojo, dict);
    let base;
    const attr = new Array(5).fill(0);
    let relation = 0;
    let love;
    switch (dict.dice) {
      case 1:
        base = JSON.parse('{"체력":200}');
        break;
      case 2:
        attr.fill(5);
        break;
      case 3:
        attr.fill(10);
        if (ret[0] === 1) {
          relation = 20;
        } else {
          love = 4;
        }
        break;
      case 4:
        new PamaEduMarks().hot_spring = 1;
    }
    if (
      all_reward_in_event(this.id, {
        attr,
        base,
        love,
        relation,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hot_spring(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:현재월') !== 12) {
      return;
    }
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【', pama.get_colored_name(), '와 함께 온천에 가 보자!】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    new PamaEduMarks().hot_spring++;
    const dict = this.dict;
    dict['그'] = get_chara_talk(0).sex;
    dict['太阳神色'] = get_chara_talk(65).color;
    const ret = await print_name_and_show_kojo('온천 여행', pama, kojo, dict);
    let love;
    if (ret[1] === 2) {
      love = 6;
    }
    let wait = all_reward_in_event(this.id, { love });
    if (ret[1] === 2) {
      wait = sys_like_chara(this.id, 65, 50) || wait;
      wait = sys_like_chara(65, this.id, 50) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async lunch_break(pama) {
    await print_name_and_show_kojo('점심시간을 놓쳤어', pama, kojo, this.dict);
    if (
      all_reward_in_event(this.id, {
        base: JSON.parse('{"체력":-50}'),
        motivation: -1,
        relation: 0,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async dis_talent(pama) {
    const ret = await print_name_and_show_kojo('거리감의 천재', pama, kojo, {
      ...this.dict,
      大进色: get_chara_talk(50).color,
      白仁色: get_chara_talk(16).color,
    });
    let relation = 0;
    let love;
    if (ret[2] === 1) {
      relation = 10;
    } else {
      love = 2;
    }
    if (
      all_reward_in_event(this.id, {
        relation,
        love,
      })
    ) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async choice(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(hook.hook, event_object);
      await era.printAndWait(
        ['【', pama.get_colored_name(), '와 함께 쇼핑하러 가 보자!】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const dict = this.dict;
    dict['光明色'] = get_chara_talk(74).color;
    dict['多伯色'] = get_chara_talk(59).color;
    const ret = await print_name_and_show_kojo('궁극의 선택!', pama, kojo, dict);
    let aim;
    const attr = [0];
    if (ret[0] === 1) {
      aim = 59;
    } else {
      aim = 74;
    }
    if (era.get(`cflag:${aim}:모집상태`) === recruit_flags.yes) {
      attr[0] = 25;
    } else {
      attr[0] = 15;
    }
    let wait = all_reward_in_event(this.id, { attr });
    if (era.get(`cflag:${aim}:모집상태`) === recruit_flags.yes) {
      wait = sys_like_chara(aim, this.id, 25) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async confused(pama) {
    const dict = this.dict;
    dict['太阳神色'] = get_chara_talk(65).color;
    dict['太阳神称呼T'] = sys_get_callname(65, 0);
    dict['太阳神称呼善信'] = sys_get_callname(65, this.id);
    await print_name_and_show_kojo('방황하는 연심', pama, kojo, dict);
  }

  /** @param {CharaTalk} pama */
  async a_step(pama) {
    const dict = this.dict;
    dict['阿尔丹色'] = get_chara_talk(71).color;
    await print_name_and_show_kojo('앞으로 내딛은 한 걸음', pama, kojo, dict);
  }
};
