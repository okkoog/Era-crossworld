// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file トレヴ - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/200500-Treve/daily-205.js');

module.exports = {
  ...__JaOriginal,
  // [번역 완료] good_morning
  good_morning(treve) {
    const buffer = [
      () => treve.say("그럼 다음엔 뭘 하고 놀까요?"),
      () => treve.say("지금 힘이 넘쳐나서, 에너지가 너무 가득해 조금 곤란할 정도예요."),
    ];
    if (era.get('love:205') >= 50) {
      buffer.push(
        () => treve.say("절 너무 예뻐해 주시는 거 아닌가요…… 조금 과보호일지도?"),
        () =>
          treve.say('이른 아침부터 저녁까지, 매분 매초 당신 생각만 하고 있어요.'),
      );
    }
    if (era.get('love:205') >= 75) {
      buffer.push(
        () => treve.say('당신을 만나기 전까지는 제가 한 사람만 바라보는 사람이라고 생각했어요.'),
        () =>
          treve.say('당신에게 다가갈 때면 첫사랑을 시작한 것처럼 심장이 두근거려요.'),
      );
    }
    get_random_entry(buffer)();
  },
  // [번역 완료] office_prepare
  async office_prepare(treve, callname) {
    const buffer = [
      () => treve.say_and_wait("당신에게 최고의 선물을 선사할 수 있게 해 주세요."),
      () =>
        treve.say_and_wait(`오늘의 승리는 제가 차지하겠어요. ${callname}을(를) 위해서요.`),
    ];
    await get_random_entry(buffer)();
  },
  async office_gift(treve) {
    const buffer = [
      () => treve.say_and_wait("세상이 변해도, 사랑만은 영원한 흔적으로 남는 법이죠."),
      () => treve.say_and_wait("이걸 사랑이라고 생각해도 될까요?"),
    ];
    await get_random_entry(buffer)();
  },
  // [번역 완료] office_rest
  async office_rest(treve) {
    const buffer = [
      () => treve.say_and_wait('앞으로 어떻게 될지는 모르겠네요.'),
      () => treve.say_and_wait("저랑 같이 쉬니까 즐거우신가요?"),
    ];
    await get_random_entry(buffer)();
  },
  // [번역 완료] office_game
  async office_game(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `${callname}! 왜 우마이소프트를 똥겜 제작사라고 부르는 사람이 있는 건가요?`,
        ),
      () =>
        treve.say_and_wait(
          "《어쌔신 크리드: 트레센》…… 모든 면에서 시리즈의 전작들을 완벽하게 뛰어넘은 역작이에요——",
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] basement_end
  basement_end: (() => {
    const title = '情愛の檻';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait('ある日、パリの街で。');
      await treve.say_and_wait([callname, '！']);
      await era.printAndWait(
        `聞き慣れた声に、${you.name} が振り返ると、${treve.name} が走ってくる。`,
      );
      await era.printAndWait(
        `幼く愛らしい${treve.sex}が、海のように澄んだ目で、下から ${you.name} を見つめている。`,
      );
      await era.printAndWait('風に揺れる髪から、薄いシャンプーの匂いがする。');
      await era.printAndWait(
        `${treve.name} は「はい！」と ${you.name} に手を振る。`,
      );
      await treve.say_and_wait('奇遇ね。');
      await era.printAndWait(
        `そう言いながら、${treve.name} の目がなぜか輝いている。`,
      );
      await treve.say_and_wait('観光、案内してあげる！');
      await era.printAndWait(`${treve.name} は胸を張る。`);
      era.printButton('「いいのか？」', 1);
      await era.input();
      await era.printAndWait(`一応聞くと、${treve.name} は元気よく頷く。`);
      await treve.say_and_wait(
        'じゃあまず、あそこに美味しい店があるから、入ろう。',
      );
      await era.printAndWait(
        `そう言って ${treve.name} が ${you.name} の手を引いた瞬間、一枚の紙が${treve.sex}のポケットから風に乗って落ちる。`,
      );
      await era.printAndWait(
        `落ちた紙を拾うと、${treve.name} の表情が一気に曇る。`,
      );
      await treve.say_and_wait('——あっ！');
      await era.printAndWait(
        `拾った瞬間——${treve.name} はすぐ手を伸ばして奪おうとする。`,
      );
      await era.printAndWait(
        `白い裏面を表に返すと、そこに映った写真を見て、${you.name} は思わず声を漏らす。`,
      );
      await era.printAndWait(
        `だがその写真は一瞬で奪われ、${treve.name} はすぐポケットに入れ、目を細める。`,
      );
      await treve.say_and_wait('見た……？');
      await era.printAndWait(
        `${treve.name} の問いに、${you.name} は無意識に首を振る。`,
      );
      await era.printAndWait(
        `${treve.sex}はすぐ微笑んで『よかった！』と言い、${you.name} の手を引いて走り出す。`,
      );
      await era.printAndWait(
        `${you.name} の頭からは、${treve.name} が隠そうとした写真が離れない。一瞬だったが、間違いない。`,
      );
      await era.printAndWait(`——そこに映っていたのは ${you.name} だ。`);
      await era.printAndWait(
        'この日は特に何もなく、気づくと空が赤く染まっていた。',
      );
      await era.printAndWait(
        `${treve.name} に案内され、フランスの名所を巡り、美味しいものを食べた。`,
      );
      await era.printAndWait(`${treve.name} との会話も弾み、楽しかった。`);
      await era.printAndWait('だが、あの写真だけが頭から離れない。');
      await era.printAndWait(
        `あれは ${you.name} がカメラに向かって撮られたものではない。撮った記憶がない。`,
      );
      await era.printAndWait(
        `暗がりから盗撮した写真だ。問題は、${treve.name} がなぜそんなことをしたかだ。`,
      );
      await era.printAndWait(
        'たまたま拾ったのか？それでも怖い。ストーカーか？',
      );
      await era.printAndWait(`だが ${treve.name} なら、大丈夫だろう。`);
      await era.printAndWait(`とにかく、あとで${treve.sex}本人に聞けばいい。`);
      await era.printAndWait(
        `${treve.name} は俯き、それから ${you.name} を見上げる。`,
      );
      await era.printAndWait(
        `その表情には一筋の悲哀がある。だが${treve.sex}の顔には強い覚悟が浮かんでいる。`,
      );
      await treve.say_and_wait(['私、', callname, ' のことが——']);
      await era.printAndWait('瞬間——肌が冷たい感触に濡れる。');
      await era.printAndWait(
        '続いて、空を覆う天蓋から雨粒が一気に溢れ、人々がいっせいに空を仰ぐ。',
      );
      await treve.say_and_wait([callname, '、こっち！']);
      await era.printAndWait(
        `細かい雨の中、${treve.name} は慌てて ${you.name} の手を引く。`,
      );
      await era.printAndWait(
        `${treve.name} に手を引かれて一心に走り、溜まった水たまりに波紋を広げ、気づくとある部屋の前に連れてこられていた。`,
      );
      era.printButton('「トレヴ、ここは？」', 1);
      await era.input();
      await era.printAndWait(
        `あまり見覚えのない道だが、${you.name} にはここが何か分かる——アパートだ。だが誰の部屋へ連れてこられたのかは、まったく分からない。`,
      );
      await era.printAndWait(
        `隣を見て ${treve.name} を見つめると、${treve.sex}はすぐ目を逸らす。`,
      );
      await era.printAndWait(
        `突然の雨で、${you.name} も ${treve.name} もびしょ濡れだ。`,
      );
      await era.printAndWait(`${treve.name} の服は量があるのに、透けている。`);
      era.printButton('「誰の部屋だ？」', 1);
      await era.input();
      await treve.say_and_wait('私の部屋。ちょっと待って。');
      await era.printAndWait(
        `${treve.name} は笑ってそう言う。それから部屋の扉を開け、タオルを一枚 ${you.name} に渡し、勢いで扉を閉じる。部屋の中から荒々しい音がする。${you.name} は渡されたタオルで顔を拭きながら待ち、数分後、${treve.name} が扉の隙間から顔を出す。`,
      );
      await treve.say_and_wait(['どうぞ、', callname, '、入って。']);
      await treve.say_and_wait('ちょっと散らかってるけど。');
      await era.printAndWait(
        `促されて、${you.name} は ${treve.name} の部屋へ入る。`,
      );
      await era.printAndWait(
        `${treve.name} は浴室へ向かおうとして、すぐ戻り、指でクローゼットを指す。`,
      );
      await treve.say_and_wait('あのクローゼット、絶対に開けないで。');
      era.printButton('「う、うん、分かった。」', 1);
      await era.input();
      await treve.say_and_wait('——絶対！');
      await era.printAndWait(`${you.name} は困惑して頷く。`);
      await era.printAndWait(
        'だがクローゼットの下の隙間から、写真のようなものが落ちている。',
      );
      await you.say_and_wait('これは何だ？');
      await era.printAndWait(
        `クローゼットは開けていない。大丈夫だろう。そんな軽い気持ちで、${you.name} は隙間に見えた写真を手に取り、背筋が凍る。`,
      );
      await era.printAndWait(
        `手が微かに震え始める。それは ${you.name} を盗撮した写真だ。`,
      );
      await you.say_and_wait('え、なぜ……');
      await era.printAndWait(
        `しかも、${treve.name} が持っていたのとは別物だ。`,
      );
      await era.printAndWait(
        `${you.name} は衝動的にそのクローゼットを開ける——一瞬、${you.name} は中に広がる光景に息を止める。`,
      );
      await you.say_and_wait('なぜ、ここ……全部俺……？');
      await era.printAndWait(
        `クローゼットの一面の壁に貼られた写真は、すべて ${you.name} を撮ったものだ。`,
      );
      await era.printAndWait(
        `どこで撮られたか議論する余地もない。だが ${you.name} は思わず恐怖を覚える。`,
      );
      await era.printAndWait(
        '唾を呑み、その光景に圧倒され、視線を落とすと、腰ほどの高さの箪笥があり、そこに日記帳が置いてある。',
      );
      await era.printAndWait(
        `震える手でそれを開き、中を適当に繰ると、可愛くきれいなフランス語で詳しく記された毎日——すべて ${you.name} のことだ。${you.name} が ${treve.name} に出会った日から、毎日そうだ。`,
      );
      await treve.used_to_say_and_wait(
        '日本から来たトレーナー。とても格好よくて、優しくて、笑顔がとても可愛い人。努力している姿も、ぎこちないフランス語も、好きになった。',
      );
      await treve.used_to_say_and_wait(
        'トレーナーは栗毛が好きらしい。私と一緒にいるから嬉しい。',
      );
      await treve.used_to_say_and_wait(
        'トレーナーが泊まるホテルは○○のホテル。私も一緒に泊まれないかしら。',
      );
      await treve.used_to_say_and_wait([
        '今日、',
        callname,
        ' に声をかけられた！たくさん聞けて嬉しかった。あの時間がずっと続けばいいのに。',
      ]);
      await treve.used_to_say_and_wait(
        '好き。とても好き。大好き。食べてしまいたいほど好き、好き好き好き好き好き好き——',
      );
      await era.printAndWait(`${you.name} は思わず日記を閉じ、口を押さえる。`);
      await era.printAndWait(
        '自身の危険を感じ、振り返ってこの場を逃げようとした瞬間——頭上に鈍器で殴られたような衝撃が走り、視界が揺れ、力なく倒れる。',
      );
      await era.printAndWait(
        `最後に聞こえたのは、${treve.name} の落ちた声色だ。`,
      );
      await treve.say_and_wait('見ちゃったのね……');
      await era.printAndWait(`それから ${you.name} の意識は消えた。`);
      era.drawLine();
      await era.printAndWait(
        `朦朧とした感覚の中で目覚め、${you.name} はあるベッドの上で眠っていた。`,
      );
      await era.printAndWait(
        '頭痛がする。何が起きたか分からず、とりあえず天井の淡い光を見つめ、記憶を探る。',
      );
      era.printButton(`「${treve.name} の部屋に来て、それから……」`, 1);
      await era.input();
      await era.printAndWait(`${you.name} はそこで思い出す。`);
      await era.printAndWait(
        `${treve.name} の異常さが、${you.name} の意識を一気に覚醒させる。`,
      );
      await era.printAndWait(
        `瞬間、${you.name} は自分の手足が手錠でベッドに繋がれていることに気づく。`,
      );
      era.printButton('「これは何だ？なぜ……？」', 1);
      await era.input();
      await era.printAndWait(
        `どれだけ力を入れても、手足は痛いだけだ。${you.name} が周囲を見回して助けを求めようとしたとき、隣から聞き慣れた声がする。`,
      );
      await treve.say_and_wait(['起きたのね、', callname, '。']);
      await era.printAndWait(`${treve.name}。`);
      await era.printAndWait(
        `${treve.sex}はベッドの脇に立ち、黒く染まった深海のような目で ${you.name} を見下ろしている。`,
      );
      era.printButton('「トレヴ、なぜ！？」', 1);
      await era.input();
      await treve.say_and_wait([
        '見るなって言った……',
        callname,
        ' が悪いのよ？',
      ]);
      await era.printAndWait(
        `${treve.name} は動けない ${you.name} の手に指を絡める。それからゆっくり ${you.name} の顔へ近づき、息が詰まる距離で ${you.name} を見つめる。`,
      );
      await treve.say_and_wait([
        '私は ',
        callname,
        ' に一目惚れした。それからずっと ',
        callname,
        ' のことだけ考えて、胸が苦しくて、とても好きで。',
      ]);
      await era.printAndWait(
        `${you.name} に跨った ${treve.name} が、手を ${you.name} の胸に置く。`,
      );
      await era.printAndWait(
        `本能がこのままでは危険だと叫ぶ。だがどれだけ暴れても手錠は外れない。${treve.uma_sex_title}に力で勝つことなど、なおさらあり得ない。`,
      );
      await treve.say_and_wait([
        callname,
        '、あなたはもう日本のものじゃない……ずっと私のもの。私のためだけに生きる人になるでしょ……？',
      ]);
      await era.printAndWait(
        `${treve.name} は無敵の笑顔を浮かべ、妖艶な目で、頬を微かに赤らめ、${you.name} の顔へ近づく。それから${treve.sex}は、呼吸すら遮る距離で囁く。`,
      );
      await treve.say_and_wait([
        '全部 ',
        callname,
        ' のせいよ？私をこうした ',
        callname,
        ' が悪いの。',
      ]);
      await era.printAndWait(
        `顔を逸らそうとしても、${treve.name} の手に押さえられる。それから ${treve.name} は容赦なく、唇を ${you.name} に重ねる。柔らかい感触が唇を塞ぎ、温かい感覚が脳を支配する。${treve.name} の舌が ${you.name} の固く閉じた唇を無理に開き、${you.name} の舌に絡む。`,
      );
      await treve.say_and_wait(['ん、ん……', callname, '……']);
      await era.printAndWait(
        `水音が口の中で響く。味わい尽くすように、${treve.name} はずっと唇で ${you.name} を求める。`,
      );
      await era.printAndWait(
        `呼吸が苦しくなってきたところで、${treve.sex}はやっと離れる。`,
      );
      await treve.say_and_wait(`ああ、ああ、${treve.name}……もう——`);
      await era.printAndWait(
        `思考が止まり、口に出そうとした瞬間、${treve.name} がまた唇を重ね、${you.name} の言葉を塞ぐ。`,
      );
      await era.printAndWait(
        `呼吸が苦しい。逃げようとしても、${treve.name} は ${you.name} を放さない。`,
      );
      await era.printAndWait(
        `ずっと、ずっと、ずっと、${treve.name} の愛は限りを知らず、唇を重ね、舌を絡め、愛を求める。`,
      );
      await era.printAndWait(
        `${treve.name} は離れ、遠く伸びた舌から糸を引く唾を呑み、笑う。`,
      );
      await treve.say_and_wait([
        callname,
        ' は私のもの。私以外には誰にも見せない。日本にも帰さない。ずっと、ずっと、ずっと愛してあげる。',
      ]);
      await era.printAndWait(
        `${treve.name} は手を ${you.name} の頬に置き、抑えきれない昂ぶりでもう一度唇を重ねる。`,
      );
      era.drawLine();
      await era.printAndWait('数日後、静かな部屋に置かれたテレビが音を出す。');
      await you.say_as_unknown_and_wait(
        '——フランスを訪れていた日本のトレーナーが行方不明になりました。現地警察と協力して捜索していますが、現時点で成果はなく、捜査は極めて困難です。',
      );
      await treve.say_as_unknown_and_wait('ふふ……');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] o_c_pray
  async o_c_pray(treve, you, callname, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      `은(는) ${treve.name}에게 근처 신사에 가자고 제안했고, ${treve.sex}는 기쁘게 고개를 끄덕였다.`,
    ]);
    await treve.say_and_wait('무슨 생각을 그렇게 하세요? 영 집중하지 못하시는 것 같아요.');
    await treve.say_and_wait('저 먼저 운세 뽑으러 갈게요!');
    if (dice < 0.5) {
      await treve.say_and_wait(
        `【대길】이 나왔어요! 한 번 더 뽑아도 될까요? 이건 ${callname}에게 선물하고 싶거든요.`,
      );
    } else {
      await treve.say_and_wait('으아아, 이런 건 역시 한 번 경험해 보는 걸로 족해요……');
    }
  },

  // [번역 완료] o_r_fishing
  async o_r_fishing(treve, you) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '드디어 큰 물고기가 걸려들었네요…… 얼마 전에도 꽤 괜찮은 녀석을 낚으셨다고요? 거짓말, 전 보지도 못했는걸요.',
        ),
    ];
    if (you.sex_code === 1 && treve.sex_code !== 1) {
      buffer.push(() =>
        treve.say_and_wait(
          `한 마리도 안 낚이네요…… 흥, ${you.actual_name} 나으리께서 이 소녀에게 하사해 주신 걸로 치죠.`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_r_walking
  async o_r_walking(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '안심하고 제 손을 잡으세요. 설령 멀리 도망친다 해도 괜찮으니까요.',
        ),
      () =>
        treve.say_and_wait('그으…… 로맨스 알레르기에 눈치 하나도 없는 당신 때문에 속 터져 죽겠어요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_arcade
  async o_s_arcade(treve, you, callname, call_target) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '그거 아세요? 프랑스의 오락실에는 연인들뿐만 아니라 귀여운 꼬마 소꿉친구들도 자주 보인답니다.',
        ),
      () =>
        treve.say_and_wait([
          '으윽, 져버렸어요……',
          you.get_colored_actual_name(),
          '、저기 있는 【펀치력 측정기】에서 다시 한판 붙어요.',
        ]),
    ];
    if (call_target) {
      buffer.push(() =>
        treve.say_and_wait([
          callname,
          '！',
          call_target,
          ' 인형이 있네요! 하나 뽑아도 될까요?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_dating
  async o_s_dating(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '당신이 평소에 하루를 어떻게 보내는지 제대로 지켜봐야겠어요.',
        ),
      () => treve.say_and_wait('왜 제겐 꽃을 안 주시나요? 저도 꽃을 좋아한단 말이에요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_drawing
  async o_s_drawing(treve, callname) {
    const buffer = [
      () => treve.say_and_wait(`와아아…… ${callname}! 제 용돈 좀 가불해 주세요.`),
      () => treve.say_and_wait('파리 4박 5일 호화 여행…… 진짜로 당첨되면 일정을 어떻게 짤까요?'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '당신의 노래 솜씨는 정말 매혹적이네요. 어쩌면 《기차는 떠나고》나 《장밋빛 인생》 같은 곡을 배워 보시는 게 어떨까요……',
        ),
      () =>
        treve.say_and_wait(
          '미리 말해 두겠는데, 전 목이 너무 아파서 여기서 당신이랑 같이 부르는 건……',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_movie
  async o_s_movie(treve) {
    const buffer = [
      () => treve.say_and_wait('엄청난 몰입감을 주는 명작이네요. impeccable à tous les sens.'),
    ];
    if (treve.sex_code !== 1 && era.get('cflag:0:性别') === 1) {
      buffer.push(() =>
        treve.say_and_wait(
          '스승님께서 저희에게 딱 어울리는 고전 영화가 있다고 하셨어요. 《Un homme et une femme》라는 제목인데…… 남자 하나와 여자 하나라니, 참 묘한 제목이죠, 하하하……',
        ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(treve) {
    const buffer = [
      () => treve.say_and_wait('이런 레스토랑은 꼭 연인들이 데이트하러 오는 곳 같네요……'),
      () =>
        treve.say_and_wait(
          '이런 멋진 곳은 어떻게 찾으신 거예요?! 저렴한데 양도 많아서 도저히 다 못 먹겠어요!',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `수박이…… 왜 이렇게 비싸죠?! 게다가 조각으로 팔다니, 이게 말이 되나요, ${callname}?`,
        ),
      () => treve.say_and_wait('전 이것저것 고르는 걸 잘 못해서……'),
      () => treve.say_and_wait('오늘 마침 할인 행사를 하네요, chanceux~'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_cook
  async office_cook(treve) {
    const buffer = [
      () => treve.say_and_wait('프랑스 요리는 뭐라고 해야 할까…… 아하하하, 이 이야기는 일단 넘어가죠.'),
      () => treve.say_and_wait('으우, 나쁜 사람한테 위장을 붙잡혀 버리겠어요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_study
  async office_study(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '이상하네요, 당신도 프랑스어를 배울 때 이렇게 더듬거리셨나요? 아니라고요? ……얄미운 천재 같으니.',
        ),
      () =>
        treve.say_and_wait(
          '왠지 당신이 곁에 있으면 더 잘 뛸 수 있을 것 같아요…… 어때요, 멋지죠?',
        ),
      () => treve.say_and_wait('잠깐 멈춰요! 아무리 변태라지만 이런 식으로 지도하는 게 어디 있어요!'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_dating
  async s_a_dating(treve) {
    const buffer = [
      () => treve.say_and_wait('무서울 정도로 능숙하시네요…… 혹시 이게 본업이신 건 아니겠죠!'),
      () =>
        treve.say_and_wait('지금에 비하면, 예전의 삶은 그저 『죽음을 기다리는 것』뿐이었다고 할 수 있겠네요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(treve) {
    const buffer = [
      () => treve.say_and_wait('멀리서 전하는 나의 키스는 씁쓸하고도 애달프구나.'),
      () => treve.say_and_wait('우리의 운명은 험난하고도 굴곡지구나.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_r_lunch
  async s_r_lunch(treve) {
    const buffer = [
      () => treve.say_and_wait('짜잔! 오늘 점심의 퀄리티는 꽤 훌륭하답니다.'),
      () =>
        treve.say_and_wait(
          '랍스터, 대하, 구운 새우, 홍합에 구운 오징어, 사이드 메뉴는 감자튀김과 해물죽이에요. 몸보신 톡톡히 하세요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] select
  select(treve, callname) {
    const buffer = [() => treve.say(`Bonjour~ 지시사항이 있나요, ${callname}?`)];
    if (era.get('love:205') >= 50) {
      buffer.push(() => treve.say('부르실 때 이런 곳을 찌르면 안 돼요.'));
    }
    if (era.get('love:205') >= 75) {
      buffer.push(() => treve.say('후후, 괜찮아요.'));
    }
    get_random_entry(buffer)();
  },

  // [번역 완료] talk
  async talk(treve) {
    const buffer = [];
    if (era.get('base:205:体力') < 0.3 * era.get('maxbase:205:体力')) {
      buffer.push(
        () => treve.say_and_wait('품을 잠시 빌려주실 수 있나요?'),
        () => treve.say_and_wait('지금은 걷는 것조차 힘들답니다~'),
      );
    } else {
      switch (era.get('cflag:205:干劲')) {
        case 2:
          buffer.push(() =>
            treve.say_and_wait(
              '방금 건 저 혼자 한 훈련이에요, 훈련이라니까요.',
            ),
          );
          era
            .getAddedCharacters()
            .some((cid) => cid !== 205 && era.get(`love:${cid}`) >= 50) &&
            buffer.push(() =>
              treve.say_and_wait(
                `당신과 ${treve.couple_title}가 어떻게 만났는지 제게 이야기해 주시면 안 되나요?`,
              ),
            );
          era.get('love:205') >= 50 &&
            buffer.push(() =>
              treve.say_and_wait(
                '당신에게 『내 사랑』이라고 말할 수 있다니, 정말 좋은 느낌이네요.',
              ),
            );
          break;
        case 1:
          buffer.push(
            () =>
              treve.say_and_wait('사람마다 저마다의 이야기가 있어서, 전 듣는 걸 무척 좋아해요.'),
            () => treve.say_and_wait('앞으로도 계속 절 보살펴 주셨으면 좋겠어요.'),
          );
          break;
        case 0:
          buffer.push(
            () => treve.say_and_wait('당신을 기다리는 건 정말 쉬운 일이 아니네요.'),
            () =>
              treve.say_and_wait(
                '제가 『초보』 트레이너 씨를 위해 시범을 보여 드려야겠어요.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              treve.say_and_wait('만약 절 안아 주신다면 제 컨디션이 조금은 나아질지도 몰라요.'),
            () => treve.say_and_wait('제 열정이 흔적도 없이, 소리 소문도 없이 사라져 버렸어요……'),
          );
          break;
        case -2:
          buffer.push(
            () => treve.say_and_wait('절 쉬게 해 주신다면 더할 나위 없이 좋겠어요.'),
            () => treve.say_and_wait('죽음이란 인생의 세금 같은 것……'),
            () =>
              treve.say_and_wait(
                '당신은 단순한 트레이너가 아니라 여심을 뒤흔드는 바람둥이예요……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
};
