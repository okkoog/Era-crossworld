/**
 * @file 원더 어큐트 - 日常
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const kojo = require('#/event/daily/daily-100.kojo');
const CustomizedDaily = require('#/event/daily/daily-common');
const acute_out_shopping = require('#/event/daily/daily-events-100/out-shopping');
const acute_school_atrium = require('#/event/daily/daily-events-100/school-atrium');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const { check_slavery } = require('#/event/snippets/check-slavery');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends CustomizedDaily {
  get #dict() {
    const ret = {};
    const acute = get_chara_talk(this.id);
    ret['대표색'] = acute.color;
    ret['그녀'] = acute.sex;
    ret['당신'] = get_chara_talk(0).name;
    ret['호칭'] = sys_get_callname(this.id, 0);
    ret.rape = check_slavery(this.id);
    return ret;
  }

  select() {
    if (!sys_check_awake(100)) {
      return super.select();
    }
    kojo['选中互动角色'](this.#dict);
  }

  good_morning() {
    const dict = this.#dict;
    dict['여자아이'] = get_chara_talk(this.id).child_sex_title;
    kojo['回合开始'](dict);
  }

  async talk() {
    if (!sys_check_awake(100)) {
      return await super.talk();
    }
    const dict = this.#dict;
    dict['奇锐骏称呼骏川'] = sys_get_callname(this.id, 301);
    await kojo['잡담'](dict);
  }

  async office_gift() {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0),
      love = era.get('love:100');
    if (love >= 90) {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 그렇게 무리해서 신경 쓰지 않아도 괜찮은데 말이지~',
      );
      await acute.say_and_wait(['그나저나, ', callname, ', 전에 말했던 피임 도구……']);
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        '의 목소리가 순간 기어들어 가듯 낮아졌다.',
      ]);
      await acute.say_and_wait('그거…… 챙겨왔니?');
      await acute.say_and_wait('……어떤 걸 「챙겨왔냐」고?');
      await acute.say_and_wait('으으…………');
      await era.printAndWait([
        acute.get_colored_name(),
        '는 조금 삐친 듯이 입술을 내밀었다.',
      ]);
      await era.printAndWait([
        '언제나 차분하고 어떤 일에도 동요하지 않던 ',
        acute.get_colored_name(),
        '가, 오직 이 순간만큼은 여느 또래 아이처럼 부끄러워하는 ',
        acute.get_teen_sex_title(),
        '의 모습을 보여준다.',
      ]);
      await era.printAndWait(['왠지 모르게, 그녀를 조금 짓궂게 놀려주고 싶다는 나쁜 장난기가 발동하려 한다——']);
      await acute.say_and_wait('……………………');
      await era.printAndWait([
        '푸른 하늘 아래에서, 부끄러워하는 ',
        acute.get_colored_name(),
        '와 함께 즐거운 시간을 보냈다.',
      ]);
    } else if (love >= 75) {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 그렇게 무리해서 신경 쓰지 않아도 괜찮은데 말이지~',
      );
      await acute.say_and_wait(['그나저나, ', callname, ', 피임 도구는 잘 챙겨 쓰고 있니?']);
      await acute.say_and_wait([
        '젊고 혈기 왕성한 건 좋은 일이지만 말이지, 트레이너와 담당 ',
        acute.get_uma_sex_title(),
        ' 사이의 선은 확실히 지켜야 하는 법이란다~',
      ]);
      await acute.say_and_wait('졸업하고 나면, 그때 진짜로 진검승부를 펼치도록 하렴~');
      await acute.say_and_wait([
        '그때가 되면, 잊지 말고 내가 ',
        callname,
        '의 아이를 안아보게 해 줘야 한단다~',
      ]);
      await era.printAndWait([
        '……평온하고 온화한 ',
        acute.get_colored_name(),
        '와 함께, 출산과 육아에 관한 이야기를 나누었다.',
      ]);
      await era.printAndWait('…………얼굴이 화끈거려 견딜 수가 없다.');
    } else if (Math.random() > 0.5) {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 정말 고마워서 어쩌나~',
      );
      await acute.say_and_wait(['자, 여기 와서 앉으렴, ', callname, '.']);
      await acute.say_and_wait(
        '어디 가지 말고 가만히 기다리렴. 방금 막 절여둔 무를 가져올 테니 같이 먹자꾸나.',
      );
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        '와 함께 쌉싸름하면서도 아삭아삭한 무를 나누어 먹었다.',
      ]);
    } else {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 정말 고마워서 어쩌나~',
      );
      await acute.say_and_wait([
        '그러고 보니, 하야카와 씨가 오늘은 비가 올 것 같다고 하더구나.',
      ]);
      await acute.say_and_wait([callname, ', 우산 안 챙겨왔지?']);
      await acute.say_and_wait('나한테 여분 우산이 있으니까~ 이거 가져가서 쓰렴.');
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        '에게 등 떠밀리듯 강제로 튼튼한 우산 하나를 받았다.',
      ]);
    }
  }

  async office_cook() {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0);
    if (Math.random() > 0.5) {
      await era.printAndWait([
        '저녁 무렵, ',
        acute.get_colored_name(),
        '에게 맛있는 「무말랭이」를 만드는 비법을 가르쳐 달라고 청했다——',
      ]);
      await get_chara_talk(100).say_and_wait(
        '무를 말리는 비법 말이니? 으음…… 굳이 비법이라고 한다면, 역시 좋은 항아리를 쓰는 게 첫걸음이란다……',
      );
      await era.printAndWait('………………');
      await era.printAndWait('「절임」에 관한 깊고 방대한 지식을 잔뜩 전수받았다.');
    } else {
      await era.printAndWait(['', acute.get_colored_name(), '와 함께 요리를 하려고 했으나……']);
      await era.printAndWait('「내가 할 테니 신경 쓰지 마렴」이라는 말에 밀려 부엌에서 쫓겨나고 말았다.');
      await acute.say_and_wait([
        '도와주지 않아도 괜찮단다, ',
        callname,
        '. 너는 그냥 거실에 편하게 앉아있으렴. 밥은 금방 다 되니까~? 조금만 기다려 주겠니~',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('문득 아주 짧은 순간, 눈앞의 그녀에게서 어머니의 잔상이 겹쳐 보였다.');
    }
  }

  async office_study() {
    const acute = get_chara_talk(100),
      me = get_chara_talk(0);
    if (Math.random() > 0.5) {
      await get_chara_talk(100).say_and_wait('공부하려는 거니~? 으음…… 열심히 노력해야겠네~');
      await era.printAndWait([
        '거실에 앉아 「5년 레이스, 3년 모의고사」 문제집을 펼쳐 든 ',
        me.get_colored_name(),
        '이(가) ',
        acute.get_colored_name(),
        '에게 차근차근 문제를 설명해 주고 있다——',
      ]);
    } else {
      await get_chara_talk(100).say_and_wait(
        '우아아아~ 공부라는 건 원래 이렇게 어려운 거였구먼……',
      );
      await era.printAndWait([
        '눈앞에 펼쳐진 「5년 레이스, 3년 모의고사」를 마주하고, 언제나 온화하던 ',
        acute.get_colored_name(),
        '가 난처하다는 듯 곤란한 표정을 짓고 있다.',
      ]);
      await era.printAndWait([
        '그 모습이 신선하기도 하고 귀엽기도 하여, ',
        me.get_colored_name(),
        '은(는) 자신도 모르게 풉 하고 쓴웃음을 흘렸다——',
      ]);
    }
  }

  office_prepare = () => {
    return get_chara_talk(100).say_and_wait(
      Math.random() > 0.5
        ? '다음 레이스 말이니?…… 으음~ 어떤 전술을 쓰는 게 좋을런지.'
        : '어라? 다음 레이스가 열릴 경기장에 미리 가보려는 거니?',
    );
  };

  async office_game() {
    const acute = get_chara_talk(100);
    if (Math.random() > 0.5) {
      await acute.say_and_wait('게임 말이니…… 사실 난 기계를 어떻게 다루는지 잘 모르겠구나——');
      await era.printAndWait([
        '화면과 컨트롤러를 끊임없이 번갈아 쳐다보던 ',
        acute.get_colored_name(),
        '가, 검지손가락 두 개를 꼿꼿이 세워 바닥에 놓인 패드를 콕콕 건드리고 있다.',
      ]);
      await era.printAndWait('……솔직히 말해서, 정말이지 무지하게 귀엽다.');
    } else {
      await acute.say_and_wait(
        '게임기—— 아, 예전에 고향 이웃집 아이한테 들은 적이 있단다. 그 배틀 시티 같은 걸 할 수 있는 그거구먼?',
      );
      await era.printAndWait('풉—— 하마터면 웃음이 터질 뻔했다.');
      await era.printAndWait('배틀 시티라니…… 대체 몇 년 전 이야기를 하는 걸까?');
    }
  }

  school_atrium = acute_school_atrium;

  async school_rooftop() {
    const acute = get_chara_talk(100),
      me = get_chara_talk(0);
    await era.printAndWait([
      '점심시간, 옥상에서 ',
      acute.get_colored_name(),
      '와 함께 도시락을 먹고 있다.',
    ]);
    await era.printAndWait('아작, 아작, 아작——');
    if (Math.random() < 0.5) {
      await era.printAndWait('언제나 변함없이 온화하고 기분 좋은 아삭한 식감——');
      await acute.say_and_wait('후후~ 괜찮단다, 여기 아직 많이 있으니까 마음껏 먹으렴~');
      await era.printAndWait([
        '미소를 짓는 ',
        acute.get_colored_name(),
        '의 얼굴을 바라보고 있으니, 마음 깊은 곳에서부터 행복감이 가득 차오른다.',
      ]);
    } else {
      await era.printAndWait('평소보다 조금 더 짭조름한 맛이 느껴지는 식감——');
      await acute.say_and_wait([
        '요즘 날씨가 부쩍 더워졌잖니. 땀을 많이 흘리면 몸에 염분이 부족해진단다? 그래서 소금을 조금 더 쳤는데—— ',
        me.get_colored_name(),
        ', 입맛에 맞니?',
      ]);
      await era.printAndWait('말해 뭐하겠는가? 당연히 아주 마음에 든다.');
    }
  }

  async out_river(hook, extra_flag) {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0),
      me = get_chara_talk(0);
    hook.arg = !!(await select_action_around_river());
    if (hook.arg) {
      if (Math.random() < 0.5) {
        await acute.say_and_wait('휘이이~ 바람이 분다, 비가 온다, 천둥아저씨가 북을 치며 온다~');
        await era.printAndWait([
          '기분이 무척 좋아 보이는 ',
          acute.get_colored_name(),
          '가 강변을 따라 콧노래를 흥얼거린다.',
        ]);
        await era.printAndWait([
          '……어째서일까, ',
          acute.get_colored_name(),
          '가 부르는 정겨운 노랫소리를 듣고 있자니, 왠지 모르게 스르륵 잠이 밀려온다.',
        ]);
      } else {
        await acute.say_and_wait([
          callname,
          ', 강가로 산책을 나오는 건 참 풍류 돋는 일이지만 말이지, 그래도 조심해야 한단다. 너무 가까이 가다가 강물에 풍덩 빠지기라도 하면 큰일 나니까 말이야.',
        ]);
        await era.printAndWait([
          '강변을 거닐던 ',
          acute.get_colored_name(),
          '가 드물게 아주 진지한 표정으로 훈계를 늘어놓는다.',
        ]);
        await era.printAndWait([
          '……하지만, 어쩐지 ',
          acute.get_colored_name(),
          ' 본인도 무척 즐거워 보인다.',
        ]);
      }
    } else {
      await era.printAndWait([
        acute.get_colored_name(),
        '와 약속을 잡고 강가로 낚시를 하러 왔다……',
      ]);
      if (Math.random() < 0.5) {
        await acute.say_and_wait('어머나, 날씨 참 좋구먼~');
        await era.printAndWait([
          '낚싯대를 쥔 채 흘러가는 구름과 태양을 향해 ',
          acute.get_colored_name(),
          '가 인자한 미소를 지어 보인다.',
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          '의 주변에는 모든 시름을 내려놓게 만드는 특유의 나른하고 편안한 분위기가 아지랑이처럼 피어오른다.',
        ]);
        await era.printAndWait([
          '……아무리 봐도 ',
          me.get_colored_name(),
          '과(와) ',
          acute.get_colored_name(),
          '는 낚시를 하러 온 게 아니라, 일광욕을 하러 온 것 같다.',
        ]);
      } else {
        await era.printAndWait([
          '——그런데 놀랍게도, ',
          acute.get_colored_name(),
          '는 낚싯대를 쥐고 있지 않았다. 그저 찌와 바늘이 연결된 낚싯줄에 미끼를 꿴 뒤, 그대로 맨손으로 물속에 휙 던져 넣었을 뿐이다.',
        ]);
        await acute.say_and_wait(
          '영차…… 후우~ 이러면 끝~ 이제 물고기들이 미끼를 물 때까지 기다렸다가 한 번에 낚아 올리면 된단다~',
        );
        await era.printAndWait('……진짜로 이런 방식으로 물고기가 잡히긴 하는 걸까?');
        if ((extra_flag.jpy = get_random_value(0, 5)) > 0) {
          await era.printAndWait('——그런 의문이 들기가 무섭게, 물속의 찌가 보글보글 소리를 내며 아래로 쑥 가라앉기 시작했다.');
        }
      }
    }
  }

  async out_church() {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0);
    await acute.say_and_wait('어머머…… 신사에 참배하러 가자고?');
    await era.printAndWait([
      '휴일 전날, ',
      acute.get_colored_name(),
      '에게 함께 신사에 가서 복을 빌자는 제안을 건넸다.',
    ]);
    await acute.say_and_wait([
      '그렇구나…… 신사에 가기로 한 거라면~ 제대로 준비를 갖추지 않으면 안 되겠네……',
    ]);
    await era.printAndWait([
      '예상했던 대로, 옛것을 소중히 여기는 어르신 감성의 ',
      acute.get_colored_name(),
      '는 이 「신사 참배」 같은 전통 행사에 무척이나 진심이다.',
    ]);
    await acute.say_and_wait('그나저나…… 신사에 참배를 가려면, 아주 이른 아침부터 서둘러야 한단다……');
    await acute.acute.say_and_wait('미리 신사에 바칠 새전과 향도 챙겨야 하고……');
    await acute.say_and_wait(
      '신령님께 올릴 공물도……오늘 밤에는 무를 조금 더 넉넉히 절여둬야겠구나……',
    );
    await acute.say_and_wait('……아무리 그래도 너무 과하게 신경 쓰는 게 아니냐구?');
    await acute.say_and_wait(
      '신사 참배는 빠르면 빠를수록 좋은 법이란다. 일찍 움직일수록 정성이 더 깊게 닿는 법이니까. 그러니까 내일은 평소보다 두 시간 일찍 일어나서 준비를 시작해야겠어——',
    );
    await acute.say_and_wait([
      '아, ',
      callname,
      '은 그렇게 일찍 일어나지 않아도 괜찮단다? 서둘러 준비하는 건 내 몫이니까 말이야. 젊은이는 잠을 푹 자둬야 해~ 출발할 때가 되면 내가 깨우러 갈 테니까 말이지~',
    ]);
    await era.printAndWait([
      '어쩐지 그녀에게 완전히 ',
      era.get('cflag:0:성별') === 1 ? '손자' : '손녀',
      ' 취급을 받고 있는 듯한 기분이 든다……',
    ]);
    await era.printAndWait([
      '그것보다, ',
      acute.get_colored_name(),
      ' 본인도 엄연히 파릇파릇한 젊은이 아닌가?',
    ]);
    if (Math.random() > 0.5) {
      await acute.say_and_wait('어머나 세상에, 대길이 나왔네? 좋은 일이 가득 생길 것만 같구나~');
      await era.printAndWait([
        '손에 대길 점괘 종이를 쥔 채 ',
        acute.get_colored_name(),
        '가 인자한 미소를 지었다.',
      ]);
      await era.printAndWait(
        '어찌 보면 당연한 결과일지도 모른다. 참배를 위해 무려 두 시간이나 일찍 일어나 정성을 다해 준비했으니 말이다.',
      );
      await acute.say_and_wait('하늘은 스스로 돕는 자를 돕는다—— 바로 이런 상황을 두고 하는 말이겠지.');
      await acute.say_and_wait(['왜 그러니, ', callname, '? 무척 싱글벙글한 표정이네.']);
      await era.printAndWait('……얼굴에 피어오른 미소를 들키고 만 것 같다.');
    } else {
      await acute.say_and_wait(
        '대흉이 나왔구나…… 당분간은 좋은 일을 더 많이 해서 공덕을 열심히 쌓아야겠네~',
      );
      await era.printAndWait([
        '손에 대흉 점괘 종이를 쥐고서도 ',
        acute.get_colored_name(),
        '는 변함없이 평온하게 가라앉은 목소리로 말했다. 최악의 점괘조차 ',
        acute.sex,
        '의 마음을 조금도 흔들어놓지 못한 듯하다.',
      ]);
      await era.printAndWait('……그렇다 해도, 제삼자인 자신이 다 분하고 속이 상한다.');
      await era.printAndWait('새벽부터 두 시간이나 일찍 일어나 정성스레 준비한 참배였는데……');
      await acute.say_and_wait([
        '왜 그러니, ',
        callname,
        '? 안색이 별로 좋지 않아 보이는데? 무슨 일이라도 있니?',
      ]);
      await era.printAndWait('……얼굴에 차오른 불만스러운 기색을 간파당한 모양이다.');
    }
    await era.printAndWait('일단 적당한 핑계를 대고 얼렁뚱땅 넘어가기로 했다.');
    await era.printAndWait([
      '어찌 되었든, ',
      acute.get_colored_name(),
      '에게 이런 모습을 들킬 수는 없는 노릇이니까……',
    ]);
  }

  out_shopping = acute_out_shopping;

  async out_station(hook) {
    const acute = get_chara_talk(100),
      callname = sys_get_callname(100, 0),
      me = get_chara_talk(0);
    hook.arg = await select_action_in_station(100);
    switch (hook.arg) {
      case 0:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            acute.get_colored_name(),
            '와 함께 기차역 앞 노점에서 김이 모락모락 나는 따끈한 유부우동을 맛보았다……',
          ]);
          await acute.say_and_wait('후우, 후우…… 아앙~ 음, 읍…… 으응❤️~');
          await era.printAndWait('유부의 뜨거운 열기를 입으로 조심스레 불어가며, 작은 입으로 가만가만 씹어 삼킨다.');
          await era.printAndWait([
            '새하얀 입김과 열기가 ',
            acute.get_colored_name(),
            '의 입술 사이로 아스라이 베어 나오고, 혀와 목구멍이 그 열기에 반응해 미세하게 공명하는 소리가 울렸다.',
          ]);
          await acute.say_and_wait('꿀꺽…… 음…… 하아——');
          await era.printAndWait([
            acute.get_colored_name(),
            '의 맞은편에 앉아 있으니, 식사 예절을 지키기 위해 필사적으로 감추려 애쓰는 그녀 특유의 미세한 목 넘김 소리가 귓가를 자극한다……',
          ]);
          await acute.say_and_wait('……?');
          await era.printAndWait([
            '아, 이런. ',
            acute.get_colored_name(),
            '의 입술 새로 번지는 타액과 뜨거운 열기에 온 정신을 빼앗겨 빤히 쳐다보던 시선을, 그만 ',
            acute.get_colored_name(),
            '에게 들켜 버린 것 같다. ',
          ]);
          await acute.say_and_wait('…………');
          await era.printAndWait([
            acute.sex,
            '는 ',
            me.get_colored_name(),
            '의 그릇 속에 있는 아직 손도 대지 않은 통통한 유부를 바라보더니, 미간을 살짝 찌푸리며 약간 불만스러운 기색을 내비쳤다.',
          ]);
          await era.printAndWait(
            '하지만 음식을 입에 물고 있는 터라 소리를 낼 수는 없었기에, 그저 볼을 빵빵하게 부풀리는 것으로 소심한 항의를 표현할 뿐이었다.',
          );
          await era.printAndWait([
            '이어 그릇을 받치지 않은 왼손을 슬그머니 들어 올려, ',
            me.get_colored_name(),
            '의 어딘가 모르게 음란하고 야릇한 시선을 피하려는 듯, 더운 숨을 뿜어내는 입술 앞을 가만히 가로막았다.',
          ]);
          await era.printAndWait([
            '그렇게 눈살을 살짝 찌푸린 채, ',
            acute.get_colored_name(),
            '는 손으로 자신의 열기 어린 얼굴 아랫부분을 수줍게 가린 채로——',
          ]);
          await era.printAndWait('…………');
          await era.printAndWait([
            acute.get_colored_name(),
            ', 이 아이는 어쩌면…… 이쪽 방면으로 무시무시한 천재가 아닐까?',
          ]);
        } else {
          await era.printAndWait([
            acute.get_colored_name(),
            '와 함께 역 앞 편의점에서 마침 특가로 판매 중인 저가형 무말랭이를 사서 맛보았다……',
          ]);
          era.printButton('「오도독——」', 1);
          await era.input();
          await era.printAndWait(
            '음, 첫 입에 닿는 식감은 제법 아삭한 편이다. 편의점에서 대량으로 찍어 파는 반찬치고는 꽤 훌륭한 수준인데……',
          );
          era.printButton('「오도독, 오도독——」', 1);
          await era.input();
          await era.printAndWait([
            '하지만 씹으면 씹을수록, 역시 ',
            acute.get_colored_name(),
            '가 정성스레 직접 담가준 무말랭이의 깊은 맛에는 발끝조차 미치지 못한다는 사실이 뼈저리게 느껴진다……',
          ]);
          await era.printAndWait(
            '매대에 너무 오래 방치되어 수분이 말라버린 탓에 이가 아플 정도로 딱딱하게 겉돌거나,',
          );
          await era.printAndWait(
            '유통기한을 억지로 늘리기 위함인지, 아니면 대중의 자극적인 입맛을 맞추기 위함인지 모를 과도한 소금기 가득한 염분 수치까지……',
          );
          await era.printAndWait('오독, 오독, 꼬들꼬들——');
          await era.printAndWait('씹으면 씹을수록 기분 나쁜 소금기가 입안 가득 불쾌하게 퍼져나갔고,');
          await era.printAndWait(
            '이미 수분기를 잃어버린 무말랭이는 이 짠맛 가득한 구강 속에서 얼마 남지 않은 침샘의 타액마저 강제로 쥐어짜 내 빼앗아 가고 있었다……',
          );
          await acute.say_and_wait([callname, ', 여기 물 있으니까 마시렴~']);
          await era.printAndWait([
            acute.get_colored_name(),
            '가 건네준 보온병 뚜껑에 찰랑이는 따스한 물을 받아 들고, 그제야 가뭄 가득한 목구멍 속으로 폭풍 같은 갈증 해소의 물줄기를 들이켰다.',
          ]);
          era.printButton('「벌컥, 벌컥——」', 1);
          await era.input();
          await era.printAndWait([
            '사막 속 오아시스 같았던 ',
            acute.get_colored_name(),
            '의 배려 덕분에 간신히 목숨을 건졌다.',
          ]);
          await era.printAndWait(
            '빌어먹을, 하마터면 특가 무말랭이를 미끼로 값비싼 음료수를 강매하려던 편의점의 사악한 음모에 고스란히 놀아날 뻔했다!',
          );
          await era.printAndWait('원래 진짜 무말랭이라는 음식은,');
          await era.printAndWait('짭조름하면서도 속이 결코 무작정 말라비틀어지지도 않고,');
          await era.printAndWait('입안의 침샘을 기분 좋게 자극하면서도 인체의 수분을 강제로 강탈하지 않는 법이다.');
          await era.printAndWait(
            '아삭하고 짭조름하면서도 목 넘김이 부드러워, 고된 트레이닝이 끝난 직후 다량의 수분 섭취가 금지된 타이밍에 침샘을 자극해 갈증을 완만하게 달래줄 수 있는, 그야말로 영양과 훈련 보조를 동시에 잡은 최고의 기능성 식품이어야 마땅하거늘!',
          );
          await era.printAndWait(
            '이토록 위대하고 훌륭한 무말랭이를 고작 이런 음모와 상술이 가득한 공업용 쓰레기 반찬으로 전락시키다니…… 편의점, 네 놈들은 정말 사악하다——',
          );
          await acute.say_and_wait([
            '저기, ',
            callname,
            '. 기숙사로 돌아가면, 내 방에 와서 진짜 무말랭이를 좀 먹고 가지 않을래?',
          ]);
          await era.printAndWait([
            '마치 속마음을 완벽하게 꿰뚫어 본 것처럼, ',
            me.get_colored_name(),
            '의 곁에 서 있던 ',
            acute.get_colored_name(),
            '가 특유의 여유롭고 나긋나긋한 어조로 ',
            me.get_colored_name(),
            '의 폭주하던 내면 독백 속으로 스며들듯 들어왔다.',
          ]);
          era.printButton('「하핫! 당연히 대찬성이지!!」', 1);
          await era.input();
          await era.printAndWait([
            acute.get_colored_name(),
            '의 전폭적인 제안에 호쾌하게 동의한 뒤, 그날 밤 그녀의 방에서 수제 무말랭이를 배가 터지도록 맛보았다.',
          ]);
        }
        break;
      case 1:
        await era.printAndWait([
          '쉬는 날을 맞아 ',
          acute.get_colored_name(),
          '와 함께 역 앞 거리에서 데이트를 즐기기로 약속했다——',
        ]);
        await acute.say_and_wait('으음…… 요즘 들어 부쩍 허리가 찌릿찌릿 쑤시는 기분이구먼~');
        await era.printAndWait([
          '아무런 전조도 없이, ',
          acute.get_colored_name(),
          '가 대뜸 나직한 목소리로 중얼거렸다.',
        ]);
        if (Math.random() > 0.5 && era.get('love:100') >= 75) {
          await acute.say_and_wait([
            callname,
            ', 오늘 밤에…… 내 몸 좀 기분 좋게 풀어줄 수 있겠니?',
          ]);
          await era.printAndWait([
            '말이 끝나기가 무섭게, ',
            acute.get_colored_name(),
            '는 길거리 한복판임에도 아랑곳하지 않고 ',
            me.get_colored_name(),
            '의 허리를 대담하게 툭툭 치며, 얼굴 가득 묘한 의미심장한 미소를 띠었다.',
          ]);
          await era.printAndWait('………………');
          if (era.get('item:투혼주입채찍（S용）')) {
            await acute.say_and_wait([
              '저기, ',
              callname,
              ', 오늘 밤엔…… 드디어 【그 도구】를 써 주는 거니?',
            ]);
            await era.printAndWait([
              '붉은 입술 사이로 투명한 타액이 가늘게 흘러내리고, 평소엔 부끄러움 타던 ',
              acute.get_teen_sex_title(),
              '의 껍질 속에 숨어있던 굶주린 맹수가 드디어 날카로운 이빨을 드러냈다.',
            ]);
            await era.printAndWait([
              '서로 신호를 주고받은 뒤, ',
              acute.get_colored_name(),
              '를 데리고 인적이 완전히 끊긴 역전의 어두운 외딴 구석으로 은밀하게 발걸음을 옮겼다……',
            ]);
            await era.printAndWait('품 안에서 사나운 맹수를 조련하기 위한 투혼 주입 채찍을 꺼내 들었다——');
            await acute.say_and_wait('…………');
            await acute.say_and_wait('!');
            await acute.say_and_wait('————');
            await acute.say_and_wait('아아윽❤️~');
            era.println();
            begin_and_init_ero(0, 100);
            await quick_make_love(
              new EroParticipant(0, part_enum.hit),
              new EroParticipant(100, part_enum.anal, 0.5),
              false,
            );
            end_ero_and_train();
            get_attr_and_print_in_event(
              100,
              [0, 0, 0, 10, 0],
              0,
              JSON.parse('{"체력":-100,"기력":100}'),
              true,
            );
            sys_change_motivation(100, 1);
            add_jewel_reward(100, '피학쾌감', 100);
            era.println();
            get_attr_and_print_in_event(0, [0, 0, 10], 0, undefined, true);
            add_jewel_reward(0, '가학쾌감', 100);
            await era.waitAnyKey();
          } else {
            await era.printAndWait('그녀의 말이 채 끝나기도 전에, 거친 기세로 끌어안겨 덮쳐졌다.');
            await era.printAndWait([
              '끓어오르는 욕망을 품은 ',
              acute.get_teen_sex_title(),
              '라는 이름의 사나운 맹수에게 사지가 꽉 붙잡힌 이상, 인간의 힘으로는 절대로 탈출할 방도가 없다.',
            ]);
            await era.printAndWait(
              '자고로 사나운 「맹수」를 길들이는 조련의 역사에서, 먹이를 주는 행위는 언제나 목숨을 걸어야 하는 극도로 위험한 작업이다.',
            );
            await era.printAndWait(
              '포식자의 입맛을 완벽하게 만족시키지 못하는 순간, 먹이를 주던 조련사 자체가 맹수의 신선한 사냥감으로 전락해 버리기 때문인데——',
            );
            await acute.say_and_wait('하아❤️——————');
            await era.printAndWait('흐릿하게 풀려버린 그녀의 깊은 눈동자 너머로, 진득한 핑크빛 도화색 광채가 선명하게 뿜어져 나오기 시작했다.');
            await era.printAndWait([
              '이것은 오직 ',
              acute.get_colored_actual_name(),
              '라는 이름의 암사자가 뿜어내는 노골적인 「식사 개시」의 신호탄이다.',
            ]);
            await era.printAndWait('………………');
            await era.printAndWait('아무래도 오늘 밤은, 뼈 한 조각조차 남기지 못하고 잡아먹히는 무시무시한 사투가 벌어질 것이 자명해 보인다.');
            era.println();
            get_attr_and_print_in_event(100, [0, 0, 10], 0, undefined, true);
            add_jewel_reward(100, '가학쾌감', 100);
            era.println();
            get_attr_and_print_in_event(
              0,
              [0, 10],
              0,
              JSON.parse('{"체력":-100}'),
            );
            await era.waitAnyKey();
          }
        } else {
          await era.printAndWait([
            '가볍게 허리 마사지라도 해줄까 제안해 보았지만, ',
            acute.get_colored_name(),
            '에게 가볍게 거절당했다……',
          ]);
          await acute.say_and_wait(
            '으음…… 그런 간지러운 안마 같은 것보다는, 좀 더 살들이 붙는 자극적인 치료법을 원한단다~',
          );
          await era.printAndWait([
            acute.get_colored_name(),
            '는 평소처럼 느긋하게 웃으며 말하곤 있지만, 그녀의 눈길은 슬그머니 역 뒷골목 구석에 위치한 성인용 SM 기구 전문 매장을 향해 있는 것 같다.',
          ]);
          await era.printAndWait('………………');
          await era.printAndWait('……착각이겠지?');
        }
        break;
      case 2:
        await era.printAndWait([
          acute.get_colored_name(),
          '와 함께 역 앞 대형 마트와 상점가를 둘러보았다……',
        ]);
        await acute.say_and_wait('무말랭이~ 무말랭이~♪');
        await era.printAndWait([
          '경쾌한 콧노래를 흥얼거리며, ',
          acute.get_colored_name(),
          '는 마트의 타임 세일 구역을 번개 같은 기세로 누볐다. 상상을 초월하는 신들린 손놀림으로, 마감 할인 스티커가 붙는 족족 식재료들을 쇼핑카트에 쓸어 담기 시작했다.',
        ]);
        await era.printAndWait(
          '내가 내심 감탄을 하기도 전에, 쇼핑카트는 눈 깜짝할 사이에 바닥이 보이지 않을 만큼 가득 차 버렸다.',
        );
        era.drawLine();
        switch (get_random_value(0, 1 + (era.get('love:100') >= 75))) {
          case 0:
            await era.printAndWait('쇼핑카트 안에 마감 할인 도장이 찍힌 식재료가 산더미처럼 쌓여 있다.');
            await era.printAndWait(
              '대충 아무거나 하나 집어 들자, 겉면에 선명하게 「-60% 세일」이라는 초록색 딱지가 붙어 있다.',
            );
            await acute.say_and_wait([
              '아하하, 세상에 무려 99%나 할인하는 당근이 있잖니~ 아무래도 오늘 저녁은 ',
              callname,
              '이 제대로 호강하겠는걸~',
            ]);
            await era.printAndWait(
              '그녀는 말을 마치자마자 또 다른 초록색 할인 딱지가 붙은 고기 팩을 카트 안으로 쑤셔 넣었다……',
            );
            break;
          case 1:
            await era.printAndWait('쇼핑카트 안에 정체불명의 헬스 트레이닝 보조 식품들이 가득 쌓여 있다.');
            await era.printAndWait(
              '슬그머니 통 하나를 집어 들자, 표지에 거창하게 「하루 두 번 체지방 폭파! 한 달 만에 강철 8팩 복근 완성!」 같은 과장 광고 문구가 떡하니 박혀 있다.',
            );
            await era.printAndWait([
              '……머릿속으로 우락부락한 8팩 초콜릿 복근을 장착한 고릴라 같은 ',
              acute.get_colored_name(),
              '의 모습이 스치듯 연상되어 식은땀이 흘렀다.',
            ]);
            await acute.say_and_wait([
              '으음…… 역시 우리 ',
              callname,
              '은, 근육량을 지금보다 훨씬 더 펌핑해서 체급을 키워야 한단다~',
            ]);
            await era.printAndWait([
              '——알고 보니 ',
              me.get_colored_name(),
              '에게 먹이려고 산 거였던 것 같다.',
            ]);
            await era.printAndWait(
              '방금 전 뇌내를 스친 끔찍한 비주얼의 상상화를 황급히 머릿속에서 지워버리며, 안도의 한숨을 내쉬었다.',
            );
            await era.printAndWait('………………');
            await era.printAndWait([
              '계산대 앞에 도착하자마자, ',
              acute.get_colored_name(),
              '보다 한발 앞서 주머니에서 지갑을 가로챘다.',
            ]);
            await era.printAndWait([
              '카트에 든 물건의 태반이 당신을 위한 보양식인 마당에, 양심상 ',
              acute.get_colored_name(),
              '에게 전부 독박 계산을 시킬 수는 없기 때문이다.',
            ]);
            await era.printAndWait(
              '가족이 선물해 준 낡은 검은색 가죽 지갑을 꺼내 들며, 예전에 뾰족한 곳에 긁혀 흉하게 뚫려버린 구멍을 왼손가락으로 필사적으로 가렸다. 영수증 화면에 찍히는 무시무시한 액수를 긴장된 눈으로 바라보며, 지갑 속에 얼마 남지 않은 배춧잎의 장수를 초조하게 확인하는데——',
            );
            await acute.say_and_wait(['복근을 장착한 우리 ', callname, '…… 헤헤, 헤헤헤~❤️']);
            await era.printAndWait('………………');
            await era.printAndWait('방금 엄청나게 불길하고 믿기 힘든 야릇한 혼잣말이 들린 것 같다.');
            await era.printAndWait([
              '고개를 홱 돌려 돌아보자—— ',
              acute.get_colored_name(),
              '는 여전히 평소처럼 자애롭고 천사 같은 미소로 당신을 응시하고 있었다. 평소와 다름없는 인자한 얼굴이지만, 어째서인지 입꼬리 부근에 투명한 침 자국이 가늘게 번져 있는 것처럼 보인다.',
            ]);
            await era.printAndWait('………………');
            await era.printAndWait('……착각이겠지?');
            break;
          case 2:
            await era.printAndWait('부추, 돼지간, 달걀……');
            await era.printAndWait('돼지간, 달걀, 부추……');
            await era.printAndWait('달걀, 부추, 돼지간……');
            await era.printAndWait('마감 세일 부추, 신선한 돼지 생간, 노른자가 탱글한 날달걀 팩……');
            await era.printAndWait('……라인업의 상태가? 왜 죄다 정력 강화에 직빵인 식품들뿐이지?');
            await era.printAndWait([
              '소름이 쫙 돋아 한 치의 망설임도 없이 경악 어린 눈으로 ',
              acute.get_colored_name(),
              '를 돌아보았다. 시선이 마주치자, 그곳에서 당신을 기다리는 것은 ',
              acute.get_colored_name(),
              '의 검붉은 욕망이 가득 차오른 깊고 짙은 음란한 미소뿐이었다——',
            ]);
            await era.printAndWait('…………');
            await era.printAndWait('아무래도 오늘 밤은 허리가 끊어질 각오를 해야 하는 기나긴 심야가 될 것 같다——');
        }
    }
  }

  async slave_end() {
    const name = '돈의 노예';
    await kojo[name](this.#dict);
    await print_event_name(
      [{ color: buff_colors[3], content: name }],
      get_chara_talk(this.id),
    );
  }

  async basement_end() {
    const name = '사랑의 감옥';
    await kojo[name](this.#dict);
    await print_event_name(
      [{ color: buff_colors[3], content: name }],
      get_chara_talk(this.id),
    );
  }
};