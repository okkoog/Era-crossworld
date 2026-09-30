const era = require('#/era-electron');

const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_lust,
  sys_change_motivation,
  sys_change_pressure,
  sys_fix_chara_base,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const sys_handle_palace = require('#/system/sys-handle-palace');
const { update_train_level } = require('#/system/sys-train-uma');

const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const CharaSkills = require('#/data/chara-skills');
const CharaTitles = require('#/data/chara-titles');
const { buff_colors } = require('#/data/color-const');
const { mark_enum } = require('#/data/ero/mark-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const SasamiLifeMarks = require('#/data/event/life-event-marks/life-event-marks-305');
const recruit_flags = require('#/data/event/recruit-flags');
const LoveLimitStatus = require('#/data/love-limit-status');
const { gene_juel_names } = require('#/data/other-const');
const RaceHistory = require('#/data/race/model/race-history');
const { attr_names } = require('#/data/train-const');

/**
 * @param {number[]} characters
 * @param {Record<string,number>} team_dict
 * @param {number[]} out_race_list
 * @param {CharaTalk} me
 * @param {number} cur_round
 * @param {number} has_furniture
 * @returns {Promise<number>}
 */
async function reset_status(
  characters,
  team_dict,
  out_race_list,
  me,
  cur_round,
  has_furniture,
) {
  const health_buff =
    (era.get('cflag:305:모집상태') === recruit_flags.yes) *
    (new SasamiLifeMarks().buff + 1);
  let ret = 0;
  let temp;
  let p_flag = false;
  for (const cid of characters) {
    const chara = get_chara_talk(cid);
    sys_fix_chara_base(cid);

    // 药物泌乳只维持一回合
    if (era.get(`talent:${cid}:모유분비`) === 2) {
      if (Math.random() < 0.05) {
        era.set(`talent:${cid}:모유분비`, 3);
        await era.printAndWait([
          '【',
          chara.get_colored_name(),
          ' 在 [모유약제] 的影响下变成 ',
          { color: buff_colors[2], content: '[모유체질]' },
          ' 了!】',
        ]);
      } else {
        era.set(`talent:${cid}:모유분비`, 0);
      }
    }

    const weight_delta = era.get(`base:${cid}:체중 편차`);
    if (!era.get(`status:${cid}:살찜`) && weight_delta >= 4000) {
      era.set(`status:${cid}:살찜`, 1);
      era.print([
        '【',
        chara.get_colored_name(),
        { color: buff_colors[0], content: ' [살찜] ' },
        '이 되었다】',
      ]);
      sys_change_pressure(cid, 1000);
    } else if (era.get(`status:${cid}:살찜`)) {
      if (weight_delta <= 2000) {
        era.set(`status:${cid}:살찜`, 0);
        era.print(['【', chara.get_colored_name(), '의 체중이 정상으로 돌아왔다】']);
      } else {
        sys_change_pressure(cid, weight_delta / 10 - 100);
      }
    }

    const health_talent = era.get(`talent:${cid}:신체소질`);
    const race = era.get(`cflag:${cid}:종족`);
    let drug_delta = era.add(
      `base:${cid}:약물 잔류량`,
      ((20 * era.get(`status:${cid}:우마뾰이Z`) +
        40 * era.get(`status:${cid}:우마뾰이S`) +
        80 * era.get(`status:${cid}:슈퍼우마뾰이Z`) +
        40 * era.get(`status:${cid}:펄롱K`) +
        50 * era.get(`status:${cid}:펄롱P`) +
        26 * (era.get(`status:${cid}:사후피임약`) > 0) +
        25 * (era.get(`status:${cid}:경구피임약`) > 0) +
        16 * (era.get(`talent:${cid}:모유분비`) === 2)) *
        (10 - 2 * health_buff)) /
        10 -
        (5 + health_talent + health_buff) *
          (1 + race + (era.get(`status:${cid}:건강차`) > 0)),
    );
    let headache = 0;
    if (
      !era.get(`status:${cid}:편두통`) &&
      drug_delta >= 100 + 20 * health_talent + 50 * race
    ) {
      era.set(`status:${cid}:편두통`, 1);
      era.print([
        '【',
        chara.get_colored_name(),
        '은(는) ',
        { color: buff_colors[0], content: '[편두통]' },
        '을 얻었다】',
      ]);
      sys_change_pressure(cid, get_random_value(500, 1500));
      headache = 1;
    } else if (era.get(`status:${cid}:편두통`) > 0) {
      if (drug_delta <= 80 + 20 * health_talent + 50 * race) {
        era.set(`status:${cid}:편두통`, 0);
        era.print([
          '【',
          chara.get_colored_name(),
          '의 ',
          { color: buff_colors[0], content: '[편두통]' },
          '이 나았다】',
        ]);
      } else {
        sys_change_pressure(cid, drug_delta * 4);
        headache = 1;
      }
    }

    let stay_up = era.get(`status:${cid}:밤샘`);
    if (era.get(`base:${cid}:성욕`) >= lust_border.absent_mind) {
      stay_up++;
      sys_change_lust(cid, -get_random_value(0, 2000));
    }
    // 体力精力恢复
    headache++;
    if (has_furniture > 0 && cid === 0) {
      era.add('base:0:체력', era.get('maxbase:0:체력') * 0.8);
      era.add('base:0:기력', era.get('maxbase:0:기력') / headache);
    } else if (has_furniture > 0 && cid === has_furniture) {
      era.add(`base:${cid}:체력`, era.get(`maxbase:${cid}:체력`) * 0.4);
      era.add(
        `base:${cid}:기력`,
        (era.get(`maxbase:${cid}:기력`) * 0.75) / headache,
      );
    } else {
      era.add(
        `base:${cid}:체력`,
        era.get(`maxbase:${cid}:체력`) * (0.6 - 0.2 * stay_up),
      );
      era.add(
        `base:${cid}:기력`,
        (era.get(`maxbase:${cid}:기력`) * (1 - 0.25 * stay_up)) / headache,
      );
    }
    if (cid > 0) {
      era.set(`cflag:${cid}:자궁내정액`, 0);
      era.set(`cflag:${cid}:장내정액`, 0);
      era.set(`cflag:${cid}:복부내정액`, 0);
    }
    era.set(`status:${cid}:우마뾰이Z`, 0);
    if (
      era.get(`cflag:${cid}:음경크기`) < 4 &&
      Math.random() <
        0.05 * era.get(`status:${cid}:펄롱K`) +
          0.1 * era.get(`status:${cid}:펄롱P`)
    ) {
      era.add(`cflag:${cid}:음경크기`, 1);
      era.set(
        `abl:${cid}:음경내성`,
        Math.max(era.get(`abl:${cid}:음경내성`) - 2, 0),
      );
      if (era.get(`cflag:${cid}:성별`) === 0) {
        era.set(`cflag:${cid}:성별`, 10);
        era.print([
          '【',
          chara.get_colored_name(),
          ' 的阴核长成了一根肉棒!】',
        ]);
      }
    }
    era.set(`status:${cid}:펄롱K`, 0);
    era.set(`status:${cid}:펄롱P`, 0);
    era.set(`status:${cid}:슈퍼우마뾰이Z`, 0);
    era.set(`status:${cid}:우마뾰이S`, 0);
    era.set(`status:${cid}:숙면`, 0);
    era.set(`status:${cid}:경구피임약`, 0);
    era.set(`status:${cid}:반콘돔`, 0);
    if (era.get(`status:${cid}:사후피임약`) > 0) {
      era.add(`status:${cid}:사후피임약`, -1);
    }
    if (era.get(`status:${cid}:피로`) > 0) {
      era.set(
        `status:${cid}:피로`,
        Math.max(
          era.get(`status:${cid}:피로`) -
            (1 + (Math.random() < health_buff * 0.5 - 0.2)),
          0,
        ),
      );
    }
    if (era.get(`status:${cid}:부상`) > 0) {
      era.set(
        `status:${cid}:부상`,
        Math.max(
          era.get(`status:${cid}:부상`) -
            (1 + (Math.random() < health_buff * 0.5 - 0.2)),
          0,
        ),
      );
    }
    era.set(`status:${cid}:건강차`, 0);
    if (era.get(`status:${cid}:음문스티커`) === 2) {
      era.set(
        `jewel:${cid}:순종`,
        Math.max(era.get(`jewel:${cid}:순종`) - 1666),
      );
    }
    era.set(`status:${cid}:음문스티커`, 0);

    if (!isNaN(Number(era.get(`cflag:${cid}:육성턴수합산`)))) {
      era.add(`cflag:${cid}:육성턴수합산`, 1);
    }
    if (team_dict[cid]) {
      // 避战惩罚
      const registered_race = sys_reg_race(cid);
      if (
        registered_race.last.week > 0 &&
        registered_race.last.week < cur_round &&
        !RaceHistory.get(cid).get_result(
          era.get(`cflag:${cid}:육성턴수합산`) - 1,
        )
      ) {
        out_race_list.push(cid);
        ret += 100;
        registered_race.curr = { race: -1, week: -1 };
      }
      registered_race.last.race = registered_race.curr.race;
      registered_race.last.week = registered_race.curr.week;
      let motivation_change = 0;
      if (cid > 0) {
        if (stay_up > 0) {
          sys_change_pressure(cid, 100 + 200 * stay_up);
        }
        if (out_race_list.at(-1) === cid) {
          sys_change_pressure(cid, get_random_value(1000, 2000));
        }
        let status_hate = era.get(`status:${cid}:혐오약`);
        if (status_hate) {
          status_hate = era.add(`status:${cid}:혐오약`, -1);
        }
        const status_limit = LoveLimitStatus.get(cid);
        if (
          !status_limit.is_empty() &&
          cur_round > status_limit.limit &&
          Math.random() > Math.pow(2, status_limit.limit - cur_round) + 0.5
        ) {
          era.set(`love:${cid}`, status_limit.cache);
          const limit_delta = cur_round - status_limit.limit;
          status_limit.clear();
          await era.printAndWait([
            '【',
            chara.get_colored_name(),
            '에게 준 억제제의 효과가 사라졌다……',
            chara.get_colored_name(),
            '의 ',
            me.get_colored_name(),
            '에 대한 사랑이 밀려온다】',
          ]);
          sys_love_uma(cid, limit_delta * 2 + 8, true) &&
            (await era.waitAnyKey());
          sys_change_lust(cid, limit_delta * 100 + get_random_value(800, 1800));
        }
        if (era.get(`cflag:${cid}:성장단계`) >= 2) {
          if (
            (temp = era.get('flag:턴당호감도패널티')) ||
            era.get(`status:${cid}:혐오약`)
          ) {
            sys_like_chara(
              cid,
              0,
              temp - (era.get(`status:${cid}:혐오약`) > 0) * 50,
              false,
            );
          }
          if ((temp = era.get('flag:턴당애정도패널티')) > 0) {
            sys_love_uma(
              cid,
              (1 - (era.get(`status:${cid}:혐오약`) > 0)) *
                (1 - !LoveLimitStatus.get(cid).is_empty()) *
                temp,
              false,
            );
          }
        }
        // 殿堂计算
        const edu_weeks = era.get(`cflag:${cid}:육성턴수합산`);
        if (edu_weeks === 3 * 48) {
          sys_handle_palace(cid);
          p_flag = true;
          const love = era.get(`love:${cid}`);
          if (love >= 75) {
            global_achievement.edu_1_ex = 1;
          }
          if (
            love >= 90 ||
            (era.get(`mark:${cid}:${mark_enum.meek}`) === 3 &&
              !era.get(`mark:${cid}:${mark_enum.pain}`) &&
              !era.get(`mark:${cid}:${mark_enum.shame}`) &&
              !era.get(`mark:${cid}:${mark_enum.hate}`)) ||
            era.get(`mark:${cid}:${mark_enum.ero}`) === 3
          ) {
            global_achievement.edu_sex = 1;
          }
          if (
            // CFLAGNAME:15 = 부계캐릭
            era.get(`cflag:${cid}:15`) !== 0 &&
            // CFLAGNAME:16 = 모계캐릭
            era.get(`cflag:${cid}:16`) !== 0 &&
            love < 25 &&
            // EXPNAME:25 = 성관계횟수
            !era.get(`exp:${cid}:25`)
          ) {
            global_achievement.edu_tch = 1;
          }
          // CFLAGNAME:49 = 육성횟수
          const edu_count = era.get(`cflag:${cid}:49`);
          if (edu_count >= 2) {
            global_achievement.chan_sec = 1;
          }
          if (edu_count >= 3) {
            global_achievement.chan_thr = 1;
          }
          await era.waitAnyKey();
        } else if (edu_weeks < 3 * 48) {
          if (edu_weeks > 0 && edu_weeks % 48 === 0) {
            const skill_control = CharaSkills.get(cid),
              available_control = CharaAvailableSkills.get(cid),
              to_get = available_control.get().slice(0, 2);
            if (to_get.length === 0) {
              era.add(`exp:${cid}:스킬포인트`, 400);
            } else {
              available_control.remove(...to_get);
              get_skills_and_print_in_event(cid, to_get, skill_control);
            }
            attr_names.forEach((t) => {
              if (update_train_level(cid, t)) {
                era.print([
                  '【',
                  get_chara_talk(cid).get_colored_name(),
                  '의 ',
                  t,
                  '트레이닝 레벨이 올랐다!】',
                ]);
              }
            });
          } else if (
            edu_weeks % 48 === 8 &&
            era.get(`cflag:${cid}:상속자1`) > 0
          ) {
            const a = era.get(`cflag:${cid}:상속자1`),
              b = era.get(`cflag:${cid}:상속자2`),
              juel_list = gene_juel_names.map(
                (e) => era.get(`juel:${a}:${e}`) + era.get(`juel:${b}:${e}`),
              );
            if (edu_weeks > 96) {
              juel_list.forEach((e, i) =>
                era.add(
                  `juel:${cid}:${gene_juel_names[i]}`,
                  Math.floor(e * 0.4),
                ),
              );
            } else {
              juel_list.forEach((e, i) =>
                era.add(
                  `juel:${cid}:${gene_juel_names[i]}`,
                  e - Math.floor(e * 0.3) - Math.floor(e * 0.4),
                ),
              );
            }
            era.print([
              '【',
              get_chara_talk(cid).get_colored_name(),
              '은(는) 새 인자를 계승했다!】',
            ]);
          }
          if (
            era.get(`status:${cid}:땡땡이`) ||
            (stay_up && Math.random() < 0.2)
          ) {
            motivation_change -= 1;
          }
        }
      }
      sys_change_motivation(cid, motivation_change);
    }
  }
  if (p_flag) {
    const p_count = characters.reduce(
      // CFLAGNAME:49 = 육성횟수
      (p, c) => p + era.get(`cflag:${c}:49`),
      0,
    );
    if (p_count >= 1) {
      global_achievement.edu_one = 1;
    }
    if (p_count >= 3) {
      global_achievement.edu_thr = 1;
    }
    if (p_count >= 7) {
      global_achievement.edu_nrg = 1;
    }
    const wins = characters.reduce(
      (p, c) =>
        p +
        (new CharaTitles(c)
          .get()
          .findIndex((t) => t['wins'] || t.n === '백전백승') !==
          -1),
      0,
    );
    if (wins >= 1) {
      global_achievement.wins_one = 1;
    }
    if (wins >= 6) {
      global_achievement.wins_six = 1;
    }
    if (wins >= 13) {
      global_achievement.wins_thr = 1;
    }
  }
  return ret;
}

module.exports = reset_status;
