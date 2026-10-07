// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3"),

  ...require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3-hurt"),
  ...require("#/i18n/ko-KR/kojo/100300-Tokai-Teio/edu-3-give-up"),
  
  // [번역 대상] begin_race_win
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

  // [번역 대상] kiku_sho_win
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

  // [번역 대상] or_47_25
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

  // [번역 대상] os_dance_or_kongfu
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

  // [번역 대상] os_famous_in_famous
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

  // [번역 대상] os_honey_power
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

  // [번역 대상] os_lets_go_together
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

  // [번역 대상] os_uma_shopping
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

  // [번역 대상] race_end_5
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

  // [번역 대상] race_end_lose
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

  // [번역 대상] race_end_win
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

  // [번역 대상] sa_47_5
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

  // [번역 대상] sa_95_25
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

  // [번역 대상] sa_the_days_together
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

  // [번역 대상] sats_sho_5
  sats_sho_5: (() => {
    const title = '最初の冠';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('見事な走りだった。');
      await era.printAndWait(`${you.name} は思わず拍手し、声を上げる。`);
      await era.printAndWait(
        `この等級のレース——場で闘う${teio.uma_sex_title}${teio.teen_sex_title}たちが、汗と青春を飛ばして走る姿は、心を動かす。そして ${you.name} の担当は、そのなかで間違いなくいちばん輝いている。`,
      );
      await era.printAndWait('第一歩、幸先がいい。');
      await era.printAndWait(
        `${teio.sex}にハチミツ特製ドリンクを買ってやろう、と ${you.name} は思い、早足でワゴンへ行き、また場へ戻って、自分の${teio.uma_sex_title}の走りを見る。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sr_wing_and_sky
  sr_wing_and_sky: (() => {
    const title = '双翼を負い、青天に触れる';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('屋上か。少し久しぶりだ。', true);
      await era.printAndWait(`${you.name} は弁当を持ち、外へ出る。`);
      await era.printAndWait(
        `扉はすでに大きく開いており、${you.name} の眼前にいるのは ${you.name} の愛馬、${teio.name} だ。`,
      );
      era.println();

      await teio.say_and_wait(
        `やっぱりここが気持ちいいな～高いところは自由だよ。`,
      );
      era.println();

      await you.say_and_wait('キミが嬉しければいい。');
      era.println();

      await era.printAndWait(
        `そう言いながら、${you.name} は弁当を置き、整え始める。担当はまた何を思ったのか、${you.name} を屋上へ引っ張り、二人だけの午後茶会だと言う。${you.name} は菓子を持ち、自分でフルーツティーを淹れて、${teio.sex}についてきた。`,
      );
      era.println();

      await teio.say_and_wait('ねえ——');
      era.println();

      await era.printAndWait(
        `そよ風が吹き、${you.name} が顔を上げると、${teio.uma_sex_title}は足元をひねり、両手をわずかに上げて一回転し、目で ${you.name} と向き合い、言う。`,
      );
      era.println();

      await teio.say_and_wait(
        'トレーナーは知ってるよね、ボクが高いところへ登りたい夢。今、ボクたちの手で、幻だった念いはだんだん現実の階段になり、上へ送ってくれる。この先は……',
      );
      era.println();

      era.print(`${you.name} は返す——`);
      era.printButton(
        '「自分はずっと、キミの助力だ」（スピード＆スタミナ＆賢さ+20、体力+200、恋慕+1）',
        1,
      );
      era.printButton(
        '「成功を祈る。夢が叶ったら、またここで集まろう」（スピード+15、パワー＆根性+20、好感+5）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}は身をかがめ、${you.name} へまぶしく笑う。`,
        );
      } else {
        await teio.say_and_wait('また約束だね、覚えててよ～');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_yus_5
  toky_yus_5: (() => {
    const title = '二冠目';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `これは ${you.name} の担当がこれまで出たなかで、いちばん規模の大きなレースだ。`,
      );
      await era.printAndWait(
        `だが ${you.name} の視線は……${teio.sex}の成績ではなく、${teio.sex}の脚にある。`,
      );
      await era.printAndWait(
        '正確には、ブーツに包まれた足首から、膝までの部分だ。',
      );
      await era.printAndWait('おかしい。');
      await era.printAndWait(
        'スタートのときから見えていた。あとのスパートと加速も、動作に明らかな微細なずれがある。',
      );
      await era.printAndWait(
        'どんな発力も、骨で立つことが基本だ。膝蓋軟骨か脛骨のあたりに、不具合があるはずだ。',
      );
      era.println();

      await era.printAndWait(
        `レースが終わり、${you.name} は担当を迎え、簡単な祝福のあとこの話をし、${teio.sex}がこれまで頼り、得意としてきた走法が原因かもしれないと婉曲に伝える。`,
      );
      await era.printAndWait(`${teio.sex}の答えは、速くて簡潔だった。`);
      era.println();

      await teio.say_and_wait('大丈夫だよ。');
      era.printButton('「なにを言ってる！」', 1);
      await era.input();

      await teio.say_and_wait(
        'なんでもないって！最近疲れすぎただけ……休めば治るよ。',
      );
      era.println();

      era.printButton('「だが……」', 1);
      await era.input();

      await teio.say_and_wait(
        'ボクたちの夢……まだ叶ってないでしょ！ボクは自分のやり方で走り続けたい。手伝ってくれるって、約束したよね。',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}は目を上げ、澄んで清らかで、執念も秘めた視線を ${you.name} へ据える。${you.name} は口を開くが、言葉が出ない。`,
      );
      await era.printAndWait(
        `${teio.sex}に任せても……大したことにはならないだろう、と頭のなかの声が折れる。それに ${you.name} にも、${teio.sex}が走り続けて結果を出す必要がある。そうだろう。`,
      );
      await era.printAndWait(`${you.name} は溜息をつき、うやむやにした。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fail
  async train_fail(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('あっ！んぅ……');
      await era.printAndWait(
        `普段は活力に満ち、どこか甘えた音色が、痛みで鋭い叫びへ歪み、${you.name} の鼓膜と胸を貫く。${you.name} は二歩を一歩にして駆け寄り、慎重に${teio.sex}を慰め、体を確かめ、患部を軽く揉む。`,
      );
    } else {
      await teio.say_and_wait('いっ——');
      await era.printAndWait([
        '長い声とともに、',
        you.get_colored_name(),
        ' の担当がつまずいて倒れる。',
        you.get_colored_name(),
        ' は慌てて駆け寄り、様子を見る。',
      ]);
    }
  },

  // [번역 대상] train_fail_intel
  async train_fail_intel(teio, you) {
    await teio.say_and_wait('テイオー伝説は……ここで、ちょっと休憩かな……');
    await era.printAndWait([
      teio.get_colored_name(),
      ' は机に突っ伏し、学ぶ気を失っている。',
    ]);
    await you.say_and_wait('嘘はつけないな。できないものは、できない。', true);
  },

  // [번역 대상] waka_sta_win
  waka_sta_win: (() => {
    const title = '三冠へ！';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('見事だ。');
      await era.printAndWait(`${you.name} は心のなかで喝采する。`);
      await era.printAndWait(
        `一騎当千の疾走、瞬間の加速、姿勢の整った体——さすが天才の${teio.uma_sex_title}だ。`,
      );
      await era.printAndWait(
        'デビューしたてでこの走り。潜在は充分、将来は明るい。',
      );
      await era.printAndWait(
        `${you.name} はスタンドを降り、出口で担当の登場を待ち、たっぷり褒めてやろうと思う。あるいは、ご褒美も必要か。`,
      );
      era.println();

      await teio.say_and_wait('トレーナー。');
      era.println();

      era.printButton('「へえ、よくやった」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} は${teio.sex}の肩を叩き、そのまま手を置き、ちょうどいい力で揉む——${teio.teen_sex_title}の体の疲れをほぐすためだ。`,
      );
      await era.printAndWait(
        `${teio.sex}は頬の赤みが残ったまま、興奮した顔で ${you.name} を見る。`,
      );
      era.println();

      await teio.say_and_wait('ボク、決めた！');
      era.println();

      era.printButton('「どうした？」', 1);
      await era.input();

      await teio.say_and_wait(
        'ボクの最初の目標——これから無敗で、クラシック三冠を取る！',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}の熱い発言に、${you.name} は口元が上がる。初生の犢が虎を恐れない、と言うべきか、競技への認識が足りない、と言うべきか。だが、若い者が志を持つことに、何が悪い。`,
      );
      era.println();

      await you.say_and_wait(
        `厳しい目標だ……かつて名を馳せたウマ${teio.uma_sex_title}も、今いる天才も、${teio.couple_title}は誰もがその達成を望む。実際に届くのは、ごくわずかだ。`,
      );
      await you.say_and_wait(
        'だが、自分がキミのトレーナーになった以上、全力で支え、その願いを叶える。',
      );

      await era.printAndWait(
        `${teio.teen_sex_title}は瞬きし、闘志は一ミリも消えていない。`,
      );
      await teio.say_and_wait('この夢、叶えてみせるよ！');
      era.printButton(`じゃあ、一緒に頑張ろう。`, 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        'トレーナートレーナー～今日はボクたちのコンビ、初めての年越しだよ！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は私服で部屋のなかを興奮して飛び回るテイオーを見て、目尻が何度か跳ねる。`,
      );
      await era.printAndWait(
        '活力がありすぎる……小さな暴君を選んでしまったか。',
      );
      era.println();

      await teio.say_and_wait('ねえねえ！トレーナー元気ないね、ボクと遊ぼ！');
      era.println();

      era.printButton('「飯にしよう。食べてからにしよう」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} が大鍋の煮込みを卓へ運ぶと、${teio.sex}は食事だと聞くや滑るように近寄り、椅子に端座し、ついでに ${you.name} の食器も分けてくれる。`,
      );
      await era.printAndWait(
        `ふたりで楽しく新年の晩餐を味わう。温かく賑やかな空気に、${you.name} は${teio.sex}といるのが小さな家のようだと感じずにはいられない。`,
      );
      era.println();

      await teio.say_and_wait(
        'トレーナー、ボクの新年の願いは前に言ったとおりだよ！無敗のクラシック三冠、伝説のテイオーになるんだ！',
      );
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}の言葉はまだ子供っぽいが、${teio.sex}が本気なのはわかる。`,
      );
      era.println();

      era.print(`${you.name}——`);
      era.printButton('「その意気だ！その勢いを保て！」（根性+20）', 1);
      era.printButton(
        '「ああ、一緒に頑張って、勝利へ行こう」（スタミナ+20）',
        2,
      );
      era.printButton(
        '「ん……その目標なら、少し調整が要るな」（スキルPt+20）',
        3,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_12
  ws_47_12: (() => {
    const title = '記者会見';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `照明とマイクに囲まれ、レンズの向こうの全員が好奇心と飢えの混じった目でこちらを見ている。${you.name} は隣の小さな${teio.uma_sex_title}を見る。${teio.sex}は明らかにこういう場に慣れていない——無敵のテイオーさまでも、場に呑まれることはある。`,
      );
      await era.printAndWait(
        `気づかれないように、${you.name} は${teio.sex}の手に軽く触れ、気持ちを落ち着かせようとする。ところが${teio.sex}は逆に握り返し、少し汗ばんだ小さな掌の感触が鮮やかだ。${you.name} は一瞬呆けて手を抜こうとするが、別のやり方を選ぶ。${you.name} は少し力を込めて${teio.sex}の手を握り、${teio.sex}の震えを止める。`,
      );
      era.println();
      await era.printAndWait(
        `カメラと記者の質問に対し、${you.name} は調子が良く、答えは完璧で洒落ている。${you.name} に引っ張られ、テイオーの気持ちも徐々にほぐれ、${teio.sex}も大方に、楽しそうに自分のことを、とくに理想を語る。`,
      );
      await era.printAndWait(
        `${you.name} も皆の前で、${teio.sex} の夢を現実にすると約束する。`,
      );
      await era.printAndWait('会見は拍手のなかで幕を閉じた。');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_5
  ws_95_5: (() => {
    const title = '放棄';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('テイオー、この話は真剣にしよう');
      era.println();

      await era.printAndWait(
        `${you.name} の手には医師からの資料と、自分で集めた材料がある。どれもトウカイテイオーの脚の現状を物語っている。`,
      );
      await era.printAndWait(
        `休養しなければ……次のレースを走り切ったとき、${teio.sex}の脚は一生の傷になるだろう。`,
      );
      era.println();

      await you.say_and_wait(
        `テイオー、キミの脚の構造は${teio.uma_sex_title}のなかでも特別だ。その構造が独自の走法を生むが、『帝王舞歩』は実際、自分の体を先食いしている。`,
      );
      await you.say_and_wait(
        '前回の失速も、その前のレース後の傷も、前兆にすぎない。キミにとっていちばん大切な両脚……完全に壊れる可能性がある',
      );
      era.printButton(
        '「医師も自分も同意している……しばらくレース場を離れ、休養してほしい」',
        1,
      );
      await era.input();
      await you.say_and_wait(
        'そのあいだ、全力で治療を助ける。学園側にもすでに話は通してある。これはキミの一生のためだ。',
      );

      await era.printAndWait(
        `${you.name} は唇を強く結び、頭を下げた担当を見て胸が痛むが、歯を食いしばる。これは${teio.sex}のためだ、と ${you.name} は心のなかで自分に言う。`,
      );
      era.println();
      await teio.say_and_wait('いや……');
      era.println();
      await era.printAndWait(
        `小さくて、だが確かな声が上がる。${you.name} は溜息をつく。こうなるのはわかっていた。`,
      );
      era.println();
      await era.printAndWait(
        `瞬くあいだに、${teio.teen_sex_title}は顔を上げている。${you.name} は液体が目尻に集まり、${teio.sex}のもともとサファイアのような目をさらに透き通らせるのを見る。`,
      );
      era.println();
      await teio.say_and_wait(
        '天皇賞（春）は諦められない……それって、ボクが自分でクラシック三冠の夢を捨てるのと同じだよ！じゃあ今までの努力……なんのためだったの？',
      );
      era.println();
      await teio.say_and_wait(
        'それに、こんな体で生まれたのは、これで走る夢を叶えるって証明なんじゃないの！他の結末は認めない……回避したくない！',
      );
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}の意地を張った目が自分と向き合い、${teio.sex}の瞳に自分の姿が映る。${teio.sex}がいちばん親しい人が、今は${teio.sex}を「裏切った」……${you.name} は自分の像を見て、胸がざわつく。`,
      );
      era.println();
      await teio.say_and_wait('一生に一度のお願い……お願い');
      era.println();
      await era.printAndWait(`${you.name}은(는) 결정한다——`);
      era.printButton(`「トレーナーとして求める。次のレースは諦めろ」`, 1);
      era.print(
        '【これを選ぶと、トウカイテイオーは天皇賞（春）を強制回避する】',
        {
          offset: 1,
          width: 23,
        },
      );
      era.printButton(
        `「キミは自分の担当ウマ娘だ。夢を支えると、ずっと言ってきた」`,
        2,
      );
      era.print(
        `【これを選ぶと、テイオーの脚の怪我は不可逆になる。${teio.sex}と一緒に谷底へ落ち、支え合って登る覚悟はあるか？】`,
        { offset: 1, width: 23, color: buff_colors[3] },
      );
      let ret = await era.input();
      if (ret === 2) {
        era.print(
          `【警告。これを選ぶとテイオーの脚の怪我は不可逆になる。${teio.sex}と一緒に谷底へ落ち、支え合って登る覚悟はあるか？】`,
          { color: buff_colors[3] },
        );
        era.printButton('やめておく', 1);
        era.printButton('覚悟はできた！', 2);
        ret = await era.input();
      }
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}は目に涙を含みながらも、結局は ${you.name} に押さえられた。${teio.sex}は黙って去り、夕陽が${teio.sex}の後ろに長い影を引く。`,
        );
      } else {
        await era.printAndWait(
          `${teio.teen_sex_title}は泣き笑い、${you.name} の手を握る。体温が触れた場所を温める。${you.name} は眉を寄せ、自分の選択が正しいのかわからない。`,
        );
        await era.printAndWait(
          `だが、トレーナーとは${teio.uma_sex_title}の夢を叶える仕事だ……そうだろう。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
