// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/101900-Agnes-Digital/daily-19.js
// 대상 함수/속성: office_gift
/**
 * @file アグネスデジタル - 日常
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/daily-19.js');

module.exports = {
  ...__JaOriginal,
  // [번역 대상] office_gift — 함수/속성 전체 문맥에서 남은 원문을 번역
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        "이런 선물을 고르다니, 역시 ",
        callname,
        '！',
      ]);
    } else {
      const items = [
        '堕伯先生のサイン本',
        'カレンちゃん写真集',
        'ファル子握手券',
        'マヤちゃんぬいぐるみ',
        'メジロ家同款ティーカップ',
        'タキオン×カフェ印象マグ',
        digital.uma_sex_title + 'の走り靴モデル',
        digital.uma_sex_title + '限定コラボグッズ',
        digital.uma_sex_title + 'のイヤーカバー＆ストッキングのサイン本',
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        'わっ、',
        gift,
        '！ ここから',
        digital.uma_sex_title,
        '萌え萌えパワー、しっかり汲むよ！',
      ]);
    }
  },
};
