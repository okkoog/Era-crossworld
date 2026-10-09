// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/108500-Daiichi-Ruby/love-85"),

  // [번역 완료] 74-after
  async '74-after'(ruby, mother, you, callname) {
    era.drawLine();
    await era.printAndWait([
      '구름이 걷히고 비가 멎자, ',
      ruby.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '의 품에 깊숙이 안긴 채, 가느다란 손가락으로 ',
      you.get_colored_name(),
      '의 가슴팍을 부드럽게 문지르고 쿡쿡 찌르며 장난을 쳤다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고개를 살짝 들어, 눈동자 속에 장난스러우면서도 묘한 색기가 서린 표정을 지었다.',
    ]);
    await ruby.say_and_wait('저, 당신의 아이를 낳아드릴 수도 있어요……');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 손에 넣은 망아지를 놓아줄 생각이 없었기에, ',
      ruby.get_colored_name(),
      '의 붉게 도드라진 가슴의 젖꼭지를 부드럽게 꼬집었다.',
    ]);
    era.printButton(
      '「쓸데없는 생각 하지 마. 널 절대 다른 남자에게 시집보내지 않아.」',
      1,
    );
    await era.input();
    await you.say_and_wait('그게 그 누구가 되었든 간에……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 가슴이 크게 떨렸다. 방금 ',
      you.get_colored_name(),
      '의 말에는 분명 다른 뜻이 담겨 있었고, ',
      you.get_colored_name(),
      ' 자신도 그 말이 무엇을 의미하는지 알고 있었다.',
    ]);
    era.printButton(
      '「그렇게 겁먹을 필요 없어. 루비와 루비 어머님의 입장이 어떤지 나도 알고 있으니까.」',
      1,
    );
    await era.input();
    era.printButton(
      '「결혼 문제는 하기도노 톱 레이디와 내가 직접 상의할게. 루비는 네가 해야 할 일에만 집중하면 돼.」',
      1,
    );
    await era.input();
    await ruby.say_and_wait([
      callname,
      '……고마워요. 당신에게 그런 말을 들으니, 마음이 한결 가벼워졌어요……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '며칠 뒤 주말이 찾아왔고, 약혼 상대와 대면하기 위해 ',
      ruby.get_colored_name(),
      '는 어느 호텔로 향했다.',
    ]);
    await era.printAndWait(
      '최근 며칠 동안 울며 잠든 탓인지, 그녀의 안색은 다소 가라앉아 있었다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 약속된 방으로 들어서는 ',
      ruby.get_colored_name(),
      '를 바라보았다.',
    ]);
    era.printButton('「처음 뵙겠습니다, 루비 씨.」', 1);
    await era.input();
    await ruby.say_and_wait(['어째서, ', callname, '이 이곳에 있는 건가요……?']);
    await mother.say_and_wait(
      '실로 감회가 새롭구나, 루비. 이 광경은 어딘가 낯익게 느껴지는구나.',
    );
    await era.printAndWait([
      '어머님은 이미 ',
      ruby.get_colored_name(),
      '가 전속 트레이너에게 품고 있는 마음을 알아차리고 있었던 모양이다.',
    ]);
    await era.printAndWait([
      '할머니와 어머니의 트레이너를 맡았던 남성이 은퇴한 지금, 일족으로서는 ',
      you.get_colored_name(),
      '과(와) 같은 우수한 인재를 순순히 놓아줄 수 없었다.',
    ]);
    await mother.say_and_wait(
      '미리 자세히 이야기하지 않아서 정말 미안하구나.',
    );
    await era.printAndWait([
      '어머님의 다정한 사과에, ',
      ruby.get_colored_name(),
      '는 도저히 화를 낼 수가 없었다.',
    ]);
    await era.printAndWait(
      '일족이 직면한 재계의 압박 속에서도 딸의 행복을 우선한다는 것은 상당한 각오 없이는 불가능한 일이었다.',
    );
    await ruby.say_and_wait(
      '제가 이토록 당신을 경외하고 따르는데, 제게 아무 말씀도 해주시지 않으셨군요.',
    );
    await era.printAndWait([
      '달콤한 숨결을 내쉬며, ',
      ruby.get_colored_name(),
      '가 와락 안겨들었다.',
    ]);
    await era.printAndWait([
      '우마무스메의 힘을 생각하면, 미래의 장모가 곁에서 의미심장한 눈빛으로 바라보고 있어도, ',
      you.get_colored_name(),
      '은(는) 저항을 포기할 수밖에 없었다.',
    ]);
    era.printButton(
      '「제가 화려한 일족의 후계자의 남편이 되겠습니다. 당신의 일생은 제가 책임지겠습니다.」',
      1,
    );
    await era.input();
  },

  // [번역 대상] 89
  89: (() => {
    const title = '良縁';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      const ret = [];
      await era.printAndWait([
        'ある日、',
        ruby.get_colored_name(),
        ' はひとり、',
        you.get_colored_name(),
        ' のトレーナー室で悄然としていた。',
      ]);
      await ruby.say_and_wait('結局、口に出せませんの？');
      era.printButton('「何か、わたしに言いたいことがあるのか？」', 1);
      await era.input();
      await ruby.say_and_wait('！');
      await ruby.say_and_wait([
        ruby.get_colored_name(),
        ' の表情は、「しまった」と言っているようで、視線を逸らした。',
      ]);
      await ruby.say_and_wait([
        'しばらく沈黙したあと、',
        ruby.get_colored_name(),
        ' は決心したように息を吐いた。',
      ]);
      await ruby.say_and_wait('ええ。');
      era.printButton('では、聞かせてくれ。', 1);
      await era.input();
      await ruby.say_and_wait('大変申し訳ありませんわ。お教えできませんわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の頬が赤く染まった。',
      ]);
      await era.printAndWait(
        'とても可愛く、まともな男性の思考を短絡させそうだった。',
      );
      era.printButton(
        `「わたしはルビーの専属トレーナーだ。何を言われても構わない。」`,
        1,
      );
      await era.input();
      await ruby.say_and_wait('いいえ、それでもお教えできませんわ。');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('何を申しても、お受けくださいますの？');
      era.printButton('「もちろん！ 何を言われても受ける。約束する。」', 1);
      era.printButton(
        '「お前が幸せなら、それが一番だ。だからどんな決断でも、支える。」',
        2,
      );
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はしばらく沈思し、ゆっくり深く息をしてから口を開いた。',
      ]);
      await ruby.say_and_wait('先ほどのお言葉、忘れないでくださいまし。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のいるソファへ歩み、優雅に ',
        you.get_colored_name(),
        ' の傍らへ座った。',
      ]);
      await era.printAndWait([
        '冷たい指先が ',
        you.get_colored_name(),
        ' の腕を這い、柔らかな感触とともに甘い体香が届いた。',
      ]);
      await ruby.say_and_wait('お耳を、拝借いたしますわ。');
      await era.printAndWait([you.get_colored_name(), ' は従って頭を下げた。']);
      await era.printAndWait([ruby.get_colored_name(), ' は軽く息をした。']);
      await ruby.say_and_wait('お母さまになりたいですわ……');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の顔を見て、微かに笑った。',
      ]);
      await ruby.say_and_wait('欲しいのです。あなたとのお子が。');
      await ruby.say_and_wait('ねえ、よろしいですわね？');
      era.printButton('「では、いつがいい？」（関係を深める）', 1);
      era.printButton('「まだ、その時ではない」（深化を見送る）', 2);
      era.printButton(
        `（ルビーは、別の人と結婚するかもしれない。）（推奨しない）`,
        3,
      );
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await ruby.say_and_wait('え？');
          await you.say_and_wait('私たちの子どもを、早く見たい。');
          await ruby.say_and_wait('え……え？');
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            ruby.get_colored_name(),
            ' の手を取り、息を互いの頬へ吐いた。',
          ]);
          await ruby.say_and_wait(
            '待って！ 執事がまだ……こんな時間は、いくら何でもいけませんわ！',
          );
          era.printButton('「では、どの程度までならいい？」', 1);
          await era.input();
          await ruby.say_and_wait('どの程度も、いけませんわ！');
          era.printButton('「どうしても、するとしたら？」', 1);
          await era.input();
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('分かりましたわ。');
          await era.printAndWait([
            ruby.get_colored_name(),
            ' は気が進まなそうに立ち上がった。',
          ]);
          await era.printAndWait([
            '一瞬、',
            you.get_colored_name(),
            ' は嫌な予感を覚えた。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' が慌てて立ち上がる途中、悪戯っぽく笑う ',
            ruby.get_colored_name(),
            ' にソファへ押し倒された。',
          ]);
          await era.printAndWait([
            ruby.get_colored_name(),
            ' は唇を ',
            you.get_colored_name(),
            ' の唇に重ね、何度も啄んだ。',
          ]);
          await era.printAndWait(
            'やがて軽い口づけは消え、深い濡れた口づけに代わった。',
          );
          await era.printAndWait(
            '互いの舌先が触れただけで絡み、痺れる快感が全身を走った。',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' は手を ',
            ruby.get_colored_name(),
            ' の背へ回し、彼女を ',
            you.get_colored_name(),
            ' の体へ密着させた。',
          ]);
          await era.printAndWait([
            '愛馬の柔らかな肢体と甘い匂いが、',
            you.get_colored_name(),
            ' の頭をからからにした。',
          ]);
          await era.printAndWait([
            ruby.get_colored_name(),
            ' も ',
            you.get_colored_name(),
            ' の頭を抱き返し、',
            you.get_colored_name(),
            ' の感触を貪った。',
          ]);
          await era.printAndWait([
            '時折漏れる淫らな換気の音が、',
            you.get_colored_name(),
            ' をさらに昂らせた。',
          ]);
          await era.printAndWait(
            'やがて、どちらとも知れぬ唾が糸を引いて離れた。',
          );
          await era.printAndWait([
            ruby.get_colored_name(),
            ' の名残惜しそうな顔に、',
            you.get_colored_name(),
            ' は再び抱きしめたくなった。',
          ]);
          await ruby.say_and_wait('もう、よろしいでしょう……');
          era.printButton('「ああ、ありがとう。」', 1);
          await era.input();
          await era.printAndWait([
            ruby.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の傍を離れ、少し乱れた服を整え始めた。',
          ]);
          await era.printAndWait([
            '先ほどの妖しい空気は跡形もなく、二人は普段のトレーニングのときの感触に戻った。',
          ]);
          break;
        case 2:
          await ruby.say_and_wait('……分かりましたわ');
          await era.printAndWait([
            ruby.get_colored_name(),
            ' は黙って去っていった……',
          ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 99
  99: (() => {
    const title = '依存';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await ruby.say_and_wait('寂しいですわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は率直に ',
        you.get_colored_name(),
        ' へそう言った。拒まれも無視もされず、黙って ',
        you.get_colored_name(),
        ' を見ていた。',
      ]);
      era.printButton('腕を開く。', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の仕草を真似て両腕を開き、それから……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' を覆い尽くすように抱きついてきた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて愛馬を受け止めた。椅子の擦れる音とともに、少女の匂いが鼻へ押し寄せた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' をきつく抱きしめた。',
      ]);
      await ruby.say_and_wait(
        '寂しいですわ。せっかくの休日なのに、あなたは一日中お仕事ですわ。',
      );
      era.printButton('「すまない。」', 1);
      await era.input();
      await ruby.say_and_wait('お詫びより、先になさるべきことがありませんの？');
      await ruby.say_and_wait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の膝に座り、',
        you.get_colored_name(),
        ' の顔を見た。',
      ]);
      await era.printAndWait([
        '少し前へ出せば、彼女の唇に ',
        you.get_colored_name(),
        ' のものが重なった。',
      ]);
      await era.printAndWait(
        'コーヒーの味の口づけ。ブラックなのに、口づけは甘かった。',
      );
      await ruby.say_and_wait('お母様が、早く孫の顔が見たいと仰っていますわ。');
      era.printButton('「では、夜が楽しみだな。」', 1);
      era.printButton(`ルビーを抱きしめる。`, 2, {
        disabled: era.get('relation:85:0') <= 525,
      });
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('お仕事、励んでくださいまし。');
        await era.printAndWait([
          you.get_colored_name(),
          ' の悲痛な叫びを無視し、',
          ruby.get_colored_name(),
          ' は無情に扉を閉じた。',
        ]);
        await era.printAndWait([
          '彼女を選んだのは ',
          you.get_colored_name(),
          '、',
          you.get_colored_name(),
          ' を選んだのは彼女。それが、二人にとって最も幸福な形なのだろう。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' はふと、懐の ',
          ruby.get_colored_name(),
          ' が途轍もなく妖しくなったと感じた。',
        ]);
        await era.printAndWait(
          '少女の甘さではない。女の、人妻になってからの熟れた媚びだった。',
        );
        await ruby.say_and_wait('わたくしの顔に、何か？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は愛馬に構わず、その柔らかな美肉を掴んだ。',
        ]);
        await era.printAndWait([
          '容赦なく ',
          ruby.get_colored_name(),
          ' の乳房を揉んだ。彼女も気にしなかった。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を許し、甘い声で痴れて喘いだ。',
        ]);
        await ruby.say_and_wait('ん……好きですわ……どう揉まれても、好きですわ……');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を見上げ、美しい瞳の色はもう蕩けていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の痴態を見て、力を弱めた。',
        ]);
        await era.printAndWait(
          'それでも愛馬の小さな胸に夢中で、揉み、擦った。',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は香る舌を出し、',
          you.get_colored_name(),
          ' の口角を一度舐めた。',
        ]);
        await ruby.say_and_wait(
          '構いませんわ、乱暴でも……どうして、中へ入れて撫でてくださらないの？',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は愛馬の桜の唇に口づけを返し、上衣を捲り、確かに愛馬の美しい胸に触れた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の乳頭はもう硬く、周りの愛らしい乳暈にも細かい粒が立っていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は愛馬の変化を痛感した。最初は、愛撫だけでここまで動情しなかった。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の上がった尻が後ろへ突き、',
          you.get_colored_name(),
          ' の勃起した肉棒を擦った。',
        ]);
        await era.printAndWait([
          '彼女は小さな舌で ',
          you.get_colored_name(),
          ' の顎を擦り、目は蕩けていた。',
        ]);
        await ruby.say_and_wait('ここで、わたくしを孕ませますの？');
        await era.printAndWait([
          '制服のスカートは長くなく、',
          you.get_colored_name(),
          ' が乳房を弄ぶうち、裾が上がっていた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の尻を包んでいたのは、なんと色っぽいTバックだった。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は小さな下着をずらし、',
          you.get_colored_name(),
          ' の肉棒を尻の溝へ入れた。',
        ]);
        await era.printAndWait([
          '彼女の柔い尻肉が ',
          you.get_colored_name(),
          ' を焦らした。',
        ]);
        await ruby.say_and_wait('肉の穴……それとも、お尻？');
        await ruby.say_and_wait('どちらでも……');
        era.printButton('「お前を、壊す。」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の抱擁の中で、体をより急に捩った。',
        ]);
        await ruby.say_and_wait(
          'あなたの立派な肉棒で、わたくしを犯してくださいまし……',
        );
        era.printButton(`「ルビー、永遠に愛している。」`, 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' が愛馬の耳元で囁くと、彼女は満足げに激しく口づけてきた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は熱く ',
          you.get_colored_name(),
          ' に口づけし、',
          you.get_colored_name(),
          ' の舌を香る口へ吸い、',
          you.get_colored_name(),
          ' の舌先の唾を啜った。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の両手はまだ彼女の乳房を揉み、肉棒は ',
          ruby.get_colored_name(),
          ' の小さな穴を突いていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は身を翻し、',
          ruby.get_colored_name(),
          ' の愛らしい体を押し伏せた。',
        ]);
        await era.printAndWait(
          '下の担当は糸のような媚びた目で、熱い息を吐いていた。',
        );
        await ruby.say_and_wait(
          'あなた、わたくしを犯して。その肉棒で突き通して、壊して。欲しいですわ、永遠にあなたのもの……',
        );
        await era.printAndWait([
          '深い告白に、',
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の普段の端正な姿を忘れた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は彼女の美しい両脚をM字に開き、肉棒を挺した。',
        ]);
        await era.printAndWait('ぷちっ。');
        await era.printAndWait([
          '肉棒が ',
          ruby.get_colored_name(),
          ' の滑る腔へ刺さった。',
        ]);
        await era.printAndWait(
          '驚きの声が口から漏れ、艶やかな顔に、夢中で満ち足りた笑みが浮かんだ。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] 99-after
  async '99-after'(ruby, you) {
    era.drawLine();
    await era.printAndWait([
      'この日、',
      you.get_colored_name(),
      ' は愛馬を何度も絶頂させ、彼女が気を失いかけたところで一気に注いだ。',
    ]);
    await era.printAndWait([
      '正気を戻した ',
      ruby.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' をベッドへ押し倒し、桜の唇で ',
      you.get_colored_name(),
      ' の全身に口づけした。',
    ]);
    await era.printAndWait([
      '深夜、二人は睦みを終えたが、風呂には入らなかった。',
    ]);
    await era.printAndWait([
      'ベッドいっぱいに広がる湿った淫水など構わず、',
      you.get_colored_name(),
      ' と ',
      ruby.get_colored_name(),
      ' は抱き合い、昏々と眠った。',
    ]);
  },

  // [번역 대상] clinic
  clinic: (() => {
    const title = '保健室';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([
        callname,
        '……ルビー、ここが具合悪いですわ……ルビーの体、診てくださいます……？',
      ]);
      await ruby.say_and_wait([
        'はっ……',
        callname,
        '……そんなこと……まだ学園の中ですわ……見られますわ……あっ……いけません……ストッキングが破れて……',
      ]);
      await ruby.say_and_wait(
        'だめですわ……このあと校医が体を診に……はっ……何を……',
      );
      await ruby.say_and_wait('ルビーは患者ですわ……んっ……待って……はっ……あっ……');
      await ruby.say_and_wait(
        'ルビーは痴れ者じゃ……ありませんわ……ただの、体の反応ですわ……',
      );
      await ruby.say_and_wait('淫水ですって……ルビーは知りませんわ……');
      await ruby.say_and_wait([
        'ルビーを離して……今日のルビーは……はっ……どうして ',
        callname,
        ' に診療室で押さえられて……',
      ]);
      await ruby.say_and_wait(
        'んっ……大きい……熱い……太い……あっ……これは……だめ……大きすぎますわ……',
      );
      await ruby.say_and_wait([
        callname,
        '……服を脱がさないで……ううう……ルビーが悪うございましたわ……',
      ]);
      await ruby.say_and_wait(
        'ルビーのお尻を叩かないで……はっ……待って……だめですわ……',
      );
      await ruby.say_and_wait('あっ……叩かれて、おかしいですわ……');
      await ruby.say_and_wait(
        'そんなこと……叩かれて淫水が飛ぶはずが……違いますわ……ルビーは今日、水を飲みすぎただけ……',
      );
      await ruby.say_and_wait(
        '本当ですわ……あああっ……またお尻を……ルビーのお尻が赤く……もうだめ……そこが疼いて……んっ……',
      );
      await ruby.say_and_wait(
        'そんな……はっ……口づけはいけませんわ……んっ……体が虚く……はっ……少し、欲しく……',
      );
      await ruby.say_and_wait(
        'いけませんわ……ルビーはそんな人間じゃ……あっ……入った……痛い……痛いですわ……ゆっくり……大きすぎて……壊されますわ……',
      );
      await ruby.say_and_wait(
        'ううう……大きな亀頭に突かれると、気持ちよくなって……',
      );
      await ruby.say_and_wait([
        'ルビーを気持ちよくしたら……ルビーは大きな肉棒の ',
        callname,
        ' の性奴になってしまうのでは……',
      ]);
      await ruby.say_and_wait(
        'はっ……何を……そんなはずが……ルビーにそんな奇妙な癖が……大きな肉棒を崇めるなんて……ありえませんわ……',
      );
      await ruby.say_and_wait(
        'はっ……大きい……漲りますわ……ゆっくり、また突いて……満たされますわ……はっ……',
      );
      await ruby.say_and_wait(
        '少しずつ突かれて……この感じ、おかしいですわ……心身が征服されていくよう……',
      );
      await ruby.say_and_wait(
        'んっ……入った……また入った……まだ入るの……そこは……まだ突かれたことのない柔い肉のよう……',
      );
      await ruby.say_and_wait(
        'はっ……敏感ですわ……擦られて絶頂しそう……どうしてこんなに奇妙……はっ……自分でするときは、めったに絶頂しないのに……',
      );
      await ruby.say_and_wait(
        'あっ……やはり……大きな肉棒なら……ルビーは耐えられない……大きな肉棒が突いてくる……ルビー……もうだめですわ……',
      );
      await ruby.say_and_wait([
        callname,
        '……ルビーは ',
        callname,
        ' の大きな肉棒に……そのまま雌犬にされましたわ……',
      ]);
      await ruby.say_and_wait([
        'はっ……何を……',
        callname,
        ' はとうに知って……ルビーはずっと、満たされずにいた……',
      ]);
      await ruby.say_and_wait(
        'ルビーは、レースの出走者になど相応しくありませんわ……',
      );
      await ruby.say_and_wait([
        'はっ……何を……',
        callname,
        ' も、こんなに淫らで下賤なルビーが……好き……',
      ]);
      await ruby.say_and_wait([
        'あっ……好かれる感じ、素敵ですわ……もうだめ……',
        callname,
        '……',
      ]);
      await ruby.say_and_wait(
        'んっ……ルビー、壊れましたわ……はっ……少し休ませて……あっ……ゆっくり……突いて……入った……',
      );
      await ruby.say_and_wait(
        'あっ……淫らな穴が、もうだめそう……淫水がたくさん……ううう……',
      );
      await ruby.say_and_wait([
        'そのまま ',
        callname,
        ' に突かれて絶頂……あっ……好きですわ……',
      ]);
      await ruby.say_and_wait(
        '大きな肉棒に……突かれて絶頂するのが、本当の絶頂……',
      );
      await ruby.say_and_wait([
        'こうして……ルビーは……',
        callname,
        ' の性奴になりましたわ……',
      ]);
      await ruby.say_and_wait([
        'はっ……専属の性奴……いつか看護師長になったルビーは……部下の看護婦をみんな ',
        callname,
        ' に捧げて犯させますわ……二つのこんな快楽……大きな肉棒がもたらす絶頂の快楽……はっ……また絶頂……',
      ]);
      await ruby.say_and_wait([
        callname,
        ' の前では……少し気を抜けば……壊れてしまいますわ……',
      ]);
      await ruby.say_and_wait(
        'あっ……これが大きな肉棒の快楽……抑えられない……絶頂が、本当に気持ちよすぎますわ……',
      );
      await ruby.say_and_wait([
        '雌犬でいるのは素敵ですわ……',
        callname,
        ' の雌犬……',
      ]);
      await ruby.say_and_wait(
        'こんな絶頂を味わう……波のように壊れていく快感……本当に多すぎますわ……',
      );
      await ruby.say_and_wait([
        '一生、',
        callname,
        ' の大きな肉棒に突かれ続けたい……ずっと、痴れ者ルビーの淫らな穴の中に……',
      ]);
      await ruby.say_and_wait(
        '本当に気持ちいい……絶頂……絶え間ない絶頂……絶頂の快感……すっかり沈んでしまいますわ……',
      );
      await ruby.say_and_wait(
        '壊れました……また壊れましたわ……ううう……ルビー、もうだめ……',
      );
      await ruby.say_and_wait('頭が真っ白……色とりどりで……');
      await ruby.say_and_wait([
        'あっ……痴れ者ルビー……雌犬ルビー……',
        you.get_colored_actual_name(),
        ' ご主人さまが、たまらなく好きですわ',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] dance
  dance: (() => {
    const title = 'ダンス室';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        '正午近い日差しは明るく、地面を打ち、鬱陶しい熱気を立ち昇らせていた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の小柄な体には、清楚な白いワンピースのバレエ衣装。下は白いタイツに包まれた、細く長い脚だった。',
      ]);
      await era.printAndWait(
        '端正で精緻な五官が、午後に青りんごのような甘い稚さを放っていた。',
      );
      await era.printAndWait([
        '陽の下、揺れ舞いする ',
        ruby.get_colored_name(),
        ' は体を柔らかく広げ、美しい曲線を余さず見せた。',
      ]);
      await era.printAndWait([
        '彼女の柔い横顔が ',
        you.get_colored_name(),
        ' を見ても、上げた足は止まらなかった。',
      ]);
      await era.printAndWait(
        '胸の一対の雪白が、体の前傾に合わせて漣のように揺れた。',
      );
      await era.printAndWait([
        '一曲が憩うと、',
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の上がった美尻の後ろに立ち、手を上げて軽く叩いた。',
      ]);
      await era.printAndWait([
        '舞いに沈んでいた ',
        ruby.get_colored_name(),
        ' は、小さく驚いた。',
      ]);
      await era.printAndWait([
        '彼女は目を伏せ、小柄な体を回し、',
        you.get_colored_name(),
        ' の下で高く張り出したズボンの股を見て、薄い顔に羞じを帯びた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は手を伸ばし、',
        ruby.get_colored_name(),
        ' の顔を包んだ。',
      ]);
      await era.printAndWait([
        '次の瞬間、大きな口が ',
        ruby.get_colored_name(),
        ' の薄紅の唇を完全に塞いだ。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の顔は、心の中で息を吐いているようだった。',
      ]);
      await era.printAndWait([
        '久しぶりにバレエを練習するつもりが、今は仕方なく ',
        you.get_colored_name(),
        ' との舌の口づけを味わうしかなかった。',
      ]);
      await era.printAndWait([
        '甘い体香が ',
        you.get_colored_name(),
        ' の鼻腔を満たし、極上の香りのように神経を酔わせた。',
      ]);
      await era.printAndWait([
        '主客を逆転した ',
        ruby.get_colored_name(),
        ' は欲深く ',
        you.get_colored_name(),
        ' の唾を吸い、両手でそっと ',
        you.get_colored_name(),
        ' の背を撫でた。',
      ]);
      await era.printAndWait([
        '男の荒い息と、娘の情に動いた甘い喘ぎの中で、',
        you.get_colored_name(),
        ' の大きな手が白いストッキングの美尻を揉み、弄んだ。',
      ]);
      await era.printAndWait([
        '股の下の小さなトレーナーも、無意識に ',
        ruby.get_colored_name(),
        ' の柔らかな体を擦っていた。',
      ]);
      await era.printAndWait('淫らな舌の口づけが終わった。');
      await era.printAndWait([
        you.get_colored_name(),
        ' に抱きついた ',
        ruby.get_colored_name(),
        ' は、矜持のある羞じを帯び、軽く唾を飲み込んだ。',
      ]);
      await era.printAndWait([
        '小さな手が ',
        you.get_colored_name(),
        ' の高く上がった股を探り、繊い指が慣れた手つきでズボンを解いた。',
      ]);
      await ruby.say_and_wait(
        '近頃、わたくしと二人きりのとき、ますます大きくなりやすいですわね……',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は、愛しくもあり恐ろしくもある大きなものを、軽く擦った。',
      ]);
      await era.printAndWait([
        '雪白の精緻な小さな顎を袋の上に置き、',
        you.get_colored_name(),
        ' の陰茎の亀頭が少女の雪白の額に届くようにした。',
      ]);
      await ruby.say_and_wait(
        'ふふ……ご主人とは違って、とても覇気のある子ですわね。',
      );
      await era.printAndWait([
        '濃い男性の精の匂いが一気に ',
        ruby.get_colored_name(),
        ' の鼻へ入った。彼女には、濃い愛情の匂いと感じられるそれが、ますます抗えなくなっていた。',
      ]);
      await era.printAndWait(
        '踊りを終えたばかりの愛馬には、運動後の薄い汗が残っていた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は両手で ',
        you.get_colored_name(),
        ' の興奮して震える下を握り、優しく前後に扱いた。',
      ]);
      await era.printAndWait([
        '彼女は濡れた薄紅の柔い舌を少し出し、笑みを含んで ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      era.printButton(`ルビーが美しすぎる。見るたびに痛いくらい硬くなる。`, 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はそれを聞くと、先走りを吐く馬眼を何度か巻き、亀頭を小さな口へ含んでゆっくり吸った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の両手も遊ばず、愛馬の後ろへ上がった尻を揉み、それからバレエの短いスカートの下、白いストッキングの溝へ滑った。',
      ]);
      await era.printAndWait(
        '軽く抉ると、高級なストッキングを滲んだ愛液が指をたやすく包んだ。',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] date
  date: (() => {
    const title = 'デート';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await you.say_as_passer_by_and_wait(
        '執事',
        '失礼いたします、トレーナー様。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の執事が ',
        you.get_colored_name(),
        ' のトレーナー室を訪れた。用向きは、おそらく ',
        ruby.get_colored_name(),
        ' だろう。',
      ]);
      await you.say_as_passer_by_and_wait(
        '執事',
        'お嬢さまは邸のプールで泳いでおります。お送りいたします。',
      );
      await era.printAndWait([
        '執事が部屋を出たあと、',
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' を調教するための道具をスポーツバッグへ詰め、後を追った。',
      ]);
      await era.printAndWait([
        '月明かりの屋外プールで、',
        ruby.get_colored_name(),
        ' は人魚のような艶いで、ゆったりと泳いでいた。',
      ]);
      era.printButton('「こんな夜まで鍛えて、ご苦労だ。」', 1);
      await era.input();
      await ruby.say_and_wait(
        '恐れ入りますわ。それで、迎えにいらしたのですの？',
      );
      era.printButton('「いや、少し話がある。」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' はバッグを置き、プールの縁に座った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' が水から顔を出し、',
        you.get_colored_name(),
        ' に近づいたとき、胸も目に入った。',
      ]);
      await era.printAndWait(
        '肉棒は生殖の欲に駆られ、気づかぬうちに勃起していた。',
      );
      await ruby.say_and_wait(
        'あいにくですわ。急に、もう少し泳ぎたくなりましたの。',
      );
      await ruby.say_and_wait('お話をなさりたいなら、こちらへ……');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に手を伸ばした。',
      ]);
      await ruby.say_and_wait(
        '今ここには、あなたとわたくしだけですわ。裸でも構いませんわ。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の前で服を脱ぎ、半ば勃起した生殖器を晒した。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の顔が、余裕のある表情から、自分が雄に征服されると悟った表情へ変わるとき。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の肉棒に血管と青筋が浮いた。',
      ]);
      await era.printAndWait(
        'それから、わざと上下する下をプールへ入れ、目の前へ差し出された豊かな肉を掴んだ。',
      );
      await era.printAndWait([
        '完全に勃起した肉棒を腹へ押し、乱暴に ',
        ruby.get_colored_name(),
        ' の唇を奪った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の口を無理にこじ開け、舌で口腔を蹂躙した。',
      ]);
      await era.printAndWait('余地なく舐め回し、舌の上の唾を吸い取った。');
      await era.printAndWait(
        'さらに舌を口の中へ引き込み、絡み合わせて唾を交わした。',
      );
      await era.printAndWait([
        '交わりのように濃い激しい口づけが終わったとき、',
        ruby.get_colored_name(),
        ' の余裕はもう跡形もなかった。',
      ]);
      await ruby.say_and_wait('ひどいですわ……');
      era.printButton('「それで、次は何をする？」', 1);
      await era.input();
      await ruby.say_and_wait('話を聞いてくださいまし。');
      era.printButton('「言わなければ、何も分からない。」', 1);
      await era.input();
      await ruby.say_and_wait('どうか、優しく……');
      await era.printAndWait(
        'そう言い、彼女はプールから上がり、壁に手を当てた。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は水着をずらし、優しい愛撫を始めた。',
      ]);
      await era.printAndWait(
        '指先で、最低限の陰毛さえ整えられた雌の穴に触れた。',
      );
      await era.printAndWait(
        '動きは優しくとも、肉棒の存在そのものが乱暴だった。',
      );
      era.printButton(
        '「下品な声だな。華麗一族なら、もう少し品を持てないのか？」',
        1,
      );
      era.printButton(
        '「これならウマ娘より、雌豚と呼ぶ方が似つかわしい。」',
        2,
      );
      await era.input();
      await ruby.say_and_wait('それは、あなたのせい……');
      era.printButton('「俺のせいだと言いたいのか？」', 1);
      era.printButton(
        '「雌豚と呼ばれて、淫水をだらだら噴いている。本当に下賤な豚だ。」',
        2,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は片手の指を ',
        ruby.get_colored_name(),
        ' の尻穴へ入れ、',
        ruby.get_colored_name(),
        ' に腰を上げさせた。',
      ]);
      await era.printAndWait('もう一方の手は遠慮なく、華麗な尻を叩いた。');
      await era.printAndWait([
        '被虐が火をつけたのか、',
        ruby.get_colored_name(),
        ' は体を捩り、潮を盛大に地面へ撒いた。',
      ]);
      await ruby.say_and_wait('ああ……分かりましたわ。');
      await ruby.say_and_wait('わたくしは、あなたの雌豚ですわ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' が手を ',
        ruby.get_colored_name(),
        ' の尻から離すと、彼女の姿勢はその場で崩れた。',
      ]);
      await era.printAndWait('潮吹きの余韻に浸り、時折、下品な喘ぎが漏れた。');
      await era.printAndWait([
        you.get_colored_name(),
        ' はバッグから紐つきの首輪を出し、',
        ruby.get_colored_name(),
        ' の首に嵌めた。',
      ]);
      await era.printAndWait(
        '家畜らしくはなった。だが、まだ不自然なところがある。',
      );
      await ruby.say_and_wait('あ、あなた、まだ何を……？');
      await era.printAndWait('どこが、ちぐはぐなのだろう。');
      era.printButton('今の彼女は、押し倒されて種を注がれたい。', 1);
      era.printButton('「服を着た畜生など、いないだろう。」', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' に服を脱げと命じた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の顔にはいくらか反抗があった。だが ',
        you.get_colored_name(),
        ' が肉棒で顔を何度か叩くと、動きはすぐ速くなった。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の足元には、雌汁がすでに水溜まりを作っていた。',
      ]);
      await era.printAndWait(
        '彼女は蹲り、両脚を開き、腋を晒す色情の蹲踞をした。',
      );
      await era.printAndWait(
        'それから口を開き、薄紅の舌を出し、軽く息を吐いた。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が肉棒を ',
        ruby.get_colored_name(),
        ' の喉の奥まで押し込むと、彼女の顔には嘔吐のような苦しさが浮かんだ。',
      ]);
      await era.printAndWait(
        '舌と食道を犯される感触に耐えながら、精を搾り出そうと努めて奉仕した。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は気ままに ',
        ruby.get_colored_name(),
        ' の髪を掴み、腰を打った。',
      ]);
      await era.printAndWait([
        '根まで完全に押し込んでも、',
        ruby.get_colored_name(),
        ' は頬を窪ませ、真面目に口で奉仕した。',
      ]);
      await era.printAndWait('射精した！');
      await era.printAndWait(
        '一番奥で射精すれば、嫌がっても精液は胃へ直接注がれる。',
      );
      await era.printAndWait([
        '射精が終わったとき、',
        ruby.get_colored_name(),
        ' の胃は、使い終えた避妊具のように膨らんでいた。',
      ]);
      await era.printAndWait('外から見ても、腹は明らかに膨らんでいた。');
      await ruby.say_and_wait('これで、ご満足ですの？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は愛馬を、一晩中犯した。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] delicious
  delicious: (() => {
    const title = '美食';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait(['どういうわけか、話が食事のことになった。']);
      await era.printAndWait([
        'そこで ',
        you.get_colored_name(),
        ' は自分で台所に立ち、',
        ruby.get_colored_name(),
        ' のために中華の家庭料理を一卓作ることにした。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の乗り気を見て、付き合うことにした。もちろん、',
        you.get_colored_name(),
        ' についてきた。',
      ]);
      await era.printAndWait([
        '華麗一族の倉には、白い米の艶が、',
        you.get_colored_name(),
        ' が以前食べたものより一段も二段も上だった。',
      ]);
      await era.printAndWait(
        '台所では、葱、生姜、蒜、醤油、料理酒といった調味料も容易に見つかった。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は豚肉をほとんど食べず、牛や羊が主だ。それでも ',
        you.get_colored_name(),
        ' は臘肉を一塊、見つけた。',
      ]);
      await era.printAndWait([
        '食事は華麗な広間で行われた。傍らに立つ執事のほかは、',
        ruby.get_colored_name(),
        ' だけが中央に座っていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は料理を運ぶのに忙しく、がらんとした部屋は少し寂しい。幸い、炉の火と佳人がいた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は半信半疑で箸を動かした。',
      ]);
      await ruby.say_and_wait('ん、とても美味ですわ。');
      await era.printAndWait([
        '実際、',
        you.get_colored_name(),
        ' が作ったのはごく普通の家庭料理で、味も ',
        you.get_colored_name(),
        ' から見れば並だった。',
      ]);
      await era.printAndWait([
        'だが ',
        ruby.get_colored_name(),
        ' にとっては、こうした味の刺激は十分に美味と呼べた。',
      ]);
      era.printButton('「気に入ったなら、教えてもいい。」', 1);
      await era.input();
      await ruby.say_and_wait('ええ。');
      await era.printAndWait([
        '食後の散歩は欠かせない。機嫌がよい ',
        ruby.get_colored_name(),
        ' は本館を出た。',
      ]);
      await era.printAndWait([
        '石の小径を歩いた。荘園へ続く道だが、ただぶらぶらしているだけだ。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の口角はずっと上がっていた。',
        you.get_colored_name(),
        ' の腕を取り、',
        you.get_colored_name(),
        ' の知らない旋律を口ずさんだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は後ろから ',
        ruby.get_colored_name(),
        ' の腰へ手を回し、それからゆっくり抱き寄せた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の機嫌は頂点で、',
        you.get_colored_name(),
        ' の動きに身を任せた。',
      ]);
      await era.printAndWait([
        '部屋に戻ると、',
        you.get_colored_name(),
        ' は興奮し始めた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は服を脱ぎ、浴室へ入った。',
      ]);
      await ruby.say_and_wait('いらして。');
      await era.printAndWait([
        'ようやく叶った ',
        you.get_colored_name(),
        ' は、力加減を少し失った。',
      ]);
      await era.printAndWait(
        '軽く口づけるつもりが、猛々しい噛みつきになり、食い千切りそうだった。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は口を開き、舌で ',
        you.get_colored_name(),
        ' という獣をなだめた。',
      ]);
      await era.printAndWait([
        '彼女が手で ',
        you.get_colored_name(),
        ' の脇腹を摘むまで、',
        you.get_colored_name(),
        ' は自分がキスしすぎたことに気づかなかった。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は少し後ろへ引き、体を床へ移した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は唾を飲み、両手で ',
        ruby.get_colored_name(),
        ' の足を支え、趾から拝み始めた。',
      ]);
      await era.printAndWait('親指を含み、舌を休めず回した。');
      await era.printAndWait('それから一本ずつ指を、ピンと張った足の甲を。');
      await era.printAndWait([
        '湯の流しとは違い、',
        you.get_colored_name(),
        ' の唾液は彼女の肌で、催淫のように働いた。',
      ]);
      await ruby.say_and_wait('早く。');
      await era.printAndWait([
        '繊い肌にいつまでも留まる ',
        you.get_colored_name(),
        ' は口を動かすのが惜しく、太ももまで舐め、脚の付け根まで舐めた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は腰を挺し、自分の陰茎で ',
        ruby.get_colored_name(),
        ' の頬を叩いた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は素直でない肉棒を掴み、先端から舐め始めた。',
      ]);
      await ruby.say_and_wait('あっ……ん……');
      await era.printAndWait([
        '遠慮のない声に、',
        you.get_colored_name(),
        ' は我慢がきかなくなった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は片手で目の前に垂れた頭を掴み、片手で ',
        ruby.get_colored_name(),
        ' の耳を揉んだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は両手で、懸命に奉仕する ',
        ruby.get_colored_name(),
        ' の頭を抱え、自分からも前後に動いた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は柔らかさと熱に包まれ、搾る圧力に気分が高ぶった。',
      ]);
      await era.printAndWait([
        '陰毛が ',
        ruby.get_colored_name(),
        ' の頬を言葉にできないほど刺激し、',
        ruby.get_colored_name(),
        ' はさらに熱心に咥えた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の精液を飲み込んだ。',
      ]);
      await era.printAndWait([
        '美味ではない。それでも飲み込んだ。それは ',
        you.get_colored_name(),
        ' のものだったから。',
      ]);
      await era.printAndWait([
        '自分の体の中に ',
        you.get_colored_name(),
        ' の液体がある。それは口づけより、ずっと意味がある。',
      ]);
      await era.printAndWait('だが、愛馬はまだ解放されていない。');
      await era.printAndWait([
        '彼女が足を上げると、',
        you.get_colored_name(),
        ' は意地悪く ',
        ruby.get_colored_name(),
        ' の勃起した乳頭を弄り、指の隙間に挟んで引っ張った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の落ち着かない手を掴み、下へ移した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が熱い勃起物に触れると、',
        ruby.get_colored_name(),
        ' に睨まれた。',
      ]);
      await era.printAndWait([
        '彼女の趾もわずかにすぼまり、',
        you.get_colored_name(),
        ' の爪が陰核を滑ったとき、思わず震えた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' が絶頂するまで、かなりの時間がかかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は油断せず、大タオルで愛馬を包み、抱いて浴室を出た。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は少し眠げだった。二人は厚い布団に包まれ、大ベッドで抱き合った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        ruby.get_colored_name(),
        ' の髪に触れると、まだ乾ききっていなかった。',
      ]);
      await era.printAndWait([
        '何度も ',
        ruby.get_colored_name(),
        ' の髪を拭いているうち、どうせ眠れない彼女は ',
        you.get_colored_name(),
        ' の懐で ',
        you.get_colored_name(),
        ' を抱いた。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] dessert
  dessert: (() => {
    const title = '食後のデザート';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '食事のあと、',
        you.get_colored_name(),
        ' はふと思いつき、',
        ruby.get_colored_name(),
        ' を食卓へ抱き上げた。',
      ]);
      await era.printAndWait(
        '突然の仕草に彼女は「あっ！」と少し驚いたが、すぐ落ち着いた。',
      );
      await era.printAndWait(
        '白いニーソックスの小さな足が、空中にぶら下がっていた。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' のスカートを捲り、高級な下着を慎重に脱がせた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の両脚を開き、蕾の赤い薔薇を仔細に眺めた。',
      ]);
      await era.printAndWait(
        '白に紅を透かす恥丘に、脈打つ血管が見えるようだった。桜の唇に劣らぬ小さな陰唇が開閉し、別の生き物が息をしているようだった。',
      );
      await era.printAndWait([
        '向かい合っていても、',
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に抗う様子がなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は頭を ',
        ruby.get_colored_name(),
        ' の股へ埋め、舌を出して蕾の味を味わった。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は驚いて両脚を閉じ、',
        you.get_colored_name(),
        ' は本気で、愛馬の力強い太ももに頭を潰されそうになった。',
      ]);
      era.printButton('息苦しそうに助けを求める。', 1);
      era.printButton('その細い隙間へ入る。', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は顔を赤らめ、両脚を開いた。',
      ]);
      await era.printAndWait([
        '体は本能で太ももを閉じたがる。だが ',
        you.get_colored_name(),
        ' を傷つけるのが怖く、懸命に耐えていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は頬で少女の下の弾力を感じ、舌先で勃起した陰核を愛撫し、さらに深い濡れへ入って柔い襞を弄った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は我慢できず、小さな喘ぎを漏らした。',
      ]);
      await era.printAndWait([
        '欲を刺激された ',
        you.get_colored_name(),
        ' は、その小さな陰核を吸い始めた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の頭を抱いて震え続け、',
        you.get_colored_name(),
        ' は首筋の息が次第に荒くなるのを感じた。',
      ]);
      await era.printAndWait([
        '最後に ',
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の潮を一口含み、',
        ruby.get_colored_name(),
        ' と口づけし、口の中の彼女の味を分け合った。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] foot_job
  foot_job: (() => {
    const title = '足交';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([callname, '、そちらの……大きくなりましたの？']);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は俯いて ',
        you.get_colored_name(),
        ' の股を一度見てから顔を上げ、赤い明るい瞳を見開いて訊ねた。',
      ]);
      await ruby.say_and_wait('どうして、大きくなるのですの？');
      await ruby.say_and_wait([
        callname,
        '、わたくしの白いタイツの脚がお好きですの？',
      ]);
      era.printButton('「ああ。」', 1);
      era.printButton('「綺麗だから……触り心地もいいから、それで……」', 2);
      await era.input();
      await era.printAndWait([
        '突然、',
        ruby.get_colored_name(),
        ' は柔らかな小さな手を伸ばし、',
        you.get_colored_name(),
        ' の手を取って自分の太ももへ置いた。',
      ]);
      await ruby.say_and_wait([
        callname,
        ' がお好きなら、ご自分で撫でなさい。わたくし……わたくし、',
        callname,
        ' がそうなさるのは、嫌ではありませんわ……',
      ]);
      await era.printAndWait([
        'どうしたことか。',
        you.get_colored_name(),
        ' の頭は真っ白になった。だが手に伝わる絹のような感触は、嘘ではなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の手は無意識に、愛馬のストッキングの太ももを優しく撫で、ズボンの中の凶器はさらに膨らんだ。',
      ]);
      await ruby.say_and_wait('我慢なさって、苦しいでしょう。');
      await era.printAndWait([
        'そう言い、',
        ruby.get_colored_name(),
        ' は手を伸ばして ',
        you.get_colored_name(),
        ' の股のチャックを下げた。獰猛な陽物が力強く跳ね出し、彼女の小さな手に優しく扱かれた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は思い切って長ズボンを蹴り飛ばし、両手で愛馬の白いストッキングの美しい脚を撫で、掌の下の温潤を味わった。',
      ]);
      await ruby.say_and_wait([callname, '、気持ちよろしいですの？']);
      await era.printAndWait([
        'ほんの数度で、',
        you.get_colored_name(),
        ' は下の酥痺に耐えきれず、精を噴き出しそうになった。',
      ]);
      era.printButton('彼女の手をどける。', 1);
      era.printButton('降伏する。', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は急いで ',
        ruby.get_colored_name(),
        ' の手をどけ、致命的な快感を中断した。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の惑う視線の下、',
        you.get_colored_name(),
        ' は椅子を離れ、床に座った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は察し、ストッキングに包まれた小さな足で左右から ',
        you.get_colored_name(),
        ' の天を向く男根を挟み、上下に扱き始めた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がこの動きに慣れたと分かると、',
        ruby.get_colored_name(),
        ' は少し力を入れて踏みつけた。',
        you.get_colored_name(),
        ' は体を支えきれず踏み倒されぬよう、手を後ろへ突くしかなかった。',
      ]);
      await ruby.say_and_wait('こちらは、気持ちよろしいですの？');
      await ruby.say_and_wait('嫌らしい好色ですわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は羞じて罵った。だが白いストッキングの小さな両足の動きは、ますます速くなった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の馬眼からすぐ、潤滑の前立腺液が次々と溢れ、白いタイツの小さな足を濡らした。',
      ]);
      await ruby.say_and_wait(
        'お気に召すなら、これから毎日、こうして差し上げますわ。',
      );
      await era.printAndWait([
        '頭が欲に満ちた ',
        you.get_colored_name(),
        ' は、濁った喘ぎで頷くしかなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はその致命的な快感に抗えず、顔を仰向けて声を上げた。',
      ]);
      await era.printAndWait(
        '小さな足に挟まれた、少女との対比が鮮やかな太い男茎が震え、馬眼から噴水のように白い濃い精を迸らせ、愛らしい白いストッキングの足の上へ落ちた。',
      );
      await era.printAndWait([
        '噴出は十数秒続き、',
        you.get_colored_name(),
        ' は目の前が真っ白になり、強い快感が脳髄を吸い尽くすようだった。',
      ]);
      await era.printAndWait([
        'だが ',
        ruby.get_colored_name(),
        ' の両足は止まらず上下に扱い、',
        you.get_colored_name(),
        ' の因子の汁を搾り続けた。',
      ]);
      await era.printAndWait([
        '射精が終わってもしばらくしてから、両足を ',
        you.get_colored_name(),
        ' の太ももの上へ置いた。',
      ]);
      await era.printAndWait([
        '精液に透けた白いストッキングの小さな足で、そっと ',
        you.get_colored_name(),
        ' の太ももを弄び、',
        you.get_colored_name(),
        ' に爆発の余韻を十分に味わわせた。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] jade
  jade: (() => {
    const title = '玉石店';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        '普通の飾りの店は、娘向けの装身具を多く扱っている。',
      );
      await era.printAndWait(
        '二人が一軒に入ると、店内のしつらえに目が覚めた。',
      );
      await era.printAndWait(
        '玉、宝石。店には石の種類が豊富なだけでなく、完成品も少なくなかった。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はそれらの宝に目を眩まされず、まっすぐ佩玉の方へ歩いた。',
      ]);
      await era.printAndWait(
        '見目麗しい宝石など、もう見飽きていて、興味はとうに薄れていた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は首を振り、気に入るものが見つからない様子だった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はカウンターの者を呼び、紹介させた。',
      ]);
      await era.printAndWait([
        '案内がいくつか対を紹介しても、',
        ruby.get_colored_name(),
        ' はあまり満足しなかった。',
      ]);
      await ruby.say_and_wait('ほかに、もっと良いものはありませんの？');
      await era.printAndWait([
        'しばらくして、店主が現れた。階上で話すよう招かれた。',
      ]);
      await era.printAndWait('箱が運ばれ、開くと一対の翡翠の飾りが出てきた。');
      await era.printAndWait(
        '鴛鴦の戯水図だった。まったく同じ意匠で、周りに蓮の葉が絡み、円く豊かに見えた。',
      );
      await era.printAndWait(
        '分ければ一羽、合わせれば首を寄せ合う親密な夫婦になる。',
      );
      await era.printAndWait(
        '店主「これはもともと、妻へ贈るつもりでした。惜しいことに……」',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' も、いくらか心を動かされた。これは確かに逸品と呼べる。',
      ]);
      era.printButton('「お売りになるおつもりですか？」', 1);
      era.printButton('「あまりに貴重です。ほかを見せていただけますか？」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '店主は頷いた。惜しいことに、値段ですでに多くの者が退いていた。',
        );
        await era.printAndWait(
          '普通の者は気軽に買いとは言えない。もう、気ままに歓心を買う値段ではなかった。',
        );
        await ruby.say_and_wait(
          'でしたら、あなたが一つ、わたくしが一つ。よろしいですわ。',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' も気に入り、見るほどに気に入って、今すぐ着けたい様子だった。',
        ]);
        await era.printAndWait(
          '店主は驚いた。小さな娘がこの翡翠の寓意を知らぬのではと、説明しようとした。',
        );
        era.printButton('「店主さん、次の一対を見せてください。」', 1);
        await era.input();
        era.drawLine();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は愛用の対玉を手に入れ、とても喜んでいた。',
        ]);
        await era.printAndWait([
          '出口際、店主はまだ ',
          ruby.get_colored_name(),
          ' に鴛鴦の戯水を説明しようとした。',
        ]);
        await ruby.say_and_wait(
          'わたくしが鴦、あちらが鴛ですわ。分かっておりますわ。',
        );
        await era.printAndWait([
          '店主が呆けている隙に、',
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の手を引き、また別の店へ向かった。',
        ]);
      } else {
        await era.printAndWait('しばらく、打ち解けた話が続いた……');
        await era.printAndWait([
          'この店主は気性のいい人で、飾りを取っておくと約束したあと、二人は玉石店を出た。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] kiss
  kiss: (() => {
    const title = 'トレーナーの口づけ';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' の愛馬は、うつろな ',
        you.get_colored_name(),
        ' をソファへ押し倒した。',
      ]);
      await era.printAndWait([
        '広がった豪華な勝負服の下、白いストッキングの柔い尻が ',
        you.get_colored_name(),
        ' の股に乗った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は身を前へ傾け、茶黒の巻き毛が横顔を滑った。絵の人形のような小さな顔に、薄い紅が差していた。',
      ]);
      await ruby.say_and_wait([
        callname,
        '、余計なことは考えなくてよろしいですわ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が肘で起き上がろうとした瞬間、温かく滑る少女の唇が ',
        you.get_colored_name(),
        ' の口を塞いだ。',
      ]);
      await era.printAndWait([
        '濡れた柔い舌が、一気に ',
        you.get_colored_name(),
        ' の唇と歯をこじ開け、口の中へ入った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の粗く厚い舌は掴まれ、弄ばれ、それから愛馬の香る舌と絡み合った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の津液は食後の果物のような甘さで、今も絶えず ',
        you.get_colored_name(),
        ' の口へ送られていた。',
      ]);
      await era.printAndWait([
        '姿勢のせいで、',
        you.get_colored_name(),
        ' は愛馬の粘り、清い甘さの唾を飲み続けねばならなかった。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の体香が周囲に満ち、',
        you.get_colored_name(),
        ' の鼻腔を貫き、脳を麻痺させた。',
      ]);
      await era.printAndWait([
        '中学生の少女が ',
        you.get_colored_name(),
        ' の口腔で、湿った薄紅の舌を掻き回し、',
        you.get_colored_name(),
        ' の太い舌と巻きついた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は互いの唾を交わし、飲み合い、濃く湿った音を立てた。',
      ]);
      era.printButton('愛馬の細い腰を支える。', 1);
      era.printButton('愛馬の上がった美尻を弄ぶ。', 2);
      await era.input();
      await ruby.say_and_wait('ちゅ……じゅ、く……んちゅ、ずる……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は淫らな舌の口づけに溺れた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の、白いストッキングにきつく包まれた少女の陰阜は、幼い穴から溢れた淫液で濃い色に染まっていた。',
      ]);
      await era.printAndWait([
        '長いあと、結局は ',
        you.get_colored_name(),
        ' が肺活量で敗れ、目が回りながら喘いだ。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は満足げに、',
        you.get_colored_name(),
        ' に含まれて少し腫れた柔い舌を引いた。だが息は、とても穏やかだった。',
      ]);
      await era.printAndWait([
        '坂道、水泳……体力がもともと人間を遠く超えるウマ娘は、意識を空にしても ',
        you.get_colored_name(),
        ' と熱い口づけを交わせば、呼吸の換気の本能を見事に掴んでいる。',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] loli_wife
  loli_wife: (() => {
    const title = 'ロリ幼妻';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' が疲れているのを見て、気を利かせて湯を張った。',
      ]);
      await era.printAndWait([
        '服を脱いだ ',
        you.get_colored_name(),
        ' は突然、一緒に入るよう彼女を呼んだ。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はもう洗っていた。それでも素直に服を脱ぎ、浴室へ入った。',
      ]);
      await era.printAndWait([
        '浴室で、',
        ruby.get_colored_name(),
        ' は羞じて ',
        you.get_colored_name(),
        ' をまともに見られなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は彼女の指を取り、男性の体を知らせた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' に手を出させず、',
        you.get_colored_name(),
        ' は自ら石鹸を少女の幼い肌に塗った。',
      ]);
      await era.printAndWait([
        'それから ',
        you.get_colored_name(),
        ' は両手を乳房の前に留めた。彼女の胸は、丁寧に焼いた目玉焼きのようで、白身が黄身を包み、水気に揺れて、',
        you.get_colored_name(),
        ' は一口噛みつきたくなった。',
      ]);
      await era.printAndWait([
        '小さな膨らみは、',
        you.get_colored_name(),
        ' の焦った揉みでたびたび手を滑り、そのたび ',
        ruby.get_colored_name(),
        ' は我慢できず笑った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        ruby.get_colored_name(),
        ' を洗い流したあと、今度は ',
        ruby.get_colored_name(),
        ' に ',
        you.get_colored_name(),
        ' の体を洗わせた。',
      ]);
      await era.printAndWait(
        '彼女は一寸一寸、丁寧に体を整えた。ただ、いちばん大切なところだけが漏れていた。',
      );
      era.printButton('声をかけて促す', 1);
      era.printButton('手を掴んで強いる', 2);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] non_penetration
  non_penetration: (() => {
    const title = '一緒にお風呂';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      const ret = [];
      era.printButton('「一緒にお風呂は、どうだ？」', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は顔を上げ、目を見開いた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も、自分の言葉に少し驚いた。',
      ]);
      await era.printAndWait(
        'この提案が極端すぎるわけではない。二人はすでに何度も、隠し立てなく向き合ってきた。',
      );
      await era.printAndWait([
        'だが平日の今日、面と向かって ',
        ruby.get_colored_name(),
        ' にこれを言うのは、いくらか大胆だった。',
      ]);
      await ruby.say_and_wait('む……');
      await ruby.say_and_wait('いけなくは、ありませんわ。');
      era.printButton(`「ルビーは最高だ！」`, 1);
      era.printButton(`「仕方ないだろ。ルビーが可愛すぎるんだ。」`, 2);
      era.printButton(`ルビーを抱き上げる。`, 3);
      ret.push(await era.input());
      await era.printAndWait([ruby.get_colored_name(), ' は少し羞じた。']);
      await era.printAndWait([
        '目の前の、凝脂のような、艶やかな体を見て、',
        you.get_colored_name(),
        ' は喉が渇いた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の熱い視線に、少し照れた。',
      ]);
      await ruby.say_and_wait('入りましょう。');
      era.drawLine();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は足早に浴槽へ向かい、手を伸ばして湯加減を見た。層の湯気が愛馬の青臭い体を隠し、見え隠れするほど、朦朧とした美しさがあった。',
      ]);
      await era.printAndWait([
        '裸の美しい背と、上がった尻を ',
        you.get_colored_name(),
        ' に見せ、',
        ruby.get_colored_name(),
        ' は玉のような足を上げ、水に漣を立てた。',
      ]);
      await era.printAndWait(
        '入水は軽やかで、水しぶきはほとんど立たなかった。',
      );
      era.printButton(`「ルビー、綺麗だ。」`, 1);
      era.printButton('ズボンを脱ぎ、亀頭を空気に晒す。', 2);
      ret.push(await era.input());
      await ruby.say_and_wait('うっ……何日、お清めになっていないのですの……');
      await era.printAndWait([
        you.get_colored_name(),
        ' の肉棒が威風よく立つのを見て、',
        ruby.get_colored_name(),
        ' は思わず両脚を閉じた。',
      ]);
      await era.printAndWait(
        '蜜の穴は熱い湯に潤っているのに、少女の顔はどこか空虚で、物足りなそうだった。',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は短い気まずいあと、風情を解さぬ笑みで湯へ落ちた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の軽やかさとは違い、水しぶきが四方へ跳ねた。',
      ]);
      era.printButton('彼女の向かいに座る。', 1);
      await era.input();
      await era.printAndWait([
        '浴槽が狭いせいで、',
        ruby.get_colored_name(),
        ' の両足は ',
        you.get_colored_name(),
        ' の陰嚢の下にあった。',
      ]);
      await era.printAndWait([
        'わずかに上げれば、',
        you.get_colored_name(),
        ' に狂おしい刺激を与えられる。',
      ]);
      await ruby.say_and_wait('粗野ですわ……');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はそう言いながら、大きな瞳を ',
        you.get_colored_name(),
        ' の肉棒から外せなかった。',
      ]);
      await era.printAndWait(
        '水の下に隠れていても、無視できない雄の姿で頭を上げていた。',
      );
      await era.printAndWait([
        'それでも、',
        ruby.get_colored_name(),
        ' が二人の匂いのついた清水を掬って体にかける仕草は、優雅で愛らしかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はぼんやりと、',
        ruby.get_colored_name(),
        ' が体を洗うのを見た。',
      ]);
      await era.printAndWait(
        '動きを忘れ、白い柔い肌の一寸一寸を、小さな手が熱い湯で撫でるのを見つめていた。',
      );
      await era.printAndWait([
        '高価な石鹸の花の香りが甘い泡の一つ一つに宿り、',
        ruby.get_colored_name(),
        ' を王女のように引き立てた。',
      ]);
      await ruby.say_and_wait('ぼうっとしていてはいけませんわ。');
      await era.printAndWait([
        '愛馬の促しで ',
        you.get_colored_name(),
        ' は我に返った。だが両脚の間に、何か柔いものが張りついている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' には、無意の交差なのか、意図した誘いなのか分からなかった。',
      ]);
      era.printButton('花弁のような柔い足を掴む。', 1);
      era.printButton('弄び始める。', 2);
      await era.input();
      await ruby.say_and_wait('はっ……くすぐったい……何をなさいますの？');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は小さな足を上げられ、',
        you.get_colored_name(),
        ' に強く弱く揉まれ、脚が弛んだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' に弄ばれるまま、洗う動きはますます遅くなった。',
      ]);
      era.printButton(
        `「きれいに洗ってやる。ルビーは足、洗いづらいだろう？」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        'もちろん、',
        you.get_colored_name(),
        ' の鍛錬のおかげで、',
        ruby.get_colored_name(),
        ' の柔軟さなら足を洗うこともできる。だが、たしかに手間だ。',
      ]);
      await era.printAndWait([
        '何より、こうして ',
        you.get_colored_name(),
        ' に掴まれている。',
      ]);
      await ruby.say_and_wait(
        'ん……あっ！ 力が入りすぎですわ……でも、気持ちいいですわ……',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は目を閉じ、',
        you.get_colored_name(),
        ' の揉みに誘う喘ぎを漏らした。',
      ]);
      await era.printAndWait(
        '華麗一族の少女は、蕩けた目で浴槽の縁に寄り、茶黒の長い髪が水に柳のように浮かんだ。',
      );
      await era.printAndWait(
        '人間の男をたやすく打ち伏せる白い手が、今は交差して両脚の間を守り、太ももに擦られていた。',
      );
      await era.printAndWait([
        '美術品より完璧な一対の足が、少女の甘い喘ぎの中で ',
        you.get_colored_name(),
        ' にくまなく弄ばれた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' はほとんど水面下へ沈みかけた。',
      ]);
      era.printButton('腰を抱いて懐へ入れる。', 1);
      await era.input();
      await era.printAndWait([
        '少女の白い柔い肌と一対の胸が、',
        you.get_colored_name(),
        ' の胸板に密着した。',
      ]);
      await ruby.say_and_wait('あなた……何を……？');
      era.printButton(`「もちろん、ルビーを洗ってやる。」`, 1);
      era.printButton(`「ルビーの背中も、わたしに任せろ。」`, 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' が理解するより先に、',
        you.get_colored_name(),
        ' は彼女ごと向きを変えた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は自分の太ももで ',
        ruby.get_colored_name(),
        ' を挟んだ。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の美しい弧の背が ',
        you.get_colored_name(),
        ' の胸に凭れ、下の、湯より彼女をざわつかせる陽物を感じさせられた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は手を伸ばし、',
        ruby.get_colored_name(),
        ' の胸をさまざまな形に揉んだ。誘う薄紅が白い肌へ広がった。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の胸は大きな手に揉まれ、尻は肉棒に擦られ、両脚まで ',
        you.get_colored_name(),
        ' の体毛に擦られた。',
      ]);
      await era.printAndWait(
        '全身の快感が電流のように、何度も脊髄を通って脳を貫いた。',
      );
      await era.printAndWait('淫液が蜜の入口から流れた。');
      await ruby.say_and_wait('だ……だめですわ！');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の揺れる様子に ',
        you.get_colored_name(),
        ' は大いに喜んだ。だが彼女は、まだ許さなかった。',
      ]);
      await ruby.say_and_wait('脚だけ、なら……');
      era.printButton('体を後ろへ倒し、両手を浴槽に預ける。', 1);
      era.printButton('顔を寄せ、熱い息で愛馬の耳に囁く。', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await you.say_and_wait('欲しいなら、自分で来い。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は小さな尻を少し上げ、腰を下ろすと細い肉縫が太い肉棒に密着した。',
        ]);
        await era.printAndWait([
          '玉のような脚がすぐに締まり、',
          you.get_colored_name(),
          ' はすぐ ',
          ruby.get_colored_name(),
          ' の肉縫の吸いを感じた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が快感に声を上げるより先に、',
          ruby.get_colored_name(),
          ' は繊い指を伸ばし、水底の亀頭へ当てた。',
        ]);
        await era.printAndWait([
          '指先が何度も滑り、あるかないかの感触に ',
          you.get_colored_name(),
          ' は心を奪われた。',
        ]);
        await era.printAndWait([
          'この生々しい光景に ',
          you.get_colored_name(),
          ' は堪えきれず、再び ',
          ruby.get_colored_name(),
          ' の腰へ手をかけた。',
        ]);
        await era.printAndWait([
          '弄ばれた ',
          ruby.get_colored_name(),
          ' は無意識に両脚を閉じ、擦り、捩った。',
        ]);
        await era.printAndWait([
          'やがて ',
          you.get_colored_name(),
          ' の肉棒の膨らみを感じ、',
          ruby.get_colored_name(),
          ' は両脚を強く挟んだ。',
        ]);
        await era.printAndWait([
          '火山が噴くように、大量の白い濁りが迸り、',
          ruby.get_colored_name(),
          ' の脚と蕾にかかった。',
        ]);
        await era.printAndWait(
          '灼熱が広がるとともに、清水の中にも白いものが増えた。',
        );
        await era.printAndWait([
          '華麗一族の至宝は、またしても ',
          you.get_colored_name(),
          ' に穢された。',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は察して振り返り、',
          you.get_colored_name(),
          ' の唇を迎えた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の厚い舌が堂々と ',
          ruby.get_colored_name(),
          ' の小さな口へ入り、小さな舌と絡み、淫らな音を立てた。',
        ]);
        await era.printAndWait(
          '一方は顔を紅潮させ、一方は星のような瞳を酔わせていた。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は手に力を込め、小さな胸の桜を軽く摘んだ。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、ほかの者が想うことすら憚る美少女を、気ままに弄んだ。',
        ]);
        await era.printAndWait([
          '髪、香る肩、柔い胸、上がった尻、玉のような脚。ついには ',
          ruby.get_colored_name(),
          ' に、自分の仕草へ合わせさせた。',
        ]);
        await era.printAndWait('唇が離れ、肉棒から濃い白濁が迸った。');
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の滑らかな顎を上げ、目の前の、静かな赤い小さな顔を眺めた。',
        ]);
        await era.printAndWait([
          '正気を失った ',
          ruby.get_colored_name(),
          ' は、そっと ',
          you.get_colored_name(),
          ' の抱擁から抜けた。',
        ]);
        await era.printAndWait([
          'そのあと、想像を誘う跡を十分に清め、素早く互いを洗い終えた。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sex_mark
  sex_mark: (() => {
    const title = '';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([
        'お腹はもう漲っているのに、わたくしはまだ ',
        callname,
        ' が精液を子宮へ注いでくださるのを欲しがっている……',
      ]);
      await ruby.say_and_wait([
        ruby.get_colored_name(),
        '、あなたは……本当に恥じらいを知りませんわ。',
      ]);
      era.println();
      await ruby.say_and_wait('——これは、何の感じですの？');
      await ruby.print_and_wait([
        '心臓がどきどきと激しく跳ね、',
        ruby.get_colored_name(),
        ' は自分の顔が真っ赤になっていることにも気づいていなかった。',
      ]);
      await ruby.print_and_wait(
        '驚きと理解できない色に満ちた両目が下腹を見つめ、両手を重ねて微かに開いた唇を軽く押さえた。',
      );
      await ruby.print_and_wait('体が格別に熱く、意識が間欠的に霞む。');
      await ruby.print_and_wait([
        '体内で火が灼けているようで、',
        ruby.get_colored_name(),
        ' は気を失いそうだった。',
      ]);
      await ruby.print_and_wait(
        '鍛えられた四肢が次第に礼を失い、絶頂したように微かに震えていた。',
      );
      await ruby.print_and_wait(
        '外から見れば、震える馬耳、ピンと張った馬尾は、絶頂と区別がつかなかった。',
      );
      await ruby.say_and_wait('ううう……いやですわ');
      await ruby.print_and_wait([
        '体内の熾熱は、',
        callname,
        ' に抱かれて舌を交わしたときと、寸分違わなかった。',
      ]);
      await ruby.print_and_wait([
        ruby.get_colored_name(),
        ' は鏡を見た。両目に水気が溜まり、銀の歯で軽く噛み、苦しむ顔は普段の彼女らしくなかった。',
      ]);
      await ruby.print_and_wait([
        'ほとんど反射で、',
        callname,
        ' との日々を想った。',
      ]);
      await ruby.print_and_wait([
        'ついには、今この瞬間に ',
        callname,
        ' に抱かれて口づけされたら、自分の顔はどうなるだろう、と想像し始めた。',
      ]);
      await ruby.say_and_wait('この渇望は、どうして？');
      await ruby.print_and_wait([
        ruby.get_colored_name(),
        ' は耳がわずかに震えた気がして、手を伸ばして触れた。',
      ]);
      await ruby.print_and_wait([
        '奇妙なことに、本来感じるはずの、',
        callname,
        ' に愛撫されたときの快楽は、まったくなかった。その感覚に ',
        ruby.get_colored_name(),
        ' はわずかに苛立った。',
      ]);
      await ruby.print_and_wait([
        '行き場のない圧が ',
        ruby.get_colored_name(),
        ' の小柄な体の中で押し合い、幼い唇から熱い息が一口また一口漏れた。',
      ]);
      await ruby.say_and_wait(['はあっ、はあっ……', callname, '……どうして……']);
      await ruby.say_and_wait([
        callname,
        '、助けてくださいまし。わたくし、わたくし、あなたしか考えられない……',
      ]);
      await ruby.say_and_wait('あの感じが、ますます強く……どうして……どうして？');
      await ruby.print_and_wait([
        ruby.get_colored_name(),
        ' は小さく息を入れ直し、目がいくらか澄んだ。',
      ]);
      await ruby.print_and_wait([
        'だが体に残る熱と、',
        callname,
        ' の記憶が、まだ彼女を妄念へ誘っていた。',
      ]);
      era.drawLine();
      await era.printAndWait('（トントントン）');
      await ruby.say_and_wait([callname, '、わたくし……わたくしですわ……']);
      await era.printAndWait('——声は少し弱く、喘いでいた。');
      await era.printAndWait([
        '愛馬の声がおかしいと聞き、',
        you.get_colored_name(),
        ' は迷わず扉を開けた。',
      ]);
      await era.printAndWait([
        '目の前の麗人を見定めるより先に、',
        ruby.get_colored_name(),
        ' の体がそのまま ',
        you.get_colored_name(),
        ' の懐へ飛び込んできた。',
      ]);
      await you.say_and_wait('熱い？', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' の両手はルビーの背へ回り、彼女の両脚は弛み、半跪きで全身が ',
        you.get_colored_name(),
        ' の懐に凭れていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の視線は高級なワンピースの半透明な箇所を通り、',
        ruby.get_colored_name(),
        ' の下着へ落ちた。',
      ]);
      await era.printAndWait([
        '掌に感じる熱に、',
        you.get_colored_name(),
        ' は一時、呆然とした。',
      ]);
      await ruby.say_and_wait(['はあっ～はあっ～', callname, '……はあっ……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' の懐に伏せた ',
        ruby.get_colored_name(),
        ' がゆっくり顔を上げ、小さな顔は微かに赤かった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は急いで扉を閉じ、',
        ruby.get_colored_name(),
        ' をソファへ抱き上げ、仰向けに寝かせた。',
      ]);
      await ruby.say_and_wait([callname, '、わたくし、わたくし、熱くて……']);
      await ruby.say_and_wait([
        'お会いしたくて、',
        callname,
        '……わたくし、どうしてだか分からなくて……',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の声は普段の凛々しさではなく、弱く柔かかった。',
      ]);
      await era.printAndWait([
        '水を湛えた両目が ',
        you.get_colored_name(),
        ' を見つめ、尻尾もそっと ',
        you.get_colored_name(),
        ' の太ももに絡んだ。',
      ]);
      await era.printAndWait(
        '彼女は両脚を閉じ、左右に擦り、ソファの上で体を小さく捩った。',
      );
      await era.printAndWait(
        'この言いたげで言い切れない羞じらいを、遊女なら拒みつつ誘う手段と見るだろう。',
      );
      await era.printAndWait([
        'だが彼女は ',
        ruby.get_colored_name(),
        ' だ。生き写しのような発情した雌犬の姿に、',
        you.get_colored_name(),
        ' は少し茫然とした。',
      ]);
      await ruby.say_and_wait([callname, '……頭が、頭がぼんやりしていますわ。']);
      era.printButton(`深く息をして、ルビー。`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の携帯にはすでに老執事の番号が出ていた。それでも ',
        you.get_colored_name(),
        ' はそれを茶卓へ置いたままにした。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の傍らに蹲り、そっと ',
        ruby.get_colored_name(),
        ' の茶黒の髪へ顔を埋め、嗅いだ。',
      ]);
      await era.printAndWait('——雌が発情した気配。');
      await era.printAndWait([
        'ウマ娘が発情するとき特有の、濃くて、恬淡とした清い香りに、',
        you.get_colored_name(),
        ' は一時、酔った。',
      ]);
      await era.printAndWait(
        '水のように清いのに、長く嗅げば墨のように濃いこの匂いは、色恋に長けた者ですら魅了されると聞く。',
      );
      await era.printAndWait([
        '念のため、',
        you.get_colored_name(),
        ' はまず手を ',
        ruby.get_colored_name(),
        ' の額へ当て、体温を測った。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の細めた両目が突然見開き、わずかに色っぽい吐息を漏らした。',
      ]);
      await ruby.say_and_wait('はあっ～んっ～はあっ～');
      await era.printAndWait('——やはり、淫紋か。');
      await ruby.say_and_wait([
        callname,
        '、わたくしはどうしましたの？ 熱くて……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は掌で優しく撫で、',
        ruby.get_colored_name(),
        ' の額にかかった髪を梳いた。指も優しく ',
        ruby.get_colored_name(),
        ' の愛らしい耳を揉んだ。',
      ]);
      await era.printAndWait([
        '心地よさと、',
        you.get_colored_name(),
        ' に触れられている事実が、',
        ruby.get_colored_name(),
        ' の心身をいくらか弛めた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' にとって ',
        ruby.get_colored_name(),
        ' は、味わうのが惜しいほど清い水だ。淫紋は、まさにその一滴の濃い墨だった。',
      ]);
      await era.printAndWait(
        '小さく見える欲が、杯の水をたやすく濁し、沸騰させる。',
      );
      await ruby.say_and_wait([
        'はあっ～はあっ～気持ちいいですわ、',
        callname,
        ' の手……',
      ]);
      await era.printAndWait(['苦笑し、', you.get_colored_name(), '……']);
      era.printButton('蕩けた両目を、優しく閉じる。', 1);
      era.printButton(`「大丈夫だ。怖がるな、ルビー。」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'この無垢で色気のある視線を失ってこそ、',
          you.get_colored_name(),
          ' の心は安らぐらしい。',
        ]);
        await era.printAndWait([
          '柔らかな小さな口はまだ荒く息をし、',
          you.get_colored_name(),
          ' を誘っている。だが ',
          you.get_colored_name(),
          ' はとりあえず耐えられた——少なくとも今は。',
        ]);
        await era.printAndWait([
          '翌朝早く、',
          you.get_colored_name(),
          ' は執事に連絡し、',
          ruby.get_colored_name(),
          ' を邸へ送り届けさせた。',
        ]);
      } else {
        await ruby.say_and_wait([
          callname,
          ' のお顔、苦しそうですわ？ わたくし、ご迷惑をおかけしていますの……',
        ]);
        await era.printAndWait([
          'スカートの裾を摘んでいた小さな手が上がり、',
          you.get_colored_name(),
          ' の顔へ伸び、',
          you.get_colored_name(),
          ' の張りつめた横顔を撫で支えた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の表情は、ますます重くなった……',
        ]);
        era.printButton('「耐えろ。」', 1);
        era.printButton('「耐えねばならない。」', 2);
        era.printButton('「体は正直だ。」', 3);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の柔らかな小さな手が ',
          you.get_colored_name(),
          ' の顔を撫で、一方で ',
          you.get_colored_name(),
          ' の弟分はすでにズボンを突き上げていた。',
        ]);
        await era.printAndWait([
          '彼女は今、',
          you.get_colored_name(),
          ' の表情と気持ちだけを気にかけていて、まだ気づいていなかった。',
        ]);
        await era.printAndWait([
          '歯を食いしばった ',
          you.get_colored_name(),
          ' が淫紋のことを ',
          ruby.get_colored_name(),
          ' にきちんと話そうとしたとき、息が止まった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          ruby.get_colored_name(),
          ' は同時に目を見開き、互いを見た。',
        ]);
        await ruby.say_and_wait(['あっ～！ ふん～あっ！ ', callname, '……！']);
        await ruby.say_and_wait([
          '意識がおかしいですわ、',
          callname,
          '、うああ！——',
        ]);
        await era.printAndWait([
          '下腹の強い刺激に、',
          ruby.get_colored_name(),
          ' は体を反らせてほとんど起き上がり、両手も無意識に体の両側へ突いて体を支えた。',
        ]);
        await era.printAndWait(
          '瞳が揺れ、柔く愛らしい唇が大きく開き、薄紅の香る舌が出た。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' の思考は狂ったように警鐘を鳴らし、面目を失っても医者を呼ぶと決めた。',
        ]);
        await era.printAndWait([
          '手が携帯を掴んだ瞬間、',
          ruby.get_colored_name(),
          ' の起き上がった体が突然傾き、ソファから落ちた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は無意識に体で受け止め、携帯は体に当たって傍らへ落ち、壊れた。',
        ]);
        await era.printAndWait([
          '全身に力のない ',
          ruby.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の胸の前に跪き伏せ、体の中央はちょうど ',
          you.get_colored_name(),
          ' の張り出したテントに支えられていた。',
        ]);
        await era.printAndWait([
          '身長の関係で、彼女の顔はかろうじて ',
          you.get_colored_name(),
          ' の胸の位置に埋もれた。',
        ]);
        await era.printAndWait([
          '茶黒の長い髪が背から滑り落ち、綿のような腕が ',
          you.get_colored_name(),
          ' の胸板を支えていた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' はふらふらと ',
          you.get_colored_name(),
          ' を見た。この仔馬は縮まると、',
          you.get_colored_name(),
          ' の体の半分にも満たない。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は体を伸ばし、顔は微かに赤い。涙を含んだ両目が、どこか哀れだった。',
        ]);
        await era.printAndWait([
          '淫紋の影響で、彼女は今ほとんど体の本能に従い、',
          you.get_colored_name(),
          ' に凭れていた。',
        ]);
        await ruby.say_and_wait(
          'お願いですわ、わたくしを、治していただけますか？',
        );
        await era.printAndWait([
          '小さな舌がわずかに出た ',
          ruby.get_colored_name(),
          ' は、今の自分の顔がどれほど熱く誘うか、まったく知らなかった。',
        ]);
        era.println();
        await era.printAndWait('唇が、死ぬほど密着した。');
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の両手を片手で掴み、頭の上へ上げ、抗えないようにした。',
        ]);
        await era.printAndWait([
          'もう一方の手は空いて、',
          ruby.get_colored_name(),
          ' の背を優しく撫でられた。',
          ruby.get_colored_name(),
          ' の両脚は力なく床を蹴り、快感を紛らわすしかなかった。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の体が甘い喘ぎとともに微かに挺り、無意識に身を預け、',
          you.get_colored_name(),
          ' とより密着したがっているようだった。',
        ]);
        await ruby.say_and_wait(
          [callname, ' の匂い……おかしいですわ、どうしてさらに熱く……'],
          true,
        );
        await ruby.say_and_wait('乱暴ですわ……', true);
        await ruby.say_and_wait(
          'なのに、どうして下腹の煩悶が和らいでいるのです？',
          true,
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' がたまに ',
          ruby.get_colored_name(),
          ' の小さな口を離すたび、彼女ははしたなく大きく息を吸った。',
        ]);
        await era.printAndWait(
          '閉じた両目もゆっくり開き、酸欠と快感でわずかに白んだ明るい紫の瞳を見せた。',
        );
        await era.printAndWait([
          '体が崩れそうに震えるとき、涎が ',
          ruby.get_colored_name(),
          ' の口角を伝い落ちた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の両手を掴んでいた手も少女の背へ回り、片手で背を抱き、片手で尻を抱え上げた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の体が完全に ',
          you.get_colored_name(),
          ' と密着し、今度は ',
          ruby.get_colored_name(),
          ' から進んで ',
          you.get_colored_name(),
          ' の唇に口づけした。',
        ]);
        era.println();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の何度もの力ない喘ぎの中、交わりの音は急な肉体の打ちつけとともに、ぴたりと止まった。',
        ]);
        await era.printAndWait([
          '無論、',
          ruby.get_colored_name(),
          ' の子宮にはまだ ',
          you.get_colored_name(),
          ' が精を注いでいた。',
        ]);
        await era.printAndWait([
          '肉棒を抜いた ',
          you.get_colored_name(),
          ' はベッドの頭に横になり、片手で頭を支えた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が下の愛馬を見下ろす目には、これまでなかった傲りがあった。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は目の前の肉棒にこれほど夢中だった。この頼もしい一幕を眺め、',
          you.get_colored_name(),
          ' は手を伸ばして ',
          ruby.get_colored_name(),
          ' の頭を撫でた。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] shame
  shame: (() => {
    const title = '恥じらう少女';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は震える両手で、服の釦を外した。',
      ]);
      await era.printAndWait(
        '彼女が脱いだのは服だけではない。最後の尊厳でもあった。',
      );
      await era.printAndWait(
        '華美な洋装が、小さな手の巧みな解きで床へ滑り落ちた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の下半身の曲線が余すところなく現れ、綺麗なふくらはぎは長く細い。脱ぎかけの姿がいっそう想像を誘った。',
      ]);
      era.printButton('声をかけて促す', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の迷う小さな手が、残った武装を解き始めた。',
      ]);
      await era.printAndWait(
        '最後には、頭の赤い蝶結びと、脚の白いストッキング以外、覆い隠すものは何も残らなかった。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の手は防御の本能で、なお必死に三点を守っていた。',
      ]);
      era.printButton('手をどけるよう命じる', 1);
      await era.input();
      await era.printAndWait('少し躊躇したあと、彼女は仕方なく両手を開いた。');
      await era.printAndWait([
        '小さな顔は羞恥で真っ赤になり、顔を背けて ',
        you.get_colored_name(),
        ' と目を合わせなくなった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は愛馬の、ほとんど絶妙な美しい体を眺め始めた。',
      ]);
      await era.printAndWait('肌は白く、高級な絹のように滑らかだった。');
      await era.printAndWait(
        '胸の一対の白い兎は今にも跳ね出しそうで、大きくはないが扁平でもなく、半開きの青臭い花弁のようだった。',
      );
      await era.printAndWait(
        '下腹は潤んで白く、まだ野草に侵されていなかった。',
      );
      await era.printAndWait(
        'わずかに隆起した恥丘は完璧な形を見せ、淡い桃色の細い縫で二つに分かれていた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の懐に座り、球のように縮んだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が目の前の小柄な体に触れると、愛馬が緊張で震え、肌に鳥肌が立つのが分かった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は分かっていた。今の ',
        ruby.get_colored_name(),
        ' は、捕まったばかりでまだ馴れていない野猫だ。急げば驚かせてしまう。',
      ]);
      era.printButton('抱きしめる', 1);
      era.printButton('寝室へ連れて寝かせる', 2);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] take_shower
  take_shower: (() => {
    const title = '湯上がりの美人';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait([
        '深夜に帰宅すると、',
        you.get_colored_name(),
        ' はちょうど ',
        ruby.get_colored_name(),
        ' が風呂を終えて出てくるところに出くわした。',
      ]);
      await era.printAndWait('全身から香る熱気が立ち、長い髪が絡まっていた。');
      era.printButton('抱きしめて愛撫する。', 1);
      era.printButton('居間へ連れて調教する。', 2);
      await era.input();
      await ruby.say_and_wait([callname, '、いけませんわ……']);
      await era.printAndWait([you.get_colored_name(), ' は怒ったふりをした。']);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は様子が違うと察し、すぐ言い直した。',
      ]);
      await ruby.say_and_wait(
        'あなた、そんなことなさらないで。今、洗い上がったばかりですわ。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は問答無用で、唇を重ねた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は発情した犬のように、',
        ruby.get_colored_name(),
        ' の体の香りを嗅ぎ回った。',
      ]);
      era.printButton('首を軽く噛む。', 1);
      era.printButton('太ももの内側を撫でる。', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は驚き、両脚が本能で閉じた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        ruby.get_colored_name(),
        ' の震える耳を軽く噛むと、効いたらしく、',
        ruby.get_colored_name(),
        ' の太ももの筋がかなり弛んだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は飾らず、まっすぐ進んだ。',
      ]);
      await era.printAndWait([
        '指が ',
        ruby.get_colored_name(),
        ' の白い下着の外を遊弋し、すぐ陰阜の完璧な形を撫で取った。',
      ]);
      await era.printAndWait(
        '隙間から入ったあと、その薄紅の一帯の外を往復して撫でた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は愛らしい顔を真っ赤にし、歯を強く噛んだ。',
      ]);
      await you.say_and_wait('感じるか？');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は我慢できず小さく声を上げ、喘ぎが強くなり始めた。',
      ]);
      await you.say_and_wait('おや？ 自分でも、こんなことをしたのか？');
      await ruby.say_and_wait('根拠のないことを仰らないでくださいまし。');
      await era.printAndWait('その口調は、少し怒っているように聞こえた。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は口づけしながら愛撫し、両手で攻めた。',
      ]);
      await era.printAndWait(
        '体は正直だ。やがて、閉じていた入口から細い流れが溢れた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の愛らしく清楚な顔は潮紅で微かな熱を帯び、着替えた寝巻きも大半が濡れた。',
      ]);
      era.printButton('彼女と二度目の風呂へ行く。', 1);
      era.printButton('掌を高く上げ、上の粘い体液を見せる。', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は我慢できず、',
        you.get_colored_name(),
        ' の肩に伏せて、すすり泣き始めた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
