const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/**
 * @param _
 * @param __
 * @param {EventObject} event_object
 */
module.exports = async (_, __, event_object) => {
  const callname = sys_get_callname(56, 0),
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0);
  await print_event_name('징벌 이후', kitaru);
  switch (event_object.arg) {
    case 'p1':
      await kitaru.say_and_wait([
        '우와아! 운명의 사람이 ',
        kitaru.get_uma_sex_title(),
        '가 되어버린 건가요!',
      ]);
      await kitaru.say_and_wait(['걱정하지 마세요! ', callname, ' , 제가 적응할 수 있게 도와드릴게요!']);
      await kitaru.say_and_wait('그나저나…… 아직도 트레이너라고 불러야 할까요?');
      await kitaru.say_and_wait('언니는 어떠신가요?');
      break;
    case 'p2':
      await kitaru.say_and_wait('으응! 언니, 뭘 하려는 건가요?');
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 반항하기 위해 휘두른 주먹은, 너무나도 손쉽게 제압당하고 말았다.',
      ]);
      await era.printAndWait([
        '그 후 ',
        kitaru.get_colored_name(),
        '의 반강압적인 요구에 따라, ',
        kitaru.sex,
        '와 판박이인 복장으로 갈아입게 되었다.',
      ]);
      break;
    case 'p3':
      await kitaru.say_and_wait('괜찮아요……');
      await kitaru.say_and_wait([
        '설령 이렇게 되더라도, 전 결코 ',
        callname,
        '을 버리지 않을 거예요……',
      ]);
      await kitaru.say_and_wait('그야, 약속했으니까요……');
      await kitaru.say_and_wait('후우……');
      await era.printAndWait([
        '방금 목욕을 마치고 나와 젖어있는 ',
        me.get_colored_name(),
        '의 귀를 곧게 펴서 닦아준 뒤, 오렌지색 레이스 ',
        kitaru.get_uma_sex_title(),
        ' 는 귀 장식을 ',
        me.get_colored_name(),
        '의 귀에 달아주었다.',
      ]);
      await era.printAndWait([
        '귀가 너무 민감해진 탓인지, ',
        me.get_colored_name(),
        '의 시야에는 점차 뿌연 물안개가 서리기 시작했다.',
      ]);
      await era.printAndWait([
        '꼬리가 마치 주인을 알아보는 것처럼 ',
        kitaru.get_colored_name(),
        '의 허리를 휘감았다……',
      ]);
      await era.printAndWait([
        '이전에는 손 하나로 ',
        kitaru.get_colored_name(),
        '를 제압하던 ',
        callname,
        '에게 이런 일이 일어나다니, 참으로 상상하기 어려운 광경이었다.',
      ]);
  }
};