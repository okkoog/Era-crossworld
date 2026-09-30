const era = require('#/era-electron');

const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const CharaTalk = require('#/utils/chara-talk');
const { join_to_string } = require('#/utils/list-utils');

const { sex_colors } = require('#/data/color-const');
const {
  hair_desc,
  penis_colors,
  penis_desc,
} = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');

const page_name = '육체정보[남성기]';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const penis_exp_list = [];
    if (flags.in_growth) {
      penis_exp_list.push(chara.sex_code ? growth_info : '이 부위는 존재하지 않는다...');
    } else {
      if (flags.show_body) {
        const penis_size = get_penis_size(chara.id);
        if (penis_size) {
          const p_type_code = era.get(`talent:${chara.id}:음핵타입`);
          const sex_hair_talent = era.get(`talent:${chara.id}:음모성장`),
            sex_hair = era.get(`cflag:${chara.id}:음모`);
          if (!sex_hair_talent) {
            penis_exp_list.push('태생적으로 매끈하다...');
          } else if (!sex_hair) {
            penis_exp_list.push('현재 깨끗하게 제모되었다...');
          } else {
            penis_exp_list.push(
              `아랫배에는 ${hair_desc[sex_hair - 1]}${
                sex_hair_talent === 2 ? '이 나 있으며, 무서운 속도로 자라나고 있다...' : ''
              }`,
            );
          }
          penis_exp_list.push([
            '가랑이 사이에는 ',
            !chara.sex_code ? '약물의 도움으로 얻어낸 ' : ' ',
            penis_desc[penis_size],
            ' 모습의 ',
            {
              content: penis_colors[p_type_code],
              color: sex_colors[p_type_code],
            },
            ' 육봉이 달려 있다',
          ]);
          if (era.get(`talent:${chara.id}:흉기`)) {
            penis_exp_list.push(
              '완벽한 흉기와도 같은 거근이며, 끝에서 배어 나오는 쿠퍼액만으로도 수태시킬 수 있을 것 같다……',
            );
          }
          if (era.get(`talent:${chara.id}:조루`) === 2) {
            penis_exp_list.push('정관이 건실하지 못해 쉽게 사정해 버린다...');
          }
        } else {
          penis_exp_list.push('아무것도 없다...');
        }
        push_link_break(penis_exp_list);
      }
      if (flags.show_exp) {
        const body_sex_count = era.get(`exp:${chara.id}:신체찌르기횟수`),
          virgin_sex_count = era.get(`exp:${chara.id}:음부찌르기횟수`),
          active_anal_sex_count = era.get(`exp:${chara.id}:항문찌르기횟수`),
          penis_orgasm_count = era.get(`exp:${chara.id}:음경절정횟수`),
          semen = era.get(`exp:${chara.id}:사정량`),
          fuck_sleep_virgin = era.get(`exp:${chara.id}:음경수면간`),
          sleep_penis = era.get(`exp:${chara.id}:음경수면간당함`);
        const penis_exp = era.get(`cstr:${chara.id}:동정상실경험`),
          unknown_penis_exp = era.get(`cstr:${chara.id}:무자각동정상실경험`),
          cum_semen_exp = era.get(`cstr:${chara.id}:첫질내사정경험`),
          unknown_cum_semen_exp = era.get(
            `cstr:${chara.id}:무자각첫질내사정경험`,
          );
        if (penis_exp) {
          penis_exp_list.push(get_filled_exp_str(penis_exp, chara.id));
        }
        if (flags.show_all_exp || penis_exp) {
          if (unknown_penis_exp) {
            penis_exp_list.push(
              get_filled_exp_str(unknown_penis_exp, chara.id),
            );
          }
          if (body_sex_count || virgin_sex_count || active_anal_sex_count) {
            penis_exp_list.push(
              join_to_string(
                [
                  body_sex_count
                    ? `신체 부위 삽입 ${body_sex_count.toLocaleString()}회`
                    : '',
                  virgin_sex_count
                    ? `음핵 및 보지 삽입 ${virgin_sex_count.toLocaleString()}회`
                    : '',
                  active_anal_sex_count
                    ? `애널 삽입 ${active_anal_sex_count.toLocaleString()}회`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(penis_exp_list);

        if (cum_semen_exp) {
          penis_exp_list.push(get_filled_exp_str(cum_semen_exp, chara.id));
        }
        if (flags.show_all_exp || cum_semen_exp) {
          if (unknown_cum_semen_exp) {
            penis_exp_list.push(
              get_filled_exp_str(unknown_cum_semen_exp, chara.id),
            );
          }
          if (penis_orgasm_count) {
            penis_exp_list.push(
              join_to_string(
                [
                  penis_orgasm_count
                    ? `사정 횟수 ${penis_orgasm_count.toLocaleString()}회`
                    : '',
                  semen ? `총 사정량 ${semen.toLocaleString()}ml` : '',
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(penis_exp_list);

        if (flags.show_all_exp || penis_exp) {
          if (fuck_sleep_virgin) {
            penis_exp_list.push(
              `깊이 잠든 사이 ${
                chara.id ? ` ${CharaTalk.me.name}` : '타인'
              }을 범한 횟수 ${fuck_sleep_virgin > 1 ? ` ${fuck_sleep_virgin.toLocaleString()}회` : ''}`,
            );
          }
          if (sleep_penis) {
            penis_exp_list.push(
              `깊이 잠든 사이 범해전 적 ${
                sleep_penis > 1 ? ` ${sleep_penis.toLocaleString()} 회` : ''
              } 깨닫지 못했음`,
            );
          }
        }
      } else {
        penis_exp_list.push(
          chara.sex_code ? unknown_info(chara.id) : '이 부위는 존재하지 않는다...',
        );
      }
      remove_end_line_breaks(penis_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...penis_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
