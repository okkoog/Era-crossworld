const era = require('#/era-electron');

const check_nipple_clamps = require('#/system/ero/sub-calc-ero-orgasm/check-nipple-clamps');
const update_orgasms = require('#/system/ero/sub-calc-ero-orgasm/update-orgasms');
const {
  update_breast_exp,
  update_face_exp,
  update_milk_exp,
  update_secretion_exp,
} = require('#/system/ero/sys-calc-ero-exp');
const {
  change_part,
  clean_part,
  clean_part_without_item,
} = require('#/system/ero/sys-calc-ero-part');
const {
  check_erect,
  check_lubrication,
  get_bust_delta,
  get_pregnant_ratio,
  orgasm_check_list,
} = require('#/system/ero/sys-calc-ero-status');
const {
  add_juel,
  update_juels_from_talent,
} = require('#/system/ero/sys-calc-juel');
const {
  update_palam,
  update_palam_from_main_orgasm,
  update_palam_from_talent,
} = require('#/system/ero/sys-calc-palam');
const {
  merge_stain,
  rollback_penis_stain,
  set_stain,
} = require('#/system/ero/sys-calc-stain');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const add_attr_exp = require('#/event/ero/snippets/add-attr-exp');

const { get_random_value, log_max_wp } = require('#/utils/value-utils');

const { get_date } = require('#/data/date-indicator');
const { attack_juel_reward } = require('#/data/ero/battle-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const EroParticipant = require('#/data/ero/ero-participant');
const EroTouch = require('#/data/ero/ero-touch');
const { item_enum } = require('#/data/ero/item-const');
const {
  base_orgasm_juel_reward,
  damage_buff,
  damage_from_stop,
  juel_reward,
  lust_from_palam,
  orgasm_cost,
  palam_border,
  palam_from_orgasm,
  secretion_amount,
  secretion_coefficient,
  wp_coefficient,
} = require('#/data/ero/orgasm-const');
const {
  part_enum,
  part_names,
  part_talents,
  pleasure_list,
} = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { stain_enum } = require('#/data/ero/stain-const');
const { breast_size, pregnant_stage_enum } = require('#/data/ero/status-const');
const { ero_hooks } = require('#/data/event/ero-hooks');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { get_breast_cup } = require('#/data/info-generator');
const { attr_enum } = require('#/data/train-const');

/** @type {function(number):CustomizedEro} */
let get_custom_ero;
/** @type {function(number,number,*?):Promise} */
let run_custom_ero;

/**
 * @param {boolean} shown
 * @param {number} ids
 */
async function sys_calc_orgasm(shown, ...ids) {
  const date = get_date();
  for (const cid of ids) {
    const inmon = CharaInmon.get(cid);
    const l_times =
      1 +
      1 * inmon.on(plugin_enum.juicy) +
      2 * inmon.on(plugin_enum.fountain) +
      4 * inmon.on(plugin_enum.woman);
    const wp_ratio = Math.log(era.get(`base:${cid}:근성`)) / log_max_wp;
    let cost = { stamina: 0, time: 0 };
    let orgasm_count = 0;
    let limited_count = 0;
    let orgasm_part_count = 0;
    let lost_lust = 0;
    for (let i = 0; i < orgasm_check_list.length; ++i) {
      const part = orgasm_check_list[i];
      const p_name = part_names[part];
      const { curr, max, old } = update_palam(cid, part, shown);
      if (era.get(`tcvar:${cid}:절정억제`) > 0) {
        continue;
      }
      let amount = 0;
      let i_cum = false;
      let touch = new EroTouch(cid, part);
      let oid = touch.owner ?? -1;
      let opart = touch.part ?? -1;
      if (new EroTouch(oid, opart).part === part_enum.item) {
        touch.clean();
      }
      if (curr >= max) {
        i_cum = true;
        const times = Math.min(Math.floor(curr / max), 6);
        let tmp_cost = {};
        era.set(`palam:${cid}:${p_name}쾌감`, curr % max);
        let abl = era.get(`abl:${cid}:${p_name}내성`) || 0;
        if (part >= part_enum.sadism) {
          // 施虐和受虐属于精神高潮，只能造成普通高潮
          era.set(`nowex:${cid}:${p_name}절정`, times);
          Object.assign(tmp_cost, orgasm_cost.spirit);
          if (part === part_enum.masochism) {
            abl +=
              era.get(`talent:${cid}:매도좋아함`) +
              era.get(`talent:${cid}:고통좋아함`);
          }
        } else {
          if (!sys_check_awake(cid)) {
            // 昏睡时计算无自觉高潮
            era.set(`nowex:${cid}:무자각${p_name}절정`, times);
          } else {
            // 清醒时计算普通高潮
            era.set(`nowex:${cid}:${p_name}절정`, times);
          }
          Object.assign(tmp_cost, orgasm_cost.body);
          // 分泌液计算
          if (part === part_enum.breast) {
            if (
              era.get(`talent:${cid}:유두타입`) === 2 &&
              !era.get(`tcvar:${cid}:유두돌출`)
            ) {
              era.set(`tcvar:${cid}:유두돌출`, 1);
              era.set(`nowex:${cid}:유두돌출`, 1);
            }
            if (
              era.get(`cflag:${cid}:성별`) !== 1 &&
              era.get(`talent:${cid}:모유분비`) > 0
            ) {
              amount = check_nipple_clamps(
                cid,
                get_random_value(...secretion_amount.breast) *
                  secretion_coefficient.breast[era.get(`talent:${cid}:모유분비`)] *
                  (1 +
                    0.2 * (era.get(`tcvar:${cid}:여운`) > 0) +
                    get_bust_delta(cid, true) / 50) *
                  secretion_amount.orgasm_times[times - 1] *
                  l_times,
              );
            }
          } else if (part === part_enum.penis) {
            if (!era.get(`tcvar:${cid}:콘돔`)) {
              set_stain(cid, part_enum.penis, stain_enum.semen);
            }
            // 寸止判定
            // 昏睡等失去控制时无法寸止，性奴和孕袋不能寸止
            if (
              shown &&
              sys_check_awake(0) &&
              !era.get('tcvar:0:탈력') &&
              !era.get('tcvar:0:실신')
            ) {
              let stop_success = void 0;
              if (cid === 0 && era.get('flag:징벌강도') < 2) {
                const stop_turn = era.get(`ex:0:슨도메`);
                // 以等差数列计算成功率：部位快感每级可以提高 5% 寸止成功率；조루 -50% 成功率
                // 寸止成功判定，小于几率时成功寸止
                stop_success =
                  Math.random() <
                  1 -
                    ((1 + stop_turn) * stop_turn * 5) / 200 +
                    0.1 * era.get(`talent:0:강철의의지`) +
                    0.05 * abl -
                    0.5 * era.get(`talent:0:조루`);
              } else if (
                cid > 0 &&
                oid === 0 &&
                !era.get(`tcvar:${cid}:콘돔`)
              ) {
                stop_success =
                  Math.random() <
                  1 -
                    0.1 * era.get(`talent:${cid}:강철의의지`) +
                    0.05 * abl -
                    0.5 * era.get(`talent:${cid}:조루`);
              }
              if (stop_success !== undefined) {
                const ret =
                  await get_custom_ero(cid).orgasm_denial(stop_success);
                // 选择射或者没忍住就直接射了
                i_cum = !ret || !stop_success;
                if (!i_cum) {
                  if (ret === 2) {
                    // 体外成功，射到身上
                    if (opart === part_enum.mouth) {
                      opart = part_enum.keys.length;
                      clean_part(new EroParticipant(cid, part_enum.penis));
                    } else {
                      opart = part_enum.body;
                      change_part(
                        new EroParticipant(cid, part_enum.penis),
                        new EroParticipant(oid, opart),
                      );
                    }
                    i_cum = true;
                  } else if (ret === 1) {
                    era.set(`nowex:${cid}:슨도메`, 1);
                    // 恢复快感条和高潮状态
                    era.set(`palam:${cid}:음경쾌감`, curr);
                    era.set(`nowex:${cid}:음경절정`, 0);
                    era.set(`nowex:${cid}:무자각음경절정`, 0);
                  }
                }
              }
            }
            if (i_cum) {
              const stop_turn = era.get(`ex:${cid}:슨도메`);
              if (stop_turn > 0) {
                // 寸止每多一个回合，체력소모+10%
                tmp_cost.stamina *= 1 + damage_from_stop * stop_turn;
                era.set(`ex:${cid}:슨도메`, 0);
              }
              amount =
                get_random_value(...secretion_amount.penis) *
                secretion_amount.penis_times[times - 1];
              // 余韵额外射50%
              amount = Math.floor(
                amount *
                  (1 + 0.5 * (era.get(`tcvar:${cid}:여운`) > 0)) *
                  l_times,
              );
              era.add(`exp:${cid}:사정량`, amount);
              era.set(`nowex:${cid}:사정량`, amount);
              // 射精后有不应期
              // 每两级耐性-1回合不应期，조루-1回合不应期
              if (
                !era.get(`status:${cid}:펄롱K`) &&
                !era.get(`status:${cid}:펄롱P`) &&
                !inmon.on(plugin_enum.pe_up_0) &&
                !inmon.on(plugin_enum.pe_up_1)
              ) {
                era.add(
                  `tcvar:${cid}:불응기`,
                  era.get(`status:${cid}:슈퍼우마뾰이Z`) > 0 ||
                    era.get(`status:${cid}:우마뾰이Z`) > 0 ||
                    era.get(`status:${cid}:우마뾰이S`) > 0
                    ? 1 + 1
                    : Math.max(
                        8 +
                          Math.ceil(times / 2) -
                          Math.floor(3 * wp_ratio) -
                          Math.floor((era.get(`abl:${cid}:음경내성`) + 1) / 2) -
                          (era.get(`talent:${cid}:조루`) > 0),
                        1 + 1,
                      ),
                );
              }
            }
          } else {
            const ex_times =
              l_times * (era.get(`tcvar:${cid}:여운`) > 0 ? 1.2 : 1);
            if (part === part_enum.clitoris) {
              set_stain(cid, part_enum.virgin, stain_enum.secretion);
              era.add(
                `nowex:${cid}:애액분비`,
                Math.floor(
                  (get_random_value(...secretion_amount.virgin) *
                    secretion_amount.orgasm_times[times - 1] *
                    ex_times) /
                    2,
                ),
              );
              era.set(`nowex:${cid}:시오후키`, 1);
            } else if (part === part_enum.virgin) {
              set_stain(cid, part_enum.virgin, stain_enum.secretion);
              amount = era.add(
                `nowex:${cid}:애액분비`,
                Math.floor(
                  get_random_value(...secretion_amount.virgin) *
                    secretion_amount.orgasm_times[times - 1] *
                    ex_times,
                ),
              );
              era.set(`nowex:${cid}:시오후키`, 1);
            } else if (part === part_enum.anal) {
              set_stain(cid, part_enum.anal, stain_enum.anal);
              amount = Math.floor(
                get_random_value(...secretion_amount.anal) *
                  secretion_amount.orgasm_times[times - 1] *
                  ex_times,
              );
            }
          }
        }
        if (i_cum) {
          // 每级耐性减少10%高潮时体力精力消耗
          cost.stamina +=
            tmp_cost.stamina * Math.max(1 - 0.1 * abl, 0.01) * times;
          cost.time += tmp_cost.time * Math.max(1 - 0.1 * abl, 0.01) * times;
          // 专门针对寸止的情况
          // 寸止时不计算高潮次数
          // 不管肉棒高潮了几次，只射一次精
          if (part === part_enum.penis) {
            era.add(`exp:${cid}:${p_name}절정횟수`, 1);
            limited_count += 1;
          } else {
            era.add(`exp:${cid}:${p_name}절정횟수`, times);
            limited_count += times;
          }
          orgasm_count += times;
          if (i >= orgasm_check_list.length - 2) {
            // 主要部位高潮额外获得20%的因子奖励
            add_juel(cid, `${p_name}쾌감`, (palam_from_orgasm * times) / 5);
          }
          update_palam_from_main_orgasm(cid, part, times, inmon);
          orgasm_part_count++;
          if (part === part_enum.sadism || part === part_enum.masochism) {
            lost_lust += lust_from_palam * 0.75;
          } else {
            lost_lust +=
              (lust_from_palam *
                (1 -
                  Math.max(
                    0.25 *
                      (era.get(`talent:${cid}:${part_talents[part]}`) || 0),
                    0,
                  ))) /
              (1 + (part !== part_enum.penis && part !== part_enum.virgin));
          }
        }
      } else {
        // 否则按照阈值计算分泌液
        // 淫系列特性使分泌液阈值减半
        let border = era.get(`tcvar:${cid}:발정`) > 0 ? 1.5 : 1;
        if (part === part_enum.breast && era.get(`talent:${cid}:모유분비`) > 0) {
          const talent = era.get(`talent:${cid}:음란한가슴`);
          if (talent > 0) {
            border += 0.5 * talent;
          }
          border = (max * palam_border.breast) / border;
          if (curr >= border || era.get(`ex:${cid}:분유방해`) > 0) {
            if (
              era.get(`talent:${cid}:유두타입`) === 2 &&
              !era.get(`tcvar:${cid}:유두돌출`)
            ) {
              era.set(`tcvar:${cid}:유두돌출`, 1);
              era.set(`nowex:${cid}:유두돌출`, 1);
            }
            amount = check_nipple_clamps(
              cid,
              (get_random_value(...secretion_amount.breast) *
                secretion_coefficient.breast[era.get(`talent:${cid}:모유분비`)] *
                (curr - border) *
                (1 +
                  0.2 * (era.get(`tcvar:${cid}:여운`) > 0) +
                  get_bust_delta(cid, true) / 50) *
                l_times) /
                (max - border),
            );
          }
        } else if (part === part_enum.penis) {
          if (check_erect(cid) && !check_erect(cid, old)) {
            era.add(`nowex:${cid}:발기`, 1);
          }
        } else {
          const ex_times =
            l_times * (era.get(`tcvar:${cid}:여운`) > 0 ? 1.2 : 1);
          if (part === part_enum.virgin) {
            const talent = era.get(`talent:${cid}:음란한자궁`);
            if (talent > 0) {
              border += 0.5 * talent;
            }
            border = (max * palam_border.virgin) / border;
            if (curr >= border) {
              amount = Math.floor(
                (get_random_value(...secretion_amount.virgin) *
                  (curr - border) *
                  ex_times) /
                  (max - border),
              );
            }
            amount = era.add(`nowex:${cid}:애액분비`, amount);
            if (amount > 0) {
              era.add(
                `nowex:${cid}:질윤활`,
                +!check_lubrication(cid, part_enum.virgin),
              );
              set_stain(cid, part_enum.virgin, stain_enum.secretion);
            }
          } else if (part === part_enum.anal) {
            const talent = era.get(`talent:${cid}:음란한엉덩이`);
            if (talent > 0) {
              border += 0.5 * talent;
            }
            border = (max * palam_border.anal) / border;
            if (curr >= border) {
              era.add(
                `nowex:${cid}:애널윤활`,
                +!check_lubrication(cid, part_enum.anal),
              );
              set_stain(cid, part_enum.anal, stain_enum.anal);
              amount = Math.floor(
                (get_random_value(...secretion_amount.anal) *
                  (curr - border) *
                  ex_times) /
                  (max - border),
              );
            }
          }
        }
      }
      const last_action = era.get('tflag:이전행동');
      const last_supporter = era.get('tflag:이전턴의조수');
      // 分泌之后进行接触部位的污渍判定
      // 以及增加对方经历
      if (amount > 0) {
        if (part === part_enum.breast) {
          merge_stain(
            new EroParticipant(cid, part_enum.breast),
            new EroParticipant(oid, opart),
          );
          let tmp = era.get(`ex:${cid}:분유방해`);
          if (tmp > 0) {
            const nipple_orgasm_times = Math.floor(
              tmp /
                (secretion_amount.breast[1] *
                  secretion_coefficient.breast[era.get(`talent:${cid}:모유분비`)] *
                  (2 + 1 * (era.get(`tcvar:${cid}:여운`) > 0))),
            );
            if (
              era.get(`status:${cid}:우마뾰이S`) > 0 ||
              era.get(`status:${cid}:숙면`) > 0
            ) {
              // 昏睡时计算无自觉高潮
              era.add(`nowex:${cid}:무자각유두절정`, nipple_orgasm_times);
            } else {
              // 清醒时计算普通高潮
              era.add(`nowex:${cid}:유두절정`, nipple_orgasm_times);
            }
            limited_count += nipple_orgasm_times;
            orgasm_count += nipple_orgasm_times;
            // 额外喷奶量
            tmp = Math.ceil(tmp / (7 - Math.min(nipple_orgasm_times, 6)));
            amount = era.add(`nowex:${cid}:분유량`, tmp);
            era.add(`exp:${cid}:분유량`, tmp);
            // 乳头高潮的体力精力消耗结算
            // 乳头高潮无法豁免
            cost.stamina += orgasm_cost.body.stamina * nipple_orgasm_times;
            cost.time += orgasm_cost.body.time * nipple_orgasm_times;
            update_palam_from_main_orgasm(
              cid,
              part,
              nipple_orgasm_times,
              inmon,
            );
          }
          const cup = get_breast_cup(cid, true);
          const loc = era.set(`tcvar:${cid}:모유분출위치`, {
            c: [oid],
            p: opart,
          });
          if (opart === part_enum.mouth) {
            let supporter = 0;
            if (
              (last_action === ero_hooks.ask_double_suck_nipple &&
                cid === era.get('tflag:주도권')) ||
              (last_action === ero_hooks.double_suck_nipple &&
                cid === era.get('tflag:이전턴의상대'))
            ) {
              loc.c.push((supporter = last_supporter));
            }
            update_milk_exp(
              date,
              cid,
              amount,
              breast_size[cup <= 'G' ? cup : 'G'],
              oid,
              supporter,
            );
          } else if (touch.item === item_enum.milk_pump) {
            loc.i = touch.item;
            era.add(
              `tflag:${era.get(`cflag:${cid}:종족`) > 0 ? '马' : '人'}奶${
                cid === 0 ? '可卖' : '产量'
              }`,
              amount,
            );
          }
        } else if (part === part_enum.virgin) {
          merge_stain(
            new EroParticipant(cid, part_enum.virgin),
            new EroParticipant(oid, opart),
          );
          const loc = era.set(`tcvar:${cid}:조희위치`, {
            c: [oid],
            p: opart,
          });
          let supporter = -1;
          if (opart === part_enum.mouth) {
            if (
              (last_action === ero_hooks.ask_double_suck_virgin &&
                cid === era.get('tflag:주도권')) ||
              (last_action === ero_hooks.double_suck_virgin &&
                cid === era.get('tflag:이전턴의상대'))
            ) {
              loc.c.push((supporter = last_supporter));
            }
            update_secretion_exp(date, cid, amount, oid, supporter);
          } else if (opart === -1) {
            const c_part = era.get(`tcvar:${cid}:클리접촉부위`);
            if (c_part.part === part_enum.foot) {
              loc.p = part_enum.foot;
              loc.c = [c_part.owner];
            } else if (c_part.part === part_enum.penis) {
              loc.p = 101;
              loc.c = [c_part.owner];
            } else if (c_part.part === part_enum.mouth && amount >= 2) {
              loc.p = 100;
              loc.c = [c_part.owner];
              if (
                (last_action === ero_hooks.ask_double_cunnilingus &&
                  cid === era.get('tflag:주도권')) ||
                (last_action === ero_hooks.double_cunnilingus &&
                  cid === era.get('tflag:이전턴의상대'))
              ) {
                loc.c.push((supporter = last_supporter));
              }
              update_secretion_exp(
                date,
                cid,
                Math.ceil(amount / 2),
                c_part.owner,
                supporter,
              );
            }
          }
          if (era.get(`nowex:${cid}:시오후키`) > 0) {
            if (!era.get(`cstr:${cid}:첫시오후키경험`)) {
              if (sys_check_awake(cid)) {
                if (oid === -1) {
                  era.set(`cstr:${cid}:첫시오후키경험`, [
                    date,
                    '，그녀는 몸 깊은 곳에서 뿜어져 나오는 욕망의 물줄기를 처음으로 뿜었다',
                  ]);
                } else {
                  era.set(`cstr:${cid}:첫시오후키경험`, [
                    date,
                    ', ',
                    { c: oid },
                    ...(supporter > 0 ? [' 과(와) ', { c: supporter }] : []),
                    '의 앞에서 처음으로 음란한 밀액을 뿜어냈다',
                  ]);
                }
              } else {
                if (!era.get(`cstr:${cid}:무자각첫시오후키경험`)) {
                  if (oid === -1) {
                    era.set(`cstr:${cid}:무자각첫시오후키경험`, [
                      '实际上，在 ',
                      date,
                      ' 就不知不觉间分泌了第一缕蜜液',
                    ]);
                  } else {
                    era.set(`cstr:${cid}:무자각첫시오후키경험`, [
                      '사실은, ',
                      date,
                      '에 이미 ',
                      { c: oid },
                      ...(supporter > 0 ? [' 과(와) ', { c: supporter }] : []),
                      '에게 꽃꿀을 채취당한 상태였다',
                    ]);
                  }
                }
              }
            }
          }
        } else if (part === part_enum.penis) {
          if (
            (last_action === ero_hooks.ask_double_fuck ||
              last_action === ero_hooks.double_fuck) &&
            last_supporter === cid
          ) {
            oid = 0;
            opart = part_enum.virgin;
          }
          if (
            (last_action === ero_hooks.ask_double_blow_job ||
              last_action === ero_hooks.double_blow_job) &&
            opart === part_enum.keys.length
          ) {
            opart = 100;
          }
          // 避孕套避免精液沾染，所以优先判定
          if (
            era.get(`tcvar:${cid}:콘돔`) > 0 &&
            (opart !== part_enum.virgin ||
              era.get(`status:${oid}:반콘돔`) === 0)
          ) {
            era.set(`tcvar:${cid}:사정위치`, { p: -1 });
            era.set(`nowex:${cid}:사정량`, era.get(`nowex:${cid}:사정량`));
          } else if (oid !== -1 && opart !== -1) {
            merge_stain(
              new EroParticipant(cid, part_enum.penis),
              new EroParticipant(oid, opart),
            );
            if (opart >= part_enum.keys.length) {
              // 颜射归身体大类，但与身体性交经验独立
              if (opart === 100) {
                update_face_exp(date, cid, amount, oid, last_supporter);
                era.set(`tcvar:${cid}:사정위치`, {
                  c: [oid, last_supporter],
                  p: part_enum.keys.length,
                });
              } else {
                update_face_exp(date, cid, amount, oid);
                era.set(`tcvar:${cid}:사정위치`, {
                  c: [oid],
                  p: part_enum.keys.length,
                });
              }
            } else {
              let temp;
              era.set(`tcvar:${cid}:사정위치`, {
                c: oid,
                p: opart,
              });
              switch (opart) {
                case part_enum.mouth:
                  era.add(`exp:${oid}:정액음용량`, amount);
                  era.add(`nowex:${oid}:정액음용량`, amount);
                  if (!cid) {
                    era.add(`tcvar:${oid}:획득인자`, amount * 2.5);
                  } else if (!oid) {
                    era.add(`tcvar:${cid}:획득인자`, amount * 5);
                  }
                  if (!era.get(`cstr:${oid}:첫정음경험`)) {
                    if (sys_check_awake(oid)) {
                      era.set(`cstr:${oid}:첫정음경험`, [
                        `${date}에 처음으로 `,
                        { c: cid },
                        '의 정액을 맛보았고, 묘하게도 그 비릿한 맛에 매료되어 버렸다',
                      ]);
                    } else if (!era.get(`cstr:${oid}:무자각첫정음경험`)) {
                      era.set(`cstr:${oid}:무자각첫정음경험`, [
                        `사실은, ${date}에 이미 `,
                        { c: cid },
                        '의 정액 맛에 익숙해지기 시작했다',
                      ]);
                    }
                  }
                  update_juels_from_talent(oid, '정액음용중독');
                  update_palam_from_talent(
                    oid,
                    '목구멍민감',
                    part_enum.mouth,
                    part_enum.masochism,
                  );
                  break;
                case part_enum.breast:
                  if (
                    (last_action === ero_hooks.ask_double_tit_job ||
                      last_action === ero_hooks.double_tit_job) &&
                    !cid
                  ) {
                    update_breast_exp(cid, amount, oid, last_supporter);
                  } else {
                    update_breast_exp(cid, amount, oid);
                  }
                  break;
                case part_enum.hand:
                case part_enum.foot:
                case part_enum.body:
                  era.add(`exp:${oid}:신체부착정액량`, amount);
                  update_juels_from_talent(oid, '정액욕중독');
                  update_palam_from_talent(oid, '냄새민감', part_enum.body);
                  break;
                case part_enum.clitoris:
                  era.add(`exp:${oid}:클리부착정액량`, amount);
                  update_juels_from_talent(oid, '정액욕중독');
                  update_palam_from_talent(oid, '냄새민감', part_enum.clitoris);
                  break;
                case part_enum.virgin:
                  era.add(`exp:${oid}:질내사정횟수`, 1);
                  era.add(`exp:${oid}:질내정액량`, amount);
                  era.add(`nowex:${oid}:질내정액`, amount);
                  if (!cid) {
                    era.add(`tcvar:${oid}:획득인자`, amount * 3);
                  } else if (!oid) {
                    era.add(`tcvar:${cid}:획득인자`, amount * 6);
                  }
                  if (!era.get(`cstr:${cid}:첫질내사정경험`)) {
                    if (sys_check_awake(cid)) {
                      era.set(`cstr:${cid}:첫질내사정경험`, [
                        '처음으로 ',
                        { c: oid },
                        `의 몸속에 ${amount}ml의 씨앗을 주입한 것은 ${date}였다`,
                      ]);
                    } else if (!era.get(`cstr:${cid}:무자각첫질내사정경험`)) {
                      era.set(`cstr:${cid}:무자각첫질내사정경험`, [
                        `사실은, ${date}에 이미 `,
                        { c: oid },
                        `의 음란한 보지에게 ${amount}ml 의 정액을 착취당했다`,
                      ]);
                    }
                  }
                  if (!era.get(`cstr:${oid}:질내사정당한경험`)) {
                    if (sys_check_awake(oid)) {
                      era.set(`cstr:${oid}:질내사정당한경험`, [
                        { c: cid },
                        `의 ${amount}ml의 씨앗을 받아들인 것은 ${date}였다`,
                      ]);
                    } else if (!era.get(`cstr:${oid}:무자각첫질내사정당한경험`)) {
                      era.set(`cstr:${oid}:무자각첫질내사정당한경험`, [
                        `사실은, 소중한 질과 자궁이 ${date}에 이미 `,
                        { c: cid },
                        `의 ${amount}ml의 정액으로 세례를 받았다`,
                      ]);
                    }
                  }
                  await run_custom_ero(oid || cid, ero_hooks.cum_in_womb, {
                    father_id: cid,
                    mother_id: oid,
                    shown,
                  });
                  // 计算怀孕
                  temp =
                    era.get(`cflag:${oid}:임신단계`) ===
                      1 << pregnant_stage_enum.no &&
                    get_pregnant_ratio(oid, cid);
                  era.logger.debug(
                    `${oid}이(가) ${cid}의 아이를 임신할 확률：${(
                      temp * 100
                    ).toFixed(2)}%`,
                  );
                  if (temp >= 1 || (temp > 0 && Math.random() < temp)) {
                    era.add(`exp:${cid}:파종횟수`, 1);
                    era.set(
                      `cflag:${oid}:임신단계`,
                      1 << pregnant_stage_enum.embryo,
                    );
                    era.set(`cflag:${oid}:임신주수`, 0);
                    const life_marks = LifeEventMarks.get_marks(oid);
                    life_marks.report = 1;
                    life_marks.sperm = cid;
                    life_marks.unexpected_pregnant =
                      sys_check_awake(cid) - sys_check_awake(oid);
                    era.set(`status:${oid}:배란기`, 0);
                    era.set(`status:${oid}:생리`, 0);
                    await run_custom_ero(oid || cid, ero_hooks.be_pregnant, {
                      father_id: cid,
                      mother_id: oid,
                      shown,
                    });
                  }
                  update_juels_from_talent(oid, '정액착취중독');
                  update_palam_from_talent(oid, '자궁민감', part_enum.virgin);
                  break;
                case part_enum.anal:
                  era.add(`exp:${oid}:장내사정횟수`, 1);
                  era.add(`exp:${oid}:장내정액량`, amount);
                  era.set(`nowex:${oid}:장내정액`, amount);
                  if (!cid) {
                    era.add(`tcvar:${cid}:획득인자`, amount * 2.5);
                  } else if (!oid) {
                    era.add(`tcvar:${oid}:획득인자`, amount * 5);
                  }
                  update_juels_from_talent(oid, '정액관장');
                  update_palam_from_talent(oid, '창자민감', part_enum.anal);
              }
            }
          }
          if (era.get(`tcvar:${cid}:콘돔`) > 0) {
            era.set(`tcvar:${cid}:콘돔`, 0);
            rollback_penis_stain(cid);
            set_stain(cid, part_enum.penis, stain_enum.semen);
            clean_part_without_item(new EroParticipant(cid, part_enum.penis));
          }
        } else if (oid !== -1 && opart !== -1 && part === part_enum.anal) {
          merge_stain(
            new EroParticipant(cid, part_enum.anal),
            new EroParticipant(oid, opart),
          );
        }
      }
    }
    // 只有在总快感不为零的情况下计算高潮
    if (orgasm_count > 0) {
      orgasm_count = Math.min(orgasm_count, 6);
      era.set(`nowex:${cid}:TotalEX`, limited_count);
      limited_count = Math.min(limited_count, 6);
      era.add(`tcvar:${cid}:여운`, 1 + Math.ceil((orgasm_count + 1) / 2));
      if (limited_count > 1) {
        era.set(
          `nowex:${cid}:${
            ['이', '삼', '사', '오', '다'][limited_count - 2]
          }중 절정`,
          1,
        );
      }
      add_attr_exp(cid, attr_enum.toughness, limited_count * limited_count);
      const multi_part_reward =
        1 - juel_reward + juel_reward * orgasm_part_count;
      add_juel(
        cid,
        '순종',
        base_orgasm_juel_reward * orgasm_count * multi_part_reward,
      );
      add_juel(
        cid,
        '수치',
        base_orgasm_juel_reward * orgasm_count * multi_part_reward,
      );
      sys_change_lust(cid, -lost_lust * orgasm_count * multi_part_reward);
      // 每多一重高潮，体力和精力消耗+10%，50%封顶
      // 根性降低体力和精力消耗，降低比率为系数*log根性/log最大根性，目前最大根性暂定为1200
      // 余韵增加10%的体力精力消耗
      const reduce_cost =
        1 -
        damage_buff +
        damage_buff * orgasm_count -
        wp_ratio * wp_coefficient +
        0.1 * (era.get(`tcvar:${cid}:여운`) > 0);
      if (cost.stamina > 0) {
        era.add(
          `nowex:${cid}:체력소모`,
          Math.max(cost.stamina * reduce_cost, 1),
        );
      }
      if (cost.time > 0) {
        era.add(`nowex:${cid}:기력소모`, Math.max(cost.time * reduce_cost, 1));
      }
      // 宝珠结算
      pleasure_list.forEach((part) => {
        const part_name = part_names[part];
        let part_times =
          era.get(`nowex:${cid}:${part_name}절정`) +
          (era.get(`nowex:${cid}:무자각${part_name}절정`) || 0);
        if (part_name === part_enum.breast) {
          part_times +=
            era.get(`nowex:${cid}:유두절정`) +
            era.get(`nowex:${cid}:무자각유두절정`);
        }
        if ((part_times = Math.min(part_times, 6))) {
          const juels =
            base_orgasm_juel_reward *
            part_times *
            Math.pow(1 + juel_reward, part_times - 1) *
            multi_part_reward;
          add_juel(cid, `${part_name}쾌감`, juels);
          const touched_part = era.get(`tcvar:${cid}:${part_name}접촉부위`);
          // 沉睡的人会减少75%的对方高潮因子奖励
          if (-1 !== touched_part && touched_part.part !== part_enum.item) {
            add_juel(
              touched_part.owner,
              `${part_name}쾌감`,
              (juels * (2 - attack_juel_reward)) /
                (1 +
                  3 *
                    (!sys_check_awake(touched_part.owner) ||
                      era.get(`tcvar:${touched_part.owner}:탈력`))),
            );
          }
        }
      });
      era.set(
        `nowex:${cid}:음경절정`,
        Math.min(era.get(`nowex:${cid}:음경절정`), 1),
      );
      era.set(
        `nowex:${cid}:무자각음경절정`,
        Math.min(era.get(`nowex:${cid}:무자각음경절정`), 1),
      );
    }
  }
  if (shown) {
    era.println();
  }
  await update_orgasms(shown, ...ids);
}

sys_calc_orgasm.init = (...[h1, h2]) => {
  get_custom_ero = h1;
  run_custom_ero = h2;
};

module.exports = sys_calc_orgasm;
