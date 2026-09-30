const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = async () => {
  const me = get_chara_talk(0),
    teio = get_chara_talk(3);

  if (era.get('cflag:3:모집상태') === recruit_flags.yes) {
    await era.printAndWait(
      '🎶You made one mistake, you got burned at the stake🎶',
      { align: 'center', isParagraph: true },
    );
    await era.printAndWait([
      teio.get_colored_name(),
      '는 우산을 접어 고리에 걸고, 모자를 벗으며 옷장 아래 칸에서 트렁크를 꺼내 침대 옆으로 끌고 가 그 위에 앉아 다리를 꼬았다.',
    ]);
    await era.printAndWait(
      '모자를 삐딱하게 써서 귀를 가리자, 파란 눈동자 앞으로 먼지가 흩날리고 창밖의 햇살이 스며들어 그 위로 금빛 가루를 덧씌웠다.',
    );
    await era.printAndWait([
      '턱을 괸 채, ',
      teio.sex,
      '는 ',
      me.get_colored_name(),
      '의 자는 얼굴을 응시했다. 햇살이 ',
      me.get_colored_name(),
      '의 속눈썹 사이로 흘러내렸다. 시선은 규칙적으로 들썩이는 콧망울과 살짝 창백해진 입술, 단정하게 잠긴 깃을 훑었다.',
    ]);

    await era.printAndWait("🎶You're finished, you're foolish, you failed🎶", {
      align: 'center',
      isParagraph: true,
    });

    era.printButton('「안녕, 좋은 아침이야.」', 1);
    await era.input();

    await era.printAndWait([
      teio.get_colored_name(),
      '가 순식간에 달려들어 ',
      me.get_colored_name(),
      '의 목을 억눌렀고, 왼쪽 무릎으로 ',
      me.get_colored_name(),
      '의 오른쪽 팔꿈치를 압박하며 오른발로는 가슴을 누른 채 마지막으로 왼쪽 엄지손가락을 강하게 비틀어 쥐었다.',
    ]);
    await era.printAndWait([
      '허리를 약간 숙인 채, ',
      teio.sex,
      '는 미소를 짓고 있는 ',
      me.get_colored_name(),
      '을(를) 노려보았다.',
    ]);
    await me.say_and_wait('으윽, 나의 사랑스러운 담당이 굿모닝 키스를 원하는 건가—— 커헉!');
    era.println();

    await era.printAndWait([
      teio.get_colored_name(),
      '가 양손에 힘을 주자, ',
      me.get_colored_name(),
      '의 이목구비가 동시에 일그러졌다.',
    ]);

    await era.printAndWait("🎵There's always a hope on this slippery slope🎵", {
      align: 'center',
      isParagraph: true,
    });

    await me.say_and_wait('너, 아직, 으윽, 아침 안 먹었지?');
    era.println();

    await era.printAndWait('치켜 올라간 입꼬리가 경련하며 술기운 섞인 침이 흘러나왔다.');
    await era.printAndWait([
      teio.get_colored_name(),
      '는 눈을 가늘게 뜨고 오른쪽 무릎을 더 아래로 찍어눌렀다. ',
      me.get_colored_name(),
      '의 두 손이 격렬하게 떨리더니, 왼손으로 ',
      teio.sex,
      '의 손등을 여러 번 다급하게 두드렸다.',
    ]);
    await era.printAndWait([
      '한참을 두드린 끝에야 입꼬리가 내려갔고, ',
      me.get_colored_name(),
      '의 눈동자에는 핏발이 서 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 두 눈을 감고 신음하며, 떨리는 검지로 ',
      teio.get_colored_name(),
      '의 손등 위에 천천히 「S」를 썼다.',
    ]);
    await era.printAndWait([
      teio.get_colored_name(),
      '가 고개를 갸웃거렸고, 손등 위에 「O」를 절반쯤 그리자 ',
      teio.sex,
      '는 목을 조르던 손을 풀었다. ',
      me.get_colored_name(),
      '은(는) 기침을 내뱉으며 두 팔을 축 늘어뜨렸다.',
    ]);
    await me.say_and_wait('콜록, 쿨럭, 세상에... 아침밥은, 윽, 제때 먹어야지.');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 기침을 할 때마다 가슴팍에 시큰한 통증이 전해졌다.',
    ]);

    await era.printAndWait('🎵Somewhere a ghost of a chance🎵', {
      align: 'center',
      isParagraph: true,
    });

    await teio.say_and_wait('흥, 하지만 당신, 거의 11시가 다 되어서 일어났는걸?');
    era.println();
    await me.say_and_wait(
      '미안해! 정말 미안해! 네가 없을 때 몰래 담배 피우고 술 마시는 게 아니었어.',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '의 말이 끝나자마자, 다시 작은 손길이 자신의 목덜미에 닿는 것이 느껴졌다. ',
      me.get_colored_name(),
      '은(는) 다리를 움찔하며 눈을 크게 떴다.',
    ]);
    era.println();
    await me.say_and_wait(
      '알았어, 알았다고! 제발, 제발 그만해! 정말 다시는 안 그럴게! 후우, 알았으니까.',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 깊게 숨을 들이쉬고, ',
      teio.get_colored_name(),
      '의 푸른 눈동자를 정면으로 바라보며 말했다.',
    ]);
    era.println();

    era.printButton('「내가 잘못했어, 후회하고 있어!」', 1);
    await era.input();

    await era.printAndWait(
      '🎵To get back in that game and burn off your shame🎵',
      {
        align: 'center',
        isParagraph: true,
      },
    );

    await era.printAndWait([
      teio.get_colored_name(),
      '는 발밑의 ',
      me.get_colored_name(),
      '의 얼굴을 빤히 바라보다가 천천히 손을 거두고 무릎을 떼었다. 자신의 엄지손가락이 여전히 비틀려 있는 것을 본 ',
      me.get_colored_name(),
      '이(가) 눈썹을 치켜세우며 말했다.',
    ]);
    era.println();
    await me.say_and_wait('계속 손을 붙잡고 있으면 한 손으로 아침을 차려줄 수는 없잖아?');
    era.println();
    await era.printAndWait([
      teio.get_colored_name(),
      '는 손을 놓고 머리 위의 모자를 고쳐 쓰며 가볍게 침대 밖으로 뛰어내렸다.',
    ]);
    era.println();
    await teio.say_and_wait('배 안 고파.');
    era.println();
    await era.printAndWait([
      teio.sex,
      '는 창가로 걸어가 고개를 까닥이며 짙은 색 커튼에 몸을 기댔다. ',
      me.get_colored_name(),
      '은(는) 팔꿈치 관절을 주무르며 일어나 앉아 입술을 깨물며 말했다.',
    ]);
    era.println();
    await me.say_and_wait('배 안 고픈데 이런 건 왜 가지고 있어?');
    era.println();
    await era.printAndWait([
      teio.get_colored_name(),
      '가 뒤를 돌아보자, 그곳에는 ',
      me.get_colored_name(),
      '의 오른손바닥에 놓인 포장된 작은 빵 한 조각이 있었다. ',
      teio.sex,
      '가 입가를 굳히며 한 걸음 다가오자, ',
      me.get_colored_name(),
      '은(는) 황급히 손을 내저었다.',
    ]);
    era.println();
    await me.say_and_wait(
      '진정해, 나의 착한 담당님. 다음부터는 가져온 건 따뜻할 때 먹어. 그리고, 만약 나와 같이 식사하고 싶은 거라면... 아침에 나를 어떻게 깨워야 하는지 알잖아.',
    );
    era.println();
    await era.printAndWait([
      teio.get_colored_name(),
      '는 주머니를 만져보더니 얼굴을 붉히며 ',
      me.get_colored_name(),
      '의 엉덩이를 가볍게 발로 찼다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 엉덩이를 문지르며 옷장을 열고 잠옷 단추를 풀어 평범한 체크무늬 셔츠로 갈아입었다.',
    ]);
    await era.printAndWait([
      teio.sex,
      '는 ',
      me.get_colored_name(),
      '이(가) 옷을 다 갈아입는 것을 지켜본 뒤, ',
      me.get_colored_name(),
      '과(와) 함께 방을 나섰다.',
    ]);

    await era.printAndWait('🎶And dance with the big boys again🎶', {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 한 손으로 식탁보를 깔고, 다른 한 손으로는 스크램블 에그와 소시지가 담긴 접시를 내려놓은 뒤 자신의 식기를 세팅하고 무릎 위에 냅킨을 올렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 갓 짠 오렌지 주스를 한 모금 마시며, ',
      teio.get_colored_name(),
      '의 오물거리는 소리를 들으며 식사를 했다. 이윽고 ',
      me.get_colored_name(),
      '은(는) 달걀을 잘라 포크로 집어 ',
      teio.get_colored_name(),
      '의 입가에 가져다 대었다.',
    ]);
    era.println();
    await me.say_and_wait('간이 맞는지 한 번 먹어봐.');
    era.println();
    await era.printAndWait([
      teio.get_colored_name(),
      '는 한입에 덥석 받아먹고는, 음식을 씹으며 고기 한 점을 썰어 ',
      me.get_colored_name(),
      '의 앞으로 내밀었다. ',
      me.get_colored_name(),
      '은(는) 몸을 숙여 포크를 물고 고기를 입안으로 가져갔다.',
    ]);
    era.println();

    era.printButton('「음, 너도 많이 먹어. 건강이랑 발육에 좋으니까.」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '의 식탁 아래 발끝이 ',
      teio.get_uma_sex_title(),
      '에게 가볍게 밟혔다.',
    ]);

    await era.printAndWait("🎶It's a strange, strange game🎶", {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait([
      me.get_couple_title(),
      '이 서로를 알고, 인연을 맺고, 함께 지내온 지 벌써 얼마나 지났을까? 아마 3년에서 5년쯤 되었을 테지만, ',
      me.get_couple_title(),
      '중 어느 누구도 그런 것엔 신경 쓰지 않는 듯했다.',
    ]);
    era.println();
    await era.printAndWait([
      '애당초 ',
      me.get_couple_title(),
      '에게 있어 트레센에 관한 것, 레이스에 관한 것 등 과거의 모든 일은 이미 끝난 일이었다.',
    ]);
    era.println();
    await era.printAndWait([
      '두 사람의 생활 속에서도 그런 화제는 의도적으로 피해왔다. 비록 ',
      teio.sex,
      '가 ',
      me.get_colored_name(),
      '을(를) 부르는 호칭은 이미 ',
      me.get_colored_actual_name(),
      '(으)로 바뀌었지만, ',
      me.get_colored_name(),
      '은(는) 여전히 습관적으로 ',
      teio.sex,
      '를 자신의 담당이라 불렀고, ',
      teio.sex,
      ' 역시 딱히 거부감은 없는 듯했다.',
    ]);
    era.println();
    await era.printAndWait([
      teio.sex,
      '의 다리 부상 이후, ',
      me.get_couple_title(),
      '은 나름대로 노력을 기울였으나 결국 ',
      teio.sex,
      '의 ',
      teio.get_uma_sex_title(),
      '로서의 커리어를 구하지 못했고, 복귀 후 연이은 패배 속에 쓸쓸히 은퇴하고 말았다.',
    ]);
    await era.printAndWait('꽃다발도 환호성도 없이, 가장 낮은 자리에서 물러났다.');
    await era.printAndWait([
      teio.sex,
      '를 돌보기 위해 (혹은 단순히 ',
      teio.sex,
      '와 떨어지기 싫어서), ',
      me.get_colored_name(),
      ' 또한 사직서를 냈고, 트레센의 도움을 받아 ',
      teio.sex,
      '와 함께 한적한 시골 마을에 두 사람만의 새 보금자리를 마련했다.',
    ]);

    await era.printAndWait('🎶Such a shame, shame, shame🎶', {
      align: 'center',
      isParagraph: true,
    });

    await teio.say_and_wait('으음... 방금 생각났는데 깜빡하고 안 산 게 있어.');
    era.println();
    await era.printAndWait([
      '아점을 마친 뒤, ',
      me.get_colored_name(),
      '과(와) ',
      teio.sex,
      '는 주방에서 함께 설거지를 하고 있었다. ',
      teio.sex,
      '가 뒷정리를 하며 발꿈치를 들고 냉장고를 열던 중 갑자기 툭 던진 말이었다.',
    ]);
    era.println();
    await me.say_and_wait('어? 그럼 이따가 같이 다시 다녀올까?');
    era.println();
    await teio.say_and_wait('으음—');
    era.println();
    await era.printAndWait([
      '그때 갑자기 집안의 다른 방에서 소음이 들려왔다. ',
      me.get_couple_title(),
      '은 서로 눈을 맞추었고, 이내 ',
      teio.sex,
      '는 문밖으로 사라졌다. 1분도 채 되지 않아 다시 ',
      me.get_colored_name(),
      '의 앞으로 돌아왔다.',
    ]);
    era.println();
    await teio.say_and_wait('창고 천장에서 물이 새는 것 같아. 한쪽이 무너져 내렸어.');
    era.println();

    era.printButton('「그럼 이따가 내가 수리할게. 너는 그사이에 물건 사러 다녀와.」', 1);
    await era.input();

    await era.printAndWait([
      teio.sex,
      '는 잠시 망설이며 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    era.println();

    era.printButton(
      '「문제없을 거야. 나만 믿으라고. 너는 키가 작아서 위쪽 일은 도와주기 힘들 테니까, 나 혼자서도 충분히 처리할 수 있어. 각자 할 일을 나누면 금방 끝나겠지.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '의 전 담당은 한참을 고민하다가 결국 ',
      me.get_colored_name(),
      '의 제안에 고개를 끄덕였다.',
    ]);
    await era.printAndWait([
      teio.sex,
      '가 현관 앞에 서자, ',
      me.get_colored_name(),
      '은(는) 마지막으로 ',
      teio.sex,
      '의 옷매무새를 정리해주고 꼬리와 귀를 잘 숨겼다. 만족스러운 듯 손을 털고 가벼운 입맞춤과 함께 작별 인사를 나누며 문을 열었다.',
    ]);
    await era.printAndWait([teio.sex, '는 바깥 세상을 향해 걸어 나갔다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 방문을 닫고 창문을 통해 ',
      teio.sex,
      '의 뒷모습이 멀어지는 것을 배웅했다. 안도의 한숨을 내쉬고 커튼을 친 뒤, 다시 일거리로 고개를 돌렸다.',
    ]);

    await era.printAndWait('🎶You got to carry the blame🎶', {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait([
      '15분쯤 지났을까, 초인종 소리가 망치와 못, 나무판자에 집중되어 있던 ',
      me.get_colored_name(),
      '의 주의를 흐트러뜨렸다.',
    ]);
    await era.printAndWait([
      '처음에 ',
      me.get_colored_name(),
      '은(는) 무시하려 했으나, 밖의 사람은 끈질겼다. 끊임없이 울리는 벨 소리는 마치 ',
      me.get_colored_name(),
      '에 대한 스태미너 훈련 같았고, 결국 견디다 못한 ',
      me.get_colored_name(),
      '은(는) 문 앞으로 나가 확인해보기로 했다. 외시경을 통해 ',
      me.get_colored_name(),
      '이(가) 본 것은——',
    ]);
    await era.printAndWait('한 쌍의 귀였다.');
    await era.printAndWait('갈색의, 작고 삼각형 모양인 귀.');

    await era.printAndWait('🎶In this strange game🎶', {
      align: 'center',
      isParagraph: true,
    });

    await me.say_and_wait(['변장이 들통나서 급하게 집으로 뛰어온 건가?'], true);
    await era.printAndWait([
      '다급해진 ',
      me.get_colored_name(),
      '이(가) 문을 벌컥 열었고, 그 뒤에 찾아온 것은 가슴께의 극심한 통증이었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 고개를 떨구고서야 날카로운 칼날이 갈비뼈 사이를 절묘하게 파고들어 자신의 심장을 꿰뚫었다는 사실을 깨달았다.',
    ]);
    era.println();

    await me.say_and_wait('으윽……');

    await era.printAndWait(
      "🎶You're out on a limb and you're trying to gеt in🎶",
      {
        align: 'center',
        isParagraph: true,
      },
    );

    await era.printAndWait([
      '선홍색 피가 뿜어져 나오며 ',
      me.get_colored_name(),
      '의 생명력과 함께 체외로 흘러넘쳤다. ',
      me.get_colored_name(),
      '은(는) 멍하니 눈을 깜빡이며 범인——어디선가 본 기억이 있는 한 ',
      teio.get_uma_sex_title(),
      '——를 눈동자에 담았다.',
    ]);
    era.println();
    const kita = get_chara_talk(68);
    await kita.say_as_unknown_and_wait([
      '당신이 바로…… ',
      sys_get_colored_callname(68, 3),
      '의 인생을 망친 주범이야.',
    ]);
    await kita.say_as_unknown_and_wait([
      '자신의 이기심 때문에 ',
      sys_get_colored_callname(68, 3),
      '의 다리 상태를 외면하고, 약해진 틈을 타 ',
      sys_get_colored_callname(68, 3),
      '의 유일한 마음의 안식처인 척 연기나 하고…… 이게 당신이 받아야 할 마땅한 대가야!',
    ]);
    await kita.say_as_unknown_and_wait([
      '하지만 ',
      sys_get_colored_callname(68, 3),
      '는…… 당신에게 너무 깊이 미혹되어서 아무것도 할 수 없게 됐어. 그러니 팬인 이 내가 우상을 대신해 해방해주겠어! 드디어 이 기회가 왔어!',
    ]);

    await era.printAndWait("🎶It's a strange game🎶", {
      align: 'center',
      isParagraph: true,
    });

    await era.printAndWait(['아아, ', kita.sex, '가 울분에 가득 차 무언가 소리치고 있는 것 같다.']);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '은(는) 이제 그 정보를 처리할 능력이 남아있지 않았다.',
    ]);
    await me.say_and_wait('아쉽네…… 술도 담배도 끊어서 테이오를 기쁘게 해줄 기회였는데.', true);
    await era.printAndWait([
      '마지막 의식과 함께 ',
      me.get_colored_name(),
      '은(는) 깊고 어두운 어둠 속으로 추락하며, 영원히 눈을 감았다.',
    ]);
    era.println();

    await print_event_name(
      [{ content: 'DEAD ENDING', color: buff_colors[3] }],
      teio,
    );

    await era.printAndWait('Do you want to play this a strange game again?', {
      align: 'center',
      isParagraph: true,
    });
  } else {
    await era.printAndWait([
      teio.get_colored_name(),
      '와 계약을 해지한 뒤, 여론의 비난을 피해 평온을 찾아 떠난 ',
      me.get_colored_name(),
      '은(는) 트레센을 떠나 새로운 곳에서 트레이너 일을 다시 시작했다. 하지만 왠지 모를 이유로 ',
      me.get_colored_name(),
      '이(가) 지도하는 ',
      teio.get_uma_sex_title(),
      '들은 다시는 뛰어난 성적을 내지 못했고, ',
      me.get_colored_name(),
      '의 상태와 능력 또한 ',
      teio.get_colored_name(),
      '와 파트너였을 때의 수준으로 회복되지 않았다…… ',
      me.get_colored_name(),
      '의 길은 그렇게 허무하게 끝을 맺었고, ',
      me.get_colored_name(),
      '과(와) ',
      teio.get_colored_name(),
      '가 품었던 꿈은 결국 이루어지지 못했다.',
    ]);
    await era.printAndWait([
      '마음 한구석이 텅 빈 것 같은 ',
      me.get_colored_name(),
      '은(는) 매일 똑같은 일상을 반복했다. 일은 점점 짐이 되어갔고, ',
      me.get_colored_name(),
      '은(는) 술과 담배를 각성제와 위안거리로 삼기 시작했다. 어느덧 ',
      me.get_colored_name(),
      '은(는) 자신이 품었던 당초의 이상을 잊어버리고 의욕을 상실한 채, 남은 커리어를 무의미하게 보내버리고 말았다……',
    ]);
    await print_event_name(
      [{ content: '무위로 돌아가다', color: buff_colors[3] }],
      teio,
    );
  }
};