const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_to_string } = require('#/utils/list-utils');

const { sex_slave_title } = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');

const page_name = '육체정보[SM]';

const sm_talent_desc = ['', '매도당하는', '매를 맞는', '능욕당하는'];

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const sm_exp_list = [];
    if (flags.in_growth) {
      sm_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const sm_talent =
          era.get(`talent:${chara.id}:매도좋아함`) +
          2 * era.get(`talent:${chara.id}:고통좋아함`);
        if (era.get(`talent:${chara.id}:도S`)) {
          sm_exp_list.push(
            `마치 타인을 학대하기 위해 태어난 듯한 새디스트 ${
              sex_slave_title[chara.sex_code]
            }. 타인을 능욕하는 상상만으로도 흥분해 버린다.`,
          );
        }
        if (sm_talent) {
          sm_exp_list.push(
            `마치 학대당하기 위해 태어난 듯한 마조히스트 ${
              sex_slave_title[chara.sex_code]
            }. 타인에게 ${sm_talent_desc[sm_talent]} 상상만으로도 흥분해 버린다.`,
          );
        }
        if (sm_exp_list.length === 2) {
          sm_exp_list[1] = `동시에 ${sm_exp_list[1]}`;
        }
        push_link_break(sm_exp_list);
      }
      if (flags.show_exp) {
        const abuse_count = era.get(`exp:${chara.id}:매도횟수`),
          hit_count = era.get(`exp:${chara.id}:타격횟수`),
          s_orgasm_count = era.get(`exp:${chara.id}:가학절정횟수`),
          abused_count = era.get(`exp:${chara.id}:매도당한횟수`),
          be_hit_count = era.get(`exp:${chara.id}:맞은횟수`),
          m_orgasm_count = era.get(`exp:${chara.id}:피학절정횟수`);
        const sadism_exp = era.get(`cstr:${chara.id}:첫가학경험`),
          masochism_exp = era.get(`cstr:${chara.id}:첫피학경험`);

        if (sadism_exp) {
          sm_exp_list.push(get_filled_exp_str(sadism_exp, chara.id));
        }
        if (abuse_count || hit_count) {
          sm_exp_list.push(
            join_to_string(
              [
                abuse_count
                  ? `타인을 매도한 횟수 ${abuse_count.toLocaleString()}회`
                  : '',
                hit_count ? `타인을 때린 횟수 ${hit_count.toLocaleString()}회` : '',
              ],
              '，',
            ),
          );
        }
        if (s_orgasm_count) {
          sm_exp_list.push(
            `가학적인 쾌감으로 ${s_orgasm_count.toLocaleString()}회 절정에 달함`,
          );
        }
        push_link_break(sm_exp_list);

        if (masochism_exp) {
          sm_exp_list.push(get_filled_exp_str(masochism_exp, chara.id));
        }
        if (abused_count || be_hit_count) {
          sm_exp_list.push(
            join_to_string(
              [
                abused_count
                  ? `매도당한 횟수 ${abused_count.toLocaleString()}회`
                  : '',
                be_hit_count
                  ? `매를 맞은 횟수 ${be_hit_count.toLocaleString()}회`
                  : '',
              ],
              '，',
            ),
          );
        }
        if (m_orgasm_count) {
          sm_exp_list.push(
            `피학적인 쾌감으로 ${m_orgasm_count.toLocaleString()}회 절정에 달함`,
          );
        }
      } else {
        sm_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(sm_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...sm_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
