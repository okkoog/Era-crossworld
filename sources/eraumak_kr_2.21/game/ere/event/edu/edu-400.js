/**
 * @file 선데이 사일런스 - 育成
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const yandere_list = require('#/data/event/yandere-list');
const { location_enum } = require('#/data/locations');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},cb:function)>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-400/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} */
const week_end_handlers = {};

week_end_handlers.beginning = async (ss, me, callname, flags, event_object) => {
  add_event(event_hooks.week_start, event_object);
  await print_event_name('선데이 사일런스 등장', ss);
  await ss.say_and_wait(['여, 기분 꽤 좋아 보이네, ', callname, '.']);
  await ss.say_and_wait(
    '그럼, 훈련 시작해볼까? 네 목표도 계속해서 1등을 차지하는 거 맞지?',
  );
  await era.printAndWait([
    '아름다운 흑발의 ',
    ss.get_uma_sex_title(),
    '는 ',
    me.get_colored_name(),
    '에게 손을 뻗었다. 자신감 넘치는 얼굴은 마치 활짝 핀 꽃 같았고, ',
  ]);
  await era.printAndWait([
    '건강하고 볼륨감 있는 육체는 ',
    me.get_colored_name(),
    '에게 본격화된 ',
    ss.get_uma_sex_title(),
    '가 이토록 아름답다는 걸 새삼 실감하게 했다.',
  ]);
  await era.printAndWait([
    '오전의 따스한 햇살이 유리창을 넘어 ',
    ss.sex,
    '와 ',
    me.get_colored_name(),
    '의 몸을 비추었다. 이 모든 것이 무척이나 자연스러우면서도 따스했다.',
  ]);
  await ss.say_and_wait(
    '서로를 선택한 파트너로서, 내 모든 상태를 네게 알려줄 필요가 있으니까. 그러니 훈련장으로 가는 게 어때?',
  );
  await era.printAndWait([
    ss.get_colored_name(),
    '가 완전히 대화의 주도권을 쥐었고, ',
    me.get_colored_name(),
    '은(는) 제안에 반대할 이유가 없었기에 ',
    ss.sex,
    '를 따라 훈련장으로 향했다.',
  ]);
  await era.printAndWait([
    '이날, ',
    me.get_colored_name(),
    '은(는) ',
    ss.sex,
    '의 전반적인 상태를 철저히 점검했고, ',
    me.get_colored_name(),
    '의 경험을 바탕으로 훈련 계획을 짜기 시작했다.',
  ]);
};

week_end_handlers[47 + 24] = async (ss, me, callname, flags, event_object) => {
  if (
    era.get('cflag:0:위치') !== location_enum.new_york ||
    era.get('cflag:400:위치') !== era.get('cflag:0:위치')
  ) {
    add_event(event_hooks.week_end, event_object);
    return false;
  }
  await print_event_name('심야의 폭풍우', ss);
  await era.printAndWait([
    '밤이 되어, 피곤한 기색의 ',
    ss.get_colored_name(),
    '가 ',
    ss.sex,
    '의 호텔방으로 돌아왔고, 마침 ',
    me.get_colored_name(),
    '이(가) 돌아가려던 참에 창밖으로 억수 같은 비가 쏟아지기 시작했다.',
  ]);
  await ss.say_and_wait([
    '타이밍 참 안 좋은 비네. ',
    callname,
    ', 여기서 잠깐 쉬었다 갈래...?',
  ]);
  await era.printAndWait([
    '창밖으로 천둥소리가 요란하게 울리고, 거센 폭풍우가 ',
    me.get_couple_title(),
    '이 묵고 있는 호텔을 덮쳤다. 귀를 찢을 듯한 천둥소리가 한 번 울린 후, 호텔 전체가 정전된 듯했다.',
  ]);
  await ss.say_and_wait([
    '잠깐... 잠깐 잠깐 잠깐, 허억... 허억... 헉... ',
    callname,
    '!! ',
    callname,
    ', 어디 있어?!',
  ]);
  await era.printAndWait([
    '어둠 속에서, ',
    ss.sex,
    '는 한동안 ',
    me.get_colored_name(),
    '의 모습을 찾지 못했고, 그 목소리엔 당황하고 어쩔 줄 몰라 하는 기색이 차고 넘쳤다.',
  ]);
  await ss.say_and_wait('안 돼... 날 혼자 두지 마... 제발, 네 모습을 보여줘, 응?');
  await era.printAndWait([
    '번개가 치며 순간적으로 번쩍인 빛을 따라, ',
    me.get_colored_name(),
    '은(는) ',
    ss.sex,
    '의 얼굴을 똑똑히 보았다. 평소의 ',
    ss.get_colored_name(),
    '와는 전혀 다르게, ',
  ]);
  await era.printAndWait([
    '무력감과 슬픔이 당장이라도 ',
    ss.sex,
    '를 집어삼킬 듯했다. 눈동자에 맺힌 눈물은 ',
    me.get_colored_name(),
    '이(가) 지금껏 ',
    ss.sex,
    '에게서 한 번도 본 적 없는 것이었다.',
  ]);
  await era.printAndWait([
    ss.get_colored_name(),
    '는 번개 빛을 따라 어두운 방 안에서 ',
    me.get_colored_name(),
    '이(가) 있는 곳을 확인하자마자, 마치 날아오듯 ',
    me.get_colored_name(),
    '에게 달려들었다.',
  ]);
  await era.printAndWait('쿵!');
  await era.printAndWait([
    '보아하니 ',
    ss.sex,
    '의 눈은 아직 캄캄한 방에 적응하지 못한 데다 무언가에 걸려 넘어진 듯했다. 바닥에 세게 부딪히는 소리와 함께 희미한 흐느낌이 들려왔다.',
  ]);
  era.printButton('「진정해, 나 여기 있어. 지금 그쪽으로 갈게」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 즉시 소리를 따라 다가가 ',
    ss.get_colored_name(),
    '의 손을 꽉 잡았다.',
  ]);
  await era.printAndWait([
    ss.sex,
    '는 ',
    me.get_colored_name(),
    '의 손바닥을 필사적으로 꽉 쥐었다. ',
    me.get_colored_name(),
    '은(는) 손가락 뼈가 비명을 지르는 듯한 아픔을 느꼈지만, ',
    ss.get_colored_name(),
    '는 전혀 개의치 않는 듯했다.',
  ]);
  await ss.say_and_wait(
    '괜찮아... 괜찮을 거야, 금방 지나갈 거야, 이 일은 금방 지나갈 테니까... 우리 같이 나갈 수 있어.',
  );
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    ss.sex,
    '의 상태가 심상치 않음을 느끼고, ',
    ss.sex,
    '를 이끌어 침대에 앉혔다.',
  ]);
  await era.printAndWait([
    '창밖의 비바람이 요란하게 창문을 때리는 가운데, ',
    me.get_colored_name(),
    '이(가) 휴대폰을 꺼내자, 부드러운 빛이 ',
    ss.sex,
    '의 겁에 질린 얼굴을 비추었다.',
  ]);
  era.printButton('「아무 데도 안 가. 여기서 네 곁에 있을게」 (호감도+50, 컨디션+1...)', 1);
  era.printButton(
    '「가서 닦을 수건 좀 찾아올게, 금방 올 거야」 (호감도+20, 컨디션-1)',
    2,
  );
  if ((await era.input()) === 1) {
    yandere_list.push(400);
    await ss.say_and_wait('응... 내 손 놓지 마, 제발 부탁할게...');
    await era.printAndWait([
      ss.sex,
      '는 드디어 조금 안정을 찾은 듯, 잔뜩 긴장했던 몸도 서서히 풀리기 시작했다. 그러고는 ',
      me.get_colored_name(),
      '을(를) 끌어당겨 자신의 침대 가장자리에 나란히 앉게 했다.',
    ]);
    await ss.say_and_wait([
      callname,
      '... 나 정말 무서워... 나, 그때도 이렇게 ',
      ss.sex,
      '의 손을 꽉 잡았었어...',
    ]);
    await ss.say_and_wait('...내가 어떻게 버텨냈는지 모르겠어. 차가 뒤집혔고...');
    await ss.say_and_wait([
      '우린 나갈 수 없었어... 처음엔 ',
      ss.sex,
      '들이 내게 말도 걸어주고 위로하면서 내 손을 잡아줬는데...',
    ]);
    await ss.say_and_wait(
      '하지만... 하지만... 너무 조용해졌어. 난... 난 뭘 마셨던 건지... 서서히 잠이 들어버렸고... 절대 손을 놓지 않겠다고 약속했는데.'
    );
    await ss.say_and_wait([
      '내가... 내가 손을 놓아버렸어... 내가 놓지 않았더라면... ',
      ss.sex,
      '들은 어쩌면... 어쩌면.',
    ]);
    await era.printAndWait([
      '그것은 ',
      ss.get_colored_name(),
      '의 마음속 가장 깊은 곳에 묻어둔 흉터였다. 인적 드문 들판에서 교통사고를 당해, 어른이었던 운전기사는 즉사했고, ',
    ]);
    await era.printAndWait([
      '차에 남겨진 어린 ',
      ss.get_uma_sex_title(),
      ' 몇 명은 차 안에 갇혀 구조를 기다려야 했지만, 구조대는 너무 늦게 도착했다.',
    ]);
    await era.printAndWait([
      '너무 늦은 탓에 오직 ',
      ss.get_colored_name(),
      '만이 살아남을 수 있었던 것이다. ',
      ss.sex,
      '는 지금껏 그 누구에게도 이 이야기를 한 적이 없었다. ',
      me.get_colored_name(),
      '을(를) 제외하고는.',
    ]);
    era.printButton(
      '「괜찮아, 내 손을 꽉 잡아. 난 절대 놓지 않을 거야. 너도 놓지 않을 거라고 믿어. 우리는 함께 걸어갈 거야.」',
      1,
    );
    await era.input();
    await ss.say_and_wait(
      '응... 좋아... 평생 안 놓을게, 약속해... 나, 삼관을 따낼 거야... 난... 계속 걸어갈 거야.',
    );
    await era.printAndWait([ss.sex, '의 피로가 몰려오며, 눈꺼풀이 무거워지기 시작했다.']);
    await era.printAndWait([
      '하지만 그럼에도 ',
      ss.sex,
      '는 여전히 ',
      me.get_colored_name(),
      '을(를) 붙잡은 손을 놓지 않았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ss.sex,
      '의 손을 마주 잡은 채, ',
      ss.sex,
      '가 조금씩 꿈나라로 빠져드는 것을 지켜볼 수밖에 없었다. 졸음이 밀려오는 가운데, ',
      me.get_colored_name(),
      '은(는) 그렇게 ',
      ss.sex,
      '의 곁에서 하룻밤을 보냈다.',
    ]);
    await era.printAndWait([
      '다음 날 이른 아침, ',
      me.get_colored_name(),
      '은(는) 침대 옆 벽에 기댄 채 앉아 있다가, 자신이 이렇게 ',
      ss.get_colored_name(),
      '의 방에서 잠들었다는 사실에 화들짝 놀라 고개를 들어 주변을 살펴보았다.',
    ]);
    await era.printAndWait([
      ss.sex,
      '는 이미 침대에 없었다. 고개를 돌려보니, 트레이닝복으로 갈아입은 ',
      ss.get_colored_name(),
      '가 화장실에서 걸어 나오고 있었다.',
    ]);
    await ss.say_and_wait([
      callname,
      ', 일어났어? 좀 더 쉴래? 오늘 내 훈련 계획은 네가 어제 다 짜뒀으니까, 농땡이 안 피울 테니 걱정 마.',
    ]);
    await era.printAndWait([
      ss.sex,
      '는 걱정스러운 듯 ',
      me.get_colored_name(),
      '의 관자놀이를 문질러 주었고, ',
      me.get_colored_name(),
      '이(가) 허리와 등을 쑤셔 하는 모습을 보며 안쓰러워했다.',
    ]);
    await era.printAndWait([
      '그러고는 ',
      me.get_colored_name(),
      '을(를) 방으로 데려다주었다. 문이 닫히기 전, ',
      me.get_colored_name(),
      '은(는) 묘한 말을 들었다.',
    ]);
    await ss.say_and_wait([
      callname,
      ', 약속한 거다... 너 절대 손 안 놓겠다고 했어. 그러니까... 만약 그 목표를 이루게 되면, 나... 평생 네 손을 잡고 있어도 되는 거지.',
    ]);
    era.println();
    flags.wait_flag = sys_change_motivation(400, 1) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(400, 0, 50);
  } else {
    await era.printAndWait([
      ss.sex,
      '는 다급히 손을 뻗었지만, 어둠 속에서 ',
      me.get_colored_name(),
      '은(는) 그 사실을 눈치채지 못했고, ',
    ]);
    await era.printAndWait([
      '몸을 돌려 재빨리 수건을 찾아와 ',
      ss.sex,
      '가 발을 삐어 움직이기 불편해진 것을 처치해 주었다.',
    ]);
    await era.printAndWait([ss.get_colored_name(), '는 다소 짜증 섞인 동시에 두려워하는 듯한 기색이었다.']);
    await ss.say_and_wait('고마워, 한밤중에 번거롭게 했네.');
    await era.printAndWait([
      ss.sex,
      '의 목소리는 한없이 잠겨 있었다. ',
      me.get_colored_name(),
      '의 소매를 붙잡고서, 마치 ',
      me.get_colored_name(),
      '이(가) 떠나지 않기를 바라는 듯했다. 그래서 ',
      me.get_colored_name(),
      '은(는) 어릴 적 들었던 자장가를 부르며 ',
      ss.sex,
      '를 재워주었다.',
    ]);
    era.drawLine({ content: '다음 날 아침' });
    await ss.say_and_wait('어젯밤엔... 꼴사나운 모습을 보여서 미안해.');
    await era.printAndWait([
      ss.sex,
      '는 눈이 좀 붉게 부어 있었다. 어젯밤 푹 쉬지 못한 게 분명했다. ',
      me.get_colored_name(),
      '이(가) ',
      ss.sex,
      '를 재우고 자신의 방으로 돌아간 후, 대체 무슨 일이 있었는지 알 길이 없었다.',
    ]);
    era.println();
    flags.wait_flag = sys_change_motivation(400, -1) || flags.wait_flag;
    flags.wait_flag = sys_like_chara(400, 0, 20);
  }
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean})>} */
const out_church_handlers = {};

out_church_handlers[47 + 1] = async (ss, me, callname, flags) => {
  era.set('cflag:400:축제이벤트표시', 0);
  await print_event_name('새해의 포부', ss);
  await era.printAndWait([
    '신사에서 우연히 ',
    ss.get_colored_name(),
    '와 마주친 건 정말 기묘한 인연이었다. 특히 ',
    me.get_colored_name(),
    '이(가) 보기에 ',
    ss.sex,
    '와 거의 똑같이 생긴 ',
    ss.get_uma_sex_title(),
    '가 ',
    ss.sex,
    '와 함께 웃고 떠드는 모습을 볼 때면 더욱 그랬다.',
  ]);
  await era.printAndWait([
    '거의 한 틀에서 찍어낸 듯한 두 ',
    ss.get_uma_sex_title(),
    '가 그렇게 ',
    me.get_colored_name(),
    '의 눈앞에 서 있었다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 이번에야말로 절대로 ',
    ss.get_colored_name(),
    '를 헷갈려선 안 된다고 다짐했다. 안 그랬다간 새해 첫날부터 보건실 신세를 질 테니 너무 불길하지 않은가.',
  ]);
  await era.printAndWait([
    '다행히도, ',
    ss.get_colored_name(),
    '는 여느 때처럼 조금 짜증스러운 표정을 대놓고 짓고 있었고, ',
  ]);
  await era.printAndWait('사람 많은 곳을 별로 안 좋아하는 티가 팍팍 났기에, 그것이 최고의 힌트가 되었다.');
  await ss.say_and_wait([
    '올 한 해도 잘 부탁해... ',
    callname,
    ', 올해는 내가 클래식 전선에 뛰어드는 해니까, 부디 훈련 지도를 늦추지 말아 줘...',
  ]);
  await era.printAndWait([
    ss.get_colored_name(),
    '를 한쪽으로 끌어당겼다. ',
    ss.get_colored_name(),
    '는 조금 친근하게 ',
    me.get_colored_name(),
    '의 손을 잡았지만, 왠지 긴장한 표정으로 ',
    get_chara_talk(25).get_colored_name(),
    '가 자신의 행동을 눈치채지 못하기를 바라는 눈치였다.',
  ]);
  era.printButton('「그럼, 올 한 해도 잘 부탁할게.」', 1);
  await era.input();
  await era.printAndWait([
    me.get_colored_name(),
    '의 이 말을 들은 ',
    ss.get_colored_name(),
    '는 기분 좋게 자신의 기모노를 쓰다듬더니, 갑자기 얼굴을 살짝 붉혔다.',
  ]);
  await ss.say_and_wait('저기, 기모노 띠가 느슨해졌는데... 네가 좀 묶어줄 수 있을까...');
  await era.printAndWait([
    '말을 이을수록 ',
    ss.get_colored_name(),
    '의 목소리는 점점 기어 들어갔고, 고개도 서서히 숙여졌다.',
  ]);
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '은(는) 그런 부끄러움은 안중에도 없다는 듯, 눈 깜짝할 새에 ',
    ss.sex,
    '의 기모노를 단정하게 다시 여며주곤, 대수롭지 않은 일이라는 듯 앞머리를 쓸어 넘겼다.',
  ]);
  await era.printAndWait([
    '그 후 ',
    ss.get_colored_name(),
    '는 ',
    me.get_colored_name(),
    '을(를) 이끌고 평소의 지갑 사정으로는 절대 사 먹지 못할 최고급 만찬을 먹으러 갔다. 하지만 ',
    ss.sex,
    '는 그저 ',
    me.get_colored_name(),
    '이(가) 먹는 모습을 보고 싶었던 것 같다.',
  ]);
  flags.wait_flag = get_attr_and_print_in_event(
    400,
    [0, 0, 0, 15, 0],
    0,
    JSON.parse('{"체력":300}'),
  );
  flags.wait_flag = sys_like_chara(400, 0, 40) || flags.wait_flag;
};

out_church_handlers[95 + 1] = async (ss, me, callname, flags) => {
  era.set('cflag:400:축제이벤트표시', 0);
  await print_event_name([ss.name, '와 함께 신사로 가기'], ss);
  await era.printAndWait([
    ss.get_colored_name(),
    '는 부드럽게 ',
    me.get_colored_name(),
    '의 손을 잡았다.',
  ]);
  await era.printAndWait([
    ss.sex,
    '가 입은 화려한 검은색 기모노는 ',
    ss.sex,
    '를 마치 속세를 벗어난 듯한 절세미녀처럼 보이게 했다.',
  ]);
  await era.printAndWait([
    '그리 춥지 않은 이른 아침, ',
    ss.sex,
    '는 직접 ',
    me.get_colored_name(),
    '의 집 문을 두드려, ',
    me.get_colored_name(),
    '을(를) 밖으로 끌어냈다.',
  ]);
  await ss.say_and_wait([callname, ', 만약 추우면 내 품에 손 넣어도 돼.']);
  await era.printAndWait([
    ss.sex,
    '는 자신의 몸에 딱 맞는 기모노를 가리켰다. 얼굴에 약간의 홍조를 띠며, 내심 ',
    me.get_colored_name(),
    '의 행동을 기대하는 듯했다.',
  ]);
  await era.printAndWait([
    '하지만 어쩌면 ',
    ss.sex,
    '가 속으로 안절부절못한 탓일까, ',
    ss.sex,
    '의 유혹 전술은 타이밍이 영 좋지 않았고, 1분도 채 지나지 않아 ',
    me.get_couple_title(),
    '은 신사 입구에 도착하고 말았다.',
  ]);
  await ss.say_and_wait([
    '하아, 됐어 됐어. ',
    callname,
    ' 같은 목석은 눈치라곤 눈곱만큼도 없으니까.',
  ]);
  await era.printAndWait([
    '곧이어 ',
    me.get_couple_title(),
    '은 신사 안으로 들어가, 평소 참배하듯 새전함에 동전을 던져 넣고 박수를 치며 소원을 빌었다.',
  ]);
  await ss.say_and_wait([callname, ', 무슨 소원 빌었어?']);
  era.printButton('「우리 둘 다 건강하고, 안심할 수 있는 행복한 날들을 보내게 해달라고.」', 1);
  await era.input();
  await era.printAndWait([
    '말을 마친 ',
    me.get_colored_name(),
    '은(는) ',
    ss.sex,
    '의 작은 손을 잡았다. 검은 레이스 장갑을 낀 손의 감촉이 어쩐지 오묘하게 느껴졌다.',
  ]);
  await era.printAndWait([
    ss.get_colored_name(),
    '는 장갑 너머로 ',
    me.get_colored_name(),
    '의 체온을 느끼는 듯하더니, ',
    me.get_colored_name(),
    '의 손을 자신의 기모노 안으로 이끌었다.',
  ]);
  await ss.say_and_wait([
    '음, 내 소원은 비밀이야. ',
    callname,
    '. 네가 입을 비틀어 열지 않는 이상, 절대 말 안 해줄걸.',
  ]);
  await era.printAndWait([
    '말을 마치고 ',
    ss.sex,
    '는 볼에 가볍게 입을 맞추곤, 도망치듯 신사를 떠났다.',
  ]);
  flags.wait_flag = get_attr_and_print_in_event(
    400,
    [5, 5, 5, 5, 5],
    0,
    JSON.parse('{"체력":300}'),
  );
  flags.wait_flag = sys_like_chara(400, 0, 20) || flags.wait_flag;
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams)>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-400/race-end')(race_end_handlers);

module.exports = class extends CustomizedEdu {
  async office_cook(ss, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 400) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'sugar_or_milk') {
      return;
    }
    await print_event_name('커피 맛은 어떤 게 좋을까?', ss);
    await ss.say_and_wait('커피에 설탕 넣을래, 우유 넣을래? 아님 아무것도 안 넣을래?');
    era.printButton('「뭐?」', 1);
    await era.input();
    await ss.say_and_wait([
      '네 커피에 설탕을 넣을 거냐, 우유를 넣을 거냐 묻는 거잖아. 내가 ',
      sys_get_colored_callname(400, 25),
      ' 한테 커피 타는 법을 좀 배웠거든. 지금 맛보게 해줄 테니까, 뭐 넣을 거야?',
    ]);
    era.printButton('「역시 각설탕을 좀 많이 넣어야지.」 (스태미나+20)', 1);
    era.printButton('「우유를 살짝 넣으면 좋겠어.」 (지능+20)', 2);
    const ret = await era.input();
    await ss.say_and_wait('그래? 그럼 한 번 마셔봐. 내가 탄 커피 어때?');
    await era.printAndWait([
      '커피의 쓴맛과 단맛 모두 훌륭했다. 초보자가 처음 내린 솜씨라고는 믿기지 않을 정도였다. ',
      me.get_colored_name(),
      '의 표정을 본 ',
      ss.get_colored_name(),
      '는 기분 좋은 듯 입꼬리를 올렸다.',
    ]);
    await ss.say_and_wait(
      '맛있으면 다음번에도 계속 내가 타줄게. 별로인 부분 있으면 바로바로 말하고.',
    );
    await era.printAndWait([
      '이렇게 ',
      ss.get_colored_name(),
      '은 휴게실의 음료 공급을 독점하게 되었다.',
    ]);
    get_attr_and_print_in_event(
      400,
      ret === 1 ? [0, 20] : [0, 0, 0, 0, 20],
      0,
    ) && (await era.waitAnyKey());
    return true;
  }

  async office_game(ss, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 400) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'play_dice') {
      return;
    }
    let wait_flag;
    await print_event_name('운 시험 한 번 해볼래?', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      '는 트럼프 카드를 한 벌 꺼내 ',
      me.get_colored_name(),
      '에게 흔들어 보였다.',
    ]);
    await ss.say_and_wait([
      callname,
      ', 도둑잡기 한판 어때? 지금 휴식 시간이잖아.',
    ]);
    await era.printAndWait([
      '도둑잡기는 쏜살같이 진행되었고, 이내 ',
      ss.get_colored_name(),
      '의 손에는 카드가 두 장밖에 남지 않았다.',
    ]);
    await ss.say_and_wait(['후후훗, ', callname, ', 선택 잘해야 할걸.']);
    era.printButton('왼쪽 카드를 뽑는다 (스태미나&지능+10)', 1);
    era.printButton('오른쪽 카드를 뽑는다 (스피드+10, 스킬포인트+20)', 2);
    if ((await era.input()) === 1) {
      await ss.say_and_wait(
        '아무래도 내 운이 좀 더 좋았던 모양이네. 이걸로 트레이너가 담당에게 진 거니까, 그 대가로 밥 좀 사다 줄래?',
      );
      await era.printAndWait([
        '결국 식당에 가서 ',
        ss.get_colored_name(),
        '를 위해 ',
        ss.sex,
        '가 좋아하는 밥과 간식을 사다 주어야 했다.',
      ]);
      wait_flag = get_attr_and_print_in_event(400, [0, 10, 0, 0, 10], 0);
    } else {
      await ss.say_and_wait([
        '에엑, ',
        callname,
        '이 이겼잖아.. 그렇다면, ',
        callname,
        ', 점심엔 뭐 먹고 싶어? 내가 밥 사다 줄게. 대신 내 타이머 기록 좀 재줄래?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 흔쾌히 ',
        ss.sex,
        '의 부탁을 승낙했고, 그 결과 ',
        ss.sex,
        '는 길게 늘어선 줄과 마주쳐야 했다. 한참을 기다린 끝에 어쩔 수 없다는 표정으로 도시락을 들고 돌아왔다.',
      ]);
      wait_flag = get_attr_and_print_in_event(400, [10], 20);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_church(ss, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 400) {
      add_event(hook.hook, event_object);
      return;
    }
    if (out_church_handlers[event_object?.arg]) {
      const flags = { wait_flag: false };
      await out_church_handlers[event_object.arg](ss, me, callname, flags);
      flags.wait_flag && (await era.waitAnyKey());
      return true;
    }
  }

  async race_end(ss, me, callname, hook, extra_flag) {
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](ss, me, callname, extra_flag))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('레이스 승리!', ss);
        await ss.say_and_wait('음, 내가 이겼네. 경기장에서 내 활약 본 소감이 어때?');
        await me.say_and_wait(
          Math.random() < 0.5
            ? '거뜬했지, 이 기세로 돌아가서 다음 레이스 준비하자'
            : '딱히 어려움은 없었던 것 같네, 그래도 다음 훈련에선 방심하지 마',
        );
      } else if (extra_flag.rank <= 5) {
        await print_event_name('레이스 입상!', ss);
        await ss.say_and_wait(
          '솔직히 좀 아쉽네, 대체 어디서 문제가 생겼던 걸까? 이따 돌아가서 같이 복기해보자.',
        );
        await me.say_and_wait(
          Math.random() < 0.5
            ? '기대만큼은 아니었지만, 이 정도면 아주 잘했어'
            : '지기 싫으면 다음엔 더 완벽하게 해야 해',
        );
      } else if (extra_flag.rank <= 10) {
        await print_event_name('레이스 패배!', ss);
        await ss.say_and_wait([
          callname,
          ', 우리 생각 좀 바꿔야 할 거 같아. 이대로 계속 지면 곤란해지니까.',
        ]);
        await me.say_and_wait(
          Math.random() < 0.5
            ? '네 말이 맞아, 우리 둘 다 접근 방식을 바꿔보자. 다음엔 더 잘할 수 있을 거야'
            : '결과는 아쉽지만, 여기서 스스로를 너무 옥죄는 건 좋은 방법이 아니야',
        );
      } else {
        return await super.race_end(ss, me, callname, hook, extra_flag);
      }
    }
  }

  async school_atrium(ss, me, callname, hook, extra_flag, event_object) {
    const cur_chara = era.get('flag:현재상호작용캐릭터');
    if (cur_chara > 0 && cur_chara !== 400) {
      add_event(event_hooks.school_atrium, event_object);
      return;
    }
    if (event_object?.arg !== 'enjoy_cat') {
      return;
    }
    await print_event_name('고양이와 친해지기 작전', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      '는 수풀 옆에 서서 무언가 고민하는 듯했다.',
    ]);
    await ss.say_and_wait([
      callname,
      '!! 마침 잘 왔어. 나 좀 도와줄래? 여기 새끼 고양이가 숨어 있는데, 이따가 비 올 때 비 맞고 병이라도 나면 큰일이잖아!',
    ]);
    era.printButton('「역시 일단 먹이로 유인해 봐야지.」 (근성&지능+10)', 1);
    era.printButton('「선수를 쳐서, 고양이를 붙잡아 봐.」 (스태미나&파워+10)', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        ss.get_colored_name(),
        '는 그 말을 듣고 고개를 끄덕이더니, ',
        me.get_colored_name(),
        '의 어이없어하는 눈빛을 뒤로한 채 빵으로 고양이를 꾀어내려 했다. ',
      ]);
      await era.printAndWait(['하지만 보나 마나 ', ss.sex, '의 방법은 씨알도 먹히지 않았다.']);
      await me.say_and_wait('내가 해볼게, 마침 간식거리를 좀 챙겨왔거든.');
      await era.printAndWait([
        '소시지 하나를 수풀 앞에 내려놓자, 아기 고양이가 경계하며 고개를 빼꼼 내밀었다. 인간 두 명을 발견하곤 번개같이 쏙 들어갔지만, 굶주림이 이성을 이겼는지 결국 참지 못하고 튀어나와 소시지를 물었다. 그러다 그만 ',
        ss.get_colored_name(),
        '의 손에 덥석 붙잡히고 말았다.',
      ]);
    } else {
      await ss.say_and_wait('그것도 그렇네, 이럴 땐 내 특기를 발휘해야지.');
      await era.printAndWait([
        ss.get_colored_name(),
        '는 기지개를 켜며 눈매를 날카롭게 빛냈다. 천천히 수풀을 헤치고 들어가자, 바짝 긴장한 채 털을 곤두세운 새끼 고양이가 보였다.',
      ]);
      await ss.say_and_wait('꽤나 경계하고 있네... 하지만 이 정도라면.');
      await era.printAndWait([
        ss.sex,
        '는 재빠르게 손을 뻗어 고양이의 목덜미를 낚아챘다. 방금 전까지만 해도 ',
        ss.get_colored_name(),
        '를 위협하려던 고양이는 순식간에 얌전해져서, ',
      ]);
      await era.printAndWait([
        '대롱대롱 매달린 채 얌전히 ',
        ss.get_colored_name(),
        '의 손안에 들어왔다.',
      ]);
    }
    await era.printAndWait([
      '고양이를 붙잡은 후, ',
      ss.get_colored_name(),
      '는 녀석을 휴게실 근처로 데려왔고, 창밖으로 쏟아지는 비를 보며 미소 지었다.',
    ]);
    await ss.say_and_wait('이 억수 같은 비에 홀딱 젖었으면, 넌 정말 큰일 났을 거야, 꼬맹아.');
    await era.printAndWait([
      '새끼 고양이는 사료에 코를 박고 허겁지겁 먹느라 ',
      ss.get_colored_name(),
      '의 말에 신경 쓸 겨를조차 없었다.',
    ]);
    await ss.say_and_wait('이따가 동물 병원에 데려가 봐야겠다...');
    await era.printAndWait(
      '그리고 이 새끼 고양이는 그 길로 구충제 투여와 중성화 수술까지 받게 되었고, 트레센으로 돌아왔을 땐 이미 세상 다 산 듯한 해탈한 표정이 되어 있었다.'
    );
    get_attr_and_print_in_event(
      400,
      ret === 1 ? [0, 0, 0, 10, 10] : [0, 10, 10],
      0,
    ) && (await era.waitAnyKey());
    return true;
  }

  async week_end(ss, me, callname, hook, extra_flag, event_object) {
    if (!week_end_handlers[event_object?.arg]) {
      return await super.week_end(
        ss,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_end_handlers[event_object.arg](
        ss,
        me,
        callname,
        flags,
        event_object,
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }

  async week_start(ss, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return await super.week_start(
        ss,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_start_handlers[event_object.arg](
        ss,
        me,
        callname,
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};