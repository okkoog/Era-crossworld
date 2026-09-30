/**
 * @file 타마모 크로스 - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const sys_change_tired = require('#/system/chara/sys-change-tired');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/edu/edu-21.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const TamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-21');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  get #dict() {
    const tama = get_chara_talk(this.id),
      me = get_chara_talk(0);
    const o = {};
    o['玉藻色'] = tama.color;
    o['그녀'] = tama.sex;
    o['우마무스메'] = tama.get_uma_sex_title();
    o['당신'] = me.name;
    o['그'] = me.sex;
    return o;
  }

  /** @param {CharaTalk} tama */
  async misfortune(tama) {
    new TamaEduMarks().lightning = 1;
    const ret = await print_name_and_show_kojo(
      '청천벽력',
      tama,
      kojo,
      this.#dict,
    );
    let relation = 0,
      love = 0;
    if (ret[6] === 1) {
      love = 2;
      sys_change_tired(this.id, 1);
    } else if (ret[6] === 2) {
      relation = 10;
    }
    if (all_reward_in_event(this.id, { relation, love })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async cloudy1(tama) {
    const edu_marks = new TamaEduMarks();
    if (
      (
        await print_name_and_show_kojo('잔뜩 낀 구름 I', tama, kojo, this.#dict)
      )[0] === 1
    ) {
      edu_marks.heal = 1;
    } else {
      edu_marks.heal = -1;
    }
  }

  /** @param {CharaTalk} tama */
  async cloudy2(tama) {
    sys_change_tired(
      this.id,
      (
        await print_name_and_show_kojo('잔뜩 낀 구름 II', tama, kojo, this.#dict)
      )[1] === 1
        ? 2
        : 1,
    );
  }

  /** @param {CharaTalk} tama */
  async cloudy3(tama) {
    let relation = 0,
      love = 0;
    if (
      (
        await print_name_and_show_kojo('잔뜩 낀 구름 III', tama, kojo, this.#dict)
      )[2] === 1
    ) {
      relation = 10;
    } else {
      love = 1;
    }
    if (
      all_reward_in_event(this.id, {
        attr: new Array(5).fill(3),
        pt: 45,
        relation,
        love,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async new_year(tama) {
    era.set(`cflag:${this.id}:축제이벤트표시`, 0);
    await print_event_name('新年的抱负', tama);
    const ret = await kojo['클래식 시즌의 새해 다짐'](this.#dict);
    let wait_flag = false;
    switch (ret[4]) {
      case 1:
        wait_flag = all_reward_in_event(this.id, { attr: [0, 10] });
        break;
      case 2:
        wait_flag = all_reward_in_event(this.id, {
          base: JSON.parse(
            `{"체력":${era.get(`maxbase:${this.id}:체력`) * 0.1}}`,
          ),
        });
        break;
      case 3:
        wait_flag = all_reward_in_event(this.id, { pt: 20 });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async seems(tama) {
    await print_name_and_show_kojo('할 수 있을지도?', tama, kojo, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: new Array(5).fill(3),
        pt: 45,
        love: 5,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async lightning_heart1(tama) {
    let relation = 0,
      love = 0;
    const ret = await print_name_and_show_kojo(
      '번개의 심장 I',
      tama,
      kojo,
      this.#dict,
    );
    if (ret[1] === 1) {
      love = 2;
    } else {
      relation = 10;
    }
    if (
      all_reward_in_event(this.id, {
        love,
        relation,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} tama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async summer(tama, me, callname, hook, extra_flag, event_object) {
    if (sys_check_remote(this.id)) {
      add_event(hook.hook, event_object);
      return;
    }

    await print_name_and_show_kojo(
      era.get(`cflag:${this.id}:육성턴수합산`) > 96
        ? '여름 합숙（시니어 시즌）'
        : '여름 합숙（클래식 시즌）',
      tama,
      kojo,
      this.#dict,
    );
    if (
      all_reward_in_event(this.id, {
        attr: gacha(Object.values(attr_enum), 3).reduce((p, c) => {
          p[c] += 5;
          return p;
        }, new Array(5).fill(3)),
        pt: 45,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async spring_thunder(tama) {
    await print_name_and_show_kojo('봄의 천둥소리', tama, kojo, this.#dict);
  }

  /** @param {CharaTalk} tama */
  async threaten(tama) {
    await print_name_and_show_kojo('이빨을 드러낸 자', tama, kojo, this.#dict);
  }

  /** @param {CharaTalk} tama */
  async whats_adult(tama) {
    let wait_flag = false;
    const ret = await print_name_and_show_kojo(
      '도대체 어른이라는 기 뭐꼬?',
      tama,
      kojo,
      this.#dict,
    );
    switch (ret[2]) {
      case 1:
        wait_flag = all_reward_in_event(this.id, { attr: [5, 0, 10] });
        break;
      case 2:
        wait_flag = all_reward_in_event(this.id, { pt: 20 });
        break;
      case 3:
        wait_flag = all_reward_in_event(this.id, { love: 5 });
    }
    if (wait_flag) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async gymnastics(tama) {
    await print_name_and_show_kojo('키크기 체조', tama, kojo, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: new Array(5).fill(5),
        pt: 30,
        love: 2,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} tama */
  async clothe(tama) {
    const dict = this.#dict;
    dict['帝王色'] = get_chara_color(3);
    dict['玛雅色'] = get_chara_color(24);
    dict['理事长色'] = get_chara_color(302);
    const ret = await print_name_and_show_kojo(
      '내한테 어울리는 옷',
      tama,
      kojo,
      dict,
    );
    const attr = new Array(5).fill(0);
    let relation = 0,
      love = 0;
    if (ret[0] === 1) {
      relation = 10;
    } else {
      love = 2;
    }
    if (ret[3] === 1) {
      attr[attr_enum.speed] = 20;
      if (era.get(`cstr:${this.id}:승부복`) !== -1) {
        era.set(`cstr:${this.id}:승부복`, '_江户');
      }
    } else {
      attr[attr_enum.strength] = attr[attr_enum.toughness] = 10;
      if (era.get(`cstr:${this.id}:승부복`) !== -1) {
        era.set(`cstr:${this.id}:승부복`, '');
      }
    }
    if (
      all_reward_in_event(this.id, {
        attr,
        relation,
        love,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  async race_start(tama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    const history = RaceHistory.get(this.id).get();
    let name;
    switch (extra_flag.race) {
      case race_enum.toky_yus:
        if (check_aim_race(history, race_enum.sats_sho, 1, 1)) {
          name = '우준 소녀 I';
          await print_event_name(
            '우준 ' + tama.get_teen_sex_title() + ' I',
            tama,
          );
          if ((await kojo[name](this.#dict))[0] === 1) {
            extra_flag.love_change = 2;
            extra_flag.motivation_change = 1;
          } else {
            extra_flag.relation_change = 10;
            const base = {};
            base['체력'] = era.get(`maxbase:${this.id}:체력`) * 0.2;
            base['기력'] = era.get(`maxbase:${this.id}:기력`) * 0.2;
            extra_flag.base_change = base;
          }
        }
        break;
      case race_enum.kiku_sho:
        if (
          check_aim_race(history, race_enum.sats_sho, 1, 1) &&
          check_aim_race(history, race_enum.toky_yus, 1, 1)
        ) {
          name = '전설이 되다 I';
          await print_name_and_show_kojo(name, tama, kojo, this.#dict);
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          name = '하얀 번개 I';
          await print_name_and_show_kojo(name, tama, kojo, this.#dict);
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          name = '텐노상 (가을) 전';
          await print_name_and_show_kojo(name, tama, kojo, this.#dict);
        }
    }
    if (name === undefined) {
      await super.race_start(tama, me, callname, hook, extra_flag);
    }
  }

  async race_end(tama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    const history = RaceHistory.get(this.id).get();
    let name;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (extra_flag.rank === 1) {
          name = '지옥으로 팔려가다!';
          await print_name_and_show_kojo(name, tama, kojo, this.#dict);
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          name = '번개의 심장 II';
          await print_name_and_show_kojo(name, tama, kojo, this.#dict);
          if (
            all_reward_in_event(this.id, {
              attr: new Array(5).fill(3),
              pt: 45,
            })
          ) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.toky_yus:
        if (
          extra_flag.rank === 1 &&
          check_aim_race(history, race_enum.sats_sho, 1, 1)
        ) {
          name = '우준 소녀 II';
          await print_event_name(
            '우준 ' + tama.get_teen_sex_title() + ' II',
            tama,
          );
          await kojo[name](this.#dict);
          if (
            all_reward_in_event(this.id, {
              attr: new Array(5).fill(3),
              pt: 45,
            })
          ) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.kiku_sho:
        if (
          extra_flag.rank === 1 &&
          check_aim_race(history, race_enum.sats_sho, 1, 1) &&
          check_aim_race(history, race_enum.toky_yus, 1, 1)
        ) {
          name = '전설이 되다 II';
          await print_name_and_show_kojo(name, tama, kojo, this.#dict);
          if (
            all_reward_in_event(this.id, {
              attr: new Array(5).fill(3),
              pt: 45,
            })
          ) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.hans_dai:
        if (extra_flag.rank === 1) {
          name = '전초전';
          if (
            (
              await print_name_and_show_kojo(name, tama, kojo, this.#dict)
            )[1] === 1
          ) {
            extra_flag.relation_change = 10;
          } else {
            extra_flag.love_change = 2;
          }
        }
        break;
      case race_enum.tenn_spr:
        if (extra_flag.rank === 1) {
          name = '봄 3관의 고비';
          const dict = this.#dict;
          dict.sank_hai = +check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sank_hai,
            2,
            1,
          );
          dict['딸'] = tama.sex_code === 1 ? '아들' : '딸';
          await print_name_and_show_kojo(name, tama, kojo, dict);
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '하얀 번개 II';
          await print_name_and_show_kojo(name, tama, kojo, this.#dict);
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '텐노상 (가을) 승리';
          const dict = this.#dict;
          const etsuko = get_chara_talk(303);
          dict['乙名史色'] = etsuko.color;
          dict['오토나시 에츠코'] = etsuko.name;
          await print_name_and_show_kojo(name, tama, kojo, dict);
          if (sys_like_chara(303, 0, 10)) {
            await era.waitAnyKey();
          }
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '아리마 기념';
          if (
            (
              await print_name_and_show_kojo(name, tama, kojo, this.#dict)
            )[2] === 1
          ) {
            extra_flag.relation_change = 10;
            extra_flag.love_change = 2;
          } else {
            await quick_into_sex(this.id);
          }
        }
    }
    if (name === undefined) {
      await super.race_end(tama, me, callname, hook, extra_flag);
    }
  }
};
