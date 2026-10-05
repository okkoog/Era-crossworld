// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const pregnant_stage_enum = require('#/data/ero/status-const')["pregnant_stage_enum"];
const era = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/sex/ero-others');

const { buff_colors } = require('#/data/color-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');

module.exports = {
  ...ja,

  async join_3p(chara) {
    era.print([
      chara.get_colored_name(),
      '이(가) 상기된 얼굴로 끼어들고 싶어 합니다…… 받아들입니까?',
    ]);
    era.printButton('「마침 잘 왔어」', 1);
    era.printButton('관두자……', 2);
    return (await era.input()) === 1;
  },

  async join_3p_accept(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '이(가) ',
      you.get_colored_name(),
      '의 품속으로 뛰어들었다……',
    ]);
  },

  async join_3p_force(chara, lover, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '이(가) ',
      lover.get_colored_name(),
      '의 동의를 얻은 뒤, ',
      you.get_colored_name(),
      '의 항의를 화려하게 무시했다……',
    ]);
  },

  async join_3p_reject(chara) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 얼굴을 감싸고 떠나갔다……',
    ]);
  },

  get_penis_be_erect: (chara, p_desc) => [
    chara.get_colored_name(),
    '의 ',
    p_desc,
    ' 육봉이 발기했다!',
  ],

  get_nipple_be_erect: (chara, b_desc) => [
    '진한 색의 작은 앵두가 ',
    chara.get_colored_name(),
    '의 ',
    b_desc,
    ' 양쪽 유방 끝에서 고개를 내밀었다……',
  ],

  get_be_lubricated: (chara, part) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '이(가) 젖어버렸다!',
  ],

  get_bleed: (chara, part) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '에서 여전히 피가 흐르고 있다!',
  ],

  get_be_wounded: (chara, part) => [
    chara.get_colored_name(),
    '의 ',
    part,
    '이(가) 찢어져 버렸다!',
  ],

  get_lose_virginity: (chara, is_virgin) => [
    chara.get_colored_name(),
    is_virgin ? '은(는) 처녀를 상실했다!' : '은(는) 동정을 상실했다!',
  ],

  get_orgasm_denial_notification: (chara) => [
    chara.get_colored_name(),
    '의 육봉이 이미 한계에 도달했다……',
  ],

  get_bt_cum_in: (part) => `${part}(으)로 받아낸다`,
  bt_cum_out: '피한다',

  async orgasm_denial(chara, you, part, stop_success, towards_face) {
    if (stop_success) {
      era.print([
        you.get_colored_name(),
        '의 ',
        part,
        '이(가) ',
        chara.get_colored_name(),
        '의 사정 직전인 육봉을 뱉어내자, 뜨거운 정액이 그대로 ',
        you.get_colored_name(),
        '의 ',
        towards_face ? '예쁜 얼굴' : '나신',
        '에 뿜어져 나왔다……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '와(과)의 주도권 싸움에서 패배했다……',
      ]);
    }
  },

  get_zero_stamina: (chara) => [
    chara.get_colored_name(),
    '은(는) 과도한 체력 소모로 인해 혼절했다……',
  ],

  get_lost_mind: (chara) => [
    chara.get_colored_name(),
    '은(는) 정신력 소모로 인해 넋을 잃었다……',
  ],

  async mark_pleasure(chara, level) {
    const desc = [
      '은(는) 강렬한 쾌감에 몸을 떨고 있다……',
      '은(는) 쾌감의 여운을 받아들이며 표정이 풀렸다……',
      '은(는) 강렬한 즐거움에 심신이 타버릴 것만 같다……',
    ];
    await era.printAndWait([chara.get_colored_name(), desc[level - 1]]);
  },

  async mark_meek(chara, you) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait([
        chara.get_colored_name(),
        '와(과) ',
        you.get_colored_name(),
        '은(는) 더욱 일심동체가 되었다……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 더욱 굴복했다……',
      ]);
    }
  },

  async mark_pain(chara, level) {
    const desc = [
      '은(는) 얼굴을 일그러뜨리며 고통을 참고 있다……',
      '은(는) 고통스러운 비명을 질렀다……',
      '은(는) 너무나 큰 고통에 울부짖고 있다……',
    ];
    await era.printAndWait([chara.get_colored_name(), desc[level - 1]]);
  },

  async mark_shame(chara, level) {
    const desc = [
      '은(는) 굴욕감에 얼굴을 붉히고 있다……',
      '은(는) 수치심에 지배당하고 있는 듯하다……',
      '은(는) 완전히 수치심에 지배당했다……',
    ];
    await era.printAndWait([chara.get_colored_name(), desc[level - 1]]);
  },

  async mark_hate(chara, level) {
    if (era.get(`love:${chara.id}`) >= 75) {
      await era.printAndWait('사귀고는 있지만, 조금 심하게 한 것 같다');
    }
    const desc = [
      '은(는) 날카로운 눈빛으로 노려보았다……',
      '은(는) 분노가 서린 표정을 지었다……',
      '은(는) 분노로 얼굴을 일그러뜨리며 낮게 욕설을 내뱉었다……',
    ];
    await era.printAndWait([chara.get_colored_name(), desc[level - 1]]);
  },

  async mark_ero(chara, level, is_new) {
    if (is_new) {
      await era.printAndWait([
        chara.get_colored_name(),
        '의 아랫배에 음문이 나타났다……',
      ]);
    }
    const desc = [
      '음문이 난자의 활동 궤적을 표시하기 시작했다……',
      '음문이 태아의 성장에 맞춰 더욱 화려하게 변했다……',
      '음문이 임신율과 수태 상황을 보여주게 되었다……',
    ];
    await era.printAndWait(desc[level - 1]);
  },

  be_pregnant(mother, father) {
    era.print([
      father.get_colored_name(),
      '이(가) 사정한 후, ',
      mother.get_colored_name(),
      '의 음문이 조금 이상하게 변했다……',
    ]);
  },

  report_preg_in_love: (() => {
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 기쁨에 찬 눈빛으로 아랫배 음문에 나타난 임신 징조를 바라보며, 활기찬 목소리로 ',
          father.get_colored_name(),
          '에게 기쁜 소식을 전했다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 기쁨에 찬 눈빛으로 손에 든 임신 테스트기를 바라보며, 활기찬 목소리로 ',
          father.get_colored_name(),
          '에게 기쁜 소식을 전했다.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          father.get_colored_name(),
          '이(가) 몇 번이고 되물어 확인했지만, 아이는 자신의 혈육이라는 대답을 들었다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          father.get_colored_name(),
          '은(는) 이에 대해 전혀 기억이 없다……',
        ]);
      } else {
        if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
          await era.printAndWait([
            '어떻게 임신했는지에 대한 기억은 전혀 없지만, ',
            mother.get_colored_name(),
            '은(는) 아이의 아버지가 자신이 사랑하는 ',
            father.get_colored_name(),
            '임을 추호도 의심하지 않았다.',
          ]);
        }
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) ',
          mother.get_colored_name(),
          '을(를) 조심스럽게 끌어안으며, 함께 새로운 생명이 잉태된 순간을 축하했다……',
        ]);
      }
    };
    f.title = '잉태';
    return f;
  })(),

  report_preg: (() => {
    const f = async (mother, father, unexpected_pregnant) => {
      if (era.get(`mark:${mother.id}:淫纹`) === 3) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 얼굴이 새하얗게 질린 채 아랫배 음문의 임신 징조를 보며 화장실로 달려가 구토를 했다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 얼굴이 새하얗게 질린 채 손에 든 임신 테스트기를 보며 다시 한번 세면대에 대고 구토했다.',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 자신이 어떻게 임신했는지 전혀 기억이 나지 않는다. 범인이 ',
          father.get_colored_name(),
          '일 리 없다고 믿고 싶지만, 생각해보면 ',
          father.sex,
          '만이 가능성이 있다……',
        ]);
      }
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          '그 후, ',
          mother.get_colored_name(),
          '은(는) 조심스럽게 ',
          father.get_colored_name(),
          '에게 임신 사실을 알렸다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '이(가) 몇 번이고 되물어 확인했지만, 아이는 자신의 혈육이라는 대답뿐이었다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) 전혀 기억이 없음에도 불구하고, 눈물을 흘리는 ',
          mother.get_colored_name(),
          '을(를) 보며 아버지로서의 책임을 지기로 했다……',
        ]);
        if (father.id === 0 && era.get(`cflag:${father.id}:阴道尺寸`) > 0) {
          await era.printAndWait([
            '……사실 ',
            father.get_colored_name(),
            '도 조금은 어머니가 되고 싶었을지도 모른다.',
          ]);
        }
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          '그 후, ',
          mother.get_colored_name(),
          '은(는) 전전긍긍하며 ',
          father.get_colored_name(),
          '에게 임신 사실을 털어놓았다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) ',
          mother.get_colored_name(),
          '의 눈가에 맺힌 눈물을 보았다……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 겁먹은 채로 ',
          father.get_colored_name(),
          '에게 책임을 져달라고 부탁했다……',
        ]);
      } else {
        await era.printAndWait([
          '그 후, ',
          mother.get_colored_name(),
          '은(는) 냉담하게 ',
          father.get_colored_name(),
          '에게 임신 사실을 전했다.',
        ]);
        await era.printAndWait([
          father.get_colored_name(),
          '은(는) ',
          mother.get_colored_name(),
          '의 눈가에 맺힌 눈물을 보았다……',
        ]);
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 분노 섞인 목소리로 ',
          father.get_colored_name(),
          '에게 책임을 질 것을 요구했다……',
        ]);
      }
    };
    f.title = '의외';
    return f;
  })(),

  have_baby: (() => {
    const f = async (mother, father, unexpected_pregnant) => {
      if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 주춤거리며 ',
          father.get_colored_name(),
          '을(를) 쳐다보았다. 아이의 아버지를 어떻게 대해야 할지 모르는 것 같다.',
        ]);
      } else if (era.get(`mark:${mother.id}:同心`) >= 2) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) 주춤거리며 ',
          father.get_colored_name(),
          '을(를) 쳐다보았다. 아이의 아버지를 어떤 눈으로 봐야 할지 혼란스러워 보인다.',
        ]);
      } else {
        await era.printAndWait([
          mother.get_colored_name(),
          '이(가) ',
          father.get_colored_name(),
          '을(를) 바라보는 눈빛은 매우 공허했지만, 아이에게만큼은 애정 어린 미소를 지어 보였다.',
        ]);
      }
    };
    f.title = '새로운 생명';
    return f;
  })(),

  async shop_start(chara, you, awake) {
    if (!awake) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 잠들어 있다. ',
        you.get_colored_name(),
        '이(가) 자신에게 하려는 일을 전혀 눈치채지 못한 채……',
      ]);
    } else if (era.get(`mark:${chara.id}:反抗刻印`)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 차가운 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 노려보았다. 그 눈에는 오직 증오만이 서려 있다……',
      ]);
    } else if (era.get('flag:惩戒力度') >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 도발적인 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 쳐다보았다. "고작 성노예 따위가 무슨 재주를 부리겠어"라는 듯한 태도다……',
      ]);
    } else if (
      era.get(`mark:${chara.id}:淫纹`) ||
      era.get(`mark:${chara.id}:欢愉`)
    ) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 기대에 찬 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 바라보며, 자신에게 일어날 변화를 기다리고 있다……',
      ]);
    } else if (era.get(`mark:${chara.id}:同心`) >= 2) {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 겁먹은 표정으로 ',
        you.get_colored_name(),
        '을(를) 바라보며, 왜 이런 짓을 하는지 이해하지 못하고 있다……',
      ]);
    } else {
      await era.printAndWait([
        chara.get_colored_name(),
        '은(는) 불안한 눈빛으로 ',
        you.get_colored_name(),
        '을(를) 바라보며, 다음에 무슨 일이 일어날지 두려워하고 있다……',
      ]);
    }
  },

  async shop_end_sleep(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 잠든 채로, ',
      you.get_colored_name(),
      '이(가) 자신의 몸에 한 짓을 전혀 모르고 있다……',
    ]);
  },

  async shop_end_hate(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 신체의 변화를 견뎌내며, ',
      you.get_colored_name(),
      '이(가) 자신을 성 장난감처럼 다루는 것에 대해 냉소적인 반응을 보였다……',
    ]);
  },

  async shop_end_pleasure(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 신체의 변화를 느끼며, ',
      you.get_colored_name(),
      '와(과) 함께 쾌락을 즐기고 싶어 견딜 수 없는 듯하다……',
    ]);
  },

  async shop_end_slave(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 보며 눈물을 흘릴 듯한 표정을 지었지만, 언젠가 의식마저 신체의 변화에 침식당할 것이다……',
    ]);
  },

  async shop_end_lover(chara, you) {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 실망스러운 눈빛으로 ',
      you.get_colored_name(),
      '을(를) 바라보았다. ',
      you.get_colored_name(),
      '이(가) 자신의 몸에 만족하지 못한다는 사실에 슬퍼하고 있다……',
    ]);
  },

  after_betrayed_first(chara, you, characteristic, cuckold) {
    if (chara.race > 0) {
      era.print([
        chara.uma_sex_title,
        '답게 코가 예민한 탓일까, ',
        you.get_colored_name(),
        '에게서 풍겨오는 짙은 정액 냄새가 방금 막 다른 이와 관계를 가졌다는 사실을 끊임없이 알리고 있다.',
      ]);
      era.print([
        '냄새를 맡은 ',
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 불충에 대해 ',
        cuckold
          ? '욕정의 감정을 느꼈다……'
          : characteristic >= 0
            ? '분개의 감정을 느꼈다……'
            : '슬픔의 감정을 느꼈다……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '에게서 풍겨오는 짙은 정액 냄새가 방금 막 다른 이와 관계를 가졌다는 사실을 끊임없이 알리고 있다.',
      ]);
      era.print([
        '이 사실을 알아챈 ',
        chara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 불충에 대해 ',
        cuckold
          ? '욕정의 감정을 느꼈다……'
          : characteristic >= 0
            ? '분개의 감정을 느꼈다……'
            : '슬픔의 감정을 느꼈다……',
      ]);
    }
  },

  after_betrayed_second(chara, you, characteristic, cuckold) {
    era.print([
      you.get_colored_name(),
      '은(는) 유혹을 이기지 못하고 다시 한번 ',
      chara.get_colored_name(),
      '을(를) 배신했다.',
    ]);
    era.print(
      '일시적인 성욕 해소의 이면에는 얼마나 많은 감정의 갈등이 뒤엉켜 있는 것일까?',
    );
    era.print([
      chara.race > 0 ? '냄새를 맡은 ' : '이 사실을 알아챈 ',
      chara.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 불충에 대해 ',
      cuckold
        ? '욕정의 감정을 느꼈다……'
        : characteristic >= 0
          ? '분개의 감정을 느꼈다……'
          : '슬픔의 감정을 느꼈다……',
    ]);
  },

  after_betrayed(chara, you, cuckold) {
    if (cuckold) {
      era.print([
        you.get_colored_name(),
        '의 불충함이 ',
        chara.get_colored_name(),
        '을(를) 몹시 슬프게 함과 동시에, 형언할 수 없는 묘한 흥분을 불러일으켰다……',
      ]);
    } else {
      era.print([
        you.get_colored_name(),
        '의 불충함에 ',
        chara.get_colored_name(),
        '은(는) 거센 분노를 느꼈다……',
      ]);
    }
  },

  // [번역 대상] cum_in_womb
  async cum_in_womb(
    mother,
    father,
    is_mother_awake,
    is_father_awake,
    inmon_no_preg,
  ) {
    const talent_palam =
      era.get(`talent:${mother.id}:子宫敏感`) > 0 ||
      era.get(`mark:${mother.id}:欢愉`) >= 2;
    const talent_sex =
      era.get(`talent:${mother.id}:淫乱`) > 0 ||
      era.get(`talent:${mother.id}:榨精成瘾`) > 0;
    const has_lv2_inmon = era.get(`mark:${mother.id}:淫纹`) >= 2;
    let talent_check = talent_palam || talent_sex;
    if (has_lv2_inmon) {
      await era.printAndWait([
        mother.get_colored_name(),
        ' の下腹で、子宮を表すハートの模様がゆっくりと埋まっていく……',
      ]);
    }
    if (
      era.get(`status:${mother.id}:经期`) > 0 ||
      era.get(`cflag:${mother.id}:妊娠阶段`) !== 1 << pregnant_stage_enum.no ||
      era.get(`status:${mother.id}:长效避孕药`) > 0 ||
      era.get(`status:${mother.id}:短效避孕药`) > 0 ||
      inmon_no_preg
    ) {
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            father.get_colored_name(),
            ' の温かな精液が、疼く ',
            mother.get_colored_name(),
            ' の子宮を満たしていく……',
          ]);
          await era.printAndWait([
            mother.get_colored_name(),
            ' は快感に溺れている……',
          ]);
        } else if (era.get('tflag:强奸') === father.id) {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' は屈辱のなかで、',
              mother.sex_code > 0 ? 'ふたなり' : '女性',
              'としての極楽を味わった……',
            ],
            { color: buff_colors[2] },
          );
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              ' は喜びながら、',
              mother.sex_code > 0 ? 'ふたなり' : '女性',
              'としての極楽を味わった……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    } else {
      const love = era.get(`love:${mother.id || father.id}`);
      if (love < 75) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は、出した精液が薄い膜に阻まれていないことに気づいた……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' の放った大量の精子が、無防備な ',
            mother.get_colored_name(),
            ' の卵子へ向かっていく……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、自分が孕むかもしれない事実に恐怖した……',
          ]);
        }
      } else if (love < 90) {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は、出した精液が遮られずに進んでいるのを感じた……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' の放った大量の精子が、防備を解いた ',
            mother.get_colored_name(),
            ' の卵子へ向かっていく……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、自分が孕むかもしれない事実を、ぼんやりと悟った……',
          ]);
        }
      } else {
        if (
          era.get(`status:${mother.id}:反避孕套`) > 0 &&
          era.get(`tcvar:${father.id}:避孕套`) > 0 &&
          is_father_awake
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            ' は、出した精液が遮られずに進んでいることに驚いた……',
          ]);
        } else {
          await era.printAndWait([
            father.get_colored_name(),
            ' の放った大量の精子が、妊娠を望む ',
            mother.get_colored_name(),
            ' の卵子へ向かっていく……',
          ]);
        }
        if (is_mother_awake && !talent_check) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、母になる感覚を喜んで味わっている……',
          ]);
        }
      }
      if (is_mother_awake && talent_check) {
        if (talent_palam) {
          await era.printAndWait([
            mother.get_colored_name(),
            ' は、疼く子宮が精液で満たされる快感に溺れ、妊娠の可能性など顧みなかった……',
          ]);
        } else {
          await era.printAndWait(
            [
              mother.get_colored_name(),
              era.get('tflag:强奸') !== father.id
                ? ' は屈辱のなかで、'
                : ' は喜びながら、',
              mother.sex_code > 0 ? 'ふたなり' : '女性',
              'としての極楽を味わった……',
            ],
            { color: buff_colors[2] },
          );
        }
      }
    }
  },
};
