const { part_enum } = require('#/data/ero/part-const');

const item_enum = {
  // 개그볼
  gag: 0,
  // 클립（乳樱）
  clamps: 0,
  // 전기충격기（乳樱）
  electric_stunner: 0,
  // 吸奶器
  milk_pump: 0,
  // 바이브레이터（乳核樱菊）
  love_eggs: 0,
  // 딜도（樱菊）
  dildo: 0,
  // 애널플러그
  butt_plug: 0,
  // 애널비즈
  anal_beads: 0,
  // 안대
  blindfold: 0,
  // 목줄
  collar: 0,
  // 전신거울
  mirror: 0,
  // 오나홀
  artificial_virgin: 0,
};
Object.keys(item_enum).forEach((e, i) => (item_enum[e] = i));

const item_names = [];
item_names[item_enum.anal_beads] = '애널비즈';
item_names[item_enum.blindfold] = '안대';
item_names[item_enum.butt_plug] = '애널플러그';
item_names[item_enum.clamps] = '클립';
item_names[item_enum.collar] = '목줄';
item_names[item_enum.dildo] = '딜도';
item_names[item_enum.electric_stunner] = '전기충격기';
item_names[item_enum.gag] = '개그볼';
item_names[item_enum.love_eggs] = '바이브레이터';
item_names[item_enum.milk_pump] = '착유기';
item_names[item_enum.mirror] = '전신거울';
item_names[item_enum.artificial_virgin] = '오나홀';

const item_actions = {};
item_actions[item_enum.anal_beads] = '塞入';
item_actions[item_enum.butt_plug] = '塞上';
item_actions[item_enum.clamps] = '夹上';
item_actions[item_enum.dildo] = '삽입';
item_actions[item_enum.gag] = '塞上';
item_actions[item_enum.love_eggs] = {
  [part_enum.anal]: '塞入',
  [part_enum.breast]: '贴上',
  [part_enum.clitoris]: '贴上',
  [part_enum.virgin]: '塞入',
};
item_actions[item_enum.milk_pump] = '装上';
item_actions[item_enum.artificial_virgin] = '套上';

const medicine_enum = {
  // 사후피임약
  anti_p_l: 0,
  // 경구피임약
  anti_p_s: 0,
  // 모유약제
  drug_m: 0,
  // 배란유도제
  drug_p: 0,
  // 펄롱K
  fron_k: 0,
  // 펄롱P
  fron_p: 0,
  // 모유
  milk_h: 0,
  // 마유
  milk_u: 0,
  // 高潮阻断剂
  stop_o: 0,
  // 슈퍼우마뾰이Z
  super_z: 0,
  // 우마뾰이S
  uma_s: 0,
  // 우마뾰이Z
  uma_z: 0,
};
Object.keys(medicine_enum).forEach((e, i) => (medicine_enum[e] = i));

const medicine_names = [];
medicine_names[medicine_enum.uma_z] = '우마뾰이Z';
medicine_names[medicine_enum.uma_s] = '우마뾰이S';
medicine_names[medicine_enum.super_z] = '슈퍼우마뾰이Z';
medicine_names[medicine_enum.fron_k] = '펄롱K';
medicine_names[medicine_enum.fron_p] = '펄롱P';
medicine_names[medicine_enum.drug_m] = '모유약제';
medicine_names[medicine_enum.drug_p] = '배란유도제';
medicine_names[medicine_enum.anti_p_s] = '경구피임약';
medicine_names[medicine_enum.anti_p_l] = '사후피임약';
medicine_names[medicine_enum.milk_h] = '모유';
medicine_names[medicine_enum.milk_u] = '마유';
medicine_names[medicine_enum.stop_o] = '절정차단약';

module.exports = {
  /**
   * @param {number} item
   * @param {number} part
   * @returns {string}
   */
  get_item_action(item, part) {
    let ret = item_actions[item];
    if (typeof ret === 'object') {
      ret = ret[part];
    }
    return ret;
  },
  item_enum,
  item_names,
  medicine_enum,
  medicine_names,
  tequip_parts: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    '목줄',
    '안대',
  ],
};
