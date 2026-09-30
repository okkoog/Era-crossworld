const era = require('#/era-electron');

const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * 定制化机制脚本，可以用于定制角色的专属机制、立绘等<br>
 * 和 CustomizedCheck 拆分是因为解决环形依赖
 */
class CustomizedMec {
  /** @type {function(number):CustomizedMec} */
  static get_custom_mec;

  /** @type {number} */
  id;

  /** @param {number} cid */
  constructor(cid) {
    this.id = cid;
  }

  /** 用于切换多口上 */
  get_this() {
    return this;
  }

  /** 初始化爱慕 */
  init_love() {
    if (era.get(`cflag:${this.id}:종족`) > 0) {
      era.set(`love:${this.id}`, era.get('flag:우마무스메초기애정도'));
    }
  }

  /** 是否可在选择互动角色界面选择 */
  is_able_to_be_selected() {
    return true;
  }

  /**
   * 是否因玩家不忠而愤怒
   * @param {number[]} partners 玩家的出轨对象列表
   */
  // eslint-disable-next-line no-unused-vars
  is_anger_for_unfaithful(partners) {
    return era.get('flag:불충실패널티') === 1;
  }

  /**
   * 是否不可参加对应比赛
   * @param {number} race 对应比赛的ID
   */
  // eslint-disable-next-line no-unused-vars
  is_race_disabled(race) {
    return false;
  }

  /** 是否允许自由报名比赛 */
  is_race_register_enabled() {
    return true;
  }

  /** 是否允许训练 */
  is_train_enabled() {
    return true;
  }

  /**
   * 获取行动体力精力消耗DEBUFF
   * @returns {number} DEBUFF的数值%，大于0时增加消耗
   */
  get_action_debuff() {
    return 0;
  }

  /**
   * 获取调教指令的额外判定值<br>
   * 调教指令判定值会影响是否能执行指令与执行指令后获取顺从还是反感因子
   * @param {number} action 调教指令ID
   * @returns {number} 调教指令判定值，会加到最终判定值中
   */
  // eslint-disable-next-line no-unused-vars
  get_ero_check(action) {
    return 0;
  }

  /** 获取爱慕获取BUFF% */
  get_love_buff() {
    return 0;
  }

  /**
   * 获取爱慕值上限
   * @returns {number} 0-100之间的整数，返回0时表示不限制
   */
  get_love_limit() {
    if (era.get(`cflag:${this.id}:모집상태`) === recruit_flags.yes) {
      return 0;
    }
    const love = era.get(`love:${this.id}`);
    if (love > 50) {
      return 67;
    }
    return 49;
  }

  /** 获取最大体力精力BUFF */
  get_maxbase_buff() {
    return 0;
  }

  /**
   * 获取干劲上限BUFF，反用
   * @returns {number} -4-0之间的整数，-4时干劲上限为极差，以此类推
   */
  get_motivation_limit() {
    return 0;
  }

  /**
   * 获取部位快感上限BUFF
   * @param {number} part 部位ID
   * @returns {number} 部位上限BUFF数值
   */
  // eslint-disable-next-line no-unused-vars
  get_param_limit_buff(part) {
    return 0;
  }

  /** 获取怀孕率BUFF */
  get_pregnant_ratio() {
    return 0;
  }

  /** 获取压力获取BUFF */
  get_pressure_buff() {
    return 0;
  }

  /**
   * 获取决胜服立绘名
   * @returns {string[]} 图片名数组，从前到后选择第一个可以显示的图片
   */
  get_race_cloth() {
    const base = era.get(`cstr:${this.id}:이미지`),
      ret = [];
    let temp;
    if ((temp = era.get(`cstr:${this.id}:승부복`)) === -1) {
      return [`${base}_运`, base, 'default'];
    } else if (temp === 0) {
      const holiday = (era.get('flag:현재턴수') - 1) % 48;
      switch (holiday) {
        case 0:
          ret.push(`${base}_春`);
          break;
        case 5:
          ret.push(`${base}_婚`);
          break;
        case 13:
          ret.push(`${base}_仆`, `${base}_应援`, `${base}_礼`, `${base}_游`);
          break;
        case 28:
        case 30:
        case 31:
          ret.push(`${base}_泳`, `${base}_夏私`);
          break;
        case 29:
          ret.push(`${base}_江户`);
          break;
        case 39:
          ret.push(`${base}_万圣`);
          break;
        case 47:
          ret.push(`${base}_圣诞`);
      }
    } else {
      ret.push(`${base}${temp}`);
    }
    ret.push(base, `${base}_运`, 'default');
    return ret;
  }

  /**
   * 获取专属强敌列表
   * @param {RaceInfo} info 比赛信息
   * @returns {(LegendUmaSelector|LegendUmaFilter)[]} 可用于解析为强敌的数据对象<br>
   * LegendUmaSelector 从已有同ID强敌的数据中选择，LegendUmaFilter 从所有已有对手的数据中筛选然后设置名字
   */
  // eslint-disable-next-line no-unused-vars
  get_race_contestants(info) {
    return [];
  }

  /**
   * 获取一着冲线时解说的特殊台词
   * @param {PseudoUma} uma
   * @param {number} race_id
   * @returns {string|array}
   */
  get_race_finish_report(uma, race_id) {
    const races = RaceHistory.get(this.id);
    const invincible = races.get_values().findIndex((e) => e.rank !== 1) === -1;
    if (race_id === race_enum.tenn_spr) {
      return '봄의 장거리 왕이 탄생했습니다!';
    } else if (race_id === race_enum.tenn_sho && uma.pop[0] === 1) {
      return ['여기서, 가을의 괴물이 ', uma.get_colored_name(), '에 의해 격파되었습니다!'];
    } else if (
      invincible &&
      races
        .get_values()
        .findIndex((e) => race_infos[e.race].race_class === class_enum.G1) ===
        -1 &&
      race_infos[race_id]?.race_class === class_enum.G1
    ) {
      return [
        '강함이란 바로 이런 것! 정말 압도적인 강함입니다! ',
        uma.get_colored_name(),
        ', 무패로 첫 G1 레이스를 재패합니다!',
      ];
    } else if (
      invincible &&
      race_id === race_enum.kiku_sho &&
      check_aim_race(races.get(), race_enum.sats_sho, 1, 1) &&
      check_aim_race(races.get(), race_enum.toky_yus, 1, 1)
    ) {
      return '무패 삼관입니다! 우마무스메 역사에 영원히 남을 위대한 기록이 탄생했습니다!!!';
    }
  }

  /** 获取好感度获取BUFF% */
  get_relation_buff() {
    return 0;
  }

  /** 获取允许上床的判定BUFF */
  get_sex_acceptable() {
    return 0;
  }

  /**
   * 获取专属状态列表
   * @param {boolean} show_train_buff 是否显示训练期间的专属状态
   * @returns {({[color]:string,content:string,[fontWeight]:string,[title]:string})[]}
   */
  // eslint-disable-next-line no-unused-vars
  get_status(show_train_buff) {
    return [];
  }

  /** 获取训练成功率BUFF% */
  get_success_rate_buff() {
    return 0;
  }

  /**
   * 照看其他角色自主训练时的额外加成
   * @param {number} chara_id 被照看者的ID
   * @param {number} attr 训练项目
   * @returns {number}
   */
  // eslint-disable-next-line no-unused-vars
  get_take_care_buff(chara_id, attr) {
    return 0;
  }

  /**
   * 获取专属特性列表
   * @returns {({[color]:string,content:string,[fontWeight]:string,[title]:string})[]}
   */
  get_talents() {
    return [];
  }

  /** 获取训练加成BUFF% */
  get_train_buff() {
    return 0;
  }

  /**
   * 获取性癖相关的描述
   * @returns {string}
   */
  get_xp_desc() {}

  /**
   * 角色扮演模式下，设置玩家扮演角色对该角色的称呼
   * @returns {boolean} 是否从模版角色数据中获取了对该角色的称呼
   */
  set_callname_from_src() {
    const my_src_chara = era.get('cflag:0:템플릿캐릭터');
    if (my_src_chara > 0 && era.get(`callname:${this.id}`)[my_src_chara]) {
      era.set(
        `callname:${this.id}:0`,
        era.get(`callname:${this.id}:${my_src_chara}`),
      );
      return true;
    }
  }

  /** 设置对玩家的默认称呼 */
  set_callname() {
    if (!this.set_callname_from_src()) {
      era.set(
        `callname:${this.id}:0`,
        '트레이너' + get_chara_talk(0).get_adult_sex_title(),
      );
    }
  }

  /**
   * 设置海外远征时的DEBUFF
   * @param {boolean} before_race 是否为参赛选手
   * @param {number} loc 要到达地点的ID
   */
  // eslint-disable-next-line no-unused-vars
  set_foreign_debuff(before_race, loc) {
    era.set(
      `status:${this.id}:현지적응실패`,
      4 - era.get(`talent:${this.id}:신체소질`),
    );
    if (before_race) {
      era.set(
        `status:${this.id}:원정레이스`,
        4 + era.get(`talent:${this.id}:자신감`),
      );
    }
  }

  /** 设置自称 */
  set_my_name() {
    if (
      era.get(`callname:${this.id}:${this.id}`) ===
      era.get(`callname:${this.id}:-2`)
    ) {
      era.set(`callname:${this.id}:${this.id}`, '我');
    }
  }

  /**
   * 设置性别
   * @returns {number}
   */
  set_my_sex() {
    const global_sex = era.get('flag:캐릭터성별');
    if (global_sex === 99) {
      if (era.get(`cflag:${this.id}:템플릿캐릭터`) === -1) {
        return era.set(
          `cflag:${this.id}:성별`,
          era.get(`staticcflag:${this.id}:성별`),
        );
      } else {
        return era.set(`cflag:${this.id}:성별`, get_random_entry([0, 10]));
      }
    } else {
      return era.set(`cflag:${this.id}:성별`, global_sex);
    }
  }

  /**
   * 设置选手数据，一般用于在参赛时给角色上专属BUFF
   * @param {PseudoUma} uma 参赛时该角色对应的选手对象
   */
  // eslint-disable-next-line no-unused-vars
  set_pseudo_uma(uma) {}
}

module.exports = CustomizedMec;
