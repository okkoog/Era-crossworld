const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},function):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 32] = async (maya, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:24:위치') !== location_enum.beach
    ) {
      cb();
      return;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 종료', maya);
    await era.printAndWait('여름 합숙은 눈 깜짝할 사이에 끝났다.');
    await era.printAndWait([maya.get_colored_name(), '도 나름대로 상당히 노력했다──']);
    await say_by_passer_by_and_wait('버스 기사', '자, 트레센 학원에 도착했습니다.');
    await maya.say_and_wait('쿨…… 쿨……');
    era.printButton('「' + sys_get_callname(0, 24) + ', 도착했어」', 1);
    await era.input();
    await maya.say_and_wait(['에……? ', sys_get_callname(24, 0), '…… 후우.']);
    await maya.say_and_wait('후아…… 괜찮아. 알고 있어……');
    await maya.say_and_wait('쿨…… 쿨……');
    await era.printAndWait([
      '……',
      maya.sex,
      '는 이번 여름에 정말 열심히 했기에, ',
      me.get_colored_name(),
      '은(는) ',
      maya.sex,
      '를 조금 더 자게 두기로 했다.',
    ]);
  };

  handlers[95 + 32] = async (maya, me, callname, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:24:위치') !== location_enum.beach
    ) {
      cb();
      return;
    }
    const brian = get_chara_talk(16);
    await print_event_name('여름 합숙 (시니어 시즌) 종료', maya);
    await maya.say_and_wait('후우…… 『여름 합숙』도 드디어 오늘로 끝이네……');
    await maya.say_and_wait('헤헤…… 마야도 엔진 전개로 열심히 훈련했어……');
    await maya.say_and_wait('그러니까 돌아가는 버스에서는…… 아주 잠깐…… 쉴래……');
    await maya.say_and_wait('도착하면…… 일어날 거니까……');
    await maya.say_and_wait('쿨…… 쿨………');
    await era.printAndWait([
      '……그리하여 ',
      me.get_colored_name(),
      '은(는) 올해도 ',
      maya.sex,
      '를 버스에서 푹 쉬게 해 주었다.',
    ]);
    era.drawLine();
    await maya.say_and_wait('으음…… 학원에 도착했어……? 쿨……… 응. 좋아.');
    await maya.say_and_wait(
      '헤헤. 차 안에서 푹 잤어. 그러니까 추가 트레이닝도 힘낼 수 있…… 을 것 같아……',
    );
    era.printButton('「아직 졸려 보이는데」', 1);
    await era.input();
    await maya.say_and_wait('우으…… 그렇지 않아………… 응?');
    await brian.say_and_wait('후우…… 후우………… 아직이야……!');
    await brian.say_and_wait('나…… 아직 더 할 수 있어……!');
    await maya.say_and_wait(['……! ', callname, ', 방금 그건──']);
    era.printButton(`「${sys_get_callname(0, 16)} 이네」`, 1);
    await era.input();
    await maya.say_and_wait('응…… 그렇네……');
    await maya.say_and_wait(['……', maya.sex, '는 정말 눈부셔. 눈이 따가울 정도로 말이야.']);
    await maya.say_and_wait('전보다 훨씬 더…… 반짝거려.');
    await maya.say_and_wait([
      '……',
      callname,
      '. 나 역시 지금부터 트레이닝하고 싶어. 괜찮지?',
    ]);
    await era.printAndWait([
      '그렇게 ',
      maya.sex,
      '는 눈을 몇 번 비비더니, 훈련장으로 달려갔다.',
    ]);
  };
};