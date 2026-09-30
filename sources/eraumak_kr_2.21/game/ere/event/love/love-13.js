/**
 * @file 메지로 맥퀸 - 애정
 * @author 伊兰
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/love/love-13.kojo');
const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const McqueenEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-13');
const event_hooks = require('#/data/event/event-hooks');
const McqueenLifeMarks = require('#/data/event/life-event-marks/life-event-marks-13');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedLove {
  get #dict() {
    const dict = {};
    const mcqueen = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    dict['대표색'] = mcqueen.color;
    dict['트레이너'] = me.name;
    dict['麦昆'] = mcqueen.name;
    if (mcqueen.sex_code === 1) {
      dict['우마무스메'] = '우마무스코';
      dict['아가씨'] = '도련님';
      dict['그녀'] = '그';
      dict['언니'] = '오빠';
      dict['씨'] = '선생님';
      dict['여사'] = '신사';
      dict['숙녀'] = '绅士';
      dict['여자아이'] = '남자아이';
      dict['소녀'] = '소년';
    } else {
      dict['우마무스메'] = '우마무스메';
      dict['아가씨'] = '아가씨';
      dict['그녀'] = '그녀';
      dict['언니'] = '언니';
      dict['씨'] = '씨';
      dict['여사'] = '여사';
      dict['숙녀'] = '숙녀';
      dict['여자아이'] = '여자아이';
      dict['소녀'] = '소녀';
    }
    if (me.sex_code === 1) {
      dict['호칭'] = '트레이너' + ' 선생님';
      dict['그'] = '그';
    } else {
      dict['호칭'] = '트레이너' + ' 선생님';
      dict['그'] = '그녀';
    }
    const ardan = get_chara_talk(71);
    dict['阿尔丹代表色'] = ardan.color;
    dict['阿尔丹'] = ardan.name;
    dict['富士'] = get_chara_talk(5).name;
    dict['麦昆称呼阿尔丹'] = sys_get_callname(this.id, 71);
    dict['阿尔丹称呼麦昆'] = sys_get_callname(71, this.id);
    return dict;
  }

  /** @param {CharaTalk} mcqueen */
  async movie(mcqueen) {
    const name = '스크린 앞의 둘';
    await print_event_name(name, mcqueen);
    await kojo[name](this.#dict);
    new McqueenLifeMarks().love_20 = 2;
  }

  /** @param {CharaTalk} mcqueen */
  async baseball(mcqueen) {
    await print_event_name('야구와 ' + this.#dict['아가씨'], mcqueen);
    await kojo['야구와 아가씨'](this.#dict);
    new McqueenLifeMarks().love_40 = 2;
  }

  async 49(mcqueen) {
    const name = '두근거림';
    await print_event_name(name, mcqueen);
    await kojo[name](this.#dict);
    await sys_love_uma_in_event(this.id);
  }

  async 74(mcqueen) {
    const m_life = new McqueenLifeMarks();
    if (
      era.get(`cflag:${this.id}:육성턴수합산`) >=
        95 + race_infos[race_enum.tenn_spr].date ||
      m_life.reject_74 > 0
    ) {
      await print_name_and_show_kojo(
        '당신만의 한명',
        mcqueen,
        kojo,
        this.#dict,
      );
      await sys_love_uma_in_event(this.id);
    } else {
      if (
        (
          await print_name_and_show_kojo(
            '한밤중의 진심',
            mcqueen,
            kojo,
            this.#dict,
          )
        ).at(-1) === 1
      ) {
        await sys_love_uma_in_event(this.id);
      } else {
        await punish_rejecting_love(this.id);
        m_life.reject_74 = 1;
      }
    }
  }

  async 89(mcqueen, me, callname, stage, extra_flag, event_object) {
    const tenn_spr_check = check_aim_race(
      RaceHistory.get(this.id).get(),
      race_enum.tenn_spr,
      2,
      1,
    );
    if (!new McqueenEduMarks().love_89) {
      if (tenn_spr_check) {
        await era.printAndWait([
          '메지로 가의 허락을 받기 전까지는 ',
          mcqueen.get_colored_name(),
          '과 ',
          me.get_colored_name(),
          '은(는) 더 가까워 질 수 없다……',
        ]);
      } else {
        await era.printAndWait([
          race_infos[race_enum.tenn_spr].get_colored_name(),
          '의 결과가 나오기 전 까지는 ',
          mcqueen.get_colored_name(),
          '과 ',
          me.get_colored_name(),
          '은(는) 더 가까워 질 수 없다……',
        ]);
      }
      era.set(`cflag:${this.id}:호감거절`, 89);
    } else if (tenn_spr_check && stage === event_hooks.week_end) {
      const name = '달콤한 시간';
      await print_event_name(name, mcqueen);
      const ret = await kojo[name](this.#dict);
      if (ret[0] === 1) {
        if (ret[2] === 1) {
          await quick_into_sex(this.id);
        }
        await sys_love_uma_in_event(this.id);
      } else {
        await punish_rejecting_love(this.id);
      }
    } else {
      return await super[89](
        mcqueen,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
  }

  async 99(mcqueen) {
    const name = '새로운 내일';
    await print_event_name(name, mcqueen);
    await kojo[name](this.#dict);
    await sys_love_uma_in_event(this.id);
  }
};
