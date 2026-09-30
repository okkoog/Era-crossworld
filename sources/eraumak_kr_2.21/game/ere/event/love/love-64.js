/**
 * @file 메지로 파머 - 애정
 * @author Bottle
 * @author KUN
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_change_lust,
  sys_change_motivation,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_ero_page = require('#/page/page-ero');

const kojo = require('#/event/love/love-64.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_3p = require('#/event/snippets/quick-into-3p');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');
const event_hooks = require('#/data/event/event-hooks');
const PamaLifeMarks = require('#/data/event/life-event-marks/life-event-marks-64');
const { location_enum } = require('#/data/locations');
const { vehicle_enum } = require('#/data/move-const');
const RaceHistory = require('#/data/race/model/race-history');

module.exports = class extends CustomizedLove {
  get #dict() {
    const ret = {};
    const pama = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    ret['대표색'] = pama.color;
    ret.T = me.name;
    ret['그녀'] = pama.sex;
    ret['소녀'] = pama.teen_sex_title;
    ret['호칭'] = sys_get_callname(this.id, 0);
    ret['女'] = pama.phy_sex_title[0];
    ret['우마무스메'] = pama.uma_sex_title;
    return ret;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async distance(pama, me, callname, stage, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    new PamaLifeMarks().love_24 = 2;
    await print_name_and_show_kojo('거리감', pama, kojo, this.#dict);
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async happy(pama, me, callname, stage, extra_flag, event_object) {
    if (sys_check_awake(this.id) && sys_check_awake(0)) {
      add_event(stage, event_object);
      await era.printAndWait([
        '【만약 어느 날，',
        pama.get_colored_name(),
        '나 ',
        me.get_colored_name(),
        '이(가) 잠에 든다면……】',
      ]);
      return;
    }
    await print_name_and_show_kojo('기쁨', pama, kojo, this.#dict);
  }

  async 49(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 || me.sex_code === 0) {
      return await super['49'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const dict = this.#dict;
    const helios = get_chara_talk(65);
    dict['太阳神色'] = helios.color;
    dict['太阳神称呼善信'] = sys_get_callname(65, this.id);
    const ret = await print_name_and_show_kojo('온도', pama, kojo, dict);
    if (ret[1] === 2) {
      await sys_love_uma_in_event(this.id);
    } else {
      await punish_rejecting_love(this.id);
      era.set(`cflag:${this.id}:호감거절`, 49);
    }
  }

  async 74(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 || me.sex_code === 0) {
      return await super['74'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const ret = await print_name_and_show_kojo('약속', pama, kojo, this.#dict);
    if (ret.at(-1) === 2) {
      await sys_love_uma_in_event(this.id);
    } else {
      era.set(`cflag:${this.id}:호감거절`, 74);
      await punish_rejecting_love(this.id);
    }
  }

  async 89(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code === 1 && me.sex_code === 1) {
      return await super['89'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const dict = this.#dict;
    dict['자매'] = pama.siblings_sex_title;
    const ret = await print_name_and_show_kojo('따뜻한 태양', pama, kojo, dict);
    if (ret[0] === 2) {
      await sys_love_uma_in_event(this.id);
      begin_and_init_ero(0, this.id);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(this.id, part_enum.mouth),
        false,
      );
      if (ret[1] === 1) {
        await print_ero_page(this.id, true);
        await end_ero_and_show_result(true);
      } else {
        end_ero_and_train();
      }
    } else {
      era.set(`cflag:${this.id}:호감거절`, 89);
    }
  }

  async 99(pama, me, callname, stage, extra_flag, event_object) {
    if (pama.sex_code !== 0 || me.sex_code === 0) {
      return await super['99'](
        pama,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const dict = this.#dict;
    dict['ACE色'] = get_chara_talk(104).color;
    dict['ACE称呼善信'] = sys_get_callname(104, this.id);
    const ret = await print_name_and_show_kojo('자물쇠', pama, kojo, dict);
    if (ret[0] === 2) {
      await sys_love_uma_in_event(this.id);
      begin_and_init_ero(this.id);
      await quick_make_love(
        new EroParticipant(this.id, part_enum.hand),
        new EroParticipant(this.id, part_enum.virgin),
        false,
      );
      if (ret[3] === 1) {
        await masturbate(this.id);
        sys_change_lust(this.id, -1000);
      } else {
        set_palam_to_max(this.id, part_enum.virgin);
        sys_change_lust(this.id, 1000);
      }
      if (sys_change_motivation(this.id, ret[3] === 1 ? 1 : -1)) {
        await era.waitAnyKey();
      }
      end_ero_and_train();
    } else {
      era.set(`cflag:${this.id}:호감거절`, 99);
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async here(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_name_and_show_kojo('여기서도 괜찮아', pama, kojo, this.#dict);
    new PamaEduMarks().movie_job = 0;
    begin_and_init_ero(0, this.id);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(this.id, part_enum.virgin),
      false,
    );
    await quick_make_love(
      new EroParticipant(this.id, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(this.id, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    sys_change_lust(this.id, get_random_value(500, 1000));
    return true;
  }

  /** @param {CharaTalk} pama */
  async escape(pama) {
    const dict = this.#dict;
    dict['自称'] = era.get('callname:64:64');
    const ret = await print_name_and_show_kojo(
      '너와 함께 세상 끝까지 도망쳐',
      pama,
      kojo,
      dict,
    );
    era.set(`cflag:${this.id}:축제이벤트표시`, 0);
    const l_cache = era.get('flag:현재위치');
    let loc = -1;
    if (era.get(`love:${this.id}`) >= 75) {
      if (ret[1] === 1 && ret[5] === 2) {
        if (ret[8] === 1) {
          loc = location_enum.atrium;
        } else {
          loc = location_enum.love_hotel;
        }
      } else if (ret[1] === 2 && ret[3] === 2) {
        loc = location_enum.office;
      }
    }
    if (loc >= 0) {
      era.set('flag:현재위치', loc);
      await quick_into_sex(this.id);
      switch (loc) {
        case location_enum.office:
          await kojo['情人节办公室马跳结束'](dict);
          break;
        case location_enum.atrium:
          await kojo['情人节外出马跳结束'](dict);
      }
    }
    era.set('flag:현재위치', l_cache);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async trust(pama, me, callname, stage, extra, event_object) {
    if (
      RaceHistory.get(this.id)
        .get_entries()
        .filter((r) => r.weeks >= 96).length > 0 ||
      era.get(`cflag:${this.id}:육성턴수합산`) >= 3 * 48
    ) {
      return;
    }
    if (era.get(`cflag:${this.id}:자율훈련`) === 0) {
      add_event(stage, event_object);
      return;
    }
    await print_name_and_show_kojo('네가 믿어주는……', pama, kojo, {
      ...this.#dict,
      ACE色: get_chara_talk(104).color,
      트레이너본명: era.get('callname:0:-1'),
    });
    if (!era.get(`talent:${this.id}:얀데레`)) {
      era.set(`talent:${this.id}:얀데레`, 1);
    }
    add_event(event_hooks.week_start, event_object.set_arg('is_you'));
  }

  /** @param {CharaTalk} pama */
  async is_you(pama) {
    await print_name_and_show_kojo('바로 너이기에……', pama, kojo, {
      ...this.#dict,
      트레이너본명: era.get('callname:0:-1'),
    });
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async wait_or(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('flag:현재상호작용캐릭터') > 0 &&
      era.get('flag:현재상호작용캐릭터') !== this.id
    ) {
      await era.printAndWait(['【', pama.get_colored_name(), '가 옥상에서 기다리고 있다】']);
      add_event(stage, event_object);
      await era.clear(1);
      return;
    }
    if (new PamaEduMarks().only_you > 3) {
      await print_event_name('기다림，혹은……기대', pama);
    } else {
      await print_event_name('기다림，혹은……', pama);
    }
    await kojo['依存心天台事件']({
      ...this.#dict,
      自称: sys_get_callname(this.id, this.id),
    });
    if (all_reward_in_event(this.id, { relation: get_random_value(50, 100) })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async s_feeling(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      await era.printAndWait(['【', pama.get_colored_name(), '가 옥상에서 기다리고 있다】']);
      add_event(stage, event_object);
      await era.clear(1);
      return;
    }
    new PamaEduMarks().only_you++;
    if (
      (
        await print_name_and_show_kojo('이질감', pama, kojo, {
          ...this.#dict,
          自称: sys_get_callname(this.id, this.id),
        })
      )[0] === 2
    ) {
      const cache = era.get('flag:현재위치');
      era.set('flag:현재위치', location_enum.love_hotel);
      await quick_into_sex(this.id, this.id, true);
      await kojo['异样感马跳结束'](this.#dict);
      era.set('flag:현재위치', cache);
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async nap(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(stage, event_object);
      await era.printAndWait(
        ['【', pama.get_colored_name(), '와 옥상에서 점심을 먹어 보자】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const ret = await print_name_and_show_kojo(
      '평온한 낮잠 시간',
      pama,
      kojo,
      this.#dict,
    );
    let relation = 0;
    let love;
    switch (ret[2]) {
      case 1:
        relation = 10;
        break;
      case 2:
        love = 2;
        break;
      case 3:
        if (ret[6] === 1) {
          sys_change_lust(this.id, 1000);
        } else {
          await quick_into_sex(this.id, this.id, ret[7] === 2);
          await kojo['午睡马跳后续'](this.#dict);
        }
    }
    if (all_reward_in_event(this.id, { love, relation })) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async leisure(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(stage, event_object);
      await era.printAndWait(
        ['【', pama.get_colored_name(), '와 가라오케에 가보자!】'],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const ret = await print_name_and_show_kojo('여유로운 시간', pama, kojo, {
      ...this.#dict,
      自称: sys_get_callname(this.id, this.id),
    });
    if (ret[1] === 3 && ret[2] === 1) {
      await quick_into_sex(this.id);
    }
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async cinema(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('flag:현재상호작용캐릭터') !== this.id ||
      era.get('cflag:71:위치') !== era.get(`cflag:${this.id}:위치`)
    ) {
      add_event(stage, event_object);
      await era.printAndWait(
        [
          '【 ',
          get_chara_talk(71).get_colored_name(),
          '과 ',
          pama.get_colored_name(),
          '이 함께 있을 때 영화관에 가보자!】',
        ],
        {
          color: pama.color,
        },
      );
      await era.clear(1);
      return;
    }
    const dict = this.#dict;
    dict['阿尔丹色'] = get_chara_talk(71).color;
    const ret = await print_name_and_show_kojo(
      '영화관 괴담!?',
      pama,
      kojo,
      dict,
    );
    let lover = 0;
    const cache = era.get('flag:현재위치');
    era.set('flag:현재위치', location_enum.love_hotel);
    if (ret[0] === 1) {
      if (ret[4] === 2) {
        lover = this.id;
      }
    } else {
      lover = 71;
    }
    if (lover > 0) {
      let supporter;
      let master = 0;
      if (lover === 71) {
        supporter = this.id;
        master = 71;
      } else {
        supporter = 71;
      }
      await quick_into_3p(lover, supporter, master);
      await kojo['电影院怪谈马跳结束'](dict);
    }
    era.set('flag:현재위치', cache);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async delicious(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_name_and_show_kojo('갑자기 간식타임?', pama, kojo, this.#dict);
    let wait = all_reward_in_event(this.id, {
      base: JSON.parse('{"체력":200}'),
    });
    wait =
      all_reward_in_event(0, {
        base: JSON.parse('{"체력":200}'),
      }) || wait;
    sys_change_weight(this.id, get_random_value(10, 20));
    sys_change_weight(0, get_random_value(10, 20));
    if (wait) {
      await era.waitAnyKey();
    }
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async rest(pama, me, callname, stage, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(stage, event_object);
      return;
    }
    await print_name_and_show_kojo('휴식……?', pama, kojo, this.#dict);
    await quick_into_sex(this.id);
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async travel(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('flag:현재상호작용캐릭터') !== this.id ||
      era.get('flag:다인용탈것') !== vehicle_enum.pama
    ) {
      add_event(stage, event_object);
      await era.printAndWait([
        '【파머호로 ',
        pama.get_colored_name(),
        '와 함께 드라이브하자!】',
      ]);
      return;
    }
    await print_name_and_show_kojo('짧은 여행', pama, kojo, this.#dict);
    const cache = era.get('flag:현재위치');
    era.set('flag:현재위치', location_enum.river);
    await quick_into_sex(this.id);
    era.set('flag:현재위치', cache);
    return true;
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async joke(pama, me, callname, stage, extra, event_object) {
    if (
      era.get(`status:${this.id}:숙면`) > 0 ||
      era.get(`status:${this.id}:우마뾰이S`) > 0
    ) {
      add_event(stage, event_object);
      await era.printAndWait([
        '【',
        pama.get_colored_name(),
        '가 잠들었을 때……】',
      ]);
      return;
    }
    await print_name_and_show_kojo('한 편의 짧은 이야기', pama, kojo, {
      ACE色: get_chara_talk(104).color,
      대표색: get_chara_talk(this.id).color,
      트레이너본명: era.get('callname:0:-1'),
    });
    add_event(stage, event_object.set_arg('not_joke'));
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async not_joke(pama, me, callname, hook, extra, event_object) {
    const ret = await print_name_and_show_kojo('별로 웃기지 않은 농담', pama, kojo, {
      ...this.#dict,
      自称: sys_get_callname(this.id, this.id),
    });
    if (ret[2] === 1) {
      await quick_into_sex(this.id);
      await kojo['玩笑马跳结束'](this.#dict);
    } else {
      add_event(event_hooks.week_start, event_object.set_arg('end_joke'));
    }
  }

  /** @param {CharaTalk} pama */
  async end_joke(pama) {
    await print_name_and_show_kojo('농담은 이제 끝', pama, kojo, this.#dict);
    if (all_reward_in_event(this.id, { relation: 0, love: 4 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async concern(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('cflag:0:위치') !== era.get(`cflag:${this.id}:위치`) ||
      era.get('cflag:0:위치') !== era.get('cflag:27:위치')
    ) {
      add_event(stage, event_object);
      return;
    }
    const dict = this.#dict;
    dict['莱恩色'] = get_chara_talk(27).color;
    dict['莱恩称呼T'] = sys_get_callname(27, 0);
    dict['自称'] = sys_get_callname(this.id, this.id);
    let lover = this.id;
    let supporter;
    let master = 0;
    switch (
      (await print_name_and_show_kojo('너무 신경쓰지 마!', pama, kojo, dict))[4]
    ) {
      case 1:
        lover = 27;
        supporter = this.id;
        break;
      case 2:
        supporter = 27;
        break;
      case 3:
        supporter = 27;
        master = this.id;
    }
    await quick_into_3p(lover, supporter, master);
    await kojo['过度关心马跳结束'](dict);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async dessert(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('cflag:0:위치') !== era.get(`cflag:${this.id}:위치`) ||
      era.get('cflag:0:위치') !== era.get('cflag:13:위치')
    ) {
      add_event(stage, event_object);
      return;
    }
    const dict = this.#dict;
    dict['麦昆色'] = get_chara_talk(13).color;
    dict['玩家尊称'] = get_chara_talk(0).adult_sex_title;
    dict['自称'] = sys_get_callname(this.id, this.id);
    let master = 0;
    if (
      (
        await print_name_and_show_kojo('디저트……뭔가 이상한데?', pama, kojo, dict)
      )[5] === 2
    ) {
      master = 13;
    }
    await quick_into_3p(13, this.id, master);
    await kojo['甜品事件马跳结束'](dict);
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {number} stage
   * @param extra
   * @param {EventObject} event_object
   */
  async party(pama, me, callname, stage, extra, event_object) {
    if (
      era.get('flag:현재상호작용캐릭터') !== this.id ||
      era.get('cflag:0:위치') !== era.get(`cflag:${this.id}:위치`) ||
      era.get('cflag:0:위치') !== era.get('cflag:65:위치')
    ) {
      add_event(stage, event_object);
      return;
    }
    const dict = this.#dict;
    dict['당신'] = get_chara_talk(0).name;
    dict['太阳神色'] = get_chara_talk(65).color;
    dict['호칭'] = sys_get_callname(this.id, 0);
    dict['训练P'] = sys_get_callname(65, 0);
    let master = 0;
    if (
      (await print_name_and_show_kojo('파티 타임', pama, kojo, dict))[3] === 2
    ) {
      master = this.id;
    }
    await quick_into_3p(this.id, 65, master);
    await kojo['派对马跳结束'](dict);
    return true;
  }
};
