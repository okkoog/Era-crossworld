const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const PseudoUma = require('#/data/race/model/pseudo-uma');
const { race_enum } = require('#/data/race/race-const');
const { attr_enum, attr_names } = require('#/data/train-const');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { get_random_entry } = require('#/utils/list-utils');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {CharaTalk} in_urara
 * @param {string} callname
 */
module.exports = async (urara, me, in_urara, callname) => {
  await print_event_name(
    [
      '「모두」의 염원, ',
      { color: me.color, content: `「${me.actual_name}」` },
      '의 염원',
    ],
    urara,
  );
  await urara.say_and_wait([
    callname,
    ', 먼저 가 있을 준비는 됐어? 우라라도 금방 뒤따라갈게! 그러니까 오늘은 반드시 ',
    urara.sex,
    '를 데려와야 해!',
  ]);
  era.drawLine();

  era.printButton('「오늘 날씨가 그리 좋지 않네, 여기 앉아서 무슨 고민이라도 하는 거야?」', 1);
  await era.input();

  await era.printAndWait([
    '회백색의 공간 속을 끊임없이 걸어가던 끝에, ',
    me.get_colored_name(),
    '은(는) 넓은 초원 위에서 그 작은 뒷모습을 발견했다.',
  ]);
  await era.printAndWait(
    '생각해 보면 이곳에 들어온 것은 이번이 처음이었다. 방금 전까지 여신상 앞에 있었는데 참으로 신기한 일이었다.',
  );
  await era.printAndWait([
    '하지만 이곳의 주인은 방문객을 극도로 거부하는 듯했다. 엉터리 인사를 무시한 ',
    urara.sex,
    '는, ',
    me.get_colored_name(),
    '이(가) 다가오는 순간 풀밭에서 벌떡 일어났다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '……당신이 어떻게 여기까지 온 거죠? 하나같이 다들, 왜 그냥 내버려 두지 않는 건가요……',
  );
  await era.printAndWait([
    '결코 나타날 리 없는 「침입자」에게 분노 섞인 시선을 던지며, 눈앞의 작은 ',
    urara.get_uma_sex_title(),
    '는 불안함을 담아 ',
    me.get_colored_name(),
    '에게 다그치듯 물었다.',
  ]);

  era.printButton(
    '「여기는 너의 세계이고, 밖의 루프도 네가 만든 거잖아. 그러니 양쪽은 최소한 이어져 있을 테고, 방법은 늘 있기 마련이지.」',
    1,
  );
  await era.input();

  await me.say_and_wait(
    '즉, 손님이 오고 싶어 할 때 주인이 아주 조금이라도 허락하려는 마음만 있다면, 손님은 네 바람대로 이곳에 나타나게 된다는 뜻이야……',
  );
  await era.printAndWait([
    '마치 어린아이용 퍼즐 장난감을 푸는 것처럼 간단하다는 듯, ',
    me.get_colored_name(),
    '은(는) 어쩔 수 없다는 표정으로 어깨를 으쓱했다.',
  ]);
  await in_urara.say_as_unknown_and_wait('제가 묻고 싶은 건 당신이 그걸 어떻게 알았느냐는 거예요……');

  era.printButton(
    '「우라라가 세 여신님께 살짝 여쭤봤거든. 간단한 일이야. 그래서 준비를 좀 하고 들어왔지……」',
    1,
  );
  await era.input();

  await era.printAndWait([
    urara.get_colored_name(),
    '가 대체 어떻게 물어본 것인지는 전혀 알 수 없었지만, 어쨌든 여기 왔으니 ',
    urara.get_uma_sex_title(),
    '의 일이나 세 여신의 일은 너무 깊이 파고들 필요가 없지 않을까?',
  ]);
  await era.printAndWait([
    '의심이 서린 날카로운 시선을 견디기 힘들어진 ',
    me.get_colored_name(),
    '은(는) 슬그머니 시선을 피했다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '이번에도 타인의 사랑을 무단침입을 위한 도구로 쓰신 건가요? 당신은 정말 타인의 감정을 소비하는 쓰레기군요……!',
  );

  era.printButton(
    '「아직 말도 안 꺼냈는데 벌써 그렇게…… 우와! 알았어, 알았다고! 때리지 마, 내가 잘못했어. 이번 한 번만 봐주면 안 될까?」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '낯선 곳에서 우마무스메에게 걷어차일 뻔한 위기를 아슬아슬하게 넘긴 ',
    me.get_colored_name(),
    '은(는) 영혼이 빠져나가는 듯한 공포를 느꼈다.',
  ]);
  await era.printAndWait(
    '그래도 다행히 경찰이 질서를 가늠하지 않는 이 세계에서는, 주인에게 서둘러 사과하는 것이 효과가 있었다.',
  );
  await in_urara.say_as_unknown_and_wait(
    '당신은 늘 그런 식이죠. 강제로 남의 마음을 열고, 타인의 의미를 받아들이라고 강요하는 자가 비겁하지 않다고 생각하나요?',
  );

  era.printButton(
    '「그럴지도 모르지. 하지만 그게 뭐 어때서? 우라라도 내가 이곳에 서 있을 수 있는 『의미』를 주었는걸.」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '직설적인 ',
    me.get_colored_name(),
    '의 말에 「',
    urara.sex,
    '」도 침묵했다. 모든 것은 말하지 않아도 알 수 있었다. 최초의 만남이 그러했기 때문이다.',
  ]);
  await era.printAndWait([
    '만약 ',
    urara.get_colored_name(),
    '를 만나지 못했다면, ',
    me.get_colored_name(),
    '은(는) 아마 지금까지도 그날의 미망 속에서 답을 얻지 못한 채 이곳에 오지도 못했을 것이다.',
  ]);
  await era.printAndWait([
    '만약 「',
    urara.sex,
    '」의 선택이 없었더라면, ',
    urara.get_colored_name(),
    '는 ',
    me.get_colored_name(),
    '를 만나지 못했을 것이고, 당연히 3년 동안의 이인삼각 이야기도 여기까지 쓰이지 않았을 것이다.',
  ]);
  await era.printAndWait([
    '하지만 더 거슬러 올라가면, 모든 시작은 아마 ',
    urara.get_colored_name(),
    '가 고독한 한 사람을 「강제로」 자신의 삶 속으로 끌어들였던 그 순간이었으리라.',
  ]);
  await era.printAndWait([
    '한숨을 내쉬며, ',
    me.get_colored_name(),
    '은(는) 회백색 풀밭 위에 다시 조용히 주저앉은 작은 ',
    urara.get_uma_sex_title(),
    '의 옆에 조심스럽게 자리를 잡았다.',
  ]);

  era.printButton(
    '「그럼 좀 다른 이야기를 해볼까. 너를 만나러 준비하던 날들 동안, 비록 시간은 앞으로 나아가지 않았지만 우라라는 꽤 즐겁게 지냈어.」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '그래서요? 충분히 쉬었으니, 이제 다시 ',
    urara.sex,
    '를 떠밀어 앞으로 나아가게 할 생각인가요?',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '우라라조차도 알고 있는 사실인데, 제가 이 이야기의 완결을 직접 제 손으로 쥐고 있다는 걸 모르시나요?',
  );
  await era.printAndWait([
    me.get_colored_name(),
    '의 얼굴을 보기 싫은 듯, 「',
    urara.sex,
    '」는 귀를 접고 고개를 ',
    me.get_colored_name(),
    '과(와) 반대 방향으로 홱 돌려버렸다.',
  ]);

  era.printButton('「지금 우리가 여기 앉아 있는 건, 바로 네가 이 이야기를 끝내지 못하고 있기 때문이야.」', 1);
  await era.input();

  await era.printAndWait([
    '비록 표정은 보이지 않았지만, 지금 ',
    urara.sex,
    '의 몸은 마치 번개를 맞은 듯 떨리기 시작했다. 정곡을 찌른 모양이었다.',
  ]);
  await era.printAndWait([
    urara.sex,
    '가 어떻게 그런 일을 해냈는지는 모르겠지만, 시간을 루프시킨 이유는 정작 ',
    urara.sex,
    '가 진정으로 원하는 세계를 만들어내지 못했기 때문이었다.',
  ]);
  await era.printAndWait(
    '무언가에 대한 집착에 의지해 3년의 마지막에 시간을 멈춰둘 수는 있어도, 진정으로 정지된 세계를 구현하는 것은 불가능했다.',
  );
  await era.printAndWait(
    '내일이 찾아오는 것은 세 여신조차 막을 수 없는 일이며, 매일 똑같이 반복되는 숨바꼭질로는 아무것도 이룰 수 없기 때문이다.',
  );
  await era.printAndWait([
    '그리고 이제 한계에 다다른 「',
    urara.sex,
    '」에게는, 스스로 조용히 사라지는 것 외에는 이 루프를 멈출 방법이 남아있지 않았다.',
  ]);

  era.printButton('「――내 말이 맞지?」', 1);
  await era.input();
  era.printButton('「『하루 우라라』.」', 1);
  era.printButton('「『하루 우라라』.」', 2);
  era.printButton('「『하루 우라라』.」', 3);
  await era.input();

  await era.printAndWait(
    '정말이지, 고집 피우는 것도 정도가 있다. 이렇게 한다고 해서 누구도 행복해지지 않으며, 결코 문제를 해결할 수 있는 방법도 아니었다.',
  );
  await era.printAndWait([
    '이미 예상은 했지만 여신님의 장난은 참으로 짓궂었다. 한 세계에 성격이 정반대인 두 명의 ',
    urara.get_colored_actual_name(),
    '를 밀어 넣다니.',
  ]);
  await era.printAndWait([
    '아니면 그 무엇도 믿기를 겁내는 작은 ',
    urara.get_uma_sex_title(),
    '를 조금이라도 더 행복하게 해주고 싶었던 걸까? 아무렴 어떠랴, 오늘의 주요 임무는 ',
    urara.sex,
    '를 데리고 돌아가는 것뿐이다.',
  ]);

  era.printButton(
    '「그러니 상황이 엉망진창이 됐다고 해서 이런 식으로 굴 필요는 없어. 모두가 네가 돌아오길 기다리고 있으니까.」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '……하? 모두가 저를 기다린다고요? 당신도 정신이 나간 건가요? 저를 아는 사람은 오로지――',
  );
  await era.printAndWait(
    '말이 채 끝나기도 전에, 수많은 목소리가 공간 외부에서 쏟아져 들어오기 시작했고, 회백색의 초원은 순식간에 사람들로 붐비는 거리처럼 변했다.',
  );
  await era.printAndWait([
    '그것은 줄곧 ',
    urara.get_colored_name() ,
    '의 뒤에 숨어있던 「',
    urara.sex,
    '」조차도 수없이 들었던, 가장 친숙한 사람들의 인도하는 목소리였다.',
  ]);
  await era.printAndWait(
    '트레센의 친구들, 상점가의 사람들, 응원회 멤버들, 그리고 이름 모를 수많은 지지자들의 목소리까지……',
  );
  await era.printAndWait(
    '어두운 하늘을 걷어내려는 듯, 누군가의 질주를 응원하려는 듯, 다정하고도 우렁찬 목소리들이 초원 전체를 진동시켰다.',
  );

  era.printButton(
    '「너도 우라라라면 여기서 소통하는 방식을 가장 잘 알고 있지 않아? 여기는 너 혼자만의 세계가 아니야.」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '압도적인 분위기에 당황하며 서둘러 일어나는 「',
    urara.sex,
    '」를 마주하며, ',
    me.get_colored_name(),
    '은(는) 여유롭게 주머니에서 자신의 스마트폰을 꺼냈다.',
  ]);
  await era.printAndWait([
    '이곳은 「',
    urara.get_colored_name(),
    '의 세계」다. ',
    urara.get_colored_name(),
    '가 받은 축복 덕에, 단 한 사람이라도 ',
    urara.get_colored_name(),
    '를 생각하고 있다면 ',
    urara.sex,
    '는 어디든 갈 수 있었다.',
  ]);
  await era.printAndWait([
    '지금은 작은 ',
    urara.get_uma_sex_title(),
    '를 「승리로 인도하는 것」보다는, ',
    urara.get_colored_name(),
    '가 직접 「마음의 벽을 허무는 것」에 더 가까울지도 모르겠다.',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '는 ',
    urara.sex,
    '를 응원하는 모두 덕분에 강해지며, 그렇기에 ',
    urara.sex,
    '를 사랑하는 모두에게 오직 ',
    urara.sex,
    '만이 전해줄 수 있는 감동으로 보답할 수 있다.',
  ]);
  await era.printAndWait([
    '그렇기에 기억이 없더라도, 사람들은 이전부터 「',
    urara.get_colored_actual_name(),
    '」라는 작은 ',
    urara.get_uma_sex_title(),
    '에게 또 다른 이면이 있다는 것을 은연중에 눈치채고 있었다.',
  ]);
  await era.printAndWait([
    '그리하여 ',
    me.get_colored_name(),
    '의 지지 아래, ',
    urara.get_colored_name(),
    '는 이번 루프 속을 분주히 뛰어다니며 「',
    urara.sex,
    '」의 이야기를 도움을 주고 싶어 하는 모든 이들에게 공유했다.',
  ]);
  await era.printAndWait([
    '그러니 또 다른 ',
    urara.sex,
    '가 어디에 숨어 있든, ',
    urara.get_colored_name(),
    '는 「모두의 염원」에 따라 마음 가장 깊은 곳을 찾아낼 수 있었다.',
  ]);
  await era.printAndWait([
    '역시 시간만 주어진다면 모든 변화는 자연스럽게 이루어지기 마련이며, ',
    urara.get_colored_name(),
    '와 ',
    urara.sex,
    '의 트레이너는 정말이지 운이 좋았다.',
  ]);

  era.printButton(
    '「물론, 모두가 『우라라』를 믿어주기로 했으니, 나도 트레이너로서 힘을 좀 보태야 하지 않겠어?」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '무심코 모아두었던 마지막 결정적인 요소를 꺼내 들고, 「',
    urara.sex,
    '」의 앞에서 ',
    me.get_colored_name(),
    '은(는) 웃으며 녹음된 음성 파일의 재생 버튼을 눌렀다.',
  ]);
  era.drawLine();
  await era.printAndWait([
    '준비운동을 마치고 승부복을 정돈한 채, 회백색 공간의 입구 통로에 서서 ',
    urara.get_colored_name(),
    '는 오늘의 질주를 시작했다.',
  ]);
  await era.printAndWait([
    '앞에 놓인 길은 분명 아리마의 코스보다 훨씬 더 길 것이다. 비록 그것은 ',
    urara.get_colored_name(),
    '의 직감일 뿐이었지만, ',
    urara.sex,
    '는 여전히 두려움을 느끼고 있었다.',
  ]);
  await urara.say_and_wait(
    '하지만 네가 무서워하는 건 정말로 상처받을 『우라라』야? 아니면 아무것도 할 수 없는 『우라라』야?',
  );
  await era.printAndWait([
    '단 한 명뿐인 레이스에서, ',
    urara.get_colored_name(),
    '는 마치 보이지 않는 친구와 대화하듯, 전방의 텅 빈 회백색 허공을 향해 작은 소리로 반문했다.',
  ]);
  await era.printAndWait([
    '누구도 ',
    urara.get_colored_name(),
    '에게 정답을 알려주지 않았지만, 주변에서 들려오는 메아리들은 마치 ',
    urara.get_colored_name(),
    '의 말에 응답하는 것만 같았다.',
  ]);
  await era.printAndWait(
    '그것은 모두의 염원이 담긴 목소리였고, 앞길이 서서히 밝아짐에 따라 더 많은 목소리가 코스 양옆에 나타났다.',
  );
  await urara.say_and_wait(
    '노력한다고 해서 반드시 결과가 나오는 건 아니야. 변화하는 과정에서 모든 걸 잃을 수도 있다는 걸, 우라라도 알고 있어.',
  );
  await urara.say_and_wait(
    '하지만 방관하며 제자리에 머물기만 해서는 결코 아무런 결과도 얻을 수 없어. 이치를 깨닫는 것만으로는 어른이 될 수 없는걸.',
  );
  await urara.say_and_wait(
    '더 빨리 달리는 방법은, 눈물을 닦고 까진 무릎에 직접 반창고를 붙이는 것뿐이야……',
  );
  await urara.say_and_wait(
    '그러니 단 하나의 기회를 두고 남과 다퉈야 한다 해도 겁먹지 마. 왜냐하면――',
  );
  await era.printAndWait([
    '양옆으로 스쳐 지나가는 사람의 그림자들 속에서, ',
    urara.get_colored_name(),
    '는 레이스 때마다 관중석 가장 높은 곳에서 ',
    urara.sex,
    '를 지켜봐 주던 그 사람을 보았다.',
  ]);
  await era.printAndWait([
    '그리고 사람들의 다양한 염원 속에서도 마치 ',
    urara.get_colored_name(),
    '의 귓가에서 들리는 듯 선명한 「전화 녹음 소리」가 들려왔다.',
  ]);
  await era.printAndWait(
    '얼마나 달렸는지 알 수 없는 회백색의 공간이 점차 빛에 의해 벗겨져 나갔고, 수많은 빛의 반점들이 이정표처럼 공중을 수놓았다.',
  );
  await era.printAndWait([
    '오랫동안 달렸음에도 여전히 투지가 넘치는 몸을 이끌고, ',
    urara.get_colored_name(),
    '는 승리를 확신하는 미소를 띤 채 전방의 부서진 거울을 향해 돌진했다――',
  ]);
  era.drawLine();
  await era.printAndWait([
    callname,
    '의 목소리 「사람들은 비록 그렇게 강하지 않을지도 모르지만, 우라라가 걱정하는 것만큼 나약하지도 않아.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「부정할 순 없지, 이 길은 정말 잔혹해. 가족을 위해 나아가는 사람도 있고, 먹고살기 위해 달리는 사람도 있지.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「어떤 이는 산맥보다 무거운 꿈을 짊어지고 있고, 어떤 이는 소중한 사람과의 약속을 지키려 해……」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「누군가 말했듯이, 경기장에 서서 승리를 쟁취하는 이상 모든 사람을 웃게 만들 수는 없어.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「모든 사람을 『만족』시킬 수 있는 방법은, 결국 꼴찌로 달리는 것뿐이니까.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「하지만 그렇다 하더라도, 사람들이 염원하는 『행복과 희망』은 결코 타인에 의해 함부로 결정될 수 있는 게 아니야.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「수없이 넘어지더라도 각자에게는 행복을 추구할 권리가 있고, 희망의 정의 또한 저마다 다르거든.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「우라라가 하는 일은 결코 다른 사람을 해치는 게 아니야. 그러니 자신의 이상을 가볍게 여기지 마.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「『',
    urara.get_colored_actual_name(),
    '』는 모두의 미소를 짊어지고 있어. 그건 오직 ',
    urara.sex,
    '만이 감당할 수 있는 무게고, 다른 누구도 대신 짊어질 수 없는 거야.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「져도 상관없는 레이스란 없어. 다른 사람을 위해 자신의 꿈을 포기하지도 마.」',
  ]);
  await era.printAndWait([
    callname,
    '의 목소리 「그러니 마음껏 달려줘. 모두의 희망을 품고, 그리고 우라라 자신이 이기고 싶다는 신념을 담아서――」',
  ]);
  era.drawLine();
  await in_urara.say_as_unknown_and_wait('……!');
  await era.printAndWait(
    '먼지 낀 환영이 순식간에 걷히고, 공간의 파편들이 폭설처럼 흩날리다 사라지며 가려져 있던 원래의 모습이 드러났다.',
  );
  await era.printAndWait([
    '수많은 색채가 「',
    urara.sex,
    '」의 흐릿한 눈동자에 빛을 채웠고, 구름 한 점 없는 푸른 하늘 아래서 ',
    urara.sex,
    '는 믿기지 않는다는 듯 변화된 주변을 둘러보았다.',
  ]);
  await era.printAndWait(
    '이곳은 어떤 중요한 경기장도 아니었지만, 여전히 모든 것의 원점이었다. 바로 트레센의 훈련장이었다.',
  );

  era.printButton(
    `「그러니까, ${urara.sex}는 반드시 이곳에 도달하게 될 거야. 진정한 날개를 펼친, 『무적의 하루 우라라』로서.」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    me.get_colored_name(),
    '의 말과 함께 시야 끝에서 코스로 뛰어든 것은, 봄바람 같은 벚꽃빛이었다.',
  ]);
  await era.printAndWait([
    '또 다른 자신 앞에 서서 눈동자에 꽃을 피운 작은 ',
    urara.get_uma_sex_title(),
    '는 따뜻한 미소를 지었다.',
  ]);
  await urara.say_and_wait(
    '미안해, 조금 늦었지! 우라라, 드디어 너를 찾아냈어!',
  );
  await urara.say_and_wait(
    '자, 이제 무사히 탈출할 대책도 다 세워뒀어! 모두가 널 기다리고 있어, 같이 돌아가자!',
  );
  await era.printAndWait([
    '작은 ',
    urara.get_uma_sex_title(),
    '의 미소를 어떻게 마주해야 할지 몰라 「',
    urara.sex,
    '」는 겁에 질려 뒤로 물러나려 했으나, 눈앞의 인물에게 양손을 붙잡혔다.',
  ]);
  await era.printAndWait([
    '자신을 꽉 붙잡은 ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '의 두 손을 내려다보며, 고독했던 「',
    urara.sex,
    '」의 목소리가 가늘게 떨리기 시작했다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '……왜 또 이렇게까지 하는 거죠? 그냥 제가 사라지면 모든 게 끝나는 일인데……',
  );
  await urara.say_and_wait(
    '아니야! 무조건적인 침묵과 타협은 진정한 끝이 아니야. 그건 모두의 마음을 가두는 것뿐인걸!',
  );
  await urara.say_and_wait(
    '그리고 우라라는 너를 사라지게 두지 않을 거야! 친구를 돕는 건 당연한 일이잖아?',
  );
  await era.printAndWait([
    '자신을 놓아주지 않는 가장 소중한 두 사람을 바라보며, 「',
    urara.sex,
    '」는 이야기의 결말에서 마침내 결심을 굳힌 주인공처럼 입술을 꽉 깨물었다.',
  ]);
  await era.printAndWait(
    '무언가 더 말하고 싶다 하더라도, 이야기의 주인공은 언제까지나 무대 뒤에 우울하게 숨어있을 수만은 없는 법이다.',
  );
  await in_urara.say_as_unknown_and_wait(
    '역시 당신들은, 그냥 내버려 둘 수가 없는 바보들이군요……',
  );
  await era.printAndWait([
    '붙잡힌 손을 힘껏 뿌리치며, 「',
    urara.sex,
    '」는 마지막 고집을 부리듯 그들과 거리를 벌렸다.',
  ]);
  await era.printAndWait(
    '끼익거리는 금속음과 함께, 녹슬어 회백색만 남은 게이트가 코스 시작 지점에 나타났다.',
  );
  await era.printAndWait([
    '그리고 게이트 앞에는, 검은 눈빛이 점차 날카로워진 작은 ',
    urara.get_uma_sex_title(),
    '가 또 다른 자신과 같지만 훨씬 낡은 색조의 승부복을 다잡았다.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '그렇게까지 고집을 부리신다면, 당신과 ',
    urara.sex,
    ', 제가 마지막까지 제멋대로 굴게 해주세요――',
  ]);
  await in_urara.say_as_unknown_and_wait('왜냐하면, 저 또한 『하루 우라라』니까요!');
  era.drawLine();
  await urara.say_and_wait(
    '자신과의 대결이라니 생각지도 못했어! 응! 오히려 자신과의 싸움이니까 우라라는 지지 않을 거야!',
  );
  await urara.say_and_wait([
    '이제 입장이네! 괜찮아, 내가 반드시 ',
    urara.sex,
    '를 데려올게. 우라라도 자신의 소원을 제대로 빌었으니까!',
  ]);

  era.printButton(`「바로 그거야, ${in_urara.sex}에게도 너의 염원을 들려주자고!」`, 1);
  await era.input();

  await urara.say_and_wait('오! 우라라 GO――!');
  const chara = sys_get_chara_pseudo(52);
  const p = new PseudoUma(
    -1,
    '「하루 우라라」',
    in_urara.color,
    chara.motivation,
    attr_names.map((e) => Math.min(era.get(`base:52:${e}`), 1200)),
    chara.style,
    [...chara.adapt_style_list],
    [...chara.adapt_distance_list],
    [...chara.adapt_ground_list],
    chara.list_skill.map((e) => e.data),
  );
  p.legend = true;
  await simulation_game_in_event(chara, [p], race_enum.arim_kin);
  if (chara.rank.curr !== 1) {
    return false;
  }
  await in_urara.print_and_wait(
    '무한히 뻗어 나가는 코스 위에서, 날아오르는 벚꽃색이 빛 바랜 상대를 점차 뒤로 따돌리며 승부는 결정되었다.',
  );
  await in_urara.print_and_wait([
    '역시 자신은 수많은 전장을 헤쳐 온 ',
    urara.sex,
    '를 도저히 당해낼 수 없었다. 아무리 필사적으로 손을 뻗어봐도, 앞서가는 ',
    urara.sex,
    '에게 털끝만큼도 닿을 수 없었다……',
  ]);
  await in_urara.print_and_wait([
    '어리고 약했던 「또 다른 자신」이 시야 밖으로 사라지는 것을 바라보며, ',
    urara.get_teen_sex_title(),
    '는 점차 속도에 대한 제어력을 잃어갔다.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '제 눈이 닿지 않는 곳에서…… 벌써 이렇게나 높이 날 수 있게 되었군요……',
  ]);
  await in_urara.print_and_wait(
    '비록 성장을 통해 부서진 마음은 저절로 치유되지 않으며, 오직 「강해진다」는 이름의 반창고로 상처를 덮을 수 있을 뿐이지만――',
  );
  await in_urara.print_and_wait(
    '타인의 시선에 힘입어 자신을 염원하던 영웅의 모습으로 재구축하는 것 또한 하나의 용기이리라.',
  );
  await in_urara.print_and_wait([
    '마치 ',
    urara.get_colored_name(),
    '가 늘 넘어지고 반창고투성이가 되더라도, 여전히 꿋꿋하게 달려 나가는 그 두 다리처럼.',
  ]);
  await in_urara.print_and_wait([
    '「',
    urara.get_colored_actual_name(),
    '」라는 이름의 ',
    urara.get_uma_sex_title(),
    '는 분명 강하지 않다. ',
    urara.sex,
    '는 그저 스스로 선택한 변화를 통해 조금씩 더 강해지고 있을 뿐이었다.',
  ]);
  await in_urara.print_and_wait([
    '그리하여 이제 강해진 ',
    urara.sex,
    '는 이 모든 것을 받아들였고, 다시 한번 가장 머나먼 코스에 발을 내디뎠다.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '이제 지금의 우라라는 보호가 필요 없군요. 그리고 저 또한, 더 이상 필요하지 않게 되었고요……',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '역시 당신은 언제나 옳았네요. 저는 무능하고 지배욕만 강한 나쁜 보호자이자 나쁜 친구였어요……',
  );
  await in_urara.print_and_wait([
    '승부는 났음에도 코스는 여전히 끝없이 앞으로 이어졌고, 결승점 대신 뒤쪽에서 점차 붕괴가 몰려왔다.',
  ]);
  await in_urara.print_and_wait(
    '이전에 너무 많은 것을 제멋대로 수정해버린 탓에, 마지막에는 그저 묵묵히 어둠에 삼켜지는 길밖에 남지 않은 것이었다.',
  );
  await in_urara.say_as_unknown_and_wait(
    '속여서 죄송해요. 저는 이제 돌아갈 수 없어요. 하지만 이렇게 되면, 괜찮아지겠죠……',
  );
  await in_urara.say_as_unknown_and_wait('제대로 작별 인사를 하는 건…… 다음 기회로 미룰게요……');
  await in_urara.print_and_wait([
    '뒤에서 시시각각 다가오는 「결말」을 마주하며, 고독한 ',
    urara.get_teen_sex_title(),
    '는 바닥난 의지력을 놓아버리고 홀로 남은 레이스를 끝마치려 했다――',
  ]);

  era.printButton(
    '「그러니까 너 말이야! 이왕 시작한 이야기라면 내용이 아무리 엉망이라도 끝까지 책임을 져야 할 거 아냐!',
    1,
  );
  await era.input();
  era.printButton('「지금이다! 달려! 하루 우라라!」', 1);
  await era.input();
  await in_urara.print_and_wait('이 외침이 대체 누구를 위한 응원이었는지, 아마 정답은 필요 없을 것이다.');
  await in_urara.print_and_wait([
    '마지막 순간 전력을 다한 ',
    me.get_colored_name(),
    '의 외침과 동시에 도착한 것은, 작지만 다시 한번 온기와 힘을 전해주기에 충분한 손이었다.',
  ]);
  await in_urara.print_and_wait([
    '순식간에 전방이 다시 밝아졌고, ',
    urara.get_teen_sex_title(),
    '의 바로 앞에서 다시는 듣지 못할 줄 알았던 또 다른 자신의 부름이 들려왔다.',
  ]);
  await in_urara.print_and_wait(
    '자신에게 구원의 손길을 내민 것은, 자신 또한 한계에 다다랐음에도 여전히 미소를 잃지 않은 벚꽃이었다.',
  );
  await urara.say_and_wait('포기하지 마, 이제 조금만 더 가면 돼!');
  await in_urara.print_and_wait(
    '이른바 유대라는 말로는 부족한, 특별한 언어도 필요 없는, 더욱 순수하고 진심 어린 봄꽃 같은 감정이었다.',
  );
  await in_urara.print_and_wait(
    '사람들의 목소리가 양옆에서 울려 퍼졌고, 어느새 뒤쪽의 붕괴는 멀어졌다. 훈련장의 간이 관람석은 이미 빈자리 하나 없이 가득 차 있었다.',
  );
  await in_urara.print_and_wait([
    '달리는 동안 모든 것이 느려진 듯했고, ',
    urara.get_colored_name(),
    '에게 이끌린 ',
    urara.sex,
    '는 마침내 주변 환영 속의 전경을 똑똑히 볼 수 있었다.',
  ]);
  await in_urara.print_and_wait(
    '늘 함께 모여 다니는 「황금 세대」와 「패왕 세대」가 평소처럼 친구의 레이스 곁을 지키고 있었다.',
  );
  await in_urara.print_and_wait([
    get_chara_talk(26).get_colored_name(),
    ' 및 수많은 급우와 함께 서 있는 ',
    get_chara_talk(30).get_colored_name(),
    '의 품 안에는 먹물이 채 마르지 않은 벚꽃색 삽화가 그려진 그림책이 안겨 있었다.',
  ]);
  await in_urara.print_and_wait(
    '상점가와 응원회의 사람들, 그리고 전국 각지에서 온 얼굴도 모르는 수많은 이들이 트레이너의 지도 아래 가장 익숙한 응원 현수막을 펼치고 있었다.',
  );
  await in_urara.print_and_wait([
    '그리고 비록 여전히 걸음은 위태롭지만, 똑같이 미소를 띤 채 관중석 맨 앞줄에 서서 ',
    urara.sex,
    '들을 따라 앞으로 나아가는 한 명의 ',
    urara.get_uma_sex_title(),
    '까지……',
  ]);
  await in_urara.print_and_wait([
    '수많은 사람의 축복 속에서, ',
    urara.sex,
    '는 희미한 구조 요청 끝에 내밀어진 또 다른 자신의 손을 꽉 잡았다.',
  ]);
  await urara.say_and_wait(
    '떠나고 싶지 않다는 네 목소리를 들었어. 그래서 우라라가 널 붙잡은 거야……',
  );
  await urara.say_and_wait('난 널 떠나지 않아…… 우라라와―― 함께 가자!');
  await in_urara.say_as_unknown_and_wait(
    '하지만 당신들은 제게 응답할 필요 없어요, 당신들은 이런 게 필요 없잖아요……',
  );

  era.printButton(
    '「우리는 단 한 번도 너를 부정한 적이 없어. 처음부터 우라라를 지켜온 것도, 우리를 한자리에 모이게 한 것도 다 너였잖아?」',
    1,
  );
  await era.input();

  era.drawLine();
  await era.printAndWait([
    '함께 결승선을 통과한 후 질주는 경기장 위의 산책으로 변했고, 전방에서 기다리고 있던 ',
    me.get_colored_name(),
    '은(는) 이미 오래전부터 그들을 기다리고 있었다.',
  ]);
  await urara.say_and_wait([
    '응! 우라라도 ',
    callname,
    '도, 사실 지금까지 네게 정말 감사하고 있어!',
  ]);
  await urara.say_and_wait(
    '그리고 우린 늘 하나인걸! 혼자라면 다들 아무것도 할 수 없는걸!',
  );
  await era.printAndWait([
    '오늘의 「기적」을 위해 ',
    urara.get_colored_name(),
    '가 얼마나 많은 사람을 움직였는지는 이미 통계적으로 따지는 게 무의미할 정도였다.',
  ]);
  await era.printAndWait(
    '어쩌면 누구나 누군가에게는 길가의 얘깃거리일 뿐이고, 누구나 누군가의 인생을 스쳐 지나가는 과객일 것이며, 우리 모두는 아무것도 할 수 없는 별들에 불과할지도 모른다.',
  );
  await era.printAndWait(
    '하지만 그렇기에 서로가 이어져 성좌를 이룬다면, 비록 짧게 빛나는 불꽃일지라도 밤하늘 전체를 지속적으로 밝힐 수 있는 법이다.',
  );
  await era.printAndWait([
    '지금 이 순간, 「',
    urara.get_colored_actual_name(),
    '」라는 이름의 ',
    urara.get_teen_sex_title(),
    '로 인해 연결되어 계속해서 짜여가는 이 이야기가, 어쩌면 어둠을 몰아내는 기적일지도 몰랐다.',
  ]);

  era.printButton(
    '「너는 처음부터 방관자에서 변화를 만드는 사람으로 변했어. 그리고 봐…… 여기는 이렇게나 맑은걸?」',
    1,
  );
  await era.input();

  await urara.say_and_wait(
    '응! 타이밍이 좀 안 맞긴 했지만, 우라라는 네가 정말로 고맙다는 인사를 받을 자격이 있다고 생각해!',
  );
  await me.say_and_wait(
    '――이 이야기를 시작해줘서, 그리고 미약한 서로를 만나게 해줘서 고마워. 이제 우리가 널 집으로 데려다줄게.',
  );
  await era.printAndWait(
    '몸의 떨림은 콧소리 섞인 흐느낌으로, 그리고 마침내 숨기지 않는 눈물로 변해갔다.',
  );
  await in_urara.say_as_unknown_and_wait('당신들은…… 당신들은…… 정말 전부 다……');
  await era.printAndWait([
    '모두 앞에서 웅얼거리며 불평하던 회백색의 작은 ',
    urara.get_uma_sex_title(),
    '는 가장 볼품없으면서도 가장 행복한 울음을 터뜨렸다.',
  ]);
  await era.printAndWait(
    '타인의 신뢰를 거부하고 격렬하게 세상을 혐오했던 이유는, 결국 아무짝에도 쓸모없을 정도로 겁이 많은 자기 자신을 용서할 수 없었기 때문이었다.',
  );
  await era.printAndWait(
    '하지만 억지로 고통을 떼어내고 두려움 때문에 진실한 자아를 마음 깊은 곳에 숨긴 채 외면해버리면, 돌아오는 것은 허무하고 무거운 짐뿐일 것이다.',
  );
  await era.printAndWait(
    '수없이 넘어지고 아픔을 느낀 후에야, 비록 온몸이 상처투성이가 될지라도 비로소 더 용감해질 수 있는 법이다.',
  );
  await era.printAndWait([
    '퍼즐의 마지막 조각을 맞출 차례인가? 그 보잘것없이 작은, 「',
    urara.get_colored_actual_name(),
    '」라는 ',
    urara.get_uma_sex_title(),
    '의 이야기를?',
  ]);
  await era.printAndWait('이제는 변덕스러운 자기 자신과 화해할 때였다.');
  await era.printAndWait([
    '우는 ',
    urara.get_teen_sex_title(),
    '가 미소 짓는 ',
    urara.get_teen_sex_title(),
    '의 품으로 뛰어들었고, 미소 짓는 ',
    urara.get_teen_sex_title(),
    '는 우는 ',
    urara.get_teen_sex_title(),
    '를 부드럽게 끌어안았다.',
  ]);
  await era.printAndWait([
    '두 명의 「',
    urara.get_colored_actual_name(),
    '」의 잔영이 겹쳐지고, 새로운 햇살 아래 하나로 융합됨에 따라 주변의 모든 것이 서서히 녹아내리기 시작했다.',
  ]);
  await era.printAndWait([
    '그것이 바로 기적이 이루어지는 모습이리라. 빛에 휩싸이기 직전, ',
    me.get_colored_name(),
    '도 모르게 안도의 미소를 지었다.',
  ]);
  era.drawLine();
  await era.printAndWait([
    '이것은 「',
    urara.get_colored_actual_name(),
    '의 염원」이자, 「모두의 염원」이다――',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '의 소원은―― 결코 쉽게 끝나지 않을 미래 속에서, 모두의 미소를 위해 계속해서 달려 나가는 것이었다.',
  ]);
  era.drawLine();
  await era.printAndWait([
    urara.get_colored_name(),
    '의 품에 기댄 채, ',
    me.get_colored_name(),
    '은(는) 인자하게 미소 짓는 세 여신상 앞에서 깨어났다. 평소와 다름없는 평온한 트레센 학원, 곁에서는 담당 우마무스메가 미소를 띠며 ',
    me.get_colored_name(),
    '을(를) 기다리고 있었다.',
  ]);
  await urara.say_and_wait(['이제 뭐 하고 놀까? ', callname, '!']);
  era.rmData(52);
  era.println();
  const attr_change = new Array(5).fill(0);
  attr_change[get_random_entry(Object.values(attr_enum))] = 10;
  let wait_flag = false;
  wait_flag =
    get_attr_and_print_in_event(52, attr_change, 45, undefined, true) ||
    wait_flag;
  wait_flag = sys_change_motivation(52, 1) || wait_flag;
  wait_flag && (await era.waitAnyKey());
  return true;
};