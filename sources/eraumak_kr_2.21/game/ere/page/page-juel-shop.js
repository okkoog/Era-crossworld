const era = require('#/era-electron');

const {
  get_skill_price,
  get_talent_price,
} = require('#/system/ero/sys-get-juel-price');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const print_mark_tab = require('#/page/juel-shop/mark-tab');
const {
  default_handler,
  get_skill_buttons,
  get_talent_buttons,
  pay_juels,
  print_footer,
  print_price_and_confirm,
} = require('#/page/juel-shop/snippets');

const { get_custom_ero } = require('#/event/ero/ero-factory');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const {
  attr_change_colors,
  buff_colors,
  palam_colors,
} = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const CharaInmon = require('#/data/ero/chara-inmon');
const { part_abbr } = require('#/data/ero/ero-alias.json');
const {
  shop_result_type_enum,
  talent_button_names_and_check_dict,
} = require('#/data/ero/juel-const');
const { slavery_enum } = require('#/data/ero/mark-const');
const { part_names, pleasure_list } = require('#/data/ero/part-const');
const { skill_desc, talent_desc } = require('#/data/ero/shop-desc.json');
const { trained_talent_names } = require('#/data/ero/status-const');

async function shop_result(cid, change, result_type) {
  switch (result_type) {
    case shop_result_type_enum.hate:
      sys_like_chara(cid, 0, -10 * change * (1 + era.get(`mark:${cid}:반발`)));
      add_jewel_reward(cid, '반감', 100 * change);
      break;
    case shop_result_type_enum.pleasure:
      sys_like_chara(
        cid,
        0,
        10 *
          change *
          (1 + era.get(`mark:${cid}:음문`) + era.get(`mark:${cid}:쾌락`)),
      );
      add_jewel_reward(cid, '순종', 100 * change);
      sys_change_lust(cid, 100);
      break;
    case shop_result_type_enum.slave:
      sys_like_chara(
        cid,
        0,
        (-10 * change) / (era.get(`mark:${cid}:동심`) - 1),
      );
      add_jewel_reward(cid, '수치', 100 * change);
      sys_change_lust(cid, 50);
      sys_like_chara(cid, 0, -50);
      break;
    case shop_result_type_enum.lover:
      sys_like_chara(cid, 0, -50);
      add_jewel_reward(cid, ['수치', '반감'], new Array(2).fill(100 * change));
  }
  result_type > 0 && (await era.waitAnyKey());
}

module.exports = async (cid = era.get('flag:현재상호작용캐릭터')) => {
  const total_delta = {};
  await get_custom_ero(cid).shop_start();
  const chara_sex = era.get(`cflag:${cid}:성별`);
  const chara = get_chara_talk(cid);
  const me = get_chara_talk(0);
  const page_pointer = {
    flag: true,
    sub: 0,
    tab: 0,
  };
  while (page_pointer.flag) {
    await era.clear();
    era.drawLine();
    era.print(date_indicator());
    era.drawLine({
      content: `${chara.get_full_name()}의 인자`,
    });
    let buffer = [];
    const j_dict = {},
      origin_dict = {};
    pleasure_list.forEach((part) => {
      const j_name = part_names[part];
      const key = `${j_name}쾌감`;
      const j_count =
        (j_dict[key] =
        origin_dict[key] =
          era.get(`jewel:${cid}:${key}`));
      if (cid) {
        j_dict[key] += Math.floor(era.get(`jewel:0:${key}`) / 2);
      }
      buffer.push({
        config: { align: 'left', width: 3 },
        content: [
          part_abbr[j_name],
          '：',
          {
            color: j_count > 0 ? palam_colors.notifications[1] : undefined,
            content:
              j_count >= 10000
                ? `${Math.floor(j_count / 1000).toLocaleString()}K`
                : j_count.toLocaleString(),
            title: j_count >= 10000 ? j_count.toLocaleString() : undefined,
          },
        ],
        type: 'text',
      });
    });
    if (cid > 0) {
      new Array(4).fill(0).forEach((_, i) => {
        const j_name = era.get(`palamname:${i + 10}`);
        const j_count =
          (j_dict[j_name] =
          origin_dict[j_name] =
            era.get(`jewel:${cid}:${i + 10}`));
        buffer.push({
          config: { align: 'left', width: 3 },
          content: [
            j_name.substring(0, 1),
            '：',
            {
              color: j_count > 0 ? palam_colors.notifications[1] : undefined,
              ...get_abbr_number(j_count),
            },
          ],
          type: 'text',
        });
      });
    } else {
      const key = '순종';
      const j_count =
        (j_dict[key] =
        origin_dict[key] =
          era.get(`jewel:${cid}:${key}`));
      buffer.push({
        config: { align: 'left', width: 3 },
        content: [
          '순',
          '：',
          {
            color: j_count > 0 ? palam_colors.notifications[1] : undefined,
            content:
              j_count >= 10000
                ? `${Math.floor(j_count / 1000).toLocaleString()}K`
                : j_count.toLocaleString(),
            title: j_count >= 10000 ? j_count.toLocaleString() : undefined,
          },
        ],
        type: 'text',
      });
    }
    era.printMultiColumns(buffer);
    if (page_pointer.tab === 0) {
      era.drawLine({
        content: `${chara.get_full_name()}의 능력`,
      });
      buffer = [];
      const skill_dict = {};
      ['달콤한말', '키스기술', '구강기술', '구강내성', '구강숙련'].forEach(
        (e, i) =>
          buffer.push(...get_skill_buttons(cid, i, e, skill_dict, j_dict)),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(cid, 5, '유방기술', skill_dict, j_dict),
        );
      }
      ['가슴내성', '가슴숙련'].forEach((e, i) =>
        buffer.push(...get_skill_buttons(cid, i + 6, e, skill_dict, j_dict)),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['수음기술', '다리기술', '신체기술', '신체내성', '신체숙련'].forEach(
        (e, i) =>
          buffer.push(...get_skill_buttons(cid, i + 8, e, skill_dict, j_dict)),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex) {
        buffer.push(
          ...get_skill_buttons(cid, 13, '삽입기술', skill_dict, j_dict),
        );
        buffer.push(
          ...get_skill_buttons(cid, 14, '음경내성', skill_dict, j_dict),
        );
      }
      buffer.push(
        ...get_skill_buttons(cid, 15, '음경숙련', skill_dict, j_dict),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(cid, 16, '성교기술', skill_dict, j_dict),
        );
      }
      if (!chara_sex) {
        buffer.push(
          ...get_skill_buttons(cid, 17, '클리내성', skill_dict, j_dict),
        );
      }
      if (chara_sex - 1) {
        buffer.push(
          ...get_skill_buttons(cid, 18, '질구내성', skill_dict, j_dict),
        );
      }
      ['클리숙련', '질구숙련'].forEach((e, i) =>
        buffer.push(...get_skill_buttons(cid, i + 19, e, skill_dict, j_dict)),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['항문기술', '항문내성', '항문숙련'].forEach((e, i) =>
        buffer.push(...get_skill_buttons(cid, i + 21, e, skill_dict, j_dict)),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['가학기술', '피학내성', '피학숙련'].forEach((e, i) =>
        buffer.push(...get_skill_buttons(cid, i + 24, e, skill_dict, j_dict)),
      );
      era.printMultiColumns(buffer);

      era.print(
        '\n* 능력 이름을 클릭하면 설명을 볼 수 있으며, ↑/↓를 클릭하면 능력을 업그레이드하거나 다운그레이드할 수 있습니다.\n' +
          `** 캐릭터 신체 부위의 인자가 부족할 경우, ${me.name}은(는) 두 배의 인자로 부족분을 보충할 수 있습니다.`,
      );
      print_footer(cid, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const skill_index = ret % 100;
        const action = ret - skill_index;
        const skill_name = skill_desc[skill_index].substring(0, 4);
        if (action === 0) {
          await era.printAndWait(skill_desc[skill_index]);
        } else {
          era.print([
            chara.get_colored_name(),
            '의 ',
            {
              content: ` ${skill_name} Lv.${skill_dict[skill_name]}`,
              color: buff_colors[2],
            },
            '을 ',
            action === 100
              ? { content: ' 강화 ', color: attr_change_colors.up }
              : { content: ' 약화 ', color: attr_change_colors.down },
            '하여',
            {
              content: ` Lv.${
                skill_dict[skill_name] + (action === 100 ? 1 : -1)
              } `,
              color: buff_colors[2],
            },
            '로 하겠습니까? 소모:',
          ]);
          const price_dict = get_skill_price(
            cid,
            skill_name,
            skill_dict[skill_name] + (action === 100 ? 1 : 0),
          );
          const is_confirmed = await print_price_and_confirm(
            cid,
            price_dict,
            origin_dict,
          );
          if (is_confirmed) {
            era.add(`abl:${cid}:${skill_name}`, action === 100 ? 1 : -1);
            pay_juels(cid, price_dict, origin_dict);
            total_delta.skill =
              (total_delta.skill || 0) + (action === 100) * 2 - 1;
          }
        }
      } else {
        default_handler(ret, page_pointer);
      }
    } else if (page_pointer.tab === 1) {
      era.drawLine({
        content: `${chara.get_full_name()}의 특성`,
      });
      const talent_dict = { slave_run: 0 };
      new Array(7).fill(0).forEach((_, i) => {
        talent_dict.slave_run +=
          (talent_dict[era.get(`talentname:${i + 60}`)] = era.get(
            `talent:${cid}:${i + 60}`,
          )) === 2;
      });

      buffer = [];
      buffer.push(
        ...get_talent_buttons(
          cid,
          0,
          '음란한입',
          era.get(`exp:${cid}:구강절정횟수`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          cid,
          1,
          '음란한가슴',
          era.get(`exp:${cid}:가슴절정횟수`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          cid,
          2,
          '음란한몸',
          era.get(`exp:${cid}:신체절정횟수`),
          talent_dict,
          j_dict,
        ),
      );
      if (chara_sex) {
        buffer.push(
          ...get_talent_buttons(
            cid,
            3,
            '조루',
            era.get(`exp:${cid}:음경절정횟수`),
            talent_dict,
            j_dict,
          ),
        );
      }
      if (chara_sex === 0) {
        buffer.push(
          ...get_talent_buttons(
            cid,
            4,
            '음란한클리토리스',
            era.get(`exp:${cid}:클리절정횟수`),
            talent_dict,
            j_dict,
          ),
        );
      }
      if (chara_sex - 1) {
        buffer.push(
          ...get_talent_buttons(
            cid,
            5,
            '음란한자궁',
            era.get(`exp:${cid}:질구절정횟수`),
            talent_dict,
            j_dict,
          ),
        );
      }
      buffer.push(
        ...get_talent_buttons(
          cid,
          6,
          '음란한엉덩이',
          era.get(`exp:${cid}:애널절정횟수`),
          talent_dict,
          j_dict,
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      buffer.push(
        ...get_talent_buttons(
          cid,
          7,
          '도S',
          era.get(`exp:${cid}:가학절정횟수`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          cid,
          8,
          '매도좋아함',
          era.get(`exp:${cid}:피학절정횟수`),
          talent_dict,
          j_dict,
        ),
      );
      buffer.push(
        ...get_talent_buttons(
          cid,
          9,
          '고통좋아함',
          era.get(`exp:${cid}:피학절정횟수`),
          talent_dict,
          j_dict,
        ),
      );
      era.printMultiColumns(buffer);

      buffer = [];
      ['목구멍민감', '정액음용중독'].forEach((e, i) =>
        buffer.push(
          ...get_talent_buttons(
            cid,
            i + 10,
            e,
            era.get(`exp:${cid}:정액음용량`),
            talent_dict,
            j_dict,
          ),
        ),
      );
      if (chara_sex - 1) {
        ['자궁민감', '정액착취중독'].forEach((e, i) =>
          buffer.push(
            ...get_talent_buttons(
              cid,
              i + 12,
              e,
              era.get(`exp:${cid}:질내정액량`),
              talent_dict,
              j_dict,
            ),
          ),
        );
      }
      ['창자민감', '정액관장'].forEach((e, i) =>
        buffer.push(
          ...get_talent_buttons(
            cid,
            i + 14,
            e,
            era.get(`exp:${cid}:장내정액량`),
            talent_dict,
            j_dict,
          ),
        ),
      );
      const metric =
        era.get(`exp:${cid}:안면사정정액량`) +
        era.get(`exp:${cid}:가슴부착정액량`) +
        era.get(`exp:${cid}:신체부착정액량`);
      ['냄새민감', '정액욕중독'].forEach((e, i) =>
        buffer.push(
          ...get_talent_buttons(cid, i + 16, e, metric, talent_dict, j_dict),
        ),
      );
      if (chara_sex - 1) {
        const milk_talent = era.get(`talent:${cid}:모유분비`);
        buffer.push(
          ...[
            {
              accelerator: 18,
              config: {},
              content: `모유체질 [${milk_talent === 3 ? 'YES' : 'NO'}]`,
              type: 'button',
            },
            {
              accelerator: 118,
              config: {
                disabled:
                  milk_talent !== 2 ||
                  Object.entries(
                    get_talent_price(cid, '모유체질', 2),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '특성 획득',
              type: 'button',
            },
            {
              accelerator: 218,
              config: {
                disabled:
                  milk_talent !== 3 ||
                  Object.entries(
                    get_talent_price(cid, '모유체질', 1),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '특성 제거',
              type: 'button',
            },
          ].map((e) => {
            e.config.width = 4;
            return e;
          }),
        );
        const nipple_size = era.get(`talent:${cid}:유두타입`);
        buffer.push(
          ...[
            {
              accelerator: 19,
              config: {},
              content: `함몰유두 [${nipple_size === 2 ? 'YES' : 'NO'}]`,
              type: 'button',
            },
            {
              accelerator: 119,
              config: {
                disabled:
                  nipple_size === 2 ||
                  Object.entries(
                    get_talent_price(cid, '함몰유두', 2),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '특성 획득',
              type: 'button',
            },
            {
              accelerator: 219,
              config: {
                disabled:
                  nipple_size !== 2 ||
                  Object.entries(
                    get_talent_price(cid, '함몰유두', 1),
                  ).findIndex((e) => e[1] > j_dict[e[0]]) !== -1,
              },
              content: '특성 제거',
              type: 'button',
            },
          ].map((e) => {
            e.config.width = 4;
            return e;
          }),
        );
      }
      era.printMultiColumns(buffer);

      era.println();
      era.print([
        '* 특성 이름을 클릭하면 설명을 볼 수 있으며, 그 뒤의 버튼을 클릭하면 민감도를 높이거나 낮추거나, 특성을 획득하거나 제거할 수 있습니다.',
        { isBr: true },
        `** 캐릭터 신체 부위의 훈련 인자가 부족할 경우, ${me.name}은 두 배의 인자로 부족분을 보충할 수 있습니다.`,
        { isBr: true },
        `*** 최고 등급의 민감도를 획득할 수 있는 부위 수: ${era.get(`talent:${cid}:조교도`)}`,
      ]);
      print_footer(cid, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const talent_index = ret % 100;
        const action = ret - talent_index;
        const talent_name = talent_desc[talent_index].replace(
          /[/\n](.|\n)*$/,
          '',
        );
        if (action === 0) {
          await era.printAndWait(talent_desc[talent_index]);
        } else {
          if (talent_index >= 18) {
            const inmon = CharaInmon.get(cid);
            era.print([
              chara.get_colored_name(),
              '의 ',
              {
                content: ` [${talent_name}] `,
                color: buff_colors[2],
              },
              '을(를) ',
              action === 100
                ? { content: ' 획득 ', color: attr_change_colors.up }
                : { content: ' 제거 ', color: attr_change_colors.down },
              {
                content: ` [${talent_name}] `,
                color: buff_colors[2],
              },
              '할까?',
              action === 200 &&
              talent_index === 18 &&
              inmon.slave === slavery_enum.milk
                ? '음문 카테고리 [모유노예]가 삭제됨!'
                : '',
              '비용：',
            ]);
            const price_dict = get_talent_price(
              cid,
              talent_name,
              action === 100 ? 2 : 1,
            );
            const is_confirmed = await print_price_and_confirm(
              cid,
              price_dict,
              origin_dict,
            );
            if (is_confirmed) {
              if (talent_index === 18) {
                era.set(`talent:${cid}:모유분비`, action === 100 ? 3 : 0);
                if (
                  action === 200 &&
                  talent_index === 18 &&
                  inmon.slave === slavery_enum.milk
                ) {
                  inmon.slave = 0;
                }
              } else {
                era.set(`talent:${cid}:유두타입`, action === 100 ? 2 : 0);
              }
              pay_juels(cid, price_dict, origin_dict);
              total_delta.talent =
                (total_delta.talent || 0) + (action === 100 ? 1 : -1);
            }
          } else {
            if (talent_index < 7) {
              era.print([
                chara.get_colored_name(),
                '의 ',
                {
                  content: ` ${trained_talent_names[talent_name][0].substring(
                    0,
                    2,
                  )} 민감도를 `,
                  color: buff_colors[2],
                },
                action === 100
                  ? { content: ' 증가 ', color: attr_change_colors.up }
                  : { content: ' 감소 ', color: attr_change_colors.down },
                '시킵니까? 소모：',
              ]);
            } else if (talent_index < 18) {
              era.print([
                chara.get_colored_name(),
                '에게 ',
                {
                  content: ` [${talent_name}] `,
                  color: buff_colors[2],
                },  
                '을(를) ',              
                action === 100
                  ? { content: ' 획득 ', color: attr_change_colors.up }
                  : { content: ' 消除 ', color: attr_change_colors.down },
                '시킵니까? 소모：',
              ]);
            }
            const delta =
              talent_button_names_and_check_dict[
                talent_index < 7 ? 'trained' : 'poisoned'
              ][action === 100 ? 'up_delta' : 'down_delta'][
                talent_dict[talent_name]
              ];
            const price_dict = get_talent_price(cid, talent_name, delta);
            const is_confirmed = await print_price_and_confirm(
              cid,
              price_dict,
              origin_dict,
            );
            if (is_confirmed) {
              era.add(`talent:${cid}:${talent_name}`, delta);
              pay_juels(cid, price_dict, origin_dict);
              total_delta.talent = (total_delta.talent || 0) + delta;
            }
          }
        }
      } else {
        default_handler(ret, page_pointer);
      }
    } else if (page_pointer.tab === 2) {
      await print_mark_tab(chara, j_dict, total_delta, page_pointer);
    } else {
      era.drawLine({ content: '채음보양' });
      era.printMultiColumns(
        Object.keys(j_dict).map((e, i) => {
          return {
            accelerator: i,
            config: { width: 12, disabled: origin_dict[e] < 10000 },
            content: `${chara.name}의 ${e.substring(
              0,
              2,
            )}인자를 ${me.name}의 인자로 변경`,
            type: 'button',
          };
        }),
      );
      era.print([
        { isBr: true },
        '* ',
        chara.get_colored_name(),
        '의 신체, 순종 인자 ',
        { content: ' 10,000 ', color: buff_colors[2] },
        '은 ',
        me.get_colored_name(),
        '의 신체, 순종 인자',
        { content: ' 10 ', color: buff_colors[2] },
        '으로 전환 가능합니다.',
        { isBr: true },
        '* ',
        chara.get_colored_name(),
        '의 고통, 공포, 수치 인자 ',
        { content: ' 10,000 ', color: buff_colors[2] },
        '은 ',
        me.get_colored_name(),
        '의 고통, 공포, 수치 인자 ',
        { content: ' 1 ', color: buff_colors[2] },
        '으로 전환 가능합니다.',
      ]);
      print_footer(cid, page_pointer.tab);
      const ret = await era.input();
      if (ret < 990) {
        const src_j_name = Object.keys(j_dict)[ret],
          dst_j_name = ret < 10 ? src_j_name : '순종',
          dst_j_count = ret < 10 ? 10 : 1;
        if (
          await select_yes_or_no(
            [
              chara.get_colored_name(),
              '의 ',
              {
                content: ` ${src_j_name.substring(0, 2)}인자 × 10,000`,
                color: buff_colors[2],
              },
              '（총 ',
              {
                content: origin_dict[src_j_name].toLocaleString(),
                color: buff_colors[2],
              },
              `）-> ${me.name}의 `,
              {
                content: ` ${dst_j_name.substring(0, 2)}인자 × ${dst_j_count} `,
                color: buff_colors[2],
              },
              ' 으로 변환하겠습니까?',
            ],
            '확인',
            '그만둔다',
          )
        ) {
          era.add(`jewel:${cid}:${src_j_name}`, -10000);
          era.add(`jewel:0:${dst_j_name}`, dst_j_count);
        }
      } else {
        default_handler(ret, page_pointer);
      }
    }
  }
  if (cid > 0) {
    await shop_result(
      cid,
      (total_delta.skill || 0) + (total_delta.talent || 0),
      await get_custom_ero(cid).shop_end(total_delta),
    );
  }
};
