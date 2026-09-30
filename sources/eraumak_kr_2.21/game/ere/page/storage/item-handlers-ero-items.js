const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const select_target_in_storage = require('#/page/storage/select-target');

const add_jewel_reward = require('#/event/snippets/add-jewel-reward');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

/** @param {Record<string,function(number):Promise>} handlers */
module.exports = (handlers) => {
  new Array(13).fill(0).forEach(
    (_, i) =>
      (handlers[i + 70] = async () => {
        era.println();
        await era.printAndWait('우마뾰이 도중에만 사용할 수 있다');
      }),
  );

  handlers[83] = async () => {
    if (await select_yes_or_no('要丢弃吗?')) {
      await era.printAndWait('丢弃了【투명이불】……');
      await era.printAndWait('……但是在丢弃之前从里面翻出了几张纸币……');
      era.set('item:투명이불', 0);
      era.add('flag:현재코인', get_random_value(10, 50));
    }
  };

  handlers[84] = handlers[85] = async (item) => {
    const ret = await select_target_in_storage(
      item,
      (cid) =>
        cid > 0 &&
        !era.get(`mark:${cid}:음문`) &&
        !era.get(`status:${cid}:음문스티커`) &&
        (era.get(`love:${cid}`) >= 25 ||
          era.get(`relation:${cid}:0`) + era.get(`love:${cid}`) * 6 > 225),
    );
    if (ret > 0) {
      const chara = get_chara_talk(ret);
      era.print([
        '给 ',
        chara.get_colored_name(),
        ' 以「暖腹」的名义贴上了',
        era.get(`itemname:${item}`),
        '……',
      ]);
      era.print([chara.get_colored_name(), ' 小腹上浮现一个花纹繁复的淫纹……']);
      era.set(`status:${ret}:음문스티커`, item - 83);
      if (item === 85) {
        add_jewel_reward(ret, '순종', 1666);
      }
      era.add(`item:${item}`, -1);
      if (sys_like_chara(ret, 0, -get_random_value(50, 100))) {
        await era.waitAnyKey();
      }
      return true;
    }
  };

  [31, 34, 35, 36, 39, 40, 41].forEach(
    (e) =>
      (handlers[e] = async () => {
        era.println();
        await era.printAndWait('우마뾰이 도중에만 사용할 수 있다');
      }),
  );

  handlers[42] = async () => {
    if (await select_yes_or_no('要丢弃吗?')) {
      await era.printAndWait('丢弃了【우마뾰이S패밀리팩】……');
      await era.printAndWait('……然后因为乱丢化学制剂被处以100马币罚款');
      era.set('item:우마뾰이S패밀리팩', 0);
      era.add('flag:현재코인', -100);
    }
  };

  handlers[37] = async (item_id) => {
    const ret = await select_target_in_storage(
      item_id,
      (e) => !era.get(`talent:${e}:모유분비`),
    );
    if (ret !== undefined) {
      const chara = get_chara_talk(ret);
      await era.printAndWait([
        chara.id ? '给 ' : '',
        chara.get_colored_name(),
        ' 服用了【모유약제】……',
        { isBr: true },
        chara.get_colored_name(),
        ' 开始分泌母乳了!',
      ]);
      sys_change_lust(ret, 100);
      era.set(`talent:${ret}:모유분비`, 2);
      era.add('item:모유약제', -1);
      return true;
    }
  };

  [32, 33].forEach(
    (e) =>
      (handlers[e] = async () => {
        era.println();
        await era.printAndWait('仅能在调教前使用');
      }),
  );

  handlers[38] = async () => {
    const me = get_chara_talk(0);
    if (me.sex_code === 1) {
      await era.printAndWait('男性不能使用【콘돔용해제】……');
    } else if (era.get('status:0:반콘돔')) {
      await era.printAndWait('已经使用过【콘돔용해제】了……');
    } else {
      const ret = await select_yes_or_no('要使用【콘돔용해제】吗?');
      if (ret) {
        await era.printAndWait([
          me.get_colored_name(),
          ' 将几滴【콘돔용해제】滴在了阴唇附近……',
        ]);
        era.set('status:0:반콘돔', 1);
        era.add('item:콘돔용해제', -1);
        return true;
      }
    }
  };
};
