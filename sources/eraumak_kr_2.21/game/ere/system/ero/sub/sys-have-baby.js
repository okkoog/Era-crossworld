const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_like_chara,
  sys_punish_unfaithful,
} = require('#/system/sys-calc-chara-others');
const { init_chara } = require('#/system/sys-init-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_ero } = require('#/event/ero/ero-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');
const get_child_name = require('#/utils/naming');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { get_date } = require('#/data/date-indicator');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_filtered_talents } = require('#/data/info-generator');
const { gene_juel_names } = require('#/data/other-const');
const { gene_type_colors } = require('#/data/race/model/uma-gene');
const { adaptability_names } = require('#/data/train-const');

const duplicate_names = {};
duplicate_names['하야카와 타즈나'] = 1;
duplicate_names['토키노 미노루'] = 1;
duplicate_names['시대의 패자'] = 1;
duplicate_names['아키카와 야요이'] = 1;
duplicate_names['노던 테이스트'] = 1;
duplicate_names['사타케 메이'] = 1;
duplicate_names['딕터스'] = 1;

function check_duplicate(name) {
  return (
    duplicate_names[name] > 0 ||
    era
      .getAddedCharacters()
      .findIndex((cid) => era.get(`callname:${cid}:-1`) === name) >= 0 ||
    era
      .getAllCharacters()
      .findIndex((cid) => era.get(`static:${cid}:name`) === name) >= 0
  );
}

/**
 * 随机赋予3项性格特质
 * @type {number[]}
 */
const inherited_talents = [...new Array(18).fill(0).map((_, i) => i), 20];

async function rename() {
  let w_length = false;
  let w_duplicate = false;
  let flag = true;
  let ret = '';
  while (flag) {
    if (w_length) {
      era.print('孩子的名字不能超过 8 个字符!');
    }
    if (w_duplicate) {
      era.print(`已经有名为 ${ret} 的角色!`);
    }
    ret = (await era.input()).toString();
    w_length = ret.length > 8;
    w_duplicate = check_duplicate(ret);
    if (!w_length && !w_duplicate) {
      return ret;
    }
  }
}

/**
 * @param {number} cid child id
 * @param {number} fid father id
 * @param {number} mid mother id
 */
async function name_baby(cid, fid, mid) {
  let ret, rand_param;
  // 虽然不是很情愿，但是还是留一下吧，只有玩家是孩子父亲或者母亲的情况下才拥有命名决定权
  if (mid > 0 && fid > 0) {
    // 如果和玩家没关系，直接用母亲来命名
    rand_param = mid;
  } else if (era.get('flag:징벌강도') >= 2) {
    // 性奴和孕袋没有命名权
    rand_param = mid || fid;
  } else {
    if (
      await select_yes_or_no('', `${mid ? '엄마' : '아빠'}에게 이름을 짓게 한다`, '이름을 짓는다')
    ) {
      rand_param = mid || fid;
    } else {
      era.print('아이에게 어떤 이름을 지어줄까?');
      ret = await rename();
    }
  }
  if (rand_param > 0) {
    ret = get_child_name(rand_param);
  }
  if (check_duplicate(ret)) {
    era.print(`${ret} (이)라는 이름의 캐릭터가 이미 존재합니다! 다시 입력: `);
    ret = await rename();
  } else if (
    (!mid || !fid) &&
    rand_param > 0 &&
    ret.replace(/\d+$/, '').length !== ret.length &&
    (await select_yes_or_no([
      get_chara_talk(mid).get_colored_name(),
      '의 아이 이름은',
      ret,
      '……',
      { isBr: true },
      '다시 지을까요?',
    ]))
  ) {
    ret = await rename();
  }
  era.set(`callname:${cid}:-2`, era.set(`callname:${cid}:-1`, ret));
  await era.printAndWait([
    get_chara_talk(mid).get_colored_name(),
    '의 아이는 ',
    get_chara_talk(cid).get_colored_name(),
    '(이)라는 이름이 되었다!',
  ]);
}

/** @param {number} mid */
async function sys_have_baby(mid) {
  const m_life_marks = LifeEventMarks.get_marks(mid);
  const fid = m_life_marks.sperm;
  const ch_id = era.add('flag:신생아ID', 1) - 1;
  let src_id = era.get(`cflag:${mid}:템플릿캐릭터`);
  if (src_id === -1) {
    if (mid > 0) {
      src_id = mid;
    } else {
      src_id = era.get(`cflag:${fid}:템플릿캐릭터`);
      src_id = src_id !== -1 ? src_id : fid;
    }
  }

  init_chara(ch_id, src_id);
  inherited_talents.forEach((talent_id) =>
    era.set(`talent:${ch_id}:${talent_id}`, 0),
  );
  let m_count = get_random_value(0, 1);
  let f_count = get_random_value(0, 1);
  /** @type {{id:number,val:number}[]} */
  let tmp_list = [];
  if (m_count > 0) {
    tmp_list = gacha(
      inherited_talents
        .map((tid) => {
          return {
            id: tid,
            val: era.get(`talent:${mid}:${tid}`),
          };
        })
        .filter((talent) => talent.val > 0),
      m_count,
    );
  }
  if ((m_count = tmp_list.length) > 0) {
    tmp_list.forEach((talent) =>
      era.set(`talent:${ch_id}:${talent.id}`, talent.val),
    );
  }
  if (f_count > 0) {
    tmp_list = gacha(
      inherited_talents
        .map((tid) => {
          return {
            id: tid,
            val: era.get(`talent:${fid}:${tid}`),
          };
        })
        .filter((talent) => talent.val > 0),
      f_count,
    );
  }
  if ((f_count = tmp_list.length) > 0) {
    tmp_list.forEach((talent) =>
      era.set(`talent:${ch_id}:${talent.id}`, talent.val),
    );
  }
  gacha(
    inherited_talents.filter((tid) => !era.get(`talent:${ch_id}:${tid}`)),
    3 - f_count - m_count,
  ).forEach((tid) =>
    era.set(`talent:${ch_id}:${tid}`, 2 * get_random_value(0, 1) - 1),
  );
  era.set(
    `talent:${ch_id}:종잡을수없음`,
    Number(era.get(`talent:${ch_id}:종잡을수없음`) > 0),
  );
  const c_sex = era.get(`cflag:${ch_id}:성별`);

  // 随机赋予1项名器特质
  const p_talent_count = get_random_value(0, 1);
  const p_talents = get_filtered_talents(c_sex, 50);
  p_talents.forEach((tid) => era.set(`talent:${ch_id}:${tid}`, 0));
  if (p_talent_count > 0) {
    gacha(p_talents, p_talent_count).forEach((tid) =>
      era.set(`talent:${ch_id}:${tid}`, 1),
    );
  }

  const xp_talent_count = get_random_value(0, 1);
  const xp_extended_count = get_random_value(0, 1);
  const talent_arr = [
    // 淫乱系
    ...get_filtered_talents(c_sex, 60),
    // xp系
    ...new Array(8).fill(0).map((_, i) => i + 40),
  ];
  talent_arr.forEach((tid) => era.set(`talent:${ch_id}:${tid}`, 0));
  // 随机继承一项xp特质
  if (xp_extended_count > 0) {
    gacha(
      talent_arr.filter(
        (tid) =>
          era.get(`talent:${mid}:${tid}`) || era.get(`talent:${fid}:${tid}`),
      ),
      xp_extended_count,
    ).forEach((tid) =>
      era.set(
        `talent:${ch_id}:${tid}`,
        Math.min(
          1,
          era.get(`talent:${mid}:${tid}`) || era.get(`talent:${fid}:${tid}`),
        ),
      ),
    );
  }
  // 随机赋予一项xp特质
  if (xp_talent_count > 0) {
    gacha(
      talent_arr.filter((tid) => !era.get(`talent:${ch_id}:${tid}`)),
      xp_talent_count,
    ).forEach((tid) =>
      era.set(
        `talent:${ch_id}:${tid}`,
        tid >= 60 ? (Math.random() > 0.5) * 5 - 4 : 1,
      ),
    );
  }

  const s_talent_count = get_random_value(0, 1);
  /**
   * 随机获得一项中毒特质
   * @type {number[]}
   */
  const semen_talents = new Array(8)
    .fill(0)
    .map((_, i) => i + 70)
    .filter((talent_id) => talent_id !== 71 || talent_id !== 75 || c_sex !== 1);
  semen_talents.forEach((tid) => era.set(`talent:${ch_id}:${tid}`, 0));
  if (s_talent_count > 0) {
    gacha(semen_talents, s_talent_count).forEach((tid) =>
      era.set(`talent:${ch_id}:${tid}`, 1),
    );
  }

  era.set(`talent:${ch_id}:모유분비`, 0);
  era.set(`talent:${ch_id}:유두타입`, 0);
  if (c_sex !== 1) {
    if (era.get(`talent:${mid}:모유분비`) > 1) {
      era.set(
        `talent:${ch_id}:모유분비`,
        Math.random() < 0.25 * (era.get(`talent:${mid}:모유분비`) - 1) ? 3 : 0,
      );
    }
    era.set(
      `talent:${ch_id}:유두타입`,
      get_random_value(0, era.get(`talent:${mid}:유두타입`)),
    );
  }

  let random_val;
  adaptability_names.forEach((e) => {
    let val = era.get(`cflag:${ch_id}:${e}적성`);
    random_val = Math.random();
    if (random_val < 0.1) {
      val += random_val < 0.05 ? 1 : -1;
      if (val > 7) {
        val = 7;
      } else if (val < 0) {
        val = 0;
      }
      era.set(`cflag:${ch_id}:${e}적성`, val);
    }
  });

  // 身高三围的突变
  if (Math.random() < 0.1) {
    era.add(
      `cflag:${ch_id}:키`,
      2 * (era.get(`cflag:${fid}:키`) > era.get(`cflag:${ch_id}:키`)) - 1,
    );
  }
  if (c_sex !== 1) {
    (random_val = Math.random()) < 0.1 &&
      era.add(`cflag:${ch_id}:가슴둘레`, random_val < 0.05 ? 1 : -1);
  }
  if ((random_val = Math.random()) < 0.1) {
    era.add(`cflag:${ch_id}:허리둘레`, random_val < 0.05 ? 1 : -1);
  }
  if ((random_val = Math.random()) < 0.1) {
    era.add(`cflag:${ch_id}:엉덩이둘레`, random_val < 0.05 ? 1 : -1);
  }

  era.set(`cflag:${ch_id}:성격`, get_random_value(-3, 3));
  era.set(`cflag:${ch_id}:성장단계`, 0);

  const cur_month = era.get('flag:현재월');
  const cur_week = era.get('flag:현재주');
  const birth_day = 7 * cur_week + Math.floor(7 * Math.random()) - 6;
  const date = get_date();

  era
    .getAddedCharacters()
    .filter(
      (cid) =>
        cid !== ch_id &&
        (era.get(`cflag:${cid}:모계캐릭`) ||
          era.get(`cflag:${cid}:부계캐릭`)) === (mid || fid),
    )
    .forEach((cid) => {
      era.set(`relation:${ch_id}:${cid}`, 300);
      era.set(`relation:${cid}:${ch_id}`, 300);
      era.set(
        `callname:${ch_id}:${cid}`,
        era.get(`cflag:${cid}:성별`) === 1 ? '오빠' : '언니',
      );
      era.set(`callname:${cid}:${ch_id}`, c_sex === 1 ? '동생' : '동생');
    });
  era.set(`cflag:${ch_id}:부계캐릭`, fid);
  era.set(`cflag:${ch_id}:모계캐릭`, mid);
  era.set(`cflag:${ch_id}:출생월`, cur_month);
  era.set(`cflag:${ch_id}:출생일`, birth_day);
  era.set(`cflag:${ch_id}:육성턴수합산`, 'x');
  era.set(`cflag:${ch_id}:재육성가능`, 0);
  era.set(`abl:${ch_id}:광둥어`, 0);
  era.set(`abl:${ch_id}:영어`, 0);
  era.set(`abl:${ch_id}:프랑스어`, 0);
  const rand_lan = get_random_value(5, 7);
  era.set(
    `abl:${ch_id}:${rand_lan}`,
    Math.min(era.get(`abl:${mid}:${rand_lan}`), 3),
  );
  era.set(`jewel:${ch_id}:분홍색`, 0);
  era.set(`jewel:${ch_id}:푸른색`, 0);
  era.set(`jewel:${ch_id}:흰색`, 0);
  // 和玩家相关的新生儿自动进队
  // 无关的会在招募池子里
  era.set(
    `cflag:${ch_id}:모집상태`,
    1 - era.set(`cflag:${ch_id}:무작위모집`, Number(fid > 0 && mid > 0)),
  );
  era.set(`relation:${ch_id}:${mid}`, era.set(`relation:${ch_id}:${fid}`, 400));
  era.set(`relation:${mid}:${ch_id}`, era.set(`relation:${fid}:${ch_id}`, 400));
  era.set(`callname:${ch_id}:${fid}`, '파파');
  era.set(`callname:${ch_id}:${mid}`, '마마');
  era.set(
    `callname:${fid}:${ch_id}`,
    era.set(`callname:${mid}:${ch_id}`, c_sex === 1 ? '아들' : '딸'),
  );
  era.set(
    `love:${ch_id}`,
    era.get('flag:후손애정제한') > 0 ? era.get('flag:초기애정도') : 0,
  );
  era.set(`cstr:${ch_id}:출산경험`, `출생날짜 ${date}`);
  const f_check = era.add(`exp:${fid}:아이숫자`, 1);
  const m_check = era.add(`exp:${mid}:출산횟수`, 1);
  m_life_marks.sperm = 0;
  if (f_check >= 8) {
    if (!fid) {
      global_achievement.father = 1;
      if (global_achievement.mother > 0) {
        global_achievement.famother = 1;
      }
    }
    if (sys_add_titles(fid, { c: buff_colors[2], n: '대종마' })) {
      await era.waitAnyKey();
    }
  }
  if (m_check >= 8) {
    if (!mid) {
      global_achievement.mother = 1;
      if (global_achievement.father > 0) {
        global_achievement.famother = 1;
      }
    }
    if (sys_add_titles(mid, { c: buff_colors[2], n: '영웅의 어머니' })) {
      await era.waitAnyKey();
    }
  }

  const father = get_chara_talk(fid);
  const mother = get_chara_talk(mid);
  get_custom_check(ch_id).check_birth();
  era.print([
    '【',
    mother.get_colored_name(),
    '은(는) ',
    father.get_colored_name(),
    '의 모습을 어렴풋이 닯은 건강한 아이를 출산했다!】',
  ]);
  era.set(
    `maxbase:${mid}:체력`,
    Math.max(era.get(`maxbase:${mid}:체력`) - 400, 200),
  );
  era.add(`base:${mid}:체력`, 0);
  era.set(
    `maxbase:${mid}:기력`,
    Math.max(era.get(`maxbase:${mid}:기력`) - 400, 200),
  );
  era.add(`base:${mid}:기력`, 0);
  if (!fid && era.get(`cflag:${mid}:부계캐릭`) === 0) {
    global_achievement.ck_m = 1;
  }
  if (!mid && era.get(`cflag:${fid}:모계캐릭`) === 0) {
    global_achievement.ck_f = 1;
  }
  if (
    (!fid && era.get(`cflag:${mid}:모계캐릭`) === 0) ||
    (!mid && era.get(`cflag:${fid}:부계캐릭`) === 0)
  ) {
    global_achievement.ck_d = 1;
  }
  if (
    global_achievement.ck_m +
      global_achievement.ck_f +
      global_achievement.ck_d >=
    2
  ) {
    global_achievement.ck = 1;
  }
  await get_custom_ero(mid || fid).have_baby(father, mother, ch_id);
  await name_baby(ch_id, fid, mid);

  get_custom_mec(ch_id).set_callname();
  const child = get_chara_talk(ch_id);
  const c_call = child.sex_code === 1 ? '아들' : '딸';
  if (!era.get(`cstr:${fid}:자녀경험`)) {
    era.set(`cstr:${fid}:자녀경험`, [
      `${c_call} `,
      child.get_colored_name(),
      ` 출생날짜 ${date}`,
    ]);
  }
  if (!era.get(`cstr:${mid}:자녀경험`)) {
    era.set(`cstr:${mid}:자녀경험`, [
      `${date}에 태어난 ${c_call} `,
      child.get_colored_name(),
    ]);
  }
  if (!era.get(`cstr:${ch_id}:털색`)) {
    era.set(
      `cstr:${ch_id}:털색`,
      era.get(`cstr:${mid}:털색`) || era.get(`cstr:${fid}:털색`),
    );
  }
  const c_life_marks = LifeEventMarks.get_marks(ch_id);
  c_life_marks.unexpected_child = m_life_marks.unexpected_pregnant;
  m_life_marks.unexpected_pregnant = 0;
  m_life_marks.report = 0;

  if (!fid && era.get(`love:${mid}`) < 90 && (mid < 340 || mid > 342)) {
    if (era.get(`mark:${mid}:동심`) >= 2) {
      sys_like_chara(mid, 0, 50);
      add_jewel_reward(mid, '순종', 200);
    } else {
      add_jewel_reward(mid, '순종', 50);
    }
  } else if (!fid || !mid) {
    if (
      !mid &&
      c_life_marks.unexpected_child === unexpected_pregnant_enum.mother_sleep
    ) {
      sys_like_chara(mid || fid, 0, 200);
      add_jewel_reward(mid || fid, '순종', 400);
    } else {
      sys_like_chara(mid || fid, 0, 100);
      add_jewel_reward(mid || fid, '순종', 200);
    }
  }
  const j_index = get_random_value(0, 2);
  let j_num = 0;
  if (!fid) {
    j_num = get_random_value(25, 75);
  } else if (!mid) {
    j_num = get_random_value(75, 125);
  }
  if (j_num > 0) {
    era.add(`juel:0:${gene_juel_names[j_index]}`, j_num);
    era.print([
      get_chara_talk(0).get_colored_name(),
      ' 획득 ',
      {
        content: `${gene_juel_names[j_index]}인자 × ${j_num}`,
        color: gene_type_colors[j_index],
      },
    ]);
  }
  if (
    new Array(3)
      .fill(0)
      .map((_, i) => 340 + i)
      .filter((e) => e !== fid && e !== mid)
      .reduce((p, c) => sys_like_chara(c, 0, 50 * (1 + !mid)) || p, false)
  ) {
    await era.waitAnyKey();
  }
  await sys_punish_unfaithful(mid || fid, era.get(`love:${mid || fid}`));
}

module.exports = sys_have_baby;
