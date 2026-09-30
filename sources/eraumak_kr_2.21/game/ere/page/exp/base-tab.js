const era = require('#/era-electron');

const {
  sys_get_full_chara,
} = require('#/system/chara/sys-calc-characteristic');
const sys_change_hair = require('#/system/chara/sys-change-hair');
const { check_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');
const { get_image } = require('#/system/sys-calc-image');

const { join_to_string } = require('#/utils/list-utils');

const CharaTitles = require('#/data/chara-titles');
const { clothe_names, race_clothe_list } = require('#/data/clothe-const.json');
const title_desc = require('#/data/desc/titles.json');
const { human_sex_title, sex_title } = require('#/data/ero/status-const');
const { growth_info } = require('#/data/exp-const');
const {
  get_breast_cup,
  get_hair_color,
  get_skin,
  get_skin_color,
  get_talent,
  get_xp,
} = require('#/data/info-generator');
const { back_hairs, front_hairs, top_hairs } = require('#/data/other-const');

const page_name = '개인정보';

/**
 * @param {number} chara_id
 * @returns {{front:number,back:number,top:number}}
 */
function generate_hair_index(chara_id) {
  const ret = {};
  ret.front = Math.max(
    front_hairs.indexOf(era.get(`cstr:${chara_id}:앞머리`)),
    0,
  );
  ret.back = Math.max(back_hairs.indexOf(era.get(`cstr:${chara_id}:뒷머리`)), 0);
  ret.top = Math.max(top_hairs.indexOf(era.get(`cstr:${chara_id}:바보털`)), 0);
  return ret;
}

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_body:boolean,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const right_intro_list = [];
    const body_hair_color = era.get(`cstr:${chara.id}:털색`),
      hair_color = era.get(`cstr:${chara.id}:머리색`),
      growth = era.get(`cflag:${chara.id}:성장단계`),
      race = era.get(`cflag:${chara.id}:종족`);
    let hair = era.get(`cstr:${chara.id}:바보털`);
    hair = join_to_string(
      [
        hair ? `${hair}바보털` : '',
        era.get(`cstr:${chara.id}:앞머리`),
        era.get(`cstr:${chara.id}:중간머리`),
        era.get(`cstr:${chara.id}:뒷머리`),
      ],
      '+',
    );

    right_intro_list.push(
      { content: '개인정보', isDivider: true },
      '피부색 ',
      { color: get_skin_color(chara.id), content: get_skin(chara.id) },
      ' 피부 ',
      {
        color: get_hair_color(hair_color),
        content: `${hair_color} 머리 `,
      },
      race
        ? {
            color: get_hair_color(body_hair_color),
            content: `${body_hair_color} 털`,
          }
        : '',
      ' ',
    );
    if (race) {
      right_intro_list.push(
        !growth ? '유년' : sys_get_full_chara(chara.id),
        ' ',
        sex_title[chara.sex_code],
      );
    } else {
      right_intro_list.push(human_sex_title[chara.sex_code]);
    }
    if (hair) {
      right_intro_list.push({ isBr: true }, '헤어스타일: ', hair);
    }
    right_intro_list.push(
      { isBr: true },
      era.get(`cstr:${chara.id}:출산경험`) ||
        `생년월일 ${era.get(`cflag:${chara.id}:출생월`)} 월 ${era.get(
          `cflag:${chara.id}:출생일`,
        )} 일`,
      { content: '신체치수', isDivider: true },
    );

    if (flags.in_growth) {
      right_intro_list.push(growth_info);
    } else {
      right_intro_list.push(
        '키：',
        era.get(`cflag:${chara.id}:키`).toString(),
        'cm ｜ 체중：',
      );
      if (era.get(`status:${chara.id}:살찜`)) {
        right_intro_list.push('사, 살쪘나……');
      } else {
        right_intro_list.push(
          era.get(`base:${chara.id}:체중 편차`) >= 2000 ? '살짝 증가' : '적당함',
        );
      }
      if (chara.sex_code - 1) {
        if (flags.show_body) {
          right_intro_list.push(
            { isBr: true },
            '쓰리사이즈：B',
            get_bust_size(chara.id, flags.show_all_body).toString(),
            ' (',
            get_breast_cup(chara.id, flags.show_all_body).toString(),
            ' Cup) · W',
            get_waist_size(chara.id).toString(),
            ' · H',
            get_hip_size(chara.id).toString(),
          );
        } else {
          right_intro_list.push({ isBr: true }, '더 이상 정보가 없다....');
        }
      }
    }

    const image = get_image(chara.id)
      .map((e) => `${e}_半身`)
      .join('\t');

    const titles = CharaTitles.get(chara.id);
    const title_list = titles.get();
    const title_info_list = [];
    const cur_title = titles.get_curr_title();
    title_info_list.push(
      {
        accelerator: 30,
        config: {
          buttonType: cur_title ? 'info' : 'warning',
          disabled: !cur_title,
          showAcc: false,
          width: 1,
        },
        content: 'E',
        type: 'button',
      },
      {
        config: { width: 5 },
        content: '（없음）',
        type: 'text',
      },
    );
    title_list.forEach((e, i) => {
      title_info_list.push(
        {
          accelerator: i + 31,
          config: {
            buttonType: e.s ? 'warning' : 'info',
            disabled: e.s,
            showAcc: false,
            width: 1,
          },
          content: 'E',
          type: 'button',
        },
        {
          config: { color: e.c, width: 5 },
          content: [
            {
              content: e.n,
              title: title_desc[e.n]
                ? `[${e.n}]：${title_desc[e.n]}`
                : undefined,
            },
          ],
          type: 'text',
        },
      );
    });

    const action_buffer = [];
    if (
      !check_chara_ero_image(chara.id) &&
      (!chara.id ||
        era.get(`love:${chara.id}`) >= 75 ||
        !era.get(`cflag:${chara.id}:부계캐릭`) ||
        !era.get(`cflag:${chara.id}:모계캐릭`))
    ) {
      action_buffer.push({
        accelerator: 100,
        config: { width: 4 },
        content: '머리 자르기',
        type: 'button',
      });
    }
    const image_prefix = era.get(`cstr:${chara.id}:이미지`),
      suffix = era.get(`cstr:${chara.id}:승부복`);
    let image_list,
      src_chara = era.get(`cflag:${chara.id}:템플릿캐릭터`);
    if (src_chara < 0) {
      src_chara = chara.id;
    }
    if (era.get(`cflag:${chara.id}:종족`) && src_chara > 0 && suffix !== -1) {
      image_list = race_clothe_list
        .filter((e) => era.checkImage(`${image_prefix}${e.s}`))
        .map((e) => ({
          n: (clothe_names[src_chara] || {})[e.s] || e.n,
          s: e.s,
        }));
      if (image_list.length > 1) {
        const curr = image_list.find((e) => e.s === suffix);
        action_buffer.push({
          accelerator: 101,
          config: { width: 8 },
          content: curr ? `승부복 (${curr.n})` : '승부복',
          type: 'button',
        });
      } else if (image_list.length > 0 && image_list[0].n !== '승부복') {
        action_buffer.push({
          config: { width: 8 },
          content: `승부복：${image_list[0].n}`,
          type: 'text',
        });
      }
    }
    if (action_buffer.length > 0) {
      title_info_list.push(
        { content: [{ isBr: true }], type: 'text' },
        ...action_buffer,
      );
    }

    let temp;

    return {
      async handle(command) {
        if (command === 100) {
          let flag_hair = true,
            hair_indexes = generate_hair_index(chara.id),
            flag_print = true;
          while (flag_hair) {
            (flag_print ? era.printInColRows : era.replaceInColRows)(
              [
                { type: 'divider' },
                {
                  content: [chara.get_colored_name(), '의 새 헤어스타일 선택'],
                  type: 'text',
                },
                { config: { width: 2 }, content: '바보털：', type: 'text' },
                {
                  accelerator: 10,
                  config: { width: 3 },
                  content: '이전',
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: top_hairs[hair_indexes.top],
                  type: 'text',
                },
                {
                  accelerator: 11,
                  config: { width: 3 },
                  content: '이후',
                  type: 'button',
                },
              ],
              [
                { config: { width: 2 }, content: '앞머리：', type: 'text' },
                {
                  accelerator: 20,
                  config: { width: 3 },
                  content: '이전',
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: front_hairs[hair_indexes.front],
                  type: 'text',
                },
                {
                  accelerator: 21,
                  config: { width: 3 },
                  content: '이후',
                  type: 'button',
                },
              ],
              [
                { config: { width: 2 }, content: '뒷머리：', type: 'text' },
                {
                  accelerator: 30,
                  config: { width: 3 },
                  content: '이전',
                  type: 'button',
                },
                {
                  config: { width: 3 },
                  content: back_hairs[hair_indexes.back],
                  type: 'text',
                },
                {
                  accelerator: 31,
                  config: { width: 3 },
                  content: '이후',
                  type: 'button',
                },
              ],
              [
                {
                  accelerator: 99,
                  config: { width: 3 },
                  content: '확인',
                  type: 'button',
                },
                {
                  accelerator: 98,
                  config: { width: 3 },
                  content: '초기화',
                  type: 'button',
                },
              ],
            );
            const ret = await era.input({ hideInput: true });
            switch (ret) {
              case 10:
                hair_indexes.top =
                  (hair_indexes.top + top_hairs.length - 1) % top_hairs.length;
                break;
              case 11:
                hair_indexes.top = (hair_indexes.top + 1) % top_hairs.length;
                break;
              case 20:
                hair_indexes.front =
                  (hair_indexes.front + front_hairs.length - 1) %
                  front_hairs.length;
                break;
              case 21:
                hair_indexes.front =
                  (hair_indexes.front + 1) % front_hairs.length;
                break;
              case 30:
                hair_indexes.back =
                  (hair_indexes.back + back_hairs.length - 1) %
                  back_hairs.length;
                break;
              case 31:
                hair_indexes.back = (hair_indexes.back + 1) % back_hairs.length;
                break;
              case 98:
                hair_indexes = generate_hair_index(chara.id);
                break;
              case 99:
                era.set(
                  `cstr:${chara.id}:바보털`,
                  !hair_indexes.top ? '' : top_hairs[hair_indexes.top],
                );
                era.set(
                  `cstr:${chara.id}:앞머리`,
                  front_hairs[hair_indexes.front],
                );
                era.set(`cstr:${chara.id}:뒷머리`, back_hairs[hair_indexes.back]);
                flag_hair = false;
            }
            flag_print = false;
            sys_change_hair(chara.id);
          }
        } else if (command !== 101) {
          const selected = command - 31;
          if (selected === -1) {
            title_list.forEach((e) => delete e.s);
          } else if (title_list[selected].s) {
            delete title_list[selected].s;
          } else {
            title_list.forEach((e) => delete e.s);
            title_list[selected].s = true;
          }
        } else {
          const curr = image_list.find((e) => e.s === suffix),
            cur_line = era.getLineCount();
          let flag = true,
            gif = era.checkImage(`${image_prefix}${image_list[0].s}_gif`)
              ? 0
              : 2;
          while (flag) {
            await era.clear(era.getLineCount() - cur_line);
            era.setHorizontalAlign('space-evenly');
            era.printInColRows(
              [
                { type: 'divider' },
                {
                  content: [
                    '현재 ',
                    chara.get_colored_name(),
                    '은(는) 레이스에 참가할 때 ',
                    suffix === 0
                      ? `기념일에 따라 승부복을 결정하며, URA 시상식 및 육성 종료 후의 전당 주간에는 승부복 [${clothe_names[src_chara]['']}]을(를) 착용합니다.`
                      : `승부복 [${curr.n}] 착용합니다.`,
                    ' ',
                    { isBr: true },
                    '바꾸시겠습니까?',
                  ],
                  type: 'text',
                },
              ],
              ...image_list.map((e, i) => ({
                columns: [
                  {
                    names:
                      gif === 1
                        ? `${image_prefix}${e.s}_gif\t${image_prefix}${e.s}_半身`
                        : `${image_prefix}${e.s}_半身`,
                    type: 'image.whole',
                  },
                  {
                    accelerator: i + 1,
                    config: {
                      align: 'center',
                      disabled: suffix === e.s,
                    },
                    content: e.n,
                    type: 'button',
                  },
                ],
                config: { width: 6 },
              })),
              [
                {
                  accelerator: 97,
                  config: {
                    align: 'center',
                    disabled: gif === 2,
                    width: 8,
                  },
                  content: '그림 변경',
                  type: 'button',
                },
                {
                  accelerator: 98,
                  config: {
                    align: 'center',
                    disabled: suffix === 0,
                    width: 8,
                  },
                  content: '고정 해제',
                  type: 'button',
                },
                {
                  accelerator: 99,
                  config: { align: 'center', width: 8 },
                  content: '돌아가기',
                  type: 'button',
                },
              ],
            );
            era.setHorizontalAlign('start');
            const ret = await era.input();
            if (ret === 97) {
              gif = 1 - gif;
              continue;
            } else if (ret === 98) {
              await era.printAndWait([
                '현재 ',
                chara.get_colored_name(),
                '은(는) 레이스에 참가할 때는 그에 맞춰 복장을 결정하며, URA 시상식과 육성 종료 후의 전당 주간에는 [',
                clothe_names[src_chara][''],
                '] 승부복을 착용합니다.',
              ]);
              era.set(`cstr:${chara.id}:승부복`, 0);
            } else if (ret !== 99) {
              await era.printAndWait([
                '현재 ',
                chara.get_colored_name(),
                '은(는) 레이스에 참가할 때, URA 시상식과 육성 종료 후의 전당 주간에는 [',
                image_list[ret - 1].n,
                '] 승부복을 착용합니다.',
              ]);
              era.set(`cstr:${chara.id}:승부복`, image_list[ret - 1].s);
            }
            flag = false;
          }
        }
      },
      print() {
        return [
          { content: [{ isBr: true }], type: 'text' },
          { config: { width: 7 }, names: image, type: 'image.whole' },
          {
            config: { width: 17 },
            content: right_intro_list,
            type: 'text',
          },
          {
            config: { content: '특징', position: 'left' },
            type: 'divider',
          },
          ...((temp = get_talent(chara.id)).length
            ? [
                {
                  config: { width: 2 },
                  content: '성격',
                  type: 'text',
                },
                {
                  config: { width: 22 },
                  content: temp,
                  type: 'text',
                },
              ]
            : []),
          ...((temp = get_xp(chara.id)).length
            ? [
                {
                  config: { width: 2 },
                  content: '기타',
                  type: 'text',
                },
                {
                  config: { width: 22 },
                  content: temp,
                  type: 'text',
                },
              ]
            : []),
          {
            config: { content: '칭호', position: 'left' },
            type: 'divider',
          },
          ...title_info_list,
        ];
      },
    };
  },
  name: page_name,
};
