const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {number} stamina_ratio
 */
module.exports = async (tachyon, me, callname, hook, stamina_ratio) => {
  const buffer = [];
  const love = era.get('love:32');
  const relation = era.get('relation:32:0');
  era.print([tachyon.get_colored_name(), '의 훈련이 무사히 끝났다!']);
  era.println();
  if (
    new TachyonEduMarks().plan_b &&
    era.get('cflag:32:육성턴수합산') < 95 + race_infos[race_enum.tenn_spr].date
  ) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          sys_get_colored_callname(32, 25),
          '이…… 한 단계 더 위로 올라설 수 있도록.',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 각별히 노력하며 훈련을 마쳤지만, ',
          tachyon.sex,
          '가 입 밖으로 내뱉는 구호는 대체 어떻게 반응해야 할지 알 수 없었다.',
        ]);
      },
      async () => {
        await tachyon.say_and_wait([
          '내가 노력해서 ',
          sys_get_colored_callname(32, 25),
          '을 쫓아가야만 해……',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 훈련을 마쳤다.']);
        await era.printAndWait('그 달리는 모습은 여전히 찬란했다.');
        await era.printAndWait('하지만 어딘가 모르게, 소중한 무언가가 빠져 있는 듯한 느낌을 주었다.');
      },
      async () => {
        await tachyon.say_and_wait('실험의 성공을 위해서라면…… 설령 나라고 해도……');
        era.println();
        await era.printAndWait([
          '훈련을 마친 ',
          tachyon.get_colored_name(),
          '이 나직이 읊조렸다. 비록 내용은 그러하였으나, ',
          tachyon.sex,
          '의 말투에는 어딘가 망설임이 섞여 있는 듯했다.',
        ]);
        await era.printAndWait([
          '……아니, 그것도 어쩌면 ',
          me.get_colored_name(),
          '의 착각일지도 모른다.',
        ]);
      },
    );
  } else if (love >= 75) {
    if (stamina_ratio > 0.45) {
      buffer.push(async () => {
        await tachyon.say_and_wait([callname, '!']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 훈련이 끝나자마자 온몸이 땀범벅인 것도 개의치 않고, ',
          me.get_colored_name(),
          '에게 달려들어 안겼다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 당황하며 ',
          tachyon.sex,
          '를 밀어내려 했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '뭐 어떤가, 그저 사랑하는 이의 체액일 뿐인데…… 정 그러면 밤에 자네의 체액으로 되돌려주면 되지 않겠나?♡',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '의 반대에도 아랑곳하지 않고 ',
          me.get_colored_name(),
          '을(를) 꼭 껴안은 채, ',
          me.get_colored_name(),
          '의 귓가에 대고 속삭였다.',
        ]);
      });
    } else {
      buffer.push(async () => {
        await tachyon.say_and_wait('후우…… 드디어 훈련이 끝난 건가…… 드디어.');
        await tachyon.say_and_wait(
          '정말이지…… 운동이라면 단순한 달리기보다, 밤에 하는 그런 쪽이 훨씬 더 내 취향인데 말이야……',
        );
        await tachyon.say_and_wait(['어때? ', callname, ', 나를 만족시켜 주겠나?♡']);
      });
    }
  } else if (love >= 50) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait('흥흥, 어떤가?');
        await tachyon.say_and_wait('또다시 나에게 매료되었나? 후훗, 참으로 과장된 표현이군.');
        await tachyon.say_and_wait('하지만, 싫지 않네♡');
      },
      async () => {
        await tachyon.say_and_wait([callname, '!', callname, '………아.']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 평소처럼 ',
          me.get_colored_name(),
          '에게 달려오려다, 돌연 발걸음을 멈추었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('………아니, 지금은 역시 관두겠네.');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 땀으로 흠뻑 젖은 자신의 트레이닝복을 슬쩍 보더니, 왠지 모르게 ',
          me.get_colored_name(),
          '과(와) 일정한 거리를 유지했다.',
        ]);
        await era.printAndWait('설마…… 몸에서 나는 냄새를 신경 쓰고 있는 건가?');
        await era.printAndWait([
          '아니, 그 ',
          tachyon.get_colored_name(),
          '아라면…… 그럴 리가 없겠지.',
        ]);
      },
    );
  } else if (relation > 525) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          '후후훗, ',
          callname,
          ', 오늘 달리기는 어땠나! 좀 더 칭찬해 줘도 괜찮다고!',
        ]);
        era.println();
        await era.printAndWait('30분 후.');
        era.println();
        await tachyon.say_and_wait('………아니, 그렇게까지 칭찬할 필요는 없었네만……');
      },
      () =>
        tachyon
          .say_and_wait('후우…… 정말 힘들군……')
          .then(() =>
            tachyon.say_and_wait([callname, '……나를 업고 돌아가 주게나~~~~']),
          ),
      () =>
        tachyon
          .say_and_wait('이대로만 간다면…… 반드시 도달할 수 있겠어.')
          .then(() => tachyon.say_and_wait('한계라는 이름의 목표에……')),
    );
  } else if (relation > 225) {
    buffer.push(
      () =>
        tachyon
          .say_and_wait(
            '흥흥…… 이 정도 속도라면, 꾸준히 향상시킨다는 전제하에 한계 돌파는 문제없겠어.',
          )
          .then(() =>
            tachyon.say_and_wait([
              '……그렇게 서두를 필요 없이 조금 쉬어도 되지 않겠냐고? ',
              callname,
              ', 연구라는 것은 제자리에 머무는 순간 퇴보하는 것이네. 자기 자신을 높이기 위해서는 한순간도 늦추지 않고 정진해야만 해.',
            ]),
          ),
      () =>
        tachyon
          .say_and_wait('푸하하하! 바로 이거야, 바로 이 속도라고!')
          .then(() =>
            tachyon.say_and_wait('더 빠르게, 조금 더 빠르게, 마침내…… 광속을 뛰어넘는 거다!'),
          ),
      () =>
        tachyon.say_and_wait(
          '어디 시간을 좀 볼까…… 흠흠…… 좋군. 이대로라면 우리의 꿈도 머지않은 곳에 있겠어!',
        ),
    );
  } else if (relation > 75) {
    buffer.push(
      () => tachyon.say_and_wait('좋아. 오늘의 주법이야말로 최적의 해답임에 틀림없어!'),
      () =>
        tachyon.say_and_wait([
          '후우…… ',
          callname,
          ', 데이터를 보여주게나…… 후훗, 좋군, 아주 좋아. 지난번 훈련에 비해 대폭 상승했어. 이대로라면 분명 문제없겠군.',
        ]),
      () => tachyon.say_and_wait('좋아 좋아, 이걸로 연구 진척도가 다시 0.02%p 전진했군.'),
    );
  } else {
    buffer.push(
      () => tachyon.say_and_wait('후우, 과연 그렇군…… 오늘의 실험 성과는 나쁘지 않아.'),
      () =>
        tachyon.say_and_wait(
          '이토록 간단한 훈련이라니, 완수하는 데 아무런 어려움도 없군…… 실력 측정을 위한 대조군인가?',
        ),
      () => tachyon.say_and_wait('지극히 당연한 결과일 뿐이네.'),
    );
  }
  await get_random_entry(buffer)();
  era.println();
  if (!era.get('status:32:땡땡이') && Math.random() < stamina_ratio * 0.2) {
    await era.waitAnyKey();
    if (relation > 225) {
      await print_event_name('추격전', tachyon);
      await tachyon.say_and_wait([callname, '! 어서 ', tachyon.sex, '를 좀 막아주게!']);
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '의 오늘 훈련이 막 끝났다.']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 손을 흔들어 ',
        tachyon.get_colored_name(),
        '에게 돌아오라는 신호를 보내려 했으나, ',
        tachyon.get_colored_name(),
        '이 어느 ',
        tachyon.get_uma_sex_title(),
        ' 한 명을 뒤쫓으며 ',
        me.get_colored_name(),
        '쪽으로 달려오는 것을 목격했다.',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        `${tachyon.get_uma_sex_title()}A`,
        '살, 살려주세요!',
      );
      await tachyon.say_and_wait(
        '무서워 말게…… 아무 일도 없을 테니까! 그저 시간을 조금만 내어주어 조사 몇 가지와 질문 몇 개에 답해줬으면 하네. 그리고…… 그리고…… 아주 약간의 약만 테스트해 볼 수 있다면……!',
      );
      era.println();
      await era.printAndWait([
        '그 ',
        tachyon.get_uma_sex_title(),
        '가 ',
        me.get_colored_name(),
        '에게 점점 가까워졌다.',
      ]);
      era.print([me.get_colored_name(), '은(는) 어떻게 할지 결정했다.']);
      era.printButton('두 사람을 그냥 통과시킨다', 1);
      era.printButton('타키온을 붙잡는다', 2);
      if ((await era.input()) === 1) {
        await say_by_passer_by_and_wait(`${tachyon.get_uma_sex_title()}A`, [
          '트레이너 ',
          me.get_adult_sex_title(),
          ', 왜 보고만 계시는 거예요!?',
        ]);
        await tachyon.say_and_wait([
          callname,
          ', 왜 ',
          tachyon.sex,
          '를 붙잡아주지 않는 건가!?',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 몸을 비켜주어 두 사람이 지나가게 했다.',
        ]);
        await era.printAndWait(
          '두 사람 모두 동시에 항의 섞인 외침을 내뱉었으나, 그 항의의 내용은 서로 달랐다.',
        );
        await era.printAndWait([me.get_colored_name(), '은(는) 어깨를 으쓱했다.']);
        await era.printAndWait([
          '비록 ',
          tachyon.get_colored_name(),
          '의 행위가 옳지 않다는 점은 알고 있었지만, ',
          tachyon.sex,
          '의 모르모트로서 ',
          tachyon.sex,
          '의 실험을 도와야 한다는 의무감도 있었다.',
        ]);
        await era.printAndWait('……참으로 딜레마였다.');
        await era.printAndWait([
          '결국 ',
          me.get_colored_name(),
          '은(는) 사고를 포기하고, 어느 쪽도 돕지 않는 것이 최선이라고 결론지었다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          '다음 날, ',
          me.get_colored_name(),
          '이(가) 실험실에 도착했을 때, 평소 테이블 위에 놓여 있던 본인용 시약의 양이 두 배로 늘어나 있는 것을 발견했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을 쳐다보았으나, ',
          tachyon.sex,
          '는 그저 무표정하게 ',
          me.get_colored_name(),
          '을(를) 빤히 응시할 뿐이었다.',
        ]);
        await era.printAndWait('…………설마 했던 일이 현실로 벌어졌다. 결국 피해를 보는 것은 자기 자신이었던 것이다.');
        hook.arg = true;
      } else {
        await era.printAndWait('실험이고 뭐고 일단은 멈춰야 했다.');
        await era.printAndWait([
          '오늘 훈련에서 ',
          tachyon.get_colored_name(),
          '은 이미 충분히 달렸다. 여기서 더 무리했다간 신체에 손상이 갈 수도 있었다.',
        ]);
        era.println();
        await say_by_passer_by_and_wait(`${tachyon.get_uma_sex_title()}A`, [
          '트레이너 ',
          me.get_adult_sex_title(),
          '! 정말 감사합니다!',
        ]);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을 붙잡아 세웠다.',
        ]);
        await era.printAndWait([
          '그 ',
          tachyon.get_uma_sex_title(),
          '가 점점 멀어져 가고, 추격할 기회를 놓친 ',
          tachyon.get_colored_name(),
          '은 원망스러운 눈초리로 ',
          me.get_colored_name(),
          '을(를) 쏘아보았다.',
        ]);
        await era.printAndWait([me.get_colored_name(), '의 마음속에 불길한 예감이 스쳤다.']);
        era.drawLine();
        await era.printAndWait([
          '다음 날, ',
          me.get_colored_name(),
          '이(가) 실험실에 도착했을 때, 평소 테이블 위에 놓여 있던 본인용 시약의 양이 두 배로 늘어나 있는 것을 발견했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을 쳐다보았으나, ',
          tachyon.sex,
          '는 그저 무표정하게 ',
          me.get_colored_name(),
          '을(를) 빤히 응시할 뿐이었다.',
        ]);
        await era.printAndWait('…………아무래도 어제의 불길한 예감이 적중한 모양이었다.');
        hook.arg = false;
      }
    } else {
      await print_event_name('추가 실험', tachyon);
      await tachyon.say_and_wait('부족하군, 실험 데이터가 아직 산더미처럼 비어 있어……');
      await tachyon.say_and_wait(
        '계속해야만 하네…… 자네가 하기 싫다면 먼저 돌아가도 좋네, 나 혼자서라도 할 테니까.',
      );
      era.println();
      era.print([me.get_colored_name(), '은(는) 어떻게 할지 결정했다.']);
      era.printButton('방임한다', 1);
      era.printButton('저지한다', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait('단순한 추가 훈련이라면 말렸을지도 모른다.');
        await era.printAndWait('하지만 실험 데이터가 부족하다는 점은……');
        era.println();
        await me.say_and_wait('확실히, 데이터 부족은 치명적이지…… 그럼 오늘은 조금 더 늦게까지 남아볼까.');
        await tachyon.say_and_wait(
          '……분명 먼저 가도 좋다고 하지 않았나? 이건 추가 훈련이 아니라, 내 실험에 필요한 데이터를 모으는 것뿐이라네.',
        );
        me.say('알고 있어, 그러니까');
        era.printButton('「실험을 할 때, 실험 조수가 없으면 곤란하잖아.」', 1);
        era.printButton(
          '「이건 트레이너로서가 아니라 퇴근 후의 내 자유 시간이야. 어떻게 쓰든 내 마음 아니겠어?」',
          2,
        );
        await era.input();
        await tachyon.say_and_wait('…………후훗.');
        await tachyon.say_and_wait('그럼, 데이터 기록을 좀 도와주겠나.');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 고개를 끄덕이며, ',
          tachyon.sex,
          '가 다시 달리기 시작하는 모습을 지켜보았다.',
        ]);
        hook.arg = true;
      } else {
        await era.printAndWait('안 된다.');
        await era.printAndWait('어떤 명목이든, 추가 훈련은 허용할 수 없었다.');
        await era.printAndWait([
          '게다가 ',
          tachyon.get_colored_name(),
          '도 알고 있겠지. 이런 식으로는 효율이 오르지 않는다는 걸. 오히려 억지로 일정을 당기려다간 서두르다 실수를 범하기 마련이다.',
        ]);
        era.println();
        await tachyon.say_and_wait('…………쳇.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 아무 말 없이 걸음을 옮겨 돌아갔다.',
        ]);
        await era.printAndWait([
          '합리적인 설득이라면 순순히 응해주는 것, 그것 또한 ',
          tachyon.sex,
          '의 장점이라 할 수 있었다.',
        ]);
        hook.arg = false;
      }
    }
  }
};