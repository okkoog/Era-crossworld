const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} rice
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {EventObject} event_object
 */
module.exports = async (rice, me, callname, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 30) {
    add_event(event_hooks.out_shopping, event_object);
    return;
  }
  if (event_object.arg !== 95 + 21) {
    return;
  }
  const self_name = sys_get_callname(30, 30),
    tokino = get_chara_talk(301);
  await print_event_name('만약 실패한다면', rice);
  await era.printAndWait([
    race_infos[race_enum.takz_kin].get_colored_name(),
    ' 출주를 목표로 정한 뒤……',
  ]);
  await era.printAndWait(
    '행인B「내 팬 투표, 너에게 던졌어! 반드시 1등 해야 해!」',
  );
  await rice.say_and_wait('와아!? 으…… 응원해 주셔서 감사합니다!');
  await era.printAndWait([
    '상점가 주인「아, 설마 자네는…… ',
    rice.get_colored_name(),
    '인가?」',
  ]);
  await rice.say_and_wait('네! 저기, 네 맞아요……');
  await era.printAndWait('상점가 주인「뭐야! 꼭 우리 집 고로케를 먹고 가게!」');
  await era.printAndWait('상점가 주인「우리 집 아이가 자네 팬이라네.」');
  await rice.say_and_wait('에!? 그래도 괜찮나요?');
  era.drawLine();
  await rice.say_and_wait('에헤헤…… 기쁜 일이 이렇게나 많이 생기다니, 정말 괜찮은 걸까?');
  await me.say_and_wait('그 응원만큼 더 노력해야겠네.');
  await rice.say_and_wait('맞는 말이야……');
  await tokino.say_and_wait('아, 두 분 다 여기 계셨군요!');
  await me.say_and_wait('무슨 일입니까?');
  await tokino.say_and_wait('사실은 말이죠!');
  await tokino.say_and_wait('방금 한신 경기장에서 소식이 들려왔는데……!!');
  await tokino.say_and_wait([
    '【팬 인기 투표】에서, ',
    sys_get_colored_callname(301, 30),
    '가 압도적인 차이로 1위예요!',
  ]);
  await tokino.say_and_wait('개막식에 참석해 주셨으면 합니다!');
  await rice.say_and_wait('에에에에에?');
  await tokino.say_and_wait('그래서 내일 리허설을 진행할 예정이에요.');
  await rice.say_and_wait(['……와아. ', self_name, '가…… 인기 1위? 개막, 식요?']);
  await tokino.say_and_wait('아하하…… 죄송해요. 저도 조금 너무 흥분했나 봐요.');
  await tokino.say_and_wait(
    '상세 내용은 서류로 정리해 두었으니, 나중에 확인하시고 의논해 보세요.',
  );
  await tokino.say_and_wait('그럼, 이만 실례하겠습니다.');
  await era.printAndWait([tokino.get_colored_name(), '가 떠난 뒤……']);
  await rice.say_and_wait(['……대단해, ', self_name, '는, 모두의……']);
  await me.say_and_wait('리허설하러 가자.');
  await rice.say_and_wait('응!');
  await era.printAndWait([
    '다음 날, 당신은 ',
    rice.get_colored_name(),
    '와 함께 한신 경기장으로 향했다.',
  ]);
  await era.printAndWait([
    '스태프A「',
    rice.get_colored_name(),
    ' 씨! 다음은 꽃다발을 증정할 때 서 있을 위치입니다——」',
  ]);
  await rice.say_and_wait('네, 네!');
  await era.printAndWait(
    '스태프B「아, 그게 끝나면 저희도 부탁드리고 싶은 게 하나 있어서——」',
  );
  await rice.say_and_wait('우와…… 알겠습니다~! 귀 기울여 들을게요!');
  await era.printAndWait('이런저런 리허설이 일단락된 후……');
  await rice.say_and_wait('후아……');
  await me.say_and_wait('잠시 쉬자.');
  await rice.say_and_wait('에헤헤, 괜찮아. 왜냐하면……');
  await era.printAndWait([
    '스태프C「죄송합니다, ',
    rice.get_colored_name(),
    ' 씨! 마이크 조정을 한 번 더 부탁드리고 싶어서요……」',
  ]);
  await rice.say_and_wait('네! 지, 지금 갈게요!');
  await rice.say_and_wait('……끝까지 해내고 싶어. 모두가 미소 지을 수 있게 만들고 싶어.');
  era.drawLine({ content: '등장 스테이지 위' });
  await rice.say_and_wait(['그럼, 여러분…… 부디 ', self_name, '를 많이 응원해 주세요!!']);
  await era.printAndWait('스태프A「당연하죠, 문제없습니다!!」');
  await era.printAndWait('그럼 오늘 리허설은 여기까지 하겠습니다!');
  await rice.say_and_wait('후…… 드디어, 끝났……네.');
  await me.say_and_wait('괜찮아?');
  await rice.say_and_wait('응, 괜찮아.');
  await rice.say_and_wait('처음이라 아직 서툰 게 많지만.');
  await rice.say_and_wait('진짜 개막일이 되어서, 모두가 이곳에 모였을 때.');
  await rice.say_and_wait('그때는 잘 해낼 수 있을 것 같아.');
  await rice.say_and_wait('전혀 힘들지 않아.');
  await rice.say_and_wait('더, 더…… 더 열심히 하고 싶어.');
  await era.printAndWait([
    '스태프B「아, ',
    rice.get_colored_name(),
    ' 씨! 물건을 떨어뜨리신 것 같아요——」',
  ]);
  await rice.say_and_wait('에!? 죄송해요! 지금 가지러 갈게요!');
  await rice.say_and_wait('꺄악!?');
  await era.printAndWait('콰르릉…… 우드득…… 쾅——!');
  await era.printAndWait([
    '스태프C「어떻게 된 거야!? 문이 쓰러진다——',
    rice.get_colored_name(),
    '씨, 위ㅎ——」',
  ]);
  await era.printAndWait([
    '절체절명의 순간, ',
    me.get_colored_name(),
    '은(는) 가까스로 ',
    rice.get_colored_name(),
    '를 끌어안았다.',
  ]);
  await era.printAndWait('쾅!', { fontSize: '2.5rem' });
  await rice.say_and_wait([callname.substring(0, 1), '…… ', callname, '!?']);
  era.drawLine();
  await rice.say_and_wait(['우…… 으…… ', callname, '……']);
  await me.say_and_wait('여기 있어.');
  await rice.say_and_wait([
    '아, ',
    callname,
    '! ',
    callname,
    '!! 괜찮아!? 어디 아픈 데는 없어?',
  ]);
  await era.printAndWait([
    '……보아하니 ',
    me.get_colored_name(),
    '은(는) ',
    rice.get_colored_name(),
    '를 보호하려다 머리를 부딪힌 모양이었다.',
  ]);
  await me.say_and_wait('이제 괜찮은 것 같아.');
  await rice.say_and_wait('정, 정말? 하…… 하지만 역시 병원에——');
  await era.printAndWait('스태프A「아, 다행이다, 정신이 드셨군요!」');
  await era.printAndWait('스태프A「곧 구급차도 올 겁니다.」');
  await me.say_and_wait('고맙습니다.');
  await era.printAndWait(
    '스태프A「아니요! 저희야말로 정말 죄송합니다. 갑자기 상황이 나빠져서……」',
  );
  await era.printAndWait('스태프A「정말로 죄송합니다, 저희가 병원까지 모시겠습니다.」');
  era.drawLine({ content: '병원 검사 후' });
  await era.printAndWait('스태프A「……그렇습니까. 검사 결과 이상은 발견되지 않았다고요——」');
  await me.say_and_wait('걱정 끼쳐드려 죄송합니다.');
  await era.printAndWait('스태프A「아닙니다! 이건 저희의 실수라……」');
  await era.printAndWait('스태프A「게다가…… 저희가 사과드려야 할 일이 또 있습니다.」');
  await rice.say_and_wait('하지…… 하지만 여러분은 이미 충분히……');
  await era.printAndWait([
    '스태프A「——이번 개막식, 그리고 ',
    race_infos[race_enum.takz_kin].get_colored_name(),
    ' 말입니다.」',
  ]);
  await era.printAndWait('스태프A「한신 경기장에서의 개최가 연기될 것이라는 소식이 들어왔습니다.」');
  await rice.say_and_wait('……!');
  await me.say_and_wait('그게 무슨 소립니까?');
  await era.printAndWait(
    '스태프A「사실…… 이번 경기장 내 사고의 원인을 아직 알 수 없습니다.」',
  );
  await era.printAndWait(
    '스태프A「거기에 부상자까지 발생했죠. 이렇게 되면 경기장 전체를 정밀 점검할 필요가 있습니다.」',
  );
  await era.printAndWait(
    '스태프A「점검과 수리를 포함하면, 최소 3주 이상의 시간이 소요될 것으로 보입니다.」',
  );
  await rice.say_and_wait([
    '그렇게 되면, ',
    race_infos[race_enum.takz_kin].get_colored_name(),
    ' 일정에 맞출 수 없겠네요……',
  ]);
  await era.printAndWait(
    '스태프A「네. 이런 일이 생기지 않도록 저희도 매일 노력해 왔습니다만……」',
  );
  await era.printAndWait('스태프A「지금까지 단 한 번도 없었던 사례입니다……」');
  await era.printAndWait([
    '스태프A「두 분과 ',
    race_infos[race_enum.takz_kin].get_colored_name(),
    '을 기다려 주신 분들께 정말 면목이 없습니다!」',
  ]);
  await rice.say_and_wait(['지금까지 한 번도 없었는데, ', self_name, '가 오자마자 갑자기……']);
  await rice.say_and_wait('……');
  await era.printAndWait(
    [rice.get_colored_name(), '「설마, ', self_name, ' 때문인 걸까?」'],
    {
      color: rice.color,
      fontSize: '0.75rem',
    },
  );
  await era.printAndWait('그 작은 목소리가 어째서인지 유독 크게 울려 퍼졌다——');
  get_attr_and_print_in_event(30, [0, 0, 0, 5], 0) && (await era.waitAnyKey());
  return true;
};