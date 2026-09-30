const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const get_gradient_color = require('#/utils/gradient-color');

const { buff_colors } = require('#/data/color-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function betray_ending(tachyon, me) {
  await era.printAndWait([
    '그날, 영문도 모른 채 ',
    tachyon.get_colored_name(),
    '의 연구실에서 쓰러진 이후.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 트레이너로서, 마땅히 자신이 담당해야 할 ',
    tachyon.get_uma_sex_title(),
    '를 찾아다녔다.',
  ]);
  await era.printAndWait([
    '그러나 그 누구도 ',
    me.get_colored_name(),
    '의 내면의 갈증을 채워주지는 못했다.',
  ]);
  await era.printAndWait([
    '마치 마음속에서 어떤 목소리가 들리는 듯했다. ',
    tachyon.sex,
    '가 아니야, ',
    tachyon.sex,
    '들이 아니야.',
  ]);
  await era.printAndWait([
    '얼마 지나지 않아, 그 어떤 ',
    tachyon.get_uma_sex_title(),
    '도 영입하지 못한 ',
    me.get_colored_name(),
    '은(는) 트레센 학원에서 해고당했다.',
  ]);
  await era.printAndWait(['하지만, 이것도 나쁘지 않다고 생각했다.']);
  await era.printAndWait([me.get_colored_name(), '은(는) 낙관적으로 생각했다.']);
  await era.printAndWait([
    '자신과 맞지 않는 ',
    tachyon.get_uma_sex_title(),
    '와 억지로 합을 맞추느니, 차라리 그만두는 게 나았다.',
  ]);

  era.drawLine();
  await era.printAndWait([
    '학원을 떠난 후, ',
    me.get_colored_name(),
    '은(는) 트레센에서 멀지 않은 곳에 작은 식당을 차렸다.',
  ]);
  await era.printAndWait(['당신의 요리 실력은 왠지 모르겠지만, 꽤 훌륭한 편인 듯했다.']);
  await era.printAndWait([
    '기억을 잃기 전의 자신에게 도대체 무슨 일이 있었는지는 모르겠지만, 분명 자신에게는 요리를 해주고 싶었던 아주 소중한 사람이 있었을 것이라 생각했다. 그렇지 않고서야 이 정도의 실력을 갖출 리가 없으니까.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 그 묘하게 숙련된 요리 실력을 발휘하여 순식간에 식당의 명성을 떨쳤고, 트레센 주변은 물론 트레센 학원의 ',
    tachyon.get_uma_sex_title(),
    '들조차 자주 ',
    me.get_colored_name(),
    '의 가게를 방문하게 되었다.',
  ]);
  await era.printAndWait([
    '하지만 역시 그 사람이 곁에 없기 때문일까. 매번 요리를 할 때마다 그 어떤 열정도 느껴지지 않았다.',
  ]);
  era.println();

  await era.printAndWait(['그렇게 하루하루가 흘러갔다.']);
  await era.printAndWait([
    '그다지 좋을 것도 없었지만, 그렇다고 딱히 불만족스럽지도 않았다.',
  ]);
  await era.printAndWait(['그저 살아갈 뿐, 단지 그뿐이었다.']);
  era.println();

  await say_by_passer_by_and_wait('해설', [
    tachyon.get_colored_name(),
    '입니다! ',
    tachyon.get_colored_name(),
    '의 첫 복귀전! 아리마 기념에서 찬란한 승리를 거머쥐었습니다!',
  ]);

  era.drawLine();
  await era.printAndWait(['문득.']);
  await era.printAndWait([
    '그 ',
    tachyon.get_uma_sex_title(),
    '가 번개처럼 하늘을 가로질렀다.',
  ]);
  await era.printAndWait([
    '그리고 번개처럼 ',
    me.get_colored_name(),
    '의 심장을 꿰뚫었다.',
  ]);
  await era.printAndWait([
    tachyon.get_colored_name(),
    ', 그 영문을 알 수 없었던 ',
    tachyon.get_uma_sex_title(),
    '.',
  ]);
  await era.printAndWait([
    '연구실에서 작별한 그날 이후로 단 한 번도 만난 적 없었던 ',
    tachyon.get_uma_sex_title(),
    '.',
  ]);
  await era.printAndWait([
    '그저 연말의 화젯거리인 아리마 기념을 가게 안의 TV에 아무 생각 없이 틀어두었을 뿐인데.',
  ]);
  await era.printAndWait([
    '상대방이 달리기 시작하자, 어째서인지 눈을 뗄 수가 없었다.',
  ]);
  await era.printAndWait([
    '상대방이 결승선을 통과하는 순간이 되어서야, ',
    me.get_colored_name(),
    '은(는) 자신도 모르게 눈물을 흘리고 있다는 것을 깨달았다.',
  ]);
  era.println();

  await era.printAndWait([
    '레이스 후 인터뷰에서, ',
    tachyon.get_colored_name(),
    '은 ',
    tachyon.sex,
    '의 복귀는 한 사람을 찾기 위해서라고 말했다. ',
    tachyon.sex,
    '에게 있어서 지극히 중요하고, 결코 없어서는 안 될 사람을.',
  ]);
  await era.printAndWait(['그게 누구일까? 사람들은 저마다 수군거렸다.']);
  await era.printAndWait([
    '그게 누구지? 어떤 목소리가 ',
    me.get_colored_name(),
    '의 머릿속에서 질문을 던졌다.',
  ]);
  await era.printAndWait(['두통, 두통, 머리가 깨질 듯한 통증.']);
  await era.printAndWait([
    '만약 ',
    tachyon.sex,
    '가 달리는 순간에 흘린 눈물이 감동 때문이었다면.',
  ]);
  await era.printAndWait([
    '그렇다면 ',
    tachyon.sex,
    '가 인터뷰에서 하는 말을 들은 순간에 흘린 눈물은 순수하게 고통 때문이었다.',
  ]);
  await era.printAndWait([tachyon.get_colored_name(), '이 찾고 있는 사람은 도대체 누구인가?']);
  await era.printAndWait(['그리고 자신과는 도대체 어떤 관계인 것인가?']);
  era.println();

  await era.printAndWait(['그러나 초광속의 입자는 그 누구를 위해서도 멈추지 않았다.']);
  await era.printAndWait(['오사카배.']);
  await era.printAndWait(['텐노상(봄).']);
  await era.printAndWait(['야스다 기념.']);
  await era.printAndWait(['타카라즈카 기념.']);
  await era.printAndWait(['텐노상(가을).']);
  await era.printAndWait(['재팬 컵.']);
  await era.printAndWait([
    '모든 레이스에서 ',
    tachyon.get_colored_name(),
    '은 압도적인 차이로, 모두를 매료시키는 주법으로 완승을 거두었다.',
  ]);
  await era.printAndWait([
    '매 레이스가 끝날 때마다, ',
    tachyon.sex,
    '는 인터뷰에서 이야기를 꺼냈다.',
  ]);
  await era.printAndWait(['때로는 「그 사람」과 함께했던 일상을.']);
  await era.printAndWait(['때로는 「그 사람」을 향한 참회를.']);
  await era.printAndWait(['때로는 「그 사람」을 향한 원망을.']);
  await era.printAndWait(['때로는 그저 말을 이어가다 카메라 앞에서 오열하기도 했다.']);
  era.println();

  await era.printAndWait([
    '모든 레이스를 ',
    me.get_colored_name(),
    '은(는) 그 누구보다 열정적으로 지켜보았다.',
  ]);
  await era.printAndWait([
    '매 레이스가 끝나고 ',
    tachyon.sex,
    '의 인터뷰를 들을 때마다, ',
    me.get_colored_name(),
    '은(는) 깨질 듯한 두통 속에서 다시는 보지 않겠다고, 적어도 인터뷰만큼은 건너뛰겠다고 맹세했다.',
  ]);
  await era.printAndWait(['그러나 매번 성공하지 못했다.']);
  await era.printAndWait(['쑤시는 통증.'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 1 / 6),
  });
  await era.printAndWait(['진통.'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 2 / 6),
  });
  await era.printAndWait(['둔한 통증.'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 3 / 6),
  });
  await era.printAndWait(['간헐적인 통증.'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 4 / 6),
  });
  await era.printAndWait(['찌리는 듯한 통증.'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 5 / 6),
  });
  await era.printAndWait(['격통.'], {
    color: get_gradient_color('#ffffff', buff_colors[3], 6 / 6),
  });
  await era.printAndWait([
    '매번 통증이 느껴질 때마다, ',
    me.get_colored_name(),
    '은(는) 어떤 예감을 느꼈다.',
  ]);
  await era.printAndWait(['머지않았다, 이제 곧이다.']);
  await era.printAndWait(['마치 매번 느껴지는 통증이 기억의 면사포를 한 꺼풀씩 벗겨내고 있는 것 같았다.']);

  era.drawLine();
  await era.printAndWait(['드디어, 마지막 아리마 기념.']);
  era.println();

  await say_by_passer_by_and_wait('해설', [
    tachyon.get_colored_name(),
    '! 아리마 기념 연패 및 연간 무패의 전설을 달성했습니다! ',
    tachyon.get_colored_name(),
    '! 최종적인 승리를 거머쥐었습니다!',
  ]);
  era.println();

  await era.printAndWait(['아아.']);
  await era.printAndWait(['그 달리는 모습을 본 순간.']);
  await era.printAndWait(['온몸의 기운이 송두리째 빠져나가는 기분이었다.']);
  await era.printAndWait(['이것이 바로, 줄곧 추구해왔던 것.']);
  await era.printAndWait([
    '이것이 바로, 줄곧 「',
    tachyon.sex,
    '」 와 함께 쫓아왔던 것.',
  ]);
  await era.printAndWait(['한계…… 아니, 한계를 초월한 완벽한 달리기였다.']);
  era.println();

  await era.printAndWait(['텔레비전에서는 레이스가 끝나자 레이스 전 인터뷰의 재방송이 흘러나왔다.']);
  era.println();

  await era.printAndWait('（기자 A「아리마 기념이 끝나면 은퇴를 선언하시는 겁니까?」）');
  await tachyon.used_to_say_and_wait([
    '음…… 만약 이런 식으로도 ',
    me.sex,
    '를 찾을 수 없다면…… 이제는 방법을 바꿔야 할 때라고 생각하네.',
  ]);
  await tachyon.used_to_say_and_wait([
    '나는 이제 은퇴하여 경기장을 떠날 걸세. 그리고…… 후후, 모르겠군…… 1년? 10년? 아니면…… 평생? 그건 상관없네. ',
    me.sex,
    '를 찾을 때까지 나는 결코 포기하지 않을 테니까.',
  ]);
  era.println();

  await era.printAndWait([tachyon.get_colored_name(), '이 은퇴한다고?']);
  await era.printAndWait(['「그 사람」을 찾기 위해 경기장을 떠난다고……… 「누구」를 찾아서?']);
  await era.printAndWait([
    me.get_colored_name(),
    '의 발이 움직이기 시작했다. 당장이라도 트레센 학원으로 달려가고 싶었다. ',
    tachyon.sex,
    '가 떠나기 전에, 가서 그녀를 찾고, 그녀를 만나고, 그녀에게……',
  ]);
  await era.printAndWait(['어느샌가 머리가 다시 지독하게 아파져 왔다.']);
  era.println();

  await era.printAndWait('???「아파……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 0 / 8),
  });
  await era.printAndWait('???「무서워……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 1 / 8),
  });
  await era.printAndWait('???「도와줘……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 2 / 8),
  });
  await era.printAndWait('???「살려줘, 모르모트 군!」', {
    color: get_gradient_color('#ffffff', tachyon.color, 3 / 8),
  });
  await era.printAndWait('???「모르모트 군, 어디 있어?」', {
    color: get_gradient_color('#ffffff', tachyon.color, 4 / 8),
  });
  await era.printAndWait('???「모르모트 군? 나를 버리지 마……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 5 / 8),
  });
  await era.printAndWait('???「내 곁으로 돌아와줘……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 6 / 8),
  });
  await era.printAndWait('???「제발, 돌아와……」', {
    color: get_gradient_color('#ffffff', tachyon.color, 7 / 8),
  });
  await era.printAndWait('???「자네가 없으면 안 된단 말이야!」', {
    color: get_gradient_color('#ffffff', tachyon.color, 8 / 8),
  });
  era.println();

  await era.printAndWait([
    { color: tachyon.color, content: '두통'},
    '의 실체가 드러났다.',
  ]);
  await era.printAndWait(['수많은 목소리가 귓가에서 끊임없이 울부짖고 애원했다.']);
  await era.printAndWait(['누구지?']);
  await era.printAndWait(['누가 울고 있는 거지.']);
  await era.printAndWait(['누가 비명을 지르고 있는 거지.']);
  await era.printAndWait(['「모르모트 군」………… 그게 누구지?']);
  await era.printAndWait(['발길이 멈춰 섰다.']);
  await era.printAndWait(['다리가 떨리고 온몸에 한기가 돌았다.']);
  await era.printAndWait(['자신은 겁을 먹고 있었다…… 무엇을?']);
  await era.printAndWait([tachyon.get_colored_name(), '과 마주하는 것을.']);
  await era.printAndWait(['진실을 아는 것을.']);
  await era.printAndWait(['자신이 도대체 어떤 인간인지 알게 되는 것을.']);
  era.println();

  await era.printAndWait(['—————————']);
  await era.printAndWait(['——————']);
  await era.printAndWait(['—————']);
  era.println();

  await era.printAndWait(['결국, ', me.get_colored_name(), '은(는) 한 발자국도 움직이지 못했다.']);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 그 후로 두 번 다시 ',
    tachyon.get_colored_name(),
    '을 만나지 않았다.',
  ]);
  await era.printAndWait([me.get_colored_name(), '의 머리도 더 이상 아프지 않았다.']);
  await print_event_name(
    [{ color: buff_colors[3], content: `그리하여, 당신은 아그네스 타키온을 다시는 보지 못했다` }],
    tachyon,
  );
}

module.exports = betray_ending;