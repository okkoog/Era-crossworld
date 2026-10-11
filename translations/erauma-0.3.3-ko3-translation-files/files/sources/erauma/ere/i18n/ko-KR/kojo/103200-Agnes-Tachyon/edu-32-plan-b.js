// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const recruit_flags = require('#/data/event/recruit-flags');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32-plan-b"),

  // [번역 완료] before_arim_kin_b
  before_arim_kin_b: (() => {
    const title = '最終実験、準備完了';
    /**
     * Plan B 専用、シニア年有馬記念の前
     * 注意：Plan B ではアグネスタキオンはシニア年有馬記念に出走できないため、このイベントは機制上マンハッタンカフェの同段階の前イベントに属する
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {string} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      arim_kin,
    ) => {
      await tachyon.print_and_wait('有馬記念');
      await tachyon.print_and_wait([
        callname,
        '의 말대로 이번 레이스가 끝나면 스스로에 대한 답을 얻을 것이다.',
      ]);
      await tachyon.print_and_wait('조금 두렵지만 동시에 조금 기대된다.');
      await tachyon.print_and_wait('맞이할 결말이 두렵고');
      await tachyon.print_and_wait('밝혀질 진실이 기대된다.');
      await tachyon.print_and_wait([you.sex, '은(는) 대체 무슨 말을 하려는 걸까?']);
      await tachyon.print_and_wait('오늘 아리마 기념에서 그 뜻이 분명해질까?');
      era.println();
      await coffee.say_and_wait(['……', c_call_t, '？']);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([c_call_t, '！']);
      await tachyon.say_and_wait('……응?');
      era.println();
      await era.printAndWait([
        '정신을 차려 보니 눈앞의 ',
        call_25,
        '이(가) 곤란하다는 듯 이쪽을 바라보고 있었다.',
      ]);
      era.println();
      await coffee.say_and_wait(
        '몇 번이나 불렀는데…… 또 무슨 생각에 정신이 팔려 있던 거야?',
      );
      await tachyon.say_and_wait('……아무것도 아닐세. 괜찮네.');
      await coffee.say_and_wait('……이상하네.');
      await tachyon.print_and_wait([
        call_25,
        '을(를) 위해서가 아니라면 자신은 절대 이런 꼴이 되지 않았을 것이다.',
      ]);
      await tachyon.print_and_wait([
        '애초부터 ',
        call_25,
        '을(를) 위해 힘쓰지 않았다면 좋았을 텐데. 적어도 자신은 ',
        callname,
        '의 마음속에서 가장 밝게 빛나는 존재로 남았을 것이다.',
      ]);
      await tachyon.print_and_wait([
        '……하지만 그런 생각은 단 한 조각도 ',
        tachyon.get_colored_name(),
        '의 머릿속에 떠오르지 않았다.',
      ]);
      await tachyon.print_and_wait([
        '그렇게 생각한다면 과거의 ',
        tachyon.get_colored_name(),
        '을(를) 전부 부정하는 셈이니까.',
      ]);
      await tachyon.print_and_wait([
        '무엇보다 ',
        call_25,
        ' 자신은 아무 잘못도 하지 않았다.',
      ]);
      await tachyon.print_and_wait(
        '단지…… 모든 일이 예상과 다르게 흘러갔을 뿐이다.',
      );
      await tachyon.print_and_wait([
        '그래서 ',
        tachyon.get_colored_name(),
        '은(는) 몹시 복잡한 눈빛으로 ',
        call_25,
        '을(를) 바라볼 수밖에 없었다.',
      ]);
      era.println();
      await coffee.say_and_wait('이제 슬슬 나갈 시간이야.');
      await tachyon.say_and_wait('……그래, 힘내게.');
      await coffee.say_and_wait([c_call_t, '……목소리가 좀 이상한데.']);
      era.println();
      await tachyon.print_and_wait([
        '너무 많은 기대를 걸었던 탓일까. ',
        tachyon.get_colored_name(),
        '의 목소리가 조금 쉬어 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……아무것도 아닐세. 어제 ',
        callname,
        '와(과) 거리에 나갔다가 조금 추웠을 뿐이네.',
      ]);
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '잠깐만. 너희 둘, 크리스마스에 거리에 나갔어? ……레이스가 끝나면 자세히 설명해 줘.',
        );
      } else {
        await coffee.say_and_wait([
          '또 ',
          callname_25,
          '와(과) 쏘다니다니…… 오늘은 ',
          arim_kin,
          '인데.',
        ]);
      }
      era.println();
      await era.printAndWait('그 뒤에 이어진 말은 이제 아무래도 좋았다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 기다리고 있었다. 레이스가 끝나고 수수께끼가 풀릴 순간을.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_takz_kin_b
  before_takz_kin_b: (() => {
    const title = '마음을 하나로';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait('피가 끓어오른다.');
      await era.printAndWait('얼마 만일까. 레이스가 주는 이 뜨거운 열기는.');
      era.println();
      await tachyon.say_and_wait([callname, '……다녀오겠네.']);
      era.printButton(
        `「가라! ${tachyon.uma_sex_title}의 한계를 보여 줘!」`,
        1,
      );
      era.printButton('「안심하고 이기고 와. 다시 한번 내 가슴을 뜨겁게 해 줘!」', 2);
      await era.input();
      await tachyon.say_and_wait('그래…… 그리고 다카라즈카가 끝나면……');
      era.println();
      await era.printAndWait([you.get_colored_name(), '은(는) 고개를 끄덕였다.']);
      await era.printAndWait('그날 약속했던 더욱 넓은 세계.');
      era.printButton('「우리의 한계를 세계의 정상에 새기자!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ending_b
  ending_b: (() => {
    const title = (tachyon, coffee) => [
      { color: 'white', content: '最強の' },
      {
        color: coffee.color,
        content: coffee.uma_sex_title,
        fontWeight: 'bold',
      },
      { color: 'white', content: '、最速の' },
      { color: tachyon.color, content: '走り', fontWeight: 'bold' },
    ];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await tachyon.print_and_wait([
        '最初、',
        tachyon.get_colored_name(),
        ' はただ待っていた',
      ]);
      await tachyon.print_and_wait([
        'レースの終わりを、',
        callname,
        ' が',
        you.sex,
        'の答えを出すのを',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        'には、このレースにどんな意味があるのかわからない',
      ]);
      await tachyon.print_and_wait([
        '今の自分と ',
        call_25,
        ' の差を見せつけるためか？',
      ]);
      await tachyon.print_and_wait(
        '今の自分ではまだ足りず、哀れが足りないというのか。そんな自暴自棄さえ浮かぶ',
      );
      await tachyon.print_and_wait([
        'だから',
        tachyon.sex,
        'は、レース場を真剣には見ていなかった',
      ]);
      await tachyon.print_and_wait('ただ、時間が過ぎるのを待っていた');
      era.println();
      await you.say_as_passer_by_and_wait('実況', [
        'レーススタート！ 各',
        tachyon.uma_sex_title,
        '、安定したスタートです！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '最初に、実況の声が',
        tachyon.sex,
        'の好奇心をくすぐった',
      ]);
      await tachyon.print_and_wait([
        '走れなくても、',
        tachyon.get_colored_name(),
        ' はすべてに好奇心を持っている',
      ]);
      await tachyon.print_and_wait([
        'まして相手は、理論上は自分が知り尽くしているはずの ',
        call_25,
      ]);
      era.println();
      await tachyon.print_and_wait('次いで、違和感');
      await tachyon.print_and_wait(
        '実は、その違和感は今に始まったものではない',
      );
      await tachyon.print_and_wait([
        'ジャパンカップが終わったときから、あった',
      ]);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' の走り……最初の',
        tachyon.sex,
        'の走りとは、ごくわずかに違う',
      ]);
      await tachyon.print_and_wait([
        'もし自分がずっと ',
        call_25,
        ' を見つめていたなら、気づけなかったかもしれない。それほどの微差だ',
      ]);
      await tachyon.print_and_wait([
        'だがジャパンカップ以降、',
        call_25,
        ' の走りを真剣に見ていなかった自分には、ほんのわずかな変化でもはっきり見える',
      ]);
      await tachyon.print_and_wait('とりわけ……');
      await tachyon.print_and_wait([
        'あれは依然として ',
        call_25,
        ' 自身の走りだ。だが……',
      ]);
      await tachyon.print_and_wait('細部……スタートの姿勢……呼吸の仕方……');
      await tachyon.print_and_wait([
        'その細部は……',
        tachyon.get_colored_name(),
        ' 自身すら意識していなかった、自分特有の癖だ',
      ]);
      await tachyon.print_and_wait('それは……');

      era.printButton(
        `「これは……俺の知る、最速と最強、二人の${tachyon.uma_sex_title}の走りを融合させたものだ」`,
        1,
      );
      await era.input();
      await tachyon.print_and_wait(
        '自分の心を離さないあの人が、いつの間にか傍に立っていた',
      );
      await tachyon.print_and_wait([
        '目の光は、まだ揺らめき、まだレース場を走るその',
        tachyon.uma_sex_title,
        'を見つめている',
      ]);
      await tachyon.print_and_wait('だが……');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        'の目の光は、いったい誰のために灯っているのか',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' のためか、それとも ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        'かつての自分は、当然のように思っていた。もうレース場に立てないなら、見つめているのは ',
        call_25,
        ' に決まっている、と',
      ]);
      await tachyon.print_and_wait('だが……');
      era.printButton(
        '「それに、俺は信じている。これ以上に絢爛で、眩しくて、人を魅了する走りはない」',
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait('実況', [
        coffee.get_colored_name(),
        '！ 光速を超えた漆黒の幻影！ 年末の中山を制したのは ',
        coffee.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '恍惚の中、自分は見た気がした。',
        tachyon.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' が同時にゴールを越える瞬間を',
      ]);
      era.drawLine();
      await era.printAndWait([
        'あの',
        tachyon.teen_sex_title,
        'が友人を超える夢を叶えるために',
      ]);
      await era.printAndWait(
        '心を離さないその姿を、これからも目の前で走らせるために',
      );
      await era.printAndWait([
        '最強の',
        tachyon.uma_sex_title,
        'と、最速を結び合わせる',
      ]);
      await era.printAndWait(
        '頭の中では、この瞬間に言うべき格好いい言葉をいくつも思い浮かべた',
      );
      await era.printAndWait('だが口を開いた瞬間……また塞がれた');
      await tachyon.say_and_wait('ちゅ……ぐ……ちゅぐ……');
      await era.printAndWait('これほど人の多い観客席で、これほど大胆なキス');
      await era.printAndWait([
        '……周囲がみなレース場中央の ',
        coffee.get_colored_name(),
        ' に気を取られていなければ、また非難の嵐が起きていただろう',
      ]);
      await era.printAndWait([
        'ある意味、いかにも',
        tachyon.sex,
        'がやりそうなことだ',
      ]);
      era.println();
      await era.printAndWait([
        'どれほど続いたかわからない。',
        you.get_colored_name(),
        ' が自分の命を心配し始め、落ち着いた観客に二人の異常が見つかりそうになったころ、',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'はようやく、人間にも',
        tachyon.uma_sex_title,
        'にも最も大切な酸素の存在を思い出した',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の、酸欠か、それとも何かの感情でか、微かに赤い顔、',
      ]);
      await era.printAndWait([
        'そして ',
        you.get_colored_name(),
        ' に愛されている、狂気の光を宿した暗红の瞳が、まだ ',
        you.get_colored_name(),
        ' の顔を真正面から見つめている',
      ]);
      await era.printAndWait('そして……');
      await era.printAndWait([
        'これが、',
        you.get_colored_name(),
        ' が初めて見た、この世に ',
        tachyon.get_colored_name(),
        ' の走りより輝くものがある瞬間だ',
      ]);
      await era.printAndWait([
        'すなわち、今このとき ',
        tachyon.get_colored_name(),
        ' の顔に浮かんだ笑顔',
      ]);
      era.drawLine({ content: 'トレセン学園へ戻ってから' });
      await coffee.say_and_wait('……今日、有馬を勝ったのは私で間違いないわね');
      await tachyon.say_and_wait([
        'もちろんですわ、',
        call_25,
        '。レースは見事でしたわよ',
      ]);
      await coffee.say_and_wait([
        'じゃあ……説明してくれる？ なぜ ',
        c_call_t,
        ' は得意げに ',
        callname_25,
        ' に張り付いてるの',
      ]);
      era.println();
      await era.printAndWait([
        'レース場から戻って以来、',
        tachyon.get_colored_name(),
        ' はずっと自分に掴まりっぱなしだ',
      ]);
      await era.printAndWait([
        '今も、',
        you.get_colored_name(),
        ' をソファに座らせると、左手を抱きしめたまま離さない',
      ]);
      await era.printAndWait([
        'そのうえ、すべて自分の手柄だと言わんばかりの顔で、得意げに ',
        coffee.get_colored_name(),
        ' を見ている',
      ]);
      era.println();
      await tachyon.say_and_wait('ふふん～～何が悪いのです？ 何が悪いのです？');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の、時代劇の悪役のような口調を聞いて',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' はまず全身を震わせた',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が、衝動で何かしかねないと心配した、まさにそのとき',
        ]);
        await coffee.say_and_wait('————じゃあ、私も');
        era.println();
        await era.printAndWait([
          '拗ねたように、',
          coffee.get_colored_name(),
          ' は一瞬でソファへ割り込み、',
          you.get_colored_name(),
          ' の両脚の間に座った',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'ちょっと——',
          call_25,
          '、それはずるいですわ！',
        ]);
        await coffee.say_and_wait(
          '……ずるくない。それに……ずるくて何が悪いの。今日の勝者は私なんだから……',
        );
        await tachyon.say_and_wait('くっ、私も座りますわ！');
        era.println();
        await era.printAndWait([
          '아이들처럼 말다툼하는 두 사람을 보고,',
          you.get_colored_name(),
          ' は苦笑する',
        ]);
        await era.printAndWait('—————なぜか急に、鴛鴦コーヒーが飲みたくなった');
        await coffee.say_and_wait([
          '……そうだ、',
          callname_25,
          '……',
          c_call_t,
          ' がレース前に言ってた、昨夜お出かけした件……あとでちゃんと説明してくれます？',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' が地利を活かして ',
          you.get_colored_name(),
          ' の耳元でそっと言ったのを聞いて',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の苦笑は、顔で固まった',
        ]);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は悪代官のような笑みを浮かべ、',
          you.get_colored_name(),
          ' に置いた手も落ち着きなく動いている',
        ]);
        await era.printAndWait('そして……');
        era.println();
        await tachyon.say_and_wait('ぐぇ————');
        era.println();
        await era.printAndWait([
          '突然、',
          tachyon.get_colored_name(),
          ' は名もなき未知の力に頭を撃たれたように、一瞬で昏倒した',
        ]);
        await coffee.say_and_wait('……まったく');
        await coffee.say_and_wait([
          'これで少しは静かになる……じゃあ、',
          callname_25,
          '、コーヒーにする？',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は微かに苦笑し、',
          coffee.get_colored_name(),
          ' に「頼む」と言った',
        ]);
        await era.printAndWait(
          'だが、ただのコーヒーは、今はなぜか少し苦すぎるように思える',
        );
        await era.printAndWait('冬の陽が差すトレーナー室で、今この瞬間は');
        await era.printAndWait('何かほかのものを足したほうがいい……');
        era.printButton('「……その、鴛鴦コーヒー、試してみないか？」', 1);
        await era.input();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を見て、まず少し怒り、次いで何かを思い出したように、困った顔をした',
        ]);
        await coffee.say_and_wait([
          '……今日だけ。それに絶対 ',
          c_call_t,
          ' には黙って。じゃないと',
          tachyon.sex,
          '、また騒ぎ出すから',
        ]);
        await era.printAndWait('コーヒーと混ぜた紅茶を一口飲む');
        await era.printAndWait(
          'コーヒーの苦みと紅茶の渋みは薄れたが、香りは減らず、かえって互いの風味が際立つ',
        );
        await era.printAndWait([
          'なぜか、',
          you.get_colored_name(),
          ' には今がまさにこの味だと感じられた',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] hot_spring_b
  hot_spring_b: (() => {
    const title = 'ほかの可能性';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} win_prix_lat アグネスタキオンがシニア年凱旋門賞を勝ったか
     * @param {number} chris_count クリスマスイベントで 1 を選んだ回数
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      love,
      win_prix_lat,
      chris_count,
    ) => {
      await tachyon.say_and_wait(
        'そういえば、まだこんなものがありましたわね……',
      );
      await tachyon.say_and_wait([
        '無駄にするのも惜しいですし、どうです、',
        callname,
        '？ 一緒に行きます？',
      ]);
      era.println();
      await era.printAndWait('偶然、実験室を整理していたとき');
      await era.printAndWait(['隅に隠されていた封筒を見つけた']);
      if (love >= 75) {
        await era.printAndWait('ん……？');
        await era.printAndWait('なぜか、違和感がひどく重い');
        await era.printAndWait([
          you.get_colored_name(),
          ' がよく見ると、すぐに尻尾が見えた',
        ]);
        await era.printAndWait(
          '大掃除で見つかったはずなのに、封筒には皺ひとつなく、むしろ丁寧にしまわれていたように見える',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が「見つけた」ものだと結びつけて、',
          you.get_colored_name(),
          ' はだいたい真相を察した',
        ]);
        era.println();
        await tachyon.say_and_wait(['ん？ ', callname, '？ どうしましたの？']);
        era.println();
        await era.printAndWait('……言わないでおこう');
        await era.printAndWait([
          'さもなくば、',
          tachyon.get_colored_name(),
          ' が羞恥で怒るのはまだいい。問題は',
          tachyon.sex,
          'が怒ったあと、夜の自分が絶対に楽をしないことだ',
        ]);
      }
      era.println();
      await era.printAndWait('ちょうど、急ぐ用事もほぼ片付いている');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' のURA決勝も、もう終わった',
      ]);
      await era.printAndWait('機会があるなら、一緒に行こう');
      era.drawLine();
      await era.printAndWait('十時間近く車に揺られたあと');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は、ようやく温泉宿に着いた',
      ]);
      era.println();
      await tachyon.say_and_wait('ふう……やっと着きましたわ');
      await tachyon.say_and_wait('ねえ……本当に、道を間違えていませんの？');
      era.printButton('「……地図には、たしかにここだと書いてある」', 1);
      await era.input();
      await era.printAndWait(['二人がためらうのも無理はない']);
      await era.printAndWait(
        '今いる場所は、原生林と呼んでも差し支えない深山だ',
      );
      await era.printAndWait('こんなところに、本当に温泉があるのか……');
      era.println();
      await tachyon.say_and_wait(
        '探しますわ……待ちなさい、ここ電波もないのですか！？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が携帯を出すと、深山には本当に電波がなかった',
      ]);
      await era.printAndWait('これは……まずい');
      era.println();
      await tachyon.say_and_wait([callname, '……いっそ、戻りません？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' も退散しようと考えた、まさにそのとき',
      ]);
      await era.printAndWait('茂みを一枚払うと、目の前に温泉宿が現れた');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' がフロントでチェックインしたあと、',
        you.get_colored_name(),
        ' はすぐ露天風呂へ入った',
      ]);
      await era.printAndWait(
        'まだ完全には暖まらない冬に、十数時間の車と山越え。本当に骨が折れた',
      );
      await era.printAndWait(
        'だが深山にも利点はある。宿には自分たち以外の客がおらず、いわば一人で宿を独占している',
      );
      await era.printAndWait('だから今の湯は、格別に気持ちいい');

      era.printButton('「……ん？」', 1);
      await era.input();
      await era.printAndWait('そのとき、脱衣所の暖簾に人の気配がした');
      await era.printAndWait(
        'ん？ 今だれもいないと言ったばかりなのに、ほかの客が来たのか？',
      );
      era.println();
      await tachyon.say_and_wait([callname, '？ 中にいますの？']);
      era.println();
      await era.printAndWait('……は？');
      era.printButton('「タキ……タキオン！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'おお、いましたわね。では、遠慮なく入りますわ',
      );
      era.println();
      await era.printAndWait([
        '言い終わるや、',
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' の返事を待たず、脱衣所の扉を押して入ってきた',
      ]);
      await era.printAndWait([
        '……',
        tachyon.sex,
        'がバスタオルを巻いているのを見て、',
        you.get_colored_name(),
        ' の胸は安堵か失望か、わからない',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ははは！ その顔、素っ裸で入ってくると思いましたの？',
      );
      await tachyon.say_and_wait('いくらなんでも、その程度の常識はありますわ');
      era.println();
      await era.printAndWait([
        '口調はからかっているようだが、',
        you.get_colored_name(),
        ' には',
        tachyon.sex,
        'が何か言いたげに感じられる',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '先ほどフロントの女将と少し話しまして……',
        tachyon.sex,
        '、私のことをまったく知りませんの',
      ]);
      await tachyon.say_and_wait([
        'というより、競走',
        tachyon.uma_sex_title,
        'の ',
        tachyon.get_colored_name(),
        ' を知りませんの',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が誤解しないよう、',
        tachyon.get_colored_name(),
        ' は急いで補足した',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' を見分けられないのは理解できる。誰もが',
        tachyon.uma_sex_title,
        'のレースに熱を上げて、選手一人ひとりの顔まで覚えているわけではない',
      ]);
      if (win_prix_lat) {
        await era.printAndWait([
          'だが競走',
          tachyon.uma_sex_title,
          'の ',
          tachyon.get_colored_name(),
          ' を知らない……世界の頂点、凱旋門賞を制した',
          tachyon.uma_sex_title,
          'を知らないのは、この世では確かに珍しい',
        ]);
      } else {
        await era.printAndWait([
          'だが競走',
          tachyon.uma_sex_title,
          'の ',
          tachyon.get_colored_name(),
          ' を知らないのは、この世では確かに珍しい',
        ]);
      }
      await era.printAndWait(
        'だが、これほど辺鄙な宿だと考えると、まあ普通かもしれないと思えてくる',
      );
      era.println();
      await tachyon.say_and_wait(
        '正直、驚きますわ……本当に、まったく知らない、見知らぬ人がいるなんて……',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' が続けるのを待った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も一瞬は驚いた。だが ',
        tachyon.get_colored_name(),
        ' は名利を好む',
        tachyon.uma_sex_title,
        'ではない。名声など、',
        tachyon.sex,
        'が最も気にしないもののひとつだ',
      ]);
      await era.printAndWait(
        'わざわざこれを持ち出すなら、ほかの理由があるのだろう',
      );
      era.println();
      if (chris_count < 2) {
        await tachyon.say_and_wait('クリスマスの日のことは、覚えていますの？');
        era.println();
        await era.printAndWait([
          'クリスマス……',
          you.get_colored_name(),
          ' はあの小さな居酒屋を思い出した',
        ]);
        await era.printAndWait(
          'レース場の世界は、本当にあそことは無縁のようだった',
        );
        await era.printAndWait(
          'レースがなくても、あの人たちの人生は同じように回っている',
        );
        await era.printAndWait('今この瞬間も、あのときのまま');
        await era.printAndWait([
          '……当時、自分は ',
          tachyon.get_colored_name(),
          ' の出した可能性を拒んだ',
        ]);
        await era.printAndWait([
          'あのときの',
          tachyon.sex,
          'は、逃げるためにレース場を離れようとしていたからだ',
        ]);
        await era.printAndWait('では、今は？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は黙って、',
          tachyon.get_colored_name(),
          ' が言い終わるのを待った',
        ]);
        era.println();
        await era.printAndWait(['岸に座る', tachyon.sex, 'は、一言も発さない']);
        await era.printAndWait(
          '月明かりの下では、絵の中にいるように静かに見える',
        );
        await era.printAndWait([
          tachyon.sex,
          'を知り、',
          tachyon.get_colored_name(),
          ' という',
          tachyon.uma_sex_title,
          'を知る者なら、想像しがたい光景だ',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が、「静か」という言葉とこれほど似合うなんて',
        ]);
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……あの日の答え、まだもらっていませんわね',
        ]);
        await tachyon.say_and_wait('こういう可能性は、存在してよいのですか？');
        await tachyon.say_and_wait(
          '可能性を追い続けた科学者が、ある日ふと疲れた。きっかけもなく、',
        );
        await tachyon.say_and_wait(
          'もう十分だと思い、先の道は後に続く者へ委ねよう、と……',
        );
        await tachyon.say_and_wait(
          '大切に思う者、自分を大切にしてくれる者と、ただ一緒に暮らしたい……',
        );
        await tachyon.say_and_wait(
          'そんな者にとって……こういう場所は、とても向いていると思いませんの？',
        );
        era.println();
        await era.printAndWait([
          '誰も ',
          tachyon.get_colored_name(),
          ' を知らない場所',
        ]);
        await era.printAndWait('もう可能性を探らなくていい');
        await era.printAndWait(
          '立ち止まって一息つける。あるいは……このまま、穏やかに暮らすこともできる',
        );
        await era.printAndWait('そういう可能性……');
      } else {
        await tachyon.say_and_wait('この場所、静かですわね');
        era.println();
        await era.printAndWait('……風と湯の音以外、人の声ひとつない温泉宿');
        await era.printAndWait([
          'あまりの静けさは、別のときは怖くもあるだろう。だが ',
          tachyon.get_colored_name(),
          ' がいれば、この空間も耐えられないものではない',
        ]);
        era.println();
        await tachyon.say_and_wait('それに、広いですわ');
        era.println();
        await era.printAndWait(
          '……温泉宿なのだから当然だ。今は二人だけでも、もともと数百人の客を入れる造りだ',
        );
        era.println();
        await tachyon.say_and_wait('それに、人もいませんわ');
        era.println();
        await era.printAndWait('……こんな深山なのだから');
        await era.printAndWait([
          '脈絡のない言葉が続き、',
          you.get_colored_name(),
          ' はますます ',
          tachyon.get_colored_name(),
          ' が何を言いたいのかわからなくなる',
        ]);
        era.println();
        era.println();
        await tachyon.say_and_wait([
          'これほど広く、静かで、穏やかな場所……凱旋門賞の',
          tachyon.uma_sex_title,
          'と、',
          tachyon.sex,
          'のトレーナーくらい、収まるでしょう',
        ]);
        await tachyon.say_and_wait(
          'こうして……誰にも知られず、静かで穏やかに暮らす……それも、ひとつの可能性ですか？',
        );
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, 'の可能性']);
        await era.printAndWait([
          'それは ',
          tachyon.get_colored_name(),
          ' がいつも口にする言葉だ',
        ]);
        await era.printAndWait([
          'だが',
          tachyon.uma_sex_title,
          'は、一生走り続けられるわけではない',
        ]);
        await era.printAndWait([
          '競走',
          tachyon.uma_sex_title,
          'であっても、いずれレース場を離れ、速度の追求から離れる道へ進む',
        ]);
        era.println();
        await era.printAndWait([
          'では、その可能性は ',
          tachyon.get_colored_name(),
          ' にも当てはまるのか？',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' にとって、そんな可能性はあるのか？',
        ]);
        await era.printAndWait([
          '喫茶店の店主になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '研究の道へ進み、科学者になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '普通の生徒として進学し、大学生になり、社会へ出て会社員になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          'にもあるのか。普通の人と同じように、レース場を離れ、自分の暮らしを生きる日々',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '、私についてきてくれますの？',
        ]);
        await tachyon.say_and_wait(
          'もし……私が、そういう可能性を選んだとしたら',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' と一緒に、レースとも、',
          tachyon.uma_sex_title,
          'の速度とも無縁の、淡く穏やかな日常を送る',
        ]);
        await era.printAndWait('そんな暮らしは、きっととても美しいだろう');
        await era.printAndWait([
          '平凡な日々でも、',
          tachyon.get_colored_name(),
          ' がいれば、絶対に退屈しない',
        ]);
      }
      era.printButton('「悪くない……気がする」', 1);
      era.printButton('「もう少し……考えてみてもいいか」', 2);
      await era.input();
      await tachyon.say_and_wait('……ふふ');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の答えに、',
        tachyon.get_colored_name(),
        ' は多くを言わなかった',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は足で水面を撫で、波紋を幾重にも広げている',
      ]);
      await era.printAndWait([
        'ふと風が立ち、',
        you.get_colored_name(),
        ' は森全体がまた息を吹き返したのを聞いた',
      ]);
      await era.printAndWait(
        '葉がさらさら落ち、夜に眠っていた小鳥が驚いて飛び立つ',
      );
      await era.printAndWait([
        '夜の静けさは、',
        tachyon.sex,
        'の一時の撹乱で、一瞬にして破られたようだった',
      ]);
      era.println();
      await era.printAndWait([
        'こんな',
        tachyon.sex,
        'が、本当にあんな暮らしをできるのか？',
      ]);
      await era.printAndWait([
        'できるにせよできないにせよ、そこから生まれる可能性を考えて、',
        you.get_colored_name(),
        ' はふと興奮する',
      ]);
      await era.printAndWait([
        'だが、できるにせよできないにせよ、自分は必ず',
        tachyon.sex,
        'に付き添う。最後まで',
      ]);
      era.println();
      await tachyon.say_and_wait('ところで');
      era.println();
      await era.printAndWait('周囲が冬の夜の静けさと喧騒を取り戻したあと');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、ふと思い出したように口を開いた',
      ]);
      await era.printAndWait(
        '言いながら、バスタオルの裾をコッソリ巻き上げ、太腿の付け根近くまで上げる',
      );
      era.println();
      await tachyon.say_and_wait(
        'バスタオルを巻いたままなのは、少々申し訳ないですけれど……',
      );
      await tachyon.say_and_wait(
        'でも、下は本当に何も履いていませんのよ……見ます？',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は遊び心のある目で ',
        you.get_colored_name(),
        ' を見ながら、手でバスタオルの結び目をゆっくりほどいていく',
      ]);
      if (tachyon.sex_code !== 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は、タオルの下にほのかに見える、少し湿った隙間を見た',
        ]);
        await era.printAndWait('……たぶん、温泉水だろう');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はまだ湯に入っていないとわかっていても、',
          you.get_colored_name(),
          ' はそう自分を欺くことにした',
        ]);
      }
      era.printButton('「温泉の中は、まずいだろう……」', 1);
      era.printButton('「部屋に戻ってから、では……？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '確認済みですわ……この数日、予約は私たちだけ。だからここで何をしても問題ありませんの',
      );
      await tachyon.say_and_wait(
        'それに……誰も来ませんから、抵抗しようとしても無駄ですわよ♡',
      );
      await tachyon.say_and_wait('力を抜いて、楽しむことですわ');
      era.println();

      if (tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait([
          'いつタオルを脱いだのか、裸で湯に入った ',
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' に覆いかぶさり、湯に入る前から完全に濡れていた淡い隙間を、太い棒へ合わせる……',
        ]);
      } else {
        await era.printAndWait([
          'いつタオルを脱いだのか、裸で湯に入った ',
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' に覆いかぶさり、',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] hot_spring_b_sex_end
  async hot_spring_b_sex_end(tachyon, you) {
    await era.printAndWait([
      '事が済むと、',
      tachyon.get_colored_name(),
      ' が先に湯を出た',
    ]);
    if (tachyon.sex_code !== 1 && you.sex_code > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、満足げにやや膨らんだ腹を撫でる',
        tachyon.sex,
        'の姿と、太腿を伝って流れ落ちる、温泉水か何かの透明な液体を見る',
      ]);
      await era.printAndWait(
        '一文字だったものが双唇のように開き、唇の間にさっき盗み食いした白い液が残る穴口も',
      );
      await era.printAndWait('股間が、また硬くなった');
      await era.printAndWait([tachyon.sex, 'は察したように、尻を少し揺する']);
    }
    await era.printAndWait('部屋に戻れば、また一戦になりそうだ……');
    await era.printAndWait([
      'その前に、',
      you.get_colored_name(),
      ' は空を見上げ、戦いの前の最後の静けさを味わう',
    ]);
  },

  // [번역 대상] palace_b
  palace_b: (() => {
    const title = 'Plan B の未来';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' との三年が終わった',
      ]);
      era.println();
      await era.printAndWait([
        '卒業式のあと、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'の将来の予定も尋ねた',
      ]);
      await era.printAndWait([
        '「また会えますわ、',
        callname,
        '」',
        tachyon.sex,
        'はそれだけ言った',
      ]);
      era.println();
      await era.printAndWait([
        'それから、',
        tachyon.get_colored_name(),
        ' は去った',
      ]);
      await era.printAndWait('トレセン学園を離れ、この国を離れた');
      await era.printAndWait('まるで、人の世から消えたように');
      await era.printAndWait([
        '今の',
        tachyon.sex,
        'は、いったいどこにいるのか',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も、そんな疑問を持ったことがある',
      ]);
      await era.printAndWait('ちゃんと食べているか');
      await era.printAndWait('ちゃんと眠れているか');
      await era.printAndWait([
        '一人きりの',
        tachyon.sex,
        'が、本当に自分を世話できるのか',
      ]);
      era.println();
      await era.printAndWait(
        '相手はもう成人しているのに、それでも心配せずにはいられない',
      );
      await era.printAndWait('だが……実は、自分でもわかっている');
      await era.printAndWait('その心配は余計だ');
      await era.printAndWait([tachyon.get_colored_name(), ' は、天才だ']);
      await era.printAndWait('疑いようもなく、生まれついての天才だ');
      await era.printAndWait([
        'そんな',
        tachyon.sex,
        'なら、どこにいても必ず光を放つだろう',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、居場所もわからない ',
        tachyon.get_colored_name(),
        ' への期待を胸に、家の扉を開けた',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'おや、',
        callname,
        '、今日は帰りが早いですわね',
      ]);
      era.println();
      await era.printAndWait([
        'ソファに寝そべり、足を組んでいるぐうたら',
        tachyon.uma_sex_title,
        'を無視する',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'そうだ、夕飯夕飯……',
        callname,
        '、今日はあなたの番ですわよ～～',
      ]);
      era.println();
      await era.printAndWait([
        '自分の心の中の、天才の',
        tachyon.uma_sex_title,
        '、超光速の粒子、',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        'きっと世界のどこかで、',
        tachyon.uma_sex_title,
        'の未来に関わる研究を続けている',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'そうそう、今日新しいメールが……トレーナー研修会……三日間！？ 削除削除、こんなもの参加して何の意味がありますの',
      );
      era.println();
      await era.printAndWait(
        '絶対に違う。卒業したあとも学園の廃教室に居座るような存在ではない',
      );
      await era.printAndWait(
        '住居は、卒業当日に荷物を持って勝手に自分の家へ転がり込んだ',
      );
      await era.printAndWait('今では完全に、自分の家を縄張りにしている');
      await era.printAndWait([
        '今も勝手にプライバシーを侵している、このぐうたら',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '？ ',
        callname,
        '～～～～構ってくださいまし～～～～',
      ]);
      await you.say_and_wait('だからなぜタキオンは俺の家に居座るんだ！');
      era.println();
      await era.printAndWait('ついに、無視しきれなくなった');
      await era.printAndWait(
        '初日からの疑問を、相手の当然さに押されて言えなかったまま、とうとう口にした',
      );
      era.println();
      await tachyon.say_and_wait('ええ——何か問題ですの？');
      await tachyon.say_and_wait(
        'それに、家事をまったくしないわけではありませんわ。掃き掃除や拭き掃除、夕飯の分担だってしていますのよ～～',
      );
      era.println();
      await era.printAndWait([
        'たしかに、今の ',
        tachyon.get_colored_name(),
        ' が昔より進んだ点があるとすれば',
      ]);
      await era.printAndWait('生活技能の成長だろう');
      await era.printAndWait([
        '何もかも自分に代行させていたかつての ',
        tachyon.get_colored_name(),
        ' とは違う',
      ]);
      await era.printAndWait([
        '今の ',
        tachyon.get_colored_name(),
        ' は、たしかに進歩している',
      ]);
      await era.printAndWait(
        '食後の皿洗いに、日常の掃き掃除や拭き掃除まで手伝う',
      );
      await era.printAndWait('ごくわずかな差でも、たしかに進歩している……');
      await era.printAndWait(
        'だが、なぜか淡く、家事を始めた娘を見る老父のような安堵がある',
      );
      await era.printAndWait(
        '違う、話をそらされかけた……要点は、なぜここに住んでいるかだ！',
      );
      era.println();
      await tachyon.say_and_wait(
        'そんな些細なことは気にしないことですわ。大丈夫、大丈夫',
      );
      await tachyon.say_and_wait('おや、それとも、お金の話ですの？');
      await tachyon.say_and_wait(
        'たしかに、生活の分担は家事だけではありませんわ……生活費も分担すべきです',
      );
      await tachyon.say_and_wait('では、今月の生活費から分担しましょう、');
      await tachyon.say_and_wait(
        '幸い、賞金はともかく、過去に出願した特許……特許料なら足りるはずですわ',
      );
      era.println();
      await era.printAndWait(
        '要点は金ではない……いや、金は大事だ。だが今の要点は金ではない',
      );
      await era.printAndWait([
        'そもそも……',
        tachyon.get_colored_name(),
        ' は進学しないのか？ 留学とか……？',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'ねえ、',
        callname,
        '、型どおりの進学が、私に何か役立つと思いますの？',
      ]);
      await tachyon.say_and_wait(
        'ああいう集団教育は、自分の道が決まっていない凡人には便利ですわ。私のような天才には、自分の決断こそ最良の選択です',
      );
      era.println();
      await era.printAndWait('認めたくなかったとおり');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、たしかに天才だ',
      ]);
      await era.printAndWait([
        '自分には、',
        tachyon.sex,
        'の選択を疑う資格がないのかもしれない',
      ]);
      await era.printAndWait(
        'だが、ほかにも問題はあるだろう。たとえば……家族とか……？',
      );
      era.println();
      await tachyon.say_and_wait([
        'ねえ、',
        callname,
        '……私はもう成人ですわよ？ 法律上は完全な行為能力者です。住む場所を自分で選ぶ権利はありますわよね？',
      ]);
      await you.say_and_wait(
        '法律が、他人の家を自分の住居にする行為まで保障するとは思えない',
      );
      await tachyon.say_and_wait(
        'まあ、空間は広いのですから、私が少し割り込んでもどうということはありませんわ',
      );
      await tachyon.say_and_wait('……それに、あなた、私を出せますの？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は遊び心のある目で ',
        you.get_colored_name(),
        ' を見つめる',
      ]);
      await era.printAndWait('いつだって、こうだ');
      await era.printAndWait('蛇に狙われたモルモットのように');
      await era.printAndWait('すべてを吸い込む深淵のように');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' にその瞳で見つめられると、反論の言葉が出なくなる',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'これほど私を愛しているあなたが、本当に私を出せますの？',
      );
      await tachyon.say_and_wait(
        'これほど私に愛されているあなたが、本当に私の愛を拒むつもりですの？',
      );
      era.println();
      await era.printAndWait('口の中が乾く');
      await era.printAndWait([
        'いつの間にか、',
        tachyon.get_colored_name(),
        ' は自分の眼前まで迫っていた',
      ]);
      await era.printAndWait(['菊花賞のときの', tachyon.sex, 'と同じだ']);
      await era.printAndWait('だがあのときと違い、今度は本当に予感がある');
      await era.printAndWait('「食われる」という実感');
      era.println();
      await era.printAndWait('ああ');
      await era.printAndWait('つまるところ、これも自分が選んだ道だろう');
      await era.printAndWait([
        you.get_colored_name(),
        ' は温泉旅行のとき、',
        tachyon.get_colored_name(),
        ' と交わした会話を思い出す',
      ]);
      era.println();
      await era.printAndWait([
        'あのとき自分は決めた。',
        tachyon.sex,
        'が最後にどの可能性を選んでも、必ず最後までついていく、と',
      ]);
      await era.printAndWait('深淵を覗く者は、深淵に呑まれる');
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' はおそらく、一生',
        tachyon.sex,
        'の目の深淵から逃げられないだろう',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] prix_lat_win_b
  prix_lat_win_b: (() => {
    const title = '限界に止まる';
    /**
     * Plan B 専用。マンハッタンカフェは同時出走できない
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、世界の頂点に立った',
      ]);
      await era.printAndWait([
        '日本から来た',
        tachyon.uma_sex_title,
        'が、世界記録を破った',
      ]);
      await era.printAndWait(
        '自分の両目を灼いた走りが、初めて、そして最後に、世界でいちばん眩い光を放った',
      );
      era.println();
      await era.printAndWait([
        'レース後、選手控え室へ戻った ',
        tachyon.get_colored_name(),
        ' は、多くを語らない',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はいつものように、まず',
        tachyon.sex,
        'の脚を確かめた',
      ]);
      era.println();
      await tachyon.say_and_wait(['……もう、要りませんわね、', callname]);
      await tachyon.say_and_wait('わかっているはずですわ');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は黙った']);
      await era.printAndWait('結末はわかっている。それでも奇蹟を待ってしまう');
      await era.printAndWait('だが……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は何も言わず、ただ ',
        tachyon.get_colored_name(),
        ' の脚を薬で冷やし、負担を軽くした',
      ]);
      await era.printAndWait([
        '公式から表彰の準備ができた通知が来るまで待って、二人はゆっくり舞台へ向かった',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……では、どうですの？ このレース、満足できました？',
      );
      era.println();
      await era.printAndWait('すべてを出し切り、両脚を燃やして');
      await era.printAndWait('それで得た勝利');
      await era.printAndWait(
        '人を魅了しないはずがない。熱狂させないはずがない',
      );
      era.println();
      await era.printAndWait('自分は、きっと適任のトレーナーではない');
      await era.printAndWait([
        'トレーナーなら、理で',
        tachyon.uma_sex_title,
        'のため、',
        tachyon.couple_title,
        'にいちばんいい選択を考えるべきだ',
      ]);
      await era.printAndWait([
        'だが自分は、いちばん美しい走り、いちばん強い走りが見たいだけで、担当',
        tachyon.uma_sex_title,
        'にこんなことをさせた',
      ]);
      await era.printAndWait(
        '幸い、今の問いはトレーナーとして答える必要はない',
      );
      await era.printAndWait([
        '一人のファンとして、',
        tachyon.get_colored_name(),
        ' のいちばん狂った死忠として',
      ]);
      era.printButton('「俺が見た中で、いちばん凄いレースだった」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は朝日のような微笑を浮かべた',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の光より弱く、だがもっと柔らかく、もっと温かい光',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('脚は、鈍く痛む');
      await tachyon.print_and_wait('踵は、はっきり刺す');
      await tachyon.print_and_wait('ですが、それより多いのは遺憾です');
      era.println();
      await tachyon.print_and_wait('わかっていたことです。ですが、やはり……');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、最後まで限界を超えられませんでした',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '失望することではありません。当初の計画どおり、進んだだけです',
      );
      era.println();
      await you.say_as_passer_by_and_wait('記者A', [
        'タキオン',
        tachyon.adult_sex_title,
        '！ 本日の凱旋門賞、おめでとうございます！ それに今回の凱旋門は、歴代の記録も破りました！',
      ]);
      await you.say_as_passer_by_and_wait(
        '記者A',
        'この勝利について、対戦相手や日本の親しい方へ一言ありますか？',
      );
      era.println();
      await tachyon.say_and_wait('……ふふ');
      await tachyon.say_and_wait('では最後に……少し、言わせてくださいまし');
      await you.say_as_passer_by_and_wait('記者A', '最後……？');
      await tachyon.say_and_wait([
        '私は、すべての',
        tachyon.uma_sex_title,
        'に、それぞれの可能性があると信じていますわ',
      ]);
      await tachyon.say_and_wait('どんな高い壁でも、必ず超えられます');
      await tachyon.say_and_wait(
        'ですから……この記録は始まりであって、終わりではありません',
      );
      await tachyon.say_and_wait([
        'この先、もっと多くの',
        tachyon.uma_sex_title,
        'が世界に立ち、そして……限界を超えるでしょう',
      ]);
      await tachyon.say_and_wait(
        '私はそう信じ、皆様に、そして……期待していますわ',
      );
      era.println();
      await tachyon.print_and_wait(
        '後続への期待に満ちていながら、傲りをもって自分を限界と定義した',
      );
      await tachyon.print_and_wait([
        '舞台下の者たちは闘志を燃やし、台上の',
        tachyon.sex,
        'を見ている',
      ]);
      await tachyon.print_and_wait([
        'だが',
        tachyon.sex,
        'の目にあるのは、今も観客席に隠れているあの人だ',
      ]);
      await tachyon.print_and_wait('舞台は整った');
      await tachyon.print_and_wait('前座は終わった');
      await tachyon.print_and_wait('次は、あなたにこれを超えられますの？');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は ',
        coffee.get_colored_name(),
        ' へ、声なき挑戦を投げた',
      ]);
      era.drawLine();
      await era.printAndWait(['凱旋門賞は終わった']);
      await era.printAndWait([
        'レース後、',
        you.get_colored_name(),
        ' はすぐ ',
        tachyon.get_colored_name(),
        ' を病院へ連れて検査した',
      ]);
      await era.printAndWait('予想どおりであり、予想外でもある');
      await era.printAndWait('予想どおり、引退せざるを得ない脚の怪我だ');
      await era.printAndWait('予想外なのは、傷が想像ほど重くなかったこと');
      await era.printAndWait('走れない以外に、より重い症状はない');
      await era.printAndWait([
        '……だが',
        tachyon.uma_sex_title,
        'にとって、これ以上重い状態は要らない',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の引退は、一瞬で世界を揺るがした',
      ]);
      await era.printAndWait([
        '担当トレーナーの ',
        you.get_colored_name(),
        ' も世界の注目を浴び、その中には文句や陰口もあった',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] takz_kin_end_b
  takz_kin_end_b: (() => {
    const title = '한계를 향해';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await tachyon.say_and_wait(['하아…… 하아…… 카……', call_25, '……！']);
      era.println();
      await tachyon.print_and_wait('전력을 다해 짜낸 외침');
      await tachyon.print_and_wait('레이스 도중 말을 건다는 것은');
      await tachyon.print_and_wait(
        '실험의 관점에서나 경주의 관점에서나 지극히 상식을 벗어난 행동일세.',
      );
      await tachyon.print_and_wait([
        '그럼에도 ',
        tachyon.get_colored_name(),
        '은(는) 목소리를 높였다.',
      ]);
      era.println();
      await tachyon.print_and_wait('마지막 직선에 들어서기 직전, 최후의 스퍼트를 시작하기 직전');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이(가) 던진 상식을 벗어난 선언이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('따라잡을 수 있다면…… 한번 해 보게!');
      era.println();
      await tachyon.print_and_wait(['앞서 달리는 ', tachyon.get_colored_name()]);
      await tachyon.print_and_wait('뒤를 바짝 쫓는 사냥개를 향해 도발을 던졌다.');
      era.drawLine();
      await coffee.say_and_wait('……退屈');
      await coffee.say_and_wait('그런 짓을 해서 누가 기뻐하겠어?');
      await coffee.say_and_wait(
        '양보받지 않아도 난 정면에서 널 넘어서겠어…… 그리고 친구들도.',
      );
      era.println();
      await tachyon.print_and_wait(
        '레이스 전의 잘못을 털어놓았더니 예상대로 호되게 야단을 맞았네.',
      );
      await tachyon.print_and_wait('하지만…… 뭐, 덕분에 훨씬 홀가분해졌지.');
      await tachyon.print_and_wait([
        callname,
        '처럼 무조건 긍정해 주는 편이 오히려 걱정될 지경이니까.',
      ]);
      await tachyon.print_and_wait('그래서 오늘은 망설임 없이 전력으로 달릴 수 있네.');
      era.println();
      await tachyon.print_and_wait('상대를 향한 경의');
      await tachyon.print_and_wait('스스로를 향한 갈망');
      await tachyon.print_and_wait('응원해 준 이들에 대한 보답');
      era.println();
      await tachyon.say_and_wait([
        '이 모든 것을 바치는 ',
        tachyon.get_colored_name(),
        '의 일본 국내 마지막 무대일세.',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '! 아니면 ',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！',
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '! 지금 두 사람이 결승선에 들어옵니다——————————!',
      ]);
      era.println();
      await tachyon.print_and_wait('누가 이겼는지');
      await tachyon.print_and_wait('누가 졌는지');
      await tachyon.print_and_wait('아니, 이젠 어느 쪽이든 상관없다.');
      era.println();
      await tachyon.print_and_wait('이걸로 모든 것이 끝났다.');
      await tachyon.print_and_wait([
        '오늘의 레이스에서 ',
        tachyon.get_colored_name(),
        '은(는) 자신의 최선을 다했다.',
      ]);
      await tachyon.print_and_wait('다음 레이스도 이미 사정거리 안에 들어왔네.');
      era.drawLine();
      era.printButton('「강해, 빨라! 카페도…… 타키온도……!」', 1);
      era.printButton(
        '「너희들의 트레이너로 있을 수 있어서…… 정말…… 다행이야!」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '후후, 갑자기 그렇게 감상적인 말을 하다니. 마치 대단원의 막을 내리는 것 같군. 하지만 우리 레이스는 아직 끝나지 않았네, ',
        callname,
      ]);
      era.println();
      await era.printAndWait('아, 맞다.');
      era.println();
      await tachyon.say_and_wait('……기자회견이 곧 시작될 걸세.');
      era.println();
      await era.printAndWait([
        '上半期最強',
        tachyon.uma_sex_title,
        '의 총결산이니, 이런 레이스에 기자들이 몰리지 않을 리 없다.',
      ]);
      era.print('이 자리에서 앞으로의 목표를 발표하자.');
      era.printButton('「가라, 타키온.」', 1);
      era.printButton('「난 언제까지나 네 뒤에 있을 거야.」', 2);
      await era.input();
      await tachyon.say_and_wait('……그래, 다녀오겠네.');
      era.drawLine();
      await tachyon.say_and_wait([
        '그런 까닭에 다음 출전 예정은 세계 최고의 무대, 개선문상일세. 이상, 기자 여러분 질문은?',
      ]);
      era.println();
      await era.printAndWait('물이 끼얹어진 듯한 침묵');
      await era.printAndWait([
        '회견 전부터 오늘 ',
        tachyon.get_colored_name(),
        '진영에서 중대 발표를 한다고 들었던 기자들조차',
      ]);
      await era.printAndWait('그 무게에 저도 모르게 숨을 삼켰다.');
      era.println();
      await tachyon.say_and_wait('———질문이 없다면 오늘 취재는 여기까지……');
      era.println();
      await era.printAndWait(
        '그제야 기자들은 꿈에서 깨어난 듯 일제히 질문을 쏟아 내기 시작했다.',
      );
      await era.printAndWait(
        '하지만 전개가 너무 갑작스러워 준비한 질문을 하나도 쓰지 못하고 그 자리에서 새 화제를 찾는 모습이 역력했다.',
      );
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 당황하지 않고 담담하게 대답해 나갔다.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        '記者A',
        '왜 이렇게 갑작스럽게 결정하셨나요? 충분히 숙고한 뒤 내린 출전 결정입니까?',
      );
      await tachyon.say_and_wait(
        '트레이너 군과 말다툼한 끝에 내린 결정일세. 몇 달 전에 이미 정했지. 갑작스러운 일도 뜬금없는 일도 아니네. 그동안 언론에 알리지 않았을 뿐일세.',
      );
      await you.say_as_passer_by_and_wait('記者B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '이(가) 지난해 이유를 밝히지 않고 트윙클 시리즈를 중단했던 까닭은……? 올해 개선문상 출전은 설마……',
      ]);
      await tachyon.say_and_wait([
        '그 점은 말씀드릴 수 없지만 한 가지는 보장하겠네. 올해 개선문상에는 반드시 출전할 걸세.',
      ]);
      await you.say_as_passer_by_and_wait('記者B', [
        '……저기, 오늘 레이스는 정말 훌륭했습니다.',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '에게서 경쟁 상대인 ',
        coffee.get_colored_name(),
        '에게 하고 싶은 말은 없습니까?',
      ]);
      await tachyon.say_and_wait(
        '음…… 그렇군. 그렇다면 『자네도, 자네 친구들도, 개선문에서 한꺼번에 뛰어넘겠네』 정도면 되겠나?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무대 뒤에서 기자회견장에 별처럼 빛나는 ',
        tachyon.sex,
        '을(를) 지켜보고 있었다.',
      ]);
      await era.printAndWait(
        '한때 빛을 잃었던 광자가 지금은 누구보다 눈부신 빛을 내뿜고 있었다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tenn_spr_end
  tenn_spr_end: (() => {
    const title = 'わかります';
    /**
     * Plan B かつマンハッタンカフェ同時出走
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} tachyon_win アグネスタキオンが勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tachyon_win,
    ) => {
      await era.printAndWait('ああ、そういうことか');
      era.println();
      await era.printAndWait(['天皇賞（春）']);
      await era.printAndWait('最後の直線で争う二人を見て');
      await era.printAndWait('やっと、わかった');
      era.println();
      await era.printAndWait([
        'なぜ最初から、',
        tachyon.get_colored_name(),
        ' の成果を礎にするとわかっていても ',
        coffee.get_colored_name(),
        ' を支えるのか',
      ]);
      await era.printAndWait([
        'なぜあの夜、',
        tachyon.get_colored_name(),
        ' の答えに喜んでしまったのか',
      ]);
      era.println();
      await era.printAndWait([
        '光速を超える姿と、漆黒の猟犬のように前者を食い千切る走りを見て、ようやく理解した',
      ]);
      await era.printAndWait([
        '初めて',
        tachyon.couple_title,
        'が走る姿を見たときから',
      ]);
      await era.printAndWait([
        '自分は、すでに深く',
        tachyon.couple_title,
        '',
        era.get('love:25') >= 75 && love >= 75 ? '' : 'の走り',
        'を愛していた',
      ]);
      era.println();
      await era.printAndWait(['光のように瞬く', tachyon.get_colored_sex()]);
      await era.printAndWait(['影のように漆黒の', coffee.get_colored_sex()]);
      await era.printAndWait(['最初から、こんなに単純なことだった']);
      era.println();
      await era.printAndWait('아이처럼 천진한 소망');
      await era.printAndWait(
        '強弱を分けたい……いいえ、同じ場での競いを見たいだけだ',
      );
      await era.printAndWait([
        '強い弱いではない。ただ',
        tachyon.couple_title,
        'が走る姿を見たい',
      ]);
      era.println();
      await era.printAndWait('ゴール前のこの直線が、永遠に終わらなければいい');
      await era.printAndWait([
        '永遠に、',
        tachyon.couple_title,
        'がコースを駆けるこの一幕を見ていられればいい',
      ]);
      await era.printAndWait([
        '気づくと、',
        you.get_colored_name(),
        ' は泣いていた',
      ]);
      era.println();
      await era.printAndWait('光か、影か');
      await era.printAndWait('すべてを照らす光が、影の逃げ場を奪うのか');
      await era.printAndWait('すべてを呑む闇が、光を食い尽くすのか');
      era.println();
      await you.say_as_passer_by_and_wait('実況', [
        '最後の一刻まで食い合う大接戦！',
        coffee.get_colored_name(),
        '！ それとも ',
        tachyon.get_colored_name(),
        '！ 超光速の逃走か、摩天楼の逮捕か！ いま、ゴールを駆け抜けたのは……！',
      ]);
      era.drawLine();
      if (tachyon_win) {
        await tachyon.say_and_wait('………勝ちました……の？');
      } else {
        await tachyon.say_and_wait('………負けました……の？');
      }
      era.println();
      await tachyon.print_and_wait('理解不能ですわ');
      await tachyon.print_and_wait('理不尽です');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の出走は、',
        coffee.get_colored_name(),
        ' を成功させるため',
      ]);
      await tachyon.print_and_wait([
        coffee.sex,
        'を頂点へ上げるために、レースで',
        coffee.sex,
        'が最も苦しい点を刺激し、',
        coffee.sex,
        'に進歩を強いる',
      ]);
      await tachyon.print_and_wait([
        'それから……目立たず裏へ下がり、',
        tachyon.sex,
        'に勝利という名の報いを味わわせる',
      ]);
      if (tachyon_win) {
        await era.printAndWait('結果');
        await you.say_as_passer_by_and_wait('実況', [
          tachyon.get_colored_name(),
          '！ 光速を超え、淀の坂に立つ盾の栄光は ',
          tachyon.get_colored_name(),
          ' へ！',
        ]);
      } else {
        await tachyon.print_and_wait('そうであるはずなのに、では……');
        era.println();
        await you.say_as_passer_by_and_wait('実況', [
          coffee.get_colored_name(),
          '！ 超光速を呑み込み、淀の坂に立つ盾の栄光は ',
          coffee.get_colored_name(),
          ' へ！',
        ]);
        era.println();
        await tachyon.print_and_wait('なぜ……今、こんなにも……悔しいのですわ！');
      }
      era.println();
      await tachyon.print_and_wait('最初は、まともでした');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' の長所も短所も、その安定にある',
      ]);
      await tachyon.print_and_wait([
        '極端な安定のおかげで、',
        tachyon.sex,
        'は強度を最も問われる長距離で常に優位に立てる',
      ]);
      await tachyon.print_and_wait([
        'だが安定しすぎて、',
        tachyon.sex,
        'には勝負所の爆発力が足りない',
      ]);
      await tachyon.print_and_wait([
        'だから',
        tachyon.sex,
        'の快適帯を壊し、',
        tachyon.sex,
        'に限界超越を促す',
      ]);
      era.println();
      await tachyon.print_and_wait('ところが、予想外にも');
      await tachyon.print_and_wait([
        tachyon.sex,
        'はリズムを取り戻しただけでなく、さらに進化し、走りを完成させた',
      ]);
      await tachyon.print_and_wait(
        'ここまでで、このレースの目的は終わっているはずですわ',
      );
      await tachyon.print_and_wait('なのに……');
      era.println();
      await tachyon.print_and_wait('理由は考えるまでもありません');
      await tachyon.print_and_wait('あの夜の、後輩との会話が主因です');
      await tachyon.print_and_wait([
        'ですが……後輩',
        tachyon.sex,
        'に落ち度はありません',
      ]);
      await tachyon.print_and_wait([
        '問題なのは、',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.print_and_wait(
        '胸に迷いがなければ、あのとき正確に答えられたはずです',
      );
      await tachyon.print_and_wait('流す言葉でも、正直な答えでも');
      await tachyon.print_and_wait('胸に疑いがなければ、口に出せたはずですわ');
      era.println();
      await tachyon.say_and_wait('私は……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、結局のところ一名の',
        tachyon.uma_sex_title,
        'です',
      ]);
      await tachyon.print_and_wait('走る本能と、勝ちたい本能には抗えません');
      await tachyon.print_and_wait([
        tachyon.uma_sex_title,
        'の可能性には、他の道もいくらでもあるのに',
      ]);
      await tachyon.print_and_wait('コースにこだわる必要はない');
      await tachyon.print_and_wait([
        'それでも ',
        call_25,
        ' を選び、他人が走る姿を苦しく見つめる道しか残らなくても、他を選ばなかった理由',
      ]);
      await tachyon.print_and_wait([
        'それは……',
        tachyon.get_colored_name(),
        ' が、走ることを愛しているからですわ',
      ]);
      era.println();
      await tachyon.print_and_wait('そこまで考えて、ふと肩の力が抜けました');
      await tachyon.print_and_wait(
        'どれほど立派な口実と理由で隠しても同じです',
      );
      await tachyon.print_and_wait([
        'どれほど抗っても、',
        tachyon.uma_sex_title,
        'の本能からは抜けられません',
      ]);
      await tachyon.print_and_wait('……抜けたくもありません');
      await tachyon.print_and_wait([
        '最も速く、最も強い',
        tachyon.uma_sex_title,
        'になりたい',
      ]);
      await tachyon.print_and_wait('敵手と最後の一瞬まで絡み合い、死闘したい');
      await tachyon.print_and_wait('自分を……証明したい');
      era.println();
      await tachyon.print_and_wait([
        '……ですが、それでは、どう',
        you.sex,
        'に顔を合わせればいいのでしょう',
      ]);
      await tachyon.print_and_wait(
        'ずっと助けてくれ、いつも傍で支えてくれた人',
      );
      await tachyon.print_and_wait(['どんな顔で', you.sex, 'に会えばいい']);
      await tachyon.print_and_wait(['……', you.sex, 'でも、怒るはずですわ']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' の専属トレーナーとして',
      ]);
      await tachyon.print_and_wait([
        '最初に決めたのは、レースを ',
        call_25,
        ' に譲り、自分は裏に回ること',
      ]);
      era.println();
      await tachyon.print_and_wait('結果……');
      if (tachyon_win) {
        await tachyon.print_and_wait('この制御不能で、不安定な問題児は');
        await tachyon.print_and_wait(
          '一瞬の熱に浮かされて、すべてを台無しにした',
        );
      } else {
        await tachyon.print_and_wait([
          '今さら',
          you.sex,
          'に、自分は……まだ走りたい、と告げるのですか',
        ]);
        await tachyon.print_and_wait('翻弄にも限度がありますわ');
      }
      era.println();
      await tachyon.print_and_wait('気づいたときには');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、コースから逃げていた',
      ]);
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は選手控え室へ戻らなかった',
      ]);
      await era.printAndWait(['競馬場のどこにも、', tachyon.sex, 'の姿はない']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は心配して寮長へ電話を入れ、',
        tachyon.get_colored_name(),
        ' がすでにトレセンへ戻ったと聞いて、やっと一息ついた',
      ]);
      await era.printAndWait('……いいえ、一息ついたとは言えない');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はいったいどうした……なぜ一人で学園へ戻ったのか',
      ]);
      await era.printAndWait(['機会を見て、', tachyon.sex, 'と話そう']);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_47_47
  we_b_47_47: (() => {
    const title = '희미해진 광채';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} coffee_arim_kin マンハッタンカフェが有馬記念に出走するか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_arim_kin,
    ) => {
      await tachyon.say_and_wait([
        '그나저나 내일은 아리마 기념이군, ',
        callname,
      ]);
      era.println();
      await era.printAndWait([
        '달빛 아래서 훈련하던 ',
        tachyon.get_colored_name(),
        '이(가) 문득 ',
        you.get_colored_name(),
        '에게 말했다.',
      ]);
      await era.printAndWait([
        '국화상이 끝난 뒤로 두 사람은 이렇게 밤마다 훈련과 지도를 이어 왔다.',
      ]);
      await era.printAndWait([
        '어색하던 대화도 두 달 동안 함께하면서 예전의 친숙함을 조금씩 되찾아 갔다.',
      ]);
      await era.printAndWait(
        '말이 이상할지도 모르지만 지금 상황에 대한 자신의 감정을 묻는다면',
      );
      await era.printAndWait('아마 즐기고 있는 것 같다.');
      await era.printAndWait([
        '낮에는 ',
        coffee.get_colored_name(),
        '을(를) 위해 움직이고, 밤에는 ',
        tachyon.get_colored_name(),
        '의 회복을 돕는다.',
      ]);
      await era.printAndWait([
        '할 일은 늘어났지만 국화상 이전의 ',
        you.get_colored_name(),
        '과(와) 비교하면 마음의 짐은 나날이 가벼워졌다.',
      ]);
      await era.printAndWait([
        '…………그러다 보니 ',
        you.get_colored_name(),
        '은(는) 시간 가는 줄도 모르고 있었다.',
      ]);
      era.println();
      if (coffee_arim_kin) {
        await tachyon.say_and_wait([
          '내일은 ',
          call_25,
          '의 올해 마지막 레이스일세.',
        ]);
      } else {
        await tachyon.say_and_wait('내일이면 올해 시즌도 끝나는군.');
      }
      era.println();
      await era.printAndWait(['아리마 기념이 끝나면']);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 줄곧 마주하지 못했던 내년이 찾아온다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '来年……',
        call_25,
        '이(가) 출전하는 레이스라면…… 최선을 다해 한 경기도 빠짐없이 따라가겠네.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 눈동자를 바라봤다. 그 안에는 ',
        coffee.get_colored_name(),
        '을(를) 위해 불타는 각오와 열정이 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그러니 내년에도 잘 부탁하네.',
      );
      era.println();
      await era.printAndWait('빛이 보이지 않는다.');
      await era.printAndWait([
        '줄곧 ',
        you.get_colored_name(),
        '의 양쪽 눈을 태울 듯 빛나던 ',
        tachyon.get_colored_name(),
        '의 눈빛은 이제 거의 보이지 않는다.',
      ]);
      era.printButton('「내년에도…… 잘 부탁해.」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 아리마 기념 직후 기자회견을 열 예정이다.',
      ]);
      await era.printAndWait('복귀 발표는 세상을 크게 뒤흔들 것이다.');
      await era.printAndWait('하지만 그 뒷이야기는 지금 두 사람과는 상관없다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_b_95_15
  we_b_95_15: (() => {
    const title = '瞬く光子';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {string} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25, callname_25) => {
      await era.printAndWait('夜のトレーニング場');
      await era.printAndWait('本来なら無人のはず。人がいるはずのない時間……');
      era.println();
      await tachyon.say_and_wait('……はっは、随分と人が多いですわ……');
      era.println();
      await era.printAndWait('意外なことに、場は自主トレの人で埋まっている');
      await era.printAndWait([
        'G1戦線が始まった緊張から、',
        tachyon.uma_sex_title,
        'たちが勝手に走り込むのは、この時期のトレセンではよくある景色だ',
      ]);
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        'あ、タキオン先……あれ、トレーナー',
        you.adult_sex_title,
        '！？',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' を見かけて挨拶しようとした後輩が、',
        tachyon.sex,
        'の陰にいる ',
        you.get_colored_name(),
        ' に気づいて足を止めた',
      ]);
      await era.printAndWait('なにしろ自主トレは、推奨される行為ではない……');
      await era.printAndWait([
        'だが、担当',
        tachyon.uma_sex_title,
        'に付き合って自ら自主トレへ来た ',
        you.get_colored_name(),
        ' に、',
        tachyon.couple_title,
        'を責める資格はないだろう',
      ]);
      era.printButton('「シーッ」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は苦笑しながら',
        tachyon.sex,
        'へ「シーッ」と合図した。',
        tachyon.sex,
        'も察しがよく、',
        you.get_colored_name(),
        ' を見ていないふりをして、',
        tachyon.get_colored_name(),
        ' との話を続けた',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'タキオン先輩！ 私も今年クラシックに入りました！ 皐月賞は残念～～出られなかったけど、ダービーは頑張ります！',
      );
      await tachyon.say_and_wait('フフ、しっかり励みなさいな');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'むぅ～～本格化が遅かったせいで、トレーナーに皐月賞は回避って……本格化を早める方法、ありませんか',
      );
      await tachyon.say_and_wait(
        '自然に任せるほうがいいですわ……無理な発育は、どうしても禍根を残しますもの……',
      );
      era.println();
      await era.printAndWait([
        '後輩と話す ',
        tachyon.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' の予想より穏やかだった',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の口から出る言葉とは、にわかに信じがたいほどだ',
      ]);
      await era.printAndWait('……よく考えれば、道理でもある');
      await era.printAndWait([
        '可能性を何より重んじる ',
        tachyon.get_colored_name(),
        ' が、一時の成績のために',
        tachyon.uma_sex_title,
        'の可能性を犠牲にすることなど、許すはずがない',
      ]);
      await era.printAndWait('まして相手は、もっと広い可能性を持つ後輩だ');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'あ……もう遅いです。タキオン先輩！ 先に戻ります！',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        'それと……天皇賞（春）、カフェ先輩は強いけど、タキオン先輩なら絶対勝つって信じてます！',
      ]);
      era.println();
      await era.printAndWait([
        '憧れに満ちた',
        tachyon.sex,
        'の目が、光っている',
      ]);
      era.drawLine();
      await era.printAndWait([
        coffee.get_colored_name(),
        ' が強いのは、当たり前だ',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' と自分の補助がなくても、',
        coffee.get_colored_name(),
        ' は強い',
      ]);
      await era.printAndWait([
        'まともに競えば、',
        tachyon.get_colored_name(),
        ' でも苦戦は必至だ',
      ]);
      await era.printAndWait('それに……');
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await era.printAndWait([
          '能力は足りていても、レース経験と、数ヶ月コースを踏んでいない点では、',
          tachyon.get_colored_name(),
          ' は明らかに ',
          coffee.get_colored_name(),
          ' に劣る',
        ]);
      } else {
        await era.printAndWait([
          '能力では、今の ',
          tachyon.get_colored_name(),
          ' は皐月賞やダービーのときの',
          tachyon.sex,
          'にすら届いていない',
        ]);
      }
      await era.printAndWait('いくら戻そうとしても、能力には限りがある');
      era.println();
      await era.printAndWait([
        'まして、',
        tachyon.get_colored_name(),
        ' の出走目的は……レースに勝つことではない',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' をもっと高い頂点へ運ぶためだけだ',
      ]);
      await era.printAndWait(
        '勝ち負けがどうでもいい、ではない。……勝ってはいけない。勝ってほしくない',
      );
      await era.printAndWait([
        '勝てば、',
        tachyon.get_colored_name(),
        ' の夢であり最後の希望である ',
        coffee.get_colored_name(),
        ' が、',
        tachyon.get_colored_name(),
        ' の限界に敗れたことになる',
      ]);
      await era.printAndWait('だから……');
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('だから、答えにくいのだろう');
      await era.printAndWait('自分を信じる後輩に、そんなことが言えるか');
      await era.printAndWait(['天皇賞（春）は、絶対に勝てない、と']);
      await era.printAndWait(
        '憧れの光が、凍った空気のなかで戸惑いに変わっていく後輩へ、本当に口にできるのか',
      );
      era.println();
      await era.printAndWait([
        '本来ならここで ',
        tachyon.get_colored_name(),
        ' を助けるべき ',
        you.get_colored_name(),
        ' も、なぜか足が釘付けで、口が開かない',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も、答えを待っているのかもしれない',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、本当に勝敗を気にしていないのか',
      ]);
      await era.printAndWait('本当に、勝ちを差し出せるのか');
      await era.printAndWait(
        '自分が重んじる可能性の前で、諦めを口にできるのか',
      );
      era.println();
      await era.printAndWait('どれだけ経ったかわからない');
      await era.printAndWait([
        '他の自主トレの',
        tachyon.uma_sex_title,
        'たちが帰り、沈黙は夜の常態になった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        call_25,
        ' は',
        tachyon.sex,
        '、本当に強い相手ですわ',
      ]);
      era.println();
      await era.printAndWait('……そうだ');
      await era.printAndWait('それが、当然だ');
      era.println();
      await era.printAndWait([
        'そもそも、万一 ',
        tachyon.get_colored_name(),
        ' が本気でこの勝負を取りにいったら、一番困るのは自分のはずだ',
      ]);
      await era.printAndWait([
        'そもそも最初に、こんな茶番じみた提案を受けたのは、それが ',
        coffee.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の双方に得だからだ',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' は栄光を得て、',
        tachyon.get_colored_name(),
        ' は',
        tachyon.sex,
        'の欲しい実験結果を得る',
      ]);
      await era.printAndWait([
        '万一 ',
        tachyon.get_colored_name(),
        ' が今になって前言を翻せば、板挟みになるのは ',
        you.get_colored_name(),
        ' だ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'ですが……私は勝ちますわ。',
        call_25,
        ' が',
        tachyon.sex,
        'どれほど強くても同じ。勝つのは私です',
      ]);
      era.println();
      await era.printAndWait('！');
      await era.printAndWait('まさか……切り返すのか');
      await era.printAndWait('これは、まずい……');
      await era.printAndWait([
        '後輩を適当に流した言葉だとしても、この答えは ',
        tachyon.get_colored_name(),
        ' の心が揺れ始めている証拠だ',
      ]);
      await era.printAndWait('まして、流すだけなら、さっきまで黙る必要もない');
      await era.printAndWait('となると……自分はどうすればいい');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' の ',
        callname_25,
        'であり、',
        tachyon.get_colored_name(),
        ' の ',
        callname,
      ]);
      await era.printAndWait('どちらを選べばいい');
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'はい！ あの日は絶対にタキオン先輩を応援しに行きます！',
      );
      era.println();
      await era.printAndWait([
        '明るい足音が遠ざかり、残された二人は静かなトレーニング場で、星空と一緒にいる',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' を選べば、Plan B を選んだ自分は何だったのか',
      ]);
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          'このまま ',
          tachyon.get_colored_name(),
          ' を助け続ければ、全力で支えてきたあの',
          tachyon.teen_sex_title,
          'に顔向けできるのか。',
          tachyon.sex,
          'の淹れたコーヒーに、顔向けできるのか',
        ]);
      }
      era.println();
      await era.printAndWait([
        'だから、助けるべきは ',
        coffee.get_colored_name(),
        ' だろう',
      ]);
      await era.printAndWait([
        'だから、',
        tachyon.get_colored_name(),
        ' に確認すべきだ。今の言葉は後輩向けの社交辞令にすぎないと',
      ]);
      await era.printAndWait('だから……この状況で、胸が喜んではいけないはずだ');
      era.println();
      await era.printAndWait('なのに、今の胸はこんなにも喜んでいる');
      await era.printAndWait(
        'まさか、自分が本当に選みたかったのは Plan A だったのか',
      );
      await era.printAndWait([
        'まさか、',
        coffee.get_colored_name(),
        ' を助けることが、本心に反していたのか',
      ]);
      await era.printAndWait('……いいえ、それだけは、違うと断言できる');
      await era.printAndWait(
        'ではなぜ……これほど葛藤すべき場面なのに、心拍がどうしても落ち着かない',
      );
      await era.printAndWait([
        '抑えきれず、',
        you.get_colored_name(),
        ' は口を開いた',
      ]);
      era.printButton('「タキオン……今のは、本気じゃないよな？」', 1);
      era.printButton('「タキオン……今のは、冗談だよな？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '물론이죠. 승패에 집착하는 건 아이들의 특권…… 우리에게 필요한 건 실험 데이터뿐이에요. 그게 전부죠',
      );
      await era.printAndWait('言葉は嘘をつく');
      await era.printAndWait('声は嘘をつく');
      await era.printAndWait(
        '永遠に理性的だと自称する人間は、自分の利益のために嘘をつく',
      );
      await era.printAndWait('だが……感動は、嘘をつかない');
      era.println();
      await era.printAndWait([
        '今の言葉の何割が真で何割が偽か、',
        you.get_colored_name(),
        ' にはわからない',
      ]);
      await era.printAndWait([
        'だが……',
        tachyon.sex,
        'の目に、数ヶ月前にはほとんど消えていた光がある',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の目を灼き、感動の中で消えたはずの光',
      ]);
      await era.printAndWait('今夜、また弱い火が灯った');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_b_95_18
  we_b_95_18: (() => {
    const title = '再び咲く光子';
    /**
     * 天皇賞（春）でカフェに勝ったあと
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait('もう、このままではいけない');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が何度目かもわからない回数、',
        you.get_colored_name(),
        ' との会話を避けたあと、',
        you.get_colored_name(),
        ' は決心した',
      ]);
      await era.printAndWait('トレーニングには来るし、実験も普通にしている');
      await era.printAndWait([
        'だが一息ついて、天皇賞（春）の話をしようとすると、',
        tachyon.sex,
        'はすぐその場から逃げる',
      ]);
      await era.printAndWait('いつでも、どこでも、実験の最中ですら');
      era.println();
      await era.printAndWait('このままではだめだ');
      await era.printAndWait([
        tachyon.sex,
        'の表情は日ごとに衰え、縮こまってさえいる',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、こうであってはならない',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、こうであってはいけない',
      ]);
      era.println();
      await era.printAndWait('せっかく取り戻した目の光を');
      await era.printAndWait('こんなことで消していいわけがない');
      await era.printAndWait('逃げる理由は、だいたいわかる');
      if (relation <= 75) {
        await era.printAndWait('まだわからない部分もあるが');
      }
      await era.printAndWait('だから……');
      era.printButton(`${tachyon.sex}には、はっきり伝えなければ`, 1);
      await era.input();
      era.drawLine();
      await tachyon.print_and_wait('……もう何週間も逃げていますわ');
      await tachyon.print_and_wait([
        '天皇賞（春）が終わってから、ずっと',
        you.sex,
        'を避けている',
      ]);
      await tachyon.print_and_wait('私のためにすべてを犠牲にした人を');
      await tachyon.print_and_wait([
        '理性で言えば、走りたくもなく未来もない',
        tachyon.uma_sex_title,
        'を担当し続けるのは無意味で、枠も資源も時間も無駄にする行為です',
      ]);
      await tachyon.print_and_wait([
        '感性で言えば、',
        you.sex,
        'の夢を、',
        you.sex,
        'が魅了された走りを壊したうえに、馬鹿げた Plan B へ付き合わせ、夢まで犠牲にさせて',
        you.sex,
        'に合わせさせた',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'それでも',
        you.sex,
        'は、振り向かずに着いてきた',
      ]);
      await tachyon.print_and_wait('私の研究のために、自ら実験体になった');
      await tachyon.print_and_wait([
        '私の我儘のために、',
        call_25,
        ' まで巻き込んだ',
      ]);
      await tachyon.print_and_wait([
        'だから引き換えに、',
        you.sex,
        'と ',
        call_25,
        ' に名声を与え、些少の報いとしたかった',
      ]);
      await tachyon.print_and_wait('ですが……');
      era.println();
      await tachyon.say_and_wait('……ん？');
      era.println();
      await tachyon.print_and_wait([
        '今日も同じ。わざと',
        you.sex,
        'との会話を避け、必要なとき以外の交流を逃し、研究室の前まで戻った',
      ]);
      await tachyon.print_and_wait(
        'ところが……研究室の外には、もう誰かが待っていた',
      );
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await tachyon.print_and_wait('いや');
      await tachyon.print_and_wait('だめですわ');
      await tachyon.print_and_wait('今ではありません');
      era.println();
      await tachyon.print_and_wait('簡単なことです');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は宝塚記念で負けさえすればいい',
      ]);
      await tachyon.print_and_wait(['宝塚記念で勝利を譲れば、また……']);
      era.println();
      await tachyon.print_and_wait('いいえ、もう無理です');
      await tachyon.print_and_wait('走る本能は抑えられません');
      await tachyon.print_and_wait('これはただの自己欺瞞、現実逃避ですわ');
      era.println();
      await tachyon.print_and_wait('眼前の影が、通路の真ん中に立っている');
      await tachyon.print_and_wait('全身が震える……当然です。怒るでしょう');
      await tachyon.print_and_wait('過ちを犯したうえに逃げ続けた愚か者へ');
      await tachyon.print_and_wait('いいですわ、覚悟はできています');
      await tachyon.print_and_wait('すべての怒りを……ぶつけてくださいまし');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.drawLine();
      await era.printAndWait('まず、何を言えばいい');
      await era.printAndWait([
        '先に口にすべきだろう。',
        tachyon.sex,
        'を責めるつもりはない、と',
      ]);
      await era.printAndWait([
        '相手の手加減で得た勝利など、',
        coffee.get_colored_name(),
        ' は',
        tachyon.sex,
        '絶対に喜ばない',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        ' をもっと高い頂点へ運ぶ、その目的は壊れていない',
      ]);
      await era.printAndWait([
        'むしろ、',
        coffee.get_colored_name(),
        ' を完全に掌で転がせると思っていたほうが、傲慢すぎた',
      ]);
      await era.printAndWait(
        'この先も全力でレースに出て、互いに砥ぎ合うことこそ、Plan B の最も良い実行だ',
      );
      await era.printAndWait('だから……');
      await era.printAndWait('そうだ、こう言おう');
      era.printButton('「タキオン……」', 1);
      era.printButton('「天皇賞、本当にすごかった！」', 2);
      await era.input();
      await tachyon.say_and_wait('……え？');
      era.println();
      await era.printAndWait('そうだ');
      await era.printAndWait('理論や道理より、この言葉のほうが自分に合う');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の走りに溺れ、そのためにすべてを捧げるモルモット',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はなぜか、いきなり自分の両目をじっと見た',
      ]);
      await era.printAndWait(
        '初めて会ったときと同じ。皐月賞やダービーの前と同じ',
      );
      await era.printAndWait([
        '自分の目はいったい何色で、',
        tachyon.sex,
        'は毎回ああ感嘆するのだろう',
      ]);
      era.println();
      await tachyon.say_and_wait('……ですが、それでは Plan B は……');
      era.printButton(
        `「タキオンが手を抜いて初めて勝てるカフェが、本当に${tachyon.uma_sex_title}の限界を超えられるのか？」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……');
      era.println();
      await era.printAndWait('夢への盲目か');
      await era.printAndWait([
        'それとも ',
        coffee.get_colored_name(),
        ' への執着か',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、いちばん大事なことを忘れていたらしい',
      ]);
      if (love >= 75) {
        await era.printAndWait([
          'こう見ると結婚後の ',
          tachyon.get_colored_name(),
          '는 의외로 아이들을 무척 아끼는 성격일지도 모른다',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        '……それは、',
        tachyon.get_colored_name(),
        ' のトレーナーの言い分ですわね？ では ',
        coffee.get_colored_name(),
        ' のトレーナーはどうしますの',
      ]);
      if (relation <= 75) {
        era.println();
        await era.printAndWait([
          '……一瞬の衝撃で、',
          you.get_colored_name(),
          ' は言葉を忘れた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が自分から逃げる理由が、わからなかった',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' への罪悪感ならまだわかる。なぜ自分を避けるのか',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '……自分を、心配して……？',
        ]);
      }
      await era.printAndWait([
        'ならば、',
        coffee.get_colored_name(),
        ' のトレーナーとして、応えるべきだ',
      ]);
      era.printButton('「悔しい……カフェを勝たせてやれなかった」', 1);
      era.printButton(
        '「だから宝塚では、カフェは今より強くなってタキオンを超える！」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait('……悔しい……ですの？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は言葉を噛みしめている。だが、言うべきことはまだ残っている',
      ]);
      era.printButton('「だが、タキオンのトレーナーとして！」', 1);
      era.printButton(
        '「タキオンをカフェに負けさせない。宝塚もタキオンの勝ちだ！」',
        2,
      );
      await era.input();
      await era.printAndWait('間違いない');
      await era.printAndWait([
        'これが、',
        tachyon.get_colored_name(),
        ' のトレーナー「かつ」',
        coffee.get_colored_name(),
        ' のトレーナーの答えだ',
      ]);
      await era.printAndWait('理由？ 天皇賞（春）のとき、言ったはずだ');
      await era.printAndWait([
        '自分は、深く',
        tachyon.couple_title,
        'の走りを愛している',
      ]);
      if (love >= 75 && era.get('love:25') >= 75) {
        await era.printAndWait([
          '自分は、深く',
          tachyon.couple_title,
          'を愛している',
        ]);
      }
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait('低い呼びかけ');
      await era.printAndWait('それから、張りつめた沈黙');
      await era.printAndWait('どれほど経ったかわからない沈黙のあと……');
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '、そんなに私の走りが好きですの？',
      ]);
      era.println();
      await era.printAndWait(
        '答えを言うまでもない。顔と目が、すべてを語っている',
      );
      era.println();
      await tachyon.say_and_wait(
        '…………では、興味はありますの？ もう少し、私と道を歩く気は',
      );
      await tachyon.say_and_wait(
        '付き合ってくださいまし。フランスへの、ロマンチックな旅に',
      );
      era.println();
      await era.printAndWait('……え？');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_95_36
  we_b_95_36: (() => {
    const title = '決意';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (tachyon, you, callname, prix_lat) => {
      await tachyon.say_and_wait('하아…… 하아……');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 프랑스의 훈련장을 달리고 있다.',
      ]);
      await tachyon.print_and_wait([
        '요 며칠은 ',
        callname,
        '이(가) 일본으로 돌아가는 날이다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['다음은 세계 최고봉인 개선문상……']);
      era.println();
      await tachyon.print_and_wait([
        '지금의 ',
        you.sex,
        '은(는) 아직도 망설이고 있을 테지.',
      ]);
      await tachyon.print_and_wait(['어째서 개선문상을 선택했는가.']);
      await tachyon.print_and_wait([
        '한계 너머에 도달하는 것. 그것이 ',
        tachyon.get_colored_name(),
        '의 꿈이었다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '은(는) 줄곧 그 목표에 모든 것을 걸 수 있으리라 믿었다. 목표에 닿기만 한다면 그게 자신이 아니더라도 괜찮다고.',
      ]);
      await tachyon.print_and_wait([
        '……하지만 ',
        tachyon.sex,
        '은(는) 스스로 생각한 것만큼 무관심하지는 않았네.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '본질적으로 ',
        tachyon.sex,
        '은(는) 달리고 싶은 ',
        tachyon.uma_sex_title,
        '이라네.',
      ]);
      await tachyon.print_and_wait([
        '그러나 ',
        tachyon.sex,
        '은(는) 한계를 뛰어넘겠다는 꿈도 버리고 싶지 않다.',
      ]);
      await tachyon.print_and_wait('그렇다면 어떻게 해야 하는가? 두 가지를 모두 얻을 방법은?');
      await tachyon.print_and_wait([
        '간단하네. ',
        tachyon.get_colored_name(),
        '이(가) 스스로 『한계』가 되면 되지.',
      ]);
      era.println();
      await tachyon.print_and_wait(['그래서 ', prix_lat, '를 선택했네.']);
      await tachyon.print_and_wait('세계 최고봉이자 한계를 가장 잘 나타내는 레이스를.');
      await tachyon.print_and_wait([
        '그 무대에서 스스로 ',
        tachyon.uma_sex_title,
        '의 한계를 정의하는 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……후후.');
      era.println();
      await tachyon.print_and_wait('남들을 뛰어넘어 한계 그 자체가 된다고 생각하니');
      await tachyon.print_and_wait('몸이 참을 수 없을 만큼 뜨거워지는군.');
      era.println();
      await tachyon.say_and_wait('역시 달리고 싶네…… 나는.');
      era.println();
      await tachyon.print_and_wait('결심은 이미 불타오르고 있었다.');
      await tachyon.print_and_wait(
        '라면 다른 것은 모두 내려놓고 눈앞의 승리에 집중하세.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_b_cf_japa_cup
  we_b_cf_japa_cup: (() => {
    const title = '한계를 넘어서';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await you.say_as_passer_by_and_wait('実況', [
        coffee.get_colored_name(),
        '! 재팬컵 기록을 경신했습니다…… 아니, 세계 기록입니다! 불과 몇 달 전 ',
        tachyon.get_colored_name(),
        '이(가) 세운 세계 2400m 기록을 칠흑의 환영이 다시 넘어섰습니다!',
      ]);
      era.println();
      await tachyon.print_and_wait('정말로 넘어섰군.');
      await tachyon.print_and_wait(['', call_25, '이(가) 결승선을 통과하는 순간,']);
      await tachyon.print_and_wait('나도 다른 사람들처럼 흥분하고 있었다.');
      era.println();
      await tachyon.print_and_wait('당연한 일이지.');
      await tachyon.print_and_wait([
        '조금 자화자찬 같지만 ',
        tachyon.sex,
        '은(는) 스스로 한계에 가장 가까이 다가간 ',
        tachyon.uma_sex_title,
        '라고 생각했으니까.',
      ]);
      await tachyon.print_and_wait(
        '한계에 가장 가깝다는 것과 그 한계를 넘어선다는 것은 큰 차이가 있지.',
      );
      await tachyon.print_and_wait([
        '하지만……',
        tachyon.sex,
        '은(는) 정말 해냈네!',
      ]);
      await tachyon.print_and_wait(
        '왠지 달리는 모습에서 설명하기 힘든 위화감이 느껴지지만, 이제 그런 건 상관없네.',
      );
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 한계에 도달한 ',
        tachyon.uma_sex_title,
        '였지. 그리고 ',
        coffee.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '지금 그 한계를 넘어섰네.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '！',
        callname,
        '！',
        call_25,
        '은(는) ',
        tachyon.sex,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait('너무 흥분해서 곁에 있는 사람과 이 기쁨을 나누고 싶었다.');
      await tachyon.print_and_wait('온갖 고생을 감수한 연구가 마침내 성과를 낸 것이다.');
      await tachyon.print_and_wait('그런데……');
      era.println();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await tachyon.print_and_wait('대답이 없다.');
      await tachyon.print_and_wait([
        '곁에 있는 ',
        you.sex,
        '도, 관중석의 관객들도 모두 시선을 ',
      ]);
      await tachyon.print_and_wait(['중앙의 ', tachyon.sex, '에게 집중하고 있었다.']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 외침은 귀가 찢어질 듯한 환호와 박수갈채에 묻혀 버렸다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_limited_tachyon
  we_limited_tachyon: (() => {
    const title = '限界に止まった光子';
    /**
     * Plan B 専用。カフェが菊花賞に出走したあと発動
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait(['菊花賞は、終わった']);
      await era.printAndWait([
        '終わって数日。',
        you.get_colored_name(),
        ' は夜までトレーニングした ',
        coffee.get_colored_name(),
        ' を寮まで送り、',
        tachyon.sex,
        'へ休めと伝え……自分は学園へ戻った',
      ]);
      await era.printAndWait(
        '自分だって休むべきなのに……まだ、仕事が残っている',
      );
      era.println();
      await era.printAndWait([
        '真っ暗なトレーナー室に入った瞬間、',
        you.get_colored_name(),
        ' は部屋にもう一人いると悟った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の勘が鋭いからではない。その人物が、人を光らせる薬を手にしていたからだ',
      ]);
      era.printButton('「……タキオンか」', 1);
      await era.input();
      await era.printAndWait([
        'ここ数ヶ月、',
        coffee.get_colored_name(),
        ' を手伝ってきた、同じく ',
        you.get_colored_name(),
        ' の担当',
        tachyon.uma_sex_title,
        '——',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の手の薬が、月光の下で七色に光っている',
      ]);
      era.println();
      await tachyon.say_and_wait('菊花賞、終わりましたわね');
      era.printButton('「……ああ」', 1);
      await era.input();
      await era.printAndWait('仲が悪いわけではない');
      await era.printAndWait([
        'そもそも',
        tachyon.sex,
        'は今も ',
        you.get_colored_name(),
        ' の担当',
        tachyon.uma_sex_title,
        'だ。日常の接点は、ずっとある',
      ]);
      await era.printAndWait('普通に話せない理由はないはずだ');
      await era.printAndWait([
        'だがこの数ヶ月、会話が ',
        coffee.get_colored_name(),
        ' を離れたことはほとんどない',
      ]);
      await era.printAndWait('それに、合同トレーニングのときのことも……');
      await era.printAndWait([
        'ふと、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'と何を話せばいいのか、わからなくなった',
      ]);
      era.println();
      await tachyon.say_and_wait(callname);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'の栗色の短髪は沈んだ月光の下で酒のように濃く、赤い瞳は血を欲する獣のように、貪欲に ',
        you.get_colored_name(),
        ' を見ている',
      ]);
      await era.printAndWait([
        'その一瞬、',
        you.get_colored_name(),
        ' はいろいろなことを思い出した。先輩トレーナーが言っていた、',
        tachyon.uma_sex_title,
        'との安全な距離感',
      ]);
      await era.printAndWait([
        'トレーナー講座で聞いた、',
        tachyon.uma_sex_title,
        'の独占欲',
      ]);
      await era.printAndWait([
        tachyon.uma_sex_title,
        '生理学で習った、',
        tachyon.uma_sex_title,
        'の発情期……',
      ]);
      await era.printAndWait([
        'だが今、丸腰で担当',
        tachyon.uma_sex_title,
        'に向かい合う自分には、どれも役に立たない',
      ]);
      await era.printAndWait([
        '目の前の ',
        tachyon.get_colored_name(),
        ' の薬のおかげで、わずかに抗う力はあるかもしれない',
      ]);
      await era.printAndWait('だが、本当にわずかだ');
      await era.printAndWait([
        tachyon.sex,
        'が歩み寄ると、',
        you.get_colored_name(),
        ' も無意識に下がった',
      ]);
      await era.printAndWait('そうして一進一退のまま、壁際まで追い詰められる');
      await era.printAndWait([
        tachyon.sex,
        'は壁際に縮こまる ',
        you.get_colored_name(),
        ' を押さえ、淡く言った',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、少し……一緒に走っていただけませんこと？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が予想していた、それでも予想より悪い頼みだった',
      ]);
      era.drawLine();
      await era.printAndWait('夜のトレーニング場。空のコース');
      await era.printAndWait([
        '場にいるのは、走る ',
        tachyon.get_colored_name(),
        ' だけだ',
      ]);
      await era.printAndWait([
        '月下の',
        tachyon.sex,
        'の走りは、ひどく様になっていない',
      ]);
      await era.printAndWait([
        '無理もない。もう三ヶ月近くトレーニングしていない',
        tachyon.sex,
        'だ。天才でも時間は越えられない。筋の衰え、感覚の鈍りは、選手にとって致命傷だ',
      ]);
      await era.printAndWait([
        '今の ',
        tachyon.get_colored_name(),
        ' なら、あるいは ',
        you.get_colored_name(),
        ' でも勝てるかもしれない……',
      ]);
      await era.printAndWait([
        '荒唐無稽に聞こえるが、毎日薬で鍛えられた身体なら、長く走っていない',
        tachyon.uma_sex_title,
        'に勝つことだってあり得る',
      ]);
      era.println();
      await era.printAndWait('では、なぜ……');
      await era.printAndWait([you.get_colored_name(), ' は苦しく考えた']);
      era.println();
      await era.printAndWait([
        'なぜ、これほど見劣りする走りでも、',
        you.get_colored_name(),
        ' の目には初めて見たときと同じように輝いているのか',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        '気づくと',
        tachyon.sex,
        'は走り終え、',
        you.get_colored_name(),
        ' の傍で息を切らしていた',
      ]);
      await era.printAndWait(['かつての', tachyon.sex, 'は、こうではなかった']);
      await era.printAndWait([
        '脚の傷を加えても、',
        tachyon.sex,
        'はこうなるべきではなかった',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'をこうしてしまったのは、傍にいて、',
        tachyon.sex,
        'を信じるはずだった人間だ',
      ]);
      await era.printAndWait(['——', you.get_colored_name()]);
      era.println();
      await tachyon.say_and_wait('……フフ、みっともない走りでしたわね');
      era.println();
      await era.printAndWait([
        'そんなことはない、と ',
        you.get_colored_name(),
        ' は慰めようとした',
      ]);
      await era.printAndWait([
        'だが',
        tachyon.sex,
        'の目が、',
        you.get_colored_name(),
        ' に嘘を許さない',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、覚えていますか？ 月桂杯のとき、私が言った言葉',
      ]);
      era.println();
      await era.printAndWait('覚えている？ 忘れるほうが無理だ');
      await era.printAndWait('今も、夜更けに繰り返し見る悪夢だ');
      await era.printAndWait([
        '自分の夢と、他人の夢を抱えた',
        tachyon.uma_sex_title,
        'が、目の前で萎れていく瞬間',
      ]);
      await era.printAndWait(
        '叱責でも怨嗟でも嘆きでも、受ける覚悟はできていた',
      );
      era.println();
      await era.printAndWait([
        'だが',
        tachyon.sex,
        'が口にしたのは、それではない',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '全力を使い切れる残り回数……いま、機会が来ましたわ',
      );
      await tachyon.say_and_wait([
        '菊花賞で、',
        call_25,
        ' はもう',
        tachyon.sex,
        'の光を咲かせました……文句なしの、『最強』の',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await era.printAndWait([
        '最も速い',
        tachyon.uma_sex_title,
        'が皐月賞を取る',
      ]);
      await era.printAndWait([
        '最も強い',
        tachyon.uma_sex_title,
        'が菊花賞を取る',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、ずっと昔から語り継がれてきた言葉を思い出した',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'そして……年末まで、',
        tachyon.sex,
        'は必ず頂点まで行き着きますわ',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, 'は、自分の中の可能性を語っている']);
      await era.printAndWait('……もう、自分のものではない可能性を');
      era.println();
      await tachyon.say_and_wait([
        'ですが',
        tachyon.sex,
        'に限界を超えさせるには、研ぐための踏み台が要りますわ……',
      ]);
      era.println();
      await era.printAndWait(
        '自分の可能性を失ったはずなのに、その目の光はまだ、こうも眩しい',
      );
      await era.printAndWait([
        'こんな',
        tachyon.sex,
        'なら、自分はきっと頷くだろう。',
        tachyon.sex,
        'が夢のために燃え尽きるなら、付き合うことなど造作もない',
      ]);
      await era.printAndWait('これまで通り、喜んで使われるだろう');
      await era.printAndWait('だが……');
      era.println();
      await tachyon.say_and_wait([
        'ですから、',
        callname,
        '、あなたの力が要りますの',
      ]);
      await tachyon.say_and_wait([
        '私は来年、復帰します。',
        call_25,
        ' をもっと高い限界へ運ぶために。',
        tachyon.sex,
        'に最も刺さる戦術を組み、',
        tachyon.sex,
        'を限界まで追い込むことができるのは、私だけですわ',
      ]);
      await tachyon.say_and_wait('……力を貸してくれますわね');
      era.println();
      await era.printAndWait(
        '本当にすべてを犠牲にして他人を成すつもりなら、なぜその顔は、これほど無念なのか',
      );
      await era.printAndWait('なぜ、目尻に涙があるのか');
      era.println();
      await tachyon.say_and_wait('黙っているのは、黙認とみなしますわ');
      era.println();
      await era.printAndWait('そもそも、拒む理由などないではないか');
      await era.printAndWait([
        coffee.get_colored_name(),
        ' を頂点へ連れていくために',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の「遺志」を叶えるために',
      ]);
      await era.printAndWait([
        '拒む理由はない。ただ ',
        you.get_colored_name(),
        ' は知りたかった',
      ]);
      await era.printAndWait(
        '目の前の、栗色の髪の天才は、いま何を考えているのだろう？',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_47_31
  ws_b_47_31: (() => {
    const title = '달빛';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, t_call_c, relation) => {
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배, 요즘…… 한밤중에 모래사장을 달리고 계신 것 같아요.',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '큰일은 아닐지도 모르지만, 타키온 선배의 달리는 모습이…… 왠지 괴로워 보여요.',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'C', [
        '타키온 선배께 신세도 많이 졌는데…… 선배 ',
        tachyon.sex,
        '는 정말 괜찮으신 걸까요?',
      ]);
      era.println();
      await era.printAndWait([
        '여러 ',
        tachyon.uma_sex_title,
        '들이 걱정해 준 덕분에 ',
        you.get_colored_name(),
        '은(는) 한밤중에 트레이너 기숙사를 나와 합숙소의 모래사장으로 향했다.',
      ]);
      await era.printAndWait([
        '다른 ',
        tachyon.uma_sex_title,
        '들의 말을 듣고서야 담당의 이상을 알아차리다니…… 트레이너 실격이다.',
      ]);
      await era.printAndWait([
        '하지만 도움에 대한 감사 때문일까…… ',
        tachyon.sex,
        '는 실험이라고 생각했겠지만, ',
        tachyon.sex,
        '의 약 덕분에 도움받은 이들도 분명히 있었다.',
      ]);
      await era.printAndWait([
        '그 이유도 감정도 제대로 이름 붙일 수 없었다. ',
        you.get_colored_name(),
        '은(는) 이상하게 가슴이 뜨거워졌다.',
      ]);
      era.println();
      await tachyon.say_and_wait('하아…… 하아…… 하아……');
      era.println();
      await era.printAndWait([
        '모래사장에 도착한 ',
        you.get_colored_name(),
        '의 눈앞에 있던 것은 합숙 내내 자신과 나란히 ',
        coffee.get_colored_name(),
        '의 주법을 개선하려 연구를 계속하던 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        '달리는 데 몰두한 ',
        tachyon.sex,
        '은(는) 어둠에 묻힌 ',
        you.get_colored_name(),
        '이(가) 다가온 것도 눈치채지 못했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '도 말없이 바라보며 이 고요함을 깨뜨리지 않았다.',
      ]);
      era.println();
      await era.printAndWait(['모래사장에서 ', tachyon.sex, '의 달리기는 완벽하지 않았다.']);
      await era.printAndWait([
        '사츠키상 때와 비교할 것도 없이, 더 오래전 ',
        tachyon.get_colored_name(),
        '의 달리기와 비교해도 몹시 어색했다.',
      ]);
      await era.printAndWait([
        '다리에 무리가 갈까 봐 제대로 발을 내딛지 못하는 모습도 있었다. 그런 주법은 애초에 ',
        tachyon.get_colored_name(),
        '이(가) 원래 잘하던 것도 아니었다.',
      ]);
      await era.printAndWait([
        '그런데도 달빛 아래 ',
        tachyon.sex,
        '의 모습에서 ',
        you.get_colored_name(),
        '은(는) 눈을 뗄 수 없었다.',
      ]);
      await era.printAndWait([
        '완벽한지는 중요하지 않았다. ',
        tachyon.get_colored_name(),
        '이(가) 달리는 모습 그 자체가 ',
        you.get_colored_name(),
        '을(를) 매료시켰다. 빛이었다. 아무리 희미한 빛이어도 사람들은 열광하며 뒤쫓는다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 저도 모르게 한 걸음을 내디뎌 그 빛을 붙잡으려 했다……',
      ]);
      era.println();
      await tachyon.say_and_wait(['누구인가? ……어라, ', callname]);
      era.println();
      await era.printAndWait([
        '달리기를 멈춘 ',
        tachyon.sex,
        '은(는) 바로 곁에 선 사람의 그림자를 알아보고 말을 걸었다.',
      ]);
      era.printButton('「이 늦은 밤에 뭘 하고 있는 거야?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '별일 아닐세. ',
        t_call_c,
        '를 위해 새로운 주법을 시험하고 있을 뿐이지……',
      ]);
      await tachyon.say_and_wait([
        '지금도 봤겠지. 내 달리기는 영 엉성하네. 하지만 ',
        t_call_c,
        '의 주법을 이 방향으로 바꿀 수 있다면……',
      ]);
      era.println();
      await era.printAndWait('하려던 말을 삼켰다.');
      await era.printAndWait([
        '틀린 선택은 아니다. 이 모든 것은 ',
        tachyon.get_colored_name(),
        '의 플랜 B를 위한 일이다.',
      ]);
      await era.printAndWait([
        '동시에 ',
        coffee.get_colored_name(),
        '을(를) 정상에 올려놓기 위한 일이기도 하다.',
      ]);
      if (relation <= 225) {
        await era.printAndWait('처음부터 결정했던 일이다.');
        await era.printAndWait(
          '합리적으로 생각해 보면 이보다 더 타당한 선택이 어디 있겠는가.',
        );
        await era.printAndWait('그러니까.');
      } else {
        await era.printAndWait('처음부터 결정했던 일이다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 다시는 ',
          tachyon.get_colored_name(),
          '에게 그런 고통을 겪게 하고 싶지 않았다. 그렇지 않은가?',
        ]);
        await era.printAndWait('그러니까.');
      }
      era.printButton('「……그래도 휴식은 취해야 해.」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '알고 있네. 자네도 마찬가지야. 이 시간까지 깨어 있다가 내일 ',
        t_call_c,
        '의 훈련은 어떻게 할 생각인가?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그저 형식적인 걱정만 입 밖에 낼 수 있었고, 모래사장을 떠났다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_47_40
  ws_b_47_40: (() => {
    const title = '또 다른 가능성';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        '그날 밤 ',
        you.get_colored_name(),
        '은(는) 꿈을 꾸었다.',
      ]);
      await era.printAndWait([
        '국화상을 제패한 ',
        tachyon.sex,
        '이(가) 경기장에서 하얀 연구복 소매로 손을 흔들고 있었다.',
      ]);
      await era.printAndWait(['모두가 ', tachyon.sex, '의 이름을 부르고 있다.']);
      await era.printAndWait([
        tachyon.sex,
        '은(는) 돌아서서 관중석의 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait('얼굴만 새까맣다.');
      await you.say_as_passer_by_and_wait(
        '관중들.',
        '⬛⬛⬛⬛！⬛⬛⬛⬛！⬛⬛⬛⬛！',
      );
      await era.printAndWait(['주변 관중들이 ', tachyon.sex, '의 이름을 부른다.']);
      await era.printAndWait([tachyon.sex, '의 이름은 무엇이었지?']);
      await era.printAndWait([tachyon.sex, '은(는)…… 누구지?']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 꿈에서 벌떡 일어났지만 한동안 진정할 수 없었다.',
      ]);
      await era.printAndWait([
        '너무나도 현실 같은 꿈이라 ',
        you.get_colored_name(),
        '은(는) 그 여운에서 벗어나지 못했다.',
      ]);
      await era.printAndWait([
        '남은 밤에도 ',
        you.get_colored_name(),
        '은(는) 뒤척이느라 아침까지 잠들지 못했다.',
      ]);
      era.println();
      await era.printAndWait([
        '동이 틀 무렵 ',
        you.get_colored_name(),
        '은(는) 서둘러 트레이너 기숙사를 나섰다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 언론에 출전 중단을 발표했다는 사실은 알고 있다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 자신에게 알리지도 않고 레이스에 신청할 리 없다는 것도 알고 있다.',
      ]);
      await era.printAndWait('그래도 걱정된다. 그래도 두렵다.');
      await era.printAndWait([
        '그럼에도 ',
        tachyon.sex,
        '을(를) 두 눈으로 확인하지 않으면 그 꿈이 현실이 아니라고 확신할 수 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오호, ',
        callname,
        '? 오늘은 굉장히 일찍 왔군.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 실험실로 뛰어들자 아침부터 느긋하게 홍차를 마시는 ',
        tachyon.get_colored_name(),
        '이(가) 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '뭐, 오늘은 국화상 날이니…… 긴장하는 것도 당연하겠지.',
      );
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait(
          '이따가 같이 가세. 후후…… 내가 달리지 않고 관중석에서 다른 사람의 경주를 보는 건 이번이 처음이군.',
        );
      } else {
        await tachyon.say_and_wait([
          '자네는 가서 최선을 다하게. 다만 ',
          call_25,
          ' ',
          tachyon.sex,
          '은(는) 출전하지 않을 생각이니 난 여기서 중계만 봐도 충분하네. 멋진 모습을 보여 주게.',
        ]);
      }
      era.println();
      await tachyon.say_and_wait('……아니면 다른 할 말이라도 있나?');
      era.println();
      await era.printAndWait('이렇게 갑작스럽게 실험실로 들이닥쳤는데도');
      await era.printAndWait('악몽 이야기를 털어놓으려 했는데도');
      await era.printAndWait([tachyon.sex, '을(를) 본 순간 모든 말이 사라졌다.']);
      era.println();
      await era.printAndWait('대체 뭐라고 말해야 할까?');
      await era.printAndWait([
        '자신이 ',
        you.get_colored_name(),
        '이(가) 국화상에서 우승하는 꿈을 꾸었다고?',
      ]);
      await era.printAndWait([
        '꿈속의 ',
        you.get_colored_name(),
        '에게는 얼굴도 이름도 없었다고?',
      ]);
      await era.printAndWait('자신이 후회하고 있다고……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 세차게 고개를 젓고 괜찮다는 말만 남긴 채 볼품없이 실험실을 빠져나왔다.',
      ]);
      await era.printAndWait('무슨 말을 해야 할까?');
      await era.printAndWait('무슨 말을 할 수 있단 말인가?');
      await era.printAndWait(
        '스스로 결정한 일을 이제 와서 후회하다니, 농담에도 정도가 있다.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 실험실을 떠나 오늘 국화상 준비를 하러 향했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_95_1
  ws_b_95_1: (() => {
    const title = '決意の新年';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {string} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('新年');
      await era.printAndWait('本来なら旧年を送り、新年を迎える祝いの日だ');
      await era.printAndWait(
        '神社へ参るのも、去年を洗い流して新年を迎える印になる',
      );
      era.println();
      await era.printAndWait('だが……因縁というものは、なかなか落ちない');
      await era.printAndWait(
        '相手が誰であれ、場所がどこであれ、神社でも例外ではない',
      );
      await era.printAndWait(
        '影のようにまとわりつき、粘着して離れない、うっとうしい存在',
      );
      await era.printAndWait('そう、因縁とは————');
      era.println();
      await tachyon.say_and_wait(['おや、', callname, '……奇遇ですわね']);
      era.printButton('「タキ……タキオン！」', 1);
      era.printButton('「それはいい、走れ！」', 2);
      await era.input();
      await tachyon.say_and_wait('あ、待って……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が返すより先に、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'の手を引いて社殿の人混みへ潜り、すぐに姿を消した',
      ]);
      await you.say_as_passer_by_and_wait('記者A', 'くっ……取り逃がした');
      await you.say_as_passer_by_and_wait(
        '記者B',
        '光っていないと、こんなに見つけにくいとは……',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '記者C',
        '……こっちで塞ぐ。絶対に逃すな',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' を人混みに隠し、カメラを持った記者が追ってこないのを確かめてから息を吐いた',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が有馬記念のあと突然復帰を発表したことは、メディアにとって最大の焦点だった',
      ]);
      await era.printAndWait([
        'だが ',
        tachyon.get_colored_name(),
        ' の状態を案じて、',
        you.get_colored_name(),
        ' はこの件の取材をすべて断っていた',
      ]);
      await era.printAndWait('それが、直接押しかけてくるとは……！');
      era.println();
      await tachyon.say_and_wait(['……', callname]);
      era.println();
      await era.printAndWait([
        'ここで ',
        you.get_colored_name(),
        ' は思い出した。つい考えなしに ',
        tachyon.get_colored_name(),
        ' の手を掴んで走っていた……',
      ]);
      era.printButton('「タキオン、脚は大丈夫か！」', 1);
      await era.input();
      await era.printAndWait(
        '……なんでもありませんわ。ただ、少し驚いただけですわ。フフ',
      );
      await era.printAndWait([
        'それでも',
        tachyon.uma_sex_title,
        'だ。脚が不自由でも、身体能力は人間より上だ。まして今年レースへ戻る、元G1の',
        tachyon.uma_sex_title,
        'である',
      ]);
      era.println();
      await you.say_and_wait('……そうだ、レースへの復帰', true);
      era.printButton('「タキオン」', 1);
      era.printButton('「今年のローテーションは……」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'もちろん……',
        call_25,
        ' と同じですわ。言うまでもありませんでしょう',
      ]);
      era.println();
      await era.printAndWait('やはり、そうか');
      await era.printAndWait([you.get_colored_name(), ' は頷いた']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' がレースを離れた理由も、離れたあとも、すべては ',
        coffee.get_colored_name(),
        '———',
        you.get_colored_name(),
        ' のもうひとりの担当',
        tachyon.uma_sex_title,
        'のためだ',
      ]);
      await era.printAndWait([
        'なら、限られた出走先では、当然 ',
        coffee.get_colored_name(),
        ' が出るレースを優先する…………',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？ どうかしましたの？']);
      era.println();
      await era.printAndWait('それでも胸の奥に、浮かんでしまう');
      await era.printAndWait([
        '夏合宿のときの、',
        tachyon.get_colored_name(),
        ' の顔',
      ]);
      await era.printAndWait([
        '菊花賞後の、',
        tachyon.get_colored_name(),
        ' の目',
      ]);
      await era.printAndWait([
        '有馬の前……',
        tachyon.get_colored_name(),
        ' が決意を固めたときの表情',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はそこで気づいた。',
        tachyon.get_colored_name(),
        ' がしばらくこちらを見ていたらしい。慌てて我に返り、どうしたと聞いた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……なんでもありませんわ。ただ、もう私たちの番ですわ',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'が社殿を指す。',
        you.get_colored_name(),
        ' はそこで気づいた。慌てて飛び込んだ先は、本殿の前で加護を祈る長い列だった',
      ]);
      era.printButton(
        '「タキオンは、こういうのを信じないんじゃなかったか？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '口にした瞬間、',
        you.get_colored_name(),
        ' は失敗したと悟った',
      ]);
      if (relation <= 0) {
        await tachyon.say_and_wait(
          '……へえ、あなたが私の意向を気にする日が来るとは',
        );
        era.println();
        await era.printAndWait(['案の定、', tachyon.sex, 'の冷やかしを食った']);
      } else if (relation <= 225) {
        era.println();
        await tachyon.say_and_wait(
          '……連れてきたのは、あなたではありませんの？',
        );
        era.println();
        await era.printAndWait([
          'そういえば、まだ ',
          tachyon.get_colored_name(),
          ' に事情を話していなかった……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて記者のことを説明した',
        ]);
        await era.printAndWait([
          '聞き終えた',
          tachyon.sex,
          'は、特に反応せず、そう、とだけ言った',
        ]);
      } else if (relation <= 525) {
        await tachyon.say_and_wait(
          '信じはしませんわ……でも、あなたの気持ちだと思っておきましょう。それに、先に引っ張ってきたのはあなたですわよ？',
        );
        era.println();
        await era.printAndWait([
          'そういえば、まだ ',
          tachyon.get_colored_name(),
          ' に事情を話していなかった……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて記者のことを説明した',
        ]);
        await era.printAndWait([
          '聞き終えた',
          tachyon.sex,
          'は、少し申し訳なさそうな目をした',
        ]);
      } else {
        await tachyon.say_and_wait(
          '私が信じるのは神ではありません。私をここへ連れてきた、あなたですわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が、急に恥ずかしいことを言った',
        ]);
        await era.printAndWait([
          'そういえば、まだ ',
          tachyon.get_colored_name(),
          ' に事情を話していなかった……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて記者のことを説明した',
        ]);
        await tachyon.say_and_wait(
          'フッ、凡庸な蚊蝿の群れが、私たちを疑う資格でもありますの？',
        );
        await era.printAndWait([tachyon.get_colored_name(), ' は鼻で笑った']);
      }
      era.println();
      await era.printAndWait(['話しているうちに、列の最前列まで来ていた']);
      await era.printAndWait([you.get_colored_name(), ' は眼前の神像を見る']);
      await era.printAndWait('では……何を願えばいい');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はいろいろ考え、願うべきことをいくつも思い浮かべた',
      ]);
      await era.printAndWait('両手を合わせ、神に祈る');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の両脚に何事もなく、無事に走り切ってほしい',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' のレースが、いつものように輝いてほしい',
      ]);
      await era.printAndWait([
        'そして……',
        coffee.get_colored_name(),
        ' のトレーニングも、無事に進んでほしい',
      ]);
      era.println();
      await era.printAndWait([
        '祈りを終え、',
        you.get_colored_name(),
        ' は隣の ',
        tachyon.get_colored_name(),
        ' を見た',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'はもう、いい加減な祈りを済ませて ',
        you.get_colored_name(),
        ' を待っている',
      ]);
      await era.printAndWait([
        '二人は人混みを離れ、諦めきれない記者を慎重にかわして学園へ戻った',
      ]);
      era.println();
      await tachyon.say_and_wait('では……あなたは、何を祈ったのです？');
      era.println();
      await era.printAndWait([
        'なぜか、',
        tachyon.get_colored_name(),
        ' は知りたがっている',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'に告げた……',
      ]);
      era.printButton('タキオンの健康（体力+20%）', 1);
      era.printButton('タキオンのレース（ランダム能力+20）', 2);
      era.printButton('カフェのトレーニング（スキルPt+30）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'に告げた。祈ったのは',
            tachyon.sex,
            'の両脚の無事だと',
          ]);
          era.println();
          if (relation <= 225) {
            await tachyon.say_and_wait('……退屈な願いですわ');
            await tachyon.say_and_wait(
              '身体の無事だけ望むなら……レースに戻らなければいいではありませんの？',
            );
            await tachyon.say_and_wait([
              'すべてを捨てると決めたのに、そんな願いを……',
              callname,
              '、覚悟が足りませんわ',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' の返しは辛辣だった',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' の願いを、心底から鼻で笑っているように聞こえる',
            ]);
          } else {
            await tachyon.say_and_wait('……身体の無事、ですの');
            await tachyon.say_and_wait('いいえ、なんでも。ただ……フフ');
            await tachyon.say_and_wait(
              'ええ、無事に走り切れれば、それに越したことはありませんわ',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はさらりと言った',
            ]);
            await era.printAndWait('ただの雑談——実際、そうなのだが——のように');
          }
          era.println();
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' は見逃さなかった',
          ]);
          await era.printAndWait([
            '願いを口にしたとき、',
            tachyon.get_colored_name(),
            ' の目に咲いた希望と渇望を',
          ]);
          await era.printAndWait('……見えて、何ができるというのか');
          await era.printAndWait([
            'その可能性を追う道は、数ヶ月前、',
            you.get_colored_name(),
            ' 自身が封じた',
          ]);
          await era.printAndWait([
            '今の ',
            you.get_colored_name(),
            ' と',
            tachyon.sex,
            'は、自壊へ向かって走り続けているだけだ',
          ]);
          era.println();
          await era.printAndWait('だから祈るしかない');
          await era.printAndWait('せめて、この最期の時間だけは');
          await era.printAndWait([tachyon.sex, 'が痛みと傷病から免れるように']);
          era.println();
          await tachyon.say_and_wait('……用はないので、戻りますわ');
          era.printButton('「休みは取れよ」', 1);
          break;
        case 2:
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'に告げた。祈ったのは',
            tachyon.sex,
            'と ',
            coffee.get_colored_name(),
            ' のレースが無事であることだと',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'はっは、悪くない願いではありませんこと？',
          );
          await tachyon.say_and_wait([
            call_25,
            ' はもう',
            tachyon.sex,
            'の可能性を証明しました……次は、私の番ですわ',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            'の踏み台になると口にしながら、私がその場に留まってはいけませんわ。でなければ、たかが川原の石ころですもの',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は口では ',
            coffee.get_colored_name(),
            ' のためだと繰り返す',
          ]);
          await era.printAndWait([
            'それでも ',
            you.get_colored_name(),
            ' は見逃さなかった……',
          ]);
          await era.printAndWait([
            'レースの話になったとき、',
            tachyon.get_colored_name(),
            ' の目をよぎった闘志を',
          ]);
          await era.printAndWait([
            'やはり、',
            tachyon.get_colored_name(),
            ' はレースへ戻りたがっている',
          ]);
          await era.printAndWait('……だが、欲しがって、何ができるというのか');
          await era.printAndWait([
            'その可能性を追う道は、数ヶ月前、',
            you.get_colored_name(),
            ' 自身が封じた',
          ]);
          await era.printAndWait([
            '今の ',
            you.get_colored_name(),
            ' と',
            tachyon.sex,
            'は、自壊へ向かって走り続けているだけだ',
          ]);
          era.println();
          await era.printAndWait('だから祈るしかない');
          await era.printAndWait('せめて、この最期の時間だけは');
          await era.printAndWait([
            '残された時間を、',
            tachyon.sex,
            'が思う存分味わえますように',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'フフ、あなたの期待に応えるためにも、すぐにトレーニングを始めませんと',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は楽しげにトレーニング場へ向かった',
          ]);
          era.printButton('……トレーニングには気をつけろ', 1);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            tachyon.sex,
            'に告げた。祈ったのは ',
            coffee.get_colored_name(),
            ' のトレーニングが無事であることだと',
          ]);
          era.println();
          await tachyon.say_and_wait('……ええ');
          await tachyon.say_and_wait([
            '当然ですわ……私たちのすべては、',
            call_25,
            ' がさらに先へ、限界を超えるためですもの',
          ]);
          await tachyon.say_and_wait([
            tachyon.sex,
            'のトレーニングに問題が出れば……すべてが無駄になりますわ',
          ]);
          await tachyon.say_and_wait(
            'だからこそ、これが最優先……優先順位を忘れないあなたは、頼もしいですわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は口では ',
            coffee.get_colored_name(),
            ' のためだと繰り返す',
          ]);
          await era.printAndWait([
            'それでも ',
            you.get_colored_name(),
            ' は見逃さなかった……',
            coffee.get_colored_name(),
            ' の名が出たとき、',
            tachyon.sex,
            'の目に宿った寂しさを',
          ]);
          await era.printAndWait([
            'やはり、',
            coffee.get_colored_name(),
            ' の話は出すべきではなかった',
          ]);
          await era.printAndWait([
            'いま ',
            tachyon.get_colored_name(),
            ' のトレーナーである自分は、',
            tachyon.sex,
            'のために考えるべきなのだろう',
          ]);
          await era.printAndWait([
            'だが……',
            tachyon.sex,
            'を案じる資格は、数ヶ月前に自分で捨てた',
          ]);
          await era.printAndWait([
            '今の ',
            you.get_colored_name(),
            ' と',
            tachyon.sex,
            'は、自壊へ向かって走り続けているだけだ',
          ]);
          era.println();
          await era.printAndWait('だから祈るしかない');
          await era.printAndWait('外の条件が、すべて守られるように');
          await era.printAndWait([
            tachyon.sex,
            'を満たし、',
            tachyon.get_colored_name(),
            ' の「遺志」を叶えるために',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'フフ、あなたの期待に応えるためにも、私は負けられませんわ。',
            call_25,
            ' と同じ舞台に立てるところまで、戻らねば',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は淡く言い終え、実験室へ向かった',
          ]);
          era.printButton('「……実験には気をつけろ」', 1);
      }
      await era.input();
      await era.printAndWait([tachyon.sex, 'は手を振って、わかったと示した']);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_14
  ws_b_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '몸 상태가 아직 완전히 회복되지 않았기에 ',
        tachyon.get_colored_name(),
        '은(는) 팬 감사제 기획과 취재 요청을 거절했다.',
      ]);
      await era.printAndWait([
        '그 때문에 주변에는 『',
        tachyon.get_colored_name(),
        '의 복귀』를 둘러싼 불안과 의심이 퍼져 나갔다.',
      ]);
      await era.printAndWait([
        '하지만 그것은 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '에게는 상관없는 일이었다. 의혹이라……',
      ]);
      await era.printAndWait(
        '아니, 두 사람의 계획대로 진행된다면 의심이 많을수록 오히려 계획에 유리할 터였다.',
      );
      await era.printAndWait([
        '……그렇기에 ',
        tachyon.get_colored_name(),
        '에 대한 비난을 들으면서도 ',
        you.get_colored_name(),
        '은(는) 이를 악물고 그 자리를 떠날 수밖에 없었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_95_31
  ws_b_95_31: (() => {
    const title = '再び輝く光子';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色名）
     * @param {PrintedSpan} takz_kin 宝塚記念（着色名）
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      love,
      tenn_spr,
      takz_kin,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は一人、砂浜を走っている',
      ]);
      await era.printAndWait('一年前の今と、どこか似た光景');
      await era.printAndWait([
        'そこまで考えて、',
        tachyon.get_colored_name(),
        ' は突然足を止めた',
      ]);
      era.println();
      await era.printAndWait('今この瞬間は、あのときの瞬間と同じだ');
      era.println();
      await tachyon.say_and_wait('……来ましたわね');

      era.printButton('「来た」', 1);
      await era.input();
      await tachyon.say_and_wait('来るべきではありませんでしたわ');

      era.printButton('「それでも来た」', 1);
      era.println();
      await era.printAndWait([
        '約束などしていなかったのに、',
        you.get_colored_name(),
        ' は一年後のこの日、またこの砂浜へ来た',
      ]);
      era.println();
      await tachyon.say_and_wait('……いいですわ、ふざけないで。本題です');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の掛け合いに付き合いたくない ',
        tachyon.get_colored_name(),
        ' はすぐ本題へ入ろうとして、言葉を遮られた',
      ]);
      era.printButton('「それより」', 1);
      era.printButton('「先に一走、見せてくれないか？」', 2);
      await era.input();
      era.drawLine();
      await era.printAndWait('去年の今と比べれば');
      await era.printAndWait([
        'トレーニングを再開した ',
        tachyon.get_colored_name(),
        ' の走りは、当然、昨日の比ではない',
      ]);
      await era.printAndWait('だが、差は鍛錬の量だけではない');
      era.println();
      await era.printAndWait(
        '去年も、久しく鍛えていない形にならない走りなのに、人を惹きつける光を放っていた',
      );
      await era.printAndWait([
        '今の ',
        tachyon.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' が見た中でいちばん眩い光を放っている',
      ]);
      await era.printAndWait(['明るすぎて、錯覚すら起きる']);
      await era.printAndWait('———今ここで消えても、一片の悔いもないほどに');
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、',
        prix_lat,
        ' が終わったら、私はトゥインクル・シリーズから退きますわ',
      ]);
      era.println();
      await era.printAndWait(
        '休止ではない。引退だ。言い換えれば、現役を終える',
      );
      await era.printAndWait('一度退けば、挽回の機会はない');
      era.println();
      await tachyon.say_and_wait(
        '私の脚は……半年、無理を通して、もう十分ですわ',
      );
      await tachyon.say_and_wait([
        '天皇賞（春）、それから宝塚記念……そして最後の凱旋門賞',
      ]);
      await tachyon.say_and_wait([
        '……だから最後に聞きたいのです。',
        callname,
        '……後悔は、ありませんの？',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の言葉で、',
        you.get_colored_name(),
        ' は振り返り始める',
      ]);
      await era.printAndWait('後悔。何を？');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' に ',
        takz_kin,
        ' で全力を出させたこと？',
      ]);
      await era.printAndWait([
        tenn_spr,
        ' の前夜、',
        tachyon.get_colored_name(),
        ' を止めなかったこと？',
      ]);
      await era.printAndWait('Plan B を選んだこと？');
      await era.printAndWait([
        'それとも……',
        tachyon.get_colored_name(),
        ' を募集したこと？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が問いを口にすると、',
        tachyon.get_colored_name(),
        ' は少し黙った',
      ]);
      await era.printAndWait('それから、答える');
      era.println();
      await tachyon.say_and_wait('……全部ですわ');
      await tachyon.say_and_wait([
        '後悔しませんの？ こんなに扱いにくく、前言を翻し、二心ある',
        tachyon.uma_sex_title,
        'を担当にしたことを',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait([
          '最初から ',
          call_25,
          ' だけ担当していればよかった、とか？',
        ]);
        era.println();
        await era.printAndWait(
          '問いのように聞こえるが、感触は嫉妬の駄々に近い',
        );
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'にそう言われ、',
        you.get_colored_name(),
        ' は真剣に思い返した',
      ]);
      await era.printAndWait([
        '宝塚記念を思い出すと、頭にあるのは ',
        tachyon.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' の頂点での対決だけだ',
      ]);
      await era.printAndWait([
        '天皇賞（春）を思い出すと、浮かぶのは ',
        coffee.get_colored_name(),
        ' の不気味な走りと……',
        tachyon.get_colored_name(),
        ' が再び咲いた閃光だけだ',
      ]);
      await era.printAndWait([
        'Plan B を選んだ日を思い出す……',
        tachyon.get_colored_name(),
        ' に無事でいてほしいと、本気で願った気持ち',
      ]);
      await era.printAndWait([
        '最後に思い出すのは、トレーニング場で',
        tachyon.sex,
        'の走りに両目を灼かれ、永遠に癒えない傷を残されたあの日',
      ]);
      era.printButton('「後悔していない」', 1);
      era.printButton(
        '「後悔している。タキオンともっと早く会えなかったことを」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait('……ふんふん、そうですか');
      await tachyon.say_and_wait('では、このまま着いてきなさい……');
      await tachyon.say_and_wait([
        '一緒に世界の頂点へ登り、それから研究の成果をお見せしますわ———いちばん満足できる、',
        tachyon.get_colored_name(),
        ' の走りを！',
      ]);
      await era.printAndWait(
        '今まででいちばん満足でき、いちばん眩い走りを出す',
      );
      await era.printAndWait(
        'ずっと見てきた、傍にいる最大のファンを満足させる一戦',
      );
      await era.printAndWait('気づくと、唇が乾いている');
      await era.printAndWait('もっと凄いレースを、もっと眩い姿を期待している');
      await era.printAndWait([
        'アイドルである',
        tachyon.sex,
        'がそこまで口にした以上、その走りに魅了されたモルモットに、頷く以外の言葉があるだろうか',
      ]);
      era.printButton('「行け、タキオン」', 1);
      await era.input();
      await era.printAndWait('過去は後悔しない。今も、この先も');
      await era.printAndWait(['二人はフランスへ踏み出した———凱旋門賞へ']);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_95_35
  ws_b_95_35: (() => {
    const title = 'フランス（？）';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     */
    const f = async (tachyon, coffee, you, call_25) => {
      await tachyon.say_and_wait('ここ……がフランスですの');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は窓の外を見る。空と一つになった夜景',
      ]);
      await tachyon.print_and_wait('ここが、フランス……');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' が想い続けた場所',
      ]);
      await tachyon.print_and_wait([
        '無数の日本',
        tachyon.uma_sex_title,
        'が折れた場所',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' が、最後に頂点へ踏み入れる場所',
      ]);
      era.println();
      await tachyon.print_and_wait('ところが……');
      await tachyon.print_and_wait('星を仰ぐ者は、足元の窪みを忘れる');
      await tachyon.print_and_wait('高望みとは、先人の知恵が凝った言葉ですわ');
      era.drawLine();
      era.printButton('「……違う。ここはドバイだ」', 1);
      await era.input();
      await tachyon.say_and_wait('…………え？');
      await era.printAndWait([
        '明らかに頭の中が凱旋門賞で埋まっている ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が一週間前に、途中でドバイ乗継だと話したのを、聞いていない',
      ]);
      era.printButton(
        '「ただ、ドバイのレースも世界的に有名だ。機会があれば……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        'そこまで言って、',
        you.get_colored_name(),
        ' は急に黙った',
      ]);
      await era.printAndWait('ドバイのレースは、たしかに世界的に有名だ');
      await era.printAndWait(
        '有名な理由は主に賞金。世界でいちばん「金」を含むレースに間違いない',
      );
      await era.printAndWait('だが……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' には、もう「機会」がない',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'む、機会があればドバイのレースも見ておきましょう。あとで……',
        call_25,
        ' のトレーニング計画に入れてみます？',
      ]);
      era.println();
      await era.printAndWait([
        'ところが',
        tachyon.sex,
        'は、まったく気づいていないらしい',
      ]);
      await era.printAndWait('軽く、避けていた話題を自ら出した');

      era.printButton(
        '「……戻ったら、タキオンはカフェのトレーニング計画も続けるのか？」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('当たり前ですわ……');
      await tachyon.say_and_wait([
        'この凱旋門賞は、私個人の我儘にすぎません。本当の可能性も、本当の希望も、まだ ',
        call_25,
        ' にあります',
      ]);
      await tachyon.say_and_wait([
        'そういえば、',
        call_25,
        ' はどうしますの？',
      ]);
      era.printButton(
        '「心配するな。カフェとはタブレットで連絡する。毎月、日本の用事で戻る」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……毎月？');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は少し驚いて ',
        you.get_colored_name(),
        ' を見た',
      ]);
      await era.printAndWait([you.get_colored_name(), ' は頷いて応えた']);
      await era.printAndWait('ああ、金の心配か？');
      era.printButton(
        '「出張扱いだから、航空券は学園持ちだ。そこは心配するな」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait('……ごめんなさい');
      era.printButton('「気にするな」', 1);
      era.printButton('「俺がそうしたいんだ」', 2);
      await era.input();
      await era.printAndWait('これは本音であり、嘘でもある');
      await era.printAndWait('……本当は、海外も国内も、選べた');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の遠征だけに付き切ることも、日本に残って ',
        coffee.get_colored_name(),
        ' に付き合うこともできた',
      ]);
      await era.printAndWait(
        'トレセン学園が人手不足でも、トレーナーをここまで分身させるほどではない',
      );
      await era.printAndWait('だが……');
      era.printButton('「俺が、放っておけない」', 1);
      era.printButton('「タキオンもカフェも、同じだ」', 2);
      await era.input();
      await era.printAndWait([
        '友達の背を追う',
        tachyon.teen_sex_title,
        'を、一人にはできない',
      ]);
      await era.printAndWait([
        '異郷で絶路へ走る',
        tachyon.teen_sex_title,
        'を、一人にはできない',
      ]);
      await era.printAndWait(
        'だから、自分を曲げる、優柔不断な選び方しかできない',
      );
      era.println();
      await tachyon.say_and_wait('……お人好しですわね');
      era.printButton('「悪いことばかりでもない」', 1);
      era.printButton('「こうすれば、お前とカフェの走りを同時に見られる」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'そんなことで十数時間の飛行機を往復するなんて、気が触れてますわ',
      );
      era.println();
      await you.say_and_wait('褒め言葉として受け取っておく');
      await era.printAndWait([
        you.get_colored_name(),
        ' は笑って、',
        tachyon.get_colored_name(),
        ' の嘆きに応えた',
      ]);
      await era.printAndWait(
        'さっき空気を壊した分の、埋め合わせだと思っておこう',
      );
      era.println();
      await tachyon.say_and_wait(
        '……では、私の走りを、最後まで見ていてくださいまし',
      );
      era.println();
      await era.printAndWait('世界という名の舞台で');
      await era.printAndWait([
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' へ手を伸ばした',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' を、',
        tachyon.get_colored_name(),
        ' の最後の一舞へ招いている',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_37
  ws_b_95_37: (() => {
    const title = '한계의 기준';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
    ) => {
      await era.printAndWait('개선문상 전날');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 묵고 있는 호텔에 초대받지 않은 손님이 찾아왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……', call_25, '? 어째서……']);
      await coffee.say_and_wait(['…………', c_call_t]);
      era.println();
      await era.printAndWait([
        '일본에 남아 있어야 할 ',
        coffee.get_colored_name(),
      ]);
      await era.printAndWait(['개선문상 전날, 프랑스에 도착한 것이다.']);
      era.println();
      await coffee.say_and_wait(['……', callname_25, '에게 데려다 달라고 부탁했어.']);
      await coffee.say_and_wait([callname_25, '이(가) 말해 줬어……']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 조용히 침대 가장자리에 앉아 입을 열지 않았다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '이(가) 말을 마치기를 기다리고 있었다.',
      ]);
      era.println();
      await coffee.say_and_wait(['말할게.', c_call_t, ', 자네 다리……']);
      await tachyon.say_and_wait(
        '……그래, 이미 한계에 도달했네. 그렇지 않더라도 내일 레이스에서는 모든 것을 쏟아부을 생각일세…… 한 치도 남기지 않겠네.',
      );
      await coffee.say_and_wait('……왜?');
      era.println();
      await era.printAndWait([
        '왠지 당사자인 ',
        tachyon.get_colored_name(),
        '보다 ',
        coffee.get_colored_name(),
        '쪽이 더 초조해 보였다.',
      ]);
      await coffee.say_and_wait([
        '……또 다카라즈카 기념 때처럼 나를 위해, 나와 친구들을 위해 출전하려는 거라면……',
      ]);
      await coffee.say_and_wait('절대로 인정할 수 없어. 여기서—— 출전을 막아서라도.');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 두 눈이 갑자기 커졌다.',
      ]);
      await era.printAndWait([
        '순간 보이지 않는 거대한 손이 ',
        tachyon.get_colored_name(),
        '의 움직임을 막은 듯했다.',
      ]);
      await era.printAndWait([tachyon.sex, '는 그 자리에서 몸이 묶인 듯 움직일 수 없었다.']);
      await era.printAndWait([
        '그런데도 ',
        tachyon.sex,
        '의 눈빛은 여전히 평온했다.',
      ]);
      await era.printAndWait('그러고는……');
      era.println();
      await tachyon.say_and_wait('………후후.');
      await coffee.say_and_wait([c_call_t, '……？']);
      await tachyon.say_and_wait('후후후…… 하하하!');
      era.println();
      await era.printAndWait([
        '정신이 나간 듯한 상황인데도 ',
        tachyon.get_colored_name(),
        '은(는) 시원스럽게 소리 내어 웃었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '있지, ',
        call_25,
        '……자네, 조금 자의식이 과한 것 아닌가?',
      ]);
      await coffee.say_and_wait('！？');
      await tachyon.say_and_wait(
        '자네를 위해 달린다고? ……지나친 생각일세.',
      );
      await tachyon.say_and_wait([
        '내 목적은 처음부터 끝까지 단 하나.',
        tachyon.uma_sex_title,
        '의 한계를 뛰어넘는 것……',
        tachyon.uma_sex_title,
        '의 가능성을 증명하는 것.',
      ]);
      era.println();
      await era.printAndWait([
        '어느새 ',
        tachyon.get_colored_name(),
        '을(를) 옭아매던 힘은 풀려 있었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 여유롭게 일어서서 있지도 않은 먼지를 털었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……그 목적을 위해서라면 무엇을 희생해도 상관없네. 나 자신조차도.',
      );
      await tachyon.say_and_wait([
        '오히려 자네는 ',
        call_25,
        '……그런 각오가 있나? 지금 자네가 나를 넘어설 수 있겠나?',
      ]);
      await coffee.say_and_wait('…………！');
      await tachyon.say_and_wait(
        '……나머지 이야기는 레이스가 끝난 뒤에 하겠네. 그때 전부 말해 주지.',
      );
      era.println();
      await era.printAndWait([
        '대답을 기다리지 않고 ',
        tachyon.get_colored_name(),
        '은(는) 방을 나갔다.',
      ]);
      await era.printAndWait([
        '맞은편에는 두 사람의 대화가 끝나기를 방 밖에서 기다리던 ',
        you.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 자네 방으로 가겠네.',
      ]);
      era.println();
      await era.printAndWait('……뭐?');
      era.println();
      await tachyon.say_and_wait('뭔가?');
      era.printButton('「이성의 방에 들어가는 건 아무래도 좀 곤란하지 않나……」', 1);
      era.printButton('「타키온, 나를 유혹하는 거야?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '멍청이! ……그렇게 폼 잡는 대사를 해 놓고 곧장 자기 방으로 돌아가면 모양이 빠지지 않나. 그러니까 자네 방에서 기다리게 해 주게.',
      );
      await tachyon.say_and_wait(
        '그나저나…… 자네 방에 실험 도구는 있겠지?',
      );
      await tachyon.say_and_wait([
        '방금 ',
        call_25,
        '의 그 표정을 보니 왠지 또 영감이 떠올랐네……',
      ]);
      await tachyon.say_and_wait(
        '내일은 레이스에 출전하니 오늘 이상한 걸 먹을 수는 없네. 대신 자네가 먹어 주겠지~~?',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 과장스러운 모습을 보며 ',
        you.get_colored_name(),
        '은(는) 저도 모르게 웃었다.',
      ]);
      await era.printAndWait(
        '내일 결과가 어떻게 되든 적어도 오늘만큼은 이 시간을 즐기자.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_b_95_39
  ws_b_95_39: (() => {
    const title = '한계를 넘어서……?';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} prix_lat 凱旋門賞（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      prix_lat,
    ) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 은퇴한 뒤로 연구실에서는 언제나 ',
        tachyon.sex,
        '의 밝은 목소리가 들려왔다.',
      ]);
      await tachyon.say_and_wait([
        '하하하!',
        call_25,
        '！',
        call_25,
        '! 어서 내 신약을 시험해 보게!',
      ]);
      await coffee.say_and_wait('……시끄러워.');
      era.println();
      await era.printAndWait([
        '은퇴와 동시에 모든 부담을 내려놓은 듯한 ',
        tachyon.sex,
        '은(는) 온 힘을 신약 개발에 쏟고 있었다.',
      ]);
      await era.printAndWait([
        '첫 번째 피해자는 당연히 ',
        tachyon.sex,
        '와 가장 가까운 ',
        you.get_colored_name(),
        '와 ',
        coffee.get_colored_name(),
        '였다.',
      ]);
      await era.printAndWait([
        '은퇴한 뒤 ',
        tachyon.sex,
        '이(가) 다시 일어서지 못할까 봐 걱정하던 ',
        you.get_colored_name(),
        '도 조금은 마음을 놓았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! 자네도 빠져나갈 수는 없네! 자네 몫은 여기 있네!',
      ]);
      era.printButton('말없이 약을 받아 마신다', 1);
      era.printButton('「타키온이 기뻐한다면 뭐든 마실게!」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait('이런, 오늘따라 상당히 적극적이군?');
        await coffee.say_and_wait([
          '……또 ',
          callname_25,
          '에게 뭘 먹인 거야. 솔직하게 말해.',
        ]);
        await tachyon.say_and_wait(
          '음…… 어제 약은 영양 흡수 효율을 높이는 것이었고 푸른빛이 났지. 오늘은……',
        );
        await coffee.say_and_wait([
          '거짓말…… 분명 무슨 사랑의 묘약일 거야. 그렇지 않고서야 ',
          callname_25,
          '이(가) 그런 수상한 걸 순순히 마실 리 없잖아.',
        ]);
        await tachyon.say_and_wait('말이 너무 심하군!');
      } else {
        if (love >= 75) {
          await tachyon.say_and_wait('뭐…… 바보…… 갑자기 왜 그런 달콤한 말을……');
        } else if (relation <= 225) {
          await tachyon.say_and_wait(
            '……아니, 갑자기 왜 그런 낯간지러운 소리를 하는 건가……',
          );
        } else if (relation >= 225) {
          await tachyon.say_and_wait(
            '에…… 아니, 갑자기 왜 그런 달콤한 말을……',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 어이없다는 표정으로 ',
            you.get_colored_name(),
            '을(를) 바라보았다.',
          ]);
          await era.printAndWait('너무하잖아.');
        }
        era.println();
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            c_call_t,
            '？',
            callname_25,
            '? 두 사람 관계를 좀 설명해 줄래? ……지금 나는 그다지 침착하지 못할지도 몰라.',
          ]);
        } else {
          await coffee.say_and_wait('……그런 애정 행각은 여기서 하지 마.');
        }
      }
      era.drawLine();
      await coffee.say_and_wait(['……아, 맞다. ', callname_25, ', 이제 슬슬……']);
      era.println();
      await era.printAndWait([
        '소란이 가라앉고 나니 ',
        coffee.get_colored_name(),
        '의 훈련 시간이 되었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 끄덕이고 ',
        coffee.get_colored_name(),
        '와 훈련장으로 향하려 했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오호? 또 훈련인가? 요즘 ',
        call_25,
        '는 상당히 성실해 보이는군.',
      ]);
      await coffee.say_and_wait([
        '……난 언제나 성실하게 훈련해.',
        c_call_t,
        '와 같은 취급하지 마.',
      ]);
      await coffee.say_and_wait('게다가 연말이 가까워지고 있어…… 반드시 친구를 뛰어넘을 거야.');
      await coffee.say_and_wait('그것 말고도……');
      await coffee.say_and_wait('누군가의 도전도……');
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '은(는) 가만히 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        prix_lat,
        '에서 ',
        tachyon.get_colored_name(),
        '이(가) 했던 말을 떠올렸다.',
      ]);
      await coffee.say_and_wait(['난 반드시 ', c_call_t, '를 뛰어넘겠어.']);
      await tachyon.say_and_wait('……흠흠, 할 수 있다면 한번 해 보게.');
      await tachyon.say_and_wait(['한계를 뛰어넘게!', call_25, '！']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 눈동자에는 지금도 광기에 가까운 열정이 깃들어 있었다.',
      ]);
      await era.printAndWait([
        '다만……',
        you.get_colored_name(),
        '의 착각일지도 모르지만, 그 빛이 조금 흔들리는 듯했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_95_47
  ws_b_95_47: (() => {
    const title = '超えられた限界';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, coffee, you, callname, call_25, love) => {
      await tachyon.print_and_wait([
        '夢の中の ',
        tachyon.get_colored_name(),
        ' は、またあの日へ戻った',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '会場の歓声も、',
        you.sex,
        'の視線も、ゴールを越え、淡く手を振るその',
        tachyon.uma_sex_title,
        'に集まっている',
      ]);
      await tachyon.print_and_wait([
        '当然ですわ。今日の主役は ',
        coffee.get_colored_name(),
        ' なのですから',
      ]);
      await tachyon.print_and_wait([
        '主役は自分ではない。周囲が',
        tachyon.sex,
        'を見るのも道理です',
      ]);
      await tachyon.print_and_wait('ですが……');
      await tachyon.print_and_wait('なぜ');
      era.println();
      await tachyon.say_and_wait('ずっと私を見ると、約束したはずですわ', true);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、もう走れません',
      ]);
      await tachyon.print_and_wait([
        'だから視線を ',
        coffee.get_colored_name(),
        ' へ移すのですか',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '周囲の観客にも、「',
        tachyon.get_colored_name(),
        ' より ',
        coffee.get_colored_name(),
        ' のほうが強い」と叫ぶ者がいる',
      ]);
      await tachyon.print_and_wait([
        'ですが、そうした上げ下ろしの言葉より、',
        you.sex,
        'の目のほうが自分を傷つける',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'かつては自分を見るときにしか浮かばなかったあの目が、いま',
        you.sex,
        'が ',
        call_25,
        ' を見る瞳にある',
      ]);
      await tachyon.say_and_wait('あの目は、私専属ではなかったのですの？');
      await tachyon.say_and_wait('私が灼いた両目は、もう癒えたのですの？');
      await tachyon.say_and_wait('私を、一人に残すのですの？');
      era.println();
      await tachyon.print_and_wait([
        '夢の中の',
        you.sex,
        'は、',
        call_25,
        ' と遠ざかっていく',
      ]);
      await tachyon.print_and_wait('自分を漆黒の空間へ置き去りにして');
      era.println();
      await tachyon.say_and_wait('いや……待って、待ってくださいまし……');
      era.println();
      await tachyon.print_and_wait('追い付きたい');
      await tachyon.print_and_wait('ですが……両脚が言うことを聞かない');
      await tachyon.print_and_wait('頭を下げて気づく……ああ');
      await tachyon.print_and_wait(
        '砕けた両脚で、走っている者に追い付けるはずがありません',
      );
      era.println();
      await tachyon.print_and_wait('自分の声が届いたのか、その背が振り返る');
      await tachyon.print_and_wait('目の光は、もうない');
      await tachyon.print_and_wait(
        'いいえ、消えたのではありません————別の誰かへ移ったのです',
      );
      era.println();
      await tachyon.print_and_wait('いや');
      await tachyon.print_and_wait('私を見て');
      await tachyon.print_and_wait('以前のように、私を見て');
      await tachyon.print_and_wait('置いていかないで、一人にしないで');
      era.println();
      await tachyon.print_and_wait('ですが');
      await tachyon.print_and_wait([
        '走れない ',
        tachyon.get_colored_name(),
        ' に、相手を留める資格などありますの',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は夢から覚めた',
      ]);
      await tachyon.print_and_wait('何を見たのか、もうよく覚えていません');
      await tachyon.print_and_wait([
        '……ですが体の不調からして、八割はジャパンカップのときのことでしょう',
      ]);
      await tachyon.print_and_wait([call_25, ' は、すでに限界を超えた']);
      await tachyon.print_and_wait([tachyon.get_colored_name(), ' を超えた']);
      await tachyon.print_and_wait([
        'だから……',
        you.sex,
        'が ',
        call_25,
        ' に魅了されても、当然ですわね',
      ]);
      await tachyon.print_and_wait([
        'なにしろ、',
        tachyon.get_colored_name(),
        ' を超えた走りなのですから',
      ]);
      era.println();
      await tachyon.say_and_wait('……いや');
      if (love <= 50) {
        await tachyon.print_and_wait('今さら気づくのは、遅すぎますかしら');
        await tachyon.print_and_wait(
          'これほど長く傍にいても、ずっと当然だと思っていた',
        );
        await tachyon.print_and_wait([
          '失いかけて初めて、自分が',
          you.sex,
          'から離れられないと気づいた',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        'なら、これまでどおり自分の世話をしてくれるでしょう',
      ]);
      await tachyon.print_and_wait([
        'これまでどおり、',
        tachyon.get_colored_name(),
        ' の求めにも応えてくれる',
      ]);
      await tachyon.print_and_wait([you.sex, 'は、それほど優しい人ですから']);
      await tachyon.print_and_wait([
        '……ですが、それだけでは ',
        tachyon.get_colored_name(),
        ' は足りません',
      ]);
      await tachyon.print_and_wait([you.sex, 'の光が、自分を温めた']);
      await tachyon.print_and_wait('希望を、レースへの渇望を生んだ');
      await tachyon.print_and_wait(
        'だからどうか……自分の光を、奪わないでくださいまし',
      );
      era.println();
      await tachyon.print_and_wait(
        'Jingle bell Jingle bell Jingle all the way～～',
      );
      era.println();
      await tachyon.print_and_wait('突然、窓の外でクリスマスソングが聞こえた');
      await tachyon.print_and_wait([
        '聖夜が近づくのに、',
        tachyon.get_colored_name(),
        ' の胸はまだ闇のままだ',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_95_48
  ws_b_95_48: (() => {
    const title = '聖夜の約束';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} vega アドマイヤベガ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {boolean} tachyon_win_prix_lat アグネスタキオンがシニア級凱旋門賞を勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      vega,
      you,
      callname,
      call_25,
      callname_25,
      tachyon_win_prix_lat,
    ) => {
      let ret = 0;
      await era.printAndWait([
        '最近の ',
        tachyon.get_colored_name(),
        ' は、様子がおかしい',
      ]);
      await era.printAndWait([
        '一人で塞ぎ込み、',
        coffee.get_colored_name(),
        ' のトレーニングにも付いてこない。実験すら、ほとんどしなくなった',
      ]);
      await era.printAndWait([
        '実験の最大の被害者である ',
        you.get_colored_name(),
        ' と ',
        coffee.get_colored_name(),
        ' にとっては、悪いことばかりでもない。だが、心配ではある',
      ]);
      await era.printAndWait([
        '突然、商店街のクリスマスソングが ',
        you.get_colored_name(),
        ' の耳に入った',
      ]);
      await era.printAndWait([
        'そうだ。クリスマスを口実に、',
        tachyon.sex,
        'を連れ出して話そう',
      ]);
      era.drawLine();
      await era.printAndWait('聖夜の商店街は、普段より灯が明るく、熱気も高い');
      await era.printAndWait('理由はクリスマスだけではない。それ以上に……');
      await you.say_as_passer_by_and_wait('商店街のおじさん', [
        '有馬記念予想！ 明日の有馬記念、レース前予想！',
      ]);
      await you.say_as_passer_by_and_wait('観光客A', [
        '明日の有馬記念、どうなるかな……まあ、勝つのは ',
        coffee.get_colored_name(),
        ' だろうな',
      ]);
      await you.say_as_passer_by_and_wait('観光客B', [
        'ジャパンカップの走りは本当に強かった！……史上最強と言ってもいいんじゃないか',
      ]);
      era.println();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait('黙り続けるわけにもいかない。ここでは何か言おう');
      era.printButton('「明日は有馬記念だ。カフェは大丈夫だ」', 1);
      era.printButton('「向こうのハチミツ特飲、クリスマス特売みたいだ」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait([tachyon.sex, 'は、やはり何も言わない']);
        await era.printAndWait([
          '空気が重い。',
          you.get_colored_name(),
          ' は仕方なく、',
          coffee.get_colored_name(),
          ' の最近のトレーニングの話を続ける',
        ]);
      } else {
        await tachyon.say_and_wait('……では、一杯いただきましょう');
        era.println();
        await era.printAndWait([
          'いちばん甘いハチミツを飲んだあと、',
          tachyon.get_colored_name(),
          ' の機嫌は少し緩んだ',
        ]);
        await era.printAndWait([
          'ついでに、',
          you.get_colored_name(),
          ' も合わせたいちばん甘いのを頼んだが……',
        ]);
        await era.printAndWait([
          '一口吸っただけで、',
          you.get_colored_name(),
          ' は歯が痛くなった',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が嬉しそうにハチミツを飲むのを見て、',
          you.get_colored_name(),
          ' は機会を見て',
          tachyon.sex,
          'の歯を診せたほうがいいのではないかと考え始める',
        ]);
      }
      era.println();
      await era.printAndWait([
        'ほどなく、商店街の中央のクリスマスツリーの前まで来た',
      ]);
      await era.printAndWait([
        '突然の強風が、周囲の有馬記念の報道を二人の前へ吹き寄せた',
      ]);
      await era.printAndWait([
        '新聞にはジャパンカップのときの ',
        coffee.get_colored_name(),
        '。威風堂々としている',
      ]);
      era.printButton(
        '「ジャパンカップ……あのときのカフェは本当に強かった。場違いかもしれないが、タキオンと……」',
        1,
      );
      era.printButton('「タキオン！ 向こうの綿菓子屋、すごそうだ！」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait([
          'さっき有馬記念を出したとき、',
          tachyon.get_colored_name(),
          ' の機嫌は悪かった',
        ]);
        await era.printAndWait([
          'だから ',
          you.get_colored_name(),
          ' は話題をジャパンカップへ変えた',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の宿願が叶った日なら、',
          tachyon.get_colored_name(),
          ' の気も上がるだろう',
        ]);
        await era.printAndWait('ところが……');
        era.println();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は、やはり何も言わない',
        ]);
        await era.printAndWait('まだ違うのか……');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' はツリー脇の綿菓子屋を見る。職人の手で、ふわふわの動物が次々と形になる',
        ]);
        era.println();
        await tachyon.say_and_wait('……いいえ、私は……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が言い終える前に、店主は大きくてふわふわの綿菓子モルモットを ',
          tachyon.get_colored_name(),
          ' の手へ押し込んだ',
        ]);
        await vega.say_as_unknown_and_wait(
          '機嫌が悪いときは覚えておきなさい。ふわふわだけは、あなたを裏切らない',
        );
        if (era.get('cflag:33:招募状态') === recruit_flags.yes) {
          await era.printAndWait('店主が、なぜか妙に見覚えがある');
          await era.printAndWait('……錯覚、だろう');
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はぼんやりと綿菓子モルモットを受け取り、返さず、多くも言わない',
        ]);
        await era.printAndWait([
          'それから',
          tachyon.sex,
          'は小さく口を開け、一口かじった',
        ]);
        era.println();
        await tachyon.say_and_wait('……ふわふわ、ですわ');
        era.println();
        await era.printAndWait([
          'なぜか、それを聞いた店主は得意げに胸を張った',
        ]);
      }
      era.println();
      await era.printAndWait(['最後に、商店街の端まで歩いた']);
      await era.printAndWait([
        '路傍の書店。店内でいちばん目立つ場所に、期限切れの雑誌が数冊並んでいる',
      ]);
      await era.printAndWait('期限切れ……とも言い切れない');
      await era.printAndWait(
        'レース情報としては古いが、時期としては二ヶ月前の雑誌にすぎない',
      );
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        ' の凱旋門賞後の取材雑誌だ',
      ]);
      await you.say_as_passer_by_and_wait('書店の店主', 'いらっしゃいませ！');
      era.printButton('「これは……」', 1);
      era.printButton('「凱旋門賞の雑誌か？」', 2);
      await era.input();
      await era.printAndWait([
        '店主は、',
        you.get_colored_name(),
        ' の後ろで頭を下げている ',
        tachyon.get_colored_name(),
        ' に気づいていない',
      ]);
      await era.printAndWait('雑誌を見て、自慢げに話し始める');
      await you.say_as_passer_by_and_wait('書店の店主', [
        'おお！ この雑誌はな、わしがわざわざここに置いてるんだ！',
      ]);
      if (tachyon_win_prix_lat) {
        await you.say_as_passer_by_and_wait('書店の店主', [
          'やっとだよ、日本の',
          tachyon.uma_sex_title,
          'が世界の凱旋門を取ったんだ！ 記念に置かねばならん！',
        ]);
      }
      await you.say_as_passer_by_and_wait('書店の店主', [
        '外の連中は何もわかっとらん。',
        tachyon.get_colored_name(),
        ' が一番強い！ 引退してなけりゃ、あの ',
        coffee.get_colored_name(),
        ' なんぞ',
        tachyon.sex,
        'の相手にもならん！',
      ]);
      era.printButton('「そうとも言い切れない……」', 1);
      era.printButton('「もちろん、タキオンが一番強い」', 2);
      if ((await era.input()) === 1) {
        ret++;
        await era.printAndWait(['ジャパンカップ前なら、たしかにそうだ']);
        await era.printAndWait([
          'だがジャパンカップ後の ',
          coffee.get_colored_name(),
          ' は、すでに ',
          tachyon.get_colored_name(),
          ' が認めた完成体だ',
        ]);
        await era.printAndWait([
          'その状態の ',
          coffee.get_colored_name(),
          ' が、もう一度 ',
          tachyon.get_colored_name(),
          ' と走ったら……勝敗はわからない',
        ]);
        await era.printAndWait([
          'そうだ。',
          coffee.get_colored_name(),
          ' が限界を超えても……自分の中では、',
          tachyon.get_colored_name(),
          ' なら',
          tachyon.sex,
          'と渡り合えると信じている',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '自身が言うような足枷では、絶対にない',
        ]);
        await you.say_as_passer_by_and_wait(
          '書店の店主',
          'ちっ、通が来たかと思ったら、何もわかっとらん奴だったか',
        );
        era.println();
        await era.printAndWait([
          '店主にそう言われ、',
          you.get_colored_name(),
          ' は苦笑するしかなかった',
        ]);
        await era.printAndWait([
          'ふと、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' がその雑誌の山へ近づくのを見た',
        ]);
        era.println();
        await tachyon.say_and_wait('……店主、一冊くださいまし');
        await you.say_as_passer_by_and_wait('書店の店主', [
          'おお、',
          tachyon.sex_code === 1 ? '兄ちゃん' : '嬢ちゃん',
          'は目が高いな',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はわざと声を落とし、',
          tachyon.sex,
          '本来の音色がわからないようにしている',
        ]);
        await era.printAndWait(
          'だがこの雑誌……当時サンプルは受け取っていたはずだ。なぜもう一度買う？',
        );
        era.println();
        await tachyon.say_and_wait(
          '……仕方ありませんわ。この雑誌の価値がわからない人がいるので、私自身で大切にするしか',
        );
        era.println();
        await era.printAndWait('え');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' がコッソリ、苛立ち混じりの目を ',
          you.get_colored_name(),
          ' へ向ける',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は思わず考える。また何か間違えたか？',
        ]);
      } else {
        await tachyon.say_and_wait('……！');
        era.println();
        await era.printAndWait('聞くまでもない');
        await era.printAndWait('もし、に意味はないとしても');
        await era.printAndWait([
          'それでももしを考えずにはいられない',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait([
          '無限の可能性と想像を連れてくる',
          tachyon.uma_sex_title,
        ]);
        await era.printAndWait(['それが ', tachyon.get_colored_name()]);
        await you.say_as_passer_by_and_wait('書店の店主', [
          'ほら見ろ！',
          you.sex_code === 1 ? '兄ちゃん' : '嬢ちゃん',
          'が入ってきたときから感じてた。この人は通だ！',
        ]);
        await you.say_as_passer_by_and_wait('書店の店主', [
          'だから言ったろ、',
          tachyon.get_colored_name(),
          ' が一番強い！ あの ',
          coffee.get_colored_name(),
          ' なんぞ相手にもならん！',
        ]);
        await you.say_as_passer_by_and_wait('書店の店主', [
          '実はな、わしは去年の皐月賞から ',
          tachyon.get_colored_name(),
          ' を見てるんだ！ あの走り……',
          tachyon.uma_sex_title,
          'の限界と言っても、誇張じゃないぜ！',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' と店主は、興に乗って ',
          tachyon.get_colored_name(),
          ' のレースを語る',
        ]);
        await era.printAndWait([
          '後ろの ',
          tachyon.get_colored_name(),
          ' が耐えきれなくなり、',
          you.get_colored_name(),
          ' の手を引いて店の外へ出ようとするまで',
        ]);
        await era.printAndWait([
          'なぜか',
          tachyon.sex,
          'の顔は少し赤い……照明の錯覚だろう',
        ]);
      }
      era.println();
      if (ret >= 2) {
        await era.printAndWait(['いつの間にか、堤防のそばまで歩いていた']);
        await era.printAndWait(
          '暗く静かな川岸は、遠く商店街の灯とクリスマスソングと対照をなしている',
        );
        era.println();
        await tachyon.say_and_wait('……雪ですわ');
        era.println();
        await era.printAndWait('たしかに、周囲に綿のような雪が舞い始めた');
        await era.printAndWait(
          '……こんな夜更けに、雪の中でこんな場所へ来るのは、やはり危ないだろう',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が沈んでいる理由は聞けなかったが、今日はもう遅すぎる',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が、今日はここまでにしようと切り出そうとしたとき……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………ふっ');
        era.println();
        await era.printAndWait([
          '突然、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' に抱きつかれた',
        ]);
        await era.printAndWait('まったく予兆のない、唐突な抱擁');
        era.printButton('「タキオン……？」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は何か言おうとしたが、腕の中で微かに震える体、',
          you.get_colored_name(),
          ' の肩に預けられた頭、そして理由のわからない肩の湿りに、今は口を開くべきではないと悟る',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'ごめんなさい……でも……少しだけ、少しだけでいいのです……',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は呆然と、',
          tachyon.get_colored_name(),
          ' が自分の腕の中で泣くのを許した',
        ]);
        await era.printAndWait('胸の中は疑問ばかりだ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' に、いったい何があったのか',
        ]);
        era.drawLine();
        await tachyon.print_and_wait('実は、もう察していた');
        await tachyon.print_and_wait(
          '今日連れ出したのは、自分の推測をもう一度確かめるためでしかない',
        );
        await tachyon.print_and_wait(
          'だが実際に耳にすれば、胸が刺されるのを止められなかった',
        );
        era.println();
        await tachyon.print_and_wait('先ほどの世間話からも、もうわかっていた');
        await tachyon.print_and_wait([
          you.sex,
          'の話題は三言となく ',
          call_25,
          ' に戻り、目にも',
          tachyon.sex,
          'への期待が満ちている',
        ]);
        await tachyon.print_and_wait([
          'かつての、何事も ',
          tachyon.get_colored_name(),
          ' を優先していた ',
          callname,
          ' は、もういない',
        ]);
        await tachyon.print_and_wait([
          '今の',
          you.sex,
          'は、',
          call_25,
          ' の「',
          callname_25,
          '」だ',
        ]);
        await tachyon.print_and_wait('情でも理でも、それが最も正しい選択だ');
        await tachyon.print_and_wait(
          '自分は走りで惑わして、便利な道具として扱った卑しい魔女にすぎない',
        );
        await tachyon.print_and_wait([
          'さまざまな障害を越え、ついには限界を超えた',
          coffee.uma_sex_title,
        ]);
        await tachyon.print_and_wait([
          '自らの走りで、魔女が',
          you.sex,
          'にかけた呪いを解き、最後は二人が幸せに暮らす',
        ]);
        await tachyon.print_and_wait('それがきっと、物語として最良の結末だ');
        era.println();
        await tachyon.print_and_wait('だから……');
        era.println();
        await tachyon.say_and_wait(
          '最後に一度……私を、最後に一度だけ愛してくださいまし',
        );
        await tachyon.say_and_wait([
          '一度だけでいい……そのあとは、あなたと ',
          call_25,
          ' にはもう干渉しませんわ',
        ]);
        era.println();
        await tachyon.print_and_wait(
          'さまざまな口実を並べて、一夜の歓びだけを乞う',
        );
        await tachyon.print_and_wait(
          '哀れなことに、最後まで自分はこうした口実しか使えない',
        );
        await tachyon.print_and_wait([
          '脅しのような口調で、',
          you.sex,
          'に最後の慈悲を願う',
        ]);
        await tachyon.print_and_wait('一度だけでいい');
        await tachyon.print_and_wait([
          'そうすれば自分は諦め、心から ',
          you.couple_title,
          ' を祝福できる',
        ]);
        await tachyon.print_and_wait(
          '頭の中の「本当に諦められると思っているの」という囁きを無視し',
        );
        await tachyon.print_and_wait('そんな言葉で自分を説得する');
        era.println();
        await era.printAndWait([
          'そんな ',
          tachyon.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' は選ぶ',
        ]);
        era.printButton('「抱きしめる」', 1);
        era.printButton('「キスする」', 2);
        if ((await era.input()) === 1) {
          await tachyon.print_and_wait(
            '突然、まだ口にしようとしていた言葉が塞がれた',
          );
          await tachyon.print_and_wait(['……', you.sex, 'に、逆に抱き返された']);
          await tachyon.print_and_wait('言いたいことが喉に詰まり、出ない');
        } else {
          await tachyon.print_and_wait(
            '突然、まだ口にしようとしていた言葉が塞がれた',
          );
          await tachyon.print_and_wait('……優しく、温かな感触');
          await tachyon.print_and_wait(
            '冬の寒さをすっかり取り去るような、聖夜のキス',
          );
        }
        era.println();
        await tachyon.print_and_wait(
          '違う……自分の意図は、そういうものではない',
        );
        await tachyon.print_and_wait([
          'それとも……',
          tachyon.get_colored_name(),
          ' には、愛される資格すらもうないというの？',
        ]);
        await tachyon.print_and_wait(
          '自暴自棄の末に、そんな考えが浮かんでしまう',
        );
        era.println();
        await tachyon.say_and_wait(['ん……', callname]);
        era.println();
        await tachyon.print_and_wait('そう思った、まさにそのとき');
        await tachyon.print_and_wait([
          '心の雑念を追い出すように、',
          you.sex,
          'は抱擁の力を強めた',
        ]);
        era.printButton('「少なくとも、明日の有馬記念は見てくれ」', 1);
        era.printButton('「必ずタキオンにけじめはつける」', 2);
        await era.input();
        await tachyon.print_and_wait('けじめ……どんなけじめ');
        await tachyon.print_and_wait('関係を終わらせる、けじめなのか？');
        await tachyon.print_and_wait([
          you.sex,
          'の両目を真っすぐに見つめても、何の意味も読み取れない',
        ]);
        era.println();
        await tachyon.print_and_wait('……それでも、悪くはない');
        await tachyon.print_and_wait([
          '最後に、',
          you.sex,
          'のあの熱狂した目をもう一度見られるなら',
        ]);
        await tachyon.print_and_wait([
          '……その視線の先が、もう ',
          tachyon.get_colored_name(),
          ' ではなくても',
        ]);
      } else {
        await tachyon.say_and_wait('……ああ、雪ですわ');
        era.println();
        await era.printAndWait('ふと、空から白い雪が舞い始めた');
        await era.printAndWait([
          'もう帰ったほうがいいか……そう考えた ',
          you.get_colored_name(),
          ' の服を、',
          tachyon.get_colored_name(),
          ' が軽く引く',
        ]);
        era.println();
        await tachyon.say_and_wait('どこかで、少し座りましょう');
        era.println();
        await era.printAndWait('そうだ。今日の目的は、まだ果たしていない');
        await era.printAndWait([
          '店に腰を下ろして、',
          tachyon.get_colored_name(),
          ' が不機嫌な理由を聞き出そう',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は自分に気合を入れた',
        ]);
        era.drawLine();
        era.printButton('「…………」', 1);
        await era.input();
        await tachyon.say_and_wait([callname, '？ 座らないのですか？']);
        era.printButton('「……いや、その」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'そんなに口ごもるなんて、あなたらしくありませんわ……それとも、言いづらい事情でも？',
        );
        era.println();
        await era.printAndWait('いや、言いづらい事情というより、問題は……');
        era.printButton('「生徒と一緒に居酒屋は、NGだろう」', 1);
        era.printButton('「미성년자와 함께 이자카야에 가는 건 불법이지」', 2);
        await era.input();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' を引っ張って入ろうとしているのは、商店街の外れの居酒屋だった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'もう引退したのですから、大丈夫でしょう……私もこういう場所は初めてですけれど、問題はないはずですわ',
        );
        await tachyon.say_and_wait([
          'それとも ',
          callname,
          '、もうそんな歳なのに、居酒屋にも入れないのですか？',
        ]);
        era.printButton('「問題は引退かどうかじゃなく、生徒だ！」', 1);
        era.printButton('「……挑発は通じない」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' が断って ',
          tachyon.get_colored_name(),
          ' を引き戻そうとしたとき、',
          tachyon.get_colored_name(),
          ' はもう店の中へ入っていた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'ほらほら、来なさい。夜食……というようなものですわ',
        );
        await you.say_as_passer_by_and_wait('店主', 'いらっしゃい～～');
        era.println();
        await era.printAndWait([
          '扉が開くと、店内の暖かさと外の冷気が対比になり、',
          you.get_colored_name(),
          ' はもう足が動かなくなった',
        ]);
        era.printButton('「……少し座るくらいなら、まあ」', 1);
        await era.input();
        await era.printAndWait([
          '店に入って、',
          you.get_colored_name(),
          ' は意外なものを見た',
        ]);
        await era.printAndWait(
          '店内を忙しく動き回る店主の後ろに、栗色の長い尻尾がある',
        );
        era.println();
        await tachyon.say_and_wait('……おや、まさか……');
        era.println();
        await you.say_as_passer_by_and_wait(
          '店主',
          'いらっしゃい！ ……ねえお客さん、あんた、学生でしょう？',
        );
        era.println();
        await tachyon.say_and_wait(
          'あら、そう見えますの？ でも私はもう引退した身分ですわよ',
        );
        era.println();
        await era.printAndWait(
          'いや、引退したからといって生徒でなくなるわけではない',
        );
        await era.printAndWait(
          '突っ込みたかったが、店主は頷いて「じゃあ問題ない」と言う',
        );
        await era.printAndWait('いや……何が問題ないのだ');
        era.println();
        await you.say_as_passer_by_and_wait(
          '店主',
          'それに、隣の人はあんたのトレーナーでしょう。トレーナーが一緒なら大丈夫よ',
        );
        await tachyon.say_and_wait('……ほう、わかりますの？');
        era.println();
        await era.printAndWait([
          '問題は大きいだろう……だがそれより、',
          you.get_colored_name(),
          ' も、なぜ自分がトレーナーだとわかったのか気になる',
        ]);
        await you.say_as_passer_by_and_wait('店主', [
          you.sex,
          'の目よ。うちの亭主とそっくり。担当を見たら足が止まっちゃう、あの目',
        ]);
        era.println();
        await era.printAndWait('な、なんという言い草だ');
        await era.printAndWait('自分は変態なのか');
        await you.say_as_passer_by_and_wait(
          '店主',
          'ふふ、その目は良い亭主の必須条件よ～～逃しちゃだめ',
        );
        era.println();
        await era.printAndWait('店主はそう言うと、他の客の相手へ向かった');
        await era.printAndWait([
          you.get_colored_name(),
          ' は恐る恐る ',
          tachyon.get_colored_name(),
          ' を見る。今度こそ',
          tachyon.sex,
          'に笑われる……',
        ]);
        era.println();
        await tachyon.say_and_wait('…………');
        era.println();
        await era.printAndWait('何を考えているのかわからない');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の表情は、どこか上の空だ',
        ]);
        era.printButton('「タキオン？」', 1);
        await era.input();
        await tachyon.say_and_wait('……あ、ええ、コホン、何でもありませんわ');
        era.println();
        await era.printAndWait([
          '我に返ると、',
          tachyon.get_colored_name(),
          ' の顔は遅延起動の発熱弁当のように',
        ]);
        await era.printAndWait([
          '一瞬で真っ赤になり、',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の顔から湯気が立つように見えた',
        ]);
        await era.printAndWait([
          '気まずい空気を隠すように、',
          tachyon.sex,
          'は店内の様子へ注意を移す',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' も視線をそちらへ向けた',
        ]);
        era.println();
        await era.printAndWait('店主は忙しく客をもてなしている');
        await era.printAndWait([
          '店の客の中には有馬記念の話をする者もいるが、主流ではない',
        ]);
        await era.printAndWait(
          '毎日の天気と同じで、暇つぶしに二言三言交わす話題だ',
        );
        await era.printAndWait([
          '証拠に、今も誰も ',
          tachyon.get_colored_name(),
          ' を認めていない',
        ]);
        await era.printAndWait([
          'トレセン学園近くの商店街で、上半期もっとも名を馳せた',
          tachyon.uma_sex_title,
          'を知らないなど、極めて異例だ',
        ]);
        era.println();
        await era.printAndWait([
          'それを見て、',
          you.get_colored_name(),
          ' は',
          tachyon.uma_sex_title,
          'である店主を思い出す',
        ]);
        await era.printAndWait([
          '亭主がトレーナーだと言うなら、',
          tachyon.sex,
          'もかつてはレースの',
          tachyon.uma_sex_title,
          'だったのだろう',
        ]);
        await era.printAndWait(
          '引退後は、レースとほとんど縁のないこんな暮らしをしている',
        );
        await era.printAndWait(
          'これほど淡々として、これほど退屈で、これほど……穏やかだ',
        );
        era.println();
        await tachyon.say_and_wait('……これも、ひとつの可能性、ですの？');
        era.println();
        await era.printAndWait([tachyon.uma_sex_title, 'の可能性']);
        await era.printAndWait([
          'それは ',
          tachyon.get_colored_name(),
          ' がいつも口にする言葉だ',
        ]);
        await era.printAndWait([
          '……だが、',
          tachyon.uma_sex_title,
          'は誰もが競走',
          tachyon.uma_sex_title,
          'になれるわけではない',
        ]);
        await era.printAndWait([
          '競走',
          tachyon.uma_sex_title,
          'であっても、レース場ではない道を選ぶことはできる',
        ]);
        era.println();
        await era.printAndWait([
          'では、その可能性は ',
          tachyon.get_colored_name(),
          ' にも当てはまるのか？',
        ]);
        await era.printAndWait([
          'ふと、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' が沈んでいる理由を理解した',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' にとって、そんな可能性はあるのか？',
        ]);
        await era.printAndWait([
          '喫茶店の店主になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '研究の道へ進み、科学者になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '普通の生徒として進学し、大学生になり、社会へ出て会社員になった ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          tachyon.sex,
          'にもあるのか。普通の人と同じように、レース場を離れ、自分の暮らしを生きる日々',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '、私についてきてくれますの？',
        ]);
        await tachyon.say_and_wait(
          'もし……私が、そういう可能性を選んだとしたら',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' と一緒に、レースとも、',
          tachyon.uma_sex_title,
          'の速度とも無縁の、淡く穏やかな日常を送る',
        ]);
        await era.printAndWait('そんな暮らしは、きっととても美しいだろう');
        await era.printAndWait([
          '平凡な日々でも、',
          tachyon.get_colored_name(),
          ' がいれば、絶対に退屈しない',
        ]);
        await era.printAndWait([tachyon.sex, 'と一緒に、二人だけの生活を築く']);
        await era.printAndWait('……だが、今はだめだ');
        era.printButton('「……明日の有馬のあとでもいいか」', 1);
        era.printButton('「明日、有馬を見てからもう一度聞いてくれ」', 2);
        await era.input();
        await era.printAndWait(
          'レース場を離れたいというのも、選べる可能性のひとつだ',
        );
        await era.printAndWait([
          'だが、今の ',
          tachyon.get_colored_name(),
          ' のように、逃避のように離れるのは絶対に違う',
        ]);
        await era.printAndWait(
          '……明日の有馬が、その目を変えさせてくれればいい',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_b_betray
  ws_b_betray: (() => {
    const title = 'Betray';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     */
    const f = async (tachyon, coffee, you, callname, call_25, relation) => {
      await era.printAndWait('夢を他人に託す……酷い道ではある。だが');
      await era.printAndWait('理性で見るなら、これが一番届きやすい希望だろう');
      await era.printAndWait([
        tachyon.sex,
        'の言う運命はさておき、',
        tachyon.sex,
        'の両脚……トレーナーとしてでも、',
        tachyon.get_colored_name(),
        ' に憧れるファンとしてでも',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、その過程で',
        tachyon.sex,
        'が負いかねない傷を、見て見ぬふりはできない',
      ]);
      await era.printAndWait('可能性が低すぎる');
      await era.printAndWait('眼前の道も、茨だらけだ');
      await era.printAndWait([
        you.get_colored_name(),
        ' にはできない。臆病者と罵られても構わない',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が無事でいてくれさえすればいい',
      ]);
      await era.printAndWait('それ以外は……');
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、もうひとりの担当',
        tachyon.uma_sex_title,
        'を思い出した',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の走りも姿も、同じように ',
        you.get_colored_name(),
        ' を魅了していた',
      ]);
      await era.printAndWait('「代わり」は、傲慢で身勝手な言葉だ');
      await era.printAndWait(
        '誰も誰かの代わりにはなれない。誰も、代わりとして生まれてはいない',
      );
      if (relation >= era.get('relation:25:0')) {
        await era.printAndWait([
          'だが、もし誰かが ',
          tachyon.get_colored_name(),
          ' の夢を「継げる」としたら……',
        ]);
        era.println();
        await era.printAndWait([
          'それは、',
          coffee.get_colored_name(),
          ' 以外にいない',
        ]);
        era.println();
        await era.printAndWait([
          '黙ったままの ',
          you.get_colored_name(),
          ' を見て、',
          tachyon.get_colored_name(),
          ' も胸の内の決断を察した',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が口を開くのを、待っているだけだ',
        ]);
      } else {
        await era.printAndWait(['とりわけ ', coffee.get_colored_name()]);
        era.printButton(`「……カフェ${coffee.sex}は、誰の代わりでもない」`, 1);
        await era.input();
        await tachyon.say_and_wait(['フフ、ずいぶん庇いますのね……']);
        await tachyon.say_and_wait([
          '安心なさい。',
          tachyon.sex,
          'を誰かの代わりだなどとは言っていませんわ……',
        ]);
        await tachyon.say_and_wait([
          'ええ、通りすがりの親切な',
          tachyon.uma_sex_title,
          'が、',
          coffee.get_colored_name(),
          ' とそのトレーナーへ手を貸す。それだけですわ',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          coffee.get_colored_name(),
          ' と、',
          coffee.get_colored_name(),
          ' のトレーナー」——そう口にしたとき、',
          tachyon.get_colored_name(),
          ' の顔に、見落としようのない落胆が浮かんだ',
        ]);
        await era.printAndWait([
          '……そうだ。この選択をした以上、自分は本当に ',
          coffee.get_colored_name(),
          ' のトレーナーになる……だが、この選択こそが ',
          tachyon.get_colored_name(),
          ' にとって最善なのだろう',
        ]);
      }
      era.printButton('「……俺は Plan B を選ぶ」', 1);
      await era.input();
      await tachyon.say_and_wait('……そう');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の選択を聞くと、多くを語らず、ただ頷いた',
      ]);
      await era.printAndWait([
        '室内は息が詰まる沈黙に沈んだ。',
        you.get_colored_name(),
        ' が耐えきれず、何か言おうとした、そのとき',
      ]);
      era.println();
      await tachyon.say_and_wait('……ははははっ！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が突然笑い出し、',
        you.get_colored_name(),
        ' は肩を跳ねさせた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'よろしいよろしい！ 正しい選択ができたではありませんか！',
      );
      era.println();
      await era.printAndWait('正しい選択……か？');
      era.println();
      await tachyon.say_and_wait(
        '正直、Plan A を選ばれるかと少し恐れていましたの。私のような人間には、トレーニングやレースより、裏方で研究しているほうが向いていますわ。はっはっは！',
      );
      era.println();
      await era.printAndWait([
        '……',
        tachyon.sex,
        'がそう言うなら、これが正しいのだろう。そうだろう？',
      ]);
      await era.printAndWait([
        'これが',
        tachyon.sex,
        'に最も合い、最も理に適った選択なのだろう。そうだろう？',
      ]);
      await era.printAndWait('きっと、そうだ');
      await era.printAndWait('絶対に、そうだ');
      await era.printAndWait([
        'でなければ……自分は担当',
        tachyon.uma_sex_title,
        'を、自分の光（Tachyon）を、捨てて裏切ったことになる',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'そうだわ、',
        callname,
        '、明日も試薬に来なさいな',
      ]);
      await era.printAndWait('…………え？ まだ試薬するのか？');
      await era.printAndWait([
        you.get_colored_name(),
        ' の呆けた顔を見て、',
        tachyon.get_colored_name(),
        ' は笑った',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'フフ……当たり前ですわ。ただし明日からの薬は、全部 ',
        call_25,
        ' に使うもの……',
      ]);
      await tachyon.say_and_wait(
        '覚悟しておきなさいな。明日からは、試す薬がもっと増えますわよ？',
      );
      await tachyon.say_and_wait([
        call_25,
        ' が限界まで届く基礎を補うために、やることは以前よりよほど多いですわ',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は笑って控室を出ていった。自分の選択は、',
        tachyon.sex,
        'に影響していない……のか？',
      ]);
      await era.printAndWait([
        '胸の奥はまだ落ち着かない。それでも ',
        you.get_colored_name(),
        ' はその心配をすぐに振り払った。',
        coffee.get_colored_name(),
        ' のためにも、',
        tachyon.get_colored_name(),
        ' のためにも、もっとやらねばならない',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は月桂杯に出走した',
      ]);
      await era.printAndWait([
        '本格化を終えたシニアの相手も、同期の強者も、夢の杯の先輩さえも、',
        tachyon.sex,
        'は平等に超えていった',
      ]);
      await era.printAndWait('相変わらず、目を奪う走りだ');
      await era.printAndWait('相変わらず、光のような走りだ');
      await era.printAndWait('光のように、一瞬で消える走りだ');
      era.println();
      await era.printAndWait([
        'その後、',
        tachyon.get_colored_name(),
        ' はトゥインクルシリーズへの参戦を、半永久的に休止すると発表した',
      ]);
      await era.printAndWait('発表は、メディアを大きく揺らした');
      await era.printAndWait([
        'だが、そのどれもが ',
        you.get_colored_name(),
        ' と',
        tachyon.sex,
        'の同行を、妨げることはない',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
