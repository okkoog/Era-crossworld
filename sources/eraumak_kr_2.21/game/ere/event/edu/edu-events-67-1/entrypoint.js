/**
 * @file 사토노 다이아몬드 - 育成
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const CustomizedEdu = require('#/event/edu/edu-common');
const Edu67UntilSchoolAtrium = require('#/event/edu/edu-events-67-1/school-atrium');
const daiya_week_end = require('#/event/edu/edu-events-67-1/week-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const DaiyaEduMarks1 = require('#/data/event/edu-event-marks/edu-event-marks-67-1');
const event_hooks = require('#/data/event/event-hooks');
const { attr_enum, fumble_result } = require('#/data/train-const');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

/** @type {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-67-1/week-start-1')(week_start_handlers);
require('#/event/edu/edu-events-67-1/week-start-2')(week_start_handlers);
require('#/event/edu/edu-events-67-1/week-start-3')(week_start_handlers);

const race_end_handlers = {};

require('#/event/edu/edu-events-67-1/race-end-1')(race_end_handlers);
require('#/event/edu/edu-events-67-1/race-end-2')(race_end_handlers);

module.exports = class extends Edu67UntilSchoolAtrium {
  async office_cook(daiya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 67) {
      add_event(event_hooks.office_cook, event_object);
      return;
    }
    const edu_marks = new DaiyaEduMarks1();
    if (edu_marks.banned_coffee !== 1) {
      return;
    }
    const coffee = get_chara_talk(25);
    let wait_flag;
    edu_marks.banned_coffee++;
    await print_event_name('금단의 블렌드', daiya);
    await era.printAndWait(
      '「맛있는 커피를 끓이는 법을 배우고 싶다」. 맨하탄 카페는 사토노 다이아몬드의 이 소원을 들어주기로 약속했다.',
    );
    await daiya.say_and_wait('오늘 잘 부탁드려요!');
    era.printButton('「잘 부탁해!」', 1);
    await era.input();
    await coffee.say_and_wait('네, 잘 부탁드려요…… 함께 맛있는 커피를 끓여보죠.');
    await coffee.say_and_wait(
      '커피는 생산된 농장에 따라 맛이 달라져요…… 품종과 재배 환경도 큰 영향을 미치죠.',
    );
    await coffee.say_and_wait(
      '자신이 좋아하는 원두를 찾는 것도 즐거움 중 하나예요…… 한 번 골라보시겠어요……?',
    );
    await daiya.say_and_wait('종류가 이렇게나 많다니……! 어떻게 골라야 할지 모르겠어요.');
    await coffee.say_and_wait(
      '그럴 때는…… 블렌드에 도전해 보는 것도 방법이에요. 미지의 세계…… 당신만의 한 잔을 끓여낼 수 있죠.',
    );
    await daiya.say_and_wait('미지의 세계…… 정말 멋진 울림이네요! 저, 블렌드에 도전해 보겠어요!');
    await daiya.say_and_wait(
      '온두라스…… 초콜릿 향과 패션프루트의 풍미…… 이것도 넣을게요!',
    );
    await coffee.say_and_wait('벌써 10종류째인데…… 저기, 일단 이 정도면 충분하지 않을까──');
    await coffee.say_and_wait(
      '……에? 새로운 맛이 탄생할지도 모른다니? 그건…… 틀린 말은 아니지만……',
    );
    await daiya.say_and_wait('좋아── 이것도 넣고…… 아, 이것도요!');
    await daiya.say_and_wait('후훗…… 제가 직접 만든 자작 블렌드♪ 마셔볼게요.');
    await era.printAndWait([
      { color: daiya.color, content: '두', fontWeight: 'bold' },
      { color: coffee.color, content: '사람', fontWeight: 'bold' },
      '「',
      { color: daiya.color, content: '꿀꺽' },
      '、',
      { color: coffee.color, content: '꿀꺽' },
      '……」',
    ]);
    await daiya.say_and_wait(
      '우으…… 쓴맛과 신맛이 서로 다투고 있어요. 전 이런 맛은 별로 안 좋아해요……!',
    );
    era.printButton('「이건 실패한 것 같네……」', 1);
    await era.input();
    await coffee.say_and_wait(
      '……원두의 종류가 많을수록 맛은 복잡해지죠. 각 원두의 자기주장이…… 너무 강했던 것 같네요.',
    );
    await daiya.say_and_wait('그렇군요…… 으음── 맛이 서로 싸우지 않게 하려면……');
    await daiya.say_and_wait(
      '아! 좋은 방법이 떠올랐어요! 맛들이 서로 친하게 지내게 해줄 도우미를 알고 있거든요!',
    );
    await daiya.say_and_wait('보세요! 채소가 가득 심어진 밭이에요!');
    await daiya.say_and_wait(
      '채소는 여러 재료와 함께 볶거나 삶아서 자주 쓰이잖아요, 그렇죠?',
    );
    await daiya.say_and_wait(
      '채소로 우려낸 차도 있으니까, 커피 원두끼리의 맛을 중화시켜 줄지도 몰라요!',
    );
    era.printButton('「역시 그만두는 게 좋지 않을까……」', 1);
    await era.input();
    await coffee.say_and_wait('……저는 사토노 씨의 의견에 찬성해요.');
    await coffee.say_and_wait(
      '커피의 개념을 완전히 뒤엎는…… 상식을 깨는 발상은, 저로서는 생각지도 못한 일이라……',
    );
    await daiya.say_and_wait('상식을 깨는 커피……!');
    await coffee.say_and_wait(
      '분명 흥미로운 커피가 탄생할 거라고 생각해요…… 『친구』도…… 그렇게 말하고 있네요.',
    );
    await daiya.say_and_wait(
      '헤헤헤, 그렇죠! 저도 어떤 커피가 될지 전혀 상상이 안 돼요.',
    );
    await daiya.say_and_wait(
      '그래서 더 도전해 보고 싶은 거예요…… 설령 맛없는 커피가 된다고 해도요……!',
    );
    era.printButton('「그전에 기초부터 배우는 게 어때?」', 1);
    era.printButton('「맛있어질 때까지 도전하자!」', 2);
    let ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait('그렇군요…… 우선 기초를 튼튼히 다지라는 말씀이시죠.');
      await daiya.say_and_wait(
        '알겠어요…… 그럼 기초 개념부터 익히고, 모험은 나중으로 미뤄둘게요.',
      );
      await daiya.say_and_wait(
        '……좋아, 이제 뜨거운 물만 부으면 완성이에요! 아…… 그런데 이 원두도 넣는다면──',
      );
      await coffee.say_and_wait('저기, 레시피에는……');
      await daiya.say_and_wait('──아참! 레시피대로 해야 하죠……!');
      await era.printAndWait(
        '사토노 다이아몬드는 자신의 호기심을 억누르고, 훌륭하게 맛있는 커피를 끓여냈다!',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
    } else {
      await daiya.say_and_wait('문제없어요! 기대해 주세요!');
      await coffee.say_and_wait(
        '채소를 넣은 커피…… 완성됐네요. 시금치, 피망 등이 들어가서…… 색이 아주 초록초록하네요.',
      );
      await daiya.say_and_wait('냄새도 진한 채소향이…… 저, 저 마셔볼게요!');
      await era.printAndWait([
        { color: daiya.color, content: '두', fontWeight: 'bold' },
        { color: coffee.color, content: '사람', fontWeight: 'bold' },
        '「',
        { color: daiya.color, content: '꿀꺽' },
        '、',
        { color: coffee.color, content: '꿀꺽' },
        '……」',
      ]);
      await daiya.say_and_wait('이건…… 맛없네요……! 아하, 아하하하!');
      await coffee.say_and_wait('……그러게요…… 후후.');
      await era.printAndWait('맛은 조금 미묘했지만, 웃음을 가져다준 한 잔의 커피였다!');
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async office_study(daiya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 67) {
      add_event(hook.hook, event_object);
      return;
    }
    const edu_marks = new DaiyaEduMarks1();
    if (edu_marks.dance_practice !== 1) {
      return;
    }
    const teio = get_chara_talk(3);
    let wait_flag;
    edu_marks.dance_practice++;
    await print_event_name('댄스 레슨', daiya);

    await era.printAndWait(
      `사토노 다이아몬드가 ${me.name}에게 춤을 봐달라고 부탁하여, ${me.name}은(는) 그녀의 댄스 연습을 도와주고 있다.`,
    );
    await daiya.say_and_wait('이렇게, 그리고 이렇게…… 다음엔 이렇게──');
    await daiya.say_and_wait(
      '……으으으, 왠지 느낌이 안 살아요. 춤 실력이 뛰어난 분들은 절대 이렇게 추지 않을 텐데.',
    );
    await daiya.say_and_wait('더 기백 있게──');
    await daiya.say_and_wait('……와와앗!');
    era.printButton('「괜찮아!?」', 1);
    await era.input();
    await daiya.say_and_wait('괜찮아요, 면목 없네요……');
    await era.printAndWait('어찌 된 일인지 사토노 다이아몬드의 춤사위는 왠지 헛바퀴를 도는 듯한 느낌이다.');
    era.printButton('「무슨 고민이라도 있어?」', 1);
    await era.input();
    await daiya.say_and_wait('……');
    await daiya.say_and_wait('저기…… 키타짱은 노래를 정말 잘하잖아요?');
    await daiya.say_and_wait(
      '저도 나름대로 열심히 연습하고 있지만, 그건 하루아침에 도달할 수 있는 영역이 아니에요.',
    );
    await daiya.say_and_wait(
      '그래서 적어도 댄스만큼은 스스로 자부심을 가질 수 있는 수준이 되고 싶어서요.',
    );
    era.printButton('「기초부터 다시 살펴보자」', 1);
    era.printButton('「차라리 키타산 블랙의 노래로 춤을 춰볼까?」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await daiya.say_and_wait(
        '그렇네요, 키타짱이 그렇게 노래를 잘 부르는 것도 분명 기초가 튼튼하기 때문일 거예요.',
      );
      await daiya.say_and_wait(
        '저도 기초 스텝부터 다시 연습해서 차근차근 경험을 쌓아나간다면──',
      );
      await teio.print_and_wait('??? 「뭐야 뭐야? 댄스 이야기 중이야──?」');
      await daiya.say_and_wait('앗, 테이오 씨!? ……방금 대화를 들으셨나요?');
      await teio.say_and_wait('응, 기초 스텝이 어쩌고저쩌고 했지?');
      await teio.say_and_wait(
        '헤헤── 댄스라면 바로 이 몸이 나설 차례지! 내가 가르쳐줄 수도 있는데, 어때~?',
      );
      await daiya.say_and_wait(
        '과연 댄스 하면 바로 테이오 씨가 떠오르긴 하지만, 테이오 씨는 키타짱도 존경하는 분이잖아요.',
        true,
      );
      await daiya.say_and_wait(
        '저 혼자 가르침을 받는 건 왠지 미안한 마음이 드는데……',
        true,
      );
      await daiya.say_and_wait(
        '──아니, 지금은 사양할 때가 아니죠. 댄스를 완벽하게 익히기로 결심했으니까요!',
        true,
      );
      await daiya.say_and_wait('테이오 씨, 괜찮으시다면 제게 가르침을 주시겠어요? 다만──');
      await teio.say_and_wait('다만?');
      await daiya.say_and_wait(
        '……키타짱에게는 비밀로 해 주셨으면 해요. 저 혼자서 테이오 씨를 독차지하는 것 같아서 미안하거든요.',
      );
      await teio.say_and_wait(
        '아하, 그런 거였어! 다이아 짱이랑 나만의 비밀이라는 거지? 히히히, 좋아!',
      );
      await era.printAndWait(
        '토카이 테이오의 지도를 받은 뒤, 사토노 다이아몬드의 동작은 이전보다 훨씬 부드러워졌다.',
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
    } else {
      await daiya.say_and_wait('어머, 키타짱의 노래로 말인가요……? 그건 생각 못 했네요!');
      await daiya.say_and_wait(
        '하지만 꽤 좋을 것 같아요. 키타짱의 노랫소리에 지지 않겠다는 각오가 더 단단해질 테니까요!',
      );
      await daiya.say_and_wait('그럼──');
      await daiya.say_and_wait('……!', true);
      await daiya.say_and_wait('키타짱의 노랫소리는 정말 강력하고 활기가 넘쳐요……', true);
      await daiya.say_and_wait('어쩌면 제게 부족했던 게 바로 그런 힘이었을지도 몰라요……!', true);
      await daiya.say_and_wait(
        '좋아, 저도 더 힘차게!! 좀 더 강하게, 더욱더 강하게──!!',
        true,
      );
      await daiya.say_and_wait(
        '어라? 춤을 출수록 열정이 샘솟는 것 같아요…… 이런 기분, 정말 즐거워요!!',
        true,
      );
      await era.printAndWait('사토노 다이아몬드는 혼잣말을 중얼거리며 한참 동안 춤을 추었다.');
      await era.printAndWait(
        `조금 걱정되기는 하지만…… 그녀의 댄스 동작은 무척이나 날카롭고 절도 있게 변했다!`,
      );
      era.println();
      wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(daiya, me, callname, hook, extra_flag, event_object) {
    if (
      era.get('flag:현재상호작용캐릭터') !== 67 ||
      era.get('cflag:67:육성턴수합산') !== 95 + 2
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    let wait_flag = false;
    await print_event_name('운수 대통 경품 추첨!', daiya);
    await era.printAndWait(`귀가하는 길, ${me.name}과(와) 사토노 다이아몬드가 상점가를 지나가는데──`);
    await era.printAndWait(
      '상점가 직원 「자, 이쪽을 보세요! 현재 신춘 대추첨회 개최 중입니다~! 특등 상품은 무려 『온천 여행권』!」',
    );
    await era.printAndWait(
      '상점가 직원 「1등은 『특제 당근 햄버그』, 2등은 『당근 한 더미』, 3등은 『당근 한 개』입니다!」',
    );
    await era.printAndWait(
      '상점가 직원 「자, 어서 오세요! 재미있는 경품 추첨이에요! 누구나 참여 가능합니다~!」',
    );
    await daiya.say_and_wait('와아, 경품 추첨을 하고 있네요!');
    await daiya.say_and_wait(
      '저건…… 손으로 돌리는 추첨기! 역시 추첨은 저런 기계로 해야 제맛이죠!',
    );
    era.printButton('「특별히 고집하는 이유라도 있어?」', 1);
    await era.input();
    await daiya.say_and_wait(
      '손으로 돌리는 추첨기는 직접 돌리니까 힘의 강도나 속도를 조절할 수 있잖아요?',
    );
    await daiya.say_and_wait(
      '자신의 힘으로 행운을 거머쥐는 듯한 느낌, 그 기분이 정말 좋거든요!',
    );
    era.printButton('「한 번 뽑아볼래?」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) 물건을 사고 받은 추첨권이 한 장 있다는 사실을 떠올리고 그녀에게 권해 보았다.`,
    );
    await daiya.say_and_wait('뽑고 싶어요!! 제가 반드시 특별상을 뽑아 보이겠어요!');
    await daiya.say_and_wait('이얍～～!!');
    await era.printAndWait('사토노 다이아몬드는 엄청난 기세로 추첨기 손잡이를 돌렸다!');
    await era.printAndWait('결과는──');
    const gacha = get_random_value(0, 9);
    if (gacha === 0) {
      await era.printAndWait(
        '상점가 직원 「세상에! 축하합니다────!! 특별상 『온천 여행권』 당첨입니다～～～～!!」',
      );
      await era.printAndWait('「온천 여행권」을 획득했다.');
      await daiya.say_and_wait(
        '해…… 해냈어요～～!! 특별상! 특별상이에요, 트레이너 선생님!!',
      );
      await daiya.say_and_wait(
        '거봐요? 제 말이 맞죠? 행운은 기세로 쟁취하는 거예요!!',
      );
      era.printButton('「응, 정말 대단한걸……!」', 1);
      await era.input();
      await era.printAndWait(
        `정말로 그녀의 말대로 특별상을 뽑다니, 정말 기세로 행운을 불러들인 듯한 기분이다.`,
      );
      await daiya.say_and_wait('후훗, 올해는 정말 멋진 한 해가 될 것 같네요♪');
      era.printButton('「키타산이랑 같이 온천이라도 다녀와」', 1);
      await era.input();
      await daiya.say_and_wait('아니요, 트레이너 선생님께 드릴게요. 추첨권은 트레이너 선생님 거였으니까요.');
      await daiya.say_and_wait('전 추첨을 체험해 본 것만으로도 충분히 만족해요!');
      era.printButton('「하지만 당첨시킨 건 너인걸……」', 1);
      await era.input();
      await daiya.say_and_wait('그럼, 저랑 트레이너 선생님 둘이서 같이 가요.');
      await daiya.say_and_wait(
        '위로 여행이라고 생각하면 되겠네요. 음, 그게 좋겠어요! 그렇게 결정했어요!',
      );
      await daiya.say_and_wait(
        '트윙클 시리즈 최초의 3년이 일단락될 때, 다 같이 이 위로 여행을 떠나기로 해요! 한 단계를 마무리했을 때는 축하 파티를 해야 하니까요!',
      );
      await daiya.say_and_wait('게다가 보상이 있으면 더 의욕이 생기지 않겠어요?');
      era.printButton('「그렇네」', 1);
      await era.input();
      await daiya.say_and_wait('그럼 약속한 거예요! 약속이에요!');
      await era.printAndWait(
        `${me.get_couple_title()}은 시니어 시즌에 만족스러운 성적을 남기고, 그 후에 이 여행권을 사용하기로 약속했다.`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, 2) || wait_flag;
      wait_flag = get_attr_and_print_in_event(
        67,
        new Array(5).fill(10),
        0,
        JSON.parse('{"체력":300}'),
      );
    } else if (gacha === 9) {
      await era.printAndWait(
        '상점가 직원 「아쉽네요, 꽝입니다! 참가상은 『휴지』예요～」',
      );
      await era.printAndWait('「휴지」를 획득했다.');
      await daiya.say_and_wait('…………꽝인가요…………?');
      await daiya.say_and_wait('…………한 번 더.');
      await daiya.say_and_wait('한 번 더 뽑겠어요!');
      await daiya.say_and_wait(
        '꽝이라는 결과는 절대 받아들일 수 없어요! 제가 이 결과를 뒤엎어 보이겠어요!!',
      );
      await era.printAndWait('상점가 직원 「저기…… 혹시 추첨권이 더 있으신가요?」');
      await daiya.say_and_wait('아뇨, 어디서 살 수 있죠?');
      await era.printAndWait(
        '상점가 직원 「추첨권은 따로 판매하지 않습니다만～ 상점가에서 물건을 사면 받을 수 있──」',
      );
      await daiya.say_and_wait('물건만 사면 받을 수 있다는 거죠!? 그럼 사러 갈게요!');
      era.printButton('「잠깐만! 우선 좀 진정해봐!?」', 1);
      await era.input();
      await daiya.say_and_wait(
        `절 말리지 마세요!! 사토노 가문의 ${daiya.get_uma_sex_title()}로서, 이 시련을 피할 수는 없어요!`,
      );
      await era.printAndWait(
        `불운에 맞서려는 그녀의 결의에 불이 붙은 모양이다. 마치 징크스를 깨부수려 집착하는 모습처럼── 아니면 그저 단순히 지기 싫어하는 것뿐일지도……`,
      );
      await daiya.say_and_wait('제 지갑이 어디에…… 앗!?');
      await era.printAndWait(
        `오늘 사토노 다이아몬드는 지갑을 기숙사에 두고 온 모양이다. 덕분에 추첨에 계속 매달리려던 그녀의 집념도 사그라들었다.`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, -1) || wait_flag;
      wait_flag = get_attr_and_print_in_event(
        67,
        undefined,
        0,
        JSON.parse('{"체력":300}'),
      );
    } else if (gacha === 1) {
      await era.printAndWait(
        '상점가 직원 「축하합니다, 1등 당첨이에요～! 상품은 『특제 당근 햄버그』입니다!」',
      );
      await era.printAndWait('「특제 당근 햄버그」를 획득했다.');
      await daiya.say_and_wait('어머, 당근 햄버그……!');
      await daiya.say_and_wait(
        '이 호쾌한 비주얼이 참 좋네요. 저희 집에서는 당근을 먹을 때 항상 다 썰어져서 나오거든요. 그래서 이런 외식 경험을 꼭 해보고 싶었어요♪',
      );
      await daiya.say_and_wait('저, 이 당근이 꼿꼿이 서 있는 상태에서 깔끔하게 먹어치울 수 있어요!');
      era.printButton('「끝까지 세운 상태로!?」', 1);
      await era.input();
      await daiya.say_and_wait(
        '네♪ 우선 당근 윗부분부터…… 직접 보여드리는 게 빠르겠네요. 트레이너 선생님, 같이 먹어요!',
      );
      await daiya.say_and_wait('후훗, 보여드릴게요…… 사토노의 비기!');
      await era.printAndWait(
        '사토노 다이아몬드는 우아하게 나이프와 포크를 놀려, 당근을 전혀 쓰러뜨리지 않고 햄버그를 조금씩 먹어 나갔다.',
      );
      await daiya.say_and_wait('……잘 먹었습니다. 과연 특제 요리답게 정말 맛있네요!');
      era.printButton('「나이프 실력이 정말 대단한걸……!」', 1);
      await era.input();
      await daiya.say_and_wait(
        '헤헤헤…… 예전에 들었는데, 당근 햄버그를 먹을 때 당근이 쓰러진 방향에는 불행의 징크스가 닥친대요.',
      );
      await daiya.say_and_wait(
        '그래서 당근을 쓰러뜨리지 않으면 불행의 방향도 생기지 않을 거라 생각해서 연마한 기술이랍니다.',
      );
      era.printButton('「징크스를 깨려고 연마한 거야?」', 1);
      await era.input();
      await daiya.say_and_wait(
        '네, 다들 보시고는 깜짝 놀라시더라고요. 대화 주제로도 아주 좋아요. 트레이너 선생님도 한번 해보실래요?',
      );
      await era.printAndWait(
        `그 후, ${me.name}은(는) 사토노 다이아몬드로부터 비기를 전수받아 당근을 쓰러뜨리지 않고 먹는 법을 익혔다!`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, 2) || wait_flag;
      wait_flag = get_attr_and_print_in_event(
        67,
        new Array(5).fill(10),
        0,
        JSON.parse('{"체력":300}'),
      );
    } else if (gacha < 5) {
      await era.printAndWait(
        '상점가 직원 「2등 당첨～～!! 상품은 『당근 한 더미』입니다!」',
      );
      await era.printAndWait('「당근 한 더미」를 획득했다.');
      await daiya.say_and_wait('와아～ 당근을 잔뜩 얻었네요♪');
      await daiya.say_and_wait('트레이너 선생님, 가져가세요. 추첨권은 트레이너 선생님 거였으니까요.');
      era.printButton('「이걸 다 어떻게 먹어!」', 1);
      await era.input();
      await daiya.say_and_wait('어머…… 그럼 기숙사 분들에게 나눠드려야겠네요.');
      await daiya.say_and_wait(
        '그냥 드리는 건 재미없으니까, 요리로 만들어서 다 같이 나눠 먹기로 해요♪',
      );
      era.printButton('「무슨 요리를 만들 생각이야?」', 1);
      await era.input();
      await daiya.say_and_wait(
        '사실 예전부터 꼭 만들어보고 싶었던 요리가 있어요…… 바로 당근 붕어빵이에요!!',
      );
      await daiya.say_and_wait(
        '붕어빵 안에 모두가 좋아하는 당근을 속재료로 넣는 거죠. 초무침한 당근채로 맛에 포인트를 주고요.',
      );
      await daiya.say_and_wait(
        '반죽에도 당근을 넣고…… 당근 조각도 더 넣을 거예요! 그럼 주황색의 귀여운 붕어빵이 될 거예요♪',
      );
      await daiya.say_and_wait(
        '그러고 나서 통당근을 위에 하나 푹 꽂는 거죠! 당근 햄버그처럼요!!',
      );
      era.printButton('「처, 참신한 조리법이네……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '트레이너 선생님도 그렇게 생각하시나요? 성공하면 사토노 그룹 외식부의 신메뉴로 제안해 볼 생각이에요♪',
      );
      await era.printAndWait(
        `너무나 참신한 조리법이라 불안해진 ${me.name}은(는) 함께 요리를 돕겠다고 제안했다.`,
      );
      await era.printAndWait(
        `다음 날── 사토노 다이아몬드는 미호 생활관 동료들이 「당근 붕어빵」을 아주 좋아했다는 소식을 전해왔다.`,
      );
      era.println();
      wait_flag = sys_change_motivation(67, 1);
      wait_flag =
        get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"체력":200}'),
        ) || wait_flag;
    } else {
      await era.printAndWait('상점가 직원 「3등입니다~! 상품은 『당근 한 개』예요!」');
      await era.printAndWait('「당근 한 개」를 획득했다.');
      await daiya.say_and_wait(
        '한 개뿐이라니…… 정말 죄송해요, 트레이너 선생님. 귀한 추첨권을 쓰게 해드렸는데……',
      );
      await daiya.say_and_wait('제 기세가 부족했나 봐요……');
      era.printButton('「그럼 이 당근을 먹고 기운 내!」', 1);
      await era.input();
      await daiya.say_and_wait('앗……? 정말 저 주시는 건가요……?');
      era.printButton('「자, 어서 먹어!」', 1);
      await era.input();
      await daiya.say_and_wait('딱 하나뿐인 이 소중한 당근을 제게 주시다니…… 감사해요.');
      await daiya.say_and_wait('…………후훗.');
      await daiya.say_and_wait(
        '트레이너 선생님이 선물해 주신 당근…… 세상에 단 하나뿐인 저만의 당근……',
      );
      await daiya.say_and_wait('분명 세상에서 제일 맛있는 당근일 거예요♪');
      await era.printAndWait(
        '사토노 다이아몬드가 기뻐해 준다면 그것으로 족하다. ──하지만 상점가 직원은 세상에서 제일 맛있다는 그 말에 큰 부담을 느낀 모양이다.',
      );
      era.println();
      wait_flag =
        get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"체력":200}'),
        ) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

 async race_end(daiya, me, callname, hook, extra_flag) {
    const edu_marks = new DaiyaEduMarks1(),
      edu_weeks = era.get('cflag:67:육성턴수합산');
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        daiya,
        me,
        edu_weeks,
        extra_flag,
        edu_marks,
      ))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('레이스 승리!', daiya);
        await daiya.say_and_wait(
          '해냈어요! 제가 해냈어요! 제 활약, 보셨나요? 트레이너 선생님!',
        );
        await daiya.say_and_wait(
          '지금 제가 가진 실력을 아낌없이 발휘했어요…… 최고의 레이스를 펼친 것 같아요!',
        );
        era.printButton('「정말 최고의 달리기였어!」', 1);
        era.printButton('「이 느낌 그대로 계속 나아가자!」', 2);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait(
            '와아……! 감사해요! 트레이너 선생님께 그런 말씀을 듣다니, 저……!',
          );
          await daiya.say_and_wait(
            '후훗…… 그럼 다음에는 더욱 눈부신 활약을 보여드릴게요! 이건 트레이너 선생님과 저의 약속이에요!',
          );
        } else {
          await daiya.say_and_wait('네! 꿈을 향해 곧장 나아갈게요……!');
          await daiya.say_and_wait(
            '후후, 지금이라면 손을 뻗으면 닿을 것만 같은 기분이 들어요.',
          );
        }
      } else if (extra_flag.rank <= 5) {
        await print_event_name('레이스 입상', daiya);
        await daiya.say_and_wait('입상…… 일단 사토노 가문의 이름을 더럽히지 않을 성적은 거뒀네요.');
        await daiya.say_and_wait('하지만, 승리까지는…… 한 걸음이 부족했어요.');
        era.printButton('「충분히 멋진 결과야」', 1);
        era.printButton('「이 경험을 다음 레이스에 활용하자!」', 2);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait('후후, 칭찬해 주셔서 감사해요♪');
          await daiya.say_and_wait(
            '하지만 제 꿈은 여기서 끝이 아니에요. 더욱더 강해질 거예요……!',
          );
        } else {
          await daiya.say_and_wait('네! 우리 함께 힘을 합쳐서 다음번에는 꼭 이겨요!');
          await daiya.say_and_wait(
            '학원에 돌아가면 바로 작전 회의네요! 지금의 제 약점을 철저하게 찾아내야겠어요!',
          );
        }
      } else if (extra_flag.rank <= 10) {
        await print_event_name('레이스 패배', daiya);
        await daiya.say_and_wait('…………이것이 지금 제 실력이군요……');
        await daiya.say_and_wait('……죄송해요. 기대에 부응하지 못했어요.');
        await daiya.say_and_wait(
          '실력도, 페이스 배분 예측도 실수했어요…… 아직 해결해야 할 과제가 산더미 같네요.',
        );
        era.printButton('「함께 해결해 나가자」', 1);
        era.printButton('「목표를 향해 다시 시작하자」', 2);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait('네! 앞으로도 잘 부탁드릴게요, 트레이너 선생님!');
          await daiya.say_and_wait(
            '끊임없이 단련하고, 또 단련해서…… 다음번엔 반드시 가장 찬란하게 빛나는 모습을 보여드릴게요!',
          );
        } else {
          await daiya.say_and_wait(
            '네, 당연하죠! 전 아직 실현해야 할 꿈을 포기하지 않았으니까요.',
          );
          await daiya.say_and_wait('꿈을 이루기 위해…… 다시 한번 자신을 채찍질하겠어요!');
        }
      } else if (extra_flag.rank > 10) {
        await print_event_name('다음엔 지지 않아!', daiya);
        await daiya.say_and_wait('……해내지 못했어요. 이기지 못했어요. 또 지고 말았네요……');
        await daiya.say_and_wait(
          '수많은 분의 기대를 저버렸어요. 아버님, 어머님, 사토노 가문의 모든 분…… 그리고 트레이너 선생님까지.',
        );
        await daiya.say_and_wait(
          '……초심으로 돌아가 노력할게요. 지금까지의 노력이 부족했다면, 더 많이, 훨씬 더 많이…… 그러니까──',
        );
        era.printButton('「그렇게 서두를 필요 없어」', 1);
        era.printButton('「둘이서 2인 3각으로 달려 나가자!」', 2);
        const ret = await era.input();
        if (ret === 1) {
          await daiya.say_and_wait(
            '괜찮아요! 다음에는 반드시 이기기 위해서라면, 어떤 훈련이라도 버텨낼 수 있어요……!',
          );
          era.printButton('「우선 심호흡부터 해보자」', 1);
          await era.input();
          await daiya.say_and_wait('네!');
          await daiya.say_and_wait('흡…… 후……! 흡…… 후……');
          era.printButton('「……이제 좀 진정됐어?」', 1);
          await era.input();
          await daiya.say_and_wait('……아! 네, 네에.');
          era.printButton('「무리하지 말고, 천천히 나아가자」', 1);
          await era.input();
          await daiya.say_and_wait('트레이너 선생님……! ……네!');
          await daiya.say_and_wait(
            '네! 몇 번이고 다시 일어설게요……! 당신과 함께 노력하고 싶어요!',
          );
        } else {
          await daiya.say_and_wait('그럼…… 우선 발을 묶을 천부터 찾아야겠네요!');
          await daiya.say_and_wait('지금 바로 찾아올게요!');
          await era.printAndWait(
            '……『2인 3각』은 그저 비유였을 뿐이지만, 그녀가 기운을 차린 모양이다. 다시 함께 힘내기로 하자──',
          );
        }
      }
    }
  }

  async train_fail(daiya, me, callname, hook, extra_flag) {
    extra_flag['args'] = extra_flag.fumble
      ? fumble_result.fumble
      : fumble_result.fail;
    await CustomizedEdu.print_fail_info_in_train(
      daiya,
      extra_flag.train,
      extra_flag.fumble,
    );
    if (extra_flag.train !== attr_enum.intelligence) {
      if (extra_flag.fumble) {
        await print_event_name('무리 금지!', daiya);
        await era.printAndWait([
          '사토노 다이아몬드가 훈련 중에 부상을 입었기에, ',
          me.get_colored_name(),
          `은(는) 서둘러 ${daiya.sex}를 보건실로 데려갔다.`,
        ]);
        await daiya.say_and_wait('아윽……!');
        await daiya.say_and_wait(
          '살짝 움직이기만 해도…… 생각보다 상처가 깊은 모양이에요……',
        );
        era.printButton('「당분간은 쉬자」', 1);
        await era.input();
        await daiya.say_and_wait(
          '하지만…… 계속 쉬기만 하면 꿈에서 점점 멀어지는 기분이 드는걸요.',
        );
        await daiya.say_and_wait(
          '지금은 쉬는 게 최선의 선택일지도 모르지만, 저는…… 저는 이 난관을 극복해서 더 성장하고 싶어요……!',
        );
        await daiya.say_and_wait(
          '이 통증쯤은 반드시 이겨내 보일 테니까…… 제발 훈련을 계속하게 해주세요.',
        );
        era.printButton('「무리하게 둘 순 없어」', 1);
        era.printButton('「……알겠어, 널 믿어볼게」', 2);
        hook.arg = (await era.input()) === 1;
        if (hook.arg) {
          await daiya.say_and_wait(
            '하지만 제가 쉬고 있는 동안에도 다른 라이벌들은 더 앞서나갈 텐데──',
          );
          era.printButton('「너라면 분명 따라잡을 수 있어」', 1);
          await era.input();
          await daiya.say_and_wait('……알겠어요. 매사에 너무 서둘러선 안 된다는 말씀이시죠?');
          await daiya.say_and_wait(
            '마음은 분해서 견딜 수 없지만, 이 감정은 나중에 다 나은 뒤에 훈련에 쏟아붓도록 할게요.',
          );
          await era.printAndWait(
            '사토노 다이아몬드는 부상 처리를 마친 뒤, 아쉬운 기색이 역력한 얼굴로 기숙사로 돌아갔다.',
          );
          hook.arg = 0;
        } else if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await daiya.say_and_wait('감사해요! 그럼 다시 코스로 돌아가요.');
          await daiya.say_and_wait('──괜찮아요, 이 정도 상처쯤은……!', true);
          await daiya.say_and_wait('윽!?', true);
          await daiya.say_and_wait('…………!', true);
          era.printButton('「괜찮아!?」', 1);
          await era.input();
          await daiya.say_and_wait('──제가 너무 안일했나 봐요. 정말 죄송합니다……');
          await era.printAndWait(
            `무리를 한 탓에 오히려 부상이 악화되어, 회복에 필요한 시간이 더 늘어나고 말았다.`,
          );
          hook.arg = -1;
        } else {
          await daiya.say_and_wait('──이 정도 아픔은 참을 수 있어요!', true);
          await daiya.say_and_wait(
            '부담이 가지 않게 조심하면서, 한 걸음씩…… 천천히 완수할게요!',
            true,
          );
          await daiya.say_and_wait('……으으으으으!');
          await daiya.say_and_wait(
            '하아, 하아……! 후후, 무사히 훈련을 마쳤어요……! 통증에 지지 않았어요……!',
          );
          await era.printAndWait(
            '사토노 다이아몬드는 강인한 극기심으로 부상 부위에 무리가 가지 않도록 주의하며 훈련을 완수해냈다.',
          );
          hook.arg = 1;
        }
      } else {
        await print_event_name('몸조리 잘하기!', daiya);

        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 부상을 입은 사토노 다이아몬드를 보건실로 데려왔다.',
        ]);
        await daiya.say_and_wait('트레이너 선생님, 챙겨주셔서 감사해요.');
        await daiya.say_and_wait('하지만…… 전 이 정도 상처라면 훈련을 계속할 수 있다고 생각해요.');
        await daiya.say_and_wait(
          '응급처치도 받았으니, 이제 조금만 더…… 훈련해도 되지 않을까요?',
        );
        era.printButton('「방심은 금물이야」', 1);
        era.printButton('「그럼 조심해서 조금만 해볼까」', 2);
        hook.arg = (await era.input()) === 1;
        if (hook.arg) {
          await daiya.say_and_wait(
            '하지만 통증은 거의 느껴지지 않는걸요. 조금만 조심하면 문제없을 거예요……!',
          );
          era.printButton('「부상이 악화되기 전에 관두자」', 1);
          await era.input();
          await daiya.say_and_wait(
            '……그렇네요. 가벼운 부상이라도 자칫하면 큰 부상이 될 수 있으니까요.',
          );
          await daiya.say_and_wait('죄송해요…… 그럼 오늘은 이만 돌아가서 푹 쉴게요.');
          await era.printAndWait(
            `의욕이 넘쳤던 만큼 훈련을 할 수 없다는 사실에 실망한 기색이었지만, 그녀는 순순히 기숙사로 돌아가 휴식을 취했다.`,
          );
          hook.arg = 0;
        } else if (Math.random() < extra_flag['args'].ratio.fail_again) {
          await daiya.say_and_wait('네! 오늘 훈련 내용을 전부 끝마치고 싶어요!');
          await era.printAndWait([
            me.get_colored_name(),
            `은(는) 사토노 다이아몬드의 생각을 존중해 훈련을 속행했으나──`,
          ]);
          await daiya.say_and_wait('……하아…… 하아……');
          era.printButton('「……역시 아픈 거 아니야?」', 1);
          await era.input();
          await daiya.say_and_wait('……윽!?');
          await daiya.say_and_wait(
            '……네, 사실은 아직 좀 아프네요…… 죄송해요, 제가 너무 고집을 피웠어요……',
          );
          await era.printAndWait([
            '결국 ',
            me.get_colored_name(),
            '은(는) 즉시 훈련을 중단시키고, 사토노 다이아몬드를 푹 쉬게 했다.',
          ]);
          hook.arg = -1;
        } else {
          await daiya.say_and_wait('……후우! 이걸로 다 끝났어요!');
          era.printButton('「다친 곳은 괜찮아?」', 1);
          await era.input();
          await daiya.say_and_wait('멀쩡해요! 보세요!');
          await daiya.say_and_wait(
            '가벼운 운동 정도는 아무 문제 없는 모양이네요! 후후, 다행이에요!',
          );
          await era.printAndWait([
            me.get_colored_name(),
            `이(가) 걱정스러운 눈으로 지켜봤으나, 그녀는 정말로 괜찮아 보였다. 다행히 아주 가벼운 상처였던 모양이다.`,
          ]);
          hook.arg = 1;
        }
      }
    }
  }

  async train_success_add(daiya, me, callname) {
    await print_event_name('추가 자율 훈련', daiya);
    const kita = get_chara_talk(68);
    const d_call_k = sys_get_colored_callname(this.id, 68);
    await era.printAndWait('하루의 훈련을 마친 뒤──');
    await daiya.say_and_wait(['수고하셨어요, ', callname, '님. 오늘도 지도해 주셔서 감사해요.']);
    await daiya.say_and_wait('……아.');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      daiya.get_colored_name(),
      '의 시선을 따라가니…… 그곳에는 열심히 훈련 중인 ',
      kita.get_colored_name(),
      '이 보였다.',
    ]);
    await kita.say_and_wait('하아, 하아……! 아직 부족해, 부족하다고! 한 바퀴 더 돌 거야!');
    await daiya.say_and_wait(
      '……저기, 죄송해요. 저 역시 추가 훈련을 하기로 마음먹었는데, 괜찮을까요?',
    );
    era.printButton('「너무 무리하지는 마……」', 1);
    await era.input();
    await daiya.say_and_wait([
      '……사실 어제 ',
      d_call_k,
      '의 레이스 영상을 다시 봤거든요──',
    ]);
    await daiya.say_and_wait([
      d_call_k,
      '의 달리는 모습이 날이 갈수록 빨라지고, 실력도 더 탄탄해지고 있어요……',
    ]);
    await daiya.say_and_wait(
      '조금 마음이 조급해진 건 사실이지만, 그보다…… 더 달리고 싶다는 충동이 앞서요!',
    );
    await daiya.say_and_wait('투지가 불타오르는 기분이에요! 그러니까…… 부탁드릴게요!');
    era.printButton('「그럼 한번 달려볼까!」', 1);
    era.printButton('「그 투지는 내일을 위해 아껴두자」', 2);
    if ((await era.input()) === 1) {
      await daiya.say_and_wait(['헤헤, 역시 ', callname, '!']);
      await daiya.say_and_wait('감사해요! 그럼 저도 다녀올게요!');
      await daiya.say_and_wait(['──', d_call_k, '. 나…… 너에게 지지 않을 거야!']);
      await era.printAndWait([
        '그렇게 ',
        daiya.get_colored_name(),
        '는 라이벌을 향한 투지를 품고 추가 훈련을 완수했다.',
      ]);
      return true;
    } else {
      await daiya.say_and_wait(
        '내일을 위해 아껴두라고요……? 으으, 하지만 참을 수 있을지 자신 없는데……!',
      );
      era.printButton('「투지를 저축해뒀다가 나중에 한꺼번에 폭발시키자」', 1);
      await era.input();
      await daiya.say_and_wait(
        '……알겠어요. 그럼 약속한 거예요? 내일은 정말 철저하게 훈련하게 해주셔야 해요……!',
      );
      await daiya.say_and_wait(
        '……아! 그럼 지금 트레이닝실에 가서 같이 레이스 영상을 봐요!',
      );
      await daiya.say_and_wait(
        '그럼 마음속의 충동이 점점 고조되어서, 내일은 정말 열심히 훈련할 수 있을 것 같아요!',
      );
      era.printButton('「그럼 같이 보자!」', 1);
      await era.input();
      await daiya.say_and_wait('네♪');
      await era.printAndWait([
        '그렇게 ',
        daiya.get_colored_name(),
        '의 열정적인 해설과 함께, ',
        me.get_couple_title(),
        '은 ',
        kita.get_colored_name(),
        '의 활약이 담긴 레이스 영상을 함께 시청했다.',
      ]);
    }
    return false;
  }
    async week_end(daiya, me, callname, hook, extra_flag, event_object) {
    return await daiya_week_end(daiya, me, hook, event_object);
  }

  async week_start(daiya, me, callname, hook, extra_flag, event_object) {
    const edu_marks = new DaiyaEduMarks1(),
      edu_weeks = era.get('cflag:67:육성턴수합산'),
      flags = { wait: false };
    if (week_start_handlers[edu_weeks]) {
      await week_start_handlers[edu_weeks](daiya, me, flags, () =>
        add_event(hook.hook, event_object),
      );
    } else if (edu_marks.after_begin === 1) {
      edu_marks.after_begin++;
      await week_start_handlers[-1](daiya, me, flags);
    } else {
      return await super.week_start(
        daiya,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    flags.wait && (await era.waitAnyKey());
  }
};