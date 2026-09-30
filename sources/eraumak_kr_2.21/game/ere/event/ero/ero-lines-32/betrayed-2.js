/**
 * @file 绿帽癖速子 - Aromatic Hydrocarbon Poisoning（芳香烃中毒）
 * @author 幽白書
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { init_ero, set_palam_to_max } = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const item_desc = require('#/data/desc/items.json');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {TachyonLifeMarks} tachyon_marks */
async function tachyon_betrayed_2(tachyon_marks) {
  const tachyon = get_chara_talk(32);
  const coffee = get_chara_talk(25);
  const me = get_chara_talk(0);
  const c_call_m = sys_get_colored_callname(25, 0);
  const c_call_t = sys_get_colored_callname(25, 32);
  const t_call_c = sys_get_colored_callname(32, 25);
  const t_call_m = sys_get_colored_callname(32, 0);

  tachyon_marks.ntr_mark = 4;
  await print_event_name(
    'Aromatic Hydrocarbon Poisoning（방향족 탄화수소 중독）',
    tachyon,
  );
  await tachyon.print_and_wait(['기분 좋군, 참으로 즐거워.']);
  await tachyon.print_and_wait([
    '오늘의 나 역시, 여전히 ',
    t_call_m,
    '과 ',
    t_call_c,
    '이 정을 나누는 소리를 반찬 삼고 있네.',
  ]);
  await tachyon.print_and_wait([
    '이대로 정욕 속에 빠져드는 것도, 어쩌면 나쁜 일은 아닐지도 모르겠군……',
  ]);
  era.println();

  await tachyon.print_and_wait(['갑자기, 교성이 멎었다.']);
  await tachyon.print_and_wait(['마치 절정 직전에 멈춰버린 듯하여, 초조함이 밀려왔다.']);
  await tachyon.print_and_wait(['어째서 계속하지 않는 거지.']);
  await tachyon.print_and_wait(['어째서 멈춘 건가.']);
  await tachyon.print_and_wait(['교성이 멎자, 방 안은 순식간에 정적에 휩싸였다.']);
  era.println();

  await tachyon.print_and_wait(['뚜벅.']);
  await tachyon.print_and_wait(['뚜벅.']);
  await tachyon.print_and_wait(['뚜벅.']);
  await tachyon.print_and_wait(['그렇기에…… 문밖에서 들려오는 발소리가 유독 선명하게 울렸다.']);
  await tachyon.print_and_wait(['발소리는 문 앞에서 멈춰 섰다.']);
  await tachyon.print_and_wait(['문밖의 인물은 무엇을 하려는 걸까.']);
  await tachyon.print_and_wait(['문을 열려는 건가?']);
  await tachyon.print_and_wait([
    '만약 문이 열린다면, 자신의 이런 모습이, 이 비굴한 몰골이.',
  ]);
  await tachyon.print_and_wait(['보여지고…… 들키고 만다.']);
  await tachyon.print_and_wait(['숨어야 한다, 이러고 있을 때가 아니야. 반드시 어딘가 숨을 곳을 찾아야 해.']);
  await tachyon.print_and_wait(['그런데…… 그런데 어째서 손은 또 멋대로 움직이기 시작하는 건가……']);
  era.println();

  await tachyon.print_and_wait(['달칵.']);
  await tachyon.print_and_wait(['아아…… 열려버렸군.']);
  await tachyon.print_and_wait(['문밖에 나타난, 흑발에 금색 눈동자의 그림자를 보았을 때.']);
  await tachyon.print_and_wait([
    '절정은 극치에 달했고, 지금까지 중 가장 흥분된 고조를 맞이했다.',
  ]);
  era.println();

  await coffee.say_and_wait(['……참으로 가련하네요, ', c_call_t, '.']);
  await tachyon.say_and_wait([t_call_c, ', 어째서……']);
  await coffee.say_and_wait([
    '그렇게 크게 소리를 내다니…… ',
    tachyon.get_uma_sex_title(),
    '가 아닌 ',
    c_call_m,
    ' 정도나 눈치채지 못하겠죠.',
  ]);
  era.println();

  await tachyon.print_and_wait(['실책이군.']);
  await tachyon.print_and_wait(['들키고 말았어.']);
  await tachyon.print_and_wait(['어쩌지, 어떻게 해야 좋을까.']);
  await tachyon.print_and_wait(['가련하게도, 지금 자신의 마음속에서 가장 중요하게 여기는 것은.']);
  await tachyon.print_and_wait([
    '오히려…… 어떻게 하면 ',
    t_call_c,
    '에게 간청하여, ',
    me.sex,
    '들이 사랑을 나누는 소리를 들으며 스스로를 위로하는 것을 허락받을 수 있을까 하는 것이었다.',
  ]);
  era.println();

  await tachyon.say_and_wait([t_call_m, '', me.sex, '는……']);
  await coffee.say_and_wait([
    '걱정 마세요…… ',
    c_call_m,
    '에게는 물건을 좀 챙겨오겠다고 말해두었으니까요.',
  ]);
  await coffee.say_and_wait([c_call_t, '……허리에 있는 약병…… 하나 빌려주실 수 있나요?']);
  await coffee.say_and_wait(['당신이라면…… 제가 어떤 것을 원하는지 알고 있겠죠.']);
  era.println();

  await tachyon.print_and_wait(['멍하니 상대를 바라보았다.']);
  await tachyon.print_and_wait(['내 허리에 있는…… ', t_call_c, '가 원할 법한 것은……']);
  await tachyon.print_and_wait(['직접 조제한, 배란 촉진제인가?']);
  await tachyon.print_and_wait([
    '저도 모르게, 허리춤에서…… 원래는 오직 자신과 ',
    t_call_m,
    ' 만을 위해 조제했던 약제를 꺼내 들었다.',
  ]);
  era.println();

  await coffee.say_and_wait([c_call_t, ', 저에게 주실 수 있나요?']);
  era.println();

  await tachyon.print_and_wait(['그녀는 자신이 무슨 말을 하는지 알고 있는 걸까?']);
  await tachyon.print_and_wait(['임신을 100%로 성공하는 약을.']);
  await tachyon.print_and_wait(['내 손으로 직접 바치고, 내 손으로 넘겨주길 바라고 있었다.']);
  await tachyon.print_and_wait([
    '그녀가 내가 사랑하는 사람과 애무하게 하고, 본래 내 것이어야 할 아이를 그녀가 갖게 하려는 것이다.',
  ]);
  await tachyon.print_and_wait([
    '그야말로 자신을 발밑에 깔고 뭉개는, 굴욕의 극치라 할 수 있는 일이었다.',
  ]);
  await tachyon.print_and_wait(['하지만 어째서…… 손은 앞으로 뻗어나가는 거지.']);
  await tachyon.print_and_wait(['어째서 몸은 이토록 뜨겁게 달아오르는 걸까.']);
  era.println();

  await coffee.say_and_wait([c_call_t, '……그렇게 멀리 있으면, 제가 받을 수 없잖아요?']);
  await coffee.say_and_wait(['이쪽으로 와서, 건네주세요.']);
  era.println();

  await tachyon.print_and_wait(['안 돼.']);
  await tachyon.print_and_wait(['그녀의 말을 들어선 안 돼.']);
  await tachyon.print_and_wait(['약을 부숴버려.']);
  await tachyon.print_and_wait(['아니면 차라리 자신이 마셔버리든가.']);
  await tachyon.print_and_wait([
    '어차피 ',
    t_call_m,
    '은 바로 옆방에 있어…… 마신 뒤에, 내 몫을 되찾아오면 되는 거야.',
  ]);
  await tachyon.print_and_wait(['그래, 바로 그거야.']);
  await tachyon.print_and_wait([
    '지금 문을 향해 걷는 것은, 약을 넘겨주기 위해서가 아니라…… 나 자신을 위해서……',
  ]);
  await tachyon.print_and_wait(['에…… 손이, 어째서……']);
  era.println();

  await coffee.say_and_wait(['……설마 정말로 이런 단계까지 올 줄은 몰랐네요.']);
  await coffee.say_and_wait(['정말로, 구역질이 나요.']);
  await coffee.say_and_wait(['하지만 저도 그렇게 모진 사람은 아니니까요……']);
  await coffee.say_and_wait(['듣기만 하는 건, 꽤 괴로웠죠?']);
  era.println();

  await tachyon.print_and_wait([
    '마치 약을 건네주는 순간, 자신의 영혼까지 함께 넘겨버린 듯한 기분이었다.',
  ]);
  await tachyon.print_and_wait([
    '넋이 나간 채로 앞서가는 형체를 따라, 본래라면 절반의 소유권이 자신에게 있었을 실험실로 발을 들였다.',
  ]);
  await tachyon.print_and_wait([
    '하지만…… 이런 짓을 저지르고도, ',
    t_call_m,
    '을 보는 순간 다시금 제정신이 돌아오고 말았다.',
  ]);
  era.println();

  await tachyon.say_and_wait([t_call_c, '……']);
  await coffee.say_and_wait([
    '안심하세요…… 친구가 도와서 ',
    c_call_m,
    '의 눈과 귀를 가려두었으니까요…… 지금의 ',
    me.sex,
    '는 우리를 볼 수도, 들을 수도 없어요.',
  ]);
  await tachyon.say_and_wait(['그 말은……']);
  await coffee.say_and_wait([
    '선택권은 ',
    c_call_t,
    '에게 맡길게요…… 같이 섞일 건가요, 아니면 혼자서 지켜볼 건가요?',
  ]);
  await tachyon.say_and_wait(['……']);
  era.println();

  await tachyon.print_and_wait(['마지막 기회군.']);
  await tachyon.print_and_wait(['마지막으로…… 지금 승낙한다면, 아직 함께할 수 있어.']);
  await tachyon.print_and_wait(['만약 대답하지 않는다면, 다시는 두 번 다시 기회는 없겠지.']);
  await tachyon.print_and_wait(['그런 예감이 들었다.']);
  era.println();

  era.add('item:「웨딩드레스」', 1);
  init_ero(32);

  await tachyon.print_and_wait(['그래서……']);
  era.printButton('입을 열어 승낙한다', 1);
  era.printButton('침묵을 지킨다', 2);
  if ((await era.input()) === 1) {
    await tachyon.print_and_wait(['자신보다 더 잘 어울리는 사람은 ', t_call_c, '일 것이다.']);
    await tachyon.print_and_wait([
      '자신보다 더 ',
      me.sex,
      '에게 어울리는 사람도 ',
      t_call_c,
      '일 것이고.',
    ]);
    await tachyon.print_and_wait([
      '만약 ',
      me.sex,
      '를 위한 길이라면, 여기서 포기를 선택해야 하는 걸까……?',
    ]);
    era.println();

    await tachyon.print_and_wait(['이해할 수 없군, 도무지 알 수가 없어.']);
    await tachyon.print_and_wait(['누군가를 좋아한다는 건 이렇게나 난해한 일이었던가.']);
    await tachyon.print_and_wait([
      '합리적으로 따진다면, 여기서 기꺼운 마음으로 ',
      me.sex,
      '들을 축복해 주어야 마땅하거늘.',
    ]);
    await tachyon.print_and_wait(['그러질 못하고, 그러질 못하고……']);
    era.println();

    await tachyon.print_and_wait(['어느샌가.']);
    await tachyon.print_and_wait(['자신도 모르게 시선은 침대 위의 ', me.sex, '에게 향해 있었다.']);
    await tachyon.print_and_wait(['……언제나 이기적인 나를 포용해 주었던 ', me.sex, '.']);
    await tachyon.print_and_wait(['이번 한 번만…… 부디 다시 한번, 내 응석을 용서해주게.']);
    era.println();

    await tachyon.print_and_wait(['', t_call_c, '에게 손을 뻗은 순간.']);
    await tachyon.print_and_wait([
      '침대 위의 ',
      me.sex,
      '가, 갑자기 놀란 표정을 지은 순간.',
    ]);
    await tachyon.print_and_wait([
      '더는 내면의 감정을 억누르지 못하고, 침대 위의 연인에게 달려들었다.',
    ]);

    era.printButton(`「와앗, 타키온? 언제부터!?」`, 1);
    await era.input();

    await tachyon.print_and_wait([
      me.sex,
      '의 표정에는 놀라움과 당혹감, 심지어 약간의 죄책감마저 서려 있었다.',
    ]);
    await tachyon.print_and_wait(['하지만 무엇보다 중요한 것은…… ', me.sex, '의 육체였다.']);
    await tachyon.print_and_wait(['참으로 따뜻하고, 안심이 되는군.']);
    await tachyon.print_and_wait([
      '이제야 비로소 아주 길고, 긴 악몽에서 깨어난 듯한 기분이 들었다.',
    ]);
    await tachyon.print_and_wait(['방금 전까지 나는 대체 무슨 생각을 했던 걸까.']);
    await tachyon.print_and_wait([
      '어째서 이런 온기를 스스로 포기하려 하고, 심지어 타인이 누리는 것을 지켜보려 했던 걸까.',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '뒤늦게 찾아온 공포와 두려움이 그제야 ',
      tachyon.get_colored_name(),
      '의 심장을 옥죄었다.',
    ]);
    await tachyon.print_and_wait([
      '만약 방금 정말로 아무 말도 하지 않았다면, 정말로 ',
      t_call_m,
      '을 포기해 버렸더라면……',
    ]);
    era.println();

    await tachyon.say_and_wait([t_call_m, '……미안하네…… 미안해!']);
    await tachyon.say_and_wait(['싫어…… 더는 자네를 누구에게도 넘기고 싶지 않단 말이네!']);
    await tachyon.say_and_wait([
      '싫어…… 싫다고! 자네는 나의 ',
      t_call_m,
      '이야…… 평생 나의 것이란 말이네……!']);
    era.println();

    await tachyon.print_and_wait(['어린아이처럼 소리 높여 울었다.']);
    await tachyon.print_and_wait(['참으로 수치스럽군, 하지만……']);
    await tachyon.print_and_wait([
      '당황하면서도 다정하게 자신을 달래주는 ',
      me.sex,
      '에게 안겨 있으니, 정말로…… 기분이 좋았다.',
    ]);

    era.drawLine();

    await era.printAndWait([
      '여전히 자신을 껴안고 울음을 그치지 못하는 ',
      tachyon.get_colored_name(),
      '을 당혹스럽게 바라보았다.',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 내심 당황스러움을 느꼈다.']);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 어떻게 갑자기 실험실에 나타난 것인지부터, 지금의 통곡까지, 모든 것이 ',
      me.get_colored_name(),
      '에게는 의문투성이였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은 유일하게 사태를 파악하고 있을 듯한 ',
      coffee.get_colored_name(),
      '를 무의식적으로 쳐다보았으나……',
    ]);
    era.println();

    await coffee.say_and_wait([
      '오늘은…… 일단 그녀에게 양보하죠…… ',
      c_call_m,
      ', 그녀가 만족할 때까지 잘 달래주세요.',
    ]);
    await coffee.say_and_wait([
      '대신에…… 오늘은 아주 유용한 약을 얻었으니까요…… ',
      c_call_m,
      ', 내일은 저에게 그만큼의 사랑을 주셔야 해요.',
    ]);
    await era.printAndWait([
      '말을 마친 뒤, ',
      coffee.get_colored_name(),
      '는 문을 열고 밖으로 나갔다.',
    ]);
    await era.printAndWait(['……도대체 무슨 일이 있었던 걸까.']);
    era.println();

    await tachyon.say_and_wait([t_call_m, '……', t_call_m, '……']);
    era.println();

    await era.printAndWait([
      '어느새 울음을 그친 ',
      tachyon.get_colored_name(),
      '이 아까보다 더 강한 힘으로 ',
      me.get_colored_name(),
      '을(를) 껴안았다.',
    ]);
    era.println();

    await tachyon.say_and_wait(['미안하네…… 하지만…… 좀 더 깊이…… 나를 사랑해줄 수 있겠나……']);
    await tachyon.say_and_wait([
      '지금 나에겐…… 좀 더 따뜻하고, 뜨거운 것이 필요하네. 몸의 안쪽부터 바깥까지 전부 데워줄 만한 것이 말이네.',
    ]);
    await tachyon.say_and_wait([t_call_m, '……부탁하네…… 해줄 수, 있겠나.']);
    era.println();

    await era.printAndWait(['간청과 공포, 그리고 정욕이 뒤섞인 그녀의 눈동자를 보았다.']);
    await era.printAndWait([me.get_colored_name(), '은(는) 몸을 돌려 그녀를 아래에 깔아뭉개 눌렀다.']);
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(32, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(32, part_enum.virgin),
      false,
    );
    era.drawLine();
    await era.printAndWait([
      '아이템 ',
      {
        content: '[「웨딩드레스」]',
        color: buff_colors[2],
        title: item_desc['「웨딩드레스」'],
      },
      '를 획득했다……',
    ]);
  } else {
    await coffee.say_and_wait(['……그것이 당신의 선택이라면 어쩔 수 없네요.']);
    await coffee.say_and_wait([
      '저야 딱히 상관없지만요…… 저 역시 ',
      c_call_m,
      '을 다른 사람에게 넘기고 싶진 않으니까요.',
    ]);
    await coffee.say_and_wait(['그저…… 정말로, 가련할 뿐이네요.']);
    era.println();

    await tachyon.print_and_wait(['돌아갈 수 없군.']);
    await tachyon.print_and_wait(['이제는, 다시는 돌아갈 수 없어.']);
    await tachyon.print_and_wait(['모든 것이 끝났어…… 그런데 어째서일까.']);
    await tachyon.print_and_wait(['지금의 기분은, 의외로…… 참으로 홀가분해.']);
    await tachyon.print_and_wait(['확실히, 나는 정말 가련한 여자로군.']);
    await tachyon.print_and_wait([
      '자신이 사랑하는 사람이, 다른 이와 몸을 섞는 모습을 보며.',
    ]);
    await tachyon.print_and_wait(['내가…… 웃음을 짓고 있다니.']);
    era.println();

    await coffee.say_and_wait(['죄송해요…… ', c_call_m, ', 많이 기다리셨죠?']);
    await coffee.say_and_wait([
      '네? 아뇨, 아무것도 아니에요…… 그저, 예전에 ',
      c_call_t,
      '에게 부탁했던 약을 챙기는 걸 깜빡해서……',
    ]);
    await coffee.say_and_wait([
      '……어째서 ',
      c_call_t,
      '이야기만 나오면 그런 표정을 짓는 건가요? 미안해서? 하지만…… 그렇게 말하면서도, 아래는 이렇게나 딱딱해지지 않았나요?',
    ]);
    await coffee.say_and_wait([
      '쮸웁…… 츄릅…… 푸하…… ',
      c_call_m,
      '…… 부디…… 입안에 내보내 주세요. 그래야 딱 맞춰서…… 약과 함께……',
    ]);
    await coffee.say_and_wait([
      '무슨 약이냐고요? ……우리의 사랑이 결실을 맺게 해줄 약이랍니다. 안심하세요…… ',
      c_call_t,
      '도 이미 동의했으니까요.',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '그 말을 내뱉으며, ',
      t_call_c,
      '은 침대 옆에 웅크리고 있는 자신을 힐끗 쳐다보았다.',
    ]);
    await tachyon.print_and_wait(['지금의 나는, 어떤 표정을 짓고 있을까?']);
    await tachyon.print_and_wait(['슬픔? 고통? 증오? 절망?']);
    await tachyon.print_and_wait(['아아……']);
    await tachyon.print_and_wait([t_call_c, '의 경멸 어린 눈빛만 봐도 알 수 있군.']);
    await tachyon.print_and_wait(['분명, 그중 어느 것도 아닐 테지.']);
    era.println();

    await coffee.say_and_wait([c_call_m, '……', c_call_m, '……']);
    era.println();

    await tachyon.print_and_wait([t_call_c, '이 ', me.sex, '의 몸 위에 올라탔다.']);
    await tachyon.print_and_wait([
      '그 뒤, 가장 천박한 창부조차 부끄러워할 법한 교성을 내질렀다.',
    ]);
    await tachyon.print_and_wait(['……아니, 이건 그저 나의 색안경일 뿐이겠지.']);
    await tachyon.print_and_wait([
      '실제로는, 분명 무척이나 행복하고 기쁨에 겨운 신음일 것이네.',
    ]);
    await tachyon.print_and_wait(['하지만, 상관없어.']);
    await tachyon.print_and_wait([
      '오히려 전자로 상상하는 편이, 나를 더욱 흥분시키니까 말이네.',
    ]);
    await tachyon.print_and_wait(['나의 연인.']);
    await tachyon.print_and_wait(['나의 ', t_call_m, '이.']);
    await tachyon.print_and_wait(['창부보다 못한 존재에게 깔려 유린당하는 모습이라니.']);
    era.println();

    await coffee.say_and_wait(['있죠…… ', c_call_m, '…… 아니, 트레이너 군……']);
    era.println();

    await tachyon.print_and_wait(['갑자기, ', t_call_c, '의 목소리가 더없이 요염하게 변했다.']);
    await tachyon.print_and_wait([
      '말투조차 바뀌어, 낯설면서도…… 어딘가 익숙한 어조가 되었다.',
    ]);
    era.println();

    await coffee.say_and_wait([
      '이런, ',
      c_call_m,
      '…… 어째서, 갑자기 그렇게 거칠어진 건가?',
    ]);
    await coffee.say_and_wait(['설마…… 나를 통해서, 다른 누군가를 보고 있는 겐가?']);
    era.println();

    await tachyon.print_and_wait(['안 돼……']);
    await tachyon.print_and_wait(['그만둬.']);
    await tachyon.print_and_wait(['잠깐, ', t_call_c, ', 하지 말게.']);
    await tachyon.print_and_wait(['더는 참을 수 없어.']);
    await tachyon.print_and_wait(['결국 입을 열어, 소리를 내뱉고 말았다.']);
    await tachyon.print_and_wait(['하지만……']);
    era.println();

    await coffee.say_and_wait([me.sex, '는 당신을 볼 수도, 들을 수도 없어.'], true);
    era.println();

    await tachyon.print_and_wait(['마치 어떤 목소리가, 등 뒤에서 나에게 속삭이는 듯했다.']);
    await tachyon.print_and_wait(['이것이…… ', t_call_c, '의 『친구』인가?']);
    await tachyon.print_and_wait(['아니, 그런 건 중요하지 않아.']);
    await tachyon.print_and_wait([t_call_c, ', 자네는——————.']);
    era.println();

    await coffee.say_and_wait(['정말 너무하네요, ', c_call_m, '.']);
    era.println();

    await tachyon.print_and_wait(['갑자기, ', t_call_c, '의 목소리가 원래대로 돌아왔다.']);
    era.println();

    await coffee.say_and_wait([
      '분명, 당신은 그녀를 사랑하고 있는데…… 하지만, 그녀는 이렇게 당신의 마음을 짓밟고 있잖아요, 그렇죠?',
    ]);
    era.println();

    await tachyon.print_and_wait(['뭐라고.']);
    await tachyon.print_and_wait([t_call_c, '…… 지금 무슨 말을 하는 건가.']);
    await tachyon.print_and_wait(['아니…… 지금…… 누구를……?']);
    era.println();

    await coffee.say_and_wait([
      '분명, ',
      c_call_m,
      '은 ',
      c_call_t,
      '에게 그토록 헌신했는데.',
    ]);
    await coffee.say_and_wait([
      '이미, 트레이너와 ',
      tachyon.get_uma_sex_title(),
      '의 경계를 완전히 넘어서 버렸는데도요.',
    ]);
    await coffee.say_and_wait([
      '하지만…… 그녀는 제가 『이 약은 ',
      c_call_m,
      '과 함께 쓸 거예요』라고 제안했을 때…… 망설임 없이 약을 넘겨주었답니다.',
    ]);
    era.println();

    await tachyon.print_and_wait([t_call_m, '…… 사랑하는…… 사람……']);
    await tachyon.print_and_wait([
      '아니야, ',
      me.sex,
      '와 ',
      t_call_c,
      '이야말로 더 잘 어울리는 사이가 아닌가.',
    ]);
    await tachyon.print_and_wait(['부외자는 바로 나……']);
    era.println();

    await coffee.say_and_wait(['으읏…… 갑자기…… 갑자기 그렇게 세게……❤️.']);
    await coffee.say_and_wait(['있죠…… ', c_call_m, '…… 안에…… 안쪽에 내보내 주세요……']);
    await coffee.say_and_wait([
      c_call_t,
      '가 원치 않는 것도, 저는 전부 하게 해드릴게요……',
      c_call_t,
      '는 당신을 거절했지만, 저는 그녀보다 몇 배는 더 당신을 만족시켜 드릴 테니까요.',
    ]);
    era.println();

    await tachyon.print_and_wait(['아니야.']);
    await tachyon.print_and_wait(['나는 그러지 않았어.']);
    await tachyon.print_and_wait(['나는……']);
    era.println();

    await tachyon.print_and_wait(['아.']);
    await tachyon.print_and_wait(['아니로군.']);
    await tachyon.print_and_wait(['내가 거절한 것이었나.']);
    era.println();

    await tachyon.print_and_wait(['마지막 기회.']);
    await tachyon.print_and_wait(['그것을 이미 스스로 내던져버렸군.']);
    await tachyon.print_and_wait(['이번에는, 정말로 기회가 없어.']);
    era.println();

    await tachyon.print_and_wait(['하지만, 어째서……']);
    await tachyon.print_and_wait(['어째서 몸이 멈추지 않고 떨리는 거지……']);
    await tachyon.print_and_wait(['분명 나의 연인이거늘.']);
    await tachyon.print_and_wait(['분명 나를 사랑해주는 사람이거늘.']);
    await tachyon.print_and_wait(['분명, 그녀야말로 부외자이거늘.']);
    era.println();

    await tachyon.print_and_wait([
      t_call_m,
      '과 ',
      t_call_c,
      '의 입장이 순식간에 반전되었다.',
    ]);
    await tachyon.print_and_wait([
      t_call_m,
      '이 ',
      t_call_c,
      '을 뒤로 돌려 침대에 짓눌렀다.',
    ]);
    await tachyon.print_and_wait([
      '끊임없이, 마치 모든 것을 쏟아부으려는 듯한 격렬한 피스톤 운동.',
    ]);
    await tachyon.print_and_wait([t_call_c, '은 이미 눈이 풀리고, 혀까지 내밀고 있었다.']);
    await tachyon.print_and_wait(['하지만…… ', me.sex, '의 입모양은.']);
    await tachyon.print_and_wait([
      t_call_m,
      '의 입술은, 계속해서 어떤 단어를 중얼거리고 있었다.',
    ]);
    await tachyon.print_and_wait(['그것은…… 타키온 이었다.']);
    era.println();

    era.println();

    await tachyon.print_and_wait(['……만약, 지금이라면.']);
    await tachyon.print_and_wait([t_call_c, '이 정신을 잃은 지금이라면.']);
    await tachyon.print_and_wait(['무슨 짓을 해도, 들키지 않겠지.']);
    await tachyon.print_and_wait([
      '정말로 그녀의 말대로, 『친구』가 모든 흔적을 가려준다면.',
    ]);
    await tachyon.print_and_wait(['그렇다면…… 설령 내가……']);
    era.println();

    await coffee.say_and_wait(['츄웁…… 쮸읍……']);
    era.println();

    await tachyon.print_and_wait(['성기가 아니었다.']);
    await tachyon.print_and_wait(['음낭도 아니었다.']);
    await tachyon.print_and_wait([
      me.sex,
      '를 저버린 나에게는, ',
      me.sex,
      '에게 그런 무례한 짓을 저지를 자격 따위 없었으니.',
    ]);
    await tachyon.print_and_wait(['그저, 두 사람의 결합부에서 흘러나온 액체만을.']);
    await tachyon.print_and_wait(['자신을 그저, 청소 도구와 같은 물건이라 여기며 핥았다.']);

    era.printButton('「!?」', 1);
    await era.input();

    await tachyon.print_and_wait(['그저, 핥고 있었을 뿐이었거늘.']);
    await tachyon.print_and_wait([me.sex, '가 갑자기 고개를 돌려 돌아보았다.']);
    await tachyon.print_and_wait(['기다리게.']);
    await tachyon.print_and_wait(['보지 말게.']);
    await tachyon.print_and_wait(['나의 이런 천한 몰골을 보지 말아주게.']);
    await tachyon.print_and_wait(['부탁이네, 제발……']);

    era.printButton('「당신…… 누구야?」', 1);
    await era.input();

    await tachyon.print_and_wait(['……에?']);
    await tachyon.print_and_wait([t_call_m, '은 망연자실함과 수치심, 당혹감이 뒤섞인 표정을 지었다.']);
    await tachyon.print_and_wait([
      '그 어느 것도, 「나」를 보았을 때 지어야 할 표정이 아니었다.',
    ]);
    era.println();

    await coffee.say_and_wait([
      '그녀는…… 당신과 마찬가지로, ',
      c_call_m,
      '을 동경하는 아이랍니다.',
    ]);
    await coffee.say_and_wait([
      '다만…… 이 아이가 워낙 부끄러움이 많아서, 제가 친구에게 부탁해 그녀의 얼굴을 숨겨주었거든요……',
    ]);
    await coffee.say_and_wait(['아니면…… ', c_call_m, ', 그녀의 얼굴을 보고 싶으신가요?']);
    era.println();

    await tachyon.print_and_wait([
      '겨우 가라앉았던 마음이, ',
      t_call_c,
      '의 마지막 말을 듣는 순간 다시 팽팽하게 긴장되었다.',
    ]);
    era.println();

    await me.say_and_wait('아니…… 보이고 싶지 않다면…… 억지로 그러지는 말자.');
    await coffee.say_and_wait([c_call_m, '…… 정말 다정하시네요……']);
    era.println();

    await tachyon.print_and_wait(['그렇군……']);
    await tachyon.print_and_wait(['정말로, 지나칠 정도로 다정해.']);
    await tachyon.print_and_wait(['어째서인지, 뇌리에 어떤 상상이 떠오르기 시작했다.']);
    await tachyon.print_and_wait([
      '만약 ',
      me.sex,
      '가 ',
      tachyon.get_colored_name(),
      '이 이런 ',
      tachyon.get_uma_sex_title(),
      '라는 사실을 알게 된다면.',
    ]);
    await tachyon.print_and_wait([
      '만약 ',
      me.sex,
      '가 지금 나의 이 하등한 모습을 보게 된다면.',
    ]);
    await tachyon.print_and_wait([me.sex, '는…… 얼마나 경멸 어린 눈으로 나를 쳐다볼까?']);
    await tachyon.print_and_wait(['얼마나 차가운 말로 나를 매도할까.']);
    await tachyon.print_and_wait(['아니면……']);
    await tachyon.print_and_wait(['만약에, ', me.sex, '가 나를 용서해준다면.']);
    await tachyon.print_and_wait(['이미 이토록 구제 불능이 되어버린 나를 용서한다면……']);
    await tachyon.print_and_wait([
      '그렇다면, 다시 한번 내가 그를 ',
      t_call_c,
      '에게 팔아넘겼을 때, 그때의 ',
      me.sex,
      '는 또 얼마나 짜릿한 표정을 지어줄까.',
    ]);
    era.println();

    await coffee.say_and_wait(['그나저나…… 이 아이, 정말로 ', c_call_m, '을 좋아하는 것 같네요.']);
    await coffee.say_and_wait([
      '그러니, ',
      c_call_m,
      '이 괜찮으시다면…… 이 아이를 곁에서 지켜보게 해도 될까요?',
    ]);
    await coffee.say_and_wait([
      '안심하세요, 그저 지켜만 볼 뿐이니까…… 장담하건대, 이 아이는 절대로 다시는 멋대로 행동하지 않을 거예요…… 맞죠?',
    ]);
    era.println();

    await tachyon.print_and_wait([t_call_c, '이 침대 가장자리에 앉아, 발끝으로 나의 턱을 치켜올렸다.']);
    await tachyon.print_and_wait(['마치 말 안 듣는 강아지를 훈육하는 것 같군.']);
    await tachyon.print_and_wait(['분명, 나의 연적이며 라이벌이거늘.']);
    await tachyon.print_and_wait(['하지만……']);
    await tachyon.print_and_wait([
      t_call_c,
      '의 가랑이 사이에서 흘러나와 종아리를 타고 흘러내리는 것을 지켜보았다.',
    ]);
    await tachyon.print_and_wait(['심지어 발등과 발가락 끝까지.']);
    await tachyon.print_and_wait(['두 사람의 애액과 정액이 뒤섞인 그 하얀 백탁의 흔적을.']);
    await tachyon.print_and_wait(['나는……']);
    await tachyon.print_and_wait([
      '홀린 듯이, 나는 ',
      t_call_c,
      '의 발을 핥았다.']);
    await tachyon.print_and_wait(['달콤하고, 쌉싸름하며, 굴욕적이고도, 흥분되는.']);
    await tachyon.print_and_wait(['온갖 맛들이 입안에서 폭발했다.']);
    await tachyon.print_and_wait(['어느샌가, 발 전체가 말끔히 핥아져 깨끗해졌다.']);
    await tachyon.print_and_wait(['없어져 버렸군……']);
    await tachyon.print_and_wait(['좀 더 원하네, 좀 더 그런 맛을 보고 싶어……']);
    await tachyon.print_and_wait(['그 어떤 대가를 치르더라도……']);
    era.println();

    await tachyon.print_and_wait(['나는 바닥에 엎드려, 복종의 자세를 취했다.']);
    await tachyon.print_and_wait([
      t_call_c,
      '의 발을 조심스럽게 자신의 복부 위에 올려두었다.',
    ]);
    await tachyon.print_and_wait(['자신의 존엄을 얼마나 짓밟든 상관없네.']);
    await tachyon.print_and_wait(['다시 한번, 그 하사품을 얻을 수만 있다면.']);
    era.println();

    await coffee.say_and_wait(['어머나…… 정말 착한 아이네요.']);
    await coffee.say_and_wait(['참으로…… 훌륭한 모습이에요.']);
    await coffee.say_and_wait([
      '계속해서 이런 연출을 보여준다면…… 가끔은, 당신에게 상을 주는 것도 나쁘지 않겠네요……',
    ]);
    era.println();

    await tachyon.print_and_wait([
      '갑자기, ',
      t_call_c,
      '이 입술을 귓가에 가져다 대고, 오직 ',
      tachyon.get_uma_sex_title(),
      '만이 들을 수 있는 작은 목소리로 속삭였다.',
    ]);
    era.println();

    await coffee.say_and_wait(['마음껏 저를 즐겁게 해보세요, ', c_call_t, '❤️.']);
    era.println();

    await tachyon.print_and_wait(['그렇게 ', t_call_c, '은 다시 침대로 돌아갔다.']);
    await tachyon.print_and_wait(['이어서, 침대에서 다시금 진동이 전해졌다.']);
    await tachyon.print_and_wait([
      '침대 아래의 ',
      tachyon.get_colored_name(),
      '은, 그저 혀를 내밀고 있을 뿐이었다.',
    ]);
    await tachyon.print_and_wait([
      '자신만의 전용 특등석에서, 개구리처럼 비참하게 몸을 떨 뿐이었다.',
    ]);
    await tachyon.print_and_wait(['필사적으로 스스로를 위로하면서도, 동시에 침대 위 연적의 비위를 맞추었다.']);
    await tachyon.print_and_wait([
      '상대가 이 미천한 자신을 가엽게 여겨, 아주 조금이라도 좋으니, 티끌만큼이라도 좋으니 자비를 베풀어주길 기도하면서.',
    ]);
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(25, part_enum.virgin);
    set_palam_to_max(32, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(25, part_enum.virgin),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(25, part_enum.virgin),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.mouth),
      new EroParticipant(25, part_enum.foot),
      false,
    );
    era.set('talent:32:NTR취향', 1);
  }
}

module.exports = tachyon_betrayed_2;