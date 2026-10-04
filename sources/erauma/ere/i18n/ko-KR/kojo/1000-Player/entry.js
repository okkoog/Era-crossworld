const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/1000-Player/entry') {
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/1000-Player/daily-0.js'));
};
