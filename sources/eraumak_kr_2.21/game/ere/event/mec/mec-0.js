const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const ElfieLifeMarks = require('#/data/event/life-event-marks/life-event-marks-207');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedMec {
  get_action_debuff() {
    return (
      -0.1 *
      (new TokinoLifeMarks().buff + 1) *
      (era.get('cflag:301:모집상태') === recruit_flags.yes)
    );
  }

  get_status() {
    const ret_list = [];
    if (era.get('flag:현재위치') === location_enum.basement) {
      if (era.get('base:0:기력') < 100) {
        ret_list.push({
          color: buff_colors[3],
          content: '졸음',
          title: '정신적으로 지쳐 집중력이 흐트러졌다. 언제든 잠들어버릴 수 있다!',
        });
      }
      if (era.get('base:0:체력') < 100) {
        ret_list.push({
          color: buff_colors[0],
          content: '지침',
          title: '기진맥진하여 더 이상 버티기 힘들다. 체력 소모가 크게 증가!',
        });
      }
    }
    if (era.get('flag:징벌강도') === 1) {
      ret_list.push({
        color: buff_colors[1],
        content: '레이스용 암컷',
        title:
          '현역 우마무스메지만, 시니어 시즌 레이스에만 참가 가능; 급여 없음, 출주 시 상금 배분 +400%.',
      });
    }
    if (era.get('flag:강간저항') === 0) {
      ret_list.push({
        color: buff_colors[2],
        content: 'D4C',
        title:
          '「더없이 손쉽게 자행되는 더러운 짓거리……」강간하라, 유린하라, 정복하라!',
      });
    }
    if (era.get('status:0:우마토커')) {
      ret_list.push({
        color: buff_colors[2],
        content: `우마토커 (${era.get('status:0:우마토커')})`,
        title:
          '이상한 앱, 실행하니 이름, 숫자, 성…… 성 경험, 그리고…… 알몸(코피).',
      });
    }
    if (era.get('status:0:호감도렌즈')) {
      ret_list.push({
        color: buff_colors[2],
        content: '호감도 안경',
        title: '사람들의 머리 위에 두 개의 이상한 숫자가 나타났다…… 진정한 호감도와 애정도가 보인다.',
      });
    } else if (era.get('status:0:우마뾰이횟수렌즈')) {
      ret_list.push({
        color: buff_colors[2],
        content: '우마뾰이 안경',
        title: '사람들의 머리 위에 이상한 글자가 나타났다…… 모든 성적 능력과 경험이 보인다.',
      });
    } else if (era.get('status:0:투시렌즈')) {
      ret_list.push({
        color: buff_colors[2],
        content: '투시 안경',
        title:
          '가장 자연스러운 육체의 아름다움을 감상하든, 체중 관리 계획을 연구하든, 이 아이템은 필수불가결한 도구다…… 체형을 볼 수 있다.',
      });
    }
    if (era.get('cflag:301:모집상태') === recruit_flags.yes) {
      const { buff } = new TokinoLifeMarks();
      ret_list.push({
        color: get_chara_color(301),
        content: '미노루의 도움',
        fontWeight: buff > 0 ? 'bold' : undefined,
        title: `체력과 기력 소모-${10 * (buff + 1)}%.`,
      });
    }
    if (era.get('cflag:303:모집상태') === recruit_flags.yes) {
      let { buff } = new EtsukoLifeMarks();
      buff += 1;
      ret_list.push({
        color: get_chara_color(303),
        content: '에츠코의 도움',
        fontWeight: buff > 1 ? 'bold' : undefined,
        title: `명성 획득+${10 * buff}%, 명성 감소-${10 * buff}%.`,
      });
    }
    return ret_list;
  }

  get_maxbase_buff() {
    if (new ElfieLifeMarks().buff > 0) {
      return 200;
    }
    return super.get_maxbase_buff();
  }

  init_love() {}

  set_callname() {}

  set_my_name() {}

  set_my_sex() {}
};
