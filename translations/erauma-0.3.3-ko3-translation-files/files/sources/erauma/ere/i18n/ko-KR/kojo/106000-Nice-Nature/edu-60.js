// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/106000-Nice-Nature/edu-60"),

  // [번역 완료] arim_kin_classical
  arim_kin_classical: (() => {
    const title = '遠望';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await nature.say_and_wait('이, 이겨 버렸어……! 『아리마 기념』에서 우승했어……');
      era.printButton('「축하해!」', 1);
      await era.input();
      await nature.say_and_wait('트레이너! 들어 봐, 나……!');
      await nature.say_and_wait('전부 들렸어. 모두가 응원하는 목소리!');
      await nature.say_and_wait('거짓말 같지? 하지만 진짜야!');
      await nature.say_and_wait(
        '평소에는 내 심장 소리와 숨소리, 바람 소리밖에 들리지 않았는데.',
      );
      await nature.say_and_wait(
        '오늘은…… 똑똑히 들렸어. 『네이처, 힘내!』라고 외치는 소리가!',
      );
      await nature.say_and_wait(
        '그래서 체력이 바닥날 것 같을 때도 버틸 수 있었어. 정말…… 즐겁게 달렸어!',
      );
      await era.printAndWait(
        `나이스 네이처와 응원하는 사람들 사이에는 깊은 유대가 있다. ${nature.sex}에게 오늘의 『아리마 기념』은 특별한 경기였던 듯하다.`,
      );
      await nature.say_and_wait('아직 더 달리고 싶어. 내년에도…… 이 무대에 서고 싶어!');
      await nature.say_and_wait('……아, 바보야! 너무 앞서갔잖아!');
      await nature.say_and_wait('하지만 정말 즐거웠단 말이야…… (우물쭈물)');
      await era.printAndWait(
        '확실히 지금부터 내년 『아리마 기념』을 목표로 삼는 건 조금 이르다. 그 사이 지금의 기세를 유지할 레이스를 넣는다면……',
      );
      era.printButton('「『다카라즈카 기념』도 있어!」', 1);
      await era.input();
      await nature.say_and_wait(
        '『다카라즈카 기념』…… 팬 투표로 출전 선수를 정하는 레이스 맞지? 『아리마 기념』처럼……',
      );
      await nature.say_and_wait(
        '나, 이런 레이스에서 더 힘을 낼 수 있을지도 몰라. 응, 출전하고 싶어…… 『다카라즈카 기념』!',
      );
      await era.printAndWait(
        `하지만 그 레이스까지는 아직 시간이 조금 남았다. ${you.name}와 나이스 네이처는 그동안 여러 레이스에 출전하며 『다카라즈카 기념』을 향해 성장하기로 했다.`,
      );
      await nature.say_and_wait(
        '우리 너무 앞서가나? 여기서 다음 레이스까지 정하다니──',
      );
      await era.printAndWait(
        '상점가 사람들 「네이처──! 멋진 달리기였어──!」',
      );
      await era.printAndWait(
        `상점가 사람들 「세계 최고의 ${nature.uma_sex_title}야! 우리의 자랑이야──!」`,
      );
      await nature.say_and_wait(
        '잠깐, 모, 모두들……! 너무 시끄러워, 여긴 가게 안도 아니잖아!',
      );
      await nature.say_and_wait('그보다 세계 최고라니 너무 과장하잖아! 정말, 부끄러워!');
      await nature.say_and_wait('정말이지…… 에헤헤.');
      era.printButton('「지금은 마음껏 기뻐하자.」', 1);
      await era.input();
      await nature.say_and_wait(
        '그게 나한테는 제일 어렵다니까! 알고 있지? 하지만 지금은…… 그래. 네 말이 맞아.',
      );
      await nature.say_and_wait(
        '지금은…… 마음껏 기뻐해야겠지. 여기서 모든 게 끝나는 것도 아니니까.',
      );
      await era.printAndWait(
        `나이스 네이처는 나지막이 중얼거리며 『아리마 기념』에서 함께 달렸던 ${nature.uma_sex_title}들을 바라보았다……`,
      );
      await nature.say_and_wait('오늘도…… 울퉁불퉁한 트로피, 준비해 뒀어?');
      era.printButton('「물론이지!」', 1);
      await era.input();
      await nature.say_and_wait(
        '……에헤헤. 고마워. 그럼…… 먼저 반성회부터 하자.',
      );
      await nature.say_and_wait(
        '테이오와의 차이에만 신경 쓰다가 다른 라이벌들을 잊고 있었어.',
      );
      await nature.say_and_wait(
        '오늘 레이스에서 그걸 깨달았지. 조금이라도 방심했다면 졌을 거야.',
      );
      await nature.say_and_wait(
        '지금은 이겼지만…… 앞으로 주변 선수들은 더 강해질 테니까.',
      );
      await nature.say_and_wait(
        '이대로는 안 돼. 테이오에게 이기겠다고 말하는 것만으로는 부족해.',
      );
      await era.printAndWait(
        `세대를 넘어 경쟁하는 『아리마 기념』에 출전하면서 ${nature.sex}의 시야가 넓어졌다…… 성장했다는 증거다!`,
      );
      await nature.say_and_wait('다른 선수들에 관해서도 더 많이 알아야겠어……!');
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그것도——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] arim_kin_senior
  arim_kin_senior: (() => {
    const title = '有馬の勝者は……';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, callname) => {
      await nature.say_and_wait('あ……');
      await nature.say_and_wait('あたし……勝ったんだよね？');
      era.printButton('「ネイチャ、やったぞ！」', 1);
      await era.input();
      await nature.say_and_wait(`${callname}……`);
      await nature.say_and_wait('全然実感ない……ほんとに勝ったの？');
      await era.printAndWait(
        '観客たち「ナイスネイチャ──！！ おめでとう──！！」',
      );
      await nature.say_and_wait('──っ！ えっ？ すごい……こんなにみんな……');
      await era.printAndWait('商店街の人たち「ネイチャ──！ おめでとう──！！」');
      await nature.say_and_wait('商店街のみんな……見に来てくれたんだ。');
      await nature.say_and_wait(
        'みんなが待っててくれた。で、あたし……やっと応えた。',
      );
      era.printButton('「全部、君が掴んだものだよ」', 1);
      await era.input();
      await nature.say_and_wait('……');
      await nature.say_and_wait(`うう～～～～！ ${callname}……！`);
      await nature.say_and_wait(
        '諦めなくてよかった……！ 夢を追い続けてよかった～～！',
      );
      await era.printAndWait(
        `それは${nature.sex}が昔流していた不安の涙とは違う。喜びの大粒の涙が、汗と一緒に陽の下で輝いていた。そのとき──`,
      );
      await teio.say_and_wait('──もう、なんで泣いてるの！？');
      await nature.say_and_wait('……！ テイオー……！');
      await teio.say_and_wait(
        'ボクを倒して1着なんだよ？ ボクを……倒したんだよ……！ 勝者は威勢よく笑うもんだよ！',
      );
      await nature.say_and_wait(
        '……うん、うん、そうだね。あなたもいつも笑ってるし……',
      );
      await nature.say_and_wait('ごめん、大丈夫。あたし……もう泣かない。');
      await teio.say_and_wait(
        'それでいい。泣き続けてたら聞こえないよ。これが──',
      );
      await era.printAndWait('観客の歓声「わあああああ……ネイチャ──！」');
      await teio.say_and_wait('──熱い歓声！ 全部、君のものだよ！');
      await nature.say_and_wait('わかってる。ちゃんと……聞こえてる。');
      await nature.say_and_wait(
        '……ありがとう、テイオー。あなたがいなかったら、あたし……ここまで走れなかった。追いかけてくれてありがとう。正直、後ろを走るのは大変だった。でも……卑怯なあたしは、その位置が楽でもあった。これから先は、どんな挑戦も正面から受ける。',
      );
      await nature.say_and_wait('あたしの物語の主役は、あたし自身！');
      await era.printAndWait(
        'レース後の勝者インタビュー。今のナイスネイチャは、無数のフラッシュに照らされている。',
      );
      await era.printAndWait(
        '記者A「──今回の『有馬記念』は、相手がどれも手強いレースでした。勝てた理由はどこにあると思いますか？」',
      );
      await nature.say_and_wait('そうだね……みんな、ほんとに強かったと思う。');
      await nature.say_and_wait(
        `でもあたしも『強い』${nature.uma_sex_title}だよ。力を全部出せたからだと思う。`,
      );
      await nature.say_and_wait('うん、頑張ったから……はっきり言える！');
      await era.printAndWait(
        '記者A「では、ナイスネイチャさん、最後にファンへ一言！」',
      );
      await nature.say_and_wait(
        'あの、いつも応援してくれるみんな、ありがとう。',
      );
      await nature.say_and_wait(
        '期待に応えられないこと、たくさんあったのに、それでも素直に応援してくれた。',
      );
      await nature.say_and_wait(
        'みんなのおかげで、今日ここに来られた……挫折もいっぱいしたけどね！',
      );
      await nature.say_and_wait('……わがまま、言っていい？');
      await nature.say_and_wait(
        'その……これからも、応援してくれたらうれしいな──',
      );
      await nature.say_and_wait(
        'もちろん、調子が悪いときも、全然だめなときもあると思う。',
      );
      await nature.say_and_wait(
        'だってあたし、特別な才能もないし、超努力家でもないし。',
      );
      await nature.say_and_wait('でも……でもね、これだけは保証できる。');
      await nature.say_and_wait(
        `──みんなの信頼を、いちばん裏切らない${nature.uma_sex_title}だから！`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] begin_race
  begin_race: (() => {
    const title = '평소처럼';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await nature.say_and_wait(
        `응응. ${self_call}, 무사히 데뷔전을 치렀네……`,
      );
      era.printButton('「수고했어.」', 1);
      await era.input();
      await nature.say_and_wait('고마워. 제대로 한판 붙고 왔어—— 하하.');
      await nature.say_and_wait('어때? 내 달리기…… 어땠어?');
      era.printButton('「정말 좋았어!」', 1);
      await era.input();
      await nature.say_and_wait('아하하! 대답이 시원시원하네——');
      await nature.say_and_wait(
        `나도 먼저 ${callname}의 앞으로의 계획을 알고 싶은걸.`,
      );
      era.printButton('「먼저 물어볼게. 뛰고 싶은 레이스가 있어?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……뛰고 싶은 레이스라…… 지금의 나한테 목표를 말할 자격이 있다고 생각해?',
      );
      await nature.say_and_wait(
        '그런 건 트레이너가 정해 주면 돼. 자, 이제 실력을 보여 줄 차례야~',
      );
      await era.printAndWait(
        `데뷔 전부터 ${you.name}은(는) ${nature.sex}가 중거리 레이스에 적합하다고 생각했다. ${nature.sex}의 막판 추입은 날카롭고 버텨야 할 때도 잘 버틴다.`,
      );
      await era.printAndWait(
        '앞으로 클래식 전선을 내다보면 첫 번째로 고를 레이스는——',
      );
      era.printButton('「『와카고마 스테이크스』에 출전해 볼까?」', 1);
      await era.input();
      await nature.say_and_wait('오, 그렇군. 오픈 레이스에서 실력을 시험하자는 거네.');
      await nature.say_and_wait('나쁘지 않은데? 그렇게 하자.');
      era.printButton('「그럼 평소처럼 좋은 성적을 내 보자.」', 1);
      await era.input();
      await nature.say_and_wait(
        '평소처럼이라니…… 그게 3착이면 된다는 뜻이야? 내 목표는 3착이 아니거든.',
      );
      await nature.say_and_wait('하아, 매번 1착을 차지하는 괴물도 있긴 하지……');
      await nature.say_and_wait(
        `……테이오는 어떻게 하려나. ${nature.sex}는 어느 레이스에 나갈까?`,
      );
      await era.printAndWait(
        `토카이 테이오는 나이스 네이처와 같은 세대에 데뷔했으니 ${nature.sex}가 신경 쓰는 것도 무리는 아니다. 하지만……`,
      );
      era.printButton('「가장 중요한 건 훈련이야!」', 1);
      await era.input();
      await nature.say_and_wait(
        `알고 있다니까. 서로 맞붙지 않았으면 좋겠다는 생각뿐이야~ 그럼 앞으로도 잘 부탁해~`,
      );
      await era.printAndWait(
        '그렇게 다음 목표는 『와카고마 스테이크스』로 정해졌다!',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] chun_hai
  chun_hai: (() => {
    const title = '마지막 대무대를 향해';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await nature.say_and_wait('해냈어!');
      await nature.say_and_wait('1착. 온 힘을 다해 따낸…… 1착!');
      await nature.say_and_wait('길었네, 정말……');
      await nature.say_and_wait(
        '그렇게 약했던 내가 격려받고, 이끌려서 필사적으로 뒤를 쫓아왔는데……',
      );
      await nature.say_and_wait('——이제야 내 힘으로 이 자리에 섰어!');
      await nature.say_and_wait(
        '이제 가슴을 펴고 싸울 수 있어. 그 무대에서…… 모두와 함께!',
      );
      era.printButton('「드디어 이 날이 왔구나!」', 1);
      await era.input();
      await nature.say_and_wait(
        '응! 이제 도망치지 않을 거고, 모두의 기대도 저버릴 수 없으니까.',
      );
      await nature.say_and_wait('반드시…… 이길 거야.');
      await nature.say_and_wait('——『아리마 기념』에서 빛나는 주인공이 될 거야!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] grass_baseball
  grass_baseball: (() => {
    const title = '草野球で応援！';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait('会場ここ？ おっ～たしかに人が集まってるね～');
      await nature.say_and_wait(
        'それにしても、草野球の助っ人、引き受けるなんて……トレーナーの仕事だけでも忙しいのに。',
      );
      await era.printAndWait(
        `実は先日、商店街の人たちに誘われ、${you.name} は草野球に出ることになった。`,
      );
      era.printButton('「いつも君を応援してくれてるからね」', 1);
      await era.input();
      await nature.say_and_wait('はあ、みんな優しいのは確かだけど……');
      await nature.say_and_wait('……でも、はあ……無理しすぎて怪我しないでよ～？');
      await nature.say_and_wait('普段から必死なんだし……');
      await era.printAndWait('こうして、商店街草野球対抗戦の幕が開いた。');
      era.drawLine();
      await era.printAndWait(
        '両チーム譲らず、スコアは0対0のまま、試合は熱を帯びていく。',
      );
      await nature.say_and_wait(
        'わあ、だんだん熱いね～ でも、トレーナー、ヘトヘトだよ。',
      );
      await nature.say_and_wait(
        'ひいき抜きで、もう十分頑張ってる。そろそろ交代したほうがいいんじゃない。',
      );
      era.printButton('「まだいける！……」', 1);
      await era.input();
      await nature.say_and_wait(
        'はあ、熱血……あ、わかった。あたしが世話すれば、まだ頑張るんでしょ。',
      );
      await nature.say_and_wait(
        '飲み物取ってくるから、ここに大人しく座っててよ～？',
      );
      await nature.say_and_wait('もう……どれどれ、実行委員会のテントは……');
      await era.printAndWait(
        `商店街のおじさん「いやーあと一歩。${you.sex}は頑張ってるけど、点が取れなくてねえ……」`,
      );
      await nature.say_and_wait('おっ、トレーナーの話……？', true);
      await era.printAndWait(
        '商店街のおばさん「緊張してるんでしょ。助っ人で、周りは知らない人ばかりだし……」',
      );
      await era.printAndWait(
        `商店街のおじさん「うん……なんか${you.sex}を元気にする方法ないかね？」`,
      );
      await nature.say_and_wait('なんだか……聞き覚えのある展開だね……', true);
      await era.printAndWait(
        'その会話に、ナイスネイチャは自分がレースで受けたみんなの応援を思い出す……',
      );
      await nature.say_and_wait(
        '後ろから押してくれて、頑張れたのはみんなとトレーナー……',
        true,
      );
      await nature.say_and_wait(
        '心配してるだけじゃだめ。今度はあたしが──',
        true,
      );
      era.drawLine();
      await era.printAndWait(
        `ついに9回裏。1点出せば試合終了という場面で、${you.name} の打席が回ってきた。`,
      );
      await era.printAndWait(
        'マウンドに立つおじさんは甲子園まで行った控え投手で、球は一流だ。',
      );
      await era.printAndWait(
        `${you.name} はすでに2ストライクまで追い詰められ、ここで終わりかと思ったとき──`,
      );
      await nature.say_and_wait('頑張れ──！');
      // Do not translate this
      era.printWholeImage('内恰_应援_半身', {
        width: 8,
        offset: 8,
      });
      await era.printAndWait(
        '振り返ると、いつの間にかチアの衣装に着替えたネイチャが観客席にいた',
      );
      await era.printAndWait(`${you.name} を全力で応援している`);
      await nature.say_and_wait(
        '負けるな、トレーナー！ あと1球！ 打てば勝ち！',
      );
      await nature.say_and_wait('気合い入れて！ 気合い！ みんなで叫ぼ！');
      await era.printAndWait('みんな「イエーイ！ Go Fight Win！」');
      await nature.say_and_wait('が、頑張れ！ トレーナー！');
      await era.printAndWait(
        `ナイスネイチャが恥ずかしそうに大声で応援し、${nature.sex}の周りのみんなも同じだ。その気持ちに応えなければ……！`,
      );
      era.printButton('「うおお──！！」', 1);
      await era.input();
      await nature.say_and_wait('いけ──！！');
      await era.printAndWait('カーン──！');
      await nature.say_and_wait(
        'やった～！ 成功！ トレーナーすごい！ ホームラン！ サヨナラホームラン！',
      );
      era.drawLine();
      era.printButton(
        '「応援してくれてありがとう！」（スタミナ+20，スキルPt+20，やる気上昇，『天地無畏』を習得）',
        1,
      );
      era.printButton(
        '「君の応援のおかげだ！」（スタミナ&パワー+20，スキルPt+20，『天地無畏』を習得）',
        2,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「ネイチャ～！ ありがとう～！」', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            'うっ……そんな熱い目で見られると、恥ずかしい……',
          );
          await nature.say_and_wait(
            '……お礼を言うべきなのはあたしのほう。ずっと応援してくれてありがとう。',
          );
          await nature.say_and_wait(
            'とにかく、これからも頑張る……あー、あたしらしくないこと言っちゃった、もう～！',
          );
          await era.printAndWait(
            `ナイスネイチャは恥ずかしがりながらも、心から ${you.name} を応援していた。この日 ${you.name} はかけがえのない思い出を残した！`,
          );
          break;
        case 2:
          await nature.say_and_wait(
            `いやいや、そんなことない。${callname} はもう十分頑張ってたし、自分の努力と実力で取ったもの。でも……`,
          );
          await era.printAndWait('ナイスネイチャは恥ずかしそうに視線を逸らす');
          await nature.say_and_wait(
            '応援してて、達成感あった。次に野球するときも、応援しに行こ……なんてね。',
          );
          await era.printAndWait(
            `${you.name} は互いの絆の深さを感じ、とてもいい一日だった！`,
          );
          break;
        case 3:
          await nature.say_and_wait(
            'ちょっと、そんな大声出さないで～ 目立つよ！',
          );
          await era.printAndWait(
            `ナイスネイチャは頬を赤らめ、${you.name} の呼びかけに応える`,
          );
          await nature.say_and_wait('もう～ 着替えてくる！');
          era.printButton('「着替えはあとでもいい？」', 1);
          await era.input();
          await nature.say_and_wait(
            'どうしたの？ この服、恥ずかしいし、周りに独占されて肌寒いし……',
          );
          await era.printAndWait(
            `ナイスネイチャは文句を言いながら足を止め、${you.name} のほうを向く`,
          );
          era.printButton('「その……その格好のネイチャ、すごく可愛くて……」', 1);
          await era.input();
          await nature.say_and_wait('うっ！ は？ いきなりは反則だよ……');
          await era.printAndWait(
            '予想外の言葉に、ナイスネイチャは一瞬どうしていいかわからない',
          );
          era.printButton('「……性欲が……ちょっと抑えきれなくて……」', 1);
          await era.input();
          await nature.say_and_wait(
            '……なななななにをいきなり言ってるのああああ！',
          );
          await era.printAndWait('連続の奇襲にナイスネイチャは声を上げ、');
          await era.printAndWait(
            'それで商店街のみんなの注目を集めたことに気づくと、',
          );
          await era.printAndWait('周りに愛想笑いをしてから、またこちらを向き');
          await era.printAndWait('二人にしか聞こえない声で拗ねた');
          await nature.say_and_wait(
            `色ボケ ${callname}！ こんなところでそんなこと言わないで！`,
          );
          era.printButton('「でもネイチャの格好、エロすぎて……」', 1);
          await era.input();
          await nature.say_and_wait(
            'うにゃにゃにゃにゃ！ わかった！ もう言わないで！',
          );
          await era.printAndWait(
            `顔を真っ赤にしたネイチャは、両手を振って ${you.name} の続きを止める`,
          );
          await nature.say_and_wait(
            `ぐっ……${callname} をこんなに興奮させちゃったのも、あたしのせいだね`,
          );
          await nature.say_and_wait(
            '責任持って片づけるよ……でも、ここでするわけないでしょ？',
          );
          era.printButton('「更衣室へ行こう」', 1);
          await era.input();
          await nature.say_and_wait('そこもバレやすいよ！');
          era.printButton('「じゃあ、声は小さくお願い」', 1);
          await era.input();
          await nature.say_and_wait(`なにそれ！ 待っ……${callname}！？`);
          await era.printAndWait(
            `${you.name} はナイスネイチャの反対を待たず、${nature.sex}を横抱きにして更衣室へ飛び込み、個室に鍵をかけた。`,
          );
          await era.printAndWait('運よく、この場面を見た人はいなかったようだ');
          await era.printAndWait(
            '個室のなかで、激しい一戦が始まろうとしている……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] hard_work_trainer
  hard_work_trainer: (() => {
    const title = (self_call) => `${self_call} と、お疲れのトレーナー`;
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait('何日も詰まった仕事が、ようやく一段落した……');
      await era.printAndWait(
        `${you.name} は自分へのご褒美に美味しいものを買おうと、重い体を引きずって商店街へ向かう──`,
      );
      await nature.say_and_wait(
        'すみません、そこのトレーナー、ちょっと待って！',
      );
      era.printButton('「ネイチャ……？」', 1);
      await era.input();
      await nature.say_and_wait(
        'はあ──忙しいのは聞いてたけど、ここまで働き詰めでヘトヘトになるとはね。',
      );
      await nature.say_and_wait(
        `しょうがない、${self_call} がおごるよ。ほら、こっち。`,
      );
      await nature.say_and_wait(
        'まだ開店準備中だから客は来ない。一番奥のカラオケ席に座って。',
      );
      await nature.say_and_wait(
        `ここのおかみさん、知り合いなんだ。事情話したら、使っていいって。`,
      );
      await era.printAndWait(
        `ナイスネイチャは ${you.name} を店の隅へ連れていく`,
      );
      await nature.say_and_wait(
        `じゃあ、${callname} はなに食べる？ なんでもいいよ？ あたしにできることなら`,
      );
      era.println();
      era.printButton('「なんでもいい、お腹空いた……」', 1);
      if (era.get('love:60') >= 75) {
        era.printButton('「ネイチャ……」', 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait(
          'もう……待ってて、簡単に作るから……味は保証しないけど。',
        );
        await era.printAndWait(
          `数分後、ナイスネイチャは${nature.sex}の作ったチャーハンを ${you.name} に出した。`,
        );
        era.printButton('「こんなに量あって、大丈夫？」', 1);
        await era.input();
        await nature.say_and_wait(
          'おかみさんも『好きなだけもてなして』って言ってたし。',
        );
        await nature.say_and_wait('ほらほら、熱いうちに食べて。');
        await era.printAndWait(
          `出てきたチャーハンは見た目も味もちゃんとしていて、${you.name} の箸……いや、スプーンが止まらないほど美味しかった。`,
        );
        await nature.say_and_wait(
          '大げさだよ。小さいころからママの手伝いしてたから、作れるだけ。',
        );
        await nature.say_and_wait('……えっ、食べるの速い！ もう終わった！？');
        era.printButton('「美味しくて、気づいたらなくなってた」', 1);
        await era.input();
        await nature.say_and_wait(
          'いいよいいよ、さっきほんとお腹空いてたでしょ？ 厨房片付けるから、皿ちょうだい。',
        );
        await era.printAndWait(`${you.name}はナイスネイチャの背中を見送る。`);
        await era.printAndWait(
          '食べた直後だからか、急に眠気が来て、意識が遠のいていく──',
        );
        await nature.say_and_wait('……ら……らら……♪');
        await nature.say_and_wait('うわっ！ 起こしちゃった？');
        era.printButton('「……その歌は？」', 1);
        await era.input();
        await nature.say_and_wait(
          '実はよく知らないんだ。昔、ママがカウンターで忙しくしてるときよく歌ってた。',
        );
        await nature.say_and_wait(
          '昔のこと思い出して、つい口ずさんじゃった……ごめんね。',
        );
        era.printButton('「むしろ、もっと聞きたい」', 1);
        await era.input();
        await nature.say_and_wait(
          `また始まった～ ${self_call} にそんなお世辞言わなくていいよ。`,
        );
        era.printButton(
          '「ネイチャの歌、本当に好きなんだ。その声ならライブも大丈夫だよ！」',
          1,
        );
        await era.input();
        await nature.say_and_wait('ふ、ふーん？ トレーナー、趣味が独特だね。');
        await nature.say_and_wait(
          '……でも、『上手い』じゃなくてよかった。『好き』って便利な言葉だね。',
        );
        await nature.say_and_wait(
          '誰かと比べられなくて、誰かを失望させなくて、期待に届かない自分にも失望しなくて済む。',
        );
        await nature.say_and_wait('あはは。ごめん、可愛げないこと言って。');
        era.printButton('「そういうネイチャも好きだよ」', 1);
        await era.input();
        await nature.say_and_wait('ば……バカ！');
        await nature.say_and_wait('そういうの、言いすぎると意味なくなるよ？');
        await era.printAndWait('店「もう用済んだ、ネイチャ？」');
        await nature.say_and_wait('おかみさん、ありがとう。ほんと助かった。');
        await era.printAndWait(
          '店「隣の人が噂のトレーナーさんね？ ネイチャからよく聞くわ──」',
        );
        await nature.say_and_wait(
          'もう──！ そういうの言わないで！ 行こ、トレーナー！',
        );
        era.printButton('「噂……？」', 1);
        await era.input();
        await nature.say_and_wait('い、こ、う、よ！');
        await era.printAndWait(
          `こうして、おかみさんの温かい視線に見送られ、${you.name}とナイスネイチャは店を出た。`,
        );
      } else {
        await nature.say_and_wait('え……えっ！？ あたし？');
        await era.printAndWait(
          '返事を聞いたナイスネイチャの驚いた顔に、すぐに赤みが差す',
        );
        await nature.say_and_wait(
          '客は来ないとは言ったけど……ここ、人の店だよ……',
        );
        era.printButton('「ネイチャ、なんでもいいって言ったよね？」', 1);
        await era.input();
        await nature.say_and_wait('ぐっ……そうだけど……でも……');
        await nature.say_and_wait(
          'うっ……わかった……大人のストレスと疲れは、こういうので発散できるんでしょ……',
        );
        await era.printAndWait(
          `ナイスネイチャは唇を噛み、覚悟を決めたように、ソファに沈む ${you.name} の前へ来て、柔らかい体をまるごと預け、耳元で囁いた。`,
        );
        await nature.say_and_wait(
          '激しすぎはだめだよ……服も部屋も片づけるの大変……',
        );
        await nature.say_and_wait('それに、おばさんにバレる……');
        await era.printAndWait(
          `もちろん、${you.name} がそれを聞き入れたかどうかは、また別の話だ……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] kiku_sho
  kiku_sho: (() => {
    const title = '自分のレース';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '観客「ナイスネイチャ、お疲れさま──！ いい走りだったよ──！」',
      );
      await era.printAndWait(
        'レース後、観客席からの声は、ナイスネイチャが『自分のレース』を走れた証だ。そして──',
      );
      await nature.say_and_wait(
        'トレーナー、あたし……勝った……ちゃんと自分のレースを走れた……よね？',
      );
      era.printButton('「うん！」', 1);
      await era.input();
      await nature.say_and_wait('よかった……えへへ。');
      await nature.say_and_wait(
        '『菊花賞』でこの結果、申し分ない！ あたし、ほんと頑張った！',
      );
      await nature.say_and_wait('今日も……いびつなトロフィー、用意してある？');
      era.printButton('「もちろん、『頑張った賞』だよ！」', 1);
      await era.input();
      await nature.say_and_wait('あ……トレーナーの手づくりトロフィー！');
      await era.printAndWait(
        `『小倉記念』のとき、ナイスネイチャに自信を持たせるため、${you.name} は折り紙のトロフィーを作って渡した。前回${nature.sex}が楽しみにしていたから、${you.name} は今回も作った……`,
      );
      await nature.say_and_wait(
        '……ほんとに作ったんだ。えへへ、相変わらずいびつ。',
      );
      await nature.say_and_wait('いいねいいね。あとで授賞式しよ。');
      await nature.say_and_wait(
        `ネイチャ${nature.sex_code === 1 ? '' : 'さん'}の活躍を祝って♪`,
      );
      await nature.say_and_wait(
        `……今は調子乗れてるけど、テイオーも出てたら、こんなにうまくいかなかったかも……テイオー${nature.sex}、大丈夫かな。怪我、どれくらいなんだろ。`,
      );
      era.printButton(`「${nature.sex}なら大丈夫だよ」`, 1);
      await era.input();
      await nature.say_and_wait('うん……そうだね。');
      await nature.say_and_wait(
        `だって${nature.sex}はテイオーだもん。すぐ復活して、『ボクは無敵だよ！』とか言いそう。`,
      );
      await nature.say_and_wait('……その前に、あたしももう少し強くならないと。');
      era.printButton('「まだ大一番が残ってる」', 1);
      await era.input();
      await nature.say_and_wait(
        'なに？ 冬も近いのに、最近まだ大一番？……あ！ もしかして……',
      );
      era.printButton('「『有馬記念』、挑戦しない？」', 1);
      await era.input();
      await era.printAndWait(
        `ナイスネイチャには厚いファンがいて、『菊花賞』でも実力を出せた。今の${
          nature.sex
        }なら『有馬記念』に挑める！ それだけでなく、『有馬記念』の出走者は今年注目の${nature.uma_sex_title}たちだ。${
          nature.couple_title
        }と走ることで、さらに成長できるはず。`,
      );
      await nature.say_and_wait('『有馬記念』か……');
      await nature.say_and_wait(
        'いつもの応援に報いるなら、いちばんいい舞台……だよね？',
      );
      await nature.say_and_wait(
        '……できないかもしれない。出ても全然力を出せないかも。でも……',
      );
      await nature.say_and_wait('──『有馬記念』に出たい！');
      era.printButton('「じゃあ、挑もう！」', 1);
      await era.input();
      await era.printAndWait(
        `こうして、${you.name} とナイスネイチャはクラシック級最後の挑戦を『有馬記念』に決めた！`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「それから……これも祝いだ」', 1);
        await era.input();
        await nature.say_and_wait('えっ？ なになに？');
        await era.printAndWait(
          'ナイスネイチャの疑問にはすぐ答えず、背後で控え室の鍵をかけた',
        );
        era.printButton('「うちの家系、自慢の染色体だよ」', 1);
        await era.input();
        await nature.say_and_wait(
          '……えっ？ 待って待って待って？ ここでするの？ ここ控え室だよ！',
        );
        await era.printAndWait(
          `${you.name} がいきなり服を脱ぎはじめると、ナイスネイチャの頬が一気に赤くなり、ソファの後ろへ縮こまる。`,
        );
        era.printButton(
          '「大丈夫、ここは防音もいいし、誰も来ない……君も、欲しいんだろ？」',
          1,
        );
        await era.printAndWait(
          `レースを終えたばかりの${nature.uma_sex_title}は、高速で駆けた熱をまだ体に溜め、発情に近い状態になる。今がまさにそれで、勝負服の下のスパッツさえ、わずかに湿っているのがわかる`,
        );
        await nature.say_and_wait('で……でも、汗臭くて——');
        era.printButton(
          '「ネイチャの汗が臭いはずない。むしろそれがいい！」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `ナイスネイチャが言い切る前に、${you.name} はソファへ押し倒し、勝負服の内側へ両手を滑り込ませる。ナイスネイチャもすぐ抵抗をやめ、体を ${you.name} に委ねた……`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] koku_kin
  koku_kin: (() => {
    const title = 'メッキでも';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, you, callname) => {
      await nature.say_and_wait(
        `えへへ……できたよ、${callname}。ちゃんと結果、残した！`,
      );
      era.printButton('「よくやった！」', 1);
      await era.input();
      await nature.say_and_wait('うん！');
      await nature.say_and_wait(
        'ふふ……あのね、小倉の商店街のみんなも見に来てくれた。二言三言話しただけなのに？ 忙しいはずなのに……',
      );
      await nature.say_and_wait(
        '……あんなに応援してもらえると、これでもいいなって思えてきた。あたしはあたしのやり方で、一歩ずつ……ゆっくり進めばいい、でしょ？',
      );
      await nature.say_and_wait('届く日があるかわからなくても……');
      await nature.say_and_wait(
        `……ねえ、${callname}。ちょっとダサいこと言うね。`,
      );
      era.printButton('「どうしたの？」', 1);
      await era.input();
      await nature.say_and_wait('……あたし、テイオーに勝てるかな？');
      await nature.say_and_wait('……冗談！ 冗談だから忘れて──');
      era.printButton('「勝てるよ」', 1);
      await era.input();
      await nature.say_and_wait('……ありゃ……あうっ。');
      await nature.say_and_wait(`……うん、${callname} ならそう言うと思った。`);
      await nature.say_and_wait('答えわかってて聞くの、卑怯だよね。でも……');
      await nature.say_and_wait('誰かに押してもらわないと、前に進めないから。');
      await nature.say_and_wait(
        `……テイオーはクラシックの道を駆けてる。次は${nature.sex}、きっと──『菊花賞』を目指す。`,
      );
      await nature.say_and_wait(
        'だからあたしも次は……『菊花賞』で……走りたい。どう……思う……？',
      );
      era.printButton('「距離がかなり伸びるけど、大丈夫？」', 1);
      await era.input();
      await era.printAndWait(
        `『菊花賞』は3000メートル。今回の小倉記念より1000メートル長い。ナイスネイチャには厳しい戦いになるかもしれない。でも${nature.sex}が覚悟を決めたなら……！`,
      );
      await nature.say_and_wait(
        'もちろん、問題は大きいと思う。あんな距離、たぶん苦手だし。',
      );
      await nature.say_and_wait(
        'でも……今回は引き下がらない。──『菊花賞』に出よう！',
      );
      era.printButton('「よし！」', 1);
      await era.input();
      await nature.say_and_wait('はあ～～～決まった。ほんとに決まった。');
      await nature.say_and_wait(
        'ネイチャよ、もう逃げ場ないよ。大舞台で真正面からぶつかる……',
      );
      await nature.say_and_wait('でも……うん。これも、悪くない……かな？');
      await era.printAndWait(
        `……${nature.sex}は少し自信を取り戻したようだが、『菊花賞』に向けて、${you.name} はまだ${nature.sex}のためにできることがあるはずだ。そう考えていると、思い出したのは──`,
      );
      await nature.used_to_say_and_wait('どんな成績でも、みんな喜んでくれる。');
      await nature.used_to_say_and_wait(
        '頑張ってるって笑って褒めてくれる。でもあたし自身は、全然確信がない。',
      );
      await nature.used_to_say_and_wait(
        'うん……頑張ったって、はっきり言えないんだよね──たとえば1着なら明確でしょ？ トロフィーもらえるし、天皇賞なら盾とか。',
      );
      await nature.used_to_say_and_wait(
        'それを見ると、ああ、ほんとに頑張ったって思える。',
      );
      await nature.used_to_say_and_wait('……でもその気持ちは、1着だけの特権。');
      await era.printAndWait(
        `……${you.name} はまだ${nature.sex}のために、なにかできる！`,
      );
      await era.printAndWait('──小倉から中央へ戻る道中……');
      await nature.say_and_wait(
        'あ、トレーナー。そっちに預けたお菓子、もらっていい──？',
      );
      await nature.say_and_wait(
        '小倉のみんなが和菓子くれたじゃん？ 新幹線で食べようと思って──',
      );
      era.printButton('「わかった」', 1);
      await era.input();
      await era.printAndWait('（がさごそ……ひらり）');
      await nature.say_and_wait('あ、落ちそうだよ。');
      await nature.say_and_wait('……折り紙のトロフィー……？ いびつだね。');
      era.printButton('「……これ、僕が作った」', 1);
      await era.input();
      await nature.say_and_wait(
        'へぇ～トレーナーが？ ふふ──そんな可愛い趣味があったんだ～',
      );
      era.printButton('「ネイチャに渡したくて作ったんだ」', 1);
      await era.input();
      await nature.say_and_wait('そっか……');
      await nature.say_and_wait('えっ！？ あたしに！？ どうして……？');
      era.printButton('「自信を持ってほしくて」', 1);
      await era.input();
      await nature.say_and_wait('自信……');
      await you.say_and_wait(
        'どんな結果でも、自分を信じにくい気持ちはわかる。',
      );
      await you.say_and_wait(
        'だから、積み重ねた成績を形にしたら、少しは自信になるんじゃないかって。',
      );
      await nature.say_and_wait('……あたしのために……わざわざ……');
      await nature.say_and_wait(
        '……つまり、大人のくせにホテルでこもりながらトロフィー作ってたの？',
      );
      await nature.say_and_wait('나 초등학생 아니거든.');
      era.printButton('「それはそうだね……」', 1);
      await era.input();
      await era.printAndWait(
        `……맞는 말이었다. 만들기는 했지만 어린애 취급하는 것 같아 ${you.name}은(는) 건네줘야 할지 망설이고 있었다……`,
      );
      await nature.say_and_wait('……ふふ。');
      await nature.say_and_wait(
        'しょうがないなあ。あなたのためなら受け取っとく。',
      );
      era.printButton('「え？」', 1);
      await era.input();
      await nature.say_and_wait(
        'ん？ なんで驚くの？ わざわざ作ってくれたんでしょ？',
      );
      await nature.say_and_wait('ほらほら、早く出して。出さないと帰らないよ。');
      era.printButton('「受け取ってくれるの？」', 1);
      await era.input();
      await nature.say_and_wait('……だって……');
      await nature.say_and_wait(
        'いびつなトロフィー、ちょうどあたし向きでしょ？',
      );
      await nature.say_and_wait(
        'メッキの金色とか、角が歪んでるとか。全部……あたしっぽくない？',
      );
      await nature.say_and_wait(
        'なんか親近感？ みたいな……うん、つまりそういうこと。──ありがとう。',
      );
      await nature.say_and_wait('……次のトロフィー、も～っと上手く作ってよね。');
      era.printButton('「次！？」', 1);
      await era.input();
      await nature.say_and_wait(
        'だってまだレース出るし。トレーナーも頑張ってね！ あたしもレースで頑張るから。',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] o_s_95_10
  o_s_95_10: (() => {
    const title = 'ネイチャ in メジロ';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await era.printAndWait('今日、ナイスネイチャは現れない。なぜなら──');
      await era.printAndWait(
        '『有馬記念』のあと、ナイスネイチャはメジロマックイーンとメジロライアンに、あれほどの強さの理由を尋ねた。',
      );
      await era.printAndWait(
        `今日${nature.sex}は二人に招かれ、強さの理由を学びに行っている。──メジロ家への一日留学、と言ってもいい。`,
      );
      await era.printAndWait(
        `ナイスネイチャは真面目だ。${nature.sex}は必ず収穫を持って帰ってくる。${you.name} はそう信じて、静かに待つことにした──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait(
        '──先ほどのダージリンは、香りからして違いますね。味わいがとても豊かです。',
      );
      await ryan.say_and_wait(
        '最初から最後まで手摘みだって！ 専門家の技は信頼できるね。',
      );
      await nature.say_and_wait(
        '……すみません──これ、どういう状況？ どうしてお茶してるの？',
      );
      await nature.say_and_wait('トレーニングコースに行くのかと思って……');
      await mcqueen.say_and_wait(
        '飲み終わればもちろん行きます。ただ、紅茶を味わうのも日課の一部ですから。',
      );
      await nature.say_and_wait('日課……？');
      await mcqueen.say_and_wait(
        '今日はネイチャさんに、わたくしたちの普段を見てほしくて。',
      );
      await ryan.say_and_wait(
        'そういうこと！ 時間も時間だし、トレーニング行こ！',
      );
      await nature.say_and_wait('あ、は、はい……！');
      era.drawLine();
      await mcqueen.say_and_wait('はぁ……はぁ……はぁ……');
      await ryan.say_and_wait('おかえり、マックイーン！ 次はなに？');
      await mcqueen.say_and_wait('……もちろん、もう一周です。');
      await mcqueen.say_and_wait(
        '先ほどと比べて、10周目の速度が少し落ちました……そうですよね？',
      );
      await ryan.say_and_wait('あはは！ いいよ、満足するまで走ろう！');
      await mcqueen.say_and_wait('はい、行ってきます！');
      await nature.say_and_wait('はぁ……はぁ……はあっ……！');
      await ryan.say_and_wait(
        'おっ、ネイチャ、おかえり！ マックイーン、ちょうどスタートしたとこ！',
      );
      await nature.say_and_wait(`見えた……${mcqueen.sex}、まだ走るの……！？`);
      await ryan.say_and_wait(
        `まだ、というより、まだ足りない？ だって${mcqueen.sex}、『スピードを上げたい』って言ってるし`,
      );
      await nature.say_and_wait(
        `${mcqueen.sex}、スタミナあんなにあるのに、まだ伸ばしたいの……`,
      );
      await ryan.say_and_wait(
        `……マックイーン${mcqueen.sex}は、どれだけ強くても、今の自分に満足しないんだと思う。`,
      );
      await ryan.say_and_wait(
        `あの子の目標は、それくらい高い。だから${mcqueen.sex}は止めずに努力する。`,
      );
      await ryan.say_and_wait(
        'ずっとああいう姿を見てると、あたしも頑張らなきゃって思うよ。',
      );
      await nature.say_and_wait('……う～～～～あたしももう一周……！');
      await ryan.say_and_wait('あははは！ 負けず嫌いだね！ 気をつけて──！');
      era.drawLine();
      await nature.say_and_wait('──今日は本当にありがとうございました！');
      await ryan.say_and_wait('いやー一日中つき合わせちゃったね。');
      await nature.say_and_wait('いえ、ちょうどよかったです！');
      await nature.say_and_wait(
        '……やっとわかった。あたし、今まで自分のことばっかり考えてた──',
      );
      await nature.say_and_wait(
        'お二人はちゃんと相手を見てる。強さを認め合って、競い合って。',
      );
      await nature.say_and_wait('でもあたしは……人の強さを欲しがるだけだった。');
      await nature.say_and_wait(
        '足りないところばっかり見て……自分に何の才能があるか、考えたことなかった。',
      );
      await mcqueen.say_and_wait('……それで？');
      await nature.say_and_wait(
        'もっと真面目に向き合うつもりです。他の人にも……自分にも。',
      );
      await ryan.say_and_wait('うん、いいね！ それがネイチャの強さになるよ！');
      await nature.say_and_wait('あの……最後にもうひとつ、聞いてもいいですか？');
      await nature.say_and_wait('どうして、お二人は手伝ってくれたんですか？');
      await mcqueen.say_and_wait('……貴族の義務、ですから。');
      await ryan.say_and_wait('ぷはっ！ 照れてる？');
      await ryan.say_and_wait(
        '本当の理由は、強いネイチャと勝負して、自分も強くなりたいから！',
      );
      await ryan.say_and_wait(
        '──あたしたちも次の『宝塚記念』に出るつもりだし！',
      );
      await nature.say_and_wait('……っ！');
      await mcqueen.say_and_wait(
        'ふふ、いい表情です。では次は阪神でお会いしましょう。',
      );
      await nature.say_and_wait('うん……！');
      era.drawLine();
      await era.printAndWait(
        `翌朝 ${you.name} がナイスネイチャに会うと、${nature.sex}の表情は晴れやかだった。`,
      );
      await nature.say_and_wait(
        'あたし……あの二人に勝ちたい。──『宝塚記念』で！',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_win
  race_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await nature.say_and_wait(
        `1착…… 내가 1착이야! ${callname}, 봤어? 내가 1착이라고!`,
      );
      era.printButton('「축하해. 네가 강하기 때문에 이긴 거야.」', 1);
      era.printButton('「네 실력으로 따낸 승리야.」', 2);
      if ((await era.input()) === 1) {
        await nature.say_and_wait(
          '응, 내가 강하다……고 할 수 있을지는 모르겠지만. 그래도…… 가끔은 트레이너의 칭찬을 받아들이는 것도 좋겠지.',
        );
      } else {
        await nature.say_and_wait(
          `뭐야~ 그건 마치 『내가 강하니까』라고 큰소리로 선언하는 것 같잖아! 나중에 지면 부끄러워.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] s_a_47_33
  s_a_47_33: (() => {
    const title = '覚悟を決めて、前へ！';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(
        `川岸でナイスネイチャを見たという話を聞き、${you.name} は${nature.sex}を探しに行った──`,
      );
      await nature.say_and_wait('はぁ、はぁ……はぁ……');
      await nature.say_and_wait('だめ、走ってるとき……頭も動かさないと……');
      await nature.say_and_wait(
        'それから士気。ネイチャ、沈んでるよ。落ち込むな、元気出せ～',
      );
      await nature.say_and_wait(
        '思い出せ、早く思い出せ。あたしはどう走ってた？',
      );
      await nature.say_and_wait(
        '自分のやり方を守って、一歩ずつ……ゆっくり進めばいい、でしょ。',
      );
      await nature.say_and_wait('届く日があるかわからなくても……');
      await nature.say_and_wait('……できる限り、正面から向き合う。');
      await nature.say_and_wait(
        'まだ胸を張って、自信を持ってレースに臨めるわけじゃない……',
      );
      await nature.say_and_wait('でも逃げ場はない。だから、テイオーと──');
      era.printButton('「ネイチャなら、できる」', 1);
      await era.input();
      await nature.say_and_wait(
        `あ……${callname} ったら、すぐ甘やかすんだから～`,
      );
      await nature.say_and_wait(
        'だめだよ～ あたしみたいなのに絡まれちゃうよ……',
      );
      era.printButton('「自主練、お疲れさま！」', 1);
      await era.input();
      await nature.say_and_wait('うわっ！ い、いつからいたの！？');
      await nature.say_and_wait(
        'あ……まあ、言わなくていい。知ったら、たぶん胸が苦しくなる。',
      );
      era.printButton('「今のは、どんなトレーニング？」', 1);
      await era.input();
      await nature.say_and_wait('……トレーニングって言えば、まあそうかな。');
      await nature.say_and_wait(
        '勝つ力を少し磨きたくて、自分に合う武器を探してる。',
      );
      await nature.say_and_wait(
        '要はゴール前。最後の直線をちゃんと掴まないと。',
      );
      await nature.say_and_wait(
        'それを前提にした3000メートル……はは。そう思うと、ほんと長いね。',
      );
      await era.printAndWait(
        '3000メートル……仕掛けのタイミングを誤れば、直線で勝負を決めるのも難しい。',
      );
      await era.printAndWait(
        `${you.name} はナイスネイチャに、伸び伸び走ってほしい。レースのあと、いつもの明るい笑顔が見たい。`,
      );
      await nature.say_and_wait(`${callname}？`);
      era.printButton('「頑張ろう！」', 1);
      await era.input();
      await nature.say_and_wait('なに？');
      await nature.say_and_wait('頑張ろう……雑な助言……');
      era.printButton('「いや、今のは……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は自分を励めるつもりが、つい口に出てしまった。`,
      );
      await nature.say_and_wait(
        'ぷっ、ふふふ……あははは！ もう！ 『終わった』みたいな顔しないでよ。',
      );
      await nature.say_and_wait('ふう……うん、そのとおり、頑張ろう。');
      await nature.say_and_wait('逃げられないなら、前に進むしかない。');
      await nature.say_and_wait(`${callname}、今ちょっと付き合ってくれる？`);
      await nature.say_and_wait(
        `${self_call}、頑張るから。そばで見ててくれたら、嬉しい。`,
      );
      era.printButton('「こちらこそ、よろしく」', 1);
      await era.input();
      await nature.say_and_wait('はは、気が利くね。');
      await nature.say_and_wait('よし、行くよ！');
      await nature.say_and_wait(
        '頑張るほど、トレーナー用トロフィーも期待できるよ？',
      );
      era.printButton('「……精進するよ」', 1);
      await era.input();
      await nature.say_and_wait('あはははは！');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] s_a_47_42
  s_a_47_42: (() => {
    const title = '王座の裏側';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, teio, luna, maya, you, callname) => {
      await era.printAndWait(
        `${you.name} とナイスネイチャが次の目標『有馬記念』に向けてトレーニングを続けるある日……`,
      );
      await nature.say_and_wait(
        `ベンチプレス終わり～${callname}、ちょっと休んでいい？`,
      );
      era.printButton('「いいよ」', 1);
      await era.input();
      await nature.say_and_wait('じゃあ10分だけ。');
      await teio.say_and_wait('はぁ……はぁ……！ あと3セット……！');
      await nature.say_and_wait('ん？ あれは……');
      await era.printAndWait(
        `${you.name} がナイスネイチャの視線を追うと、トウカイテイオーが必死にトレーニングしていた。${teio.sex}は体を支える特殊な機器を使っているようだ……`,
      );
      await maya.say_and_wait('あ、ネイチャちゃん～♪ 一緒に休もー！');
      await nature.say_and_wait(
        'おっ──マヤノ、ちょうどいい。見て、テイオーなにやってるの？',
      );
      await maya.say_and_wait(
        `${teio.sex}、リハビリだよ──！ 怪我、ちょっと大変だったんだ。`,
      );
      await nature.say_and_wait('えっ……');
      await maya.say_and_wait(
        'だってテイオーちゃん、前はベッドでずっと寝てたし──',
      );
      await nature.say_and_wait('そっか……');
      await teio.say_and_wait('……痛い、脚が重い～～！ ちょっと頑張りすぎ？');
      await luna.say_and_wait('テイオー、奮闘しているようだな。');
      await teio.say_and_wait(
        'わあ、会長！ もちろん、絶好調で頑張ってるよ！……って言いたいけど、絶好調まではまだ遠い。',
      );
      await teio.say_and_wait(
        'でも、完全復活の道は見えてきた！ 前より強くなれるはずだよ♪',
      );
      await luna.say_and_wait('む……努力を褒めろと先に言われると思っていたが……');
      await teio.say_and_wait(
        'えっ──そんな要求しないよ！ 勝ちたいときに褒められたい！',
      );
      await teio.say_and_wait(
        '努力は当たり前だもん！ ずっとここに縛られてられないし。',
      );
      await teio.say_and_wait(
        '早く治さないと走れない。走らないと……会長に追いつけない。でしょ？',
      );
      await luna.say_and_wait(
        '……なるほど。失礼した。君の精神力を、以前は見くびっていた。',
      );
      await luna.say_and_wait(
        '今は実力が安定し、心身ともに充実した時期だ。ここで怪我をすれば、私でも苦しい。',
      );
      await teio.say_and_wait(
        '……だから励ましに来たの？ へへ。会長ったら、ボクを誰だと思ってるの？',
      );
      await teio.say_and_wait(
        'レースもライブも大活躍！ 誰より速く、強く、かっこいい。',
      );
      await teio.say_and_wait(
        'ボク……吾は無敵のテイオー様だよ！ なにがあっても軽く乗り越える！',
      );
      await luna.say_and_wait(
        'ふ……そうだな。期待しているぞ、トウカイテイオー！',
      );
      await teio.say_and_wait('うん！');
      await nature.say_and_wait(`……${teio.sex}、前より輝いてない？`);
      await nature.say_and_wait(
        `壁にぶつかったせいで、${teio.sex}が強くなった、ってやつか……`,
      );
      await nature.say_and_wait(
        'あたしみたいな端役は……壁にぶつかっても悩むだけ。',
      );
      await nature.say_and_wait(
        `……でも${teio.sex}は簡単に立て直す。さすが主役、格が違う。`,
      );
      await maya.say_and_wait(
        `ん──簡単かな？ テイオーちゃん${teio.sex}、あのときすごく泣いてたよ。`,
      );
      await nature.say_and_wait('えっ……？');
      await maya.say_and_wait(
        `だって大事なレースに出られなかったんだもん。あのとき${teio.sex}、ほんとに苦しそうだった。`,
      );
      await nature.say_and_wait('……そ……そっか。あのテイオーが……');
      await era.printAndWait(
        'その後のトレーニング中、ナイスネイチャは考え込んでいた。',
      );
      await era.printAndWait(
        `──トレーニングが終わると、${nature.sex}はゆっくりと ${you.name} に気持ちを話した。`,
      );
      await nature.say_and_wait(
        '……あたし、ずっと誤解してた。ちがう、たぶん……わざと誤解してた。',
      );
      await nature.say_and_wait(
        `テイオーは主役だから強い。${teio.sex}は生まれつき才能がある。最初から恵まれてる。`,
      );
      await nature.say_and_wait(
        `${teio.sex}はあたしみたいな端役とはちがう。そう思って、弱い自分を守ってた。`,
      );
      await nature.say_and_wait('でも……違った。テイオーもあたしも、同じ。');
      await nature.say_and_wait(
        `${teio.sex}だって、どれだけ頑張っても勝てないこともあるし、怪我もする……その苦しさも知ってる。`,
      );
      await nature.say_and_wait(
        `${teio.sex}とちがうのは……打撃を受けたあとの反応。自分の力で立ち上がれるのが、${teio.sex}の強さ。`,
      );
      await nature.say_and_wait(
        '……もう、いまさら怖い。あんなに強い子に勝てるなんて、思ってたなんて。',
      );
      await nature.say_and_wait(
        'あたしなんて、根性も勇気もなくて、前を走る人を見て不公平だって言うだけ。',
      );
      await nature.say_and_wait(
        '──あの舞台に立てないと思ってたけど、降りたのは自分だった。',
      );
      await nature.say_and_wait(
        '身の程知らずで、欲張りで、甘えるだけ。でも、でも……',
      );
      era.printButton('「それでも勝ちたい」', 1);
      await era.input();
      await nature.say_and_wait('……うん。');
      await nature.say_and_wait(
        'あの子と、ほんの少しでも同じところがあるなら、あたしも……',
      );
      await nature.say_and_wait('あたしも……！');
      await era.printAndWait(
        `${nature.sex}は続きを言わなかったが、覚悟の宿った瞳がすべてを語っていた。`,
      );
      era.printButton('「勝とう！」', 1);
      await era.input();
      await nature.say_and_wait('──うん！');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] s_a_95_42
  s_a_95_42: (() => {
    const title = 'きらきら';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string[]} trophies ナイスネイチャに作ったトロフィー一覧、最大4件
     */
    const f = async (nature, you, callname, trophies) => {
      await era.printAndWait(
        `その日、トレーニング時間になってもナイスネイチャは現れなかった。いつもは${nature.sex}のほうが早いのに……`,
      );
      await era.printAndWait(
        `${you.name} は${nature.sex}を心配して、学園内を探した──`,
      );
      await era.printAndWait(
        `──そして枯れ木の洞の前で${
          nature.sex
        }を見つけた。${nature.uma_sex_title}なら知っている、心の声を叫びたいときに来る場所だ。`,
      );
      await nature.say_and_wait('……誰もいないよね。');
      await nature.say_and_wait('よし……！');
      await nature.say_and_wait(
        'なんで……あんなこと言ったの？ バカだあたし──！！',
      );
      await nature.say_and_wait('正統派の主役に宣戦布告しちゃった……！');
      await era.printAndWait(
        `話は天皇賞（秋）のあと、${you.name} とナイスネイチャが帰り道でトウカイテイオーに会い、`,
      );
      await era.printAndWait(
        `${nature.sex}も今年の有馬記念に出ると知ったところに戻る。その場の勢いで、ナイスネイチャは「有馬記念であなたに勝つ」と宣言してしまった——`,
      );
      await nature.say_and_wait(
        '端役のくせに調子乗りすぎ！！ もう無理……バカ────！！',
      );
      await nature.say_and_wait(
        'まだ全然輝いてないのに……バカバカバカバカ！ バカ──！！',
      );
      await nature.say_and_wait('はぁ……はぁ……');
      await nature.say_and_wait('だめ、全然すっきりしない……');
      era.printButton('「ネイチャ！」', 1);
      await era.input();
      await nature.say_and_wait(
        `うわっ！？${callname.substring(0, 1).repeat(4)}、${callname}！？`,
      );
      await nature.say_and_wait('どうしてここに……って、あ！');
      await nature.say_and_wait('もしかして、もうトレーニングの時間……？');
      era.printButton('「そうだよ」', 1);
      await era.input();
      await nature.say_and_wait(
        'ああああああああああ……あー！？ 前にも同じことあった！？',
      );
      await nature.say_and_wait(
        'あうう……なんでいつもトレーナーに、こんな恥ずかしいとこ見せるの……',
      );
      era.printButton('「いいんだよ」', 1);
      await era.input();
      await nature.say_and_wait('えっ……');
      era.printButton('「僕の前では、恥ずかしい顔いくらでも見せていい」', 1);
      await era.input();
      await nature.say_and_wait('……っ！！');
      await nature.say_and_wait('ううう……ううううう～～！！');
      await nature.say_and_wait(`${callname}、あたし……`);
      await nature.say_and_wait('走りたくない！ 怖い……！');
      await nature.say_and_wait('うわあああ……！');
      await era.printAndWait(
        '그 뒤 나이스 네이처는 어린아이처럼 감정을 숨기지 않고 계속 울었다. 그리고──',
      );
      await era.printAndWait(
        `落ち着いてから、${nature.sex}は ${you.name} に気持ちを話した……`,
      );
      await nature.say_and_wait(
        '……今の調子、完璧だよね？ たぶん……今が今まででいちばんいい状態。',
      );
      await nature.say_and_wait(
        '実力も増えたし、自分にも自信がある。本気で戦う覚悟も決めた。',
      );
      await nature.say_and_wait('でも……それでも負けたら？');
      await nature.say_and_wait(
        'この最強の状態のあたしでも、輝きからまだ遠かったら……？',
      );
      await nature.say_and_wait('……怖い。');
      await nature.say_and_wait(
        'ここで負けたら、昔のあたしまで全部否定される気がする。',
      );
      await nature.say_and_wait(
        '『まだ本気じゃなかった』『まだ伸びしろがある』『これが全部じゃない』……',
      );
      await nature.say_and_wait(
        '今までそうやって自分を守ってきた。でもその言い訳……もう使えない。',
      );
      era.printButton('「本気なんだね」', 1);
      await era.input();
      await nature.say_and_wait('……！ そう、本気！');
      await nature.say_and_wait(
        'こんなに本気なのに負けたら……また『いい走り、でもいちばんじゃない』自分に戻る。',
      );
      await nature.say_and_wait('怖い。ほんとに怖い……');
      era.printButton('「大丈夫、君は負けない」', 1);
      await era.input();
      await nature.say_and_wait('……ごめん、今回は前より素直に受け取れない。');
      await nature.say_and_wait(
        'だって結果で返せないと思うから。もう一歩も踏み出せない……',
      );
      era.printButton('「それでも信じたい。だめ？」', 1);
      await era.input();
      await nature.say_and_wait('……っ。信じる根拠はなに？');
      era.printButton('「ここに、根拠がいっぱいある」', 1);
      await era.input();
      await nature.say_and_wait('──これ……');
      await nature.say_and_wait('……折り紙のトロフィー……？ いびつだね。');
      await nature.say_and_wait(
        '……ほんとに作ったんだ。えへへ、相変わらずいびつ。',
      );
      await nature.say_and_wait('今日も……いびつなトロフィー、用意してある？');
      await nature.say_and_wait('トレーナーのトロフィー……');
      await era.printAndWait(
        `${you.name} は、今まで ${you.name} が${nature.sex}に渡してきた手づくりトロフィーの試作を見せた。`,
      );
      await nature.say_and_wait([
        trophies.map((e) => `『${e}』`).join('、'),
        '……それ以外にもたくさん……',
      ]);
      await era.printAndWait('……こんなに、作ってくれたんだ……');
      era.printButton('「これも、君を信じ続けてきた成果だ」', 1);
      await era.input();
      await nature.say_and_wait('──あたしが今まで積み上げてきたもの……');
      await nature.say_and_wait(
        '……途中で見捨ててもよかったのに。なんでトレーナーは信じてくれるの？',
      );
      era.printButton('「大好きだから」', 1);
      await era.input();
      await nature.say_and_wait('……は！？ なんでこんなときに……');
      await era.printAndWait(
        `${you.name}はナイスネイチャに伝えた。トレーナーとして、${you.name} は勝ちを諦めずここまで必死に走ってきた${nature.sex}を、心から応援している……`,
      );
      await nature.say_and_wait(
        '……うん、言いたいことはわかった。前から思ってたけど……',
      );
      await nature.say_and_wait('はあ……うん、ごめん。ちょっと慌てすぎた。');
      await nature.say_and_wait('『勝つ』って大声で言うの、ほんとに怖いね。');
      await nature.say_and_wait(
        `……テイオー${nature.sex}は、ずっとこの圧と戦ってたんだ。`,
      );
      await nature.say_and_wait('すごい……でも、あたしももう怖がらない。');
      await nature.say_and_wait(
        'だって、好きだって言ってくれる人がそばにいるし？',
      );
      await nature.say_and_wait('勝つ。大事な……すごく大事な理由があるから。');
      await nature.say_and_wait(
        '……それにしてもトレーナーも大変だね。メンタルケアまで。',
      );
      await nature.say_and_wait('まあ、仕事のうちかもだけど。');
      era.printButton('「僕の仕事は、君を輝かせることだから」', 1);
      await era.input();
      await nature.say_and_wait('……仕事だから？');
      await nature.say_and_wait(
        '……じょ、う、だ、ん、だ、よ──！ 今のは聞かなかったことにして！',
      );
      await nature.say_and_wait(
        'トレーニングの時間でしょ！ わ、走って着替えてくる！',
      );
      await era.printAndWait(
        `……${nature.sex}は気持ちを立て直せたようだ。なら、この先も一緒に進もう！`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] see_fish
  see_fish: (() => {
    const title = '魚を見に行こう';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, you, callname, self_call) => {
      await era.printAndWait(`${you.name} とナイスネイチャが一緒に帰る道中──`);
      await nature.say_and_wait(
        'ねえ、まだ時間あるし……その………………魚、見に行かない？',
      );
      await nature.say_and_wait(
        `魚屋のおばさんだよ、『一緒に見に行きな』って。`,
      );
      era.printButton('「もちろんいいよ」', 1);
      await era.input();
      await nature.say_and_wait('……よし、行こ。');
      era.drawLine();
      await era.printAndWait(
        `${you.name} は魚屋に${nature.sex}の欲しい魚があるのかと思っていたが、ついていくと……`,
      );
      await nature.say_and_wait(
        'おお～泳いでる泳いでる～～ おいしそうな魚がいっぱい～～',
      );
      era.printButton('「水族館だったなんて……！！」', 1);
      await era.input();
      await nature.say_and_wait('……あは。');
      await nature.say_and_wait(
        'あーはいはい！ わかってる。もっとうまく誘う方法あったでしょ～って思ってる？',
      );
      await nature.say_and_wait(
        `そのね、${self_call}、可愛く誘うとかできないの──`,
      );
      await nature.say_and_wait(
        'でもね、おばさんがチケットくれて、二人でゆっくりしな、って……',
      );
      await nature.say_and_wait('わざと騙すつもりじゃなかった。ほんとだよ。');
      era.printButton('「誘ってくれてありがとう」', 1);
      await era.input();
      await nature.say_and_wait('おっ……おお……これが大人の余裕？ やるね……');
      await nature.say_and_wait('まあ、うん。気にしてないならよかった。');
      await nature.say_and_wait(
        'だから、お詫びってほどじゃないけど……トレーナーの見たいものを見に行こ！',
      );
      await nature.say_and_wait(
        '調べたら面白い展示がいっぱいあったよ。さすがデート……お出かけの定番スポット。',
      );
      await nature.say_and_wait('クラゲ展、エイ……鯛……どれもおいしそうだね。');
      await nature.say_and_wait('あ、定番ならイルカショーとか？');
      await nature.say_and_wait(
        '……いや、あたしとあんな可愛いショーも、ちょっと違うか。',
      );
      await nature.say_and_wait(`まあ、${callname} に任せる！ なにが見たい？`);
      era.println();
      era.printButton('「イルカショー」', 1);
      era.printButton('「……超恐怖・こわい魚展！！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await nature.say_and_wait('……ねえ。話、聞いてた？');
        era.printButton('「聞いてたよ」', 1);
        await era.input();
        await nature.say_and_wait(
          'うん、それはわかってる。そういう意味じゃないよ？',
        );
        await nature.say_and_wait('いや、まあ……付き合うって言ったしね～');
        await nature.say_and_wait(
          'わかったわかった。見てリラックスできるなら、うん。',
        );
        await nature.say_and_wait(
          '『きゃー』みたいなかわいい反応はしないから、そこは勘弁して──',
        );
        era.drawLine();
        await nature.say_and_wait(
          'おお、元気なイルカだね～ えっ？ ぷわっ！？ 待って、水！ 水が──',
        );
        await nature.say_and_wait('ぎゃあああ──！！？');
        await nature.say_and_wait('くそっ……あの水しぶき、反則でしょ。');
        await nature.say_and_wait(
          'イルカショーって、こんなにスリリングな娯楽なの……',
        );
        await nature.say_and_wait(
          'もう……『きゃー』どころか、丹田から声出ちゃった。',
        );
        era.printButton('「楽しそうだったね」', 1);
        await era.input();
        await nature.say_and_wait(
          'ふふ……うん、そうだね。こういう遊びのほうがあたし向きかも。',
        );
        await era.printAndWait(
          `${you.name}とナイスネイチャは水族館で楽しい時間を過ごし、しっかりリラックスした。`,
        );
      } else {
        await nature.say_and_wait('えっ～面白そう！');
        await nature.say_and_wait(
          'しかも『超恐怖』だって。どれくらい怖いの？ 実力見せてもらお～',
        );
        await era.printAndWait(
          `こうして、${you.name}とナイスネイチャは展示エリアへ……`,
        );
        await nature.say_and_wait('か！');
        era.printButton('「……か？」', 1);
        await era.input();
        await nature.say_and_wait('か、わ、い、す、ぎ、！！');
        await nature.say_and_wait(
          'うわああ～～～！！ なにこれ！ まんまるの目！ 『メンダコ』だ～',
        );
        await nature.say_and_wait('きゃあ～～～～');
        await nature.say_and_wait('──あ！！');
        era.printButton('「楽しそうでよかった」', 1);
        await era.input();
        await nature.say_and_wait(
          'あ……反則でしょ！ 超恐怖とか言っといて、こんなに可愛い生き物ばっかり！',
        );
        await nature.say_and_wait('くそっ…………可愛い。');
        era.printButton('「あっちの魚もいいね……」', 1);
        await era.input();
        await nature.say_and_wait(
          'うわ、ほんとだ！ 不細工なくらい可愛い～～！',
        );
        await era.printAndWait(
          `${you.name} とナイスネイチャは水族館で楽しい時間を過ごし、しっかりリラックスした。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] takz_kin
  takz_kin: (() => {
    const title = '닿은 손끝';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} ryan メジロライアン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, mcqueen, ryan, you) => {
      await nature.say_and_wait('──다행이다……! 나…… 이겼어!');
      era.printButton('「대단해!」', 1);
      await era.input();
      await nature.say_and_wait('왜일까. 지금까지보다 훨씬 기뻐……');
      era.printButton('「필사적으로 달려서 마침내 손에 넣은 승리니까.」', 1);
      await era.input();
      await nature.say_and_wait('응, 그렇네.');
      await nature.say_and_wait(
        '『어차피 나 같은 건』이라든가 『무리야』라든가……',
      );
      await nature.say_and_wait(
        '오늘은 그런 생각이 전혀 안 들었어. 그저 따라잡겠다고 마음속으로 계속 외치면서……',
      );
      await mcqueen.say_and_wait(
        '──인상적인 달리기였어요, 네이처. 다시 승부할 수 있다면 다음에는 지지 않겠어요.',
      );
      await ryan.say_and_wait(
        '맞아, 맞아! 나도 다시 단련해야겠어! 고마워, 네이처!',
      );
      await nature.say_and_wait('아니, 나야말로…… 고마워!');
      era.drawLine();
      await nature.say_and_wait(
        `저 둘, 끝까지 상쾌했지. ${mcqueen.couple_title}는 벌써 앞을 바라보고 있어.`,
      );
      await nature.say_and_wait(
        '패배해도 곧바로 미래를 바라봐. 다음 단계에 손을 뻗고 다음에는 반드시 이기겠다고 생각하지.',
      );
      await nature.say_and_wait('……테이오도 그래. 그래서 그렇게 강한 거야.');
      await nature.say_and_wait(
        '나는 멋대로 내 한계를 정해 버렸어. 아무리 노력해도 여기까지라고.',
      );
      await nature.say_and_wait(
        '3착도 그랬기 때문이야. 더 이상은 무리라고…… 스스로 포기했던 거지.',
      );
      await nature.say_and_wait(
        '하지만 그래서는 안 돼. 빛에 닿고 싶다면 계속 나를 믿어야 해.',
      );
      await nature.say_and_wait(
        '1착을 각오하고 달려서 얻은 3착이라면 분명…… 다음으로 이어질 거야.',
      );
      await era.printAndWait(
        `나이스 네이처도 앞을 바라보고 있다. 지금이라면 큰 무대에 올라도 ${nature.sex}는 두려워하지 않고 도전할 것이다.`,
      );
      await era.printAndWait(
        `다음 그 레이스라면 지금 ${nature.sex}의 자신감과 빛을 더욱 끌어낼 수 있을 것이다……!`,
      );
      era.printButton('「다음에는 『텐노상 (가을)』에 도전해 볼래?」', 1);
      await era.input();
      await nature.say_and_wait('『天皇賞（秋）』……！');
      await nature.say_and_wait('내가…… 역사와 전통이 있는 『텐노상』에?');
      await nature.say_and_wait('……안 돼, 안 돼. 내가 왜 주눅 드는 거야.');
      await nature.say_and_wait(
        '이럴 때…… 자격이 있는지 의심하면 안 되지. 나가겠어! 스스로 기운을 내야지!',
      );
      await nature.say_and_wait('가자. 가을의 큰 무대로……!');
      await era.printAndWait(
        `──그렇게 ${you.name}와 나이스 네이처는 중거리 최강을 다투는 『텐노상 (가을)』에 도전하기로 했다!`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그것도——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] tenn_sho
  tenn_sho: (() => {
    const title = '황혼의 하늘에 울려 퍼져라';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait('끝까지 달렸어……');
      await nature.say_and_wait(
        '수준 높은 레이스에서 진지하게 싸워…… 결과를 냈어.',
      );
      await nature.say_and_wait('한계 따위는 생각하지 않고…… 내 손으로 결과를 붙잡았어.');
      await nature.say_and_wait(
        '……이대로라면 닿을지도 몰라? 빛나고 싶다는…… 그 꿈에……',
      );
      await nature.say_and_wait(
        '……더 가까이. 아직 더 가까이—— 그 빛에 한층 가까이 다가가고 싶어……!',
      );
      await nature.say_and_wait(`${callname}, 부탁이 하나 있어.`);
      await nature.say_and_wait(
        '시니어급 마지막 『아리마 기념』 전에 레이스를 한 번 더 뛰고 싶어.',
      );
      era.printButton('「어째서?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……좀 더 자신감을 얻고 싶어. 1착을 차지하겠다는 각오로 나가서 이기고 싶거든.',
      );
      await era.printAndWait(
        '예전의 나이스 네이처라면 자신이 없어서 『인정받고 싶다』고 바랐을 것이다.',
      );
      await era.printAndWait(
        `하지만 지금의 ${nature.sex}는 『이기기 위해』 강해지고 싶어 한다.`,
      );
      era.printButton('「연속 출전이 되는데 괜찮겠어?」', 1);
      await era.input();
      await nature.say_and_wait('괜찮아, 분명히!');
      await nature.say_and_wait(
        `왜냐면 ${self_call}의 특기는 보기 흉해도 끝까지 달리는 거니까.`,
      );
      era.printButton('「알았어.」', 1);
      await era.input();
      await nature.say_and_wait('고마워! 어느 레이스에 나갈지는 네게 맡길게.');
      await nature.say_and_wait(
        `쓸데없는 생각은 이제 ${callname}에게 떠넘기겠어!`,
      );
      await era.printAndWait(
        `${nature.sex}의 지금까지 경향과 『아리마 기념』까지 남은 시간을 고려하면 선택해야 할 레이스는——`,
      );
      era.printButton('「『주니치 신문배』는 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '격은 조금 낮지만 나이스 네이처라면 여기서 성적을 낼 수 있다. 1착을 안정적으로 노릴 수 있다!',
      );
      await nature.say_and_wait('좋아, 『주니치 신문배』…… 거기서 1착을 차지할 거야.');
      await nature.say_and_wait(`이겨서 당당하게 ${nature.sex}에게 도전하겠어……!`);
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고 늘 하던 그것——」', 1);
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] waka_sta_lose
  waka_sta_lose: (() => {
    const title = '負けても、夏は来る';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, teio, you, callname, self_call) => {
      await nature.say_and_wait('はぁ……はぁ……はぁ……');
      await nature.say_and_wait(
        `……うん、悪くないよ、${self_call}、ちゃんと結果は残した──`,
      );
      await era.printAndWait('？？？「わああああああ……！！」');
      await nature.say_and_wait('……えっ！？ この声なに──');
      await teio.say_and_wait(
        'ボクの実力はこれだけじゃないよ！ これからもボクの活躍、見ててね！ みんなの想像、どんどん超えていくって約束する！ また会おう！ ありがとう♪',
      );
      await era.printAndWait('？？？「わああああああ……！！」');
      await nature.say_and_wait('…………');
      await nature.say_and_wait(
        '雰囲気、めちゃくちゃ盛り上げてる。さすがテイオー──',
      );
      await nature.say_and_wait(
        '……あたし、バカだ。あんな相手に挑もうなんて。しかもやっぱりこの程度。身の程知らずもいいとこ。ほんとバカ……',
      );
      await nature.say_and_wait('……あー……テイオー……まぶしい……');
      era.drawLine();
      await nature.say_and_wait(
        `──あ、${callname}……、その……${self_call}、走って戻ってきたよ──`,
      );
      era.printButton(`「${nature.sex}に食らいついたのはすごいよ」`, 1);
      await era.input();
      await nature.say_and_wait(
        'はは──もう、慰めなくていいよ。ほら、ちゃんと要求どおりやったでしょ？',
      );
      await nature.say_and_wait(
        '『いつも通り』結果を残す。うん、仕事は果たした。',
      );
      await nature.say_and_wait(
        '……だから、上を目指そうなんて、余計なことだったね。挑もうなんて思わなければ、ほんとにいつも通りだった。',
      );
      await nature.say_and_wait(
        '……気持ちも含めて。もう──輝くにはまだ遠すぎるよ──',
      );
      await era.printAndWait(
        `実際${nature.sex}の言うとおり、今回の結果は十分だ。1着ではなくても、もっと前向きに捉えていい成績。`,
      );
      await nature.say_and_wait('……はあ。');
      await era.printAndWait(
        `なのに${nature.sex}はこう沈んでいる。もともと自信が薄いのが主な理由だろう。なら、今必要なのは──`,
      );
      era.printButton('「ネイチャ、遠征しない？」', 1);
      await era.input();
      await nature.say_and_wait('遠征……？ えっ？ どうして……');
      era.printButton('「夏も、結果を残そう」', 1);
      await era.input();
      await era.printAndWait(
        `今${nature.sex}をクラシック戦線に乗せると危険な賭けになる。残っているわずかな自信まで失わせかねない。それより地方競走に挑んで堅実に結果を残し、最後は${nature.sex}の成長につなげたい。`,
      );
      await nature.say_and_wait(
        'つまり……目標は『皐月賞』でも『日本ダービー』でもない……？……あたし、まだ実力が足りないから。',
      );
      era.printButton('「今は焦らず、本当に強くなったことを確かめよう」', 1);
      await era.input();
      await nature.say_and_wait('……わかった。');
      await nature.say_and_wait(
        'そうだね。今のあたしじゃ、次また勝っても……受け止められない。',
      );
      era.printButton('「この夏を乗り越えれば、きっと強くなれる」', 1);
      await era.input();
      await nature.say_and_wait('……そうだといいけど。');
      await era.printAndWait('そう言って、ナイスネイチャは長く息を吐いた');
      await nature.say_and_wait(
        'うん、OKOK！ 各地巡回、あたしも向いてるかも。それで？ ずっと巡回させるつもりじゃないよね？ どのレースにするか、決めた？',
      );
      era.printButton('「『小倉記念』はどう？」', 1);
      await era.input();
      await era.printAndWait(
        '小倉で行われる重賞。ナイスネイチャの自信を育てるには、これ以上ない一戦だ。',
      );
      await nature.say_and_wait(
        'なるほど、距離も若駒ステークスと同じだったよね？ うん、そこにしよう。でも、夏の小倉か……熱中症になりそう……',
      );
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        nature.get_colored_name(),
        ' は次の目標を『小倉記念』に決めた！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] waka_sta_win
  waka_sta_win: (() => {
    const title = '「偶然」から';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, teio, you) => {
      await nature.say_and_wait('勝っちゃった……あたし……テイオーに勝った？');
      await nature.say_and_wait(
        'は、はは……はは……！ すごい、ほんとに……！？ あたしが勝った……',
      );
      await teio.say_and_wait('いやー負けちゃった！');
      await nature.say_and_wait('……うっ！ テイオー……！ あたし──');
      await teio.say_and_wait('──強くなるきっかけ、見つけちゃった！');
      await nature.say_and_wait('えっ……');
      await teio.say_and_wait(
        'ボク、まだ強くなれるんだ！ へへ、楽しみになってきた──！',
      );
      await teio.say_and_wait('最強まであと何キロ？ 一気に駆け上がるよ！');
      await nature.say_and_wait('あ……');
      await nature.say_and_wait(
        '危ない危ない。あたし、得意げになるとこだった。',
      );
      await nature.say_and_wait('ちがう。今回勝てたの……ただの偶然。');
      await nature.say_and_wait(
        'だって、どう考えても──あの子のほうが輝いてるし……',
      );
      era.printButton('「勝ったね、ネイチャ！」', 1);
      await era.input();
      await nature.say_and_wait('……うん。');
      era.printButton('「嬉しくないの？」', 1);
      await era.input();
      await nature.say_and_wait(
        '勝った直後は嬉しかったよ。嬉しいけど……この勝ち、絶対に偶然。実力で勝ったんじゃない。',
      );
      era.printButton('「どうしてそう思うの？」', 1);
      await era.input();
      await nature.say_and_wait(
        'だって……おかしいでしょ？ あたしがテイオーより強いなんて。',
      );
      await nature.say_and_wait(
        'これっぽっちも輝いてないあたしだよ？ どこかで間違えてる。──もう！ 勘違いして、恥ずかしい──！',
      );
      await era.printAndWait(
        `ナイスネイチャは確かに勝った。そしてその理由は間違いなく${nature.sex}の実力だ。でも${nature.sex}は……`,
      );
      await nature.say_and_wait('……ほんと恥ずかしい。');
      await era.printAndWait(
        `勝ったのに負けたみたいに沈むのは、${nature.sex}がまだ自分の実力を信じきれないからだ。つまり自信不足。なら、今必要なのは──`,
      );
      era.printButton('「ネイチャ、遠征しない？」', 1);
      await era.input();
      await nature.say_and_wait('遠征……？ えっ？ どうして……');
      era.printButton('「夏も、結果を残そう」', 1);
      await era.input();
      await era.printAndWait(
        `今${nature.sex}をクラシック戦線に乗せると危険な賭けになる。残っているわずかな自信まで失わせかねない。それより地方競走に挑んで堅実に結果を残し、最後は${nature.sex}の成長につなげたい。`,
      );
      await nature.say_and_wait(
        'つまり……目標は『皐月賞』でも『日本ダービー』でもない……？……あたし、まだ実力が足りないから。',
      );
      era.printButton('「今は焦らず、本当に強くなったことを確かめよう」', 1);
      await era.input();
      await nature.say_and_wait('……わかった。');
      await nature.say_and_wait(
        'そうだね。今のあたしじゃ、次また勝っても……受け止められない。',
      );
      era.printButton('「この夏を乗り越えれば、きっと強くなれる」', 1);
      await era.input();
      await nature.say_and_wait('……そうだといいけど。');
      await era.printAndWait('そう言って、ナイスネイチャは長く息を吐いた');
      await nature.say_and_wait(
        'うん、OKOK！ 各地巡回、あたしも向いてるかも。それで？ ずっと巡回させるつもりじゃないよね？ どのレースにするか、決めた？',
      );
      era.printButton('「『小倉記念』はどう？」', 1);
      await era.input();
      await era.printAndWait(
        '小倉で行われる重賞。ナイスネイチャの自信を育てるには、これ以上ない一戦だ。',
      );
      await nature.say_and_wait(
        'なるほど、距離も若駒ステークスと同じだったよね？ うん、そこにしよう。でも、夏の小倉か……熱中症になりそう……',
      );
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' と ',
        nature.get_colored_name(),
        ' は次の目標を『小倉記念』に決めた！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_se
  we_se: (() => {
    const title = '夏季合宿終了';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     */
    const f = async (nature, callname) => {
      await era.printAndWait(
        '오늘은 여름 합숙 마지막 날이다. 기념으로 학원에서 성대한 불꽃놀이를 준비했다.',
      );
      await era.printAndWait(
        '나이스 네이처와 나란히 해안가에 서서 바다 위에 피어나는 불꽃을 올려다보았다.',
      );
      await nature.say_and_wait(
        `——여름이 끝나 버렸네. 뭐랄까, 청춘이라는 느낌이야—— 나는 그런 역할이 아니지만. 그래도 ${callname}——`,
      );
      await era.printAndWait(
        `곁에 있던 나이스 네이처는 감탄하고 있었지만 불꽃이 터지는 소리 때문에 ${nature.sex}의 목소리가 잘 들리지 않았다.`,
      );
      await era.printAndWait(
        `${nature.sex}의 마지막 말을 다시 물으려 했지만, 나이스 네이처는 작게 웃으며 얼버무렸다.`,
      );
      await era.printAndWait(
        '나이스 네이처와 함께한 여름 합숙은 이렇게 끝났다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_ny
  ws_ny: (() => {
    const title = '새해';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`${callname}, 새해 다짐 안 써볼래?`);
      await era.printAndWait(
        '나이스 네이처가 그렇게 말하며 붓과 종이를 내밀었다.',
      );
      await era.printAndWait(
        '새해 다짐——새로운 한 해에 거는 기대와 축복을 종이에 담는다. 무엇을 쓸까——',
      );
      era.printButton('「건강」(체력 +300)', 1);
      era.printButton('「강해지자」(모든 능력치 +10)', 2);
      era.printButton('「다재다능」(스킬 Pt +70)', 3);
      if (era.get('love:60') >= 75) {
        era.printButton('「자손 번창」', 4);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await nature.say_and_wait(
            `건강이라니…… ${callname}도 이제 그런 걸 챙길 나이가 됐구나. 허리 아픈 건 귀찮지? ${self_call}도 알아——`,
          );
          await nature.say_and_wait([
            '어? 본인 걸 쓴 게 아냐? 그럼……? 엣!? 나? 잠깐, 그게……',
            callname,
            '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 건 반칙이야!',
            callname,
            '도 나도 새해에는 건강하게 지내자!',
          ]);
          break;
        case 2:
          await nature.say_and_wait([
            '강해지자는 거구나~',
            callname,
            ', 의외로 열혈인걸? 아니면 보기보다 정신 연령이…… 하하하, 농담이야……',
          ]);
          await nature.say_and_wait([
            '어? 본인 걸 쓴 게 아냐? 그럼……? 엣!? 나? 잠깐, 그게……',
            callname,
            '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 건 반칙이야!',
            callname,
            '도 나도 새해에는 즐겁게 지내자!',
          ]);
          break;
        case 3:
          await nature.say_and_wait(
            `다재다능? 확실히 재능 많은 사람이 ${nature.child_sex_title}에게도 인기가 많겠지. ${callname}도 이제 그런 걸 신경 쓸 나이니까 자기 ${
              nature.sex
            }를 생각해 봐야 할 텐데…… 내가 이런 말 하는 것도 이상하지만, 하하하하……`,
          );
          await nature.say_and_wait([
            '어? 본인 걸 쓴 게 아냐? 그럼……? 엣!? 나? 잠깐, 그게……',
            callname,
            '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 건 반칙이야!',
            callname,
            '도 나도 새해에는 즐겁게 지내자!',
          ]);
          break;
        case 4:
          await nature.say_and_wait(
            `자, 자손 번창? ${callname}도 참, 아침부터 대담한 화제네…… 그래도 ${callname}이(가) 원한다면 나도 괜찮아. 아니면…… 지금부터?`,
          );
          await era.printAndWait(
            '얼굴이 붉어진 나이스 네이처가 한 걸음씩 다가왔다. 아무래도 한판 대결을 피하기는 어려울 것 같다……',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_ss_1
  ws_ss_1: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (nature, you) => {
      await era.printAndWait(
        '오늘부터 『여름 합숙』—— 실력을 끌어올리는 집중 훈련이 시작된다.',
      );
      await nature.say_and_wait('더워……');
      await nature.say_and_wait(
        '햇볕이 너무 기운차네. 음지 생활이 익숙한 나한테는 너무 눈부셔……',
      );
      await nature.say_and_wait(
        '벌써부터 마지막까지 무사히 버틸 수 있을지 걱정된다.',
      );
      era.printButton('「『고쿠라 기념』도 있으니 기합을 넣어야겠네.」', 1);
      await era.input();
      await nature.say_and_wait(
        '아니, 바로 그게 문제라니까. 합숙 중에 레이스까지 뛰면 일정이 너무 빡빡해.',
      );
      await nature.say_and_wait(
        '여기는 고쿠라에서 멀어서 이동하다 보면 훈련량도 줄어들고……',
      );
      await nature.say_and_wait(
        '원래도 구름 위에 있는 녀석들한테 금세 뒤처질 거야——',
      );
      era.printButton('「그럼 고쿠라까지 계속 달려가자!」', 1);
      await era.input();
      await nature.say_and_wait(
        '아, 그거 좋네! 달리면서 훈련도 하고 일석이조잖아.',
      );
      await nature.say_and_wait('고작 천 킬로미터 정도겠지? 응응, 거뜬해——');
      await nature.say_and_wait('그럴 리가 없잖아—— 갑자기 이상한 계획 좀 꺼내지 마.');
      await nature.say_and_wait('트레이너, 속으로 재미있어하고 있지……?');
      await era.printAndWait(
        `그렇게 ${you.name}와 나이스 네이처의 뜨거운 여름 합숙이 시작되었다.`,
      );
      await nature.say_and_wait(
        '아, 열혈은 적당히 부탁할게. 그럼 잘 부탁해——',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_ss_2
  ws_ss_2: (() => {
    const title = '夏季合宿';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await era.printAndWait(
        '또다시 합숙의 계절이 찾아왔다. 나이스 네이처는 작년과는 달리 적극적인 태도를 보였다.',
      );
      await era.printAndWait(
        '『천황상(가을)』…… 그리고 그다음 『아리마 기념』을 향해——',
      );
      await nature.say_and_wait('천황상(가을)이라……');
      await era.printAndWait(`${nature.sex}는 자기 자신과 마주하는 뜨거운 여름을 시작했다!`);
    };
    f.title = title;
    return f;
  })(),
};
