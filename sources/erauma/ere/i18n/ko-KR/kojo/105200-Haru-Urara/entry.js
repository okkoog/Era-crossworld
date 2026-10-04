const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends require('#/i18n/ja-JP/kojo/105200-Haru-Urara/entry') {
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/kojo/105200-Haru-Urara/rec-52.js'));
};
