// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/106000-Nice-Nature/love-60"),

  // [번역 대상] 49
  async 49(nature, you, callname, self_call) {
    const ret = [];
    await nature.print_and_wait([
      'ある夜、',
      nature.get_colored_name(),
      ' は、自分の ',
      you.get_colored_actual_name(),
      ' への想いが、担当の枠を少しはみ出していることに気づきはじめていた。',
    ]);
    await nature.print_and_wait([
      you.sex,
      ' と過ごした時間を思い出すたび、淡い温もりが、気づかないうちに胸の奥へ浮かんでくる。',
    ]);
    await nature.say_and_wait([callname, '……']);
    await nature.print_and_wait(
      'ひとりごとで名前を呼ぶだけでも、その顔がはっきりと目の前に浮かぶ。',
    );
    await nature.print_and_wait(
      'それは年頃の淡いときめきなのか、それとも毎日隣にいたせいで生まれた錯覚なのか。',
    );
    era.println();

    era.printButton(
      `「あたし、${callname} のことが好きみたい……」（関係を進める）`,
      1,
    );
    era.printButton(
      `「ううんううん、${self_call}がそんな気持ちになるわけないでしょ？」（まだ進めない）`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '明かりの下で、',
        nature.teen_sex_title,
        'は大事にしている紙のトロフィーをいじりながら、思わずつぶやいていた。',
      ]);
      await nature.say_and_wait([
        '待って！ 今なんて言ったのあたし！ 恋してる',
        nature.teen_sex_title,
        'みたいじゃない！ あたし、そういう役じゃないってば！',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'は言葉を必死に否定する。それでも、想いの種はもう、静かに芽を出していた……',
      ]);
      era.drawLine({ content: 'それから少しして……', position: 'left' });
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は自室のベッドにひとり座っていた。もともと薄着の',
        nature.sex,
        'は、灰色のショートパンツに手をかけ、下着ごと下ろす。',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'の手にはTシャツ。想いを寄せる相手の、その一枚。',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'はTシャツを鼻先に押し当てたまま、すでに湿りはじめた秘部へ手を伸ばす。入口をこすり、ときには突起を指ではさみ、行為は少しずつ深くなっていく。',
      ]);
      nature.say(['トレーナー、', you.adult_sex_title, '、もっと……ほしい……']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' の手は、もう真っ赤に充血し蜜を滴らせる秘所を、乱れながら刺激し、一段ずつ先へ進んでいく。',
      ]);
      await nature.print_and_wait([
        '十分に緩んだと判断したのか、',
        nature.sex,
        'はより快感の得られる場所へ指を沈める。吸い込まれた指が内壁と擦れ、粘る音を立てた。',
      ]);
      await nature.say_and_wait('ん～～～～！！');
      await nature.print_and_wait([
        'はっきりと絶頂を迎えた ',
        nature.get_colored_name(),
        ' は、声にならない喘ぎを漏らし、荒い息をつく。呼吸を整えるため、',
        nature.sex,
        'は一度手を止め、それからまた指を動かしはじめる。',
      ]);
      nature.say([
        callname,
        '、',
        callname,
        '……こんな下品なことしてるの、',
        callname,
        ' のこと考えて、こうなっちゃったから……',
      ]);
      await nature.print_and_wait([
        nature.sex,
        'の中で攪拌する指が、速度を上げる。ぐちゅぐちゅと淫らな音が鳴るたび、',
        nature.sex,
        'の意識も乱れていく。',
      ]);
      nature.say([
        'あたし……あたし、',
        callname,
        ' が好き、大好き！ だから、もっと激しく……！',
      ]);
      nature.say(['いく、いく、', callname, '、いっちゃう～～～～！！']);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は体を反らせ、腰を止めどなく震わせ、潮を噴き出した。シーツを汚さないよう敷いてあったタオルを越え、シーツまでびしょ濡れにする。長い絶頂に',
        nature.sex,
        'の全身が震え、満たされた余韻のなかで、',
        nature.sex,
        'は深く眠りに落ちた。',
      ]);
    } else {
      await nature.print_and_wait([
        '夜のひとりごとだろう、と ',
        nature.get_colored_name(),
        ' は布団をかぶり、雑念を振り払うように早く眠ることにした。',
      ]);
    }
    return ret;
  },

  // [번역 완료] 74-1
  async '74-1'(nature, you, callname) {
    const ret = [];
    await nature.print_and_wait([
      '어느 날 밤, ',
      nature.get_colored_name(),
      '은(는) 자신의 ',
      you.get_colored_actual_name(),
      '을(를) 향한 감정이 사랑이라는 사실을 깨닫기 시작했다.',
    ]);
    await nature.print_and_wait(
      '창가에 엎드려 길 건너편에 아직 불이 켜진 트레이너실을 바라보자 따스한 감정이 가슴을 감쌌다.',
    );
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      '의 세심한 보살핌을 떠올리며 ',
      nature.get_colored_name(),
      '은(는) 가슴속 감정의 이름을 이해한 듯했다.',
    ]);
    era.println();

    era.printButton(`「나…… ${callname}을(를) 좋아해!」 (관계를 발전시킨다)`, 1);
    era.printButton(
      `「아니, 아니! 우린 ${nature.uma_sex_title}와 담당 트레이너 사이잖아! 밤만 되면 왜 이렇게 감상적이 되는 거야. 어서 자자!」 (아직 발전시키지 않는다)`,
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.print_and_wait([
        '목소리는 가늘게 떨렸지만 ',
        nature.teen_sex_title,
        '의 결심은 확고했다.',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        '은(는) 자신의 마음을 받아들였고 무엇을 원하는지도 알게 되었다. 남은 건 마지막 한 가지……',
      ]);
    }
    return ret;
  },

  // [번역 대상] 74-2
  async '74-2'(nature, you, callname, call_55) {
    const ret = [];
    await nature.say_and_wait('はぁ～～～～');
    await nature.print_and_wait([
      'トレーナー室で、',
      nature.get_colored_name(),
      ' は今日何度目かのため息をつく',
    ]);
    await nature.print_and_wait([
      '原因は、',
      nature.sex,
      'の手にある一枚の便箋だ',
    ]);
    await nature.print_and_wait(
      'ピンクの封筒にハートのシール。誰が見てもラブレターだとわかる。',
    );
    await nature.print_and_wait([
      '今朝、名前も知らない',
      nature.uma_sex_title,
      'から渡されたものだ、と',
      nature.sex,
      'は言う。',
      callname,
      'に渡してください、と。',
    ]);
    await nature.print_and_wait([
      '頼まれた以上、',
      you.sex,
      'に渡すしかない。恋する',
      nature.uma_sex_title,
      nature.child_sex_title,
      'の気持ちは、',
      nature.get_colored_name(),
      ' 自身がいちばんよく知っている',
    ]);
    await nature.say_and_wait('でも……それでも', true);
    await nature.say_and_wait(
      'トレーナーとその子が、もしうまくいっちゃったら——',
      true,
    );
    await nature.say_and_wait(
      [
        'いっそ捨てちゃおうか…いや、いや、そんなの無理。でも ',
        callname,
        ' を取られたくないよ…',
      ],
      true,
    );
    await nature.print_and_wait([
      '赤毛の',
      nature.teen_sex_title,
      'は何度も考える。正しい答えを必死に探すが、見つからない',
    ]);
    nature.say(['はぁ～～～', callname, '……']);
    era.printButton('「なに、ネイチャ、どうしたの？」', 1);
    await era.input();
    nature.say(['あ、', callname, '、聞いてよ、実はね……']);
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' は言いかけて何かにはっとし、悲鳴を上げて飛びのいた。',
    ]);
    await nature.say_and_wait('あああああああ！？');
    nature.say([
      callname[0],
      callname[0],
      callname[0],
      callname,
      '！ いつからいたの！？',
    ]);
    era.printButton('「今来たところ。ん？ その手紙は……？」', 1);
    await era.input();
    await nature.say_and_wait(
      'いまさら隠しても遅い。こんなデザイン、すぐラブレターだとバレる……',
      true,
    );
    era.printButton('「かわいい便箋だね。ファンレター？」', 1);
    await era.input();
    await nature.say_and_wait('まさか、気づいてない。', true);
    await nature.say_and_wait('ちがう、ファンレターじゃなくて……');
    era.printButton('「違うの？ じゃあ何の手紙？」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      ' から二球目の直球を投げられ、',
      nature.get_colored_name(),
      ' は、さっき反射で否定した自分を後悔する。もう逃げ場がない',
    ]);
    await nature.say_and_wait('うん、これは……');
    await nature.say_and_wait(
      [you.sex, 'に、こんな形で渡すことになるなんて'],
      true,
    );
    await nature.print_and_wait([
      '自業自得、と',
      nature.teen_sex_title,
      'は思いつつも、覚悟を決めて手紙を ',
      callname,
      ' に渡した。',
    ]);
    await nature.say_and_wait('その……ラブレター……');
    era.printButton('「え？ ラブレター？ やっぱりネイチャはモテるなあ。」', 1);
    await era.input();
    await nature.say_and_wait([
      'ちょっと！ 男の子がこんな便箋でラブレター書くわけないでしょ？ ',
      callname,
      ' 宛、あなたへの！',
    ]);
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' は混乱しすぎて、手紙を卓に乱暴に置いてしまった。',
    ]);
    era.printButton('「僕への……ラブレター？」', 1);
    await era.input();
    await nature.print_and_wait([
      you.get_colored_actual_name(),
      ' は便箋を丁寧に見つめ、その顔に浮かんだ笑顔が、',
      nature.get_colored_name(),
      ' の胸を締めつける',
    ]);
    era.printButton('「ありがとう、すごく嬉しい。」', 1);
    await era.input();
    await nature.say_and_wait('やっぱり、こういうの貰うと嬉しいんだ？');
    era.printButton(
      `「可愛い${nature.uma_sex_title}${nature.child_sex_title}、できれば好きな${nature.uma_sex_title}${nature.child_sex_title}からなら、すごく嬉しいよ。」`,
      1,
    );
    await era.input();
    await nature.say_and_wait(
      ['好きな', nature.uma_sex_title, nature.child_sex_title, '……そうなんだ'],
      true,
    );
    await nature.say_and_wait(
      [
        callname,
        ' の好きな',
        nature.uma_sex_title,
        nature.child_sex_title,
        'が',
        nature.sex,
        'にラブレターを渡した。お互いの気持ちを知ったふたりは両想い……',
      ],
      true,
    );
    await nature.say_and_wait(
      '最初から、あたしに勝ち目なんてなかったんだ……',
      true,
    );
    await nature.print_and_wait([
      nature.get_colored_name(),
      ' の胸の痛みは限界だが、それでも会話を続ける……',
    ]);
    await nature.say_and_wait([
      'そっか、',
      callname,
      '、好きな',
      nature.uma_sex_title,
      nature.child_sex_title,
      '、',
      nature.sex,
      'も可愛いんだし、お似合いじゃない？',
    ]);
    era.println();

    era.printButton(
      '「え……？ このラブレター、ネイチャがくれたんじゃないの？」（関係を進める）',
      1,
    );
    era.printButton(
      '「いたらいいんだけどね。残念、今はそういう相手はいないよ。」（まだ進めない）',
      2,
    );
    ret.push((ret.update = await era.input()));
    if (ret.update === 1) {
      await nature.say_and_wait('は？');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' の言葉に、',
        nature.get_colored_name(),
        ' は一瞬、頭が真っ白になる。',
      ]);
      await nature.say_and_wait(
        [callname, '、あたしが書いたラブレターだと思ってる？'],
        true,
      );
      await nature.say_and_wait(
        [callname, '、ラブレターをもらって喜んでる？'],
        true,
      );
      await nature.say_and_wait(
        [
          callname,
          ' は、好きな',
          nature.uma_sex_title,
          nature.child_sex_title,
          'からのラブレターだと思って、嬉しいって？',
        ],
        true,
      );
      await nature.say_and_wait(
        [
          '——つまり、',
          callname,
          ' の好きな',
          nature.uma_sex_title,
          nature.child_sex_title,
          'は……',
        ],
        true,
      );
      await nature.print_and_wait([
        '前後の筋をようやくつなぎ合わせた ',
        nature.get_colored_name(),
        ' は、一瞬で顔を真っ赤にした。',
      ]);
      await nature.say_and_wait([
        'あー！ そういえば、',
        call_55,
        ' が用事あるんだった～！ ごめん！',
        callname,
        '！ ちょっと行ってくる！ 今夜ご飯作るから、そんとき会お！',
      ]);
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' の言葉を遮り、',
        nature.get_colored_name(),
        ' はトレーナー室から飛び出した',
      ]);
      await nature.print_and_wait(
        '走って走って、商店街で足が止まり、力なく座り込む',
      );
      await nature.say_and_wait(
        'あたしバカ？ なんで逃げるの？ 受け止めればよかったのに？ あー！ さっき夜ご飯作るって言っちゃったし！',
      );
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は頭をかきむしる。この流れで夜に ',
        you.get_colored_actual_name(),
        ' に会いに戻ったら、答えの準備ができてるってことになる……',
      ]);
      await nature.say_and_wait([
        'もう、振り返らない。前に進もう。',
        callname,
        ' がくれた全部に、報いるために。',
      ]);
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は覚悟を決める…立ち上がり、文具店へ向き直った。',
      ]);
      await nature.print_and_wait('自分の気持ちを乗せる便箋を買うために。');
      await nature.say_and_wait(
        'それから……念のため、下着も替えとこう……た、ただの念のためだから……',
      );
    } else {
      await nature.say_and_wait('えっ？ そうなの？');
      await nature.print_and_wait([
        you.get_colored_actual_name(),
        ' の答えは ',
        nature.get_colored_name(),
        ' の予想外で、胸の締めつけが一気に緩んだ。',
      ]);
      await nature.say_and_wait('そっか……えへへ、じゃあ……まだチャンスあるね。');
      era.printButton('「ん？ 何のチャンス？」', 1);
      await era.input();
      await nature.say_and_wait('ひみつ！');
      await nature.print_and_wait([
        nature.get_colored_name(),
        ' は悪戯っぽい笑顔に切り替え、軽く跳ねるようにトレーナー室を出ていった',
      ]);
      await nature.say_and_wait(
        'でも、これじゃ悠長にしてられない。動かないと……',
      );
    }
    return ret;
  },

  // [번역 완료] 89
  async 89(nature, you) {
    await nature.print_and_wait([
      '밤이 되자 ',
      nature.get_colored_name(),
      '은(는) 벽장에서 조금 낡은 쿠키 통을 꺼내 소중히 탁자 위에 올려놓았다.',
    ]);
    await nature.print_and_wait([
      '통 안에는 종이로 접은 트로피들이 가지런히 쌓여 있었다. 하나하나 모두 ',
      you.get_colored_actual_name(),
      '와 함께해 온 발자취이자 둘도 없는 추억이었다. 달려온 레이스뿐 아니라 두 사람이 함께 보낸 행복한 시간까지 그 안에 담겨 있었다.',
    ]);
    await nature.print_and_wait([
      '앞으로 이 수집품이 더 늘어날 거라고 생각하자 저절로 미소가 ',
      nature.sex,
      '의 뺨에 떠올랐다.',
    ]);
  },
};
