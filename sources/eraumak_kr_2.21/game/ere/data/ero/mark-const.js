const slavery_enum = {
  milk: 0,
  pregnant: 0,
  worker: 0,
  inherit: 0,
  furniture: 0,
  assistant: 0,
};
Object.keys(slavery_enum).forEach((e, i) => (slavery_enum[e] = i + 1));

const slavery_titles = [];
slavery_titles[0] = '성욕처리용 암컷';
slavery_titles[slavery_enum.milk] = '젖짜기용 암컷';
slavery_titles[slavery_enum.pregnant] = '번식용 암컷';
slavery_titles[slavery_enum.worker] = '헌금용 암컷';
slavery_titles[slavery_enum.inherit] = '상속용 암컷';
slavery_titles[slavery_enum.furniture] = '베개용 암컷';
slavery_titles[slavery_enum.assistant] = '동침용 암컷';

const slavery_options = [];
slavery_options[0] = '없음';
slavery_options[slavery_enum.milk] = '젖노예';
slavery_options[slavery_enum.pregnant] = '임신노예';
slavery_options[slavery_enum.worker] = '헌금노예';
slavery_options[slavery_enum.inherit] = '상속노예';
slavery_options[slavery_enum.furniture] = '베개노예';
slavery_options[slavery_enum.assistant] = '조수노예';

const slavery_descriptions = [];
slavery_descriptions[0] = '-';
slavery_descriptions[slavery_enum.milk] = '매주 모유 한 잔을 제공한다.';
slavery_descriptions[slavery_enum.pregnant] =
  '임신하지 않았을 때는 항상 위험기에 있으며, 임신 확률 +10%, 임신 속도 +100%.';
slavery_descriptions[slavery_enum.worker] = '매주 일정량의 우마코인을 제공.';
slavery_descriptions[slavery_enum.inherit] = '매주 일정량의 상속 인자를 제공.';
slavery_descriptions[slavery_enum.furniture] =
  '침대 파트너일 때 모든 수면 강간 및 납치를 차단하며, 휴식 시 체력 회복을 향상시킴.';
slavery_descriptions[slavery_enum.assistant] =
  '기본 조수로서 다른 캐릭터와의 성관계에 참여하도록 소환할 수 있음. 하나만 설정 가능.';

const mark_enum = { pleasure: 0, ero: 1, meek: 2, pain: 3, shame: 4, hate: 5 };

module.exports = {
  inmon_limit: [0, 6, 16, 36],
  mark_enum,
  slavery_descriptions,
  slavery_enum,
  slavery_options,
  slavery_titles,
};
