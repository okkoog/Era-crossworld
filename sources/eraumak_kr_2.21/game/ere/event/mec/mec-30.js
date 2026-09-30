const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const recruit_flags = require('#/data/event/recruit-flags');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_contestants(info) {
    switch (era.get('flag:현재레이스')) {
	  case race_enum.sprg_sta:
		return [new LegendUmaSelector(26, 0.81)]; //한판 커스텀 스프링S 1착 이외 시 부르봉 이벤트 반영
      case race_enum.toky_yus:
      case race_enum.kiku_sho:
        return [new LegendUmaSelector(26, 1.05)];
      case race_enum.tenn_spr:
        return [new LegendUmaSelector(13, 1.05)];
	  case race_enum.arim_kin:
		if (era.get('cflag:30:육성턴수합산') > 96 ) { //한판 커스텀 시니어 아리마 부르봉, 맥퀸 스토리 반영
          return [
			new LegendUmaSelector(13, 1.05),
			new LegendUmaSelector(26, 1.05),
		  ];
        }
    }
    return super.get_race_contestants(info);
  }

  set_callname() {
    if (era.get('cflag:30:모집상태') !== recruit_flags.yes) {
      return super.set_callname();
    }
    if (!this.set_callname_from_src()) {
      era.set(
        'callname:30:0',
        era.get('cflag:0:성별') === 1 ? '오라버니' : '언니',
      );
    }
  }

  set_my_name() {}
};
