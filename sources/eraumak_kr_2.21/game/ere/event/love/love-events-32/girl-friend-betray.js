const era = require('#/era-electron');

const be_common = require('#/event/love/love-events-32/girl-friend-be-common');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {TachyonLifeMarks} life_marks
 */
module.exports = async (tachyon, me, callname, life_marks) => {
  await era.printAndWait([me.get_colored_name(), '은(는) 문득 피로를 느꼈다.']);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 약을 ',
    tachyon.get_colored_name(),
    '의 손에 다시 쥐여주었다.',
  ]);
  era.println();
  await tachyon.say_and_wait(['…………', callname, '?']);
  era.printButton('「지쳤어. 마시고 싶으면 너나 마셔.」', 1);
  await era.input();
  await era.printAndWait('언제부터였을까? 원인은 무엇이었을까?');
  await era.printAndWait([
    '어쩌면 ',
    me.get_colored_name(),
    '은(는) 더 이상 ',
    tachyon.get_colored_name(),
    '이라는 이름의 ',
    tachyon.get_uma_sex_title(),
    '의 제멋대로인 행동을 견딜 수 없게 된 것일지도 몰랐다.',
  ]);
  await era.printAndWait([
    '어쩌면 ',
    me.get_colored_name(),
    '은(는) 이미 ',
    tachyon.get_colored_name(),
    '에 대한 인내심을 잃어버린 것일지도 몰랐다.',
  ]);
  await era.printAndWait([
    '혹은 ',
    me.get_colored_name(),
    '은(는) 이것이 그저 ',
    tachyon.sex,
    '의 또 다른 장난에 불과하다고 생각했을지도 몰랐다.',
  ]);
  await era.printAndWait([
    '애당초 ',
    tachyon.sex,
    ' 때문에 죽고 싶어지다니, 무슨 농담인가 싶었다.',
  ]);
  era.println();
  await era.printAndWait([
    '결국, ',
    me.get_colored_name(),
    '은(는) 약을 ',
    tachyon.sex,
    '에게 다시 밀어냈다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 이 약이 정말로 사람을 죽게 만드는지 따위는 상관하지 않았다.',
  ]);
  await era.printAndWait('아니, 정말로 사람을 죽이는 것이라면 차라리 그것도 나쁘지 않겠다고 생각했다.');
  await era.printAndWait([
    me.get_colored_name(),
    '의 내면에는 그런 음습한 생각까지 싹트고 있었다.',
  ]);
  era.println();
  await tachyon.say_and_wait('…………아아, 그렇군…… 알겠네.');
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '은 딱히 격렬한 반응을 보이지 않았다.',
  ]);
  await era.printAndWait([
    '평소의 ',
    tachyon.sex,
    '에 비하면 이상할 정도로 차분한 거동이 오히려 ',
    me.get_colored_name(),
    '의 흥미를 약간 자극했다.',
  ]);
  await era.printAndWait([
    '마침내 고개를 든 ',
    tachyon.sex,
    '가 체념한 듯, 무언가로부터 해방된 듯한 미소를 짓는 것을 ',
    me.get_colored_name(),
    '은(는) 보았다.',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '……그러고 보니, 이 문제의 정답은 언제나 두 가지만 있는 게 아니었지.',
  );
  await tachyon.say_and_wait(
    '삶과 죽음 이외에도 세 번째 선택지가 존재했어. 즉, 출제자를 죽이는 것, 그렇지?',
  );
  era.println();
  await era.printAndWait([me.get_colored_name(), '은(는) 자신도 모르게 미간을 찌푸렸다.']);
  await era.printAndWait('말이 너무 많다. 대체 마실 건가 말 건가?');
  await era.printAndWait([
    '……아니, 애초에 남에게 약을 먹이는 게 일상인 이 자는',
  ]);
  await era.printAndWait('자신이 약을 마시는 것 따위는 조금도 생각하지 않았을 것이다.');
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 또 시작된 이 연극에 한숨을 내쉬며 실험실을 떠날 준비를 했다.',
  ]);
  era.drawLine();
  await era.printAndWait([
    '그리고, ',
    me.get_colored_name(),
    '이(가) 몸을 돌려 떠나려던 찰나',
  ]);
  era.println();
  await tachyon.say_and_wait('읍………!');
  era.println();
  await era.printAndWait([me.get_colored_name(), '은(는) 강제로 입맞춤을 당했다.']);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 저항하려 했지만, 인간은 결국 ',
    tachyon.get_uma_sex_title(),
    '의 힘을 당해낼 수 없었다. 약물로 여러 번 개조된 ',
    me.get_colored_name(),
    '일지라도 마찬가지였다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 혀가 ',
    me.get_colored_name(),
    '의 입술을 가르고 들어와, ',
    me.get_colored_name(),
    '의 입 안을 쉴 새 없이 휘저으며 유도했다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 혀는 미련이 남은 듯 ',
    me.get_colored_name(),
    '의 치아 사이, ',
    me.get_colored_name(),
    '의 혓바닥, ',
    me.get_colored_name(),
    '의 잇몸 안쪽을 핥고 지나갔다————하지만, 이것들은 ',
    tachyon.sex,
    '의 목표가 아니었다.',
  ]);
  await era.printAndWait([
    tachyon.sex,
    '의 목표는————입안에 머금고 있던, 사람을 「사라지게」 만들기에 충분한 그 약물을 ',
    me.get_colored_name(),
    '의 입안으로 밀어 넣는 것이었다.',
  ]);
  era.println();
  await me.say_and_wait('꿀꺽……! 으으으………!!!');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 필사적으로 저항하며 몸을 뒤틀었으나, 상대의 행동을 막을 수는 없었다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '의 헛된 저항 속에서, 약은 결국 ',
    me.get_colored_name(),
    '들 두 사람에게 공평하게 나누어졌다.',
  ]);
  era.println();
  await me.say_and_wait('빌어먹을……!');
  era.println();
  await era.printAndWait([me.get_colored_name(), '은(는) 참지 못하고 욕설을 내뱉었다']);
  await era.printAndWait([
    '이 자는 무슨 생각을 하는 건가, 죽을 거면 혼자 죽지 물귀신 작전이라도 쓰겠다는 건가?',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '를 매섭게 노려보며 당장이라도 폭언을 퍼부으려 했다…… 그러나 말이 입 밖으로 나오려는 순간 멈칫했다.',
  ]);
  era.println();
  era.println();
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), '이 울고 있었다']);
  await era.printAndWait([
    '아니…… 정확히 말하자면, ',
    tachyon.sex,
    '는 눈물을 흘리면서도 억지로 미소를 지으려 애쓰고 있었지만, 결국 얼굴에 나타난 것은 우는 것보다 더 보기 흉한 미소였다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) ',
    tachyon.sex,
    '를 알게 된 이래, ',
    tachyon.sex,
    '의 이렇게나 초라한 모습은 처음 보았다',
  ]);
  era.println();
  await tachyon.say_and_wait(['하…… 하하하, ', callname, ', 미안하네. 자네를 속였어.']);
  era.println();
  await era.printAndWait([
    tachyon.sex,
    '는 아무렇지 않은 척 연기하려 했으나, 울먹이는 목소리 탓에 그 시도는 무척이나 힘겨워 보였다.',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '이건 말이지, 독약 같은 게 아니야………… 반대로, 「다시 시작하는」 약이라네.',
  );
  era.println();
  await era.printAndWait([
    tachyon.sex,
    '는 그렇게 말했지만, 여전히 시험관을 들고 있는 ',
    tachyon.sex,
    '의 손은 멈추지 않고 떨리고 있었기에 ',
    me.get_colored_name(),
    '은(는) ',
    tachyon.sex,
    '의 말을 신뢰할 수 없었다.',
  ]);
  era.println();
  await era.printAndWait('…………믿지 못하겠지? 상관없네. 약효가 나타나면 알게 될 테니.');
  era.println();
  await era.printAndWait('지금 장난해……!');
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 소리를 지르고 싶었지만, 자신의 몸이 이미 움직이지 않게 되었다는 것을 깨달았다.',
  ]);
  if (life_marks.choco) {
    await era.printAndWait([
      '그때, ',
      me.get_colored_name(),
      '의 입안에 남아있던 약제의 맛이 갑자기 변했다. 분명 마실 때는 무색무취였던 약이었는데, 지금의 맛은……',
    ]);
    era.println();
    if (era.get('exp:32:키스횟수')) {
      await tachyon.say_and_wait(
        '설마, 마지막 키스의 맛이 돼지고기 덮밥 맛일 줄이야.',
      );
    } else {
      await tachyon.say_and_wait('설마, 첫 키스의 맛이 돼지고기 덮밥 맛일 줄이야.');
    }
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 발렌타인데이 때 받았던 초콜릿을 떠올렸다.',
    ]);
    await era.printAndWait([
      '그때부터 이 ',
      tachyon.get_uma_sex_title(),
      '는 끊임없이 이런 이상한 약들로 자신을 괴롭혀왔다.',
    ]);
    await era.printAndWait('매번 자신이 약을 마신 뒤의 반응을 보며 하하하 웃고 즐거워했었다');
    await era.printAndWait('이제 와서, 더 이상 이 모든 것을 참지 않기로 한 자신에게 무슨 잘못이 있단 말인가?');
  }
  await era.printAndWait([
    '확실히 처음에 ',
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '이라는 이름의 이 ',
    tachyon.get_uma_sex_title(),
    '의 주법, 그리고 ',
    tachyon.sex,
    '의 꿈에 흥미를 느꼈었다',
  ]);
  await era.printAndWait([
    '확실히 ',
    me.get_colored_name(),
    '은(는) 진심으로 ',
    tachyon.sex,
    '를 돕고 싶어 했고, ',
    tachyon.sex,
    '가 꿈을 이룰 때까지 곁에서 지켜주고 싶어 했다',
  ]);
  await era.printAndWait(['하지만, ', me.get_colored_name(), '은(는) 이제 질려버렸다']);
  await era.printAndWait([
    tachyon.sex,
    '를 향한 분노, 불만, 좌절, 혐오가 쌓이고 쌓여 만들어낸 무게는, 이미 저울 반대편에 있는 ',
    tachyon.sex,
    '에 대한 기대, 애정, 동경을 뛰어넘어 버렸다.',
  ]);
  era.println();
  await era.printAndWait([
    '지금의 ',
    me.get_colored_name(),
    '은(는) 그저 하루빨리 이 ',
    tachyon.get_uma_sex_title(),
    '에게서 벗어나고 싶을 뿐이었는데, 결국 이런 독약까지 먹게 된 셈이었다.',
  ]);
  await me.say_and_wait(
    '난 너 같은 녀석이랑 로미오와 줄리엣 놀이나 하고 있을 시간이 없다고!',
    true,
  );
  await era.printAndWait([
    '그러나 말을 할 수 없게 된 ',
    me.get_colored_name(),
    '은(는) 묵묵히 ',
    tachyon.get_colored_name(),
    '의 말을 들을 수밖에 없었다. 최소한, 불만을 배출하는 창구로서 ',
    tachyon.get_colored_name(),
    '을 매서운 시선으로 노려보는 것밖에는 할 수 없었다.',
  ]);
  era.println();
  await tachyon.say_and_wait('솔직히 말하자면, 정말 무서웠다네.');
  await tachyon.say_and_wait(
    '누군가를 좋아하면서도, 상대가 나를 좋아하는지 알 수 없다는 기분은 정말…… 너무나도 무서웠어.',
  );
  await tachyon.say_and_wait(
    '그 어떤 실험 결과보다도 마음을 요동치게 만들고, 그 어떤 레이스 결과보다도 심장을 뛰게 만들었지.',
  );
  await tachyon.say_and_wait('솔직히 정말 무서웠다네.');
  await tachyon.say_and_wait(
    '만약 상대가 좋아하는 게 내가 아니라, 내가 가진 「어떤 것」일 뿐이라면,',
  );
  await tachyon.say_and_wait(
    '그럴 땐 어쩌면 좋을지. 만약 상대의 눈에 비치는 것이 내가 아니라 나의 「꿈」뿐이라면 어떡하나 싶었지.',
  );
  await tachyon.say_and_wait(
    '나는 말이야, 줄곧 그런 것들만 걱정해 왔어…… 정작 가장 중요한 것, 가장 공포스러운 가능성은 잊은 채로 말이지.',
  );
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '은 헛웃음을 터뜨리며, 너무나 천진하고 낙관적이었던 자신을 조롱했다',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '상대는, 애당초 나를 좋아하지 않는 거였어. 꿈과 가능성을 포함해 나의 모든 것을 좋아하지 않았던 거야.',
  );
  era.println();
  await era.printAndWait([
    '마침내 ',
    tachyon.get_colored_name(),
    '의 얼굴에 떠올라 있던 미소——그것을 미소라고 부를 수 있다면——는 무너져 내렸다',
  ]);
  await era.printAndWait('완전한 울음 섞인 얼굴로 변해버렸다');
  era.println();
  await tachyon.say_and_wait(
    '아아…… 이것이 실연이라는 기분이군…… 으윽…… 너무 괴로워…… 무서워…… 심장이 부서질 것 같아……',
  );
  await tachyon.say_and_wait('그런 거였군…… 나는 차인 거야…… 아파…… 마음이 너무 아파……');
  await tachyon.say_and_wait(
    '왜…… 왜 고작 한 사람에게 사랑받지 못하는 것뿐인데…… 왜 마음이 이렇게나 괴로운 거지…… 으우우…… 싫어……',
  );
  await tachyon.say_and_wait(
    '싫어…… 이렇게 아플 줄 알았으면 사랑 같은 건 하지 않았을 텐데…… 다음에는, 다음에는…… 안 할 거야…… 다시는 안 해…… 너무 아파……',
  );
  await tachyon.say_and_wait([
    callname,
    '……',
    callname,
    '…… 어디 있는 거야…… 왜 자네를 찾을 수가 없지…… 어디로 간 거야……',
  ]);
  await tachyon.say_and_wait([
    '내가 이렇게나 고통스러운데 왜 자네는 내 곁에 없는 거야…… ',
    callname,
    '…… 다시는 자네를 실험 도구로 쓰지 않겠네…… 다 내 잘못이야…… 그러니까…… 그러니까 돌아와 주면 안 될까……',
  ]);
  await tachyon.say_and_wait(
    '여긴 너무 무서워…… 나를 데리고 돌아가 줘, 우리의 실험실로…… 다시는 제멋대로 굴지 않을게……',
  );
  await tachyon.say_and_wait([
    '빨래도 직접 하고…… 도시락통도 다 먹고 아무 데나 버려두지 않을 테니까…… ',
    callname,
    '…… ',
    callname,
    '…………',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '를 바라보았다. 도중부터 그녀는 마치 자신이 누구인지조차 잊어버린 것 같았다',
  ]);
  await era.printAndWait([
    '분명 눈앞의 자신을 보고 있으면서도 계속해서 ',
    callname,
    '의 이름을 부르고 있었다. 마치 이곳에 없는 누군가를 찾는 것처럼',
  ]);
  await era.printAndWait(['아니…… ', callname, '……?']);
  await era.printAndWait([
    '그게 누구지? ',
    me.get_colored_name(),
    '은(는) 평생 들어본 적도 없는 이름이 아닌가?',
  ]);
  await era.printAndWait([
    '눈앞의 이 ',
    tachyon.get_uma_sex_title(),
    '는 또 누구지? 내가 ',
    tachyon.sex,
    '를 알고 있었나?',
  ]);
  era.println();
  await era.printAndWait('두통이, 두통이 머리를 깨부술 듯이 밀려왔다');
  await era.printAndWait('생각하려 할수록 잊어버리는 것들만 늘어갔다');
  era.println();
  await era.printAndWait([
    '결국, ',
    callname,
    '을 애타게 부르는 저 비명 소리 속에서 ',
    me.get_colored_name(),
    '의 의식은 심연으로 가라앉았다',
  ]);
  era.setToBottom();
  await be_common(tachyon, me);
  await era.printAndWait([
    '참으로 이상한 이름이군…… 뭐, 애초에 ',
    tachyon.get_uma_sex_title(),
    '들의 이름은 대부분 그런 식이니 타인의 성명을 차별하는 건 좋지 않겠지',
  ]);
  await era.printAndWait([
    '하지만 어째서인지 직감이 ',
    me.get_colored_name(),
    '에게 경고하고 있었다. 눈앞의 이 ',
    tachyon.get_uma_sex_title(),
    '와는 거리를 두어야 한다고',
  ]);
  era.println();
  era.printButton(
    `「그럼, 오늘은 여기까지 하자. 실험실에 마음대로 들어와서 정말 미안했어. 나중에 다시 정식으로 사과하러 올게. ${tachyon.name} 양」`,
    1,
  );
  await era.input();
  await tachyon.say_and_wait('…………아니, 그럴 필요 없네. 애당초 두 사람이 동시에 기억을 잃는다는 건……');
  await tachyon.say_and_wait('됐네, 없던 일로 하지. 앞으로 딱히 찾아올 필요도 없네, 트레이너 군.');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    tachyon.get_colored_name(),
    '의 실험실을 떠났다',
  ]);
  await era.printAndWait([
    '문을 나서기 직전, ',
    me.get_colored_name(),
    '은(는) 문득 뒤를 돌아보았다',
  ]);
  era.println();
  await tachyon.say_and_wait('음? 트레이너 군, 무슨 일이라도 남았나?');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 예감이 들었다. 만약 지금 이 문을 나선다면, 아마 다시는 이 ',
    tachyon.get_uma_sex_title(),
    '와 엮일 일은 없을 것이라고',
  ]);
  era.println();
  await me.say_and_wait('아무것도 아니야. 내 착각이었나 봐.', true);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 실험실 문을 나섰다. 이번에는 일말의 망설임도 없었다',
  ]);
  await print_event_name('마녀의 약', tachyon);
  era.set('relation:32:0', 0);
  era.set('love:32', 0);
  life_marks.reset();
  era.set('callname:32:0', '트레이너 군');
  if (era.get('flag:명성부족교체')) {
    era.set('flag:현재명성', 0);
  } else {
    era.set('flag:강제배드엔딩', 32);
  }
};