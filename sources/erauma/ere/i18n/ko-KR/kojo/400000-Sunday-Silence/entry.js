const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/400000-Sunday-Silence/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/400000-Sunday-Silence/rec-400.js'),
  );
};
