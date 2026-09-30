const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  const love = era.get('love:56');
  let wait_flag = false;
  if (event_object?.arg === 'god_study') {
    await print_event_name('신학 연구', kitaru);
    await era.printAndWait([
      '오늘의 계획은 ',
      kitaru.get_colored_name(),
      '와 함께 사무실에서 공부하는 것이었으나, 텅 빈 의자만이 놓여 있을 뿐…… 아무래도 오늘 늦는 모양이다.',
    ]);
    await kitaru.say_and_wait([callname, '! ', callname, '!']);
    await kitaru.say_and_wait([callname, '!!!']);
    await kitaru.say_and_wait('지난번 질문의 정답을 찾아냈답니다!');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 막 전화를 걸려던 찰나, 시끌벅적하게 소란을 피우며 ',
      kitaru.get_colored_name(),
      '가 어디선가 찾아온 정체 모를 책을 품에 안고 방으로 뛰어 들어왔다.',
    ]);
    await kitaru.say_and_wait('그게 뭐냐면요, 신사에 모셔진 주신이 누구인지에 대해서예요!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 확실히 ',
      kitaru.get_colored_name(),
      '에게 그런 질문을 했던 기억이 났다.',
    ]);
    await kitaru.say_and_wait('여기 좀 보세요! 세 여신님께는 여러 화신이 있다고 되어 있어요!');
    await kitaru.say_and_wait('시라오키 님도 계시네요!');
    await era.printAndWait([
      kitaru.sex,
      '는 ',
      me.get_colored_name(),
      '을(를) 향해 누렇게 변색된 커다란 책을 들어 보였다. 그 안에는 꽤나 그럴싸한 필체로 여신들의 다양한 화신과 가능한 추측들이 상세히 묘사되어 있었다.',
    ]);
    await kitaru.say_and_wait('그리고 돌아가서 전대 신주님의 수기도 뒤져봤거든요!');
    await kitaru.say_and_wait(
      '저희 신사에 모셔진 분은 아마 화신이 너무 많은 그 여신님이라서, 구체적인 형상이 없는 거였나 봐요!',
    );
    await kitaru.say_and_wait('보세요! 여기에는 무슨 권속 같은 개념도 나와 있다니까요.');
    await kitaru.say_and_wait('샨타크 같은 거요!'); //크툴루 신화
    era.printButton('「권속?」', 1);
    await era.input();
    await kitaru.say_and_wait('네!');
    await kitaru.say_and_wait('그러니까 신령님의 보살핌을 받는 존재라는 뜻이에요!');
    await kitaru.say_and_wait([
      '레이스 ',
      kitaru.get_uma_sex_title(),
      '가 그 중 하나죠!',
    ]);
    await era.printAndWait([
      '머리가 갑자기 지끈거리며, 눈앞의 오렌지색 ',
      kitaru.get_uma_sex_title(),
      '가 가물가물하게 비현실적으로 보이기 시작했다……',
    ]);
    await kitaru.say_and_wait('오! 맞다!');
    await era.printAndWait([
      '무언가 떠올랐는지, ',
      kitaru.sex,
      '는 ',
      me.get_colored_name(),
      '의 손을 맞잡고 방글방글 웃으며 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await kitaru.say_and_wait('만약 저도 나중에 신령님이 된다면요!');
    await kitaru.say_and_wait(['절대로 잊지 않고 ', callname, '께 신의 가호를 내려드릴게요!']);
    await era.printAndWait([
      '마치 언령이라도 발동한 것처럼 ',
      me.get_colored_name(),
      '의 의식이 다시 맑게 돌아왔다. 정신을 차린 ',
      me.get_colored_name(),
      '은(는) 즉시 ',
      kitaru.get_colored_name(),
      '에게 오늘의 학습 계획을 시작하자고 재촉했다.',
    ]);
    wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 10);
  } else if (event_object?.arg === 'luck_name') {
    await print_event_name('운을 불러오는 이름', kitaru);
    await era.printAndWait([
      '최근 학업 성적이 좋지 않아, ',
      kitaru.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 지시에 따라 트레이닝실에 남아서 자습을 하게 되었다.',
    ]);
    await era.printAndWait('달그락……');
    await era.printAndWait([
      '오늘의 감독 역인 ',
      me.get_colored_name(),
      '이(가) 후쿠가 공부를 잘하고 있는지 확인하려던 찰나, 문을 열기도 전에 책상 위에서 주사위가 굴러가는 소리가 들려왔다.',
    ]);
    await era.printAndWait([
      '문을 등지고 앉은 ',
      kitaru.get_teen_sex_title(),
      '가 무언가에 잔뜩 집중한 채 고민에 빠져 있는 듯했다.',
    ]);
    await kitaru.say_and_wait('나나후쿠진……');
    await kitaru.say_and_wait('스이쇼우……');
    await kitaru.say_and_wait('레에우고……');
    await kitaru.say_and_wait('으음…… 역시 『후쿠키타루(복이 온다)』라고 지어 두길 잘한 걸까?');
    await era.printAndWait(
      '연습장에 연신 무언가를 끼적이는 것을 보니, 꽤나 중요한 일인 모양이다.',
    );
    era.printButton('「공부는 잘 돼가?」', 1);
    era.printButton('「무슨 생각 해?」', 2);
    await era.input();
    await kitaru.say_and_wait('아이쿠! 마침 잘 오셨어요!');
    await kitaru.say_and_wait([callname, '!']);
    await era.printAndWait([
      '딴짓을 하다가 들켰는데도 전혀 부끄러워하는 기색 없이, ',
      kitaru.get_colored_name(),
      '는 눈을 반짝이며 들어오는 ',
      me.get_colored_name(),
      '을(를) 쳐다보았다.',
    ]);
    await kitaru.say_and_wait(
      '그게 말이죠, 사실 요즘 성적이 안 나오는 게 운이 없어서 그런 게 아닐까 생각 중이었거든요!',
    );
    await kitaru.say_and_wait('이름을 바꾸면 좀 나아지지 않을까요?');
    await kitaru.say_and_wait('자, 보세요!');
    await era.printAndWait([
      kitaru.sex,
      '는 원래 계산 과정을 적어야 할 연습장을 ',
      me.get_colored_name(),
      '에게 내밀었다. 그곳에는 ',
      kitaru.get_colored_name(),
      '가 생각해낸 이름들이 빼곡하게 적혀 있었다.',
    ]);
    await kitaru.say_and_wait('우으…… 하지만 이렇게 많이 썼는데도 영 감이 안 오네요!');
    await kitaru.say_and_wait([
      '역시 원래의 ',
      kitaru.get_colored_name(),
      '가 제일 나은 것 같아요!',
    ]);
    await era.printAndWait('그렇게 말하며 눈앞의 오렌지색 찐빵이 눈에 띄게 시무룩해졌다.');
    era.printButton('위로한다 (스킬 포인트 +10)', 1);
    era.printButton('나간다 (모든 능력치 +3, 하지만……)', 2);
    if ((await era.input()) === 1) {
      await me.say_and_wait('딱히 헛수고는 아니야!');
      await kitaru.say_and_wait('에엣! 왜요?');
      await me.say_and_wait('음……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 추궁하는 듯한 시선 속에서, ',
        me.get_colored_name(),
        '은(는) 무심결에 나중에라도 도움이 될 만한 상황을 내뱉었다.',
      ]);
      await me.say_and_wait('예를 들면 나중에 태어날 아이의 이름이라든가?');
      await kitaru.say_and_wait('에…… 아이 이름요?');
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait(['저랑 ', callname, ' 사이의 아이 말인가요?']);
      if (love >= 75) {
        await kitaru.say_and_wait([
          '아앗! ',
          callname,
          ', 벌써부터 아이 생각까지 하시는 건가요?!',
        ]);
        await kitaru.say_and_wait('아이코!!!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 머리를 가볍게 콩 쥐어박자, 엉뚱한 상상을 하던 ',
          kitaru.sex,
          '는 드디어 공부를 계속할 수 있게 되었다.',
        ]);
      } else {
        await kitaru.say_and_wait('아아악!!!');
        await era.printAndWait([
          '자신이 방금 무슨 말을 했는지 뒤늦게 깨달은 ',
          kitaru.get_colored_name(),
          '가 비명을 질렀다.',
        ]);
        await era.printAndWait([
          '결국 얼굴이 새빨개진 ',
          kitaru.get_colored_name(),
          '에게 등 떠밀려 방 밖으로 쫓겨나고 말았다.',
        ]);
      }
      wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 10);
    } else {
      await era.printAndWait(['', kitaru.get_colored_name(), '에게 공부를 계속하게 했다.']);
      await era.printAndWait([
        '웬일인지 ',
        kitaru.get_colored_name(),
        '의 기분이 나빠졌다.',
      ]);
      wait_flag = get_attr_and_print_in_event(56, new Array(5).fill(3), 0);
      wait_flag = sys_change_motivation(56, -1) || wait_flag;
    }
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};