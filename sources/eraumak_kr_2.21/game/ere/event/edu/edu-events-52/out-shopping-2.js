const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,{wait_flag:boolean},EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 27] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    flags,
  ) => {
    await print_event_name('후원회!?', urara);
    await in_urara.say_as_unknown_and_wait([
      '정확하지 않을지도 모르지만, 트레이너 ',
      me.get_adult_sex_title(),
      '과(와) 우라라는, 분명 상상조차 못 했던 과거를 넘어왔군요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '참으로 부러운 일이네요. 설령 이야기의 주인공이 여전히 강하다고는 할 수 없어도, 이미 행인들은 저 멀리 뒤로 따돌렸으니까요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하지만 뒤처진 사람들은 어떻게 될까요…… 죄송해요, 지금 할 이야기는 아니네요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '지금은 어렵게 얻어낸 보답을 마음껏 즐기도록 하세요.',
    );
    era.drawLine();
    await era.printAndWait([
      '이것은 상점가 홍보 업무가 끝난 어느 날, ',
      urara.get_colored_name(),
      '와 함께 외출하던 길에 일어난 일이다.',
    ]);
    await urara.say_and_wait([
      '오늘 산책 정말 즐거웠어! ',
      callname,
      ', 이따가 같이 간식 먹으러 가자!',
    ]);

    era.printButton('「이후에 훈련도 열심히 해야 한다?」', 1);
    await era.input();

    await urara.say_and_wait('응——!');
    await era.printAndWait([
      me.get_colored_name(),
      '의 요청에 망설임 없이 대답하는 성장한 꼬마 ',
      urara.get_uma_sex_title(),
      '에게서는, 처음 해보는 훈련에 어쩔 줄 몰라 하던 모습은 이제 찾아볼 수 없었다.',
    ]);
    await era.printAndWait([
      '서로에 대한 이해가 깊어짐에 따라, ',
      me.get_colored_name(),
      '은(는) 꼬마 ',
      urara.get_uma_sex_title(),
      '가 현재 진화의 길을 걷고 있음을 느낄 수 있었다.',
    ]);
    await era.printAndWait([
      '하지만 아무리 변한다 해도, ',
      urara.get_colored_name(),
      '는 역시 모두를 위해 달려가는 ',
      urara.get_colored_name(),
      ' 그대로겠지만 말이다.',
    ]);
    await era.printAndWait([
      '초록불이 켜지자마자 길 건너편으로 달려가 할머니를 부축하는 ',
      urara.get_colored_name(),
      '를 보며, ',
      me.get_colored_name(),
      '은(는) 익숙하다는 듯 ',
      urara.sex,
      '의 열정적인 발걸음을 뒤쫓았다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 함께 다른 이의 급한 용무를 해결해 준 뒤, ',
      me.get_colored_name(),
      '과(와) 꼬마 ',
      urara.get_uma_sex_title(),
      '는 다시 한번 ',
      urara.sex,
      '가 이어준 선의를 건네받았다.',
    ]);
    await era.printAndWait([
      '할머니 「당신이 ',
      urara.sex,
      '의 보호자시구려. 이 아가씨는 정말 기운이 넘치네.」',
    ]);
    await urara.say_and_wait([
      '맞아요! 제 장점은 기운이 넘치는 점이에요! 하지만 ',
      callname,
      '는 제 보호자가 아니라 ',
      callname,
      '인걸요!',
    ]);
    await era.printAndWait([
      '우라라의 말을 들은 할머니는 빙그레 웃으며 ',
      me.get_colored_name(),
      '의 모습을 한 번 보고는, 다시 인자한 시선을 곁에 있는 벚꽃색 소녀에게 돌렸다.',
    ]);
    await era.printAndWait('할머니 「그렇구나…… 네가 트레센 학원 학생이니?」');
    await urara.say_and_wait('네! 제 이름은 하루 우라라예요. 데뷔한 지 벌써 한참 됐어요!');
    await era.printAndWait(
      '할머니 「우라라…… 정말로 우라라였구나. 사람들이 말하던 것과 똑같아서 금방 알아챘단다.」',
    );

    era.printButton('「그렇다면 예전부터 우라라에 대해 들어보신 적이 있으신가요?」', 1);
    await era.input();

    await era.printAndWait(
      '할머니 「그럼, 나도 그 상점가에 자주 가거든. 그곳의 마스코트라면 당연히 잘 알고 있지.」',
    );
    await era.printAndWait(
      '할머니 「요즘 그쪽 가게 사람들이 『우라라 응원회』를 만든다고 하더구나. 상점가의 젊은이들까지 모두 나선 모양이야.」',
    );

    era.printButton('「네? 응원회라고요?」', 1);
    await era.input();

    await era.printAndWait([
      '매우 갑작스럽게, ',
      me.get_colored_name(),
      '은(는) 뜻밖의 장소에서 예상치 못한 정보를 얻었다. 설마 ',
      urara.get_colored_name(),
      '에게도 응원회가 생길 줄이야.',
    ]);
    await urara.say_and_wait([
      '응원회……? ',
      callname,
      ', 잘 모르겠어. 응원회가 뭐 하는 곳이었지?',
    ]);

    era.printButton(
      '「뭐랄까…… 특정 인물의 활동을 지지하기 위해 자금이나 여러 지원을 제공하는 단체라고 할까……」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '그렇구나…… 응! 전혀 모르겠어! 아무튼 다들 나를 더 응원해주고 싶다는 뜻이지?',
    );
    await era.printAndWait([
      '하긴, 억지로 이해하라고 강요할 수는 없지만, ',
      urara.get_colored_name(),
      '는 역시 ',
      urara.get_colored_name(),
      '였다. 하지만 ',
      urara.sex,
      '의 관점에서는 그렇게 이해하는 것도 아주 틀린 건 아닐지도 모른다.',
    ]);
    await era.printAndWait(
      '할머니 「하지만 우라라짱이 한 말이 맞단다. 정말 신기한 아이로구나. 나도 응원회에 가입해야겠어.」',
    );
    await urara.say_and_wait([
      '에? 정말요? 그럼…… ',
      callname,
      ', 그 응원회에 나도 가입할 수 있어?',
    ]);

    in_urara.say_as_unknown([
      '어라? 그건…… 트레이너 ',
      me.get_adult_sex_title(),
      '은 뭐라고 할까요——',
    ]);
    era.printButton(
      '「아니, 내 가입 여부는 둘째치고, 자기가 자기를 응원하는 경우가 어디 있어?」（호감도+10）',
      1,
    );
    era.printButton(
      '「나는 당연히 가입하고 싶지만, 우라라는 스스로를 응원하고 싶은 거야?」（애정도+5）',
      2,
    );
    const ret = await era.input();

    await urara.say_and_wait([
      '응! 맞아…… 어라? 뭔가 이상한가? ',
      callname,
      ', 나 또 비웃음당하는 거야?',
    ]);
    await era.printAndWait([
      '스스로도 뭔가 이상하다는 것을 깨달은 듯, ',
      urara.get_colored_name(),
      '는 조금 쑥스러워하는 기색을 보였다.',
    ]);
    await era.printAndWait(
      '할머니 「후후훗, 참 재미있는 아이야. 왜 다들 네 이야기를 즐겁게 하는지 알겠구나……」',
    );
    await era.printAndWait([
      '노부인의 얼굴에 번지는 미소를 보며, ',
      me.get_colored_name(),
      '은(는) 자신의 담당이 얼마나 사람들에게 사랑받고 있는지에 대해 더 깊이 이해하게 되었다.',
    ]);
    await era.printAndWait([
      { isBr: true },
      '도와주었던 노부인과 작별한 뒤, ',
      me.get_colored_name(),
      '의 곁에 붙어 선 ',
      urara.get_colored_name(),
      '는 아직도 「응원회」에 대해 생각하는 듯했다.',
    ]);
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait(
        '모르는 곳에서도 정말 많은 사람이 나를 좋아해주고 있었구나.',
      );
      await urara.say_and_wait(
        '왠지 조금 책임감이 무겁게 느껴져! 하지만 괜찮아, 내가 더 열심히 하면 되는 거잖아!',
      );
      await urara.say_and_wait([
        '그리고 말이야! 모두의 응원 소리를 들으면 내가 정말 더 빨리 달릴 수 있을 것 같은 기분이 들어! ',
        callname,
        ' 생각은 어때?',
      ]);
      await era.printAndWait([
        '어쩌면 정말 그럴지도 모른다. ',
        urara.get_colored_name(),
        '의 미소를 바라보며, ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_uma_sex_title(),
        '에 관한 어떤 도시전설을 떠올렸다.',
      ]);
    } else {
      await urara.say_and_wait('다들 정말 열정적이네. 하지만 왠지 조금 무겁게 느껴지기도 해!');
      await urara.say_and_wait([
        '그래도 괜찮겠지? ',
        sys_get_colored_callname(52, 61),
        '도 압박감이 있어야 동기부여가 된다고 했으니까!',
      ]);
      await urara.say_and_wait(
        '게다가 다들 나를 응원해주고 싶어 한다면, 나도 더 빨리 달릴 수 있게 되지 않을까?',
      );
      await era.printAndWait([
        '분명 그럴 것이다. ',
        urara.get_colored_name(),
        '를 마주하며, ',
        me.get_colored_name(),
        '은(는) 어떤 도시전설을 떠올렸다.',
      ]);
    }
    era.println();
    await era.printAndWait([
      '「지지자 수가 많을수록 ',
      urara.get_uma_sex_title(),
      '의 힘은 강해진다」, 「타인의 축복을 자신의 힘으로 바꿀 수 있다」.',
    ]);
    await era.printAndWait([
      '무슨 초능력 만화 같은 설정처럼 들리지만, 정령 같은 ',
      urara.get_uma_sex_title(),
      '라면 모든 것이 가능할 것만 같았다.',
    ]);
    await era.printAndWait([
      '적어도 그 점은 ',
      urara.get_colored_name(),
      '에게서 유독 뚜렷하게 나타나고 있었다.',
    ]);

    era.printButton(
      '「그래, 그럼 앞으로도 지금처럼 유지하면서 더 많은 사람에게 우라라가 달리는 모습을 보여주자.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '지금처럼 유지한다는 것, 즉 계속해서 팬 수를 늘려가겠다는 의미였고, ',
      me.get_colored_name(),
      '은(는) 이 부분에 대한 ',
      urara.get_colored_name(),
      '의 능력을 결코 의심하지 않았다.',
    ]);
    await era.printAndWait(
      '구체적으로 레이스에 계속 나갈지, 아니면 훈련으로 중심을 옮길지는 다시 구상해봐야 할 문제였다.',
    );
    await era.printAndWait([
      '하지만 ',
      urara.get_colored_name(),
      '는 언제 어디서든 마지막에는 ',
      urara.sex,
      '의 ',
      callname,
      '를 믿기로 선택하며 격려의 미소를 보냈다.',
    ]);
    await urara.say_and_wait([
      '알았어! 평소처럼 하면 되는 거지! 우라라는 ',
      callname,
      '와 함께 나아갈게!',
    ]);
    if (era.get('love:52') >= 50) {
      era.println();
      await era.printAndWait([
        { isBr: true },
        '하지만 점점 더 많은 사람에게 사랑받는 ',
        urara.get_colored_name(),
        '를 보며, ',
        me.get_colored_name(),
        '의 마음속 깊은 곳에 숨겨진 초조함은 어느새 조금 더 짙어졌다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 타인에게 평등하게 선의를 베푼다. 그렇기에 ',
        urara.sex,
        '를 노리는 누군가가 언젠가 곁에서 뺏어간다 해도 이상하지 않을 것이다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '에게 치유받던 트레이너는, 담당의 성장이 기쁘면서도 한편으로는 ',
        urara.sex,
        '가 나누어 주는 「사랑」에 대해 모순적인 「질투」를 느꼈다.',
      ]);
      await era.printAndWait(
        '이런 생각 자체가 잘못되었다는 것을 알면서도, 부정적인 감정이 그리 강렬하지 않음에도 불구하고, 자꾸만 독점하고 싶다는 욕심이 생겨났다.',
      );
      await era.printAndWait([
        '그 밝은 미소를, 그 작고 부드러운 몸을, 「',
        urara.get_colored_actual_name(),
        '」라는 이름의 봄날의 햇살을 독점하고 싶었다.',
      ]);
      await era.printAndWait([
        '천진난만한 꼬마 ',
        urara.get_uma_sex_title(),
        '는 자신도 모르는 사이에 소중한 사람의 마음속에 「마성」의 씨앗을 심어버린 듯했다……',
      ]);
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '그 후의 나날 동안 응원회가 어떻게 되었는지는 알 수 없었지만, 우라라의 팬 수는 조용히 늘어났습니다.',
    );
    await in_urara.say_as_unknown_and_wait([
      '하지만 그동안의 경험 때문인지, 트레이너 ',
      me.get_adult_sex_title(),
      '은(는) 사실 그리 놀라지 않았죠.',
    ]);
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '조금 과장해서 말하자면, 모든 이가 우라라를 좋아하게 되는 것은 언젠가 당연한 일이 될지도 모르니까요.',
    );
    await in_urara.say_as_unknown_and_wait([
      urara.sex,
      '가 평소처럼 외부의 변화에서 오는 압박에 개의치 않는다면 좋을 텐데…… 뭐, 우라라니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait('참 나, 무슨 신◯ 아카네도 아니고.');
    edu_marks.fan_buff += 5;
    era.println();
    flags.wait_flag =
      get_attr_and_print_in_event(52, new Array(5).fill(3), 20) ||
      flags.wait_flag;
    flags.wait_flag =
      sys_like_chara(52, 0, 10 * (ret === 1), true, 5 * (ret === 2)) ||
      flags.wait_flag;
  };

  handlers[95 + 14] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    flags,
  ) => {
    await print_event_name('팬 대감사제!', urara);
    edu_marks.fan_buff += 5;
    await era.printAndWait([
      '관객석 가장자리에 서서, ',
      me.get_colored_name(),
      '은(는) 평소처럼 경기장 저편에서 꼬마 ',
      urara.get_uma_sex_title(),
      '가 비틀거리며 ',
      me.get_colored_name(),
      '에게 다가오기를 기다렸다.',
    ]);
    await era.printAndWait([
      '오늘은 팬 감사제였고, ',
      urara.get_colored_name(),
      '는 ',
      urara.sex,
      '의 넘치는 활력을 살려 모두의 응원 속에 여러 레이스 종목에 참가하고 있었다.',
    ]);
    await era.printAndWait([
      '의욕은 좋았지만 실전은 마음먹은 대로만 흘러가지 않는 법이다. 마치 ',
      me.get_colored_name(),
      ' 앞에 있는 지쳐 쓰러지기 직전인 이 꼬마 ',
      urara.get_uma_sex_title(),
      '처럼.',
    ]);
    await urara.say_and_wait([
      '헉, 헉…… ',
      callname,
      '! 다 끝났어…… 타이어 끌면서 달리기! 비록 꼴찌였지만——!',
    ]);
    await urara.say_and_wait(
      '아하하~ 훈련 때도 여러 번 해봤지만 역시 큰 타이어는 정말 무겁네!',
    );

    era.printButton('「그래, 고생했어. 다 지켜보고 있었단다.」', 1);
    await era.input();

    await era.printAndWait([
      '사실 타이어 끌기뿐만 아니라, ',
      urara.get_colored_name(),
      '는 이번 감사제 내내 3위 안에 드는 성적을 거의 내지 못했다.',
    ]);
    await era.printAndWait([
      '자신의 팬 감사제에서조차 꼬마 ',
      urara.get_uma_sex_title(),
      '는 여전히 ',
      urara.get_colored_name(),
      ' 특유의 「실전 외에는 이길 수 없다」는 전통적인 징크스를 발휘하고 있었다.',
    ]);
    await urara.say_and_wait(
      '그래도 역시 이기지는 못했지만, 다 같이 달리니까 정말 즐거웠어!',
    );
    await era.printAndWait([
      '얼굴의 땀을 닦으며 ',
      urara.get_colored_name(),
      '는 방금 레이스를 함께한 ',
      urara.get_uma_sex_title(),
      ' 팬들에게 손을 흔들어 준 뒤, 머리띠와 번호표를 훌쩍 벗어 던졌다.',
    ]);
    await era.printAndWait([
      '4월의 날씨가 아직 아주 따뜻한 편은 아니었지만, 방금 달리기를 마친 ',
      urara.get_colored_name(),
      '에게는 여전히 후끈하게 느껴졌다.',
    ]);
    await era.printAndWait([
      '땀에 젖은 분홍빛 긴 머리가 풀어헤쳐지자, 꼬마 ',
      urara.get_uma_sex_title(),
      '의 몸에서는 청춘의 호르몬이 담긴 묘한 향기가 풍겨 나오는 듯했다.',
    ]);
    await era.printAndWait([
      '땀에 젖어 달라붙은 체육복 끝자락이 ',
      urara.get_teen_sex_title(),
      '의 피어나는 육체를 조였고, ',
      urara.sex,
      '의 어린 나이답지 않은 풍만한 곡선을 그대로 그려냈다.',
    ]);
    await era.printAndWait([
      '번호표라는 가림막이 사라지자, 햇빛 아래 땀을 머금어 반투명해진 옷감 너머로 ',
      urara.get_teen_sex_title(),
      '의 조금은 아찔한 실루엣이 희미하게 비쳤다……',
    ]);
    await era.printAndWait([
      '그리하여 주변의 뜨거운 시선과 불순한 동기가 담긴 렌즈들을 의식하며, ',
      me.get_colored_name(),
      '은(는) 묵묵히 겉옷을 벗어 무방비한 꼬마 ',
      urara.get_uma_sex_title(),
      '의 어깨에 걸쳐주었다.',
    ]);

    urara.say(['에? 나 지금 온몸이 땀범벅인데? ', callname, '의 겉옷이 더러워질 거야!']);
    era.printButton(
      '「괜찮아. 그리고 아직 날씨가 그렇게 따뜻하진 않으니까, 우라라가 감기라도 걸리면 큰일이잖아.」（호감도+10）',
      1,
    );
    era.printButton(
      '「그건 곤란해. 내 담당의 몸을 다른 사람이 함부로 보게 할 수는 없으니까.」（애정도+5）',
      2,
    );
    const ret = await era.input();
    if (era.get('love:52') >= 50) {
      await era.printAndWait([
        '무의식중에 유혹을 뿌리는 이 「작은 어른」을 마주하며 요동치는 심장을 억누르며, ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '에게 고개를 저었다.',
      ]);
      await era.printAndWait(
        '팬들이 악의가 없더라도 이 많은 사람 앞에서 전혀 방어기제가 없다니, 나중에 혼자 있을 때는 어쩌려고 그러는지……',
      );
      await urara.say_and_wait([
        '에? 우라라의 몸을 다른 사람이 볼 수도 있어서 ',
        callname,
        '가 초조해진 거야……?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 반응을 본 뒤, 일부러 부드러운 몸을 ',
        me.get_colored_name(),
        '에게 기대며, 꼬마 ',
        urara.get_uma_sex_title(),
        '는 상기된 얼굴로 부끄러운 듯 겉옷 깃에 얼굴을 비벼댔다.',
      ]);
      await urara.say_and_wait([
        '괜찮아, 우라라는 소중한 사람에게만 몸을 보여줄 거니까. 그리고…… 이거 온통 ',
        callname,
        ' 냄새가 나네~',
      ]);
      await era.printAndWait([
        '어린 연인의 귀여운 웃는 얼굴을 보지 않으려 노력하며, ',
        urara.sex,
        '를 당장이라도 안아 올리고 싶은 충동을 간신히 참으며, ',
        me.get_colored_name(),
        '은(는) 경직된 태도로 화제를 다시 레이스로 돌렸다.',
      ]);
    } else {
      await urara.say_and_wait([
        '정말? 헤헤~ 전혀 몰랐어! 하지만 우라라에겐 ',
        callname,
        '가 있으니까 걱정 없어!',
      ]);
      await era.printAndWait([
        '불규칙하게 뛰는 심장을 몰래 진정시키며, ',
        me.get_colored_name(),
        '은(는) 꼬마 ',
        urara.get_uma_sex_title(),
        '의 정수리를 가볍게 쓰다듬었다. 위험했다. 하마터면 ',
        urara.get_colored_name(),
        '를 정말로 좋아하게 될 뻔했다.',
      ]);
      await era.printAndWait([
        '노골적인 시선으로부터 ',
        urara.get_colored_name(),
        '를 보호하는 법은 둘째치고, 트레이너마저 담당의 무방비한 모습에 반해버리면 그것만큼 곤혹스러운 일도 없을 것이다.',
      ]);
      await era.printAndWait([
        '거의 안겨 오다시피 하는 ',
        urara.get_colored_name(),
        '와 거리를 두기 위해 애쓰며, ',
        me.get_colored_name(),
        '과(와) ',
        urara.sex,
        '는 앞으로 남은 일정에 관해 이야기를 나누었다.',
      ]);
    }
    era.printButton(
      '「그러고 보니 다음 레이스가 또 있지 않아? 괜찮겠어? 조금 더 쉬는 게 어때?」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '아무리 ',
      urara.get_colored_name(),
      '의 체력이 좋다 하더라도 연속된 레이스는 부담이 컸기에, ',
      me.get_colored_name(),
      '은(는) ',
      urara.sex,
      '에게 휴식을 권했다.',
    ]);
    await urara.say_and_wait(
      '괜찮아! 모두가 나를 기다리고 있고, 오늘은 팬 감사제니까 우라라가 마음껏 달리게 해줘!',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 걱정을 이해하면서도, 출주 준비를 마친 꼬마 ',
      urara.get_uma_sex_title(),
      '는 웃으며 겉옷을 다시 ',
      me.get_colored_name(),
      '의 손에 쥐여주었다.',
    ]);
    await urara.say_and_wait(
      '그리고 다음 레이스는 『더트 레이스』라구? 많이 더러워지겠지만, 우라라는 절대 안 다쳐!',
    );
    await urara.say_and_wait([
      '더트 레이스니까 우라라가 다 뛰고 나면 ',
      callname,
      ', 절대로 겉옷을 다시 입혀주면 안 돼?',
    ]);
    await era.printAndWait([
      '그 후 다시 코스로 뛰어가는 ',
      urara.get_colored_name(),
      '가 손을 흔들자 ',
      urara.sex,
      '를 응원하는 모두가 환호성을 내질렀다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 레이스에 등장할 때마다 팬들의 분위기는 고조되었다. 다들 ',
      urara.sex,
      '의 몇 번을 져도 포기하지 않는 모습을 진심으로 아끼는 듯했다.',
    ]);
    await era.printAndWait([
      '지금 생각해보면 굳이 강조하지 않아도, ',
      urara.sex,
      '는 아리마 기념 출주 조건인 팬 수를 무난히 채울 수 있을 것 같았다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '역시 걱정되나요? 우라라에 대한 사람들의 애정이 점점 광기로 변해가는데, ',
      urara.sex,
      '는 여전히 아무것도 모르고 있으니까요.',
    ]);
    await era.printAndWait([
      '갑자기 느려진 회색빛 세계 속에서, ',
      me.get_colored_name(),
      '의 곁으로 이제는 「담당의 부모」 목소리처럼 익숙해진 소리가 들려왔다.',
    ]);

    era.printButton(
      '「걱정되지 않는다면 거짓말이겠지만, 원래 진흙탕 싸움인 길이었고 나도 나름대로 자신은 있어.」',
      1,
    );
    await era.input();

    await in_urara.say_as_unknown_and_wait(
      '그렇네요. 지금 진심이 된 우라라를 보니 저까지 쓸데없는 확신이 생길 정도니까요.',
    );
    await in_urara.say_as_unknown_and_wait([
      '게다가 ',
      urara.sex,
      '가 드디어 이길 것 같네요. 비공식 레이스에서 저렇게 진심을 다하는 건 오늘이 처음인가요?',
    ]);
    await era.printAndWait([
      '슬로 모션으로 비치는 진흙탕 경기장에서 이를 악물고 선두를 유지하는 꼬마 ',
      urara.get_uma_sex_title(),
      '를 보며, 냉소적이던 ',
      urara.sex,
      '의 입가에도 살짝 미소가 번졌다.',
    ]);
    await era.printAndWait([
      '하지만 생각에 잠긴 듯 관중석을 둘러보던 ',
      urara.get_teen_sex_title(),
      '의 표정에는 다시 엄숙한 그늘이 드리워졌고, 이내 발길을 돌려 떠나려 했다.',
    ]);

    era.printButton(
      '「오늘따라 왜 이렇게 급해? 조금만 더 보고 가지 그래. 우라라가 이기는 모습은 봐야지.」',
      1,
    );
    await era.input();

    await in_urara.say_as_unknown_and_wait(
      '별로 할 말이 없어서요. 『잘못된 호의는 악의보다 다루기 힘들다』는 사실을 알려주러 왔을 뿐이에요.',
    );
    await era.printAndWait([
      '뒤도 돌아보지 않은 채 무심한 대화를 나누며 ',
      me.get_colored_name(),
      '에게서 멀어지는 벚꽃색 섞인 회색빛 ',
      urara.get_colored_name(),
      '는 이전과 마찬가지로 흔적도 없이 사라졌다.',
    ]);
    await era.printAndWait([
      '멈췄던 시간이 다시 흐르고 튀어 올랐던 진흙이 가라앉을 무렵, ',
      urara.get_colored_name(),
      '가 가장 먼저 결승선을 통과했다.',
    ]);
    await era.printAndWait([
      '경기장의 열띤 해설과 관중들의 함성이 동시에 터져 나왔다. 온 힘을 다한 꼬마 ',
      urara.get_uma_sex_title(),
      '는 다시 한번 회장 분위기를 뜨겁게 달구는 데 성공했다.',
    ]);
    await urara.say_and_wait('여러분—— 앞으로도 열심히 달려가서 계속 이길게요——!');
    await era.printAndWait('관중들 「오오오오오——!!」');
    if (RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin) {
      await era.printAndWait([
        '이대로 팬 수를 계속 늘릴 수 있다면 아리마를 넘어서는 꿈에도 한 발짝 더 다가갈 수 있을 것이다. ',
        urara.get_colored_name(),
        '는 아마 그런 생각으로 진심을 다했을 터였다.',
      ]);
      await era.printAndWait([
        '하지만 떠나기 전 「',
        urara.sex,
        '」가 했던 말대로 관중들의 반응을 살피던 ',
        me.get_colored_name(),
        '은(는) 지금의 분위기가 어딘가 이상하다는 것을 알아챘다.',
      ]);
      await era.printAndWait([
        '일부 관중 「우라라는 역시 귀엽네…… 그러고 보니 ',
        urara.sex,
        '는 이미 아리마 기념에 한 번 나갔었지?」',
      ]);
      await era.printAndWait(
        '일부 관중 「팬 투표제 덕분이긴 했지만, 우라라가 정말 두 번이나 아리마에 나갈 기회가 있을까?」',
      );
      await era.printAndWait(
        '일부 관중 「그러니까 출주하는 것만으로 충분하잖아? 우라라가 즐겁다면 그걸로 된 거 아냐?」',
      );
      await era.printAndWait(
        '일부 관중 「음…… 그렇다면 상점가 응원회에서 뭔가 이벤트를 한다던데, 같이 가볼래?」',
      );
      await era.printAndWait(
        '그러니까 지금조차 여전히 많은 지지자가 「우라라도 승리를 원한다」는 사실을 대수롭지 않게 여기고 있다는 뜻이다.',
      );
    } else {
      await era.printAndWait([
        '이대로 팬 수를 계속 늘릴 수 있다면 아리마 기념 출주라는 꿈에도 한 발짝 더 다가갈 수 있을 것이다. ',
        urara.get_colored_name(),
        '는 아마 그런 생각으로 진심을 다했을 터였다.',
      ]);
      await era.printAndWait([
        '하지만 떠나기 전 「',
        urara.sex,
        '」가 했던 말대로 관중들의 반응을 살피던 ',
        me.get_colored_name(),
        '은(는) 지금의 분위기가 어딘가 이상하다는 것을 알아챘다.',
      ]);
      await era.printAndWait(
        '일부 관중 「우라라 진짜 인기 많네. 역시 귀여워서 그런 거겠지——」',
      );
      await era.printAndWait([
        '일부 관중 「',
        urara.sex,
        '가 아리마 기념에 나가고 싶다고 했던 것 같은데, 이 정도 인기라면 팬 투표제를 잘 활용해서 진짜 나갈 수도 있겠는데.」',
      ]);
      await era.printAndWait([
        '일부 관중 「투표라…… 나도 ',
        urara.sex,
        '에게 한 표 줄 것 같아. 너무 귀엽기도 하고, 나도 ',
        urara.sex,
        '가 아리마에 나가는 걸 보고 싶거든.」',
      ]);
      await era.printAndWait(
        '일부 관중 「나랑 비슷하네. 그럼 상점가 응원회에서 이벤트를 한다는데 같이 가볼래?」',
      );
      await era.printAndWait([
        '왠지 모르게 ',
        me.get_colored_name(),
        '은(는) 지금까지도 많은 지지자가 그저 사랑스럽다는 이유만으로 ',
        urara.get_colored_name(),
        '의 소원을 들어주려 한다는 느낌을 지울 수 없었다.',
      ]);
    }
    await era.printAndWait(
      '무엇보다도, 이 대화를 어디선가 들어본 것만 같은 기분은 대체 뭘까? 모두가 웃는 얼굴임에도 가슴 속에 소용돌이치는 불안감은 계속해서 커져만 갔다……',
    );
    await urara.say_and_wait([
      callname,
      ', ',
      callname,
      '! 다들 나랑 사진 찍고 싶대! 셋 하면 같이 찍기로 했어. 카메라 좀 부탁할게——!',
    ]);
    await era.printAndWait([
      '담당의 부름에 ',
      me.get_colored_name(),
      '의 상념이 끊겼다. 얼굴에 묻은 진흙도 닦지 못한 채 즐거워하는 ',
      urara.get_colored_name(),
      '는 카메라를 들고 흥분한 모습으로 ',
      me.get_colored_name(),
      '에게 달려오고 있었다.',
    ]);

    era.printButton('「아, 그래. 나한테 맡겨!」', 1);
    await era.input();

    await era.printAndWait([
      '마지막으로 관중들의 뒷모습을 한 번 훑어본 뒤, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 고개를 저으며 ',
      urara.get_colored_name(),
      '가 건넨 카메라를 웃으며 받아 들었다——',
    ]);
    await era.printAndWait([
      '어찌 되었든, ',
      urara.get_colored_name(),
      '의 진심 어린 활약 속에 팬 대감사제는 그렇게 성공적으로 막을 내렸다.',
    ]);
    era.set('cflag:52:축제이벤트표시', 0);
    era.println();
    flags.wait_flag = sys_like_chara(
      52,
      0,
      10 * (ret === 1),
      true,
      5 * (ret === 2),
    );
  };
};