const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[42] = async (kitaru, me, callname, flags) => {
    await print_event_name('이른바 시라오키 님', kitaru);
    await era.printAndWait('시라오키 님');
    await era.printAndWait([
      '이 신령님은 거의 하루 종일 ',
      kitaru.get_colored_name(),
      '의 입가에 오르내린다.',
    ]);
    await era.printAndWait([
      '훈련의 성과, 날씨의 변화, 나아가 지구의 자전마저도 ',
      kitaru.get_colored_name(),
      '가 어떤 형태로든 ',
      kitaru.sex,
      '의 입에서 나오는 시라오키 님과 연관 지어 버린다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 여러 번 물어보았으나, 돌아오는 것은 ',
      kitaru.sex,
      '의 모호한 설명뿐이었다.',
    ]);
    await era.printAndWait('그러던 어느 날……');
    await me.say_and_wait('그러니까, 나도 행운 아이템이라는 거야?!');
    await kitaru.say_and_wait('에헤헤! 신세를 지고 있는 분이 행운을 불러다 준다는 속설이 있거든요!');
    await era.printAndWait([
      kitaru.sex,
      '의 거의 간청하는 듯한 태도에, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없이 ',
      kitaru.sex,
      '와 함께 운을 틔우러 외출하자는 요청을 승낙했다.',
    ]);
    await kitaru.say_and_wait([
      '먼저 막과자 가게예요! 여기서 바로 ',
      callname,
      '의 운세를 점쳐보는 거죠!',
    ]);
    await kitaru.say_and_wait('대길이에요!');
    await kitaru.say_and_wait('시작이 아주 좋네요!');
    await kitaru.say_and_wait('그다음은 저 잡화점이에요!');
    await kitaru.say_and_wait('이 다루마, 아주 좋아 보이는데요!');
    await kitaru.say_and_wait('앗! 원래부터 눈이 그려져 있었던 건가요?');
    await era.printAndWait('거의 하루 종일 분주하게 움직이며 상점가의 구석구석을 훑고 다녔다.');
    await kitaru.say_and_wait(
      '에헤헤, 역시 마무리는 신사로 와야죠! 박수를 치며 기도하고, 오늘 하루 무사했던 것에 감사드리는 거예요!',
    );
    await kitaru.say_and_wait('……');
    await kitaru.say_and_wait('음, 해야 할 일은 다 끝났네요!');
    await kitaru.say_and_wait([callname, '! 저, 준비됐어요!']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '가 갑자기 고개를 숙이더니, 이윽고 어떤 결심을 한 듯한 눈으로 ',
      me.get_colored_name(),
      '을(를) 바라보는 것을 보았다.',
    ]);
    await kitaru.say_and_wait([
      callname,
      ', 계속 시라오키 님에 대해 궁금해하셨죠……?',
    ]);
    await kitaru.say_and_wait([
      '사실, 그분은 제 ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 가르쳐준 신령님이에요!',
    ]);
    await era.printAndWait(
      '양손으로 머리를 감싸 쥐며, 원래도 부스스했던 오렌지색 머리카락을 더욱 헝클어뜨린다. 마치 스스로 기억해내기를 강요하는 듯한 모습이었다.',
    );
    await kitaru.say_and_wait([
      '기억이 나요. 어릴 적의 저는 뭐든 잘해내던 ',
      kitaru.get_bigger_sibling_sex_title(),
      '와 자주 비교당하곤 했어요.',
    ]);
    await kitaru.say_and_wait('그때의 저는 발이 아주 느렸고, 심지어 게이트에서 나가는 것조차 무서워했죠.');
    await kitaru.say_and_wait([
      '하지만 ',
      kitaru.get_bigger_sibling_sex_title(),
      '는 저와 달랐어요. 아주 우수한 도주 우마무스메였거든요! 트레센에서도 스카우트 제의를 했을 정도니까요!',
    ]);
    await kitaru.say_and_wait([
      '저를 위로해주기 위해서, ',
      kitaru.get_bigger_sibling_sex_title(),
      '는 제게 매번 대길이 나오는 점을 쳐주거나 갖가지 행운 아이템들을 가져다주곤 했어요!',
    ]);
    await kitaru.say_and_wait([
      '시라오키 님의 가호도요! ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 말해줬어요. 시라오키 님의 가호만 있다면 행운이 찾아올 거라고요!',
    ]);
    await kitaru.say_and_wait('그래서 저는 계속 시라오키 님을 믿어왔어요!');
    await kitaru.say_and_wait('그 일이 있기 전까지는……');
    await kitaru.say_and_wait(['그 뒤에 ', kitaru.get_bigger_sibling_sex_title(), '가 세상을 떠날 때까지는요.']);
    await kitaru.say_and_wait('그리고……');
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      '는 항상 시라오키 님이 저를 많이 보살펴주실 거라고 말했지만…… 어쩌면, 시라오키 님이 보살펴주지 않은 건 바로 ',
      kitaru.get_bigger_sibling_sex_title(),
      '였을지도 몰라요.',
    ]);
    await kitaru.say_and_wait('가끔 그런 생각이 들어요. 만약에…… 제가 대신……');
    await era.printAndWait([
      '눈가에 맺혔던 눈물이 한 방울, 두 방울 떨어지며 ',
      kitaru.get_colored_name(),
      '의 발밑에 깔린 돌길을 두드렸다.',
    ]);
    await kitaru.say_and_wait([
      '죄송해요…… 저 혼자 이렇게 떠들어대서, ',
      callname,
      '도 분명 제가 짜증 나시겠죠……',
    ]);
    era.printButton('손수건을 건넨다', 1);
    await era.input();
    await kitaru.say_and_wait('으……');
    await kitaru.say_and_wait('감사합니다……');
    await era.printAndWait([
      '눈물을 닦아낸 뒤, ',
      kitaru.get_colored_name(),
      '는 고개를 세차게 몇 번 흔들더니 다시 평소처럼 웃어 보이려 애썼다.',
    ]);
    await kitaru.say_and_wait('울면 안 돼…… 울면 안 돼……');
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      '는 내 웃는 얼굴을 제일 좋아했단 말이야……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '가 끊임없이 중얼거리는 소리를 들었다. 이윽고 그녀는 자책인지 죄책감인지 모를 감정에 휩싸여 자신의 귀와 꼬리를 쥐어뜯기 시작했다.',
    ]);
    await era.printAndWait([
      kitaru.get_teen_sex_title(),
      '는 거의 광적으로, 자신이 울고 있다는 현실에서 도망치려 하고 있었다.',
    ]);
    await kitaru.say_and_wait('윽!');
    era.printButton('손을 뻗는다', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '를 품에 안아 진정시키려 노력했다. 멈추지 않고 흘러나오는 눈물은 ',
      me.get_colored_name(),
      '의 가슴팍을 크게 적셔버렸다.',
    ]);
    era.println();
    await era.printAndWait([
      '적막한 신사 안에서, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 떨림이 점차 잦아들 때까지 묵묵히 머리를 쓰다듬어 주었다.',
    ]);

    flags.wait_flag =
      get_skills_and_print_in_event(56, [200831]) || flags.wait_flag;
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    flags.wait_flag = sys_change_motivation(56, -3) || flags.wait_flag;
  };

  handlers[47 + 1] = async (kitaru, me, callname, flags) => {
    await print_event_name('선택받은 자', kitaru);
    await era.printAndWait('또다시 새해 첫 참배의 시기가 돌아왔다.');
    if (era.get('flag:현재명성') >= 500) {
      await era.printAndWait([
        '관례에 따라, 트레센 학원의 트레이너는 보통 자신이 담당하는 ',
        kitaru.get_uma_sex_title(),
        '와 함께 이 의식을 치른다.',
      ]);
    } else {
      await era.printAndWait([
        '트레센 내부 매뉴얼에는 가급적 자신이 담당하는 ',
        kitaru.get_uma_sex_title(),
        '와 함께 진행하라고 명확히 기재되어 있다.',
      ]);
    }
    await era.printAndWait([
      kitaru.get_colored_name(),
      '와 미리 일정을 잡아두었음에도 불구하고, ',
      kitaru.sex,
      '는 평소처럼 교문 앞에서 ',
      me.get_colored_name(),
      '과(와) 만나 목적지로 향하지 않았다.',
    ]);
    await era.printAndWait([
      '이전에 ',
      kitaru.sex,
      '가 말했던 대로, 평소에는 한적하고 썰렁했던 신사가 드디어 인파로 북적이며 참배객들의 웃음소리가 끊이지 않고 있었다.',
    ]);
    await era.printAndWait('이곳 신사의 무녀가 사람들의 복을 비는 춤을 추기 시작했다.');
    await era.printAndWait('「둥!」');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 북소리를 들었고, 뒤이어 샤미센의 선율이 더해졌다.',
    ]);
    await era.printAndWait([
      '공연은 시작되었으나, ',
      kitaru.get_colored_name(),
      '는 여전히 행방이 묘연했다.',
    ]);
    await era.printAndWait('「찰랑!」');
    await era.printAndWait(
      '이윽고 카구라 방울 소리가 울려 퍼졌고, 이는 이 신사의 무녀가 등장했음을 알렸다.',
    );
    await era.printAndWait([
      '무대 위의 ',
      kitaru.get_uma_sex_title(),
      '가 리듬감 넘치는 음악에 맞춰 우아하게 춤을 추고 있었다.',
    ]);
    await era.printAndWait(
      '살을 에듯 추운 날씨였음에도 주변 사람들의 환호성은 전혀 줄어들지 않았다.',
    );
    await era.printAndWait([
      '지난 1년간 사람들이 쌓아온 피로와 노고가 무대 위에서 오렌지색 머리에 금빛 눈동자를 한 ',
      kitaru.get_uma_sex_title(),
      '의 신비롭고 매혹적인 춤사위 속에 소리 없이 씻겨 내려갔다.',
    ]);
    await era.printAndWait([
      '그렇다, 이른바 ',
      kitaru.get_uma_sex_title(),
      '란 살아있는 신, 즉 현인신과 같은 존재가 아니던가.',
    ]);
    await era.printAndWait([
      '다만, ',
      me.get_colored_name(),
      '은(는) 지금 춤을 추고 있는 그 현인신의 정체를 알고 있었다.',
    ]);
    await era.printAndWait([
      '그것은 바로 좀처럼 모습을 드러내지 않던 ',
      kitaru.get_colored_name(),
      '였다. ',
      kitaru.sex,
      '의 손에서 흔들리는 카구라 방울의 맑은 소리가 주변 환경과 참배객들의 마음을 정화하고 있었다.',
    ]);
    await era.printAndWait([
      '평소에는 항상 덜렁대던 ',
      kitaru.sex,
      '가 이토록 경건하고 엄숙한 자태를 보여줄 줄이야, ',
      me.get_colored_name(),
      '에게는 꽤나 뜻밖의 일이었다.',
    ]);
    era.drawLine({ content: '마치카네 후쿠키타루네 신사 - 카구라 종료 후' });
    await era.printAndWait([
      '거의 자정이 다 된 시각, 자신의 신사를 위해 분주히 움직이던 ',
      kitaru.get_colored_name(),
      '가 드디어 잠시 쉴 틈을 얻었다.',
    ]);
    await kitaru.say_and_wait([callname, '!']);
    await era.printAndWait([
      '그녀는 한시도 지체하지 않고 ',
      me.get_colored_name(),
      '의 앞으로 달려왔다. 무녀복의 소매가 그녀의 움직임에 따라 나풀거렸다.',
    ]);
    await kitaru.say_and_wait([
      '정말 정말 죄송해요! 드물게 신사에 사람들이 북적이다 보니! 미리 ',
      callname,
      '께 말씀드리는 걸 깜빡했어요!',
    ]);
    await kitaru.say_and_wait(
      '아버지가 이곳의 궁사시니까요, 저도 그만큼 열심히 노력해야 하거든요!',
    );
    await kitaru.say_and_wait('하지만, 그 보답으로……');
    await kitaru.say_and_wait('지금은 무녀님의 단독 서비스 시간이에요!');
    era.printButton('「후쿠짱이 그렇게 말하면, 다른 참배객들이 질투하지 않을까?」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '아뇨! ',
      callname,
      '은 시라오키 님께 선택받은 분이니까요!',
    ]);
    await era.printAndWait(
      '두 사람의 차분하고 단조로운 발걸음 소리가 신사 안에 울려 퍼졌고, 이윽고 두 사람은 새전함 앞에 도착했다.',
    );
    await kitaru.say_and_wait(['자! ', callname, '의 소원은 무엇인가요!']);
    await kitaru.say_and_wait(
      '지금의 저는 영력이 최정점이라구요! 어떤 소원이든 다 이루어질 거예요!',
    );
    await kitaru.say_and_wait('심지어 시라오키 님의 목소리까지 들릴 정도니까요!');
    await era.printAndWait([
      '난초처럼 하얀 무녀복을 입은 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 손을 맞잡았다.',
    ]);
    era.printButton('「그야 당연히 후쿠짱이 다음 청엽상에서 이기는 것이지」', 1);
    await era.input();
    await kitaru.say_and_wait('에……');
    await kitaru.say_and_wait([callname, '의 소원, 그거였나요?']);
    await kitaru.say_and_wait('알겠어요! 저, 열심히 할게요!');
    await kitaru.say_and_wait([
      '그럼! ',
      callname,
      ', 안녕히 가세요! 괜찮으시다면! 내일도 꼭 와주셔야 해요!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 떠나는 것을 배웅한 뒤, ',
      kitaru.get_colored_name(),
      '는 ',
      kitaru.sex,
      '의 신사 내 거처로 돌아갔다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) 신사의 붉은 토리이를 나서는 순간, 마음속에서 묘한 목소리가 울려 퍼졌다.',
    ]);
    await era.printAndWait('그 직후, 주변 세계가 거의 순백의 빛에 집어삼켜졌다.');
    era.drawLine({ content: '???' });
    await typing('부름받은 자 / 선택받은 자여, 너 / 우리들의 소망 / 의지는 무엇인가?');
    era.println();
    era.printButton('격양된 분위기 (모든 능력치 +7)', 1);
    era.printButton('전율하는 기운 (스피드 +30)', 2);
    era.printButton('미세한 허점 (스킬 포인트 +40)', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await kitaru.print_and_wait('오감이 예리해진다……');
        break;
      case 2:
        await kitaru.print_and_wait('발끝이 가볍고, 경쾌하면서도 편안하다……');
        break;
      case 3:
        await kitaru.print_and_wait('끈이 풀리고—— 창문이 열리고—— 자물쇠가 기름을 친 듯 돌아간다……');
    }

    era.set('cflag:56:축제이벤트표시', 0);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 정신을 차렸을 때는, 이미 트레센으로 돌아가는 막차에 몸을 싣고 있었다.',
    ]);
    switch (ret) {
      case 1:
        flags.wait_flag = get_attr_and_print_in_event(56, [7, 7, 7, 7, 7], 0);
        break;
      case 2:
        flags.wait_flag = get_attr_and_print_in_event(56, [30, 0, 0, 0, 0], 0);
        break;
      case 3:
        flags.wait_flag = get_attr_and_print_in_event(56, undefined, 40);
    }
  };

  handlers[47 + 5] = async (kitaru, me, callname, flags) => {
    await print_event_name('의식 이론', kitaru);
    await era.printAndWait('청엽상의 날짜가 다가옴에 따라, 훈련 강도도 점차 낮아지기 시작했다.');
    await era.printAndWait([
      '난간에 기대어 훈련장에서 땀 흘리는 ',
      kitaru.get_uma_sex_title(),
      '들을 바라보며, ',
      me.get_colored_name(),
      '은(는) 생각에 잠겼다.',
    ]);
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      '가 경기장에 서는 이유는 제각각이다.',
    ]);
    await era.printAndWait(['그리고 ', kitaru.get_colored_name(), '는……']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '가 했던 말을 기억하고 있다.',
    ]);
    await kitaru.say_and_wait(
      [
        '마치카네 후쿠키타루라는 이름의 ',
        kitaru.get_teen_sex_title(),
        '가! 행복을 실현하기 위해! 신이 되기 위해! 운명 속에서 반드시 거쳐야 할 길이니까요!',
      ],
      true,
    );
    await era.printAndWait('그 국화상에 대한 묘한 집착은 대체 무엇 때문일까?');
    await era.printAndWait([
      '의구심을 품은 ',
      me.get_colored_name(),
      '은(는) 그녀의 땀을 닦아준 뒤, 다시 한번 ',
      kitaru.get_colored_name(),
      '에게 그 질문을 던졌다.',
    ]);
    await kitaru.say_and_wait('에…… 저도 잘 기억나지 않아요.');
    await kitaru.say_and_wait('아마 누군가와 했던 약속이었을 거예요.');
    await era.printAndWait([
      '지난번 신사에서의 통곡 이후로, ',
      me.get_colored_name(),
      '은(는) 다시는 ',
      kitaru.get_colored_name(),
      '의 ',
      kitaru.get_bigger_sibling_sex_title(),
      '에 대해서, 나아가 가족과 관련된 화제는 가급적 피해 왔다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      kitaru.get_uma_sex_title(),
      '에게 있어 달리는 이유는 지극히 중요한 문제다. ',
      kitaru.get_colored_name(),
      '의 인간관계를 고려했을 때, ',
      kitaru.sex,
      '와 약속을 나눌 만한 사람은……?',
    ]);
    era.printButton(`「${kitaru.get_bigger_sibling_sex_title()}와의 약속이야?」`, 1);
    era.printButton('「시라오키 님과 직접 한 약속이야?」', 2);
    await era.input();
    await kitaru.say_and_wait('글쎄요…… 으음.');
    await kitaru.say_and_wait(
      '억지로 떠올리려 하지 않으면, 어린 시절의 기억은 항상 안개가 낀 것처럼 흐릿하거든요.',
    );
    await kitaru.say_and_wait(['그나저나, ', callname, '은 이런 이야기를 들어보신 적 있나요?']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 땀을 듬뿍 머금은 뜨끈한 수건을 옆에 내려두고, 자꾸 들썩거리려는 ',
      kitaru.get_colored_name(),
      '를 진정시켰다.',
    ]);
    era.printButton('「무슨 이야기인데?」', 1);
    await era.input();
    await kitaru.say_and_wait([
      kitaru.get_uma_sex_title(),
      '가 제물을 바쳐 신이 된다는 식의 이야기 말이에요.',
    ]);
    await era.printAndWait([
      kitaru.get_bigger_sibling_sex_title(),
      '가 언급됨에 따라 잠시 어두워졌던 얼굴이 갑자기 다시 밝아졌다.',
    ]);
    await era.printAndWait([
      '갑작스러운 화제 전환에 ',
      me.get_colored_name(),
      '은(는) 도무지 갈피를 잡을 수 없었다.',
    ]);
    era.printButton('「제물이라니?」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '신령님께 예물을 올리는 그런 의식 말이에요! ',
      kitaru.get_uma_sex_title(),
      '에게 있어 그것은 의심할 여지 없이 레이스에서의 승리겠죠!',
    ]);
    await kitaru.say_and_wait(
      '책에서도 레이스 자체가 원래 세 여신께 바치는 춤이라는 내용이 있었어요!',
    );
    await kitaru.say_and_wait('예전에 집 다락방에 있던 책에서 본 적이 있거든요……');
    await kitaru.say_and_wait(
      '적어도 제게 있어서는, 의식의 제물 중에 국화상이 있다는 건 확실하게 단언할 수 있답니다!',
    );
    await era.printAndWait([
      '그렇게 말하며 주변 분위기를 묘하게 신비롭게 만든 ',
      kitaru.get_colored_name(),
      '는 다시 훈련을 하러 떠났다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[47 + 18] = async (kitaru, me, callname, flags) => {
    const suzuka = get_chara_talk(2);
    await print_event_name('문턱 앞에서', kitaru);
    await era.printAndWait([
      '휴일, ',
      me.get_colored_name(),
      '은(는) 집무실에 앉아 깊은 생각에 빠져 있었다.',
    ]);
    await era.printAndWait([
      '처음에는 그저 트레이너로서의 책임감으로 ',
      kitaru.get_colored_name(),
      '와 담당 계약을 맺었다.',
    ]);
    await era.printAndWait([
      '하지만 이 ',
      kitaru.get_teen_sex_title(),
      '는 ',
      me.get_colored_name(),
      '의 예상보다 훨씬 더 손이 많이 가는 타입이었다. ',
      me.get_colored_name(),
      '은(는) 마치 카리브디스의 소용돌이에 휘말린 선장처럼, 끝을 알 수 없는 번거로운 사건들 속으로 끌려 들어갔다.',
    ]);
    await era.printAndWait([
      '특히 청엽상 이후로 ',
      kitaru.sex,
      '의 정서는 점점 더 불안정해졌다.',
    ]);
    await era.printAndWait([
      '훈련뿐만 아니라, 평소의 ',
      kitaru.get_colored_name(),
      ' 역시 부쩍 불안해하는 기색이 역력했다.',
    ]);
    await era.printAndWait([
      '심지어 같이 병주를 해달라고 요청한 도주 우마무스메 친구를 상대로도, ',
      kitaru.sex,
      '는 종반에 접어들기도 전에 속도가 급격히 죽어버리곤 했다.',
    ]);
    
    if (era.get('cflag:2:모집상태') === 1) {
      await suzuka.say_and_wait([
        sys_get_callname(2, 0),
        ', ',
        sys_get_colored_callname(2, 56),
        '는 괜찮은 걸까요?',
      ]);
      await era.printAndWait([
        '팀의 다른 멤버들도 ',
        kitaru.get_colored_name(),
        '의 현재 상태에 대해 우려 섞인 시선을 보내고 있었다.',
      ]);
    }
    await era.printAndWait('그렇다면, 이제 어떻게 해야 할까?');
    era.printButton('（계속 나아가자）', 1);
    await era.input();
    await era.printAndWait([
      '다른 답은 없을 것이다. 결국 그녀는 ',
      me.get_colored_name(),
      '을(를) 운명의 사람이라고 부르고 있으니까.',
    ]);
    await era.printAndWait('이제 일을 시작할 때다……');
    await era.printAndWait(
      'PTSD, 즉 외상 후 스트레스 장애는 일반적으로 개인이 자신이나 타인과 관련된 생명이나 신체를 위협할 정도의 극심한 사건을 경험했을 때 발생한다.',
    );
    await era.printAndWait(
      '극단적인 방어 기제로서 뇌는 사건 당시의 기억을 차단하거나 가상의 기억으로 대체하며, 이를 소위 선택적 망각이라 한다. 정신적 외상과 관련된 세부적인 사항을 기억해내지 못하게 되는 것이다.',
    );
    await era.printAndWait([
      '평상시의 ',
      kitaru.get_colored_name(),
      '가 ',
      kitaru.get_teen_sex_title(),
      '다운 활발함을 유지할 수 있는 것은 이 때문이다. 오직 ',
      kitaru.sex,
      '의 ',
      kitaru.get_bigger_sibling_sex_title(),
      '와 관련된 사물이나 화제가 나올 때만 슬픔을 드러내는 것도 바로 그 이유다.',
    ]);
    await era.printAndWait([
      '이러한 추측을 바탕으로 한다면, 당시 경기장의 상황은 레이스 특유의 고압적인 긴장감과 맞물려 ',
      kitaru.get_colored_name(),
      '의 트라우마를 자극했을 것이 분명하다.',
    ]);
    await era.printAndWait('즉, 침습 증상이 나타난 것이다.');
    await era.printAndWait([
      '그렇다면 어린 시절의 ',
      kitaru.get_colored_name(),
      '는 대체 무엇을 겪었던 것일까?',
    ]);
    await era.printAndWait([
      '만약 ',
      kitaru.get_uma_sex_title(),
      '와 관련된 사고였다면, 지역 신문에 보도가 되었을 가능성이 크다. 그리고 ',
      kitaru.get_colored_name(),
      '는 예전에 ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 트레센의 초청을 받았었다는 사실을 넌지시 언급한 바 있다.',
    ]);
    await era.printAndWait(['조사 시작. ', me.get_colored_name(), '은(는) 우선……']);
    era.printButton('과거 신문 기사를 뒤져본다', 1);
    era.printButton('트레센의 과거 신입생 아카이브를 열람한다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '약 10년 전의 신문 기사에서 한 ',
        kitaru.get_uma_sex_title(),
        '가 훈련 도중 사고로 사망했다는 내용을 발견했다. 지역 신사 궁사의 딸이었기에 당시 꽤 큰 파장이 일었던 모양이다.',
      ]);
      await era.printAndWait(
        '이것은 아마도 왜 그 신사의 참배객이 다른 곳보다 훨씬 적었는지를 설명해주는 대목이기도 했다.',
      );
      await era.printAndWait([
        '사고 현장 사진 속에서, ',
        me.get_colored_name(),
        '은(는) 익숙한 실루엣 하나를 보았다.',
      ]);
      await era.printAndWait([
        '사고 당시 ',
        kitaru.get_colored_name(),
        '도 그 자리에 있었다. ',
        kitaru.sex,
        '는 자신의 ',
        kitaru.get_bigger_sibling_sex_title(),
        '가 도주 우마무스메로서 종반 스퍼트를 올리던 속도 그대로 가드레일에 충돌하는 것을 눈앞에서 목격했던 것이다.',
      ]);
      await era.printAndWait([
        '비록 뇌의 보호 기제가 실제 기억을 깊숙이 묻어버렸으나, 온 신경을 집중해야 하는 청엽상 경기장에서 종반 스퍼트를 올리는 도주 우마무스메의 모습이라는 기시감이 ',
        kitaru.get_colored_name(),
        '의 마음의 병을 도지게 한 것이었다.',
      ]);
    } else {
      await era.printAndWait([
        '사진 속에는 ',
        kitaru.get_colored_name(),
        '와 어딘지 닮은 긴 머리의 ',
        kitaru.get_uma_sex_title(),
        '가 있었다.',
      ]);
      await era.printAndWait([
        '우수한 도주 우마무스메였고, 트레센에서조차 ',
        kitaru.sex,
        '에게 스카우트 제의를 보냈을 정도의 인재였다.',
      ]);
      await era.printAndWait([
        '다행히 트레센의 철저한 문서 백업 덕분에, 그 초청장의 사본과 관련 자료들이 지금 ',
        me.get_colored_name(),
        '의 손에 들려 있었다.',
      ]);
      await era.printAndWait(
        '국화상을 목표로 했던 한 도주 우마무스메…… 안타깝게도 이후 훈련 도중 사고로 목숨을 잃었다고 기록되어 있다.',
      );
      await era.printAndWait([
        '사고 당시 ',
        kitaru.get_colored_name(),
        '도 그 자리에 있었다. ',
        kitaru.sex,
        '는 자신의 ',
        kitaru.get_bigger_sibling_sex_title(),
        '가 도주 우마무스메로서 종반 스퍼트를 올리던 속도 그대로 가드레일에 충돌하는 것을 눈앞에서 목격했던 것이다.',
      ]);
      await era.printAndWait([
        '비록 뇌의 보호 기제가 실제 기억을 깊숙이 묻어버렸으나, 온 신경을 집중해야 하는 청엽상 경기장에서 종반 스퍼트를 올리는 도주 우마무스메의 모습이라는 기시감이 ',
        kitaru.get_colored_name(),
        '의 마음의 병을 도지게 한 것이었다.',
      ]);
    }
    era.println();
    await era.printAndWait('「똑! 똑! 똑!」');
    await era.printAndWait([me.get_colored_name(), '은(는) 집무실 문이 두들겨지는 소리를 들었다.']);
    era.printButton('「들어오세요!」', 1);
    await era.input();
    await era.printAndWait([
      '문이 열리고, ',
      me.get_colored_name(),
      '에게 적잖은 고민을 안겨주었던 담당이 문가에 조심스레 서 있었다. 마치 겁먹은 새끼 여우 같은 모습이었다.',
    ]);
    await kitaru.say_and_wait([callname, '!']);
    await kitaru.say_and_wait(['저기, 이건 ', callname, '께 드리는 행운 아이템이에요!']);
    await era.printAndWait([
      '명백한 미안함이 서린 채, 오렌지색 부적 하나가 ',
      me.get_colored_name(),
      '의 책상 위에 놓였다.',
    ]);
    await kitaru.say_and_wait('저…… 드리고 싶은 말씀이……');
    await kitaru.say_and_wait('아무튼! 청엽상 때는 정말 죄송했습니다!!!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 자신을 향해 고개를 숙인 ',
      kitaru.sex,
      '의 머리를 부드럽게 쓰다듬어 주었다. 이윽고 ',
      kitaru.sex,
      '의 귀가 다시 기쁜 듯 ',
      me.get_colored_name(),
      '의 손등을 간질였다.',
    ]);
    await era.printAndWait('분위기는 다시 평소처럼 화기애애하게 돌아왔다.');
    await kitaru.say_and_wait(['그럼 ', callname, '! 다음 레이스 훈련 일정은요?']);
    await era.printAndWait([
      '계획대로라면 일본 더비에 계속 출주해야 했지만, 지금 ',
      kitaru.get_colored_name(),
      '의 상태로는 정상적인 완주조차 장담하기 힘든 상황이었다.',
    ]);
    await kitaru.say_and_wait('취소하시는 건가요?!');
    await era.printAndWait([
      kitaru.sex,
      '는 분명 ',
      me.get_colored_name(),
      '의 침묵하는 표정에서 무언가를 읽어낸 듯, 눈동자에 불안감이 스쳤다.',
    ]);
    era.printButton('고개를 끄덕인다', 1);
    await era.input();
    await era.printAndWait([
      '「취소해야 할지도 몰라」 ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '에게 그렇게 말했다.',
    ]);
    await kitaru.say_and_wait('에에엣!');
    await kitaru.say_and_wait('괜찮아요, 무조건 괜찮다구요!');
    await kitaru.say_and_wait('저, 레이스 나갈 수 있어요!');
    await era.printAndWait([
      '거의 매달리다시피 ',
      me.get_colored_name(),
      ' 쪽으로 다가와, 끊임없이 간절한 말을 내뱉었다.',
    ]);
    await era.printAndWait([
      '이게 정말 ',
      kitaru.get_colored_name(),
      '가 맞을까? 마치 유기견 보호소에서 새 주인에게 잘 보이려 애쓰는 반려동물 같은 모습이었다.',
    ]);
    era.printButton('「후쿠짱, 뭐가 그렇게 두려운 거야?」', 1);
    await era.input();
    await kitaru.say_and_wait('앗!');
    await kitaru.say_and_wait('그런 거 아니에요!');
    await kitaru.say_and_wait('전 그냥…… 그게……');
    await kitaru.say_and_wait('하아……');
    await kitaru.say_and_wait([
      callname,
      '도 분명 제가 한심하다고 생각하시겠죠. 맨날 시끄럽기만 하고, 이제는, 이제는 레이스조차 제대로 못 뛰게 되었으니까요.',
    ]);
    if (
      sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
        (e) => e > 0,
      ).length > 2
    ) {
      //담당수이 2보다 큰가
      await kitaru.say_and_wait('당신의 다른 담당들보다 훨씬 못나서……');
    } else {
      await kitaru.say_and_wait([
        '첫 번째 담당이 저 같은 ',
        kitaru.get_uma_sex_title(),
        '라니, 대흉이네요.',
      ]);
    }
    await kitaru.say_and_wait([
      callname,
      '은 ',
      kitaru.get_bigger_sibling_sex_title(),
      ' 이후로 저를 인정해 준 두 번째 사람이에요……',
    ]);
    await kitaru.say_and_wait('하지만 전 이렇게나 쓸모없고……');
    await kitaru.say_and_wait('저, 전 정말 무서워요……');
    await kitaru.say_and_wait([
      callname,
      '도 ',
      kitaru.get_bigger_sibling_sex_title(),
      '처럼 저를 혼자 남겨두고 떠나버릴 건가요?',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 목소리는 마치 얼음굴 속에서 들려오는 듯했다.',
    ]);
    await era.printAndWait([
      '여름이 가까워진 시기였음에도, 지금 이 순간 집무실 안의 공기는 ',
      me.get_colored_name(),
      '의 피부를 얼어붙게 만들었고, 마치 유리창에 성에가 낀 듯한 착각마저 들게 했다.',
    ]);
    era.printButton('「후쿠짱, 우리 처음 만났을 때 했던 의식 기억나?」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), '이(가) 손을 내밀었다.']);
    await kitaru.say_and_wait('네, 손가락 걸기 의식 말이죠!');
    await kitaru.say_and_wait([
      kitaru.get_bigger_sibling_sex_title(),
      '가 가르쳐준 거예요. 그때 ',
      kitaru.get_bigger_sibling_sex_title(),
      '와 약속했었거든요……',
    ]);
    await kitaru.say_and_wait('그때 청엽상의 종반에서…… 전부 생각났어요……');
    await kitaru.say_and_wait([
      '지금 제가 국화상을 목표로 삼은 것도 ',
      kitaru.get_bigger_sibling_sex_title(),
      '와의 약속 때문이에요.',
    ]);
    await era.printAndWait([
      kitaru.get_bigger_sibling_sex_title(),
      '와의 약속. 어째서 ',
      kitaru.get_colored_name(),
      '가 그토록 국화상에 집착했는지 이제야 이해가 갔다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 목소리는 점차 잦아들더니, 울음을 참느라 쉰 소리로 변해갔다.',
    ]);
    await era.printAndWait([
      '압박감이 강한 환경에 처한 사람일수록 미신적인 행동에 의존하기 쉽다는 연구 결과가 있다. 이는 상황을 다시 자신의 통제하에 두려는 필사적인 시도다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '에게 있어 요절한 ',
      kitaru.get_bigger_sibling_sex_title(),
      ', 딸을 잃고 엄격해진 어머니, 그리고 신사의 신비주의적인 분위기.',
    ]);
    await era.printAndWait([
      kitaru.get_bigger_sibling_sex_title(),
      '가 평소 ',
      kitaru.sex,
      '를 위로하기 위해 말해준 시라오키 님은, 의심할 여지 없이 ',
      kitaru.sex,
      '가 붙잡을 수 있는 유일한 구원의 동아줄이었을 것이다.',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '가 평소에 그토록 밝고 낙천적인 겉모습을 유지하다가, 오직 ',
      me.get_colored_name(),
      '과(와) 있을 때만 가끔 불안한 내면을 드러내는 것조차 이미 대길이라 할 만한 일이었다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 눈물이 맺혀 초점이 흐려진 눈으로 당신을 바라보았다. 마치 어디선가 지켜보고 있을 시라오키 님의 응답을 갈구하는 듯했다.',
    ]);
    await era.printAndWait([
      '그렇다면 이제는 ',
      me.get_colored_name(),
      '이(가) 자신의 담당을 다시 현실로 끌어올려야 할 때였다.',
    ]);
    era.printButton('「그럴 일 없어!」', 1);
    await era.input();
    era.printButton('「후쿠짱, 난 널 버리지 않아!」', 1);
    await era.input();
    era.printButton('「처음 그때처럼, 다시 약속하자!」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '에게 꽉 붙잡혀 있던 오른손을 조심스레 빼내어 주먹을 쥐고 새끼손가락을 내밀었다.',
    ]);
    era.printButton(
      '「네가 혼란에 빠질 때, 고통스러울 때, 나를 떠올려 줘. 내가 함께 짊어질게. 나도 네가 달리는 이유 중 하나가 되게 해줘!」',
      1,
    );
    await era.input();
    await kitaru.say_and_wait('으윽……');
    await kitaru.say_and_wait([callname, '……']);
    await era.printAndWait([
      kitaru.sex,
      '는 떨리는 손으로 새끼손가락을 내밀어, 예전 신사 앞에서 했던 것과 똑같은 손가락 걸기 의식을 마쳤다.',
    ]);
    await kitaru.say_and_wait('에헤헤……');
    await era.printAndWait([
      '흔들리는 호박색 눈동자에 ',
      kitaru.sex,
      '를 바라보고 있는 ',
      me.get_colored_name(),
      '의 모습이 비쳤다.',
    ]);
    era.printButton('「왜 그래?」', 1);
    await era.input();
    await era.printAndWait([
      kitaru.sex,
      '는 ',
      me.get_colored_name(),
      '의 너무나 진지한 표정을 보고는 갑자기 눈물을 닦으며 웃음을 터뜨렸다.',
    ]);
    await kitaru.say_and_wait([
      '아니요…… 그게…… 그냥…… 그때 점괘로 나온 운명의 사람이 ',
      callname,
      '이라서 정말 다행이라는 생각이 들어서요!',
    ]);
    await kitaru.say_and_wait(
      '운명의 사람이 그렇게까지 말씀하시는데, 제가 일본 더비 출주를 포기하겠다고 하면 참배하면서 공물을 안 챙겨가는 거랑 다를 바 없잖아요?',
    );
    await kitaru.say_and_wait([callname, '! 저를 믿어주세요!']);
    flags.wait_flag = get_attr_and_print_in_event(56, [7, 0, 7, 7, 0], 0);
  };

  handlers[47 + 21] = async (kitaru, me, callname, flags) => {
    await print_event_name('행운 투사', kitaru);
    await era.printAndWait([
      '훈련 휴식 시간, ',
      me.get_colored_name(),
      '과(와) ',
      kitaru.get_colored_name(),
      '는 난간에 기댄 채 이런저런 대화를 나누고 있었다.',
    ]);
    await kitaru.say_and_wait('으으…… 국화상…… 아무리 생각해도 무리일 것 같아요.');
    await kitaru.say_and_wait('그렇게 긴 거리는 뛰어본 적도 없고요.');
    await kitaru.say_and_wait('하지만 그전에 고베 신문배부터 치러야겠죠.');
    await kitaru.say_and_wait('아무래도 지금 팬 수로는 국화상에 나가기 좀 빠듯하니까요……');
    era.printButton('「불안해 보이는데?」', 1);
    await era.input();
    await kitaru.say_and_wait('네……');
    await kitaru.say_and_wait('점괘가 잘 안 나오거든요……');
    await kitaru.say_and_wait([
      '하지만 이건 제 ',
      kitaru.get_bigger_sibling_sex_title(),
      '와의 약속인걸요! 반드시 지켜낼 거예요!',
    ]);
    await kitaru.say_and_wait(['손가락 걸고 약속했으니까요!']);
    if (check_aim_race(RaceHistory.get(56).get(), race_enum.toky_yus, 1, 20)) {
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 일본 더비 종반에 보여준 스퍼트는 ',
        me.get_colored_name(),
        '에게 깊은 인상을 남겼다. ',
        kitaru.sex,
        '는 자신의 내면적인 트라우마를 완전히 떨쳐낸 듯 보였다.',
      ]);
    }
    await era.printAndWait([
      '게다가 그런 종반 폭발력을 잘 활용한다면, 분명 ',
      kitaru.sex,
      '의 기습적인 승부수가 되어줄 것이다.',
    ]);
    era.printButton('「다시 훈련 시작할까?」', 1);
    await era.input();
    await kitaru.say_and_wait('앗!');
    await kitaru.say_and_wait(['네! 어쨌든 저에겐 ', callname, '이 함께 계시니까요!']);
    await kitaru.say_and_wait([callname, '은 제 최강의 행운 아이템이라구요!']);
    await kitaru.say_and_wait('운명의 사람이 곁에 있다면! 저는 무적일 거예요!');
    await era.printAndWait('다른 이가 보면 농담처럼 들릴지도 모르겠지만.');
    await era.printAndWait([
      '아니, ',
      me.get_colored_name(),
      '은(는) 확신할 수 있었다. ',
      kitaru.sex,
      '가 이 말을 할 때만큼은 진심이었다는 것을.',
    ]);
    await era.printAndWait('PTSD의 치료법 중 하나는 정신분석 치료이다.');
    await era.printAndWait(
      '이 치료의 이론적 토대 중 하나인 애착 이론은 다양한 감정적 유대와 연결에 대해 설명한다.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 추측이 맞다면, ',
      kitaru.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 포함한 각종 행운 아이템들을 자신이 지금까지 버텨온 정신적 지주, 즉 자기 의지의 투사체로 삼고 있는 중이다.',
    ]);
    await era.printAndWait('이것은…… 좋은 징조일까?');
    flags.wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 20);
  };
};