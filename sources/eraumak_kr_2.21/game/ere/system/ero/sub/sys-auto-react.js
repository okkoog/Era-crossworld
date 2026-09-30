const era = require('#/era-electron');

const sys_filter_ero_act = require('#/system/ero/sub/sys-filter-ero-act');
const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { run_custom_ero } = require('#/event/ero/ero-factory');

const { get_random_entry } = require('#/utils/list-utils');

const { ero_hooks } = require('#/data/event/ero-hooks');

/** @param {boolean} shown */
async function sys_auto_react(shown) {
  const current = new Date().getTime();
  const lover = era.get('tflag:현재상대');
  let action;
  if (
    !sys_check_awake(lover) ||
    era.get(`tcvar:${lover}:탈력`) ||
    era.get(`tcvar:${lover}:실신`)
  ) {
    action = ero_hooks.relax;
  } else {
    const filtered_actions = sys_filter_ero_act(lover, 0, [
      false,
      false,
      false,
      false,
      true,
      false,
      false,
    ]);
    let resist_ratio = 0;
    if (era.get(`status:${lover}:슈퍼우마뾰이Z`) || era.get('tcvar:0:실신')) {
      resist_ratio = 1;
    } else if (era.get('flag:강간저항') > 0) {
      resist_ratio =
        0.25 * Math.max(era.get('flag:징벌강도') - 1, 0) +
        0.2 * !era.get('tflag:강간') -
        0.05 * era.get(`mark:${lover}:동심`) -
        0.1 * era.get(`mark:${lover}:고통`) +
        0.1 * era.get(`mark:${lover}:수치`) +
        0.2 * era.get(`mark:${lover}:반발`) +
        0.15 * era.get(`talent:${lover}:반항의사`) +
        0.1 * era.get(`talent:${lover}:도S`) -
        0.05 *
          (era.get(`talent:${lover}:매도좋아함`) +
            era.get(`talent:${lover}:고통좋아함`)) +
        Math.pow(2, era.get(`base:${lover}:성욕`) / 1000 - 10) +
        (era.get(`base:${lover}:스트레스`) * 3) / 40000;
    }
    const dice =
      resist_ratio >= 1 ? 100 : resist_ratio <= 0 ? 0 : Math.random();
    era.logger.debug(
      `角色 ${lover} 반발：${(resist_ratio * 100).toFixed(2)}%；掷骰：${(dice * 100).toFixed(2)}`,
    );
    if (dice < resist_ratio) {
      action = ero_hooks.resist;
    } else if (
      (!era.get('tflag:강간') && get_sex_acceptable(lover) < 0) ||
      era.get(`mark:${lover}:반발`) >= 2
    ) {
      if (filtered_actions.indexOf(ero_hooks.insult) !== -1) {
        action = ero_hooks.insult;
      } else {
        action = ero_hooks.relax;
      }
    } else {
      action = get_random_entry(filtered_actions);
    }
  }
  era.logger.debug(
    `角色 ${lover} 思考反应结束!${(new Date().getTime() - current).toLocaleString()}ms`,
  );
  era.set('tflag:상대의행동', action);
  await run_custom_ero(lover, action, {
    attacker: lover,
    defender: 0,
    shown,
  });
  shown && era.println();
}

module.exports = sys_auto_react;
