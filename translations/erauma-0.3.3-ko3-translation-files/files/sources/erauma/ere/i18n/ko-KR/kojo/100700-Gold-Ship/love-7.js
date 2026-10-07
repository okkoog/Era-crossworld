// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100700-Gold-Ship/love-7"),

  // [번역 완료] 49
  49: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `인연의 시작은 ${gold_shp.name}의 그 선발 레이스였다. 그 레이스가 끝난 뒤 ${gold_shp.sex}은(는) ${callname}와(과) 계약해 공식 무대에 설 수 있는 우마무스메가 되었다.`,
      );
      era.println();
      await gold_shp.say_and_wait(
        '왜 그 녀석이 마음에 들었는지, 이제 와선 나도 모르겠어.',
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) 석양이 비치는 놀이공원의 미끄럼틀 위에서 깊은 생각에 잠겨 있었다. ${gold_shp.sex}은(는) 턱을 난간에 기대고 은빛 머리카락을 폭포처럼 늘어뜨렸다. 옆에서 뛰노는 아이들이 시야를 오가도 마음은 줄곧 이곳에 없는 누군가에게 가 있었다.`,
      );
      era.println();
      await gold_shp.print_and_wait([
        `처음부터 ${gold_shp.sex}은(는) 자신의 행동을 이해하지 못했다. 보통 우마무스메와 트레이너 사이에서는 트레이너 쪽이 선수를 모집한다. 하지만 ${callname}와(과)의 계약은 스카우트됐다기보다,`,
        {
          color: gold_color,
          content: `${gold_shp.name}이(가) 그 녀석에게 자신을 떠넘겼다고 하는 편이 더 가까웠다.`,
        },
      ]);
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}이(가) 출주하려면 트레이너와 계약해야 한다. 그건 확실하다.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${you.actual_name}은(는) 트레이너다. 그것도 확실하다.`,
      );
      era.println();
      if (era.get('flag:当前声望') < 1000) {
        await gold_shp.print_and_wait(
          `${you.actual_name}이라면 ${gold_shp.name}이(가) 자신의 에덴을 찾는 데 도움이 될지도 모른다.`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${you.actual_name}의 실력은 확실하고, ${gold_shp.name}이(가) 자신의 에덴을 찾는 데 도움이 된다.`,
        );
      }
      era.println();
      if (era.get('exp:7:性爱次数') > 0) {
        await gold_shp.print_and_wait(
          `덧붙이자면 ${you.actual_name}은(는) 침대 위에서 달아오른 몸을 달래주는 데에도 확실히 도움이 된다.`,
        );
        era.println();
      }
      await gold_shp.print_and_wait(
        '하지만——젠장, 그렇다고 이 황금의 여행에 그 녀석이 반드시 필요한 건 아니잖아!',
      );
      era.println();
      await gold_shp.print_and_wait(
        '중앙 트레센은 우수하다. 우마무스메도 트레이너도 좋은 선택지는 넘쳐난다! 로쿠 아저씨 트레이너(너무 나이가 많을지도), 나세 트레이너(너무 진지할지도), 키류인 트레이너(너무 젊을지도)도 한때는 에덴으로 가는 길의 동료 후보였다.',
      );
      era.println();
      await gold_shp.print_and_wait([
        '그런데도——그 녀석을 본',
        {
          color: gold_color,
          content: '0.0000001초 만에 두 다리에 명령을 내려버렸다.',
        },
      ]);

      era.printButton('「황금별의 계시인가……」(관계를 진전시킨다)', 1);
      era.printButton('「나 뭐 하는 거냐……」(아직 진전시키지 않는다)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `그 변명은 ${gold_shp.name} 자신조차 속이지 못했다. ${gold_shp.sex}은(는) 눈을 감는다. 하지만 마음에 새겨진 그림자는 사라지지 않는다. ${gold_shp.sex}은(는) 힘껏 고개를 저으며 그 녀석을 떠올리지 않으려 하지만, 머리는 계속 그 녀석을 생각하게 만든다.`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${gold_shp.sex}은(는) 눈을 감는다. 하지만 마음에 새겨진 그림자는 사라지지 않는다. ${gold_shp.sex}은(는) 힘껏 고개를 저으며 그 녀석을 떠올리지 않으려 하지만, 머리는 계속 그 녀석을 생각하게 만든다.`,
        );
      }
      era.println();
      await gold_shp.print_and_wait(
        `지금 절반의 ${gold_shp.name}은(는) 자신을 설득하고 있다. 세상에는 첫눈에 반한다는 게 있고, 고루시와 트레이너는 사랑의 신의 화살을 정면으로 맞은 천생연분이라고.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `나머지 절반의 ${gold_shp.name}은(는) 반대한다. 이건 단지 고루시와 트레이너 사이가 좋다는 증거일 뿐, 그 이상은 아무것도 증명하지 않는다고.`,
      );
      era.println();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `마침내 감성 쪽 ${gold_shp.name}이(가) 우세를 점했다. ${gold_shp.name}의 눈빛은 망설임에서 결의로 바뀌었고, 몸을 일으켜 트레센 쪽을 바라봤다.`,
        );
        era.println();
        await gold_shp.say_and_wait('아니야, 이건 첫눈에 반한 거야.');
      } else {
        await gold_shp.print_and_wait(
          `마침내 이성 쪽 ${gold_shp.name}이(가) 우세를 점했다. 하지만 억누를 수 없는 생각은 구름 그림자처럼 머리 위를 떠돌고 있었다. ${gold_shp.name}조차 쉽게 떨쳐낼 수 없는 이 고민은 대체 언제까지 이어질까.`,
        );
      }
      return [ret];
    };
    f.title = [{ color: gold_color, content: '감성과 이성' }];
    return f;
  })(),

  // [번역 완료] 74-1
  '74-1': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `어느 밤, ${gold_shp.name}은(는) 코와 윗입술 사이에 연필을 끼운 채 푹신한 기숙사 침대에 반쯤 누워 있었다. ${gold_shp.sex}은(는) 두 다리와 강한 허리로 몸통을 띄운 채 머리만 매트에 딱 붙이고 있다. 연필의 나무와 도료가 섞인 냄새도 ${gold_shp.sex}의 사고 속도를 방해하지 못한다. 지금 이 세상의 만물이 ${gold_shp.name} 안에서 빠르게 분석되고, 분해되고, 다시 조립되고 있다.`,
      );
      era.println();
      await era.printAndWait('상온 초전도에 승산은 있는가? 없다.', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('공룡은 거대한 닭인가? 그렇다.', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('펩시인가 콜라인가? 따뜻한 물.', {
        color: gold_color,
      });
      era.println();
      await gold_shp.print_and_wait('……');
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) ${callname}을(를) 좋아하는가? 좋아한다.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) 두 다리에 힘을 주고 허공으로 튀어 올라 머리와 양손 세 점으로 침대 위에 물구나무를 섰다! 지금 혈액이 ${gold_shp.sex}의 뇌로 작전에 필요한 에너지를 계속 보내고 있다——마음이 정해졌다면 다음에 할 일은 하나뿐이다……!`,
      );
      era.println();

      era.printButton('「작전을 세우고 공세 개시!」(관계를 진전시킨다)', 1);
      era.printButton('「신중하게, 장기전으로 간다!」(아직 진전시키지 않는다)', 2);
      return [await era.input()];
    };
    f.title = [{ color: gold_color, content: '전술 결정' }];
    return f;
  })(),

  // [번역 대상] 74-2-end
  async '74-2-end'(gold_shp, you, callname) {
    const ret = [];
    era.drawLine();
    await era.printAndWait(
      `この激しい馬跳びは、疑いようもなく痛快な体験だった。さっきまで爽やかだったトレーナー室は、いま精液と愛液の匂いが充満している。${you.name} は息を切らして ${gold_shp.name} の腕の中へ沈み、${gold_shp.sex}が絶えず放つホルモンを吸い込みながら、頭の中ではさっき何が起きたのかを考え続けていた。`,
    );
    era.println();
    await gold_shp.say_and_wait(
      `どうだ ${callname}……超絶美少女ゴルシの、汁だくおまんこ、気持ちよかったろ？`,
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name} は頬を紅潮させ、得意げに ${you.name} へ笑う。`,
    );
    era.println();

    era.printButton('「いつからそんなに下品になったんだ……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      'てめぇのせいだろ……ふふふ。アタシの前で鎖骨見せたり尻振ったり、まるで誘ってるみたいにさぁ。我慢の限界だったんだよ！',
    );
    era.println();

    era.printButton('「変態……強姦魔……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      'なんて言われようと、もう抜き差しならねえ仲だ！',
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name} は腕で ${you.name} の首を絡め、強引に胸元へ鎖した。少女の体香が、意識を蕩けさせる。`,
    );
    era.println();
    await era.printAndWait(`長い沈黙のあと、${gold_shp.sex} が口を開く。`);
    era.println();
    await gold_shp.say_and_wait('だから……責任、取るから。その……');
    await gold_shp.say_and_wait(`${callname}、アタシと……付き合え！`);
    era.println();

    era.printButton('「うん、いいよ。」（関係を進める）', 1);
    era.printButton('「それはちょっと……」（まだ進めない）', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait(
        `${you.name} が予想しなかったのは、${gold_shp.name} のほうが ${you.name} より驚いた顔をしていたことだ。`,
      );
      era.println();
      await gold_shp.say_and_wait('マジかよ？ 絶対に断られると思ってた！');
      await gold_shp.say_and_wait(
        '……だから先に、生米を炊いて飯にしちまう作戦を選んだ。',
      );
      era.println();

      era.printButton(
        'ゴルシ、焦ってるな（笑）。そんなに信用してなかったのか？',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait(
        'こんなことで焦んねえやついるか！ あと笑ってんじゃねえ！',
      );
      await gold_shp.say_and_wait('だって……成功すると思ってなかったし……');
      await gold_shp.say_and_wait(
        'アタシ、普段から面倒で、不真面目で、面倒で……手が止まらなくて、いつもてめえを巻き込むし……',
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.sex} は話しながら黙り込み、${you.name} は ${gold_shp.sex} の急な呼吸から、泣き出すまいと耐えているのが分かった。`,
      );
      era.println();
      await you.say_and_wait(
        '俺はトレーナーだ。担当のウマ娘を導き、大切にするのが使命だ。お前は俺の担当で、それは永遠に変わらない。',
      );
      await you.say_and_wait(
        '現実にも、世間にも、問題は山ほどあるだろう。でも俺の頭は、もうお前にめちゃくちゃにされてる。',
      );
      await you.say_and_wait('いまは、お前と一緒に狂い続けたい。');
      await you.say_and_wait('だから覚悟しろ——');
      era.printButton('「愛してる♡」', 1);
      era.printButton('「レ○プ魔♡」', 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name} と ${gold_shp.name} は固く抱き合った。このベッドはいま、${gold_shp.sex} の小さなすすり泣きと、できたての恋人たちを包んでいる。`,
      );
    } else {
      await era.printAndWait(
        `${gold_shp.name} は、${you.name} が想像したように駄々をこねて転がったりはしなかった。寂しげに体を起こし、胸の双丘が垂れる。${gold_shp.sex}は口を開いて何か言おうとしたが、歯の隙間から出たのは、結局——`,
      );
      era.println();
      await gold_shp.say_and_wait('うん、分かった。悪い。');
      era.println();
      await era.printAndWait(
        `${gold_shp.sex} は黙ってベッドを離れ、床に落ちた服を着直す。`,
      );
      era.println();

      era.printButton('「あの、ゴルシ？」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} に返事はなかった。その人は一礼しただけで、扉を閉めて出ていった。`,
      );
    }
    return ret;
  },

  // [번역 대상] 74-2-start
  '74-2-start': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.say_and_wait(
        'ゴールドシップ、野心満々、天下を呑む。地球上の人類とウマ娘がどれだけ警戒しようと、黄金火山が噴火した日にゃあ、最低でも120億ウマコインの被害を覚悟しとけ。',
      );
      era.println();
      await gold_shp.say_and_wait(
        'だが、英雄ゴールドシップといえども、色には弱い……',
      );
      era.println();
      await gold_shp.say_and_wait(
        'いまゴールドシップはトレーナーのデスクの端に座っている。口の中で何やら呟き、ちょうどこの場面を三人称で実況しているかのようだ。',
      );
      era.println();

      era.printButton(
        '「……自分にナレーション入れてるのか？ しかも今の文まで？」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait(
        `${callname} うぜえな、もっと乗れよ！ 役やってくれよ！ ゴールドシップは少し怒って叫ぶと、拳を上げてトレーナーを軽く叩く。ダメージダイスを振れ。`,
      );
      era.println();

      era.printButton(
        '「いや、急にTRPGモード入るな！ こっちは真面目に仕事してるんだ。」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait([
        'うぅぅ、仕事と、かわいい担当',
        gold_shp.uma_sex_title,
        'と遊ぶの、どっちが大事なのさー！',
      ]);
      era.println();
      await era.printAndWait(
        `${gold_shp.name} が ${you.name} の椅子を揺すり続け、${you.name} は仕事に集中できない。仕方なく席を立ち、${gold_shp.name} がまた何を仕出かすのか見に行く。`,
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.name} はにやりと悪く笑い、${you.name} をソファへ押し倒した。`,
      );
    };
    f.title = [{ color: gold_color, content: '英雄船、色に弱し' }];
    return f;
  })(),

  // [번역 대상] golden_ship_attack
  golden_ship_attack: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `トレーナー室のスピーカーから流れるバラエティ番組の効果音とともに、${gold_shp.name} は突然 ${you.name} をソファへ通した。`,
      );
      await era.printAndWait(
        `${gold_shp.sex}は器用にペンを取り、ホワイトボードへ書いた。`,
      );
      era.println();

      await era.printAndWait(`突撃！ ${gold_shp.name} の`, { align: 'center' });
      await era.printAndWait('超残酷二択クイズ！', { align: 'center' });
      await era.printAndWait('～生き残れるかな？～', { align: 'center' });
      era.println();

      await era.printAndWait(
        `突然すぎるが、${gold_shp.name} は突然、${you.name} に心理テストをやりたくなったらしい。`,
      );
      await era.printAndWait(
        `事の発端が突然なので、${you.name} にも突然断る権利はない！ 覚悟を決めて、突然受け入れろ！`,
      );

      era.printButton('「なんだこれ！？」', 1);
      await era.input();

      await gold_shp.say_and_wait(
        `そういうこと、問題は上に書くからな～${callname} はホワイトボードを見てくれよ～`,
      );
      await gold_shp.say_and_wait(
        '一問目は超定番！ 誰もが一度は聞かれるやつ！',
      );
      await gold_shp.say_and_wait(
        'お前なら【チョコ味の○○】と【○○味のチョコ】、どっちを選ぶ？',
      );

      era.printButton('「チョコ味の○○……」', 1);
      era.printButton('「○○味のチョコ……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '出題者のアタシでも【別のもの食べる】！ 次！',
      );
      await gold_shp.say_and_wait('二問目！ 見ろ！');
      await gold_shp.say_and_wait(
        'お前なら【馬跳びの中身を家族に誤送信】と【馬跳びの中身を担当ウマ娘に誤送信】、どっちを選ぶ？',
      );

      era.printButton('「馬跳びの中身を家族に誤送信……」', 1);
      era.printButton('「馬跳びの中身を担当ウマ娘に誤送信……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '人に知られたくなければ【己が為さざるに如かず】！ 次！',
      );
      await gold_shp.say_and_wait('三問目から、ちょっと意地悪になるぜ！');
      await gold_shp.say_and_wait(
        '彼女と飲んでるとき、彼女が三人目を呼ぼうとする！',
      );
      await gold_shp.say_and_wait(
        'お前なら【お前の元カノを呼ぶ】と【彼女の元カレを呼ぶ】、どっちを選ぶ？',
      );

      era.printButton('「お前の元カノを呼ぶ……」', 1);
      era.printButton('「彼女の元カレを呼ぶ……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait('なんか【むかつく】な！ 次！');
      await gold_shp.say_and_wait('四問目！ けっこうやるやつ多そう！');
      await gold_shp.say_and_wait('お前はウマ娘チームのリーダーだ！');
      await gold_shp.say_and_wait(
        'お前なら【いつでも隊員と馬跳びしたい】と【いつでも隊員がお前と馬跳びしたがる】、どっちを選ぶ？',
      );

      era.printButton('「いつでも隊員と馬跳びしたい……」', 1);
      era.printButton('「いつでも隊員がお前と馬跳びしたがる……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '大スケベだな～でも時には【我慢も大事】だぜ？',
      );
      await gold_shp.say_and_wait('五問目！ 命に関わる事件発生！');
      await gold_shp.say_and_wait(
        'おっと！ お前、お前の彼女、お前の親友の三人が攫われた！ 誘拐犯は悪趣味で、一人を殺せ、残った一人とお前の命を助ける、と要求してきた！',
      );
      await gold_shp.say_and_wait(
        'お前なら【生死を共にした親友を殺す】と【お前のために死んでもいい彼女を殺す】、どっちを選ぶ？',
      );

      era.printButton('「生死を共にした親友を殺す……」', 1);
      era.printButton('「お前のために死んでもいい彼女を殺す……」', 2);
      await era.input();

      await era.printAndWait(
        '……ドラムもない。妙に茶目っ気のあるBGMもない。どこからともなく流れる缶笑いもない。',
      );
      await era.printAndWait('すべてが、突然止まった。');
      await era.printAndWait(
        `${gold_shp.name} の表情は異様なほど静かで、${gold_shp.sex}の目から光が消え、まっすぐ ${you.name} の顔に釘付けになっている。`,
      );
      era.println();

      await gold_shp.say_and_wait(
        'この問題は重要です。どうか、よく考えてからお答えください。',
      );
      era.println();

      era.printButton('「生死を共にした親友を殺す……」', 1);
      era.printButton('「お前のために死んでもいい彼女を殺す……」', 2);
      await era.input();

      await gold_shp.say_and_wait(
        'この問題は重要です。どうか、よく考えてからお答えください。',
      );
      era.println();

      await era.printAndWait(`${gold_shp.sex}は、そう言った。`);
      const buffer = [
        {
          accelerator: 1,
          config: { disableWarning: true },
          content: '「生死を共にした親友を殺す……」',
          type: 'button',
        },
        {
          accelerator: 2,
          config: { disableWarning: true },
          content: '「お前のために死んでもいい彼女を殺す……」',
          type: 'button',
        },
      ];
      era.printInColRows(buffer);
      setTimeout(() => {
        if (ret.length < 5) {
          buffer.push({
            accelerator: 3,
            config: { disableWarning: true },
            content: '「どっちも選ばねえ……！」',
            type: 'button',
          });
          era.replaceInColRows(buffer);
        }
      }, 10000);
      ret.push(await era.input());
      era.println();

      await era.printAndWait(
        `${gold_shp.name} はいつもの顔に戻り、にやにやしながら音楽を流し始めた。`,
      );
      era.println();
      await gold_shp.say_and_wait(`ふふ～お疲れ ${callname}～`);
      if (ret.at(-1) === 3) {
        await gold_shp.say_and_wait(
          `ん～${callname} はいい子だな。担当ウマ娘と馬跳びしたがるのは、まあちょっとアレだけど。`,
        );
        await gold_shp.say_and_wait(
          '……それがアタシの出した問題だって？ じゃあなんで三番目を選ばねえんだよ。',
        );
        await gold_shp.say_and_wait(
          'そうだ、チョコ食うか？ 安心しろ、仕込んでねえし味も普通だぜ。',
        );
        era.println();
        await era.printAndWait([
          'トレーナー室で笑い合うこの景色は、きっとこの先もなくならない。',
        ]);
      } else {
        era.println();
        await era.printAndWait(
          `${gold_shp.sex} は風のように来て、風のように去った。${you.name} は結局、心理テストの結果を聞けなかった。`,
        );
      }
      era.println();
      if (ret[3] === 1) {
        era.print([
          gold_shp.get_colored_name(),
          ' は',
          { color: buff_colors[2], content: ' [罵倒好き] ' },
          'と',
          { color: buff_colors[2], content: ' [苦痛好き] ' },
          'になった！',
        ]);
      } else {
        era.print([
          gold_shp.get_colored_name(),
          ' は',
          { color: buff_colors[2], content: ' [ドS] ' },
          'になった！',
        ]);
      }
      if (ret[1] === 2) {
        era.print([
          gold_shp.get_colored_name(),
          ' はいま、少し',
          { color: buff_colors[2], content: ' [焦り] ' },
          '！',
        ]);
      }
      return ret;
    };
    f.title = [
      {
        color: gold_color,
        content: '突撃！ゴールドシップの超残酷二択クイズ！～生き残れるかな？～',
      },
    ];
    return f;
  })(),
};
