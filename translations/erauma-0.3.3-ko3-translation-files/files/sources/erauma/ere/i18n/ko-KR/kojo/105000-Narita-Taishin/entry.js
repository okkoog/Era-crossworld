// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require("#/i18n/ja-JP/kojo/105000-Narita-Taishin/entry") {

  // 한국어 작업 모듈 연결: daily
  daily = require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/daily-50.kojo");

  // [번역 대상] debuff
  debuff = '肺出血';

  // [번역 대상] debuff_desc
  debuff_desc =
    '体力・気力上限-300、やる気上限が2段階下がる。傷病が治ると自然に消える。';

  // 한국어 작업 모듈 연결: edu
  edu = require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/edu-50.kojo");

  // [번역 대상] frog
  frog = '恍惚';

  // [번역 대상] frog_desc
  frog_desc = 'トレーニング効果-100%。レースに出走できない。';

  // 한국어 작업 모듈 연결: love
  love = ({ ...require("#/i18n/ja-JP/kojo/105000-Narita-Taishin/love-50.kojo"), ...require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/love-50.kojo") });

  // [번역 대상] new_goal
  new_goal = '再起';

  // [번역 대상] new_goal_desc
  new_goal_desc = 'トレーニング効果+10%。';

  // [번역 대상] notify_debuff
  notify_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' が ',
    s_debuff,
    ' を発症した！】',
  ];

  // [번역 대상] notify_love_event_50
  notify_love_event_50 =
    '（今はまだ早い。越境するようなことは、しない方がいい……）';

  // [번역 대상] notify_remove_debuff
  notify_remove_debuff = (taishin, s_debuff) => [
    '【',
    taishin.get_colored_name(),
    ' の ',
    s_debuff,
    ' が治った】',
  ];

  // 한국어 작업 모듈 연결: recruit
  recruit = require("#/i18n/ko-KR/kojo/105000-Narita-Taishin/rec-50.kojo");

  // [번역 대상] resist
  resist = '冷たい拒絶';

  // [번역 대상] resist_desc
  resist_desc =
    'いきなりの親密な接触は好まない。越境しない方がいい。だが、きっかけさえあれば……';

  // [번역 대상] swim_up
  swim_up = '逆流して';

  // [번역 대상] swim_up_desc
  swim_up_desc =
    '見くびられたものだ！出走時、負けん気で全基礎能力の発揮が上がる。';

  // [번역 대상] together
  together = 'あなたと一緒';

  // [번역 대상] together_desc
  together_desc = 'トレーニング効果+5%。';
};
