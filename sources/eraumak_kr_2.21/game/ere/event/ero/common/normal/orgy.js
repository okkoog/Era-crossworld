/**
 * @file 조교 지문 - 난교(오기) 계열
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const EroOrgy = require('#/event/ero/common/interface/ero-orgy');

const { get_random_entry } = require('#/utils/list-utils');

const { motion_enum, towards_enum } = require('#/data/ero/part-const');
const { penis_desc } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {CharaTalk} supporter
 * @param {HookArg} hook
 */
async function common_ask_spit_roast(attacker, defender, supporter, hook) {
  const part_name = hook.hook === ero_hooks.ask_spit_roast ? '보지' : '애널';
  if (hook.arg) {
    const motion = era.get(`tcvar:${attacker}:체위`) === motion_enum.rev;
    const towards = era.get(`tcvar:${attacker}:방향`) === towards_enum.right;
    await era.printAndWait([
      attacker.get_colored_name(),
      (motion ^ towards) > 0 ? '이(가) 다리를 벌리고' : '이(가) 엎드린 채로',
      ' 엉덩이를 흔들며, ',
      defender.get_colored_name(),
      '에게 자신의 ',
      part_name,
      '을(를) 삽입해달라고 조르면서, 탐욕스럽게 ',
      supporter.get_colored_name(),
      '의 성기를 입에 물었다……',
    ]);
  } else {
    await era.printAndWait([
      defender.get_colored_name(),
      ' 와(과) ',
      supporter.get_colored_name(),
      ' 은(는) 함께 ',
      attacker.get_colored_name(),
      '의 입과 ',
      part_name,
      '을(를) 끊임없이 공격하고 있다……',
    ]);
    await era.printAndWait([
      '아래에서 느껴지는 쾌감과 입안을 가득 채운 성기의 숨 막히는 충격에 ',
      attacker.get_colored_name(),
      '의 뇌 속은 이미 성기 생각밖에 남지 않게 되었다……',
    ]);
  }
}

/**
 * @param {CharaTalk} attacker
 * @param {CharaTalk} defender
 * @param {CharaTalk} supporter
 * @param {HookArg} hook
 */
async function common_spit_roast(attacker, defender, supporter, hook) {
  const part_name = hook.hook === ero_hooks.spit_roast ? '보지' : '애널';
  if (hook.arg) {
    await era.printAndWait([
      defender.get_colored_name(),
      ' 은(는) ',
      attacker.get_colored_name(),
      ' 와(과) ',
      supporter.get_colored_name(),
      '에게 단번에 붙잡혔다.',
    ]);
    await era.printAndWait([
      '두 사람은 ',
      defender.get_colored_name(),
      '의 기분은 전혀 고려하지 않은 채,',
    ]);
    await era.printAndWait([
      '그저 앞뒤에서 흥분으로 빳빳하게 일어선 성기를 ',
      defender.get_colored_name(),
      '의 ',
      part_name,
      '와 입속에 찔러넣고 격렬하게 추삽질하기 시작했다……',
    ]);
  } else {
    await era.printAndWait([
      attacker.get_colored_name(),
      ' 와(과) ',
      supporter.get_colored_name(),
      ' 은(는) 함께 끊임없이 ',
      defender.get_colored_name(),
      '의 ',
      part_name,
      '와 입을 유린하고 있다.',
    ]);
    await era.printAndWait([
      '아래에서 느껴지는 쾌감과 입안의 성기가 주는 숨 막히는 충격 때문에 ',
      defender.get_colored_name(),
      '의 머릿속은 이미 성기로 가득 차 버렸다……',
    ]);
  }
}

class EroNormalOrgy extends EroOrgy {
  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_blow_job(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        attacker.get_colored_name(),
        '이(가) 다리를 벌리자 ',
        penis_desc[get_penis_size(attacker.id)],
        ' 크기의 성기가 당당하게 고개를 쳐들었고, ',
        defender.get_colored_name(),
        ' 와(과) ',
        supporter.get_colored_name(),
        ' 은(는) ',
        attacker.get_colored_name(),
        '의 신호에 맞춰 입을 벌리고 다가갔다……',
      ]);
    } else {
      await era.printAndWait([
        attacker.get_colored_name(),
        '의 지시에 따라 ',
        defender.get_colored_name(),
        ' 와(과) ',
        supporter.get_colored_name(),
        ' 은(는) 번갈아 가며 성기를 입으로 봉사하고 있다……',
      ]);
    }
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_fuck(attacker, defender, supporter, hook) {
    const buffer = [];
    if (hook.arg) {
      buffer.push(
        async () => {
          await era.printAndWait([
            attacker.get_colored_name(),
            ' 은(는) 다리를 크게 벌려 ',
            defender.get_colored_name(),
            ' 와(과) ',
            supporter.get_colored_name(),
            '에게 보지를 보여주며, 두 사람의 빳빳한 성기를 보며 입술을 핥았다.',
          ]);
          await era.printAndWait([
            attacker.get_colored_name(),
            '의 노골적인 유혹에 ',
            defender.get_colored_name(),
            ' 와(과) ',
            supporter.get_colored_name(),
            ' 은(는) 참지 못하고 ',
            attacker.get_colored_name(),
            '에게 달려들어 유혹적인 보지에 번갈아 가며 추삽질을 시작했다……',
          ]);
        },
        async () => {
          const motion = era.get(`tcvar:${attacker}:체위`) === motion_enum.rev;
          const towards =
            era.get(`tcvar:${attacker}:방향`) === towards_enum.right;
          await era.printAndWait([
            attacker.get_colored_name(),
            (motion ^ towards) > 0 ? '이(가) 다리를 벌리고' : '이(가) 엎드린 채로',
            ' 엉덩이를 흔들며, ',
            defender.get_colored_name(),
            ' 와(과) ',
            supporter.get_colored_name(),
            '에게 교대로 자신의 깊은 곳을 유린해달라고 청했다.',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          const defender_penis = get_penis_size(defender.id),
            supporter_penis = get_penis_size(supporter.id);
          await era.printAndWait([
            attacker.get_colored_name(),
            ' 은(는) ',
            defender.get_colored_name(),
            ' 와(과) ',
            supporter.get_colored_name(),
            ' 사이에 끼어, ',
            ...(defender_penis === supporter_penis
              ? ['두 자루의 ', penis_desc[defender_penis], ' 모양']
              : [
                  penis_desc[defender_penis],
                  ' 와(과) ',
                  penis_desc[supporter_penis],
                  ' ',
                ]),
            '의 성기를 번갈아 가며 음탕한 보지로 삼켜내고 있다.',
          ]);
          await era.printAndWait([
            '애액이 세 사람의 하반신을 엉망진창으로 적셨고, 간간이 ',
            attacker.get_colored_name(),
            '의 교성이 울려 퍼졌다……',
          ]);
        },
        async () => {
          await era.printAndWait([
            defender.get_colored_name(),
            ' 와(과) ',
            supporter.get_colored_name(),
            '의 서로 다른 성기와 삽입 방식,',
          ]);
          await era.printAndWait(['그리고 자신이 두 사람에게 연달아 범해지고 있다는 배덕감이,']);
          await era.printAndWait([
            attacker.get_colored_name(),
            '에게 삽입될 때마다 평소와는 다른 비정상적인 쾌감을 안겨주었다.',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_double_penetration(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 은(는) 기승위로 ',
        defender.get_colored_name(),
        ' 를 보지 깊숙이 받아들인 뒤, ',
        supporter.get_colored_name(),
        '에게 자신의 항문에도 삽입해달라고 신호를 보냈다……',
      ]);
    } else {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 와(과) ',
        supporter.get_colored_name(),
        ' 은(는) 함께 ',
        attacker.get_colored_name(),
        '의 앞뒤 구멍을 끊임없이 공격하고 있다.',
      ]);
      await era.printAndWait(
        '이중의 쾌감과 동시에 두 사람에게 범해지고 있다는 배덕감이,',
      );
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 로 하여금 삽입될 때마다 절로 비명을 지르게 만들었다……',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_spit_roast(attacker, defender, supporter, hook) {
    await common_ask_spit_roast(attacker, defender, supporter, hook);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async ask_spit_roast_anal_sex(attacker, defender, supporter, hook) {
    await common_ask_spit_roast(attacker, defender, supporter, hook);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async fuck_69(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 은(는) 침대에 누워 ',
        supporter.get_colored_name(),
        ' 와(과) 서로의 ',
        ['보지', '성기와 보지', '보지와 성기', '성기'][
          2 * !!get_penis_size(defender.id) + !!get_penis_size(supporter.id)
        ],
        '을(를) 핥고 있으며,',
      ]);
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 은(는) 흥분해서 부풀어 오른 성기를 참지 못하고 ',
        defender.get_colored_name(),
        '의 보지에 처박았다……',
      ]);
    } else {
      await era.printAndWait([
        defender.get_colored_name(),
        '의 보지에서 튀긴 애액이, ',
        supporter.get_colored_name(),
        '이(가) 열심히 ',
        attacker.get_colored_name(),
        '의 성기가 삽입되는 곳을 핥고 있는 얼굴을 적셨다.',
      ]);
      await era.printAndWait([
        supporter.get_colored_name(),
        ' 역시 ',
        defender.get_colored_name(),
        '의 입에 봉사 받으며 가냘픈 신음을 내뱉고 있다……',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async double_fuck(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 은(는) ',
        attacker.get_colored_name(),
        ' 와(과) ',
        supporter.get_colored_name(),
        '에게 억눌렸다.',
      ]);
      await era.printAndWait([
        '두 사람은 ',
        defender.get_colored_name(),
        '의 기분은 안중에도 없다는 듯,',
      ]);
      await era.printAndWait([
        '그저 번갈아 가며 흥분으로 곧게 선 성기를 ',
        defender.get_colored_name(),
        '의 보지에 쑤셔 넣고 격렬하게 추삽질했다……',
      ]);
    } else {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 은(는) 끊임없이 ',
        attacker.get_colored_name(),
        ' 와(과) ',
        supporter.get_colored_name(),
        '의 성기에 번갈아 침범당하고 있다.',
      ]);
      await era.printAndWait('두 사람 중 한쪽이 조금이라도 피로를 느끼면 바로 교대를 반복했고,');
      await era.printAndWait([
        '오직 ',
        defender.get_colored_name(),
        '의 애액으로 범벅이 된 보지만이 쉴 틈 없이 유린당해,',
      ]);
      await era.printAndWait('이제 의식마저 아득해지려 하고 있었다……');
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async double_penetration(attacker, defender, supporter, hook) {
    if (hook.arg) {
      await era.printAndWait([
        defender.get_colored_name(),
        ' 은(는) ',
        attacker.get_colored_name(),
        '의 위로 끌려가 보지에 삽입당했고,',
      ]);
      await era.printAndWait([
        supporter.get_colored_name(),
        ' 역시 동시에 ',
        defender.get_colored_name(),
        '의 항문에 성기를 집어넣었다……',
      ]);
    } else {
      await era.printAndWait([
        attacker.get_colored_name(),
        ' 와(과) ',
        supporter.get_colored_name(),
        ' 은(는) 함께 ',
        defender.get_colored_name(),
        '의 앞뒤 구멍을 계속해서 공격하고 있다.',
      ]);
      await era.printAndWait(
        '이중의 쾌감과 동시에 두 사람에게 범해지고 있다는 배덕감에,',
      );
      await era.printAndWait([
        defender.get_colored_name(),
        ' 은(는) 삽입이 반복될 때마다 비명을 지르며 흐느꼈다……',
      ]);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async spit_roast(attacker, defender, supporter, hook) {
    await common_spit_roast(attacker, defender, supporter, hook);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {CharaTalk} supporter
   * @param {HookArg} hook
   */
  async spit_roast_anal_sex(attacker, defender, supporter, hook) {
    await common_spit_roast(attacker, defender, supporter, hook);
  }
}

module.exports = EroNormalOrgy;