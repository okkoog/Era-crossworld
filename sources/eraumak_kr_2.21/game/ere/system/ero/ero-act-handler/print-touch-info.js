const era = require('#/era-electron');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const { part_abbr, part_alias } = require('#/data/ero/ero-alias.json');
const {
  get_item_action,
  item_enum,
  item_names,
} = require('#/data/ero/item-const');
const { part_enum, part_touch, touch_list } = require('#/data/ero/part-const');

const motion_info = [
  ['침대맡을 향해 누움', '침대맡을 향해 엎드림'],
  ['침대끝을 향해 앉음', '침대맡을 향해 앉음'],
  ['침대끝을 향해 서있음', '침대맡을 향해 서있음'],
  ['침대끝을 향해 엎드림', '침대끝을 향해 누움'],
];

/**
 * @param {number} cid
 * @param {number} cpart
 * @returns {*[]}
 */
function get_part_touch(cid, cpart) {
  const touched_part = era.get(`tcvar:${cid}:${part_touch[cpart]}접촉부위`);
  if (touched_part === -1) {
    return undefined;
  }
  const touched_chara = get_chara_talk(touched_part.owner);
  if (cpart === part_enum.sadism) {
    return ['이전에 학대한 곳 ', touched_chara.get_colored_name()];
  } else if (cpart === part_enum.masochism) {
    return ['이전에 ', touched_chara.get_colored_name(), ' 학대당함'];
  } else {
    const body_part = era.get(`tcvar:${cid}:${part_touch[cpart]}접촉부위`);
    if (body_part.part === part_enum.item) {
      let item_name = '';
      if (body_part.item === item_enum.clamps) {
        item_name = cpart === part_enum.breast ? '乳头夹' : '阴蒂夹';
      }
      item_name ||= item_names[body_part.item];
      return [
        { color: buff_colors[2], content: item_name },
        ' (由 ',
        touched_chara.get_colored_name(),
        ' ',
        {
          color: buff_colors[2],
          content: get_item_action(body_part.item, cpart),
        },
        ')',
      ];
    } else {
      return [
        touched_chara.get_colored_name(),
        '의 ',
        {
          color: buff_colors[2],
          content: part_alias[part_touch[body_part.part]],
        },
      ];
    }
  }
}

function print_touch_info(cid) {
  const chara = get_chara_talk(cid);
  const temp = [
    [
      {
        columns: [
          {
            config: {
              content: `${CharaTalk.me.name}의 신체접촉`,
              position: 'left',
              width: 23,
            },
            type: 'divider',
          },
          {
            config: { align: 'center', width: 23 },
            content:
              motion_info[era.get('tcvar:0:체위')][era.get('tcvar:0:방향')],
            type: 'text',
          },
        ],
        config: { width: 6 },
      },
      {
        columns: [
          {
            config: {
              content: `${chara.name}의 신체접촉`,
              offset: 1,
              position: 'right',
              width: 23,
            },
            type: 'divider',
          },
          {
            config: { align: 'center', offset: 1, width: 23 },
            content:
              motion_info[era.get(`tcvar:${cid}:체위`)][
                era.get(`tcvar:${cid}:방향`)
              ],
            type: 'text',
          },
        ],
        config: { width: 6 },
      },
    ],
    [
      {
        columns: [
          {
            config: {
              content: `${CharaTalk.me.name}의 성고문접촉`,
              position: 'left',
              width: 23,
            },
            type: 'divider',
          },
        ],
        config: { width: 6 },
      },
      {
        columns: [
          {
            config: {
              content: `${chara.name}의 성고문접촉`,
              offset: 1,
              position: 'right',
              width: 23,
            },
            type: 'divider',
          },
        ],
        config: { width: 6 },
      },
    ],
  ];
  touch_list.forEach((part, part_index) => {
    const part_name = part_touch[part];
    const my_touch = get_part_touch(0, part);
    if (my_touch) {
      if (part_index < touch_list.length - 2) {
        temp[0][0].columns.push(
          {
            config: { width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
          {
            config: { width: 20 },
            content: my_touch,
            type: 'text',
          },
        );
      } else {
        temp[1][0].columns.push(
          {
            config: { width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
          {
            config: { width: 20 },
            content: my_touch,
            type: 'text',
          },
        );
      }
    }
    const other_touch = get_part_touch(cid, part);
    if (other_touch) {
      if (part_index < touch_list.length - 2) {
        temp[0][1].columns.push(
          {
            config: { align: 'right', offset: 1, width: 20 },
            content: other_touch,
            type: 'text',
          },
          {
            config: { align: 'right', width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
        );
      } else {
        temp[1][1].columns.push(
          {
            config: { align: 'right', offset: 1, width: 20 },
            content: other_touch,
            type: 'text',
          },
          {
            config: { align: 'right', width: 3 },
            content: part_abbr[part_name],
            type: 'text',
          },
        );
      }
    }
  });
  era.printInColRows(...temp[0]);
  era.printInColRows(...temp[1]);
}

module.exports = print_touch_info;
