const era = require('#/era-electron');

const CharaTitles = require('#/data/chara-titles');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param {number} cid
 * @param {{c:string,n:string}} titles
 */
function sys_add_titles(cid, ...titles) {
  if (CharaTitles.get(cid).push(...titles)) {
    era.print([get_chara_talk(cid).get_colored_name(), '은(는) 새 칭호를 얻었다!']);
    return true;
  }
  return false;
}

module.exports = sys_add_titles;
