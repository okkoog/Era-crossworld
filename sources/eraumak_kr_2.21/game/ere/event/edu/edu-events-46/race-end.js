const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const CharaTalk = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { race_enum } = require('#/data/race/race-const');

/**
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (hook, extra_flag) => {
  const callname = sys_get_callname(46, 0),
    falcon = new CharaTalk(46),
    chara2_talk = get_chara_talk(2),
    chara4_talk = get_chara_talk(4),
    me = get_chara_talk(0),
    edu_weeks = era.get('cflag:46:육성턴수합산');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('데뷔전 후·떠오르는 신성', falcon);
    await say_by_passer_by(`해설`, `승자는 바로——${falcon.name}입니다!`);
    await era.printAndWait(
      `팬들에게 선언했던 대로, ${falcon.name}은 레이스 시작부터 모든 관객의 시선을 한몸에 사로잡았다.`,
    );
    await era.printAndWait(
      `그렇게 다른 ${falcon.uma_sex_title}들과의 거리를 유지하며 마지막까지 달려 나갔다.`,
    );
    await falcon.say_and_wait(
      `${callname}! ${callname}! 경기장에서 팔코가 활약하는 모습 봤어?`,
    );
    era.printButton(`나도 모르게 넋을 잃고 봤어!`, 1);
    await era.input();
    await falcon.say_and_wait(`정말? 다행이다⭐`);
    await era.printAndWait(
      `경기장에서 내려온 ${falcon.name}은 잠시 휴식을 취한 뒤 금세 활기를 되찾았다.`,
    );
    await era.printAndWait(
      `다리 근육의 마비를 풀어주기 위해 마사지를 돕는 ${me.name}의 얼굴에도 숨길 수 없는 미소가 번졌다.`,
    );
    await falcon.say_and_wait(
      `——그렇게 팔코가 더 이상 못 버티겠다 싶었을 때, 관객석에서 응원 소리가 들렸어! 그러니까 팔코도 모르게 어디선가 힘이 솟아나서 그대로 끝까지 단번에 달려 나갔지 뭐야!`,
    );
    await era.printAndWait(
      `경기장에서 내려온 ${falcon.name}은 위닝 라이브가 시작되기 전 틈을 타서 관객석의 모두에게 매일 진행하는 돌발 라이브를 홍보하려 했으나, 결국 ${me.name}에 의해 제지당했다.`,
    );
    await falcon.say_and_wait(`팔코의 다음 공연도 기대해 줘!`);
    await era.printAndWait(
      `마지막 마사지가 끝나자, ${falcon.name}은 새로운 감각을 확인하듯 발끝을 세웠다.`,
    );
    era.printButton(`모두에게 더트 아이돌의 기개를 보여주자고!`, 1);
    await era.input();
    await falcon.say_and_wait(
      `이대로 모든 관객의 마음을 팔코의 홈그라운드에서 전～부 빼앗아 올게♪ 왜냐하면 팔코는 세상에서 가장 빛나는 우마돌이니까⭐`,
    );
    era.drawLine({ content: '위닝 라이브' });
    await falcon.say_and_wait(`이게 위닝 라이브야?`, true);
    await era.printAndWait(
      `스태프의 안내에 따라 미리 정해둔 대형대로 리프트 위에 섰다.`,
    );
    await era.printAndWait(
      `대형을 맞출 때만 해도 웅성거리는 소리가 들렸으나, 정지 위치에 서자 들리는 것은 오직 미세한 숨소리뿐이었다.`,
    );
    await falcon.say_and_wait(`${falcon.name}의 꿈이 여기서 시작되는 거야!`, true);
    await era.printAndWait(
      `강렬한 진동과 함께 ${falcon.name}에게 아래로 향하는 힘이 전해졌다. 이제 곧 정식 공연이다.`,
    );
    await era.printAndWait(
      `마음속으로 무서울 것 없다고 다짐했지만, 이마와 손바닥은 이미 땀으로 젖어 있었다.`,
    );
    await era.printAndWait(
      `조명은 이미 순위 순서대로 무대를 비추고 있었고, 시간은 ${falcon.teen_sex_title}들을 기다리며 서서히 멈춰갔다.`,
    );
    await era.printAndWait(
      `간절히 바랐던 무대가 눈앞에 있었다. 연습했던 안무가 뇌리를 수없이 스쳐 지나갔고, 긴장으로 머릿속이 하얘졌지만, 멈춰있던 시간은 다시 천천히 흐르기 시작했다. 지금이 바로 나아갈 때였다.`,
    );
    await era.printAndWait(`그렇게 ${falcon.name}은 자신의 첫 번째 위닝 라이브를 완수했다.`);
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('사츠키상 후·빛나는 큰 무대', falcon);
    await falcon.say_and_wait(`정말이야……?`);
    await falcon.say_and_wait(
      `팔코…… 팔코가 정말로 이겼어! Lucky! Victory⭐`,
    );
    await era.printAndWait(
      `${me.name} 역시 전광판의 글자를 뚫어지게 쳐다보았다. 눈앞의 사실이 마치 꿈인 것만 같아, 이대로 꿈에서 깨어나 버릴까 봐 두려웠다. 하지만 깬다고 해도 분명 좋은 꿈일 것이라 생각했다.`,
    );
    await era.printAndWait(
      `하지만 ${falcon.name}의 순위는 ${me.name}의 걱정과는 상관없이 변하지 않았다. 중력으로 인해 나무에서 사과가 떨어지는 것처럼 확고하고 안심되는 사실이었다.`,
    );
    await falcon.say_and_wait(
      `꿈 아니지! ${callname}!`,
    );
    await era.printAndWait(`${falcon.name} 역시 이 환희 속에서 아직 헤어 나오지 못한 듯했다.`);
    era.printButton(`다음은 팔코가 그토록 바라던…… 잔디 무대야!`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) 스스로도 놀랄 정도로 날카롭고 떨리는 목소리를 냈다.`,
    );
    await falcon.say_and_wait(`응!`);
    await era.printAndWait(
      `${falcon.name}은 그제야 정신을 차리고, 위닝 라이브에 필요한 준비를 서둘렀다.`,
    );
    await era.printAndWait(`${me.name}은(는) 좌석에 몸을 기댄 채 한참 동안 멍하니 있었다.`);
    era.drawLine({ content: '위닝 라이브 종료 후' });
    await me.say_and_wait(`수고했어.`);
    await era.printAndWait(
      `${me.name}은(는) 미리 준비한 수건을 김이 모락모락 나는 ${falcon.name}에게 건넸다.`,
    );
    await era.printAndWait(
      `온몸이 땀에 젖어 녹초가 되었음에도, ${falcon.name}의 두 눈은 빛나고 있었다.`,
    );
    await me.say_and_wait(`사츠키상 무대는 어땠어?`);
    await falcon.say_and_wait(`상상했던 것보다 훨씬 더 넓고, 훨씬 더 반짝였어!`);
    await falcon.say_and_wait(
      `게다가 팔코, 이렇게 많은 사람 앞에서 공연해 본 건 처음이야. 특히 달려왔던 코스보다 두 배는 더 큰 곳에 서 있으니까 말이야.`,
    );
    await era.printAndWait(
      `수건으로 머리카락에 맺힌 땀을 닦으며 ${falcon.name}은 ${me.name}을(를) 바라봤다.`,
    );
    await falcon.say_and_wait(
      `그 수많은 관객의 시선 속에서 팔코는 마치 힘이 샘솟는 것 같았어…… ${callname}도 팔코가 말하는 그 모두에게 주목받는 느낌을 알 수 있다면, 팔코가 무슨 말을 하는지 이해할 텐데.`,
    );
    await era.printAndWait(
      `${falcon.name}은 약간 아쉬운 듯 손놀림을 멈췄다. 눈은 무언가를 쫓는 듯했고, 아름다운 것을 추억할 때처럼 무의식적으로 수건을 비비고 있었다.`,
    );
    await chara2_talk.say_and_wait(`실례할게요...`);
    await era.printAndWait(`사일런스 스즈카가 대기실 문을 열었다.`);
    await chara2_talk.say_and_wait(`어라? 나중에 다시 오는 게 좋을까요?`);
    await era.printAndWait(
      `${falcon.name}의 움직임이 멈췄고, 사일런스 스즈카는 ${me.name}의 다음 말을 기다리는 듯했다.`,
    );
    await me.say_and_wait(`아니야, 오히려 잘 왔어. 고마워, 스즈카.`);
    await me.say_and_wait(`지난번 잔디 특훈이 정말 큰 도움이 됐어.`);
    await era.printAndWait(`${me.name}은(는) 진심으로 사일런스 스즈카에게 감사를 표했다.`);
    await falcon.say_and_wait(
      `고마워, 스즈카링! 팔코가 승리할 수 있었던 건 전부 스즈카링 덕분이야⭐`,
    );
    await chara2_talk.say_and_wait(`스…… 스즈카링?`);
    await era.printAndWait(`어느새 ${falcon.name}은 평소의 모드로 돌아와 있었다.`);
    await me.say_and_wait(
      `이번 레이스의 큰 공로자니까, 스즈카도 우리와 함께 축하 파티에 가지 않을래?`,
    );
    await era.printAndWait(
      `묘한 분위기를 뒤로하고, ${me.name}은(는) 사일런스 스즈카에게 제안했다.`,
    );
    await chara2_talk.say_and_wait(
      `……${callname}이 그렇게까지 말한다면, 기쁘게 갈게요.`,
    );
    await era.printAndWait(`그렇게 일행은 근처의 유명한 양식 레스토랑에서 승리의 맛을 만끽했다.`);
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('사츠키상 후·동경하는 무대 중앙', falcon);
    await era.printAndWait(`대기실에서`);
    era.printButton(`라이브 수고했어, 팔코.`, 1);
    await era.input();
    await era.printAndWait(
      `사츠키상에서 우승하지는 못했지만, ${falcon.name}은 만족스러운 모습이었다.`,
    );
    await falcon.say_and_wait(`사츠키상 무대는 생각보다 훨씬 컸어……`);
    await falcon.say_and_wait(
      `평소에 서던 무대보다 두 배는 더 크고, 눈부신 플래시랑 우리를 지켜봐 주는 관객들로 가득했지.`,
    );
    await falcon.say_and_wait(
      `그래도 역시 가장 빛나는 건 무대 정중앙 자리겠지…… 다음번엔 팔코가 꼭 저 자리에 올라가고 말 거야!`,
    );
    await falcon.say_and_wait(`팔코 파이팅!`);
    await me.say_and_wait(
      `바보야, 사츠키상은 클래식급 ${falcon.uma_sex_title}만 참가할 수 있는 레이스라고!`,
    );
    await era.printAndWait(`${me.name}은(는) ${falcon.name}의 작은 머리를 꿀밤으로 가볍게 때렸다.`);
    await falcon.say_and_wait(`에헤헤⭐`);
    await era.printAndWait(`혀를 쏙 내미는 ${falcon.name}은 의외로 귀여워 보였다.`);
    await me.say_and_wait(`정말 귀엽네.`, true);
    await me.say_and_wait(`크흠! 이제 팔코는 재팬 더트 클래식을 잘 준비해야 해.`);
    await falcon.say_and_wait(`응⭐`);
    await me.say_and_wait(`하지만 우마돌 라이브도 소홀히 하면 안 돼!`);
    await falcon.say_and_wait(`당연하지⭐`);
    await me.say_and_wait(`이 기세 그대로 나아가는 거야!`);
    await falcon.say_and_wait(
      `최강의 우마돌——${
        falcon.name
      }⭐ 다음에는 꼭 모두에게 팔코가 반짝반짝 빛나는 모습을 보여줄게!`,
    );
    await era.printAndWait(`${falcon.name}은 활기찬 목소리로 대답했다.`);
    await era.printAndWait(`${me.name}은(는) 앞으로의 레이스를 기대하기 시작했다.`);
  } else if (
    extra_flag.race === race_enum.japa_dir &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('재팬 더트 클래식 후·만족스러운 시간', falcon);
    await era.printAndWait(`대기실\n`);
    await falcon.say_and_wait(
      `${callname}! 무대 위에서의 팔코 모습 봤어?⭐`,
    );
    await me.say_and_wait(`현장 분위기가 생각보다 훨씬 뜨거웠어!`);
    await era.printAndWait(
      `무대 위의 ${falcon.name}은 레이스 때보다 오히려 이곳이 ${falcon.sex}의 진짜 홈그라운드인 것처럼 느껴졌다.`,
    );
    await era.printAndWait(
      `수없이 연습했던 안무와 팬들과의 티키타카가 현장 분위기를 한껏 끌어올렸다.`,
    );
    await me.say_and_wait(`팔코는 우마돌로서 정말 프로급이네.`);
    await era.printAndWait(
      ` 어쩌면 ${falcon.sex}는 레이스 ${falcon.get_uma_sex_title()}보다 아이돌 방향으로 나갔어야 하는 거 아닐까?`,
    );
    await falcon.say_and_wait(
      `팔코는 톱 우마돌을 목표로 나아가고 있으니까, 우마돌의 기초 중의 기초도 성실하게 임하는 게 당연해!`,
    );
    await me.say_and_wait(`지금 다리에 감각은 좀 있어?`);
    await era.printAndWait(`러닝 슈즈를 벗긴 후, ${falcon.name}의 발 마사지를 시작했다.`);
    await falcon.say_and_wait(`아까보다는 조금 감각이 돌아온 것 같아!`);
    await me.say_and_wait(
      `팔코의 열정은 불꽃처럼 뜨겁지만, 몸을 소홀히 하면 금방 다치게 된다고!`,
    );
    await falcon.say_and_wait(
      `응, 알았어. 앞으로도 ${callname}에게 잘 부탁할게.`,
    );
    await era.printAndWait(
      `무대에서 내려온 팔코는 거의 서 있지도 못할 정도여서, 결국 ${me.name}이(가) 팔코를 안고 대기실까지 옮겨야 했다.`,
    );
    await me.say_and_wait(`팔코는 나비처럼 예쁘네.`);
    await era.printAndWait(`스스로를 태워 세상을 비추는, 연약하면서도 깨지기 쉬운 존재.`);
    await falcon.say_and_wait(
      `어? 나비……? 만약 팔코가 나비라면, ${callname}도 꽃밭에 있을 거야?`,
    );
    await me.say_and_wait(`오히려 팔코를 만난 건 내 영광이지!`);
    await falcon.say_and_wait(`앗—— 팔코, 잡혀버리겠어!`);
    await me.say_and_wait(`이젠 팔코, 못 도망가게 할 거야!`);
    await era.printAndWait(`${falcon.name}은 재팬 더트 더비에서 승리했다.`);
  } else if (
    extra_flag.race === race_enum.jbc_cls &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('JBC 클래식 후·과부하', falcon);
    await era.printAndWait(`${falcon.name}은 압도적인 차이로 레이스에 승리했다.`);
    await era.printAndWait(`도주 전법을 구사한 ${falcon.name}은 레이스 전체의 페이스를 완벽히 지배했다.`);
    await era.printAndWait(
      `이어진 위닝 라이브에서도 ${falcon.sex}는 온 힘을 다해 퍼포먼스를 선보였다.`,
    );
    await era.printAndWait(`그러나——`);
    await era.printAndWait(
      `의사 「몸에 큰 이상은 없습니다만, 과로로 인해 정신을 잃은 것뿐입니다.」`,
    );
    await era.printAndWait(
      `의사 「당신이 ${falcon.name}의 트레이너입니까? 왜 ${falcon.sex}를 좀 더 쉬게 하지 않았죠?」`,
    );
    await me.say_and_wait(`죄송합니다. 다 제 잘못입니다.`);
    await era.printAndWait(`의사 「당분간은 무리하지 않도록 주의하세요.」`);
    await me.say_and_wait(`감사합니다, 의사 선생님.`);
    await era.printAndWait(
      `병상에 누워있는 ${falcon.name}을 바라보며, 자리에 앉은 ${me.name}은(는) 주먹을 꽉 쥐었다.`,
    );
    era.drawLine();
    await me.say_and_wait(`팔코! 정신 차려봐, 팔코!`);
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} A「방금 공연할 때만 해도 저렇게 활기찼는데, 리프트에서 내려오자마자 갑자기——」`,
    );
    await me.say_and_wait(`구급차! 구급차 어디 있어?`);
    await era.printAndWait(`책임자 「이미 구급차를 불렀습니다.」`);
    await era.printAndWait(`책임자 「우선 서둘러 보건실로 옮기죠.」`);
    await era.printAndWait(`${falcon.name} 「${callname}……?」`, {
      fontSize: '0.5rem',
    });
    await era.printAndWait(
      `${falcon.name}을 조심스럽게 등에 업고, 책임자의 안내에 따라 보건실로 뛰었다.`,
    );
    era.printButton(`만약 팔코에게 무슨 일이라도 생긴다면, 나도……`, 1);
    await era.input();
    await era.printAndWait(`${falcon.name} 「${callname}…… 맞아?」`, {
      fontSize: '0.75rem',
    });
    await era.printAndWait(`팔코가 무언가 중얼거리는 듯했다.`);
    await era.printAndWait(
      `보건실로 달려간 이후의 일은 잘 기억나지 않았다. ${falcon.name}이 구급차에 실려 가는 모습을 지켜본 것 외에는 아무것도 생각나지 않았다.`,
    );
    await era.printAndWait(`${falcon.name} 「${me.name}!」`);
    era.drawLine();
    await era.printAndWait(
      `눈앞의 ${falcon.teen_sex_title}가 큰 눈을 뜨고 ${me.name}을(를) 바라보고 있었다.`,
    );
    await era.printAndWait(`땀에 젖은 작은 손이 ${me.name}의 옷소매를 꽉 잡고 놓지 않았다.`);
    await era.printAndWait(`${falcon.name} 「${callname}……?」`);
    await era.printAndWait(`어느새 시야가 뿌옇게 흐려졌다.`);
    await me.say_and_wait(`팔코…… 정말 다행이야.`);
    await era.printAndWait(`${falcon.name}만 무사하다면 그걸로 된 것이다.`);
  } else if (
    extra_flag.race === race_enum.toky_dai &&
    edu_weeks <= 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(`도쿄 대상전 후·${falcon.name}이라는 이름의 더트 아이돌`, falcon);
    await era.printAndWait(`${falcon.name}은 올해의 챔피언이 되었다.`);
    await era.printAndWait(`무대 위의 ${falcon.name}은 마치 새로 거듭난 듯 보였다.`);
    await era.printAndWait(`시원시원한 미소와 노련한 템포 조절로 현장 분위기를 완벽하게 이끌었다.`);
    await me.say_and_wait(`팔코…… 수고했어.`);
    await era.printAndWait(
      `무대에서 내려온 ${falcon.name}은 거친 숨을 몰아쉬었다. 온몸을 적신 땀방울은 아이돌로서의 노력을 상징하는 듯했다.`,
    );
    await era.printAndWait(
      `무대 뒤까지 팬들의 함성이 파도처럼 끊임없이 밀려들어 왔다.`,
    );
    await me.say_and_wait(`생각했던 것보다 훨씬 더 대단한걸.`);
    await era.printAndWait(`아이돌로서 누릴 수 있는 최고의 영예였다.`);
    await falcon.say_and_wait(
      `${callname}이 없었다면 팔코는 이 모든 걸 보지 못했을 거야.`,
    );
    await falcon.say_and_wait(`이건 전부 팔코의 공이라기보다, 음……`);
    await me.say_and_wait(`우리가 함께 노력한 결과지.`);
    await era.printAndWait(
      `몸을 가늘게 떨면서도 ${me.name}에게 환한 미소를 지어 보이며, ${falcon.name}은 손을 내밀었다.`,
    );
    await falcon.say_and_wait(
      `앞으로의 길도 ${callname}과 함께 걸어가고 싶어.`,
    );
    await era.printAndWait(
      `끈적거리는 그 작은 손을 꽉 잡으며, ${me.name} 역시 미소를 지으며 ${falcon.name}을 바라보았다.`,
    );
    await me.say_and_wait(`나도 팔코에게서 배운 게 정말 많아. 앞으로도 잘 부탁해.`);
    await era.printAndWait(
      `서로를 마주 본 두 사람은 가슴 속의 두려움을 모두 씻어내듯 함께 웃었다. 그들은 알고 있었다——`,
    );
    await era.printAndWait(`——이 세상에 이토록 마음이 잘 통하는 사람은 서로밖에 없다는 것을.`);
  } else if (
    extra_flag.race === race_enum.febr_sta &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('페브러리 스테이크스 후·후배', falcon);
    era.drawLine({ content: '위닝 라이브 종료 후' });
    await falcon.say_and_wait(`응원해 주신 여러분, 감사합니다!`);
    await era.printAndWait(`멋지게 라이브를 마친 ${falcon.name}이 대기실로 돌아왔다.`);
    await me.say_and_wait(`팔코, 수고했어!`);
    await era.printAndWait(`건네받은 물과 수건을 챙기며, 벅찬 마음을 서서히 가라앉혔다.`);
    await falcon.say_and_wait(`팔코가 톱 우마돌이 되는 데에 한 걸음 더 가까워진 것 같아!`);
    await me.say_and_wait(`팔코라면 분명히 해낼 수 있을 거야!`);
    await falcon.say_and_wait(
      `저기, ${callname}…… 팔코는 말이야……`,
    );
    await era.printAndWait(`똑똑똑`);
    await era.printAndWait(`눈치 없는 노크 소리가 들렸다.`);
    await me.say_and_wait(`팔코의 팬이 왔나 보네.`);
    await era.printAndWait(`대기실 문을 살며시 열었다.`);
    await me.say_and_wait(`미안해, 팔코는 지금 쉬는 중이라서…… 누구시죠?`);
    await era.printAndWait(
      `전단지를 돌릴 때 만났던, 스스로를 후배라고 소개했던 ${falcon.get_uma_sex_title()}였다.`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「팔코 선배! 우승 축하드려요!」`,
    );
    await falcon.say_and_wait(`어?`);
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「팔코 선배는 모르시나요? 더트에서 뛰는 ${falcon.get_uma_sex_title()}들에게 팔코 선배는 눈부시게 빛나는 별 같은 존재라고요!」`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「잔디 적성이 없어서 더트로 넘어온 저희에게 더 이상 물러날 곳은 없었지만…… 팔코 선배가 저희에게 나아갈 희망을 보여주셨어요!」`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「그러니까 팔코 선배, 부디 계속해서 빛나 주세요!」`,
    );
    await era.printAndWait(
      `말을 마친 후배 ${falcon.get_uma_sex_title()}가 감격한 듯 ${falcon.name}의 손을 꽉 잡았다.`,
    );
    await falcon.say_and_wait(`저기, 팔코는……`);
    await me.say_and_wait(
      `나는 ${falcon.name}의 트레이너야. 지금 팔코는 휴식이 필요하니까, 하고 싶은 말이 있다면 나에게 해줘.`,
    );
    await era.printAndWait(`이 부분만큼은 양보할 수 없었다.`);
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「팔코 선배의 트레이너님인가요? 죄송합니다! 너무 흥분해서 깜빡했어요!」`,
    );
    await era.printAndWait(
      `${falcon.get_uma_sex_title()} 「두 분만의 오붓한 시간을 방해해서 죄송해요! 먼저 갈게요!」`,
    );
    await era.printAndWait(
      `머쓱한 표정을 지은 ${falcon.get_uma_sex_title()}가 서둘러 대기실을 빠져나갔다.`,
    );
    await me.say_and_wait(`겨우 갔네. 팔코?`);
    await falcon.say_and_wait(
      `팔코도 우당탕탕 겨우겨우 나아가고 있을 뿐인데, 뭔가 실감이 안 나네.`,
    );
    await era.printAndWait(`${falcon.name}은 무언가 생각에 잠긴 듯 멍한 표정을 지었다.`);
  } else if (
    extra_flag.race === race_enum.teio_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('제왕상 후·반짝이는 아이돌', falcon);
    await era.printAndWait(`${falcon.name}은 멋지게 1착을 거머쥐었다.`);
    await era.printAndWait(`위닝 라이브에서도 완벽한 무대를 선보였다.`);
    await era.printAndWait(
      `팔코에게 있어 톱 우마돌로 향하는 길은 이제 정말 코앞까지 다가와 있었다.`,
    );
    await falcon.say_and_wait(
      `${callname}, 팔코의 퍼포먼스 어땠어?`,
    );
    await me.say_and_wait(`팔코는 이제 프로 아이돌이랑 다를 게 없네.`);
    await me.say_and_wait(`그래도 역시 우리 팔코가 제일 귀여워.`);
    await falcon.say_and_wait(`응! 팔코도 팔코가 제일 귀엽다고 생각해!`);
    await chara4_talk.say_and_wait(`팔코, 정말 대단한걸!`);
    await era.printAndWait(`어느새 마루젠스키가 대기실 문앞에 서 있었다.`);
    await falcon.say_and_wait(`어라? 마루젠 선배가 여기 웬일이야?`);
    await chara4_talk.say_and_wait(
      `응! 팔코가 열심히 달리는 모습을 보고 언니는 정말～ 감동해버렸어!`,
    );
    await chara4_talk.say_and_wait(
      `반짝반짝 빛나고 싶다는 꿈을 안고 트랙 위를 질주해서, 위닝 라이브에서 최고의 자신을 보여주는 모습!`,
    );
    await chara4_talk.say_and_wait(`언니도 그 열정에 불이 붙어버렸는걸!`);
    await falcon.say_and_wait(`아, 아니야…… 마루젠 선배가 말한 정도는……`);
    await chara4_talk.say_and_wait(
      `음—— 그러고 보니 기회가 된다면 같이 연습해 보지 않을래?`,
    );
    await falcon.say_and_wait(`그게, 팔코는……`);
    await chara4_talk.say_and_wait(`더트라면 언니가 그 정도 결점은 노력해서 극복해 볼게♪`);
    await chara4_talk.say_and_wait(`그럼, 그때 또 보자♪`);
    await falcon.say_and_wait(
      `……응! 마루젠 선배와 함께라면 팔코도 더 많은 걸 배울 수 있을지도 몰라!`,
    );
    await era.printAndWait(`그렇게 제왕상은 완벽하게 막을 내렸다.`);
  } else if (
    extra_flag.race === race_enum.jbc_cls &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('JBC 클래식 후·다시 달려 나가자!', falcon);
    await say_by_passer_by(`팬들`, `팔코! 팔코! 오오오오오오오!`);
    await era.printAndWait(
      `결승선을 통과하는 순간, 온 경기장의 관객이 더트의 새로운 스타에게 환호를 보냈다.`,
    );
    await me.say_and_wait(`팔코는 생각했던 것보다 훨씬 더 반짝이네.`);
    await falcon.say_and_wait(
      `${callname}의 응원 덕분이야! 앞으로도 팔코를 많이 응원해 줘야 해!`,
    );
    await me.say_and_wait(`음—— 다음은 위닝 라이브지?`);
    await era.printAndWait(
      `${me.name}은(는) 올해의 JBC 레이스 영상이 담긴 CD를 플레이어에 넣었다.`,
    );
    await era.printAndWait(
      `비록 현장에서 직접 ${falcon.name}이 골인하는 순간을 보지는 못했지만, 당사자가 생생하게 들려주는 당시의 상황 묘사 덕분에 어느 정도 아쉬움을 달랠 수 있었다.`,
    );
    await falcon.say_and_wait(`그럼 이제 팔코가 강력 추천하는 위닝 라이브 시간⭐`);
    await era.printAndWait(`영상 속의 ${falcon.name}은 당당하게 위닝 라이브 무대로 향했다.`);
    era.drawLine({ content: '위닝 라이브 종료 후' });
    await falcon.say_and_wait(`올해 목표는 이제 도쿄 대상전만 남았네.`);
    await era.printAndWait(
      `${falcon.name}의 공연은 상상 이상으로 멋졌고, 팬들의 함성은 무대를 집어삼킬 듯이 거대했다.`,
    );
    await era.printAndWait(
      `현장에서 직접 보는 것 같은 현장감은 부족했지만, ${me.name}은(는) 충분히 만족스러웠다.`,
    );
    await me.say_and_wait(`톱 우마돌까지 이제 정말 한 걸음 남았네?`);
    await falcon.say_and_wait(`톱 우마돌이 되려면 아직 멀었어.`);
    await me.say_and_wait(`말은 그렇게 해도 말이야.`);
    await era.printAndWait(`${me.name}은(는) 영상을 일시정지하고 다시 ${falcon.name}을 바라보았다.`);
    await me.say_and_wait(`팔코는 생각보다 훨씬 더 강하구나.`);
    await falcon.say_and_wait(`……팔코, 생각보다 그렇게 강하지 않다구?`);
    await me.say_and_wait(`올해의 대미를 장식할 도쿄 대상전을 위해서, 지금은 푹 쉬어둬.`);
    await me.say_and_wait(`결국 팔코는……`);
    await era.printAndWait(`옆에서 ${falcon.name}의 고른 숨소리가 들려왔다.`);
    await era.printAndWait(
      `그동안의 준비를 혼자서 다 해온 탓인지, 쌓여왔던 피로가 결국 한계에 달한 모양이었다.`,
    );
    await me.say_and_wait(`지금은 ${falcon.name}을 잠시 자게 두자.`, true);
    await me.say_and_wait(`고마워, 팔코.`);
    await era.printAndWait(
      `${falcon.name}을 부드러운 소파에 눕히고, 입고 있던 트레이너 복을 ${falcon.name}에게 덮어주었다.`,
    );
    await era.printAndWait(
      `몸을 움직인 게 느껴졌는지 ${falcon.name}의 귀가 쫑긋거렸고, 몸을 더 편안한 자세로 고쳐 누웠다.`,
    );
  } else if (
    extra_flag.race === race_enum.cham_cup &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('챔피언스 컵 후·목표는 도쿄 대상전', falcon);
    await era.printAndWait(`${falcon.name}은 가볍게 챔피언스 컵에서 승리했다.`);
    await era.printAndWait(`무대 위의 ${falcon.name}은 더욱더 눈부시게 변해갔다.`);
    await era.printAndWait(`대기실에서`);
    await falcon.say_and_wait(
      `${callname}—— 이제 도쿄 대상전만 남았어!`,
    );
    await me.say_and_wait(`팔코라면 분명히 해낼 수 있을 거라고 믿어.`);
    await era.printAndWait(`평온하게 자신의 진심을 전했다.`);
    await era.printAndWait(`단순한 격려라기보다, 확신에 찬 고백에 가까웠다.`);
    await falcon.say_and_wait(`——팔코, 지금 조금 긴장되는 것 같아.`);
    await era.printAndWait(
      `마지막 한 걸음을 앞둔 지금, 결과가 나오기 전까지가 가장 긴장되는 순간일 것이다.`,
    );
    await me.say_and_wait(
      `${
        falcon.name
      }은 내가 본 ${falcon.get_uma_sex_title()} 중에서 가장 강해. 그러니까 너의 꿈이 꼭 이뤄졌으면 좋겠어.`,
    );
    await era.printAndWait(
      `${falcon.name}의 작은 머리를 쓰다듬자, 처음의 거부감과는 달리 ${falcon.sex}는 매우 평온한 표정을 지었다.`,
    );
    await falcon.say_and_wait(`이제 마음이 좀 놓이는 것 같아, 고마워.`);
    await me.say_and_wait(`마음이 좀 진정됐으면, 맛있는 거라도 먹으러 갈까?`);
    await falcon.say_and_wait(`고기가 좀 먹고 싶네! 지금 당장 가자⭐`);
    await era.printAndWait(
      `즐거운 식사를 마친 후, 통금 시간이 되기 전에 ${falcon.name}을 기숙사까지 데려다주었다.`,
    );
    await falcon.say_and_wait(`${callname}.`);
    await era.printAndWait(
      `무슨 말을 하려던 ${falcon.name}이 잠시 머뭇거렸다.`,
    );
    await me.say_and_wait(`왜 그래?`);
    await falcon.say_and_wait(`아무것도 아니야⭐`);
    await era.printAndWait(`${falcon.teen_sex_title}는 입을 가리고 킥킥 웃으며 뛰어갔다.`);
  } else if (
    extra_flag.race === race_enum.toky_dai &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name(
      ['도쿄 대상전 후·위닝 라이브 전의 결심', falcon.get_colored_name()],
      falcon,
    );
    falcon.print(`드디어 이 순간이 왔어.`);
    falcon.print(
      `3년 전의 내가 동경했던, 수만 팬의 시선이 집중되는 가장 눈부신 무대. 비록 내가 원래 생각했던 궤도와는 다시 만날 수 없겠지만.`,
    );
    falcon.print(`결국 실현된 거야.`);
    falcon.print(
      `힘든 목표를 마침내 달성한 순간에는 보통 횡설수설하며 흥분하거나, 완전히 끝날 때까지 숨을 죽이고 있다가 그제야 안도의 한숨을 내쉬곤 할 텐데.`,
    );
    falcon.print(`하지만 지금의 팔코는 이상할 정도로 평온해.`);
    falcon.print(
      `이 순간을 위해 가다듬은 표정, 손짓, 몸짓, 발음까지 모든 것이 가장 자연스러워.`,
    );
    falcon.print(`비록 내면에는 설명하기 힘든 감정이 남아있긴 하지만 말이야.`);
    falcon.print(
      `그 느낌을 설명하자면, TV 속의 유명한 아이돌을 동경하면서 그 춤을 흉내 내던 어린 ${falcon.uma_sex_title} 시절로 돌아간 것 같아.`,
    );
    falcon.print(`——방금 전까지 머릿속을 맴돌던 소음들이 어느샌가 사라졌어.`);
    falcon.print(
      `팔코는 내가 내린 결정에 후회는 전혀 없어. 다시 선택의 순간이 와도 팔코는 이 길을 택할 거야.`,
    );
    falcon.print(`만약 정말로 하고 싶은 말이 있다면,`);
    falcon.print(`${callname}과 함께한 날들, 팔코는 정말 행복했어.`);
    falcon.print(`고마워, ${callname}.`);
    falcon.print(
      `책임을 회피하려고 스스로를 마비시키는 건, 결국 내면의 자아에게 끊임없이 추궁당할 뿐이야. 결국 극도로 예민해진 상태에서 고통 속에 빠지게 되겠지.`,
    );
    falcon.print(
      `그 상태에서는 깃털 같은 작은 압박조차 사람을 완전히 무너뜨리고 말 거야.`,
    );
    falcon.print(
      `자신에게 주어진 책임을 직시하는 건 분명 압박이지만, 그 책임으로부터 도망치는 건 또 다른 고통에 빠지는 길일 뿐이야.`,
    );
    falcon.print(`그게 팔코가 깨달은 거야.`);
    falcon.print(`그러니까.`);
    await falcon.say_and_wait(
      `팬 여러분을 위해서, 팔코의 마지막 곡을 아낌없이 바칠게!`,
    );
    era.drawLine();
    await era.printAndWait(
      `아무도 찾지 않던 길거리 아이돌에서 더트의 톱 아이돌까지. 3년이라는 세월은 너무나도 빠르게 흘렀다.`,
    );
    await era.printAndWait(
      `마치 ${falcon.sex}를 처음 만났을 때, 창문에서 훌쩍 뛰어내리던 그 모습처럼.`,
    );
    await era.printAndWait(`그 순간의 ${falcon.name}은 땅보다 하늘에 더 가까워 보였다.`);
    await era.printAndWait(
      `어쩌면 그것이 ${falcon.sex}와 계약하기로 결심한 진짜 이유였을지도 모른다.`,
    );
    await era.printAndWait(
      `수많은 플래시가 집중되는 그곳의 주인공은 바로 ${falcon.name}이라는 이름의 톱 ${falcon.uma_sex_title} 아이돌이었다.`,
    );
  }
};