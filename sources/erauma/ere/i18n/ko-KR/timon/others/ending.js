/**
 * Partial Korean reuse from EraUmaK 2.21.
 * Unmatched/new 3.113 entries inherit from ja-JP.
 */
const era = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/others/ending');

const ko = Object.create(ja);

ko.loser = (() => {
  const f = async (you) => {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 너무 나태했거나, 혹은 담당의 재능이 부족했던 것일지도 모릅니다. 승리는 당신들에게서 언제나 멀리 있었습니다.',
    ]);
    await era.printAndWait([
      '아무리 노력해도 소용이 없었고, 결국 학원 측은 ',
      you.get_colored_name(),
      '에게 담당과의 계약 해지 및 이적을 명령했습니다.',
    ]);
    await era.printAndWait([
      '사회적 평판 부족으로 해고된 ',
      you.get_colored_name(),
      '은(는) 결말을 맞이했다……',
    ]);
    era.setWidth(24);
    era.setOffset(0);
  };
  f.title = '문전박대';
  return f;
})();

ko.hentai = (() => {
  const f = async (you) => {
    era.setOffset(6);
    era.setWidth(12);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 성인으로서의 사회적 책임을 망각하고, 담당에게 변태적인 행위를 사주한 사실이 폭로되었습니다. 트레센조차 ',
      you.get_colored_name(),
      '의 죄를 덮어줄 수는 없었습니다.',
    ]);
    await era.printAndWait([
      '결국 학원 측은 ',
      you.get_colored_name(),
      '에게 담당과의 계약 해지 및 이적을 명령했습니다.',
    ]);
    await era.printAndWait([
      '사회적 평판이 바닥으로 떨어져 해고된 ',
      you.get_colored_name(),
      '은(는) 결말을 맞이했습니다……',
    ]);
    era.setWidth(24);
    era.setOffset(0);
  };
  f.title = '패가망신';
  return f;
})();

ko.punishment1 = async (you, uma, they) => {
  era.setOffset(6);
  era.setWidth(12);
  await you.say_as_unknown_and_wait(
    '듣기로는, 인간은 자유를 박탈당한 후에야…… 진정으로 자신을 알게 된다고 한다.',
  );
  await you.say_as_unknown_and_wait(
    '그렇다면…… 당신은 자신을 얼마나 잘 알고 있을까?',
  );
  await you.say_as_unknown_and_wait([
    you.get_colored_actual_name(),
    '……나태, 오만',
    era.get('flag:变态行为') > 0 ? '、색욕' : '',
    '……오늘…… 당신은 다시 태어났다.',
  ]);
  await you.say_as_unknown_and_wait(
    '하지만 곧 깨닫게 될 것이다…… 자유에는 대가가 따른다는 것을.',
  );
  await you.say_as_unknown_and_wait(
    '감옥이 당신과 동행할 것이며…… 이 육체는 당신에게 영원한 징벌이 될 것이다.',
  );
  await you.say_as_unknown_and_wait(
    '속죄가 곧 시작된다—— 더 큰 고통을 겪고 싶지 않다면, 필사적으로 달려야 한다.',
  );
  await you.say_as_unknown_and_wait([
    you.get_colored_actual_name(),
    '—— 자유가 당신을 부르고 있다.',
  ]);
  await you.say_as_unknown_and_wait('다시는 보지 않았으면 좋겠군.');
  era.setWidth(24);
  era.setOffset(0);
  era.println();
  if (era.get('cflag:0:种族') > 0) {
    await era.printAndWait([you.get_colored_name(), '이(가) 개조당했습니다!']);
  } else {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 우마무스메로 변했습니다!',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 여전히 ',
      uma,
      '을(를) 모집하고, ',
      they,
      '을(를) 훈련시키며, ',
      they,
      '과(와) 함께 달릴 수 있지만, 더 이상 트레센에서 지급하는 급여를 받을 수 없습니다.',
    ]);
    await era.printAndWait([
      '대신, ',
      you.get_colored_name(),
      '은(는) 스스로 자율 훈련을 하고, 레이스에 참여하여 상금과 사회적 명성을 얻을 수 있습니다.',
    ]);
  }
  await era.printAndWait(
    '명성이 다시 0 이하로 떨어지면, 더 엄격한 처벌을 받게 됩니다!',
  );
};

ko.punishment2 = async (you, date, uma, they) => {
  era.setOffset(6);
  era.setWidth(12);
  await era.printAndWait('성 노 예 선 언', {
    align: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    isParagraph: true,
  });
  await era.printAndWait([
    '본 암말 ',
    you.get_colored_actual_name(),
    '은(는) ',
    uma,
    ' 님들의 노예가 될 것을 자원하며,',
  ]);
  await era.printAndWait(
    '심신을 주인님들을 기쁘게 해드리기 위한 최적의 상태로 조정하고, 모든 인권을 영원히 포기하며,',
  );
  await era.printAndWait(
    '이후 주인님들의 모든 조교를 수용하고, 모든 지시에 복종하며, 어떠한 이의도 제기하지 않겠습니다.',
  );
  era.setOffset(13);
  era.setWidth(5);
  era.setAlign('center');
  era.print([you.get_colored_actual_name()]);
  era.print(`<${you.name} 의 입술 자국>`);
  era.print(`<${you.name} 의 유두 자국>`);
  await era.printAndWait(`<${you.name} 의 음순 자국>`);
  await era.printAndWait(date);
  era.setAlign('left');
  era.setOffset(0);
  era.setWidth(24);
  era.println();
  await era.printAndWait([
    '강제적인 자원 하에 선언서에 서명한 후, ',
    you.get_colored_name(),
    '은(는) ',
    uma,
    '들의 성노예로 개조되었습니다!',
  ]);
  await era.printAndWait([
    you.get_colored_name(),
    '은(는) 여전히 ',
    uma,
    '을(를) 모집하고, ',
    they,
    '을(를) 훈련시키며, ',
    they,
    '과(와) 함께 달리고 자율 훈련 및 레이스에 참여할 수 있습니다.',
  ]);
  await era.printAndWait([
    '하지만 ',
    you.get_colored_name(),
    '의 더 중요한 책무는 ',
    they,
    '의 성욕을 해소해 주는 것입니다!',
  ]);
  await era.printAndWait([
    you.get_colored_name(),
    '의 몸은 이미 예민도가 극대화된 상태로 조정되었습니다. 부디 자신의 성 기술을 더욱 정진하여 주인님들을 기쁘게 해드리고 명성을 획득하십시오!',
  ]);
  await era.printAndWait(
    '명성이 다시 0 이하로 떨어지면, 더 엄격한 처벌을 받게 됩니다!',
  );
};

ko.get_basement_ending_confirm = (you) => [
  you.get_colored_name(),
  '은(는) 지하실에서 결말을 맞이했다……',
  { isBr: true },
  '지하실 엔딩을 확인합니까?',
];
ko.bt_confirm_yes = '비참한 현실을 직시한다';
ko.bt_confirm_no = '으아아 안 볼래';

module.exports = ko;
