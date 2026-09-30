const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = () => {
  const kitaru = get_chara_talk(56),
    callname = sys_get_callname(56, 0);
  const message = [];
  if (era.get('relation:56:0') > 375) {
    message.push(
      () =>
        kitaru.say([
          '역시, ',
          callname,
          '은 제 운명의 사림이었던 거예요! 점괘도 제 마음도 그렇게 말하고 있다고요!',
        ]),
      () => kitaru.say(['전 ', callname, '을 완전히 신뢰하고 있어요! 그야 운명의 사람이니까요!']),
    );
  } else {
    message.push(
      () => kitaru.say(['점괘와 ', callname, '만 믿는다면! 분명 다 잘될 거예요!']),
      () => kitaru.say([callname, ', 오늘의 신탁은 무엇인가요?!']),
    );
  }
  switch (era.get('mark:56:음문')) {
    case 1:
      message.push(() => kitaru.say('음문…… 마치 이야기 속에 나오는 타락 전개 같네요……'));
      break;
    case 2:
      message.push(() =>
        kitaru.say('또 음문이 빛나고 있어요, 안 보이게 옷을 한 벌 더 껴입는 게 좋을까요…… 하아…… 더워라……'),
      );
      break;
    case 3:
      message.push(() =>
        kitaru.say('참배객분들을 위해 축원을 올릴 때, 음문이 가끔 눈치 없이 달아오를 때가 있네요……'),
      );
  }

  switch (era.get('mark:56:쾌락') || era.get('mark:56:음문')) {
    case 1:
      message.push(() => kitaru.say([callname, '! 저기…… 오늘 밤은 어떠신가요?']));
      break;
    case 2:
      message.push(() =>
        kitaru.say(['그게, ', callname, '을 보기만 해도 몸이 반응한다고나 할까요?']),
      );
      break;
    case 3:
      message.push(() => {
        kitaru.say('속옷을 갈아입어야겠어요……');
        kitaru.say(['왜냐구요? 으으…… ', callname, '은 또 뻔히 알면서 물어보시네요.']);
      });
  }

  switch (era.get('mark:56:동심')) {
    case 1:
      message.push(() =>
        kitaru.say(['매일 눈을 떴을 때 ', callname, '이 계시다니, 이것이야말로 대길 아닐까요!']),
      );
      break;
    case 2:
      message.push(() =>
        kitaru.say([
          callname,
          '! ',
          sys_get_callname(0, 56),
          '의 운수대통 포옹, 한번 받아보실래요?',
        ]),
      );
      break;
    case 3:
      message.push(() =>
        kitaru.say([
          '저와 ',
          callname,
          '이 이렇게 찰떡처럼 붙어 있는 걸 보시면, 시라오키 님도 분명 기뻐하실 거예요!',
        ]),
      );
  }
  get_random_entry(message)();
};