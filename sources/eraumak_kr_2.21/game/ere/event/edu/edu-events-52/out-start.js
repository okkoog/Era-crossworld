const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (urara, me, callname, hook, event_object) => {
  if (event_object.arg !== 'all_like') {
    return false;
  }
  if (era.get('flag:현재상호작용캐릭터') > 0) {
    await era.printAndWait([
      '듣기로는 ',
      urara.get_colored_name(),
      '는 요즘 학원 근처의 작은 공원에 자주 간다고 한다…… 나중에 혼자 외출할 때 한번 가보자.',
    ]);
    add_event(hook.hook, event_object);
    return false;
  }
  EventMarks.get(0).sub(event_hooks.out_start);
  await print_event_name('모두에게 사랑받는 소녀', urara);
  await era.printAndWait([
    '오늘의 일과를 마친 뒤, ',
    me.get_colored_name(),
    '은(는) 홀로 학원 주변을 산책하다가, 작은 공원을 지날 무렵 익숙한 실루엣을 발견했다.',
  ]);
  await era.printAndWait([
    '공원 잔디밭 위에는 깨끗한 돗자리가 깔려 있었고, ',
    urara.get_colored_name(),
    '는 도시락을 꺼내 든 어느 모자와 즐겁게 둘러앉아 이야기를 나누고 있었다.',
  ]);
  await urara.say_and_wait('응? 내 이름? 하루 우라라! 내 이름은 하루 우라라야!');
  await era.printAndWait(
    '아주머니A 「우라라……? 어머, 네가 바로 트레센 학원의 하루 우라라구나! 네 경기는 우리도 챙겨보고 있단다!」',
  );
  await urara.say_and_wait(
    '에헤? 우라라가 그렇게 대단해? 헤헤~ 왠지 조금 부끄럽네, 하지만……',
  );
  await urara.say_and_wait([
    '어! ',
    callname,
    '다!! 그러니까——',
    callname,
    '! 같이 도시락 먹을래?',
  ]);
  await era.printAndWait([
    '어느샌가 멀리 있는 ',
    me.get_colored_name(),
    '을(를) 알아챈 꼬마 ',
    urara.get_uma_sex_title(),
    '는 귀를 쫑긋거리며 ',
    me.get_colored_name(),
    '의 방향으로 손을 흔들었다.',
  ]);

  era.printButton('「응? 잠깐, 내가 껴도 괜찮은 거야?」', 1);
  await era.input();

  await era.printAndWait([
    '아주머니A 「사양 말고 오세요, 트레이너',
    me.get_adult_sex_title(),
    '. 우리 아이랑 놀아주신 보답이라고 생각해주시고요!」',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '와 길 가던 아주머니의 열렬한 권유에, ',
    me.get_colored_name(),
    '은(는) 조금 쑥스러워하며 돗자리 한편에 자리를 잡고 앉았다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 자리를 잡자, ',
    urara.get_colored_name(),
    '는 곁에 있던 남자아이에게 다시금 즐겁게 말을 걸기 시작했다.',
  ]);
  await urara.say_and_wait(
    '그건 그렇고, 우리 참참참 제7라운드는 아직 승부가 안 났잖아! 계속할까?',
  );
  await era.printAndWait(
    '남자아이A 「에? 다 먹고 나서 계속하기로 약속했잖아! 어차피 다음에도 내가 이길 테지만 말이야!」',
  );
  await urara.say_and_wait(
    '말했겠다~! 하지만 나도 절대로 안 질 거야! 우라라는 가위바위보도 매번 이기고, 고개도 엄청나게 빨리 돌릴 수 있거든!',
  );
  await era.printAndWait([
    '아이의 어머니는 흐뭇한 눈빛으로 상호작용하는 두 사람을 바라보고 있었으나, 곁에 있던 ',
    me.get_colored_name(),
    '은(는) 남자아이의 표정에서 일말의 초조함을 읽어낼 수 있었다……',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '의 밝고 사랑스러운 성격은 순식간에 누구와도 친구가 될 수 있게 해주었고, ',
    urara.sex,
    '는 덕분에 어린아이들에게도 인기가 매우 많았다.',
  ]);
  await era.printAndWait([
    '하지만 바로 그 점 때문에, ',
    urara.sex,
    '는 사춘기에 접어들려는 아이들에게 여타 「첫사랑 킬러」 못지않은 흡입력을 발휘하곤 했다. 그리하여……',
  ]);
  await era.printAndWait([
    '남자아이A 「저기…… 우라라 ',
    urara.sex_code - 1 ? ' 누나' : ' 형',
    ', 우리 나중에…… 나중에 또 만날 수 있어?」',
  ]);
  await urara.say_and_wait([
    '응? 나 앞으로도 이 공원에 올 거니까, 당연히 또 만날 수 있지! 그치, ',
    callname,
    '?',
  ]);
  await era.printAndWait([
    '헤어지기 전, 엄마의 손을 꼭 잡은 채 남자아이는 이 ',
    urara.get_uma_sex_title(),
    urara.sex_code - 1 ? ' 누나' : ' 형',
    '에게 막연하지만 용기 있는 연심을 던졌다.',
  ]);
  await era.printAndWait([
    '용기는 가상했으나, 아무것도 모르는 ',
    urara.get_uma_sex_title(),
    urara.sex_code - 1 ? ' 누나' : ' 형',
    '는(은) 그저 당연하다는 듯 대답하며 곁에 붙어 있는 어른에게 미소를 지어 보일 뿐이었다.',
  ]);
  await era.printAndWait([
    '전해지기는커녕 상황이 더 악화된 건가...? ',
    urara.get_colored_name(),
    '의 미소 속에서, 차마 소년의 눈을 똑바로 마주하지 못한 ',
    me.get_colored_name(),
    '은(는) 그저 묵묵히 고개를 끄덕였다.',
  ]);
  await era.printAndWait([
    '레이스 ',
    urara.get_uma_sex_title(),
    '로서 인기가 많은 것은 분명 좋은 일이지만, 왠지 모르게 무언가 나쁜 방향으로 흘러가는 듯한 기분이 들었다. 아무쪼록 저 소년에게 행운이 있기를……',
  ]);
  await era.printAndWait([
    urara.get_colored_name(),
    '의 손을 잡고 무언가 말하고 싶은 듯 망설이는 ',
    me.get_colored_name(),
    '과(와), 여전히 웃으며 뒤를 향해 손을 흔드는 ',
    urara.get_colored_name(),
    '는 함께 귀갓길에 올랐다.',
  ]);
  return true;
};