// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/105000-Narita-Taishin/entry.js
// 대상 함수/속성: debuff, debuff_desc, frog, frog_desc, new_goal, new_goal_desc, notify_debuff, notify_love_event_50, notify_remove_debuff, resist, resist_desc, swim_up, swim_up_desc, together, together_desc
module.exports = class extends (
  require('#/i18n/zh-CN/kojo/105000-Narita-Taishin/entry')
) {
  /** @type {KojoFile} */
  recruit = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/rec-50.kojo');
  /** @type {KojoFile} */
  daily = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/daily-50.kojo');
  /** @type {KojoFile} */
  edu = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/edu-50.kojo');
  /** @type {KojoFile} */
  love = require('#/i18n/ja-JP/kojo/105000-Narita-Taishin/love-50.kojo');

  // [번역 대상] notify_debuff — 함수/속성 전체 문맥에서 남은 원문을 번역
  notify_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' が ',
    s_debuff,
    ' を発症した！】',
  ];

  // [번역 대상] notify_remove_debuff — 함수/속성 전체 문맥에서 남은 원문을 번역
  notify_remove_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' の ',
    s_debuff,
    ' が治った】',
  ];

  // [번역 대상] notify_love_event_50 — 함수/속성 전체 문맥에서 남은 원문을 번역
  notify_love_event_50 =
    '（今はまだ早い。越境するようなことは、しない方がいい……）';

  // [번역 대상] swim_up — 함수/속성 전체 문맥에서 남은 원문을 번역
  swim_up = '逆流して';
  // [번역 대상] swim_up_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  swim_up_desc =
    '見くびられたものだ！出走時、負けん気で全基礎能力の発揮が上がる。';

  // [번역 대상] debuff — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff = '肺出血';
  // [번역 대상] debuff_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  debuff_desc =
    '体力・気力上限-300、やる気上限が2段階下がる。傷病が治ると自然に消える。';

  // [번역 대상] frog — 함수/속성 전체 문맥에서 남은 원문을 번역
  frog = '恍惚';
  // [번역 대상] frog_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  frog_desc = 'トレーニング効果-100%。レースに出走できない。';

  // [번역 대상] new_goal — 함수/속성 전체 문맥에서 남은 원문을 번역
  new_goal = '再起';
  // [번역 대상] new_goal_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  new_goal_desc = 'トレーニング効果+10%。';

  // [번역 대상] together — 함수/속성 전체 문맥에서 남은 원문을 번역
  together = 'あなたと一緒';
  // [번역 대상] together_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  together_desc = 'トレーニング効果+5%。';

  // [번역 대상] resist — 함수/속성 전체 문맥에서 남은 원문을 번역
  resist = '冷たい拒絶';
  // [번역 대상] resist_desc — 함수/속성 전체 문맥에서 남은 원문을 번역
  resist_desc =
    'いきなりの親密な接触は好まない。越境しない方がいい。だが、きっかけさえあれば……';
};
