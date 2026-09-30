const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,FukukitaruEduMarks,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    if (edu_weeks > 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('참배 시작', kitaru);
    await kitaru.say_and_wait('해냈어요! 완주했다고요~!');
    await era.printAndWait([
      '가장 먼저 결승선을 통과한 뒤, ',
      kitaru.get_colored_name(),
      '는 경기장 위에서 기뻐하며 두 팔을 하늘로 뻗는 포즈를 취하고 있었다.',
    ]);
    await kitaru.say_and_wait([callname, '! 영험함이 가득해요! 경기도 술술 풀렸고요!']);
    if (era.get('status:56:흉') === 1) {
      await kitaru.say_and_wait('비록 운세는 흉이었지만, 시라오키 님이 가호해주신 덕분에 이겨냈네요!');
    } else {
      await kitaru.say_and_wait('역시 대길이에요! 시라오키 님이 제 몸에 강림하신 게 틀림없어요!');
    }
    await kitaru.say_and_wait('순식간에 끝나버렸네요!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 방금 전 ',
      kitaru.get_colored_name(),
      '의 움직임을 곰곰이 되짚어 보았다. ',
      kitaru.sex,
      '의 컨디션은 무척 좋아 보였다.',
    ]);
    await era.printAndWait(['평소의 가르침을 ', kitaru.sex, '가 제대로 활용하고 있었다.']);
    await era.printAndWait('선발 레이스 때의 서툰 모습과는 완전히 딴판이었다.');
    await era.printAndWait(
      '이 정도의 성장 속도라면 국화상 우승도 불가능은 아닐 터였다.',
    );
    await kitaru.say_and_wait([callname, '!']);
    await kitaru.say_and_wait(
      '느낌이 아주 좋아요! 앞으로 있을 국화상도 분명 문제없을 거예요! 다음 레이스는 뭐로 할까요?',
    );
    await kitaru.say_and_wait('점치기로 결정할까요?');
    await kitaru.say_and_wait('우갹!');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 오늘도 ',
      me.get_colored_name(),
      '의 아이언 클로를 한 방 얻어맞았다.',
    ]);
    era.printButton('「청엽상으로 하자!」', 1);
    await era.input();
    await kitaru.say_and_wait('에엣! 청엽상이요?!');
    await kitaru.say_and_wait('그건 너무 머나먼 여정 아닌가요~?');
    await era.printAndWait('확실히 그렇다.');
    await era.printAndWait([
      '하지만 ',
      kitaru.get_colored_name(),
      '의 거리 적성, 그리고 ',
      kitaru.sex,
      '의 목표가 클래식 3관 중 하나인 국화상이라는 점을 고려해야 한다.',
    ]);
    await era.printAndWait([
      '무엇보다 ',
      me.get_colored_name(),
      '(으)로서도 컨디션 기복이 심한 이 ',
      kitaru.get_uma_sex_title(),
      '를 파악할 시간이 좀 더 필요했다.',
    ]);
    await era.printAndWait('청엽상은 분명 괜찮은 선택지가 될 것이다.');
  };
};