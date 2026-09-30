const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0),
    message = [];
  message.push(async () => {
    await kitaru.say_and_wait('오오오오오!!!');
    await kitaru.say_and_wait([callname, '의 도시락, 정말 맛있어 보이네요!']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 결국 ',
      kitaru.get_colored_name(),
      '의 뜨거운 시선을 이기지 못하고, 도시락 통을 ',
      kitaru.sex,
      '의 앞으로 밀어주었다.',
    ]);
  });
  if (love > 50) {
    message.push(async () => {
      await kitaru.say_and_wait(['저기, ', callname, '의 나무젓가락 좀 빌려주세요!']);
      await era.printAndWait([
        me.get_colored_name(),
        '의 나무젓가락이 ',
        kitaru.get_colored_name(),
        '의 손안에서 경쾌한 소리를 내며 반으로 갈라졌다.',
      ]);
      await kitaru.say_and_wait([
        '오오! 이 점괘대로라면 ',
        callname,
        '의 오늘 운세는 아주 좋아 보이네요!',
      ]);
    });
  }
  if (love > 75) {
    message.push(async () => {
      await kitaru.say_and_wait('트~레~이~너~선생님! 저도 한입만요!');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 부드러운 몸이 ',
        me.get_colored_name(),
        '에게 밀착되어 왔고, 금방이라도 녹아내릴 듯한 눈빛으로 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait(['반찬 한 조각을 집어 ', kitaru.sex, '의 입을 막아버렸다.']);
      await kitaru.say_and_wait('우물우물…… 이것도 나쁘지 않네요!');
    });
  }
  await get_random_entry(message)();
};