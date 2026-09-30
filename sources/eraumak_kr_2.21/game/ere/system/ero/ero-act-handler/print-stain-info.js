const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const { poll_stain } = require('#/system/ero/sys-calc-stain');

const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { part_abbr } = require('#/data/ero/ero-alias.json');

function print_stain_info(cid) {
  const chara = get_chara_talk(cid);
  const temp = [
    {
      columns: [
        {
          config: {
            content: `${CharaTalk.me.name}의 불결`,
            position: 'left',
            width: 23,
          },
          type: 'divider',
        },
      ],
      config: { width: 8 },
    },
    {
      columns: [
        {
          config: {
            content: `${chara.name}의 불결`,
            offset: 1,
            position: 'right',
            width: 23,
          },
          type: 'divider',
        },
      ],
      config: { width: 8 },
    },
  ];

  [0, cid].forEach((c_id) => {
    const penis_size = get_penis_size(c_id),
      virgin_size = era.get(`cflag:${c_id}:질크기`);
    ['구강', '가슴', '손부', '신체', '발부', '음경', '클리', '질구', '항문']
      .filter(
        (_, i) =>
          i <= 4 ||
          i === 8 ||
          (i === 5 && penis_size) ||
          (i === 6 && virgin_size && !penis_size) ||
          (i === 7 && virgin_size),
      )
      .forEach((part) => {
        const abbr = {
          config: { width: 2 },
          content: part_abbr[part],
          type: 'text',
        };
        const column_index = c_id ? 1 : 0;
        const columns = temp[column_index].columns;
        if (!c_id) {
          columns.push(abbr);
        }
        columns.push({
          config: {
            align: c_id ? 'right' : 'left',
            offset: column_index,
            width: 21,
          },
          content: poll_stain(c_id, part),
          type: 'text',
        });
        if (c_id) {
          abbr.config.align = 'right';
          columns.push(abbr);
        }
      });
  });
  era.printInColRows(...temp);
}

module.exports = print_stain_info;
