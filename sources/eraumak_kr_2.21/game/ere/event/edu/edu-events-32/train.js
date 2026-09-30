const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {TachyonEduMarks} edu_marks
 */
async function incomplete_combustion(tachyon, me, callname, edu_marks) {
  await print_event_name('불완전 연소', tachyon);
  era.println();
  await tachyon.say_and_wait('오늘의 목표……는……');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 걱정스러운 눈빛으로 ',
    tachyon.get_colored_name(),
    '의 모습을 바라보았다.',
  ]);
  await era.printAndWait([
    '오늘의 ',
    tachyon.sex,
    '는 여전히 한계를 돌파하기 위한 실험, 혹은 훈련이라 불리는 것을 계속하고 있었다.',
  ]);
  await era.printAndWait([
    '만약 ',
    tachyon.sex,
    '의 체력이 충분하고 단지 컨디션이 좋지 않은 것이라면, ',
    me.get_colored_name(),
    '은(는) 마음을 독하게 먹고 실험을 강행했을 것이다. 때로는 엄격한 태도도 필요한 법이니까.',
  ]);
  await era.printAndWait([
    '만약 ',
    tachyon.sex,
    '의 체력이 부족하더라도 컨디션이 유독 좋다면, ',
    me.get_colored_name(),
    '은(는) 고민 끝에 ',
    tachyon.sex,
    '가 단련을 계속하도록 독려했을 것이다.',
  ]);
  await era.printAndWait([
    '결국 선배 트레이너들이 말했듯, ',
    tachyon.get_uma_sex_title(),
    '의 마음 곁에 있어 주는 것이 트레이너로서 가장 중요한 업무이기 때문이다.',
  ]);
  await era.printAndWait('하지만……');
  era.println();
  era.print([
    '체력이 눈에 띄게 떨어지고 상태도 건성인 ',
    tachyon.sex,
    '에게, ',
    me.get_colored_name(),
    '은(는) 정말로 매정해질 수 있을까?',
  ]);
  era.printButton('「……계속하자」(순종 인자 +100)', 1);
  era.printButton('「……쉬자」(컨디션 상승)', 2);
  if ((await era.input()) === 1) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 목표와 꿈…… 그리고, 자신의 아주 작은 사심을 위해.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 현재 모습을 보았다.',
    ]);
    await era.printAndWait([
      '땀에 젖어 운동복 사이로 비치는 하얀 피부와, 달릴 때 튄 흙탕물이 선명한 대조를 이루고 있었다. 몸에 달라붙은 운동복은 ',
      tachyon.sex,
      '의 고운 몸매를 더욱 강조했다.',
    ]);
    await era.printAndWait(
      '원만한 가슴과 엉덩이, 피로로 인해 거칠어진 숨소리와 붉어진 뺨은 단순한 훈련임에도 자꾸만 묘한 상상을 불러일으켰다.'
    );
    await era.printAndWait(
      '탄력 있게 흔들리는 저 과실들을 내 것처럼 손에 쥐고 마음껏 주무를 수 있다면.'
    );
    await era.printAndWait(
      '평소 자신을 무심하게 대하던 저 입술을 혀로 막아버리고, 가냘픈 신음밖에 내뱉지 못하게 할 수 있다면.'
    );
    await era.printAndWait(
      '트레이너로서, 그리고 성숙한 어른으로서 이런 생각은 절대로 허용되지 않는 행위일 것이다.'
    );
    await era.printAndWait([
      '하지만 한 남자의 입장으로서, 내면의 욕망은 ',
      me.get_colored_name(),
      '이(가) 반대하는 것을 허락하지 않았다.',
    ]);
    await era.printAndWait([
      '망설임과 미안한 마음이 들었지만, ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '의 컨디션 난조를 못 본 척하며 ',
      tachyon.sex,
      '에게 훈련을 계속하게 했다.',
    ]);
    await era.printAndWait([
      '…… ',
      me.get_colored_name(),
      '의 불순한 속마음을 눈치챈 것인지, 아니면 그저 훈련이 계속되는 것에 불만을 느낀 것인지, ',
      tachyon.get_colored_name(),
      '은 아무 말 없이 ',
      me.get_colored_name(),
      '을(를) 쏘아보았다.',
    ]);
    add_jewel_reward(32, '순종', 100);
    sys_like_chara(32, 0, -10) && (await era.waitAnyKey());
  } else {
    await era.printAndWait('트레이너로서 부조리한 과잉 훈련은 피해야 마땅했다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '이 한 바퀴를 다 돌자마자 즉시 멈춰 세웠다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……종료? 실험은 이제 막 시작된 참이 아닌가. 오늘 끝내야 할 비교 실…… 실험…… 아……'
    );
    await era.printAndWait([
      tachyon.sex,
      '의 강경한 말투는 끝까지 이어지지 못하고 나지막한 신음으로 변했다.',
    ]);
    await era.printAndWait(
      '누가 상상이나 했을까. 종아리 안쪽을 가볍게 눌렀을 뿐인데, 평소의 독설은 어디 가고 이렇게 매혹적인 소리를 내다니.'
    );
    await era.printAndWait([
      '물론 ',
      me.get_colored_name(),
      '의 마사지가 사람을 즉각 흥분시킬 만큼 신비한 것은 아니었다. 이 모든 것의 주원인은 ',
      tachyon.get_colored_name(),
      ' 본인에게 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이미 힘이 풀려 주저앉은 ',
      tachyon.get_colored_name(),
      '을 부축하며, 살짝 부어오른 ',
      tachyon.sex,
      '의 다리를 가볍게 눌렀다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……으음…… 아…… 이런 건…… 안 돼…… 그만…… 아앗……❤');
    era.println();
    await era.printAndWait([tachyon.sex, '의 입술에서는 넋을 잃게 만드는 교성이 흘러나왔다.']);
    await era.printAndWait([
      '하얀 피부는 이미 붉게 상기되어 있었고, 손길이 닿을 때마다 ',
      tachyon.sex,
      '는 묘한 상상을 불러일으키는 소리를 냈다. 마치 ',
      me.get_colored_name(),
      '이(가) 하는 것이 건전한 마사지가 아니라, 어떤 사악하고 음란한 행위인 것처럼 느껴질 정도였다.',
    ]);
    await era.printAndWait([
      '신성한 경기장에서 이런 광경을 연출하니 당연히 주변의 시선이 쏠렸다. 어느샌가 훈련 중이던 다른 ',
      tachyon.get_uma_sex_title(),
      '들도 ',
      tachyon.get_colored_name(),
      '의 신음에 이끌려 다가오고 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '잠깐…… ',
      callname,
      '…… 히익…… 안 돼…… 사람이…… 아아아앙~~♡',
    ]);
    era.println();
    await era.printAndWait([me.get_colored_name(), '은(는) 아랑곳하지 않고 다리를 눌렀다.']);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 다리는 ',
      me.get_colored_name(),
      '의 생각보다 훨씬 부드럽고 가녀렸다. 손안에 쏙 들어오는 감촉은 ',
      me.get_colored_name(),
      '에게 마치 ',
      tachyon.sex,
      '의 생사여탈권을 쥐고 있다는 착각마저 들게 했다.',
    ]);
    await era.printAndWait([
      '만약 침대 위에서, 분하면서도 신음을 참지 못하는 ',
      tachyon.sex,
      '의 모습을 보며 두 다리를 붙잡고 벌릴 수 있다면, 그 정복감은 세상 그 무엇보다 대단할 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……! 거기는 안 돼!');
    era.println();
    await era.printAndWait([
      '어느샌가 조금 흥분한 ',
      me.get_colored_name(),
      '의 손이 허벅지 위쪽까지 올라갔다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 힘껏 다리를 뺀 반동은 ',
      me.get_colored_name(),
      '의 이성을 일깨워주었다. 눈앞의 ',
      tachyon.get_teen_sex_title(),
      '는 사실 성인 남성보다 세 배 이상의 힘을 가진 ',
      tachyon.get_uma_sex_title(),
      '라는 사실을 말이다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 서둘러 ',
      tachyon.sex,
      '에게 사과했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……아, 알았네…… 오늘은 여기까지만 하지…… 나, 나도 휴식이 필요할 것 같군……'
    );
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 말을 마치자마자 서둘러 자리에서 일어나려 했으나, 다리에 힘이 풀려 ',
      me.get_colored_name(),
      '의 품 안으로 쓰러졌다.',
    ]);
    await era.printAndWait([
      '지금의 ',
      me.get_couple_title(),
      '의 모습은 평범한 트레이너와 ',
      tachyon.get_uma_sex_title(),
      '라기보다, 남자친구의 품에 안겨 어리광을 부리는 여자친구와 그녀를 다정하게 안아주는 연인처럼 보였다.',
    ]);
    await era.printAndWait([
      '타인들이 두려워하는 광기 어린 과학자가 지금은 가냘프게 ',
      me.get_colored_name(),
      '의 품에 기대어 있었다.',
    ]);
    await era.printAndWait([
      '그 모습에 ',
      me.get_colored_name(),
      '은(는) 묘한 자부심과 뿌듯함을 느끼지 않을 수 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……실험실로 데려다주게. 지금 당장.');
    era.println();
    await era.printAndWait([
      '하지만 곧바로 이어진 과학자의 날카로운 눈빛에 ',
      me.get_colored_name(),
      '은(는) 다시 고분고분한 모르모트 군으로 돌아갔다.',
    ]);
    await era.printAndWait([
      '그렇게 ',
      me.get_couple_title(),
      ' 두 사람은 주변 ',
      tachyon.get_uma_sex_title(),
      '들의 감탄과 부러움 섞인 시선을 받으며 천천히 실험실로 향했다.',
    ]);
    edu_marks.train_stop = 1;
    era.println();
    sys_change_motivation(32, 1) && (await era.waitAnyKey());
    return true;
  }
}

module.exports = async () => {
  const buffer = [],
    callname = sys_get_callname(32, 0),
    edu_marks = new TachyonEduMarks(),
    love = era.get('love:32'),
    me = get_chara_talk(0),
    motivation = era.get('cflag:32:컨디션'),
    relation = era.get('relation:32:0'),
    stamina_ratio = era.get('base:32:체력') / era.get('maxbase:32:체력'),
    tachyon = get_chara_talk(32);
  if (love >= 90 && relation > 75 && stamina_ratio > 0.45) {
    buffer.push(
      async () => {
        await tachyon.say_and_wait([
          '가세나 가세, ',
          callname,
          '~~ 어서 오늘의 실험을 시작하자고.',
        ]);
        await tachyon.say_and_wait('……아니면, 여보라고 불러줘야 하나?❤');
      },
      async () => {
        await tachyon.say_and_wait([
          '상태가 좋냐고? 훗, ',
          callname,
          ', 자네와 함께라면 내 상태는 언제나 최고라네.',
        ]);
        await tachyon.say_and_wait('……물론, 다른 의미의 상태도 말이야❤');
      },
    );
    if (tachyon.sex_code - 1 && me.sex_code > 0) {
      buffer.push(async () => {
        await tachyon.say_and_wait([callname, '~~ 오늘의 훈련은 대충 넘길 수 없네.']);
        await tachyon.say_and_wait('왜냐니…… 정말 기초적인 생물학적 상식도 없는 건가?');
        await tachyon.say_and_wait('모체의 단련 부족은 후대의 건강에 영향을 줄 수도 있다고❤');
        await tachyon.say_and_wait('임신 준비를 위해서라도 절대 봐주면 안 되네, 아이 아빠❤');
      });
    }
  } else if (
    love >= 75 &&
    relation > 75 &&
    (motivation >= 0 || stamina_ratio > 0.45)
  ) {
    if (stamina_ratio > 0.45) {
      if (motivation >= 0) {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([callname, '…… 고민 중인 게 하나 있네.']);
            await tachyon.say_and_wait([
              '최근 훈련할 때, ',
              callname,
              ' 자네가 지켜보고 있다는 생각만 해도 유독 힘이 난단 말이지.',
            ]);
            await tachyon.say_and_wait(
              '음…… 사랑의 영향인가. 꽤 괜찮은 연구 과제로군. 다음엔 다양한 애정 표현이라는 변수가 훈련 결과에 어떤 차이를 주는지 실험해 봐야겠어.',
            );
          },
          async () => {
            await tachyon.say_and_wait([
              callname,
              ', 오늘처럼 내가 기꺼이 훈련에 임하는 날엔, 이런 기특한 애마에게 뭔가 포상이 있어야 하지 않겠나?',
            ]);
            await tachyon.say_and_wait('……훈련 종료 후? 이런, 난 그렇게 오래 못 기다리네.');
            await tachyon.say_and_wait('우읍…… 츄릅…… 할짝…… 쪽…… 츄우…… 으음.');
            await tachyon.say_and_wait(
              '후우…… 일단 합격점을 주지. 나머지는 훈련이 끝난 뒤에 계속하자고❤',
            );
            begin_and_init_ero(0, 32);
            await quick_make_love(
              new EroParticipant(32, part_enum.mouth),
              new EroParticipant(0, part_enum.mouth),
              false,
            );
            end_ero_and_train();
          },
          async () => {
            await tachyon.say_and_wait([
              '그런 말이 있지. 트레이너란 ',
              tachyon.get_uma_sex_title(),
              '를 『길들이는』 존재라고. 그래서 길들인다는 글자(馴)엔 우마무스메 마 자가 들어가는 걸세.',
            ]);
            await tachyon.say_and_wait([
              '그게 사실이라면, 나를 완전히 길들여 버린 트레이너 군은 오늘 내가 뭘 해줬으면 좋겠나?❤',
            ]);
          },
        );
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait(
              '에에~~ 설마 상태가 좋지 않은 연인에게 몸을 써서 자신을 기쁘게 하라고 강요하는 건가?',
            );
            await tachyon.say_and_wait([
              '……',
              callname,
              ', 자네가 정말 이런 사람일 줄은 몰랐네…… 흑흑……',
            ]);
            await tachyon.say_and_wait(
              '후훗, 농담이라네. 뭘 그렇게 진지하게 받아들이나…… 하지만 자네가 조금 심한 장난을 치고 싶다면 나도 마다하지 않겠네❤',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '훈련? 그보다 실험이나 제대로 하게…… 오늘의 실험도 아직 안 끝났는데 뭘 그리 서두르나.',
            );
            await tachyon.say_and_wait(
              '음? 봐주지 않겠다고? 호오, 방법이 있다면 어디 써보게나. 기대하고 있지.',
            );
            await tachyon.say_and_wait('잠깐…… 공주님 안기라니…… 이건 너무 부끄럽지 않은가……');
          },
          async () => {
            await tachyon.say_and_wait('훈련? 음…… 오늘의 약을 마신 뒤에 얘기하지.');
            await tachyon.say_and_wait(
              '전신이 뜨겁다고? 의식이 흐릿해? 괜찮네, 괜찮아. 지극히 정상적인 반응이니까.',
            );
            await tachyon.say_and_wait('음훗…… 시간이 얼추 됐군.');
            await tachyon.say_and_wait(
              '자, 오늘의 약은 여성 호르몬, 남성 호르몬, 코르티솔, 성장 호르몬, 바소프레신을 평균 이상으로 끌어올리는 약, 쉽게 말하자면 미약이라네❤',
            );
            await tachyon.say_and_wait('훈련 같은 건 이게 끝난 다음에 하자고❤');
            let temp = 1;
            if (era.get('talent:0:강철의의지')) {
              era.printButton('여기선 본능에 맡긴다……', 1);
              era.printButton('「장난치지 말고, 어서 훈련하러 가!」', 1);
              temp = await era.input();
            }
            if (temp === 1) {
              await era.printAndWait([
                tachyon.get_colored_name(),
                '의 유혹에 이기지 못하고, ',
                me.get_colored_name(),
                '은(는) ',
                tachyon.sex,
                '를 실험실 구석의 작은 침대에 눕혔다……',
              ]);
              await quick_into_sex(32);
              return true;
            } else {
              await era.printAndWait([
                me.get_colored_name(),
                '은(는) 학습된 강철의 의지로 유혹을 뿌리쳤다.',
              ]);
              await tachyon.say_and_wait('이걸 버텨낸다고!?');
              await era.printAndWait([
                me.get_colored_name(),
                '은(는) 투덜거리는 ',
                tachyon.get_colored_name(),
                '을 무시하고, ',
                tachyon.sex,
                '를 억지로 껴안아 훈련장으로 데려갔다.',
              ]);
            }
          },
        );
      }
    } else if (motivation >= 0) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '휴…… 가끔은 이렇게 진지하게 땀을 흘리는 것도 나쁘지 않군. 휴식? 지금 이렇게 상태가 좋은데 쉬는 건 너무 아깝지 않은가.',
          );
          await tachyon.say_and_wait([
            '잠깐, ',
            callname,
            ', 지금 뭐 하는 건가…… 냄새 맡지 말게…… 지금 지독하단 말이야……',
          ]);
          await tachyon.say_and_wait('아, 알았네…… 들어가서 쉴 테니까 제발 그만 맡게나……');
          await tachyon.say_and_wait([
            '계속해도 된다니 무슨 소린가!? ',
            callname,
            ', 자네…… 정말 변태로군.',
          ]);
          await tachyon.say_and_wait(
            '참 나, 하지만 이런 것에 흥분해버리는 나 또한 명백한 변태겠지❤',
          );
        },
        async () => {
          await tachyon.say_and_wait('체력이 다해서 휴식이 필요하다고?');
          await tachyon.say_and_wait(
            '……그건 며칠 전에 누군가가 너무 심하게…… 허리가 아직도 아프네만……',
          );
          await tachyon.say_and_wait(
            '어이! ……정말이지, 허리가 아프다는 건 비유일 뿐이네…… 뭘 그리 놀라나…… 그렇게 내가 걱정되는 건가?❤',
          );
        },
        async () => {
          await tachyon.say_and_wait('하아…… 하아……');
          await tachyon.say_and_wait('아무것도 아니네. 스태미나가 다 떨어지려면 아직 멀었어!');
          await tachyon.say_and_wait([
            '하지만…… 정말 못 버티겠다 싶으면 자네가 스태미나를 보충해주길 바라네, ',
            callname,
            '❤',
          ]);
        },
      );
    }
  } else if (relation > 225 && (motivation >= 0 || stamina_ratio > 0.45)) {
    if (motivation >= 0) {
      if (stamina_ratio > 0.45) {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '빨리 빨리! 시간은 기다려주지 않네! 오늘의 실험 데이터라면 논문을 다섯 편은 써낼 수 있어! 앞으로 두 달간 연구비 걱정은 없겠군!',
            ),
          async () => {
            await tachyon.say_and_wait([
              '훈련? 문제없네. 하지만 조건이 있어. ',
              callname,
              ', 오늘 자네도 같이 뛰는 거네.',
            ]);
            await tachyon.say_and_wait([
              '걱정 말게. 지금 자네의 신체 능력이라면 단시간 폭발력만큼은 ',
              tachyon.get_uma_sex_title(),
              '에게 뒤지지 않는 속도를 낼 수 있을 테니까.',
            ]);
            await tachyon.say_and_wait(
              '괜찮아, 괜찮아. 음, 단시간이라면 아마…… 5초 정도?',
            );
          },
        );
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait([
              '훈련? 또 운동장인가…… 저기, ',
              callname,
              ', 좀 더 재미있는 훈련은 없는 건가?',
            ]);
            await tachyon.say_and_wait(
              '예를 들면…… 약물 러시안 룰렛? 무작위 효과의 약을 다섯 병씩 마시고 레이스를 시작하는 거지!',
            );
            await tachyon.say_and_wait([
              '먼저 협력해 줄 ',
              tachyon.get_uma_sex_title(),
              '를 찾으라고? ',
              sys_get_colored_callname(32, 25),
              '…… 에이, 안 되나?',
            ]);
          },
          async () => {
            await tachyon.say_and_wait([
              '이보게 ',
              callname,
              ', 냉정하게 분석해 보세. 매일 이렇게 몸을 굴리는 게 연구보다 효율이 좋겠나?',
            ]);
            await tachyon.say_and_wait(
              '뭐? 내 특수 이벤트는 한 번 터져봤자 겨우 +5라고? 도대체 무슨 근거로 훈련이랑 비교하는 거냐고?',
            );
            await tachyon.say_and_wait([
              '아니, 잠깐만, ',
              callname,
              ' 자네 무슨 소리를 하는 건가…… 도통 못 알아듣겠군……',
            ]);
          },
          async () => {
            await tachyon.say_and_wait(
              '에휴…… 훈련 귀찮은데. 자네가 대신 뛰면 안 되겠나?',
            );
            await tachyon.say_and_wait([
              '착한 아이라고? 이보게 ',
              callname,
              ', 설마 나를 어린애 취급하는 건 아니겠지?',
            ]);
            await tachyon.say_and_wait(
              '뭐…… 가끔 뛰는 것도 나쁘진 않겠지. 아마도.',
            );
          },
        );
        !edu_marks.help_tyr &&
          buffer.push(async () => {
            edu_marks.help_tyr = 1;
            await print_event_name('폭군을 돕다(?)', tachyon);
            await tachyon.say_and_wait([
              callname,
              ', 자네는 ',
              tachyon.get_uma_sex_title(),
              '의 힘을 이길 수 있다고 생각하는 건가?',
            ]);

            await era.printAndWait([
              { isBr: true },
              '실험실 안에서, ',
              tachyon.get_colored_name(),
              '이 흥미롭다는 듯 말했다.',
            ]);
            await era.printAndWait('그 목소리는 매우 여유로웠고 절대적인 자신감이 넘쳤다.');
            await era.printAndWait('종족의 격차, 타고난 재능의 차이가 부여한 자신감이었다.');
            era.println();
            await tachyon.say_and_wait(
              '이제 깨달았겠지. 이것이 우리 사이의 격차라네. 그러니 가능하다면 자네가 좀……'
            );
            era.println();
            await era.printAndWait([
              '아무리 힘을 주어도 꿈쩍도 하지 않는 신체. 이토록 가녀린 몸임에도 불구하고, 이것이 ',
              tachyon.get_uma_sex_title(),
              '라는 생물의 신비였다.',
            ]);
            !era.get('cflag:0:종족') &&
              (await era.printAndWait(
                '하지만…… 인간으로서도 나름의 자존심은 있는 법이었다.'
              ));
            era.println();
            await tachyon.say_and_wait(
              '오? 아직도 힘이 남았나? 후훗, 그 근성만큼은 인정해주지. 하지만 칭찬해 줄 만한 건 그게 다라네.'
            );
            era.println();
            await era.printAndWait([
              tachyon.sex,
              '는 ',
              me.get_colored_name(),
              '의 헛된 노력을 비웃었다. 하지만 쉽게 질리는 성격인 ',
              tachyon.sex,
              '에게 있어서, ',
              me.get_colored_name(),
              '이(가) 반복하는 헛수고는 점점 지루하게 느껴지기 시작했다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              callname,
              '…… 그만 발버둥 치게나. 자네도 이미 알고 있지 않나? 이 모든 노력이 그저 헛된 힘쓰기일 뿐이라는 걸. 그래……',
            ]);
            era.println();
            await era.printAndWait([
              '아아, ',
              tachyon.sex,
              '는 모든 트레이너를 심연으로 떨어뜨릴 만한 선언을 내뱉었다.',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '자네가 아무리 잡아당겨도, 나는 절대로 훈련하러 가지 않을 거라네.'
            );
            era.println();
            await era.printAndWait('바꿔 말하자면, 상황은 이러했다.');
            await era.printAndWait([
              '훈련에 가기 싫은 ',
              tachyon.get_colored_name(),
              '과, 반드시 오늘 훈련을 시키려는 ',
              me.get_colored_name(),
              '.',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              '에게 끌려가지 않으려 의자를 붙잡고 버티는 ',
              tachyon.sex,
              '와, 그런 ',
              tachyon.sex,
              '의 허리를 붙잡고 실험대에서 떼어놓으려 필사적인 ',
              me.get_colored_name(),
              '.',
            ]);
            await era.printAndWait([
              '그야말로 두 사람 사이의, 지극히 따분한 줄다리기 싸움이었다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              callname,
              '…… 이제 포기하게. 인간이 어떻게…… 앗, 아파!?',
            ]);
            era.println();
            await era.printAndWait([
              '우쭐해진 ',
              tachyon.sex,
              '는 깜빡한 듯했다. ',
              tachyon.sex,
              '에 의한 개조 덕분에, ',
              me.get_colored_name(),
              '은 이미 ',
              tachyon.get_uma_sex_title(),
              '와 대등하진 않아도 그 7~8할에 달하는 괴력을 소유하고 있었다는 사실을.',
            ]);
            await era.printAndWait([
              '그 괴력에 더해 ',
              tachyon.get_colored_name(),
              '의 방심이 겹치자, ',
              me.get_colored_name(),
              '은(는) 순식간에 ',
              tachyon.get_colored_name(),
              '의 하반신을 통째로 들어 올렸다. 이제 남은 것은 실험대를 필사적으로 붙잡고 있는 ',
              tachyon.sex,
              '의 두 손뿐이었다.',
            ]);
            era.println();
            await tachyon.say_and_wait([
              '이…… 이렇게까지 할 줄은 몰랐군, ',
              callname,
              '…… 하지만 이런 실수는 두 번 다시 없을 걸세. 비록 두 손만으로 실험대를 잡고 있다 해도, 나 아그네스 타키온은 이 실험실 안에서 무적이라네! 크흐흐…… 크하하하하하! ……으아악!?',
            ]);
            era.println();
            await era.printAndWait([
              me.get_couple_title(),
              '두 사람 모두 이 지루한 전쟁이 십여 분은 더 이어질 거라 생각했을 때, 신기한 일이 벌어졌다.',
            ]);
            await era.printAndWait([
              '마치 미지의 힘에 빙의된 것처럼, ',
              tachyon.get_colored_name(),
              '에게 실험대 전체가 갑자기 용암처럼 뜨겁게 느껴졌고, 그 바람에 ',
              tachyon.sex,
              '는 손을 놓을 수밖에 없었다.',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              '와 ',
              me.get_colored_name(),
              '은 바닥에 함께 넘어졌다. ',
              tachyon.get_colored_name(),
              '이 일어나 서둘러 손을 확인했지만, 화상 자국 하나 없이 멀쩡했다. 마치 환각이라도 본 것 같았다.',
            ]);
            era.println();
            const coffee = get_chara_talk(25);
            await coffee.say_and_wait([
              '…… 어서 ',
              sys_get_colored_callname(25, 32),
              '를 데리고 나가주세요……시끄러워요……',
            ]);
            era.println();
            await era.printAndWait([
              '말을 건 것은 ',
              tachyon.get_colored_name(),
              '과 같은 실험실을 사용하는 영능력계 흑발 ',
              tachyon.get_uma_sex_title(),
              ', ',
              coffee.get_colored_name(),
              '이었다.',
            ]);
            era.println();
            await era.printAndWait([
              '상대가 어떤 방법을 써서 ',
              tachyon.get_colored_name(),
              '의 손을 떼어놓았는지는 알 수 없었지만, ',
              tachyon.sex,
              '가 다시 실험실에 눌러앉을 기회를 잡기 전에, ',
              me.get_colored_name(),
              '은(는) 제대로 감사 인사를 전할 틈도 없이 ',
              tachyon.get_colored_name(),
              '을 붙잡고 훈련장으로 달려갔다.',
            ]);
          });
      }
    } else if (stamina_ratio > 0.45) {
      buffer.push(
        () =>
          tachyon.say_and_wait([
            callname,
            '…… 빛이 보여…… 조금만 더, 조금만 더 노력하면 닿을 수 있어…… 바로 저기에……',
          ]),
        async () => {
          await tachyon.say_and_wait([
            callname,
            '…… 내게…… 약을…… 어서…… 더는 못 버티겠어……',
          ]);
          await tachyon.say_and_wait(
            '아, 그래그래, 바로 이거야. 이게 없으면 살 수가 없지……',
          );
          await tachyon.say_and_wait(
            '음? 말투가 이상하다고? 그냥 평범한 영양제일 뿐인데 뭐가 이상한가? 중독자 같다고? 머릿속에 그런 생각만 가득한 사람이나 그렇게 생각하는 법이라네.',
          );
        },
      );
    }
  } else if (relation > 75) {
    if (stamina_ratio > 0.45) {
      if (motivation >= 0) {
        buffer.push(
          () => tachyon.say_and_wait([callname, '! 우리들의 연구를 시작하세!']),
          () =>
            tachyon.say_and_wait(
              '상태 최고! 오늘은 플랑크 시간에 맞먹는 기록을 낼 수 있을 것 같군!',
            ),
          () => tachyon.say_and_wait('광속을 초월할 때까지! 가능성의 저편에 닿을 때까지!'),
        );
      } else {
        buffer.push(
          async () => {
            await tachyon.say_and_wait('……지루하군.');
            await era.printAndWait([
              tachyon.get_colored_name(),
              '이 중얼거렸다.',
            ]);
          },
          async () => {
            await tachyon.say_and_wait([
              callname,
              '…… 실험에는 영감이 아주 중요하다고 생각하네. 성공은 99%의 노력과 1%의 영감으로 이루어진다지만, 1%의 영감이 없다면 99%든 99.99%든 아무런 소용이 없는 법이지. 내 말이 무슨 뜻인지 알겠나?',
            ]);
            await tachyon.say_and_wait(
              '아니, 훈련을 빼먹으려고 하는 소리가 아니네. 그저 사실을 말하는 것뿐이야.',
            );
            await tachyon.say_and_wait(
              '하지만 자네가 그 화제를 꺼냈으니 하는 말인데, 그걸 오늘 훈련에 대입해 보면……',
            );
            await era.printAndWait([me.get_colored_name(), '은(는) 고개를 저었다.']);
            await tachyon.say_and_wait('칫.');
            await era.printAndWait([tachyon.get_colored_name(), '이 혀를 찼다.']);
          },
          async () => {
            await tachyon.say_and_wait(
              '훈련? 오늘의 실험도 아직 안 끝났지 않은가. 에휴…… 됐네, 실험 끝나면 갈 테니.',
            );
            await era.printAndWait([
              '결국 ',
              tachyon.get_colored_name(),
              '이 훈련하러 오기까지 ',
              me.get_colored_name(),
              '은(는) 꼬박 세 시간을 기다려야 했다. 해가 지고 나서야 ',
              tachyon.sex,
              '는 훈련장에 모습을 드러냈다.',
            ]);
          },
        );
      }
    } else if (motivation < 0 && me.sex_code === 1 && tachyon.sex_code - 1) {
      buffer.push(() =>
        incomplete_combustion(tachyon, me, callname, edu_marks),
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '하아 하아…… 체력? 문제없네. 오늘은 반드시 돌파할 수…… 하아, 하아……',
          ),
        () =>
          tachyon.say_and_wait('한계까지…… 체력의 한계에 다다라야 진정한 돌파구를 찾을 수 있어!'),
        () =>
          tachyon.say_and_wait(
            '이성은 이제 쉬어야 한다고 말하지만, 감성은 도저히 멈추고 싶어 하질 않는군…… 참으로 행복한 고민이야, 하하하!',
          ),
      );
    }
  } else if (stamina_ratio > 0.45) {
    if (motivation >= 0) {
      buffer.push(
        () => tachyon.say_and_wait('그럼, 실험을 시작하지.'),
        () => tachyon.say_and_wait('어서 가서 실험 데이터를 기록할 준비를 하게. 한눈팔지 말고.'),
        async () => {
          await tachyon.say_and_wait('흠……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 말이 없었지만, ',
            me.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '가 의욕이 넘치고 있다는 것을 알 수 있었다.',
          ]);
        },
      );
    } else {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '뭘 그리 멍하니 있나. 어서 실험 데이터를 기록할 준비나 하게. 실수했다간 가만두지 않을 테니.',
          ),
        () =>
          tachyon.say_and_wait(
            '방향이 틀린 건가…… 왜지…… 체력은 충분한데 한계를 넘을 수 있다는 자신이 전혀 생기질 않아……',
          ),
        async () => {
          await tachyon.say_and_wait('……최근 자네가 제안하는 실험들, 점점 지루해지는군.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '이 위험한 눈빛으로 ',
            me.get_colored_name(),
            '을(를) 쳐다보았다.',
          ]);
        },
      );
    }
  } else if (motivation < 0 && me.sex_code === 1 && tachyon.sex_code - 1) {
    buffer.push(() => incomplete_combustion(tachyon, me, callname, edu_marks));
  } else {
    buffer.push(
      async () => {
        await tachyon.say_and_wait('……실험을 시작하세.');
        await tachyon.say_and_wait(
          '힘들다고? 그럴 리가. 이번엔, 이번만큼은 반드시 병목 현상을 해결할 수 있을 것 같은 예감이 들어……',
        );
      },
      () => tachyon.say_and_wait('더 빨라져야 해…… 윽…… 몸이…… 움직이지 않아……'),
      async () => {
        await tachyon.say_and_wait(
          '농담하지 말게…… 한계를 돌파하기 위한 첫 번째 조건은 한계에 도달하는 것이야.',
        );
        await tachyon.say_and_wait(
          '더 빨라져야 하네. 한계에조차 닿지 못한다면…… 한계 돌파 따위 논할 가치도 없어……!',
        );
      },
    );
  }
  return await get_random_entry(buffer)();
};