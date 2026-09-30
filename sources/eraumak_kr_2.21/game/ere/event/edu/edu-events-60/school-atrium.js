const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} nature
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (nature, me, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 60) {
    add_event(hook.hook, event_object);
    return;
  }
  const event_arg = event_object?.arg;
  if (event_arg === 47 + 33) {
    await print_event_name('마음을 다잡고 앞으로!', nature);

    await era.printAndWait(
      `강가 근처에서 나이스 네이처를 봤다는 소문을 듣고, ${me.name}은(는) ${nature.sex}를 찾아갔다──`,
    );
    await nature.say_and_wait('허억, 허억…… 후우……');
    await nature.say_and_wait('안 돼, 달릴 때는…… 머리를 더 써야 해……');
    await nature.say_and_wait('기운 내자. 네이처, 풀 죽어 있잖아. 처져 있지 말고, 기운 차려야지~');
    await nature.say_and_wait('떠올려봐, 어서. 내가 어떻게 달렸더라?');
    await nature.say_and_wait(
      '그저 나답게, 한 걸음씩…… 천천히 나아가면 되는 거야. 그치?',
    );
    await nature.say_and_wait('언젠가 도달할 수 있을지 없을지는 모르겠지만……');
    await nature.say_and_wait('……내가 할 수 있는 최선을 다해 용기 있게 마주하는 거야.');
    await nature.say_and_wait('아직 가슴을 펴고 자신 있게 레이스에 임할 수 있는 수준은 아니지만……');
    await nature.say_and_wait('도망칠 수는 없어. 그러니까, 난 반드시 테이오와──');
    era.printButton('「네이처라면 분명 할 수 있어」', 1);
    await era.input();
    await nature.say_and_wait(
      `아…… ${era.get('callname:60:0')}은 정말이지, 틈만 나면 이렇게 응석을 받아준다니까~`,
    );
    await nature.say_and_wait('이러면 곤란해~ 나 같은 애한테 꽉 붙잡혀 버릴지도 모른다고……');
    era.printButton('「자율 학습 수고했어!」', 1);
    await era.input();
    await nature.say_and_wait('으왓! 쌔, 쌤 언제 온 거야!?');
    await nature.say_and_wait(
      '아…… 됐어, 말하지 마. 알게 되면 아마 가슴이 턱 막힐 것 같으니까.',
    );
    era.printButton('「방금 한 건 무슨 훈련이야?」', 1);
    await era.input();
    await nature.say_and_wait('……훈련이라고 한다면, 그런 셈이지.');
    await nature.say_and_wait(
      '승리하기 위한 힘을 조금이라도 더 기르고 싶어서. 나만의 무기를 찾고 싶거든.',
    );
    await nature.say_and_wait('결국 핵심은 골인 지점 앞이야. 마지막 직선주로를 확실히 잡아야 해.');
    await nature.say_and_wait(
      '그걸 전제로 한 3000미터라니…… 하하. 생각만 해도 정말 기네.',
    );
    await era.printAndWait(
      '3000미터…… 스퍼트 타이밍을 놓치면 직선에서 승부를 보기가 쉽지 않을 것이다.',
    );
    await era.printAndWait(
      `${me.name}은(는) 나이스 네이처가 즐겁게 달릴 수 있기를 바랐다. 레이스가 끝난 후 평소처럼 밝은 미소를 지을 수 있기를.`,
    );
    await nature.say_and_wait(`${era.get('callname:60:0')}?`);
    era.printButton('「힘내자!」', 1);
    await era.input();
    await nature.say_and_wait('응?');
    await nature.say_and_wait('힘내자니…… 너무 성의 없는 조언 아냐……?');
    era.printButton('「아니, 방금 그건……」', 1);
    await era.input();
    await era.printAndWait(`${me.name}은(는) 스스로를 격려하려던 것이 그만 입 밖으로 튀어나오고 말았다.`);
    await nature.say_and_wait(
      '푸훗, 후훗…… 아하하하! 정말! 그런 『망했다』는 표정 짓지 마.',
    );
    await nature.say_and_wait('휴…… 응, 쌤 말이 맞아. 힘내야지.');
    await nature.say_and_wait('도망칠 수 없다면 앞으로 나아가는 수밖에 없으니까.');
    await nature.say_and_wait(
      `${era.get('callname:60:0')}, 지금 잠깐 같이 있어 줄래?`,
    );
    await nature.say_and_wait(
      `${sys_get_callname(
        60,
        60,
      )} 힘낼게. 쌤이 곁에서 지켜봐 준다면 정말 기쁠 거야.`,
    );
    era.printButton('「나야말로 잘 부탁해」', 1);
    await era.input();
    await nature.say_and_wait('하하, 센스 있네.');
    await nature.say_and_wait(' 좋아, 그럼 시작해볼까!');
    await nature.say_and_wait('열심히 할수록 트레이너 트로피를 딸 확률도 높아진다고?');
    era.printButton('「……나도 정진할게」', 1);
    await era.input();
    await nature.say_and_wait('아하하하하!');
    era.println();
    get_skills_and_print_in_event(60, [200512]);
    get_attr_and_print_in_event(60, [20, 20, 0, 0, 0], 0);
    await era.waitAnyKey();
  } else if (event_arg === 47 + 42) {
    await print_event_name('왕좌의 이면', nature);

    const teio_talk = get_chara_talk(3);
    const maya_talk = get_chara_talk(24);
    const luna_talk = get_chara_talk(17);
    await era.printAndWait(
      `${me.name}과(와) 나이스 네이처가 다음 목표인 「아리마 기념」을 위해 훈련을 이어가던 어느 날……`,
    );
    await nature.say_and_wait(
      `벤치 프레스 끝~ ${era.get('callname:60:0')}, 잠깐 쉬어도 될까?`,
    );
    era.printButton('「물론이지」', 1);
    await era.input();
    await nature.say_and_wait('그럼 딱 10분만 쉴게.');
    await teio_talk.say_and_wait('허억…… 후우……! 이제 세 세트 남았다……!');
    await nature.say_and_wait('응? 저건……');
    await era.printAndWait(
      `${me.name}이(가) 나이스 네이처의 시선을 따라가 보니, 토카이 테이오가 훈련에 매진하고 있었다. ${teio_talk.sex}는 몸을 보조하는 특수 기구를 사용 중인 듯했다……`,
    );
    await maya_talk.say_and_wait('앗, 네이처 짱이다~♪ 같이 쉬자──!');
    await nature.say_and_wait(
      '오~ 마야노, 잘 왔어. 저기 봐, 테이오가 지금 뭐 하고 있는 거야?',
    );
    await maya_talk.say_and_wait(
      `${teio_talk.sex}는 지금 재활 훈련 중이야──! ${teio_talk.sex}의 부상이 꽤 심했거든.`,
    );
    await nature.say_and_wait('어……');
    await maya_talk.say_and_wait('테이오짱이 꽤 오랫동안 침대 신세를 졌었잖아──');
    await nature.say_and_wait('그렇구나……');
    await teio_talk.say_and_wait(
      '……아파라, 다리가 너무 무거워~~! 조금 너무 무리했나──?',
    );
    await luna_talk.say_and_wait('테이오, 아주 열심히 하고 있구나.');
    await teio_talk.say_and_wait(
      '와앗, 회장님! 당연하죠, 최상의 컨디션으로 노력 중이에요! ……라고 말하고 싶지만, 사실 최상의 컨디션까지는 아직 멀었어요.',
    );
    await teio_talk.say_and_wait(
      '그래도 완전 부활의 길이 보여요! 예전보다 더 강해질 수 있을 것 같아요♪',
    );
    await luna_talk.say_and_wait('음…… 곧장 칭찬해달라고 조를 줄 알았는데……');
    await teio_talk.say_and_wait(
      '에이── 그런 거 안 바란다니까요! 저는 이겼을 때 칭찬받고 싶어요!',
    );
    await teio_talk.say_and_wait(
      '노력하는 건 당연한 거니까요! 저도 언제까지고 여기 멈춰 있을 수는 없고요.',
    );
    await teio_talk.say_and_wait(
      '빨리 낫지 않으면 달릴 수 없잖아요. 달리지 못하면…… 회장님을 따라잡을 수 없게 되니까. 안 그래요?',
    );
    await luna_talk.say_and_wait(
      '……과연 그렇군. 실례했다. 내가 너의 정신력을 과소평가했던 모양이구나.',
    );
    await luna_talk.say_and_wait(
      '실력이 안정되고 심신이 충실한 시기에 닥친 부상은 나조차 고통스러울 터인데.',
    );
    await teio_talk.say_and_wait(
      '……그래서 저를 응원하러 오신 거예요? 헤헤. 회장님도 참, 제가 누구라고 생각하세요?',
    );
    await teio_talk.say_and_wait(
      '레이스에서도 공연에서도 대활약! 누구보다 빠르고, 강하고, 멋진.',
    );
    await teio_talk.say_and_wait(
      '저는…… 이 몸은 무적의 테이오 님이라고요! 어떤 일이 생겨도 가볍게 이겨낼 수 있어요!',
    );
    await luna_talk.say_and_wait('훗…… 그렇군. 기대하마, 토카이 테이오!');
    await teio_talk.say_and_wait('네!');
    await nature.say_and_wait(`……저 녀석, 예전보다 더 반짝거리지 않아?`);
    await nature.say_and_wait(
      `이번에 벽에 부딪힌 게 ${teio_talk.sex}를 더 강하게 만든 걸까……`,
    );
    await nature.say_and_wait('나 같은 조연은…… 벽에 부딪히기만 해도 온갖 잡생각이 다 드는데.');
    await nature.say_and_wait(
      `……그런데 ${teio_talk.sex}는 아무렇지도 않게 다시 일어서다니. 역시 주인공은 그릇이 다르네.`,
    );
    await maya_talk.say_and_wait(
      `음── 아무렇지도 않았을까? 테이오짱 그때 정말 엄청 울었어.`,
    );
    await nature.say_and_wait('어……?');
    await maya_talk.say_and_wait(
      `그때 ${teio_talk.sex}는 중요한 레이스에 나갈 수 없었으니까. 그때는 정말 괴로워 보였어.`,
    );
    await nature.say_and_wait('……그…… 그렇구나. 그 테이오가 말이지……');
    await era.printAndWait('이어진 훈련 도중, 나이스 네이처는 깊은 생각에 잠긴 듯 보였다.');
    await era.printAndWait(
      `──훈련이 끝난 후, ${nature.sex}는 천천히 ${me.name} 에게 자신의 속마음을 털어놓았다.`,
    );
    await nature.say_and_wait(
      '……지금까지 오해하고 있었어. 아니, 어쩌면…… 일부러 오해하고 있었던 걸지도 몰라.',
    );
    await nature.say_and_wait(
      `테이오는 주인공이니까 저렇게 강한 거라고. 천성적으로 타고난 재능이 있으니까. 처음부터 선택받았으니까.`,
    );
    await nature.say_and_wait(
      `${teio_talk.sex}는 나 같은 조연과는 태생부터 다르다고 말이야. 그렇게 생각하면서 나약한 나 자신을 지켜왔던 거야.`,
    );
    await nature.say_and_wait('하지만…… 사실은 내가 틀렸어. 테이오도 나랑 똑같았어.');
    await nature.say_and_wait(
      `${teio_talk.sex}도 아무리 노력해도 이기지 못할 수도 있고, 부상을 입을 수도 있어…… 그리고 그 고통이 얼마나 큰지도 알고 있었던 거야.`,
    );
    await nature.say_and_wait(
      `나와 다른 점은…… 좌절한 이후의 태도였어. 스스로의 힘으로 다시 일어설 수 있다는 게, ${teio_talk.sex}의 진짜 강함이었던 거야.`,
    );
    await nature.say_and_wait(
      '……정말이지, 이제 와서 생각해도 무서워. 내가 저렇게 강한 애를 이길 수 있다고 생각했다니.',
    );
    await nature.say_and_wait(
      '나란 녀석은 의지도 용기도 없으면서, 앞서가는 사람만 쳐다보며 불공평하다고 투덜대기나 하고.',
    );
    await nature.say_and_wait(
      '──내가 그 무대에 설 수 없는 게 아니라, 내 스스로 무대에서 내려왔던 거야.',
    );
    await nature.say_and_wait('분수도 모르고, 욕심만 많고, 응석받이에…… 하지만, 하지만……');
    era.printButton('「그래도 이기고 싶지」', 1);
    await era.input();
    await nature.say_and_wait('……응.');
    await nature.say_and_wait('저 아이와 아주 조금이라도 공통점이 있다면, 나도……');
    await nature.say_and_wait('나도……!');
    await era.printAndWait(
      `비록 말은 끝맺지 못했지만, 결의에 찬 ${nature.sex}의 눈동자가 모든 것을 말해주고 있었다.`,
    );
    era.printButton('「꼭 이기자!」', 1);
    await era.input();
    await nature.say_and_wait('──응!');
    era.println();
    get_attr_and_print_in_event(60, [0, 0, 0, 0, 5], 0);
    await era.waitAnyKey();
  } else if (event_arg === 95 + 42) {
    await print_event_name('반짝반짝 빛나기를', nature);

    await era.printAndWait(
      `그날, 훈련 시간이 되었는데도 나이스 네이처가 나타나지 않았다. 평소라면 누구보다 일찍 왔을 ${nature.sex}인데……`,
    );
    await era.printAndWait(
      `${me.name}은(는) 걱정스러운 마음에 학원 안을 샅샅이 찾아다녔다──`,
    );
    await era.printAndWait(
      `──그러다 어느 나무 구멍 앞에서 ${nature.sex}를 발견했다. 이곳은 우마무스메들 사이에서 소리를 지르며 속풀이를 하는 곳으로 유명했다.`,
    );
    await nature.say_and_wait('……주변에 아무도 없겠지?');
    await nature.say_and_wait('좋아……!');
    await nature.say_and_wait('도대체── 왜! 그런 소릴 한 거야!? 나 이 멍청아──!!');
    await nature.say_and_wait('감히 그 정통파 주인공에게 선전포고를 하다니……!');
    await era.printAndWait(
      `사건의 발단은 텐노상(가을)이 끝난 후였다. ${me.name}과(와) 나이스 네이처는 돌아가는 길에 토카이 테이오를 만났고,`,
    );
    await era.printAndWait(
      `${nature.sex}가 올해 아리마 기념에 출주한다는 소식을 듣게 되었다. 분위기에 휩쓸린 나이스 네이처는 그만 「아리마 기념에선 반드시 널 이기겠어」라고 선언해버렸는데──`,
    );
    await nature.say_and_wait(
      '나 같은 조연이 너무 들떠버렸어!! 정말 못 봐주겠네…… 바보────!!',
    );
    await nature.say_and_wait(
      '아직 반짝반짝하지도 않으면서…… 바보 바보 바보 바보! 바보──!!',
    );
    await nature.say_and_wait('허억…… 허억……');
    await nature.say_and_wait('안 돼, 전혀 시원하지가 않아……');
    era.printButton('「네이처!」', 1);
    await era.input();
    await nature.say_and_wait(
      `으아악!? 트, 트트트, 트레이너 ${era.get('callname:60:0')}!?`,
    );
    await nature.say_and_wait('쌤이 여긴 왜…… 아, 앗!');
    await nature.say_and_wait('설마 벌써 트레이닝 시간이야……?');
    era.printButton('「응, 맞아」', 1);
    await era.input();
    await nature.say_and_wait(
      '아아아아아아아아아…… 아──!? 전에도 똑같은 일이 있지 않았어!?',
    );
    await nature.say_and_wait(
      '아우우…… 왜 항상 쌤한테만 이런 창피한 꼴을 보일까……',
    );
    era.printButton('「괜찮아」', 1);
    await era.input();
    await nature.say_and_wait('어……');
    era.printButton('「내 앞에서는 얼마든지 한심한 모습 보여줘도 돼」', 1);
    await era.input();
    await nature.say_and_wait('……윽!!');
    await nature.say_and_wait('으으윽…… 으아아아앙～～!!');
    await nature.say_and_wait(`${era.get('callname:60:0')}, 나……`);
    await nature.say_and_wait('달리기 싫어! 너무 무서워……!');
    await nature.say_and_wait('으와아아앙……!');
    await era.printAndWait(
      '그 후 나이스 네이처는 아이처럼 격식 없이 한참을 울어댔다. 그리고──',
    );
    await era.printAndWait(
      `마음이 좀 진정되자, ${nature.sex}는 ${me.name} 에게 솔직한 심정을 털어놓았다……`,
    );
    await nature.say_and_wait(
      '……지금 내 컨디션 정말 최고로 좋지? 내 생각에도…… 지금까지 중에 가장 완벽한 상태야.',
    );
    await nature.say_and_wait(
      '실력도 늘었고, 나 자신을 믿어보려고도 했어. 이번엔 정말 진지하게 부딪쳐보겠다고 결심도 했고.',
    );
    await nature.say_and_wait('하지만…… 만약 이래도 지면 어떡해?');
    await nature.say_and_wait(
      '최강의 상태인 지금의 나조차, 여전히 저 반짝이는 빛과는 거리가 한참 멀다면……?',
    );
    await nature.say_and_wait('……그게 너무 무서워.');
    await nature.say_and_wait(
      '여기서 지게 되면, 지금까지의 내 모습들까지 전부 부정당하는 기분이 들 것 같아.',
    );
    await nature.say_and_wait(
      '『난 아직 진심을 다하지 않았어』, 『아직 성장할 여지가 있어』, 『이건 내 실력의 전부가 아니야』……',
    );
    await nature.say_and_wait(
      '지금까지 그런 식으로 필사적으로 나를 보호해왔어. 하지만 그런 핑계…… 이제는 통하지 않잖아.',
    );
    era.printButton('「그만큼 진심이라는 거네」', 1);
    await era.input();
    await nature.say_and_wait('……! 그래, 나 정말 진심이야!');
    await nature.say_and_wait(
      '이렇게까지 진심인데 지게 된다면…… 또다시 『잘은 하지만 최고는 아닌』 예전의 나로 돌아가게 되잖아.',
    );
    await nature.say_and_wait('무서워. 정말 무서워……');
    era.printButton('「걱정 마, 넌 지지 않아」', 1);
    await era.input();
    await nature.say_and_wait('……미안, 이번만큼은 예전처럼 그 말을 곧이곧대로 받아들이기가 힘드네.');
    await nature.say_and_wait(
      '결과로 보답할 자신이 없거든. 이제는 더는 한 걸음도 못 나갈 것 같아……',
    );
    era.printButton('「그래도 널 믿고 싶은데, 안 될까?」', 1);
    await era.input();
    await nature.say_and_wait('……윽. 쌤이 나를 믿는 근거가 뭔데?');
    era.printButton('「여기 근거가 잔뜩 있어」', 1);
    await era.input();
    await nature.say_and_wait('──이건……');
    await nature.say_and_wait('……종이로 접은 트로피……야? 여전히 삐뚤삐뚤하네.');
    await nature.say_and_wait('……정말 계속 만들고 있었구나? 헤헤, 역시 비뚤어져 있어.');
    await nature.say_and_wait('오늘도 나를 위해 준비해준 거야? ……그 삐뚤삐뚤한 트로피를.');
    await nature.say_and_wait('쌤이 직접 만든 트로피……');
    await era.printAndWait(
      `${me.name}은(는) 나이스 네이처에게 지금까지 선물했던 수제 트로피들의 견본들을 보여주었다.`,
    );
    const temp = Object.values(era.get('cflag:60:육성성적'))
      .filter((e) => e.race !== race_enum.begin_race)
      .map((e) => e.race);
    await nature.say_and_wait(
      `${temp
        .slice(0, 4)
        .map((e) => `『${race_infos[e].name_zh}』`)
        .join('、')}…… 그 밖에도 이렇게나 많이……`,
    );
    await era.printAndWait('……날 위해 이렇게까지 해줬구나……');
    era.printButton('「이게 바로 내가 널 계속 믿어온 증거들이야」', 1);
    await era.input();
    await nature.say_and_wait('──지금까지 내가 쌓아온 것들……');
    await nature.say_and_wait(
      '……중간에 나를 포기할 수도 있었을 텐데. 왜 쌤은 나를 계속 믿어주는 거야?',
    );
    era.printButton('「그야 널 정말 좋아하니까」', 1);
    await era.input();
    await nature.say_and_wait('……뭐!? 왜 이런 타이밍에……');
    await era.printAndWait(
      `${me.name}은(는) 나이스 네이처에게, 한 명의 트레이너로서 승리를 포기하지 않고 여기까지 필사적으로 노력해온 그녀를 진심으로 지지하고 있음을 전했다……`,
    );
    await nature.say_and_wait('……응, 무슨 뜻인지 알겠어. 대충 예상은 했지만.');
    await nature.say_and_wait('휴우…… 응, 미안해. 내가 너무 당황했나 봐.');
    await nature.say_and_wait('『이기겠다』고 큰소리치는 건 역시 정말 무서운 일이네.');
    await nature.say_and_wait(
      `……테이오는 항상 이런 압박감과 싸워왔던 거구나.`,
    );
    await nature.say_and_wait('대단해…… 하지만, 나도 더는 두려워하지 않을래.');
    await nature.say_and_wait('나를 좋아해 주는 사람이 이렇게 곁에 있으니까!');
    await nature.say_and_wait('이겨야겠어. 나한테는 이제 정말 중요하고…… 아주 소중한 이유가 생겼으니까.');
    await nature.say_and_wait(
      '……그나저나, 트레이너도 참 고생이 많네. 내 멘탈 관리까지 해줘야 하고.',
    );
    await nature.say_and_wait('물론 이것도 당신 일 중 하나겠지만.');
    era.printButton('「내 일은 널 반짝이게 만드는 거니까」', 1);
    await era.input();
    await nature.say_and_wait('……그냥 일이라서 그런 거라고?');
    await nature.say_and_wait('……농, 담, 이야──! 방금 한 말은 못 들은 걸로 해줘!');
    await nature.say_and_wait('이제 훈련해야지! 나, 어서 가서 옷 갈아입고 올게!');
    await era.printAndWait(
      `……나이스 네이처가 다시 기운을 차린 듯하다. 그렇다면, 이제 함께 앞을 향해 나아가는 일만 남았다!`,
    );
    era.println();
    get_attr_and_print_in_event(60, [0, 0, 0, 5, 0], 0);
    await era.waitAnyKey();
  } else {
    return false;
  }
  return true;
};