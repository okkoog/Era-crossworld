const { proxy_kojo_js } = require('#/i18n/tools');
const JaTimon = require('#/i18n/ja-JP/timon/entry');

module.exports = class extends JaTimon {
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/ko-KR/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/ko-KR/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/ko-KR/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/ko-KR/timon/base'));
  game_guides = proxy_kojo_js(require('#/i18n/ko-KR/timon/guides/game'));
  storage = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/god-shop'));
};
