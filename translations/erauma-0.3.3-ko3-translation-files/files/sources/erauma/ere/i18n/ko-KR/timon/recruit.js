/**
 * Korean port of already-translated EraUmaK 2.21 recruitment text.
 */
const era = require('#/era-electron');

module.exports = {
  /** @param {CharaTalk} chara */
  get_check_message: (chara) => [
    '트레이너와 ',
    chara.uma_sex_title,
    '의 계약은 양자의 일생에 영향을 미치는 중대한 것입니다. 정말 ',
    chara.get_colored_name(),
    '을(를) 영입하시겠습니까?',
  ],
  /** @param {CharaTalk} chara */
  get_check_no_msg(chara) {
    return [
      chara.get_colored_name(),
      '을(를) 모집하고 싶었지만 그만뒀다...',
    ];
  },
  /** @param {CharaTalk} chara @param {CharaTalk} you */
  async rec(chara, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      chara.get_colored_name(),
      '을(를) 적극적으로 영입하려고 시도했다...',
    ]);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 신중히 생각한 끝에 고개를 끄덕이며 수락했다!',
    ]);
  },
  /** @param {CharaTalk} chara */
  async rec_end(chara) {
    await era.printAndWait([chara.get_colored_name(), '은(는) 팀에 합류했다!']);
  },
};
