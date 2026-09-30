/**
 * @file 日常地文
 * @author 雞雞
 * @author KUN
 * @author 幽白書
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_change_motivation,
  sys_get_billings,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const common_celebration = require('#/event/daily/common/celebration');
const common_out_shopping = require('#/event/daily/common/out-shopping');
const kojo = require('#/event/daily/daily-common.kojo');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const generate_dictionary = require('#/event/snippets/generate-dictionary');
const print_ending_name = require('#/event/snippets/print-ending-name');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors, money_color } = require('#/data/color-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_name } = require('#/data/locations');

const money_list = [0, 1500, 5000, 10000];

class CustomizedDaily {
  /** @type {number} */
  id;

  constructor(chara_id) {
    this.id = chara_id;
  }

  get #dict() {
    return generate_dictionary(this.id, { uma: true });
  }

  get_this() {
    return this;
  }

  /** @author 雞雞 */
  async basement_end() {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait('트레센 학원, 그 어떤 탐지기로도 찾아낼 수 없는 어느 지하실에서……');
    await era.printAndWait([
      me.get_colored_name(),
      ' 은(는) 손발을 묶은 로프를 풀기 위해 필사적으로 몸부림쳤으나, 로프가 살을 파고들어 고통만 더해질 뿐이었다.',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 침대 옆에 앉아 ',
      me.get_colored_name(),
      '을(를) 향해 화사한 미소를 지으며, 상냥하게 ',
      me.get_colored_name(),
      '을(를) 보살펴 주었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '의 마음속에는 오직 알 수 없는 미래에 대한 깊은 공포만이 가득했다……',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '의 집착 어린 사랑에 갇힌 채, ',
      me.get_colored_name(),
      '은(는) 결말을 맞이했다……',
    ]);
    era.setWidth(24);
    era.setOffset(0);
    await print_ending_name('사랑의 감옥', chara);
  }

  /** @author 黑奴队长 */
  async borrow_money() {
    const billing = sys_get_billings()[0];
    era.printInColRows(
      { columns: [{ content: '얼마를 대출받을까?', type: 'text' }] },
      {
        columns: ['그만둔다', '1500 우마코인', '5000 우마코인', '10000 우마코인'].map(
          (e, i) => {
            return {
              accelerator: i,
              config: { align: 'center', width: 6 },
              content: e,
              type: 'button',
            };
          },
        ),
      },
    );
    let amount = await era.input();
    amount = money_list[amount];
    if (amount) {
      era.printInColRows(
        { columns: [{ content: '대출 기간은?', type: 'text' }] },
        {
          columns: ['그만둔다', '1달간', '3달간', '6달간'].map((e, i) => {
            return {
              accelerator: i,
              config: { align: 'center', width: 6 },
              content: e,
              type: 'button',
            };
          }),
        },
      );
      let time = await era.input();
      time = (time - 1) * 12 + (time === 1) * 4;
      if (time > 0) {
        let love_buff = era.get(`love:${this.id}`);
        if (love_buff > 75) {
          love_buff = (love_buff - 75) / 25;
        } else {
          love_buff = 0;
        }
        const repay = Math.ceil(
          (amount * (1 + 0.0125 * (1 - love_buff) * time)) / time,
        );
        if (
          await select_yes_or_no(
            [
              '대출 금액은',
              { content: amount.toLocaleString(), color: money_color },
              ' 우마코인, 이후 ',
              { content: time.toLocaleString(), color: buff_colors[3] },
              '주간 주당 상환액은 ',
              { content: repay.toLocaleString(), color: money_color },
              ' 우마코인，총 ',
              {
                content: (repay * time).toLocaleString(),
                color: money_color,
              },
              ' 우마코인 입니다. 대출합니까?',
            ],
            '예',
            '아니오',
          )
        ) {
          sys_change_money(amount);
          billing.creditor = this.id;
          billing.repay = -repay;
          billing.timer = time;
          await era.printAndWait([
            get_chara_talk(0).get_colored_name(),
            '은(는) ',
            get_chara_talk(this.id).get_colored_name(),
            '에게 ',
            { content: amount.toLocaleString(), color: money_color },
            ' 우마코인을 빌렸다……',
          ]);
        }
      }
    }
  }

  /** @param {HookArg} hook */
  // eslint-disable-next-line no-unused-vars
  async celebration(hook) {
    return await common_celebration.call(this);
  }

  /** @param {boolean} hentai */
  // eslint-disable-next-line no-unused-vars
  async end_talk(hentai) {}

  good_morning() {
    const dict = this.#dict;
    dict['하야카와'] = era.get('callname:301:-2');
    kojo['回合开始'](dict);
  }

  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {HookArg} hook
   */
  async good_night(hook) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0),
      awake = 2 * sys_check_awake(this.id) + sys_check_awake(0);
    if (awake === 3) {
      const check = get_custom_check(this.id).is_want_make_love();
      if (check > 0) {
        if (
          await select_yes_or_no(
            [
              '바쁜 하루가 끝나고, ',
              me.get_colored_name(),
              '은(는) ',
              chara.get_colored_name(),
              '을(를) 기숙사 입구까지 데려다주었다. ',
              chara.get_colored_name(),
              '은(는) 쑥스러워하며 같이 자자고 제안했다……',
            ],
            '수락',
            '거절',
          )
        ) {
          hook.arg = 1;
          await era.printAndWait([
            '주변 사람들의 따뜻한 시선 속에서, 얼굴이 붉어진 ',
            chara.get_colored_name(),
            '이(가) ',
            me.get_colored_name(),
            `의 손을 잡고 ${location_name[era.get('flag:현재위치')]}로 걸어갔다...`,
          ]);
        } else if (check === 2) {
          await era.printAndWait([
            chara.get_colored_name(),
            '의 얼굴색이 변하며 ',
            me.get_colored_name(),
            `을 끼고 강제로 밖으로 나갔다. 분명 ${chara.sex}가 `,
            sys_get_colored_callname(this.id, 0),
            '을(를) 무릎 꿇리고 성노예로 만드려고 하는 것 같다!',
          ]);
          hook.arg = 2;
        } else {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) 실망한 듯 몸을 돌려 기숙사로 걸어갔다...',
          ]);
          hook.arg = 0;
        }
      } else {
        era.print([
          '바쁜 하루가 끝나고, ',
          get_chara_talk(0).get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '을(를) 기숙사 입구까지 데려다주고 서로 잘 자라고 인사를 나눈 뒤 각자 거처로 돌아갔다.',
        ]);
      }
    } else if (awake === 1) {
      era.print([
        '깊이 잠든 ',
        chara.get_colored_name(),
        '을(를) ',
        get_chara_talk(0).get_colored_name(),
        '은(는) 깨울 엄두가 나지 않아, 어쩔 수 없이 직접 기숙사까지 데려다주고 나서야 뻐근한 어깨를 주무르며 트레이너 숙소로 돌아왔다.',
      ]);
    } else {
      era.print([
        get_chara_talk(0).get_colored_name(),
        '은(는) 깊은 잠에 빠져 의식을 잃은 채, 흐릿한 꿈속에서 ',
        chara.get_colored_name(),
        '의 작별 인사를 들은 듯 했다',
      ]);
    }
  }

  /** @param {0|1|2} stage */
  // eslint-disable-next-line no-unused-vars
  async growth(stage) {}

  async load_talk() {
    await kojo['로드대화'](this.#dict);
  }

  /** @author 雞雞 */
  async office_cook() {
    const me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      get_chara_talk(this.id).get_colored_name(),
      '은(는) 트레이닝실에서 함께 요리를 했다. ',
      me.get_couple_title(),
      '은(는) 오늘 메뉴로 건강에 좋은 유기농 당근을 준비하기로 했다.',
    ]);
  }

  /** @author 雞雞 */
  async office_game() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '과(와) ',
      get_chara_talk(this.id).get_colored_name(),
      '은(는) 트레이닝실에서 함께 게임을 즐기며 즐거운 시간을 보냈다.',
    ]);
  }

  /** @author 雞雞 */
  async office_gift() {
    await era.printAndWait([
      get_chara_talk(this.id).get_colored_name(),
      '은(는) ',
      get_chara_talk(0).get_colored_name(),
      '의 선물을 받고 무척 기뻐했다...',
    ]);
  }

  /** @author 雞雞 */
  async office_prepare() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '과(와) ',
      get_chara_talk(this.id).get_colored_name(),
      '은(는) 트레이닝실에서 레이스 전 준비를 했다. 다음 레이스를 치르기 위해 정신을 바짝 차려야 한다.',
    ]);
  }

  /** @author 雞雞 */
  async office_rest() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '과(와) ',
      get_chara_talk(this.id).get_colored_name(),
      '은(는) 트레이닝실에서 함께 휴식을 취하며, 멍하니 시간을 보냈다.',
    ]);
  }

  async office_study() {
    await kojo['학습지도'](this.#dict);
  }

  /** @author 雞雞 */
  async out_church() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 함께 신사에 참배하러 왔다.',
    ]);
    const dice = Math.random();
    if (dice < 0.5) {
      await era.printAndWait([
        dice < 0.05 ? '대길' : '길',
        ' 운세의 제비가 나왔다! 덕분에 ',
        me.get_couple_title(),
        '의 기분이 아주 좋아졌다.',
      ]);
      /** @author Mr.E. */
      if (dice < 0.0001 && era.get('flag:강간저항') === 1) {
        await era.printAndWait([
          '작성자 미상의 ',
          chara.get_uma_sex_title(),
          ' 마법 주문 영창법이다!',
        ]);
        era.set('flag:강간저항', '');
      } else if (dice < 0.01) {
        await era.printAndWait([
          '눈앞에 갑자기 무지개 빛깔 게이트가 보이는 환상에 빠지며, 기분이 단숨에 고양되었다.',
        ]);
        const item = get_random_entry([0, 1, 2, 3, 12]);
        era.add(`item:${item}`, 1);
        await era.printAndWait([
          '[',
          era.get(`itemname:${item}`),
          '] 을(를) 획득했다!',
        ]);
      } else if (dice < 0.02) {
        await era.printAndWait([
          '바람이 훅 불어오는 바람에 ',
          chara.get_colored_name(),
          '의 몸 위로 넘어져 버렸다?!',
        ]);
        era.println();
        sys_like_chara(this.id, 0, 20) && (await era.waitAnyKey());
      } else if (dice < 0.03 && chara.sex_code !== 1) {
        await era.printAndWait([
          '바람이 훅 불어오더니, 옆에 있던 ',
          chara.get_colored_name(),
          '의 스커트가 들춰져 버렸다?!',
        ]);
        sys_change_lust(this.id, 1500);
      } else if (dice < 0.05) {
        await era.printAndWait(['바람에 뭔가가 날려 왔다. 어라, 우마코인이잖아?!']);
        await era.printAndWait([
          { color: money_color, content: '150' },
          ' 우마코인을 획득했다!',
        ]);
        era.add('flag:현재코인', 150);
      }
    } else {
      await era.printAndWait([
        '흉 운세의 제비가 나왔다! ',
        me.get_couple_title(),
        '은(는) 갑자기 닥쳐올지 모를 불운에 대비해 전전긍긍했다.',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @author KUN
   * @param {HookArg} hook
   * @param {{[jpy]:number}} extra_flag
   * @returns {Promise}
   */
  async out_river(hook, extra_flag) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      if (
        era.get(`love:${this.id}`) >= 50 &&
        (era.get(`talent:${this.id}:자신감`) === 1 ||
          era.get(`talent:${this.id}:감정활동`) === 1 ||
          era.get(`talent:${this.id}:수치내성`) === 1 ||
          era.get(`talent:${this.id}:공포감수`) === 1 ||
          era.get(`talent:${this.id}:미래에대한기대`) === 1) &&
        Math.random() < era.get(`love:${this.id}`) / 2000
      ) {
        hook.override = true;
        /** @author KUN */
        await print_event_name('강둑을 거니는 시간', chara);
       await era.printAndWait([
          '강둑에서 여유로운 시간을 보낸 뒤, ',
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 돌아갈 채비를 했다.',
        ]);
        await era.printAndWait('부드러운 바람이 두 사람의 뺨을 스치며 기분 좋게 불어왔다.');
        era.printButton('「이제 돌아갈까?」', 1);
        era.printButton('「시간이 좀 늦었네.」', 2);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 말을 건네는 것과 동시에, 곁에 있던 ',
          chara.get_colored_name(),
          '이(가) 슬쩍 이쪽을 쳐다보며 조용히 어깨를 밀착해 왔다.',
        ]);
        era.println();
        await era.printAndWait('한가로운 길을 나란히 걸어갔다. 주변에는 지나가는 사람이 거의 보이지 않았다.');
        await chara.say_and_wait('참 조용하네……');
        await era.printAndWait([
          '무언가 결심한 듯한 ',
          chara.get_colored_name(),
          '이(가) 걸음을 늦췄다.',
        ]);
        era.println();
        await era.printAndWait([
          '곁에 있던 ',
          chara.get_colored_name(),
          '이(가) 멈춰 서자, ',
          me.get_colored_name(),
          '도 걸음을 멈추고 뒤를 돌아보았다.',
        ]);
        era.printButton('「왜 그래?」', 1);
        await era.input();
        await chara.say_and_wait('잠시만, 눈을 감아 줄 수 있어?');
        await era.printAndWait([
          '뜬금없는 부탁에 ',
          me.get_colored_name(),
          '은(는) 잠시 어리둥절했지만, 이내 눈을 감았다.',
        ]);
        era.println();
        await era.printAndWait('귓가로 바람 소리가 들려왔다. 시원함 속에 미약한 열기가 섞여 있었다.');
        await era.printAndWait([
          '눈을 감고 있어도 ',
          me.get_colored_name(),
          '은(는) 무슨 일이 일어나고 있는지 짐작할 수 있었다.',
        ]);
        await era.printAndWait('팔이 몸을 감싸 안았고, 뺨에 따스하고 촉촉한 감촉이 닿았다.');
        era.println();
        await chara.say_and_wait('……자, 이제 돌아가자.');
        await era.printAndWait([
          '다시 눈을 떴을 때, ',
          chara.get_colored_name(),
          '은(는) 이미 평소처럼 ',
          me.get_colored_name(),
          '의 앞에 서 있었다.',
        ]);
        await era.printAndWait(
          '얼굴에 약간의 홍조가 남아 있었지만, 그녀는 미소 지으며 두어 걸음 뒤로 물러났다.',
        );
        era.printButton('「돌아가자.」（호감도+10）', 1);
        era.printButton('「조금 더…… 늦게 가도 괜찮을 것 같아……」（애정도+1）', 2);
        if ((await era.input()) === 1) {
          await era.printAndWait([
            chara.get_colored_name(),
            '은(는) ',
            me.get_colored_name(),
            '의 따뜻한 손을 잡고 안심한 듯 길을 걸었다.',
          ]);
          await me.say_and_wait('방금 그 감촉은 대체 뭐였을까……', true);
          era.println();
          sys_like_chara(this.id, 0, 10) && (await era.waitAnyKey());
        } else {
          await chara.say_and_wait('조금 더 늦게……');
          await chara.say_and_wait('그 말은 즉……');
          await era.printAndWait([
            '얼굴을 붉히는 ',
            chara.get_colored_name(),
            '을(를) 보며, ',
            me.get_colored_name(),
            '은(는) 그저 빙그레 웃어 보였다.',
          ]);
          await era.printAndWait([
            '오늘은 ',
            chara.get_colored_name(),
            '와(과) 조금 더 시간을 보내기로 했다.',
          ]);
          era.println();
          sys_love_uma(this.id, 1) && (await era.waitAnyKey());
        }
        return;
      }
      /** @author 雞雞 */
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 함께 강변을 산책했다. 오늘도 기분 좋은 하루다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 함께 강가에서 낚시를 하며 대어를 낚기를 고대했다.',
      ]);
      extra_flag.jpy = get_random_value(0, 5);
    }
  }

  /**
   * @author 雞雞
   * @param {HookArg} hook
   */
  async out_shopping(hook) {
    await common_out_shopping.call(
      this,
      get_chara_talk(this.id),
      get_chara_talk(0),
      hook,
    );
  }

  /**
   * @author 雞雞
   * @param {HookArg} hook
   */
  async out_station(hook) {
    hook.arg = await select_action_in_station(this.id);
    let talk;
    switch (hook.arg) {
      case 0:
        talk = '식사하러 왔다. 중식, 일식, 아니면 양식 중 무엇을 먹을까?';
        break;
      case 1:
        talk = '데이트를 즐겼다. 손을 맞잡은 두 사람의 모습이 주변의 부러움을 샀다.';
        break;
      case 2:
        talk = '쇼핑몰에 들러 소소한 선물을 샀다.';
    }
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '과(와) ',
      get_chara_talk(this.id).get_colored_name(),
      '은(는) 함께 역 근처로 ',
      talk,
    ]);
  }

  /**
   * @author 雞雞
   * @param {HookArg} hook
   */
  async school_atrium(hook) {
    if ((hook.arg = (await select_action_in_atrium()) === 0)) {
      await kojo['中庭枯树洞'](this.#dict);
    } else {
      await kojo['안뜰데이트'](this.#dict);
    }
  }

  /** @param {HookArg} hook */
  async school_rooftop(hook) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (
      (era.get(`talent:${this.id}:감정활동`) === 1 ||
        era.get(`talent:${this.id}:자신감`) === 1) &&
      era.get(`love:${this.id}`) >= 75 &&
      Math.random() < 0.05 + era.get(`base:${this.id}:성욕`) / 20000
    ) {
      hook.override = true;
      /** @author KUN */
      await print_event_name('묘한 점심 식사', chara);
      await era.printAndWait([
        '점심시간이 되자, ',
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 약속이라도 한 듯 옥상으로 향했다.',
      ]);
      await era.printAndWait([
        '어째서인지 오늘 ',
        chara.get_colored_name(),
        '이(가) 챙겨온 도시락은 평소보다 유난히 화려했다.',
      ]);
      era.println();
      await chara.say_and_wait([
        sys_get_colored_callname(this.id, 0),
        ', 맛이 어떤지 한번 먹어봐.',
      ]);
      await chara.say_and_wait('나름 야심작이라구～');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 도시락을 건네받아 아무 의심 없이 식사를 시작했다.',
      ]);
      await era.printAndWait(['맛있게 몇 입 먹고 나니, 몸이 점차 뜨거워지는 것이 느껴진다……']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 이상함을 느끼고 곁에 있는 ',
        chara.get_colored_name(),
        '을(를) 돌아보자, 그녀 역시 얼굴을 붉히고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 무언가 물어보려던 찰나, 강렬한 입맞춤에 가로막혀 말이 끊기고 말았다.',
      ]);
      era.println();
      await era.printAndWait(['입술이 떨어지는 순간, 입가에 길게 은색 실이 이어졌다.']);
      era.printButton('「이건 어쩔 수 없겠네……」', 1);
      era.printButton('「나는 스승이다! 강철의 의지 발동!」', 2);
      era.set('status:0:우마뾰이Z', 1);
      era.set(`status:${this.id}:우마뾰이Z`, 1);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '옥상이라는 장소에도 불구하고, ',
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 끊임없이 서로를 갈구했다.',
        ]);
        await era.printAndWait([
          '하지만 점심시간이라는 사실을 깨달은 ',
          me.get_colored_name(),
          '은(는) 잡념을 떨치고 ',
          chara.get_colored_name(),
          '의 어깨를 붙잡았다……',
        ]);
        await quick_into_sex(this.id);
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 세차게 고개를 저어 의지를 다잡고, 즉시 손에 든 도시락을 갈무리했다.',
        ]);
        await era.printAndWait([
          chara.get_colored_name(),
          '을(를) 남겨둔 채, 마치 도망이라도 치듯 서둘러 옥상을 떠났다……',
        ]);
        sys_change_lust(this.id, 1500);
      }
      return;
    }
    const is_sex = era.get('flag:징벌강도') >= 2 && Math.random() < 0.5;
    await kojo['옥상']({ sex: is_sex, ...this.#dict });
    if (is_sex) {
      hook.override = true;
      era.println();
      let wait_flag = false;
      if (Math.random() < 0.5) {
        wait_flag = sys_change_motivation(this.id, 1);
      }
      wait_flag =
        sys_like_chara(this.id, 0, get_random_value(15, 25)) || wait_flag;
      if (wait_flag) {
        await era.waitAnyKey();
      }
    }
  }

  /** @author 雞雞 */
  select() {
    const chara = get_chara_talk(this.id);
    if (sys_check_awake(this.id)) {
      era.print(
        get_random_entry([
          [
            chara.get_colored_name(),
            '이(가) ',
            get_chara_talk(0).get_colored_name(),
            '에게 인사를 건넸다.',
          ],
          [
            chara.get_colored_name(),
            '이(가) ',
            get_chara_talk(0).get_colored_name(),
            '에게 가볍게 고개를 끄덕이며, 언제든 준비되었다는 신호를 보냈다.',
          ],
        ]),
      );
    } else {
      era.print([chara.get_colored_name(), ' 은(는) 깊은 잠에 빠져 있다.']);
    }
  }

  /** @author 雞雞 */
  async slave_end() {
    const me = get_chara_talk(0);
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait([
      '돈에 눈이 먼 ',
      me.get_colored_name(),
      '은(는) 돌이킬 수 없는 길에 들어섰다. 자존심을 버리고 자신의 학생에게 돈을 빌린 것인데……',
    ]);
    await era.printAndWait('하지만 운명이 주는 모든 선물에는 뒷면에 가격표가 붙어 있는 법이다.');
    await era.printAndWait([
      me.get_colored_name(),
      '의 빚은 눈덩이처럼 불어나는 이자 끝에 결국 ',
      me.get_colored_name(),
      '이(가) 감당할 수 있는 수준을 넘어서고 말았다.',
    ]);
    await era.printAndWait([
      '이제 ',
      me.get_colored_name(),
      '이(가) 그 대가를 치를 시간이 다가왔다……',
    ]);
    await era.printAndWait([
      '금전 관계라는 쇠사슬에 묶인 채, ',
      me.get_colored_name(),
      '은(는) 결말을 맞이했다……',
    ]);
    era.setWidth(24);
    era.setOffset(0);
    await print_ending_name('돈의 노예', get_chara_talk(this.id));
  }

  /**
   * @author 雞雞
   * @author 黑奴队长
   */
  async talk() {
    const chara = get_chara_talk(this.id);
    let buffer;
    if (!sys_check_awake(this.id)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '이(가) 새근새근 콧노래 섞인 소리를 내며 기분 좋게 자고 있다.',
      ]);
    } else {
      if (
        era.get(`base:${this.id}:체력`) <
        0.45 * era.get(`maxbase:${this.id}:체력`)
      ) {
        buffer = [
          [
            chara.get_colored_name(),
            '의 상태가 무척 피곤해 보인다. 이제 ',
            chara.get_colored_name(),
            '을(를) 쉬게 해줄 때가 된 것 같다.',
          ],
          [
            chara.get_colored_name(),
            '이(가) 간절한 눈빛으로 ',
            get_chara_talk(0).get_colored_name(),
            '을(를) 바라보며 휴식 허락을 기다리고 있다.',
          ],
        ];
      } else if (era.get(`cflag:${this.id}:육성턴수합산`) < 3 * 48) {
        buffer = [
          [
            chara.get_colored_name(),
            '의 안색이 어둡고 털이 푸석푸석하다. 컨디션이 바닥을 치고 있는 것 같다.',
          ],
          [
            chara.get_colored_name(),
            '의 표정이 어둡다. 워밍업조차 제대로 되지 않는 듯하며, 컨디션이 좋지 않아 보인다.',
          ],
          [
            chara.get_colored_name(),
            '의 표정이 다소 굳어 있다. 조금 긴장한 듯하며, 컨디션은 평범해 보인다.',
          ],
          [
            chara.get_colored_name(),
            '이(가) 기분 좋게 코스 위에서 워밍업을 하고 있다. 컨디션이 꽤 좋아 보인다.',
          ],
          [
            chara.get_colored_name(),
            '이(가) 싱글벙글 웃으며 코스 위를 뛰어다니고 있다. 컨디션이 매주 좋은 것 같다.',
          ],
        ];
        buffer = [buffer[era.get(`cflag:${this.id}:컨디션`) + 2]];
      } else {
        buffer = [[chara.get_colored_name(), '은(는) 줄곧 여유로운 표정을 유지하고 있다.']];
      }
      await era.printAndWait(get_random_entry(buffer));
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  // eslint-disable-next-line no-unused-vars
  async week_start(hook, extra_flag, event_object) {}

  /** @param {HookArg} hook */
  // eslint-disable-next-line no-unused-vars
  async birthday(hook) {
    const chara = get_chara_talk(this.id);
    const me = get_chara_talk(0);
    if (sys_check_remote(this.id)) {
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 멀리서 ',
        chara.get_colored_name(),
        '에게 생일 축하 메시지를 보냈다.',
      ]);
      await era.printAndWait([chara.get_colored_name(), '이(가) 무척 기뻐하는 것 같다.']);
    } else {
      await kojo['생일'](this.#dict);
    }
  }

  /**
   * @param {HookArg} hook
   * @param extra_flag
   * @param {EventObject} event_object
   */
  async run(hook, extra_flag, event_object) {
    if (this[event_hooks.keys[hook.hook]] !== undefined) {
      return await this[event_hooks.keys[hook.hook]].call(
        this,
        hook,
        extra_flag,
        event_object,
      );
    }
  }
}

module.exports = CustomizedDaily;
