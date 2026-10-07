// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const buff_colors = require('#/data/color-const')["buff_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100700-Gold-Ship/love-7"),

  // [번역 완료] 49
  49: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `인연의 시작은 ${gold_shp.name}의 그 선발 레이스였다. 그 레이스가 끝난 뒤 ${gold_shp.sex}은(는) ${callname}와(과) 계약해 공식 무대에 설 수 있는 우마무스메가 되었다.`,
      );
      era.println();
      await gold_shp.say_and_wait(
        '왜 그 녀석이 마음에 들었는지, 이제 와선 나도 모르겠어.',
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) 석양이 비치는 놀이공원의 미끄럼틀 위에서 깊은 생각에 잠겨 있었다. ${gold_shp.sex}은(는) 턱을 난간에 기대고 은빛 머리카락을 폭포처럼 늘어뜨렸다. 옆에서 뛰노는 아이들이 시야를 오가도 마음은 줄곧 이곳에 없는 누군가에게 가 있었다.`,
      );
      era.println();
      await gold_shp.print_and_wait([
        `처음부터 ${gold_shp.sex}은(는) 자신의 행동을 이해하지 못했다. 보통 우마무스메와 트레이너 사이에서는 트레이너 쪽이 선수를 모집한다. 하지만 ${callname}와(과)의 계약은 스카우트됐다기보다,`,
        {
          color: gold_color,
          content: `${gold_shp.name}이(가) 그 녀석에게 자신을 떠넘겼다고 하는 편이 더 가까웠다.`,
        },
      ]);
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}이(가) 출주하려면 트레이너와 계약해야 한다. 그건 확실하다.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${you.actual_name}은(는) 트레이너다. 그것도 확실하다.`,
      );
      era.println();
      if (era.get('flag:当前声望') < 1000) {
        await gold_shp.print_and_wait(
          `${you.actual_name}이라면 ${gold_shp.name}이(가) 자신의 에덴을 찾는 데 도움이 될지도 모른다.`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${you.actual_name}의 실력은 확실하고, ${gold_shp.name}이(가) 자신의 에덴을 찾는 데 도움이 된다.`,
        );
      }
      era.println();
      if (era.get('exp:7:性爱次数') > 0) {
        await gold_shp.print_and_wait(
          `덧붙이자면 ${you.actual_name}은(는) 침대 위에서 달아오른 몸을 달래주는 데에도 확실히 도움이 된다.`,
        );
        era.println();
      }
      await gold_shp.print_and_wait(
        '하지만——젠장, 그렇다고 이 황금의 여행에 그 녀석이 반드시 필요한 건 아니잖아!',
      );
      era.println();
      await gold_shp.print_and_wait(
        '중앙 트레센은 우수하다. 우마무스메도 트레이너도 좋은 선택지는 넘쳐난다! 로쿠 아저씨 트레이너(너무 나이가 많을지도), 나세 트레이너(너무 진지할지도), 키류인 트레이너(너무 젊을지도)도 한때는 에덴으로 가는 길의 동료 후보였다.',
      );
      era.println();
      await gold_shp.print_and_wait([
        '그런데도——그 녀석을 본',
        {
          color: gold_color,
          content: '0.0000001초 만에 두 다리에 명령을 내려버렸다.',
        },
      ]);

      era.printButton('「황금별의 계시인가……」(관계를 진전시킨다)', 1);
      era.printButton('「나 뭐 하는 거냐……」(아직 진전시키지 않는다)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `그 변명은 ${gold_shp.name} 자신조차 속이지 못했다. ${gold_shp.sex}은(는) 눈을 감는다. 하지만 마음에 새겨진 그림자는 사라지지 않는다. ${gold_shp.sex}은(는) 힘껏 고개를 저으며 그 녀석을 떠올리지 않으려 하지만, 머리는 계속 그 녀석을 생각하게 만든다.`,
        );
      } else {
        await gold_shp.print_and_wait(
          `${gold_shp.sex}은(는) 눈을 감는다. 하지만 마음에 새겨진 그림자는 사라지지 않는다. ${gold_shp.sex}은(는) 힘껏 고개를 저으며 그 녀석을 떠올리지 않으려 하지만, 머리는 계속 그 녀석을 생각하게 만든다.`,
        );
      }
      era.println();
      await gold_shp.print_and_wait(
        `지금 절반의 ${gold_shp.name}은(는) 자신을 설득하고 있다. 세상에는 첫눈에 반한다는 게 있고, 고루시와 트레이너는 사랑의 신의 화살을 정면으로 맞은 천생연분이라고.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `나머지 절반의 ${gold_shp.name}은(는) 반대한다. 이건 단지 고루시와 트레이너 사이가 좋다는 증거일 뿐, 그 이상은 아무것도 증명하지 않는다고.`,
      );
      era.println();
      if (ret === 1) {
        await gold_shp.print_and_wait(
          `마침내 감성 쪽 ${gold_shp.name}이(가) 우세를 점했다. ${gold_shp.name}의 눈빛은 망설임에서 결의로 바뀌었고, 몸을 일으켜 트레센 쪽을 바라봤다.`,
        );
        era.println();
        await gold_shp.say_and_wait('아니야, 이건 첫눈에 반한 거야.');
      } else {
        await gold_shp.print_and_wait(
          `마침내 이성 쪽 ${gold_shp.name}이(가) 우세를 점했다. 하지만 억누를 수 없는 생각은 구름 그림자처럼 머리 위를 떠돌고 있었다. ${gold_shp.name}조차 쉽게 떨쳐낼 수 없는 이 고민은 대체 언제까지 이어질까.`,
        );
      }
      return [ret];
    };
    f.title = [{ color: gold_color, content: '감성과 이성' }];
    return f;
  })(),

  // [번역 완료] 74-1
  '74-1': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.print_and_wait(
        `어느 밤, ${gold_shp.name}은(는) 코와 윗입술 사이에 연필을 끼운 채 푹신한 기숙사 침대에 반쯤 누워 있었다. ${gold_shp.sex}은(는) 두 다리와 강한 허리로 몸통을 띄운 채 머리만 매트에 딱 붙이고 있다. 연필의 나무와 도료가 섞인 냄새도 ${gold_shp.sex}의 사고 속도를 방해하지 못한다. 지금 이 세상의 만물이 ${gold_shp.name} 안에서 빠르게 분석되고, 분해되고, 다시 조립되고 있다.`,
      );
      era.println();
      await era.printAndWait('상온 초전도에 승산은 있는가? 없다.', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('공룡은 거대한 닭인가? 그렇다.', {
        color: gold_color,
      });
      era.println();
      await era.printAndWait('펩시인가 콜라인가? 따뜻한 물.', {
        color: gold_color,
      });
      era.println();
      await gold_shp.print_and_wait('……');
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) ${callname}을(를) 좋아하는가? 좋아한다.`,
      );
      era.println();
      await gold_shp.print_and_wait(
        `${gold_shp.name}은(는) 두 다리에 힘을 주고 허공으로 튀어 올라 머리와 양손 세 점으로 침대 위에 물구나무를 섰다! 지금 혈액이 ${gold_shp.sex}의 뇌로 작전에 필요한 에너지를 계속 보내고 있다——마음이 정해졌다면 다음에 할 일은 하나뿐이다……!`,
      );
      era.println();

      era.printButton('「작전을 세우고 공세 개시!」(관계를 진전시킨다)', 1);
      era.printButton('「신중하게, 장기전으로 간다!」(아직 진전시키지 않는다)', 2);
      return [await era.input()];
    };
    f.title = [{ color: gold_color, content: '전술 결정' }];
    return f;
  })(),

  // [번역 완료] 74-2-end
  async '74-2-end'(gold_shp, you, callname) {
    const ret = [];
    era.drawLine();
    await era.printAndWait(
      `이 격렬한 정사는 의심할 여지 없이 강렬한 체험이었다. 조금 전까지 산뜻했던 트레이너실에는 이제 정액과 애액 냄새가 가득했다. ${you.name}은(는) 숨을 헐떡이며 ${gold_shp.name}의 품속에 파묻혔고, ${gold_shp.sex}이(가) 계속 풍기는 체취를 들이마시면서 방금 무슨 일이 있었는지 머릿속으로 계속 되짚고 있었다.`,
    );
    era.println();
    await gold_shp.say_and_wait(
      `어때 ${callname}…… 초절정 미소녀 고루시의 흠뻑 젖은 보지, 기분 좋았지?`,
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name}은(는) 볼을 붉힌 채 의기양양하게 ${you.name}에게 웃어 보였다.`,
    );
    era.println();

    era.printButton('「언제부터 그렇게 음란해진 거야……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      '네 탓이잖아…… 후후후. 내 앞에서 쇄골을 보여주고 엉덩이를 흔들고, 꼭 유혹하는 것처럼 굴었잖아. 참는 것도 한계였다고!',
    );
    era.println();

    era.printButton('「변태…… 강간마……」', 1);
    await era.input();

    await gold_shp.say_and_wait(
      '뭐라고 하든 이제 빼도 박도 못하는 사이야!',
    );
    era.println();
    await era.printAndWait(
      `${gold_shp.name}은(는) 팔로 ${you.name}의 목을 감싸 강제로 가슴께에 끌어안았다. 그녀의 체향이 의식을 녹여버릴 듯했다.`,
    );
    era.println();
    await era.printAndWait(`긴 침묵 끝에 ${gold_shp.sex}이(가) 입을 열었다.`);
    era.println();
    await gold_shp.say_and_wait('그러니까…… 책임질 테니까. 그……');
    await gold_shp.say_and_wait(`${callname}, 나랑…… 사귀자!`);
    era.println();

    era.printButton('「응, 좋아.」(관계를 진전시킨다)', 1);
    era.printButton('「그건 좀……」(아직 진전시키지 않는다)', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await era.printAndWait(
        `${you.name}이(가) 예상하지 못한 것은 오히려 ${gold_shp.name} 쪽이 ${you.name}보다 더 놀란 표정을 짓고 있었다는 점이다.`,
      );
      era.println();
      await gold_shp.say_and_wait('진짜냐? 절대로 거절당할 줄 알았는데!');
      await gold_shp.say_and_wait(
        '……그래서 먼저 일을 저질러버리는 작전을 택한 거야.',
      );
      era.println();

      era.printButton(
        '고루시, 엄청 초조했네(웃음). 그렇게까지 못 믿었어?',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait(
        '이런 일에 안 초조한 녀석이 어디 있어! 그리고 웃지 마!',
      );
      await gold_shp.say_and_wait('왜냐면…… 성공할 거라고 생각 못 했으니까……');
      await gold_shp.say_and_wait(
        '나 평소에도 귀찮게 굴고, 불성실하고, 또 귀찮게 굴고…… 손도 가만있질 못해서 늘 너를 휘말리게 하잖아……',
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.sex}은(는) 이야기하다가 입을 다물었고, ${you.name}은(는) ${gold_shp.sex}의 가빠진 숨에서 울음을 참으려 애쓰고 있음을 알아챘다.`,
      );
      era.println();
      await you.say_and_wait(
        '나는 트레이너야. 담당 우마무스메를 이끌고 소중히 여기는 게 내 사명이다. 너는 내 담당이고, 그건 영원히 변하지 않아.',
      );
      await you.say_and_wait(
        '현실에도 세상에도 문제는 산더미처럼 있겠지. 하지만 내 머리는 이미 너 때문에 엉망이 됐어.',
      );
      await you.say_and_wait('지금은 너와 함께 계속 미쳐 있고 싶어.');
      await you.say_and_wait('그러니까 각오해——');
      era.printButton('「사랑해♡」', 1);
      era.printButton('「강○마♡」', 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name}와(과) ${gold_shp.name}은(는) 서로를 꽉 끌어안았다. 이 침대는 지금 ${gold_shp.sex}의 작은 흐느낌과 이제 막 연인이 된 두 사람을 감싸고 있었다.`,
      );
    } else {
      await era.printAndWait(
        `${gold_shp.name}은(는) ${you.name}이(가) 상상했던 것처럼 떼를 쓰며 뒹굴지는 않았다. 쓸쓸한 표정으로 몸을 일으켰고, 가슴이 아래로 처졌다. ${gold_shp.sex}은(는) 입을 열어 무언가 말하려 했지만, 결국 이 사이로 나온 말은——`,
      );
      era.println();
      await gold_shp.say_and_wait('응, 알겠어. 미안.');
      era.println();
      await era.printAndWait(
        `${gold_shp.sex}은(는) 말없이 침대에서 내려와 바닥에 떨어진 옷을 다시 입었다.`,
      );
      era.println();

      era.printButton('「저기, 고루시?」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name}에게 돌아온 대답은 없었다. 그녀는 가볍게 인사만 하고 문을 닫은 뒤 나가버렸다.`,
      );
    }
    return ret;
  },

  // [번역 완료] 74-2-start
  '74-2-start': (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      await gold_shp.say_and_wait(
        '골드 쉽, 야심만만, 천하를 삼킨다. 지구상의 인류와 우마무스메가 아무리 경계해도 황금 화산이 분화하는 날엔 최소 120억 우마 코인의 피해를 각오해라.',
      );
      era.println();
      await gold_shp.say_and_wait(
        '하지만 영웅 골드 쉽이라 해도 색욕에는 약하다……',
      );
      era.println();
      await gold_shp.say_and_wait(
        '지금 골드 쉽은 트레이너 책상 끝에 걸터앉아 있다. 입속으로 뭔가를 중얼거리며 마치 이 장면을 3인칭으로 중계하는 것 같다.',
      );
      era.println();

      era.printButton(
        '「……자기한테 내레이션을 붙이는 거야? 방금 문장까지?」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait(
        `${callname}, 짜증 나네. 좀 더 맞춰주라고! 역할을 해달라고! 골드 쉽은 살짝 화를 내며 소리치고는 주먹을 들어 트레이너를 가볍게 때린다. 대미지 다이스를 굴려라.`,
      );
      era.println();

      era.printButton(
        '「아니, 갑자기 TRPG 모드로 들어가지 마! 나는 진지하게 일하고 있다고.」',
        1,
      );
      await era.input();

      await gold_shp.say_and_wait([
        '으으으, 일과 귀여운 담당 ',
        gold_shp.uma_sex_title,
        '하고 노는 것 중 뭐가 더 중요한 거야ー!',
      ]);
      era.println();
      await era.printAndWait(
        `${gold_shp.name}이(가) ${you.name}의 의자를 계속 흔드는 바람에 ${you.name}은(는) 일에 집중할 수 없었다. 어쩔 수 없이 자리에서 일어나 ${gold_shp.name}이(가) 또 무슨 일을 벌이려는지 보러 갔다.`,
      );
      era.println();
      await era.printAndWait(
        `${gold_shp.name}은(는) 짓궂게 웃으며 ${you.name}을(를) 소파에 밀어 넘어뜨렸다.`,
      );
    };
    f.title = [{ color: gold_color, content: '영웅선, 색욕에는 약하다' }];
    return f;
  })(),

  // [번역 완료] golden_ship_attack
  golden_ship_attack: (() => {
    /**
     * @param {CharaTalk} gold_shp ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gold_shp, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `트레이너실 스피커에서 흘러나오는 버라이어티 프로그램 효과음과 함께 ${gold_shp.name}은(는) 갑자기 ${you.name}을(를) 소파에 앉혔다.`,
      );
      await era.printAndWait(
        `${gold_shp.sex}은(는) 능숙하게 펜을 집어 화이트보드에 적었다.`,
      );
      era.println();

      await era.printAndWait(`돌격! ${gold_shp.name}의`, { align: 'center' });
      await era.printAndWait('초잔혹 양자택일 퀴즈!', { align: 'center' });
      await era.printAndWait('~살아남을 수 있을까?~', { align: 'center' });
      era.println();

      await era.printAndWait(
        `너무 갑작스럽지만, ${gold_shp.name}은(는) 갑자기 ${you.name}에게 심리 테스트를 시키고 싶어진 모양이다.`,
      );
      await era.printAndWait(
        `일의 발단부터 갑작스러웠으니 ${you.name}에게도 갑자기 거절할 권리는 없다! 각오하고 갑자기 받아들여라!`,
      );

      era.printButton('「이게 뭐야!?」', 1);
      await era.input();

      await gold_shp.say_and_wait(
        `그런 거다, 문제는 위에 적을 테니까~ ${callname}은(는) 화이트보드를 봐줘~`,
      );
      await gold_shp.say_and_wait(
        '첫 번째 문제는 완전 정석! 누구나 한 번쯤 들어봤을 녀석!',
      );
      await gold_shp.say_and_wait(
        '너라면 【초콜릿 맛 ○○】와 【○○ 맛 초콜릿】 중 어느 쪽을 고를래?',
      );

      era.printButton('「초콜릿 맛 ○○……」', 1);
      era.printButton('「○○ 맛 초콜릿……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '출제자인 나라도 【다른 걸 먹는다】! 다음!',
      );
      await gold_shp.say_and_wait('두 번째 문제! 봐!');
      await gold_shp.say_and_wait(
        '너라면 【야한 내용을 가족에게 잘못 전송】과 【야한 내용을 담당 우마무스메에게 잘못 전송】 중 어느 쪽을 고를래?',
      );

      era.printButton('「야한 내용을 가족에게 잘못 전송……」', 1);
      era.printButton('「야한 내용을 담당 우마무스메에게 잘못 전송……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '남에게 알려지기 싫으면 【애초에 하지 않는 게 상책】! 다음!',
      );
      await gold_shp.say_and_wait('세 번째 문제부터는 좀 심술궂어진다!');
      await gold_shp.say_and_wait(
        '애인과 술을 마시는데 애인이 세 번째 사람을 부르려고 한다!',
      );
      await gold_shp.say_and_wait(
        '너라면 【네 전 여자친구를 부른다】와 【애인의 전 남자친구를 부른다】 중 어느 쪽을 고를래?',
      );

      era.printButton('「내 전 여자친구를 부른다……」', 1);
      era.printButton('「애인의 전 남자친구를 부른다……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait('왠지 【열받네】! 다음!');
      await gold_shp.say_and_wait('네 번째 문제! 꽤 해본 녀석이 많을 것 같아!');
      await gold_shp.say_and_wait('너는 우마무스메 팀의 리더다!');
      await gold_shp.say_and_wait(
        '너라면 【언제든 대원과 야한 짓을 하고 싶다】와 【언제든 대원이 너와 야한 짓을 하고 싶어한다】 중 어느 쪽을 고를래?',
      );

      era.printButton('「언제든 대원과 야한 짓을 하고 싶다……」', 1);
      era.printButton('「언제든 대원이 나와 야한 짓을 하고 싶어한다……」', 2);
      ret.push(await era.input());
      era.println();

      await gold_shp.say_and_wait(
        '엄청 밝히네~ 그래도 가끔은 【참는 것도 중요】하다고?',
      );
      await gold_shp.say_and_wait('다섯 번째 문제! 목숨이 걸린 사건 발생!');
      await gold_shp.say_and_wait(
        '이런! 너와 네 애인, 네 절친 세 사람이 납치됐다! 납치범은 악취미라서 한 사람을 죽이면 남은 한 사람과 네 목숨을 살려주겠다고 요구했다!',
      );
      await gold_shp.say_and_wait(
        '너라면 【생사를 함께한 절친을 죽인다】와 【너를 위해 죽어도 좋다는 애인을 죽인다】 중 어느 쪽을 고를래?',
      );

      era.printButton('「생사를 함께한 절친을 죽인다……」', 1);
      era.printButton('「나를 위해 죽어도 좋다는 애인을 죽인다……」', 2);
      await era.input();

      await era.printAndWait(
        '……드럼도 없다. 묘하게 장난스러운 BGM도 없다. 어디선가 들려오던 녹음 웃음소리도 없다.',
      );
      await era.printAndWait('모든 것이 갑자기 멈췄다.');
      await era.printAndWait(
        `${gold_shp.name}의 표정은 이상할 만큼 고요했고, ${gold_shp.sex}의 눈에서 빛이 사라진 채 곧장 ${you.name}의 얼굴에 고정되어 있었다.`,
      );
      era.println();

      await gold_shp.say_and_wait(
        '이 문제는 중요합니다. 부디 충분히 생각한 뒤 대답해 주세요.',
      );
      era.println();

      era.printButton('「생사를 함께한 절친을 죽인다……」', 1);
      era.printButton('「나를 위해 죽어도 좋다는 애인을 죽인다……」', 2);
      await era.input();

      await gold_shp.say_and_wait(
        '이 문제는 중요합니다. 부디 충분히 생각한 뒤 대답해 주세요.',
      );
      era.println();

      await era.printAndWait(`${gold_shp.sex}은(는) 그렇게 말했다.`);
      const buffer = [
        {
          accelerator: 1,
          config: { disableWarning: true },
          content: '「생사를 함께한 절친을 죽인다……」',
          type: 'button',
        },
        {
          accelerator: 2,
          config: { disableWarning: true },
          content: '「나를 위해 죽어도 좋다는 애인을 죽인다……」',
          type: 'button',
        },
      ];
      era.printInColRows(buffer);
      setTimeout(() => {
        if (ret.length < 5) {
          buffer.push({
            accelerator: 3,
            config: { disableWarning: true },
            content: '「어느 쪽도 고르지 않아……!」',
            type: 'button',
          });
          era.replaceInColRows(buffer);
        }
      }, 10000);
      ret.push(await era.input());
      era.println();

      await era.printAndWait(
        `${gold_shp.name}은(는) 평소의 표정으로 돌아와 히죽거리며 음악을 틀기 시작했다.`,
      );
      era.println();
      await gold_shp.say_and_wait(`후후~ 수고했어 ${callname}~`);
      if (ret.at(-1) === 3) {
        await gold_shp.say_and_wait(
          `음~ ${callname}은(는) 착한 애네. 담당 우마무스메와 야한 짓을 하고 싶어하는 건 뭐, 좀 그렇지만.`,
        );
        await gold_shp.say_and_wait(
          '……그게 내가 낸 문제라고? 그럼 왜 세 번째 선택지를 안 고르는 건데.',
        );
        await gold_shp.say_and_wait(
          '맞다, 초콜릿 먹을래? 안심해, 아무것도 안 넣었고 맛도 평범해.',
        );
        era.println();
        await era.printAndWait([
          '트레이너실에서 함께 웃는 이 풍경은 분명 앞으로도 사라지지 않을 것이다.',
        ]);
      } else {
        era.println();
        await era.printAndWait(
          `${gold_shp.sex}은(는) 바람처럼 왔다가 바람처럼 떠났다. ${you.name}은(는) 결국 심리 테스트 결과를 듣지 못했다.`,
        );
      }
      era.println();
      if (ret[3] === 1) {
        era.print([
          gold_shp.get_colored_name(),
          '은(는) ',
          { color: buff_colors[2], content: ' [욕설 취향] ' },
          '와(과) ',
          { color: buff_colors[2], content: ' [고통 취향] ' },
          '이(가) 되었다!',
        ]);
      } else {
        era.print([
          gold_shp.get_colored_name(),
          '은(는) ',
          { color: buff_colors[2], content: ' [도S] ' },
          '이(가) 되었다!',
        ]);
      }
      if (ret[1] === 2) {
        era.print([
          gold_shp.get_colored_name(),
          '은(는) 지금 조금 ',
          { color: buff_colors[2], content: ' [초조함] ' },
          !',
        ]);
      }
      return ret;
    };
    f.title = [
      {
        color: gold_color,
        content: '돌격! 골드 쉽의 초잔혹 양자택일 퀴즈!~살아남을 수 있을까?~',
      },
    ];
    return f;
  })(),
};
