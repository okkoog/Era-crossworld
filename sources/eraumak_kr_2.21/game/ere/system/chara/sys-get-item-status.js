const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

/**
 * @param {number} chara_id
 * @param {*[]} status_list
 */
function sys_get_item_status(chara_id, status_list) {
  if (era.get(`status:${chara_id}:우마뾰이Z`)) {
    status_list.push({ color: buff_colors[2], content: '우마뾰이Z' });
  } else if (era.get(`status:${chara_id}:펄롱K`)) {
    status_list.push({ color: buff_colors[2], content: '펄롱K' });
  } else if (era.get(`status:${chara_id}:펄롱P`)) {
    status_list.push({ color: buff_colors[2], content: '펄롱P' });
  } else if (era.get(`status:${chara_id}:슈퍼우마뾰이Z`)) {
    status_list.push({ color: buff_colors[2], content: '슈퍼우마뾰이Z' });
  }
}

module.exports = sys_get_item_status;
