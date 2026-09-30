const era = require('#/era-electron');

const { date_common } = require('#/event/daily/daily-events-100/snippets');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');

const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

module.exports = async (hook) => {
  const acute = get_chara_talk(100),
    edu_marks = new AcuteEduMarks(),
    me = get_chara_talk(0),
    love = era.get('love:100');
  if (love >= 50 && !edu_marks.possessive) {
    await acute.print_and_wait(['또다시 마른 나무 구멍에 왔다……']);
    await acute.print_and_wait([
      me.get_colored_actual_name(),
      '의 몸에 흔적을 남기고 싶어.',
    ]);
    await acute.print_and_wait(['단순한 키스뿐만이 아니라, 다른 곳에도.']);
    await acute.print_and_wait([
      '귓불, 뺨, 턱, 목덜미, 가슴…… 모두 내 흔적을 남기고 싶어.',
    ]);
    await acute.print_and_wait([
      '이것이 이른바 소유욕이라는 걸까? 솔직히 말하자면, 나도 잘 모르겠어.',
    ]);
    await acute.print_and_wait([
      me.get_colored_actual_name(),
      '의 입술에 다가가고 싶고, 코와 입술의 숨결이 섞이기를 원해. 왼쪽 가슴이 쿵쾅거리고, 모든 것이 참기 힘들 정도로.',
    ]);
    await acute.print_and_wait(['사랑하는 이들 사이의 키스는…… 정말이지 위험한 행동이야.']);
    await acute.print_and_wait([
      '만약 정말로 입을 맞추고, 내 몸이 ',
      sys_get_colored_callname(0, 100),
      '에게 완전히 중독되어 버린다면, 그때…… 나는 어떻게 되어버리는 걸까?',
    ]);
    await acute.print_and_wait([
      sys_get_colored_callname(0, 100),
      '……책임져 주려나?',
    ]);
    edu_marks.possessive = 1;
    hook.arg = true;
    return true;
  } else if (love >= 90 && !edu_marks.kiss) {
    await date_common(acute, me);
    await era.printAndWait([
      '—— ',
      acute.get_colored_name(),
      '의 기대하는 시선이 느껴진다.',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait('사람이 오가는 안뜰에서, 사랑하는 두 사람은 서로를 탐한다.');
    await era.printAndWait(
      '더 이상 주변 사람들의 시선은 신경 쓰지 않고, 격렬하게 타액을 교환하며 서로의 사랑을 서약한다.',
    );
    await acute.say_and_wait('……❤️');
    await era.printAndWait([
      '작은 두 손이 당신의 머리를 감싸 안고, 반짝이는 복숭앗빛 눈동자는 낮이든 밤이든 오직 ',
      me.get_colored_name(),
      ' 단 한 사람만을 주시한다.',
    ]);
    await era.printAndWait([
      '그리고 ',
      me.get_colored_name(),
      ' 역시, 가장 뜨거운 사랑과 가장 격정적인 키스로 화답한다—— 낮이든 밤이든, 두 사람은 서로를 꽉 끌어안고——',
    ]);
    await era.printAndWait('………………');
    await say_by_passer_by_and_wait('우마터 유저', '저 사람들 얼마나 오래 키스하고 있는 거야?');
    await say_by_passer_by_and_wait('우마스타그램 유저', '몰라…… 한 2시간은 되지 않았어?');
    await say_by_passer_by_and_wait(
      '어떤 간사이 '+ acute.get_uma_sex_title(),
      '아이고, 문디 자슥들, 날 다 저물었는데 와 여서 뽀뽀질이고. 뭐꼬, 진짜 안뜰에서 파티라도 열 작정이가?',
    );
    await era.printAndWait('………………');
    await era.printAndWait('밤낮이 바뀌고, 춘하추동이 지나도.');
    await era.printAndWait(['앞으로의 인생은, 두 번 다시 ', acute.sex, '와 떨어지지 않으리라.']);
    edu_marks.kiss = 1;
    hook.arg = false;
    return true;
  }
  hook.arg = !(await select_action_in_atrium());
  if (hook.arg) {
    await era.printAndWait([
      '안뜰 뒤편의 마른 나무 구멍. 종종 ',
      acute.get_uma_sex_title(),
      '가 레이스 전 나무 구멍을 향해 자신의 소원을 외치며 스트레스를 풀곤 하는 곳이다.',
    ]);
    await era.printAndWait([
      '하지만 평소 늘 한가해 보이는 ',
      acute.get_colored_name(),
      '는 나무 구멍 안에 가만히 앉아 있는 것을 더 좋아하는 것 같다.',
    ]);
    await acute.say_and_wait('음…… 여긴 참말로 조용하구먼~');
    await era.printAndWait([
      acute.get_colored_name(),
      '는 여전히 온화하게 말했지만, 얼굴의 표정에는 약간의 변화가 생긴 것 같다……',
    ]);
  } else {
    await date_common(acute, me);
    if (era.get('love:100') >= 90) {
      await era.printAndWait('………………');
      await era.printAndWait('사람이 오가는 안뜰, 사랑하는 두 사람은 구석에서 서로를 껴안고 있다——');
      await era.printAndWait([
        acute.get_colored_name(),
        '와 함께 아주 멋진 점심시간을 보냈다.',
      ]);
    } else {
      await era.printAndWait([
        '—— ',
        acute.get_colored_name(),
        '의 기대하는 시선이 느껴진다.',
      ]);
      await era.printAndWait(
        '이 뒤의 일은, 「사랑」이 좀 더 쌓이고 나면 알 수 있을지도. (쓴웃음)',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        '참고로—— 사람이 오가는 안뜰에서 이 한 걸음을 내딛기 위해서는 강철 같은 의지가 필요할 것이다——',
      );
    }
  }
};