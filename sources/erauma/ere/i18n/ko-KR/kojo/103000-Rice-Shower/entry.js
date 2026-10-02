const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/103000-Rice-Shower/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103000-Rice-Shower/rec-30.js'),
  );
};
