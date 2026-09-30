const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[52];
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (urara, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 52) {
    add_event(hook.hook, event_object);
    return false;
  }
  const in_urara = get_chara_talk(52, chara_colors[1]);
  await print_event_name('새해 참배', urara);
  era.set('cflag:52:축제이벤트표시', 0);
  await in_urara.say_as_unknown_and_wait(
    '좋아요! 딱히 할 말은 없지만, 무사히 우라라와 시니어급에 진입한 걸 축하합니다.',
  );
  await in_urara.say_as_unknown_and_wait(
    '……왜 그래세요? 분위기가 변했다면 당신의 착각일 뿐입니다, 난 아무것도 변하지 않았어요.',
  );
  era.drawLine();
  await era.printAndWait([
    '정월을 맞아 북적이는 인파 속에서, ',
    me.get_colored_name(),
    '은(는) 신사의 긴 계단 아래에서 함께 참배하기로 약속한 동료를 기다리고 있었다.',
  ]);
  await era.printAndWait([
    '오늘의 ',
    urara.get_colored_name(),
    '는 드물게 늦었다. 약속 시간에서 고작 몇 분 지났을 뿐이지만, 평소 놀기를 좋아하는 ',
    urara.sex,
    '라면 외출할 때는 보통 더 일찍 도착하곤 했다.',
  ]);
  await era.printAndWait([
    '새해 인파에 길이 막힌 것은 아닐까? 딱히 ',
    urara.get_uma_sex_title(),
    '가 인파에 휩쓸릴 걱정은 없었지만, ',
    urara.get_colored_name(),
    '가 길을 찾지 못한다면……',
  ]);
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '이(가) 온 길을 되돌아가 담당을 찾으려던 찰나, 근처에서 ',
    urara.get_teen_sex_title(),
    '의 익숙하고 맑은 목소리가 들려왔다.',
  ]);
  await urara.say_and_wait([callname, '! 나 여기 있어! 우라라는 여기 있다구!']);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 뒤를 돌아 찾는 사이, 홍백이 어우러진 벚꽃색 봄바람이 기온이 오르기도 전에 ',
    me.get_colored_name(),
    '의 품 안으로 불어닥쳤다.',
  ]);
  await era.printAndWait([
    '고개를 숙여 보니, 분홍빛이 섞인 명절 옷을 차려입은 ',
    urara.get_colored_name(),
    '는 ',
    me.get_colored_name(),
    '을(를) 향해 환하게 웃고 있었고, 벚꽃이 피어난 듯한 눈동자가 반짝거리고 있었다.',
  ]);

  urara.say([
    '헤헤~ 다들 제대로 격식을 차리는 게 좋다고 해서, 오늘은 준비하는 데 시간이 좀 걸렸어! ',
    callname,
    ', 어때?',
  ]);
  era.printButton('「응, 우라라 오늘 정말 예쁜걸!」（호감도+20）', 1);
  era.printButton('「응, 또 우라라에게 반해버렸어!」（애정도+10）', 2);
  const ret = await era.input();
  if (ret === 1) {
    await urara.say_and_wait([
      '헤헤~ 정말? 다들 도와준 덕분에 한참 동안 꾸몄어! ',
      callname,
      '도 기뻐해 주니까 정말 다행이야!',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 즐거운 듯 당신 앞에서 빙글빙글 돌며 옷매무새를 뽐냈고, 넓은 소매와 긴 치마가 마치 작은 새의 날개처럼 함께 넘실거렸다.',
    ]);
    await urara.say_and_wait([
      '그나저나 귀엽다가 아니라 예쁘다니, 드디어 ',
      callname,
      '의 눈에도 우라라가 어른스럽게 보이게 된 걸까?',
    ]);

    era.printButton(
      '「틀렸어. 어른스러워진 게 아니라, 우라라는 언제 어디서든 그 어떤 『어른들』보다 훨씬 예쁘니까.」',
      1,
    );
    await era.input();
  } else {
    await urara.say_and_wait('그치! 다들 도와줘서 열심히 꾸몄거든…… 어? 에, 에에──');
    await era.printAndWait([
      '예상치 못한 대답을 듣자, ',
      urara.get_colored_name(),
      '는 잠시 멍하니 있다가, 이내 넓은 소매로 붉게 물든 뺨을 급히 가렸다.',
    ]);
    await urara.say_and_wait([
      callname.substring(0, 1),
      '…… ',
      callname,
      ', 우라라가 못 알아들을 소리 하지 마…… 기쁘긴 하지만! 우라라도 이제 어린애가 아니란 말이야……',
    ]);

    era.printButton(
      '「미안해, 앞으론 조심할게. 하지만 우라라에게 농담을 한 건 아니야.」',
      1,
    );
    await era.input();
  }
  await era.printAndWait([
    '이후, 수줍어하는 ',
    urara.get_colored_name(),
    '의 작은 손을 잡고, ',
    me.get_colored_name(),
    '은(는) 담당과 함께 복을 빌기 위해 신사의 긴 계단을 오르기 시작했다.',
  ]);
  await era.printAndWait([
    '하지만 계속 위로 올라가면서, ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '는 모두 주변의 변화를 눈치챘다. 무엇보다, 신사 계단이 이렇게 길었나?',
  ]);
  await era.printAndWait(
    '신사 계단이 높기로 유명하긴 하지만, 평소 기억으로는 끝이 보이지 않을 정도는 아니었다.',
  );
  await era.printAndWait(
    '어느 순간부터 북적이던 참배객들이 하나둘 사라졌고, 주변의 숲은 더욱 울창하고 빽빽해졌다.',
  );
  await era.printAndWait(
    '어떤 나무들에는 벌써 새잎이 돋아나 있었다. 찬바람이 가시지 않은 계절에는 결코 볼 수 없는 광경이었다.',
  );
  await era.printAndWait(
    '평소 기도를 할 때 기묘한 현상이 가끔 일어나긴 했지만, 오늘의 변화는 유독 뚜렷했다.',
  );
  await era.printAndWait(
    '확실한 것은 이 변화에 악의는 없었으며, 오히려 두 사람이 계단을 오르며 느꼈을 피로감마저 깨끗이 씻어주었다는 점이다.',
  );
  await era.printAndWait([
    '그렇다 해도 이 오르막은 지나치게 길었다. 앞쪽으로 지루할 만큼 곧게 뻗은 길을 올려다보며, ',
    me.get_colored_name(),
    '은(는) 깊은 한숨을 내쉬었다.',
  ]);
  await era.printAndWait(
    '지금이라도 되돌아갈까? 하지만 돌아가더라도 끝없는 계단만 이어질 것 같은데, 어쩌면 좋지……',
  );
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 다음 행동을 고민하고 있을 때, 곁에 있던 ',
    urara.get_colored_name(),
    '가 먼저 ',
    me.get_colored_name(),
    '에게 뜻밖의 화두를 던졌다.',
  ]);
  await urara.say_and_wait([
    callname,
    ', 사실 우라라는 알고 있어. 처음의 우라라의 모습으로는, 스스로의 힘으로 트레센에 올 수 없었을 거라는걸.',
  ]);
  await era.printAndWait([
    '갑작스러운 한마디에 뒤통수를 맞은 듯한 기분이 들어, ',
    me.get_colored_name(),
    '은(는) 계단에서 발을 헛디뎌 미끄러질 뻔했다.',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '가 입을 열었을 때, ',
    me.get_colored_name(),
    '은(는) 어린 ',
    urara.get_uma_sex_title(),
    '가 할 법한 수만 가지 말을 예상했지만, 설마 이렇게 진지하고 무거운 주제일 줄은 몰랐다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 긴장한 채 옆의 ',
    urara.get_colored_name(),
    '를 보았으나, 지금의 ',
    urara.sex,
    '는 시선의 끝보다 더 높은 곳을 조용히 바라보고 있었다.',
  ]);
  await urara.say_and_wait(
    '엄마가 예전에 말해줬어. 신사 계단을 이렇게 높게 만든 건, 신령님께 더 가까이 가기 위해서래!',
  );
  await urara.say_and_wait(
    '신령님은 역시 엄청 높은 곳에 사시는구나. 아, 그런데 엄마가 또 그랬어. 누군가를 찾아갈 때는 마음을 담은 선물을 준비하는 게 좋다고.',
  );
  await era.printAndWait([
    '위로 향했던 시선을 옆으로 돌려 어른의 손을 얌전히 잡은 채, ',
    urara.get_colored_name(),
    '는 차분하고 귀여운 미소로 ',
    me.get_colored_name(),
    '에게 제안을 건넸다.',
  ]);
  await urara.say_and_wait([
    '우라라가 조금 늦게 말하는 것 같지만, ',
    callname,
    ', 지금이라도 우라라의 옛날이야기를 들어줄래?',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '의 깊은 눈빛과 마주하자 그 안에서 무언가를 읽어낸 ',
    me.get_colored_name(),
    '도 조용히 고개를 끄덕였다.',
  ]);
  era.drawLine();
  await urara.print_and_wait([
    '보이지 않는 친구, ',
    callname,
    '도 알고 있어? 맞아, 다들 그건 외로운 아이들만 만날 수 있는 친구라고들 하지.',
  ]);
  await urara.print_and_wait(
    '참 신기하지? 다들 보이지 않는 친구는 환상일 뿐이라고 하지만, 우라라는 꼭 그렇지만은 않다고 생각해.',
  );
  await urara.print_and_wait(
    '응! 우라라는 친구가 항상 많았지만, 그래도 보이지 않는 친구가 한 명 있었어! 우라라랑 똑같이 생긴 친구야!',
  );
  await urara.print_and_wait([
    '하지만 다들 말하는 다정한 친구들과는 다르게, ',
    urara.sex,
    '는 항상 슬픈 표정을 짓고는 멀리서 우라라를 지켜보기만 했어.',
  ]);
  await urara.print_and_wait([
    urara.sex,
    '를 그냥 둘 수 없어서, 우라라는 먼저 ',
    urara.sex,
    '를 찾아갔고, 여러 곳에 데리고 다녔어.',
  ]);
  await urara.print_and_wait([
    '그때부터 우리는 늘 붙어 다니는 친구가 되었어. ',
    urara.sex,
    '는 여전히 자주 우울해했지만, 그래도 조금씩 웃는 모습을 보여줬지.',
  ]);
  await urara.print_and_wait([
    '그러던 어느 날, 친구가 갑자기 우라라에게 물었어. 우라라의 소원이 뭐냐고, 말만 하면 ',
    urara.sex,
    '가 꼭 이루어주겠다고.',
  ]);
  await urara.print_and_wait([
    '그래서 우라라는 친구에게 말했어. 항상 슬픈 표정을 짓는 ',
    urara.sex,
    '가, 언젠가 더 이상 슬프지 않게 행복을 찾았으면 좋겠다고!',
  ]);
  await urara.print_and_wait(
    '하지만 우라라의 대답을 들은 친구는, 이전보다 더 우울한 표정을 지었어……',
  );
  await in_urara.say_as_unknown_and_wait(
    '미안해, 그것만은 나 혼자 할 수 없어. 왜냐하면 나의 행복은 바로 우라라가 행복해지는 것이니까……',
  );
  await urara.say_and_wait(
    '음…… 그럼 말이야, 우라라를 더 행복하게 만들어주면 되잖아! 그러면 너도 기뻐질 수 있는 거지?',
  );
  await in_urara.say_as_unknown_and_wait(
    '그럼 우라라가 원하는 행복은 뭐야? 누군가에게 사랑받는 것? 아니면 안심하고 사는 것? 아니면……',
  );
  await urara.say_and_wait(
    '모두가 내가 달리는 걸 보고 웃어줬으면 좋겠어. 그래서 다들 희망을 보고 즐겁게 웃었으면 좋겠어!',
  );
  await urara.print_and_wait([
    '우라라의 소원을 들은 친구는 깜짝 놀란 눈치였지만, 그래도 ',
    urara.sex,
    '는 우라라의 소원을 들어주기로 약속했어.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '알았어. 시간은 많으니까, 내가 협력자를 찾아서 우라라가 『우리의 이야기』를 써 내려갈 수 있게 해줄게.',
  );
  await urara.print_and_wait(
    '그리고 그 뒤에, 우라라가 조금 더 컸을 때 엄마가 갑자기 나를 트레센 학원에 보내주신 거야.',
  );
  await urara.print_and_wait([
    '그다음은 말이지…… 에헤헤~ 우라라는 훈련장에서 쓰러져 있던 ',
    callname,
    '를 만났어!',
  ]);
  await urara.print_and_wait(
    '그런데 있지! 트레센에 온 뒤로는 계속 달리기에서 지기만 해도, 우라라는 단번에 많은 걸 깨달았어!',
  );
  await urara.print_and_wait(
    '엄마가 우라라를 트레센으로 보냈을 때가 마침 봄이었잖아. 그래서 우라라는 스스로가 행운아라는 걸 알게 됐어.',
  );
  await urara.print_and_wait(
    '우라라는 운이 좋아서 봄과 함께 올 수 있었고, 다들 봄을 아름답다고 생각하니까 봄은 항상 모두를 웃게 하잖아.',
  );
  await urara.print_and_wait(
    '그러니까 우라라가 고민했던 것들, 보이지 않는 친구가 환상인지 아닌지, 나랑 같은 세계에 있는지 같은 건 이제 중요하지 않아!',
  );
  await urara.print_and_wait(
    '모두에게 믿음이라는 희망을 줄 수만 있다면 모든 건 의미가 있을 거고, 모두가 웃을 수 있을 테니까.',
  );
  await urara.print_and_wait([
    '그래서 ',
    callname,
    '가 보는 것처럼, 우라라는 결국 친구와의 약속을 지키기 위해 달리는 걸 선택했어!',
  ]);
  era.drawLine();
  await era.printAndWait([
    '어린 ',
    urara.get_uma_sex_title(),
    '의 미소로 이야기가 마무리되자, 어느새 ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '는 평소보다 훨씬 길었던 계단 끝에 도착했다.',
  ]);
  await era.printAndWait([
    '과연 그랬군. 이것이 ',
    urara.get_colored_name(),
    '와 「',
    urara.sex,
    '」의 관계였나. ',
    urara.get_colored_name(),
    '가 많은 디테일을 생략했을지도 모르지만, 대강의 흐름은 파악할 수 있었다.',
  ]);
  await era.printAndWait([
    '다만, ',
    urara.get_colored_name(),
    '의 소원을 들어주기로 해놓고 정작 행복의 정의는 자기 식대로 내세우다니, ',
    urara.sex,
    '는 어지간히 통제욕이 강한 부모 같은 성격인 모양이다.',
  ]);
  await era.printAndWait([
    '선명한 붉은색 토리이를 지나, ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '는 참배객이 한창 많아야 할 시기임에도 아무도 없는, 하지만 기괴함은 전혀 느껴지지 않는 신사 경내로 들어섰다.',
  ]);

  era.printButton(
    '「그런데 이제 와서 묻는 게 좀 뒷북 같긴 하지만…… 우라라가 중앙 트레센에 올 수 있었던 게 그 『보이지 않는 친구』 덕분이라고 생각해?」',
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '그건 아마 엄마가 어떻게든 해주신 거 아닐까? 이웃집 사람들이 말하길, 엄마는 젊었을 때 아주 대단한 중앙 레이스 우마무스메였대.',
  );
  await urara.say_and_wait(
    '게다가 나를 트레센으로 데려가기 전에도 엄마는 방금 중앙에서 돌아오신 참이었고, 그때 우라라는 입학 테스트도 안 봤는걸……',
  );
  await era.printAndWait(
    '허, 망설임 없는 대답이군. 게다가 이 대답도 예상외로 조금 무서운 구석이 있었다……',
  );
  await urara.say_and_wait(
    '하지만 그게 전부는 아닐 거야. 엄마는 우라라의 보이지 않는 친구가 존재한다고 믿어준 유일한 사람이었으니까.',
  );
  await urara.say_and_wait([
    '어쩌면 엄마도 우라라의 친구를 볼 수 있어서, ',
    urara.sex,
    '와 이야기를 나눴을지도 몰라!',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '과(와) 함께 새전함에 동전을 던지고 줄에 달린 방울을 울리며, ',
    urara.get_colored_name(),
    '는 미소를 띤 채 작은 소리로 말을 이어갔다.',
  ]);
  await urara.say_and_wait(['근데 ', callname, '는 가끔…… 정말로 잔소리가 심하다니까!']);

  era.printButton('「우라라?!」', 1);
  await era.input();

  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 한 걸음 물러나다 미끄러질 뻔했지만, 다행히 신령님과 담당이 보는 앞에서 볼썽사나운 모습을 보이진 않았다.',
  ]);
  await era.printAndWait([
    '이럴 수가, 이제는 ',
    urara.get_colored_name(),
    '까지 그렇게 생각하다니. 게다가 ',
    me.get_phy_sex_title(),
    '가 잔소리 좀 할 수도 있지, 그게 무슨 잘못이라고!',
  ]);
  await urara.say_and_wait([
    '헤헤~ 이제 소원을 적을 차례야! ',
    callname,
    ', 준비됐어?',
  ]);

  era.printButton('「무, 문제없어. 우라라의 트레이너는 어엿한 어른이니까……」', 1);
  await era.input();

  await era.printAndWait([
    '성인으로서의 체면을 간신히 유지하며, ',
    me.get_colored_name(),
    '은(는) ',
    urara.get_colored_name(),
    '가 건네준 펜을 받아 들었다.',
  ]);

  const attr_change = new Array(5).fill(0);
  let pt_change = 0;
  urara.say(['그래서, ', callname, '는 어떤 소원을 빌 거야?']);
  era.printButton('「일단 주변 사람들 모두 건강하기를?」（스테미나+30）', 1);
  era.printButton('「하는 일마다 잘되기를…… 대충 그런 의미?」（전 능력치+5）', 2);
  era.printButton('「새해에는 어떤 어려움도 쉽게 극복할 수 있기를?」（스킬 포인트+35）', 3);
  switch (await era.input()) {
    case 1:
      attr_change[attr_enum.endurance] = 30;
      break;
    case 2:
      attr_change.fill(5);
      break;
    case 3:
      pt_change = 35;
  }
  await era.printAndWait([
    '미리 생각했던 내용을 빠르게 적어 내려간 뒤 펜을 내려놓고, ',
    me.get_colored_name(),
    '은(는) 여전히 집중해서 소원을 쓰고 있는 ',
    urara.get_colored_name(),
    '쪽으로 몸을 돌렸다.',
  ]);

  era.printButton('「우라라는 어떤 소원을 빌고 있어?」', 1);
  await era.input();

  urara.say('응! 빌고 싶은 게 아주 많지만, 딱 하나만 고르라면 역시──');
  era.printButton('더 먼 거리 (중&장거리 적성 상승)', 1);
  era.printButton('잔디에 도전 (잔디 적성 상승)', 2);
  if ((await era.input()) === 1) {
    await urara.say_and_wait(
      '아리마 기념은 거리가 아주 기니까, 『더 멀리 달릴 수 있게 해주세요』라고 적었어!',
    );
    new UraraEduMarks().dad++;
  } else {
    await urara.say_and_wait(
      '아리마 기념은 잔디 레이스니까, 『잔디 위에서 더 빨리 달릴 수 있게 해주세요』라고 적었어!',
    );
    new UraraEduMarks().gad++;
  }

  await era.printAndWait([
    urara.get_colored_name(),
    '가 한 자 한 자 정성껏 적어 내려가는 예상외의 소원을 지켜보며, ',
    me.get_colored_name(),
    '은(는) 대견함을 느끼는 동시에 묘하게 복잡한 기분이 들었다.',
  ]);

  era.printButton('「……의외로 진지하네. 목표를 정하니까 의욕이 생기는 거야?」', 1);
  await era.input();

  await urara.say_and_wait([
    '당연하지! 그런데 ',
    callname,
    ', 오늘 돌아가자마자 바로 훈련하러 가진 않을 거지?',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '의 명확한 욕구가 담긴 암시를 듣고, 두 사람의 소원을 잘 걸어둔 ',
    me.get_colored_name(),
    '은(는) 고개를 돌려 짓궂은 장난을 앞둔 어른의 미소를 지었다.',
  ]);

  era.printButton(
    '「원래는 안 그러려고 했는데, 우라라가 이렇게 열정적이라면야…… 지금 계단이 꽤 길어졌잖아?」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '그럴 리가. 설령 ',
    urara.get_colored_name(),
    '가 그렇게 열정적이지 않았더라도, 지형지물을 이용한 훈련은 자연스럽게 시작되었을 것이다.',
  ]);
  await urara.say_and_wait([
    '에에── 지금 바로 시작하진 말아줘, ',
    callname,
    '! 신령님의 배려를 그런 식으로 이용하면 안 된다구!',
  ]);
  await urara.say_and_wait(
    '신사 아래에 있는 노점들에서 못 논다면, 적어도 신사 안이라도 좀 더 둘러보게 해줘──',
  );
  await era.printAndWait([
    '어리광도 안 돼! ',
    urara.get_colored_name(),
    '는 착한 아이니까. 그리고 착한 아이의 어리광은 통하지 않는 법이거든!',
  ]);

  era.printButton(
    '「좋아! 그럼 노점에서 놀고 싶다는 우라라의 소원을 들어주기 위해, 뛰어보자고! 발밑 조심해!」',
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '너무해! 신령님이 화내실 거야! 돌아가서 같이 인절미랑 과자 먹으려고 했는데──',
  );
  await era.printAndWait([
    '눈물이 그렁그렁한 채 말하면서도, ',
    urara.get_colored_name(),
    '는 눈가를 훔치고는 조금 억울한 표정으로 먼저 계단을 뛰어 내려가는 ',
    me.get_colored_name(),
    '의 뒤를 따랐다.',
  ]);
  await era.printAndWait([
    '이게 다 너를 위한 거야. ',
    urara.get_colored_name(),
    '의 미래를 위한 한 걸음이니까, 신령님도 분명 묵인해 주시겠지.',
  ]);
  await era.printAndWait([
    '하지만 이렇게 계속 나아가기만 한다면 소원은 반드시 이루어질 것이고, 희망으로 가득 찬 ',
    urara.sex,
    '의 앞날도 충분히 기대할 만하지 않겠는가.',
  ]);
  await era.printAndWait([
    '자신을 앞질러 달려가는 홍백이 섞인 벚꽃색 뒷모습을 바라보며, ',
    me.get_colored_name(),
    '의 얼굴에 서린 미소도 점차 흐뭇함으로 변해갔다.',
  ]);
  await era.printAndWait(
    '어떤 면에서든 한 걸음 더 다가갈 수 있었으니, 새해 참배치고는 아주 훌륭하지 않은가.',
  );
  era.drawLine();
  await in_urara.say_as_unknown_and_wait(
    '우라라가 당신에게 이상한 소리를 많이 한 모양이네. 하지만 지난번에 내가 한 짓도 그만큼 심했으니까, 이번엔 용서해 줄게!',
  );
  await in_urara.say_as_unknown_and_wait(
    '어떤가요, 가끔은 『우라라』 방식으로 말해보는 건? 에, 안 닮았다고요? 으…… 당신이란 사람은 정말……',
  );
  await in_urara.say_as_unknown_and_wait(
    '응? 내 태도가 변했다고요? 아니라니까요. 아까도 말했잖아요? 당신 착각이라고──',
  );
  await in_urara.say_as_unknown_and_wait(
    '흠, 죄송합니다. 신년이라 나도 조금 들떠버렸나 보군요.',
  );
  await in_urara.say_as_unknown_and_wait(
    '그나저나 『통제욕이 강하다』니, 당신도 마찬가지 아닌가요? 우라라 말대로, 즐거우면 된 거 아닐까요?',
  );
  await in_urara.say_as_unknown_and_wait('그리고, 신사에서 일어난 일은 내가 한 게 아닙니다.');
  era.println();
  let wait_flag = get_attr_and_print_in_event(
    52,
    attr_change,
    pt_change,
    undefined,
    true,
  );
  wait_flag =
    sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
    wait_flag;
  wait_flag && (await era.waitAnyKey());
  return true;
};