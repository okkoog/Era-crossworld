// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/101900-Agnes-Digital/edu-19"),

  // [번역 대상] before_begin_race
  before_begin_race: (() => {
    const title = "데뷔전 시작!";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait([
        "음흥, 들리시나요? 저는 ",
        digital.get_colored_name(),
        "입니다. 새 잎이 돋아나는 이 계절, 여러분 모두 잘 지내고 계신가요? 저는 지금 데뷔전의 예시장에 서 있습니다. 주변에 있는 분들은……",
      ]);
      await digital.say_and_wait([
        "디지땅…… 디지땅…… ",
        digital.uma_sex_title,
        'ちゃんの周り……というか',
        digital.uma_sex_title,
        "짱 안에 있어요!",
      ]);
      await digital.say_and_wait([
        "이미…… 모에사할 것 같아…… ",
        callname,
        "! 보이시나요! 이 주변의 ",
        digital.uma_sex_title,
        "짱들이!",
      ]);
      await era.printAndWait([
        "보인다. 주변의 ",
        digital.uma_sex_title,
        " 중 일부는 긴장해서 떨고 있고, 어떤 아이는 눈을 빛내고 있지만, 그중에서도 가장 특별한 건……",
      ]);
      await era.printAndWait([
        "뺨을 감싸 쥐고 거의 위험해 보일 정도의 눈빛으로 이 모든 것을 감상하고 있는——",
        digital.get_colored_name(),
        '。',
      ]);
      await digital.say_and_wait([
        "씁하씁하, 제가 말하고 싶은 건 ",
        digital.couple_title,
        'はまだどこまで行けるのか！ 尊力測定器はもう振り切れて、私、その中に混ざれている！',
      ]);
      await digital.say_and_wait("하~ 너무 존귀해서 죽을 것 같아…… 디지땅…… 곧 재가 되어버려……");
      await you.say_and_wait("이제 곧 레이스 시작이야!");
      await digital.say_and_wait("와아! 맞아요! 지금은 승천할 때가 아니죠!");
      await digital.say_and_wait([
        "지금의 저도 ",
        digital.uma_sex_title,
        "짱들과 어깨를 나란히 하는 존재. 제 존재가 ",
        digital.couple_title,
        'に影を落としてはいけない！',
      ]);
      await digital.say_and_wait(
        "열심히 할게요! 에너지 충전, 점검 완료! 존귀력 기능 100% 가동!",
      );
      await digital.say_and_wait([
        "디지땅의 눈은 필름이에요. ",
        digital.uma_sex_title,
        "짱들의 모든 미소와 눈물을 전부 그 안에 새겨넣을 거예요!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 각오를 품고 경기장으로 향했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_hyac_sta
  before_hyac_sta: (() => {
    const title = "히아신스 스테이크스 시작!";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} nikk_hai 日経新春杯（着色名）
     */
    const f = async (digital, doto, you, callname, nikk_hai) => {
      await era.printAndWait([
        "얼마 전 ",
        nikk_hai,
        "에서 ",
        doto.get_colored_name(),
        "가 2위를 차지했다.",
      ]);
      await era.printAndWait([
        "원래는 지하 통로에서 ",
        doto.get_colored_name(),
        "를 축하해주려 했던 ",
        digital.get_colored_name(),
        "은 이전의 무례함 때문에 머리를 싸매고 있었지만, 뜻밖에도 ",
        doto.get_colored_name(),
        "에게 감사의 인사를 받았다.",
      ]);
      await era.printAndWait([
        "일반적인 팬의 행동과는 상반되는 행동이었음에도 점차 결실을 보고 있는 상황에 ",
        digital.get_colored_name(),
        "은 점점 이해하기 어려워하는 것 같았다.",
      ]);
      await era.printAndWait(
        "그 문제를 해결하는 방식은 바로 레이스. 오늘의 이 레이스는 이전부터 이미 예정되어 있던 레이스였다.",
      );
      await era.printAndWait("OP 레이스로서, G3조차 되지 않는 작은 레이스였다.");
      await era.printAndWait([
        "예시장 안에서 ",
        digital.get_colored_name(),
        "은 다른 ",
        digital.uma_sex_title,
        "를 뚫어지게 쳐다보았다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "의 양손이 갈퀴가 되어 허공을 휘저었고, 눈동자에는 「맛있어 보인다」는 생각이 가득 담겨 있었다……",
      ]);
      era.printButton("「디지털, 덮치면 안 된다.」", 1);
      await era.input();
      await digital.say_and_wait("아뇨, 애초에 전에도 덮친 적은 없거든요.");
      await digital.say_and_wait([
        "그건 그렇고, ",
        callname,
        ", 왠지 기분이 묘해요.",
      ]);
      await digital.say_and_wait(
        "분위기가 무척 엄격한 것 같으면서도, 그 안에 담긴 존귀함의 농도는 변함이 없어서……",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は気づいた。どの',
        digital.uma_sex_title,
        'の顔にも臨戦態勢が書いてある。その感情に ',
        digital.get_colored_name(),
        ' は抗えない。だが空気が、いつものように口に出すことを許さない。',
      ]);
      await digital.say_and_wait([
        "이 안에는 분명 더욱 순수한 무언가가 있고, 그것이 ",
        digital.uma_sex_title,
        "짱을 존귀하게 만드는 이유일 거예요……",
      ]);
      await you.say_and_wait("그걸 만져보고 싶어?");
      await digital.say_and_wait("엑! 그건 너무 실례잖아요!");
      await digital.say_and_wait(
        "하지만, 뭐랄까, 예전보다 조금 더 가까운 위치에서 관찰하고 싶어요……",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 여전히 스스로를 관객이라 여기고 있었지만, ",
        digital.sex,
        "의 눈빛에는 이전과는 다른 변화가 생겨나고 있었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_japa_dir
  before_japa_dir: (() => {
    const title = 'ジャパンダートダービー開始！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (digital, you, japa_dir) => {
      await digital.say_and_wait(
        [
          "나는 아직 눈치채지 못했어. ",
          digital.uma_sex_title,
          "짱들의 존귀 에너지의 근원, 그것은 분명 더없이 소중한 것일 텐데……",
        ],
        true,
      );
      await digital.say_and_wait(
        "오이…… 밤…… 더트…… 이 낯선 타지의 코스에서, 이 특수한 경기장에서라면, 어쩌면 내가 찾고 싶은 비밀이 있을지도 몰라……",
        true,
      );
      era.drawLine();
      await digital.say_and_wait([
        '『',
        japa_dir,
        "』, 왠지 이 레이스의 분위기는 무척 독특하네요.",
      ]);
      await you.say_and_wait(
        'JpnIのレース……この手のレースには、どうしても偏見がつきまとう。',
      );
      await digital.say_and_wait(
        "그럼에도 불구하고 이 레이스가 뿜어내는 뜨거운 기운. 마치 여름날의 태양 같아요……",
      );
      await digital.say_and_wait(
        "코스도, 풍경도, 잔디나 더트냐도 모두 다르지만, 그럼에도……",
      );
      await digital.say_and_wait([
        digital.uma_sex_title,
        "짱들의 마음은 모두 같겠죠?",
      ]);
      await era.printAndWait(
        "맞다. G1이든 G3이든, 중상이든 일반 레이스든, 잔디든 더트든, 중앙이든 지방이든……",
      );
      await you.say_and_wait("모두 똑같아.");
      await you.say_and_wait(
        "이 레이스가 끝나면 너는 모든 유형의 레이스를 경험하게 되는 거야. 왜 똑같은지 분명 알 수 있을 거야.",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、もうわかっているのかもしれない。',
        digital.sex,
        'に必要なのは証明だ。このレースで。',
      ]);
      await digital.say_and_wait([
        "지금! 오이의 더트 ",
        digital.uma_sex_title,
        "짱들과 함께 답을 찾아내겠어요!",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_mile_cha_c
  before_mile_cha_c: (() => {
    const title = "마일 챔피언십 시작!";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     */
    const f = async (digital, halo, h_call_d) => {
      await era.printAndWait([
        halo.get_colored_name(),
        '——',
        digital.get_colored_name(),
        "이 데뷔 전부터 동경해왔던 ",
        digital.uma_sex_title,
        ". 드디어 ",
        digital.get_colored_name(),
        "이 ",
        digital.sex,
        "와 같은 무대에 서게 되었다.",
      ]);
      await era.printAndWait([
        "예시장 위의 ",
        halo.get_colored_name(),
        "는 이전의 부진을 털어낸 듯 기세가 드높았다. 마치 전성기로 돌아간 듯한 모습이었다.",
      ]);
      await halo.say_and_wait([
        "어때? ",
        h_call_d,
        ", 오늘의 나는 눈이 멀어버릴 정도로 눈부시지 않아?",
      ]);
      await digital.say_and_wait(
        "네! 무척 눈부셔요! 하지만…… 등줄기는 올봄만큼 곧지는 않네요……",
      );
      await halo.say_and_wait(
        "하아…… 정말 못 속이겠네. 설마 그런 것까지 눈치챌 줄이야.",
      );
      await halo.say_and_wait([h_call_d, ", 너는 나를 어느 정도까지 좋아해?"]);
      await digital.say_and_wait("마리아나 해구보다 더 깊게 파고 있을 정도로 좋아해요!");
      await era.printAndWait([
        halo.get_colored_name(),
        "와 ",
        digital.get_colored_name(),
        "은 즐겁게 대화를 나누었다. 이곳에서 ",
        digital.couple_title,
        'が言葉にできないレースを見せてくれるとわかる。',
      ]);
      await digital.say_and_wait(
        "당신의 진심을 오늘 레이스를 통해 확인하고 싶어요!",
      );
      await halo.say_and_wait([
        "진정한 일류란 무엇인지 전신으로 이해해봐! ",
        h_call_d,
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_nhk_cup
  before_nhk_cup: (() => {
    const title = "NHK 마일 컵 시작!";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.say_and_wait("오오오오오오오! 역시, 정말 다르네요!");
      await era.printAndWait("G1 경기장, 10만 명 이상의 관중이 모인 레이스……");
      await era.printAndWait(
        "자주 관람해 왔음에도, 예시장에 직접 서서 느끼는 감각은 무척 신선했다.",
      );
      await era.printAndWait(
        '10万人の空気は十分に衝撃だが、本当の主役は、選手の……',
      );
      await digital.say_and_wait(
        "어어어어떻게 된 거지! 이 기운, 마치 영역 전개 같은 압박감이야!",
      );
      await digital.say_and_wait("위험해! 최고야! 그야말로 존귀함의 극치!");
      await you.say_and_wait("엄청 흥분했구나! 컨디션은 최고조네!");
      await digital.say_and_wait("이미, 이미 아무것도 생각할 수 없어요. 머릿속이 이미……");
      await digital.say_and_wait(
        "아름다워, 공포스러워, 해상도가 4K에 달하는 기분이에요. 지금은 여기 서 있는 것조차 힘들어……",
      );
      await digital.say_and_wait([
        "하지만 알아내고 말겠어요, ",
        digital.uma_sex_title,
        "짱들의 존귀함의 오묘함을!",
      ]);
      await digital.say_and_wait("설령…… 제가 존귀함에 못 이겨 재가 되어 사라질지라도…… 히익?!");
      await era.printAndWait([
        "왜 그러지? ",
        digital.get_colored_name(),
        "이 말을 하다 말고 갑자기 몸을 떨었다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 주위를 둘러보더니……",
      ]);
      await digital.say_and_wait("왠지 누군가 저를 지켜보고 있는 것 같은데요?");
      await era.printAndWait([
        "하지만 ",
        you.get_colored_name(),
        "이(가) 보기에는 참가자들 중에 ",
        digital.get_colored_name(),
        "을 주시하는 사람은 없었다. 그렇다면 관중석에서 오는 시선일 것이다.",
      ]);
      await digital.say_and_wait(
        "그런가요, 저도 모르는 사이에 최애 속에서 최애가 되는 꿈이라도 꾸고 있는 걸까요……",
      );
      await digital.say_and_wait('これ以上、軽薄じゃいられない！');
      await era.printAndWait([
        "이토록 중대한 레이스라면 분명 ",
        digital.get_colored_name(),
        "도 ",
        digital.sex,
        "의 소질을 일깨울 수 있을 것이었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_tenn_sho_s
  before_tenn_sho_s: (() => {
    const title = "텐노상 (가을) 시작!";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} o_call_di テイエムオペラオーのアグネスデジタルへの呼び方
     * @param {PrintedSpan} do_call_di メイショウドトウのアグネスデジタルへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      call_15,
      call_58,
      o_call_di,
      do_call_di,
      tenn_sho,
    ) => {
      await era.printAndWait(["드디어 ", tenn_sho, " 당일이 밝았다."]);
      await era.printAndWait([
        "예시장 안에서 ",
        digital.get_colored_name(),
        "은 낯익은 두 사람과 마주쳤다.",
      ]);
      await digital.say_and_wait([
        "잘 부탁드려요! ",
        call_15,
        '、',
        call_58,
        '。',
      ]);
      await doto.say_and_wait([
        "이쪽이야말로! 잘 부탁해, ",
        do_call_di,
        '！',
      ]);
      await era.printAndWait([
        "3년이라는 시간이 흘러, ",
        digital.get_colored_name(),
        "도 드디어 자신의 최애 앞에서 정상적으로 교류할 수 있게 되었다.",
      ]);
      await opera.say_and_wait(
        "아하하하, 너희 지금 명함이라도 교환하는 건가? 하지만 패왕인 나, 그 찬란한 존재 자체가 이미 나를 대변하고 있다! 어떤 소개도 필요 없지!",
      );
      await opera.say_and_wait([o_call_di, ", 나의 대관식에 온 걸 환영한다!"]);
      await opera.say_and_wait(
        "너의 노력은 지켜보고 있었다. 네가 우리의 뒤편까지 도달했다는 점은 인정해주지.",
      );
      await opera.say_and_wait([
        "하지만 뒤편은 어디까지나 뒤편일 뿐! ",
        o_call_di,
        ", 이 잔디 위에서 너는 나를 이길 수 없다. 『세기말 패왕』으로서 중거리 잔디를 호령하는 나를 말이다!",
      ]);
      await digital.say_and_wait(
        "확실히…… 말씀하신 대로 순수한 실력만으로는 아직 미치지 못할지도 모르죠……",
      );
      await digital.say_and_wait("하지만, 저의 기교, 잔디와 더트를 아우르는 기교는……");
      await era.printAndWait([
        "그렇다. 이번 잔디 레이스에서 이도류인 ",
        digital.get_colored_name(),
        "의 강점은…… 잠시 후면 분명해질 것이었다.",
      ]);
      await era.printAndWait("똑…… 똑……");
      await era.printAndWait("좌르르…… 좌르르……");
      await era.printAndWait("처음에는 조금씩 내리던 비가 이내 사방을 적시기 시작했다!");
      await era.printAndWait([
        "그렇다. 포화 마장, 이번 ",
        tenn_sho,
        "는 포화 마장에서 치러지게 되었다!",
      ]);
      await digital.say_and_wait([
        "이것은…… ",
        digital.uma_sex_title,
        "짱들의 눈물비일까요…… 아니요, 제가 만난 모든 ",
        digital.uma_sex_title,
        "짱들이 기뻐하며 흘리는, 저의 승리를 축하하는 비예요!",
      ]);
      await opera.say_and_wait(
        "……비인가…… 미리 말해두지만, 나도 포화 마장은 자신 있다. 패왕은 어떤 상태든 적응할 수 있는 법이니까!",
      );
      await doto.say_and_wait("아와와와…… 비예요오오……");
      await era.printAndWait([
        "티엠 오페라 오도 포화 마장에 능숙하지만, ",
        digital.get_colored_name(),
        "은 단순히 능숙한 수준이 아니었다!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 말 그대로 진흙탕 위를 달려온 몸. 이런 상황이라면……",
      ]);
      await era.printAndWait("오직 승리만이 보일 뿐이었다.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] begin_race_win
  begin_race_win: (() => {
    const title = "데뷔전 승리";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} hyac_sta ヒヤシンスステークス（着色名）
     */
    const f = async (digital, you, callname, hyac_sta) => {
      await era.printAndWait([
        "데뷔전, ",
        digital.get_colored_name(),
        "은 이 레이스에서 훌륭하게 1위를 차지했다. 그리고……",
      ]);
      await era.printAndWait([
        '尊さで灰になる ',
        digital.get_colored_name(),
        ' が、いつものように愛を解放すると思っていた。だが',
        digital.sex,
        'は静かになっている。',
        digital.sex,
        'にも、こういうときがあるのか……',
      ]);
      await digital.say_and_wait("……원점이자, 정점……");
      await digital.say_and_wait(
        "첫 게이트 인, 조절할 수 없었던 타이밍, 서로 뒤엉키는 예쁜 다리들……",
      );
      await digital.say_and_wait(
        "흩날리는 땀방울, 초조함에 하얘진 머릿속. 하지만 관객들의 환호성이 사라지고, 남은 것은 게시판 위의 결과뿐……",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "이 설마 이렇게 확실한 감정을 묘사할 수 있을 줄이야.",
      ]);
      await digital.say_and_wait(
        "너, 너무 감동적이에요! 무엇 하나 눈물이 나지 않는 게 없네요, 그렇죠! 그렇죠!",
      );
      era.printButton(
        "「그러게, 첫 레이스인 데뷔전 우승, 축하해.」",
        1,
      );
      await era.input();
      await digital.say_and_wait([
        "아아아, 달리는 동안 디지땅은 다른 ",
        digital.uma_sex_title,
        "짱들의 감정에 휩쓸려 엉망진창이 되어서, 디지땅은……",
      ]);
      await digital.say_and_wait(
        "저는 정말이지 데뷔전을 얕보고 있었어요! 데뷔전은 모두가 승자예요! 모두가!",
      );
      await digital.say_and_wait(
        'こんなに豊かな感情に挟まれたら、誰だって収穫だらけでしょ？',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 진심으로 즐거워 보였다. 레이스 중의 발걸음에서도, 레이스 후의 감상에서도 ",
        digital.sex,
        "의 레이스에 대한 애정이 전해져 왔다.",
      ]);
      await digital.say_and_wait([
        callname,
        ", 오늘 레이스는 입문에 불과하죠! 앞으로도 많은 레이스가 남았죠! 더 많은 ",
        digital.uma_sex_title,
        "짱들을 만날 수 있겠죠!",
      ]);
      await you.say_and_wait([
        "그래, 앞으로도 많은 ",
        digital.uma_sex_title,
        "들이 너를 기다리고 있어.",
      ]);
      await digital.say_and_wait(
        "최고예요! 낙원의 문턱을 넘어버렸어요, 정말 어쩌다 보니 넘고 말았어요! 그곳은 제가 감히 발을 들여선 안 되는 영역이라고만 생각했는데!",
      );
      await digital.say_and_wait([
        "다음에도, 이런 ",
        digital.uma_sex_title,
        "짱들을 다시 보고 싶어요!",
      ]);
      await you.say_and_wait("그럼, 다음엔 잔디 레이스를 뛰어보는 건 어때?");
      await digital.say_and_wait(
        'ん？ え、今回はダートで、次は芝……ごめん、調子に乗った。嬉しすぎて頭が九霄の外まで飛んでた。',
      );
      await digital.say_and_wait(
        "전 한 번 더 더트 레이스를 뛰어서, 이 분위기를 다시 느껴보고 싶어요!",
      );
      await era.printAndWait([
        "상의 끝에, 다음 레이스를 새해의 ",
        hyac_sta,
        "로 결정했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] hyac_sta_win
  hyac_sta_win: (() => {
    const title = "히아신스 승리";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} diamond_lord ダイヤモナーク（アグネスデジタル口上NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     */
    const f = async (digital, diamond_lord, you, callname, nhk_cup) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' はやはりきれいにゴールした。余裕、と言っていいのか……',
      ]);
      await digital.say_and_wait("후우…… 하아…… 디지땅, 해냈어요……");
      await digital.say_and_wait([
        "결승선을 통과하고, 그리고 지켜봤어요. ",
        digital.uma_sex_title,
        "짱들의 광채를!",
      ]);
      await digital.say_and_wait([
        "역시 조금은 의외라고 해야 할까요! 전 ",
        digital.uma_sex_title,
        "짱들이 달리는 그 각오 자체가 존귀하다고만 생각했는데……",
      ]);
      await digital.say_and_wait([
        "하지만 아마 ",
        digital.uma_sex_title,
        "짱들이 레이스에 담은 염원은 그보다 훨씬 깊을 거예요…… 제가 레이스를 계속해 나간다면, 분명 ",
        digital.couple_title,
        'がまぶしい理由が絶対わかる！',
      ]);
      await digital.say_and_wait("계속해서 이 방해하지 않는 주의로 밀고 나가죠!");
      await you.say_as_passer_by_and_wait('？？？', "으으으…… 윽……");
      await you.say_as_passer_by_and_wait('？？？', "으아아아아앙!");
      await digital.print_and_wait([
        "멀지 않은 곳에서 어느 ",
        digital.uma_sex_title,
        "의 통곡 소리가 들려왔다.",
      ]);
      await digital.say_and_wait([
        "저 ",
        digital.uma_sex_title,
        ", 방금 전 레이스에서 본 기억이……",
      ]);
      await digital.print_and_wait([
        "기억이 맞다면 ",
        digital.sex,
        "는 방금 6착이었다. 게시판에도 들지 못한 순위였다.",
      ]);
      await you.say_as_passer_by_and_wait(
        '？？？',
        '掲示板……掲示板にも乗れなくて……重賞なんて、どうして……！',
      );
      await digital.print_and_wait([
        "평소라면 ",
        digital.uma_sex_title,
        "의 일거수일투족을 지켜봤을 ",
        digital.get_colored_name(),
        "이었지만, 지금은 도저히 계속 지켜볼 엄두가 나지 않는지 시선을 돌려 등을 돌렸다.",
      ]);
      await digital.print_and_wait([
        "지하 통로를 지날 때, ",
        digital.get_colored_name(),
        "은 줄곧 다른 ",
        digital.uma_sex_title,
        "들을 피했다. 평소처럼 거리를 두는 것이 아니라, 의식적으로 보지 않으려 애쓰고 있었다.",
      ]);
      await digital.say_and_wait('……');
      await digital.print_and_wait([
        "그럼에도 앞쪽에서 두 명의 ",
        digital.uma_sex_title,
        "가 보였다. 방금 2착과 3착이었다.",
      ]);
      await digital.print_and_wait([
        digital.get_colored_name(),
        "이 자리를 피하려던 순간……",
      ]);
      const cache = diamond_lord.name;
      diamond_lord.name = `${digital.uma_sex_title}A`;
      await diamond_lord.say_and_wait("으으윽……");
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        "아니야, 아니야. 2착이나 했잖아? 왜 울고 그래?",
      );
      await diamond_lord.say_and_wait(
        "분명히, 분명히, 선배님과의 대결이었는데…… 줄곧 당신과 승부를 겨뤄서, 넘어서고 싶다고 생각했는데……",
      );
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '届いたじゃない。あんた、本当に強いよ。私もそろそろ枯れかけてるしね～',
      );
      await diamond_lord.say_and_wait([
        "……저는 줄곧…… 선배를 이기기만 하면…… 하지만, ",
        digital.sex,
        "는 정말로 너무 강해서…… 손을 뻗어도 닿지 않아서……",
      ]);
      diamond_lord.name = cache;
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        diamond_lord.get_colored_name(),
        "! 너 노력했잖아! 온 힘을 다했잖아!",
      ]);
      await diamond_lord.say_and_wait("하지만……");
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        "우리의 성적이 어찌 됐든, 트윙클 시리즈는 계속될 거야. 우리를 기다려주지 않는다고!",
      );
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        "너는 나보다 강하고 잠재력도 있어. 너는 앞으로 분명 중상에 도전하겠지! 분명 G1에도 도전할 거야! ",
        digital.couple_title,
        "이 다시 보게 만들어주자고!",
      ]);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        "위닝 라이브, 같이 갈 수 있지?",
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        'Bは手を上げて、仲間の涙を拭った。',
      ]);
      await diamond_lord.say_and_wait("!");
      await digital.print_and_wait([
        digital.sex,
        "는 흘러내리는 콧물을 세게 들이마시고는 세차게 고개를 끄덕였다.",
      ]);
      await digital.print_and_wait([
        digital.couple_title,
        'が手をつないで遠ざかるのを見て、',
        digital.get_colored_name(),
        ' は今度ばかり、「尊い」なんて言葉が出なかった。',
      ]);
      era.drawLine();
      await digital.say_and_wait('……');
      await you.say_and_wait("디지털, 괜찮아?");
      await digital.say_and_wait("거짓말이야…… 방해하지 않는다니……");
      await digital.say_and_wait("그런 건 애초에 불가능해요.");
      await digital.say_and_wait(
        "레이스에 나가는 이상 반드시 승자가 있고, 반드시 패자가 있어요…… 져도 존귀하다니, 전부 승자라니, 제가 그런 말을 잘도 지껄였네요……",
      );
      era.printButton(
        '「レース場に上がって築いた繋がりが、君たちをこんなに尊くする。ずっと知ってたことだろ？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        "은 이번 레이스를 통해 ",
        digital.uma_sex_title,
        "들이 왜 존귀하고 위대한지, 그 비결을 조금은 엿본 듯했다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        digital.sex,
        "는 자신이 한 명의 라이벌이면서도 스스로를 관객이라 여기며, 비정하게 우승을 가로챘다는 사실을 문득 깨달았다.",
      ]);
      await era.printAndWait("그것은 대단히 무례한 짓이었다.");
      await era.printAndWait([
        "그리하여 ",
        digital.get_colored_name(),
        "이 위닝 라이브를 마치고 트레이닝실로 돌아왔을 때……",
      ]);
      await digital.say_and_wait([
        callname,
        ", 앞으로의 일에 대해 이야기하고 싶어요. 저답지 않은 말을 좀 하려고 하는데, 괜찮을까요??",
      ]);
      await you.say_and_wait("물론이지.");
      await digital.say_and_wait("저, 무슨 일이 있어도…… G1 레이스에 나가고 싶어요.");
      await digital.say_and_wait(
        "현장에 있던 이들 모두에게, 뜨거운 철판 위에서 도게자라도 해야 할 만큼 실례를 저지른 기분이에요.",
      );
      await digital.say_and_wait(
        "그렇다면 제대로 해야만 해요. 출주해서 G1에서 이기고, 다른 사람들이 디지땅은 정말 강하다고 생각하게 만드는 거예요.",
      );
      await era.printAndWait([
        '証明したい。',
        digital.sex,
        'が本当に強いことを。',
        digital.sex,
        'に負けたすべての',
        digital.uma_sex_title,
        'へのけじめとして。',
      ]);
      await digital.say_and_wait([
        "그리고 ",
        digital.uma_sex_title,
        "짱들이 G1 레이스에 어떤 마음으로 임하는지 제대로 확인하고 싶어요!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "과 ",
        you.get_colored_name(),
        "은(는) 다음 레이스를 5월 전반의 ",
        nhk_cup,
        "으로 정했다.",
      ]);
      await digital.say_and_wait([
        "출주할 거예요. 그리고—— ",
        digital.couple_title,
        "의 몫까지 짊어지고 달릴게요!",
      ]);
      await era.printAndWait([
        "우연한 사건이었으나 결과는 우연이 아니었다. 승리와 패배, 그 안에 담긴 슬픔이 ",
        digital.get_colored_name(),
        "의 미래를 밀어내고 있었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] japa_dir_win
  japa_dir_win: (() => {
    const title = 'ジャパンダートダービー勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      japa_dir,
    ) => {
      await digital.say_and_wait(
        "이 레이스는 이전의 잔디 레이스와는 다르면서도 또 같아.",
        true,
      );
      await digital.say_and_wait("으오오오오오오오!!!!", true);
      await digital.say_and_wait(
        "흩날리는 모래 먼지…… 잘 보이지 않아…… 하지만 광채가…… 스며 나오고 있어……",
        true,
      );
      await digital.say_and_wait(
        [
          "전혀 다른 코스임에도…… ",
          digital.couple_title,
          "은 변함없는 광채를 내뿜고 있어……",
        ],
        true,
      );
      await digital.say_and_wait(
        [
          "여기서 ",
          digital.couple_title,
          "의 마음을 저버릴 순 없어!!!!",
        ],
        true,
      );
      await digital.say_and_wait("하아아아아아아아!", true);
      era.drawLine();
      await era.printAndWait([
        "레이스가 끝났다. ",
        digital.get_colored_name(),
        "은 정말 훌륭했다. 환경이 완전히 다른 코스에서도 이렇게 우수한 성적을 거두다니.",
      ]);
      await you.say_and_wait("기분이 어때?");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 이전과 전혀 다른, 진지한 표정을 짓고 있었다.",
      ]);
      await digital.say_and_wait([
        "디지땅은, 저 ",
        digital.get_colored_name(),
        "은 이제 알았어요.",
      ]);
      await you.say_and_wait("그래.");
      await digital.say_and_wait([
        "어릴 적부터 저를 사로잡았던 ",
        digital.uma_sex_title,
        "짱들의 존귀함……",
      ]);
      await digital.say_and_wait([
        "오늘 『",
        japa_dir,
        "』에서 달리고 나서 깨달았어요.",
      ]);
      await digital.say_and_wait([digital.uma_sex_title, "짱, 귀여워."]);
      await digital.say_and_wait([digital.uma_sex_title, "짱, 너무 존귀해."]);
      await digital.say_and_wait([
        'じゃあ、',
        digital.couple_title,
        'はなぜかわいい？ ',
        digital.couple_title,
        'のどこが偉大で、どうしようもなく私を惹きつける？',
      ]);
      await digital.say_and_wait([
        '今日やっとわかった。私が好きなのは、',
        digital.couple_title,
        'が『身を捨てて自分の夢にぶつかる』姿なんだ！',
      ]);
      await era.printAndWait([
        'どんどんどんと足を踏み鳴らして、',
        digital.get_colored_name(),
        ' は',
        digital.sex,
        'がやっとわかった喜びを表す。',
      ]);
      await digital.say_and_wait(
        'わかったら、タイムスリップして、『中央の芝G1だけが特別』だと思ってた過去の自分を殴りたくなった！',
      );
      await you.say_and_wait("하하, 그야말로 정석적인 감상이네.");
      await digital.say_and_wait([
        'おいおいおい、最初から知ってたんでしょ。',
        digital.uma_sex_title,
        'ちゃんたちは、ずっと同じなんだよ。',
      ]);
      await digital.say_and_wait([
        digital.couple_title,
        'には本当に欲しいもの、なりたい自分がいて、それを目指して必死に努力してる。',
      ]);
      await era.printAndWait(
        "그런 사람은 어디에 있든 눈부신 법이다. 하물며 함께 모여 경쟁한다면 오죽할까.",
      );
      await digital.say_and_wait([
        digital.couple_title,
        "은 전력으로 서로 유대하고, 서로 돕고…… 때로는 하나의 승리를 위해 다투기도 하지만 다툼을 두려워하지 않고 늘 앞을 바라보고 있어요.",
      ]);
      await digital.say_and_wait("모든 결판이 난 뒤에는 함께 꽁냥꽁냥대고!");
      await you.say_and_wait("뭐, 그것도 정석적인 전개지.");
      await digital.say_and_wait(
        "바로 그런 정석적인 전개이기에 제 영혼이 이토록 흔들리는 거라고요!",
      );
      await digital.say_and_wait(
        "데뷔하기 전까지는 혼자 잘난 줄 알았는데…… 결과적으로 오늘에서야……",
      );
      await digital.say_and_wait("아와와와, 정말이지……");
      await digital.say_and_wait([
        call_15,
        "와 ",
        call_58,
        "의 그 레이스도 이제야 비로소 이해가 가요.",
      ]);
      await era.printAndWait([
        opera.get_colored_name(),
        "와 ",
        doto.get_colored_name(),
        "의 타카라즈카 기념 대결의 광채는 ",
        digital.get_colored_name(),
        "을 더할 나위 없이 부럽게 만들었다.",
      ]);
      await era.printAndWait([
        'そして今、',
        digital.get_colored_name(),
        ' もその光に触れられた。',
      ]);
      await digital.say_and_wait(
        "이대로라면…… 안 돼! 디지땅! 움직여야 해!",
      );
      await digital.say_and_wait(
        "이런 저라도, 각오를 다지고 순수한 마음으로 게이트 앞에 설 수 있다면!",
      );
      await digital.say_and_wait([
        callname,
        "…… 저…… 이런 저라도…… 그런 존재가 될 수 있을까요?!",
      ]);
      era.printButton("「당연히 될 수 있지!」", 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' はついに、この瞬間、本当の選手になった。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] mile_cha_win_c
  mile_cha_win_c: (() => {
    const title = 'マイルCS勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      h_call_d,
      mile_cha,
    ) => {
      await digital.print_and_wait([
        "밑바닥에서부터 기어 올라온 ",
        halo.get_colored_name(),
        '。',
        digital.get_colored_name(),
        "은 ",
        digital.sex,
        "의 생존 전략을 처음부터 끝까지 지켜보았다.",
      ]);
      await halo.say_and_wait([
        "어때, ",
        h_call_d,
        "? 나와 함께 이 중요한 레이스를 뛰었으니 이해했겠지?",
      ]);
      await halo.say_and_wait([
        halo.get_colored_name(),
        "가 어떤 ",
        digital.uma_sex_title,
        "인지 말이야.",
      ]);
      await digital.say_and_wait("네…… 네……");
      await digital.print_and_wait([
        halo.get_colored_name(),
        "에게서 「",
        digital.uma_sex_title,
        "란 무엇인가」를 배운 ",
        digital.get_colored_name(),
        "은 ",
        mile_cha,
        "의 승리를 거머쥔 뒤 소리 내어 울었다.",
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        "의 존재는 그토록 ",
        digital.sex,
        "에게 깊은 감동을 주었다.",
      ]);
      await halo.say_and_wait(
        "왜 그래? 계속 울기만 하면 말을 할 수 없잖아.",
      );
      await digital.say_and_wait("온몸으로…… 광채를 머금은 것 같아요……");
      await digital.say_and_wait([
        "그리고 깨달았어요, ",
        digital.uma_sex_title,
        "로서 산다는 것이 무엇을 의미하는지.",
      ]);
      await digital.say_and_wait(
        "굴하지 않는 달리기 속에 영혼이 깃들어 있어요! 본능! 준비가 완벽하든 아니든, 시종일관 일류의 기개를 관철하는 것!",
      );
      await digital.say_and_wait(
        "전에는 도저히 이해할 수 없었지만 이제는 알겠어요. 그저 달리면 되는 거였어요! 약한 소리조차 달리면서 내뱉는 거예요!",
      );
      await digital.say_and_wait([
        "전 이제 ",
        digital.uma_sex_title,
        "가 훨씬 더 좋아졌어요!",
      ]);
      await halo.say_and_wait([
        "후훗, 너는 정말 ",
        digital.uma_sex_title,
        "를 좋아하는구나.",
      ]);
      await halo.say_and_wait([
        h_call_d,
        ", 더 많은 ",
        digital.uma_sex_title,
        "들과 경쟁하는 거야! 모든 것을 흡수하고, 그리고……",
      ]);
      await halo.say_and_wait([
        '本物の全能選手になりなさい！ だってあなたは、いちばん好きな',
        digital.uma_sex_title,
        'のひとりなのですから！',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' は最後に、',
        digital.get_colored_name(),
        ' へ祝福を贈った。これからもっと多くの',
        digital.uma_sex_title,
        'と対決して、本物の「全能ランナー」になるように。',
      ]);
      era.drawLine({ content: '地下通路' });
      await digital.say_and_wait([
        callname,
        ", 저의 동지여. 저는 ",
        call_61,
        "에게서 무엇과도 바꿀 수 없는 소중한 것을 얻었어요.",
      ]);
      await digital.say_and_wait([
        "더 많은 ",
        digital.uma_sex_title,
        "짱들과 레이스를 해야 해요. 제가 무엇을 하면 될까요……",
      ]);
      await era.printAndWait("그렇다면 차라리……");
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' は、これからもっと多くのG1に出ると決めた。',
      ]);
      await digital.say_and_wait([
        "맞아요, 맞아요. 그리고 나중에, ",
        call_15,
        "와 ",
        call_58,
        "에게 도전장을 내밀 거예요!",
      ]);
      await era.printAndWait([
        "줄곧 동경만 해오던 ",
        digital.get_colored_name(),
        "이 이제야 비로소 용기를 내어 예전의 아이돌들에게 도전하려 하고 있었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] nhk_cup_win
  nhk_cup_win: (() => {
    const title = 'NHKマイルカップ勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} callname_15 テイエムオペラオーのプレイヤーへの呼び方
     * @param {PrintedSpan} o_call_di テイエムオペラオーのアグネスデジタルへの呼び方
     * @param {PrintedSpan} o_call_do テイエムオペラオーのメイショウドトウへの呼び方
     * @param {PrintedSpan} do_call_di メイショウドトウのアグネスデジタルへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      call_15,
      call_58,
      callname_15,
      o_call_di,
      o_call_do,
      do_call_di,
      takz_kin,
      japa_dir,
    ) => {
      await you.say_as_passer_by_and_wait('実況', [
        digital.get_colored_name(),
        '！ ',
        digital.get_colored_name(),
        '！ 芝でもダートでも、',
        digital.sex,
        'の話の下にはないことを見せつけた！',
      ]);
      await era.printAndWait([
        "결승선을 통과한 ",
        digital.get_colored_name(),
        "의 발걸음은 비틀거리고 있었다.",
      ]);
      await digital.say_and_wait(
        'は……ふ……よし……残りエネルギーゼロ……推しの余裕もない……使った、全力……！',
      );
      await digital.say_and_wait("아아아, 햇살이…… 너무 눈부셔…… 하늘이…… 너무…… 멀어……");
      await digital.say_and_wait("아…… 이것이……");
      await era.printAndWait("（털썩!）");
      await era.printAndWait([digital.get_colored_name(), "은 쓰러졌다!"]);
      era.drawLine();
      await era.printAndWait([
        "다행히 달려온 의사의 진단에 따르면, ",
        digital.get_colored_name(),
        "은 그저 과로로 쓰러진 것 뿐이었다. 잠시 쉬면 괜찮아질 것이라고 했다.",
      ]);
      await era.printAndWait([
        '今回、',
        digital.get_colored_name(),
        ' は本当に全力を出した。これまでと違い、今回の ',
        digital.get_colored_name(),
        ' は、選手としての信念を背負っていた。',
      ]);
      await era.printAndWait([
        "그렇기에 모든 힘을 쏟아부은 뒤 ",
        digital.get_colored_name(),
        "은 벅찬 감정 속에 쓰러진 것이었다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "이(가) ",
        digital.get_colored_name(),
        "을 업고 대기실로 돌아왔을 때, 익숙한 두 명의 모습이 보였다. ",
        opera.get_colored_name(),
        "와 ",
        doto.get_colored_name(),
        '。',
      ]);
      await opera.say_and_wait([o_call_di, "? 정신 차리게!"]);
      await you.say_and_wait(['大丈夫、', digital.sex, 'は休めば治る。']);
      await era.printAndWait([
        "대화하는 사이, ",
        digital.get_colored_name(),
        "을 대기실 소파에 눕혔다.",
      ]);
      await era.printAndWait([
        "얼마 지나지 않아 ",
        digital.get_colored_name(),
        "이 두 눈을 떴다.",
      ]);
      await digital.say_and_wait("으음…… 응…… 에엣?!");
      await digital.say_and_wait([call_15, ", ", call_58, "?! 어떻게 여기에?!"]);
      await you.say_and_wait([
        digital.couple_title,
        "이 너를 무척 걱정해서 대기실까지 찾아왔어…… 라기보다 애초에 대기실 안에 있었지만 말이야.",
      ]);
      await digital.say_and_wait("어쩜 이렇게 갑자기?");
      await opera.say_and_wait([
        "갑자기가 아니네! ",
        o_call_do,
        "이 말하길, 온갖 무대를 종횡무진하는 무용수가 있다고 하더군. 새로운 배우의 탄생을 지켜보기 위해 내가 왔네.",
      ]);
      await doto.say_and_wait([
        "으으으, 저는 ",
        do_call_di,
        "가 해주신 조언에 정말 감사하고 있어요! 그래서 이번 레이스도 응원하러 왔답니다!",
      ]);
      await opera.say_and_wait(
        "우리는 레이스 전부터 패왕의 기운을 숨기고 일반인 관객인 척 자네를 연구하고 있었지!",
      );
      await doto.say_and_wait(
        "저 같은 사람이 예시장에서 말을 걸면 방해가 될까 봐…… 그래서……",
      );
      await digital.say_and_wait(
        "아니요, 아니요! 방해가 될 리가 없잖아요, 오히려 영광이죠…… 아까 느꼈던 위화감의 정체가 이거였군요.",
      );
      await digital.say_and_wait([
        "그리고 이제 조금씩 알 것 같아요. ",
        call_15,
        "와 ",
        call_58,
        "가 왜 그렇게 눈부시고 화려한지……",
      ]);
      await digital.say_and_wait("드디어…… 조금은…… 가까워진 것 같아요……");
      await opera.say_and_wait(
        "하하하! 그런가? 하지만 역시 나의 화려함은 타고난 것이니까 말이야!",
      );
      await era.printAndWait([
        opera.get_colored_name(),
        "는 ",
        digital.get_colored_name(),
        "을 꽤 마음에 들어 했고, ",
        doto.get_colored_name(),
        "는 ",
        digital.get_colored_name(),
        "이 해 준 격려에 감사하고 있었다.",
      ]);
      await you.say_and_wait(
        "두 사람, 여기 온 김에 하고 싶은 말이 더 있지 않아?",
      );
      await era.printAndWait([
        "이어지는 순간, ",
        digital.couple_title,
        "이 선언했다……",
      ]);
      await opera.say_and_wait([
        '私と ',
        o_call_do,
        ' は、次の ',
        takz_kin,
        ' で初の共演だ！',
      ]);
      await doto.say_and_wait(
        "저, 저도 드디어 G1에 출주하게 되었어요. 비록 아무도 신경 쓰지 않는 구석자리일지도 모르지만……",
      );
      await digital.say_and_wait(
        "! 첫 레뷰, 알겠습니다! 이건 무조건 보러 가야죠!",
      );
      await opera.say_and_wait(
        "하지만 자네에게도 그에 걸맞은 종목이 있겠지? 우리에게 자네의 전천후 재능을 보여주게나!",
      );
      await opera.say_and_wait(
        "자네는 아직 더트 G1 승리가 없지 않나. 그것까지 있어야 완벽하겠지, 안 그런가?",
      );
      await you.say_and_wait([
        "다음으로 적당한 더트 G1은 여름 합숙 기간에 열리는 ",
        japa_dir,
        "이야.",
      ]);
      await opera.say_and_wait([
        "과연 ",
        callname_15,
        "! 자, ",
        digital.get_colored_name(),
        ", 우리의 초대를 받아들이겠나?",
      ]);
      await digital.say_and_wait("받아들일게요!");
      await era.printAndWait([
        "그렇게 ",
        digital.couple_title,
        "은 약속했다. ",
        opera.get_colored_name(),
        "와 ",
        doto.get_colored_name(),
        "는 ",
        takz_kin,
        "에서 최고의 레이스를 보여주기로, 그리고 ",
        digital.get_colored_name(),
        "은 ",
        japa_dir,
        "에서 올라운더로서의 실력을 증명하기로.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] oc_95_1
  oc_95_1: (() => {
    const title = "새해 첫 참배";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param opera
     * @param tachyon
     * @param shakur
     * @param falcon
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_32 アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_d アグネスタキオンのアグネスデジタルへの呼び方
     * @param {PrintedSpan} s_call_d エアシャカールのアグネスデジタルへの呼び方
     * @param {PrintedSpan} f_call_d スマートファルコンのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      opera,
      tachyon,
      shakur,
      falcon,
      you,
      callname,
      call_15,
      call_61,
      callname_32,
      t_call_d,
      s_call_d,
      f_call_d,
    ) => {
      await digital.say_and_wait(
        "신령님! 올해는 굿즈 같은 건 됐으니까, 제발 라이벌을 내려주세요!",
      );
      await era.printAndWait([
        "세상에! ",
        digital.get_colored_name(),
        "이 이런 말을 하다니, ",
        digital.sex,
        'は何に刺激された?!',
      ]);
      await you.say_and_wait("디지털? 왜 갑자기 그런 말을 해?");
      await era.printAndWait([
        digital.get_colored_name(),
        "이 ",
        you.get_colored_name(),
        "에게 털어놓기를, 얼마 전 ",
        opera.get_colored_name(),
        "가 ",
        digital.get_colored_name(),
        "에게는 라이벌이 부족하다고 지적했다고 한다.",
      ]);
      await digital.say_and_wait([
        "음, 지난번 ",
        call_15,
        "가 말씀하신 대로 제가 지금보다 더 강해지지 못하는 이유는……",
      ]);
      await era.printAndWait("라이벌.");
      await era.printAndWait([
        digital.get_colored_name(),
        "에게는 라이벌이 부족했다. 트레이너로서 ",
        you.get_colored_name(),
        "은(는) 경쟁 상대가 ",
        digital.uma_sex_title,
        "에게 얼마나 큰 동기부여와 고무가 되는지 잘 알고 있었다.",
      ]);
      await era.printAndWait([
        "하지만 ",
        digital.get_colored_name(),
        "의 경우는 너무나 특수했다. ",
        digital.sex,
        "가 가진 그 특성, ",
        digital.uma_sex_title,
        "를 향한 순수한 애정 또한 ",
        digital.sex,
        "에게 경쟁 상대와 비슷한 효과를 가져다주었기 때문이다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "에게 정말 라이벌이 필요한 걸까?",
      ]);
      await digital.say_and_wait(
        "으으으, 전에는 너무 깊게 관여하고 싶지 않아서 라이벌은커녕 경기장에서 상대와 대화도 거의 안 했는데, 이제 와서 업보가 돌아온 걸까요……",
      );
      await era.printAndWait([
        "그래도 이번 기회에 ",
        digital.get_colored_name(),
        "이 다른 ",
        digital.uma_sex_title,
        'と交渉してみるのも悪くない。',
      ]);
      await you.say_and_wait("그럼 라이벌을 찾아보자!");
      await era.printAndWait("그리하여……");
      era.drawLine();
      await shakur.say_and_wait('は？ ライバル？ 早く寝ろ。');
      await digital.say_and_wait(
        "기다려봐요! 마침 동기인데 딱 좋잖아요.",
      );
      await shakur.say_and_wait([
        "있지, ",
        s_call_d,
        ", 다른 건 몰라도 적어도 나는 안 맞는 것 같아. 그럼 이만.",
      ]);
      era.drawLine();
      await falcon.say_and_wait(
        "에? 라이벌? 왠지 아이돌 이미지랑은 좀 안 맞는 것 같은데~",
      );
      await digital.say_and_wait(
        "아니 아니 아니, 아이돌 중에는 그런 라이벌이 있어서 서로 대결하면서도 서로 돕는 그런 느낌이 있잖아요!",
      );
      await falcon.say_and_wait([
        "아하하, 팔코는 그냥 평범한 ",
        digital.uma_sex_title,
        " 꼬마 아이돌이라 그런 건 좀…… 하지만 ",
        f_call_d,
        ", 라이벌 제안은 정말 고마워!",
      ]);
      era.drawLine();
      await tachyon.say_and_wait([
        "흠흠…… 라이벌이라…… 하지만 ",
        t_call_d,
        '、君は研究対象としては、違うな。私の理念に合わない！',
      ]);
      await digital.say_and_wait("……그렇군요.");
      await era.printAndWait([
        "여러 가지 이유로 몇 번이나 거절당한 ",
        digital.get_colored_name(),
        ' は、',
        digital.sex,
        'でも耳が少し垂れていた。',
      ]);
      await tachyon.say_and_wait([
        "그렇게 축 처져 있지 말게나, ",
        t_call_d,
        ". 그리고 자네도, ",
        callname_32,
        ". 자네는 알고 있겠지? ",
        t_call_d,
        "의 라이벌이 될 만한 후보를.",
      ]);
      await era.printAndWait([
        "특유의 눈빛으로 ",
        you.get_colored_name(),
        "을(를) 뚫어지게 쳐다보며, ",
        tachyon.get_colored_name(),
        ' は顎を少し上げて ',
        you.get_colored_name(),
        ' に合図した。',
      ]);
      await digital.say_and_wait([
        "에에에! ",
        callname,
        ", 알고 있나요? 제 라이벌이 될 만한 사람을?",
      ]);
      await you.say_and_wait("확실히 그렇긴 해.");
      await digital.say_and_wait("그럼 왜 처음부터 말 안 해줬어요?");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 애가 타서 금방이라도 ",
        you.get_colored_name(),
        ' を叩きそうになった。',
      ]);
      await tachyon.say_and_wait([
        "보아하니 저 사람도 나름대로 생각이 있는 모양이군. ",
        t_call_d,
        ", 이제부턴 지루한 해답 편이겠으니 난 이만 가보겠네.",
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        "은 분위기를 살피더니 눈치껏 자리를 비워주었다.",
      ]);
      await you.say_and_wait(
        "사실 네가 찾기 시작하고 나서야 알게 된 것도 있고, 나도 좀 더 확실히 알아보고 싶은 부분이 있어서 그랬어……",
      );
      await you.say_and_wait(
        "그래서 내가 내린 결론은 이거야. 네 라이벌은 바로 모두야!",
      );
      await digital.say_and_wait(
        "모두……! 그 말은 누구든지 밀어주는 것도 가능하다는 건가요?! 잠깐, 그럼 아까 그건……",
      );
      await era.printAndWait([
        "그렇다. 오늘 ",
        digital.get_colored_name(),
        "이 찾아다니던 사람들을 보며 생각난 것이었다. ",
        digital.get_colored_name(),
        "이 찾던 이들은 잔디에 능한 아이도, 더트에 능한 아이도 있었으니, 처음부터 그랬던 것처럼……",
      ]);
      await you.say_and_wait("딱 한 명만 고르는 건 불가능해.");
      await you.say_and_wait(
        '誰を選んでも、デジみたいに二つのコースを走れる選手はいない。でも、もし……',
      );
      await digital.say_and_wait("모두라면……");
      await you.say_and_wait("맞아.");
      await digital.say_and_wait("아하하하, 설마 또 「모두」가 결론일 줄이야.");
      await digital.say_and_wait([
        call_61,
        "의 말대로 『더 많은 ",
        digital.uma_sex_title,
        "와 함께 레이스하기』를 저는 분명히 해낼 거예요!",
      ]);
      await digital.say_and_wait(
        "모두가 라이벌이라니, 생각해보니 꽤 욕심쟁이 같네요…… 저는 모두에게서 무엇을 얻을 수 있을까요?",
      );
      era.print([you.get_colored_name(), "은(는) 결정했다:"]);
      era.printButton("양분 (스태미나 +20)", 1);
      era.printButton("우정의 힘 (모든 능력치 +5)", 2);
      era.printButton("다양성 (스킬 포인트 +30)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait("말하자면 그건 양분이겠지.");
          await digital.say_and_wait([
            "맞아요! ",
            digital.uma_sex_title,
            "짱들 각자의 맛있는 부분들이 매번 저에게 활력을 줘요!",
          ]);
          await digital.say_and_wait(
            "매일매일 신선한 먹거리가 넘쳐나죠! 이보다 더 좋은 연료는 없어요!",
          );
          await era.printAndWait([
            "앞으로도 ",
            digital.uma_sex_title,
            "들이 ",
            digital.get_colored_name(),
            "에게 더 많은 활력을 불어넣어 줄 것이다.",
          ]);
          break;
        case 2:
          await you.say_and_wait("그래, 바로 우정이지! POWER!");
          await digital.say_and_wait([
            "오오옷, 모든 ",
            digital.uma_sex_title,
            "짱들이 저에게 조금씩 힘을 보태준다면 저는 무적이에요!",
          ]);
          await digital.say_and_wait(
            "흥흥, 우하하하, 생각만 해도 온몸에 힘이 솟구치는 기분이에요!",
          );
          await era.printAndWait([
            "1인당 1우마코인씩 기부받는 것과는 좀 다르지만, ",
            digital.get_colored_name(),
            "은 분명 ",
            digital.uma_sex_title,
            "들에게서 힘을 얻어 더욱 강해질 것이다.",
          ]);
          break;
        case 3:
          await you.say_and_wait("다양성, 그거지!");
          await digital.say_and_wait([
            "당연하죠! ",
            digital.uma_sex_title,
            "짱들의 질주는 그 다양성만으로도 평범한 주법의 틀에 가둘 수 없는 법!",
          ]);
          await digital.say_and_wait(
            'UMAMO図鑑を集めるみたいに、全部記録する！',
          );
          await era.printAndWait([
            "올 콜렉팅 유저인 걸까. ",
            digital.get_colored_name(),
            "은 이 게임을 통해 분명 새로운 기술을 습득할 수 있을 것이다.",
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_5
  race_end_5: (() => {
    const title = "레이스 입상";
    /** @param {CharaTalk} digital アグネスデジタル */
    const f = async (digital) => {
      await digital.say_and_wait(
        'うむうむ、なるほど、君たちの輝きは、まだ少し遠い……',
      );
      await era.printAndWait([
        "우승하지 못한 ",
        digital.get_colored_name(),
        "이였지만, 레이스 후에도 큰 실망감은 보이지 않았다.",
      ]);
      await digital.say_and_wait(
        "우으…… 역시 저는 팬으로서 여기 있으면 안 되는 걸까요……",
      );
      await era.printAndWait("이런 이런.");
      era.printButton(`「이번에 ${digital.uma_sex_title}짱들을 마음껏 감상했니?」`, 1);
      era.printButton(
        `「다음에는 가장 앞에서 ${digital.couple_title}을 감상하자!」`,
        2,
      );
      if ((await era.input()) === 1) {
        await digital.say_and_wait("에! 맞아요! 디지땅, 가능해요!");
        await era.printAndWait("이게 대체 무슨 뜻일까.");
      } else {
        await digital.say_and_wait([
          "더 앞에 있다면 분명……! 더욱 아름다운 ",
          digital.uma_sex_title,
          "짱들을 감상할 수 있겠죠!",
        ]);
        await era.printAndWait([
          "어쨌든 ",
          digital.get_colored_name(),
          "은 기운을 차렸다!",
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_win
  race_end_win: (() => {
    const title = "레이스 승리";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.say_and_wait(
        "하와와와와와! 모든 아이가 가장 존귀한 빛을 내뿜고 있어!",
      );
      await era.printAndWait([
        "레이스 후의 ",
        digital.get_colored_name(),
        "은 큰 레이스를 치렀다고는 믿기지 않을 정도로 활기찼고, 여느 때처럼 열정을 뽐냈다.",
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        "와 함께 달릴 수 있어서…… 정말 행복했어요……!",
      ]);
      await digital.say_and_wait("게다가 1위까지 차지하다니! 정말 감사히 받겠습니다!");
      era.printButton("「네가 가장 빛나고 있었어!」", 1);
      era.printButton("「다음 레이스에서도 힘내자!」", 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait([
          "에? 그그그, 그럴 리가요?! 이렇게 많은 ",
          digital.uma_sex_title,
          "짱들 사이에서 저는 그저 공기 같은 존재인데…… 설마 저를 보고 계셨던 건가요?",
        ]);
        await era.printAndWait("이 수줍어하는 모습도 이제는 익숙해졌다.");
        await you.say_and_wait('当然だ。君は俺の愛馬だ！');
        await digital.say_and_wait("으으으……");
        await digital.say_and_wait("칭찬을 들으니 정말 마음이 진정되질 않네요……");
        await era.printAndWait("물론 매번 봐도 질리지 않는 모습이었다.");
      } else {
        await digital.say_and_wait(
          "좋아! 다음 레이스에서도 이 기세를 이어갈 수 있도록 더 강해질 거예요! Power!",
        );
        await digital.say_and_wait([
          "더 강해져서 더 치열한 레이스 속에서 더 눈부시게 빛나는 ",
          digital.uma_sex_title,
          "짱들을 보겠어요!",
        ]);
        await era.printAndWait("바로 그 기세다! 계속 힘내보자!");
        await digital.say_and_wait('え！ え！ む！');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_start
  async race_start(digital, japa_dir_rank) {
    const buffer = [
      () =>
        digital.say_and_wait([
          "승리를 확신하는 ",
          digital.uma_sex_title,
          "짱, 긴장한 ",
          digital.uma_sex_title,
          "짱, 겉으로는 아무렇지 않아 보이지만 속으론 진심인 ",
          digital.uma_sex_title,
          "짱…… 후…… 헤헤……",
        ]),
      () =>
        digital.say_and_wait([
          "아니 아니, 아무리 생각해도 저 같은 ",
          digital.uma_sex_title,
          "가 경기장에 서는 건 역시 좀 이상하죠?",
        ]),
    ];
    if (era.get('mark:19:淫纹') > 0) {
      buffer.push(() =>
        digital.say_and_wait(
          "디지땅의 승부복은 배가 드러나는 타입이었죠?! 큰일이야 큰일, 가려야 하나? 어떻게? 가려지긴 하나?",
        ),
      );
    }
    if (japa_dir_rank <= 3) {
      buffer.push(() =>
        digital.say_and_wait('私は選手として、相手に恥じないレースを走る。'),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 대상] tenn_sho_win_s
  tenn_sho_win_s: (() => {
    const title = '天皇賞（秋）勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (digital, you, callname, tenn_sho) => {
      await era.printAndWait("두구두구두구——");
      await era.printAndWait([
        "낮게 깔리는 발소리 속에 ",
        digital.uma_sex_title,
        "들이 점차 관중석으로 다가왔다. 이때, 의외로 바깥쪽 코스를 달리고 있는 것은——",
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        digital.get_colored_name(),
        '！ ',
        digital.get_colored_name(),
        ' だ！ 雨の中、荒れ果てた芝を、馬群から抜け出して最良の進路を選んだ！ そして——！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        'ゴール！ 不思議な走りで ',
        tenn_sho,
        ' を征服したのは——',
        digital.get_colored_name(),
        '！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "이 지금까지 쌓아온 지식과 기술, 그리고 감정이 ",
        digital.get_colored_name(),
        "에게 최고의 조건을 만들어주었다.",
      ]);
      await era.printAndWait([
        digital.sex,
        "는 진흙탕이 된 잔디 위에서 마치 고향에 돌아온 듯 보였다. 코스 선택부터 마지막 스퍼트까지, 트레이너인 ",
        you.get_colored_name(),
        "조차 그 어떤 부족함도 찾아낼 수 없었다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 흔들림 없이 승리를 쟁취했다.",
      ]);
      era.println();
      await digital.say_and_wait("헤헤…… 쿨럭쿨럭…… 아하하하……");
      await digital.say_and_wait("저의 승리, 맞죠?");
      await you.say_and_wait("그래, 네 승리야, 디지털.");
      await era.printAndWait([
        digital.get_colored_name(),
        "이 몸을 돌려 관중석을 향했다.",
      ]);
      await digital.say_and_wait("으오오오오오오오오오오오오오!");
      await you.say_as_passer_by_and_wait(
        '観客席',
        'うおおおおおおおおおおおおお！',
      );
      await digital.say_and_wait("헤이야아아아아아아아아아아아!");
      await you.say_as_passer_by_and_wait(
        '観客席',
        'へわああああああああああ！',
      );
      await digital.say_and_wait("이! 히! 오! 오오오오오오!");
      await you.say_as_passer_by_and_wait(
        '観客席',
        'い！ へ！ お！ おおおおおお！',
      );
      await era.printAndWait("하하하, 목이 쉴 정도로 외쳐댔다.");
      await era.printAndWait([
        "일반적으로 이름을 부르는 것과는 다른, 참으로 ",
        digital.get_colored_name(),
        "다운 특색 있는 응원이었다.",
      ]);
      await era.printAndWait([
        "손을 크게 벌리고 ",
        you.get_colored_name(),
        " 앞으로 달려와, 울타리 너머로 ",
        you.get_colored_name(),
        ' を抱き上げた。',
      ]);
      await digital.say_and_wait([callname, "! 미지의, 미지의 풍경이에요!"]);
      await digital.say_and_wait(
        "무대 위에서 느끼는 콜의 힘! 이 기분은 정말 그 무엇과도 비교할 수 없네요!",
      );
      await you.say_and_wait(
        "그래! 이건 오직 너만을 위한 콜이야, 단 하나뿐인 콜이라고!",
      );
      await digital.say_and_wait(
        "쿠로후네…… 승리를, 그 두 사람에게서 뺏어왔어……",
      );
      await era.printAndWait([
        digital.sex,
        "가 후회든 슬픔이든 어떤 마음을 품고 있었든지간에, 이 레이스를 본다면 ",
        digital.sex,
        " 또한 해방감을 느끼리라 생각했다.",
      ]);
      await digital.say_and_wait(
        "나 혼자서는 할 수 없어—— 줄곧 그렇게 생각했어요. 그래서 최애에게 염원을 맡겼던 건데……",
      );
      await digital.say_and_wait("하지만……");
      era.printButton("「나의 첫 번째 최애는 바로 너야!」", 1);
      await era.input();
      await digital.say_and_wait([
        "아하하하, 에헤헤헤…… ",
        callname,
        ", 갑자기 그런 말씀을 하시다니 정말…… 저는, 저는……",
      ]);
      await digital.say_and_wait([
        "드, 드, 드릴게요! 서비스! 그래요, 바로 팬 서비스요! ",
        callname,
        ", 제 꼬리털이라도 드릴까요!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 너무 기쁜 나머지 의미불명한 말을 내뱉기 시작한 모양이었다.",
      ]);
      era.printButton("「시상대로 가자, 다들 기다리고 있어.」", 1);
      await era.input();
      await digital.say_and_wait("오오오, 이런 무례한 짓을, 깜빡 잊고 있었네요!");
      await era.printAndWait([
        digital.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を柵のこちらへ運び、二人で表彰台へ来た。',
      ]);
      era.println();
      await digital.say_and_wait([
        "고고고, 고맙습니다! 저는 ",
        digital.get_colored_name(),
        "입니다! 따지고 보면 저는 그저 ",
        digital.uma_sex_title,
        "짱을 좋아하는……",
      ]);
      await digital.say_and_wait([
        "저는 그저 ",
        digital.uma_sex_title,
        "짱의 엉덩이…… 아니 꼬리를 쫓아서 여기까지 온 것뿐인데……",
      ]);
      await digital.say_and_wait([
        "이 감동, 이해하시나요?! 저는 처음에 평범한 ",
        digital.uma_sex_title,
        "짱이라고도 할 수 없던, 그저 팬이었을 뿐이라고요!",
      ]);
      await digital.say_and_wait(
        'でも、この輝きに混ざれて、この尊景のいちばん前でゴールできたこと、本当に……感謝してもしきれない……',
      );
      await digital.say_and_wait(
        "승리할 수 있었던 건 분명 저 혼자만의 성과가 아니에요. 지금까지 만난 모든 분과의 결실이죠.",
      );
      await digital.say_and_wait([
        "지금까지 함께한 ",
        digital.uma_sex_title,
        "짱들, 처음엔 없을 거라 생각했던 저의 팬들, 그리고 ",
        callname,
        '！',
      ]);
      await digital.say_and_wait("오늘, 여러분 덕분에 우승할 수 있었습니다.");
      await digital.say_and_wait("정말로…… 진심으로 감사드립니다……");
      await digital.say_and_wait([
        digital.uma_sex_title,
        'ちゃんたちは、ファンだったころに思ってた',
        digital.uma_sex_title,
        'ちゃんより……百倍、千倍まぶしい……',
      ]);
      await era.printAndWait([
        '話しているうちに、',
        digital.get_colored_name(),
        ' はもうレースの選手の紹介を始めていた。',
      ]);
      await digital.say_and_wait(
        "보셨나요! 용맹하고 늠름한 숏컷, 맹렬하게 대시할 때의 그 흔들림……",
      );
      await digital.say_and_wait("발걸음에 맞춰 흔들리던 그 가방……");
      await digital.say_and_wait(
        'それと、今日は場にいられないクロフネ。いつか必ず、一緒にダートを走りたい……',
      );
      era.println();
      await era.printAndWait([
        "한창 수다를 떨고 있는 ",
        digital.get_colored_name(),
        "이었지만……",
      ]);
      await you.say_as_passer_by_and_wait('スタッフ', [
        digital.get_colored_name(),
        ' のトレーナーさん、盛り上がっているところ申し訳ありません……ウイニングライブが……',
      ]);
      await era.printAndWait([
        "아이고, 고개를 숙이며 ",
        digital.get_colored_name(),
        "에게 몇 마디 건넸으나 ",
        digital.sex,
        "는 전혀 알아차리지 못한 듯했다.",
      ]);
      await era.printAndWait("아무래도 강제로 끌고 나가는 수밖에 없겠다.");
      await digital.say_and_wait(["어라어라, ", callname, '？']);
      await digital.say_and_wait("잠깐만요, 적어도 한 마디만 더, 한 마디만 더 하게 해주세요——");
      await digital.say_and_wait([
        digital.uma_sex_title,
        "는 정말—— 최고—— 예요——!!!!",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_42
  we_42: (() => {
    const title = "마일 챔피언십 관람";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      doto,
      halo,
      you,
      callname,
      call_58,
      call_61,
      mile_cha,
    ) => {
      await era.printAndWait([
        digital.get_colored_name(),
        "은 아직 데뷔 첫해라 레이스에 나가고 싶어도 선택지가 많지 않았지만, 다른 ",
        digital.uma_sex_title,
        "들에게 요즘은 가장 바쁜 시기였다.",
      ]);
      await era.printAndWait([
        "이번에 ",
        you.get_colored_name(),
        "과(와) ",
        digital.get_colored_name(),
        "이 보러 온 레이스는 ",
        mile_cha,
        '。',
      ]);
      await era.printAndWait([
        "이 레이스에는 ",
        digital.get_colored_name(),
        "이 열렬히 응원하는 ",
        digital.uma_sex_title,
        "중 한 명인——",
        halo.get_colored_name(),
        "도 출주한다.",
      ]);
      await digital.say_and_wait([callname, "! 여기에요, 여기!"]);
      await era.printAndWait([
        "좋은 자리를 선점한 ",
        digital.get_colored_name(),
        "이 ",
        you.get_colored_name(),
        "을(를) 향해 손을 흔들었고, ",
        you.get_colored_name(),
        "은(는) 간신히 인파를 비집고 들어갔다.",
      ]);
      await digital.say_and_wait(["곧 시작해요! ", call_61, "가 나온다구요!"]);
      await era.printAndWait("그리고……");
      await you.say_as_passer_by_and_wait('実況', [
        '続いて ',
        halo.get_colored_name(),
        '！ 外から追い上げ、',
        halo.get_colored_name(),
        ' は2着！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        '続いて ',
        halo.get_colored_name(),
        '！ 外から追い上げ、',
        halo.get_colored_name(),
        ' は2着！',
      ]);
      await era.printAndWait([
        "2착이라니, ",
        halo.get_colored_name(),
        "의 최근 전적을 생각하면 아주 훌륭한 결과였다.",
      ]);
      await halo.say_and_wait(
        "전국의 나의 팬들이여, 비록 우승하지 못한 것은 유감이다만……",
      );
      await halo.say_and_wait(
        "나는 반드시 굴레를 벗어던질 거야. 앞으로도 단거리와 마일 노선을 계속해서 걸어가겠어. 이것이 이 킹의 새로운 길이야! 오-홋홋홋!",
      );
      await digital.say_and_wait(
        "우오오오옷…… 정말이지, 너무나도 감동적이에요! 새로운 길을 선택하다니, 얼마나 큰 용기와 각오가 필요했을지!",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 감동의 눈물을 흘리며 ",
        you.get_colored_name(),
        "에게 ",
        halo.get_colored_name(),
        "의 이력에 대해 떠들기 시작했다.",
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        "는 본래 자신의 재능을 증명하기 위해 클래식 전선에 집중해 온 ",
        digital.uma_sex_title,
        'だった。だが今年',
        digital.sex,
        'は路線を変え、目標を立て直した。',
      ]);
      await digital.say_and_wait(
        "어느 쪽 노선이든 자신의 강함을 증명할 수 있는 법이라구요!",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' のデビュー後、',
        digital.get_colored_name(),
        ' の見方も前とは大きく違って、選手の立場からレース場の内と外を味わえるようになった。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        "의 노력이 보상받기를 진심으로 바랐기에 ",
        digital.get_colored_name(),
        "은 직접 레이스를 보러 온 것이었고, ",
        halo.get_colored_name(),
        "가 마침내 고진감래의 결실을 맺자 ",
        digital.sex,
        "는 경기장의 누구보다도 크게 울었다.",
      ]);
      era.drawLine({ content: '帰り道' });
      await era.printAndWait([
        "학원 옆 개울가에서 진흙탕을 가르며 고개를 숙인 채 달리고 있는 한 ",
        digital.uma_sex_title,
        "를 발견했다.",
      ]);
      await digital.say_and_wait(["오오옷! ", call_58, "네요……"]);
      await era.printAndWait([
        doto.get_colored_name(),
        "는 조금 낙담한 기색이었지만, 여전히 이곳에서 훈련에 매진하고 있었다.",
      ]);
      await era.printAndWait([
        "음…… ",
        doto.get_colored_name(),
        ", 전부터 계속 저런 상태 아니었나?",
      ]);
      await era.printAndWait([
        doto.get_colored_name(),
        "가 최근 성적이 좋지 않은 것을 트레이너인 ",
        you.get_colored_name(),
        "은(는) 잘 알고 있었다. ",
        doto.sex,
        "는 아직 본격화 시기가 오지 않았을 뿐이었지만, ",
        doto.sex,
        "는 정작 그 사실을 깨닫지 못한 듯했다.",
      ]);
      await digital.say_and_wait(
        "본격화…… 스스로 알지 못한다면 역시 무척 괴롭겠죠……",
      );
      await digital.say_and_wait([
        "예전의 저라면 아마 ",
        call_58,
        "의 노력만을 봤겠지만, 지금의 저는……",
      ]);
      await digital.say_and_wait("적어도, 그 사실을 안다는 것만으로도 마음이 놓이네요……");
      await you.say_and_wait(["왜 그래, 가서 말해주지 않는 거야?"]);
      await digital.say_and_wait(
        "에엣? 아뇨아뇨…… 전 어디까지나 일개 팬이라구요? 팬이 감히 아이돌에게 조언을 할 수는 없죠! 매니저한테 끌려나갈 거라구요!",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 도와주고 싶어 하면서도, 자신이 너무 선을 넘는 것은 아닌가 고민하고 있었다.",
      ]);
      await digital.say_and_wait(
        '現実的に言うと、経営がうまくいってないラーメン屋を見て、店主に「まだ時期じゃないですよ」って慰めるようなもんでしょ?!',
      );
      await you.say_and_wait(
        "아니 아니, 이건 확실히 근거가 있는 얘기라구…… 그나저나 디지털, 너 아직도 자신을 팬이라고만 생각하는 거야?",
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' に言い聞かせる。もうファンだけじゃない。選手としてレース場に立っている。',
      ]);
      await digital.say_and_wait([
        "아, 음, 그렇긴…… 비록 제가 데뷔는 했지만, ",
        call_58,
        "와 저 사이에는 넘을 수 없는 벽이 있다구요……",
      ]);
      await you.say_and_wait([
        '君と',
        digital.sex,
        '、',
        digital.couple_title,
        'との差は、思っているより小さいぞ！',
      ]);
      await you.say_and_wait(
        '毎日観察してるからこそ、ドトウが抱えてる問題が見える。でもそのせいで、自分を部外者にして、仲間じゃないと思ってるんだ。',
      );
      await era.printAndWait([digital.get_colored_name(), "은 고개를 떨구었다."]);
      await digital.say_and_wait(
        "으으…… 그렇긴 하지만, 지금 당장 아이돌에게 가서 말을 걸라니 저는 좀……",
      );
      await digital.say_and_wait(
        'なんだか、とんでもないことを考えてる気がする……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 마침내 마음을 굳히고, ",
        doto.get_colored_name(),
        "를 돕기로 결심했다.",
      ]);
      await era.printAndWait([
        digital.sex,
        "는 강둑의 울타리를 뛰어넘어 단숨에 미끄러져 내려가 도토의 앞에 나타났다. 실로 굉장한 등장 방식이었다.",
      ]);
      await digital.say_and_wait([
        "저, 저저저기! ",
        call_58,
        "! 잠시 실례해도 될까요?!",
      ]);
      await doto.say_and_wait("에에엣, 무, 무무무슨 일이시죠?");
      await digital.say_and_wait("본격화, 라는 거 알고 계시나요?!");
      await doto.say_and_wait("에헤? 그게 뭔가요?");
      await digital.say_and_wait("본격화라는 건 말이죠, 그러니까……");
      await era.printAndWait('岸から見ていれば、大丈夫だろう。');
      await digital.say_and_wait("그리고 본격화가 오는 시기는 대체로……");
      await era.printAndWait("음, 제법 상세하게 설명하고 있군.");
      await digital.say_and_wait(
        "아 참, 본격화 시기에 맞춰 단련하고 싶다면 발목 부분을 주의해야……",
      );
      await era.printAndWait(
        "오호, 트레이너 자격시험에서도 깊게 다루지 않는 내용까지 나오는군.",
      );
      await digital.say_and_wait(
        "……본격화가 오기 전의 훈련이 결코 헛수고라는 건 아니에요.",
      );
      await digital.say_and_wait(
        "지금 허벅지 근육을 미리 단련해두면, 본격화 시기에 폭발적으로 성장할 수 있다구요!",
      );
      await era.printAndWait([
        "아니, 저건 거의 최신 연구 결과인데. ",
        you.get_colored_name(),
        "은(는) 저 내용이 얼마 전 《트레이너 월간지》에 실렸던 논문 내용임을 기억해 냈다.",
      ]);
      era.drawLine({ content: 'トレーニング室に戻ると' });
      await digital.say_and_wait([
        "와와와와! 저질러버렸어요! 현실의 존재로서 제 눈에 상을 맺고 있는 ",
        call_58,
        "에게…… 그만 정신없이……",
      ]);
      await era.printAndWait([
        '実際、',
        doto.get_colored_name(),
        ' は後半よくわかっていなかったようだが、岸からでもわかる。',
        digital.sex,
        'は元気を取り戻していた。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "도 분명 알고 있을 것이다.",
      ]);
      await you.say_and_wait([
        'でも、ドトウ',
        digital.sex,
        'は収穫が大きかったんじゃないか？',
      ]);
      await era.printAndWait([
        '……',
        digital.get_colored_name(),
        "은 그저 가슴을 부여잡고 있었다.",
      ]);
      await era.printAndWait([
        "가장 좋아하는 아이돌과 처음으로 대화를 나눴으니, ",
        digital.get_colored_name(),
        "의 부담도 상당했을 터였다.",
      ]);
      await era.printAndWait([
        '……それにしても ',
        digital.get_colored_name(),
        ' の機関銃みたいな早口、',
        digital.sex,
        '実はかなりヤバい子なんじゃないか？',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_24
  we_47_24: (() => {
    const title = '宝塚記念';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, japa_dir) => {
      await era.printAndWait([
        "이날은 바로 ",
        opera.get_colored_name(),
        "와 ",
        doto.get_colored_name(),
        "의 첫 대결 날이었다.",
      ]);
      await digital.say_and_wait(
        "아아, 피할 수 없는 그날이 결국 오고 말았군요! 뇌가 멈추질 않아요!",
      );
      await digital.say_and_wait(
        "꿈속에서나 그리던 레이스! 아니, 꿈은 결코 현실의 레이스를 따라올 수 없죠!",
      );
      await digital.say_and_wait("어쩌죠, 전신에 야광봉을 도배하고 응원하러 갈까요?!");
      era.printButton("「아니, 그러다간 보안 요원에게 끌려나갈걸.」", 1);
      await era.input();
      await era.printAndWait([
        "그렇게 도착한 한신 경기장, ",
        opera.get_colored_name(),
        "와 ",
        doto.get_colored_name(),
        "의 격전이라니……",
      ]);
      await era.printAndWait(
        'こうして阪神競馬場へ来た。テイエムオペラオーとメイショウドトウの激闘だ…',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        "의 실력은 ",
        you.get_colored_name(),
        "도 잘 알고 있었지만, ",
        doto.get_colored_name(),
        "가 이 정도까지 올라올 줄은……",
      ]);
      await era.printAndWait([
        "마지막에는 거의 동시에 들어왔고, ",
        opera.get_colored_name(),
        "가 ",
        doto.get_colored_name(),
        "를 간발의 차로 앞섰다.",
      ]);
      await era.printAndWait(
        '何が理由だ。本格化だけでは、この心境の変化はまだ説明できない……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "이 ",
        digital.sex,
        "를 이렇게 만든 것일까?",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 정말 대단하다고 해야 할까…… ",
        digital.get_colored_name(),
        "을 슬쩍 쳐다보니, 역시나 ",
        digital.sex,
        "는 넋을 잃은 채 머리를 흔들고 있었다.",
      ]);
      await digital.say_and_wait("에헤와와와와……", true);
      await digital.say_and_wait("으으음……", true);
      await digital.say_and_wait("방금 그건 대체…… 그 광채는 뭐죠?", true);
      await digital.say_and_wait(
        "전 방금 전까지만 해도…… 「존귀함」이라는 생각조차 잊어버릴 정도로……",
        true,
      );
      await digital.say_and_wait(
        [
          call_15,
          "과 ",
          call_58,
          "이었기 때문일까요…… ",
          digital.couple_title,
          "이 특별하기 때문인 걸까요?",
        ],
        true,
      );
      await era.printAndWait([
        "그렇게 ",
        digital.get_colored_name(),
        "은 아직 그 본질을 완전히 깨닫지 못했음에도, 바통은 ",
        digital.get_colored_name(),
        "에게 넘어왔다. 다음은 ",
        digital.get_colored_name(),
        "이 활약할 ",
        japa_dir,
        "의 무대였다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_29
  we_47_29: (() => {
    const title = "여름 합숙 도중";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_61 キングヘイローのプレイヤーへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      mile_cha,
    ) => {
      await era.printAndWait([
        "여름 합숙이 시작된 첫 주, ",
        digital.get_colored_name(),
        "은 훈련을 게을리하지는 않았지만…… 어쩐지 ",
        digital.get_colored_name(),
        "은 조금 정신이 딴 데 팔려 있는 것 같았다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "도 짐작 가는 바가 있었다. ",
        digital.get_colored_name(),
        "이 뭔가 다른 것을 준비하고 있는 듯했지만, 그것도 ",
        digital.get_colored_name(),
        "의 소중한 취미였기에 딱히 무어라 말하기가 어려웠다.",
      ]);
      era.printButton("「어떻게 하면 좋을까……」", 1);
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' がパワートレーニングをしているのを見ながら、',
        you.get_colored_name(),
        ' はふと、砂浜のほうで海を見ている ',
        halo.get_colored_name(),
        ' に気づいた。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        "는 ",
        digital.get_colored_name(),
        "이 예전부터 열렬히 응원하던 ",
        digital.uma_sex_title,
        "로, 당시의 ",
        mile_cha,
        "을 ",
        digital.get_colored_name(),
        "과 ",
        you.get_colored_name(),
        "이(가) 함께 보러 가기도 했었다.",
      ]);
      await era.printAndWait([
        "최근 ",
        digital.sex,
        "의 전적은 점차…… 미묘해지고 있었다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "도 ",
        halo.get_colored_name(),
        "를 발견했는지, 팬으로서 ",
        digital.sex,
        "의 기분도 조금 가라앉은 듯 보였다.",
      ]);
      await you.say_and_wait(["저기, ", call_61, "에게 가서 응원이라도 해드리는 게 어때?"]);
      await digital.say_and_wait(
        "음…… 팬으로서 아이돌을 응원하는 건 당연한 도리죠…… 좋아! 결정했어요, 일단 손에 든 원고는 내려놓겠어요!",
      );
      await you.say_and_wait("원고? 무슨 원고?");
      await digital.say_and_wait("회지 원고 말이에요.");
      await you.say_and_wait("무슨 회지인데?");
      await digital.say_and_wait("그냥 평범한 동인지 원고라구요.");
      await era.printAndWait("무슨 소린지 도통 모르겠다……");
      await digital.say_and_wait([
        "원래는 곧 열릴 행사에서 ",
        call_61,
        "의 동인지를 팔아서, 모두에게 ",
        call_61,
        "의 매력을 알리려고 했는데……",
      ]);
      await halo.say_as_unknown_and_wait(
        "킹의 동인지라니, 그런 건 본인도 들어본 적이 없는데 말이야.",
      );
      await digital.say_and_wait([
        "아앗, 그런 걸 본인이 알게 되는 건 금기라구요! 당연히 ",
        call_61,
        "에게는…… 히익! ",
        call_61,
        '?!',
      ]);
      await era.printAndWait("주인공이 동인지 속에서 튀어나온 꼴이었다.");
      await digital.say_and_wait("방금 그건 다 농담이었어요! 그냥 제 쓸데없는 망상일 뿐이라구요!");
      await halo.say_and_wait(
        "후훗, 뭐 고맙군. 덕분에 기운이 좀 나네, 오호호호! 킹의 매력은 역시 일류라니까!",
      );
      await halo.say_and_wait([
        "그나저나 묻고 싶은 게 있는데, ",
        h_call_d,
        ", 너 올해 『",
        mile_cha,
        "』에 출주할 생각이지?",
      ]);
      await digital.say_and_wait([
        "에엣? 네! 작년 레이스에서 킹 씨에게 큰 감동을 받았기 때문에, 저도 조금이라도 가까워지고 싶어서…… 그런데…… 어째서 ",
        call_61,
        "가……",
      ]);
      await halo.say_and_wait("나도 출주할 예정이거든.");
      await era.printAndWait([
        halo.get_colored_name(),
        "도 ",
        mile_cha,
        "에 출주하게 되어, ",
        digital.get_colored_name(),
        "과 같은 무대에서 경쟁하게 되었다.",
      ]);
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        "의 얼굴에 갑자기 그늘이 드리워졌다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 긴 커리어 속에서 ",
        halo.get_colored_name(),
        "가 전성기를 지나 서서히 슬럼프에 빠지고 있다는 사실을 잘 알고 있었다.",
      ]);
      await digital.say_and_wait([
        "저기, ",
        call_61,
        "……주제넘은 소리인 줄은 알지만…… 저, 당신을 응원할게요.",
      ]);
      await digital.say_and_wait(
        "그게…… 설령 라이벌이라 해도, 응원하고 싶은 팬의 마음은 변함없으니까요……",
      );
      await era.printAndWait([
        "이런 상황에서 ",
        digital.get_colored_name(),
        "의 마음은 복잡했다. 동경하는 아이돌과 같은 무대에서 뛴다는 것은 꿈만 같은 일이었지만, 만약 상대하는 아이돌이 이미 쇠퇴하기 시작한 상태라면?",
      ]);
      await you.say_and_wait("디지털!");
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は少しとぼけた顔で ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await you.say_and_wait([
        "디지털, 너도 잘 알 텐데. 경기장 위에 선 ",
        digital.uma_sex_title,
        "는——",
      ]);
      await halo.say_and_wait([
        callname_61,
        ", 미안하지만 말 좀 끊을게. ",
        h_call_d,
        ", 제안할 게 하나 있어.",
      ]);
      await halo.say_and_wait([
        h_call_d,
        ", 이 합숙이 끝날 때쯤에 우리 같이 레이스 한 판 하자고.",
      ]);
      await digital.say_and_wait(
        "하앗?! 우오옷? 아이돌과 레이스라니, 그런 건 무리예요……",
      );
      await you.say_and_wait(["킹…… 정말 고마워."]);
      await halo.say_and_wait([
        "상관없어. 일류 ",
        digital.uma_sex_title,
        "라면 당연히 일류 팬에게 보답해야 하는 법이지——오호호호!",
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' の戸惑いを見抜いて、',
        digital.sex,
        'は ',
        digital.get_colored_name(),
        ' を一緒に走ろうと誘った。',
      ]);
      await era.printAndWait([
        "그리하여 남은 여름 합숙 기간 동안, ",
        digital.get_colored_name(),
        "은 마지막 날에 ",
        halo.get_colored_name(),
        "와 함께 모의 레이스를 펼치게 되었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_32
  we_47_32: (() => {
    const title = "여름 합숙 종료";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_61 キングヘイローのプレイヤーへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} takm_kin 高松宮記念（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_61,
      callname_61,
      h_call_d,
      takm_kin,
    ) => {
      await digital.say_and_wait("헤헤…… 후우…… 대결해 주셔서 정말 감사합니다……");
      await era.printAndWait([
        "여름 합숙의 마지막 날, 예정되었던 ",
        digital.get_colored_name(),
        "과 ",
        halo.get_colored_name(),
        "의 대결이 이루어졌다……",
      ]);
      await era.printAndWait("그런데, 분위기가 조금…… 가벼운데?");
      await halo.say_and_wait([
        "하아…… 후우…… ",
        h_call_d,
        ", 너의 발걸음, 꽤나 망설하고 있구나. 무슨 일이야?",
      ]);
      await digital.say_and_wait(
        "아뇨, 그게…… 계속해서 눈앞에 섬광탄이 터지는 기분이랄까, 공기 중에 섞인 존귀함 때문에 질식할 것 같달까……",
      );
      await digital.say_and_wait(
        "전 예전까지 늘 관객석에 있던 쪽이라…… 감히 따라잡겠다는 생각을 하다니, 너무 건방졌던 것 같아요……",
      );
      await digital.say_and_wait(
        '私も最近になって、『本気で走る』覚悟ができた普通の底辺ですから……',
      );
      await halo.say_and_wait([
        "어머, 자신감이 상당히 부족해 보이네. 하지만 정말 그뿐일까? ",
        callname_61,
        '、',
        h_call_d,
        "의 실력, 당신은 알고 있지?",
      ]);
      await you.say_and_wait("지금 같은 더트 코스라면 디지털이 지지 않을 거야.");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 여전히 지금의 ",
        halo.get_colored_name(),
        "를 신경 쓰고 있었다.",
      ]);
      await digital.say_and_wait([
        call_61,
        "…… 지금은…… 예전과는 너무 다르잖아요…… 그렇죠……",
      ]);
      await digital.say_and_wait([
        '今年の春、『',
        takm_kin,
        '』で勝って、それから……流れる走り、体の躍動、今回の実力とは比べものにならないっていうか……',
      ]);
      await digital.say_and_wait(
        "전 알고 있어요. 매번 울타리를 붙잡고 몸을 내밀며 지켜봐 왔으니까요.",
      );
      await digital.say_and_wait([
        "지금 ",
        call_61,
        "가 얼마나 고통스러울지, 저도 데뷔를 했기 때문에…… 이제는 조금이나마 알 것 같아요……",
      ]);
      await era.printAndWait([
        '選手になってからの ',
        digital.get_colored_name(),
        "은 예전보다 더 많은 것을 보고 느낄 수 있게 되었고, 이런 감정 또한 예외는 아니었다.",
      ]);
      await halo.say_and_wait([
        "그래서 그럴 기분이 아니라는 거니…… 흐음, 과연…… ",
        h_call_d,
        ", 넌 정말……",
      ]);
      await halo.say_and_wait("바보구나.");
      await digital.say_and_wait("에엣?");
      await era.printAndWait([
        "예상치 못한 말에 ",
        digital.get_colored_name(),
        "은 깜짝 놀랐다.",
      ]);
      await halo.say_and_wait("바보, 그것도 아주 심각한 바보야.");
      await halo.say_and_wait(
        "날 잘 알고 있는 것 같지만, 넌 아직 아무것도 몰라.",
      );
      await era.printAndWait("엄격한 말투였지만, 그 목소리에는 다정함이 깃들어 있었다.");
      await halo.say_and_wait([
        "저기, ",
        h_call_d,
        ", 넌 나라는 ",
        digital.uma_sex_title,
        "에게 아주 관심이 많지?",
      ]);
      await digital.say_and_wait("! 네! 그럼요!");
      await halo.say_and_wait(
        "좋아, 그럼 합숙이 끝나면 내가 너에게 나와 함께 훈련할 권리를 하사해주겠어!",
      );
      await halo.say_and_wait([
        "보여줄게. ",
        halo.get_colored_name(),
        "가 어떤 ",
        digital.uma_sex_title,
        "인지를!",
      ]);
      await digital.say_and_wait("부디 부탁드립니다!");
      await digital.say_and_wait([
        "너무 영광이라 꼬리가 다 삐죽 설 정도예요! 이 디지땅이 그 ",
        digital.sex_code - 1 ? "여신" : "신",
        "과 함께라니!",
      ]);
      await era.printAndWait([
        "여름의 끝자락에서 ",
        digital.get_colored_name(),
        "은 동경하는 ",
        digital.uma_sex_title,
        "와 유대감을 쌓게 되었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_37
  we_47_37: (() => {
    const title = "일류의 조건";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} sprt_sta スプリンターズS（着色名）
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (digital, halo, call_61, h_call_d, sprt_sta, mile_cha) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        "이 ",
        mile_cha,
        "을 향해 나아가는 동안, ",
        halo.get_colored_name(),
        " 또한 동시에 노력을 거듭하고 있었다.",
      ]);
      await digital.print_and_wait([
        sprt_sta,
        ", 단거리 G1 레이스는 이론적으로 ",
        halo.get_colored_name(),
        "에게 유리할 터였으나……",
      ]);
      await digital.print_and_wait("——결과는 7착.");
      await digital.print_and_wait("입착조차 하지 못했다.");
      await digital.print_and_wait([
        "레이스가 끝난 직후, ",
        digital.get_colored_name(),
        "은 ",
        halo.get_colored_name(),
        "의 앞에 나타났다.",
      ]);
      await halo.say_and_wait([
        "보러 와줬구나, ",
        h_call_d,
        ". 상관 말고 내버려 두라고 말하고 싶지만, 너니까 특별히 나와 함께 있을 권리를 줄게.",
      ]);
      await digital.say_and_wait([
        "저기…… 비록 결과는 아쉬웠지만, ",
        call_61,
        "의 그 아름다움에 저는 다시금 감동했어요.",
      ]);
      await digital.say_and_wait("날카로운 눈빛, 뿜어져 나오는 품격, 화려한 코너링까지!");
      await halo.say_and_wait("……그뿐이야?");
      await digital.say_and_wait("에엣?");
      await halo.say_and_wait("내가 일류라고 생각하는 이유가 고작 그뿐이냐고 묻는 거야.");
      await digital.print_and_wait([
        digital.get_colored_name(),
        "은 이어서 더 많은 말을 쏟아냈지만……",
      ]);
      await halo.say_and_wait("……일류가 되기 위해 무엇보다 중요한 것이 한 가지 더 있어.");
      await digital.print_and_wait(
        "레이스가 끝난 뒤의 경기장에는 사람들의 발길이 거의 끊겨 있었다.",
      );
      await digital.print_and_wait([
        halo.get_colored_name(),
        "는 조용히 스타트 라인으로 걸어가 출발 자세를 취했다.",
      ]);
      await halo.say_and_wait("기회다. 지금 나와 함께 달려보겠어?");
      era.drawLine();
      await digital.print_and_wait([
        "방금 레이스를 치른 직후였기에 ",
        halo.get_colored_name(),
        "의 피로감이 눈에 띄게 드러났다.",
      ]);
      await halo.say_and_wait(
        "하아…… 하아…… 쿨럭…… 후후훗…… 정말이지, 꼴사납네.",
      );
      await halo.say_and_wait([
        h_call_d,
        ", 지금의 난 어때. 날카로운 눈빛도, 품격도, 화려함도 전부 사라졌지.",
      ]);
      await halo.say_and_wait(
        "일류의 증거를 하나도 남기지 못한 내가 여전히 일류라고 생각해?",
      );
      await digital.say_and_wait("그건…… 그게……");
      await halo.say_and_wait("하지만, 설령 이런 상태라 해도——");
      await digital.print_and_wait([
        "방금 레이스에서 보았던 날카로운 눈빛이 지금의 ",
        halo.get_colored_name(),
        "에게서 다시금 번뜩였다.",
      ]);
      await halo.say_and_wait("한 번 더 달린다면 결과가 어떨까?");
      await halo.say_and_wait("만약 안 된다면 내일 다시 달리면 어떨까?");
      await halo.say_and_wait(
        "내일 실패하더라도 모레 또 도전한다면 어떨 것 같아?",
      );
      await halo.say_and_wait([
        h_call_d,
        "! 잘 봐. 지금의 나에게 정말 아무것도 남지 않았는지!",
      ]);
      await digital.say_and_wait('！');
      await digital.say_and_wait(
        '残ってる！ 開拓の羅針盤みたいに、万年の氷みたいに、変わらない！',
      );
      await halo.say_and_wait("——불굴의 집념. 아무리 꺾여도 굴복하지 않는 마음.");
      await halo.say_and_wait("이것만큼은 그 누구도 내게서 뺏어갈 수 없지.");
      await halo.say_and_wait(
        "이것이 바로 나, 킹이 영원한 일류인 이유야!",
      );
      await digital.print_and_wait([
        "실력이 쇠퇴했을지언정, ",
        halo.get_colored_name(),
        "의 「일류」다운 정신과 불굴의 의지는 결코 시들지 않았다.",
      ]);
      await digital.say_and_wait(["오오오오…… ", call_61, '……！']);
      await digital.print_and_wait([
        "온몸이 상처투성이일지라도 ",
        halo.get_colored_name(),
        "의 모습은 이토록 아름다웠다.",
      ]);
      await halo.say_and_wait([
        "약속할게. 나는 『",
        mile_cha,
        "』에서 반드시 예전의 모습으로 돌아오겠어!",
      ]);
      await halo.say_and_wait(
        "날 동정해서 전력을 다하지 않는다면, 그건 너무나도 무례한 짓이니까 말이야.",
      );
      await digital.say_and_wait(
        'はい、わかりました。一流の欠片……受け取ります。',
      );
      await digital.say_and_wait("하지만, 이 말 한마디만은 하게 해주세요……");
      await digital.say_and_wait([
        "당신은 역시…… ",
        halo.sex_code !== 1 ? "여신" : "신",
        "이세요……",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_17
  we_95_17: (() => {
    const title = 'NHKマイルカップ観戦';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     */
    const f = async (digital, nhk_cup) => {
      await era.printAndWait([
        digital.get_colored_name(),
        "와 함께 작년에 ",
        digital.get_colored_name(),
        "이 분투했던 ",
        nhk_cup,
        "을 보러 왔다.",
      ]);
      await era.printAndWait([
        '最近の ',
        digital.get_colored_name(),
        ' は後輩にも目を向け始めた。その中でいちばん',
        digital.sex,
        'の目を引いたのは——',
      ]);
      await era.printAndWait([
        "올해 ",
        nhk_cup,
        "에서 승리한, 요즘 아주 핫한 신인——쿠로후네였다.",
      ]);
      await digital.say_and_wait("우오오오옷, 저 보폭, 저 길게 뻗은 다리! 저, 저는 이미……!");
      await digital.say_and_wait([
        "쿠로후네 씨, ",
        digital.sex,
        '、',
        digital.sex,
        'は私が走った芝を走ったんだ！',
      ]);
      await digital.say_and_wait('内側の感覚が、弾けそう！');
      await era.printAndWait([
        "그 즉시 ",
        digital.get_colored_name(),
        "은 울타리 쪽으로 달려갔다……",
      ]);
      await digital.say_and_wait(
        "쿠로후네 씨! 힘내세요! 앞으로 무슨 일이 있어도 선배들이 도와줄 거예요!",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 작년 ",
        nhk_cup,
        " 이후로 많은 일을 겪어왔다.",
      ]);
      await era.printAndWait([
        "지난 1년, 다시금 새로운 세대가 등장하는 것을 보며, 대를 이어가는 발자취에 ",
        digital.get_colored_name(),
        "은 감개무량한 듯했다.",
      ]);
      await era.printAndWait([
        "다시 돌아온 ",
        digital.get_colored_name(),
        "은 다시 쿠로후네에 대해 열띤 설명을 시작했다……",
      ]);
      era.println();
      await era.printAndWait([
        "다양한 마장 적성 면에서 쿠로후네는 ",
        digital.get_colored_name(),
        "과 매우 닮아 있었기에, ",
        digital.get_colored_name(),
        "은 묘한 친밀감을 느끼는 모양이었다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 이제 단순한 아이돌 팬을 넘어, 후배를 아낄 줄 아는 선배로 성장해 있었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_23
  we_95_23: (() => {
    const title = "용자 도전";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (digital, opera, doto, you, call_15, call_58, tenn_sho) => {
      await era.printAndWait([
        "마침내 ",
        digital.get_colored_name(),
        "은 여름 합숙 전까지 여러 큰 레이스에 참가하며 충분한 경험을 쌓아왔다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "과 함께 지난 레이스들을 회상하니, 정말 많은 만남이 있었음을 실감했다.",
      ]);
      await digital.say_and_wait([
        'よし！ 時機は来た！ 虎牢関の戦い！ ',
        call_15,
        "와 ",
        call_58,
        "에게 도전장을 내밀 때라구요!",
      ]);
      await digital.say_and_wait("음…… 잠깐만요, 어떤 레이스를 선택하는 게 좋을까요?");
      await era.printAndWait([
        "확실히 그렇긴 했다. ",
        opera.get_colored_name(),
        "와 ",
        doto.get_colored_name(),
        "는 더트 적성이 낮고, 거리상으로는 마일 적성이 좋지 않았다.",
      ]);
      await era.printAndWait([
        "반면 ",
        digital.get_colored_name(),
        "은 장거리 적성이 좋지 않은 상태였다.",
      ]);
      await you.say_and_wait("정말로 제대로 도전하고 싶다면, 역시 황금의 잔디 중거리 레이스겠지.");
      await era.printAndWait("하지만, 그건……");
      await digital.say_and_wait([
        "맞아요…… 저도 ",
        digital.couple_title,
        "을 제 주종목인 진흙탕 싸움으로 끌어들이고 싶지는 않아요. 역시 정정당당하게 겨뤄봐야죠.",
      ]);
      await era.printAndWait([
        "자칭 패왕을 넘어 명실상부한 패왕이 된 ",
        opera.get_colored_name(),
        "와 그 뒤를 쫓는 ",
        doto.get_colored_name(),
        "를 상대로 한 황금 거리 레이스라면……",
      ]);
      await you.say_and_wait([tenn_sho, ", 이 대회가 가장 적절하겠어."]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 이 레이스에서 그 어떤 이점도 가져갈 수 없을 것이다.",
      ]);
      await digital.say_and_wait(
        "좋아요! 바로 그거예요! 도쿄 2000미터 잔디 코스, 이보다 완벽한 무대는 없죠!",
      );
      await you.say_and_wait("정말 괜찮겠어?");
      await digital.say_and_wait("호에? 무슨 말씀이세요?");
      await you.say_and_wait("상당히 고전할 텐데.");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 이런 상황에 직면하자 잠시 말문이 막힌 듯했다.",
      ]);
      await digital.say_and_wait(
        "……아하하, 천성이 이래서 말이죠. 게임을 할 때 최저 난이도로 하고 싶지 않거나, 공짜로 주는 DLC 사기 템을 안 쓰고 싶은 기분이랑 비슷하달까요……",
      );
      await digital.say_and_wait("무엇보다 전, 최고의 레이스를 보고 싶거든요!");
      await digital.say_and_wait("그러니까, 당신도 반드시 저와 함께해주실 거죠?!");
      await you.say_and_wait("당연하지!");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 본래 그런 아이였다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_32
  we_95_32: (() => {
    const title = "3년차 여름 합숙 종료";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      opera,
      doto,
      you,
      callname,
      call_15,
      call_58,
      call_61,
      tenn_sho,
    ) => {
      await era.printAndWait([
        "이번 여름 합숙에서, ",
        digital.get_colored_name(),
        "은 정말로 열심히 노력했다. ",
        you.get_colored_name(),
        "은(는) 이렇게나 진지한 ",
        digital.get_colored_name(),
        "의 모습을 본 적이 없었다.",
      ]);
      await era.printAndWait([
        "선배인 ",
        opera.get_colored_name(),
        ", ",
        doto.get_colored_name(),
        "와의 약속, 그리고 후배인 쿠로후네와의 대결. 이 두 가지 요소 덕분에 지금 ",
        digital.get_colored_name(),
        "의 컨디션은 전례 없을 정도로 최고조였다!",
      ]);
      await digital.say_and_wait([
        callname,
        ", 느껴져요. 이 감각, 마치 모든 이의 축복을 받은 용사가 된 기분이에요! 이대로라면 ",
        digital.couple_title,
        "과 대결할 수 있겠어요!",
      ]);
      await you.say_and_wait("이길 수 있겠어?");
      await digital.say_and_wait(
        "솔직히 말하면, 불안함뿐이에요! 그 세 명은 누구 하나 제가 이길 수 있다는 확신이 서질 않아서……",
      );
      await digital.say_and_wait(
        "그러니 제가 할 수 있는 건, 지금까지 쌓아온 풍부하고 다양한 경험에 기댈 수밖에 없어요!",
      );
      await era.printAndWait([
        "앞을 가로막는 벽이 아무리 높더라도, ",
        digital.get_colored_name(),
        "에게 망설임은 없었다.",
      ]);
      await era.printAndWait("하지만, 그날 밤……");
      await era.printAndWait("쿠로후네가 레이스에 출주할 수 없다는 소식이 들려왔다.");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 그날 밤, ",
        you.get_colored_name(),
        "을(를) 불러냈다. 심야의 해변에서 고개를 떨군 채 아무 말도 하지 않았다.",
      ]);
      await era.printAndWait([
        "한참이 지나서야 ",
        digital.get_colored_name(),
        "이 입을 열었다——",
      ]);
      await digital.say_and_wait([
        callname,
        "……저기, 이런 일이 정말로 일어날 수 있는 건가요?",
      ]);
      await era.printAndWait([
        "골절, 팬 수, 투표수, 추첨, 회피…… 여러 가지 이유로 출주하지 못하는 경우를 ",
        digital.get_colored_name(),
        "은 봐왔다.",
      ]);
      await era.printAndWait([
        "하지만 출주 쿼터가 예상치 못하게 부족해서 출주하지 못하는 상황은, ",
        digital.get_colored_name(),
        "도 처음 겪는 일이었다.",
      ]);
      await digital.say_and_wait(
        "승부의 세계니까, 분명 승리의 미소와 패배의 눈물이 공존하겠죠.",
      );
      await digital.say_and_wait([
        "하지만 눈물 너머에는 반드시 감동이 존재하기에, 그렇기에 ",
        digital.uma_sex_title,
        "들은 또 다른 경기장에서 다시 부딪힐 수 있는 거예요.",
      ]);
      await digital.say_and_wait("……하지만…… 만약, 달리는 것조차 할 수 없다면, 그건 뭐라고 설명해야 할까요……");
      await era.printAndWait("모든 준비를 마쳤음에도 레이스에 나갈 수 없었다.");
      await digital.say_and_wait([
        "만약 저의 출주 때문에…… ",
        digital.sex,
        "의 꿈이 꺾여버린 거라면……",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 몹시 낙담하여 이제 물러나고 싶다는 마음이 생긴 듯했다.",
      ]);
      await you.say_and_wait([
        "너, 설마 ",
        tenn_sho,
        "에 나가지 않겠다고 말하려는 거야?!",
      ]);
      await digital.say_and_wait("그…… 그럴 리가요.");
      await digital.say_and_wait([
        "저에게도, 저에게도 ",
        call_15,
        "와 ",
        call_58,
        "와의 약속이 있으니까요……",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "도 알고 있었다. ",
        digital.sex,
        "가 아무것도 바꿀 수 없다는 것을.",
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        "를 좋아하기에, 그 ",
        digital.uma_sex_title,
        "가 겪은 일이 마치 수초처럼 ",
        digital.sex,
        "의 발목을 휘감았다.",
      ]);
      await era.printAndWait("하지만, 이대로 끝난다면……");
      await you.say_and_wait([
        digital.sex,
        "를 믿어봐. 동시에, 나도 너를 믿어.",
      ]);
      await digital.say_and_wait([
        "그건…… 무슨 뜻인가요? ",
        digital.sex,
        "를 믿으라니……?",
      ]);
      await you.say_and_wait([
        'クロフネ',
        digital.sex,
        'の脚は止まらない。',
        digital.sex,
        'には来年もある。今年の ',
        tenn_sho,
        ' に',
        digital.sex,
        'が出られないのは事実だ……',
      ]);
      await you.say_and_wait([
        "하지만 너는 ",
        digital.sex,
        "가 이 정도로 좌절해서 그대로 은퇴할 거라고 생각해?",
      ]);
      await digital.say_and_wait("! 그…… 그럴 리 없죠.");
      await era.printAndWait([
        "훌륭한 ",
        digital.uma_sex_title,
        "는 이런 좌절에 굴하지 않는 법이었다.",
      ]);
      await you.say_and_wait(
        "네가 최고의 답을 보여주는 것, 그것이 쿠로후네에게 줄 수 있는 최고의 도움이야.",
      );
      await digital.say_and_wait([
        '……',
        digital.uma_sex_title,
        'ちゃんたちが、苦しみの最後に掴むもの。あの何人かを経て、わかった。あれは比類ないものだ。',
      ]);
      await digital.say_and_wait(
        "모든 슬픔도, 심지어 그 후회조차도 내일의 힘이 될 거예요! 깨달았어요! 저 자신이 직접 느꼈으니까요!",
      );
      await digital.say_and_wait([
        "그래서 저는 진심으로 말할 수 있어요. ",
        digital.uma_sex_title,
        "는 정말 최고예요!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "이 일어나 바다를 향해 달려갔다——",
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        'は、どんな苦難でも、不屈の意志で、全部、弾き飛ばあああああ！！！！！',
      ]);
      await digital.say_and_wait([
        "나도, 그리고 ",
        digital.sex,
        "도! 반드시 뛰어넘을 수 있어어어어어!!!!",
      ]);
      await digital.say_and_wait("……아아아……");
      await era.printAndWait([
        "한바탕 소리를 지른 뒤, ",
        digital.get_colored_name(),
        "이 정신을 차렸다.",
      ]);
      await you.say_and_wait("아무래도 답을 찾은 모양이네, 디지털.");
      await digital.say_and_wait([
        "……저, 저도 여기서 멈출 수 없어요. 반드시, 반드시 ",
        call_61,
        "에게서 받은 소중한 것을 ",
        digital.sex,
        "에게 보여줄 거예요!",
      ]);
      await digital.say_and_wait([
        "저는 반드시 ",
        tenn_sho,
        "에 나갈 거예요. 그리고, 그리고! 반드시 압도적인 승리를 거둘 거예요!",
      ]);
      await digital.say_and_wait([
        digital.sex,
        "가 내년 이 대회에서 저를 따라잡기 위해 온 힘을 다할 수 있도록요!",
      ]);
      await digital.say_and_wait("절대로! 반드시요!");
      await digital.say_and_wait([
        "그리고 제가 지금까지 만난 모든 ",
        digital.uma_sex_title,
        "들의 감정을 전부 쏟아내겠어요!",
      ]);
      await digital.say_and_wait("이것이 저의 책임이에요!");
      await era.printAndWait(
        "승리하는 것, 그것도 대승을 거두는 것만이 쿠로후네의 마지막 미련을 끊어낼 수 있었다.",
      );
      await era.printAndWait([
        "이것이 ",
        digital.get_colored_name(),
        "이 스스로에게 부여한 책임이었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_48
  we_95_48: (() => {
    const title = (digital) => [
      "그저 평범한 ",
      digital.uma_sex_title,
      digital.sex,
    ];
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} dober メジロドーベル
     * @param {CharaTalk} kris シンボリクリスエス
     * @param {CharaTalk} diamond_lord ダイヤモナーク（アグネスデジタル口上NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_59 アグネスデジタルのメジロドーベルへの呼び方
     * @param {PrintedSpan} do_call_di メジロドーベルのアグネスデジタルへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      digital,
      dober,
      kris,
      diamond_lord,
      you,
      callname,
      call_59,
      do_call_di,
      arim_kin,
    ) => {
      await era.printAndWait([
        "서리가 내리는 12월의 마지막 며칠. 얼마 전 관람했던 ",
        arim_kin,
        "의 열기와 ",
        kris.get_colored_name(),
        "의 멋진 결승선 통과를 지켜본 여운이 남아 있었지만, ",
        digital.get_colored_name(),
        "은 즉시 코미케 준비에 투신했다.",
      ]);
      await era.printAndWait("부스 참가자로서 미리 입장해 준비할 수 있다고는 해도……");
      await era.printAndWait(
        "부스 참가자만으로도 이렇게 사람이 많다니 감탄하지 않을 수 없었다.",
      );
      await era.printAndWait(
        "전시장으로 끊임없이 이어지는 거대한 뱀 같은 행렬을 보며, 차례가 오려면 얼마나 더 걸릴지 가늠하기 어려웠다.",
      );
      await digital.say_and_wait([
        "후후후, ",
        callname,
        ", 당신은 일반 관객의 매운맛을 못 봐서 그래요. 그때가 되면 도쿄 빅 사이트 앞뒤로 발 디딜 틈 없는 파도가 밀려온다고요!",
      ]);
      await era.printAndWait([
        "……다행히 ",
        digital.get_colored_name(),
        "이 부스 참가자였기에 전용 통로로 함께 입장할 수 있었다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "의 등에 매인 특제 배낭에는 고리가 잔뜩 달려 있었고, 온갖 굿즈와 장식품들이 걸려 있었다……",
      ]);
      await era.printAndWait("듣기로는 그 안에 태피스트리 뭉치도 들어 있다고 했다……");
      era.printButton(
        "「저기, 디지털. 이것들 설마 혼자서 다 만든 거야?」",
        1,
      );
      await era.input();
      await era.printAndWait([
        "차르륵차르륵, ",
        digital.get_colored_name(),
        "이 몸을 돌릴 때마다 장식품의 금속들이 서로 부딪히며 날카로운 소리를 냈다.",
      ]);
      await digital.say_and_wait([
        "음…… ",
        callname,
        ", 제 작업량에 놀라신 건가요? 사실 여기 있는 것 중 상당수는 재판본, 즉 예전의 작품들이에요.",
      ]);
      await era.printAndWait("예전이라니, 과거를 말하는 건가……");
      await digital.say_and_wait([
        "데뷔한 이후로 사실 제 작품들은 꽤 줄었어요. 기본적으로 참가할 때 얇은 책 한두 권 정도만 내고, 가끔은 불참할 때도 있어서……",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 다시 몸을 돌려 거대한 도쿄 빅 사이트를 응시했다.",
      ]);
      await digital.say_and_wait([
        "어쩌면…… 나중에는 다시 예전 속도를 회복할 수 있겠죠.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) ",
        digital.get_colored_name(),
        "의 말을 이해했고, ",
        digital.get_colored_name(),
        ' がなぜこんなに……沈んでいるのかも？',
      ]);
      await era.printAndWait([
        "일찍 일어난 탓에 조금 초점이 흐릿한 ",
        digital.get_colored_name(),
        "의 눈동자를 보며, ",
        you.get_colored_name(),
        "은(는) 과거를 회상했다……",
      ]);
      await era.printAndWait("그것은 비가 내리던 어느 더트 레이스였다.");
      await era.printAndWait([
        "가랑비 섞인 찬바람이 ",
        you.get_colored_name(),
        "의 우비 안으로 사정없이 파고들었다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "도 무척 춥다고 느꼈을 것이다.",
      ]);
      await era.printAndWait([
        "코스 위의 ",
        digital.get_colored_name(),
        ' は泥だらけで、マカロン色の勝負服にも灰色がにじんでいた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 전광판의 성적을 보지 않았다. 그저 고개를 들어 그 전광판을 바라보고 있는 ",
        digital.get_colored_name(),
        "의 뒷모습을 보았을 뿐이다.",
      ]);
      era.drawLine();
      await era.printAndWait(
        "행렬은 생각보다 길지 않았고, 어느새 회장 안으로 들어와 있었다.",
      );
      await era.printAndWait([
        "사람들 사이를 비집고 간신히 도착한 ",
        digital.uma_sex_title,
        " 전용 구역. 그곳에서 부스를 준비하던 몇몇 참가자들이 ",
        digital.get_colored_name(),
        "을 보더니 멀리서 손을 흔들어 주었다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 이곳에서 인지도가 꽤 높은 모양이었다.",
      ]);
      await digital.say_and_wait("오오오오옷?!");
      await era.printAndWait([
        "음? ",
        digital.get_colored_name(),
        "의 시선을 따라가 보니 마스크와 모자를 쓰고, 옷을 여러 겹 껴입어 조금 부해 보이는 한 명의…… ",
        digital.uma_sex_title,
        "가 있었다.",
      ]);
      await era.printAndWait([
        "평범한 모자를 쓰고 있었지만, 모자 위쪽이 살짝 솟아오른 모양으로 보아 ",
        digital.uma_sex_title,
        "임을 짐작할 수 있었다.",
      ]);
      await era.printAndWait([
        "그리고 사실, 모두가 ",
        digital.sex,
        "가 누구인지 대강 눈치채고 있었지만……",
      ]);
      await digital.say_and_wait([
        "도…… ",
        { color: dober.color, content: '白目先生', fontWeight: 'bold' },
        '！ 今回も新刊ある?! 三冊ありがとう！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 도베르…… 아니, ",
        {
          color: dober.color,
          content: '白目先生',
          fontWeight: 'bold',
        },
        "의 부스로 달려가 즉시 3권을 예약했다.",
      ]);
      await era.printAndWait([
        "그러자 도베르…… 아니, ",
        {
          color: dober.color,
          content: "도베르 선생님",
          fontWeight: 'bold',
        },
        "도 주위를 조심스럽게 살피더니, 다른 사람들이 (의도적으로) 눈길을 피하는 것을 확인하고는……",
      ]);
      await era.printAndWait([
        "가방 속에서 정성스럽게 포장된 무언가를 꺼내 감격한 ",
        digital.get_colored_name(),
        "에게 슬쩍 건네주었다.",
      ]);
      await era.printAndWait("여러 가지 교환이 오간 뒤, 곧 다가올 것은……");
      await era.printAndWait("코믹 마켓의 정식 개막이었다!");
      await era.printAndWait(
        "몇 번을 봐도 감탄하게 된다. 인간은 너무 많고, 지구는 너무 좁다.",
      );
      await you.say_as_unknown_and_wait("오오오오오오오!");
      await era.printAndWait(
        "입구 쪽에서 들려오는 수많은 이들의 영혼이 담긴 함성. 앞줄에 선 사람들이 인기 부스 구역으로 질주하더니, 부스 근처에 도달하자 예의 바르게 멈춰 서서 지폐를 건네고 귀중한 전리품을 챙겼다.",
      );
      await era.printAndWait("뒤이어 인파가 계속 쏟아져 들어왔고, 현장에 도착한 것은……");
      await diamond_lord.say_as_unknown_and_wait([
        "에엣! ",
        do_call_di,
        "! 저 왔어요!",
      ]);
      await era.printAndWait([
        "멀리서 인파를 뚫고 갈색 머리의 ",
        digital.uma_sex_title,
        " 한 명이 나타났다. ",
        digital.uma_sex_title,
        "다운 각력으로 순식간에 ",
        digital.get_colored_name(),
        "의 앞으로 다가왔다.",
      ]);
      await digital.say_and_wait(["늘 내던 신간이에요, 여기요~"]);
      await era.printAndWait([
        "신간을 받아 든 ",
        digital.uma_sex_title,
        "는 깡충깡충 뛰며 퇴장했다. 첫 번째 손님이었지만, 곧바로 이어지는 것은……",
      ]);
      era.printButton("「디지털…… 네 유명세에 대해서는 익히 들었지만……」", 1);
      await era.input();
      await era.printAndWait(
        "정신없이 바빠지기 시작했다. 가방 속에서 둘둘 말린 포스터를 꺼내랴, 받은 현금을 확인하랴……",
      );
      await era.printAndWait(
        "전자 결제가 왜 없느냐고 묻지 마라. 스마트폰은 입장 이후 주머니 속에서 아무런 소리도 내지 않은 채 조용히 잠들어 있었다.",
      );
      await era.printAndWait([
        "한바탕 폭풍 같은 시간이 지나고, 드디어 「완판」 팻말을 세울 수 있었다.",
      ]);
      era.println();
      await era.printAndWait([
        digital.get_colored_name(),
        "과 함께 URA 공식 부스 구역에 구경 가볼까 의논하던 찰나, ",
        {
          color: dober.color,
          content: "도베르 선생님",
          fontWeight: 'bold',
        },
        "이 작별 인사를 하러 왔다.",
      ]);
      await dober.say_and_wait([
        do_call_di,
        ", 원래는 같이 구역을 둘러보고 싶었지만, 아쉽게도 저는 여기서 이만 가봐야겠네요. 부디 앞으로 더 훌륭한 작품을 만들어 주시길 바랄게요.",
      ]);
      await digital.say_and_wait(
        'えええ、お世話になりました！ 死ぬ気で創作します！',
      );
      await digital.say_and_wait(
        "데뷔한 뒤로 작품 활동이 조금 뜸해졌지만, 안심하세요. 곧 예전 페이스로 돌아올 테니까요!",
      );
      await dober.say_and_wait(["!"]);
      await era.printAndWait([
        "마스크 너머로 눈매만 보였음에도, ",
        dober.get_colored_name(),
        "의 격렬한 감정 변화를 느낄 수 있었다.",
      ]);
      await era.printAndWait([
        digital.sex,
        "는 주먹을 꽉 쥐더니, 위장용으로 썼던 모자와 마스크를 벗어 던졌다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 멍해졌다. 왜 ",
        dober.get_colored_name(),
        "가 갑자기 이렇게 화를 내는지 알지 못했다.",
      ]);
      await digital.say_and_wait(['シロ……', call_59, "……?"]);
      await era.printAndWait([
        dober.get_colored_name(),
        ' はショルダーバッグから ',
        digital.get_colored_name(),
        "의 동인지 한 권을 꺼내 ",
        digital.get_colored_name(),
        "의 부스에 다시 내려놓았다.",
      ]);
      await dober.say_and_wait([
        "이거, 돌아가서 읽으려고 했던 건데…… 미안해.",
      ]);
      await era.printAndWait([
        dober.get_colored_name(),
        "는 뒤도 돌아보지 않고 가버렸다. ",
        digital.get_colored_name(),
        "이 붙잡으려 했지만 쳐다보지도 않았다.",
      ]);
      await digital.say_and_wait(['……']);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 고개를 떨군 채, 자신이 정성껏 포장했던 그 동인지를 멍하니 바라보았다.",
      ]);
      await diamond_lord.say_as_unknown_and_wait(["저기…… ", do_call_di, "?"]);

      await era.printAndWait([
        "아까 부스에 가장 먼저 달려왔던 갈색 머리의 ",
        digital.uma_sex_title,
        "였다. ",
        digital.sex,
        " 역시 전리품이 가득 든 커다란 가방을 들고 마지막 인사를 하러 온 모양이었다.",
      ]);
      await digital.say_and_wait([
        "꼴사나운 모습을 보여드려서 죄송해요, ",
        diamond_lord.get_colored_name(),
        "님. 저는……",
      ]);
      await digital.say_and_wait([
        "한 가지 여쭤보고 싶어요. 팬으로서 작가님의 작품을 더 많이 보고 싶어 하는 건…… 당연한 마음 아닌가요?",
      ]);
      await diamond_lord.say_and_wait("그렇죠…… 하지만……");
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        "라고 불린 ",
        digital.uma_sex_title,
        "는 그대로 바닥에 주저앉아 커다란 배낭을 뒤지더니 두꺼운 책 한 권을 꺼냈다.",
      ]);
      await era.printAndWait(
        "펼쳐보니 그것은 두꺼운 보호 표지로 감싸인 동인지였다.",
      );
      await diamond_lord.say_and_wait(
        "이건, 작가님이 데뷔하던 첫해에 냈던 동인지예요……",
      );
      await diamond_lord.say_and_wait(
        "그때 전 아직 팬이 아니었어요. 이건 나중에 다른 사람에게 비싼 값을 치르고 산 거예요……",
      );
      await era.printAndWait([
        digital.get_colored_name(),
        "은 입술을 깨물며 아무 말도 하지 않았다.",
      ]);
      await diamond_lord.say_and_wait([
        "비싸게 샀지만, 제가 산 것 중 가장 가치 있다고 생각하는 책이에요. ",
        do_call_di,
        ", 그 이유를 아시나요?",
      ]);
      await diamond_lord.say_and_wait([
        "이 책에는 갓 데뷔한 ",
        digital.uma_sex_title,
        "의 레이스가 그려져 있어요. 평소처럼 ",
        digital.uma_sex_title,
        "에 대한 사랑뿐만 아니라, 그 안에는 무언가 다른 것이 들어 있었거든요.",
      ]);
      await diamond_lord.say_and_wait(
        "그리고 제가 하고 싶은 또 다른 말은…… 제가 작가님의 팬이 된 건 바로 당신과의 그 레이스에서였어요. 그 이후로 당신의 모든 레이스를 보러 갔답니다.",
      );
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        "는 그 동인지를 다시 보물처럼 소중하게 보호 표지로 감싸 가방에 넣었다. 그러고는 ",
        digital.sex,
        "는 배낭을 멘 채 떠나갔다.",
      ]);
      era.drawLine();
      await era.printAndWait([
        digital.get_colored_name(),
        "은 행사장 밖에서 유명한 ",
        digital.uma_sex_title,
        "의 코스프레를 하고 춤을 추는 사람들을 멍하니 바라보았다.",
      ]);
      await era.printAndWait([
        digital.couple_title,
        " 중에는 가짜 귀를 단 평범한 ",
        digital.phy_sex_title,
        "도 있었고, 직접 코스프레용 귀를 착용한 ",
        digital.uma_sex_title,
        "도 섞여 있었다.",
      ]);
      await era.printAndWait([
        digital.couple_title,
        "이 즐겁게 춤추는 모습을 보며, ",
        digital.get_colored_name(),
        "은……",
      ]);
      await digital.say_and_wait([callname, ", 왜일까요?"]);
      era.printButton('「ドーベルのこと？ モナークのこと？」', 1);
      await era.input();
      await digital.say_and_wait("……둘 다요.");
      era.printButton(
        `「デジ、君はレース場を駆けられる${digital.uma_sex_title}だろ？」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、噛み合わない質問に少し止まり、首を振った。',
      ]);
      await you.say_and_wait([
        'ドーベルとモナークに感謝しないとな。',
        digital.couple_title,
        " 덕분에 이 ",
        callname,
        "도 다시 깨달았거든.",
      ]);
      era.println();
      await era.printAndWait([
        "경기장 안에서 비록 조금 변태 같긴 해도, 다른 ",
        digital.uma_sex_title,
        "를 뚫어지게 쳐다보던 ",
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        "만약 네가 ",
        digital.uma_sex_title,
        "가 아니라면, 나를 포함한 네 팬들이 보고 있는 디지털은 대체 누구겠어?",
      ]);
      await digital.say_and_wait(["그 디지털은…… 그저 아직 현실을 제대로 파악하지 못한 디지털일 뿐이에요……"]);
      era.println();
      await era.printAndWait([
        "눈앞에 결승선이 보여도 여전하던 ",
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        "경기장에 발을 들여놓는 순간 너는 ",
        digital.uma_sex_title,
        "가 되는 거야. 너는 팬들의 응원을 받는 존재라고!",
      ]);
      await digital.say_and_wait(["경기장에 발을 들여놓기만 하면……?"]);
      await you.say_and_wait([
        "그래! 팬인 네가 제일 잘 알고 있잖아! 경기장에 선 모든 ",
        digital.uma_sex_title,
        "는 결과가 어떻든 다 그런 존재라는 걸!",
      ]);
      era.println();
      await era.printAndWait([
        "진흙탕 속에서도 필사적으로 앞으로 나아가던 ",
        digital.get_colored_name(),
        '……',
      ]);
      era.printButton('「君はもう、ファンが支える存在なんだ！」', 1);
      await era.input();
      await digital.say_and_wait("!");
      await era.printAndWait([
        digital.get_colored_name(),
        "은(는) 그 말을 듣고 온몸을 떨었다.",
      ]);
      era.printButton("「팬 서비스, 뭔지 알지!」", 1);
      await era.input();
      await digital.say_and_wait("알겠어요!");
      era.println();
      await era.printAndWait([digital.get_colored_name(), "은 정말로……"]);
      await digital.say_and_wait([
        "우오오오오오오오, 팬들의 기대를 저버릴 수는 없죠…… 아하하하……",
      ]);
      era.println();
      await era.printAndWait([digital.uma_sex_title, "구나."]);
      await digital.say_and_wait("저, 조금만 더 노력해 볼게요.");
      await era.printAndWait(
        "눈썹은 처지고 눈동자는 흐릿하며 눈물까지 맺혀 있었다. 심지어 쓴웃음에 가까운 표정이었다.",
      );
      await era.printAndWait(
        "하지만 이 미소는 분명 팬들의 심금을 울려 눈물을 흘리게 하겠지……",
      );
      await era.printAndWait("아, 앞이 잘 안 보이네……");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = "새해의 포부";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} daiwa ダイワスカーレット
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, teio, daiwa, doto, you, callname) => {
      await era.printAndWait([
        "새로운 한 해, ",
        digital.get_colored_name(),
        "은 ",
        digital.uma_sex_title,
        "에게 있어 지극히 중요한 클래식 시즌을 맞이했다.",
      ]);
      await era.printAndWait([
        "비록 ",
        digital.sex,
        "는 클래식급 ",
        digital.uma_sex_title,
        "들을 가까이서 접할 수 있다는 사실에만 들떠 있는 것 같았지만 말이다.",
      ]);
      await digital.say_and_wait(["새해 복 많이 받으세요! ", callname, '！']);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 ",
        you.get_colored_name(),
        "에게 가볍게 새해 인사를 건넸다.",
      ]);
      await era.printAndWait("이른 아침부터 트레이닝실에 나오다니, 정말 근면했다.");
      await digital.say_and_wait(
        "연말은 어떻게 보내셨나요? 코미케에서 좋은 책 좀 건지셨나요?",
      );
      await you.say_and_wait("어? 코미케? 책이라니?");
      await digital.say_and_wait(
        "아…… 음, 없으셨다면 방금 한 말은 잊어주세요. 그냥 디지땅의 헛소리였답니다.",
      );
      await digital.say_and_wait(
        "그보다! 올해 레이스! 이건 정말 할 말이 많다구요! 클래식급 레이스는 그야말로 밤하늘의 별처럼 많으니까요!",
      );
      await era.printAndWait([
        "과연, ",
        digital.get_colored_name(),
        "도 이제 클래식급 레이스에 참가할 수 있게 되어 선택지가 작년보다 훨씬 많아졌다. 대부분의 G1 레이스는 클래식급이 되어야 참가할 수 있기 때문이다.",
      ]);
      await digital.say_and_wait([
        "아, 문득 작년 생각이 나네요. 제가 너무 우쭐했던 것 같아요. 제 초심을 잊어버린 것 같달까, 분명 훌륭한 ",
        digital.uma_sex_title,
        " 덕후가 되겠다고 다짐했었는데 말이죠?!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "은 지난번 ",
        digital.sex,
        "와 ",
        doto.get_colored_name(),
        "의 대화에 대해 여전히 마음에 걸리는 구석이 있는 듯했다……",
      ]);
      era.println();
      await digital.say_and_wait(
        "그러니까! 올해는 다시 원점으로 돌아가겠습니다! 다시 한 명의 팬으로서! 그것을 원칙으로 삼겠어요!",
      );
      await era.printAndWait([
        "하지만 현재로선 딱히 방법이 없어 보였다. ",
        digital.get_colored_name(),
        "이 그것을 깨닫기 위해서는 아직……",
      ]);
      await digital.say_and_wait([
        callname,
        "! 저에게 조언 좀 해주실 수 있나요! 어떻게 응원해야 좋을까요?",
      ]);
      era.print([you.get_colored_name(), " 의 선택은:"]);
      era.printButton(`ウマ娘ちゃんに奉仕（スピード+10）`, 1);
      era.printButton("독서 (스태미나+10)", 2);
      era.printButton("모방을 통해 배운다 (스킬 포인트+20)", 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait([
            "평소처럼 ",
            digital.uma_sex_title,
            "짱을 받드는 게 좋지 않겠어?",
          ]);
          await digital.say_and_wait([
            "오오오! 좋은 제안이에요. 그러고 보니 최근 레이스니 뭐니 하면서 계속 ",
            digital.uma_sex_title,
            "짱들에게 결례를 범하고 있었던 기분이 드네요……",
          ]);
          await digital.say_and_wait(
            "그래요! 역시 원점으로 돌아갈 때입니다! 이제 성지를 정화할 시간이에요!",
          );
          await era.printAndWait("정화?!");
          await era.printAndWait("알고 보니 그저 경기장을 청소하려는 것이었다. 다행이다.");
          await era.printAndWait([
            "청소를 마치자 마침 ",
            daiwa.get_colored_name(),
            "이 가장 먼저 잔디밭에 도착했다. ",
            daiwa.get_colored_name(),
            "이 잔디 위를 상쾌하게 달리는 모습을 보며, ",
            digital.get_colored_name(),
            "은 자신도 의욕이 샘솟는 것을 느꼈다.",
          ]);
          break;
        case 2:
          await you.say_and_wait(
            "그렇다면 아까 말했던 샀다는 책들을 읽어보는 건 어때?",
          );
          await digital.say_and_wait(
            "엣! 그거 정말…… 비록 다 짧은 내용이긴 하지만, 다시 한번 훑어보는 것도 나쁘지 않겠네요!",
          );
          await digital.say_and_wait([
            'いろんな',
            digital.uma_sex_title,
            'ちゃんのエネルギーを摂取して、新しい年も走り続けられるように！',
          ]);
          await era.printAndWait([
            "그렇게 ",
            digital.get_colored_name(),
            "은 오늘 기숙사로 돌아가 책을 읽었다. 나중에 다시 만난 ",
            digital.get_colored_name(),
            "의 황홀함에 푹 빠진 표정을 보고, ",
            you.get_colored_name(),
            "은(는) ",
            digital.sex,
            "가 아주 푹 쉬었음을 알 수 있었다.",
          ]);
          break;
        case 3:
          await you.say_and_wait([
            "다른 ",
            digital.uma_sex_title,
            "를 흉내 내며 기술을 배워보는 건 어때?",
          ]);
          await digital.say_and_wait(
            "그렇군요! 최애들을 모방하며 기술을 배운다! 그것이야말로 저희의 사명이죠!",
          );
          await digital.say_and_wait("오오옷! 오?");
          await era.printAndWait([
            "훈련장 관중석으로 이동해, 예전에 스탠드에서 관찰했던 ",
            digital.uma_sex_title,
            "의 기술을 회상했다……",
          ]);
          await digital.say_and_wait("자, 보시라! 테이오 스텝!");
          await era.printAndWait(
            "오오, 저것은 그 유명한 테이오 스텝! 높은 다리 들어 올리기를 통해 보폭을 늘리는 기술이었다!",
          );
          await era.printAndWait("오오, 본인도 도착한 모양이었다.");
          await era.printAndWait([teio.get_colored_name(), "? 언제 온 거지?"]);
          await digital.say_and_wait("우와아아악! 결코 무례를 범하려던 게 아니었어요!");
          await era.printAndWait([digital.get_colored_name(), '！ しおれた！']);
          await era.printAndWait([
            "하지만 그 후 ",
            digital.get_colored_name(),
            "은 ",
            teio.get_colored_name(),
            "에게서 정말로 요령을 전수받았다.",
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_29
  ws_47_29: (() => {
    const title = "여름 합숙 시작";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} japa_dir ジャパンダートダービー（着色名）
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (digital, you, japa_dir, mile_cha) => {
      await era.printAndWait([
        "여름 합숙! 일 년 중 가장 중요한 행사다! 이 시기는 ",
        digital.uma_sex_title,
        "들이 크게 성장할 절호의 기회였다! 트레이너인 ",
        you.get_colored_name(),
        " 역시 이번 활동을 각별히 중시하고 있었다.",
      ]);
      await era.printAndWait([
        "특히 지난번 ",
        japa_dir,
        "의 기세를 이어 다음 레이스까지 몰아쳐야 했다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "은(는) 이미 ",
        digital.get_colored_name(),
        "의 앞날에 펼쳐진 탄탄대로를 예감하고 있었지만……",
      ]);
      await digital.say_and_wait(
        "구와악…… 역시 승리에 취해 정신이 나갔었나 봐요. 제가 감히, 제가 감히 그런 신성한 존재가 되려고 하다니……",
      );
      await era.printAndWait("……아, 시작부터 예감이 좋지 않았다.");
      await digital.say_and_wait(
        "승리의 여운이 가시고 나니, 소위 말하는 현자 타임이 와서 제가 얼마나 무모했는지 자괴감이 들어요……",
      );
      era.printButton("「잠깐, 디지털, 후회하는 거야? 네가 내린 결정을 후회하는 거냐고?」", 1);
      await era.input();
      await era.printAndWait([
        "아픈 곳을 찔린 듯, ",
        digital.get_colored_name(),
        "은 용수철처럼 몸을 벌떡 일으켰다.",
      ]);
      await digital.say_and_wait([
        "그게, 가끔은 제 자신이 참 번거롭다고 느껴져서요…… 분명 스스로 ",
        mile_cha,
        "도 예약해 뒀으면서……",
      ]);
      await digital.say_and_wait(
        'ののののの！ 面倒なことは後回し！ 次はコミックのことを考えないと！',
      );
      era.printButton('「コミック？ 何だそれ？」', 1);
      await era.input();
      await digital.say_and_wait("에엑!");
      await era.printAndWait([
        you.get_colored_name(),
        "에게 갑자기 말을 끊긴 ",
        digital.get_colored_name(),
        "은 우물쭈물하며 말을 흐렸다.",
      ]);
      await digital.say_and_wait(
        "아무튼! 방금 레이스도 끝났으니 일단 좀 쉬게 해주세요, 아하하하!",
      );
      await era.printAndWait("이번 여름 합숙, 조금 걱정되기 시작했다……");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_14
  ws_95_14: (() => {
    const title = "팬 대감사제";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, luna, you, callname) => {
      await digital.say_and_wait([
        "디지땅, ",
        digital.get_colored_name(),
        "만의 축제가 드디어 왔습니다! 와아아, 이 주변 풍경 좀 보세요. 그야말로 팬들의 천국……",
      ]);
      await era.printAndWait([
        "팬 대감사제라…… 말 그대로 아이돌 속성을 가진 레이스 ",
        digital.uma_sex_title,
        "들이 응원해 주는 팬들에게 보답하는 행사였다.",
      ]);
      await era.printAndWait("말은 그렇지만, 사실 분위기는 학원 축제와 비슷했다.");
      await era.printAndWait([
        "하지만 ",
        digital.get_colored_name(),
        ", 올해 네가 맡은 역할은 단순한 팬이 아니라고!",
      ]);
      await you.say_and_wait("사실 오늘 너는 응원을 받는 쪽이란 말이야!");
      await digital.say_and_wait("그아악!");
      await digital.say_and_wait("아뇨아뇨, 저 같은 사람이 어떻게……");
      await era.printAndWait([
        "「그럴 리가 없다」는 표정을 짓는 ",
        digital.get_colored_name(),
        ". 예전 같았으면 정말 그랬을지도 모르겠지만……",
      ]);
      await you.say_and_wait(
        'あんなにたくさんのレースで結果を出した君だ。自覚を持とう。ウマ推しのファンに前からの分があるのはわかる。でも新規ファン、少なくないぞ。',
      );
      await era.printAndWait([
        '急所を突かれたように、',
        digital.get_colored_name(),
        ' は両手を上げて降参した。準備はできているらしい。',
      ]);
      await era.printAndWait([
        "이윽고 사인회장에 도착한 ",
        digital.get_colored_name(),
        '。',
      ]);
      await era.printAndWait([
        "처음에는 ",
        digital.get_colored_name(),
        "도 좀처럼 적응하지 못하는 듯했으나, 그 뒤의 ",
        digital.sex,
        "는……",
      ]);
      await digital.say_and_wait("네네! 여기 색지에 정성껏 이름을 써 드렸답니다!");
      await era.printAndWait("심지어 모든 팬이 웃으며 줄을 서게 만들었다고?!");
      await digital.say_and_wait(
        "저도 예전에는 계속 최애를 미는 쪽이었으니까요…… 팬분들의 마음은 누구보다 잘 읽을 수 있거든요.",
      );
      await digital.say_and_wait([
        "그리고 ",
        callname,
        ", 이따가 제가 이 회장을 좀 최적화해도 될까요? 허락만 해주신다면 디지땅의 주최자 혼이 무엇인지 보여드릴게요!",
      ]);
      await era.printAndWait([
        "스태프에게 허가를 받은 뒤, ",
        digital.get_colored_name(),
        "은 즉시 회장 곳곳을 휩쓸며 온갖 이벤트들을 완벽하게 개선해 나갔다.",
      ]);
      await era.printAndWait([
        "그 소식이 ",
        luna.get_colored_name(),
        "의 귀에까지 들어가, ",
        digital.sex,
        "가 직접 수많은 ",
        digital.uma_sex_title,
        "들을 이끌고 감사를 표하러 오자……",
      ]);
      await digital.say_and_wait("이게 무슨 일이죠, 제가 최애가 된 하루인가요?!");
      await era.printAndWait([
        "감격에 겨워 기절한 ",
        digital.get_colored_name(),
        "의 오늘 하루의 분투가 드디어 끝났다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_29
  ws_95_29: (() => {
    const title = "여름 합숙 시작";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_15 アグネスデジタルのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_61 アグネスデジタルのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_d キングヘイローのアグネスデジタルへの呼び方
     * @param {PrintedSpan} nhk_cup NHKマイルカップ（着色名）
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（着色名）
     */
    const f = async (
      digital,
      halo,
      you,
      call_15,
      call_58,
      call_61,
      h_call_d,
      nhk_cup,
      tenn_sho,
    ) => {
      await digital.say_and_wait(
        "우구구, 올해, 올해 딱 한 번만…… 시간이 없어! 멈춰야 해!",
      );
      await era.printAndWait([
        "여름 합숙이 시작되자마자 머리를 감싸 쥐고 비명을 지르는 ",
        digital.get_colored_name(),
        "이 보였다. 뭐랄까, 오랫동안 ",
        digital.get_colored_name(),
        "을 지켜본 ",
        you.get_colored_name(),
        "도 서서히 깨달아가고 있었다. ",
        digital.get_colored_name(),
        "에게는 동인지를 만드는 취미가 있다는 것을.",
      ]);
      await era.printAndWait([
        digital.sex,
        'は作った同人誌を即売会に出して布教する。相当な熱愛だ。',
      ]);
      await era.printAndWait('しかも、次の大型即売会は夏合宿の期間中だ。');
      await digital.say_and_wait([
        tenn_sho,
        "! 이번 여름엔 ",
        call_61,
        " 신간은 내지 않겠어요. 레이스에 모든 힘을 쏟아붓겠습니다!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "도 이번 티엠 오페라 오 및 메이쇼 도토와의 대결을 굉장히 중요하게 여기는 듯했다. 이번 여름 합숙은 걱정할 필요가 없을 것 같았다.",
      ]);
      await halo.say_and_wait("어라, 그럼 나는 당분간 볼 수 없겠네.");
      await digital.say_and_wait(["호엣! ", call_61, '！']);
      await halo.say_and_wait([
        "그것보다 ",
        h_call_d,
        ", 너 올해 ",
        tenn_sho,
        "에 나갈 거지?",
      ]);
      await digital.say_and_wait([
        "네, 네에…… 그동안 ",
        call_61,
        "께 몸도 마음도 단련 받았으니까요…… 드디어 ",
        call_15,
        ", ",
        call_58,
        "와 결전을 치를 때가 왔어요!",
      ]);
      await halo.say_and_wait([
        "그렇다면 이번 ",
        tenn_sho,
        "은 세 명—— 아니, 네 명의 대결이 되겠네.",
      ]);
      await digital.say_and_wait([
        "에? 또 다른 실력파 ",
        digital.uma_sex_title,
        "님이 계신가요?",
      ]);
      await halo.say_and_wait(["올해 ", nhk_cup, ", 분명 보러 갔었지?"]);
      await digital.say_and_wait([
        "그야 당연하죠, 저는 ",
        digital.get_colored_name(),
        "이니까요! 아하하하…… 설마……",
      ]);
      await era.printAndWait([
        "사실 ",
        you.get_colored_name(),
        "도 며칠 전 소문을 들은 적이 있었다. 그것은 바로……",
      ]);
      await halo.say_and_wait([
        'クロフネ、',
        digital.sex,
        'は今年の ',
        tenn_sho,
        ' に出ますわ。',
      ]);
      await era.printAndWait([
        "쿠로후네…… 올해 NHK 마일을 제패한 ",
        digital.uma_sex_title,
        ". 가공할 만한 발걸음을 가진 자였다.",
      ]);
      await era.printAndWait([digital.sex, "도 이 레이스에 참전한다는 것이었다."]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_48
  ws_95_48: (() => {
    const title = "크리스마스";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {CharaTalk} l_call_d シンボリルドルフのアグネスデジタルへの呼び方
     */
    const f = async (digital, luna, you, callname, l_call_d) => {
      await era.printAndWait([
        "트레센 학원은 크리스마스 자율 활동을 대체로 지지하는 편이었다. ",
        digital.uma_sex_title,
        "들에게 있어 이날은 특별한 날이기 때문이다.",
      ]);
      await era.printAndWait([
        "교외 활동 외에도, 조금은 독특한 ",
        digital.uma_sex_title,
        "들을 배려하여 학원 내부에서도 대형 행사가 열렸다.",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "과 함께 여러 행사장을 누비며 음식을 얻어먹고 게임을 즐겼으며, ",
        digital.get_colored_name(),
        "과 열띤 토론을 벌였다.",
      ]);
      await era.printAndWait([
        "갑자기 ",
        luna.get_colored_name(),
        "와 그 일행이 ",
        you.get_colored_name(),
        "의 앞에 나타났다.",
      ]);
      await digital.say_and_wait("우와와아, 저희가 너무 시끄러웠나요?");
      await luna.say_and_wait("너무 걱정 말게. 오히려 포상이라고 봐야겠지.");
      await era.printAndWait([
        "이윽고 ",
        digital.sex,
        "는 등 뒤에서 커다란 선물 상자를 꺼내 ",
        digital.get_colored_name(),
        "에게 건넸다……",
      ]);
      await digital.say_and_wait("이건……");
      await era.printAndWait([
        digital.get_colored_name(),
        "이 선물 상자를 열자, 그 안에는——",
      ]);
      await era.printAndWait("색지 뭉치였다…… 안에는 빼곡하게 온갖…… 이름들이 적혀 있었다?");
      await digital.say_and_wait("아뇨, 이건, 이건……! 사인이잖아요!");
      await era.printAndWait([
        "사인! 자세히 보니 거기에는 우리에게 친숙한 수많은 ",
        digital.uma_sex_title,
        "들의 친필 사인이 담겨 있었다?!",
      ]);
      await digital.say_and_wait(
        'ああああ……単品で買ったら、ウマコインいくついるんだ……私の預金、いくら残ってたっけ……',
      );
      await luna.say_and_wait([
        "이것은 그동안 ",
        l_call_d,
        "에게 도움을 받았거나 격려를 받았던 수많은 ",
        digital.uma_sex_title,
        "들의 감사의 표시다. 게다가 학생회장으로서 학원 홍보에 힘써준 점에 대해서도 깊이 감사하고 있고.",
      ]);
      await luna.say_and_wait([
        "게다가 ",
        l_call_d,
        "의 취향이…… 조금 독특하지 않은가. ",
        l_call_d,
        "를 좋아하는 모든 ",
        digital.uma_sex_title,
        'を募って、この贈り物を用意した。',
      ]);
      await era.printAndWait([
        "이 거대한 선물을 받은 ",
        digital.get_colored_name(),
        "은……",
      ]);
      await digital.say_and_wait(
        "아와와와…… 이것이 설마…… 덕질하는 자, 결국 덕질당하게 된다는 그것인가요……",
      );
      await you.say_as_passer_by_and_wait('みんな', [
        'おめでとう！ ',
        digital.get_colored_name(),
      ]);
      await digital.say_and_wait([callname, '！ ', callname, "! 이건……"]);
      await era.printAndWait([
        "즉시 감격하여 기절하듯 ",
        you.get_colored_name(),
        "에게 기댔다.",
      ]);
      await era.printAndWait([
        "뜻밖에도 입장이 바뀐 ",
        digital.get_colored_name(),
        "은 오늘만큼은 누군가의 최애가 되는 즐거움을 누렸다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_6
  ws_95_6: (() => {
    const title = "발렌타인";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await era.printAndWait([
        "아침 일찍 트레이닝실에 도착한 ",
        digital.get_colored_name(),
        "이 들고 온 것은—— 초콜릿 한 무더기였다.",
      ]);
      await era.printAndWait("왜 초콜릿을 세는 단위가 무더기인 거지?!");
      await digital.say_and_wait([
        "이것은 제 심혈을 기울인 역작입니다! 제가 생각할 수 있는 모든 ",
        digital.uma_sex_title,
        "짱들의 특징을 이 초콜릿에 담아냈어요!",
      ]);
      await era.printAndWait(
        "상자들이 탑처럼 쌓여 있는 것을 보니, 설마 저 안의 초콜릿이 전부 제각각인 걸까?!",
      );
      await digital.say_and_wait("자, 그럼 제를 올립시다!");
      await era.printAndWait("뭐라고, 웬 신당이 여기서 튀어나오는 거야?!");
      await era.printAndWait([
        digital.get_colored_name(),
        "은 신당 앞에 초콜릿을 전부 차려놓고는, 주문 같은 것을 외우더니 기묘하게 손을 비비기 시작했다.",
      ]);
      await digital.say_and_wait(
        "좋아, 됐어요! 세 여신님께서 제 소망을 들어주셨을 거예요.",
      );
      await era.printAndWait("세 여신님께 빌 거면 안뜰로 가라고?!");
      await digital.say_and_wait([
        callname,
        ", 이제 같이 먹어요. 음식을 낭비하면 안 되니까요.",
      ]);
      era.printButton("「먹을 수 있는 거였어?!」", 1);
      await era.input();
      await digital.say_and_wait(
        "당연하죠, 마음만 담겨 있으면 충분하다구요. 게다가 음식을 버리는 건 모독이라구요!",
      );
      await digital.say_and_wait("이제 먹으면서 이야기 좀 나눠요!");
      await digital.say_and_wait([
        "으으으, 전 정말 행운아예요. 이렇게 같이 ",
        digital.uma_sex_title,
        "짱들에 대해 토론할 수 있는 동지를 만나다니……",
      ]);
      await digital.say_and_wait([
        "자자, ",
        callname,
        ", 최근 가장 밀고 계신 ",
        digital.uma_sex_title,
        "짱은…… 누구인가요?",
      ]);
      await era.printAndWait('聞くまでもない。');
      era.printButton("「자, 여기 초콜릿.」", 1);
      await era.input();
      await era.printAndWait("냉장고에서 초콜릿을 꺼냈다……");
      await digital.say_and_wait("오오오, 저군요.");
      await digital.say_and_wait('いええええ？ ちがう、チョコなの？');
      await digital.say_and_wait([
        "이, 이건 대체 무슨 박애 정신이죠?! 설마 이런 비주류 ",
        digital.uma_sex_title,
        "를 파고 싶어 하는 분이 계실 줄이야?",
      ]);
      await you.say_and_wait([
        '何言ってる。俺は君の ',
        callname,
        ' だ……それに、自分がマイナーだと思ってたのか……？ ウマ推しのファン数、低くないだろ？',
      ]);
      await era.printAndWait([
        "그 말을 들은 ",
        digital.get_colored_name(),
        "은 갑자기 말문이 막힌 듯 버벅거리기 시작했다.",
      ]);
      await digital.say_and_wait(
        'それは……実は私のウマ推し、デビュー前からファンは少なくなかった。前からずっと……同人誌を……',
      );
      await era.printAndWait([
        "어라? 그러고 보니 ",
        digital.get_colored_name(),
        "은 데뷔 전부터 어떤 방면에서 꽤 유명했다는 소문을 들은 적이 있는 것 같았다……",
      ]);
      await digital.say_and_wait([
        "하지만! ",
        callname,
        "의 그런 정신, 그것이야말로 오타쿠의 귀감입니다! 당신과 함께라면 10년이든 그보다 더 오래든, 매년 발렌타인을 같이 보낼 수 있을 것 같아요!",
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        "과 두런두런 이야기를 나누며 소란스러운 발렌타인을 보냈다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_palace
  ws_palace: (() => {
    const title = "세계의 여행자";
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} halo キングヘイロー
     */
    const f = async (digital, opera, tachyon, doto, halo) => {
      await digital.print_and_wait([
        digital.get_colored_name(),
        "은 여전히 도전을 멈추지 않으며, 훗날의 해외 원정을 위해 노력하고 있었다.",
      ]);
      await digital.print_and_wait([
        "단순히 승리를 위해서만이 아니라, 동지와 함께 더 많은 ",
        digital.uma_sex_title,
        "들을 만나기 위함이었다.",
      ]);
      await digital.print_and_wait(
        '下見のため、あまり知られていない便に乗った……',
      );
      await digital.print_and_wait("출발하기 직전……");
      await digital.print_and_wait("이런 이런, 꽤 낯익은 얼굴들이 많이 왔군요.");
      await digital.print_and_wait([
        halo.get_colored_name(),
        ", ",
        opera.get_colored_name(),
        ", ",
        doto.get_colored_name(),
        ", ",
        tachyon.get_colored_name(),
        "…… 그리고 쿠로후네까지?",
      ]);
      await digital.print_and_wait(
        "잠시 떠나서 해외 환경에 적응하려는 것뿐이니, 여행에 더 가깝다고 할 수 있겠지.",
      );
      await digital.print_and_wait("그런데도 이렇게 많은 사람들이 작별인사를 하러 오다니.");
      await digital.print_and_wait([
        digital.get_colored_name(),
        ", 정말 대단하네.",
      ]);
      await digital.say_and_wait([
        "그치만, 전 이제 더는 못 기다려요! 이국의 만남을, 동지와 함께 세계 각지의 ",
        digital.uma_sex_title,
        "짱들과 조우하고 싶다구요!",
      ]);
      await digital.print_and_wait([
        "세계의 여행자, ",
        digital.get_colored_name(),
        "은 지금도 여전히 달리는 중이었다.",
      ]);
    };
    f.title = title;
    return f;
  })(),
};
