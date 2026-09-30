/**
 * @file 사타케 메이 - 招募
 * @author 黑奴队长（临时）
 */
const { printAndWait } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const may = get_chara_talk(343),
      me = get_chara_talk(0);
    await print_event_name('개선문의 꿈', may);
    await printAndWait([
      me.get_colored_name(),
      '의 해외 대회에서의 성적이  ',
      may.get_colored_name(),
      '에게 큰 격려가 된 모양이다.',
    ]);
    await printAndWait([
      '더 직접적으로 이야기하고 싶다면 응접실로 가서',
      may.sex,
      '와 이야기해 보자.',
    ]);
  }
};
