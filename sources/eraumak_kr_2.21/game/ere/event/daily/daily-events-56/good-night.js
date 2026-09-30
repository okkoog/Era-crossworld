const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    callname = sys_get_callname(56, 0);
  era.print([
    '분주했던 하루가 끝나고, ',
    kitaru.get_colored_name(),
    '를 학생 기숙사 앞까지 배웅해 주었다.',
  ]);
  const check = get_custom_check(56).is_want_make_love(),
    message = [];
  if (check > 0) {
    message.push(async () => {
      era.print([
        '평소처럼 작별 인사를 하려던 찰나, ',
        kitaru.get_colored_name(),
        '가 평소와 다르게 ',
        me.get_colored_name(),
        '의 손을 꽉 맞잡았다.',
      ]);
      kitaru.say('저기! 오늘 운세가 길하다고 나와서, 외박 신청 같은 건 이미 다 끝내 뒀거든요……');
      era.print([
        '발그레하게 상기된 얼굴의 ',
        kitaru.get_colored_name(),
        '는 무릎을 비비적거리며 손가락 끝으로 ',
        me.get_colored_name(),
        '의 옷자락을 만지작거렸다.',
      ]);
    });
    if (kitaru.sex_code - 1) {
      message.push(async () => {
        era.print([
          '평소처럼 작별 인사를 하려던 찰나, ',
          kitaru.get_colored_name(),
          '가 평소와 다르게 ',
          me.get_colored_name(),
          '의 손을 꽉 맞잡았다.',
        ]);
        kitaru.say('저기……');
        era.print([
          '상기된 얼굴의 ',
          kitaru.get_colored_name(),
          '가 트레이닝복 상의의 지퍼를 내리자, 드러난 두 개의 풍만한 가슴이 ',
          kitaru.sex,
          '의 점차 흐트러지는 자세에 맞춰 부끄러운 듯 흔들렸다.',
        ]);
        kitaru.say([callname, '도 알고 계시죠……?']);
      });
    }
    await get_random_entry(message)();
    era.print([
      '이미 하트 모양으로 변해버린 별 모양 눈동자가 뜨거운 시선으로 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    era.printButton('받아들인다', 1);
    era.printButton('거절한다', 2);
    if ((await era.input()) === 1) {
      hook.arg = true;
    } else if (check === 2) {
      await kitaru.say_and_wait('……정말, 정말로 안 되는 건가요? 분명 지금이 딱 대길인데 말이죠.');
      await era.printAndWait([
        '장난스럽게 촙을 날리려던 오른손은 까치발을 든 ',
        kitaru.get_colored_name(),
        '에 의해 손목이 붙잡혔다. 뼈마디가 울리는 듯한 소리와 함께, 여전히 얼굴에 미소를 띤 오렌지색 ',
        kitaru.get_uma_sex_title(),
        '는 ',
        me.get_colored_name(),
        '을(를) 강제로 끌고 학생 기숙사를 떠났다.',
      ]);
      hook.arg = true;
    } else {
      await kitaru.say_and_wait('다음에는…… 역시 미리 점을 쳐 보는 게 좋을까?');
      await kitaru.say_and_wait('아니면, 나도 조금 더 강하게 나가 볼까?');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 기숙사 안으로 걸어 들어가는 것을 배웅하던 중, ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '가 그렇게 중얼거리는 소리를 들었다.',
      ]);
      hook.arg = false;
    }
    return;
  } else if (era.get('love:56') >= 75) {
    message.push(
      async () => {
        era.print([
          me.get_colored_name(),
          '이(가) 방심한 사이, ',
          kitaru.get_colored_name(),
          '가 갑작스럽게 ',
          me.get_colored_name(),
          '을(를) 껴안았다.',
        ]);
        kitaru.say('쪽……');
        kitaru.say('성공했네요!');
        era.print([
          me.get_colored_name(),
          '이(가) 정신을 차리기도 전에 ',
          kitaru.get_colored_name(),
          '는 이미 기숙사 안으로 뛰어 들어간 뒤였다.',
        ]);
        era.print(['입술에는 아직 ', kitaru.sex, '의 달콤한 향기가 남아 있었다.']);
      },
      async () => {
        kitaru.say([callname, '과 함께 있으면 시간이 항상 빨리 가버리네요!']);
        era.print([
          '미소 띤 얼굴의 ',
          kitaru.get_colored_name(),
          '와 눈이 마주친 순간, 그녀는 돌연 ',
          me.get_colored_name(),
          '에게 입을 맞추었다.',
        ]);
        era.print([
          '그 광경은 주변에 있던 다른 ',
          kitaru.get_uma_sex_title(),
          '들의 시선을 끌어 수군거리게 만들었다.',
        ]);
      },
    );
  } else if (era.get('love:56') >= 50) {
    message.push(async () => {
      kitaru.say('내일 봐요!');
      era.print([
        '기습적으로 달려들어 ',
        me.get_colored_name(),
        '에게 눈에 띄는 포옹을 선사한 뒤, ',
        kitaru.get_colored_name(),
        '는 기숙사 안으로 도망치듯 뛰어 들어갔다.',
      ]);
    });
  } else {
    message.push(async () => {
      kitaru.say('오늘도 고생하셨어요!');
      era.print([
        kitaru.sex,
        '는 ',
        me.get_colored_name(),
        '에게 손을 흔들어 보이곤 가벼운 발걸음으로 기숙사에 들어갔다.',
      ]);
    });
  }

  await get_random_entry(message)();
};