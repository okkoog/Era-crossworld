const stain_enum = {
  // 唾液
  saliva: 0,
  // 巧克力
  chocolate: 0,
  // 母乳
  milk: 0,
  // 윤활액
  lubricant: 0,
  // 정액
  semen: 0,
  // 破瓜血
  virgin: 0,
  // 撕裂伤
  wound: 0,
  // 애액
  secretion: 0,
  // 肠液
  anal: 0,
  // 污垢
  dirt: 0,
};
Object.keys(stain_enum).forEach((k, i) => (stain_enum[k] = i));

const stain_names = [];
stain_names[stain_enum.dirt] = '먼지';
stain_names[stain_enum.saliva] = '타액';
stain_names[stain_enum.wound] = '피';
stain_names[stain_enum.virgin] = '파과혈';
stain_names[stain_enum.secretion] = '애액';
stain_names[stain_enum.anal] = '장액';
stain_names[stain_enum.semen] = '정액';
stain_names[stain_enum.milk] = '모유';
stain_names[stain_enum.lubricant] = '윤활액';
stain_names[stain_enum.chocolate] = '초콜릿';

module.exports = { stain_enum, stain_names };
