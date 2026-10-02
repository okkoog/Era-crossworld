const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/100400-Maruzensky/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100400-Maruzensky/rec-4.js'),
  );
};
