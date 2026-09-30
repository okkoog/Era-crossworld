const era = require('#/era-electron');

const {
  sys_change_motivation,
  sys_change_pressure,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const tachyon_default_talk = require('#/event/daily/daily-events-32/talk-default');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const { race_enum, race_infos } = require('#/data/race/race-const');

module.exports = async () => {
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    life_marks = new TachyonLifeMarks(),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32),
    relation = era.get('relation:32:0');

  if (edu_marks.tenn_spr) {
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '과 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 때의 일을 이야기하고 싶어 했으나, ',
      tachyon.sex,
      '는 곧 어디론가 사라져 버렸다.',
    ]);
    return;
  } else if (relation < 75) {
    if (life_marks.talk >= 10) {
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 자네 오늘 실험 보고서는 다 썼나?',
      ]);
      await tachyon.say_and_wait('여기서 노닥거릴 시간이 있으면 해야 할 일부터 끝내는 게 어떤가.');
      return;
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '자, 이번 약은……… 『맛이 이상하다』고? 자네, 잊은 모양이군. 자네는 그저 실험 동물일 뿐이야. 실험 동물이 약 맛을 따진다는 게 말이 된다고 보나?',
          ),
        async () => {
          await tachyon.say_and_wait([
            '한계…… ',
            tachyon.get_uma_sex_title(),
            '…… 의 다리…… 아니, 역시 안 되겠어…… ',
            callname,
            '? 거기 서서 얼마나 있었던 건가?',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 무언가 생각에 잠겨 있는 듯했다.',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            get_chara_talk(25).get_colored_name(),
            '? 흠, ',
            tachyon.sex,
            '는 아주 흥미로운 관찰 대상이지. 게다가 만약…… 아니, 아무것도 아니야. 방금 한 말은 잊어버리게.',
          ]),
        async () => {
          await tachyon.say_and_wait('옷……? 아아, 그러고 보니 사흘 정도 샤워를 안 했던가……');
          await tachyon.say_and_wait(
            '그게 자네와 무슨 상관이지? 그런 데 낭비할 시간이 있으면 실험에 조금 더 시간을 쏟는 게……',
          );
          await tachyon.say_and_wait(
            '됐어. 자네는 모르모트일 뿐이야. 내가 무엇을 하든 자네와는 상관없는 일이라네.',
          );
        },
        async () => {
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '이 믹서기로 오늘의 점심 식사를 갈고 있는 것을 보았다.',
          ]);
          await tachyon.say_and_wait([
            '음식? 필요 없어. 인간이든 ',
            tachyon.get_uma_sex_title(),
            '든, 그저 기초적인 영양소만 보급하면 그만이지. 그 이상의 맛을 추구하는 건 시간 낭비일 뿐이라네.',
          ]);
        },
        () =>
          tachyon.say_and_wait(
            '자네는 고작 모르모트일 뿐이니, 내 실험을 도우면서 나를 기쁘게 하도록 노력해 보게. 그러면 나중에 자네가 가치가 없어졌을 때 자비라도 베풀어 줄지 모르니까.',
          ),
        () => era.printAndWait('할 말이 있으면 빨리 하게. 내 실험 시간을 뺏지 말고.'),
        async () => {
          await tachyon.say_and_wait('후우……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 한숨을 내쉬었다. 기분이 무척 안 좋아 보이니 말을 걸지 않는 게 좋을 것 같다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('흠흠흠~~ 흠흠~~');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 기분이 아주 좋아 보였으나, ',
            tachyon.sex,
            '의 손에 들린 위험한 암녹색 빛을 내는 약제를 보고 ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 좋은 기분을 망치지 않기로 했다.',
          ]);
        },
      );
    }
  } else if (relation < 150) {
    if (life_marks.talk >= 10) {
      await tachyon.say_and_wait([
        callname,
        ', ',
        life_marks.cook < 5
          ? '딱히 할 일이 없다면 자네의 요리 실력이나 연마해 보는 게 어떤가? 사람이 먹을 만한 음식을 얼른 만들어 보란 말일세.'
          : '정말로 한가하다면 실험 기구들이라도 전부 닦아 두게. 아니면 내 실험복을 빨든가, 그것도 아니면 쓰레기라도 버리고 오게나. 자네가 할 수 있는 일이 많지 않나? 여기서 멍하니 있지 말고.',
      ]);
      return;
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait([
            callname,
            ', 오늘의 약은…… 도망치려고? 후후, 자네는 ',
            tachyon.get_uma_sex_title(),
            '의 손아귀에서 벗어날 수 있다고 생각하는 건가?',
          ]),
        async () => {
          await tachyon.say_and_wait([
            tachyon.get_uma_sex_title(),
            '의 한계…… 스퍼트…… 진화…… 생존…… 인류 보완 계획…… 부패한 사회…… 구원…… 재생…… 폐쇄된 현실로부터의 탈출……',
          ]);
          await tachyon.say_and_wait('아아, 알았어. 모든 진실은 이집트에 있었군.');
          await era.printAndWait([
            '……',
            tachyon.get_colored_name(),
            '이 갑자기 이상한 소리를 하기 시작했다. ',
            tachyon.sex,
            '를 방해하지 않는 게 좋겠다.',
          ]);
        },
        async () => {
          await tachyon.say_and_wait(
            '아…… 마침 잘 왔군. 내 백의 좀 빨아다 주게. 며칠 전 실험하다 더러워져서 말이야…………',
          );
          await tachyon.say_and_wait(
            '왜 진작 주지 않았냐고? 그야 잊어버렸으니까. 그보다 제때 알아차리지 못한 건 모르모트인 자네의 실책 아닌가?',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            '음식? ……내 관점은 여전히 변함없네. 음식은 그저 영양을 보충하기 위해 존재하는 것이며, 그 이상의 가치도 이하의 가치도 없지……',
          );
          await tachyon.say_and_wait(
            '하지만, 뭐…… 최근에는 나도 확실히 이 시간을 기대하기 시작했군……',
          );
          await tachyon.say_and_wait(
            '아니, 착각하지 말게. 그저 자네에게 세상 무서운 줄을 똑똑히 알려주기 위해서일 뿐이니까. 그때 나를 모욕한 죄는 그렇게 쉽게 씻기지 않아. 자네가 매일 내 약 실험에 응해준다면 고려해 볼 수도 있겠지만……',
          );
          await me.say_and_wait('그거 지금이랑 똑같지 않아?');
          await tachyon.say_and_wait(
            '듣고 보니 그렇군…… 잠깐, 매일…… 아니, 아무것도 아니야. 방금 한 말은 잊고, 지금 당장, 즉시 가보게.',
          );
        },
        () =>
          tachyon.say_and_wait(
            '요즘 해주는 밥…… 나쁘지 않군. 다만 설탕을 좀 더 넣는 걸 고려해 보는 게…… 아니, 아무것도 아닐세.',
          ),
        async () => {
          await tachyon.say_and_wait([
            '아아, ',
            sys_get_colored_callname(32, 9),
            '…… 『지난번 쿠키와 음료수 고마웠다』고?',
          ]);
          await tachyon.say_and_wait(
            '별거 아니야. 마음에 들었다면 여기 더 있으니 또 받으러 오게나…………',
          );
          await tachyon.say_and_wait(
            '자네, 그 표정은 뭔가? 아무리 나라도 귀여운 후배에게 그런 걸 먹이지는 않는다네.',
          );
        },
        async () => {
          await tachyon.say_and_wait('흠흠~~ 흠흠흠~~');
          await tachyon.say_and_wait('모르모트 열 마리 놀러 나갔다~ 바다에 빠져서 아홉 마리~');
          await tachyon.say_and_wait('화산에 떨어져 여덟 마리~ 정글에서 길 잃어 일곱 마리~');
          await tachyon.say_and_wait('성난 파도에 쓸려 여섯 마리~ 엘 콘도르 습격에 다섯 마리~');
          await tachyon.say_and_wait('밥 먹다 배 터져 네 마리~ 높은 산 오르다 세 마리~');
          await tachyon.say_and_wait('터보 엔진 폭발해 두 마리~ 카페인 과다로 한 마리~');
          await tachyon.say_and_wait('외로운 모르모트 찍찍찍~ 약 마시고 폭발했다네~~');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '이 이상한 노래를 흥얼거리는 것을 들었다…… 가사 내용은 이해할 수 없지만, 지금의 ',
            tachyon.sex,
            '에게는 가까이 가지 않는 것이 좋을 것 같았다.',
          ]);
        },
      );
    }
  } else if (relation > 225 && love < 50) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          '이런, ',
          callname,
          ', 웬일로 갑자기 말을 다 거나?',
        ]);
        await tachyon.say_and_wait('후훗, 그저 갑자기 마음이 내킨 건가?');
        await tachyon.say_and_wait(
          '그렇지 않으면 다른 목적이라도 있다는 건가? 아니, 아무것도 아니야. 그저 사물에 호기심을 갖는 건 좋은 일이라고 생각했을 뿐이라네.',
        );
        await tachyon.say_and_wait([
          '스크립트 속의 대사를 탐색하는 것도 포함해서 말이지, 안 그런가? 화면 너머의 ',
          callname,
          '?',
        ]);
        await tachyon.say_and_wait('내가 무슨 소리를 하냐고? 후훗, 누가 알겠나.');
      },
      async () => {
        await tachyon.say_and_wait(['아앗, ', callname, ' 조심하게!']);
        await tachyon.say_and_wait('휴, 자네가 갑자기 말을 거는 바람에 약을 쏟을 뻔하지 않았나.');
        await tachyon.say_and_wait('무슨 약이냐고? 후훗, 이전에 수집했던 자네의 DNA를 기억하나?');
        await tachyon.say_and_wait(
          '이건 냄새를 맡은 사람이 자네에게 미친 듯이 반하게 만드는 약이라네…… 응? 쏟아지지 않은 게 갑자기 후회된다고? ……이 변태 같으니.',
        );
        await tachyon.say_and_wait(
          '농담일세. 사실은 그 사람의 DNA를 기초로 한 타겟팅 독약이지……',
        );
        await tachyon.say_and_wait(
          '증기만 살짝 맡아도 자네의 비강에 변이를 일으켜 암세포를 만들어내는……',
        );
        await tachyon.say_and_wait(
          '이보게, 그렇게 겁먹을 것까지야. 하하, 어쨌든 안 쏟았으니 됐네.',
        );
        await tachyon.say_and_wait('응? 대체 어느 쪽이 진짜냐니…… 그건 자네 상상에 맡기지~~');
      },
      async () => {
        await tachyon.say_and_wait([callname, '…… 오늘의 옷은……']);
        await tachyon.say_and_wait(
          '그리고, 저기, 생각해 봤는데 말이야. 옷 세탁을 맡기는 건 그렇다 치고, 속옷까지 빨게 시키는 건 역시 좀 과했군.',
        );
        await tachyon.say_and_wait(
          '……아니, 그러니까 냄새 문제가 아니래도! 게다가 하나도 안 난단 말일세!',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '어느새 나도 자네가 만들어준 도시락에 완전히 익숙해진 모양이야.',
        );
        await tachyon.say_and_wait(
          '후훗, 이제는 웬일인지 자네 도시락을 먹지 못하는 날이면 오히려 마음이 진정되질 않거든.',
        );
        await tachyon.say_and_wait('이런 생활을…… 계속 유지하는 건……');
        await tachyon.say_and_wait('후훗, 연구자에게 있어 유지라는 건 그리 좋은 말이 아니야.');
        await tachyon.say_and_wait('유지만 생각해서는 돌파구를 찾을 수 없으니까……');
        await tachyon.say_and_wait('그래…… 하지만……');
        await tachyon.say_and_wait(
          '왜일까, 지금의 생활을 유지하는 것도 나쁘지 않겠다는 생각이 문득 드는군……',
        );
        await tachyon.say_and_wait('어째서일까……');
      },
    );
    switch (edu_marks.talk) {
      case 1:
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await me.say_and_wait('응?');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '이 ',
            me.get_colored_name(),
            '을(를) 부르는 것 같은 소리를 듣고 뒤를 돌아보았다.',
          ]);
          era.println();
          await tachyon.say_and_wait('아무것도 아닐세. 그냥 불러봤네.');
          era.println();
          await era.printAndWait([
            '이에 ',
            me.get_colored_name(),
            '은(는) 다시 고개를 돌려 자신의 일을 계속했다.',
          ]);
          era.println();
          await tachyon.say_and_wait(callname);
          await tachyon.say_and_wait(callname);
          await tachyon.say_and_wait(callname);
          era.println();
          await tachyon.say_and_wait([me.actual_name, ' 군']);
          await era.printAndWait('!?');
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 깜짝 놀라 돌아보자, 눈앞에는 ',
            tachyon.get_colored_name(),
            '의 평소와 다름없는 미소가 있었다.',
          ]);
          await era.printAndWait('마치 방금 전에는 아무 일도 없었다는 듯이.');
          edu_marks.talk++;
        });
        break;
      case 2:
        buffer.push(async () => {
          await tachyon.say_and_wait([callname, '……']);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 ',
            me.get_colored_name(),
            '의 등 뒤에 기대어 응석을 부리는 듯한 낮은 목소리를 냈다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            me.get_colored_name(),
            '은(는) 조금도 가슴이 설레거나 얼굴을 붉히지 않았다.',
          ]);
          await era.printAndWait('지난번에 그것 때문에 돌아봤다가 약 한 병을 통째로 들이켜야 했기 때문이다.');
          await era.printAndWait('이번에는 아무리 불러도 절대 돌아보지 않겠다고 다짐했다.');
          era.println();
          await tachyon.say_and_wait([callname, '……']);
          await tachyon.say_and_wait([callname, '……❤']);
          await tachyon.say_and_wait([callname, '❤']);
          await tachyon.say_and_wait([callname, '❤']);
          era.println();
          await era.printAndWait([
            '어쩐지 ',
            tachyon.sex,
            '의 목소리가 점점 더 묘하게 끈적해지기 시작했다.',
          ]);
          await era.printAndWait([
            '차마 뒤를 돌아보지 못하는 ',
            me.get_colored_name(),
            '은(는) 타들어 가는 마음을 억누르며 제자리에 앉아 버텼다.',
          ]);
          era.println();
          await tachyon.say_and_wait('………… 바보.');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            '의 마지막 소리를 듣고 ',
            me.get_colored_name(),
            '은(는) 결국 참지 못하고 뒤를 돌아보고 말았다.',
          ]);
          await era.printAndWait('그리고……');
          era.println();
          await era.printAndWait('꿀꺽');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 손에는 빈 시험관이 들려 있었다.',
          ]);
          await era.printAndWait([
            '시험관에 들어있던 것? ',
            me.get_colored_name(),
            '이(가) 뒤를 돌아보는 그 찰나의 순간에 전부 ',
            me.get_colored_name(),
            '의 입속으로 털어 넣어졌다.',
          ]);
          era.println();
          await tachyon.say_and_wait('참 나…… 이번에는 꽤 끈질기게 버텼군.');
          era.println();
          await era.printAndWait('약효가 나타났다. 이번에는 마비 효과가 있는 약인 듯했다.');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 간신히 정신을 차리고 눈을 떴고, 눈앞에는 득의양양한 표정의 ',
            tachyon.get_colored_name(),
            '이 있었다.',
          ]);
          await era.printAndWait([
            '나오려던 불평의 말은 ',
            tachyon.sex,
            '의 살짝 붉어진 얼굴을 보는 순간 안개처럼 사라져 버렸다.',
          ]);
          era.println();
          await era.printAndWait(['역시 ', tachyon.sex, '에게는 당해낼 수가 없다고 생각했다.']);
          await era.printAndWait([
            '그런 생각을 뒤로하고 ',
            me.get_colored_name(),
            '은(는) 의식을 잃고 어둠 속으로 빠져들었다.',
          ]);
          edu_marks.talk++;
        });
        break;
      case 3:
        buffer.push(async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 실험에 열중하고 있는 듯했다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 고운 옆얼굴을 빤히 바라보다 문득 장난기가 발동했다.',
          ]);
          era.printButton('「아그네스 타키온」', 1);
          await era.input();
          await era.printAndWait([me.get_colored_name(), '이(가) 나지막이 이름을 불렀다.']);
          await era.printAndWait([
            tachyon.sex,
            '의 등이 움찔하고 떨렸으나, 뒤를 돌아보지 않은 채 아무렇지 않은 척 실험을 계속했다.',
          ]);
          era.println();
          await era.printAndWait([
            '그 모습은 ',
            me.get_colored_name(),
            '의 동심에 더욱 불을 지폈다.',
          ]);
          era.println();
          await me.say_and_wait(tachyon.name);
          await me.say_and_wait(tachyon.name);
          await me.say_and_wait(tachyon.name);
          await me.say_and_wait(tachyon.name);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 목소리 톤을 여러 가지로 바꿔가며 불러 보았다.',
          ]);
          await era.printAndWait([
            '이름을 부를 때마다 ',
            tachyon.sex,
            '의 몸은 이전보다 더 크게, 더 오랫동안 떨렸다.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 옆모습을 통해 ',
            tachyon.sex,
            '의 얼굴이 점점 더 붉게 물들어가는 것을 보았다.',
          ]);
          era.println();
          await era.printAndWait([
            '상기된 ',
            tachyon.sex,
            '의 얼굴을 보자 ',
            me.get_colored_name(),
            ' 또한 쑥스러워졌다.',
          ]);
          await era.printAndWait('하지만 이 시점에서는 마음속의 욕구가 멈추는 것을 허락하지 않았다.');
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 더욱 부드러운 목소리로 계속해서 이름을 불렀다.',
          ]);
          await era.printAndWait([
            '어느덧 장난스러운 마음은 사라지고, 지금의 ',
            me.get_colored_name(),
            '은(는) 그저 ',
            tachyon.sex,
            '의 더욱 부끄러워하는 모습, 더욱 ',
            tachyon.get_teen_sex_title(),
            '다운 모습을 보고 싶을 뿐이었다.',
          ]);
          era.println();
          await era.printAndWait([
            '………… ',
            tachyon.get_colored_name(),
            '?',
            tachyon.get_teen_sex_title(),
            '?',
          ]);
          await era.printAndWait('전혀 어울리지 않을 것 같은 두 단어가 지금은 너무나도 딱 들어맞았다.');
          await era.printAndWait('그렇게 끊임없이 계속되었다.');
          await era.printAndWait('한쪽의 계속되는 외침과, 다른 한쪽의 모르는 척하는 고집이.');
          era.drawLine();
          await era.printAndWait([
            '갑자기 ',
            tachyon.sex,
            '의 안색이 붉은빛에서 창백하게 변했다.',
          ]);
          await era.printAndWait([
            '줄곧 ',
            tachyon.sex,
            '를 지켜보고 있던 ',
            me.get_colored_name(),
            '은(는) 즉시 그 변화를 알아채고 ',
            tachyon.sex,
            '의 시선을 따라갔다.',
          ]);
          era.println();
          await era.printAndWait([
            '시선 끝에는 ',
            tachyon.sex,
            '의 손에 들린, 삼각형 위험 표시가 그려진 약병이 있었다.',
          ]);
          await era.printAndWait('약병은 이미 완전히 비어 있었다.');
          await era.printAndWait('아무래도 이름을 부를 때 손이 떨려 약을 한꺼번에 다 넣어버린 모양이었다.');
          await era.printAndWait([
            '그리고 위험한 약품이 과도하게 들어간 ',
            tachyon.sex,
            '의 시험관은……',
          ]);
          await era.printAndWait(
            '액체가 육안으로 보일 정도의 속도로 부풀어 오르더니 급기야 시험관 밖으로 넘쳐 흘렀고, 그보다 치명적인 증기가 뿜어져 나왔다.',
          );
          await era.printAndWait(
            '그 작은 시험관에서 나왔다고는 믿기지 않을 정도의 양이 실내를 가득 채우고 밖으로 흘러나갔다.',
          );
          era.println();
          await era.printAndWait(['그제야 ', tachyon.sex, '가 드디어 뒤를 돌아보았다.']);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 얼굴이 다시금 붉게 달아오른 것을 보았으나, 이번에야말로 ',
            me.get_colored_name(),
            '은(는) 이것이 수줍음 때문이 아니라는 것을 확신했다.',
          ]);
          await era.printAndWait('그것은 바로……………');
          era.println();
          await tachyon.say_and_wait([
            callname,
            '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
          ]);
          era.drawLine({ offset: 8, width: 8 });
          await era.printAndWait('【학원으로부터의 통지】', { align: 'center' });
          await era.printAndWait(
            ['오후, ', tachyon.get_colored_name(), ', 약, 폭발'],
            {
              align: 'center',
            },
          );
          edu_marks.talk++;
        });
    }
  } else if (relation > 375 && love < 50) {
    if (era.get('cflag:32:컨디션') < 0) {
      await tachyon.say_and_wait([callname, ', 좀 지쳤어. 잠시 눕게 해 주게.']);
      era.printButton('동의한다', 1);
      era.printButton('거절한다', 2);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 마음속으로 선택을 하기도 전에, ',
        tachyon.get_colored_name(),
        '은 이미 ',
        me.get_colored_name(),
        '의 무릎 위에 누워 있었다.',
      ]);
      era.printButton('「이봐, 타키온」', 1);
      await era.input();
      await tachyon.say_and_wait('ZZZ');
      era.println();
      await era.printAndWait('너무 빨라!?');
      await era.printAndWait([
        tachyon.sex,
        '를 깨우지 않기 위해 ',
        me.get_colored_name(),
        '은(는) 꼼짝없이 원래 자세를 유지할 수밖에 없었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 깨어나면 꼭 한마디 해줘야겠다고 생각했다. 폐를 끼치는 건 둘째치고, 이성의 무릎 위에 아무렇게나 눕다니 너무 위기감이 없다.',
      ]);
      era.println();
      await tachyon.say_and_wait('으으음……');
      era.println();
      await era.printAndWait([
        '잠자리가 불편한지 뒤척이는 ',
        tachyon.sex,
        '의 정면 얼굴을 보자 ',
        me.get_colored_name(),
        '의 마음속에 쌓였던 꾸지람은 순식간에 녹아 없어졌다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 눈가에 서린 다크서클과 눕자마자 곯아떨어진 피로는 ',
        tachyon.sex,
        '의 수면 상태가 얼마나 불안정한지를 말해주고 있었다.',
      ]);
      await era.printAndWait([
        '생각해 보니 최근 ',
        tachyon.sex,
        '는 연구의 병목 현상 때문에 계속 제대로 잠들지 못한 것 같았다.',
      ]);
      await era.printAndWait([
        '유일하게 다행스러운 점은 ',
        me.get_colored_name(),
        '의 무릎 위에 누워 있을 때 ',
        tachyon.sex,
        '의 미간이 편안하게 펴져 있다는 것이었다.',
      ]);
      await era.printAndWait([
        '……이렇게 해서 ',
        tachyon.sex,
        '가 조금이라도 더 잘 잘 수 있다면, 가끔은 이래도 괜찮을 것 같다는 생각이 들었다.',
      ]);
      era.println();
      sys_change_pressure(32, -get_random_value(500, 1000));
      sys_change_motivation(32, 1) && (await era.waitAnyKey());
      life_marks.talk++;
      return;
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait(['오, 왔군 ', callname]);
        await tachyon.say_and_wait('오늘 실험은…… 응? 왜 그러나?');
        await tachyon.say_and_wait('너무 가깝다고? 그런가? 난 딱 적당한 것 같은데 말이야.');
        await tachyon.say_and_wait('아니면 혹시, 자네 부끄러운 건가?');
      });
      !edu_marks.black_tea &&
        buffer.push(async () => {
          edu_marks.black_tea = 1;
          await tachyon.say_and_wait([callname, ', 마침 잘 왔네.']);
          await tachyon.say_and_wait('오늘 만든 신약을 한번 테스트해 봐 주게.');
          era.println();
          await era.printAndWait([
            '자네는 늘 그랬듯 익숙하게 오늘의 약을 마셨다…… 응? 왠지 홍차 맛이 나는데.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 의아한 표정으로 자신의 손에 든 시험관을 보았다. 분명히 수상쩍은 빛을 내뿜고 있는, 누가 봐도 ',
            tachyon.get_colored_name(),
            '표 약인데 어째서……',
          ]);
          era.println();
          await tachyon.say_and_wait('기분이 어떤가?');
          era.println();
          await era.printAndWait([
            '당황한 상태로 감상을 묻자, ',
            me.get_colored_name(),
            '은(는) 무의식적으로 홍차 맛에 대한 평가를 내놓았다.',
          ]);
          await era.printAndWait([
            '대답을 하고 나서야 ',
            me.get_colored_name(),
            '은(는) 이것이 홍차가 아니라 약이었다는 사실을 떠올렸다. 큰일이다, 이제 엄청난 꾸지람을 듣겠구나 싶었는데……',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '……향기가 부족하고, 너무 달고, 그리고 색깔이…… 그런가? 흠…… 아주 참고가 되는 답변이군……',
          );
          era.println();
          await era.printAndWait('에? 이걸로 그냥 통과인 거야?');
          era.println();
          await tachyon.say_and_wait(
            '……그러고 보니 자네의 신체 능력도 이제 꽤 올라갔으니, 앞으로 매일 마시는 약을 한 종류 더 추가하도록 하지.',
          );
          await tachyon.say_and_wait(
            '기존의 약 외에 이 약도 추가한다네…… 나중에 자네가 한마디도 토를 달지 못할 만큼 완벽한 맛으로 개량해 놓을 테니 말이야.',
          );
          era.printButton('「설마……」', 1);
          era.printButton('「……설마……」', 2);
          const ret = await era.input();
          await era.printAndWait('홍차의 맛.');
          await era.printAndWait('맛에 대한 고찰 및 개량.');
          await era.printAndWait('바꾸어 말하면, 이런 뜻일 것이다.');
          era.println();
          if (ret === 1) {
            await era.printAndWait(
              '곰곰이 생각해 보니 너무 달긴 했지만 향기만 빼면, 그 「약」은 겉으로 보기에는……',
            );
            await era.printAndWait([
              '아니, 대체 홍차를 어떻게 끓이면 그런 색깔이 나오는 건지 의문스럽긴 하지만,',
            ]);
            await era.printAndWait([
              '생각해 보면 그건 ',
              tachyon.sex,
              '가 평소 가장 좋아하는 홍차의 맛이 아니던가?',
            ]);
            era.println();
            await tachyon.say_and_wait('잔뜩 기대하고 있게나!');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 조금 분한 듯이 말했다.',
            ]);
            await era.printAndWait([
              '그때 ',
              me.get_colored_name(),
              '은(는) 문득 자신이 처음 도시락을 만들어 주었을 때, ',
              tachyon.sex,
              '에게 가차 없이 혹평을 듣고 이처럼 분해했던 기억이 떠올랐다.',
            ]);
            await era.printAndWait([
              '그때 당시의 ',
              tachyon.sex,
              '는 뭐라고 대답했었더라?',
            ]);
            era.printButton('「기대하고 있을게, 연구자 군」', 1);
            await era.input();
            await tachyon.say_and_wait('……모르모트 주제에.');
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) ',
              tachyon.get_colored_name(),
              '이 작게 중얼거리는 소리를 듣고 저도 모르게 미소를 지었다.',
            ]);
          } else {
            await era.printAndWait([
              '이제 와서 ',
              tachyon.sex,
              '는 당신을 실험체로 쓰는 것만으로는 만족하지 못하고, 다른 사람들에게까지 마수를 뻗치려는 것인가!',
            ]);
            await era.printAndWait([
              '홍차 맛이 나는 약을 만들려는 것도, 만약 ',
              tachyon.sex,
              '가 색깔까지 홍차처럼 만드는 법을 알아낸다면 정말 큰일이 날 것이다!',
            ]);
            era.printButton('「타키온!」', 1);
            await era.input();
            await era.printAndWait([me.get_colored_name(), '은(는) 나도 모르게 크게 소리쳤다.']);
            era.println();
            await tachyon.say_and_wait([callname, '? 갑자기 왜 그러지……']);
            era.printButton('「어떤 약이든 상관없어, 얼마든지 가져와!」', 1);
            era.printButton('「대신 한 가지만은 꼭 약속해 줘」', 2);
            await era.input();
            await tachyon.say_and_wait([
              '어…… 아니, ',
              callname,
              '…… 자네, 자네 혹시 뭔가 착각하고 있는 게……',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이 뭐라고 말하려 했으나, ',
              me.get_colored_name(),
              '은(는) 무정하게 말을 끊어버렸다.',
            ]);
            await era.printAndWait(
              '아니야…… 무슨 일이 있어도 이 말만은 꼭, 지금 당장 내뱉어야만 한다.',
            );
            era.printButton(
              '「나만이 너의 영원하고 유일한 모르모트야!」',
              1,
            );
            await era.input();
            await era.printAndWait('그래…… 아까 그 맛은 홍차에 매우 근접해 있었다.');
            await era.printAndWait([
              '만약 ',
              tachyon.sex,
              '가 정말로 이걸 다른 사람의 음료나, 더 나아가 식수에 몰래 섞는다면…… 그 결과는 상상조차 하기 싫다.',
            ]);
            await era.printAndWait([
              '그러니 여기서 자신의 정체성을 강조하여, ',
              tachyon.sex,
              '가 다른 사람을 실험체로 삼겠다는 광기 어린 발상을 포기하게 만들어야 한다.',
            ]);
            era.println();
            await tachyon.say_and_wait('……자네…… 역시 착각을………… 하지만…… 으으……');
            era.println();
            await era.printAndWait([
              '어째서인지 ',
              tachyon.get_colored_name(),
              '은 허둥지둥 뒤를 돌아버렸고, ',
              me.get_colored_name(),
              '은(는) ',
              tachyon.sex,
              '가 돌아서기 직전에 ',
              tachyon.sex,
              '의 새빨개진 얼굴을 보았다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……내 모르모트는 처음부터 끝까지 자네 하나뿐이야! 어쨌든 자네는 매일 내 약 실험이나 잘 받으면 된단 말일세! 모르모트답게 입 닥치고 고분고분 약을 먹는 게 자네 본분 아니겠나!',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은 씩씩거리며 나가버렸고, 실험실의 뒷정리는 ',
              me.get_colored_name(),
              '의 몫으로 남겨졌다.',
            ]);
            era.println();
            await era.printAndWait([
              '……대체 왜 화가 난 걸까? ',
              me.get_colored_name(),
              '은(는) 도무지 이해할 수 없었다.',
            ]);
            await era.printAndWait([
              '하지만…… 만약 ',
              tachyon.sex,
              '가 다른 실험 대상을 찾는다면, 왠지 그 순간 ',
              me.get_colored_name(),
              '의 가슴이 그 가능성만으로도 조금 조여드는 것 같았다.',
            ]);
            await era.printAndWait([
              '자신의 모르모트는 자신뿐이라는 ',
              tachyon.sex,
              '의 말을 듣자, 그 긴장감은 다시 씻은 듯이 사라졌다.',
            ]);
            era.println();
            await era.printAndWait('설마…… 벌써 약물에 중독되어 버린 걸까.');
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 서둘러 고개를 저어 그런 무시무시한 가능성을 털어버렸다.',
            ]);
          }
        });
    }
  } else if (life_marks.talk >= 10) {
    await tachyon.say_and_wait([
      callname,
      ', 자네와 더 이야기하는 건 상관없지만, 자네에게는 다른 해야 할 일이 있지 않나?',
    ]);
    return;
  } else {
    tachyon_default_talk(buffer, tachyon, me, callname, edu_marks);
  }
  await get_random_entry(buffer)();
  life_marks.talk++;
};