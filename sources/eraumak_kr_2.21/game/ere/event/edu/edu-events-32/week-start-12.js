const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

const effects = [
  '훈련에 더 쉽게 집중하게 만드는',
  '칼로리를 빠르게 소모하게 만드는',
  '우마무스메에게 모유가 나오게 하는',
  '이성을 살짝 약화시키는',
];

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.second_chance = async (tachyon, me, callname) => {
    await print_event_name('유레카', tachyon);
    await era.printAndWait([
      '오늘, 기분이 좋아 보이는 ',
      tachyon.get_colored_name(),
      '이 갑자기 트레이닝실로 뛰어 들어왔다.',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      '!',
      callname,
      '! 유레카…… 유레카란 말일세!',
    ]);
    era.println();

    await era.printAndWait([
      '어딘지 모르게 익숙한 구절을 듣고, ',
      me.get_colored_name(),
      '은(는) 긴장하며 ',
      tachyon.get_colored_name(),
      '을 살펴보았으나, ',
      tachyon.sex,
      '가 입고 있는 것이 목욕 수건도 아니고 막 씻고 나온 모습도 아니라는 것을 확인하고서야 겨우 안심했다.',
    ]);
    era.println();

    await tachyon.say_and_wait([
      callname,
      '! 내가 발견했네…… 최대의 가능성을…… 그래…… 왜, 지금까지 눈치채지 못했을까.',
    ]);
    era.println();

    await era.printAndWait('대체 무슨 소리를 하는 걸까.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 망연자실한 표정으로 ',
      tachyon.get_colored_name(),
      '을 바라보았다.',
    ]);
    await era.printAndWait([
      '왠지 모르게, ',
      me.get_colored_name(),
      '은(는) 문득 낯선 기분이 들었다.',
    ]);
    await era.printAndWait(
      '분명 이미 많은 일을 함께 겪었고, 간신히 첫 3년을 함께 걸어왔다.',
    );
    await era.printAndWait('서로에 대해 속속들이 잘 알고 있을 터였다.');
    await era.printAndWait('그런데 왜, 갑자기 형용할 수 없는 이질감이 느껴지는 것일까.');
    era.printButton('「무슨 소리를 하는 거야?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '이런, 내가 아직 설명하지 않았던가? 이런…… 너무 흥분한 나머지, 완전히 잊고 있었군.',
    );
    await tachyon.say_and_wait('뭐, 간단히 말하자면 소위 말하는———— 평행세계라네.');
    await tachyon.say_and_wait(
      '시간을 하나의 커다란 강에 비유한다면, 이 강에는 수많은 서로 다른 지류가 존재하지.',
    );
    await tachyon.say_and_wait(
      '그 지류의 대부분은 아주 가늘어서, 독자적인 강이 되지 못한 채 갈라져 나온 갈림길에 불과하네.',
    );
    await tachyon.say_and_wait(
      '하지만…… 어떤 경우에는 강이 특정 지점에서 충분히 커다란 분기를 만들어내지. ———이러한 지점이 바로 소위 말하는 가능성이라네.',
    );
    await tachyon.say_and_wait(
      '이 분기들 또한 강이 되어 아래로 흐르게 되며, 그렇게 생겨난 지류가 바로 평행세계라는 존재인 걸세.',
    );
    era.println();

    await era.printAndWait('평행세계.');
    await era.printAndWait('각종 SF나 판타지 소설에서 자주 등장하는 주제였다.');
    await era.printAndWait([
      '하지만 설마 ',
      tachyon.get_colored_name(),
      '이 이런 것을 믿고 있을 줄은 몰랐다.',
    ]);
    era.printButton('「하지만 결국, 그런 건 아무도 진위를 검증할 수 없지 않아?」', 1);
    await era.input();

    await tachyon.say_and_wait('음…… 자네 말이 맞네.');
    await tachyon.say_and_wait(
      '과학이란 모름지기 신중하게 증명해야 하는 법이지…… 가설은 이렇다 쳐도, 대체 평행세계의 존재 여부를 어떻게 증명해야 할지……',
    );
    await tachyon.say_and_wait(
      '대체 어떻게 증명해야 할까…… 역시, 어딘가에 세계 사이를 넘나들면서도 원래의 기억에 간섭받지 않고 이동할 수 있는 사람이 있어야 할 텐데, 대체 어디에 그런 사람이 있을까…… 정말이지, 고민되는군.',
    );
    era.println();

    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 말을 하는 동안 계속해서 눈길을 ',
      me.get_colored_name(),
      '쪽으로 흘긋거렸다.',
    ]);

    era.printButton('「……」', 1);
    era.printButton('「무슨 뜻이야?」', 2);
    if ((await era.input()) === 1) {
      await tachyon.say_and_wait([
        '후후…… 아무래도 자네는 내가 무슨 말을 하는지 잘 알고 있는 모양이군, ',
        callname,
        '…… 아니면, 자네를 다른 이름으로 불러야 할까…… 아니, 됐네. 자네가 다른 곳에서 누구였든 상관없네. 여기에서 자네는 나의 ',
        callname,
        '일 뿐, 그 외의 신분은 없으니까.',
      ]);
    } else {
      await tachyon.say_and_wait([
        '오? 정말 모르는 건가…… 아니면 시치미를 떼는 건가? 뭐, 상관없네. 어쨌든 여기서 자네는 나의 ',
        callname,
        '이며, 다른 신분은 없네.',
      ]);
    }
    era.println();

    await tachyon.say_and_wait(
      '그나저나, 참으로 궁금하군…… 다른 세계, 다른 가능성을 가진 아그네스 타키온은 대체 어떤 모습일지…… 벌써 한계를 뛰어넘었을지, 아니면 제자리에 갇혀 가능성 앞에서 멈춰 서 버렸을지……',
    );
    await tachyon.say_and_wait([
      callname,
      ', 자네는 반드시 기록을 잘 남겨두게나. 이번 출장의 연구 과제라고 생각하고 말이야.',
    ]);
    era.println();

    await me.say_and_wait('……에?', true);
    await era.printAndWait('잠깐만, 무슨 상황이지?');
    await era.printAndWait('왜 아까부터 이해할 수 없는 말만 늘어놓는 거야?');
    await era.printAndWait([
      '비록 ',
      tachyon.get_colored_name(),
      '이 원래 자기 할 말만 하는 사람이긴 하지만, 오늘은 너무 심했다.',
    ]);

    era.printButton(`「${sys_get_callname(0, 32)}?」`, 1);
    await era.input();

    await tachyon.say_and_wait('그리고———— 이런, 아무래도 시간이 다 된 모양이군.');
    era.println();

    await era.printAndWait('시간?');
    await era.printAndWait('무슨 시간?');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 뒤를 돌아보자, 갑자기 모든 것이 사라져 있었다.',
    ]);
    await era.printAndWait('남은 것은 오직 하얀 공백뿐이었다.');
    await era.printAndWait('순백의 공간 속에서 오직 전방에, 오래되고 짙은 오동나무 문 하나만이 서 있었다.');
    await era.printAndWait([
      '기억 속 어딘가에서, 무지개 빛을 밟으며 ',
      tachyon.get_uma_sex_title(),
      '이 문 안에서 달려 나오는 장면을 본 것만 같았다.',
    ]);
    await era.printAndWait([
      '고개를 돌려보니, ',
      tachyon.get_colored_name(),
      '은 어느새 사라졌고, 공간에는 오직 ',
      me.get_colored_name(),
      ' 한 사람과 눈앞의 문만이 남았다.',
    ]);
    await era.printAndWait([
      '공간 속에는 여전히 ',
      tachyon.get_colored_name(),
      '의 마지막 한마디가 메아리치고 있었다.',
    ]);
    era.println();

    const love = era.get('love:32');
    if (love < 50) {
      await tachyon.say_and_wait('절대로 잊지 말게, 실험 데이터 말이야!');
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 광기 어린 목소리가 ',
        me.get_colored_name(),
        '의 귓가에 맴돌았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 마치 ',
        tachyon.sex,
        '가 연구에 몰두하여 황홀해하는 표정을 본 것만 같았다.',
      ]);
    } else if (love < 90) {
      await tachyon.say_and_wait('꼭, 실험 데이터를 가지고 돌아와야 하네.');
      era.println();

      await era.printAndWait([
        tachyon.sex,
        '의 마지막 말을 듣고, ',
        me.get_colored_name(),
        '은(는) 멍하니 서 있었다.',
      ]);
      await era.printAndWait(['표면적으로는 ', tachyon.sex, '의 실험 데이터에 대한 집착이었으나.']);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '은(는) 그 말속에 담긴 또 다른 의미를 읽어냈다.',
      ]);
      await tachyon.say_and_wait('반드시, 돌아와야 해.', true);
    } else {
      await tachyon.say_and_wait([
        '정말 고민되는군…… 그 세계의 나도 분명 ',
        callname,
        '과 사랑에 빠지겠지? 연적이 늘어나 버렸어.',
      ]);
      era.println();

      await era.printAndWait('마지막의 마지막에 남긴 말은, 마치 아무래도 좋을 잡담 같았다.');
      await era.printAndWait('그것은…… 그 외의 것들은 이미 설명할 필요가 없기 때문이었다.');
      await era.printAndWait([
        '실험 데이터? 연인으로서 ',
        tachyon.sex,
        '의 호기심을 채워주지 못할 이유는 없었다.',
      ]);
      await era.printAndWait([
        '반드시 돌아온다? 굳이 ',
        tachyon.sex,
        '가 말하지 않아도, 당연히 돌아올 것이다.',
      ]);
      await era.printAndWait(
        '이 모든 과정은 마치 그저 잠깐 심부름을 다녀오는 것처럼 평범하고 일상적이었다.',
      );
    }
    era.println();

    await era.printAndWait('그럼……');
    await era.printAndWait([me.get_colored_name(), '은(는) 대문을 향해 손을 뻗었다.']);
    await era.printAndWait([
      '이번에 만나게 될 것은, 어떤 모습의 ',
      tachyon.get_colored_name(),
      '일까?',
    ]);
    if (era.get('cflag:32:육성횟수') > 1) {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            '오? ',
            callname,
            ', 또 새로운 가능성을 찾아 떠나는 건가?',
          ]),
        () =>
          tachyon.say_and_wait(
            '이런, 돌아왔다면 어서 실험 데이터부터 내놓게나!',
          ),
        () =>
          tachyon
            .say_and_wait('그렇군…… 그거 참 흥미로운 이야기야.')
            .then(() => tachyon.say_and_wait('그럼 시간도 다 된 것 같지, 그렇지 않나?'))
            .then(() => tachyon.say_and_wait(['다음에 또 이야기하세, ', callname])),
      ];
      if (love >= 75) {
        buffer.push(() =>
          tachyon
            .say_and_wait(['좋은 아침이네, ', callname, ', 아니면…… 오랜만이라고 해야 할까?'])
            .then(() =>
              tachyon.say_and_wait('아니, 역시 이게 더 좋겠군…… 어서 오게나♡'),
            ),
        );
      }
      await get_random_entry(buffer)();
    }
  };

  /** @author 雞雞 */
  handlers.drug_notice = async (tachyon, me) => {
    new TachyonLifeMarks().drug_notice = get_random_value(12, 36);
    await print_event_name('학원 통지・약물 살포', tachyon);
    await era.printAndWait(
      [
        '【학원에서 알립니다—— 방금 ',
        tachyon.get_colored_name(),
        '이 운동장에 실수로 살포한 약품의 정체가 아직 밝혀지지 않았으니, 트레이너 여러분께서는 가급적 운동장을 사용한 훈련을 삼가 주시기 바랍니다.】',
      ],
      { fontSize: '1.5rem'},
    );
    const dice = Math.random();
    let effect,
      tachyon_flag = 2;
    if (dice < 0.1) {
      effect = 0;
    } else if (dice < 0.5) {
      effect = 1;
    } else if (dice < 0.9 && era.get('flag:캐릭터성별') === 1) {
      effect = 2;
    } else {
      effect = 3;
    }
    const in_team_list = sys_filter_chara(
      'cflag',
      '모집상태',
      recruit_flags.yes,
    );
    while (tachyon_flag > 0) {
      era.printButton('（별일 없겠지?）', 1);
      era.printButton('통지까지 했으니 뭐……', 2);
      if (
        era.get('cflag:32:모집상태') === recruit_flags.yes &&
        tachyon_flag === 2
      ) {
        era.printButton('「타키온…… 이 녀석!」', 3);
      }
      switch (await era.input()) {
        case 1:
          switch (effect) {
            case 0:
              in_team_list
                .filter((e) => era.get(`cflag:${e}:육성턴수합산`) < 3 * 48)
                .forEach((e) =>
                  era.set(
                    `talent:${e}:연습X서수`,
                    Math.min(era.get(`talent:${e}:연습X서수`) + 1, 2),
                  ),
                );
              await era.printAndWait([
                { isBr: true },
                '팀 멤버들의 훈련이 더 원활해졌다…….',
              ]);
              break;
            case 1:
              in_team_list.forEach((e) => era.set(`status:${e}:건강차`, 1));
              await era.printAndWait([
                { isBr: true },
                '팀 멤버들의 이번 주 다이어트 효과가 더 좋아질 것이다…….',
              ]);
              break;
            case 2:
              in_team_list.forEach(
                (e) =>
                  era.get(`talent:${e}:모유분비`) === 0 &&
                  era.set(`talent:${e}:모유분비`, 2),
              );
              await era.printAndWait([
                { isBr: true },
                '팀 멤버들이 모유를 흘리기 시작했다…….',
              ]);
              break;
            case 3:
              in_team_list.forEach((e) =>
                sys_change_lust(e, get_random_value(500, 1500)),
              );
              await era.printAndWait([
                { isBr: true },
                '팀 멤버들의 성욕이 상승했다…….',
              ]);
          }
          tachyon_flag = 0;
          break;
        case 2:
          tachyon_flag = 0;
          break;
        case 3:
          await era.printAndWait([
            me.get_colored_name(),
            '의 추궁에, ',
            tachyon.get_colored_name(),
            '은 ',
            tachyon.sex,
            '가 살포한 약물이 대략 어떤 효과를 내는지 자백했다——',
          ]);
          await tachyon.say_and_wait([
            '간단히 말하자면 사람을 ',
            effects[effect],
            '약이라네…….',
          ]);
          tachyon_flag = 1;
      }
    }
  };
};