const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalSm = require('#/event/ero/common/normal/sm');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.hit_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.hit_anal) {
        life_marks.hit_anal = 1;
        await defender.say_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          '…… 살살…… 부탁해.',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 무릎 위에 엎드려 엉덩이를 드러냈고, ',
          defender.sex,
          '의 엉덩이는 풍만하고 둥글며 어스름한 조명 아래서 선정적인 광택을 내뿜었다.',
        ]);
        await attacker.print_and_wait([
          '숨을 쉴 때마다 그 부드러운 두 덩이의 살점이 미세하게 들썩이며, ',
          attacker.get_colored_name(),
          '의 손바닥을 유혹했다.',
        ]);
        await attacker.print_and_wait(['「찰싹!」']);
        await attacker.print_and_wait([
          '첫 번째 매질이 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 오른쪽 엉덩이에 내리꽂혔고, 순식간에 하얀 피부 위로 옅은 붉은색 손바닥 자국이 떠올랐다.',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 몸이 크게 움찔거렸고, 짧게 터져 나오려던 비명은 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 목구멍 안쪽으로 억눌렸다.',
        ]);
      }
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '의 무릎 위에 엎드린 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 기대 때문인지 혹은 공포 때문인지 불편한 듯 몸을 뒤척였고, ',
        attacker.get_colored_name(),
        '은(는) 오른손을 들어 올렸다——',
      ]);
      await attacker.print_and_wait(['「찰싹! 찰싹!」']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이 살이 젤리처럼 격렬하게 흔들렸고, 본래 순백색이었던 피부는 점차 분홍빛으로 물들었다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 발가락은 무의식적으로 오그라들고 발등은 팽팽하게 펴졌으며, 매끈한 피부 위로 소름이 돋아나기 시작했다.',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 으윽……',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 비명을 삼켰고, 아프다고 소리치고 싶었지만 꾹 참아내며 떨리는 울음 섞인 소리만을 남겼다.',
      ]);
    } else {
      await defender.say_and_wait(['하아…… 아……']);
      await attacker.print_and_wait([
        '지속되는 매질에 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 호흡은 점차 가빠졌고, ',
        defender.sex,
        '의 손가락은 침대 시트를 꽉 붙잡았다.',
      ]);
      await attacker.print_and_wait([
        '매질의 강도가 점차 세지면서, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이는 잘 익은 복숭아처럼 탐스러운 진분홍색으로 변해갔다.',
      ]);
      await defender.say_and_wait(['아으윽!']);
      await attacker.print_and_wait([
        defender.sex,
        '는 더 이상 소리를 죽이지 않고 매질이 가해질 때마다 울음 섞인 소리를 내뱉었지만, 엉덩이는 오히려 살짝 치켜들며 마치 더 많은 벌을 원하는 듯한 태도를 보였다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가랑이 사이에서 흘러나온 애액이 ',
        attacker.get_colored_name(),
        '의 허벅지 위로 떨어졌다. 고통 속에서 이미 쾌감을 찾아낸 모양이다.',
      ]);
    }
  }
};