const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_to_string } = require('#/utils/list-utils');

const { growth_info, unknown_info } = require('#/data/exp-const');

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate(chara, flags) {
    const hand_exp_list = [],
      foot_exp_list = [];
    if (flags.in_growth) {
      hand_exp_list.push(growth_info);
      foot_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        if (era.get(`talent:${chara.id}:신의손`)) {
          hand_exp_list.push('애무 기술이 신의 경지에 달해, 손가락 놀림만으로 상대의 넋을 빼놓는다');
        }
        push_link_break(hand_exp_list);

        if (era.get(`talent:${chara.id}:신의발`)) {
          foot_exp_list.push(
            '발놀림에 1mm의 오차도 허용하지 않으며, 신의 경지에 달한 풋잡 기술을 선보인다',
          );
        }
        push_link_break(foot_exp_list);
      }
      if (flags.show_exp) {
        const touch_body_count = era.get(`exp:${chara.id}:신체만지기횟수`),
          touch_breast_count = era.get(`exp:${chara.id}:가슴주무르기횟수`),
          handjob_count = era.get(`exp:${chara.id}:핸드잡횟수`),
          touch_virgin_count = era.get(`exp:${chara.id}:보지비비기횟수`),
          touch_anal_count = era.get(`exp:${chara.id}:항문자위횟수`);
        const hand_job_exp = era.get(`cstr:${chara.id}:첫수음경험`),
          unknown_hand_job_exp = era.get(`cstr:${chara.id}:무자각첫수음경험`);

        if (hand_job_exp) {
          hand_exp_list.push(get_filled_exp_str(hand_job_exp, chara.id));
        }
        if (flags.show_all_exp || hand_job_exp) {
          if (unknown_hand_job_exp) {
            hand_exp_list.push(
              get_filled_exp_str(unknown_hand_job_exp, chara.id),
            );
          }
          if (handjob_count || touch_virgin_count || touch_anal_count) {
            hand_exp_list.push(
              join_to_string(
                [
                  handjob_count
                    ? `성기를 손으로 달랜 횟수 ${handjob_count.toLocaleString()}회`
                    : '',
                  touch_virgin_count
                    ? `음부를 손가락으로 건드린 횟수 ${touch_virgin_count.toLocaleString()}회`
                    : '',
                  touch_anal_count
                    ? `항문을 손가락으로 애무한 횟수 ${touch_anal_count.toLocaleString()}회`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if (touch_body_count || touch_breast_count) {
          hand_exp_list.push(
            join_to_string(
              [
                touch_body_count
                  ? `신체를 어루만진 횟수 ${touch_body_count.toLocaleString()}회`
                  : '',
                touch_breast_count
                  ? `가슴을 주무른 횟수 ${touch_breast_count.toLocaleString()}회`
                  : '',
              ],
              '，',
            ),
          );
        }

        const step_on_body_count = era.get(`exp:${chara.id}:밟기횟수`),
          foot_job_count = era.get(`exp:${chara.id}:육봉밟기횟수`),
          step_on_virgin_count = era.get(`exp:${chara.id}:보지밟기횟수`);
        const foot_job_exp = era.get(`cstr:${chara.id}:첫풋잡경험`),
          unknown_foot_job_exp = era.get(`cstr:${chara.id}:무자각첫풋잡경험`);

        if (foot_job_exp) {
          foot_exp_list.push(get_filled_exp_str(foot_job_exp, chara.id));
        }
        if (flags.show_all_exp || foot_job_exp) {
          if (unknown_foot_job_exp) {
            foot_exp_list.push(
              get_filled_exp_str(unknown_foot_job_exp, chara.id),
            );
          }
          if (foot_job_count || step_on_virgin_count) {
            foot_exp_list.push(
              join_to_string(
                [
                  foot_job_count
                    ? `발로 성기를 애무한 횟수 ${foot_job_count.toLocaleString()}회`
                    : '',
                  step_on_virgin_count
                    ? `발로 음부를 자극한 횟수 ${step_on_virgin_count.toLocaleString()}회`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if (step_on_body_count) {
          foot_exp_list.push(
            `발로 신체를 짓밟은 횟수 ${step_on_body_count.toLocaleString()}회`,
          );
        }
      } else {
        hand_exp_list.push(unknown_info(chara.id));
        foot_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(hand_exp_list);
      remove_end_line_breaks(foot_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: '신체정보[손]', position: 'left' },
          },
          ...hand_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
          {
            type: 'divider',
            config: { content: '신체정보[발]', position: 'left' },
          },
          ...foot_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: '육체정보[손발]',
};
