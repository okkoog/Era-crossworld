const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/** @param {HookArg} hook */
module.exports = async function (hook) {
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);

  if (!edu_marks.church && Math.random() < 0.1) {
    edu_marks.church++;
    await print_event_name('신령 포획 작전', tachyon);
    await era.printAndWait([
      '오늘, ',
      me.get_colored_name(),
      '이(가) ',
      tachyon.get_colored_name(),
      '과 함께 신사에 갔을 때……',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '! 어서 서두르게! 『신령님』을 기다리게 하면 못쓰지 않나!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 흥분해서 신사 계단을 뛰어 올라가 뒤돌아보며 외쳤다.',
    ]);
    await era.printAndWait([
      '애당초 인간의 몸으로 ',
      tachyon.get_uma_sex_title(),
      '를 따라잡을 수 있을지는 차치하고, 물리적인 불가능함 외에도,',
    ]);
    await era.printAndWait([
      '정신적으로도 ',
      me.get_colored_name(),
      '은(는) 앞으로 벌어질 행위를 필사적으로 거부하고 싶었으나, 담당의 제멋대로인 요구에 ',
      me.get_colored_name(),
      '은(는) 그저 쓴웃음을 지으며 억지로 따라갈 수밖에 없었다.',
    ]);
    era.println();
    await era.printAndWait('사건의 발단은…… 설명하자면 복잡하지만, 동시에 간단하기도 했다.');
    await era.printAndWait('한마디로 요약하자면 이렇다.');
    era.println();
    await tachyon.say_and_wait([
      callname,
      ', 자네도 알다시피 나는 평소에 영혼이나 귀신 같은 존재를 믿지 않네.',
    ]);
    await tachyon.say_and_wait(
      '하지만 제대로 확인하기도 전에 부정하는 것은 연구자로서 올바른 태도가 아니지.',
    );
    await me.say_and_wait('응, 응.');
    await tachyon.say_and_wait('그런데 어떻게 검증해야 할까 고민하던 차에, 예전부터 전해 내려오는 설이 하나 떠올랐네.');
    await tachyon.say_and_wait('이른바 귀신이나 신령이라는 것은, 사실 자연계에 떠도는 에너지 덩어리에 불과하다는 설이지.');
    await tachyon.say_and_wait(
      '비록 편향된 견해일 수 있겠으나, 그것을 토대로 검증을 진행할 수는 있을 것 같더군.',
    );
    await me.say_and_wait('응, 응……');
    era.println();
    await tachyon.say_and_wait(
      '그래서, 이러쿵저러쿵해서 신사로 신령을 포획하러 가세!',
    );
    await me.say_and_wait('응…… 어?');
    era.println();
    await era.printAndWait(
      '만약 정말로 일반적인 인간이 감지하거나 알아챌 수 없는 무언가가 존재한다면,',
    );
    await era.printAndWait('그 존재 자체에도 반드시 에너지가 필요할 터였다.');
    await era.printAndWait(
      '따라서 비정상적인 에너지 소모가 감지되는 곳을 탐측 기준으로 삼았으나,',
    );
    await era.printAndWait('도심지는 온갖 잡다한 간섭이 너무 많았다.');
    await era.printAndWait(
      '그러니 탐사하기에 가장 적합한 곳은 역시 외딴 곳에 위치한 신사였다.',
    );
    await era.printAndWait(
      '게다가 신이라고 불릴 정도라면 에너지의 등급 또한 일반적인 귀신과는 다를 것이며,',
    );
    await era.printAndWait(
      '만약 신사에서조차 이른바 신령이라는 것을 포착하지 못한다면, 그런 존재는 실존하지 않는다고 단정 지어도 무방하리라………',
    );
    era.println();
    await era.printAndWait('요컨대, 대략적으로 그런 불경한 이유 때문이었다.');
    await era.printAndWait([
      me.get_couple_title(),
      '은(는) 오늘 사람의 발길이 닿지 않는 외진 신사를 찾았다.',
    ]);
    await me.say_and_wait(
      '나무삼, 부디 세 여신님께서 넓은 아량으로 이런 사소한 일은 개의치 마시길 바랍니다. 간절히 부탁드립니다. 나무아미타불, 아멘.',
      true,
    );
    era.println();
    await era.printAndWait([
      '매우 내키지 않는 마음을 안고, ',
      me.get_colored_name(),
      '은(는) 마침내 신사에 올라섰다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 죽기 살기로 애원한 끝에, ',
      tachyon.get_colored_name(),
      '은 ',
      tachyon.sex,
      '의 손에 들린 정체불명의 에너지 탐측기를 사용하기 전에 우선 참배를 한 번 하여 경의를 표하기로 마지못해 승낙했다.',
    ]);
    era.println();
    await era.printAndWait([
      '그리하여 ',
      me.get_couple_title(),
      '은 두 손을 모으고 신사를 향해 경배했다……',
    ]);
    await tachyon.say_and_wait('좋아! 그럼 사설은 이쯤 하고 바로 시작해보지……!');
    era.println();
    await era.printAndWait([
      '참배가 끝나자마자 ',
      tachyon.get_colored_name(),
      '은 옆에 두었던 에너지 탐측기를 들어 신사 방향을 향해 조준하고 탐측을 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그저 옆에서 쓴웃음을 지으며 신령님께서 넓은 아량으로 어린아이의 치기 어린 행동이라 여겨주시길 기도할 뿐이었다.',
    ]);
    era.println();

    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '음음…… 음음……! 잠깐! ',
        callname,
        '! 이리 와서 좀 보게, 여기 뭔가 있는 것 같은데………',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 부름에 서둘러 달려갔으나, ',
        tachyon.sex,
        '가 어느 한 지점을 탐측한 뒤 갑자기 움직임을 멈춘 것을 발견했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 서둘러 다가가 ',
        tachyon.sex,
        '의 어깨를 두드리며 괜찮은지 확인하려 했으나, ',
        tachyon.sex,
        '가 갑자기 ',
        me.get_colored_name(),
        '을(를) 바닥에 덮쳐버렸다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        me.get_colored_name(),
        '의 두 손을 바닥에 눌러 제압했고, ',
        me.get_colored_name(),
        '은(는) 하늘을 향해 누운 채 자신을 짓누르고 있는 ',
        tachyon.get_colored_name(),
        '을 바라보았다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 눈빛은 냉혹했으나, 그 냉혹함 아래에는 마치 광기 서린 열망이 숨겨져 있는 듯했다.',
      ]);
      await era.printAndWait('마치 먹잇감을 포착하고 사냥을 시작하려는 고양잇과 동물 같았다.');
      era.println();
      await me.say_and_wait(
        [
          '이거 정말로 천벌을 받은 건가…… 아니, 그런데 왜 천벌을 받는 게 ',
          tachyon.sex,
          '가 아니라 나인 거냐고!?',
        ],
        true,
      );
      era.println();
      await era.printAndWait('온갖 말이 목구멍까지 차올랐으나 무력한 체념 속으로 침몰했다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그저 눈을 뜨고 ',
        tachyon.sex,
        '의 다음 행동을 지켜볼 수밖에 없었다.',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 저항할 의지를 잃은 것을 확인하자, ',
        tachyon.sex,
        '는 한쪽 손을 놓더니 ',
        me.get_colored_name(),
        '의 셔츠 단추를 풀기 시작했다.',
      ]);
      era.println();
      await me.say_and_wait('아아, 이래서는 트레이너 실격이야……', true);
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        me.get_colored_name(),
        '의 상의를 벌리고는……',
      ]);
      era.println();
      await tachyon.say_and_wait('야옹～～～');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 새끼 고양이 같은 울음소리를 내며 고양이처럼 ',
        me.get_colored_name(),
        '의 품속으로 파고들어 기분 좋은 듯 가르릉거리는 소리를 냈다.',
      ]);
      await era.printAndWait([
        '물론 행동이 아무리 고양이 같다 한들, ',
        tachyon.sex,
        '의 몸이 ',
        tachyon.get_uma_sex_title(),
        '의 몸이라는 사실은 변하지 않았다.',
      ]);
      await era.printAndWait([
        '새끼 고양이처럼 셔츠 안으로 파고들고 싶어 하는 듯했지만, ',
        me.get_colored_name(),
        '의 시선에서 보기에,',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 행위는 그저 상의를 풀어헤친 뒤 ',
        me.get_colored_name(),
        '의 맨가슴에 몸을 비벼대는 것에 불과했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('야옹～～ 야오옹～ 야옹');
      era.println();
      await era.printAndWait([
        '그런 접촉만으로는 만족스럽지 못한 듯, ',
        tachyon.sex,
        '는 방식을 바꾸어 ',
        me.get_colored_name(),
        '의 양손을 끌어당겨 ',
        me.get_colored_name(),
        '의 두 손이 ',
        tachyon.sex,
        '의 배 위에 겹쳐지도록 만들었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 틈을 타 일어나려 했으나, ',
        me.get_colored_name(),
        '의 움직임을 눈치챈 뒤 힘껏 내리누르는 무게감에 ',
        me.get_colored_name(),
        '은(는) 다시 꼼짝도 할 수 없게 되었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그저 계속해서 ',
        tachyon.sex,
        '가 ',
        me.get_colored_name(),
        '의 손을 포옹하는 자세로 배치하는 것을 내버려 둘 수밖에 없었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        me.get_colored_name(),
        '의 손을 고정한 뒤, 몸을 돌려 뺨을 ',
        me.get_colored_name(),
        '의 가슴팍에 꾹 밀착시키고는 만족스러운 소리를 냈다.',
      ]);
      era.printButton('「……타키온?」', 1);
      await era.input();
      await era.printAndWait([
        '이 작은 고양이는 대답이 없었다. 점차 ',
        tachyon.sex,
        '의 호흡은 평온해졌고, 그리고……',
      ]);
      era.println();
      await tachyon.say_and_wait('zzz…… 야옹…… zzz……');
      era.println();
      await era.printAndWait([
        '그렇게 ',
        me.get_colored_name(),
        '의 가슴팍에 기대어 잠이 들어버렸다.',
      ]);
      await era.printAndWait([
        '지금의 ',
        me.get_colored_name(),
        '(이)라면 ',
        tachyon.sex,
        '에게서 빠져나올 수 있었으나……',
      ]);
      era.println();
      await era.printAndWait([
        '지금 ',
        tachyon.get_colored_name(),
        '의 모습은 명백히 정상이 아니었다.',
      ]);
      await era.printAndWait('하지만 어찌 됐든, 아까부터 이렇게 휘둘렸으니');
      await era.printAndWait(
        '잠든 지금, 스스로 약간의 보상을 챙기는 정도는 괜찮지 않을까?',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '를 안고 있던 팔의 힘을 살짝 풀고 한쪽 손을 위로 뻗었다…………',
      ]);
      era.println();
      await era.printAndWait([
        '부드럽다, 기분 좋아…… 과연, 이것이 ',
        tachyon.get_uma_sex_title(),
        '의………',
      ]);
      era.println();
      await era.printAndWait('귀로군.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 이 작은 고양이의 머리를 부드럽게 쓰다듬으며, 이따금 정수리에 난 귀를 조물거렸다. 부드러우면서도 탄력 있는 폭신폭신한 촉감에 ',
        me.get_colored_name(),
        '은(는) 참지 못하고 자꾸만 손을 움직였다.',
      ]);
      era.println();
      await tachyon.say_and_wait('냐아…… 가르릉…… 야옹야옹');
      era.println();
      await era.printAndWait([
        '꿈속의 고양이도 귀여운 소리를 내며, 마치 ',
        me.get_colored_name(),
        '에게 계속해달라고 격려하는 듯했다.',
      ]);
      await era.printAndWait('위험해…… 이 말랑말랑한 촉감…… 빠져들 것 같아………');
      era.println();
      await era.printAndWait([
        '어느샌가 ',
        me.get_colored_name(),
        '도 꿈나라로 빠져들었다…………',
      ]);
      era.drawLine();
      await tachyon.say_and_wait('아아아아앗!!! 내 탐측기가아아아아!!!');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 비명을 지르는 ',
        tachyon.get_colored_name(),
        '을 보며 쓴웃음을 지었다.',
      ]);
      await era.printAndWait([
        '이전에 무슨 일이 있었는지는 모르겠지만, ',
        me.get_couple_title(),
        '은 갑자기 신사에서 정신을 잃었고, 다시 깨어났을 때 ',
        tachyon.get_colored_name(),
        '은 ',
        tachyon.sex,
        '가 (아마도) 거금을 들여 산 탐측기가 고장 나서 움직이지 않는 것을 발견했다.',
      ]);
      await era.printAndWait(
        '이상하게도 두 사람의 기억은 참배하는 순간에 멈춰 있었고, 참배 후에 무슨 일이 벌어졌는지는 전혀 기억나지 않았다.',
      );
      await era.printAndWait([
        '하지만 왠지 모르게 ',
        me.get_colored_name(),
        '은(는) 몸이 아주 개운한 기분이 들었다. 마치 혼절하기 전에 스트레스를 해소할 만한 무언가 활발한 활동이라도 한 것처럼.',
      ]);
      await era.printAndWait([
        '……',
        me.get_colored_name(),
        '은(는) 문득 깨어났을 때 셔츠 단추가 전부 풀려 있었던 일을 떠올렸다. 혼절하기 전에 대체 무슨 일이 있었던 것일까.',
      ]);
      await era.printAndWait('……역시 귀신이나 신령 같은 건 어느 정도 믿는 게 좋겠어.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '을 데리고 신사를 떠났다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '가 탐측기를 들고 신사 여기저기를 찔러보는 것을 지켜보았다. 저런 게 정말 효과가 있는지는 알 수 없었다.',
      ]);
      era.drawLine();
      await tachyon.say_and_wait('…………역시, 아무것도 없군.');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '이 잔뜩 실망한 기색으로 말했다.']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '가 왜 저렇게까지 실망하는지 이해할 수 없었다. 귀신이나 신령이 없다는 걸 증명하는 것이 ',
        tachyon.sex,
        '에게는 오히려 좋은 일이 아니었을까?',
      ]);
      await era.printAndWait([
        '의문 속에 ',
        me.get_couple_title(),
        '은(는) 그대로 산을 내려가 돌아갔다.',
      ]);
    }
    return;
  } else if (edu_marks.plan_b) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait('……신령인가.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 무미건조하게 신사를 바라보며 무슨 생각을 하는지 알 수 없는 표정을 지었다.',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('만약…… 신령이 있다면, 나는……');
        await era.printAndWait([tachyon.get_colored_name(), '은 무언가 혼잣말을 중얼거렸다.']);
      },
    );
  } else {
    buffer.push(
      async () => {
        await tachyon.say_and_wait(
          '내가 보기엔 신령이니 뭐니 하는 것들이 정말 존재할까 싶군? 아니, 세 여신에 대해서는 알고 있네만…… 결국 세 여신도 더 강력한 능력을 손에 넣은 범인에 불과……',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 서둘러 ',
          tachyon.get_colored_name(),
          '의 입을 막았다.',
        ]);
      },
      () =>
        tachyon.say_and_wait([
          '여어, ',
          callname,
          ', 신령 같은 것보다 얼른 돌아가서 실험이나 계속함세.',
        ]),
      () =>
        tachyon.say_and_wait(
          '대길이니 대흉이니 하는 것들? 상관없네. 그런 건 신이 결정하는 게 아니라 내가 스스로 만들어가는 것이니까.',
        ),
    );
  }
  await get_random_entry(buffer)();
};