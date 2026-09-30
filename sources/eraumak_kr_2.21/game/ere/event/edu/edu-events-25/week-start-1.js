const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} handlers */
module.exports = (handlers) => {
  handlers.beginning = async (coffee, me, callname) => {
    const tachyon = get_chara_talk(32);
    await print_event_name('칠흑의 사냥개', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      '를 영입한 후, ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '는 트레이닝 센터에서 주행 테스트를 하기로 약속했다.',
    ]);
    await era.printAndWait([
      '그러고 보니, ',
      coffee.get_colored_name(),
      '의 트레이너가 되었으면서도, ',
      coffee.sex,
      '가 달리는 모습을 직접 보는 것은 이번이 처음이다. 영상을 통해 몇 번이나 ',
      coffee.sex,
      '의 선발 레이스를 지켜봤지만, 역시 무언가 부족한 느낌이었다.',
    ]);
    await era.printAndWait(
      '담당의 선발 레이스조차 직접 보지 않고 영입한 트레이너는, 아마 트레센에서도 당신이 처음이 아닐까……',
    );
    await era.printAndWait([
      '저 멀리, 이미 자리를 잡은 ',
      coffee.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '을(를) 향해 손을 흔들었다. ',
      me.get_colored_name(),
      '은(는) 잡념을 떨치고 ',
      coffee.get_colored_name(),
      '의 동작에 집중하기 시작했다.',
    ]);
    await era.printAndWait([
      '휘슬 소리와 함께, ',
      coffee.get_colored_name(),
      '가 스타트 라인에서 튀어 나갔다.',
    ]);
    era.printButton('「음…… 스타트가 그리 빠르진 않군. 역시 추입이나 선입에 어울리는 건가.」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      '에게 요구한 것은 ',
      coffee.sex,
      '자신의 페이스대로 달리며, 다른 ',
      coffee.get_uma_sex_title(),
      '가 경기장에 함께 있는 상황을 상상하는 것이었다.',
    ]);
    await era.printAndWait([
      '자신의 페이스를 유지하며, ',
      coffee.get_colored_name(),
      '는 부드럽고 완만하게 발걸음을 내디뎌 중반을 순조롭게 통과하고, 마지막 스퍼트 지점에 도달했다.',
    ]);
    await era.printAndWait('——쿠웅.');
    await era.printAndWait([
      me.get_colored_name(),
      '의 눈이, ',
      me.get_colored_name(),
      '에게 들려야 할 소리를 전해주었다.',
    ]);
    await era.printAndWait([
      '결승선을 향해 ',
      coffee.get_colored_name(),
      '의 몸이 아래로 푹 숙여지더니, 발아래에서 찰나의 순간 튀어 오르는 흙먼지와 함께 시위를 떠난 화살처럼 앞으로 쏘아져 나갔다. 이 범상치 않은 폭발력은 순식간에 ',
      me.get_colored_name(),
      '의 시선을 강렬하게 사로잡았다.',
    ]);
    await era.printAndWait([
      '마치 토끼를 쫓는 사냥개, 혹은 굶주린 독수리와도 같은 광기 어린 발걸음은, 평소 침착하고 차가운 인상의 ',
      coffee.get_child_sex_title(),
      '와 도저히 연결 지을 수 없었다.',
    ]);
    await era.printAndWait('하지만……');
    await era.printAndWait('아름다웠다.');
    await era.printAndWait([
      '마치 칠흑의 사냥개처럼 결승선을 찢어발기는 그 뒷모습을 보며, ',
      me.get_colored_name(),
      '은(는) 문득 그렇게 생각했다.',
    ]);
    era.println();
    if (era.get('cflag:32:모집상태') === recruit_flags.yes) {
      const c_call_t = sys_get_colored_callname(25, 32),
        t_call_c = sys_get_colored_callname(32, 25);
      await tachyon.say_and_wait(['여어, ', sys_get_callname(32, 0), '.']);
      await era.printAndWait([
        '익숙한 목소리가 들려와 ',
        me.get_colored_name(),
        '이(가) 뒤를 돌아보니, ',
        tachyon.get_colored_name(),
        '이 서 있었다.',
      ]);
      await tachyon.say_and_wait([
        '자네의 새로운 담당이 바로 ',
        t_call_c,
        '인가? 정말 우연이군, 하하하.',
      ]);
      await tachyon.say_and_wait([
        t_call_c,
        '의 목적은 아무도 보지 못하는 가상의 친구를 쫓는 것이지. 음, 일반인으로서는 확실히 이해하기 힘들 거야. 반면 나는, 레이스 ',
        coffee.get_uma_sex_title(),
        '의 한계를 추구하고…… 나아가 한계를 초월하여, 단순한 승리에만 머물지 않는 것을 목표로 한다네.',
      ]);
      await tachyon.say_and_wait(
        '우리 같은 괴짜 조합의 트레이너라니, 자네도 참 고생이 많겠어.',
      );
      await coffee.say_and_wait([c_call_t, '……여기서 뭘 하고 있는 거죠?']);
      await era.printAndWait([
        '테스트를 마친 ',
        coffee.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '의 곁으로 돌아와, ',
        me.get_colored_name(),
        ' 옆에 있는 ',
        tachyon.get_colored_name(),
        '을 못마땅한 듯 쳐다보았다.',
      ]);
      await tachyon.say_and_wait([
        '이런, 표정이 별로 좋지 않구만 ',
        t_call_c,
        '…… 하지만 우리 사이의 접점은 앞으로 점점 더 깊어질 거라네. 결국 우리는 같은 트레이너 아래에 있는 담당 ',
        coffee.get_uma_sex_title(),
        '니까 말이야, 그렇지 않나? 트 · 레 · 이 · 너 · 군?',
      ]);
      await coffee.say_and_wait([
        '트레이너 군…… ',
        c_call_t,
        '도 당신의 담당인가요? ',
        callname,
        '……',
      ]);
      await era.printAndWait([
        '이거 곤란하게 되었군. ',
        coffee.sex,
        '들 두 사람이 아는 사이일 줄이야, 게다가 사이도 그리 좋아 보이지 않는데……',
      ]);
      await tachyon.say_and_wait([
        '그럼 이만 가보겠네, 두 사람. 앞으로 서로 잘 부탁하네. 그리고 자네에게 거는 기대가 아주 크다네, ',
        t_call_c,
        '. 기대하고 있겠어—— 나와는 다른 의미에서 말이지.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 어떻게 ',
        coffee.get_colored_name(),
        '에게 설명해야 할지 고민하는 사이, ',
        tachyon.get_colored_name(),
        '은 의미심장한 말을 남긴 채 떠나갔다.',
      ]);
      era.printButton('「저 녀석은…… 정말……」', 1);
      await era.input();
      await coffee.say_and_wait([
        callname,
        '…… 잠시 ',
        c_call_t,
        '의 일은 잊어버리세요. 지금의 당신은, 저의 트레이너예요…… 우리에게 더 중요한 건, 친구를 쫓는 일이죠. 그저 그뿐이에요…… 그렇죠?',
      ]);
      await era.printAndWait([
        '그렇다, ',
        coffee.sex,
        '는 ',
        coffee.get_colored_name(),
        '이며, 다른 레이스 ',
        coffee.get_uma_sex_title(),
        '와는 관계가 없다.',
      ]);
    }
    await era.printAndWait([
      '생각을 정리한 후, ',
      me.get_couple_title(),
      '은(는) 오늘의 트레이닝을 시작했다.',
    ]);
  };

  handlers[28] = async (coffee, me, callname, flags) => {
    await print_event_name('영적 장애', coffee);
    await coffee.say_and_wait([callname, '……오늘은…… 몸이 무척 무거워요……']);
    await era.printAndWait([
      '트레이닝 중이던 ',
      coffee.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 곁에서 발걸음을 멈추고 나직하게 말했다.',
    ]);
    await era.printAndWait([
      '「제 몸 상태가 그리 좋지 않아요」——이전에 ',
      coffee.sex,
      '가 ',
      me.get_colored_name(),
      '에게 말한 적이 있었기에, ',
      me.get_colored_name(),
      '은(는) 처음에는 단순히 건강상의 문제로만 생각했다.',
    ]);
    await era.printAndWait([
      '이전에도 가끔 이런 일이 있었기에, ',
      me.get_colored_name(),
      '은(는) 대수롭지 않게 여기며 ',
      coffee.sex,
      '에게 무리하지 말고 푹 쉬라고 일렀는데……',
    ]);
    await era.printAndWait('——샤아아, 사그락……');
    await era.printAndWait([
      '바닥의 모래가 갑자기 기이하게 움직였다. ',
      coffee.get_colored_name(),
      '가 지나간 자리에는 마치 무거운 짐을 끌고 간 듯한 흔적이 남았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 급히 쓰러지려 하는 ',
      coffee.sex,
      '를 부축하여 의무실로 데려갔다.',
    ]);
    era.drawLine();
    await coffee.say_and_wait(
      '제 체중이…… 이렇게 큰 숫자는 본 적이 없어요…… 대체 무슨 일이 일어난 건지……',
    );
    await era.printAndWait([
      '의무실에서 간단한 검사를 받았지만 아무런 이상도 발견되지 않았다. 그러다 ',
      coffee.get_colored_name(),
      '가 시험 삼아 체중계 위에 올라가자, 그 믿기 힘든 숫자에 ',
      me.get_colored_name(),
      '은(는) 소스라치게 놀랐다.',
    ]);
    await era.printAndWait([
      coffee.sex,
      '의 체중이 평소의 변동 범위를 아득히 초과하여 급격히 증가해 있었다.',
    ]);
    await coffee.say_and_wait(
      '그리고 오늘은…… 몸이 종잇장처럼 느껴져요…… 온몸이 바싹 마른 것 같고…… 윽!?',
    );
    await era.printAndWait('——지지직, 빠드득!');
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 말이 끝나기도 전에, 작은 파열음과 함께 극심한 고통이 ',
      coffee.get_colored_name(),
      '의 창백한 얼굴에 스쳐 지나갔다.',
    ]);
    era.printButton('「무슨 일이야!?」', 1);
    await era.input();
    await era.printAndWait([
      '갑자기 비틀거리는 ',
      coffee.get_colored_name(),
      '를 붙잡자, 순간적으로 ',
      coffee.sex,
      '의 몸이 가벼워진 것이 느껴졌다. 하지만 지금은 그런 걸 따질 때가 아니다. ',
      me.get_colored_name(),
      '의 시선이 아래로 향했다. 설마 ',
      coffee.sex,
      '의 발에 문제가 생긴 건가!?',
    ]);
    await coffee.say_and_wait('제…… 발톱이……');
    await era.printAndWait([
      '서둘러 ',
      coffee.sex,
      '의 신발을 벗기자, ',
      coffee.sex,
      '의 메마른 발톱에 금이 가 있었고, 마치 작은 구멍이 뚫린 듯한 모습이었다.',
    ]);
    await coffee.say_and_wait(
      '오늘 체중이 갑자기 너무 무거워졌다가, 지금은 또 갑자기 너무 가볍게 느껴져요…… 그래서 계속 힘이 들어가지 않았던 거겠죠…… 발톱이 깨진 것도 아마 너무 건조해진 탓일 거예요……',
    );
    era.printButton('「발톱을 정리하고 살균 소독을 하자.」', 1);
    await era.input();
    await coffee.say_and_wait('아…… 그런 방법이…… 있었나요?');
    await era.printAndWait([
      '전용 치료제와 보강제를 사용하여 ',
      coffee.sex,
      '의 발톱을 고정했다. 다행히 트레이닝이나 레이스를 중단해야 할 만큼 심각한 상태는 아니었지만, 이런 일이 반복된다면……',
    ]);
    await coffee.say_and_wait([
      callname,
      ', 정말 대단하시네요…… 벌써 기분이 좀 나아진 것 같아요……',
    ]);
    await era.printAndWait([
      '그나저나, ',
      coffee.sex,
      '의 이런 격렬한 체중 변화는 설마……',
    ]);
    era.printButton('「……평소에 식욕은 좀 어때?」', 1);
    await era.input();
    await coffee.say_and_wait(
      '식욕…… 가끔은 정말 비정상적일 정도로 왕성해질 때가 있어요. 마치 제 위장이 밑 빠진 독이 된 것처럼…… 아무리 먹어도, 아무리 많이 먹어도 포만감이 느껴지지 않아서…… 그저 머릿속을 비우고 계속 먹게 돼요…… 반대로, 때로는 아예 아무것도 먹지 못할 때도 있죠. 억지로 입에 뭔가를 밀어 넣으려 해도, 손이 전혀 움직이지 않아요……',
    );
    await coffee.say_and_wait('하지만 그것들은…… 저 자신의 의지가 아니에요……');
    await era.printAndWait([
      '지금껏 ',
      coffee.sex,
      '는 이런 이상 현상을 혼자 견뎌온 것인가? 이런 고통을 겪으면서도 기꺼이 위험을 무릅쓰고 자신을 도와주려 하다니……',
    ]);
    era.printButton('「다음에 몸에 이상이 생기면, 꼭 사진을 찍어서 보내줘.」', 1);
    await era.input();
    await coffee.say_and_wait('사진, 알겠어요. 잊지 않고 사진을 찍어 보낼게요…… 하지만……');
    era.drawLine();
    await era.printAndWait([
      '며칠 후, ',
      coffee.get_colored_name(),
      '가 사진을 보내왔다.',
    ]);
    await era.printAndWait([
      '하지만…… ',
      coffee.sex,
      '가 무엇을 찍었는지 전혀 알 수 없었다. 사진에는 그저 기이한 문양만이 찍혀 있을 뿐이었다.',
    ]);
    await coffee.say_and_wait(
      '어떻게 찍어도 그렇게 나와버려서, 상처 부위를 보여드릴 수가 없네요…… 예전부터 그랬으니까, 아마 방법이 없겠죠…… 제 몸은 아마…… 계속 이럴 거예요……',
    );
    era.printButton('「그냥 나한테 말만 해주면 돼!」', 1);
    await era.input();
    await coffee.say_and_wait('당신에게……? 매번, 그래야 하나요?');
    era.printButton('「응, 내가 치료를 책임질게!」', 1);
    await era.input();
    await coffee.say_and_wait([
      '고마워요, ',
      callname,
      '…… 당신이 있으니…… 조금은, 안심이 되네요.',
    ]);
    await era.printAndWait([
      '그 후, ',
      me.get_colored_name(),
      '은(는) 필생의 지식을 총동원하고 언제나 만반의 준비를 갖추어, 마침내 ',
      coffee.get_colored_name(),
      '가 평범한 생활을 할 수 있도록 도왔다. 하지만…… 이것은 단순히 「몸이 좀 안 좋다」는 수준을 한참 벗어나 있었다.',
    ]);
    await era.printAndWait('역시 심령 현상인 걸까……');
    await era.printAndWait([
      '거기까지 생각이 미치자, ',
      me.get_colored_name(),
      '은(는) 미래에 대한 약간의 불안감을 떨칠 수 없었다.',
    ]);
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      [0, 10],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(25, -1) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(25, 0, 25, true, 3) || flags.wait_flag;
  };

  handlers[47 + 1] = async (coffee, me, callname, flags) => {
    era.set('cflag:25:축제이벤트표시', 0);
    await print_event_name('새해의 포부', coffee);
    await era.printAndWait([
      '새해의 시작과 함께, ',
      coffee.get_colored_name(),
      '도 클래식 급으로 승급했다.',
    ]);
    await era.printAndWait([
      '보통 이런 시기에는 트레이너와 담당 ',
      coffee.get_uma_sex_title(),
      '가 서로의 원대한 포부에 대해 논하곤 하지만……',
    ]);
    await coffee.say_and_wait(
      '지금은…… 제 몸 상태로는, 아직 거창한 포부를 말할 단계는 아니에요……',
    );
    await coffee.say_and_wait('올해는…… 적어도 친구의 뒤를 바짝 쫓을 수 있을 정도로 성장했으면 좋겠네요……');
    await era.printAndWait([
      coffee.sex,
      '의 선천적으로 허약한 체질은 여전히 개선되지 않았고, 목표는 여전히 멀기만 했다. 그럼에도 불구하고, ',
      me.get_colored_name(),
      '은(는) ',
      coffee.sex,
      '가 조금이라도 긍정적인 마음을 갖기를 바랐다.',
    ]);
    era.printButton('「기분 전환 겸 밖으로 좀 나가볼까?」', 1);
    await era.input();
    await coffee.say_and_wait('외출인가요…… 하지만, 어디로 가야 할지……');
    era.printButton(`${coffee.sex}가 물 만난 물고기처럼 느끼게 한다 (지구력+20)`, 1);
    era.printButton(`${coffee.sex}가 커피 한 잔을 즐기게 한다 (체력+400)`, 2);
    era.printButton('「그냥 밖을 거닐자」 (스킬 포인트+30)', 3);
    switch (await era.input()) {
      case 1:
        await coffee.say_and_wait(
          '물 만난 물고기……? 잘은 모르겠지만, 잡념을 물고기가 내뿜는 거품처럼 뱉어낼 수 있다면…… 그것도 나쁘지 않겠네요……',
        );
        await era.printAndWait([
          '그리하여 ',
          coffee.get_colored_name(),
          '를 데리고, ',
          me.get_couple_title(),
          '은(는) 수족관으로 향했다. ',
          coffee.sex,
          '는 수조 속의 물고기들을 아주 유심히 지켜보았다……',
        ]);
        await coffee.say_and_wait(
          '……이 물고기들은, 끝없는 수압에 맞서 그저 묵묵히 견뎌내고 있군요……',
        );
        await coffee.say_and_wait('저도 이들처럼…… 더 강해져야겠어요……');
        await era.printAndWait([
          coffee.sex,
          '는 물고기의 모습에 공감하며, 인내하는 법을 조금은 배운 듯했다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          25,
          [0, 20],
          0,
          undefined,
        );
        break;
      case 2:
        await coffee.say_and_wait(
          '커피…… 그렇네요, 커피 향기는 언제나 모든 것을 잊게 해주죠……',
        );
        await coffee.say_and_wait(
          '그럼 그 카페로 가요…… 평소에는 늘 혼자 가던 곳이지만……',
        );
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 안내를 받아, ',
          me.get_couple_title(),
          '은(는) 작은 카페에 도착했다. ',
          coffee.sex,
          '는 익숙하게 늘 앉던 자리에 앉았다……',
        ]);
        await coffee.say_and_wait([
          callname,
          '…… 커피를 마시는 순서를 아시나요? 이 가게에는 커피를 즐기는 나름의 순서가 있어요……',
        ]);
        await coffee.say_and_wait(
          '우선, 공기 중에 떠도는 향기를 즐기고…… 그런 다음 제철 커피를 한 잔 주문하는 거예요……',
        );
        await era.printAndWait([
          coffee.sex,
          '는 커피를 조금씩 입에 머금고 삼키며, 커피의 풍미를 마음껏 즐겼다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(
          25,
          undefined,
          0,
          JSON.parse('{"체력":400}'),
        );
        break;
      case 3:
        await coffee.say_and_wait(
          '……저는 정처 없이 돌아다니는 건 별로 좋아하지 않아요…… 인파 속에 휩쓸려 사라져 버릴 것 같은 기분이 들거든요……',
        );
        await coffee.say_and_wait([
          '하지만…… 그렇네요. 만약 ',
          callname,
          '…… 도 함께 있다면……',
        ]);
        await era.printAndWait([
          '그리하여 ',
          coffee.get_colored_name(),
          '를 데리고, ',
          me.get_couple_title(),
          '은(는) 트레센 근처의 거리로 나섰다. ',
          coffee.sex,
          '는 호기심 어린 눈으로 길가 상점의 쇼윈도를 구경했다……',
        ]);
        await coffee.say_and_wait(
          '생각보다…… 꽤 재미있네요…… 처음 보는 가구와 옷들이 가득해요……',
        );
        await coffee.say_and_wait('아, 저건 오래된 사이펀…… 그리고 골동품 커피잔이네요……');
        await era.printAndWait([
          '평소 거리를 걷지 않던 ',
          coffee.get_colored_name(),
          '는 처음 보는 것들을 발견하며 내심 영감을 얻은 듯했다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(25, undefined, 20);
    }
  };

  handlers[47 + 6] = async (coffee, me, callname, flags) => {
    await print_event_name('변화', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 수많은 기괴한 현상에 시달려 왔지만, 끈질긴 보살핌 덕분에 마침내 ',
      coffee.sex,
      '의 성적이 합격권에 도달했다.',
    ]);
    await coffee.say_and_wait(
      '체중은…… 여전히 갑자기 무거워졌다 가벼워졌다 하지만…… 성적은 점차 안정되고 있어요.',
    );
    await coffee.say_and_wait([
      '이게 다 ',
      callname,
      ' 덕분이에요…… 비록 목표까지는 아직 한참 남았지만요.',
    ]);
    await coffee.say_and_wait('목표는커녕…… 아직……');
    await era.printAndWait([
      coffee.sex,
      '가 원래 하려던 말을 짐작해 보려 했지만, ',
      me.get_colored_name(),
      '은(는) 도무지 ',
      coffee.sex,
      '의 속마음을 파악할 수 없었다.',
    ]);
    era.printButton('「다음 목표는 어디로 생각하고 있어?」', 1);
    await era.input();
    await era.printAndWait([
      coffee.sex,
      '의 현재 상태로 클래식 급 봄 시즌 레이스에서 승리하는 것은 어려울지도 모르지만, ',
      coffee.sex,
      '가 스스로 한계를 정하게 두고 싶지는 않았다.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 의견을 먼저 물어보고 그 답변을 통해 ',
      coffee.sex,
      '의 생각을 조금이라도 이해해 보기로 했다.',
    ]);
    if (era.get('cflag:32:모집상태') === 1) {
      await coffee.say_and_wait([
        '……',
        sys_get_colored_callname(25, 32),
        '도 참가하는, ',
        race_infos[race_enum.hoch_sho].get_colored_name(),
        '이에요.',
      ]);
      await era.printAndWait([
        race_infos[race_enum.hoch_sho].get_colored_name(),
        '…… 이곳은 ',
        get_chara_talk(32).get_colored_name(),
        '이 클래식 삼관의 길로 나아가는 아주 중요한 레이스다.',
      ]);
    } else {
      await coffee.say_and_wait([
        '……',
        race_infos[race_enum.hoch_sho].get_colored_name(),
        '예요.',
      ]);
    }
    era.printButton('「혹시 이유를 물어봐도 될까?」', 1);
    await era.input();
    await coffee.say_and_wait('사실…… 저의 의지는 아니에요. 하지만 친구가 계속 요구하고 있어요……');
    await coffee.say_and_wait('저더러 『꼭 가야 한다』고, 만약 가지 않는다면……');
    await era.printAndWait([
      '가지 않는다면? ',
      me.get_colored_name(),
      '은(는) 허리를 꼿꼿이 세우고 ',
      coffee.get_colored_name(),
      '의 다음 말을 기다렸다.',
    ]);
    await coffee.say_and_wait(
      '어떻게 될지…… 저도 모르겠어요. 친구는 그저 그렇게 말할 뿐이지만…… 아마 무서운 일이 일어날지도 몰라요……',
    );
    await era.printAndWait([me.get_colored_name(), '은(는) 한숨을 내쉬며 의자 등받이에 몸을 기댔다.']);
    await era.printAndWait([
      '아무래도 ',
      coffee.sex,
      '는 마음을 굳힌 모양이다. 비록 이것이 ',
      coffee.sex,
      ' 자신의 의지는 아닐지라도, 순수하게 트레이너의 관점에서 본다면……',
    ]);
    if (era.get('cflag:32:모집상태') === 1) {
      era.printButton('「가서 아그네스 타키온과 정면으로 승부해 보자!」', 1);
      await era.input();
    } else {
      era.printButton('「최선을 다해 달려보자!」', 1);
      await era.input();
    }
    await coffee.say_and_wait('……네! 그 누구라도…… 저는 뛰어넘을 거예요……');
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      new Array(5).fill(6),
      20,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(25, 0, 15) || flags.wait_flag;
  };

  handlers[47 + 17] = async (coffee, me, callname, flags) => {
    await print_event_name('포기할 것인가 말 것인가', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      '에게 있어, ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '는 ',
      coffee.sex,
      '의 목표를 이루기 위한 필수 조건은 아니다.',
    ]);
    await era.printAndWait([
      '——그렇다고는 해도, 일생에 단 한 번뿐인 더비는 ',
      coffee.sex,
      '에게도 여전히 거부하기 힘든 유혹이다.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 과연 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '에 출주할 수 있을지 테스트하기 위해, ',
      me.get_couple_title(),
      '은(는) 훈련장으로 향했다.',
    ]);
    await coffee.say_and_wait(['후우, 후우…… ', callname, ', 이 랩 타임이라면……']);
    await coffee.say_and_wait(
      '더비에서…… 승산이 있을까요? 만약 이길 수 있다면…… 분명 친구에게 더 가까이 갈 수 있을 텐데……',
    );
    era.printButton('「몸 상태는 좀 어때?」', 1);
    await era.input();
    await coffee.say_and_wait('……그다지 좋지는 않아요…… 하지만 이런 게 하루 이틀 일도 아니니까요……');
    await era.printAndWait([
      coffee.get_colored_name(),
      '를 더비에 내보내야 할지…… 솔직히 결론을 내리기가 쉽지 않다.',
    ]);
    await era.printAndWait([
      '트레이너인 ',
      me.get_colored_name(),
      '은(는) 신속하게 결단을 내려야만 한다.',
    ]);
    era.printButton('「……몸을 생각해서, 이번에는 포기하자.」', 1);
    era.printButton('「……기회는 단 한 번뿐이야.」', 2);
    if ((await era.input()) === 1) {
      await coffee.say_and_wait('포기…… 하는 건가요…… 알겠어요……');
      await era.printAndWait([
        '일생에 한 번뿐인 더비에 나가지 못하는 것이 아쉽긴 하지만…… 이 선택이 가을에 ',
        coffee.get_colored_name(),
        '에게 좋은 흐름을 가져다주기를 바랄 뿐이다.',
      ]);
      new CoffeeEduMarks().toky_yus = -1;
    } else {
      await coffee.say_and_wait('알겠어요……! 힘내겠어요! 반드시, 더비를 손에 넣겠어요……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 투지에 불타고 있다…… 하지만 이 선택이 가을 레이스에 지장을 주지 않기를 바랄 뿐이다.',
      ]);
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(25, [0, 10], 0);
    flags.wait_flag = sys_like_chara(25, 0, 20) || flags.wait_flag;
  };

  handlers[47 + 29] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:25:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 시작', coffee);
    await era.printAndWait([
      '트레센의 관례에 따라, ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '는 여름 합숙에 참여했다.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 원래 좋지 않았던 몸에 이전 트레이닝과 레이스의 피로가 쌓여 있다. 이 기간 동안 ',
      coffee.sex,
      '를 회복시킬 방법을 찾아야 한다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 굳은 결심과는 별개로, 역시 ',
      coffee.sex,
      '들도 아직은 학생인 것인지 합숙 장소에 도착한 레이스 ',
      coffee.get_uma_sex_title(),
      '들은 다들 들떠 있었다.',
    ]);
    await coffee.say_and_wait('후후후…… 기대되네. 합숙…… 어디로 가는 게 좋을까?');
    await coffee.say_and_wait(
      '어? 아무도 없는 단애 절벽? 그러고 보니, 깊은 산속의 잊혀진 동굴 같은 곳도 나쁘지 않겠네. 후후후후……',
    );
    await say_by_passer_by_and_wait(
      `레이스 ${coffee.get_uma_sex_title()} A`,
      '너, 너 지금 누구랑 얘기하는 거야? 카페~!? 소름 끼친다구!',
    );
    await say_by_passer_by_and_wait(`레이스 ${coffee.get_uma_sex_title()} B`, [
      '아하하…… 왠지 모르겠지만, ',
      coffee.sex,
      '랑 같이 있으면 꼭 심령 현상이 일어날 것만 같아……',
    ]);
    if (era.get('cflag:32:모집상태') === 1) {
      const tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '음~ 심령이라기보다는 신비라고 불러야겠지. 그렇지 않나? ',
        sys_get_callname(32, 0),
        '.',
      ]);
      await era.printAndWait([
        '저 멀리 허공을 향해 중얼거리는 ',
        coffee.get_colored_name(),
        '를 보며, ',
        me.get_colored_name(),
        '의 곁에 서 있던 ',
        tachyon.get_colored_name(),
        '이 마음대로 말을 걸어왔다.',
      ]);
      await tachyon.say_and_wait([
        '자네가 ',
        sys_get_colored_callname(32, 25),
        '과 어떤 일을 겪었는지는 자세히 모르겠지만, 눈에 보이는 괴물보다는 역시 이런 보이지 않는 존재들이 더 상대하기 까다로운 법이라네. 그러니 가급적 거리를 두는 것이 좋을 거야.',
      ]);
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 25),
        '에 대해서는, 그 친구라는 존재가 대체 무엇인지, 정말 존재하는지는 내 알 바 아니네. 내가 관심 있는 건 오직 ',
        coffee.sex,
        '가 무엇을 하려는가 하는 점이지.',
      ]);
    } else {
      await era.printAndWait([
        '저 멀리 허공을 향해 중얼거리는 ',
        coffee.get_colored_name(),
        '를 보며, ',
        me.get_colored_name(),
        '은(는) 한 가지 생각이 떠올랐다.',
      ]);
    }
    await era.printAndWait([
      '——친구. ',
      me.get_colored_name(),
      '을(를) 몇 번이나 도와주었지만, 정작 ',
      me.get_colored_name(),
      '은(는) 거의 아무것도 알지 못하는 존재.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 목표에서 핵심이 되는 그 친구란 대체 어떤 존재일까?',
    ]);
    await era.printAndWait(
      '평소에는 여유가 없어 깊게 알아볼 기회가 없었지만, 이번 여름 합숙이라면……',
    );
    await coffee.say_and_wait(['…………? ', callname, ', 무슨 일이신가요?']);
    era.printButton('「이번 여름…… 우리 진지하게 이야기를 좀 해보자.」', 1);
    await era.input();
    await coffee.say_and_wait('……기꺼이 그러죠.');
    await era.printAndWait([
      '친구에 대해 깊이 알아가는 것이 결국 ',
      coffee.get_colored_name(),
      '에 대한 이해를 넓히는 길이 될 것이라고 ',
      me.get_colored_name(),
      '은(는) 생각했다.',
    ]);
  };

  handlers[47 + 30] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:25:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    const tachyon = get_chara_talk(32);
    await print_event_name('플랜 B', coffee);
    await era.printAndWait([
      '여름 합숙이 막 시작된 어느 날, ',
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '를 합숙소의 한 방으로 불렀다.',
    ]);
    era.printButton('「너와 관련된 일이야…… 일단 텔레비전을 좀 보자.」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 의아한 표정으로 고개를 끄덕이며, ',
      me.get_colored_name(),
      '의 지시에 따라 텔레비전을 켰다.',
    ]);
    await coffee.say_and_wait([
      '…………!? ',
      sys_get_colored_callname(25, 32),
      '?',
    ]);
    await era.printAndWait([
      '화면에는 ',
      tachyon.get_colored_name(),
      '의 기자 회견 장면이 나오고 있었다.',
    ]);
    await tachyon.print_and_wait(
      '……방금 말씀드린 대로, 오늘부터 나 아그네스 타키온은—— 무기한 레이스 중단을 선언하겠네!',
    );
    await say_by_passer_by_and_wait('기자들', '————뭐라고요!?',);
    await era.printAndWait([
      '클래식 삼관 노선에서 가장 주목받던 레이스 ',
      coffee.get_uma_sex_title(),
      '중 한 명의 갑작스러운 발표에 장내는 술렁이기 시작했다.',
    ]);
    await say_by_passer_by_and_wait('기자 A', [
      tachyon.get_colored_name(),
      ' ',
      tachyon.get_adult_sex_title(),
      '…… 당신은 레이스에서 엄청난 잠재력을 보여주지 않았습니까, 대체 왜 이런 결정을 내린 거죠!?',
    ]);
    await tachyon.print_and_wait(
      '엄청난 잠재력이라니…… 그건 아직 내 진정한 실력조차 아니었다네.',
    );
    await say_by_passer_by_and_wait(
      '기자 B',
      '많은 이들이 당신의 승리를 의심치 않았는데, 대체 이유가 뭡니까!?',
    );
    await tachyon.print_and_wait(
      '뭐, 이유라면 한두 가지가 아니지. 진실에는 언제나 다양한 요인이 얽혀 있는 법 아니겠나?',
    );
    await say_by_passer_by_and_wait(
      '기자 C',
      '사실상의 은퇴 선언…… 이라고 이해해도 되겠습니까?',
    );
    await tachyon.print_and_wait(
      '그런 질문은 의미가 없네. 미래에 어떤 일이 일어날지는 그 누구도 장담할 수 없으니까.',
    );
    await tachyon.print_and_wait('그럼, 발표할 내용은 여기까지라네.');
    await era.printAndWait([
      '직후 ',
      tachyon.get_colored_name(),
      '은 회견장을 떠났고, ',
      me.get_colored_name(),
      '도 텔레비전을 끄고는 아직 충격에서 벗어나지 못한 ',
      coffee.get_colored_name(),
      '를 바라보았다.',
    ]);
    era.printButton('「간단히 말하자면…… 타키온은 레이스를 포기할 생각이야.」', 1);
    await era.input();
    await coffee.say_and_wait('그게 대체…… 무슨 이유로……');
    era.printButton(`「그건…… 나와 타키온이 내린 결정이야. 이제부터 ${tachyon.sex}는——」`, 1);
    await era.input();
    await tachyon.say_and_wait('그 점에 대해서는 내가 직접 설명하도록 하지.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 방문을 열고 들어와, ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '의 시선을 마주했다.',
    ]);
    await tachyon.say_and_wait([
      '간단히 말해, 내가 ',
      sys_get_colored_callname(32, 25),
      '—— 바로 자네에게서 새로운 가능성을 발견했기 때문이라네.',
    ]);
    await coffee.say_and_wait('새로운…… 가능성요?');
    await tachyon.say_and_wait([
      '그렇다네. 나의 목표—— 레이스 ',
      coffee.get_uma_sex_title(),
      '의 한계에 도달하고 나아가 그것을 초월하는 것…… 하지만 그것을 반드시 내 몸으로 직접 이뤄야만 할까? 길은 하나가 아니야. 검증해야 할 진리가 하나일지라도, 종점에 이르는 길은 여러 갈래가 있는 법이지.',
    ]);
    await coffee.say_and_wait('그게…… 무슨 뜻이죠?');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 한숨을 내쉬더니, 과장된 몸짓으로 손을 흔들었다.',
    ]);
    await tachyon.say_and_wait([
      '이만큼 말했는데 아직도 모르겠나…… 바로 『어드바이저』라네, 『어드바이저』! ',
      sys_get_colored_callname(32, 25),
      ', 자네의 어드바이저가 되겠다는 말이야!',
    ]);
    await coffee.say_and_wait('네…… 어드바이저요!?');
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 멍한 표정으로 무심코 ',
      me.get_colored_name(),
      '을(를) 바라보았고, ',
      me.get_colored_name(),
      '은(는) 고개를 끄덕였다.',
    ]);
    era.printButton('「맞아. 앞으로 타키온은 너의 어드바이저를 맡게 될 거야. 하지만 동시에……」', 1);
    era.printButton(`「너 역시 타키온의 목표를 달성하는 데 도움을 줄 의무가 있어……」`, 2);
    era.printButton('「지금 묻고 싶은 건, 바로 카페 너의 의견이야.」', 3);
    await era.input();
    await era.printAndWait([
      '말을 마친 ',
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '에게 생각할 시간을 주려 했지만, ',
      tachyon.get_colored_name(),
      '의 생각은 달랐다.',
    ]);
    await tachyon.say_and_wait('내 도움을 받는다면, 자네의 친구를 더 빨리 뒤쫓을 수 있을 텐데?');
    await era.printAndWait([
      '친구를 뒤쫓는 것—— 이것은 ',
      coffee.get_colored_name(),
      '의 가장 큰 염원이다. ',
      tachyon.get_colored_name(),
      '의 실력과 과학적인 능력은 평소 ',
      coffee.sex,
      '에게 불만이 많던 ',
      coffee.get_colored_name(),
      '조차 인정하는 바였다.',
    ]);
    await era.printAndWait('만약 친구를 더 빨리 쫓을 수만 있다면……');
    await coffee.say_and_wait('여전히 당신을 이해할 수는 없지만…… 그래도, 저에게 도움이 된다면……');
    await tachyon.say_and_wait(
      '후후후후…… 좋군, 바로 그거야. 그럼 결정된 거군. 플랜 B, 지금부터 시작이다!',
    );
    await era.printAndWait([
      tachyon.get_colored_name(),
      'dl라는 조력자를 얻은 후, ',
      coffee.get_colored_name(),
      '의 클래식 레이스 도전은 과연 어떤 방향으로 나아가게 될까……',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(25, [0, 0, 0, 0, 10], 0);
  };
};