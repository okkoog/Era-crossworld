/**
 * @file 원더 어큐트 - 育成
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const kojo = require('#/event/edu/edu-100.kojo');
const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { get_trainer_title } = require('#/data/info-generator');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} */
const w_s_handlers = {};

[
  require('#/event/edu/edu-events-100/week-start-1'),
  require('#/event/edu/edu-events-100/week-start-2'),
  require('#/event/edu/edu-events-100/week-start-3'),
  require('#/event/edu/edu-events-100/week-start-4'),
  require('#/event/edu/edu-events-100/week-start-5'),
].forEach((f) => f(w_s_handlers));

module.exports = class extends CustomizedEdu {
  get #dict() {
    const ret = {};
    ret['대표색'] = get_chara_talk(this.id).color;
    ret['당신'] = get_chara_talk(0).name;
    ret['호칭'] = sys_get_callname(this.id, 0);
    return ret;
  }

  async race_end(acute, me, callname, hook, extra_flag) {
    if (
      extra_flag.race !== race_enum.begin_race ||
      era.get('cflag:100:육성턴수합산') >= 48
    ) {
      return await super.race_end(acute, me, callname, hook, extra_flag);
    }
    if (extra_flag.rank === 1) {
      await era.printAndWait('하늘의 검은 새가 경기장 위를 맴돌고,');
      await era.printAndWait('그들은 이야기하고, 전하고, 서술하고, 표현하며,');
      await era.printAndWait('늠름한 자태를 전하며, 개선의 화답을 얻었다——');
      await era.printAndWait('소규모의 경기장, 백 명도 채 되지 않는 관객,');
      await era.printAndWait('환호성은 그리 크지 않을지도 모른다.');
      await era.printAndWait(
        '하지만 고양되고 늠름한 자태는, 한 사람의 마음속에 영원히 잊지 못할 각인을 남기기에 충분했다.',
      );
      await era.printAndWait([
        '경기장 위, ',
        acute.get_colored_name(),
        '는 당당히 그 중심에 서 있다.',
      ]);
      await era.printAndWait('그 늠름한 자태 위에는, 여느 때와 다름없는 온화한 미소가 어려 있었다.');
      await era.printAndWait([
        '금빛 정경 아래, ',
        acute.sex,
        '는 자신의 주먹을 높이 치켜들었다.',
      ]);
      await era.printAndWait('——그것은 얼마나 눈부신 광채인가.');
      await era.printAndWait([
        '신성함을 직시한 순간, ',
        me.get_colored_name(),
        '은(는) 황홀경 속에서 넋을 잃었다.',
      ]);
      await era.printAndWait([
        '정신이 아득한 사이, ',
        acute.sex,
        '는 이미 승리 세레머니를 마치고,',
      ]);
      await era.printAndWait([
        '가벼운 발걸음으로 이쪽으로 걸어왔다——',
      ]);
      era.printButton('「——」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 입을 열어, ',
        acute.sex,
        '의 승리를 축하하려 했다.',
      ]);
      era.printButton('「……아, 어——」', 1);
      await era.input();
      await era.printAndWait('막상 입을 열었지만, 자신도 모르게 말문이 막히고 말았다.');
      await era.printAndWait([
        '그리고 ',
        me.get_colored_name(),
        '이(가) 자신이 이토록 실태를 보인 것에 자책하는 동시에,',
      ]);
      await era.printAndWait(['오히려 ', acute.sex, ' 쪽에서 먼저 입을 열었다.']);
      await acute.say_and_wait(['음후후…… 정말 수고 많았단다, ', callname]);
      await era.printAndWait([acute.sex, '가 꺼낸 첫마디는,']);
      await era.printAndWait(['실패한 ', me.get_colored_name(), '에게 감사를 전하는 것이었다.']);
      era.printButton('「————」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그 자리에 망연자실하게 서 있었다. 주변이 순식간에 고요해진 가운데, 오직 ',
        me.get_colored_name(),
        '의 마음에 감정의 뜨거운 파도가 치밀어 오를 뿐이었다.',
      ]);
      await era.printAndWait('손가락이 멈추지 않고 떨려왔다——');
      await acute.say_and_wait(['……', callname, '? 무슨 일이니? 갑자기 어디 아픈 게야?']);
      era.printButton('「아니, 아무것도 아니야—— 난 괜찮아.」', 1);
      await era.input();
      await era.printAndWait([
        '마음속에서 샘솟는 감정을 억누르고, 손끝과 눈시울에서 배어 나오는 물기를 애써 참으며, ',
        me.get_colored_name(),
        '은(는) 자신의 초라한 모습을 간신히 추슬렀다.',
      ]);
      era.printButton(`「정말 아무 일도 없어—— 안심해, ${acute.name}.」`, 1);
      await era.input();
      await era.printAndWait([
        '이것이 그날, ',
        me.get_colored_name(),
        '이(가) ',
        acute.get_colored_name(),
        '에게 건넨 마지막 한마디였다.',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait([era.get('flag:현재연도'), '년.']);
      await era.printAndWait([
        '이것은 한 번 실패했던 트레이너가, 담당 ',
        acute.get_uma_sex_title(),
        '에게 거두어진 첫해의 이야기다.',
      ]);
      await era.printAndWait(
        '그리고 이 해의 6월, 평범한 데뷔전이 끝난 후, 한 번 실패했던 트레이너는 한 가지 결심을 내렸다.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신의 담당 ',
        acute.get_uma_sex_title(),
        '를 ',
      ]);
      await era.printAndWait('진정한 전당으로 인도하겠노라고——');
    } else {
      await era.printAndWait('바둑계에는 「한 수 부족」이라는 말이 있다.');
      await era.printAndWait('이 격언의 다음 구절은 바로 「한 수만 삐끗해도 온 판을 그르친다」이다.');
      await era.printAndWait('지금 일어난 상황을 형용하기에는, 이보다 더 적절한 표현이 없을지도 모른다.');
      await era.printAndWait(
        '늠름한 신체가 아무리 풍요롭고 아름다울지언정, 한 끝 차이로 밀렸다는 것은 거스를 수 없는 사실이었다.',
      );
      await era.printAndWait(
        '전광판이 증명하는 엄연한 사실 앞에서, 패배에 대한 그 어떤 변명도 구차한 발뺌처럼 느껴질 뿐이었다.',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        '는 천천히 경기장을 빠져나갔고, 지금 이 순간의 박수와 환호는 ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '의 것이 아니었다.',
      ]);
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait([
        acute.get_colored_name(),
        '의 약간 낙담한 듯한 뒷모습을 보며, ',
        me.get_colored_name(),
        '은(는) 무슨 말이라도 건네고 싶었지만——',
      ]);
      await acute.say_and_wait(['괜찮단다, ', callname]);
      await era.printAndWait('……');
      await era.printAndWait('아직 입을 열지도 전에, 오히려 상대방에게 위로를 받고 말았다.');
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 이 순간 정말 무엇을 해야 할지 알 수 없었다.',
      ]);
      await era.printAndWait('그저 머리끝부터 발끝까지 얼어붙는 듯한 차가움만이 느껴질 뿐이었다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 제자리에 멍하니 선 채, 어찌할 바를 모르고 조용히 ',
        acute.get_colored_name(),
        '가 멀어지는 것을 바라보았다.',
      ]);
      await era.printAndWait('…………………');
      await era.printAndWait('……………');
      await era.printAndWait('………');
      await era.printAndWait('과정만으로는 훈련의 기쁨이 되지 못하며,');
      await era.printAndWait('세상은 오직 승패가 갈리는 그 한순간만을 믿는다——');
    }
  }

  async race_start(acute, me, callname, hook, extra_flag) {
    if (
      extra_flag.race !== race_enum.begin_race ||
      era.get('cflag:100:육성턴수합산') >= 48
    ) {
      return await super.race_start(acute, me, callname, hook, extra_flag);
    }
    await print_event_name('불안', acute);
    await era.printAndWait(['6월, ', acute.get_colored_name(), '의 데뷔전.']);
    await era.printAndWait([
      '경기장은 삿포로 근처의 작은 회장으로, 참가 측인 ',
      me.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '는 하루 일찍 경기장에 도착했다.',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('불안.');
    await era.printAndWait('극심한 불안.');
    await era.printAndWait(
      '비유하자면 달에 착륙했던 아폴로 17호의 지구 귀환 캡슐 안에서 바닥에 뜬금없이 나사 하나가 떨어져 있는 것을 발견했을 때만큼의 불안감이었다.',
    );
    await era.printAndWait(
      '밤에는 좀처럼 잠들지 못했고, 그저 침대에 기대어 있는 것만으로도 가끔씩 자신의 조급하고 불안한 심장 고동 소리가 들려왔다.',
    );
    await era.printAndWait('……솔직히 말해서, 정말 성공할 수 있을까?');
    await era.printAndWait([
      '내가 담당하는 ',
      acute.get_colored_name(),
      '가, 과연 이 레이스에서 승리할 수 있을까?',
    ]);
    await era.printAndWait('꼭 쥔 손바닥에서 자신도 모르게 식은땀이 흘러내렸다……');
    await acute.say_and_wait('……');
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '몸을 돌리자, ',
      acute.get_colored_name(),
      '가 바로 뒤에 서 있었다.',
    ]);
    await era.printAndWait(
      '무의식적으로 땀으로 흥건한 두 손을 등 뒤로 숨기는 모습은, 마치 나쁜 짓을 들킨 어린아이 같았다.',
    );
    await acute.say_and_wait(['괜찮단다, ', callname, '.']);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait('그것은 마치 태양처럼 따스한 미소였다,');
    await era.printAndWait(
      '하지만 그 모습을 본 당신은, 어째서인지 알 수 없는 죄책감이 피어올랐다.',
    );
    await acute.say_and_wait(['너는 이미 충분히 노력했단다, ', callname, '.']);
    await acute.say_and_wait('남은 것은 내게 맡기렴.');
    await era.printAndWait([
      me.get_colored_name(),
      '의 어깨를 톡톡 두드려 주고는, ',
      acute.get_colored_name(),
      '는 뒤돌아보지 않고 늠름한 뒷모습을 보이며 게이트 출구를 향해 걸어 나갔다——',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait('얼마나 듬직하고 늠름한 뒷모습인가.');
    await era.printAndWait('그 거대한 뒷모습을 멀리서 바라보며, 마음속에는 자괴감과 부끄러움이 교차했다——');
  }

  async train_success(acute, me, callname, hook, extra) {
    if (extra.train === attr_enum.intelligence) {
      return await super.train_success(acute, me, callname, hook, extra);
    }
    era.print([acute.get_colored_name(), '의 훈련이 순조롭게 끝났습니다!']);
    era.println();
    if (
      !era.get('status:100:땡땡이') &&
      Math.random() < extra.stamina_ratio * 0.2
    ) {
      await era.waitAnyKey();
      await print_event_name('열혈의 추가 트레이닝', acute);
      await acute.say_and_wait('후후후…… 겨우 이 정도라면——');
      await era.printAndWait([
        '훈련이 막 끝났음에도 체육복 차림의 ',
        acute.get_colored_name(),
        '는 여전히 아쉽다는 듯한 표정이었다.',
      ]);
      await acute.say_and_wait('겨우 이 정도로는 아직 『만족』하긴 멀었단다……');
      await acute.say_and_wait(['저기, ', callname]);
      await era.printAndWait([
        '옷자락을 잡아당기며, 숨을 쉴 때마다 후끈한 열기를 풍기는 ',
        acute.get_colored_name(),
        '. 그녀는 초롱초롱한 눈빛을 빛내며——',
      ]);
      await acute.say_and_wait('더 할 수 있을까? 나 말이야, 아직 더 달릴 수 있단다——');
      era.print('…………어째서인지, 왠지 모르게 의미심장하게 느껴지는 말이었다.');
      era.printButton('허락한다', 1);
      era.printButton('거절한다', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '고개를 끄덕여 ',
          acute.get_colored_name(),
          '의 요청을 승낙했다.',
        ]);
        await era.printAndWait('그야 트레이너로서 어떻게 안 된다고 뺄 수가 있겠는가?');
        await era.printAndWait([
          '석양 아래, ',
          me.get_colored_name(),
          '과(와) 원더 어큐트의 모습이 운동장 위를 계속해서 내달렸다——',
        ]);
        hook.arg = true;
      } else {
        await era.printAndWait([
          '……왠지 ',
          acute.get_colored_name(),
          '가 승낙을 유도하려고 일부러 도발한 것 같은 기분이 들었다.',
        ]);
        await era.printAndWait([
          acute.get_colored_name(),
          '의 제안을 단호하게 거절한 뒤, ',
          acute.get_colored_name(),
          '에게 어서 씻고 쉬라고 일렀다.',
        ]);
        hook.arg = false;
      }
    }
    if (era.get('item:투혼주입채찍（S용）') > 0) {
      extra.attr = 2;
      extra.stamina = -2 - (2 - era.get('cflag:100:컨디션')) * 2;
    }
  }

  async week_start(acute, me, callname, hook, extra_flag, event_object) {
    if (w_s_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await w_s_handlers[event_object.arg].call(
        this,
        acute,
        me,
        callname,
        flags,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async crazy_fan_end() {
    const name = '팬의 습격';
    const dict = this.#dict;
    dict['头衔'] = get_trainer_title();
    await kojo[name](dict);
    await print_event_name(
      [{ color: buff_colors[3], content: name }],
      get_chara_talk(this.id),
    );
  }
};