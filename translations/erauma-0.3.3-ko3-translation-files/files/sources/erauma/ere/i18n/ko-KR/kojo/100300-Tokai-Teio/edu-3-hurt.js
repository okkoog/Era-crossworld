// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_gradient_color = require('#/utils/gradient-color');
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3-hurt"),

  // [번역 완료] arim_kin_win_h_s
  arim_kin_win_h_s: (() => {
    const title = '기적의 부활 (하)';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('괜찮아.');
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.teen_sex_title}은(는) 맹렬한 유성이 되어 체력을 한계까지 불태우며 레이스장을 달린다.`,
      );
      era.println();

      await teio.say_and_wait('이길 수 있어.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 전용 관람석에서 일어나 흐릿한 붉은 그림자를 눈으로 좇는다——${you.name}의 담당이 온몸의 근섬유를 쥐어짜 이 레이스를 완성하려 하고 있다.`,
      );
      await era.printAndWait(`두 사람의 꿈을 이루기 위해.`);
      era.println();

      await era.printAndWait(
        `푸른 하늘과 흰 구름, 붉은 태양과 맑은 바람. 더없이 좋은 날씨지만 ${you.name}에게 그것을 즐길 여유는 없고, 그저 작은 그림자 하나에 온 정신을 쏟는다.`,
      );
      await era.printAndWait(`${you.name}의 담당, ${teio.name}.`);
      await era.printAndWait(
        `세계가 ${you.name}의 눈에서 멀어지고 초점은 다시 ${teio.sex}에게 모인다. 모든 소리가 잡음처럼 흐려진다——잠깐.`,
      );
      era.println();

      await era.printAndWait(`실황「——${teio.name} 선수가——」`);
      era.println();

      await era.printAndWait('뭔가 이상하다.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 울타리를 움켜쥐고 몸을 내밀며 필사적으로 외친다.`,
      );
      era.println();

      await era.printAndWait(`실황「——실속! 다리의 옛 부상인가——」`);
      era.println();

      await teio.say_and_wait('하…… 하……');
      era.println();

      await teio.say_and_wait('몸이…… 말을 안 들어', true);
      era.println();

      await teio.say_and_wait('호——흡이—— 안 돼', true);
      era.println();

      await teio.say_and_wait('갈비뼈와 폐와 심장이…… 타고 있어.', true);
      era.println();

      await teio.say_and_wait('손발이…… 느껴지지 않아', true);
      era.println();

      era.printButton('「——테——이——오——」', 1);
      await era.input();

      await teio.say_and_wait('저 사람은 누구지……', true);
      era.println();

      await teio.say_and_wait(
        '목소리도…… 시야도…… 흐려져…… 아무것도 기억나지 않아, 이대로 쓰러져서……',
        true,
      );
      era.println();

      await era.printAndWait('몸통이 앞으로 기울고 머리가 떨어진다.');
      era.println();

      await era.printAndWait('아니, 잠깐.');
      await era.printAndWait('이런 결말일 리가 없다.');
      era.println();

      await teio.say_and_wait('아니야.', true);
      era.println();

      await teio.say_and_wait('나는 뭘——', true);
      era.println();

      era.printButton(`「${teio.name}！！！」`, 1);
      await era.input();

      await teio.say_and_wait('아아……');
      era.println();

      await era.printAndWait(`실황「——오오! ${teio.name}이(가) 따라붙었나요?」`);
      era.println();

      await teio.say_and_wait('생각났다.');
      era.println();

      await era.printAndWait(
        `무거운 두 다리, 타는 듯한 폐, 시큰거리는 팔——고통이 ${teio.name}이라는 ${teio.uma_sex_title}의 몸으로 돌아온다.`,
      );
      await era.printAndWait('하지만 함께 돌아온 것은 투지와 신념이다.');
      era.println();

      await teio.say_and_wait('생각났어!');
      era.println();

      await era.printAndWait(
        `두 발이 땅에 닿고 스치며 지면을 차는 반작용이 이미 고통을 견디기 힘든 몸을 앞으로 밀어낸다. 몸을 기울여 위치에너지가 만드는 전방 가속을 최대한 활용한다——`,
      );
      era.println();

      await era.printAndWait(
        `실황「현재 선두는——잠깐, 저건, ${teio.name}이(가) 올라옵니다! ${teio.name}입니다!」`,
      );
      era.println();

      await teio.say_and_wait('숨쉬기 힘들어', true);
      era.println();

      await teio.say_and_wait('폐가 터져도 상관없어', true);
      era.println();

      await teio.say_and_wait('다리는 무거워, 그래도 아직 움직여', true);
      era.println();

      await teio.say_and_wait('나는…… 몇 번이고 좌절했어', true);
      era.println();

      await teio.say_and_wait('그때도…… 그때도', true);
      era.println();

      await teio.say_and_wait('누구보다 많이 좌절한 건 나야', true);
      era.println();

      await teio.say_and_wait('누구보다 분한 것도 나야', true);
      era.println();

      await teio.say_and_wait('누구보다 이기고 싶은 것도 나야', true);
      era.println();

      await teio.say_and_wait('절대로 양보하지 않아', true);
      era.println();

      await teio.say_and_wait('절대로, 절대로', true);
      era.println();

      await teio.say_and_wait('절대로 내가 이겨!', true);
      era.println();

      await teio.say_and_wait('가!', true);
      era.println();

      await teio.say_and_wait('가!', true);
      era.println();

      await teio.say_and_wait('가, 달려!', true);
      era.println();

      await teio.say_and_wait('승부다!', true);
      era.println();

      await era.printAndWait(
        `실황「${teio.name}입니다! ${teio.name}이(가) 따라붙었습니다! ${teio.sex}와 선두의 격차가 줄어듭니다!」`,
      );
      era.println();

      await era.printAndWait('남은 거리 200미터를 끊는다.');
      era.println();

      await era.printAndWait(
        `실황「1년 만에 레이스장으로 돌아온 ${teio.name}, 따라잡을 수 있을까요? ${teio.sex}이(가) 추월했습니다——아니, 다른 ${teio.uma_sex_title}이(가) ${teio.sex} 곁에 바짝 붙어 필사적으로 ${teio.name}을(를) 쫓고 있습니다!」`,
      );
      era.println();

      await era.printAndWait(
        `실황「${teio.name}이(가) 힘을 짜내 쫓습니다! 상대도 한 걸음도 물러서지 않습니다——한 마신 차!」`,
      );
      era.println();

      await era.printAndWait(
        `실황「조금만 더, 조금만 더! ${teio.name}이(가) 한 걸음을 더 좁히지 못합니다!」`,
      );
      era.println();

      await era.printAndWait(
        '실황「국화상 기록 보유자의 강함이 여기서도 버팁니다!」',
      );
      era.println();

      await era.printAndWait(
        `실황「하지만——${teio.name}이(가) 다가옵니다! 레이스장에 돌아온 테이오가 격차를 계속 줄입니다!」`,
      );
      era.println();

      await era.printAndWait('100미터\n마지막 접전');
      era.println();

      await era.printAndWait(
        `실황「선두와 나란히 섰나요? ${teio.name}! 신세대의 패자인가, 과거 몰락한 왕이 왕좌로 돌아오는가——」`,
      );
      era.println();

      await era.printAndWait(
        '잔디밭 전체가 떨리는 듯하다. 나카야마 경마장——이곳 역시 아리마 기념의 승자를 기다리고 있는 것 아닐까.',
      );
      era.println();

      await teio.say_and_wait('아아아아아아아아아아아!');
      era.println();

      await era.printAndWait(`실황「${teio.name}입니다!」`);
      era.println();

      await era.printAndWait(
        `실황「${teio.name}이(가) 넘어섰나요? ${teio.name}이(가) 근소하게 앞섭니다, 더비 우마 ${teio.uma_sex_title}의 저력을 보여주는가?!」`,
      );
      era.println();

      await era.printAndWait(
        '실황「하지만 우세는 미미합니다, 상대도 바짝 따라붙어 놓치지 않습니다!」',
      );
      era.println();

      await era.printAndWait('실황「어느 쪽입니까, 어느 쪽입니까?!」');
      era.println();

      await era.printAndWait(`우마 ${teio.uma_sex_title}「내가——」`);
      era.println();

      await teio.say_and_wait('——이겼어——');
      era.println();

      await era.printAndWait('한 줄기 붉은 무지개가 결승선을 갈라놓는다.');
      era.println();

      await era.printAndWait(
        '경기장 전체가 한순간 조용해진 듯하다가 산을 무너뜨릴 듯한 환호가 터진다.',
      );
      await era.printAndWait(
        '끓어오르는 사람들의 함성이 하늘에 울리고 하나의 이름이 그 속에서 메아리친다.',
      );
      era.println();

      await era.printAndWait(`観客「${teio.name}！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 1 / 3),
        fontSize: '1.125rem',
      });
      await era.printAndWait(`観客「${teio.name}！！」`, {
        align: 'center',
        color: get_gradient_color(undefined, teio.color, 2 / 3),
        fontSize: '1.25rem',
      });
      await era.printAndWait(`観客「${teio.name}！！！」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.375rem',
      });
      era.println();

      await era.printAndWait(`실황「${teio.name}——기적의 부활!」`, {
        align: 'center',
        color: teio.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      });
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] be_dead
  be_dead: (() => {
    const title = '데드 엔드';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} kita 犯人（キタサンブラックの代表色で暫定）
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} k_call_t キタサンブラックがトウカイテイオーを呼ぶ名
     */
    const f = async (teio, kita, you, k_call_t) => {
      await era.printAndWait(
        '🎶You made one mistake, you got burned at the stake🎶',
        { align: 'center', isParagraph: true },
      );
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 우산을 접어 갈고리에 걸고, 이어 모자를 벗는다.',
        teio.sex,
        '은(는) 옷장 아래칸에서 여행가방을 꺼내 침대 옆까지 끌고 와 그 위에 앉아 다리를 꼰다.',
      ]);
      await era.printAndWait(
        '모자를 비스듬히 써 우마 귀를 가리고, 푸른 눈앞으로 연기 같은 먼지가 지나간다. 창문으로 들어온 햇빛이 그 먼지에 금가루를 뿌린다.',
      );
      await era.printAndWait([
        '턱을 괴고 ',
        teio.sex,
        '은(는) ',
        you.get_colored_name(),
        '의 잠든 얼굴을 바라본다. 햇빛이 ',
        you.get_colored_name(),
        '의 속눈썹 사이를 흐른다. 시선은 규칙적으로 오르내리는 콧방울, 조금 창백한 두 입술, 단정히 잠근 옷깃을 따라간다.',
      ]);

      await era.printAndWait(
        "🎶You're finished, you're foolish, you failed🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      era.printButton('「좋은 아침.」', 1);
      await era.input();

      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 앞으로 뛰어들어 갑자기 ',
        you.get_colored_name(),
        '의 목을 조르고 왼쪽 무릎으로 ',
        you.get_colored_name(),
        '의 오른쪽 팔꿈치를 누르고 오른발을 가슴에 댄 뒤 마지막으로 왼손 엄지를 비튼다.',
      ]);
      await era.printAndWait([
        '허리를 살짝 숙이고 ',
        teio.sex,
        '은(는) 눈을 고정한 채 ',
        you.get_colored_name(),
        '의 활짝 웃는 얼굴을 바라본다.',
      ]);
      await you.say_and_wait(
        '응, 사랑스러운 담당은 아침 인사 키스를 원하는 건가——콜록!',
      );
      era.println();

      await era.printAndWait([
        teio.get_colored_name(),
        '이(가) 두 손에 힘을 주자 ',
        you.get_colored_name(),
        '의 얼굴도 동시에 떨린다.',
      ]);

      await era.printAndWait(
        "🎵There's always a hope on this slippery slope🎵",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await you.say_and_wait('아침, 아직, 윽, 안 먹었잖아.');
      era.println();

      await era.printAndWait(
        '치켜 올라간 입꼬리가 계속 경련하고 술기운 섞인 침이 흘러내린다.',
      );
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 눈을 가늘게 뜨고 오른쪽 무릎을 아래로 눌러댄다.',
        you.get_colored_name(),
        '의 두 손이 세차게 떨리고 왼손이 연달아 ',
        teio.sex,
        '의 손등을 몇 번이고 두드린다.',
      ]);
      await era.printAndWait([
        '한동안 두드린 뒤 입꼬리가 내려가기 시작하고 핏줄이 ',
        you.get_colored_name(),
        '의 눈동자 주변을 감싼다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 두 눈을 감고 신음하며 떨리는 검지로 ',
        teio.get_colored_name(),
        '의 손등에 천천히 S를 쓴다.',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 고개를 갸웃하다가 손등에 O가 절반쯤 그려졌을 때 ',
        teio.sex,
        '은(는) 목을 잡은 손을 놓는다.',
        you.get_colored_name(),
        '은(는) 기침을 하며 두 손의 힘을 뺀다.',
      ]);
      await you.say_and_wait(
        '콜록, 콜록콜록, 정말이지, 아침은, 윽, 미룰 수 없잖아.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 기침할 때마다 가슴에 쓰라린 통증이 달린다.',
      ]);

      await era.printAndWait('🎵Somewhere a ghost of a chance🎵', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('흐응, 거의 11시까지 잔 것 같네.');
      era.println();
      await you.say_and_wait(
        '미안해! 진심으로 미안하다. 네가 없는 동안 몰래 담배를 피우고 술을 마신 건 잘못이었어.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 말을 마치자 다시 작은 두 손이 목에 달라붙는다.',
        you.get_colored_name(),
        '은(는) 두 다리를 떨며 눈을 크게 뜬다.',
      ]);
      era.println();
      await you.say_and_wait(
        '알았어 알았어, 퉤, 그만해 그만! 이제 그만해! 정말 그만! 후우, 알았어.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 깊게 숨을 들이쉬고 ',
        teio.get_colored_name(),
        '의 푸른 눈을 정면으로 바라보며 말한다.',
      ]);
      era.println();

      era.printButton('「잘못했어. 후회하고 있어!」', 1);
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
        '은(는) 아래의 ',
        you.get_colored_name(),
        '의 얼굴을 바라보며 천천히 손을 거두고 두 무릎을 ',
        you.get_colored_name(),
        '의 몸에서 떼어낸다. 엄지가 아직 비틀려 있는 것을 보고 ',
        you.get_colored_name(),
        '은(는) 눈썹을 치켜올리며 말한다.',
      ]);
      era.println();
      await you.say_and_wait('한 손을 붙잡힌 채로 한 손만으로 아침을 만들 수는 없잖아?');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 손을 놓고 머리의 모자를 잡은 채 가볍게 뒤로 뛰어 침대에서 내려온다.',
      ]);
      era.println();
      await teio.say_and_wait('배 안 고파.');
      era.println();
      await era.printAndWait([
        teio.sex,
        '은(는) 창가로 걸어가 고개를 갸웃하며 어두운 커튼에 기대선다.',
        you.get_colored_name(),
        '은(는) 팔꿈치를 주무르며 일어나 입을 다문 채 말한다.',
      ]);
      era.println();
      await you.say_and_wait('배 안 고픈데 그걸 들고 있는 이유는 뭐야?');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '이(가) 돌아보자 ',
        you.get_colored_name(),
        '의 오른손바닥에 포장된 작은 빵이 놓여 있다.',
        teio.sex,
        '은(는) 입을 굳게 다물고 한 걸음 앞으로 나선다.',
        you.get_colored_name(),
        '은(는) 황급히 손을 흔든다.',
      ]);
      era.println();
      await you.say_and_wait(
        '진정해, 착한 담당. 다음에는 따뜻할 때 먹어. 그리고 같이 밥을 먹고 싶은 것뿐이라면…… 아침에 깨우는 방법은 알고 있잖아.',
      );
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 주머니를 만지며 얼굴을 붉히고 ',
        you.get_colored_name(),
        '의 엉덩이를 가볍게 찬다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 엉덩이를 문지르며 옷장을 열고 잠옷 단추를 푼 뒤 눈에 띄지 않는 체크 셔츠를 꺼내 갈아입는다.',
      ]);
      await era.printAndWait([
        teio.sex,
        '은(는) ',
        you.get_colored_name(),
        '이(가) 옷을 다 갈아입는 것을 지켜본 뒤 ',
        you.get_colored_name(),
        '와(과) 함께 방을 나선다.',
      ]);

      await era.printAndWait('🎶And dance with the big boys again🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한 손으로 식탁보를 깔고 다른 손으로 스크램블에그와 소시지 접시를 놓은 뒤 자신의 식기를 정리하고 냅킨을 허벅지 위에 반듯하게 펼친다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 갓 짠 오렌지주스를 한 모금 마시고 ',
        teio.get_colored_name(),
        '의 씹는 소리를 들으며 먹는다. 그리고 ',
        you.get_colored_name(),
        '은(는) 달걀을 잘라 포크로 ',
        teio.get_colored_name(),
        '의 입가로 가져간다.',
      ]);
      era.println();
      await you.say_and_wait('간이 맞는지 먹어봐.');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        '은(는) 한입에 삼키고 씹으면서 고기를 한 조각 잘라 포크로 ',
        you.get_colored_name(),
        '의 앞에 내민다.',
        you.get_colored_name(),
        '은(는) 몸을 숙여 포크를 물고 고기를 입 안으로 가져간다.',
      ]);
      era.println();

      era.printButton('「음, 더 먹어. 건강과 성장에 좋아.」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 탁자 아래 발끝이 ',
        teio.uma_sex_title,
        '에게 가볍게 밟힌다.',
      ]);

      await era.printAndWait("🎶It's a strange, strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '서로 알고 가까워진 뒤 지금까지 얼마나 지났을까. 3년, 5년은 되었을지도 모른다. 하지만 두 사람 모두 그런 것은 신경 쓰지 않는 듯하다.',
      ]);
      era.println();
      await era.printAndWait([
        '어쨌든 트레센도 레이스도, 과거의 모든 것은 이미 끝났다.',
      ]);
      era.println();
      await era.printAndWait([
        '두 사람의 생활에서는 그런 화제를 일부러 피한다——다만 ',
        teio.sex,
        '이(가) ',
        you.get_colored_name(),
        '을(를) 부르는 이름은 진작 ',
        you.get_colored_actual_name(),
        '로 바뀌었는데도 ',
        you.get_colored_name(),
        '은(는) 무의식적으로 ',
        teio.sex,
        '을(를) 자신의 담당이라고 부르고 ',
        teio.sex,
        '도 그 점에는 별다른 이견이 없는 듯하다.',
      ]);
      era.println();
      await era.printAndWait([
        teio.sex,
        '이(가) 다리를 다친 뒤 두 사람은 여러 노력을 했지만 그래도 ',
        teio.sex,
        '의 ',
        teio.uma_sex_title,
        '로서의 선수 생활은 구하지 못했고, 재기 후 연패 속에서 허무하게 은퇴했다.',
      ]);
      await era.printAndWait(
        '꽃도 박수도 없이 가장 조용한 방식으로 그 세계에서 물러났다.',
      );
      await era.printAndWait([
        teio.sex,
        '을(를) 돌보기 위해서인지 (아니면 단지 놓치고 싶지 않았던 것인지), ',
        you.get_colored_name(),
        '도 퇴직을 신청하고 트레센의 도움으로 ',
        teio.sex,
        '와(과) 조용한 마을에 두 사람의 새 집을 마련했다.',
      ]);

      await era.printAndWait('🎶Such a shame, shame, shame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await teio.say_and_wait('응…… 아까 사는 걸 깜빡한 게 있어.');
      era.println();
      await era.printAndWait([
        '늦은 아침 식사를 마치고 ',
        you.get_colored_name(),
        '와(과) ',
        teio.sex,
        '은(는) 주방에서 식기를 씻는다.',
        teio.sex,
        '이(가) 정리하다 발끝을 세워 냉장고를 열었을 때 갑자기 그런 말을 꺼낸다.',
      ]);
      era.println();
      await you.say_and_wait('응? 그럼 이따 같이 한 번 더 갈까?');
      era.println();
      await teio.say_and_wait('응——');
      era.println();
      await era.printAndWait([
        '갑자기 집의 다른 방에서 소리가 난다. 두 사람은 눈을 마주친 뒤 ',
        teio.sex,
        '은(는) 문 밖으로 사라진다. 1분도 지나지 않아 다시 ',
        you.get_colored_name(),
        '의 앞에 돌아온다.',
      ]);
      era.println();
      await teio.say_and_wait('창고 천장이 새는 것 같아. 일부가 떨어져 있었어.');
      era.println();

      era.printButton('「이따 고칠게. 너는 장 보러 다녀와.」', 1);
      await era.input();

      await era.printAndWait([
        teio.sex,
        '은(는) 잠시 망설이고 ',
        you.get_colored_name(),
        '을(를) 바라본다.',
      ]);
      era.println();

      era.printButton(
        '「문제없어. 나한테 맡겨. 키가 안 닿으면 위쪽은 도와줄 수도 없고, 혼자면 충분해. 나눠서 하면 딱 맞게 끝날 거야.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 전 담당은 한참 고민한 끝에 고개를 끄덕이며 ',
        you.get_colored_name(),
        '의 생각에 동의한다.',
      ]);
      await era.printAndWait([
        teio.sex,
        '이(가) 집 앞에 서자 ',
        you.get_colored_name(),
        '은(는) 마지막으로 한 번 더 ',
        teio.sex,
        '의 옷을 정돈하고 꼬리와 귀를 가린 뒤 만족스럽게 손뼉을 치고, 가볍게 입맞춘 뒤 작별을 고하며 문을 연다.',
      ]);
      await era.printAndWait([teio.sex, '은(는) 바깥세상으로 걸어간다.']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 문을 닫고 창문으로 ',
        teio.sex,
        '의 그림자가 멀어지는 것을 지켜본 뒤 숨을 내쉬고 커튼을 치고 돌아서 작업에 착수한다.',
      ]);

      await era.printAndWait('🎶You got to carry the blame🎶', {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '한참 뒤 초인종이 ',
        you.get_colored_name(),
        '이(가) 망치와 못, 판자에 집중하던 주의를 깨뜨린다.',
      ]);
      await era.printAndWait([
        '最初 ',
        you.get_colored_name(),
        '은(는) 무시했지만 밖의 사람은 끈질겼고 끊이지 않는 소리는 ',
        you.get_colored_name(),
        '에게 스태미나 훈련이나 다름없어 결국 ',
        you.get_colored_name(),
        '은(는) 견디지 못하고 문 앞으로 가서 들여다보는 구멍으로——',
      ]);
      await era.printAndWait('우마 귀 한 쌍을 본다.');
      await era.printAndWait('갈색의 작은 삼각형 우마 귀다.');

      await era.printAndWait('🎶In this strange game🎶', {
        align: 'center',
        isParagraph: true,
      });

      await you.say_and_wait(
        ['위장이 들켰나?', teio.sex, '이(가) 급히 돌아온 건가?'],
        true,
      );
      await era.printAndWait([
        '초조해진 ',
        you.get_colored_name(),
        '은(는) 문을 열고, 이어 찾아온 것은——가슴의 격통이다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 숙이고서야 날카로운 칼날이 교묘하게 갈비뼈 사이를 지나 자신의 심장에 박혀 있음을 깨닫는다.',
      ]);
      era.println();

      await you.say_and_wait('윽……');

      await era.printAndWait(
        "🎶You're out on a limb and you're trying to gеt in🎶",
        {
          align: 'center',
          isParagraph: true,
        },
      );

      await era.printAndWait([
        '선홍색 피가 솟구치고 ',
        you.get_colored_name(),
        '의 생명력과 함께 몸 밖으로 흘러나간다.',
        you.get_colored_name(),
        '은(는) 느리게 눈을 깜빡이며 범인——어딘가 낯익은 ',
        teio.uma_sex_title,
        '——을(를) 눈에 담는다.',
      ]);
      era.println();
      await kita.say_as_unknown_and_wait([
        '네가……',
        k_call_t,
        '의 인생을 망가뜨렸어.',
      ]);
      await kita.say_as_unknown_and_wait([
        '자기 욕심 때문에 ',
        teio.sex,
        '의 두 다리 상태를 못 본 척하고, 약해진 틈을 타 ',
        teio.sex,
        '유일한 마음의 버팀목인 척하다니…… 이게 네 최후야!',
      ]);
      await kita.say_as_unknown_and_wait([
        '하지만 ',
        k_call_t,
        '……이미 너에게 너무 깊이 눈이 가려져 아무것도 못 해. 이 팬이 아이돌을 해방시키는 수밖에 없어! 이 기회를 계속 기다려 왔으니까!',
      ]);

      await era.printAndWait("🎶It's a strange game🎶", {
        align: 'center',
        isParagraph: true,
      });

      await era.printAndWait([
        '아아, ',
        kita.sex,
        '은(는) 의분에 불타 무언가 말하고 있는 듯하다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '에게는 이제 그 정보를 처리할 수단이 없다.',
      ]);
      await you.say_and_wait(
        '아쉽네…… 술도 담배도 끊지 못한 채 테이오를 기쁘게 해주지도 못했어.',
        true,
      );
      await era.printAndWait([
        '마지막 의식을 데리고 ',
        you.get_colored_name(),
        '은(는) 깊은 어둠으로 떨어져 영원히 눈을 감는다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] be_normal
  be_normal: (() => {
    const title = '허무한 끝';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait([
        teio.get_colored_name(),
        '와(과) 계약을 해지한 뒤 세간의 시선을 피해 조용함을 찾아 ',
        you.get_colored_name(),
        '은(는) 트레센을 떠나 다른 곳에서 다시 트레이너 일을 시작한다. 하지만 어째서인지 ',
        you.get_colored_name(),
        '이(가) 지도한 ',
        teio.uma_sex_title,
        '은(는) 다시는 뛰어난 성적을 내지 못했고 ',
        you.get_colored_name(),
        '의 상태도 능력도 ',
        teio.get_colored_name(),
        '와(과) 함께하던 시절의 수준으로 돌아오지 못했다……',
        you.get_colored_name(),
        '의 길은 이렇게 허무하게 막다른 곳에 이르렀고 ',
        you.get_colored_name(),
        '와(과) ',
        teio.get_colored_name(),
        '이(가) 한때 품었던 꿈도 결국 이루어지지 않았다.',
      ]);
      await era.printAndWait([
        '가슴에 무언가 빠져나간 듯한 ',
        you.get_colored_name(),
        '은(는) 변함없는 나날을 반복했고 일은 점차 짐이 되었으며 ',
        you.get_colored_name(),
        '은(는) 담배와 술을 기분 전환과 위안의 약으로 삼기 시작했다. 자신도 모르는 사이 ',
        you.get_colored_name(),
        '은(는) 처음의 이상을 잊고 의욕을 잃은 채 별다른 성과 없이 ',
        you.get_colored_name(),
        '의 후반 경력을 끝까지 걸어갔다……',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_arim_kin_h_s
  before_arim_kin_h_s: (() => {
    const title = '기적의 부활 (상)';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      era.printButton('「준비됐어?」', 1);
      await era.input();

      await teio.say_and_wait(
        '바랄게…… 이게 정말 전부 내 것이기를.',
      );
      era.println();

      await teio.say_and_wait(
        '여기서 너와 나, 그리고 우리를 지지해 준 모든 사람의 테이오 전설을 쓰고 싶어.',
      );
      era.println();

      await teio.say_and_wait(
        '꿈같은 이야기라는 건 알아. 하지만 꿈꾸기만 한다면 우리에게 무슨 의미가 있어?',
      );
      era.println();
      era.printButton(`「의미는 없지(웃음). 그래도 여기까지 왔잖아.」`, 1);
      await era.input();

      await teio.say_and_wait('그러네. 이제 곧 전부 손에 들어와.');
      era.println();

      era.printButton(`「좋아, 준비된 얼굴이네.」`, 1);
      await era.input();

      await teio.say_and_wait(
        '지난 1년 동안 우리는 전부 잃고, 얼마 안 되는 희망과 집착만 품은 채 계속 달려왔어——',
      );
      era.println();

      era.printButton(
        '「그러니까 필요한 건 이미 다 있어. 계속 달리는 것 말고 무슨 선택지가 있겠어.」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 입꼬리를 올리고 고개를 들어 ${you.name}과(와) 눈을 맞춘다——`,
      );
      if (era.get(`relation:3:0`) > 150) {
        await era.printAndWait(
          `${teio.sex}은(는) 두 손을 뻗어 ${you.name}이(가) 펼친 손바닥 위에 올려놓는다. ${you.name}은(는) 담당의 손을 가볍게 잡고, 따뜻한 감촉과 함께 손끝으로 ${teio.teen_sex_title}의 건강하고 탄력 있는 피부와 그 아래 조금 빠르게 뛰는 맥박을 느낀다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 사파이어처럼 맑은 ${teio.sex}의 눈 속에서 ${teio.teen_sex_title}의 끈기와 신념, 소망이 자신의 눈에 비치는 것을 본다. ${you.name}도 웃는다. 하지만 눈가가 조금 젖었다.`,
        );
        era.println();

        era.printButton('「가. 네 이름을 하늘에 울려 퍼지게 해.」', 1);
        await era.input();

        await teio.say_and_wait('반드시.');
        era.println();

        await era.printAndWait(
          `땅을 딛는 발소리가 작은 방에 울리고, ${teio.teen_sex_title}은(는) 멋지게 한 바퀴 돌아 손을 흔든 뒤 확실한 걸음으로 앞으로 나선다.`,
        );
      } else {
        await era.printAndWait(
          `두 사람은 말없이 주로 쓰는 손을 내밀어 느슨하게 주먹을 쥐고 맞댄다.`,
        );
        await era.printAndWait(
          `작은 몸에 숨어 있는 힘과 태양 같은 따뜻함이 맞닿은 면을 통해 전해진다. 서로 마주 보고 저도 모르게 둘 다 소리 내어 웃는다.`,
        );
        era.println();

        era.printButton('「행운을 빌게.」', 1);
        await era.input();

        await teio.say_and_wait('보고 있어. 내 달리기를.');
        await era.printAndWait(
          `${teio.sex}은(는) 팔을 거두고 깔끔하게 한 바퀴 돌아 햇빛 속으로 걸어간다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] bs_broken
  bs_broken: (() => {
    const title = '부러진 날개';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {TextContent} leg_hurt_notification 脚の怪我の通知
     */
    const f = async (teio, you, leg_hurt_notification) => {
      await era.printAndWait(
        `의사는 생명을 구하고 상처를 치료하기 위해 존재하며, 소중한 사람은 반드시 나아질 것이다——병실 문 앞에 선 사람은 흔히 그렇게 생각한다. 하지만 그 생각 중 얼마가 진실이고 얼마가 자기위안일까. 모든 이를 구할 수 있다면 의사가 있어도 세상에서 죽음과 부상이 사라지지 않는 이유는 무엇인가. 의사가 부족해서인가, 최선을 다하지 않아서인가. 아니…… 어쩌면 그저 자신의 운이 나빴던 걸까.`,
      );
      era.println();
      await era.printAndWait(
        `그렇게 생각하며 ${you.name}은(는) 무의식적으로 주로 쓰는 손으로 이마를 받치고 흰 가운을 입은 중년 남자를 멍하니 바라본다. 그의 입술이 움직인다——말하고 있나? 무슨 말을 하는 건가. 손에는 털의 감촉이 전해진다. 아니, 평소처럼 잘 정돈된 매끄러운 꼬리가 아니다. 안쪽에서부터 곤두선 듯 부풀어 손바닥이 간질거린다. ${you.name}은(는) 웃음이 날 것 같다. 이 아이는 달리다가 자신을 이렇게 만들어 놓고…… 나중에 제대로——`,
      );
      await era.printAndWait(
        `${you.name}은(는) 돌아서 애써 미소 지으며 담당을 바라본다. 그리고 생기 없는 두 눈이 ${you.name}의 생각을 현실로 끌어당긴다.`,
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '主治医',
        `${teio.actual_name_with_title}, 그리고 ${you.actual_name_with_title}, ${teio.sex}의 트레이너. 다시 한번 강조하겠습니다. 앞으로 달리는 것을 포기할 각오를 해 주십시오.`,
      );
      era.println();
      await era.printAndWait(
        '——어떤 도피도 결국 현실의 수레바퀴를 이길 수는 없다. 현실은 눈앞에 있고 받아들이는 것 외에는 길이 없다.',
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 주치의가 가느다란 금속 지시봉을 꺼내 다시 화면의 사진을 가리키는 것을 본다. 예전에 받아들이기 싫어 스스로 차단했던 기억과 지금의 영상이 겹친다. ${you.name}은(는) 그가 무슨 말을 했는지 전부 알고 있다. 「슬개골 탈구」「습관성 골절」「균열」「하퇴」…… 그래, 어느 부위인지도 ${you.name}은(는) 알고 있다. 어떤 상태인지도 이해하고 있다.`,
      );
      era.println();
      await era.printAndWait(
        `그럼에도 이런 일이 일어났다. ${you.name}은(는) 감정을 억누르고 자신을 그 자리에 붙잡아 둔다.`,
      );
      await era.printAndWait('꼬리가 움직인다. 떨어지려는 것처럼.');
      await you.say_and_wait(
        '나에게 실망했나. 상관없다. 트레이너로서 직무를 다하지 못했으니까.',
        true,
      );
      await era.printAndWait(
        `${you.name}은(는) 그렇게 생각하며 스스로 손을 조금 빼려 한다…… 실패한다.`,
      );
      era.println();
      await era.printAndWait(
        `힘에 비해 작은 손이 ${you.name}의 손바닥 위에 놓이고, 이어 다른 손이 아래에서 감싸 쥔다. 따뜻함과 함께 가벼운 떨림도 전해진다. 가까운 사람의 옷자락을 붙잡듯 ${teio.name}은(는) ${you.name}의 손을 당긴다. ${you.name}은(는) 길게 숨을 내쉬고 ${teio.sex}의 손을 마주 잡아 더는 놓지 않는다.`,
      );
      era.println();
      if (era.get('talent:3:身体素质') === 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          '은(는) 이제 [강건]하지 않다!】',
        ]);
      }
      if (era.get('talent:3:自信程度') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          '은(는) [자신 없음] 상태가 되었다!】',
        ]);
      }
      if (era.get('talent:3:淫乱') !== 1) {
        era.print([
          '【',
          teio.get_colored_name(),
          '은(는) ',
          {
            color: buff_colors[2],
            content: '[淫乱]',
          },
          ' 상태가 되었다!】',
        ]);
      }
      era.print(leg_hurt_notification);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] japa_cup_win_h_s
  japa_cup_win_h_s: (() => {
    const title = '再起';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 직접 담당을 레이스장으로 보내고 ${teio.sex}을(를) 격려한 뒤 관객석으로 돌아온다.`,
      );
      await era.printAndWait('옆자리는 텅 비어 있다.');
      await era.printAndWait(
        `${you.name}은(는) 한숨을 쉰다. 기자회견에 나타났던 그 테이오 팬들은 결국 오지 않았다.`,
      );
      await era.printAndWait(
        `하지만 상관없다고 ${you.name}은(는) 생각한다. 테이오가 꿈을 이루기만 하면 된다. 목을 돌려 다시 경기장으로 시선을 보낸다.`,
      );
      await era.printAndWait('하지만 전황은 이상적이지 않아 보인다.');
      await era.printAndWait(
        `한 덩어리가 된 ${teio.uma_sex_title} 무리는 경쟁이 치열해 테이오는 포위를 뚫지 못한다.`,
      );
      await era.printAndWait(
        `${you.name}의 손바닥은 어느새 땀으로 흥건하다.`,
      );
      era.drawLine();
      await era.printAndWait('트레이너 A「——이상이 다음 레이스의 출주마입니다.」');
      await era.printAndWait('행인 A「아쉽네…… 또 뽑히지 못했어.」');
      await era.printAndWait('팬 A「……아하하, 됐어. 어차피 못하니까.」');
      await era.printAndWait(
        '팬 A（젠장…… 나도 진지하게 아침 일찍부터 늦게까지 훈련했는데!）',
      );
      await era.printAndWait(`——${you.name}이(가) 팔고 있던 것은 꿈이었다.`);
      era.println();

      await era.printAndWait(
        '팬 B「또 혼났어…… 내 잘못도 아닌데 전부 내 탓이 돼.」',
      );
      await era.printAndWait(
        '팬 B「이제 됐어…… 게임이나 할까. 나도 잘하는 건 있으니까, 헤헤.」',
      );
      await era.printAndWait(
        `——${you.name}이(가) 팔고 있던 것은 꿈이었다. 누구나 손에 닿을 듯 닿지 못하고, 필요하다고 인정하지 않으면서도 마음은 그쪽으로 달려간다.`,
      );
      era.println();

      await era.printAndWait('팬 A「……아아.」');
      await era.printAndWait('팬 B「아무것도 없어……」');
      await era.printAndWait('——바로 지금이 사람이 꿈을 필요로 하는 때다.');
      era.println();

      await era.printAndWait(
        '팬 A「이제 됐어…… TV나 볼까…… 오늘 재팬컵이던가……」',
      );
      await era.printAndWait('팬 B「젠장…… TV로 레이스나 보자.」');
      await era.printAndWait(
        '——사람은 모든 것이 행복하고, 하늘은 노력에 보답하며, 노력은 결실을 맺고 신념은 어려움을 넘어설 수 있다는 이야기를 듣고 싶어 한다.',
      );
      era.println();

      await era.printAndWait(
        `팬 A「${teio.name}……? ${teio.sex}, 정말 나왔어?」`,
      );
      await era.printAndWait(`팬 B「${teio.sex}은(는)……」`);
      await era.printAndWait(`——${you.name}은(는) 그런 이야기를 써낼 수 있을까.`);
      era.drawLine();
      await era.printAndWait(`？？？「${you.elder_sibling_sex_title}」`);
      era.println();
      await era.printAndWait(
        `${you.name}이(가) 돌아보자 한 여성이 어딘가 낯익은 여자아이의 손을 잡고 ${you.name} 쪽으로 걸어온다.`,
      );
      era.println();
      await era.printAndWait(
        `여자아이「${you.elder_sibling_sex_title}? 기억해?」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 보고 기억을 떠올린다. 그때 ${you.name}과(와) 테이오가 처음 만났을 때 보았던 아이였다. 인사를 나눈 뒤 두 사람은 ${you.name} 옆에 앉아 함께 관전한다. 여자아이는 무척 흥분해 있다. 처음 와본 모양이다.`,
      );
      era.println();
      await era.printAndWait(
        `여자아이「${you.elder_sibling_sex_title}, 계속 테이오 ${teio.adult_sex_title}의 레이스를 보고 싶었어…… 지금까지 기회가 없었는데 이번에 드디어! 반에서 1등 하면 엄마가 상으로 데려와 주겠다고 했거든. 테이오 씨 정말 멋있어. ${teio.sex}, 반드시 1등이지!」`,
      );
      era.println();
      await era.printAndWait(
        `${you.name}은(는) ${teio.sex}의 얼굴을 보고 저도 모르게 웃는다.`,
      );
      era.printButton(`「그래, ${teio.sex}이라면 반드시.」`, 1);
      await era.input();
      era.drawLine();
      await teio.say_and_wait('最悪……', true);
      await era.printAndWait(
        `가장 자신 있는 선행이 전혀 살아나지 못하고, ${teio.uma_sex_title} 무리가 길을 막아 돌파는 꿈같은 이야기다.`,
      );
      await era.printAndWait('정말로…… 할 수 있을까.');
      era.println();
      await teio.say_and_wait('할 수 있어!', true);
      era.println();
      await era.printAndWait(
        `달리는 ${teio.uma_sex_title}들이 모였다 흩어진다. 좁게, 반 마신 정도의 틈이 드러난다——`,
      );
      era.println();
      await era.printAndWait(`실황「어, 저건——${teio.name}?!」`);
      era.println();
      await era.printAndWait(
        '종아리 근육이 한 번 이완됐다가 수축하며 힘을 뿜는다! 다리를 크게 들어 올리고 치솟는 먼지와 튀는 흙도 아랑곳하지 않고 힘껏 박차고 나간다!',
      );
      await era.printAndWait(`${teio.sex}만의 환상적인 보법.`);
      await era.printAndWait(`${teio.sex}만의 무보.`);
      await era.printAndWait('모두에게 위용을 보여주는——제왕무보!');
      era.println();
      await era.printAndWait(
        `실황「이게 가능한가요——환상 같은 광경, ${teio.name}, 빠져나왔습니다, ${teio.sex}이(가) 선두로——」`,
      );
      era.println();
      await era.printAndWait('찰나에 승부는 결정됐다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] op_rehabilitation
  op_rehabilitation: (() => {
    const title = '재활';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `큰 나무통에 따뜻한 물이 가득 차 있고, ${you.name}은(는) 담당의 맨다리를 잡아 천천히 물에 담근다.`,
      );
      await era.printAndWait(
        `혈자리를 노려 집고 누른다. 맑고 하얀 다리가 자극을 받아 붉게 달아오른다. ${you.name}은(는) 고개를 숙인 채 매일의 일을 이어간다.`,
      );
      await era.printAndWait(
        '의사와 상의해 세운 테이오의 두 다리를 회복시키는 계획은 매일 엄격하게 실행한다. 지금 하는 것은 매일 밤 마지막 단계다.',
      );
      await era.printAndWait(
        `겉보기에는 완벽한 ${teio.teen_sex_title}의 두 다리를 보며 ${you.name}은(는) 역시 가슴이 아프다. 안쪽의 상처는 이제 쉽게 낫지 않는 것이겠지.`,
      );
      await era.printAndWait(
        '애초에 자신의 노력이 의미가 있는 걸까. 두 사람 모두를 위한 위안에 불과한 걸까.',
      );
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 의사가 비공개로 말해준 비슷한 증상의 ${teio.uma_sex_title}들을 떠올린다. ${teio.couple_title}은(는) 예외 없이 재기하지 못하고 은퇴를 택했다. 그렇다면 테이오는……`,
      );
      era.println();

      await teio.say_and_wait('트레이너.');
      era.println();

      await era.printAndWait(
        `평소보다 낮은 목소리가 피어오르는 열기를 가르고 ${you.name}의 귀에 닿는다.`,
      );
      era.println();

      await teio.say_and_wait(
        `나…… 바보 같은 질문이라는 건 알아. 그래도 ${you.name}의 입으로 듣고 싶어…… 지금 하고 있는 거, 정말 의미가 있어?`,
      );

      era.printButton('고개를 숙인다 (스태미나&근성&지능+15)', 1);
      era.printButton(
        '「두 사람의 신념은 반드시 보답받을 거야」 (스피드&파워+15, 호감+5, 의욕 상승)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 고개를 숙이고 대답하고 싶지 않거나, 혹은 대답할 수 없는 채 ',
          teio.uma_sex_title,
          '의 다리 관리만 계속한다',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sa_95_20_h
  sa_95_20_h: (() => {
    const title = '回帰';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('하아……');
      era.println();

      await teio.print_and_wait(
        `훈련 뒤 ${you.name}이(가) 학원 직원에게 불려 자리를 비우고, 테이오는 혼자 기숙사로 돌아간다. ${teio.sex}은(는) 학원 안뜰을 가로지르다 저도 모르게 발을 멈춘다.`,
      );
      era.println();

      await teio.print_and_wait(
        `${teio.uma_sex_title}의 눈에 구석의 속이 빈 나무줄기가 들어온다——`,
      );
      era.println();

      await teio.print_and_wait(
        '어떤 의미에서는 학원의 쓰레기통이다. 다만 담기는 것은 학원 사람들의 감정과 말이다.',
      );
      era.println();

      await teio.print_and_wait(
        '여기서 마음껏 큰 소리로 자신의 생각을 토해내는 것은 일종의 풍습이 되어 있다.',
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      await teio.print_and_wait(
        `정신을 차리니 ${teio.sex}은(는) 나무 구멍 앞에 서 있었다.`,
      );
      era.println();

      await teio.say_and_wait(`나…… (포기하고 싶어)`);
      era.println();

      await teio.print_and_wait(
        '입 밖까지 나왔지만 뱉어내는 것이 이렇게 어려운 일인지 깨닫는다. 입으로 말하면 스스로 인정하는 셈이라 두려운 걸까. 인정하면 돌이킬 수 없는 현실이 되는 걸까.',
      );
      era.println();

      await teio.print_and_wait(
        '하지만 현실은 현실이다. 주관적으로 거부한다고 부정할 수는 없다.',
      );
      era.println();

      await teio.say_and_wait('나, 정말로——');
      era.println();

      await era.printAndWait('(?)「너 정말 잘했어. 수고했어.」');
      era.println();

      await teio.say_and_wait('?! 트레이너?');
      era.println();

      await era.printAndWait(
        `(?)「네 선택은 옳았어. 자신감을 가져. 이미 큰일을 해냈잖아, 망설이며 되돌아가려는 거야? 괜찮아, 함께 있을게.」`,
      );
      era.println();

      await era.printAndWait('(?)「이제부터 마음껏——」');
      era.println();

      await teio.say_and_wait('누구야!');
      era.println();

      await era.printAndWait('(?)「모르겠어? 테이오.」');
      era.println();

      await era.printAndWait(
        `(?)「어제도, 그전 며칠 동안도 나는 이렇게 말했어. 너는 이미 충분히 했어——이제 쉴 때야.」`,
      );
      era.println();

      await era.printAndWait(
        `(?)「후후, 후회는 없잖아. 한마디만 하면 함께 있을게. 그리고 우리는——」`,
      );
      era.println();

      await teio.say_and_wait('——시끄러워.');
      era.println();

      await teio.say_and_wait('너는 내 트레이너가 아니야!');
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}은(는) 저도 모르게 큰 소리로 외쳤고 눈앞의 환영은 멀어지지만 목소리는 멈추지 않는다. 머릿속에서 다시 말들이 거세진다.`,
      );
      era.println();

      await teio.print_and_wait([
        teio.get_colored_name(),
        `(?)「남들이 뭐라고 하든 지난 몇 년의 경험은 네 자산이야. ${you.name}의 달리기를 보고 인생이 바뀐 사람도 적지 않아. ${you.name}은(는) 이미 전설이라고!」`,
      ]);
      era.println();

      await teio.say_and_wait(`무슨 소리 하는 거야!!`);
      era.println();

      await teio.print_and_wait(
        `${teio.teen_sex_title}은(는) 주먹을 쥐고 온몸을 떨며 힘껏 외친다.`,
      );
      era.println();

      await teio.say_and_wait(
        '나는 전설이 된 적 따위 한 번도 없어! 무엇 하나 완전히 해낸 적도 없어! 내가 남긴 후회는 셀 수조차 없어! 애초에 진짜 나도 트레이너도 이런 말은 절대로 하지 않아! 너는 그저 부끄럽고 슬픈 자기연민의 그림자일 뿐이야! 스스로를 위로하는 변명 따위 받지 않아! 결국 재기해서 결과가 안 나올까 봐 무서운 것뿐이잖아! 몰라! 나는 달리고 싶어! 명예의 전당에 들어가서 거기서 더 큰 흥분과 기쁨을 얻을 거야!',
      );
      era.println();

      await you.say_and_wait('테이오?');
      era.println();

      await teio.say_and_wait('아직——응?');
      era.println();

      era.printButton('「어, 응. 방금 돌아온 참이라 아무것도 못 봤어.」', 1);
      await era.input();

      await teio.say_and_wait('……흥.');
      era.println();

      await era.printAndWait(`한 줄기 미소가 ${you.name}의 담당 입가에 피어난다.`);
      era.println();

      await teio.say_and_wait(
        `알고 있어도 괜찮아. 트레이너, 방금 한 말 전부 진심이야. 우리——앞으로 나아가자.`,
      );
      era.println();

      era.printButton(
        `「다시 태어난 무적의 테이오 ${teio.adult_sex_title}와 동행할 수 있다니 영광입니다.」`,
        1,
      );
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_143_5_h
  we_143_5_h: (() => {
    const title = '어둠에서 빛으로';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 길을 걸으며 조금 땀에 젖은 셔츠가 상체에 달라붙는 것을 느낀다.`,
      );
      await era.printAndWait(
        `조금 앞을 걷는 것은 ${you.name}의 담당 토카이 테이오다. ${teio.sex}은(는) ${you.name}의 손을 잡고 ${teio.uma_sex_title}치고는 조금 느리지만 ${you.name}에게는 운동이 될 만한 속도로 걷는다. 손바닥이 맞닿아 가끔 가볍게 흔들린다. 하늘 끝의 잔광이 이마에 내려앉고, ${you.name}은(는) 대리석처럼 매끈한 길을 밟으며 앞을 바라보다 옅은 금빛이 ${teio.sex}의 흰 앞머리를 스치는 모습을 본다.`,
      );
      await era.printAndWait(
        `계단 한 층 앞에서 ${teio.sex}이(가) 발을 멈추고 ${you.name}도 멈춰 눈앞의 풍경을 바라본다.`,
      );
      await era.printAndWait(
        '황혼 아래 대지는 지는 해의 마지막 빛을 빌려 몸을 감싸며 한 장의 천을 두른 듯하다. 점점이 박힌 금빛 실이 굴곡을 따라 흐른다. 눈은 더 이상 빛을 반사하지 않고, 막 고개를 내민 초록 새싹이 탐욕스럽게 에너지를 빨아들인다.',
      );
      await era.printAndWait('봄이 온다.');
      await era.printAndWait(`두 사람의 꿈도 끝났다.`);
      await era.printAndWait('말해야 할 때다……');
      era.println();

      era.printButton('「이 순간을 너무 오래 기다렸어——우리 둘 다 마찬가지야.」', 1);
      await era.input();

      await teio.say_and_wait('그러네.');
      era.println();

      await teio.say_and_wait(
        '천황상(봄) 때 무서웠던 게 기억나——몸의 상처나 병 때문이 아니라——처음 품었던 소원이 영원히 물거품이 될지도 모른다고 생각했기 때문이야.',
      );
      await teio.say_and_wait(
        '가장 끔찍했던 건…… 그 두려움이 정말 현실이 된 거야.',
      );
      era.println();

      await era.printAndWait(
        `저무는 해를 앞에 두고 ${teio.teen_sex_title}은(는) 두 팔을 벌려 몸을 펴고 천천히 말한다. 빛이 떨어지고 ${teio.sex}의 그림자가 ${you.name}의 얼굴에 닿는다. ${you.name}은(는) 침묵하며 지난 일들이 머릿속에 떠오른다. ${teio.sex}이(가) 밑바닥으로 떨어지고, 길을 잃고, 험한 길을 걷는 것을 보면서도 ${you.name}은(는) 손쓸 수 없었고, 환상에서 만들어낸 희망만 품은 채 이를 악물고 ${teio.sex}와 함께 버텼다.`,
      );
      await era.printAndWait('타협하지 않는다. 포기하지 않는다.');
      era.println();

      await teio.say_and_wait(
        '하지만 나는——우리는 버텼어. 지금 곁에 네가 있고, 빛이 있고, 사람이 있고, 꿈이 있어.',
      );
      era.println();

      await teio.say_and_wait(
        '우리가 믿었던 것이——지금 진짜가 되었으니까.',
      );
      era.println();

      era.printButton('「테이오.」', 1);
      await era.input();

      await teio.say_and_wait('왜?');
      era.println();

      era.printButton('「너는…… 믿고 있어?」', 1);
      await era.input();

      await era.printAndWait(
        `${teio.uma_sex_title}은(는) 바로 ${you.name}에게 답하지 않고 석양을 향해 고개를 숙였다가 꼬리를 가볍게 흔들고 돌아서 웃는다.`,
      );
      era.println();

      await teio.say_and_wait('계속, 의심한 적 없어.');
      era.println();

      await era.printAndWait(
        `그리고 ${teio.sex}의 마음을 움직이는 웃음이 이어지고 ${you.name}도 저도 모르게 웃는다. 두 사람은 손을 맞잡고 다시 앞으로 나아간다.`,
      );
      await era.printAndWait(`두 사람의 이야기는 아직 계속된다.`);
      era.println();
      if (era.get('talent:3:自信程度') === 1) {
        era.print([teio.get_colored_name(), '은(는) 이제 [자신 없음] 상태가 아니다!']);
      }
      era.print([
        teio.get_colored_name(),
        '의 ',
        {
          color: buff_colors[3],
          content: '[脚部負傷]',
        },
        '이(가) 치유되었다!',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_95_17_h
  we_95_17_h: (() => {
    const title = '의지';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('비 오는 밤, 고요해 아무 소리도 없다.');
      await era.printAndWait(
        `${you.name}은(는) 혼자 기숙사에서 화면의 자료를 바라보며 생각나는 대로 메모하고 담당 ${teio.uma_sex_title}의 다음 단계 계획을 수정한다. 사실 이 일은 이미 오래전에 끝났다. 어째서인지 ${you.name}은(는) 일을 한밤중까지 끌고 있다. 가슴속 답답함을 덜기 위해서일까. 기계적인 노동으로 현실에서 도망치기 위해서일까.`,
      );
      await era.printAndWait(
        `키보드를 두드리는 소리가 점점 신경을 긁으며 고막에서 뇌로 흘러든다. ${you.name}은(는) 탁 하고 화면을 닫고 두 손으로 관자놀이를 가볍게 주무르며 눈을 감고 깊게 숨을 들이쉰 뒤 길게 내쉰다.`,
      );
      await era.printAndWait('……소리는 멈추지 않았다.');
      await era.printAndWait(
        `${you.name}은(는) 잠시 멍해졌다가 재빨리 현관으로 달려가 문구멍을 한 번 보고 문을 연다. 초인종의 여운이 남은 채 문이 열린다. 짙은 어둠 한가운데 온몸이 흠뻑 젖은 ${teio.uma_sex_title}이(가) ${you.name} 앞에 서 있다. 빗물이 우비를 타고 흐르고, 길게 뻗은 흰 앞머리는 물방울의 무게로 콧등 위에 내려앉았다가 가볍게 털려나간다. ${teio.sex}이(가) 후드를 올리는 동작과 함께 ${you.name}은(는) 짙푸른 두 눈을 본다.`,
      );
      await era.printAndWait(
        `이 순간 ${you.name}은(는) 근거 없는 확신을 품는다——오늘 밤 내내 ${teio.sex}을(를) 생각하며 ${teio.sex}을(를) 기다리고 있었다고.`,
      );
      await era.printAndWait(
        `가슴의 짐이 내려간 안도감과 약간의 짜증을 함께 느끼며 ${you.name}은(는) 한마디도 하지 않고 몸을 비켜 ${teio.sex}을(를) 안으로 들인다.`,
      );
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}은(는) 아무 말 없이 소파에 앉고, ${you.name}이(가) 김이 나는 수건을 머리에 덮어 닦아주는 대로 몸을 맡긴다. ${you.name}은(는) 몇 번이나 입을 열려 하지만 속삭임 같은 중얼거림만 나와 결국 포기한다. 사람과 우마는 묘한 침묵에 잠긴다.`,
      );
      await era.printAndWait(
        `설령 ${you.name}이(가) 트레이너가 아니더라도 ${teio.uma_sex_title}${teio.teen_sex_title}이(가) 무너지기 직전이라는 건 한눈에 알 수 있다.`,
      );
      await era.printAndWait(
        `${teio.sex}은(는) 생기 없이 그 자리에 앉아 두 손을 모은다. 기도하는 것이 아니라 의지할 것을 찾듯 이마를 두 손에 댄다. 이 ${teio.teen_sex_title}은(는) 조용한 어둠 속에 틀어박혀 모든 빛과 소리를 거부하는 듯해, ${you.name}은(는) ${teio.sex}이(가) 정말 여기에 있는지 걱정될 정도다.`,
      );
      await era.printAndWait(`——그래, ${teio.sex}은(는) 분명 여기에 있다.`);
      await era.printAndWait(
        `허리로 전해지는 감촉이 ${teio.sex}의 존재를 현실에 고정한다. 꼬리 하나가 살며시, 조심스럽게 ${you.name}에게 감겨 익사하는 사람이 유일한 구명줄을 붙잡듯 ${you.name}의 몸을 세게 감싼다.`,
      );
      era.printButton('「테이오……」', 1);
      await era.input();
      await era.printAndWait(
        `목소리는 없다. ${teio.teen_sex_title}의 희미한 떨림만이 ${you.name}에게 대답하는 듯하다.`,
      );
      era.println();

      await you.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}의 이런 얼굴은 본 적이 없다. 평소 매끄럽게 정돈된 털은 흐트러져 있고, 두 눈은 생기 없이 어두우며, 한층 작아 보이는 몸이 호흡과 맥박에 맞춰 떨린다. ${you.name}은(는) 다시 한번 ${teio.sex}의 이름을 부른다. 아까보다 조금 크게, 하지만 너무 울리지 않게. 이번에는 반응이 있다. 갑자기 ${teio.name}은(는) 힘차게 고개를 들어 ${you.name}을(를) 바라보고 확인하듯 눈을 깜빡인다.`,
      );
      await era.printAndWait('그리고 달려든다.');
      await era.printAndWait(`작은 몸이 ${you.name}의 품에 안긴다.`);
      era.println();

      await teio.say_and_wait(`——`);
      era.println();

      await era.printAndWait(
        `흐느낌도 눈물도 없다. 하지만 분명 ${teio.sex}은(는) 그 충동에 저항하고 있다.`,
      );
      await era.printAndWait(
        `마음이 조금이라도 무너지면 ${teio.sex}에게 남은 저항도 사라질 것이다. ${teio.teen_sex_title}은(는) 울기 시작해 끝없이 계속 울게 될 것이다.`,
      );
      await era.printAndWait(
        `그건 ${teio.name}이라는 ${teio.uma_sex_title}의 붕괴를 뜻한다.`,
      );
      await era.printAndWait(
        '상식적으로 말하면 마음이 다쳤다면 실컷 울어도 된다. 분명 그렇다. 눈물에는 큰 효능이 있어 고민을 씻어내고 아무리 큰 고통도 완화한다.',
      );
      await era.printAndWait('울고 나면 사람은 다시 현실과 마주할 활력을 얻는다.');
      await era.printAndWait(
        `하지만——${teio.name}이라는 ${teio.uma_sex_title}에게 지금은 그것조차 선택할 수 없는 방법이다.`,
      );
      await era.printAndWait(
        `여기서 ${you.name}에게 기대 울어버리는 건 책임에서 도망치는 것 아닐까.`,
      );
      await era.printAndWait(
        `데뷔 때부터 클래식 삼관을 내걸고 누구와도 비교할 수 없는 목표를 세운 ${teio.uma_sex_title}이(가), 스스로 짜고 자신에게 가장 잘 맞는다고 믿은 천부적인 주법으로 쓰러졌다. 마지막에는 자신의 고집으로 신뢰하는 트레이너(${you.name})에게 책임까지 지게 했다. 이런 상황에서 울 자격이 있을까. ${you.name} 곁에서 감정을 쏟아내고 다시 ${you.name}에게 ${teio.sex}을(를) 떠받쳐 달라고 할 셈인가.`,
      );
      await era.printAndWait(
        `지금 여기서 눈물을 흘리고 모든 것에서 도망치는 것이 ${teio.name}에게는 행복할지도 모른다. 하지만 그렇게 되면 끈질기게 버티며 자신감을 품고 세상에 존재를 증명해 온 그 ${teio.uma_sex_title}은(는) 패배한 채 퇴장하게 된다.`,
      );
      await era.printAndWait(
        `그래서 ${teio.teen_sex_title}은(는) ${you.name}의 품에 기대 입술을 깨물고 눈을 꼭 감은 채 어딘가 우스꽝스러울 정도로 몸을 떤다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 부드럽게 ${teio.uma_sex_title}의 등을 쓰다듬으며 ${teio.sex}을(를) 진정시키려 한다.`,
      );
      await era.printAndWait(
        `온기가 두 사람 사이를 오간다. 작은 태양처럼 ${you.name}의 몸과 마음을 덥혀주던 담당이 지금은 반대로 ${you.name}에게 따뜻함을 받고 있다.`,
      );
      era.println();
      await teio.say_and_wait('……트레이너.');
      era.println();
      await era.printAndWait(
        `${you.name}은(는) 습관처럼 손가락으로 천천히 ${teio.sex}의 털을 정돈하며 무의식적으로 응, 하고 대답한다.`,
      );
      era.println();
      await teio.say_and_wait(
        '나…… 무슨 말을 해야 할지, 어떻게 해야 할지 이제 모르겠어.',
      );
      await era.printAndWait(`${you.name}은(는) 침묵으로 답하고 손의 움직임이 느려진다.`);
      era.println();
      await teio.say_and_wait('지금 내게 남은 건…… 너뿐이야.');
      era.println();
      await era.printAndWait(
        `자랑하던 두 다리도, 꿈을 짊어진 두 날개도 모두 ${teio.teen_sex_title}의 몸에서 사라졌다.`,
      );
      era.println();
      await teio.say_and_wait('원해. 네 그 마음의 힘을.');
      era.println();
      await you.say_and_wait('그런 거라면 줄게.');
      era.println();
      await teio.say_and_wait('그럼…… 내 것도 받아줘.');
      era.println();
      await era.printAndWait(
        `가느다란 손가락이 조심스럽게 ${you.name}의 옷깃 안으로 들어와 쇄골을 따라 가슴 쪽으로 내려가고, ${you.name}은(는) 피부가 순간 움츠러드는 것을 느낀다.`,
      );
      await era.printAndWait(`${you.name}은(는) 결심한다——`);
      era.printButton(`${teio.sex}을(를) 밀어내고 일어선다.`, 1);
      era.printButton('고개를 끄덕인다.', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) ${teio.sex}의 양어깨를 받쳐 몸으로 대답을 보여준다. 그리고 택시를 불러 ${teio.sex}을(를) 학원까지 데려다주며 가는 동안 아무 말도 하지 않았다——아니면 ${you.name}이(가) ${teio.sex}의 얼굴을 마주할 수 없었을 뿐일지도 모른다.`,
        );
      } else {
        await era.printAndWait(
          `망설임. ${teio.sex}이(가) 암시하는 말 밖의 의미에서 ${you.name}은(는) 단순한 기쁨을 느낀다. 흥분도 함께.`,
        );
        await era.printAndWait(
          `하지만 이 격정에 몸을 맡겨도 되는 걸까. 그걸로 정말 이 ${teio.teen_sex_title}을(를) 구할 수 있을까.`,
        );
        await era.printAndWait(
          `——그렇다 해도 ${you.name}은(는) 이미 모든 것을 ${teio.sex} 자신의 결정에 맡기기로 정하지 않았던가.`,
        );
        await era.printAndWait(
          `그 결정이 ${teio.sex} 자신의 것이라면 ${you.name}이(가) 해야 할 일은——${teio.sex}의 결정을 존중하는 것뿐일 것이다.`,
        );
        era.println();

        await you.say_and_wait(
          '나는 그렇게 다정한 사람은 아닐지도 모른다.',
        );
        era.println();

        await teio.say_and_wait('괜찮아…… 나, 응읏!');
        era.println();
        await era.printAndWait(
          `${you.name}은(는) ${teio.sex}의 턱을 들어 올리고 ${teio.sex}의 입술에 입맞춘다. 예의라기보다 ${teio.sex}의 마음을 조금 누그러뜨리기 위해서다.`,
        );
        await era.printAndWait(
          `하지만 그 행동은 ${you.name}의 깊은 곳에 숨어 있던 것을 풀어놓는다.`,
        );
        await era.printAndWait(
          `뜨겁고 부드러운 감촉으로 ${you.name}은(는) ${teio.uma_sex_title}의 맛을 느낀다. 사람을 빠져들게 할 만큼 강한 매력이 ${you.name}의 욕망을 끌어낸다.`,
        );
        await era.printAndWait(
          `${teio.sex}을(를) 아래로 눌러 몸을 지배하고 싶은 충동——거스를 수 없는 파도가 이 순간 솟아올라 심장에서 사지 끝까지 퍼진다.`,
        );
        await era.printAndWait('정신의 일부가 짐승으로 변하고 있다.');
        await era.printAndWait(
          `${you.name}의 변화를 느낀 것인지 품 안의 ${teio.name}이(가) 떤다. 아랑곳하지 않고 ${you.name}은(는) 시작한 행동을 이어간다——혀를 내밀어 ${teio.teen_sex_title}의 입술을 벌리고 안으로 들어간다.`,
        );
        await era.printAndWait(
          `매끄러운 이에서 탄력 있는 잇몸까지 핥는다. 혀가 ${teio.teen_sex_title}의 윗입술을 감싸 안쪽을 훑는다.`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title}을(를) 대하는 올바른 방식이라고 하기는 어렵다. 하지만 그렇게 하고 싶은 충동을 억누를 수 없다.`,
        );
        await era.printAndWait(
          `${teio.name}은(는) 분명 겁먹었을 것이다. 하지만 ${teio.sex}은(는) 순순하다. 거스르지도 피하지도 않고 얌전히 몸을 ${you.name}에게 맡긴다.`,
        );
        await era.printAndWait(
          `그 태도가 ${you.name}의 야성을 더욱 불태운다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 얼굴을 가까이 대고 담당과 입술과 혀를 맞대며 두 사람의 입안에서 타액이 뒤섞인다. 거칠게 입안을 파고드는 접촉에도 작은 우마는 떨면서 물러서지 않고 혀를 내밀어 ${you.name}에게 얽힌다.`,
        );
        await era.printAndWait('피가 끓어오른다. 뇌는 사고 기능을 잃는다.');
        await era.printAndWait(
          `${teio.teen_sex_title}의 가느다란 혀는 속수무책으로 휘둘린다. 지나친 거칠음에 눈에 눈물이 맺히고——물방울이 맞닿은 입술 위로 떨어져 예상하지 못한 난폭한 대우를 받았다는 사실을 드러낸다.`,
        );
        era.println();

        await era.printAndWait('——몹시 달다.');
        await era.printAndWait(`${you.name}의 깊은 곳이 만족의 포효를 올린다.`);
        await era.printAndWait(`그저 ${teio.sex_slave_title} 하나일 뿐이다.`);
        await era.printAndWait(
          `그 생각이 떠오른 순간 ${you.name}에게 남아 있던 「교사로서의 체면」은 더욱 흔적을 감춘다.`,
        );
        await era.printAndWait(
          `입술이 일정한 리듬으로 빨아들이고 살과 살 사이 좁은 틈에서 스며나오는 액체를 삼킨다. 야릇한 소리가 울린다. 힘을 잃고 ${you.name}에게 반쯤 안긴 ${teio.teen_sex_title}의 몸이 갑자기 뜨거워진다——수치심 때문일 것이다.`,
        );
        await era.printAndWait(`그것이 ${you.name}의 욕망을 더욱 부추긴다.`);
        await era.printAndWait(
          `${you.name}은(는) 계속 입안을 독점해 ${teio.name}의 입이 마를 때까지 이어간다. 아니, 아직 부족하다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) ${teio.teen_sex_title}의 혀에 얽혀 자신의 입 안에 붙잡아둔다. 가볍게 깨물어 상대의 움직임을 막는다.`,
        );
        await era.printAndWait(
          `자신을 어떻게 할 셈인지, ${teio.sex}은(는) 굳은 몸을 움츠리며 ${you.name}에게 말없는 질문을 던진다.`,
        );
        await era.printAndWait('——후후.');
        await era.printAndWait('말할 것도 없겠지.');
        await era.printAndWait(
          `충동은 멈추지 않는다. 멈출 리도 없다. 마지막 장식처럼 ${you.name}은(는) 혀끝으로 끈질기게 ${teio.name}의 혀 안쪽——가늘고 부드러운 그 영역——을 문지른다.`,
        );
        era.println();

        await teio.say_and_wait(`——으앗!`);
        era.println();

        await era.printAndWait(
          `이 깊은 곳까지 침범당했다는 걸 깨닫고 ${teio.teen_sex_title}은(는) 당황한다. ${teio.sex}은(는) 어찌할 바를 몰라 무의식적으로 빠져나오려 하지만 ${you.name}이(가) 두 팔을 강하게 조이며 저항하지 말라는 뜻을 보이면 조용해진다…… 두 눈에는 두려움과 당혹감, 그리고 그런 감정조차 신경 쓸 여유가 없는 표정이 비친다.`,
        );
        await era.printAndWait(
          '평소에는 한결같고 어린애 같은 담당이 지금은 부서질 듯 부드러운 덩어리처럼 웅크리고 있다.',
        );
        era.println();

        await you.say_and_wait('너도 그런 눈을 할 줄 아는구나!', true);
        era.println();

        await era.printAndWait(
          `마음속에서 목소리가 치솟는다. 이렇게 강압적으로 한 명의 ${teio.uma_sex_title}을(를) 제압하는 일이 ${you.name}을(를) 도취시킨다. ${you.name}은(는) 자신을 잊고 입 안에서 자신의 것이 된 부드러운 감촉을 빨아들이며 ${teio.sex}의 체액을 탐한다.`,
        );
        await you.say_and_wait(
          '네 탓이야. 우리를 지금 이렇게 만든 건.',
          true,
        );
        await you.say_and_wait(
          '네 고집과 내 응석 받아주기가 이 비참한 결말을 불러왔어.',
          true,
        );
        await you.say_and_wait('그러니 대가는 받아가겠어.', true);
        await era.printAndWait(
          `${teio.name}이(가) ${you.name}의 등에 두른 손은 힘없이 쓰다듬기만 한다. 손끝은 저항하지 않은 채 용서를 구하는 듯하다.`,
        );
        await era.printAndWait('상관없다.');
        await era.printAndWait(
          `갑자기 ${teio.teen_sex_title}은(는) 심하게 떤다. 피부가 열에 들뜬 듯 뜨거워진다.`,
        );
        await era.printAndWait(
          `${you.name}의 손 안에서 강하게 자극받은 반응이다.`,
        );
        await era.printAndWait(`……절정에 이른 것이겠지.`);
        await era.printAndWait(
          `그 지극히 노골적인 단어가 ${you.name}의 가슴에서 낮게 울린다.`,
        );
        await era.printAndWait(`계속한다. 아직 한참 부족하다.`);
        await era.printAndWait(
          `${teio.name}도 그렇게 생각하고 있을 것이다. 옷이 전부 벗겨지기 전에 멈추는 건 ${teio.sex}이(가) 원하는 바가 아니다.`,
        );
        await era.printAndWait(
          `${teio.sex}은(는) ${you.name}에게 이렇게 해달라고 말했다. ${you.name}이(가) 지금 하는 것은 자신의 욕망을 채우거나 감정을 풀기 위한 것이 아니라 ${teio.teen_sex_title}의 마음을 따르는 것뿐이라고 스스로 여긴다.`,
        );
        await era.printAndWait('그렇다면 다음 단계로 가자.');
        await era.printAndWait(
          `${teio.teen_sex_title}의 시선은 흩어져 초점을 잡지 못하고, ${you.name}은(는) ${teio.sex}의 시선 속에서 두 손을 ${teio.sex}의 옷으로 뻗는다.`,
        );
        await era.printAndWait(
          `${teio.teen_sex_title}의 몸은 이미 충분히 뜨거워져 예전과 같다.`,
        );
        await you.say_and_wait(`${teio.name}——역시 그런 여자였어!`, true);
        await era.printAndWait(
          `머릿속이 검은 생각으로 가득 차고 ${you.name}은(는) 입을 비틀며 ${teio.sex}의 피부에 손을 댄다. 혀를 내밀어 목덜미에 입맞추고 땀을 핥는다. 기세대로 피부를 핥고 부드러운 살을 빨아——보기 흉한 자국을 남긴다.`,
        );
        era.println();
        await teio.say_and_wait('아아……');
        era.println();
        await era.printAndWait(
          `다시 작은 침범을 당하며 ${teio.teen_sex_title}은(는) 몽롱한 상태로 신음한다.`,
        );
        await era.printAndWait(
          `평소 그토록 자존심 높고 고집스럽게 레이스장에서 날아오르는 우마——결국 이런 ${teio.phy_sex_title}일 뿐이다!`,
        );
        await era.printAndWait(
          `${you.name}을(를) 괴롭혀 온 작은 존재가 지금은 달고 부드러운 제물의 어린양처럼 ${you.name} 앞에 놓여 있다!`,
        );
        await era.printAndWait(
          `${you.name}이(가) 억누르지 못하는 마음 한구석이 아무리 추하다 해도…… ${teio.sex}에게 책임은 조금도 없는가! 그림자는 태양 아래에서 생긴다. 그게 진실 아닌가!`,
        );
        await era.printAndWait(
          `${you.name}은(는) 손을 하얀 피부 위로 움직여 크지 않은 가슴의 굴곡을 감싼다.`,
        );
        await era.printAndWait(
          '손바닥을 그 위에 얹어 가볍게 만지고 손가락 끝으로 분홍빛 돌기를 쓰다듬는다.',
        );
        await era.printAndWait(
          `${teio.teen_sex_title}은(는) 안달 난 듯 몸을 비튼다. 분명 ${you.name}을(를) 유혹하고 있다고 생각한 ${you.name}은(는) ${teio.teen_sex_title}의 아픈 부위를 피해 ${teio.sex}의 엉덩이를 문지르고 다른 부위로 손을 뻗어 힘을 준다. 예고 없이 단단한 작은 굴곡을 거칠게 주무르기 시작한다.`,
        );
        era.println();
        await teio.say_and_wait('앗……');
        era.println();
        await era.printAndWait(
          `${teio.name}이(가) 작게 놀란다. 당연하다. ${teio.name}의 몸은 이런 자극에 익숙할 만큼 숙련되어 있지 않다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 알면서도 일부러 한다. 이 아픈 반응을 원해 그렇게 하고 있다.`,
        );
        await era.printAndWait(
          `그래서 계속한다. 철저히 거칠게 ${teio.teen_sex_title}의 가슴을 주무른다. 욕망이 높아지고 피부는 기름을 바른 듯 윤이 나며 ${teio.sex}의 체격과 어우러져 시선을 끈다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 입술을 다른 쪽 굴곡으로 옮겨 빨아 다시 야릇한 자국을 남긴다.`,
        );
        await era.printAndWait(
          `${teio.name}이(가) 얌전히 ${you.name}을(를) 바라본다. 순간 피가 거꾸로 솟는 듯하다.`,
        );
        await era.printAndWait(
          `어두운 면이 저항하지 않는 이 ${teio.teen_sex_title} 앞에서 극한까지 드러난다.`,
        );
        await era.printAndWait(
          `그래, 분명 ${teio.sex}은(는) 일부러 ${you.name}의 열정을 부추기고 있는 것이다. 완벽한 작은 암컷 짐승이다.`,
        );
        await era.printAndWait('그럼…… 본론으로 들어가자.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_95_17_h_sex_end
  async we_95_17_h_sex_end(teio, you) {
    era.printButton('「미안해.」', 1);
    await era.input();

    await teio.say_and_wait('응읏——!');
    era.println();
    await era.printAndWait(
      `결국 ${you.name}은(는) 꼬박 네 시간 동안 자신을 억누르지 못해 조금 지나치게 했다.`,
    );
    await era.printAndWait(
      `${you.name}의 끊임없는 사과와 약속 끝에 작은 ${teio.uma_sex_title}은(는) 마침내 ${you.name}의 사과를 받아들이고 침대에서 잠든다.`,
    );
    await era.printAndWait(`${you.name}도 몸을 정리하고 옷을 입은 채 눕는다.`);
    await era.printAndWait(
      `눈을 감자 무언가가 다가와 ${you.name}의 몸에 달라붙는 느낌이 들었다.`,
    );
  },

  // [번역 완료] ws_95_14_h
  ws_95_14_h: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `무대에 오르기 직전 ${you.name}은(는) 다시 테이오의 털을 정돈한다.`,
      );
      await era.printAndWait(
        `오늘만 이미 몇 번이나 비슷한 행동을 반복했지만 두 사람 모두 말없이 넘어간다. 어쩌면 마음을 빗어 정돈하는 방법인지도 모른다.`,
      );
      await era.printAndWait(
        '무대에 들어서 멀리서 찾아온 수많은 팬을 앞에 두고 테이오는 평소처럼 자신감 넘치는 표정을 보인다. 즉흥적인 제왕무보·개가 현장의 열기를 극한까지 끌어올린다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 막 뒤에 숨어 다가오는 레이스를 생각한다.`,
      );
      await era.printAndWait(
        `오늘 테이오의 달리기가 뛰어날수록 ${you.name}의 머릿속 경보음은 더 커진다……`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_17_h
  ws_95_17_h: (() => {
    const title = '記者会見';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name}은(는) 넥타이를 고쳐 매고 마지막으로 거울 속 자신을 바라본다.`,
      );
      await era.printAndWait('——그래, 더 할 말은 없다.');
      await era.printAndWait('이제 할 일도 없다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손목시계를 본다. 시간이 촉박해 스스로를 설득하며 미룰 여유는 없다.',
      ]);
      await era.printAndWait('깊게 숨을 들이쉬고 애써 힘을 뺀다.');
      await era.printAndWait(
        `${you.name}은(는) 화장실을 나와 자신의 파멸을 향해 간다.`,
      );
      era.println();
      await era.printAndWait(
        `이번 기자회견에 ${you.name}은(는) 테이오를 데려오지 않았다. 대외적으로는 치료와 안정이 필요하다고 설명했지만, ${you.name} 역시 지금 상태의 ${teio.sex}이(가) 참석해 봐야 해만 있고 득은 없다고 생각한다. 문제는——이렇게 되면 ${you.name}이(가) 모든 것을 짊어져야 한다는 것이다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}에게는 그럴 마음의 준비가 진작 되어 있었을 것이다. 그렇지 않은가.`,
      );
      era.println();
      await era.printAndWait(
        `회견장에 도착해 무수한 조명과 렌즈 앞에서 날카로운 기자들을 상대하며 ${you.name}은(는) 평생의 힘을 다해 침착하고 논리적인 답변을 하려 한다. 땀은 속옷까지 적셨지만 어떻게든 버티려 한다. 트레센 연수에 감사해야겠다고 속으로 생각하며 까다로운 질문에 집중한다. 그리고 정말 치명적인 질문이 마침내——`,
      );
      era.println();
      await era.printAndWait(
        `기자 A「묻겠습니다. 전문가 분석에 따르면 토카이 테이오의 부상은 ${teio.sex} 특유의 주법에서 비롯됐다고 합니다. ${teio.sex}의 트레이너인 당신이 그 사정을 몰랐을 리는 없겠죠. 즉 문제를 알면서도 ${teio.sex}을(를) 출주시켜 오늘의 참사를 초래했다는 뜻입니까?」`,
      );
      era.println();
      await era.printAndWait('——왔다.');
      await era.printAndWait('신중해야 한다.');
      await era.printAndWait(
        `이 답변은 ${you.name}의 경력에 영향을 줄 수 있다.`,
      );
      await era.printAndWait(`${you.name}은(는) 결심한다——`);
      era.printButton(
        `「충분히 파악하지 못했습니다. 토카이 테이오가 출주를 원했고, 저는 담당의 생각을 따랐을 뿐입니다.」`,
        1,
      );
      era.printButton(
        `「저는 ${teio.sex}의 트레이너입니다. 모든 책임은 제가 지겠습니다.」`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `사람들이 한동안 수군거리다 조용해진다. ${you.name}은(는) 그들이 어떻게 반응할지 알고 있지만 이제 관심은 없다.`,
        );
      } else {
        await era.printAndWait('회견장이 술렁인다.');
        await era.printAndWait(
          '하지만 폭발 같은 그 말을 끝까지 하고 나니 더 답할 것은 거의 남지 않았다.',
        );
        await era.printAndWait('마침내 끝까지 버텼다.');
        await era.printAndWait(
          `조명이 내려가고 기자와 카메라맨들은 질문을 마친 뒤 하나둘 흩어진다. 마지막에는 무대 위에 ${you.name} 혼자 남는다. ${you.name}이(가) 길게 숨을 내쉬고 떠나려는 순간——`,
        );
        era.println();
        await era.printAndWait('팬 A「왜……」');
        era.println();
        await era.printAndWait(`${you.name}은(는) 의아한 표정으로 고개를 든다.`);
        era.println();
        await era.printAndWait('팬 B「젠장……」');
        era.println();
        await era.printAndWait(
          `낯선 두 사람이 갑자기 실내에 나타난다. 인파가 흩어진 뒤 몰래 들어온 모양이다.`,
        );
        era.println();
        await era.printAndWait(`팬 A「당신이 ${teio.sex}을(를) 망가뜨렸어!」`);
        era.println();
        await era.printAndWait(
          `팬 B「자기 성적만 좇고 ${teio.uma_sex_title}은(는) 돌아보지 않은 태도 때문이야. 토카이 테이오를 지금 모습으로 만든 건 당신이라고!」`,
        );
        era.println();
        await era.printAndWait(
          `팬 A「그러고도 트레이너라고 하는 당신은…… 털고 떠나면 그만이지! 책임진다고 해 봐야 사람들 앞에서 몇 마디 하고 고개 숙여 사과하는 것뿐이잖아. 잠잠해지면 새 담당과 계약하면 되고! 원래 ${teio.uma_sex_title}의 인생은 이미 망가졌다고!」`,
        );
        era.println();
        await era.printAndWait(
          `두 사람이 다가와 분노를 담아 ${you.name}을(를) 노려본다. ${you.name}은(는) 그들과 눈을 마주치지만 말이 나오지 않는다.`,
        );
        await era.printAndWait(
          '그들의 눈에는 분노와 원망 외에도 공허함이 있다.',
        );
        await era.printAndWait('꿈을 잃은 눈이다.');
        await era.printAndWait(`——${you.name}이(가) 팔고 있던 것은 꿈이었다.`);
        await era.printAndWait(
          `——${you.name}은(는) 꿈을 주던 이를 죽였다.`,
        );
        await era.printAndWait(
          '세 쌍의 눈이 각자의 감정을 가슴에 숨긴 채 서로 노려본다.',
        );
        era.printButton(`「책임은 지겠습니다.」`, 1);
        await era.input();
        await you.say_and_wait(
          `${teio.sex}이(가) 다시 일어서는 날…… 보게 될 겁니다. ${teio.sex}은(는) 아직 테이오입니다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_19_h
  ws_95_19_h: (() => {
    const title = '交渉';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} abandon_disabled テイオーと関係を持ったあとなら捨てられない
     */
    const f = async (teio, you, abandon_disabled) => {
      await you.say_and_wait('이번에는 또 뭐지……');
      await era.printAndWait(
        `${you.name}은(는) 낯선 방을 바라보다 잠시 망설인 뒤 문을 두드린다. 곧 문이 열리고 ${you.name}은(는) 안으로 들어간다.`,
      );
      era.println();
      await era.printAndWait(
        `천황상(봄) 이후 ${you.name}은(는) 학원 운영진에게 불려 단독 회의를 했고, 일선에서 물러난 베테랑 선배 트레이너에게 지도를 받으라는 말을 들었다. 그 트레이너는 업계에서 유명하며 수많은 ${teio.uma_sex_title}들을 지도해 왔다. ${you.name}이(가) 학생이던 시절 한 학기 동안 그 사람의 제자였던 적도 있다. 거절할 이유가 없어 오늘 이곳에 왔다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 여성이 의자에 단정히 앉아 ${you.name}을(를) 기다리고 있다. 탁자 위에는 자료가 놓여 있고, ${you.name}은(는) 인사하고 앉은 뒤 탁자 위를 슬쩍 본다. 예상대로 계약 관련 서류다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 여성「${you.actual_name} 맞지? 기억하고 있어. 이제 제법 이름이 알려진 트레이너가 됐구나.」`,
      );
      era.println();
      await era.printAndWait(`${you.name}은(는) 고개를 끄덕여 대답을 대신한다.`);
      era.println();
      await era.printAndWait(
        `중년 여성「오늘은 학원의 부탁으로 너와 네 담당 ${teio.uma_sex_title} ${teio.name}에 대해 이야기하러 왔어.」`,
      );
      era.println();
      await era.printAndWait(
        `${teio.sex}의 이름을 듣자 각오하고 있었는데도 ${you.name}의 가슴이 내려앉는다. 마침내 왔구나——라고 생각한다.`,
      );
      era.println();
      await era.printAndWait(
        `중년 여성「단도직입적으로 말할게——네가 ${teio.uma_sex_title}의 생각을 따랐기 때문에 오늘의 패배가 생긴 거지? 잘못은 네게 없어. 그리고 트레이너에게 목표를 실현할 기회는 얼마든지 있어. 한 번의 육성 실패라면 계약을 끊고 새로운 ${teio.uma_sex_title}와 계약하면 돼. 오늘 그 선택지를 줄게——지금 담당과 계약을 해지해. 너는 앞으로도 우수한 아이와 계약할 수 있고, 전 담당도 최선의 보살핌을 받게 될 거라고 보장할게.」`,
      );
      await era.printAndWait(
        `${you.name}은(는) 무슨 말을 들을지 마음의 준비는 하고 있었지만 그래도 충격을 받는다.`,
      );
      era.println();
      await era.printAndWait(
        '중년 여성「너는 가능성이 있어——여기서 망가뜨리기엔 아까워. 네 앞날을 생각해. 나무 한 그루에 묶여 있으면 안 돼.」',
      );
      era.println();
      await era.printAndWait(`${you.name}의 대답은——`);
      era.printButton('「……당신의 견해에 동의합니다.」', 1, {
        disabled: abandon_disabled,
      });
      era.print(
        '【이 선택을 하면 모든 것을 되돌릴 수 없다! 세이브를 확인하라!】',
        {
          offset: 1,
          width: 23,
          color: buff_colors[3],
        },
      );
      era.printButton('「아니요.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name}은(는) 말없이 계약 해지서에 자신의 이름을 적고 몽유병에 걸린 듯 절차를 마친 뒤 방을 나선다. 걸음은 점점 빨라지고 감정은 더 이상 안정되지 않아, 마침내 행인들의 놀란 시선 속에서 소리치며 집으로 도망치듯 달린다.`,
        );
        await era.printAndWait(
          `${you.name}에게는 이제 ${teio.name}을(를) 만날 용기가 없었다. ${teio.sex}와 ${you.name}의 인생은 여기서 갈라진다.`,
        );
      } else {
        await era.printAndWait(`${you.name}은(는) 자신의 목소리가 방 안에 울리는 것을 듣는다.`);
        era.println();
        await you.say_and_wait(
          `말씀하신 대로입니다…… 트레이너에게 기회는 아직 많습니다. 제 앞날을 위해서라면 실패한 담당을 일찍 포기하고 다른 ${teio.sex}을(를) 선택하는 편이……`,
        );
        era.println();
        await era.printAndWait(
          `중년 여성은 의자에 단정히 앉아 눈을 가늘게 뜨고 ${you.name}의 대답을 듣는다.`,
        );
        era.println();
        await you.say_and_wait(
          '미래가 없는 학생에게 집착하는 것이 양쪽 모두에게 좋지 않다는 건 알고 있습니다. 직업적인 타협도 이해합니다.',
        );
        era.println();
        await you.say_and_wait(
          '하지만 실제로 그 말을 듣고 자신의 입으로 한 번 되풀이해 보니…… 받아들일 수 없다.',
        );
        era.println();
        era.printButton('「그러니 거절하겠습니다.」', 1);
        await era.input();
        await you.say_and_wait(
          `트레센의 트레이너 제도는 ${teio.uma_sex_title}의 성장을 뒷받침하는 빼놓을 수 없는 부분입니다. 트레이너의 임무는 담당 ${teio.uma_sex_title}에게 책임을 지는 것입니다.`,
        );
        era.println();
        era.printButton(
          `${teio.name}의 전속 트레이너로서 해야 할 일을 하겠습니다.`,
          1,
        );
        await era.input();
        await era.printAndWait('중년 여성「착한 아이네.」');
        await era.printAndWait('중년 여성이 미소 짓는다.');
        await era.printAndWait(
          `그녀는 손을 들어 탁자 위 서류를 거두고 다시 ${you.name}에게 미소 짓는다.`,
        );
        era.println();
        await era.printAndWait(
          '중년 여성「험한 길이야. 그래도 그 길을 택한 건 훌륭해. 힘내. 축복할게——가능한 만큼 도와주기도 하마.」',
        );
        era.println();
        await era.printAndWait(
          `${you.name}은(는) 방 밖으로 나온다. 안개 속에 있는 듯한 기분이지만 가슴 깊은 곳에서는 신념이 굳어진다——${teio.name}의 꿈을 ${teio.sex}이(가) 이루도록 돕겠다고.`,
        );
        era.println();
        await era.printAndWait(
          `그 뒤 어째서인지 ${you.name}에 대한 험담은 줄었고 트레센 측도 ${you.name}에게 어느 정도 지원을 제공했다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_palace_h
  async ws_palace_h(teio) {
    await teio.say_and_wait('이건 우리 둘의 것이야——두 사람의 기념비——');
  },
};
