// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/event/basement/basement-factory.js
// 대상 함수/속성: $statement:13
const CustomizedBase = require('#/event/basement/basement-common');
const CommonKojoFactory = require('#/event/factory-common');

const cons_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[3] = require('#/event/basement/basement-3');
cons_dict[7] = require('#/event/basement/basement-7');
cons_dict[13] = require('#/event/basement/basement-13');
cons_dict[25] = require('#/event/basement/basement-25');
cons_dict[32] = require('#/event/basement/basement-32');
cons_dict[52] = require('#/event/basement/basement-52');
cons_dict[64] = require('#/event/basement/basement-64');
cons_dict[89] = require('#/event/basement/basement-89');
cons_dict[119] = require('#/event/basement/basement-119');
// GENERATED END

console.log(
  '角色地下室口上注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

class BasementFactory extends CommonKojoFactory {
  constructor() {
    super(cons_dict, CustomizedBase);
  }

  /**
   * @param {number} id
   * @returns {CustomizedBase}
   */
  get_custom_basement(id) {
    return this.get(id);
  }
}

const basement_factory = new BasementFactory();
basement_factory.get_custom_basement =
  basement_factory.get_custom_basement.bind(basement_factory);

module.exports = basement_factory;
