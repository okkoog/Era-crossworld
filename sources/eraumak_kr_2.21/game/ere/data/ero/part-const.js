const part_enum = {
  mouth: 0,
  breast: 0,
  hand: 0,
  foot: 0,
  body: 0,
  clitoris: 0,
  virgin: 0,
  anal: 0,
  penis: 0,
  abuse: 0,
  hit: 0,
  item: 0,
  sadism: 0,
  masochism: 0,
};
Object.keys(part_enum).forEach((k, i) => (part_enum[k] = i));
part_enum.keys = Object.keys(part_enum);

/** @type {string[]} */
const part_names = [];
part_names[part_enum.mouth] = '구강';
part_names[part_enum.breast] = '가슴';
part_names[part_enum.hand] = '신체';
part_names[part_enum.foot] = '신체';
part_names[part_enum.body] = '신체';
part_names[part_enum.clitoris] = '클리';
part_names[part_enum.virgin] = '질구';
part_names[part_enum.anal] = '항문';
part_names[part_enum.penis] = '음경';
part_names[part_enum.abuse] = '가학';
part_names[part_enum.hit] = '가학';
part_names[part_enum.item] = '가학';
part_names[part_enum.sadism] = '가학';
part_names[part_enum.masochism] = '피학';

/** @type {string[]} */
const part_touch = [];
part_touch[part_enum.mouth] = '구강';
part_touch[part_enum.breast] = '가슴';
part_touch[part_enum.hand] = '손부';
part_touch[part_enum.foot] = '발부';
part_touch[part_enum.body] = '신체';
part_touch[part_enum.clitoris] = '클리';
part_touch[part_enum.virgin] = '질구';
part_touch[part_enum.anal] = '항문';
part_touch[part_enum.penis] = '음경';
part_touch[part_enum.abuse] = '가학';
part_touch[part_enum.hit] = '가학';
part_touch[part_enum.item] = '가학';
part_touch[part_enum.sadism] = '가학';
part_touch[part_enum.masochism] = '피학';

/** @type {string[]} */
const part_skills = [];
part_skills[part_enum.mouth] = '구강';
part_skills[part_enum.breast] = '유방';
part_skills[part_enum.hand] = '수음';
part_skills[part_enum.foot] = '다리';
part_skills[part_enum.body] = '신체';
part_skills[part_enum.clitoris] = '성교';
part_skills[part_enum.virgin] = '성교';
part_skills[part_enum.anal] = '항문';
part_skills[part_enum.penis] = '삽입';
part_skills[part_enum.abuse] = '가학';
part_skills[part_enum.hit] = '가학';
part_skills[part_enum.item] = '가학';
part_skills[part_enum.sadism] = '가학';

/** @type {string[]} */
const part_talents = [];
part_talents[part_enum.mouth] = '음란한입';
part_talents[part_enum.breast] = '음란한가슴';
part_talents[part_enum.body] = '음란한몸';
part_talents[part_enum.penis] = '조루';
part_talents[part_enum.clitoris] = '음란한클리토리스';
part_talents[part_enum.virgin] = '음란한자궁';
part_talents[part_enum.anal] = '음란한엉덩이';

/** @type {Record<string,string>} */
const part_gifts = {};
part_gifts[part_enum.mouth] = '방탕한입술';
part_gifts[part_enum.breast] = '요염한유방';
part_gifts[part_enum.hand] = '신의손';
part_gifts[part_enum.foot] = '신의발';
part_gifts[part_enum.penis] = '흉기';
part_gifts[part_enum.virgin] = '명기';
part_gifts[part_enum.anal] = '마성의엉덩이';

const part_names4item = {};
part_names4item[part_enum.breast] = '유두';
part_names4item[part_enum.clitoris] = '음핵';

const base_enum = {
  no: 0,
  same: 0,
  b_same: 0,
  f_same: 0,
  s_con: 0,
  b_con: 0,
  diff: 0,
  s_tri: 0,
  b_tri: 0,
  d_tri: 0,
  foot: 0,
  b_foot: 0,
};
Object.keys(base_enum).forEach((k, i) => (base_enum[k] = i));

module.exports = {
  base_enum,
  /** 身体部位的枚举类型 */
  get_skill_list: (sex) => [
    '달콤한말',
    '키스기술',
    ...Object.entries(part_skills)
      .map((e) => [Number(e), e[1]])
      .filter((e) => {
        switch (sex) {
          case 0:
            return e[0] !== part_enum.penis;
          case 1:
            return e[0] !== part_enum.clitoris && e[1] !== part_enum.virgin;
          case 10:
            return e[0] !== part_enum.clitoris;
        }
      })
      .map((e) => e[1])
      .filter((e, i, l) => i === l.indexOf(e)),
  ],
  /** 身体部位对应的快感名称 */
  motion_enum: {
    // 躺
    lie: 0,
    // 坐
    sit: 1,
    // 站
    stand: 2,
    // 反向躺
    rev: 3,
  },
  part_enum,
  part_gifts,
  /** 快感条名称数组 */
  part_names,
  part_names4item,
  part_skills,
  part_talents,
  /** 身体部位对应的部位名称 */
  part_touch,
  pleasure_list: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.body,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    part_enum.sadism,
    part_enum.masochism,
  ],
  /** 接触部位名称数组 */
  touch_list: [
    part_enum.mouth,
    part_enum.breast,
    part_enum.body,
    part_enum.hand,
    part_enum.penis,
    part_enum.clitoris,
    part_enum.virgin,
    part_enum.anal,
    part_enum.foot,
    part_enum.sadism,
    part_enum.masochism,
  ],
  towards_enum: {
    // 시계(우)
    right: 0,
    // 반시계(좌)
    left: 1,
  },
  up_enum: { down: 0, up: 1 },
};
