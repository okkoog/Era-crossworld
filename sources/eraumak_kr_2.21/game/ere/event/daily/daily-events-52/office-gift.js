const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

module.exports = async () => {
  const callname = sys_get_callname(52, 0),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  let random_range = 3;
  if (love === 100) {
    random_range = 11;
  } else if (love >= 75) {
    random_range = 9;
  } else if (love >= 50) {
    random_range = 7;
  } else if (love > 0) {
    random_range = 5;
  }
  switch (get_random_value(0, random_range)) {
    case 0:
      await urara.say_and_wait(['응? ', callname, ', 나한테 주는 선물이야? 고마워!']);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 꼬리를 살랑거리며, 기쁘게 ',
        me.get_colored_name(),
        '의 선물을 받았다.',
      ]);
      break;
    case 1:
      await urara.say_and_wait([
        callname,
        '가 선물을 주다니, 마침 나도 맛있는 게 있어서 ',
        callname,
        '랑 나누려고 했어! 헤헤~',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 웃으며 당근과 ',
        me.get_colored_name(),
        '의 손에 들린 선물을 맞교환했다.',
      ]);
      break;
    case 2:
      await urara.say_and_wait([
        '좋아! ',
        callname,
        '의 선물에 보답하기 위해서라도, 오늘의 우라라는 더 힘낼게!',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 선물을 받은 뒤, ',
        urara.get_colored_name(),
        '는 한층 더 기운이 넘치는 모습이었다.',
      ]);
      break;
    case 3:
      await urara.say_and_wait([
        '선물 고마워, ',
        callname,
        '! 우라라도 답례를 준비해야겠네! 에? 안 그래도 된다구?',
      ]);
      await era.printAndWait([
        '사실 ',
        urara.get_colored_name(),
        '는 답례를 거의 기억하지 못하지만, ',
        urara.sex,
        '의 웃는 얼굴을 볼 수 있다면 답례 따위는 중요하지 않았다.',
      ]);
      break;
    case 4:
      await urara.say_and_wait([
        sys_get_colored_callname(52, 47),
        '이 선물마다 의미가 다르다고 했는데, 그렇다면 ',
        callname,
        '의 선물은…… 역시 우라라가 더 빨리 달리기를 바라는 거겠지!',
      ]);
      await era.printAndWait([
        '여전히 ',
        urara.get_colored_name(),
        '다운 답변이었으나, 어쩐지 ',
        urara.sex,
        '가 마지막엔 다른 무언가를 생각한 듯한 기분이 들었다.',
      ]);
      break;
    case 5:
      await urara.say_and_wait([
        '그렇게 귀한 건 아니라고? 귀하든 아니든 우라라는 소중히 간직할 거야! 이건 ',
        callname,
        '의 선물이니까!',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 부드럽게 웃으며 선물을 받아들였고, ',
        urara.sex,
        '가 예전보다 훨씬 성숙해진 것 같은 느낌이 들었다.',
      ]);
      break;
    case 6:
      await urara.say_and_wait([
        '잘은 모르겠지만, ',
        callname,
        '의 선물을 받으면 몸이 따뜻해지는 기분이야! 이건 왜 그런 걸까……',
      ]);
      await era.printAndWait([
        '선물에 대해 이야기하고 있었으나, 얼굴을 붉힌 ',
        urara.get_colored_name(),
        '는 시종일관 열정적인 눈빛으로 ',
        me.get_colored_name(),
        '의 눈을 응시했다.',
      ]);
      break;
    case 7:
      await urara.say_and_wait([
        '고마워, ',
        callname,
        '! 그런데 이렇게 하면…… 여기에서도 ',
        callname,
        '의 냄새가 날까……?',
      ]);
      await era.printAndWait([
        '손에 든 선물을 빤히 바라보는 ',
        urara.get_colored_name(),
        '에게서 뿜어져 나오는 분위기가 조금 기묘하게 변해갔다.',
      ]);
      break;
    case 8:
      await urara.say_and_wait(
        '오늘은 특별한 날이야? 매일매일이 이런 특별한 날이었으면 좋겠네!',
      );
      await urara.say_and_wait([
        '그치만 특별한 날이 아니어도 괜찮아! 우라라에게는 ',
        callname,
        '랑 함께하는 매일매일이 특별하니까!',
      ]);
      await era.printAndWait([
        '선물을 품에 안고 ',
        me.get_colored_name(),
        '의 곁에 딱 달라붙어, 꼬리를 슬그머니 ',
        me.get_colored_name(),
        '의 다리에 감으며 작은 담당은 기쁘게 말했다.',
      ]);
      break;
    case 9:
      await urara.say_and_wait([
        '선물…… ',
        callname,
        '가 답례를 받기 싫다면, 그럼…… 우선 우라라의 「이것」부터 받아줘!',
      ]);
      await era.printAndWait([
        '귀를 쫑긋 세운 ',
        urara.get_colored_name(),
        '는 발꿈치를 들고 ',
        me.get_colored_name(),
        '이(가) 방심한 사이 뺨에 「쪽」 하고 기습 입맞춤을 한 뒤, 부끄러운 듯 물러났다.',
      ]);
      break;
    case 10:
      await urara.say_and_wait([
        '고마워, ',
        callname,
        '! ',
        '다음 레이스의 1착을 원해? 아니면 지금의 우라라를 안아주길 원해?',
      ]);
      await urara.say_and_wait([
        '있잖아, 우라라는 ',
        callname,
        '가 둘 다 가졌으면 좋겠어!',
      ]);
      await era.printAndWait([
        '천진난만한 어조로 신경을 자극하는 말을 내뱉는 ',
        urara.get_colored_name(),
        '의 갈구하는 듯한 눈동자 속에 ',
        me.get_colored_name(),
        '의 모습이 일렁였다……',
      ]);
      break;
    case 11:
      await urara.say_and_wait([
        '……',
        callname,
        ', 지금뿐만 아니라 우라라가 미래에 줄 답례도 기대해 줄 수 있을까?',
      ]);
      await era.printAndWait([
        '선물을 받은 ',
        urara.get_colored_name(),
        '는 조용히 아랫배 위에 손을 얹고, 상기된 얼굴로 ',
        me.get_colored_name(),
        '에게 모호한 질문을 던졌다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '가 대답을 기대하는 것이 아님을 깨달은 ',
        me.get_colored_name(),
        '은(는) 그저 머지않아 다가올 미래를 받아들일 마음의 준비를 할 뿐이었다.',
      ]);
  }
};