const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const select_target_in_storage = require('#/page/storage/select-target');

const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { money_color, palam_colors } = require('#/data/color-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LoveLimitStatus = require('#/data/love-limit-status');
const { attr_enum, pressure_border } = require('#/data/train-const');

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  handlers[100] = async () => {
    const me = get_chara_talk(0);
    if (era.get('base:0:체력') < era.get('maxbase:0:체력')) {
      const ret = await select_yes_or_no('【발렌타인초콜릿】을 먹을까?');
      if (ret) {
        await era.printAndWait([
          me.get_colored_name(),
          '의 ',
          ...sys_change_attr_and_print(0, '체력', 200),
        ]);
        sys_change_weight(0, get_random_value(20, 40, true));
        era.add('item:발렌타인초콜릿', -1);
      }
      return true;
    } else {
      await era.printAndWait([me.get_colored_name(), '은(는) 이미 배부르다……']);
    }
  };

  handlers[0] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        era.get(`maxbase:${chara_id}:체력`) >
          era.get(`base:${chara_id}:체력`) * 2 &&
        era.get(`maxbase:${chara_id}:체력`) >= 500,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      const val = era.get(`maxbase:${aim}:체력`) / 2;
      era.add(`maxbase:${aim}:체력`, -get_random_value(100, 200));
      await era.printAndWait([
        aim_chara.get_colored_name(),
        '의 ',
        ...sys_change_attr_and_print(aim, '체력', val),
      ]);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add('item:야채주스', -1);
      return true;
    }
  };

  handlers[1] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        era.get(`maxbase:${chara_id}:체력`) >
          era.get(`base:${chara_id}:체력`) &&
        era.get(`base:${chara_id}:스태미나`) > 10,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([
        aim_chara.get_colored_name(),
        '의 ',
        ...sys_change_attr_and_print(
          aim,
          attr_enum.endurance,
          -get_random_value(10, Math.min(20, era.get(`base:${aim}:스태미나`) - 1)),
        ),
        '，',
        ...sys_change_attr_and_print(
          aim,
          '체력',
          era.get(`maxbase:${aim}:체력`),
        ),
      ]);
      era.add(`base:${aim}:약물 잔류량`, 8);
      era.add('item:강화녹즙', -1);
      return true;
    }
  };

  handlers[2] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        era.get(`maxbase:${chara_id}:기력`) >
          era.get(`base:${chara_id}:기력`) * 2 &&
        era.get(`maxbase:${chara_id}:기력`) >= 500,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      const val = era.get(`maxbase:${aim}:기력`) / 2;
      era.add(`maxbase:${aim}:기력`, -get_random_value(100, 200));
      await era.printAndWait([
        aim_chara.get_colored_name(),
        '의 ',
        ...sys_change_attr_and_print(aim, '기력', val),
      ]);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:약물 잔류량`, 8);
      era.add('item:에스프레소', -1);
      return true;
    }
  };

  handlers[3] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        (era.get(`maxbase:${chara_id}:기력`) >
          era.get(`base:${chara_id}:기력`) ||
          !sys_check_awake(chara_id)) &&
        era.get(`base:${chara_id}:지능`) > 10,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([
        aim_chara.get_colored_name(),
        '의 ',
        ...sys_change_attr_and_print(
          aim,
          attr_enum.intelligence,
          -get_random_value(10, Math.min(20, era.get(`base:${aim}:지능`) - 1)),
        ),
        '，',
        ...sys_change_attr_and_print(
          aim,
          '기력',
          era.get(`maxbase:${aim}:기력`),
        ),
      ]);
      if (!era.get(`base:${aim}:체력`) < 1) {
        era.add(`base:${aim}:체력`, 1);
      }
      era.set(`status:${aim}:숙면`, 0);
      era.set(`status:${aim}:우마뾰이S`, 0);
      era.add(`base:${aim}:약물 잔류량`, 16);
      era.add('item:각성제', -1);
      return true;
    }
  };

  handlers[4] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) => era.get(`base:${chara_id}:스트레스`) >= pressure_border.unhappy,
    );
    if (undefined !== aim) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), '의 스트레스가 줄어들었다……']);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:스트레스`, -2500);
      era.add(`base:${aim}:약물 잔류량`, 50);
      era.add('item:항우울제', -1);
      return true;
    }
  };

  handlers[5] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) => era.get(`base:${chara_id}:성욕`) >= lust_border.itch,
    );
    if (undefined !== aim) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), '의 성욕이 줄어들었다...']);
      sys_change_motivation(aim, -1) && (await era.waitAnyKey());
      era.add(`base:${aim}:성욕`, -1500);
      era.add(`base:${aim}:약물 잔류량`, 50);
      era.add('item:진정제', -1);
      return true;
    }
  };

  handlers[6] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        era.get(`base:${chara_id}:스트레스`) >= pressure_border.unhappy ||
        era.get(`base:${chara_id}:성욕`) >= lust_border.itch,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), '의 마음이 차분해졌다……']);
      era.add(`base:${aim}:스트레스`, -1200);
      era.add(`base:${aim}:성욕`, -800);
      era.add('item:청심차', -1);
      return true;
    }
  };

  handlers[7] = async (item_id) => {
    const aim = await select_target_in_storage(
      item_id,
      (chara_id) =>
        chara_id > 0 && era.get(`base:${chara_id}:성욕`) < lust_border.max,
    );
    if (aim !== undefined) {
      const aim_chara = get_chara_talk(aim);
      await era.printAndWait([aim_chara.get_colored_name(), '은(는) 조금 흥분하고 있다……']);
      era.add(`base:${aim}:스트레스`, -500);
      era.add(`base:${aim}:성욕`, 2000);
      era.add('item:최음스프레이', -1);
      return true;
    }
  };

  handlers[10] = async (item_id) => {
    const ret = await select_target_in_storage(item_id, (e) =>
      era.get(`status:${e}:살찜`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        '은(는) 더 이상 살찐 상태가 아닐 것이다……',
      ]);
      era.set(`status:${ret}:살찜`, 0);
      era.set(`base:${ret}:체중 편차`, 3200);
      era.add(`base:${ret}:약물 잔류량`, 60);
      era.add('item:속효성다이어트약', -1);
      return true;
    }
  };

  handlers[11] = async (item_id) => {
    const ret = await select_target_in_storage(item_id, (e) =>
      era.get(`status:${e}:편두통`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        '은(는) 더 이상 편두통을 겪지 않을 것이다……',
      ]);
      era.set(`status:${ret}:편두통`, 0);
      era.set(
        `base:${ret}:약물 잔류량`,
        Math.floor(
          (100 +
            20 * era.get(`talent:${ret}:신체소질`) +
            50 * era.get(`cflag:${ret}:종족`)) *
            0.8,
        ),
      );
      era.add(`base:${ret}:체중 편차`, 2400);
      era.add('item:두통뚝', -1);
      return true;
    }
  };

  handlers[12] = async (item_id) => {
    const ret = await select_target_in_storage(
      item_id,
      (e) => !era.get(`status:${e}:건강차`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        '은(는)【건강차】를 먹었다……',
      ]);
      era.set(`status:${ret}:건강차`, 1);
      era.add('item:건강차', -1);
      return true;
    }
  };

  handlers[13] = async (item_id) => {
    const ret = await select_target_in_storage(
      item_id,
      (id) =>
        id > 0 &&
        !era.get(`status:${id}:혐오약`) &&
        LoveLimitStatus.get(id).is_empty(),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.get_colored_name(),
        ' 몰래【혐오약】을 먹였다……',
        { isBr: true },
        get_chara_talk(0).get_colored_name(),
        '에 대한 호감이 사라지기 시작했다……',
      ]);
      era.set(`status:${ret}:혐오약`, 4);
      era.add(`base:${ret}:약물 잔류량`, 50);
      era.add('item:혐오약', -1);
      return true;
    }
  };

  handlers[14] = async (item_id) => {
    const love_setting = era.get('flag:턴당애정도패널티');
    const aim = await select_target_in_storage(item_id, (id) => {
      const love = era.get(`love:${id}`),
        reject = era.get(`cflag:${id}:호감거절`);
      return (
        id &&
        love > 40 &&
        (love_setting ||
          (love !== 49 && love !== 74 && love !== 89 && love !== 99) ||
          reject === 49 ||
          reject === 74 ||
          reject === 89 ||
          reject === 99) &&
        !era.get(`status:${id}:혐오약`) &&
        !era.get(`status:${id}:애정억제`) &&
        LoveLimitStatus.get(id).is_empty()
      );
    });
    if (aim !== undefined) {
      const chara = get_chara_talk(aim);
      await era.printAndWait([
        chara.get_colored_name(),
        ' 몰래【억제약】을 먹였다……',
        { isBr: true },
        chara.sex,
        get_chara_talk(0).get_colored_name(),
        '에 대한 애정이 억눌렸다……',
      ]);
      LoveLimitStatus.get(aim).set(
        era.get(`love:${aim}`),
        era.get('flag:현재턴수') + 4,
      );
      era.set(`love:${aim}`, 40);
      era.add(`base:${aim}:약물 잔류량`, 50);
      era.add('item:억제약', -1);
      return true;
    }
  };

  handlers[15] = async (item_id) => {
    const ret = await select_target_in_storage(item_id, (e) =>
      era.get(`status:${e}:살찜`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        '은(는) 당분간 살찌지 않을 것 같다……',
      ]);
      era.set(`status:${ret}:살찜`, 0);
      era.add('item:양자다이어트약', -1);
      return true;
    }
  };

  handlers[16] = async (item_id) => {
    const ret = await select_target_in_storage(item_id, (e) =>
      era.get(`status:${e}:편두통`),
    );
    if (ret !== undefined) {
      await era.printAndWait([
        get_chara_talk(ret).get_colored_name(),
        '의 편두통이 일단 사라졌다……',
      ]);
      era.set(`status:${ret}:편두통`, 0);
      era.add('item:이부프로펜', -1);
      return true;
    }
  };

  handlers[45] = handlers[46] = async (item_id) => {
    const item_name = era.get(`itemname:${item_id}`),
      aim = await select_target_in_storage(
        item_id,
        (chara_id) =>
          era.get(`base:${chara_id}:체력`) !==
          era.get(`maxbase:${chara_id}:체력`),
      );
    if (aim !== undefined) {
      const chara = get_chara_talk(aim);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 服用了【',
        item_name,
        '】……',
        { isBr: true },
        chara.get_colored_name(),
        '의 ',
        ...sys_change_attr_and_print(aim, '체력', item_id === 45 ? 400 : 150),
      ]);
      era.add(`exp:${aim}:가슴빨기양`, 200);
      sys_change_lust(aim, item_id === 45 ? 800 : 300);
      era.add(`item:${item_name}`, -1);
      return true;
    }
  };

  handlers[47] = handlers[48] = async (item_id) => {
    const item_name = era.get(`itemname:${item_id}`),
      total = era.get(`item:${item_id}`);
    let to_sell = 1,
      flag_sell = true,
      flag_print = true;
    while (flag_sell) {
      era.setAlign('center');
      (flag_print ? era.printInColRows : era.replaceInColRows)(
        [
          {
            config: { align: 'left' },
            content: `판매할【${item_name}】의 수량은?`,
            type: 'text',
          },
        ],
        [
          {
            accelerator: 2,
            config: { disabled: to_sell < 2, width: 2 },
            content: '-10',
            type: 'button',
          },
          {
            accelerator: 4,
            config: { disabled: to_sell === 0, width: 2 },
            content: '-1',
            type: 'button',
          },
          { config: { width: 2 }, content: to_sell, type: 'text' },
          {
            accelerator: 6,
            config: { disabled: to_sell === total, width: 2 },
            content: '+1',
            type: 'button',
          },
          {
            accelerator: 8,
            config: { disabled: to_sell === total, width: 2 },
            content: '+10',
            type: 'button',
          },
          { content: [], type: 'text' },
          {
            accelerator: 5,
            config: { width: 3 },
            content: '확인',
            type: 'button',
          },
          {
            accelerator: 0,
            config: { width: 3 },
            content: '취소',
            type: 'button',
          },
        ],
      );
      era.setAlign('left');
      switch (await era.input({ hideInput: true })) {
        case 2:
          to_sell = Math.max(to_sell - 10, 0);
          break;
        case 4:
          to_sell--;
          break;
        case 6:
          to_sell++;
          break;
        case 8:
          to_sell = Math.min(to_sell + 10, total);
          break;
        case 5:
          flag_sell = false;
          break;
        case 0:
          return;
      }
      flag_print = false;
    }
    await era.clear(1);
    if (
      to_sell > 0 &&
      (await select_yes_or_no([
        '要通过暗网售出 ',
        {
          color: palam_colors.notifications[1],
          content: to_sell.toString(),
          fontWeight: 'bold',
        },
        ' 瓶【',
        item_name,
        '】吗?',
      ]))
    ) {
      const money = to_sell * era.get(`itemprice:${item_id}`);
      global_achievement.play_mil2 = 1;
      await era.printAndWait([
        '售出了 ',
        {
          color: palam_colors.notifications[1],
          content: to_sell.toString(),
          fontWeight: 'bold',
        },
        ' 瓶【',
        item_name,
        '】，획득 ',
        {
          color: money_color,
          content: money.toLocaleString(),
          fontWeight: 'bold',
        },
        ' 우마코인……',
      ]);
      const my_marks = new MyEduMarks();
      if (my_marks.sell_milk === 0) {
        my_marks.sell_milk = 1;
        add_event(
          event_hooks.week_start,
          new EventObject(0, cb_enum.edu).set_arg('breakfast'),
        );
      }
      era.add(`item:${item_id}`, -to_sell);
      era.add('flag:현재코인', money);
      return true;
    }
  };

  handlers[17] = async (item_id) => {
    const ret = await select_target_in_storage(
      item_id,
      (e) => era.get(`talent:${e}:겨드랑이털성장`) < 2,
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【발모크림】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的腋毛生长得更旺盛了……',
      ]);
      era.add(`talent:${chara.id}:겨드랑이털성장`, 1);
      era.add(`cflag:${chara.id}:겨드랑이털`, 1);
      era.add('item:발모크림', -1);
      return true;
    }
  };

  handlers[18] = async (item_id) => {
    const ret = await select_target_in_storage(item_id, (e) =>
      era.get(`talent:${e}:겨드랑이털성장`),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【제모크림】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的腋毛生长得更慢了……',
      ]);
      const talent = era.add(`talent:${chara.id}:겨드랑이털성장`, -1);
      era.set(
        `cflag:${chara.id}:겨드랑이털`,
        talent ? Math.max(era.get(`cflag:${chara.id}:겨드랑이털`) - 1, 0) : 0,
      );
      era.add('item:제모크림', -1);
      return true;
    }
  };

  handlers[19] = async (item_id) => {
    const ret = await select_target_in_storage(
      item_id,
      (e) => era.get(`talent:${e}:음모성장`) < 2,
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【음부발모크림】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的阴毛生长得更旺盛了……',
      ]);
      era.add(`talent:${chara.id}:음모성장`, 1);
      era.add(`cflag:${chara.id}:음모`, 1);
      era.add('item:음부발모크림', -1);
      return true;
    }
  };

  handlers[20] = async (item_id) => {
    const ret = await select_target_in_storage(item_id, (e) =>
      era.get(`talent:${e}:음모성장`),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 使用了【음부제모크림】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 的阴毛生长得更慢了……',
      ]);
      const talent = era.add(`talent:${chara.id}:음모성장`, -1);
      era.set(
        `cflag:${chara.id}:음모`,
        talent ? Math.max(era.get(`cflag:${chara.id}:음모`) - 1, 0) : 0,
      );
      era.add('item:음부제모크림', -1);
      return true;
    }
  };
};
