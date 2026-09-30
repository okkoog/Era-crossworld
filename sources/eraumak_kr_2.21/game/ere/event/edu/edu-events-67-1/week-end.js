const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const {
  japa_cup_common,
  takz_kin_common,
} = require('#/event/edu/edu-events-67-1/snippets');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} daiya
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (daiya, me, hook, event_object) => {
  const edu_weeks = era.get('cflag:67:육성턴수합산'),
    races = era.get('cflag:67:육성성적');
  let wait_flag = false;
  if (edu_weeks === 47 + 32) {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:67:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 종료', daiya);
    await era.printAndWait('여름 합숙 마지막 날. 사토노 다이아몬드가 무언가 생각에 잠겨 있다.');
    era.printButton('「무슨 일이야?」', 1);
    await era.input();
    await daiya.say_and_wait('……앞으로의 일을 생각하고 있었어요.');
    await daiya.say_and_wait(
      '『국화상』까지 앞으로 두 달 정도 남았는데…… 그동안 제가 얼마나 더 성장할 수 있을까요?',
    );
    await daiya.say_and_wait(
      '제 실력이 아직 징크스에 전혀 영향받지 않을 정도까지는 미치지 못한 것 같아서요.',
    );
    era.printButton('「아직 두 달이나 남았어」', 1);
    await era.input();
    await era.printAndWait(
      '여름 합숙은 기초 트레이닝이 중심이었다. 「국화상」을 향한 본격적인 조정은 이제부터 시작이다.',
    );
    await daiya.say_and_wait(
      '……그렇네요. 훈련 성과가 바로 나타나지 않는다는 건 알고 있지만, 저도 모르게 조급해졌나 봐요.',
    );
    await daiya.say_and_wait(
      '이렇게 쉽게 흔들려선 안 되는데! 전 징크스 따위에 지지 않아요! 절대로! 반드시 징크스를 깨뜨려 보이겠어요!',
    );
    await daiya.say_and_wait(
      '네! 마음을 다잡았어요! 『국화상』을 위해서 더욱 정진할게요!',
    );
    await era.printAndWait(
      `「국화상」에서 승리하겠다는 결의가 너무나도 강한 나머지 ${daiya.sex}는 초조함마저 느끼고 있는 듯했다.`,
    );
    await era.printAndWait(
      '다만── 조금 지나치게 기합이 들어간 느낌도 든다. 이것이 나쁜 결과로 이어지지 않기를 바랄 뿐이다……',
    );
    era.println();
    wait_flag = sys_like_chara(67, 0, 25);
  } else if (edu_weeks === 95 + 24) {
    if (check_aim_race(races, race_enum.takz_kin, 2)) {
      return false;
    }
    await print_event_name('그것은 유일한 빛', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait([
      `${me.name}은(는) 사토노 다이아몬드와 함께 키타산 블랙이 출주하는 `,
      race_infos[race_enum.takz_kin].get_colored_name(),
      '을 관전하러 왔다.',
    ]);
    await daiya.say_and_wait([
      '계획대로 무사히 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '에 출주하다니, 키타산짱은 정말 강인하네요.',
    ]);
    await era.printAndWait([
      '사실 이번 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '의 팬 투표 결과, 사토노 다이아몬드에게도 우선 출주권이 있었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      `의 격전 이후 ${daiya.sex}에게 상당한 피로가 쌓여 있었기에, 만약을 위해 이번 레이스 참가는 단념했었다.`,
    ]);
    await era.printAndWait(
      `키타산 블랙은 ${daiya.sex}와 똑같은 레이스를 치르고도 이 레이스에 계속 참가할 수 있다니 정말 튼튼하구나── 라고 생각했었지만……`,
    );
    await era.printAndWait(
      '해설 「괴롭습니다! 키타산 블랙! 나아가질 못합니다, 나아가질 못해요! 평소와 같은 힘이 나오질 않습니다!!」',
    );
    await era.printAndWait(
      '해설 「──키타산 블랙 침몰!! 키타산 블랙, 후속 그룹에 완전히 파묻히고 맙니다!」',
    );
    await daiya.say_and_wait('……키타산 짱……');
    await kita.say_and_wait('………………윽.');
    await era.printAndWait(
      '관객 A 「어이, 키타산 왜 저래…… 오늘 컨디션이 안 좋았던 거야……?」',
    );
    await era.printAndWait(
      '관객 B 「왜 『타카라즈카 기념』에서 저렇게 지는 거지? 딱히 질 만한 이유도 없었잖아……」',
    );
    await era.printAndWait(
      `관객 C 「저건 키타산의 진짜 실력이 아니야!! 다음에 반드시 이길 거라고! 그치? 키타산!」`,
    );
    await takz_kin_common(daiya, me, kita);
    era.println();
    wait_flag = sys_like_chara(67, 0, 25);
    wait_flag = sys_like_chara(68, 0, 25) || wait_flag;
  } else if (edu_weeks === 95 + 32) {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:67:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    await print_event_name('여름 합숙 (시니어 시즌) 종료', daiya);
    const kita = get_chara_talk(68);
    const dictus = get_chara_talk(63);
    await daiya.say_and_wait('허억, 허억, 허억……!');
    await daiya.say_and_wait(
      '이건…… 다리에 부담이 꽤 오네요…… 하지만 확실히 발걸음이 더 묵직해진 느낌이에요.',
    );
    await daiya.say_and_wait('반드시 이 주법을 내 것으로 만들어야 해……!');
    await daiya.say_and_wait('한 번 더……!');
    await daiya.say_and_wait('하아아아아아아아!!');
    await dictus.say_and_wait(
      `……트레이너 씨. 제가 참견하는 것일지도 모르겠습니다만, 정말 이대로 괜찮은 걸까요……?`,
    );
    await dictus.say_and_wait(
      '지나치게 기합이 들어갔다고 할까, 완력에 너무 의존하는 느낌입니다. 이건 사토노 씨 다운 스타일이 아니에요.',
    );
    era.printButton('「그렇네……」', 1);
    await era.input();
    await era.printAndWait(
      '앞으로 있을 메지로 맥퀸과의 「텐노상(가을)」, 그리고 장차 있을 해외 원정까지 고려하여 주력을 강화하는 트레이닝을 시작했다.',
    );
    await era.printAndWait(
      '하지만 예상치 못한 상황이 발생했다. 사토노 다이아몬드의 주법이 흐트러지기 시작한 것이다.',
    );
    await era.printAndWait('힘의 균형이 무너진 주법으로 변해가고 있었다.');
    await dictus.say_and_wait(
      '모래사장에서 달리고 있기 때문일 수도 있으니, 일시적인 현상이길 바랄 뿐입니다.',
    );
    await era.printAndWait(
      '이쿠노 딕터스의 말대로이길 바라며…… 일단은 당분간 지켜보기로 했다.',
    );
    await era.printAndWait('어느덧 여름 합숙 마지막 날이 밝았다.');
    await daiya.say_and_wait('키타짱, 돌아가는 버스는 같이 앉자♪');
    await kita.say_and_wait('짐은 벌써 다 실어뒀어! 가자!');
    await kita.say_and_wait('……응? 다이아 짱?');
    await daiya.say_and_wait('……쿨…………쿨…………');
    await kita.say_and_wait('잠들었네……');
    await daiya.say_and_wait('으음…… 더 힘차게 달려야 해……');
    await kita.say_and_wait('후훗, 합숙 내내 다이아짱 정말 열심히 했으니까.');
    await kita.say_and_wait('……잘 자, 다이아짱.');
    era.println();
    wait_flag = sys_like_chara(67, 0, 25);
  } else if (edu_weeks === 95 + 44) {
    if (check_aim_race(races, race_enum.japa_cup, 2)) {
      return false;
    }
    await print_event_name('도전, 개척', daiya);
    const kita = get_chara_talk(68);
    const teio = get_chara_talk(3);
    await era.printAndWait([
      `${me.name}은(는) 사토노 다이아몬드와 함께 `,
      race_infos[race_enum.japa_cup].get_colored_name(),
      '를 관전하러 왔다.',
    ]);
    await kita.say_and_wait('테이오 씨……! 제가 정말로 동경하던 테이오 씨와 함께……!');
    await teio.say_and_wait(
      '그렇게 안달복달하다간 실전에서 큰코다친다고, 키타산.',
    );
    await teio.say_and_wait(
      `오늘은 해외에서 초청된 ${daiya.get_uma_sex_title()}들도 있어. 변수가 많은 레이스지……`,
    );
    await teio.say_and_wait('하지만 상대가 누구든, 이 테이오 님이 전부 꺾어버릴 거니까!!');
    await kita.say_and_wait('지지 않을 거예요! 전…… 테이오 씨를 이길 거예요!!');
    await daiya.say_and_wait('다행이다! 키타짱, 기세에서 전혀 밀리지 않네요!');
    await era.printAndWait('관객 A 「키타산, 힘내라!! 동경하던 대상을 뛰어넘는 거야!」');
    await era.printAndWait(
      '관객 B 「『제왕』을 넘어서라! 우리들의 키타산이라면 할 수 있어!!」',
    );
    await era.printAndWait(
      `관객 C 「『제왕』의 위엄을 보여줘! 토카이 테이오!!」`,
    );
    await daiya.say_and_wait('……양측의 응원 열기도 호각이네요……');
    await era.printAndWait(
      `본래 열정적인 팬이 많은 두 사람이다. 이번 「재팬 컵」은 예년보다 더욱 열기가 뜨거웠다.`,
    );
    await daiya.say_and_wait('키타짱…… 힘내──!');
    await era.printAndWait(
      '실황 「오오, 토카이 테이오! 여기서 단숨에 치고 올라옵니다! 키타산 블랙의 뒤를 바짝 추격합니다!」',
    );
    await daiya.say_and_wait(
      '에……!? 빨라……! 평소의 테이오 씨라면 이 타이밍에 가속할 리가 없는데……!',
    );
    await era.printAndWait('토카이 테이오는 매우 공격적으로 키타산 블랙의 뒤를 압박했다.');
    await era.printAndWait('토카이 테이오에게선 좀처럼 보기 드문 과감한 승부수였다.');
    await teio.say_and_wait('흐아아아아아아아!');
    await kita.say_and_wait('으윽…… 아아아아아아아!');
    await daiya.say_and_wait('키타짱도 같이 속도를 올렸…… 아니, 아니에요. 저건……!');
    await era.printAndWait(
      '키타산 블랙은 토카이 테이오의 압박에 한때 페이스가 흔들리는 듯했으나, 서서히 자신의 리듬을 되찾아갔다.',
    );
    await era.printAndWait('토카이 테이오와 키타산 블랙 사이에 처절한 공방전이 펼쳐졌다.');
    await daiya.say_and_wait(
      `키타짱도 테이오 씨도, 이미 『재팬 컵』 경험이 있어 유리한 입장인데도……`,
    );
    await daiya.say_and_wait(
      '자신의 주법에 안주하지 않고 오히려 적극적으로 공세를 펼치고 있어요……!',
    );
    await daiya.say_and_wait('……저 상황이 나라면……');
    await era.printAndWait(
      '사토노 다이아몬드는 레이스의 흐름을 보며 머릿속으로 시뮬레이션을 돌리는 듯했다.',
    );
    await era.printAndWait(
      '실황 「토카이 테이오, 멈추지 않고 가속합니다! 키타산 블랙, 끝까지 버텨낼 수 있을 것인가? 아니면 역전당할 것인가──」',
    );
    await era.printAndWait('관객 「와아아아아아아아아아!」');
    await kita.say_and_wait(
      '정말 깜짝 놀랐어……! 테이오 씨가 그렇게 집요하게 몰아붙일 줄은 몰랐거든……',
    );
    await teio.say_and_wait('무슨 소리야, 소극적으로 굴었다간 순식간에 져버린다고!');
    await teio.say_and_wait(
      '난 단 한 순간도 도전하는 마음을 잊지 않아. 더 높은 곳으로 가기 위해서 말이지!',
    );
    await teio.say_and_wait(
      '그러니까 『아리마 기념』에서도 난 도전자로서 다이아와 키타산에게 도전할 거야!',
    );
    await japa_cup_common(daiya, me, kita, teio);
    era.println();
    wait_flag = sys_like_chara(67, 0, 25);
  } else if (edu_weeks === 95 + 48) {
    if (
      !check_aim_race(races, race_enum.tenn_sho, 2, 1) ||
      !check_aim_race(races, race_enum.japa_cup, 2, 1) ||
      !check_aim_race(races, race_enum.arim_kin, 2, 1)
    ) {
      return false;
    }
    await print_event_name('동경하는 사람과 함께', daiya);
    const mcqueen = get_chara_talk(13);
    await era.printAndWait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '、',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '、그리고 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '. ',
    ]);
    await era.printAndWait(
      '사토노 다이아몬드는 모든 레이스에서 승리하여, 훌륭하게 「가을 시니어 3관」을 달성했다!',
    );
    await daiya.say_and_wait('──전송. 이걸로 답장은 다 보낸 거겠죠.');
    era.printButton('「굉장히 성대한 행사가 될 것 같네」', 1);
    await era.input();
    await era.printAndWait(
      '사토노 그룹 관련 시설에서 사토노 다이아몬드의 「가을 시니어 3관 기념행사」를 개최할 준비를 하고 있다고 한다.',
    );
    await daiya.say_and_wait(
      '네. 제 『가을 시니어 3관』 기념행사예요── 방금 저도 개최를 위해 전력을 다해 돕겠다고 답장을 보냈어요.',
    );
    await daiya.say_and_wait(
      '아마 오늘부터 카페에서 『가을 시니어 3관 파르페』가 출시될 거예요. 그래서 미리 가서 인사를 드릴까 해요.',
    );
    await daiya.say_and_wait('혹시 트레이너 선생님도 시간이 되신다면 같이 가시겠어요?');
    era.printButton('「같이 가자!」', 1);
    await era.input();
    await daiya.say_and_wait('헤헤헤, 신난다♪ 그럼 출발해요.');
    await mcqueen.say_and_wait('어머, 사토노 씨. 마침 당신을 찾으려던 참이었어요.');
    await daiya.say_and_wait('맥퀸 씨! 저한테 무슨 용건이라도 있으신가요?');
    await mcqueen.say_and_wait('네, 당신을 축하해 주고 싶어서…… 지금 바쁘신가요?');
    await daiya.say_and_wait('실은 지금 사토노 그룹 카페에 가던 길이었거든요……');
    await daiya.say_and_wait(
      '아! 괜찮으시다면 맥퀸 씨도 같이 『가을 시니어 3관 파르페』를 드시러 가지 않을래요?',
    );
    await mcqueen.say_and_wait('파르페 말인가요!?');
    await daiya.say_and_wait(
      '네, 제 『가을 시니어 3관』 달성 기념 한정 파르페가 출시되거든요. 그래서 인사도 드리고 시식도 해볼 겸 가려던 참이었어요.',
    );
    await mcqueen.say_and_wait(
      '한정판이라니……! 그, 그렇군요. 귀한 기회이니 저도 동행하도록 하겠어요.',
    );
    await mcqueen.say_and_wait(
      '다시 한번 정식으로…… 두 분께 축하 인사를 드려요. 『가을 시니어 3관』 달성을 진심으로 축하합니다.',
    );
    await mcqueen.say_and_wait(
      '저와 테이오, 그리고 키타산 블랙을 꺾고 쟁취한 『가을 시니어 3관』이에요.',
    );
    await mcqueen.say_and_wait(
      `이것은 단지 다이아 씨 개인의 성취뿐만 아니라, 사토노 가문이 ${daiya.get_uma_sex_title()} 레이스계에 남긴 찬란한 업적입니다.`,
    );
    await mcqueen.say_and_wait('……정말 고생 많았어요, 다이아 씨.');
    await daiya.say_and_wait('……! 고…… 고맙습니다!!');
    await mcqueen.say_and_wait(
      '후훗, 선배로서 축하를 건네긴 했지만, 사실 우리의 입장은 마찬가지예요.',
    );
    await mcqueen.say_and_wait(
      `우리는 서로의 라이벌이자, 가문의 명예를 짊어진 ${daiya.get_uma_sex_title()}니까요. 앞으로도 계속 서로 절차탁마하며 나아가도록 해요.`,
    );
    await daiya.say_and_wait('네! 더욱 정진할게요!');
    await daiya.say_and_wait('맥퀸 씨에게 배워야 할 점이 아직 아주 많지만, 그래도……');
    await daiya.say_and_wait('저 스스로도 계속 시도하고, 저만의 길을 모색해 나가야겠죠.');
    await daiya.say_and_wait('사토노 가문의 대표라는 자각을 가슴 깊이 새겨두겠어요!');
    await mcqueen.say_and_wait(
      '그래요. 하지만 고민이 있을 땐 언제든 저를 찾아와 상담하세요. 우린 동급생이기도 하니까요.',
    );
    await daiya.say_and_wait('와아…… 맥퀸 씨……!');
    await daiya.say_and_wait('정말 멋지세요…… 저의 영원한 동경의 대상이에요……!');
    await mcqueen.say_and_wait(
      '후훗, 영광이네요. 하지만 앞으로 당신을 동경하는 사람들도 분명 나타나겠죠.',
    );
    await mcqueen.say_and_wait('이제부턴 당신이 좋은 선배가 되어 줄 차례입니다.');
    await daiya.say_and_wait(
      '네. 맥퀸 씨가 저를 도와주셨던 것처럼, 저도 누군가에게 힘이 되어줄 수 있다면 좋겠어요……',
    );
    await mcqueen.say_and_wait('당신이라면 분명 할 수 있을 거예요. 그렇죠, 트레이너 선생님?');
    era.printButton('「응! 분명 잘 해낼 거야!」', 1);
    await era.input();
    await daiya.say_and_wait('두 분 다…… 고맙습니다! 헤헤헤, 너무 행복해요……♪');
    await daiya.say_and_wait(
      '아, 파르페가 녹기 시작했어요! 어서 먹어요! 맥퀸 씨도 마음껏 드세요.',
    );
    await era.printAndWait(
      '메지로 맥퀸이 건넨 말은 사토노 다이아몬드에게 그 어떤 축하보다 값진 것이었다!',
    );
    era.println();
    wait_flag = sys_like_chara(67, 0, 25);
  }
  wait_flag && (await era.waitAnyKey());
};