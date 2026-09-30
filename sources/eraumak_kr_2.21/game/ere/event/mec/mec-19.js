const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');
const LegendUmaSelector = require('#/data/race/model/legend-uma-selector');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  set_callname() {
    if (era.get('relation:19:0') > 375) {
      era.set('callname:19:0', ['동지', '트레이너님']);
    } else {
      era.set('callname:19:0', '트레이너님');
    }
  }
  //한판 커스텀-육성 스토리에 나온 대로 지정 강적 출현 설정-마일C 킹헤일로, 텐노 가을 오페라/도토
  get_race_contestants(info) {
	  const edu_weeks = era.get(`cflag:${this.id}:육성턴수합산`);
	  switch (era.get('flag:현재레이스')) {
		case race_enum.mile_cha:
		  if (edu_weeks < 96) {
			return [new LegendUmaSelector(61, 1.05)];
		  }
		  break;
		case race_enum.tenn_sho:  
		  if (edu_weeks > 96) {
			return [new LegendUmaSelector(15, 1.05), new LegendUmaSelector(58, 1.05)];
		  }
		  break;
	  }
	  return super.get_race_contestants(info);
	}
};
