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
    const title = '名人のなかの名人';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('準備はいいか');
      era.println();

      await teio.say_and_wait('んうん。');
      era.println();

      await era.printAndWait(
        '耳は帽子へしまい、尻尾はズボンへ隠し、サングラスとマスクを着けて、変装完了。',
      );
      await era.printAndWait(
        `${you.name} も目立たない服を着、襟を立てて適当に顔を隠し、キャップを足す。よし。`,
      );
      await era.printAndWait(
        `ふたりは下手な工作員のように身分を隠し、街へ出る。`,
      );
      await era.printAndWait(
        `——クラシック三冠のあと、${teio.name} の知名度はどんどん上がり、もちろん ${you.name} の知名度も水嵩とともに上がった。今、隠さなければ人通りの多い場所ではファンに囲まれ、何もできなくなる。`,
      );
      await era.printAndWait(
        'だから、こうした前準備は必須だ。だが準備がすべての場面に効くわけではない。たとえば——',
      );
      era.println();

      await era.printAndWait(
        `タイヤとアスファルトが擦れる嫌な音が ${you.name} の鼓膜を刺す。`,
      );
      await era.printAndWait(
        `${you.name} が振り返ると、時間が一瞬遅くなるようだ。`,
      );
      await era.printAndWait(
        '子供が路上に転び、身長の都合で運転手に気づかれず、気づいて急ブレーキを踏んだときには——もう遅い。',
      );
      await era.printAndWait(
        `だが、${you.name} の隣で突然、勢いのある風が起きる。`,
      );
      await era.printAndWait(
        `${you.name} が内側に庇っていた${teio.actual_name_with_title}が、瞬間に力を出し、疾走する。`,
      );
      await era.printAndWait(
        '運転手は背を反らし、ブレーキを限界まで踏み、絶望して目を閉じる。',
      );
      await era.printAndWait('それから奇跡が起きる。');
      await era.printAndWait(
        'ふっ、という音とともに、手品のように子供が路上から消え、運転手は事なきを得て通りを越える。目を開けても、何が起きたかわかっていない。',
      );
      era.println();

      await teio.say_and_wait(
        'これから保護者と一緒にいて、ひとりで走っちゃだめだよ。',
      );
      era.println();

      await era.printAndWait(
        `子供「うん……ありがとう、${teio.uma_sex_title}${teio.elder_sibling_sex_title}？」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.elder_sibling_sex_title}？！`,
      );
      era.println();

      await era.printAndWait(
        `${teio.name} はここで、風に帽子が飛ばされ、激しい動きで尻尾も出てしまったことに気づく。${you.name} は慌てて${teio.sex}を偽装し直すが、もう遅い。`,
      );
      era.println();

      await era.printAndWait(`通行人A「${teio.name} だ！」`);
      era.println();

      await era.printAndWait('通行人B「わあ、伝説のテイオーさま！」');
      era.println();

      await era.printAndWait(
        `通行人C「見た！${teio.sex}が今、帝王舞歩であの子を助けた！」`,
      );
      era.println();

      await era.printAndWait(
        `人々の声は波のように高まり、知らせを聞いてこちらへ寄ってくる者も多い。ふたりは少し手も足も出ない。だが ${you.name} がテイオーを見ると、${teio.teen_sex_title}の顔は赤いが、明確な嫌悪は見せていない——名声は人を、あるいは${teio.uma_sex_title}を喜ばせるものなのだろう。`,
      );
      await era.printAndWait(
        `それから ${you.name} は${teio.sex}の耳が角度を変えるのに気づき、続いて ${you.name} も声を聞く。`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}A「うん、かっこいい！ボクもこんな${teio.uma_sex_title}になりたい！」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}B「${teio.sex}のトレーナーがすごいって聞くよ。今そばにいる人、それだよね」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}C「本当？私も${you.sex}を専属トレーナーにしたい。今すぐ契約する！」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}D「${you.sex}の顔も雰囲気もいいなあ。ほんと……」`,
      );
      era.println();

      await era.printAndWait(
        `ええと……予想外の称賛だ。だが ${you.name} は素直に受け取る。`,
      );
      await era.printAndWait(
        `ただし後半の中身まで考える余裕はもうない。担当が、味わうような顔でこちらを見ているからだ。`,
      );
      era.println();

      await you.say_and_wait(
        `まずい……${teio.sex}はいつこんなものを覚えた`,
        true,
      );
      await era.printAndWait(
        `${you.name} は心のなかでまずいと思うが、${teio.sex}はすでに二歩を一歩にして ${you.name} の前へ来て、腕を取り、言う。`,
      );
      era.println();

      await teio.say_and_wait(
        `ごめんねみなさん、先約があるから。応援と厚意、ありがとう。またレース場で会おう。トレ～ナー～、テイオー${teio.adult_sex_title}と出発する？`,
      );
      era.println();

      era.print(`${you.name} は苦笑しつつ、返す——`);
      era.printButton(
        '「無敵のテイオーさまのそばに仕えるのが、拙者の使命です」（賢さ+30）',
        1,
      );
      era.printButton(
        `「できる限りを、我が${teio.adult_sex_title}」（ランダム3項目+15）`,
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] os_honey_power
  os_honey_power: (() => {
    const title = 'ハチミツの力';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${teio.sex}と外出すると何か起きる気がする、と ${you.name} は思いながら、隣で ${you.name} の腕を取る担当を見る。`,
      );
      await era.printAndWait(
        `いや、引っ張っている、と言うほうが正確だ。ときどき ${you.name} は、考えながら跳ね回る${teio.uma_sex_title}${teio.teen_sex_title}の歩幅についていけている自分が不思議になる。付き合っているうちに帝王舞歩の技が少し移ったのかもしれない。`,
      );
      await era.printAndWait(
        '付き合いは、多くのことを知らず知らず互いに移す……たとえば好みだ。',
      );
      era.println();

      await era.printAndWait(
        `${you.name} の担当は ${you.name} をベンチの下へ連れていき、一刻前に行きつけの屋台で買った特製ハチミツドリンクを大きな口で啜り始める。`,
      );
      await era.printAndWait(
        `濃い蜜が${teio.sex}の喉を通り、首に小さな曲線を描く。陽が${teio.sex}の片側を照らし、淡い白い肌に質感を足し、飲み込むときの筋肉の細かな動きまで浮き上がらせる……`,
      );
      await era.printAndWait(
        `買ったときは何も思わなかったのに、今は口が渇き、何か飲みたくなる。`,
      );
      era.println();

      await teio.say_and_wait('トレーナー？');
      era.println();

      await era.printAndWait(`${you.name} は慌てて返事する。`);
      era.println();

      await teio.say_and_wait(
        `トレーナー？${you.name} も渇いてるでしょ、飲む？`,
      );
      await era.printAndWait(
        `${teio.sex}はくすくす笑い、半分残ったハチミツドリンクを ${you.name} の眼前へ掲げ、誘うように見える。`,
      );

      await era.printAndWait(`${you.name} は——`);
      era.printButton('もう一杯買う（賢さ+20、好感+5）', 1);
      era.printButton(
        '「自分は無糖無味のお茶のほうが好きで……」（スタミナ＆根性+15）',
        2,
      );
      if (era.get('love:3') > 50) {
        era.printButton(
          `${teio.sex}の手のカップを受け取り、付いているストローで飲み干してから返す（スピード＆パワー+15、体力+150、恋慕+1）`,
          3,
        );
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name} は笑って${teio.sex}の頭を撫で、自分の分を買いに行く。ハチミツドリンクを唇へ運び、指に残った${teio.uma_sex_title}の髪の香りと甘いハチミツが混ざり、陶然とする……`,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name} は少し気まずい顔で咳払いし、担当の誘いを婉曲に断る。${teio.sex}は目を細め、さらに楽しそうに笑う。`,
          );
          break;
        case 3:
          await teio.say_and_wait('///////');
          era.println();

          await era.printAndWait(
            `${you.name} は悪戯心を起こし、${teio.sex}の手のカップを取り上げ、勢いよく一口飲み、何事もなかったようにフリーズした${teio.sex}の手へ戻す。`,
          );
          era.println();

          await teio.say_and_wait('んうんうん——');
          era.println();

          await era.printAndWait('……やりすぎた。');
          await era.printAndWait(
            `あと十分ほどきちんと謝り、顔を真っ赤にした${teio.sex}はようやく唸りを止め、立ち上がって ${you.name} の隣へ寄る。`,
          );
          await era.printAndWait(
            `歩き出す前、${you.name} は${teio.sex}が視線を避け、慎重にストローでもう数口飲むのに気づく……`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] os_lets_go_together
  os_lets_go_together: (() => {
    const title = '一緒に行こう！';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('ハチミツ🎶～');
      era.println();

      await era.printAndWait(
        `黄色いワンピースを着た小さな${teio.uma_sex_title}が陽を浴び、前方ではしゃぎながら歩き、余った活力を撒き散らしている。だが ${you.name} への気遣いからか、${teio.sex}は ${you.name} の視界から外れない。`,
      );
      await era.printAndWait(
        `${teio.sex}がこんなにのびのびしているのを見て、${you.name} も思わず笑い、${teio.sex}の歩幅に追いつく。`,
      );
      await era.printAndWait(
        'ほどなく人工の小川のそばへ着く。一般客向けの道ではなさそうだ——',
      );
      await era.printAndWait(
        `${you.name} がそう思ったところで、担当のサンダルはすでに水のなかの石のうえにある。${teio.sex}は ${you.name} へ片手を差し出す。`,
      );
      era.println();

      await teio.say_and_wait('一緒に来て、トレーナー！');
      await era.printAndWait(`${you.name} は決める——`);
      era.printButton('頷く（スタミナ+15）', 1);
      era.printButton('「いや、ルールは守ろう」（根性+15）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} も手を伸ばし、${teio.sex}を握る。体格に似合わない力で ${you.name} は引っ張られ、ふたりは水を踏んで歩き、楽しい体験だ。`,
        );
        await era.printAndWait(
          '——職員に見つかって注意されなければ、もっとよかった。',
        );
      } else {
        await era.printAndWait(
          `小さな${teio.uma_sex_title}は少し残念そうだが、${you.name} のそばへ戻り、${you.name} と並んで本道を歩いた。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] os_uma_shopping
  os_uma_shopping: (() => {
    const title = (teio) => `${teio.uma_sex_title}の……買い回り！`;
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('女性の買い物に付き合うのは、大変だ。');
      await era.printAndWait('女性を商業施設へ連れていくのは、疲れる。');
      await era.printAndWait(
        `${teio.uma_sex_title}の買い物に付き合うのは、骨が髄まで疲れる。`,
      );
      await era.printAndWait(
        `不幸なことに、${you.name} は今、その第三階層にいる。`,
      );
      await era.printAndWait(
        `カートを押し——速度は${teio.sex}と比べ物にならない——リストと棚の品を照合する。それだけなら、一種ののんびりだ。`,
      );
      await era.printAndWait(
        `だが ${you.name} は、瞬くあいだにどこからともなく品で埋まるカートと、耳元を絶えず通り過ぎる気流の音を見て、思わず溜息をつく。`,
      );
      era.println();
      await teio.say_and_wait(
        'トレーナー、はやく！まだ買うものあるし、ボクひとりじゃ持てないから手伝って！来ないと、売り切れちゃうよ！',
      );
      await era.printAndWait(
        `${you.name} は空を仰いで叫び、運命を受け入れ、両脚を催して声のほうへ向かう——`,
      );
      era.printButton(
        '必死にテイオーのリズムについていく（スピード＆パワー＆根性+20、体力+200、好感+10）',
        1,
      );
      era.printButton(
        'あらかじめ決めたルートで先に目標へ着き、テイオーを待ち、詰めてから次へ（スタミナ+20、賢さ+30、好感+5）',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_5
  race_end_5: (() => {
    const title = 'レース入着';
    /** @param {CharaTalk} teio トウカイテイオー */
    const f = async (teio) => {
      await era.printAndWait('悔しいが、悪くはない。');
      await era.printAndWait(
        `${teio.name} は少し不服そうに足を引きずって場外へ出るテイオーを見て、厳しくしようとした顔に、なぜか笑みが漏れる。`,
      );
      await era.printAndWait(`頑張ったほうだ。しっかり慰めてやろう。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_lose
  race_end_lose: (() => {
    const title = 'レース敗北';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait(
          `${you.name} は、髪を乱し、落胆してゆっくり歩く担当を見て、胸が血を滴らせる気がする。`,
        );
        await era.printAndWait('くそ、あと一歩……脚さえ……');
        await era.printAndWait(`実況まで、台上でふたりを惜しんでいた。`);
        await era.printAndWait(
          `${you.name} は黙ってテイオーを迎え、自分の体で${teio.sex}を支える。`,
        );
        await era.printAndWait(
          `${teio.sex}は小さく震え、また無理に立ち直る。痛みか、それとも ${you.name} の前で弱さを見せたくないのか。`,
        );
        await era.printAndWait(
          `${you.name} はわからないし、今は構わない。こうしてふたりは支え合い、一緒に場を出る……`,
        );
      } else {
        await era.printAndWait(`${you.name} は眉を寄せる。なぜこうなった。`);
        await era.printAndWait(
          `黒板の刺さるような赤い着順は、${you.name} にこの惨敗が現実だと、一瞬たりとも忘れさせない。`,
        );
        await era.printAndWait(
          `${you.name} は、顔を土気色にし、耳も尻尾も力なく垂れ、体を引きずって ${you.name} へ向かう担当${teio.uma_sex_title}を見て、胸のなかが複雑だ。`,
        );
        await teio.say_and_wait(`……`);
        era.printButton(
          '「大丈夫だ。胸を張れ。もう一度気合いを入れて、成功は待っている」',
          1,
        );
        era.printButton(
          '「今回は……しっかり振り返ろう。テイオー、次はこうするな」',
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
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} は興奮してスタンドを降り、凱旋したテイオーを迎える。`,
      );
      await era.printAndWait(
        `${teio.sex}も同様に上機嫌で、顔を赤くして ${you.name} へ駆け寄り、${you.name} とハイタッチする。ふたりで勝利の味をたっぷり味わった。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sa_47_5
  sa_47_5: (() => {
    const title = 'だから、服はどうなの！';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        'また雲ひとつない晴れの日——トレセンのこちらの空は、本当にいい。',
      );
      await era.printAndWait(
        `${you.name} は学園の中庭を歩き、早春の気候を味わう。`,
      );
      await era.printAndWait(
        `だが今日は、あのときのように ${you.name} ひとりで散歩しているわけではない。`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('空気が少し気まずい。');
      await era.printAndWait(
        `${you.name} は思わず余光で隣の小さな${teio.uma_sex_title}を見る。外に出た白い肌、私服の下に覗く桃色の肩紐……いけない。これ以上見ると師徳に傷がつく。`,
      );
      await era.printAndWait(
        `まして${teio.sex}のその格好は、色とりどりのビーチウェアのような子供服で、${you.name} の罪悪感をさらに増す。`,
      );
      await era.printAndWait(
        `これほど愛らしい${teio.uma_sex_title}が、${you.name} と担当契約を結んだ相手だ……`,
      );
      era.println();

      await teio.say_and_wait('トレーナー？');
      era.println();

      era.printButton('「なに？」', 1);
      await era.input();
      await era.printAndWait(
        `元気な${teio.teen_sex_title}の声が上がり、${you.name} は頭を空にして心を平らにし、いちばん普通の顔で返そうとする。`,
      );
      await era.printAndWait('そして視線はまっすぐ、前方の道へ置く。');
      era.println();

      await teio.say_and_wait('キミ……ボクの私服、どう思う？');
      era.println();

      era.print(`${you.name} はすぐ——`);
      era.printButton('「うん……かなり子供っぽいな」（体力+150）', 1);
      era.printButton('「可愛い……」（スピード+20）', 2);
      era.printButton('「かっこいいよ、テイオー！」（パワー+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await teio.say_and_wait('んぅ～ボク、もう子供じゃないもん！');
          era.println();

          await era.printAndWait(
            `${teio.sex}は唇を尖らせ、少し拗ねたようだが、かえって可愛い。`,
          );
          await era.printAndWait(
            `${you.name} と${teio.sex}は黙ってしばらく歩いた。`,
          );
          break;
        case 2:
          await teio.say_and_wait('えっ！');
          era.println();

          await era.printAndWait(
            `${you.name} の担当は小さく鳴き、顔が赤くなったようだ。${you.name} もこれ以上見るのが気恥ずかしくなり、ふたりは黙って歩き続けた。`,
          );
          break;
        case 3:
          await teio.say_and_wait(
            `あたりまえ！${you.name} はやっぱりテイオーさまのかっこよさがわかるね！`,
          );
          await era.printAndWait(
            `${teio.sex}は嬉しそうだ。${you.name} も思わず笑い、${teio.sex}と一緒にしばらく歩いた。`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sa_95_25
  sa_95_25: (() => {
    const title = '春のテイオー';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('いいな……');
      era.println();
      await era.printAndWait(
        `トレーニングが終わったばかりで、${you.name} は担当とゆっくり寮へ戻る道を歩いている。${teio.uma_sex_title}${teio.adult_sex_title}は今、頭を振り、激しい運動でほどけた髪から汗が飛び、全身から湯気が立ち上っているのが見える。`,
      );
      await teio.say_and_wait('ん？トレーナー？なに言ったの？');
      era.println();

      await era.printAndWait(
        `${you.name} は、うっかり${teio.sex}を見入って心の声まで出してしまったことに気づき、慌てて取り繕う。`,
      );
      era.println();

      era.printButton('「最近の成績が、本当に素晴らしいと言ったんだ」', 1);
      await era.input();

      await teio.say_and_wait('ん～ふん？本当にそれだけ？');
      era.println();

      await era.printAndWait(
        `${you.name} は顔を逸らし、答えず、ついでにこっそり襟を立てて充血した顔を隠す。`,
      );
      era.println();

      await era.printAndWait(
        `小さな${teio.uma_sex_title}は ${you.name} を横目で見て、口を結んで笑い、それから突然、表情が沈む。`,
      );
      era.println();

      await teio.say_and_wait(
        'トレーナー……ボクたちの旅は、まだ終わってないよ。',
      );
      era.println();

      await era.printAndWait(
        `突然の問いかけに ${you.name} は振り返り、適当に冗談で返そうとして、${teio.sex}の真剣な顔を見て黙る。`,
      );
      await teio.say_and_wait(
        'ボクの過去の成績も、今の栄光も、これからの目標も、全部キミと分ける。だから一緒に、続けよう。',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}は一字一句、${you.name} へこの本心を吐く。`,
      );
      era.println();

      era.printButton('「もちろん」', 1);
      await era.input();

      await era.printAndWait(`ふたりは揃って、目標の場所へ向かう——`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sa_the_days_together
  sa_the_days_together: (() => {
    const title = 'キミと歩いた日々';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `学園の中心に噴水があり、上に三女神の像が座っている。毎日、無数の${teio.uma_sex_title}や人がここで黙って祈り、願いを託す。`,
      );
      await era.printAndWait(
        `${you.name} は、担当に少し似た顔を見つめ、指でポケットの財布に触れる。願をかけるか……`,
      );
      era.println();

      await teio.say_and_wait('トレーナー！');
      era.println();

      await era.printAndWait(
        `${you.name} は振り返って担当に手を振るが、${teio.sex}は跳ねるように来て、人目も気にせず ${you.name} の手を取る。`,
      );
      await era.printAndWait(
        `${you.name} は${teio.sex}の顔を見る。正直……少し似ている。`,
      );
      era.println();

      await teio.say_and_wait(
        'んふん～ボクと一緒なのに、他の子のこと考えてる？',
      );
      era.println();

      await era.printAndWait(
        `——子供じゃない！${you.name} はそう言おうとして、担当の顔を見て、察して口を閉じる。`,
      );
      era.println();

      await teio.say_and_wait(
        `ふん……じゃあちょっと罰。${you.name} は今、願いをかけようとしてたでしょ。何を願うの？`,
      );
      era.println();

      era.printButton('「これからもよろしく」（好感+10、全能力+5）', 1);
      if (era.get('love:3') > 90) {
        era.printButton(
          '「想う、いや、ずっとキミのそばにいる」（恋慕+1、やる気上昇、ランダム2項目+10）',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('願いじゃないじゃん……なにそれ。');
        era.println();

        await era.printAndWait(
          `だが ${you.name} は、願う内容を決めていなかった。`,
        );
      } else {
        await teio.say_and_wait('……許してあげる。次はないよ。');
        era.println();

        await era.printAndWait(
          `耳まで赤い小さな${teio.uma_sex_title}は ${you.name} の手を放す。`,
        );
        await era.printAndWait(
          `しばらくして ${teio.name} が去ったあと、${you.name} はここへ戻り、口を歪めて笑い、財布の硬貨をすべて池へ倒し、両手を合わせて、初めて本気で願をかける。`,
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
      await era.printAndWait(`${you.name} は決める——`);
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
