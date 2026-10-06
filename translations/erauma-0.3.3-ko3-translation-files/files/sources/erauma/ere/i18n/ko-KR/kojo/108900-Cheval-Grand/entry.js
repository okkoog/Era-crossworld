// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = class extends require('#/i18n/ja-JP/kojo/108900-Cheval-Grand/entry') {
  // 한국어 작업 모듈 연결: recruit
  recruit = require('#/i18n/ko-KR/kojo/108900-Cheval-Grand/rec-89.kojo');

  // [번역 완료] aim_desc
  aim_desc = '12월 2주차까지 G3 이상 레이스 3착 이내';

  // 한국어 작업 모듈 연결: basement
  basement = require("#/i18n/ko-KR/kojo/108900-Cheval-Grand/base-89.kojo");

  // [번역 완료] get_basement_info
  get_basement_info(grand, you, can_strike, is_grand_awake, security_level) {
    if (can_strike) {
      return [
        grand.get_colored_name(),
        '은(는) 요리를 들고 막 돌아왔다. 식탁은 기습을 위한 함정이 되어 있다……',
      ];
    } else if (is_grand_awake) {
      const ret = [];
      const relation = era.get(`relation:${this.id}:0`);
      const love = era.get(`love:${this.id}`);
      const relation_check =
        relation >= (era.get('flag:极端行为限制') || 1) * love;
      if (love >= 85) {
        if (relation_check) {
          ret.push(
            grand.get_colored_name(),
            '은(는) 죄책감이 어린 눈으로 조용히 ',
            you.get_colored_name(),
            '을(를) 바라보며,',
          );
        } else if (relation >= 0) {
          ret.push(
            grand.get_colored_name(),
            '은(는) 두 손을 꽉 움켜쥐어 손가락 마디가 하얗게 질렸고,',
          );
        } else {
          ret.push(
            grand.get_colored_name(),
            '의 공허한 눈동자가,',
            you.get_colored_name(),
            '의 일거수일투족을 좇으며,',
          );
        }
      } else if (relation_check) {
        ret.push(grand.get_colored_name(), '은(는) 무의식중에 치맛자락을 움켜쥐고,');
      } else {
        ret.push(
          grand.get_colored_name(),
          '은(는) 사과의 말을 혼잣말처럼 흘리며,',
        );
      }
      if (security_level >= 4) {
        ret.push('죄책감과 의심 사이에서, 후자가 더 우세한 듯하다.');
      } else if (security_level === 3) {
        ret.push(
          '추억이,',
          grand.sex,
          '이(가) 과격한 행동을 하지 못하게 붙잡고 있는 듯하다.',
        );
      } else {
        ret.push(
          you.get_colored_name(),
          '의 행복과 독점욕 사이에서 괴로워하고 있다.',
        );
      }
      return ret;
    } else {
      return [
        grand.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 이름을 중얼거리며 작은 침대 구석에서 잠들어 있다. 짧은 머리카락에 송골송골 땀이 배어 있다.',
      ];
    }
  }
};
