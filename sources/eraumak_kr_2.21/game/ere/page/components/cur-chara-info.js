const era = require('#/era-electron');

const {
  sys_get_full_chara,
} = require('#/system/chara/sys-calc-characteristic');
const get_status = require('#/system/chara/sys-get-status');
const { get_image } = require('#/system/sys-calc-image');

const race_indicator = require('#/page/components/race-indicator');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const { motivation_colors } = require('#/data/color-const');
const {
  attr_background_colors,
  love_colors,
  relation_colors,
} = require('#/data/const.json');
const { growth_stage } = require('#/data/ero/status-const');
const {
  get_love_info,
  get_relation_info,
  get_train_time,
} = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { motivation_names, out_of_train_type } = require('#/data/train-const');

/**
 * @param {number} chara_id
 * @param {number} [type]
 * @param {number} [location_npc]
 */
function cur_chara_component(chara_id, type, location_npc) {
  let temp;
  if (chara_id === 0) {
    if (location_npc) {
      const relation = get_relation_info(location_npc),
        love = get_love_info(location_npc),
        title = CharaTitles.get(location_npc).get_colored_curr_title();
      era.printInColRows(
        [{ type: 'divider' }],
        {
          columns: [
            {
              config: { width: 23 },
              names: get_image(location_npc)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
          ],
          config: { width: 4 },
        },
        {
          columns: [
            {
              content: [
                title ? [title, ' '] : [],
                get_chara_talk(location_npc).get_colored_name(),
              ],
              type: 'text',
            },
            {
              config: { width: 2 },
              content: '호감',
              type: 'text',
            },
            {
              config: { color: relation_colors[relation[0]], width: 22 },
              content: relation.join(' '),
              type: 'text',
            },
            { config: { width: 2 }, content: '애정', type: 'text' },
            {
              config: {
                color: love_colors[love[0]],
                width: 22,
              },
              content: love.join(' '),
              type: 'text',
            },
          ],
          config: { width: 16 },
        },
      );
    } else if (
      type !== chara_info_type.out &&
      type !== chara_info_type.school
    ) {
      era.printMultiColumns([
        { type: 'divider' },
        {
          content: '상호작용할 캐릭터가 선택되지 않았습니다',
          type: 'text',
          config: { align: 'center' },
        },
      ]);
    }
  } else {
    era.drawLine();
    const relation = get_relation_info(chara_id);
    const love = get_love_info(chara_id);
    const growth = era.get(`cflag:${chara_id}:성장단계`);
    const title = CharaTitles.get(chara_id).get_colored_curr_title(true);
    const in_train =
      growth >= 2 && era.get(`cflag:${chara_id}:육성턴수합산`) < 3 * 48;
    const motivation = era.get(`cflag:${chara_id}:컨디션`);
    const out_of_train = era.get(`cflag:${chara_id}:명예의전당`);
    const race = era.get(`cflag:${chara_id}:종족`);
    /** @type {*[]} */
    const name_columns = ['현재 캐릭터：'];
    if (title) {
      name_columns.push(title, ' ');
    }
    name_columns.push(get_chara_talk(chara_id).get_colored_name());
    if (out_of_train) {
      name_columns.push(` [${out_of_train_type[out_of_train - 1]}]`);
    }
    name_columns.push(` (${growth_stage[Math.min(growth, 2)]})`);
    if (era.get('flag:현재위치') !== location_enum.basement) {
      if (in_train) {
        name_columns.push(
          ' 컨디션 ',
          {
            color: motivation_colors[motivation + 2],
            content: motivation_names[motivation + 2],
          },
          ' ',
          get_train_time(chara_id).substring(0, 3),
        );
      } else if (race > 0 && !out_of_train && (growth === 2 || growth === 3)) {
        name_columns.push(' 입학 예정');
      }
      name_columns.push(...race_indicator(chara_id));
    }
    location_npc &&
      (temp = CharaTitles.get(location_npc).get_colored_curr_title());
    era.setVerticalAlign('middle');
    const image_switch = era.get('flag:스탠딩일러스트타입'),
      status_list = get_status(chara_id);
    era.printInColRows(
      {
        columns: [{ content: name_columns, type: 'text' }],
        config: { width: 18 },
      },
      {
        columns: location_npc
          ? [
              {
                config: { align: 'center' },
                content: [
                  ...(temp ? [temp, ' '] : []),
                  get_chara_talk(location_npc).get_colored_name(),
                ],
                type: 'text',
              },
            ]
          : [],
        config: { width: 5 },
      },
      [],
      {
        columns: [
          {
            config: { width: 21 },
            names: get_image(chara_id)
              .map((e) => {
                switch (image_switch) {
                  case 0:
                    return e;
                  case 1:
                    return `${e}_半身`;
                  case 2:
                    return `${e}_gif\t${e}_半身`;
                }
              })
              .join('\t'),
            type: 'image.whole',
          },
        ],
        config: {
          width: 3,
        },
      },
      {
        columns: [
          type !== chara_info_type.out && type !== chara_info_type.school
            ? {
                accelerator: 990,
                config: { showAcc: false },
                content: '그림 변경',
                type: 'button',
              }
            : { content: '\n', type: 'text' },
          {
            config: { width: 2 },
            content: '체력',
            type: 'text',
          },
          {
            config: {
              color: attr_background_colors['체력'],
              height: 22,
              width: 12,
            },
            inContent: `${Math.floor(era.get(`base:${chara_id}:체력`))}/${era.get(
              `maxbase:${chara_id}:체력`,
            )}`,
            percentage:
              (era.get(`base:${chara_id}:체력`) * 100) /
              era.get(`maxbase:${chara_id}:체력`),
            type: 'progress',
          },
          { content: '', type: 'text' },
          {
            config: { width: 2 },
            content: '기력',
            type: 'text',
          },
          {
            config: {
              color: attr_background_colors['기력'],
              height: 22,
              width: 12,
            },
            inContent: `${Math.floor(era.get(`base:${chara_id}:기력`))}/${era.get(
              `maxbase:${chara_id}:기력`,
            )}`,
            percentage:
              (era.get(`base:${chara_id}:기력`) * 100) /
              era.get(`maxbase:${chara_id}:기력`),
            type: 'progress',
          },
          { content: '', type: 'text' },
          ...(race && growth >= 1
            ? [
                {
                  config: { width: 2 },
                  content: '성격',
                  type: 'text',
                },
                {
                  config: { width: 4 },
                  content: [sys_get_full_chara(chara_id)],
                  type: 'text',
                },
              ]
            : []),
          {
            config: { width: 2 },
            content: '상태',
            type: 'text',
          },
          {
            config: { width: 16 + !(race && growth >= 1) * 6 },
            content: status_list.length > 0 ? status_list : '정상',
            type: 'text',
          },
          {
            config: { width: 2 },
            content: '호감',
            type: 'text',
          },
          {
            config: { color: relation_colors[relation[0]], width: 4 },
            content: relation.join(' '),
            type: 'text',
          },
          { config: { width: 2 }, content: '애정', type: 'text' },
          {
            config: {
              color: love_colors[love[0]],
              width: 4,
            },
            content: love.join(' '),
            type: 'text',
          },
        ],
        config: {
          width: 15,
        },
      },
      {
        columns: location_npc
          ? [
              {
                config: { width: 23 },
                names: get_image(location_npc)
                  .map((e) => `${e}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
            ]
          : [],
        config: { offset: 1, width: 3 },
      },
      {
        columns: location_npc
          ? [
              {
                content: [
                  '🤝',
                  {
                    color:
                      relation_colors[
                        (temp = get_relation_info(location_npc))[0]
                      ],
                    content: temp[0],
                    title: `호감：${temp.join(' ')}`,
                  },
                ],
                type: 'text',
              },
              {
                content: [
                  ' ❤️',
                  {
                    color: love_colors[(temp = get_love_info(location_npc))[0]],
                    content: temp[0],
                    title: `애정：${temp.join(' ')}`,
                  },
                ],
                type: 'text',
              },
            ]
          : [],
        config: { width: 2 },
      },
    );
    era.setVerticalAlign('top');
  }
}

module.exports = cur_chara_component;
