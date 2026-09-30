const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
  update_ero_status,
} = require('#/system/ero/sys-prepare-ero');

const print_ero_page = require('#/page/page-ero');

const { common_future } = require('#/event/edu/edu-events-32/snippets');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (tachyon, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 32) {
    add_event(hook.hook, event_object);
    return;
  }
  const coffee = get_chara_talk(25),
    edu_marks = new TachyonEduMarks(),
    love = era.get('love:32');
  if (edu_marks.plan_b) {
    await print_event_name('또 다른 가능성', tachyon);
  } else {
    await print_event_name('슈뢰딩거의 초광속 입자', tachyon);
  }
  await tachyon.say_and_wait('맞아, 그러고 보니 이런 게 있었지……');
  await tachyon.say_and_wait([
    '그냥 썩히기엔 아깝다는 생각이 드는데, 어떤가, ',
    callname,
    '? 함께 가겠나?',
  ]);
  era.println();
  await era.printAndWait('우연히 실험실을 정리하던 중이었다.');
  await era.printAndWait([
    me.get_couple_title(),
    '은 어느 구석에 숨겨져 있던 봉투를 발견했다.',
  ]);
  if (love >= 75) {
    await era.printAndWait('응……?');
    await era.printAndWait('어쩐지 모를 위화감이 강하게 느껴졌다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 자세히 관찰한 끝에 실마리를 찾아냈다.',
    ]);
    await era.printAndWait(
      '분명 대청소 중에 발견된 것임에도 불구하고, 봉투에는 구겨진 흔적이 전혀 없었으며 오히려 소중하게 보관되어 온 듯한 느낌마저 들었다.',
    );
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 직접 「찾아낸」 것이라는 점을 미루어 보아, ',
      me.get_colored_name(),
      '은(는) 대략적인 진상을 짐작했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['응? ', callname, '? 왜 그러나?']);
    era.println();
    await era.printAndWait('……역시 입 밖으로 내지는 말자.');
    await era.printAndWait([
      '괜히 ',
      tachyon.get_colored_name(),
      '이 민망함에 화를 내는 것도 문제지만, 진짜 문제는 ',
      tachyon.sex,
      '가 토라진 뒤의 밤은 결코 편안하지 않을 것이라는 점이었다.',
    ]);
  }
  era.println();
  if (edu_marks.plan_b) {
    await era.printAndWait('마침 바쁜 일들도 어느 정도 마무리가 되었다.');
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 URA 파이널스도 이미 끝난 상태였다.',
    ]);
    await era.printAndWait('기회가 된다면 함께 가기로 했다.');
    era.drawLine();
    await era.printAndWait('거의 열 시간이 넘게 차를 타고 이동했다.');
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '은 마침내 온천 여관에 도착했다.',
    ]);
    era.println();
    await tachyon.say_and_wait('후우…… 겨우 도착했군.');
    await tachyon.say_and_wait('저기…… 우리 정말 길을 제대로 찾아온 것 맞나?');
    era.printButton('「……지도에는 분명 여기라고 적혀 있어.」', 1);
    await era.input();
    await era.printAndWait([me.get_couple_title(), '이 망설이는 것도 무리는 아니었다.']);
    await era.printAndWait(
      '두 사람이 서 있는 이곳은 원시림이라 불러도 손색이 없을 정도의 깊은 산속이었다.',
    );
    await era.printAndWait('이런 곳에 정말 온천이 있는 걸까……');
    era.println();
    await tachyon.say_and_wait('어디 보자…… 잠깐, 여긴 왜 신호조차 잡히지 않는 건가!?');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 휴대폰을 꺼내 확인해 보았으나, 정말로 신호가 전혀 잡히지 않았다.',
    ]);
    await era.printAndWait('이거…… 상황이 좋지 않은걸.');
    era.println();
    await tachyon.say_and_wait([callname, '…… 그냥 돌아갈까.']);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      ' 역시 발길을 돌릴까 생각하던 찰나였다.',
    ]);
    await era.printAndWait('우거진 수풀을 헤치고 나아가자, 눈앞에 번듯한 온천 여관이 모습을 드러냈다.');
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '은 프런트에서 체크인을 마친 뒤, ',
      me.get_colored_name(),
      '은(는) 곧장 노천탕으로 향했다.',
    ]);
    await era.printAndWait(
      '아직 완전히 풀리지 않은 겨울날, 열 시간 넘게 차를 타고 산길을 헤맸으니 몸이 녹초가 될 만도 했다.',
    );
    await era.printAndWait(
      '하지만 깊은 산속이라는 게 단점만 있는 것은 아니었다. 여관에는 두 사람 외에 다른 손님이 없어, 마치 여관 전체를 독점한 듯한 기분을 만끽할 수 있었다.',
    );
    await era.printAndWait('덕분에 지금 즐기는 온천욕은 유난히 상쾌하게 느껴졌다.');

    era.printButton('「……응?」', 1);
    await era.input();
    await era.printAndWait('그때 탈의실 문 너머에서 누군가의 인기척이 들렸다.');
    await era.printAndWait('응? 손님이 없던 것 같던데, 다른 사람이 온 건가?');
    era.println();
    await tachyon.say_and_wait([callname, '? 안에 있나?']);
    era.println();
    await era.printAndWait('……어?');
    era.printButton('「타…… 타키온!?」', 1);
    await era.input();
    await tachyon.say_and_wait('오오, 거기 있었군. 그럼 실례하겠네.');
    era.println();
    await era.printAndWait([
      '말이 끝나기 무섭게, ',
      tachyon.sex,
      '는 ',
      me.get_colored_name(),
      '의 대답도 기다리지 않고 탈의실 문을 열고 들어왔다.',
    ]);
    await era.printAndWait([
      '……몸에 타월을 두른 ',
      tachyon.sex,
      '의 모습을 보며, ',
      me.get_colored_name(),
      '의 마음속에는 안도감인지 실망감인지 모를 감정이 교차했다.',
    ]);
    era.println();
    await tachyon.say_and_wait('하하하! 그 표정은 뭔가? 설마 내가 알몸으로 들어올 줄 알았나?');
    await tachyon.say_and_wait('나라도 그 정도의 상식은 갖추고 있다네.');
    era.println();
    await era.printAndWait([
      '말투는 장난스러웠지만, ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '가 왠지 할 말이 있어 보인다는 직감이 들었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '방금 프런트의 여주인과 이야기를 나누었는데 말일세…… ',
      tachyon.sex,
      '는 내가 누군지 전혀 모르더군.',
    ]);
    await tachyon.say_and_wait([
      '아니, 정확히 말하자면 레이스 ',
      tachyon.get_uma_sex_title(),
      '인 ',
      tachyon.get_colored_name(),
      '이 누구인지 모르는 거겠지.',
    ]);
    era.println();
    await era.printAndWait([
      '마치 ',
      me.get_colored_name(),
      '이(가) 오해할까 봐 두려운 듯, ',
      tachyon.get_colored_name(),
      '은 서둘러 말을 덧붙였다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '을 알아보지 못하는 것은 이해할 수 있었다. 모든 사람이 ',
      tachyon.get_uma_sex_title(),
      ' 레이스에 열광하며 모든 참가자의 얼굴을 기억하는 것은 아니니까.',
    ]);
    await era.printAndWait([
      '하지만 레이스 ',
      tachyon.get_uma_sex_title(),
      '인 ',
      tachyon.get_colored_name(),
      '을, ',
      ...(check_aim_race(RaceHistory.get(32).get(), race_enum.prix_lat, 2, 1)
        ? [
            '……세계 최고봉인 개선문상의 챔피언인 ',
            tachyon.get_uma_sex_title(),
            '를 모른다는 것은,',
          ]
        : []),
      ' 이 세상에서 참으로 희귀한 일이었다.',
    ]);
    await era.printAndWait(
      '하지만 이곳이 얼마나 외딴 곳에 있는 여관인지를 생각하면, 문득 그럴 수도 있겠다는 생각이 들었다.',
    );
    era.println();
    await tachyon.say_and_wait(
      '정말로 놀랍군…… 누군가 나를 정말로, 전혀, 알지도 못하고 알아보지도 못하다니……',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '이 다음 말을 잇기를 기다렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      ' 역시 조금 놀라기는 했지만, ',
      tachyon.get_colored_name(),
      '은 명예를 쫓는 타입의 ',
      tachyon.get_uma_sex_title(),
      '가 아니었다. 명성 같은 것은 오히려 ',
      tachyon.sex,
      '가 가장 신경 쓰지 않는 요소 중 하나였다.',
    ]);
    await era.printAndWait('굳이 이 이야기를 꺼낸 데에는 분명 다른 이유가 있을 것이다.');
    era.println();
    if (edu_marks.chris < 2) {
      await tachyon.say_and_wait('자네, 작년 크리스마스 때의 일을 기억하나?');
      era.println();
      await era.printAndWait([
        '크리스마스…… ',
        me.get_colored_name(),
        '은(는) 그때의 작은 선술집을 떠올렸다.',
      ]);
      await era.printAndWait('경기장의 세계와는 전혀 상관이 없는 듯한 장소였다.');
      await era.printAndWait('레이스가 없어도 사람들의 인생은 변함없이 흘러가고 있었다.');
      await era.printAndWait('지금 이 순간은 마치 그때와도 같았다.');
      await era.printAndWait([
        '……당시 자신은 ',
        tachyon.get_colored_name(),
        '이 제시했던 가능성을 거절했었다.',
      ]);
      await era.printAndWait([
        '그때의 ',
        tachyon.sex,
        '는 단지 도망치기 위해 경기장을 떠나려 했기 때문이었다.',
      ]);
      await era.printAndWait('그렇다면 지금은 어떨까?');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 묵묵히 ',
        tachyon.get_colored_name(),
        '의 말이 끝나기를 기다렸다.',
      ]);
      era.println();
      await era.printAndWait(['물가에 앉은 ', tachyon.sex, '는 아무 말이 없었다.']);
      await era.printAndWait('달빛 아래의 그녀는 무척이나 고요해 보여, 마치 그림 속에 있는 것만 같았다.');
      await era.printAndWait([
        tachyon.sex,
        '를 아는 사람이라면, ',
        tachyon.get_colored_name(),
        '이라는 ',
        tachyon.get_uma_sex_title(),
        '를 아는 이라면 도저히 상상조차 할 수 없는 모습이었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 평온이라는 단어와 이토록 잘 어울릴 줄이야.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '…… 그때의 대답, 아직 듣지 못했네만.']);
      await tachyon.say_and_wait('이런 가능성도 존재할 수 있는 건가?');
      await tachyon.say_and_wait(
        '끊임없이 가능성을 쫓던 과학자가 어느 날 갑자기 지쳐버리는 거지. 특별한 계기도 없이.',
      );
      await tachyon.say_and_wait(
        '그저 이제 충분하다고 느끼며, 남은 길은 뒤에 오는 이들에게 맡기고……',
      );
      await tachyon.say_and_wait('그저 소중히 여기는 사람, 나를 소중히 여겨주는 사람과 함께 살아가고 싶다는 생각……');
      await tachyon.say_and_wait(
        '그런 사람에게는…… 이런 곳이 무척 어울린다고 생각하지 않나?',
      );
      era.println();
      await era.printAndWait([
        '아무도 ',
        tachyon.get_colored_name(),
        '을 모르는 곳.',
      ]);
      await era.printAndWait('더 이상 가능성을 탐구할 필요도 없는 곳.');
      await era.printAndWait(
        '잠시 멈춰 서서 쉬어갈 수도 있고, 혹은…… 그대로 이곳에서 평온한 삶을 누릴 수도 있다.',
      );
      await era.printAndWait('그런 가능성……');
      era.printButton('「꽤…… 괜찮은 것 같아.」', 1);
      era.printButton('「글쎄…… 다시 생각해 보는 게 어떨까?」', 2);
    } else {
      await tachyon.say_and_wait('이곳은 정말 조용하군.');
      era.println();
      await era.printAndWait(
        '……바람 소리와 온천수가 흐르는 소리 외에는 아무런 인척도 느껴지지 않는 온천 여관이었다.',
      );
      await era.printAndWait([
        '지나친 정적은 때로 공포를 불러일으키기도 하지만, ',
        tachyon.get_colored_name(),
        '과 함께라면 이런 공간도 그리 견디기 힘들지 않았다.',
      ]);
      era.println();
      await tachyon.say_and_wait('게다가, 무척 넓어.');
      era.println();
      await era.printAndWait(
        '……온천 여관이니 당연한 일이었다. 지금은 두 사람뿐이지만, 원래는 수백 명을 수용하도록 설계되었을 터였다.',
      );
      era.println();
      await tachyon.say_and_wait('그리고 사람이 없지.');
      era.println();
      await era.printAndWait('……이런 깊은 산속이니 당연했다.');
      await era.printAndWait([
        '맥락 없는 말들이 이어지자, ',
        me.get_colored_name(),
        '은(는) 도대체 ',
        tachyon.get_colored_name(),
        '이 무슨 말을 하려는 것인지 점점 이해하기 어려워졌다.',
      ]);
      era.println();
      era.println();
      await tachyon.say_and_wait([
        '이렇게 넓고 고요하며 평화로운 곳이라면…… 개선문상 ',
        tachyon.get_uma_sex_title(),
        '와 ',
        tachyon.sex,
        '의 트레이너 한 명쯤은 받아줄 수 있겠지.',
      ]);
      await tachyon.say_and_wait(
        '이런 식으로…… 아무도 모르고, 조용하고 평화로운 삶…… 이것 또한 하나의 가능성일까?',
      );
      era.println();
      await era.printAndWait([tachyon.get_uma_sex_title(), '의 가능성.']);
      await era.printAndWait([
        '그것은 ',
        tachyon.get_colored_name(),
        '이 입버릇처럼 하던 말이었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.get_uma_sex_title(),
        '는 평생 달릴 수 없다.',
      ]);
      await era.printAndWait([
        '레이스 ',
        tachyon.get_uma_sex_title(),
        '라 할지라도, 결국에는 경기장을 떠나 속도에 대한 추구를 뒤로하는 날이 오기 마련이다.',
      ]);
      era.println();
      await era.printAndWait([
        '그렇다면, 그런 가능성을 ',
        tachyon.get_colored_name(),
        '에게도 적용할 수 있을까?',
      ]);
      await common_future(tachyon, callname);
      era.printButton('「꽤…… 괜찮은 것 같아.」', 1);
      era.printButton('「글쎄…… 다시 생각해 보는 게 어떨까?」', 2);
    }
    await era.input();
    await tachyon.say_and_wait('……후후.');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '의 대답에 ',
      tachyon.get_colored_name(),
      '은 별다른 말을 하지 않았다.',
    ]);
    await era.printAndWait([tachyon.sex, '는 발끝으로 수면을 휘저으며 잔잔한 파문을 만들어냈다.']);
    await era.printAndWait([
      '문득 바람이 불어오자, ',
      me.get_colored_name(),
      '은(는) 숲 전체가 다시 숨 쉬는 듯한 소리를 들었다.',
    ]);
    await era.printAndWait('나뭇잎이 바스락거리며 떨어지고, 밤눈이 밝은 새들이 잠에서 깨어 날갯짓을 했다.');
    await era.printAndWait([
      '밤의 정적은 ',
      tachyon.sex,
      '가 일으킨 작은 소란에 의해 순식간에 깨지고 말았다.',
    ]);
    era.println();
    await era.printAndWait([
      '이런 ',
      tachyon.sex,
      '가 정말로 그런 삶을 살 수 있을까?',
    ]);
    await era.printAndWait([
      '가능할지 아닐지에 대한 수많은 생각이 교차하자, ',
      me.get_colored_name(),
      '은(는) 묘한 흥분감을 느꼈다.',
    ]);
    await era.printAndWait([
      '하지만 가능 여부와 상관없이, 당신은 반드시 ',
      tachyon.sex,
      '의 곁에서 마지막까지 함께할 것이라는 확신이 들었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('그런데 말이야.');
    era.println();
    await era.printAndWait('주변이 다시 겨울 밤의 고요를 되찾았을 무렵이었다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 문득 생각난 듯 입을 열었다.',
    ]);
    await era.printAndWait(
      '그녀는 말을 하며 슬그머니 타월의 밑단을 말아 올렸다. 허벅지 안쪽이 훤히 보일 정도까지.',
    );
    era.println();
    await tachyon.say_and_wait('타월을 두르고 있어서 미안하네만……');
    await tachyon.say_and_wait('사실 이 안에는 아무것도 입지 않았다네…… 보고 싶은가?');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 장난기 어린 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 바라보며, 타월의 매듭 부분을 천천히 풀기 시작했다.',
    ]);
    if (tachyon.sex_code - 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 타월 아래로 어렴풋이 보이는, 살짝 젖어 있는 듯한 틈새를 발견했다.',
      ]);
      await era.printAndWait('……아마 온천수일 것이다.');
      await era.printAndWait([
        '사실 ',
        tachyon.get_colored_name(),
        '이 아직 탕에 들어오지 않았다는 사실을 알고 있었지만, ',
        me.get_colored_name(),
        '은(는) 그렇게 믿기로 했다.',
      ]);
    }
    era.printButton('「온천에서 이러는 건 좀 그렇지 않을까……」', 1);
    era.printButton('「아니면, 방으로 돌아가서……?」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '이미 확인해 두었네…… 며칠간은 우리 말고 예약된 손님이 없으니 여기서 무엇을 해도 상관없어.',
    );
    await tachyon.say_and_wait(
      '무엇보다…… 아무도 오지 않을 테니, 자네가 저항하려 해도 소용없을 걸세♡',
    );
    await tachyon.say_and_wait('마음을 편히 먹고 듬뿍 즐겨주게나.');
    era.println();

    await era.printAndWait([
      '어느새 타월을 벗어 던지고 알몸으로 탕에 들어온 ',
      tachyon.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '의 몸 위에 올라탔다. ',
      tachyon.sex_code - 1 && me.sex_code > 0
        ? '탕에 들어오기도 전부터 이미 흠뻑 젖어 있던 틈을 꼿꼿한 막대 위에 맞추었다……'
        : '',
    ]);
    begin_and_init_ero(0, 32);
    era.set('tcvar:0:발정', 1);
    era.set('tcvar:32:발정', 1);
    update_ero_status(0, 32);
    era.set('flag:현재위치', location_enum.hot_spring);
    await print_ero_page(32, true);
    era.set('flag:현재위치', location_enum.gate);
    await end_ero_and_show_result(true);
    await era.printAndWait([
      '한바탕 소동이 지나간 후, ',
      tachyon.get_colored_name(),
      '이 먼저 탕 밖으로 나갔다.',
    ]);
    if (tachyon.sex_code - 1 && me.sex_code > 0) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '가 만족스러운 듯 살짝 부풀어 오른 배를 어루만지는 모습과, 허벅지를 타고 흘러내리는 액체를 멍하니 바라보았다.',
      ]);
      await era.printAndWait(
        '일자 형태에서 활짝 벌어진 꽃잎처럼 변한 그녀의 입구에는 방금 먹어치운 흰 앙금이 묻어 있었다.',
      );
      await era.printAndWait('가랑이 사이가 다시 한번 뜨거워지는 것이 느껴졌다.');
      await era.printAndWait([
        tachyon.sex,
        '는 마치 그것을 알아챈 듯, 엉덩이를 살랑살랑 흔들어 보였다.',
      ]);
    }
    await era.printAndWait('아무래도 방에 돌아가면 다시 한 번 거친 전투가 벌어질 것 같았다.');
    await era.printAndWait([
      '본격적인 전투를 앞두고, ',
      me.get_colored_name(),
      '은(는) 밤하늘을 올려다보며 마지막 정적을 즐겼다.',
    ]);
  } else {
    await era.printAndWait([
      me.get_couple_title(),
      '이 도착한 온천 여관은 상점가 경품 치고는 상당히 호화로운 곳이었다.',
    ]);
    await era.printAndWait('단독 온천탕, 일본 전통식 객실, 그리고 가이세키 요리까지 제공되었다.');
    await era.printAndWait(
      '생각해 보면…… 일반적인 상점가 추첨에서 이런 호화로운 경품을 준비하는 게 가능한 일일까?',
    );
    await era.printAndWait([
      '어쩌면…… 처음부터 누군가가 계획한 것이고, 그저 이 기회를 빌려 ',
      tachyon.get_uma_sex_title(),
      '와 트레이너에게 제공한 것은 아닐까?',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 온천탕에 앉아 이런저런 잡념에 잠겨 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '? 저기, 나 들어가도 되나~~?']);
    era.println();
    await era.printAndWait([
      '갑자기 들려온 담당 ',
      tachyon.get_uma_sex_title(),
      '의 목소리에 ',
      me.get_colored_name(),
      '은(는) 정신을 차렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 무심코 들어오라고 대답해 버렸지만, 곧 자신이 지금 온천욕 중이라는 사실을 깨달았다.',
    ]);
    await era.printAndWait('이제 와서 몸을 가리기엔 이미 늦어버렸다—————');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 서둘러 몸을 물속으로 깊숙이 집어넣고, 온천의 수증기가 조금이라도 시야를 가려주기를 바랐다.',
    ]);
    if (era.get('exp:32:성관계횟수') > era.get('exp:32:수면간횟수')) {
      await tachyon.say_and_wait([
        callname,
        '————— 왜 그렇게 부끄러워하며 몸을 웅크리고 있나? 이미 볼 건 다 본 사이 아닌가.',
      ]);
    } else {
      await tachyon.say_and_wait([
        callname,
        '————— 왜 그렇게 부끄러워하며 몸을 웅크리고 있나? 실험할 때 이미 다 보지 않았나.',
      ]);
    }
    era.println();
    await era.printAndWait([
      '말은 그렇게 했지만, ',
      tachyon.get_colored_name(),
      '의 말투 역시 조금은 긴장한 듯 보였다.',
    ]);
    await era.printAndWait([
      '알몸인 ',
      me.get_colored_name(),
      '과(와) 달리, ',
      tachyon.get_colored_name(),
      '은 몸에 타월을 두르고 있었다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '는 자연스럽게 탕 안으로 들어와 ',
      me.get_colored_name(),
      '의 옆으로 다가왔다.',
    ]);
    await era.printAndWait([
      '그리고 ',
      me.get_colored_name(),
      '의 곁에 앉아 편안한 표정으로 몸을 기대어 왔다.',
    ]);
    era.println();
    await tachyon.say_and_wait('드디어…… URA도 끝이 났군.');
    await tachyon.say_and_wait('가끔은 이렇게 긴장을 푸는 것도 나쁘지 않네.');
    era.println();
    await era.printAndWait([tachyon.sex, '은 만족스러운 듯 한숨을 내뱉었다.']);
    await era.printAndWait(
      '마치 큰 프로젝트를 마친 직장인이 회식 자리에서 맥주 한 잔을 들이켜고 내뱉는 한숨과도 같았다.',
    );
    await era.printAndWait(
      '그것이 해방감인지 성취감인지, 아니면…… 스스로도 알 수 없는 미묘한 상실감인지 알 수 없었다.',
    );
    await era.printAndWait([
      '지난 3년을 되돌아보면, ',
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '은 참으로 많은 것을 함께 이루어 냈다.',
    ]);
    await era.printAndWait([
      '삼관을 향한 여정, 감정에 대한 연구 과제, ',
      coffee.get_colored_name(),
      '와의 격전……',
    ]);
    await era.printAndWait('그 밖에도 언급할 가치가 있거나 혹은 사소한 수많은 추억이 있었다.');
    await era.printAndWait([
      '지난 3년의 무게에, ',
      me.get_colored_name(),
      ' 역시 ',
      tachyon.get_colored_name(),
      '과 마찬가지로 깊은 한숨을 내쉬었다.',
    ]);
    era.println();
    await era.printAndWait([
      '그 후 한동안 ',
      me.get_couple_title(),
      ' 두 사람은 아무 말 없이 서로에게 기대어 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그제야 곁에 있는 ',
      tachyon.sex,
      '의 몸이 무척이나 가냘프다는 사실을 새삼 깨달았다.',
    ]);
    await era.printAndWait([
      '지금 이곳에 있는 그녀는 천재 ',
      tachyon.get_uma_sex_title(),
      '도, 매드 사이언티스트도 아니었다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      ' 또한 그저 평범한 한 명의 ',
      tachyon.get_teen_sex_title(),
      '일 뿐이었다.',
    ]);
    era.println();
    await era.printAndWait('수증기가 피어오르는 온천 속에서 두 사람은 정적을 만끽했다.');
    await era.printAndWait([
      '트러블 메이커인 ',
      tachyon.get_colored_name(),
      '과 그녀의 조력자인 트레이너를 아는 사람들이라면 상상조차 할 수 없는 광경일 것이다.',
    ]);
    await era.printAndWait('하지만 지금 이 순간, 두 사람은 그 어느 때보다 이 평온함에 침잠해 있었다.');
    era.drawLine();
    await tachyon.say_and_wait([callname, ', 자네는 『슈뢰딩거의 고양이』를 알고 있나?']);
    era.println();
    await era.printAndWait([
      '갑자기 ',
      tachyon.get_colored_name(),
      '이 침묵을 깼다.',
    ]);
    await era.printAndWait('슈뢰딩거의 고양이……?');
    era.printButton('「몰라」', 1);
    era.printButton('「알아」', 2);
    if ((await era.input()) === 1) {
      await tachyon.say_and_wait(
        '슈뢰딩거의 고양이란, 본래 슈뢰딩거가 양자역학의 모순을 반박하기 위해 제시했던 가상 실험이라네.',
      );
      await tachyon.say_and_wait(
        '아이러니하게도 지금은 양자역학을 설명하는 가장 대표적인 예시가 되어버렸지만 말이야.',
      );
      await tachyon.say_and_wait(
        '간단히 말해, 방사성 물질과 그 방사선에 반응하는 독가스 장치, 그리고 고양이를 밀폐된 상자 안에 넣는 실험이지.',
      );
      await tachyon.say_and_wait('방사성 물질이 언제 붕괴하여 방사선을 내뿜을지는 아무도 모른다네.');
      await tachyon.say_and_wait(
        '즉, 장치가 작동할지 안 할지도 알 수 없지. 상자를 열기 전까지 고양이는 죽어 있는 상태와 살아 있는 상태가 동시에 중첩되어 있는 셈이라네.',
      );
    } else {
      await tachyon.say_and_wait(
        '이 실험에 대해서는 오늘날 여러 학파가 저마다의 견해를 내놓고 있지. 하지만 그 본질은 변하지 않아…… 자네는 이 실험에서 가장 중요한 것이 무엇이라고 생각하나?',
      );
    }
    era.printButton('「……고양이?」', 1);
    era.printButton('「……독가스?」', 2);
    await era.input();
    await tachyon.say_and_wait(
      '하하, 확실히 그것들이 없으면 실험 자체가 성립되지 않으니 정답이라 할 수도 있겠군…… 하지만 틀렸어.',
    );
    era.println();
    await era.printAndWait([
      '갑자기 ',
      tachyon.get_colored_name(),
      '이 온천에서 일어나 ',
      me.get_colored_name(),
      '을(를) 정면으로 마주 보았다. 두 사람의 시선이 얽혔다.',
    ]);
    await era.printAndWait('그녀의 와인빛 눈동자는 잘 익은 과실주처럼 사람을 매료시켰다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문득 궁금해졌다. 예전에 ',
      tachyon.sex,
      '는 자신을 보고 광기 어린 눈을 가졌다고 평한 적이 있었다.',
    ]);
    await era.printAndWait([
      '그렇다면 지금 그녀의 눈동자에 비친 ',
      tachyon.sex,
      '의 모습은 과연 어떠할까.',
    ]);
    era.println();
    await tachyon.say_and_wait('정답은————— 『관측자』라네.');
    await tachyon.say_and_wait(
      '고양이가 살았는지 죽었는지는 어디까지나 『가능성』에 불과해. 무한히 수렴하지만 정해지지 않은 가능성이지.',
    );
    await tachyon.say_and_wait(
      '오직 관측이 더해졌을 때만 가능성이 고정되어, 생과 사라는 결과로 나타나는 걸세.',
    );
    era.println();
    await era.printAndWait('즉, 다시 말해.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 손을 뻗어 ',
      me.get_colored_name(),
      '의 눈을 만지려 했다. 하지만 그녀의 손은 어쩐지 조금 떨리고 있었고, 혹시라도 상처를 입힐까 두려워하는 듯 보였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 먼저 ',
      tachyon.sex,
      '의 손을 맞잡았다. 그리고 느릿하지만 확실하게 자신의 눈가로 그녀의 손을 이끌었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('자네가 바로 나의 관측자라네.');
    await tachyon.say_and_wait([
      tachyon.get_colored_name(),
      '의 가능성을 고정해 주는 단 한 사람이지.',
    ]);
    await tachyon.say_and_wait([
      '지금 이 순간의 ',
      tachyon.get_colored_name(),
      '을 결정해 주는 사람 말일세.',
    ]);
    await tachyon.say_and_wait(
      '이 실험에서 연구자는 자네고, 나는 그저 자네가 상자 속에 넣은 고양이일 뿐이라네.',
    );
    era.println();
    await era.printAndWait('그녀의 손가락이 조심스럽게 닿았다.');
    await era.printAndWait('눈동자에 닿은 이물감 외에는 특별한 감각은 없었다.');
    await era.printAndWait([
      '하지만 ',
      tachyon.get_colored_name(),
      '은 그것만으로 만족한 듯 스스로 손을 거두었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('앞으로의 실험도…… 부디 잘 부탁하네.');
    await tachyon.say_and_wait('나의 친애하는 교수 군.');
    await tachyon.say_and_wait('이따가 밖으로 나가면 내가 준비한 선물을 잊지 말게나.');
    era.println();
    await era.printAndWait([
      '말을 마친 뒤, ',
      tachyon.get_colored_name(),
      '은 먼저 탕 위로 올라갔다.',
    ]);
    era.println();
    await tachyon.say_and_wait('참, 오늘 먹을 약은 차가운 우유에 섞어 두었으니 잊지 말고 마시게.');
    era.println();
    await era.printAndWait(
      '…………적어도 차가운 우유를 챙겨줄 정도로는 성장했다고 봐도 되는 걸까.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 마치 가스라이팅이라도 당한 듯한 생각을 하며, 온천욕을 조금 더 즐기기로 했다.',
    ]);
  }
  era.set('item:용도불명안경', 1);
  return true;
};