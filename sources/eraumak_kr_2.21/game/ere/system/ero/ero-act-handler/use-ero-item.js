const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const CharaTalk = require('#/utils/chara-talk');

const { buff_colors } = require('#/data/color-const');
const { item_enum, item_names } = require('#/data/ero/item-const');
const {
  part_enum,
  part_names,
  part_names4item,
} = require('#/data/ero/part-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { location_enum } = require('#/data/locations');

/**
 * @param {CharaTalk} chara
 * @returns {Promise<{item: number, part: number}>}
 */
async function use_ero_item(chara) {
  const cur_location = era.get('flag:현재위치'),
    cur_lover = chara.id,
    penis_size = get_penis_size(cur_lover),
    virgin_size = era.get(`cflag:${cur_lover}:질크기`);
  const item_list = [
    {
      a: item_enum.gag,
      e: () => era.get(`tequip:${cur_lover}:구강`) === -1,
    },
    { a: item_enum.clamps },
    {
      a: item_enum.electric_stunner,
      e: () => era.get('item:전기충격기'),
    },
    {
      a: item_enum.milk_pump,
      e: () =>
        era.get(`tequip:${cur_lover}:가슴`) === -1 &&
        (era.get(`talent:${cur_lover}:유두타입`) !== 2 ||
          era.get(`tcvar:${cur_lover}:유두돌출`)),
    },
    { a: item_enum.love_eggs },
    { a: item_enum.dildo },
    {
      a: item_enum.artificial_virgin,
      e: () => penis_size && era.get(`tequip:${cur_lover}:음경`) === -1,
    },
    {
      a: item_enum.butt_plug,
      e: () => era.get(`tequip:${cur_lover}:항문`) === -1,
    },
    {
      a: item_enum.anal_beads,
      e: () => era.get(`tequip:${cur_lover}:항문`) === -1,
    },
    {
      a: item_enum.blindfold,
      e: () => era.get(`tequip:${cur_lover}:안대`) === -1,
    },
    {
      a: item_enum.collar,
      e: () => era.get(`tequip:${cur_lover}:목줄`) === -1,
    },
    {
      a: item_enum.mirror,
      e: () =>
        !era.get('tflag:전신거울') &&
        (cur_location === location_enum.restroom ||
          cur_location === location_enum.basement ||
          cur_location === location_enum.home ||
          cur_location === location_enum.hotel ||
          cur_location === location_enum.love_hotel ||
          cur_location === location_enum.summer_home),
    },
  ]
    .map((e) => {
      e.n = item_names[e.a];
      e.c = era.get(`item:${e.n}`);
      return e;
    })
    .filter((e) => e.c > 0)
    .map((e) => {
      e.e = e.e ? e.e() : true;
      return e;
    });
  if (item_list.findIndex((e) => e.e) === -1) {
    await era.printAndWait('사용할 장난감이 없다……');
    return undefined;
  }
  era.printInColRows(
    { columns: [{ content: '어떤 장난감을 착용시킬까?', type: 'text' }] },
    {
      columns: item_list.map((e, i) => {
        return {
          accelerator: i,
          config: { align: 'center', disabled: !e.e, width: 4 },
          content: `${item_names[e.a]} (${e.c})`,
          type: 'button',
        };
      }),
      config: { horizontalAlign: 'space-evenly' },
    },
  );
  const item = item_list[await era.input()].a;
  let part = 100,
    part_list = undefined;
  switch (item) {
    case item_enum.gag:
      part = part_enum.mouth;
      break;
    case item_enum.clamps:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get('item:클립') < 2 ||
            era.get(`tequip:${cur_lover}:가슴`) !== -1 ||
            (era.get(`talent:${cur_lover}:유두타입`) === 2 &&
              !era.get(`tcvar:${cur_lover}:유두돌출`)),
          n: '유두',
        },
        {
          a: part_enum.clitoris,
          d:
            !virgin_size ||
            penis_size ||
            era.get(`tequip:${cur_lover}:클리`) !== -1,
          n: '음핵',
        },
      ];
      break;
    case item_enum.electric_stunner:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get(`talent:${cur_lover}:유두타입`) === 2 &&
            !era.get(`tcvar:${cur_lover}:유두돌출`),
          n: '유두',
        },
        {
          a: part_enum.penis,
          d: !penis_size || era.get(`tequip:${cur_lover}:음경`) !== -1,
          n: '육봉',
        },
        {
          a: part_enum.clitoris,
          d: !virgin_size || penis_size,
          n: '음핵',
        },
      ];
      break;
    case item_enum.milk_pump:
      part = part_enum.breast;
      break;
    case item_enum.love_eggs:
      part_list = [
        {
          a: part_enum.breast,
          d:
            era.get('item:바이브레이터') < 2 ||
            era.get(`tequip:${cur_lover}:가슴`) !== -1 ||
            (era.get(`talent:${cur_lover}:유두타입`) === 2 &&
              !era.get(`tcvar:${cur_lover}:유두돌출`)),
          n: '유두',
        },
        {
          a: part_enum.clitoris,
          d:
            !virgin_size ||
            penis_size ||
            era.get(`tequip:${cur_lover}:클리`) !== -1,
          n: '음핵',
        },
        {
          a: part_enum.virgin,
          d: !virgin_size || era.get(`tequip:${cur_lover}:질구`) !== -1,
          n: '질구',
        },
        {
          a: part_enum.anal,
          d: era.get(`tequip:${cur_lover}:항문`) !== -1,
          n: '국화',
        },
      ];
      break;
    case item_enum.dildo:
      part_list = [
        {
          a: part_enum.virgin,
          d:
            !virgin_size ||
            era.get(`tequip:${cur_lover}:질구`) !== -1 ||
            era.get(`talent:${cur_lover}:처녀`) > vp_status_enum.no ||
            era.get(`talent:${cur_lover}:처녀`) === vp_status_enum.i_think,
          n: '질구',
        },
        {
          a: part_enum.anal,
          d: era.get(`tequip:${cur_lover}:항문`) !== -1,
          n: '국화',
        },
      ];
      break;
    case item_enum.butt_plug:
    case item_enum.anal_beads:
      part = part_enum.anal;
      break;
    case item_enum.blindfold:
    case item_enum.collar:
    case item_enum.mirror:
      part = 99;
      break;
    case item_enum.artificial_virgin:
      part = part_enum.penis;
  }
  if (part_list) {
    part_list = part_list.filter((e) => !e.d);
    if (part_list.length) {
      era.printInColRows(
        {
          columns: [
            {
              content: [
                '要对 ',
                chara.get_colored_name(),
                ' 的什么部位使用 ',
                { color: buff_colors[2], content: item_names[item] },
                '?',
              ],
              type: 'text',
            },
          ],
        },
        {
          columns: part_list.map((e, i, l) => {
            return {
              accelerator: i,
              config: { align: 'center', width: 24 / l.length },
              content: e.n,
              type: 'button',
            };
          }),
        },
      );
      part = await era.input();
      part = part_list[part].a;
    } else {
      await era.printAndWait('没有可以使用该性玩具的部位……');
    }
  }
  if (part !== 100) {
    era.printInColRows(
      {
        columns: [
          {
            content: [
              chara.get_colored_name(),
              ...(part !== 99
                ? [
                    '의 ',
                    {
                      color: buff_colors[2],
                      content: part_names4item[part] || part_names[part],
                    },
                  ]
                : []),
              '에게 ',
              { color: buff_colors[2], content: item_names[item] },
              ' 착용시키겠습니까?',
            ],
            type: 'text',
          },
        ],
      },
      {
        columns: [
          {
            accelerator: 0,
            config: { align: 'center', width: 12 },
            content: '확인',
            type: 'button',
          },
          {
            accelerator: 100,
            config: {
              align: 'center',
              width: 12,
            },
            content: '그만둔다',
            type: 'button',
          },
        ],
      },
    );
    part = (await era.input()) || part;
  }
  if (part === 100) {
    await era.printAndWait([
      CharaTalk.me.get_colored_name(),
      ' 放弃了使用 ',
      { color: buff_colors[2], content: item_names[item] },
      '……',
    ]);
    return undefined;
  }
  return { item, part };
}

module.exports = use_ero_item;
