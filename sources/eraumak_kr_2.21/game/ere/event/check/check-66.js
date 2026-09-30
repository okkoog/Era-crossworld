const era = require('#/era-electron');

const check_aim_and_get_entry = require('#/event/check/snippets/check-aim-and-get-entry');
const get_aim_race_index = require('#/event/check/snippets/get-aim-race-index');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { attr_change_colors } = require('#/data/color-const');
const TurboEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-66');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const aim_races = {};
aim_races[race_enum.begin_race] = 4;
aim_races[get_aim_race_index(race_enum.radi_shi, 1)] = 4;
aim_races[get_aim_race_index(race_enum.stli_kin, 1)] = 4;
aim_races[get_aim_race_index(race_enum.tana_sho, 2)] = 4;
aim_races[get_aim_race_index(race_enum.all_com, 2)] = 4;
aim_races[get_aim_race_index(race_enum.arim_kin, 2)] = 4;

module.exports = require('#/event/check/snippets/check-uma-common-generator')(
  (extra) => {
    const edu_weeks = era.get('cflag:66:육성턴수합산');
    if (
      edu_weeks > 47 + 36 &&
      edu_weeks < 95 + 19 &&
      race_infos[extra.race].race_class <= class_enum.G3 &&
      extra.rank <= 3
    ) {
      new TurboEduMarks().title_check++;
    }
  },
  (races) =>
    check_aim_race(races, race_enum.arim_kin, 2, 1, (e) => e.st === 0) &&
    era.get('base:66:스피드') >= 1200,
  aim_races,
  (buffer, races) => {
    buffer.push(check_aim_and_get_entry(races, race_enum.begin_race));
    buffer.push(check_aim_and_get_entry(races, race_enum.radi_shi, 1, 5));
    buffer.push(check_aim_and_get_entry(races, race_enum.stli_kin, 1, 5));

    const { title_check } = new TurboEduMarks();
    buffer.push({
      check: Math.min(title_check - 2, 1),
      color: title_check >= 3 ? attr_change_colors.up : attr_change_colors.down,
      content: `클래식 시즌 10월~시니어 시즌 5월 2주차 내에 G3이상 레이스 3착 이내 ${title_check}/3 ${title_check >= 3 ? '✔' : '✘'}`,
    });

    buffer.push(check_aim_and_get_entry(races, race_enum.tana_sho, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.all_com, 2, 1));
    buffer.push(check_aim_and_get_entry(races, race_enum.arim_kin, 2, 20));
  },
);
