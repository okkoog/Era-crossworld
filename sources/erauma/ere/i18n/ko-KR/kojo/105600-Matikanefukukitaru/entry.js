const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/entry') {
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105600-Matikanefukukitaru/rec-56.js'));
};
