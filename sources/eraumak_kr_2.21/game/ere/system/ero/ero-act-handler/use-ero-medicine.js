const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CharaTalk = require('#/utils/chara-talk');

const { buff_colors } = require('#/data/color-const');
const { medicine_enum, medicine_names } = require('#/data/ero/item-const');
const { lust_border } = require('#/data/ero/orgasm-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

/**
 * @param {CharaTalk} chara
 * @returns {Promise<{user:number,item:number}>}
 */
async function use_ero_medicine(chara) {
  const uma_z = era.get(`item:${medicine_names[medicine_enum.uma_z]}`),
    uma_s = era.get(`item:${medicine_names[medicine_enum.uma_s]}`),
    super_z = era.get(`item:${medicine_names[medicine_enum.super_z]}`),
    anti_p_s = era.get(`item:${medicine_names[medicine_enum.anti_p_s]}`),
    anti_p_l = era.get(`item:${medicine_names[medicine_enum.anti_p_l]}`),
    drug_p = era.get(`item:${medicine_names[medicine_enum.drug_p]}`),
    drug_m = era.get(`item:${medicine_names[medicine_enum.drug_m]}`),
    fron_k = era.get(`item:${medicine_names[medicine_enum.fron_k]}`),
    fron_p = era.get(`item:${medicine_names[medicine_enum.fron_p]}`),
    milk_h = era.get(`item:${medicine_names[medicine_enum.milk_h]}`),
    milk_u = era.get(`item:${medicine_names[medicine_enum.milk_u]}`),
    stop_o = era.get(`item:${medicine_names[medicine_enum.stop_o]}`);
  if (
    !uma_z &&
    !uma_s &&
    !super_z &&
    !anti_p_s &&
    !anti_p_l &&
    !drug_p &&
    !drug_m &&
    !fron_k &&
    !fron_p &&
    !milk_h &&
    !milk_u &&
    !stop_o
  ) {
    era.print('사용 가능한 약이 없다……');
    return undefined;
  }
  era.printMultiColumns([
    { content: '누구에게 약을 먹일까?', type: 'text' },
    {
      accelerator: 0,
      config: { align: 'center', width: 8 },
      content: CharaTalk.me.name,
      type: 'button',
    },
    {
      accelerator: chara.id,
      config: { align: 'center', width: 8 },
      content: chara.name,
      type: 'button',
    },
    {
      accelerator: 999,
      config: { align: 'center', width: 8 },
      content: '容我想想',
      type: 'button',
    },
  ]);
  const aim_id = await era.input();
  if (aim_id === 999) {
    era.print([CharaTalk.me.get_colored_name(), ' 放弃了使用药物……']);
    return undefined;
  }
  const aim_chara = aim_id ? chara : CharaTalk.me,
    fron_status =
      era.get(`status:${aim_id}:펄롱K`) ||
      era.get(`status:${aim_id}:펄롱P`) ||
      era.get(`tequip:${aim_id}:클리`) !== -1,
    p_status =
      era.get(`cflag:${aim_id}:임신단계`) !== 1 << pregnant_stage_enum.no ||
      era.get(`status:${aim_id}:경구피임약`) ||
      era.get(`status:${aim_id}:사후피임약`) ||
      era.get(`status:${aim_id}:배란유도제`) ||
      era.get(`status:${aim_id}:생리`),
    sex_check = aim_chara.sex_code !== 1,
    item_list = [
      { a: medicine_enum.milk_h, n: milk_h },
      { a: medicine_enum.milk_u, n: milk_u },
      {
        a: medicine_enum.uma_z,
        n: uma_z,
      },
      {
        a: medicine_enum.uma_s,
        n: uma_s,
        e: aim_id && sys_check_awake(aim_id),
      },
      {
        a: medicine_enum.super_z,
        n: super_z,
        e:
          aim_id &&
          !era.get(`status:${aim_id}:슈퍼우마뾰이Z`) &&
          era.get(`base:${aim_id}:성욕`) < lust_border.absent_mind,
      },
      {
        a: medicine_enum.fron_k,
        e: !fron_status,
        n: fron_k,
      },
      {
        a: medicine_enum.fron_p,
        e: !fron_status,
        n: fron_p,
      },
      {
        a: medicine_enum.drug_m,
        e: sex_check && !era.get(`talent:${aim_id}:모유분비`),
        n: drug_m,
      },
      {
        a: medicine_enum.drug_p,
        e: sex_check && !p_status && !era.get(`status:${aim_id}:배란기`),
        n: drug_p,
      },
      {
        a: medicine_enum.anti_p_s,
        e: sex_check && !p_status,
        n: anti_p_s,
      },
      {
        a: medicine_enum.anti_p_l,
        e: sex_check && !p_status,
        n: anti_p_l,
      },
      {
        a: medicine_enum.stop_o,
        n: stop_o,
      },
    ]
      .filter((e) => e.n > 0)
      .map((e) => {
        e.e ||= e.e === undefined;
        return e;
      });
  if (item_list.findIndex((e) => e.e) === -1) {
    await era.printAndWait(
      aim_id
        ? ['没有可以喂给 ', aim_chara.get_colored_name(), ' 的药物……']
        : '没有可以服用的药物……',
    );
    return undefined;
  }
  era.printMultiColumns(
    [
      {
        content: aim_id
          ? [aim_chara.get_colored_name(), '에게 어떤 약을 먹일까?']
          : '어떤 약을 사용할까?',
        type: 'text',
      },
      ...item_list.map((e) => {
        return {
          accelerator: e.a,
          config: { align: 'center', disabled: !e.e, width: 4 },
          content: `${medicine_names[e.a]} (${e.n})`,
          type: 'button',
        };
      }),
    ],
    { horizontalAlign: 'space-evenly' },
  );
  const item_id = await era.input();
  if (
    !(await select_yes_or_no(
      aim_id
        ? [
            aim_chara.get_colored_name(),
            '에게 ',
            {
              color: buff_colors[2],
              content: medicine_names[item_id],
            },
            '을(를) 사용할까?',
          ]
        : [
            {
              color: buff_colors[2],
              content: medicine_names[item_id],
            },
            '을(를) 사용할까?',
          ],
      '확인',
      '다시 생각한다',
    ))
  ) {
    era.print([
      CharaTalk.me.get_colored_name(),
      ' 放弃了',
      aim_id ? '喂食' : '饮用',
      ' ',
      { color: buff_colors[2], content: medicine_names[item_id] },
      '……',
    ]);
    return undefined;
  }
  return { item: item_id, user: aim_id };
}

module.exports = use_ero_medicine;
