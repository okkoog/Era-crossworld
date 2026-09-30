const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { hair_colors } = require('#/data/const.json');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { location_name } = require('#/data/locations');

const dict = {};

function check_chara_ero_image(cid) {
  return dict[cid];
}

/**
 * @param {number} cid
 * @param {number} recent_s
 * @param {number} recent_m
 * @param {number} m_abused
 * @param {number} m_hit
 * @returns {boolean}
 */
function check_excited(cid, recent_s, recent_m, m_abused, m_hit) {
  return (
    era.get(`tcvar:${cid}:발정`) ||
    era.get(`tcvar:${cid}:절정임박`) ||
    era.get(`tcvar:${cid}:여운`) ||
    era.get(`mark:${cid}:쾌락`) ||
    era.get(`mark:${cid}:음문`) ||
    era.get(`base:${cid}:성욕`) >= lust_border.itch ||
    recent_s ||
    (recent_m === part_enum.abuse && m_abused) ||
    (recent_m === part_enum.hit && m_hit)
  );
}

/**
 * @param {string} img
 * @param {string} base
 * @param {string} suffixes
 * @return {string}
 */
function get_image_name(img, base, ...suffixes) {
  if (img === base) {
    return suffixes.map((s) => `${img}${s}`).join('\t');
  }
  return [img, base]
    .map((n) => suffixes.map((s) => `${n}${s}`).join('\t'))
    .join('\t');
}

function sys_get_ero_image(
  cid,
  img_name = era.get(`cstr:${cid}:이미지T`) || era.get(`cstr:${cid}:이미지`),
  in_train = true,
) {
  const base_name = era.get(`cstr:${cid}:이미지`);
  const ret = [];
  let recent_s, recent_m, m_abused, m_hit;
  if (in_train) {
    recent_s =
      era.get(`tcvar:${cid}:방금가학`) &&
      (era.get(`talent:${cid}:도S`) || era.get(`talent:${cid}:소악마`));
    recent_m = era.get(`tcvar:${cid}:방금피학`);
    m_abused =
      era.get(`talent:${cid}:매도좋아함`) || era.get(`talent:${cid}:변태`);
    m_hit = era.get(`talent:${cid}:고통좋아함`) || era.get(`talent:${cid}:변태`);
  }
  ret.push({
    borderRadius: 20,
    names: in_train
      ? `位置_${location_name[era.get('flag:현재위치')]}`
      : '位置_自宅',
  });
  if (dict[cid]) {
    if (in_train && era.get(`tcvar:${cid}:방금절정`)) {
      ret.push(get_image_name(img_name, base_name, '_裸_高潮', '_裸'));
    } else {
      ret.push(get_image_name(img_name, base_name, '_裸'));
    }
    if (era.get(`cflag:${cid}:겨드랑이털`) >= 2) {
      ret.push(get_image_name(img_name, base_name, '_裸_腋毛'));
    }
    if (era.get(`cflag:${cid}:임신단계`) >> pregnant_stage_enum.late > 0) {
      ret.push(get_image_name(img_name, base_name, '_裸_孕'));
    }
    if (era.get(`cflag:${cid}:음모`) >= 2) {
      ret.push(get_image_name(img_name, base_name, '_裸_阴毛'));
    }
    if (
      in_train &&
      (era.get(`ex:${cid}:슨도메`) ||
        era.get(`tcvar:${cid}:절정임박`) ||
        era.get(`tcvar:${cid}:여운`))
    ) {
      ret.push(get_image_name(img_name, base_name, '_裸_汗'));
    }
    ret.push(get_image_name(img_name, base_name, '_头'));
    if (in_train) {
      if (check_excited(cid, recent_s, recent_m, m_abused, m_hit)) {
        ret.push(get_image_name(img_name, base_name, '_头_腮红'));
      }
      if (era.get(`ex:${cid}:슨도메`) || era.get(`tcvar:${cid}:절정임박`)) {
        ret.push(get_image_name(img_name, base_name, '_头_汗'));
      }
      if (!sys_check_awake(cid) || era.get(`tcvar:${cid}:탈력`)) {
        ret.push(get_image_name(img_name, base_name, '_脸_睡'));
      } else if (
        era.get(`tcvar:${cid}:방금절정`) ||
        era.get(`tcvar:${cid}:실신`)
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_高潮'));
      } else if (
        era.get(`mark:${cid}:반발`) ||
        (recent_m === part_enum.abuse && !m_abused) ||
        era.get('tflag:강간') === 0
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_嫌恶'));
      } else if (
        era.get(`mark:${cid}:고통`) ||
        (recent_m === part_enum.hit && !m_hit && !era.get(`talent:${cid}:성모`))
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_痛苦'));
      } else if (
        (recent_m && !era.get(`talent:${cid}:성모`)) ||
        era.get('tflag:강간') === cid ||
        (recent_s && era.get(`talent:${cid}:도S`))
      ) {
        ret.push(get_image_name(img_name, base_name, '_脸_兴奋'));
      } else if (era.get(`mark:${cid}:수치`) || recent_s) {
        ret.push(get_image_name(img_name, base_name, '_脸_害羞'));
      } else {
        ret.push(get_image_name(img_name, base_name, '_脸_一般'));
      }
    } else {
      ret.push(get_image_name(img_name, base_name, '_脸_一般'));
    }
    if (era.get(`cflag:${cid}:종족`) > 0) {
      ret.push(get_image_name(img_name, base_name, '_头_马耳'));
    }
    ret.push(get_image_name(img_name, base_name, '_头_发'));
    if (in_train) {
      if (
        era.get(`tcvar:${cid}:방금절정`) ||
        era.get(`mark:${cid}:고통`) >= 2 ||
        (recent_m === part_enum.abuse && !m_abused) ||
        recent_m === part_enum.hit ||
        era.get(`ex:${cid}:파처`)
      ) {
        ret.push(get_image_name(img_name, base_name, '_头_泪'));
      }
      if (era.get(`ex:${cid}:TotalEX`)) {
        ret.push(get_image_name(img_name, base_name, '_裸_雾气'));
      }
    }
  } else {
    let body_hair_css_filter =
      era.get(`cflag:${cid}:종족`) > 0
        ? hair_colors[era.get(`cstr:${cid}:털색`)] ||
          hair_colors[era.get(`cstr:${cid}:머리색`)] ||
          ''
        : '黑';
    let hair_css_filter = hair_colors[era.get(`cstr:${cid}:머리색`)] || '';
    let temp;
    if (body_hair_css_filter) {
      body_hair_css_filter = `hue-rotate(${body_hair_css_filter[0]}deg) saturate(${body_hair_css_filter[1]}%) brightness(${body_hair_css_filter[2]}%)`;
    }
    if (hair_css_filter) {
      hair_css_filter = `hue-rotate(${hair_css_filter[0]}deg) saturate(${hair_css_filter[1]}%) brightness(${hair_css_filter[2]}%)`;
    }
    if (era.get(`cflag:${cid}:종족`) > 0) {
      ret.push({
        filter: body_hair_css_filter,
        names: '通用_裸_马尾',
      });
    }
    era
      .get(`cstr:${cid}:뒷머리`)
      .split('+')
      .forEach((e) =>
        ret.push({
          filter: hair_css_filter,
          names: `通用_后发_${e}\t通用_后发_长直发`,
        }),
      );
    ret.push('通用_裸');
    if (era.get(`cflag:${cid}:겨드랑이털`) >= 2) {
      ret.push({
        filter: body_hair_css_filter,
        names: '通用_裸_腋毛',
      });
    }
    let added = '';
    if (era.get(`talent:${cid}:유방사이즈`) >= 1) {
      added += '巨';
    }
    if (era.get(`cflag:${cid}:임신단계`) >> pregnant_stage_enum.late > 0) {
      added += '孕';
    }
    if (added) {
      ret.push(`通用_裸_${added}`);
    }
    if (era.get(`cflag:${cid}:음모`) >= 2) {
      ret.push({
        filter: body_hair_css_filter,
        names: '通用_裸_阴毛',
      });
    }
    if (
      era.get(`ex:${cid}:슨도메`) ||
      era.get(`tcvar:${cid}:절정임박`) ||
      era.get(`tcvar:${cid}:여운`)
    ) {
      ret.push(`通用_裸_汗`);
    }
    if ((temp = era.get(`cstr:${cid}:중간머리`))) {
      ret.push({
        filter: hair_css_filter,
        names: `通用_中发_${temp}\t通用_后发_${temp}\t通用_后发_双马尾`,
      });
    }
    ret.push('通用_头');
    if (check_excited(cid, recent_s, recent_m, m_abused, m_hit)) {
      ret.push('通用_头_腮红');
    }
    if (
      era.get(`mark:${cid}:반발`) ||
      era.get('tflag:강간') >= 0 ||
      era.get(`mark:${cid}:고통`) ||
      recent_m ||
      (recent_s && era.get(`talent:${cid}:도S`))
    ) {
      ret.push('通用_头_阴影');
    }
    if (
      era.get(`ex:${cid}:슨도메`) ||
      era.get(`tcvar:${cid}:절정임박`) ||
      era.get(`ex:${cid}:파처`)
    ) {
      ret.push('通用_头_汗');
    }
    if (!sys_check_awake(cid) || era.get(`tcvar:${cid}:탈력`)) {
      ret.push('通用_脸_微笑');
    } else if (
      era.get(`tcvar:${cid}:방금절정`) ||
      era.get(`tcvar:${cid}:실신`)
    ) {
      ret.push('通用_脸_高潮');
    } else if (
      era.get(`mark:${cid}:반발`) ||
      (recent_m === part_enum.abuse && !m_abused) ||
      era.get('tflag:강간') === 0 ||
      era.get(`mark:${cid}:고통`) ||
      (recent_m === part_enum.hit && !m_hit && !era.get(`talent:${cid}:성모`))
    ) {
      ret.push('通用_脸_咬牙');
    } else if (
      recent_m ||
      era.get('tflag:강간') === cid ||
      (recent_s && era.get(`talent:${cid}:도S`))
    ) {
      ret.push('通用_脸_舔嘴');
    } else {
      ret.push('通用_脸_微笑');
    }
    const suffix = era.get(`cflag:${cid}:종족`) > 0 ? '_马' : '';
    ret.push({
      filter: hair_css_filter,
      names: `通用_前发_${era.get(`cstr:${cid}:앞머리`)}${suffix}\t通用_前发_厚刘海${suffix}`,
    });
    if ((temp = era.get(`cstr:${cid}:바보털`))) {
      ret.push({
        filter: hair_css_filter,
        names: `通用_呆毛_${temp}\t通用_呆毛_短`,
      });
    }
  }
  return ret;
}

module.exports = {
  check_chara_ero_image,
  set_chara_ero_image() {
    const image_names = era.get('chara').map((e) => ({
      id: e,
      name: `${era.get(`staticcstr:${e}:이미지`)}_裸`,
    }));
    const checks = era.checkImage(...image_names.map((e) => e.name));
    image_names.forEach((e, i) => {
      if (checks[i]) {
        dict[e.id] = true;
      }
    });
  },
  sys_get_ero_image,
};
