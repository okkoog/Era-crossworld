const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_get_colored_full_callname,
} = require('#/system/sys-calc-chara-others');

const { get_custom_mec } = require('#/event/mec/mec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { join_to_string } = require('#/utils/list-utils');

const { relation_colors } = require('#/data/const.json');
const { get_relation_mark } = require('#/data/info-generator');

const chinese_numbers = [
  '장',
  '차',
  '삼',
  '사',
  '오',
  '육',
  '칠',
  '팔',
  '구',
  '십',
  '11',
];

const page_name = '사회관계';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @returns {{print():*[]}}
   */
  generate(chara) {
    const relation_info_list = [];
    const family_info_list = [];
    const my_src_chara = era.get('cflag:0:템플릿캐릭터') || -1;
    if (chara.id > 0) {
      Object.entries(era.get(`relation:${chara.id}`)).forEach(
        ([cid, relation]) => {
          const mark = get_relation_mark(chara.id, relation);
          const target = Number(cid);
          if (target !== my_src_chara && target < 1000) {
            relation_info_list.push({
              config: { width: 8 },
              content: [
                sys_get_colored_full_callname(chara.id, target),
                '：',
                {
                  content: mark,
                  color: relation_colors[mark],
                },
              ],
              type: 'text',
            });
          }
        },
      );
    }
    if (!relation_info_list.length) {
      relation_info_list.push({
        content: chara.id ? '신경 쓰이는 인물은 없는 듯 하다...' : '——',
        type: 'text',
      });
    }
    const teach_chara = era.get(`cflag:${chara.id}:돌봄`);
    if (teach_chara > 0) {
      if (
        !era.get(`cflag:${chara.id}:종족`) ||
        era.get(`cflag:${chara.id}:재육성가능`) > 0
      ) {
        relation_info_list.push({
          content: [
            '',
            get_chara_talk(teach_chara).get_colored_name(),
            ' 을(를) 돌보는 중……',
          ],
          type: 'text',
        });
      } else if (era.get(`cflag:${chara.id}:육성턴수합산`) < 3 * 48) {
        relation_info_list.push({
          content: [
            '',
            get_chara_talk(teach_chara).get_colored_name(),
            ' 에게 돌보아지는 중……',
          ],
          type: 'text',
        });
      }
    }

    const father_id = era.get(`cflag:${chara.id}:부계캐릭`),
      mother_id = era.get(`cflag:${chara.id}:모계캐릭`);
    if (father_id >= 0) {
      family_info_list.push({
        content: [
          '부친: ',
          get_chara_talk(father_id).get_colored_full_name(),
          ' / 모친: ',
          get_chara_talk(mother_id).get_colored_full_name(),
        ],
        type: 'text',
      });
    }
    const children_count = era.get(`exp:${chara.id}:아이숫자`),
      birth_count = era.get(`exp:${chara.id}:출산횟수`),
      children_exp = era.get(`cstr:${chara.id}:자녀경험`);
    if (children_exp) {
      family_info_list.push({
        content: children_exp,
        type: 'text',
      });
      family_info_list.push({
        content: [
          '현재 ',
          join_to_string(
            [
              children_count ? `${children_count}명의 아이의 아버지` : '',
              birth_count ? `${birth_count}명의 아이의 어머니` : '',
            ],
            ' 이자 ',
          ),
          { isBr: 2 },
        ],
        type: 'text',
      });
    }

    era
      .getAddedCharacters()
      .map((e) => {
        return {
          f: era.get(`cflag:${e}:부계캐릭`),
          id: e,
          m: era.get(`cflag:${e}:모계캐릭`),
        };
      })
      .filter((e) => e.f === chara.id || e.m === chara.id)
      .forEach((e, i) => {
        const child = get_chara_talk(e.id);
        family_info_list.push({
          config: { width: 12 },
          content: [
            chinese_numbers[i] || i + 1,
            child.sex_code - 1 ? '녀 ' : '남 ',
            child.get_colored_name(),
            '，',
            ...(e.f === chara.id
              ? ['친모는 ', get_chara_talk(e.m).get_colored_full_name()]
              : ['친부는 ', get_chara_talk(e.f).get_colored_full_name()]),
          ],
          type: 'text',
        });
      });
    if (
      family_info_list[family_info_list.length - 1] &&
      family_info_list[family_info_list.length - 1].content[0].isBr
    ) {
      family_info_list.pop();
    }
    if (!family_info_list.length) {
      family_info_list.push({
        content: '소개할 만한 관계자가 없다...',
        type: 'text',
      });
    }

    return {
      async handle(command) {
        const me = get_chara_talk(0);
        let ret;
        switch (command) {
          case 100:
            era.printMultiColumns([
              { type: 'divider' },
              {
                content: [
                  chara.get_colored_name(),
                  ' 이(가) ',
                  me.get_colored_name(),
                  ' 을(를) 뭐라고 부르게 할까?',
                ],
                type: 'text',
              },
            ]);
            ret = (await era.input()).toString();
            era.set(`callname:${chara.id}:0`, ret);
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) ',
              me.get_colored_name(),
              '을(를) ',
              sys_get_colored_callname(chara.id, 0),
              '(이)라고 부르기로 했다...',
            ]);
            break;
          case 101:
            get_custom_mec(chara.id).set_callname();
            await era.printAndWait([
              chara.get_colored_name(),
              '은(는) ',
              me.get_colored_name(),
              '을(를) ',
              sys_get_colored_callname(chara.id, 0),
              '(이)라고 부르기로 했다...',
            ]);
            break;
          case 102:
            era.printMultiColumns([
              { type: 'divider' },
              {
                content: [chara.get_colored_name(), '을(를) 뭐라고 부를까?'],
                type: 'text',
              },
            ]);
            ret = (await era.input()).toString();
            era.set(`callname:0:${chara.id}`, ret);
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) ',
              chara.get_colored_name(),
              '을(를) ',
              sys_get_colored_callname(0, chara.id),
              '(이)라고 부르기로 했다...',
            ]);
            break;
          case 103:
            era.set(
              `callname:0:${chara.id}`,
              era.get(`callname:${chara.id}:-2`),
            );
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) ',
              chara.get_colored_name(),
              '을(를) ',
              sys_get_colored_callname(0, chara.id),
              '(이)라고 부르기로 했다...',
            ]);
        }
      },
      print() {
        return [
          {
            config: { content: '대인관계', position: 'left' },
            type: 'divider',
          },
          ...relation_info_list,
          {
            config: { content: '직계친족', position: 'left' },
            type: 'divider',
          },
          ...family_info_list,
          ...(chara.id
            ? era.get(`love:${chara.id}`) >= 75
              ? [
                  { type: 'text', content: [{ isBr: true }] },
                  {
                    accelerator: 100,
                    config: { width: 12 },
                    content: `${era.get('callname:0:-2')}에 대한 호칭 수정`,
                    type: 'button',
                  },
                  {
                    accelerator: 101,
                    config: { width: 12 },
                    content: `${era.get('callname:0:-2')}에 대한 호칭 초기화`,
                    type: 'button',
                  },
                  {
                    accelerator: 102,
                    config: { width: 12 },
                    content: `이 캐릭터의 호칭 수정(${sys_get_callname(
                      0,
                      chara.id,
                    )})`,
                    type: 'button',
                  },
                  {
                    accelerator: 103,
                    config: { width: 12 },
                    content: `이 캐릭터의 호칭 초기화`,
                    type: 'button',
                  },
                ]
              : [
                  { type: 'text', content: [{ isBr: true }] },
                  {
                    accelerator: 102,
                    config: { width: 12 },
                    content: `이 캐릭터의 호칭 수정(${sys_get_callname(
                      0,
                      chara.id,
                    )})`,
                    type: 'button',
                  },
                  {
                    accelerator: 103,
                    config: { width: 12 },
                    content: `이 캐릭터의 호칭 초기화`,
                    type: 'button',
                  },
                ]
            : []),
        ];
      },
    };
  },
  name: page_name,
};
