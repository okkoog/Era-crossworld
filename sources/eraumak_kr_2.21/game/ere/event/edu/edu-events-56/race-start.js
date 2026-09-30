const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const FukuEventMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const { race_enum } = require('#/data/race/race-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,number,FukuEventMarks,RaceStartParams):Promise>} */
const handlers = {};

handlers[race_enum.begin_race] = async (kitaru, me, callname, edu_weeks) => {
  if (edu_weeks > 48) {
    return true;
  }
  await print_event_name('데뷔전 맞이하기', kitaru);
  await era.printAndWait([
    kitaru.get_colored_name(),
    '의 데뷔전 날이 마침내 찾아왔다.',
  ]);
  await era.printAndWait([
    '평소 트레이닝 데이터로 보건대, ',
    kitaru.get_colored_name(),
    '라는 이름의 ',
    kitaru.get_uma_sex_title(),
    '는 도주 각질을 상대로 초조해하기 쉽다는 점만 제외하면, 나머지 능력은 동기들 중 상위권에 속했다.',
  ]);
  await era.printAndWait([
    '신분증을 제시한 뒤, ',
    me.get_colored_name(),
    '은(는) ',
    kitaru.get_colored_name(),
    '의 레이스 전 대기실로 입장하는 것을 허가받았다.',
  ]);
  await kitaru.say_and_wait([callname, '!!!']);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 방 안으로 들어오는 것을 보자 ',
    kitaru.get_colored_name(),
    '는 흥분한 듯 ',
    me.get_colored_name(),
    '에게 달려왔다.',
  ]);
  await era.printAndWait(['이는 ', me.get_colored_name(), '의 예상을 뛰어넘는 반응이었다.']);
  if (era.get('flag:현재명성') >= 500) {
    await era.printAndWait([
      '기억하기론 대부분의 ',
      kitaru.get_uma_sex_title(),
      '는 이럴 때 엄청나게 긴장하기 마련이지만, ',
      kitaru.get_colored_name(),
      '는 오히려 몹시 들뜬 모습이었다.',
    ]);
  } else {
    await era.printAndWait([
      '선배들에게 듣기로는 대부분의 ',
      kitaru.get_uma_sex_title(),
      '는 이럴 때 엄청나게 긴장하기 마련이지만, ',
      kitaru.get_colored_name(),
      '는 오히려 몹시 들뜬 모습이었다.',
    ]);
  }
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 마치카네 후쿠키타루를 위아래로 훑어보았다. ',
    kitaru.sex,
    '는 이전에 말했던 전신에 영력이 가득 찼을 때의 모습처럼 몹시 흥분한 듯 보였다.',
  ]);
  era.printButton('「운세는 좀 어때?」', 1);
  await era.input();
  if (era.get('status:56:흉') === 1) {
    await kitaru.say_and_wait('그럭저럭이네요…… 그래도 데뷔전 정도는 아마 문제없을 거예요.');
  } else {
    await kitaru.say_and_wait('네! 지금의 제게는 시라오키 님이 강림해 계시니까요!');
  }
  await kitaru.say_and_wait(
    '게다가 그분이 보내주신 신의 사자님도 곁에 있으니, 그때와는 다르다고요!',
  );
  era.printButton('「그때?」', 1);
  await era.input();
  await era.printAndWait('무심코 속마음을 내뱉을 줄은 몰랐던 모양이다.');
  await era.printAndWait([
    '싱글벙글 웃고 있던 ',
    kitaru.get_colored_name(),
    '가 갑자기 멈칫하더니 복잡미묘한 표정을 지었다.',
  ]);
  await kitaru.say_and_wait([
    '제 ',
    kitaru.get_bigger_sibling_sex_title(),
    '가…… 아무튼……',
  ]);
  await era.printAndWait([
    kitaru.get_colored_name(),
    '는 심호흡을 몇 번 하더니 이야기를 이어나갔다.',
  ]);
  await kitaru.say_and_wait(
    '태어나서 처음으로 제비뽑기를 하고 싶었던 날! 잔돈이 없어서 포기할 수밖에 없었던 바로 그날 말이에요!',
  );
  await kitaru.say_and_wait('하지만 그때와는 달라요! 지금의 제게는 든든한 동료가 있으니까요!');
  await era.printAndWait([
    '말을 마친 ',
    me.get_colored_name(),
    '에게 익숙한 ',
    kitaru.get_colored_name(),
    '의 미소가 ',
    kitaru.sex,
    '의 얼굴에 다시 피어올랐다.',
  ]);
};

handlers[race_enum.aoba_sho] = async (kitaru, me, callname) => {
  await print_event_name('청엽상 맞이하기', kitaru);
  await era.printAndWait('청엽상은 일본 더비의 예선전 격인 레이스다.');
  await era.printAndWait([
    '그렇기에 일본 더비 출주권을 따내려는 수많은 ',
    kitaru.get_uma_sex_title(),
    '들이 이 레이스에 참가한다.',
  ]);
  await era.printAndWait(
    '레이스 전 패덕에서 다른 참가자들이 뿜어내는 기세는 데뷔전 때와는 차원이 달랐다.',
  );
  if (era.get('flag:현재명성') >= 500) {
    await era.printAndWait([
      '산전수전 다 겪은 ',
      me.get_colored_name(),
      '에게조차 적지 않은 압박감이 느껴졌다.',
    ]);
  } else {
    await era.printAndWait([
      '트레이너인 ',
      me.get_colored_name(),
      '에게도 적지 않은 압박감이 느껴졌다.',
    ]);
  }
  era.drawLine({ content: '도쿄 경기장 대기실 앞'});
  era.printButton('문을 연다', 1);
  await era.input();
  await era.printAndWait([
    '다시 대기실로 들어서며 지난 데뷔전 때와 같은 모습의 ',
    kitaru.get_colored_name(),
    '를 볼 수 있기를 기대했으나……',
  ]);
  await kitaru.say_and_wait('후우…… 하! 후우…… 하!');
  await era.printAndWait([
    '기대와는 달리, 숨이 가쁜 듯 ',
    kitaru.sex,
    '는 거칠게 숨을 몰아쉬고 있었다.',
  ]);
  era.printButton('「종이봉투라도 좀 줄까?」', 1);
  await era.input();
  await kitaru.say_and_wait('아하하…… 괜찮아요! 괜찮다고요!');
  await kitaru.say_and_wait('레이스 전 점괘에서도 제가 지금 대길이라고 나왔는걸요?');
  await kitaru.say_and_wait([
    '시라오키 님…… ',
    callname,
    '…… 그리고 ',
    kitaru.get_bigger_sibling_sex_title(),
    '……',
  ]);
  await kitaru.say_and_wait('괜찮아요! 분명 괜찮을 거예요!');
  await era.printAndWait([
    '이건 좀 심하다. ',
    kitaru.get_colored_name(),
    '의 반응은 과도하게 예민했다. 단순한 긴장이라고 치부하기에는 도저히 설명되지 않는 구석이 있었다.',
  ]);
  await kitaru.say_and_wait('자, 자! 문제없어요. 우린 나중에 국화상에서도 우승할 거니까요!');
  await era.printAndWait([
    me.get_colored_name(),
    '의 걱정을 눈치챈 듯, ',
    kitaru.get_colored_name(),
    '는 화제를 돌리려 애썼다.',
  ]);
  await kitaru.say_and_wait('맞아…… 맞아요. 나중의 국화상을 위해서라도 전력을 다할게요!');
  await era.printAndWait([
    '너무나도 노골적인 자기 암시였다. 부디 이것이 ',
    kitaru.get_colored_name(),
    '에게 효과가 있기를 바랄 뿐이었다.',
  ]);
};

handlers[race_enum.toky_yus] = async (kitaru, me, callname) => {
  await print_event_name('일본 더비 맞이하기', kitaru);
  await era.printAndWait([
    kitaru.get_colored_name(),
    '의 강력한 요청에 따라, 본래 예정되어 있던 일본 더비 출주 계획을 유지했다.',
  ]);
  await era.printAndWait([
    '거의 모든 동기 우수 ',
    kitaru.get_uma_sex_title(),
    '들이 이 레이스에 이름을 올렸다. 인기 순위로 보면 ',
    kitaru.get_colored_name(),
    '는 미디어로부터 출주에 의의를 둔다는 평가를 받는, 주목받지 못하는 한 명에 불과했다.',
  ]);
  await era.printAndWait(
    '청엽상에서의 갑작스러운 실속을 비판하는 매체도 한둘이 아니었다.',
  );
  era.drawLine({ content: '도쿄 경기장 대기실 앞'});
  era.printButton('문을 연다', 1);
  await era.input();
  await era.printAndWait([kitaru.sex, '는 방 안에 서 있었다.']);
  await era.printAndWait(
    '언뜻 보면 세일러복 같지만, 무녀복처럼 어깨를 대담하게 노출한 디자인의 의상. 붉은 깃은 강조하듯 봉긋하게 솟은 가슴 사이에 자리 잡고 있었다.',
  );
  await era.printAndWait(
    '하의는 순산형 엉덩이를 간신히 가릴 정도의 플리츠 스커트와 늘씬한 다리 라인을 그려내는 하얀 스타킹, 그리고 무녀의 신분을 상징하는 에마, 염주, 등 뒤에는 행운의 상징인 마네키네코까지.',
  );
  await era.printAndWait([
    '이것이 바로 ',
    kitaru.get_colored_name(),
    '라는 ',
    kitaru.get_uma_sex_title(),
    '의 승부복이다. 귀여움, 활기, 섹시함, 신비로움이 이 한 벌의 옷 안에 완벽하게 조화를 이루고 있었다.',
  ]);
  era.printButton('「괜찮아?」', 1);
  await era.input();
  await kitaru.say_and_wait('괜찮다고 말하고 싶지만…… 하지만……');
  await kitaru.say_and_wait('패덕에서 들려오는 팬들의 응원 소리만 들어도 긴장되기 시작했어요.');
  await kitaru.say_and_wait(['하지만…… ', callname, '!']);
  await era.printAndWait([
    '오렌지색 머리의 ',
    kitaru.get_teen_sex_title(),
    '가 심호흡을 하더니 뒤를 돌아 ',
    me.get_colored_name(),
    '에게 최대한 미소를 지어 보였다.',
  ]);
  await kitaru.say_and_wait('더비는 가장 운이 좋은 우마무스메가 이긴다고들 하잖아요!');
  await kitaru.say_and_wait([
    '운 승부라면 시라오키 님과 ',
    callname,
    '의 이중 가호를 받는 저는 무적이라니까요!',
  ]);
  await era.printAndWait([
    kitaru.sex,
    '는 ',
    me.get_colored_name(),
    '에게 엄지손가락을 치켜세웠다. 지난번 약속을 한 뒤로 ',
    me.get_colored_name(),
    '은(는) ',
    kitaru.get_colored_name(),
    '의 태도가 눈에 띄게 변한 것을 느낄 수 있었다.',
  ]);
  await era.printAndWait([
    '적어도 ',
    me.get_colored_name(),
    '과(와) 함께 있을 때만큼은, 얼굴의 미소가 이전처럼 딱딱하지 않았다.',
  ]);
  era.printButton('「하얗게 불태워 버리지는 말아줘」', 1);
  await era.input();
  era.printButton('「무사히 돌아와!」', 1);
  await era.input();
  await kitaru.say_and_wait('네!');
  await kitaru.say_and_wait([callname, '과 약속했으니까요!']);
  if (era.get('love:56') >= 50) {
    await kitaru.say_and_wait([
      '그치만 ',
      callname,
      '도 제게 행운 에너지 좀 나눠주세요!',
    ]);
    await era.printAndWait([
      '그렇게 말하며 승부복 차림의 ',
      kitaru.get_colored_name(),
      '가 갑자기 정면에서 ',
      me.get_colored_name(),
      '의 몸을 꽉 끌어안았다.',
    ]);
    await era.printAndWait([
      '폭신폭신한 오렌지색 머리카락이 ',
      me.get_colored_name(),
      '의 가슴에 부벼졌다.',
    ]);
    await era.printAndWait([
      '한참이 지나서야 만족한 듯한 ',
      kitaru.get_colored_name(),
      '가 고개를 들어 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
  }
  await kitaru.say_and_wait([callname, ', 그거 아세요?']);
  await kitaru.say_and_wait('의식에 있어서 말에는 아주 큰 힘이 깃들어 있거든요!');
  await kitaru.say_and_wait('그러니까 약속한 일은! 제가 반드시 지킬 거예요!');
  await era.printAndWait([
    '말을 마친 뒤 마네키네코 가방의 끈을 고쳐 맨 ',
    kitaru.get_colored_name(),
    '는 등을 돌려 경기장으로 향했다.',
  ]);
};

handlers[race_enum.kobe_hai] = async (kitaru, me, callname) => {
  await print_event_name('고베 신문배 맞이하기', kitaru);
  await era.printAndWait([
    '무표정에 가까울 정도로 엄격한 표정의 ',
    kitaru.get_colored_name(),
    '가 대기실 벤치에 앉아 있었다.',
  ]);
  await era.printAndWait([
    '너무나도 정직한 자세로 앉아 있는 탓에 체육복에 붙은 번호표가 굽어진 곡선이 더욱 도드라져 보였고, 하얀 롱스타킹을 신은 두 다리는 가지런히 모여 허벅지 안쪽에 유혹적인 라인을 만들고 있었다.',
  ]);
  await era.printAndWait([
    '게다가…… ',
    me.get_colored_name(),
    '은(는) 이 녀석이 평소에 얼마나 자주 엉뚱한 짓을 하는지 떠올리자, 입가에서 웃음이 새어 나오는 것을 참을 수 없었다.',
  ]);
  await kitaru.say_and_wait([callname, ', 왜 웃으시는 건가요?']);
  await era.printAndWait([
    kitaru.get_colored_name(),
    '는 여전히 진지한 척하며 ',
    me.get_colored_name(),
    '에게 물었으나, 입꼬리는 분명히 실룩거리고 있었다.',
  ]);
  era.printButton('「많이 긴장돼?」', 1);
  await era.input();
  await kitaru.say_and_wait('아니요, 그야 여름 합숙에서 그렇게 오랫동안 준비했는걸요……');
  await era.printAndWait('가슴팍의 번호표를 만지작거리며 주의를 분산시키려 애쓰는 듯했다.');
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '이(가) 다가가 ',
    kitaru.get_colored_name(),
    '의 옆에 앉자, ',
    kitaru.sex,
    '의 엄격했던 표정은 이내 무너져 내렸다.',
  ]);
  await kitaru.say_and_wait('으으…… 사실 조금은요.');
  await kitaru.say_and_wait(
    '더 힘든 일은 나중에 올 거란 걸 알면서도, 벌써 이렇게 무서워질 줄은 몰랐어요.',
  );
  await era.printAndWait([
    '몸을 기울여 ',
    me.get_colored_name(),
    '의 어깨에 기댄 ',
    kitaru.get_colored_name(),
    '의 호흡이 한결 부드러워졌다. 이렇게 가까운 거리에서는 ',
    me.get_colored_name(),
    '에게도 ',
    kitaru.sex,
    '의 신사처럼 청량한 살결 냄새가 느껴졌다.',
  ]);
  await kitaru.say_and_wait('킁…… 킁……');
  await kitaru.say_and_wait([
    sys_get_colored_callname(56, 5),
    '한테 들었는데, 서로의 냄새가 좋게 느껴지는 건 두 사람의 상성이 좋다는 증거래요……',
  ]);
  await kitaru.say_and_wait('조금 진정되는 것 같아요……');
  await kitaru.say_and_wait(['그건 그렇고, ', callname, '은 약속에 대해 어떻게 생각하시나요?']);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 대답하기도 전에, ',
    kitaru.get_teen_sex_title(),
    '는 자문자답하듯 말을 이어갔다.',
  ]);
  await kitaru.say_and_wait(
    '제가 보기엔 약속을 한 양측은 서로의 운명 중 일부분을 상대방과 묶게 되는 것 같아요.',
  );
  await kitaru.say_and_wait([
    '그래서 제 ',
    kitaru.get_bigger_sibling_sex_title(),
    '와 약속을 한 저는 본래 ',
    kitaru.get_bigger_sibling_sex_title(),
    '의 길이었을 이 길을 걷고 있고, 그러니 당연히 잘해내야만 하죠.',
  ]);
  await kitaru.say_and_wait('후우……');
  era.printButton('「나중에는 후쿠키타루만의 길을 보고 싶은걸.」', 1);
  await era.input();
  await kitaru.say_and_wait('앗!');
  await kitaru.say_and_wait('그런가요!?');
  await kitaru.say_and_wait('후우…… 일단은 눈앞의 일부터 끝내야겠네요.');
  await kitaru.say_and_wait('아무튼, 이제 출발할 시간이에요……');
  await kitaru.say_and_wait(['기다려 주세요, ', callname, '!']);
  await kitaru.say_and_wait('국화상으로 통하는 문을 열기 위해, 전력을 다하고 올게요!');
};

handlers[race_enum.kiku_sho] = async (kitaru, me, callname) => {
  await print_event_name('국화상 맞이하기', kitaru);
  await kitaru.say_and_wait('드디어…… 약속했던 대로…… 여기까지 왔네요!');
  await kitaru.say_and_wait('수많은 신사와 사찰이 있는 교토에서!');
  await kitaru.say_and_wait('국화를 상징으로 하는 중요한 레이스!');
  await era.printAndWait([
    kitaru.get_colored_name(),
    '가 처음으로 도전하는 3000미터 레이스. 그야말로 연옥과 같은 장거리였다.',
  ]);
  await era.printAndWait(['당연하게도 ', kitaru.sex, '는 몹시 긴장한 기색이었다.']);
  await era.printAndWait([
    '처음 ',
    kitaru.sex,
    '와 국화상을 목표로 정한 순간부터, ',
    me.get_colored_name(),
    '은(는) ',
    kitaru.sex,
    '의 집념을 느낄 수 있었다. ',
    kitaru.get_bigger_sibling_sex_title(),
    '와 한 약속, 그리고 ',
    me.get_colored_name(),
    '과(와) 한 약속이 ',
    kitaru.get_colored_name(),
    '라는 이름의 ',
    kitaru.get_teen_sex_title(),
    '를 여기까지 이끌어왔다.',
  ]);
  await era.printAndWait(['이제 ', kitaru.sex, '의 목표가 바로 눈앞에 있다.']);
  await kitaru.say_and_wait(['저기, ', callname, '!']);
  era.printButton('「왜 그래?」', 1);
  await era.input();
  await kitaru.say_and_wait('제 손을 잡아주실 수 있나요?');
  await era.printAndWait([
    kitaru.get_teen_sex_title(),
    '는 조금 수줍은 듯 ',
    me.get_colored_name(),
    '을(를) 바라보았다.',
  ]);
  await era.printAndWait([
    '갑작스러운 요청이었지만, 아마도 ',
    kitaru.get_colored_name(),
    '가 즉흥적으로 생각해낸 또 다른 의식일 터였다.',
  ]);
  era.printButton('손을 내민다', 1);
  await era.input();
  await era.printAndWait([
    kitaru.get_uma_sex_title(),
    ' 특유의 약간 높은 체온이 ',
    kitaru.sex,
    '의 손바닥을 통해 전해졌다. ',
    me.get_colored_name(),
    '은(는) ',
    kitaru.get_colored_name(),
    '의 가빴던 호흡이 한결 차분해지는 것을 느꼈다.',
  ]);
  await kitaru.say_and_wait('비록…… 지금 이런 말을 할 때는 아닐지도 모르겠지만요.');
  await kitaru.say_and_wait([
    kitaru.get_bigger_sibling_sex_title(),
    '가 세상을 떠난 뒤, ',
    kitaru.get_bigger_sibling_sex_title(),
    '의 소원이었던 국화상을 달리는 것을 대신 이뤄주겠다는 건 제게 과분한 꿈에 불과했어요.',
  ]);
  await kitaru.say_and_wait([
    '그런데 정말로 여기까지 올 수 있다니, ',
    callname,
    '은 제게 정말로, 정말로 신께서 보내주신 사자님과 다름없어요!',
  ]);
  await kitaru.say_and_wait('후우……');
  await kitaru.say_and_wait('에헤헤!');
  await kitaru.say_and_wait('역시 말하고 나니 한결 낫네요!');
  await kitaru.say_and_wait(['그럼 ', callname, ', 다녀오겠습니다!']);
  await kitaru.say_and_wait('부디 지켜봐 주세요…… 저희가 신령님들께 승리를 봉납하는 모습을요!');
};

handlers[race_enum.kink_sho] = async (kitaru, me, callname, _, edu_marks) => {
  await print_event_name('킨코상 맞이하기', kitaru);
  await kitaru.say_and_wait('후와아…… 정말 오랜만에 나가는 레이스네요.');
  era.printButton('「준비는 잘 됐어?」', 1);
  await era.input();
  await kitaru.say_and_wait('그럭저럭요!');
  await kitaru.say_and_wait('음! 딱히 특별한 기분은 안 드네요……');
  await kitaru.say_and_wait('행운이 깃든 저니까 그냥 달리기만 하면 계속 이기겠죠?');
  await era.printAndWait([
    '체육복 차림의 ',
    kitaru.get_colored_name(),
    '가 싱글벙글 웃으며 ',
    me.get_colored_name(),
    '을(를) 바라보았다.',
  ]);
  if (era.get('love:56') > 75) {
    await kitaru.say_and_wait('아 참, 맞다!');
    await kitaru.say_and_wait([callname, '! 저랑 같이 행운 의식 하나만 더 해요!']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 반응하기도 전에, 손으로 가볍게 ',
      me.get_colored_name(),
      '의 얼굴을 감싸 쥐었다.',
    ]);
    await me.say_and_wait('윽!');
    await era.printAndWait([
      '평소라면 치아 뒤에 얌전히 머물렀을 작은 혀가 이번에는 이례적으로 ',
      me.get_colored_name(),
      '의 구강을 침범하여, ',
      kitaru.get_colored_name(),
      '의 타액을 밀어 넣었다.',
    ]);
    await kitaru.say_and_wait('츄릅～');
    await era.printAndWait(
      '참가자 입장 안내가 나오고 나서야, 지나칠 정도로 길었던 이 진한 키스가 중단되었다.',
    );
    await kitaru.say_and_wait(['좋아요! ', callname, '! 다녀올게요!']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 얼굴에 붉은 홍조가 도는 것을 보며, ',
      me.get_colored_name(),
      '은(는) 이 녀석이 대체 달리는 것에 마음을 얼마나 쓰고 있는 것인지 의구심이 들었다.',
    ]);
    begin_and_init_ero(0, 56);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(56, part_enum.mouth),
      false,
    );
    end_ero_and_train();
    edu_marks.kink_shoKISS = 1;
  }
  era.printButton('「그래도 좀 진지하게 임해야지?」', 1);
  await era.input();
  await kitaru.say_and_wait(['에이, ', callname, '!']);
  await kitaru.say_and_wait('제게 이런 행운을 가져다주신 건 바로 당신이잖아요!');
  await kitaru.say_and_wait([callname,'은 그냥 거기 앉아서 지켜보기만 하시면 된다고요!']);
  await kitaru.say_and_wait('대길인 저는 대충 달려도 이길 수 있으니까요!');
  await era.printAndWait([
    '무심하다 못해 약간은 냉담하기까지 한 태도. 레이스가 ',
    kitaru.sex,
    ' 자신과 전혀 상관없는 일처럼 느껴지는 듯했다.',
  ]);
  await era.printAndWait([
    '그저 ',
    me.get_colored_name(),
    '의 명령에 복종하여 경기장에 발을 들일 뿐이었다.',
  ]);
  await kitaru.say_and_wait('자, 자, 이제 더 말 안 하셔도 돼요!');
  await era.printAndWait([
    '아마도 국화상에서 ',
    kitaru.get_colored_name(),
    '의 집념과 함께 무언가 다른 것이 제물로 바쳐진 것일지도 모른다.',
  ]);
};

handlers[race_enum.takz_kin] = async (kitaru, me, callname, edu_weeks) => {
  if (edu_weeks < 96) {
    return true;
  }
  await print_event_name('타카라즈카 기념 맞이하기', kitaru);
  await kitaru.say_and_wait('영광으로 향하는 참배길은 본래 끊어졌어야 했을 터!');
  await kitaru.say_and_wait('하지만 여러분의 크고 작은 염원이 하나둘씩 모여서!');
  await kitaru.say_and_wait('제게 다시 한번 그 길을 열어주셨어요!');
  await kitaru.say_and_wait('타카라즈카 기념!');
  await kitaru.say_and_wait(['절대로 그분들을 실망시키지 않을 거예요, ', callname, '!']);
  await kitaru.say_and_wait('최고의 레이스를 모두에게 보여드리겠어요!');
  era.printButton('「이제 괜찮은 거야?」', 1);
  await era.input();
  await kitaru.say_and_wait([
    '네! 전에는 그저 제 ',
    kitaru.get_bigger_sibling_sex_title(),
    '의 소원을 짊어지고, 이런저런 행운 아이템에 의지하며 나아갔을 뿐이었죠.',
  ]);
  await kitaru.say_and_wait(
    '하지만 지금의 제게는 수많은 팬분들의 염원도 깃들어 있어요! 전보다 훨씬 강하다고요!',
  );
  await kitaru.say_and_wait('그리고 무엇보다 중요한, 저 자신의 이기고 싶다는 마음까지!');
  await kitaru.say_and_wait('이 의식은……');
  await kitaru.say_and_wait(
    '아니…… 레이스는 운에 기대지 않고, 저 자신의 의지로 달릴 거예요!',
  );
  era.printButton('「듣고 보니 너무 폼 잡는 거 아니야?」', 1);
  era.printButton('「그 기세로 밀어붙이자!」', 2);
  if ((await era.input()) === 1) {
    await kitaru.say_and_wait('그, 그렇게 들리나요~ 역시 너무 과했나 봐요, 헤헤……');
  } else {
    await kitaru.say_and_wait('네! ……저 스스로 생각해도 조금 과한 것 같긴 하지만요.');
  }
  await kitaru.say_and_wait(
    '그래도! 제 마음만큼은 진짜라고요! 이번 제비통에서 무엇을 뽑을지는!',
  );
  await kitaru.say_and_wait('제가 직접 결정하겠어요!');
};

handlers[race_enum.arim_kin] = async (kitaru, me, callname, edu_weeks) => {
  if (edu_weeks < 96) {
    return true;
  }
  await print_event_name('아리마 기념 맞이하기', kitaru);
  await era.printAndWait([
    '드물게도 ',
    kitaru.get_colored_name(),
    '와 함께 코스로 통하는 지하 통로 안까지 함께 걸어 들어갔다.',
  ]);
  await era.printAndWait([
    '출구는 마치 선택받은 자만이 통과할 수 있는 괴물의 입 같았고, ',
    kitaru.get_uma_sex_title(),
    '가 그 출구의 햇살 속으로 삼켜질 때마다,',
  ]);
  await era.printAndWait(
    '팬들의 응원 소리가 멀리서 울려 퍼졌다. 마치 진미를 맛보고 만족스럽게 포효하는 괴물의 목소리처럼.',
  );
  await era.printAndWait(
    '관중들의 함성이 겹쳐지며 지하 통로의 벽면조차 진동하고 있었다.',
  );
  await era.printAndWait([
    '앞서 걷던 ',
    kitaru.get_colored_name(),
    '가 마치 꿈에서 깨어난 듯 잠시 멈춰 서는 것을 ',
    me.get_colored_name(),
    '은(는) 보았다.',
  ]);
  era.printButton('「괜찮아?」', 1);
  await era.input();
  await kitaru.say_and_wait('앗!');
  await kitaru.say_and_wait('……정말로 아리마 기념까지 왔네요!');
  await kitaru.say_and_wait('여기까지 오면서 많은 분께 폐를 끼쳤는데……');
  era.printButton('「그분들을 위해서라도, 오늘의 승리를 쟁취하자!」', 1);
  await era.input();
  await kitaru.say_and_wait('네!');
  await era.printAndWait([
    '모두가 이미 입장한 터라, 지하 통로에는 ',
    me.get_colored_name(),
    '과(와) ',
    kitaru.get_colored_name(),
    '만이 남았다.',
  ]);
  await kitaru.say_and_wait('아 참!');
  await kitaru.say_and_wait('저기…… 운세 지원을 받고 싶어요!');
  if (era.get('love:56') < 50) {
    await era.printAndWait([
      '뜨거운 체온을 머금은 오렌지색 머리의 ',
      kitaru.get_uma_sex_title(),
      '가 ',
      me.get_colored_name(),
      '의 품으로 뛰어들었다. 귀를 실룩거리며 ',
      me.get_colored_name(),
      '의 얼굴을 몇 번 툭툭 쳤다.',
    ]);
  } else {
    await era.printAndWait([
      '잠시 응시하던 ',
      me.get_colored_name(),
      '의 손이 결국 ',
      kitaru.get_colored_name(),
      '의 목덜미를 감싸 안았다. ',
      kitaru.sex,
      '의 뒷머리를 어루만지며, 고개를 숙여 ',
      kitaru.sex,
      '의 입술을 훔쳤다.',
    ]);
    await era.printAndWait('다른 참가자들에게 들킬지도 모르는 장소에서 타액을 교환하기 시작했다.');
    era.println();
    await say_by_passer_by_and_wait(
      `지나가는 ${kitaru.get_uma_sex_title()}`,
      '정말 꼴불견이네……',
    );
    era.println();
  }
  await kitaru.say_and_wait('후우…… 이제 눈에서 점괘가 쏟아져 나올 것 같은 기분이에요!');
  await era.printAndWait([
    '이토록 가까운 거리에서, ',
    me.get_colored_name(),
    '은(는) ',
    kitaru.sex,
    '의 눈동자 속 별들이 더욱 밝게 빛나는 것을 발견했다.',
  ]);
  await kitaru.say_and_wait(['그럼 다녀오겠습니다, ', callname, '!']);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) ',
    kitaru.get_colored_name(),
    '가 지하 통로를 빠져나가, 괴물의 입을 넘어 하늘에서 쏟아지는 백색 광채에 휩싸이는 것을 배웅했다.',
  ]);
  await era.printAndWait('우렁찬 소음과 환호성을 동반하며 게이트 안으로 걸어 들어갔다.');
  era.drawLine({ content: '나카야마 경기장 게이트 안'});
  await kitaru.print_and_wait(
    '전에는 행운만이 내 편이라면 여기까지 올 수 있을 거라 생각했지만!',
  );
  await kitaru.print_and_wait(
    '행운만으로는 이곳에 올 수 없었어! 수많은 인연이 나를 이곳으로 인도해준 거야!',
  );
  await kitaru.print_and_wait('나를 자신에게 투영해 응원해주시는 팬분들!');
  await kitaru.print_and_wait('동기 친구들!');
  await kitaru.print_and_wait([
    '돌아가신 내 ',
    kitaru.get_bigger_sibling_sex_title(),
    '!',
  ]);
  await kitaru.print_and_wait(['그리고 언제나 필사적으로 나를 키워주신 ', callname, '!']);
  await kitaru.print_and_wait('나는 오늘 신령님께 기도하지 않겠어.');
  await kitaru.print_and_wait('오늘만큼은——');
  await kitaru.print_and_wait('내가 직접 신령님이—— 시라오키 님이 되겠어!');
  await kitaru.print_and_wait('모두에게 행복을 가져다주는 복순이가 되는 거야!');
};

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {RaceStartParams} extra_flag
 */
module.exports = async (kitaru, me, callname, extra_flag) => {
  const edu_marks = new FukuEventMarks(),
    edu_weeks = era.get('cflag:56:육성턴수합산');
  if (
    !handlers[extra_flag.race] ||
    (await handlers[extra_flag.race](
      kitaru,
      me,
      callname,
      edu_weeks,
      edu_marks,
      extra_flag,
    ))
  ) {
    if (
      era.get('mark:56:음문') &&
      !edu_marks.tattoo &&
      kitaru.sex_code !== 1 &&
      me.sex_code > 0
    ) {
      edu_marks.tattoo = 1;
      await print_event_name('때아닌 발정', kitaru);
      await kitaru.say_and_wait('으으……');
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '아랫배를 움켜쥔 ',
        kitaru.get_colored_name(),
        '가 등을 굽힌 채 ',
        me.get_colored_name(),
        '의 앞에 서 있었다. 발그레해진 뺨에서는 발정이라도 난 듯한 황홀경이 엿보였다.',
      ]);
      await kitaru.say_and_wait([callname, '…… 하고 싶어…… 너무 하고 싶어요……']);
      await era.printAndWait([
        '왜 갑자기 이러는 것인지, ',
        me.get_colored_name(),
        '은(는) 당황스러움을 감출 수 없었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 미처 생각에 잠기기도 전에, ',
        kitaru.get_colored_name(),
        '는 이미 반쯤 무릎을 꿇은 채 바닥으로 쓰러졌다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '가 자신의 옷자락을 걷어 올리는 것을 보았다. 이미 선홍빛으로 물든 아랫배에는 ',
        me.get_colored_name(),
        '이(가) 새겨 넣은 음문이 눈치없이 분홍빛 미광을 내뿜고 있었다.',
      ]);
      await era.printAndWait([
        '의심할 여지 없이, 이것이 바로 ',
        kitaru.get_colored_name(),
        '를 몸과 마음 모두 완전한 우마뾰이 모드로 몰아넣은 주범이었다.',
      ]);
      await kitaru.say_and_wait([callname, '…… 죄송해요……']);
      await era.printAndWait([
        '벤치에 앉아 있던 ',
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '가 무릎으로 기어와 ',
        me.get_colored_name(),
        '의 가랑이 사이로 파고드는 것을 지켜보았다. 그리고 이 발정 난 암컷은 스스로 ',
        me.get_colored_name(),
        '의 사타구니에 얼굴을 묻었다.',
      ]);
      await era.printAndWait([
        '옷감을 뚫고 나오는 체취만으로도 점술사 아가씨의 아랫배는 묵직한 충격을 받은 듯했다.',
      ]);
      await era.printAndWait([
        '음문은 ',
        kitaru.get_colored_name(),
        '의 몸에서 달콤한 페로몬 향기를 뿜어내게 했고, 매혹적인 자태는 ',
        me.get_colored_name(),
        '의 하반신 역시 더욱 팽창하게 만들었다.',
      ]);
      await kitaru.say_and_wait('으으응!');
      await era.printAndWait([
        '살짝 붉어진 입술을 벌려 하얀 치아로 ',
        me.get_colored_name(),
        '의 바지 지퍼를 물고 천천히 내리자, 구속에서 풀려난 붉고 거대한 성기가 양복바지 사이로 튕겨 나왔다.',
      ]);
      await kitaru.say_and_wait('자지 님…… 안녕……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 탐욕스럽게 ',
        me.get_colored_name(),
        '의 하체에서 풍기는 성적인 체취를 들이켰고, 이내 다급하게 혀끝으로 귀두 끝부분을 애무했다.',
      ]);
      await kitaru.say_and_wait('츄릅!');
      await era.printAndWait([
        '요도에서 흘러나오는 점액을 ',
        kitaru.get_colored_name(),
        '의 혀끝으로 핥아 올린 뒤, 성기 전체를 입안으로 삼켰다. 투명한 타액이 성기가 드나들 때마다 ',
        kitaru.get_uma_sex_title(),
        '의 입가에서 뚝뚝 떨어져 분홍빛 입술에 윤기를 더했다.',
      ]);
      await era.printAndWait([
        '성기 모양대로 불룩해진 두 뺨과 함께 들려오는 질척한 흡입음은, 아마 문 밖까지 들리고도 남을 터였다.',
      ]);
      await kitaru.say_and_wait('음으으!');
      await era.printAndWait([
        '다행히 속옷이 제 역할을 다한 듯 ',
        kitaru.get_colored_name(),
        '의 하의 겉면에는 별다른 이상이 없었지만, 점차 힘이 풀리는 다리는 ',
        kitaru.get_colored_name(),
        '의 아랫배가 ',
        kitaru.sex,
        '에게 얼마나 거센 재촉을 보내고 있는지 대변하고 있었다.',
      ]);
      await kitaru.say_and_wait('히익……!');
      await era.printAndWait([
        '먹이를 삼키는 금붕어처럼 깊게 머금어 귀두가 목구멍의 부드러운 살결에 닿게 했다. 고운 뺨은 귀두의 강제적인 침입으로 인해 양옆으로 불룩해졌고, 목구멍에서는 삼키는 듯한 꿀꺽거리는 소리가 났다.',
      ]);
      await kitaru.say_and_wait('컥……!');
      await era.printAndWait([
        '오뚝한 코를 ',
        me.get_colored_name(),
        '의 음모 사이에 묻은 채, 곧 레이스에 임할 ',
        kitaru.get_colored_name(),
        '의 폐는 ',
        me.get_colored_name(),
        '의 체취로 가득 채워졌다.',
      ]);
      await era.printAndWait('푸슉!');
      await era.printAndWait([
        '질식할 것 같은 감각에 눈물이 눈가에 맺혔음에도, ',
        me.get_colored_name(),
        '에 의해 음문이 새겨진 ',
        kitaru.get_colored_name(),
        '는 여전히 ',
        me.get_colored_name(),
        '의 가랑이에 얼굴을 바짝 밀착시켰다. ',
        kitaru.get_uma_sex_title(),
        '특유의 예민한 미뢰와 비강으로 비릿한 냄새가 끊임없이 증폭되었다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 작은 혀는 계속해서 팽창하는 성기에 눌려 납작해졌고, 목구멍의 살결조차 귀두를 압박하는 데 가담했다.',
      ]);
      await kitaru.say_and_wait('하아…… 하아……');
      await era.printAndWait([
        '성기가 뜨겁고 좁은 입안을 드나들며 격렬한 흡입력이 이어졌고, 마침내 ',
        me.get_colored_name(),
        '은(는) 사정이라는 종착역에 도달했다.',
      ]);
      await kitaru.say_and_wait('꿀꺽!');
      await era.printAndWait([
        '입가로 흘러나온 약간의 정액을 미래를 예견한 점술사 아가씨가 손바닥으로 받아내어, 다급하게 다시 입안으로 밀어 넣었다.',
      ]);
      await kitaru.say_and_wait('꿀꺽꿀꺽!');
      await era.printAndWait([
        '간간이 솟구쳐 나오는 남은 정액들도 목구멍의 꿈틀거리는 연동 운동과 함께 뱃속으로 사라졌다.',
      ]);
      await era.printAndWait([
        '때마침 참가자를 호출하는 소리가 들려왔고, ',
        kitaru.sex,
        '는 그제야 ',
        me.get_colored_name(),
        '의 가랑이 사이에서 천천히 일어나 검지로 입가의 정액과 음모 몇 가닥을 훔쳐낸 뒤 혀끝으로 감아 입안으로 넣었다.',
      ]);
      await era.printAndWait([
        '그제야 ',
        kitaru.get_colored_name(),
        '의 눈동자가 다시 초점을 되찾았다.',
      ]);
      await kitaru.say_and_wait('후우……');
      await kitaru.say_and_wait('살 것 같네요……');
      await kitaru.say_and_wait([
        '정말이지! ',
        callname,
        '은 음문 조절이 너무 서투르다니까요!',
      ]);
      await era.printAndWait([
        '약간의 타박 섞인 말투와 함께 ',
        kitaru.get_colored_name(),
        '는 바닥에서 천천히 일어났다. 하얀 롱스타킹의 윗부분에는 속옷이 다 막아내지 못한 애액이 이미 조금 배어 나와 있었다.',
      ]);
      await kitaru.say_and_wait([
        '그치만 ',
        callname,
        '의 정액을 삼켰더니 왠지 기운이 펄펄 나는걸요!',
      ]);
      await kitaru.say_and_wait('평소보다 더 잘 달릴 수 있을지도 모르겠네요?');
      await era.printAndWait([
        '겉모습을 꼼꼼히 정리하여 다른 사람들에게 이상하게 보이지 않도록 확인한 뒤에야, ',
        kitaru.get_colored_name(),
        '는 레이스 전 대기실을 떠났다.',
      ]);
      get_attr_and_print_in_event(56, [0, 10, 0, 0, 0], 0) &&
        (await era.waitAnyKey());
    } else {
      let message = [];
      const sex_mark = era.get('mark:56:음문'),
        sex_happy = era.get('mark:56:쾌락'),
        sex_love = era.get('mark:56:동심');

      if (sex_mark > 1) {
        message.push(() =>
          kitaru
            .say_and_wait('……제 승부복은 배가 노출되는 디자인이 아니라서 다행이에요.')
            .then(() =>
              era.printAndWait(
                '하지만 레이스 전의 흥분으로 인해 함께 반응하기 시작한 음문의 분홍빛 광채는 여전히 은은하게 비치고 있었다.',
              ),
            ),
        );
      }
      if (sex_happy > 1) {
        message.push(() =>
          kitaru
            .say_and_wait('으으…… 레이스 후에 주실 보상이 정말, 정말로 기대돼요!')
            .then(() =>
              era.printAndWait([
                '레이스를 위해 한동안 금욕했던 ',
                kitaru.get_colored_name(),
                '는 그 생각을 하는 것만으로도 몸을 살짝 떨기 시작했다.',
              ]),
            ),
        );
      }
      if (sex_love > 1) {
        message.push(() =>
          kitaru
            .say_and_wait('나중에…… 운명의 사람이라면 알고 계시겠죠!')
            .then(() => kitaru.say_and_wait('헤헤!'))
            .then(() =>
              era.printAndWait([
                '까치발을 들고 ',
                me.get_colored_name(),
                '의 뺨에 가볍게 입을 맞춘 뒤, ',
                kitaru.get_colored_name(),
                '는 경기장을 향해 걸어갔다.',
              ]),
            ),
        );
      }

      if (edu_marks.begin_race_end < 8) {
        message.push(() =>
          kitaru
            .say_and_wait('……시라오키 님께 비옵나니, 위대한 힘으로 제게 길을 열어주소서!')
            .then(() =>
              era.printAndWait([
                '어디선가 들은 법한 기도문을 읊조리며, ',
                kitaru.get_colored_name(),
                '의 뒷모습이 경기장 입구 너머로 사라졌다.',
              ]),
            ),
        );
        message.push(() =>
          kitaru
            .say_and_wait('……모든 별이 올바른 위치로 이동했군요!')
            .then(() =>
              era.printAndWait([
                '수정구슬을 마네키네코 가방 안에 집어넣고, ',
                kitaru.get_colored_name(),
                '의 뒷모습이 경기장 입구 너머로 사라졌다.',
              ]),
            ),
        );
      } else {
        message.push(() =>
          kitaru
            .say_and_wait([callname, ', 부디 희망을 품고 기다려 주세요!'])
            .then(() => kitaru.say_and_wait('전력을 다해 승리를 따내 올 테니까요!')),
        );
      }
      await get_random_entry(message)();
    }
  }
};