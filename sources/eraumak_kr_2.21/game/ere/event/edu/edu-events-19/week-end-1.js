const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[42] = async (digital, me, callname) => {
    const halo = get_chara_talk(61);
    await print_event_name(
      [race_infos[race_enum.mile_cha].get_colored_name(), ' 관람'],
      digital,
    );
    await era.printAndWait([
      '비록 ',
      digital.get_colored_name(),
      '은 아직 데뷔 첫해라 레이스에 나가고 싶어도 선택지가 많지 않았지만, 다른 ',
      digital.get_uma_sex_title(),
      '들에게 요즘은 가장 바쁜 시기였다.',
    ]);
    await era.printAndWait([
      '이번에 ',
      me.get_colored_name(),
      '과(와) ',
      digital.get_colored_name(),
      '이 보러 온 레이스는 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '이다.',
    ]);
    await era.printAndWait([
      '이 레이스에는 ',
      digital.get_colored_name(),
      '이 열렬히 응원하는 ',
      digital.get_uma_sex_title(),
      '중 한 명인——',
      halo.get_colored_name(),
      '도 출주한다.',
    ]);
    await digital.say_and_wait([callname, '! 여기에요, 여기!']);
    await era.printAndWait([
      '좋은 자리를 선점한 ',
      digital.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '을(를) 향해 손을 흔들었고, ',
      me.get_colored_name(),
      '은(는) 간신히 인파를 비집고 들어갔다.',
    ]);
    await digital.say_and_wait([
      '곧 시작해요! ',
      sys_get_colored_callname(19, 61),
      '가 나온다구요!',
    ]);
    await era.printAndWait('그리고……');
    await say_by_passer_by_and_wait('해설', [
      '이어서 들어오는 것은 ',
      halo.get_colored_name(),
      '! 외곽에서 치고 올라옵니다, ',
      halo.get_colored_name(),
      ' 2착으로 골인!',
    ]);
    await era.printAndWait([
      '2착이라니, ',
      halo.get_colored_name(),
      '의 최근 전적을 생각하면 아주 훌륭한 결과였다.',
    ]);
    await halo.say_and_wait(
      '전국의 나의 팬들이여, 비록 우승하지 못한 것은 유감이다만……',
    );
    await halo.say_and_wait(
      '나는 반드시 굴레를 벗어던질 거야. 앞으로도 단거리와 마일 노선을 계속해서 걸어가겠어. 이것이 이 킹의 새로운 길이야! 오-홋홋홋!',
    );
    await digital.say_and_wait(
      '우오오오옷…… 정말이지, 너무나도 감동적이에요! 새로운 길을 선택하다니, 얼마나 큰 용기와 각오가 필요했을지!',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '은 감동의 눈물을 흘리며 ',
      me.get_colored_name(),
      '에게 ',
      halo.get_colored_name(),
      '의 이력에 대해 떠들기 시작했다.',
    ]);
    await era.printAndWait([
      halo.get_colored_name(),
      '는 본래 자신의 재능을 증명하기 위해 클래식 전선에 집중해 온 ',
      digital.get_uma_sex_title(),
      '였으나, 올해는 노선을 변경하여 새로운 목표를 정한 것이었다.',
    ]);
    await digital.say_and_wait(
      '어느 쪽 노선이든 자신의 강함을 증명할 수 있는 법이라구요!',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '은 데뷔한 이후로 예전과는 생각이 많이 달라진 듯했다. 레이스 우마무스메로서의 관점에서 경기장 안팎의 여러 상황을 더 깊이 이해하게 된 모양이었다.',
    ]);
    await era.printAndWait([
      halo.get_colored_name(),
      '의 노력이 보상받기를 진심으로 바랐기에 ',
      digital.get_colored_name(),
      '은 직접 레이스를 보러 온 것이었고, ',
      halo.get_colored_name(),
      '가 마침내 고진감래의 결실을 맺자 ',
      digital.sex,
      '는 경기장의 누구보다도 크게 울었다.',
    ]);
    era.drawLine({ content: '돌아가는 길' });
    await era.printAndWait([
      '학원 옆 개울가에서 진흙탕을 가르며 고개를 숙인 채 달리고 있는 한 ',
      digital.get_uma_sex_title(),
      '를 발견했다.',
    ]);
    const dotou = get_chara_talk(58);
    await digital.say_and_wait([
      '오오옷! ',
      sys_get_colored_callname(19, 58),
      '네요……',
    ]);
    await era.printAndWait([
      dotou.get_colored_name(),
      '는 조금 낙담한 기색이었지만, 여전히 이곳에서 훈련에 매진하고 있었다.',
    ]);
    await era.printAndWait([
      '음…… ',
      dotou.get_colored_name(),
      ', 전부터 계속 저런 상태 아니었나?',
    ]);
    await era.printAndWait([
      dotou.get_colored_name(),
      '가 최근 성적이 좋지 않은 것을 트레이너인 ',
      me.get_colored_name(),
      '은(는) 잘 알고 있었다. ',
      dotou.sex,
      '는 아직 본격화 시기가 오지 않았을 뿐이었지만, 본인은 정작 그 사실을 깨닫지 못한 듯했다.',
    ]);
    await digital.say_and_wait(
      '본격화…… 스스로 알지 못한다면 역시 무척 괴롭겠죠……',
    );
    await digital.say_and_wait([
      '예전의 저라면 아마 ',
      sys_get_colored_callname(19, 58),
      '의 노력만을 봤겠지만, 지금의 저는……',
    ]);
    await digital.say_and_wait('적어도, 그 사실을 안다는 것만으로도 마음이 놓이네요……');
    await me.say_and_wait(['왜 그래, 가서 말해주지 않는 거야?']);
    await digital.say_and_wait(
      '에엣? 아뇨아뇨…… 전 어디까지나 일개 팬이라구요? 팬이 감히 아이돌에게 조언을 할 수는 없죠! 매니저한테 끌려나갈 거라구요!',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '은 도와주고 싶어 하면서도, 자신이 너무 선을 넘는 것은 아닌가 고민하고 있었다.',
    ]);
    await digital.say_and_wait(
      '현실적인 예로 들자면, 장사가 안되는 국숫집 사장님을 보고 단지 때가 안 왔을 뿐이라고 위로하는 꼴이라구요?!',
    );
    await me.say_and_wait(
      '아니 아니, 이건 확실히 근거가 있는 얘기라구…… 그나저나 디지털, 너 아직도 자신을 팬이라고만 생각하는 거야?',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 지적에 ',
      digital.get_colored_name(),
      '은 움찔했다. ',
      digital.get_colored_name(),
      '은 더 이상 단순한 팬이 아니라, 한 명의 레이스 우마무스메로서 경기장에 서 있다는 사실을 상기시켰다.',
    ]);
    await digital.say_and_wait([
      '아, 음, 그렇긴…… 비록 제가 데뷔는 했지만, ',
      sys_get_colored_callname(19, 58),
      '와 저 사이에는 넘을 수 없는 벽이 있다구요……',
    ]);
    await me.say_and_wait([
      '너와 도토, 그리고 다른 레이스 우마무스메들의 격차는 네 생각보다 작아!',
    ]);
    await me.say_and_wait([
      '매일같이 관찰해왔기에 너는 ',
      sys_get_colored_callname(0, 58),
      '가 직면한 문제를 볼 수 있었던 거야. 하지만 그렇기에 오히려 자신을 관찰자로만 두고 무리의 일원이 아니라고 생각하는 거지.',
    ]);
    await era.printAndWait([digital.get_colored_name(), '은 고개를 떨구었다.']);
    await digital.say_and_wait(
      '으으…… 그렇긴 하지만, 지금 당장 아이돌에게 가서 말을 걸라니 저는 좀……',
    );
    await digital.say_and_wait('왠지, 대담한 생각이 들어버렸어요……');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 마침내 마음을 굳히고, ',
      dotou.get_colored_name(),
      '를 돕기로 결심했다.',
    ]);
    await era.printAndWait([
      digital.sex,
      '는 강둑의 울타리를 뛰어넘어 단숨에 미끄러져 내려가 도토의 앞에 나타났다. 실로 굉장한 등장 방식이었다.',
    ]);
    await digital.say_and_wait([
      '저, 저저저기! ',
      sys_get_colored_callname(19, 58),
      '! 잠시 실례해도 될까요?!',
    ]);
    await dotou.say_and_wait('에에엣, 무, 무무무슨 일이시죠?');
    await digital.say_and_wait('본격화, 라는 거 알고 계시나요?!');
    await dotou.say_and_wait('에헤? 그게 뭔가요?');
    await digital.say_and_wait('본격화라는 건 말이죠, 그러니까……');
    await era.printAndWait('언덕 위에서 지켜보고 있으면 별문제 없겠지?');
    await digital.say_and_wait('그리고 본격화가 오는 시기는 대체로……');
    await era.printAndWait('음, 제법 상세하게 설명하고 있군.');
    await digital.say_and_wait(
      '아 참, 본격화 시기에 맞춰 단련하고 싶다면 발목 부분을 주의해야……',
    );
    await era.printAndWait('오호, 트레이너 자격시험에서도 깊게 다루지 않는 내용까지 나오는군.');
    await digital.say_and_wait(
      '……본격화가 오기 전의 훈련이 결코 헛수고라는 건 아니에요.',
    );
    await digital.say_and_wait(
      '지금 허벅지 근육을 미리 단련해두면, 본격화 시기에 폭발적으로 성장할 수 있다구요!',
    );
    await era.printAndWait([
      '아니, 저건 거의 최신 연구 결과인데. ',
      me.get_colored_name(),
      '은(는) 저 내용이 얼마 전 《트레이너 월간지》에 실렸던 논문 내용임을 기억해 냈다.',
    ]);
    era.drawLine({ content: '트레이닝실로 돌아왔을 때' });
    await digital.say_and_wait([
      '와와와와! 저질러버렸어요! 현실의 존재로서 제 눈에 상을 맺고 있는 ',
      sys_get_colored_callname(19, 58),
      '에게…… 그만 정신없이……',
    ]);
    await era.printAndWait([
      '사실 ',
      dotou.get_colored_name(),
      '는 나중에 갈수록 무슨 소린지 몰라 어리둥절해하긴 했지만, 언덕 위에서 보기에 어느 정도 기운을 차린 듯했다.',
    ]);
    await era.printAndWait([digital.get_colored_name(), '도 분명 알고 있을 것이다.']);
    await me.say_and_wait([
      '하지만 도토도 꽤 수확이 있었다고 생각하지 않을까?',
    ]);
    await era.printAndWait([
      '……',
      digital.get_colored_name(),
      '은 그저 가슴을 부여잡고 있었다.',
    ]);
    await era.printAndWait([
      '가장 좋아하는 아이돌과 처음으로 대화를 나눴으니, ',
      digital.get_colored_name(),
      '의 부담도 상당했을 터였다.',
    ]);
    await era.printAndWait([
      '……하지만 ',
      digital.get_colored_name(),
      '의 그 기관총 같은 말솜씨를 보니, 사실 디지털은 사실 꽤 대단한 녀석일지도 모르겠다.',
    ]);
  };

  handlers[47 + 24] = async (digital, me) => {
    await print_event_name(
      [race_infos[race_enum.takz_kin].get_colored_name()],
      digital,
    );
    const dotou = get_chara_talk(58),
      opera = get_chara_talk(15);
    await era.printAndWait([
      '이날은 바로 ',
      opera.get_colored_name(),
      '와 ',
      dotou.get_colored_name(),
      '의 첫 대결 날이었다.',
    ]);
    await digital.say_and_wait(
      '아아, 피할 수 없는 그날이 결국 오고 말았군요! 뇌가 멈추질 않아요!',
    );
    await digital.say_and_wait(
      '꿈속에서나 그리던 레이스! 아니, 꿈은 결코 현실의 레이스를 따라올 수 없죠!',
    );
    await digital.say_and_wait('어쩌죠, 전신에 야광봉을 도배하고 응원하러 갈까요?!');
    era.printButton('「아니, 그러다간 보안 요원에게 끌려나갈걸.」', 1);
    await era.input();
    await era.printAndWait([
      '그렇게 도착한 한신 경기장, ',
      opera.get_colored_name(),
      '와 ',
      dotou.get_colored_name(),
      '의 격전이라니……',
    ]);
    await era.printAndWait([
      opera.get_colored_name(),
      '의 실력은 ',
      me.get_colored_name(),
      '도 잘 알고 있었지만, ',
      dotou.get_colored_name(),
      '가 이 정도까지 올라올 줄은……',
    ]);
    await era.printAndWait([
      '마지막에는 거의 동시에 들어왔고, ',
      opera.get_colored_name(),
      '가 ',
      dotou.get_colored_name(),
      '를 간발의 차로 앞섰다.',
    ]);
    await era.printAndWait(
      '무엇 때문일까, 단순한 본격화만으로는 이런 극적인 변화까지 설명할 수 없을 텐데……',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '이 ',
      digital.sex,
      '를 이렇게 만든 것일까?',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 정말 대단하다고 해야 할까…… ',
      digital.get_colored_name(),
      '을 슬쩍 쳐다보니, 역시나 ',
      digital.sex,
      '는 넋을 잃은 채 머리를 흔들고 있었다.',
    ]);
    await digital.say_and_wait('에헤와와와와……', true);
    await digital.say_and_wait('으으음……', true);
    await digital.say_and_wait('방금 그건 대체…… 그 광채는 뭐죠?', true);
    await digital.say_and_wait('전 방금 전까지만 해도…… 「존귀함」이라는 생각조차 잊어버릴 정도로……', true);
    await digital.say_and_wait(
      [
        '그건 ',
        sys_get_colored_callname(19, 15),
        '과 ',
        sys_get_colored_callname(19, 58),
        '이었기 때문일까요…… ',
        digital.sex,
        '들이 특별하기 때문인 걸까요?',
      ],
      true,
    );
    await era.printAndWait([
      '그렇게 ',
      digital.get_colored_name(),
      '은 아직 그 본질을 완전히 깨닫지 못했음에도, 바통은 ',
      digital.get_colored_name(),
      '에게 넘어왔다. 다음은 ',
      digital.get_colored_name(),
      '이 활약할 ',
      race_infos[race_enum.japa_dir].get_colored_name(),
      '의 무대였다.',
    ]);
  };

  handlers[47 + 29] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:0:위치') !== era.get('cflag:19:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('여름 합숙 도중', digital);
    await era.printAndWait([
      '여름 합숙이 시작된 첫 주, ',
      digital.get_colored_name(),
      '은 훈련을 게을리하지는 않았지만…… 어쩐지 ',
      digital.get_colored_name(),
      '은 조금 정신이 딴 데 팔려 있는 것 같았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '도 짐작 가는 바가 있었다. ',
      digital.get_colored_name(),
      '이 뭔가 다른 것을 준비하고 있는 듯했지만, 그것도 ',
      digital.get_colored_name(),
      '의 소중한 취미였기에 딱히 무어라 말하기가 어려웠다.',
    ]);
    era.printButton('「어떻게 하면 좋을까……」', 1);
    await era.input();
    const halo = get_chara_talk(61);
    await era.printAndWait([
      '근력 트레이닝을 하는 ',
      digital.get_colored_name(),
      '을 지켜보던 중, ',
      me.get_colored_name(),
      '은(는) 우연히 저 멀리 백사장에서 바다를 바라보고 서 있는 ',
      halo.get_colored_name(),
      '를 발견했다.',
    ]);
    await era.printAndWait([
      halo.get_colored_name(),
      '는 ',
      digital.get_colored_name(),
      '이 예전부터 열렬히 응원하던 ',
      digital.get_uma_sex_title(),
      '로, 당시의 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '을 ',
      digital.get_colored_name(),
      '과 ',
      me.get_colored_name(),
      '이(가) 함께 보러 가기도 했었다.',
    ]);
    await era.printAndWait(['최근 ', digital.sex, '의 전적은 점차…… 미묘해지고 있었다.']);
    await era.printAndWait([
      digital.get_colored_name(),
      '도 ',
      halo.get_colored_name(),
      '를 발견했는지, 팬으로서 ',
      digital.sex,
      '의 기분도 조금 가라앉은 듯 보였다.',
    ]);
    await me.say_and_wait([
      '저기, ',
      sys_get_colored_callname(19, 61),
      '에게 가서 응원이라도 해드리는 게 어때?',
    ]);
    await digital.say_and_wait(
      '음…… 팬으로서 아이돌을 응원하는 건 당연한 도리죠…… 좋아! 결정했어요, 일단 손에 든 원고는 내려놓겠어요!',
    );
    await me.say_and_wait('원고? 무슨 원고?');
    await digital.say_and_wait('회지 원고 말이에요.');
    await me.say_and_wait('무슨 회지인데?');
    await digital.say_and_wait('그냥 평범한 동인지 원고라구요.');
    await era.printAndWait('무슨 소린지 도통 모르겠다……');
    await digital.say_and_wait([
      '원래는 곧 열릴 행사에서 ',
      sys_get_colored_callname(19, 61),
      '의 동인지를 팔아서, 모두에게 ',
      sys_get_colored_callname(19, 61),
      '의 매력을 알리려고 했는데……',
    ]);
    await halo.say_as_unknown_and_wait(
      '킹의 동인지라니, 그런 건 본인도 들어본 적이 없는데 말이야.',
    );
    await digital.say_and_wait([
      '아앗, 그런 걸 본인이 알게 되는 건 금기라구요! 당연히 ',
      sys_get_colored_callname(19, 61),
      '에게는…… 히익! ',
      sys_get_colored_callname(19, 61),
      '?!',
    ]);
    await era.printAndWait('주인공이 동인지 속에서 튀어나온 꼴이었다.');
    await digital.say_and_wait('방금 그건 다 농담이었어요! 그냥 제 쓸데없는 망상일 뿐이라구요!');
    await halo.say_and_wait(
      '후훗, 뭐 고맙군. 덕분에 기운이 좀 나네, 오호호호! 킹의 매력은 역시 일류라니까!',
    );
    await halo.say_and_wait([
      '그나저나 묻고 싶은 게 있는데, ',
      sys_get_colored_callname(61, 19),
      ', 너 올해 『',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '』에 출주할 생각이지?',
    ]);
    await digital.say_and_wait([
      '에엣? 네! 작년 레이스에서 킹 씨에게 큰 감동을 받았기 때문에, 저도 조금이라도 가까워지고 싶어서…… 그런데…… 어째서 ',
      sys_get_colored_callname(19, 61),
      '가……',
    ]);
    await halo.say_and_wait('나도 출주할 예정이거든.');
    await era.printAndWait([
      halo.get_colored_name(),
      '도 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '에 출주하게 되어, ',
      digital.get_colored_name(),
      '과 같은 무대에서 경쟁하게 되었다.',
    ]);
    await digital.say_and_wait('!');
    await era.printAndWait([
      digital.get_colored_name(),
      '의 얼굴에 갑자기 그늘이 드리워졌다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 긴 커리어 속에서 ',
      halo.get_colored_name(),
      '가 전성기를 지나 서서히 슬럼프에 빠지고 있다는 사실을 잘 알고 있었다.',
    ]);
    await digital.say_and_wait([
      '저기, ',
      sys_get_colored_callname(19, 61),
      '……주제넘은 소리인 줄은 알지만…… 저, 당신을 응원할게요.',
    ]);
    await digital.say_and_wait('그게…… 설령 라이벌이라 해도, 응원하고 싶은 팬의 마음은 변함없으니까요……');
    await era.printAndWait([
      '이런 상황에서 ',
      digital.get_colored_name(),
      '의 마음은 복잡했다. 동경하는 아이돌과 같은 무대에서 뛴다는 것은 꿈만 같은 일이었지만, 만약 상대하는 아이돌이 이미 쇠퇴하기 시작한 상태라면?',
    ]);
    await me.say_and_wait('디지털!');
    await digital.say_and_wait('!');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 움찔하며 무고한 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await me.say_and_wait([
      '디지털, 너도 잘 알 텐데. 경기장 위에 선 ',
      digital.get_uma_sex_title(),
      '는——',
    ]);
    await halo.say_and_wait([
      sys_get_callname(61, 0),
      ', 미안하지만 말 좀 끊을게. ',
      sys_get_colored_callname(61, 19),
      ', 제안할 게 하나 있어.',
    ]);
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      ', 이 합숙이 끝날 때쯤에 우리 같이 레이스 한 판 하자고.',
    ]);
    await digital.say_and_wait('하앗?! 우오옷? 아이돌과 레이스라니, 그런 건 무리예요……');
    await me.say_and_wait([sys_get_colored_callname(0, 61), '…… 정말 고마워.']);
    await halo.say_and_wait([
      '상관없어. 일류 ',
      digital.get_uma_sex_title(),
      '라면 당연히 일류 팬에게 보답해야 하는 법이지——오호호호!',
    ]);
    await era.printAndWait([
      halo.get_colored_name(),
      '는 ',
      digital.get_colored_name(),
      '의 망설임을 꿰뚫어 보고 ',
      digital.sex,
      '에게 함께 달릴 것을 청했다.',
    ]);
    await era.printAndWait([
      '그리하여 남은 여름 합숙 기간 동안, ',
      digital.get_colored_name(),
      '은 마지막 날에 ',
      halo.get_colored_name(),
      '와 함께 모의 레이스를 펼치게 되었다.',
    ]);
  };

  handlers[47 + 32] = async (digital, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach &&
      era.get('cflag:0:위치') !== era.get('cflag:19:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('여름 합숙 종료', digital);
    await digital.say_and_wait('헤헤…… 후우…… 대결해 주셔서 정말 감사합니다……');
    const halo = get_chara_talk(61);
    await era.printAndWait([
      '여름 합숙의 마지막 날, 예정되었던 ',
      digital.get_colored_name(),
      '과 ',
      halo.get_colored_name(),
      '의 대결이 이루어졌다……',
    ]);
    await era.printAndWait('그런데, 분위기가 조금…… 가벼운데?');
    await halo.say_and_wait([
      '하아…… 후우…… ',
      sys_get_colored_callname(61, 19),
      ', 너의 발걸음, 꽤나 망설하고 있구나. 무슨 일이야?',
    ]);
    await digital.say_and_wait(
      '아뇨, 그게…… 계속해서 눈앞에 섬광탄이 터지는 기분이랄까, 공기 중에 섞인 존귀함 때문에 질식할 것 같달까……',
    );
    await digital.say_and_wait(
      '전 예전까지 늘 관객석에 있던 쪽이라…… 감히 따라잡겠다는 생각을 하다니, 너무 건방졌던 것 같아요……',
    );
    await digital.say_and_wait(
      '저도 사실 최근에야 겨우 『진심으로 달리겠다』는 각오를 다진 평범한 우마무스메일 뿐이라서……',
    );
    await halo.say_and_wait([
      '어머, 자신감이 상당히 부족해 보이네. 하지만 정말 그뿐일까? ',
      sys_get_callname(61, 0),
      ', ',
      sys_get_colored_callname(61, 19),
      '의 실력, 당신은 알고 있지?',
    ]);
    await me.say_and_wait('지금 같은 더트 코스라면 디지털이 지지 않을 거야.');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 여전히 지금의 ',
      halo.get_colored_name(),
      '를 신경 쓰고 있었다.',
    ]);
    await digital.say_and_wait([
      sys_get_colored_callname(19, 61),
      '…… 지금은…… 예전과는 너무 다르잖아요…… 그렇죠……',
    ]);
    await digital.say_and_wait([
      '올해 봄, 『',
      race_infos[race_enum.takm_kin].get_colored_name(),
      '』에서의 승리, 그리고 나서…… 유려한 주행 폼과 몸의 생동감이 이번 레이스에는 전혀 느껴지지 않았는걸요……',
    ]);
    await digital.say_and_wait(
      '전 알고 있어요. 매번 울타리를 붙잡고 몸을 내밀며 지켜봐 왔으니까요.',
    );
    await digital.say_and_wait([
      '지금 ',
      sys_get_colored_callname(19, 61),
      '가 얼마나 고통스러울지, 저도 데뷔를 했기 때문에…… 이제는 조금이나마 알 것 같아요……',
    ]);
    await era.printAndWait([
      '레이스 우마무스메가 된 ',
      digital.get_colored_name(),
      '은 예전보다 더 많은 것을 보고 느낄 수 있게 되었고, 이런 감정 또한 예외는 아니었다.',
    ]);
    await halo.say_and_wait([
      '그래서 그럴 기분이 아니라는 거니…… 흐음, 과연…… ',
      sys_get_colored_callname(61, 19),
      ', 넌 정말……',
    ]);
    await halo.say_and_wait('바보구나.');
    await digital.say_and_wait('에엣?');
    await era.printAndWait([
      '예상치 못한 말에 ',
      digital.get_colored_name(),
      '은 깜짝 놀랐다.',
    ]);
    await halo.say_and_wait('바보, 그것도 아주 심각한 바보야.');
    await halo.say_and_wait('날 잘 알고 있는 것 같지만, 넌 아직 아무것도 몰라.');
    await era.printAndWait('엄격한 말투였지만, 그 목소리에는 다정함이 깃들어 있었다.');
    await halo.say_and_wait([
      '저기, ',
      sys_get_colored_callname(61, 19),
      ', 넌 나라는 ',
      digital.get_uma_sex_title(),
      '에게 아주 관심이 많지?',
    ]);
    await digital.say_and_wait('! 네! 그럼요!');
    await halo.say_and_wait(
      '좋아, 그럼 합숙이 끝나면 내가 너에게 나와 함께 훈련할 권리를 하사해주겠어!',
    );
    await halo.say_and_wait([
      '보여줄게. ',
      halo.get_colored_name(),
      '가 어떤 ',
      digital.get_uma_sex_title(),
      '인지를!',
    ]);
    await digital.say_and_wait('부디 부탁드립니다!');
    await digital.say_and_wait([
      '너무 영광이라 꼬리가 다 삐죽 설 정도예요! 이 디지땅이 그 ',
      digital.sex_code - 1 ? '여신' : '신',
      '과 함께라니!',
    ]);
    await era.printAndWait([
      '여름의 끝자락에서 ',
      digital.get_colored_name(),
      '은 동경하는 ',
      digital.get_uma_sex_title(),
      '와 유대감을 쌓게 되었다.',
    ]);
  };

  handlers[47 + 37] = async (digital) => {
    await print_event_name('일류의 조건', digital);
    const halo = get_chara_talk(61);
    await digital.print_and_wait([
      digital.get_colored_name(),
      '이 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '을 향해 나아가는 동안, ',
      halo.get_colored_name(),
      ' 또한 동시에 노력을 거듭하고 있었다.',
    ]);
    await digital.print_and_wait([
      race_infos[race_enum.sprt_sta].get_colored_name(),
      ', 단거리 G1 레이스는 이론적으로 ',
      halo.get_colored_name(),
      '에게 유리할 터였으나……',
    ]);
    await digital.print_and_wait('——결과는 7착.');
    await digital.print_and_wait('입착조차 하지 못했다.');
    await digital.print_and_wait([
      '레이스가 끝난 직후, ',
      digital.get_colored_name(),
      '은 ',
      halo.get_colored_name(),
      '의 앞에 나타났다.',
    ]);
    await halo.say_and_wait([
      '보러 와줬구나, ',
      sys_get_colored_callname(61, 19),
      '. 상관 말고 내버려 두라고 말하고 싶지만, 너니까 특별히 나와 함께 있을 권리를 줄게.',
    ]);
    await digital.say_and_wait([
      '저기…… 비록 결과는 아쉬웠지만, ',
      sys_get_colored_callname(19, 61),
      '의 그 아름다움에 저는 다시금 감동했어요.',
    ]);
    await digital.say_and_wait('날카로운 눈빛, 뿜어져 나오는 품격, 화려한 코너링까지!');
    await halo.say_and_wait('……그뿐이야?');
    await digital.say_and_wait('에엣?');
    await halo.say_and_wait('내가 일류라고 생각하는 이유가 고작 그뿐이냐고 묻는 거야.');
    await digital.print_and_wait([
      digital.get_colored_name(),
      '은 이어서 더 많은 말을 쏟아냈지만……',
    ]);
    await halo.say_and_wait('……일류가 되기 위해 무엇보다 중요한 것이 한 가지 더 있어.');
    await digital.print_and_wait('레이스가 끝난 뒤의 경기장에는 사람들의 발길이 거의 끊겨 있었다.');
    await digital.print_and_wait([
      halo.get_colored_name(),
      '는 조용히 스타트 라인으로 걸어가 출발 자세를 취했다.',
    ]);
    await halo.say_and_wait('기회다. 지금 나와 함께 달려보겠어?');
    era.drawLine();
    await digital.print_and_wait([
      '방금 레이스를 치른 직후였기에 ',
      halo.get_colored_name(),
      '의 피로감이 눈에 띄게 드러났다.',
    ]);
    await halo.say_and_wait('하아…… 하아…… 쿨럭…… 후후훗…… 정말이지, 꼴사납네.');
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      ', 지금의 난 어때. 날카로운 눈빛도, 품격도, 화려함도 전부 사라졌지.',
    ]);
    await halo.say_and_wait('일류의 증거를 하나도 남기지 못한 내가 여전히 일류라고 생각해?');
    await digital.say_and_wait('그건…… 그게……');
    await halo.say_and_wait('하지만, 설령 이런 상태라 해도——');
    await digital.print_and_wait([
      '방금 레이스에서 보았던 날카로운 눈빛이 지금의 ',
      halo.get_colored_name(),
      '에게서 다시금 번뜩였다.',
    ]);
    await halo.say_and_wait('한 번 더 달린다면 결과가 어떨까?');
    await halo.say_and_wait('만약 안 된다면 내일 다시 달리면 어떨까?');
    await halo.say_and_wait('내일 실패하더라도 모레 또 도전한다면 어떨 것 같아?');
    await halo.say_and_wait([
      sys_get_colored_callname(61, 19),
      '! 잘 봐. 지금의 나에게 정말 아무것도 남지 않았는지!',
    ]);
    await digital.say_and_wait('!');
    await digital.say_and_wait(
      '아직 남아 있어요! 개척하는 나침반처럼, 만년설처럼 결코 변하지 않는 것이!',
    );
    await halo.say_and_wait('——불굴의 집념. 아무리 꺾여도 굴복하지 않는 마음.');
    await halo.say_and_wait('이것만큼은 그 누구도 내게서 뺏어갈 수 없지.');
    await halo.say_and_wait('이것이 바로 나, 킹이 영원한 일류인 이유야!');
    await digital.print_and_wait([
      '실력이 쇠퇴했을지언정, ',
      halo.get_colored_name(),
      '의 「일류」다운 정신과 불굴의 의지는 결코 시들지 않았다.',
    ]);
    await digital.say_and_wait([
      '오오오오…… ',
      sys_get_colored_callname(19, 61),
      '……!',
    ]);
    await digital.print_and_wait([
      '온몸이 상처투성이일지라도 ',
      halo.get_colored_name(),
      '의 모습은 이토록 아름다웠다.',
    ]);
    await halo.say_and_wait([
      '약속할게. 나는 『',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '』에서 반드시 예전의 모습으로 돌아오겠어!',
    ]);
    await halo.say_and_wait('날 동정해서 전력을 다하지 않는다면, 그건 너무나도 무례한 짓이니까 말이야.');
    await digital.say_and_wait('네, 알겠습니다. 일류의 편린…… 확실히 받았습니다.');
    await digital.say_and_wait('하지만, 이 말 한마디만은 하게 해주세요……');
    await digital.say_and_wait([
      '당신은 역시…… ',
      halo.sex_code - 1 ? '여신' : '신',
      '이세요……',
    ]);
  };

  handlers[95 + 17] = async (digital) => {
    await print_event_name(
      [race_infos[race_enum.nhk_cup].get_colored_name(), ' 관전'],
      digital,
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '와 함께 작년에 ',
      digital.get_colored_name(),
      '이 분투했던 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      '을 보러 왔다.',
    ]);
    await era.printAndWait([
      '최근 ',
      digital.get_colored_name(),
      '도 후배들에게 관심을 갖게 되었는데, 그중에서도 가장 눈길을 끄는 것은——',
    ]);
    await era.printAndWait([
      '올해 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      '에서 승리한, 요즘 아주 핫한 신인——쿠로후네였다.',
    ]);
    await digital.say_and_wait(
      '우오오오옷, 저 보폭, 저 길게 뻗은 다리! 저, 저는 이미……!',
    );
    await digital.say_and_wait([
      '쿠로후네 씨, ',
      digital.sex,
      '가, ',
      digital.sex,
      '가 제가 달렸던 저 잔디밭을 달리고 있어요!',
    ]);
    await digital.say_and_wait('가슴 속에서 뭔가가 끓어오르는 기분이에요!');
    await era.printAndWait([
      '그 즉시 ',
      digital.get_colored_name(),
      '은 울타리 쪽으로 달려갔다……',
    ]);
    await digital.say_and_wait(
      '쿠로후네 씨! 힘내세요! 앞으로 무슨 일이 있어도 선배들이 도와줄 거예요!',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '은 작년 ',
      race_infos[race_enum.nhk_cup].get_colored_name(),
      ' 이후로 많은 일을 겪어왔다.',
    ]);
    await era.printAndWait([
      '지난 1년, 다시금 새로운 세대가 등장하는 것을 보며, 대를 이어가는 발자취에 ',
      digital.get_colored_name(),
      '은 감개무량한 듯했다.',
    ]);
    await era.printAndWait([
      '다시 돌아온 ',
      digital.get_colored_name(),
      '은 다시 쿠로후네에 대해 열띤 설명을 시작했다……',
    ]);
    era.println();
    await era.printAndWait([
      '다양한 마장 적성 면에서 쿠로후네는 ',
      digital.get_colored_name(),
      '과 매우 닮아 있었기에, ',
      digital.get_colored_name(),
      '은 묘한 친밀감을 느끼는 모양이었다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 이제 단순한 아이돌 팬을 넘어, 후배를 아낄 줄 아는 선배로 성장해 있었다.',
    ]);
  };

  handlers[95 + 23] = async (digital, me) => {
    const opera = get_chara_talk(15),
      dotou = get_chara_talk(58),
      d_call_o = sys_get_colored_callname(19, 15),
      d_call_do = sys_get_colored_callname(19, 58);
    await print_event_name('용자 도전', digital);
    await era.printAndWait([
      '마침내 ',
      digital.get_colored_name(),
      '은 여름 합숙 전까지 여러 큰 레이스에 참가하며 충분한 경험을 쌓아왔다.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '과 함께 지난 레이스들을 회상하니, 정말 많은 만남이 있었음을 실감했다.',
    ]);
    await digital.say_and_wait([
      '좋아! 이제 때가 왔어요! 중요한 승부처에요! ',
      d_call_o,
      '와 ',
      d_call_do,
      '에게 도전장을 내밀 때라구요!',
    ]);
    await digital.say_and_wait('음…… 잠깐만요, 어떤 레이스를 선택하는 게 좋을까요?');
    await era.printAndWait([
      '확실히 그렇긴 했다. ',
      opera.get_colored_name(),
      '와 ',
      dotou.get_colored_name(),
      '는 더트 적성이 낮고, 거리상으로는 마일 적성이 좋지 않았다.',
    ]);
    await era.printAndWait([
      '반면 ',
      digital.get_colored_name(),
      '은 장거리 적성이 좋지 않은 상태였다.',
    ]);
    await me.say_and_wait(
      '정말로 제대로 도전하고 싶다면, 역시 황금의 잔디 중거리 레이스겠지.',
    );
    await era.printAndWait('하지만, 그건……');
    await digital.say_and_wait([
      '맞아요…… 저도 ',
      digital.sex,
      '들을 제 주종목인 진흙탕 싸움으로 끌어들이고 싶지는 않아요. 역시 정정당당하게 겨뤄봐야죠.',
    ]);
    await era.printAndWait([
      '자칭 패왕을 넘어 명실상부한 패왕이 된 ',
      opera.get_colored_name(),
      '와 그 뒤를 쫓는 ',
      dotou.get_colored_name(),
      '를 상대로 한 황금 거리 레이스라면……',
    ]);
    await me.say_and_wait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      ', 이 대회가 가장 적절하겠어.',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 이 레이스에서 그 어떤 이점도 가져갈 수 없을 것이다.',
    ]);
    await digital.say_and_wait(
      '좋아요! 바로 그거예요! 도쿄 2000미터 잔디 코스, 이보다 완벽한 무대는 없죠!',
    );
    await me.say_and_wait('정말 괜찮겠어?');
    await digital.say_and_wait('호에? 무슨 말씀이세요?');
    await me.say_and_wait('상당히 고전할 텐데.');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 이런 상황에 직면하자 잠시 말문이 막힌 듯했다.',
    ]);
    await digital.say_and_wait(
      '……아하하, 천성이 이래서 말이죠. 게임을 할 때 최저 난이도로 하고 싶지 않거나, 공짜로 주는 DLC 사기 템을 안 쓰고 싶은 기분이랑 비슷하달까요……',
    );
    await digital.say_and_wait('무엇보다 전, 최고의 레이스를 보고 싶거든요!');
    await digital.say_and_wait('그러니까, 당신도 반드시 저와 함께해주실 거죠?!');
    await me.say_and_wait('당연하지!');
    await era.printAndWait([digital.get_colored_name(), '은 본래 그런 아이였다.']);
  };
};