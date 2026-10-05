// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/event/mec/mec-67.js
// 대상 함수/속성: $statement:3
const era = require('#/era-electron');

const CustomizedMec = require('#/event/mec/mec-common');

const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedMec {
  get_race_cloth() {
    if (era.get('flag:当前赛事') !== race_enum.prix_lat) {
      return super.get_race_cloth();
    }
    return ['光钻2'];
  }
};
