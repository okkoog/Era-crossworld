const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { location_enum } = require('#/data/locations');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,number,FukuEventMarks,RaceEndParams):Promise>} */
const race_end_handlers = {};

[
  require('#/event/edu/edu-events-56/race-end-handlers/race-end-1'),
  require('#/event/edu/edu-events-56/race-end-handlers/race-end-2'),
  require('#/event/edu/edu-events-56/race-end-handlers/race-end-3'),
].forEach((f) => f(race_end_handlers));

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (kitaru, me, callname, extra_flag) => {
  const edu_marks = new FukuEventMarks(),
    edu_weeks = era.get('cflag:56:육성턴수합산');
  if (
    !race_end_handlers[extra_flag.race] ||
    (await race_end_handlers[extra_flag.race](
      kitaru,
      me,
      callname,
      edu_weeks,
      edu_marks,
      extra_flag,
    ))
  ) {
    if (edu_marks.tattoo === 2 && extra_flag.rank === 1) {
      edu_marks.tattoo++;
      await print_event_name('예열 완료', kitaru);
      era.set('flag:현재위치', location_enum.restroom);
      await era.printAndWait([
        '멋지게 1착을 차지한 ',
        kitaru.get_colored_name(),
        '는 관중의 시선에서 벗어난 순간, 안도한 듯 ',
        me.get_colored_name(),
        '의 품으로 쓰러지듯 안겼다.',
      ]);
      await kitaru.say_and_wait('끄…… 끝났다……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 체취를 맡고서야 긴장했던 몸을 풀기 시작했다.',
      ]);
      await kitaru.say_and_wait([callname, '……', callname, '……']);
      await me.say_and_wait('뜨거워!');
      await era.printAndWait([
        '운동 후의 열기, 발정기의 열기, 그리고 운명의 상대를 마주한 흥분의 열기가 이 밀착된 포옹을 통해 ',
        me.get_colored_name(),
        '에게 그대로 전해졌다.',
      ]);
      await era.printAndWait([
        '하얀 스타킹을 신은 여우 아가씨가 ',
        me.get_colored_name(),
        '의 가슴팍에 어리광 부리듯 몸을 비벼댔다.',
      ]);
      await era.printAndWait([
        kitaru.get_uma_sex_title(),
        'A:「저기, 저 두 사람 뭐 하는 거야?」',
      ]);
      await era.printAndWait([
        kitaru.get_uma_sex_title(),
        'B:「승자의 축하 의식 아닐까?」',
      ]);
      await era.printAndWait([
        '어두컴컴한 지하 통로 안, ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '의 아랫배를 덮은 옷 사이로 은은한 분홍빛 광채가 새어 나오는 것을 보았다.',
      ]);
      await era.printAndWait([
        '한시도 지체할 수 없었던 ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '를 안아 들고 대기실로 향했다.',
      ]);
      await kitaru.say_and_wait(['……못 참겠어!']);
      await era.printAndWait(['정욕으로 어지러워진 머리는 이미 제대로 된 말을 할 능력을 잃은 듯했다.']);
      await era.printAndWait([
        '뱃속의 정액과 입안에 남은 ',
        me.get_colored_name(),
        '의 정액 맛이 채 가시기도 전인 레이스 도중부터, 축축한 감각과 찌릿한 가려움, 그리고 은근한 통증이 끊임없이 ',
        kitaru.get_colored_name(),
        '를 괴롭히고 있었다.',
      ]);
      await era.printAndWait(['쾅!']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '를 문에 밀어붙이며 문을 닫았다.',
      ]);
      await era.printAndWait([
        '땀에 젖은 옷은 좀처럼 벗겨지지 않았고, 끊임없이 피어오르는 뜨거운 열기는 ',
        kitaru.get_colored_name(),
        '의 향기로운 체취를 머금은 채 ',
        me.get_colored_name(),
        '의 코끝을 자극했다.',
      ]);
      await kitaru.say_and_wait('으응……');
      await era.printAndWait([
        '오렌지색 꼬리가 슬며시 ',
        me.get_colored_name(),
        '의 허리를 감싸 안았다.',
      ]);
      await kitaru.say_and_wait('어서 와주세요…… 운명의 사람……');
      await quick_into_sex(56);
    } else if (extra_flag.rank === 1) {
      await print_event_name('레이스 승리', kitaru);
      await kitaru.say_and_wait('해피 컴 컴! 복이 왔어요~!');
      await kitaru.say_and_wait([
        '야호! 이게 다 ',
        callname,
        ' 덕분이에요! 시라오키 님 덕분이고요! 그리고 신령님의 보살핌을 받는 저 덕분이랍니다!',
      ]);
      era.printButton('「맞아!」', 1);
      era.printButton('「너무 우쭐대지 마!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (era.get('love:56') < 75) {
          await kitaru.say_and_wait('우후후! 그럼 어떻게 축하할까요?');
          await kitaru.say_and_wait('애플파이라도 먹으러 가는 건 어때요?');
          await era.printAndWait([
            '그리하여 밤에 ',
            kitaru.get_colored_name(),
            '와 함께 시나몬과 설탕 가루를 듬뿍 뿌린 애플파이를 먹었다.',
          ]);
        } else {
          await kitaru.say_and_wait(['저기, ', callname, ', 조금만 더 가까이 와주시겠어요?']);
          await kitaru.say_and_wait('에잇!');
          await era.printAndWait([
            '오렌지색 찐빵이 자연스럽게 ',
            me.get_colored_name(),
            '의 품으로 뛰어들더니, 거침없이 ',
            me.get_colored_name(),
            '의 옷에 ',
            kitaru.sex,
            '의 체취를 남기기 시작했다.',
          ]);
          await kitaru.say_and_wait('에헤헤, 운명의 사람의 냄새~!');
        }
      } else {
        await kitaru.say_and_wait('으으! 듣고 보니 그렇네요!');
        await kitaru.say_and_wait(['그럼 ', callname, ', 이걸 받아주세요!']);
        await era.printAndWait('메고 있던 마네키네코 가방에서 부적 하나를 꺼냈다.');
        await kitaru.say_and_wait('이건 말이죠! 승자의 행운이 응축된 부적이랍니다!');
        await kitaru.say_and_wait(['앞으로도 ', callname, '께는 좋은 일이 가득할 거예요!']);
      }
    } else if (extra_flag.rank <= 5) {
      await print_event_name('입착', kitaru);
      await kitaru.say_and_wait('으으…… 이길 수 있을 줄 알았는데.');
      await kitaru.say_and_wait('다음엔! 다음번엔 꼭 문제없을 거예요!');
      await era.printAndWait([
        '레이스에서 패배한 ',
        kitaru.get_colored_name(),
        '는 잠시 낙담하는 듯했으나, 금세 ',
        kitaru.sex,
        ' 특유의 낙천적인 상태로 회복했다.',
      ]);
    } else if (extra_flag.rank <= 10) {
      await print_event_name('패배', kitaru);
      await kitaru.say_and_wait('ㅈ…… 졌다고요?');
      await era.printAndWait([
        '대기실로 돌아가기도 전에, ',
        kitaru.get_colored_name(),
        '는 이미 ',
        me.get_colored_name(),
        '의 품에 안겨 큰 소리로 울음을 터뜨렸다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 가슴팍에 밀착한 귀, ',
        me.get_colored_name(),
        '의 왼쪽 다리를 감싼 꼬리. ',
        kitaru.sex,
        '는 마치 상대의 품속으로 녹아들기라도 하려는 듯 ',
        me.get_colored_name(),
        '을(를) 필사적으로 껴안았다.',
      ]);
      await era.printAndWait(
        '어찌 된 영문인지, 이토록 처량한 광경을 지켜보던 승자조차 부러움 섞인 눈길을 보냈다.',
      );
    }
  }
};