const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_to_string } = require('#/utils/list-utils');

const { sex_colors } = require('#/data/color-const');
const { breast_size } = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');
const { get_breast_cup } = require('#/data/info-generator');

const nipple_type = ['분홍빛 어린 딸기', '짙은 색 앵두', '깊고 그윽한 화산호'];

const page_name = '육체정보[가슴]';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const breast_exp_list = [];
    if (flags.in_growth) {
      breast_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        if (chara.sex_code === 1) {
          breast_exp_list.push('건실한 대흉근');
        } else {
          let cup = get_breast_cup(chara.id);
          if (cup > 'G') {
            cup = 'G';
          }
          const n_type_code = era.get(`talent:${chara.id}:유두타입`);
          breast_exp_list.push([
            '끝부분에는 ',
            {
              content: nipple_type[n_type_code],
              color: sex_colors[Math.min(n_type_code, 1)],
            },
            ` 가 자리 잡은 ${breast_size[cup]} 유방`,
          ]);
          if (era.get(`talent:${chara.id}:요염한유방`)) {
            breast_exp_list.push(
              '아름다운 곡선을 그리는 축복받은 풍만함, 완벽한 탄력은 그 어떤 방문자라도 넋을 잃게 만든다……',
            );
          }
          if (era.get(`talent:${chara.id}:음란한가슴`) === 2) {
            breast_exp_list.push(
              '언제 어디서나 가려움과 허전함을 느끼고 있다…… 이미 음란한 유방이 되어버렸다……',
            );
          }
          if (era.get(`talent:${chara.id}:모유분비`)) {
            const tmp = era.get(`ex:${chara.id}:분유방해`);
            breast_exp_list.push(
              '만약 옷 앞섶이 조금 젖어 있다면……그저 땀일 뿐일까..?' +
                (tmp && flags.mark_level === 3
                  ? `；니플 클립에 가로막혀, 현재 ${tmp.toLocaleString()}ml의 우유가 고여 있다…… 유두가 너무 아프다……`
                  : ''),
            );
          }
        }
        push_link_break(breast_exp_list);
      }
      if (flags.show_exp) {
        if (chara.sex_code - 1) {
          const breast_touched_count = era.get(`exp:${chara.id}:착유횟수`),
            tit_job_count = era.get(`exp:${chara.id}:파이즈리횟수`),
            breast_semen = era.get(`exp:${chara.id}:가슴부착정액량`),
            breast_orgasm_count = era.get(`exp:${chara.id}:가슴절정횟수`),
            milking_count = era.get(`exp:${chara.id}:수유횟수`),
            milk_amount = era.get(`exp:${chara.id}:분유량`);
          const milk_exp = era.get(`cstr:${chara.id}:첫착유경험`),
            unknown_milk_exp = era.get(`cstr:${chara.id}:무자각첫착유경험`),
            tit_job_exp = era.get(`cstr:${chara.id}:첫파이즈리경험`),
            unknown_tit_job_exp = era.get(
              `cstr:${chara.id}:무자각첫파이즈리경험`,
            ),
            milking_exp = era.get(`cstr:${chara.id}:첫수유경험`);
          if (milk_exp) {
            breast_exp_list.push(get_filled_exp_str(milk_exp, chara.id));
          }
          if (flags.show_all_exp || milk_exp) {
            if (unknown_milk_exp) {
              breast_exp_list.push(
                get_filled_exp_str(unknown_milk_exp, chara.id),
              );
            }
            if (breast_touched_count) {
              breast_exp_list.push(
                `가슴을 유린당한 횟수 ${breast_touched_count.toLocaleString()}회`,
              );
            }
          }
          push_link_break(breast_exp_list);

          if (tit_job_exp) {
            breast_exp_list.push(get_filled_exp_str(tit_job_exp, chara.id));
          }
          if (flags.show_all_exp || tit_job_exp) {
            if (unknown_tit_job_exp) {
              breast_exp_list.push(
                get_filled_exp_str(unknown_tit_job_exp, chara.id),
              );
            }
            if (tit_job_count || breast_semen) {
              breast_exp_list.push(
                join_to_string(
                  [
                    tit_job_count
                      ? `가슴으로 성기를 달랜 횟수 ${tit_job_count.toLocaleString()}회`
                      : '',
                    breast_semen
                      ? `가슴에 묻은 정액량 ${breast_semen.toLocaleString()}ml`
                      : '',
                  ],
                  '，',
                ),
              );
            }
          }
          push_link_break(breast_exp_list);

          if (milking_exp) {
            breast_exp_list.push(get_filled_exp_str(milking_exp, chara.id));
          }
          if (milking_count || milk_amount) {
            breast_exp_list.push(
              join_to_string(
                [
                  milking_count
                    ? `수유를 진행한 횟수 ${milking_count.toLocaleString()}회`
                    : '',
                  milk_amount
                    ? `총 ${milk_amount.toLocaleString()}ml의 우유를 생산`
                    : '',
                ],
                '，',
              ),
            );
          }
          push_link_break(breast_exp_list);

          if (breast_orgasm_count) {
            breast_exp_list.push(
              `가슴의 쾌감만으로 ${breast_orgasm_count.toLocaleString()}회 절정에 달함`,
            );
          }
        }
      } else {
        breast_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(breast_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...breast_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
