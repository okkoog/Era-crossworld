const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    love = era.get('love:56'),
    message = [],
    callname = sys_get_callname(56, 0);
  if (love > 84) {
    message.push(() =>
      kitaru
        .say_and_wait([sys_get_callname(0, 56), '이 만든 된장국 드셔보실래요!'])
        .then(() =>
          kitaru.say_and_wait(['입에 맞으신다면! 매일이라도 ', callname, '께 만들어 드릴 수 있어요!']),
        ),
    );
  } else if (love > 75) {
    message.push(() =>
      kitaru
        .say_and_wait('제가 도와드릴게요! 이번엔 절대 문제없을 거예요!')
        .then(() =>
          era.printAndWait([
            '그동안 ',
            kitaru.get_colored_name(),
            '가 배운 것이 꽤 많은 모양이다.',
          ]),
        ),
    );
  } else if (love > 49) {
    message.push(() =>
      kitaru
        .say_and_wait('으으, 이번엔 옆에서 지켜보며 배우기만 할게요!')
        .then(() => kitaru.say_and_wait('나중에 언젠가 써먹을 일이 생길지도 모르니까요!'))
        .then(() =>
          era.printAndWait([
            me.get_colored_name(),
            '의 얼굴을 바라보며, ',
            kitaru.get_colored_name(),
            '는 그렇게 말했다.',
          ]),
        ),
    );
  } else {
    message.push(() =>
      kitaru
        .say_and_wait([callname, ', 필요하시다면 저도 도와드릴게요!'])
        .then(() =>
          era.printAndWait([
            kitaru.get_colored_name(),
            '의 온갖 기상천외한 아이디어 탓에, 요리 속도는 오히려 평소보다 훨씬 느려지고 말았다.',
          ]),
        ),
    );
  }
  await get_random_entry(message)();
};