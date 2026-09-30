const era = require('#/era-electron');

const sys_get_status = require('#/system/chara/sys-get-status');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const game_guides = require('#/event/others/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const { adaptability_colors, el_danger_color } = require('#/data/color-const');
const grand_lives = require('#/data/event/grand-lives');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_adaptability_rank } = require('#/data/info-generator');
const { expedition_weeks } = require('#/data/move-const');
const RaceHistory = require('#/data/race/model/race-history');
const { track_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const {
  foreign_race_list,
  track2location,
} = require('#/data/race/race-location');
const { adaptability_names } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} year_begin
 * @param {number} cur_round
 * @param {{race:number,week:number}} registered_race
 * @returns {boolean}
 */
function check_in_foreign(chara_id, year_begin, cur_round, registered_race) {
  return (
    foreign_race_list.find((e) => e === registered_race.race) !== undefined &&
    race_infos[registered_race.race].date + year_begin - cur_round <=
      expedition_weeks
  );
}

function check_register_disabled(chara_id, in_foreign) {
  return (
    era.get(`status:${chara_id}:부상`) ||
    !check_pregnant_unprotect(chara_id) ||
    in_foreign
  );
}

/**
 * @param {number} chara_id
 * @returns {Record<string,{color:string,content:string,fontWeight:string}>}
 */
function generate_adaptability_dict(chara_id) {
  const dict = {};
  adaptability_names.forEach((e, i) => {
    if (i < 6) {
      const a = era.get(`cflag:${chara_id}:${e}적성`);
      dict[e.substring(0, 1)] = {
        color: adaptability_colors[a],
        content: get_adaptability_rank(a),
        fontWeight: 'bold',
      };
    }
  });
  return dict;
}

/**
 * @param {number} year_begin
 * @param {number} cur_round
 * @param {number} begin_round
 * @param {number} chara_id
 * @param {{race:number,week:number}} registered_race
 * @returns {Record<string,number[]>}
 */
function generate_race_dict(
  chara_id,
  cur_round,
  begin_round,
  year_begin,
  registered_race,
) {
  const dict = {};
  if (chara_id && !RaceHistory.get(chara_id).check_begin()) {
    if (registered_race.race === race_enum.begin_race) {
      dict[registered_race.week] = [race_enum.begin_race];
    } else if (cur_round + 1 < year_begin + 20) {
      dict[year_begin + 24] = [race_enum.begin_race];
    } else if (cur_round + 1 <= year_begin + 44) {
      dict[cur_round - (cur_round % 4) + 8] = [race_enum.begin_race];
    }
  } else {
    const edu_years = chara_id
      ? Math.min(Math.floor(era.get(`cflag:${chara_id}:육성턴수합산`) / 48), 2)
      : 2;
    race_infos.forEach((e, i) => {
      if (i) {
        [e.date + year_begin, e.date + year_begin + 48].forEach((date, j) => {
          if (
            date > cur_round + 1 &&
            date <= begin_round + 12 &&
            ((1 << (chara_id ? edu_years + j : edu_years)) & e.limit) > 0
          ) {
            (dict[date] || (dict[date] = [])).push(i);
          }
        });
      }
    });
  }
  return dict;
}

async function reg_race_page() {
  await game_guides.office_register();
  const cur_round = era.get('flag:현재턴수') - 1,
    begin_round = cur_round - (cur_round % 4),
    team_list = sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
      (chara_id) =>
        get_custom_mec(chara_id).is_race_register_enabled() &&
        era.get(`cflag:${chara_id}:종족`) &&
        (!chara_id || era.get(`cflag:${chara_id}:육성턴수합산`) + 1 < 3 * 48) &&
        sys_reg_race(chara_id).curr.week !== cur_round + 1,
    ),
    year_begin = Math.floor(cur_round / 48) * 48;
  let chara_id = era.get('flag:현재상호작용캐릭터'),
    chara = get_chara_talk(chara_id),
    registered_race = sys_reg_race(chara_id).curr,
    dict = generate_race_dict(
      chara_id,
      cur_round,
      begin_round,
      year_begin,
      registered_race,
    ),
    adaptability_dict = generate_adaptability_dict(chara_id),
    edu_weeks = era.get(`cflag:${chara_id}:육성턴수합산`),
    flag_race_reg = true,
    flag_filter_race = true,
    flag_hide_adaptability = true,
    in_foreign = check_in_foreign(
      chara_id,
      year_begin,
      cur_round,
      registered_race,
    ),
    base_disabled_check = check_register_disabled(chara_id, in_foreign),
    status_list = sys_get_status(chara_id);

  while (flag_race_reg) {
    await era.clear();
    era.printInColRows(
      [
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: [
            chara.get_colored_name(),
            '의 레이스 참가 신청',
            { isBr: true },
            ...status_list,
          ],
          type: 'text',
        },
      ],
      ...new Array(12).fill(0).map((_, i) => {
        const round = begin_round + i,
          year = Math.floor(round / 48),
          month = Math.floor((round - year * 48) / 4),
          week = round - year * 48 - month * 4,
          date_str = `${2000 + year} 년 ${month + 1} 월 제 ${week + 1} 주`,
          columns = [];
        columns.push(
          { config: { offset: 1, width: 22 }, type: 'divider' },
          {
            config: {
              align: 'center',
              fontWeight: cur_round === round ? 'bold' : undefined,
            },
            content: cur_round === round ? `[${date_str}]` : date_str,
            type: 'text',
          },
        );
        (!chara_id || edu_weeks + round - cur_round < 48 * 3
          ? dict[round + 1] || []
          : []
        ).forEach((e) => {
          const ground = adaptability_names[race_infos[e].ground].substring(
            0,
            1,
          );
          const distance = adaptability_names[
            race_infos[e].distance + 2
          ].substring(0, 1);
          const ag = adaptability_dict[ground];
          const ad = adaptability_dict[distance];
          const is_aim_race = get_custom_check(chara_id).is_aim_race(
            e,
            edu_weeks + round - cur_round,
          );
          const is_foreign = race_infos[e].track >= track_enum.longchamp;
          const is_grand_live = grand_lives.check(
            e,
            +(round - year_begin >= 48),
          );
          if (
            e === race_enum.begin_race ||
            registered_race.race === e ||
            is_aim_race !== 0 ||
            !flag_filter_race ||
            ((ag.content === 'S' || ag.content <= 'C') &&
              (ad.content === 'S' || ad.content <= 'C'))
          ) {
            columns.push(
              {
                accelerator: e,
                config: {
                  align: 'center',
                  buttonType: is_aim_race !== 0 ? 'danger' : 'warning',
                  disabled:
                    base_disabled_check ||
                    (is_foreign &&
                      race_infos[e].date + year_begin - cur_round <=
                        expedition_weeks) ||
                    get_custom_mec(chara_id).is_race_disabled(e),
                },
                content:
                  race_infos[e].get_colored_name_with_class().content +
                  (is_foreign
                    ? ` (${track2location[race_infos[e].track].con})`
                    : '') +
                  (is_grand_live ? ' 🎤' : '') +
                  ((is_aim_race & 0b11) > 0 ? ' *' : ''),
                type: 'button',
              },
              {
                config: { align: 'center' },
                content: [
                  ...(flag_hide_adaptability || e === race_enum.begin_race
                    ? []
                    : [
                        ground,
                        '(',
                        adaptability_dict[ground],
                        ')',
                        ' ',
                        race_infos[e].span,
                        ' ',
                        distance,
                        '(',
                        adaptability_dict[distance],
                        ') ',
                        ...team_list
                          .filter((en) => sys_reg_race(en).curr.race === e)
                          .map((en) => ({
                            color: get_chara_color(en),
                            content: '𖨆',
                            fontWeight: 'bold',
                          })),
                        registered_race.race === e ? ' ' : '',
                      ]),
                  registered_race.race === e
                    ? {
                        color: el_danger_color,
                        content: '[▲등록됨]',
                        display: 'inline-block',
                        fontWeight: 'bold',
                      }
                    : '',
                ],
                type: 'text',
              },
            );
          }
        });
        return {
          columns,
          config: { verticalAlign: 'middle', width: 6 },
        };
      }),
      chara_id
        ? [
            { type: 'divider' },
            {
              content: [
                '* ',
                chara.get_colored_name(),
                ...(RaceHistory.get(chara.id).check_begin()
                  ? [
                      '은(는) ',
                      { color: el_danger_color, content: '빨간색' },
                      ' 으로 표시된 레이스를 주목하고 있습니다',
                    ]
                  : ['은(는) 하반기의 데뷔전에서 데뷔해야 다른 레이스에 참가할 수 있습니다.']),
                { isBr: true },
                '** 별표(*)가 붙은 레이스에 참가하면 특별한 일이 발생할 수 있습니다.',
                { isBr: true },
                ...(cur_round > 39
                  ? [
                      '*** 🎤가 붙은 레이스에는 그랜드 라이브가 마련되며, 참가 시 더 많은 명성을 얻을 수 있습니다.',
                      { isBr: true },
                      '*',
                    ]
                  : []),
                '*** (프랑스) 등의 접미사가 붙은 대회는 해외 레이스로, 개최 3주 전에 등록하고 원정을 떠나야 합니다.',
              ],
              type: 'text',
            },
          ]
        : [],
      [{ type: 'divider' }],
      team_list.length > 1
        ? team_list.map((e) => {
            return {
              accelerator: 1000 + e,
              config: {
                buttonType: e === chara_id ? 'warning' : 'info',
                disabled: e === chara_id,
                width: 4,
              },
              content: era.get(`callname:${e}:-1`),
              type: 'button',
            };
          })
        : [],
      [
        {
          accelerator: 997,
          config: {
            buttonType: flag_filter_race ? 'warning' : 'info',
            width: 6,
          },
          content: `불리한 레이스 필터링 [${flag_filter_race ? 'ON' : 'OFF'}]`,
          type: 'button',
        },
        {
          accelerator: 998,
          config: {
            buttonType: !flag_hide_adaptability ? 'warning' : 'info',
            width: 6,
          },
          content: `추가 정보 표시 [${!flag_hide_adaptability ? 'ON' : 'OFF'}]`,
          type: 'button',
        },
        {
          accelerator: 999,
          config: { width: 4 },
          content: '등록 종료',
          type: 'button',
        },
      ],
    );
    const ret = await era.input();
    if (ret === 997) {
      flag_filter_race = !flag_filter_race;
    } else if (ret === 998) {
      flag_hide_adaptability = !flag_hide_adaptability;
    } else if (ret === 999) {
      flag_race_reg = false;
    } else if (ret >= 1000) {
      chara_id = ret - 1000;
      chara = get_chara_talk(chara_id);
      registered_race = sys_reg_race(chara_id).curr;
      dict = generate_race_dict(
        chara_id,
        cur_round,
        begin_round,
        year_begin,
        registered_race,
      );
      adaptability_dict = generate_adaptability_dict(chara_id);
      edu_weeks = era.get(`cflag:${chara_id}:육성턴수합산`);
      in_foreign = check_in_foreign(
        chara_id,
        year_begin,
        cur_round,
        registered_race,
      );
      base_disabled_check = check_register_disabled(chara_id, in_foreign);
      status_list = sys_get_status(chara_id);
    } else {
      if (registered_race.race === ret) {
        registered_race.race = registered_race.week = -1;
      } else {
        registered_race.race = ret;
        if (ret === race_enum.begin_race) {
          if (cur_round + 1 < year_begin + 20) {
            registered_race.week = year_begin + 24;
          } else {
            registered_race.week = cur_round + 8 - (cur_round % 4);
          }
        } else {
          registered_race.week = race_infos[ret].date + year_begin;
        }
        if (registered_race.week <= cur_round) {
          registered_race.week += 48;
        }
      }
    }
  }
}

module.exports = reg_race_page;
