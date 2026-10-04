const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/200500-Treve/entry') {
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/rec-205.js'));
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/200500-Treve/daily-205.js'));
};
