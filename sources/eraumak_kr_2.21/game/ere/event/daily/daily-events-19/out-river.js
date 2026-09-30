const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const AgEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-19');
const recruit_flags = require('#/data/event/recruit-flags');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const digital = get_chara_talk(19);
  hook.arg = (await select_action_around_river(19)) > 0;
  if (hook.arg) {
    switch (get_random_value(0, 3)) {
      case 0:
        await digital.say_and_wait([
          sys_get_colored_callname(19, 46),
          ', 저기 있는 건 ',
          sys_get_colored_callname(19, 46),
          '다! 반드시 저기로 가야만 해요!',
        ]);
        break;
      case 1:
        await digital.say_and_wait([
          '발견했다. ',
          get_chara_talk(9).get_colored_name(),
          ' 씨와 ',
          get_chara_talk(8).get_colored_name(),
          ' 씨! ',
          digital.sex,
          '들이 저기서 뭘 하는 걸까~요!',
        ]);
        break;
      case 2:
        await digital.say_and_wait([
          '와아! ',
          sys_get_colored_callname(19, 58),
          '가 넘어졌어, 도와드리러 가야... 어라, 벌써 일어나셨다! 우오오, 정말 근면하시기도 해라...',
        ]);
        break;
      case 3:
        await era.printAndWait(
          `강변을 산책하는 것은 ${digital.name}에게 있어 일종의 성지순례와도 같은 행위였다.`,
        );
        await era.printAndWait(
          `곳곳에서 달리고 있는 ${digital.get_uma_sex_title()}를 발견할 수 있기 때문이었다.`,
        );
        await era.printAndWait(
          `노래 연습 중인 꼬마 ${digital.get_uma_sex_title()} 아이돌부터, 더트 적응 훈련 중인 노력가까지.`,
        );
        await era.printAndWait(
          `다행히 이번에 ${digital.sex}는 존엄함에 정신을 잃지는 않았다.`,
        );
    }
  } else {
    const edu_marks = new AgEduMarks(),
      me = get_chara_talk(0);
    if (!edu_marks.catch_fish) {
      edu_marks.catch_fish = 1;
      await print_event_name('대어를 낚았지만, 물고기의 상태가 영 좋지 않다', digital);
      await era.printAndWait(
        `강변 낚시는 많은 ${digital.get_uma_sex_title()}들이 여가 시간에 선택하는 활동이었다.`,
      );
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '이(가) 담당하는 ',
        digital.get_uma_sex_title(),
        '인 ',
        digital.get_colored_name(),
        '은 조금 달랐다. 직접 낚시를 하기보다는 남이 낚시하는 걸 구경하는 쪽을 더 선호했다.',
      ]);
      await era.printAndWait(
        `아니... 정확히는 낚시하는 ${digital.get_uma_sex_title()}를 구경하는 것을 더 좋아했다.`,
      );
      await era.printAndWait(
        `그래서 ${digital.sex}가 작은 의자에 앉아 낚싯대를 잡고 입질을 기다리는 모습은 꽤 보기 드문 광경이었다.`,
      );
      await digital.say_and_wait(
        `과연... 낚시라는 건 이런 거였군요. 본래 휴식 활동일 텐데, 어째서 이렇게 기운이 쭉 빠지는 걸까요...`,
      );
      await digital.say_and_wait(
        `낚시를 하는 다른 ${digital.get_uma_sex_title()}짱들은 대체 무슨 생각을 하는 걸까요...`,
      );
      await me.say_and_wait(
        `${digital.sex}들은 대부분 그냥 낚시 그 자체를 즐기는 거겠지. 주변을 한번 볼래?`,
      );
      await digital.say_and_wait('에?');
      await era.printAndWait([
        digital.get_colored_name(),
        '이 주위를 둘러보자, 강 건너편에서도 마침 한 명의 ',
        digital.get_uma_sex_title(),
        '가 낚시를 하고 있었다.',
      ]);
      await era.printAndWait(`낚시라기보다는 자고 있는 것에 가까워 보였다.`);
      await digital.say_and_wait(
        `과연, 느껴져요. ${digital.sex}는 지금 극도의 릴랙스 상태에 빠져 있군요.`,
      );
      await digital.say_and_wait(
        `우와아, 무한한 정적 속에 누워 낚시하는 ${digital.get_uma_sex_title()}... 물고기가 미끼를 물어도 ${
          digital.sex
        }를 조금도 깨우지 못하겠네요...`,
      );
      const sky = get_chara_talk(20),
        sky_recruit_check = era.get('cflag:20:모집상태') === recruit_flags.yes;
      if (sky_recruit_check) {
        await sky.say_and_wait([
          '이런이런, 설마 ',
          sys_get_callname(20, 0),
          '이 오늘 ',
          sys_get_callname(20, 19),
          '이랑 같이 낚시를 하러 나올 줄이야. 요호호, 나랑 같이 하는 게 아니었다니... 훌쩍.',
        ]);
        await era.printAndWait([
          '등 뒤에서 익숙한 목소리가 들려왔다. ',
          sky.get_colored_name(),
          ' 였다.',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '는 작은 손으로 눈을 비비며 가련한 눈빛을 보냈다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          sky.get_colored_name(),
          '의 이런 연기가 정말 대단하다고 인정할 수밖에 없었다. 만약 ',
          me.get_colored_name(),
          '이(가) 진작부터 ',
          digital.sex,
          '의 교묘함에 익숙해져 있지 않았더라면, 정말 속아 넘어갔을지도 모른다.',
        ]);
        await digital.say_and_wait('와와왓! 고의가 아니었어요, 지금 바로 비킬게요!');
        await era.printAndWait([
          digital.get_colored_name(),
          '은 몹시 당황하며 손을 흔들며 일어서려 했다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 아무 말 없이 ',
          sky.get_colored_name(),
          '의 옆으로 이동해, 살며시 ',
          sky.get_colored_name(),
          '의 등을 꼬집었다. 꽤나 부드러웠다.',
        ]);
        await sky.say_and_wait('에구구! 그냥 농담이에요, 농담~');
      } else {
        await sky.say_and_wait([
          '이런이런, ',
          sys_get_colored_callname(20, 19),
          '이잖아. 웬일이야? 강가에서 다른 ',
          digital.get_uma_sex_title(),
          '가 낚시하는 걸 구경하는 게 아니었어?',
        ]);
        await sky.say_and_wait([
          '그리고... ',
          sys_get_colored_callname(20, 19),
          '의 ',
          sys_get_callname(20, 0),
          ', 꽤 유명한 분이네~',
        ]);
        await era.printAndWait([
          '등 뒤에서 나른한 목소리가 들려왔다. 이 목소리는 ',
          me.get_colored_name(),
          '에게도 조금 익숙했다.',
        ]);
        await digital.say_and_wait([sys_get_colored_callname(19, 20), '?!']);
        await era.printAndWait([
          '깜짝 놀란 나머지 ',
          digital.get_colored_name(),
          '은(는) 들고 있던 낚싯대를 놓쳐버렸고, 튀어 오른 물보라가 몸에 튀었다.',
        ]);
        await sky.say_and_wait('오호? 낚싯대까지 떨어뜨리다니, 이 세이짱, 화낼 거라고!');
        await digital.say_and_wait([
          '아뇨아뇨, 제 잘못이에요, 제 잘못! 감히 제가 ',
          digital.get_uma_sex_title(),
          '짱이랑 같이 낚시를 하러 오는 게 아니었는데...',
        ]);
      }
      await sky.say_and_wait([
        '그럼, ',
        sys_get_colored_callname(20, 19),
        ', 내가 직접 가르쳐줄까? 에헤헤!',
      ]);
      await digital.say_and_wait('히이익!');
      await era.printAndWait([
        '순식간에 ',
        sky.get_colored_name(),
        '가 도망가려던 ',
        digital.get_colored_name(),
        '을 붙잡았다. ',
        digital.get_colored_name(),
        '은 마치 석화 마법에 걸린 것처럼 몸이 굳어버렸다.',
      ]);
      await sky.say_and_wait('쿠헤헤!');
      await era.printAndWait([
        '입꼬리를 살짝 올린 채, ',
        sky.get_colored_name(),
        '는 가냘픈 손으로 그보다 더 자그마한 ',
        digital.get_colored_name(),
        '의 왼손을 덥석 잡았다.',
      ]);
      await digital.say_and_wait('아바아바바...');
      await sky.say_and_wait('자자, 의자에 좀 앉아보라니까~');
      await era.printAndWait([
        '단번에 ',
        digital.get_colored_name(),
        '을 의자 근처로 끌고 가더니, 손을 ',
        digital.sex,
        '의 어깨 위에 올렸다...',
      ]);
      await era.printAndWait([
        '그러자 ',
        digital.get_colored_name(),
        '은 연화 마법이라도 걸린 듯 담요처럼 흐물흐물해지며 의자에 주저앉았다.',
      ]);
      await sky.say_and_wait('자, 이 낚싯대를 잡고, 찌를 저쪽으로 옮겨서...');
      await digital.say_and_wait('아바아바바...');
      await era.printAndWait([
        '보아하니 ',
        digital.get_colored_name(),
        '의 영혼은 진작에 재가 되어 바람에 흩날려버린 모양이었다.',
      ]);
      era.drawLine({ content: '잠시 후' });
      await digital.say_and_wait('...!');
      await digital.say_and_wait('우에에... 안 되겠어요, 정말로 무리에요...');
      await era.printAndWait([
        '흙바닥 위에 기진맥진해서 누워 있는 ',
        digital.get_colored_name(),
        '을 보니 오늘은 정말 한계인 듯했다.',
      ]);
      await sky.say_and_wait('아하하, 정말 재밌는 사람이네.');
      await era.printAndWait([
        digital.get_colored_name(),
        '과는 대조적으로 ',
        sky.get_colored_name(),
        '는 오히려 기운이 넘쳐 보였다. 이게 무슨 신종 흡성대법이라도 되는 걸까.',
      ]);
      era.println();
      let wait_flag;
      if (sky_recruit_check) {
        await sky.say_and_wait([sys_get_callname(20, 0), '!']);
        await era.printAndWait([
          sky.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          ' 쪽을 향해 몸을 돌렸다. 방금 전까지 크게 웃던 표정을 싹 거두고 ',
          me.get_colored_name(),
          '을(를) 가만히 바라보았다.',
        ]);
        await sky.say_and_wait([
          '기분이 어때? 당신이나 ',
          digital.sex,
          '나, 마치 나를 따돌리려는 느낌인걸~',
        ]);
        await era.printAndWait([
          '그냥 떠보려는 속셈인 걸까?',
        ]);
        await sky.say_and_wait([
          '이런이런, ',
          sys_get_callname(20, 0),
          ', 설마 질투라도 하는 거야? 질투해야 할 쪽은 나라고?',
        ]);
        era.printButton('타협한다 (세이운 스카이 호감도 +40)', 1);
        era.printButton('본론을 이야기한다 (아그네스 디지털 호감도 +40)', 2);
        if ((await era.input()) === 1) {
          await me.say_and_wait('알겠어, 알겠어. 정 그렇다면 다음에는 너랑 낚시하러 올게.');
          await era.printAndWait('일단은 적당히 둘러대서 넘기기로 했다.');
          await sky.say_and_wait(
            '에헤헤, 그럼 내 장비 좀 업그레이드해 주라~ 트레이너 월급 꽤 쏠쏠하잖아?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '가 한 손을 머리 위에 얹고 핑크빛 혀를 낼름 내밀었다. ',
            me.get_colored_name(),
            '은(는) 문득 어떤 이모티콘을 떠올렸다.',
          ]);
          await era.printAndWait(
            '기지개를 켜며 은근슬쩍 스마트폰에 있는 우마코인 잔액을 떠올렸다. 장비 교체 정도는 문제없겠...지?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '는 사양하지 않고 바로 의자를 가져와 ',
            me.get_colored_name(),
            '의 옆에 앉더니, ',
            me.get_colored_name(),
            '의 어깨에 머리를 기댔다.',
          ]);
          await era.printAndWait(
            '곁눈질로 보니, 청색 머리칼이 땀에 살짝 젖어 있었고, 매끄러운 목덜미에는 땀방울이 맺혀 있었다.',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '가 스마트폰을 조작하자 화면에 상품들이 지나갔다. ',
            sky.get_colored_name(),
            '의 손가락 끝에 걸리는 가격대를 슬쩍 본 ',
            me.get_colored_name(),
            '은(는) 갑자기 좋지 않은 예감을 느꼈다.',
          ]);
          await me.say_and_wait('잠깐, 일단 멈춰봐. 잠깐만.');
          await sky.say_and_wait('에? 본인이 직접 말했으면서~');
          await era.printAndWait(
            '가격을 보니 단순한 고급형을 넘어 거의 플래그쉽급 가격대였다.',
          );
          await era.printAndWait(
            '트레이너의 월급이 적은 편은 아니지만, 이런 걸 아무렇지 않게 살 정도는 아니었다.',
          );
          await sky.say_and_wait('알았어 알았어, 농담은 여기까지! 잡담도 여기까지!');
          await era.printAndWait([
            '스마트폰을 집어넣은 ',
            sky.get_colored_name(),
            '는 이제야 본론으로 들어가는 듯했다.',
          ]);
          await sky.say_and_wait([
            sys_get_colored_callname(20, 19),
            '이 달리는 이유를 찾아줘! 오오오~!',
          ]);
          await era.printAndWait([
            '나름 진지한 이야기였지만, ',
            sky.get_colored_name(),
            '의 입을 통해 나오니 정말 맥없는 외침이었다...',
          ]);
          await era.printAndWait([
            '슬쩍 ',
            digital.get_colored_name(),
            '을 쳐다보니, ',
            digital.sex,
            '는 아직 정신이 돌아오지 않은 듯했다.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            '는 농담 섞인 말투로 현재 ',
            me.get_colored_name(),
            '이(가) 시급하게 해야 할 일을 전하고 있었다... 낚싯대도 아마 그 일환이겠지.',
          ]);
          await era.printAndWait([
            '다음에 ',
            digital.sex,
            '에게 선물을 사주기로 하자. 낚싯대는 그냥 없는 셈 치는 게 좋겠다...',
          ]);
          era.println();
          wait_flag = sys_like_chara(20, 0, 40);
        } else {
          await me.say_and_wait('본론을 말해줘. 널 잘 알고 있으니까.');
          await era.printAndWait([
            '역시 ',
            sky.get_colored_name(),
            '는 늘 ',
            digital.sex,
            ' 나름의 생각이 있었다.',
          ]);
          await era.printAndWait([
            '몸을 돌린 ',
            sky.get_colored_name(),
            '는 석양을 정면으로 마주하며 등을 보였다.',
          ]);
          await sky.say_and_wait([
            sys_get_colored_callname(20, 1),
            ', 기억하고 있지?',
          ]);
          await me.say_and_wait('무슨 소리야, 기억하고 말고 할 게 어딨어?');
          await era.printAndWait(
            '그때였던가. 자신이 무엇을 해야 할지, 어떤 목표가 있는지, 어떻게 해야 할지 잊어버렸던 일.',
          );
          await sky.say_and_wait([
            sys_get_colored_callname(20, 1),
            '는 찾았어. ',
            digital.sex,
            '만의 안식처를 말이야.',
          ]);
          await era.printAndWait([
            '그 일은 꽤나 화제가 되어서 교육 소재로도 쓰일 정도였지만, 다행히 ',
            get_chara_talk(1).get_colored_name(),
            ' 본인은 신경 쓰지 않았다.',
          ]);
          await era.printAndWait('동경 그 자체는 영원히 나아갈 목표가 될 수 없었다.');
          await era.printAndWait([
            digital.get_colored_name(),
            '... ',
            digital.sex,
            '는 곧 깨닫게 될 거야. ',
            digital.sex,
            '가 다른 누구보다 강해질 것이고, ',
            digital.sex,
            '가 이전까지 동경해왔던 대상의 꿈을 부수게 될 거라는 사실을.',
          ]);
          await me.say_and_wait([
            '내가 ',
            digital.sex,
            '를 데리고 찾아낼 거야. 오직 ',
            digital.sex,
            '만의 판테온을 말이지.',
          ]);
          await sky.say_and_wait('역시 나의 트레이너 씨네!');
          await me.say_and_wait('응.');
          era.println();
          wait_flag = sys_like_chara(19, 0, 40);
        }
      } else {
        await sky.say_and_wait([
          sys_get_colored_callname(20, 19),
          '의 트레이너라니——',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '가 고개를 돌려 ',
          me.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
        await era.printAndWait([
          '교묘한 책사. 그것이 세상 사람들... 적어도 ',
          digital.sex,
          '의 동급생들이 ',
          digital.sex,
          '에게 내리는 평가였다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          sky.get_colored_name(),
          '에 대해 잘 알지는 못했지만, ',
          digital.sex,
          '의 명성은 들어본 적이 있었다... 승리를 위해 수단과 방법을 가리지 않는다고 했던가?',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '와는 아마 레이스가 겹칠 일이 없을 텐데, ',
          digital.sex,
          '는 여기서 뭘 하려는 걸까?',
        ]);
        era.printButton('우선 대화를 나눠본다 (호감도 +40)', 1);
        era.printButton('최대한 빨리 디지털을 데리고 떠난다 (애정도 +5)', 2);
        if ((await era.input()) === 1) {
          await me.say_and_wait('세이운 스카이... 너에 대해선 알고 있어.');
          await sky.say_and_wait('냐하하, 내 명성이 꽤 대단한 모양이네~');
          await era.printAndWait([
            '손을 머리 뒤로 깍지 낀 ',
            sky.get_colored_name(),
            '는 자신의 유명세에 꽤 자부심을 느끼는 듯했다.',
          ]);
          await me.say_and_wait('앉아서 얘기 좀 하자. 디지털에게 볼일이 있는 거지?');
          await sky.say_and_wait(
            '이런이런, 나는 딱히 동성애자 같은 건 아니라고? 오히려 이성애자 타입에 가깝달까~',
          );
          await era.printAndWait('말을 돌리는 수법. 늘 하던 방식이었다.');
          await me.say_and_wait('......');
          await sky.say_and_wait(
            '정말로 내 진심을 듣고 싶어? 세이짱은 의외로 생각이 아주 순수할지도 모른다고?',
          );
          await era.printAndWait([
            '옆에 있는 ',
            digital.get_colored_name(),
            '을 쳐다보니, ',
            digital.sex,
            '는 여전히 강가에 누워 행복한 상태로 존엄사해 있었다.',
          ]);
          await me.say_and_wait([
            digital.sex,
            '는 아직 너무 순진해. 경기장에서 벌어지는 치열한 기싸움 같은 건 아직 모르지.',
          ]);
          await sky.say_and_wait([
            '맞아. 마치 ',
            sys_get_colored_callname(20, 1),
            '가 한동안 그랬던 것처럼, ',
            sys_get_colored_callname(20, 19),
            '... ',
            digital.sex,
            '에게는 전장에 나설 이유가 부족해.',
          ]);
          await era.printAndWait([
            '전장... 경기장에 나설 이유. ',
            digital.get_colored_name(),
            '은 지금까지 줄곧, ',
            digital.get_uma_sex_title(),
            '를... 그냥 가까운 곳에서 ',
            digital.get_uma_sex_title(),
            '가 달리는 걸 지켜보고 싶어 할 뿐이었다. 적어도 지금까진.',
          ]);
          await me.say_and_wait([
            digital.sex,
            '는 찾아낼 거야. 내가 ',
            digital.sex,
            '와 함께 그 이유를 찾아내겠어.',
          ]);
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 이 말을 뱉기 전까지 ',
            sky.get_colored_name(),
            '는 깊은 눈빛으로 ',
            me.get_colored_name(),
            '을(를) 응시하고 있었다. 그리고 이 말을 듣자마자 ',
            digital.sex,
            '는 웃음을 터뜨렸다.',
          ]);
          await sky.say_and_wait('아하하, 재미있는 대답을 들었네!');
          await era.printAndWait([
            '어쩌면 ',
            me.get_colored_name(),
            '의 대답이 ',
            digital.sex,
            '를 만족시켰을지도 모른다. 아니면 그냥 더 말할 필요가 없다고 느꼈을 수도 있었다.',
          ]);
          await sky.say_and_wait('그럼 내가 방해한 셈인가? 세이짱은 마저 낚시나 해야겠어.');
          await era.printAndWait([
            '내리쬐던 태양은 어느덧 하얗게 타오르다 붉게 변해갔고, 강변 진흙탕가에는 ',
            me.get_colored_name(),
            '과 ',
            digital.get_colored_name(),
            ' 만이 남겨졌다.',
          ]);
          await era.printAndWait('디지털을 데리고 돌아가자...');
          await me.say_and_wait('어떻게 데려가야 할까...', true);
          era.println();
          wait_flag = sys_like_chara(19, 0, 40);
        } else {
          await me.say_and_wait('세이운 스카이, 너랑 더 이야기하고 싶긴 하지만...');
          await me.say_and_wait([
            '디지털이 당분간은 깨어날 것 같지 않네. 시간도 늦었으니 그만 ',
            digital.sex,
            '를 데리고 돌아가야겠어.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '을(를) 바라보더니 하품을 크게 한 번 했다.',
          ]);
          await sky.say_and_wait('당신 말이 맞아. 낚시를 못한 건 좀 아쉽지만 말이야.');
          await era.printAndWait([
            digital.sex,
            '에게 작별 인사를 하고 ',
            digital.get_colored_name(),
            '을 업으려던 찰나, ',
            me.get_colored_name(),
            '의 귓가에 숨결이 느껴졌다...',
          ]);
          await sky.say_and_wait(['이 아이에게서 레이스에 나설 이유를 찾아줘...']);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 눈을 감으며 고맙다는 인사를 대신했다.',
          ]);
          await era.printAndWait([
            { isBr: true },
            digital.get_colored_name(),
            '은 겉보기엔 굉장히 자그마했지만, ',
            me.get_colored_name(),
            '이(가) ',
            digital.sex,
            '를 등에 업고 나서야 깨달았다. ',
            digital.sex,
            '의 무게감은 그 체구보다 훨씬 더 가볍게 느껴졌다.',
          ]);
          await era.printAndWait([
            '부드러운 감촉, 숨결... 살아있구나 하는 실감이 났다. ',
            me.get_colored_name(),
            '의 목덜미를 간지럽히는 숨결이 느껴졌다.',
          ]);
          await era.printAndWait([
            '나중에 정신을 차린 ',
            digital.get_colored_name(),
            '은 ',
            me.get_colored_name(),
            '에게 몇 번이고 사과를 했다.',
          ]);
          era.println();
          wait_flag = sys_love_uma(19, 5);
        }
      }
      wait_flag = sys_like_chara(19, 20, 100) || wait_flag;
      wait_flag = sys_like_chara(20, 19, 100) || wait_flag;
      wait_flag && (await era.waitAnyKey());
      hook.override = true;
      return true;
    } else {
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait([
            '우와앗, 저건... ',
            get_chara_talk(20).get_colored_name(),
            '다. 역시 저쪽으로는 가지 않는 게 좋으려나...',
          ]);
          break;
        case 1:
          await digital.say_and_wait([
            '오오오, 낚였다, 낚였어! 캠핑 중이었다면 바로 구워 먹을 수 있었을 텐데요, ',
            sys_get_callname(19, 0),
            '!',
          ]);
          break;
        case 2:
          await digital.say_and_wait(
            `개의치 마세요! 승패는 병가지상사라 했으니, 다시 도전해 보시는게... 꽝인 날도 가챠에서 안 나오는 확률 같은 거니까요!`,
          );
      }
    }
  }
};