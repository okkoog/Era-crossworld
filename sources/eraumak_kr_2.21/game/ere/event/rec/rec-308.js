/**
 * @file 라이트 헬로 - 招募
 * @author 黑奴队长（临时）
 */
const { printAndWait } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const hello = get_chara_talk(308),
      me = get_chara_talk(0);
    await print_event_name('그랜드 라이브의 영광', hello);
    await printAndWait([
      hello.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 그랜드 라이브에 대한 지원에 매우 감사하고 있으며, 자주 트레센 학원에 나타나고 있다.',
    ]);
    await printAndWait([
      '더 직접적으로 지원하고 싶다면 ',
      hello.sex,
      '는 방문객 응접실에 있을 테니 가서 ',
      hello.sex,
      '를 만나볼 수 있다.',
    ]);
  }
};
