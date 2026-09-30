const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const print_ero_page = require('#/page/page-ero');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = handlers[95 + 29] = async (
    kitaru,
    me,
    callname,
    flags,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:56:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name(
      `여름 합숙 ${era.get('cflag:56:육성턴수합산') < 96 ? '(클래식 시즌)': '(시니어 시즌)'}`,
      kitaru,
    );
    await era.printAndWait([
      '무더운 여름날, ',
      kitaru.get_colored_name(),
      '와 함께 여름 합숙 장소로 향하는 고속버스에 올랐다.',
    ]);
    await era.printAndWait([
      '목덜미에 귀의 섬세하고 기분 좋은 온기가 전해졌다. ',
      kitaru.get_colored_name(),
      '는 피곤한 듯 ',
      me.get_colored_name(),
      '의 어깨에 기대어 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '의 다음 훈련 계획을 고민하기 시작했다.',
    ]);
  };

  handlers[47 + 32] = async (
    kitaru,
    me,
    callname,
    flags,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:56:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('속세로 떨어진 별', kitaru);
    await era.printAndWait([
      '오늘은 ',
      me.get_colored_name(),
      '이(가) ',
      kitaru.get_colored_name(),
      '와 함께 외출하기로 약속한 날이었다.',
    ]);
    await era.printAndWait([
      '배를 타고 이곳에 도착한 직후부터 ',
      kitaru.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 이끌고 그리 크지 않은 이 섬의 이곳저곳을 마구 돌아다녔다.',
    ]);
    await era.printAndWait([
      '국화상을 목표로 하는 ',
      kitaru.sex,
      '답게 스태미나는 부족함이 없었으나, 불과 몇 시간 만에 ',
      me.get_colored_name(),
      '은(는) 녹초가 되고 말았다.',
    ]);
    await era.printAndWait('어느덧 황혼이 저물었고, 이제 돌아가야 할 시간이었다.');
    await era.printAndWait('하지만……');
    await kitaru.say_and_wait([callname, '! 이쪽이에요, 이쪽!']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 오히려 더욱 의욕이 넘쳐 보였다.',
    ]);
    await era.printAndWait([
      '평소의 ',
      kitaru.get_colored_name(),
      '가 활달하긴 했지만, 도착했을 때부터 지금까지 이토록 높은 텐션을 유지하는 것은 꽤나 드문 일이었다.',
    ]);
    era.printButton('「자, 이제 슬슬 뭘 하고 싶은지 말해줄래?」', 1);
    await era.input();
    await kitaru.say_and_wait(['에헤헤! 역시 ', callname, '이세요!']);
    await kitaru.say_and_wait('단번에 알아보셨네요!');
    await kitaru.say_and_wait('저기! 오늘 밤에 유성우가 내린대요!');
    await kitaru.say_and_wait([callname, '과 함께 보고 싶어요!']);
    era.printButton('「그냥 솔직하게 말하지 그랬어?」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '우우…… 만약 ',
      callname,
      '께 거절당했다면, 전 오늘 하루 종일 대흉이었을 거예요!',
    ]);
    era.drawLine({ content: '무인도에서 몇 시간 후'});
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 간단히 피워둔 모닥불이 타닥타닥 소리를 냈다.',
    ]);
    await kitaru.say_and_wait(['오오오! ', callname, ', 빨리 보세요! 유성우가 오고 있어요!']);
    await kitaru.say_and_wait(
      '듣기로는 제가 아직 엄마 배 속에 있었을 때, 아빠랑 엄마도 여기서 유성우를 보셨대요!',
    );
    await kitaru.say_and_wait('그러니까! 오늘의 저는 마치카네 후쿠키타루가 아니라! 마치카네 호시키타루예요!');
    await kitaru.say_and_wait('앗, 맞다. 유성우를 볼 때 같이 해야 하는 의식 같은 게 있을까요?');
    era.printButton('「달리기」', 1);
    era.printButton('「소원 빌기」', 2);
    const ret = await era.input();
    let attr_change = new Array(5).fill(0),
      pt_change = 0;
    if (ret === 1) {
      await kitaru.say_and_wait('과연 그렇군요!');
      await kitaru.say_and_wait('그걸로 별의 힘을 얻게 될지도 몰라요.');
      await era.printAndWait([
        kitaru.sex,
        '는 신발과 양말을 벗어 던지고 달리기 시작했다. 하얀 맨발이 물보라를 일으켰고, 뒤이어 격렬하게 흔들리는 꼬리가 그 위를 스치며 튀어 오른 물방울 몇 개가 ',
        me.get_colored_name(),
        '의 바짓가랑이에 떨어졌다.',
      ]);
      attr_change[0] += 25;
    } else {
      await kitaru.say_and_wait('소원이요?');
      await kitaru.say_and_wait('음…… 알겠어요!');
      await kitaru.say_and_wait('딱히 특별한 소원이 있는 건 아니지만요.');
      await era.printAndWait([kitaru.sex, '는 두 눈을 감고 두 손을 모았다.']);
      await era.printAndWait([
        '오렌지색 머리카락의 ',
        kitaru.get_teen_sex_title(),
        '는 모닥불 빛을 받아, 마치 성당 스테인드글라스 속에서 성령의 보살핌을 받는 수녀처럼 성스럽게 보였다.',
      ]);
      pt_change = 20;
    }
    if (era.get('love:56') >= 49) {
      era.drawLine({ content: '잠시 후'});
      if (ret === 1) {
        await era.printAndWait([
          '달리기를 마친 후, 힘이 빠진 ',
          kitaru.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '의 품에 쓰러지듯 안겼다. ',
          kitaru.sex,
          '가 입고 있던 셔츠는 방금 전의 의식으로 흠뻑 젖어 있었고, 그 아래로 격렬한 운동 탓에 붉게 달아오른 가슴이 살짝 비쳤다.',
        ]);
        await era.printAndWait([
          kitaru.sex,
          '가 감기라도 들까 걱정된 ',
          me.get_colored_name(),
          '은(는) 자신의 겉옷을 벗어 ',
          kitaru.sex,
          '의 몸에 덮어주었다.',
        ]);
        await kitaru.say_and_wait(['에헤헤, ', callname, '의 냄새네요.']);
        await era.printAndWait([
          kitaru.sex,
          '는 ',
          me.get_colored_name(),
          '의 가슴팍에 얼굴을 부볐고, ',
          me.get_colored_name(),
          '은(는) ',
          kitaru.sex,
          '의 헝클어진 머리카락이 가슴을 스치는 감촉을 느꼈다.',
        ]);
      } else {
        await era.printAndWait([
          '기도를 마친 수녀가 ',
          me.get_colored_name(),
          '의 품에 기대어 누웠다. ',
          me.get_colored_name(),
          '은(는) ',
          kitaru.sex,
          '의 헝클어진 머리카락이 가슴을 스치는 감촉을 느꼈다.',
        ]);
        await era.printAndWait([
          '그리고 ',
          kitaru.sex,
          '의 가슴에 있는 부드러운 쌍봉이 가끔 ',
          me.get_colored_name(),
          '을(를) 압박해오는 감각이 느껴졌다. ',
          kitaru.sex,
          ' 본인은 지금의 자신이 얼마나 유혹적인지 전혀 자각하지 못하는 듯했다.',
        ]);
      }
      await kitaru.say_and_wait('저기, 오늘 소원이 하나 더 있어요.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '의 얼굴이 살짝 붉어진 것을 보았다. 오늘 활동이 너무 흥분되었기 때문일까.',
      ]);
      await kitaru.say_and_wait('저……');
      era.printButton('「읍!」', 1);
      await era.input();
      await era.printAndWait([
        '하루 종일 돌아다니느라 지쳐있던 ',
        me.get_colored_name(),
        '은(는) 반응할 틈도 없었다.',
      ]);
      await me.say_and_wait('윽……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 부드러운 입술이 ',
        me.get_colored_name(),
        '의 입술과 겹쳐졌다.',
      ]);
      begin_and_init_ero(0, 56);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '입술 사이로 흘러나오는 숨결과 타액에는 ',
        kitaru.sex,
        '의 열기와 맛이 담겨 있었다.',
      ]);
      await kitaru.say_and_wait('하아……');
      await kitaru.say_and_wait([callname, '이랑, 키스, 해버렸네요!']);
      await kitaru.say_and_wait('후우……');
      await era.printAndWait([
        '행위가 끝난 후, ',
        kitaru.sex,
        '의 뜨거운 숨결이 ',
        me.get_colored_name(),
        '의 귓가를 간지럽혔다.',
      ]);
      if (era.get('love:56') > 49 || era.get('exp:56:성교횟수') > 0) {
        await era.printAndWait(['이 기세를 몰아 다음 단계로 넘어갈까?']);
        era.printButton('마치카네 후쿠키타루를 덮친다', 1);
        era.printButton('그만둔다', 2);
        if ((await era.input()) === 1) {
          await print_ero_page(56, true);
          await end_ero_and_show_result();
        } else {
          attr_change = attr_change.map((e) => e + 1);
        }
      }
      if (era.get('tcvar:0:0') !== undefined) {
        end_ero_and_train();
      }
    }
    flags.wait_flag = get_attr_and_print_in_event(56, attr_change, pt_change);
  };

  handlers[47 + 39] = async (kitaru, me, callname, flags) => {
    await print_event_name('두 세계의 사이', kitaru);
    await era.printAndWait([
      '국화상까지 이제 단 일주일 남았다. ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '가 요즘 부쩍 광적으로 변해가고 있음을 느꼈다.',
    ]);
    await era.printAndWait([
      '평소의 훈련 항목도 진지하게 임해오긴 했지만, 지금의 ',
      kitaru.sex,
      '는 마치 너무 팽팽하게 당겨진 활시위 같았다.',
    ]);
    await era.printAndWait([
      '레이스 전의 오버 트레이닝은 대흉이나 다름없기에, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '에게 이틀간의 휴가를 주기로 결정했다.',
    ]);
    await kitaru.say_and_wait('하지만 하지만! 국화상이 바로 코앞이라구요!');
    await kitaru.say_and_wait(['으음, 그럼 ', callname, ', 같이 나가서 바람 좀 쐬어주세요.']);
    await kitaru.say_and_wait([
      '마침 ',
      callname,
      '과 꼭 가보고 싶었던 곳도 있었거든요.',
    ]);
    era.drawLine({ content: '시외 묘지 깊숙한 곳으로 통하는 오솔길'});
    await era.printAndWait('버스를 타고 교외의 공동묘지에 도착했다.');
    await era.printAndWait([
      '묘지 깊은 곳으로 들어갈수록, 늘 쾌활하던 ',
      kitaru.get_colored_name(),
      '도 점차 차분해지며 주위 환경처럼 엄숙한 분위기를 풍겼다.',
    ]);
    await kitaru.say_and_wait('다 왔어요. 여기예요.');
    await era.printAndWait('측백나무 아래, 그리 작지 않은 묘비 앞에 마치카네 후쿠키타루가 걸음을 멈췄다.');
    await era.printAndWait([
      '그곳의 흑백 사진 속 ',
      kitaru.get_uma_sex_title(),
      '는 ',
      kitaru.get_colored_name(),
      '와 꽤나 닮았지만, 훨씬 어른스러워 보이는 긴 머리를 하고 있었다.',
    ]);
    await kitaru.say_and_wait([
      '음…… 저의 ',
      kitaru.get_bigger_sibling_sex_title(),
      '에요.',
    ]);
    await kitaru.say_and_wait(
      '그전까지는 계속 오고 싶지 않았어요. 엄마가 가자고 해도 어떻게든 거절했었고요.',
    );
    await kitaru.say_and_wait('지금 생각해보면 무의식적으로 무서워했던 것 같아요.');
    await era.printAndWait([kitaru.sex, '는 혼잣말하듯 중얼거렸다.']);
    era.printButton('「혼자만의 시간이 필요해?」', 1);
    await era.input();
    await kitaru.say_and_wait('앗!');
    await kitaru.say_and_wait('아니요! 괜찮아요!');
    await kitaru.say_and_wait([callname, '이 곁에 있어 주시면 돼요!']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 목소리가 아주 미세하게 떨리고 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '의 양손이 꽉 쥐어져, 손톱이 손바닥을 파고들 정도라는 것을 보았다.',
    ]);
    await era.printAndWait(['잠시 후, ', kitaru.sex, '는 천천히 앞으로 다가갔다.']);
    await kitaru.say_and_wait([
      '저기, ',
      kitaru.get_bigger_sibling_sex_title(),
      '. 내 ',
      callname,
      '을 데리고 왔어……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '가 묘비를 향해 속삭이는 것을 들었다. 아주 정중한 말투는 아니었지만, 오히려 ',
      kitaru.sex,
      '의 ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 아직 살아있기라도 한 듯 편안한 어조였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) 어떻게 만났는지부터 일본 더비, 그리고 고베 신문배 우승까지. ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '가 세상을 떠난 ',
      kitaru.get_bigger_sibling_sex_title(),
      '에게 ',
      me.get_colored_name(),
      '과(와) ',
      kitaru.sex,
      '의 추억을 이야기하는 것을 가만히 지켜보았다.',
    ]);
    era.drawLine({ content: '잠시 후'});
    await kitaru.say_and_wait('다음 주면 드디어 국화상이네요!');
    await kitaru.say_and_wait('정말이지, 모든 걸 온전하게 기억해 내는 데 꽤 오랜 시간이 걸렸어요……');
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      ', 우리가 약속했던 것처럼 반드시 승리를 쟁취할게!',
    ]);
    flags.wait_flag = get_skills_and_print_in_event(56, [200841]);
    flags.wait_flag =
      get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0) || flags.wait_flag;
  };

  handlers[47 + 41] = async (kitaru, me, callname, flags) => {
    const suzuka = get_chara_talk(2);
    await print_event_name('신화', kitaru);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      kitaru.get_colored_name(),
      '는 함께 집무실에서 국화상 이후 오랜만에 찾아온 꿀맛 같은 휴식 시간을 즐기고 있었다.',
    ]);
    await era.printAndWait('국화상이 끝나자 팽팽하던 긴장감도 드디어 풀린 듯했다.');
    await kitaru.say_and_wait([callname, ', 다음 레이스는 어디로 할까요?']);
    era.printButton('「후쿠짱은 어디 뛰고 싶은 곳 있어?」', 1);
    await era.input();
    await kitaru.say_and_wait('으음……');
    await era.printAndWait([
      kitaru.get_bigger_sibling_sex_title(),
      '의 그림자에서 벗어나 국화상을 달리고 싶다는 염원도 이루었으나, 지금의 ',
      kitaru.get_colored_name(),
      '는 어딘가 모르게 조금 방황하는 듯 보였다.',
    ]);
    await era.printAndWait([
      '소파에 늘어져 있던 ',
      kitaru.get_colored_name(),
      '가 몸을 비틀며 일어났다.',
    ]);
    await era.printAndWait([
      '집무실 소파 위에서 ',
      kitaru.get_uma_sex_title(),
      ' 특유의 뛰어난 균형 감각으로 서성거리며, 하얀 스타킹에 감싸인 앙증맞은 두 발로 소파 위를 번갈아 밟았다.',
    ]);
    if (era.get('cflag:2:모집상태') === 1) {
      await era.printAndWait('턱을 괴고 빙글빙글 도는 모습이 보였다.');
      await era.printAndWait([
        '고민할 때의 그 독특한 동작은 ',
        me.get_colored_name(),
        '로 하여금 자신의 또 다른 담당인 ',
        suzuka.get_colored_name(),
        '를 떠올리게 했다.',
      ]);
    }
    await kitaru.say_and_wait('딱히 꼬집어 말하자면, 특별히 나가고 싶은 레이스는 없는 것 같아요.');
    await kitaru.say_and_wait('그냥 이 기세로 재팬 컵이랑 아리마 기념을 다 따버릴까요?');
    era.printButton('「그건 너무 무리 아냐?」', 1);
    await era.input();
    await kitaru.say_and_wait(['그럼 ', callname, '이 시키는 대로 할까요?']);
    await era.printAndWait([
      '그녀는 아주 담담하게 대답했다. 마치 레이스가 ',
      kitaru.sex,
      '와는 아무 상관 없는 일인 것처럼.',
    ]);
    await kitaru.say_and_wait('하암……');
    await era.printAndWait([
      '하품을 내뱉은 ',
      kitaru.get_colored_name(),
      '라는 이름의 ',
      kitaru.get_uma_sex_title(),
      '는 그대로 집무실 중앙에 산처럼 쌓인 행운 아이템 더미 위로 쓰러지듯 누웠다.',
    ]);
    await era.printAndWait('와르르!');
    await era.printAndWait([
      '내용물을 알 수 없는 종이 상자 몇 개가 누워버린 ',
      kitaru.get_colored_name(),
      '의 몸에 밀려 옆으로 굴러갔다.',
    ]);
    await era.printAndWait([
      '레이스 후에 직접 사 온 잡동사니 더미 속에서 편안한 자세를 잡은 후, ',
      kitaru.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await kitaru.say_and_wait('운세가 최고조에 달한 저라면, 반드시 당신에게 승리를 바칠 수 있을 거예요!');
    await kitaru.say_and_wait('어서 지시를 내려주세요! 저에게 행운을 가져다주는 운명의 사람!');
    await era.printAndWait([
      '설령 그것이 불길 속이라 할지라도, ',
      kitaru.get_colored_name(),
      '는 ',
      kitaru.sex,
      '의 최강 행운 아이템인 ',
      me.get_colored_name(),
      '이(가) 대길을 점쳐준 지시라면 망설임 없이 뛰어들 것만 같았다.',
    ]);
    era.printButton('「내년의…… 킨코상?」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '내년 봄에요? ',
      callname,
      ', 아주 먼 미래의 레이스를 고르셨네요.',
    ]);
    await era.printAndWait([
      '행운 아이템 위에 누운 ',
      kitaru.get_teen_sex_title(),
      '는 나른한 목소리로 ',
      me.get_colored_name(),
      '에게 대답하더니, 이내 쌕쌕거리는 숨소리를 내며 잠에 빠져들었다.',
    ]);
    await era.printAndWait([
      '확실히 먼 훗날의 레이스였지만, 올해 유독 일정이 빽빽했던 ',
      kitaru.get_colored_name(),
      '에게는 충분한 휴식 후에 다시 시작하는 것이 필요했다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[95 + 1] = async (kitaru, me, callname, flags) => {
    era.set('cflag:56:축제이벤트표시', 0);
    await print_event_name('카구라', kitaru);
    await era.printAndWait([
      '작년과는 달리, 올해의 ',
      me.get_colored_name(),
      '은(는) 미리 ',
      kitaru.get_colored_name(),
      '의 초대를 받아 ',
      kitaru.sex,
      '의 집인 신사로 향했다.',
    ]);
    await era.printAndWait([
      '아직 신사에는 참배객이 그리 많지 않았다. ',
      me.get_colored_name(),
      '은(는) 석조 계단을 밟으며 다시 한번 주홍빛 토리이를 통과했다.',
    ]);
    await era.printAndWait([
      '그리고 지난번처럼, 멀리서부터 가까이로 다가온 순백의 빛이 ',
      me.get_colored_name(),
      '의 세상을 뒤덮었다.',
    ]);
    era.drawLine({ content: '???'});
    era.printButton('눈을 뜬다', 1);
    await era.input();
    await era.printAndWait([
      '주위에는 아무것도 없었고, 부드러운 백색 광선이 마치 검사하듯 여러 각도에서 ',
      me.get_colored_name(),
      '의 몸을 비추고 있었다.',
    ]);
    era.printButton('고개를 든다', 1);
    await era.input();
    await era.printAndWait('칠흑 같은 역피라미드가 허공에 덩그러니 떠 있었다.');
    era.println();
    if (check_aim_race(RaceHistory.get(56).get(), race_enum.kiku_sho, 1, 1)) {
      await typing(
        '매우 훌륭함 / 기대치 유지. '+ kitaru.sex + '의 협력자 / 반려가 될 자격 / 능력이 있음',
      );
      era.println();
      await typing('그대의 뜻 / 소원은 무엇인가?');
    } else {
      await typing('기대치 이하 / 반응 미달. 협력자 / 반려로서 예상 밖');
      era.println();
      await typing('매개변수 / 선택 사항의 최적화 / 교체가 필요함');
    }
    era.println();
    era.printButton('고양된 분위기 (모든 능력치 +7)', 1);
    era.printButton('고동치는 기운 (파워 +30)', 2);
    era.printButton('미세한 균열 (스킬 포인트 +30)', 3);
    let attr_change = new Array(5).fill(0),
      pt_change = 0;
    switch (await era.input()) {
      case 1:
        await kitaru.print_and_wait('군중의 환호……');
        attr_change = attr_change.fill(7);
        break;
      case 2:
        await kitaru.print_and_wait('힘의 분출, 정신적 고양……');
        attr_change[2] = 30;
        break;
      case 3:
        await kitaru.print_and_wait('구름의 갈라짐——벽의 삐걱임——옛 상처의 통증……');
        pt_change = 30;
    }
    if (era.get('love:56') < 49 || me.sex_code === 0 || kitaru.sex_code === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 정신을 차렸을 때, ',
        me.get_colored_name(),
        '은(는) 이미 트레센으로 돌아가는 막차에 몸을 싣고 있었다.',
      ]);
      return;
    }
    await kitaru.say_and_wait('저기요……');
    await kitaru.say_and_wait('저기요……');
    await kitaru.say_and_wait([callname, '!']);
    era.printButton('눈을 뜬다', 1);
    await era.input();
    await kitaru.say_and_wait('어떻게 토리이에 기대서 잠들 수가 있어요?');
    await kitaru.say_and_wait('감기 걸리면 어쩌려구요!');
    era.printButton('고개를 든다', 1);
    await era.input();
    await era.printAndWait([
      '무녀복을 입은 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 손을 잡아끌었다. 싱긋 웃는 그녀의 오렌지색 머리카락 사이로 석양빛이 춤추고 있었다.',
    ]);
    await era.printAndWait([
      '올해는 따뜻한 겨울인 데다, ',
      kitaru.get_uma_sex_title(),
      '의 높은 체온 때문인지 이 무녀복은 ',
      kitaru.sex,
      '에게 조금 덥게 느껴질지도 몰랐다.',
    ]);
    await era.printAndWait([
      '순백의 무녀 상의와 선명한 붉은색 하카마, 그리고 하얀 스타킹이 ',
      kitaru.sex,
      '의 부드러운 다리 라인을 그려내고 있었다.',
    ]);
    await era.printAndWait(
      '분리된 형태의 널찍한 소매가 바람에 나부낄 때마다, 노출된 겨드랑이와 하얀 가슴 옆부분이 살짝살짝 보였다.',
    );
    await era.printAndWait([
      '옷감을 밀어 올려 자그마한 언덕을 이룬 가슴은 ',
      kitaru.sex,
      '가 ',
      me.get_colored_name(),
      '의 팔을 흔들 때마다 마음껏 흔들거렸다.',
    ]);
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      '의 활기와 전통 의상이 주는 장엄함이, ',
      kitaru.get_colored_name(),
      '라는 이름의 ',
      kitaru.get_uma_sex_title(),
      ' 안에서 완벽하게 조화를 이루고 있었다.',
    ]);
    era.printButton('「아름다워……」', 1);
    await era.input();
    await kitaru.say_and_wait('앗!');
    await kitaru.say_and_wait(['므흐흐! ', callname, ', 제 모습에 반하셨나요?']);
    await kitaru.say_and_wait('이건 제 운명의 사람을 위해 특별히 고른 옷이라구요!');
    await kitaru.say_and_wait('그럼, 오늘 밤 제 카구라를 기대해 주세요!');
    era.drawLine({ content: '마치카네 후쿠키타루네 신사 대전 앞'});
    await era.printAndWait([
      '올 한 해 ',
      kitaru.get_colored_name(),
      '의 눈부신 활약 덕분에, 새해를 맞이한 신사의 참배객 수는 눈에 띄게 늘어났다.',
    ]);
    await era.printAndWait(
      '십수 년 전의 사고 이후 사람들의 기억 속에서 잊혀 가던 신사가 다시금 생기를 되찾고 있었다.',
    );
    await era.printAndWait(
      '웅성거리던 사람들의 소음이 최고조에 달했다가, 이내 썰물처럼 천천히 잦아들었다.',
    );
    await era.printAndWait(
      '모든 소리가 멈춘 고요한 틈을 타, 기다렸다는 듯 저 멀리서 큰북 소리가 울려 퍼지며 카구라의 시작을 알렸다.',
    );
    await era.printAndWait('악기들의 합주가 절묘하게 어우러졌다.');
    await era.printAndWait('큰북의 울림은 칸사이 대장부의 포효처럼 가슴을 뛰게 했다.');
    await era.printAndWait(
      '샤미센 소리는 동쪽 산 위로 떠오른 달처럼 경쾌하게 공중을 맴돌았다.',
    );
    await era.printAndWait(
      '무녀가 흔드는 카구라 방울 소리는 그 사이를 수놓으며 맑고 영롱하게 울려 퍼졌다.',
    );
    await era.printAndWait([
      '그 소리 속에서, 신전의 정중앙에 선 이는 바로 ',
      kitaru.get_colored_name(),
      '. ',
      me.get_colored_name(),
      '의 담당 ',
      kitaru.get_colored_name(),
      '였다.',
    ]);
    await era.printAndWait([
      '선율에 맞춰 ',
      kitaru.sex,
      '는 장엄하고 서늘한 공간 속을 나비처럼 날아다녔고, 하늘에서 쏟아지는 달빛이 ',
      kitaru.get_colored_name(),
      '의 맑고 단아한 화장을 한 얼굴을 비추었다.',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '는 카구라 방울을 휘두르며 신을 초대해 ',
      kitaru.sex,
      '와 함께 춤을 추었다.',
    ]);
    await era.printAndWait(
      '곡이 끝나자, 무대 위의 현인신은 정중앙에 서서 사방의 민중들에게 고개 숙여 인사했다.',
    );
    era.drawLine({ content: '잠시 후'});
    await kitaru.say_and_wait('후우…… 드디어 끝났네요!');
    await kitaru.say_and_wait(['오늘 도와주셔서 정말 감사했습니다. ', callname, '!']);
    await era.printAndWait([
      '지난번과 마찬가지로, ',
      me.get_colored_name(),
      '들은 신사가 다시 본래의 적막함을 되찾을 때까지 새벽녘까지 바쁘게 움직였다.',
    ]);
    await era.printAndWait([
      '하지만 지난번과는 달랐다…… 조금 지친 기색의 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 어깨에 머리를 기대고 있었다.',
    ]);
    await era.printAndWait([
      '역시 옷감이 조금 두꺼웠던 탓인지, ',
      kitaru.get_colored_name(),
      '의 하얀 피부 위로 땀방울이 송골송골 맺혔고, 살짝 벌어진 입술에선 뜨거운 숨결이 새어 나왔다.',
    ]);
    await era.printAndWait([
      '무녀복은 ',
      kitaru.sex,
      '의 고운 몸매 라인을 그대로 드러냈고, 노출된 가슴 옆선은 조금 전의 격렬한 움직임 탓에 붉게 상기되어 호흡에 따라 위아래로 움직였다. 마치 ',
      me.get_colored_name(),
      '에게 손을 뻗어 만져보라고 유혹하는 것만 같았다.',
    ]);
    era.printButton('참는다', 1);
    era.printButton('마치카네 후쿠키타루의 허리를 감싸 안는다', 2, {
      disabled: era.get('love:56') < 75,
    });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '자신의 욕망을 억누르고 ',
        kitaru.get_colored_name(),
        '에게 작별 인사를 한 뒤, ',
        me.get_colored_name(),
        '은(는) 트레센으로 향하는 전차에 올랐다.',
      ]);
      sys_like_chara(56, 0, 5);
      sys_love_uma(56, 3);
    } else {
      begin_and_init_ero(0, 56);
      await kitaru.say_and_wait(['에! 엣! ', callname, '……응……']);
      await era.printAndWait([
        '몸을 숙여 고개를 내리고 ',
        kitaru.sex,
        '의 입술을 빼앗았다. ',
        kitaru.get_colored_name(),
        '의 목구멍에서 새어 나오는 가냘픈 신음이 들려왔다.',
      ]);
      await kitaru.say_and_wait('읍…… 으읍……');
      await kitaru.say_and_wait('푸하……');
      await era.printAndWait([
        '혀와 입술이 서로 얽히고, ',
        me.get_colored_name(),
        '의 품에 안긴 ',
        kitaru.get_colored_name(),
        '는 괴로운 듯 몸을 뒤척였다. ',
        kitaru.sex,
        '의 입가에서 약간의 타액이 흘러나와 신사의 돌바닥 위로 떨어졌다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(56, part_enum.mouth),
        false,
      );
      await era.printAndWait([
        '조금 전까지 사람들에게 축문을 올리던 ',
        kitaru.sex,
        '의 입안으로 탐욕스럽게 혀를 집어넣자, ',
        me.get_colored_name(),
        '을(를) 맞이한 것은 ',
        kitaru.sex,
        '의 서툰 응답이었다.',
      ]);
      await kitaru.say_and_wait('응앗……');
      await era.printAndWait('품에 안긴 담당이 음란한 소리를 냈다.');
      await era.printAndWait([
        '왼손이 ',
        kitaru.sex,
        '의 무녀복 안으로 파고들어, ',
        kitaru.sex,
        '의 가슴 가장자리를 가볍게 움켜쥐며 애무했다.',
      ]);
      await era.printAndWait([
        '이어 가슴 전체를 감싸 쥐자, 작은 가슴의 살집이 ',
        me.get_colored_name(),
        '의 손길에 따라 여러 모양으로 변하는 것이 느껴졌다.',
      ]);
      await kitaru.say_and_wait('하…… 하읏! ');
      await era.printAndWait([
        '손가락 끝으로 부드러운 유륜 주위를 원을 그리듯 덧그리다 가끔 끝부분을 튕기자, ',
        kitaru.get_colored_name(),
        '는 그에 맞춰 귀여운 교성을 질렀다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.breast),
        false,
      );
      await kitaru.say_and_wait('아읏! ');
      await era.printAndWait([
        '혀놀림이 계속되는 동안 오른손은 ',
        kitaru.sex,
        '의 허벅지를 타고 올라갔다. 손가락 끝이 스타킹의 옷감을 문지르자 나직한 마찰음이 들려왔다.',
      ]);
      await era.printAndWait([
        '한 걸음씩 ',
        kitaru.sex,
        '의 허벅지를 훑으며, 손은 따뜻한 치맛자락 아래로 파고들었다.',
      ]);
      await era.printAndWait([
        '듬뿍 젖어 있다는 것을 ',
        me.get_colored_name(),
        '은(는) 느낄 수 있었다.',
      ]);
      await era.printAndWait([
        '애액으로 젖어 속옷 위로 드러난 치구의 형태를 훑자, ',
        kitaru.get_colored_name(),
        '는 더욱 음탕한 소리를 내뱉었다.',
      ]);
      await era.printAndWait([
        '신사 돌바닥 한복판에서 이런 짓을 하고 있다는 배덕감이 주는 자극에 ',
        me.get_colored_name(),
        '의 욕망은 더욱 고조되었다.',
      ]);
      await kitaru.say_and_wait('아, 안 돼요…… 여기서 하는 건……');
      await era.printAndWait([
        '단지 ',
        kitaru.get_teen_sex_title(),
        '의 거절하는 척하는 유혹일 뿐이었다. ',
        kitaru.get_colored_name(),
        '는 마음 내키지 않는다는 듯 말하면서도, 가지런히 모았던 두 다리를 살짝 벌려 ',
        me.get_colored_name(),
        '의 손이 더 깊숙이 들어오도록 허락했다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(
          56,
          kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
        ),
        false,
      );
      await era.printAndWait(
        '손가락이 삽입되자 질벽이 스스로 조여들었고, 손가락이 질 안에서 움직일 때마다 끈적한 소리가 울려 퍼졌다.',
      );
      await kitaru.say_and_wait('으읏! ');
      await era.printAndWait([
        '강렬한 자극에 ',
        kitaru.get_colored_name(),
        '는 가쁘게 숨을 몰아쉬며, ',
        me.get_colored_name(),
        '의 팔을 두 다리로 꽉 조인 채 전기에 감전된 듯 몸을 떨었다.',
      ]);
      await kitaru.say_and_wait(['아아앗, ', callname, '! ']);
      era.printButton('「그렇게 기분 좋아?」', 1);
      await era.input();
      era.set('palam:56:질구쾌감', era.get('tcvar:56:질구쾌감상한'));
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await kitaru.say_and_wait('모, 모르겠어요…… 응아, 하아……');
      await era.printAndWait(
        '음액이 흘러나와 허벅지 뿌리를 타고 흘러내리며, 흰색 니삭스 위에 음란한 문양을 그려냈다.',
      );
      await kitaru.say_and_wait(['아, 으응, 야응, ', callname, '! ']);
      await kitaru.say_and_wait('와요, 온다구요! ');
      await kitaru.say_and_wait(['가버려요오! ', me.get_colored_actual_name(), '! ']);
      await era.printAndWait(
        '경련하듯 몸을 젖힌 후, 쏟아져 나온 애액은 속옷의 방어막을 뚫고 흘러넘쳐 신사 돌바닥 위에 선명한 물자국을 남겼다.',
      );
      era.printButton('「계속할까?」', 1);
      await era.input();
      await kitaru.say_and_wait('에…… 네! ');
      await era.printAndWait('이제 다음 단계로 나아갈 때였다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '를 길가에 있는 굵은 금줄이 처진 고목에 밀어붙였다. 그 과정 중에도 ',
        kitaru.sex,
        '를 향한 애무를 멈추지 않았기에, 돌바닥 중앙부터 나무 앞까지 물자국이 띄엄띄엄 이어졌다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 매끈한 허벅지를 반으로 접듯 들어 올리고, 이미 흠뻑 젖은 틈새에 성기를 갖다 대고 단숨에 밀어 넣었다.',
      ]);
      era.set('status:56:경구피임약', 1);
      era.set('palam:0:음경쾌감', era.get('tcvar:0:음경쾌감상한'));
      era.set('palam:56:질구쾌감', era.get('tcvar:56:질구쾌감상한'));
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(56, part_enum.virgin),
        false,
      );
      await kitaru.say_and_wait('햐아앗! ');
      await era.printAndWait('무녀의 신음소리가 인적 없는 신사 안에 또렷하게 울려 퍼졌다.');
      await era.printAndWait([
        '피스톤질이 반복될 때마다 ',
        kitaru.get_colored_name(),
        '의 몸이 위아래로 흔들렸다. 넓은 소매가 팔의 움직임에 따라 나부끼는 모습은 흡사 방금 전 보았던 카구라의 춤사위 같았다.',
      ]);
      await era.printAndWait([
        '이내 쾌락을 갈구하며 ',
        me.get_colored_name(),
        '을(를) 꽉 껴안았고, 그 덕분에 육봉은 질 안쪽 더 깊은 곳의 부드러운 살결까지 닿을 수 있었다.',
      ]);
      await kitaru.say_and_wait(['하앗…… ', me.get_colored_actual_name(), '! ']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 온몸에 힘이 풀린 채 자신을 탐하는 트레이너를 간신히 붙잡고 있었다.',
      ]);
      await era.printAndWait('찰팍! 찰팍! 팍!');
      await era.printAndWait('엄숙하고 성스러운 신사 안에 음란한 마찰음이 울렸다.');
      await era.printAndWait(
        '충돌이 일어날 때마다 몸 안의 애액이 튀어 나와, 무녀가 등을 기대고 있는 고목을 적셨다.',
      );
      await era.printAndWait([
        '처음에는 이 음탕한 제사에 주춤하던 ',
        kitaru.get_colored_name(),
        '도, ',
        me.get_colored_name(),
        '의 집요한 공격에 결국 마음껏 허리를 흔들기 시작했다.',
      ]);
      await kitaru.say_and_wait('기분 너무 좋아요! 으으응, 으읏……! ');
      await era.printAndWait([
        '신사 안에서 ',
        me.get_colored_name(),
        '과(와) ',
        kitaru.get_colored_name(),
        '는 짐승처럼 쾌락을 쫓았다.',
      ]);
      await era.printAndWait('신성한 신사 한가운데에서 이토록 외설적인 장면이 펼쳐지고 있었다.');
      await era.printAndWait([
        '어쩌면 이런 배덕적인 행위 때문인지, ',
        kitaru.get_colored_name(),
        '의 질 내부는 상상할 수 없을 정도로 좁고 뜨겁게 조여왔다.',
      ]);
      await kitaru.say_and_wait('으오……! 너, 너무…… 기분 좋아……! ');
      await era.printAndWait([
        '질 안쪽 벽을 긁어내듯 문지를 때마다 ',
        me.get_colored_name(),
        '의 성기는 강렬한 자극을 받았다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' 역시 마찬가지인 듯, 허리를 빼려 할 때마다 질 내부의 부드러운 살점들이 ',
        me.get_colored_name(),
        '의 육봉을 죽어라 휘감아왔다.',
      ]);
      await kitaru.say_and_wait('으응아…… 가, 가버려요……! ');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 등이 뒤로 활처럼 굽어지며 비명이 터져 나왔고, 입구가 강하게 수축하며 ',
        me.get_colored_name(),
        '에게 엄청난 쾌감을 선사했다.',
      ]);
      await era.printAndWait('쿨럭—— 쿨럭——');
      await era.printAndWait([
        me.get_colored_name(),
        '의 육봉이 ',
        kitaru.sex,
        '의 자궁구를 찌르며 정액을 쏟아내자, 이미 고조에 달해 있던 ',
        kitaru.get_colored_name(),
        '는 쉴 새 없이 몸을 떨었다.',
      ]);
      era.add('exp:56:질구절정횟수', 1);
      era.add('exp:0:음경절정횟수', 1);
      era.add('exp:0:사정량', 20);
      await kitaru.say_and_wait('으으으으으으읏!!!');
      await era.printAndWait(
        '신음을 억제하지 못한 채, 음란한 무녀는 노골적으로 비명을 질렀다.',
      );
      await era.printAndWait(
        '결합 부위에서 애액이 계속 흘러나와, 신성한 고목 아래에 배덕한 욕망이 가득 담긴 물웅덩이를 만들었다.',
      );
      await era.printAndWait(
        '초점이 풀린 별 모양의 눈동자가 위로 향하고 혀가 살짝 빠져나온 모습은, 신사의 신령에게 이 제사가 끝났음을 고하는 듯했다.',
      );
      end_ero_and_train();
    }
    flags.wait_flag = get_attr_and_print_in_event(56, attr_change, pt_change);
  };
};