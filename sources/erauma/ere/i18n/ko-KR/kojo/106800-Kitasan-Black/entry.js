const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/106800-Kitasan-Black/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/106800-Kitasan-Black/rec-68.js'),
  );
  daily = proxy_kojo_js(require('#/i18n/ko-KR/kojo/106800-Kitasan-Black/daily-68.js'));
};
