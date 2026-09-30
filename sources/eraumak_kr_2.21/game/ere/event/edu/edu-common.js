/**
 * @file 育成地文
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const ICustomizedEdu = require('#/event/edu/common/edu-interface');
const print_fail_info_in_train = require('#/event/edu/common/print-fail-info-in-train');
const kojo = require('#/event/edu/edu-common.kojo');
const { check_sub_slavery } = require('#/event/snippets/check-slavery');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_ending_name = require('#/event/snippets/print-ending-name');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const { buff_colors, money_color } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum, location_name } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const RaceInfo = require('#/data/race/model/race-info');
const { class_enum } = require('#/data/race/model/race-info');
const {
  race_enum,
  race_infos,
  race_rewards,
} = require('#/data/race/race-const');
const { attr_enum, fumble_result } = require('#/data/train-const');

class CustomizedEdu extends ICustomizedEdu {
  /** @type {function} */
  static load_game;
  static common_event_count = 0;

  get #dict() {
    return generate_dictionary(this.id, { uma: true });
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  static async common_palace(chara, me) {
    const { check, count, buffer } = CustomizedEdu.get_palace_info(chara),
      titles = CharaTitles.get(chara.id).get();
    if (
      check >= 6 ||
      (check >= 4 &&
        titles.findIndex(
          (e) =>
            e.n.endsWith('삼관') || e.n.endsWith('트리플 티아라') || e.n === '아메리칸 드림',
        ) !== -1) ||
      (check >= 3 &&
        titles.findIndex(
          (e) =>
            e.n.startsWith('무패 삼') ||
            e.n.startsWith('무패 트리플') ||
            e.n === '퍼펙트 아메리칸 드림',
        ) !== -1)
    ) {
      await print_event_name('정상의 자리에 오르다', chara);
      await era.printAndWait(
        `매년 1월, URA ${chara.get_uma_sex_title()} 명예의 전당에서는 은퇴한 우마무스메들을 대상으로 투표를 시작한다.`,
      );
      era.println();
      await era.printAndWait(
        `그리고 3월이 되면, 레이스 커리어에서 큰 성과를 거둔 엄격한 투표를 통해 선발된 ${chara.get_uma_sex_title()}는 명예의 전당에 헌액되며, 《현창${chara.get_uma_sex_title()}》라는 최고의 영예를 얻게 된다.`,
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '의 우마무스메 ',
        chara.get_colored_name(),
        '은(는) ',
      ]);
      era.add(`cflag:${chara.id}:명예의전당`, 1);
    } else {
      await print_event_name('명예의 전당 아래서', chara);

      await era.printAndWait('유감스럽게도 명예의 전당에 헌액되지 못했다.');
      era.println();
      await era.printAndWait([
        '하지만 ',
        me.get_couple_title(),
        '은 최선을 다해 이룬 성과에 자부심을 느끼며 후배들이 우리의 어깨를 발판 삼아 더 높은 곳에 오를 수 있을 것이라 믿는다.',
      ]);
    }
    era.println();
    for (const seg of buffer) {
      await era.printAndWait(seg);
    }
    era.println();
    const title = CharaTitles.get(chara.id).get_colored_curr_title(),
      fame_reward =
        (count.g1 * race_rewards[class_enum.G1].r01.fame) / 2 +
        (count.g2 * race_rewards[class_enum.G2].r01.fame) / 2 +
        (count.g3 * race_rewards[class_enum.G3].r05.fame) / 2;
    if (check >= 6) {
      await era.printAndWait([
        `${chara.sex}를 모델로 한 동상이 세워지고, `,
        ...(title ? [title, ' '] : []),
        chara.get_colored_name(),
        `의 전설은 영원히 전당에 남을 것이다...`,
      ]);
      era.println();
      sys_like_chara(302, 0, fame_reward / 5 + 20) && (await era.waitAnyKey());
      sys_like_chara(301, 0, 100) && (await era.waitAnyKey());
    } else {
      await era.printAndWait([
        ...(title ? [title, ' '] : []),
        chara.get_colored_name(),
        `의 전설은 영원히 세상에 전해질 것이다...`,
      ]);
      era.println();
      sys_like_chara(302, 0, fame_reward / 5) && (await era.waitAnyKey());
    }
    sys_change_fame(fame_reward);
    era.set(`cflag:${chara.id}:재육성가능`, 1);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   */
  static async common_palace_relation(chara, me) {
    const love = era.get(`love:${chara.id}`);
    if (love >= 50 || era.get(`relation:${chara.id}:0`) > 0) {
      era.drawLine();
      era.set('flag:현재위치', location_enum.gate);
      await print_event_name('그 후, 미래를 향해', chara);
      era.set('flag:현재위치', location_enum.office);
      await era.printAndWait([
        '세월은 눈 깜짝할 사이에 흘러, ',
        chara.get_colored_name(),
        '과(와) 함께한 지 수년이 지났다. 조금 더 지나면 ',
        me.get_couple_title(),
        '은 곧 새로운 장을 펼치게 될 것이다.',
      ]);
      era.println();
      if (love >= 75) {
        await era.printAndWait([
          me.get_couple_title(),
          '은 익숙한 트레이닝실에서 다정하게 애정을 나누기 시작했다.',
        ]);
        await era.printAndWait(
          '두 연인은 행복한 둘만의 세계에 푹 빠져, 세상의 잡다한 일들을 모두 허공으로 날려버린 듯하다.',
        );
        era.println();
        await era.printAndWait('나는 세상의 왕이다! - 잭 도슨', {
          align: 'center',
        });
      } else if (love >= 50) {
        await era.printAndWait([
          me.get_couple_title(),
          '은 익숙한 트레이닝실에서 열정적으로 키스를 나눴다.',
        ]);
        await era.printAndWait(
          '정욕의 기운이 방 전체를 가득 채우고, 달콤한 신음소리와 육체가 부딪치는 소리만이 끊임없이 메아리친다.',
        );
        era.println();
        await era.printAndWait('식색은 성이다 - 맹자', { align: 'center' });
      } else {
        await era.printAndWait([
          me.get_couple_title(),
          '은 익숙한 트레이닝실에서 즐거운 대화를 나누며, 피할 수 없는 이별에 슬픔을 금치 못한다.',
        ]);
        await era.printAndWait(
          '인생에서 만남은 드문 일이며, 잃을 수도 있다는 사실 때문에 눈앞의 사람을 소중히 여기는 것이 그토록 중요한 것이다.',
        );
        era.println();
        await era.printAndWait('일기일회의 마음은, 오직 차의 모습에서만 볼 수 있다. - 센노 리큐', {
          align: 'center',
        });
      }
    }
  }

  /** @param {CharaTalk} chara */
  static get_chara_name(chara) {
    const name = chara.get_colored_name();
    if (chara.id === 0) {
      name.content = '자신';
    }
    return name;
  }

  /**
   * @param {CharaTalk} chara
   * @returns {{count:{g1:number,g2:number,g3:number},check:number,buffer:*[]}}
   */
  static get_palace_info(chara) {
    const races = RaceHistory.get(chara.id).get_entries(),
      main_races = [],
      ret_buffer = [];
    let total_prize = 0,
      champions = 0,
      check = 0,
      g1_count = 0,
      g2_count = 0,
      g3_count = 0;
    races
      .sort(
        (a, b) =>
          race_infos[a.race].race_class - race_infos[b.race].race_class ||
          b.weeks - a.weeks,
      )
      .forEach((e) => {
        const info = race_infos[e.race];
        if (e.rank === 1) {
          champions++;
          e.race !== race_enum.begin_race && main_races.push(e.race);
          check += info.race_class === RaceInfo.class_enum.G1;
        }
        if (e.rank <= 5) {
          g1_count += (info.race_class === RaceInfo.class_enum.G1) / e.rank;
          g2_count += (info.race_class === RaceInfo.class_enum.G2) / e.rank;
          g3_count += (info.race_class === RaceInfo.class_enum.G3) / e.rank;
          total_prize += info.prize * RaceInfo.prize_ratios[e.rank - 1];
        }
      });
    ret_buffer.push([
      chara.get_colored_name(),
      '의 생애, ',
      {
        content: races.length.toLocaleString(),
        color: buff_colors[1],
        fontWeight: 'bold',
      },
      ' 전 ',
      {
        content: champions,
        color: champions ? buff_colors[1] : '',
        fontWeight: 'bold',
      },
      ' 승，총 상금 ',
      { color: money_color, content: Math.floor(total_prize).toLocaleString() },
      ' 우마코인',
    ]);
    if (main_races.length) {
      ret_buffer.push([
        '주요 승리: ',
        ...main_races.slice(0, 5).map((e, i) => {
          const ret = race_infos[e].get_colored_name_with_class();
          i > 0 && (ret.content = ' ' + ret.content);
          return ret;
        }),
        main_races.length > 5 ? '……' : '',
      ]);
    }
    return {
      buffer: ret_buffer,
      check,
      count: {
        g1: g1_count,
        g2: g2_count,
        g3: g3_count,
      },
    };
  }

  /**
   * @param {CharaTalk} chara
   * @param {number} attr
   * @param {boolean} is_fumble
   */
  static async print_fail_info_in_train(chara, attr, is_fumble) {
    await print_fail_info_in_train(chara, attr, is_fumble);
  }

  /** @author 雞雞 */
  async crazy_fan_end() {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    era.setOffset(6);
    era.setWidth(12);
    if (era.get(`relation:${this.id}:0`) < 0) {
      await era.printAndWait([
        '레이스에 참가하든 인터뷰를 하든 ',
        me.get_colored_name(),
        '과(와) 담당 우마무스메 사이의 긴장된 관계는 누구나 알 수 있는 사실이며, 이러한 긴장 관계가 담당 우마무스메의 발전에 영향을 미쳤다는 의혹은 끊이지 않고 있다. 학원 측은 ',
        me.get_couple_title(),
        '의 조합에 인내심을 잃기 시작했지만…… 그들보다 더 인내심이 부족한 사람들도 있다.',
      ]);
    } else {
      await era.printAndWait([
        '어쩌면 ',
        me.get_colored_name(),
        '이(가) 너무 안일했거나, 혹은 담당 ',
        chara.get_uma_sex_title(),
        '의 재능이 부족해서인지, ',
        me.get_couple_title(),
        '에게 승리는 여전히 요원하기만 하다. 학원 측은 ',
        me.get_couple_title(),
        '의 조합에 인내심을 잃기 시작했지만…… 그들보다 더 인내심이 부족한 사람들도 있다.',
      ]);
    }
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 손에 ',
      chara.get_colored_name(),
      '에게 줄 케이크를 들고 폭우가 쏟아지는 길을 홀로 걷고 있었는데, 뒤에서 급한 발소리가 들려오더니 곧이어 허리 뒤쪽에서 찌르는 듯한 통증이 느껴졌다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 땅에 밀려 넘어졌고 뒤에서 온 사람이 당신의 등을 계속 찌르더니, 마침내',
      me.get_colored_name(),
      '은(는) 움직이지 않게 되었다.',
    ]);
    await era.printAndWait(
      '케이크 상자를 감싼 비닐봉지가 빗방울에 세차게, 세차게, 세차게 맞고 있다……',
    );
    await era.printAndWait('분노한 팬의 보복으로, 결말을 맞이했다……');
    era.setWidth(24);
    era.setOffset(0);
    await print_ending_name('팬의 습격', chara);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async foreign_rest(chara, me, callname) {
    const chara_name = CustomizedEdu.get_chara_name(chara);
    await era.printAndWait([
      '건강 회복을 위해 ',
      me.get_colored_name(),
      '과 ',
      chara_name,
      '은(는) 현지 물리치료 서비스를 예약하고 호텔에서 요양하기로 했다...',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '의 체력이 서서히 회복되는 것 같다!',
    ]);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {{lan:string}} extra_flag
   */
  async foreign_study(chara, me, callname, hook, extra_flag) {
    const chara_name = CustomizedEdu.get_chara_name(chara);
    await era.printAndWait([
      '기본적인 외국어 소통을 위해 ',
      me.get_colored_name(),
      '과(와) ',
      chara_name,
      '은(는) 호텔 방에서 공부했다...',
    ]);
    const abl = era.get(`abl:${this.id}:${extra_flag.lan}어`);
    hook.arg =
      abl === 5 ||
      Math.random() <
        (5 - abl) / 5 + (era.get(`abl:0:${extra_flag.lan}어`) > abl) / 2;
    if (hook.arg) {
      await era.printAndWait('벼락치기인데 효과가 있었다!');
    } else {
      await era.printAndWait(['이런! ', chara.get_colored_name(), '은(는) 자고 있다!']);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  // eslint-disable-next-line no-unused-vars
  async foreign_train(chara, me, callname) {
    const chara_name = CustomizedEdu.get_chara_name(chara);
    await era.printAndWait([
      '현지 경기장에 적응하기 위해 ',
      me.get_colored_name(),
      '과(와) ',
      chara_name,
      '은(는) 훈련장에서 적응 훈련을 했다...',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 현지 경기장에 점점 익숙해지는 것 같다!',
    ]);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  // eslint-disable-next-line no-unused-vars
  async foreign_travel(chara, me, callname, hook, extra_flag, event_object) {
    await era.printAndWait([
      '기분 전환을 위해 ',
      me.get_colored_name(),
      ...(chara.id > 0 ? [' 과(와) ', chara.get_colored_name()] : ['혼자 ']),
      location_name[era.get('flag:현재위치')],
      ' 관광을 갔다...',
    ]);
    await era.printAndWait('돈은 꽤 들었지만 그만한 가치가 있었다!');
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {RaceEndParams} extra
   */
  async race_end(chara, me, callname, hook, extra) {
    const { pseudo } = extra;
    if (pseudo.race.conditionParams.item === 1) {
      if (extra.rank === 1) {
        await print_event_name('감정이 고조된 승리', chara);
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) 붉게 달아오른 얼굴의 ',
          chara.get_colored_name(),
          '이(가) 휴게실로 들어왔다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '은(는) 휴게실에 들어서자마자 해방된 듯한 신음을 냈고, ',
          me.get_colored_name(),
          '은(는) 서둘러 문을 닫고 모든 장난감을 껐다.',
        ]);
        await era.printAndWait([
          '그 후, ',
          me.get_colored_name(),
          '의 품 안에서 몸을 비비고 있는 ',
          chara.get_colored_name(),
          '에게 반드시 잘 달래주겠다고 약속했고, ',
          chara.sex,
          '는 그제서야 대낮의 음란행위를 끝낼 수 있었다.',
        ]);
      } else {
        await print_event_name('예상대로의 패배', chara);
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 낙담한 채 휴게실로 들어왔다.',
        ]);
        await era.printAndWait([chara.get_colored_name(), '은(는) 낙심한 채 바닥에 주저앉았다.']);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 눈치를 보며 장난감을 끄고 조용히 위로했다.',
        ]);
      }
    } else if (extra.rank === 1) {
      await print_event_name('레이스 승리', chara);
      await me.say_and_wait(
        Math.random() < 0.5 ? '대단해!' : '더 높은 목표를 향해 나아가자!',
      );
    } else if (extra.rank <= 5) {
      await print_event_name('레이스 입상', chara);
      await me.say_and_wait(
        Math.random() < 0.5 ? '오늘도 정말 잘했어!' : '절대 저 녀석들에게 지지 말자!',
      );
    } else if (extra.rank <= 10) {
      await print_event_name('레이스 패배', chara);
      await me.say_and_wait(
        Math.random() < 0.5 ? '다음 번에는 분명 더 잘할 거야!' : '낙담해 봤자 소용없어!',
      );
    } else {
      await print_event_name('다음 번에는 절대 지지 않겠어!', chara);
      await me.say_and_wait(
        Math.random() < 0.5 ? '언젠가는 반드시 이길 거야!' : '계속 이렇게 망신당하고 싶니?',
      );
    }
  }

  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {RaceStartParams} extra
   */
  async race_start(chara, me, callname, hook, extra) {
    await print_event_name('레이스 전에', chara);
    const dict = this.#dict;
    if (extra.pseudo.race.conditionParams.item === 1) {
      dict.item = check_sub_slavery(this.id, get_sex_acceptable(this.id));
    } else if (
      era.get('flag:징벌강도') >= 2 &&
      (dict.do_sex = Math.random() < 0.5)
    ) {
      extra.motivation_change = 1;
    }
    await kojo['赛前'](dict);
  }

  /**
   * @author 雞雞
   * @param {number} attr
   * @returns {Promise}
   */
  async train(attr) {
    const chara = get_chara_talk(this.id).get_colored_name();
    if (this.id === 0) {
      chara.content = '자신';
    }
    switch (attr) {
      case attr_enum.speed:
        await era.printAndWait([
          '스피드 향상을 위해 ',
          get_chara_talk(0).get_colored_name(),
          '은(는) ',
          chara,
          '에게 달리기 트레이닝을 시키기로 했다...',
        ]);
        break;
      case attr_enum.endurance:
        await era.printAndWait([
          '스태미나 향상을 위해 ',
          get_chara_talk(0).get_colored_name(),
          '은(는) ',
          chara,
          '에게 수영을 시키기로 했다...',
        ]);
        break;
      case attr_enum.strength:
        await era.printAndWait([
          '파워 향상을 위해 ',
          get_chara_talk(0).get_colored_name(),
          '은(는) ',
          chara,
          '에게 근력 운동을 시키기로 했다...',
        ]);
        break;
      case attr_enum.toughness:
        await era.printAndWait([
          '근성 향상을 위해 ',
          get_chara_talk(0).get_colored_name(),
          '은(는) ',
          chara,
          '에게 오르막 트레이닝을 시키기로 했다...',
        ]);
        break;
      case attr_enum.intelligence:
        await era.printAndWait([
          '지능 향상을 위해 ',
          get_chara_talk(0).get_colored_name(),
          '은(는) ',
          chara,
          '에게 레이스 녹화를 보게 했다...',
        ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainFailParams} extra_flag
   */
  async train_fail(chara, me, callname, hook, extra_flag) {
    await CustomizedEdu.print_fail_info_in_train(
      chara,
      extra_flag.train,
      extra_flag.fumble,
    );
    era.println();
    extra_flag.args = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    if (extra_flag.train !== attr_enum.intelligence) {
      await print_event_name(
        extra_flag.fumble ? '보건실에서...' : '트레이닝실에서...',
        chara,
      );

      await era.printAndWait([chara.get_colored_name(), '은(는) 트레이닝에 실패했다...']);
      era.println();
      era.print('어떻게 할까?');
      era.println();

      if (extra_flag.fumble) {
        era.printButton('「충분히 쉬어야 해!」', 1);
        era.printButton('「끈기로 극복하자!」', 2);
      } else {
        era.printButton('「일단 좀 쉬어가는 게 좋겠어.」', 1);
        era.printButton('「다음엔 더 잘할 수 있을 거야!」', 2);
      }
      if ((await era.input()) === 1) {
        hook.arg = 0;
      } else if (Math.random() < extra_flag['args'].ratio.fail_again) {
        hook.arg = -1;
      } else {
        hook.arg = 1;
      }
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra_flag
   */
  // eslint-disable-next-line no-unused-vars
  train_success_content(chara, me, callname, hook, extra_flag) {
    era.print([chara.get_colored_name(), '의 훈련이 무사히 끝났다!']);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra_flag
   * @returns {Promise<boolean>}
   */
  // eslint-disable-next-line no-unused-vars
  async train_success_add(chara, me, callname, hook, extra_flag) {
    await print_event_name('열혈의 추가 트레이닝!', chara);
    if (
      await select_yes_or_no(
        [chara.get_colored_name(), '은(는) 여운이 남은 것 같습니다，자율 트레이닝을 허가할까요?'],
        '허가!',
        '이 이상의 트레이닝은 좀...',
      )
    ) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        `의 자율 트레이닝을 허락했고 ${chara.sex}의 열정을 칭찬했다.`,
      ]);
      return true;
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '의 자율 트레이닝을 금지했고 푹 쉬라고 당부했다.',
      ]);
    }
    return false;
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra_flag
   * @returns {Promise<boolean>}
   */
  // eslint-disable-next-line no-unused-vars
  async train_success_sex(chara, me, callname, hook, extra_flag) {
    await print_event_name('트레이닝 후 성욕 고조', chara);
    await era.printAndWait([
      '트레이닝이 끝난 후, ',
      chara.get_colored_name(),
      '의 모습이 좀 이상한 것 같다...',
    ]);
    await era.printAndWait(
      '얼굴이 붉게 달아올라, 두 다리 사이로 흘러내리는 정체불명의 액체가 땀과 섞여 음란한 냄새를 풍기고 있다.',
    );
    era.printButton('「이것도 트레이너의 의무니까...」', 1);
    era.printButton('「빨리 보건실로 가자!」', 2);
    return (await era.input()) === 1;
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param {TrainSuccessParams} extra
   * @returns {Promise<TrainSuccessParams|void>}
   */
  async train_success(chara, me, callname, hook, extra) {
    const cur_location = era.get('flag:현재위치');
    this.train_success_content(chara, me, callname, hook, extra);
    era.println();
    if (this.id === 0) {
      return;
    }
    if (
      !era.get(`status:${this.id}:땡땡이`) &&
      Math.random() < 0.2 * extra.stamina_ratio
    ) {
      if (sys_check_remote(this.id)) {
        hook.arg = true;
      } else {
        await era.waitAnyKey();
        hook.arg = await this.train_success_add(
          chara,
          me,
          callname,
          hook,
          extra,
        );
        era.println();
      }
    } else if (
      extra.train !== attr_enum.intelligence &&
      !sys_check_remote(this.id)
    ) {
      if (
        era.get(`love:${this.id}`) >= 50 &&
        era.get(`base:${this.id}:성욕`) >= lust_border.itch &&
        Math.random() <
          (0.2 * era.get(`base:${this.id}:성욕`)) / lust_border.want_sex
      ) {
        await era.waitAnyKey();
        if (await this.train_success_sex(chara, me, callname, hook, extra)) {
          era.set('flag:현재위치', location_enum.restroom);
          await quick_into_sex(this.id);
          era.set('flag:현재위치', cur_location);
        } else {
          sys_change_lust(this.id, get_random_value(500, 1500));
        }
      } else if (Math.random() < 0.02) {
        /** @author 幽白書 */
        await era.waitAnyKey();
        await print_event_name('샤워실 안에서', chara);
        await era.printAndWait([
          '음? ',
          chara.get_colored_name(),
          '은(는) 아직 안 왔나?',
        ]);
        await era.printAndWait('그럼 이 기회에 먼저 샤워나 할까!');
        era.println();
        await era.printAndWait([
          '문을 여니 눈앞에 알몸인 ',
          chara.get_colored_name(),
          '이(가) 들어왔다...',
        ]);
        era.printButton('「오, 같이 목욕할래?」', 1);
        era.printButton('「방해해서 미안!」', 2);
        if ((await era.input()) === 1) {
          if (
            era.get(`love:${this.id}`) >= 50 &&
            get_sex_acceptable(this.id) >= 0
          ) {
            await era.printAndWait('흥미진진한 모습으로 승낙해 주었다.');
            await era.printAndWait([
              me.get_couple_title(),
              '은 서로 등을 밀어 주었다.',
            ]);
            await era.printAndWait([
              '목욕을 마친 후 ',
              chara.sex,
              '는 ',
              me.get_colored_name(),
              '을(를) 다소 아쉬운 눈빛으로 바라봤다...',
            ]);
            era.set('flag:현재위치', location_enum.restroom);
            await quick_into_sex(this.id);
            era.set('flag:현재위치', cur_location);
            extra.relation_change = 5;
          } else {
            await chara.say_and_wait('바보. 뭔 소리 하는거야!');
            await era.printAndWait([me.get_colored_name(), '은(는) 쫒겨났다...']);
            sys_change_motivation(this.id, -1) && (await era.waitAnyKey());
            extra.relation_change = -5;
          }
        } else {
          await me.say_and_wait('방해해서 미안!');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 큰 소리로 외치고 밖으로 뛰쳐나갔다.',
          ]);
          await era.printAndWait([
            '얼마 뒤, 샤워를 마친 ',
            chara.get_colored_name(),
            '이(가) 얼굴을 붉히며 걸어나왔다.',
          ]);
          sys_change_lust(this.id, get_random_value(500, 1500));
        }
      }
    }
  }

  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  // eslint-disable-next-line no-unused-vars
  async week_end(chara, me, callname, hook, extra_flag, event_object) {}

  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} me
   * @param {string} callname
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   * @returns {Promise}
   */
  async week_start(chara, me, callname, hook, extra_flag, event_object) {
    switch (event_object?.arg) {
      case 47 + 29:
      case 95 + 29:
        if (CustomizedEdu.common_event_count === 0) {
          return;
        }
        CustomizedEdu.common_event_count--;
        await print_event_name('여름 합숙', chara);
        await era.printAndWait([
          '여름 하면 수영복과 해변이다. 물론',
          chara.get_colored_name(),
          '과(와) ',
          me.get_colored_name(),
          '은(는) 해변으로 휴가를 온 동시에 트레이닝도 소홀히 하지 않았다. ',
        ]);
        break;
      case 143 + 9:
      case 'palace':
        await CustomizedEdu.common_palace(chara, me);
        await CustomizedEdu.common_palace_relation(chara, me);
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(hook, extra_flag, event_object) {
    let handler = this[event_object?.arg];
    if (handler === undefined) {
      handler = this[event_hooks.keys[hook.hook]];
    }
    if (handler !== undefined) {
      return await handler.call(
        this,
        get_chara_talk(this.id),
        get_chara_talk(0),
        sys_get_callname(this.id, 0),
        hook,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedEdu;
