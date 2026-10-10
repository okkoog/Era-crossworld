// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/200500-Treve/edu-205"),

  // [번역 대상] before_prix_lat_classical
  before_prix_lat_classical: (() => {
    const title = '『暴君』すら砕く……';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `${you.name} は、${treve.name} が勝負服の意匠を決めたときのことをはっきり覚えている。`,
      );
      await era.printAndWait(
        `${treve.sex}のG1出走は他の${treve.uma_sex_title}より早く、勝負服もすぐ仕立てることになったが、一点だけ${treve.sex}は絶対に譲らなかった。`,
      );
      era.printButton(`「本当に、これでいいのか？」`, 1);
      await era.input();
      await treve.say_and_wait(`これでいい！`);
      await era.printAndWait(
        `胸を張る${treve.sex}の前で、${you.name} は書類から目を離せない。`,
      );
      await era.printAndWait(
        `${treve.sex}の言葉は、デザイナーの案のいくつかを力強く消させる。`,
      );
      await era.printAndWait(`青、白、赤の三色。`);
      await era.printAndWait(`周知の、フランス国旗の三色だ。`);
      await era.printAndWait(`それを勝負服の地色にする。`);
      await era.printAndWait(`その提案に頷いたのは、まさに……`);
      await era.printAndWait(`${treve.sex}なら、何を背負ってもいけるだろう。`);
      await era.printAndWait(
        `控え室で最後の確認をする ${treve.name} は、一点の綻びもない勝負服を確かめ、鏡の前で自分の姿を真剣に見ている。`,
      );
      await era.printAndWait(
        `今日の凱旋門賞には英独だけでなく、日本の${treve.uma_sex_title}も出走している。`,
      );
      await era.printAndWait(
        `国際の注目を集めるこのレースで、${treve.sex}は国旗のような色の勝負服を着る。だが${treve.sex}に緊張はない。`,
      );
      await era.printAndWait(
        `椅子に座り、${treve.sex}の支度を見つめる ${you.name} へ、${treve.name} が振り返る。`,
      );
      await era.printAndWait(
        `あの日と同じコートを着た ${you.name} には、勝負服の ${treve.name} は当時想像もできなかった。`,
      );
      await treve.say_and_wait(`${callname}。`);
      era.printButton(`「うん。」`, 1);
      await era.input();
      await treve.say_and_wait(
        `ここまで連れてきてくれてありがとう。いくつもG1に出させて、誰より真剣に見てくれた。こんな大きな目標、凱旋門賞の前でも。`,
      );
      era.printButton(`「終わってから言ってくれ。」`, 1);
      await era.input();
      await era.printAndWait(
        `「そうね」と笑う ${treve.name} に、窮した色はない。`,
      );
      await era.printAndWait(
        `この凱旋門賞の舞台の前で、${you.name} は${treve.sex}の特異な才能を理解した。`,
      );
      await era.printAndWait(`それは身体の能力でも、精神の安定でもない。`);
      await era.printAndWait(`調教のあとで掴めるものとは違う、天与の才だ。`);
      await era.printAndWait(`他人の期待を背負うことに、まったく圧がない。`);
      await era.printAndWait(
        `巨大な器のように、人の信頼と希望を無限に力へ変えられる。`,
      );
      await era.printAndWait(
        `稀な完成度と高さから生まれたそれが、あらゆる消極を断ち、${treve.name} を前へ進ませる。`,
      );
      await era.printAndWait(
        `${you.name} は、もう一度自分に問わねばならない。`,
      );
      await era.printAndWait(`なぜ自分は${treve.sex}のトレーナーなのか。`);
      await era.printAndWait(
        `ドアノブに手を置いた${treve.sex}が、もう一度 ${you.name} を振り返り、あの言葉を言う。`,
      );
      await era.printAndWait(`願いか、呪いか。`);
      await era.printAndWait(`すべてが躍動するように。`);
      await treve.say_and_wait(`勝つわ。あなたの ${treve.name} として。`);
      era.printButton(`黙って見送る（好感+5）`, 1);
      era.printButton(`「君は勝つ。」（好感+15）`, 2);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] crazy_fan_end
  crazy_fan_end: (() => {
    const title = '한 번도 친해지지 못한 이국의 공주';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait([
        '마침내 어느 순간을 경계로 ',
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 연락은 완전히 끊어졌다.',
      ]);
      await era.printAndWait(
        '담당은 트레이너를 만나고 싶어 하지 않았고, 트레이너는 담당을 만날 용기가 없었다.',
      );
      await era.printAndWait([
        '하지만 여러 방면의 영향을 고려했는지, ',
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 계약을 해지하라고 요구하는 사람은 나타나지 않았다.',
      ]);
      await era.printAndWait([
        montjeu.get_colored_name(),
        '가 다시 한번 프랑스의 공주를 돌보는 중책을 짊어진 듯했다.',
      ]);
      era.println();
      await era.printAndWait([
        '공적인 일로 우연히 ',
        montjeu.get_colored_name(),
        '와 마주쳤을 때, ',
        you.get_colored_name(),
        '이(가) 받은 것은 비난이 아니라, ',
      ]);
      await era.printAndWait('——동정 어린 시선이었다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 서둘러 인사만 하고 떠날 수밖에 없었다.',
      ]);
      await era.printAndWait(
        '영문 모를 동정에 불안했기 때문일까, 아니면 두려웠기 때문일까……',
      );
      await era.printAndWait('어느 기자와 공주의 결말과 닮았으면서도 전혀 달랐다.');
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '는 두 번 다시 만나지 않았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] foreign_travel
  foreign_travel: (() => {
    const title = '베르사유의 장미';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `튈르리 정원은 파리 중심부에 위치해 있다. 샹젤리제 거리를 지나 콩코르드 광장과 루브르 미술관 사이에 있는 파리 중심부의 대형 정원으로, 관광 명소일 뿐만 아니라 시민들의 휴식처로도 널리 사랑받고 있다.`,
      );
      await era.printAndWait(
        `휴일 낮이 되자 가족 단위로 찾은 사람들이 많았고, 여기저기서 아이들이 뛰어노는 모습을 볼 수 있었다.`,
      );
      await era.printAndWait(`돌연, ${treve.name}는 완전히 움츠러들었다.`);
      await era.printAndWait(
        `${you.name}이(가) 고개를 들자 인사를 건네는 목소리가 들렸다.`,
      );
      await montjeu.say_and_wait('왔구나, 하지만 내가 볼일이 있는 사람은 저쪽이야.');
      await era.printAndWait(
        `신중함과 지성이 묻어나는 ${montjeu.adult_sex_title}의 목소리.`,
      );
      await era.printAndWait(
        `하지만 반사적으로 가장 먼저 떠오른 기억은, 수없이 들었던 ${treve.sex}의 위닝 라이브 목소리였다.`,
      );
      await era.printAndWait(
        `뒤를 돌아보니 늘씬하고 키 큰 ${treve.uma_sex_title}가 팔짱을 낀 채 이쪽을 바라보고 있었다.`,
      );
      await era.printAndWait(`——전설.`);
      await treve.say_and_wait(`스승님!`);
      await era.printAndWait(`${treve.name}는 눈을 반짝이며 그 인물을 불렀다.`);
      await era.printAndWait(`그리고 ${you.name}은(는) 온몸이 굳어 한 발자국도 움직일 수 없었다.`);
      await era.printAndWait(`경종처럼 빠른 심장 박동이 머릿속을 가득 채웠다.`);
      await montjeu.say_and_wait(`그러면.`);
      await era.printAndWait(
        `${montjeu.sex}는 ${you.name}의 왼손에 들린 종이봉투를 바라보았다.`,
      );
      await era.printAndWait(
        `${you.name}을(를) 나무 그늘 아래 벤치로 초대하고, 쓴웃음을 지으며 특산품을 받아들었다.`,
      );
      await era.printAndWait(
        `${montjeu.name}. 프랑스의 전설적인 ${treve.uma_sex_title}이자 개선문상 우승자 중 한 명.`,
      );
      await montjeu.say_and_wait(
        `트레센에 들어간 뒤에도 나는 휴일마다 ${treve.sex}에게 개인 지도를 했어. 타고난 소양에 기술을 더할 수 있다면 가르쳐 주겠다고 했을 뿐이지만, 순식간에 레이스의 요령을 터득하더군.`,
      );
      era.printButton(`「내 방식이 불만인 건가?」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 대답 대신, 바람에 흔들리는 나무를 지그시 응시했다.`,
      );
      await era.printAndWait(`그 너머로 햇빛을 받아 반짝이는 센강의 푸른 물결이 보였다.`);
      await era.printAndWait(`가을이 되었으니 더위는 이미 느껴지지 않을 터였다.`);
      await era.printAndWait(
        `하지만 ${you.name}의 관자놀이에서 뺨으로, 한 방울의 땀이 존재를 새기듯 천천히 흘러내렸다.`,
      );
      await era.printAndWait(
        `침묵은 ${you.name}이(가) 자신을 바라보는 ${montjeu.name}의 시선을 느낀 순간 끝났다.`,
      );
      await montjeu.say_and_wait(
        `불만이 있는지 없는지는 직접 만나보고 결정하고 싶었어. 상대를 실제로 보지 않으면 알 수 없으니까. 그래서, 지금에서야 답을 정했지.`,
      );
      await era.printAndWait(
        `${montjeu.name}는 그 날카로운 눈동자를 ${you.name}에게 돌리고, 미간을 찌푸리며 말로 추격해 왔다.`,
      );
      await montjeu.say_and_wait(`불만이다.`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}는 말을 이어나갔다.`);
      await montjeu.say_and_wait(
        `지금까지 네 실적은 꽤 설득력이 있었지. 좋은 점은 그대로 살리고, 나쁜 점은 고쳐나간다. ${treve.uma_sex_title}의 소질을 최대한 이끌어내는 방식이 결과적으로 방임주의적인 방식이더라도, 하나의 육성 수단으로서 이해할 수 있었어. 완성도가 높은 ${treve.name}를 담당하니 더더욱 설득력이 있게 되겠지.`,
      );
      await era.printAndWait(`방임주의처럼 보였던 거겠지.`);
      await montjeu.say_and_wait(
        `하지만, 지금 네 태도는 그저 방치하는 것에 불과해. 넌 네가 할 수 있는 일을 포기했고, ${treve.name}의 완성을 향한 노력을 저버렸어. 넌 그저 방관자일 뿐이야.`,
      );
      await era.printAndWait(`그럼, 어떡해야 할까.`);
      await era.printAndWait(
        `지금까지 자신의 기술을 믿고, 담당 ${treve.uma_sex_title}를 신뢰해 왔다. 그렇다면, 완벽한 ${treve.uma_sex_title}를 상대로, 결함 투성이인 자신은 어떻게 다가가야 할까?`,
      );
      await era.printAndWait(`${you.name}은(는) ${treve.sex}에 대해 어떻게 생각해야 할까?`);
      await era.printAndWait(`${montjeu.name}가 이어 말했다.`);
      await montjeu.say_and_wait(
        `개선문상은 높은 벽이야. 아무리 프랑스의 천재라 해도, 그렇게 쉽게 거머쥘 수 있는 건 아니지.`,
      );
      era.printButton(`「지금 상태로는 이길 수 없다는 뜻이야?」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그래.`);
      await era.printAndWait(
        `멀리서 ${treve.name}가 들판을 달리고 있다. 그 뒤를 쫓듯 어느새 늘어난 소년 소녀들도 달리고 있었다.`,
      );
      await era.printAndWait(
        `${treve.sex}가 그렇게 하면 누구라도 매료되겠지.`,
      );
      await era.printAndWait(
        `그리고 그것을 아무런 어려움 없이 힘으로 바꾸어, 천재적인 능력으로 레이스에서 이기겠지.`,
      );
      await era.printAndWait(
        `마음속 중얼거림을 긍정하듯, 왕년의 전설이 입을 열었다.`,
      );
      await montjeu.say_and_wait(
        `${treve.sex}는 이길 거다. 분명 너 없이도 이길 수 있는 강력한 떡잎이지.`,
      );
      era.printButton(`「알고 있어.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그렇기 때문에, 물어봐야만 해.`);
      await era.printAndWait(
        `${montjeu.name}가 일어서서 ${you.name}의 눈을 쏘아보는 시선은 조금 차가웠지만, 결코 깔보는 것은 아니었다.`,
      );
      await era.printAndWait(
        `단점을 노골적으로 지적받는 공평한 무대가, ${you.name}의 심장을 꽉 쥐는 듯했다.`,
      );
      await era.printAndWait(
        `지금까지 외면해 왔던 것을 눈앞에 들이미는 듯한 감각이었다.`,
      );
      await montjeu.say_and_wait(
        `혼자서도 이길 수 있는 ${treve.name}의 곁에, 네가 있는 이유를.`,
      );
      await era.printAndWait(`${treve.name}가 멀리서 손을 흔들며 인사했다.`);
      await era.printAndWait(
        `${montjeu.name}는 부드러운 미소와 함께 ${treve.sex}에게 손을 흔들었지만, ${you.name}은(는) 벤치에서 어깨를 늘어뜨린 채 ${treve.sex}를 응시할 수밖에 없었다.`,
      );
      await montjeu.say_and_wait(
        `개선문 앞에 서기 전에 답을 내야 할 거다, ${you.actual_name}. 그렇지 않으면 넌 ${treve.sex}의 미래를 빼앗게 될 거야.`,
      );
      await era.printAndWait(
        `다시 뛰어나간 ${treve.name}의 뒷모습을 수많은 아이들이 쫓고 있었다.`,
      );
      await era.printAndWait(`그 모습은 점차 아스라이 숲 속으로 사라졌다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] o_s_95_25
  o_s_95_25: (() => {
    const title = '使い果たして';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `澄んだ過去と、滲むこれからを思いながら、すぐに目的地へ着く。`,
      );
      await era.printAndWait(
        `あの茶店に入ると、店主は ${you.name} を見てまた眉を上げる。`,
      );
      await you.say_as_passer_by_and_wait('茶葉店の店主', 'ん？今度は一人か？');
      era.printButton(`「気にしないでくれ。」`, 1);
      await era.input();
      await era.printAndWait(
        `店内を一瞥したあと、${you.name} は${treve.sex}が味わい深く見つめていた花茶の棚へ足を向ける。`,
      );
      await era.printAndWait(
        `あの日と同じ豊富な並び。林檎、杏、クランベリーなど華やかな果実の絵が並ぶ。`,
      );
      await era.printAndWait(
        `その順で L（lemon）まで来ると、${you.name} の指は空の棚を指す。`,
      );
      await era.printAndWait(`曲がりくねった棚から出て、店主へ目を向ける。`);
      era.printButton(`「……レモン香のはないのか？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        'ああ、この季節は生産が良くないんだ。フランスのブランドだから、もともと流通が少ない。手付金を入れた分が少しあるくらいで。',
      );
      await era.printAndWait(
        `そのとおりだ。この品は、この男の店以外で見つけたことがない。`,
      );
      era.printButton(`「入荷の見込みは？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        '当分ない。卸にも在庫がないらしい。',
      );
      era.printButton(`「そうか——いや、ありがとう。」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はそのまま店を出ようとして、一言で引き止められる。`,
      );
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        `${treve.sex}は元気か？`,
      );
      await era.printAndWait(`肯定も否定もできない。`);
      await era.printAndWait(
        `${treve.name} がG1の惜敗を本当はどう思っているか、${you.name} にはあまり分からない。`,
      );
      await you.say_and_wait('役に立てないトレーナーだ。', true);
      await era.printAndWait(`男はレジでそわそわする。`);
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        'お前はまだいい。こっちは、あの子の様子のほうが心配だ。同業に、その茶があるか聞いておくよ。',
      );
      era.printButton(`「覚えてるのか？」`, 1);
      await era.input();
      await era.printAndWait(
        `その茶が ${treve.name} の好みだとメディアに出した覚えはない。だが男は苦笑して言う。`,
      );
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        'よく来てる客が連れてきたお客様だぞ。忘れられるわけがない。',
      );
      era.printButton(`「まったく……」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        `まあ、俺が${treve.sex}のファンだってのもあるが……`,
      );
      await era.printAndWait(`男は携帯の画面を叩きながら、妙な顔で呟く。`);
      await era.printAndWait(
        `${treve.name} は多くの人の期待を背負っている。できることをしようと労する人もいる。`,
      );
      await era.printAndWait(`もう一度、${you.name} は問わねばならない。`);
      await era.printAndWait(`なぜ自分は ${treve.name} のトレーナーなのか。`);
      await era.printAndWait(`${you.name} には、どう進めばいいか分からない。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] palace
  palace: (() => {
    const title = (treve) => `${treve.sex}は叶った美しい夢`;
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(`${you.name} は、何かの音を聞いた。`);
      await era.printAndWait(
        `闇の中で目を開けると、眼前は見知らぬ（まったく見知らぬわけではない）天井だ。`,
      );
      await era.printAndWait(`頭がふわふわして、状況が理解できない。`);
      await era.printAndWait(
        `いつもの場所とはまったく違うところにいる気がする。`,
      );
      await era.printAndWait(
        `ぼんやりした頭で虚空を見つめていると、ふわりとした香りが鼻を打つ。`,
      );
      await era.printAndWait(
        `次いで、一人の${treve.teen_sex_title}が突然目に入る。`,
      );
      await era.printAndWait(`柔らかい栗色の髪。澄んだ蒼い双眸。`);
      await era.printAndWait(
        `그리고 ${treve.sex}의 얼굴에는 아기를 바라보듯 자애로운 미소가 떠올라 있었다.`,
      );
      await treve.say_and_wait(`Bonjour、よく眠れた？`);
      await era.printAndWait(`撫でるような優しい声色が、微かな睡気を誘う。`);
      await era.printAndWait(
        `相手の顔を見て、${you.name} はようやく状況を理解し、意識を起こそうとする。`,
      );
      await era.printAndWait(`だが、温かい掌がそっと目を覆う。`);
      await treve.say_and_wait(`もう少し寝て？まだ早いの。`);
      era.printButton(`「……いや、起きないと。」`, 1);
      era.printButton(`「君といっしょの朝を楽しみたい。」（恋慕+1）`, 2);
      const ret = await era.input();
      await treve.say_and_wait(`ふふ、そう。嬉しい。`);
      await era.printAndWait(`掌の眼帯が外れ、光が視野へ入る。`);
      await era.printAndWait(
        `起き上がると、${treve.name} は ${you.name} の寝床に座って微笑んでいる。`,
      );
      await era.printAndWait(
        `何か名残惜しい気がして少し考えたが、これで十分かもしれない。まずすべきことをしなければ。`,
      );
      era.printButton(`「おはよう、${treve.name}。」`, 1);
      await era.input();
      await treve.say_and_wait(`ええ、${you.actual_name}！`);
      await era.printAndWait(`${treve.name} は歌うように返す。`);
      era.drawLine();
      await era.printAndWait(
        `凱旋門賞以来、あなたたちは海外のレースを主にしてきた。`,
      );
      await era.printAndWait(
        `正確には、普段以上の実力を示した結果、海外を主戦場にすると決まった。`,
      );
      await era.printAndWait(
        `張り付く ${treve.name} をなんとか追い、着替えて居間へ行く。`,
      );
      await era.printAndWait(
        `卓には佳肴が並び、${treve.name} が ${you.name} を待っている。`,
      );
      await era.printAndWait(`正直驚く。${treve.name} は料理も上手い。`);
      await era.printAndWait(`席に座り、さまざまな料理を眺める。`);
      await era.printAndWait(
        `マグロ、アンチョビ、オリーブなどで作った分量のあるサラダ。`,
      );
      await era.printAndWait(`暖かな濃いスープが、美しい香りを放つ。`);
      await era.printAndWait(`どれも目を奪う品だが、一つだけ特に目立つ。`);
      await era.printAndWait(`厚いハムと大量のチーズを入れたホットサンド。`);
      await era.printAndWait(
        `${treve.name} に「いただきます」と告げてから、がつがつ食べ始める。`,
      );
      await era.printAndWait(
        `濃厚なチーズソースにハムの風味。高級店で食べる味と同じだ。`,
      );
      await era.printAndWait(`——味がまったく同じだ。いま思い出した。`);
      era.printButton(`「……これ、買ってきたのか？」`, 1);
      await era.input();
      await treve.say_and_wait(`私が作ったのよ？`);
      await treve.say_and_wait(`あなたがおいしそうに食べるから、研究したの！`);
      await era.printAndWait(`……この子が天才だと、忘れかけていた。`);
      await era.printAndWait(
        `だが、ここまで再現できるのは、やはり${treve.sex}だ。`,
      );
      await treve.say_and_wait(`……${callname}、ご褒美をくれるでしょう？`);
      await era.printAndWait(
        `一瞬、微笑む ${treve.name} が次の瞬間に口を開く。`,
      );
      await era.printAndWait(
        `${you.name} は鮮やかな赤い口腔と舌を見て、なぜか心臓が止まる。`,
      );
      await era.printAndWait(
        `見るべきでないものを見ているような背徳感がある。`,
      );
      await treve.say_and_wait(`あ……♪`);
      await era.printAndWait(
        `そうして ${treve.name} は耳と尻尾を動かし、期待して ${you.name} を見る。`,
      );
      await era.printAndWait(`……つまり、あれをしろ、ということだ。`);
      await era.printAndWait(
        `少し躊躇するが、しなければ${treve.sex}が口を開けたままになるのは確かだ。`,
      );
      await era.printAndWait(
        `とにかくサンドを小さく裂き、ゆっくり${treve.sex}の口へ入れる。`,
      );
      await treve.say_and_wait(`ん……`);
      await era.printAndWait(
        `${treve.name} は唇を閉じ、${you.name} の指先をわずかに巻き込む。`,
      );
      await era.printAndWait(`生々しい感触と温かさが、指先から脳へ伝わる。`);
      await era.printAndWait(
        `それから${treve.sex}は何かを考えながら口を動かし、一口ずつ飲み下す。`,
      );
      await treve.say_and_wait(`……ん。`);
      await era.printAndWait(`目を閉じ、また口を開ける。`);
      await era.printAndWait(`もう一度、とは思わなかった。`);
      await era.printAndWait(
        `背徳と保護欲と内側の刺激。${you.name} はまたサンドを裂く。`,
      );
      await era.printAndWait(
        `二度、三度、四度、${treve.sex}の口へ入れ、指先が徐々に湿る。`,
      );
      await era.printAndWait(
        `やがて皿のフランス風サンドは消え、すぐ終わりが来る。`,
      );
      await treve.say_and_wait(`あ、あなたの分まで食べちゃった。`);
      era.printButton(`「大丈夫、大丈夫だ、ね！？」`, 1);
      await era.input();
      await treve.say_and_wait(`ええ♪ありがとう♪`);
      await era.printAndWait(
        `${treve.name} は満面の笑みで礼を言い、舌で唇を一周舐める。`,
      );
      await era.printAndWait(`${you.name} は湿った指を意識せざるを得ない。`);
      await era.printAndWait(`${treve.name} はそれを見ながら、小さく呟く。`);
      await treve.say_and_wait(`……癖になりそう。`);
      await era.printAndWait(`聞かなかったことにしよう。`);
      era.drawLine();
      await treve.say_and_wait(`……また夜まで仕事。`);
      await era.printAndWait(`両肩に温かい手が置かれ、上から声がする。`);
      await era.printAndWait(
        `見上げると、風呂上がりの熱を残した ${treve.name} が、真剣な目で ${you.name} を見下ろしている。`,
      );
      await era.printAndWait(`では、時間だ。部屋へ戻ろう。`);
      era.printButton('「今日は寝る。おやすみ、トレヴ。」', 1);
      await era.input();
      await treve.say_and_wait(`あっ……`);
      await era.printAndWait(`服を引かれる。`);
      await era.printAndWait(
        `振り返ると、${treve.name} は寂しそうに ${you.name} の裾を掴んでいる。`,
      );
      await era.printAndWait(
        `その様子が、${you.name} に小さな動物を思い出させる。`,
      );
      era.printButton(`「すぐには眠れなさそうだ。夜風に当たるか？」`, 1);
      await era.input();
      await treve.say_and_wait(`……いい！`);
      await era.printAndWait(`${treve.name} は目を輝かせ、尻尾を振る。`);
      await era.printAndWait(
        `この反応にも慣れたな、と ${you.name} は思いながら${treve.sex}の手を引く。`,
      );
      await era.printAndWait(
        `走りは美しく、きれいだ。誰にとっても理想の走り。`,
      );
      await era.printAndWait(`聖女のような清らかな${treve.sex}。`);
      await era.printAndWait(`女神のような気高い${treve.sex}。`);
      await era.printAndWait(
        `少しだらしなく、意外と親しみやすい${treve.sex}。`,
      );
      await era.printAndWait(`そして、人より寂しがりな${treve.sex}。`);
      era.printButton(`「君がそばにいるだけで——」`, 1);
      await era.input();
      await era.printAndWait(`簡潔に、きちんと伝える。`);
      await era.printAndWait(`${treve.name} に似合う言葉で。`);
      era.printButton(`「何度でも、愛を君へ届ける。」`, 1);
      await era.input();
      await era.printAndWait(`とんでもないことを言った気がする。`);
      await era.printAndWait(
        `${you.name} は冷や汗が次々と出るのに気づくが、言葉はもう出てしまっている。`,
      );
      await era.printAndWait(
        `${treve.name} は耳と尻尾を限界まで立て、目をいっぱいに見開き、顔を真っ赤にする。`,
      );
      await era.printAndWait(
        `やがて呆れたように、諦めたように、大きなため息をつく。`,
      );
      await treve.say_and_wait(
        `……あなたも意外と欲深いのね。ずいぶん勝手なことを言うわ。`,
      );
      era.printButton(`「知らないのか。トレーナーはみんなこうだ。」`, 1);
      await era.input();
      await era.printAndWait(
        `誰もが、担当の${treve.uma_sex_title}を英雄にしたい。`,
      );
      await era.printAndWait(
        `栄冠を取った翌日には、もう新しいトロフィーを探す。`,
      );
      await era.printAndWait(
        `トレーナーという生き物は、実際には${treve.uma_sex_title}より貪欲だ。`,
      );
      await era.printAndWait(
        `それを聴き、${treve.name} は先より大きなため息をつき、両手を伸ばす。`,
      );
      await era.printAndWait(
        `そっと手を ${you.name} の両頬に置き、じっと ${you.name} を見る。`,
      );
      await treve.say_and_wait(`仕方ない。分かったわ。あなたのそばに立つ。`);
      await era.printAndWait(`そう言い、${treve.name} はさらに顔を近づける。`);
      await era.printAndWait(
        `眼前は${treve.sex}の端正な貌。甘い香りが、肌に熱を感じる距離にある。`,
      );
      await era.printAndWait(
        `そしてそのままで、${treve.sex}の目が急に鋭くなる。`,
      );
      await treve.say_and_wait(
        `でも勘違いしないで。あなたの理想は満たさない。`,
      );
      await era.printAndWait(
        `${you.name} への宣戦だ。蒼い視線が ${you.name} を射抜く。`,
      );
      await treve.say_and_wait(
        `誰にも譲らない。ずっとあなたの前に立ち、いつかあなたが私だけを見るようにする。`,
      );
      await era.printAndWait(`言い終えると、${treve.name} はにこりと笑う。`);
      await era.printAndWait(
        `${treve.sex}がもともと持つ、無邪気で周囲まで楽しくする笑顔だ。`,
      );
      await era.printAndWait(
        `${treve.sex}の顔に再び笑みが戻ると、『ぱっ』と瞬きする。`,
      );
      await treve.say_and_wait(`——私の愛しい人。`);
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] prix_lat_win_classical
  prix_lat_win_classical: (() => {
    const title = '最強';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `これまでなかったほどの自信に満ちた言葉なのに、${you.name} にはどう聴いても空虚だった。`,
      );
      await era.printAndWait(
        `聞こえる歓声は遠雷のようで、距離があっても耳を潰す。`,
      );
      await era.printAndWait(
        `${treve.name} の走りに、${you.name} が直すべき箇所はほとんどない。`,
      );
      await era.printAndWait(
        `この稀な才能を開花させたのは、おそらく ${montjeu.name} だ。`,
      );
      await era.printAndWait(
        `そして、あの ${montjeu.name} の走りを追憶させるように。`,
      );
      await era.printAndWait(
        `先行策のある一瞬、集団の前方を走る ${treve.name} が、最後の直線を待つとき。`,
      );
      await era.printAndWait(`ロンシャンの熱が最高潮に達したとき。`);
      await era.printAndWait(
        `あれほど憧れた、日本が数十年取れなかった凱旋門賞の前で、${you.name} の胸には二つの感情が絡む。`,
      );
      await era.printAndWait(`一つは、勝利の確信。`);
      await era.printAndWait(
        `${treve.name} はこれまでのレースでも巧みな位置取りで勝ち、${treve.sex}がいちばん得意なのは先行、とりわけ集団の先頭にいるときだ。`,
      );
      await era.printAndWait(
        `そこからの末脚があれば、無敗の${treve.teen_sex_title}に追いつける${treve.uma_sex_title}はいない。`,
      );
      await era.printAndWait(
        `はっきり言えば、この局面まで来れば${treve.sex}の勝利は確定している、それほどの確信だ。`,
      );
      await era.printAndWait(`もう一つは、敗北の恐怖。`);
      await era.printAndWait(
        `だがそれは、いま眼前を走る ${treve.name} が負けるという意味ではない。`,
      );
      await era.printAndWait(
        `数年前、あの日本の怪鳥の前に ${montjeu.name} が好位へ現れたとき、全身が凍った恐怖。`,
      );
      await era.printAndWait(
        `${treve.sex}に勝てない絶望のフラッシュバックが、まったく同じ姿を見せる ${treve.name} に重なる。`,
      );
      await era.printAndWait(`歓声は、まだ遠い。`);
      await era.printAndWait(
        `最後の直線で先頭の ${
          treve.name
        } が、後ろの${treve.uma_sex_title}を徐々に引き離す。`,
      );
      await era.printAndWait(`ロンシャンを埋める声援に支えられるように。`);
      await era.printAndWait(`あの英姿に、自分の寄与した部分はあるのか。`);
      await era.printAndWait(
        `${you.name} は柵を掴み、震える体を少し乗り出し、${treve.sex}の横顔をはっきり捉える。`,
      );
      await era.printAndWait(
        `汗を流しながら重馬場の最後100メートルを走る${treve.sex}に、${you.name} に何ができる。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`声が出ない。`);
      await era.printAndWait(
        `${treve.sex}の勝利はもう決まっている。${you.name} がすべきことは、もうない。`,
      );
      await era.printAndWait(
        `興奮した歓声が耳を潰し、その響きを通して ${you.name} は、${treve.name} が凱旋門賞のゴールを踏んだ瞬間をはっきり理解する。`,
      );
      era.println();
      await era.printAndWait(`${you.name} は、その瞬間を見ていなかった。`);
      era.println();
      await era.printAndWait(
        `凱旋門賞を取った感想を訊かれ、携帯の通知に怒涛のように来る短信、場内から戻った ${treve.name} に何を言ったかさえ、もう覚えていない。`,
      );
      await era.printAndWait(
        `だが一事だけが、${you.name} の頭に深く刻まれた。`,
      );
      await era.printAndWait(
        `凱旋門賞後の会見で、ワインレッドのボードを背にトロフィーを抱えた ${treve.name} が、誰かの問いに答えた言葉。`,
      );
      await era.printAndWait(
        `何かを訊かれた瞬間、恍惚の ${you.name} の右手が、いきなり掴まれる。`,
      );
      await treve.say_and_wait(`来年も${you.sex}といっしょに勝つ！`);
      await era.printAndWait(`なぜ。`);
      await era.printAndWait(`なぜ自分なのか。`);
      await era.printAndWait(
        `何が、空虚な自分を ${treve.name} の隣に立たせるのか。`,
      );
      await era.printAndWait(
        `フラッシュの白い光は眩しい。疲労の溜まった目には、何も入ってこない。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] prix_lat_win_senior
  prix_lat_win_senior: (() => {
    const title = '頂へ、そしてまた勝つ';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(`秋高く澄んだ空が、ロンシャンの真上に広がる。`);
      await era.printAndWait(
        `世界最高峰の${treve.uma_sex_title}たちを迎えるこのレースにふさわしい気候だろう。`,
      );
      await era.printAndWait(`いつものコートで来たが、少し暑い。`);
      await era.printAndWait(`客席最前列で柵を握るのも、二度目だ。`);
      await era.printAndWait(
        `時間は瞬く間に過ぎた気がするが、もう一度ここに立つまでに起きたことは、あなたたちにすべて必要だった。`,
      );
      await era.printAndWait(`それらの重みは、かつてなかったほどだ。`);
      await era.printAndWait(
        `それが ${you.name} がここにいる理由となり、この瞬間を支えている。`,
      );
      await montjeu.say_and_wait(`こんなに早く来るとはね。`);
      await era.printAndWait(`馬丁の隣に立つ人物が ${you.name} へ微笑む。`);
      await era.printAndWait(
        `${you.name} は、ようやく ${montjeu.name} にあのときの答えを見せられると思う。`,
      );
      await era.printAndWait(
        `あなたたちはいっしょに、ゲートへ入る ${treve.name} を見つめる。`,
      );
      await montjeu.say_and_wait(`戦術は？`);
      era.printButton(`「目新しいものはない。」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `……気が触れたの？いちばん分かっているのはあなたでしょう。${treve.sex}の特性を理解し、妨害を破ってきたはずよ。そのうえで、使うべき対策を取らなくていいの？`,
      );
      await era.printAndWait(
        `${montjeu.name} を真似た${treve.sex}の走りは、変えにくい。`,
      );
      await era.printAndWait(
        `すでに、${
          treve.name
        } への適応は世界中の${treve.uma_sex_title}によって進んでいると気づいている。`,
      );
      await era.printAndWait(
        `それでも、${treve.sex}へ与えられるものはほかにない。`,
      );
      era.printButton(`「それでも、${treve.sex}を勝たせる。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`……`);
      await era.printAndWait(
        `二度目の凱旋門賞。複雑な坂と深い芝、2400 メートルの舞台。`,
      );
      await era.printAndWait(
        `轟音とともに走る${treve.couple_title}と観客の熱い声援。その中には、これからフランスそのものを背負う ${treve.name} への期待も少なくない。`,
      );
      await era.printAndWait(
        `今年に入って勝っていない。${treve.sex}の衰えに気づいた人も多い。`,
      );
      await era.printAndWait(
        `だが、それに気づいても、祈る人々のために止まることはない。`,
      );
      await era.printAndWait(
        `${treve.name} は、この世界でいちばん長い二分半の道へ踏み出す。`,
      );
      await era.printAndWait(
        `ブローニュの森を抜ける${treve.couple_title}を見ながら、腕を組む。${montjeu.name} は腰を伸ばして注視する。`,
      );
      await montjeu.say_and_wait(
        `……戦術が破られているのは分かっている。それでも先行策を取らなければ、${treve.sex}の勝負は始まらない。`,
      );
      era.printButton(`「力で押し開けるなら？」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `無理よ。もともと争いが激しいうえ、今年は前年覇者の名も背負っている。いまの ${treve.name} は、完全にマークされているわ。`,
      );
      await era.printAndWait(
        `実際、先頭集団へ混ざるところまでは ${treve.name} は成功したが、前へ出る路はすべて封じられている。`,
      );
      await era.printAndWait(`確かに封鎖された——最終直線に入る前までは`);
      await era.printAndWait(`コーナーを回り、レースは中盤へ来る。`);
      await era.printAndWait(
        `普段は先頭集団の前で歩調を作るが、${treve.name} は後方へ押し出された形で集団を追う。`,
      );
      era.printButton(`「${montjeu.name}。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`何？`);
      era.printButton(`「あなたは、なぜ先行策が得意なんですか？」`, 1);
      await era.input();
      await era.printAndWait(
        `視線の先で、${treve.sex}は集団がいったん固まったまま進むレースを眺め、低く言う。`,
      );
      await montjeu.say_and_wait(
        `体力配分と脚力が私に合う、というのはある————ええ、いちばん大きいのは、自分に合う位置に立てたことね。私は忍耐強いタイプじゃない。最後の直線まで待たねばならない決着とは、あまり相性が良くない。`,
      );
      await era.printAndWait(`${montjeu.name} は坦然と前方を凝視する。`);
      era.printButton(`説明する`, 1);
      await era.input();
      await you.say_and_wait(
        `レースでは心理的な圧が相当大きい。${treve.name} にもある程度の強さはあるが、忍耐強いとは言い切れない。だから${treve.sex}は、ずっと先行策を取ってきた。`,
      );
      await montjeu.say_and_wait(`……ずっと、なるほど。`);
      await era.printAndWait(`${montjeu.name} は何かに気づいたらしい。`);
      await era.printAndWait(
        `その機会は、いつもあった。だが最後まで、確かな理由で決心できなかった。`,
      );
      await era.printAndWait(
        `だから初の凱旋門賞でも提案せず、今年のG1でもその戦術は取らなかった。`,
      );
      await era.printAndWait(`だが、いまなら。いまこそ決心すべきときだ。`);
      await era.printAndWait(`偽りの最終コーナーを抜け、最終直線へ向かう。`);
      await era.printAndWait(
        `${treve.name} は標的にされたまま、いまも包囲網を受け続けている。`,
      );
      await era.printAndWait(`柵から身を乗り出す。`);
      era.printButton(`「${treve.name}！！」`, 1);
      await era.input();
      await era.printAndWait(`${treve.name} が ${you.name} のほうを少し見る。`);
      await era.printAndWait(
        `控え室の記憶。${you.name} の作戦は、すでに伝わっている。`,
      );
      await era.printAndWait(
        `だが${treve.sex}が躊躇しないよう、正面から${treve.sex}の目を見て伝える。`,
      );
      await era.printAndWait(
        `勝ち負けの前に、${you.name} は ${
          treve.name
        } という${treve.uma_sex_title}に、自分の夢を叶えてほしい。`,
      );
      era.printButton(`「見せてくれ。」`, 1);
      await era.input();
      await era.printAndWait(
        `つま先で地面を叩く${treve.sex}、三色の勝負服の${treve.sex}が、${you.name} へ指を伸ばす。`,
      );
      await treve.say_and_wait(`——${you.actual_name} のために。`);
      await era.printAndWait(
        `${treve.sex}は、${you.name} がようやく託した期待を背負い、どこまでも走る。`,
      );
      await era.printAndWait(
        `不安が一つでも残れば${treve.sex}に圧がかかると、${you.name} は知っている。`,
      );
      await era.printAndWait(
        `だからこそ、完璧な状態で${treve.sex}を送り出した。`,
      );
      await era.printAndWait(
        `先行策は ${treve.name} 自身が望んだものだが、隣の ${you.name} は知っている。${treve.sex}の脚そのものは、どんな攻めにも効く強さだと。`,
      );
      await era.printAndWait(
        `だから ${you.name} は、これを${treve.sex}に託した。`,
      );
      await era.printAndWait(
        `${
          treve.name
        } は包囲網の前方の${treve.uma_sex_title}のところで、一瞬だけ速度を落として下がる。最終直線という最後の攻め場で起きた予想外の行動に、相手は後方を振り返る。`,
      );
      await era.printAndWait(
        `だが ${
          treve.name
        } は、もうそこにいない。ほかの${treve.uma_sex_title}を避けるため、いちばん外側へ走っている。`,
      );
      await era.printAndWait(
        `そして、封鎖されて温存された体力が、一瞬で爆ぜる。`,
      );
      await era.printAndWait(
        `土壇場の集中は、研いだ刀の先のように先頭を掴む。`,
      );
      await era.printAndWait(`${treve.name} は大外から一気に駆け上がる。`);
      await era.printAndWait(
        `これまでの走りとまったく違う戦術に、観客のざわめきが巨大になる。`,
      );
      await montjeu.say_and_wait(`差し……！？`);
      await era.printAndWait(
        `これは ${treve.name} が柔軟さでいつでもできた戦法だ。`,
      );
      await era.printAndWait(
        `だが封鎖網を避けるなら、いったん下がってから再始動する迂回しかない。`,
      );
      await era.printAndWait(`相手が最終直線で隙への恐怖を晒すのを使う。`);
      await era.printAndWait(`${treve.name} は一瞬で先行集団を超える。`);
      await era.printAndWait(
        `まったく読めない、${treve.sex}の先行策以外の奇襲が、逃げようとする相手を揺らす。`,
      );
      await era.printAndWait(
        `完全に封鎖したはずの相手が、最後の最後に襲来する。`,
      );
      await era.printAndWait(
        `${treve.sex}は ${montjeu.name} の影すら超え、走路を前方へ走る。`,
      );
      await era.printAndWait(
        `青いマントが翻り、${you.name} は${treve.sex}の背を凝視する。`,
      );
      await era.printAndWait(
        `${treve.name} はすべての予想を超え、すべての過去を捨てる。`,
      );
      await era.printAndWait(
        `そして、生まれたすべての希望を背負い、人の届かないところへ走る。`,
      );
      await era.printAndWait(`いくつ願いを忘れても、どこかで必ず覚えている。`);
      await era.printAndWait(`この世界を変える輝きを、ずっと求めていた誰か。`);
      await era.printAndWait(`そして最後に、${treve.sex}と出会った。`);
      await era.printAndWait(`${treve.name} の叫びが聞こえる。`);
      await era.printAndWait(
        `${
          treve.sex
        }は最後の力を尽くし、残り100メートルを切った最後の一瞬で先頭の${treve.uma_sex_title}を超える。時間が止まったようにさえ感じる。`,
      );
      await era.printAndWait(
        `${you.name} は、これまであなたたちのすべてが熟したと思う。`,
      );
      await era.printAndWait(
        `掲示板を越える最後の蹄音が、何よりも大きく、この舞台に響く。`,
      );
      await era.printAndWait(
        `フランス競馬史上、三十六年ぶりの偉業。凱旋門賞連覇を果たしたのは、誰も拾わなかった${treve.uma_sex_title}と、誰も拾わなかった異国のトレーナーだ。`,
      );
      await era.printAndWait(
        `軽く吸って、吐く。芝の匂いがいっぱいで、心を潤すようだ。`,
      );
      await era.printAndWait(
        `ここにいなければ、確かに見えなかったものがある。`,
      );
      await era.printAndWait(
        `そのために、この仕事をずっと続けていて本当によかったと、${you.name} は思う。`,
      );
      await era.printAndWait(`万雷の喝采と祝福の中で。`);
      await montjeu.say_and_wait(`顔を上げなさい。`);
      await era.printAndWait(
        `${montjeu.name} の言うとおり上を見ると、いつの間にかそこに立つ ${treve.name} と目が合う。`,
      );
      await era.printAndWait(
        `${treve.sex}は荒い息をつき、汗を流し————少し呼吸を整え、それから ${you.name} へ右手を伸ばす。`,
      );
      await era.printAndWait(
        `${you.name} が${treve.sex}の意図が分からず戸惑っても、${treve.name} は構わず柵から身を乗り出す。`,
      );
      await era.printAndWait(
        `茫然とする ${you.name} の前で、${treve.name} は悪戯っ子のように微笑み、${you.name} の手を握って柵の向こうへ引き上げる。`,
      );
      await treve.say_and_wait(`さあ、早く！`);
      era.printButton(`「老人には少し優しくしてくれ。」`, 1);
      await era.input();
      await treve.say_and_wait(
        `次は三連覇よ、時間がない！あと、私と付き合って！`,
      );
      await era.printAndWait(
        `${you.name} は散った過去を後ろへ置き、目に深く焼き付いた${treve.sex}の姿を思い出す。`,
      );
      await era.printAndWait(`最後の直線。すべてを振り切るような輝き。`);
      await era.printAndWait(
        `いつか${treve.sex}は、それすら塗り替えていく走りを人に見せるだろう。`,
      );
      await era.printAndWait(
        `必ず ${you.name} を、想像もできないところへ連れていく。`,
      );
      await era.printAndWait(
        `${treve.sex}の微笑を見て、${you.name} は思う。これが、いまの自分の全部だと。`,
      );
      await era.printAndWait(`秋の空は、どこまでも爽やかだ。`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_start
  race_start: (() => {
    const title = '레이스 전';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      const buffer = [
        () =>
          treve.say_and_wait(
            '오늘의 승리는 제가 차지하겠어요. 프랑스의 모두를 위해.',
          ),
        () => treve.say_and_wait('영광은 이미 제 손안에 있어요.'),
        () => treve.say_and_wait('가슴 뛰는 승부를 펼쳐봐요!'),
      ];
      if (era.get('love:205') >= 50) {
        buffer.push(() =>
          treve.say_and_wait(
            `오늘의 승리는 제가 차지하겠어요. ${you.actual_name}을(를) 위해.`,
          ),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_win
  race_win: (() => {
    const title = '레이스 승리';
    /** @param {CharaTalk} treve トレヴ */
    const f = async (treve) => {
      const buffer = [
        () => treve.say_and_wait('골인! 제가 이겼어요~'),
        () => treve.say_and_wait('Merci beaucoup! (감사합니다!)'),
        () => treve.say_and_wait('여러분, 축복해주셔서 감사합니다!'),
        () =>
          treve.say_and_wait(
            '이 모든 게 제가 이런 영광을 누릴 수 있는 이유랍니다, 여러분께 최고의 선물을 바치게 해주세요.',
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_47_33
  we_47_33: (() => {
    const title = '먼 곳을 향해';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `콧노래를 흥얼거리며, 가을 햇살이 은은한 온기를 남기는 날에 활기찬 찻집을 찾았다.`,
      );
      await era.printAndWait(
        `어쨌든 상대는 ${treve.name}의 스승이니 빈손으로 찾아가기도 멋쩍었다.`,
      );
      await era.printAndWait(`바구니에는 자신에게 주려고 산 찻캔이 들어 있었다.`);
      await era.printAndWait(
        `그곳에서 살짝 시선을 올리자, 오버사이즈 코트를 입은 ${treve.name}가 자세히 상품을 바라보고 있었다.`,
      );
      await era.printAndWait(
        `여러 찻잎의 향을 확인하고 있는 ${treve.sex}에게, ${you.name}은(는) 슬며시 다가갔다.`,
      );
      era.printButton(`「……트레이닝실에 두는 홍차 찻잎이 얼마 안 남았는데, 좀 골라 줄래?」`, 1);
      await era.input();
      await era.printAndWait(
        `${treve.name}는 귀를 쫑긋 세우며 기쁜 듯 꼬리를 흔들고 품평을 시작했다.`,
      );
      await era.printAndWait(
        `자극이 적은 찻잎이 좋겠다고 생각하며 입구 쪽의 캔을 바구니에 담으려 하자, 이미 그 안에는 레몬 향이 나는 찻잎이 들어 있었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 유독 신경이 쓰이는지 생글생글 웃으며 ${you.name}을(를) 바라보았다.`,
      );
      era.printButton(`「레몬이야?」`, 1);
      await era.input();
      await era.printAndWait(
        `딱히 불만을 표시하려던 건 아니었지만, ${treve.name}는 갑자기 볼을 부풀리며 항의했다.`,
      );
      await treve.say_and_wait(`${callname}, 무슨 불만이라도 있으신가요?`);
      era.printButton(`「불만이 있는 건 아냐…… 예전에 산 적이 있어서. 좋아하는 맛이거든.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) 찻캔 세 개가 든 바구니를 계산대에 올려놓자, 낯익은 점원이 깜짝 놀란 표정을 지었다.`,
      );
      await era.printAndWait(`그는 손가락으로 계산기를 두드리며 눈썹을 치켜올렸다.`);
      await you.say_as_passer_by_and_wait(
        '찻집 주인',
        `오랜만이네요. 그 ${treve.child_sex_title}가 새로 담당하시게 된 우마무스메인가요?`,
      );
      await era.printAndWait(`주인은 ${you.name}의 어깨너머로 뒤를 바라보았다.`);
      await era.printAndWait(
        `지금도 홍차를 구경하고 있는 ${treve.name}는 여전히 무패 행진 중인데다 오크스에서 우승했기에 팬이 제법 늘어난 상태였다.`,
      );
      await era.printAndWait(
        `하지만 대중의 시선을 한 몸에 받는 인기 우마무스메라고 하기에는 아직 조금 무리가 있었다.`,
      );
      await era.printAndWait(`아는 사람만 아는, 딱 그 정도의 느낌이었다.`);
      await era.printAndWait(
        `홍차를 포장하던 주인은 무언가를 눈치챈 듯 고개를 들었다.`,
      );
      era.printButton(`「무슨 일 있나요?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻집 주인',
        `${treve.sex}도 꽤 인기 있는 거 아닌가요?`,
      );
      await era.printAndWait(
        `${you.name}이(가) 뒤를 돌아보니, 두 명의 젊은 여성이 ${treve.name}와 악수를 나누고 있었다.`,
      );
      await era.printAndWait(
        `두 사람 모두 ${treve.sex}의 팬인 듯했고, 밝게 응대해 주는 동경의 ${treve.uma_sex_title}에게 푹 빠진 모습이었다.`,
      );
      await era.printAndWait(
        `G1에서 우승하기 전부터 눈치채고는 있었지만, ${treve.name}에게는 독특한 매력이 있었다.`,
      );
      await era.printAndWait(
        `투명한 귀여움을 뿜어내는 ${treve.sex}에게 매료된 사람은 트레센 내에서도 적지 않았다.`,
      );
      await era.printAndWait(
        `팬이 아직 적었을 때부터 수많은 사람들이 ${treve.sex}를 열광적으로 지지해 주었다.`,
      );
      await era.printAndWait(`그런 생각을 하는 사이, 종이 가방 두 개가 계산대 위에 놓였다.`);
      await era.printAndWait(
        `지갑에서 지폐 몇 장을 꺼내 주인에게 건네자, ${treve.name}가 ${you.name}의 곁으로 돌아왔다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻집 주인',
        '여기 거스름돈입니다. 앞으로도 잘 부탁드립니다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 개인적으로 쓸 찻잎이 든 봉투를 ${treve.sex}에게 건네며 가게를 나섰다.`,
      );
      await era.printAndWait(
        `일정하게 늘어선 가로수들이 조금씩 잎을 떨어뜨리기 시작했지만, 아직은 황금빛 가을 풍경을 즐길 수 있을 것 같았다.`,
      );
      await era.printAndWait(
        `대로를 걷다 보니, 옆에 있던 ${treve.teen_sex_title}가 뒤를 돌아보았다.`,
      );
      await era.printAndWait(`그 시선 끝에는 방금 전 두 여성의 뒷모습이 보였다.`);
      era.printButton(`「방금 그 팬들이야?」`, 1);
      await era.input();
      await treve.say_and_wait(
        `네…… ${treve.couple_title}께서 줄곧 제 레이스를 지켜보고 계셨대요.`,
      );
      await treve.say_and_wait(`정말 기뻐요.`);
      await era.printAndWait(`${treve.name}가 수줍게 말했다.`);
      await era.printAndWait(
        `그러면서도 ${treve.sex}는 진지한 눈빛으로, 자신의 활약을 기대해 주는 두 팬을 보며 감회에 젖어 있었다.`,
      );
      await treve.say_and_wait(
        `여기에 오기 전까지 정말 많은 분의 도움을 받았어요. 스승님도 그중 한 분이고요. 가족과 친구들을 위해 노력하고 싶다는 마음은 지금도 변함없어요.`,
      );
      await treve.say_and_wait(
        `절 응원해 주시는 분들이 점점 늘어난다고 생각하면, 더 많이 달리고 싶고, 더 많이 이기고 싶어져요.`,
      );
      await era.printAndWait(
        `수많은 ${treve.uma_sex_title}들이 대중의 시선에 노출되는 것에 압박감을 느낀다.`,
      );
      await era.printAndWait(
        `${you.name}의 담당 중에서도 G1처럼 주목받는 무대에서 실력을 제대로 발휘하지 못해 괴로워하는 ${treve.uma_sex_title}가 있었다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}는 활약할수록 더 커져만 가는 기대에 조금도 주저하지 않았다.`,
      );
      await era.printAndWait(`그 모든 것을 힘으로 바꾸어 꿈을 향해 나아간다.`);
      await era.printAndWait(
        `그리고 그런 ${treve.sex}의 지금 목표는 바로 샹젤리제 거리 끝에 서 있는 거대한 건축물이 상징하는 그 레이스다.`,
      );
      await era.printAndWait(
        `나폴레옹이 세운 개선문. 우뚝 솟아 있는 승리의 상징.`,
      );
      await era.printAndWait(
        `${treve.sex}는 분명 그 건너편에 나타나, 그 이름이 붙은 세계 최고봉의 레이스 무대에서 눈부시게 빛날 것이다.`,
      );
      era.printButton(`「……넌 반드시 이길 거야.」（호감도 +5）`, 1);
      await era.input();
      await era.printAndWait(`${treve.name}가 갑자기 뒤를 돌아보았다.`);
      await era.printAndWait(
        `평소처럼 천진난만한 미소를 짓던 모습과는 달리, ${treve.sex}는 상냥하게——하지만 무언가를 호소하듯, 고요한 바다와 같은 미소를 지으며 나지막이 속삭였다.`,
      );
      await treve.say_and_wait(`반드시요.`);
      await era.printAndWait(
        `${you.name}은(는) 그것이 단지 자신만을 향한 말이 아닐지도 모른다고 생각했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_95_28
  we_95_28: (() => {
    const title = '정점 아래에서';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `정신을 차려보니 ${you.name}은(는) 이미 샹젤리제 거리를 걷고 있었다.`,
      );
      await era.printAndWait(`동쪽 하늘로 달이 떠오르고, 어둠이 짙어지는 거리에 가로등이 하나둘 켜졌다.`);
      await montjeu.say_and_wait('답은 찾았나?');
      await era.printAndWait(
        `고개를 저었다. 하지만 ${montjeu.name}는 이미 예상했다는 듯 타하지 않고 조용히 말을 이어갔다.`,
      );
      await montjeu.say_and_wait('그렇다면——');
      era.printButton(`「잠깐.」`, 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) ${montjeu.sex}의 눈을 똑바로 응시했다.`);
      await era.printAndWait(
        `몇 년 전이든 반년 전이든, 도저히 정면으로 마주할 수 없었던 ${montjeu.sex}의 눈이었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 이것이 혼자서 해결할 수 있는 문제가 아님을 알고 있었다.`,
      );
      await era.printAndWait(
        `누군가와 마주하고 자신의 한계를 드러내는 것을 늘 두려워해 왔음을, ${you.name}은(는) 서서히 깨닫고 있었다.`,
      );
      era.printButton(`「내 과거 이야기를 들어줬으면 좋겠어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 한동안 ${you.name}의 얼굴을 지긋이 바라보았다.`,
      );
      await era.printAndWait(
        `몸을 도려낼 듯한 시선에 도망치고 싶어지기도 했지만, 여기서 버텨내지 못하면 아무것도 시작되지 않는다.`,
      );
      await era.printAndWait(
        `이윽고 ${montjeu.sex}는 두세 걸음 걸어가 ${you.name}을(를) 이끌며 벤치에 앉았다.`,
      );
      await era.printAndWait(`곁에 앉자, ${montjeu.name}가 서두를 꺼냈다.`);
      await montjeu.say_and_wait('내 앞에서 아무리 말을 번지르르하게 해봤자……');
      era.printButton(
        `「만약 그런 날이 온다면, 나도 ${treve.name}에게 똑같이 말할 거야.」`,
        1,
      );
      await era.input();
      await montjeu.say_and_wait('……알겠어.');
      await era.printAndWait(
        `${you.name}은(는) 그렇게 함으로써 자신과 마주하고자 했다.`,
      );
      await era.printAndWait(
        `그것은 누구나 어찌할 수 없는 미숙함을 스스로 해부하는 것과 같았다.`,
      );
      era.printButton(`고통스러운 과거를 회상한다`, 1);
      await era.input();
      await you.say_and_wait(
        `몇년 전, 난 네가 달렸던 개선문상을 가장 앞에서 지켜봤어. 너와 괴조가 이곳에서 사력을 다해 싸우고, 결국 괴조가 추월당하는 모습을 보았을 때…… 아무것도 할 수 없다는 무력감에 휩싸였지.`,
      );
      await era.printAndWait(
        `단도직입적으로 말해, ${montjeu.sex}는 일본의 수많은 트레이너들에게 일종의 트라우마였다.`,
      );
      await era.printAndWait(`넘을 수 없는 거대한 벽이자, 절대적인 전설.`);
      await era.printAndWait(`${montjeu.name}는 아무것도 묻지 않았다.`);
      await montjeu.say_and_wait(`하지만———— 너에게는 ${treve.name}가 있잖아.`);
      await era.printAndWait(
        `${montjeu.name}는 잠시 시선을 밤의 센강으로 돌렸다.`,
      );
      await era.printAndWait(
        `검게 출렁이는 수면 위에는 별 하나 없었고, 보이지 않는 바람이 일으키는 잔잔한 물결 소리만이 고요히 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}는 강인한 ${treve.uma_sex_title}다. ${treve.sex}는 혼자서도 승리할 수 있을 것이다.`,
      );
      await montjeu.say_and_wait(
        `……${treve.sex}가 스스로를 사람들의 기대를 짊어질 수 있는 그릇이라 말했던 걸 기억하나?`,
      );
      era.printButton(`「응.」`, 1);
      await era.input();
      await era.printAndWait(`무한한 강함, 인간을 초월한 재능.`);
      await era.printAndWait(`그것이 있었기에 지금의 ${treve.name}는 강한 것이다.`);
      await montjeu.say_and_wait(
        `${treve.sex}는 압박감을 견디는 힘이 대단하지. 앞으로도 무한한 기대를 짊어지는 것을 ${treve.sex}는 주저하지 않을 거야.`,
      );
      await montjeu.say_and_wait(
        `다만, 만약 그 타고난 성질이 ${treve.sex}의 가치관을 형성한 것이라면…… 너는 어떻게 생각하지?`,
      );
      await era.printAndWait(`${montjeu.name}가 ${you.name}에게로 시선을 돌렸다.`);
      await era.printAndWait(
        `기대란 본래 아주 귀한 것. 끊임없는 노력과 뛰어난 성과를 내야만 타인에게서 얻을 수 있는 것이지, 결코 당연한 게 아니야.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}에게는 그것이 당연한 일이었다.`,
      );
      await era.printAndWait(
        `${treve.sex}가 스스로 당연하게 여기며 해온 일들, 그 끝없는 기대의 과정 속에서 그 ${treve.teen_sex_title}는 이 세상에서 무엇을 발견했을까.`,
      );
      await era.printAndWait(`가능성과 현상이 머릿속에서 하나로 연결되었다.`);
      era.printButton(`「……기대받지 못하는 것에 대한 두려움인가?」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement.');
      await era.printAndWait(
        `한때 전설이 되어 모든 이의 기대를 한 몸에 받았던 ${treve.uma_sex_title}가 말을 이었다.`,
      );
      await montjeu.say_and_wait(
        `기대에 부응할 필요가 있지. 부응하면 할수록 새로운 기대는 더욱 커져만 가. 만약 ${treve.sex}가 그런 순환 속에 갇혀 있다면, 오직 기대받는 것만이 자신의 가치라고 오해하게 될지도 몰라. 이것이 ${treve.sex}의 근간을 이루는 생각이라면, 섣불리 부정하는 것은 피해야 하지.`,
      );
      era.printButton(`「오직 ${treve.sex}에게 기대를 걸 수밖에 없겠군.」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}가 고개를 끄덕였다.`);
      await montjeu.say_and_wait(
        `그렇게 하기 위해서라도, 나는 너라는 인물에게 기대를 걸어야만 해. 아무런 가치도 없는 사람에게 ${treve.sex}를 온전히 맡길 수는 없으니까.`,
      );
      await era.printAndWait(`${you.name}은(는) 잘 알고 있었다.`);
      await era.printAndWait(`하지만, 도대체 어떻게 해야 한단 말인가?`);
      await era.printAndWait(
        `${montjeu.name}가 자리에서 일어나 긴 머리를 휘날리며 ${you.name}을(를) 내려다보았다.`,
      );
      await era.printAndWait(
        `죄인을 심판하는 신과 같았던 눈빛과는 달리, 그 안에는 옅은 동정심이 섞여 있었다.`,
      );
      await era.printAndWait(
        `그것은 앞으로도 끊임없이 『고통』에 시달려야 할 자를 향한 연민이었을까.`,
      );
      await montjeu.say_and_wait('내 역할은 여기까지야.');
      era.printButton(`「……미안해.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}에게 좋은 밤이 되기를 바란다는 짤막한 인사를 남기고, ${montjeu.name}는 떠나갔다.`,
      );
      await era.printAndWait(
        `하늘을 올려다보았다. 보름달이 고요히 떠서 ${you.name}을(를) 내려다보고 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_95_33
  we_95_33: (() => {
    const title = '단 하나뿐인, 유일한';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, montjeu, you, callname) => {
      await era.printAndWait(
        `그날 이후로 ${treve.name}가 ${you.name}의 곁을 찾지 않는 날이 점점 늘어났다.`,
      );
      await era.printAndWait(`연락도 서서히 끊겨, 최근에는 편지가 왔다는 알림조차 받지 못했다.`);
      await era.printAndWait(`이런 상황에서 ${you.name}은(는)……`);
      era.printButton(`그렇다고 강하게 책망할 자격이 있는 건 아니다.`, 1);
      era.printButton(`가만히 내버려 둘 수는 없다.`, 2);
      const ret = await era.input();
      if (ret === 2) {
        await era.printAndWait(
          `왠지 모르게 ${you.name}은(는) ${treve.name}와 처음 만났을 때의 정경이 떠올랐다.`,
        );
        await era.printAndWait(`이제 움직여야 할 때다.`);
        await era.printAndWait(
          `……해질녘, 유람선이 ${you.name}의 바로 아래 센강을 천천히 지나가고, 건너편으로는 튈르리 정원이 보였다.`,
        );
        await era.printAndWait(`초가을의 바람이 코트 자락을 스치고 지나갔다.`);
        await era.printAndWait(
          `그 자락을 손으로 만지며, ${you.name}은(는) 다시금 떠올려야 할 과거를 되짚어 보았다.`,
        );
        await era.printAndWait(`트레이너가 된 이유.`);
        await era.printAndWait(
          `승리든 패배든 결국 나중에 따라오는 것일 뿐, 트레센의 문을 두드렸을 때 머릿속에 가득했던 것은 분명 훨씬 더 소박한 소망이었으리라.`,
        );
        await era.printAndWait(`그것은 바로……`);
        await treve.say_and_wait(`……${callname}?`);
        await era.printAndWait(`귀에 익은 목소리였다.`);
        await era.printAndWait(
          `뒤를 돌아보니, 처음 만났을 때처럼 코트를 입은 ${treve.name}가 서 있었다.`,
        );
        await treve.say_and_wait(`왜 여기에 있나요?`);
        era.printButton(`「그건——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.sex}는 곧바로 ${you.name}에게서 시선을 돌려 버렸다.`,
        );
        await era.printAndWait(`산처럼 요지부동인 거절의 벽.`);
        await era.printAndWait(
          `${treve.sex}와 제대로 마주하지 못하고 ${treve.sex}를 혼자 남겨두었던 것, 그것이야말로 ${you.name}이(가) 직시해야 할 과거였다.`,
        );
        await era.printAndWait(
          `${you.name}에게는 이제 와서 후회할 틈조차 없었다.`,
        );
        await treve.say_and_wait(`……죄송해요.`);
        await era.printAndWait(
          `곁을 스쳐 지나가며 뛰쳐나가려는 ${treve.sex}를 향해, ${you.name}이(가) 소리쳐 불러 세웠다.`,
        );
        era.printButton(`「${treve.name}.」`, 1);
        await era.input();
        await era.printAndWait(`${you.name}의 앞에서 ${treve.name}가 발걸음을 멈추었다.`);
        await era.printAndWait(
          `하지만 ${treve.sex}는 고개를 돌리지 않은 채, 여전히 ${you.name}에게 등을 돌리고 있었다.`,
        );
        await era.printAndWait(
          `정적 속의 소란함 가운데, ${you.name}은(는) 천천히 입을 열었다.`,
        );
        await era.printAndWait(`통증이 여전히 온몸을 맴돌았다.`);
        era.printButton(`「네가 나를 선택했을 때 했던 말, 기억해?」`, 1);
        await era.input();
        await treve.say_and_wait(`……수많은 말을 했던 것 같은데요.`);
        await you.say_and_wait(
          `너 이랬잖아. 『개선문상을 연패할 ${treve.uma_sex_title}를 담당하게 된다면, 사회인으로서 트레이너님의 평가도 엄청 올라가지 않겠어요?』라고.`,
        );
        await treve.say_and_wait(
          `그건…… 너무 부끄러우니까, 가급적이면 없었던 일로 해 주셨으면 좋겠어요, ${you.actual_name}.`,
        );
        await era.printAndWait(`${treve.sex}는 고개를 조금 숙였다.`);
        era.printButton(`「난 줄곧 몰랐어.」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 강했다. 지금까지의 ${you.name}에게 있어서, ${treve.sex}는 지나치게 과분할 정도로 훌륭한 담당이었다.`,
        );
        await era.printAndWait(
          `마음 한구석에서 생겨난 그 불균형이 결국 마음의 거리를 벌려 놓았던 것이다.`,
        );
        await era.printAndWait(
          `${treve.sex}가 아무리 훌륭한 성적을 거두어도, ${treve.sex}를 위해 함께 기뻐해 주지 못했다.`,
        );
        era.printButton(
          `「넌 언제나 나를 유일한 트레이너로 바라봐 주었는데 말이야.」`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `달리는 기술은 ${montjeu.name}가 가르쳐 준 것일지도 모른다.`,
        );
        await era.printAndWait(
          `그렇다 하더라도, 지금 이 순간 ${treve.sex}의 곁에 서 있는 사람은 바로 ${you.name}(이)었다.`,
        );
        await era.printAndWait(
          `${treve.sex}의 각질을 확인하고 ${treve.sex}의 특성을 이해하며, ${treve.sex}의 레이스를 계속 지켜봐 온 이는 바로 ${you.name}이었다.`,
        );
        await era.printAndWait(`이 자리에 서 있다는 사실 자체가 의미를 지니는 법이다.`);
        await era.printAndWait(
          `이 세상에서 유일한 ${treve.name}의 트레이너로서, ${you.name}에게는 ${treve.sex}에게 맡겨야 할 무언가가 있었다.`,
        );
        await era.printAndWait(`이 세계에 발을 들여놓은 그날부터.`);
        await era.printAndWait(
          `세계 최고봉이라 불리는 개선문상이라는 레이스가 탄생한 그날부터.`,
        );
        await era.printAndWait(
          `『우리들』에게는 없는 가능성을 품고 태어난 『${treve.couple_title}』와 마주한 그날부터.`,
        );
        await era.printAndWait(`인간으로서, ${you.name}은(는) 진심으로 원하고 있었다.`);
        era.printButton(
          `「${treve.name}, 나의 영혼을 불태워 줘.」（애정도 +5）`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `사람들은 살아가면서 언젠가 자신의 모든 것을 바꾸어 놓을 존재와 조우하게 된다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 분명 그런 염원을 이루기 위해 모든 우연이 이곳에서 하나로 연결된 것이라 생각했다.`,
        );
        await era.printAndWait(
          `이제야 확실히 깨달았다. 자신은 ${treve.sex}의 전속 트레이너라는 것을.`,
        );
        await era.printAndWait(`모든 기대를 ${treve.sex}에게 건다.`);
        await era.printAndWait(`${treve.name}의 어깨가 자그맣게 떨렸다.`);
        await era.printAndWait(
          `뒤를 돌아본 ${treve.sex}는 옅은 미소를 짓고 있었지만, 그 눈가에는 반짝이는 무언가가 맺혀 있었다.`,
        );
        await era.printAndWait(
          `${treve.sex}는 기쁜 듯하면서도 곤란한 표정으로 조심스레 손을 가슴에 얹었다.`,
        );
        await era.printAndWait(
          `센강에서 불어온 바람이 ${treve.sex}의 붉은 리본을 하늘하늘 휘날렸다.`,
        );
        await treve.say_and_wait(`저에게 기대를 걸어 주시는 건가요?`);
        await era.printAndWait(
          `그 짧은 마디 속에, ${treve.sex}가 가슴 깊이 묻어두었던 불안이 파르르 떨리며 배어 나왔다.`,
        );
        await era.printAndWait(
          `그동안 ${treve.sex}에게 모든 것을 걸지 못했던 자신을 반성하며, 그 진심을 확실히 받아들이겠다는 듯 강하게 고개를 끄덕였다.`,
        );
        await era.printAndWait(
          `${treve.name}는 ${you.name}의 몸짓을 보며 눈을 가늘게 떴다.`,
        );
        await treve.say_and_wait("D'accord!");
        await era.printAndWait(
          `마지막으로 흐른 한 방울의 눈물이 노을빛을 받아 아름답게 반짝였다.`,
        );
        await era.printAndWait(
          `지금 이 순간 두 사람 사이에 마침내 단 하나의 소망이 싹텄다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_42
  we_95_42: (() => {
    const title = '永遠に、あなたのもの';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `休日の朝、突然内線が鳴り、${you.name} は玄関へ向かう。`,
      );
      await treve.say_and_wait(`Salut！トレーナー、来たわ！`);
      era.print(`${you.name} は決める。`);
      era.printButton(`扉を閉める`, 1);
      era.printButton(`……見間違いか？（好感-10、恋慕+1）`, 2);
      ret.push(await era.input());
      await treve.say_and_wait(`ちょっと、私よ！`);
      era.printButton(`詐欺か？`, 1);
      era.printButton(`「帰ってくれ、金はない！」（好感-10、恋慕+1）`, 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name} は扉を閉めようとするが、残念ながら人間の腕力では${treve.uma_sex_title}に勝てない。`,
      );
      await era.printAndWait(`扉はこじ開けられる。`);
      await era.printAndWait(
        `${treve.child_sex_title}はうっかり玄関で尻餅をつく。`,
      );
      await era.printAndWait(
        `フランスの姫、天才の${treve.teen_sex_title}なのに、${
          you.name
        } の前で髪を直す様子は吹き出しそうになる。`,
      );
      await era.printAndWait(
        `服装は相変わらず短パンにTシャツだが、身長は出会ったころよりかなり伸びている。`,
      );
      await era.printAndWait(
        `欧米人特有の肌は透き通るように見え、顔にはまだ少し幼さが残る。`,
      );
      await era.printAndWait(
        `あなたたちは凱旋門賞で勝った。それからテレビや雑誌に頻繁に出て、ブランドと組み、一躍時の人になった。`,
      );
      await treve.say_and_wait(`どこにいるかは、私が決めるわ。トレーナー。`);
      await era.printAndWait(
        `視線がぶつかる。主張については、${treve.sex}にも一理ある。${treve.name} は誇らしげな顔をする。`,
      );
      await era.printAndWait(
        `${treve.name} は世界最強の${treve.uma_sex_title}だ。${
          you.name
        } はあのときの情景を忘れない。`,
      );
      await era.printAndWait(`青い調子の勝負服でゴールを切った瞬間。`);
      await era.printAndWait(
        `中学生らしい率直さと正直さ、歳相応の負けず嫌い、活力に満ちた${treve.uma_sex_title}の感触。`,
      );
      await era.printAndWait(
        `あのときの子は大きくなった。背が伸び、徐々に細いモデル体型になっている。`,
      );
      await era.printAndWait(`髪は先まで整い、人形のように揃っている。`);
      await era.printAndWait(`正真正銘の美人。`);
      await treve.say_and_wait(`${callname}。`);
      await treve.say_and_wait(`帰りたくない。`);
      await treve.say_and_wait(`でも、あなたが嫌なら、すぐに行く。`);
      await era.printAndWait(
        `${treve.sex}の目に映るのは ${you.name} のひどい顔だ。もともと起きてすぐだから。`,
      );
      era.print(`${you.name} の返事は……`);
      era.printButton(`「……やることをやってくれ。」`, 1);
      era.printButton(`「外を歩こう。」（好感+15）`, 2, {
        disabled: era.get('love:205') < 50,
      });
      ret.push(await era.input());
      if (ret[2] === 1) {
        await treve.say_and_wait(`……分かった。`);
        await era.printAndWait(
          `それが標準の答えかもしれない。だが最善ではないかもしれない。`,
        );
        await era.printAndWait(
          `${treve.name} は単刀直入に応え、来た道を戻る。`,
        );
        await era.printAndWait(
          `${you.name} の言ったとおり帰り、${treve.sex}の背が遠ざかる。`,
        );
        await era.printAndWait(
          `それが ${you.name} の望んだ姿なのに、なぜか見ていられない。`,
        );
        await era.printAndWait(`なぜか。いや、理由は明らかだ。`);
        await era.printAndWait(`——身心を貫く虚脱が、ゆっくり内側を灼く。`);
        await era.printAndWait(
          `手を伸ばさなくていいのか。どこからか、そんな声がする。`,
        );
        await era.printAndWait(
          `伸ばしたいのに、${you.name} 自身が躊躇する。結局 ${you.name} は何もしなかった。`,
        );
        await era.printAndWait(`${you.name} は気を逸らすように家へ戻る。`);
      } else {
        era.drawLine();
        await era.printAndWait(
          `${treve.name} は相変わらず短パンと黒いTシャツ、サングラスをかけている。`,
        );
        await era.printAndWait(
          `ファンに見つけられたくないのか、特徴的な栗毛を整えすぎて、かえって周囲の目を引く。`,
        );
        await era.printAndWait(
          `${treve.uma_sex_title}の美貌の大半は毛色で決まる、と言われている。`,
        );
        await era.printAndWait(
          `もちろん容貌も見るが、総じて毛の比重のほうが重い。`,
        );
        await era.printAndWait(
          `${treve.name} の髪と尻尾は、このあたりの${treve.uma_sex_title}とまったく違う。`,
        );
        await era.printAndWait(`変装に、意味がない……`);
        await era.printAndWait(`${treve.name} は車窓から外の景色を眺める。`);
        await era.printAndWait(
          `揺られながらしばらく乗り、乗り換えで降り、人混みではぐれないよう ${you.name} は ${treve.name} の手を引いて案内する。`,
        );
        await era.printAndWait(
          `ふと振り返ると、人波に紛れた${treve.sex}の顔に、泥の中で咲く花のような美しい笑みがある。`,
        );
        await era.printAndWait(`休みなので通行人も多い。家族連れも多い。`);
        await era.printAndWait(
          `母親に手を引かれた子がきょろきょろ周囲を見ている。${treve.name} はその子から少し目が離せない。`,
        );
        await era.printAndWait(
          `${treve.sex}は潤んだ目で、懇願するように真剣に言う。`,
        );
        await treve.say_and_wait(`もう少し、もう少しだけでいい。`);
        await era.printAndWait(
          `結局、行く先は競馬場だけで、大井のレースを見に来た。`,
        );
        await treve.say_and_wait(`やっぱりレースね！`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} は興味深そうにレースを見ている。`,
        );
        await era.printAndWait(`面白い。いま行われているのはG3だ。`);
        era.printButton(`「少し意外だ。」`, 1);
        await era.input();
        await treve.say_and_wait(`何が？`);
        era.printButton(
          `「凱旋門の${treve.uma_sex_title}がG3に興味を持つとは。」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`……そうかもしれないわね。`);
        await treve.say_and_wait(
          `あなたもトレーナーなら分かるはず。${treve.couple_title}から見れば、これも凱旋門と同じよ。`,
        );
        era.printButton(`「言いすぎじゃないか？」`, 1);
        await era.input();
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name} の言葉は、いつの間にか重みを増している。`,
        );
        await era.printAndWait(
          `数年前の ${you.name} には、${treve.sex}を語る資格がなかった。`,
        );
        await treve.say_and_wait(
          `${treve.couple_title}にとって大舞台。そのために調整し、ここに来る。自分の魂を賭ける。だから——`,
        );
        await you.say_and_wait('ゴールだ。', true);
        era.printButton(`「……そうか？」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name} にとって、これは何の違いもないG3だった。`,
        );
        await era.printAndWait(
          `普通の準備、普通の努力、少しだけ光るところ。そんなレース。`,
        );
        await era.printAndWait(
          `${you.name} がトレーナーの立場で多くのレースを見てきたせいで、大事なものを見落としていたのかもしれない。`,
        );
        await treve.say_and_wait(`……はは。`);
        await era.printAndWait(`乾いた笑い。`);
        await treve.say_and_wait(`……`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `競馬場は閑散としている。レースは終わった。だが ${you.name} はまったく立てず、鉛のような重い膝を曲げ、客席に座っている。`,
        );
        await era.printAndWait(`風が冷たい。`);
        era.drawLine();
        await era.printAndWait(
          `深夜、${you.name} と ${treve.name} は東京の通りを歩く。`,
        );
        await treve.say_and_wait(`……ジャパンカップに出たい。`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name} がこれから大事な話をしようとしているのは、${you.name} にも分かる。`,
        );
        await treve.say_and_wait(`あなたを忘れられない。トレーナー。`);
        await treve.say_and_wait(
          `国も人種も、分からない。でもトレーナーなら、楽しいと思う。`,
        );
        await era.printAndWait(`これは ${you.name} の罪状だ。`);
        await era.printAndWait(`胸がかすかに痛み、${you.name} は平気を装う。`);
        await treve.say_and_wait(`愛してる。`);
        await treve.say_and_wait(`ずっと愛してる。`);
        await era.printAndWait(`言葉は滑らかだ。`);
        await era.printAndWait(
          `何度も練習したに違いない。${you.name} のために、わざわざ。`,
        );
        await era.printAndWait(`頭が真っ白になる。動悸。呼吸が粗くなったか。`);
        await era.printAndWait(
          `${treve.sex}が胸の内を見せるたび、${you.name} の心も晒される。`,
        );
        await era.printAndWait(
          `糸を解くように、${treve.name} の言葉はヴェールを一枚ずつ剥ぎ、${you.name} の心も裸にする。`,
        );
        await era.printAndWait(`${you.name} はどうしようもない遺憾を感じる。`);
        await era.printAndWait(`${treve.name} は何度も言葉を重ねる。`);
        await treve.say_and_wait(
          `……ねえ、${
            you.actual_name
          }。私たちがトレーナーと${treve.uma_sex_title}じゃなかったら、出会えたかしら。`,
        );
        era.printButton(`「……出会えない。」`, 1);
        await era.input();
        await treve.say_and_wait(`そうね。`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `立っているこの場所から空を仰ぐと、一等星が数個光っているだけだ。`,
        );
        await era.printAndWait(`都心から見る、安い星空。`);
        await era.printAndWait(
          `この低い星空の下に生まれ、おそらくここで死ぬ ${you.name} と、満点の星空のような未来を抱えた${treve.sex}。`,
        );
        await era.printAndWait(`不均衡なのは、明らかだ。`);
        await era.printAndWait(
          `${you.name} は、今にも泣きそうな ${treve.name} に告げる。`,
        );
        await era.printAndWait(`夜風が吹き、日没は近い。`);
        await era.printAndWait(
          `${treve.name} の目は、出会ったときとほとんど変わっていない。`,
        );
        await era.printAndWait(
          `これまで何度も回想した記憶の中の${treve.sex}と同じだ。`,
        );
        await era.printAndWait(
          `だが変わったこともある。${treve.sex}はレース以外への興味を芽生えさせた。`,
        );
        await era.printAndWait(`時間は、すべてを変える。`);
        await era.printAndWait(
          `${you.name} は${treve.sex}と違い、${treve.sex}の足を引っ張るだけだ。`,
        );
        await era.printAndWait(
          `${you.name} は${treve.uma_sex_title}の足を引っ張りたくない。`,
        );
        await era.printAndWait(`だから——`);
        era.printButton(`「別れよう。」`, 1);
        await era.input();
        await treve.say_and_wait(`ん……！`);
        await you.say_and_wait(
          `もう私の前に現れないでくれ。仕事以外なら、日本にも来るな。消えてくれ。`,
        );
        await treve.say_and_wait(`なぜ、なぜそんなことを！`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `記憶の中のトレーナーは優しかった。ずっとそう思って——`,
        );
        await you.say_and_wait(`それは間違いだ。`);
        await treve.say_and_wait(`ん……！`);
        await you.say_and_wait(
          `……もうすぐ夜だ。寝れば朝になる。そうすれば明日だ。さよなら——`,
        );
        await treve.say_and_wait(`待って！`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `せめて、せめて気持ち…せめてトレーナーの気持ちは——`,
        );
        era.printButton(`「知らない。」`, 1);
        await era.input();
        await treve.say_and_wait(`あっ……！`);
        await era.printAndWait(
          `${you.name} は、最低の人生に似合う言葉を言った。`,
        );
        await treve.say_and_wait(`嘘つき！`);
        await you.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name} は、${treve.name} が後ろへ去る足音を聞く。`,
        );
        await era.printAndWait(`${you.name} はふらふらと東京競馬場へ来る。`);
        await era.printAndWait(
          `競馬場は冷たい。周囲の喧騒が蘇る気がする。走る車の音と、葉の揺れる音。`,
        );
        await era.printAndWait(`十一月だ。ジャパンカップが近い。`);
        await era.printAndWait(
          `${you.name} はしばらくそこに立ち、秋の競馬場に一人で立つ。`,
        );
        await era.printAndWait(`${you.name} の隣に、誰もいない。`);
        await era.printAndWait(`それでいい。だから——`);
        era.printButton(`「忘れてくれ……」`, 1);
        await era.input();
        await era.printAndWait(`——何分過ぎただろう。`);
        await era.printAndWait(`空はすでに暗い。夜が東京競馬場へ降りる。`);
        await era.printAndWait(`放送では、まもなく閉門の時間らしい。`);
        await era.printAndWait(`胸に穴が開いたようだ。`);
        await era.printAndWait(
          `${you.name} が去ろうとするとき……出入口に ${treve.name} が立っている。`,
        );
        era.printButton(`「なぜここに……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} は凄い脚力で ${you.name} へ突進する。${treve.sex}の頭が槍のように ${you.name} の腹へ刺さり、肺が潰れるようだ。`,
        );
        await era.printAndWait(`痛い。かなり痛い。`);
        await era.printAndWait(`骨まで届く痛みが神経を刺激する。`);
        await era.printAndWait(
          `${treve.name} は ${you.name} の腹に抱きつき、${treve.sex}は——`,
        );
        await era.printAndWait(`泣いた。`);
        await era.printAndWait(
          `サファイアのような美しい目が歪み、裂けそうに眉を寄せる。`,
        );
        await treve.say_and_wait(
          `トレーナーのばか！Stupide idiot.Pourquoi dis-tu des choses aussi horribles！（大ばか！どうしてそんなひどいことを！）`,
        );
        era.printButton(`「待って！何を言ってるか分からない！——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} はそのまま ${you.name} の腕の中で泣く。`,
        );
        await era.printAndWait(
          `勝手に飛びかかって傷ついたのは ${you.name} なのに、${treve.sex}が泣いている。`,
        );
        await era.printAndWait(
          `当然だ。${you.name} が${treve.sex}の心を傷つけた。`,
        );
        await era.printAndWait(
          `場内を片付けようとする職員が来る。驚いてこちらを一目見る。`,
        );
        await era.printAndWait(
          `きっと狂った娘と悪い男、カップルの喧嘩だと思ったのだろう。`,
        );
        await era.printAndWait(`その人はすぐ視線を逸らし、仕事へ戻る。`);
        await era.printAndWait(
          `イルミネーションが競馬場を飾り、そんな場所であなたたちはしゃがむ。`,
        );
        await treve.say_and_wait(
          `私がどんな気持ちでここに立ってるか分かってるの！迎えに来るなら早く来て！`,
        );
        era.printButton(`「え！？待ち伏せしたのは君のほう——」`, 1);
        await era.input();
        await treve.say_and_wait(
          `うるさい、うるさい！言い訳は聞きたくない、ばか！`,
        );
        era.printButton(`「えええ？」`, 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は本当に',
          treve.uma_sex_title,
          '特有の怪力で抱き潰されそうになり、',
          treve.get_colored_name(),
          ' の背を軽く叩く。',
        ]);
        await era.printAndWait(
          `『abandonne』（諦めろ）と言ったのに、${treve.name} は少しも離れようとしない。痛哭する${treve.sex}は、かえって力を強める。`,
        );
        await era.printAndWait(
          `自作自受なのかもしれない…………だが肋骨が本当に折れそうだ。`,
        );
        await treve.say_and_wait(`どうなの？`);
        era.printButton(`「？」`, 1);
        await era.input();
        await treve.say_and_wait(`私を愛してるの！？愛してないの！？`);
        era.printButton(`「そういう問題じゃない——」`, 1);
        await era.input();
        await treve.say_and_wait(`そういう問題よ！`);
        era.printButton(`「愛していなければ、こんなに困らない。」`, 1);
        era.printButton(`「好きだから、困ってるんだ！」`, 2);
        await era.input();
        await era.printAndWait(`${treve.name} は水を得た魚のようだ。`);
        await treve.say_and_wait(
          `じゃあ早く結婚式を！婚約して、指輪も買って……『師匠』もきっと祝福してくれる！`,
        );
        await treve.say_and_wait(
          `フランスなら教会でしょう？日本でもいい。真っ白な服で寺の前で愛を誓うわ！`,
        );
        era.printButton(`「寺じゃない、神社だ。」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name} は独り盛り上がる ${treve.name} を止めるため、${treve.sex}の肩を掴む。`,
        );
        await treve.say_and_wait(`大胆ね……`);
        await treve.say_and_wait(`外でなんて……でもあなたなら——`);
        era.printButton(`「変なことを言うな！結婚の話などしていない！」`, 1);
        await era.input();
        await treve.say_and_wait(`つまり先に恋人になるってことね。感動した！`);
        await treve.say_and_wait(
          `주변 사람들도 분명 이해하고 받아들여 줄 거야! 그렇지 않으면 아이가 정말 고통받을 거야!`,
        );
        era.printButton(`「私はヨーロッパ人じゃない。」`, 1);
        await era.input();
        await treve.say_and_wait(`人種がそんなに大事なの！？`);
        era.printButton(`「大事だろう！？」`, 1);
        await era.input();
        await treve.say_and_wait(
          `私はあなたの人種や容貌を見て恋したんじゃない。心に恋したの！`,
        );
        await treve.say_and_wait(
          `アジア人？だから何？騒ぐ人には『うるさい』と大声で言うわ！誰も私たちを邪魔できない！`,
        );
        await treve.say_and_wait(`勝手に私の価値を決めないで！`);
        await treve.say_and_wait(
          `私の価値は私が決める。将来も！自惚れてくれない？あなたと結婚しても、私は何も変わらない。鬱陶しいことを言う人がいたら、頭を捻じ切る！`,
        );
        era.printButton(`「それは少し……」`, 1);
        era.printButton(`「そこまでは……」`, 2);
        await era.input();
        await era.printAndWait(
          `そうして、泣き腫らした顔のまま、それでも ${treve.name} は気高く立つ。`,
        );
        await era.printAndWait(
          `化粧を落としても、${treve.sex}は美しい。夜を聖く照らす月のようだ。`,
        );
        await treve.say_and_wait(
          `私は天才の${treve.uma_sex_title}よ！大抵のことは fermez-la で済む！`,
        );
        era.printButton(`「君を煩わせたくない。」（好感+10、恋慕+1）`, 1);
        era.printButton(`「分かってくれ……」`, 2);
        ret.push(await era.input());
        await treve.say_and_wait(
          `分からない、まったく分からない！好きなら、私を喜ばせて！いっしょにいるって言ったのよ！私を幸せにできるのはあなただけだって！`,
        );
        era.printButton(
          `「『幸せにできるのはあなただけ』……それが求婚だろう！」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`さっきのは違う！いまのが求婚よ！`);
        era.printButton(`「わけが分からない！」`, 1);
        await era.input();
        await treve.say_and_wait(`わけが分からないくらい、好きなの！`);
        await era.printAndWait(
          `互いの叫びが東京の夜の一角に響く。どちらも息が上がっているが、目は逸らさない。`,
        );
        await treve.say_and_wait(
          `心のどこかで、ずっとあなたを追ってた！考えないようにしても、できなかった！トレーナーと話した日々、あの記憶が録画みたいにループするの！`,
        );
        era.print(`${you.name} も……`);
        era.printButton(`「ずっと君を想っていた。」`, 1);
        era.printButton(`「ずっと忘れられなかった……」`, 2);
        await era.input();
        await treve.say_and_wait(`なら！`);
        await era.printAndWait(
          `${treve.name} は膝から ${you.name} へ寄り、${you.name} の胸倉を掴む。`,
        );
        await era.printAndWait(
          `美女に驚かされると怖いというのは、本当らしい。`,
        );
        await era.printAndWait(
          `${treve.sex}のフランス系の端正な貌が至近まで迫る。${treve.name} は ${you.name} に口を開く。${treve.sex}の怒号が大井競馬場の前に響く。`,
        );
        await treve.say_and_wait(`あなた、ばか。`);
        era.printButton(`「ばかじゃない」`, 1);
        await era.input();
        await treve.say_and_wait(
          `いいえ、ばか！弱くてもいい……情けなければ手を携えて支えればいい。あなたが責任を捨てないなら、私はなおさら捨てられない。`,
        );
        await treve.say_and_wait(
          `トレーナーと${treve.uma_sex_title}の関係は対等よ。私たちは全力で走り、トレーナーは導く。欠けてはならない夫婦みたいなもの。`,
        );
        await treve.say_and_wait(
          `だから……くっ、しっ、私たちは引き合うのよ、違う？`,
        );
        await era.printAndWait(
          `${you.name} は自分より十歳若い${treve.child_sex_title}を泣かせてしまった。`,
        );
        await era.printAndWait(`夜は少し冷たい。昼が暑かったので、薄着だ。`);
        await era.printAndWait(
          `それでも二人寄り添い、虫のように体温で温め合えば、寒くはない。`,
        );
        await era.printAndWait(
          `${treve.name} は依然として心配そうな顔で、${you.name} は${treve.sex}の頭を撫でる。`,
        );
        era.printButton(`「少し寒いか？」`, 1);
        await era.input();
        await treve.say_and_wait(`……うん。`);
        era.printButton(
          `「先に君の泊まってるホテルへ行こう。このままじゃ風邪を引く。」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`ええ。`);
        await era.printAndWait(
          `${treve.sex}は ${you.name} の言うとおり、いっしょに歩く。`,
        );
        await era.printAndWait(
          `イルミネーションの光が、あなたたちの背を照らす。`,
        );
        era.drawLine();
        era.printButton(`「${treve.name}、これはどういう……！？」`, 1);
        await era.input();
        await treve.say_and_wait(
          `${treve.child_sex_title}を部屋に入れたら、することは一つだけだと思わない？`,
        );
        await era.printAndWait(
          `肌をかろうじて隠す布が解け、${treve.name} の海のような青い目が妙な光を放つ。`,
        );
        await treve.say_and_wait(
          `Bonne soirée（良い夜を），ma cheri（愛しい人）。`,
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_42_end
  async we_95_42_end(treve, you) {
    await era.printAndWait(
      `部屋で落ち着くつもりだったのに、待っているとバスタオル姿の ${treve.name} が現れる。`,
    );
    await era.printAndWait(`未成年の淫行が始まる。`);
    await era.printAndWait(
      `要するに、法という後ろ盾を完全に失った ${you.name} が世界最強の${treve.sex}を止められるはずもなく、そのまま完全に一線を越えた。`,
    );
    await era.printAndWait(`${you.name} と担当は、夜を楽しんだ。`);
    await treve.say_and_wait(`おはよう、愛しい人`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `隣には裸の ${treve.name} がいる。${you.name} はこの状況に安心する。`,
    );
    era.printButton(`「……おはよう、私の姫。」`, 1);
    await era.input();
    await treve.say_and_wait(`あら、認めたの？`);
    await treve.say_and_wait(`……そう。最初からこうすればよかったのね。`);
    era.printButton(`「怖いことを言わないでくれ。」`, 1);
    await era.input();
    await era.printAndWait(
      `窓から射す朝日を浴びた ${treve.name} は、絵の聖母のように美しい。`,
    );
    await era.printAndWait(
      `純白のベールに包まれ、うつ伏せで ${you.name} を見る${treve.sex}は、突出した部分だけを隠し、背を無防備に晒している。`,
    );
    await era.printAndWait(
      `${you.name} は衝動的に、芸術品のような ${treve.name} の頭を撫でる。${treve.sex}の流麗な髪が指を抜ける。`,
    );
    await treve.say_and_wait(`……♪`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `${treve.sex}の微笑む顔を見て、${you.name} は決心する。`,
    );
    await treve.say_and_wait(
      `大好き。これまでずっと、あなたを想っていた。こうして話すのを夢見てた。`,
    );
    era.printButton(`「私もだ、${treve.name}」`, 1);
    await era.input();
    await era.printAndWait(`微笑む${treve.sex}は、やはりきれいだ。`);
    await treve.say_and_wait(`愛してる、トレーナー。`);
    era.printButton(`「ああ、愛してる。私だけの ${treve.name}。」`, 1);
    await era.input();
    await era.printAndWait(
      `${treve.sex}がかわいく ${you.name} の手を握る様子は、誰が見ても聖女だ。`,
    );
    await era.printAndWait(
      `${you.name} の眼前の愛馬は、美しい顔に彩りを増し、笑みを輝かせる。`,
    );
  },

  // [번역 완료] ws_47_24
  ws_47_24: (() => {
    const title = '푸른 하늘 위를 날아오르다';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} prix_prb ブルーインコ賞（色付き名）
     * @param {PrintedSpan} prix_dia ディアヌ賞（色付き名）
     */
    const f = async (treve, you, prix_prb, prix_dia) => {
      await era.printAndWait([
        treve.name,
        '는 새해를 보내고 봄이 조금 지난 5월, 데뷔전과 마찬가지로 1600m의 ',
        prix_prb,
        '에서 대승을 거두었다.',
      ]);
      await era.printAndWait([
        '본인의 강력한 희망에 힘입어, ',
        treve.sex,
        '는 거리가 500m가량 늘어난 ',
        prix_dia,
        '에도 출주했다.',
      ]);
      await era.printAndWait(
        `${you.name}을(를) 포함한 수많은 관객의 예상을 뒤엎고, 삼관 레이스에서 압도적인 승리를 거두었다.`,
      );
      await era.printAndWait(`${treve.name}는 착실하게 실력을 키워나갔다.`);
      await era.printAndWait(
        `그리고 그 과정에서 ${you.name}이(가) 가르칠 수 있는 것은 점차 줄어들었다.`,
      );
      await era.printAndWait(
        `하나를 들으면 열을 아는 ${treve.name}는, 때로는 가르쳐주지 않아도 자연스럽게 정답을 찾아냈다.`,
      );
      await era.printAndWait(
        '베테랑 트레이너조차 눈치채지 못할 만한 점을 스스로 개선하곤 했다.',
      );
      await era.printAndWait(
        `다른 트레이너들에게 방임주의라는 지적을 받을 때도 있었지만, ${you.name}은(는) 이것이 ${treve.sex}에게 맞는 올바른 방식이라고 생각했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_33
  ws_47_33: (() => {
    const title = '가난한 집? 타향으로';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `어느덧 여름도 막바지에 접어들고, 바닷가 합숙에서 돌아온 ${you.name}은(는) 다시 G1 출주 등록 서류를 작성하고 있었다.`,
      );
      await era.printAndWait(
        `프랑스 오크스를 제패한 지 얼마 지나지 않은 것 같은데, 정신을 차려보니 또 G1이었다.`,
      );
      await era.printAndWait(`대망의 다음 무대는 ${treve.sex}가 그토록 고대하던 개선문상.`);
      await era.printAndWait(
        `지금까지 보여준 압도적인 실력만 놓고 본다면, ${treve.name}가 그 영예를 차지한다 해도 전혀 이상할 게 없었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 출주 신청서에 서명을 마친 뒤, 트레이닝실 소파에 누워 있는 ${treve.name}에게 건넸다.`,
      );
      era.printButton(`「출주 신청서야. 서명해 줘.」`, 1);
      await era.input();
      await treve.say_and_wait(`네에.`);
      await era.printAndWait(
        `어느샌가 ${treve.sex}는 트레이닝실을 마치 자신의 개인 방인 양 드나들고 있었다.`,
      );
      await era.printAndWait(`계약한 이상 딱히 불평할 수도 없는 노릇이었다.`);
      await era.printAndWait(
        `그것보다 ${you.name}은(는) ${treve.sex}가 사생활에서의 이 칠칠치 못한 모습부터 어떻게든 해결해 주기를 바랐다.`,
      );
      await era.printAndWait(
        `${treve.name}는 소파에서 스르륵 미끄러지듯 일어나, 건네받은 볼펜을 톡톡 두드리며 ${you.name}을(를) 슬쩍 바라보았다.`,
      );
      await treve.say_and_wait(`그러고 보니, 이번 주 일요일에 시간 있으세요?`);
      era.printButton(`「낮에는 한가해.」（애정도+1）`, 1);
      era.printButton(`「추가 트레이닝이라도 하려고?」（호감도+5）`, 2);
      const ret = await era.input();
      await era.printAndWait(`${treve.name}는 서명을 하며 생각에 잠겼다.`);
      await treve.say_and_wait(
        `스승님이 만나고 싶어 하신대요. ${treve.sex}는 여름 합숙이 끝나면 들러도 된다고 하셨으니, 슬슬 한 번 다녀오려고요.`,
      );
      era.printButton(`「스승님?」`, 1);
      await era.input();
      await treve.say_and_wait(`네, 제게 달리는 법을 가르쳐 주신 분이에요.`);
      await era.printAndWait(`${treve.sex}를 달리는 우마무스메로 키워낸 인물.`);
      await era.printAndWait(
        `완성도 높은 실력을 갖춘 ${treve.name}를 또 다른 시선에서 바라본 인물을 만난다면, ${treve.sex}를 더 깊이 이해할 좋은 기회가 될 것이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 출주 신청서가 담긴 봉투를 풀로 붙이며, ${treve.sex}의 제안을 수락했다.`,
      );
      await era.printAndWait(
        `그렇다면 빈손으로 갈 수는 없으니 선물을 준비해야 했다. ${you.name}은(는) 찻잎 캔이 진열된 선반으로 시선을 돌렸다.`,
      );
      await era.printAndWait(
        `가을 수확기까지는 아직 멀었기에, 어디에도 가을의 청명함을 담은 찻잎은 없었다.`,
      );
      await era.printAndWait(`그렇다면 수확 기간이 긴 아삼 찻잎을 고르는 편이 나을 것이다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_25
  ws_95_25: (() => {
    const title = '낯선 길.';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(`개선문상 이후로 반년 이상이 흘렀다.`);
      await era.printAndWait(
        `${treve.name}의 태도는 여전히 변함없었고, ${you.name}의 지도를 솔직하게 받아들였다.`,
      );
      await era.printAndWait(
        `다방면에서 눈부신 성장을 이루었음에도, 트레이닝에 대한 열의는 전혀 식지 않았다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 사랑스러움이 더 많은 사람에게 알려졌고, 레이스를 거듭할수록 팬도 늘었다.`,
      );
      await era.printAndWait(
        `개선문상에서의 전과를 포함해, 이제 ${treve.sex}는 프랑스를 짊어진 ${treve.teen_sex_title}로서 널리 이름을 떨치고 있었다.`,
      );
      await era.printAndWait(`하지만, 그렇다고 해서 레이스의 결과까지 마음대로 흘러가지는 않았다.`);
      await era.printAndWait(
        `${treve.name}의 개인 소지품이 작년보다 부쩍 늘어난 트레이닝실은 푹푹 찌는 더위에 잠식되어 있었다.`,
      );
      await era.printAndWait(
        `지친 몸을 쉬게 해야 함에도 ${you.name}이(가) 이곳을 떠나지 못하는 이유는 오직 하나뿐이었다.`,
      );
      await era.printAndWait(`올해 들어 기록한 ${treve.name}의 성적 때문이었다.`);
      await era.printAndWait(
        `눈앞의 모니터 속에서는 봄과 초여름에 치렀던 두 차례의 G1 레이스 영상이 끝없이 반복 재생되고 있었다.`,
      );
      await era.printAndWait(`거리도 작년과 같았고, 경기장 상태가 딱히 나빴던 것도 아니다.`);
      await era.printAndWait(`그럼에도 결과는 각각 2착과 3착.`);
      await era.printAndWait(
        `${treve.name}는 계속해서 트레이닝에 매진하고 있었지만, 명확한 해결책을 찾지 못한 탓에 연패 타이틀이 걸린 다음 개선문상도 불안감이 감돌았다.`,
      );
      await era.printAndWait(
        `반복되는 영상과 ${treve.sex}의 컨디션을 번갈아 살피다 보니, 이미 몇 시간이나 흘러 있었다.`,
      );
      await era.printAndWait(
        `까마귀 울음소리에 ${you.name}은(는) 퍼뜩 정신을 차렸다. 고개를 돌려보니 창밖은 이미 노을빛 오렌지색으로 물들어 있었다.`,
      );
      await you.say_and_wait(`……큰일이네.`, true);
      await era.printAndWait(`오늘 트레이닝 일정이 잡혀 있었을 텐데.`);
      await era.printAndWait(
        `생각에 몰두하느라 ${treve.sex}를 잊고 있었다는 사실에 황급히 스마트폰을 꺼내자, 메시지 알림이 와 있었다.`,
      );
      await era.printAndWait(
        `미리보기 창으로도 약 1시간 전에 도착한 그 메시지가 ${treve.name}가 보낸 것임을 선명히 알 수 있었다.`,
      );
      await treve.say_and_wait(
        `죄송해요, 오늘 몸이 좀 안 좋아서 쉴게요.`,
      );
      await era.printAndWait(`원래대로라면 트레이닝 일정이 먼저였을 터.`);
      await era.printAndWait(
        `즉, 약속 시간이 한참 지나고 나서야 이 메시지를 보냈다는 뜻이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 머리를 감싸 쥐며 ${treve.sex}에게 답장을 보내려 했다`,
      );
      await era.printAndWait(
        `하지만 지금 어떤 변명을 늘어놓아도 무의미할 터였기에, 그저 간결하게 답하는 편이 나았다.`,
      );
      era.printButton(`「알았어.」`, 1);
      await era.input();
      await era.printAndWait(
        `최근 이렇다 할 성과를 내지 못한 ${treve.name}이기에, ${you.name} 스스로도 이제는 ${treve.sex}와 제대로 마주해야 할 때임을 뼈저리게 느끼고 있었다.`,
      );
      await era.printAndWait(
        `원인조차 파악하지 못하는 트레이너가, 과연 ${treve.sex}의 무엇을 책임질 수 있단 말인가.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자리에서 일어나고 나서야 비로소 배고픔을 느꼈다.`,
      );
      await era.printAndWait(`（……홍차면 되려나?）`);
      await era.printAndWait(`찻잎 캔 선반에서 흘러나오는 은은하고 상큼한 향기가 뇌리를 자극했다.`);
      await era.printAndWait(
        `머리가 맑아지는 듯한 기분에, ${you.name}은(는) 캔 하나를 집어 들었다.`,
      );
      await era.printAndWait(
        `그러나 안에는 내용물이 거의 없었고, 캔 바닥에 남은 찻잎 잔해와 레몬 향의 잔향만이 맴돌고 있었다.`,
      );
      await era.printAndWait(
        `그날 이후로, ${treve.name}는 줄곧 이 홍차를 좋아했다.`,
      );
      await era.printAndWait(
        `어쩌다 트레이닝실에 들를 때면 이 차를 우리는 경우가 많았다.`,
      );
      await era.printAndWait(`가을이 깊어지면 쌀쌀한 날도 늘어날 것이다.`);
      await era.printAndWait(`${you.name}은(는) 묵묵히 캔 뚜껑을 닫았다.`);
      await you.say_and_wait('혼자 가서 좀 사 와야겠네……', true);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_29
  ws_95_29: (() => {
    const title = 'Fly Away';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `${you.name}은(는) 트레이닝실에서 만나기로 약속한 ${treve.name}를 기다리고 있었다.`,
      );
      await era.printAndWait(
        `${treve.sex}가 오기 전까지 남는 시간 동안 지난 레이스의 영상들을 다시 한번 검토했다.`,
      );
      await era.printAndWait(
        `${treve.name}가 슬럼프에 빠진 이유를 하나씩 차례대로 짚어보았다. 하지만 문제는 그뿐만이 아니었다.`,
      );
      await era.printAndWait(`${you.name}은(는) 최근 레이스의 최종 직선 주로를 다시 확인했다.`);
      await era.printAndWait(
        `${treve.name}는 이전과 다름없이 선두 그룹을 뚫고 앞으로 치고 나가기 위해 호시탐탐 기회를 노리고 있었다.`,
      );
      await era.printAndWait(
        `그러나 상대의 포위망을 미처 빠져나오지 못했고, 장기인 막판 스퍼트를 제대로 발휘하지도 못한 채 레이스가 끝나버렸다.`,
      );
      await era.printAndWait(
        `애초에 ${treve.name}는 체구가 그리 크지 않은 ${treve.uma_sex_title}였다.`,
      );
      await era.printAndWait(
        `게다가 작전마저 간파당한다면, 서로 연대하여 ${treve.sex}가 앞으로 나가지 못하도록 가로막는 무리가 생겨나도 이상할 게 없었다.`,
      );
      await era.printAndWait(
        `무엇보다도 ${treve.sex}의 달리기 방식은 너무나 예측하기 쉬웠다. ${treve.name}의 주법은 ${montjeu.name}를 쏙 빼닮아 있었으니까.`,
      );
      await era.printAndWait(
        `당시 트레이너들이 ${montjeu.name}를 저지하기 위해 고심해서 짜냈던 전략들이, 지금 ${treve.name}에게 그대로 통하고 있는 것이다.`,
      );
      await era.printAndWait(
        `전설의 후계자를 계속 승리로 이끌기 위해, ${you.name}은(는) 과연 무엇을 전해줄 수 있을까.`,
      );
      await era.printAndWait(
        `그렇게 고뇌하는 사이 약속 시간으로부터 벌써 한 시간 남짓이 흘렀다. 하지만 ${treve.name}는 올 기미가 보이지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
};
