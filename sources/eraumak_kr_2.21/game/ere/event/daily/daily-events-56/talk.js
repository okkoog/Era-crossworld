const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { attr_enum } = require('#/data/train-const');

module.exports = async () => {
  const message = [],
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    sex_mark = era.get('mark:56:음문'),
    sex_happy = era.get('mark:56:쾌락'),
    sex_love = era.get('mark:56:동심'),
    edu_marks = new FukuEventMarks(),
    callname = sys_get_callname(56, 0);
  if (sex_mark === 1) {
    message.push(async () => {
      await era.printAndWait([
        kitaru.sex,
        '는 ',
        me.get_colored_name(),
        '에게 음문이 새겨진 자신의 하복부를 슬쩍 가리켰다.',
      ]);
      await kitaru.say_and_wait('저기, 훈련할 때 항상 남들에게 들킬까 봐 무서워요……');
    });
  } else if (sex_mark >= 2) {
    message.push(async () => {
      await era.printAndWait([
        '주변을 두리번거리며 살핀 뒤, ',
        kitaru.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '을(를) 향해 옷자락을 걷어 올리며 배를 드러내 보였다.',
      ]);
      await era.printAndWait([
        '분홍빛으로 점멸하는 문양은, ',
        kitaru.get_teen_sex_title(),
        '의 몸 위에서 자신의 직무를 충실히 수행하고 있었다.',
      ]);
    });
  }

  if ((sex_happy || sex_mark) === 1) {
    message.push(async () => {
      await kitaru.say_and_wait([
        '저기, ',
        callname,
        ', 훈련이 끝난 뒤에 시간 좀 있으신가요?',
      ]);
    });
  } else if ((sex_happy || sex_mark) === 2) {
    message.push(async () => {
      await era.printAndWait([
        '선명한 홍조가 ',
        kitaru.get_colored_name(),
        '의 얼굴에 서렸고, 두 손으로 트레이닝복 위에서 자신의 하복부를 꾹 눌렀다.',
      ]);
      await kitaru.say_and_wait(['으으, 다 ', callname, ' 때문이라니까요!']);
    });
  } else if ((sex_happy || sex_mark) === 3) {
    message.push(async () => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 점점 과해지는 요구에 못 이겨 ',
        kitaru.sex,
        '에게 입을 맞추었다.',
      ]);
      await kitaru.say_and_wait('꿀꺽……');
      await era.printAndWait([
        kitaru.sex,
        '의 손끝이 ',
        me.get_colored_name(),
        '의 가랑이 근처를 아슬아슬하게 스쳐 지나갔다.',
      ]);
    });
  }

  if (sex_love === 1) {
    message.push(async () => {
      await era.printAndWait([
        '운수대통이니 뭐니 하는 말을 외치며, ',
        kitaru.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '의 품으로 뛰어들었다.',
      ]);
    });
  } else if (sex_love >= 2) {
    message.push(async () => {
      await kitaru.say_and_wait([
        '일심동체! ',
        callname,
        ', 저는 영원히 당신 곁에 있을게요!',
      ]);
    });
  }

  if (era.get('base:56:체력') < era.get('maxbase:56:체력') * 0.45) {
    message.push(
      () => kitaru.say_and_wait('오늘은 휴식이 길할 것 같네요……'),
      async () => {
        await era.printAndWait('눈동자의 별빛이 흐릿해졌다.');
        await era.printAndWait([kitaru.sex, '를 쉬게 해 줄 때가 된 모양이다.']);
      },
    );
  }
  switch (era.get('cflag:56:컨디션')) {
    case -2:
      message.push(async () => {
        await kitaru.say_and_wait(
          '운세는 꼴찌에…… 제비뽑기는 대흉…… 거기다 검은 고양이가 앞을 가로질러 가다니, 저, 전 이제 끝이에요~!',
        );
      });
      break;
    case -1:
      message.push(async () => {
        await kitaru.say_and_wait('제비뽑기에서 흉이 나왔어요…… 불길한 일이 생기면 어쩌죠?');
      });
      break;
    case 0:
      message.push(async () => {
        await kitaru.say_and_wait('오늘 운세는 좋지도 나쁘지도 않네요……');
        await kitaru.say_and_wait('평범한 것도 나름 괜찮을지도요?');
      });
      break;
    case 1:
      message.push(async () => {
        await kitaru.say_and_wait('준비 작업과 점술도 모두 끝났어요, 자, 시작해 보죠……');
      });
      break;
    case 2:
      message.push(async () => {
        await kitaru.say_and_wait([
          callname,
          ', 제 말 좀 들어보세요! 지금 제 운세는 대길을 초월한 초길이라고요!',
        ]);
        await kitaru.say_and_wait('후후후, 지금의 저는 완전 무적이에요!');
      });
  }

  await get_random_entry(message)();

  if (edu_marks.luck_train > 0) {
    era.drawLine();
    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 책상 위에 남겨둔 쪽지를 발견했다.',
    ]);
    switch (edu_marks.luck_train - 1) {
      case attr_enum.speed:
        await kitaru.used_to_say_and_wait('맞다, 오늘은 스피드 트레이닝이 길한 모양이에요!');
        break;
      case attr_enum.endurance:
        await kitaru.used_to_say_and_wait('오늘의 길한 항목은 스태미나 트레이닝이네요!');
        break;
      case attr_enum.strength:
        await kitaru.used_to_say_and_wait('파워 트레이닝이 꽤 괜찮아 보여요!');
        break;
      case attr_enum.toughness:
        await kitaru.used_to_say_and_wait('근성 트레이닝이 좀 더 어울릴지도 모르겠어요!');
        break;
      case attr_enum.intelligence:
        await kitaru.used_to_say_and_wait('지능 트레이닝이야말로 대길이에요!');
    }
  }
};