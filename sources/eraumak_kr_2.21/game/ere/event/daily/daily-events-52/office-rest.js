const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    urara = get_chara_talk(52);
  if (!edu_marks.lets_slp && Math.random() < 0.3) {
    edu_marks.lets_slp = 1;
    await print_event_name('자러 가자!', urara);
    await era.printAndWait([
      '트레이닝실에 막 들어서자마자, ',
      me.get_colored_name(),
      '은(는) 지나치게 편안한 자세로 잠든 ',
      urara.get_colored_name(),
      '를 발견했다.',
    ]);
    await era.printAndWait(
      '트레이닝실이 너무 안락했던 탓일까, 아니면 담당 우마무스메가 이미 이곳을 「집」처럼 여기게 된 것일까?',
    );
    await era.printAndWait([
      '벗어둔 옷가지를 옆에 아무렇게나 쌓아둔 채, 전신에 타이트한 핑크색 스포츠 언더웨어만을 걸치고 있었다.',
    ]);
    await era.printAndWait([
      '벚꽃색 머리카락과 꼬리가 몸 아래로 자연스럽게 흩어져 있었고, 작고 귀여운 귀도 긴장을 푼 채 까딱거렸다.',
    ]);
    await era.printAndWait([
      '귀여운 아기 같은 얼굴에는 안도감이 서려 있었고, 깊은 잠결에 자연스레 몸을 쭉 뻗은 작은 ',
      urara.get_uma_sex_title(),
      '의 피부는 조명빛을 받아 건강한 광택을 내뿜었다.',
    ]);
    await era.printAndWait([
      '딱 붙는 속옷이 ',
      urara.get_teen_sex_title(),
      '의 부드러운 몸을 가볍게 파고들었고, 앳된 육감과 성장 중인 곡선은 이제 막 꽃봉오리를 터뜨리려는 듯한 신체 위에서 절묘한 균형을 이루고 있었다.',
    ]);
    if (era.get('talent:52:유방사이즈') > 0) {
      await era.printAndWait([
        '어떤 이유에서인지 과하게 풍만한 가슴은 상체에 남은 최소한의 천 조각을 빈틈없이 채우고 있었으며, 작은 ',
        urara.get_uma_sex_title(),
        '의 몸 위에서 자유롭게 솟아올라 있었다.',
      ]);
    }
    await era.printAndWait([
      '트레이닝실의 소파 베드에 누워, ',
      urara.get_colored_name(),
      '는 이토록 무방비하게 자신의 사랑스러운 몸을 드러내고 있었다.',
    ]);
    await era.printAndWait([
      '이토록 경계심 없는 귀여운 생물을 마주하자, 작은 ',
      urara.get_uma_sex_title(),
      '와 처음 만나 한 침대에서 잠들었을 때와 비슷한 생각이 ',
      me.get_colored_name(),
      '의 머릿속에 떠올랐다.',
    ]);
    await era.printAndWait([
      '이렇게 부드러운 소동물 같은 아이라면, ',
      urara.sex,
      '를 방해하는 게 아니라는 전제하에 가서 쓰다듬어주고 싶다는 생각과 동시에, 담당의 이런 모습은 보는 사람마저 졸음이 쏟아지게 만들었다.',
    ]);
    await era.printAndWait([
      '아직 일이 남아있지만 않다면, ',
      urara.get_colored_name(),
      '와 함께 잠시 눕는 것도 나쁘지 않을 것 같았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이미 어른이고, 설령 ',
      urara.get_colored_name(),
      '가 정말로 허락한다 해도, 역시 이런 제멋대로인 짓을 해서는 안 되겠지만……',
    ]);
    await era.printAndWait('하지만 이렇게 아무런 가림 없는 차림으로 자다가 배라도 차가워지면 큰일이었다.');
    await era.printAndWait([
      '그렇게 생각하며, ',
      me.get_colored_name(),
      '은(는) 옆에 있던 담요를 집어 들고 ',
      urara.get_colored_name(),
      '가 깨지 않도록 조용히 곁으로 다가갔다.',
    ]);
    await urara.say_and_wait(['으응? ', callname, '……?']);
    await era.printAndWait([
      '민감한 귀를 실룩거리며 소리를 포착한 무방비한 ',
      urara.get_teen_sex_title(),
      '는 가늘게 눈을 떴고, 몽롱한 시선으로 ',
      urara.sex,
      '에게 담요를 덮어주려던 ',
      me.get_colored_name(),
      '을(를) 확인했다.',
    ]);
    await era.printAndWait([
      '잠결에 비몽사몽 하던 작은 손이 허공을 더듬더니 이내 ',
      me.get_colored_name(),
      '의 손목을 붙잡았다.',
    ]);
    await era.printAndWait([
      '작은 ',
      urara.get_uma_sex_title(),
      '의 힘 조절 없는 이끌림에, ',
      me.get_colored_name(),
      '은(는) 담요와 함께 그대로 침대 위로 끌려 내려갔다.',
    ]);
    await era.printAndWait([
      '눕는 순간 허리가 단단히 감싸였고, ',
      urara.get_colored_name(),
      '는 자신의 ',
      callname,
      '를 편안한 다키마쿠라처럼 여기고 있었다.',
    ]);
    era.println();
    if (era.get('relation:52:0') > 150 && edu_marks.loop < 2) {
      await urara.say_and_wait(['에헤헤~ ', callname, '의 냄새……']);
      await era.printAndWait([
        '완전히 꿈속에서의 반응인 듯, ',
        urara.get_colored_name(),
        '는 만족스럽게 ',
        me.get_colored_name(),
        '의 몸에 얼굴을 부볐다.',
      ]);
      await era.printAndWait([
        '약한 호흡이 점차 평온해짐에 따라, ',
        me.get_colored_name(),
        '을 꽉 껴안은 ',
        urara.get_teen_sex_title(),
        '는 안심한 듯 깊은 잠에 빠져들었다.',
      ]);
    } else {
      await urara.say_and_wait('으음……? 별로 안 말랑말랑해……');
      await era.printAndWait([
        '안고 있는 대상이 충분히 푹신하지 않은 탓인지, ',
        urara.get_colored_name(),
        '는 잠결에 불만스러운 듯 입술을 삐죽 내밀었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 불친절함에 대해 작게 투덜거리면서도, ',
        urara.get_colored_name(),
        '는 손을 놓을 기색이 전혀 없었다.',
      ]);
    }
    era.println();
    await era.printAndWait([
      '목덜미에 파묻힌 머리카락에서 청량한 향기가 났고, ',
      urara.get_uma_sex_title(),
      ' 특유의 정신을 맑게 해주는 듯한 향긋함이 살을 맞댄 틈을 타 장난스럽게 ',
      me.get_colored_name(),
      '의 콧속으로 스며들었다.',
    ]);
    await era.printAndWait(
      '긴장이 풀리면서 시야가 점차 흐릿해졌고, 두 손은 아직 덮지도 못한 담요조차 놓치기 직전이었다.',
    );
    await era.printAndWait([
      '남은 업무는커녕, 한 번 눕자 졸음이 걷잡을 수 없이 밀려왔다. 하지만 ',
      urara.get_colored_name(),
      '와 함께 자는 것도 나쁜 일은 아니니, 일단 이대로 한숨 자는 것도 괜찮을 것이다.',
    ]);
    await era.printAndWait(
      '다시 깨어났을 때는 업무가 산처럼 쌓여 있겠지만, 지금 이 휴식도 다음을 위한 준비라 생각하기로 했다.',
    );
    await era.printAndWait([
      '스스로를 간신히 설득하며, ',
      me.get_colored_name(),
      '은(는) 잠들기 전 담요를 끌어올려 두 사람의 몸 위로 덮었다. 그리고 ',
      urara.get_colored_name(),
      '와 함께 모처럼의 휴식 시간 속으로 빠져들었다.',
    ]);
    era.drawLine();
    await get_chara_talk(52, chara_colors[52][1]).say_as_unknown_and_wait(
      '정말이지 질투가 날 정도로 부끄러운 줄을 모르네요…… 아니에요, 정말로 같이 끼고 싶다거나 그런 생각 안 했어요……',
    );
    hook.override = true;
    era.println();
    get_attr_and_print_in_event(
      52,
      undefined,
      undefined,
      JSON.parse('{"기력":300}'),
      true,
    ) && (await era.waitAnyKey());
    sys_like_chara(52, 0, 10, true, 5) && (await era.waitAnyKey());
  } else {
    const talk_arr = [
      async () => {
        await urara.say_and_wait([
          callname,
          '! 나 대신 선반 위에 있는 간식 좀 꺼내 줄 수 있어? 응! 고마워, ',
          callname,
          '! 적당히 먹을게!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 「적당히 먹어야 한다」라는 주의를 들은 뒤, ',
          urara.get_colored_name(),
          '는 기쁘게 ',
          me.get_colored_name(),
          '의 손에서 간식 상자를 받아 들었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait([
          '후에에~ 힘들어라…… 아! 고마워, ',
          callname,
          '! 헤헤~ 시원하다!',
        ]);
        await era.printAndWait([
          '수건을 머리 위에 얹고 갓 트레이닝을 마친 ',
          urara.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '이(가) 건넨 스포츠 음료를 받아 들었다.',
        ]);
      },
      async () => {
        await urara.say_and_wait('오늘의 기분도~ 『우라라』 해~');
        await era.printAndWait([
          '자작곡을 흥얼거리며, ',
          urara.get_colored_name(),
          '는 즐거운 듯 실내 화이트보드에 유성펜으로 무언가를 끄적이고 있었다.',
        ]);
      },
    ];
    if (love >= 50) {
      talk_arr.push(async () => {
        await urara.say_and_wait('으응~ 미안해…… 으으…… 우라라, 조금만 더 조용히 할게……');
        await era.printAndWait([
          '단순히 다리 마사지를 받고 있을 뿐인데도, ',
          urara.get_colored_name(),
          '는 끊임없이 얼굴이 붉어질 만한 소리를 내뱉고 있었다……',
        ]);
      });
    }
    if (love >= 75) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '모두의 레이스 영상을 보고 싶은 거야? 응! 그럼 나도 ',
          callname,
          '랑 같이 볼래!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 품속으로 파고들며, ',
          urara.get_colored_name(),
          '는 고분고분하게 ',
          me.get_colored_name(),
          '을(를) 대신해 트레이닝실의 TV를 켰다.',
        ]);
      });
    }
    if (love === 100) {
      talk_arr.push(async () => {
        await urara.say_and_wait([
          '헤헤…… ',
          callname,
          ', 언제까지나, 계속 서로를 기억해야 해……',
        ]);
        await era.printAndWait([
          '숨이 가빠져 잠에서 깨어난 ',
          me.get_colored_name(),
          '은(는) ',
          urara.get_colored_name(),
          '가 자신의 몸 위에 밀착한 채 낮은 목소리로 무언가 속삭이는 것을 발견했다……',
        ]);
      });
    }
    await get_random_entry(talk_arr)();
  }
};