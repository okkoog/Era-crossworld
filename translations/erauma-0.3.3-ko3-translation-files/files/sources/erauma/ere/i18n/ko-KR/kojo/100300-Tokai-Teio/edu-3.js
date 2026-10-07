// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3"),

  ...require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3-hurt"),
  ...require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3-give-up"),
  
  // [번역 완료] begin_race_win
  begin_race_win: (() => {
    const title = '테이오, 출발!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `전승에 따르면 세 여신은 갓난아이에게 우마의 혼을 내려 ${teio.couple_title}에게 비할 데 없는 몸을 주고 레이스장을 달리게 했다고 한다.`,
      );
      await era.printAndWait(
        `그리고 ${teio.couple_title}의 능력은 레이스에서 드러나는 모습에 따라 대략 다음과 같은 주법으로 나뉜다.`,
      );
      era.println();
      await era.printAndWait(
        '먼저 도주. 게이트가 열리면 맹렬한 속도로 상대와의 격차를 벌리며, 스피드와 폭발력을 요구한다. 단점은 장거리에서 스태미나가 떨어지기 쉽고, 보폭과 속도의 특성상 다른 주법보다 부상이 심해지는 경우가 많다는 점이다.',
      );
      await era.printAndWait(
        `주황빛이 도는 붉은 머리카락을 지녔고 달릴 때면 유선형 탈것처럼 보이는 ${teio.uma_sex_title}이(가) 이 주법에 능하다고 들었다.`,
      );
      era.println();
      await era.printAndWait(
        `두 번째는 선행. 출발 직후 곧바로 격차를 벌리기보다 높은 스태미나와 스피드로 도주의 뒤를 바짝 따라붙다가, 도주가 한숨 돌리는 순간 추월한다. 단점은 추월 타이밍을 잡기 어렵고 스태미나와 폭발력 요구치도 높다는 점이다. 순간 가속 때문에 발바닥과 종아리는 레이스 중 다치기 쉽고, 가속할 때의 자세는 ${teio.uma_sex_title} 자신의 유연성도 어느 정도 요구한다.`,
      );
      era.println();
      await era.printAndWait(
        `또 하나는 선입. 게이트를 나온 뒤 마군 중간에 숨어 강한 인내심으로 도주와 선행의 뒤에서 기다리다가, 때가 무르익으면 폭발력과 속도로 단숨에 치고 나가 상대의 허를 찌른다. 단점은 오래 참고 기다릴 수 있어야 하고 타이밍 판단에 경험이 필요하며 폭발력 요구치가 매우 높다는 점이다. 시골에서 올라온 회색 털의 ${teio.uma_sex_title}이(가) 이 주법으로 이름을 떨쳤다고 들었다.`,
      );
      era.println();
      await era.printAndWait(
        `마지막은 추입. 게이트를 나온 뒤 마군 최후방에 숨어 높은 자제력과 스태미나로 기회를 기다리다가, 때가 오면 폭발력과 속도로 앞쪽을 단숨에 추월한다. 단점은 막판 역전 성공률이 높지 않고 ${teio.uma_sex_title} 자신의 자제력도 강하게 요구된다는 점이다. 주변에서 소문난, 체구는 작지만 달리면 번개처럼 바람을 좇는 ${teio.uma_sex_title}이(가) 좋은 예다.`,
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) ${teio.name}의 첫 정식 레이스 모습을 보고 지금까지의 훈련과 대조해 ${teio.sex}의 주법을 마음속으로 확인하며 임시 계획을 세운다. 피부 아래로 드러나는 종아리 힘줄은 풍부하고 강인하며, 몇 차례 가속할 때의 보폭에는 유연함이 있고 힘을 터뜨릴 순간을 잡는 감각은 타고난 듯하다——천재적인 선행 ${teio.uma_sex_title}.`,
      );
      await teio.say_and_wait('트레이너? 어땠어!');
      await era.printAndWait(
        `${teio.sex}은(는) 두 다리를 힘차게 구르며 ${you.name}에게 걸어온다. ${you.name}은(는) 고개를 끄덕이며 방금 관찰한 내용과 훈련 방침을 ${teio.sex}에게 설명한다.`,
      );
      era.println();
      await teio.say_and_wait('응…… 네 말대로 할게!');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 두 다리를 보고 저도 모르게 몸을 낮춰 재빨리 두 손을 그 위에 댄다.`,
      );
      era.println();
      await teio.say_and_wait('엣——엣!');
      era.println();
      await era.printAndWait(
        `손가락이 ${teio.uma_sex_title}에게 가장 중요한 다리를 어루만지고, 촉각을 통해 정보가 돌아온다——트레이너의 기술이다. 예상대로 한 가지 사실을 확인할 수 있다. ${you.name}의 담당이 「제왕무보」라고 부르는 특수 주법은 ${teio.sex} 특유의 다리 구조를 최대한 활용할 수 있지만, 기회와 위험이 함께하며 ${teio.sex}의 다리는 다치기 쉽다. 특히 이 주법을 계속 쓴다면……`,
      );
      era.println();
      await teio.say_and_wait('트레이너? 무슨 일 있어?');
      await era.printAndWait(
        `생각에 몰두하던 ${you.name}은(는) 귀에 닿은 달콤한 목소리에 정신이 들어 현실로 돌아온다. 뺨을 살짝 붉힌 채 고개를 갸웃하며 ${you.name}을(를) 바라보는 ${teio.uma_sex_title}을(를) 보고 한동안 무슨 말을 해야 할지 몰랐다.`,
      );
      era.printButton('「……괜찮아. 네 몸은 대단해.」', 1);
      await era.input();
      await teio.say_and_wait(
        '응? 응…… 그럼 다행이다. 자, 트레이너. 계약이네. 마지막까지 나와 함께 달려줘!',
      );
      era.println();
      await era.printAndWait(
        `바람이 불고 ${teio.sex}은(는) 눈을 가늘게 뜨며 활짝 웃고 손을 내민다. ${you.name}도 손을 뻗어 ${teio.sex}의 새끼손가락과 걸어 약속한다.`,
      );
      await era.printAndWait(
        `다리 문제는…… ${you.name}은(는) 생각한다. 평생에 영향을 주지 않을지도 모른다. ${teio.uma_sex_title}에게 이런 문제는 드물지 않고, 꼼꼼히 관리하며 적절한 메뉴를 짠다면 적어도 현역 중에는 문제 없이 넘길 수 있을 것이다.`,
      );
      await era.printAndWait(
        `지금 여기서 ${teio.sex}에게 습관을 바꾸게 했다가…… 오히려 역효과가 날 수도 있다. 만약 이 정도의 천재가 성과를 내지 못하게 된다면…… 두 사람 모두에게 좋지 않다.`,
      );
      await era.printAndWait(`결국 ${you.name}은(는) 침묵을 선택했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] kiku_sho_win
  kiku_sho_win: (() => {
    const title = '끝은 아니다';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('짧은 끝이 다가오고 있다.');
      await era.printAndWait(
        `${you.name}은(는) 관중석에 서서 지난 1년의 여러 일을 떠올린다. ${teio.teen_sex_title}이(가) 여기까지 온 데에는 ${you.name}의 존재를 빼놓을 수 없고, ${you.name} 역시 ${teio.sex}의 끈기와 집념에 이끌려 스스로 ${teio.sex}을(를) 돕고 싶다고 생각했다.`,
      );
      await era.printAndWait('성공은 눈앞이다.');
      await era.printAndWait(
        `이 레이스를 따내면 ${teio.name}은(는) 최종 목표에 또 한 걸음 가까워진다. 지금 ${teio.sex}의 달리기라면——트레이너인 ${you.name}이(가) 샴페인을 미리 터뜨려서는 안 되겠지만——거의 확실하다.`,
      );
      await era.printAndWait(
        `머릿속에는 ${you.name}과(와) ${teio.sex}이(가) 전설이 되어 이름을 명예의 전당에 올리는 환상까지 떠오른다……`,
      );
      await era.printAndWait('잠깐.');
      era.println();
      await era.printAndWait(`실황「${teio.name}——무슨 일입니까——」`);
      era.println();
      await era.printAndWait('이상하다!');
      await era.printAndWait(
        `${you.name}은(는) 울타리를 움켜쥐고 몸을 힘껏 내밀어 경기장에서 자신의 ${teio.uma_sex_title}을(를) 찾는다. 있다, 선두——${teio.sex}의 움직임은?!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 테이오가 도저히 정상적이라고 할 수 없는 자세로 바깥쪽으로 미끄러지는 모습을 본다——`,
      );
      era.println();
      await era.printAndWait('実況「——失速——」');
      era.println();
      await era.printAndWait(
        `결승점은 이미 가깝지만 ${you.name}에게 착순 따위는 더 이상 중요하지 않다. 미친 듯 내려가 담당을 받아내려 한다. 경비가 이성을 잃은 ${you.name}을(를) 붙잡고, ${you.name}은(는) ${teio.sex}을(를) 바라본다. 거리가 가깝지 않은데도 고통과 원통함이 ${teio.teen_sex_title}의 얼굴에 새겨져 있는 것이 보인다……`,
      );
      era.println();
      era.printButton('「테이오!」', 1);
      await era.input();
      await era.printAndWait(
        `레이스가 끝난 뒤 ${you.name}은(는) 한순간도 지체하지 않고 ${teio.sex}을(를) 안아 트레센으로 돌아가 의무실로 뛰어든다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] or_47_25
  or_47_25: (() => {
    const title = '정기 갱신하는 작은 짐승';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('우와아.');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 천천히 적당한 힘으로 자신의 허벅지 위에 몸을 둥글게 말고 있는 담당 ${teio.uma_sex_title}을(를) 쓰다듬는다.`,
      );
      await era.printAndWait(
        `한 번 ${you.name}에게 마사지를 받은 뒤 ${teio.sex}은(는) 그 맛을 알아버려, 털을 정돈해 달라고 부탁하는 것뿐 아니라(그건 이해할 만하다) ${you.name}의 집무실에 몰래 들어와 일하는 중에도 몸을 비비며 피로를 풀어달라고 조른다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 딴생각을 하며 ${teio.sex}의 턱을 긁어주고, ${teio.sex}은(는) 만족스러운 듯 목을 울리며 눈을 가늘게 뜬다.`,
      );
      await you.say_and_wait('고양이냐', true);
      await era.printAndWait(
        `${you.name}은(는) 속으로 태클을 걸며, 허벅지 위의 ${teio.teen_sex_title}이(가) 정말 이곳을 자기 둥지로 삼은 것 같다고 느낀다.`,
      );
      era.println();

      era.print(`${you.name}은(는) 다음에 ${teio.sex}에게 무엇을 할지——`);
      era.printButton(
        '천천히 머리카락 뿌리부터 부드럽게 쓰다듬어 꼬리 끝까지 (스킬 Pt+30, 체력+50~100, 호감+5)',
        1,
      );
      era.printButton(
        `너무 지쳐서…… 어느새 ${you.name}도 ${teio.sex}도 잠들어 버린다 (스태미나&근성+20)`,
        2,
      );
      if (era.get('love:3') >= 50) {
        era.printButton('못된 장난 (스피드&파워&지능+20, 연모+1)', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name}은(는) 다섯 손가락을 모아 손바닥을 펴고 적당한 힘으로 머리부터 꼬리까지 털결을 따라 쓸어내린다. 손바닥으로 폭신한 감촉이 전해지며 ${you.name}의 기분까지 가벼워진다.`,
          );
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 장난기가 발동해 먼저 ',
            teio.sex,
            '의 귀 밑과 엉덩이 안쪽(꼬리를 움직이는 털 없는 부분)을 긁는다. 작은 ',
            teio.uma_sex_title,
            '이(가) 온몸을 떨자 ',
            you.get_colored_name(),
            '은(는) 방침을 바꿔 마사지하듯 ',
            teio.sex,
            '의 온몸을 주무른다……',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_dance_or_kongfu
  os_dance_or_kongfu: (() => {
    const title = '댄스…… 무도? 이걸로 제왕무보를 단련할 수 있나?';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `단단한 나무 바닥에는 왁스가 칠해져 사람 그림자가 비친다. 그 위에서 한 ${teio.uma_sex_title}이(가) 도복을 입고 다리 들어 올리기와 힘을 내는 동작을 연습하고 있다.`,
      );
      era.println();

      await you.say_and_wait('멈춰, 좀 쉬어. 이제 충분해.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 직접 비율을 맞춰 만든 생리식염수의 뚜껑을 열어 ${teio.sex}에게 건넨다. ${teio.sex}은(는) 받아 작은 입으로 일정한 속도로 다 마신다.`,
      );
      era.println();

      await you.say_and_wait('아아…… 생각보다 성과가 있네.', true);
      era.println();

      await era.printAndWait(
        `${you.name}의 담당은 무슨 작품이라도 본 것인지 갑자기 ${you.name}에게 무술을 시험해 보고 싶다고 하며, 쿵푸의 기술을 달리기에 연결하고 특히 하체 보법을 단련해 제왕무보를 발전시키고 싶다고 했다.`,
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 고집에 져서 시험하게 했는데, 생각보다 성과가 나왔다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너, 어때?');
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 싱글벙글 웃는 담당을 보며 이렇게 답한다——',
      ]);
      era.printButton('감각에 맡긴다 (파워&근성+20, 스킬 Pt+15)', 1);
      era.printButton('수련을 우선한다 (스피드+30, 스킬 Pt+15, 체력+200)', 2);
      era.printButton(
        `냉정하게 분석한다 (스피드+15, 스태미나+20, 지능+30, 스킬 Pt+30)`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(
            '우선 하앗! 하고, 그다음 토옷! 하는 거지.',
          );
          break;
        case 2:
          await you.say_and_wait('춤은 곧 무…… 극에 이르기 위한 수련이다!');
          break;
        case 3:
          await you.say_and_wait(
            '이 훈련으로 몸의 협응을 제어할 수 있을 것 같아. 무게중심의 위치를 바꿔 결승 직전 순간 가속을 만들어내는 거야. 해볼래?',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_famous_in_famous
  os_famous_in_famous: (() => {
    const title = '명인 중의 명인';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('준비됐어?');
      era.println();

      await teio.say_and_wait('응응.');
      era.println();

      await era.printAndWait(
        '귀는 모자 안에 넣고 꼬리는 바지 안에 숨긴 뒤 선글라스와 마스크를 착용해 변장 완료.',
      );
      await era.printAndWait(
        `${you.name}도 눈에 띄지 않는 옷을 입고 옷깃을 세워 적당히 얼굴을 가린 뒤 모자까지 쓴다. 좋아.`,
      );
      await era.printAndWait(
        `두 사람은 서투른 공작원처럼 신분을 감추고 거리로 나선다.`,
      );
      await era.printAndWait(
        `——클래식 삼관 이후 ${teio.name}의 인지도는 계속 높아졌고, 물론 ${you.name}의 인지도도 덩달아 올라갔다. 이제 신분을 숨기지 않으면 사람이 많은 곳에서는 팬들에게 둘러싸여 아무것도 할 수 없게 된다.`,
      );
      await era.printAndWait(
        '그래서 이런 사전 준비는 필수다. 하지만 준비가 모든 상황에 통하는 것은 아니다. 예를 들면——',
      );
      era.println();

      await era.printAndWait(
        `타이어와 아스팔트가 마찰하는 불쾌한 소리가 ${you.name}의 고막을 찌른다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 돌아보는 순간 시간이 잠시 느려진 듯하다.`,
      );
      await era.printAndWait(
        '아이가 도로에 넘어졌고 키가 작아 운전자의 눈에 띄지 않았다. 운전자가 뒤늦게 알아차리고 급브레이크를 밟았을 때는——이미 늦었다.',
      );
      await era.printAndWait(
        `하지만 ${you.name} 옆에서 갑자기 거센 바람이 일어난다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 안쪽으로 감싸 보호하던 ${teio.actual_name_with_title}이(가) 순간적으로 힘을 내어 질주한다.`,
      );
      await era.printAndWait(
        '운전자는 몸을 젖힌 채 브레이크를 끝까지 밟고 절망하며 눈을 감는다.',
      );
      await era.printAndWait('그리고 기적이 일어난다.');
      await era.printAndWait(
        '휙, 하는 소리와 함께 마술처럼 아이가 도로 위에서 사라지고 차는 무사히 길을 지나간다. 운전자는 눈을 떠도 무슨 일이 일어났는지 이해하지 못한다.',
      );
      era.println();

      await teio.say_and_wait(
        '앞으로는 보호자랑 같이 다니고, 혼자 뛰어다니면 안 돼.',
      );
      era.println();

      await era.printAndWait(
        `아이「응…… 고마워, ${teio.uma_sex_title}${teio.elder_sibling_sex_title}?」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.elder_sibling_sex_title}？！`,
      );
      era.println();

      await era.printAndWait(
        `${teio.name}은(는) 이때서야 바람에 모자가 날아갔고 격한 움직임 때문에 꼬리도 드러났다는 걸 깨닫는다. ${you.name}은(는) 서둘러 ${teio.sex}의 변장을 다시 정리하지만 이미 늦었다.`,
      );
      era.println();

      await era.printAndWait(`행인 A「${teio.name}이다!」`);
      era.println();

      await era.printAndWait('행인 B「와, 전설의 테이오 님!」');
      era.println();

      await era.printAndWait(
        `행인 C「봤어! ${teio.sex}이(가) 방금 제왕무보로 저 아이를 구했어!」`,
      );
      era.println();

      await era.printAndWait(
        `사람들의 목소리는 파도처럼 높아지고 소식을 듣고 이쪽으로 몰려오는 사람도 많다. 두 사람은 조금 어쩔 줄 모른다. 하지만 ${you.name}이(가) 테이오를 보니 ${teio.teen_sex_title}의 얼굴은 붉지만 뚜렷한 불쾌감은 보이지 않는다——명성은 사람을, 혹은 ${teio.uma_sex_title}을(를) 기쁘게 하는 것인지도 모른다.`,
      );
      await era.printAndWait(
        `그러다 ${you.name}은(는) ${teio.sex}의 귀가 방향을 바꾸는 걸 알아차리고, 이어 ${you.name}도 목소리를 듣는다.`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} A「응, 멋있어! 나도 이런 ${teio.uma_sex_title}이(가) 되고 싶어!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} B「${teio.sex}의 트레이너가 대단하다고 들었어. 지금 옆에 있는 사람이 그 사람이지?」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} C「정말? 나도 ${you.sex}을(를) 전속 트레이너로 삼고 싶어. 지금 바로 계약할래!」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title} D「${you.sex}은(는) 얼굴도 분위기도 좋네. 정말……」`,
      );
      era.println();

      await era.printAndWait(
        `음…… 예상 밖의 칭찬이다. 하지만 ${you.name}은(는) 순순히 받아들인다.`,
      );
      await era.printAndWait(
        `다만 뒤쪽 내용까지 생각할 여유는 없다. 담당이 음미하듯 이쪽을 바라보고 있기 때문이다.`,
      );
      era.println();

      await you.say_and_wait(
        `큰일인데…… ${teio.sex}은(는) 언제 이런 걸 배운 거지?`,
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 속으로 곤란하다고 생각하지만 ${teio.sex}은(는) 이미 두 걸음을 한 걸음처럼 내디뎌 ${you.name} 앞에 와 팔을 붙잡고 말한다.`,
      );
      era.println();

      await teio.say_and_wait(
        `미안해 여러분, 선약이 있어서. 응원과 호의는 고마워. 또 레이스장에서 만나자. 트레~이너~, 테이오 ${teio.adult_sex_title}와 출발할래?`,
      );
      era.println();

      era.print(`${you.name}은(는) 쓴웃음을 지으며 답한다——`);
      era.printButton(
        '「무적의 테이오 님 곁을 모시는 것이 소인의 사명입니다」 (지능+30)',
        1,
      );
      era.printButton(
        `「할 수 있는 만큼 다하겠습니다, 나의 ${teio.adult_sex_title}」 (랜덤 3항목+15)`,
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_honey_power
  os_honey_power: (() => {
    const title = '꿀의 힘';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${teio.sex}와 외출하면 뭔가 일이 생기는 것 같다고 ${you.name}은(는) 생각하며, 옆에서 자신의 팔을 잡고 있는 담당을 본다.`,
      );
      await era.printAndWait(
        `아니, 끌고 간다고 하는 편이 정확하다. 가끔 ${you.name}은(는) 생각에 잠긴 채 폴짝거리며 걷는 ${teio.uma_sex_title}${teio.teen_sex_title}의 보폭을 따라가고 있는 자신이 신기해진다. 함께 지내는 동안 제왕무보의 기술이 조금 옮은 것인지도 모른다.`,
      );
      await era.printAndWait(
        '함께 지내다 보면 많은 것이 자신도 모르게 서로에게 옮는다…… 예를 들면 취향 같은 것.',
      );
      era.println();

      await era.printAndWait(
        `${you.name}의 담당은 ${you.name}을(를) 벤치로 데려가 조금 전 단골 노점에서 산 특제 꿀 음료를 크게 한 모금씩 마시기 시작한다.`,
      );
      await era.printAndWait(
        `진한 꿀이 ${teio.sex}의 목을 타고 넘어가며 목에 작은 곡선을 만든다. 햇빛이 ${teio.sex}의 한쪽을 비추고 옅은 흰 피부에 질감을 더해, 삼킬 때 근육이 미세하게 움직이는 것까지 드러난다……`,
      );
      await era.printAndWait(
        `살 때는 아무 생각도 없었는데 지금은 입이 마르고 뭔가 마시고 싶어진다.`,
      );
      era.println();

      await teio.say_and_wait('트레이너?');
      era.println();

      await era.printAndWait(`${you.name}은(는) 황급히 대답한다.`);
      era.println();

      await teio.say_and_wait(
        `트레이너? ${you.name}도 목마르지? 마실래?`,
      );
      await era.printAndWait(
        `${teio.sex}은(는) 킥킥 웃으며 절반 남은 꿀 음료를 ${you.name}의 눈앞에 들어 올린다. 마시라고 권하는 듯하다.`,
      );

      await era.printAndWait(`${you.name}은(는)——`);
      era.printButton('한 잔 더 산다 (지능+20, 호감+5)', 1);
      era.printButton(
        '「나는 무가당 무향 차가 더 좋아서……」 (스태미나&근성+15)',
        2,
      );
      if (era.get('love:3') > 50) {
        era.printButton(
          `${teio.sex}이(가) 든 컵을 받아 꽂혀 있는 빨대로 전부 마신 뒤 돌려준다 (스피드&파워+15, 체력+150, 연모+1)`,
          3,
        );
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name}은(는) 웃으며 ${teio.sex}의 머리를 쓰다듬고 자기 몫을 사러 간다. 꿀 음료를 입술에 대자 손가락에 남은 ${teio.uma_sex_title}의 머리카락 향과 달콤한 꿀이 뒤섞여 황홀해진다……`,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name}은(는) 조금 어색한 표정으로 헛기침하고 담당의 권유를 완곡하게 거절한다. ${teio.sex}은(는) 눈을 가늘게 뜨고 더욱 즐거운 듯 웃는다.`,
          );
          break;
        case 3:
          await teio.say_and_wait('///////');
          era.println();

          await era.printAndWait(
            `${you.name}은(는) 장난기가 발동해 ${teio.sex}의 손에서 컵을 빼앗아 힘차게 한 모금 마신 뒤, 얼어붙은 ${teio.sex}의 손에 아무 일도 없었다는 듯 돌려준다.`,
          );
          era.println();

          await teio.say_and_wait('으응응——');
          era.println();

          await era.printAndWait('……너무 했나.');
          await era.printAndWait(
            `그 뒤 10분쯤 제대로 사과하고 나서야 얼굴이 새빨개진 ${teio.sex}은(는) 마침내 으르렁거림을 멈추고 일어나 ${you.name} 옆으로 다가온다.`,
          );
          await era.printAndWait(
            `걷기 시작하기 전 ${you.name}은(는) ${teio.sex}이(가) 시선을 피한 채 조심스럽게 빨대로 몇 모금 더 마시는 것을 알아차린다……`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_lets_go_together
  os_lets_go_together: (() => {
    const title = '같이 가자!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('꿀🎶~');
      era.println();

      await era.printAndWait(
        `노란 원피스를 입은 작은 ${teio.uma_sex_title}이(가) 햇빛을 받으며 앞에서 신나게 걸어 남아도는 활력을 흩뿌린다. 하지만 ${you.name}을(를) 배려해서인지 ${teio.sex}은(는) ${you.name}의 시야에서 벗어나지 않는다.`,
      );
      await era.printAndWait(
        `${teio.sex}이(가) 이렇게 마음껏 즐기는 모습을 보고 ${you.name}도 저도 모르게 웃으며 ${teio.sex}의 보폭을 따라잡는다.`,
      );
      await era.printAndWait(
        '얼마 지나지 않아 인공 개울가에 도착한다. 일반 손님용 길은 아닌 것 같다——',
      );
      await era.printAndWait(
        `${you.name}이(가) 그렇게 생각했을 때 담당의 샌들은 이미 물속 돌 위에 올라가 있다. ${teio.sex}은(는) ${you.name}에게 한 손을 내민다.`,
      );
      era.println();

      await teio.say_and_wait('같이 와, 트레이너!');
      await era.printAndWait(`${you.name}은(는) 결정한다——`);
      era.printButton('고개를 끄덕인다 (스태미나+15)', 1);
      era.printButton('「아니, 규칙은 지키자」 (근성+15)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}도 손을 뻗어 ${teio.sex}의 손을 잡는다. 체격에 어울리지 않는 힘에 ${you.name}은(는) 끌려가고, 두 사람은 물을 밟으며 걷는다. 즐거운 체험이다.`,
        );
        await era.printAndWait(
          '——직원에게 들켜 주의를 받지만 않았다면 더 좋았을 것이다.',
        );
      } else {
        await era.printAndWait(
          `작은 ${teio.uma_sex_title}은(는) 조금 아쉬운 표정이지만 ${you.name} 곁으로 돌아와 나란히 정식 길을 걸었다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] os_uma_shopping
  os_uma_shopping: (() => {
    const title = (teio) => `${teio.uma_sex_title}의…… 쇼핑 순회!`;
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('여성의 쇼핑에 따라다니는 것은 힘들다.');
      await era.printAndWait('여성을 상업시설에 데려가는 것은 피곤하다.');
      await era.printAndWait(
        `${teio.uma_sex_title}의 쇼핑에 따라다니는 것은 뼛속까지 피곤하다.`,
      );
      await era.printAndWait(
        `불행하게도 ${you.name}은(는) 지금 그 세 번째 단계에 있다.`,
      );
      await era.printAndWait(
        `카트를 밀며——속도는 ${teio.sex}와 비교도 되지 않는다——목록과 진열대의 상품을 대조한다. 그것뿐이라면 일종의 여유로운 일이다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}은(는) 눈 깜짝할 사이 어디선가 가져온 물건으로 가득 차는 카트와 귀 옆을 끊임없이 스쳐 가는 바람 소리를 보며 저도 모르게 한숨을 쉰다.`,
      );
      era.println();
      await teio.say_and_wait(
        '트레이너, 빨리! 아직 살 게 더 있고 나 혼자서는 못 드니까 도와줘! 안 오면 품절돼 버린다고!',
      );
      await era.printAndWait(
        `${you.name}은(는) 하늘을 올려다보며 외친 뒤 운명을 받아들이고 두 다리를 재촉해 목소리가 들리는 쪽으로 향한다——`,
      );
      era.printButton(
        '필사적으로 테이오의 리듬을 따라간다 (스피드&파워&근성+20, 체력+200, 호감+10)',
        1,
      );
      era.printButton(
        '미리 정한 경로로 먼저 목적지에 도착해 테이오를 기다렸다가 합류한 뒤 다음으로 간다 (스태미나+20, 지능+30, 호감+5)',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_end_5
  race_end_5: (() => {
    const title = '레이스 입상';
    /** @param {CharaTalk} teio トウカイテイオー */
    const f = async (teio) => {
      await era.printAndWait('아쉽지만 나쁘진 않다.');
      await era.printAndWait(
        `${teio.name}은(는) 조금 불만스러운 듯 다리를 끌며 경기장 밖으로 나오는 테이오를 보고, 엄격한 표정을 지으려다 왠지 미소가 새어 나온다.`,
      );
      await era.printAndWait(`그래도 잘했다. 제대로 위로해 주자.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_end_lose
  race_end_lose: (() => {
    const title = '레이스 패배';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait(
          `${you.name}은(는) 머리가 헝클어진 채 낙담해 천천히 걸어오는 담당을 보고 가슴에서 피가 흐르는 듯한 기분이 든다.`,
        );
        await era.printAndWait('젠장, 한 걸음만 더…… 다리만……');
        await era.printAndWait(`실황까지 단상 위에서 두 사람을 안타까워하고 있었다.`);
        await era.printAndWait(
          `${you.name}은(는) 말없이 테이오를 맞이해 자신의 몸으로 ${teio.sex}을(를) 받쳐준다.`,
        );
        await era.printAndWait(
          `${teio.sex}은(는) 작게 떨다가 억지로 다시 몸을 세운다. 아픈 것인지, 아니면 ${you.name} 앞에서 약한 모습을 보이고 싶지 않은 것인지.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 알 수 없고 지금은 상관없다. 이렇게 두 사람은 서로를 부축하며 함께 경기장을 떠난다……`,
        );
      } else {
        await era.printAndWait(`${you.name}은(는) 미간을 찌푸린다. 왜 이렇게 됐지.`);
        await era.printAndWait(
          `전광판에 박힌 듯한 붉은 착순은 ${you.name}에게 이 참패가 현실이라는 사실을 한순간도 잊게 하지 않는다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 얼굴이 흙빛이 되고 귀와 꼬리도 힘없이 늘어진 채 몸을 끌며 자신에게 다가오는 담당 ${teio.uma_sex_title}을(를) 보고 복잡한 심정이 든다.`,
        );
        await teio.say_and_wait(`……`);
        era.printButton(
          '「괜찮아. 고개 들어. 다시 마음 다잡으면 성공은 기다리고 있어.」',
          1,
        );
        era.printButton(
          '「이번에는…… 제대로 돌아보자. 테이오, 다음엔 이렇게 하지 마.」',
          2,
        );
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_end_win
  race_end_win: (() => {
    const title = '레이스 승리';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 흥분한 채 관중석에서 내려가 개선한 테이오를 맞이한다.`,
      );
      await era.printAndWait(
        `${teio.sex} 역시 기분이 한껏 올라 얼굴을 붉힌 채 ${you.name}에게 달려와 하이파이브한다. 두 사람은 승리의 맛을 충분히 만끽했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_47_5
  sa_47_5: (() => {
    const title = '그래서, 옷은 어때!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        '또다시 구름 한 점 없는 맑은 날——트레센 이쪽 하늘은 정말 좋다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 학원 안뜰을 걸으며 초봄의 날씨를 만끽한다.`,
      );
      await era.printAndWait(
        `하지만 오늘은 그때처럼 ${you.name} 혼자 산책하는 것이 아니다.`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('분위기가 조금 어색하다.');
      await era.printAndWait(
        `${you.name}은(는) 무심코 곁눈질로 옆의 작은 ${teio.uma_sex_title}을(를) 본다. 드러난 하얀 피부, 사복 아래로 보이는 분홍색 어깨끈…… 안 된다. 더 보면 교사로서 체면이 상한다.`,
      );
      await era.printAndWait(
        `게다가 ${teio.sex}의 그 차림은 알록달록한 비치웨어 같은 어린 느낌의 옷이라 ${you.name}의 죄책감을 더 키운다.`,
      );
      await era.printAndWait(
        `이렇게 사랑스러운 ${teio.uma_sex_title}이(가) ${you.name}과(와) 담당 계약을 맺은 상대다……`,
      );
      era.println();

      await teio.say_and_wait('트레이너?');
      era.println();

      era.printButton('「뭐야?」', 1);
      await era.input();
      await era.printAndWait(
        `활기찬 ${teio.teen_sex_title}의 목소리가 들리고, ${you.name}은(는) 머리를 비우고 마음을 가라앉혀 최대한 평범한 얼굴로 답하려 한다.`,
      );
      await era.printAndWait('그리고 시선은 곧장 앞길에 둔다.');
      era.println();

      await teio.say_and_wait('너…… 내 사복 어때?');
      era.println();

      era.print(`${you.name}은(는) 곧바로——`);
      era.printButton('「응…… 꽤 어려 보이네」 (체력+150)', 1);
      era.printButton('「귀여워……」 (스피드+20)', 2);
      era.printButton('「멋있어, 테이오!」 (파워+20)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await teio.say_and_wait('으응~ 나, 이제 어린애 아니거든!');
          era.println();

          await era.printAndWait(
            `${teio.sex}은(는) 입술을 삐죽 내밀고 조금 토라진 듯하지만 오히려 귀엽다.`,
          );
          await era.printAndWait(
            `${you.name}과(와) ${teio.sex}은(는) 말없이 한동안 걸었다.`,
          );
          break;
        case 2:
          await teio.say_and_wait('엣!');
          era.println();

          await era.printAndWait(
            `${you.name}의 담당은 작게 소리를 내고 얼굴이 붉어진 듯하다. ${you.name}도 더 바라보기가 민망해져 두 사람은 말없이 계속 걸었다.`,
          );
          break;
        case 3:
          await teio.say_and_wait(
            `당연하지! ${you.name}은(는) 역시 테이오 님의 멋짐을 알아보네!`,
          );
          await era.printAndWait(
            `${teio.sex}은(는) 기쁜 듯하다. ${you.name}도 저도 모르게 웃으며 ${teio.sex}와 함께 한동안 걸었다.`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_95_25
  sa_95_25: (() => {
    const title = '봄의 테이오';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('좋네……');
      era.println();
      await era.printAndWait(
        `훈련이 막 끝나 ${you.name}은(는) 담당과 천천히 기숙사로 돌아가는 길을 걷고 있다. ${teio.uma_sex_title}${teio.adult_sex_title}은(는) 지금 고개를 흔들고, 격한 운동으로 풀어진 머리카락에서 땀이 튀며 온몸에서 김이 피어오르는 모습이 보인다.`,
      );
      await teio.say_and_wait('응? 트레이너? 뭐라고 했어?');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 무심코 ${teio.sex}을(를) 넋 놓고 보다 속마음까지 입 밖으로 나온 것을 깨닫고 황급히 둘러댄다.`,
      );
      era.println();

      era.printButton('「최근 성적이 정말 훌륭하다고 한 거야.」', 1);
      await era.input();

      await teio.say_and_wait('으~응? 정말 그것뿐이야?');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 얼굴을 돌리고 대답하지 않은 채 슬쩍 옷깃을 세워 달아오른 얼굴을 가린다.`,
      );
      era.println();

      await era.printAndWait(
        `작은 ${teio.uma_sex_title}은(는) ${you.name}을(를) 곁눈질하며 입을 다문 채 웃다가 갑자기 표정이 가라앉는다.`,
      );
      era.println();

      await teio.say_and_wait(
        '트레이너…… 우리의 여행은 아직 끝나지 않았어.',
      );
      era.println();

      await era.printAndWait(
        `갑작스러운 말에 ${you.name}은(는) 돌아보며 적당히 농담으로 넘기려다 ${teio.sex}의 진지한 얼굴을 보고 입을 다문다.`,
      );
      await teio.say_and_wait(
        '내 과거의 성적도 지금의 영광도 앞으로의 목표도 전부 너와 나눌게. 그러니까 함께 계속 가자.',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 한마디 한마디 ${you.name}에게 이 진심을 털어놓는다.`,
      );
      era.println();

      era.printButton('「물론이지.」', 1);
      await era.input();

      await era.printAndWait(`두 사람은 나란히 목표한 곳을 향한다——`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_the_days_together
  sa_the_days_together: (() => {
    const title = '너와 함께 걸어온 나날';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `학원 중앙에는 분수가 있고 그 위에 세 여신의 상이 자리하고 있다. 매일 수많은 ${teio.uma_sex_title}과(와) 사람들이 이곳에서 말없이 기도하며 소원을 맡긴다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 담당과 조금 닮은 얼굴을 바라보며 손가락으로 주머니 속 지갑을 만진다. 소원을 빌까……`,
      );
      era.println();

      await teio.say_and_wait('트레이너!');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 돌아서 담당에게 손을 흔들지만 ${teio.sex}은(는) 튀어 오듯 다가와 남의 시선도 신경 쓰지 않고 ${you.name}의 손을 잡는다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 얼굴을 본다. 솔직히…… 조금 닮았다.`,
      );
      era.println();

      await teio.say_and_wait(
        '흐응~ 나랑 같이 있는데 다른 애 생각하고 있어?',
      );
      era.println();

      await era.printAndWait(
        `——어린애 아니야! ${you.name}은(는) 그렇게 말하려다가 담당의 얼굴을 보고 상황을 알아차려 입을 다문다.`,
      );
      era.println();

      await teio.say_and_wait(
        `흥…… 그럼 조금 벌이야. ${you.name}, 지금 소원 빌려고 했지? 뭘 빌 거야?`,
      );
      era.println();

      era.printButton('「앞으로도 잘 부탁해」 (호감+10, 전 능력+5)', 1);
      if (era.get('love:3') > 90) {
        era.printButton(
          '「생각할게, 아니, 계속 네 곁에 있을게」 (연모+1, 의욕 상승, 랜덤 2항목+10)',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('소원이 아니잖아…… 뭐야 그게.');
        era.println();

        await era.printAndWait(
          `하지만 ${you.name}은(는) 빌 내용을 정하지 못했다.`,
        );
      } else {
        await teio.say_and_wait('……봐줄게. 다음은 없어.');
        era.println();

        await era.printAndWait(
          `귀까지 붉어진 작은 ${teio.uma_sex_title}은(는) ${you.name}의 손을 놓는다.`,
        );
        await era.printAndWait(
          `잠시 뒤 ${teio.name}이(가) 떠난 후 ${you.name}은(는) 이곳으로 돌아와 입꼬리를 비틀어 웃고 지갑 속 동전을 전부 연못에 쏟은 뒤 두 손을 모아 처음으로 진심으로 소원을 빈다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sats_sho_5
  sats_sho_5: (() => {
    const title = '첫 번째 관';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('훌륭한 달리기였다.');
      await era.printAndWait(`${you.name}은(는) 저도 모르게 박수를 치며 소리친다.`);
      await era.printAndWait(
        `이 등급의 레이스——경기장에서 겨루는 ${teio.uma_sex_title}${teio.teen_sex_title}들이 땀과 청춘을 흩뿌리며 달리는 모습은 마음을 움직인다. 그리고 ${you.name}의 담당은 그중에서도 틀림없이 가장 빛난다.`,
      );
      await era.printAndWait('첫걸음부터 출발이 좋다.');
      await era.printAndWait(
        `${teio.sex}에게 특제 꿀 음료를 사주자고 생각한 ${you.name}은(는) 빠른 걸음으로 매점 카트에 갔다가 다시 경기장으로 돌아와 자신의 ${teio.uma_sex_title}의 달리기를 본다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sr_wing_and_sky
  sr_wing_and_sky: (() => {
    const title = '두 날개를 지고 푸른 하늘에 닿다';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('옥상인가. 조금 오랜만이네.', true);
      await era.printAndWait(`${you.name}은(는) 도시락을 들고 밖으로 나간다.`);
      await era.printAndWait(
        `문은 이미 활짝 열려 있고 ${you.name}의 눈앞에는 자신의 애마, ${teio.name}이(가) 있다.`,
      );
      era.println();

      await teio.say_and_wait(
        `역시 여기가 기분 좋네~ 높은 곳은 자유롭다니까.`,
      );
      era.println();

      await you.say_and_wait('네가 좋다면 됐어.');
      era.println();

      await era.printAndWait(
        `그렇게 말하며 ${you.name}은(는) 도시락을 내려놓고 정리하기 시작한다. 담당은 또 무슨 생각을 했는지 ${you.name}을(를) 옥상으로 끌고 와 둘만의 오후 티타임이라고 했다. ${you.name}은(는) 과자를 챙기고 직접 과일차를 우려 ${teio.sex}을(를) 따라왔다.`,
      );
      era.println();

      await teio.say_and_wait('있잖아——');
      era.println();

      await era.printAndWait(
        `산들바람이 불고 ${you.name}이(가) 고개를 들자 ${teio.uma_sex_title}은(는) 발을 틀어 두 손을 살짝 들고 한 바퀴 돈 뒤 시선으로 ${you.name}과(와) 마주하며 말한다.`,
      );
      era.println();

      await teio.say_and_wait(
        '트레이너는 알고 있지? 내가 높은 곳까지 올라가고 싶다는 꿈. 지금 우리 손으로 환상이던 소망이 점점 현실의 계단이 되어 우리를 위로 올려주고 있어. 앞으로는……',
      );
      era.println();

      era.print(`${you.name}은(는) 답한다——`);
      era.printButton(
        '「나는 언제나 네 힘이 되어줄게」 (스피드&스태미나&지능+20, 체력+200, 연모+1)',
        1,
      );
      era.printButton(
        '「성공을 빌게. 꿈을 이루면 다시 여기서 만나자」 (스피드+15, 파워&근성+20, 호감+5)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 몸을 숙이며 ${you.name}에게 눈부시게 웃는다.`,
        );
      } else {
        await teio.say_and_wait('또 약속이네, 기억해 둬~');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] toky_yus_5
  toky_yus_5: (() => {
    const title = '二冠目';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `이 레이스는 ${you.name}의 담당이 지금까지 출전한 것 중 가장 규모가 크다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}의 시선은…… ${teio.sex}의 성적이 아니라 ${teio.sex}의 다리에 가 있다.`,
      );
      await era.printAndWait(
        '정확히는 부츠에 감싸인 발목부터 무릎까지의 부분이다.',
      );
      await era.printAndWait('이상하다.');
      await era.printAndWait(
        '출발 때부터 보였다. 이후의 스퍼트와 가속에서도 동작에 분명 미세한 어긋남이 있다.',
      );
      await era.printAndWait(
        '어떤 힘을 내든 뼈로 지탱하는 것이 기본이다. 슬개연골이나 경골 부근에 이상이 있을 것이다.',
      );
      era.println();

      await era.printAndWait(
        `레이스가 끝난 뒤 ${you.name}은(는) 담당을 맞이하고 간단히 축하한 다음 이 이야기를 꺼낸다. 그리고 ${teio.sex}이(가) 지금까지 의지하고 자신 있어 하던 주법이 원인일 수도 있다고 완곡하게 전한다.`,
      );
      await era.printAndWait(`${teio.sex}의 대답은 빠르고 간단했다.`);
      era.println();

      await teio.say_and_wait('괜찮아.');
      era.printButton('「무슨 소리 하는 거야!」', 1);
      await era.input();

      await teio.say_and_wait(
        '아무것도 아니라니까! 요즘 너무 피곤했을 뿐이야…… 쉬면 나아.',
      );
      era.println();

      era.printButton('「하지만……」', 1);
      await era.input();

      await teio.say_and_wait(
        '우리 꿈…… 아직 이루지 못했잖아! 나는 내 방식대로 계속 달리고 싶어. 도와주겠다고 약속했지.',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 눈을 들어 맑고 깨끗하면서도 집념이 깃든 시선을 ${you.name}에게 고정한다. ${you.name}은(는) 입을 열지만 말이 나오지 않는다.`,
      );
      await era.printAndWait(
        `${teio.sex}에게 맡겨도…… 큰일로 번지진 않겠지, 하는 목소리가 머릿속에서 속삭인다. 게다가 ${you.name}에게도 ${teio.sex}이(가) 계속 달려 결과를 내야 할 필요가 있다. 그렇지 않은가.`,
      );
      await era.printAndWait(`${you.name}은(는) 한숨을 쉬며 흐지부지 넘겼다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] train_fail
  async train_fail(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('앗! 으응……');
      await era.printAndWait(
        `평소에는 활기차고 어딘가 응석 섞인 음색이 통증으로 날카로운 비명으로 일그러져 ${you.name}의 고막과 가슴을 꿰뚫는다. ${you.name}은(는) 두 걸음을 한 걸음처럼 달려가 조심스럽게 ${teio.sex}을(를) 달래며 몸을 확인하고 아픈 부위를 가볍게 주무른다.`,
      );
    } else {
      await teio.say_and_wait('아윽——');
      await era.printAndWait([
        '긴 신음과 함께 ',
        you.get_colored_name(),
        '의 담당이 발을 헛디뎌 쓰러진다.',
        you.get_colored_name(),
        '은(는) 황급히 달려가 상태를 살핀다.',
      ]);
    }
  },

  // [번역 완료] train_fail_intel
  async train_fail_intel(teio, you) {
    await teio.say_and_wait('테이오 전설은…… 여기서 잠깐 쉬어가는 건가……');
    await era.printAndWait([
      teio.get_colored_name(),
      '은(는) 책상에 엎드린 채 공부할 의욕을 잃고 있다.',
    ]);
    await you.say_and_wait('거짓말은 못 하겠네. 안 되는 건 안 되는 거야.', true);
  },

  // [번역 완료] waka_sta_win
  waka_sta_win: (() => {
    const title = '삼관을 향해!';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('훌륭하다.');
      await era.printAndWait(`${you.name}은(는) 마음속으로 갈채를 보낸다.`);
      await era.printAndWait(
        `일기당천의 질주, 순간 가속, 흐트러짐 없는 자세——과연 천재 ${teio.uma_sex_title}답다.`,
      );
      await era.printAndWait(
        '데뷔한 지 얼마 되지 않았는데 이 달리기라니. 잠재력은 충분하고 미래는 밝다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 관중석에서 내려와 출구에서 담당이 나오기를 기다리며 실컷 칭찬해 줄 생각을 한다. 아니면 보상도 필요할까.`,
      );
      era.println();

      await teio.say_and_wait('트레이너.');
      era.println();

      era.printButton('「그래, 잘했어.」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 어깨를 두드린 뒤 그대로 손을 올려 적당한 힘으로 주무른다——${teio.teen_sex_title}의 몸에 쌓인 피로를 풀어주기 위해서다.`,
      );
      await era.printAndWait(
        `${teio.sex}은(는) 뺨의 붉은 기운이 남은 채 흥분한 얼굴로 ${you.name}을(를) 본다.`,
      );
      era.println();

      await teio.say_and_wait('나, 정했어!');
      era.println();

      era.printButton('「왜 그래?」', 1);
      await era.input();

      await teio.say_and_wait(
        '내 첫 번째 목표——앞으로 무패로 클래식 삼관을 따는 거야!',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}의 뜨거운 선언에 ${you.name}의 입꼬리가 올라간다. 하룻강아지 범 무서운 줄 모른다고 해야 할지, 경기에 대한 이해가 부족하다고 해야 할지. 하지만 젊은 이가 뜻을 품는 데 무슨 문제가 있겠는가.`,
      );
      era.println();

      await you.say_and_wait(
        `가혹한 목표다…… 한때 이름을 떨친 우마 ${teio.uma_sex_title}도, 지금의 천재도, ${teio.couple_title}라면 누구나 그 달성을 바란다. 실제로 손에 넣는 이는 극소수다.`,
      );
      await you.say_and_wait(
        '하지만 내가 네 트레이너가 된 이상 전력으로 지원해서 그 소원을 이루게 해줄게.',
      );

      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 눈을 깜빡이지만 투지는 조금도 사라지지 않았다.`,
      );
      await teio.say_and_wait('이 꿈, 반드시 이뤄 보일게!');
      era.printButton(`그럼 같이 힘내자.`, 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_1
  ws_47_1: (() => {
    const title = '새해의 포부';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        '트레이너 트레이너~ 오늘은 우리 콤비가 처음으로 함께 맞는 새해야!',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 사복 차림으로 방 안을 신나게 뛰어다니는 테이오를 보며 눈가가 몇 번이나 씰룩인다.`,
      );
      await era.printAndWait(
        '활력이 너무 넘치는데…… 작은 폭군을 골라버린 건가.',
      );
      era.println();

      await teio.say_and_wait('있지 있지! 트레이너 기운 없어 보이네, 나랑 놀자!');
      era.println();

      era.printButton('「밥부터 먹자. 먹고 나서 놀자.」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}이(가) 큰 냄비의 조림을 식탁으로 옮기자 ${teio.sex}은(는) 식사라는 말을 듣자마자 미끄러지듯 다가와 의자에 반듯하게 앉고, 내친김에 ${you.name}의 식기까지 나눠준다.`,
      );
      await era.printAndWait(
        `두 사람은 즐겁게 새해 만찬을 즐긴다. 따뜻하고 떠들썩한 분위기 속에서 ${you.name}은(는) ${teio.sex}와 함께 있는 것이 작은 가정을 이룬 듯하다고 느끼지 않을 수 없다.`,
      );
      era.println();

      await teio.say_and_wait(
        '트레이너, 내 새해 소원은 전에 말한 그대로야! 무패 클래식 삼관, 전설의 테이오가 되는 거야!',
      );
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}의 말은 아직 다소 철없게 들리지만 ${teio.sex}이(가) 진심이라는 건 알 수 있다.`,
      );
      era.println();

      era.print(`${you.name}——`);
      era.printButton('「그 기세야! 그대로 밀고 가!」 (근성+20)', 1);
      era.printButton(
        '「그래, 같이 힘내서 승리를 향해 가자」 (스태미나+20)',
        2,
      );
      era.printButton(
        '「음…… 그 목표라면 조금 조정이 필요하겠네」 (스킬 Pt+20)',
        3,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_12
  ws_47_12: (() => {
    const title = '記者会見';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `조명과 마이크에 둘러싸이고 렌즈 너머의 모두가 호기심과 갈망이 뒤섞인 눈으로 이쪽을 보고 있다. ${you.name}은(는) 옆의 작은 ${teio.uma_sex_title}을(를) 본다. ${teio.sex}은(는) 분명 이런 자리에 익숙하지 않다——무적의 테이오 님도 분위기에 눌릴 때가 있는 것이다.`,
      );
      await era.printAndWait(
        `눈치채지 못하게 ${you.name}은(는) ${teio.sex}의 손에 살짝 닿아 마음을 진정시키려 한다. 그런데 ${teio.sex}이(가) 오히려 손을 마주 잡고, 살짝 땀이 밴 작은 손바닥의 감촉이 선명하게 전해진다. ${you.name}은(는) 잠시 멍해져 손을 빼려다가 다른 방법을 택한다. 조금 힘을 주어 ${teio.sex}의 손을 잡고 ${teio.sex}의 떨림을 멈춰준다.`,
      );
      era.println();
      await era.printAndWait(
        `카메라와 기자들의 질문에 ${you.name}은(는) 능숙하게 대응하며 완벽하고 재치 있게 답한다. ${you.name}에게 이끌려 테이오의 긴장도 차츰 풀리고, ${teio.sex} 역시 대체로 즐거운 표정으로 자신의 이야기, 특히 이상을 말한다.`,
      );
      await era.printAndWait(
        `${you.name}도 모두 앞에서 ${teio.sex}의 꿈을 현실로 만들겠다고 약속한다.`,
      );
      await era.printAndWait('회견은 박수 속에서 막을 내렸다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_5
  ws_95_5: (() => {
    const title = '放棄';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('테이오, 이 이야기는 진지하게 하자.');
      era.println();

      await era.printAndWait(
        `${you.name}의 손에는 의사에게 받은 자료와 직접 모은 자료가 있다. 모두 토카이 테이오의 다리 상태를 말해주고 있다.`,
      );
      await era.printAndWait(
        `휴양하지 않으면…… 다음 레이스를 끝까지 달렸을 때 ${teio.sex}의 다리에는 평생 남을 상처가 생길 것이다.`,
      );
      era.println();

      await you.say_and_wait(
        `테이오, 네 다리 구조는 ${teio.uma_sex_title} 중에서도 특별해. 그 구조가 독자적인 주법을 만들어내지만, 『제왕무보』는 사실 자기 몸을 미리 갉아먹는 거야.`,
      );
      await you.say_and_wait(
        '지난번 실속도, 그 전 레이스 뒤의 부상도 전조에 불과해. 너에게 가장 중요한 두 다리…… 완전히 망가질 가능성이 있어.',
      );
      era.printButton(
        '「의사도 나도 같은 생각이야…… 당분간 레이스장을 떠나 휴양했으면 해.」',
        1,
      );
      await era.input();
      await you.say_and_wait(
        '그동안 전력을 다해 치료를 도울게. 학원 측에도 이미 이야기를 해뒀어. 이건 네 평생을 위한 일이야.',
      );

      await era.printAndWait(
        `${you.name}은(는) 입술을 굳게 다물고 고개를 숙인 담당을 보며 가슴이 아프지만 이를 악문다. 이건 ${teio.sex}을(를) 위해서라고 스스로에게 되뇐다.`,
      );
      era.println();
      await teio.say_and_wait('싫어……');
      era.println();
      await era.printAndWait(
        `작지만 분명한 목소리가 나온다. ${you.name}은(는) 한숨을 쉰다. 이렇게 될 줄 알고 있었다.`,
      );
      era.println();
      await era.printAndWait(
        `눈 깜짝할 사이 ${teio.teen_sex_title}은(는) 고개를 들고 있다. ${you.name}은(는) 눈물이 눈가에 맺혀 원래도 사파이어 같던 ${teio.sex}의 눈을 더욱 투명하게 만드는 것을 본다.`,
      );
      era.println();
      await teio.say_and_wait(
        '천황상(봄)은 포기할 수 없어…… 그건 내가 스스로 클래식 삼관의 꿈을 버리는 것과 같잖아! 그럼 지금까지의 노력은…… 무엇을 위해서였는데?',
      );
      era.println();
      await teio.say_and_wait(
        '게다가 이런 몸으로 태어난 건 이 몸으로 달리는 꿈을 이루라는 증거 아니야! 다른 결말은 인정 못 해…… 회피하고 싶지 않아!',
      );
      era.println();
      await era.printAndWait(
        `고집을 꺾지 않는 ${teio.teen_sex_title}의 눈이 자신과 마주하고, ${teio.sex}의 눈동자에는 자신의 모습이 비친다. ${teio.sex}에게 가장 가까운 사람이 지금은 ${teio.sex}을(를) 「배신한」 셈이다…… ${you.name}은(는) 그 속의 자신을 보며 가슴이 술렁인다.`,
      );
      era.println();
      await teio.say_and_wait('평생에 한 번뿐인 부탁이야…… 부탁할게.');
      era.println();
      await era.printAndWait(`${you.name}은(는) 결정한다——`);
      era.printButton(`「트레이너로서 요구한다. 다음 레이스는 포기해.」`, 1);
      era.print(
        '【이 선택을 하면 토카이 테이오는 천황상(봄)을 강제로 회피한다】',
        {
          offset: 1,
          width: 23,
        },
      );
      era.printButton(
        `「너는 내 담당 우마무스메야. 네 꿈을 지지하겠다고 계속 말해왔어.」`,
        2,
      );
      era.print(
        `【이 선택을 하면 테이오의 다리 부상은 되돌릴 수 없게 된다. ${teio.sex}와 함께 밑바닥으로 떨어져 서로 의지하며 다시 올라올 각오가 있는가?】`,
        { offset: 1, width: 23, color: buff_colors[3] },
      );
      let ret = await era.input();
      if (ret === 2) {
        era.print(
          `【경고. 이 선택을 하면 테이오의 다리 부상은 되돌릴 수 없게 된다. ${teio.sex}와 함께 밑바닥으로 떨어져 서로 의지하며 다시 올라올 각오가 있는가?】`,
          { color: buff_colors[3] },
        );
        era.printButton('그만둔다', 1);
        era.printButton('각오는 됐다!', 2);
        ret = await era.input();
      }
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 눈에 눈물을 머금고 있었지만 결국 ${you.name}에게 제지당했다. ${teio.sex}은(는) 말없이 떠나고 석양이 ${teio.sex} 뒤로 긴 그림자를 끌어낸다.`,
        );
      } else {
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 울면서 웃고 ${you.name}의 손을 잡는다. 체온이 맞닿은 곳을 따뜻하게 한다. ${you.name}은(는) 미간을 찌푸리며 자신의 선택이 옳은지 알 수 없다.`,
        );
        await era.printAndWait(
          `하지만 트레이너란 ${teio.uma_sex_title}의 꿈을 이루게 해주는 직업이다…… 그렇지 않은가.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
