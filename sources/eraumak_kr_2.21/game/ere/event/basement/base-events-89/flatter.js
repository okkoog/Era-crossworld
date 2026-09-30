const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

async function flatter() {
  const callname = sys_get_colored_callname(89, 0),
    grand = get_chara_talk(89),
    me = get_chara_talk(0),
    life_marks = new GrandLifeMarks(),
    no_escape_check =
      era.get('exp:89:감금횟수') === 1 && life_marks.b_find_escape === 0;
  if (life_marks.b_strike) {
    life_marks.b_strike = 0;
    await grand.say_and_wait(['……붕, 붕대 다 감았어요. 옷장이…… 그렇게 넘어질 줄은 몰랐는데.']);
    await grand.say_and_wait([
      '저기, ',
      callname,
      '…… 왜 절 감싸신 거예요? 그냥 가만히 계셨으면 됐을 텐데……',
    ]);
    era.println();

    await era.printAndWait([
      '진실을 말할 수 없는 ',
      me.get_colored_name(),
      '은(는) 트레이너로서 당연한 일이라며 둘러댔다.',
    ]);
    await era.printAndWait([
      grand.get_colored_name(),
      '의 죄책감 어린 표정을 보니, ',
      me.get_colored_name(),
      '의 행동이 ',
      grand.sex,
      '의 결심을 크게 뒤흔든 모양이다.',
    ]);
    sys_like_chara(89, 0, 30, false);
  } else if (life_marks.b_battle_fail === 1) {
    life_marks.b_battle_fail++;
    await grand.say_and_wait([
      callname,
      '……좀, 좀 쉬실래요? 요즘…… 많이 피곤해 보이셔서.',
    ]);
    await grand.say_and_wait(['저, 제가 무, 무릎베개 해드릴게요……']);
    era.println();

    await era.printAndWait([
      grand.get_colored_name(),
      '의 부끄러워하는 제안을 따라 ',
      me.get_colored_name(),
      '은(는) ',
      grand.get_teen_sex_title(),
      '의 따뜻하고 부드러운 허벅지에 천천히 머리를 뉘었다.',
    ]);
    await era.printAndWait([
      '그런데 이유를 묻자 「식사하다가 자꾸 졸아서」라는 대답이 돌아와, ',
      me.get_colored_name(),
      '은(는) 영문을 알 수 없어 고개를 갸웃거렸다.',
    ]);
  } else if (no_escape_check && life_marks.b_flatter === 0) {
    await era.printAndWait([
      me.get_colored_name(),
      '의 억지스러운 비위를 맞추는 모습에, ',
      grand.get_colored_name(),
      '은(는) 꽤 흡족해하는 듯했다. 어린 ',
      grand.get_uma_sex_title(),
      '는 얌전히 침대 곁에 앉아 평소처럼 수줍게 웃어 보였다.',
    ]);
    era.println();

    await grand.say_and_wait([
      '둘뿐인 방이라니… 왠지 모르게, 자꾸…… 그리워져요.',
    ]);
    era.println();

    await era.printAndWait(['시간을 뚫고 나오는 말투 속에는 간과할 수 없는 외로움이 담겨 있었다.']);
    era.println();

    await grand.say_and_wait([
      '예전엔 우리 둘의 일상이 계속될 거라고만 생각했어요.',
    ]);
    await grand.say_and_wait([
      '언제부터였을까요…… ',
      callname,
      '의 곁에…… 저 말고 다른 사람이 나타난 건.',
    ]);
    await grand.say_and_wait([
      '질투심 때문에…… 당신에게 용서받지 못할 짓을 저질러 버렸죠…… 우리 관계는, 이제 무엇을 해도 예전으로 돌아갈 수 없겠죠……',
    ]);
    life_marks.b_flatter++;
  } else if (
    no_escape_check &&
    life_marks.b_flatter === 1 &&
    life_marks.b_ask_release === 4
  ) {
    await grand.say_and_wait([
      '사실…… 저도 후회한 적 있어요. ',
      callname,
      '을 감금하지 않았더라면 좋았을 텐데, 하고.',
    ]);
    await grand.say_and_wait(['……하지만…… 그래도 당신을 떠나보내고 싶지는 않아요.']);
    era.println();

    await era.printAndWait([
      grand.get_colored_name(),
      '은 말없이 고개를 숙였고, 모자에 가려져 표정은 보이지 않았지만 떨리는 손끝은 숨길 수 없었다.',
    ]);
    era.println();

    await grand.say_and_wait([
      '당신의 자유를 빼앗고, 이곳에 가둬버렸죠. 분명 당신은 이런 저를 미워할 게 뻔한데……',
    ]);
    await grand.say_and_wait([
      '하지만 알고 있어요…… 아무것도 하지 않으면, 당신은 영영 다시 돌아오지 않을지도 모른다는 걸……!',
    ]);
    await grand.say_and_wait(['부탁이에요…… ', callname, '…… 저를 당신 곁에 있게 해 주세요……']);
    life_marks.b_flatter++;
  } else if (no_escape_check && life_marks.b_flatter === 2) {
    await grand.say_and_wait(['저기, ', callname, '…… 웃어주세요……']);
    await grand.say_and_wait(['이렇게…… 당신이 하루하루 수척해지는 걸 보는 건…… 정말 견딜 수가 없어요……']);
    await grand.say_and_wait([
      '예전처럼, 제 머리를 쓰다듬어 주면서…… 제 장점을 좋아한다고 말해달란 말이에요……',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 억지로 미소를 지어 보였지만, 그걸 본 ',
      grand.get_colored_name(),
      '의 표정은 오히려 무너져 내렸다.',
    ]);
    era.println();

    await grand.say_and_wait(['아니에요…… 그런 게 아니에요…… 제가 원한 건…… 이런 당신이 아닌데……']);
    await grand.say_and_wait(['……이렇게 될 줄 알았더라면…… 정말로…… 으흑…… 으으으……']);
    life_marks.b_flatter++;
  } else {
    await grand.say_and_wait([
      '……',
      callname,
      ', 굳이 저랑 대화하려 애쓰지 않아도 괜찮아요……',
    ]);
    await grand.say_and_wait(['이제…… 어떻게 해야…… 당신을 곁에 둘 수 있을까요……?']);
    era.println();

    await era.printAndWait([
      '애써 유지해오던 어른의 존엄이, 몸과 함께 속절없이 무너져 내렸다.',
    ]);
    era.println();

    await grand.say_and_wait(['……당신이 절 좋아해 준다면…… 몸만이라도 괜찮아요.']);
    await grand.say_and_wait([callname, '…… 저…… 당신을 정말 소중히 여길게요❤️']);
  }
}

module.exports = flatter;