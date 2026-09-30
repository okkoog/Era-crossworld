const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const EroNormalSm = require('#/event/ero/common/normal/sm');

module.exports = class extends EroNormalSm {
  async hit_anal(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.hit_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      if (era.get('mark:32:동심') > era.get('mark:32:반발')) {
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 엉덩이를 힘껏 때리자, 기분 좋은 파찰음이 울려 퍼졌다.',
        ]);
        await attacker.print_and_wait('하얗고 부드러운 양 갈래의 둔부 위에 옅은 손바닥 자국이 남았다.');
        era.println();
        await defender.say_and_wait([
          '아앗!? ……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……?',
        ]);
        era.println();
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '은 가련하게 신음하면서도 엉덩이를 높게 치켜올린 채, 전혀 반항할 기색을 보이지 않았다.',
        ]);
      } else if (era.get('talent:32:고통좋아함') > 0) {
        await attacker.print_and_wait('정말이지 음란한 몸이군……');
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 엉덩이를 힘껏 때리자, 기분 좋은 파찰음이 울려 퍼졌다.',
        ]);
        await attacker.print_and_wait('한쪽 엉덩이 위에 옅은 손바닥 자국이 새겨졌다.');
        era.println();
        await defender.say_and_wait('더…… 좀 더 강하게 해주게……❤️');
        era.println();
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '이 음탕한 교성을 내질렀다.',
        ]);
        await attacker.print_and_wait(
          '붉게 달아오른 엉덩이를 좌우로 잘게 흔들며, 더욱 깊은 유린을 기대하는 듯했다.',
        );
        await attacker.print_and_wait('잠시 손으로 엉덩이를 주물러 풀어준 뒤……');
        era.println();
        await attacker.print_and_wait('찰싹!');
        era.println();
        await defender.say_and_wait('아아앙～～❤️');
        era.println();
        await attacker.print_and_wait('탐스러운 엉덩이가 출렁이며 애교 섞인 비명이 뒤따랐다.');
        await attacker.print_and_wait('이제 양쪽 엉덩이 모두 잘 익은 복숭아처럼 선홍색으로 물들어 있었다.');
      } else {
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 엉덩이를 힘껏 때리자, 기분 좋은 파찰음이 울려 퍼졌다.',
        ]);
        await attacker.print_and_wait('하얗고 매끄러운 양 갈래의 둔부 위에 옅은 손바닥 자국이 남았다.');
        era.println();
        await defender.say_and_wait([
          '아앗!? ……',
          sys_get_colored_callname(defender.id, attacker.id),
          '……?',
        ]);
        era.println();
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '은 자신도 모르게 고통 섞인 목소리를 내뱉었다.',
        ]);
        await attacker.print_and_wait(
          '조금 가엾다는 생각도 들었지만, 저렇게 탄력 있게 치켜올려진 엉덩이를 그대로 두는 것이야말로 예우가 아니라는 생각이 들었다.',
        );
      }
    } else {
      await attacker.print_and_wait(
        '타키온의 탄력 있고 눈부시게 하얀 엉덩이를 연신 때리자, 기분 좋은 소리가 계속해서 울려 퍼졌다.',
      );
      await attacker.print_and_wait('이제 그 위에는 선명한 손바닥 자국들이 가득했다.');
      await attacker.print_and_wait([
        '매번 매가 가해질 때마다, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가랑이 사이에서 애액이 울컥울컥 뿜어져 나와, 어느샌가 자신의 손까지 흠뻑 적셔버렸다……',
      ]);
    }
  }

  async hit_face(attacker, defender, hook) {
    if (defender.id !== 32) {
      return await super.hit_face(attacker, defender, hook);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 뺨을 강하게 후려쳤다.',
    ]);
    if (era.get('mark:32:동심') > era.get('mark:32:반발')) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 뺨이 붉게 상기되었고, 복종의 의미가 담긴 눈빛으로 자신을 올려다보았다.',
      ]);
      era.println();
      await defender.say_and_wait([
        sys_get_callname(defender.id, attacker.id)[0],
        '…… 아니, 주인님이 더 때리고 싶으시다면……',
      ]);
      era.println();
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '은 두 손으로 ',
        attacker.get_colored_name(),
        '의 손을 감싸 쥐더니, 그것을 ',
        defender.sex,
        '의 반대쪽 뺨에 가져다 대었다……',
      ]);
    } else if (era.get('talent:32:고통좋아함') > 0) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 뺨이 붉게 물들었다. ',
        defender.sex,
        '은 두 손으로 ',
        attacker.get_colored_name(),
        '의 손을 붙잡고는, 손가락을 살짝 핥으며 복종을 맹세했다.',
      ]);
      era.println();
      await defender.say_and_wait('주인님…… 이 암퇘지에게 더 많은 포상을 내려주게……❤️');
      era.println();
      await attacker.print_and_wait(['다시 한번 ', defender.sex, '의 뺨을 후려쳤다.']);
      await attacker.print_and_wait([
        '분홍빛의 선명한 손바닥 자국이 순식간에 ',
        defender.sex,
        '의 얼굴 위에서 피어올랐다.',
      ]);
    } else {
      await attacker.print_and_wait('믿을 수 없다는 듯한 눈초리로 응시당했다.');
      era.println();
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 어째서……',
      ]);
      era.println();
      await attacker.print_and_wait([
        '붉게 달아오른 자신의 뺨을 어루만지는 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '.',
      ]);
      await attacker.print_and_wait([
        '미안한 마음도 들었지만…… ',
        defender.sex,
        '가 이토록 가련한 표정을 짓는 것을 보니, 참을 수 없는 가학심과 흥분이 치밀어 올랐다……',
      ]);
    }
  }
};