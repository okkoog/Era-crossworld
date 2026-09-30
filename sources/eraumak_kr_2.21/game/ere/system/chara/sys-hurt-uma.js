const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

/**
 * @param {number} cid
 * @param {number} num
 * @param {boolean} [shown=true]
 */
function sys_hurt_uma(cid, num, shown = true) {
  const inmon = CharaInmon.get(cid);
  if (
    !inmon.on(plugin_enum.no_pain) &&
    !inmon.on(plugin_enum.no_tired) &&
    !inmon.on(plugin_enum.no_preg) &&
    era.get('flag:부상가능성') > 0 &&
    num > 0
  ) {
    const a = era.add(`status:${cid}:부상`, num),
      tired = era.get(`status:${cid}:피로`);
    if (tired > 0) {
      era.add(`status:${cid}:부상`, 2 * tired);
      era.set(`status:${cid}:피로`, 0);
    }

    if (shown) {
      if (a > num) {
        era.print([
          get_chara_talk(cid).get_colored_name(),
          '은(는) 부상이 악화됐다!',
        ]);
      } else if (tired > 0) {
        era.print([
          get_chara_talk(cid).get_colored_name(),
          '은(는) 지쳐서 더 심하게 다쳤다!',
        ]);
      } else {
        era.print([get_chara_talk(cid).get_colored_name(), '은(는) 부상을 입었다!']);
      }
    }
  }
}

module.exports = sys_hurt_uma;
