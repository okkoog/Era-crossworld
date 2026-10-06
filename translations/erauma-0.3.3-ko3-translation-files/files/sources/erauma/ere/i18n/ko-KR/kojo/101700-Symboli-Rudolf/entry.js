// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/101700-Symboli-Rudolf/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/rec-17.js'),
  );
  // 한국어 작업 모듈 연결: daily
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/daily-17.js'));

  // [번역 완료] crush
  crush = '심취';

  // [번역 완료] crush_desc
  crush_desc = '억누를 수 없는 마음을 더는 숨길 수 없다. 초기 연모+40, 연모 획득+20%.';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/edu-17.js"),
  );

  // [번역 완료] emperor
  emperor = '황제';

  // [번역 완료] emperor_desc
  emperor_desc =
    '여기에 군림하라. 무릎 꿇어라. 트레이닝 성공률+5%, 효과+4%, 출주 시 능력+2%. 이 모습으로 7턴 활동할 때마다 [정신 손상] 1스택을 얻는다.';

  // [번역 완료] fallen
  fallen = '신경쇠약!';

  // [번역 완료] fallen_desc
  fallen_desc = '이제 돌이킬 수 없다…… 루나의 출주 시 능력-8%.';

  // [번역 완료] intention
  intention = '심법';

  // [번역 완료] intention_desc
  intention_desc = '헤아릴 필요는 없다. 그저 복종하라. 호감 획득-20%, 연모 상한 40.';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/love-17.js"),
  );

  // [번역 완료] moral_damage
  moral_damage = (c) => `정신 손상${c === 1 ? '' : `(${c})`}`;

  // [번역 완료] moral_damage_desc
  moral_damage_desc = (c, debuff, buff) =>
    `루나의 트레이닝 효과-${debuff}%、황제의 트레이닝 효과+${buff}%${c < 6 ? '。6스택의 [정신 손상]에서 [신경쇠약]을 얻는다' : ''}。`;

  // [번역 완료] notify_get_worse
  notify_get_worse = (luna) => [
    luna.get_colored_name(),
    '의 정신 상태가 더욱 악화되었다……',
  ];

  // [번역 완료] notify_punish_for_avoid
  notify_punish_for_avoid = (emperor, race) => [
    emperor.get_colored_name(),
    '은(는) ',
    race,
    '에 출주하지 않은 것을 몹시 불쾌하게 여기고 있다……',
  ];

  // [번역 완료] notify_punish_for_important
  notify_punish_for_important = (emperor, race) => [
    emperor.get_colored_name(),
    '은(는) ',
    race,
    '에서 패배한 것을 몹시 불쾌하게 여기고 있다……',
  ];

  // [번역 완료] pa_button
  pa_button = '일월 교대';

  // [번역 완료] pa_notify_keep
  pa_notify_keep = (chara) => [
    '다음 주, ',
    chara.get_colored_name(),
    '은(는) ',
    chara.get_colored_name(),
    '의 모습을 유지하려 한다……',
  ];

  // [번역 완료] pa_notify_transform
  pa_notify_transform = (chara, aim) => [
    '다음 주, ',
    chara.get_colored_name(),
    '은(는) ',
    aim.get_colored_name(),
    '의 모습으로 변하려 한다……',
  ];

  // [번역 완료] r_fallen
  r_fallen = '신경쇠약';

  // [번역 완료] report_kiku_sho
  report_kiku_sho = (luna) => [
    { color: luna.color, content: '교토의 흐린 하늘 아래, 커다란 붉은 꽃이 활짝 피어난다!' },
  ];

  // [번역 완료] self_destruct
  self_destruct = '자괴';

  // [번역 완료] self_destruct_desc
  self_destruct_desc =
    '숙명에 맞서려는 저항이 스스로를 무너뜨린다. 트레이닝 성공률-5%, 효과-8%, 출주 시 능력-5%.';
};
