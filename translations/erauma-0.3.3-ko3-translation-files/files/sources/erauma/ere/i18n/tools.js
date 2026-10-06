// 번역 작업용 전체 원본 파일. [번역 완료]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/tools.js
// 대상 함수/속성: daily
/**
 * @file i18n 衍生工具
 */

const era = require('#/era-electron');

module.exports = {
  /**
   * js 包装器，使其具有加载后的 kojo 类似的容错性
   * @Template T
   * @param {T} kojo
   * @return {T}
   */
  proxy_kojo_js(kojo) {
    const path = (new Error().stack || '')
      .split('\n')
      .filter((l) => l.trim())[2]
      .trim();
    return new Proxy(kojo, {
      get(t, k) {
        if (k in t) {
          return t[k];
        }
        const f = () => {
          era.print('대사 누락');
          return ['텍스트 생성기 누락'];
        };
        f.toString = () => '텍스트 누락';
        console.error(`대사 내용 누락: ${k} ${path}`);
        return f;
      },
    });
  },
};
