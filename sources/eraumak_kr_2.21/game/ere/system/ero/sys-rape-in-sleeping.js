const era = require('#/era-electron');

const { sys_check_yandere } = require('#/system/chara/sys-calc-cheat');
const { check_satisfied } = require('#/system/ero/sys-calc-ero-status');
const sys_handle_ero_act = require('#/system/ero/sys-handle-ero-act');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  init_ero,
} = require('#/system/ero/sys-prepare-ero');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const page_ero = require('#/page/page-ero');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { ero_hooks } = require('#/data/event/ero-hooks');
const { get_custom_ero } = require('#/event/ero/ero-factory');

const debug = false;
const default_my_filter = new Array(5).fill(false);

/**
 * @param {number} cid
 * @param {number} [supporter=0]
 */
async function sys_rape_in_sleeping(cid, supporter = 0) {
  era.logger.debug(`角色 ${cid} 睡奸发生!`);
  begin_and_init_ero(0, cid);
  era.set('tflag:주도권', cid);
  era.set('tflag:현재상대', cid);
  if (supporter > 0) {
    init_ero(supporter);
    era.set('tflag:현재조수', supporter);
  }
  era.set('tflag:강간', cid);
  let a_count = 0;
  let current = new Date().getTime();
  let r_flag = true;
  let wake_up = false;
  let temp;
  while (r_flag) {
    await sys_handle_ero_act(ero_hooks.relax, default_my_filter, debug);
    a_count++;
    if (
      era.get(`tcvar:${cid}:도주`) > 0 ||
      (check_satisfied(cid) > 0 &&
        (!supporter || check_satisfied(supporter) > 0)) ||
      (wake_up =
        !era.get('status:0:우마뾰이S') &&
        era.get('base:0:체력') > 0 &&
        (temp = era.get('ex:0:TotalEX')) > 0 &&
        Math.random() < Math.min(temp, 5) * 0.05) ||
      a_count > 36
    ) {
      r_flag = false;
    }
  }
  current = new Date().getTime() - current;
  era.logger.debug(
    `角色 ${cid}${
      supporter > 0 ? ' & ' + supporter : ''
    } 睡奸完毕!${a_count} actions, ${current}ms, ${(current / a_count).toFixed(
      2,
    )} ms/action`,
  );
  if (wake_up) {
    await era.printAndWait([
      '【강렬한 자극에 ',
      get_chara_talk(0).get_colored_name(),
      '은(는) 잠에서 깼고, ',
      get_chara_talk(cid).get_colored_name(),
      ...(supporter > 0
        ? ['과(와) ', get_chara_talk(supporter).get_colored_name()]
        : []),
      '이(가) 위에 올라타 있었다!】',
    ]);
    await get_custom_ero(cid).raping_start(supporter);
    await page_ero(undefined, true);
  }
  await end_ero_and_show_result(wake_up);
  era.endTrain();
  era.set('status:0:밤샘', 1 - era.get('status:0:우마뾰이S'));
  era.set(`status:${cid}:밤샘`, 1);
  sys_like_chara(cid, 0, 25, false);
  if (supporter > 0) {
    era.set(`status:${supporter}:밤샘`, 1);
    sys_like_chara(supporter, 0, 25, false);
  } else if (sys_check_yandere(cid, (y) => y === 2)) {
    era.set('flag:잠자리파트너', cid);
  }
  era.set('status:0:숙면', 1);
}

module.exports = sys_rape_in_sleeping;
