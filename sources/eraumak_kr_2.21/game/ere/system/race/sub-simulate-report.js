const { get_bashin_desc } = require('#/system/race/snippets');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_random_entry, sort_list } = require('#/utils/list-utils');

const { race_enum } = require('#/data/race/race-const');
const { race_event_enum } = require('#/data/race/race-sim-const');

/** @type {(function(PseudoUma,PseudoUma):TextContent)[]} */
const overtake_handlers = [
  (top, over) => [
    over.get_colored_name(),
    '이(가) ',
    top.get_colored_name(),
    '을(를) 순식간에 앞질렀습니다! ',
  ],
  (top, over) => [
    over.get_colored_name(),
    '이(가) ',
    top.get_colored_name(),
    '와의 경쟁에서 우위를 점했습니다! ',
  ],
  (top, over) => [
    top.get_colored_name(),
    '을(를) 넘어선 ',
    over.get_colored_name(),
    '의 승리의 순간입니다! ',
  ],
  (top) => [top.get_colored_name(), '이(가) 앞서고 있습니다! 승리를 확정지을 수 있을까요! '],
];

/** @type {(function(PseudoUma,PseudoUma):TextContent)[]} */
const battle_handlers = [
  (first, second) => [
    first.get_colored_name(),
    '! ',
    second.get_colored_name(),
    '!',
  ],
  (first, second) => [
    first.get_colored_name(),
    '과(와) ',
    second.get_colored_name(),
    '의 경합이 계속됩니다!둘 다 승리를 위해 최선을 다하고 있습니다! ',
  ],
  (first, second) => [
    '치열하다! 치열해!',
    first.get_colored_name(),
    '도 ',
    second.get_colored_name(),
    '도 도망칠 수 없습니다! ',
  ],
  (first, second) => [
    '과연 ',
    first.get_colored_name(),
    '일까 ',
    second.get_colored_name(),
    '일까! 마지막 순간까지 결말이 보이질 않습니다! ',
  ],
];

/** @type {(function(PseudoUma,PseudoUma):TextContent)[]} */
const top_handlers = [
  (uma) => [uma.get_colored_name(), ' 선두 자리를 단단히 지키고 있습니다! '],
  (uma) => ['빠르다 빠르다! ', uma.get_colored_name(), ', 독주하고 있습니다!' ],
  (uma) => [uma.get_colored_name(), ', 컨디션이 최고입니다! 계속해서 돌진할 건가요! '],
  (uma) => ['계속해서 선두! 끝까지 ', uma.get_colored_name(), '을(를) 아무도 이길 수 없는 건가요! '],
  (uma) => [uma.get_colored_name(), ', 곧 승리가 코앞입니다! '],
  (uma) => [uma.get_colored_name(), '! ', uma.get_colored_name(), '! '],
];

/** @type {Record<string,(function([]))[]>} */
const other_handlers = {};

other_handlers[race_event_enum.lost_stamina] = [
  (names) => [...names, '，실속! '],
  (names) => [...names, ', 페이스가 떨어집니다，더이상 속도를 유지할 수 없습니다! '],
  (names) => [...names, ', 속도가 느려졌습니다! '],
  (names) => [...names, ', 한계에 달했나요!? '],
];
other_handlers[race_event_enum.orgasm] = [
  (names) => [...names, ', 얼굴이 빨개졌습니다. 온 힘을 다한 걸까요... '],
  (names) => ['증기가 ', ...names, '의 몸에서 끊임없이 뿜어져 나옵니다! '],
  (names) => ['무엇이 ', ...names, '의 승부복을 저렇게 젖게 만든 걸까요...? '],
  (names) => [...names, ', 발걸음이 비틀렸지만 다행히 속도를 잃지는 않았습니다! '],
];
other_handlers[race_event_enum.loc_mind_nige_ex] = [
  (names) => ['도주 우마무스메의 앞에 다른 우마무스메가 있을 수 있을까! 달려라 ', ...names, '!'],
  (names) => ['그 자리는 네 자리가 아니야! ', ...names, ', 질주로 경고하고 있다! '],
  (names) => [...names, '이(가) 선두 자리를 되찾고 있습니다! '],
  (names) => [...names, ', 계속 가속하며 다른 우마무스메보다 더 앞서가려고 합니다! '],
];
other_handlers[race_event_enum.loc_mind_other_ex] = [
  (names) => [...names, ', 자신이 있어야 할 자리로 힘차게 나아가라! '],
  (names) => [
    '그 자리는 ',
    names.length > 1 ? '너' : '너희들',
    '의 자리가 아니야! 힘내라 ',
    ...names,
    '!',
  ],
  (names) => [...names, ' 자리를 되찾기 위해 싸우고 있습니다!'],
];
other_handlers[race_event_enum.loc_mind_nige_over_take] = [
  (names) => [...names, ', 주저 없이 선두를 향해 돌진하고 있습니다! '],
  (names) => [...names, ', 선두를 다투고 있다! '],
  (names) => [...names, '의 눈에는 오직 선두뿐! '],
];
other_handlers[race_event_enum.loc_mind_nige_speed_up] = [
  (names) => [...names, ', 계속 가속하며 더 큰 격차를 벌리려 합니다! '],
  (names) => [...names, ', 더 멀리 도망가려 합니다! '],
  (names) => ['도망가. 세상의 끝까지 도망가라! ', ...names, '! '],
];
other_handlers[race_event_enum.loc_mind_other_quick] = [
  (names) => [...names, ', 뒤처지는 것을 참지 못하고 필사적으로 추격하고 있습니다! '],
  (names) => ['너무 멀리 뒤쳐졌다앗! ', ...names, ', 필사적으로 추격 중! '],
  (names) => [...names, ', 거리를 단단히 유지하고 있습니다!'],
];
other_handlers[race_event_enum.loc_mind_other_relax] = [
  (names) => [...names, ', 체력을 아끼는 듯, 꽤 대담한 전략입니다!! '],
  (names) => [...names, '의 페이스가 느려졌습니다. 조심해야 합니다!! '],
  (names) => [...names, ', 방심은 큰 적입니다! '],
];
other_handlers[race_event_enum.blocked] = [
  (names) => [...names, ', 막혀버렸습니다. 정말 아쉽네요! '],
  (names) => [...names, ', 돌파 실패했습니다! '],
  (names) => [...names, ', 마군에 갇혀 빠져나올 수 없습니다! '],
];
other_handlers[race_event_enum.temptation] = [
  (names) => [...names, '의 페이스가 흐트러졌습니다. 조금 초조해하는 것 같습니다! '],
  (names) => [...names, ', 급해졌나요! '],
  (names) => [...names, ', 초조해졌다! '],
];
other_handlers[race_event_enum.temp_end] = [
  (names) => [...names, ', 드디어 정상적인 페이스로 돌아왔습니다! '],
  (names) => [...names, ', 이제 좀 진정된 것 같습니다! '],
  (names) => [...names, ', 초조함에서 벗어났다앗! '],
];
other_handlers[race_event_enum.temp_continue] = [
  (names) => [...names, ', 페이스가 계속 엉망입니다! 조금 좋지 않습니다! '],
  (names) => [...names, ', 초조함에 깊이 빠져 헤어나올 수 없습니다! '],
  (names) => ['진정해 ', ...names, '! 기회를 놓치지 않도록 조심해야 합니다! '],
];
other_handlers[race_event_enum.temp_wrong_style] = [
  (names) => [...names, ', 달리기 스타일을 바꾼 것 같습니다! '],
  (names) => [...names, ', 왜 이렇게 필사적으로 돌진하고 있나요! '],
];

const event_enum_length = Object.keys(race_event_enum).length;
const report_count = 2;

/** @type {(function(PseudoUma,PseudoUma))[]} */
let top_list;

let order_start = 0,
  go_in = true,
  battle_intro_flag = true;
/** @type {PseudoUma} */
let final_push_pop = undefined;

/**
 * @typedef ReportEvent
 * @property {PseudoUma} [a]
 * @property {number} e
 * @property {PseudoUma} [u]
 * @property {RaceLane} [l]
 * @property {number} [s]
 * @property {number} [c]
 * @property {number} [t]
 */

/**
 * @typedef ReportEventGroup
 * @property {number} e
 * @property {ReportEvent[]} p
 * @property {number} t
 */

/**
 * @param {ReportEvent[][]} events
 * @param {PseudoUma[]} in_race_list
 * @param {RaceInfo} info
 * @param {number} race_id
 */
function sub_simulate_report(events, in_race_list, info, race_id) {
  if (race_id === undefined) {
    return undefined;
  }
  /** @type {Record<string,ReportEventGroup>} */
  const dict = {};
  /** @type {ReportEventGroup[]} */
  let report_list = [];
  events.forEach((l, i) =>
    l.forEach((e) =>
      (dict[e.e] || (dict[e.e] = { e: e.e, p: [], t: i })).p.push({
        ...e,
        t: i,
      }),
    ),
  );
  let loc_change = [];
  if (dict[race_event_enum.loc_change]) {
    loc_change = dict[race_event_enum.loc_change].p;
    delete dict[race_event_enum.loc_change];
  }
  if (dict[race_event_enum.finish]) {
    report_list.push(dict[race_event_enum.finish]);
  } else {
    report_list = sort_list(
      Object.values(dict),
      (entry) =>
        event_enum_length -
        entry.e +
        event_enum_length *
          (entry.p.findIndex(
            (e) => e.u?.index_chara >= 0 || e.u?.legend >= 0,
          ) !==
            -1) +
        event_enum_length *
          (entry.p.findIndex((e) => e.u?.index_chara >= 0 && !e.u?.legend) !==
            -1),
    ).slice(0, report_count);
  }
  if (go_in) {
    let ret_list = [];
    if (loc_change.length > 0) {
      const lane_events = loc_change.filter((e) => e.l !== undefined),
        slope_events = loc_change.filter((e) => e.s !== undefined),
        message_buffer = [];
      if (lane_events.length === 1) {
        message_buffer.push(`${lane_events[0].l.get_name()} 진입`);
      } else if (lane_events.length >= 2) {
        message_buffer.push(
          `지나고 있는 ${lane_events
            .slice(0, lane_events.length - 2)
            .map((e) => e.l.get_name())
            .join('、')}`,
        );
        if (lane_events.length > 2) {
          message_buffer[0] += '번';
        }
        message_buffer[0] += `${lane_events.at(-2).l.get_name()}，진입 ${lane_events.at(-1).l.get_name()}`;
      }
      if (slope_events.length > 0 && slope_events.at(-1).s !== 0) {
        message_buffer.push(`${slope_events[0].s > 0 ? '오르막' : '내리막'} 진입`);
      } else if (slope_events.length > 1 && slope_events.at(-1).s === 0) {
        message_buffer.push(`${slope_events.at(-2).s > 0 ? '오르막' : '내리막'} 탈출`);
      }
      if (message_buffer.length > 0) {
        ret_list.push('현재 ', message_buffer.join('，'));
      }
    }
    if (report_list.length === 0) {
      if (final_push_pop !== undefined) {
        if (ret_list.length) {
          ret_list.push('!');
        }
        if (in_race_list[0] !== final_push_pop) {
          ret_list.push(
            ...get_random_entry(overtake_handlers)(
              final_push_pop,
              in_race_list[0],
            ),
          );
          final_push_pop = in_race_list[0];
        } else if (
          in_race_list[0].race.conditionParams.bashin_diff_behind < 4
        ) {
          if (battle_intro_flag) {
            ret_list.push(
              in_race_list[0].get_colored_name(),
              ' 대 ',
              in_race_list[1].get_colored_name(),
              ', 치열한 경합을 벌인다!',
            );
            battle_intro_flag = false;
          } else {
            let dice = Math.random();
            if (dice < 0.6) {
              dice = 0;
            } else if (dice < 0.9) {
              dice = 1;
            } else {
              dice = 2;
            }
            ret_list.push(
              ...battle_handlers[dice](in_race_list[0], in_race_list[1]),
            );
          }
        } else {
          if (top_list.length === 0) {
            top_list = sort_list(top_handlers, Math.random);
          }
          ret_list.push(...top_list.shift()(in_race_list[0]));
        }
      } else {
        if (order_start >= in_race_list.length) {
          order_start = 0;
        }
        if (ret_list.length === 0 && order_start === 0) {
          ret_list.push(
            '현재 ',
            info.lanes
              .find(
                (e) =>
                  in_race_list[order_start].race.location >= e.start &&
                  in_race_list[order_start].race.location < e.end,
              )
              .get_name(),
          );
        }
        let i = 0;
        while (i + order_start < in_race_list.length && i < 2) {
          if (ret_list.length > 0) {
            ret_list.push('，');
          }
          ret_list.push(
            `제 ${order_start + i + 1} 위의 ${in_race_list[order_start + i].index_race + 1} 번 `,
            in_race_list[order_start + i].get_colored_name(),
          );
          ++i;
        }
        order_start += i;
        ret_list.push('.');
      }
      return ret_list;
    } else if (report_list[0].e === race_event_enum.finish) {
      order_start = 0;
      go_in = false;
      const champion = report_list[0].p[0].u;
      let temp;
      if (
        champion.index_chara >= 0 &&
        !champion.legend &&
        (temp = get_custom_mec(champion.index_chara).get_race_finish_report(
          champion,
          race_id,
        ))
      ) {
        return temp;
      } else {
        ret_list.push(
          champion.get_colored_name(),
          '이(가) ',
          get_bashin_desc(champion.race.conditionParams.bashin_diff_behind),
          ' 차이로 결승선을 통과했습니다!',
        );
        if (race_id === race_enum.begin_race) {
          ret_list.push(
            Math.random() < 0.5 ? '데뷔를 축하합니다!' : '앞으로의 활약이 기대됩니다!',
          );
        }
        return ret_list;
      }
    } else {
      order_start = 0;
      ret_list.length > 0 && ret_list.push('，');
      sort_list(report_list, (e) => e.t, true).forEach((entry) => {
        entry.p = sort_list(
          entry.p,
          (e) =>
            ((2 * info.gates - e.u.rank.curr - e.u.pop[0]) << 6) +
            (events.length - e.t),
        );
        const name = [];
        entry.p
          .filter((e, i, l) => l.findIndex((v) => v.u === e.u) === i)
          .slice(0, 2)
          .forEach((e, i) => {
            if (i > 0) {
              name.push('와(과) ');
            }
            name.push(e.u.get_colored_name());
          });
        switch (entry.e) {
          case race_event_enum.final_push:
            if (final_push_pop !== undefined) {
              ret_list.push(...name, ', 이제 라스트 스퍼트를 시작했습니다!');
            } else {
              final_push_pop = entry.p[0].u;
              ret_list.push(
                ...name,
                ` ${entry.p.length > 2 ? (entry.p[0].t === entry.p[1].t ? '동시에 ' : '거의 동시에 ') : ''}라스트 스퍼트를 시작했습니다!`,
              );
            }
            break;
          case race_event_enum.compete_fight:
            ret_list.push(
              entry.p[0].a.get_colored_name(),
              ', ',
              entry.p[0].u.get_colored_name(),
              '을(를) 목표로 가속합니다!',
            );
            break;
          case race_event_enum.orgasm:
          case race_event_enum.loc_mind_nige_ex:
          case race_event_enum.loc_mind_other_ex:
          case race_event_enum.loc_mind_nige_over_take:
          case race_event_enum.loc_mind_nige_speed_up:
          case race_event_enum.loc_mind_other_quick:
          case race_event_enum.loc_mind_other_relax:
          case race_event_enum.blocked:
          case race_event_enum.temptation:
          case race_event_enum.temp_end:
          case race_event_enum.temp_continue:
          case race_event_enum.lost_stamina:
          case race_event_enum.temp_wrong_style:
            ret_list.push(...get_random_entry(other_handlers[entry.e])(name));
            break;
          default:
            ret_list.push(
              ...name,
              ' ',
              Object.keys(race_event_enum)[entry.e],
              ' ',
            );
        }
      });
      return ret_list;
    }
  }
  return undefined;
}

module.exports = sub_simulate_report;
module.exports.init = () => {
  order_start = 0;
  go_in = true;
  final_push_pop = undefined;
  top_list = sort_list(top_handlers, Math.random);
  battle_intro_flag = true;
};
