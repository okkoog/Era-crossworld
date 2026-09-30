const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalCommunications = require('#/event/ero/common/normal/communications');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends EroNormalCommunications {
  async kiss(attacker, defender, hook) {
    if (defender.id !== 64 || !hook.arg || defender.sex_code === 1) {
      return await super.kiss(attacker, defender, hook);
    }
    const edu_marks = new PamaEduMarks();
    if (!edu_marks.kiss) {
      edu_marks.kiss = 1;
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '와 아주 가까운 거리에서 눈을 맞추며, ',
        defender.sex,
        '의 옆머리를 넘겨주고 ',
        defender.sex,
        '의 정교하고 예쁜 얼굴을 손으로 감싸 쥐었다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '는 아랫입술을 깨물며 시선을 옆으로 피했고, 앞으로 어떻게 대응해야 할지 몰라 망설이는 듯 보였다.',
      ]);
      await attacker.print_and_wait([
        '갑작스럽게 다가가 ',
        defender.sex,
        '의 입술에 맞닿자, ',
        defender.sex,
        '는 두 손으로 가슴팍을 밀어내려는 듯했으나 전혀 힘이 들어가지 않았다.',
      ]);
      await attacker.print_and_wait([
        '살짝 건드리는 것만으로도 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 혀끝을 입안으로 마중 보냈고, 이 짧고도 뜨거운 순간을 만끽했다.',
      ]);
      await attacker.print_and_wait([
        '잠시 후, ',
        attacker.get_colored_name(),
        '과(와) 입을 뗀 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 거친 숨을 내뱉었고, 얼굴은 이미 홍조로 가득 찼다.',
      ]);
      await defender.say_and_wait(['미안…… 조금…… 너무 흥분해서…… 숨이……']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 미친 듯이 뛰는 심장을 억누르려는 듯 가슴을 움켜쥐었지만, ',
        defender.sex,
        '는 해결 방법이 단 하나뿐이라는 것을 알고 있었다——',
      ]);
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 한 번만 더 해줄 수 있을까?',
      ]);
    }
    await attacker.print_and_wait([
      '알몸 상태인 ',
      sys_get_colored_callname(attacker.id, defender.id),
      '를 품에 안자, 가냘픈 어깨너비와 팔뚝 때문에 도저히 ',
      defender.sex,
      '를 경기장 위의 당당한 모습과 연결 짓기 어려웠다.',
    ]);
    await attacker.print_and_wait([
      '그저 잠시 눈을 맞췄을 뿐인데, ',
      sys_get_colored_callname(attacker.id, defender.id),
      '는 참지 못하고 입술을 내밀며 어깨에 매달려 입을 맞춰왔다.',
    ]);
    await defender.say_and_wait(['으음……']);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '의 그 뜨거운 가슴이 가슴팍에 밀착되었고, 방 안에는 서로의 혀를 빨아들이는 외설적인 소리만이 남았다.',
    ]);
  }

  async lure(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.lure(attacker, defender, hook);
    }
    hook.arg = EroNormalCommunications.check_lure_success(
      attacker.id,
      defender.id,
    );
    if (hook.arg || era.get(`tcvar:${defender.id}:발정`)) {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '와 ',
        attacker.get_colored_name(),
        '은(는) 마주 앉았고, ',
        defender.sex,
        '는 아랫입술을 가볍게 깨물며 기대와 긴장이 섞인 눈빛을 보냈다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 다섯 손가락이 가슴팍을 훑고 지나갔는데, 마치 그 촉감을 기억 속에 새기려는 듯한 몸짓이었다.',
      ]);
      await defender.say_and_wait(['…… 좋아, 어디든 상관없어.']);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '의 생각을 알아차린 듯, ',
        defender.sex,
        '는 앞으로 몸을 기울여 서로의 체온이 느껴지는 거리에서 멈춰 섰다.',
      ]);
      await attacker.print_and_wait([
        '하지만 역시 조금은 무리였을까, ',
        attacker.get_colored_name(),
        '의 손이 ',
        defender.sex,
        '의 쇄골을 지나 가슴 사이로 향하자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 눈을 감은 채 미세하게 몸을 떨었다.',
      ]);
    }
  }
};