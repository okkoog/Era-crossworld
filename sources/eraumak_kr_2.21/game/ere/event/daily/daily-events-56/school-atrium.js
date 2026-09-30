const era = require('#/era-electron');

const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  hook.arg = (await select_action_in_atrium(56)) === 0;
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:56:육성턴수합산'),
    message = [];
  if (hook.arg) {
    message.push(async () => {
      await kitaru.say_and_wait(
        '시라오키 님이 제 기도를 들어주셔서, 오늘 운세가 더 좋아지게 해주셨으면 좋겠네요!',
      );
      if (edu_weeks > 120) {
        await kitaru.say_and_wait(
          '으으음! 물론 그렇게 되지 않더라도, 전 노력하겠지만요!',
        );
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 끝이 보이지 않는 고목의 구멍을 향해 크게 소리쳤다.',
      ]);
    });
    if (edu_weeks > 42) {
      //판단 소위 시라오키 님
      message.push(async () => {
        await kitaru.say_and_wait([
          kitaru.get_bigger_sibling_sex_title(),
          '! 저, 반드시 훌륭한 레이스 ',
          kitaru.get_uma_sex_title(),
          ' 가 될게요!',
        ]);
        await kitaru.say_and_wait('그러니까…… 으으…… 꼭 지켜보셔야 해요!');
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait('그리고…… 저와 함께 걸어가 줄 사람도 찾았거든요!');
          await kitaru.say_and_wait('이제 더 이상 제 걱정은 하지 마세요!');
        }
      });
    }
  } else {
    message.push(async () => {
      await kitaru.say_and_wait('저랑 같이 학원 안에 있는 파워 스폿을 보러 가지 않으실래요?');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 안내에 따라, ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '와 함께 학원 안을 한 바퀴 돌았다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 목적이 달성되었는지는 알 수 없으나, 담당 우마무스메에게 꼬리허그를 당한 ',
        me.get_colored_name(),
        '은(는) 오늘 트레센 학원 커뮤니티의 핫 이슈가 되었다.',
      ]);
    });
    if (era.get('love:56') >= 75) {
      message.push(async function () {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '은(는) ',
          me.get_colored_name(),
          '의 팔짱을 낀 채, 수많은 학생들 사이를 지나쳐 갔다.',
        ]);
        await kitaru.say_and_wait('많은 사람들이 쳐다보고 있네요……');
        await era.printAndWait([
          '말은 그렇게 하면서도, ',
          me.get_colored_name(),
          '은(는) ',
          kitaru.get_colored_name(),
          '의 행동이 한층 더 대담해졌음을 깨달았다.',
        ]);
      });
    }
  }
  await get_random_entry(message)();
};