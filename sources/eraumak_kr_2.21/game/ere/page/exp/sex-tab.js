const era = require('#/era-electron');

const {
  check_chara_ero_image,
  sys_get_ero_image,
} = require('#/system/ero/sys-calc-ero-image');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');

const CharaTalk = require('#/utils/chara-talk');
const get_gradient_color = require('#/utils/gradient-color');
const { get_abbr_number } = require('#/utils/value-utils');

const { attr_change_colors, palam_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const { palam2juel } = require('#/data/ero/orgasm-const');
const { inmon_plugin_dict } = require('#/data/ero/plugin/plugin-const');
const {
  get_abl_title,
  growth_info,
  no_info,
  unknown_info,
} = require('#/data/exp-const');
const { get_breast_cup, get_talent, get_xp } = require('#/data/info-generator');

const page_name = '성적관계';

const sex_color = mark_colors['음문'];

/**
 * @param {number} chara_id
 * @param {string} mark_name
 * @param {number} [mark_level]
 */
function get_mark_info(chara_id, mark_name, mark_level) {
  const level =
    mark_level === undefined
      ? era.get(`mark:${chara_id}:${mark_name}`)
      : mark_level;
  return {
    config: { width: 4 },
    content: [
      { color: mark_colors[mark_name], content: `${mark_name} Lv.${level}` },
      { isBr: true },
      {
        content: new Array(level).fill('★').join(''),
        color: get_gradient_color(undefined, mark_colors[mark_name], level / 3),
      },
      {
        content: new Array(3 - level).fill('☆').join(''),
      },
    ],
    type: 'text',
  };
}

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const sex_info_list = [];
    if (flags.in_growth) {
      sex_info_list.push(
        { type: 'divider', config: { content: page_name, position: 'left' } },
        { content: growth_info, type: 'text' },
      );
    } else if (!chara.id || flags.show_exp) {
      const in_train = era.get(`ex:${chara.id}:TotalEX`) !== undefined;
      if (in_train) {
        const plugin_list = CharaInmon.get(chara.id).list;
        const inmon_info =
          plugin_list.length > 0
            ? [
                {
                  config: { width: 2 },
                  content: '음문',
                  type: 'text',
                },
                {
                  config: { width: 22 },
                  content: plugin_list.map((e) => {
                    const p = inmon_plugin_dict[e];
                    return {
                      content: `[${p.name}]`,
                      color: get_gradient_color('', sex_color, p.level / 3),
                      title: `[${p.name}]：${p.description}`,
                    };
                  }),
                  type: 'text',
                },
              ]
            : [];
        sex_info_list.push(
          {
            config: { content: '신체치수', position: 'left' },
            type: 'divider',
          },
          {
            content: [
              '키：',
              era.get(`cflag:${chara.id}:키`).toString(),
              'cm ｜ ',
              '체중：',
              era.get(`status:${chara.id}:살찜`)
                ? '사, 살쪘나……'
                : era.get(`base:${chara.id}:체중 편차`) >= 2000
                  ? '살짝 증가'
                  : '적당함',
              chara.sex_code === 1
                ? ''
                : ` ｜ 쓰리사이즈：B${get_bust_size(
                    chara.id,
                    true,
                  )} (${get_breast_cup(chara.id, true)} Cup) · W${get_waist_size(
                    chara.id,
                  )} · H${get_hip_size(chara.id)}`,
            ],
            type: 'text',
          },
          {
            config: { content: '특징', position: 'left' },
            type: 'divider',
          },
          {
            config: { width: 2 },
            content: '성격',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: get_talent(chara.id),
            type: 'text',
          },
          {
            config: { width: 2 },
            content: '기타',
            type: 'text',
          },
          {
            config: { width: 22 },
            content: get_xp(chara.id),
            type: 'text',
          },
          ...inmon_info,
        );
      } else {
        const sex_count = era.get(`exp:${chara.id}:성관계횟수`),
          sleep_count = era.get(`exp:${chara.id}:수면간횟수`),
          prison_count = era.get(`exp:${chara.id}:감금횟수`);
        sex_info_list.push(
          {
            config: { content: '기본 정보', position: 'left' },
            type: 'divider',
          },
          {
            type: 'text',
            content:
              sex_count && flags.show_exp
                ? chara.id
                  ? [
                      CharaTalk.me.get_colored_name(),
                      '과(와) ',
                      {
                        content: sex_count.toLocaleString(),
                        color: palam_colors.notifications[1],
                      },
                      '번 우마뾰이했다',
                    ].concat(
                      sleep_count
                        ? [
                            '，수면간 ',
                            {
                              content: sleep_count.toLocaleString(),
                              color: palam_colors.notifications[1],
                            },
                            ' 포함',
                          ]
                        : [],
                      prison_count
                        ? [
                            '; ',
                            CharaTalk.me.get_colored_name(),
                            '에게 ',
                            {
                              content: prison_count.toLocaleString(),
                              color: attr_change_colors.down,
                            },
                            ' 회 감금',
                          ]
                        : [],
                    )
                  : [
                      '다른 이와 함께 ',
                      {
                        content: sex_count.toLocaleString(),
                        color: palam_colors.notifications[1],
                      },
                      '번 우마뾰이했다',
                    ].concat(
                      sleep_count
                        ? [
                            '，수면간 ',
                            {
                              content: sleep_count.toLocaleString(),
                              color: palam_colors.notifications[1],
                            },
                            ' 회',
                          ]
                        : [],
                      prison_count
                        ? [
                            '；수감된 횟수 ',
                            {
                              content: prison_count.toLocaleString(),
                              color: attr_change_colors.down,
                            },
                            ' 회',
                          ]
                        : [],
                    )
                : no_info,
          },
        );
      }
      sex_info_list.push({
        config: { content: '성 기술', position: 'left' },
        type: 'divider',
      });
      const skill_list = [
        '달콤한말',
        '키스기술',
        '구강기술',
        '구강내성',
        '구강숙련',
        '유방기술',
        '가슴내성',
        '가슴숙련',
        '수음기술',
        '다리기술',
        '신체기술',
        '신체내성',
        '신체숙련',
      ];
      if (chara.sex_code > 0) {
        skill_list.push('삽입기술', '음경내성');
      }
      skill_list.push('음경숙련');
      if (chara.sex_code !== 1) {
        skill_list.push('성교기술');
      }
      if (chara.sex_code === 0) {
        skill_list.push('클리내성');
      }
      if (chara.sex_code !== 1) {
        skill_list.push('질구내성');
      }
      skill_list.push(
        '클리숙련',
        '질구숙련',
        '항문기술',
        '항문내성',
        '항문숙련',
        '가학기술',
        '피학내성',
        '피학숙련',
      );
      skill_list.forEach((e) => {
        const level = era.get(`abl:${chara.id}:${e}`);
        sex_info_list.push({
          config: { width: 6 },
          content: [
            e,
            '：',
            {
              content: `Lv.${level}`,
              color: get_gradient_color(
                undefined,
                palam_colors.notifications[1],
                level / 5,
              ),
              title: get_abl_title(e, level),
            },
          ],
          type: 'text',
        });
      });

      sex_info_list.push({
        type: 'divider',
        config: { content: '인자', position: 'left' },
      });
      era
        .get('palamnames')
        .slice(0, chara.id ? 15 : 10)
        .forEach((juel, i) => {
          const num = era.get(`juel:${chara.id}:${juel}`),
            got_juel = Math.floor(
              (era.get(`gotjuel:${chara.id}:${juel}`) || 0) / palam2juel,
            );
          const buff = era.get(
            `tcvar:${chara.id}:${juel.substring(0, 2)}인자보정`,
          );
          sex_info_list.push({
            config: { width: 4 + 4 * in_train },
            content: [
              juel.substring(0, 2),
              '：',
              {
                color: num > 0 ? palam_colors.notifications[1] : '',
                ...get_abbr_number(num),
              },
              ...(got_juel
                ? [
                    ' (',
                    {
                      color: palam_colors.notifications[1],
                      content:
                        got_juel > 0
                          ? '+' + got_juel.toLocaleString()
                          : got_juel.toLocaleString(),
                    },
                    ')',
                  ]
                : []),
              ...(buff
                ? [
                    ' (',
                    {
                      color:
                        i >= 10
                          ? buff > 0
                            ? attr_change_colors.down
                            : attr_change_colors.up
                          : buff > 0
                            ? attr_change_colors.up
                            : attr_change_colors.down,
                      content: `${buff > 0 ? '+' : ''}${Math.floor(
                        100 * buff,
                      ).toString()}%`,
                    },
                    ')',
                  ]
                : []),
            ],
            type: 'text',
          });
        });

      const sex_level = era.get(`mark:${chara.id}:음문`);

      if (sex_level > 0 || chara.id > 0) {
        sex_info_list.push({
          type: 'divider',
          config: { content: '각인', position: 'left' },
        });

        if (sex_level > 0) {
          sex_info_list.push(get_mark_info(chara.id, '음문', sex_level));
        } else if (chara.id > 0) {
          sex_info_list.push(get_mark_info(chara.id, '쾌락'));
        }
        if (chara.id > 0) {
          era
            .get('marknames')
            .slice(2)
            .forEach((e) => sex_info_list.push(get_mark_info(chara.id, e)));
        }
      }
    } else {
      sex_info_list.push(
        { type: 'divider', config: { content: page_name, position: 'left' } },
        { content: unknown_info(chara.id), type: 'text' },
      );
    }
    // CSTRNAME:10 = 이미지
    // CSTRNAME:13 = 이미지T
    const img_name = era.get(`cstr:${chara.id}:10`);
    if (
      !era.getCharactersInTrain().includes(chara.id) &&
      check_chara_ero_image(chara.id)
    ) {
      sex_info_list.push({ content: [{ isBr: true }], type: 'text' });
      const img_t = era.get(`cstr:${chara.id}:13`);
      if (img_t) {
        sex_info_list.push({
          accelerator: 100,
          content: `캐릭터 일러스트 변경: (현재 제 ${img_t.substring(img_name.length) || '1'} 이미지）`,
          type: 'button',
        });
      } else {
        sex_info_list.push({ content: '전용 캐릭터 일러스트 사용', type: 'text' });
      }
    }
    return {
      /** @param {number} cmd */
      async handle(cmd) {
        if (cmd === 100) {
          let option = 2;
          const get_name = (i) => `${img_name}${i > 1 ? i : ''}`;
          while (era.checkImage(`${get_name(option + 1)}_头`)) {
            option++;
          }
          era.setHorizontalAlign('space-evenly');
          era.setAlign('center');
          era.printInColRows(
            ...new Array(option).fill(void 0).map((_, i) => {
              const names = sys_get_ero_image(chara.id, get_name(i + 1), false);
              return {
                columns: [
                  {
                    names,
                    type: 'image.whole',
                  },
                  {
                    accelerator: 100 + i,
                    content: `第 ${i + 1} 套`,
                    type: 'button',
                  },
                ],
                config: { width: 4 },
              };
            }),
          );
          era.setAlign('left');
          era.setHorizontalAlign('start');
          const ret = (await era.input()) - 100;
          era.set(
            `cstr:${chara.id}:이미지T`,
            `${img_name}${ret > 0 ? ret + 1 : ''}`,
          );
        }
      },
      print() {
        return sex_info_list;
      },
    };
  },
  name: page_name,
};
