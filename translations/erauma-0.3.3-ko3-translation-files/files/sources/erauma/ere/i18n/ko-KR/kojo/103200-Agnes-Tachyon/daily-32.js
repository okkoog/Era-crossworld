// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file アグネスタキオン - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（改訂）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { degeneration_to_evil } = require("#/i18n/ko-KR/snippets");

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/daily-32.js');

module.exports = {
  ...__JaOriginal,
  good_morning(tachyon) {
    tachyon.say(
      "왔는가, 그럼 온 김에 문 앞에 있는 쓰레기 봉투 세 개 좀 버려주게…… 실험을 돕겠다고? 자네가 필요해지면 자연스럽게 부를 테니 걱정 말게.",
    );
    era.print([tachyon.get_colored_name(), "은 실험으로 한창 바쁜 모양이었다."]);
  },
  // [번역 완료] office_prepare
  async office_prepare(tachyon, callname) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        "준비? 준비는 약자나 하는 것이네, ",
        callname,
        ". 자네는 사자가 훈련하는 걸 본 적이 있는가?",
      ]);
    } else {
      await tachyon.say_and_wait(
        '에이, 왜 굳이 레이스 전에 준비를 해야 하는 거지? 레이스도 시험처럼 평소의 실력을 측정하는 것 아닌가……',
      );
      await tachyon.say_and_wait(
        '설마 자네, 시험 직전에야 벼락치기를 해서 낙제를 면하길 바라는 그런 부류인가?',
      );
    }
  },
  // [번역 완료] office_rest
  async office_rest(tachyon, you, callname) {
    if (era.get('cflag:32:干劲') === -2) {
      await tachyon.say_and_wait("나에게 휴식은 필요 없네.");
      await era.printAndWait([
        '누가 봐도 상태가 좋지 않은 ',
        tachyon.get_colored_name(),
        '은(는) 애써 강한 척하며 그렇게 말했다.',
      ]);
      await tachyon.say_and_wait(
        '할 수 있는 일도, 해야 할 일도 산더미인데 어떻게 쉴 수 있겠는가……',
      );
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 실험대 앞을 떠나지 않는 ',
          tachyon.get_colored_name(),
          '을(를) 뒤에서 끌어안았다.',
        ]);
        await era.printAndWait([tachyon.sex, '의 몸이 작게 떨렸다.']);
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 미인계라도 소용없네.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 실험대에 계속 앉아 있는 ',
          tachyon.sex,
          '을(를) 억지로 일으켜 세웠다.',
        ]);
      }
    } else {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            '피곤하군, ',
            callname,
            '. 홍차를 끓여 오게.',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            '은(는) 직접 우린 홍차를 마시며 ',
            tachyon.get_colored_name(),
            '와 함께 소파에서 느긋한 오후를 보냈다.',
          ]),
        async () => {
          await tachyon.say_and_wait('한가하군.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 일상에 대해 그런 감상을 내뱉었다.',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },

  // [번역 완료] end_talk
  async end_talk(tachyon, callname, hentai, has_plan, plan_b) {
    if (hentai) {
      if (
        !has_plan &&
        era.get('love:32') < 75 &&
        era.get('cflag:32:育成次数') === 0
      ) {
        await tachyon.say_and_wait(
          '그런 육체적인 일에만 집착하는 건가? 시시한 이유로군…… 그래도 다음에 또 무언가 하려거든 나를 찾아오게. 그 눈동자를 봐서라도 말이지.',
        );
      } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
        if (!plan_b) {
          await tachyon.say_and_wait(
            '가능성 너머를 향하는 꿈조차 자네의 시야를 채우지 못하는 건가? 바보가 아니라면 전대미문의 야심가겠군.',
          );
        } else {
          await tachyon.say_and_wait([
            '꿈이 무너진 뒤 자포자기하는 건가? 아니면 앞날을 잃은 ',
            tachyon.uma_sex_title,
            '로부터 도망치기 위한 핑계인가?',
          ]);
        }
      } else if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait([
          '미안하네, ',
          callname,
          '. 조금 지나치게 장난친 모양이군…… 다음에는 좀 더 신중하게 하세.',
        ]);
      } else if (era.get('cflag:32:育成次数') > 0) {
        await tachyon.say_and_wait([
          '이런, 이번에는 너무 지나쳤군, ',
          callname,
          '……다음에는 조심하게.',
        ]);
      }
    } else if (
      !has_plan &&
      era.get('love:32') < 75 &&
      era.get('cflag:32:育成次数') === 0
    ) {
      await tachyon.say_and_wait(
        '재미없는 모르모트로군…… 그래도 다음에 또 무언가 하려거든 나를 찾아오게. 그 눈동자를 봐서라도 말이지.',
      );
    } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
      if (!plan_b) {
        await tachyon.say_and_wait(
          '나를 이 길로 이끌어 놓고 혼자 떠나는 건가? 한계 너머로 향하는 길은 결국 혼자 걸어야 하는 길이었군.',
        );
      } else {
        await tachyon.say_and_wait([
          '교훈으로 삼게. 다음에는 쓸데없는 사람에게 집착하지 말도록……',
          tachyon.sex,
          '의 미래는 자네 몫까지 내가 지켜보겠네.',
        ]);
      }
    } else if (era.get('love:32') >= 75) {
      await tachyon.say_and_wait(
        '이 실험이 끝나면 자네를 찾아가겠네. 그때까지는 내가 주는 긴 휴가라고 생각하게.',
      );
    } else if (era.get('cflag:32:育成次数') > 0) {
      await tachyon.say_and_wait([
        '이런, 이번에는 너무 지나쳤군, ',
        callname,
        '……다음에는 조심하게.',
      ]);
    }
  },

  // [번역 대상] event_atrium_evil
  async event_atrium_evil(tachyon, you, callname) {
    await you.say_and_wait('タキオン———？');
    era.println();
    await era.printAndWait([
      '今日は朝から、なぜか ',
      tachyon.get_colored_name(),
      ' の姿がない。',
    ]);
    await era.printAndWait([
      'いつも研究に没頭している',
      tachyon.sex,
      'が、どこへ行ったのかわからない。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は学園を探し回り、通りがかりの生徒から',
      tachyon.sex,
      'が枯れた樹洞のそばにいると聞いた。',
    ]);
    await era.printAndWait([
      '樹洞……',
      tachyon.sex,
      'にも、吐きたい悩みがあるのか？',
    ]);
    await era.printAndWait('トレーナーとして機嫌が読めないのは、失職ものだ。');
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      ' は中庭へ来た。授業時間なので人は少なく、人がいないのを見計らって気持ちを吐く',
      tachyon.uma_sex_title,
      'が数人いるだけだった。',
    ]);
    await era.printAndWait([
      '人通りが少ないからこそ、',
      you.get_colored_name(),
      ' は「あれ」を目撃した。',
    ]);
    await era.printAndWait([
      tachyon.uma_sex_title,
      'へ近づき、',
      tachyon.couple_title,
      'の心の弱いところを突く黒い影。',
    ]);
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      'うわあああ！ 私は弱い……なぜ、どうしても勝てない……！',
    );
    await tachyon.say_as_unknown_and_wait('力を……欲しいですの？');
    await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, '……力？');
    await tachyon.say_as_unknown_and_wait('誰より強くなり、全員に勝つ力……');
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '……ほ、本当ですか？ 対価は？',
    );
    await tachyon.say_as_unknown_and_wait(
      'ふふふ……知りたいなら、旧理科実験室へいらっしゃい……',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      'なぜ……告白する勇気が出ない……あの鈍感……ここまでして、まだわからないなんて……！',
    );
    await tachyon.say_as_unknown_and_wait(
      '本心を素直に伝えたいですの？ 口に出さなくても、相手に気持ちを悟られたいですの？',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      'あ、あなたは……！',
    );
    await tachyon.say_as_unknown_and_wait(
      '旧理科実験室へ。欲しいものは、全部手に入りますわ……',
    );
    await you.say_and_wait('……あいつ、何をしてる', true);
    await era.printAndWait([
      '枯れた樹洞のそばで、人を惑わす悪魔のように囁き続けているのは、間違いなく ',
      you.get_colored_name(),
      ' の担当',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      'は悩みを樹洞に吐く者たちの前に現れ、堕落を誘う言葉を紡ぐ。神話の悪魔そのものだった',
    ]);
    await era.printAndWait([
      'そのときの',
      tachyon.sex,
      'は ',
      you.get_colored_name(),
      ' にも気づいた',
    ]);
    await tachyon.say_and_wait([
      callname,
      '、丁度いいわ。客を迎える準備をしましょう',
    ]);
    await you.say_and_wait('客？');
    await tachyon.say_and_wait([
      'もちろん、あの困っている',
      tachyon.uma_sex_title,
      'たちですわ。',
    ]);
    await tachyon.say_and_wait(
      'まあ、以前の私は失礼でしたわね。樹洞など不要だと思っていたのですもの。',
    );
    await tachyon.say_and_wait([
      '今思えば、心の意志が弱い',
      tachyon.uma_sex_title,
      'を自ら選別してくれる、私にぴったりな場所ではありませんか。',
    ]);
    await era.printAndWait('意志が弱いからこそ、外からの誘導で気持ちを吐く。');
    await era.printAndWait([
      '意志が弱いからこそ、目的のためなら魂を悪（タキ）魔（オン）に売りやすい。',
    ]);
    await era.printAndWait([
      'ある意味、不逞の輩から見れば、ここに来る',
      tachyon.uma_sex_title,
      'はいちばん狙われやすい、無垢な子たちだ。',
    ]);
    await era.printAndWait([
      'ただ、',
      tachyon.get_colored_name(),
      ' なら',
      tachyon.couple_title,
      'を傷つけはしない……だろうか？',
    ]);
    await tachyon.say_and_wait([
      'それはそれとして、',
      callname,
      '、急ぎましょう。',
    ]);
    await era.printAndWait(
      '急にどうした……良心が疼いた、ということはあるまい。',
    );
    await tachyon.say_and_wait(
      'あなたに見つかったということは、生徒会の連中もすぐ来るでしょう。説教される前に、行きなさい！',
    );
    await era.printAndWait([
      '…………たまには',
      tachyon.sex,
      'を説教に捕まらせてもいいかもしれない',
    ]);
  },

  // [번역 대상] event_church
  event_church: (() => {
    const title = '神捕捉作戦';
    /**
     * 日常ランダム - 神社で猫を捕まえる
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '今日、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' と神社へ向かう途中……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！ 早く！ 『神さま』を待たせてはいけませんわ！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は興奮して神社の石段を駆け上がり、振り返って呼んだ',
      ]);
      await era.printAndWait([
        '人間の身で',
        tachyon.uma_sex_title,
        'に追いつける可能性はさておき、物理的に不可能なうえ、',
      ]);
      await era.printAndWait([
        '精神的にも ',
        you.get_colored_name(),
        ' はこの先の行為を死ぬほど拒みたかった。だが愛馬の我儘に、',
        you.get_colored_name(),
        ' は苦笑しながらついていくしかなかった',
      ]);
      era.println();
      await era.printAndWait('発端は……複雑に聞こえて、実は単純だ');
      await era.printAndWait('一言で言えば');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、知っていますわね。私は魂だ鬼神だといったものの存在を、もともと信じていません',
      ]);
      await tachyon.say_and_wait(
        'ですが、確認もせずに否定するのは研究者の態度ではありませんわ',
      );
      await you.say_and_wait('うんうん');
      await tachyon.say_and_wait(
        'ではどう検証するか。実は昔から、こんな説がありますわ',
      );
      await tachyon.say_and_wait(
        'いわゆる鬼神とは、自然界に遊離したエネルギー塊にすぎない',
      );
      await tachyon.say_and_wait(
        '偏った言い方ではありますが、これを基に検証はできますわ',
      );
      await you.say_and_wait('うんうん');
      era.println();
      await tachyon.say_and_wait(
        'ですから、かくかくしかじか、神社へ行って神を捕まえましょう！',
      );
      await you.say_and_wait('うん……うん？');
      era.println();
      await era.printAndWait(
        'もし一般の人間には感知も察知もできないものが本当にいるなら、',
      );
      await era.printAndWait('その存在自体にもエネルギーが要る');
      await era.printAndWait(
        'だからまず、異常なエネルギー消費を探知できる場所を基準に選ぶ、',
      );
      await era.printAndWait('だが都市内は雑音が多すぎる');
      await era.printAndWait('それに比べれば、探るなら辺鄙な神社が一番だ');
      await era.printAndWait(
        'それに、神と呼ぶ以上、エネルギーの階位は普通の幽霊とは違うはずで、',
      );
      await era.printAndWait(
        '神社でさえいわゆる神が捕まえられないなら、そんなものは存在しないと見ていい………',
      );
      era.println();
      await era.printAndWait('要するに、おおむねこんな不敬な理由から');
      await era.printAndWait(['二人は今日、人通りのない辺鄙な神社へ来た']);
      await you.say_and_wait(
        '南無三、三女神さまはどうか寛大に、こんな小事は気になさらず、どうかお願い、南無阿弥陀仏、アーメン',
        true,
      );
      era.println();
      await era.printAndWait([
        '気が進まないまま、',
        you.get_colored_name(),
        ' はどうにか神社まで登った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の死ぬ気の懇願で、',
        tachyon.get_colored_name(),
        ' は不承不承、',
        tachyon.sex,
        'の妙なエネルギー探知機を使う前に、一度参拝して敬意を示すと約束した',
      ]);
      era.println();
      await era.printAndWait(['こうして二人は手を合わせ、社へ拝んだ……']);
      await tachyon.say_and_wait(
        'よろしい！ では前置きは終わり、始めましょう……',
      );
      era.println();
      await era.printAndWait([
        '参拝が終わった瞬間、',
        tachyon.get_colored_name(),
        ' は脇に置いていたエネルギー探知機を取り上げ、社の方向へ向けて測り始めた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は苦笑しながら傍で、神さまはどうか子供の悪戯を大目に見てくださいと祈った',
      ]);
      era.println();
      if (Math.random() < 0.5) {
        await tachyon.say_and_wait([
          'ええ……ええ……！ 待ちなさい！',
          callname,
          '！ ここを見て、何かあるようですわ………',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の呼び声に慌てて駆け寄ったが、',
          tachyon.sex,
          'はある一点を捉えたあと、いきなり動かなくなっていた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が急いで肩を叩いて無事を確かめると、',
          tachyon.sex,
          'はいきなり ',
          you.get_colored_name(),
          ' を地面に押し倒した',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の両手を地に押さえ、',
          you.get_colored_name(),
          ' は仰向けのまま、自分の上に乗る ',
          tachyon.get_colored_name(),
          ' を見た',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'の目は冷たいのに、その奥には熱が隠れていそうだった',
        ]);
        await era.printAndWait(
          '獲物を捕まえて、これから喰らい始める猫科のようだ',
        );
        era.println();
        await you.say_and_wait(
          [
            'これで本当に天罰か……いや、天罰を食らうのが俺で',
            tachyon.sex,
            'じゃないのはなぜだ！？',
          ],
          true,
        );
        era.println();
        await era.printAndWait(
          '言いたいことはいくらでもあったが、無力な諦めに沈んだ',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' はただ、',
          tachyon.sex,
          'の次の動きを見守るしかなかった',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' が抵抗の意志を失ったと確認すると、',
          tachyon.sex,
          'は片手を離し、',
          you.get_colored_name(),
          ' のシャツを解き始めた',
        ]);
        era.println();
        await you.say_and_wait('ああ、これでトレーナー失格だな', true);
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の上着を開き、そして……',
        ]);
        era.println();
        await tachyon.say_and_wait('にゃ～～～');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は子猫みたいな声を出し、猫のように ',
          you.get_colored_name(),
          ' の懐へ潜り込んで、気持ちよさそうに喉を鳴らした',
        ]);
        await era.printAndWait([
          'もちろん、動きがどれだけ猫でも、',
          tachyon.sex,
          'の体が',
          tachyon.uma_sex_title,
          'の体だという事実は変わらない',
        ]);
        await era.printAndWait([
          '子猫みたいにシャツへ潜りたいつもりでも、',
          you.get_colored_name(),
          ' の目には、',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'のやっていることは、上着を開いたあと ',
          you.get_colored_name(),
          ' の裸の胸板に寝そべって擦り寄ることだった',
        ]);
        era.println();
        await tachyon.say_and_wait('にゃ～～にゃぁ～にゃ');
        era.println();
        await era.printAndWait([
          'その触れ方に少し不満そうで、',
          tachyon.sex,
          'はやり方を変え、',
          you.get_colored_name(),
          ' の両手を引き上げ、',
          you.get_colored_name(),
          ' の両手を',
          tachyon.sex,
          'のお腹の上で重ねた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は隙を見て起き上がろうとしたが、動きを察したあとに圧し掛かる重みで、また動けなくなった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はただ、',
          tachyon.sex,
          'に手を抱擁の形へ組み替えられるままにした',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の手を固定するとくるりと向きを変え、頬を ',
          you.get_colored_name(),
          ' の胸にぴたりとつけて、満足そうな声を出した',
        ]);
        era.printButton('「……タキオン？」', 1);
        await era.input();
        await era.printAndWait([
          '子猫は答えず、やがて',
          tachyon.sex,
          'の呼吸は穏やかになり、そして……',
        ]);
        era.println();
        await tachyon.say_and_wait('zzz……にゃ……zzz……');
        era.println();
        await era.printAndWait([
          'そうして ',
          you.get_colored_name(),
          ' の胸の上で眠ってしまった',
        ]);
        await era.printAndWait([
          '今なら ',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'を振りほどけるが……',
        ]);
        era.println();
        await era.printAndWait([
          '今の ',
          tachyon.get_colored_name(),
          ' の様子は、明らかに普通ではない',
        ]);
        await era.printAndWait('だが、ここまで振り回されたのだ');
        await era.printAndWait(
          '眠っている今、少しばかり埋め合わせをもらっても、いいだろう？',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'を抱く腕をそっと緩め、片手を上へ伸ばした…………',
        ]);
        era.println();
        await era.printAndWait([
          '柔らかい、気持ちいい……なるほど、これが',
          tachyon.uma_sex_title,
          'の………',
        ]);
        era.println();
        await era.printAndWait('耳か');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は子猫の頭を優しく撫で、ときどき頭頂から垂れた耳を揉んだ。柔らかくて弾力のあるふわふわに、つい何度も触ってしまう',
        ]);
        era.println();
        await tachyon.say_and_wait('にゃぁ……ごろごろ……にゃにゃ');
        era.println();
        await era.printAndWait([
          '夢の中の子猫も可愛い声を出し、',
          you.get_colored_name(),
          ' の手を促すようだった',
        ]);
        await era.printAndWait('まずいな……このふわふわに……沈みそうだ………');
        era.println();
        await era.printAndWait([
          'いつの間にか、',
          you.get_colored_name(),
          ' も夢の中へ落ちた…………',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'あああああ！！！ 私の装置があああああ！！！',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は悲鳴を上げる ',
          tachyon.get_colored_name(),
          ' を見て、苦笑した',
        ]);
        await era.printAndWait([
          'さっき何が起きたのかは分からない。二人は神社で突然気を失い、再び目を覚ましたとき ',
          tachyon.get_colored_name(),
          ' は、',
          tachyon.sex,
          'が高額（らしい）で買った装置が動かなくなっていることに気づいた',
        ]);
        await era.printAndWait(
          '妙なことに、二人の記憶は参拝の瞬間で止まっており、そのあと何があったかはまったく思い出せない',
        );
        await era.printAndWait([
          'だがなぜか、',
          you.get_colored_name(),
          ' は体がすっきりしていて、気を失う前に何かストレスを発散したような気がした',
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          ' は、目を覚ましたとき上着のボタンが全部外れていたことを思い出した。気を失う前に、いったい何があったのだろう',
        ]);
        await era.printAndWait(
          '……やはり、鬼神の類は多少信じておいた方がいいな',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を連れて神社を離れた',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は、',
          tachyon.sex,
          'が探知機を持って神社の中をつついているのを見ていた。これで効き目があるのかどうかも分からない',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('…………やはり、何もありませんわ');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はがっかりした顔で言った',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' にも、',
          tachyon.sex,
          'がなぜそこまで落ち込むのか分からない。鬼神がいないと証明できたのは、',
          tachyon.sex,
          'にとって良いことではないのか？',
        ]);
        await era.printAndWait([
          '訳も分からないまま、二人はそのまま山を下りて帰った',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] event_river
  async event_river(tachyon, coffee, bakushin, urara, pocket, you, callname) {
    await tachyon.say_and_wait([callname, '! 봐! 오리야!']);
    await tachyon.say_and_wait('그리고 저것도! 나비야!');
    await tachyon.say_and_wait('여기 풍경 정말 예뻐!');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 기가 막히다는 듯 제방을 뛰어다니는 ',
      tachyon.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await era.printAndWait([
      '천진난만한 표정은 ',
      tachyon.get_colored_name(),
      '라기보다 ',
      urara,
      '나 ',
      bakushin,
      '들의 ',
      tachyon.uma_sex_title,
      '에 가까웠다. 눈동자에 드리운 그늘마저 벚꽃잎으로 바뀐 듯했다.',
    ]);

    await era.printAndWait([
      '발단은 여느 때처럼 ',
      tachyon.get_colored_name(),
      '의 약이었다.',
    ]);
    await tachyon.say_and_wait('지능을 낮추고 속도를 높이는 약일세.');
    await era.printAndWait([
      '도저히 수지가 맞지 않는 약처럼 들리지만 ',
      tachyon.get_colored_name(),
      '은(는) 망설임 없이 마셨다.',
    ]);
    await era.printAndWait([
      '結果、',
      tachyon.get_colored_name(),
      '은(는) ',
      coffee,
      '와 ',
      pocket,
      '들과 벌인 모의 레이스에서 가볍게 이겼다. 하지만 그 대가는……',
    ]);
    await tachyon.say_and_wait([
      callname,
      callname,
      '! 봐! 달팽이, 느리다!',
    ]);
    await era.printAndWait([
      '뭐, 뇌를 쉬게 하는 행위라고 할 수도 있겠지.',
      you.get_colored_name(),
      '은(는) 지금 지나치게 천진난만해진 ',
      tachyon.sex,
      '이(가) 사고를 당하거나…… 혹은 속임수에 넘어가지 않도록 ',
      tachyon.get_colored_name(),
      '에게서 눈을 떼지 않았다.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '온종일 놀고 나서야 ',
      tachyon.get_colored_name(),
      '도 피곤해졌는지 걸음이 비틀거렸다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) ',
      you.get_colored_name(),
      '을(를) 향해 두 팔을 뻗었다.',
    ]);
    await tachyon.say_and_wait([callname, '~~업어 줘~~']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 온종일 정신없이 놀았던 초고속 ',
      tachyon.sex_code - 1 ? '공주님' : '왕자님',
      '을(를) 등에 업었다. 정말 피곤했는지 ',
      you.get_colored_name(),
      '의 등에 올라탄 순간 이미 잠들어 있었다.',
    ]);
    await era.printAndWait('나도 오늘 하루 충분히 피곤해졌군. 돌아가면 쉬어야겠다.');
    await tachyon.say_and_wait([callname, '……고마워……']);
    await you.say_and_wait('……');
    await era.printAndWait('가끔은 이런 하루도 나쁘지 않을지도 모른다.');
  },

  // [번역 완료] event_rooftop_a
  async event_rooftop_a(tachyon, you, callname) {
    await tachyon.say_and_wait('흥흥흥~~');
    await era.printAndWait([
      '오늘도 ',
      you.get_colored_name(),
      '은(는) 도시락을 챙겨 ',
      tachyon.get_colored_name(),
      '와 함께 옥상에서 점심을 먹었다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 산들바람을 맞으며 기분 좋게 도시락의 닭튀김을 집어 들었다.',
    ]);
    await era.printAndWait('그 순간 산들바람이 순식간에 거센 바람으로 바뀌었다.');
    await tachyon.say_and_wait('아.');
    await era.printAndWait('젓가락으로 집었던 닭튀김이 강해진 바람에 바닥으로 떨어졌다.');
    await era.printAndWait('아아…… 아깝군.');
    await era.printAndWait('하지만 괜찮네. 도시락에는 아직……');
    await era.printAndWait([
      '바로 그때 ',
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '이(가) 바닥에 떨어진 닭튀김을 그대로 집어 드는 것을 보았다.',
    ]);
    await tachyon.say_and_wait('그럼 잘 먹겠네——');
    era.printButton('「잠깐!?」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '음? 무슨 문제라도 있나, ',
      callname,
      '? 3초 법칙도 모르는 건가?',
    ]);
    await era.printAndWait([
      '아니, ',
      tachyon.get_colored_name(),
      '이(가) 그런 근거 없는 3초 법칙을 믿는 건 둘째 치고, 지금은 명백히 3초가 지났잖아!?',
    ]);
    await tachyon.say_and_wait([
      '……하아, ',
      callname,
      '. 과학적으로 말하자면 ',
      tachyon.uma_sex_title,
      '의 위장은 그런 일로 탈이 날 만큼 연약하지 않네.',
    ]);
    await you.say_and_wait('그런 문제가 아니잖아!?');
    await tachyon.say_and_wait('어쨌든 난 닭튀김을 먹겠네!');
    await you.say_and_wait('도시락에 더 있잖아!?');
    await era.printAndWait([
      you.get_colored_name(),
      '의 완강한 만류 덕분에 ',
      tachyon.get_colored_name(),
      '이(가) 바닥에 떨어진 닭튀김을 먹는 일은 막을 수 있었다.',
    ]);
    await era.printAndWait([
      '그 대가로 오후 내내 ',
      tachyon.sex,
      '은(는) 원망스러운 눈으로 ',
      you.get_colored_name(),
      '을(를) 쳐다보았다.',
    ]);
    await era.printAndWait([
      '밤에 잠들어서도 ',
      you.get_colored_name(),
      '의 귓가에는 ',
      tachyon.get_colored_name(),
      '의 원망 어린 비명이 남아 있었다.',
    ]);
    await tachyon.say_and_wait('내 닭튀김……');
    await you.say_and_wait(
      ['……내일 또 ', tachyon.sex, '에게 닭튀김을 만들어 줘야겠군.'],
      true,
    );
  },

  // [번역 완료] event_rooftop_b
  async event_rooftop_b(tachyon, coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '을(를) 옥상으로 데려가 도시락을 먹으며 기분을 전환하려 했다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 기쁜 듯 ',
      you.get_colored_name(),
      '이(가) 들려주는 최근 ',
      coffee.get_colored_name(),
      '의 훈련 변화를 들으며 때때로 자기 생각을 덧붙였다.',
    ]);
    await era.printAndWait('그 과정에서 정작 자신의 이야기는 한 번도 나오지 않았다.');
    await era.printAndWait([
      '훈련에 나설 수 없는 ',
      tachyon.sex,
      '은(는) 아무리 시간을 내어 곁에 있어도 다른 ',
      tachyon.uma_sex_title,
      '의 훈련이 진행되는 동안에는 떨어져 있어야 했다.',
    ]);
    await tachyon.say_and_wait(['최근 ', tachyon.sex, '은(는) 어떤가?']);
    era.printButton('「……」', 1);
    era.printButton('「……자네는? 요즘은 어떻게 지내고 있나?」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        coffee.get_colored_name(),
        '에 대한 이야기가 끝나자 갑자기 침묵이 흘렀고, 식사도 곧 끝났다.',
      ]);
    } else {
      await tachyon.say_and_wait(
        '나? ……뭐, 그럭저럭일세. 별다른 일은 없네.',
      );
      await era.printAndWait([tachyon.sex, '은(는) 심드렁하게 대답했다.']);
      await era.printAndWait([
        tachyon.sex,
        '와(과) 오랫동안 지낸 ',
        you.get_colored_name(),
        '은(는) 알 수 있었다.',
        tachyon.sex,
        '은(는) 말을 얼버무리는 것이 아니라 자신의 일상에는 정말로 할 말이 없다고 생각하고 있었다.',
      ]);
      await era.printAndWait([
        '그런 생각을 하니 ',
        you.get_colored_name(),
        '은(는) 가슴이 아팠다.',
      ]);
    }
  },

  // [번역 대상] event_station
  event_station: (() => {
    const title = 'ネタバラシ';
    /**
     * 日常ランダムイベント - 駅前デートでネタバラシ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '今日は ',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' が一緒に出かけてデートする日だ',
      ]);
      await era.printAndWait([
        '今日の商店街ではマジックのパレードがあるらしい。だから、ついでに',
        tachyon.sex,
        'を連れて賑わいを見せようと思っていた',
      ]);
      await era.printAndWait('ところが……');
      era.println();
      await tachyon.say_and_wait('あのマジック棒は袖の中ですわ');
      await tachyon.say_and_wait(
        'あの鳩は最初から挟みに隠してあるだけ、大したことありませんわ',
      );
      await tachyon.say_and_wait(
        'マグネシウムの酸化燃焼ですわ。研究室でも見せてあげられますわよ',
      );
      era.println();
      await era.printAndWait([
        '手品の種は毎回、',
        tachyon.get_colored_name(),
        ' が大きすぎず小さすぎず、周囲に聞こえる声量で即座に暴いてしまう',
      ]);
      await era.printAndWait([
        '飽きたならまだしも、言い終わるたび熱い目で ',
        you.get_colored_name(),
        ' を見つめて、褒められたいみたいだ',
      ]);
      await era.printAndWait([
        '褒められたがりの子犬か……',
        you.get_colored_name(),
        ' は頭に浮かんだ絵を振り払った',
      ]);
      await era.printAndWait([
        'とにかく、二人を睨んでいるマジシャンが堪忍袋の緒を切って舞台から降りて殴りかかる前に、',
        tachyon.get_colored_name(),
        ' を連れて離れよう',
      ]);
      era.println();
      await tachyon.say_and_wait('え～～もう行くんですの？');
      era.println();
      await era.printAndWait([
        'だが、',
        tachyon.get_colored_name(),
        ' はまだ不満そうだった',
      ]);
      await era.printAndWait([tachyon.sex, 'の気をそらすものが要る……あった！']);
      era.printButton('「変色野菜ジュース？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は驚いたふりをして屋台の目玉商品を読み上げ、',
        tachyon.get_colored_name(),
        ' の気をそらそうとした',
      ]);
      await era.printAndWait(
        '店主が手の紫の液体をカップへ注ぐと、液体は一瞬で赤になった',
      );
      await era.printAndWait(
        '……中学の教科書の、酸塩基反応の紫キャベツ汁じゃないか',
      );
      await era.printAndWait([
        'もういい。',
        tachyon.get_colored_name(),
        ' の気を引くためなら、少し演技するしかない',
      ]);
      era.printButton('「すごいな、あれ！」', 1);
      await era.input();
      await era.printAndWait([
        '案の定、',
        you.get_colored_name(),
        ' の大げさな声は、',
        tachyon.get_colored_name(),
        ' を手品から引き戻した',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はキャベツ汁が色を変える様子を見つめ、何か考えているようだった',
      ]);
      await era.printAndWait([
        'おかしいな。',
        tachyon.get_colored_name(),
        ' は見たことがないのか？',
      ]);
      await era.printAndWait([
        '……いや、さすがにそれはないだろう。もっとも基礎的な酸塩基指示薬だ。',
        tachyon.get_colored_name(),
        ' が知らないはずがない',
      ]);
      await era.printAndWait([
        'だがもし、',
        tachyon.sex,
        'が本当に触れたことがないなら……',
      ]);
      era.printButton('「なんだか不思議……だな？」', 1);
      await era.input();
      await era.printAndWait('だめだ。褒める言葉がもう出てこない');
      await era.printAndWait([
        'だが ',
        tachyon.get_colored_name(),
        ' の意識は、もう完全にこちらへ移っている',
      ]);
      await era.printAndWait('これなら問題ないはず……');
      era.println();
      await tachyon.say_and_wait('…………こんなもの');
      era.println();
      await era.printAndWait('え');
      era.println();
      await tachyon.say_and_wait(
        '…………こんなものを褒めるくらいなら、私を褒めてくれないんですの？',
      );
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' は怒った']);
      await era.printAndWait([
        '理由は分からないが、',
        tachyon.get_colored_name(),
        ' は明らかに怒っている',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'もっと色の多い薬だって、光る薬だって、私なら作れるのに……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はわけもなく泣いた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて',
        tachyon.sex,
        'を慰めるしかなかった',
      ]);
      era.println();
      await era.printAndWait([
        '翌日、',
        tachyon.get_colored_name(),
        ' は256RGBの色彩を含む薬剤を作ってみせた',
      ]);
      await era.printAndWait(
        '……どうやって256色を同じ薬剤の中で分割して並べたのだろう',
      );
      await era.printAndWait('モルモットは思わず疑問を抱いた');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] event_talk_black_tea
  async event_talk_black_tea(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, '、丁度いいわ']);
    await tachyon.say_and_wait('今日の新薬、試してくださいな');
    era.println();
    await era.printAndWait([
      'いつものように今日の薬を飲んだ……ん？ 紅茶の味がする',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は手元の試験管を怪訝に見た。怪しげな光を放ち、一目で ',
      tachyon.get_colored_name(),
      ' 製とわかる薬だ。なのになぜ……',
    ]);
    era.println();
    await tachyon.say_and_wait('いかがです？');
    era.println();
    await era.printAndWait([
      '戸惑いながら感想を訊かれ、',
      you.get_colored_name(),
      ' は反射で紅茶の味を評してしまった',
    ]);
    await era.printAndWait([
      '答え終えてから ',
      you.get_colored_name(),
      ' は思い出した。これは薬であって紅茶ではない。しまった、酷評される……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……香りが足りない、甘すぎる、それに色……そう。ええ……参考になる答えですわ……',
    );
    era.println();
    await era.printAndWait('え？ これで通ったのか？');
    era.println();
    await tachyon.say_and_wait(
      '……そういえば、あなたの身体能力も上がっていますから、今後は毎日の薬を一剤増やしますわ、',
    );
    await tachyon.say_and_wait(
      '従来の薬に加え、この剤も……あとであなたが文句を言えない味に改良してあげます',
    );
    era.printButton('「まさか……」', 1);
    era.printButton('「……まさか……」', 2);
    const ret = await era.input();
    await era.printAndWait('紅茶の味');
    await era.printAndWait('味の考察と改良');
    await era.printAndWait('つまり、そういうことだ');
    era.println();
    if (ret === 1) {
      await era.printAndWait(
        'よく考えると、甘いのは確かだが、香り以外、その「薬剤」は外見を無視すれば……',
      );
      await era.printAndWait([
        'いや、',
        tachyon.sex,
        'が紅茶を淹れるだけでどうしてあの色になるのかは疑問だが、',
      ]);
      await era.printAndWait([
        'よく考えれば、それは',
        tachyon.sex,
        'が普段いちばん好む紅茶の味ではないか？',
      ]);
      era.println();
      await tachyon.say_and_wait('楽しみにしておきなさい！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は少し負け惜しみのように言った',
      ]);
      await era.printAndWait([
        'そのとき ',
        you.get_colored_name(),
        ' は思い出した。かつて',
        tachyon.sex,
        'に弁当を出し、酷評されたときも、同じように負け惜しみていた',
      ]);
      await era.printAndWait([
        'よく考えれば、あのときの',
        tachyon.sex,
        'は何と答えたか？',
      ]);
      era.printButton('「楽しみにしているよ、研究者君」', 1);
      await era.input();
      await tachyon.say_and_wait('……たかがモルモットが');
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の小さな独り言を聞き、つい笑った',
      ]);
    } else {
      await era.printAndWait([
        '今さら',
        tachyon.sex,
        'は自分で試薬するだけでは足りず、魔の手を他人へ伸ばそうとしている！',
      ]);
      await era.printAndWait([
        '今まさに紅茶味の薬を作ろうとしている。',
        tachyon.sex,
        'が色まで紅茶にする方法を見つけたら、それこそ大変だ！',
      ]);
      era.printButton('「タキオン！」', 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), ' は抑えきれず叫んだ']);
      era.println();
      await tachyon.say_and_wait([callname, '？ 何を……']);
      era.printButton('「どんな薬でもいい、いくらでも来い！」', 1);
      era.printButton('「一つだけ、約束してくれ」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'ええ……ちょっと、',
        callname,
        '……あなた、何か勘違いを……',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は何か言おうとしたが、',
        you.get_colored_name(),
        ' に容赦なく遮られた',
      ]);
      await era.printAndWait(
        'そうだ……何があっても、これだけは今、口に出さなければならない',
      );
      era.printButton(
        '「俺だけが、永遠に、唯一の（実）モルモット（験体）だ」',
        1,
      );
      await era.input();
      await era.printAndWait('そうだ……今の味は、もう紅茶に限りなく近い');
      await era.printAndWait([
        '万一、',
        tachyon.sex,
        'が他人の飲み物、あるいはもっと悪いことに飲料水へ混ぜたら……想像したくない',
      ]);
      await era.printAndWait([
        'だからここで自分の立場を強調し、',
        tachyon.sex,
        'に他人を実験体にする妄想を諦めさせなければならない',
      ]);
      era.println();
      await tachyon.say_and_wait('……あなた……やはり勘違い…………でも……ん……');
      era.println();
      await era.printAndWait([
        'なぜか ',
        tachyon.get_colored_name(),
        ' は狼狽して背を向けた。',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'が振り向く前に、真っ赤な顔を見た',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……私のモルモットは最初から最後まであなた一匹ですわ……とにかく毎日試薬に来なさい！ モルモットなら黙って薬を飲むのが本職でしょう！',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はぷんぷんして去り、実験室の後始末は ',
        you.get_colored_name(),
        ' 一人に残された',
      ]);
      era.println();
      await era.printAndWait([
        '……なぜ怒ったのだろう。',
        you.get_colored_name(),
        ' には見当もつかない',
      ]);
      await era.printAndWait([
        'ただ……',
        tachyon.sex,
        'が他の実験者を見つけたら、その瞬間、',
        you.get_colored_name(),
        ' の胸は、その可能性だけで少し縮んだ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'が自分のモルモットは自分だけだと言ったとき、その緊張は跡形もなく消えた',
      ]);
      era.println();
      await era.printAndWait('まさか……薬に依存しているのだろうか');
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて首を振り、その恐ろしい可能性を振り払った',
      ]);
    }
    return [];
  },

  // [번역 대상] event_talk_callname
  async event_talk_callname(tachyon, you, callname, talk_times) {
    switch (talk_times) {
      case 1:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await you.say_and_wait('ん？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' を呼んでいるように聞こえたので、振り返った',
        ]);
        era.println();
        await tachyon.say_and_wait('何でもありませんわ。呼んでみただけです');
        era.println();
        await era.printAndWait([
          'そこで ',
          you.get_colored_name(),
          ' はまた前を向き、自分の作業に戻った',
        ]);
        era.println();
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        era.println();
        await tachyon.say_and_wait([you.actual_name, '君']);
        await era.printAndWait('！？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は急に振り返ったが、眼前の ',
          tachyon.get_colored_name(),
          ' はいつもの笑顔だった',
        ]);
        await era.printAndWait('今しがた何も起きなかったかのように');
        break;
      case 2:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の背に寄り、甘えるような囁きを漏らした',
        ]);
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' は、少しも顔を赤らめなかった',
        ]);
        await era.printAndWait(
          '前回、これに乗って振り返った瞬間に薬を飲まされた',
        );
        await era.printAndWait('今度は何度呼ばれても、絶対に振り返らない');
        era.println();
        await tachyon.say_and_wait([callname, '……']);
        await tachyon.say_and_wait([callname, '……❤']);
        await tachyon.say_and_wait([callname, '❤']);
        await tachyon.say_and_wait([callname, '❤']);
        era.println();
        await era.printAndWait([
          'なぜか、',
          tachyon.sex,
          'の口調はだんだん甘く、ねっとりしていった',
        ]);
        await era.printAndWait([
          '振り返れない ',
          you.get_colored_name(),
          ' は、焦りを堪えてその場に座り続けた',
        ]);
        era.println();
        await tachyon.say_and_wait('…………馬鹿');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の最後の小さな鼻息を聞いて、',
          you.get_colored_name(),
          ' はついに我慢できず、振り返ってしまった',
        ]);
        await era.printAndWait('そして……');
        era.println();
        await era.printAndWait('ごくん');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の手には、空の試験管があった',
        ]);
        await era.printAndWait([
          '中身は？ 今しがた ',
          you.get_colored_name(),
          ' が振り返った瞬間に、全部 ',
          you.get_colored_name(),
          ' の口へ押し込まれていた',
        ]);
        era.println();
        await tachyon.say_and_wait('まったく……今回は随分としぶといですわね');
        era.println();
        await era.printAndWait('薬が回り始めた。今度は麻痺作用らしい');
        await era.printAndWait([
          you.get_colored_name(),
          ' はなんとか振り返った。眼前には得意げな ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          'こぼそうとした文句は、',
          tachyon.sex,
          'の微かに赤い頬を見た瞬間、跡形もなく消えた',
        ]);
        era.println();
        await era.printAndWait(['やはり、', tachyon.sex, 'には敵わない']);
        await era.printAndWait([
          'そんな感想を抱いたまま、',
          you.get_colored_name(),
          ' は闇へ落ちた',
        ]);
        break;
      case 3:
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は実験をしているらしい',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の整った横顔を見つめ、ふと悪戯心が湧いた',
        ]);
        era.printButton('「アグネスタキオン」', 1);
        await era.input();
        await era.printAndWait([you.get_colored_name(), ' はそっと言った']);
        await era.printAndWait([
          tachyon.sex,
          'の背が小さく震えたが、振り返らず、何事もないように実験を続けた',
        ]);
        era.println();
        await era.printAndWait([
          'その様子が、さらに ',
          you.get_colored_name(),
          ' の子供心を煽った',
        ]);
        era.println();
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は声の調子をいろいろ変えてみた',
        ]);
        await era.printAndWait([
          '呼ぶたび、',
          tachyon.sex,
          'の体は前回より長く震えた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は横から、',
          tachyon.sex,
          'の顔がどんどん赤くなっていくのを見た',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'の頬が朱に染まるのを見て、',
          you.get_colored_name(),
          ' も恥ずかしくなった',
        ]);
        await era.printAndWait('だがこのときの欲は、もう止まらせてくれない');
        await era.printAndWait([
          you.get_colored_name(),
          ' は呼び続け、声はますます優しくなった',
        ]);
        await era.printAndWait([
          'やがて悪戯心は消え、今の ',
          you.get_colored_name(),
          ' はただ、',
          tachyon.sex,
          'がもっと恥じらい、もっと',
          tachyon.teen_sex_title,
          'らしい顔をするのを見たくてならなかった',
        ]);
        era.println();
        await era.printAndWait([
          '…………',
          tachyon.get_colored_name(),
          '？',
          tachyon.teen_sex_title,
          '？',
        ]);
        await era.printAndWait(
          '本来なら釣り合わない二つの語が、今は妙にしっくりくる',
        );
        await era.printAndWait('そうして、ずっと続いた');
        await era.printAndWait('一方が呼び続け、もう一方が知らないふりをする');
        era.drawLine();
        await era.printAndWait([
          '突然、',
          tachyon.sex,
          'の顔色が朱から青白へ変わった',
        ]);
        await era.printAndWait([
          'ずっと',
          tachyon.sex,
          'を見ていた ',
          you.get_colored_name(),
          ' はすぐに気づき、',
          tachyon.sex,
          'の視線を辿った',
        ]);
        era.println();
        await era.printAndWait([
          '視線の先は、',
          tachyon.sex,
          'が握る、三角の危険マークの薬だった',
        ]);
        await era.printAndWait('瓶はもう、完全に空になっている');
        await era.printAndWait('入れるときに手が震え、一度に全部入ったらしい');
        await era.printAndWait([
          'そして',
          tachyon.sex,
          'の手にある、危険薬を入れすぎたその試験管……',
        ]);
        await era.printAndWait(
          '液面が目に見える速さで膨れ、管から溢れ出す。それより致命的なのは噴き出す蒸気で、',
        );
        await era.printAndWait(
          'あんな小さな管から出るとは思えない量で室内を満たし、外へ流れていく',
        );
        era.println();
        await era.printAndWait([
          'そのとき、',
          tachyon.sex,
          'はやっと振り返った',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の顔が再び朱に染まるのを見た。今度は、',
          you.get_colored_name(),
          ' は確信した。これは羞恥ではない',
        ]);
        await era.printAndWait('これは……………');
        era.println();
        await tachyon.say_and_wait([callname, '！！！！！！！！！！！！！！']);
        era.drawLine({ offset: 8, width: 8 });
        await era.printAndWait('【学園からのお知らせ】', { align: 'center' });
        await era.printAndWait(
          ['午後、', tachyon.get_colored_name(), '、薬剤、終了'],
          { align: 'center' },
        );
    }
  },

  // [번역 대상] event_talk_drink
  async event_talk_drink(tachyon, you, callname, y_call_c) {
    await tachyon.say_and_wait([callname, '～～何か飲みます？']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は突然、悪い笑みを浮かべて ',
      you.get_colored_name(),
      ' に訊いた',
    ]);
    await era.printAndWait('ただでは起きない親切');
    await era.printAndWait([
      'とはいえ、正面から断れば',
      tachyon.sex,
      'はきっと逆上する',
    ]);
    era.println();
    await tachyon.say_and_wait('どうです、何を飲みます？');
    era.println();
    era.print('どうしよう……');
    era.printButton('紅茶', 1);
    era.printButton('コーヒー', 2);
    era.printButton('サース', 3);
    era.printButton('飲まない', 4);
    switch (await era.input()) {
      case 1:
        await era.printAndWait('やはり王道の紅茶だろう');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は頷いた。',
          you.get_colored_name(),
          ' がこれを選ぶと知っていたように、後ろからもう仕込んである紅茶を取り出した',
        ]);
        era.drawLine();
        await era.printAndWait([
          '…………',
          you.get_colored_name(),
          ' は、粉が溶けきっていない紅茶を見て、顔が引きつった',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'どうしました、',
          callname,
          '？ これは私が淹れたお茶ですわ。早く飲みなさい',
        ]);
        era.println();
        await era.printAndWait([
          '……まあいい。紅茶を選んだ時点で、',
          you.get_colored_name(),
          ' はこの展開を覚悟していたはずだ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は紅茶を一気に飲み干した',
        ]);
        await era.printAndWait('うん、美味くて爽やかだ');
        break;
      case 2:
        if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
          await you.say_and_wait([
            'コーヒーがいい。最近よく ',
            y_call_c,
            ' の淹れたコーヒーを飲んでいる',
          ]);
        } else {
          await you.say_and_wait('コーヒーがいい。最近仕事が忙しくてよく飲む');
        }
        era.println();
        await tachyon.say_and_wait(
          'どうしてあんな苦くて泥水みたいなものを飲むのです',
        );
        era.println();
        await you.say_and_wait(['それ ', y_call_c, ' に謝れ']);
        era.println();
        await tachyon.say_and_wait('まあいいわ、飲みたいならどうぞ');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は仕方なさそうに、すでに用意してあった飲み物を後ろから取り出した',
        ]);
        era.drawLine();
        await era.printAndWait([
          you.get_colored_name(),
          ' は眼前の、粉が溶けきっていない深紅の液体を見て、突っ込みどころが多すぎて言葉が出ないという感覚を初めて味わった',
        ]);
        era.println();
        await you.say_and_wait('まず……コーヒー？');
        await tachyon.say_and_wait(
          '……カフェインは多いですわ。コーヒーということで',
        );
        await tachyon.say_and_wait('…………');
        await you.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          '二人は黙り合い、',
          you.get_colored_name(),
          ' は諦めてそれを飲んだ',
        ]);
        break;
      case 3:
        await you.say_and_wait('サースがいい。マイナーだけど、たしかにうまい');
        era.println();
        await tachyon.say_and_wait('ええ……どうしてそんな妙な味が好きなのです');
        era.println();
        await you.say_and_wait('好きなんだよ、だめか？');
        era.println();
        await tachyon.say_and_wait(
          '………いいえ、あれは匂も味も薬ですわ。つまり私の薬を直接飲めばいいではありませんか',
        );
        era.println();
        await you.say_and_wait('！？');
        await era.printAndWait(['どうやら', tachyon.sex, 'はもう装う気がない']);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は薬入りの紅茶を脇へ置き、白衣から蛍光色の薬剤を取り出した',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は形だけの抵抗を二度し、すぐに一気飲みさせられた',
        ]);
        await era.printAndWait(
          'というか、この薬、薬味がしない。なぜ親子丼の味なんだ！？',
        );
        break;
      case 4:
        await era.printAndWait([
          you.get_colored_name(),
          ' は断った。抵抗が無駄でも、',
          you.get_colored_name(),
          ' は自分の反抗を見せる',
        ]);
        era.println();
        await era.printAndWait(
          'これこそが、これこそが、人類の覚悟だああああああああ',
        );
        era.println();
        await tachyon.say_and_wait('うるさいですわ');
        era.println();
        await era.printAndWait([
          'だが覚悟は ',
          you.get_colored_name(),
          ' の小宇宙を爆発させなかった。人間は所詮',
          tachyon.uma_sex_title,
          'には勝てない。五秒後、',
          you.get_colored_name(),
          ' は顔を押さえられ、口を開けさせられ、液体を流し込まれた',
        ]);
        era.println();
        await tachyon.say_and_wait('最初からこうすれば手間が省けましたわね');
    }
    await era.printAndWait('ぱたん');
    await era.printAndWait([
      'それは ',
      you.get_colored_name(),
      ' が気を失って机に突っ伏した音だった',
    ]);
  },

  // [번역 완료] o_r_fishing
  async o_r_fishing(tachyon, callname, jpy) {
    if (jpy > 0) {
      await tachyon.say_and_wait(
        '오호라, 낚아 올린 건 내일 도시락 재료로 써먹기로 하지.',
      );
    } else {
      await tachyon.say_and_wait([
        '으으…… 왜 한 마리도 안 잡히는 건가……',
        callname,
        ', 만약 이 물고기들이 강물에 섞인 『정체불명의 물질』을 『실수로』 마시고 떠오른다면, 그것도 내가 낚은 걸로 쳐 주겠나? 안 되나?',
      ]);
    }
  },

  // [번역 완료] o_r_walking
  async o_r_walking(tachyon, callname, first2shop) {
    await tachyon.say_and_wait([
      callname,
      ', 빨리 따라오지 않으면 내일 약은 두 배로 늘릴 걸세.',
    ]);
    if (first2shop) {
      await tachyon.say_and_wait(
        '맞다, 이 장소. 예전에 노점을 열었을 때…… 아니, 아무것도 아니네. 신경 쓰지 말게.',
      );
    }
  },

  // [번역 완료] o_s_arcade
  async o_s_arcade(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait([
          '에에? 어째서 ',
          callname,
          '은(는) 크레인 게임을 그렇게 잘하는 건가? 의욕에 흰색, 파란색…… 아니, 아무것도 아니네. 무슨 말인지 나도 모르겠군.',
        ]),
      () =>
        tachyon.say_and_wait([
          '오호, 내 인형이 있군? ……실물보다 귀엽다고? 잠깐, ',
          callname,
          ', 방금 말이 무슨 뜻인지 설명해 보게.',
        ]),
      async () => {
        await tachyon.say_and_wait(
          '쳇…… 이렇게까지 웃어야 하는 건가?',
        );
        await tachyon.say_and_wait(
          '아니, 내가 까탈스러운 게 아니라 이 스티커 사진기라는 것 자체가 지나치게 비합리적인 걸세! …………하아, 알겠네. 3, 2, 1, 치즈.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_dating
  async o_s_dating(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait(
          '음? 실험 도구를 사러 다니는 건 데이트라고 부르지 않는다고?',
        );
        await tachyon.say_and_wait([
          callname,
          ', 데이트라는 단어는 극히 추상적이네. 자네가 데이트라고 생각하면 그게 곧 데이트인 걸세. 알겠나?',
        ]);
        await tachyon.say_and_wait([
          '나 같은 절세미인 ',
          tachyon.teen_sex_title,
          '과 외출할 수 있다는 것 자체가 이미 데이트와 동의어 아니겠나?',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('거리 산책, 차 마시기, 잡담, 식사');
        await tachyon.say_and_wait(
          '이게 일반적인 데이트인가? ……지루하군.',
        );
      },
    ];
    if (era.get('relation:32:0') < 50) {
      buffer.push(() =>
        tachyon.say_and_wait(
          '데이트가 실험 조수 겸 실험체의 의욕을 얼마나 높이는지 분석하자고? 흠…… 연구 과제로 삼을 가치는 있겠군.',
        ),
      );
    } else if (era.get('relation:32:0') < 225) {
      buffer.push(() =>
        tachyon.say_and_wait([
          '데이트? ……',
          callname,
          ', 보통 과학자는 자기 실험동물과 데이트하지 않는다네. 무슨 뜻인지 알겠나?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_drawing
  async o_s_drawing(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait(
          '경품 추첨이라…… 운 같은 불확실한 요소에 기대기보다 재력이나 다른 힘을 동원해 확실하게 경품을 손에 넣는 것이 더 정당한 방법 아니겠나?',
        ),
      () =>
        tachyon.say_and_wait([
          '에이~~ 이런 조작 가능성이 다분한 상자에서 정말 뽑기를 하려는 건가, ',
          callname,
          '? ……뭐, 말리지는 않겠네만, 만약을 위해…… 저 경품 상자 안에 정말 1등 당첨권이 들어 있는지 확인해 봐도 되겠나?',
        ]),
      async () => {
        await tachyon.say_and_wait(
          '추첨인가. 그럼 준비를 좀 할 테니……… 됐네, 시작하게. 음? 갑자기 왜 안경을 쓰냐고?',
        );
        await tachyon.say_and_wait(
          '별거 아니네, 이건 그저 상자 속을 꿰뚫어 볼 수 있는 투시 안경일 뿐이라네. 설마 자네, 내가 정말 운 같은 불확실한 요소를 믿을 거라고 생각한 건 아니겠지?',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait('Winning the soul～～');
        await tachyon.say_and_wait([
          '……후훗, 어떤가, ',
          callname,
          '? 내 노래 실력도 나쁘지 않지? ……뭐라고? NEXT FRONTIER를 듣고 싶다고? 아니면 Special Record?',
        ]);
        await tachyon.say_and_wait(['……', callname, ', 일부러 그러는 거지?']);
      },
      async () => {
        await tachyon.say_and_wait(
          'Выходила на берег Катюша,На высокий берег, на крутой……',
        );
        await tachyon.say_and_wait(
          '러시아어는 모를 텐데, 노래하다 보면 갑자기 읽을 수 있을 것 같은 기분이 든단 말이지……',
        );
        await tachyon.say_and_wait(
          '역시 그렇군. 태어나면서부터 아는 것도 천재의 고민이라네.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          '오호? ',
          callname,
          ', 꽤 잘 부르지 않는가……',
        ]);
        await tachyon.say_and_wait(
          '그렇지만 후렴구에서 그렇게 흥분하지는 말아 주겠나?',
        );
        await tachyon.say_and_wait(
          '자네가 흥분할 때마다 방 안이 너무 눈부셔서 아무것도 보이지 않는다네. 그런 상태에서 가사를 어떻게 읽는지 신기하군……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '에에…… 곡 분위기에 맞춰 몸 색깔까지 바꾸는 건가? 무지개 네온 버전까지 있다니……',
        );
        await tachyon.say_and_wait(
          '아니, 발명자인 나조차 내 약에 그런 기능이 있는 줄 몰랐네. 무섭군……',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_movie
  async o_s_movie(tachyon) {
    await tachyon.say_and_wait('……이 영화관…… 외관은 참 예쁘게 생겼군……');
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('이보게, 뭐라고 말 좀 해 보게나……');
    await tachyon.say_and_wait(
      '동행인의 몸에서 뿜어져 나오는 빛이 너무 밝아서 입장을 거절당하다니, 이 아그네스 타키온조차 생전 처음 겪는 일이로군……',
    );
    await tachyon.say_and_wait('사과라도 좋으니 한마디라도 해 보게.');
    era.printButton('「애초에 나를 이렇게 만든 게 누구인데 그래!?」', 1);
    await era.input();
    await era.printAndWait(
      '결국 두 사람은 오순도순 실험실로 돌아가 NetFlOx를 보았다.',
    );
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(tachyon, you, callname, cook_times) {
    if (cook_times < 10) {
      await tachyon.say_and_wait(
        '……맛없군. 전부 레토르트 기성품이고 향료와 화학조미료로 맛만 냈잖나. 평소 먹는 약으로도 부족하다고 생각하는 건가? 이런 걸 내게 먹이다니.',
      );
      await era.printAndWait([
        '요리가 나오자마자 ',
        tachyon.get_colored_name(),
        '에게 머리부터 꼬리까지 혹평을 들었다. 기분을 전환하려던 것이 도리어 ',
        tachyon.sex,
        '의 기분만 망쳐 버렸다.',
      ]);
      await tachyon.say_and_wait('다만…… 이 디저트는 나쁘지 않군.');
      await era.printAndWait('뭐…… 이가 아플 만큼 달콤한 푸딩이라고? 정말인가?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 취향을 조금은 알게 된 것 같았다.',
      ]);
    } else {
      const buffer = [
        async () => {
          await tachyon.say_and_wait([
            '이보게, ',
            callname,
            '……외식하러 데려와 주는 건 고맙지만, 자네 요리보다도 못한 음식을 일부러 먹으러 올 필요가 있는 건가?',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 어리둥절한 눈으로 ',
            you.get_colored_name(),
            '을(를) 바라보았다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '맛은 나쁘지 않네. 하지만 ',
            callname,
            '의 요리와 비교하면…… 뭔가 부족해…… 아, 그렇지. 단맛이 부족하군.',
          ]);
          await tachyon.say_and_wait([
            '설탕을 더 먹으면 당뇨병에 걸린다고? 걱정할 필요 없네.',
            tachyon.uma_sex_title,
            '의 신진대사가 알아서 해결해 줄 테니까.',
          ]);
        },
        async () => {
          await era.printAndWait(
            '홍샤오러우, 탕수육, 화과자, 치사량에 가까울 만큼 설탕을 넣은 홍차, 그리고 마무리는 꿀 푸딩.',
          );
          await tachyon.say_and_wait([callname, '? 먹지 않는 건가?']);
          await you.say_and_wait('……보기만 해도 이가 아프군. 사양하겠어.');
        },
      ];
      await get_random_entry(buffer)();
    }
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '이보게, ',
          callname,
          '……옷은 인터넷으로 주문해도 충분하지 않나? 인간의 옷과 ',
          tachyon.uma_sex_title,
          '의 옷이 무슨 관계가 있다는 건가?',
        ]);
        await tachyon.say_and_wait(
          '꼬리를 내놓을 구멍이 없어서 옷자락이 들릴 때마다 보이게 된다고?',
        );
        await tachyon.say_and_wait([
          '………그건 성희롱일세, ',
          callname,
          '。',
        ]);
      },
      async () => {
        await tachyon.say_and_wait(
          '조리 도구? 그렇게 잔뜩 사서 뭘 하려는 건가……',
        );
        await tachyon.say_and_wait(
          '에에, 이렇게 요리를 많이 할 수 있다고…… 큭…… 실험비에 슬쩍 포함시킬 수 있다면……',
        );
        await tachyon.say_and_wait(
          '괜찮네, 사게. 두려워할 필요 없네. 내가 처리하면 정식 실험 도구로 신청할 수 있을 걸세…… 아마도.',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '무료 시음…… 무료 체험. 역시 가장 강력한 판매 문구는 『무료』군. 판촉이라는 걸 알면서도……',
        );
        await tachyon.say_and_wait([
          '무료라는 말을 듣는 순간 남이 준 음식에 대한 경계심을 잊게 되는군……',
          callname,
          ', 좋은 생각이 떠올랐네. 약 무료 시음 행사라네! ……안 된다고?',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 대상] office_cook
  async office_cook(tachyon, coffee, you, callname, cook_times, plan_b) {
    if (era.get('relation:32:0') <= 150 && cook_times === 0) {
      await tachyon.say_and_wait('私に料理を？ 口にできないものはお断りですわ');
      await era.printAndWait('厳しい食客だ……腕を上げてから出直すしかない');
    } else {
      const buffer = [];
      if (!plan_b) {
        buffer.push(async () => {
          await tachyon.say_and_wait(['頑張って、', callname, '～～']);
          await tachyon.say_and_wait(
            'ん？ 一緒に作るというのは、あなたが作って私が口を挟む、という意味ですわよ？',
          );
        });
        if (era.get('relation:32:0') > 375) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                '！ 今日は自分で卵焼きを焼きましたわよ！ 早く食べなさい！',
              ]);
              await you.say_and_wait('……');
              await era.printAndWait([
                you.get_colored_name(),
                ' は目の前の、少し焦げて卵が外に全部はみ出し、卵焼きというより炒め焼きに卵を足したものを見つめた……',
              ]);
              await era.printAndWait('まあ……味だけは、食べられる');
            },
            async () => {
              await tachyon.say_and_wait([
                '……',
                callname,
                '、知っていますわね。学園は安全のため、IHなどしか使えませんから、',
              ]);
              await tachyon.say_and_wait(
                'でも……IHは苦手なのです。だから……私のせいではありませんわ。IHが使いにくいのです。ガスコンロなら絶対にこうはなりません……',
              );
              await era.printAndWait([
                you.get_colored_name(),
                ' は目の前の、真っ黒に焦げた卵を見た。',
              ]);
              await era.printAndWait(
                '……少し苦く、少し塩辛い。かろうじて食べられる、というところ。',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                '考えてみれば、トレーナー室で食事を作るのは本来かなり不合理ですわね',
              );
              await era.printAndWait([
                '今日は',
                tachyon.sex,
                'が弁当を作ると約束していた ',
                tachyon.get_colored_name(),
                ' は、出前の箱を二つ取り出した。',
              ]);
              await era.printAndWait(
                '……食べられるのは確かだが、もう当初の趣旨から外れている。',
              );
            },
          );
        }
      } else {
        buffer.push(
          async () => {
            await era.printAndWait([
              'もともと ',
              you.get_colored_name(),
              ' と ',
              tachyon.get_colored_name(),
              ' は、交代で弁当を作ると決めていた。',
            ]);
            await era.printAndWait([
              'だが最近は ',
              coffee.get_colored_name(),
              ' の訓練量が増え、',
              you.get_colored_name(),
              ' が立ち止まって弁当を作る暇がなく、',
            ]);
            await era.printAndWait([
              'だから最近はほとんど ',
              tachyon.get_colored_name(),
              ' が作り、',
              you.get_colored_name(),
              ' が食べ、食べながら',
              tachyon.sex,
              'と情報を交わす日々だった。',
            ]);
            era.printButton('「うまい！」', 1);
            await era.input();
            await tachyon.say_and_wait('ふふ、悪くありませんわね');
            await era.printAndWait([
              you.get_colored_name(),
              ' の驚きに対して、',
              tachyon.get_colored_name(),
              ' は最後まで波一つない顔だった。',
            ]);
            await tachyon.say_and_wait('他にすることも、ありませんもの');
            await era.printAndWait([
              'その一言を、',
              tachyon.sex,
              'は悲しみを乗せて言ったのだろうか。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' には、わからない。',
            ]);
          },
          () =>
            era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の弁当を普通に食べ終えると、',
              coffee.get_colored_name(),
              ' の潜在を引き出す薬剤の研究へ戻っていった。',
            ]),
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' の弁当を食べた。',
            ]);
            await era.printAndWait([
              '今の',
              tachyon.sex,
              'は以前より無口だ。つまらない話より、',
              tachyon.sex,
              'は ',
              coffee.get_colored_name(),
              ' をどう速く走らせるかに集中している。',
            ]);
            await era.printAndWait([
              '寡黙で、集中力があり、料理がうまい。ある意味、今の ',
              tachyon.get_colored_name(),
              ' はかつての',
              tachyon.sex,
              'より、世間のいう優れた女性像に近い。',
            ]);
            await era.printAndWait([
              'だがやはり……あの頃の、勢いと熱に満ちた',
              tachyon.sex,
              'が恋しい。',
            ]);
          },
        );
      }
      await get_random_entry(buffer)();
    }
  },

  // [번역 완료] office_game
  async office_game(tachyon) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '쳇…… 이 기체는 너무 느리군. ',
        tachyon.uma_sex_title,
        '의 출력 속도를 전혀 따라오지 못하는구만!',
      ]);
    } else {
      await tachyon.say_and_wait('격투 게임? 진 쪽이 상대의 말을 듣기로 하는 건가?');
      await tachyon.say_and_wait(
        '후후, 커맨드 리스트를 전부 외운 나를 이길 방법이 있을 것 같은가?',
      );
      await tachyon.say_and_wait(
        '……잠깐! 구석에 박혀서 원거리 공격만 계속하는 건 너무 비겁하지 않은가!',
      );
    }
  },

  // [번역 완료] office_study
  async office_study(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '아아, ',
          callname,
          ', 이 단원을 좀 가르쳐 주겠나?',
        ]);
        await tachyon.say_and_wait(
          '『타키온도 모르는 게 있다니』라고? 칭찬인 건 알겠지만 너무 과하군. 나도 내가 모르는 게 얼마나 많은지는 알고 있으니까.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          '아아, ',
          callname,
          ', 이것 좀 알려 주겠나?',
        ]);
        await tachyon.say_and_wait(
          '그래, 이 단원 말일세. 과학 윤리. 어째서인지 도무지 머릿속에 들어오질 않아…… 신기한 일이군……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '시험을 위해 배우는 지식에 정말 의미가 있는 걸까?',
        );
        await tachyon.say_and_wait([
          '내 말이 무슨 뜻인지 알겠지, ',
          callname,
          '。',
        ]);
        await tachyon.say_and_wait(
          '실생활에서 전혀 쓰이지 않는 걸 배워 봤자 쓸모없지.',
        );
        await tachyon.say_and_wait(
          '그러니 윤리니 도덕이니 하는 고리타분한 얘기는 배우지 않아도 되지 않겠나?',
        );
        await tachyon.say_and_wait('……안 된다고?');
      },
      async () => {
        await tachyon.say_and_wait([
          '지리? 아니, ',
          callname,
          '……그렇게 쉬운 과목까지 보충수업을 받아야 한다고 생각하면 곤란하군.',
        ]);
        await tachyon.say_and_wait(
          '의심스럽다면 시험해 보게. 스위스의 수도는 베른, 브라질의 공용어는 스페인어, 미국의 전신은 영국의 13개 식민지…… 어떤가, 전부 대답했지 않나?',
        );
        await tachyon.say_and_wait(
          '남쪽이 어디냐고? 우문이군. 당연히 땅 아래쪽이지.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          callname,
          ', 이 작문의 어떤 부분이 문제인지 도통 모르겠군.',
        ]);
        await tachyon.say_and_wait(
          '주제는 『커튼은 왜 파란색인가』였지?',
        );
        await tachyon.say_and_wait(
          '그래서 발색 원리와 인간의 원추세포가 받아들이는 정보를 바탕으로 2만 자에 걸친 분석을 썼는데, 뭐가 잘못됐다는 거지?',
        );
        await tachyon.say_and_wait(
          '……그렇군, 글자 수를 초과한 거였나. 다음에는 2천 자 이내로 쓰겠네.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] out_church
  async out_church(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (plan_b) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……신이여.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 지루한 표정으로 신사를 바라보았다. 무슨 생각을 하는지는 알 수 없었다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('만약…… 신이 그렇다면, 나는……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 혼잣말을 중얼거렸다.',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '신이 정말 존재하기는 하는가? 물론 삼여신은 알고 있네. 하지만…… 따지고 보면 삼여신도 더 강한 힘을 손에 넣은 평범한 존재일 뿐……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 황급히 ',
            tachyon.get_colored_name(),
            '의 입을 틀어막았다.',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            '이보게, ',
            callname,
            ', 신보다는 실험을 하러 돌아가세.',
          ]),
        () =>
          tachyon.say_and_wait(
            '대길이든 대흉이든 상관없네. 그런 건 신이 정하는 게 아니라 내가 만들어 내는 것이니까.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 대상] school_atrium
  async school_atrium(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(async () => {
        await tachyon.say_and_wait(
          '悩みを樹洞に向かって叫ぶ？ それで何が変わるというのです。',
        );
        await tachyon.say_and_wait(
          '……退屈ですわ。愚痴るくらいなら、現状を変える努力をしなさい。',
        );
        await tachyon.say_and_wait(
          '『出せば心の圧は軽くなる』？ 私のそばにいるのに、まだ圧があるのですか？ 待ちなさい、その苦笑いの意味は何ですの。',
        );
      });
      if (
        era.get('love:32') > 80 &&
        tachyon.sex_code !== 1 &&
        you.sex_code > 0
      ) {
        buffer.push(
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' を枯れた樹洞の前へ連れていった。',
              tachyon.sex,
              'は自分から、洞の縁に身を預けた。',
            ]);
            await era.printAndWait([
              'だが今日遊ぶのはそれではない。',
              you.get_colored_name(),
              ' は首を振り、',
              tachyon.get_colored_name(),
              ' の肩に寄りかかった。',
            ]);
            await you.say_and_wait(
              '愚痴と圧を吐く場所なら、君も、悔しいことを叫んでみろ。',
            );
            await era.printAndWait([
              'そう言って ',
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の尻を軽く叩いた。聞きたいものが何か、それだけで十分だった。',
            ]);
            await era.printAndWait([
              '頭の回転が速い天才',
              tachyon.uma_sex_title,
              'は、即座に ',
              you.get_colored_name(),
              ' の意図を読んだ。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は責めるように ',
              you.get_colored_name(),
              ' を一目見て、それから樹洞へ『悔しい』を叫び始めた。',
            ]);
            await tachyon.say_and_wait([
              '乳頭を ',
              callname,
              ' に摘まれるだけでイってしまうのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'お穴が雑魚すぎて、',
              callname,
              ' に触られただけで濡れるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              callname,
              ' の匂いを嗅いだだけで頭が交尾しか残らない痴女になるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'おちんぽを含んだ瞬間、',
              callname,
              ' の一生オナホになりたくなるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              '我慢しろと命じられているのに、',
              callname,
              ' が射精するたび飲み込んで罰せられるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait(
              '毎回薬に頼っても、おちんぽ様に勝てないのが悔しいですわ❤️',
            );
            await tachyon.say_and_wait(
              'おちんぽ様を満足させる前に自分が先にイってしまうのが悔しいですわ❤️',
            );
            await era.printAndWait([
              '一声叫ぶたびに ',
              you.get_colored_name(),
              ' はご褒美に',
              tachyon.sex,
              'の尻を叩いた。叩かれるたび',
              tachyon.sex,
              'はより熱心に腰を揺らし、さらに過激な『悔しい』を吐き出した。',
            ]);
            await era.printAndWait([
              '最後、周囲の',
              tachyon.uma_sex_title,
              'の羞恥に染まった視線の中、',
              you.get_colored_name(),
              ' は両脚を震わせて歩けなくなった ',
              tachyon.get_colored_name(),
              ' の手を引き、実験室へ戻った。',
            ]);
          },
          async () => {
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は枯れた樹洞に身を預け、中を退屈そうに覗いていた。',
            ]);
            await era.printAndWait([
              '外へ突き出した',
              tachyon.sex,
              'の尻を見て、',
              you.get_colored_name(),
              ' は欲を抑えきれなくなった。',
            ]);
            await tachyon.say_and_wait([callname, '……んっ❤️']);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の、まだ幼さを残す尻を叩いた。布越しの弾力が、打ち下ろした力を掌へ跳ね返した。',
            ]);
            await tachyon.say_and_wait([
              '……',
              callname,
              '、ここ、残響が……大きいですわ❤️……戻って、戻ってからにしましょう、いいですわね❤️',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の懇願を聞かず、もう一度強く叩いた。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は慌てて口を押さえたが、それでも声は漏れ出た。',
            ]);
            await tachyon.say_and_wait('んひぃ❤️❤️❤️');
            await tachyon.say_and_wait('ん……❤️');
            await tachyon.say_and_wait('んぅ……❤️');
            await tachyon.say_and_wait('待って、入れないでええええ❤️❤️❤️');
            await era.printAndWait([
              '最後、',
              you.get_colored_name(),
              ' は樹洞の上でぐったりし、顔を赤くした ',
              tachyon.get_colored_name(),
              ' を抱き、トレーナー室へ連れて帰った。',
            ]);
            await era.printAndWait([
              '道行く生徒たちは、思わず ',
              you.get_colored_name(),
              ' たちに注目した。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' にとって、この視線はもう慣れたものだった。',
            ]);
            await era.printAndWait([
              '腕の中の ',
              tachyon.get_colored_name(),
              '……人目も構わず、力の抜けた両手で抱擁をねだる',
              tachyon.sex,
              'は、',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'を満たすまで、そんなことに構う余裕などないだろう。',
            ]);
          },
        );
      }
      if (era.get('love:32') > 75) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            'ん……',
            callname,
            ' ❤️……人の気持ちを吐く樹洞の前で、こんなこと……聞かれたらどうしますの❤️',
          ]);
          await tachyon.say_and_wait('性欲を吐くのも、発散のうち？');
          await tachyon.say_and_wait(
            'まったく❤️……見つかっても知りませんわよ❤️',
          );
        });
      }
      await get_random_entry(buffer)();
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は枯れた樹洞の縁に寄り、中へ何か叫びたそうにしていたが、長く迷った末にやめた',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の様子を見て、',
        you.get_colored_name(),
        ' はなぜか悲しみと、わずかな安心を同時に覚えた',
      ]);
    }
  },

  // [번역 완료] school_rooftop
  async school_rooftop(tachyon, coffee, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '아아, 도시락은 잠깐 내려놓게. 풍속 측정을 끝내고 먹겠네.',
          ),
        async () => {
          await tachyon.say_and_wait([
            '옥상에서 도시락이라…… 그러고 보니, ',
            callname,
            ', 옥상이 원래 출입 금지 구역이었다는 걸 아나?',
          ]);
          await you.say_and_wait('어, 정말이야?');
          await tachyon.say_and_wait([
            '그래. 어떤 ',
            tachyon.uma_sex_title,
            '이(가) 옥상에서 실험하다가 실수로 유독물질을 누출했다고 하더군.',
          ]);
          await tachyon.say_and_wait('……그 표정은 뭔가?');
          await tachyon.say_and_wait('아니, 아니네. 내가 아니었어.');
          await tachyon.say_and_wait(
            '뭐, 자네 말대로 시간이 이렇게 흘렀으니 잔류 물질은 없겠지.',
          );
          await tachyon.say_and_wait([
            '설령 남아 있더라도…… 지금 내 약으로 단련된 ',
            callname,
            '이(가) 과거의 내 약에 질 리 없지 않나.',
          ]);
          await you.say_and_wait('역시 자네였잖아!');
        },
        async () => {
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 도시락을 챙겨 ',
            tachyon.get_colored_name(),
            '와 함께 옥상에서 점심을 먹었다.',
          ]);
          await era.printAndWait([
            '산들바람이 ',
            tachyon.get_colored_name(),
            '의 머리카락 끝을 스쳤고, ',
            tachyon.sex,
            '은(는) 쿡쿡 웃으며 즐거워하는 듯했다.',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 이 장소가 마음에 드는 모양이다. 기회가 생기면 또 ',
            tachyon.sex,
            '을(를) 데려와야겠다.',
          ]);
        },
      );
    } else {
      buffer.push(
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 옥상에서 조용히 시원한 바람을 맞고 있었다. 표정은 없었다. 또 ',
            coffee.get_colored_name(),
            '의 훈련 계획을 생각하는 걸까.',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            '은(는) 기분 전환을 위해 ',
            tachyon.get_colored_name(),
            '을(를) 옥상으로 데려와 도시락을 먹었지만, ',
            tachyon.sex,
            '은(는) 식사 내내 ',
            coffee.get_colored_name(),
            '에 대한 이야기만 했다.',
          ]),
        async () => {
          await era.printAndWait([
            tachyon.sex,
            '은(는) 어째서인지 난간 너머 하늘만 바라보고 있었다.',
          ]);
          await era.printAndWait(
            '눈동자에는 아무런 감정도 없이 그저 하늘 풍경만 비쳤다.',
          );
          await tachyon.say_and_wait(['……무슨 일이라도 있나? ', callname, '？']);
          await era.printAndWait([
            '어째서인지 ',
            you.get_colored_name(),
            '은(는) 갑자기 두려워졌다.',
          ]);
          await era.printAndWait([
            '그 두려움에 이끌려 ',
            you.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 손을 쥐었다가 곧 놓았다.',
          ]);
          await tachyon.say_and_wait([
            '……안심하게, ',
            callname,
            '. 어디에도 가지 않겠네.',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] select_when_escape
  select_when_escape(tachyon, callname) {
    tachyon.say(['참 신기하군, ', callname, '']);
    tachyon.say([
      '지하실에 있었을 때 자네의 눈동자는 빛을 거의 잃고 있었는데…… 지금은 다시 사람을 빨아들일 듯한 광채를 되찾았군.',
    ]);
    tachyon.say([
      '『내 눈에 특별한 빛이 있다면 그건 타키온의 빛을 반사하기 때문이야』라고? ……후후, ',
      callname,
      ', 평소답지 않게 말솜씨가 좋구먼……',
    ]);
    tachyon.say([
      '그렇다면…… 언젠가 내 눈동자에 다시 먼지가 쌓이면 자네가 한 번 더 닦아 주게.',
    ]);
  },

  // [번역 대상] slave_end
  slave_end: (() => {
    const title = '金の代価';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名前
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は飲みかけのウイスキーを手に、よろよろと五軒目のバーから出てきた',
      ]);
      await era.printAndWait('夜は相変わらず暗い。爛れた夜はまだ続く');
      era.println();
      await era.printAndWait('終わった……では、次はどこへ行けばいい');
      await era.printAndWait('ふらふらと歩き、全身から酒の匂いを漂わせている');
      await era.printAndWait([
        '通行人が鼻を覆って遠ざかる姿は、',
        you.get_colored_name(),
        ' がわざわざ作り上げようとしたものだ',
      ]);
      era.println();
      await era.printAndWait('二、三、五………二十三、二十九 ');
      await era.printAndWait([
        you.get_colored_name(),
        ' は頭の中で黙って数えた',
      ]);
      await era.printAndWait([
        '素数を数えて冷静になるわけではない。今夜 ',
        you.get_colored_name(),
        ' が飲んだ酒の量だ',
      ]);
      await era.printAndWait('合計金額は……七桁……それとも八桁か？');
      await era.printAndWait([
        '驚くべき数字だが、それは ',
        you.get_colored_name(),
        ' が一晩で飲んだ酒の値段にすぎない',
      ]);
      await era.printAndWait(
        '最高級のバーで、高いものばかり選んで店を掃討した結果が、普通の人間なら想像もしたくない数字だった',
      );
      era.println();
      await era.printAndWait('だが……');
      await era.printAndWait('無駄だ。まったく効かない');
      await era.printAndWait([
        '値段も度数も関係ない。今夜飲んだ酒は、',
        you.get_colored_name(),
        ' を何度かトイレへ行かせた以外、何の役にも立たなかった',
      ]);
      await era.printAndWait([
        '意識はこれ以上ないほどはっきりしている。はっきりしすぎて、',
        you.get_colored_name(),
        ' は二日前のことを思い出した',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait(
        'ただしいつもの決まりですわよ……今日の実験は、神経抑制剤の排除に関するものですわ',
      );
      await tachyon.say_as_unknown_and_wait('では、実験を始めましょう');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はウイスキーを口に直接流し込んだ',
      ]);
      await era.printAndWait([
        '一口で普通の人間が酔うはずの強い酒が、',
        you.get_colored_name(),
        ' の頭をさらに澄ませる',
      ]);
      await era.printAndWait(
        '酒で憂さを晴らすのが、アルコールで神経を麻痺させて現実から逃げることなら、その麻痺すら許されない自分は、世界でいちばん惨めな酔客だろう',
      );
      era.println();
      await era.printAndWait(
        '賑やかな夜の街に、自分のような酔客はいくらでもいる',
      );
      await era.printAndWait([
        'ふらつく人々の姿を見て、',
        you.get_colored_name(),
        ' は心から羨んだ',
      ]);
      era.println();
      await era.printAndWait([
        '歩いていると、眼前に突然光が走り、',
        you.get_colored_name(),
        ' は思わず目を細めた',
      ]);
      await era.printAndWait(
        '目を刺すのは照明だけではない。きらめく内装と、一夜で金持ちになる夢がいくつもそこにある',
      );
      await era.printAndWait('賭けと酒、酒と賭け。昔からこの二つは離れない');
      await era.printAndWait(
        '酔いつぶれる酒豪たちが、ほろ酔いのうちに賭場へ手を出すのも、もう決まりごとのようだ',
      );
      era.println();
      await era.printAndWait([
        'だが、酔客の格好をした ',
        you.get_colored_name(),
        ' は賭場へ目すら向けず、ただ前方を見つめた',
      ]);
      await era.printAndWait('賭場の賭けが小物だから嫌ったわけではない———');
      await era.printAndWait([
        'ここの賭場には、',
        tachyon.uma_sex_title,
        'のレースに賭けるという、発覚したら二度と商売できない営業まであるらしい',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が潔癖だからでもない——こんな時間にこんな通りを徘徊する人間が、どれだけ綺麗でいられるというのか',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はまた一口飲み、過去を思い出した',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait(
        'ただしいつもの決まりですわよ……今日の実験は、脳の報酬系の調整と抑制ですわ',
      );
      await tachyon.say_as_unknown_and_wait('では、実験を始めましょう');
      era.println();
      await era.printAndWait('普通のサラリーマンの年収を超える金を勝っても');
      await era.printAndWait('一夜で海辺の別荘を一軒失っても');
      await era.printAndWait('感情はひとつも動かず、眉間に皺すら寄らない');
      await era.printAndWait('こんな状態で賭けて、何が楽しいというのか');
      era.println();
      await era.printAndWait(
        '賭場の中で、自分だけが世の外に孤立しているようだ',
      );
      await era.printAndWait('昔の自分がなぜこれに嵌まったのか、理解できない');
      await era.printAndWait('いや、理解はできる。だができないことはできない');
      await era.printAndWait('目が覚めた人間が、夢へ戻れないのと同じだ');
      era.println();
      await tachyon.say_as_passer_by_and_wait(
        '立ちんぼの少女',
        'お客さん、ひとりは寂しそうですよ……ご一緒に、春のひとときを過ごしませんか？♡',
      );
      era.println();
      await era.printAndWait([
        'いつの間にか、華やかな賭場も後ろに捨て、風俗街へ入った ',
        you.get_colored_name(),
        ' のもとへ、夜の女たちの柔郷が訪れた',
      ]);
      await era.printAndWait(
        'このまま彼女たちの肢体に沈めたら、きっとこの上なく幸せだろう……',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait('ただしいつもの決まりですわ……');
      era.println();
      await era.printAndWait('ああ');
      await era.printAndWait([you.get_colored_name(), ' は少女の誘いを断った']);
      await era.printAndWait('反応はゼロだ');
      await era.printAndWait(
        '本来なら好みのはずの娘でも、今は体にわずかな反応すら起きない',
      );
      era.println();
      await era.printAndWait([
        'いつの間にか、',
        you.get_colored_name(),
        ' は通りを出ていた',
      ]);
      await era.printAndWait([
        '広大な夜の街、華やかな夜の都なのに、',
        you.get_colored_name(),
        ' に欲を起こさせるものは何ひとつ見つからない',
      ]);
      await era.printAndWait('かつて興味を持ったものたち');
      await era.printAndWait('美食、酒と煙草、賭け、色……');
      await era.printAndWait(
        'かつて嵌まり、神経を麻痺させるために使ったものたち',
      );
      await era.printAndWait('今は神経を、かえって澄ませるだけだ');
      era.println();
      await era.printAndWait('もういい。もう十分だ');
      await era.printAndWait(
        '何でもいい。酔い沈めさえすれば、考えることをやめられさえすれば、何でもいい',
      );
      await era.printAndWait('理性がこれほど人を狂わせるとは、知らなかった');
      await era.printAndWait('暴力、痛み、血、傷');
      await era.printAndWait('それらでさえ、これ以上の刺激にはならない');
      await era.printAndWait('どれは、どの実験で売り払ったのだろう');
      await era.printAndWait('もう忘れた。そんなことはもうどうでもいい');
      era.println();
      await era.printAndWait(
        '人格が剥がれるように、焦って刺激を求め、それでも何も得られない',
      );
      await era.printAndWait(
        'このままでは……壊れる。神経も、体も、必ず壊れ、切れる',
      );
      await era.printAndWait('だからその前に、何でもいい……');
      await era.printAndWait('何でも、いい……');
      await tachyon.say_as_unknown_and_wait([callname, '？ どうしてここに']);
      await tachyon.say_as_unknown_and_wait('……おや、みっともない姿ですわね');
      await tachyon.say_as_unknown_and_wait(
        'どうしましたの。酒代がなくなった？ それとも賭け金がなくて賭場を追い出された……あるいは、誰か気になる娘でも？',
      );
      await tachyon.say_as_unknown_and_wait('もっと……お金が要りますの？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はぼんやりと相手を見た',
      ]);
      await era.printAndWait([
        '悪魔の囁きのように、',
        you.get_colored_name(),
        ' の耳元で綿のように細く語る',
      ]);
      await era.printAndWait('金');
      await era.printAndWait('まだ金が要る');
      await era.printAndWait('もっと金が要る');
      await era.printAndWait('もっと借りなければならない');
      era.println();
      await era.printAndWait('………………………なぜ？');
      await era.printAndWait('なぜ金が欲しい？');
      await era.printAndWait('なぜ借りる？');
      await era.printAndWait('酒を買うため？');
      await era.printAndWait('賭けのため？');
      await era.printAndWait('女遊びのため？');
      await era.printAndWait('なぜ？');
      await era.printAndWait('なぜ？');
      era.println();
      await era.printAndWait('何でもいい');
      await era.printAndWait('何をしてもいい');
      await era.printAndWait('考えろ');
      await era.printAndWait('どうすれば、考えることをやめられる');
      await era.printAndWait('どうすれば、頭を徹底的に麻痺させられる');
      era.println();
      await era.printAndWait('ああ……');
      await era.printAndWait('ああ！');
      await era.printAndWait('あった');
      await era.printAndWait(
        'あったあったあったあったあったあったあったあったあったあった',
      );
      era.println();
      await you.say_and_wait('……いい、金を貸してくれるか？');
      await tachyon.say_as_unknown_and_wait([
        'もちろんですわ……ただし、',
        callname,
        '、借りたお金で何をするつもりですの？',
      ]);
      era.println();
      await era.printAndWait('相手が残した唯一の隙間');
      await era.printAndWait('自分に残された最後の慈悲');
      await era.printAndWait('仕掛け？ 陰謀？ 計算？');
      await era.printAndWait('そんなものはもうどうでもいい');
      era.println();
      await you.say_and_wait(
        'タキオン……この金で……一晩、俺に付き合ってくれないか？',
      );
      era.println();
      await era.printAndWait(
        '口にした瞬間、限界まで張ったばねがようやく緩んだ',
      );
      await era.printAndWait('ああ……');
      await era.printAndWait('相手を想うときだけ、頭は息をつけた');
      await era.printAndWait('相手を念じるときだけ、内側は麻痺できた');
      await era.printAndWait('なぜ昔の自分は気づかなかった');
      await era.printAndWait('なぜずっと、意味のないことに金を借りていた');
      await era.printAndWait('心の唯一の安らぎは、ここにあったのに');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒に食事がしたい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒にドライブがしたい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒に夜景が見たい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と一緒にラブホテルへ入りたい',
      ]);
      await era.printAndWait([
        '徹底的に、内側から外側まで、完全に ',
        tachyon.get_colored_name(),
        ' のものになりたい',
      ]);
      await era.printAndWait('そう想うほど、胸は軽くなり、楽になる');
      era.println();
      await tachyon.say_as_unknown_and_wait('ふふ……いい子、いい子ですわ');
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' は本当の幸福を得た',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] talk
  async talk(
    tachyon,
    coffee,
    you,
    callname,
    call_9,
    y_call_s,
    call_25,
    relation,
    love,
    talk_times,
    cook_times,
  ) {
    const buffer = [];
    if (relation < 75) {
      if (talk_times >= 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            '……',
            callname,
            '、今日の実験報告は書き終えました？',
          ]);
          await tachyon.say_and_wait(
            'ここで雑談する暇があるなら、先にやるべきことを済ませなさい',
          );
        });
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              'さあ、今回の薬ですわ………『味が変』？ 忘れていますのね。あなたは実験動物ですわ。実験動物が薬の味を嫌う道理などありません。',
            ),
          async () => {
            await tachyon.say_and_wait([
              '限界……',
              tachyon.uma_sex_title,
              '……脚……いいえ、やはりだめですわ……',
              callname,
              '？ そこにいつから立っていますの？',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は何かを考え込んでいるようだった。',
            ]);
          },
          () =>
            tachyon.say_and_wait([
              coffee.get_colored_name(),
              '？ ええ、',
              tachyon.sex,
              'は興味深い観察対象ですわ。それに万一……いいえ、何でもありません。今の話は忘れてください。',
            ]),
          async () => {
            await tachyon.say_and_wait(
              '服……？ ああ、三日ほど風呂に入っていませんわね……',
            );
            await tachyon.say_and_wait(
              'あなたに何の関係がありますの。無駄にするなら実験に回しなさい……',
            );
            await tachyon.say_and_wait(
              'もう結構ですわ。あなたはモルモットです。私が何をしようと、あなたには関係ありません。',
            );
          },
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は、',
              tachyon.get_colored_name(),
              ' がミキサーで今日の昼食を掻き回しているのを見た。',
            ]);
            await tachyon.say_and_wait([
              '食事？ 必要ありませんわ。人であろうと',
              tachyon.uma_sex_title,
              'であろうと、最低限の栄養さえ補えば足ります。味を求める余分など、無駄な手間ですわ。',
            ]);
          },
          () =>
            tachyon.say_and_wait(
              'たかがモルモットですわ。実験の手伝いをしながら私の機嫌も取っておきなさい。価値がなくなったとき、慈悲をかけてあげるかもしれませんもの。',
            ),
          () =>
            tachyon.say_and_wait(
              '用があるなら早く言いなさい。実験の時間を無駄にしないで。',
            ),
          async () => {
            await tachyon.say_and_wait('ふう……');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は溜息をついた。機嫌は悪そうだ。今は構わないほうがいい……',
            ]);
          },
          async () => {
            await tachyon.say_and_wait('ふんふんふん～～ふんふん～～');
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はご機嫌らしい。だが',
              tachyon.sex,
              'の手にある、危険な墨緑色に光る薬剤を見て、',
              you.get_colored_name(),
              ' はその上機嫌を壊さないことにした。',
            ]);
          },
        );
      }
    } else if (relation < 150) {
      if (talk_times >= 10) {
        if (cook_times < 5) {
          await tachyon.say_and_wait([
            callname,
            '、暇なら料理の腕を磨きなさいな。人が口にできるもの、早く作れるようになってください',
          ]);
        } else {
          await tachyon.say_and_wait([
            callname,
            '、本当に用がないなら実験器具を全部洗いなさい。実験着を洗うでも、ゴミを捨てるでもいいわ。できることはいくらでもありますでしょう？ そこでぼうっとしていないで',
          ]);
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              '、今日の薬ですわ……逃げますの？ ふふ、',
              tachyon.uma_sex_title,
              'の手から逃げられるとでも思ったのですか？',
            ]),
          async () => {
            await tachyon.say_and_wait([
              tachyon.uma_sex_title,
              'の限界……スパート……進化……生存……人類補完計画……腐敗した社会……救済……再生……閉じた現状からの脱出……',
            ]);
            await tachyon.say_and_wait(
              'ああ、わかりましたわ。すべての真実はエジプトにありますわね。',
            );
            await era.printAndWait([
              '……',
              tachyon.get_colored_name(),
              ' が突然おかしなことを言い出した。今は構わないほうがいい。',
            ]);
          },
          async () => {
            await tachyon.say_and_wait(
              'ああ……丁度いいわ。白衣を洗ってくださいな。先日の実験で汚してしまって…………',
            );
            await tachyon.say_and_wait(
              'なぜすぐに渡さないの？ 忘れていただけですわ。第一、気づかなかったのはモルモットとしての怠慢でしょう？',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '食事？ ……見解は変わっていませんわ。食事は栄養を補うためだけに存在し、それ以上でも以下でもない……',
            );
            await tachyon.say_and_wait(
              'ただ、そうですね。最近はこの時間を、少し楽しみにしていますわ……',
            );
            await tachyon.say_and_wait(
              'いいえ、深読みしないで。天と地の差を思い知らせるためだけですわ。あのときの屈辱はそう簡単に帳消しになりません。毎日試薬を引き受けてくれるなら、考えなくもありませんけれど……',
            );
            await you.say_and_wait('それ、今と同じじゃないか？');
            await tachyon.say_and_wait(
              'そう言われると……待って、毎日……いいえ、何でもありません。忘れて。今、すぐに、直ちに。',
            );
          },
          () =>
            tachyon.say_and_wait(
              '最近のご飯……まあ及第点ですわ。もう少し甘く……いいえ、何でもありません',
            ),
          async () => {
            await tachyon.say_and_wait([
              'ああ、',
              call_9,
              '……『この前のクッキーと飲み物、ありがとうございました』？',
            ]);
            await tachyon.say_and_wait(
              '大したことではありませんわ。気に入ったなら、また取りにいらっしゃい…………',
            );
            await tachyon.say_and_wait(
              'その顔は何ですの。可愛い後輩に、そんなものは渡しませんわよ',
            );
          },
          async () => {
            await tachyon.say_and_wait('ふんふん～～ふんふんふん～～');
            await tachyon.say_and_wait(
              '十匹のモルモットお出かけ〜湾に落ちて九匹〜',
            );
            await tachyon.say_and_wait('火山に落ちて八匹〜宝穴で迷って七匹〜');
            await tachyon.say_and_wait(
              '怒涛に巻かれて六匹〜コンドルに襲われ五匹〜',
            );
            await tachyon.say_and_wait('食べ過ぎて四匹〜頂を目指して三匹〜');
            await tachyon.say_and_wait(
              'ターボ爆発で二匹〜コーヒー飲み過ぎて一匹〜',
            );
            await tachyon.say_and_wait(
              'ひとりぼっちのモルモットチューチュー〜薬を飲んでドカンと爆発〜〜',
            );
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' が妙な歌を口ずさんでいるのを聞いた……歌詞の意味はわからないが、今の',
              tachyon.sex,
              'には近づかないほうがいい気がした。',
            ]);
          },
        );
      }
    } else if (relation > 225 && love < 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            'おや、',
            callname,
            '、どうして急に話しかけに来たのです？',
          ]);
          await tachyon.say_and_wait('ふふ、ただの気紛れですの？');
          await tachyon.say_and_wait(
            '他に目的があるはずですもの。いいえ、何でもありません。物事に好奇心を持つのは良いことですわ',
          );
          await tachyon.say_and_wait([
            '口上の探索も含めて、ですわ。そうでしょう、画面の向こうの ',
            callname,
            '？',
          ]);
          await tachyon.say_and_wait(
            '何の話かって？ ふふ、さあ、誰が知っているかしら',
          );
        },
        async () => {
          await tachyon.say_and_wait(['ああ、', callname, '、危ない！']);
          await tachyon.say_and_wait(
            'ふう、突然話しかけてくるからですわ。薬が零れるところでした',
          );
          await tachyon.say_and_wait(
            '何の薬かですって？ ふふ、以前集めたあなたのDNA、覚えていますわね？',
          );
          await tachyon.say_and_wait(
            '匂いを嗅いだ者をあなたに狂わせる薬ですわよ……ん？ 零れなくて後悔し始めました？ ……助平ですわね',
          );
          await tachyon.say_and_wait(
            '冗談ですわ。本当は、あの人のDNAを基にした指向性の毒……',
          );
          await tachyon.say_and_wait(
            '蒸気を嗅いだだけでも鼻腔に病変を起こし、癌細胞を作らせますわ……',
          );
          await tachyon.say_and_wait(
            'まあまあ、そんなに怯えなくても。はは、零れていないのですからいいでしょう',
          );
          await tachyon.say_and_wait(
            'ん？ どちらが本当か……それはご想像にお任せしますわ～～',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……今日の服……']);
          await tachyon.say_and_wait(
            'それから、その、考えたのですけれど。洗濯を頼むのはまだしも、下着まで洗うのはさすがに行き過ぎですわね',
          );
          await tachyon.say_and_wait(
            '……いいえ、匂いの話ではありませんわ。第一、臭くなどありませんわよ！',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            'ここまで来ると、あなたの弁当にはすっかり慣れましたわね',
          );
          await tachyon.say_and_wait(
            'ふふ、今では食べられない日のほうが落ち着かないくらいですわ',
          );
          await tachyon.say_and_wait('こんな暮らし……このまま維持して……');
          await tachyon.say_and_wait(
            'ふふ、研究者にとって、維持など褒め言葉ではありませんわ',
          );
          await tachyon.say_and_wait(
            '維持ばかり考えていては、突破は訪れません……',
          );
          await tachyon.say_and_wait('その通りですわ……でも……');
          await tachyon.say_and_wait(
            'どうしてかしら。今の暮らしが、このまま続いてもいいと思えてしまって……',
          );
          await tachyon.say_and_wait('どうして……');
        },
      );
    } else if (relation > 375 && love < 50) {
      buffer.push(async () => {
        await tachyon.say_and_wait(['おや、来ましたわね ', callname]);
        await tachyon.say_and_wait('今日の実験は……ん？ どうしました');
        await tachyon.say_and_wait(
          '近すぎます？ そうかしら。私は丁度いいと思いますわ',
        );
        await tachyon.say_and_wait('それとも、恥ずかしがっていますの？');
      });
    } else if (talk_times >= 10) {
      buffer.push(() =>
        tachyon.say_and_wait([
          callname,
          '、もっと話すのは構いませんけれど、他にやるべきことがあるでしょう？',
        ]),
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            callname,
            '！今日の薬は、右の緑と左の赤、どちらにします？',
          ]);
          await tachyon.say_and_wait(
            'どちらもいや？ わかっていましたわ。やはり第三の選択、虹色ですわね！',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……明日の弁当']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' に、明日は休みだと伝えようとした',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ええ……',
            callname,
            '、休みでも人は食事をしなくていいわけではありませんわよ',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'は心配そうな目で ',
            you.get_colored_name(),
            ' を見た',
          ]);
          await you.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は悟った。この状況で何を言っても無駄だ。',
            tachyon.sex,
            'の弁当を作ると約束するしかなかった',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '～～今日の服もお願いしますわ',
          ]);
          await tachyon.say_and_wait(
            'はあ？ 自分で洗う？ 私の時間は風が運んでくるものだとでも？',
          );
          await tachyon.say_and_wait(
            'それに、これもあなたへのご褒美ですわよ～～',
          );
          await tachyon.say_and_wait('私が着ていた肌着ですもの～～');
          await tachyon.say_and_wait(
            '臭い！？ ちょっと！ 失礼にもほどがありますわ！',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            'はあ？ 授業に出なくても成績に響くかですって？',
          );
          await tachyon.say_and_wait([
            callname,
            '、受験教育は凡人を育てるためのものですわ。天賦の才である私に、必要などあるはずがありません',
          ]);
          await tachyon.say_and_wait([
            '『では試験も出なくていいのですか？』？ 何を言っていますの、',
            callname,
            '。試験は明日……今日！？',
          ]);
        },
        async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はいつもと違い、無言のまま体を預けてきた',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '、どうかしました？']);
          era.println();
          await you.say_and_wait('何でもない');
          await era.printAndWait([
            you.get_colored_name(),
            ' が答えたあと、',
            tachyon.sex,
            'は続けて ',
            you.get_colored_name(),
            ' に寄りかかった',
          ]);
          await era.printAndWait(
            '二人のあいだに言葉はなく、そのまま無言の時間が流れた',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '？ 丁度いいわ。これを全部、防炎の特殊紙に書き写して！',
          ]);
          await tachyon.say_and_wait([
            call_25,
            ' のやつ！ ',
            tachyon.sex,
            'で実験をしただけなのに、実験資料を全部焼くと脅してきましたわ！',
          ]);
          await tachyon.say_and_wait([
            'なんとか午後三時まで待ってもらいましたけれど、それまでに写し終えませんと！',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' に急き立てられ、机に向かって書き写しに加わった',
          ]);
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' の胸に疑問が浮かぶ。本当に焼くなら、事前に知らせたりするだろうか……？',
          ]);
          era.println();
          await era.printAndWait(
            '案の定、午後三時を過ぎても研究資料は燃えなかった。実験室はいつものように穏やかで、',
          );
          await era.printAndWait([
            '被害を受けたのは、半日かけて部屋一杯の資料を書き写した ',
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' の手だけだった',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            call_9,
            ' の子……可愛いではありませんか？',
          ]);
          await tachyon.say_and_wait([
            'なぜか',
            tachyon.sex,
            'を見ると、父性に近いものが湧いてくるのですわ',
          ]);
          if (tachyon.sex_code - 1) {
            era.println();
            await you.say_and_wait('母性じゃないのか？');
          }
          era.println();
          if (era.get('cflag:0:种族') > 0) {
            await tachyon.say_and_wait([
              'もう',
              you.uma_sex_title,
              'になったのにわからないのですか？',
              callname,
              ' は鈍いですわね',
            ]);
            era.println();
            await you.say_and_wait('……何を言っているのかわからない');
          } else {
            await tachyon.say_and_wait([
              '違いますわ……この感覚は説明しにくいのです。あなたが',
              tachyon.uma_sex_title,
              'になれば、わかるでしょう',
            ]);
            era.println();
            await you.say_and_wait([
              'いつか自分が',
              tachyon.uma_sex_title,
              'になるみたいに言わないでくれ！？',
            ]);
          }
        },
        async () => {
          await tachyon.say_and_wait('sky君はいい子ですわね……');
          era.println();
          await you.say_and_wait([
            'ん？ タキオンは ',
            y_call_s,
            ' と知り合いなのか',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'いいえ……私が言っているのと、あなたの言っているのは、たぶん同じsky君ではありませんわ',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は首を傾げて ',
            tachyon.get_colored_name(),
            ' を見た。学園に他にもskyがいるのか',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……いいえ、やめましょう、',
            callname,
            '。今のは聞かなかったことにして',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] talk_hizamakura
  async talk_hizamakura(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, ', 피곤하군. 좀 눕겠네.']);
    era.printButton('승낙한다', 1);
    era.printButton('거절한다', 2);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 마음속으로 답을 정하기도 전에 ',
      tachyon.get_colored_name(),
      '은(는) 이미 ',
      you.get_colored_name(),
      '의 무릎 위에 누워 있었다.',
    ]);
    era.printButton('「이봐, 타키온.」', 1);
    await era.input();
    await tachyon.say_and_wait('ZZZ');
    era.println();
    await era.printAndWait('너무 빠르잖아!?');
    await era.printAndWait([
      tachyon.sex,
      '을(를) 깨우지 않으려고 ',
      you.get_colored_name(),
      '은(는) 얌전히 그 자세를 유지한 채 꼼짝할 수 없었다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '이(가) 일어나면 꼭 주의를 줘야겠다. 민폐도 문제지만 이성의 무릎에 불쑥 눕다니 경계심이 너무 없잖아.',
    ]);
    era.println();
    await tachyon.say_and_wait('으음……');
    era.println();
    await era.printAndWait([
      '얕게 잠든 듯 ',
      tachyon.sex,
      '은(는) 몸을 뒤척였다.',
      you.get_colored_name(),
      '의 마음속에서 준비하던 잔소리는 ',
      tachyon.sex,
      '의 얼굴을 본 순간 흔적도 없이 사라졌다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '의 눈가에 드리운 다크서클과 쓰러질 듯한 피로는 ',
      tachyon.sex,
      '이(가) 얼마나 불안정하게 잠을 자는지 보여 주고 있었다.',
    ]);
    await era.printAndWait([
      '생각해 보니 요즘 ',
      tachyon.sex,
      '은(는) 연구가 벽에 부딪혀 제대로 잠도 못 자는 모양이다.',
    ]);
    await era.printAndWait([
      '그나마 다행인 것은 ',
      you.get_colored_name(),
      '의 무릎 위에 있을 때 ',
      tachyon.sex,
      '의 미간이 편안하게 풀린다는 사실이었다.',
    ]);
    await era.printAndWait([
      '……이렇게 해서 ',
      tachyon.sex,
      '이(가) 조금이라도 잠을 잘 수 있다면, 가끔은 이 정도쯤 괜찮겠지.',
    ]);
  },

  // [번역 완료] talk_tenn_spr
  async talk_tenn_spr(tachyon, you, tenn_spr) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '와(과) ',
      tenn_spr,
      '에 관해 이야기하고 싶었지만, ',
      tachyon.sex,
      '는 곧 모습을 감췄다.',
    ]);
  },

  // [번역 완료] ws_cook02
  async ws_cook02(tachyon, you) {
    await era.printAndWait([
      '점심시간, 어째서인지 ',
      tachyon.get_colored_name(),
      '은(는) 일부러 ',
      tachyon.sex,
      '의 믹서를 실험대 위에 올려놓고 출력을 최대로 높여 요란한 소음을 내며 ',
      tachyon.sex,
      '의 『점심』을 갈아대기 시작했다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 문득 떠올렸다. 지난주는 너무 바빠서 ',
      tachyon.sex,
      '의 도시락을 잊어버렸다…… 이번 주에는 반드시 챙기자.',
    ]);
  },

  // [번역 완료] ws_cook03
  async ws_cook03(tachyon, you, callname) {
    await tachyon.say_and_wait([
      callname,
      ', 공든 탑도 마지막 한 삽을 빠뜨리면 무너진다는 말을 알고 있겠지?',
    ]);
    await tachyon.say_and_wait(
      '달리 말해 백 리를 가는 사람은 구십 리를 절반으로 여겨야 하는 법. 끝까지 계속하는 자만이 성공하네.',
    );
    await tachyon.say_and_wait(
      '레이스에서도 마찬가지일세. 능력치가 떨어지고 스킬이 불발될 수는 있지. 하지만 육성을 통해 얻은 지식은 자네를 배신하지 않네.',
    );
    await tachyon.say_and_wait(
      '그래, 서포트 카드가 남보다 부족해도 괜찮네. 6R로도 SS급을 육성할 수 있으니까. 모든 건 노력과 끈기의 문제지……',
    );
    era.println();
    await era.printAndWait([
      '오늘 트레이너실에 들어오자마자 ',
      tachyon.get_colored_name(),
      '은(는) 도무지 알 수 없는 장광설을 늘어놓기 시작했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '그러니까 내 말은………… 요리도 노력이 중요하다는 걸세.',
    );
    era.println();
    await era.printAndWait([
      '그 말을 듣고 ',
      you.get_colored_name(),
      '은(는) 비로소 깨달았다. 지난 2주는 너무 바빠서 ',
      you.get_colored_name(),
      '은(는) 또 잊어버린 것이다. 안 되겠어. 이번에는 반드시 기억하자……',
    ]);
  },

  // [번역 대상] ws_cook04
  async ws_cook04(tachyon, you, callname) {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '今日実験室に着いた瞬間、',
      you.get_colored_name(),
      ' は ',
      tachyon.get_colored_name(),
      ' の機嫌がひどく悪いと察した。しかも、',
      you.get_colored_name(),
      ' は理由を知っている',
    ]);
    era.println();
    await era.printAndWait(['原因は ', you.get_colored_name()]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は三週間、',
      tachyon.get_colored_name(),
      ' に料理をしていない',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は慌てて',
      tachyon.sex,
      'に、この数週間は本当に忙しくて時間が取れなかったと弁解した……',
      you.get_colored_name(),
      ' 自身ですら信じられない嘘だった',
    ]);
    await era.printAndWait([
      '純粋に忘れたのか、他の',
      tachyon.uma_sex_title,
      'の育成に時間を割いたのか、',
    ]);
    await era.printAndWait(
      'あるいは、まだ違う台詞があるか確かめたかっただけなのか。「あなた」の時間は、いくらでもある',
    );
    await era.printAndWait([
      'だが今の ',
      you.get_colored_name(),
      ' は、そんな拙い言い訳で許しを乞うしかなかった',
    ]);
    era.println();
    await tachyon.say_and_wait('…………許すも何も、ありませんわ');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を一瞥して言った',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'これもあなたの可能性の一つ、立派な研究サンプルですわ。あなたの努力は否定しません、',
    );
    await tachyon.say_and_wait(
      '同様に、怠惰も唾棄しません。どちらにせよあなた自身の選択ですもの。私には一点の関係もありませんわ',
    );
    era.println();
    await era.printAndWait('そうだ。強いて言えば');
    await era.printAndWait([
      tachyon.sex,
      'はやっと振り返った。今日初めて',
      tachyon.sex,
      'が ',
      you.get_colored_name(),
      ' を見た',
    ]);
    await era.printAndWait([
      tachyon.sex,
      'の眼に失望も、嫌悪も、怒りもなかった',
    ]);
    await era.printAndWait(
      '言いようのない感情だった。どうしても名づけるなら、それは————退屈',
    );
    era.println();
    await tachyon.say_and_wait('あなたの可能性とは、この程度ですのね');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      'は目標に届かなかった実験動物を見る目で ',
      you.get_colored_name(),
      ' を見て、それから口を開いた',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '価値を上げる努力を続けなさい、',
      callname,
      '……でないと、退屈した日に捨ててしまうかもしれませんわ',
    ]);
  },

  // [번역 완료] ws_cook12
  async ws_cook12(tachyon, you) {
    await tachyon.say_and_wait('으음……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 오늘 조금 안절부절못하는 모습이었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 긴장한 채 ',
      tachyon.sex,
      '에게 무슨 일이라도 있었는지 물었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('…………흥, 아무것도 아닐세.');
    era.println();
    await era.printAndWait([tachyon.sex, '은(는) 토라진 듯 아무렇지도 않다고 말했다.']);
    await tachyon.say_and_wait('꾸르르～～～～');
    await era.printAndWait([
      '그때 마침 기가 막힌 타이밍에 ',
      tachyon.sex,
      '의 배에서 커다란 소리가 났다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await you.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 문득 떠올렸다. 지난주에 ',
      you.get_colored_name(),
      '은(는) 완전히 ',
      tachyon.sex,
      '의 도시락을 잊어버린 것이다.',
    ]);
    await era.printAndWait('설마……');
    era.println();
    await tachyon.say_and_wait(
      '…………어쨌든 식사란 최소한의 활동 에너지만 유지할 수 있으면 충분하네.',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '은(는) 여전히 강한 척하고 있었다.',
      you.get_colored_name(),
      '은(는) 황급히 ',
      tachyon.sex,
      '에게 사과하고 오늘만큼은 잊지 않겠다고 약속했다.',
    ]);
  },

  // [번역 완료] ws_cook13
  async ws_cook13(tachyon, you, callname) {
    await tachyon.say_and_wait(['흠, ', callname, ', 오늘 먹을 약일세.']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 갑자기 트레이너실로 들이닥쳐 ',
      you.get_colored_name(),
      '에게 색깔이 기묘한—— 아니, 그런 점에서는 늘 그렇듯한—— 약을 먹였다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 약을 마신 뒤 얼마 지나지 않아 잠에 빠졌다.',
    ]);
    await era.printAndWait([
      '꿈속에서 ',
      you.get_colored_name(),
      '은(는) 사막을 걷고 있었다. 며칠째 먹지도 마시지도 못한 채……',
    ]);
    await era.printAndWait([
      '갑자기 장면이 바뀌었고 꿈속의 ',
      you.get_colored_name(),
      '은(는) 누군가에게 진흙 같은 영양식을 계속 억지로 먹었다. 목으로 넘기기도 어려운데……',
    ]);
    await era.printAndWait([
      '방금 전 사막을 헤매던 꿈을 떠올리고 ',
      you.get_colored_name(),
      '은(는) 어쩔 수 없이 그것을 삼켰다…………',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 꿈에서 화들짝 깨어났다. 눈앞에는 ',
      tachyon.get_colored_name(),
      '의 의기양양한 얼굴이 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['어떤가, 악몽을 꿨나? ', callname]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 쓴웃음을 지었다. 이 약이 무슨 의미인지는 대강 알겠다. 이번 주에는 반드시 ',
      tachyon.get_colored_name(),
      '의 도시락을 잊지 않겠다고 서둘러 다짐했다.',
    ]);
  },

  // [번역 대상] ws_cook14
  async ws_cook14(tachyon, amazon, tama, akebono, taste, you, callname) {
    await era.printAndWait([
      '今朝、',
      you.get_colored_name(),
      ' が学園に着いた瞬間から、おかしかった',
    ]);
    await era.printAndWait('学園全体が、焦燥の空気に包まれている');
    await era.printAndWait(
      'その空気は昼休みに極まり、昼食時の食堂で頂点に達した',
    );
    era.println();
    await you.say_as_passer_by_and_wait('通りすがりのトレーナーA', [
      '全員の',
      tachyon.uma_sex_title,
      'が暴走してる！',
      tachyon.couple_title,
      'がいきなり担当トレーナーに弁当をせがみ始めたんだ！',
    ]);
    await you.say_as_passer_by_and_wait('通りすがりのトレーナーA', [
      '手製じゃないとダメだって！ ちくしょう、',
      tachyon.couple_title,
      'はどうやってトレーナー製かどうか見分けるんだ！',
    ]);
    era.println();
    await era.printAndWait([
      'モブのトレーナーは、なぜかトレーナー室に押し入ると現状解説のようにそう言い終え、戸口から飛び込んできた担当',
      tachyon.uma_sex_title,
      'に引きずり出された',
    ]);
    era.printButton('「い、いったい……何が……」', 1);
    await era.input();
    await tachyon.say_and_wait('おや、事情を訊く方がいらっしゃいましたわね？');
    await era.printAndWait([
      '突然、',
      you.get_colored_name(),
      ' の背後から聞き慣れた声がした。だが ',
      you.get_colored_name(),
      ' は、',
      tachyon.sex,
      'がいつトレーナー室に入ったのかすらわからなかった',
    ]);
    era.println();
    await tachyon.say_and_wait(
      'そこまで誠心誠意訊くのですから、慈悲深く教えてあげますわ',
    );
    await tachyon.say_and_wait([
      tachyon.uma_sex_title,
      'と弁当の悪を貫くため、愛らしく魅惑的な狂気の科学者',
    ]);
    await tachyon.say_and_wait([
      '長すぎるので以下略。要するにアグネスタキオンですわ。さあ、',
      callname,
      '、おとなしく弁当を出しなさい',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の座っている椅子の背に寄りかかり、座ったままの ',
      you.get_colored_name(),
      ' を見下ろして、侵略性の強い笑みを浮かべた',
    ]);
    era.printButton('「また何をした」', 1);
    await era.input();
    await tachyon.say_and_wait(
      'おや、ひどいですわ。すぐに私を疑うなんて。被害者かもしれませんのに',
    );
    era.println();
    await era.printAndWait([tachyon.sex, 'はあわれっぽい声で言った']);
    era.printButton('「今自分で認めただろう」', 1);
    await era.input();
    await tachyon.say_and_wait('ええ……たしかに、そんなこともありましたわね');
    await era.printAndWait('そんな些事は気にしないで');
    await era.printAndWait([tachyon.sex, 'は袖をひらりと振って言った']);
    era.println();
    await tachyon.say_and_wait([
      '重要なのは、',
      callname,
      '、弁当を出すことですわ',
    ]);
    era.printButton('「こんな強制で、おとなしく従うと思うか？」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '…………ふふ、もちろんですわ。最終的には、おとなしく弁当を捧げますもの',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は謎めいた笑みを浮かべ、',
      you.get_colored_name(),
      ' は思わず後ろめたくなった',
    ]);
    await era.printAndWait([
      '今日、',
      you.get_colored_name(),
      ' はたしかに ',
      tachyon.get_colored_name(),
      ' の弁当を作った。だが仕事が忙しく、本当に忘れてしまった',
    ]);
    await era.printAndWait(
      'だがここは譲れない。トレーナーとしての尊厳のため！ 自由のため！ ……のためだ',
    );
    era.println();
    await taste.say_and_wait([
      '発表します！ 未知の要因により、学園内の全',
      tachyon.uma_sex_title,
      'が、トレーナー手製の弁当への不明な執着に陥っています、',
    ]);
    await taste.say_and_wait([
      '各トレーナーは直ちに愛馬の弁当を作ってください。料理ができないトレーナーは、事務局長、家庭科の先生、および ',
      tama.get_colored_name(),
      '、',
      amazon.get_colored_name(),
      ' または ',
      akebono.get_colored_name(),
      ' に支援を求めてください',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '得意満面の ',
      tachyon.get_colored_name(),
      ' を見て、',
      you.get_colored_name(),
      ' は苦笑するしかなかった',
    ]);
    await era.printAndWait([
      'やはり',
      tachyon.sex,
      'には勝てない。',
      you.get_colored_name(),
      ' はおとなしく弁当を差し出した',
    ]);
  },

  // [번역 완료] ws_cook22
  async ws_cook22(tachyon, you, callname, cook_times) {
    await era.printAndWait([
      '점심시간에 ',
      you.get_colored_name(),
      '이(가) 데이터를 입력하고 있는데 트레이너실 문이 벌컥 열렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '! 내 밥은 어디 있나! 빨리, 빨리!']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 들어오자마자 책상 위로 뛰어올라 데굴데굴 구르기 시작했다.',
    ]);
    era.println();
    await era.printAndWait('위험해, 위험해!');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 황급히 책상 위의 컴퓨터를 치워 ',
      tachyon.get_colored_name(),
      '에게 떨어뜨림을 당하지 않도록 했다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '! 벌써 일주일이나 도시락을 만들어 주지 않았잖나! 굶어 죽겠네. 빨리, 내 도시락은 어디 있나!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 소매를 휘두르며 화가 난 채 ',
      you.get_colored_name(),
      '의 앞에서 발을 쿵쿵 굴렀다. 터질 듯이 부푼 볼은 복어 같았지만……',
    ]);
    era.printButton('「만들어 줬잖아?」', 1);
    await era.input();
    if (cook_times < 20) {
      await tachyon.say_and_wait('그렇게 대충 만든 걸 도시락이라고 할 수 있나!?');
    } else {
      await tachyon.say_and_wait(
        '맛의 차이는 모르겠지만…… 내 직감은 자네가 대충 만들었다고 말하는군.',
      );
    }
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('방금 『귀찮은 녀석』이라고 생각했지?');
    await you.say_and_wait('……');
    await you.say_and_wait('어떻게 알았지?', true);
    era.println();
    await tachyon.say_and_wait(
      '어쨌든 내일은 반드시 도시락을 보여 주게! 그러지 않으면 후회할 걸세.',
    );
  },

  // [번역 대상] ws_cook23
  async ws_cook23(tachyon, you, callname) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      ' は二週間、',
      you.get_colored_name(),
      ' に実験をしていない',
    ]);
    await era.printAndWait([
      '最初の一週間は正直、',
      you.get_colored_name(),
      ' に未練はなく、むしろ喜んでいた、',
    ]);
    await era.printAndWait([
      '毎日 ',
      tachyon.get_colored_name(),
      ' の姿は見られるし、日常は普通だ。ただ',
      tachyon.sex,
      'が ',
      you.get_colored_name(),
      ' に実験をしなくなっただけなのだから',
    ]);
    await era.printAndWait([
      'だが二週目、',
      you.get_colored_name(),
      ' はおかしいと感じ始めた。ストックホルム症候群……',
    ]);
    await era.printAndWait([
      'そうではない。ただ',
      tachyon.sex,
      'の様子が心配で、不吉な予感もある',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は',
      tachyon.sex,
      'の実験室の前まで行き、ノックした。中から返事はない',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' はまずいと感じ、そのまま押し入った',
    ]);
    era.println();
    await era.printAndWait([
      '見た目は ',
      tachyon.get_colored_name(),
      ' なのに、なぜか二頭身の、どこか愛らしい生き物になっていた、',
    ]);
    await era.printAndWait('後ろの尻尾は丸く太く、まるで……タヌキの尻尾？');
    await era.printAndWait([
      'ええ？？ 何が起きている？？ これが ',
      tachyon.get_colored_name(),
      ' なのか？？？',
    ]);
    era.println();
    await era.printAndWait('…………なるほど');
    await era.printAndWait([you.get_colored_name(), ' はすべてを理解した']);
    await era.printAndWait(
      '間違いない。来歴不明の薬、実験体を人として見ない態度、そして今ようやく現れた尻尾',
    );
    await era.printAndWait([
      'そう、',
      tachyon.get_colored_name(),
      ' は最初からタヌキの化けたものだった！',
    ]);
    era.println();
    await era.printAndWait('…………いや、この錯乱した妄想は一旦横へ置こう');
    await era.printAndWait(
      'なぜか周囲に奇妙なBGMが流れ始めた。アメリアの遺言らしい。美しい曲だが、この侘びた光景との対比が鮮やかすぎる',
    );
    await era.printAndWait([
      '慌てた ',
      you.get_colored_name(),
      ' は、以前 ',
      tachyon.get_colored_name(),
      ' が弁当について言っていたことを思い出し、自分用に残していた弁当を取り出した',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '？ 何をしていますの？']);
    await era.printAndWait([
      '正気に戻った ',
      tachyon.get_colored_name(),
      ' は一瞬で元の姿に戻った。空の弁当箱だけが、今しがたの出来事を証明している',
    ]);
    await era.printAndWait([
      '夢ではなかった……とにかく、これからは ',
      tachyon.get_colored_name(),
      ' の弁当を忘れないようにしよう',
    ]);
  },

  // [번역 완료] ws_hate
  async ws_hate(tachyon, you, callname) {
    await era.printAndWait([
      '갑자기 ',
      tachyon.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '에게 입을 맞췄다.',
    ]);
    await era.printAndWait([
      '뜨거운 액체가 두 사람의 입을 오갔고, 삼켜진 액체는 ',
      you.get_colored_name(),
      '의 목구멍을 타고 넘어갔다.',
    ]);
    await era.printAndWait('액체가 지나간 곳에 순식간에 타는 듯한 통증이 퍼졌다.');
    era.println();
    await tachyon.say_and_wait(['아픈가, ', callname]);
    await tachyon.say_and_wait(
      '나도 아프네…… 내가 만든 약이지만 이렇게 강하게 작용할 줄은 몰랐군.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 얼굴은 웃고 있었지만 눈만은 웃고 있지 않았다.',
    ]);
    era.println();
    await tachyon.say_and_wait('비난하지는 않겠네…… 속아 넘어간 쪽이 잘못한 거니까.');
    await tachyon.say_and_wait(
      '이건 자네를 향한 벌인 동시에 사람을 잘못 판단한 나를 향한 벌이기도 하네.',
    );
    await tachyon.say_and_wait(
      '나가라고도 하지 않겠네…… 인정하고 싶지는 않지만 이런 일을 겪고도 자네가 떠나는 건 원치 않으니까.',
    );
    await tachyon.say_and_wait([
      '그러니 나의 사랑하는 ',
      callname,
      '……이제 남은 여생 동안 서로를 원망하며 함께 지내는 건 어떤가?',
    ]);
  },

  // [번역 완료] ws_punishment1
  ws_punishment1: (() => {
    const title = '실험 기록: 우마무스메화';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      if (era.get('love:32') < 75) {
        await tachyon.say_and_wait(
          '오호, 모르모트…… 아니, 모르모트 씨. 찾아왔군……',
        );
        await tachyon.say_and_wait(
          '응? 어떻게 알았느냐고? 후후, 그러고 보니 그때는 의식이 없었지.',
        );
        await tachyon.say_and_wait('수술은 바로 내가 집도했다네.');
        await tachyon.say_and_wait(
          '트레이너로서 무능하다는 것은 가장 큰 죄지. 그런 의미에서 자네는 도저히 용서할 수 없는 죄인이군.',
        );
        await tachyon.say_and_wait(
          '하지만 기뻐하게. 내 연구 덕분에 자네는 두 번째 기회를 얻었으니.',
        );
        await tachyon.say_and_wait(
          '애초에 중앙 트레센에 입학할 정도라면 남보다 뛰어난 점 하나쯤은 있겠지. 그 재능을 찾아내느냐가 문제일 뿐.',
        );
        await tachyon.say_and_wait(
          '우마무스메가 된 자네에게 의외로 이쪽 분야의 재능이 있을지도 모르겠군.',
        );
        await tachyon.say_and_wait(
          '기껏 얻은 두 번째 기회이니 필사적으로 발버둥 쳐 보게, 모르모트 씨.',
        );
        await tachyon.say_and_wait(
          '그렇지 않으면…… 다음에 수술대 위에서 나를 본 뒤 벌어질 일은 결코 겪고 싶지 않을 테니까…… 아니, 어쩌면 원할지도 모르겠군?',
        );
        await tachyon.say_and_wait(
          '정말 그렇게 된다면 아주 귀여워해 주겠네.',
        );
      } else {
        await tachyon.say_and_wait(
          `모르모트…… 아니, ${you.actual_name} 군.`,
        );
        await tachyon.say_and_wait('미안하네. 그래도 규칙은 규칙이니……');
        await tachyon.say_and_wait(
          '아니…… 내 탓이네………… 자네의 수술을 집도한 것은 나였으니까.',
        );
        await tachyon.say_and_wait('……그래, 후후.');
        await tachyon.say_and_wait(
          '걱정하지 말게…… 난 신경 쓰지 않네. 어떤 모습이 되더라도 자네 눈동자의 빛이 남아 있는 한 똑같이 사랑할 테니까.',
        );
        await tachyon.say_and_wait(
          '…………게다가 우마무스메가 되면 함께 즐길 수 있는 일도 늘어날 테고.',
        );
        await tachyon.say_and_wait('후후, 잔뜩 귀여워해 주겠네.');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_punishment2
  ws_punishment2: (() => {
    const title = '実験記録：性奴隷改造';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      const love = era.get('love:32');
      await era.printAndWait('「ぐちゅ……ぐちゅ……ちゅぽ……ちゅる……」');
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          'ちっちっち……モルモットさん、警告したはずですわよ？',
        );
        await tachyon.say_and_wait('もう一度やった末路……ふふ。');
      } else {
        await tachyon.say_and_wait('モルモット君……みっともないですわね。');
        await tachyon.say_and_wait(
          '恥ずかしい。こんな相手が恋人だなんて、認めたくもありませんわ。',
        );
      }
      era.println();
      await era.printAndWait('アグネスタキオンの研究室。');
      await era.printAndWait(
        'この時間は本来、タキオンが薬剤を調合し研究する時間だ。',
      );
      await era.printAndWait(
        `だが新しい身分で戻ってきた ${you.name} を迎えるため、${tachyon.sex}は今日の予定をわざわざ取り消し、祝いの薬まで自ら調合した。`,
      );
      era.println();
      await era.printAndWait('「しゅる……ちゅる……ちゅぐ……ぐちゅ……」');
      era.println();
      await tachyon.say_and_wait(
        'それとも、これが本当にあなたが望んでいたことですの？',
      );
      await tachyon.say_and_wait(
        '好き放題弄ばれ、自分の意志など持たない性奴隷になることを？',
      );
      era.println();
      await era.printAndWait(
        'タキオンは両脚を開き、いつもの回転椅子にだらしなく身を預けていた。',
      );
      await era.printAndWait(
        `${tachyon.sex}の両脚の間では、馬耳を生やした女性が蹲っている。着ているのはタキオンと同型の、袖の長い白衣だが、いくつか違う。`,
      );
      await era.printAndWait(
        '後ろ裾がわざわざ切り開いてあり、風が通るたび、丸い尻が白衣の下からむき出しになる。',
      );
      await era.printAndWait(
        '胸元には薬液で溶かしたような不定形の穴が二つ開き、乳首が空気に晒されている。',
      );
      await era.printAndWait(
        '下着？ ボタンを留めることすら許されない白衣の中央に見える肉色を見れば、そんなものがないのは分かるはずだ。',
      );
      await era.printAndWait(
        '情趣具より過激な服を着たウマ娘が、頭を前後に動かし、タキオンの脚の間の太い陰茎を含んでいる。',
      );
      if (era.get('cflag:32:性别') === 0) {
        await era.printAndWait(
          'ウマ娘の体にあるはずのない器官。その理由は、もちろんタキオンの薬が作ったものだ。',
        );
        era.println();
        await tachyon.say_and_wait(
          'ふふ……私のフロンP系列のおかげで、性奴隷の仕事をちゃんと体験できますわ。双方とも雌では、遊びようがありませんものね？',
        );
        era.println();
        await era.printAndWait(
          `地面に蹲るウマ娘———つまり ${you.name}——は聞こえないふりをして、眼前の巨物に奉仕し続けた。`,
        );
        await era.printAndWait(
          '雌が二人、という言い方は客観的には少し違うかもしれないが、結論はだいたい同じだ。',
        );
        await era.printAndWait(
          `誰が見ても、${you.name} の、限界まで張っているのに上に括ったローターより短い生殖器を、正常な雄が雌を孕ませる器官だとは認めないだろう。強いて言えば……そう、陰核と呼ぶ方がまだ相応しい。`,
        );
      }
      era.println();

      await era.printAndWait([
        `ふいに、一心に`,
        tachyon.uma_sex_title,
        `の主人へ奉仕していた ${you.name} の全身が震えた。`,
      ]);
      await era.printAndWait([
        `${you.name} の下で、限界まで勃起しても`,
        tachyon.uma_sex_title,
        `の主人の片方の睾丸より小さい「陰核」が、今日四発目、水のように薄い液を噴いた。`,
      ]);
      await era.printAndWait('それも、眼前の主人の不興を買った。');
      era.println();

      if (love < 75) {
        await tachyon.say_and_wait(
          '自分の気持ちよさばかりで、いちばん基礎の口奉仕すらできない……性奴隷としても、こんなに落ちこぼれだとは思いませんでしたわ。',
        );
        era.println();

        await era.printAndWait([
          `${you.name} は慌てて気を取り直し、担当の`,
          tachyon.uma_sex_title,
          `兼主人へ奉仕を続けた。`,
        ]);
        await era.printAndWait(
          `だがもともと我慢のきかない${tachyon.sex}は、${you.name} の拙い奉仕に愛想を尽かしていた。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は立ち上がり、股間の巨物を ${you.name} の喉へさらに深く押し込んだ。`,
        );
        await era.printAndWait([
          '巨大な陰嚢が ',
          you.get_colored_name(),
          ' の顎にぶつかり、重く温かい流動感が、',
          you.get_colored_name(),
          ' の口へ噴き出す白濁の量を予告していた。',
        ]);
        era.println();

        await tachyon.say_and_wait(
          'そういえば、モルモット……いいえ、性奴隷君。まだ覚えていますかしら。',
        );
        era.println();

        await era.printAndWait(
          `わざと性奴隷「君」に呼び戻したことで、${you.name} はその倒錯にますます興奮し、下の「陰核」は壊れた蛇口のように、さっきから水のように澄んだ液を流し続けていた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '改造手術は全部私がしましたわ。だからあなたの性感帯については、この世でいちばんよく知っているのは、間違いなく私ですわ。',
        );
        era.println();

        await era.printAndWait(
          `たとえば、${tachyon.sex}はいきなり ${you.name} の喉を何度も突き、何かを探しているようだった。`,
        );
        await era.printAndWait(
          `そんな乱暴な扱いを受け、${you.name} はまた、自分がただの物品、性欲を吐き出す道具だと自覚した。`,
        );
        await era.printAndWait(
          `突きの途中、どこかに擦れたのか、${you.name} の喉が急に収縮し、下半身は前後とも汁を噴き出した。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ああ、見つけましたわ。ここですわね、あなたの喉の性感帯。',
        );
        await tachyon.say_and_wait(
          'ここを突けば、雄が千回射精するのにも劣らない快感……ふふ、でももう、雄だった頃のことは知らなくてもいいでしょうね。',
        );
        era.println();

        await era.printAndWait(
          `言葉を聞く余裕などなく、${you.name} の精力は今、潮のように押し寄せる快感をこらえることにしか使えない。`,
        );
        await era.printAndWait(
          `全力で抗わなければ、波ひとつで ${you.name} は地面に崩れ、止まらない噴水になる。`,
        );
        await era.printAndWait('だがその波も、主人の肉棒の一突きにすぎない。');
        await era.printAndWait(
          `積み重なる快感で ${you.name} の全身の筋肉は締まり、喉まで名器と呼べるほどに狭まった。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'おお……！ この締め付けですわ！ 出ますわよ、ちゃんと受け止めてなさい！',
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は ${you.name} の頭を強く押さえ、前後に激しく突き動かした。`,
        );
        await era.printAndWait(
          '普通の人間の体なら、こんな弄り方では命に関わるだろう。',
        );
        await era.printAndWait(
          `幸か不幸か、今の ${you.name} はウマ娘で、しかも特殊な改造を受けたウマ娘だ。`,
        );
        await era.printAndWait(
          `だからどれだけ乱暴でも、${you.name} の体は耐え、それをすべて快感へ変える。`,
        );
        await era.printAndWait(
          `窒息の苦しさまで、${you.name} の体が勝手に快感へ変え、やがて ${you.name} は自らその感覚を味わい始めた。`,
        );
        await era.printAndWait(
          `${you.name} の喉は主人の出入りに合わせて締めを変え続ける。まるで、ではなく、${you.name} の喉そのものが名器だ！`,
        );
        era.println();

        await tachyon.say_and_wait(
          '受け止めなさい。漏らしたら終わりですわよ。',
        );
        era.println();

        await era.printAndWait(
          '冷たい命令のあと、灼熱の白濁が滾って押し寄せた。',
        );
        await era.printAndWait(
          `膨大な量が ${you.name} の口も鼻も喉も舌も埋め、今にも溢れそうになる……`,
        );
        await era.printAndWait([
          `${you.name} は慌てて口いっぱいになった腥い液を飲み込んだが、その努力でも`,
          tachyon.uma_sex_title,
          `さまの恵みをすべて収めることはできなかった。`,
        ]);
        await era.printAndWait([
          `結局……${you.name} は無力なまま手で、`,
          tachyon.uma_sex_title,
          `さまの貴重な種汁を受け止めるしかなかった。`,
        ]);
        era.println();

        await era.printAndWait(
          'それでも、口の中で撃ち続ける太い砲身は止まらない。',
        );
        await era.printAndWait(
          `長い酸欠は、酸欠の快感を味わえる ${you.name} でも、頑丈なウマ娘の体でも完全には耐えきれず、やがて ${you.name} の意識は霞んでいった……`,
        );
        era.println();

        await era.printAndWait('「ドン！」');
        era.println();

        await era.printAndWait([
          'ふいに、鋭い痛みで ',
          you.get_colored_name(),
          ' は目を覚ました。',
        ]);
        await era.printAndWait(
          `${you.name} は思わず声を上げようとしたが、開いた喉へすぐまた白濁が注がれた。`,
        );
        await era.printAndWait([
          `${you.name} が顔を上げると、見えたのは担当`,
          tachyon.uma_sex_title,
          '兼主人の脚だった。',
        ]);
        await era.printAndWait(
          '自分が何より大切にし、自分の脚より大事にしてきた美しい足。',
        );
        await era.printAndWait(
          `それが今、情け容赦なく ${you.name} の腹を踏んでいる。`,
        );
        era.println();

        await tachyon.say_and_wait(
          '性奴隷としての能力……完全に不合格ですわね。',
        );
        await tachyon.say_and_wait('もっとちゃんと調教しないと……');
        era.println();

        await era.printAndWait(
          `飲みきれなかった白濁が ${you.name} の全身に落ち、服も濃い液でまみれた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'せっかくの研究室をこんな有様に……ちっ、我慢なりませんわ。',
        );
        era.println();

        await era.printAndWait(
          `タキオンは厭わしげに言い、ふと何か思いついたように身をかがめ、${you.name} に囁いた。`,
        );
      } else {
        await tachyon.say_and_wait(
          'こんな薄い汁しか出せないなんて、この役立たずの器官に、まだ存在する意味がありますの？',
        );
        await tachyon.say_and_wait(
          'ねえモルモット君、私はあなたを満たせる他の雄を探した方がいいのかしら……今のあなたじゃ、いったい誰を満たせますの？',
        );
        era.println();

        await era.printAndWait(
          `その言葉を聞き、${you.name} は慌てて恋人兼主人さまへさらに真剣に奉仕し、見捨てないでと頼んだ。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は満足げに ${you.name} の頭を撫で、もっと勤勉に奉仕するよう促した。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'そんなに捨てられるのが怖いですの？ いい子、いい子。',
        );
        await tachyon.say_and_wait(
          '安心なさい。他人に体を触らせるつもりもありませんわ……でも恋人なら、相手の性欲を満たすのも義務でしょう？',
        );
        era.println();

        await era.printAndWait(
          `優しい言葉とともに、${tachyon.sex}は ${you.name} の尻を叩いて合図した。`,
        );
        await era.printAndWait(
          `${you.name} はすぐ従順に主人に背を向け、自分を雌にした入口を自ら開いた。`,
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は立ち上がり、股間の巨物を、もう濡れた ${you.name} の穴へ深く満たした。`,
        );
        await era.printAndWait(
          `巨大な陰嚢が ${you.name} の丸い尻にぶつかり、重く温かい流動感が、穴の中へ噴き出す白濁の量を予告していた。`,
        );
        await era.printAndWait(
          `入った瞬間、${you.name} は堪らず甘い声を漏らし、後ろの主人は満足そうに息を吐いた。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ふふ、性奴隷になっても、私たちの体はいちばん噛み合っていますわね。',
        );
        await tachyon.say_and_wait(
          '当然ですわ。モルモット君の体は私が改造したんですもの。全部、私の基準で調整してありますわ。',
        );
        era.println();

        await era.printAndWait('自分の体は、主人に合わせて改造された。');
        await era.printAndWait('自分は主人の専用性奴隷だ。');
        era.println();

        await era.printAndWait(
          `その考えで ${you.name} はますます興奮し、穴も思わず締まった。`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ん……急にこんなに締めて。どうしましたの？ 今の話で興奮したんですの？ こんな状況でもこれほど感じるなんて、昔の私は優しさが足りず、あなたの願いを見逃していたようですわね。',
        );
        era.println();

        await era.printAndWait(
          `言い終わるころ、後ろの突きはますます強く激しくなり、${you.name} は察して腰を後ろへ合わせ、主人の褒美を迎えた。`,
        );
        era.println();

        await tachyon.say_and_wait('出ますわ……ちゃんと受け止めなさい！');
        era.println();

        await era.printAndWait(
          `${tachyon.sex}の手が ${you.name} の尻を強く叩き、肉が波打つ。${you.name} が堪らず漏らす喘ぎが、主人の興をさらに煽った。`,
        );
        await era.printAndWait(
          `最後、${you.name} の震えを伴う絶頂とともに、熱い肉柱が ${you.name} の体内へ濃い白濁を注いだ。`,
        );
        await era.printAndWait(
          `${you.name} は体内の満ち足りた感覚を抱えたまま、意識を闇へ落とした……`,
        );
        era.println();

        await tachyon.say_and_wait(
          'ねえねえ、溢れてばかりじゃありませんこと？ せっかくの研究室をこんなにして……',
        );
        era.println();

        await era.printAndWait(
          `主人の不機嫌な声を聞き、${you.name} は一瞬で目が覚めた。`,
        );
        await era.printAndWait(
          `床に自分が無駄にした主人の精を見て、${you.name} は慌て、いちばん無駄にしない方法を選ぶしかなかった……`,
        );
        era.println();

        await tachyon.say_and_wait(
          'いい子、いい子。きちんと綺麗にするのがいい子ですわ。',
        );
        era.println();

        await era.printAndWait(
          `主人は床で子犬のように精を舐める ${you.name} を撫で、${you.name} は嬉しくてもっと熱心に舐めた。`,
        );
      }
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          `十分後に戻りますわ。そのときまだ片付いていなければ、『罰』をあげますわ。`,
        );
      } else {
        await tachyon.say_and_wait('ええ……そうしましょう');
        await tachyon.say_and_wait(
          'いい子。十分後に戻りますわ。そのときまだ片付いていなければ、『罰』をあげますわ。',
        );
      }
      await tachyon.say_and_wait(
        'もう片付いていれば、『ご褒美』をあげますわ。',
      );
      if (love < 75) {
        await tachyon.say_and_wait(
          'どちらにするかは、あなた自身が決めなさい、性奴隷『君』～',
        );
      } else {
        await tachyon.say_and_wait(
          'どちらにするかは、あなた自身が決めなさい～',
        );
        await tachyon.say_and_wait(
          'でも安心なさい。どちらにせよ、たっぷり可愛がってあげますわ❤️',
        );
      }
      era.println();

      await era.printAndWait(
        '言い終えると、タキオンはズボンを履いて研究室を出た。',
      );

      if (love < 75) {
        await era.printAndWait(
          `床に残された ${you.name} は、腹が風船のように膨らみ、口角から白汁を流したまま、室内で力なく息をしていた。`,
        );
        await era.printAndWait(
          `ご褒美か、罰か……${you.name} は隅の掃除道具棚を見た。`,
        );
      } else {
        await era.printAndWait(
          `床に残された ${you.name} は、腹が風船のように膨らみ、まだ白汁を噴きながら、力なく床を掃除していた。`,
        );
        await era.printAndWait(`ご褒美か、罰か……`);
      }
      await era.printAndWait('では、どう選ぶ？');
    };
    f.title = title;
    return f;
  })(),

  // 한국어 작업 모듈 연결: ws_punishment3
  ws_punishment3: (() => {
    const title = '実験記録：孕袋と複数ウマ娘の体液研究';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk|false} child アグネスタキオンとプレイヤーの子。いなければ false
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_5 アグネスタキオンがフジキセキを呼ぶ名前
     * @param {PrintedSpan} call_9 アグネスタキオンがダイワスカーレットを呼ぶ名前
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名前
     * @param {PrintedSpan} call_36 アグネスタキオンがエアシャカールを呼ぶ名前
     * @param {PrintedSpan} call_94 アグネスタキオンがジャングルポケットを呼ぶ名前
     */
    const f = async (
      tachyon,
      child,
      you,
      call_5,
      call_9,
      call_25,
      call_36,
      call_94,
    ) => {
      await tachyon.say_and_wait('ふんふんふん～～');
      era.println();

      await era.printAndWait(
        'アグネスタキオンは嬉しそうに鼻歌を口ずさみ、見慣れた廊下を歩いていた。',
      );
      await era.printAndWait(
        '普段、この階の廊下は奇妙な薬が吹き出す研究室のせいで生徒に敬遠されている……が、最近はまた少し人が戻ってきたらしい。',
      );
      await era.printAndWait(
        `だが${tachyon.sex}は自分の研究室を通り過ぎ、ある掃除道具棚の前で止まった。`,
      );
      era.println();

      await tachyon.say_and_wait([
        'ちっち……容赦ないですわね。一般的な',
        tachyon.uma_sex_title,
        'の性欲を、見くびっていたかしら。',
      ]);
      era.println();

      await era.printAndWait(
        `掃除道具棚の中には、目がとろんとし、口にボールギャグを填め、腹がぽっこり膨らみ、下の穴には二本の巨根が栓として刺さり、全身が愛液と精液にまみれ、正の字と下品な言葉を書き殴られた ${you.name} がいた。`,
      );
      era.println();

      await tachyon.say_and_wait('モルモット君？ 起きなさい。');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}は ${you.name} への呼び方で声を掛けたが、三日三晩弄ばれた ${you.name} の目はまだとろんとしており、答えようともがいても、視線は虚空を泳ぐだけだった。`,
      );
      era.println();

      await era.printAndWait([
        'これほど惨めな光景を見ても、',
        tachyon.get_colored_name(),
        ' に憐れみも同情もなかった。',
      ]);
      await era.printAndWait(
        `${tachyon.sex}は容赦なく足を上げ、${you.name} の腹を踏んだ。`,
      );
      await era.printAndWait(
        `踏まれた瞬間、${you.name} はエビのように体を縮めたが、それでもしっかりと踏みつけられた。もともと膨らんだ腹を踏まれた瞬間、強制的に空気を抜かれた風船のように、栓にしていた二本の按摩棒を下の口から噴き出し、続いて腹いっぱいの愛液と精液が溢れた。縮こまる ${you.name} は全身を震わせ、その短い間にまた一度絶頂し、短い肉棒からも薄い種汁が漏れた。`,
      );
      era.println();

      await tachyon.say_and_wait(
        'いい量ですわ。これならしばらく実験に足りますわね。',
      );
      era.println();

      await era.printAndWait([
        `タキオンは、噴水が爆発した瞬間に間に合わせて取り出したビーカーを嬉しそうに見た。中は今集めた`,
        tachyon.uma_sex_title,
        `の体液で満たされている。だがこの一杯では ${you.name} の穴から出た量の三分の一にも満たず、残りは床に飛び散り、掃除係の厄介になった。`,
      ]);
      await era.printAndWait('まあ、汚した者が掃除する。当然のことだ。');
      era.println();

      await tachyon.say_and_wait('モルモット君～今回の実験は大成功ですわよ～');
      era.println();

      await era.printAndWait(
        'タキオンは何事もなかったように、興奮して実験の話を分け与えた。',
      );
      await era.printAndWait(
        `だが……何事もなかった、というのは ${you.name} の甘い錯覚にすぎない。`,
      );
      era.println();
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_25,
          ` は意外と隠れスケベですわ……${tachyon.sex}ならこんな遊びは断ると思っていたのに、結果は……`,
        ]);
        era.println();
        await era.printAndWait(
          `タキオンは猟犬の痕跡が残る ${you.name} の首から肩まで撫で、それから……手を下ろし、歯形だらけの乳房に触れた。乳首の歯形が特に目立っていた。`,
        );
        await era.printAndWait(
          `触れた瞬間、${you.name} はまた体を震わせた。少し撫でただけと頭の中の想像で、今の ${you.name} は絶頂してしまう。`,
        );
        era.println();
      }
      if (era.get('cflag:94:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_94,
          ' も……最初はあんなに恥ずかしがっていたのに……',
        ]);
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は、まだボールギャグで塞がれ声も出せない ${you.name} の唇を弄んだ。少し腫れた両唇が、この数日どれほど苛まれたかをタキオンに教えていた。`,
        );
        era.println();

        await tachyon.say_and_wait([
          call_94,
          ' の声は、研究室にいてもはっきり聞こえましたわ。',
        ]);
        era.println();
      }
      if (era.get('cflag:9:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_9,
          '……ふふ、さすが私が目をかけた子。この方面でも一位ですわ。',
        ]);
        era.println();

        await era.printAndWait(
          'まだ確かめてはいないが、今入れたビーカーの中身の七割くらいは、スカーレット一人が出した分だろう。',
        );
        await era.printAndWait([
          `閨でも一位でなければ気が済まない意地のおかげで、${tachyon.sex}はこの三日、いちばん長く ${you.name} に跨り続けた`,
          tachyon.uma_sex_title,
          'だった',
        ]);
        era.println();
      }
      if (era.get('cflag:5:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'それに、',
          call_5,
          ' も私の提案を受けて実験に付き合ってくれましたわ。ちっち、うちのモルモット君の顔は大きいですわね。寮長まで魔の手から逃げられませんわ。',
        ]);
        era.println();

        await era.printAndWait(
          'タキオンはモルモットの太もも内側を撫でた。正の字だらけの両脚。そのうち四行は特別な筆跡で、微かに光っている。芸人はいつも大げさだ。正の字を書くときも例外ではない。',
        );
        era.println();
      }
      if (era.get('cflag:36:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'ちっち。毎日論理だ論理だと言いながら、閨では理性を全部忘れますわね……',
          call_36,
        ]);
        era.println();

        await era.printAndWait(
          `タキオンは ${you.name} の菊穴に触れた。この数日こちらを腫れるまで突いた主因はシャカールの肉柱だ。本当にすべて合理的なら、生産の意味のない穴に出すのはいちばん論理に反する行為だろう。だがこの三日、${tachyon.sex}が休みなく耕す様子を見て、${you.name} は口に出す気にもなれなかった。もちろん、聞く暇もなかった。`,
        );
        era.println();
      }
      if (child) {
        const callname_c =
          era.get(`cflag:${child.id}:父方角色`) === 0 ? 'パパ' : 'ママ';
        await tachyon.say_and_wait([
          child.get_colored_name(),
          '……さすが私の',
          child.sex_code === 1 ? '息子' : '娘',
          'ですわ。こんなに早く独学で『',
          callname_c,
          '』の穴を使っていますわね……まあ子供ですもの、独占欲が強いのも分かりますわ。',
        ]);
        era.println();

        await era.printAndWait([
          'タキオンは ',
          you.get_colored_name(),
          ' の尻を叩いた。そこには幼い字で『',
          callname_c,
          'は私専用の便器』と書いてある。この子は本当に意味を分かっているのか……タキオンがその一文を読み上げ、もし理解したうえで書いたのだとしたら……',
          you.get_colored_name(),
          ' はまた堪らず絶頂した。',
        ]);
        era.println();
      }
      if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
        await tachyon.say_and_wait(
          'お腹の子が哀れですわ……母親がこんな誰にでも股を開く娼婦だなんて。私なら精液で溺れた方がマシですわ。',
        );
        era.println();

        await era.printAndWait(
          'タキオンはまた強く一踏みし、嘲りと侮蔑を込めて言った。',
        );
        era.println();
        await tachyon.say_and_wait(
          '喜びなさい。ウマ娘の体は頑丈ですわ。こう踏んでも傷つくのはあなただけで、お腹の子には何もありません……でもそんなこと、どうでもいいのでしょうね。肉棒さえあればいい娼婦さん。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} は反論したかったが、下から噴く潮がそれを許さなかった。`,
        );
        era.println();
      }
      await tachyon.say_and_wait(
        'こちらは、『かつて』あなたに恋慕していた子たちが残したものですわ。',
      );
      era.println();
      await era.printAndWait([
        `タキオンは ${you.name} の体に書かれた『雌犬』、『便器10円一回』、『`,
        tachyon.uma_sex_title,
        `さまの精便器』、『性愛ダービー18着』を撫でた。`,
      ]);
      await era.printAndWait([
        'どれも、憧れていたトレーナーが淫らな孕袋になったのを見て、愛が恨に、恨が欲に変わった',
        tachyon.uma_sex_title,
        'たちが残したものだ。',
      ]);
      era.println();
      await tachyon.say_and_wait('でも、気持ちよかったのでしょう？ ねえ？');
      era.println();
      await era.printAndWait('タキオンの顔に、嗜虐の笑みが広がった。');
      era.println();
      await tachyon.say_and_wait([
        'その浮かれた顔を見るに、字を書かれたとき、',
        tachyon.couple_title,
        'に一字一句読み上げさせたんじゃありませんこと？ ねえ？ 淫乱、駄犬、精液のためなら床に跪いて靴を舐める雌豚？',
      ]);
      era.println();
      await era.printAndWait(`一言ごとに、${you.name} の下から潮が湧いた。`);
      await era.printAndWait(
        `${you.name} がしようとした抵抗は、どれも見せかけの拒絶にしか見えなかった。`,
      );
      era.println();
      if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait('冗談ですわ。');
        era.println();
        await era.printAndWait(
          `ふいにタキオンは ${you.name} の顔を支え、${you.name} の口を塞いでいたボールギャグを優しく外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐いた。`,
        );
        era.println();
        await era.printAndWait(
          `目の前のタキオンの白衣を汚してしまい、${you.name} の顔は青ざめた。先の責めだけでなく、その不敬のせいでもあった。`,
        );
        era.println();

        await tachyon.say_and_wait('……大丈夫ですわ、モルモット君。');
        era.println();
        await era.printAndWait(
          `タキオンは吐瀉物のついていない袖で、${you.name} の口元を優しく拭った。`,
        );
        era.println();
        await tachyon.say_and_wait(
          '言いましたわよね。あなたを捨てたりしません。どんな姿になっても同じですわ。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} が反応する前に、${tachyon.sex}は ${you.name} の唇に口づけた。この数日どれほど苛まれ、どれだけの相手に汚され、今また何を吐いたかなど、構わずに。`,
        );
        await era.printAndWait('柔らかく、温かく、包み込むようなキス。');
        await era.printAndWait(
          `いつの間にか ${you.name} は、昔の日々に戻ったような気がした。`,
        );
        era.println();

        await era.printAndWait('……だが、それも『ような』だけだ。');
        era.println();

        await era.printAndWait(
          `${you.name} はタキオンの白衣の下で、ますます膨らむ膨らみを見て、自分の立場を思い出した。`,
        );
        await era.printAndWait(
          `タキオンも気づき、照れたように ${you.name} へ笑った。`,
        );
        era.println();

        await tachyon.say_and_wait('いいですの？ モルモット君？');
        era.println();

        await era.printAndWait(
          `${you.name} は答えず、ただ従順に地へ跪き、今日最初の奉仕を始めた。`,
        );
      } else {
        await tachyon.say_and_wait('これでまだ言い逃れするつもりですの？');
        era.println();

        await era.printAndWait(
          `タキオンは荒々しく ${you.name} のボールギャグを外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐き出そうとした。`,
        );
        await era.printAndWait('だが……');
        era.println();

        await tachyon.say_and_wait('何をするつもりですの、モルモット君。');
        era.println();

        await era.printAndWait('ああ、とっくに分かっていたはずだ。');
        await era.printAndWait(
          `${tachyon.sex}がわざわざギャグを外して楽をさせてくれるはずがない。`,
        );
        await era.printAndWait(
          `${you.name} が口を開いた瞬間、${tachyon.sex}の下の巨根が、吐き出そうとしたものも言葉もすべて塞いだ。`,
        );
        era.println();
        await tachyon.say_and_wait(
          'この数日は実験で忙しくて、私自身はまだ使っていませんでしたわ。',
        );
        era.println();
        await era.printAndWait(
          `淫らな匂いと、尿の気配すらする巨根が ${you.name} の喉を塞いだ。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は荒々しく ${you.name} の口と舌を使い、無機物のオナホールを扱うようだった。`,
        );
        await era.printAndWait('情はなく、ただ性欲を処理するためだけに使う。');
        era.println();
        await tachyon.say_and_wait(
          'ふう、出ますわ出ますわ。受け止めなさい。さもなくばあとで……まあいいわ。床を汚しても片付けるのはあなたですもの。',
        );
        era.println();
        await era.printAndWait(
          `タキオンは遠慮なく ${you.name} の口を満たすと、足を止めず研究室へ戻り、今日の研究を続けた。`,
        );
        await era.printAndWait(
          `今日最初の奉仕を終えた ${you.name} は虚ろな目で虚空を見つめ、いったい何がこうなるまで進んだのかを考えた。`,
        );
        await era.printAndWait(
          '……だが、そんな思考にも意味はない。改造手術のときに聞いた通り、もう戻れない。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は三日分溜まった白濁を懸命に飲み込み、自分が汚した廊下の床を見た……',
        ]);
        era.println();
        if ((await degeneration_to_evil('口で', '掃除道具で')) === 1) {
          await era.printAndWait(
            'どうせもう戻れない。なら思い切って理性を捨て、全部味わえばいい。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は地に跪き、三日分の ',
            you.get_colored_name(),
            ' が残した痕を舐めた。',
          ]);
          await era.printAndWait('理由は何だろう。');
          await era.printAndWait([
            tachyon.uma_sex_title,
            'さまに道具で掃除しているところを見られたら、もっと惨めになるから？',
          ]);
          await era.printAndWait(
            'この惨めさで、こんな暮らしから抜け出そうと自分を戒めるため？',
          );
          await era.printAndWait(
            'それとも……タキオンの言う通り、精液と肉棒のためなら体面も捨てて床を舐める下衆なのか？',
          );
          era.println();
          await era.printAndWait('そんな理由は、もうどうでもよかった。');
          await era.printAndWait([
            '地に伏せた ',
            you.get_colored_name(),
            ' の目に映り、耳に入り、口に乗るのは、床にも、自分の体にも、挿れる穴から流れ出る白濁の精だけだった。',
          ]);
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を拾わせた。',
          ]);
          await era.printAndWait([
            'では、今度はどの',
            tachyon.uma_sex_title,
            'さまが奉仕を要するのだろう。',
          ]);
          await era.printAndWait([
            'いつの間にか、',
            you.get_colored_name(),
            ' は自ら尻を上げ、次の賓客の使用を待っていた。',
          ]);
        } else {
          await era.printAndWait(
            '肉体は改造されても、せめて精神までは捨てられない。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はもがいて立ち上がった——',
            you.uma_sex_title,
            'の体でも、三日弄ばれたばかりの ',
            you.get_colored_name(),
            ' には辛い動作だ——掃除道具棚から、この数日 ',
            you.get_colored_name(),
            ' とさまざまな',
            tachyon.uma_sex_title,
            'の体液にまみれた掃除道具を取り出し、床に残した痕を拭いた。',
          ]);
          era.println();
          await era.printAndWait([
            '立ち上がっただけで足裏への刺激が、',
            you.get_colored_name(),
            ' を一度小さな絶頂へ連れていく。',
          ]);
          await era.printAndWait([
            '今も ',
            you.get_colored_name(),
            ' の穴と尻穴からは白濁と愛液の混じった粘液が流れ続け、',
            you.get_colored_name(),
            ' の掃除を邪魔する。',
          ]);
          await era.printAndWait(
            '先の丸い箒の柄を見て、その匂いを嗅いだだけで、五分しか空いていない穴をそれで満たしたくなる衝動が走る。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、箒と塵取りで無駄な掃除を続けた。',
          ]);
          await era.printAndWait(
            '自分は人間だ。ウマ娘でも、性奴隷でも、孕袋でもない。',
          );
          await era.printAndWait([
            'その意地は、まだ ',
            you.get_colored_name(),
            ' の胸に残っている。',
          ]);
          await era.printAndWait('だが……');
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を正確に捉えさせた。',
          ]);
          await era.printAndWait(
            '今日の使用者か。答えるまでもない。薬が漏れやすいこの廊下へ近づく理由など、それ以外に思いつかない。',
          );
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、聞こえないふりをして、人間としての誇りを守った。',
          ]);
          era.println();
          await era.printAndWait([
            '——————たとえそれが、五分後には ',
            you.get_colored_name(),
            ' 自身が自ら捨てるものだとしても。',
          ]);
        }
        era.setColor();
      }
    };
    f.title = title;
    return f;
  })(),
};
