const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.override = true;
  const callname = sys_get_callname(25, 0),
    coffee = get_chara_talk(25),
    me = get_chara_talk(0);
  await print_event_name('팬 대감사제', coffee);
  await era.printAndWait('팬 대감사제 당일. 오직 이 날에만, 트레센 안에서……');
  await era.printAndWait('——딸랑딸랑.');
  await coffee.say_and_wait('……어서 오세요.');
  await era.printAndWait('평소에는 존재하지 않는, 아늑한 분위기의 카페가 영업을 시작한다.');
  await coffee.say_and_wait([
    callname,
    '……오래 기다리셨어요. 이건 특별히 로스팅한 맨하탄 특제 블렌드 커피예요.',
  ]);
  await coffee.say_and_wait('부디, 맛보아 주세요……');
  await era.printAndWait('지긋이——');
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 마치 ',
    coffee.get_colored_name(),
    '의 뜨거운 시선을 느낀 듯한 기분이 들었다.',
  ]);
  era.printButton('「……다른 손님들을 접대하지 않아도 괜찮아?」', 1);
  await era.input();
  await coffee.say_and_wait(
    '다른 손님은 오지 않을 거예요. 이 정적이야말로 이곳의 가장 매력적인 부분이고, 그리고……',
  );
  await coffee.say_and_wait(
    '분명 아무도 이곳을 찾아내지 못할 테니까요. 설령 입구로 들어온다 해도, 곧장 출구로 이어질 터이니……',
  );
  await era.printAndWait('이런 카페를 여는 게 대체 무슨 의미가 있는 걸까……');
  await era.printAndWait('마음속으로 살짝 딴지를 걸며, 이내 손에 든 커피를 음미하기 시작했다.');
  await era.printAndWait('——딸랑딸랑.');
  await coffee.say_and_wait('어라…… 설마 다른 분이 더 계실 줄은……');
  await era.printAndWait('——딸랑딸랑딸랑딸랑……');
  era.printButton('「……갑자기 사람들이 잔뜩 들어왔어!」', 1);
  await era.input();
  await say_by_passer_by_and_wait('남성', [
    '오, 여기다! 그 ',
    coffee.get_colored_name(),
    '가 운영한다는 카페가!',
  ]);
  await say_by_passer_by_and_wait('여성', [
    '와아, 정말 분위기 있다~! 인테리어도 너무 예뻐~! 나 사실 ',
    coffee.sex,
    '의 팬이거든~',
  ]);
  await coffee.say_and_wait('이건……');
  era.printButton('「결국 모두에게 들키고 말았네.」', 1);
  await era.input();
  await coffee.say_and_wait('그러게요…… 하지만, 이게 대체 어떻게 된 일일까요……? 왜 다들 찾아낸 거죠?');
  era.printButton('「그만큼 다들 열심히 찾았다는 뜻 아니겠어.」', 1);
  await era.input();
  await era.printAndWait([
    coffee.get_colored_name(),
    '가 최근 눈부신 활약을 보여준 덕분에, ',
    coffee.sex,
    '의 인기도 날이 갈수록 높아지고 있었다.',
  ]);
  await era.printAndWait(['아무래도 ', coffee.sex, '의 인지도가 팬들을 이리로 불러모은 모양이다.']);
  await coffee.say_and_wait(['손님이 많긴 하지만…… 일단 오셨으니, 손님이시니까요…… 노력해 볼게요.']);
  await era.printAndWait([
    '몇 분 후, 정신없이 바빠진 ',
    coffee.get_colored_name(),
    '를 보다 못한 손님 ',
    me.get_colored_name(),
    '은(는) 결국 일일 임시 점원 역할을 자처하게 되었다.',
  ]);
  era.println();
  let wait_flag = get_attr_and_print_in_event(
    25,
    [0, 10, 0, 10, 0],
    0,
    undefined,
    true,
  );
  wait_flag = sys_like_chara(25, 0, 100) || wait_flag;
  sys_change_money(100, 25);
  wait_flag && (await era.waitAnyKey());
  era.set('cflag:25:축제이벤트표시', 0);
};