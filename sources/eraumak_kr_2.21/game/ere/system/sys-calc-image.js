const era = require('#/era-electron');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

module.exports = {
  /**
   * @param {number} cid
   * @returns {string[]}
   */
  get_image(cid) {
    if (cid === undefined) {
      return ['default'];
    }
    const base =
        era.get(`cstr:${cid}:이미지`) || era.get(`staticcstr:${cid}:이미지`),
      holiday = (era.get('flag:현재턴수') - 1) % 48;
    let ret = [];
    switch (era.get('flag:현재위치')) {
      case location_enum.beach_train:
      case location_enum.playground:
        if (era.get(`cflag:${cid}:위치`) === location_enum.beach) {
          ret = [`${base}_泳`, `${base}_运`];
        } else {
          ret = [`${base}_运`];
        }
        break;
      case location_enum.beach:
        if (era.get(`cflag:${cid}:위치`) === location_enum.beach) {
          ret = [`${base}_泳`, `${base}_夏私`, `${base}_夏`];
        } else {
          ret = [`${base}_夏`];
        }
        break;
      case location_enum.beach_market:
        if (holiday === 29) {
          ret = [`${base}_江户`, `${base}_夏私`];
        } else {
          ret = [`${base}_夏私`];
        }
        ret.push(`${base}_私`, `${base}_夏`);
        break;
      case location_enum.gate:
      case location_enum.mejiro:
        if (holiday === 0) {
          ret = [`${base}_春`];
        } else if (holiday === 39) {
          ret = [`${base}_万圣`];
        }
        ret.push(
          `${base}_私`,
          `${base}_${era.get('flag:계절') > 0 ? '夏' : '冬'}`,
        );
        break;
      case location_enum.race:
        if (era.get(`cflag:${cid}:모집상태`) !== recruit_flags.yes) {
          return [
            race_infos[era.get('flag:현재레이스')].race_class === class_enum.G1
              ? undefined
              : `${base}_运`,
            base,
            'default',
          ].filter((e) => e);
        }
        return get_custom_mec(cid).get_race_cloth();
      default:
        if (holiday === 5) {
          ret = [`${base}_婚`];
        } else if (holiday === 8 && era.get(`cflag:${cid}:명예의전당`)) {
          return [`${base}${era.get(`cstr:${cid}:승부복`) || ''}`, 'default'];
        } else if (holiday === 13) {
          ret = [`${base}_仆`, `${base}_应援`, `${base}_礼`, `${base}_游`];
        } else if (holiday === 47) {
          ret = [`${base}_圣诞`];
        }
        if (!(era.get(`cflag:${cid}:육성턴수합산`) < 3 * 48)) {
          ret.push(`${base}_私`);
        }
        ret.push(`${base}_${era.get('flag:계절') > 0 ? '夏' : '冬'}`);
    }
    ret.push(base, 'default');
    return ret;
  },
  switch_image() {
    era.set('flag:스탠딩일러스트타입', (era.get('flag:스탠딩일러스트타입') + 1) % 3);
  },
};
