const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {CharaTalk} in_urara
 * @param {string} callname
 */
module.exports = async (urara, me, in_urara, callname) => {
  await print_event_name(
    ['「', { color: in_urara.color, content: in_urara.sex }, '」의 기원'],
    urara,
  );
  await me.say_and_wait(
    '어떻게 된 거지, 분명 밤에 숙소에서 잠들었던 것 같은데? 여기는…… 학원 세 여신상 앞? 내가 왜 여기서 자고 있지?',
    true,
  );
  await me.say_and_wait(
    '머리가 너무 아프네, 어젯밤에 몽유병이라도 도진 건가? 하지만 옷은 제대로 갖춰 입었고, 그리고 지금 시간은…… 결국 벌써 이 시간이 됐다고?',
    true,
  );
  await me.say_and_wait(
    '뭔가 잊어버린 것 같은 기분이 들지만, 오늘은 더 중요한 일이 있으니까. 정말 뭔가를 놓친 거라면 나중에 생각하자.',
    true,
  );
  await me.say_and_wait('일단 훈련장에 가서 우라라와 합류하자, 오늘은 꼭……', true);
  era.drawLine();
  era.printButton('「우라라, 이달 말이면 아리마 기념인데, 지금 컨디션은 좀 어때?」', 1);
  await era.input();

  await urara.say_and_wait(
    '그러니까 이제 정말 괜찮다니까! 지금 우라라는 하나도 안 아파!',
  );
  await urara.say_and_wait([
    callname,
    ', 오늘은 병원에 재진 받으러 안 가도 되지? 그날은 그냥 컨디션이 안 좋아서 한 번 넘어진 것뿐이야!',
  ]);

  era.printButton(
    '「그거 다행이네, 그래서 오늘은 우라라를 병원에 데려가서 검사받게 하려는 게 아니야.」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '텅 빈 복도에 오직 두 사람분의 발소리만이 감돌고, ',
    me.get_colored_name(),
    '과(와) 우라라는 병원의 그 조용하고도 단조로운 백색 속을 가로질러 갔다.',
  ]);
  await era.printAndWait([
    '우라라가 경기장에서 쓰러졌으나 기적적으로 모든 것이 정상으로 돌아온 뒤로, 정기적으로 병원을 찾는 것은 두 사람의 최근 일상이 되었다.',
  ]);
  await era.printAndWait([
    '또래 아이들이 대부분 복잡한 검사와 도처에 풍기는 소독약 냄새를 싫어하듯, 우라라 역시 매번 자그마한 항의를 해왔다.',
  ]);
  await era.printAndWait([
    '……적어도 처음에는 그랬다. 어느 날, ',
    me.get_colored_name(),
    '이(가) 어느 누구도 알아채기 힘든 구석진 곳에서 누군가에게 버려진 듯한 작은 동물을 찾아내기 전까지는.',
  ]);
  await era.printAndWait([
    '마치 잊힌 듯한 그 방의 문을 열고, ',
    me.get_colored_name(),
    '은(는) 곁에 있던 「하루 우라라」를 방 중앙에 놓인 침대 앞으로 안내했다.',
  ]);
  await era.printAndWait([
    '순백의 병상 위, 몸을 웅크린 벚꽃색의 ',
    urara.get_teen_sex_title(),
    '는 귀와 꼬리를 미세하게 흔들며, 건강하고 평온한 숨소리를 내며 조용히 잠들어 있었다.',
  ]);
  await era.printAndWait([
    urara.sex,
    '의 침대 곁에는 의료 기기 하나 없었고, 심지어 등교라도 하려는 듯 트레센의 교복을 입고 있었으며, 분홍색 리본도 방금 묶은 듯 빳빳했다.',
  ]);
  await era.printAndWait([
    '하지만 그저 수업 날 늦잠을 자고 있는 것처럼 보이는 이 작은 ',
    urara.get_uma_sex_title(),
    '는, 지금 ',
    me.get_colored_name(),
    '의 곁에 서서 침묵에 빠진 「',
    urara.sex,
    '」와 한 치의 오차도 없이 똑같았다.',
  ]);

  era.printButton(
    '「쓰러지기 직전까지만 해도 누가 봐도 이상한 상태였는데, 깨어나니 몸도 마음도 아무 일 없었다는 듯 건강하다니.」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '하얀 시트 위에 웅크린 또 하나의 벚꽃색 덩어리를 응시하며, ',
    me.get_colored_name(),
    '은(는) 고개도 들지 않은 채 곁에 있는 「',
    urara.sex,
    '」와 대화를 이어갔다.',
  ]);
  await era.printAndWait([
    '굳이 상대의 얼굴을 확인할 필요도 없었다. ',
    me.get_colored_name(),
    '은(는) 최근 계속해서 자신의 곁을 지켜주던 「',
    in_urara.get_colored_actual_name(),
    '」의 정체가 누구인지 이미 진작에 눈치채고 있었다.',
  ]);

  era.printButton(
    `「우라라가 확실히 튼튼한 아이긴 하지만, ${urara.sex}가 슈퍼솔져였다는 기억은 없는데 말이야.」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    '분위기와 표정이 반전되며 침대 머리맡에 걸터앉은, ',
    urara.get_colored_name(),
    '와 닮은 「',
    urara.sex,
    '」는 위장을 벗어 던지고 슬픔이 서린 진실된 얼굴을 드러냈다.',
  ]);
  await in_urara.say_as_unknown_and_wait('……언제부터 눈치채신 건가요?');

  if (era.get('relation:52:0') > 150) {
    era.printButton(
      '「태도 변화가 너무 명확했어. 처음에는 우라라가 화가 난 줄 알았지만, 그러기엔 지속 시간이 너무 길었거든.」',
      1,
    );
    await era.input();
    await me.say_and_wait(
      [
        '함께 있어 줘서 고맙지만, 흉내 내는 건 아직 좀 부족하네. 미안해, ',
        urara.get_colored_name(),
        '가 이렇게 되어서 당신도 괴롭겠지……',
      ],
      true,
    );
    await era.printAndWait([
      '「',
      urara.get_colored_actual_name(),
      '」에 비해 몹시 탁해진 그 벚꽃빛 눈동자를 정면으로 응시하며, ',
      me.get_colored_name(),
      '과(와) ',
      urara.sex,
      '는 시선을 맞추었다.',
    ]);
  } else {
    era.printButton(
      '「처음에는 정말 몰랐지만, 역시 위화감이 들었어. 게다가 요즘 우라라는 꽤나 내성적으로 변한 것 같았고.」',
      1,
    );
    await era.input();
    await me.say_and_wait(
      '무엇보다 사실 내가 잘못한 일들이 많잖아? 당신이 굳이 이렇게까지 할 필요는 없었을 텐데, 안 그래?',
      true,
    );
    await era.printAndWait([
      '죄책감에 찌든 얼굴로 피곤한 듯 얼굴을 비빈 뒤, ',
      me.get_colored_name(),
      '은(는) 그 탁해진 벚꽃빛 눈동자와 시선을 마주했다.',
    ]);
  }
  await in_urara.say_as_unknown_and_wait(
    '하지만 저로서는 이렇게 할 수밖에 없었어요. 이제 마지막이잖아요. 우라라가 쓰러졌다는 사실을 들켜선 안 돼요. 일이 더 복잡해질 테니까요.',
  );
  await in_urara.say_as_unknown_and_wait(
    '그리고 제가 이렇게 하지 않았다면 당신이 무슨 짓을 저질렀을지 모르기도 하고요. 우라라가 깨어났을 때 당신이 곁에 없으면 곤란하니까요.',
  );
  await era.printAndWait([
    '곁에서 여전히 깊은 잠에 빠져 있는 ',
    urara.get_colored_name(),
    '를 가만히 쓰다듬는 「',
    urara.sex,
    '」의 표정은, 아이를 달래는 어머니처럼 부드럽게 풀려 있었다.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '우라라도 참, 대체 언제까지 잠만 잘 생각인가요? 아리마에도 나가야 하잖아요. 어서 깨어나세요.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    callname,
    ' 씨가 당신을 찾아냈다고요? 여기서 더 늦잠을 자면 저도 언제 사라질지 모른단 말이에요.',
  ]);

  era.printButton(
    `「……사라진다고? 당신은 분명 실재하고 있고, 완전히 ${urara.sex}도 아니잖아? 그런데도 『보이지 않는 친구』처럼 사라진다는 거야?」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    me.get_colored_name(),
    '의 나직한 의문에 「',
    urara.sex,
    '」는 다시금 눈앞의 ',
    me.get_colored_name(),
    '을(를) 향해 슬픔이 묻어나는 미소를 지어 보였다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '그저 그런 예감이 들 뿐이에요. 어쩌면 저도 진짜가 아니라 누군가의 파편, 혹은 누군가의 그림자에 불과할지도 모르니까요.',
  );
  await in_urara.say_as_unknown_and_wait(
    '그러니 마지막에 우라라가 몸도 마음도 건강하게 이야기를 끝마칠 수만 있다면, 제가 사라지는 것 따위는 아무래도 좋아요.',
  );

  era.printButton(
    '「당신도 좀 진정해. 비록 지배욕 강한 참견쟁이 아줌마 같은 면이 있긴 해도, 자신을 그렇게까지 비하하는 건 너무 심하잖아?」',
    1,
  );
  await era.input();

  await era.printAndWait([
    '외모는 작은 ',
    urara.get_uma_sex_title(),
    '와 판박이면서 비관적인 말만 내뱉는 눈앞의 광경은, 정말이지 지켜보기 괴로운 것이었다.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '그런가요? 시시콜콜 따지기 좋아하는 ',
    urara.sex_code - 1 ? '로리' : '쇼타',
    '콘 ',
    me.get_adult_sex_title(),
    '에게 참견받고 싶지는 않네요.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '의 대답을 들은 ',
    urara.sex,
    '의 미소에서 자조적인 슬픔이 조금은 옅어진 듯했으나, 여전히 경직된 태도로 자기 부정을 멈추고 화제를 돌렸다.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '방금 말씀드렸듯이…… ',
    urara.sex,
    '가 쓰러진 뒤에 문득 깨달았어요. 제가 잠시 ',
    urara.sex,
    '의 몸을 빌려 ',
    urara.sex,
    ' 대신 달려 나갈 수 있을지도 모른다는걸요.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '그래서 잠시 ',
    urara.sex,
    '의 정신을 숨겨두었던 거예요. 원래는 들키지 말았어야 했는데, 결국 당신에게 발견되고 말았네요.',
  ]);
  await era.printAndWait([
    '「',
    urara.sex,
    '」가 ',
    urara.get_colored_name(),
    '를 쓰다듬던 손이 천천히 작은 ',
    urara.get_uma_sex_title(),
    '의 몸 안으로 가라앉았다. 마치 영사기에서 쏘아 올린 투영상을 통과하는 것처럼.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '게다가 이건 근본적인 해결책이 될 수 없는 방법이었어요. 제가 아리마에 나간다 한들 아무런 의미도 없으니까요……',
  );
  await in_urara.say_as_unknown_and_wait([
    '다행히 ',
    urara.sex,
    '는 잠든 와중에도 아무것도 할 줄 모르는 제게 달리는 법을 계속해서 가르쳐 주었기에, 지금까지 연기를 이어올 수 있었던 거예요.',
  ]);

  era.printButton(
    '「우라라가 왜 이렇게 된 건지…… 그 문제에 대해서는 내가 스스로 생각해야 할지도 모르겠네……」',
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '하지만 저는 당신에게 이 점을 분명히 강조해야겠어요. 당신 곁에 있었기에, ',
    urara.sex,
    '는 자신이 무언가를 두려워하고 있다는 사실조차 잊어버리고 말았던 거예요.',
  ]);
  await in_urara.say_as_unknown_and_wait([
    '그래서 완전히 각성한 ',
    urara.sex,
    '가 가장 먼저 한 일은 바로 숨는 것이었어요. ',
    urara.sex,
    ' 본인조차 언제 깨어날지 모를 내면 깊숙한 곳으로 말이죠.',
  ]);
  await era.printAndWait([
    '어쩌면 그렇기에, 「착한 아이일수록 자신의 마음을 소홀히 대하게 된다」…… 그래서 「',
    urara.sex,
    '」는 줄곧 ',
    urara.get_colored_name(),
    '가 생각만큼 강하지 않다고 말해온 것이리라.',
  ]);
  await era.printAndWait(
    '지나치게 다정했기에 타인에게 상처 입히는 것을 두려워했고, 타인의 비난을 두려워했으며, 마음가짐이 변하는 것을 두려워하다가, 끝내는 자신의 승리와 염원조차 두려워하게 되었다.',
  );
  await era.printAndWait(
    '타인에게 폐를 끼치고 싶지 않았기에 누구에게도 속마음을 털어놓지 못했고, 너무 오랫동안 외면해온 탓에 막혀버린 마음은 점점 더 완고해져만 갔다.',
  );
  await era.printAndWait(
    '자기 부정 뒤에 찾아올 정신적 안녕을 갈구한 나머지, 이성마저 잃고 곁에 있는 스승에게 신체적인 위안을 구하기까지 했으니……',
  );
  await era.printAndWait([
    '정말 기가 막히는군. 이런 평가를 내리고 싶지는 않지만, 이 정도로 눈치 빠르고 뒤틀린 우마무스메는 도대체 ',
    urara.sex,
    '의 집안 누구와 닮은 거란 말인가?',
  ]);

  era.printButton(
    `「하지만 이 모든 걸 좀 더 일찍 알아채지 못했어. 우라라의 염원이 무거워진 건 ${urara.sex} 자신의 선택이기도 하지만, 나 또한……」`,
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait([
    '당신은 충분히 잘해왔어요. 그리고 당신이 정말로 우라라에게 모진 마음을 먹을 수나 있겠어요? 게다가 당신이 곁에 없었다면 ',
    urara.sex,
    '는 진작에 무너졌을 거예요.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '오히려 당신은 줄곧 옳았어요. 결자해지라고 하죠. 우라라는 스스로 『깨어날』 수 없고, 다른 누구도 그 마음의 매듭을 풀 수는 없으니까요……',
  );

  era.printButton(
    `「그래서 결국 ${era.get('love:52') >= 75 ? '연인' : '친구'}(으)로서도, 트레이너로서도, 마지막 순간에 진정으로 아무런 역할도 하지 못했다는 거야?!」`,
    1,
  );
  await era.input();

  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 옆에 있는 협탁을 주먹으로 내리치려 했으나, ',
    urara.get_colored_name(),
    '의 평온한 옆얼굴을 보고는 차마 떨리는 손을 내리지 못했다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '당신도 보기만큼 냉정하진 않네요. 하지만 지금 우리 처지는 매한가지예요.',
  );
  await in_urara.say_as_unknown_and_wait(
    '능력은 늘 한 끗 차이로 부족하면서 세상을 원망하지도 못하는 범인 트레이너와, 아무것도 할 수 없으면서 타인의 행복을 강요하려 드는 환영……',
  );
  await in_urara.say_as_unknown_and_wait([
    '……그리고 마치 우리를 무언으로 질책하듯 깨어나지 못하는 ',
    urara.sex,
    '까지. 모든 것이 엉망진창이네요.',
  ]);

  era.printButton(
    `「무슨 소리를 하는 거야. 당신이야말로 ${urara.sex}의 가련한 트레이너에게 꽤나 심한 짓들을 골라 하지 않았나?」`,
    1,
  );
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '그래서 이제는 아니라는 거예요. 말했잖아요, 저는 모진 마음을 먹기로 했다고. 이야기의 결말을 제 손으로 거머쥘 거예요.',
  );

  era.printButton('「하지만 이 상황에서 내가 우라라를 포기할 리 없으니, 당신이 날 쫓아낼 수는 없을 거야.」', 1);
  await era.input();

  await in_urara.say_as_unknown_and_wait(
    '그렇게 긴장하지 마세요. 제가 당신을 쫓아낼 리 없잖아요? 오히려 저는 이 작은 잠자는 숲속의 미녀를 깨울 방법을 아주 잘 알고 있거든요.',
  );
  await era.printAndWait([
    '경계심과 의구심이 뒤섞인 ',
    me.get_colored_name(),
    '의 시선 앞에서 「',
    urara.sex,
    '」는 오히려 그 어느 때보다 평온한 미소를 지어 보였다. 그러나 그 몸짓은 ',
    me.get_colored_name(),
    '의 마음속 경보를 더욱 요란하게 울리게 만들었다.',
  ]);
  await in_urara.say_as_unknown_and_wait(
    '당신도 보지 않았나요? 쓰러진 우라라가 자신의 안식처 가장 깊은 곳으로 숨어버린 것을……',
  );
  await in_urara.say_as_unknown_and_wait(
    '그렇다면 제가 그 안식처 속 풍경을 현실로 만들어 버린다면, 우라라는 행복하게 깨어나서 행복하게 살아갈 수 있겠죠?',
  );
  await in_urara.say_as_unknown_and_wait([
    '이것이 제가 지금부터 써 내려갈 결말이에요. 그리고 이것이 바로 우라라가 당신을 불러 자신을 발견하게 만든 ',
    urara.sex,
    '의 목적이기도 하고요.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 뒤로 물러나려던 찰나, 주변 공간은 순식간에 익숙한 회백색으로 물들었고 짓누르는 듯한 압박감이 다시금 머리 위에서 쏟아졌다.',
  ]);
  await era.printAndWait([
    '침대 머리맡에 앉아 있던 「',
    urara.sex,
    '」는 일어나서 움츠러들려던 ',
    me.get_colored_name(),
    '의 손을 낚아챘고, ',
    me.get_colored_name(),
    '을(를) ',
    urara.get_uma_sex_title(),
    ' 특유의 괴력으로 가볍게 침대 위로 끌어당겨 눕혔다.',
  ]);
  await era.printAndWait([
    '시야가 뒤집히는 찰나, ',
    me.get_colored_name(),
    '은(는) 두 형상이 서서히 하나로 융합되는 ',
    urara.get_colored_name(),
    '가 천천히 눈을 뜨는 것을 보았다――',
  ]);
  era.drawLine();
  await in_urara.print_and_wait([
    '지금 이 모습, 당신과 우라라가 처음 만났을 때와 꽤 닮았다고 생각하지 않나요? 건망증 심한 ',
    urara.sex_code - 1 ? '로리' : '쇼타',
    '콘 ',
    me.get_adult_sex_title(),
    '.',
  ]);
  await in_urara.print_and_wait(
    '왜 그렇게 눈빛이 무거운가요? 아, 죄송해요. 지금의 당신은 말을 할 수 없다는 걸 깜빡했네요. 뭐, 지금의 저도 마찬가지지만요.',
  );
  await in_urara.print_and_wait([
    '그래요, 왜 하필 당신이었을까요? ',
    urara.sex,
    '가 그토록 겁을 먹었는데도 당신과 함께라면 계속 나아가겠다고 결심하게 만든 사람이 왜 당신이었을까요?',
  ]);
  await in_urara.print_and_wait(
    '저는 왜 이런 이야기를 써 내려가는 걸까요? 당신은 왜 이 이야기를 완성하려 하는 걸까요? 왜 이것이 우리들의 이야기여야만 하는 걸까요?',
  );
  await in_urara.print_and_wait(
    '제 앞가림조차 버거운 처지이면서도, 지금의 저는 그저 당신을 계속 바라보고 싶을 뿐이에요. 어쩌면 당신에게 가장 먼저 매료된 사람은 저였을지도 모르겠네요……',
  );
  await in_urara.print_and_wait(
    '다행이에요, 당신의 몸은 예전처럼 따뜻하네요. 조금씩 기분이 좋아지고 있나요?',
  );
  await in_urara.print_and_wait(
    '괜찮아요. 접촉이든 침범이든, 당신에게 이끌린 두 사람은 절대로 당신에게서 멀어지지 않을 테니까요. 그러니 조금은 솔직해져도 좋아요.',
  );
  await in_urara.print_and_wait(
    '왜 피하려고 하나요? 이런 행복을 받아들이고 싶지 않아서인가요? 안타깝게도 지금의 당신에게 거부권 따위는 없답니다.',
  );
  await in_urara.print_and_wait(
    '걱정하지 마세요. 우라라와 당신, 그리고 모두가 행복해질 수 있는 세계를 제가 만들어 드릴게요.',
  );
  await in_urara.print_and_wait(
    '비록 내일이면 당신은 아무것도 기억하지 못하겠지만, 다시 눈을 떴을 때 우라라는 행복한 모습으로 당신 곁에 돌아와 있을 거예요.',
  );
  await in_urara.print_and_wait('그러면, 이제 푹 자도록 하세요.');
  era.drawLine();
  await era.printAndWait([
    '악몽에서 깨어나듯 번쩍 눈을 뜬 ',
    me.get_colored_name(),
    '은(는) 욱신거리는 이마를 짚으며 흐릿한 시야로 주위를 둘러보았다.',
  ]);
  await era.printAndWait(
    '여기는 학원 세 여신상 앞 벤치인 듯한데, 대체 왜 여기서 잠들어 있었던 걸까? 그전에 무엇을 하려 했었더라?',
  );
  await era.printAndWait([
    '방금 전까지 상당히 공포스러운 꿈을 꿨던 것 같지만, ',
    me.get_colored_name(),
    '은(는) 죽어도 그 내용을 단 한 조각도 떠올릴 수 없었다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '의 앞에 서 있는 것은, 얼마나 기다린 것인지 알 수 없으나 여전히 밝은 미소를 띠고 있는 ',
    urara.get_colored_name(),
    '였다.',
  ]);

  era.printButton('「미안, 잠들어 버렸네. 우라라, 오늘 우리 병원에 다녀왔던가……」', 1);
  await era.input();

  await me.say_and_wait(
    [
      '병……원? 내가 왜 병원에 가자는 말을 꺼냈지? 눈앞의 담당은 이렇게나 건강해 보이는데, 도대체 왜 ',
      urara.sex,
      '를 병원에 데려가야 한다고 생각한 거지?',
    ],
    true,
  );
  await era.printAndWait(
    '이상하다. 무언가 단단히 잘못된 기분이 든다. 분명 아주 중요한 사실을 잊어버린 것 같은데…… 하지만…… 그게 대체 뭐지……?',
  );
  await urara.say_and_wait([
    '에? 병원? ',
    callname,
    ' 잠꼬대하는 거야? 우라라는 아직 검진받으러 안 가도 돼!',
  ]);
  await era.printAndWait([
    '현실감이 느껴지지 않을 정도로 부드러운 햇살을 등진 채, 환한 미소를 지은 ',
    urara.get_colored_name(),
    '가 그림자 속에서 비몽사몽한 상태인 ',
    me.get_colored_name(),
    '에게 도움의 손길을 내밀었다.',
  ]);

  era.printButton('「응, 아아, 그렇네. 미안, 내가 정말 잠결에 헛소리를 했나 봐――」', 1);
  await era.input();

  await era.printAndWait([
    me.get_colored_name(),
    '이(가) ',
    urara.get_colored_name(),
    '가 내민 손을 맞잡으려던 찰나, 광활한 교정의 풀과 나무조차 숨죽인 듯 적막에 휩싸여 있다는 사실을 깨달았다――',
  ]);
};