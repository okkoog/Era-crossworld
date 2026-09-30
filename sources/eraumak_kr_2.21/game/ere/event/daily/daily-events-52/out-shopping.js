const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const EroParticipant = require('#/data/ero/ero-participant');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @type {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,number,number):Promise>} */
const handlers = {};

handlers[0] = async (
  urara,
  me,
  in_urara,
  callname,
  edu_marks,
  random_range,
  love,
) => {
  if (
    !edu_marks.spe_mach &&
    ((love >= 50 && Math.random() < 0.3) ||
      era.get('mark:52:쾌락') ||
      era.get('mark:52:음문'))
  ) {
    edu_marks.spe_mach = 1;
    await print_event_name('구석진 곳의 이상한 기계', urara);
    await in_urara.say_as_unknown_and_wait('……');
    era.drawLine();
    await era.printAndWait([
      '어느 외출 날, ',
      me.get_colored_name(),
      '이(가) 가벼운 배탈 증세로 잠시 자리를 비운 사이, 혼자 남겨진 ',
      urara.get_colored_name(),
      '는 호기심에 이끌려 주변을 탐색하기 시작했다.',
    ]);
    await era.printAndWait([
      '다양한 경품이 가득한 인형 뽑기 기계들 사이를 누비던 중, ',
      urara.get_colored_name(),
      '는 이내 한 번도 본 적 없는 기계 하나에 시선을 빼앗기고 말았다.',
    ]);
    await era.printAndWait(
      '그 눈에 띄지 않는 기계는 사냥감을 노리는 거미처럼 어두운 구석에 조용히 자리 잡고 있었으며, 수수한 외관과 짙은 분홍색 조명이 그 안의 신비로운 경품들을 가리고 있었다.',
    );
    await era.printAndWait(
      '기계 한구석에 적힌 「메지로 시티 제조」라는 문구는 그것이 이곳에 있어서는 안 될 물건임을 증명하고 있었으나, 이 은밀한 구석을 발견했을 때는 이미 너무 늦은 뒤였다.',
    );
    await era.printAndWait([
      '작은 ',
      urara.get_uma_sex_title(),
      '는 순식간에 이 몽환적인 기계에 영혼을 빼앗겼고, 깜짝 놀라 터져 나오려는 비명을 작은 손으로 틀어막으면서도 그 안의 「깜짝 선물」에서 눈을 떼지 못했다.',
    ]);
    await era.printAndWait([
      '희미한 분홍빛 아래, 기괴한 기구들이 강렬한 존재감을 뿜어내며 ',
      urara.get_colored_name(),
      ' 앞에 쌓여 있었고, 얇은 유리 너머로 ',
      urara.sex,
      '에게 유혹의 손길을 뻗는 듯했다.',
    ]);
    await era.printAndWait(
      '어서 이곳을 떠나야 한다는 것을 알고 있었음에도, 평소라면 말 잘 듣던 두 다리는 주인의 의지를 배반한 채 분홍빛 함정을 향해 한 걸음씩 다가갔다.',
    );
    await era.printAndWait([
      '굴속으로 뛰어들기 전 잠시 망설이는 앨리스처럼, ',
      urara.get_teen_sex_title(),
      '는 알 수 없는 동요 속에서 귀를 접은 채 파르르 떨리는 손을 동전 투입구로 뻗었다.',
    ]);
    await era.printAndWait(
      '움직임이 느릿하고 엉성한 다른 기계들과 달리, 이 괴상한 기계는 작동하기 시작하자마자 레버의 명령을 무섭도록 정직하게 수행했다.',
    );
    await era.printAndWait(
      '강력한 집게의 힘과 안정적인 운반 끝에, 커다란 발톱은 살짝 찌그러진 선물 상자를 가볍게 뱉어냈다.',
    );
    await era.printAndWait([
      '두근거리는 마음으로 얼떨결에 뽑은 물건을 꺼낸 ',
      urara.get_colored_name(),
      '는 책가방 안에 쏙 들어갈 크기의 작은 상자를 조심스레 열어보았다.',
    ]);
    await era.printAndWait([
      '투명한 창 너머로 보이는 것은 진열장에 있던 것보다 훨씬 작았지만, ',
      urara.get_colored_name(),
      '는 눈앞의 「실물」이 주는 압박감에 압도당했다.',
    ]);
    await era.printAndWait([
      '그것은 ',
      urara.sex,
      '가 ',
      sys_get_colored_callname(52, 30),
      '과 ',
      sys_get_colored_callname(52, 19),
      '이 몰래 숨겨둔 이상한 만화책에서 본 적 있는 「장난감」이었으나, 그 형태가 조금 달랐다.',
    ]);
    await era.printAndWait([
      '날카로운 끝부분과 타원형의 몸체를 가진 금속 플러그가 ',
      urara.get_child_sex_title(),
      '의 손안에서 차가운 기운을 내뿜었고, 금속 막대로 연결된 부드러운 재질의 바닥면에는 검은색 강력 흡착판이 붙어 있었다.',
    ]);
    await era.printAndWait([
      '직접 손에 쥐고 나서야 가여운 ',
      urara.get_uma_sex_title(),
      '는 그것이 잘 익은 배 한 알만큼 크다는 사실을 깨달았다. 이것은 결코 「초보자」를 위한 물건이 아니었다.',
    ]);
    await era.printAndWait([
      '마치 넋을 잃은 듯, ',
      urara.get_teen_sex_title(),
      '의 벚꽃빛 눈동자는 조명에 반사되어 매혹적인 진분홍색으로 물들었고, ',
      urara.sex,
      '는 정신이 몽롱해진 채 구석진 곳에서 자신의 치마와 상의를 걷어 올렸다……',
    ]);
    await urara.say_and_wait('괘, 괜찮아…… 그냥, 그냥 한 번 해보는 것뿐이니까……');
    await era.printAndWait([
      '작은 목소리로 스스로를 다독이며, ',
      urara.get_colored_name(),
      '는 포장지에 적힌 지침대로 흡착판을 바닥에 고정했다.',
    ]);
    await era.printAndWait([
      urara.get_teen_sex_title(),
      '는 어둠 속에서 한 손으로는 치마를 풀고 속바지와 팬티를 벗어 던졌으며, 다른 한 손으로는 꼬리를 가볍게 들어 올렸다.',
    ]);
    await era.printAndWait([
      '만화 속 괴롭힘당하는 여주인공의 모습을 흉내 내며, 하반신을 드러낸 작은 ',
      urara.get_uma_sex_title(),
      '는 네발로 엎드린 자세로 천천히 몸을 낮췄다.',
    ]);
    await era.printAndWait([
      '차가운 공기에 노출된 뒷구멍은 앞부분과 마찬가지로 긴장한 듯 움찔거렸고, 파르르 떨며 애널 플러그의 금속 끝부분을 조준했다.',
    ]);
    era.println();
    if (era.get('exp:52:애널횟수') >= 10) {
      await era.printAndWait([
        '끝부분의 차가운 감촉이 파고들자, ',
        urara.get_teen_sex_title(),
        '는 몸을 억제하며 이 조금은 과한 길이의 플러그를 인내심 있게 받아내려 했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.sex,
        '는 자신의 경험과 성기술을 과신했고, 이 작은 ',
        urara.get_sex_slave_title(),
        '의 몸이 실제로 얼마나 음란해졌는지를 간과했다.',
      ]);
      await era.printAndWait(
        '다리에 힘이 풀림과 동시에, 국혈은 중력에 못 이겨 아무런 준비도 없이 거대한 금속 덩어리를 단숨에 삼켜버렸다……',
      );
    } else {
      await era.printAndWait([
        '끝부분의 차가운 감촉이 닿자마자 ',
        urara.get_teen_sex_title(),
        '의 막 이완되려던 국혈이 바짝 조여졌고, 그 자극에 ',
        urara.sex,
        '은 이성을 되찾으며 뒤로 물러나려 했다.',
      ]);
      await era.printAndWait(
        '그러나 단련된 두 다리는 신체에 전해진 최음 신호에 민감하게 반응하여 허탈하게 힘이 빠져버렸다.',
      );
      await era.printAndWait([
        urara.get_teen_sex_title(),
        '가 미끄러지듯 바닥에 주저앉음과 동시에, 거대한 애널 플러그가 순식간에 뒷구멍을 끝까지 꿰뚫었다……',
      ]);
    }
    era.println();
    await era.printAndWait([
      '비명을 지를 틈조차 없이, 가여운 ',
      urara.get_uma_sex_title(),
      '는 갑작스러운 자극에 하반신을 뻣뻣하게 세우며 앞으로 고꾸라졌다.',
    ]);
    await era.printAndWait([
      '바닥에 붙어있던 흡착판이 「뽁」 하는 소리와 함께 떨어져 나갔고, ',
      urara.get_colored_name(),
      '의 작은 몸은 차가운 바닥 위로 무겁게 쓰러졌다.',
    ]);
    await era.printAndWait([
      '타고난 음란한 몸은 이물질의 침입에 의해 끊임없는 절정으로 내몰렸고, 뇌가 마비되어 버린 작은 ',
      urara.get_uma_sex_title(),
      '의 목구멍에서는 형체를 알 수 없는 소리들이 터져 나왔다.',
    ]);
    await era.printAndWait(
      '수태 준비를 마친 짐승처럼 무기력하게 바닥에 엎드린 채, 가쁜 숨을 몰아쉬는 분홍빛 음란마는 나지막이 용서를 구하는 듯하기도, 음탕한 애원 소리를 내는 듯하기도 했다.',
    );
    await era.printAndWait(
      '몸을 지탱할 힘조차 사라진 채, 팔은 몸의 흔들림에 따라 무력하게 바닥을 쓸었다.',
    );
    await era.printAndWait(
      '앳된 얼굴은 마치 능욕을 견뎌내는 것처럼, 자신의 몸에 짓눌려 바닥에 이리저리 비벼졌다.',
    );
    await era.printAndWait(
      '엉덩이와 꼬리는 발정기에 들어선 암컷이 육봉 앞에 머리를 조아리듯, 쾌감에 굴복하여 부지불식간에 높게 치켜세워졌다.',
    );
    await era.printAndWait(
      '음란하게 단련된 후혈은 이제 달콤한 사탕을 빨아먹는 입처럼, 탐욕스럽게 거대한 구체를 끊임없이 안쪽으로 빨아들였다.',
    );
    await era.printAndWait([
      '작은 ',
      urara.sex_code - 1 ? '암컷' : '수컷',
      '의 발달한 엉덩이는 과하게 크지는 않았으나, 두툼하고 부드러운 둔부 살이 조여들며 플러그의 바닥면을 압박하여 흔적도 없이 그 속에 파묻어버렸다.',
    ]);
    await era.printAndWait(
      '공포와 쾌감이 뒤섞인 눈물, 침, 그리고 땀방울이 다리 사이에서 걷잡을 수 없이 흘러나온 애액과 함께 매끄러운 타일 바닥을 적셨다.',
    );
    era.println();
    if (era.get('talent:52:유방사이즈') > 0) {
      await era.printAndWait(
        '두 덩이의 가슴이 몸의 거친 떨림에 맞춰 출렁였고, 달아오른 유두는 고장 난 수도꼭지처럼 제어할 수 없는 하얀 즙을 짜냈다.',
      );
      await era.printAndWait(
        '강렬한 고조감이 연달아 밀려오자, 하얀 속살은 주인이 당황할 정도로 많은 양의 젖을 뿜어냈고, 마치 누군가 우유 팩을 장난치듯 바닥에 쏟아버린 듯한 광경이 펼쳐졌다.',
      );
      await era.printAndWait(
        '미리 옷을 걷어 올리고 가슴 가리개를 풀지 않았더라면, 멈추지 않고 뿜어져 나오는 음란한 즙이 옷감을 속에서부터 다 적셔 도저히 남 앞에 나설 수 없는 꼴이 되었을 것이다.',
      );
      era.println();
    }
    await era.printAndWait(
      '각종 액체들이 구석진 곳의 타일과 바닥에 쉴 새 없이 튀어 올랐고, 결국 오락실의 아무도 없는 구석은 축축하게 젖어 들었다.',
    );
    await era.printAndWait([
      '질척이는 물소리가 몇 차례 잦아든 뒤, 약간의 기력과 이성을 되찾은 가여운 ',
      urara.get_uma_sex_title(),
      '는 마침내 무언가 떠올랐는지 음탕하게 젖은 몸을 이끌고 필사적으로 기어 가기 시작했다……',
    ]);
    await era.printAndWait([
      '줄지어 선 기계들을 지지대 삼아 비틀거리며 걸어간 끝에, ',
      urara.get_colored_name(),
      '는 하복부에서 느껴지는 이물감에 간신히 적응할 수 있었다.',
    ]);
    await era.printAndWait([
      '음탕한 흔적을 반쯤 숨긴 채, 작은 ',
      urara.get_uma_sex_title(),
      '는 ',
      callname,
      '가 오기 전 반쯤 기어가는 상태로 약속 장소에 돌아왔다.',
    ]);
    await era.printAndWait([
      '그리고 뒤늦게 나타난 ',
      me.get_colored_name(),
      '은(는) 얼굴이 붉게 달아오른 채 가쁜 숨을 몰아쉬는 ',
      urara.get_colored_name(),
      '를 보고 놀란 듯 눈썹을 치켜세웠다.',
    ]);

    era.printButton(
      '「무슨 일이야? 어디 몸이라도 안 좋은 거야? 힘들면 조금 더 쉬었다 가자……」',
      1,
    );
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 물론 어느 정도 상황을 짐작했으나, ',
      urara.get_colored_name(),
      '를 배려하여 지금은 모르는 척하는 것만이 유일한 길이라 생각했다.',
    ]);
    await era.printAndWait([
      '아무것도 모르는 척 건네는 ',
      me.get_colored_name(),
      '의 걱정 앞에, 생각할 겨를조차 없던 ',
      urara.get_colored_name(),
      '는 그저 본능적으로 떨리는 다리를 붙잡을 뿐이었다.',
    ]);
    await era.printAndWait([
      '하지만 억지 미소를 지어 보인 ',
      urara.sex,
      '는 이번만큼은 의외로 완강하게 「괜찮아!」 같은 말을 내뱉으며 혼자 걸어가겠다고 고집을 피웠다.',
    ]);
    await era.printAndWait([
      '그러나 몇 차례의 실랑이 끝에, 민감해진 몸을 주체할 자신이 없던 작은 ',
      urara.get_uma_sex_title(),
      '는 결국 ',
      me.get_colored_name(),
      '의 부축을 마지못해 받아들였다.',
    ]);
    await era.printAndWait([
      '시치미를 떼고 있던 ',
      me.get_colored_name(),
      ' 역시 긴장한 채 담당을 밀착 부축하며, ',
      urara.sex,
      '가 내비치는 다른 이상 징후들을 애써 못 본 척하려 애썼다.',
    ]);
    await era.printAndWait([
      '예를 들면 ',
      urara.get_colored_name(),
      '가 일어나던 의자 위에 남겨진 동그란 흡착판 모양의 젖은 흔적이라든가.',
    ]);
    await era.printAndWait([
      '예를 들면 돌아오는 길에 작은 ',
      urara.get_uma_sex_title(),
      '가 부자연스러운 떨림 때문에 자꾸만 발걸음이 느려지는 것이라든가.',
    ]);
    await era.printAndWait(
      '예를 들면 지퍼를 닫는 걸 깜빡한 가방 속에서, 눌린 자국이 있는 분홍색 상자가 덜컹거림에 따라 계속 보였다 안 보였다 하는 것이라든가.',
    );

    await era.printAndWait([
      '결국 ',
      me.get_colored_name(),
      '이(가) 비틀거리는 ',
      urara.get_colored_name(),
      '를 데리고 기숙사로 돌아왔을 때까지도, 몸을 떨고 있던 ',
      urara.sex,
      '는 ',
      me.get_colored_name(),
      '에게 제대로 된 말 한마디조차 건네지 못했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 역시 상황이 너무 특수했던 탓에 발정 난 담당 옆에서도 별다른 생리 현상을 느끼지 못했으나, ',
      me.get_colored_name(),
      '은(는) 밖에서 불필요한 행동을 하지 않았던 것을 내심 다행이라 여겼다.',
    ]);
    await era.printAndWait([
      '하지만 고개를 숙였을 때, 발밑에서 끊임없이 은색 실을 끌어내고 있는 담당을 보게 되자, 결국 더 이상 참을 수 없게 되었다……',
    ]);
    await era.printAndWait([
      '도망치듯 떠나는 ',
      me.get_colored_name(),
      '의 뒷모습을 보며, 여전히 음란한 액체를 뚝뚝 흘리고 있는 ',
      urara.get_colored_name(),
      '의 얼굴에는 어쩐지…… 아쉬움의 기색이 스쳐 지나간 듯했다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '어쩌면 음란해진 작은 ',
      urara.get_uma_sex_title(),
      '는 언젠가 다시 그 구석진 곳의 마성의 기계로 손을 뻗게 될지도 모를 일이다……',
    ]);
    await in_urara.say_as_unknown_and_wait('으으…… 더는 못 하겠어……');
    begin_and_init_ero(52);
    set_palam_to_max(52, part_enum.anal);
    await quick_make_love(
      new EroParticipant(52, part_enum.hand),
      new EroParticipant(52, part_enum.anal),
      false,
    );
    end_ero_and_train();
    sys_change_lust(0, get_random_value(lust_from_palam, 2 * lust_from_palam));
    sys_change_lust(52, get_random_value(lust_from_palam, 2 * lust_from_palam));
    era.add('exp:52:애널횟수', 1);
    switch (era.get('talent:52:음란한엉덩이')) {
      case -4:
        era.set('talent:52:음란한엉덩이', 0);
        break;
      case 0:
        era.set('talent:52:음란한엉덩이', 1);
    }
    era.set('talent:52:창자민감', 1);
  } else {
    switch (random_range) {
      case 0:
        await urara.say_and_wait('눈이 너무 어지러워…… 왜 안 피해지는 거지, 으아아……');
        await era.printAndWait([
          'Game Over가 뜬 기계 앞에 엎드린 채, ',
          urara.get_colored_name(),
          '의 눈동자 속 벚꽃은 현재 뱅글뱅글 돌아가는 중이다.',
        ]);
        await era.printAndWait([
          '몇 번의 용감한 도전 끝에, 지기 싫어하는 ',
          urara.get_colored_name(),
          '는 결국 고난도 STG의 어지러운 탄막 세례에 격추당하고 말았다.',
        ]);
        break;
      case 1:
        await urara.say_and_wait(
          '격투 게임 기계 앞에는 항상 사람이 많네! 하지만 이해할 수 있어! 다들 필살기가 정말 멋지거든!',
        );
        await era.printAndWait([
          '격투 게임 캐릭터의 동작을 귀엽게 흉내 내며, ',
          urara.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '을(를) 데리고 게임 기계 앞에 앉았다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          urara.get_colored_name(),
          '는 여전히 격투 게임에 서툰 모양이다. 이번에는 어떻게 적당히 져줄지 고민해 봐야겠다……',
        ]);
        break;
      case 2:
        await urara.say_and_wait([
          callname,
          '! 여기 게임 CD도 팔고 있어! 아! 이건 ',
          sys_get_colored_callname(52, 3),
          '이랑 ',
          sys_get_colored_callname(52, 24),
          '이 요즘 좋아한다고 했던 게임이야!',
        ]);
        await era.printAndWait([
          '최근 유행하는 게임 하나를 집어 든 ',
          urara.get_colored_name(),
          '의 미소는 공포스러운 표지 디자인과 강렬한 대조를 이루었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          get_chara_talk(3).get_colored_name(),
          '와 ',
          get_chara_talk(24).get_colored_name(),
          '이 공포 게임을 좋아할 리 없다고 생각했다. 아마 남들이 다 하니까 덩달아 산 것이리라.',
        ]);
        break;
      case 3:
        await urara.say_and_wait(
          '저 모습은 확실히 눈을 떼기 힘들지…… 다들 저런 걸 좋아하는 걸까?',
        );
        await urara.say_and_wait([
          callname,
          '도 우라라가 어른 같은 옷을 입고 어른스러운 춤을 추는 걸 보고 싶어? 만약 ',
          callname,
          '가 원한다면……',
        ]);
        await era.printAndWait([
          '댄스 게임기 대기 화면에서 끊임없이 흘러나오는 노출도 높은 댄스 애니메이션에 시선을 빼앗긴 채, ',
          urara.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '의 옷자락을 쥔 손에 힘이 들어갔다.',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '어떤 게임을 하든, 역시 ',
          callname,
          '랑 함께 해야 훨씬 더 즐거워!',
        ]);
        await era.printAndWait([
          '지나가는 학생들과 기계의 화려한 조명을 배경으로, ',
          urara.get_colored_name(),
          '와 ',
          me.get_colored_name(),
          '은(는) 깍지 낀 손을 맞잡은 채 행복한 표정으로 ',
          me.get_colored_name(),
          '의 곁에 기대었다.',
        ]);
        break;
      case 5:
        await urara.say_and_wait('오늘은 평범하게 인형 뽑기 하자! 평범한 게 제일이야!');
        await era.printAndWait([
          urara.get_colored_name(),
          '가 뺨을 붉히며 선언하더니, ',
          me.get_colored_name(),
          '이(가) 진지하게 인형을 뽑는 사이 갑자기 품 안으로 파고들어 ',
          me.get_colored_name(),
          '의 목덜미를 살짝 깨물었다.',
        ]);
    }
  }
};

handlers[1] = async (urara, me, in_urara, callname, edu_marks) => {
  await era.printAndWait([
    '트레이닝실 냉장고에 떨어진 식재료를 보충하기 위해, ',
    me.get_colored_name(),
    '과(와) ',
    urara.get_colored_name(),
    '는 함께 상점가로 장을 보러 나왔다.',
  ]);
  await era.printAndWait([
    '원래는 식품만 사서 돌아가려 했으나, 왠지 모르게 모여 있는 사람들에게 시선을 빼앗기고 말았다.',
  ]);
  await era.printAndWait(
    '왁자지껄한 분위기에 휩쓸린 것일까, 어느새 서로 닮아가는 담당과 트레이너는 약속이라도 한 듯 인파 속으로 파고들었다.',
  );
  await era.printAndWait(
    '레버의 회전에 따라 구르던 다각형 상자가 경쾌한 소리를 내며 멈췄고, 또 한 명의 아쉬운 사람이 티슈 한 갑을 챙겨갔다……',
  );
  await me.say_and_wait(
    '하지만 상점가 경품 추첨은 아마 추첨권이 있어야 가능할 텐데, 우리는 그냥 갈까……?',
  );
  await era.printAndWait([
    '그렇게 말하며 뒤를 돌아본 순간, ',
    me.get_colored_name(),
    '은(는) ',
    urara.get_colored_name(),
    '가 주머니 속을 뒤적이더니 마법처럼 추첨권 한 장을 꺼내는 것을 보았다.',
  ]);
  await era.printAndWait([
    '……음, 상점가의 작은 아이돌인 ',
    urara.get_colored_name(),
    '라면 충분히 있을 법한 일이다.',
  ]);
  await era.printAndWait([
    '눈을 반짝이며 의욕에 찬 ',
    urara.get_colored_name(),
    '를 보며, ',
    me.get_colored_name(),
    '도 아무 말 없이 ',
    urara.sex,
    '에게 엄지를 치켜세워 주었다.',
  ]);
  await urara.say_and_wait([callname, '! 같이 돌리는 거야! 하나, 둘——!']);
  await era.printAndWait([
    '싱글벙글 웃는 ',
    urara.get_colored_name(),
    '의 권유에 따라, ',
    me.get_colored_name(),
    '은(는) 앞으로 나가 담당과 함께 레버를 힘차게 돌렸다.',
  ]);
  await era.printAndWait([
    '작은 ',
    urara.get_uma_sex_title(),
    '의 기대 섞인 시선 속에서 상자는 회전하며 제각기 다른 소리를 냈고, 이윽고——',
  ]);
  switch (get_random_value(1 - !edu_marks.ticket, 4 + !edu_marks.spe_item)) {
    case 0:
      edu_marks.ticket = 1;
      await say_by_passer_by_and_wait(
        '작업자A',
        '축하해, 우라라 양! 특별상인 『온천 여행권』에 당첨됐어!!',
      );
      await era.printAndWait([
        '추첨을 진행하던 직원의 축하 소리와 함께, 온천 여관 여행권 한 장이 ',
        urara.get_colored_name(),
        '의 손에 쥐어졌다.',
      ]);
      await era.printAndWait([
        '여행권에 적힌 온천 여관은 어딘지 낯이 익었다. 아무래도 중앙 트레센과 오랫동안 협력 관계에 있는 곳인 듯했다.',
      ]);
      await urara.say_and_wait('온천? 이제 나도 온천에 갈 수 있는 거야? 야호!');
      await urara.say_and_wait([
        callname,
        '! 우리 언제 갈까? 내일? 모레? 아니면 글피? 그것도 아니면……',
      ]);

      era.printButton('「일단 아껴뒀다가 레이스 후의 포상으로 삼는 건 어때?」', 1);
      await era.input();

      await era.printAndWait([
        '지금은 시기가 너무 빠르다는 점과, ',
        urara.get_colored_name(),
        '가 계속 노력할 의욕을 갖게 하려는 점을 고려하여, ',
        me.get_colored_name(),
        '은(는) 그렇게 제안했다.',
      ]);
      await urara.say_and_wait([
        '응! 그렇게 정하자! 그럼 이건 ',
        callname,
        '가 맡아줘!',
      ]);
      await urara.say_and_wait([
        '나도 보상을 받을 수 있도록 열심히 노력할게! 그때가 되면 같이 즐겁게 온천에 가자!',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 고개를 끄덕이며, 온천 여행권을 웃으며 ',
        me.get_colored_name(),
        '의 손에 건네주었다.',
      ]);
      await urara.say_and_wait('흐흥~ 나중에 보상받을 그날이 기대되네!');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 미래에 대한 기대가 가득한 ',
        urara.get_colored_name(),
        '의 행복한 웃음을 보며, 손에 든 여행권의 무게가 더 무거워진 듯한 기분을 느꼈다.',
      ]);
      await era.printAndWait([
        '적절한 시기가 하루빨리 올 수 있도록, ',
        urara.get_colored_name(),
        '와 함께 힘내기로 했다.',
      ]);
      break;
    case 1:
      await say_by_passer_by_and_wait(
        '작업자A',
        '축하해! 1등상이야! 경품은 『특상 당근 함박 스테이크』란다!',
      );
      await era.printAndWait(
        '곧이어, 아직 김이 모락모락 피어오르는 당근 함박 스테이크 한 접시가 두 사람 앞에 놓였다.',
      );
      await urara.say_and_wait([
        '오! ',
        callname,
        ', 이거 정말 맛있어 보여! 지금 바로 먹어봐도 돼?',
      ]);
      await era.printAndWait(
        '음? 확실히 보기에도 아주 고급스러워 보이고, 시각적으로도 빛이 나는 것 같지만……',
      );

      era.printButton('「여기서는 좀 불편하니까, 일단 학원으로 가져가서 먹자!」', 1);
      await era.input();

      await urara.say_and_wait(['그것도 그렇네! 그럼 같이 돌아가자, ', callname, '!']);
      await era.printAndWait([
        '학원으로 돌아온 후, ',
        urara.get_colored_name(),
        '와 ',
        me.get_colored_name(),
        '은(는) 아주 대단해 보이는 이 함박 스테이크를 함께 나누어 먹었다.',
      ]);
      await era.printAndWait(
        '하지만 몇 번을 생각해도 신기했다. 분명 미리 준비된 기성품일 텐데, 어떻게 이런 맛이 나는 걸까.',
      );
      await era.printAndWait(
        '트레이닝실에서도 직접 이런 맛을 낼 수 있다면 좋을 텐데…… 그런 방법이 있을까?',
      );
      break;
    case 2:
      await say_by_passer_by_and_wait(
        '작업자A',
        '축하해! 2등상, 경품은 『당근 산더미』야!',
      );
      await era.printAndWait([
        '비록 2등상이었지만, ',
        urara.get_colored_name(),
        '에게는 이것이야말로 가장 기뻐할 만한 선물일 것이다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 생각한 대로, ',
        urara.get_colored_name(),
        '는 감사 인사를 하며 당근을 받았고, 곧바로 기쁜 표정으로 ',
        me.get_colored_name(),
        '을(를) 향해 고개를 돌렸다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 돌아가면 우리 이 당근들을 모두에게 나눠주자!',
      ]);
      await urara.say_and_wait(
        '나눠줄 사람이 정말 많네! 하지만 우선은 이 당근들을 같이 들고 돌아가야겠어!',
      );

      era.printButton('「응, 이건 다 내가 들게!」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '에게서 그 커다란 당근 바구니를 건네받은 후, ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 함께 돌아오는 길에 올랐다.',
      ]);
      await era.printAndWait([
        '하지만 돌아오는 길에, ',
        me.get_couple_title(),
        '은 상점가의 아저씨와 아주머니들에게 또다시 열렬한 축복과 관심을 받았다.',
      ]);
      await era.printAndWait([
        '그런데 지금 이 정도 양이면, 나눠준다고 해도 다 나눠주기 힘들지 않을까? ',
        urara.get_colored_name(),
        '는 정말 사랑받는 착한 아이구나……',
      ]);
      await era.printAndWait([
        '어느샌가 잔뜩 늘어난 당근들을 품에 안고, ',
        me.get_colored_name(),
        '은(는) 기분 좋은 고민에 빠졌다.',
      ]);
      break;
    case 3:
      await say_by_passer_by_and_wait(
        '작업자A',
        '3등상! 경품은 『당근 한 개』야!',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '는 직원에게 감사를 표하며 기쁘게 당근을 건네받았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 당근 한 개만으로도 ',
        urara.get_colored_name(),
        '가 기뻐할 것을 알고 있었지만, 왠지 모르게 무언가 해주지 않으면 마음이 놓이지 않았다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '이(가) 무슨 말을 해야 할지 망설이고 있을 때, ',
        urara.get_colored_name(),
        '가 먼저 행동에 나섰다.',
      ]);
      await era.printAndWait([
        '「탁」 하는 경쾌한 소리와 함께, ',
        urara.get_colored_name(),
        '는 당근을 가운데에서 반으로 뚝 부러뜨리더니, 더 굵은 쪽을 기쁜 듯 ',
        me.get_colored_name(),
        '에게 내밀었다.',
      ]);
      await urara.say_and_wait([
        '괜찮아, 당근이 한 개뿐이라도 당근인걸! ',
        callname,
        '! 이 더 큰 쪽을 줄게, 먹어봐!',
      ]);

      era.printButton('「……고마워.」', 1);
      await era.input();

      await era.printAndWait([
        '또다시 ',
        urara.get_colored_name(),
        '에게 감동받은 ',
        me.get_colored_name(),
        '은(는) 원래 많은 말을 생각했었으나, 지금 이 순간 할 수 있는 말은 오직 짧은 감사 인사뿐이었다.',
      ]);
      await urara.say_and_wait(['헤헤~ 천만에, ', callname, '!']);
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '는 개의치 않고 평소와 다름없는 미소를 지으며, 작은 ',
        urara.get_uma_sex_title(),
        '는 반으로 나눈 당근을 ',
        me.get_colored_name(),
        '의 손에 꼭 쥐여주었다.',
      ]);
      await era.printAndWait([
        '주변 사람들의 따뜻하고 치유받는 듯한 시선 속에서, ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 특별한 의미가 담긴 그 당근 한 개를 나누어 먹었다.',
      ]);
      await era.printAndWait([
        '나중에 겉모습이 어떻게 변하더라도, ',
        urara.get_colored_name(),
        '는 언제나 착하고 다정한 아이로 남아 있을 것이다.',
      ]);
      await era.printAndWait([
        '돌아가는 길의 하늘을 바라보며, ',
        me.get_colored_name(),
        '은(는) 그렇게 확신했다.',
      ]);
      break;
    case 4:
      await urara.say_and_wait('어라라, 종이 티슈네……!');
      await era.printAndWait([
        '티슈를 건네받은 후, 조금 실망한 듯 보이던 ',
        urara.get_colored_name(),
        '는 오히려 역으로 ',
        me.get_colored_name(),
        '을(를) 위로하기 시작했다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 너무 실망하지 마! 추첨은 정말 재밌었고, 티슈도 아주 좋은 거니까!',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 열심히 ',
        urara.sex,
        '의 트레이너를 위로하고 있었지만, 그 모습은 마치 스스로를 위로하는 것처럼 보였다.',
      ]);

      era.printButton(`「응, 괜찮아. 우라라 덕분에 안 슬퍼.」`, 1);
      await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        '의 대답을 들은 ',
        urara.get_colored_name(),
        '는 기쁘게 웃었지만, 그 웃음은 얼마 지나지 않아 조금 억지스러워졌다.',
      ]);
      await urara.say_and_wait('그치만, 역시 당근이 먹고 싶었어……');
      await era.printAndWait([
        '실망감을 감추려 노력하고 있었지만, ',
        urara.get_colored_name(),
        '의 귀는 축 처져 있었다.',
      ]);
      await era.printAndWait([
        '결국 조금 기운이 빠져 버리고 말았다. 돌아오는 길에, ',
        me.get_colored_name(),
        '은(는) 달래주는 마음으로 ',
        urara.get_colored_name(),
        '의 머리를 쓰다듬어 주었다.',
      ]);
      break;
    case 5:
      edu_marks.spe_item++;
      await say_by_passer_by_and_wait(
        '작업자A',
        '오! 특별상이네, 잠시만 기다리렴!',
      );
      await era.printAndWait(
        '추첨을 진행하던 직원이 몸을 돌려 탁자 아래를 한참 뒤적이더니, 상자에 담긴 둥근 머리의 전동 마사지기를 꺼냈다.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '는 상자를 건네받아 잠시 살펴보더니, 갑자기 무언가 떠오른 듯 고개를 들었다.',
      ]);
      await urara.say_and_wait([
        '아, 나 이거 알아! ',
        sys_get_colored_callname(52, 61),
        '도 이거 하나 가지고 있어! 다들 서로 빌려 가면서 쓰기도 하고——',
      ]);
      await era.printAndWait(
        '마사지기까지 서로 빌려 쓰다니 사이가 정말 좋구나, 그런데 왜 직접 하나 사지 않는 걸까?',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '의 의문이 입 밖으로 나오기도 전에, ',
        urara.get_colored_name(),
        '는 이어진 ',
        urara.sex,
        '의 뒷문장에서 답을 내놓았다.',
      ]);
      await urara.say_and_wait([
        '응! 다들 밤이 되면 이걸 다리 사이에 끼우고 쓰더라고! 그때 다들 그런, 그런…… 소리를 내거든!',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '가 무언가를 회상하며 말을 멈추자, 발그레한 홍조가 뺨을 타고 ',
        urara.get_colored_name(),
        '의 머리끝까지 번졌다.',
      ]);
      await urara.say_and_wait([
        '다들 옷도 잘 안 입고 있고, 정말 어른스러운 소리를 내곤 해. 그런……',
      ]);

      era.printButton('「……?」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '가 계속해서 머뭇거리며 말을 마치자, ',
        me.get_colored_name(),
        '과(와) 직원, 그리고 주변 사람들의 동작이 모두 일제히 멈췄다.',
      ]);
      await era.printAndWait([
        '자신이 무언가 잘못 말했나 의아해하며, ',
        urara.get_colored_name(),
        '는 잠시 멍하니 있다가 갑자기 무서울 정도로 조용해진 군중을 긴장한 듯 둘러보았다.',
      ]);
      await urara.say_and_wait([
        '에? 그런 게 아니야? 하지만 ',
        sys_get_colored_callname(52, 61),
        '은 정말 그렇게 이걸 쓰고 있었는걸. ',
        sys_get_colored_callname(52, 1),
        '이랑 ',
        sys_get_colored_callname(52, 14),
        '도……',
      ]);
      await urara.say_and_wait([
        '하, 하지만 다들 쓰고 나면 정말 시원한 표정을 지어! 땀도 잔뜩 흘리고! 그, 그게……',
      ]);
      await era.printAndWait([
        '주변에서 점차 웅성거리는 소리가 들려오는 가운데, ',
        urara.get_colored_name(),
        '는 여전히 천진난만하면서도 수줍은 표정으로 무언가 말을 이어갔다.',
      ]);

      era.printButton('「……!」', 1);
      await era.input();

      await era.printAndWait('안 돼, 이대로 두면 광역 사회적 매장이 일어날 거야!');
      await era.printAndWait([
        '상황이 좋지 않음을 깨달은 ',
        me.get_colored_name(),
        '은(는) 즉시 상황을 파악한 직원과 눈빛을 교환했다.',
      ]);
      await era.printAndWait([
        '곧이어 직원이 시선을 돌리기 위해 크게 소리치는 틈을 타, ',
        me.get_colored_name(),
        '은(는) 아직 무언가 더 말하려는 담당의 손을 잡고 현장을 빠져나왔다.',
      ]);
      await era.printAndWait([
        '단숨에 트레센으로 달려 돌아와 ',
        urara.get_colored_name(),
        '를 기숙사 입구에 내려준 뒤에야, ',
        me.get_colored_name(),
        '은(는) 마침내 안도의 한숨을 내쉬었다.',
      ]);
      await era.printAndWait([
        '하지만 떠나기 전, ',
        urara.get_colored_name(),
        '는 갑자기 머뭇거리면서도 이상하리만큼 단호하게 ',
        me.get_colored_name(),
        '에게 그 마사지기를 달라고 요청했다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '에게 옷자락을 붙들려 갈 수도 없고 고집을 꺾을 수도 없었던 ',
        me.get_colored_name(),
        '은(는), 결국 마지못해 마사지기를 ',
        urara.get_colored_name(),
        '에게 건네주었다.',
      ]);
      await era.printAndWait([
        '담당이 손을 놓는 순간 ',
        me.get_colored_name(),
        '은(는) 바로 후회했지만, 이미 기숙사 안으로 뛰어 들어간 ',
        urara.sex,
        '를 쫓아가는 것은 불가능한 일이었다.',
      ]);
      await era.printAndWait(
        '호기심이 많은 나이라 무엇이든 시도해보고 싶은 것은 어쩔 수 없지만, 역시 이건 좀……',
      );
      await era.printAndWait([
        '나중에 기회를 봐서 ',
        get_chara_talk(61).get_colored_name(),
        '에게 한마디 해둬야겠다고 생각했다.',
      ]);
      era.drawLine();
      await in_urara.say_as_unknown_and_wait(
        '……그래도, 걱정할 필요는 없겠죠. 이건 아마 젊은 날에 저지르는 실수 같은 것일 테니까.',
      );
      await print_event_name('특수 경품', urara);
      era.set('talent:52:성적흥미', -1);
  }
};

require('#/event/daily/daily-events-52/out-shopping-sub-events')(handlers);

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const love = era.get('love:52'),
    temp = await select_action_in_shopping_street();
  let random_range = 2;
  if (love === 100) {
    random_range = 5;
  } else if (love >= 75) {
    random_range = 4;
  } else if (love >= 50) {
    random_range = 3;
  }
  hook.arg = temp <= 1;
  await handlers[temp](
    get_chara_talk(52),
    get_chara_talk(0),
    get_chara_talk(52, chara_colors[52][1]),
    sys_get_callname(52, 0),
    new UraraEduMarks(),
    random_range,
    love,
  );
};