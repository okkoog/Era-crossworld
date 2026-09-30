const {
  add,
  clear,
  drawLine,
  get,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  printMultiColumns,
  println,
  replaceInColRows,
  set,
  setHorizontalAlign,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaGenes = require('#/data/chara-genes');
const CharaSkills = require('#/data/chara-skills');
const { adaptability_colors } = require('#/data/color-const');
const { attr_colors } = require('#/data/const.json');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_adaptability_rank } = require('#/data/info-generator');
const { gene_juel_names } = require('#/data/other-const');
const { gene_dict } = require('#/data/race/gene/gene-const');
const {
  gene_type_colors,
  gene_type_enum,
} = require('#/data/race/model/uma-gene');
const { adaptability_names } = require('#/data/train-const');

const gene_limit = 27;

/**
 * @param {CharaGenes} genes
 * @param {CharaAvailableGenes} available_genes
 * @param {number} discount
 * @param {number[]} juels
 * @param {number} all_juels
 * @param {number} chara_id
 */
function generate_gene_buttons(
  genes,
  available_genes,
  discount,
  juels,
  all_juels,
  chara_id,
) {
  return [
    [
      { type: 'divider', config: { content: '인자 능력 리스트' } },
      { config: { width: 6 }, content: '이름', type: 'text' },
      {
        config: { align: 'right', width: 1 },
        content: '습득',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '보유',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '가격',
        type: 'text',
      },
      { config: { offset: 3, width: 6 }, content: '이름', type: 'text' },
      {
        config: { align: 'right', width: 1 },
        content: '습득',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '보유',
        type: 'text',
      },
      {
        config: { align: 'right', width: 1 },
        content: '가격',
        type: 'text',
      },
    ],
    ...available_genes
      .get_values()
      .filter((e) => gene_dict[e.id] !== undefined)
      .map((e, i) => {
        const gene = gene_dict[e.id];
        const price =
          Math.floor((gene.cost * (100 + discount)) / 100) * (1 + !chara_id);
        return {
          columns: [
            {
              config: { width: 12 },
              content: gene.get_colored_name(),
              type: 'text',
            },
            {
              config: { align: 'right', width: 2 },
              content: genes.get_count(e.id) || 0,
              type: 'text',
            },
            {
              config: { align: 'right', width: 2 },
              content: e.count.toString(),
              type: 'text',
            },
            {
              config: {
                align: 'right',
                color: gene_type_colors[gene_dict[e.id].type],
                width: 2,
              },
              content: price.toString(),
              type: 'text',
            },
            {
              accelerator: i + 1,
              config: {
                align: 'center',
                disabled:
                  e.count === genes.get_count(e.id) ||
                  price > juels[gene.type] ||
                  (gene.type === gene_type_enum.adapt &&
                    get(`cflag:${chara_id}:${gene.type_value}적성`) === 7) ||
                  (gene.type === gene_type_enum.base &&
                    get(`maxbase:${chara_id}:${gene.type_value}`) === 2000) ||
                  (gene.type === gene_type_enum.skill &&
                    genes.get_count(e.id) > 0) ||
                  (!chara_id && genes.count() > gene_limit),
                width: 6,
              },
              content: '습득',
              type: 'button',
            },
          ],
          config: { width: 12 },
        };
      }),
    {
      columns: [
        {
          config: { width: 12 },
          content: gene_dict[300000].get_colored_name(),
          type: 'text',
        },
        {
          config: {
            align: 'right',
            width: 2,
          },
          content: '-',
          type: 'text',
        },
        {
          config: {
            align: 'right',
            width: 2,
          },
          content: '-',
          type: 'text',
        },
        {
          config: {
            align: 'right',
            color: gene_type_colors[2],
            width: 2,
          },
          content: Math.floor(
            (gene_dict[300000].cost * (100 + discount)) / 100,
          ).toString(),
          type: 'text',
        },
        {
          accelerator: available_genes.get_values().length + 1,
          config: {
            align: 'center',
            disabled:
              Math.floor((gene_dict[300000].cost * (100 + discount)) / 100) *
                (1 + !chara_id) >
              juels[2],
            width: 6,
          },
          content: '습득',
          type: 'button',
        },
      ],
      config: { width: 12 },
    },
    {
      columns: [
        {
          accelerator: available_genes.get_values().length + 2,
          config: {
            disabled: all_juels === 0,
            width: 12,
          },
          content: '남은 인자를 스킬 포인트로 변환',
          type: 'button',
        },
      ],
      config: { width: 12 },
    },
  ];
}

async function print_inherit_page() {
  const palace_list = [];
  const edu_list = [];
  const discount = get('flag:인자소모량');
  sys_filter_chara('cflag', '모집상태', recruit_flags.yes).forEach((e) => {
    if (e > 0 && get(`cflag:${e}:육성턴수합산`) < 3 * 48) {
      edu_list.push(e);
    } else if (get(`cflag:${e}:명예의전당`) > 0) {
      palace_list.push(e);
    }
  });
  if (get('cflag:0:종족') > 0) {
    edu_list.unshift(0);
  }
  let selected = get('flag:현재상호작용캐릭터');
  let flag_inherit = true;
  let chara_genes;
  let available_genes;
  let chara;
  let jewels = [0, 0, 0];
  let used_jewels = [0, 0, 0];
  if (selected === 0 && edu_list[0] !== 0) {
    selected = undefined;
  } else {
    available_genes = new CharaAvailableGenes(selected);
    chara_genes = new CharaGenes(selected);
    chara = get_chara_talk(selected);
  }
  while (flag_inherit) {
    await clear();
    if (selected > 0) {
      const chara = get_chara_talk(selected);
      jewels = gene_juel_names.map((e) => get(`jewel:${selected}:${e}`));
      used_jewels = jewels.map(
        (e, i) => e + get(`jewel:0:${gene_juel_names[i]}`) / 2,
      );
      let gene_a = get(`cflag:${selected}:상속자1`),
        gene_b = get(`cflag:${selected}:상속자2`);
      drawLine({ content: `${chara.actual_name}의 상속받은 인자` });
      if (gene_a) {
        printInColRows(
          {
            columns: [
              { config: { content: '인자' }, type: 'divider' },
              ...gene_juel_names.map((e, i) => {
                const my_juel = get(`jewel:0:${e}`);
                return {
                  config: { color: gene_type_colors[i], offset: 1, width: 23 },
                  content: `${e}인자: ${get(`jewel:${chara.id}:${e}`)}${my_juel ? ` (+${my_juel})` : ''}`,
                  type: 'text',
                };
              }),
            ],
            config: { width: 4 },
          },
          {
            columns: [
              {
                names: get_image(selected)
                  .map((_i) => `${_i}_半身`)
                  .join('\t'),
                type: 'image.whole',
              },
              {
                config: { align: 'center', fontSize: '1.25rem' },
                content: [chara.get_colored_name()],
                type: 'text',
              },
            ],
            config: { width: 5 },
          },
          {
            columns: [
              {
                config: { offset: 1, width: 3 },
                names: get_image(gene_a).join('\t'),
                type: 'image.whole',
              },
              {
                config: { offset: 1, width: 18 },
                content: [
                  '인자 능력: ',
                  ...new CharaAvailableGenes(gene_a).get_summary(),
                ],
                type: 'text',
              },
              {
                config: { align: 'center', offset: 1, width: 3 },
                content: [get_chara_talk(gene_a).get_colored_name()],
                type: 'text',
              },
              { content: [], type: 'text' },
              {
                config: { offset: 1, width: 3 },
                names: get_image(gene_b).join('\t'),
                type: 'image.whole',
              },
              {
                config: { offset: 1, width: 18 },
                content: [
                  '인자 능력: ',
                  ...new CharaAvailableGenes(gene_b).get_summary(),
                ],
                type: 'text',
              },
              {
                config: { align: 'center', offset: 1, width: 3 },
                content: [get_chara_talk(gene_b).get_colored_name()],
                type: 'text',
              },
            ],
            config: { verticalAlign: 'middle', width: 15 },
          },
          ...generate_gene_buttons(
            chara_genes,
            available_genes,
            discount,
            used_jewels,
            jewels.reduce((p, c) => p + c),
            selected,
          ),
          [
            {
              content:
                '* 우마무스메의 인자가 부족할 경우, 트레이너가 부족분의 2배를 지불하여 계승을 도울 수 있습니다.',
              type: 'text',
            },
          ],
        );
      } else if (palace_list.length > 0) {
        printButton('계승 캐릭터 선택', 200, { align: 'center' });
      } else {
        print('계승해줄 캐릭터가 최소 둘 이상 필요합니다...', { align: 'center' });
      }
    } else if (selected === 0) {
      used_jewels = jewels = gene_juel_names.map((e) =>
        get(`jewel:${selected}:${e}`),
      );
      printInColRows(
        [
          {
            type: 'divider',
            config: { content: `${chara.get_full_name()}에게 인자 계승` },
          },
        ],
        gene_juel_names.map((e, i) => ({
          config: { color: gene_type_colors[i], width: 6 },
          content: `${e}인자: ${get(`jewel:${selected}:${e}`)}`,
          type: 'text',
        })),
        ...generate_gene_buttons(
          chara_genes,
          available_genes,
          discount,
          used_jewels,
          jewels.reduce((p, c) => p + c),
          selected,
        ),
        [
          {
            accelerator: available_genes.get_values().length + 3,
            config: { disabled: chara_genes.count() < gene_limit },
            content: '모든 인자 능력 망각',
            type: 'button',
          },
          {
            content: [
              '* 트레이너는 최대 ',
              { content: gene_limit.toString(), fontWeight: 'bold' },
              '개의 인자 능력을 계승할 수 있습니다',
            ],
            type: 'text',
          },
        ],
      );
    }
    printMultiColumns([
      { type: 'divider', config: { content: '인자계승 가능 캐릭터' } },
      ...(edu_list.length > 0
        ? edu_list.map((e) => ({
            accelerator: 1000 + e,
            config: {
              buttonType: e === selected ? 'warning' : 'info',
              disabled: selected === e,
              width: 4,
            },
            content: get(`callname:${e}:-1`),
            type: 'button',
          }))
        : [{ content: '없음', type: 'text' }]),
      { accelerator: 999, content: '돌아가기', type: 'button' },
    ]);
    const ret = await input({});
    drawLine();
    if (ret === 999) {
      flag_inherit = false;
    } else if (ret === 200) {
      let flag_select_inherit = true,
        flag_print = true;
      const inherit_selected = {};
      while (flag_select_inherit) {
        setHorizontalAlign('space-evenly');
        (flag_print ? printInColRows : replaceInColRows)(
          ...palace_list.map((e) => ({
            columns: [
              {
                accelerator: e,
                config: {
                  align: 'center',
                  buttonType: inherit_selected[e] ? 'warning' : 'info',
                  disabled: get(`cflag:${e}:피상속`) > 0,
                },
                content: get(`callname:${e}:-1`),
                type: 'button',
              },
              {
                config: { align: 'center' },
                content: [
                  ...(get(`cflag:${e}:피상속`) > 0
                    ? ['이미 계승됨', { isBr: true }]
                    : []),
                  ...new CharaAvailableGenes(e).get_summary(),
                ],
                type: 'text',
              },
            ],
            config: { width: 8 },
          })),
          [
            {
              content: [
                '* 두 캐릭터를 동시에 선택해야 인자 계승을 시작할 수 있습니다',
                { isBr: true },
                '** 계승해준 캐릭터는 계승받은 캐릭터의 육성이 완료될 때까지 다시 육성할 수 없습니다!',
              ],
              type: 'text',
            },
            {
              accelerator: 1000,
              config: {
                align: 'center',
                disabled:
                  Object.values(inherit_selected).filter((e) => e).length !== 2,
                width: 12,
              },
              content: '확정',
              type: 'button',
            },
            {
              accelerator: 1001,
              config: { align: 'center', width: 12 },
              content: '취소',
              type: 'button',
            },
          ],
        );
        setHorizontalAlign('start');
        flag_print = false;
        const ret1 = await input({ hideInput: true });
        if (ret1 === 1000) {
          const gene_owner_list = [];
          Object.entries(inherit_selected)
            .filter((e) => e[1])
            .forEach((e, i) => {
              gene_owner_list.push(Number(e[0]));
              set(`cflag:${selected}:상속자${i + 1}`, Number(e[0]));
              set(`cflag:${e[0]}:피상속`, selected);
            });
          const jewel_list = gene_juel_names.map(
            (e) =>
              get(`jewel:${gene_owner_list[0]}:${e}`) +
              get(`jewel:${gene_owner_list[1]}:${e}`),
          );
          switch (Math.floor(get(`cflag:${selected}:육성턴수합산`) / 48)) {
            case 0:
              jewel_list.forEach((e, i) =>
                set(
                  `jewel:${selected}:${gene_juel_names[i]}`,
                  Math.floor(e * 0.3),
                ),
              );
              break;
            case 1:
              jewel_list.forEach((e, i) =>
                set(
                  `jewel:${selected}:${gene_juel_names[i]}`,
                  Math.floor(e * 0.3) + Math.floor(e * 0.4),
                ),
              );
              break;
            case 2:
              jewel_list.forEach((e, i) =>
                set(`jewel:${selected}:${gene_juel_names[i]}`, e),
              );
          }
          available_genes.merge(
            ...gene_owner_list.map((e) => new CharaAvailableGenes(e)),
          );
          flag_select_inherit = false;
          drawLine();
          await printAndWait([
            '계승 성공! ',
            chara.get_colored_name(),
            '의 계승 결과: ',
            { isBr: true },
            {
              content: `분홍색인자 × ${get(`jewel:${selected}:분홍색`)}`,
              color: gene_type_colors[0],
            },
            ' ',
            {
              content: `푸른색인자 × ${get(`jewel:${selected}:푸른색`)}`,
              color: gene_type_colors[1],
            },
            ' ',
            {
              content: `흰색인자 × ${get(`jewel:${selected}:흰색`)}`,
              color: gene_type_colors[2],
            },
          ]);
          println();
          let wait_flag = sys_like_chara(selected, gene_owner_list[0], 100);
          wait_flag =
            sys_like_chara(selected, gene_owner_list[1], 100) || wait_flag;
          wait_flag =
            sys_like_chara(gene_owner_list[0], selected, 50) || wait_flag;
          wait_flag =
            sys_like_chara(gene_owner_list[1], selected, 50) || wait_flag;
          wait_flag && (await waitAnyKey());
        } else if (ret1 === 1001) {
          flag_select_inherit = false;
        } else {
          inherit_selected[ret1] = !inherit_selected[ret1];
        }
      }
    } else if (ret >= 1000) {
      selected = ret - 1000;
      available_genes = new CharaAvailableGenes(selected);
      chara_genes = new CharaGenes(selected);
      chara = get_chara_talk(selected);
    } else if (ret === available_genes.get_values().length + 3) {
      if (
        await select_yes_or_no('모든 인자 능력을 망각하시겠습니까? (상승한 능력치 상한은 유지됩니다)')
      ) {
        CharaSkills.get(0).remove(
          ...chara_genes
            .get_values()
            .filter((e) => gene_dict[e.id].type === gene_type_enum.skill)
            .map((e) => gene_dict[e.id].value),
        );
        let _src = get('cflag:0:템플릿캐릭터');
        if (_src <= 0) {
          _src = 0;
        }
        adaptability_names.forEach((e) =>
          set(`cflag:0:${e}적성`, get(`cflag:${_src}:${e}적성`)),
        );
        chara_genes.get_values().forEach((e) => {
          if (e.type === gene_type_enum.base) {
            add(`base:0:${gene_dict[e.id].type_value}`, -gene_dict[e.id].value);
          }
        });
        chara_genes.clear();
        await printAndWait([
          chara.get_colored_name(),
          '은(는) 모든 인자 능력을 망각했습니다... 모든 적성, 계승 능력치 및 계승 스킬이 소멸되었습니다...',
        ]);
      }
    } else if (ret === available_genes.get_values().length + 2) {
      const pt = 2 * jewels.reduce((p, c) => p + c, 0);
      if (await select_yes_or_no(`남은 인자를 ${pt} 스킬 포인트로 변환하시겠습니까?`)) {
        add(`exp:${selected}:스킬포인트`, pt);
        gene_juel_names.forEach((e) => set(`jewel:${selected}:${e}`, 0));
        await printAndWait([
          chara.get_colored_name(),
          '은(는) ',
          pt.toString(),
          ' 스킬 포인트를 획득했습니다',
        ]);
      }
    } else if (ret < 200) {
      const gene =
          ret > available_genes.get_values().length
            ? gene_dict[300000]
            : gene_dict[available_genes.get_values()[ret - 1].id],
        cost =
          Math.floor((gene.cost * (100 + discount)) / 100) * (1 + !selected),
        delta = cost - jewels[gene.type],
        available_count =
          available_genes.get_count(gene.id) - chara_genes.get_count(gene.id);
      if (
        await select_yes_or_no([
          '사용 인자: ',
          ...(delta <= 0
            ? [
                {
                  color: gene_type_colors[gene.type],
                  content: `${gene_juel_names[gene.type]}인자 × ${cost}/${jewels[gene.type]}`,
                },
                ' ',
              ]
            : [
                {
                  color: gene_type_colors[gene.type],
                  content: `${gene_juel_names[gene.type]}인자 × ${jewels[gene.type]}`,
                },
                '(',
                get_chara_talk(0).get_colored_name(),
                '의 ',
                {
                  color: gene_type_colors[gene.type],
                  content: `${gene_juel_names[gene.type]}인자 × ${delta * 2}/${(used_jewels[gene.type] - jewels[gene.type]) * 2}`,
                },
                ' 보충) ',
              ]),
          chara.get_colored_name(),
          '에게 ',
          ...gene.get_colored_name(),
          '을(를) 계승하시겠습니까?',
          ...(available_count > 0 ? [` (남은 계승 횟수: ${available_count}회)`] : []),
        ])
      ) {
        let temp;
        switch (gene.type) {
          case gene_type_enum.adapt:
            temp = get(`cflag:${selected}:${gene.type_value}적성`);
            if (temp < 4) {
              temp = set(`cflag:${selected}:${gene.type_value}적성`, 4);
            } else if (temp < 6) {
              temp = set(`cflag:${selected}:${gene.type_value}적성`, 6);
            } else {
              temp = set(`cflag:${selected}:${gene.type_value}적성`, 7);
            }
            await printAndWait([
              chara.get_colored_name(),
              `의 ${gene.type_value}적성 변경: `,
              {
                color: adaptability_colors[temp],
                content: get_adaptability_rank(temp),
                fontWeight: 'bold',
              },
            ]);
            break;
          case gene_type_enum.base:
            set(
              `maxbase:${selected}:${gene.type_value}`,
              Math.min(
                get(`maxbase:${selected}:${gene.type_value}`) + gene.value,
                2000,
              ),
            );
            add(`base:${selected}:${gene.type_value}`, gene.value);
            await printAndWait([
              chara.get_colored_name(),
              '의 ',
              { content: gene.type_value, color: attr_colors[gene.type_value] },
              ' 능력치 변경: ',
              {
                content: `${Math.floor(get(`base:${selected}:${gene.type_value}`))}/${get(`maxbase:${selected}:${gene.type_value}`)}`,
                color: attr_colors[gene.type_value],
              },
            ]);
            break;
          case gene_type_enum.skill:
            if (gene.value < 100000) {
              add(`exp:${selected}:스킬포인트`, gene.value);
              await printAndWait([
                chara.get_colored_name(),
                '은(는) ',
                gene.value.toString(),
                ' 스킬 포인트를 획득했습니다',
              ]);
            } else {
              get_skills_and_print_in_event(selected, [gene.value]) &&
                (await waitAnyKey());
            }
        }
        chara_genes.add(gene.id);
        if (delta <= 0) {
          add(`jewel:${selected}:${gene_juel_names[gene.type]}`, -cost);
        } else {
          set(`jewel:${selected}:${gene_juel_names[gene.type]}`, 0);
          add(`jewel:0:${gene_juel_names[gene.type]}`, delta * -2);
        }
      }
    }
  }
}

module.exports = print_inherit_page;
