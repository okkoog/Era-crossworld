const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const { attr_names } = require('#/data/train-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {number} relation
 * @param {number} love
 */
module.exports = async (tachyon, me, callname, relation, love) => {
  await print_event_name('제2차 연도 심사 보고', tachyon);
  await era.printAndWait([
    '올해는 드디어 ',
    tachyon.get_colored_name(),
    '과(와) 함께하는 시니어 시즌이다.',
  ]);
  await era.printAndWait(
    '올해 두 사람의 목표…… 이전에 명확히 말한 적은 없었지만, 역시 최강을 목표로 한다면 그 두 레이스는 결코 빠질 수 없다.',
  );
  await era.printAndWait([
    '타카라즈카 기념과 아리마 기념이다…… 그 외에도 오사카배에도 기회가 된다면 참가하고 싶다.',
  ]);
  era.println();
  await era.printAndWait([
    '이 세 레이스를 모두 이길 수 있다면, 소위 말하는 ',
    tachyon.get_uma_sex_title(),
    '의 한계에 도달할 수 있을 것이다.',
  ]);
  await era.printAndWait([
    '하지만, ',
    tachyon.get_colored_name(),
    '의 목표는 단지 여기에 그치지 않는다. ',
    tachyon.sex,
    '의 목표는…… 한계를 뛰어넘는 것이다.',
  ]);
  await era.printAndWait('그러니 레이스 외에도 연구에 대한 협력을 잊어서는 안 된다……');
  era.println();
  await tachyon.say_and_wait([callname, ', 일찍 왔군?']);
  era.println();
  await era.printAndWait([
    '어느덧 오늘 함께 참배하기로 약속했던 ',
    tachyon.get_colored_name(),
    '도 이미 도착해 있었다.',
  ]);
  era.printButton(
    '「그야 당연하지! 올해의 시니어 전선, 그리고 그 외의 여러 가지 일들까지…… 빌고 싶은 소원이 너무 많거든!」',
    1,
  );
  await era.input();
  if (love >= 75) {
    await tachyon.say_and_wait('그런가…… 그렇다면, 나에게 빌고 싶은 소원도 있는 건가?❤');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 매혹적인 눈빛으로 암시를 담아 ',
      me.get_colored_name(),
      '에게 물었다.',
    ]);
    era.print([
      '올 한 해 동안 ',
      tachyon.get_colored_name(),
      '에게 하고 싶은 일은 없는 것일까……',
    ]);
    era.printButton('「타키온과 더 많이 우마뾰이하고 싶어」', 1);
    era.printButton('「타키온의 몸이 더 민감해졌으면 좋겠어」', 2);
    era.printButton('「타키온에게 밟히고 싶어」', 3, { disabled: me.sex_code === 0 });
    era.printButton('「타키온이 훈련에 집중해줬으면 좋겠어」', 4);
    switch (await era.input()) {
      case 1:
        await tachyon.say_and_wait('……밝히기는. 하고 싶다면 돌아가서 하지.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '의 귓가에 대고 나직하게 속삭였다.',
        ]);
        break;
      case 2:
        await tachyon.say_and_wait([
          '그거라면…… 약을 쓰면 아주 간단히 도달할 수 있겠지만. 그래도 역시 ',
          callname,
          ', 자네의 손을 통해 내가 자네가 원하는 모습으로 변해가길 바라는 거겠지?❤',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '의 어깨에 기대어 즐거운 듯이 말했다.',
        ]);
        break;
      case 3:
        await tachyon.say_and_wait([
          '설마 이런 소원을 빌 줄이야…… 역시 변태로군, ',
          callname,
          '.',
        ]);
        era.println();
        await era.printAndWait([
          '말은 그렇게 하면서도, ',
          tachyon.get_colored_name(),
          '은 살며시 신발을 벗고 검은 스타킹에 감싸인 발바닥을 드러냈다.',
        ]);
        await era.printAndWait('오늘 참배를 위해 온종일 걸어 다녀, 숙성된 향기가 밴 검은 스타킹이었다.');
        era.println();
        await tachyon.say_and_wait('이런 양발로 밟히고 싶은 건가?');
        await tachyon.say_and_wait(
          '얼굴이 짓눌린 채, 내 발바닥의 탁한 공기로 폐부를 가득 채우고 싶은 건가?',
        );
        await tachyon.say_and_wait(
          '내 발 냄새와 자네의 쿠퍼액으로 범벅이 되어, 10미터 밖에서도 냄새가 진동할 정도로 성기를 짓밟히고 싶은 건가?',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 광기 서린 눈으로 ',
          tachyon.get_colored_name(),
          '을 바라보았다. 답은 이미 정해져 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……밝히기는. 하고 싶다면 돌아가서 하지.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '의 귓가에 대고 나직하게 속삭였다.',
        ]);
        break;
      case 4:
        await tachyon.say_and_wait('……무드 없는 녀석 같으니.');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 흥미 없다는 듯 혀를 찼다.']);
    }
  } else if (love >= 50) {
    await tachyon.say_and_wait('여러 소원이라…… 예를 들면?');
    era.println();
    era.print([
      tachyon.get_colored_name(),
      '은 흥미롭다는 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 보았다.',
    ]);
    era.printButton('「타키온과 더 친해졌으면 좋겠어」', 1);
    era.printButton('「다른 담당 우마무스메들과 사이가 더 좋아졌으면 좋겠어」', 2);
    era.printButton('「실크송이 올해는 나왔으면 좋겠어!」', 3);
    switch (await era.input()) {
      case 1:
        await tachyon.say_and_wait('후후, 분명 그렇게 될 거라고 믿네❤');
        break;
      case 2:
        await tachyon.say_and_wait(
          '……일부러 다른 담당 이야기를 꺼내서 나를 화나게 하려는 건가? 안타깝게도 그런 수법에는 넘어가지 않아.',
        );
        era.println();
        await era.printAndWait([
          '말은 그렇게 해도, ',
          tachyon.get_colored_name(),
          '은 기분이 상한 듯 볼을 부풀렸다.',
        ]);
        break;
      case 3:
        await tachyon.say_and_wait([
          '에…… 그게 뭔가…… 신성둥지? 할로우 O이트? …… ',
          callname,
          ', 자네 그렇게 게임을 좋아했던가?',
        ]);
    }
  } else if (relation <= 0) {
    await tachyon.say_and_wait(
      '흥, 비과학적인 미신 따위를 보물처럼 여기다니. 그런 생각을 할 시간이 있다면 내 실험을 도울 방법이나 더 고민해보게나.',
    );
  } else if (relation <= 225) {
    await tachyon.say_and_wait(
      '후후, 나는 그런 비과학적인 것은 믿지 않지만, 자네의 성의를 봐서 일단은 받아들이도록 하지.',
    );
  } else {
    await tachyon.say_and_wait('그런가? 그렇다면 자네의 소원은 반드시 이루어질 것이네.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 말투를 듣고 ',
      me.get_colored_name(),
      '은(는) 조금 의외라고 생각했다.',
    ]);
    await era.printAndWait([
      '이런 미신적인 일에 대해 ',
      tachyon.sex,
      '는 비웃지는 않더라도 진지하게 대하지는 않을 거라 생각했기 때문이다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      tachyon.sex,
      '의 말투는 마치 마음속 깊이 확신하고 있는 듯했다.',
    ]);
    era.printButton('「타키온……?」', 1);
    era.printButton('「너 이런 거 안 믿지 않아?」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '신 같은 것보다 나는 내 손안의 연구를 더 신뢰하네…… 하지만, 연구보다 더 신뢰하는 것은 바로 자네라네.',
    );
    era.println();
    await era.printAndWait([
      '정확히 말하자면, ',
      me.get_colored_name(),
      '이(가) 해온 노력이다.',
    ]);
    await era.printAndWait([tachyon.sex, '는 덧붙여 말했다.']);
    era.println();
    await tachyon.say_and_wait(
      '자네가 지난 1년간 쏟은 노력은 반드시 보상받을 것이네. 만약 신이 주지 않는다면, 내가 직접 주도록 하지.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 자신만만하게 말했다. 신의 기능을 대신하겠다니, 참으로 ',
      tachyon.get_colored_name(),
      '다운 말이었지만…… 역시 신사 안에서 할 말은 아닌 것 같았다.',
    ]);
  }
  era.drawLine();
  await era.printAndWait([
    '새해를 맞이한 신사는 매우 붐볐지만, ',
    me.get_couple_title(),
    '은 빠르게 참배를 마쳤다.',
  ]);
  await era.printAndWait([
    '참배가 끝난 뒤, ',
    me.get_colored_name(),
    '과(와) ',
    tachyon.get_colored_name(),
    '은 올해의 계획에 대해 논의했다.',
  ]);
  era.println();
  await tachyon.say_and_wait('음…… 지난 11월에 이야기했던 것과 다름없군. 문제없네.');
  era.println();
  await era.printAndWait('레이스 관련 이야기는 간단히 끝났다. 이제부터가 오늘의 본론이다.');
  era.println();
  if (attr_names.findIndex((e) => era.get(`base:32:${e}`) < 1200) === -1) {
    await tachyon.say_and_wait([
      '한계…… 우리의 노력 끝에, 지금의 나는 이미 한계에 도달했다고 단언할 수 있네…… ',
      tachyon.get_uma_sex_title(),
      '로서의 한계 말이야.',
    ]);
  } else {
    await tachyon.say_and_wait(
      '한계…… 아직 도달하지는 못했지만, 실험을 지속한다면 머지않아 도달할 테니 큰 문제는 아니네.',
    );
  }
  era.println();
  await tachyon.say_and_wait('유일한 문제는…… 한계를 뛰어넘는 것.');
  await tachyon.say_and_wait('그리고 그것에 관해서는…… 현재의 나로서도 전혀 갈피를 잡지 못하고 있네.');
  era.println();
  await era.printAndWait([
    '전혀 갈피를 잡지 못하고 있다고 말하면서도, ',
    tachyon.get_colored_name(),
    '의 눈동자에 서린 자부심은 마치 ',
    tachyon.sex,
    '가 방금 리만 가설의 해법을 찾아냈다고 선언하는 듯한 착각을 불러일으켰다.',
  ]);
  era.printButton('「전혀 모른다니…… 그거 꽤 큰일인데」', 1);
  await era.input();
  await era.printAndWait('이거 방법이 없겠군.');
  await era.printAndWait('정말로 단서조차 없다면 말이다.');
  era.println();
  await era.printAndWait('분명 걱정해야 할 상황인데도, 마음은 이상하게 평온했다.');
  await era.printAndWait('단서가 없다면, 이제부터 찾아내면 되는 것이다.');
  era.printButton('「그럼 타키온, 에너지를 레이스에 쏟아보는 건 어때?」', 1);
  era.printButton(
    `${tachyon.get_uma_sex_title()}의 한계는, 역시 경기장에서 돌파할 수 있는 게 아닐까?`,
    2,
  );
  await era.input();
  await tachyon.say_and_wait([
    '……일리 있는 말이긴 한데, 어째서인지 이건 ',
    callname,
    ', 자네의 사욕을 채우려는 소리로 들리는군.',
  ]);
  era.printButton('「타키온이 나에게 더 넓은 세계를 보여주겠다고 했잖아?」', 1);
  await era.input();
  await tachyon.say_and_wait(
    '후후, 그것도 그렇군. 그럼 계속하도록 하지, 우리의 새로운 1년의 연구를!',
  );
  era.println();
  era.print('그럼, 연구를 시작하기 전에……');
  era.printButton('「일단 떡부터 먹자」（체력 +20%）', 1);
  era.printButton('「당장 훈련하러 가자」（무작위 능력치 +20）', 2);
  era.printButton('「돌아가서 연구하자」（스킬 포인트 +30）', 3);
  let ret = await era.input();
  switch (ret) {
    case 1:
      await era.printAndWait([
        me.get_couple_title(),
        '은 ',
        tachyon.get_colored_name(),
        '의 실험실로 돌아왔다.',
      ]);
      await era.printAndWait([
        '그리고 나서 ',
        me.get_couple_title(),
        '이 한 첫 번째 일은……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……내가 이런 말을 하는 것도 좀 그렇다만, 우리…… 방금 그런 거창한 말을 해놓고 지금 여기서 뭘 하는 건가.',
      );
      era.println();
      await era.printAndWait('예전에 학생들이 과학 실험용으로 쓰던 교실.');
      await era.printAndWait([
        '현재는 ',
        me.get_colored_name(),
        '에 의해 열에너지 방출 및 찹쌀 합성물의 발화점 측정 실험을 위해 사용되고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '은 실험 기구 역할을 하는 화로 앞에 둘러앉아, 불꽃의 온기를 만끽했다.',
      ]);
      await era.printAndWait([
        '스프링클러? 그런 건 예전에 ',
        tachyon.get_colored_name(),
        '이 교내에 광범위 약물 살포 실험을 했을 때, 학생회로부터 ',
        tachyon.get_colored_name(),
        '의 접근을 금지하도록 강제 철거 명령이 내려졌었다.',
      ]);
      era.printButton('「슬슬 다 익은 것 같아」', 1);
      era.printButton('「자, 타키온은 안 먹을 거야?」', 2);
      await era.input();
      await tachyon.say_and_wait('당연히 먹어야지.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '이(가) 구운 찹쌀 합성물——떡을 건네받아 즉시 한 입 베어 물었다. 그리고 역시나 ',
        me.get_colored_name(),
        '의 예상대로……',
      ]);
      era.println();
      await tachyon.say_and_wait('뜨거워! ……후우 후우.');
      era.println();
      if (new TachyonLifeMarks().cook < 10) {
        await tachyon.say_and_wait('……생각보다 꽤 맛있군. 의외야.');
      } else {
        await tachyon.say_and_wait('뜨겁군…… 하지만 맛있어. 과연 내가 단련시킨 모르모트답군.');
      }
      era.println();
      await me.say_and_wait('왜 그게 자기 공로라는 듯이 말하는 거야……');
      era.println();
      await era.printAndWait(
        '어찌 됐든 실험 연구든, 훈련이나 레이스 대책이든 내일 해도 상관없다.',
      );
      await era.printAndWait('간만의 새해인데, 이 평온함을 마음껏 즐기기로 했다.');
      era.println();
      await tachyon.say_and_wait(['타키온은 미소 지으며 떡을 살짝 깨물었다.']);
      await era.printAndWait([
        '최근 들어 왠지 모르게 「내일」이나 「미래」라는 단어만 나오면 ',
        tachyon.get_colored_name(),
        '의 기분이 갑자기 좋아지곤 했다.',
      ]);
      await era.printAndWait([
        '궁금해진 ',
        me.get_colored_name(),
        '은(는) 참지 못하고 질문을 던졌다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', callname, ', 내 다리가……']);
      break;
    case 2:
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 드문 의욕을 놓치지 않기 위해, ',
        me.get_colored_name(),
        '은(는) 즉시 ',
        tachyon.sex,
        '와 함께 훈련장으로 향했다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 훈련장을 질주하는 모습은 수없이 봐온 광경임에도 불구하고, ',
        me.get_colored_name(),
        '은(는) 여전히 그 모습에 넋을 잃고 말았다.',
      ]);
      await era.printAndWait('빛처럼 찬란하고, 빛처럼 눈부시며…… 빛처럼 영원하다.');
      await era.printAndWait('예전의 달리기에서 느껴지던 특유의 허무함은 어느덧 사라져 있었다.');
      await era.printAndWait('불안은 가시고, 남은 것은 가장 순수한 빛뿐이었다.');
      await era.printAndWait([me.get_colored_name(), '은(는) 한층 더 깊은 황홀경에 빠져들었다.']);
      era.println();
      await tachyon.say_and_wait([callname, '? ……', callname, '!']);
      era.println();
      await era.printAndWait([
        '어느새 ',
        tachyon.sex,
        '가 훈련을 마치고 ',
        me.get_colored_name(),
        '의 곁으로 돌아온 것조차 알아채지 못했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('내 훈련을 보면서 멍하니 있다니…… 간이 부었군.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 서둘러 ',
        tachyon.sex,
        '에게 자신이 느꼈던 변화를 설명했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……그런가.');
      await tachyon.say_and_wait('사실…… 나 자신도 기묘한 감각을 느끼고 있네.');
      await tachyon.say_and_wait(['국화상 이후로…… 내 다리에…… 묘한 느낌이 들어.']);
      break;
    case 3:
      await tachyon.say_and_wait([
        callname,
        ', 그 시험관 좀 가져와 주게나. 흔들지 말고. 쏟아지면 아마 1층 바닥까지 다 녹여버릴 테니까.',
      ]);
      await tachyon.say_and_wait([
        callname,
        ', 지금 손이 모자라니 알코올램프를 켜고 옆에 있는 저 약을 도가니에 부어서 끓여주게.',
      ]);
      await tachyon.say_and_wait([
        '그리고 이건…… 좋아, 이것들을 갈색으로 물들여서 ',
        sys_get_colored_callname(32, 25),
        '의 커피 가루에 섞어서…… ',
        callname,
        '! 그걸 왜 가져가는 건가!',
      ]);
      await tachyon.say_and_wait(
        '마스크를 써두게나. 곧 나올 연기는 심각한 수면 효과가 있어서, 방호 조치를 제대로 안 하면 주말까지 잠들게 될지도 모르니.',
      );
      await tachyon.say_and_wait([
        '여기에…… 사과 주스와 설탕을 좀 더 넣고…… 약이냐고? 아니, 이건 좀 이따 ',
        sys_get_colored_callname(32, 9),
        '이 오면 줄 전용 음료라네.',
      ]);
      era.println();
      await era.printAndWait([
        me.get_couple_title(),
        '은 참배를 마치자마지 ',
        tachyon.get_colored_name(),
        '의 실험실로 복귀했다. 오늘의 ',
        tachyon.get_colored_name(),
        '은 컨디션이 최고조인 듯했다.',
      ]);
      await era.printAndWait([
        '쉴 새 없이 쏟아지는 지시들 중 너무 이상한 것들을 제외하고, ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '가 맡긴 일들을 대부분 완수했다. 하지만……',
      ]);
      era.println();
      await tachyon.say_and_wait('실패로군…… 쳇, 좀 더 추가해야겠어.');
      await tachyon.say_and_wait('오늘 안으로…… 반드시 22회의 임상 테스트를 마쳐야 하네.');
      era.println();
      await era.printAndWait('여느 때처럼 조급한 실험 효율에 최상의 실험 상태까지 더해지니.');
      await era.printAndWait('그 결과로 해야 할 일들이 몇 배나 늘어나 버렸다.');
      era.printButton('「타키온, 좀 쉬면서 해. 내일도 있는데」', 1);
      era.printButton('「그렇게 서두를 거 없잖아, 내일 해도 될 텐데……」', 2);
      await era.input();
      await tachyon.say_and_wait('내일이 뭐 어쨌……');
      era.println();
      await era.printAndWait('꾸짖으려던 말이 반쯤 나오다 갑자기 멈췄다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 마치 정지 버튼이라도 눌린 것처럼 하던 동작을 멈추었다.',
      ]);
      await era.printAndWait([
        '손에 든 약병이 바닥으로 쏟아지려 하자, ',
        me.get_colored_name(),
        '은(는) 서둘러 달려가 한 방울만으로 1층까지 부식시킨다는 그 약을 붙잡아 고정했다.',
      ]);
      era.printButton('「타키온! 왜 그래……!」', 1);
      era.printButton('「왜 갑자기 멈춘 거야!」', 2);
      await era.input();
      await tachyon.say_and_wait('…………하하.');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '이 갑자기 웃음을 터뜨렸다.']);
      era.printButton('「머리가…… 드디어 고장 난 건가」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '……나중에 자네랑은 정산을 좀 해야겠군, ',
        callname,
        '…… 그저 생각하고 있었을 뿐이네.',
      ]);
      era.println();
      await era.printAndWait('무슨 생각?');
      era.println();
      await tachyon.say_and_wait('……우리 정말로, 내일을 보게 되었군.');
      await era.printAndWait('내일?');
      await era.printAndWait('도대체 무슨 소리를 하는 건지, 정말로 머리라도 부딪힌 걸까.');
      await era.printAndWait([
        '천재와 광인은 종이 한 장 차이라더니 드디어 ',
        tachyon.get_colored_name(),
        '이 미쳐버린 걸까.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '자네, 지금 꽤 무례한 생각을 하고 있는 것 같군…… 자네 말대로, 내일 해도 늦지 않겠어. 후후.',
      );
      await tachyon.say_and_wait('어차피 앞으로 수많은 내일이 기다리고 있을 테니까.');
      era.printButton('「어찌 됐든, 내일은 반드시 올 테니까 말이야」', 1);
      era.printButton('「너무 깊이 생각하지 말고, 어쨌든 내일 계속하자」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('그렇군. 하지만…… 이렇게 아름다운 내일은 정말로…… 처음이라서 말이야.');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 알아들을 수 없는 말을 중얼거렸다.',
        ]);
      } else {
        await tachyon.say_and_wait('후후, 물론이지. 내일 계속하도록 하세. 음, 내일 말이네.');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 흥을 깼는데도 불구하고 ',
          tachyon.get_colored_name(),
          '은 여전히 기분 좋아 보였다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '어째서인지 「내일」이라는 말을 들은 뒤로, ',
        tachyon.get_colored_name(),
        '의 기분이 갑자기 매우 좋아진 듯했다.',
      ]);
      await era.printAndWait([
        '궁금해진 ',
        me.get_colored_name(),
        '은(는) 참지 못하고 질문을 던졌다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', callname, ', 내 다리가……']);
  }
  era.printButton('무슨 일이야!', 1);
  era.printButton('어디 문제라도 있어?!', 2);
  await era.input();
  await tachyon.say_and_wait([
    '……후후, 그렇게 긴장하지 말게. 내 말은, 내 다리가…… 국화상 이후로 갑자기 굉장히 안정되었다는 소리라네.',
  ]);
  era.println();
  await era.printAndWait('안정되었다니, 그거…… 좋은 일 아닌가?');
  await era.printAndWait('어라, 그럼 지금 축하해줘야 하는 건가?');
  await era.printAndWait([
    '갑작스럽게 전개된 화제에 ',
    me.get_colored_name(),
    '은(는) 혼란에 빠졌고, ',
    tachyon.sex,
    '가 왜 갑자기 이 이야기를 꺼냈는지 이해하지 못했다.',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '……내 생애 처음으로, 다리에 대한 걱정을 버리고 오직 한 가지 일에만 집중할 수 있게 되었어……',
  );
  await tachyon.say_and_wait(
    '마치, 당연하다는 듯이 계속해서 달려 나갈 수 있을 것만 같네. 설령 세상의 끝까지라도 말이야.',
  );
  await tachyon.say_and_wait(
    '그래서…… 내일이나 미래 같은, 일반인들에게는 가장 당연한 것들을 떠올리기만 해도 나에겐 일종의……',
  );
  await tachyon.say_and_wait(
    '뭐라고 해야 할까…… 자네 말대로, 확실히 기쁨이라는 감정이 솟아나고는 있네.',
  );
  await tachyon.say_and_wait('하지만, 이게 오로지 연구에 전념할 수 있다는 기쁨인 걸까?');
  await tachyon.say_and_wait('……음, 또 아닌 것 같기도 하고…… 탐구해 볼 가치가 있겠어.');
  era.println();
  await era.printAndWait(['그 말을 듣고 ', me.get_colored_name(), '은(는) 문득 뇌리를 스치는 영감을 얻었다.']);
  era.printButton('「혹시, 아무런 걱정 없이 달릴 수 있게 되어서가 아닐까?」', 1);
  era.printButton('「혹시, 자유롭게 달릴 수 있게 된 사실 그 자체가 기쁜 게 아닐까?」', 2);
  await era.input();
  await tachyon.say_and_wait([
    '음…… ',
    callname,
    ', 내 말이 방금 그 소리 아니었나? 똑같은 말을 반복하는 이유를 모르겠군.',
  ]);
  era.printButton('「실험이 아니라, 달리기 그 자체를 말하는 거야」', 1);
  await era.input();
  await tachyon.say_and_wait([
    '……자네 말은, 내가 달리기를 좋아해서, 자유롭게 달릴 수 있게 된 것이 기쁘다는 건가?',
  ]);
  era.println();
  await era.printAndWait([
    '아…… 역시 ',
    tachyon.get_colored_name(),
    '에겐 받아들이기 힘든 말이겠지.',
  ]);
  await era.printAndWait('결국 순수한 이성을 추구하는 자신이 무언가를 좋아한다는 걸 인정해야 하니까……');
  await tachyon.say_and_wait('이건……');
  era.println();
  await me.say_and_wait('이건?');
  era.println();
  await tachyon.say_and_wait('이거 아주 흥미로운 가능성이 아닌가!');
  era.println();
  await era.printAndWait('…………어라?');
  era.println();
  await tachyon.say_and_wait([
    '달리기 그 자체에 흥미를 느낀다…… 상당히 재미있는 과제가 될 것 같군! ',
    callname,
    '! 다음 연구 과제는 이것으로 정했네!',
  ]);
  era.println();
  await era.printAndWait('여, 연구라니 뭘?');
  era.println();
  await tachyon.say_and_wait('말할 것도 없지! 당연히 달리기에 대한 『호감』 말이야!');
  era.println();
  await era.printAndWait('호감을…… 연구한다고?');
  await era.printAndWait([
    '채 정신을 차리기도 전에, 흥분한 ',
    tachyon.get_colored_name(),
    '은 말을 이어나갔다.',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '예감이 들어…… 한계를 돌파할 가능성이 바로 여기에 있다는 것을! 다음 목표는 이것을 연구하는 것으로 하지!',
  );
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '의 말을 듣고 ',
    me.get_colored_name(),
    '도 냉정을 되찾아 득실을 따져보기 시작했다.',
  ]);
  await era.printAndWait([
    '만약 정말이라면, 수단과 방법을 가리지 않고 ',
    tachyon.get_colored_name(),
    '이 목표를 달성하도록 도와야 한다.',
  ]);
  await era.printAndWait([
    '설령 그것이 착각이라 해도…… ',
    tachyon.get_colored_name(),
    '이 달리기를 즐기기 시작했다는 것 자체가 ',
    me.get_colored_name(),
    '에겐 전혀 나쁜 일이 아니었다.',
  ]);
  await era.printAndWait(
    '연구를 위해 달리는 것보다, 자신이 좋아해서 달리는 쪽이 훨씬 바람직할 테니까.',
  );
  era.println();
  await era.printAndWait(
    '그러니 어떤 한 가지 난제를 제외하면, 이것은 백해무익…… 아니, 다다익선인 결정이었다.',
  );
  await era.printAndWait([
    '생각을 정리한 ',
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '을 향해 고개를 끄덕였다.',
  ]);
  era.printButton('「그걸 목표로 삼자!」', 1);
  await era.input();
  await era.printAndWait('최대의 난제만 제외하면, 그야말로 완벽한 결정이었다.');
  await era.printAndWait('그런데, 도대체 「감정」을 어떻게 연구해야 하는 걸까? 힘내라, 모르모트!');
  return ret;
};