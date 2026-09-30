const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');

module.exports = class extends EroNormalCommunications {
  async talk(attacker, defender, hook) {
    if (defender.id !== 3 || !era.get('status:3:다리부상')) {
      return await super.talk(attacker, defender, hook);
    }
    await defender.say_and_wait('……');
    await attacker.say_and_wait('……');
    await attacker.print_and_wait(
      '정욕이 타오르자 오히려 말문이 막힌다. 그저 서로를 껴안고 뺨을 비비며, 입술과 숨결로 서로의 마음을 주고받는다.',
    );
    await attacker.print_and_wait([
      defender.sex,
      '의 피부에 닿을 때마다, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '의 몸이 순간적으로 팽팽해진다. 마치 나를 붙잡아두려는 듯, 서로 밀착된 시간을 조금이라도 더 늘리고 싶어 하는 것 같다.',
    ]);
  }

  async lure(attacker, defender, hook) {
    if (defender.id !== 3) {
      return await super.lure(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      '눈앞의 귀여운 생명체를 바라보다 저도 모르게 ',
      defender.sex,
      '를 품에 안았다. 손을 뻗어 ',
      defender.sex,
      '의 머리카락을 만지작거리며 머리를 쓰다듬어 주었다.',
    ]);
    await defender.say_and_wait('정말…… 또 어린애 취급이나 하고……');
    hook.arg = EroNormalCommunications.check_lure_success(
      attacker.id,
      defender.id,
    );
    if (hook.arg || era.get(`tcvar:${defender.id}:발정`)) {
      await attacker.print_and_wait('입으로는 투덜대면서도…… 꼬리는 살랑살랑 흔들리고 있다.');
      await attacker.print_and_wait('계속해 주길 바라는 눈치다.');
    }
  }

  async switch(attacker, defender) {
    if (defender.id !== 3) {
      return await super.switch(attacker, defender);
    }
    await defender.say_and_wait([
      sys_get_colored_callname(defender.id, attacker.id),
      '! 또 나 괴롭히지——',
    ]);
    await attacker.print_and_wait([
      '볼을 부풀린 눈앞의 우마무스메를 보며 미소지었다. 두 손으로 ',
      defender.sex,
      '의 가냘픈 어깨를 붙잡고, 단번에 ',
      defender.sex,
      '를 들어 올려……',
    ]);
    await defender.say_and_wait('에?');
    await attacker.print_and_wait('세상이 핑글핑글 돈다……');
    await attacker.say_and_wait('자, 이제 네 시간이야.');
    await attacker.print_and_wait('아직 멍하니 있는 담당에게 짖궂게 웃으며 말했다.');
    await attacker.say_and_wait([
      '테이오 선생님, ',
      attacker.actual_name,
      ' 학생이 가르침을 기다리고 있다구요?',
    ]);
  }
};
