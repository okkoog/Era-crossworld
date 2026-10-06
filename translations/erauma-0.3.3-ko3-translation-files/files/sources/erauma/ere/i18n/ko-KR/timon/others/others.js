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

  // [번역 완료] bt_fund
  bt_fund: '투자（1,000 우마코인 단위）',

  // [번역 완료] bt_ransom
  bt_ransom: '환금',

  // [번역 완료] fund_confirm
  fund_confirm: '얼마나 투자할까?',

  // [번역 완료] fund_reject
  async fund_reject(bryne, callname) {
    await bryne.say_and_wait([
      '미안하지만, ',
      callname,
      ', 자금이 부족한 것 같은데? 우리 쪽에는 1,000 우마코인 미만의 소액 투자를 받아 주는 기관이 없어……',
    ]);
  },

  // [번역 완료] fund_result
  async fund_result(bryne, new_funds, income) {
    await printAndWait([
      bryne.get_colored_name(),
      '에게 ',
      new_funds,
      ' 우마코인을 추가로 투자해, 매주 수익은 합계 ',
      income,
      ' 우마코인이 되었다.',
    ]);
  },

  // [번역 완료] fund_summary
  fund_summary(bryne, funds, income) {
    print([
      '현재 ',
      bryne.get_colored_name(),
      '에게 ',
      funds,
      ' 우마코인을 맡겨 두었고, 매주 ',
      income,
      ' 우마코인의 수익이 있다.',
    ]);
  },

  // [번역 완료] get_ransom_confirm
  get_ransom_confirm(funds) {
    return ['얼마나 환금할까? 투자액은 ', funds, ' 우마코인:'];
  },

  // [번역 완료] get_sc_buttons
  get_sc_buttons: () =>
    get('flag:初见重复育成') === 1
      ? {
          yes: '「그걸 위해 왔다」',
          no: '「……이제 충분해」',
        }
      : {
          yes: '앞으로 나아간다',
          no: '여기서 돌아간다',
        },

  // [번역 완료] get_star_drew_selected
  get_star_drew_selected: (name) => `${name} [지명 완료]`,

  // [번역 완료] get_ur_trainer_reward
  get_ur_trainer_reward(total, money, g1_wins, all_wins) {
    return [
      '연간 팀 총 승리 수: ',
      total,
      { isBr: true },
      '연간 팀 총 상금: ',
      money,
      ' 우마코인',
      { isBr: true },
      '연간 팀 G1 승리 수: ',
      g1_wins,
      { isBr: true },
      '연간 팀 중상 승리 수: ',
      all_wins,
    ];
  },

  // [번역 완료] get_ur_uma_reward
  get_ur_uma_reward(total, money, g1_wins, all_wins) {
    return [
      '연간 총 승리 수: ',
      total,
      { isBr: true },
      '연간 총 상금: ',
      money,
      ' 우마코인',
      { isBr: true },
      '연간 G1 승리 수: ',
      g1_wins,
      { isBr: true },
      '연간 중상 승리 수: ',
      all_wins,
    ];
  },

  // [번역 완료] grand_live_header
  grand_live_header: '내년에는 다음 레이스에서 그랜드 라이브가 개최된다: ',

  // [번역 완료] ransom_result
  async ransom_result(ransomed, funds, income) {
    print([' ', ransomed, ' 우마코인을 환금했다.']);
    if (typeof funds === 'object') {
      await printAndWait([
        '아직 ',
        funds,
        ' 우마코인이 남아 있으며, 매주 ',
        income,
        ' 우마코인의 수익이 있다.',
      ]);
    }
  },

  // [번역 완료] sc_event_former
  async sc_event_former(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait('밤은 깊고, 사람들은 모두 잠들었다.');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 홀로 트레센 학원 중앙으로 향했다.',
      ]);
      await printAndWait('세 여신상이 그곳에 고요히 서 있다.');
      await printAndWait([
        you.get_colored_name(),
        '은(는) 깊게 숨을 들이쉬고 샘가로 걸어가, 미리 써 둔 편지를 바치듯 물속에 던졌다.',
      ]);
      await printAndWait([
        '연못에 비친 달이 살짝 흔들리고 희미한 빛이 떠돈다. ',
        you.get_colored_name(),
        '은(는) 몇 개의 목소리가 동시에 머릿속에서 울리는 것을 느꼈다——',
      ]);
      await printAndWait(
        '인생은 무상하다. 앞서 나아간 용자도, 시대를 평정한 패자도, 영역을 제패한 제왕도 그 길이 언제나 순탄한 것은 아니다. 빛도 어둠도 결국은 꿈과 환상처럼 덧없다.',
      );
      await printAndWait(
        '하지만 악몽은 지나가고, 좋은 꿈은 이루어지기도 한다. 물거품 같은 순간 속에서도 건져 올려 남기고 싶은 것이 있다.',
      );
      await you.say_as_unknown_and_wait('그럼, 당신의 결의를 들려줘.');
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 다시 이곳으로 돌아왔다.',
      ]);
      await printAndWait([
        '이건…… 몇 번째일까. ',
        you.get_colored_name(),
        '의 기억은 이상하게 흐릿해져 간다.',
      ]);
      await printAndWait('하지만 그게 중요한 건 아니다……');
      await printAndWait([
        you.get_colored_name(),
        '이(가) 가슴속에 품은 것이야말로 필요한 것이다.',
      ]);
    }
  },

  // [번역 완료] sc_event_latter
  async sc_event_latter(you) {
    if (get('flag:初见重复育成') === 1) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 여신상의 얼굴로 시선을 들어 정말 살아 움직이는 듯한 세 쌍의 눈동자를 바라보고 고개 숙여 예를 올렸다.',
      ]);
      await printAndWait('그리고 빛이 피어났다——');
      await printAndWait('「다음」의 진실을 좇을 때가 왔다.');
    } else {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 세 여신의 조각상을 바라봤다. 물안개가 그녀들의 얼굴을 흐릿하게 가리고, ',
        you.get_colored_name(),
        '은(는) 무언가 하려는 듯 입을 열고 손을 뻗으려다가——',
      ]);
      await printAndWait('눈앞의 모든 것이 일그러졌다.');
      await printAndWait('곧 원래대로 돌아와 아무 일도 없었던 것처럼 보인다.');
      await printAndWait('……');
      await printAndWait('모든 것은 평소대로…… 아니면, 다른 건가?');
      await printAndWait('나는…… 무엇을 했던 거지.');
    }
  },

  // [번역 완료] sc_event_name
  sc_event_name: '「꿈」',

  // [번역 완료] sc_limit_template
  sc_limit_template: '다시 육성할 캐릭터를 선택해 주세요（최대 %LIMIT%명）',

  // [번역 완료] sc_name_inherited_template
  sc_name_inherited_template: '%NAME%（계승 완료）',

  // [번역 완료] sd_f_title_image
  sd_f_title_image: '전용 조교 스탠딩 일러스트: 캐릭터가 조교 중 표시하는 고유 스탠딩 일러스트.',

  // [번역 완료] sd_f_title_kojo_b
  sd_f_title_kojo_b:
    '지하실 대사: 캐릭터가 플레이어를 납치·감금했을 때 발동하는 전용 시나리오와 본문.',

  // [번역 완료] sd_f_title_kojo_d
  sd_f_title_kojo_d:
    '일상 대사: 캐릭터가 일상 교류나 행사에서 발동하는 전용 시나리오와 본문.',

  // [번역 완료] sd_f_title_kojo_ed
  sd_f_title_kojo_ed:
    '육성 대사: 캐릭터의 육성 과정에서 전개되는 전용 이벤트와 이야기.',

  // [번역 완료] sd_f_title_kojo_er
  sd_f_title_kojo_er: '조교 대사: 캐릭터의 조교 중 성애 상황에서 발동하는 전용 시나리오와 본문.',

  // [번역 완료] sd_f_title_kojo_l
  sd_f_title_kojo_l:
    '연모 대사: 캐릭터의 연모가 특정 단계에 도달했을 때 발동하는 전용 시나리오와 이벤트.',

  // [번역 완료] sd_f_title_kojo_r
  sd_f_title_kojo_r: '모집 대사: 캐릭터가 팀에 합류할 때 발동하는 전용 시나리오와 본문.',

  // [번역 완료] star_drew
  async star_drew(taste, you, chara, changed) {
    taste.say(['선 택! 학원에 ', chara, ' 씨와 접촉하도록 도와달라고 할까?']);
    printButton('「대 득!!」', 1);
    printButton('「잠 깐!!」', 2);
    const ret = await input();
    if (ret === 1) {
      await taste.say_and_wait([
        '열 광!',
        chara,
        ' 씨는 가까운 시일 내 트레이닝장에 자주 올 거다. 확실히 붙잡아!',
      ]);
      if (changed) {
        await taste.say_and_wait([
          '불 쾌! 하지만 ',
          you.get_colored_actual_name(),
          ' 트레이너, 다음에는 잘 생각하고 결정하길 바란다!',
        ]);
      }
    } else {
      await taste.say_and_wait('분 노! 생각하고 다시 와!');
    }
    return ret;
  },

  // [번역 완료] star_drew_all_chara
  star_drew_all_chara: '지명 가능한 캐릭터',

  // [번역 완료] star_drew_bt_filter_image
  star_drew_bt_filter_image: '스탠딩 일러스트',

  // [번역 완료] star_drew_bt_filter_kojo_b
  star_drew_bt_filter_kojo_b: '지하실',

  // [번역 완료] star_drew_bt_filter_kojo_d
  star_drew_bt_filter_kojo_d: '일상',

  // [번역 완료] star_drew_bt_filter_kojo_ed
  star_drew_bt_filter_kojo_ed: '육성',

  // [번역 완료] star_drew_bt_filter_kojo_er
  star_drew_bt_filter_kojo_er: '조교',

  // [번역 완료] star_drew_bt_filter_kojo_l
  star_drew_bt_filter_kojo_l: '연모',

  // [번역 완료] star_drew_bt_filter_kojo_r
  star_drew_bt_filter_kojo_r: '모집',

  // [번역 완료] star_drew_chara_id_input
  star_drew_chara_id_input: '지명할 캐릭터 ID를 입력해 주세요',

  // [번역 완료] star_drew_chara_name_input
  star_drew_chara_name_input: '지명할 캐릭터 이름을 입력해 주세요',

  // [번역 완료] star_drew_duplicate
  async star_drew_duplicate(taste, chara) {
    await taste.say_and_wait([
      '알 림!',
      chara.get_colored_name(),
      ' 씨는 이미 트레이닝장에서 기다리고 있다!',
    ]);
  },

  // [번역 완료] star_drew_filter_image
  star_drew_filter_image: '전용 조교 스탠딩 일러스트',

  // [번역 완료] star_drew_filter_kojo_template
  star_drew_filter_kojo_template: '%KOJO% 대사',

  // [번역 완료] star_drew_filter_template
  star_drew_filter_template: '%FILTERS% 보유 캐릭터',

  // [번역 완료] star_drew_intro
  star_drew_intro(taste) {
    taste.say(
      '공 지! 아직 입단하지 않았지만 재능 있는 아이에 대해, 학원은 실적 있는 트레이너가 직접 지명해 지도하는 것을 허용한다! 단, 모두를 납득시킬 만한 명성이 필요하다!',
    );
    taste.say(
      '주 의! 지명하더라도 상대와는 제대로 처음부터 관계를 쌓아 가길 바란다!',
    );
  },

  // [번역 완료] star_drew_limited
  async star_drew_limited(taste) {
    await taste.say_and_wait(
      '불 가! 당신의 팀에는 이미 충분한 멤버가 있다!',
    );
  },

  // [번역 완료] star_drew_no_one
  async star_drew_no_one(taste) {
    await taste.say_and_wait('의 혹! 해당자 없음!');
  },

  // [번역 완료] star_drew_options
  star_drew_options: ['목록에서 선택', '이름으로 지명', 'ID로 지명', '다시 생각한다'],

  // [번역 완료] star_drew_other_chara
  star_drew_other_chara: '기타 캐릭터',

  // [번역 완료] star_drew_wrong_date
  async star_drew_wrong_date(taste) {
    await taste.say_and_wait('의 혹! 지금은 담당을 모집할 시기가 아니다!');
  },

  // [번역 완료] ur_alternative_reporter
  ur_alternative_reporter: '사회자',

  // [번역 완료] ura_reward
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
        '각 ',
        uma,
        ' 팬 여러분, 안녕하세요! 모두가 기다리던 1년에 한 번뿐인 축제, URA 시상식을 시작하겠습니다!',
      ]);
      await report([
        '예년과 마찬가지로 대회 측은 여러 상을 마련해, 최고의 경기 수준으로 멋진 모습을 보여 준 각 ',
        uma,
        '와(과), 그 뒤에서 뒷받침해 온 트레이너 여러분께 경의를 표합니다!',
      ]);
      if (is_etusko) {
        await report([
          '올해도 저, ',
          etusko.get_colored_actual_name(),
          '이(가) 사회를 맡겠습니다. 잘 부탁드립니다!',
        ]);
      }
      println();
      await report([
        '시상에 들어가기 전에, ',
        year,
        '년 G1에서 빛난 ',
        uma,
        '들을 되돌아보겠습니다!',
      ]);
      println();
      if (typeof uma_list_cb.g1 === 'function') {
        uma_list_cb.g1();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（몇몇 선수의 이름. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀 멤버는 없다）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('다시 한번, 모든 선수의 노력에 감사드립니다!');
      println();
      await report('그럼 바로, 주목할 각 부문의 수상자를 발표하겠습니다!');
      println();
      await report('먼저…… 올해의 《최우수 트레이너상》!');
      println();
      if (typeof uma_list_cb.best_trainer === 'function') {
        uma_list_cb.best_trainer();
        await waitAnyKey();
        await report([
          you.get_colored_actual_name(),
          ' 트레이너의 노력은 누구의 눈에도 분명합니다!',
        ]);
      } else {
        if (typeof uma_list_cb.default_best_trainer === 'string') {
          await report([
            uma_list_cb.default_best_trainer,
            ' 트레이너의 노력은 누구의 눈에도 분명합니다!',
          ]);
        } else {
          await report('올해는 기준을 충족한 후보가 없었습니다……');
          await report('아쉽군요. 내년에는 꼭 수상의 행운이 있기를 기대하겠습니다!');
        }
      }
      println();
      await report('이어서…… 올해의 《최우수 주니어상》!');
      println();
      if (typeof uma_list_cb.junior === 'function') {
        uma_list_cb.junior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（주니어급을 막 마친 선수의 이름과 사진. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀 멤버는 아니다）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report(
        '이 선수가 앞으로도 코스에서 계속 빛나기를 바랍니다!',
      );
      println();
      await report('다음은…… 올해의 《최우수 클래식급상》!');
      println();
      if (typeof uma_list_cb.classic === 'function') {
        uma_list_cb.classic();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（클래식급을 막 마친 선수의 이름과 사진. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀 멤버는 아니다）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('이제 팀의 중핵을 맡을 만한 관록이 느껴지네요!');
      println();
      await report('그리고…… 올해의 《최우수 시니어급상》!');
      println();
      if (typeof uma_list_cb.senior === 'function') {
        uma_list_cb.senior();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（시니어급을 막 마친 선수의 이름과 사진. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀 멤버는 아니다）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('의심할 여지 없는 백전노장의 강자입니다!');
      println();
      await report([
        '마지막입니다! 올해 가장 빠르고, 가장 높고, 가장 강했던 역사의 한순간! 수많은 명마의 행렬에 유일무이한 흔적을 남긴 ',
        uma,
        '……과연 누구일까요?!',
      ]);
      await report(['《연도 대표 ', uma, '》。 이 마지막 영예의 주인공은——']);
      println();
      if (typeof uma_list_cb.uoty === 'function') {
        uma_list_cb.uoty();
        await waitAnyKey();
      } else {
        await printAndWait(
          [
            '（어느 선수의 이름과 사진. 아쉽게도 ',
            you.get_colored_name(),
            '의 팀 멤버는 아니다）',
          ],
          { align: 'center' },
        );
      }
      println();
      await report('지금, 최강이 결정되었습니다!');
      println();
      await report(
        '오늘 찾아와 주셔서 감사합니다. 내년에 다시 뵙겠습니다!',
      );
    };
    f.title = 'URA 시상식';
    return f;
  })(),
};
