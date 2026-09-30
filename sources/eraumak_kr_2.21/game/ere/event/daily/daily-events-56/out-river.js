const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    callname = sys_get_callname(56, 0),
    message = [];
  if ((hook.arg = !!(await select_action_around_river()))) {
    const common = () =>
      era
        .printAndWait([
          kitaru.get_colored_name(),
          '가 앞장서서 걸으며, ',
          me.get_colored_name(),
          '에게 어디선가 들어본 듯한 지식들을 늘어놓았다.',
        ])
        .then(() => kitaru.say_and_wait([callname, ', 듣고 계시나요?']));
    message.push(
      () =>
        kitaru.say_and_wait('흐르는 물은 영체의 활동을 막을 수 있다고 해요!').then(common),
      () =>
        kitaru
          .say_and_wait('듣기로는 시라오키 님이 옛날에 하루 중의 한 시간을 관장하셨다고 하더라고요!')
          .then(common),
      () =>
        kitaru
          .say_and_wait('파워 스폿의 형성은 끊임없이 이어지는 집단적인 믿음과 관계가 있다고 해요!')
          .then(common),
    );
    if (era.get('love:56') >= 50) {
      message.push(async () => {
        await kitaru.say_and_wait('으왓! 조금 차갑네요!');
        await era.printAndWait([
          '신발과 양말을 벗은 ',
          kitaru.get_colored_name(),
          '가 물속에 맨발을 담그자, 매끈하고 고운 광택이 자연스럽게 배어 나왔다.',
        ]);
        await kitaru.say_and_wait([callname, '도 같이 해보실래요?']);
      });
    }
  } else {
    message.push(
      async () => {
        await kitaru.say_and_wait('……');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 수면을 뚫어지라 응시하고 있는 ',
          kitaru.get_colored_name(),
          '를 지켜보았다.',
        ]);
        await era.printAndWait([
          '드물게 조용해진 ',
          kitaru.get_colored_name(),
          '는 평소와는 전혀 다른 일면을 보여주었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          kitaru.sex,
          '의 장엄하고 숙연한 모습에서 일말의 신비로움마저 느낄 수 있었다.',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('낚시는 운이 7할을 차지하는 법이죠!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '가 그렇게 말하며 물속으로 낚시 미끼를 던졌다.',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('뭔가 재미있는 게 낚이지 않을까요!');
        await kitaru.say_and_wait('마치 신화 속 이야기처럼 말이에요!');
      },
    );
  }
  await get_random_entry(message)();
};