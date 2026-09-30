const era = require('#/era-electron');

/** @param {number} chara_id */
function sys_change_hair(chara_id) {
  switch (era.get(`cstr:${chara_id}:뒷머리`)) {
    default:
    case '단발':
      era.set(`cflag:${chara_id}:머리길이`, 0);
      break;
    case '양갈래':
    case '헤어번':
    case '사이드테일':
    case '볼륨 양갈래':
    case '날개형':
    case '더블 헤어번':
      era.set(`cflag:${chara_id}:머리길이`, 1);
      break;
    case '긴 생머리':
    case '하이 포니테일':
    case '브레이드':
    case '더블 브레이드':
    case '하이 포니테일+긴 생머리':
      era.set(`cflag:${chara_id}:머리길이`, 2);
  }
}

module.exports = sys_change_hair;
