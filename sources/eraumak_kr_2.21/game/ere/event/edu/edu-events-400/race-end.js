const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams)>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(0);
    if (era.get('cflag:400:육성턴수합산') === 23) {
      await print_event_name('완벽한 시작', ss);
      await era.printAndWait([
        ss.get_colored_name(),
        '는 아무런 이변 없이 데뷔전 승리를 거머쥐었고, ',
      ]);
      await era.printAndWait([
        ss.sex,
        '가 결승선을 통과하는 순간, ',
        me.get_colored_name(),
        '은(는) 마침내 안도했지만, 이내 승리한 ',
        ss.sex,
        '는 트레이너인 ',
        me.get_colored_name(),
        ' 앞으로 곧장 다가왔다.',
      ]);
      await ss.say_and_wait(
        '말했잖아, 승리를 가져와서 너와 함께 나누겠다고. 이제 우리는 첫걸음을 내디딘 거야.',
      );
      await era.printAndWait([
        ss.sex,
        '는 ',
        me.get_colored_name(),
        '의 손을 꽉 잡았고, 그 완벽한 뺨에는 부드러운 미소가 번졌다.',
      ]);
      await ss.say_and_wait([callname, ', 우리의 목표를 향해 함께 발걸음을 내딛자……']);
      await era.printAndWait([
        '관중들의 환호와 찬사가 ',
        me.get_couple_title(),
        ' 사이의 배경음이 되었고, ',
        ss.sex,
        '의 레이스 전 다소 불안해 보이던 기색은 이제 온데간데없이 기쁨만이 남아있었다.',
      ]);
      await era.printAndWait([
        '그제야 ',
        me.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 몸이 온통 땀투성이가 된 것을 알아챘다. 심지어 체육복까지 땀에 젖어 완벽한 몸매의 윤곽이 살짝 드러나 있었다.',
      ]);
      era.printButton(
        '「정말 엄청나게 대단했어…… 하지만 그렇다 해도, 먼저 머리와 몸을 닦아야겠어. 안 그러면 몸에 안 좋으니까.」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '수건이 ',
        ss.sex,
        '의 머리 위에 얹혀졌고, ',
        ss.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '이(가) ',
        ss.sex,
        '의 이마에 맺힌 땀방울을 닦아주는 것을 거부하지 않았다.',
      ]);
      await ss.say_and_wait(
        '이 레이스는 이걸로 끝났어. 복기가 필요하다면 나중에 시간 내서 말해주고, 아니라면 다음 레이스를 대비한 맞춤 훈련과 일상 훈련에 돌입해도 좋을 것 같아.',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '의 얼굴에 머물던 미소는 오래가지 않았다. ',
        ss.sex,
        '는 진지하게 ',
        me.get_colored_name(),
        '을(를) 바라보았고, 눈빛 속에는 진지함과 승부욕이 가득했다.',
      ]);
      await era.printAndWait([
        '그렇게 ',
        ss.get_colored_name(),
        '는 자신의 데뷔전을 마쳤다.',
      ]);
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (extra_flag.attr_change[e] = 5),
      );
      extra_flag.pt_change = 30;
    } else {
      await print_event_name('좋은 시작', ss);
      await ss.say_and_wait(
        '역시나, 지난번엔 약간의 오차가 있었을 뿐이야. 우리 조합은 틀린 선택이 아니었어.',
      );
      await ss.say_and_wait('함께 앞으로 나아가자. 우리가 이겨냈으니까.');
      gacha(Object.values(attr_enum), 2).forEach(
        (e) => (extra_flag.attr_change[e] = 3),
      );
    }
  };

  handlers[race_enum.kent_der] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 10),
    );
    const coffee = get_chara_talk(25);
    await print_event_name('승리의 대무대', ss);
    await ss.say_and_wait(['우리가 이긴 거 맞지? ', callname, '!!!']);
    await era.printAndWait([
      ss.sex,
      '는 평소의 침착함을 완전히 잃고, 어린아이처럼 기뻐하며 흥분한 채로 ',
      me.get_colored_name(),
      '을(를) 껴안았다.',
    ]);
    await ss.say_and_wait('3관의 첫 번째 관문…… 우리 둘이 정말로 따낸 거 맞지?!');
    era.printButton('고개를 끄덕인다', 1);
    await era.input();
    await ss.say_and_wait([
      '다행이야…… 정말 다행이야. 역시 넌 내게 가장 잘 맞는 트레이너',
      get_chara_talk(0).get_adult_sex_title(),
      '이야.',
    ]);
    await ss.say_and_wait([
      '다음엔…… ',
      race_infos[race_enum.prea_sta].get_colored_name(),
      '와 ',
      race_infos[race_enum.belm_sta].get_colored_name(),
      '가 남았어. 내 몸 상태는 신경 쓰지 말고 계속 훈련량을 늘려줘. 그래야만 더 큰 우위를 점할 수 있으니까.',
    ]);
    await coffee.say_and_wait('축하해…… 경기장에서의 모습, 정말 대단했어.');
    await ss.say_and_wait('응……');
    await era.printAndWait([
      '그리고 ',
      ss.get_colored_name(),
      '가 나간 후, ',
      coffee.get_colored_name(),
      '가 이어서 말했다.',
    ]);
    await coffee.say_and_wait([
      ss.sex,
      '를 부탁할게요. 겉보기완 다르게 부드러운 구석이 있으니까, 기분 좀 잘 챙겨주세요.',
    ]);
    await era.printAndWait([
      '이어진 인터뷰에서 ',
      ss.sex,
      '는 ',
      me.get_colored_name(),
      '에 대한 칭찬을 전혀 아끼지 않았다. ',
      me.get_colored_name(),
      '은(는) ',
      ss.sex,
      '가 그저 기뻐할 뿐만 아니라 안도하고 있다는 것을 알 수 있었다.',
    ]);
  };

  handlers[race_enum.prea_sta] = async (ss, me, callname, extra_flag) => {
    if (
      !check_aim_race(RaceHistory.get(400).get(), race_enum.kent_der, 1, 1) ||
      extra_flag.rank !== 1
    ) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach(
      (e) => (extra_flag.attr_change[e] = 10),
    );
    extra_flag.relation_change = 30;
    await print_event_name('두 번째 대승', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      '가 승부복을 입고 결승선에 서서 멍하니 하늘을 바라보다가 손을 번쩍 치켜든 모습은 경기장 전체의 환호를 자아냈다.',
    ]);
    await era.printAndWait([
      '새로운 2관왕, 거의 막을 수 없는 승자. 모든 이들이 ',
      ss.sex,
      '에게 축복을 보내며, 새로운 3관왕의 탄생을 기원하고 있었다.',
    ]);
    await era.printAndWait([
      '그 모습을 본 ',
      me.get_colored_name(),
      '은(는) 한발 먼저 휴게실로 돌아가, ',
      ss.get_colored_name(),
      '에게 필요할 수건, 따뜻한 물, 과일과 기타 잡동사니들을 준비했다.',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      '가 들어왔을 때 ',
      me.get_colored_name(),
      '은(는) ',
      ss.sex,
      '의 땀을 먼저 닦으려 했으나, ',
      ss.sex,
      '는 아무 말 없이 ',
      me.get_colored_name(),
      '의 품에 안겨왔다.',
    ]);
    await ss.say_and_wait([
      callname,
      '…… 나 꿈꾸는 거 아니지? 우리 초기 목표까지, 이제 딱 레이스 하나 남은 거 맞지?',
    ]);
    await era.printAndWait([
      ss.sex,
      '의 목소리는 무척 격앙되어 있었고, ',
      me.get_colored_name(),
      '은(는) ',
      ss.sex,
      '의 온기를 느끼며 등을 토닥여주었다.',
    ]);
    era.printButton(
      `「그래, 우리 첫 목표까지 이제 마지막 한 걸음 남았어. 축하해, ${ss.name}.」`,
      1,
    );
    await era.input();
    await ss.say_and_wait(
      '정말…… 정말 고마워. 트레이너로서 내 훈련과 생활을 항상 신경 써줬잖아. 이번 승리는 너와 내가 함께 이뤄낸 거야. 이게 내가 네게 주는 대답이야!',
    );
    await era.printAndWait([
      ss.sex,
      '가 고개를 들자, 핏빛 눈동자 속에 빛나는 자신감은 ', //원문은 금빛이라 잘못써짐
      ss.sex,
      '를 마치 타고난 주인공처럼 보이게 했다.',
    ]);
    await ss.say_and_wait([
      '그러니까 ',
      callname,
      ', 앞으로도 잘 부탁할게. ',
      race_infos[race_enum.belm_sta].get_colored_name(),
      ', 3관의 마지막 무대 말이야.',
    ]);
    await era.printAndWait([
      '오늘 축하연에서 ',
      ss.get_colored_name(),
      '는 무척 기뻐 보였고, 말투도 평소보다 훨씬 부드러워졌다.',
    ]);
  };

  handlers[race_enum.belm_sta] = async (ss, me, callname, extra_flag) => {
    if (
      !check_aim_race(RaceHistory.get(400).get(), race_enum.kent_der, 1, 1) ||
      !check_aim_race(RaceHistory.get(400).get(), race_enum.prea_sta, 1, 1) ||
      extra_flag.rank !== 1
    ) {
      return true;
    }
    extra_flag.attr_change = new Array(5).fill(10);
    extra_flag.motivation_change = 1;
    extra_flag.pt_change = 45;
    await print_event_name('숙원 달성!', ss);
    era.printButton(
      `「축하해, 3관왕 ${ss.name}. 올해 최강의 ${ss.get_uma_sex_title()}가 되었네.」`,
      1,
    );
    await era.input();
    await ss.say_and_wait(
      '네 덕분이야…… 나도 드디어 한숨 돌릴 수 있게 됐어. 솔직히…… 이 고마움을 어떻게 말로 표현해야 할지 모르겠어.',
    );
    await ss.say_and_wait('네가 날 이끌어줘서 내 소원을 이뤘고…… 가장 높은 무대에 설 수 있었어.');
    await era.printAndWait([
      ss.sex,
      '는 ',
      me.get_colored_name(),
      '에게 고개를 숙이고는, 한참 동안 고개를 들려 하지 않았다.',
    ]);
    await ss.say_and_wait(
      '네 도움이 없었다면 난 여기까지 오지 못했을 거야. 그건 내가 제일 잘 알아…… 이제 나도 드디어 안심할 수 있어. 앞으로는.',
    );
    await era.printAndWait([
      ss.sex,
      '가 고개를 들어 ',
      me.get_colored_name(),
      '을(를) 껴안았다. 경기장 밖의 분위기는 당장이라도 폭발할 화산처럼 뜨거웠지만, 경기장 복도 안의 ',
      ss.get_colored_name(),
      '는 그 어느 때보다 부드러웠다.',
    ]);
    await era.printAndWait([
      ss.sex,
      '는 살며시 ',
      me.get_colored_name(),
      '을(를) 껴안고 몸을 밀착시켰고, ',
      me.get_colored_name(),
      '은(는) ',
      ss.sex,
      '의 숨결이 닿는 부드러운 감각마저 느낄 수 있었다.',
    ]);
    await ss.say_and_wait(
      '조금만, 조금만 기대게 해줄래? 네가 늘 묵묵히 해왔던 것처럼, 이번엔 내가 당당하게 네게 기대게 해줘.',
    );
  };

  handlers[race_enum.arim_kin] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    if (era.get('cflag:400:육성턴수합산') < 96) {
      await print_event_name('자신만의 승리', ss);
      await ss.say_and_wait('정말 꿈을 꾸는 것 같네……');
      await era.printAndWait([
        ss.get_colored_name(),
        '가 고개를 들어 ',
        me.get_colored_name(),
        '을(를) 바라보았다. 눈가에 눈물이 맺혀 금방이라도 울음을 터뜨릴 것 같았다.',
      ]);
      await ss.say_and_wait([
        '만약…… ',
        callname,
        ', 네가 없었다면, 오늘 같은 성취는 얻지 못했을 거야. 이건 나만의, 너에게 바치기 위한 승리야……',
      ]);
      await era.printAndWait([
        '그렇게 말하던 ',
        ss.get_colored_name(),
        '는 지금 이곳에 아무도 없다는 것을 눈치챈 듯, 단숨에 ',
        me.get_colored_name(),
        '의 멱살을 잡고 얼굴을 맞댄 채 끌어안았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 몸에서 뿜어져 나오는 열기와 함께 그 뜨거운 감정을 고스란히 느낄 수 있었다.',
      ]);
      await ss.say_and_wait(
        '앞으로도, 『나』와 함께 걸어가 줄래? 우리가 서로의 담당이 되기로 확신했던 그날처럼, 함께 걸어가자.',
      );
      era.printButton('「넌 내 담당인데, 내가 널 어떻게 두고 가겠어?」', 1);
      await era.input();
      await era.printAndWait([
        ss.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '을(를) 보며 어쩔 수 없다는 듯 예쁜 미간을 찌푸렸고, 검은 스타킹에 감싸인 종아리로 ',
        me.get_colored_name(),
        '의 다리를 살짝 비비적거렸다.',
      ]);
      await ss.say_and_wait([
        callname,
        ', 네가 내 뜻을 이해했든 못 했든, 난 내가 하고 싶은 대로 밀어붙일 거야.',
      ]);
      await era.printAndWait([
        '뭔가 재미있는 생각이라도 난 듯, 가볍게 ',
        me.get_colored_name(),
        '을(를) 밀어내고는 돌아서서 뒤를 돌아보았다.',
      ]);
      extra_flag.relation_change = 50;
    } else {
      await print_event_name('칠흑의 군주', ss);
      await ss.say_and_wait(
        '칠흑의 군주라니, 해설가들은 또 무슨 이상한 소리를 하는 거야?',
      );
      era.printButton(
        '사람들이 지어준 별명인가 봐. 네가 이룬 업적은 레이스 역사상 정말 보기 드문 일이니까.',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        '차라리 신인들한테나 관심 더 가지라고 해. 그건 그렇고 ',
        callname,
        ', 나랑 같이 트로피 받으러 갈래?',
      ]);
      await era.printAndWait([
        ss.sex,
        '의 갑작스러운 제안에 ',
        me.get_colored_name(),
        '은(는) 조금 의아해했다.',
      ]);
      await ss.say_and_wait(
        '말 그대로야. 이건 나 혼자만의 승리가 아니라, 너와 내가 함께 뛰어 이뤄낸 거잖아.',
      );
      await ss.say_and_wait(
        '그러니까 나와 함께 찬사를 받으러 가자. 이건 우리의 승리야.',
      );
      await ss.say_and_wait('칠흑의 군주인가 뭔가 하는 건, 네가 싫지 않다면 맘대로 부르라지 뭐.');
      await ss.say_and_wait(
        '아니면 네 생각에 더 좋은 별명이 있다면 말해줘도 돼. 어차피 네가 듣기에 좋으면 그만이니까.',
      );
      await era.printAndWait([
        ss.sex,
        '는 생긋 웃으며 ',
        me.get_colored_name(),
        '의 손을 잡고 휴게실 밖으로 이끌었고, ',
        ss.sex,
        '와 함께 ',
        me.get_couple_title(),
        '의 더 먼 미래를 향해 걸어갔다.',
      ]);
      extra_flag.relation_change = 100;
    }
  };

  handlers[race_enum.tenn_spr] = async (ss, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    const coffee = get_chara_talk(25);
    await print_event_name('빗속의 승자', ss);
    await era.printAndWait([
      '폭우 속에서 흠뻑 젖은 ',
      ss.get_colored_name(),
      '의 표정은 담담했다. 마치 방금 텐노상에서 1착을 거머쥔 모습 같지 않았다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      ss.sex,
      '의 맞은편에서는 산을 뒤흔들 듯한 환호성과 해설의 격정적인 찬사가 파도처럼 ',
      ss.sex,
      '에게 밀려들었다.',
    ]);
    await ss.say_and_wait(['내가 해냈어…… ', callname, ', 나 정말로…… 해낸 거 맞지?']);
    await era.printAndWait([
      '뒤를 돌아보자 ',
      coffee.get_colored_name(),
      '가 박수를 치고 있었고, ',
      ss.sex,
      '는 자신의 혈육을 바라보며 얼굴에 미소를 띠었다.',
    ]);
    await era.printAndWait([
      '자신이 승리하지 못했음에도 불구하고, ',
      coffee.get_colored_name(),
      '는 변함없이 너그럽게 ',
      ss.get_colored_name(),
      '에게 축복을 보냈다.',
    ]);
    await ss.say_and_wait('다행이야…… 정말…… 정말로.');
    await era.printAndWait([
      ss.sex,
      '는 사람들의 시선이 쏠린 가운데 ',
      me.get_colored_name(),
      '의 품에 뛰어들었고, 주변 사람들의 놀라거나 흥분한 시선 따위는 전혀 신경 쓰지 않았다.',
    ]);
    era.printButton(`「사일런스…… 좀 진정이 돼?」`, 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      ss.sex,
      '의 등을 토닥이자, ',
      ss.sex,
      '의 몸에 묻은 물기와 진흙이 ',
      me.get_colored_name(),
      '의 옷까지 적셨다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      ss.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 대답하지 않은 채, 그저 ',
      me.get_colored_name(),
      '의 품에서 거친 숨소리만 낼 뿐이었다.',
    ]);
    await ss.say_and_wait('조금만…… 조금만 더 진정하게 해줘. 이대로 네 품에만 있게 해줘.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 주위의 시선을 신경 쓰지 않고, ',
      ss.get_colored_name(),
      '를 안고 휴게실로 돌아갔다.',
    ]);
    extra_flag.attr_change = [0, 20];
    extra_flag.pt_change = 1;
    extra_flag.relation_change = 50;
  };

  handlers[race_enum.tenn_sho] = async (ss, me, callname, extra_flag) => {
    if (
      era.get('cflag:400:육성턴수합산') < 96 ||
      extra_flag.rank !== 1 ||
      !check_aim_race(RaceHistory.get(400).get(), race_enum.tenn_spr, 2, 1)
    ) {
      return true;
    }
    await print_event_name('춘추의 챔피언', ss);
    await era.printAndWait([
      ss.get_colored_name(),
      '는 덤덤하게 자신의 이마를 닦으며, 휴게실 대형 스크린에서 반복 재생되는 라스트 스퍼트 순간을 지켜보았다.',
    ]);
    await ss.say_and_wait(
      '너와 함께 있을 때면, 승리라는 게 너무나도 당연한 일상이 되어버리네…… 춘추 텐노상 제패라니, 듣기만 해도 정말 대단한 업적이잖아.',
    );
    era.printButton(
      `「하지만 네가 해냈잖아. 이게 바로 ${ss.name}의 능력이고, 절대적으로 강한 ${ss.get_uma_sex_title()}인걸.」`,
      1,
    );
    await era.input();
    await ss.say_and_wait([
      callname,
      ', 그렇게 말하면 나 부끄러워지는데. 이 몇 년 동안 가장 노력한 사람은 바로 ',
      callname,
      '이잖아. 난 하나부터 열까지 다 기억하고 있다고.',
    ]);
    await era.printAndWait([
      ss.get_colored_name(),
      '의 검은 스타킹을 신은 작은 발이 ',
      me.get_colored_name(),
      '의 다리를 감싸 안았고, 온몸을 ',
      me.get_colored_name(),
      '에게 기댔다. 레이스가 끝난 후에도 흥분이 아직 가시지 않은 듯했다.',
    ]);
    era.printButton(
      '그렇다 해도, 우리에겐 마지막이자 가장 큰 레이스가 기다리고 있어. 올해의 마지막 레이스 말이야.',
      1,
    );
    await ss.say_and_wait([
      '우린 당연하다는 듯이 승리를 거머쥘 거야, ',
      callname,
      '. 내가 처음 말했던 것처럼, 우리는 이길 거고, 내가 그 승리를 네게 가져다줄게.',
    ]);
    extra_flag.attr_change = new Array(5).fill(5);
  };
};