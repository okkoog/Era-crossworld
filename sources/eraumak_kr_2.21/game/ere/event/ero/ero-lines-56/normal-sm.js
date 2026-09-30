const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalSm = require('#/event/ero/common/normal/sm');
const {
  after_refusing_by_attacker,
  after_refusing_by_defender,
  ask_action,
} = require('#/event/ero/common/snippets');

const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends EroNormalSm {
  async ask_insult(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_insult(attacker, defender, hook);
    }
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
      await defender.say_and_wait('매도당하고 싶다고?');
      await defender.print_and_wait([
        '성스러운 ',
        attacker.get_uma_sex_title(),
        ' 무녀로부터 이런 이상한 부탁을 받았다.',
      ]);
      await attacker.say_and_wait([
        '저, 그게…… ',
        sys_get_colored_callname(attacker.id, defender.id),
        '에게 거칠게 다뤄지는 느낌, 정말 기분 좋아서……',
      ]);
      await defender.print_and_wait([
        '아무래도 담당은 역시나 도M인 모양이다. 이에 음란 무녀, 육변기, 오나홀 점술가 같은 수위 높은 매도 문구들을 눈앞의 밤색 ',
        attacker.get_uma_sex_title(),
        '에게 퍼부었다.',
      ]);
      await defender.print_and_wait([
        attacker.get_colored_actual_name(),
        '는 꽤나 만족스러워하는 눈치다. 나중에는 좀 더 질 나쁜 표현을 써보는 게 어떨까?',
      ]);
    } else {
      await attacker.print_and_wait([
        '귓가에 더욱 질 나쁜 매도들이 울려 퍼졌지만, 그보다 스스로를 두렵게 만든 것은 이런 행위에서 점점 더 예민하게 쾌감을 느끼게 된 자기 자신이었다.',
      ]);
      await attacker.say_and_wait(['이런 기분, 멈추고 싶지, 멈추고 싶지 않아……'], true);
      await attacker.say_and_wait(
        [
          '하아, 나, 나는 정말 구제 불능인 도M ',
          attacker.get_uma_sex_title(),
          '야……',
        ],
        true,
      );
    }
  }

  async ask_hit_anal(attacker, defender, hook) {
    if (attacker.id !== 56) {
      return await super.ask_hit_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      if (await ask_action(attacker.id)) {
        await (
          get_random_value(0, 1)
            ? after_refusing_by_attacker
            : after_refusing_by_defender
        )(attacker, defender, hook);
      }
      await defender.say_and_wait([
        '만약 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '이 그렇게 괴롭힘당하고 싶다면……',
      ]);
      await defender.print_and_wait([
        '손바닥으로 ',
        sys_get_colored_callname(defender.id, attacker.id),
        '의 둥근 엉덩이를 가볍게 문지르자, ',
        attacker.sex,
        '의 몸이 품 안에서 미세하게 떨렸다. 두려움 때문인지, 아니면 고양감 때문인지는 알 수 없었다.',
      ]);
      await defender.print_and_wait(['찰싹!']);
      await defender.print_and_wait([
        '점차 뜨거워지는 엉덩이가 ',
        defender.get_colored_name(),
        '의 얼떨떨한 손바닥 위로 부드럽게 비벼졌다. 아무래도 아주 마음에 들어 하는 모양이다.',
      ]);
    } else {
      await attacker.say_and_wait(['아파…… 하지만, 너무 좋아……'], true);
      await attacker.say_and_wait(['찰싹찰싹 소리를 내며 내 엉덩이를 때려주시고.'], true);
      await attacker.say_and_wait(['가끔은 또 부드럽게 몇 번이고 문질러주시고.'], true);
      await attacker.say_and_wait(
        ['점점 통증인지 쾌락인지 분간할 수 없게 된 나에게는, 무엇보다 최고의 포상이야……'],
        true,
      );
    }
  }
};