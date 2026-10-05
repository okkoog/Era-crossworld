// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const print = require('#/era-electron')["print"];
const get = require('#/era-electron')["get"];
const printButton = require('#/era-electron')["printButton"];
const input = require('#/era-electron')["input"];
const println = require('#/era-electron')["println"];
const waitAnyKey = require('#/era-electron')["waitAnyKey"];
const { printAndWait } = require('#/era-electron');
const JaOthers = require('#/i18n/ja-JP/timon/others/others');

module.exports = {
  ...JaOthers,

  async welcome_trainer_office(aoi, riko, you, r_call_a, empty_team) {
    await printAndWait([
      you.get_colored_name(),
      '이(가) 트레이너 공용 사무실에 도착하니, 이미 두 명의 트레이너가 안에 있었다.',
    ]);
    await riko.say_as_unknown_and_wait([
      '안녕하세요. 새로 오신 ',
      you.actual_name,
      ' 트레이너님 이시죠.',
    ]);
    await riko.say_and_wait([
      '저는 ',
      riko.get_colored_actual_name(),
      '입니다. 앞으로 중앙 트레센의 영광을 위해 함께 노력합시다.',
    ]);
    await aoi.say_and_wait([
      '안녕하세요. 저는 ',
      aoi.get_colored_actual_name(),
      '입니다. 앞으로 잘 부탁드립니다.',
    ]);
    if (empty_team) {
      await riko.say_and_wait([
        '아직 담당 우마무스메가 없으시니, 어려움이 있으시면 언제든지 저나 ',
        r_call_a,
        '과(와) 상의해 주세요.',
      ]);
    }
  },

  async TEN(you, uma) {
    await printAndWait('세월이 흘러, 3년 뒤에 또 3년, 그리고 또 3년.');
    await printAndWait([
      '벚꽃이 피고 지기를 반복하며, ',
      you.get_colored_name(),
      '이(가) 트레센 학원에서 보낸 시간도 어느덧 10년이 되었다.',
    ]);
    await printAndWait([
      '이 10년 동안 ',
      you.get_colored_name(),
      '은(는) 수많은 ',
      uma,
      '들의 성장을 지켜보았고, ',
      you.get_colored_name(),
      ' 또한 갓 부임한 풋내기 트레이너에서 학원 내에서 존경받는 존재로 성장했다.',
    ]);
    await printAndWait([
      '묵묵히 뒤에서 지켜보며, ',
      uma,
      '들과 함께 앞을 향해 나아간 ',
      you.get_colored_name(),
      '은(는) 그 공을 치하받을 만 하다.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '이(가) 있었기에, 이 10년의 이야기가 이토록 빛날 수 있었다.',
    ]);
  },

  async TWENTY(you, uma, they) {
    await printAndWait('20년의 세월은 쏜살같이 지나갔다.');
    await printAndWait([
      '트레센 학원의 훈련장에서는, 지금도 ',
      uma,
      '들의 발소리가 끊이지 않는다.',
    ]);
    await printAndWait([
      '단 하나의 꿈도 포기하지 않은 ',
      you.get_colored_name(),
      '은(는) 그 공을 치하받을 만 하다.',
    ]);
    await printAndWait([
      they,
      '의 모든 라스트 스퍼트에는 언제나 당신의 그림자가 함께했다.',
    ]);
    await printAndWait([
      you.get_colored_name(),
      '은(는) 오늘도 새롭게 입학한 학생들의 서류를 넘겨본다. 어쩌면 이 풋풋한 이름들 속에서 역사를 뒤바꿀 다음 세대의 존재가 탄생할지도 모른다.',
    ]);
  },

  async THIRTY(you) {
    await printAndWait([
      '30년이라는 세월은, ',
      you.get_colored_name(),
      '를 한 세대의 마음속에 전설로 남기에 충분한 시간이다.',
    ]);
    await printAndWait(
      '터프는 여전히 뜨거운 열기로 가득하고, 트레센의 교표는 변함없이 빛나고 있다.',
    );
    await printAndWait([
      '그리고 ',
      you.get_colored_name(),
      '의 이야기는 이미 수많은 이들의 가슴속에 새겨졌다.',
    ]);
    await printAndWait([
      '30년간의 끈기와 신념으로, 두 번 다시 없을 전설을 써 내려간 ',
      you.get_colored_name(),
      '은(는) 그 공을 치하받을 만 하다.',
    ]);
  },

  async FORTY(you, uma, they) {
    await printAndWait([
      '40년은 눈 깜짝할 사이에 지나갔고, ',
      you.get_colored_name(),
      '의 이야기는 이미 트레센 학원과 떼려야 뗄 수 없는 일부분이 되었다.',
    ]);
    await printAndWait([
      '세월이 흘러도, ',
      you.get_colored_name(),
      '의 신념은 결코 변하지 않았다.',
    ]);
    await printAndWait([
      uma,
      '들은 끊임없이 한계를 돌파하며 서로의 꿈을 위해 달렸고, ',
      you.get_colored_name(),
      '은(는) 언제나 그녀들의 뒤를 지켜주는 가장 따뜻한 존재였다.',
    ]);
    await printAndWait([
      '학원 어딘가의 명예의 전당 벽에는 지난 40년간의 사진이 빼곡히 걸려 있으며, 그 한 장 한 장마다 ',
      you.get_colored_name(),
      '의 발자취가 담겨 있다.',
    ]);
  },

  async FIFTY(you, uma, they) {
    await printAndWait('인생 50년, 꿈과 환상과도 같구나.');
    await printAndWait(
      '벚꽃은 예전처럼 다시 피어나고, 트레센 학원은 찬란한 영광의 반세기를 맞이했다.',
    );
    await printAndWait(
      '반세기라는 시간은 모든 것을 바꾸기에 충분하지만, 결코 변하지 않는 것도 있다.',
    );
    await printAndWait([
      '과거의 ',
      uma,
      '들 중 누군가는 전설이 되었고 누군가는 무대 뒤로 물러났지만, ',
      they,
      '의 이야기는 당신으로 인해 계속해서 이어지고 있다.',
    ]);
    await printAndWait([
      '그리고 ',
      you.get_colored_name(),
      '은(는) 여전히 훈련장에 서서, 새로운 우마무스메들이 달리는 모습을 지켜보고 있다.',
    ]);
  },

  // [번역 대상] bt_fund
  bt_fund: '投資（1,000 ウマコイン単位）',

  // [번역 대상] bt_ransom
  bt_ransom: '換金',

  // [번역 대상] fund_confirm
  fund_confirm: 'いくら投資する？',

  // [번역 대상] fund_reject
  async fund_reject(bryne, callname) {
    await bryne.say_and_wait([
      '悪いけど、',
      callname,
      '、資金が足りないんじゃない？ うちの経路には 1,000 ウマコイン未満の小口投資を受ける機関はないよ……',
    ]);
  },

  // [번역 대상] fund_result
  async fund_result(bryne, new_funds, income) {
    await printAndWait([
      bryne.get_colored_name(),
      ' へ ',
      new_funds,
      ' ウマコインを追加し、毎週の収益は合計 ',
      income,
      ' ウマコインになった。',
    ]);
  },

  // [번역 대상] fund_summary
  fund_summary(bryne, funds, income) {
    print([
      'いま ',
      bryne.get_colored_name(),
      ' へ ',
      funds,
      ' ウマコインを預けており、毎週 ',
      income,
      ' ウマコインの収益がある。',
    ]);
  },

  // [번역 대상] get_ransom_confirm
  get_ransom_confirm(funds) {
    return ['いくら換金する？ 投資済みは ', funds, ' ウマコイン：'];
  },

  // [번역 대상] get_sc_buttons
  get_sc_buttons: () =>
    get('flag:初见重复育成') === 1
      ? {
          yes: '「そのために来た」',
          no: '「……もう十分だ」',
        }
      : {
          yes: '先へ進む',
          no: 'ここで引き返す',
        },

  // [번역 대상] get_star_drew_selected
  get_star_drew_selected: (name) => `${name} [指名済み]`,

  // [번역 대상] get_ur_trainer_reward
  get_ur_trainer_reward(total, money, g1_wins, all_wins) {
    return [
      '年度チーム総勝鞍：',
      total,
      { isBr: true },
      '年度チーム総賞金：',
      money,
      ' ウマコイン',
      { isBr: true },
      '年度チーム G1 勝鞍：',
      g1_wins,
      { isBr: true },
      '年度チーム重賞勝鞍：',
      all_wins,
    ];
  },

  // [번역 대상] get_ur_uma_reward
  get_ur_uma_reward(total, money, g1_wins, all_wins) {
    return [
      '年度総勝鞍：',
      total,
      { isBr: true },
      '年度総賞金：',
      money,
      ' ウマコイン',
      { isBr: true },
      '年度 G1 勝鞍：',
      g1_wins,
      { isBr: true },
      '年度重賞勝鞍：',
      all_wins,
    ];
  },

  // [번역 대상] grand_live_header
  grand_live_header: '来年、次のレースでグランドライブが開催される：',

  // [번역 대상] ransom_result
  async ransom_result(ransomed, funds, income) {
    print([' ', ransomed, ' ウマコインを換金した。']);
    if (typeof funds === 'object') {
      await printAndWait([
        'まだ ',
        funds,
        ' ウマコインあり、毎週 ',
        income,
        ' ウマコインの収益がある。',
      ]);
    }
  },

  // [번역 대상] sc_event_former
  async sc_event_former(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('夜は深く、人は寝静まっている。');
      await printAndWait([
        you.get_colored_name(),
        ' はひとり、トレセンの学園中心へ向かった。',
      ]);
      await printAndWait('三女神の像が、そこに穏やかに立っている。');
      await printAndWait([
        you.get_colored_name(),
        ' は深く息を吸い、泉のほとりへ歩み、先に書いた手紙を捧げて水へ投じた。',
      ]);
      await printAndWait([
        '池に映る月がふっと揺れ、幽かな光が漂う。',
        you.get_colored_name(),
        ' は、いくつかの声が同時に頭の中で響くのを感じた——',
      ]);
      await printAndWait(
        '人生は無常。先を行く勇者も、世代を治めた覇者も、領域を制した帝王も、その道が必ずしも順風であるとは限らない。光も闇も、ついには夢幻の泡影。',
      );
      await printAndWait(
        'だが悪夢は去り、美夢も叶う。浮沫のなかにも、掬い取って残したいものがある。',
      );
      await you.say_as_unknown_and_wait('では、あなたの決意を聞かせて。');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' は、またこの場所へ戻ってきた。',
      ]);
      await printAndWait([
        'これは……何度目だろう。',
        you.get_colored_name(),
        ' の記憶は、奇妙にぼやけていく。',
      ]);
      await printAndWait('だが、それが肝要ではない……');
      await printAndWait([
        you.get_colored_name(),
        ' が胸に思うことこそ、必要なのだ。',
      ]);
    }
  },

  // [번역 대상] sc_event_latter
  async sc_event_latter(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        you.get_colored_name(),
        ' は像の顔へ視線を上げ、真に動くかのような三対の瞳を見つめ、頭を下げて礼をした。',
      ]);
      await printAndWait('それから、光彩が咲いた——');
      await printAndWait('「次」の真実を追う時が来た。');
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' は三女神の塑像を見た。水霧が彼女たちの顔をぼかし、',
        you.get_colored_name(),
        ' は何かをしようと口を開き、手を伸ばしかけて——',
      ]);
      await printAndWait('眼前のすべてが歪んだ。');
      await printAndWait('すぐに元へ戻り、何も起きなかったかのようだ。');
      await printAndWait('……');
      await printAndWait('すべてはいつもどおり……あるいは、違うのか？');
      await printAndWait('自分は……何をしたのだったか。');
    }
  },

  // [번역 대상] sc_event_name
  sc_event_name: '「夢」',

  // [번역 대상] sc_limit_template
  sc_limit_template: '再び育成するキャラを選んでください（最大 %LIMIT% 名）',

  // [번역 대상] sc_name_inherited_template
  sc_name_inherited_template: '%NAME%（継承済み）',

  // [번역 대상] sd_f_title_image
  sd_f_title_image: '専用調教立ち絵：キャラが調教中に持つ独自の立ち絵表現。',

  // [번역 대상] sd_f_title_kojo_b
  sd_f_title_kojo_b:
    '地下室口上：キャラがプレイヤーを拉致・監禁したときに発動する専用劇情と本文。',

  // [번역 대상] sd_f_title_kojo_d
  sd_f_title_kojo_d:
    '日常口上：キャラが日常の交流や祭事で発動する専用劇情と本文。',

  // [번역 대상] sd_f_title_kojo_ed
  sd_f_title_kojo_ed:
    '育成口上：キャラが育成の過程で展開する専用イベントと物語。',

  // [번역 대상] sd_f_title_kojo_er
  sd_f_title_kojo_er: '調教口上：キャラが調教の性愛で発動する専用劇情と本文。',

  // [번역 대상] sd_f_title_kojo_l
  sd_f_title_kojo_l:
    '恋慕口上：キャラの恋慕が特定段階へ上がったときに発動する専用劇情とイベント。',

  // [번역 대상] sd_f_title_kojo_r
  sd_f_title_kojo_r: '募集口上：キャラがチーム加入時に発動する専用劇情と本文。',

  // [번역 대상] star_drew
  async star_drew(taste, you, chara, changed) {
    taste.say(['抉 択！ 学園に ', chara, ' さんとの接触を手伝わせるか？']);
    printButton('「超 得！！」', 1);
    printButton('「待 て！！」', 2);
    const ret = await input();
    if (ret === 1) {
      await taste.say_and_wait([
        '激 熱！',
        chara,
        ' さんは近いうちトレーニング場へよく来る。しっかり掴まえろ！',
      ]);
      if (changed) {
        await taste.say_and_wait([
          '不 快！ だが ',
          you.get_colored_actual_name(),
          ' トレーナー、次はよく考えてから決めてほしい！',
        ]);
      }
    } else {
      await taste.say_and_wait('憤 怒！ 考えてから来い！');
    }
    return ret;
  },

  // [번역 대상] star_drew_all_chara
  star_drew_all_chara: '指名できるキャラ',

  // [번역 대상] star_drew_bt_filter_image
  star_drew_bt_filter_image: '立ち絵',

  // [번역 대상] star_drew_bt_filter_kojo_b
  star_drew_bt_filter_kojo_b: '地下室',

  // [번역 대상] star_drew_bt_filter_kojo_d
  star_drew_bt_filter_kojo_d: '日常',

  // [번역 대상] star_drew_bt_filter_kojo_ed
  star_drew_bt_filter_kojo_ed: '育成',

  // [번역 대상] star_drew_bt_filter_kojo_er
  star_drew_bt_filter_kojo_er: '調教',

  // [번역 대상] star_drew_bt_filter_kojo_l
  star_drew_bt_filter_kojo_l: '恋慕',

  // [번역 대상] star_drew_bt_filter_kojo_r
  star_drew_bt_filter_kojo_r: '募集',

  // [번역 대상] star_drew_chara_id_input
  star_drew_chara_id_input: '指名したいキャラ ID を入力してください',

  // [번역 대상] star_drew_chara_name_input
  star_drew_chara_name_input: '指名したいキャラ名を入力してください',

  // [번역 대상] star_drew_duplicate
  async star_drew_duplicate(taste, chara) {
    await taste.say_and_wait([
      '提 醒！',
      chara.get_colored_name(),
      ' さんはすでにトレーニング場で待っている！',
    ]);
  },

  // [번역 대상] star_drew_filter_image
  star_drew_filter_image: '専用調教立ち絵',

  // [번역 대상] star_drew_filter_kojo_template
  star_drew_filter_kojo_template: '%KOJO% 口上',

  // [번역 대상] star_drew_filter_template
  star_drew_filter_template: '%FILTERS% を持つキャラ',

  // [번역 대상] star_drew_intro
  star_drew_intro(taste) {
    taste.say(
      '告 知！ まだ入団していないが天賦のある子について、学園は実績のあるトレーナーが直接指名して指導することを認める！ ただし衆を納得させる名声が必要だ！',
    );
    taste.say(
      '注 意！ 指名したとしても、相手とはきちんと一から付き合ってほしい！',
    );
  },

  // [번역 대상] star_drew_limited
  async star_drew_limited(taste) {
    await taste.say_and_wait(
      '不 解！ あなたのチームにはもう十分なメンバーがいる！',
    );
  },

  // [번역 대상] star_drew_no_one
  async star_drew_no_one(taste) {
    await taste.say_and_wait('疑 惑！ 該当者なし！');
  },

  // [번역 대상] star_drew_options
  star_drew_options: ['一覧から選ぶ', '名前で指名', 'ID で指名', '考え直す'],

  // [번역 대상] star_drew_other_chara
  star_drew_other_chara: 'その他のキャラ',

  // [번역 대상] star_drew_wrong_date
  async star_drew_wrong_date(taste) {
    await taste.say_and_wait('疑 惑！ いまは担当を募集する時期ではない！');
  },

  // [번역 대상] ur_alternative_reporter
  ur_alternative_reporter: '司会',

  // [번역 대상] ura_reward
  ura_reward: (() => {
    /**
     * URA 表彰式
     * @author 雞雞
     * @param {CharaTalk} etusko
     * @param {CharaTalk} you
     * @param {function(TextContent):Promise} report 司会発言のコールバック
     * @param {string} year 年度
     * @param {string} uma ウマ郎 or ウマ娘
     * @param {boolean} is_etusko 乙名史が司会か（妊娠または育成中は司会しない）
     * @param uma_list_cb 選手立ち絵リスト出力のコールバック群
     * @param {function} uma_list_cb.g1 G1 ウマ娘
     * @param {function} uma_list_cb.best_trainer 年間最優秀トレーナー
     * @param {function} uma_list_cb.junior 最優秀ジュニアウマ娘
     * @param {function} uma_list_cb.classic 最優秀クラシックウマ娘
     * @param {function} uma_list_cb.senior 最優秀シニアウマ娘
     * @param {function} uma_list_cb.uoty 年度代表ウマ娘
     * @param {string} uma_list_cb.default_best_trainer プレイヤーが年間最優秀トレーナーを取れなかったときの代替名
     * @returns {Promise<void>}
     */
    const f = async (
      etusko,
      you,
      report,
      year,
      uma,
      is_etusko,
      uma_list_cb,
    ) => {
      await report([
        '各',
        uma,
        'ファンの皆さん、こんばんは！ 皆さんが心待ちにしていた年に一度の祭典、URA表彰式の始まりです！',
      ]);
      await report([
        '例年どおり、大会側は複数の賞を設け、最高の競技水準で精彩を届けてくれた各',
        uma,
        'と、その陰で支えてきたトレーナーの皆さんへ敬意を表します！',
      ]);
      if (is_etusko) {
        await report([
          '今年も私、',
          etusko.get_colored_actual_name(),
          ' が司会を務めます。どうぞよろしくお願いいたします！',
        ]);
      }
      println();
      await report([
        '表彰に入る前に、',
        year,
        ' 年の G1 で輝いた',
        uma,
        'たちを振り返りましょう！',
      ]);
      println();
      if (typeof uma_list_cb.g1 === 'function') {
        uma_list_cb.g1();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（何人かの選手の名。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーはいない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('改めて、各選手の尽力に感謝します！');
      println();
      await report('では早速、注目の各賞を発表しましょう！');
      println();
      await report('まずは……本年度《最優秀トレーナープライズ》！');
      println();
      if (typeof uma_list_cb.best_trainer === 'function') {
        uma_list_cb.best_trainer();
        await waitAnyKey();
        await report([
          you.get_colored_actual_name(),
          'トレーナーの尽力は、誰の目にも明らかです！',
        ]);
      } else {
        if (typeof uma_list_cb.default_best_trainer === 'string') {
          await report([
            uma_list_cb.default_best_trainer,
            'トレーナーの尽力は、誰の目にも明らかです！',
          ]);
        } else {
          await report('本年度は基準を満たす候補がいませんでした……');
          await report('残念です。来年こそ、受賞の幸運を期待しましょう！');
        }
      }
      println();
      await report('続いて……本年度《最優秀ジュニアプライズ》！');
      println();
      if (typeof uma_list_cb.junior === 'function') {
        uma_list_cb.junior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（ジュニア級を終えたばかりの選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report(
        'この選手が、これからもコースで輝き続けることを願っています！',
      );
      println();
      await report('次は……本年度《最優秀クラシック級プライズ》！');
      println();
      if (typeof uma_list_cb.classic === 'function') {
        uma_list_cb.classic();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（クラシック級を終えたばかりの選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('もう中核を担う風格が出てきましたね！');
      println();
      await report('そして……本年度《最優秀シニア級プライズ》！');
      println();
      if (typeof uma_list_cb.senior === 'function') {
        uma_list_cb.senior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（シニア級を終えたばかりの選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('疑いようもなく、百戦錬磨の古強者です！');
      println();
      await report([
        '最後！ 本年度いちばん速く、いちばん高く、いちばん強い歴史の一瞬です！ 数多の名馬の列に、唯一無二の印を残した',
        uma,
        '……果たして誰か？！',
      ]);
      await report(['《年度代表', uma, '》。この最終の栄誉は——']);
      println();
      if (typeof uma_list_cb.uoty === 'function') {
        uma_list_cb.uoty();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（ある選手の名と写真。残念ながら ',
            you.get_colored_name(),
            ' のチームメンバーではない）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('いま、最強は決しました！');
      println();
      await report(
        '本日はご来場ありがとうございました。来年、またお会いしましょう！',
      );
    };
    f.title = 'URA 表彰式';
    return f;
  })(),
};
