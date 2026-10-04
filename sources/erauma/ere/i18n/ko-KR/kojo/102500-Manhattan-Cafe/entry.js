const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/102500-Manhattan-Cafe/entry') {
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/daily-25.js'));
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/102500-Manhattan-Cafe/rec-25.js'));
};
