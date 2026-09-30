const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0);
  if (era.get('cflag:56:임신주수') > 0) {
    await kitaru.print_and_wait([
      callname,
      '이 떠난 뒤로, ',
      kitaru.get_colored_name(),
      '는 줄곧 집안의 서고에 박혀 있었다.',
    ]);
    await kitaru.say_and_wait('그래! 이거야! 찾았어!');
    await era.printAndWait(
      [
        kitaru.get_colored_name(),
        {
          color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
          content: '「찾았다찾았다찾았다찾았다찾았다찾았다찾았다찾았다!!!!!」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
    await kitaru.say_and_wait([
      '제물로는 아이의 피가 필요해, 그러면 ',
      sys_get_callname(56, 0),
      '을 추적할 수 있어!',
    ]);
    await kitaru.print_and_wait([
      '살짝 부풀어 오른 자신의 배를 어루만지며, 머리카락이 흐트러진 ',
      kitaru.get_colored_name(),
      '의 얼굴에는 뒤틀렸다고 할 수밖에 없는 미소가 걸려 있었다.',
    ]);
  } else if (love < 49) {
    await kitaru.say_and_wait(['이 알람 시계가 ', callname, '의 행운 아이템인가요?']);
    await kitaru.say_and_wait('우와앗!');
    await kitaru.say_and_wait('지금 당장 돌려드릴게요!');
  } else if (love > 89) {
    await kitaru.say_and_wait('떠나버렸어……');
    await kitaru.say_and_wait('운명의 사람이…… 떠나버렸어……');
    await era.printAndWait(
      [
        kitaru.get_colored_name(),
        {
          color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
          content: '「안…… 안돼안돼안돼안돼안돼안돼안돼안돼!」',
          fontWeight: 'bold',
        },
      ],
      { fontSize: '1.5rem' },
    );
  }
};