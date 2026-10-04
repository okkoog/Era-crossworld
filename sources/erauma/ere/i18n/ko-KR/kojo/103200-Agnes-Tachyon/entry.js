const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/rec-32.js'),
  );
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/103200-Agnes-Tachyon/daily-32.js'));
};
