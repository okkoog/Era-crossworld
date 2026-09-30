const attr_enum = {
  speed: 0,
  endurance: 0,
  strength: 0,
  toughness: 0,
  intelligence: 0,
};
Object.keys(attr_enum).forEach((k, i) => (attr_enum[k] = i));

/** @type {string[]} */
const attr_names = [];
attr_names[attr_enum.speed] = '스피드';
attr_names[attr_enum.endurance] = '스태미나';
attr_names[attr_enum.strength] = '파워';
attr_names[attr_enum.toughness] = '근성';
attr_names[attr_enum.intelligence] = '지능';

module.exports = {
  adaptability_names: [
    '잔디',
    '더트',
    '단거리',
    '마일',
    '중거리',
    '장거리',
    '도주',
    '선행',
    '선입',
    '추입',
  ],
  attr_enum,
  attr_names,
  fail_sta_border: {
    intelligence: 0.3, // 30%
    other: 0.5, // 50%
  },
  fumble_border: 0.35,
  fumble_result: {
    fail: {
      attr_down: -5,
      attr_down_again: -10,
      attr_down_times: 1,
      attr_down_times_again: 1,
      like: 0,
      like_fail_again: -2,
      like_success: 4,
      motivate_down: -1,
      ratio: {
        accept_talent: 0.25,
        fail_again: 0.9,
        fail_again_talent: 0.5,
      },
    },
    fumble: {
      attr_down: -10,
      attr_down_again: -10,
      attr_down_times: 3,
      attr_down_times_again: 3,
      like: -2,
      like_fail_again: -4,
      like_success: 6,
      motivate_down: -3,
      ratio: {
        accept_talent: 0.5,
        fail_again: 0.95,
        fail_again_talent: 0.75,
      },
    },
  },
  motivation_names: ['최악', '저조', '보통', '양호', '최상'],
  out_of_train_type: ['육성 완료', '명예의전당'],
  pressure_border: {
    apprehension: 5000,
    depression: 7500,
    limit: 10000,
    unhappy: 2500,
  },
  time_cost: [320, 352, 368, 400, 416],
  train_buff_info: ['훈련 미숙', '', '훈련 능숙◯', '훈련 능숙◎'],
};
