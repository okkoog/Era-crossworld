const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { attr_enum } = require('#/data/train-const');

/**
 * @param {CharaTalk} chara
 * @param {number} attr
 * @param {boolean} is_fumble
 */
async function print_fail_info_in_train(chara, attr, is_fumble) {
  if (attr === attr_enum.intelligence) {
    await era.printAndWait([
      '이런! ',
      chara.get_colored_name(),
      `은(는) ${is_fumble ? '기절했' : '잠들었'}다!`,
    ]);
  } else {
    const buffer = [];
    switch (attr) {
      case attr_enum.speed:
        buffer.push('미끄러졌다', '바닥에 넘어졌다', '기력이 다했다');
        break;
      case attr_enum.endurance:
        buffer.push('경련이 일어났다');
        break;
      case attr_enum.strength:
        buffer.push('눈에 진흙이 들어갔다', '넘어졌다', '샌드백에 반격당했다');
        break;
      case attr_enum.toughness:
        buffer.push('기력이 다했다', '허리를 삐었다', '굴러떨어졌다');
    }
    await era.printAndWait([
      '이런!',
      chara.get_colored_name(),
      '은(는) ',
      get_random_entry(buffer),
      '!',
    ]);
  }
}
module.exports = print_fail_info_in_train;
