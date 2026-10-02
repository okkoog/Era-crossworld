const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100300-Tokai-Teio/rec-3.js'),
  );
};
