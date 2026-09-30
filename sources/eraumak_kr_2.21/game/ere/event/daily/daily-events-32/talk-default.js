const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {function[]} buffer
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {TachyonEduMarks} edu_marks
 */
function tachyon_default_talk(buffer, tachyon, me, callname, edu_marks) {
  buffer.push(
    async () => {
      await tachyon.say_and_wait([
        callname,
        '! 오늘 약은 오른쪽의 초록색 병으로 할 건가, 아니면 왼쪽의 빨간색 병으로 할 건가?',
      ]);
      await tachyon.say_and_wait(
        '둘 다 싫다고? 역시 그럴 줄 알았네, 제3의 선택지인 무지개색이 정답이군!',
      );
    },
    async () => {
      await tachyon.say_and_wait([callname, '……내일 도시락 말일세.']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '에게 내일은 휴일이라고 말하려 시도했다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '에…… ',
        callname,
        '. 아, 아무리 쉬는 날이라도 사람은 밥을 먹어야 하지 않겠나.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 걱정스러운 눈빛으로 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await me.say_and_wait('…………');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 문득 깨달았다. 이 상황에선 무슨 말을 해도 소용없다는 것을. 결국 ',
        tachyon.sex,
        '의 도시락을 만들어 주기로 약속할 수밖에 없었다.',
      ]);
    },
    async () => {
      await tachyon.say_and_wait([callname, '~~ 오늘 옷도 부탁하네.']);
      await tachyon.say_and_wait('하아? 직접 빨라고? 내 시간이 그냥 하늘에서 뚝 떨어지는 줄 아나?');
      await tachyon.say_and_wait('게다가 이건 자네에게도 포상이지 않나~~');
      await tachyon.say_and_wait('무려 내가 입었던 속옷이라네~~');
      await tachyon.say_and_wait('냄새난다고!? 이봐! 너무 실례잖나!');
    },
    async () => {
      await tachyon.say_and_wait('하아? 수업에 안 나가면 성적에 문제가 생기지 않겠냐고?');
      await tachyon.say_and_wait([
        callname,
        ', 자네도 알다시피 주입식 교육은 범인을 인재로 만들기 위한 것이지. 천부적인 재능을 가진 내게 그딴 건 필요 없다네.',
      ]);
      await tachyon.say_and_wait([
        '『그래서 시험에 안 가도 괜찮은 거냐』? 무슨 소리를 하는 건가, ',
        callname,
        ', 시험은 내일이지 않나…… 오늘이라고!?',
      ]);
    },
    async () => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 평소와 다르게 아무 말 없이 몸을 당신에게 기대어 왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ', 왜 그러지?']);
      era.println();
      await me.say_and_wait('아무것도 아냐.');
      await era.printAndWait([
        me.get_colored_name(),
        '의 대답 이후에도 ',
        tachyon.sex,
        '는 계속해서 ',
        me.get_colored_name(),
        '에게 몸을 맡겼다.',
      ]);
      await era.printAndWait('두 사람 사이에 대화는 없었으며, 그렇게 한동안 침묵 속에서 시간을 보냈다.');
    },
    async () => {
      await tachyon.say_and_wait([
        callname,
        '? 마침 잘 왔군, 어서 이것들을 방염 처리된 특수 용지에 필사하게!',
      ]);
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 25),
        ' 그 녀석! 고작 ',
        tachyon.sex,
        '를 실험체로 한 번 썼다고 내 실험 자료를 홀랑 태워버리겠다고 협박하지 뭔가!',
      ]);
      await tachyon.say_and_wait([
        '겨우 달래서 ',
        tachyon.sex,
        '가 오후 3시까진 기다려 주기로 했으니, 그전까지 빨리 옮겨 적어야 하네!',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 허겁지겁 ',
        tachyon.get_colored_name(),
        '에게 이끌려 책상에 앉아 필사 작업을 돕기 시작했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '의 마음속에 의구심이 피어올랐다. 보통 정말 태울 거라면 미리 예고를 하던가……?',
      ]);
      era.println();
      await era.printAndWait(
        '아니나 다를까, 오후 3시가 지나도 연구 자료는 불타지 않았고 실험실은 평소처럼 평화로웠다.',
      );
      await era.printAndWait([
        '피해를 입은 것은 반나절 동안 방대한 자료를 옮겨 적느라 녹초가 된 ',
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 손뿐이었다.',
      ]);
    },
    async () => {
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 9),
        ' 그 아이…… 꽤 귀엽지 않나?',
      ]);
      await tachyon.say_and_wait([
        '왠지 모르게 ',
        tachyon.sex,
        '를 볼 때마다 부성애와 비슷한 감정이 솟구친단 말이지.',
      ]);
      if (tachyon.sex_code - 1) {
        era.println();
        await me.say_and_wait('모성애가 아니고?');
      }
      era.println();
      if (era.get('cflag:0:종족')) {
        await tachyon.say_and_wait([
          '이미 ',
          me.get_uma_sex_title(),
          '가 되었으면서 아직도 모르겠나? ',
          callname,
          '은 참 둔하군.',
        ]);
        era.println();
        await me.say_and_wait('……무슨 말을 하는 건지 모르겠어.');
      } else {
        await tachyon.say_and_wait([
          '아니…… 설명하기 힘든 감각이라네. 자네도 ',
          tachyon.get_uma_sex_title(),
          '가 되면 이해할 수 있을걸세.',
        ]);
        era.println();
        await me.say_and_wait([
          '내가 언젠가 당연히 ',
          tachyon.get_uma_sex_title(),
          '가 될 것처럼 말하지 말라고!?',
        ]);
      }
    },
    async () => {
      await tachyon.say_and_wait('스카이 군은 참 착한 아이군……');
      era.println();
      await me.say_and_wait([
        '응? 타키온이랑 ',
        sys_get_colored_callname(0, 20),
        ', 아는 사이였어?',
      ]);
      era.println();
      await tachyon.say_and_wait('아니…… 내가 말하는 스카이 군은 자네가 생각하는 그 아이가 아닐 걸세.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 갸웃거리며 ',
        tachyon.get_colored_name(),
        '을 바라보았다. 학원에 다른 스카이가 또 있었나?',
      ]);
      era.println();
      await tachyon.say_and_wait(['……아니, 됐네. ', callname, ', 방금 말은 잊어주게.']);
    },
  );
  !edu_marks.drink &&
    buffer.push(async () => {
      edu_marks.drink = 1;
      await tachyon.say_and_wait([callname, '~~ 뭐 좀 마시겠나?']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 갑자기 얼굴 가득 얄미운 미소를 지으며 ',
        me.get_colored_name(),
        '에게 물었다.',
      ]);
      await era.printAndWait('갑작스러운 친절에는 반드시 꿍꿍이가 있는 법이다.');
      await era.printAndWait([
        '그렇다고는 해도 대놓고 거절하면 ',
        tachyon.sex,
        '가 분명 적반하장으로 화를 내리라.',
      ]);
      era.println();
      await tachyon.say_and_wait('어떤가, 뭘 마시겠나?');
      era.println();
      era.print('어떻게 할까……');
      era.printButton('홍차', 1);
      era.printButton('커피', 2);
      era.printButton('루트비어', 3);
      era.printButton('마시지 않는다', 4);
      switch (await era.input()) {
        case 1:
          await era.printAndWait('역시 정석인 홍차가 좋겠지.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 마치 ',
            me.get_colored_name(),
            '이(가) 이걸 고를 줄 알았다는 듯 고개를 끄덕이며, 등 뒤에서 이미 무언가 섞인 홍차를 꺼냈다.',
          ]);
          era.drawLine();
          await era.printAndWait([
            '…………',
            me.get_colored_name(),
            '은(는) 약 가루가 채 다 녹지도 않은 홍차를 보며 어이없는 표정을 지었다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '왜 그러나, ',
            callname,
            '? 내가 직접 정성껏 우린 차라네. 자, 어서 마시게.',
          ]);
          era.println();
          await era.printAndWait([
            '……어쩔 수 없군. 홍차를 골랐을 때부터 ',
            me.get_colored_name(),
            '은(는) 이미 이런 전개가 될 줄 알고 있었지 않았나.',
          ]);
          await era.printAndWait([me.get_colored_name(), '은(는) 홍차를 단숨에 들이켰다.']);
          await era.printAndWait('음, 맛있고 깔끔하네.');
          break;
        case 2:
          if (era.get('cflag:25:모집상태') === recruit_flags.yes) {
            await me.say_and_wait([
              '커피로 할게. 요즘 ',
              sys_get_colored_callname(0, 25),
              '가 타주는 커피를 자주 마시거든.',
            ]);
          } else {
            await me.say_and_wait('커피로 할게. 요즘 일이 바빠서 자주 마시게 되더라고.');
          }
          era.println();
          await tachyon.say_and_wait('어째서 그런 진흙물같이 쓰고 맛없는 음료를 마시는 건가.');
          era.println();
          await me.say_and_wait([
            sys_get_colored_callname(0, 25),
            '에게 사과해 임마.',
          ]);
          era.println();
          await tachyon.say_and_wait('됐네, 마시고 싶으면 마시게나.');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 못 이기는 척 등 뒤에서 미리 준비해둔 음료를 꺼냈다.',
          ]);
          era.drawLine();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 눈앞의 약 가루가 녹지 않은 진홍색 액체를 보며, 태클 걸 곳이 너무 많아 말이 나오지 않는 기분을 처음으로 느꼈다.',
          ]);
          era.println();
          await me.say_and_wait('우선…… 이게 커피야?');
          await tachyon.say_and_wait('……카페인이 잔뜩 들었으니 커피라고 치세.');
          await tachyon.say_and_wait('…………');
          await me.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            me.get_couple_title(),
            ' 두 사람은 말없이 서로를 응시하다가, ',
            me.get_colored_name(),
            '은(는) 체념한 채 음료를 마셨다.',
          ]);
          break;
        case 3:
          await me.say_and_wait('루트비어로 할게. 비주류긴 해도 확실히 맛있으니까.');
          era.println();
          await tachyon.say_and_wait('에…… 자네는 왜 그런 요상한 맛의 음료를 좋아하는 건가.');
          era.println();
          await me.say_and_wait('내가 좋다는데 뭐 보태준 거 있어?');
          era.println();
          await tachyon.say_and_wait(
            '………아니, 그 음료는 냄새도 맛도 딱 약 같지 않나. 그럼 차라리 그냥 내 약을 직접 마시는 게 낫지 않겠나.',
          );
          era.println();
          await me.say_and_wait('!?');
          await era.printAndWait(['아무래도 ', tachyon.sex, '는 이제 숨길 생각조차 없는 듯했다.']);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 약을 탄 홍차를 옆으로 치워버리고, 가운 안에서 형광색 약을 직접 꺼냈다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 형식적으로 두어 번 저항해 보았으나, 곧바로 억지로 입에 부어져 단숨에 마시게 되었다.',
          ]);
          await era.printAndWait(
            '그나저나 이 약, 약 맛이 전혀 안 나는데? 어째서 오야코동 맛이 나는 거냐고!?',
          );
          break;
        case 4:
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 거절했다. 비록 저항이 헛수고일지라도 ',
            me.get_colored_name(),
            '은(는) 자신만의 반항을 하기로 했다.',
          ]);
          era.println();
          await era.printAndWait(
            '이것이야말로, 이것이야말로 인간의 각오다아아아아아아아아아아!',
          );
          era.println();
          await tachyon.say_and_wait('시끄럽네.');
          era.println();
          await era.printAndWait([
            '그러나 각오가 ',
            me.get_colored_name(),
            '의 소우주를 폭발시켜 주지는 않았다. 인간이 아무리 용을 써봐야 ',
            tachyon.get_uma_sex_title(),
            '를 이길 수는 없는 법. 5초 뒤 ',
            me.get_colored_name(),
            '은(는) 얼굴을 붙잡힌 채 강제로 입이 벌어져 액체를 들이켜게 되었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('이럴 거면 진작 마시는 게 편했을 것을.');
      }
      await era.printAndWait('탁.');
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 정신을 잃고 책상에 쓰러지는 소리였다.',
      ]);
    });
}

module.exports = tachyon_default_talk;