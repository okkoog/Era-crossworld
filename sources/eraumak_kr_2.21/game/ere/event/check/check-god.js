const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CustomizedCheck = require('#/event/check/check-common');
const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');
const { attr_names } = require('#/data/train-const');

module.exports = class extends CustomizedCheck {
  check_and_get_titles(aim_check) {
    const ret = super.check_and_get_titles(aim_check);
    if (aim_check && ret.length > 0) {
      LifeEventMarks.get_marks(this.id).buff = 1;
    }
    return ret;
  }

  check_love_events() {
    const love = era.get(`love:${this.id}`);
    if (
      love === 49 ||
      era.get(`cflag:${this.id}:모집상태`) === recruit_flags.yes
    ) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.love).set_arg([love]),
      );
    }
  }

  check_next_week() {
    const life_marks = LifeEventMarks.get_marks(this.id);
    if (era.get(`love:${this.id}`) >= 50 && !life_marks.get('love')) {
      add_event(
        event_hooks.week_end,
        new EventObject(this.id, cb_enum.love).set_arg(49),
      );
    }
    if (era.get(`cflag:${this.id}:모집상태`) < 0) {
      if (!era.add(`cflag:${this.id}:모집상태`, 1)) {
        era.set(`cflag:${this.id}:육성턴수합산`, 'x');
        add_event(
          event_hooks.week_start,
          new EventObject(this.id, cb_enum.recruit),
        );
      }
    }
    super.check_next_week();
  }

  get_personal_action() {
    const god = get_chara_talk(this.id),
      me = get_chara_talk(0);
    return {
      name: '여신에게 기도하기',
      async handle() {
        const fame = era.get('flag:현재명성');
        era.printMultiColumns([
          { content: '무엇을 빌까?', type: 'text' },
          ...[
            { c: 1000, n: '유명해지고 싶다 (1000 명성)' },
            { c: 500, n: '부자가 되고 싶다 (500 명성)' },
            {
              c: 200,
              d:
                attr_names.findIndex(
                  (e) => era.get(`base:0:${e}`) < era.get(`maxbase:0:${e}`),
                ) === -1,
              n: '강해지고 싶다 (200 명성)',
            },
            { c: 50, n: '한계를 돌파하고 싶다 (50-500 명성)' },
            { c: 800, n: '건강을 회복하고 싶다 (800 명성)' },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: e.d || fame < e.c, width: 6 },
            content: e.n,
            type: 'button',
          })),
          { accelerator: 99, content: '역시 그만둔다', type: 'button' },
        ]);
        let ret = await era.input(),
          relation,
          temp_list;
        switch (ret) {
          case 1:
            if (
              await select_yes_or_no(
                '확실합니까?',
                `확인 (명성 획득량 +${era.get('global:명성보너스')}% -> ${era.get('global:명성보너스') + 1}%)`,
              )
            ) {
              era.add('global:명성보너스', 1);
              era.add('flag:현재명성', -1000);
              relation = 500;
            }
            break;
          case 2:
            if (
              await select_yes_or_no(
                '확실합니까?',
                `확인 (우마코인 획득량 +${era.get('global:자금보너스')}% -> ${era.get('global:자금보너스') + 1}%)`,
              )
            ) {
              era.add('global:자금보너스', 1);
              era.add('flag:현재명성', -500);
              relation = 250;
            }
            break;
          case 3:
            era.print('어떤 능력치를 얻고 싶습니까?');
            era.printMultiColumns([
              ...attr_names.map((e, i) => ({
                accelerator: i,
                content: `${e} (+80)`,
                config: {
                  disabled:
                    era.get(`base:0:${e}`) === era.get(`maxbase:0:${e}`),
                  width: 6,
                },
                type: 'button',
              })),
              {
                accelerator: 5,
                content: '뭐든 상관없어! (랜덤 능력치 +100)',
                type: 'button',
              },
              { accelerator: 99, content: '역시 그만둔다', type: 'button' },
            ]);
            ret = await era.input();
            if (ret <= 5) {
              if (ret < 5) {
                ret = sys_change_attr_and_print(0, ret, 80);
              } else {
                ret = sys_change_attr_and_print(
                  0,
                  get_random_entry(
                    attr_names
                      .map((e, i) => [e, i])
                      .filter(
                        (e) =>
                          era.get(`base:0:${e[0]}`) <
                          era.get(`maxbase:0:${e[0]}`),
                      )
                      .map((e) => e[1]),
                  ),
                  100,
                );
              }
              era.print([me.get_colored_name(), '의 ', ...ret, '!']);
              era.add('flag:현재명성', -200);
              relation = 100;
            }
            break;
          case 4:
          case 5:
            temp_list = sys_filter_chara(
              'cflag',
              '모집상태',
              recruit_flags.yes,
            ).filter((cur_id) =>
              ret === 4
                ? attr_names.filter(
                    (e) =>
                      era.get(`maxbase:${cur_id}:${e}`) -
                        era.get(`base:${cur_id}:${e}`) <
                      50,
                  ).length >= 3 &&
                  attr_names.findIndex(
                    (e) => era.get(`maxbase:${cur_id}:${e}`) < 2000,
                  ) !== -1
                : era.get(`status:${cur_id}:밤샘`) ||
                  era.get(`status:${cur_id}:살찜`) ||
                  era.get(`status:${cur_id}:편두통`) ||
                  era.get(`status:${cur_id}:부상`) ||
                  era.get(`status:${cur_id}:피로`),
            );
            if (temp_list.length) {
              era.printMultiColumns([
                { content: '대상을 선택해 주세요', type: 'text' },
                ...temp_list.map((cur_id) => {
                  let cost;
                  if (ret === 4) {
                    cost = attr_names.filter(
                      (e) =>
                        era.get(`base:${cur_id}:${e}`) ===
                        era.get(`maxbase:${cur_id}:${e}`),
                    ).length;
                    cost =
                      cost >= 3 ? 50 : (3 - cost) * 100 + 200 * (cost === 0);
                  } else {
                    cost = 800;
                  }
                  return {
                    accelerator: cur_id,
                    config: { width: 12, disabled: fame < cost },
                    content:
                      era.get(`callname:${cur_id}:-2`) +
                      ` (${cost} 명성${ret === 4 ? ', 트레이닝 보너스 -10%' : ''})`,
                    type: 'button',
                  };
                }),
                { accelerator: 9999, content: '취소', type: 'button' },
              ]);
              ret = [ret, 0];
              ret[1] = await era.input();
              if (ret[1] !== 9999) {
                if (ret[0] === 4) {
                  let limited_count = 0;
                  attr_names.forEach((e) => {
                    limited_count +=
                      era.get(`base:${ret[1]}:${e}`) ===
                      era.get(`maxbase:${ret[1]}:${e}`);
                    era.set(
                      `maxbase:${ret[1]}:${e}`,
                      Math.min(2000, era.get(`maxbase:${ret[1]}:${e}`) + 100),
                    );
                    era.add(`cflag:${ret[1]}:${e}보너스`, -10);
                  });
                  era.print([
                    get_chara_talk(ret[1]).get_colored_name(),
                    '은(는) 한계를 돌파한 듯하다……',
                  ]);
                  relation =
                    limited_count >= 3
                      ? 50
                      : (3 - limited_count) * 100 + 200 * (limited_count === 0);
                  era.add('flag:현재명성', -relation);
                  relation /= 2;
                } else {
                  era.set(`base:${ret[1]}:체중 편차`, 0);
                  era.set(`base:${ret[1]}:약물 잔류량`, 0);
                  era.set(`base:${ret[1]}:스트레스`, 0);
                  era.set(`status:${ret[1]}:밤샘`, 0);
                  era.set(`status:${ret[1]}:살찜`, 0);
                  era.set(`status:${ret[1]}:편두통`, 0);
                  era.set(`status:${ret[1]}:부상`, 0);
                  era.set(`status:${ret[1]}:피로`, 0);
                  sys_change_motivation(ret[1], 4);
                  era.set(`status:${ret[1]}:연습X서수`, 1);
                  era.add('flag:현재명성', -800);
                  relation = 400;
                }
              }
            } else {
              era.print('조건을 만족하는 대상이 없습다……');
            }
            break;
        }
        if (relation) {
          era.print([
            god.get_colored_name(),
            '이(가) ',
            me.get_colored_name(),
            '의 소원을 들어주었다.',
          ]);
          era.println();
          CustomizedCheck.like_chara(god.id, 0, relation);
        } else {
          era.print([
            me.get_colored_name(),
            '은(는) ',
            god.get_colored_name(),
            '에게 비는 것을 그만두었다……',
          ]);
        }
      },
    };
  }

  is_prison() {
    return false;
  }

  is_rape_in_sleeping() {
    if (era.get(`cflag:${this.id}:모집상태`) !== recruit_flags.yes) {
      return false;
    }
    return super.is_rape_in_sleeping();
  }
};