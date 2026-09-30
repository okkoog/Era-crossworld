const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');

const CustomizedInit = require('#/event/init/customized-init');
const { get_custom_init } = require('#/event/init/init-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');

const CharaTalk = require('#/utils/chara-talk');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaAvailableSkills = require('#/data/chara-available-skills');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const CharaTitles = require('#/data/chara-titles');
const { buff_colors } = require('#/data/color-const');
const { part_names, pleasure_list } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const {
  get_breast_cup,
  get_talent_bust_size,
} = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { chara_skill_dict } = require('#/data/race/skill/skill-const');
const { attr_names } = require('#/data/train-const');

/**
 * @param {number} cid
 * @param {number} [src=0]
 */
function init_chara(cid, src = 0) {
  const current = new Date().getTime();
  if (
    (era.get(`base:${cid}:스피드`) !== undefined && cid > 0) ||
    !era.addCharacter(src > 0 ? [cid, src] : cid)
  ) {
    return;
  }
  era
    .get('cstrkeys')
    .forEach((k) =>
      era.set(`cstr:${cid}:${k}`, era.get(`cstr:${cid}:${k}`) || ''),
    );
  if (src > 0) {
    era.set(`cflag:${cid}:템플릿캐릭터`, src);
    era.set(`cflag:${cid}:종족`, 1);
    era.set(`maxbase:${cid}:스피드`, 1200);
    era.set(`maxbase:${cid}:스태미나`, 1200);
    era.set(`maxbase:${cid}:파워`, 1200);
  } else {
    era.set(`cflag:${cid}:템플릿캐릭터`, -1);
  }
  const sex = get_custom_mec(cid).set_my_sex();
  era.set(`cflag:${cid}:육성턴수합산`, 4800);
  let temp;
  switch (sex) {
    case 0:
      era.set(`cflag:${cid}:음경크기`, 0);
      era.set(`cflag:${cid}:질크기`, 1);
      break;
    case 1:
      era.set(`cflag:${cid}:밑가슴둘레`, 200);
      era.set(`cflag:${cid}:음경크기`, get_random_value(1, 4));
      era.set(`cflag:${cid}:질크기`, 0);
      temp = era.get(`cflag:${cid}:키`);
      era.set(`cflag:${cid}:가슴둘레`, Math.floor(temp * 0.48));
      era.set(`cflag:${cid}:허리둘레`, Math.floor(temp * 0.47));
      era.set(`cflag:${cid}:엉덩이둘레`, Math.floor(temp * 0.51));
      break;
    case 10:
      era.set(`cflag:${cid}:음경크기`, get_random_value(1, 4));
      era.set(`cflag:${cid}:질크기`, 1);
  }
  era.set(`talent:${cid}:동정`, 1);
  era.set(`talent:${cid}:처녀`, 1);
  era.set(`talent:${cid}:조교도`, 1);
  era.set(`cflag:${cid}:임신단계`, 1 << pregnant_stage_enum.no);
  era.set(`base:${cid}:성욕`, 0);
  era.set(`base:${cid}:스트레스`, 0);
  era.set(`base:${cid}:체중 편차`, 0);
  era.set(`base:${cid}:약물 잔류량`, 0);
  if (cid > 0) {
    switch (era.get('flag:기본특성보유')) {
      case -4:
        era.set(`talent:${cid}:음란한입`, -4);
        era.set(`talent:${cid}:음란한가슴`, -4);
        era.set(`talent:${cid}:음란한몸`, -4);
        era.set(`talent:${cid}:음란한클리토리스`, -4);
        era.set(`talent:${cid}:음란한자궁`, -4);
        era.set(`talent:${cid}:음란한엉덩이`, -4);
        era.set(`talent:${cid}:조루`, -4);
        era.set(`talent:${cid}:도S`, 0);
        era.set(`talent:${cid}:매도좋아함`, 0);
        era.set(`talent:${cid}:고통좋아함`, 0);
        era.set(`talent:${cid}:조교도`, 0);
        break;
      case -1:
        era.set(`talent:${cid}:음란한입`, 0);
        era.set(`talent:${cid}:음란한가슴`, 0);
        era.set(`talent:${cid}:음란한몸`, 0);
        era.set(`talent:${cid}:음란한클리토리스`, 0);
        era.set(`talent:${cid}:음란한자궁`, 0);
        era.set(`talent:${cid}:음란한엉덩이`, 0);
        era.set(`talent:${cid}:조루`, 0);
        era.set(`talent:${cid}:도S`, 0);
        era.set(`talent:${cid}:매도좋아함`, 0);
        era.set(`talent:${cid}:고통좋아함`, 0);
        break;
      case 1:
        era.set(`talent:${cid}:음란한입`, 1);
        era.set(`talent:${cid}:음란한가슴`, 1);
        era.set(`talent:${cid}:음란한몸`, 1);
        era.set(`talent:${cid}:음란한클리토리스`, 1);
        era.set(`talent:${cid}:음란한자궁`, 1);
        era.set(`talent:${cid}:음란한엉덩이`, 1);
        era.set(`talent:${cid}:조루`, 1);
        era.set(`talent:${cid}:도S`, 1);
        era.set(`talent:${cid}:매도좋아함`, 1);
        era.set(`talent:${cid}:고통좋아함`, 1);
        era.set(`talent:${cid}:조교도`, 3);
    }
    if (era.get('flag:기본둔감보유')) {
      pleasure_list.forEach((part) =>
        era.set(`talent:${cid}:${part_names[part]}钝感`, 1),
      );
    }
  }
  era.set(
    `talent:${cid}:유방사이즈`,
    get_talent_bust_size(get_breast_cup(cid, true)),
  );
  era.set(`cstr:${cid}:승부복`, -1);
  if (
    src === 0 &&
    era.get(`abl:${cid}:광둥어`) === 5 &&
    era.get(`abl:${cid}:영어`) === 5 &&
    era.get(`abl:${cid}:프랑스어`) === 5
  ) {
    CharaTitles.get(cid).push({
      n: 'Hello world!',
      c: buff_colors[1],
    });
  }
  reset_chara(cid, true);
  get_custom_mec(cid).set_callname();
  get_custom_mec(cid).set_my_name();
  get_custom_mec(cid).init_love();
  era.set(`base:${cid}:체력`, era.get(`maxbase:${cid}:체력`));
  era.set(`base:${cid}:기력`, era.get(`maxbase:${cid}:기력`));
  if (cid > 0) {
    if (era.get(`relation:${cid}:0`) === undefined) {
      era.set(`relation:${cid}:0`, era.get('flag:우마무스메초기호감도'));
    } else {
      era.add(`relation:${cid}:0`, era.get('flag:우마무스메초기호감도') - 75);
    }
    if (era.get(`cflag:${cid}:종족`) > 0) {
      switch (era.get('flag:말딸신장')) {
        case 0:
          temp = era.get(`cflag:${cid}:키`);
          temp = [
            135 + Math.floor(((temp - 135) * (150 - 135)) / (180 - 135)),
            temp,
          ];
          temp[2] =
            era.get(`cflag:${cid}:가슴둘레`) - era.get(`cflag:${cid}:밑가슴둘레`);
          era.set(
            `cflag:${cid}:밑가슴둘레`,
            Math.floor((era.get(`cflag:${cid}:밑가슴둘레`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:가슴둘레`,
            era.get(`cflag:${cid}:밑가슴둘레`) + temp[2],
          );
          era.set(
            `cflag:${cid}:허리둘레`,
            Math.floor((era.get(`cflag:${cid}:허리둘레`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:엉덩이둘레`,
            Math.floor((era.get(`cflag:${cid}:엉덩이둘레`) * temp[0]) / temp[1]),
          );
          era.set(`cflag:${cid}:키`, temp[0]);
          break;
        case 2:
          temp = era.get(`cflag:${cid}:키`);
          temp = [
            175 + Math.floor(((temp - 135) * (224 - 175)) / (180 - 135)),
            temp,
          ];
          era.set(
            `cflag:${cid}:밑가슴둘레`,
            Math.floor((era.get(`cflag:${cid}:밑가슴둘레`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:가슴둘레`,
            Math.max(
              Math.floor((era.get(`cflag:${cid}:가슴둘레`) * temp[0]) / temp[1]),
              era.get(`cflag:${cid}:밑가슴둘레`) +
                1 +
                (era.get(`talent:${cid}:유두타입`) === 2),
            ),
          );
          era.set(
            `cflag:${cid}:허리둘레`,
            Math.floor((era.get(`cflag:${cid}:허리둘레`) * temp[0]) / temp[1]),
          );
          era.set(
            `cflag:${cid}:엉덩이둘레`,
            Math.floor((era.get(`cflag:${cid}:엉덩이둘레`) * temp[0]) / temp[1]),
          );
          era.set(`cflag:${cid}:키`, temp[0]);
      }

      switch (era.get('flag:이스터에그메커니즘')) {
        case 3:
          if (era.get('flag:기본특성보유') !== 1) {
            era.set(
              `talent:${cid}:신의발`,
              era.set(`talent:${cid}:음란한몸`, era.set(`talent:${cid}:음란한엉덩이`, 1)),
            );
          }
          break;
        case 179:
        case 621:
          if (
            era.get(`cflag:${cid}:가슴둘레`) - era.get(`cflag:${cid}:밑가슴둘레`) <
            17.5
          ) {
            era.set(
              `cflag:${cid}:가슴둘레`,
              era.get(`cflag:${cid}:밑가슴둘레`) +
                18 +
                (era.get(`talent:${cid}:유두타입`) === 2),
            );
          }
          era.set(`talent:${cid}:얀데레`, 1);
      }
    }
    const my_src_chara = era.get('cflag:0:템플릿캐릭터');
    if ((temp = era.get(`relation:${cid}`)[my_src_chara]) !== undefined) {
      era.set(`relation:${cid}:0`, temp);
    }
    if ((temp = era.get(`callname:${my_src_chara}`)[cid]) !== undefined) {
      era.set(`callname:0:${cid}`, temp);
    }
  } else {
    era.set(`talent:${cid}:얀데레`, 0);
  }
  sys_change_hair(cid);
  era.logger.debug(
    `${cid} 号角色 ${era.get(
      `callname:${cid}:-1`,
    )} 初始化完成 (${(new Date().getTime() - current).toLocaleString()}ms)`,
  );
}

CharaTalk.init_chara = init_chara;
CustomizedInit.init_chara = init_chara;

/**
 * 重置角色状态
 * 只重置属性和技能点数，不重置性能力和性经历
 * @param {number} cid
 * @param {boolean} [from_init]
 */
function reset_chara(cid, from_init) {
  if (era.get(`cflag:${cid}:종족`) > 0) {
    if (era.get(`cflag:${cid}:모집상태`) === recruit_flags.yes) {
      if (
        era.get('flag:현재월') <= 3 &&
        (era.get(`cflag:${cid}:육성턴수합산`) === 'x' ||
          era.get(`cflag:${cid}:성장단계`) < 5)
      ) {
        era.set(
          `cflag:${cid}:육성턴수합산`,
          (era.get('flag:현재턴수') - 1) % 48,
        );
        era.set(`cflag:${cid}:상속자1`, 0);
        era.set(`cflag:${cid}:상속자2`, 0);
        era.set(`cflag:${cid}:재육성가능`, 0);
        const teach_chara = era.get(`cflag:${cid}:돌봄`);
        if (teach_chara > 0) {
          era.set(`cflag:${teach_chara}:돌봄`, 0);
          era.set(`cflag:${cid}:돌봄`, 0);
        }
      }
      era.set(`cflag:${cid}:겨드랑이털`, 0);
      era.set(
        `juel:${cid}:분홍색`,
        era.set(`juel:${cid}:푸른색`, era.set(`juel:${cid}:흰색`, 0)),
      );
    } else if (!from_init) {
      era.set(`cflag:${cid}:육성턴수합산`, 4800);
    }
    attr_names.forEach((v) =>
      era.set(`base:${cid}:${v}`, era.get(`cflag:${cid}:초기${v}`)),
    );
    attr_names.forEach((v) => {
      era.set(`abl:${cid}:${v}트레이닝레벨`, 1);
      era.set(`exp:${cid}:${v}트레이닝경험`, 0);
    });
    const src_id = era.get(`cflag:${cid}:템플릿캐릭터`);
    const skill_set = chara_skill_dict[src_id > 0 ? src_id : cid] || [];
    era.set(`cflag:${cid}:명예의전당`, 0);
    CharaSkills.get(cid)
      .clear()
      .add(...skill_set.slice(0, 4));
    CharaAvailableSkills.get(cid)
      .clear()
      .add(...skill_set.slice(4));
    era.set(`exp:${cid}:스킬포인트`, 120 + 680 * (skill_set.length === 0));
    era.set(`cflag:${cid}:육성용변수`, {});
    RaceHistory.get(cid).reset();
    new CharaGenes(cid).clear();
    new CharaAvailableGenes(cid).clear();
  } else {
    attr_names.forEach((v) => {
      era.set(
        `base:${cid}:${v}`,
        era.set(`cflag:${cid}:${v}`, get_random_value(25, 75)),
      );
      era.set(`cflag:${cid}:${v}보너스`, 0);
    });
    era.set(`skill:${cid}:습득완료기술`, []);
    era.set(`skill:${cid}:습득가능기술`, []);
  }

  sys_fix_chara_base(cid);
  const stamina = era.get(`base:${cid}:체력`);
  const max_stamina = era.get(`maxbase:${cid}:체력`);
  const time = era.get(`base:${cid}:기력`);
  const max_time = era.get(`maxbase:${cid}:기력`);
  if (stamina > max_stamina) {
    era.set(`base:${cid}:체력`, max_stamina);
  }
  if (time > max_time) {
    era.set(`base:${cid}:기력`, max_time);
  }

  get_custom_init(cid)(!from_init);
}

module.exports = {
  init_chara,
  /** @param {number} cid */
  recruit_chara(cid) {
    reset_chara(cid);
    era.set(`cflag:${cid}:자율훈련`, 1);
    const honor = era.get('flag:현재명성');
    // 先结算声望奖励
    let relation = honor > 500 ? Math.floor((honor - 500) / 12) : 0;
    if (relation > 125) {
      relation = 125;
    }
    relation +=
      era.get(`relation:${cid}:0`) + 300 * sys_personal_achievement.get(cid);
    era.set(`relation:${cid}:0`, Math.min(relation, 600));
    if (era.get(`cflag:${cid}:종족`) > 0 && era.get(`talent:${cid}:얀데레`) > 0) {
      yandere_list.push(cid);
    }
  },
  reset_chara,
};
