const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const {
  check_erect,
  check_lubrication,
  get_bust_delta,
  get_penis_size,
} = require('#/system/ero/sys-calc-ero-status');
const {
  sys_check_hide_relation_and_love,
  sys_check_limit_relation_and_love,
} = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { calc_attr_score } = require('#/data/calc-attr-score');
const chara_score = require('#/data/chara-score-table.json');
const {
  buff_colors,
  el_success_color,
  skin_colors,
} = require('#/data/color-const');
const { hair_colors } = require('#/data/const.json');
const { mark_colors } = require('#/data/const.json');
const { get_date } = require('#/data/date-indicator');
const status_desc = require('#/data/desc/status.json');
const talent_desc = require('#/data/desc/talents.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  slavery_descriptions,
  slavery_titles,
} = require('#/data/ero/mark-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { part_enum } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const {
  penis_state,
  pregnant_stage_enum,
  skin_desc,
  trained_talent_names,
  virgin_state,
} = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_names } = require('#/data/train-const');

const level_and_desc = {
  love: {
    border: [1, 25, 50, 75, 90, 100],
    mark: ['보통', '희미', '모호', '욕망', '열애', '연인', '애착'],
  },
  honour: {
    border: [500, 1000, 2000, 5000],
    mark: ['신참', '숙련', '중견', '거장', '전설'],
    buff: [0, 1, 2, 3, 5, 10, 15],
  },
  attr_score: [
    'G',
    'G+', // 100
    'F',
    'F+', // 200
    'E',
    'E+', // 300
    'D',
    'D+', // 400
    'C',
    'C', // 500
    'C+',
    'C+', // 600
    'B',
    'B', // 700
    'B+',
    'B+', // 800
    'A',
    'A', // 900
    'A+',
    'A+', // 1000
    'S',
    'S', // 1100
    'SS',
    'SS', // 1200
    'SS',
    'UG', // 1300
    'UG',
    'UF', // 1400
    'UF',
    'UE', // 1500
    'UE',
    'UD', // 1600
    'UD',
    'UC', // 1700
    'UC',
    'UB', // 1800
    'UB',
    'UA', // 1900
    'UA',
  ],
  chara_score,
  relation: {
    border: [-100, 0, 75, 150, 225, 375, 525],
    mark: ['실망', '의심', '냉담', '화목', '열정', '호감', '친밀', '불변'],
  },
};

const talent_names = [
  ['둔감함', '감성적'],
  ['자만심', '자격지심'],
  ['강인함', '엄살쟁이'],
  ['명랑함', '음울함'],
  ['외향적', '내성적'],
  ['상냥함', '반항적'],
  ['나약함', '강세'],
  ['츤데레', '솔직함'],
  ['낙관적', '비관적'],
  ['엽기', '무관심'],
  ['정조관념없음', '정결'],
  ['사교적', '사회공포증'],
  ['깔끔함', '단정치 못함'],
  ['시간엄수', '올빼미족'],
  ['절제력있음', '먹보'],
  ['근면함', '게으름'],
  ['영리함', '사치'],
  ['허약체질', '신체건장'],
];

const breast_talent_names = ['빈유', '', '거유', '폭유'];

const title_desc = [' 트레이너', ' 우마무스메', ' 성노예', ' 임신주머니'];

/**
 * @param {number} cid
 * @param {boolean} [show_true_bust=false]
 * @returns {string}
 */
function get_breast_cup(cid, show_true_bust = false) {
  const delta = get_bust_delta(cid, show_true_bust);
  if (delta < 0) {
    return '-';
  }
  if (delta < 10) {
    return 'AA';
  }
  return String.fromCharCode(65 + Math.floor(delta / 2.5) - 4);
}

/** @param {string} cup */
function get_talent_bust_size(cup) {
  const cup_char = cup.charCodeAt(0);
  return Math.min(cup_char > 45 && Math.floor((cup_char - 66) / 2), 2);
}

/**
 * @param {number} score
 * @returns {string}
 */
function get_chara_rank(score) {
  let score_level = 0;
  while (score >= level_and_desc.chara_score.border[score_level]) {
    score_level++;
  }
  return level_and_desc.chara_score.mark[score_level];
}

/**
 * @param {number} sex
 * @param {number} begin_talent_id
 * @returns {number[]}
 */
function get_filtered_talents(sex, begin_talent_id) {
  switch (begin_talent_id) {
    case 50:
      // 名器系
      return new Array(7)
        .fill(0)
        .map((_, i) => i + 50)
        .filter(
          (talent_id) =>
            (talent_id !== 51 || sex !== 1) &&
            (talent_id !== 54 || sex > 0) &&
            (talent_id !== 55 || sex !== 1),
        );
    case 60:
      // 调教完成系
      return new Array(7)
        .fill(0)
        .map((_, i) => 60 + i)
        .filter(
          (talent_id) =>
            (talent_id !== 61 || sex !== 1) &&
            (talent_id !== 63 || sex === 0) &&
            (talent_id !== 64 || sex !== 1) &&
            (talent_id !== 66 || sex > 0),
        );
  }
}

/**
 * @param {number} love
 * @param {number} cid
 * @returns {string}
 */
function get_love_mark(love, cid) {
  if ((sys_check_hide_relation_and_love(cid) & 0b1) > 0) {
    return '?';
  }
  let level = 0;
  while (love >= level_and_desc.love.border[level]) {
    level++;
  }
  if (sys_check_limit_relation_and_love(cid)) {
    level = Math.min(level, 1);
  }
  return level_and_desc.love.mark[level];
}

/**
 * @param {number} relation
 * @param {number} cid
 * @returns {string}
 */
function get_relation_mark(cid, relation = era.get(`relation:${cid}:0`)) {
  if (sys_check_hide_relation_and_love(cid) > 0) {
    return '?';
  }
  let level = 0;
  while (relation > level_and_desc.relation.border[level]) {
    level++;
  }
  return level_and_desc.relation.mark[level];
}

function get_trainer_level() {
  const honour = era.get('flag:현재명성');
  if (honour <= 0) {
    return -1;
  }
  let level = 0;
  while (honour >= level_and_desc.honour.border[level]) {
    level++;
  }
  return level;
}

module.exports = {
  /** @param {number} adaptability */
  get_adaptability_rank(adaptability) {
    if (adaptability >= 7) {
      return 'S';
    }
    return String.fromCharCode(71 - adaptability);
  },
  /** @param {number} attr */
  get_attr_rank(attr) {
    return level_and_desc.attr_score[Math.floor(attr / 50)] || 'US';
  },
  get_breast_cup,
  /** @param {number} [_weeks] */
  get_celebration(_weeks) {
    const weeks = ((_weeks || era.get('flag:현재턴수')) - 1) % 48;
    switch (weeks) {
      case 0: // 一月第一周
        return '새해';
      case 5: //二月第二周
        return '발렌타인데이';
      case 8: //三月第一周
        return '전당 주간';
      case 13: //四月第二周
        return '팬 대감사제';
      case 29: //八月第二周
        return '축제';
      case 39: // 十月第四周
        return '할로윈';
      case 47: //十二月第四周
        return '크리스마스';
      default:
        return '';
    }
  },
  get_chara_rank,
  /**
   * @param {number} cid
   * @param {boolean} [is_number]
   * @returns {number|string}
   */
  get_chara_score(cid, is_number) {
    let score = era.get(`exp:${cid}:스킬평가점수`);
    score += attr_names.reduce(
      (s, c) => s + calc_attr_score(era.get(`base:${cid}:${c}`)),
      0,
    );
    if (is_number) {
      return score;
    }
    return get_chara_rank(score);
  },
  /**
   * @param {number} cid
   * @returns {{content:string,[color]:string,display:string,[opacity]:number}[]}
   */
  get_ero_status(cid) {
    const status_list = [];
    const sex_state =
      cid > 0
        ? [penis_state.chara, virgin_state.chara]
        : [penis_state.player, virgin_state.player];
    if (era.get(`mark:${cid}:음문`) === 3) {
      const { slave } = CharaInmon.get(cid),
        obj = {
          color: buff_colors[2],
          content: slavery_titles[slave],
          fontWeight: 'bold',
        };
      if (cid > 0 && slave > 0) {
        obj.title = `[${obj.content}]：${slavery_descriptions[slave]}`;
      }
      status_list.push(obj);
    }
    if (era.get('tflag:주도권') === cid) {
      status_list.push({ color: buff_colors[1], content: '주도' });
    }
    if (get_penis_size(cid) && era.get(`talent:${cid}:동정`)) {
      status_list.push({
        color: buff_colors[2],
        content: sex_state[0][era.get(`talent:${cid}:동정`)],
      });
    }
    if (era.get(`cflag:${cid}:질크기`) && era.get(`talent:${cid}:처녀`)) {
      status_list.push({
        color: buff_colors[2],
        content: sex_state[1][era.get(`talent:${cid}:처녀`)],
      });
    }
    if (era.get(`tcvar:${cid}:발정`)) {
      status_list.push({
        color: buff_colors[2],
        content: '발정!',
        key: '발정',
      });
    }
    if (era.get(`base:${cid}:성욕`) >= lust_border.want_sex) {
      status_list.push({
        color: buff_colors[2],
        content: '흥분!',
        key: '흥분',
      });
    }
    if (
      era.get(`status:${cid}:우마뾰이S`) > 0 ||
      era.get(`status:${cid}:숙면`) > 0
    ) {
      status_list.push({
        color: buff_colors[2],
        content: '숙면!',
        key: '숙면',
      });
    } else if (era.get(`tcvar:${cid}:탈력`)) {
      status_list.push({
        color: buff_colors[2],
        content: '탈력!',
        key: '탈력',
      });
    }
    if (era.get(`cflag:${cid}:질크기`) && era.get(`ex:${cid}:질파열`)) {
      status_list.push({
        color: buff_colors[3],
        content: '질파열!',
        key: '질파열',
      });
    }
    if (era.get(`ex:${cid}:애널파열`)) {
      status_list.push({
        color: buff_colors[3],
        content: '애널파열!',
        key: '애널파열',
      });
    }
    if (check_erect(cid)) {
      status_list.push({
        color: buff_colors[2],
        content: '발기!',
        key: '발기',
      });
    }
    if (check_lubrication(cid, part_enum.breast)) {
      status_list.push({ color: buff_colors[2], content: '가슴 윤활' });
    }
    if (
      era.get(`cflag:${cid}:질크기`) &&
      check_lubrication(cid, part_enum.virgin)
    ) {
      status_list.push({ color: buff_colors[2], content: '젖음' });
    }
    if (check_lubrication(cid, part_enum.anal)) {
      status_list.push({ color: buff_colors[2], content: '항문 윤활' });
    }
    if (era.get(`tcvar:${cid}:유두돌출`) > 0) {
      status_list.push({
        color: buff_colors[2],
        content: '유두돌출!',
        key: '유두돌출',
      });
    }
    const mark_level = cid ? era.get(`mark:${cid}:음문`) : 3;
    if (mark_level >= 2 && era.get(`status:${cid}:배란기`)) {
      status_list.push({ color: buff_colors[2], content: '위험일' });
    }
    sys_get_item_status(cid, status_list);
    if (era.get(`talent:${cid}:모유분비`)) {
      status_list.push({ color: buff_colors[2], content: '모유분비' });
    }
    if (era.get(`tequip:${cid}:안대`) !== -1) {
      status_list.push({ color: buff_colors[0], content: '안대' });
    }
    if (era.get(`tequip:${cid}:목줄`) !== -1) {
      status_list.push({ color: buff_colors[0], content: '목줄' });
    }
    if (era.get(`tcvar:${cid}:콘돔`)) {
      status_list.push({ color: buff_colors[0], content: '콘돔' });
    }
    if (
      era.get(`status:${cid}:반콘돔`) &&
      era.get(`cflag:${cid}:자궁내정액`)
    ) {
      status_list.push({
        color: buff_colors[2],
        content: '콘돔 용해!',
        key: '콘돔 용해',
      });
    }
    if (
      era.get(`status:${cid}:경구피임약`) ||
      era.get(`status:${cid}:사후피임약`)
    ) {
      status_list.push({ color: buff_colors[0], content: '피임' });
    }
    const orgasm_denial = era.get(`ex:${cid}:슨도메`);
    if (orgasm_denial) {
      status_list.push({
        color: buff_colors[2],
        content: `슨도메(${orgasm_denial})`,
        key: '슨도메',
      });
    }
    const orgasm_stop = era.get(`tcvar:${cid}:절정억제`);
    if (orgasm_stop) {
      status_list.push({
        color: buff_colors[2],
        content: `절정억제!(${orgasm_stop})`,
        key: '절정억제',
        opacity: orgasm_stop > 1 ? 1 : 0.5,
      });
    }
    if (
      era.get(`cflag:${cid}:임신단계`) >> pregnant_stage_enum.embryo &&
      (era.get(`cflag:${cid}:임신주수`) >= 4 || (cid && mark_level >= 2))
    ) {
      status_list.push({
        color: buff_colors[0],
        content: '임신',
      });
    } else if (era.get(`status:${cid}:생리`)) {
      status_list.push({ color: buff_colors[2], content: '생리' });
    }
    const lost_mind = era.get(`tcvar:${cid}:실신`);
    if (lost_mind) {
      status_list.push({
        color: buff_colors[2],
        content: '실신!',
        key: '실신',
        opacity: lost_mind > 1 ? 1 : 0.5,
      });
    }
    const last = era.get(`tcvar:${cid}:여운`);
    if (last) {
      status_list.push({
        color: buff_colors[2],
        content: '여운!',
        key: '여운',
        opacity: last > 1 ? 1 : 0.5,
      });
    }
    if (era.get(`tcvar:${cid}:질확장`)) {
      status_list.push({
        color: buff_colors[2],
        content: '질 확장',
        opacity: 0.5,
      });
    }
    if (era.get(`tcvar:${cid}:항문확장`)) {
      status_list.push({
        color: buff_colors[2],
        content: '항문 확장',
        opacity: 0.5,
      });
    }
    const penis_disabled = era.get(`tcvar:${cid}:불응기`);
    if (penis_disabled) {
      status_list.push({
        color: buff_colors[0],
        content: '현자',
        opacity: penis_disabled > 1 ? 1 : 0.5,
      });
    }
    return status_list.map((e) => {
      let temp;
      if ((temp = status_desc[e.key || e.content])) {
        e.title = `[${e.key || e.content}]：${temp}`;
      }
      e.display = 'inline-block';
      e.content = `[${e.content}]`;
      delete e.key;
      return e;
    });
  },
  get_filtered_talents,
  /** @param {string} hair_color */
  get_hair_color(hair_color) {
    const colors = hair_colors[hair_color];
    if (!colors) {
      return undefined;
    }
    return colors[3] || `hsl(${colors[0]}deg ${colors[1]}% ${colors[2]}%)`;
  },
  /** @param {number} cid */
  get_love_border(cid) {
    const love = era.get(`love:${cid}`) || 0;
    let level = 0;
    while (love >= level_and_desc.love.border[level]) {
      level++;
    }
    return level_and_desc.love.border[level];
  },
  /**
   * @param {number} cid
   * @returns {string[]}
   */
  get_love_info(cid) {
    if (!cid) {
      return ['-'];
    }
    if ((sys_check_hide_relation_and_love(cid) & 0b1) > 0) {
      return ['?', '(?)'];
    }
    if (sys_check_limit_relation_and_love(cid)) {
      const love = Math.min(era.get(`love:${cid}`), 24);
      return [get_love_mark(love, cid), `(${love})`];
    }
    const love = era.get(`love:${cid}`);
    return [get_love_mark(love, cid), `(${love})`];
  },
  get_love_mark,
  /** @param {string} rank */
  get_rank_level(rank) {
    switch (rank.charAt(0)) {
      case 'U':
        return 8;
      case 'S':
        return 7;
      default:
        return 71 - rank.charCodeAt(0);
    }
  },
  /**
   * @param {number} cid
   * @param {number} [target]
   * @returns {string[]}
   */
  get_relation_info(cid, target = 0) {
    if (!cid) {
      return ['-'];
    }
    if (sys_check_hide_relation_and_love(cid) > 0) {
      return ['?', '(?)'];
    }
    const relation = era.get(`relation:${cid}:${target}`);
    return [get_relation_mark(cid, relation), `(${relation})`];
  },
  get_relation_mark,
  get_save_name() {
    const prefix =
      era.get('flag:세이브파일명') || `${era.get('callname:0:-1')} - ${get_date()}`;
    return `${prefix} (${new Date().toLocaleString('zh-CN', {
      timeZone: 'Asia/Shanghai',
    })})`;
  },
  /** @param {number} cid */
  get_skin(cid) {
    return skin_desc[era.get(`cflag:${cid}:피부색`) + 1];
  },
  /** @param {number} cid */
  get_skin_color(cid) {
    return skin_colors[era.get(`cflag:${cid}:피부색`) + 1];
  },
  get_talent: (cid) => {
    const yandere = era.get(`talent:${cid}:얀데레`),
      ret = get_custom_mec(cid).get_talents();
    if (yandere === 2 || (yandere > 0 && era.get('status:0:우마토커') > 0)) {
      const temp = {
        color: buff_colors[3],
        content: '얀데레',
        opacity: yandere / 2,
      };
      const inmon = CharaInmon.get(cid);
      if (inmon.on(plugin_enum.no_yand)) {
        delete temp.color;
        delete temp.opacity;
        temp.title = '已缓和.';
      } else if (inmon.on(plugin_enum.ntr)) {
        temp.color = el_success_color;
        delete temp.opacity;
        temp.title = '已扭曲.';
      }
      ret.push(temp);
    }
    if (era.get(`talent:${cid}:종잡을수없음`)) {
      ret.push({ content: '종잡을수없음' });
    }
    ret.push(
      ...new Array(18)
        .fill(0)
        .map((_, i) => {
          return {
            id: i,
            val: era.get(`talent:${cid}:${i}`),
          };
        })
        .filter((e) => e.val)
        .map((e) => ({
          content: talent_names[e.id][(e.val + 1) / 2],
        })),
    );
    return ret.map((e) => {
      if (e.title === undefined) {
        e.title = talent_desc[e.content];
      }
      e.content = `[${e.content}]`;
      if (e.title !== undefined) {
        e.title = `${e.content}：${e.title}`;
      }
      e.display = 'inline-block';
      return e;
    });
  },
  get_talent_bust_size,
  /** @param {number} cid */
  get_train_time(cid) {
    if (!cid) {
      return '-';
    }
    const time = era.get(`cflag:${cid}:육성턴수합산`);
    return `${['주니어', '클래식', '시니어'][Math.floor(time / 48)]}시즌 ${
      (Math.floor(time / 4) % 12) + 1
    } 월 제 ${(time % 4) + 1} 주`;
  },
  get_trainer_level,
  get_trainer_title() {
    const level = get_trainer_level();
    let title_level = level < 0 ? '실격' : level_and_desc.honour.mark[level];
    return `${title_level}${title_desc[era.get('flag:징벌강도')]}`;
  },
  get_trainer_train_buff(cid) {
    const relation = cid > 0 ? era.get(`relation:${cid}:0`) : 225;
    if (cid > 0) {
      if (relation <= -100) {
        return -5;
      } else if (relation < 0) {
        return -2.5;
      }
    }
    let level = get_trainer_level(),
      ret = 0;
    ret +=
      level_and_desc.honour.buff[
        level +
          (era.get('cflag:304:모집상태') === recruit_flags.yes) +
          (era.get('cflag:306:모집상태') === recruit_flags.yes)
      ] ?? 0;
    if (cid > 0) {
      if (relation > 525) {
        ret += 2.5;
      } else if (relation > 375) {
        ret += 1;
      } else if (relation < 225) {
        ret *= relation / 225;
      }
    }
    return ret;
  },
  get_xp(cid) {
    if (era.get(`cflag:${cid}:성장단계`) < 2) {
      return ['……'];
    }
    const show_all_body =
        !cid || era.get('status:0:우마토커') || era.get('status:0:투시렌즈'),
      breast_talent = get_talent_bust_size(get_breast_cup(cid, show_all_body)),
      talent_list = [];
    if (breast_talent_names[breast_talent + 1]) {
      talent_list.push(breast_talent_names[breast_talent + 1]);
    }
    if (
      cid > 0 &&
      era.get(`exp:${cid}:성관계횟수`) === era.get(`exp:${cid}:수면간횟수`) &&
      era.get('status:0:우마토커') === 0 &&
      era.get('status:0:우마뾰이횟수렌즈') === 0
    ) {
      return [
        ...talent_list.map((e) => {
          const print_obj = {
            color: buff_colors[2],
            content: `[${e}]`,
            display: 'inline-block',
          };
          if (talent_desc[e]) {
            print_obj.title = `[${e}]：${talent_desc[e]}`;
          }
          return print_obj;
        }),
        '……',
      ];
    }
    const sex = era.get(`cflag:${cid}:성별`);
    if (sex - 1) {
      if (era.get(`talent:${cid}:모유분비`) === 3) {
        talent_list.push('모유체질');
      }
      if (era.get(`talent:${cid}:유두타입`) === 2) {
        talent_list.push('함몰유두');
      }
      if (era.get(`talent:${cid}:숨겨진거유`) && breast_talent > 0) {
        talent_list.push('숨겨진거유');
      }
    }
    if (sys_check_cuckold(cid)) {
      talent_list.push({
        color: el_success_color,
        content: '[NTR취향]',
        title: `[NTR취향]：${talent_desc['NTR취향']}`,
      });
    }
    if (era.get(`talent:${cid}:강철의의지`)) {
      talent_list.push({
        color: mark_colors['강철'],
        content: '[강철의의지]',
        title: `[강철의의지]：${talent_desc['강철의의지']}`,
      });
    }
    talent_list.push(...new Array(3).fill(0).map((_, i) => i + 40));
    const ero = era.get(`talent:${cid}:성적성향`);
    if (ero) {
      talent_list.push(ero > 0 ? '호색' : '정조관념');
    }
    talent_list.push(
      ...new Array(4).fill(0).map((_, i) => i + 44),
      ...get_filtered_talents(sex, 50),
      ...get_filtered_talents(sex, 60)
        .map((t) => {
          return {
            id: t,
            level: era.get(`talent:${cid}:${t}`),
          };
        })
        .filter((e) => e.level)
        .map(
          (e) => trained_talent_names[era.get(`talentname:${e.id}`)][e.level],
        ),
      ...new Array(8).fill(0).map((_, i) => i + 70),
    );
    return talent_list
      .map((e) => {
        if (typeof e === 'number') {
          return era.get(`talent:${cid}:${e}`)
            ? era.get(`talentname:${e}`).toUpperCase()
            : '';
        }
        return e;
      })
      .filter((e) => e)
      .map((e) => {
        const print_obj =
          typeof e === 'object'
            ? e
            : {
                color: buff_colors[2],
                content: `[${e}]`,
              };
        print_obj.display = 'inline-block';
        if (talent_desc[e]) {
          print_obj.title = `[${e}]：${talent_desc[e]}`;
        }
        return print_obj;
      });
  },
};
