const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = async () => {
  const message = [],
    callname = sys_get_callname(56, 0);
  message.push(
    () =>
      get_chara_talk(56).say_and_wait([
        '고마워요, ',
        callname,
        '! 행운의 의식을 진행하려면 이제 조력자 한 명만 더 있으면 돼요!',
      ]),
    () =>
      get_chara_talk(56).say_and_wait([
        '이 의식을 마치려면…… 아, ',
        callname,
        ', 도와주시는 거군요! 정말 다행이에요!',
      ]),
    () =>
      get_chara_talk(56).say_and_wait([
        callname,
        '! 이 신을 부르는 주술에 당신의 POW 값을 더하면 분명 문제없을 거예요!',
      ]),
    () => get_chara_talk(56).say_and_wait('윤년 의식? 해보면 정말 환해질 것 같은 느낌이 드네요……'),
    () =>
      get_chara_talk(56).say_and_wait(
        '연락술, 청신술, 추방술, 이 의식은 어느 부류에 속할까요?',
      ),
  );
  await get_random_entry(message)();
};
