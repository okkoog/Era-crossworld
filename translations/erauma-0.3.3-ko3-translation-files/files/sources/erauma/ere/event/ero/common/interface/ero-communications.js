// 번역 작업용 전체 원본 파일. [번역 완료]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/event/ero/common/interface/ero-communications.js
// 대상 함수/속성: EroCommunications
const era = require('#/era-electron');

const sys_get_strength_ratio_in_fight = require('#/system/ero/fight/sys-get-strength-ratio');

const EroLinesCommon = require('#/event/ero/common/interface/ero-lines-common');

const { log_7 } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');

class EroCommunications extends EroLinesCommon {
  /**
   * @param {number} attacker
   * @param {number} defender
   */
  static check_lure_success(attacker, defender) {
    return (
      (!defender || era.get(`love:${defender}`) >= 50) &&
      !era.get(`tcvar:${defender}:发情`) &&
      Math.random() < Math.log(era.get(`abl:${attacker}:甜言蜜语`) + 2) / log_7
    );
  }

  /**
   * @param {number} attacker
   * @param {number} defender
   */
  static check_resist_success(attacker, defender) {
    if (!attacker) {
      const inmon = CharaInmon.get(defender);
      if (inmon.on(plugin_enum.tuna) || inmon.on(plugin_enum.meek)) {
        return true;
      }
    }
    const ratio = sys_get_strength_ratio_in_fight(attacker, defender);
    const dice = ratio >= 1 ? 1 : ratio <= 0 ? 0 : Math.random();
    era.logger.debug(
      `캐릭터 ${attacker} 역공 성공률: ${(ratio * 100).toFixed(2)}%; 주사위: ${(dice * 100).toFixed()}`,
    );
    return dice < ratio;
  }

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async go_on(attacker, defender) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async kiss(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async french_kiss(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async relax(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async lure(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async talk(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  async switch(attacker, defender) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{[success]:boolean}} extra_flag
   */
  async resist(attacker, defender, hook, extra_flag) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async gargle(attacker, defender, hook) {}

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async wipe_body(attacker, defender, hook) {}
}

module.exports = EroCommunications;
