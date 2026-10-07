// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/base-3"),

  // [번역 완료] ask_release_agree
  async ask_release_agree(teio, you, callname) {
    era.printButton('「이제 충분히 놀았잖아, 테이오. 내보내 줘.」', 1);
    era.printButton('「테이오 님…… 알겠습니다. 내보내 주세요.」', 2);
    await era.input();

    await teio.say_and_wait('……하아.');
    await era.printAndWait([
      '맞은편 의자에 걸터앉은 작은 ',
      teio.uma_sex_title,
      '이(가) 몸을 앞으로 기울여 온몸을 이쪽으로 가까이 가져오고, 푸른빛 도는 검은 두 눈을 깜빡이지도 않은 채 ',
      you.get_colored_name(),
      '에게 고정한다. 먹빛 문처럼 스며들려는 빛을 전부 삼켜버린다.',
    ]);
    await teio.say_and_wait('그런 말을 하다니…… 내 트레이너가.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 소름이 돋지만, 지금은 약한 모습을 보이고 싶지 않아 ',
      teio.sex,
      '을(를) 노려본다. 일그러진 홍채 너머에서 자신이 소중히 여겨온 그 아이를 찾을 수 있기를 희미하게 바라면서.',
    ]);
    await era.printAndWait([
      '반세기쯤 이어진 것 같은 눈싸움 끝에 ',
      teio.get_colored_name(),
      '은(는) 고개를 떨궜다.',
    ]);
    await teio.say_and_wait(['미안……', callname, '、 내가 잘못했어.']);
    await teio.say_and_wait('문…… 지금은 열려 있어. 마음대로 해.');
    await era.printAndWait([
      '말을 마치자 ',
      teio.sex,
      '은(는) 자신의 다리를 끌어안은 채 몸을 돌려 옆으로 ',
      you.get_colored_name(),
      '에게 길을 내준다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 출구로 걸어가며 곁눈질로, 예전에 ',
      you.get_colored_name(),
      '이(가) 알고 있던 ',
      teio.child_sex_title,
      '이(가) 몸을 떨고 있는 모습을 본다——',
    ]);
    era.printButton('내버려 둔다', 1);
    era.printButton(`${teio.sex}을(를) 데리고 간다`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한순간도 낭비하지 않고 자유로운 세계로 발을 내딛는다——',
        teio.sex,
        '은(는)? 조금 혼쭐을 내줘야 한다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 망설이지 않고 웅크린 그림자에게 다가가 손을 뻗어 ',
        teio.sex,
        '의 머리를 살며시 쓰다듬고, 머리카락 뿌리에서 등을 지나 꼬리 끝까지 손길을 이어간다. 작은 ',
        teio.uma_sex_title,
        '의 몸은 처음에는 더 심하게 떨다가 이윽고 진정된다.',
      ]);
      await era.printAndWait([
        '더 가까이 다가가 두 손으로 ',
        teio.sex,
        '의 관자놀이에 손을 대고 손가락을 구부려 돌아보라고 신호한다. 천천히 익숙한 얼굴이 드러난다.',
        you.get_colored_name(),
        '은(는) 눈물에 씻긴 하늘빛 눈동자를 보고 저도 모르게 웃었다.',
      ]);
      await you.say_and_wait('돌아가자, 같이.');
      await teio.say_and_wait('윽……');
      await era.printAndWait([
        teio.sex,
        '은(는) 얼굴을 닦고 한 손으로 조심스럽지만 힘주어 ',
        you.get_colored_name(),
        '의 소매를 잡고 바닥으로 내려와 비틀거리며 앞장서 ',
        you.get_colored_name(),
        '을(를) 밖으로 이끈다.',
      ]);
    }
    return ret;
  },

  // [번역 완료] ask_release_reject
  async ask_release_reject(teio, you) {
    era.printButton('「이제 충분히 놀았잖아, 테이오. 내보내 줘.」', 1);
    era.printButton('「테이오 님…… 알겠습니다. 내보내 주세요.」', 2);
    await era.input();

    await teio.say_and_wait('……하아.');
    await era.printAndWait([
      '맞은편 의자에 걸터앉은 작은 ',
      teio.uma_sex_title,
      '이(가) 몸을 앞으로 기울여 온몸을 이쪽으로 가까이 가져오고, 푸른빛 도는 검은 두 눈을 깜빡이지도 않은 채 ',
      you.get_colored_name(),
      '에게 고정한다. 먹빛 문처럼 스며들려는 빛을 전부 삼켜버린다.',
    ]);
    await teio.say_and_wait('그런 말을 하다니…… 내 트레이너가.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 소름이 돋지만, 지금은 약한 모습을 보이고 싶지 않아 ',
      teio.sex,
      '을(를) 노려본다. 일그러진 홍채 너머에서 자신이 소중히 여겨온 그 아이를 찾을 수 있기를 희미하게 바라면서.',
    ]);
    await teio.say_and_wait('트레이너……');
    await era.printAndWait([
      teio.sex,
      '은(는) 고개를 갸웃하며 미소 짓는다——',
      you.get_colored_name(),
      '은(는) 이 몸짓을 몇 번이나 봐왔는데도 눈앞의 이 ',
      teio.sex_code === 1 ? '雄獣' : '雌獣',
      '을(를) 처음 보는 듯한 기분이 들었다.',
    ]);
    await teio.say_and_wait(
      '가르쳐 줬잖아…… 현실에 너무 많은 환상을 품으면 안 된다고.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 무엇을 기대했는지는 자신도 모르지만, 지금 상황은 명백하다.',
    ]);
  },

  // [번역 완료] ask_time
  async ask_time(teio, you, callname, security_level, cur_time) {
    await era.printAndWait([
      you.get_colored_name(),
      ' 은(는) ',
      teio.get_colored_name(),
      '에게 지금 시간을 묻는다……',
    ]);
    const buffer = [];
    if (security_level > 3 - era.get('status:3:腿伤')) {
      buffer.push(() =>
        teio.say_and_wait(
          '모르는 게 나은 것도 있어…… 에헤헤, 날 어린애 취급하던 시절에 자주 그렇게 말했잖아.',
        ),
      );
    } else {
      buffer.push(
        () => teio.say_and_wait('함께 있는 시간…… 평생이야❤️'),
        () =>
          teio.say_and_wait([
            cur_time,
            '~후우…… 후후, 조급해하지 마.',
            callname,
            '은(는) 참을 줄 아는 어른이잖아',
          ]),
      );
      if (era.get('status:3:腿伤') > 0) {
        buffer.push(() =>
          teio.say_and_wait([
            cur_time,
            '……아직 그렇게 오래 지나지도 않았는데, 벌써 나를 못 견디겠어, ',
            callname,
            '？',
          ]),
        );
      }
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] battle_escape
  async battle_escape(teio, you) {
    await teio.say_and_wait(['뭐야 이거, 농담이지……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '의 주로 쓰는 손이 ',
      teio.sex,
      '의 목 뒤로 들어간다.',
    ]);
    await era.printAndWait([
      teio.sex,
      '은(는) 한 손을 들어 ',
      you.get_colored_name(),
      '의 어깨에 올리고 입을 열어 무언가 말하려 하지만, 몸에 힘이 풀리며 쓰러진다.',
    ]);
    await era.printAndWait([
      '승자가 된 ',
      you.get_colored_name(),
      '은(는) 조심스럽게 ',
      teio.sex,
      '의 몸을 받쳐 벽에 기대 앉힌 뒤 몸을 돌려 잠긴 문과 마주한다.',
    ]);
    await era.printAndWait([
      '이제 때가 됐다…… 긴 감금과 고뇌, 싸움에는 결말이 필요하다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 속옷 안에서 점토로 몰래 떠둔 ',
      teio.get_colored_name(),
      '의 지문을 꺼내 기억 속 잠금장치 위치로 손을 뻗는다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '의 계산이 맞다면…… 이걸로 나갈 수 있다.',
    ]);
    era.println();
    await era.printAndWait([
      '신호음이 갑자기 울리고 ',
      you.get_colored_name(),
      '은(는) 저도 모르게 놀란다——다행히 잠금 해제 자동음이었다.',
      you.get_colored_name(),
      '은(는) 길게 숨을 내쉬고 밝은 바깥으로 걸어나간다……',
    ]);
  },

  // [번역 완료] battle_fail
  async battle_fail(teio, you, callname) {
    await era.printAndWait('어떻게 해야…… 안 돼……');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 지금 상황을 이리저리 생각하며 머릿속으로 여러 상황과 계획을 시뮬레이션하지만, 모두 불가능하거나 이미 무효라는 게 증명되어 있다.',
      you.get_colored_name(),
      '은(는) 눈을 뜨고 가장 단순하고 직접적인 방법을 택한다——자신을 여기에 가둔 ',
      { color: teio.color, content: '테이오' },
      '을(를), 정면에서 쓰러뜨린다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너로서 담당에게 가르쳐 온 근육 사용법을 떠올리고 깊게 숨을 들이쉬며, 이번에는 자신이 직접 실행할 각오를 다진다.',
    ]);
    era.println();
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait([
        callname,
        '? 미, 미안! 하지만 이제 떠나지 마……',
      ]);
    } else {
      await teio.say_and_wait([
        callname,
        '?! 괜찮아…… 그런 방법을 생각하다니……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        teio.teen_sex_title,
        '에게 너무도 쉽게 제압당하고 ',
        teio.sex,
        '의 놀람은 분노보다 더 큰 듯하다.',
      ]);
    }
  },

  // [번역 완료] battle_prison
  async battle_prison(teio, you) {
    await teio.say_and_wait(['뭐야 이거, 농담이지……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '의 주로 쓰는 손이 ',
      teio.sex,
      '의 목 뒤로 들어간다.',
    ]);
    await era.printAndWait([
      teio.sex,
      '은(는) 한 손을 들어 ',
      you.get_colored_name(),
      '의 어깨에 올리고 입을 열어 무언가 말하려 하지만, 몸에 힘이 풀리며 쓰러진다.',
    ]);
    await era.printAndWait([
      '승자가 된 ',
      you.get_colored_name(),
      '은(는) 조심스럽게 ',
      teio.sex,
      '의 몸을 받쳐 벽에 기대 앉힌 뒤 몸을 돌려 잠긴 문과 마주한다.',
    ]);
    await era.printAndWait([
      '이제 때가 됐다…… 긴 감금과 고뇌, 싸움에는 결말이 필요하다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 속옷 안에서 점토로 몰래 떠둔 ',
      teio.get_colored_name(),
      '의 지문을 꺼내 기억 속 잠금장치 위치로 손을 뻗는다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '의 계산이 맞다면…… 이걸로 나갈 수 있다.',
    ]);
    era.println();
    await era.printAndWait([
      '신호음이 울리고 철컥, 문은 다시 잠긴다.',
      you.get_colored_name(),
      '은(는) 큰일이라고 깨닫고 몇 걸음 물러난 뒤 숨을 내쉬고 무릎을 굽혀 힘을 모아, 평생의 힘을 다해 온몸의 무게를 문에 들이받는다.',
    ]);
    era.println();

    await era.printAndWait([
      '큰 소리가 지하 공간에 울리고 ',
      you.get_colored_name(),
      '은(는) 튕겨나가 눈앞이 빙글 돌고, 아까 ',
      teio.uma_sex_title,
      '와(과) 맞붙으며 입은 상처까지 동시에 욱신거린다.',
      you.get_colored_name(),
      '은(는) 거칠게 숨을 몰아쉬며 주저앉는다. 시선은 마침 잠든 담당의 얼굴과 마주한다.',
    ]);
    era.println();

    await era.printAndWait([
      teio.sex,
      '의 얼굴은 ',
      you.get_colored_name(),
      '이(가) 잘 아는 ',
      teio.uma_sex_title,
      '의 모습 그대로인 것 같다.',
    ]);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 쓴웃음을 지으며 손을 뻗어 ',
      teio.sex,
      '의 속눈썹에 맺힌 물방울을 닦아주고, 더는 저항하지 않은 채 지금의 운명을 받아들였다.',
    ]);
  },

  // [번역 완료] battle_success
  async battle_success(teio, you) {
    await era.printAndWait('어떻게 해야…… 안 돼……');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 지금 상황을 이리저리 생각하며 머릿속으로 여러 상황과 계획을 시뮬레이션하지만, 모두 불가능하거나 이미 무효라는 게 증명되어 있다.',
      you.get_colored_name(),
      '은(는) 눈을 뜨고 가장 단순하고 직접적인 방법을 택한다——자신을 여기에 가둔 ',
      { color: teio.color, content: '테이오' },
      '을(를), 정면에서 쓰러뜨린다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너로서 담당에게 가르쳐 온 근육 사용법을 떠올리고 깊게 숨을 들이쉬며, 이번에는 자신이 직접 실행할 각오를 다진다.',
    ]);
    era.println();
  },

  // [번역 완료] find_escape
  find_escape(teio, you) {
    era.print([
      '어째서인지 ',
      teio.get_colored_name(),
      '은(는) 한동안 자리를 비운 상태다.',
    ]);
    era.print([
      '수업인가? 훈련인가? 행사인가? 아니면——여기까지 생각하자 ',
      you.get_colored_name(),
      '의 머리는 더 아파진다——학원 운영진에게 자신의 실종을 설명할 거짓말을 꾸미고 있는 건가?',
    ]);
    era.print([
      '더는 미룰 수 없다고 ',
      you.get_colored_name(),
      '은(는) 생각한다. 구조를 기다리기보다 스스로 기회를 잡아 도망쳐야 한다.',
    ]);
    era.println();
    era.print([
      you.get_colored_name(),
      '은(는) 문을 살짝 민다——이번에는 잠겨 있지 않다!',
      you.get_colored_name(),
      '은(는) 기뻐하며 문턱을 넘고 동시에 가슴을 쓸어내려 뛰는 심장을 진정시키려 한다. 어둠을 놀라게 하지 않기 위해……',
    ]);
    teio.say('아아……');
    era.print(['그 순간, 방금 전까지 내달리던 피가 얼어붙는다.']);
    era.print([
      '따뜻하고 맑은 향이 나는 몸이 다가오고, 가늘지만 힘 있는 두 팔이 ',
      you.get_colored_name(),
      '의 허리를 감싸며 ',
      you.get_colored_name(),
      '은(는) 움직일 수 없게 된다.',
    ]);
    teio.say(
      '전에는 자율훈련 때 게으름 피우는지 확인하려고 이 수법을 썼었는데…… 어른의 수법이네, 후후.',
    );
    era.print([
      '입장이 뒤바뀐 지금 ',
      you.get_colored_name(),
      '은(는) ',
      teio.sex,
      '에게 안겨 방 안으로 돌아가 「벌」을 기다릴 수밖에 없다……',
    ]);
  },

  // [번역 완료] first_time
  first_time(another, you) {
    era.print([
      '기숙사 밖에서 ',
      you.get_colored_name(),
      '은(는) 마침 ',
      another.get_colored_name(),
      '와(과) 만나 ',
      another.sex,
      '와(과) 즐겁게 한동안 이야기를 나눈다.',
    ]);
    era.print([
      '하지만 ',
      you.get_colored_name(),
      '은(는) 눈치채지 못한다. 멀지 않은 곳에서 한 쌍의 눈이 계속 이쪽을 바라보고 있고, ',
      you.get_colored_name(),
      '와 ',
      another.sex,
      '의 대화가 길어지고 화제가 사생활로 옮겨가며 웃음소리가 커질수록 그 눈동자도 흔들리며 점점 어두워진다……',
    ]);
    era.println();

    era.print(['그 눈의 주인은 두 손으로 주변 물건을 세게 움켜쥐어 손가락 마디가 하얗게 질린다.']);
    era.println();

    era.print([
      you.get_colored_name(),
      '은(는) 몸을 돌리고는 번쩍 눈을 뜬다.',
    ]);
    era.print(['현실인가? 꿈인가?']);
    era.print([
      you.get_colored_name(),
      '은(는) 조금 어린 취향의 장식이 달린 더블베드에 누워 있다는 걸 깨닫는다……',
    ]);
    era.print(['눈앞에는 낯선 천장……']);
  },

  // [번역 완료] flatter
  async flatter(teio, you, callname) {
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait([
        '미안, ',
        callname,
        '。 하지만 아무래도 떠나지 않았으면 해……',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 평소처럼 담당을 달래려 하지만, 분명 통하지 않는다.',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……지금은 테이오 님 차례야.']);
    }
  },

  // [번역 완료] strike_fail
  async strike_fail(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 감고 잠든 척하면서 지금 상황을 집중해서 생각한다.',
    ]);
    await era.printAndWait([
      '분명 구조는 기대하기 어렵다. 자신에게 의지할 수밖에 없다. 그리고 ',
      you.get_colored_name(),
      '의 담당의 현재 정신 상태로는……',
      you.get_colored_name(),
      '에게 ',
      teio.sex,
      '을(를) 설득해 내보내 달라고 할 자신도 없다. 정면으로 맞붙는 것도 좋은 선택은 아니다.',
    ]);
    await era.printAndWait(['그렇다면 방법은 하나뿐이다.']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너의 머리로 전술을 짜고 스스로 말이 되어 때를 기다린다.',
    ]);
    await era.printAndWait([
      '가벼운 발소리가 다가오고 인기척이 지나가며 옷을 벗는 희미한 소리가 들린다……',
    ]);
    await era.printAndWait([
      '지금이다!',
      you.get_colored_name(),
      '은(는) 정적에서 움직임으로 전환해 침대에서 뛰어오르며 두 손을 펼쳐 ',
      teio.sex,
      '의 머리카락과 꼬리를 붙잡는다——',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 우스꽝스러운 자세로 침대에 쓰러진다.',
    ]);
    era.println();

    await teio.say_and_wait([callname, '……뭐 하는 거야.']);
    era.println();

    await era.printAndWait([
      '결과는 담당을 웃게 만들 뻔했을 뿐이고 ',
      teio.sex,
      '의 경계심만 더 강하게 만든 듯하다.',
    ]);
  },

  // [번역 완료] strike_success
  async strike_success(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 감고 잠든 척하면서 지금 상황을 집중해서 생각한다.',
    ]);
    await era.printAndWait([
      '분명 구조는 기대하기 어렵다. 자신에게 의지할 수밖에 없다. 그리고 ',
      you.get_colored_name(),
      '의 담당의 현재 정신 상태로는……',
      you.get_colored_name(),
      '에게 ',
      teio.sex,
      '을(를) 설득해 내보내 달라고 할 자신도 없다. 정면으로 맞붙는 것도 좋은 선택은 아니다.',
    ]);
    await era.printAndWait(['그렇다면 방법은 하나뿐이다.']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 트레이너의 머리로 전술을 짜고 스스로 말이 되어 때를 기다린다.',
    ]);
    await era.printAndWait([
      '가벼운 발소리가 다가오고 인기척이 지나가며 옷을 벗는 희미한 소리가 들린다……',
    ]);
    await era.printAndWait([
      '지금이다!',
      you.get_colored_name(),
      '은(는) 정적에서 움직임으로 전환해 침대에서 뛰어오르며 두 손을 펼쳐 ',
      teio.sex,
      '의 머리카락과 꼬리를 붙잡는다——',
    ]);
    era.println();
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait(['앗——']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '의 반응은 빨랐지만 몸이 한순간 늦었고 ',
        you.get_colored_name(),
        '은(는) 기세를 주체하지 못하고 ',
        teio.sex,
        '의 종아리에 달려들어 끌어안은 채 둘 다 부드러운 침구 위로 쓰러진다……',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……떠나지 마……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        teio.sex,
        '을(를) 바라보며 무언가 말하려 하지만 입이 열리지 않는다.',
      ]);
      await era.printAndWait([
        '트레이너와 ',
        you.sex,
        '의 담당 ',
        teio.uma_sex_title,
        '은(는) 오랫동안 서로 바라보다가 말없는 합의처럼 동시에 얼굴을 돌린다.',
      ]);
      era.println();

      await teio.say_and_wait(['……내보내 줄게.']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '은(는) ',
        you.get_colored_name(),
        '의 손을 잡아끌고 밖으로 향한다. 아주 가늘지만 분명한 말이 ',
        you.get_colored_name(),
        '의 귀에 닿는다.',
      ]);
      era.println();

      await teio.say_and_wait(['미안.']);
    } else {
      await teio.say_and_wait(['앗!']);
      era.println();

      await era.printAndWait([
        '오랜만에 듣는 ',
        teio.teen_sex_title,
        '본래의 비명이 터져 나오고 ',
        teio.sex,
        '은(는) ',
        you.get_colored_name(),
        '에게 제압당하며 입장이 다시 뒤바뀐다.',
      ]);
      era.println();

      await teio.say_and_wait(['……', callname, '。']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 익숙한 마사지와 애정 어린 장난을 섞은 손길로 ',
        teio.sex,
        '에게 응한다.',
        teio.sex,
        '은(는) 점점 힘이 빠지고 목소리는 숨소리로 바뀐다……',
      ]);
      era.println();

      await teio.say_and_wait(['열쇠는…… 없어…… 내가, 가지고……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        teio.sex,
        '의 뜻을 알아차리고 ',
        teio.sex,
        '을(를) 누른 채 문 앞으로 가서 힘껏 민다.',
      ]);
      era.println();

      await era.printAndWait(['너무도 쉽게 문이 열렸다……']);
    }
  },
};
