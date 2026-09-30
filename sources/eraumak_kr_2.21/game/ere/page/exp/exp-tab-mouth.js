const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_to_string } = require('#/utils/list-utils');

const { growth_info, unknown_info } = require('#/data/exp-const');

const drunk_semen_desc = [
  '',
  '목구멍이 가만히 있질 못한다',
  '행복을 느낀다',
  '목구멍이 행복감에 꿈틀거린다',
];

const page_name = '육체정보[입]';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const mouth_exp_list = [];
    if (flags.in_growth) {
      mouth_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const in_stomach_semen = era.get(`cflag:${chara.id}:복부내정액`);
        if (era.get(`talent:${chara.id}:방탕한입술`)) {
          mouth_exp_list.push(
            '완벽하게 구조된 입술과 구강은, 천부적인 흡입력으로 어떤 상대라도 금방 항복하게 만든다……',
          );
        }
        if (era.get(`talent:${chara.id}:음란한입`) === 2) {
          mouth_exp_list.push(
            '언제 어디서든 입안의 허전함과 가려움을 느낀다…… 이미 음탕하기 그지없는 입술이 되어버렸다……',
          );
        }
        if (in_stomach_semen) {
          mouth_exp_list.push(
            join_to_string(
              [
                '입가에 옅은 백탁액이 묻어 있다……',
                flags.mark_level >= 3
                  ? `방금 막 ${in_stomach_semen.toLocaleString()}ml의 정액을 들이켠 듯한 모습이다……`
                  : undefined,
              ],
              '',
            ),
          );
        }
        push_link_break(mouth_exp_list);
      }
      if (flags.show_exp) {
        const kiss_count = era.get(`exp:${chara.id}:키스횟수`);
        const suck_count = era.get(`exp:${chara.id}:핥기흡입횟수`);
        const blow_job_count = era.get(`exp:${chara.id}:오랄횟수`);
        const mouth_orgasm_count = era.get(`exp:${chara.id}:구강절정횟수`);
        const drunk_semen = era.get(`exp:${chara.id}:정액음용량`);
        const drunk_milk = era.get(`exp:${chara.id}:가슴빨기양`);
        const drunk_semen_talent =
          era.get(`talent:${chara.id}:정액음용중독`) * 2 +
          era.get(`talent:${chara.id}:목구멍민감`);
        const kiss_exp = era.get(`cstr:${chara.id}:첫키스경험`);
        const unknown_kiss_exp = era.get(`cstr:${chara.id}:무자각첫키스경험`);
        const blow_job_exp = era.get(`cstr:${chara.id}:첫펠라경험`);
        const unknown_blow_job_exp = era.get(
          `cstr:${chara.id}:무자각첫펠라경험`,
        );
        const drunk_semen_exp = era.get(`cstr:${chara.id}:첫정음경험`);
        const unknown_drunk_semen_exp = era.get(
          `cstr:${chara.id}:무자각첫정음경험`,
        );
        const drunk_milk_exp = era.get(`cstr:${chara.id}:첫가슴빨기경험`);
        let drunk_secretion_exp = era.get(`cstr:${chara.id}:첫애액음용경험`);
        if (
          Array.isArray(drunk_secretion_exp) &&
          drunk_secretion_exp.length === 0
        ) {
          drunk_secretion_exp = undefined;
        }
        let unknown_drunk_secretion_exp = era.get(
          `cstr:${chara.id}:무자각첫애액음용경험`,
        );
        if (
          Array.isArray(unknown_drunk_secretion_exp) &&
          unknown_drunk_secretion_exp.length === 0
        ) {
          unknown_drunk_secretion_exp = undefined;
        }
        const drunk_secretion = era.get(`exp:${chara.id}:애액음용량`);
        if (kiss_exp) {
          mouth_exp_list.push(get_filled_exp_str(kiss_exp, chara.id));
        }
        if (flags.show_all_exp || kiss_exp) {
          if (unknown_kiss_exp) {
            mouth_exp_list.push(get_filled_exp_str(unknown_kiss_exp, chara.id));
          }
          if (kiss_count) {
            mouth_exp_list.push(`키스 횟수 ${kiss_count.toLocaleString()}회`);
          }
        }
        push_link_break(mouth_exp_list);

        if (blow_job_exp) {
          mouth_exp_list.push(get_filled_exp_str(blow_job_exp, chara.id));
        }
        if (flags.show_all_exp || blow_job_exp) {
          if (unknown_blow_job_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(unknown_blow_job_exp, chara.id),
            );
          }
          if (suck_count || blow_job_count) {
            mouth_exp_list.push(
              join_to_string(
                [
                  suck_count > 0
                    ? `신체를 핥고 빨아준 횟수: ${suck_count.toLocaleString()}회`
                    : void 0,
                  blow_job_count > 0
                    ? `펠라치오 횟수: ${blow_job_count.toLocaleString()}회`
                    : void 0,
                ],
                '，',
              ),
            );
          }
        }
        push_link_break(mouth_exp_list);

        if (drunk_semen_exp) {
          mouth_exp_list.push(get_filled_exp_str(drunk_semen_exp, chara.id));
        }
        if (flags.show_all_exp || drunk_semen_exp) {
          if (unknown_drunk_semen_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(unknown_drunk_semen_exp, chara.id),
            );
          }
          if (drunk_semen > 0) {
            mouth_exp_list.push(
              `정액 음용량: ${drunk_semen.toLocaleString()}ml`,
            );
          }
        }
        if ((flags.mark_level >= 3 || drunk_semen > 0) && drunk_semen_talent) {
          mouth_exp_list.push(
            `따뜻한 정액을 들이켤 때마다, ${drunk_semen_desc[drunk_semen_talent]}`,
          );
        }
        push_link_break(mouth_exp_list);
        if (drunk_secretion_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(drunk_secretion_exp, chara.id),
          );
        }
        if (flags.show_all_exp || drunk_secretion_exp) {
          if (unknown_drunk_secretion_exp) {
            mouth_exp_list.push(
              get_filled_exp_str(unknown_drunk_semen_exp, chara.id),
            );
          }
          if (drunk_secretion > 0) {
            mouth_exp_list.push(
              `애액 음용량: ${drunk_secretion.toLocaleString()}ml`,
            );
          }
        }
        push_link_break(mouth_exp_list);
        if (drunk_milk_exp) {
          mouth_exp_list.push(
            get_filled_exp_str(drunk_milk_exp, chara.id),
            `모유 음용량: ${drunk_milk.toLocaleString()}ml`,
          );
        }
        push_link_break(mouth_exp_list);

        if (mouth_orgasm_count) {
          mouth_exp_list.push(
            `구강 쾌감으로 인한 절정 횟수: ${mouth_orgasm_count.toLocaleString()}회`,
          );
        }
      } else {
        mouth_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(mouth_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...mouth_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
