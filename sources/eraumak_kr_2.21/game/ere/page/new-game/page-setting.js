const era = require('#/era-electron');

const { race_difficulty } = require('#/data/race/race-const');

const difficulties = [
  {
    n: '시조의 땅',
    d: [
      '세 여신은 모든 우마무스메에게 평등하게 가호를 내립니다.',
      { isDivider: true },
      '트레센의 우마무스메는 동기들보다 훨씬 뛰어납니다.',
      { isDivider: true },
      '우마무스메들은 순수한 사랑을 동경합니다.',
    ],
  },
  {
    n: '현세',
    d: [
      '세 여신의 시선이 더 이상 당신에게 향하지 않습니다.',
      { isDivider: true },
      '트레센 학원은 유명한 학원 중 하나일 뿐입니다.',
      { isDivider: true },
      '우마무스메들은 현실의 압박에 직면해 있습니다.',
    ],
  },
  {
    n: '트레이프',
    d: [
      '세 여신이 모든 우마무스메들을 돌보아 줍니다......오직 당신의 팀만을 빼고.',
      { isDivider: true },
      '레이스 중에는 항상 강적이 나타납니다.',
      { isDivider: true },
      '우마무스메들은 다양한 방법으로 스트레스를 해소하려 할 것입니다.',
      { isDivider: true },
      '트레센 학원은 트레이너에게 가혹하고 잔인합니다.',
    ],
  },
  {
    n: '세계의 적',
    d: [
      '세 여신이 당신과 당신의 팀을 외면합니다.',
      { isDivider: true },
      '레이스 중에는 항상 강적이 나타납니다.',
      { isDivider: true },
      '우마무스메들이 당신을 싫어합니다.',
      { isDivider: true },
      '트레센 학원은 트레이너에게 가혹하고 잔인합니다.',
    ],
  },
  {
    n: '고모라',
    d: [
      '세 여신이 당신의 팀을 각별히 보살펴 줍니다.',
      { isDivider: true },
      '트레센의 우마무스메는 동기들보다 훨씬 뛰어납니다.',
      { isDivider: true },
      '우마무스메들은 무슨 수를 써서라도 당신을 차지하려 들 것입니다.',
      { isDivider: true },
      '그 우마무스메들의 자손들도 말이죠.'
    ],
  },
  {
    n: 'Uma3rb',
    d: [
      '세 여신이 당신의 팀을 각별히 보살펴 줍니다.',
      { isDivider: true },
      '트레센의 우마무스메는 동기들보다 훨씬 뛰어납니다.',
      { isDivider: true },
      // '马娘可以以任意状态完赛（即使身上插满玩具）',
      // { isDivider: true },
      '우마무스메들은 항상 발정하고 있습니다.',
      { isDivider: true },
      '우마무스메들이 당신에게 덮쳐져도 저항할 수 없으며, 해를 입힐 수도 없습니다.',
    ],
  },
  {
    n: '소돔',
    d: [
      '고모라와 동일한 난이도입니다.',
      { isDivider: true },
      '하지만 모든 멤버가 후타나리입니다',
      { isDivider: true },
      '당신도 포함해서 말이죠.',
      { isDivider: true },
      '트레센 학원은 트레이너에게 가혹하고 잔인합니다.',
    ],
  },
  {
    n: '환상♂︎향',
    d: [
      '고모라와 동일한 난이도입니다.',
      { isDivider: true },
      '하지만 모든 멤버가 남성입니다.',
      { isDivider: true },
      '당신도 포함해서 말이죠. (임시)',
      { isDivider: true },
      '트레센 학원은 트레이너에게 가혹하고 잔인합니다.',
    ],
  },
].map((e) => {
  e.d = e.d.map((es) => {
    if (!es.isDivider) {
      return {
        content: es,
        display: 'inline-block',
      };
    }
    return es;
  });
  return e;
});

/** @param {number} theme */
function set_from_theme(theme) {
  switch (theme) {
    case 0:
      era.set('flag:훈련난이도', 25);
      era.set('flag:훈련보너스', 25);
      era.set('flag:레이스난이도', race_difficulty.easy);
      era.set('flag:부상가능성', 0);
      era.set('flag:우마무스메초기호감도', 150);
      era.set('flag:우마무스메초기애정도', 0);
      era.set('flag:호감상승보너스', 0);
      era.set('flag:애정상승보너스', 0);
      era.set('flag:극단적행위제한', 0);
      era.set('flag:턴당명성패널티', 0);
      era.set('flag:턴당호감도패널티', 5);
      era.set('flag:턴당애정도패널티', 0);
      era.set('flag:게임오버', 0);
      era.set('flag:후손애정제한', 0);
      era.set('flag:캐릭터성별', 0);
      era.set('flag:기본특성보유', 0);
      era.set('flag:아이템가격', -50);
      era.set('flag:보주소모량', -50);
      era.set('flag:인자소모량', -50);
      era.set('flag:강간저항', 1);
      era.set('flag:아이템영향', -25);
      era.set('flag:명성부족교체', 0);
      era.set('flag:스트레스획득', 0);
      era.set('flag:불충실패널티', 1);
      era.set('flag:로드대화', 0);
      era.set('flag:성기술자율학습', 0);
      era.set('flag:말딸신장', 1);
      break;
    case 1:
      era.set('flag:훈련난이도', 0);
      era.set('flag:훈련보너스', 0);
      era.set('flag:레이스난이도', race_difficulty.normal);
      era.set('flag:부상가능성', 1);
      era.set('flag:우마무스메초기호감도', 75);
      era.set('flag:우마무스메초기애정도', 0);
      era.set('flag:호감상승보너스', 0);
      era.set('flag:애정상승보너스', 0);
      era.set('flag:극단적행위제한', 0);
      era.set('flag:턴당명성패널티', -1);
      era.set('flag:턴당호감도패널티', 0);
      era.set('flag:턴당애정도패널티', 0);
      era.set('flag:게임오버', 0);
      era.set('flag:후손애정제한', 0);
      era.set('flag:캐릭터성별', 0);
      era.set('flag:기본특성보유', 0);
      era.set('flag:아이템가격', 0);
      era.set('flag:보주소모량', 0);
      era.set('flag:인자소모량', 0);
      era.set('flag:강간저항', 1);
      era.set('flag:아이템영향', -25);
      era.set('flag:명성부족교체', 0);
      era.set('flag:스트레스획득', 1);
      era.set('flag:불충실패널티', 1);
      era.set('flag:로드대화', 0);
      era.set('flag:성기술자율학습', 1);
      era.set('flag:말딸신장', 1);
      break;
    case 2:
      era.set('flag:훈련난이도', -25);
      era.set('flag:훈련보너스', -25);
      era.set('flag:레이스난이도', race_difficulty.hard);
      era.set('flag:부상가능성', 1);
      era.set('flag:우마무스메초기호감도', 75);
      era.set('flag:우마무스메초기애정도', 25);
      era.set('flag:호감상승보너스', 0);
      era.set('flag:애정상승보너스', 50);
      era.set('flag:극단적행위제한', 3);
      era.set('flag:턴당명성패널티', -1);
      era.set('flag:턴당호감도패널티', -10);
      era.set('flag:턴당애정도패널티', 0);
      era.set('flag:게임오버', 1);
      era.set('flag:후손애정제한', 0);
      era.set('flag:캐릭터성별', 0);
      era.set('flag:기본특성보유', 0);
      era.set('flag:아이템가격', 100);
      era.set('flag:보주소모량', 100);
      era.set('flag:인자소모량', 100);
      era.set('flag:강간저항', 1);
      era.set('flag:아이템영향', -25);
      era.set('flag:명성부족교체', 1);
      era.set('flag:스트레스획득', 1);
      era.set('flag:불충실패널티', 1);
      era.set('flag:로드대화', 1);
      era.set('flag:성기술자율학습', 1);
      era.set('flag:말딸신장', 1);
      break;
    case 3:
      era.set('flag:훈련난이도', -25);
      era.set('flag:훈련보너스', -25);
      era.set('flag:레이스난이도', race_difficulty.hard);
      era.set('flag:부상가능성', 1);
      era.set('flag:우마무스메초기호감도', -100);
      era.set('flag:우마무스메초기애정도', 0);
      era.set('flag:호감상승보너스', -50);
      era.set('flag:애정상승보너스', 0);
      era.set('flag:극단적행위제한', 1);
      era.set('flag:턴당명성패널티', -1);
      era.set('flag:턴당호감도패널티', -10);
      era.set('flag:턴당애정도패널티', 0);
      era.set('flag:게임오버', 3);
      era.set('flag:후손애정제한', 0);
      era.set('flag:캐릭터성별', 0);
      era.set('flag:기본특성보유', -4);
      era.set('flag:아이템가격', 100);
      era.set('flag:보주소모량', 100);
      era.set('flag:인자소모량', 100);
      era.set('flag:강간저항', 1);
      era.set('flag:아이템영향', -25);
      era.set('flag:명성부족교체', 1);
      era.set('flag:스트레스획득', 1);
      era.set('flag:불충실패널티', 0);
      era.set('flag:로드대화', 1);
      era.set('flag:성기술자율학습', 1);
      era.set('flag:말딸신장', 1);
      break;
    case 4:
      era.set('flag:훈련난이도', 25);
      era.set('flag:훈련보너스', 25);
      era.set('flag:레이스난이도', race_difficulty.easy);
      era.set('flag:부상가능성', 0);
      era.set('flag:우마무스메초기호감도', 225);
      era.set('flag:우마무스메초기애정도', 50);
      era.set('flag:호감상승보너스', -50);
      era.set('flag:애정상승보너스', 50);
      era.set('flag:극단적행위제한', 3);
      era.set('flag:턴당명성패널티', -1);
      era.set('flag:턴당호감도패널티', -10);
      era.set('flag:턴당애정도패널티', 1);
      era.set('flag:게임오버', 0);
      era.set('flag:후손애정제한', 1);
      era.set('flag:캐릭터성별', 0);
      era.set('flag:기본특성보유', 0);
      era.set('flag:아이템가격', 0);
      era.set('flag:보주소모량', 0);
      era.set('flag:인자소모량', 0);
      era.set('flag:강간저항', 1);
      era.set('flag:아이템영향', -25);
      era.set('flag:명성부족교체', 0);
      era.set('flag:스트레스획득', 0);
      era.set('flag:불충실패널티', 1);
      era.set('flag:로드대화', 1);
      era.set('flag:성기술자율학습', 1);
      era.set('flag:말딸신장', 1);
      break;
    case 5:
      era.set('flag:훈련난이도', 25);
      era.set('flag:훈련보너스', 25);
      era.set('flag:레이스난이도', race_difficulty.easy);
      era.set('flag:부상가능성', 0);
      era.set('flag:우마무스메초기호감도', 150);
      era.set('flag:우마무스메초기애정도', 0);
      era.set('flag:호감상승보너스', 0);
      era.set('flag:애정상승보너스', 0);
      era.set('flag:극단적행위제한', 0);
      era.set('flag:턴당명성패널티', 0);
      era.set('flag:턴당호감도패널티', 5);
      era.set('flag:턴당애정도패널티', 0);
      era.set('flag:게임오버', 0);
      era.set('flag:후손애정제한', 0);
      era.set('flag:캐릭터성별', 0);
      era.set('flag:기본특성보유', 1);
      era.set('flag:아이템가격', 0);
      era.set('flag:보주소모량', -50);
      era.set('flag:인자소모량', 0);
      era.set('flag:강간저항', 0);
      era.set('flag:아이템영향', 0);
      era.set('flag:명성부족교체', 0);
      era.set('flag:스트레스획득', 0);
      era.set('flag:불충실패널티', 0);
      era.set('flag:로드대화', 0);
      era.set('flag:성기술자율학습', 0);
      era.set('flag:말딸신장', 1);
      break;
    case 6:
      era.set('flag:훈련난이도', 25);
      era.set('flag:훈련보너스', 25);
      era.set('flag:레이스난이도', race_difficulty.easy);
      era.set('flag:부상가능성', 0);
      era.set('flag:우마무스메초기호감도', 225);
      era.set('flag:우마무스메초기애정도', 50);
      era.set('flag:호감상승보너스', -50);
      era.set('flag:애정상승보너스', 50);
      era.set('flag:극단적행위제한', 2);
      era.set('flag:턴당명성패널티', -1);
      era.set('flag:턴당호감도패널티', -10);
      era.set('flag:턴당애정도패널티', 1);
      era.set('flag:게임오버', 0);
      era.set('flag:후손애정제한', 1);
      era.set('flag:캐릭터성별', 10);
      era.set('flag:기본특성보유', 0);
      era.set('flag:아이템가격', 0);
      era.set('flag:보주소모량', 0);
      era.set('flag:인자소모량', 0);
      era.set('flag:강간저항', 1);
      era.set('flag:아이템영향', -25);
      era.set('flag:명성부족교체', 1);
      era.set('flag:스트레스획득', 0);
      era.set('flag:불충실패널티', 1);
      era.set('flag:로드대화', 1);
      era.set('flag:성기술자율학습', 1);
      era.set('flag:말딸신장', 1);
      break;
    case 7:
      era.set('flag:훈련난이도', 25);
      era.set('flag:훈련보너스', 25);
      era.set('flag:레이스난이도', race_difficulty.easy);
      era.set('flag:부상가능성', 0);
      era.set('flag:우마무스메초기호감도', 225);
      era.set('flag:우마무스메초기애정도', 50);
      era.set('flag:호감상승보너스', -50);
      era.set('flag:애정상승보너스', 50);
      era.set('flag:극단적행위제한', 2);
      era.set('flag:턴당명성패널티', -1);
      era.set('flag:턴당호감도패널티', -10);
      era.set('flag:턴당애정도패널티', 1);
      era.set('flag:게임오버', 0);
      era.set('flag:후손애정제한', 1);
      era.set('flag:캐릭터성별', 1);
      era.set('flag:기본특성보유', 0);
      era.set('flag:아이템가격', 0);
      era.set('flag:보주소모량', 0);
      era.set('flag:인자소모량', 0);
      era.set('flag:강간저항', 1);
      era.set('flag:아이템영향', -25);
      era.set('flag:명성부족교체', 1);
      era.set('flag:스트레스획득', 0);
      era.set('flag:불충실패널티', 1);
      era.set('flag:로드대화', 1);
      era.set('flag:성기술자율학습', 1);
      era.set('flag:말딸신장', 1);
  }
  if (era.get('cflag:0:템플릿캐릭터') > 0) {
    era.set('flag:명성부족교체', 0);
  }
}

async function page_settings() {
  let flag_default = true,
    flag_setting = false;
  let theme;
  era.set('flag:튜토리얼', Number(!era.get('global:튜토리얼')));
  era.set('flag:메지로성스타일', 1);
  set_from_theme((theme = 1));

  while (flag_default) {
    await era.clear();
    const buffer = [];
    buffer.push({ config: { content: '게임 모드' }, type: 'divider' });
    difficulties.slice(0, 4).forEach((e, i) => {
      buffer.push(
        {
          accelerator: i,
          config: { width: 3 },
          content: e.n,
          type: 'button',
        },
        {
          config: { width: 21 },
          content: e.d,
          type: 'text',
        },
      );
    });
    buffer.push(
      {
        accelerator: 98,
        config: { buttonType: era.get('flag:튜토리얼') ? 'warning' : 'info' },
        content: '튜토리얼 표시',
        type: 'button',
      },
      {
        content: '\n* 처음 플레이하시는 분들은 【시조의 땅】 또는 【현세】 모드로 시작하시기를 강력히 권장합니다!',
        type: 'text',
      },
    );
    buffer.push(
      {
        accelerator: 10,
        config: { align: 'center', width: 12 },
        content: '난이도 커스텀',
        type: 'button',
      },
      {
        accelerator: 99,
        config: { align: 'center', width: 12 },
        content: '타이틀로 돌아가기',
        type: 'button',
      },
    );
    era.printMultiColumns(buffer);
    const ret = await era.input();
    switch (ret) {
      case 10:
        flag_default = false;
        flag_setting = true;
        break;
      case 98:
        era.set('flag:튜토리얼', 1 - era.get('flag:튜토리얼'));
        break;
      case 99:
        return true;
      default:
        set_from_theme(ret);
        return false;
    }
  }

  await era.clear();
  let selected_setting = undefined,
    flag_print = true;
  while (flag_setting) {
    const buffer = [];
    buffer.push([
      { config: { content: '프리셋' }, type: 'divider' },
      ...difficulties.map((e, i) => {
        return {
          accelerator: i,
          config: {
            buttonType: theme === i ? 'warning' : 'info',
            width: 3,
          },
          content: e.n,
          type: 'button',
        };
      }),
    ]);
    if (difficulties[theme]) {
      buffer[0].push({
        config: { align: 'center' },
        content: difficulties[theme].d,
        type: 'text',
      });
    }

    const options = [
      {
        key: '훈련난이도',
        options: [
          { l: '하', v: 25 },
          { l: '중', v: 0 },
          { l: '상', v: -25 },
        ],
      },
      {
        key: '훈련보너스',
        label: '트레이닝 보너스',
        options: [
          { l: '우수', v: 25 },
          { l: '보통', v: 0 },
          { l: '열악', v: -25 },
        ],
      },
      {
        key: '레이스난이도',
        options: [
          { l: '쉬움', v: race_difficulty.easy },
          { l: '보통', v: race_difficulty.normal },
          { l: '어려움', v: race_difficulty.hard },
        ],
      },
      {
        key: '부상가능성',
        label: '우마무스메의 부상 가능성',
        options: [
          { l: '없음', v: 0 },
          { l: '있음', v: 1 },
        ],
      },
      {
        key: '스트레스획득',
        label: '우마무스메의 스트레스',
        options: [
          { l: '없음', v: 0 },
          { l: '있음', v: 1 },
        ],
      },
      {
        key: '아이템가격',
        label: '상점 주인',
        options: [
          { l: '자선사업가', v: -50 },
          { l: '규칙준수', v: 0 },
          { l: '간교함', v: 100 },
        ],
      },
      {
        key: '보주소모량',
        label: '스킬 트레이닝에 소모되는 자원',
        options: [
          { l: '낮음', v: -50 },
          { l: '보통', v: 0 },
          { l: '높음', v: 100 },
        ],
      },
      {
        key: '인자소모량',
        label: '레이스 트레이닝에 소모되는 자원',
        options: [
          { l: '낮음', v: -50 },
          { l: '보통', v: 0 },
          { l: '높음', v: 100 },
        ],
      },
      {
        label: '게임 엔딩 조건',
        key: '게임오버',
        options: [
          { l: '끝나지 않는 연회', v: 0 },
          { l: '+팬들의 습격', v: 1 },
          { l: '+돈의 노예', v: 2 },
          { l: '+사랑의 덫', v: 3 },
        ],
        tip: (v) =>
          [
            '당신의 트레이너 생활은 명성이 제로가 될 때까지 계속될 것입니다.',
            '우마무스메의 생애 성적이 당신의 생사를 좌우할 것입니다……만약 그녀가 조금이라도 당신을 싫어하게 된다면 육성의 끝이 곧 당신의 삶의 끝이 될 것입니다.',
            '우마무스메의 채무 또한 당신의 운명을 좌우할 것입니다. 어른의 책임을 지고, 자신의 자산을 잘 관리하십시오.',
            '가망이 없는 사랑은 어떤 결실을 맺게 될까요? 이제 당신에게도 사랑이 구축한 감옥 속에서 당신의 삶을 마감할 기회가 있습니다.',
          ][v],
      },
      {
        key: '턴당명성패널티',
        label: '턴 당 명성 변화',
        options: [
          { l: '점점 늘어남', v: 1 },
          { l: '변화 없음', v: 0 },
          { l: '점점 감소함', v: -1 },
        ],
        tip: (v) =>
          [
            '당신의 명성은 천천히 높아질 것입니다.',
            '당신의 명성은 다른 요소가 없다면 변하지 않습니다.',
            '당신의 명성은 점점 떨어져 갈 것입니다.',
          ][v],
      },
      {
        disabled: era.get('cflag:0:템플릿캐릭터') > 0,
        key: '명성부족교체',
        label: '명성 0이 된다면',
        options: [
          { l: '암울한 퇴장', v: 0 },
          { l: '어둠의 거래', v: 1 },
        ],
        tip: (v) =>
          [
            '명성을 전부 잃고, 모든 것이 끝났습니다…… 곧바로 타이틀로 돌아갑니다.',
            '명성이 제로가 된 후에도 계속하고 싶습니까? 설령 그 대가가 당신의 모든 것이더라도?',
          ][v],
      },
      {
        key: '캐릭터성별',
        options: [
          { l: '여자만', v: 0 },
          { l: '남자만', v: 1 },
          { l: '후타나리', v: 10 },
          { l: '원본 투영', v: 99 },
        ],
        tip: (v) =>
          [
            '미녀들에게 포위당했습니다!',
            '청춘의 땀을 흘리고 있는 미남들……',
            '신사 숙녀……아니, 수, 숙남녀 여러분??',
            '귀걸이의 위치는 무엇을 의미하는지 아십니까?',
          ][v],
      },
      {
        key: '우마무스메초기호감도',
        label: '우마무스메 초기 호감도',
        options: [
          { l: '열정적', v: 225 },
          { l: '우호적', v: 150 },
          { l: '쌀쌀함', v: 75 },
          { l: '의심', v: 0 },
          { l: '실망', v: -100 },
        ],
      },
      {
        key: '호감상승보너스',
        label: '호감 상승 난이도',
        options: [
          { l: '쉬움', v: 50 },
          { l: '보통', v: 0 },
          { l: '어려움', v: -50 },
        ],
      },
      {
        key: '턴당호감도패널티',
        label: '호감도 변화',
        options: [
          { l: '개연성 MAX', v: 5 },
          { l: '평범', v: 0 },
          { l: '현실성 MAX', v: -10 },
        ],
        tip: (v) =>
          [
            '우마무스메들의 당신에 대한 호감이 날로 커져 갑니다.',
            '우마무스메들의 호감은 시간의 영향을 받지 않습니다.',
            '우마무스메들이 점점 더 당신을 미워하게 될 것입니다.',
          ][v],
      },
      {
        key: '우마무스메초기애정도',
        label: '우마무스메 초기 애정',
        options: [
          { l: '보통', v: 0 },
          { l: '썸', v: 25 },
          { l: '애욕', v: 50 },
        ],
      },
      {
        key: '애정상승보너스',
        label: '애정 상승 난이도',
        options: [
          { l: '보통', v: 0 },
          { l: '쉬움', v: 50 },
        ],
      },
      {
        key: '턴당애정도패널티',
        label: '애정의 변화',
        options: [
          { l: '딱히 없음', v: 0 },
          { l: '점점 끌림', v: 1 },
        ],
        tip: (v) =>
          [
            '자발적인 행동만이 우마무스메가 당신을 사랑하도록 만들 수 있습니다.',
            '우마무스메들이 점점 당신에게 끌려 의존하게 될 것입니다. 설령 아무것도 하지 않더라도……',
          ][v],
      },
      {
        label: '불륜에 대한 인식',
        key: '불충실패널티',
        options: [
          { l: '아량이 넓음', v: 0 },
          { l: '용서 못함', v: 1 },
        ],
        tip: (v) => ['우마무스메는 오직 당신과 함께하는 소소한 순간들만을 소중히 여깁니다.', '독점욕을 주의하세요.....'][v],
      },
      {
        key: '극단적행위제한',
        label: '우마무스메의 극단적 행위',
        options: [
          { l: '하지 않음', v: 0 },
          { l: '가능함', v: 1 },
          { l: '최대한 억제', v: 2 },
          { l: '적극적', v: 3 },
        ],
        tip: (v) =>
          [
            '우마무스메들은 당신에게 절대 해를 끼치지 않을 것입니다, 순애최고.',
            '우마무스메들이 당신을 덮치거나 납치할 수는 있겠지만, 매우 낮은 확률로 일어날 것입니다.',
            '우마무스메들은 당신을 덮치거나 납치하려는 욕구를 최대한 억누를 겁니다……오래 버티지는 못 하겠지만요.',
            '당신이 보이지 않는 곳에서, 우마무스메들이 일그러진 웃음을 지으며 무언가를 준비하고 있습니다……',
          ][v],
      },
      {
        label: '선천적 특성',
        key: '기본특성보유',
        options: [
          { l: '음란마', v: 1 },
          { l: '운명대로', v: 0 },
          { l: '정결함', v: -1 },
          { l: '불감', v: -4 },
        ],
        tip: (v) =>
          [
            '내 눈에 비치는 것은 암컷뿐이다.',
            '모두가 유일무이한 존재입니다.',
            '우마무스메의 몸은 흠잡을 데 없이 완벽하고, 약점이 없습니다.',
            '우마무스메들에게 쾌감을 느끼게 하기란 극도로 어렵습니다.',
          ][v],
      },
      {
        key: '성기술자율학습',
        label: '캐릭터의 성기술 학습',
        options: [
          { l: '흥미 없음', v: 0 },
          { l: '적극 탐구', v: 1 },
        ],
      },
      {
        key: '강간저항',
        label: '캐릭터의 강간 저항',
        options: [
          { l: '밀면 쓰러짐', v: 0 },
          { l: '격렬히 저항', v: 1 },
        ],
      },
      {
        label: '장난감 들고 레이스',
        key: '아이템영향',
        options: [
          { l: '문제 없음', v: 0 },
          { l: '걷기조차 힘듬', v: -25 },
        ],
        tip: (v) =>
          [
            '어느 관객 「가끔 레이스가 좀 이상해질 때가 있어요. 참가자의 안색이라든가, 옷의 젖은 정도라든가…… 하지만 그래도 역시 흥미진진하네요」',
            '어느 관객 「눈을 뒤집어깐 채 비틀거리며 달리고, 코스는 온통 젖어 있고—— 명색이 아리마 기념인데, 좀 더 품위를 지켜줄 수 없나요!」'
          ][v],
      },
      {
        disabled: true,
        key: '메지로성스타일',
        label: '메지로 시티의 스타일',
        options: [
          { l: '자유', v: 0 },
          { l: '자애', v: 1 },
        ],
        tip: (v) => ['당신이 원하는 대로❤️', '메지로가 부르고 있어......'][v],
      },
      {
        key: '후손애정제한',
        label: '근친불륜',
        options: [
          { l: '불가능', v: 0 },
          { l: '가능', v: 1 },
        ],
        tip: (v) =>
          [
            '아이들은 당신을 사랑하는 마음 뿐……설령 당신이 스스로 깨지 않는 한 말이죠.',
            '아이들은 당신을 사랑하는 마음 뿐……일까요?'
          ][v],
      },
      {
        key: '말딸신장',
        label: '우마무스메의 키',
        options: [
          { l: '로리마망', v: 0 },
          { l: '평범한게 최고', v: 1 },
          { l: '지배당하고 싶어!', v: 2 },
        ],
        tip: (v) =>
          ['로리로 둘러싸인 천국……', '우마무스메들의 키는 자연히 분포할 것입니다.', '거대 우마무스메는 못 이기죠!'][v],
      },
      {
        key: '튜토리얼',
        label: '튜토리얼 표시',
        options: [
          { l: '이미 숙달했습니다!', v: 0 },
          { l: '처음에는 한번 보여주세요.', v: 1 },
        ],
      },
    ];
    buffer.push(
      [
        {
          config: {
            content: `게임 옵션`,
          },
          type: 'divider',
        },
      ],
      [],
    );
    let val_index;
    options.forEach((e, i) => {
      const val = era.get(`flag:${e.key}`);
      val_index = e.options.findIndex((o) => o.v === val);
      buffer.at(-1).push(
        {
          type: 'text',
          content: e.label || e.key,
          config: { width: 4 },
        },
        ...e.options.map((o, j) => {
          return {
            accelerator: 100 + i * 10 + j,
            config: {
              disabled: !!e.disabled,
              buttonType: val === o.v ? 'warning' : 'info',
              width: 4,
            },
            content: o.l,
            type: 'button',
          };
        }),
      );
      if (i < options.length - 1) {
        buffer.at(-1).push({
          config: { width: 20, offset: 4 },
          content:
            e.tip && (selected_setting === undefined || i === selected_setting)
              ? e.tip(val_index)
              : '',
          type: 'text',
        });
      }
    });
    buffer.at(-1).push(
      {
        accelerator: 998,
        config: { align: 'right', offset: 4, width: 4 },
        content: '게임 시작',
        type: 'button',
      },
      {
        accelerator: 999,
        config: { align: 'right', width: 4 },
        content: '타이틀로 돌아가기',
        type: 'button',
      },
    );
    if (
      selected_setting === undefined ||
      selected_setting === options.length - 1
    ) {
      buffer.push([
        {
          config: { width: 20, offset: 4 },
          content: options.at(-1)['tip']
            ? options.at(-1)['tip'](val_index)
            : '',
          type: 'text',
        },
      ]);
    }
    (flag_print ? era.printInColRows : era.replaceInColRows)(...buffer);
    flag_print = false;

    const ret = await era.input({ hideInput: true });
    switch (ret) {
      case 998:
        flag_setting = false;
        break;
      case 999:
        return true;
      default:
        if (ret >= 100) {
          const selected_index = ret % 10;
          selected_setting = (ret - 100 - selected_index) / 10;
          era.set(
            `flag:${options[selected_setting].key}`,
            options[selected_setting].options[selected_index].v,
          );
        } else {
          selected_setting = undefined;
        }
        break;
    }
    set_from_theme((theme = ret));
  }
  return false;
}

module.exports = page_settings;
