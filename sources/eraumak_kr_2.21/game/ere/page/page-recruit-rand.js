const era = require('#/era-electron');

const {
  sys_get_chara_info,
} = require('#/system/chara/sys-calc-characteristic');
const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');
const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');
const { get_image } = require('#/system/sys-calc-image');
const filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const print_page_header = require('#/page/components/page-header');

const { get_custom_check } = require('#/event/check/check-factory');
const { check_edu_script } = require('#/event/edu/edu-factory');
const game_guides = require('#/event/others/game-guides');
const { check_rec_script, run_custom_rec } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const {
  gacha,
  get_random_entry,
  join_to_string,
} = require('#/utils/list-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const { get_chara_color } = require('#/data/chara-colors');
const CharaSkills = require('#/data/chara-skills');
const {
  adaptability_colors,
  attr_change_colors,
  el_danger_color,
} = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const title_desc = require('#/data/desc/titles.json');
const { sex_title } = require('#/data/ero/status-const');
const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const {
  get_adaptability_rank,
  get_breast_cup,
  get_hair_color,
  get_skin,
  get_skin_color,
  get_talent,
  get_xp,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { skills_dict } = require('#/data/race/skill/skill-const');
const { adaptability_names, attr_names } = require('#/data/train-const');

async function print_rec_page() {
  const me = get_chara_talk(0);
  let event_chara_list, flag_recruit, flag_leave;

  const team_list = filter_chara('cflag', '모집상태', recruit_flags.yes),
    stay_list = [
      sys_get_star_premium_draw().chara,
      era.get('flag:대상물색'),
    ].filter((e) => e > 0);
  let today_list = gacha(
    filter_chara('cflag', '무작위모집', 1).filter(
      (v) => !team_list.includes(v) && era.get(`cflag:${v}:성장단계`) >= 2,
    ),
    5,
  );
  today_list.push(...stay_list);
  today_list = today_list.filter((e, i, l) => e && l.indexOf(e) === i);
  if (today_list.length > 6) {
    today_list.splice(
      today_list.findIndex((e) => stay_list.indexOf(e) === -1),
      1,
    );
  }
  today_list = today_list.sort((a, b) => a - b);
  await arrive_location(era.set('flag:현재위치', location_enum.playground));
  await game_guides.recruit();
  flag_leave = await sys_get_random_event(event_hooks.recruit_start)();
  const flag_limit = sys_check_team_limit() >= 0;
  flag_recruit = !flag_leave;

  while (flag_recruit) {
    const buffer = [];
    buffer.push([{ type: 'divider' }]);
    const cur_recruit = era.get('flag:대상물색');
    today_list = today_list.filter(
      (chara_id) => era.get(`cflag:${chara_id}:무작위모집`) > 0,
    );
    if (today_list.length) {
      if (cur_recruit && today_list.indexOf(cur_recruit) === -1) {
        buffer[0].push({
          content: [
            get_chara_talk(cur_recruit).get_colored_name(),
            '은(는) 훈련장에 없는 것 같다……',
            { isBr: 2 },
          ],
          type: 'text',
        });
      } else if (flag_limit) {
        buffer[0].push({
          content: [
            me.get_colored_name(),
            '의 팀은 이미 많은 우마',
            era.get('flag:캐릭터성별') === 1 ? '무스코' : '무스메',
            '들이 있기 때문에 ',
            me.get_colored_name(),
            '의 모집은 받아들여지기 어려울 것이다...',
            { isBr: 2 },
          ],
          type: 'text',
        });
      } else {
        buffer[0].push({
          content: [
            '훈련장에서 몇 명의 우마',
            era.get('flag:캐릭터성별') === 1 ? '무스코' : '무스메',
            '들을 만났다. 누가 ',
            me.get_colored_name(),
            '의 관심을 끄는가?',
            { isBr: 2 },
          ],
          type: 'text',
        });
      }
      buffer.push(
        ...today_list.map((chara_id) => {
          return {
            columns: [
              {
                names: get_image(chara_id)
                  .map((e) => `${e}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
              {
                accelerator: chara_id,
                config: {
                  align: 'center',
                  buttonType:
                    check_rec_script(chara_id) && check_edu_script(chara_id)
                      ? 'danger'
                      : 'warning',
                  disabled:
                    flag_limit || (cur_recruit && cur_recruit !== chara_id),
                },
                content: era.get(`static:${chara_id}:name`),
                type: 'button',
              },
              {
                accelerator: chara_id + 1000,
                config: { align: 'center' },
                content: '개인 정보 미리보기',
                type: 'button',
              },
              {
                accelerator: chara_id + 2000,
                config: { align: 'center' },
                content: '육성 정보 미리보기',
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
        [
          {
            content: [
              { isBr: true },
              '* 이름이 ',
              { color: el_danger_color, content: '붉은색' },
              '인 우마무스메는 전용 구상 존재',
            ],
            type: 'text',
          },
        ],
      );
    } else {
      buffer[0].push({
        config: {
          align: 'center',
        },
        content: [
          '훈련장에는 눈에 띄는 우마',
          era.get('flag:캐릭터성별') === 1 ? '무스코' : '무스메',
          '가 없었다...',
        ],
        type: 'text',
      });
    }
    era.setHorizontalAlign('space-around');
    era.printInColRows(...buffer, [
      { type: 'divider' },
      { type: 'button', accelerator: 999, content: '나가기' },
    ]);
    era.setHorizontalAlign('start');

    let ret = await era.input();

    if (ret === 999) {
      // 选择直接离开的时候触发需要选择离开才触发的招募事件
      // 队伍已经满了的情况下是不会触发事件的
      if (era.get('flag:대상물색') === 0) {
        event_chara_list = filter_chara(
          'cflag',
          '모집상태',
          recruit_flags.success_on_leave,
        ).filter((cid) => today_list.includes(cid) && !flag_limit);
        if (event_chara_list.length > 0) {
          era.drawLine();
          flag_leave = await run_custom_rec(
            get_random_entry(event_chara_list),
            event_hooks.recruit_end,
          );
        }
      }
      flag_recruit = false;
    } else if (ret > 1000 && ret <= 2000) {
      const selected = ret - 1000,
        name = era.get(`static:${selected}:name`),
        body_hair_color = era.get(`cstr:${selected}:털색`),
        hair_color = era.get(`cstr:${selected}:머리색`),
        sex_code = era.get(`cflag:${selected}:성별`),
        talent_list = [];
      let hair = era.get(`cstr:${selected}:바보털`);
      hair = join_to_string(
        [
          hair ? `${hair}바보털` : '',
          era.get(`cstr:${selected}:앞머리`),
          era.get(`cstr:${selected}:중간머리`),
          era.get(`cstr:${selected}:뒷머리`),
        ],
        '+',
      );
      let temp = get_talent(selected);
      if (temp.length > 0) {
        talent_list.push(
          {
            config: { width: 2 },
            content: '성격',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: temp,
            type: 'text',
          },
        );
      }
      temp = get_xp(selected);
      if (temp.length > 0) {
        talent_list.push(
          {
            config: { width: 2 },
            content: '기타',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: temp,
            type: 'text',
          },
        );
      }
      era.printMultiColumns(
        [
          {
            config: {
              content: `${name}의 개인정보`,
              position: 'left',
            },
            type: 'divider',
          },
          {
            content: [
              '피부색 ',
              { color: get_skin_color(selected), content: get_skin(selected) },
              ' 의 ',
              {
                color: get_hair_color(hair_color),
                content: `${hair_color} 머리 `,
              },
              {
                color: get_hair_color(body_hair_color),
                content: `${body_hair_color} 털`,
              },
              ' ',
              sys_get_chara_info(era.get(`cflag:${selected}:성격`)),
              ' ',
              sex_title[sex_code],
            ],
            type: 'text',
          },
          { content: ['헤어스타일: ', hair], type: 'text' },
          {
            content: [
              '생년월일 ',
              era.get(`cflag:${selected}:출생월`),
              ' 월 ',
              era.get(`cflag:${selected}:출생일`),
              ' 일',
            ],
            type: 'text',
          },
          {
            config: {
              content: `${name}의 신체치수`,
              position: 'left',
            },
            type: 'divider',
          },
          {
            content: [
              '키：',
              era.get(`cflag:${selected}:키`).toString(),
              'cm ｜ 체중：적당함',
            ],
            type: 'text',
          },
          ...(sex_code !== 1 &&
          (era.get('status:0:투시렌즈') || era.get('status:0:우마토커'))
            ? [
                {
                  content: [
                    '쓰리사이즈：B',
                    get_bust_size(selected, true).toString(),
                    ' (',
                    get_breast_cup(selected, true).toString(),
                    ' Cup) · W',
                    get_waist_size(selected).toString(),
                    ' · H',
                    get_hip_size(selected).toString(),
                  ],
                  type: 'text',
                },
              ]
            : []),
          {
            config: {
              content: `${name}의 성격 특징`,
              position: 'left',
            },
            type: 'divider',
          },
          ...talent_list,
        ],
        { width: 18 },
      );
      await era.waitAnyKey();
    } else if (ret > 2000) {
      const selected = ret - 2000,
        name = era.get(`static:${selected}:name`),
        skill_list = CharaSkills.get(selected)
          .get()
          .map((e) => ({
            config: { width: 5 },
            content: skills_dict[e].get_colored_name(),
            type: 'text',
          })),
        available_list = CharaAvailableSkills.get(selected)
          .get()
          .map((e) => ({
            config: { width: 5 },
            content: skills_dict[e].get_colored_name(),
            type: 'text',
          })),
        skill_buffer = [];
      skill_buffer.push({
        config: { width: 3 },
        content: '초기：',
        type: 'text',
      });
      if (skill_list.length > 0) {
        skill_buffer.push(...skill_list);
      } else {
        skill_buffer.push({
          config: { width: 6 },
          content: '스킬포인트+680',
          type: 'text',
        });
      }
      skill_buffer.push({ content: [], type: 'text' });
      if (available_list.length > 0) {
        skill_buffer.push(
          {
            config: { width: 3 },
            content: '클래식 시즌 해금：',
            type: 'text',
          },
          ...available_list.slice(0, 2),
          { content: [], type: 'text' },
          {
            config: { width: 3 },
            content: '시니어 시즌 해금：',
            type: 'text',
          },
          ...available_list.slice(2),
        );
      } else {
        skill_buffer.push(
          {
            config: { width: 3 },
            content: '클래식 시즌 해금：',
            type: 'text',
          },
          {
            config: { width: 6 },
            content: '스킬포인트+400',
            type: 'text',
          },
          { content: [], type: 'text' },
          {
            config: { width: 3 },
            content: '시니어 시즌 해금：',
            type: 'text',
          },
          {
            config: { width: 6 },
            content: '스킬포인트+400',
            type: 'text',
          },
        );
      }
      const adapt_info = [];
      adaptability_names.forEach((e) => {
        const adapt = era.get(`cflag:${selected}:${e}적성`);
        adapt_info.push(
          { config: { width: 2 }, content: [e, '：'], type: 'text' },
          {
            config: {
              color: adaptability_colors[adapt],
              fontWeight: 'bold',
              width: 2,
            },
            content: get_adaptability_rank(adapt),
            type: 'text',
          },
        );
      });
      era.printMultiColumns(
        [
          {
            config: {
              content: `${name}의 트레이닝 보너스`,
              position: 'left',
            },
            type: 'divider',
          },
          ...attr_names
            .map((e) => ({
              n: e,
              v: era.get(`staticcflag:${selected}:${e}보너스`),
            }))
            .filter((e) => e.v > 0)
            .map((e) => ({
              config: { width: 4, color: attr_colors[e.n] },
              content: [e.n, '：+', e.v.toString(), '%'],
              type: 'text',
            })),
          {
            config: {
              content: `${name}의 레이스적성`,
              position: 'left',
            },
            type: 'divider',
          },
          ...adapt_info,
          {
            config: {
              content: `${name}의 습득스킬`,
              position: 'left',
            },
            type: 'divider',
          },
          ...skill_buffer,
          {
            config: {
              content: `${name}의 육성목표`,
              position: 'left',
            },
            type: 'divider',
          },
          ...get_custom_check(selected)
            .get_edu_aims()
            .filter(({ content }) => content.endsWith('✘'))
            .map((e) => {
              const g1 = e.content.indexOf('G1') !== -1;
              const champion =
                e.content.indexOf('1착') !== -1 ||
                e.content.indexOf('一着') !== -1;
              return {
                config: {
                  color: champion ? el_danger_color : undefined,
                  fontStyle: g1 ? 'italic' : undefined,
                  fontWeight: g1 && champion ? 'bold' : undefined,
                },
                content: e.content.substring(0, e.content.length - 2),
                type: 'text',
              };
            }),
          {
            config: {
              content: `${name}의 전용칭호`,
              position: 'left',
            },
            type: 'divider',
          },
          ...get_custom_check(selected)
            .get_personal_titles()
            .map((e) => ({
              content: [
                { content: e, color: get_chara_color(selected) },
                '：',
                title_desc[e] || '육성 주기 내에 G1 레이스에서 6회 이상 우승',
              ],
              type: 'text',
            })),
          {
            content: [
              '전용 업적：',
              {
                color: get_chara_color(selected),
                fontWeight: 'bold',
                content: era.get(`staticcstr:${selected}:칭호`),
              },
              ' ',
              sys_personal_achievement.get(selected) > 0
                ? { color: attr_change_colors.up, content: '✔' }
                : { color: attr_change_colors.down, content: '✘' },
            ],
            type: 'text',
          },
        ],
        { width: 20 },
      );
      await era.waitAnyKey();
    } else {
      era.drawLine();
      // 普通招募事件
      flag_leave = await run_custom_rec(ret, event_hooks.recruit);
      // 正常招募却没招募，说明招募没成功
      flag_recruit = era.get(`cflag:${ret}:모집상태`) <= 0 && !flag_leave;
    }
    if (flag_recruit) {
      await era.clear();
      print_page_header();
    }
  }
  if (!flag_leave) {
    era.drawLine();
    await era.printAndWait('【복귀】');
    await sys_get_random_event(event_hooks.recruit_end)();
  }
  await game_guides.recruit_end();
  era.set('flag:현재위치', location_enum.office);
}

module.exports = print_rec_page;
