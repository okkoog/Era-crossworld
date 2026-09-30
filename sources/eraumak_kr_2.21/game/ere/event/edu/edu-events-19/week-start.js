const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (digital, me, callname, flags) => {
    era.set('cflag:19:축제이벤트표시', 0);
    await print_event_name('새해의 포부', digital);
    await era.printAndWait([
      '새로운 한 해, ',
      digital.get_colored_name(),
      '은 ',
      digital.get_uma_sex_title(),
      '에게 있어 지극히 중요한 클래식 시즌을 맞이했다.',
    ]);
    await era.printAndWait([
      '비록 ',
      digital.sex,
      '는 클래식급 ',
      digital.get_uma_sex_title(),
      '들을 가까이서 접할 수 있다는 사실에만 들떠 있는 것 같았지만 말이다.',
    ]);
    await digital.say_and_wait(['새해 복 많이 받으세요! ', callname, '!']);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '에게 가볍게 새해 인사를 건넸다.',
    ]);
    await era.printAndWait('이른 아침부터 트레이닝실에 나오다니, 정말 근면했다.');
    await digital.say_and_wait('연말은 어떻게 보내셨나요? 코미케에서 좋은 책 좀 건지셨나요?');
    await me.say_and_wait('어? 코미케? 책이라니?');
    await digital.say_and_wait(
      '아…… 음, 없으셨다면 방금 한 말은 잊어주세요. 그냥 디지땅의 헛소리였답니다.',
    );
    await digital.say_and_wait(
      '그보다! 올해 레이스! 이건 정말 할 말이 많다구요! 클래식급 레이스는 그야말로 밤하늘의 별처럼 많으니까요!',
    );
    await era.printAndWait([
      '과연, ',
      digital.get_colored_name(),
      '도 이제 클래식급 레이스에 참가할 수 있게 되어 선택지가 작년보다 훨씬 많아졌다. 대부분의 G1 레이스는 클래식급이 되어야 참가할 수 있기 때문이다.',
    ]);
    await digital.say_and_wait([
      '아, 문득 작년 생각이 나네요. 제가 너무 우쭐했던 것 같아요. 제 초심을 잊어버린 것 같달까, 분명 훌륭한 ',
      digital.get_uma_sex_title(),
      ' 덕후가 되겠다고 다짐했었는데 말이죠?!',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 지난번 ',
      digital.sex,
      '와 ',
      get_chara_talk(58).get_colored_name(),
      '의 대화에 대해 여전히 마음에 걸리는 구석이 있는 듯했다……',
    ]);
    era.println();
    await digital.say_and_wait(
      '그러니까! 올해는 다시 원점으로 돌아가겠습니다! 다시 한 명의 팬으로서! 그것을 원칙으로 삼겠어요!',
    );
    await era.printAndWait([
      '하지만 현재로선 딱히 방법이 없어 보였다. ',
      digital.get_colored_name(),
      '이 그것을 깨닫기 위해서는 아직……',
    ]);
    await digital.say_and_wait([
      callname,
      '! 저에게 조언 좀 해주실 수 있나요! 어떻게 응원해야 좋을까요?',
    ]);
    era.print([me.get_colored_name(), ' 의 선택은:']);
    era.printButton(`${digital.get_uma_sex_title()}짱을 받든다 (스피드+10)`, 1);
    era.printButton('독서 (스태미나+10)', 2);
    era.printButton('모방을 통해 배운다 (스킬 포인트+20)', 3);
    switch (await era.input()) {
      case 1:
        await me.say_and_wait([
          '평소처럼 ',
          digital.get_uma_sex_title(),
          '짱을 받드는 게 좋지 않겠어?',
        ]);
        await digital.say_and_wait([
          '오오오! 좋은 제안이에요. 그러고 보니 최근 레이스니 뭐니 하면서 계속 ',
          digital.get_uma_sex_title(),
          '짱들에게 결례를 범하고 있었던 기분이 드네요……',
        ]);
        await digital.say_and_wait(
          '그래요! 역시 원점으로 돌아갈 때입니다! 이제 성지를 정화할 시간이에요!',
        );
        await era.printAndWait('정화?!');
        await era.printAndWait('알고 보니 그저 경기장을 청소하려는 것이었다. 다행이다.');
        await era.printAndWait([
          '청소를 마치자 마침 ',
          get_chara_talk(9).get_colored_name(),
          '이 가장 먼저 잔디밭에 도착했다. ',
          get_chara_talk(9).get_colored_name(),
          '이 잔디 위를 상쾌하게 달리는 모습을 보며, ',
          digital.get_colored_name(),
          '은 자신도 의욕이 샘솟는 것을 느꼈다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(19, [10], 0);
        break;
      case 2:
        await me.say_and_wait('그렇다면 아까 말했던 샀다는 책들을 읽어보는 건 어때?');
        await digital.say_and_wait(
          '엣! 그거 정말…… 비록 다 짧은 내용이긴 하지만, 다시 한번 훑어보는 것도 나쁘지 않겠네요!',
        );
        await digital.say_and_wait([
          '다양한 ',
          digital.get_uma_sex_title(),
          '짱들의 에너지를 섭취해야만, 새로운 한 해도 지치지 않고 라스트 스퍼트를 올릴 수 있으니까요!',
        ]);
        await era.printAndWait([
          '그렇게 ',
          digital.get_colored_name(),
          '은 오늘 기숙사로 돌아가 책을 읽었다. 나중에 다시 만난 ',
          digital.get_colored_name(),
          '의 황홀함에 푹 빠진 표정을 보고, ',
          me.get_colored_name(),
          '은(는) ',
          digital.sex,
          '가 아주 푹 쉬었음을 알 수 있었다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(19, [0, 10], 0);
        break;
      case 3:
        await me.say_and_wait([
          '다른 ',
          digital.get_uma_sex_title(),
          '를 흉내 내며 기술을 배워보는 건 어때?',
        ]);
        await digital.say_and_wait(
          '그렇군요! 최애들을 모방하며 기술을 배운다! 그것이야말로 저희의 사명이죠!',
        );
        await digital.say_and_wait('오오옷! 오?');
        await era.printAndWait([
          '훈련장 관중석으로 이동해, 예전에 스탠드에서 관찰했던 ',
          digital.get_uma_sex_title(),
          '의 기술을 회상했다……',
        ]);
        await digital.say_and_wait('자, 보시라! 테이오 스텝!');
        await era.printAndWait(
          '오오, 저것은 그 유명한 테이오 스텝! 높은 다리 들어 올리기를 통해 보폭을 늘리는 기술이었다!',
        );
        await era.printAndWait('오오, 본인도 도착한 모양이었다.');
        await era.printAndWait([
          get_chara_talk(3).get_colored_name(),
          '? 언제 온 거지?',
        ]);
        await digital.say_and_wait('우와아아악! 결코 무례를 범하려던 게 아니었어요!');
        await era.printAndWait([digital.get_colored_name(), '! 소멸!']);
        await era.printAndWait([
          '하지만 그 후 ',
          digital.get_colored_name(),
          '은 ',
          get_chara_talk(3).get_colored_name(),
          '에게서 정말로 요령을 전수받았다.',
        ]);
        flags.wait_flag = get_attr_and_print_in_event(19, undefined, 20);
    }
  };

  handlers[47 + 29] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:0:위치') !== era.get('cflag:19:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('여름 합숙 시작', digital);
    await era.printAndWait([
      '여름 합숙! 일 년 중 가장 중요한 행사다! 이 시기는 ',
      digital.get_uma_sex_title(),
      '들이 크게 성장할 절호의 기회였다! 트레이너인 ',
      me.get_colored_name(),
      ' 역시 이번 활동을 각별히 중시하고 있었다.',
    ]);
    await era.printAndWait([
      '특히 지난번 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      '의 기세를 이어 다음 레이스까지 몰아쳐야 했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이미 ',
      digital.get_colored_name(),
      '의 앞날에 펼쳐진 탄탄대로를 예감하고 있었지만……',
    ]);
    await digital.say_and_wait(
      '구와악…… 역시 승리에 취해 정신이 나갔었나 봐요. 제가 감히, 제가 감히 그런 신성한 존재가 되려고 하다니……',
    );
    await era.printAndWait('……아, 시작부터 예감이 좋지 않았다.');
    await digital.say_and_wait(
      '승리의 여운이 가시고 나니, 소위 말하는 현자 타임이 와서 제가 얼마나 무모했는지 자괴감이 들어요……',
    );
    era.printButton('「잠깐, 디지털, 후회하는 거야? 네가 내린 결정을 후회하는 거냐고?」', 1);
    await era.input();
    await era.printAndWait([
      '아픈 곳을 찔린 듯, ',
      digital.get_colored_name(),
      '은 용수철처럼 몸을 벌떡 일으켰다.',
    ]);
    await digital.say_and_wait([
      '그게, 가끔은 제 자신이 참 번거롭다고 느껴져서요…… 분명 스스로 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '도 예약해 뒀으면서……',
    ]);
    await digital.say_and_wait(
      '노노노노노! 귀찮은 생각은 일단 접어두죠! 지금은 코미케 생각을 먼저 해야겠어요!',
    );
    era.printButton('「코미케? 그게 뭐야?」', 1);
    await era.input();
    await digital.say_and_wait('에엑!');
    await era.printAndWait([
      '갑자기 ',
      me.get_colored_name(),
      '에게 말을 끊긴 ',
      digital.get_colored_name(),
      '은 우물쭈물하며 말을 흐렸다.',
    ]);
    await digital.say_and_wait(
      '아무튼! 방금 레이스도 끝났으니 일단 좀 쉬게 해주세요, 아하하하!',
    );
    await era.printAndWait('이번 여름 합숙, 조금 걱정되기 시작했다……');
  };

  handlers[95 + 6] = async (digital, me, callname) => {
    await print_event_name('발렌타인', digital);
    await era.printAndWait([
      '아침 일찍 트레이닝실에 도착한 ',
      digital.get_colored_name(),
      '이 들고 온 것은—— 초콜릿 한 무더기였다.',
    ]);
    await era.printAndWait('왜 초콜릿을 세는 단위가 무더기인 거지?!');
    await digital.say_and_wait([
      '이것은 제 심혈을 기울인 역작입니다! 제가 생각할 수 있는 모든 ',
      digital.get_uma_sex_title(),
      '짱들의 특징을 이 초콜릿에 담아냈어요!',
    ]);
    await era.printAndWait(
      '상자들이 탑처럼 쌓여 있는 것을 보니, 설마 저 안의 초콜릿이 전부 제각각인 걸까?!',
    );
    await digital.say_and_wait('자, 그럼 제를 올립시다!');
    await era.printAndWait('뭐라고, 웬 신당이 여기서 튀어나오는 거야?!');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 신당 앞에 초콜릿을 전부 차려놓고는, 주문 같은 것을 외우더니 기묘하게 손을 비비기 시작했다.',
    ]);
    await digital.say_and_wait('좋아, 됐어요! 세 여신님께서 제 소망을 들어주셨을 거예요.');
    await era.printAndWait('세 여신님께 빌 거면 안뜰로 가라고?!');
    await digital.say_and_wait([
      callname,
      ', 이제 같이 먹어요. 음식을 낭비하면 안 되니까요.',
    ]);
    era.printButton('「먹을 수 있는 거였어?!」', 1);
    await era.input();
    await digital.say_and_wait(
      '당연하죠, 마음만 담겨 있으면 충분하다구요. 게다가 음식을 버리는 건 모독이라구요!',
    );
    await digital.say_and_wait('이제 먹으면서 이야기 좀 나눠요!');
    await digital.say_and_wait([
      '으으으, 전 정말 행운아예요. 이렇게 같이 ',
      digital.get_uma_sex_title(),
      '짱들에 대해 토론할 수 있는 동지를 만나다니……',
    ]);
    await digital.say_and_wait([
      '자자, ',
      callname,
      ', 최근 가장 밀고 계신 ',
      digital.get_uma_sex_title(),
      '짱은…… 누구인가요?',
    ]);
    await era.printAndWait('그걸 말이라고 해?');
    era.printButton('「자, 여기 초콜릿.」', 1);
    await era.input();
    await era.printAndWait('냉장고에서 초콜릿을 꺼냈다……');
    await digital.say_and_wait('오오오, 저군요.');
    await digital.say_and_wait('히이이이익? 아니, 진짜로 저를요?');
    await digital.say_and_wait([
      '이, 이건 대체 무슨 박애 정신이죠?! 설마 이런 비주류 ',
      digital.get_uma_sex_title(),
      '를 파고 싶어 하는 분이 계실 줄이야?',
    ]);
    await me.say_and_wait([
      '무슨 소리야, 난 네 ',
      callname,
      '잖아…… 그리고, 네가 비주류라고 생각해? 네 팬 수가 결코 적지 않을 텐데?',
    ]);
    await era.printAndWait([
      '그 말을 들은 ',
      digital.get_colored_name(),
      '은 갑자기 말문이 막힌 듯 버벅거리기 시작했다.',
    ]);
    await digital.say_and_wait(
      '그건…… 사실 제 팬들은 데뷔 전부터 이미 꽤 많았거든요. 예전부터 계속 해오던 게 있어서…… 동인지라든가……',
    );
    await era.printAndWait([
      '어라? 그러고 보니 ',
      digital.get_colored_name(),
      '은 데뷔 전부터 어떤 방면에서 꽤 유명했다는 소문을 들은 적이 있는 것 같았다……',
    ]);
    await digital.say_and_wait([
      '하지만! ',
      callname,
      '의 그런 정신, 그것이야말로 오타쿠의 귀감입니다! 당신과 함께라면 10년이든 그보다 더 오래든, 매년 발렌타인을 같이 보낼 수 있을 것 같아요!',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '과 두런두런 이야기를 나누며 소란스러운 발렌타인을 보냈다.',
    ]);
    era.add('item:발렌타인초콜릿', 1);
    era.set('cflag:19:축제이벤트표시', 0);
  };

  handlers[95 + 14] = async (digital, me, callname) => {
    await print_event_name('팬 대감사제', digital);
    await digital.say_and_wait([
      '디지땅, ',
      digital.get_colored_name(),
      '만의 축제가 드디어 왔습니다! 와아아, 이 주변 풍경 좀 보세요. 그야말로 팬들의 천국……',
    ]);
    await era.printAndWait([
      '팬 대감사제라…… 말 그대로 아이돌 속성을 가진 레이스 ',
      digital.get_uma_sex_title(),
      '들이 응원해 주는 팬들에게 보답하는 행사였다.',
    ]);
    await era.printAndWait('말은 그렇지만, 사실 분위기는 학원 축제와 비슷했다.');
    await era.printAndWait([
      '하지만 ',
      digital.get_colored_name(),
      ', 올해 네가 맡은 역할은 단순한 팬이 아니라고!',
    ]);
    await me.say_and_wait('사실 오늘 너는 응원을 받는 쪽이란 말이야!');
    await digital.say_and_wait('그아악!');
    await digital.say_and_wait('아뇨아뇨, 저 같은 사람이 어떻게……');
    await era.printAndWait([
      '「그럴 리가 없다」는 표정을 짓는 ',
      digital.get_colored_name(),
      '. 예전 같았으면 정말 그랬을지도 모르겠지만……',
    ]);
    await me.say_and_wait(
      '그렇게 많은 레이스에서 훌륭한 성적을 거뒀으니 이제 자각 좀 하라고. 이전 경력 때문에 팬이 많다고는 하지만, 새로운 팬들도 엄청나게 늘었단 말이지.',
    );
    await era.printAndWait([
      '정곡을 찔린 듯한 ',
      digital.get_colored_name(),
      '은 두 손 두 발 다 들었다. 아무래도 마음의 준비를 해야 할 것 같았다.',
    ]);
    await era.printAndWait([
      '이윽고 사인회장에 도착한 ',
      digital.get_colored_name(),
    ]);
    await era.printAndWait([
      '처음에는 ',
      digital.get_colored_name(),
      '도 좀처럼 적응하지 못하는 듯했으나, 그 뒤의 ',
      digital.sex,
      '는……',
    ]);
    await digital.say_and_wait('네네! 여기 색지에 정성껏 이름을 써 드렸답니다!');
    await era.printAndWait('심지어 모든 팬이 웃으며 줄을 서게 만들었다고?!');
    await digital.say_and_wait(
      '저도 예전에는 계속 최애를 미는 쪽이었으니까요…… 팬분들의 마음은 누구보다 잘 읽을 수 있거든요.',
    );
    await digital.say_and_wait([
      '그리고 ',
      callname,
      ', 이따가 제가 이 회장을 좀 최적화해도 될까요? 허락만 해주신다면 디지땅의 주최자 혼이 무엇인지 보여드릴게요!',
    ]);
    await era.printAndWait([
      '스태프에게 허가를 받은 뒤, ',
      digital.get_colored_name(),
      '은 즉시 회장 곳곳을 휩쓸며 온갖 이벤트들을 완벽하게 개선해 나갔다.',
    ]);
    await era.printAndWait([
      '그 소식이 ',
      get_chara_talk(17).get_colored_name(),
      '의 귀에까지 들어가, ',
      digital.sex,
      '가 직접 수많은 ',
      digital.get_uma_sex_title(),
      '들을 이끌고 감사를 표하러 오자……',
    ]);
    await digital.say_and_wait('이게 무슨 일이죠, 제가 최애가 된 하루인가요?!');
    await era.printAndWait([
      '감격에 겨워 기절한 ',
      digital.get_colored_name(),
      '의 오늘 하루의 분투가 드디어 끝났다.',
    ]);
    era.set('cflag:19:축제이벤트표시', 0);
  };

  handlers[95 + 29] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:0:위치') !== era.get('cflag:19:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('여름 합숙 시작', digital);
    await digital.say_and_wait(
      '우구구, 올해, 올해 딱 한 번만…… 시간이 없어! 멈춰야 해!',
    );
    await era.printAndWait([
      '여름 합숙이 시작되자마자 머리를 감싸 쥐고 비명을 지르는 ',
      digital.get_colored_name(),
      '이 보였다. 뭐랄까, 오랫동안 ',
      digital.get_colored_name(),
      '을 지켜본 ',
      me.get_colored_name(),
      '도 서서히 깨달아가고 있었다. ',
      digital.sex,
      '에게는 동인지를 만드는 취미가 있다는 것을.',
    ]);
    await era.printAndWait([
      digital.sex,
      '는 자신이 만든 동인지를 코미케에 내놓고 포교하는 것에 상당한 열정을 가지고 있었다.',
    ]);
    await era.printAndWait('하필이면 가장 큰 코미케가 이 여름 합숙 기간과 겹쳐 있었다.');
    await digital.say_and_wait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '! 이번 여름엔 ',
      sys_get_colored_callname(19, 61),
      ' 신간은 내지 않겠어요. 레이스에 모든 힘을 쏟아붓겠습니다!',
    ]);
    await era.printAndWait([
      '아무래도 ',
      digital.get_colored_name(),
      '도 이번 티엠 오페라 오 및 메이쇼 도토와의 대결을 굉장히 중요하게 여기는 듯했다. 이번 여름 합숙은 걱정할 필요가 없을 것 같았다.',
    ]);
    const halo = get_chara_talk(61);
    await halo.say_and_wait('어라, 그럼 나는 당분간 볼 수 없겠네.');
    await digital.say_and_wait([
      '호엣! ',
      sys_get_colored_callname(19, 61),
      '!',
    ]);
    await halo.say_and_wait([
      '그것보다 ',
      sys_get_colored_callname(61, 19),
      ', 너 올해 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '에 나갈 거지?',
    ]);
    await digital.say_and_wait([
      '네, 네에…… 그동안 ',
      sys_get_colored_callname(19, 61),
      '께 몸도 마음도 단련 받았으니까요…… 드디어 ',
      sys_get_colored_callname(19, 15),
      ', ',
      sys_get_colored_callname(19, 58),
      '와 결전을 치를 때가 왔어요!',
    ]);
    await halo.say_and_wait([
      '그렇다면 이번 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '은 세 명—— 아니, 네 명의 대결이 되겠네.',
    ]);
    await digital.say_and_wait([
      '에? 또 다른 실력파 ',
      digital.get_uma_sex_title(),
      '님이 계신가요?',
    ]);
    await halo.say_and_wait([
      '올해 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      ', 분명 보러 갔었지?',
    ]);
    await digital.say_and_wait([
      '그야 당연하죠, 저는 ',
      digital.get_colored_name(),
      '이니까요! 아하하하…… 설마……',
    ]);
    await era.printAndWait([
      '사실 ',
      me.get_colored_name(),
      '도 며칠 전 소문을 들은 적이 있었다. 그것은 바로……',
    ]);
    await halo.say_and_wait([
      '쿠로후네가 올해 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '에 나간다는 소식이야.',
    ]);
    await era.printAndWait([
      '쿠로후네…… 올해 NHK 마일을 제패한 ',
      digital.get_uma_sex_title(),
      '. 가공할 만한 발걸음을 가진 자였다.',
    ]);
    await era.printAndWait([digital.sex, '도 이 레이스에 참전한다는 것이었다.']);
  };

  handlers[95 + 48] = async (digital, me, callname) => {
    era.set('cflag:19:축제이벤트표시', 0);
    const emperor = get_chara_talk(17);
    await print_event_name('크리스마스', digital);
    await era.printAndWait([
      '트레센 학원은 크리스마스 자율 활동을 대체로 지지하는 편이었다. ',
      digital.get_uma_sex_title(),
      '들에게 있어 이날은 특별한 날이기 때문이다.',
    ]);
    await era.printAndWait([
      '교외 활동 외에도, 조금은 독특한 ',
      digital.get_uma_sex_title(),
      '들을 배려하여 학원 내부에서도 대형 행사가 열렸다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '과 함께 여러 행사장을 누비며 음식을 얻어먹고 게임을 즐겼으며, ',
      digital.get_colored_name(),
      '과 열띤 토론을 벌였다.',
    ]);
    await era.printAndWait([
      '갑자기 ',
      emperor.get_colored_name(),
      '와 그 일행이 ',
      me.get_colored_name(),
      '의 앞에 나타났다.',
    ]);
    await digital.say_and_wait('우와와아, 저희가 너무 시끄러웠나요?');
    await emperor.say_and_wait('너무 걱정 말게. 오히려 포상이라고 봐야겠지.');
    await era.printAndWait([
      '이윽고 ',
      digital.sex,
      '는 등 뒤에서 커다란 선물 상자를 꺼내 ',
      digital.get_colored_name(),
      '에게 건넸다……',
    ]);
    await digital.say_and_wait('이건……');
    await era.printAndWait([
      digital.get_colored_name(),
      '이 선물 상자를 열자, 그 안에는——',
    ]);
    await era.printAndWait('색지 뭉치였다…… 안에는 빼곡하게 온갖…… 이름들이 적혀 있었다?');
    await digital.say_and_wait('아뇨, 이건, 이건……! 사인이잖아요!');
    await era.printAndWait([
      '사인! 자세히 보니 거기에는 우리에게 친숙한 수많은 ',
      digital.get_uma_sex_title(),
      '들의 친필 사인이 담겨 있었다?!',
    ]);
    await digital.say_and_wait(
      '아아아아…… 이걸 낱개로 사려고 해도 대체 얼마일까요…… 제 통장 잔고가 얼마나 남았더라……',
    );
    await emperor.say_and_wait([
      '이것은 그동안 ',
      sys_get_colored_callname(17, 19),
      '에게 도움을 받았거나 격려를 받았던 수많은 ',
      digital.get_uma_sex_title(),
      '들의 감사의 표시다. 게다가 학생회장으로서 학원 홍보에 힘써준 점에 대해서도 깊이 감사하고 있고.',
    ]);
    await emperor.say_and_wait([
      '게다가 자네의 취향이…… 조금 독특하지 않은가. 그래서 ',
      sys_get_colored_callname(17, 19),
      ', 자네를 좋아하는 모든 ',
      digital.get_uma_sex_title(),
      '들을 모집해 이 선물을 준비했다네.',
    ]);
    await era.printAndWait([
      '이 거대한 선물을 받은 ',
      digital.get_colored_name(),
      '은……',
    ]);
    await digital.say_and_wait('아와와와…… 이것이 설마…… 덕질하는 자, 결국 덕질당하게 된다는 그것인가요……');
    await say_by_passer_by_and_wait('군중', [
      '메리 크리스마스! ',
      digital.get_colored_name(),
      '!',
    ]);
    await digital.say_and_wait([callname, '! ', callname, '! 이건……']);
    await era.printAndWait([
      '즉시 감격하여 기절하듯 ',
      me.get_colored_name(),
      '에게 기댔다.',
    ]);
    await era.printAndWait([
      '뜻밖에도 입장이 바뀐 ',
      digital.get_colored_name(),
      '은 오늘만큼은 누군가의 최애가 되는 즐거움을 누렸다.',
    ]);
  };

  /** @this CustomizedEdu */
  handlers.palace = async function (digital, me) {
    await CustomizedEdu.common_palace(digital, me);
    const races = RaceHistory.get(19).get();
    if (
      check_aim_race(races, race_enum.hyac_sta, 1, 1) &&
      check_aim_race(races, race_enum.nhk_cup, 1, 1) &&
      check_aim_race(races, race_enum.japa_dir, 1, 1) &&
      check_aim_race(races, race_enum.mile_cha, 1, 1) &&
      check_aim_race(races, race_enum.tenn_sho, 2, 1)
    ) {
      era.drawLine();
      era.set('flag:현재위치', location_enum.gate);
      await print_event_name('세계의 여행자', digital);
      era.set('flag:현재위치', location_enum.office);
      await digital.print_and_wait([
        digital.get_colored_name(),
        '은 여전히 도전을 멈추지 않으며, 훗날의 해외 원정을 위해 노력하고 있었다.',
      ]);
      await digital.print_and_wait([
        '단순히 승리를 위해서만이 아니라, 동지와 함께 더 많은 ',
        digital.get_uma_sex_title(),
        '들을 만나기 위함이었다.',
      ]);
      await digital.print_and_wait('선행 조사를 위해 마련된, 아는 사람이 거의 없는 비행기 편……');
      await digital.print_and_wait('출발하기 직전……');
      await digital.print_and_wait('이런 이런, 꽤 낯익은 얼굴들이 많이 왔군요.');
      await digital.print_and_wait([
        get_chara_talk(61).get_colored_name(),
        ', ',
        get_chara_talk(15).get_colored_name(),
        ', ',
        get_chara_talk(58).get_colored_name(),
        ', ',
        get_chara_talk(32).get_colored_name(),
        '…… 그리고 쿠로후네까지?',
      ]);
      await digital.print_and_wait(
        '잠시 떠나서 해외 환경에 적응하려는 것뿐이니, 여행에 더 가깝다고 할 수 있겠지.',
      );
      await digital.print_and_wait('그런데도 이렇게 많은 사람들이 작별인사를 하러 오다니.');
      await digital.print_and_wait([
        digital.get_colored_name(),
        ', 정말 대단하네.',
      ]);
      await digital.say_and_wait([
        '그치만, 전 이제 더는 못 기다려요! 이국의 만남을, 동지와 함께 세계 각지의 ',
        digital.get_uma_sex_title(),
        '짱들과 조우하고 싶다구요!',
      ]);
      await digital.print_and_wait([
        '세계의 여행자, ',
        digital.get_colored_name(),
        '은 지금도 여전히 달리는 중이었다.',
      ]);
    } else {
      await CustomizedEdu.common_palace_relation(digital, me);
    }
  };
};