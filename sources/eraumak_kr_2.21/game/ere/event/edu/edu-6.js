/**
 * @file 오구리 캡 - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-6.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event, cb_enum } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const OguriEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-6');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { location_enum } = require('#/data/locations');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends CustomizedEdu {
  get #dict() {
    const o = {};
    const oguri = get_chara_talk(this.id);
    o['대표색'] = oguri.color;
    o['그녀'] = oguri.sex;
    o['우마무스메'] = oguri.get_uma_sex_title();
    const me = get_chara_talk(0);
    o['당신'] = me.name;
    o['트레이너본명'] = me.actual_name;
    return o;
  }

  /** @param {CharaTalk} oguri */
  async beginning(oguri) {
    await print_name_and_show_kojo('시작이 반', oguri, kojo, this.#dict);
    new OguriEduMarks().train_buff = 6;
  }

  /** @param {CharaTalk} oguri */
  async new_year(oguri) {
    era.set(`cflag:${this.id}:축제이벤트표시`, 0);
    const ret = await print_name_and_show_kojo('새해', oguri, kojo, this.#dict);
    let wait = false;
    switch (ret[2]) {
      case 1:
        wait = all_reward_in_event(this.id, { attr: [0, 10] });
        break;
      case 2:
        wait = all_reward_in_event(this.id, {
          base: JSON.parse(
            `{"체력":${era.get(`maxbase:${this.id}:체력`) * 0.1}}`,
          ),
        });
        break;
      case 3:
        wait = all_reward_in_event(this.id, { pt: 20 });
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async food(oguri) {
    let wait =
      (
        await print_name_and_show_kojo(
          '세상의 중심에서 밥을 외친 야수',
          oguri,
          kojo,
          this.#dict,
        )
      )[1] === 1;
    era.println();
    if (wait) {
      wait = sys_like_chara(this.id, 0, 10);
    } else {
      wait = sys_love_uma(this.id, 2);
    }
    if (wait) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async valentine(oguri) {
    era.set(`cflag:${this.id}:축제이벤트표시`, 0);
    await print_name_and_show_kojo('발렌타인데이', oguri, kojo, this.#dict);
    era.println();
    era.print('획득【발렌타인초콜릿】!');
    era.add('item:발렌타인초콜릿', 1);
    await era.waitAnyKey();
  }

  /** @param {CharaTalk} oguri */
  async worry(oguri) {
    await print_name_and_show_kojo('남모를 걱정', oguri, kojo, this.#dict);
    if (
      all_reward_in_event(this.id, {
        attr: gacha(Object.values(attr_enum), 3).reduce(
          (p, c) => {
            p[c] = 10;
            return p;
          },
          [0, 0, 0, 0, 0],
        ),
        relation: 10,
      })
    ) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async emperor(oguri) {
    const dict = this.#dict;
    dict['皇帝色'] = chara_colors[17][1];
    dict['露娜色'] = chara_colors[17][0];
    await print_name_and_show_kojo('산은 높고 황제는 멀리 있다', oguri, kojo, dict);
    if (all_reward_in_event(this.id, { motivation: 1, relation: 10 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async sea(oguri, me, callname, hook, extra_flag, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const dict = this.#dict;
    dict['小玉色'] = get_chara_talk(21).color;
    await print_name_and_show_kojo('분함의 바다', oguri, kojo, dict);
    if (all_reward_in_event(this.id, { pt: 20, relation: 10, motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async back_home1(oguri, me, callname, hook, extra_flag, event_object) {
    await print_name_and_show_kojo(
      '선홍색 손수건（上）',
      oguri,
      kojo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { love: 2, motivation: 1 })) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_start, event_object.set_arg('back_home2'));
  }

  /** @param {CharaTalk} oguri */
  async back_home2(oguri) {
    await print_name_and_show_kojo(
      '선홍색 손수건（下）',
      oguri,
      kojo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { relation: 15, love: 2 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async four_clock(oguri) {
    if (new OguriEduMarks().aim_check < 2) {
      return;
    }
    await print_name_and_show_kojo('새벽 4시의 트레센', oguri, kojo, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50, false, 5)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async sea2(oguri, me, callname, hook, extra_flag, event_object) {
    if (
      era.get(`cflag:${this.id}:위치`) !== location_enum.beach ||
      era.get('cflag:0:위치') !== location_enum.beach
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_name_and_show_kojo(
      '기적의 하얀 별도 땅에 떨어진다',
      oguri,
      kojo,
      this.#dict,
    );
    if (all_reward_in_event(this.id, { pt: 20, relation: 10, motivation: 1 })) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async elephant(oguri) {
    await print_name_and_show_kojo(
      '방 안의 코끼리를 창밖으로 던져라',
      oguri,
      kojo,
      this.#dict,
    );
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   */
  async palace(oguri, me) {
    await CustomizedEdu.common_palace(oguri, me);
    if (era.get(`cflag:${this.id}:육성횟수`) === 1) {
      const dict = this.#dict;
      dict['千代王色'] = get_chara_color(69);
      dict['千明色'] = get_chara_color(57);
      dict['天狼星色'] = get_chara_color(70);
      dict['星王色'] = '#ff45b5';
      dict['露娜色'] = get_chara_color(17);
      dict['黄金城色'] = get_chara_color(40);
      era.drawLine();
      await print_name_and_show_kojo('우준들에게（上）', oguri, kojo, dict);
      const uma = sys_get_chara_pseudo(this.id);
      uma.motivation = 2;
      await simulation_game_in_event(
        uma,
        [17, 57, 70, 69, 21, 72].map((e) => new LegendUmaSelector(e)),
        race_enum.toky_yus,
        '모의・일본 더비',
      );
      era.drawLine();
      await print_name_and_show_kojo('우준들에게（下）', oguri, kojo, dict);
    } else {
      await CustomizedEdu.common_palace_relation(oguri, me);
    }
  }

  /**
   * @param {CharaTalk} oguri
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async nightmare(oguri, me, callname, hook, extra_flag, event_object) {
    await print_name_and_show_kojo('악몽', oguri, kojo, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
    add_event(event_hooks.week_start, event_object.set_arg('awake'));
  }

  /** @param {CharaTalk} oguri */
  async awake(oguri) {
    await print_name_and_show_kojo('각성', oguri, kojo, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  /** @param {CharaTalk} oguri */
  async truth(oguri) {
    await print_name_and_show_kojo('진실', oguri, kojo, this.#dict);
    era.println();
    if (
      [this.id, 340, 341, 342].reduce(
        (p, c) => sys_like_chara(c, 0, 50) || p,
        false,
      )
    ) {
      await era.waitAnyKey();
    }
    new OguriEduMarks().god = 1;
  }

  /** @param {CharaTalk} oguri */
  async prepare(oguri) {
    await print_name_and_show_kojo('전속력으로 준비', oguri, kojo, this.#dict);
    era.println();
    if (sys_like_chara(this.id, 0, 50)) {
      await era.waitAnyKey();
    }
  }

  async race_start(oguri, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    let name;
    switch (extra_flag.race) {
      case race_enum.nhk_cup:
        name = '결전의 마일（上）';
        break;
      case race_enum.sats_sho:
        await print_event_name('사츠키', oguri);
        await kojo['사츠키 전'](this.#dict);
        return;
      case race_enum.toky_yus:
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          )
        ) {
          await print_event_name('더비', oguri);
          await kojo['더비 전'](this.#dict);
          return;
        }
        break;
      case race_enum.kiku_sho:
        if (new OguriEduMarks().god === 1) {
          name = '국화';
        }
        break;
      case race_enum.mile_cha:
        if (edu_weeks < 96) {
          name = '쇠뿔도 단김에（上）';
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96) {
          name = '오구리 삼바（上）';
        } else {
          name = '오구리 캡：엔드게임（上）';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96) {
          name = '색다른 기자（上）';
        }
    }
    if (name !== undefined) {
      const dict = this.#dict;
      dict['小玉色'] = get_chara_talk(21).color;
      dict['藤正色'] = '#2ad5d5';
      await print_name_and_show_kojo(name, oguri, kojo, dict);
    } else {
      await super.race_start(oguri, me, callname, hook, extra_flag);
    }
  }

  async race_end(oguri, me, callname, hook, extra_flag) {
    const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
    let name;
    switch (extra_flag.race) {
      case race_enum.nhk_cup:
        if (extra_flag.rank <= 5) {
          name = '결전의 마일（下）';
        }
        break;
      case race_enum.sats_sho:
        if (extra_flag.rank === 1) {
          await print_event_name('사츠키', oguri);
          await kojo['사츠키 후'](this.#dict);
          return;
        }
        break;
      case race_enum.toky_yus:
        if (
          check_aim_race(
            RaceHistory.get(this.id).get(),
            race_enum.sats_sho,
            1,
            1,
          ) &&
          extra_flag.rank === 1
        ) {
          await print_event_name('더비', oguri);
          await kojo['더비 후'](this.#dict);
          add_event(
            event_hooks.school_god,
            new EventObject(this.id, cb_enum.edu).set_arg('truth'),
          );
          return;
        }
        break;
      case race_enum.kiku_sho:
        if (new OguriEduMarks().god === 1 && extra_flag.rank === 1) {
          name = '환몽';
        }
        break;
      case race_enum.mile_cha:
        if (edu_weeks < 96 && extra_flag.rank <= 3) {
          name = '쇠뿔도 단김에（下）';
          extra_flag.relation_change = 15;
          add_event(
            event_hooks.week_end,
            new EventObject(this.id, cb_enum.edu).set_arg('back_home1'),
          );
        }
        break;
      case race_enum.arim_kin:
        if (edu_weeks < 96 && extra_flag.rank <= 3) {
          const dict = {
            mvp: extra_flag.contestants.find((e) => e.rank.curr === 1)
              .index_chara,
            ...this.#dict,
          };
          if (
            (
              await print_name_and_show_kojo(
                '오구리 삼바（下）',
                oguri,
                kojo,
                dict,
              )
            )[1] === 1
          ) {
            await quick_into_sex(this.id);
          }
          return;
        } else if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '오구리 캡：엔드게임（下）';
        }
        break;
      case race_enum.tenn_sho:
        if (edu_weeks > 96 && extra_flag.rank === 1) {
          name = '색다른 기자（下）';
        }
    }
    if (name !== undefined) {
      const dict = this.#dict;
      dict['名次'] = extra_flag.rank.toString();
      await print_name_and_show_kojo(name, oguri, kojo, dict);
    } else {
      await super.race_end(oguri, me, callname, hook, extra_flag);
    }
  }
};
