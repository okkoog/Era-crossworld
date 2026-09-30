const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

function back_basement() {
  const callname = sys_get_colored_callname(89, 0),
    grand = get_chara_talk(89),
    life_marks = new GrandLifeMarks(),
    me = get_chara_talk(0);
  if (life_marks.b_start) {
    era.print([
      me.get_colored_name(),
      '이(가) 반항할 수단을 찾고 있을 때, 문고리에서 갑자기 『철컥』 하는 소리가 들려왔다.',
    ]);
    era.println();

    grand.say([callname, '……일어나셨군요……']);
    era.println();

    era.print(['하지만 문 앞에 나타난 실루엣은, 상상했던 흉악한 괴한과는 거리가 멀었다.']);
    era.print([
      '작은 ',
      grand.get_uma_sex_title(),
      '가 등 뒤로 손을 돌리자, 맑은 소리와 함께 자물쇠가 반대 방향으로 다시 돌아갔다.',
    ]);
    era.print([
      '귀마개 아래의 자그마한 귀가 쫑긋거리며, 그 주인과 함께 한 걸음씩 다가와 ',
      me.get_colored_name(),
      '의 눈앞에서 멈춰 섰다.',
    ]);
    era.println();

    grand.say(['그곳…… 많이 아프시죠……']);
    era.println();

    era.print([
      grand.get_teen_sex_title(),
      '는 ',
      me.get_colored_name(),
      '의 뒷통수를 향해 떨리는 작은 손을 뻗더니, 잠시 머뭇거리다 이내 모자챙을 꾹 눌렀다.',
    ]);
    era.println();

    grand.say(['……죄송해요…… 제대로 설명할게요……']);
    grand.say(['할 수만 있다면…… 저도 이러고 싶지 않았어요……']);
    grand.say([
      callname,
      '을 상처 입히지 않도록…… 이번엔…… 제 곁을 떠나지 말아 주시겠어요……',
    ]);
  } else if (Math.random() < 0.5) {
    grand.say(['저기…… ', callname, ', 다녀왔어요.']);
    era.println();

    era.print([
      '철문을 열고 나타난 작은 ',
      grand.get_uma_sex_title(),
      '의 손에는 종이봉투가 들려 있었고, 포장을 보아하니 안에는 고기만두가 들어있는 듯했다.',
    ]);
    era.print([
      '같이 먹자는 ',
      me.get_colored_name(),
      '의 권유에 ',
      grand.get_teen_sex_title(),
      '는 그저 가볍게 고개를 저었다.',
    ]);
    era.print([
      '이미 먹고 온 걸까? 이유를 짐작하던 ',
      me.get_colored_name(),
      '이(가) 첫 입을 베어 물기도 전에, ',
      grand.get_teen_sex_title(),
      '의 배에서 먼저 꼬르륵 소리가 났다.',
    ]);
    era.println();

    grand.say(['……', callname, '은 이곳에 감금되어 있는데, 저 혼자 고기만두를 먹다니…… 그런 건.']);
    grand.say(['그런 생각을 하니까…… 왠지…… 아무것도 넘어가지 않아서요.']);
    grand.say(['제 걱정은 안 하셔도 돼요…… ', callname, '이 기뻐해 준다면…… 전 그걸로 만족하니까요……']);
  } else {
    era.print([
      '어렴풋이 들려오는 바깥의 빗소리에, ',
      me.get_colored_name(),
      '은(는) 춥고 축축한 공기를 깊게 들이마시고 초조함이 섞인 한숨을 내쉬었다.',
    ]);
    era.print(['갑자기 무거운 문이 열리며, 이어서 바닥에 물방울이 뚝뚝 떨어지는 소리가 들려왔다.']);
    era.println();

    grand.say(['다녀왔어요…… ', callname, '.']);
    era.println();

    era.print([
      '흠뻑 젖은 교복이 작은 ',
      grand.get_uma_sex_title(),
      '의 몸에 여기저기 달라붙어 있었다.',
    ]);
    era.print(['해군 모자는 빗물에 젖어 짙은 색으로 변했고, 본래 푹신하고 멋지던 짧은 머리카락은 얼어서 붉어진 뺨에 달라붙어 있었다.']);
    era.println();

    grand.say(['……이런 날씨에는…… 여기도 분명 엄청 습하겠죠……']);
    grand.say(['제가…… ', callname, '의…… 귀를 파드릴게요…… 에헤헤……']);
    era.println();

    era.print(['발밑에 이미 물웅덩이가 고일 정도가 된 슈발 그랑은 그런 것은 남 일이라는 듯한 태도로 다가왔다.']);
    era.print([
      me.get_colored_name(),
      '은(는) 인형처럼 굳어버린 ',
      grand.get_teen_sex_title(),
      '를 강제로 침대맡으로 끌어당겨 ',
      grand.sex,
      '에게 이불을 덮어주었다.',
    ]);
  }
}

module.exports = back_basement;