/**
 * @file ナイスネイチャ - 日常
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/106000-Nice-Nature/daily-60.js');

module.exports = {
  ...__JaOriginal,
  async office_rest(nature) {
    await nature.say_and_wait(
      "가끔은 이렇게 둘이서 아무것도 안 하고 멍하니 있는 것도 나쁘지 않네. 아주 가끔이라면 말이야.",
    );
  },
};
