const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const { attr_enum, attr_names } = require('#/data/train-const');

/**
 * @param {HookArg} hook
 * @param {Record<string,*>} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const callname = sys_get_callname(52, 0),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  hook.arg = (await select_action_around_river()) > 0;
  if (hook.arg) {
    let random_range = 2;
    if (love === 100) {
      random_range = 5;
    } else if (love >= 75) {
      random_range = 4;
    } else if (love >= 5) {
      random_range = 3;
    }
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          '오늘 여기 공기, 정말 신선해서 몸이 더 가벼워진 기분이야!',
          callname,
          '! 나 지금 좀 달려봐도 돼?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 담당의 요청을 수락했으나, ',
          urara.get_colored_name(),
          '가 넘어질 가능성을 고려해 ',
          me.get_colored_name(),
          '도 ',
          urara.get_colored_name(),
          '와 함께 가볍게 달리기 시작했다.',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          '이 근처에는 예쁜 벌레들이 아주아주 많아! 내가 몇 마리 잡아서 ',
          callname,
          '한테…… 어라? 안 돼?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 나누고 싶어 하는 담당의 마음은 고마웠지만, 산책 중에 벌레를 잡는 것은 너무나도 ',
          urara.get_colored_name(),
          '다운 스타일이라고 생각했다……',
        ]);
        await era.printAndWait([
          '그렇게 생각하며, ',
          me.get_colored_name(),
          '은(는) 제때 제지당한 담당의 몸에 벌레 기피제를 뿌려주었다.',
        ]);
        break;
      case 2:
        await urara.say_and_wait(
          '사실 다른 애들도 가끔 여기 오곤 해! 역시 누군가와 함께 오는 게 훨씬 더 즐거워!',
        );
        await urara.say_and_wait(
          '신나서 다 같이 강물에 뛰어들면 안 된다구……? 아, 알았어……',
        );
        await era.printAndWait([
          '여전히 엉뚱하긴 하지만, ',
          urara.get_colored_name(),
          '에게 곁에 있어 줄 친구가 있다면 분명 괜찮을 것이다.',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '여기는 사람이 거의 안 오지! ',
          callname,
          '랑 함께 놀아도 방해받지 않아! 정말 좋은 곳이야!',
        ]);
        await urara.say_and_wait([
          '에헤헤~ 그러면 안 되지만, 여기는 우라라와 ',
          callname,
          ' 둘뿐이라구……',
        ]);
        await era.printAndWait([
          '숲의 그림자가 드리워진 가운데, ',
          urara.get_colored_name(),
          '의 살짝 붉어진 뺨이 어쩐지 조금은 아찔하게 느껴졌다……',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          callname,
          '! 조금 더 가까이 와봐…… 에헤헤~ 왠지 강변에서 데이트하는 기분이야! ',
          callname,
          ', 어떻게 생각해?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 대답을 기대하는 듯, ',
          urara.get_colored_name(),
          '의 순수한 미소에 수줍은 홍조가 번졌다.',
        ]);
        break;
      case 5:
        await urara.say_and_wait([
          sys_get_colored_callname(52, 30),
          '의 책에는 주인공들이 강가에서 몰래 만나는 이야기가 잔뜩 있어! 손을 잡은 다음에, 그다음에 일어나는 일은……',
        ]);
        await urara.say_and_wait([
          '헤헤~ 사실 잘 모르는 어려운 일들뿐이지만! 하지만 그런 걸 안 해도 나랑 ',
          callname,
          '는 계속 함께 있을 거니까!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 손을 꽉 쥔 채, ',
          urara.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '을(를) 향해 어른처럼 부드럽게 미소 지었다.',
        ]);
    }
  } else {
    await era.printAndWait([
      '오늘의 야외 활동을 위해, ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '는 낚시 도구를 챙겨 평소 산책할 때 자주 가던 강가로 향했다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 오늘은 밖에서 놀기로 약속하긴 했지만, 사실 ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '와 낚시를 하러 오게 될 줄은 꿈에도 몰랐다.',
    ]);
    await era.printAndWait([
      '옆에서 신나게 라이브 곡을 흥얼거리는 ',
      urara.get_colored_name(),
      '를 관찰하며, ',
      me.get_colored_name(),
      '은(는) 부디 오늘의 ',
      urara.get_colored_name(),
      '가 「작심삼일」이 되지 않기를 마음속으로 빌었다.',
    ]);
    await era.printAndWait([
      '그나저나, 낚시가 ',
      urara.get_colored_name(),
      '의 인내심 훈련에 도움이 될까?',
    ]);
    era.println();

    if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 본능적으로 고민에 빠졌으나, 늘 그렇듯 답을 내리기도 전에 ',
        urara.get_colored_name(),
        '의 목소리에 생각이 끊기고 말았다.',
      ]);
      await urara.say_and_wait([
        '아! ',
        callname,
        ' 이것 봐! 물속의 작은 물고기들이 손을 뻗으면 바로 잡힐 것 같아!',
      ]);
      await era.printAndWait([
        '도구를 내려놓기도 전에 강가에 쪼그려 앉은 ',
        urara.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '에게 흥분한 기색으로 손짓했다.',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 옆에서 최대한 조용히 있으려 노력했으나, 물가에 가까워지자 ',
        urara.sex,
        '의 발걸음은 눈에 띄게 가벼워졌다.',
      ]);
      await urara.say_and_wait([callname, '! 여기, 여기 다 보여!']);
      await era.printAndWait([
        '흥분을 참지 못한 작은 ',
        urara.get_uma_sex_title(),
        '는 물가에 도착하자마자 웃으며 수면 위의 물고기 그림자에 손을 뻗었다.',
      ]);
    }
    era.println();

    era.printButton('「강에 바로 뛰어들어서 물고기를 잡으면 안 된다?」', 1);
    await era.input();

    await urara.say_and_wait('응! 오늘의 우라라는 낚싯대로 제대로 낚시를 할 거야!');
    await era.printAndWait([
      '적어도 뛰어들지 않겠다는 확답은 해줬으면 좋으련만. 그저 「참아 보겠다」는 담당의 대답에 ',
      me.get_colored_name(),
      '은(는) 쓴웃음을 지으며 고개를 저을 뿐이었다.',
    ]);
    await era.printAndWait([
      '준비를 마친 뒤, ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '는 함께 낚싯대를 던졌다. 낚싯바늘이 호선을 그리며 날아갔고, 찌는 수면 위에서 작은 점이 되어 멈췄다.',
    ]);
    await era.printAndWait([
      '그나저나, 낚시가 ',
      urara.get_colored_name(),
      '의 인내심 훈련에 도움이 될까? 낚싯대를 쥔 채 ',
      me.get_colored_name(),
      '은(는) 다시금 본능적으로 고뇌하기 시작했다.',
    ]);
    era.println();
    if ((extra_flag.jpy = get_random_value(0, 5)) > 0) {
      await urara.say_and_wait([callname, '! 우라라가 이번에도 잡았어!']);
      await era.printAndWait([
        '시간이 흐르면서 양동이가 점차 채워졌고, ',
        urara.get_colored_name(),
        '는 마지막 「전리품」을 물속에서 끌어올리고 있었다.',
      ]);
      await era.printAndWait([
        '만약 ',
        urara.get_colored_name(),
        '가 정말로 얌전하게 굴어서, 직접 물속에 들어가 물고기를 맨손으로 잡아 오지만 않았더라면 더 좋았을 텐데.',
      ]);
      await era.printAndWait([
        '반쯤 젖어버린 의복과 ',
        urara.sex,
        '의 품에 안긴 커다란 물고기를 보며 어이가 없으면서도, ',
        me.get_colored_name(),
        '은(는) 늘 그렇듯 차마 꾸짖는 말을 내뱉지 못했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 대단하긴 하지만, 함부로 물에 들어갔다가는 아무리 ',
        urara.get_uma_sex_title(),
        '라 해도 감기에 걸리기 쉽다.',
      ]);
      await era.printAndWait([
        '낚싯대를 접고, ',
        me.get_colored_name(),
        '은(는) 손을 뻗어 작은 ',
        urara.get_uma_sex_title(),
        '의 젖은 머리카락을 닦아주었다. ',
        urara.get_colored_name(),
        '는 대답하려던 찰나 작고 귀엽게 재채기를 했다.',
      ]);
      await era.printAndWait([
        '결국 이렇게 될 줄 알았다니까. 조금 미안해하는 표정의 ',
        urara.get_colored_name(),
        '에게 웃으며 겉옷을 걸쳐준 뒤, ',
        me.get_colored_name(),
        '은(는) 담당과 함께 수확물이 가득 담긴 양동이 두 개를 들고 귀갓길에 올랐다.',
      ]);
      await era.printAndWait([
        '이번에는 감기에 걸릴 뻔한 작은 ',
        urara.get_uma_sex_title(),
        '를 위해 생선탕이라도 끓여줘야겠다.',
      ]);
      const attr_change = new Array(5).fill(0),
        temp = get_random_entry(
          Object.values(attr_enum).filter(
            (e) =>
              era.get(`base:52:${attr_names[e]}`) <
              era.get(`maxbase:52:${attr_names[e]}`),
          ),
        );
      if (temp !== undefined) {
        attr_change[temp] = 5;
        get_attr_and_print_in_event(52, attr_change, 0);
      }
    } else {
      await urara.say_and_wait('헤헤…… 과연…… 잡혔을까나……');
      await era.printAndWait([
        '낚시 도구 상자와 빈 양동이 두 개를 정리한 뒤, ',
        me.get_colored_name(),
        '은(는) 띄엄띄엄 잠꼬대를 하는 담당을 등에 업었다.',
      ]);
      await era.printAndWait([
        '본래 인내심이 부족한 ',
        urara.get_colored_name(),
        '가 수확을 위해 잠들 때까지 기다렸음에도 불구하고, 오늘의 성과는 누가 봐도 의심의 여지 없는 제로였다.',
      ]);
      await era.printAndWait([
        '모처럼 ',
        urara.get_colored_name(),
        '가 진지하게 임했는데 아무것도 얻지 못한 것이 못내 아쉬웠지만, 낚시라는 게 원래 그런 법이라 생각하니 마음에는 약간의 허탈함만이 남았다.',
      ]);
      await era.printAndWait([
        '그나저나 건강검진 표에는 체중이 조금 늘었다고 적혀 있었는데, ',
        urara.get_colored_name(),
        '는 생각보다 정말 가벼웠다.',
      ]);
      await era.printAndWait([
        urara.get_teen_sex_title(),
        '에게는 실례일지도 모르는 생각을 하며, ',
        me.get_colored_name(),
        '은(는) 곤히 잠든 작은 ',
        urara.get_colored_name(),
        '를 업고 오던 길을 되짚어 걸어갔다.',
      ]);
      await era.printAndWait([
        '과연 ',
        urara.get_colored_name(),
        '는 꿈속에서 물고기를 몇 마리나 낚고 있을까……',
      ]);
    }
  }
};