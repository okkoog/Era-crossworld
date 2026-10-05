// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3-give-up.js
// 대상 함수/속성: arim_kin_win_g_s, before_arim_kin_g_s, ws_95_14_g, ws_palace_g
/**
 * @file トウカイテイオー - 育成 - 回避ルート
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  // [번역 대상] ws_95_14_g — 함수/속성 전체 문맥에서 남은 원문을 번역
  ws_95_14_g: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `すでに ${you.name} とトウカイテイオーは回避を発表していたのに、ファンの熱はいつもどおりだった。`,
      );
      await era.printAndWait(
        `脚の怪我だと知ると、みな理解を示し、ふたりへ祝福を送ってくれた。`,
      );
      await era.printAndWait(
        `テイオーの表情も、かつての元気を取り戻したように見える……`,
      );
      await era.printAndWait(
        `たぶん、そうだ。${you.name} が一度悪役を引き受ければ${teio.sex}がずっとこうでいられるなら、それくらい安いものだ……`,
      );
    };
    f.title = title;
    return f;
  })(),
  // [번역 대상] before_arim_kin_g_s — 함수/속성 전체 문맥에서 남은 원문을 번역
  before_arim_kin_g_s: (() => {
    const title = '走る願い（上）';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        'トレーナー、覚えてる？ 初めてのレースのあと……一緒に走り続けよう、って言ってくれた。',
      );
      era.println();

      await era.printAndWait(
        `入口から陽が差し込み、${teio.sex}の全身を金色に包む。${teio.sex}は振り返って微笑み、${you.name} に語りかける。`,
      );
      era.println();

      await teio.say_and_wait(
        'ボク、本気だよ……今、もう一度聞くね。ボクと、一緒に走ってくれる？',
      );
      era.println();

      era.printButton('「走るよ。必ず……ずっと、走る」', 1);
      await era.input();
      await era.printAndWait(
        `${teio.teen_sex_title}は顎を軽く引き、振り返ると大きく腕を振る。マントがぱっと舞い、昇る炎のように場へ踏み込み、前方の光へ溶けていく。`,
      );
    };
    f.title = title;
    return f;
  })(),
  // [번역 대상] arim_kin_win_g_s — 함수/속성 전체 문맥에서 남은 원문을 번역
  arim_kin_win_g_s: (() => {
    const title = '走る願い（下）';
    /** @param {CharaTalk} teio トウカイテイオー */
    const f = async (teio) => {
      await era.printAndWait('奇跡は、誰にでも属する。');
      await era.printAndWait(
        'だがこのレース場では、奇跡はひとつしか生まれない。',
      );
      era.println();

      await teio.say_and_wait('ふぅ——');
      era.println();

      await teio.say_and_wait('噛みつきがきつい', true);
      await teio.say_and_wait('前より、ずっと悪い——', true);
      await teio.say_and_wait(
        'ポジションが切れない……前で引っ張る逃げも、ボクと同じ先行も……後ろで機会を待つ差し、追込も……',
        true,
      );
      await teio.say_and_wait('みんな……必死に追いかけてる', true);
      era.println();

      await era.printAndWait(
        `前方の${teio.uma_sex_title}は風のように走り、散る銀髪の先端が鼻先に届きそうだ。脇の赤毛の${teio.uma_sex_title}は跳ねる赤い炎のように体に張りつき、前方のすべてを飲み込もうとしている。`,
      );
      await era.printAndWait(
        '天賦を最大限に使い、鍛え、絶対に負けないと覚悟して場へ出る——それだけなら、むしろ腹立たしい。',
      );
      await era.printAndWait(
        `そんなものは、この舞台に立つための最低条件で、珍しくもないからだ。`,
      );
      era.println();

      await teio.say_and_wait('くっ……', true);
      await teio.say_and_wait(
        `トレーナーが前に言った通りかも……この世には、ボクより強い${teio.uma_sex_title}がいたし、今もいる`,
        true,
      );
      await teio.say_and_wait(
        'でも今日は……本気で、負けたくない、負けない、負けられない！',
        true,
      );
      era.println();

      await era.printAndWait(
        '大きく息を吸い、酸素を貪欲に取り込み、それを力へ変え、限界を超える。',
      );
      era.println();

      await teio.say_and_wait('みんなの輝き……いつなんだろう？', true);
      await teio.say_and_wait('ボクのは……今だ！', true);
      era.println();

      era.printButton('「テイオー！」', 1);
      await era.input();
      await era.printAndWait(`実況「——${teio.name}——」`);
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}は身を沈め、最後のスパートを仕掛ける。`,
      );
    };
    f.title = title;
    return f;
  })(),
  // [번역 대상] ws_palace_g — 함수/속성 전체 문맥에서 남은 원문을 번역
  async ws_palace_g(teio) {
    await teio.say_and_wait(
      'ボクの名前はトウカイテイオー。トウカイ——テイオー！',
    );
  },
};
