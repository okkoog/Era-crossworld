/**
 * @file 맨하탄 카페 - 育成
 * @author Necroz
 */
const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');

function check_tachyon_plan_b() {
  return (
    era.get('cflag:32:육성턴수합산') < 3 * 48 && new TachyonEduMarks().plan_b
  );
}

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} */
const week_start_handlers = {};

[
  require('#/event/edu/edu-events-25/week-start-1'),
  require('#/event/edu/edu-events-25/week-start-2'),
].forEach((f) => f(week_start_handlers, check_tachyon_plan_b));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-25/week-end')(
  week_end_handlers,
  check_tachyon_plan_b,
);

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise<boolean|void>>} */
const race_start_handlers = {};

require('#/event/edu/edu-events-25/race-start')(
  race_start_handlers,
  check_tachyon_plan_b,
);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-25/race-end-1'),
  require('#/event/edu/edu-events-25/race-end-2'),
].forEach((f) => f(race_end_handlers, check_tachyon_plan_b));

module.exports = class extends CustomizedEdu {
  async back_school(coffee, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 25) {
      add_event(hook.hook, event_object);
      return;
    }
    const edu_marks = new CoffeeEduMarks();
    edu_marks.our_taste = 1;
    await print_event_name('우리들만의 맛', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      '와 함께 돌아가던 중에——',
    ]);
    await coffee.say_and_wait(['……', callname, '.']);
    await coffee.say_and_wait('당신만 괜찮다면, 이따가…… 커피 한 잔 하지 않으실래요……');
    await coffee.say_and_wait(['조금…… ', callname, '에게 맛보여 드리고 싶은 원두가 있어서요……']);
    era.printButton('「물론이지.」', 1);
    await era.input();
    await coffee.say_and_wait('……고마워요.');
    await coffee.say_and_wait('그럼, 저를 집중해서 보고…… 따라오세요……');
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 데리고 ',
      coffee.sex,
      '가 학원 안에 마련한 개인적인 공간으로 향했다.',
    ]);
    await coffee.say_and_wait('아까 말씀드린 원두가, 바로 이거예요……');
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 그렇게 말하며 테이블 위 유리병에 담긴, 아직 갈지 않은 원두를 가리켰다.',
    ]);
    await coffee.say_and_wait(
      '이건…… 제 커피나무에서 수확한 원두예요…… 제가 직접 로스팅도 했고요……',
    );
    era.printButton('「커피나무……」', 1);
    await era.input();
    await coffee.say_and_wait(
      '커피나무 한 그루가…… 열매를 맺을 수 있을 정도로 자라려면…… 아무리 빨라도…… 3년은 걸려요.',
    );
    await coffee.say_and_wait('게다가 수확 횟수도…… 1년에 딱 한 번뿐이죠……');
    await era.printAndWait([
      '즉, 이것은 ',
      coffee.get_colored_name(),
      '가 직접 재배한 커피나무에서 수확하여, ',
      coffee.sex,
      '가 정성껏 볶아낸 원두라는 뜻이다……',
    ]);
    await era.printAndWait('이 얼마나 소중한 물건인가……');
    era.printButton('「……이렇게 귀한 걸, 정말 내가 마셔도 되는 거야?」', 1);
    await era.input();
    await coffee.say_and_wait([
      '……귀한 것이기에, ',
      callname,
      '에게 대접하고 싶은 거예요……',
    ]);
    await coffee.say_and_wait('그러니………… 저와 함께, 마셔 주시겠어요?');
    era.printButton('「기꺼이!」', 1);
    await era.input();
    await coffee.say_and_wait('그럼 지금 내릴게요…… 잠시만 기다려 주세요.');
    await era.printAndWait([
      '정적만이 흐르는 공간 속에, ',
      coffee.get_colored_name(),
      '가 커피를 내리는 소리만이 울려 퍼졌다……',
    ]);
    await coffee.say_and_wait('…………오래 기다리셨어요. 드셔 보세요.');
    await era.printAndWait([
      coffee.sex,
      '가 내린 커피를 입에 머금었다. 찰나의 순간, 커피의 풍미와 온도가 마치 육체와 영혼 속으로 스며드는 것 같았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '는 그렇게 마주 앉아, 함께 조용히 커피를 즐겼다.',
    ]);
    await era.printAndWait([
      '커피 한 잔을 다 비우고, ',
      me.get_colored_name(),
      '이(가) 여운에 잠겨 있을 때, ',
      coffee.get_colored_name(),
      '가 살며시 ',
      me.get_colored_name(),
      '의 손을 만졌다.',
    ]);
    await coffee.say_and_wait('…………맛은, 어떤가요?');
    era.printButton('「……이렇게 맛있는 커피는 처음이야.」', 1);
    era.printButton('「멋진 시간을 선물해 줘서 고마워.」', 2);
    era.printButton('「기회가 된다면 나도 너를 위해 커피를 내리고 싶어.」', 3);
    await era.input();
    await coffee.say_and_wait('……너무 과찬이세요.');
    await coffee.say_and_wait('하지만…… 저도, 같은 마음이에요.');
    await era.printAndWait([
      me.get_colored_name(),
      '의 찬사에, ',
      coffee.get_colored_name(),
      '의 하얀 얼굴이 수줍게 붉어졌다.',
    ]);
    await era.printAndWait([
      '이것은 결코 ',
      me.get_colored_name(),
      '의 빈말이 아니었다. 이 커피 한 잔에 쏟아부은 정성과 시간은 그 어떤 말보다 값졌다. 아마 ',
      me.get_colored_name(),
      '은(는) 평생 이곳에서 ',
      coffee.sex,
      '와 함께 맛본 이 맛을 잊지 못할 것이다……',
    ]);
    await coffee.say_and_wait('……제가 오히려 감사해야죠.');
    await coffee.say_and_wait('……제 트레이너가 되어 주셔서…… 정말 고마워요……');
    await coffee.say_and_wait('내년 수확철이 오면…… 우리 그때도 오늘처럼……');
    await coffee.say_and_wait('같이 커피 마셔요, 알았죠?');
    era.printButton('「내년은 물론이고 내후년에도, 쭉 함께 마시자.」', 1);
    await era.input();
    await coffee.say_and_wait('——!');
    await coffee.say_and_wait('……네.');
    await coffee.say_and_wait('내년…… 내후년…… 계속 함께……');
    await era.printAndWait([
      '내년에 ',
      coffee.sex,
      '와 함께 마실 커피는 어떤 맛일까? ',
      me.get_colored_name(),
      '은(는) 머지않아 다가올 ',
      coffee.get_colored_name(),
      '와의 미래를 상상하며 가슴이 벅차올랐다.',
    ]);
    await coffee.say_and_wait('……그렇다면……');
    await coffee.say_and_wait('한번 해 보실래요……? ……커피나무를 같이 심는 거요.');
    await coffee.say_and_wait('처음부터 다시 심으려면…… 수확까지 최소 3년은 기다려야 하겠지만요.');
    era.printButton('「그날을 위해서라면 얼마든지 노력할게.」', 1);
    await era.input();
    await coffee.say_and_wait('……후훗, 저도 모르게 꽤 먼 미래의 약속을 해버렸네요.');
    await coffee.say_and_wait('하지만…… 저도 기대하고 있을게요.');
    await era.printAndWait([
      '그때 가서 ',
      coffee.sex,
      '와 함께 완성할 커피는 분명 지금 마시는 것보다 훨씬 더 맛있을 것이다.',
    ]);
    await era.printAndWait([
      '그렇게 ',
      me.get_couple_title(),
      '은(는) 밤보다 더 깊고 향긋한 미래를 향한 기대감에 휩싸였다.',
    ]);
    era.println();
    let wait_flag = get_attr_and_print_in_event(
      25,
      new Array(5).fill(10),
      0,
      undefined,
      true,
    );
    wait_flag = sys_like_chara(25, 0, 25, true, 5) || wait_flag;
    wait_flag && (await era.waitAnyKey());
  }

  async crazy_fan_end() {
    const coffee = get_chara_talk(25),
      me = get_chara_talk(0);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 발톱 염증은 끝내 완치되지 않았고, 트레이닝 중 일어난 사고 이후 학원 측은 ',
      coffee.get_colored_name(),
      '의 건강을 이유로 은퇴를 결정했다…… 하지만 어떤 이들은 그렇게 생각하지 않았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '에게 선물할 커피 원두를 들고 빗속을 홀로 걷고 있었다. 그때 등 뒤에서 급박한 발걸음 소리가 들려왔고, 곧이어 허리 쪽에 타는 듯한 통증이 느껴졌다.',
      me.get_colored_name(),
      '은(는) 바닥에 쓰러졌고, 뒤따라온 괴한은 ',
      me.get_colored_name(),
      '이(가) 움직이지 않을 때까지 계속해서 등을 찔러댔다.',
    ]);
    await era.printAndWait([
      '종이봉투 안의 커피 원두가 바닥에 흩어졌고, ',
      me.get_colored_name(),
      '은(는) 이 상황에 어울리지 않는 향긋한 커피 향을 맡았다……',
    ]);
    await era.printAndWait([
      '죽고 나면, 다시 ',
      coffee.get_colored_name(),
      '를 만날 수 있을까? ',
      coffee.sex,
      '라면, 어쩌면……',
    ]);
    await era.printAndWait([me.get_colored_name(), '의 의식은 어둠 속으로 가라앉았다.']);
    await print_event_name(
      [{ content: '비와 커피', color: buff_colors[3] }],
      coffee,
    );
  }

  async out_church(coffee, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 25) {
      add_event(event_hooks.out_start, event_object);
      return;
    }
    if (event_object.arg !== 95 + 1) {
      return;
    }
    era.set('cflag:25:축제이벤트표시', 0);
    await print_event_name('새해의 포부', coffee);

    await era.printAndWait('시니어 시즌, 연초.');
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 올해 성공하기를 기원하며, ',
      me.get_couple_title(),
      '은(는) 신사로 새해 참배를 왔다.',
    ]);
    if (check_tachyon_plan_b()) {
      const tachyon = get_chara_talk(32);
      await coffee.say_and_wait([
        '저기…… ',
        sys_get_colored_callname(25, 32),
        '는 요즘 어떤가요……? ',
        coffee.sex,
        '가 지난번에 다시 레이스에 복귀하겠다고 말했었는데……',
      ]);
      await era.printAndWait([
        race_infos[race_enum.kiku_sho].get_colored_name(),
        '이후, ',
        tachyon.get_colored_name(),
        '은 트레이닝을 재개했다. ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '이 끝난 뒤, ',
        coffee.sex,
        '는 공식적으로 레이스 복귀 계획을 발표했고, ',
        coffee.sex,
        '가 참가할 첫 번째 레이스는 다름 아닌 ',
        coffee.get_colored_name(),
        '가 출주할 예정인 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '이었다.',
      ]);
      era.printButton(`「${tachyon.sex}…… 요즘 좀 바쁜 것 같더라.」`, 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 고개를 끄덕이더니, 더 이상 ',
        tachyon.get_colored_name(),
        '에 관한 이야기는 꺼내지 않았다.',
      ]);
    }
    await coffee.say_and_wait('오늘은 우리…… 둘뿐이네요…… 친구는 왠지 보이지 않아요……');
    await era.printAndWait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '이후로 ',
      coffee.get_colored_name(),
      '의 모습이 조금 이상해졌다…… 하지만 늘 그런 것은 아니었다.',
    ]);
    await era.printAndWait(['평소의 ', coffee.sex, '는 매우 정숙하지만——']);
    await era.printAndWait(
      '스태프 「현장에 계신 여러분, 새해 기도를 합시다! 어떤 소원이든 신님께서 반드시 들어주실 거예요!」',
    );
    await coffee.say_and_wait('……………………');
    await coffee.say_and_wait('거짓말이에요.');
    await coffee.say_and_wait(
      '소원 같은 건 이루어지지 않아요. 이곳에는 신 같은 건 존재하지 않으니까요.',
    );
    await era.printAndWait([
      '——하지만…… 가끔 이렇게 변하곤 한다. 도대체 무엇이 스위치가 되어 ',
      coffee.sex,
      '를 변화시킨 걸까?',
    ]);
    await coffee.say_and_wait([
      callname,
      ', 이쪽으로 오세요…… 모든 소원이 이루어지는 마을로 가요……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '잠시 후, ',
      coffee.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 데리고 새해 분위기라고는 전혀 느껴지지 않는 기괴한 마을로 향했다……',
    ]);
    await coffee.say_and_wait('여기야말로…… 진정으로 소원을 이룰 수 있는 곳이에요……');
    await coffee.say_and_wait([
      '친구를 쫓아가기 위해서…… ',
      callname,
      '은 저를 위해 어떤 소원을 빌어 주실 건가요?',
    ]);
    await coffee.say_and_wait('이 중에서…… 하나 골라 보세요.');
    await era.printAndWait('지면의 모래가 천천히 움직이더니, 발치에 글자가 떠올랐다.');
    await era.printAndWait([
      '이미 몇 차례 영적 현상을 겪었음에도 불구하고, ',
      me.get_colored_name(),
      '은(는) 몸서리쳐지는 공포를 느꼈다.',
    ]);
    await era.printAndWait(['그중에서 ', me.get_colored_name(), '이(가) 선택한 것은——']);
    era.printButton('「별빛의 치유」（체력 +500）', 1);
    era.printButton('「전신의 비늘」（전 능력치 +10）', 2);
    era.printButton('「망자의 예지」（스킬 포인트 +35）', 3);
    const ret = await era.input();
    let wait_flag = false;
    switch (ret) {
      case 1:
        await coffee.say_and_wait('치유…… 확실히…… 별은…… 언제나 하늘에서 우리를 지켜보고 있죠……');
        await coffee.say_and_wait('그 가없는 별빛이 온몸을 감싼다면……');
        await coffee.say_and_wait([
          '고마워요, ',
          callname,
          '. 한결 활력이 생기는 기분이에요……',
        ]);
        await coffee.say_and_wait(
          '이제 다시 트레이닝에 전념할 수 있을 것 같아요. 고개를 숙이지 않고…… 앞으로 나아갈게요……',
        );
        await era.printAndWait([
          '방금 그 마을은 환각이었을까……? 눈 깜짝할 새에 ',
          me.get_couple_title(),
          '은(는) 다시 평범한 거리로 돌아와 있었다.',
        ]);
        await era.printAndWait([
          '어찌 됐든, ',
          coffee.get_colored_name(),
          '의 얼굴에는 다시 생기가 돌기 시작했다.',
        ]);
        wait_flag = get_attr_and_print_in_event(
          25,
          undefined,
          0,
          JSON.parse('{"체력":500}'),
        );
        break;
      case 2:
        await coffee.say_and_wait(
          '전신의 비늘…… 마치 머리카락…… 망막…… 그리고 영혼까지…… 전부 비늘로 뒤덮이는 듯한……',
        );
        await coffee.say_and_wait('저라는 존재가 더욱 강해질 수 있다면. 아아……');
        await era.printAndWait('——첨벙.');
        await era.printAndWait(
          '귓가에 환청 같은 물소리가 들려왔다. 마치 끝을 알 수 없는 칠흑 같은 바다에 가라앉는 듯한 감각이었다.',
        );
        await era.printAndWait([
          '수압이 부드럽게 ',
          me.get_colored_name(),
          '의 온몸을 감싸 안았다. ',
          me.get_colored_name(),
          '은(는) 무언가 생명체가 자신의 곁에서 헤엄치고 있음을 느꼈다. 그 차갑고 섬세한 비늘이 물결을 타고 ',
          me.get_colored_name(),
          '의 귓가를 스쳐 지나갔고, 갈라진 혀가 조심스럽게 나와 ',
          me.get_colored_name(),
          '의 머리카락을 건드렸다……',
        ]);
        await era.printAndWait('…………');
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 황홀경에서 깨어났을 때, ',
          me.get_couple_title(),
          '은(는) 다시 평범한 거리로 돌아와 있었다.',
        ]);
        await era.printAndWait('방금 그건 꿈이었을까, 아니면 또 다른 영적 현상이었을까?');
        await era.printAndWait([
          '곁에 서 있는 생기 넘치는 ',
          coffee.get_colored_name(),
          '를 보니, 소원이 확실히 효과가 있었던 모양이다……',
        ]);
        wait_flag = get_attr_and_print_in_event(25, new Array(5).fill(10), 0);
        break;
      case 3:
        await coffee.say_and_wait('망자의 예지…… 선조들의 기억……');
        await coffee.say_and_wait('그것을 엿볼 수만 있다면…… 비록 극히 일부일지라도……');
        await era.printAndWait([
          '——낯선 기억들이 ',
          coffee.get_colored_name(),
          '의 머릿속으로 흘러 들어왔다.',
        ]);
        await era.printAndWait(
          '실존했는지조차 알 수 없는 풍경들과 고대의 지혜가 한꺼번에 몰아쳤지만, 이내 수면 위의 파문처럼 금방 사라져 버렸다. 결국 기억에 남은 것은 수박 겉핥기 정도에 불과했다.',
        );
        await era.printAndWait('하지만 그 정도만으로도……');
        await coffee.say_and_wait([
          callname,
          ', 세상에 존재하는 수많은 주법들을 이해할 수 있을 것 같아요. 좀 더……',
        ]);
        await coffee.say_and_wait('이 영감들을…… 다음 레이스에서 하나씩 시도해 보고 싶어요……');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 도대체 무슨 일이 일어난 건지 알 수 없었다. ',
          me.get_colored_name(),
          '의 눈에 보인 것은 그저 ',
          coffee.get_colored_name(),
          '가 눈을 감았다 뜬 찰나의 순간이었고, 어느덧 ',
          me.get_couple_title(),
          '은(는) 다시 평범한 거리로 돌아와 있었다.',
        ]);
        wait_flag = get_attr_and_print_in_event(25, undefined, 35);
    }
    if (sys_like_chara(25, 0, 25) || wait_flag) {
      await era.waitAnyKey();
    }
    return true;
  }

  async race_end(coffee, me, callname, hook, extra_flag) {
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        coffee,
        me,
        callname,
        extra_flag,
      ))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('레이스 승리!', coffee);
        await coffee.say_and_wait('……해냈어요…… 제가…… 1등이에요.');
        await coffee.say_and_wait(
          '드디어…… 그 뒷모습에 다가갔네요…… 후훗. 역시 전…… 이런 감각이 좋아요……',
        );
        era.printButton('축하해, 카페!', 1);
        await era.input();
        await coffee.say_and_wait([
          '고마워요, ',
          callname,
          '…… 저, 다음에도 노력할게요……',
        ]);
        await coffee.say_and_wait('이기기 위해 노력해서…… 다시 한번 이 기분을 만끽하고 싶어요……');
        era.printButton('하지만 방심해서는 안 돼.', 1);
        await era.input();
        await coffee.say_and_wait('……!');
        await coffee.say_and_wait(
          '……네, 맞아요. 경계를 늦추지 말고 조심해야겠죠……',
        );
        await coffee.say_and_wait('왜냐하면 저는—— 아니, 우리들은…… 아직 그 뒷모습을 뛰어넘지 못했으니까요……');
      } else if (extra_flag.rank <= 5) {
        await print_event_name('레이스 입상!!', coffee);
        await coffee.say_and_wait('……입착했네요……');
        era.printButton('정말 노력했구나, 카페.', 1);
        await era.input();
        await coffee.say_and_wait('……네, 제 실력은 확실히 발휘했다고 생각해요……');
        await coffee.say_and_wait('……하지만, 한참 부족해요……');
        await coffee.say_and_wait('우리들의 목표는…… 훨씬 더 먼 곳에 있으니까요……');
        era.printButton('앞으로 더 열심히 훈련하자.', 1);
        await era.input();
        await coffee.say_and_wait('……네, 이대로 멈춰 있을 수는 없죠……');
        await coffee.say_and_wait([
          '……',
          callname,
          '. 앞으로도…… 잘 부탁드려요……!',
        ]);
        era.println();
        await era.printAndWait('——콩.');
        await era.printAndWait([
          '가벼운 꿀밤 소리가 ',
          coffee.get_colored_name(),
          '의 이마에서 울려 퍼졌다.',
        ]);
        era.println();
        await coffee.say_and_wait('아파…… 잊어버린 게 아니라구……!');
        era.println();
        era.printButton('앞으로 다 같이 힘내자.', 1);
        await era.input();
      } else {
        await print_event_name('레이스 패배……', coffee);
        await coffee.say_and_wait('……졌네요…… 제 실력이 부족한 탓이에요……');
        await coffee.say_and_wait('여기서 무너지면…… 저는…… 그 뒷모습에서……');
        era.printButton('이미 충분히 잘해줬어!', 1);
        await era.input();
        await coffee.say_and_wait(
          '『이미 충분히 잘해줬다』, 인가요…… 그런 정신적인 위로는…… 제게 아무런 의미가 없다고 생각해요……',
        );
        era.println();
        await era.printAndWait('——콩.');
        await era.printAndWait('조금 강한 꿀밤 소리가 카페의 이마에서 울렸다.');
        era.println();
        await coffee.say_and_wait('아얏……! 친구도 참…… 하지만, 지금 제 실력으로는……');
        era.printButton('여기서 포기할 거야?', 1);
        await era.input();
        await coffee.say_and_wait('……이대로 포기하는 건…… 싫어요.');
        era.println();
        await era.printAndWait('——그러면 됐어.');
        await era.printAndWait([
          '귓가에 그런 목소리가 들린 듯했고, 주변의 공기가 찰나의 순간 응결된 것처럼 온도가 낮아진 기분이 들었다……',
        ]);
        era.println();
        await coffee.say_and_wait([callname, '…… 그리고 친구…… 고마워요……']);
        await coffee.say_and_wait('더 이상 지지 않겠어요.');
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 다시 의욕을 불태우며, 다음 레이스를 향해 나아갈 준비를 마쳤다.',
        ]);
      }
    }
  }

  async race_start(coffee, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](coffee, me, callname))
    ) {
      return super.race_start(coffee, me, callname, hook, extra_flag);
    }
  }

  async week_end(coffee, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false };
      const ret = await week_end_handlers[event_object.arg](
        coffee,
        me,
        callname,
        flags,
        event_object,
      );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async week_start(coffee, me, callname, hook, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await week_start_handlers[event_object.arg].call(
          this,
          coffee,
          me,
          callname,
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }
};