const era = require('#/era-electron');

const {
  get_filled_exp_str,
  push_link_break,
  remove_end_line_breaks,
} = require('#/page/exp/snippets');

const { join_to_string } = require('#/utils/list-utils');

const { hair_desc } = require('#/data/ero/status-const');
const { growth_info, unknown_info } = require('#/data/exp-const');

const body_semen_desc = [
  '',
  '살결이 근질근질해서 견딜 수 없게 된다',
  '행복을 느끼게 된다',
  '피부가 행복감에 젖어 꿈틀거리기 시작한다',
];

const page_name = '육체정보[몸통]';

module.exports = {
  /**
   * @param {CharaTalk} chara
   * @param {{in_growth:boolean,mark_level:number,show_all_exp:boolean,show_body:boolean,show_exp:boolean}} flags
   * @returns {{print():*[]}}
   */
  generate: function (chara, flags) {
    const body_exp_list = [];
    if (flags.in_growth) {
      body_exp_list.push(growth_info);
    } else {
      if (flags.show_body) {
        const body_hair_talent = era.get(`talent:${chara.id}:겨드랑이털성장`),
          body_hair = era.get(`cflag:${chara.id}:겨드랑이털`);
        if (!body_hair_talent) {
          body_exp_list.push('태생적으로 털 없는 겨드랑이다...');
        } else if (!body_hair) {
          body_exp_list.push('겨드랑이는 현재 털 하나 없이 매끄러운 상태다...');
        } else {
          body_exp_list.push(
            `겨드랑이에는 ${hair_desc[body_hair - 1]}${
              body_hair_talent === 2 ? '이 나 있으며, 무서운 속도로 자라나고 있다……' : ''
            }`,
          );
        }
        if (era.get(`talent:${chara.id}:음란한몸`) === 2) {
          body_exp_list.push('타인의 온기를 갈구한다…… 마치 육체 자체가 이미 음욕 덩어리가 된 듯이……');
        }
        push_link_break(body_exp_list);
      }
      if (flags.show_exp) {
        const body_fuck_count = era.get(`exp:${chara.id}:스마타횟수`),
          body_semen = era.get(`exp:${chara.id}:신체부착정액량`),
          body_orgasm_count = era.get(`exp:${chara.id}:신체절정횟수`),
          face_semen = era.get(`exp:${chara.id}:안면사정횟수`),
          body_semen_talent =
            era.get(`talent:${chara.id}:정액욕중독`) * 2 +
            era.get(`talent:${chara.id}:냄새민감`);
        const face_semen_exp = era.get(`cstr:${chara.id}:첫안면사정경험`),
          unknown_face_semen_exp = era.get(
            `cstr:${chara.id}:무자각첫안면사정경험`,
          ),
          body_sex_exp = era.get(`cstr:${chara.id}:첫스마타경험`),
          unknown_body_sex_exp = era.get(`cstr:${chara.id}:무자각첫스마타경험`);
        if (face_semen_exp) {
          body_exp_list.push(get_filled_exp_str(face_semen_exp, chara.id));
        }
        if (flags.show_all_exp || face_semen_exp) {
          if (unknown_face_semen_exp) {
            body_exp_list.push(
              get_filled_exp_str(unknown_face_semen_exp, chara.id),
            );
          }
          if (face_semen) {
            body_exp_list.push(
              `안면에 ${face_semen.toLocaleString()}회 사정당했으며, 총 ${era
                .get(`exp:${chara.id}:안면사정정액량`)
                .toLocaleString()}ml의 정액이 묻었다`,
            );
          }
        }
        push_link_break(body_exp_list);

        if (body_sex_exp) {
          body_exp_list.push(get_filled_exp_str(body_sex_exp, chara.id));
        }
        if (flags.show_all_exp || body_sex_exp) {
          if (unknown_body_sex_exp) {
            body_exp_list.push(
              get_filled_exp_str(unknown_body_sex_exp, chara.id),
            );
          }
          if (body_fuck_count || body_semen) {
            body_exp_list.push(
              join_to_string(
                [
                  body_fuck_count
                    ? `몸을 비비며 성기를 달랜 횟수 ${body_fuck_count.toLocaleString()}회`
                    : '',
                  body_semen
                    ? `몸에 묻은 정액량 총 ${body_semen.toLocaleString()}ml`
                    : '',
                ],
                '，',
              ),
            );
          }
        }
        if (
          (flags.mark_level >= 3 || body_semen || face_semen) &&
          body_semen_talent
        ) {
          body_exp_list.push(
            `따뜻한 정액이 몸에 묻을 때마다, ${body_semen_desc[body_semen_talent]}`,
          );
        }
        push_link_break(body_exp_list);

        if (body_orgasm_count) {
          body_exp_list.push(
            `신체적 쾌감만으로 ${body_orgasm_count.toLocaleString()}회 절정에 달함`,
          );
        }
      } else {
        body_exp_list.push(unknown_info(chara.id));
      }
      remove_end_line_breaks(body_exp_list);
    }
    return {
      print() {
        return [
          {
            type: 'divider',
            config: { content: page_name, position: 'left' },
          },
          ...body_exp_list.map((e) => {
            return { content: e, type: 'text' };
          }),
        ];
      },
    };
  },
  name: page_name,
};
