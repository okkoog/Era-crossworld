const era = require('#/era-electron');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const {
  get_item_action,
  item_enum,
  item_names,
  medicine_names,
} = require('#/data/ero/item-const');
const { part_names, part_names4item } = require('#/data/ero/part-const');
const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {Record<string,function(CharaTalk,CharaTalk,HookArg,*):Promise>} handlers */
module.exports = (handlers) => {
  handlers[ero_hooks.condom] = (attacker) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      {
        color: attacker.color,
        content: '자신',
      },
      '의 육봉에 ',
      { color: attacker.color, content: '콘돔' },
      '을 씌웠다】',
    ]);

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   */
  handlers[ero_hooks.other_condom] = (attacker, defender) =>
    era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) ',
      defender.get_colored_name(),
      '의 육봉에 ',
      { color: attacker.color, content: '콘돔' },
      '을 씌웠다】',
    ]);

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param _
   * @param {{part:number,user:number}} extra_flag
   */
  handlers[ero_hooks.use_lubricating_fluid] = async (
    attacker,
    defender,
    _,
    extra_flag,
  ) => {
    let aim_colored_name = defender.get_colored_name();
    if (extra_flag.user === attacker.id) {
      aim_colored_name = attacker.get_colored_name();
      aim_colored_name.content = '자신';
    }
    await era.printAndWait([
      '【',
      attacker.get_colored_name(),
      '은(는) 윤활액을 ',
      aim_colored_name,
      '의 ',
      {
        color: buff_colors[2],
        content: part_names[extra_flag.part],
      },
      '에 발랐다】',
    ]);
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param _
   * @param {{item:number,user:number}} extra_flag
   */
  handlers[ero_hooks.use_medicine] = (attacker, defender, _, extra_flag) => {
    if (extra_flag.user === defender.id) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 ',
        { color: buff_colors[2], content: medicine_names[extra_flag.item] },
        '을(를) 먹였다】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        { color: buff_colors[2], content: medicine_names[extra_flag.item] },
        '을(를) 복용했다】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} _
   * @param {{item:number,[owner]:number,part:number,[stay]:number}} extra_flag
   */
  handlers[ero_hooks.use_item] = (attacker, defender, _, extra_flag) => {
    if (extra_flag.stay !== undefined) {
      return era.printAndWait([
        '【',
        get_chara_talk(extra_flag.owner).get_colored_name(),
        `의 ${get_item_action(extra_flag.item, extra_flag.part)} 한`,
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        '이(가) 계속해서 ',
        get_chara_talk(extra_flag.stay).get_colored_name(),
        '의 ',
        {
          content:
            part_names4item[extra_flag.part] || part_names[extra_flag.part],
          color: buff_colors[2],
        },
        '을(를) 자극하고 있다】',
      ]);
    } else if (extra_flag.item === item_enum.electric_stunner) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '의 ',
        {
          content:
            part_names4item[extra_flag.part] || part_names[extra_flag.part],
          color: buff_colors[2],
        },
        '에 전기 충격을 가했다】',
      ]);
    } else if (extra_flag.item === item_enum.mirror) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 전신 거울을 세웠다】',
      ]);
    } else if (extra_flag.part === 99) {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        '에게 ',
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        '을(를) 착용시켰다】',
      ]);
    } else {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        defender.get_colored_name(),
        `의 `,
        {
          content:
            part_names4item[extra_flag.part] || part_names[extra_flag.part],
          color: buff_colors[2],
        },
        `에 `,
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        `을(를) ${get_item_action(extra_flag.item, extra_flag.part)}했다`,
        '】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param {{item:number,owner:number,part:number|string,user:number}} extra_flag
   */
  handlers[ero_hooks.take_off_item] = (
    attacker,
    defender,
    hook,
    extra_flag,
  ) => {
    if (extra_flag.part === '전신거울') {
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) 전신 거울을 치웠다】',
      ]);
    } else {
      let aim_colored_name = defender.get_colored_name();
      if (extra_flag.user === attacker.id) {
        aim_colored_name = attacker.get_colored_name();
        aim_colored_name.content = '자신';
      }
      return era.printAndWait([
        '【',
        attacker.get_colored_name(),
        '은(는) ',
        aim_colored_name,
        '의 ',
        {
          content:
            part_names4item[extra_flag.part] ||
            part_names[extra_flag.part] ||
            ' ',
          color: buff_colors[2],
        },
        '에서 ',
        { content: item_names[extra_flag.item], color: buff_colors[2] },
        '을(를) 제거했다】',
      ]);
    }
  };

  /**
   * @param {CharaTalk} attacker
   * @param {CharaTalk} defender
   * @param {HookArg} hook
   * @param extra_flag
   */
  handlers[ero_hooks.ask_use_item] = (attacker, defender, hook, extra_flag) =>
    handlers[ero_hooks.use_item](defender, attacker, hook, extra_flag);
};