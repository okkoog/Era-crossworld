const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');

const { adaptability_colors, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

const edu_weeks_kiku_sho = 48 + race_infos[race_enum.kiku_sho].date;
const edu_weeks_shuk_sho = 48 + race_infos[race_enum.shuk_sho].date;
const edu_weeks_japa_dir = 48 + race_infos[race_enum.japa_dir].date;
const edu_weeks_belm_sta = 48 + race_infos[race_enum.belm_sta].date;

/**
 * @param {PseudoUma[]} team_list
 * @param {number} race
 * @param {number} best_rank
 * @param {number} mvp_id
 * @returns {{hentai_count:number,new_title_dict:Record<string,[{c:string,n:string}]>}}
 */
function sys_check_titles_after_race(team_list, race, best_rank, mvp_id) {
  const new_title_dict = {};
  const pregnant_check =
    era.get('cflag:0:임신단계') === 1 << pregnant_stage_enum.embryo &&
    era.get('cflag:0:임신주수') === 0 &&
    LifeEventMarks.get_marks(0).sperm > 0;
  let p_flag = 0;
  let o_flag = 0;
  team_list.forEach((uma) => {
    const cid = uma.index_chara;
    new_title_dict[cid] = [];
    const pregnant_stage = era.get(`cflag:${cid}:임신단계`);
    if (pregnant_stage >> pregnant_stage_enum.late > 0) {
      p_flag++;
    }
    if (pregnant_stage >> pregnant_stage_enum.embryo > 0) {
      new_title_dict[cid].push({ n: '긴장되는 태교', c: buff_colors[2] });
    }
    if (
      era.get(`cflag:${cid}:복부내정액`) > 0 &&
      era.get(`cflag:${cid}:자궁내정액`) > 0 &&
      era.get(`cflag:${cid}:장내정액`) > 0
    ) {
      new_title_dict[cid].push({ n: '백탁', c: buff_colors[2] });
    }
    if (cid > 0 && Number(pregnant_check) === cid) {
      new_title_dict[cid].push({ n: '부성애', c: buff_colors[2] });
    }
    if (uma.ero.orgasm > 0) {
      o_flag += Math.random() < Math.min(uma.ero.orgasm, 6) ** 2 / (6 ** 2 * 2);
      if (uma.ero.orgasm >= 6) {
        new_title_dict[cid].push({ n: '풍기 파괴자', c: buff_colors[2] });
        if (!uma.race.conditionParams.item) {
          new_title_dict[cid].push({ n: '불운한 자', c: buff_colors[2] });
          if (uma.rank.curr === 1) {
            global_achievement.wins_hnt = 1;
          }
        }
      }
      if (!uma.race.conditionParams.item) {
        new_title_dict[cid].push({ n: '어이없는 재난', c: buff_colors[2] });
      }
    }
  });
  if (best_rank === 1) {
    switch (race) {
      case race_enum.kiku_sho:
      case race_enum.shuk_sho:
        {
          let invincible_1 = true;
          let invincible_2 = true;
          let cup_1 = 0;
          let cup_2 = 0;
          let cup_3 = 0;
          RaceHistory.get(mvp_id)
            .get_entries()
            .forEach((e) => {
              if (e.rank === 1) {
                switch (e.race) {
                  case race_enum.sats_sho:
                    cup_1++;
                    break;
                  case race_enum.oka_sho:
                    cup_1 += 2;
                    break;
                  case race_enum.toky_yus:
                    cup_2++;
                    break;
                  case race_enum.yush_him:
                    cup_2 += 2;
                    break;
                  case race_enum.kiku_sho:
                    cup_3++;
                    break;
                  case race_enum.shuk_sho:
                    cup_3 += 2;
                }
              } else {
                if (e.weeks < edu_weeks_kiku_sho) {
                  invincible_1 = false;
                }
                if (e.weeks < edu_weeks_shuk_sho) {
                  invincible_2 = false;
                }
              }
            });
          if (cup_1 & cup_2 & cup_3 & 0b1) {
            new_title_dict[mvp_id].push({
              n: '삼관',
              c: adaptability_colors.at(-3),
            });
            invincible_1 &&
              new_title_dict[mvp_id].push({
                n: '무패 삼관',
                c: adaptability_colors.at(-2),
              });
          }
          if (cup_1 & cup_2 & cup_3 & 0b10) {
            new_title_dict[mvp_id].push({
              n: '트리플 티아라',
              c: adaptability_colors.at(-3),
            });
            invincible_2 &&
              new_title_dict[mvp_id].push({
                n: '무패 트리플 티아라',
                c: adaptability_colors.at(-2),
              });
          }
          if (
            cup_1 > 0 &&
            cup_2 > 0 &&
            cup_3 > 0 &&
            (cup_1 & cup_2 & cup_3) === 0
          ) {
            new_title_dict[mvp_id].push({
              n: '변칙 삼관',
              c: adaptability_colors.at(-3),
            });
            if ((cup_3 & 1 && invincible_1) || (cup_3 & 2 && invincible_2)) {
              new_title_dict[mvp_id].push({
                n: '무패 변칙 삼관',
                c: adaptability_colors.at(-2),
              });
            }
          }
          if ((cup_1 & cup_2 & cup_3) === 0b11) {
            new_title_dict[mvp_id].push({
              n: '육관',
              c: adaptability_colors.at(-2),
            });
            if (invincible_1 && invincible_2) {
              new_title_dict[mvp_id].push({
                n: '무패 육관',
                c: adaptability_colors.at(-1),
              });
            }
          }
        }
        break;
      case race_enum.japa_dir:
        {
          let invincible_4 = true;
          let cup = 0;
          RaceHistory.get(mvp_id)
            .get_entries()
            .forEach((e) => {
              if (e.rank === 1) {
                switch (e.race) {
                  case race_enum.hane_hai:
                    cup++;
                    break;
                  case race_enum.toky_der:
                    cup++;
                }
              } else {
                if (e.weeks < edu_weeks_japa_dir) {
                  invincible_4 = false;
                }
              }
            });
          if (cup === 2) {
            new_title_dict[mvp_id].push({
              n: '더트 삼관',
              c: adaptability_colors.at(-3),
            });
            invincible_4 &&
              new_title_dict[mvp_id].push({
                n: '무패 더트 삼관',
                c: adaptability_colors.at(-2),
              });
          }
        }
        break;
      case race_enum.belm_sta: {
        let invincible = true,
          cup = 0;
        RaceHistory.get(mvp_id)
          .get_entries()
          .forEach((e) => {
            if (e.rank === 1) {
              switch (e.race) {
                case race_enum.kent_der:
                  cup++;
                  break;
                case race_enum.prea_sta:
                  cup++;
              }
            } else {
              if (e.weeks < edu_weeks_belm_sta) {
                invincible = false;
              }
            }
          });
        if (cup === 2) {
          new_title_dict[mvp_id].push({
            n: '아메리칸 드림',
            c: adaptability_colors.at(-3),
          });
          invincible &&
            new_title_dict[mvp_id].push({
              n: '퍼펙트 아메리칸 드림',
              c: adaptability_colors.at(-2),
            });
        }
      }
    }
  }
  if (p_flag > 0) {
    era.print('【임신한 상태로 대회에 출주한 행위가 사회 각계에서 논란을 불러일으켰다】');
  }
  if (o_flag > 0) {
    era.print('【레이스 도중 공개적으로 절정에 이른 행위가 사회 각계에서 큰 파문을 일으켰다】');
  }
  if (p_flag > 0 || o_flag > 0) {
    era.set('flag:변태행위', 1);
  }
  return { hentai_count: p_flag + o_flag, new_title_dict };
}

module.exports = sys_check_titles_after_race;
