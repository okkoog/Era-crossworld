/**
 * @file 조교 지문 - SM 계열
 * @author 黑衣剑士-星爆气流斩准备就绪
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const EroSm = require('#/event/ero/common/interface/ero-sm');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { part_enum } = require('#/data/ero/part-const');

class EroNormalSm extends EroSm {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async insult(attacker, defender, hook) {
    const talk_arr = [];
    if (era.get('tflag:강간') === defender.id) {
      talk_arr.push('쓰레기! 강간범! 죽어버려!');
    }
    if (era.get(`talent:${attacker.id}:소악마`)) {
      talk_arr.push('허접~ 허접~');
    }
    if (era.get(`talent:${attacker.id}:도S`)) {
      talk_arr.push(
        `멍청이! 무능한 ${defender.get_sex_slave_title()}! 박히고 싶어 안달 난 변태 자식!`,
      );
    }
    if (talk_arr.length === 0) {
      talk_arr.push(`그렇게 매도당하고 싶은 거냐, ${defender.get_sex_slave_title()}?`);
    }
    await attacker.say_and_wait(get_random_entry(talk_arr));
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_insult(attacker, defender, hook) {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
        return;
      }
    }
    await this.insult(defender, attacker, hook);
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hit_anal(attacker, defender, hook) {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hit_breast(attacker, defender, hook) {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  }

  /**
   * @author 黑衣剑士-星爆气流斩准备就绪
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  // eslint-disable-next-line no-unused-vars
  async hit_face_by_penis(attacker, defender, hook) {
    if (attacker.id > 0) {
      await defender.print_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '에게 머리카락을 붙잡혔다. 자신의 힘으로는 도저히 저항할 수 없음을 깨닫고, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 가랑이 사이에서 흉하게 고개를 치켜든 페니스를 바라보며 ',
        defender.get_colored_name(),
        '은(는) 불길한 예감이 들기 시작했다.',
      ]);
      await attacker.say_and_wait(
        `${sys_get_callname(
          attacker.id,
          defender.id,
        )}~ 내 냄새를 똑똑히 기억해 두라고~`,
      );
      await defender.print_and_wait([
        '저항하지 못한 채 뺨을 때리는 듯한 감촉이 전해졌고, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 페니스에서 풍기는 지독한 냄새에 ',
        defender.get_colored_name(),
        '은(는) 자신도 모르게 굴복하고 싶어졌다.',
      ]);
      await defender.print_and_wait([
        '얼굴에 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 성기 자국을 남긴 채, ',
        defender.get_colored_name(),
        '은(는) 얼굴을 치켜들고 다음 매가 날아오기를 기다리고 있다.',
      ]);
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 머리카락을 쥐고, ',
        attacker.get_colored_name(),
        `은(는) 강압적으로 자신의 성기를 ${defender.sex}의 얼굴에 들이밀었다. 자신의 성기에 유린당하는 ${defender.sex}의 얼굴을 보며 `,
        attacker.get_colored_name(),
        '은(는) 미소를 지었다.',
      ]);
      await defender.say_and_wait('으으윽...!!!');
      await attacker.print_and_wait([
        '수컷의 냄새가 물씬 풍기는 페니스에 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 코가 쉴 새 없이 움찔거렸다. ',
        attacker.get_colored_name(),
        '이(가) ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 머리카락을 잡고 허리를 흔들기 시작하자, 성기와 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 매끄러운 뺨이 부딪히며 음란한 소리를 내었고, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 눈동자 또한 몽롱하게 풀리기 시작했다.',
      ]);
    }
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_hit_face(attacker, defender, hook) {
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   */
  async ask_virgin_foot_job(attacker, defender, hook) {
    if (hook.arg) {
      if (
        await ask_action(
          attacker.id,
          defender.id,
          part_enum.clitoris,
          part_enum.foot,
        )
      ) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
    }
  }
}

module.exports = EroNormalSm;