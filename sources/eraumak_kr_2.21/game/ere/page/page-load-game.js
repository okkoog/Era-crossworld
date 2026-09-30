const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const {
  sys_get_billings,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const filter_chara = require('#/system/sys-filter-chara');
const { init_chara } = require('#/system/sys-init-chara');
const sys_load_game = require('#/system/sys-load-game');

const print_page_header = require('#/page/components/page-header');
const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { clean_actions } = require('#/event/basement-queue');
const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_daily } = require('#/event/daily/daily-factory');
const { add_event, cb_enum, get: get_queue } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { action_type_enum } = require('#/data/basement-const');
const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const { adaptability_colors } = require('#/data/color-const');
const { trainer_salary } = require('#/data/const.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const basement_owners = require('#/data/event/basement-owners');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const LoveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-132');
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_filtered_talents,
  get_trainer_title,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const {
  creditors,
  first_child_id,
  max_chara_id,
} = require('#/data/other-const');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

function check_titles(...ids) {
  ids
    .filter(
      (id) =>
        era.get(`cflag:${id}:모집상태`) === recruit_flags.yes &&
        era.get(`cflag:${id}:육성턴수합산`) >= 3 * 48,
    )
    .forEach((cid) => {
      const check = get_custom_check(cid);
      sys_add_titles(
        cid,
        ...check.check_and_get_titles(
          check.get_edu_aims().reduce((p, c) => p && c.check === 1, true),
        ),
      );
    });
}

function set_image_t(cid) {
  // CSTRNAME:13 = 이미지T
  if (era.getAddedCharacters().includes(cid) && !era.get(`cstr:${cid}:13`)) {
    // CSTRNAME:10 = 이미지
    era.set(`cstr:${cid}:13`, era.get(`staticcstr:${cid}:10`));
  }
}

/**
 * load game
 * @return {Promise<boolean>} if true, tell main.js to call homepage
 */
module.exports = async () => {
  let flag_load_game = true;
  let msg_notification = '';

  while (flag_load_game) {
    await era.clear();
    print_page_header();

    const buffer = [];
    if (msg_notification) {
      buffer.push(
        { type: 'divider' },
        {
          config: { align: 'center' },
          content: msg_notification,
          type: 'text',
        },
      );
    }
    buffer.push({ config: { content: '불러올 슬롯 선택' }, type: 'divider' });
    new Array(11).fill(0).forEach((_, e) => {
      let comm_desc = era.get(`global:saves:${e}`);
      const enabled = comm_desc && !comm_desc.startsWith('(FILE LOST)');
      buffer.push({
        accelerator: e,
        config: { disabled: !enabled, width: 20 },
        content: comm_desc || '빈 세이브 슬롯',
        type: 'button',
      });
      if (comm_desc) {
        buffer.push({
          accelerator: e + 100,
          config: { align: 'right', width: 4 },
          content: '삭제',
          type: 'button',
        });
      }
    });
    era.printMultiColumns(buffer);

    era.drawLine();
    era.printButton('돌아가기', 99, { align: 'right' });

    let ret = await era.input();

    switch (ret) {
      case 99:
        flag_load_game = false;
        break;
      default:
        if (ret < 100) {
          if (era.get('flag:로드대화')) {
            const cid = get_random_entry(
              filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
                (e) => e,
              ),
            );
            if (cid > 0) {
              await get_custom_daily(cid).load_talk();
            }
          }
          CharaInmon.clean();
          if (await era.loadData(ret)) {
            flag_load_game = false;
            sys_load_game();
            // 向前兼容
            const version = era.get('version');
            if (version < 1011) {
              // 大拓太阳神育成目标错误、贵妇人称号错误
              check_titles(65, 116);
            }
            if (version < 1100) {
              const e_queue = get_queue();
              Object.values(e_queue).forEach((l) =>
                l.forEach((e) => {
                  if (e.type === cb_enum.love) {
                    if (e.arg === undefined) {
                      era.arg = [era.get(`love:${e.chara_id}`)];
                    } else if (
                      e.arg === 49 ||
                      e.arg === 74 ||
                      e.arg === 89 ||
                      e.arg === 99
                    ) {
                      e.arg = [e.arg];
                    } else if (e.chara_id === 205 && e.arg === 'lust') {
                      e.arg = [49, 'lust'];
                    }
                  }
                }),
              );
              era.getAddedCharacters().forEach((e) => {
                if (
                  era.get(`cflag:${e}:종족`) &&
                  era.get(`cflag:${e}:성장단계`) === 5 &&
                  !(era.get(`cflag:${e}:육성턴수합산`) < 3 * 48) &&
                  !era.get(`cflag:${e}:재육성가능`)
                ) {
                  era.set(`cflag:${e}:재육성가능`, 1);
                }
                if (era.get(`cflag:${e}:육성턴수합산`) < 3 * 48) {
                  era.set(`cflag:${e}:재육성가능`, 0);
                }
              });
              new MyEduMarks().strange_day = get_random_value(4, 8);
            }
            if (version < 1101) {
              era.getAddedCharacters().forEach((e) => {
                if (era.get(`cflag:${e}:육성턴수합산`) < 143 + 9) {
                  era.set(`cflag:${e}:재육성가능`, 0);
                }
              });
            }
            if (version < 1111) {
              if (era.get('cflag:0:템플릿캐릭터') !== 32) {
                new TachyonLifeMarks().drug_notice =
                  Math.max(48 - era.get('flag:현재턴수'), 0) +
                  get_random_value(1, 25);
              }
              era
                .getAddedCharacters()
                .filter((e) => e >= first_child_id && e < max_chara_id)
                .forEach((e) => {
                  let father_id = era.get(`cflag:${e}:부계캐릭`),
                    mother_id = era.get(`cflag:${e}:모계캐릭`);
                  const clean_errors = () => {
                    const relation_obj = era.get(`relation:${e}`);
                    relation_obj[0] = Math.max(relation_obj[0] || 0, 400);
                    delete relation_obj[undefined];
                    delete relation_obj[null];
                    const callname_obj = era.get(`callname:${e}`);
                    delete callname_obj[undefined];
                    delete callname_obj[null];
                  };
                  if (!(father_id > 0)) {
                    father_id = era.set(`cflag:${e}:부계캐릭`, 0);
                    era.set(`callname:${e}:0`, '파파');
                    clean_errors();
                  }
                  if (!(mother_id > 0)) {
                    mother_id = era.set(`cflag:${e}:모계캐릭`, 0);
                    era.set(`callname:${e}:0`, '마마');
                    clean_errors();
                  }
                  if (era.get(`cflag:${e}:모집상태`) !== recruit_flags.yes) {
                    if (father_id === 0 || mother_id === 0) {
                      era.set(`cflag:${e}:모집상태`, recruit_flags.yes);
                    } else {
                      era.set(`cflag:${e}:무작위모집`, 1);
                    }
                  }
                });
            }
            if (version < 1200) {
              era.set('callname:304:306', '카시모토');
              era.set('callname:304:305', '안심자와 선생');
              const my_reg = sys_reg_race(0);
              my_reg.last.race = my_reg.curr.race;
              my_reg.last.week = my_reg.curr.week;
              if (era.get('cflag:0:템플릿캐릭터') === 32) {
                new MyEduMarks().strange_day = 0;
              } else if (
                new MyEduMarks().strange_day === 0 &&
                (get_queue()[event_hooks.week_start] || []).findIndex(
                  (e) => e.arg === 'strange_day',
                ) === -1
              ) {
                add_event(
                  event_hooks.week_start,
                  new EventObject(0, cb_enum.edu).set_arg('strange_day2'),
                );
              }
              if (era.get('cflag:56:모집상태') === recruit_flags.yes) {
                const title_name =
                    get_custom_check(56).get_personal_titles()[0],
                  personal_title = CharaTitles.get(56)
                    .get()
                    .find((e) => e.n === title_name);
                if (personal_title !== undefined) {
                  personal_title.c = get_chara_color(56);
                }
              }
              if (era.get('cflag:88:모집상태') === recruit_flags.yes) {
                const personal_title = CharaTitles.get(56)
                  .get()
                  .find((e) => e.n === '黑翠千里行');
                if (personal_title !== undefined) {
                  personal_title.n =
                    get_custom_check(88).get_personal_titles()[0];
                }
              }
            }
            if (version <= 1201) {
              if (
                era.get('cflag:0:종족') === 0 &&
                era.get('flag:현재주') === 4
              ) {
                const billings = sys_get_billings(),
                  cur_month = era.get('flag:현재월'),
                  salary =
                    trainer_salary[get_trainer_title().substring(0, 2)] *
                    (1 + (cur_month === 12));
                era.set('flag:18', 0);
                billings.push({
                  creditor:
                    cur_month === 12 ? creditors.annul_bonus : creditors.salary,
                  repay: salary,
                  timer: 1,
                });
              }
              check_titles(66);
              if (
                era.get('cflag:67:모집상태') === recruit_flags.yes &&
                era.get('cflag:67:육성턴수합산') > 143 + 9 &&
                era.get('cflag:67:재육성가능') === 0
              ) {
                era.set('cflag:67:재육성가능', 1);
              }
            }
            if (version <= 1210) {
              const keys = era.get('cstrkeys').filter((k) => k !== 12);
              era
                .getAddedCharacters()
                .forEach((id) =>
                  keys.forEach((k) =>
                    era.set(
                      `cstr:${id}:${k}`,
                      era.get(`cstr:${id}:${k}`) || '',
                    ),
                  ),
                );
            }
            if (version <= 1211) {
              era.getAddedCharacters().forEach((id) => {
                if (id > 0 && era.get(`cflag:${id}:종족`) === 0) {
                  era.set(`cflag:${id}:재육성가능`, 1);
                }
              });
              if (
                era.get('cflag:204:무작위모집') === 1 &&
                era.get('cflag:204:모집상태') !== recruit_flags.yes
              ) {
                era.set('cflag:204:모집상태', -1);
                era.set('cflag:204:무작위모집', 0);
              }
              if (
                era.get('cflag:204:재육성가능') > 0 &&
                era.get('jewel:204:흰색') === 0
              ) {
                era.set('jewel:204:분홍색', 100);
                era.set('jewel:204:흰색', 100);
                era.set('jewel:204:푸른색', 100);
              }
            }
            if (version <= 1300) {
              let basement_cd = era.get('flag:지하실쿨타임') || 0;
              era.getAddedCharacters().forEach((id) => {
                const life_marks = LifeEventMarks.get_marks(id);
                const b_cd = life_marks.get('b_cd');
                if (b_cd > 0) {
                  era.set('flag:지하실쿨타임', Math.max(b_cd, basement_cd));
                  life_marks.set('b_cd', 0);
                }
              });
            }
            if (version <= 1310) {
              init_chara(345);
              init_chara(346);
              init_chara(347);
              init_chara(348);
              new MyEduMarks().kamen_rider = 1;
            }
            if (version <= 1311) {
              era.getAddedCharacters().forEach((e) => {
                const titles = era.get(`cstr:${e}:칭호`);
                if (Array.isArray(titles)) {
                  titles.forEach((t) => t.s === false && delete t.s);
                }
                if (
                  e > 0 &&
                  e < 1000 &&
                  era.get(`cflag:${e}:종족`) > 0 &&
                  era.get(`cflag:${e}:모집상태`) === recruit_flags.yes &&
                  era.get(`cflag:${e}:육성턴수합산`) > 143 + 9 &&
                  era.get(`cflag:${e}:재육성가능`) === 0
                ) {
                  era.set(`cflag:${e}:육성턴수합산`, 'x');
                }
              });
            }
            if (version <= 1320) {
              era.set('cflag:0:성장단계', 5);
              era.set(
                'cflag:0:육성턴수합산',
                4800 + era.get('flag:현재턴수'),
              );
            }
            if (version <= 1321) {
              if (era.get('flag:현재위치') === location_enum.basement) {
                const owners = basement_owners.get();
                clean_actions(
                  (a, i, l) =>
                    (a.chara_id !== 0 &&
                      owners.findIndex((e) => e === a.chara_id) === -1 &&
                      a.type !== action_type_enum.rescue) ||
                    l.findIndex(
                      (e) => e.chara_id === a.chara_id && e.type === a.type,
                    ) < i,
                );
              } else {
                clean_actions(() => true);
              }
              era.getAddedCharacters().forEach((e) =>
                attr_names.forEach((a) => {
                  if (era.get(`abl:${e}:${a}트레이닝레벨`) > 5) {
                    era.set(`abl:${e}:${a}트레이닝레벨`, 5);
                  }
                }),
              );
            }
            if (version <= 1330) {
              if (
                era.get('cflag:0:템플릿캐릭터') > 0 &&
                era.get('flag:징벌강도') === 0
              ) {
                era.set('flag:명성부족교체', 0);
              }
            }
            if (version <= 1340) {
              const chara_list = era.getAddedCharacters();
              chara_list.forEach((cid) => {
                era.set(`equip:${cid}:음문노예`, era.get(`equip:${cid}:10`));
                if (era.get(`exp:${cid}:성관계횟수`) > 0) {
                  era.set(`cstr:${cid}:첫시오후키경험`, []);
                  era.set(`cstr:${cid}:무자각첫시오후키경험`, []);
                  era.set(`cstr:${cid}:첫애액음용경험`, []);
                  era.set(`cstr:${cid}:무자각첫애액음용경험`, []);
                }
                const tokino = CharaTitles.get(cid)
                  .get()
                  .find((t) => t.n === '시대의 패자');
                if (tokino !== undefined) {
                  tokino.c = adaptability_colors.at(-2);
                }
              });
              era.getAllCharacters().forEach((cid) => {
                if (cid > 200 && chara_list.indexOf(cid) === -1) {
                  init_chara(cid);
                }
              });
              if (era.get('flag:징벌강도') >= 2) {
                era.set('talent:0:조교도', 5);
              }
              //              if (
              //                !(await select_yes_or_no(
              //                  '请选择目白城风格',
              //                  '「自由」',
              //                  '「慈爱」',
              //                ))
              //              ) {
              era.set('flag:메지로성스타일', 1);
              era.set('flag:메지로성변수', { limit: 1 });
              //              }
              if (
                await select_yes_or_no(
                  '请选择带玩具参赛的影响',
                  '无影响',
                  '有影响',
                )
              ) {
                era.set('flag:아이템영향', 0);
              } else {
                era.set('flag:아이템영향', -25);
              }
              if (era.get('flag:레이스난이도') < 0) {
                era.set('flag:레이스난이도', -40);
              }
            }
            if (version <= 2004) {
              if (
                !era.get('cflag:349:재육성가능') &&
                !era.get('cflag:349:명예의전당') &&
                !(era.get('cflag:349:육성턴수합산') < 3 * 48)
              ) {
                era.set('cflag:349:재육성가능', 1);
              }
            }
            if (version <= 2005) {
              const marks = new BryneLifeMarks();
              if (marks.funds < 0) {
                era.add('flag:현재코인', marks.funds);
                const invest = sys_get_billings().find(
                  (e) => e.creditor === creditors.invest,
                );
                invest.repay = 0;
              }
            }
            if (version <= 2011) {
              // 唯独爱你称号bug
              if (
                era.get('cflag:132:모집상태') === recruit_flags.yes &&
                era.get('love:132') >= 50 &&
                check_aim_race(
                  RaceHistory.get(132).get(),
                  race_enum.yush_him,
                  1,
                  1,
                ) &&
                (check_aim_race(
                  RaceHistory.get(132).get(),
                  race_enum.eliz_cup,
                  1,
                  1,
                ) ||
                  check_aim_race(
                    RaceHistory.get(132).get(),
                    race_enum.eliz_cup,
                    2,
                    1,
                  ))
              ) {
                new LoveEduMarks().title_check = 0b11;
                const check = get_custom_check(132);
                sys_add_titles(
                  132,
                  ...check.check_and_get_titles(
                    check
                      .get_edu_aims()
                      .reduce((p, c) => p && c.check === 1, true),
                  ),
                );
              }
            }
            if (version <= 2100) {
              era
                .getAddedCharacters()
                .forEach((cid) => era.add(`talent:${cid}:조교도`, 1));
            }
            if (version <= 2120) {
              if (new LunaEduMarks().good_end === 2) {
                new Array(7)
                  .fill(0)
                  .forEach((_, i) => era.set(`status:17:${110 + i}`, 0));
              }
            }
            if (version <= 2152) {
              era
                .getAddedCharacters()
                .forEach((cid) =>
                  attr_names.forEach((a) =>
                    era.set(
                      `exp:${cid}:${a}트레이닝경험`,
                      Math.max(era.get(`exp:${cid}:${a}트레이닝경험`), 0),
                    ),
                  ),
                );
              era.set('item:현실투시기', 1);
            }
            if (version <= 2160) {
              new MyEduMarks().big_sale = 1;
            }
            if (version <= 2171) {
              const eq = get_queue();
              if (eq[event_hooks.out_shopping]) {
                let count = 0;
                eq[event_hooks.out_shopping] = eq[
                  event_hooks.out_shopping
                ].filter((e) => {
                  if (
                    e.chara_id !== 0 ||
                    e.type !== cb_enum.edu ||
                    e.arg !== 'big_sale'
                  ) {
                    return true;
                  }
                  return count++ === 0;
                });
                for (let i = 0; i < count - 1; ++i) {
                  EventMarks.get(0).sub(event_hooks.out_shopping);
                }
              }
            }
            if (version <= 2172) {
              check_titles(33, 113);
            }
            if (version <= 2202) {
              check_titles(349);
              if (era.get('flag:현재턴수') % 48 || 48 >= 9) {
                const bug_list = [4, 46, 346, 347, 348];
                era
                  .getAddedCharacters()
                  .filter((cid) => bug_list.includes(cid))
                  .forEach((cid) => {
                    if (
                      era.get(`cflag:${cid}:모집상태`) === recruit_flags.yes &&
                      era.get(`cflag:${cid}:육성턴수합산`) > 3 * 48
                    ) {
                      era.set(`cflag:${cid}:재육성가능`, 1);
                    }
                  });
              }
            }
            if (version <= 2203) {
              check_titles(63);
            }
            if (version < era.get('gamebase').version) {
              set_image_t(7);
              set_image_t(21);
              set_image_t(25);
              set_image_t(302);
              era.getAddedCharacters().forEach((cid) => {
                if (cid > 0) {
                  const t_table = era.get(`chara:${cid}`)?.talent;
                  if (
                    typeof t_table === 'object' &&
                    Object.entries(t_table)
                      .filter(([t]) => Number(t) <= 20)
                      .reduce(
                        (p, [t, v]) => p && era.get(`talent:${cid}:${t}`) !== v,
                        true,
                      )
                  ) {
                    const aims = [cid];
                    if (era.get('cflag:0:템플릿캐릭터') === cid) {
                      aims.push(0);
                    }
                    Object.entries(t_table)
                      .filter(([t]) => {
                        const tid = Number(t);
                        return tid <= 20 || (tid >= 40 && tid <= 47);
                      })
                      .forEach(([t, v]) =>
                        aims.forEach((a) => era.set(`talent:${a}:${t}`, v)),
                      );
                    aims.forEach((a) => {
                      const sex_code = era.get(`cflag:${a}:성별`);
                      [
                        ...get_filtered_talents(sex_code, 50),
                        ...get_filtered_talents(sex_code, 60),
                      ].forEach((tid) => {
                        if (t_table[tid] !== undefined) {
                          era.set(`talent:${a}:${tid}`, t_table[tid]);
                        }
                      });
                    });
                  }
                }
              });
            }
            return true;
          } else {
            msg_notification = `${ret}번 슬롯의 저장 데이터를 불러오지 못했습니다`;
          }
        } else if (
          (era.get(`global:saves:${ret - 100}`) &&
            era.get(`global:saves:${ret - 100}`).startsWith('(FILE LOST)') &&
            !era.set(`global:saves:${ret - 100}`, '')) ||
          (await era.rmData(ret - 100))
        ) {
          await era.saveGlobal();
          msg_notification = `${ret - 100}번 슬롯의 세이브 데이터 삭제 성공`;
        }
        break;
    }
  }
};
