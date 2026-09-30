const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const set_luck_result = require('#/event/edu/edu-events-56/snippets/set-luck-result');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

module.exports = async () => {
  // 점술이 담당의 컨디션 좋고 나쁨을 결정하도록 변경.
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    callname = sys_get_callname(56, 0);
  await era.printAndWait(['담당과 함께 ', kitaru.sex, '의 집인 신사에 도착했다.']);
  await kitaru.say_and_wait('자, 그럼 제비뽑기를 할 시간이에요!');
  await kitaru.say_and_wait('어디 보자! 오늘의 운세는 과연!');
  await kitaru.say_and_wait('시라오키 님~ 시라오키 님~');
  await era.printAndWait([
    kitaru.get_colored_name(),
    '가 독창적인 수법으로 산통을 흔들자, 기원하는 주문과 함께 종이 제비 한 장이 산통에서 미끄러져 나왔다.',
  ]);
  await kitaru.say_and_wait('짜잔!');
  // test here
  let luck = era.get('status:56:PTSD') === 1 ? 3 : get_random_value(0, 3);
  switch (luck) {
    case 0:
      await era.printAndWait('(소길!)');
      await kitaru.say_and_wait('나쁘지 않네요!');
      break;
    case 1:
      await era.printAndWait('(중길!)');
      await kitaru.say_and_wait('오오!');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 보며 미소 지었다.',
      ]);
      break;
    case 2:
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 종이 제비를 ',
          me.get_colored_name(),
          '에게 건네며 적힌 글자를 읽어달라고 보챘다. 대길이라는 소리를 듣자마자, ',
          kitaru.sex,
          '는 기쁨 가득한 표정으로 ',
          me.get_colored_name(),
          '의 품에 달려들었다.',
        ]);
        await kitaru.say_and_wait(['이 좋은 기운을 저한테도 나눠주세요! ', callname, '!']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '의 허리를 꽉 껴안았고, 그 덕분에 ',
          me.get_colored_name(),
          '은(는) ',
          kitaru.sex,
          '의 체온과 심장 박동을 느낄 수 있었다.',
        ]);
      } else {
        await kitaru.say_and_wait('와아! 대길이에요!');
        await kitaru.say_and_wait([callname, '! 보셨나요?']);
        await era.printAndWait(
          '사실 이 신사의 무녀인 그녀에게 대길이 나오지 않는 것이 더 이상한 일일지도 모른다.',
        );
      }
      break;
    case 3:
      await era.printAndWait('(흉)');
      await kitaru.say_and_wait('으으……');
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 어떻게 위로해야 할지 고민하던 찰나, 갑자기 세찬 바람이 불어와 ',
        kitaru.get_colored_name(),
        '의 손에 들려 있던 종이 제비를 낚아채 갔다.',
      ]);
      await kitaru.say_and_wait('시라오키 님, 보살펴 주세요……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 날아가는 종이 제비를 멍하니 바라보며 중얼거렸고, ',
        me.get_colored_name(),
        '은(는) 뭐라 말을 건네야 할지 알 수 없었다.',
      ]);
  }
  if (era.get('status:56:운세의존')) {
    set_luck_result(luck);
  }
};