const { palam2juel } = require('#/data/ero/orgasm-const');

const shop_result_type_enum = { hate: 0, pleasure: 0, slave: 0, lover: 0 };
Object.keys(shop_result_type_enum).forEach(
  (k, i) => (shop_result_type_enum[k] = i + 1),
);

module.exports = {
  base_emotion_juel: 80 * palam2juel,
  base_juel_reward: 100 * palam2juel,
  base_skill_limit: 5,
  base_skill_price: 660,
  mark_prices: [0, 1000, 2000, 3500],
  shop_list: [
    '구강쾌감',
    '가슴쾌감',
    '신체쾌감',
    '음경쾌감',
    '클리쾌감',
    '질구쾌감',
    '항문쾌감',
    '가학쾌감',
    '피학쾌감',
  ],
  shop_result_type_enum,
  talent_button_names_and_check_dict: {
    poisoned: {
      down: '특성 제거',
      down_delta: {
        1: -1,
      },
      max: 1,
      metrics: {
        0: 50,
      },
      min: 0,
      up: '특성 획득',
      up_delta: {
        0: 1,
      },
    },
    sm: {
      down: '특성 제거',
      down_delta: {
        1: -1,
      },
      max: 1,
      metrics: {
        0: 20,
      },
      min: 0,
      up: '특성 획득',
      up_delta: {
        0: 1,
      },
    },
    trained: {
      down: '감도 감소',
      down_delta: {
        0: -4,
        1: -1,
        2: -1,
      },
      max: 2,
      metrics: {
        0: 15,
        1: 30,
      },
      min: -4,
      up: '감도 상승',
      up_delta: {
        '-4': 4,
        0: 1,
        1: 1,
      },
    },
  },
};
