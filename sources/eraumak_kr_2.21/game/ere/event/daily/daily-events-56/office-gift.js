const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = () => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56);
  const message = [
    async () => {
      await kitaru.say_and_wait('오————!');
      await kitaru.say_and_wait('침대 머리맡에 놔둘게요!');
    },
    async () => {
      await kitaru.say_and_wait('정말 감사합니다!');
      await kitaru.say_and_wait([callname, ', 답례로 원하시는 게 있나요?']);
    },
    async () => {
      await kitaru.say_and_wait(['점을 쳐봐도 ', callname, '이 뭘 선물했는지 모르겠네요!']);
      await kitaru.say_and_wait('집에 가면 열어볼게요……');
    },
  ];
  if (era.get('love:56') >= 75) {
    message.push(async () => {
      await kitaru.say_and_wait(['만약 ', callname, '이 원하신다면!']);
      await kitaru.say_and_wait('저 후쿠짱이 직접 답례가 돼도 괜찮아요!');
    });
  }
  return get_random_entry(message)();
};
