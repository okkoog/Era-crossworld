const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/108500-Daiichi-Ruby/entry') {
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/108500-Daiichi-Ruby/daily-85.js'));
};
