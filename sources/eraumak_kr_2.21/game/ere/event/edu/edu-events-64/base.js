const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-64.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const l_kojo = require('#/event/love/love-64.kojo');
const { add_event, cb_enum } = require('#/event/queue');
const { i_pama_yandere } = require('#/event/snippets/64');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

class Edu64Base extends CustomizedEdu {
  /** @returns {Record<string,any>} */
  get dict() {
    const o = {};
    const pama = get_chara_talk(this.id);
    o['대표색'] = pama.color;
    o['호칭'] = sys_get_callname(this.id, 0);
    o.T = era.get('callname:0:-2');
    o['自称'] = sys_get_callname(this.id, this.id);
    o['우마무스메'] = pama.uma_sex_title;
    o['그녀'] = pama.sex;
    return o;
  }

  async train() {
    await kojo['训练'](this.dict);
  }

  async train_success_add(pama, me, callname, hook) {
    hook.arg =
      (await print_name_and_show_kojo('추가 트레이닝', pama, kojo, this.dict))[0] === 1;
  }

  async train_fail(pama, me, callname, hook, extra_flag) {
    if (extra_flag.train === attr_enum.intelligence) {
      return await super.train_fail(pama, me, callname, hook, extra_flag);
    }
    await CustomizedEdu.print_fail_info_in_train(
      pama,
      extra_flag.train,
      extra_flag.fumble,
    );
    era.println();
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    await print_event_name('보건실에서', pama);
    await kojo['트레이닝 실패'](this.dict);
  }

  /** @param {CharaTalk} pama */
  async beginning(pama) {
    await print_name_and_show_kojo('메지로 파머 등장!', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { relation: get_random_value(25, 75) })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async rumor(pama) {
    await print_name_and_show_kojo('사소한 소문', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { motivation: -1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async strange(pama) {
    await print_name_and_show_kojo('미묘한 공간', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async free_race(pama, me, callname, hook, extra, event_object) {
    await print_name_and_show_kojo('프리 레이스 할래?', pama, kojo, this.dict);
    if (all_reward_in_event(this.id, { pt: 10 })) {
      await era.waitAnyKey();
    }
    event_object.special = false;
    add_event(
      event_hooks.out_shopping,
      event_object.set_arg('important_place'),
    );
  }

  /** @param {CharaTalk} pama */
  async mejiro(pama) {
    await print_name_and_show_kojo('메지로라는 이름의 부담', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async new_year_1(pama) {
    era.set(`cflag:${this.id}:축제이벤트표시`, 0);
    const ret = await print_name_and_show_kojo(
      '새해 다짐',
      pama,
      kojo,
      this.dict,
    );
    let attr;
    let base;
    let pt;
    let relation = 0;
    let love;
    switch (ret[4]) {
      case 1:
        attr = [20];
        break;
      case 2:
        base = JSON.parse('{"체력":100}');
        break;
      case 3:
        pt = 20;
        if (ret[6] === 1) {
          relation = 10;
        } else {
          love = 2;
        }
    }
    if (all_reward_in_event(this.id, { attr, base, love, pt, relation })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async how(pama) {
    let relation = 0;
    let love;
    if (
      (
        await print_name_and_show_kojo(
          '삼관은 어떻게 해야 돼!?',
          pama,
          kojo,
          this.dict,
        )
      )[5] === 1
    ) {
      relation = 10;
    } else {
      love = 2;
    }
    if (all_reward_in_event(this.id, { relation, love })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async sister(pama) {
    await print_event_name(pama.siblings_sex_title + '이자 라이벌', pama);
    if (
      check_aim_race(RaceHistory.get(this.id).get(), race_enum.sats_sho, 1, 1)
    ) {
      await kojo['姐妹亦是对手一冠'](this.dict);
    } else {
      await kojo['姐妹亦是对手'](this.dict);
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async hometown(pama, me, callname, hook, extra, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('고향의 추억', pama, kojo, this.dict);
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
  async summer_start_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const helios = get_chara_talk(65);
    await print_name_and_show_kojo('여름 합숙（클래식 시즌）시작', pama, kojo, {
      ...this.dict,
      太阳神色: helios.color,
      太阳神称呼善信: sys_get_callname(65, this.id),
      소녀: pama.teen_sex_title,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_middle_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const ret = await print_name_and_show_kojo(
      '여름 합숙（클래식 시즌）도중',
      pama,
      kojo,
      {
        ...this.dict,
        太阳神色: get_chara_talk(65).color,
        太阳神称呼善信: sys_get_callname(65, this.id),
      },
    );
    const attr = [0, 0, 0, 0, 0];
    if (ret[1] === 1) {
      attr[attr_enum.strength] = 10;
    } else {
      attr[attr_enum.toughness] = 10;
    }
    let wait = all_reward_in_event(this.id, { attr });
    if (era.get('cflag:65:모집상태') === recruit_flags.yes) {
      wait = sys_like_chara(this.id, 65, 30) || wait;
      wait = sys_like_chara(65, this.id, 30) || wait;
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_end_1(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const mcqueen = get_chara_talk(64);
    await print_name_and_show_kojo('여름 합숙（클래식 시즌）종료', pama, kojo, {
      ...this.dict,
      麦昆色: mcqueen.color,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async triple_crown(pama) {
    await print_name_and_show_kojo('삼관 달성!', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
    return true;
  }

  /** @param {CharaTalk} pama */
  async new_year_2(pama) {
    era.set(`cflag:${this.id}:축제이벤트표시`, 0);
    const ret = await print_name_and_show_kojo('새해 참배', pama, kojo, {
      ...this.dict,
      丸善色: get_chara_talk(4).color,
      天狼星色: get_chara_talk(70).color,
    });
    let attr;
    let base;
    let pt;
    switch (ret[3]) {
      case 1:
        base = JSON.parse('{"체력":200}');
        break;
      case 2:
        attr = new Array(5).fill(8);
        break;
      case 3:
        pt = 35;
    }
    if (all_reward_in_event(this.id, { attr, base, pt })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_start_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('여름 합숙（시니어 시즌）시작', pama, kojo, {
      ...this.dict,
      太阳神色: get_chara_talk(65).color,
      狄杜斯色: get_chara_talk(63).color,
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_middle_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    if (
      (
        await print_name_and_show_kojo('여름의 작은 소동', pama, kojo, {
          ...this.dict,
          그: get_chara_talk(0).sex,
          트레이너본명: get_chara_talk(0).actual_name,
        })
      )[4] === 1
    ) {
      sys_change_lust(this.id, 500);
    } else {
      await quick_into_sex(this.id);
      await kojo['涂防晒油马跳结束'](this.dict);
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async walk(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('해변의 산책시간', pama, kojo, this.dict);
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} pama
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra
   * @param {EventObject} event_object
   */
  async summer_end_2(pama, me, callname, hook, extra, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo('여름 합숙（시니어 시즌）종료', pama, kojo, {
      ...this.dict,
      狄杜斯色: get_chara_talk(63).color,
      太阳神色: get_chara_talk(65).color,
      太阳神称呼善信: sys_get_callname(65, this.id),
    });
    if (all_reward_in_event(this.id)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} pama */
  async christmas_party(pama) {
    const ret = await print_name_and_show_kojo(
      '메지로의 크리스마스 파티',
      pama,
      kojo,
      this.dict,
    );
    if (ret[1] === 2) {
      await quick_into_sex(this.id);
      await kojo['圣诞晚会马跳后续'](this.dict);
    }
  }

  /** @param {CharaTalk} pama */
  async winner(pama) {
    await print_name_and_show_kojo('고개를 높게!', pama, kojo, {
      ...this.dict,
      波旁色: get_chara_talk(26).color,
      露娜色: get_chara_talk(17).color,
    });
  }

  /** @param {CharaTalk} pama */
  async sports_car(pama) {
    const tokino = get_chara_talk(301);
    const chairman = get_chara_talk(302);
    await print_name_and_show_kojo('충격!스포츠카 선물이라니!', pama, kojo, {
      ...this.dict,
      理事长色: chairman.color,
      "아키카와 야요이": chairman.name,
      绿帽色: tokino.color,
      "하야카와 타즈나": tokino.name,
    });
    era.set('item:파머호', 1);
  }

  async race_start(pama, me, callname, hook, extra) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    const dict = this.dict;
    let name;
    switch (extra.race) {
      case race_enum.begin_race:
        name = '레이스 개막';
        break;
      case race_enum.sats_sho:
        name = '사츠키상을 앞두고!';
        break;
      case race_enum.toky_yus:
        name = '더비를 앞두고!';
        break;
      case race_enum.hako_kin:
        name = '하코다테 기념!';
        break;
      case race_enum.kiku_sho:
        await print_event_name('국화상을 앞두고', pama);
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          ) &&
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.toky_yus,
            1,
            1,
          )
        ) {
          await kojo['迎向菊花赏两冠'](dict);
        } else {
          await kojo['국화상을 앞두고'](dict);
        }
        return;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          name = '아리마 기념을 앞두고';
        } else {
          name = '준비됐어?도망치자!';
        }
        break;
      case race_enum.nikk_hai:
        name = '기분 전환!';
        break;
      case race_enum.tenn_spr:
        name = '메지로만이 아니야!';
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96) {
          name = '일단 믿어보자!';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          dict['그'] = get_chara_talk(0).sex;
          name = i_pama_yandere()
            ? '나만의 주법과 나만의……'
            : '나만의 방식으로 달릴거야!';
        }
    }
    if (name !== undefined) {
      await print_name_and_show_kojo(name, pama, kojo, dict);
    } else {
      await print_event_name('레이스 전', pama);
      await kojo['通用赛前'](dict);
    }
  }

  async race_end(pama, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    const dict = this.dict;
    let name;
    switch (extra_flag.race) {
      case race_enum.begin_race:
        if (extra_flag.rank === 1) {
          name = '도망자의 시작!';
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          name = '일단 1관!';
        } else {
          name = '져도 괜찮아!';
        }
        break;
      case race_enum.toky_yus:
        if (extra_flag.rank === 1) {
          name = '운 좋은 도망자';
        } else {
          name = '운이 좀……';
        }
        break;
      case race_enum.hako_kin:
        if (extra_flag.rank === 1 && edu_weeks < 96) {
          name = '여행 준비';
          add_event(
            event_hooks.out_start,
            new EventObject(this.id, cb_enum.edu, true).set_arg('hometown'),
          );
        }
        break;
      case race_enum.kiku_sho:
        if (extra_flag.rank === 1) {
          name = '도망자의 귀환!';
          if (
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.sats_sho,
              1,
              1,
            ) &&
            check_aim_race(
              RaceHistory.get(this.id).get(),
              race_enum.toky_yus,
              1,
              1,
            )
          ) {
            add_event(
              event_hooks.week_end,
              new EventObject(this.id, cb_enum.edu, true).set_arg(
                'triple_crown',
              ),
            );
          }
        } else {
          name = '작은 속삭임……';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          if (extra_flag.rank === 1) {
            name = '아리마 기념 슈퍼 도망자!';
            extra_flag.skill_change = [202051];
          } else {
            name = '아쉬움 남는 도주극';
          }
        } else if (extra_flag.rank === 1) {
          dict['太阳神色'] = get_chara_talk(65).color;
          dict['太阳神称呼善信'] = sys_get_callname(65, this.id);
          if (era.get(`cstr:${this.id}:승부복`) === '') {
            name = '이게 바로 내 피가 끓어오르는 달리기야!';
            if (
              (await print_name_and_show_kojo(name, pama, kojo, dict))[3] === 1
            ) {
              await quick_into_sex(this.id);
            }
            return;
          } else {
            name = '도망친 곳의 종착지는，바로 여기';
            if (era.get(`love:${this.id}`) >= 50) {
              if (
                (await print_name_and_show_kojo(name, pama, kojo, dict))[5] ===
                1
              ) {
                await quick_into_sex(this.id);
                dict['트레이너본명'] = era.get('callname:0:-1');
                await kojo['圣诞有马拥抱马跳后续'](dict);
              } else {
                await quick_into_sex(this.id);
                await kojo['圣诞有马接吻马跳后续'](dict);
              }
              return;
            }
          }
        }
        break;
      case race_enum.nikk_hai:
        if (extra_flag.rank === 1) {
          name = '새로운 매일!';
        }
        break;
      case race_enum.tenn_spr:
        if (extra_flag.rank === 1) {
          name = '도주의 승리!';
          extra_flag.relation_change = 0;
          if (era.get(`love:${this.id}`) >= 75) {
            dict['트레이너본명'] = era.get('callname:0:-1');
            if (
              (await print_name_and_show_kojo(name, pama, kojo, dict))[2] === 2
            ) {
              extra_flag.relation_change = 10;
            }
            return;
          }
        } else {
          name = '주인공이 아니어도 상관없어!';
        }
        break;
      case race_enum.takz_kin:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '조금 슬프긴 해도 상관없어!';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          if (extra_flag.rank === 1) {
            name = '야호!온 몸이 진흙투성이어도 상관없어!';
          } else {
            name = '아이고，좀 아쉽긴 하네';
          }
        }
    }
    if (name !== undefined) {
      await print_name_and_show_kojo(name, pama, kojo, dict);
    } else if (extra_flag.rank === 1) {
      await print_event_name('레이스 우승', pama);
      await kojo['通用胜利'](this.dict);
    } else {
      await print_event_name('레이스 패배', pama);
      await kojo['通用失败'](this.dict);
    }
  }

  async crazy_fan_end() {
    const pama = get_chara_talk(this.id);
    let name;
    if (i_pama_yandere()) {
      name = '끝없는 도망';
      await l_kojo[name](this.dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else if (era.get(`love:${this.id}`) >= 75) {
      name = '도망칠 힘조차 없이';
      await kojo[name](this.dict);
      await print_event_name([{ color: buff_colors[3], content: name }], pama);
    } else {
      return await super.slave_end();
    }
  }
}

module.exports = Edu64Base;
