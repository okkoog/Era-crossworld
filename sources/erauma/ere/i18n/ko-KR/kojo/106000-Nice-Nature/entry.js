const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/106000-Nice-Nature/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/106000-Nice-Nature/rec-60.js'),
  );
};
