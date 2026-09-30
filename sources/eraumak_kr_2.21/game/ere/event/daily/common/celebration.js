/**
 * @file 日常地文 - 节日
 * @author 雞雞
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_celebration } = require('#/data/info-generator');

/** @this {CustomizedDaily} */
module.exports = async function () {
  const chara = get_chara_talk(this.id),
    me = get_chara_talk(0),
    weeks = (era.get('flag:현재턴수') - 1) % 48;
  await print_event_name(get_celebration(), chara);
  switch (weeks) {
    case 0:
      await era.printAndWait([
        '새로운 한 해를 맞이하여, ',
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 트레이닝실에서 함께 즐거운 축하 파티를 열었다.',
      ]);
      break;
    case 5:
      await era.printAndWait([
        '오늘은 발렌타인데이다. ',
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 트레이닝실에서 서로 선물을 주고받았다. 기뻐하는 상대방의 모습을 보며 ',
        me.get_colored_name(),
        ' 또한 마음이 훈훈해지는 것을 느꼈다.',
      ]);
      break;
    case 8:
      await era.printAndWait([
        '전당 주간은, 레이스를 지망하는 ',
        chara.get_uma_sex_title(),
        '들에게 있어 가장 중요한 축제 중 하나이다.',
      ]);
      if (era.get(`cflag:${chara.id}:명예의전당`) === 2) {
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '이(가) 거둔 뛰어난 성적 덕분에 ',
          me.get_couple_title(),
          '은 당연하다는 듯 주역으로서 초대받았다.',
        ]);
        if (era.get(`cflag:${chara.id}:육성턴수합산`) === 143 + 9) {
          await era.printAndWait([
            '때가 되었다. ',
            chara.get_colored_name(),
            '은(는) 감출 수 없는 기쁨과 자부심을 가득 안고 무대 중앙으로 걸어 나갔다.',
          ]);
        }
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          chara.sex,
          '가 한 걸음씩 무대 앞으로 나아가 ',
          me.get_couple_title(),
          '의 분투했던 지난날을 이야기하며, 좌중의 관객들과 경험을 나누는 모습을 지켜보았다.',
        ]);
        if (era.get(`cflag:${chara.id}:육성턴수합산`) === 143 + 9) {
          await era.printAndWait([
            me.get_colored_name(),
            '의 시야가 조금씩 흐릿해지며, ',
            me.get_couple_title(),
            ' 사이에 있었던 수많은 추억들이 주마등처럼 스쳐 지나갔다……',
          ]);
        }
      } else if (era.get(`cflag:${chara.id}:명예의전당`) === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 함께 트레센 학원의 대강당으로 향해 행사에 참여했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 담당은 귀와 꼬리가 무의식적으로 약간 처져 있어, 그리 기운이 넘쳐 보이지는 않았다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '을(를) 바라보며 한숨을 내쉬고는, 조심스럽게 한쪽 손을 ',
          chara.sex,
          '의 어깨에 얹어 부축하며 나아갔다. 덕분인지 ',
          chara.sex,
          '도 조금은 기운을 차린 듯했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '도 최선을 다했지만, 성적이 전당에 입성하기에는 부족했다. 하지만 인생에는 늘 아쉬움이 남는 법이다.',
        ]);
        await era.printAndWait([
          '비록 최후의 승자가 되지는 못했으나, ',
          me.get_couple_title(),
          '은 축제 분위기에 젖어 잠시나마 마음의 여유를 가질 수 있었다.',
        ]);
      } else if (era.get(`cflag:${chara.id}:성장단계`) === 5) {
        await era.printAndWait([
          '전당 주간은 현역 우마무스메들에게 중요한 날일 뿐만 아니라, ',
          me.get_colored_name(),
          '과(와) 같은 관계자들에게도 매우 바쁘고 긴장되는 날이다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 함께 행사장에 들어가 이번 기념식의 각종 내용을 진지하게 기록했다…… 때때로 서로를 쳐다보면서도, 다시 몰입하여 필요한 정보를 수집해 나갔다.',
        ]);
      } else {
        await era.printAndWait([
          '이 시기가 되면 트레센 학원에서는 행사가 열리는데, 그중 하나는 전당에 입성한 몇 명의 ',
          chara.get_uma_sex_title(),
          '들을 초청해 며칠 동안 강연을 열고, 다른 ',
          chara.get_uma_sex_title(),
          '들과 트레이너들에게 경험을 전수하는 것이다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 명성을 듣고 찾아온 인파 속에서 어렵사리 자리를 잡아 앉았다.',
        ]);
        era.get(`cflag:${chara.id}:종족`) &&
          (await era.printAndWait([
            '무대 위 ',
            chara.get_uma_sex_title(),
            '의 차분하면서도 열정적인 목소리가 울려 퍼지자, ',
            me.get_colored_name(),
            '은(는) ',
            chara.get_colored_name(),
            '이(가) 허리를 곧게 펴고 앉아 동경 어린 눈빛을 빛내는 것을 발견했다……',
          ]));
      }
      break;
    case 13:
      await era.printAndWait([
        '4월의 팬 대감사제에서, ',
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 팬들을 위해 함께 장기 자랑을 선보였다.',
      ]);
      break;
    case 29:
      await era.printAndWait([
        '축제 기간 동안, ',
        me.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '을(를) 여름 합숙 장소 옆에 있는 시장에 함께 놀러 가자고 초대하기로 결정했다.',
      ]);
      if (era.get(`cflag:${chara.id}:성장단계`) === 5) {
        if (era.get(`love:${chara.id}`) >= 50) {
          await era.printAndWait([
            chara.sex,
            '는 바로 동의했고 ',
            me.get_couple_title(),
            '은 잠시 동안 짐을 내려놓고, 하루 종일 마음껏 즐겁게 놀았다……',
          ]);
        } else {
          await chara.say_and_wait('데이트인가요?');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 화면의 메시지 알림을 보며 자기도 모르게 미소 지었고, 답장을 보내려던 찰나 새로운 메시지가 도착했다.',
          ]);
          await chara.say_and_wait('그럼 그렇게 정한 거예요.');
          await era.printAndWait([
            '문자 아래에는 유카타를 입고 예쁘게 꾸민 ',
            chara.sex,
            '의 셀카가 있었다. ',
            me.get_colored_name(),
            '은(는) 자신도 모르게 숨을 들이켰다……',
          ]);
          await era.printAndWait([
            '말할 것도 없이, 이것은 ',
            me.get_couple_title(),
            '에게 있어 멋진 추억이 될 것이다.',
          ]);
        }
      } else if (era.get(`love:${chara.id}`) >= 50) {
        await era.printAndWait([
          chara.sex,
          '는 흔쾌히 동의했고, ',
          me.get_couple_title(),
          '은 모든 업무를 뒤로한 채 하루 종일 신나게 즐겼다……',
        ]);
      } else {
        await era.printAndWait([
          chara.sex,
          '는 즉시 ',
          me.get_colored_name(),
          '에게 답장을 보냈다. ',
          me.get_colored_name(),
          '이(가) 입구에서 미리 기다리고 있자, 어느덧 새 유카타를 차려입고 정성껏 단장한 ',
          chara.sex,
          '의 모습이 눈에 들어왔다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 반응하기도 전에, 그녀는 살며시 미소 지으며 ',
          me.get_colored_name(),
          '의 팔짱을 끼고는 그대로 이끌었다……',
        ]);
        await era.printAndWait([me.get_couple_title(), '은(는) 즐거운 하루를 보냈다.']);
      }
      break;
    case 39:
      if (era.get(`cflag:${chara.id}:성장단계`) === 5) {
        await era.printAndWait(['트레센의 축제 행사는 종종 다른 곳과는 사뭇 다르다.']);
        await era.printAndWait([
          '예를 들어 오늘처럼…… ',
          me.get_colored_name(),
          '은(는) 곁에서 조금 우스꽝스럽고 기괴한 분장을 한 ',
          chara.sex,
          '를 보며 속으로 한숨을 내쉬었다.',
        ]);
        await era.printAndWait(
          '본래 아이들이 정성껏 분장하고 뛰놀면 어른들은 집에서 사탕을 나눠주며 기다리는 축제였을 터다. 하지만 학원 상층부에서 「학생들과 하나가 되자」는 등의 이유로 교직원들도 분장을 하고 나가 사탕을 나눠줄 것을 권장했고, 이를 위해 특별히 반차까지 주었다.',
        );
        await era.printAndWait('어쩌면…… 그저 몇몇 어른들이 놀고 싶어서 핑계를 만든 것일지도 모른다.');
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 그런 생각을 하던 찰나, 옆에서 살기 어린 시선이 느껴져 황급히 고개를 가로저으며 ',
          chara.get_colored_name(),
          '의 뒤를 바짝 따랐다.',
        ]);
        await era.printAndWait('피곤한 밤이었지만, 나름대로 재미는 있었다.');
      } else {
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 휴식을 즐기고 있을 때, 갑자기 문에서 조급하지 않으면서도 격렬한 노크 소리가 들려왔다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 누구의 소행인지 대충 짐작이 갔기에, 문을 열고 기괴한 복장을 한 ',
          chara.get_colored_name(),
          '에게 깜짝 놀란 척을 해주며 ',
          chara.sex,
          '과(와) 함께 사탕을 받으러 밖으로 나갔다……',
        ]);
        await era.printAndWait('가는 길에 꽤나 희한한 것들을 많이 본 것 같다.');
      }
      break;
    case 47:
      await era.printAndWait([
        '크리스마스가 찾아왔다. ',
        me.get_colored_name(),
        '과(와) ',
        chara.get_colored_name(),
        '은(는) 함께 산타클로스로 분장해 축하했고, ',
        me.get_couple_title(),
        '은(는) 밤늦게까지 떠들썩하게 놀며 넘치는 에너지를 모두 쏟아부었다.',
      ]);
  }
};