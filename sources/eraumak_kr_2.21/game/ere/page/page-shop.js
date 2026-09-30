const era = require('#/era-electron');

const { sys_change_money } = require('#/system/sys-calc-flag');

const { attr_change_colors, money_color } = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const shop_desc = require('#/data/desc/items.json');
const { location_name } = require('#/data/locations');

/** @param {({id:number,[limit]:boolean}|number)[]} item_list */
async function print_shop_page(item_list) {
  const item_keys = era.get('itemkeys');
  const off_index = era.get('flag:랜덤시드');
  const off = item_keys[off_index % item_keys.length];
  const price_cache = era.get(`itemprice:${off}`);
  era.set(
    `itemprice:${off}`,
    Math.max(Math.ceil(price_cache * (off_index >> 7 > 0 ? 0.5 : 0.7)), 1),
  );
  const to_buy = {};
  const price = {};
  const limit = {};
  const cur_loc = era.get('flag:현재위치');
  const price_ratio =
    (100 + era.get('flag:아이템가격') + (era.get('flag:현재연도') - 2000) * 4) /
    100;
  let flag_shop = true;
  let bought = 0;
  item_list.forEach((e) => {
    let id = e;
    if (typeof e !== 'number') {
      id = e.id;
      limit[id] = e.limit;
    }
    to_buy[id] = 1;
    if (id !== 84 && id !== 85) {
      price[id] = Math.ceil(era.get(`itemprice:${id}`) * price_ratio);
    } else {
      price[id] = era.get(`itemprice:${id}`);
    }
  });
  let on_sell_list;
  let cur_coin;
  let cur_page = 1;
  let max_page;
  let flag_hide_acc = era.get('flag:단축키숨기기');
  while (flag_shop) {
    cur_coin = era.get('flag:현재코인');
    on_sell_list = item_list
      .map((e) => e.id || e)
      .filter((e) => !limit[e] || !era.get(`item:${e}`));
    max_page = Math.ceil(on_sell_list.length / 10);
    if (cur_page > max_page) {
      cur_page = max_page;
    }
    const cur_list = on_sell_list.slice(cur_page * 10 - 10, cur_page * 10);
    /** @type {*[]} */
    const buffer = [{ type: 'divider' }];
    cur_list.forEach((id) => {
      const name = era.get(`itemname:${id}`).toUpperCase();
      const max_count = Math.floor(cur_coin / price[id]);
      buffer.push(
        {
          accelerator: id,
          config: {
            buttonType: id === off ? 'danger' : 'warning',
            width: 4,
          },
          content: `${name}${limit[id] ? '(한정)' : ''}`,
          type: 'button',
        },
        {
          type: 'text',
          config: {
            align: 'center',
            width: 1,
          },
          content: '보유',
        },
        {
          type: 'text',
          config: { width: 1 },
          content:
            name === '콘돔（5개입）'
              ? era.get('item:콘돔')
              : era.get(`item:${id}`),
        },
        {
          accelerator: id + 1000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 1 || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '-10',
          type: 'button',
        },
        {
          accelerator: id + 2000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 1 || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '-1',
          type: 'button',
        },
        {
          type: 'text',
          config: { align: 'center', width: 2 },
          content: `× ${to_buy[id]}`,
        },
        {
          accelerator: id + 3000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 99 || to_buy[id] >= max_count || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '+1',
          type: 'button',
        },
        {
          accelerator: id + 4000,
          config: {
            align: 'center',
            disabled: to_buy[id] === 99 || to_buy[id] >= max_count || limit[id],
            showAcc: !flag_hide_acc,
            width: 2,
          },
          content: '+10',
          type: 'button',
        },
        {
          accelerator: id + 5000,
          config: {
            align: 'center',
            disabled:
              to_buy[id] === 99 ||
              max_count === 0 ||
              to_buy[id] === max_count ||
              limit[id],
            showAcc: !flag_hide_acc,
            width: 3,
          },
          content: '최대',
          type: 'button',
        },
        {
          accelerator: id + 6000,
          config: {
            align: 'right',
            disabled: price[id] * to_buy[id] > cur_coin,
            showAcc: !flag_hide_acc,
            width: 5,
          },
          content: `구매 (${price[id] * to_buy[id]} 우마코인)`,
          type: 'button',
        },
      );
    });
    buffer.push({
      type: 'text',
      content: '\n* 아이템을 클릭하면 설명을 볼 수 있습니다.\n** 「한정」이 표시된 물품은 한 개만 소지할 수 있습니다.',
    });
    if (on_sell_list.findIndex((e) => e === off) !== -1) {
      buffer.push({
        type: 'text',
        content: [
          '*** 이번 주 한정 세일! ',
          {
            content: era.get(`itemname:${off}`).toUpperCase(),
            color: money_color,
            fontWeight: 'bold',
          },
          ' ',
          {
            content: off_index >> 7 > 0 ? '50%off' : '30%off',
            color: attr_change_colors.up,
          },
          '!',
        ],
      });
    }
    buffer.push({ type: 'divider' });
    const buffer_2 = [];
    if (max_page > 1) {
      buffer_2.push(
        {
          accelerator: 996,
          config: { align: 'center', disabled: cur_page === 1, width: 3 },
          content: '이전 페이지',
          type: 'button',
        },
        {
          config: { align: 'center', width: 6 },
          content: `제 ${cur_page} 장 / 총 ${max_page} 장`,
          type: 'text',
        },
        {
          accelerator: 997,
          config: {
            align: 'center',
            disabled: cur_page === max_page,
            width: 3,
          },
          content: '다음 페이지',
          type: 'button',
        },
      );
    }
    buffer_2.push(
      {
        accelerator: 998,
        config: {
          align: 'right',
          buttonType: flag_hide_acc ? 'warning' : 'info',
          width: 6,
        },
        content: `단축키숨기기 [${flag_hide_acc ? 'ON' : 'OFF'}]`,
        type: 'button',
      },
      {
        accelerator: 999,
        config: { align: 'right', width: 6 },
        content: `${location_name[cur_loc]}에서 나가기`,
        type: 'button',
      },
    );
    await era.clear();
    era.printInColRows(
      [{ type: 'divider' }],
      {
        columns: [
          {
            config: { width: 9 },
            content: date_indicator(),
            type: 'text',
          },
          {
            config: {
              width: 5,
            },
            content: [
              {
                color: money_color,
                content: cur_coin.toLocaleString(),
                fontWeight: 'bold',
              },
              ' 우마코인',
            ],
            type: 'text',
          },
          {
            config: { width: 10 },
            content: `현재위치 ${location_name[cur_loc]}`,
            type: 'text',
          },
        ],
        config: { width: 16 },
      },
      buffer,
      {
        columns: buffer_2,
        config: { horizontalAlign: 'end' },
      },
    );
    const ret = await era.input();
    era.drawLine();
    if (ret === 996) {
      cur_page--;
    } else if (ret === 997) {
      cur_page++;
    } else if (ret === 998) {
      flag_hide_acc = era.set('flag:단축키숨기기', !flag_hide_acc);
    } else if (ret === 999) {
      flag_shop = false;
    } else {
      const selected_item = ret % 1000;
      const sub_code = (ret - selected_item) / 1000;
      let name;
      switch (sub_code) {
        case 0:
          name = era.get(`itemname:${selected_item}`).toUpperCase();
          era.print(name);
          name = shop_desc[shop_desc[name]] || shop_desc[name];
          if (name) {
            await era.printAndWait(`\n${name}`);
          } else {
            await era.waitAnyKey();
          }
          break;
        case 1:
          to_buy[selected_item] = Math.max(to_buy[selected_item] - 10, 1);
          break;
        case 2:
          to_buy[selected_item]--;
          break;
        case 3:
          to_buy[selected_item]++;
          break;
        case 4:
          to_buy[selected_item] = Math.min(to_buy[selected_item] + 10, 99);
          break;
        case 5:
          to_buy[selected_item] = Math.max(
            Math.min(Math.floor(cur_coin / price[selected_item]), 99),
            1,
          );
          break;
        case 6:
          sys_change_money(-price[selected_item] * to_buy[selected_item]);
          era.add(`item:${selected_item}`, to_buy[selected_item]);
          await era.printAndWait(
            `${to_buy[selected_item]} 구매 완료 ${era
              .get(`itemname:${selected_item}`)
              .toUpperCase()} `,
          );
          bought += to_buy[selected_item];
          to_buy[selected_item] = Math.max(
            Math.min(
              Math.floor(cur_coin / price[selected_item]),
              to_buy[selected_item],
            ),
            1,
          );
          era.add('item:콘돔', 5 * era.get('item:콘돔（5개입）'));
          era.set('item:콘돔（5개입）', 0);
      }
    }
  }
  era.set(`itemprice:${off}`, price_cache);
  return bought;
}

module.exports = print_shop_page;
