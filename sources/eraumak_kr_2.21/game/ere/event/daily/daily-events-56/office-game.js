const { add_event, cb_enum } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    message = [],
    edu_marks = new FukuEventMarks();
  message.push(
    () => kitaru.say_and_wait('글쓰기를 통해 소원을 성취한다고요? 정말 흥미로운 설정이네요!'),
    () => kitaru.say_and_wait('은빛으로 빛나는 대기…… 제 꿈에서도 비슷한 광경이 나올 것만 같아요!'),
    () => kitaru.say_and_wait('제 영력으로 염동력을 써서 물건을 움직일 수 있다면 좋을 텐데 말이죠!'),
    () => kitaru.say_and_wait('……의지가 시험받고 있어…… 으으, 바로 운이 실력을 발휘할 때로군요!'),
    () =>
      kitaru.say_and_wait(
        '백사의 신사라…… 저희 집 신사보다 훨씬 더 외진 곳에 있네요. 참배객이 오기는 하는 걸까요?',
      ),
    () => kitaru.say_and_wait('운명 코옵이라니, 아무래도 동종 업계 종사자인 모양이네요!'),
  );

  if (edu_marks.game_times >= 5) {
    message.push(() =>
      kitaru.say_and_wait('후후후…… 점괘로 커맨드를 읽는 건 역시나 엄청나게 효과적이네요!'),
    );
  }
  edu_marks.game_times < 3 && edu_marks.game_times++;
  if (edu_marks.game_times === 3) {
    edu_marks.game_times = 4;
    add_event(
      event_hooks.office_game,
      new EventObject(56, cb_enum.edu).set_arg('fortune_game_duel_1'),
    );
  }
  await get_random_entry(message)();
};