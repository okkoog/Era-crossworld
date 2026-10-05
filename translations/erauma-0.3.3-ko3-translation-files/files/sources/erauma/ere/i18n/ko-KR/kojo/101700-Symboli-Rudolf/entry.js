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

  // [번역 대상] crush
  crush = '心酔';

  // [번역 대상] crush_desc
  crush_desc = '抑えきれない想いが、もう隠せない。初期恋慕+40、恋慕取得+20%。';

  // 한국어 작업 모듈 연결: edu
  edu = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/edu-17.js"),
  );

  // [번역 대상] emperor
  emperor = '皇帝';

  // [번역 대상] emperor_desc
  emperor_desc =
    'ここに君臨せよ。跪け。トレーニング成功率+5%、効果+4%、出走時の能力+2%。この姿で7ターン活動するごとに [精神損傷] を1層得る。';

  // [번역 대상] fallen
  fallen = '神経衰弱！';

  // [번역 대상] fallen_desc
  fallen_desc = 'もう、取り返しはつかない……ルナの出走時能力-8%。';

  // [번역 대상] intention
  intention = '心術';

  // [번역 대상] intention_desc
  intention_desc = '測る必要はない。ただ服せ。好感取得-20%、恋慕上限40。';

  // 한국어 작업 모듈 연결: love
  love = proxy_kojo_js(
    require("#/i18n/ko-KR/kojo/101700-Symboli-Rudolf/love-17.js"),
  );

  // [번역 대상] moral_damage
  moral_damage = (c) => `精神損傷${c === 1 ? '' : `(${c})`}`;

  // [번역 대상] moral_damage_desc
  moral_damage_desc = (c, debuff, buff) =>
    `ルナのトレーニング効果-${debuff}%、皇帝のトレーニング効果+${buff}%${c < 6 ? '。6層の [精神損傷] で [神経衰弱] を得る' : ''}。`;

  // [번역 대상] notify_get_worse
  notify_get_worse = (luna) => [
    luna.get_colored_name(),
    ' の精神状態が、さらに悪化した……',
  ];

  // [번역 대상] notify_punish_for_avoid
  notify_punish_for_avoid = (emperor, race) => [
    emperor.get_colored_name(),
    ' は ',
    race,
    ' への不出走を、極めて不快に思っている……',
  ];

  // [번역 대상] notify_punish_for_important
  notify_punish_for_important = (emperor, race) => [
    emperor.get_colored_name(),
    ' は ',
    race,
    ' の敗北を、極めて不快に思っている……',
  ];

  // [번역 대상] pa_button
  pa_button = '日月交替';

  // [번역 대상] pa_notify_keep
  pa_notify_keep = (chara) => [
    '来週、',
    chara.get_colored_name(),
    ' は ',
    chara.get_colored_name(),
    ' の姿を保とうとする……',
  ];

  // [번역 대상] pa_notify_transform
  pa_notify_transform = (chara, aim) => [
    '来週、',
    chara.get_colored_name(),
    ' は ',
    aim.get_colored_name(),
    ' の姿へ変わろうとする……',
  ];

  // [번역 대상] r_fallen
  r_fallen = '神経衰弱';

  // [번역 대상] report_kiku_sho
  report_kiku_sho = (luna) => [
    { color: luna.color, content: '京都の曇天の下、大きな赤い花が咲き誇る！' },
  ];

  // [번역 대상] self_destruct
  self_destruct = '自壊';

  // [번역 대상] self_destruct_desc
  self_destruct_desc =
    '宿命への抗いが、自らを壊す。トレーニング成功率-5%、効果-8%、出走時の能力-5%。';
};
