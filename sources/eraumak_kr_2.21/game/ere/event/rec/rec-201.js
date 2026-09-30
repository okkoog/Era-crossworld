/**
 * @file 해피 미쿠 - 招募
 * @author 黑奴队长（临时）
 */
const { get, printAndWait, set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const me = get_chara_talk(0),
      meek = get_chara_talk(201);
    if (get('cflag:201:육성횟수') === 0) {
      await printAndWait([
        get_chara_talk(304).get_colored_name(),
        '의 추천으로，',
        me.get_colored_name(),
        '과(와) ',
        meek.get_colored_name(),
        '는 서로를 알게 되었고, 파트너로서 중요한 3년을 시작하게 되었다.',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        '과(와)',
        meek.get_colored_name(),
        '는 다시 한 번 함께 서서, 앞으로 3년 동안의 모든 도전을 맞이할 것이다.',
      ]);
    }
    await me.say_and_wait(
      [meek.get_colored_name(), '와 함께 G1 레이스에서 많은 승리를 거두자……'],
      true,
    );
    set('cflag:201:모집상태', recruit_flags.yes);
    set('flag:현재상호작용캐릭터', 201);
    new MeekEduMarks().all_round = 0;
    await this.recruit_end();
  }
};
