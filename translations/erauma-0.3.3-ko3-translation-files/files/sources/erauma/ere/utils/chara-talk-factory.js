// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/utils/chara-talk-factory.js
// 대상 함수/속성: $statement:6
const CharaTalk = require('#/utils/chara-talk');

const cons_dict = {};

/** @type {Record<string,CharaTalk>} */
const obj_dict = {};

const current = new Date().getTime();

// GENERATED START
cons_dict[17] = require('#/utils/chara-talk-extended/chara-talk-17');
cons_dict[9017] = require('#/utils/chara-talk-extended/chara-talk-9017');
// GENERATED END

console.log(
  '角色发言输出工具注册完毕!',
  (new Date().getTime() - current).toLocaleString(),
  'ms',
);

module.exports = {
  /**
   * @param {number} id
   * @param {string} [color]
   * @returns {CharaTalk}
   */
  get_chara_talk(id, color) {
    if (id === 0) {
      return CharaTalk.me;
    }
    CharaTalk.init_chara(id);
    if (obj_dict[id] !== void 0) {
      if (!color) {
        obj_dict[id].name = void 0;
        return obj_dict[id];
      }
      if (cons_dict[id] !== void 0) {
        return (obj_dict[id] = new cons_dict[id](id, color));
      }
    }
    return (obj_dict[id] = new CharaTalk(id, color));
  },
  say_by_passer_by: CharaTalk.say_by_passer_by,
  say_by_passer_by_and_wait: CharaTalk.say_by_passer_by_and_wait,
};
