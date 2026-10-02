const { proxy_kojo_js } = require('#/i18n/tools');

module.exports = class extends (
  require('#/i18n/ja-JP/kojo/100700-Gold-Ship/entry')
) {
  recruit = proxy_kojo_js(
    require('#/i18n/ko-KR/kojo/100700-Gold-Ship/rec-7.js'),
  );
};
