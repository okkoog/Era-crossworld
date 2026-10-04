const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/101900-Agnes-Digital/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/101900-Agnes-Digital/rec-19.js'),
  );
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/101900-Agnes-Digital/daily-19.js'));
};
