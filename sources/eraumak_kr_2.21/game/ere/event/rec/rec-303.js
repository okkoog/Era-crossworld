/**
 * @file 오토나시 에츠코 - 招募
 * @author 黑奴队长（临时）
 */
const { get, printAndWait, set } = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const etsuko = get_chara_talk(303),
      me = get_chara_talk(0);
    if (stage === event_hooks.week_start) {
      await print_event_name('단독 인터뷰', etsuko);
      await printAndWait([
        me.get_colored_name(),
        '은 뜻밖에도 학원 정문에서 ',
        etsuko.get_colored_name(),
        '를 만났다.',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        '와 인사를 나누고 ',
        me.get_colored_name(),
        '은(는) ',
        etsuko.sex,
        '와 함께 걸었다. ',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        '가 말하길, ',
        me.get_colored_name(),
        '의 활약 덕에 이제부터 ',
        etsuko.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 팀 전담 취재 기자가 되었다고 한다.',
      ]);
      await printAndWait([
        '물론 ',
        etsuko.sex,
        '도 ',
        me.get_colored_name(),
        '의 영광을 널리 알리고 부정적인 영향을 최대한 없애는데에 도움을 줄 수 있다. ',
        me.get_colored_name(),
        '이(가) 허락한다면 말이지만.',
      ]);
      await printAndWait([
        '그렇게 말하며 ',
        etsuko.get_colored_name(),
        '는 활짝 웃음을 지었다.',
      ]);
      await me.say_and_wait(
        ['방문객 응접실에서 ', etsuko.sex, '를 찾을 수 있을 것이다...'],
        true,
      );
    } else {
      await printAndWait([
        etsuko.get_colored_name(),
        '는 미소를 지으며, 앞으로는 ',
        me.get_colored_name(),
        '의 좋은 소문을 퍼뜨리고 악명을 줄여주겠다고 약속했다.',
      ]);
      if (get('love:303') >= 75) {
        await printAndWait([
          '대신……',
          etsuko.sex,
          '는 살며시 ',
          me.get_colored_name(),
          '의 손을 어루만지며 눈을 깜빡였다. ',
        ]);
      } else {
        await printAndWait([
          '그 대신... ',
          etsuko.sex,
          '는 트레이닝을 방해하지 않는 조건으로 ',
          me.get_colored_name(),
          '의 팀과 가까이 접촉할 수 있도록 해달라고 요청해 왔다.',
        ]);
        if (get('love:303') >= 50) {
          await printAndWait([
            '악수를 나누고 난 뒤 ',
            etsuko.get_colored_name(),
            '는 자신의 손바닥을 천천히 쓰다듬으며 무언가 생각에 잠겼다.',
          ]);
        } else {
          await printAndWait([
            '악수를 나누고 난 뒤 ',
            etsuko.get_colored_name(),
            '는 계획대로라는 듯 교활한 미소를 지었다.',
          ]);
        }
      }
      set('cflag:303:모집상태', recruit_flags.yes);
      set('callname:303:-2', '오토나시 에츠코');
      await this.recruit_end();
    }
  }
};
