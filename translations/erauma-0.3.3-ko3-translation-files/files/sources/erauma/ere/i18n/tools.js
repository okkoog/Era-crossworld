// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
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
          era.print('口上缺失');
          return ['文本构造器缺失'];
        };
        f.toString = () => '文本缺失';
        console.error(`口上内容缺失：${k} ${path}`);
        return f;
      },
    });
  },
};
