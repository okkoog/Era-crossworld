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
    const title = 'メイクデビュー勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} hyac_sta ヒヤシンスステークス（着色名）
     */
    const f = async (digital, you, callname, hyac_sta) => {
      await era.printAndWait([
        'メイクデビュー、',
        digital.get_colored_name(),
        ' はこのレースで見事1着を取り、それから……',
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
      await digital.say_and_wait('……原点であり、頂点……');
      await digital.say_and_wait(
        '初めてのゲート、掴めないタイミング、絡み合う脚……',
      );
      await digital.say_and_wait(
        '汗が飛び、焦りで真っ白な頭。でも観客の歓声が消えたあと残るのは、掲示板の結果だけ……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' が、こんなに確かな感情を描けるなんて。',
      ]);
      await digital.say_and_wait(
        'あ！ 感動した！ 何もかも涙が出る、でしょ！ でしょ！',
      );
      era.printButton(
        '「そうだな。初めてのレース、メイクデビュー、おめでとう。」',
        1,
      );
      await era.input();
      await digital.say_and_wait([
        'あああ、走っているとき、デジは他の',
        digital.uma_sex_title,
        'ちゃんの感情にめちゃくちゃにされて、デジは……',
      ]);
      await digital.say_and_wait(
        'メイクデビューを甘く見てた！ メイクデビューは、誰もが勝者なんだ！ 誰もが！',
      );
      await digital.say_and_wait(
        'こんなに豊かな感情に挟まれたら、誰だって収穫だらけでしょ？',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は本当に嬉しそうだ。レース中の脚も、レース後の感想も、',
        digital.sex,
        'のレース好きが伝わってくる。',
      ]);
      await digital.say_and_wait([
        callname,
        '、今日のレースは入門でしょ！ これからまだたくさんある！ もっと',
        digital.uma_sex_title,
        'ちゃんに会える！',
      ]);
      await you.say_and_wait([
        'そうだ。先には、まだたくさんの',
        digital.uma_sex_title,
        'が待っている。',
      ]);
      await digital.say_and_wait(
        '最高！ 楽園の敷居を跨いじゃった、うっかり跨いじゃった！ 自分の領域じゃないと思ってた！',
      );
      await digital.say_and_wait([
        '次も、こういう',
        digital.uma_sex_title,
        'ちゃんたちを見たい！',
      ]);
      await you.say_and_wait('じゃあ次は芝はどうだ？');
      await digital.say_and_wait(
        'ん？ え、今回はダートで、次は芝……ごめん、調子に乗った。嬉しすぎて頭が九霄の外まで飛んでた。',
      );
      await digital.say_and_wait(
        'もう一度ダートを走って、この空気を感じたい！',
      );
      await era.printAndWait([
        '相談の末、次のレースは新年の ',
        hyac_sta,
        ' に決めた',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] hyac_sta_win
  hyac_sta_win: (() => {
    const title = 'ヒヤシンスS勝利';
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
      await digital.say_and_wait('ふ……は……デジ、やった……');
      await digital.say_and_wait([
        'ゴールを駆け抜けて、それから、見届けた。',
        digital.uma_sex_title,
        'ちゃんたちの輝きを！',
      ]);
      await digital.say_and_wait([
        'やっぱり少し意外だったかも！ ',
        digital.uma_sex_title,
        'ちゃんたちの走る覚悟が尊いと思ってたけど……',
      ]);
      await digital.say_and_wait([
        'でもきっと、',
        digital.uma_sex_title,
        'ちゃんたちがレースに託す願いのほうが深い……私が走り続ければ、',
        digital.couple_title,
        'がまぶしい理由が絶対わかる！',
      ]);
      await digital.say_and_wait('このまま、邪魔しない主義で推し続けよう！');
      await you.say_as_passer_by_and_wait('？？？', 'ううう……う……');
      await you.say_as_passer_by_and_wait('？？？', 'うああああああ！');
      await digital.print_and_wait([
        '少し離れたところから、ある',
        digital.uma_sex_title,
        'の号泣が聞こえた。',
      ]);
      await digital.say_and_wait([
        'あの',
        digital.uma_sex_title,
        '、さっきの……',
      ]);
      await digital.print_and_wait([
        '記憶が正しければ、',
        digital.sex,
        'はちょうど6着。掲示板の外だ。',
      ]);
      await you.say_as_passer_by_and_wait(
        '？？？',
        '掲示板……掲示板にも乗れなくて……重賞なんて、どうして……！',
      );
      await digital.print_and_wait([
        'ずっと',
        digital.uma_sex_title,
        'を見てきた ',
        digital.get_colored_name(),
        ' が、今はもう見つめられない。視線を外して、背を向けた。',
      ]);
      await digital.print_and_wait([
        '地下通路を通るあいだ、',
        digital.get_colored_name(),
        ' は他の',
        digital.uma_sex_title,
        'を避け続けた。いつもの距離ではなく、見ないように、わざと避けている。',
      ]);
      await digital.say_and_wait('……');
      await digital.print_and_wait([
        'それでも前に、2人の',
        digital.uma_sex_title,
        'がいた。さっきの2着と3着だ。',
      ]);
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' は避けようとして、それから……',
      ]);
      const cache = diamond_lord.name;
      diamond_lord.name = `${digital.uma_sex_title}A`;
      await diamond_lord.say_and_wait('ううう……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'ちがうちがう、2着だよ？ 何泣いてるの？',
      );
      await diamond_lord.say_and_wait(
        'だって、だって、先輩との勝負だったのに……ずっと、先輩と勝負して、それから、追い越したくて……',
      );
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '届いたじゃない。あんた、本当に強いよ。私もそろそろ枯れかけてるしね～',
      );
      await diamond_lord.say_and_wait([
        '……ずっと……先輩に勝てれば……私は……でも、',
        digital.sex,
        'は本当に、強い……手を伸ばしても届かなくて……',
      ]);
      diamond_lord.name = cache;
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        diamond_lord.get_colored_name(),
        '！ 頑張ったでしょ！ 全力だったでしょ！',
      ]);
      await diamond_lord.say_and_wait('でも……');
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        '私たちがどんな成績でも、トゥインクルシリーズは続いていく。待ってくれないんだから！',
      );
      await you.say_as_passer_by_and_wait(`${digital.uma_sex_title}B`, [
        'あんたは私より強い。それに、まだ伸びる。これから重賞に挑むでしょ！ G1に挑むでしょ！',
        digital.couple_title,
        'を見返してやりなよ！',
      ]);
      await you.say_as_passer_by_and_wait(
        `${digital.uma_sex_title}B`,
        'ウイニングライブ、一緒に行けるよね？',
      );
      await digital.print_and_wait([
        digital.uma_sex_title,
        'Bは手を上げて、仲間の涙を拭った。',
      ]);
      await diamond_lord.say_and_wait('！');
      await digital.print_and_wait([
        digital.sex,
        'は流れた鼻水を強くすすって、力いっぱい頷いた。',
      ]);
      await digital.print_and_wait([
        digital.couple_title,
        'が手をつないで遠ざかるのを見て、',
        digital.get_colored_name(),
        ' は今度ばかり、「尊い」なんて言葉が出なかった。',
      ]);
      era.drawLine();
      await digital.say_and_wait('……');
      await you.say_and_wait('デジ、大丈夫か？');
      await digital.say_and_wait('嘘だ……不干渉だなんて……');
      await digital.say_and_wait('そんなの、無理だよ。');
      await digital.say_and_wait(
        '出たら、必ず勝者がいて、必ず敗者がいる……負けても尊い、全員が勝者だなんて、よく言えたものだ……',
      );
      era.printButton(
        '「レース場に上がって築いた繋がりが、君たちをこんなに尊くする。ずっと知ってたことだろ？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        digital.get_colored_name(),
        ' は今回のレースで、',
        digital.uma_sex_title,
        'がなぜ尊く、なぜ偉大なのか、その一端を覗けたようだ。',
      ]);
      await era.printAndWait([
        'だが',
        digital.sex,
        'は突然悟った。相手として走りながら、自分を観客だと思い、無情に1着を奪っていたことを。',
      ]);
      await era.printAndWait('それは、かなり失礼だ。');
      await era.printAndWait([
        'だから ',
        digital.get_colored_name(),
        ' は、ウイニングライブのあと、トレーニング室に戻ると……',
      ]);
      await digital.say_and_wait([
        callname,
        '、この先の話がしたい。私らしくないことを言うけど、いい？',
      ]);
      await you.say_and_wait('もちろん。');
      await digital.say_and_wait('どうしても、G1に出たい。');
      await digital.say_and_wait(
        'ここにいるみんなに対して、熱い鉄板の上で土下座しても足りない失礼をした気がする',
      );
      await digital.say_and_wait(
        'なら、やらなきゃ。出て、G1を勝って、それからみんなに、デジは強いって思わせる。',
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
        'それから、確かめたい。',
        digital.uma_sex_title,
        'ちゃんたちが、G1にどう向き合ってるのか！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は、次のレースを5月前半の ',
        nhk_cup,
        ' に決めた。',
      ]);
      await digital.say_and_wait([
        '私は、出走する。それから——',
        digital.couple_title,
        'の分も一緒に！',
      ]);
      await era.printAndWait([
        '偶然の出来事。だが結果は偶然じゃない。勝ちと負け、そこに込められた悲しみが——',
        digital.get_colored_name(),
        ' の未来を押し出した。',
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
        'このレースは、前の芝のレースと違うようで同じ。',
        true,
      );
      await digital.say_and_wait('うおおおおおおお！！！！', true);
      await digital.say_and_wait(
        '舞い上がる砂塵……見えない……でも輝きが……透けてくる……',
        true,
      );
      await digital.say_and_wait(
        [
          'まったく違うコースでも……',
          digital.couple_title,
          'は、変わらない輝きを持ってる……',
        ],
        true,
      );
      await digital.say_and_wait(
        [
          'ここで、',
          digital.couple_title,
          'の心を裏切るわけにはいかない！！！！',
        ],
        true,
      );
      await digital.say_and_wait('はあああああああ！', true);
      era.drawLine();
      await era.printAndWait([
        '完走した。',
        digital.get_colored_name(),
        ' は本当に見事だ。環境がまったく違うコースでも、これだけの成績を残した。',
      ]);
      await you.say_and_wait('どんな感じだった？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、以前とはまったく違う、真剣な顔をしている。',
      ]);
      await digital.say_and_wait([
        'デジ、',
        digital.get_colored_name(),
        '、わかった。',
      ]);
      await you.say_and_wait('うん。');
      await digital.say_and_wait([
        '子どものころから、ずっと私を夢中にさせてきた',
        digital.uma_sex_title,
        'ちゃんの尊さ……',
      ]);
      await digital.say_and_wait([
        'わかった。今日『',
        japa_dir,
        '』を走り終えて、わかった。',
      ]);
      await digital.say_and_wait([digital.uma_sex_title, 'ちゃん、かわいい。']);
      await digital.say_and_wait([digital.uma_sex_title, 'ちゃん、尊い。']);
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
      await you.say_and_wait('はは、定番の感想だな。');
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
        'そういう人は、どこに置いてもまぶしい。まして一緒に走ったら？',
      );
      await digital.say_and_wait([
        digital.couple_title,
        'は全力でつながり、助け合う……時には同じ勝利を争う。でも争いを恐れず、ずっと前を見てる。',
      ]);
      await digital.say_and_wait('全部が落ち着いたら、一緒にべったり！');
      await you.say_and_wait('まあ、また定番展開だな。');
      await digital.say_and_wait(
        'この定番展開だからこそ、私の魂がこんなに揺れるんだよ！',
      );
      await digital.say_and_wait(
        'デビュー前はずっと思い上がってた……でも結局、今日になってやっと……',
      );
      await digital.say_and_wait('あわわわ、本当に……');
      await digital.say_and_wait([
        call_15,
        ' と ',
        call_58,
        ' のあのレースも、今振り返ると、やっとわかる。',
      ]);
      await era.printAndWait([
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の宝塚での輝きに、',
        digital.get_colored_name(),
        ' はひどく憧れていた。',
      ]);
      await era.printAndWait([
        'そして今、',
        digital.get_colored_name(),
        ' もその光に触れられた。',
      ]);
      await digital.say_and_wait(
        'このままじゃ……だめ！ デジ！ 動き出さないと！',
      );
      await digital.say_and_wait(
        '私だって、覚悟を決めて、純粋な気持ちでゲートの前に立てるなら！',
      );
      await digital.say_and_wait([
        callname,
        '……私……私でも……そんな存在になれる?!',
      ]);
      era.printButton('「もちろん！」', 1);
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
        'いちばん下から這い上がってきた ',
        halo.get_colored_name(),
        '。',
        digital.get_colored_name(),
        ' は',
        digital.sex,
        'の生存戦略を、最初から最後まで見届けた。',
      ]);
      await halo.say_and_wait([
        'どう、',
        h_call_d,
        '？ わたくしとこの大事なレースを走って、わかりましたわね？',
      ]);
      await halo.say_and_wait([
        halo.get_colored_name(),
        ' がどんな',
        digital.uma_sex_title,
        'か。',
      ]);
      await digital.say_and_wait('は……はい……');
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' に「',
        digital.uma_sex_title,
        'とは何か」を教えられた ',
        digital.get_colored_name(),
        ' は、',
        mile_cha,
        ' を取ったあと、泣きじゃくった。',
      ]);
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' の存在は、それほど',
        digital.sex,
        'を感動させた。',
      ]);
      await halo.say_and_wait(
        'どうしましたの？ ずっと泣いていては、話せませんわよ。',
      );
      await digital.say_and_wait('全身……輝きを浴びた……');
      await digital.say_and_wait([
        'それから、わかった。',
        digital.uma_sex_title,
        'として生きるって、どういうことか。',
      ]);
      await digital.say_and_wait(
        '不屈の走りに宿る魂！ 本能！ 準備が足りなくても、一流の気概を貫く！',
      );
      await digital.say_and_wait(
        '前の私は全然わからなかった。でも今はわかった。走ればいい！ 弱音だって、走りながら言えばいい！',
      );
      await digital.say_and_wait([
        '今の私は、もっと',
        digital.uma_sex_title,
        'が好きになった！',
      ]);
      await halo.say_and_wait([
        'ふふ、あなたは本当に',
        digital.uma_sex_title,
        'が好きですわね。',
      ]);
      await halo.say_and_wait([
        h_call_d,
        '、もっとたくさんの',
        digital.uma_sex_title,
        'と走りなさい！ すべてを吸収して、それから……',
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
        '、私の同志よ。',
        call_61,
        ' から、かけがえのないものを受け取った。',
      ]);
      await digital.say_and_wait([
        'もっと多くの',
        digital.uma_sex_title,
        'と走らないと。私は何をすればいい……',
      ]);
      await era.printAndWait('それなら、いっそ……');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' は、これからもっと多くのG1に出ると決めた。',
      ]);
      await digital.say_and_wait([
        'そうそう、それからそのあと、',
        call_15,
        ' と ',
        call_58,
        ' に挑む！',
      ]);
      await era.printAndWait([
        'ずっと仰ぎ見るだけだった ',
        digital.get_colored_name(),
        ' が、やっと勇気を出して、かつての推しに挑もうとしている。',
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
        'ゴールを駆け抜けた ',
        digital.get_colored_name(),
        ' は、足元までふらついている。',
      ]);
      await digital.say_and_wait(
        'は……ふ……よし……残りエネルギーゼロ……推しの余裕もない……使った、全力……！',
      );
      await digital.say_and_wait('あああ、陽射し……まぶしい……空……遠い……');
      await digital.say_and_wait('あ……これが……');
      await era.printAndWait('（どん！）');
      await era.printAndWait([digital.get_colored_name(), ' が倒れた！']);
      era.drawLine();
      await era.printAndWait([
        '幸い、駆け付けた医師の判断では、',
        digital.get_colored_name(),
        ' は運動のしすぎだ。休めば大丈夫。',
      ]);
      await era.printAndWait([
        '今回、',
        digital.get_colored_name(),
        ' は本当に全力を出した。これまでと違い、今回の ',
        digital.get_colored_name(),
        ' は、選手としての信念を背負っていた。',
      ]);
      await era.printAndWait([
        'だから、力を使い切ったあと、',
        digital.get_colored_name(),
        ' は興奮しすぎて倒れた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' を背負って休憩室へ戻った。それから……見覚えのある2人を見つけた。',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        '。',
      ]);
      await opera.say_and_wait([o_call_di, '？ しっかりしたまえ！']);
      await you.say_and_wait(['大丈夫、', digital.sex, 'は休めば治る。']);
      await era.printAndWait([
        '話しながら、',
        digital.get_colored_name(),
        ' を休憩室のソファに寝かせた。',
      ]);
      await era.printAndWait([
        'ほどなく、',
        digital.get_colored_name(),
        ' は目を開けた。',
      ]);
      await digital.say_and_wait('ん……ん……え?!');
      await digital.say_and_wait([call_15, ' と ', call_58, '?! どうして？']);
      await you.say_and_wait([
        digital.couple_title,
        'が心配して、休憩室まで見に来た……というより、最初から休憩室にいた。',
      ]);
      await digital.say_and_wait('急すぎない？');
      await opera.say_and_wait([
        '急ではない！ ',
        o_call_do,
        ' が、あらゆる舞台を舞い回る踊り手がいると聞いてな。新しい役者の誕生を鑑賞するため、私が来たのだ。',
      ]);
      await doto.say_and_wait([
        'ううう、',
        do_call_di,
        ' の助言、本当に感謝してる！ だから、このレースも応援しに来たの！',
      ]);
      await opera.say_and_wait(
        '試合前から覇王の気配を隠し、通りすがりの観客を装って研究していたのだ！',
      );
      await doto.say_and_wait(
        '私みたいなのがパドックで話しかけたら、影響しちゃうと思って……だから……',
      );
      await digital.say_and_wait(
        'いやいやいいや！ 影響なんてないよ、むしろ光栄……最初の違和感はこれだったのか。',
      );
      await digital.say_and_wait([
        'それから、だんだんわかってきた。',
        call_15,
        ' と ',
        call_58,
        '、なんでこんなにまぶしく華やかなのか……',
      ]);
      await digital.say_and_wait('やっと……少し……近づけた……');
      await opera.say_and_wait(
        'ははは！ そうか？ だがやはり、私の華麗は生まれつきだからな！',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' をかなり気に入っている。一方 ',
        doto.get_colored_name(),
        ' は、',
        digital.get_colored_name(),
        ' の励ましに感謝している。',
      ]);
      await you.say_and_wait(
        'ここに来たのは、他にも言いたいことがあったんだろ？',
      );
      await era.printAndWait([
        'それから、',
        digital.couple_title,
        'は宣言した……',
      ]);
      await opera.say_and_wait([
        '私と ',
        o_call_do,
        ' は、次の ',
        takz_kin,
        ' で初の共演だ！',
      ]);
      await doto.say_and_wait(
        'わ、私もやっとG1に出られる。隅っこの、誰も気にしない場所だけど……',
      );
      await digital.say_and_wait(
        '！ 初めてのレヴュー、わかった！ これは見に行かないと！',
      );
      await opera.say_and_wait(
        'だが、君にも相応の演目があるだろう？ その全能の才能を見せてみせろ！',
      );
      await opera.say_and_wait(
        '君はまだダートG1を勝っていない。それがなければ、まだ不完全だ、そうだろう？',
      );
      await you.say_and_wait([
        '次に合いそうなダートG1は、夏合宿中の ',
        japa_dir,
        ' だ。',
      ]);
      await opera.say_and_wait([
        'さすがは ',
        callname_15,
        '！ では、',
        digital.get_colored_name(),
        '、我らの招待を受けるか？',
      ]);
      await digital.say_and_wait('受ける！');
      await era.printAndWait([
        'こうして',
        digital.couple_title,
        'は約束した。',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' は ',
        takz_kin,
        ' でいちばん盛大なレースを届け、',
        digital.get_colored_name(),
        ' は ',
        japa_dir,
        ' で、全能選手としての腕を見せる。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] oc_95_1
  oc_95_1: (() => {
    const title = '初詣';
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
        '神さま！ 今年はグッズはいらないから、ライバルをください！',
      );
      await era.printAndWait([
        'なんてことだ！ ',
        digital.get_colored_name(),
        ' にこんなことを言わせるとは、',
        digital.sex,
        'は何に刺激された?!',
      ]);
      await you.say_and_wait('デジ？ どうして急にそんなことを？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に話した。少し前、',
        opera.get_colored_name(),
        ' がはっきり言った。',
        digital.get_colored_name(),
        ' にはライバルが足りない、と。',
      ]);
      await digital.say_and_wait([
        'うん、前に ',
        call_15,
        ' が言ってた通り、今の私がまだ強くない理由は……',
      ]);
      await era.printAndWait('ライバル。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' にはライバルが足りない。トレーナーとして、',
        you.get_colored_name(),
        ' は、ライバルが',
        digital.uma_sex_title,
        'にどれだけ動力と励ましを与えるか知っている。',
      ]);
      await era.printAndWait([
        'だが ',
        digital.get_colored_name(),
        ' の場合は特殊すぎる。',
        digital.sex,
        'が持つあの性質、',
        digital.uma_sex_title,
        'への純粋な好きも、ライバルに近い効果を',
        digital.sex,
        'に与える。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' に、本当にライバルは必要なのか？',
      ]);
      await digital.say_and_wait(
        'ううう、前は出しゃばりたくなくて、ライバルどころか、レース場でも相手とほとんど話してなかった。そのツケが来たのか……',
      );
      await era.printAndWait([
        'でもこの機会に、',
        digital.get_colored_name(),
        ' が他の',
        digital.uma_sex_title,
        'と交渉してみるのも悪くない。',
      ]);
      await you.say_and_wait('じゃあ、ライバルを探しに行こう！');
      await era.printAndWait('それで……');
      era.drawLine();
      await shakur.say_and_wait('は？ ライバル？ 早く寝ろ。');
      await digital.say_and_wait(
        '待ってほしいのだが！ 同期だし、ちょうどよくない？',
      );
      await shakur.say_and_wait([
        'なあ、',
        s_call_d,
        '、他は知らんが、少なくとも俺は向いてない。以上。',
      ]);
      era.drawLine();
      await falcon.say_and_wait(
        'え？ ライバル？ アイドルのイメージにはあんまり合わないかも～',
      );
      await digital.say_and_wait(
        'いやいや、アイドルにも、そういう相手がいて、対決しながら助け合う感じ、あるでしょ？',
      );
      await falcon.say_and_wait([
        'あはは、ファル子は',
        digital.uma_sex_title,
        'の小さなアイドルしかできなさそう。そういうの向かない……でも、',
        f_call_d,
        ' の誘い、すごくうれしいよ！',
      ]);
      era.drawLine();
      await tachyon.say_and_wait([
        'ふんふん……ライバルか……だが ',
        t_call_d,
        '、君は研究対象としては、違うな。私の理念に合わない！',
      ]);
      await digital.say_and_wait('……そう。');
      await era.printAndWait([
        'いろんな理由で何度も断られた ',
        digital.get_colored_name(),
        ' は、',
        digital.sex,
        'でも耳が少し垂れていた。',
      ]);
      await tachyon.say_and_wait([
        'そんなに沈むな、',
        t_call_d,
        '。それと君、',
        callname_32,
        '、わかっているはずだ。',
        t_call_d,
        ' のライバルになれる人選を。',
      ]);
      await era.printAndWait([
        '独特の目で ',
        you.get_colored_name(),
        ' を見つめ、',
        tachyon.get_colored_name(),
        ' は顎を少し上げて ',
        you.get_colored_name(),
        ' に合図した。',
      ]);
      await digital.say_and_wait([
        'えええ！ ',
        callname,
        '、知ってるの？ 私のライバルになれる人選？',
      ]);
      await you.say_and_wait('たしかにそうだ。');
      await digital.say_and_wait('じゃあ最初から言ってくれればよかったのに？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は焦って、',
        you.get_colored_name(),
        ' を叩きそうになった。',
      ]);
      await tachyon.say_and_wait([
        'どうやら、あちらにも見定めがあるらしい。',
        t_call_d,
        '、ここから先は退屈な解答だ。さらば。',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は場を見て、気の利いたタイミングで離れた。',
      ]);
      await you.say_and_wait(
        '実は、君が探し始めてからわかった面もある。もう一方で、俺にも知りたいことがあって……',
      );
      await you.say_and_wait(
        'だから、最終的な結論はこれだ。君のライバルは、みんなだ！',
      );
      await digital.say_and_wait(
        'みんな……！ つまりDD箱推しでもいい?! 待って、つまり前の……',
      );
      await era.printAndWait([
        'そうだ。今日 ',
        digital.get_colored_name(),
        ' が探している人を見て思いついた。',
        digital.get_colored_name(),
        ' が探していたのは、芝が得意な子もダートが得意な子もいる。最初からそうだった……',
      ]);
      await you.say_and_wait('一人だけ選ぶ、なんてできない。');
      await you.say_and_wait(
        '誰を選んでも、デジみたいに二つのコースを走れる選手はいない。でも、もし……',
      );
      await digital.say_and_wait('みんな……');
      await you.say_and_wait('そうだ。');
      await digital.say_and_wait('はははは、まさか、またみんななんだ。');
      await digital.say_and_wait([
        call_61,
        ' の言葉、『もっと多くの',
        digital.uma_sex_title,
        'と一緒に走る』、絶対達成する！',
      ]);
      await digital.say_and_wait(
        'みんなをライバルにするなんて、考えると欲張りだな……みんなから、何をもらえるんだろう？',
      );
      era.print([you.get_colored_name(), ' の決定：']);
      era.printButton('養分（スタミナ+20）', 1);
      era.printButton('友情パワー（全能力+5）', 2);
      era.printButton('多様性（スキルPt+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait('言うなら、養分だな');
          await digital.say_and_wait([
            'そう！ ',
            digital.uma_sex_title,
            'ちゃんたち、それぞれのおいしさが、毎回元気をくれる！',
          ]);
          await digital.say_and_wait(
            '毎日、新鮮な糧食！ これ以上の燃料はない！',
          );
          await era.printAndWait([
            'この先も',
            digital.uma_sex_title,
            'たちが、',
            digital.get_colored_name(),
            ' にもっと活力をくれるだろう。',
          ]);
          break;
        case 2:
          await you.say_and_wait('そう、友情だ！ POWER！');
          await digital.say_and_wait([
            'おほほ、',
            digital.uma_sex_title,
            'ちゃん一人ひとりが少し力をくれれば、私は無敵！',
          ]);
          await digital.say_and_wait(
            'ふんふん、うははは、考えただけで、全身に力が満ちてくる！',
          );
          await era.printAndWait([
            '一人一ウマコイン、というのとは少し違う。',
            digital.get_colored_name(),
            ' は',
            digital.uma_sex_title,
            'から力をもらって、もっと強くなれる。',
          ]);
          break;
        case 3:
          await you.say_and_wait('多様性、だろ！');
          await digital.say_and_wait([
            'もちろん！ ',
            digital.uma_sex_title,
            'ちゃんの走りの多様性は、普段決めてる走法じゃ枠に収まらない！',
          ]);
          await digital.say_and_wait(
            'UMAMO図鑑を集めるみたいに、全部記録する！',
          );
          await era.printAndWait([
            'コンプ勢か。',
            digital.get_colored_name(),
            ' はこのゲームで、きっとスキルを得られるだろう！',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_5
  race_end_5: (() => {
    const title = 'レース入着';
    /** @param {CharaTalk} digital アグネスデジタル */
    const f = async (digital) => {
      await digital.say_and_wait(
        'うむうむ、なるほど、君たちの輝きは、まだ少し遠い……',
      );
      await era.printAndWait([
        '勝てなかった ',
        digital.get_colored_name(),
        ' は、レース後も大きな落ち込みを見せない……',
      ]);
      await digital.say_and_wait(
        'うっ……やっぱり、ファンとしてここにいるべきじゃなかった……',
      );
      await era.printAndWait('おいおい。');
      era.printButton(`「今回、${digital.uma_sex_title}を楽しめたか？」`, 1);
      era.printButton(
        `「次はいちばん前で${digital.couple_title}を見よう！」`,
        2,
      );
      if ((await era.input()) === 1) {
        await digital.say_and_wait('え！ そうだ！ デジ、可！');
        await era.printAndWait('どういう意味だ？');
      } else {
        await digital.say_and_wait([
          'もっと前なら、絶対……！ もっと美しい',
          digital.uma_sex_title,
          'ちゃんたちを見られる！',
        ]);
        await era.printAndWait([
          'とにかく、',
          digital.get_colored_name(),
          ' は元気を出した！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] race_end_win
  race_end_win: (() => {
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.say_and_wait(
        'かわわわわ！ どの子もいちばん尊い光を放ってる！',
      );
      await era.printAndWait([
        'レース後の ',
        digital.get_colored_name(),
        ' は、大レースを走ったとは思えない元気さで、いつもの熱を見せている。',
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        'ちゃんと一緒に走れた……本当に嬉しい……！',
      ]);
      await digital.say_and_wait('しかも1着！ 感謝して受け取るよ！');
      era.printButton('「君がいちばん輝いてたよ！」', 1);
      era.printButton('「次のレースも頑張ろう！」', 2);
      if ((await era.input()) === 1) {
        await digital.say_and_wait([
          'え？ そ、そんな、こんなに',
          digital.uma_sex_title,
          'がいるのに、私は空気みたいな存在……私を見てたの？',
        ]);
        await era.printAndWait('この照れも、もう何度も見ている。');
        await you.say_and_wait('当然だ。君は俺の愛馬だ！');
        await digital.say_and_wait('ううう……');
        await digital.say_and_wait('褒められると、落ち着かないね……');
        await era.printAndWait('毎回見ても飽きない。');
      } else {
        await digital.say_and_wait(
          'よし！ 次もこの勢いで、もっと強くなる！ Power！',
        );
        await digital.say_and_wait([
          'もっと強くなって、もっと激しいレースで、もっと輝く',
          digital.uma_sex_title,
          'ちゃんを見る！',
        ]);
        await era.printAndWait('その勢いで！ 続けよう！');
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
          '勝ちを確信した',
          digital.uma_sex_title,
          'ちゃん、張り詰めた',
          digital.uma_sex_title,
          'ちゃん、気にしてないようで本気の',
          digital.uma_sex_title,
          'ちゃん……ふ……へ……',
        ]),
      () =>
        digital.say_and_wait([
          'いやいや、いくらなんでも私みたいな',
          digital.uma_sex_title,
          'がレース場に立つのは変でしょ？',
        ]),
    ];
    if (era.get('mark:19:淫纹') > 0) {
      buffer.push(() =>
        digital.say_and_wait(
          'デジたんの勝負服、お腹出るやつ?! やばいやばい、隠す？ どう隠す？ 隠せる？',
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
      await era.printAndWait('どんどんどんどん——');
      await era.printAndWait([
        '低い脚音の中、',
        digital.uma_sex_title,
        'たちが観客席に迫る。このとき、意外にも外を走っていたのは——',
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
        ' が積み上げてきた知識、スキル、感情が、今回いちばんいい条件を ',
        digital.get_colored_name(),
        ' に与えた。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は泥の芝の上で、まるで実家に帰ったようだ。進路選択も最後の加速も、トレーナーの ',
        you.get_colored_name(),
        ' から見て、足りないところはまったくない。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は揺るぎなく勝利を取った。',
      ]);
      era.println();
      await digital.say_and_wait('へへ……ごほごほ……あははは……');
      await digital.say_and_wait('そう、私の勝利でしょ。');
      await you.say_and_wait('そうだ、君の勝利だ、デジ。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は振り返り、観客席を向いた。',
      ]);
      await digital.say_and_wait('うおおおおおおおおおおおおお！');
      await you.say_as_passer_by_and_wait(
        '観客席',
        'うおおおおおおおおおおおおお！',
      );
      await digital.say_and_wait('へわああああああああああ！');
      await you.say_as_passer_by_and_wait(
        '観客席',
        'へわああああああああああ！',
      );
      await digital.say_and_wait('い！ へ！ お！ おおおおおお！');
      await you.say_as_passer_by_and_wait(
        '観客席',
        'い！ へ！ お！ おおおおおお！',
      );
      await era.printAndWait('はははは、叫んで喉が少し嗄れた。');
      await era.printAndWait([
        'しかも普通の名前コールと違う。さすが ',
        digital.get_colored_name(),
        ' らしい。',
      ]);
      await era.printAndWait([
        '両手を大きく開いて ',
        you.get_colored_name(),
        ' の前まで走り、柵越しに ',
        you.get_colored_name(),
        ' を抱き上げた。',
      ]);
      await digital.say_and_wait([callname, '！ 未知だ、未知の景色だ！']);
      await digital.say_and_wait(
        'ステージの上でコールの力を感じる！ この感覚は本当に比類ない！',
      );
      await you.say_and_wait(
        'ああ！ これはデジだけのコールだ、唯一無二のコールだ！',
      );
      await digital.say_and_wait(
        'クロフネ……勝利を、あの二人から奪ってきたよ……',
      );
      await era.printAndWait([
        digital.sex,
        'が悔恨を抱いていようと悲しみを抱いていようと、このレースを見れば、',
        digital.sex,
        'も、きっと救われるだろう。',
      ]);
      await digital.say_and_wait(
        '私一人じゃ、できなかった——ずっとそう思ってた。だから推しに願いを託した……',
      );
      await digital.say_and_wait('でも……');
      era.printButton('「俺の一番推しは、君だぞ！」', 1);
      await era.input();
      await digital.say_and_wait([
        'あははは、えへへへ……',
        callname,
        '、今それを言うなんて、本当に……私、私……',
      ]);
      await digital.say_and_wait([
        'さあさあ！ サービスだ！ そうそう、ファンサービス！ ',
        callname,
        '、尻尾の毛が欲しい？',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は嬉しすぎて、少し意味不明なことを言い始めている。',
      ]);
      era.printButton('「表彰台へ行こう、みんなが待ってる。」', 1);
      await era.input();
      await digital.say_and_wait('おおお、無礼にもほどがある、忘れかけてた！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を柵のこちらへ運び、二人で表彰台へ来た。',
      ]);
      era.println();
      await digital.say_and_wait([
        'どどどど、どうも！ 私は ',
        digital.get_colored_name(),
        '！ 結局私は、',
        digital.uma_sex_title,
        'ちゃんが好きな……',
      ]);
      await digital.say_and_wait([
        '私はただ、',
        digital.uma_sex_title,
        'ちゃんのお尻……いや、尻尾を追って、ここに来ただけ……',
      ]);
      await digital.say_and_wait([
        'わかる?! この感動!? 最初の私は、普通の',
        digital.uma_sex_title,
        'ちゃんですらなくて、ただのファンだったんだよ！',
      ]);
      await digital.say_and_wait(
        'でも、この輝きに混ざれて、この尊景のいちばん前でゴールできたこと、本当に……感謝してもしきれない……',
      );
      await digital.say_and_wait(
        '勝てたのは、もう私一人の成果じゃない。出会ったすべての人の結晶だ。',
      );
      await digital.say_and_wait([
        '一路の',
        digital.uma_sex_title,
        'ちゃん、最初は自分にいるはずがないと思ってたファン、それから ',
        callname,
        '！',
      ]);
      await digital.say_and_wait('今日、勝たせてくれたのは、みんなだ。');
      await digital.say_and_wait('感謝……本当に、すごく、感謝……');
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
        '見た?! 颯爽とした短髪、猛然とスパートするときの揺れ……',
      );
      await digital.say_and_wait('あの、脚に合わせて揺れる袋……');
      await digital.say_and_wait(
        'それと、今日は場にいられないクロフネ。いつか必ず、一緒にダートを走りたい……',
      );
      era.println();
      await era.printAndWait([
        '話の匣が開いて、',
        digital.get_colored_name(),
        ' がまだ話しているとき……',
      ]);
      await you.say_as_passer_by_and_wait('スタッフ', [
        digital.get_colored_name(),
        ' のトレーナーさん、盛り上がっているところ申し訳ありません……ウイニングライブが……',
      ]);
      await era.printAndWait([
        'ああああ、うつむいて ',
        digital.get_colored_name(),
        ' に何度か声をかけるが、',
        digital.sex,
        'はまったく気づいていない。',
      ]);
      await era.printAndWait('無理やり連れていくしかないな。');
      await digital.say_and_wait(['おいおいおい、', callname, '？']);
      await digital.say_and_wait('待って、せめてもう一言、もう一言だけ——');
      await digital.say_and_wait([
        digital.uma_sex_title,
        'は——最——高——だ——！！！！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_42
  we_42: (() => {
    const title = 'マイルCS観戦';
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
        ' はまだデビュー1年目。出たいレースがあっても、選べる幅は少ない。だが他の',
        digital.uma_sex_title,
        'たちにとっては、今がいちばん忙しい時期だ。',
      ]);
      await era.printAndWait([
        '今回 ',
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' が見に来たのは ',
        mile_cha,
        '。',
      ]);
      await era.printAndWait([
        'このレースには、',
        digital.get_colored_name(),
        ' の激推し',
        digital.uma_sex_title,
        'のひとり——',
        halo.get_colored_name(),
        ' も出走する。',
      ]);
      await digital.say_and_wait([callname, '！こっちこっち！']);
      await era.printAndWait([
        'いい場所を取った ',
        digital.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' に手を振る。',
        you.get_colored_name(),
        ' はなんとか割り込んだ。',
      ]);
      await digital.say_and_wait(['もうすぐ始まるよ！ ', call_61, ' だよ！']);
      await era.printAndWait('それから……');
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
        '2着か。最近の ',
        halo.get_colored_name(),
        ' の成績からすれば、かなりいい。',
      ]);
      await halo.say_and_wait(
        '全国各地の私のファンの皆さま、勝利は逃してしまいましたが……',
      );
      await halo.say_and_wait(
        'このKing、必ず縛りを打ち破ります。これからも短距離・マイルの道を歩き続けます。それがKingの新しい路線ですわよ！ お！ ほほほ！',
      );
      await digital.say_and_wait(
        'うおおおお……本当に、万分の感動！ 新しい路線を選ぶなんて、どれだけの勇気、どれだけの覚悟がいるか！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は感動で泣きじゃくり、',
        you.get_colored_name(),
        ' に ',
        halo.get_colored_name(),
        ' の経歴を話す。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' はもともと自分の才能を証明したくて、クラシック競走にこだわっていた',
        digital.uma_sex_title,
        'だった。だが今年',
        digital.sex,
        'は路線を変え、目標を立て直した。',
      ]);
      await digital.say_and_wait(
        'どっちの路線だって、自分の強さを証明できるんだよ！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' のデビュー後、',
        digital.get_colored_name(),
        ' の見方も前とは大きく違って、選手の立場からレース場の内と外を味わえるようになった。',
      ]);
      await era.printAndWait([
        halo.get_colored_name(),
        ' の努力が報われるのを期待していたからこそ、',
        digital.get_colored_name(),
        ' は現地観戦に来て、',
        halo.get_colored_name(),
        ' が苦節を実らせたとき、',
        digital.sex,
        'は会場の誰より大きな声で泣いた。',
      ]);
      era.drawLine({ content: '帰り道' });
      await era.printAndWait([
        '学園のそばの小川沿いで、川辺のダートをうつむいて走っている',
        digital.uma_sex_title,
        'を見つけた。',
      ]);
      await digital.say_and_wait(['おおお！ ', call_58, ' だ……']);
      await era.printAndWait([
        doto.get_colored_name(),
        ' は少し落ち込んでいるようで、それでもここで走っている……',
      ]);
      await era.printAndWait([
        'うん……',
        doto.get_colored_name(),
        ' は、もともとこういう子だったっけ？',
      ]);
      await era.printAndWait([
        doto.get_colored_name(),
        ' は最近成績が振るわない。トレーナーの ',
        you.get_colored_name(),
        ' はよくわかっている。',
        doto.sex,
        'はまだ本格化の時期ではない。だが',
        doto.sex,
        '自身は、それに気づいていないようだ。',
      ]);
      await digital.say_and_wait(
        '本格化……自分で知らないと、やっぱり苦しいよね……',
      );
      await digital.say_and_wait([
        '前の私なら、',
        call_58,
        ' の努力しか見えなかったと思う。でも今の私は……',
      ]);
      await digital.say_and_wait('少なくとも、これを知ってると安心できるよ……');
      await you.say_and_wait(['どうした、声をかけてやらないのか？']);
      await digital.say_and_wait(
        'え？ おいおいおい……私は一介のファンだよ？ ファンがアイドルに意見なんてできないよ！ マネージャーに追い出される！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は助けたいのに、出過ぎなんじゃないかとためらっている。',
      ]);
      await digital.say_and_wait(
        '現実的に言うと、経営がうまくいってないラーメン屋を見て、店主に「まだ時期じゃないですよ」って慰めるようなもんでしょ?!',
      );
      await you.say_and_wait(
        'いやいや、これは根拠がある話だ……それにデジ、まだ自分をファンだと思ってるのか？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' に言い聞かせる。もうファンだけじゃない。選手としてレース場に立っている。',
      ]);
      await digital.say_and_wait([
        'あ、うん、まあ……デビューはしたけど、',
        call_58,
        ' との溝は越えられないよ……',
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
      await era.printAndWait([digital.get_colored_name(), ' はうつむいた。']);
      await digital.say_and_wait(
        'うう……そうなんだけど、今すぐ推しに話しかけるのは、まだちょっと……',
      );
      await digital.say_and_wait(
        'なんだか、とんでもないことを考えてる気がする……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、それでも ',
        doto.get_colored_name(),
        ' を助けたいと決めた。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は土手の柵を飛び越え、斜面を滑ってドトウの前に現れた。この登場の仕方、すごいな。',
      ]);
      await digital.say_and_wait([
        'あ、あ、あ、あの！ ',
        call_58,
        '！ ちょっと話してもいい？',
      ]);
      await doto.say_and_wait('ええええ、な、なに？');
      await digital.say_and_wait('本格化、知ってる?!');
      await doto.say_and_wait('えええ？ それって何？');
      await digital.say_and_wait('いわゆる本格化っていうのは……');
      await era.printAndWait('岸から見ていれば、大丈夫だろう。');
      await digital.say_and_wait('それから本格化の時期は、だいたい……');
      await era.printAndWait('うん、かなり詳しいな。');
      await digital.say_and_wait(
        'そうそう、この本格化の時期に鍛えたいなら、足元に注意して……',
      );
      await era.printAndWait(
        'おお、トレーナー資格試験でもあまり触れない内容だ。',
      );
      await digital.say_and_wait(
        '……本格化の前の期間、鍛えても無駄ってわけじゃない。',
      );
      await digital.say_and_wait(
        'このときに太ももをしっかり鍛えておけば、本格化のあいだに一気にぐんと伸びるよ！',
      );
      await era.printAndWait([
        'いや、これは最近の研究まで踏み込んでる。',
        you.get_colored_name(),
        ' の記憶では、この内容はつい先日『トレーナー月刊』に載った研究だ……',
      ]);
      era.drawLine({ content: 'トレーニング室に戻ると' });
      await digital.say_and_wait([
        'わわわわ！ やらかした！ 現実で、目の中に結像した ',
        call_58,
        '……つい……',
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
        ' も、わかっているはずだ。',
      ]);
      await you.say_and_wait([
        'でも、ドトウ',
        digital.sex,
        'は収穫が大きかったんじゃないか？',
      ]);
      await era.printAndWait([
        '……',
        digital.get_colored_name(),
        ' は胸を押さえるだけだった。',
      ]);
      await era.printAndWait([
        '初めて推しのアイドルと、ああやって話したのだ。',
        digital.get_colored_name(),
        ' のプレッシャーは相当だったろう。',
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
        'この日は、',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の初対決だ。',
      ]);
      await digital.say_and_wait(
        'ああ、避けられない一日、やっぱり来た！ 脳が、もう止まらない！',
      );
      await digital.say_and_wait(
        '夢でも見ていたレース！ 違う、夢のレースなんて、現実のレースには到底及ばない！',
      );
      await digital.say_and_wait('どうする、全身にサイリウム挿して応援する?!');
      era.printButton('「いやいや、警備に追い出されるぞ。」', 1);
      await era.input();
      await era.printAndWait([
        'こうして阪神競馬場へ来た。',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の激闘だ……',
      ]);
      await era.printAndWait(
        'こうして阪神競馬場へ来た。テイエムオペラオーとメイショウドトウの激闘だ…',
      );
      await era.printAndWait([
        opera.get_colored_name(),
        ' の実力は ',
        you.get_colored_name(),
        ' にはよくわかる。だが ',
        doto.get_colored_name(),
        ' もここまで来ていたとは……',
      ]);
      await era.printAndWait([
        '最後は並んでゴール。',
        opera.get_colored_name(),
        ' がわずかに ',
        doto.get_colored_name(),
        ' を上回った。',
      ]);
      await era.printAndWait(
        '何が理由だ。本格化だけでは、この心境の変化はまだ説明できない……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' が',
        digital.sex,
        'をこう変えたのか……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はすごい、と言うべきか……ちらりと ',
        digital.get_colored_name(),
        ' を見る。え、',
        digital.sex,
        'はやっぱり夢中で頭を振っている。',
      ]);
      await digital.say_and_wait('えわわわわ……', true);
      await digital.say_and_wait('うむ……', true);
      await digital.say_and_wait('さっき、あれは何……あの輝き？', true);
      await digital.say_and_wait(
        '私はもう……さっき、尊いという考えから離れてた……',
        true,
      );
      await digital.say_and_wait(
        [
          call_15,
          ' と ',
          call_58,
          ' だから……',
          digital.couple_title,
          'が特別だから？',
        ],
        true,
      );
      await era.printAndWait([
        'こうして、',
        digital.get_colored_name(),
        ' はまだ本意を理解しきれないまま、バトンは ',
        digital.get_colored_name(),
        ' に渡された。次は ',
        digital.get_colored_name(),
        ' の ',
        japa_dir,
        ' の舞台だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_29
  we_47_29: (() => {
    const title = '夏合宿（クラシック級）途中';
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
        '夏合宿が始まって最初の一週間。',
        digital.get_colored_name(),
        ' は訓練は落としていない。だが……どうも ',
        digital.get_colored_name(),
        ' は上の空だ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' もだいたいわかっている。',
        digital.get_colored_name(),
        ' は他の準備もしているらしい。だがそれも ',
        digital.get_colored_name(),
        ' の趣味だ。あまり口を出せない。',
      ]);
      era.printButton('「どうすればいいんだ……」', 1);
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
        ' は、',
        digital.get_colored_name(),
        ' が以前から強く推していた',
        digital.uma_sex_title,
        'だ。あのときの ',
        mile_cha,
        ' も、',
        digital.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は一緒に見に行った。',
      ]);
      await era.printAndWait([
        '最近の',
        digital.sex,
        'の成績は、だんだん……微妙だ。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' も ',
        halo.get_colored_name(),
        ' に気づいた。ファンとして、',
        digital.sex,
        'の気分も沈んでいる。',
      ]);
      await you.say_and_wait(['どうだ、', call_61, ' を励ましてみないか？']);
      await digital.say_and_wait(
        'うん……ファンとして、アイドルを励ますのも道理……よし！ 決めた、手元の原稿は一旦置く！',
      );
      await you.say_and_wait('原稿？ 何の原稿だ？');
      await digital.say_and_wait('本の原稿。');
      await you.say_and_wait('何の本だ？');
      await digital.say_and_wait('普通の同人誌だよ。');
      await era.printAndWait('わからない……');
      await digital.say_and_wait([
        '近いうちの即売会で、',
        call_61,
        ' の同人誌を売って、みんなに ',
        call_61,
        ' のよさを広めようと思ってたんだ……',
      ]);
      await halo.say_as_unknown_and_wait(
        'キングの同人誌ですの？ そんな話、本人は聞いておりませんわ。',
      );
      await digital.say_and_wait([
        'あ、本人に知られるのは禁忌だよ、もちろん ',
        call_61,
        ' には……しゅわ！ ',
        call_61,
        '?!',
      ]);
      await era.printAndWait('主人公が同人誌から出てきた。');
      await digital.say_and_wait('さっきのは冗談！ 全部、暇つぶしの妄想です！');
      await halo.say_and_wait(
        'でも、ありがとう。おかげさまで、あはははは！ Kingの魅力も一流ですわね！',
      );
      await halo.say_and_wait([
        '本当に聞きたかったのは、',
        h_call_d,
        '、あなたは今年の『',
        mile_cha,
        '』に出ますのよね？',
      ]);
      await digital.say_and_wait([
        'え？ はい！ 去年のレースで感動したから、できるだけ近づきたくて……でも……どうして ',
        call_61,
        ' が……',
      ]);
      await halo.say_and_wait('わたくしも出走しますから。');
      await era.printAndWait([
        halo.get_colored_name(),
        ' も ',
        mile_cha,
        ' に出る。しかも ',
        digital.get_colored_name(),
        ' と同じ舞台で競う。',
      ]);
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' の顔に、急に影が差した。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はわかっている。長いキャリアの中で、',
        halo.get_colored_name(),
        ' は頂点から谷へ、徐々に落ちてきている。',
      ]);
      await digital.say_and_wait([
        'あの、',
        call_61,
        '……こんなこと言うのは厚かましいけど……私、応援するよ。',
      ]);
      await digital.say_and_wait(
        'あの……相手でも、推したい気持ちは同じくらい強い……',
      );
      await era.printAndWait([
        'この状況に、',
        digital.get_colored_name(),
        ' の気持ちは複雑だ。アイドルと同じ舞台で走るのは夢だった。だが、そのアイドルがすでに衰え始めているとしたら？',
      ]);
      await you.say_and_wait('デジ！');
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は少しとぼけた顔で ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await you.say_and_wait([
        'デジ、わかってるはずだ。レース場の',
        digital.uma_sex_title,
        'は——',
      ]);
      await halo.say_and_wait([
        callname_61,
        '、割り込んでごめんなさい。',
        h_call_d,
        '、提案がありますわ。',
      ]);
      await halo.say_and_wait([
        h_call_d,
        '、この合宿が終わるとき、一緒に一走しましょう。',
      ]);
      await digital.say_and_wait(
        'は?! うお？ アイドルと一緒なんて、できない……',
      );
      await you.say_and_wait(['キング……本当にありがとう。']);
      await halo.say_and_wait([
        '構いませんわ。一流の',
        digital.uma_sex_title,
        'なら、一流のファンに返すのが自然です——あはははは！',
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
        'こうして、残りの夏合宿で、',
        digital.get_colored_name(),
        ' は最後に ',
        halo.get_colored_name(),
        ' と模擬レースをすることになった。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_32
  we_47_32: (() => {
    const title = '夏合宿（クラシック級）終了';
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
      await digital.say_and_wait('へへ……ふ……対局を賜り、感謝……');
      await era.printAndWait([
        '夏合宿の最後は、予定どおり ',
        digital.get_colored_name(),
        ' と ',
        halo.get_colored_name(),
        ' の対決……',
      ]);
      await era.printAndWait('ただ、少し……ゆるい？');
      await halo.say_and_wait([
        'は……ふ……',
        h_call_d,
        '、あなたの脚、かなり躊躇っていますわね。どうしましたの？',
      ]);
      await digital.say_and_wait(
        'いや、その……ずっと閃光弾を食らってるっていうか、空気に乗った尊さで窒息してるっていうか……',
      );
      await digital.say_and_wait(
        '前は観客側だったのに……追い付こうだなんて、調子に乗りすぎ……',
      );
      await digital.say_and_wait(
        '私も最近になって、『本気で走る』覚悟ができた普通の底辺ですから……',
      );
      await halo.say_and_wait([
        'あら、ずいぶん自信がありませんわね。でも、本当にそれだけ？ ',
        callname_61,
        '、',
        h_call_d,
        ' の実力はご存じですわよね？',
      ]);
      await you.say_and_wait('今の砂の上なら、デジは負けない。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は今の ',
        halo.get_colored_name(),
        ' を、まだ気にしている。',
      ]);
      await digital.say_and_wait([
        call_61,
        '……今は……昔とはかけ離れてる……でしょ……',
      ]);
      await digital.say_and_wait([
        '今年の春、『',
        takm_kin,
        '』で勝って、それから……流れる走り、体の躍動、今回の実力とは比べものにならないっていうか……',
      ]);
      await digital.say_and_wait(
        '知ってるよ。毎回柵に掴まって身を乗り出して見てたから。',
      );
      await digital.say_and_wait([
        '今の ',
        call_61,
        ' がどれだけ苦しいか、私もデビューしたから、少しは……わかる……',
      ]);
      await era.printAndWait([
        '選手になってからの ',
        digital.get_colored_name(),
        ' は、以前より触れられるものが増えた。こういう感情も。',
      ]);
      await halo.say_and_wait([
        'だから気が乗らない……そう、ふん……',
        h_call_d,
        ' あなたは……',
      ]);
      await halo.say_and_wait('馬鹿ですわ。');
      await digital.say_and_wait('え？');
      await era.printAndWait([
        '予想外の言葉に、',
        digital.get_colored_name(),
        ' は驚いた。',
      ]);
      await halo.say_and_wait('馬鹿、大馬鹿ですわ。');
      await halo.say_and_wait(
        'わかっているつもりで、まだ何もわかっていませんわ。',
      );
      await era.printAndWait('厳しい言葉。だが声は優しい。');
      await halo.say_and_wait([
        'ねえ、',
        h_call_d,
        '、あなたはこの',
        digital.uma_sex_title,
        'に、興味がありますわよね？',
      ]);
      await digital.say_and_wait('！ はい！');
      await halo.say_and_wait(
        'では合宿が終わったら、わたくしと一緒に訓練する権利を差し上げます！',
      );
      await halo.say_and_wait([
        '見せてあげますわ。',
        halo.get_colored_name(),
        ' がどんな',
        digital.uma_sex_title,
        'か！',
      ]);
      await digital.say_and_wait('ぜひ！');
      await digital.say_and_wait([
        '光栄すぎて尻尾まで跳ねた！ デジがあの',
        digital.sex_code - 1 ? '女神' : '神',
        'と一緒に！',
      ]);
      await era.printAndWait([
        '夏の終わり、',
        digital.get_colored_name(),
        ' は憧れていた',
        digital.uma_sex_title,
        'と繋がりを築いた。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_37
  we_47_37: (() => {
    const title = '一流の条件';
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
        ' が ',
        mile_cha,
        ' へ進むあいだ、',
        halo.get_colored_name(),
        ' も同時に努力していた。',
      ]);
      await digital.print_and_wait([
        sprt_sta,
        '、短距離G1。理論上は ',
        halo.get_colored_name(),
        ' の得意……',
      ]);
      await digital.print_and_wait('——7着');
      await digital.print_and_wait('入着すらできなかった。');
      await digital.print_and_wait([
        'レース後まもなく、',
        digital.get_colored_name(),
        ' は ',
        halo.get_colored_name(),
        ' の前へ来た。',
      ]);
      await halo.say_and_wait([
        '見に来ましたのね、',
        h_call_d,
        '。構わないで——そう言うつもりでしたけど、あなたなら、わたくしのそばにいる権利を差し上げますわ。',
      ]);
      await digital.say_and_wait([
        'あの……最後は届かなかったけど、',
        call_61,
        ' のすばらしさに、また感服したよ。',
      ]);
      await digital.say_and_wait('鋭い目、漂う品格、華麗なコーナー！');
      await halo.say_and_wait('……それだけですの？');
      await digital.say_and_wait('え？');
      await halo.say_and_wait('わたくしを一流だと思う理由は、それだけですの？');
      await digital.print_and_wait([
        digital.get_colored_name(),
        ' はさらにたくさん言った。だが……',
      ]);
      await halo.say_and_wait('……一流になるために、何より大事なものが一つ……');
      await digital.print_and_wait(
        'レース後の場内は、もうほとんど人がいない。',
      );
      await digital.print_and_wait([
        halo.get_colored_name(),
        ' はコースのスタート地点へ歩き、スタートの姿勢を取った。',
      ]);
      await halo.say_and_wait('せっかくですもの、これから一緒に走ります？');
      era.drawLine();
      await digital.print_and_wait([
        'ついさっきレースを終えたばかりだ。',
        halo.get_colored_name(),
        ' の疲労は明らかに見て取れる。',
      ]);
      await halo.say_and_wait(
        'は……は……ごほ……ほほほ……本当に、見苦しいですわね。',
      );
      await halo.say_and_wait([
        h_call_d,
        '、今のわたくしはどう？ 鋭い目も、品格も華麗も、全部ありませんわ。',
      ]);
      await halo.say_and_wait(
        '一流の証拠が何も残っていないわたくしは、まだ一流ですの？',
      );
      await digital.say_and_wait('それは……それは……');
      await halo.say_and_wait('でも、こんなわたくしでも——');
      await digital.print_and_wait([
        'レースで見た鋭い目が、今の ',
        halo.get_colored_name(),
        ' に、もう一度宿った。',
      ]);
      await halo.say_and_wait('もう一走したら、どうなりますの？');
      await halo.say_and_wait('だめなら、明日もう一走したら、どうなりますの？');
      await halo.say_and_wait(
        '明日失敗しても、明後日もう一度来たら、またどうなりますの？',
      );
      await halo.say_and_wait([
        h_call_d,
        '！ 見てなさい、今のわたくしに、本当に何も残っていませんの？',
      ]);
      await digital.say_and_wait('！');
      await digital.say_and_wait(
        '残ってる！ 開拓の羅針盤みたいに、万年の氷みたいに、変わらない！',
      );
      await halo.say_and_wait('——不屈の執念。打ち負かされても屈しない心。');
      await halo.say_and_wait('これだけは、誰にもわたくしから奪えませんわ。');
      await halo.say_and_wait(
        'これこそ、このKingが永遠の一流である理由ですわよ！',
      );
      await digital.print_and_wait([
        '実力が落ちても、',
        halo.get_colored_name(),
        ' の「一流」の精神、不屈の意志は、一度も衰えていない。',
      ]);
      await digital.say_and_wait(['おおお……', call_61, '……！']);
      await digital.print_and_wait([
        '傷だらけでも、',
        halo.get_colored_name(),
        ' の姿は、こんなに美しい。',
      ]);
      await halo.say_and_wait([
        '約束しますわ。『',
        mile_cha,
        '』では、以前の状態に戻ります！',
      ]);
      await halo.say_and_wait(
        '同情して全力を出さないなんて、失礼にもほどがありますわ。',
      );
      await digital.say_and_wait(
        'はい、わかりました。一流の欠片……受け取ります。',
      );
      await digital.say_and_wait('でも、今だけ、一言言わせて……');
      await digital.say_and_wait([
        'あなたはやはり……',
        halo.sex_code !== 1 ? '女神' : '神',
        '……',
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
        ' と一緒に、去年 ',
        digital.get_colored_name(),
        ' が走った ',
        nhk_cup,
        ' を見に来た。',
      ]);
      await era.printAndWait([
        '最近の ',
        digital.get_colored_name(),
        ' は後輩にも目を向け始めた。その中でいちばん',
        digital.sex,
        'の目を引いたのは——',
      ]);
      await era.printAndWait([
        '今年の ',
        nhk_cup,
        ' を勝った、最近話題の新人——クロフネ。',
      ]);
      await digital.say_and_wait('うおおお、大きな歩幅、長い脚！ 私、もう！');
      await digital.say_and_wait([
        'クロフネ、',
        digital.sex,
        '、',
        digital.sex,
        'は私が走った芝を走ったんだ！',
      ]);
      await digital.say_and_wait('内側の感覚が、弾けそう！');
      await era.printAndWait([
        'それから ',
        digital.get_colored_name(),
        ' はすぐ柵のそばまで走った……',
      ]);
      await digital.say_and_wait(
        'クロフネさん！ 頑張れ！ これから何があっても、先輩たちが助けるから！',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、去年の ',
        nhk_cup,
        ' から多くのことを経験した。',
      ]);
      await era.printAndWait([
        '一年経って、また新しい世代が現れる。この蹄跡の続きが、',
        digital.get_colored_name(),
        ' の胸を熱くしたのだろう。',
      ]);
      await era.printAndWait([
        '戻ってきた ',
        digital.get_colored_name(),
        ' は、またクロフネの紹介を始めた……',
      ]);
      era.println();
      await era.printAndWait([
        '複数の馬場への適性が ',
        digital.get_colored_name(),
        ' と似ているのも、',
        digital.get_colored_name(),
        ' に親近感を持たせている。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、ただ推しを仰ぎ見る人から、後輩を気遣える先輩になれた。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_23
  we_95_23: (() => {
    const title = '勇者の挑戦';
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
        'やっと、',
        digital.get_colored_name(),
        ' は夏合宿の前に大きなレースをいくつも走った。十分な経験も積めたはずだ。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' とこれまでのレースを振り返ると、またたくさんの出会いだ。',
      ]);
      await digital.say_and_wait([
        'よし！ 時機は来た！ 虎牢関の戦い！ ',
        call_15,
        ' と ',
        call_58,
        ' に挑戦状を出す！',
      ]);
      await digital.say_and_wait('うん……待って、どのレースがいい？');
      await era.printAndWait([
        'たしかに、',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' の適性は、ダートが弱く、距離ではマイルが弱い。',
      ]);
      await era.printAndWait([
        '一方 ',
        digital.get_colored_name(),
        ' は長距離適性もあまりよくない……',
      ]);
      await you.say_and_wait('本気で挑むなら、やっぱり黄金の芝・中距離だな。');
      await era.printAndWait('ただ、これは……');
      await digital.say_and_wait([
        'たしかに……',
        digital.couple_title,
        'を私の泥のほうへ引きずりたくない……やっぱり正々堂々と一戦だ。',
      ]);
      await era.printAndWait([
        '今や自称だけではない覇王の ',
        opera.get_colored_name(),
        ' と、そのすぐ後ろの ',
        doto.get_colored_name(),
        '。黄金距離での勝負……',
      ]);
      await you.say_and_wait([tenn_sho, '、これがいちばん合う。']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はこのレースでは、まったく優位が取れない。',
      ]);
      await digital.say_and_wait(
        'そう！ これだ！ 東京2000メートルの芝、これ以上合うものはない！',
      );
      await you.say_and_wait('本当にいいのか？');
      await digital.say_and_wait('ほえ？ どういう意味？');
      await you.say_and_wait('かなりキツいぞ？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' でも、この話には少し言葉が詰まった。',
      ]);
      await digital.say_and_wait(
        '……ああ、性分だな。ゲームで最低難度を選ばないし、おまけDLCの強い装備も着ないのと同じ……',
      );
      await digital.say_and_wait('それに、私は、いちばんいい走りが見たい！');
      await digital.say_and_wait('だから、付き合ってくれるよね！');
      await you.say_and_wait('もちろん！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、こういう子だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_32
  we_95_32: (() => {
    const title = '夏合宿（シニア級）終了';
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
        '今回の夏合宿、',
        digital.get_colored_name(),
        ' は本当に特別頑張った。',
        you.get_colored_name(),
        ' は、こんなに真剣な ',
        digital.get_colored_name(),
        ' を見たことがない。',
      ]);
      await era.printAndWait([
        '先輩の ',
        opera.get_colored_name(),
        ' と ',
        doto.get_colored_name(),
        ' との約束、後輩クロフネとの対決。二つの要素で、今の ',
        digital.get_colored_name(),
        ' の状態はかつてなくいい！',
      ]);
      await digital.say_and_wait([
        callname,
        '、感じるよ。この感覚、みんなに加護された勇者みたい！ これなら',
        digital.couple_title,
        'と対決できる！',
      ]);
      await you.say_and_wait('勝てるか？');
      await digital.say_and_wait(
        '正直、不安しかない！ あの三人、誰一人として勝つ自信がない……',
      );
      await digital.say_and_wait(
        'だから、私ができるのは、これまで積み上げた多様な経験だけ！',
      );
      await era.printAndWait([
        '前に立つ壁がどれだけ高くても、',
        digital.get_colored_name(),
        ' は迷わなかった。',
      ]);
      await era.printAndWait('だが、その夜……');
      await era.printAndWait('クロフネが出走できないという知らせが届いた。');
      await era.printAndWait([
        digital.get_colored_name(),
        ' はその夜、',
        you.get_colored_name(),
        ' を呼び出した。深夜の砂浜で、うつむいて一言も発しない。',
      ]);
      await era.printAndWait([
        '長い時間が経って、',
        digital.get_colored_name(),
        ' はやっと口を開いた——',
      ]);
      await digital.say_and_wait([
        callname,
        '……ねえ、こんなこと、本当にあるの？',
      ]);
      await era.printAndWait([
        '骨折、ファン数、票数、抽選、回避……いろんな理由での不出走は、',
        digital.get_colored_name(),
        ' も見てきた。',
      ]);
      await era.printAndWait([
        'だが、出走枠が足りなくて出られない。こういうのは、',
        digital.get_colored_name(),
        ' は初めてだ。',
      ]);
      await digital.say_and_wait(
        'レースだから、必ず勝利の笑顔と敗北の涙がある。',
      );
      await digital.say_and_wait([
        'でも、涙の先には必ず感動がある。だから',
        digital.uma_sex_title,
        'たちは、また次のレース場でぶつかり合える。',
      ]);
      await digital.say_and_wait('……でも……走れないなら、それってどう……');
      await era.printAndWait('全部準備して、それでも出られない。');
      await digital.say_and_wait([
        'もし私が出たせいで……',
        digital.sex,
        'の夢が摘まれたなら……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はひどく沈み、もう引き下がる気持ちが生まれていた。',
      ]);
      await you.say_and_wait([
        '自分は ',
        tenn_sho,
        ' に出ない、と言うつもりか?!',
      ]);
      await digital.say_and_wait('そ……そんなことはない。');
      await digital.say_and_wait([
        '私だって、私だって、',
        call_15,
        ' と ',
        call_58,
        ' との約束がある……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はわかっている。',
        digital.sex,
        'には何も変えられない。',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        'が好きだから、あの',
        digital.uma_sex_title,
        'の遭遇が、水草みたいに',
        digital.sex,
        'の脚に絡みつく。',
      ]);
      await era.printAndWait('でも、このままだと……');
      await you.say_and_wait([
        digital.sex,
        'を信じろ。同時に、俺も君を信じてる。',
      ]);
      await digital.say_and_wait([
        'それって……どういう意味？ ',
        digital.sex,
        'を信じる……？',
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
        'でも',
        digital.sex,
        'がこれで立ち直れず、引退すると思うか？',
      ]);
      await digital.say_and_wait('！ そ……そんなわけない。');
      await era.printAndWait([
        '優れた',
        digital.uma_sex_title,
        'は、こういう挫折では倒れない。',
      ]);
      await you.say_and_wait(
        '君がいちばんいい答案を出すこと。それがクロフネへのいちばんの助けだ。',
      );
      await digital.say_and_wait([
        '……',
        digital.uma_sex_title,
        'ちゃんたちが、苦しみの最後に掴むもの。あの何人かを経て、わかった。あれは比類ないものだ。',
      ]);
      await digital.say_and_wait(
        'もたらされる悲しみも、その悔恨さえも、明日の力になる！ わかった！ だって自分で感じたから！',
      );
      await digital.say_and_wait([
        'だから私は、心の底から言える。',
        digital.uma_sex_title,
        'は最高だ！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は立ち上がり、海辺まで走った——',
      ]);
      await digital.say_and_wait([
        digital.uma_sex_title,
        'は、どんな苦難でも、不屈の意志で、全部、弾き飛ばあああああ！！！！！',
      ]);
      await digital.say_and_wait([
        '私も、',
        digital.sex,
        'も！ 絶対に乗り越えられる！！！！',
      ]);
      await digital.say_and_wait('……あああ……');
      await era.printAndWait([
        '思い切り叫んだあと、',
        digital.get_colored_name(),
        ' は我に返った。',
      ]);
      await you.say_and_wait('どうやらデジ、答えは出たな。');
      await digital.say_and_wait([
        '……私も、ここで止まっちゃだめだ。',
        call_61,
        ' から受け取った貴重なものを、',
        digital.sex,
        'に見せなきゃ！',
      ]);
      await digital.say_and_wait([
        '私は、必ず ',
        tenn_sho,
        ' に出る。しかも、しかも！ 圧倒的な勝利を取る！',
      ]);
      await digital.say_and_wait([
        digital.sex,
        'が来年このレースで私に追いつくために、全力を尽くせるように！',
      ]);
      await digital.say_and_wait('絶対！ 絶対に！');
      await digital.say_and_wait([
        'それに、これまで出会ったすべての',
        digital.uma_sex_title,
        'の感情を、全部注ぎ出す！',
      ]);
      await digital.say_and_wait('それが、私の責任！');
      await era.printAndWait(
        '勝つ。しかも大勝する。それでクロフネの最後の悔いを断つ。',
      );
      await era.printAndWait([
        'それが ',
        digital.get_colored_name(),
        ' が自分に課した責任だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_48
  we_95_48: (() => {
    const title = (digital) => [
      'ただの普通の',
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
        '霜の舞う十二月の最後の数日。少し前に見た ',
        arim_kin,
        ' の熱はまだ残っている。',
        kris.get_colored_name(),
        ' のきれいなゴールを見届けたあとでも、',
        digital.get_colored_name(),
        ' はすぐコミケの準備に没頭した。',
      ]);
      await era.printAndWait('サークル主なら、早めに入って設営できる。だが……');
      await era.printAndWait(
        'それでも感嘆する。サークル主だけでも、まだこんなに人がいる。',
      );
      await era.printAndWait(
        '展示場へうねっていく長い列を見る。あとどれだけで自分たちの番になるのかわからない。',
      );
      await digital.say_and_wait([
        'ふんふんふん、',
        callname,
        '、君は一般入場の列に並んだことがないんだ。本番は、東京ビッグサイトの門の前後が割り込めない人波になるよ！',
      ]);
      await era.printAndWait([
        '……よかった。',
        digital.get_colored_name(),
        ' はサークル主だから、早めの通路を一緒に歩ける。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はフックだらけの特製の大きなリュックを背負い、いろいろな小さな置き物や飾りを吊るしている……',
      ]);
      await era.printAndWait('中には掛け軸の重ねもあるらしい……');
      era.printButton(
        '「あの、デジ、これ、全部一人で作ったんじゃないよな？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'じゃらじゃら。',
        digital.get_colored_name(),
        ' が振り向くと、飾りの金属がぶつかり合って耳に鋭い音を立てた。',
      ]);
      await digital.say_and_wait([
        'うん……',
        callname,
        ' は私の仕事量に驚いてる？ 実はこれ、再販が多いんだ。つまりデジの昔の成果。',
      ]);
      await era.printAndWait('昔、昔か……');
      await digital.say_and_wait([
        'デビューしてから、デジの成果は実はかなり減った。出展しても薄い本が一二冊、欠席することもある……',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は振り返り、巨大な東京ビッグサイトを見つめた。',
      ]);
      await digital.say_and_wait([
        'たぶん……このあとは普通の速度に戻ると思う。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' の言葉がわかる。',
        digital.get_colored_name(),
        ' がなぜこんなに……沈んでいるのかも？',
      ]);
      await era.printAndWait([
        '早起きで少し生気のない ',
        digital.get_colored_name(),
        ' の目を見て、',
        you.get_colored_name(),
        ' は思い出した……',
      ]);
      await era.printAndWait('ダートのレースだった。雨が降っていた。');
      await era.printAndWait([
        '小雨混じりの寒風が、',
        you.get_colored_name(),
        ' のレインコートに容赦なく吹き込んだ。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' も、さぞ寒かっただろう。',
      ]);
      await era.printAndWait([
        'コース上の ',
        digital.get_colored_name(),
        ' は泥だらけで、マカロン色の勝負服にも灰色がにじんでいた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は掲示板の成績を見ていない。見えるのは、掲示板を見上げている ',
        digital.get_colored_name(),
        ' だけだ。',
      ]);
      era.drawLine();
      await era.printAndWait(
        '列は思ったほど長くなかった。気づいたら会場に入っていた。',
      );
      await era.printAndWait([
        '苦労して',
        digital.uma_sex_title,
        'エリアへ割り込むと、設営中のサークル主が何人か、遠くから ',
        digital.get_colored_name(),
        ' に手を振った。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はここでは、かなり名が通っているらしい。',
      ]);
      await digital.say_and_wait('おおおお？');
      await era.printAndWait([
        'ん？ ',
        digital.get_colored_name(),
        ' の視線の先を見ると、マスクに帽子、服を重ねて少しふくらんだ……',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '普通の帽子だが、少し持ち上がった形からも、だいたい',
        digital.uma_sex_title,
        'だとわかる。',
      ]);
      await era.printAndWait([
        'それに実際、みんなだいたい',
        digital.sex,
        'が誰か知っている……',
      ]);
      await digital.say_and_wait([
        'ドー……',
        { color: dober.color, content: '白目先生', fontWeight: 'bold' },
        '！ 今回も新刊ある?! 三冊ありがとう！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はドーベル……うん、',
        {
          color: dober.color,
          content: '白目先生',
          fontWeight: 'bold',
        },
        ' のスペースへ行き、すぐ三冊予約した。',
      ]);
      await era.printAndWait([
        'そしてドーベル……まあ、',
        {
          color: dober.color,
          content: 'ドーベル先生',
          fontWeight: 'bold',
        },
        ' もこそこそ左右を見回し、他の人が（意識して）目を逸らしたのを確認してから……',
      ]);
      await era.printAndWait([
        'そっとリュックから、丁寧に包んだ何かを取り出し、興奮している ',
        digital.get_colored_name(),
        ' に渡した。',
      ]);
      await era.printAndWait('いろいろな交換のあと、迎えるのは……');
      await era.printAndWait('コミケの正式開幕！');
      await era.printAndWait(
        '何度見ても感嘆する。人類は多すぎて、地球は小さすぎる。',
      );
      await you.say_as_unknown_and_wait('おおおおおおお！');
      await era.printAndWait(
        '入場ゲートから、人々の魂の叫びが聞こえる。先頭の人間は人気ブースへ一直線に走り、スペースの前で丁寧に減速して紙幣を出し、貴重な戦利品を受け取る。',
      );
      await era.printAndWait('先頭から人が湧き続け、次に現場へ来たのは……');
      await diamond_lord.say_as_unknown_and_wait([
        'ええ！ ',
        do_call_di,
        '！ 来たよ！',
      ]);
      await era.printAndWait([
        '遠くの人混みから、栗毛の',
        digital.uma_sex_title,
        'が飛び出した。',
        digital.uma_sex_title,
        'の脚力ですぐ ',
        digital.get_colored_name(),
        ' の前まで来た。',
      ]);
      await digital.say_and_wait(['いつもの新刊、はい～']);
      await era.printAndWait([
        '新刊を受け取った',
        digital.uma_sex_title,
        'は跳ねるように離れた。最初の客。だが次は……',
      ]);
      era.printButton('「デジ……知名度は少し聞いてたけど……」', 1);
      await era.input();
      await era.printAndWait(
        '手が……回らなくなってきた。リュックの中の巻いた掛け絵を取り出し、受け取った現金も数えなきゃ……',
      );
      await era.printAndWait(
        'なぜ電子決済がないか聞くな。入場してからスマホは静かにポケットで眠ったきり、音ひとつ立てない。',
      );
      await era.printAndWait([
        'しばらく忙しく働いたあと、やっと「完売」の札を出せた。',
      ]);
      era.println();
      await era.printAndWait([
        digital.get_colored_name(),
        ' と、URA公式ブースを見に行くか話していると、',
        {
          color: dober.color,
          content: 'ドーベル先生',
          fontWeight: 'bold',
        },
        ' が別れに来た。',
      ]);
      await dober.say_and_wait([
        do_call_di,
        '、一緒にブースを回ろうと思っていたのだけれど、残念、ここで失礼するわ。これからも、もっと優れた作品を。',
      ]);
      await digital.say_and_wait(
        'えええ、お世話になりました！ 死ぬ気で創作します！',
      );
      await digital.say_and_wait(
        'デビュー後は作品が怠けてたけど、安心してください、このあと立て直します!',
      );
      await dober.say_and_wait(['！']);
      await era.printAndWait([
        'マスク越しでも、目だけでも、',
        dober.get_colored_name(),
        ' の激しい感情の変化がわかる。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は拳を握り、変装用の帽子とマスクを外した。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は固まった。なぜ ',
        dober.get_colored_name(),
        ' が急に怒っているのかわからない。',
      ]);
      await digital.say_and_wait(['シロ……', call_59, '……？']);
      await era.printAndWait([
        dober.get_colored_name(),
        ' はショルダーバッグから ',
        digital.get_colored_name(),
        ' の同人誌を抜き、',
        digital.get_colored_name(),
        ' のスペースに戻した。',
      ]);
      await dober.say_and_wait([
        'これ、帰りに読むつもりだったの。ごめんなさい。',
      ]);
      await era.printAndWait([
        dober.get_colored_name(),
        ' は振り返らずに歩いていった。',
        digital.get_colored_name(),
        ' の引き止めも見なかった。',
      ]);
      await digital.say_and_wait(['……']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はうつむき、自分が丁寧に包んだ同人誌を見つめた。',
      ]);
      await diamond_lord.say_as_unknown_and_wait(['あの……', do_call_di, '？']);

      await era.printAndWait([
        '最初にスペースへ駆けつけた栗毛の',
        digital.uma_sex_title,
        'だ。',
        digital.sex,
        'も大きな戦利品の袋を持っている。挨拶に来たようだ。',
      ]);
      await digital.say_and_wait([
        '見苦しいところを見せてごめん、',
        diamond_lord.get_colored_name(),
        '。私……',
      ]);
      await digital.say_and_wait([
        '聞きたいんだけど、ファンとして、先生の作品をもっと見たいのは……普通、だよね？',
      ]);
      await diamond_lord.say_and_wait('うん……でも……');
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        ' という',
        digital.uma_sex_title,
        'は……そのまま地面に座り、巨大なリュックを探って、分厚い本を一冊取り出した。',
      ]);
      await era.printAndWait(
        '開いてみると、厚い保護カバーに包まれた同人誌だった。',
      );
      await diamond_lord.say_and_wait(
        'これ、君がデビュー一年目のころに出した同人誌……',
      );
      await diamond_lord.say_and_wait(
        'あのときはまだ君のファンじゃなかった。これ、他の人から高値で買ったんだ……',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は唇を噛み、何も言わない。',
      ]);
      await diamond_lord.say_and_wait([
        '高値で買っても、いちばん元が取れた一冊だと思う。',
        do_call_di,
        '、なぜかわかる？',
      ]);
      await diamond_lord.say_and_wait([
        'この一冊が描いてるのは、駆け出しの',
        digital.uma_sex_title,
        'のレース。いつもの',
        digital.uma_sex_title,
        'への愛以外に、中には、少し違うものがある。',
      ]);
      await diamond_lord.say_and_wait(
        'もう一つ言いたいのは、君とのあのレースでファンになったってこと……そのあと、君のレースは全部見に行った。',
      );
      await era.printAndWait([
        diamond_lord.get_colored_name(),
        ' はまたその同人誌を宝物のように厚いカバーで包み、リュックに戻した。それから',
        digital.sex,
        'はリュックを背負って、歩いていった。',
      ]);
      era.drawLine();
      await era.printAndWait([
        digital.get_colored_name(),
        ' は、場外で有名な',
        digital.uma_sex_title,
        'のコスをして踊っているレイヤーをぼんやり見ていた。',
      ]);
      await era.printAndWait([
        digital.couple_title,
        'の中には、仮耳の普通の',
        digital.phy_sex_title,
        'もいれば、コス用の耳カバーを着けた',
        digital.uma_sex_title,
        'もいる。',
      ]);
      await era.printAndWait([
        digital.couple_title,
        'が軽やかに踊るのを見て、',
        digital.get_colored_name(),
        ' は……',
      ]);
      await digital.say_and_wait([callname, '、なんで？']);
      era.printButton('「ドーベルのこと？ モナークのこと？」', 1);
      await era.input();
      await digital.say_and_wait('……どっちも。');
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
        'のおかげで、この ',
        callname,
        ' は思い出した。',
      ]);
      era.println();
      await era.printAndWait([
        'コースの上ではずいぶん変態で、他の',
        digital.uma_sex_title,
        'をじっと見つめていた ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        '君が',
        digital.uma_sex_title,
        'じゃなかったら、俺やファンたちが見てるデジは、誰なんだ？',
      ]);
      await digital.say_and_wait(['あのデジ……まだ現状を認めてないデジ……']);
      era.println();
      await era.printAndWait([
        '目の前がゴールでも、変わらない ',
        digital.get_colored_name(),
        '……',
      ]);
      await you.say_and_wait([
        'レース場に踏み込めば、君は',
        digital.uma_sex_title,
        'だ。ファンに応援される存在なんだ！',
      ]);
      await digital.say_and_wait(['踏み込めば……レース場に？']);
      await you.say_and_wait([
        'そう！ ファンだった君がいちばんよく知ってるだろ！ レース場のすべての',
        digital.uma_sex_title,
        'は、成績がどうであれ、そうなんだ！',
      ]);
      era.println();
      await era.printAndWait([
        '泥だらけでも、力いっぱい前へ進む ',
        digital.get_colored_name(),
        '……',
      ]);
      era.printButton('「君はもう、ファンが支える存在なんだ！」', 1);
      await era.input();
      await digital.say_and_wait('！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' はその言葉を聞いて、全身が震えた。',
      ]);
      era.printButton('「ファンサービス、わかるか！」', 1);
      await era.input();
      await digital.say_and_wait('わかる！');
      era.println();
      await era.printAndWait([digital.get_colored_name(), '、本当に……']);
      await digital.say_and_wait([
        'うおおおおおお、ファンの期待を裏切れない……あははは……',
      ]);
      era.println();
      await era.printAndWait([digital.uma_sex_title, 'だな。']);
      await digital.say_and_wait('私は、もう少し頑張ってみよう。');
      await era.printAndWait(
        '眉は下がり、目は濁り、涙まで帯びている。苦笑いと言ってもいい。',
      );
      await era.printAndWait(
        'でもこの笑顔は、ファンを感動の涙にさせるはずだ……',
      );
      await era.printAndWait('ああ、よく見えない……');
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
    const title = '世界の旅人';
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
        ' はまだ挑戦を続けている。このあとの海外遠征のために。',
      ]);
      await digital.print_and_wait([
        '勝利のためだけじゃない。同志と一緒に、もっと多くの',
        digital.uma_sex_title,
        'に会うためだ。',
      ]);
      await digital.print_and_wait(
        '下見のため、あまり知られていない便に乗った……',
      );
      await digital.print_and_wait('出発の前……');
      await digital.print_and_wait('おやおや、知り合いがたくさん来た。');
      await digital.print_and_wait([
        halo.get_colored_name(),
        '、',
        opera.get_colored_name(),
        '、',
        doto.get_colored_name(),
        '、',
        tachyon.get_colored_name(),
        '……それにクロフネ？',
      ]);
      await digital.print_and_wait(
        'もともと一時的に離れて、海外の環境に慣れるだけ。むしろ観光？',
      );
      await digital.print_and_wait('こんなに人が見送りに来るのか？');
      await digital.print_and_wait([
        digital.get_colored_name(),
        '、本当にすごいな。',
      ]);
      await digital.say_and_wait([
        'でも、もう待てない！ 異郷の出会い、同志と一緒に、世界各地の',
        digital.uma_sex_title,
        'たちと出会いたい！',
      ]);
      await digital.print_and_wait([
        '世界の旅人、',
        digital.get_colored_name(),
        ' は、今も走っている。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
