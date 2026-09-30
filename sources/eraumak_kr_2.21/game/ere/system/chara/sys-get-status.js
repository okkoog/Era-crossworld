const era = require('#/era-electron');

const sys_get_item_status = require('#/system/chara/sys-get-item-status');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors, sex_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const {
  slavery_descriptions,
  slavery_titles,
} = require('#/data/ero/mark-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const DarleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-340');
const GodolphinLifeMarks = require('#/data/event/life-event-marks/life-event-marks-341');
const ByerleyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-342');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const LightLifeMarks = require('#/data/event/life-event-marks/life-event-marks-345');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { foreign_locations } = require('#/data/locations');
const LoveLimitStatus = require('#/data/love-limit-status');
const { pressure_border, train_buff_info } = require('#/data/train-const');

/**
 * @param {number} cid
 * @returns {{content:string,[color]:string,display:string,[opacity]:number}[]}
 */
function sys_get_status(cid) {
  const status_list = [],
    show_train_buff =
      era.get(`cflag:${cid}:종족`) > 0 &&
      (cid === 0 || era.get(`cflag:${cid}:육성턴수합산`) < 3 * 48);
  if (era.get(`mark:${cid}:음문`) === 3) {
    const sex_equip = CharaInmon.get(cid).slave,
      obj = {
        color: buff_colors[2],
        content: slavery_titles[sex_equip],
        fontWeight: 'bold',
      };
    if (cid === 0) {
      obj.title =
        sex_equip > 0
          ? '현역 임신 주머니: 시니어급 레이스만 참가 가능. 급여 없음. 레이스 상금 배분율 +400%. 우마무스메와 성교하거나 아이를 낳으면 명성 획득. 자식 세대 레이스 참가 시 명성 보너스 +100%.'
          : '현역 성노예: 시니어급 레이스만 참가 가능. 급여 없음. 레이스 상금 배분율 +400%. 우마무스메와 성교 시 명성 획득.';
    } else {
      obj.title = sex_equip > 0 ? slavery_descriptions[sex_equip] : undefined;
    }
    status_list.push(obj);
  }
  if (era.get(`status:${cid}:음문스티커`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '음문스티커',
      title: status_desc['음문스티커'],
    });
  }
  status_list.push(...get_custom_mec(cid).get_status(show_train_buff));
  if (era.get(`status:${cid}:생일`) > 0) {
    status_list.push({
      color: buff_colors[1],
      content: '생일!',
      title: status_desc['생일'],
    });
  }
  era.get(`status:${cid}:영역`) > 0 &&
    status_list.push({
      color: buff_colors[1],
      content: '영역!',
      title: status_desc['영역'],
    });
  era.get(`status:${cid}:건강차`) > 0 &&
    status_list.push({
      color: buff_colors[1],
      content: '건강차',
    });
  if (sys_check_remote(cid)) {
    status_list.push({
      color: buff_colors[0],
      content: '원격',
    });
  }
  const pressure = era.get(`base:${cid}:스트레스`);
  if (pressure === pressure_border.limit) {
    status_list.push({
      color: buff_colors[3],
      content: '붕괴!',
      title: status_desc['붕괴'],
    });
  } else if (pressure >= pressure_border.depression) {
    status_list.push({
      color: buff_colors[3],
      content: '우울!',
      title: status_desc['우울'],
    });
  } else if (pressure >= pressure_border.apprehension) {
    status_list.push({ color: buff_colors[3], content: '걱정' });
  } else if (pressure >= pressure_border.unhappy) {
    status_list.push({ color: buff_colors[3], content: '불쾌' });
  }
  if (
    pressure >= pressure_border.unhappy &&
    era.get('cflag:344:모집상태') === recruit_flags.yes
  ) {
    status_list.push({
      color: get_chara_color(344),
      content: '료카의 도움',
      title: '체력 소모가 줄어들고 스트레스 해소 효과가 높아짐.',
    });
  }
  // STATUSNAME:2 = 땡땡이
  let slack_off = 0;
  if (show_train_buff) {
    let check;
    slack_off = era.get(`status:${cid}:2`);
    if (era.get('cflag:340:모집상태') === recruit_flags.yes) {
      check = (new DarleyLifeMarks().buff + 1) * 50;
      status_list.push({
        color: get_chara_color(340),
        content: '여신의 용기',
        fontWeight: check > 50 ? 'bold' : undefined,
        title: `스피드 및 파워 트레이닝 효과 +${check}%.`,
      });
    }
    if (era.get('cflag:341:모집상태') === recruit_flags.yes) {
      check = (new GodolphinLifeMarks().buff + 1) * 25;
      status_list.push({
        color: get_chara_color(341),
        content: '여신의 사랑',
        fontWeight: check > 25 ? 'bold' : undefined,
        title: `지능 트레이닝 효과 +${check * 2}%，스킬 포인트 트레이닝 효과 +${check}%.`,
      });
    }
    if (era.get('cflag:342:모집상태') === recruit_flags.yes) {
      check = (new ByerleyLifeMarks().buff + 1) * 50;
      status_list.push({
        color: get_chara_color(342),
        content: '여신의 규율',
        fontWeight: check > 50 ? 'bold' : undefined,
        title: `스태미나 및 근성 트레이닝 효과 +${check}%.`,
      });
    }
    if (
      era.get('cflag:343:모집상태') === recruit_flags.yes &&
      foreign_locations[era.get(`cflag:${cid}:위치`)] > 0
    ) {
      check = new MayLifeMarks().buff;
      status_list.push({
        color: get_chara_color(343),
        content: '사타케의 도움',
        fontWeight: check > 0 ? 'bold' : undefined,
        title: `해외 원정의 부정적 영향이${check > 0 ? '경감' : '절반이'}된다.`,
      });
    }
    if (era.get('cflag:345:모집상태') === recruit_flags.yes) {
      check = (new LightLifeMarks().buff + 1) * 25;
      status_list.push({
        color: get_chara_color(345),
        content: '라이츠의 도움',
        fontWeight: check > 25 ? 'bold' : undefined,
        title: `트레이닝 경험치 획득량 +${check}%.`,
      });
    }
    // CFLAGNAME:40 = 컨디션
    if (!slack_off && era.get(`cflag:${cid}:40`) === 2) {
      if (era.get('cflag:346:66') === recruit_flags.yes) {
        check = LifeEventMarks.get_marks(346).buff;
        status_list.push({
          color: get_chara_color(346),
          content: '전설의 격려',
          fontWeight: check > 0 ? 'bold' : void 0,
          title: '트레이닝 성공률과 효과가 ' + (check > 0 ? '상승' : '약간 상승'),
        });
      }
      if (era.get('cflag:347:66') === recruit_flags.yes) {
        check = LifeEventMarks.get_marks(347).buff;
        status_list.push({
          color: get_chara_color(347),
          content: '선구자의 격려',
          fontWeight: check > 0 ? 'bold' : void 0,
          title: '트레이닝 성공률과 효과가 ' + (check > 0 ? '상승' : '약간 상승'),
        });
      }
      if (era.get('cflag:348:66') === recruit_flags.yes) {
        check = LifeEventMarks.get_marks(348).buff;
        status_list.push({
          color: get_chara_color(348),
          content: '아이돌의 격려',
          fontWeight: check > 0 ? 'bold' : void 0,
          title: '트레이닝 성공률과 효과가 ' + (check > 0 ? '상승' : '약간 상승'),
        });
      }
    }
    const train_buff = era.get(`status:${cid}:연습X서수`);
    if (train_buff) {
      status_list.push({
        color: buff_colors[Number(train_buff > 0)],
        content: train_buff_info[train_buff + 1],
      });
    }
  }
  // STATUSNAME:10 = 숙면
  // STATUSNAME:39 = 우마뾰이S
  if (era.get(`status:${cid}:10`) > 0 || era.get(`status:${cid}:39`) > 0) {
    status_list.push({ color: buff_colors[0], content: '숙면' });
  } else {
    if (era.get(`status:${cid}:밤샘`) > 0) {
      status_list.push({ color: buff_colors[0], content: '밤샘' });
    }
    if (slack_off > 0) {
      status_list.push({ color: buff_colors[0], content: '땡땡이' });
    }
  }
  const hurt = era.get(`status:${cid}:부상`);
  if (hurt) {
    status_list.push({
      color: buff_colors[3],
      content: `부상(${hurt})`,
      title: status_desc['부상'],
      opacity: hurt > 1 ? 1 : 0.5,
    });
  }
  const tired = era.get(`status:${cid}:피로`);
  if (tired > 0) {
    status_list.push({
      color: buff_colors[0],
      content: `피로(${tired})`,
      title: status_desc['피로'],
      opacity: tired > 1 ? 1 : 0.5,
    });
  }
  new Array(3).fill(0).forEach((_, i) => {
    const status_id = 7 + i,
      status_name = era.get(`statusname:${status_id}`),
      num = era.get(`status:${cid}:${status_id}`);
    if (num > 0) {
      status_list.push({
        color: buff_colors[0],
        content: `${status_name}(${num})`,
        title: status_desc[status_name],
      });
    }
  });
  if (era.get(`status:${cid}:살찜`) > 0) {
    status_list.push({ color: buff_colors[0], content: '살찜' });
    if (era.get('cflag:207:모집상태') === recruit_flags.yes) {
      status_list.push({
        color: get_chara_color(207),
        content: '엘피의 조력',
        title: '운동을 통한 다이어트 효과가 상승.',
      });
    }
  }
  const headache = era.get(`status:${cid}:편두통`);
  if (headache > 0) {
    status_list.push({ color: buff_colors[0], content: '편두통' });
  }
  if (
    hurt + tired + headache > 0 &&
    era.get('cflag:305:모집상태') === recruit_flags.yes
  ) {
    status_list.push({
      color: get_chara_color(305),
      content: '침술 요양',
    });
  }
  if (era.get(`status:${cid}:발정`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '특별휴일',
    });
  } else if (era.get(`status:${cid}:생리`) > 0) {
    status_list.push({ color: buff_colors[0], content: '생리' });
  }
  if (era.get(`mark:${cid}:음문`) > 0 && era.get(`status:${cid}:배란기`) > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '위험일',
    });
  }
  const pregnant_status = era.get(`cflag:${cid}:임신단계`);
  if (pregnant_status === 1 << pregnant_stage_enum.resume) {
    status_list.push({
      color: buff_colors[2],
      content: `산후회복(${era.get(`cflag:${cid}:임신주수`)})`,
      title: status_desc['산후회복'],
    });
  } else if (pregnant_status >> pregnant_stage_enum.late > 0) {
    status_list.push({
      color: buff_colors[2],
      content: '출산임박',
    });
  } else if (era.get(`cflag:${cid}:임신주수`) >= 4) {
    status_list.push({
      color: buff_colors[2],
      content: '임신',
    });
  }
  if (
    era.get(`cflag:${cid}:성별`) !== 1 &&
    era.get(`cflag:${cid}:성장단계`) >= 2 &&
    era.get(`talent:${cid}:모유분비`) > 0 &&
    (cid === 0 ||
      era.getCharactersInTrain().length > 0 ||
      era.get('status:0:우마토커') > 0 ||
      era.get('status:0:투시렌즈') > 0 ||
      era.get(`exp:${cid}:성관계횟수`) > era.get(`exp:${cid}:수면간횟수`))
  ) {
    status_list.push({ color: buff_colors[2], content: '모유분비' });
  }
  const lust = era.get(`base:${cid}:성욕`);
  if (lust >= lust_border.want_sex) {
    status_list.push({
      color: buff_colors[2],
      content: '흥분!',
      title: status_desc['흥분'],
    });
  } else if (lust >= lust_border.absent_mind) {
    status_list.push({ color: buff_colors[2], content: '욕구불만!' });
  } else if (lust >= lust_border.itch) {
    status_list.push({ color: buff_colors[2], content: '욕구불만' });
  }
  if (era.get(`status:${cid}:혐오약`)) {
    status_list.push({ color: sex_colors[0], content: '혐오약' });
  }
  if (!LoveLimitStatus.get(cid).is_empty()) {
    status_list.push({ color: sex_colors[0], content: '억제약' });
  }
  if (
    era.get(`status:${cid}:애정억제`) > 0 &&
    ((cid !== 32 && era.get('status:0:호감도렌즈')) ||
      era.get('status:0:우마토커'))
  ) {
    status_list.push({
      color: buff_colors[2],
      content: '克制!',
      title: status_desc['애정억제'],
    });
  }
  sys_get_item_status(cid, status_list);
  return status_list.map((e) => {
    if (e.title === undefined) {
      e.title = status_desc[e.content];
    }
    e.content = `[${e.content}]`;
    if (e.title !== undefined) {
      e.title = `${e.content}：${e.title}`;
    }
    e.display = 'inline-block';
    return e;
  });
}

module.exports = sys_get_status;
