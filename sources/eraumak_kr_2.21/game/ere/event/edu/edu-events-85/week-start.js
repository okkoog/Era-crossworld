const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const say_by_mother = require('#/event/edu/edu-events-85/say-by-mother');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} handlers */
module.exports = (handlers) => {
  handlers[35] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('화려한 최고 걸작', ruby);
    let relation_change;
    await era.printAndWait([
      '반복되는 트레이닝 속 어느 날,【화려한 일족】의 서신을 읽은 ',
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '와 함께 다이이치 가문의 본가를 방문할 준비를 하고 있었다.',
    ]);
    await era.printAndWait([
      ruby.sex,
      '와 신뢰 관계를 구축하기 위해서는, 우선 ',
      ruby.sex,
      '가 소중히 여기는 것들을 이해해야만 한다.',
    ]);
    await era.printAndWait(['그러나 ', me.get_couple_title(), '이 출발하기 직전……']);
    await ruby.say_and_wait('죄송합니다만, 일정을 잠시 변경하도록 하겠습니다.');
    await era.printAndWait([
      '이유를 전혀 전달받지 못한 채, ',
      me.get_colored_name(),
      '이(가) 안내받은 곳은 어느 호텔의 객실이었다. ',
      me.get_colored_name(),
      '은(는) 방에 준비되어 있던 정장으로 갈아입었다.',
    ]);
    await ruby.say_and_wait('조금 더 화려한 넥타이를 준비해 주시겠어요?');
    await say_by_passer_by('집사', [
      '알겠습니다, ',
      ruby.sex_code === 1 ? '도련님': '아가씨',
      '.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 머리끝부터 발끝까지 훑어보더니, 눈을 감고 고개를 돌려버렸다.',
    ]);
    era.printButton(`「${m_call_r}?」`, 1);
    await era.input();
    await ruby.say_and_wait('실례했습니다, 말씀이 늦었군요.');
    await ruby.say_and_wait('어머님께서 제 트레이너 분이 본가에 오신다는 소식을 들으시고, 일부러 이곳까지 마중을 나와 주셨습니다.');
    await me.say_and_wait('하아!?', true);
    era.drawLine();
    await era.printAndWait([
      '우마무스메 계에서 모르는 이가 없으며, 수많은 화려한 레이스를 수놓았던 ',
      ruby.get_uma_sex_title(),
      '……',
    ]);
    await say_by_mother([
      '처음 뵙겠군요, ',
      r_call_m,
      '. 제가 다이이치 루비의 ',
      ruby.sex_code === 1 ? '아버지': '어머니',
      '되는 사람입니다.',
    ]);
    await era.printAndWait([
      '눈앞에 있는 ',
      ruby.get_uma_sex_title(),
      '는 경외심마저 자아내는 아름다움뿐만 아니라, ',
      ruby.sex,
      '의 용모, 분위기까지 그 모습이 마치——',
    ]);
    era.printButton('（성장한 듯한 다이이치 루비）', 1);
    await era.input();
    await say_by_mother(['공항에서 ', r_call_m, '이 오신다는 이야기를 듣고 급히 찾아왔습니다. 갑작스럽게 결례를 범해 유감입니다.']);

    era.printButton('「별말씀을요, 괜찮습니다.」', 1);
    await era.input();
    await say_by_mother([
      '그동안 우리 ',
      ruby.sex_code === 1 ? '아들': '딸',
      '이 신세를 많이 졌더군요.',
    ]);
    era.printButton(`「저야말로 과분한 보살핌을 받고 있습니다.」`, 1);
    await era.input();
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '아버님': '어머님',
      ', 이 뒤에도 일정이 있으시지요? 저도 동행하겠습니다.',
    ]);
    await say_by_mother('글쎄요~ 그랬던가요……');
    await me.say_and_wait('!', true);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 어머님에게 시선을 붙잡혔다. 그것은 화려한 일족의 정점에 선 자로서, ',
      me.get_colored_name(),
      '(이)라는 인간의 본질을 꿰뚫어 보려는 듯한 눈빛이었다.',
    ]);
    await era.printAndWait('그 눈빛에는 사람의 마음을 압도하는 무시무시한 박력이 깃들어 있었다.');
    await era.printAndWait([
      '이때, ',
      me.get_colored_name(),
      '의 머릿속에 테스트를 치르던 그날의 기억이 스쳐 지나갔다.',
    ]);
    await ruby.used_to_say_and_wait(
      '그렇습니다. 부디 그 마음가짐을 잊지 말아 주십시오. 만약 당신에게 목표로 삼은 대상이 존재한다면, 그에 걸맞은 품격과 행동거지를 갖추어야만 합니다.',
    );
    await ruby.say_and_wait('오직 그래야만, 언젠가 자신이 원하는 모습이 될 수 있는 법이니까요.', true);
    await era.printAndWait('그리고, 그 당시에 지었던 옅은 미소까지.');
    await era.printAndWait([
      '이 몸이 ',
      ruby.sex,
      '의 트레이너인 이상, ',
      ruby.sex,
      '와 어깨를 나란히 하고 설 때는 당연히 가슴을 당당히 펴야 마땅하다.',
    ]);
    await say_by_mother('————');
    await say_by_mother('당신도 제 레이스를 알고 있겠지요.');
    era.printButton('고개를 끄덕인다', 1);
    await era.input();
    await say_by_mother('그렇습니까.');
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '아버님': '어머님',
      ', 아직 용무가……',
    ]);
    await say_by_mother('아니요, 이미 끝났습니다.');
    await say_by_mother([r_call_m, ', 이후의 일은 당신의 판단에 맡기도록 하지요.']);
    await say_by_mother(['부디 잊지 말아 주십시오, 루비가 어떤 아이인지를.']);
    await ruby.say_and_wait('————!', true);
    await say_by_mother('대단히 죄송합니다만, 다음 일정이 있어 이만 역으로 가봐야겠군요.');
    await say_by_mother('우리 가문의 역사는 그 서적들과…… 루비의 입을 통해 천천히 알아가도록 하십시오.');
    await say_by_mother([
      r_call_m,
      ', 우리 집의 어린 ',
      ruby.sex_code === 1 ? '도련님': '아가씨',
      '를 부디 잘 부탁드립니다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 ',
      ruby.sex_code === 1 ? '아버님': '어머님',
      '을 배웅해 드린 뒤, ',
      me.get_colored_name(),
      '은(는) 서재의 수많은 소장 도서들을 살펴보고 트레센 학원으로 돌아왔다.',
    ]);
    era.printButton(
      `「너희 ${ruby.sex_code === 1 ? '아버님': '어머님'}께선 정말 대단하신 분이구나.」`,
      1,
    );
    era.printButton(
      `「${m_call_r}의 ${ruby.sex_code === 1 ? '아버님': '어머님'}은, ${m_call_r}보다 훨씬 대단하신걸.」`,
      2,
    );
    if ((await era.input()) === 1) {
      relation_change = 3;
    } else {
      relation_change = 5;
    }
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '아버님': '어머님',
      '께서는 화려한 일족의 『결정체』이시며, 지금도 일족을 표면에서 지탱하는 상징이십니다.',
    ]);
    await ruby.say_and_wait([
      '그런 ',
      ruby.sex_code === 1 ? '아버님': '어머님',
      '께서 당신에게……',
    ]);
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('아니요, 아무것도 아닙니다.');
    await ruby.say_and_wait([
      '조금 전에 제게 『제 눈에 ',
      ruby.sex_code === 1 ? '아버님': '어머님',
      '은 어떤 분이셨냐』고 물으셨지요.',
    ]);
    await ruby.say_and_wait('답은 하나, 누구보다도 화려한 분이십니다.');
    await ruby.say_and_wait('현역 시절의 경기 영상을 보신다면 그 누구라도 그렇게 생각할 수밖에 없을 것입니다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 눈동자가 순간적으로 찬란한 빛을 발했다.',
    ]);
    await era.printAndWait([
      '그러고 보니, ',
      ruby.sex,
      '는 어머님과의 만남이 결정되자마자 곧바로 ',
      me.get_colored_name(),
      '의 의복을 정장으로 새로 맞춰 주었었다.',
    ]);
    era.printButton(
      `「너는 너희 ${ruby.sex_code === 1 ? '아버님': '어머님'}을 무척 존경하는구나.」`,
      1,
    );
    await era.input();
    await ruby.say_and_wait([
      '네, 제가 나아갈 길에서 가장 전문적이고 휘황찬란한 귀감이 되어주시는 분이기에, 진심으로 존경하고 있습니다.',
    ]);
    await ruby.say_and_wait([
      ruby.sex_code === 1 ? '아버님': '어머님',
      '께서 남기신 위대한 궤적은…… 앞으로 일족의 번영을 위해 제가 반드시 본받고 이어받아야 할 유산입니다.',
    ]);
    await era.printAndWait([
      '어째서 그녀가 트리플 티아라 노선을 고집하려 하는가…… ',
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '에게서 가문의 역사를 뛰어넘고자 하는, 결코 단순하지 않은 강인한 의지를 느꼈다.',
    ]);
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      85,
      [0, 0, 5],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(85, 0, relation_change) || flags.wait_flag;
  };

  handlers[47] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('그러므로, 안이해질 수 없다', ruby);
    let relation_change = 0,
      love_change = 0;
    await era.printAndWait('훈련장');
    await ruby.say_and_wait([r_call_m, ', 다시 시작하도록 하죠.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '로부터, 그녀의 다리에 선천적인 결함이 있다는 사실을 전해 들었다.',
    ]);
    await era.printAndWait(
      '정확히 말하자면 【다리의 형상에 문제가 있으나, 당장은 레이스에 지장이 없다】는 내용이었다.',
    );
    await era.printAndWait([
      '그렇기 때문에, 처음에는 굳이 ',
      me.get_colored_name(),
      '에게 따로 보고하지 않았던 모양이다.',
    ]);
    await era.printAndWait([
      '하지만, ',
      me.get_colored_name(),
      '이(가) 조심스럽게 질문했을 때도 딱히 숨기려 들지 않았다.',
    ]);
    await era.printAndWait([
      '달릴 때 가해지는 부하가 매우 큰 부위였기에, ',
      me.get_colored_name(),
      '은(는) 이것이 그리 간단히 넘길 문제가 아니라고 판단했다.',
    ]);
    era.printButton('「정말로, 괜찮은 거야?」', 1);
    await era.input();
    await ruby.say_and_wait('당연히 문제없습니다. 게다가 부모님께서도……');
    await ruby.say_and_wait('부모님뿐만 아니라, 주변의 모든 분께서 수많은 지원과 도움을 아끼지 않으셨으니까요.');
    await era.printAndWait([
      '찰나의 순간, ',
      ruby.get_colored_name(),
      '의 표정에 무척이나…… 고단한 기색이 스쳤다.',
    ]);
    era.printButton('「선천적인 변형인 거야?」', 1);
    await era.input();
    await ruby.say_and_wait('네, 태어났을 당시에는 의사로부터 평생 제대로 걷지 못할 수도 있다는 진단을 받았습니다.');
    await ruby.say_and_wait('하지만 부모님께서는 저를 위해 모든 수단과 방법을 총동원하여 헌신적으로 이 문제에 맞서 주셨지요.');
    era.printButton('「그래서 그렇게 간절하게 달리는 거였구나.」', 1);
    await era.input();
    await ruby.say_and_wait('그렇게 하지 않으면 안 되는 것 아닌가요?');
    await ruby.say_and_wait([
      '——저는 『화려한 일족』의 상징이 될 ',
      ruby.get_uma_sex_title(),
      '로 태어나 이 고귀한 삶을 누리고 있으니까요.',
    ]);
    await ruby.say_and_wait(
      '그 노력의 결과로 다리에 가해지는 부하를 최적화하는 주법을 체득했고, 지금은 달리기 자세도 완전히 개선되었습니다.',
    );
    await ruby.say_and_wait('현재는 주치의께서도 격렬한 레이스를 충분히 버텨낼 수 있는 신체라고 보증해 주셨습니다.');
    await ruby.say_and_wait('만약, 만에 하나라도……');
    era.printButton('「지금은 우선 트레이닝에만 집중하자.」', 1);
    era.printButton('「네 다리를 잠시 확인해 봐도 될까?」', 2);
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('네. 제 스스로 확신이 서기 전까지는 신체를 더욱 단련해 나가겠습니다.');
      await ruby.say_and_wait('제가 완수해야 할 사명은 이미 정해져 있으니까요.');
      await ruby.say_and_wait('사담이 조금 길어졌군요, 저는 코스로 가보겠습니다.');
      await era.printAndWait('트레이닝은 무사히 마무리되었다.');
    } else {
      await ruby.say_and_wait('불순한 동기——로 보이지는 않는군요.');
      await ruby.say_and_wait('당신은 공공장소에서 이런 행위를 요구하는 것이 무엇을 의미하는지 알고 계십니까?');
      era.printButton('바닥에 한쪽 무릎을 꿇고 앉는다.', 1);
      await era.input();
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('최소한, 저쪽에 있는 벤치로……');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 가냘픈 두 다리를 한 치 한 치 세심하게 살펴보았다.',
      ]);
      await era.printAndWait([
        '무언가에 홀린 듯, ',
        me.get_colored_name(),
        '은(는) 스타킹의 한 자락을 가볍게 잡아당겼다가 「타악」 하고 손을 놓았다.',
      ]);
      await era.printAndWait([
        '당혹감과 수치심에 휩싸인 ',
        ruby.sex_code === 1 ? '도련님': '아가씨',
        '는 아랫입술을 지그시 깨문 채 ',
        me.get_colored_name(),
        '을(를) 매섭게 노려보았고, ',
        me.get_colored_name(),
        '이(가) 한바탕 꾸지람을 들을 준비를 하던 그때.',
      ]);
      await ruby.say_and_wait('……신발을 제대로 신겨 주십시오.');
      await era.printAndWait([
        '그 후 ',
        me.get_couple_title(),
        '은(는) 아무 일도 없었다는 듯 순조롭게 트레이닝을 마쳤다.',
      ]);
      relation_change = 3;
      love_change = 1;
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(85, [5], 0, undefined, true);
    flags.wait_flag =
      sys_like_chara(85, 0, relation_change, true, love_change) ||
      flags.wait_flag;
  };

  handlers[47 + 19] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('그저 정면만을 응시하며', ruby);
    await era.printAndWait([
      '2400m 거리의 ',
      race_infos[race_enum.yush_him].get_colored_name(),
      '를 겨냥하여, ',
      ruby.get_colored_name(),
      '는 가혹한 스태미나 단련에 매진하고 있었다.',
    ]);
    era.printButton('「상태는 좀 어때?」', 1);
    await era.input();
    await ruby.say_and_wait('아무 문제 없습니다.');
    era.printButton('「정말로 무리하는 거 아니야?」', 1);
    await era.input();
    await ruby.say_and_wait('네.');
    await ruby.say_and_wait('단순히 제 체력이 부족한 것뿐입니다.');
    await ruby.say_and_wait('트레이너님께서 스태미나를 보완할 수 있는 훈련 방안을 더 많이 제안해 주셨으면 합니다.');
    await ruby.say_and_wait('그럼, 저는 한 바퀴 더 돌고 오겠습니다.');
    await me.say_and_wait('단순한 체력 부족이라……', true);
    await era.printAndWait('확실히, 그 원인도 틀린 것은 아니다.');
    await era.printAndWait([
      '하지만 그것보다는, 인간의 힘으로는 어찌할 수 없는 거대한 장벽이 ',
      ruby.sex,
      '의 앞을 가로막고 있는 듯한 기분이 들었다. 그것은 바로——',
    ]);
    era.printButton('주법.', 1);
    era.printButton('적성.', 2);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 보기에 「적성」 그 자체에는 우열이 존재하지 않는다.',
    ]);
    await era.printAndWait('……다만, 본인이 나아가고자 하는 지향점에 따라서 그것은 거대한 통곡의 벽으로 변모하기도 한다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 목표로 삼은 레이스 중에는 중장거리 경기가 다수 포함되어 있었기에, ',
      ruby.sex,
      '가 이 길을 걷는 이상 수많은 고난과 장벽에 부딪힐 것이 자명했다.',
    ]);
    await era.printAndWait('현재 단계에서는 확답을 내릴 수 없으므로, 지금은 그저 묵묵히 지구력 훈련을 반복할 뿐이다.');
    await era.printAndWait('이 훈련이 유의미한 성과를 거둔다면, 그것을 기반으로 완전히 새로운 트레이닝 플랜을 수립해야 하리라.');
    era.drawLine();
    await ruby.print_and_wait('어느덧 시간은 흘러 방과 후가 되었다.');
    await ruby.say_and_wait(
      '2400m라는 거리는, 내게 있어 다소 가혹할지도 모르겠어. 명백히 내 적성 외의 영역이야.',
      true,
    );
    await ruby.say_and_wait(
      [r_call_m, '께서도 그렇게 추측하고 계셨겠지. 나 역시 몸으로 실감하고 있고.'],
      true,
    );
    await ruby.say_and_wait('분해……', true);
    await ruby.say_and_wait(
      [
        '하지만 반드시 ',
        race_infos[race_enum.yush_him].get_colored_name(),
        '에 도전하여, 어머님께서 끝내 이루지 못하셨던 승리를 거머쥘 거야.',
      ],
      true,
    );
    await ruby.say_and_wait('일족의 역사란, 그렇게 한 걸음씩 위업을 쌓아 올리는 법이니까.', true);
    await say_by_passer_by('집사', [
      ruby.sex_code === 1 ? '도련님': '아가씨',
      ', 모실 시간이 되었습니다.',
    ]);
    await ruby.say_and_wait('죄송하지만 일정을 변경해야겠군요.');
    await ruby.say_and_wait('지금부터 자율 연습을 진행할 테니, 귀가 후에 필요한 조치들은 당신 선에서 처리해 주십시오.');
    await say_by_passer_by(
      '집사',
      '잘 알겠습니다. 이쪽 일은 전혀 염려치 마시고, 부디 훈련에만 온전히 집중해 주십시오.',
    );
    await ruby.say_and_wait('네.');
    await ruby.say_and_wait('반드시 앞으로 나아가야만 합니다.');
    flags.wait_flag = get_attr_and_print_in_event(85, [0, 5], 0);
  };

  handlers[47 + 29] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:85:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return false;
    }
    await print_event_name('여름 합숙 (클래식 시즌)', ruby);
    await era.printAndWait([
      '가벼운 조깅을 하던 도중, ',
      ruby.get_colored_name(),
      '가 중심을 잃고 엎어졌다.',
    ]);
    era.printButton('「괜찮아!?」', 1);
    await era.input();
    await ruby.say_and_wait('모래사장에 발이 걸렸을 뿐입니다, 아무렇지도 않아요.');
    era.printButton('「어디 다친 데는 없고?」', 1);
    await era.input();
    await ruby.say_and_wait('결단코 그런 일은 없습니다.');
    await era.printAndWait('안색을 보아하니 정말 상처는 없는 듯했으나……');
    await era.printAndWait([
      '여름 합숙이 시작된 이래로, ',
      ruby.get_colored_name(),
      '는 매일같이 자신을 한계까지 몰아붙이고 있었다.',
    ]);
    await era.printAndWait([
      '오직 다가올 ',
      race_infos[race_enum.shuk_sho].get_colored_name(),
      '에서 가시적인 성과를 증명해 내기 위해서.',
    ]);
    await era.printAndWait([
      '모처럼 아름다운 바다에 찾아왔으니, ',
      me.get_colored_name(),
      '은(는) 전환점을 겸해 한 가지 제안을 떠올렸다……',
    ]);
    era.printButton('「나비를 잡으러 가볼까?」（파워 +10）', 1);
    era.printButton('「좋아, 모래사장 모래주머니 훈련이다!」（근성 +10）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await ruby.say_and_wait('……이해할 수 없는 제안이군요.');
      era.printButton('「이 해변에만 서식하는 아주 특이한 종류래. 화려하고 고귀한 게 너랑 참 잘 어울려.」', 1);
      await era.input();
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('고통스러운 고치를 찢고 나오는 나비라니, 어쩌면 지금의 제게는 과분한 비유일지도 모르겠군요.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 호기심 어린 눈으로 나비를 쫓아다니는 동안, 그녀의 화려한 양산은 ',
        me.get_colored_name(),
        '이(가) 대신 받쳐 들었다.',
      ]);
      await era.printAndWait([
        '양산 그늘 아래에서 나비를 바라보며 맑은 미소를 짓는 ',
        ruby.get_teen_sex_title(),
        '에게서, 드디어 이 나이대 ',
        ruby.get_child_sex_title(),
        '다운 천진난만함이 엿보였다.',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        85,
        [0, 0, 10],
        0,
        undefined,
        true,
      );
      flags.wait_flag = sys_like_chara(85, 0, 5) || flags.wait_flag;
    } else {
      await ruby.say_and_wait([
        '역시 ',
        race_infos[race_enum.yush_him].get_colored_name(),
        '에서 보여주었던, 제 미숙하고 볼품없던 달리기 때문이겠지요.',
      ]);
      await era.printAndWait([
        '과연, ',
        ruby.get_colored_name(),
        '의 중거리 적성은 단거리나 마일에 비하면 턱없이 무력했다.',
      ]);
      await era.printAndWait(['천부적인 속도야말로 최고의 무기이자, 동시에 ', ruby.sex, '의 거대한 약점이었던 것이다.']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 철저히 지구력 보완을 중심으로 삼아, ',
        ruby.get_colored_name(),
        '에게 혹독하고 고된 모래사장 훈련을 부과했다.',
      ]);
      flags.wait_flag = get_attr_and_print_in_event(85, [0, 0, 0, 10], 0);
    }
  };

  handlers[95 + 29] = async (ruby, me, r_call_m, m_call_r, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:85:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return false;
    }
    const miracle = get_chara_talk(93);
    await print_event_name('여름 합숙 (시니어 시즌)', ruby);
    await era.printAndWait([
      '대망의 여름 합숙이 시작되었다. 뜨거운 주로를 달리는 ',
      ruby.get_uma_sex_title(),
      '들에게 있어서 이 시기는 실력을 비약적으로 끌어올릴 수 있는 황금 같은 계절이다.',
    ]);
    await era.printAndWait([
      '단 1초의 시간도 헛되이 낭비하지 않도록, ',
      me.get_colored_name(),
      '은(는) 이미 완벽에 가까운 사전 준비를 마쳐 두었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 밀도가 매우 높고 부하가 강한 특별 트레이닝 메뉴를 설계했으며, 훈련이 끝난 뒤 피로를 즉시 풀 수 있도록 쿨다운용 도구와 마사지 준비까지 철저히 세팅해 두었다.',
    ]);
    await era.printAndWait([
      '앞으로 나아갈 방향을 사전에 철저히 일러두었기에 훈련 자체는 기계적이고 담담하게 진행되었으나——',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 눈에 띄게 상승하는 트레이닝 효율과 성과를 바라보며 내심 쾌재를 불렀다.',
    ]);
    await era.printAndWait([
      '고귀한 ',
      ruby.get_colored_name(),
      '의 전담 트레이너로서, 맡은 바 임무를 이토록 완벽하게 수행해 내고 있다는 사실에 ',
      me.get_colored_name(),
      '은(는) 커다란 자부심을 느꼈다.',
    ]);
    await ruby.say_and_wait(
      '오늘도 전 일정 동안 곁에서 헌신적으로 보좌해 주셔서 감사드립니다. 그럼, 저는 옷을 갈아입기 위해 이만 실례하도록 하겠습니다.',
    );
    await era.printAndWait([
      '그녀의 미성숙하면서도 티 없이 새하얀 육체는 마치 맑은 물속에 투영된 한 조각 흐릿한 명월처럼, 청춘의 묘한 매력과 광채를 발산하고 있었다. 그것은 이성을 마비시키고 금기된 죄악의 심연으로 몰아넣기에 충분한, 대단히 위험한 유혹이었다.',
    ]);
    era.printButton('이성을 내려놓고, 이 탐욕스러운 심연에 몸을 던진다.', 1, {
      disabled:
        era.get('love:85') < 75 ||
        era.get('cflag:0:성별') !== 1 ||
        era.get('cflag:85:성별') !== 0,
    });
    era.printButton('비록 훈련은 끝났지만, 트레이너로서 서포트할 수 있는 일을 찾아본다.', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 두 팔을 뻗어, 뒤쪽에서 ',
        ruby.get_colored_name(),
        '의 가냘픈 허리를 부드럽게 감싸 안았다. ',
        ruby.get_colored_name(),
        '는 자그맣게 비명을 지르더니, 수치심에 귓가까지 붉어지며 고개를 푹 숙여버렸다.',
      ]);
      await era.printAndWait([
        '이토록 부끄러워하는 모습이 너무나도 사랑스러웠던 ',
        me.get_colored_name(),
        '은(는) ',
        ruby.sex,
        '의 고개를 돌려 가볍게 숨을 몰아쉬는 얇은 입술 위에 자신의 입술을 강하게 포개었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 소스라치게 놀라며 ',
        me.get_colored_name(),
        '의 품에서 본능적으로 벗어나려 했으나, ',
        me.get_colored_name(),
        '이(가) 단단하게 결박하듯 안아주는 바람에 어린 아가씨의 연약한 저항은 금세 무위로 돌아갔다.',
      ]);
      await era.printAndWait([
        '지독하게 깊은 입맞춤은, 순식간에 ',
        me.get_colored_name(),
        '이(가) 수일 동안 억눌러 왔던 욕정의 불꽃을 거세게 피워 올렸다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 오른손은 본래 ',
        ruby.get_colored_name(),
        '의 허리를 지탱하고 있었으나, 어느새 제어력을 잃고 가냘픈 수영복의 틈새를 파고들어 ',
        ruby.sex,
        '의 미성숙하게 솟아오른 가슴을 향해 미끄러지듯 올라갔다.',
      ]);
      await era.printAndWait([
        '이윽고 ',
        me.get_colored_name(),
        '의 손길이 아담하고 매끄러운 젖가슴을 거머쥐었고, 검지와 중지 사이에 조그맣게 몽오리진 유두를 끼운 채 애태우듯 문지르기 시작했다.',
      ]);
      await ruby.say_and_wait(['앗……! ', r_call_m, '……']);
      await era.printAndWait([
        '한참 동안 이어진 격정적인 타액 교환 끝에, ',
        me.get_colored_name(),
        '의 혀가 서서히 그녀의 얇고 부드러운 입술 사이를 빠져나왔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 가쁜 숨을 몰아쉬며 상기된 얼굴로 ',
        me.get_colored_name(),
        '을(를) 올려다보았고, 오직 두 사람의 입술 사이를 잇는 투명하고 가느다란 은사만이 ',
        me.get_colored_name(),
        '과(와) ',
        ruby.sex,
        '의 은밀한 연결고리로서 길게 늘어졌다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 집요한 손길은 멈추지 않았다. ',
        ruby.get_colored_name(),
        '가 정신을 차리기도 전에, 왼손은 이미 수영복의 하단 경계를 따라 미끄러져 들어가 ',
        ruby.sex,
        '의 비소한 사타구니 사이를 노골적으로 헤집기 시작했다.',
      ]);
      await ruby.say_and_wait('지금은 안 됩니다……! 만약 소리가 새어 나가 누군가에게 들키기라도 한다면, 걷잡을 수 없는 사태가……!');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 다급히 팔꿈치로 ',
        me.get_colored_name(),
        '의 하복부를 찔렀고, ',
        ruby.get_uma_sex_title(),
        ' 특유의 묵직한 근력 탓에 ',
        me.get_colored_name(),
        '은(는) 순간 숨이 턱 막혀 콜록거리며 헛기침을 뱉었다.',
      ]);
      era.printButton('「아아아악! 아파, 아파서 죽을 것 같아!」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 억울한 피해자라도 된 양 엄살을 피우며, 몸을 웅크리는 척 자연스럽게 ',
        ruby.get_colored_name(),
        '를 자신의 가슴 품 안으로 더욱 깊숙이 끌어당겼다. 물론 손가락 역시 한층 더 은밀한 곳으로 파고들었다.',
      ]);
      await era.printAndWait([
        '가냘픈 신체를 파르르 떨며 더 이상 반항하지 못하는 ',
        ruby.get_colored_name(),
        '의 반응을 보며, ',
        me.get_colored_name(),
        '은(는) 회심의 미소를 지은 채 ',
        ruby.sex,
        '를 인적 없는 해변가 우거진 수풀림 속으로 밀어 넣었다.',
      ]);
      await era.printAndWait([
        '한 차례 뜨거운 포옹과 입맞춤을 나눈 끝에, 마침내 ',
        ruby.sex,
        '의 젖은 수영복을 매끄럽게 아래로 벗겨 내렸다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 눈동자는 늑대처럼 번뜩였고, 이 매혹적인 소녀의 나신을 단 1초도 놓치지 않고 눈에 담겠다는 듯 탐욕스럽게 빛났다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '를 부드러운 풀숲 위로 눕히고는, ',
        ruby.sex,
        '의 백옥 같은 살결 위를 마치 유영하듯 입술로 핥아 내리며 붉은 장밋빛으로 물들였다.',
      ]);
      await ruby.say_and_wait('으응…… 아앗……!');
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 평소에 고수하던 엄격하고 초연한 표정은 흔적도 없이 번져 사라졌고, 그 자리에는 장미처럼 화사하게 만개한 농밀한 애정이 들어차 있었다.',
      ]);
      await era.printAndWait([
        '보는 이의 심장을 세차게 흔드는 유혹적인 나신에 정신이 혼미해진 ',
        me.get_colored_name(),
        '은(는) 성마른 호흡으로 ',
        ruby.sex,
        '의 앙증맞은 가슴팍에 입을 맞추고, 앞끝에 작게 튀어나온 연약한 유두를 치아로 지그시 깨물었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 입술을 꾹 깨문 채, ',
        me.get_colored_name(),
        '이(가) 선사하는 낯설고 강렬한 자극을 결사적으로 인내했다.',
      ]);
      await era.printAndWait([
        '그렇게 ',
        me.get_colored_name(),
        '이(가) 연약한 유두를 부드럽게 빨아올리며 마침내 정사의 최종 단계로 진입하려던 찰나, 수풀 너머 저편에서 ',
        miracle.get_colored_name(),
        '의 목소리가 울려 퍼졌다.',
      ]);
      await miracle.say_and_wait([
        '루비, 혹시 아직 개인 트레이닝 중인 거야?',
      ]);
      await era.printAndWait([
        '순간 ',
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 심장이 내려앉을 듯 혼비백산했고, ',
        me.get_colored_name(),
        '은(는) 급히 ',
        ruby.get_colored_name(),
        '의 귀에 대고 적당한 핑계를 대어 미라클을 돌려보내라고 재촉했다.',
      ]);
      await era.printAndWait([ruby.get_colored_name(), '는 하는 수 없이 떨리는 목소리로 대답했다.']);
      await ruby.say_and_wait([
        sys_get_colored_callname(85, 93),
        ', 저는 지금 휴식을 취하고 있으니, 나누고 싶은 이야기가 있다면 부디 내일 다시 해주시겠어요?',
      ]);
      await era.printAndWait([
        '말을 마친 뒤, 수치심에 눈물이 고인 채 엷은 분노를 담아 ',
        me.get_colored_name(),
        '을(를) 매섭게 째려보았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 몸 위에 엎드린 채 이러지도 저러지도 못하는 꼴이 되어, 수풀 바깥의 ',
        miracle.get_colored_name(),
        '이 완전히 멀어질 때까지 숨을 죽이고 기다렸다.',
      ]);
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(0, part_enum.hand),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      end_ero_and_train();
    }
  };

  handlers[95 + 43] = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('「화려한 일족」의 트레이너', ruby);
    await era.printAndWait([
      '훈련장 한편에서, 휴식을 취하고 있던 ',
      ruby.get_colored_name(),
      '가 갑작스럽게 ',
      me.get_colored_name(),
      '에게 말을 건넸다.',
    ]);
    await ruby.say_and_wait('도대체 어째서 그런 말씀을…… 본래 『트레이너』로서의 본분은…');
    era.printButton('「아니, 이것은 『나 개인』이 짊어진 사명이야.」', 1);
    await era.input();
    await era.printAndWait([
      '고귀하고 「화려한」 일족으로서, 세상에서 가장 눈부신 광채를 증명해 내는 것, 그것이 바로 ',
      ruby.get_colored_name(),
      '의 유일한 염원이다.',
    ]);
    await era.printAndWait([
      '담당 ',
      ruby.get_uma_sex_title(),
      '의 꿈을 온전히 현실로 이루어 내는 것——어쩌면 그것이 트레이너라는 직무의 본질일지도 모른다.',
    ]);
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('과연, 잘 알겠습니다.');
    await era.printAndWait('그녀가 입가에 띄운 엷은 미소에는, 무언가…… 묘하게 흥미롭다는 듯한 기색이 담겨 있었다.');
    flags.wait_flag = get_attr_and_print_in_event(85, [5, 0, 5, 0, 0], 0);
  };

  handlers.rose_master = async (ruby, me, r_call_m, m_call_r, flags) => {
    await print_event_name('화려한 역사적 위업', ruby);
    await era.printAndWait('다이이치 가문의 대저택');
    await era.printAndWait([
      '「화려한 일족」, 수많은 사람들이 이 고귀한 이름을 들을 때면 자동적으로 떠올리는 어떤 ',
      ruby.get_uma_sex_title(),
      '가 있다……',
    ]);
    await era.printAndWait([
      '우마무스메 역사에 길이 남을 찬란한 공적을 새겨 넣었던 당대의 명 ',
      ruby.get_uma_sex_title(),
      '들……',
    ]);
    await era.printAndWait([
      '위대한 ',
      ruby.sex,
      '들의 고귀한 혈통을 올곧게 계승하여, 주로 위에 더욱 거대하고 화려한 꽃을 피워낸 주역——',
    ]);
    await era.printAndWait([ruby.get_colored_name(), '.']);
    await era.printAndWait([
      '그녀가 바로, 명실상부한 현대 「화려한 일족」의 위대한 상징이자 결정체인 ',
      ruby.get_uma_sex_title(),
      '이다.',
    ]);
    await ruby.say_and_wait('기다리게 해드렸군요.');
    await ruby.say_and_wait('본가에 올릴 모든 보고 절차가 마무리되었습니다.');
    era.printButton('「가족분들의 반응은 어떠셨어?」', 1);
    await era.input();
    await ruby.say_and_wait('『부디 그 두 다리로 멈춤 없이 전진하거라』……라고 하셨습니다. 당신이라는 사람과 함께 말이죠.');
    await era.printAndWait([ruby.get_colored_name(), '의 찬란했던 3년간의 레이스 생활이 대단원의 막을 내렸다.']);
    await era.printAndWait([
      '향후의 거취와 비전을 가문에 보고하기 위해, ',
      me.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '는 화려한 일족의 본가를 다시금 방문했다.',
    ]);
    await era.printAndWait([
      '「타인의 손을 빌리지 않고 오직 자신의 다리로 가장 눈부신 광채를 피워내겠다」는 ',
      ruby.sex,
      '의 뜻이 마침내 가문의 어른들에게도 온전히 받아들여진 모양이다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고개를 살짝 갸웃하며 ',
      me.get_colored_name(),
      '을(를) 빤히 바라보았다.',
    ]);
    await ruby.say_and_wait('무엇을 그렇게 넋을 잃고 바라보고 계십니까?');
    era.printButton('「벽에 걸린 초상화들을 감상하고 있었어.」', 1);
    era.printButton('「너를 바라보고 있었지.」', 2, { disabled: era.get('love:85') < 75 });
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '처음 이 거대한 저택을 방문했을 당시에는, 사방을 압도하는 무거운 중압감 탓에 하마터면 ',
        me.get_colored_name(),
        '의 무릎이 꺾일 뻔했었다.',
      ]);
      await era.printAndWait('하지만 세월이 흐른 지금은, 한 잔의 차를 음미하듯 여유롭게 대가문의 초상화들을 감상할 수 있게 되었다.');
      await era.printAndWait([
        '그도 그럴 것이, 이 위대한 가문의 역사에 ',
        me.get_colored_name(),
        ' 역시 지대한 공헌을 세웠음이 자명하기 때문이다.',
      ]);
      await ruby.say_and_wait([r_call_m, '……']);
      await ruby.say_and_wait('이 자리를 빌려, 제 마음을 다시 한번 명확히 전해드리고 싶군요.');
      await ruby.say_and_wait([
        '지나온 3년이라는 세월 동안, ',
        me.get_colored_name(),
        '께서는 트레이너이자 지도자로서의 책무를 너무나도 훌륭하게 완수해 주셨습니다.',
      ]);
      await ruby.say_and_wait(
        '제 전담 트레이너가 된다는 것은, 필연적으로 매 순간 끊임없이 이어지는 고난과 무거운 중압감을 감내해야만 하는 가혹한 길이었을 테지요.',
      );
      await ruby.say_and_wait('하지만 당신은 결사적으로 노력해 주셨고, 진정 위대하게 성장하셨습니다.');
      await ruby.say_and_wait('참으로 훌륭히 해내 주셨습니다. 저는 당신이 제 트레이너라는 사실이 뼈저리게 자랑스럽습니다.');
      era.printButton('「나야말로, 믿고 따라와 줘서 고마웠어.」', 1);
      await era.input();
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        '앞으로도 저는 『화려한 일족』의 영원한 상징으로서, 언제나 가장 눈부시게 빛나는 존재로 남아있어야만 합니다.',
      );
      await ruby.say_and_wait('그럼, 이제 본격적으로 저희가 함께 만들어갈 향후의 계획을 의논해 볼까요?');
      era.printButton('「……」', 1);
      await era.input();
      await ruby.say_and_wait('갑자기 왜 그러세요?');
      era.printButton('「과연 내가 너의 곁에 계속 있어도 괜찮은 걸까?」', 1);
      await era.input();
      await ruby.say_and_wait('!');
      await ruby.say_and_wait('……도무지 납득할 수 없는 나약한 소리를 하시는군요.');
      await ruby.say_and_wait(['제 모든 미래와 거취를 결정하는 것, 그것이 바로 ', r_call_m, '의 영원한 직무가 아니었습니까?']);
      await ruby.say_and_wait('그러니 지체하지 마시고 어서 비전을 제시해 주십시오. 인간에게 허락된 시간은 유한하니까요.');
      await ruby.say_and_wait('그리고……');
      await ruby.say_and_wait('장차 본가에 걸릴 제 초상화 바로 곁에 당신의 모습이 함께 보이지 않는다면…… 제가 무척 곤란해집니다……');
      await era.printAndWait('앞으로도 저희 앞에는 해결해야 할 무수한 과제들이 산적해 있으니, 부디 단 한 순간도 해이해지지 마시기를.');
      era.println();
      flags.wait_flag = sys_like_chara(85, 0, 5);
    } else {
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('안아주세요.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그녀의 요구에 순응하듯, ',
        ruby.get_colored_name(),
        '의 아담하고 가냘픈 신체를 품에 소중히 안아 올렸다.',
      ]);
      await ruby.say_and_wait('……음.');
      await ruby.say_and_wait('훗날 본가에 남길 기념사진도, 이 자세로 촬영하는 게 좋겠네요.');
      flags.wait_flag = sys_love_uma(85, 2);
    }
  };
};