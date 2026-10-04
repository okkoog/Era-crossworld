const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/103700-Eishin-Flash/entry') {
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/daily-37.js'));
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103700-Eishin-Flash/rec-37.js'));
};
