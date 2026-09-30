const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (acute, me, callname) => {
    era.set('cflag:100:축제이벤트표시', 0);
    await print_event_name('파이터데이 · 특대호 추가 중첩 무적 연소편', acute);
    const digital = get_chara_talk(19);
    const jordan = get_chara_talk(48);
    const festa = get_chara_talk(49);
    era.println();
    await era.printAndWait([
      '봄이 가고 가을이 오며, 올해로 벌써 ',
      acute.get_colored_name(),
      '와 만난 지 3년째가 되었다.',
    ]);
    await era.printAndWait(
      '겨울눈이 녹고, 봄의 기운이 맴돈다. 손꼽아 날짜를 세어보니, 발렌타인데이가 또다시 코앞으로 다가왔다.',
    );
    await era.printAndWait([
      '작년의 그 난리법석과 이상향의 해방(?)을 겪은 후, 올해 ',
      me.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '는 각자 훌쩍 성장했다.',
    ]);
    await era.printAndWait([
      '발렌타인데이 당일 저녁, 일상적인 트레이닝을 마친 후. ',
      me.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '는 익숙하게 자신의 휴게실로 향했다.',
    ]);
    await era.printAndWait('전원을 켜고, 나란히 앉아 각자 하반신을 코타츠 안에 집어넣었다——');
    era.printButton('「우아아~~~❤️」', 1);
    await era.input();
    await acute.say_and_wait('아하하~ 정말 따뜻하구려❤️.');
    await era.printAndWait([
      '어느새 서로의 존재에 익숙해진 ',
      me.get_colored_name(),
      '과(와) ',
      acute.get_colored_name(),
      '는, 서로 기댄 채 코타츠 앞에 앉아 있다.',
    ]);
    era.printButton(
      '「이번 주가 끝나면 코타츠를 치워야 한다고 생각하니…… 정말 아쉽네.」',
      1,
    );
    await era.input();
    await acute.say_and_wait(
      '호호호…… 아무래도 금방 기온이 오를 테니까 말이지. 얼른 코타츠를 치우지 않으면 땀띠가 날 거란다?',
    );
    era.printButton('「에이~~~조금만 더 늦게 치우면 안 돼?」', 1);
    await era.input();
    await acute.say_and_wait([
      '안 된다구? 만약 ',
      callname,
      '이 코타츠 폐인이 되어버린다면, 나도 같이 폐인이 되어버릴 거란다~',
    ]);
    era.printButton('「으음…… 자신을 인질로 삼아 압박하다니, 치사한 거 아니야?」', 1);
    await era.input();
    await acute.say_and_wait(['호호호…… ', callname, ', 내가 비겁하다고 탓하진 말려무나——']);
    era.printButton('「작년에는 그 안에서 몰래 잤으면서……」', 1);
    await era.input();
    await acute.say_and_wait('어라라…… 난 아무것도 안 들리는데?');
    await era.printAndWait(
      '겨울눈이 채 녹지 않은 계절, 방금 트레이닝을 마치고 휴게실로 돌아온 두 사람. 이렇게 코타츠 안에서 농담을 주고받으며, 각자의 땀을 말리고 있었다.',
    );
    await acute.say_and_wait('음…… 하지만 말이지, 역시 먼저 씻어야겠구나.');
    await era.printAndWait([
      '그렇게 말하며, ',
      acute.get_colored_name(),
      '는 코타츠에서 빠져나와 자리에서 일어났다.',
    ]);
    await acute.say_and_wait([
      '그럼 내가 먼저 목욕물을 데우러 갈게, ',
      callname,
      '. 다 데워지면 일찍 와서 씻으려무나?',
    ]);
    await era.printAndWait([
      '이제는 기술이 발전해서 굳이 목욕물을 데우는 수고를 할 필요가 없다는 사실을 ',
      acute.get_colored_name(),
      '에게 알려주고 싶었지만.',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      '는 여전히 그런 것들을 좋아하는 듯했다—— 물론, 굳이 그 말을 정정할 필요는 없어 보였다.',
    ]);
    era.printButton('「알겠어—— 다녀와~」', 1);
    await era.input();
    await acute.say_and_wait('그리고 말이지—— 초콜릿은 냉장고에 넣어뒀으니, 잊지 말고 먹으려무나?');
    era.printButton('「네네~ 알겠어. 알고 있으니까.」', 1);
    await era.input();
    await era.printAndWait(
      '건성으로 손을 흔들며 대답했다. 조금 볼품없을지도 모르지만, 편안한 상대에게는 늘 가장 나태한 모습을 보여주게 되는 법이다.',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      '가 천천히 욕실로 걸어가 문을 닫자, 달칵하는 소리가 났다.',
    ]);
    await era.printAndWait('코타츠 앞에 앉아, 저도 모르게 시선이 욕실 쪽으로 향했다——');
    await era.printAndWait('【달칵, 달칵——】');
    await era.printAndWait('【쏴아아아~~~】');
    await era.printAndWait('문틈으로 물소리가 들려온다……');
    await me.say_and_wait('…………', true);
    era.printButton('（정말이지 경계심이라곤 하나도 없네.）', 1);
    await era.input();
    await era.printAndWait('한 번…… 가볼까?');
    await era.printAndWait(
      '코타츠에서 힘겹게 기어 나와, 포복 자세로 사악하고 은밀한 행동에 나섰다.',
    );
    await era.printAndWait(
      '거실을 가로질러, 거실 앞 복도를 기어가, 반대편 욕실 앞에 도착했다.',
    );
    await era.printAndWait(
      '뚝뚝 떨어지는 물소리가 눈앞의 문틈에서 들려오고 있다. 가볍게 밀기만 하면, 산봉우리의 광채를 멀리서나마 바라볼 수 있으리라.',
    );
    await me.say_and_wait('물론, 이건 결코 변태적인 행위가 아니다.', true);
    await me.say_and_wait(
      ['그냥 ', acute.get_colored_name(), '는 한 번 목욕할 때마다 30분씩 씻으니까.'],
      true,
    );
    await me.say_and_wait('30분을 기다려야 한다면, 그저 얌전히 기다려야지.', true);
    await me.say_and_wait(
      [
        '하지만 이왕 30분을 기다리는데, 어째서 ',
        acute.get_colored_name(),
        '가 있는 욕실 문 앞에서 기다리면 안 된단 말인가?',
      ],
      true,
    );
    await me.say_and_wait(
      '그 시간 동안, 문이 꽉 닫히지 않았기에 문을 닫아주려다 실수로 욕실 안을 보게 되는 것도 분명 아주 합리적인 일이겠지~',
      true,
    );
    await me.say_and_wait('오오오———!', true);
    await era.printAndWait('하지만 그 경치 속엔, 구름과 안개만이 아득하게 피어오르고 있었다.');
    await era.printAndWait(
      '은하수가 하늘에서 내려와, 두 봉우리를 흐르고 호수를 지나 연록빛으로 접어들며, 마침내 큰 강물로 합쳐진다.',
    );
    await era.printAndWait(
      '예로부터 어진 자는 산을 좋아한다 하였으니, 새하얀 골짜기, 옥가루 같은 봉우리 위로 흰 안개와 뜬구름이 지나니, 오직 고심하는 자만이 감히 봉우리에 오르리라.',
    );
    await era.printAndWait(
      '본디 지혜로운 자는 물을 즐긴다 하였으니, 잿빛 머릿결 아래 은하수 흐르고, 뚝뚝 떨어지는 옥방울이 고운 정수로 맺히니. 오직 진실한 인연을 맺은 자만이 이를 맛볼 수 있으리라.',
    );
    await era.printAndWait(
      '이곳의 절경은 오직 빛을 훔치는 자만이 볼 수 있거늘, 평시에도 훌륭하건만 올려다보니 더욱 황홀하구나. 어찌 좋다는 한 단어로 다 표현할 수 있을까!',
    );
    await me.say_and_wait('나이스~~~~!', true);
    era.printButton('（그럼, 조금만 더 가까이, 아주 조금만 더 가까이……）', 1);
    await era.input();
    await era.printAndWait(
      '하지만 바로 그때, 철컥 하는 소리와 함께 휴게실 대문이 열렸다——',
    );
    const tokino = get_chara_talk(301);
    await tokino.say_and_wait([me.actual_name, ', 있으신가요? 여기 우편물이……']);
    await era.printAndWait([
      '현관문 앞, 욕실 문 앞에 엎드려 있던 모습이 ',
      tokino.get_colored_name(),
      '에게 남김없이 목격되고 말았다.',
    ]);
    await tokino.say_and_wait('………………');
    await era.printAndWait('쏴아아아아아~');
    await era.printAndWait('쏴아아아아아~');
    era.printButton('「………………」', 1);
    await era.input();
    await me.say_and_wait([
      '잠깐만요, ',
      sys_get_colored_callname(0, 301),
      ', 제 변명을 들어보세요.',
    ]);
    await me.say_and_wait('그게 말이죠, 사실, 저는 지금……');
    await me.say_and_wait('벽을 뚫고 빛을——');
    await era.printAndWait('【짝!!!!!】');
    await era.printAndWait('맑고 경쾌한 마찰음이 트레센 학원 전체에 울려 퍼졌다——');
    era.drawLine();
    await era.printAndWait([
      '30분 후, 목욕 가운을 두른 ',
      acute.get_colored_name(),
      '가 욕실에서 천천히 걸어 나왔다.',
    ]);
    await acute.say_and_wait([
      '어라라…… ',
      callname,
      ', 거실에 앉아서 30분이나 날 기다려준 게야? 정말 장하구나——',
    ]);
    await acute.say_and_wait('그런데…… 오른쪽 뺨에 있는 그 붉은 자국은 뭐니?');
    era.printButton('「……모기에게 물렸어.」', 1);
    await era.input();
    await acute.say_and_wait('그럼 코에 난 멍은?');
    era.printButton('「……큰 모기에게 물렸어.」', 1);
    await era.input();
    await acute.say_and_wait('그럼 정수리에 흐르는 적갈색 액체는…… 뭐니?');
    era.printButton('「……특대형 모기에게 물렸어.」', 1);
    await era.input();
    await acute.say_and_wait('오오…… 이 계절에도 그렇게 큰 모기가 있단 말이구나——');
    await era.printAndWait([
      '뭔가 생각하는 듯하던 ',
      acute.get_colored_name(),
      '는, 그대로 유유자적하게 냉장고로 다가가 물건을 하나 꺼냈다.',
    ]);
    await acute.say_and_wait(
      '그럼…… 오늘도 말 잘 듣고 열심히 노력한 착한 아이인 트레이너를 칭찬하기 위해서. 자, 이건 내가 어제 만든 초콜릿이란다.',
    );
    era.printButton('「……그 이야기를 하기 전에, 일단 옷부터 입어주면 안 될까?」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '에게 목욕 가운을 감상할 마음이 없는 건 아니었지만, 방금 전 ',
      tokino.get_colored_name(),
      '에게 「알몸을 한 번만 더 봤다간 온몸의 구멍에서 피를 흘리며 폭사하게 되는」혈자리를 찔려버렸기 때문이다.',
    ]);
    await era.printAndWait([
      '자신의 목숨을 생각해서라도, ',
      acute.get_colored_name(),
      '에게 어서 옷을 입히는 편이 좋을 것 같았다——',
    ]);
    await acute.say_and_wait(
      '연말 선물? 아니, 아니란다, 오늘 발렌타인데이 아니니? 서로 초콜릿을 주는 날이잖니……',
    );
    era.printButton(
      '「아니…… 왜 갑자기 미연시처럼 제멋대로 화제를 진행하는 건데? 게다가 목욕 가운 차림으로 발렌타인 초콜릿을 건네는 히로인이 어디 있어?」',
      1,
    );
    await era.input();
    await acute.say_and_wait(
      '우음? 왜 그러니, 초콜릿은 싫은 게야? 그럼 여기 젤리 세트도 있는데……',
    );
    era.printButton('「으음…… 딱히 싫은 건 아닌데——」', 1);
    await era.input();
    await era.printAndWait('……제길, 이건 이쯤 되면 유혹이라고 봐도 무방하겠지?');
    await era.printAndWait(
      '트레이닝실에서 목욕을 하고, 목욕 가운만 걸친 채 트레이너 앞에서 서성이다니, 이건 완전히 「유혹」이라고 할 수 있지 않을까?',
    );
    await era.printAndWait([
      '아니면 「그런」 건가? 「그런」 거? 원하기는 하지만 아직 서로 말로 합의하지는 않은 상황이라든가……',
    ]);
    await era.printAndWait([
      '제길…… 한순간 귀신에 홀린 탓에 ',
      tokino.get_colored_name(),
      '에게 혈을 찔리지만 않았어도, ',
      me.get_colored_name(),
      '은(는) 지금 당장 변신해 무한의 전쟁의 신을 소환했을 터……',
    ]);
    await era.printAndWait('…………');
    await era.printAndWait('됐다, 사념 따위는 이쯤에서 그만두자.');
    era.printButton('「사실…… 나도 줄게 하나 있거든.」', 1);
    await era.input();
    await acute.say_and_wait('우으음?');
    await me.say_and_wait(
      '작년 발렌타인데이 때도, 네게서 초콜릿을 받았었잖아? 뭐, 약간 깜짝 놀랄 만한 형태이긴 했지만……',
    );
    await me.say_and_wait(
      '원래대로라면 작년 화이트데이에 답례를 했어야 했는데—— 도통 뭘 선물해야 할지 몰랐었거든.',
    );
    await me.say_and_wait(
      '초콜릿으로 답례할까도 생각해 봤지만…… 넌 단 걸 별로 안 좋아하니까. 그렇다고 다른 걸 주자니, 오늘과는 영 안 어울리는 것 같았고……',
    );
    await me.say_and_wait(
      '작년엔 그런 이유와 바쁜 레이스 일정까지 겹치는 바람에. 답례하는 걸 까먹고 미뤄뒀었지……',
    );
    await me.say_and_wait([
      '그래서 올해는, 미리 선물을 준비해 뒀어—— 그럼, 해피 발렌타인, ',
      acute.get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      '그렇게 말하며, ',
      me.get_colored_name(),
      '은(는) 커튼 뒤에 숨겨두었던 꽃다발 하나를 꺼내 ',
      acute.get_colored_name(),
      '에게 건넸다.',
    ]);
    await acute.say_and_wait('아……');
    await me.say_and_wait([
      '아하하…… 이건 ',
      sys_get_colored_callname(0, 49),
      '가 제안해 준 거야. 발렌타인데이와는 조금 안 어울릴지도 모르지만…… 어때, 맘에 들어?',
    ]);
    await acute.say_and_wait('……');
    era.printButton(`「……${acute.name}?」`, 1);
    await era.input();
    await acute.say_and_wait('……');
    await era.printAndWait([
      '어찌 된 일인지, 꽃다발을 든 채로 ',
      acute.get_colored_name(),
      '는 그 자리에 굳어버렸다.',
    ]);
    await era.printAndWait(
      '아무리 말을 걸어도 별다른 반응이 없어, 그대로 30초 정도 기다리자——',
    );
    await acute.say_and_wait('우…… 와…… 아…… 아아아아아!!!');
    await acute.say_and_wait('큰일, 큰일 났구나아!!!!');
    await era.printAndWait([
      acute.get_colored_name(),
      '는 꽃다발을 손에 든 채, 그대로 휴게실을 뛰쳐나갔다.',
    ]);
    await era.printAndWait('……물론, 목욕 가운 차림으로 말이다.');
    era.drawLine({ content: '교사' });
    const a_call_j = sys_get_colored_callname(100, 48);
    await acute.say_and_wait([a_call_j, ', ', a_call_j, ', 큰일 났단다아!~']);
    await jordan.say_and_wait([
      '왜 그래, ',
      acute.get_colored_name(),
      '—— 으악, 왜 목욕 가운을 입고 있어!?',
    ]);
    era.drawLine({ content: '안뜰' });
    const a_call_f = sys_get_colored_callname(100, 49);
    await acute.say_and_wait([a_call_f, ', ', a_call_f, ', 큰일 났단다아!~']);
    await festa.say_and_wait([
      '목욕 가운?…… 이 꽃다발은, 내가 ',
      sys_get_colored_callname(49, 0),
      '한테 ',
      acute.get_colored_name(),
      '에게 줄 발렌타인 선물로 추천했던…… 그렇군. 전설의 파이터도 곧 은퇴할 때가 된 모양이네——',
    ]);
    era.drawLine({ content: '트레센 학원 · 복도' });
    const a_call_d = sys_get_colored_callname(100, 19);
    await acute.say_and_wait([a_call_d, ', ', a_call_d, ', 큰일 났단다아!~']);
    await digital.say_and_wait([
      '에에엣!? 목욕 가운 차림으로 복도를 뛰어다니는 ',
      acute.get_colored_name(),
      '!? 이, 이것도 엄청난 존귀함! 하지만 이 상황은 설마!?',
    ]);
    era.drawLine({ content: '옥상' });
    await era.printAndWait('망가진 몸을 이끌고, 마침내 옥상에서 목욕 가운의 아름다운 뒷모습을 따라잡았다.');
    await acute.say_and_wait([
      callname[0],
      '……',
      callname,
      ', 내… 내가… 어떻게 해야 할까? 어떻게 해야 할지 모르겠구나.',
    ]);
    era.printButton('「어쨌든…… 일단 휴게실로 돌아가서 옷부터 갈아입을까?」', 1);
    await era.input();
    await acute.say_and_wait(['에헤헤…… 미안하구나, ', callname, '.']);
    await acute.say_and_wait(
      '그저 말이지, 이렇게 예쁜 꽃을 받고 나니, 내 마음까지 따스해지는 기분이 들어서…… 아, 아, 아아아……',
    );
    era.printButton('「그렇다고 해서 목욕 가운 차림으로 학원을 질주할 이유는 못 되는데……」', 1);
    await era.input();
    await era.printAndWait('……휴, 그래도 나쁘진 않다.');
    await era.printAndWait([
      '어쨌든 ',
      acute.sex,
      '의 저 모습을 보아하니, ',
      me.get_colored_name(),
      '이(가) 준 선물을 싫어하는 건 아닌 것 같고, 그저 평소에 받지 못하던 선물을 받아서 작게나마 충격을 받은 모양이다.',
    ]);
    await era.printAndWait([
      '워낙 소박한 인상이라서 그런지, ',
      acute.sex,
      '에게 꽃을 선물하는 사람이 별로 없었던 걸까?',
    ]);
    await acute.say_and_wait(['고맙단다…… ', callname, '.']);
    await acute.say_and_wait(
      '내가 이렇게 예쁜 선물을 받게 될 줄은 몰랐어. 소중히 간직하마.',
    );
    await acute.say_and_wait(
      '음… 그럼 이에 대한 답례를…… 으음, 이건 좀 아닌 것 같구나. 도리상 선물을 받고 감사를 표하는 건 맞지만, 이번에는 선물을 주고 나서 다시 답례를 받은 상황이니까 말이지~',
    );
    await acute.say_and_wait(['으음…… 어쨌든, 정말 고맙구나, ', callname, '.']);
    era.printButton('「아하하…… 맘에 들었다니 다행이네.」', 1);
    await era.input();
    await era.printAndWait([
      '옥상 위, 목욕 가운 차림의 ',
      acute.get_colored_name(),
      '와 정수리에서 적갈색 액체를 뚝뚝 흘리는 ',
      me.get_colored_name(),
      '이(가) 서로 감사를 표하고 있다.',
    ]);
    await era.printAndWait([
      '의심할 여지 없이, 이건 아마도 ',
      me.get_colored_name(),
      '의 인생에서 가장 인상 깊은 발렌타인데이가 될 것이다.',
    ]);
    await era.printAndWait([
      '왠지 ',
      acute.get_colored_name(),
      '와 함께 있으면, 이런 예상치 못한 서프라이즈를 자주 겪게 되는 것 같다——',
    ]);
    era.drawLine({ content: '지하 취조실' });
    await tokino.say_and_wait('최근 학생들로부터 제보가 들어왔습니다.');
    await tokino.say_and_wait([
      acute.get_colored_name(),
      '의 트레이너가 꽃다발을 들고 ',
      acute.get_colored_name(),
      '에게 청혼했으며, 이어서 ',
      acute.get_colored_name(),
      '에게 목욕 가운 차림으로 교내를 질주하며 사랑을 표명할 것을 강요했다고요.',
    ]);
    await tokino.say_and_wait(['사실입니까, ', me.actual_name, ' 트레이너?']);
    era.printButton('「………………」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '의 육신은…… 이미 새하얗게 불타오른 재가 되어버렸다——',
    ]);
  };
};