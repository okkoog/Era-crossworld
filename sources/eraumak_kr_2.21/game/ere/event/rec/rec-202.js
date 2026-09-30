/**
 * @file 비터 글라세 - 招募
 * @author 黑奴队长（临时）
 */
const { set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    set('cflag:202:모집상태', recruit_flags.yes);
    await this.recruit_end();
  }
};
