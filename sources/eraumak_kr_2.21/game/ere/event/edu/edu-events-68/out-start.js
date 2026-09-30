const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} kita
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kita, me, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 68) {
    add_event(hook.hook, event_object);
    return;
  }
  const event_arg = event_object?.arg;
  if (event_arg === 95 + 1) {
    await print_event_name('새해 방문', kita);
    await era.printAndWait('제자들 「스승님, 새해 복 많이 받으십시오!!!」');
    await era.printAndWait(
      `오후 3시 15분, 트레이너인 ${me.name}은(는) ${kita.name}의 아버지의 제자들이 지르는 귀가 따가울 정도의 인사를 들으며 겨우 안도의 한숨을 내쉬었다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 검은색 하오리를 입고, 다다미 위에서 몸을 일으키며 곁에 있는 남자에게 절을 올렸다.`,
    );
    await era.printAndWait(
      `옆에 앉은 키타산의 아버지는 가볍게 고개를 끄덕였다. 그 위압감 넘치는 거구 탓에 ${me.name}은(는) 마치 야쿠자들이 고용한 인텔리 고문처럼 보였다.`,
    );
    await era.printAndWait(
      `만약 똑같이 연꽃 무늬가 새겨진 검은 하오리를 입고, 만면에 미소를 띤 채 편안하게 앉아 있는 키타산이 ${me.name}의 옆자리에 없었더라면, ${me.name}은(는) 진작에 일어나 제자들 줄에 가서 섰을지도 모른다.`,
    );
    await kita.say_and_wait(
      `트레이너 선생님, 이렇게 많은 사람들 앞이라 무척 긴장했죠?~`,
    );
    await era.printAndWait(
      `미닫이문을 닫으며, 키타산은 생글생글 웃으며 ${me.name}의 곁으로 다가와 속삭였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 담당 우마무스메의 머리를 쓰다듬었고, 왁자지껄하고 가벼운 소란 속에서 새로운 한 해를 즐기기 시작했다.`,
    );
    era.println();
    get_attr_and_print_in_event(
      68,
      [5, 5, 5, 5, 5],
      35,
      JSON.parse('{"체력":300}'),
    ) && (await era.waitAnyKey());
  } else if (event_arg === 'hot_spring_event') {
    await print_event_name('온천 여행', kita);
    await era.printAndWait(`${me.name}은(는) 트레이닝실에서 서류를 정리하고 있었다……`);
    await kita.say_and_wait(
      `트레이너 선생님! 저기, 온천 티켓에 대해서 드릴 말씀이 있어요!`,
    );
    await kita.say_and_wait(`지난 3년간 저 정말 열심히 했죠!`);
    await kita.say_and_wait(`그렇죠, 트레이너 선생님!`);

    await era.printAndWait(
      `갑자기 트레이닝실로 들이닥친 키타산이 큰 소리로 ${me.name}에게 물었다.`,
    );
    await era.printAndWait([
      '갑자기 왜 그런 소릴 하지?',
      me.get_colored_name(),
      '이(가) 약간 당황한 기색으로 눈앞의 ',
      kita.get_teen_sex_title(),
      '를 바라보았다.',
    ]);
    era.println();
    era.printButton('「응, 정말 열심히 했지.」', 1);
    await era.input();
    await era.printAndWait(`어쨌든 지난 3년간의 승리는 누가 봐도 명백했으니까.`);
    await era.printAndWait(
      `${kita.name}이 쏟은 노력은 의심할 여지가 없었고, 심지어 자신의 예상을 훨씬 뛰어넘었으며 결과 또한 확실했다.`,
    );
    await kita.say_and_wait(`고마워요, 지난 3년 동안 이 키타산은 계속해서 자신을 억눌러 왔지만……`);
    await kita.say_and_wait(
      `하지만 이제 트레이너 선생님의 노력도 있었으니, 저 자신에게 조금 정도는 상을 줘도 괜찮겠죠!`,
    );
    await era.printAndWait(
      `흑발의 ${kita.get_teen_sex_title()}가 한 걸음씩 다가오더니, 가느다란 양손으로 ${
        me.name
      }의 어깨를 눌러 ${me.name}이(가) 움직이지 못하게 만들었다.`,
    );
    if (new KitaEduMarks().hot_spring > 0) {
      await kita.say_and_wait([
        '그러니까 트레이너 선생님, 저번에 받은 온천 티켓으로 온천에 가요!',
      ]);
      era.println();
      era.printButton(
        `「갈게! 갈 테니까 ${sys_get_callname(0, 68)}, 이것 좀 놓고 말해! 갈 거니까 제발 놓아줘!」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '그렇게 말하며 ',
        me.get_colored_name(),
        '은(는) 서둘러 서랍에서 챙겨두었던 온천 티켓을 꺼내 ',
        kita.get_colored_name(),
        '의 앞에서 흔들어 보였다.',
      ]);
    } else {
      await kita.say_and_wait([
        '그러니까 트레이너 선생님, 우리 온천 가요!',
      ]);
      await era.printAndWait([
        kita.get_colored_name(),
        '이 꺼내든 온천 티켓에는 「키타(北)」로 시작하는 단어가 어렴풋이 인쇄되어 있었다……',
      ]);
    }
    era.drawLine({ content: '온천 여관' });
    await era.printAndWait(
      `보상을 너무나 원한 나머지 키타산이 무슨 돌발 행동을 할지 몰라, ${me.name}은(는) 결국 키타산과 함께 온천 여관에 도착했다.`,
    );
    await kita.say_and_wait(
      `후아~ 여기 온천 정말 기분 좋네요~ 몸도 마음도 깨끗하게 씻겨 나가는 기분이에요~`,
    );
    await era.printAndWait(
      `수건으로 하얀 뒷덜미를 닦으며, ${kita.name}은(는) 부드러운 방석 위에 무릎을 꿇고 앉았다. 부드러운 포니테일이 매끄럽고 탄력 있는 두 발 사이에서 살랑살랑 흔들렸다.`,
    );
    await era.printAndWait(
      `평소의 긴장된 태도는 온데간데없고, 온천을 마친 키타산은 한층 편안해 보였다.`,
    );
    await era.printAndWait(`간질~ 간질~`);
    await era.printAndWait(
      `${me.name}은(는) 깜짝 놀랐다. 어느샌가 키타산이 몸을 돌려 바닥에 엎드린 채, 꼬리로 ${me.name}의 발바닥을 살살 간지럽히고 있었기 때문이다.`,
    );
    await era.printAndWait(
      `${me.name}에게 들키자마자, 키타산은 다다미 위를 뒹굴며 까르르 웃음을 터뜨렸다.`,
    );
    await kita.say_and_wait(
      `후후후~ 평소엔 늘 긴장하고 지냈지만, 이렇게 긴장이 풀리니까 트레이너 선생님 앞에서 어린애처럼 응석 부리고 싶어지네요…… 왁!`,
    );
    await era.printAndWait(
      `데굴데굴 구르던 ${kita.name}은(는) 어느새 벽에 쿵 하고 부딪혔고, 비명을 지르면서도 바보 같은 미소를 지어 보였다.`,
    );
    await era.printAndWait(
      `가끔은 이렇게 바보같이 다 내려놓고 노는 것도 나쁘지 않겠지. 그런 생각을 하며 ${me.name}은(는) ${kita.name}과 함께 방 안에서 바보처럼 웃으며 장난을 치기 시작했다.`,
    );
    era.println();
    sys_like_chara(68, 0, 50) && (await era.waitAnyKey());
  } else {
    return false;
  }
  return true;
};