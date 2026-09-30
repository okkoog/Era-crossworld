const vp_status_enum = {
  // 俺寻思（训练员视角）
  i_think: -2,
  // 무자각
  dont_know: -1,
  // 非处女
  no: 0,
  // 처녀
  virgin: 1,
  // 재생처녀
  reborn: 2,
};
Object.keys(vp_status_enum).forEach((k, i) => (vp_status_enum[k] = i - 2));

const penis_state = {
  /** 训练员视角角色的童贞情况 */
  chara: {},
  /** 训练员视角自己的童贞情况 */
  player: {},
};
penis_state.chara[vp_status_enum.i_think] =
  penis_state.chara[vp_status_enum.virgin] =
  penis_state.player[vp_status_enum.dont_know] =
  penis_state.player[vp_status_enum.virgin] =
    '동정';
penis_state.chara[vp_status_enum.dont_know] = '무자각비동정';

const virgin_state = {
  /** 训练员视角角色的处女情况 */
  chara: {},
  /** 训练员视角自己的处女情况 */
  player: {},
};
virgin_state.chara[vp_status_enum.i_think] =
  virgin_state.chara[vp_status_enum.virgin] =
  virgin_state.player[vp_status_enum.dont_know] =
  virgin_state.player[vp_status_enum.virgin] =
    '처녀';
virgin_state.chara[vp_status_enum.dont_know] = '무자각비처녀';
virgin_state.chara[vp_status_enum.reborn] = virgin_state.player[
  vp_status_enum.reborn
] = '재생처녀';

const pregnant_stage_enum = {
  resume: 0,
  no: 0,
  embryo: 0,
  fetal: 0,
  late: 0,
  pre_birth: 0,
};
Object.keys(pregnant_stage_enum).forEach((e, i) => {
  pregnant_stage_enum[e] = i;
});

const pregnant_stage_names = {};
pregnant_stage_names[1 << pregnant_stage_enum.resume] =
  '아기가 무사히 태어났으니 이제 몸 관리에 집중할 때다.';
pregnant_stage_names[1 << pregnant_stage_enum.no] =
  '아기방이 아빠를 기다리고 있어요❤️';
pregnant_stage_names[1 << pregnant_stage_enum.embryo] = '작은 새 생명이 자라고 있다.';
pregnant_stage_names[1 << pregnant_stage_enum.fetal] =
  '태반이 완전히 형성되었다. 엄마와 아기는 양질의 단백질을 섭취해야 한다.';
pregnant_stage_names[1 << pregnant_stage_enum.late] =
  '태아가 마지막 성숙기를 맞이하고 있으며, 배가 이미 많이 불룩해졌다.';
pregnant_stage_names[1 << pregnant_stage_enum.pre_birth] =
  '생명의 기적을 맞이할 순간이 곧 다가온다. 준비를 단단히 해야 한다.';

/*** @type {Record<string,Record>} */
const trained_talent_names = {};
[
  { '-4': '구강둔감', 0: '구강 정상', 1: '구강민감', 2: '음란한입' },
  {
    '-4': '가슴둔감',
    0: '가슴 정상',
    1: '가슴민감',
    2: '음란한가슴',
  },
  {
    '-4': '신체둔감',
    0: '신체 정상',
    1: '신체민감',
    2: '음란한몸',
  },
  {
    '-4': '클리둔감',
    0: '클리 정상',
    1: '클리민감',
    2: '음란한클리토리스',
  },
  {
    '-4': '질둔감',
    0: '질 정상',
    1: '질민감',
    2: '음란한자궁',
  },
  {
    '-4': '엉덩이둔감',
    0: '엉덩이 정상',
    1: '엉덩이민감',
    2: '음란한엉덩이',
  },
  {
    '-4': '음경둔감',
    0: '음경 정상',
    1: '음경민감',
    2: '조루',
  },
].forEach((e) => (trained_talent_names[e[2]] = e));

module.exports = {
  breast_size: {
    AA: '귀여운 AA컵',
    A: '아담한 A컵',
    B: '작고 예쁜 B컵',
    C: '사랑스러운 C컵',
    D: '부풀어 오른 D컵',
    E: '풍만한 E컵',
    F: '풍성한 F컵',
    G: '거대한 G컵',
  },
  chara_desc: ['소심한', '겁쟁이', '성실한', '평범한', '자존심 강한', '고집스러운', '열혈'],
  chara_full_desc: [
    '트레이닝과 조교 효과가 약간 상승',
    '레이스 중 출발 지연 가능성이 약간 감소하고, 막혔을 때 돌파할 확률이 약간 상승하지만, 참가 인원이 많을 경우 능력이 약간 하락',
    '레이스 중 스킬 재사용 대기시간이 약간 감소하고, 트레이닝 효과가 약간 상승',
    '레이스 중 초조해질 가능성이 약간 감소하고, 스킬 사용 확률이 약간 상승',
    '레이스 중 능력이 약간 상승하지만, 레이스에서 패배했을 때의 압박감이 약간 증가',
    '강적을 상대할 때 레이스 능력이 약간 상승하며, 의욕의 영향력이 약간 증가',
    '강적을 상대할 때 레이스 능력이 상승하지만, 강적이 없는 레이스에서는 레이스 능력이 약간 하락',
  ],
  child_title: { 0: '딸', 1: '아들', 10: '딸?' },
  growth_stage: ['유년기', '성장기', '본격기'],
  hair_desc: [
    '드문드문한 솜털',
    '정돈된 짧은 털',
    '빽빽한 털',
    '엉킨 곱슬털',
    '거친 털',
  ],
  human_growth_stage: ['유년', '소년', '청년'],
  human_sex_title: {
    0: '여성',
    1: '남성',
    10: '여성?',
  },
  penis_colors: ['분홍색', '보라색', '짙은 검은색'],
  penis_desc: ['', '초라한', '빈약한', '건장한', '사나운', '무서운'],
  penis_state,
  player_sex_title: {
    0: '여사',
    1: '선생님',
    10: '여사……?',
  },
  pregnant_stage_enum,
  pregnant_stage_names,
  // SM时的称呼
  sex_slave_title: { 0: '암컷', 1: '수컷', 10: '후타' },
  sex_title: { 0: '우마무스메', 1: '우마무스코', 10: '우마무스메?' },
  skin_desc: ['순백색', '건강한 색', '붉은색', '황색'],
  trained_talent_names,
  unexpected_pregnant_enum: {
    father_sleep: -1,
    mother_sleep: 1,
    no: 0,
  },
  virgin_state,
  vp_status_enum,
};
