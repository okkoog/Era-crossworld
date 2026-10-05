// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
module.exports = class extends require('#/i18n/ja-JP/kojo/106400-Mejiro-Palmer/entry') {
  // 한국어 작업 모듈 연결: daily
  daily = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/daily-64.kojo');
  // 한국어 작업 모듈 연결: edu
  edu = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/edu-64.kojo');
  // 한국어 작업 모듈 연결: ero
  ero = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/ero-64.kojo');
  // 한국어 작업 모듈 연결: love
  love = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/love-64.kojo');
  recruit = require('#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/rec-64.kojo');

  // [번역 완료] aim_desc
  aim_desc = '클래식급 6월 제2주까지 G3 이상 레이스에서 1착';

  // 한국어 작업 모듈 연결: basement
  basement = require("#/i18n/ko-KR/kojo/106400-Mejiro-Palmer/base-64.kojo");

  // [번역 완료] dependence
  dependence = '의존심';

  // [번역 완료] dependence_desc
  dependence_desc = '너만이……';

  // [번역 완료] get_basement_info
  get_basement_info(pama, you, security_level) {
    switch (security_level) {
      case 1:
        return [
          pama.get_colored_name(),
          '은(는) 조용히 ',
          you.get_colored_name(),
          '의 곁에 앉아 있다. 하지만,',
          you.get_colored_name(),
          '이(가) 이쪽을 바라보는 시선을 불안한 듯 피하고 있다……',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          '은(는) 불안한 듯 ',
          you.get_colored_name(),
          '의 얼굴을 바라보고 있다. 그래도 손을 놓을 생각은 없는 듯하다……',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          '은(는) 여전히 ',
          you.get_colored_name(),
          '을(를) 바라보며 애매한 미소를 짓고 있다……',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          '의 얼굴에는 부드러운 미소가 떠올라 있다. 시선을 돌릴 기색은 없다……',
        ];
      case 5:
        return [
          '조용한 기다림. 끊임없는 시선. 그리고……',
          pama.get_colored_name(),
          '의, 악의 없는 미소……',
        ];
    }
    return [];
  }

  // [번역 완료] notify_go_shopping
  notify_go_shopping = (pama) => [
    '【',
    pama.get_colored_name(),
    '와(과) 쇼핑하러 가자!】',
  ];

  // [번역 완료] notify_rooftop
  notify_rooftop = (pama) => ['【', pama.get_colored_name(), '은(는) 옥상에서 기다리고 있다】'];
};
