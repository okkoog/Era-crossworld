/**
 * @file 日常の地の文
 * @author 雞雞
 * @author 幽白書
 * @author Mr.E.
 * @author 阿格尼斯数码公司
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_abbr_number } = require('#/utils/value-utils');

const { buff_colors, money_color } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {CharaTalk} minoru
   */
  good_morning(chara, you, minoru) {
    const buffer = [
      /** @author 雞雞 */
      {
        h() {
          era.print([chara.get_colored_name(), ' は親指を立てた。']);
        },
      },
      {
        h() {
          era.print([
            chara.get_colored_name(),
            ' は食べ過ぎたのか、お腹がぽっこりしている。',
          ]);
        },
      },
      {
        h() {
          era.print([chara.get_colored_name(), ' は何かを一心に読んでいる。']);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => era.get(`cflag:${chara.id}:65`) < 5,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は同級生たちと楽しそうに話している。',
          ]);
        },
      },
      {
        // CFLAGNAME:65 = 成长阶段
        c: () => chara.id !== 301 && !(era.get('cflag:301:48') < 3 * 48),
        h() {
          era.print([
            chara.get_colored_name(),
            ' は受付で ',
            minoru.get_colored_name(),
            ' に何か問い合わせている。',
          ]);
        },
      },
      /** @author 幽白書 */
      {
        // TALENTNAME:0 = 情感活动
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は週末にテレビで見た冗談を興奮気味に ',
            you.get_colored_name(),
            ' へ話し始め、途中で自分から先に笑い出してしまった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は週末に見たドラマの話をしながら、途中でまた泣き出してしまった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' が見ると、',
            chara.get_colored_name(),
            ' は何人かの',
            chara.uma_sex_title,
            'と輪になって怪談をしているらしい。しばらくすると ',
            chara.get_colored_name(),
            ' は顔色を失っていた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は ',
            chara.get_colored_name(),
            ' の髪に小さな枝が刺さっているのに気づいた。',
            you.get_colored_name(),
            ' が取るまで、',
            chara.get_colored_name(),
            ' は頭の異物に気づかなかった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' はトレーナー室で着替えるなと ',
            chara.get_colored_name(),
            ' を叱ったが、返ってきたのは、なぜいけないのか分からないといった顔だった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:0`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はほかの',
            chara.uma_sex_title,
            'と恋の噂話をしているらしい。',
            you.get_colored_name(),
            ' が見ていると、',
            chara.get_colored_name(),
            ' は交際中の',
            chara.uma_sex_title,
            'に質問を重ね、相手が真っ赤になって逃げるまでやめなかった。',
          ]);
        },
      },
      {
        // TALENTNAME:1 = 自信程度
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            'トレーナー室に入ると、',
            you.get_colored_name(),
            ' は ',
            chara.get_colored_name(),
            ' がいつものように自分を卑下しているのを聞いた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' が ',
            chara.get_colored_name(),
            ' に挨拶すると、わけもわからず ',
            chara.get_colored_name(),
            ' に慰められた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' が ',
            chara.get_colored_name(),
            ' の頭を撫でると、なぜか ',
            chara.get_colored_name(),
            ' は罰を受けると勘違いし、こわごわ目を閉じた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング場の真ん中に立ち、世界の王であるかのような傲然とした態度を見せている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はスタンドから、場内の他の',
            chara.uma_sex_title,
            'の走りに逐一点をつけ、主観たっぷりの評価を述べている。',
          ]);
        },
      },
      {
        c: () =>
          // CFLAGNAME:1 = 种族
          era.get(`cflag:${chara.id}:1`) > 0 &&
          era.get(`talent:${chara.id}:1`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は溜息をつき、学園に互角の相手がいないと嘆いている。',
          ]);
        },
      },
      {
        // TALENTNAME:2 = 痛苦感受
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は転んだ。顔を上げたとき、',
            you.get_colored_name(),
            ` は${chara.sex}の目に涙が溜まっているのを見た。`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は友人と遊んでいて、罰ゲームはおでこをはじくことらしい。負けた ',
            chara.get_colored_name(),
            ' が怯えた顔をしているのを、',
            you.get_colored_name(),
            ' は目撃した。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は友人たちと映画の話をしていた。血腥い筋を聞いた瞬間、',
            chara.get_colored_name(),
            ' の両耳は自然と伏せられた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は激しく転んだ。',
            you.get_colored_name(),
            ' が心配していると、',
            chara.get_colored_name(),
            ' は何もなかったように体を払って立ち上がった。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は転んだ。',
            you.get_colored_name(),
            ' が傷口の手当てをしていると、顔を上げたときにはもう ',
            chara.get_colored_name(),
            ' はいつの間にか眠っていた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:2`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は痛みに耐えるコツを披露している……意味のよく分からない主題だが、意外と多くの人が真剣に聞き、メモまで取っている。',
          ]);
        },
      },
      {
        // TALENTNAME:3 = 恐惧感受
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はグラウンドの隅に隠れ、まわりのあまりに陽気な人たちと関わりたくなさそうだ。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はひとり、トレーニング場の影に丸まり、枝で地面に同じ渦巻きを何度も描いている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は、自動販売機の反射ガラスに向かって低く独り言を言う ',
            chara.get_colored_name(),
            ' を見つけた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は、',
            chara.get_colored_name(),
            ' がこっそりタンポポの種を空へ吹き、振り返って悪戯成功の満面の笑みを見せるのを見た。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング用のタイヤを巨大な輪にして、音程の外れたライブ曲を鼻歌しながら芝生の上を押して走っている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:3`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はスポーツドリンクを抱えて跳ね歩き、髪が風に舞っている。',
          ]);
        },
      },
      {
        // TALENTNAME:4 = 羞耻忍耐
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーナー室のカーテンの陰で本を開き、足音が聞こえるとすぐ本を閉じて胸に抱いた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は自動販売機の投入口の角度を何度も直し、硬貨が真っすぐ落ちても音が出ないようにしている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === 1,
        h() {
          era.print([
            'トレーナー室の棚の陰が微かに揺れている。',
            chara.get_colored_name(),
            ' はそこで着替えていて、',
            you.get_colored_name(),
            ' に見つかると顔を真っ赤にした。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は突然 ',
            chara.get_colored_name(),
            ' に背負われ、トレーニング場へ向かった。風速の快感を味わわせてやるのだという。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は跳び箱を並べ、トレーニング場の',
            chara.uma_sex_title,
            'たちを集めて、一度にいくつ飛べるか勝負を始めた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:4`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング場の入口に座り、通りかかる',
            chara.uma_sex_title,
            'に寒い冗談を一つ言わせないと通さない。',
          ]);
        },
      },
      {
        // TALENTNAME:5 = 反感获取
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は通りかかる',
            chara.uma_sex_title,
            `を睨みつけ、睨まれた子たちは怯えた悲鳴を上げた。`,
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は障害柵にスプレーで落書きし、',
            you.get_colored_name(),
            ' を見つけると、指先の塗料を挑発するように壁へ塗りつけた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === 1,
        h() {
          era.print([
            '更衣室からチリチリという音がする。',
            chara.get_colored_name(),
            ' は制服の袖口を穴だらけに切り、糸くずが床に散らばっている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            '器具室から暖かい黄色い光が漏れている。',
            chara.get_colored_name(),
            ' は古いプレートに包帯を巻き、緩衝帯を作っている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はスポーツドリンクを何本も抱えてトレーニング場の脇に立ち、汗だくの',
            chara.uma_sex_title,
            'を見つけると差し出す。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:5`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' はトレーニング場の小石を拾っている。転んだとき、尖った石で二次被害が出ないように。',
          ]);
        },
      },
      {
        // TALENTNAME:6 = 反抗意愿
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' の予定表は ',
            chara.get_colored_name(),
            ' にマーカーで消され、',
            chara.get_colored_name(),
            ' の組んだ用事に書き換わっていた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            you.get_colored_name(),
            ' のトレーナー室には、',
            chara.get_colored_name(),
            ' が断りもなく置いていった品々が溢れかえっている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === 1,
        h() {
          era.print([
            '事前の約束もないのに、',
            chara.get_colored_name(),
            ' は当然のように、今日の放課後は ',
            you.get_colored_name(),
            ' に買い物へ付き合えと言っている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            you.get_colored_name(),
            ' は、トレーナー室の前で何度も手を上げては、ついにドアを叩けない ',
            chara.get_colored_name(),
            ' を見つけた。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            chara.get_colored_name(),
            ' は突然動き出した散水機に驚いて尻餅をつき、呆然としている。',
          ]);
        },
      },
      {
        c: () => era.get(`talent:${chara.id}:6`) === -1,
        h() {
          era.print([
            'トレーナー室のロッカーが微かに揺れている。',
            chara.get_colored_name(),
            ' は突然の併走の誘いに逃げ込み、中で縮こまっている。',
          ]);
        },
      },
    ];
    get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  select(chara, you, is_sleep) {
    if (is_sleep) {
      era.print([chara.get_colored_name(), '이(가) ']);
    } else {
      const buffer = [
        {
          h() {
            era.print([
              chara.get_colored_name(),
              '에게 인사를 건넸다.',
              you.get_colored_name(),
              '이(가) ',
            ]);
          },
        },
        {
          h() {
            era.print([
              chara.get_colored_name(),
              '에게 가볍게 고개를 끄덕이며, 언제든 준비되었다는 신호를 보냈다.',
              you.get_colored_name(),
              ' 은(는) 깊은 잠에 빠져 있다.',
            ]);
          },
        },
      ];
      get_random_entry(buffer).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  get_gn_sex_message: (chara, you) => [
    '忙しい一日が終わり、',
    you.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' を学生寮の入口まで送った。',
    chara.get_colored_name(),
    ' はもじもじしながら、一緒に寝ないかと誘ってきた……',
  ],
  gn_sex_yes: '受け入れる',
  gn_sex_no: '断る',
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async gn_sex_accept(chara, you) {
    await era.printAndWait([
      'まわりの温かい視線のなか、頬を赤らめた ',
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の腕を取り、ゆっくりと去っていった……',
    ]);
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async gn_sex_force(chara, you, callname) {
    await era.printAndWait([
      'その瞬間、',
      chara.get_colored_name(),
      ' は顔色を変えると、',
      you.get_colored_name(),
      ` を挟んで強引に外へ歩き出した。${chara.sex}の `,
      callname,
      ' に跪かせて、性の特訓をさせるつもりらしい！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   */
  async gn_sex_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' は落胆して振り返り、学生寮へ歩いていった……',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} c_awake
   * @param {boolean} y_awake
   */
  good_night_normal(chara, you, c_awake, y_awake) {
    if (c_awake && y_awake) {
      era.print([
        '바쁜 하루가 끝나고, ',
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '을(를) 기숙사 입구까지 데려다주고 서로 잘 자라고 인사를 나눈 뒤 각자 거처로 돌아갔다.',
      ]);
    } else if (y_awake) {
      era.print([
        '깊이 잠든 ',
        chara.get_colored_name(),
        '을(를) ',
        you.get_colored_name(),
        '은(는) 깨울 엄두가 나지 않아, 어쩔 수 없이 직접 기숙사까지 데려다주고 나서야 뻐근한 어깨를 주무르며 트레이너 숙소로 돌아왔다.',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '은(는) 깊은 잠에 빠져 의식을 잃은 채, 흐릿한 꿈속에서 ',
        chara.get_colored_name(),
        '의 작별 인사를 들은 듯 했다',
      ]);
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '학습지도',
      chara.get_colored_name(),
      ` の学習を指導し、解けなかった問題を${chara.sex}に解かせることができた。`,
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_prepare(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 트레이닝실에서 레이스 전 준비를 했다. 다음 레이스를 치르기 위해 정신을 바짝 차려야 한다.',
    ]);
  },
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {boolean} is_sleep
   */
  async talk(chara, you, is_sleep) {
    if (is_sleep) {
      await era.printAndWait([
        chara.get_colored_name(),
        '이(가) 새근새근 콧노래 섞인 소리를 내며 기분 좋게 자고 있다.',
      ]);
    } else {
      // BASENAME:0 = 体力
      const low_stamina =
        era.get(`base:${chara.id}:0`) < 0.45 * era.get(`maxbase:${chara.id}:0`);
      // CFLAGNAME:48 = 育成回合计时
      const in_edu = era.get(`cflag:${chara.id}:48`) < 3 * 48;
      const buffer = [
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '의 상태가 무척 피곤해 보인다. 이제 ',
              chara.get_colored_name(),
              '을(를) 쉬게 해줄 때가 된 것 같다.',
            ]);
          },
        },
        {
          c: () => low_stamina,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '이(가) 간절한 눈빛으로 ',
              you.get_colored_name(),
              '을(를) 바라보며 휴식 허락을 기다리고 있다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '의 안색이 어둡고 털이 푸석푸석하다. 컨디션이 바닥을 치고 있는 것 같다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === -1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '의 표정이 어둡다. 워밍업조차 제대로 되지 않는 듯하며, 컨디션이 좋지 않아 보인다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 0,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '의 표정이 다소 굳어 있다. 조금 긴장한 듯하며, 컨디션은 평범해 보인다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 1,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '이(가) 기분 좋게 코스 위에서 워밍업을 하고 있다. 컨디션이 꽤 좋아 보인다.',
            ]);
          },
        },
        {
          c: () => in_edu && era.get(`cflag:${chara.id}:40`) === 2,
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '이(가) 싱글벙글 웃으며 코스 위를 뛰어다니고 있다. 컨디션이 매주 좋은 것 같다.',
            ]);
          },
        },
        {
          async h() {
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) 줄곧 여유로운 표정을 유지하고 있다.',
            ]);
          },
        },
      ];
      await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
    }
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_gift(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      chara.get_colored_name(),
      '의 선물을 받고 무척 기뻐했다...',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_cook(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' とトレーナー室で一緒に料理をした。今日は体にいい有機ニンジンにしよう、ということになった。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_rest(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 트레이닝실에서 함께 휴식을 취하며, 멍하니 시간을 보냈다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_game(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 트레이닝실에서 함께 게임을 즐기며 즐거운 시간을 보냈다.',
    ]);
  },
  bm_money_message: '얼마를 대출받을까?',
  bm_time_message: '대출 기간은?',
  get_bm_confirm_message: (amount, time, repay) => [
    '대출 금액은',
    { ...get_abbr_number(amount), color: money_color },
    ' 우마코인, 이후 ',
    { content: time.toLocaleString(), color: buff_colors[3] },
    '주간 주당 상환액은 ',
    { ...get_abbr_number(repay), color: money_color },
    ' 우마코인，총 ',
    {
      ...get_abbr_number(repay * time),
      color: money_color,
    },
    ' 우마코인 입니다. 대출합니까?',
  ],
  /**
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} amount
   */
  async bm_confirm(chara, you, amount) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      chara.get_colored_name(),
      '에게 ',
      { content: amount.toLocaleString(), color: money_color },
      ' 우마코인을 빌렸다……',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と中庭の枯れ木の洞へ行った。',
    ]);
    await era.printAndWait([
      `${chara.sex}が洞に向かって吠える様子を見て、`,
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' を最強へ導く決意を新たにした。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と中庭でデートした。その組み合わせに、まわりの生徒は噂話を抑えきれない。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_r_lunch(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と屋上で弁当を食べ、弁当箱の中身を交換した。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_fishing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 함께 강가에서 낚시를 하며 대어를 낚기를 고대했다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_r_walking(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 함께 강변을 산책했다. 오늘도 기분 좋은 하루다.',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_arcade(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街のゲームセンターへ行った。クレーンの爪よ、開くな。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_drawing(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街でくじを引いた。いいものは当たるだろうか。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_ktv(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街のカラオケへ行った。山頂の友達もハイになってきた！',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_movie(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と商店街で映画を見た。最近、いい作品はあるだろうか。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   * @param {number} dice 祈祷掷骰结果，0-1 之间的小数，越小越好
   */
  async o_c_pray(chara, you, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 함께 신사에 참배하러 왔다.',
    ]);
    if (dice < 0.5) {
      await era.printAndWait([
        dice < 0.05 ? '大吉' : '吉',
        'のおみくじが出た！ この一行は、とても上機嫌になった。',
      ]);
    } else {
      await era.printAndWait([
        '凶のおみくじが出た！ この一行は、天から降る厄を警戒しっぱなしになった。',
      ]);
    }
  },
  /**
   * @author Mr.E.
   * @param {CharaTalk} chara
   * @param {number} dice 祈祷掷骰结果，0-0.05 之间的小数，这里根据数值计算大成功的类型
   */
  async oc_great_luck(chara, dice) {
    // FLAGNAME:122 = 强奸抵抗
    if (dice < 0.0001 && era.get('flag:122') === 1) {
      await era.printAndWait('署名は未知の術式素材だった！');
    } else if (dice < 0.01) {
      await era.printAndWait([
        '눈앞에 갑자기 무지개 빛깔 게이트가 보이는 환상에 빠지며, 기분이 단숨에 고양되었다.',
      ]);
    } else if (dice < 0.02) {
      await era.printAndWait([
        '바람이 훅 불어오는 바람에 ',
        chara.get_colored_name(),
        '의 몸 위로 넘어져 버렸다?!',
      ]);
    } else if (dice < 0.03 && chara.sex_code !== 1) {
      await era.printAndWait([
        '바람이 훅 불어오더니, 옆에 있던 ',
        chara.get_colored_name(),
        '의 스커트가 들춰져 버렸다?!',
      ]);
    } else {
      await era.printAndWait(['一陣の風が吹き、なんと 150 ウマコイン？！']);
    }
  },
  /** @param {CharaTalk} chara */
  oc_remove_train_debuff(chara) {
    era.print([
      '【',
      chara.get_colored_name(),
      ' のトレーニングがより順調になったようだ】',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_restaurant(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と駅前で食事をした。中華、和食、それとも洋食にする？',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_dating(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と駅前でデートした。手を繋ぐふたりの姿に、羨む視線が少なくない。',
    ]);
  },
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async o_s_shopping(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      chara.get_colored_name(),
      ' と駅前の商店を回った。ちょっとした気持ちを買おう。',
    ]);
  },
  cl_new_year: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '새로운 한 해를 맞이하여, ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 트레이닝실에서 함께 즐거운 축하 파티를 열었다.',
      ]);
    };
    f.title = '새해';
    return f;
  })(),
  cl_valentine: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '今日はバレンタインデー。',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' とトレーナー室で贈り物を交わした。',
      ]);
      await era.printAndWait([
        '相手の喜ぶ顔を見て、',
        you.get_colored_name(),
        ' も嬉しくなった。',
      ]);
    };
    f.title = '발렌타인데이';
    return f;
  })(),
  cl_palace: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '전당 주간은, 레이스를 지망하는 ',
        chara.uma_sex_title,
        '들에게 있어 가장 중요한 축제 중 하나이다.',
      ]);
      // CFLAGNAME:47 = 殿堂
      switch (era.get(`cflag:${chara.id}:47`)) {
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            chara.get_colored_name(),
            ' の優れた成績により、ふたりは当然の主役として招かれた。',
          ]);
          // CFLAGNAME:48 = 育成回合计时
          if (era.get(`cflag:${chara.id}:48`) === 143 + 9) {
            await era.printAndWait([
              '때가 되었다. ',
              chara.get_colored_name(),
              '은(는) 감출 수 없는 기쁨과 자부심을 가득 안고 무대 중앙으로 걸어 나갔다.',
            ]);
          }
          await era.printAndWait([
            you.get_colored_name(),
            ' は、',
            chara.sex,
            'が一段ずつ壇上へ上がり、ふたりの奮闘の過去を語り、経験を聴衆と分かち合うのを見た。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の目は少し霞み、ふたりのあいだのあれこれが自然と蘇ってくる……',
          ]);
          break;
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            '과(와) ',
            chara.get_colored_name(),
            '은(는) 함께 트레센 학원의 대강당으로 향해 행사에 참여했다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '의 담당은 귀와 꼬리가 무의식적으로 약간 처져 있어, 그리 기운이 넘쳐 보이지는 않았다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            chara.get_colored_name(),
            '을(를) 바라보며 한숨을 내쉬고는, 조심스럽게 한쪽 손을 ',
            chara.sex,
            '의 어깨에 얹어 부축하며 나아갔다. 덕분인지 ',
            chara.sex,
            '도 조금은 기운을 차린 듯했다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '과(와) ',
            chara.get_colored_name(),
            '도 최선을 다했지만, 성적이 전당에 입성하기에는 부족했다. 하지만 인생에는 늘 아쉬움이 남는 법이다.',
          ]);
          await era.printAndWait([
            '最後の勝者にはなれなかったが、祭りの空気に包まれ、気持ちはいくらか和らいだ。',
          ]);
          break;
        default:
          // CFLAGNAME:65 = 成长阶段
          if (era.get(`cflag:${chara.id}:65`) === 5) {
            await era.printAndWait([
              `殿堂週は、現役の${chara.uma_sex_title}たちにとって大切な日であるだけでなく、`,
              you.get_colored_name(),
              ' のような仕事関係者にとっても、忙しく緊迫した一日になる。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '과(와) ',
              chara.get_colored_name(),
              '은(는) 함께 행사장에 들어가 이번 기념식의 각종 내용을 진지하게 기록했다…… 때때로 서로를 쳐다보면서도, 다시 몰입하여 필요한 정보를 수집해 나갔다.',
            ]);
          } else {
            await era.printAndWait([
              '이 시기가 되면 트레센 학원에서는 행사가 열리는데, 그중 하나는 전당에 입성한 몇 명의 ',
              chara.uma_sex_title,
              '들을 초청해 며칠 동안 강연을 열고, 다른 ',
              chara.uma_sex_title,
              '들과 트레이너들에게 경험을 전수하는 것이다.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '과(와) ',
              chara.get_colored_name(),
              '은(는) 명성을 듣고 찾아온 인파 속에서 어렵사리 자리를 잡아 앉았다.',
            ]);
            // CFLAGNAME:1 = 种族
            if (era.get(`cflag:${chara.id}:1`) > 0) {
              await era.printAndWait([
                '무대 위 ',
                chara.uma_sex_title,
                '의 차분하면서도 열정적인 목소리가 울려 퍼지자, ',
                you.get_colored_name(),
                '은(는) ',
                chara.get_colored_name(),
                '이(가) 허리를 곧게 펴고 앉아 동경 어린 눈빛을 빛내는 것을 발견했다……',
              ]);
            }
          }
      }
    };
    f.title = '전당 주간';
    return f;
  })(),
  cl_fans: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '4월의 팬 대감사제에서, ',
        you.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 팬들을 위해 함께 장기 자랑을 선보였다.',
      ]);
    };
    f.title = '팬 대감사제';
    return f;
  })(),
  cl_temple_fair: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        '축제 기간 동안, ',
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '을(를) 여름 합숙 장소 옆에 있는 시장에 함께 놀러 가자고 초대하기로 결정했다.',
      ]);
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        if (era.get(`love:${chara.id}`) >= 50) {
          await era.printAndWait([
            chara.sex,
            'はすぐに承諾した。ふたりは大人の社畜の荷をいったん下ろし、一日とことん遊んだ……',
          ]);
        } else {
          await chara.say_and_wait('데이트인가요?');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 화면의 메시지 알림을 보며 자기도 모르게 미소 지었고, 답장을 보내려던 찰나 새로운 메시지가 도착했다.',
          ]);
          await chara.say_and_wait('그럼 그렇게 정한 거예요.');
          await era.printAndWait([
            '문자 아래에는 유카타를 입고 예쁘게 꾸민 ',
            chara.sex,
            '의 셀카가 있었다. ',
            you.get_colored_name(),
            '은(는) 자신도 모르게 숨을 들이켰다……',
          ]);
          await era.printAndWait('言うまでもなく、これはよい思い出になる。');
        }
      } else if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          'はすぐに承諾した。ふたりはすべての用事を頭の外へ放り出し、一日とことん遊んだ……',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          '는 즉시 ',
          you.get_colored_name(),
          '에게 답장을 보냈다. ',
          you.get_colored_name(),
          '이(가) 입구에서 미리 기다리고 있자, 어느덧 새 유카타를 차려입고 정성껏 단장한 ',
          chara.sex,
          '의 모습이 눈에 들어왔다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 반응하기도 전에, 그녀는 살며시 미소 지으며 ',
          you.get_colored_name(),
          '의 팔짱을 끼고는 그대로 이끌었다……',
        ]);
        await era.printAndWait('ふたりは楽しい一日を過ごした。');
      }
    };
    f.title = '축제';
    return f;
  })(),
  cl_halloween: (() => {
    /**
     * @author 天马闪光蹄
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      if (era.get(`cflag:${chara.id}:65`) === 5) {
        await era.printAndWait(['트레센의 축제 행사는 종종 다른 곳과는 사뭇 다르다.']);
        await era.printAndWait([
          '예를 들어 오늘처럼…… ',
          you.get_colored_name(),
          '은(는) 곁에서 조금 우스꽝스럽고 기괴한 분장을 한 ',
          chara.sex,
          '를 보며 속으로 한숨을 내쉬었다.',
        ]);
        await era.printAndWait(
          '본래 아이들이 정성껏 분장하고 뛰놀면 어른들은 집에서 사탕을 나눠주며 기다리는 축제였을 터다. 하지만 학원 상층부에서 「학생들과 하나가 되자」는 등의 이유로 교직원들도 분장을 하고 나가 사탕을 나눠줄 것을 권장했고, 이를 위해 특별히 반차까지 주었다.',
        );
        await era.printAndWait(
          '어쩌면…… 그저 몇몇 어른들이 놀고 싶어서 핑계를 만든 것일지도 모른다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 그런 생각을 하던 찰나, 옆에서 살기 어린 시선이 느껴져 황급히 고개를 가로저으며 ',
          chara.get_colored_name(),
          '의 뒤를 바짝 따랐다.',
        ]);
        await era.printAndWait('피곤한 밤이었지만, 나름대로 재미는 있었다.');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 휴식을 즐기고 있을 때, 갑자기 문에서 조급하지 않으면서도 격렬한 노크 소리가 들려왔다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 누구의 소행인지 대충 짐작이 갔기에, 문을 열고 기괴한 복장을 한 ',
          chara.get_colored_name(),
          '에게 깜짝 놀란 척을 해주며 ',
          chara.sex,
          '과(와) 함께 사탕을 받으러 밖으로 나갔다……',
        ]);
        await era.printAndWait(
          '가는 길에 꽤나 희한한 것들을 많이 본 것 같다.',
        );
      }
    };
    f.title = '할로윈';
    return f;
  })(),
  cl_christmas: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await era.printAndWait([
        'クリスマスが来て、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' と一緒にサンタクロースに扮して祝った。はしゃぎすぎた気力を使い切るのは、夜になってからだった。',
      ]);
    };
    f.title = '크리스마스';
    return f;
  })(),
  /**
   * @author 雞雞
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async birthday_remote(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 멀리서 ',
      chara.get_colored_name(),
      '에게 생일 축하 메시지를 보냈다.',
    ]);
    await era.printAndWait([chara.get_colored_name(), '이(가) 무척 기뻐하는 것 같다.']);
  },
  /**
   * @author 阿格尼斯数码公司
   * @param chara
   * @param you
   */
  async birthday_normal(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      ' のために、盛大な誕生日パーティーを用意した！',
    ]);
    const buffer = [
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は誕生日の主役として、とても嬉しそうだ',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は揺れる燭光のなかで目を閉じ、今年の誕生日の願いを込めた',
          ]);
        },
      },
      {
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' はみんなの楽しさに感染し、ずっと笑顔を浮かべている',
          ]);
        },
      },
      {
        c: () =>
          // TALENTNAME:11 = 社交态度
          era.get(`talent:${chara.id.id}:11`) === -1 &&
          // EXPNAME:20 = 过生日次数
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            'さまざまな集まりに顔を出すことの多い ',
            chara.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            `が${chara.sex}のために誕生日パーティーを企画するとは全く予想しておらず、驚きのなかで楽しい一日を過ごした`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'そうは言っても、',
            chara.get_colored_name(),
            ' は',
            you.get_colored_name(),
            'の熱意を知ると、',
            you.get_colored_name(),
            `が${chara.sex}のために用意した誕生日パーティーを、予想外の全校規模の誕生日祭へ変えてしまった……！`,
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            'そうは言っても、',
            chara.get_colored_name(),
            ' は自分でもう半分の誕生日パーティーを用意していたらしい。二つのパーティーが混ざり、規模が爆発的に広がった……！',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' はこんなパーティーがあるとは思っていなかったらしく、集まった人々を見て少しこわごわしている',
          ]);
          if (era.get(`cflag:${chara.id}:1`) > 0) {
            await era.printAndWait('ただし、尻尾はとても速く揺れている');
          } else {
            await era.printAndWait('ただし、とても嬉しそうだ');
          }
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            '今回の ',
            chara.get_colored_name(),
            ' は意外にも、どの場面でも臆せず、みんなと一緒に誕生日の歌を歌った',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は相変わらず少し怯えた様子だが、贈り物をもらったときはとても嬉しそうだった',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:11`) === 1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は黙って誕生日ケーキを食べ、',
            era.get(`cflag:${chara.id}:1`) > 0
              ? '耳を揺らしながら'
              : '微笑みながら',
            `、まわりの人が${chara.sex}の昔話をするのを聞いている`,
          ]);
        },
      },
      {
        // TALENTNAME:7 = 坦率程度
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) === 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' は明らかにこんな行事を予想していなかったが、「最初から気づいていた」といった言い逃れで、驚いたかどうかをはぐらかした',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ` は誕生日パーティーの気に入らない点を文句にしながら、`,
            era.get(`cflag:${chara.id}:1`) > 0 ? '尻尾を振りつつ' : '大口で',
            'ケーキを食べている',
          ]);
        },
      },
      {
        c: () =>
          era.get(`talent:${chara.id}:7`) === -1 &&
          era.get(`exp:${chara.id}:20`) > 0,
        async h() {
          await era.printAndWait([
            chara.get_colored_name(),
            ' が以前まとめておいた、',
            you.get_colored_name(),
            ' の仕事ぶりを責める百の言い回しが、いまようやく役に立った',
          ]);
          await era.printAndWait(
            'ただし、今回の誕生日行事はよくできていた、と意外にも褒めた',
          );
        },
      },
    ];
    await get_random_entry(buffer.filter((t) => !t.c || t.c())).h();
  },
  /**
   * @author 黑奴队长
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async load_talk(chara, you) {
    // CFLAGNAME:81 = 妊娠阶段
    // CFLAGNAME:57 = 扩展变量
    // EXPNAME:117 = 生产次数
    if (
      era.get(`cflag:${chara.id}:81`) > 2 &&
      !era.get(`cflag:${chara.id}:57`)?.report
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は腹を撫で、絶望した目で遠ざかる ',
        you.get_colored_name(),
        ' を見送った。',
      ]);
    }
    if (
      era.get(`cflag:${chara.id}:81`) <= 2 &&
      !era.get(`exp:${chara.id}:117`) > 0
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' は哺乳瓶を手に、絶望した目で遠ざかる ',
        you.get_colored_name(),
        ' を見送った。',
      ]);
    }
  },
};
