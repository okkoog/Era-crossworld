const {
  year_desc,
  year_index,
} = require('#/event/check/snippets/edu-year-const');

const { attr_change_colors } = require('#/data/color-const');
const RaceInfo = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const req_desc = ['1착', '2착 이내', '3착 이내', '4착 이내', '5착 이내', '출주'];

/**
 * @param {Record<string,{race:number,rank:number}|RaceResult>} races
 * @param {number} aim_race
 * @param {number} [year]
 * @param {number} [req_rank]
 * @returns {{check:number,color:string,content:string}}
 */
function check_aim_and_get_entry(races, aim_race, year, req_rank) {
  if (aim_race === race_enum.begin_race) {
    const begin_check = Object.entries(races).filter(
      (e) => Number(e[0]) < 48 && e[1].race === race_enum.begin_race,
    ).length;
    return {
      check: begin_check,
      color: begin_check ? attr_change_colors.up : attr_change_colors.down,
      content: `주니어 시즌 데뷔전 ${begin_check ? '출주' : '미출주'}/출주 ${
        begin_check ? '✔' : '✘'
      }`,
    };
  } else {
    let temp;
    const info = race_infos[aim_race];
    const temp_rank =
      (temp = races[info.date + year_index[year]]) && temp.race === aim_race
        ? temp.rank
        : 0;
    temp = temp_rank > 0 && temp.rank <= req_rank;
    return {
      check: Number(temp),
      color: temp ? attr_change_colors.up : attr_change_colors.down,
      content: `${year_desc[year]} 시즌 ${info.name_zh} (${
        Object.keys(RaceInfo.class_enum)[info.race_class]
      }) ${temp_rank ? `${temp_rank}착` : '미출주'}/${
        req_desc[Math.min(req_rank - 1, 5)]
      } ${temp ? '✔' : '✘'}`,
    };
  }
}

module.exports = check_aim_and_get_entry;
