const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_to_string } = require('#/utils/list-utils');

const { growth_info, unknown_info } = require('#/data/exp-const');

const anal_semen_desc = [
  '',
  '직장이 가만히 있지 못하고 근질거린다',
  '행복감을 느끼게 된다',
  '직장이 행복감에 젖어 꿈틀거리기 시작한다',
];

const page_name = '육체정보[엉덩이]';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const anal_exp_list = [];
    if (flags.in_growth) {
      anal_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        if (era.get(`talent:${chara.id}:마성의엉덩이`)) {
          anal_exp_list.push('모든 것을 삼켜버릴 듯한 탄력 있는 블랙홀은, 한 번 들어가면 절대 놓아주지 않을 것 같다……');
        }
        if (era.get(`talent:${chara.id}:음란한엉덩이`) === 2) {
          anal_exp_list.push(
            '언제나 따뜻한 것으로 채워지길 갈구하는 직장…… 이미 음란한 애널이 되어버렸다……',
          );
        }
        const in_intestine_semen = era.get(`cflag:${chara.id}:장내정액`);
        if (in_intestine_semen) {
          anal_exp_list.push(
            join_to_string(
              [
                '하의 뒷부분이 젖어 있다...',
                flags.mark_level >= 3
                  ? `애널 안에 아직 ${in_intestine_semen.toLocaleString()}ml의 정액이 남아있다……`
                  : undefined,
              ],
              '',
            ),
          );
        }
        push_link_break(anal_exp_list);
      }
      if (flags.show_exp) {
        const anal_sex_count = era.get(`exp:${chara.id}:애널횟수`),
          cum_in_anal = era.get(`exp:${chara.id}:장내사정횟수`),
          anal_semen = era.get(`exp:${chara.id}:장내정액량`),
          anal_orgasm_count = era.get(`exp:${chara.id}:애널절정횟수`),
          anal_semen_talent =
            era.get(`talent:${chara.id}:정액관장`) * 2 +
            era.get(`talent:${chara.id}:창자민감`);
        const anal_sex_exp = era.get(`cstr:${chara.id}:첫애널경험`),
          unknown_anal_sex_exp = era.get(`cstr:${chara.id}:무자각첫애널경험`);

        if (anal_sex_exp) {
          anal_exp_list.push(get_filled_exp_str(anal_sex_exp, chara.id));
        }
        if (flags.show_all_exp || anal_sex_exp) {
          if (unknown_anal_sex_exp) {
            anal_exp_list.push(
              get_filled_exp_str(unknown_anal_sex_exp, chara.id),
            );
          }
          if (anal_sex_count || cum_in_anal) {
            anal_exp_list.push(
              join_to_string(
                [
                  anal_sex_count
                    ? `뒷구멍을 유린당한 횟수 ${anal_sex_count.toLocaleString()}회`
                    : '',
                  cum_in_anal
                    ? `${cum_in_anal.toLocaleString()}회의 사정을 받아내어, 총 ${anal_semen.toLocaleString()}ml 의 정액이 주입됨`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if ((flags.mark_level >= 3 || cum_in_anal) && anal_semen_talent) {
          anal_exp_list.push(
            `따뜻한 정액이 쏟아져 들어올 때마다, ${anal_semen_desc[anal_semen_talent]}`,
          );
        }
        push_link_break(anal_exp_list);

        if (anal_orgasm_count) {
          anal_exp_list.push(
            `뒷구멍을 통한 쾌감으로 ${anal_orgasm_count.toLocaleString()}회 절정함`,
          );
        }
      } else {
        anal_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(anal_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...anal_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
