const era = require('#/era-electron');

const { sys_check_cuckold } = require('#/system/chara/sys-calc-cheat');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const recruit_flags = require('#/data/event/recruit-flags');

/** @param {CharaTalk} chara */
async function take_care(chara) {
  const curr = era.get(`cflag:${chara.id}:돌봄`);
  era.print(
    curr > 0
      ? [
          chara.get_colored_name(),
          '이(가) 현재 돌보고 있는 캐릭터는 ',
          get_chara_talk(curr).get_colored_name(),
          '입니다……돌보는 캐릭터를 변경하시겠습니까?',
        ]
      : [chara.get_colored_name(), '에게 누구를 돌보게 하겠습니까?'],
  );
  era.printMultiColumns(
    era
      .getAddedCharacters()
      .filter(
        (e) =>
          e > 0 &&
          era.get(`cflag:${e}:모집상태`) === recruit_flags.yes &&
          era.get(`cflag:${e}:육성턴수합산`) < 3 * 48,
      )
      .map((e) => {
        const teach = curr === e ? chara.id : era.get(`cflag:${e}:돌봄`);
        return {
          accelerator: e,
          config: { align: 'center', disabled: curr === e, width: 8 },
          content:
            era.get(`callname:${e}:-2`) +
            (curr === e
              ? '（돌봄중）'
              : teach > 0
                ? `（${era.get(`callname:${teach}:-2`)} 돌봄중）`
                : ''),
          type: 'button',
        };
      }),
  );
  era.printButton('돌봄 중지', 998, { disabled: curr === 0 });
  era.printButton('현 상태 유지', 999);
  const ret = await era.input();
  if (ret === 999) {
    if (curr > 0) {
      await era.printAndWait([
        chara.get_colored_name(),
        ' 会继续照看 ',
        get_chara_talk(curr).get_colored_name(),
        '……',
      ]);
    }
  } else if (ret === 998) {
    era.set(`cflag:${curr}:돌봄`, 0);
    era.set(`cflag:${chara.id}:돌봄`, 0);
    await era.printAndWait([
      chara.get_colored_name(),
      ' 不再照看 ',
      get_chara_talk(curr).get_colored_name(),
      ' 了……',
    ]);
  } else {
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 지금부터 ',
      get_chara_talk(ret).get_colored_name(),
      '을(를) 돌보게 된다...',
    ]);
    const inmon = CharaInmon.get(chara.id);
    if (sys_check_cuckold(chara.id, inmon)) {
      if (sys_like_chara(chara.id, 0, get_random_value(10, 25))) {
        await era.waitAnyKey();
      }
    } else if (
      !inmon.on(plugin_enum.no_yand) &&
      sys_like_chara(
        chara.id,
        0,
        -get_random_value(25, 50 + era.get(`talent:${chara.id}:얀데레`) * 2),
      )
    ) {
      await era.waitAnyKey();
    }
    if (curr > 0) {
      era.set(`cflag:${curr}:돌봄`, 0);
    }
    era.set(`cflag:${chara.id}:돌봄`, ret);
    let temp;
    if ((temp = era.get(`cflag:${ret}:돌봄`)) > 0) {
      era.set(`cflag:${temp}:돌봄`, 0);
    }
    era.set(`cflag:${ret}:돌봄`, chara.id);
  }
}

module.exports = take_care;
