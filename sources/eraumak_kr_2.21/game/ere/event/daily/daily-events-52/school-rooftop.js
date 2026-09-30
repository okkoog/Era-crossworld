const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

/** @param {HookArg} hook */
module.exports = async (hook) => {
  const callname = sys_get_callname(52, 0),
    edu_marks = new UraraEduMarks(),
    in_urara = get_chara_talk(52, chara_colors[52][1]),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    relation = era.get('relation:52:0'),
    urara = get_chara_talk(52);
  if (!edu_marks.rof_time && Math.random() < 0.3) {
    edu_marks.rof_time = 1;
    await print_event_name('몽롱한 옥상의 시간', urara);
    await era.printAndWait([
      '어느 정도 성장했다고는 하나, 지금의 ',
      urara.get_colored_name(),
      '는 여전히 어린아이 같은 생활 습관을 완전히 고치지 못했다.',
    ]);
    await era.printAndWait([
      '이전 트레이닝이 너무 힘들었던 걸까? 단순히 식사 시간이 조금 늦어졌을 뿐인데, ',
      urara.get_colored_name(),
      '는 벌써 졸음 모드에 들어가려 하고 있었다.',
    ]);
    await era.printAndWait([
      '식사 전에 꾸벅꾸벅 졸기 시작한 담당의 얼굴을 바라보며, ',
      me.get_colored_name(),
      '은(는) 두 사람의 도시락통을 꺼내고 옥상 벤치에 공간을 마련했다.',
    ]);
    await era.printAndWait([
      '비록 작은 ',
      urara.get_uma_sex_title(),
      '는 빨리 어른이 되고 싶어 하지만, 정말로 자라기까지는 아직 시간이 조금 더 필요해 보였다.',
    ]);
    await era.printAndWait([
      '하지만 아무리 그래도 밥은 제때 먹어야 하는 법. ',
      urara.get_colored_name(),
      '의 졸음 가득한 얼굴을 보며, ',
      me.get_colored_name(),
      '은(는) 잠시 생각에 잠겼다.',
    ]);
    await era.printAndWait('방법이 없는 건 아니지만, 다만……');

    era.printButton('「우라라, 정말 졸리면 힘 빼고 있어도 돼. 내가 먹여줄게.」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '의 제안을 듣자, 정신이 몽롱하던 ',
      urara.get_colored_name(),
      '는 우선 멍하니 있다가, 눈을 비비며 ',
      me.get_colored_name(),
      '에게 겨우 졸음 섞인 미소를 지어 보였다.',
    ]);
    era.println();
    if (relation >= 150) {
      await era.printAndWait([
        '벤치에 얌전하게 앉은 ',
        urara.get_colored_name(),
        '는 마치 먹이를 기다리는 아기 새처럼 수줍게 눈을 감고 작은 입을 벌렸다.',
      ]);
      await era.printAndWait([
        '젓가락을 들어 계란말이 한 조각을 살짝 집어 들고는, 엄마 새 역할을 자처한 ',
        me.get_colored_name(),
        '이(가) 조심스럽게 아기 새의 입속으로 음식을 날랐다.',
      ]);
      await era.printAndWait([
        '반절을 가볍게 베어 물고, ',
        urara.get_colored_name(),
        '는 눈을 감은 채 ',
        callname,
        '가 먹여주는 음식을 음미하기 시작했다.',
      ]);
      await era.printAndWait([
        '안심하고 음식을 삼킨 뒤, 작은 ',
        urara.get_uma_sex_title(),
        '는 만족스러운 듯 젓가락에 남은 나머지 절반도 마저 먹었다.',
      ]);
    } else {
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '는 조금 내키지 않는 기색이었으나, 피로가 앞선 ',
        urara.sex,
        '는 결국 ',
        me.get_colored_name(),
        '에게 조금 더 가까이 다가왔다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 먹어줄지 확신이 서지 않았지만, ',
        me.get_colored_name(),
        '은(는) 조심스레 젓가락으로 튀김 한 조각을 집어 담당 쪽으로 내밀었다.',
      ]);
      await era.printAndWait([
        '조금 망설이는 듯 보였으나, 튀김의 고소한 냄새를 맡자 ',
        urara.get_colored_name(),
        '는 이내 고분고분하게 입을 벌려 고기 조각을 받아 물었다.',
      ]);
      await era.printAndWait([
        '작게 오물거리며 삼키는 소리와 함께, 작은 ',
        urara.get_uma_sex_title(),
        '는 ',
        me.get_colored_name(),
        '의 보살핌 속에 점차 마음을 놓아갔다.',
      ]);
    }
    era.println();
    await era.printAndWait('이번에도 맛이 괜찮아서 다행이다.');
    await era.printAndWait([
      '담당이 천천히 씹어 삼키기를 기다리며, ',
      me.get_colored_name(),
      '은(는) 젓가락으로 다른 반찬을 집어 들었다.',
    ]);
    await era.printAndWait([
      '정성껏 ',
      urara.get_colored_name(),
      '에게 음식을 먹여주며, 한편으로는 티슈를 꺼내 ',
      urara.sex,
      '의 입가에 묻은 것을 닦아주는 사이, 묘한 감각이 ',
      me.get_colored_name(),
      '을(를) 감싸기 시작했다.',
    ]);
    await era.printAndWait([
      '본래 또래보다 더 어려 보이는데, 지금처럼 기운이 빠져 말랑말랑해진 상태의 작은 ',
      urara.get_uma_sex_title(),
      '는 정말로 영락없는 어린아이 같았다.',
    ]);
    await era.printAndWait([
      '그나저나 정말 귀엽다. 만약 ',
      urara.get_colored_name(),
      '가 계속 사람 손길을 타는 작은 반려동물 같은 모습으로 있어 준다면, 그것도 그것대로 나쁘지 않을지도?',
    ]);
    await era.printAndWait([
      '이런저런 잡생각을 하는 동안, 손에 든 도시락통은 ',
      me.get_colored_name(),
      '의 작은 동물 먹이 주기 활동을 통해 점차 비워져 갔다.',
    ]);
    await era.printAndWait(
      '다만, 이 몽롱한 식사 시간 후에…… 역시 아직 어린애라고 해야 할까?',
    );
    await era.printAndWait([
      '배불리 먹고 만족한 뒤, 원래부터 비틀거리던 ',
      urara.get_colored_name(),
      '는 식곤증 때문인지 더는 몸을 가누지 못하는 모양이었다.',
    ]);
    await era.printAndWait('이렇게 될 것임은 아마도 담당 트레이너의 예상 범위 안이었을 것이다.');

    era.printButton(
      '「지금은 잠시 눈을 붙이렴. 무슨 일이 생기면 미리 깨워줄 테니까.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '당장이라도 쓰러질 듯한 담당을 보며, ',
      me.get_colored_name(),
      '은(는) 약간의 허탈한 웃음을 지으며 허벅지를 톡톡 쳤다.',
    ]);
    await era.printAndWait([
      '생각이나 태도 따위를 따질 겨를도 없었다. ',
      me.get_colored_name(),
      '의 휴식 제안을 받자마자, 작은 ',
      urara.get_uma_sex_title(),
      '는 즉시 억지로 버티던 몸의 긴장을 풀었다.',
    ]);
    await era.printAndWait([
      '기다렸다는 듯 기지개를 한 번 켜고는 ',
      me.get_colored_name(),
      ' 쪽으로 쓰러지듯 누워, ',
      me.get_colored_name(),
      '의 허벅지를 베고 옥상 벤치에 몸을 웅크린 ',
      urara.get_colored_name(),
      '는 금세 깊은 잠에 빠져들었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 역시 아직 어린애인 걸까? 하지만 ',
      urara.sex,
      '가 이렇게나 착한 아이이기에, 오늘의 작은 ',
      urara.get_uma_sex_title(),
      '가 주는 치유력 또한 으뜸이었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 무릎 위에서 평온하게 숨을 내뱉는 분홍색 작은 동물을 쓰다듬으며, ',
      me.get_colored_name(),
      '도 편안한 마음으로 자신의 도시락을 들었다.',
    ]);
    await era.printAndWait('오늘 날씨 정말 좋네.');
    await era.printAndWait([
      urara.get_colored_name(),
      '는 사양할지도 모르지만, 두 사람의 도시락통은 오늘 ',
      urara.sex,
      '의 ',
      callname,
      '가 전부 정리하도록 하자.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('하아, 정말 좋네요…… 아니, 딱히 부러운 건 아닙니다……');
    hook.override = true;
    era.println();
    get_attr_and_print_in_event(
      52,
      undefined,
      0,
      JSON.parse('{"체력":300}'),
      true,
    ) && (await era.waitAnyKey());
    sys_like_chara(52, 0, 10, true, 5) && (await era.waitAnyKey());
  } else {
    let random_range = 2;
    if (love === 100) {
      random_range = 5;
    } else if (love >= 75) {
      random_range = 4;
    } else if (love >= 50) {
      random_range = 3;
    }
    switch (get_random_value(0, random_range)) {
      case 0:
        await urara.say_and_wait([
          callname,
          ', 이것 봐! 오늘 도시락에 맛있는 야채가 잔뜩 들어갔어! 응! ',
          sys_get_colored_callname(52, 61),
          '이 만들어 준 거야!',
        ]);
        await era.printAndWait([
          '겉은 조금 탔지만 의외로 괜찮아 보이는 음식을 보며, ',
          me.get_colored_name(),
          '은(는) 속으로 담당의 엄마 같은 룸메이트에게 감사를 표했다.',
        ]);
        break;
      case 1:
        await urara.say_and_wait([
          sys_get_colored_callname(52, 15),
          '은 여기서 자주 노래 연습을 해. 하지만 남에게 방해되는 걸 싫어하니까 식사 시간에는 오지 않는 것 같아!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 말대로, 다들 참 착한 아이들이라는 생각이 들었다.',
        ]);
        break;
      case 2:
        await urara.say_and_wait(
          '도시락 맛있어! 공기도 상쾌해! 그런데…… 왜 옥상에서 도시락을 먹는 거였지?',
        );
        await era.printAndWait('그러게, 생각해보니 왜 옥상에서 도시락을 먹고 있었더라?');
        await era.printAndWait([
          '갑자기 같은 의문을 품게 된 ',
          me.get_colored_name(),
          '과(와) ',
          urara.get_colored_name(),
          '는 함께 기묘한 사색에 잠겼다.',
        ]);
        break;
      case 3:
        await urara.say_and_wait([
          '듣기로는 ',
          sys_get_colored_callname(52, 32),
          '이 특별한 조미료를 판다던데…… 그건 대체 어떤 맛일까?',
        ]);
        await era.printAndWait([
          '작은 목소리로 특별한 화제를 입에 담는 ',
          urara.get_colored_name(),
          '의 안색이 어째서인지 무언가를 몽상하는 듯 황홀해졌다.',
        ]);
        break;
      case 4:
        await urara.say_and_wait([
          '헤헤~ 오늘 도시락은 내가 직접 만든 거야! 같이 먹자, ',
          callname,
          '!',
        ]);
        await era.printAndWait([
          '행복하게 웃으며 ',
          urara.get_colored_name(),
          '는 2인분 도시락통을 펼치고, 서툴지만 애정이 듬뿍 담긴 반찬들을 ',
          me.get_colored_name(),
          '의 앞에 늘어놓았다.',
        ]);
        await era.printAndWait(
          '반창고를 붙인 담당의 손가락이 집어준 음식을 삼키자, 담당의 미소와 닮은 행복감이 가슴 속으로 밀려왔다.',
        );
        break;
      case 5:
        await urara.say_and_wait([
          sys_get_colored_callname(52, 47),
          '이 그러는데, 세상에는 사랑의 묘약이라는 약이 있대. 두 사람이 영원히 사랑하게 만들어준대!',
        ]);
        await urara.say_and_wait([
          '그런 약…… 도시락에 넣으면 맛이 이상해질까? ',
          callname,
          ', 먹어줄 거야?',
        ]);
        await era.printAndWait([
          '분명 위험한 생각을 하고 있음에도 불구하고, 작은 ',
          urara.get_uma_sex_title(),
          '는 여전히 상대방의 의사를 존중하고 있었다.',
        ]);
    }
  }
};