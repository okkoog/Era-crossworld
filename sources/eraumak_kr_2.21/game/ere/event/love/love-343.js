/**
 * @file 사타케 메이 - 연모
 * @author 黑奴队长（临时）
 */
const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');

module.exports = class extends CustomizedLove {
  async 49(may, me) {
    await print_event_name('개선문의 꿈', may);
    await era.printAndWait([
      '이번 주말, ',
      may.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 외출을 권유했다.',
    ]);
    await era.printAndWait([
      '다음 해외 원정에 대한 논의를 핑계로 삼았지만, 레스토랑의 프라이빗 룸에서 ',
      may.sex,
      '와 ',
      me.get_colored_name(),
      '은(는) 그저 마주 앉은 채 한동안 말없이 있었다.',
    ]);
    await era.printAndWait([
      '한참 뒤, ',
      may.sex,
      '가 입을 열어 ',
      me.get_colored_name(),
      '에게 해외 원정을 위해 노력해 준 것에 감사를 표했다.',
    ]);
    const life_marks = new MayLifeMarks();
    switch (life_marks.who_am_i) {
      case 1:
        await era.printAndWait([
          '비록 이미 개선문의 월계관을 차지했지만, 아직 더 많은 꿈들이 ',
          me.get_couple_title(),
          '이 이루어주길 기다리고 있다.',
        ]);
        break;
      case 0:
        await era.printAndWait([
          '아직 개선문의 월계관을 차지하진 못했지만, 이 꿈은 ',
          me.get_colored_name(),
          '의 노력 덕분에 언젠가 반드시 이루어질 것이다.',
        ]);
    }
    await era.printAndWait([
      '어찌 되었든, ',
      me.get_colored_name(),
      '은(는) ',
      may.sex,
      '에게 있어 가장 중요한, 꿈을 좇는 파트너다.',
    ]);
    if (life_marks.who_am_i !== 2) {
      era.set('callname:343:-1', '딕터스');
      await era.printAndWait([
        '깊게 심호흡을 한 뒤, ',
        may.sex,
        '는 무언가 결심한 듯 천천히 머리에 쓴 모자를 벗어 우마무스메의 귀를 드러냈다.',
      ]);
      await era.printAndWait([
        may.sex,
        '는 자신의 진짜 이름이 ',
        may.get_colored_actual_name(),
        '라 밝히며, 지금까지 정체를 숨긴 것에 대해 ',
        me.get_colored_name(),
        '에게 사과하고, 앞으로는 ',
        me.get_couple_title(),
        '이 서로를 더 진실하게 대할 수 있기를 바랐다.',
      ]);
    }
    await era.printAndWait([
      '마지막으로, ',
      may.sex,
      '는 ',
      me.get_colored_name(),
      '에게 건배를 제의했다.',
    ]);
    await era.printAndWait(['커피의 김에 가려진 두 눈 속에는 은은한 연정이 스쳐 지나갔다.']);
    if (!era.get('flag:턴당애정도패널티')) {
      await sys_love_uma_in_event(343);
    }
    life_marks.who_am_i = 3;
  }
};