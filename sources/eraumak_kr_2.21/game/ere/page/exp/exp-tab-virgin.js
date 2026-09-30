const era = require('#/era-electron');

const {
  get_penis_size,
  get_pregnant_ratio,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const CharaTalk = require('#/utils/chara-talk');
const { join_to_string } = require('#/utils/list-utils');

const { sex_colors } = require('#/data/color-const');
const { baby_limit } = require('#/data/ero/orgasm-const');
const {
  hair_desc,
  pregnant_stage_enum,
  pregnant_stage_names,
  unexpected_pregnant_enum,
} = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const { growth_info, unknown_info } = require('#/data/exp-const');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const page_name = '육체정보[여성기]';

const virgin_semen_desc = [
  '',
  '자궁이 근질근질해서 견딜 수 없다',
  '행복을 느끼고 있다',
  '자궁이 행복감에 젖어 꿈틀거린다',
];

const virgin_color_desc = ['발그레하고 가련한', '붉은빛 도는 자줏빛', '성숙한 빛깔'];

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean,true_mark_level:number}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const virgin_exp_list = [];
    if (flags.in_growth) {
      virgin_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const penis_size = get_penis_size(chara.id);
        if (!penis_size) {
          const sex_hair_talent = era.get(`talent:${chara.id}:음모성장`),
            sex_hair = era.get(`cflag:${chara.id}:음모`);
          if (!sex_hair_talent) {
            virgin_exp_list.push('태생적으로 매끈하고 가련하다...');
          } else if (!sex_hair) {
            virgin_exp_list.push('털 하나 없이 매끈하고 가련하다...');
          } else {
            virgin_exp_list.push(
              `아랫배에는 ${hair_desc[sex_hair - 1]}${
                sex_hair_talent === 2 ? '이 나 있으며, 무서운 속도로 자라나고 있다...' : ''
              }`,
            );
          }
        }
        const in_womb_semen = era.get(`cflag:${chara.id}:자궁내정액`),
          v_type_code = era.get(`talent:${chara.id}:음핵타입`);
        virgin_exp_list.push([
          !penis_size ? '가랑이 사이에는' : '',
          ' ',
          {
            content: virgin_color_desc[v_type_code],
            color: sex_colors[v_type_code],
          },
          ' 비소가 자리하고 있다',
        ]);
        if (era.get(`talent:${chara.id}:명기`)) {
          virgin_exp_list.push(
            '마치 살아있는 생물과도 같은 구멍은, 방문하는 어떤 손님이라도 그저 쥐어짜일 뿐이다……',
          );
        }
        const clitoris_talent =
            !get_penis_size(chara.id) && era.get(`talent:${chara.id}:음란한클리토리스`),
          virgin_talent = era.get(`talent:${chara.id}:음란한자궁`);
        if (clitoris_talent === 2) {
          virgin_exp_list.push(
            '살짝만 문질러도 충혈되어 발기한다…… 이미 음란한 콩알이 되어버렸다……',
          );
        }
        if (virgin_talent === 2) {
          virgin_exp_list.push(
            '24시간 내내 애액을 분비하며 삽입을 기다린다…… 이미 음란한 구멍이 되어버렸다……',
          );
        }
        if (clitoris_talent === 2 && virgin_talent === 2) {
          virgin_exp_list[virgin_exp_list.length - 1] = `同时 ${
            virgin_exp_list[virgin_exp_list.length - 1]
          }`;
        }
        if (in_womb_semen) {
          virgin_exp_list.push(
            join_to_string(
              [
                '허벅지 안쪽에 정액이 점점이 흩어져 있다……',
                flags.mark_level >= 3
                  ? `질내에는 약 ${in_womb_semen.toLocaleString()}ml 의 정액이 남아있다...`
                  : undefined,
              ],
              '',
            ),
          );
        }
        push_link_break(virgin_exp_list);
      }
      if (flags.show_exp) {
        const virgin_touched_count = era.get(`exp:${chara.id}:음부장난횟수`);
        const penis_sex_count = era.get(`exp:${chara.id}:성교횟수`);
        const clitoris_orgasm_count = era.get(`exp:${chara.id}:클리절정횟수`);
        const virgin_orgasm_count = era.get(`exp:${chara.id}:질구절정횟수`);
        const clitoris_semen = era.get(`exp:${chara.id}:클리부착정액량`);
        const cum_in_virgin = era.get(`exp:${chara.id}:질내사정횟수`);
        const virgin_semen = era.get(`exp:${chara.id}:질내정액량`);
        const fuck_sleep_penis = era.get(`exp:${chara.id}:질수면간`);
        const sleep_virgin = era.get(`exp:${chara.id}:질수면간당함`);
        const virgin_semen_talent =
          era.get(`talent:${chara.id}:정액착취중독`) * 2 +
          era.get(`talent:${chara.id}:자궁민감`);
        const virgin_exp = era.get(`cstr:${chara.id}:처녀상실경험`);
        const unknown_virgin_exp = era.get(`cstr:${chara.id}:무자각처녀상실경험`);
        const cummed_exp = era.get(`cstr:${chara.id}:질내사정당한경험`);
        const unknown_cummed_exp = era.get(
          `cstr:${chara.id}:무자각첫질내사정당한경험`,
        );
        let squirt_exp = era.get(`cstr:${chara.id}:첫시오후키경험`);
        if (Array.isArray(squirt_exp) && squirt_exp.length === 0) {
          squirt_exp = undefined;
        }
        let unknown_squirt_exp = era.get(`cstr:${chara.id}:무자각첫시오후키경험`);
        if (
          Array.isArray(unknown_squirt_exp) &&
          unknown_squirt_exp.length === 0
        ) {
          unknown_squirt_exp = undefined;
        }
        const squirt = era.get(`exp:${chara.id}:시오후키횟수`);
        const secretion = era.get(`exp:${chara.id}:애액분비량`);
        if (virgin_exp) {
          virgin_exp_list.push(get_filled_exp_str(virgin_exp, chara.id));
        }
        if (flags.show_all_exp || virgin_exp) {
          if (unknown_virgin_exp) {
            virgin_exp_list.push(
              get_filled_exp_str(unknown_virgin_exp, chara.id),
            );
          }
          if (virgin_touched_count || penis_sex_count) {
            virgin_exp_list.push(
              join_to_string(
                [
                  virgin_touched_count
                    ? `애무받은 횟수 ${virgin_touched_count.toLocaleString()}회`
                    : void 0,
                  penis_sex_count
                    ? `삽입당한 횟수 ${penis_sex_count.toLocaleString()}회`
                    : void 0,
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(virgin_exp_list);

        if (cummed_exp) {
          virgin_exp_list.push(get_filled_exp_str(cummed_exp, chara.id));
        }
        if (flags.show_all_exp || cummed_exp) {
          if (unknown_cummed_exp) {
            virgin_exp_list.push(
              get_filled_exp_str(unknown_cummed_exp, chara.id),
            );
          }
          if (clitoris_semen || virgin_semen) {
            virgin_exp_list.push(
              join_to_string(
                [
                  clitoris_semen
                    ? `정액 오염량 ${clitoris_semen.toLocaleString()}ml`
                    : '',
                  virgin_semen
                    ? `${cum_in_virgin.toLocaleString()}회의 질내사정을 받아들여, 총 ${virgin_semen.toLocaleString()}ml의 정액이 사정됨`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if ((flags.mark_level >= 3 || virgin_semen) && virgin_semen_talent) {
          virgin_exp_list.push(
            `따뜻한 정액이 질 내에 쏟아질 때마다, ${virgin_semen_desc[virgin_semen_talent]}`,
          );
        }
        push_link_break(virgin_exp_list);

        if (squirt_exp) {
          virgin_exp_list.push(get_filled_exp_str(squirt_exp, chara.id));
        }
        if (flags.show_all_exp || squirt_exp) {
          if (unknown_squirt_exp) {
            virgin_exp_list.push(
              get_filled_exp_str(unknown_squirt_exp, chara.id),
            );
          }
        }
        if (squirt > 0) {
          virgin_exp_list.push(
            join_to_string(
              [
                clitoris_orgasm_count > 0
                  ? `클리토리스 절정 ${clitoris_orgasm_count.toLocaleString()}회`
                  : '',
                virgin_orgasm_count > 0
                  ? `질 절정 ${virgin_orgasm_count.toLocaleString()}회`
                  : '',
              ],
              '，',
            ),
          );
          virgin_exp_list.push(
            `총 분수 횟수 ${squirt.toLocaleString()}회, 애액 분비량 ${secretion.toLocaleString()}ml`,
          );
        } else if (secretion > 0) {
          virgin_exp_list.push(`총 애액 분비량 ${secretion.toLocaleString()}ml`);
        }
        push_link_break(virgin_exp_list);

        if (flags.show_all_exp || virgin_exp) {
          if (fuck_sleep_penis) {
            virgin_exp_list.push(
              `깊이 잠든 틈을 타 ${
                chara.id ? ` ${CharaTalk.me.name}` : '타인'
              }을 범한 횟수 ${fuck_sleep_penis > 1 ? ` ${fuck_sleep_penis.toLocaleString()}회` : ''}`,
            );
          }
          if (sleep_virgin) {
            virgin_exp_list.push(
              `깊이 잠든 틈을 타 ${
                sleep_virgin > 1 ? ` ${sleep_virgin.toLocaleString()}회` : ''
              } 범해졌음`,
            );
          }
        }
      } else {
        virgin_exp_list.push(unknown_info(chara.id));
      }
    }
    push_link_break(virgin_exp_list);

    const pregnant_stage = era.get(`cflag:${chara.id}:임신단계`);
    const pregnant_timer = era.get(`cflag:${chara.id}:임신주수`);
    let is_preg = false;
    let pregnant_buffer = '';
    if (flags.in_growth) {
      pregnant_buffer = '아직 초경도 오지 않았음';
    } else if (era.get(`status:${chara.id}:생리`)) {
      pregnant_buffer = '현재 월경 중';
    } else if (pregnant_stage === 1 << pregnant_stage_enum.resume) {
      pregnant_buffer = pregnant_stage_names[1 << pregnant_stage_enum.resume];
      if (flags.mark_level) {
        pregnant_buffer += ` (${pregnant_timer} 周)`;
      }
    } else if (
      pregnant_stage === 1 << pregnant_stage_enum.no ||
      (pregnant_timer < 4 && flags.true_mark_level <= 2)
    ) {
      if (
        chara.id > 0 &&
        flags.mark_level >= 2 &&
        era.get(`exp:${chara.id}:출산횟수`) >= baby_limit
      ) {
        pregnant_buffer = '더 이상 아이를 가질 수 없는 몸이다...';
      } else if (!chara.id || flags.mark_level >= 1) {
        switch (
          (era.get('flag:현재주') - era.get(`cflag:${chara.id}:생리주기`) + 4) %
          4
        ) {
          case 0:
          case 2:
            pregnant_buffer = '난자가 수정을 기다리는 중❤️ ';
            break;
          case 1:
            pregnant_buffer = '새 난자가 성장 중 ';
            break;
          case 3:
            pregnant_buffer = '난자의 수명이 다해 배출을 기다리는 중';
        }
      } else {
        pregnant_buffer = pregnant_stage_names[1 << pregnant_stage_enum.no];
      }
      if (flags.true_mark_level === 3) {
        pregnant_buffer += `(임신율 ${(
          get_pregnant_ratio(chara.id) * 100
        ).toFixed(2)}%)`;
      }
    } else {
      is_preg = true;
      if (flags.mark_level >= 2) {
        pregnant_buffer = pregnant_stage_names[pregnant_stage];
      } else if (pregnant_stage >> pregnant_stage_enum.fetal > 0) {
        pregnant_buffer = '배가 눈에 띄게 불러와 있다';
      } else {
        pregnant_buffer =
          '아직 배에 큰 변화는 없지만 바뀐 생활 습관과 검사 결과가 새로운 생명의 탄생을 알리고 있다';
      }
      if (flags.mark_level) {
        pregnant_buffer += ` (${pregnant_timer} 주)`;
      }
    }
    virgin_exp_list.push(pregnant_buffer);
    const life_marks = LifeEventMarks.get_marks(chara.id);
    if (is_preg) {
      if (
        life_marks.unexpected_pregnant !== unexpected_pregnant_enum.mother_sleep
      ) {
        if (flags.true_mark_level === 3 || !life_marks.report) {
          virgin_exp_list.push([
            '아이의 아버지는 ',
            sys_get_colored_callname(chara.id, life_marks.sperm),
          ]);
        }
      } else if (chara.id > 0) {
        const me = get_chara_talk(0);
        virgin_exp_list.push([
          me.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '의 뱃속 아이의 아버지가 ',
          me.get_colored_name(),
          ' 임을 알고 있다'
        ]);
      } else if (life_marks.report === -1) {
        virgin_exp_list.push([
          '아이의 아버지는 ',
          sys_get_colored_callname(chara.id, life_marks.sperm),
          ' (으)로 확인되었다'
        ]);
      }
    }

    remove_end_line_breaks(virgin_exp_list);
    return {
      print() {
        return [
          {
            config: { content: page_name, position: 'left' },
            type: 'divider',
          },
          ...virgin_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
  virgin: true,
};
