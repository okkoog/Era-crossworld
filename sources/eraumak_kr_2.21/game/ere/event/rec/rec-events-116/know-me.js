const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @this CustomizedRecruit
 * @param {CharaTalk} donna
 * @param {CharaTalk} me
 */
async function know_me(donna, me) {
  await print_event_name('진심을 드러내며', donna);
  era.drawLine({ content: `${me.name}의 시점` });
  await era.printAndWait(['일주일 후']);
  era.println();
  await era.printAndWait([
    '모든 준비를 마친 뒤 노트북을 안고 뒤로 드러누웠다. 방 안에는 곰팡이 냄새가 자욱했다. 사람이 아무리 항균 소재로 무장해도, 여기 처박혀 있으면 악취가 배기 마련이지. 선배가 씻고 오라고 신신당부한 이유를 알겠군.',
  ]);
  await era.printAndWait(['아니면 이 계절 탓일까?']);
  await era.printAndWait(['글쎄, 이 계절에 곰팡이가 잘 피는지 어떤지는 잘 모르겠네.']);
  await era.printAndWait(['뭐, 머릿속만은 곰팡이 없이 깨끗하면 그만이지.']);
  era.println();
  era.printButton('「준비는 끝났어.」', 1);
  await era.input();
  era.println();
  await era.printAndWait([
    '이제 내게는 완벽한 준비, 상대를 납득시킬 능력과 인품, ',
    donna.sex,
    '에 대한 불만을 없애는 나쁜 버릇 교정, 그리고 이미 끝마친 사전 조율까지 모두 갖춰져 있다.',
  ]);
  await era.printAndWait([
    '허세는 필요 없어. 이제는 ',
    donna.sex,
    '와 막힘없이 대화할 수 있고, 이 담당은 반드시 내가 맡아야만 한다.',
  ]);
  era.println();
  await me.say_and_wait(['생각만 해도 심장이 뛰는군.'], true);
  era.println();
  await era.printAndWait(['우선 씻고 옷부터 갈아입어야지, 냄새나니까.']);
  await era.printAndWait(['밸브를 돌리자 뜨거운 물이 쏟아져 내렸다.']);
  me.say(['신성하고 아름다운 아르키메데스*……']);
  await era.printAndWait('*남성', { fontSize: '0.75rem' });
  await era.printAndWait(['트레이너는 벽을 짚고 기대어 서서, 상태를 점검하며 최소한의 사고만 이어갔다.']);
  era.println();
  await era.printAndWait([
    '더 이상의 조사는 필요 없어. ',
    donna.get_colored_name(),
    '는 지금도, 앞으로도 나만큼 적합한 트레이너를 찾기 힘들 거야. 이건 내 오만이기도 하지만, 동시에 「이 모든 게 내 덕분이다」라고 말할 수 있는 자신감이기도 하지.',
  ]);
  era.println();
  await era.printAndWait([
    '——뜨거운 물이 계속 쏟아져 내렸다. 온몸이 아플 정도로 짜릿하고 개운한 감각.',
  ]);
  era.println();
  await era.printAndWait(['왜냐고 묻는다면, ', donna.sex, '의 심성 때문이지……']);
  era.println();
  await me.say_and_wait([
    '강렬한 투쟁심은 성격이 나쁘다는 오해를 사기 쉬워. 단순히 애매한 소문만 돌아도, 의심을 받는 ',
    donna.get_uma_sex_title(),
    '는 소위 『성격 불량』이라는 낙인 때문에 오랫동안 지명을 받지 못하게 되지.',
  ]);
  await me.say_and_wait([
    '내가 오지 않았더라도, ',
    donna.sex,
    '는 자신과 맞는 트레이너를 쉽게 찾지 못했을 거야. 결국 불편함을 견디며 레이스에 나갈 수도 있었겠지만, 그럼 ',
    donna.get_colored_name(),
    '에게는 아쉬움이 남았겠지.',
  ]);
  await me.say_and_wait([
    '하지만 나는…… 한 걸음 다가가 관찰하고, 대화하고, 이해하고, 인정했어. 그래서 ',
    donna.sex,
    '는 내가 자신의 역사를 흔드는 것을 허용했다. 왜냐하면, ',
    donna.sex,
    '와 꿈을 함께하고, 하나가 되어, 같은 곳을 바라보며 나아갈 트레이너가 나타났으니까!',
  ]);
  era.println();
  await era.printAndWait([
    '혹시라도 내가 ',
    donna.sex,
    '의 성격을 감당하지 못할까 봐 걱정되기도 했지만, ',
    donna.get_colored_name(),
    '가 가진 그 아름다운 자질을 생각하면…… 트레이너라면 본능적으로 승리의 여신을 갈망하는 법이지. 어떤 소문이나 편견이 있든, 시간이 조금만 흐르면 다들 불나방처럼 ',
    donna.sex,
    '라는 불꽃 속으로 뛰어들 거야.',
  ]);
  await era.printAndWait([
    '나는 지금 그 불꽃 앞에서 유혹을 견디며 잠시 멈춰 선 소수의 사람 중 하나고, ',
    donna.sex,
    '의 진심을 이해하려 인내하며, 바로 지금 공감대를 형성할 수 있는 능력 있는 트레이너는 나뿐이다.',
  ]);
  await era.printAndWait(['지금이 바로 치고 나갈 타이밍이야.']);
  await era.printAndWait(['반드시 내가 아니면 안 돼.']);
  era.println();
  await era.printAndWait([
    '거품을 칠하고 고개를 들어 물줄기를 맞았다. 기름기와 냄새가 전부 씻겨 나갔다. 아직 모르는 ',
    donna.sex,
    '의 소원이 떠올랐다.',
  ]);
  era.println();
  era.printButton(`「${donna.sex}는 무엇을 원하지?」`, 1);
  await era.input();
  era.println();
  await era.printAndWait([
    '아직 나는 ',
    donna.sex,
    '가 무엇을 원하는지 몰라. 클래식 삼관? 여기에 무패까지? 더비와 타카라즈카 연속 제패? 재팬 컵 연패? 아니면 해외 원정?',
  ]);
  await era.printAndWait([donna.sex, '는 무엇을 원할까?']);
  await me.say_and_wait(['……혹시 트리플 티아라 노선을 꿈꾸는 건 아니겠지?']);
  await me.say_and_wait(['……']);
  era.println();
  await era.printAndWait([
    '솔직히 말해, 나는 ',
    donna.sex,
    '가 ',
    race_infos[race_enum.oka_sho].get_colored_name(),
    '에 나가는 건 바라지 않는다.',
  ]);
  await era.printAndWait([
    '지나치게 이기적인 바람과 환경에서 비롯된 집단적 편견이 뒤섞여, 자기혐오가 치밀어 올랐다. 짜증이 섞인 채 물을 뿌려 대며 마음을 다잡았다.',
  ]);
  await era.printAndWait([
    '공용 욕실을 나오니 갓 씻었는데도 온몸에 땀이 났다. 거울을 보며 매무새를 다듬고, 뺨을 스스로 후려쳤다. 양쪽 거울에 비친 그림자까지 흠칫 놀랐다. ',
    me.sex,
    '들은 결국 불만을 투덜거렸지만, 겉으로는, 적어도 겉으로는 자신의 욕심에서 한 발짝 물러설 의향이 있는 모양이었다.',
  ]);
  await era.printAndWait(['나는…… 만족스러우면서도 한편으론 씁쓸했다.']);
  await era.printAndWait([
    '어쩔 수 없지. 원하는 것을 얻으려면 무언가는 포기해야 하고, 우선순위를 정해야 하는 법이니까. 무언가에 얽매이지 않으면 진정한 갈망도, 과정의 즐거움도 느낄 수 없어.',
  ]);
  await era.printAndWait([
    '이건 치러야 할 대가야. 별일 아니지. 그런 마음으로 ',
    donna.sex,
    '와 계약해 위대한 업적을 이루겠다는 의지를 다시 불태우며, 나는 맹렬하게 발걸음을 옮겨 교사 휴게실로 향했다——',
  ]);
  era.println();
  await me.say_and_wait([
    '드디어…… 감동을 전하고, 내 열정을 전달해, 응답을 받아내야 해! 이 ',
    donna.get_uma_sex_title(),
    '는 내가 육성해야만 해!',
  ]);
  era.println();
  await me.say_and_wait([
    '반드시 내가 아니면 안 돼! 아니면, ',
    donna.sex,
    '와 맞붙어 싸울 라이벌을 내가 키워내기라도 할 테니까!',
  ]);
  era.println();
  await era.printAndWait(['문을 밀고 들어갔다.']);
  era.println();
  era.printButton('「안녕——!」', 1);
  await era.input();
  era.println();
  await donna.say_and_wait([
    '——안녕하세요, 지난번에 봤었죠. 이상한 ',
    me.get_adult_sex_title(),
    '.',
  ]);
  await era.printAndWait([
    donna.sex,
    '는 소파에서 일어나 서 있었다——아마도 예의상 그러는 듯했고, 턱으로 문을 가리켰다——어쩌면 무례한 행동일지도 모르겠다.',
  ]);
  era.println();
  await donna.say_and_wait(['이 문, 당신이 오기 전부터 계속 시끄러웠거든요.']);
  era.println();
  await me.say_and_wait([
    '내가 들어오기 위해 그랬겠지. 그래서 조급하게 기다리며, 반드시 올 미래를 불안해하고 있었던 거야.',
  ]);
  await era.printAndWait(['잠시 침묵이 흘렀다. ', donna.sex, '는 흥미롭다는 듯 눈꼬리를 올렸다.']);
  const in_team_list = sys_filter_chara(
      'cflag',
      '모집상태',
      recruit_flags.yes,
    ).filter((e) => e > 0),
    has_palace =
      in_team_list.findIndex(
        (e) =>
          era.get(`cflag:${e}:육성턴수합산`) >= 144 &&
          era.get(`cflag:${e}:명예의전당`) > 0,
      ) !== -1,
    has_in_edu =
      in_team_list.findIndex(
        (e) => era.get(`cflag:${e}:육성턴수합산`) < 144,
      ) !== -1;
  await donna.say_and_wait([
    '방식을 바꾸셨군요, 꽤나 저돌적이셔서 놀랐어요…… 지난번 조언은 감사히 받았어요. 정말 훌륭했죠. ',
    has_palace
      ? '연차만 쌓인 무능한 자는 절대 아니군요'
      : has_in_edu
        ? '이 풋내 나는 신입에게는 과분할 정도로 깊이 있는 견해였어요'
        : '갓 배지를 단 신입이라기엔 놀라운 실력이네요',
    '라고요.',
  ]);
  await donna.say_and_wait([
    '그래서, 저를 지명하겠다는 트레이너로서, 조언을 핑계로 접근하고 이토록 멋진 기세로 문을 열고 들어오셨는데! 이제 제 앞에서, 이미 저에 대해 다 파악했다며 거창한 소리를 늘어놓으셨으니, 그다음엔 어떻게 저를 설득하실 건가요?',
  ]);
  era.println();
  era.printButton('「나는 이 일주일을 허투루 보내지 않았어.」', 1);
  await era.input();
  era.println();
  await me.say_and_wait([
    '알고 있어. 지난번 그 레이스에서의 짧은 분석만으로 너를 설득하려 했다간 거절당하기 딱 좋겠지.',
  ]);
  await donna.say_and_wait(['일주일……']);
  era.println();
  await era.printAndWait([
    '지난 일주일 동안 자신이 얼마나 많은 지명을 거절했는지, 앞으로는 또 어떻게 될지 떠올린 듯, ',
    donna.get_colored_name(),
    '의 미간이 살짝 찌푸려졌다.',
  ]);
  era.println();
  await me.say_and_wait([
    '당신이 나를 기다리며 희생한 게 많다는 건 알아. 아무리 최고급 원석이라도 선택받지 못한 채 기회를 기다리는 건 큰 비용을 치르는 일이니까.',
  ]);
  await donna.say_and_wait(['그래서 그 일주일 동안 뭘 하셨는데요?']);
  me.say([
    '트레센의 미디어 아카이브를 활용했지. 지난 3개월 동안 ',
    donna.get_colored_name(),
    '가 출전한 레이스 영상, 그리고 당신을 타겟으로 삼아 최종 추적*을 진행했던 영상들을 전부, 하나도 빠짐없이 찾아봤어. 내가 ',
    donna.get_colored_name(),
    '의 트레이너라고 가정하고, 평가와 개선 방안을 전부 적어봤지.',
  ]);
  await era.printAndWait('* 최종 추적: 레이스 직전에 하는 마지막 강도 높은 훈련', {
    fontSize: '0.75rem',
  });
  await donna.say_and_wait(['……3개월이요?']);
  await me.say_and_wait([
    '놀랄 건 없어. 네가 레이스에 나가는 빈도가 다른 ',
    donna.get_uma_sex_title(),
    '보다 높긴 하지만, 하드디스크에 저장해 놓고 보면…… 이 정도로 지켜보는 트레이너에게는 그저 평소보다 조금 많은 업무량일 뿐이지.',
  ]);
  await donna.say_and_wait(['최……최종 추적 영상은 어디서 구하신 거죠?']);
  await me.say_and_wait([
    '어떤 ',
    donna.get_uma_sex_title(),
    '의 개인 페이지, 학원 내 게시판 열성 팬들의 아카이브, 그리고 샤이닝 위클리 보관소에서 가져왔어.',
  ]);
  era.println();
  await era.printAndWait([
    { color: donna.color, content: '「3개월…… 3개월이라.」' },
    donna.get_colored_name(),
    '는 눈을 감고 내 대답을 천천히 곱씹었다. ',
    donna.sex,
    '의 강경하던 목소리가 점점 차분해지더니, 감동한 듯 흡족한 표정으로 소파에 기대어, ',
    { color: donna.color, content: '「그랬군요……」' },
    '라며 만족스럽게 몸을 둥글게 말았다.',
  ]);
  era.println();
  await donna.say_and_wait(['……아직 성함도 안 여쭤봤네요.']);
  await me.say_and_wait([
    '그저 자신이 흥미를 느끼는 상대에게만 열광하고, 평범한 경로나 목표에는 전혀 관심 없는 트레이너일 뿐이야.',
  ]);
  await donna.say_and_wait(['옆에 앉으세요. 이름이 뭐죠?']);
  era.println();
  await era.printAndWait([
    '나는 그대로 소파에 체중을 싣고 앉아 한 번도 시선을 떼지 않은 채 ',
    donna.sex,
    '를 응시하며 ',
  ]);
  await me.say_and_wait([me.actual_name, '(이)야.']);
  await donna.say_and_wait(['사기당해 본 적 있어요?']);
  await me.say_and_wait(['어떤 사기?']);
  await donna.say_and_wait([
    '상대에게 흥미를 느끼게 하고, 당신의 투자와 노력을 즐기게 만들고선, 정작 형편없는 보상만 주는 사기요.',
  ]);
  await me.say_and_wait(['그렇다면 나는 본의 아니게 남을 속인 적도 있고, 본의 아니게 사람에게 상처받은 적도 있지.']);
  await donna.say_and_wait([
    '아직 정식 담당 관계도 아니잖아요——물론 저는 이미 당신과 계약해야겠다고 마음먹었지만요——이렇게까지 하는 건 좋지 않아요.',
  ]);
  await me.say_and_wait([
    '설령 그렇다 해도 너는 나에게 빚진 게 없어. 나는 자발적으로 한 일이니까. 나는 그저…… 시간을 낭비할 인내심이 없을 뿐이야. 그래서 다급하게, 전력을 다해 준비한 거지.',
  ]);
  await me.say_and_wait([
    '너를 놓치면, 다음에 언제 또 이런 천재를 만날 수 있을지 알 수 없잖아. 그때가 되어 내가 다른 누군가의 생애를 온 힘을 다해 지원할 여력이 남아있을지도 모르고.',
  ]);
  await me.say_and_wait([
    '무엇보다, 네가 시간을 낭비하는 걸 보고만 있을 수도 없어. 그러면 네 업적은 뒤처지고, 손해를 보게 될 테니까.',
  ]);
  me.say([
    '너는 이런 압도적인 신체 능력과 강인한 심성을 가졌고, 그 외에도 하늘이 너를 위해 모든 것을 완벽하게 준비해 줬잖아. 엄청난 재력, 벌써 합류한 라이벌들, 무엇이든 챙겨주는 룸메이트*, 그리고 트레센 학원 입학 자격까지.',
  ]);
  await era.printAndWait('* ', get_chara_talk(114).get_colored_name(), {
    fontSize: '0.75rem',
  });
  await donna.say_and_wait(['분명 제가 세 여신님께 사랑받을 자격이 있는 존재이기 때문이겠죠.']);
  await me.say_and_wait([
    '지금 당장, 위대한 여정을 시작한다면, 아마 네가 거머쥐지 못할 영광은 없을 거야——온 세상이 당신의 손아귀에 있으니까.',
  ]);
  era.println();
  await era.printAndWait(['나는 숨을 몰아쉬며, 팔걸이에 묻은 손에 밴 땀을 몰래 닦아냈다.']);
  await me.say_and_wait(['그러니까, 내 배에 타.']);
  await me.say_and_wait([
    '누구보다 네 생애를 직접 지원하고 싶고, 누구보다 너의 두 다리를 직접 단련시키고 싶어.',
  ]);
  await donna.say_and_wait([
    '너무 과장하시네요…… 저도 평소에 남을 깔보는 편이지만, 그런 안하무인 격의 말은 좋아하지 않아요.',
  ]);
  await me.say_and_wait([
    '그것도 상관없어. 설령 내가 너의 운명적인 트레이너가 아니어서, 결국 좋지 않게 헤어지게 된다 해도, 그게 나에게 무슨 상관이겠어.',
  ]);
  await donna.say_and_wait(['아까는 누구보다 원한다면서요?']);
  await me.say_and_wait([
    '내 흥미는 너에게 있지만, 그 흥미를 만족시키는 방식은…… 다른 ',
    donna.get_uma_sex_title(),
    '를 단련해서 나의 최고의 걸작으로서 당신과 맞붙게 만드는 것도, 너와 직접 계약하는 것 못지않게 즐거울 것 같거든.',
  ]);
  era.println();
  await era.printAndWait(['여기, 한 사람은 미간을 찌푸리고, 한 사람은 자신의 선언을 쏟아낸다——']);
  era.println();
  await me.say_and_wait([
    '내 배에 타! 그 등골 서늘하게 만드는 무기! 그 무기를 갈고닦을 사람은 바로 나여야만 해. 설령 내가 그 운명적인 파트너가 아니라 해도, 더 뛰어난 작품을 만들어 너와 맞붙게 만들 사람도 나여야만 해! 태워 줄게……',
  ]);
  await me.say_and_wait([
    '내가 너를 위해 할 수 있는 일은 이미 전부 다 했어. 설령 네가 나와 함께하지 않겠다 해도, 지난 일주일간의 성과는 어떻게든 너에게 전달해 줄 거야.',
  ]);
  await me.say_and_wait([
    '너도 가끔은 망설이겠지. 괜찮아, 그것도 생각했어. 열정은 뜨겁지만 쉽게 꺼져버리는 그런 동료는 누구도 원하지 않으니까.',
  ]);
  await me.say_and_wait([
    '그러니까…… 3주. 딱 3주간만, 비공식적으로 내 훈련을 받아봐. 그 임시 관계가 끝나면, 네가 직접 대답해 줘. 내 배에 탈지 말지.',
  ]);
  era.println();
  era.printButton('단호하게 손을 내민다', 1);
  await era.input();
  era.println();
  await era.printAndWait([
    donna.sex,
    '를 향해 단호하게 손을 내밀었다. 마치 묵직한 금화 가방을 건네는 것처럼 손이 격렬하게 떨렸다.',
  ]);
  era.println();
  await me.say_and_wait(['모든 것을 다 털어놨어. 이제 내 말이 거짓이 아니라는 걸 알겠지.']);
  await donna.say_and_wait(['정말…… 당신의 호의를 받아들여야겠네요.']);
  era.println();
  await era.printAndWait([donna.get_colored_name(), ' 는 거듭 살핀 뒤, 여유롭게 손을 맞잡았다.']);
  era.println();
  await me.say_and_wait([
    '어서 와, ',
    me.actual_name,
    '호에. 귀하신 손님, 말했듯이 너를 태워 줄게. 네 앞날에 한 치의 아쉬움도 남지 않게 할 거야! 만약 나보다 더 눈에 띄는 트레이너가 나타난다면, 그때 배에서 내리면 돼.',
  ]);
  await donna.say_and_wait([
    '그런 말은 접어두시죠. 당신의 심성에는 경외심을 느낍니다. 그래서 진심으로 함께하기로 마음먹었어요. 당장 관계를 맺지 않은 건, 당신의 제안을 경의를 표하며 받아들이기 위해서일 뿐이에요.',
  ]);
  era.println();
  await era.printAndWait(['정말…… 기쁘네.'], true);
  await era.printAndWait([
    '나는 ',
    donna.sex,
    '의 손을 잡고 훈련장으로 향하려 했지만, ',
    donna.sex,
    '는 마치 땅에 박힌 듯 움직이지 않았다.',
  ]);
  era.println();
  await donna.say_and_wait([
    '이건 정말…… 당신의 설교나 말솜씨는 정말 대단한데, 예의는 어디 가셨나요?']);
  era.println();
  era.printButton('「뭐를 원해?」', 1);
  await era.input();
  era.println();
  await era.printAndWait([
    donna.sex,
    '는 검지와 중지로 두 입술을 가볍게 톡톡 두드리더니, 위엄 있게 턱을 치켜들었다…… 마치 신전의 제단에 앉은 듯한 요염함에, 미친 듯이 뛰던 내 심장에 다른 차원의 감정이 스며들었다.',
  ]);
  await era.printAndWait([donna.get_colored_name(), ' 가 나에게 우아하게 손을 내밀며 초대했다.']);
  era.println();
  await donna.say_and_wait(['키스의 예법이에요.']);
  await this.recruit_end();
  new EventMarks(0).sub(event_hooks.week_end);
  era.set(`cflag:${this.id}:모집상태`, recruit_flags.yes);
  era.set('flag:대상물색', 0);
}

module.exports = know_me;