const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers.after_begin = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    event_object,
  ) => {
    await print_event_name('우라라와의 만남', urara);
    await in_urara.say_as_unknown_and_wait('이야기는 여기서부터 정식으로 시작됩니다.');
    await in_urara.say_as_unknown_and_wait(
      '이것은 당신이 우리와 함께 써 내려갈, 당신과 우리의 이야기입니다.',
    );
    era.drawLine();
    await era.printAndWait([
      '복장을 정돈하고 들뜬 마음을 억누르며, ',
      me.get_colored_name(),
      '은(는) 아무렇지 않은 척 훈련장으로 향했다.',
    ]);
    await era.printAndWait('새로운 담당과의 접촉 초기에는 반드시 신중해야 한다.');
    await era.printAndWait(
      '얼핏 들으면 유난 떠는 것처럼 보일지 모르나, 이는 트레이너들 사이에서 입에서 입으로 전해지는 중요한 경험담이다.',
    );
    await era.printAndWait(
      '교과서에 적혀 있지는 않지만, 맞선과 비슷하게 첫 만남에서 긍정적인 인상을 남기는 것은 매우 중요한 법이다.',
    );
    await era.printAndWait(
      '만약 외부인이 「학생과의 관계」를 「맞선」에 비유하는 것이 너무 위험하지 않느냐고 묻는다면, 트레이너들은 하나같이 이렇게 대답할 것이다.',
    );
    await era.printAndWait([
      '요동치는 사춘기의 본격화 ',
      urara.get_uma_sex_title(),
      '와 함께 지내는 것은, 사회적 의미로 마치 외줄 타기처럼 위험한 일이라고.',
    ]);
    await era.printAndWait([
      '하지만 훈련장에 들어서는 여유로운 발걸음만큼이나, 이번에 ',
      me.get_colored_name(),
      '은(는) 자신이 걱정할 것이 없다고 생각했다.',
    ]);
    await era.printAndWait([
      '비록 나중에 가서야 문제점을 깨닫고 후회하게 될지라도, 그것은 어디까지나 뒷날의 이야기일 뿐이다.',
    ]);
    await era.printAndWait([
      '「천진난만한 꼬마 ',
      urara.get_uma_sex_title(),
      '가 순수한 꿈을 쫓는다」는 이토록 가슴 벅찬 구성에 대체 무슨 위험이 있겠는가?',
    ]);
    await era.printAndWait([
      '게다가 ',
      urara.get_colored_name(),
      '는 「1착을 따내는 것」에 대한 열망도 대단하니, ',
      urara.sex,
      '는 분명 의욕 넘치게 훈련에 매진할 것이 틀림없다!',
    ]);
    await era.printAndWait([
      '「',
      urara.get_colored_actual_name(),
      '」라는 이름의 작은 ',
      urara.get_uma_sex_title(),
      '가 소원을 이루도록 돕고 싶다는 열정을 품고, ',
      me.get_colored_name(),
      '은(는) 약속 장소에 도착했다.',
    ]);
    await era.printAndWait('생각은 좋았으나……');
    await urara.say_and_wait(['아, ', callname, '! 오늘부터 잘 부탁해!']);
    await era.printAndWait([
      '조금 늦었지만 활기찬 모습으로, ',
      urara.get_colored_name(),
      '는 귀여운 미소와 함께 손을 흔들며 ',
      me.get_colored_name(),
      '의 곁에 멈춰 섰다.',
    ]);

    era.printButton('「오늘부터 함께 노력해 보자!」', 1);
    await era.input();

    await urara.say_and_wait('응! 우라라, 갑니다~!');
    await era.printAndWait([
      '준비 운동을 마치고 ',
      urara.get_colored_name(),
      '는 오늘의 훈련을 시작했다. 하지만……',
    ]);
    await urara.say_and_wait([callname, '! 여기 정말 예쁜 나비가 있어!']);
    await me.say_and_wait('아, 정말이네…… 응?');
    await urara.say_and_wait([callname, '! 저기 구름 모양이 꼭 무언가랑 닮지 않았어?']);
    await me.say_and_wait('오! 잠깐만, 그게 아니라……');
    await urara.say_and_wait([callname, '! 저기 물속에 엄청나게 큰 물고기가 있어!']);
    await me.say_and_wait('잠깐, 이게 대체 뭐 하는 거야?');
    await era.printAndWait([
      urara.get_colored_name(),
      '에게 휘말려버린 ',
      me.get_colored_name(),
      '은(는) 물속에 비친 자신의 얼굴을 몇 초간 멍하니 바라보다가 겨우 정신을 차렸다.',
    ]);
    await era.printAndWait(
      '지금이…… 몇 바퀴째더라? 아니, 그보다 왜 지금 둘이 강가에 와 있는 거지?',
    );
    await era.printAndWait(
      '처음에는 분명 트레센의 훈련장에 있지 않았던가? 대체 무슨 일이…… 기억이 안 나?!',
    );
    await era.printAndWait([
      '어느새 서쪽으로 기운 해를 망연자실하게 바라보다가, 물속으로 뛰어들어 물고기를 잡는 ',
      urara.get_colored_name(),
      '를 보고 ',
      me.get_colored_name(),
      '은(는) 체념한 듯 한숨을 내쉬었다.',
    ]);
    await era.printAndWait([
      '결국 하루 종일 ',
      urara.get_colored_name(),
      '를 뒤쫓던 ',
      me.get_colored_name(),
      '은(는) 사고를 정지하고 담당과의 놀이에 동참하기로 했다.',
    ]);
    await era.printAndWait([
      '어차피 훈련은 물 건너갔으니, 차라리 즐겁게 노는 게 낫겠다고 ',
      me.get_colored_name(),
      '은(는) 운명을 받아들였다.',
    ]);

    await era.printAndWait(
      '장난을 치며 하루라는 「황금 같은 시간」을 허비한 트레이너와 담당은 나란히 풀밭 위에 드러누웠다.',
    );
    await urara.say_and_wait([
      '음…… 나 뭔가 중요한 걸 잊어버린 것 같아! 미안해, ',
      callname,
      '!',
    ]);
    await era.printAndWait([
      '풀밭에서 일어나 앉은 ',
      urara.get_colored_name(),
      '는 뒤늦게 무언가를 떠올린 듯했으나, 꼬마 ',
      urara.get_uma_sex_title(),
      '의 둔한 반응에 ',
      me.get_colored_name(),
      '은(는) 그저 쓴웃음을 지을 뿐이었다.',
    ]);
    await era.printAndWait(
      '본래 서두를 것까지는 없었다. 게다가 정식으로 만난 첫날이니, 서로를 깊이 알아가는 단계라고 생각하면 그만이었다.',
    );
    await era.printAndWait('하지만, 해야 할 일은 챙겨야 하는 법이다.');
    await era.printAndWait([
      urara.get_colored_name(),
      '와 함께 노을진 풀밭에 앉아, ',
      me.get_colored_name(),
      '은(는) 붉은 노을을 바라보는 꼬마 ',
      urara.get_uma_sex_title(),
      '에게 물었다.',
    ]);

    era.printButton('「우라라, 네가 1등을 하고 싶은 근본적인 이유는 뭐야?」', 1);
    await era.input();

    await era.printAndWait([
      urara.get_colored_name(),
      '는 말만 앞세우는 ',
      urara.get_child_sex_title(),
      '가 아니며, ',
      urara.sex,
      '가 하는 모든 행동은 진심에서 우러나온 것이었다.',
    ]);
    await era.printAndWait([
      '재능이 부족한 것은 이해할 수 있고, 달리기에 대한 갈망도 분명해 보였으나, 지금의 ',
      urara.sex,
      '에게서는 「승리」에 대한 집착이 잘 보이지 않았다.',
    ]);
    await era.printAndWait([
      '일반적으로 1착이 ',
      urara.get_uma_sex_title(),
      '의 전부는 아니라고들 하지만, 「승리」를 선택한 ',
      urara.get_uma_sex_title(),
      '들은 보통 1등에 대해 강한 집착을 보이기 마련이다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      urara.get_colored_name(),
      '에게서는 그런 면이 보이지 않았다. 아니, 어쩌면 ',
      urara.sex,
      '의 마음속에는 1등보다 더 중요한 것이 있는지도 모른다.',
    ]);
    await era.printAndWait([
      '그렇다면 그 더 중요한 것이란 무엇일까? ',
      urara.get_colored_name(),
      '가 스스로에 대해 얼마나 알고 있을지는 불분명했으나, ',
      me.get_colored_name(),
      '은(는) 일단 부딪혀보는 심정으로 직접 질문을 던졌다.',
    ]);
    era.printButton('「우라라, 너는 1등이 싫어?」', 1);
    await era.input();
    await era.printAndWait([
      '어른의 질문에 곧장 대답하는 대신, 꼬마 ',
      urara.get_uma_sex_title(),
      '는 ',
      me.get_colored_name(),
      '에게 다른 질문을 되돌려주었다.',
    ]);
    await urara.say_and_wait([callname, ', 지금 즐거워?']);
    await era.printAndWait([
      '응? 함께 놀았으니 확실히 즐겁기는 하지만, 이건……? ',
      me.get_colored_name(),
      '의 대답을 기다리지 않고, 꼬마 ',
      urara.get_uma_sex_title(),
      '는 계속해서 웃으며 말을 이었다.',
    ]);
    await urara.say_and_wait(
      '내가 약하다는 건 알지만, 그래도 달리고 싶어! 그렇다면 역시 1착을 목표로 해야지!',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 곁에 살짝 기대어 ',
      urara.get_colored_name(),
      '는 밝게 웃었고, ',
      urara.get_teen_sex_title(),
      '의 벚꽃 같은 눈동자에는 부드러운 노을이 비쳤다.',
    ]);
    await urara.say_and_wait(
      '1등을 많이 하고 싶기는 하지만, 소중한 걸 잊어버린다면 1등을 아무리 많이 해도 의미가 없잖아!',
    );

    era.printButton('「달리는 이유를 말하는 거야?」', 1);
    await era.input();

    await urara.say_and_wait('응! 왜냐하면 내 달리기로 모두에게 미소를 전해주고 싶거든!');
    await urara.say_and_wait(
      '하지만 우라라가 일부러 훈련을 빼먹으려던 건 아니야! 그냥 딴생각을 하다 보면 훈련 중이라는 걸 깜빡해서……',
    );
    await era.printAndWait([
      '과연, 「',
      urara.get_colored_actual_name(),
      '」라는 이름의 ',
      urara.get_uma_sex_title(),
      '는 생각보다 조금 까다로운 타입이었으나, 다행히 ',
      urara.sex,
      '는 자신이 무엇을 원하는지 명확히 알고 있었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 1착에 집착하지 않는 것은 레이스 승리 그 자체에 목적이 있지 않기 때문이었다.',
    ]);
    await era.printAndWait([
      '승리를 갈구하지 않는 것은 아니나, ',
      urara.get_colored_name(),
      '에게 우승은 달리는 행위 그 자체보다 중요하지 않았다. 그리고 이것이 ',
      urara.sex,
      '의 훈련이 힘든 주요 원인 중 하나였다.',
    ]);
    await era.printAndWait([
      '달리기는 즐거워야 하는 것이기에, 특별한 재능이 없더라도 ',
      urara.sex,
      '는 안심하고 미소 지을 수 있는 것이다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '는 대다수의 우마무스메처럼 「자신을 증명」하거나 「흐름에 맡기기」 위해 달리는 것이 아니라, 경기장 밖의 모두에게 더 많은 감정을 불어넣어 주고 싶어 했다.',
    ]);
    await era.printAndWait(
      '예를 들면 즐거움이라거나 희망, 혹은 고민에 빠진 낯선 이와의 첫 만남에서 느껴지는 설렘 같은 것들 말이다.',
    );
    await era.printAndWait(
      '하지만 외부로만 향하는 감정 상태는 매우 「위험」했다. 트레이너로서 담당을 승리로 이끌어야 할 책무조차 잠시 제쳐두어야 할 정도로 말이다.',
    );
    await era.printAndWait(
      '생각은 좋지만, 마음가짐이 충분히 「강인」하지 않다면 언젠가 타인은 물론 스스로의 변화에 의해서도 의도치 않게 상처 입게 될 날이 올 것이기 때문이다.',
    );
    await era.printAndWait([
      '지금의 ',
      urara.get_colored_name(),
      '의 상태로는 온 힘을 다하지 않으면 순위권에 들 수 없고, 그렇게 되면 계속해서 달려 나가기가 어렵다.',
    ]);
    await era.printAndWait([
      '부족한 집중력과 금방 식어버리는 열정도 문제지만, 다른 한편으로는 ',
      urara.get_colored_name(),
      '에게 온전한 경쟁 의식을 심어줄 필요가 있었다.',
    ]);
    await era.printAndWait('그렇다면……');

    era.printButton(
      '「우라라가 무슨 생각을 하는지 알았어. 우라라에게 딱 맞는 훈련 계획을 짜볼게.」',
      1,
    );
    await era.input();

    await era.printAndWait('역시 확실히 하려면 처음부터 대책을 세우는 편이 낫겠다.');
    await urara.say_and_wait('만화 주인공의 전용 필살기 같은 거 말이야?');

    era.printButton('「맞아, 만화 주인공의 전용 필살기 같은 거!」', 1);
    await era.input();

    await urara.say_and_wait([
      '응! 우라라도 기대하고 있을게! ',
      callname,
      ' 말 잘 들을게!',
    ]);
    await era.printAndWait([
      callname,
      '가 진지하게 엄지를 치켜세우자, ',
      urara.get_colored_name(),
      ' 또한 진심 어린 미소로 화답했다.',
    ]);
    await era.printAndWait([
      '참 좋구나, 이런 격의 없는 순수함이라니. 하지만 ',
      urara.sex,
      '가 이렇게 만난 지 얼마 안 된 사람을 전적으로 믿어도 괜찮은 걸까?',
    ]);
    await era.printAndWait([
      '아무래도 앞으로 ',
      urara.sex,
      '를 최대한 잘 보살피는 것도 일과 중 하나가 될 것 같다.',
    ]);
    await era.printAndWait([
      '계획 실행에 있어서는 더 이상 ',
      urara.get_colored_name(),
      '에게 휘둘리지만 않으면 문제없을 터인데, 앞으로 순조롭게 풀리면 좋으려만——?',
    ]);
    await era.printAndWait([
      '생각의 흐름을 따라 시선을 옆으로 돌리자, 젖은 트레이닝복 상의를 벗어던진 꼬마 ',
      urara.get_uma_sex_title(),
      '가 안심한 듯 ',
      me.get_colored_name(),
      '의 곁에 기대어 있었다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '의 물놀이로 젖어 반투명해진 셔츠 아래로, 작지만 건강한 육질이 느껴지는 몸이 고스란히 비쳐 보였다……',
    ]);
    await era.printAndWait([
      '하지만 꼬마 ',
      urara.get_uma_sex_title(),
      '의 온기를 느낄 겨를도 없이, ',
      me.get_colored_name(),
      '은(는) 무언가 상황이 잘못 돌아가고 있음을 공포와 함께 깨달았다.',
    ]);

    era.printButton('「우라라, 너…… 그거는?」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '의 떨리는 목소리에 ',
      urara.get_colored_name(),
      '는 의아한 듯 옷 아래로 살결이 비치는 분홍빛 가슴 쪽을 내려다보았다.',
    ]);
    await era.printAndWait([
      '잠시 고개를 들고 생각하던 꼬마 ',
      urara.get_uma_sex_title(),
      '는 마침내 무언가 생각난 듯 무릎을 탁 치더니, 말을 잃은 ',
      me.get_colored_name(),
      '에게 조금 수줍은 미소를 지어 보였다.',
    ]);
    await urara.say_and_wait([
      '아! 미안해, ',
      callname,
      '! 오늘 나올 때 속옷 입는 걸 깜빡했어!',
    ]);
    await era.printAndWait('까, 깜빡했다고? 그걸 또 그렇게 아무렇지 않게 말해?!');
    await urara.say_and_wait([
      '둘 다 잊어버린 것 같아, 에헤헤…… 아침에 킹짱이 칠칠치 못하게 굴지 말라고 주의까지 줬는데, 미안해!',
    ]);
    await era.printAndWait([
      '이토록 속 편한 꼬마 ',
      urara.get_uma_sex_title(),
      '의 모습에 ',
      me.get_colored_name(),
      '은(는) 완전히 할 말을 잃고 말았다.',
    ]);
    await era.printAndWait([
      '점점 더 밀착해오는 꼬마 ',
      urara.get_uma_sex_title(),
      '의 몸과 의아함이 섞인 웃는 얼굴을 애써 외면하며, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '에 대한 걱정이 가득 담긴 눈으로 노을을 근심스럽게 바라보았다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 함께할 앞날은, 여러 의미로 갈 길이 멀어 보였다……',
    ]);

    if (era.get('cflag:61:모집상태') === recruit_flags.yes) {
      await era.printAndWait([
        '그러고 보니 ',
        urara.get_colored_name(),
        '의 룸메이트로서 「엄마」 역할까지 수행해야 하는 ',
        sys_get_colored_callname(0, 61),
        '도 참 고생이 많겠구나……',
      ]);
      await era.printAndWait([
        '하지만 어쩌면 ',
        urara.sex,
        '에게서 ',
        urara.get_colored_name(),
        '의 훈련에 도움이 될 만한 정보를 얻을 수 있을지도 모르겠다.',
      ]);
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '어찌 되었든, 꼬마 ',
      urara.get_uma_sex_title(),
      '와 함께 나아갈 시간은 드디어 움직이기 시작했습니다.',
    ]);
    await in_urara.say_as_unknown_and_wait('……');

    await in_urara.say_as_unknown_and_wait(
      '그럼, 당신은 『우라라』와 정식으로 지내기 시작한 느낌이 어떠신가요?',
    );
    era.printButton(
      `「${urara.sex}에게 도박을 걸어볼 가치는 충분해. 이건 내가 ${urara.sex}에게 보답하고 싶은 마음이기도 하고.」（호감도+20）`,
      1,
    );
    era.printButton(
      '「아직 잘 모르겠지만, 무방비한 소동물 같은 느낌이 의외로 귀여워.」（애정도+10）',
      2,
    );
    const ret = await era.input();

    await in_urara.say_as_unknown_and_wait(
      '그렇군요, 알겠습니다. 제가 드릴 말씀은 아닐지도 모르지만, 저를 믿어주세요……',
    );
    await in_urara.say_as_unknown_and_wait([
      '시작이 반이라는 말도 있지요. 부디 앞으로도 ',
      urara.sex,
      '에게 인내심과 믿음을 잃지 말아 주세요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '설령 화려하지 않더라도 성실하게 자라난다면, 길가의 작은 꽃이라도 봄에는 꽃을 피울 수 있을 테니까요.',
    );
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(52, undefined, 120, undefined, true) ||
      wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      wait_flag;
    add_event(event_hooks.week_start, event_object);
    wait_flag && (await era.waitAnyKey());
  };
};