const era = require('#/era-electron');

const update_marks = require('#/system/ero/calc-sex/update-marks');
const { get_mark_price } = require('#/system/ero/sys-get-juel-price');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');
const {
  default_handler,
  get_mark_cols,
  print_footer,
  print_price_and_confirm,
} = require('#/page/juel-shop/snippets');

const { get_custom_ero } = require('#/event/ero/ero-factory');

const get_gradient_color = require('#/utils/gradient-color');

const { attr_change_colors, buff_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const { trainer_salary } = require('#/data/const.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const InmonPlugin = require('#/data/ero/inmon-plugin');
const {
  inmon_limit,
  mark_enum,
  slavery_descriptions,
  slavery_enum,
  slavery_options,
  slavery_titles,
} = require('#/data/ero/mark-const');
const {
  inmon_plugin_dict,
  plugin_enum,
} = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { get_trainer_title } = require('#/data/info-generator');
const LoveLimitStatus = require('#/data/love-limit-status');
const { max_chara_id } = require('#/data/other-const');

/**
 * @param {{a:number,m:number,p:InmonPlugin}} plugin_with_acc
 * @param {CharaInmon} inmon
 * @param {number} money
 * @param {number} size
 * @param {number} limit
 * @param {Record<string,1>} group_dict
 */
function plugin_to_button(
  plugin_with_acc,
  inmon,
  money,
  size,
  limit,
  group_dict,
) {
  return [
    {
      accelerator: plugin_with_acc.a,
      config: {
        color: plugin_with_acc.p.color,
        disabled:
          (!inmon.on(plugin_with_acc.p.id) &&
            (plugin_with_acc.p.size + size > limit ||
              group_dict[plugin_with_acc.p.group] > 0)) ||
          (!inmon.has(plugin_with_acc.p.id) && money < plugin_with_acc.m),
        disableWarning: true,
        title: plugin_with_acc.p.title,
        width: 4,
      },
      content: plugin_with_acc.p.name,
      type: 'button',
    },
    {
      type: 'text',
      content: `Lv. ${plugin_with_acc.p.level}`,
      config: { width: 2 },
    },
    {
      type: 'text',
      content: `${plugin_with_acc.p.size} 슬롯`,
      config: { align: 'right', width: 2 },
    },
    {
      type: 'text',
      ...(inmon.has(plugin_with_acc.p.id)
        ? {
            config: {
              align: 'right',
              color: attr_change_colors.up,
              width: 3,
            },
            content: '해금',
          }
        : {
            config: { align: 'right', color: buff_colors[2], width: 3 },
            content: `${plugin_with_acc.m.toLocaleString()} 순종`,
          }),
    },
  ];
}

/**
 * @param {CharaTalk} chara
 * @param {Record<string,number>} juel_dict
 * @param {Record<string,number>} total_delta
 * @param {{tab:number,flag:boolean,sub:number}} pointer
 */
module.exports = async (chara, juel_dict, total_delta, pointer) => {
  let buffer = [];
  let l_sex =
    era.get(`status:${chara.id}:음문스티커`) > 0
      ? 3
      : era.get(`mark:${chara.id}:음문`);
  const l_pleasure = era.get(`mark:${chara.id}:쾌락`);
  const l_meek = era.get(`mark:${chara.id}:동심`);
  const l_pain = era.get(`mark:${chara.id}:고통`);
  const l_shame = era.get(`mark:${chara.id}:수치`);
  const l_hate = era.get(`mark:${chara.id}:반발`);
  let sex_mark_price = 0;
  const price_dict = [];
  if (chara.id > 0) {
    era.drawLine({
      content: `${chara.get_full_name()}의 각인`,
    });
    if (!l_sex) {
      buffer.push(get_mark_cols(chara.id, '쾌락', l_pleasure));
    }
    buffer.push(get_mark_cols(chara.id, '동심', l_meek));
    buffer.push(get_mark_cols(chara.id, '고통', l_pain));
    buffer.push(get_mark_cols(chara.id, '수치', l_shame));
    buffer.push(get_mark_cols(chara.id, '반발', l_hate));
    buffer.push({ content: [], type: 'text' });
    if (l_hate) {
      price_dict[0] = get_mark_price(chara.id, l_hate, l_meek / 2);
      price_dict[1] = price_dict[2] = get_mark_price(
        chara.id,
        l_hate,
        l_pain + 0.75,
      );
      price_dict[3] = get_mark_price(chara.id, l_hate, l_shame + 0.75);
      buffer.push(
        ...[
          {
            config: {
              disabled: juel_dict['순종'] < price_dict[0] || !l_meek,
            },
            content: '순종 인자를 사용하여 반발각인을 제거',
          },
          {
            config: {
              disabled: juel_dict['고통'] < price_dict[1] || !l_pain,
            },
            content: '고통 인자를 사용하여 반발각인을 제거',
          },
          {
            config: {
              disabled: juel_dict['공포'] < price_dict[2] || !l_pain,
            },
            content: '공포 인자를 사용하여 반발각인을 제거',
          },
          {
            config: {
              disabled: juel_dict['수치'] < price_dict[3] || !l_shame,
            },
            content: '수치 인자를 사용하여 반발각인을 제거',
          },
        ].map((e, i) => {
          e.type = 'button';
          e.config.width = 6;
          e.accelerator = i;
          return e;
        }),
        {
          content:
            '* 각인을 획득한 경우, 해당 인자를 사용하여 반발각인을 제거할 수 있습니다\n** 각인 등급이 동일한 경우, 고통, 공포, 수치 세 가지 인자를 사용하여 반발각인을 제거하는 데 드는 비용은 복종보다 낮지만, 부작용이 발생할 수 있습니다',
          type: 'text',
        },
      );
    }
    if (l_pain) {
      price_dict[4] = get_mark_price(chara.id, l_pain, l_meek);
      buffer.push({
        accelerator: 4,
        config: {
          disabled: juel_dict['순종'] < price_dict[4],
          width: 6,
        },
        content: '순종 인자를 사용하여 고통각인을 제거',
        type: 'button',
      });
    }
    if (l_shame) {
      price_dict[5] = get_mark_price(chara.id, l_shame, l_meek);
      buffer.push({
        accelerator: 5,
        config: {
          disabled: juel_dict['순종'] < price_dict[5],
          width: 6,
        },
        content: '순종 인자를 사용하여 수치각인 제거',
        type: 'button',
      });
    }
    if (l_pain + l_shame) {
      buffer.push({
        content:
          '* 제거할 각인의 레벨이 낮을수록, 동심각인의 레벨이 높을수록, 소모되는 순종 인자는 줄어든다',
        type: 'text',
      });
    }
  }
  era.printMultiColumns(buffer, { horizontalAlign: 'space-between' });

  const inmon = CharaInmon.get(chara.id);
  const p_f_params = {
    chara:
      era.get(`cflag:${chara.id}:종족`) > 0
        ? era.get(`cflag:${chara.id}:성격`)
        : undefined,
    edu:
      era.get(`cflag:${chara.id}:종족`) > 0 &&
      (!chara.id || era.get(`cflag:${chara.id}:육성턴수합산`) < 3 * 48),
    id: chara.id,
    love:
      chara.id > 0
        ? LoveLimitStatus.get(chara.id).is_empty()
          ? era.get(`love:${chara.id}`)
          : 100
        : 0,
    pregnant:
      inmon.slave === slavery_enum.pregnant ||
      era.get(`cflag:${chara.id}:임신단계`) !== 1 << pregnant_stage_enum.no,
    sex: chara.sex_code,
  };
  const plugins = Object.values(inmon_plugin_dict)
    .filter((e) => {
      if ((!l_sex || e.level <= l_sex) && e.condition(p_f_params)) {
        return true;
      }
      if (inmon.on(e.id)) {
        inmon.set(e.id, 0);
      }
      return false;
    })
    .map((e, i) => ({
      a: i + 10,
      m: Math.floor(
        (e.price *
          (100 +
            era.get('flag:보주소모량') +
            era.get(`talent:${chara.id}:성적흥미`) * 10)) /
          100,
      ),
      p: e,
    }));
  const groups = plugins.reduce((p, c) => {
    (p[c.p.group] ||= []).push(c);
    return p;
  }, {});
  const money = juel_dict['순종'];
  const slave = inmon.slave;
  if (l_sex > 0 || (l_pleasure > 0 && l_meek > 0)) {
    era.drawLine({
      content: chara.full_name + '의 음문',
    });
    if (l_sex > 0) {
      const limit = inmon_limit[l_sex];
      const group_dict = {};
      sex_mark_price = get_mark_price(chara.id, l_sex + 1, l_meek);
      const sex_mark_col = get_mark_cols(chara.id, '음문', l_sex);
      delete sex_mark_col.config.width;
      sex_mark_col.content.unshift({ isBr: true });
      const p_buffer = plugins
        .filter((e) => inmon.on(e.p.id))
        .map((e) => {
          group_dict[e.p.group] = 1;
          const name = e.p.colored_name;
          name.content += ` (${e.p.size})`;
          return {
            accelerator: e.a,
            config: {
              align: 'center',
              color: name.color,
              title: name.title,
            },
            content: name.content,
            type: 'button',
          };
        });
      const size = inmon.size;
      const buffer = [];
      const keys = Object.keys(groups).slice(pointer.sub, pointer.sub + 2);
      buffer.push({
        config: {
          content: InmonPlugin.group_names[keys[0]],
          position: 'left',
          width: 11,
        },
        type: 'divider',
      });
      if (keys[1] !== undefined) {
        buffer.push({
          config: {
            content: InmonPlugin.group_names[keys[1]],
            offset: 1,
            position: 'left',
            width: 11,
          },
          type: 'divider',
        });
      } else {
        buffer.push({ content: [], type: 'text' });
      }
      const p_buttons = keys.map((e) => groups[e]);
      if (p_buttons.length < 2) {
        p_buttons.push([]);
      }
      for (let i = 0; i < Math.max(...p_buttons.map((e) => e.length)); ++i) {
        const left = p_buttons[0][i];
        const right = p_buttons[1][i];
        if (left === undefined) {
          const temp = plugin_to_button(
            right,
            inmon,
            money,
            size,
            limit,
            group_dict,
          );
          temp[0].config.offset = 12;
          buffer.push(...temp);
        } else if (right === undefined) {
          buffer.push(
            ...plugin_to_button(left, inmon, money, size, limit, group_dict),
            { content: [], type: 'text' },
          );
        } else {
          buffer.push(
            ...plugin_to_button(left, inmon, money, size, limit, group_dict),
          );
          const temp = plugin_to_button(
            right,
            inmon,
            money,
            size,
            limit,
            group_dict,
          );
          temp[0].config.offset = 1;
          buffer.push(...temp);
        }
      }
      era.printInColRows(
        {
          columns: [
            ...p_buffer,
            { content: size > 0 ? [{ isBr: true }] : [], type: 'text' },
            {
              config: {
                align: 'center',
                color: mark_colors['음문'],
              },
              content: [
                ...new Array(size)
                  .fill('[·]')
                  .map((e) => ({ content: e, display: 'inline-block' })),
                ...new Array(Math.max(limit - size, 0))
                  .fill('[ ]')
                  .map((e) => ({ content: e, display: 'inline-block' })),
              ].reduce((p, c, i) => {
                p.push(c);
                if (i % 6 === 5) {
                  p.push({ isBr: true });
                }
                return p;
              }, []),
              type: 'text',
            },
            sex_mark_col,
            {
              config: {
                align: 'center',
                color: mark_colors['음문'],
              },
              content: `슬롯：${size}/${limit}`,
              type: 'text',
            },
          ],
          config: { width: 5 },
        },
        {
          columns: [
            ...(l_sex < 3
              ? [
                  {
                    accelerator: 7,
                    config: {
                      disabled: !l_meek || juel_dict['순종'] < sex_mark_price,
                      width: 6,
                    },
                    content: '음문 등급 올리기',
                    type: 'button',
                  },
                  {
                    config: { width: 18 },
                    content:
                      '* 일심동체의 정도(동심각인의 등급)가 높을수록, 음문의 업그레이드 비용이 낮아집니다',
                    type: 'text',
                  },
                ]
              : [
                  {
                    config: {
                      width: 6,
                      ...(era.get(`status:${chara.id}:음문스티커`) > 0
                        ? { disabled: true, title: '음문 스티커는 조작할 수 없습니다' }
                        : {}),
                    },
                    content: `현재 타입: ${slavery_options[slave]}`,
                    ...(chara.id > 0
                      ? { accelerator: 9, type: 'button' }
                      : { type: 'content' }),
                  },
                  {
                    config: { width: 18 },
                    content: `효과: ${slavery_descriptions[slave]}`,
                    type: 'text',
                  },
                ]),
            { config: { content: '사용 가능한 플러그인', width: 15 }, type: 'divider' },
            {
              accelerator: 200,
              config: {
                align: 'right',
                width: 4,
                disabled: pointer.sub === 0,
              },
              content: '이전 장',
              type: 'button',
            },
            {
              accelerator: 201,
              config: {
                align: 'right',
                width: 4,
                disabled: pointer.sub + 2 >= Object.keys(groups).length,
              },
              content: '다음 장',
              type: 'button',
            },
            ...buffer,
            { content: '\n* 플러그인을 구매하여 잠금을 해제하면 더 이상 순종 인자를 소모하지 않습니다', type: 'text' },
            { content: '** 동일한 효과를 가진 플러그인은 한 번에 하나만 장착할 수 있습니다', type: 'text' },
          ],
          config: { verticalAlign: 'middle', width: 19 },
        },
      );
    } else {
      sex_mark_price = get_mark_price(chara.id, l_pleasure, l_meek);
      era.printButton('쾌락각인을 음문으로 바꾼다', 6, {
        disabled: juel_dict['순종'] < sex_mark_price,
      });
      era.print('* 일심동체의 정도(동심각인의 등급)가 높을수록, 음문의 업그레이드 비용이 낮아집니다');
    }
  }

  print_footer(chara.id, pointer.tab);
  const ret = await era.input();
  if (ret < 4) {
    const palam_name = era.get(`palamname:${ret + 10}`);
    era.print([
      chara.get_colored_name(),
      `의 ${palam_name} 인자를 사용하여`,
      {
        content: ' 반발각인 ',
        color: mark_colors['반발'],
      },
      '을 1레벨 낮추시겠습니까?',
    ]);
    const is_confirmed = await print_price_and_confirm(
      chara.id,
      JSON.parse(`{"${palam_name}":${price_dict[ret]}}`),
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.hate_clear = (total_delta.hate_clear || 0) + 1;
      era.add(`mark:${chara.id}:반발`, -1);
      era.add(`juel:${chara.id}:${palam_name}`, -price_dict[ret]);
      begin_and_init_ero(chara.id);
      if (
        (ret === 1 || ret === 2) &&
        l_pain < 3 &&
        Math.random() < 1 - 0.15 * (3 - l_hate) - 0.2 * (l_pain - 1)
      ) {
        era.set(`nowex:${chara.id}:고통획득`, 1);
      } else if (
        ret === 3 &&
        l_shame < 3 &&
        Math.random() < 1 - 0.15 * (3 - l_hate) - 0.2 * (l_shame - 1)
      ) {
        era.set(`nowex:${chara.id}:수치획득`, 1);
      }
      (await update_marks(true, chara.id)) && (await era.waitAnyKey());
      end_ero_and_train();
    }
  } else if (ret <= 5) {
    const mark_name = era.get(`markname:${ret - 1}`);
    era.print([
      chara.get_colored_name(),
      `의 순종 인자를 사용하여 `,
      {
        content: ` ${mark_name}각인 `,
        color: mark_colors[mark_name],
      },
      '을 제거합니까? 소모:',
    ]);
    const is_confirmed = await print_price_and_confirm(
      chara.id,
      JSON.parse(`{"순종":${price_dict[ret]}}`),
      juel_dict,
    );
    if (is_confirmed) {
      total_delta.mark_clear = (total_delta.mark_clear || 0) + 1;
      era.add(`mark:${chara.id}:${mark_name}`, -1);
      era.add(`juel:${chara.id}:순종`, -price_dict[ret]);
    }
  } else if (ret <= 7) {
    if (ret === 6) {
      era.print([
        chara.get_colored_name(),
        '의 ',
        {
          content: `쾌락각인 Lv.${l_pleasure}`,
          color: get_gradient_color(
            undefined,
            mark_colors['쾌락'],
            l_pleasure / 3,
          ),
        },
        ` 을 `,
        {
          content: `음문 Lv.${l_pleasure}`,
          color: get_gradient_color(
            undefined,
            mark_colors['음문'],
            l_pleasure / 3,
          ),
        },
        `으로 변환할까요? 비용: `,
      ]);
    } else {
      era.print([
        chara.get_colored_name(),
        '의 ',
        {
          content: `음문 Lv.${l_sex}`,
          color: get_gradient_color(undefined, mark_colors['음문'], l_sex / 3),
        },
        ` 을 `,
        {
          content: `Lv.${l_sex + 1}`,
          color: get_gradient_color(
            undefined,
            mark_colors['음문'],
            (l_sex + 1) / 3,
          ),
        },
        `으로 합니까? 비용: `,
      ]);
    }
    const is_confirmed = await print_price_and_confirm(
      chara.id,
      JSON.parse(`{"순종":${sex_mark_price}}`),
      juel_dict,
    );
    if (is_confirmed) {
      if (
        await select_yes_or_no(
          '상대방에게 음문을 새겨 노예로 삼는 것은 극히 비도덕적인 행위이며, 사회적 평판에 매우 해롭습니다! 계속하시겠습니까?',
          '한다',
          '그만둔다',
        )
      ) {
        if (ret === 6) {
          era.set(`mark:${chara.id}:쾌락`, 0);
          l_sex = era.set(`mark:${chara.id}:음문`, l_pleasure);
          total_delta.pleasure_delta = l_pleasure;
          total_delta.sex_delta = l_pleasure;
          sys_change_fame(-50 * [1, 3, 6][l_sex - 1]);
        } else {
          l_sex = era.add(`mark:${chara.id}:음문`, 1);
          total_delta.sex_delta = (total_delta.sex_delta || 0) + 1;
          sys_change_fame(-50 * l_sex);
        }
        await get_custom_ero(chara.id).get_mark(
          l_sex,
          mark_enum.ero,
          ret === 6,
        );
        era.add(`juel:${chara.id}:순종`, -sex_mark_price);
        const inmon_count = sys_filter_chara('mark', mark_enum.ero, 3).filter(
          (cid) => cid > 0 && cid < max_chara_id,
        ).length;
        if (inmon_count >= 1) {
          global_achievement.inmn_one = 1;
        }
        if (inmon_count >= 3) {
          global_achievement.inmn_thr = 1;
        }
        if (inmon_count >= 6) {
          global_achievement.inmn_six = 1;
        }
      }
    }
  } else if (ret === 9) {
    era.drawLine({ content: '새로운 음문 타입 선택' });
    era.printMultiColumns([
      { config: { width: 3 }, content: '타입', type: 'text' },
      { config: { width: 3 }, content: '별칭', type: 'text' },
      { config: { width: 18 }, content: '효과', type: 'text' },
    ]);
    const disabled = juel_dict['순종'] < 1000;
    const columns = slavery_options.map((e, i) => [
      {
        accelerator: i,
        config: { disabled: slave === i || (i > 0 && disabled), width: 3 },
        content: slavery_options[i],
        type: 'button',
      },
      {
        config: { width: 3 },
        content: slavery_titles[i],
        type: 'text',
      },
      {
        config: { width: 18 },
        content: slavery_descriptions[i],
        type: 'text',
      },
    ]);
    if (chara.sex_code === 1) {
      columns[slavery_enum.milk][0].config.disabled = true;
      columns[slavery_enum.milk][0].config.title = '남성은 모유를 바칠 수 없습니다……';
      columns[slavery_enum.pregnant][0].config.disabled = true;
      columns[slavery_enum.pregnant][0].config.title = '남성은 임신할 수 없습니다……';
    } else if (era.get(`talent:${chara.id}:모유분비`) !== 3) {
      columns[slavery_enum.milk][0].config.disabled = true;
      columns[slavery_enum.milk][0].config.title =
        '[모유체질] 만 모유를 바칠 수 있습니다……';
    }
    if (inmon.on(plugin_enum.no_preg)) {
      columns[slavery_enum.pregnant][0].config.disabled = true;
      columns[slavery_enum.pregnant][0].config.title = '불임의 가호를 받았습니다……';
    }
    if (era.get(`cflag:${chara.id}:종족`) === 0) {
      columns[slavery_enum.inherit][0].config.disabled = true;
      columns[slavery_enum.inherit][0].config.title =
        '오직' + chara.get_uma_sex_title() + '만이 인자를 바칠 수 있습니다……';
    }
    if (era.get('flag:조수') > 0) {
      columns[slavery_enum.assistant][0].config.disabled = true;
      columns[slavery_enum.assistant][0].config.title =
        '이미 한 명의' + slavery_options[slavery_enum.assistant] + '이(가) 있습니다...';
    }
    columns.forEach((e) => era.printMultiColumns(e));
    era.printButton('전환 취소', 99);
    era.print([
      '*  타입 전환에는 순종 인자 1,000이 필요합니다',
      { isBr: true },
      '** 타입 취소에는 비용이 들지 않습니다',
    ]);
    let ret = await era.input();
    if (ret < 99) {
      if (ret === 0) {
        if (!(await select_yes_or_no('타입을 정말로 취소하시겠습니까?'))) {
          ret = -1;
        }
      } else {
        era.print([
          chara.get_colored_name(),
          '의 음문 타입을 ',
          {
            color: buff_colors[2],
            content: slavery_options[ret],
          },
          ' 로 변경하시겠습니까? 비용:',
        ]);
        if (
          await print_price_and_confirm(
            chara.id,
            JSON.parse('{"순종":1000}'),
            juel_dict,
          )
        ) {
          era.add(`juel:${chara.id}:순종`, -1000);
        } else {
          ret = -1;
        }
      }
      if (ret >= 0) {
        switch (slave) {
          case slavery_enum.worker:
            era.set(
              'flag:청구서',
              sys_get_billings().filter(
                (e) => !(e.creditor === chara.id && e.timer === -1),
              ),
            );
            break;
          case slavery_enum.assistant:
            era.set('flag:조수', 0);
        }
        switch (ret) {
          case slavery_enum.worker:
            sys_get_billings().push({
              creditor: chara.id,
              repay: trainer_salary[get_trainer_title().substring(0, 2)] / 4,
              timer: -1,
            });
            break;
          case slavery_enum.assistant:
            era.set('flag:조수', chara.id);
        }
        inmon.slave = ret;
      }
    }
  } else if (ret < 200) {
    const { p, m: cost } = plugins[ret - 10];
    if (!inmon.has(p.id)) {
      era.print([
        chara.get_colored_name(),
        '에게 플러그인의 잠금을 해제하고 ',
        p.colored_name,
        '을 장착하시겠습니까? 비용: ',
      ]);
      if (
        await print_price_and_confirm(
          chara.id,
          JSON.parse(`{"순종":${cost}}`),
          juel_dict,
        )
      ) {
        era.add(`juel:${chara.id}:순종`, -cost);
        inmon.set(p.id, 1 - inmon.on(p.id));
      }
    } else {
      inmon.set(p.id, 1 - inmon.on(p.id));
      if (p.id === plugin_enum.sex_2) {
        era.set(`cflag:${chara.id}:자율훈련`, 0);
      }
    }
  } else if (ret === 200) {
    pointer.sub -= 2;
  } else if (ret === 201) {
    pointer.sub += 2;
  } else {
    default_handler(ret, pointer);
  }
};
