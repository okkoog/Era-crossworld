const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');

module.exports = class extends EroNormalMakingOuts {
  async pet_anal(attacker, defender, hook) {
    if (defender.id !== 3 || !hook.arg) {
      return await super.pet_anal(attacker, defender, hook);
    }
    if (Math.random() >= 0.5) {
      await attacker.print_and_wait([
        '매일 거르지 않고 정성껏 관리해온 덕분에, 귀엽고 깨끗한 작은 문이 눈앞에 나타났다.',
      ]);
      await attacker.print_and_wait([
        '장난기가 발동해 손가락을 뻗어, 이 은밀한 곳의 주변을 맴돌기 시작했다. 때때로 자물쇠를 따려는 듯한 움직임도 섞어가며.',
      ]);
      await defender.say_and_wait([
        '앗…… 으윽, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '!',
      ]);
      await attacker.print_and_wait(
        '……거절이라기보다는, 오히려 약간의 환희와 재촉이 섞인 듯한 반응이다.',
      );
      await attacker.print_and_wait([
        '설마, 이 멋진 꼬마 왕',
        defender.sex_code === 1 ? '자' : '녀',
        '님은…… 그곳이 민감한 걸까?',
      ]);
    } else {
      await defender.say_and_wait(['우우……']);
      await attacker.print_and_wait([
        defender.sex,
        '로서는 이런 대우가 확실히 조금 비겁하게 느껴질 법도 하다.',
      ]);
      await attacker.print_and_wait(['하지만 그런 건 상관없다……']);
      await attacker.print_and_wait('오히려 이래야 괴롭히는 보람이 있지.');
      await attacker.print_and_wait(['보호구를 착용하고, 조심스럽게 문을 두드려 열었다……']);
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 3) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    await defender.say_and_wait(['……']);
    await attacker.print_and_wait([
      '얼굴이 붉게 달아오른 ',
      defender.get_teen_sex_title(),
      '는 평소와 다르게 아무 말도 하지 않는다.',
    ]);
    await attacker.print_and_wait(['꼬리를 들어 올리고, 그 비밀스러운 장소를 찬찬히 감상했다.']);
    await attacker.print_and_wait(['매끄러운 엉덩이가 떨리며, 분홍빛의 깨끗한 구멍이 드러났다……']);
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== 3 || !era.get('status:3:다리부상') || !hook.arg) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    await defender.say_and_wait([
      '미안해…… ',
      sys_get_colored_callname(defender.id, attacker.id),
      ', 내가 이쪽으로는 도움을 줄 수가 없네.',
    ]);
    await attacker.print_and_wait([
      '자책과 답답함이 절반씩 섞인 듯한 탄식이 귓가에 들려와, 무언가 잘못한 것 같은 기분이 들었다.',
    ]);
    await attacker.say_and_wait(['그럼, 보답을 해줘야겠네.']);
    await attacker.print_and_wait([
      defender.sex,
      '가 반응할 틈도 없이, 살며시 ',
      defender.sex,
      '의 뒤꿈치를 들어 올렸다. 매끄러운 피부를 손가락으로 문지르다 그대로 얼굴을 갖다 대었다.',
    ]);
    await defender.say_and_wait(['——!']);
    await attacker.print_and_wait([
      '미리 관리하고 씻어둔 ',
      defender.get_uma_sex_title(),
      '의 작은 발이 순식간에 뜨거워졌다.',
    ]);
    await attacker.print_and_wait([
      '남몰래 웃으며 한쪽 손을 하반신으로 뻗었다. 담당 우마무스메를 정면으로 응시하며, ',
      defender.sex,
      '의 눈앞에서 보란 듯이 그곳을 스스로 탐닉하기 시작했다.',
    ]);
  }

  async force_foot_job(attacker, defender, hook) {
    return this.ask_foot_job(attacker, defender, hook);
  }

  async ask_tail_job(attacker, defender, hook) {
    if (defender.id !== 3) {
      return await super.ask_tail_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['윽…… 이런 건……']);
      await attacker.print_and_wait([
        '조금 무리한 부탁이었을지도 모르지만, ',
        defender.sex,
        '는 얼굴을 붉히면서도 결국 수락해 주었다……',
      ]);
      await attacker.print_and_wait(['게다가 꽤 흥미가 생긴 듯한 모습이다.']);
      await attacker.print_and_wait([
        '매끄럽고 생기 있는 꼬리가 발기한 성기를 순식간에 휘감았다. 갑작스러운 자극에 하마터면 그대로 사정할 뻔했다.',
      ]);
      await defender.say_and_wait(['헤헤……']);
      await attacker.print_and_wait([
        defender.sex,
        '의 눈이 반짝이기 시작했다. 온 힘을 다해 꼬리를 움직이며 가장 민감한 곳을 애무해온다.',
      ]);
    } else {
      await attacker.print_and_wait(['움직임이 점점 거칠어지고 있다…… 아니, 숙련되고 있다는 표현이 맞을까.']);
      await defender.say_and_wait(['와아…… 젖어버렸어……']);
      await attacker.print_and_wait([
        '음란한 액체로 끈적하게 젖은 꼬리가 털을 윤기 있게 만드는 모습을 보며, 무언가 깨달은 모양이다.',
      ]);
      await attacker.print_and_wait(['게다가…… 그게 전부가 아니다……']);
      await attacker.print_and_wait([
        '꼬리가 튀어 오르듯 말려 올라가더니, 위로 늘어뜨린 포니테일까지 얽혀들어 이중 나선 구조로 그곳을 조여왔다.',
      ]);
      await attacker.print_and_wait([
        '작은 ',
        defender.get_uma_sex_title(),
        ' 본인은 아직 눈치채지 못한 것 같지만—— 꼬리샘에서 발정기 특유의 머스크 향이 뿜어져 나와, 현장의 분위기를 더욱 고조시키고 있다.',
      ]);
      await attacker.print_and_wait(['어느새 호흡이 거칠어지는 것이 느껴진다……']);
    }
  }

  async force_tail_job(attacker, defender, hook) {
    return this.ask_tail_job(attacker, defender, hook);
  }
};
