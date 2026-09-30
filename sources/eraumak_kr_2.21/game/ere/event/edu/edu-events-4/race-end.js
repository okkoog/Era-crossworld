const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const { race_enum } = require('#/data/race/race-const');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} maru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {RaceEndParams} extra_flag
 */
module.exports = async (maru, me, callname, hook, extra_flag) => {
  const event_marks = new MaEduMarks();
  const luna = get_chara_talk(17);
  const edu_weeks = era.get('cflag:4:육성턴수합산');
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('데뷔전 이후・시작의 바람', maru);
    await era.printAndWait(
      `비록 주니어급의 데뷔전일 뿐이었지만, ${maru.name}의 첫 무대를 보기 위해 찾아온 사람들로 경기장은 인산인해를 이루었다.`,
    );
    await me.say_and_wait(`생각해보면, ${maru.name}의 인기는 정말 대단하네.`);
    await era.printAndWait(
      `평소 후배들을 도왔던 노력 덕분인지, 관중들 중 상당수는 그녀에게 도움을 받았던 후배들이었다.`,
    );
    await era.printAndWait(
      `우마무스메들 사이에 끼어있던 ${me.actual_name}은(는) 이질적인 압박감을 느꼈다.`,
    );
    await me.say_and_wait(`손바닥에 땀이 배기 전에 사람이 좀 적은 곳에서 관람하자.`);
    await say_by_passer_by_and_wait(
      `해설`,
      `다음은 주목받는 신성, 압도적인 실력과 인기를 겸비한 ${maru.name}입니다! 과연 어떤 멋진 모습을 보여줄지 기대되는군요!`,
    );
    await me.say_and_wait(`큰일인데.`);
    await era.printAndWait(
      `해설자의 힘찬 멘트가 기폭제가 되어, 끓는 기름에 물 한 방울이 떨어진 듯한 함성 소리가 경기장을 뒤흔들었다.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} A`,
      `마루젠 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'} 파이팅!`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} B`,
      `선배님의 멋진 달리기를 다시 한번 보여주세요!`,
    );
    await era.printAndWait(`오오오오오!`, { width: 34 });
    await era.printAndWait(`관객들의 환호성이 온 경기장에 울려 퍼졌다.`);
    await me.say_and_wait(
      `다들 정말 흥분한 것 같네. 역시 ${maru.name} 때문인가?`,
    );
    await era.printAndWait(
      `군중과 함께 일어선 ${me.actual_name}은(는) 우마무스메들의 귀 사이 틈새로 ${maru.name}의 실루엣을 찾으려 애썼다.`,
    );
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `아, 죄송합니다.`);
    await era.printAndWait(
      `실수로 부딪힌 것뿐이었지만, 그 충격이 어찌나 큰지 하마터면 비명을 지를 뻔했다.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `정말 죄송해요... 저도 모르게 힘 조절을 못 해서. 어디 다치진 않으셨나요?`,
    );
    await me.say_and_wait(`아뇨, 괜찮습니다.`);
    await era.printAndWait(
      `상대의 고의가 아니었기에, ${me.actual_name}은(는) 굳이 일을 크게 만들지 않고 사과를 받아들였다.`,
    );
    await me.say_and_wait(`${maru.name}의 레이스를 보러 오신 건가요?`);
    await era.printAndWait(`말을 내뱉자마자 너무 당연한 질문이었다는 생각에 후회가 밀려왔다.`);
    await me.say_and_wait(`${maru.name}의 레이스를 보러 오신 건가요?`);
    await era.printAndWait(
      `당연한 소리다. ${maru.name}를 보러 온 게 아니면 여기에 왜 왔겠는가? 다리 달린 당근이 달리는 거라도 보러 왔겠는가?`,
    );
    await era.printAndWait(`그나저나, 다리 달린 당근은 좀 보고 싶긴 하네.`);
    await me.say_and_wait(`그쪽도 다리 달린 당근이 달리는 걸 보러 오셨나요?`);
    await era.printAndWait(
      `안 돼, 머릿속 생각과 하려던 말이 뒤섞여 버렸다.`,
    );
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `푸흡.`);
    await me.say_and_wait(`역시 비웃음을 샀나 보다.`, true);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `트레이너 ${me.get_adult_sex_title()}은 생각보다 재미있는 분이시네요.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `마루젠 선배님이 왜 당신을 선택했는지 조금은 알 것 같아요.`,
    );
    await me.say_and_wait(`에?`);
    await me.say_and_wait(`내가 벌써 그렇게 유명해졌나?`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `유명한 정도가 아니죠. 당신이 마루젠 선배님과 계약한 다음 날, 트레센 전체가 그 소식으로 떠들썩했어요.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `모두들 ${maru.name}의 트레이너가 어떤 사람일지 아주 궁금해하고 있거든요.`,
    );
    await era.printAndWait(`어쩐지 오는 길에 호기심 어린 시선이 많더라니.`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `마루젠 선배님의 트레이너로서, 앞으로의 여정도 힘내세요! 저도 선배님과 트레이너님을 계속 응원할게요!`,
    );
    await era.printAndWait(`그녀는 매우 즐거워 보였다.`);
    await era.printAndWait(
      `모두의 주의가 다시 ${maru.name}에게 집중된 틈을 타, ${me.actual_name}은(는) 슬며시 원래 자리에서 벗어났다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `${maru.name}의 달리는 모습을 정면에서 볼 수 있는 동쪽 구역과 달리, 뒷모습만 보이는 서쪽 좌석은 한산했다.`,
    );
    await era.printAndWait(
      `많은 ${maru.uma_sex_title}들이 자신의 좌석에 앉기보다 인파 속에 서 있는 것을 택했기 때문이리라.`,
    );
    await era.printAndWait(`정말이지, ${maru.uma_sex_title}들은 참 단순한 생물이라니까.`);
    await era.printAndWait(
      `하지만 그렇기 때문에 나는 ${maru.sex_code - 1 ? '그녀' : '그'}들을 좋아하는 것이다.`,
    );
    await era.printAndWait(
      `관중석에서 환호성이 터져 나왔다. ${maru.name}의 첫 승리를 축하하는 ${maru.uma_sex_title}들의 비명 섞인 함성이었다.`,
    );
    era.printButton(`「슬슬 ${maru.name}를 맞이하러 가자」`, 1);
    await era.input();
    await maru.say_and_wait(` ${callname}♪, 방금 내 멋진 활약 봤어?`);
    era.printButton(`「생각했던 것보다 훨씬 더 멋진 무대였어!」`, 1);
    await era.input();
    await maru.say_and_wait(
      `응응, 그럼 난 위닝 라이브 준비하러 갈게. ${callname}은(는) 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}를 잘 지켜봐 줘야 해?⭐`,
    );
    await era.printAndWait(
      `위닝 라이브 위의 ${maru.name}은(는) 평소보다 더욱 빛나 보였다. 마치 발굴된 원석이 마침내 본모습을 드러낸 것처럼.`,
    );
    await era.printAndWait(`하지만 생각해보면, 트레이너라는 건 그런 직업이 아닌가?`);
    era.drawLine({ content: '위닝 라이브 종료 후' });
    await maru.say_and_wait(
      `후우~ 땀을 꽤 흘렸네. 하지만 평소에 댄스 레슨을 열심히 해둔 보람이 있었어⭐`,
    );
    era.printButton(
      `역시 ${era.get('cflag:4:성별') - 1 ? '누님' : '형님'}답네`,
      1,
    );
    await era.input();
    await maru.say_and_wait(
      `어머, ${callname}은(는) 평소보다 더 입에 발린 소리를 잘하네. 설마 다른 아이들한테도 이러는 건 아니지?`,
    );
    era.printButton(
      `그럴 리가. 내게 ${era.get('cflag:4:성별') - 1 ? '누님' : '형님'}은 ${maru.name} 한 명뿐인걸.`,
      1,
    );
    await era.input();
    await maru.say_and_wait(
      `후후후, ${callname}에게 그런 말을 들으니 기분이 점점 더 좋아지는걸! 음— 오늘은 스페 일행이랑 같이 축하 파티라도 열까?`,
    );
    era.printButton(`「 ${maru.name}, 평소보다 더 들뜬 것 같네」`, 1);
    await era.input();
    await me.say_and_wait(
      `폭풍처럼 경기장을 휩쓴 ${maru.name}는 정말 멋졌어.`,
    );
    await maru.say_and_wait(
      `나의 담당인 ${callname}에게 그런 말을 들으니 정말 안심이 돼.`,
    );
    await maru.say_and_wait(`하지만 계속 칭찬만 듣고 있을 순 없지, 다음 목표는?`);
    era.printButton(`「아사히배는 어때?」`, 1);
    await era.input();
    await maru.say_and_wait(`아사히배 말이야?`);
    await maru.say_and_wait(
      `더 강한 ${maru.uma_sex_title}들과 경쟁한다면, 어쩌면 더 아름다운 풍경을 볼 수 있을지도 모르겠네. ${callname}의 대답은 만점이야!`,
    );
    await maru.say_and_wait(`그럼, 다음은 아사히배를 향해 전진해 볼까!`);
    await era.printAndWait(`당신과 ${maru.name}은(는) 다음 목표를 확정했다.`);
  }
  if (
    extra_flag.race === race_enum.begin_race &&
    edu_weeks < 48 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('데뷔전 이후・다시 노력하기', maru);
    await maru.say_and_wait(`아, 졌네……`);
    await era.printAndWait(
      `예상치 못한 사고였을까, 아니면 훈련 부족이었을까. ${maru.name}는 데뷔전에서 패배했다.`,
    );
    era.printButton(`돌아가서 반성회를 갖자.`, 1);
    await era.input();
    await maru.say_and_wait(`응! 다음번엔 반드시 이길 거야!`);
    await era.printAndWait(`당신과 ${maru.name}는 다음 목표를 정했다.`);
  } else if (
    extra_flag.race === race_enum.asah_sta &&
    edu_weeks < 48 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('아사히배 이후・압도적인 기세', maru);
    await era.printAndWait(`한신 경기장\n`);
    await era.printAndWait(
      `차가운 공기가 폐부를 자극하고, 추위 덕분에 머릿속은 더욱 맑아진다.`,
    );
    await me.say_and_wait(` ${maru.name}, 반드시 이겨야 해.`);
    await me.say_and_wait(`……아니, ${maru.name}라면.`);
    await me.say_and_wait(
      `승리보다도 다른 ${maru.uma_sex_title}들과 함께 달리는 것 그 자체를 더 즐거워하겠지.`,
      true,
    );
    await era.printAndWait(`당신은 레이스가 시작되는 순간을 뚫어지게 응시했다.`);
    era.drawLine({ content: '관중석의 반대편' });
    await era.printAndWait(
      `어렵게 구한 입장권을 꽉 쥔 채, 어느 ${maru.uma_sex_title}가 ${maru.name}의 뒷모습을 뚫어지게 쳐다보고 있었다.`,
    );
    await era.printAndWait(`그러나,`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `그렇다면 나의 존재 의의는……`,
    );
    await era.printAndWait(
      `무의식중에 자신을 ${maru.sex_code - 1 ? '그녀' : '그'}와 비교해버리고 말았다.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `앗! 저도 모르게 마음속 말이 튀어나왔네요.`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `그런데 왜 이렇게 마음이 아픈 걸까?`,
      true,
    );
    await era.printAndWait(`나와 당신의 거리는, 전력을 다해도 닿을 수 없는 수준이었다.`);
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `어째서……`);
    await era.printAndWait(
      `분한 듯 입술을 깨물며, 손에 쥐고 있던 입장권을 동그랗게 구겨버렸다.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `어째서 당신의 발걸음에서는 희망이 보이지 않는 거죠?`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `아니야! 내가 무슨 생각을 하는 거야.`,
    );
    await era.printAndWait(
      `무언가 소중한 것이 부서져 버려 다시는 찾을 수 없게 된 것 같았다. 그 ${maru.uma_sex_title}은(는) 다시금 ${maru.name}의 뒷모습을 바라보았다.`,
    );
  } else if (
    extra_flag.race === race_enum.asah_sta &&
    edu_weeks < 48 &&
    extra_flag.rank > 1 &&
    extra_flag.rank < 5
  ) {
    await print_event_name('아사히배 이후・흥분되는 느낌', maru);
    await era.printAndWait(` ${maru.name} 입착.`);
    await maru.say_and_wait(
      `하이! ${callname}, 이 ${
        era.get('cflag:4:성별') - 1 ? '이쁜이' : '멋쟁이'
      }의 멋진 모습 봤어?`,
    );
    era.printButton(`수고했어.`, 1);
    await era.input();
    era.printButton(`G1 레이스에서 입착한 것만으로도 대단한 거야.`, 1);
    await era.input();
    await maru.say_and_wait(
      `달리는 ${maru.uma_sex_title}들이 다들 투지 넘치게 승리를 노리고 있어서, 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}도 압박감이 장난 아니었어.`,
    );
    await me.say_and_wait(` ${maru.name}은(는) 누가 봐도 즐거워 보였는데.`);
    await maru.say_and_wait(`그야 G1급 레이스니까, 만나는 상대들이 평소보다 한 차원 더 높거든.`);
    await maru.say_and_wait(
      `그만큼 경기장에서 얻는 즐거움도 평소보다 한 단계 더 높았어♪`,
    );
    await me.say_and_wait(`기분 전환 겸 어디 가서 축하라도 할까?`);
    await maru.say_and_wait(
      `그렇다면, 이 ${era.get('cflag:4:성별') - 1 ? '이쁜이' : '멋쟁이'}가 아주 인기 있는 디저트 가게를 알고 있지!`,
    );
    era.drawLine({ content: '관중석의 반대편' });
    await era.printAndWait(
      `어렵게 구한 입장권을 꽉 쥔 채, 어느 ${maru.uma_sex_title}가 ${maru.name}의 뒷모습을 뚫어지게 쳐다보고 있었다.`,
    );
    await era.printAndWait(`그러나,`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `그렇다면 나의 존재 의의는……`,
    );
    await era.printAndWait(
      `무의식중에 자신을 ${maru.sex_code - 1 ? '그녀' : '그'}와 비교해버리고 말았다.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `앗! 저도 모르게 마음속 말이 튀어나왔네요.`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `그런데 왜 이렇게 마음이 아픈 걸까?`,
      true,
    );
    await era.printAndWait(`나와 당신의 거리는, 전력을 다해도 닿을 수 없는 수준이었다.`);
    await say_by_passer_by_and_wait(` ${maru.uma_sex_title} `, `어째서……`);
    await era.printAndWait(
      `분한 듯 입술을 깨물며, 손에 쥐고 있던 입장권을 동그랗게 구겨버렸다.`,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `어째서 당신의 발걸음에서는 희망이 보이지 않는 거죠?`,
      true,
    );
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `아니야! 내가 무슨 생각을 하는 거야.`,
    );
    await era.printAndWait(
      `무언가 소중한 것이 부서져 버려 다시는 찾을 수 없게 된 것 같았다. 그 ${maru.uma_sex_title}은(는) 다시금 ${maru.name}의 뒷모습을 바라보았다.`,
    );
  } else if (
    extra_flag.race === race_enum.sprg_sta &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('스프링 스테이크스 이후・망설임의 시작', maru);
    await era.printAndWait(
      `이변은 없었다. 이번 레이스는 ${maru.name}의 일방적인 압승이었다.`,
    );
    await era.printAndWait(
      `동세대 ${maru.uma_sex_title}들이 그녀와의 대결을 피한 탓이었다.`,
    );
    await era.printAndWait(
      `경쟁 상대라고 부를 만한 아이들도 기껏해야 이름 없는 G3에서 겨우 우승해본 수준에 불과했다.`,
    );
    await era.printAndWait(`이런 승리에서, 정말로 즐거움을 느낄 수 있을까?`);
    await say_by_passer_by_and_wait(
      `해설`,
      ` ${maru.name}! ${maru.name}! 골인입니다!`,
    );
    await say_by_passer_by_and_wait(
      `해설`,
      `대차! ${maru.name}의 압도적인 승리입니다!`,
    );
    await maru.say_and_wait(`……`);
    maru.print(`이런 승리에서, 정말로 즐거움을 느낄 수 있을까?`);
    await me.say_and_wait(` ${maru.name}?`);
    await say_by_passer_by_and_wait(
      `팬 A`,
      ` ${maru.name}! ${maru.name}!`,
    );
    await say_by_passer_by_and_wait(
      `팬 B`,
      `당연히 ${maru.name}가 이길 줄 알았어!`,
    );
    await say_by_passer_by_and_wait(
      `팬 A`,
      `역시 슈퍼카라고 불리는 ${maru.uma_sex_title}답네! 내 눈은 틀리지 않았어!`,
    );
    maru.print(`조금 지치네.`);
    await say_by_passer_by_and_wait(
      `팬 A`,
      `그 압도적인 실력으로 저 약해빠진 놈들을 전부 쓸어버려!`,
    );
    maru.print(`대기실에서 승부복을 갈아입을 때도 마찬가지였다.`);
    await say_by_passer_by_and_wait(
      `${maru.uma_sex_title} A`,
      `어차피 이길 수도 없는데, 왜 그렇게 기를 쓰고 달려야 하는지.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.uma_sex_title} A`,
      `달리는 걸로 아이돌 대접받는 시대는 이미 끝났어. 이제 스트리머가 대세지.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.uma_sex_title} B`,
      `그냥 흐름에 맞춰서 스트리머로 전향하고 은퇴하는 게 낫겠어.`,
    );
    maru.print(`공연이 끝난 후, 쑥덕거리는 ${maru.uma_sex_title}들의 곁을 지나간다.`);
    await say_by_passer_by_and_wait(
      `${maru.uma_sex_title} B`,
      `레이스라는 직업은 어차피 재능 있는 놈들의 사냥터일 뿐이야.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.uma_sex_title} B`,
      `우리 같은 평범한 ${maru.uma_sex_title}들한테 레이스는 그냥 들러리나 서다가 비웃음거리가 되는 무대일 뿐이지. 정말 역겨워.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.uma_sex_title} B`,
      `그러니까 말이야, 경기장에서 즐거움을 느낀다는 녀석들은 도무지 이해할 수가 없어.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.uma_sex_title} B`,
      `하아, 한때는 나도 ${maru.uma_sex_title} 레이서를 동경했다니, 지금 생각하면 창피해 죽겠네.`,
    );
    era.drawLine();
    await me.say_and_wait(` ${maru.name}?`);
    await era.printAndWait(` ${maru.name}는 압도적인 우위로 가볍게 연승을 이어갔다.`);
    await era.printAndWait(
      `비록 사츠키상의 전초전일 뿐이지만, 곧 다가올 사츠키상에서도 큰 문제는 없으리라.`,
    );
    await era.printAndWait(`그렇게 생각하며, 당신은 문을 열었다.`);
    await maru.say_and_wait(`아, ${callname}. 나 데리러 온 거야?`);
    await era.printAndWait(` ${maru.name}는 평소와 다름없어 보였다.`);
    await maru.say_and_wait(
      `이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}의 활약, 어땠어?`,
    );
    era.printButton(`「……글쎄」`, 1); //be1
    era.printButton(`「…… ${maru.name}.」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`엥?`);
      era.printButton(`아, 미안. 잠깐 딴생각했어.`, 1);
      await era.input();
      await me.say_and_wait(
        `역시 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}답게 아주 멋졌어!`,
      );
      await maru.say_and_wait(`응응, 나도 그렇게 생각해!`);
      await maru.say_and_wait(`음— 그럼 이제 어디 가서 뭘 좀 먹을까?`);
      await maru.say_and_wait(`${callname}이(가) 추천할 만한 곳 있어?`);
      await me.say_and_wait(`사이제리야에 가보자. 거기 음식이 꽤 맛있거든.`);
      await maru.say_and_wait(`응! 그럼 같이 가보자.`);
      new EduEventMarks(4).add('Self_contempt');
      era.set('flag:강제배드엔딩', 4);
    } else {
      await maru.say_and_wait(`어머, ${callname} 왜 그래?`);
      await me.say_and_wait(`내일 밤에 시간 있어?`);
      await me.say_and_wait(`너한테 할 말이 좀 있는데, 옥상에서 단둘이 이야기하고 싶어.`);
      await maru.say_and_wait(`무슨 중요한 일인데 여기서 못 해?`);
      await me.say_and_wait(`미안, 이번 한 번만 내 고집을 들어줘. 부탁이야.`);
      await maru.say_and_wait(`에? ${callname}?`);
      await me.say_and_wait(`부탁할게.`);
      await era.printAndWait(`당신은 깊게 고개를 숙였다.`);
      await maru.say_and_wait(`이렇게까지 말하다니……`, true);
      await maru.say_and_wait(` ${me.actual_name}이(가) 그렇게까지 말한다면.`);
      await maru.say_and_wait(`알았어.`);
      await era.printAndWait(` ${maru.name}은(는) 조금 걱정스러운 표정으로 당신을 바라보았다.`);
      await me.say_and_wait(`그럼 내일 밤 9시, 학원 옥상에서 봐.`);
      await era.printAndWait(
        `등이 이미 땀으로 젖어 있었다. 최악의 상황까지 각오했지만, ${maru.name}의 허락을 받자 안도의 한숨이 새어 나왔다.`,
      );
      await maru.say_and_wait(
        `이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}가 ${callname}의 마음을 아프게 하는 짓이라도 했니?`,
      );
    }
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('사츠키상 이후・불꽃처럼 아름다운 질주', maru);
    await era.printAndWait(`위닝 라이브 무대\n`);
    await era.printAndWait(`스태프들이 라이브 장치가 정상 작동하는지 확인하느라 분주하게 움직이고 있었다.`);
    await say_by_passer_by_and_wait(
      `스태프 A`,
      `위닝 라이브 시작까지 얼마 안 남았습니다. 마지막 점검!`,
    );
    await say_by_passer_by_and_wait(
      `스태프 B`,
      `에어 슈터 위치 최종 확인! 역시, ${maru.name}가 이길 줄 알았다니까.`,
    );
    await say_by_passer_by_and_wait(
      `스태프 B`,
      `지난번 데뷔전 때부터 눈여겨보고 있었거든.`,
    );
    await say_by_passer_by_and_wait(
      `스태프 C`,
      `조명 왼쪽으로 조금 더! 아, 난 호프풀 때부터 팬이었어.`,
    );
    await say_by_passer_by_and_wait(
      `스태프 C`,
      `엄청나게 잘 달리는 ${maru.uma_sex_title}가 있다는 소문은 들었지만, 직접 보기 전까지는 이 정도일 줄 몰랐지.`,
    );
    await say_by_passer_by_and_wait(
      `스태프 B`,
      `준비 완료! 다음 일본 더비에서도 승자는 틀림없이 ${maru.sex_code - 1 ? '그녀' : '그'}일 거야!`,
    );
    await say_by_passer_by_and_wait(`스태프 A`, `전원 위치로! 제자리! 준비!`);
    await era.printAndWait(`예상대로, ${maru.name}는 승리를 거머쥐었다.`);
    await era.printAndWait(
      `골인 지점을 통과하는 찰나의 순간도, 위닝 라이브 중앙에서의 퍼포먼스도, 수많은 팬을 사로잡기에 충분했다.`,
    );
    await era.printAndWait(`만족스러운 미소를 지으며 대기실로 돌아왔다.`);
    era.printButton(`「수고했어, 공연 아주 멋졌어.」`, 1);
    await era.input();
    await era.printAndWait(
      `조심스럽게 ${maru.name}의 부츠를 벗기고, 발목부터 허벅지까지 정성껏 마사지를 시작했다.`,
    );
    await me.say_and_wait(
      `과연 클래식 노선의 첫 관문답네. 기자 회견부터 레이스, 위닝 라이브까지 지난번 아사히배와는 비교도 안 될 정도로 성대했어.`,
    );
    await me.say_and_wait(`앞으로 이것보다 더 큰 레이스를 치르게 될 거야, ${maru.name}——`);
    await era.printAndWait(
      `약 5분간 마사지를 이어가며, 손가락으로 허벅지 안쪽을 가볍게 누르며 ${maru.name}의 반응을 살폈다.`,
    );
    await maru.say_and_wait(
      `응~ 신경 써줘서 고마워 ${callname}. 지쳐서 못 움직일 정도라기보다, 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}는 몸도 마음도 아주 충만해진 기분인걸.`,
    );
    await era.printAndWait(
      `미소를 짓고 있는 ${maru.name}에게서 이따금 옅은 숨소리가 들려왔다.`,
    );
    await maru.say_and_wait(
      `이렇게 더 많은 후배가 나의 뒷모습을 보게 된다면, 분명 그 아이들도 경기장을 달리는 모습을 동경하게 되겠지?`,
    );
    await maru.say_and_wait(`그리고 노력하는 과정에서 달리기의 즐거움을 서서히 깨닫게 될 거야.`);
    await maru.say_and_wait(
      `그렇게 되면 나도 나를 뒤쫓아오는 후배들의 노력을 보며 더 행복해질 수 있을 거야.`,
    );
    await era.printAndWait(
      `약간의 통증과 저릿한 쾌감 때문인지 유난히 반짝이는 눈으로 ${maru.name}가 당신을 빤히 바라보았다.`,
    );
    await me.say_and_wait(
      `그래, 한 달 뒤에 있을 도쿄 더비를 위해서라도 당분간은 스태미나 강화에 집중해야겠어.`,
    );
    await maru.say_and_wait(`음— 그럼 이제 어디 가서 축하 파티를 할까?`);
    await era.printAndWait(
      `마사지가 끝나자, 아쉬운 듯 ${maru.name}가 자리에서 일어나 기지개를 켰다.`,
    );
    await maru.say_and_wait(`고급 레스토랑? 아니면 친근한 사이제리야? 그것도 아니면…`);
    era.printButton(`「그냥 트레이닝실에서 파티하자!」`, 1);
    await era.input();
    await me.say_and_wait(`피자랑 음료수를 잔뜩 시켜서 후배들도 다 같이 부르는 거야.`);
    await maru.say_and_wait(
      ` ${callname} 말대로 하는 게 좋겠어! 벌써 저녁 파티가 기대되는걸♪`,
    );
    await era.printAndWait(
      `부츠를 다시 신고 걸음걸이를 가다듬는 ${maru.sex_code - 1 ? '소녀' : '소년'}는 곧 열릴 축제에 들떠 있었다.`,
    );
  } else if (
    extra_flag.race === race_enum.sats_sho &&
    edu_weeks < 95 &&
    extra_flag.rank > 1 &&
    extra_flag.rank < 5
  ) {
    await print_event_name('사츠키상 이후・불꽃같은 질주', maru);
    await era.printAndWait(`대기실\n`);
    await maru.say_and_wait(`하이! ${callname}!`);
    await era.printAndWait(`위닝 라이브를 마친 ${maru.name}이(가) 대기실로 돌아왔다.`);
    await me.say_and_wait(`기분은 좀 어때?`);
    await era.printAndWait(
      `조심스럽게 ${maru.name}의 부츠를 벗기고, 발목부터 허벅지까지 정성껏 마사지를 시작했다.`,
    );
    await maru.say_and_wait(
      `이 느낌 너무 좋아! 역시 클래식 3관의 사츠키상이야. 타이틀을 노리고 모인 ${maru.uma_sex_title}들이 정말 강하더라고.`,
    );
    await maru.say_and_wait(
      `다음 더비에선 더 큰 규모의 레이스를 경험할 수 있다니, 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}는 기대돼서 미칠 것 같아!`,
    );
    await era.printAndWait(
      `약 5분간 마사지를 이어가며, 손가락으로 허벅지 안쪽을 가볍게 누르며 ${maru.name}의 반응을 살폈다.`,
    );
    await me.say_and_wait(`이 기세 그대로 더비까지 도전해보자!`);
    await maru.say_and_wait(`맞아! 바로 그 기분이야!`);
    await era.printAndWait(
      `마사지가 끝나고 당신이 부츠를 다시 신겨주자, 그녀는 힘차게 일어나 다음 목표를 향한 전의를 불태웠다.`,
    );
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('일본 더비 이후・선택의 시작', maru);
    await era.printAndWait(
      `이변은 없었다. ${maru.name}는 보기 좋게 더비에서 우승을 차지했다.`,
    );
    await era.printAndWait(
      `그녀가 결승선을 통과하는 순간, 관중석에서는 천둥 같은 환호성이 터져 나왔다.`,
    );
    await era.printAndWait(`대기실\n`);
    await maru.say_and_wait(`후우~ 역시 클래식 3관 중 가장 주목받는 레이스답네.`);
    await maru.say_and_wait(
      `더비에 참가한 ${maru.uma_sex_title}들은 하나같이 엘리트 중의 엘리트들이었어.`,
    );
    era.printButton(`「코스 가장 바깥쪽이라는 불리한 조건이었는데도」`, 1);
    await era.input();
    era.printButton(`「그걸 이겨내고 우승한 ${maru.name}가 정말 대단해.」`, 1);
    await era.input();
    await maru.say_and_wait(
      `사실 그렇게 대단한 건 아냐⭐ 그저 평소처럼, 아니, 평소보다 아주 조~금 더 빨리 달렸을 뿐인걸.`,
    );
    await maru.say_and_wait(`더비보다 더 큰 레이스라면 이제 남은 건—`);
    era.printButton(`「개선문상에 가볼까?」`, 1);
    era.printButton(`「역시 아리마 기념일까?」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`에? 개선문상?`);
      await maru.say_and_wait(
        `대박! 역시 ${callname}이랑 있으면 매번 놀라운 제안을 듣게 된다니까~`,
      );
      await maru.say_and_wait(
        `개선문상이라면 세계적인 수준의 ${maru.uma_sex_title}들을 만날 수 있겠지.`,
      );
      await maru.say_and_wait(`음— 어떻게 하는 게 좋을까?`);
      era.printButton(`어떻게 하면 좋을까?`, 1);
      await era.input();
    } else {
      await maru.say_and_wait(`그치? 역시 아리마 기념이지.`);
      era.printButton(
        `「나도 ${maru.name}가 아리마 기념에서 즐겁게 달리는 모습을 보고 싶어.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`${callname}, 똑똑히 지켜봐 줘.`);
    }
    await maru.say_and_wait(`아, 슬슬 위닝 라이브에 가야겠다.`);
    await maru.say_and_wait(` ${callname}이랑 같이 있으면 시간은 참 빨리 간다니까.`);
    await me.say_and_wait(
      `무대 위에서도 자신을 응원해준 팬들에게 그 마음을 잘 전달하고 와!`,
    );
    await maru.say_and_wait(`응. 계속 지지해준 팬들에게 내 모습을 똑똑히 보여줘야지.`);
    await maru.say_and_wait(`슬슬 출발할게.`);
    await era.printAndWait(` ${maru.name}는 대기실을 떠났다.`);
    await me.say_and_wait(`……`);
    await era.printAndWait(`대기실 문을 닫자, 방 안엔 정적만이 감돌았다.`);
    await me.say_and_wait(`슬슬 결심을 굳혀야겠어.`, true);
    await era.printAndWait(`출발하려던 찰나.`);
    await era.printAndWait(`똑똑똑`);
    await era.printAndWait(`참나, 또 무슨 새로운 유행이라도 생각난 건가?`);
    await era.printAndWait(`쓴웃음을 지으며 대기실 문을 열었다.`);
    await me.say_and_wait(`마루제——`);
    await era.printAndWait(`문 앞에는 쪽지 한 장이 놓여 있었다.`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `마루젠 선배님, 묻고 싶은 게 있어요. 괜찮으시다면 내일 밤 빈 교실에서 뵐 수 있을까요?`,
    );
    await era.printAndWait(`당신은……`);
    era.printButton(`「 ${maru.name}에게 알린다」`, 1); //NE
    era.printButton(`「 ${maru.name} 대신 내가 간다」`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await me.say_and_wait(`골치 아프네, ${maru.name}에게 온 편지인가.`);
      await me.say_and_wait(
        `직접 가보고 싶기도 하지만, 역시 본인에게 맡기는 게 낫겠지?`,
      );
      await era.printAndWait(
        ` ${maru.name}가 돌아온 뒤, 당신은 쪽지에 적힌 내용을 그녀에게 전달했다.`,
      );
      event_marks.happiness_day++;
      era.set('flag:강제배드엔딩', 4);
    } else {
      await era.printAndWait(
        `주변에 아무도 없는 것을 확인한 뒤, 쪽지를 집어 주머니에 넣었다.`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(`왜 이 쪽지를 가로챘는지 스스로도 잘 모른다. 하지만——`);
      await era.printAndWait(`왠지 지금 이 기회를 놓치면.`);
      await era.printAndWait(`무언가 소중한 것을 잃어버릴 것만 같은 기분이 들었다.`);
      await me.say_and_wait(`……미안해, ${maru.name}.`);
      await me.say_and_wait(`무슨 일이 있어도 내가 직접 가봐야겠어.`);
    }
  } else if (
    extra_flag.race === race_enum.toky_yus &&
    edu_weeks < 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('일본 더비 이후・선택의 시작', maru); //2위 이하인데 어째서??
    await era.printAndWait(
      `아쉽지만 ${maru.name}는 더비에서 우승하지 못했다.`,
    );
    await era.printAndWait(
      `하지만 그녀가 결승선을 통과하는 순간, 관중석에서는 천둥 같은 환호성이 터져 나왔다.`,
    );
    await era.printAndWait(`대기실\n`);
    await maru.say_and_wait(`후우~ 역시 클래식 3관 중 가장 주목받는 레이스답네.`);
    await maru.say_and_wait(
      `더비에 참가한 ${maru.uma_sex_title}들은 하나같이 엘리트 중의 엘리트들이었어.`,
    );
    await maru.say_and_wait(`더비보다 더 큰 레이스라면 이제 남은 건`);
    era.printButton(`「개선문상에 가볼까?」`, 1);
    era.printButton(`「역시 아리마 기념이겠지!」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`에? 개선문상?`);
      await maru.say_and_wait(
        `대박! 역시 ${callname}(이)랑 있으면 매번 놀라운 제안을 듣게 된다니까~`,
      );
      await maru.say_and_wait(
        `개선문상이라면 세계적인 수준의 ${maru.uma_sex_title}들을 만날 수 있겠지.`,
      );
      await maru.say_and_wait(`음— 어떻게 하는 게 좋을까?`);
      era.printButton(`어떻게 하면 좋을까?`, 1);
      await era.input();
    } else {
      await maru.say_and_wait(`그치? 역시 아리마 기념이지.`);
      era.printButton(
        `「나도 ${maru.name}가 아리마 기념에서 즐겁게 달리는 모습을 보고 싶어.」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`${callname}, 똑똑히 지켜봐 줘.`);
    }
    await maru.say_and_wait(`아, 슬슬 위닝 라이브에 가야겠다.`);
    await maru.say_and_wait(` ${callname}이랑 같이 있으면 시간은 참 빨리 간다니까.`);
    await me.say_and_wait(
      `무대 위에서도 자신을 응원해준 팬들에게 그 마음을 잘 전달하고 와!`,
    );
    await maru.say_and_wait(`응. 계속 지지해준 팬들에게 내 모습을 똑똑히 보여줘야지.`);
    await maru.say_and_wait(`슬슬 출발할게.`);
    await era.printAndWait(` ${maru.name}는 대기실을 떠났다.`);
    await me.say_and_wait(`……`);
    await era.printAndWait(`대기실 문을 닫자, 방 안엔 정적만이 감돌았다.`);
    await me.say_and_wait(`슬슬 결심을 굳혀야겠어.`, true);
    await era.printAndWait(`출발하려던 찰나.`);
    await era.printAndWait(`똑똑똑`);
    await era.printAndWait(`참나, 또 무슨 새로운 유행이라도 생각난 건가?`);
    await era.printAndWait(`쓴웃음을 지으며 대기실 문을 열었다.`);
    await me.say_and_wait(`마루제——`);
    await era.printAndWait(`문 앞에는 쪽지 한 장이 놓여 있었다.`);
    await say_by_passer_by_and_wait(
      ` ${maru.uma_sex_title} `,
      `마루젠 선배님, 묻고 싶은 게 있어요. 괜찮으시다면 2주 뒤에 빈 교실에서 뵐 수 있을까요?`,
    );
    await era.printAndWait(`당신은……`);
    era.printButton(`「 ${maru.name}에게 알린다」`, 1); //NE
    era.printButton(`「 ${maru.name} 대신 내가 간다」`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await me.say_and_wait(`골치 아프네, ${maru.name}에게 온 편지인가.`);
      await me.say_and_wait(
        `직접 가보고 싶기도 하지만, 역시 본인에게 맡기는 게 낫겠지?`,
      );
      await era.printAndWait(
        ` ${maru.name}가 돌아온 뒤, 당신은 쪽지에 적힌 내용을 그녀에게 전달했다.`,
      );
      event_marks.happiness_day++;
      era.set('flag:강제배드엔딩', 4);
    } else {
      await era.printAndWait(
        `주변에 아무도 없는 것을 확인한 뒤, 쪽지를 집어 주머니에 넣었다.`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(`왜 이 쪽지를 가로챘는지 스스로도 잘 모른다. 하지만——`);
      await era.printAndWait(`왠지 지금 이 기회를 놓치면.`);
      await era.printAndWait(`무언가 소중한 것을 잃어버릴 것만 같은 기분이 들었다.`);
      await me.say_and_wait(`……미안해, ${maru.name}.`);
      await me.say_and_wait(`무슨 일이 있어도 내가 직접 가봐야겠어.`);
    }
  } else if (
    extra_flag.race === race_enum.radi_shi &&
    edu_weeks < 95 &&
    extra_flag.rank === 1
  ) {
await print_event_name('라디오 NIKKEI상 이후・방황의 길', maru);
    await era.printAndWait(`대기실\n`);
    await me.say_and_wait(`수고했어, ${maru.name}.`);
    await era.printAndWait(
      `중반에 하마터면 마군에 잡아먹힐 뻔했지만, ${maru.name}는 큰 사고 없이 승리를 쟁취했다.`,
    );
    await me.say_and_wait(
      `평소의 든든한 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'} 같던 ${maru.sex_code - 1 ? '그녀' : '그'}답지 않은 모습이었다.`,
      true,
    );
    await me.say_and_wait(`아마 아직도 의구심이라는 그림자 속에 갇혀 있는 거겠지.`, true);
    await maru.say_and_wait(` ${callname}!`);
    await era.printAndWait(`당신을 발견한 순간, ${maru.name}는 활기찬 미소를 지어 보였다.`);
    await era.printAndWait(`하지만 그 이면에 서린 어두운 표정은 당신의 뇌리에 깊게 박혔다.`);
    await maru.say_and_wait(`나 칭찬 좀 많이 해줄 수 있어?`);
    era.printButton(
      `고생했어. 아름답고 강력한 ${era.get('cflag:4:성별') - 1 ? '누님' : '형님'}답게 이번에도 정말 멋진 레이스였어!`,
      1,
    );
    await era.input();
    await maru.say_and_wait(
      `후후~ 당연한 소릴⭐ 오히려 지는 게 더 이상하지 않아?`,
    );
    era.printButton(`「허벅지는 좀 어때?」`, 1);
    await era.input();
    await maru.say_and_wait(`생각했던 것보다 훨씬 괜찮아.`);
    era.printButton(`「허벅지 상태는 정말 괜찮은 거야?」`, 1);
    await era.input();
    await maru.say_and_wait(`……`);
    era.printButton(
      `너의 트레이너로서, 내 담당 우마무스메가 압박감에 짓눌려 허무하게 은퇴하는 걸 지켜보고만 있지는 않을 거야.`,
      1,
    );
    await era.input();
    await me.say_and_wait(`지난번의 그 ${maru.uma_sex_title}처럼 말이야.`);
    await me.say_and_wait(`미안해, 정말 미안.`);
    await era.printAndWait(
      `위닝 라이브가 끝난 후, 당신은 가을의 국화상을 포기하고 아리마 기념을 준비하기로 결심했다.`,
    );
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('아리마 기념 이후・희망의 빛', maru);
    await era.printAndWait(
      `아리마 기념에서 수많은 강적을 물리치고 고난 끝에 ${maru.name}가 승리를 거두었다.`,
    );
    await say_by_passer_by_and_wait(
      `기자 A`,
      `아리마 기념 우승을 축하드립니다, ${maru.name} ${
        maru.sex_code === 1 ? '씨' : '양'
      }. 정말 치열한 접전이었네요.`,
    );
    await maru.say_and_wait(
      `네, 다들 정말 실력이 대단하더라고요. 덕분에 저도 아주 즐겁게 달렸답니다♪`,
    );
    await say_by_passer_by_and_wait(`기자 A`, `우승 소감 한 말씀 부탁드려도 될까요?`);
    await maru.say_and_wait(
      `더 많은 ${maru.uma_sex_title}들이 저의 뒷모습을 보고, 저를 쫓고 싶다는 꿈을 가지게 된다면 더할 나위 없이 행복할 것 같아요.`,
    );
    await say_by_passer_by_and_wait(`기자 A`, `정말 원대한 포부로군요.`);
    await maru.say_and_wait(` ${callname}, 이쪽이야!`);
    await era.printAndWait(
      ` ${maru.name}은(는) 당신을 발견하자마자 기자 앞으로 끌어당겼다.`,
    );
    await say_by_passer_by_and_wait(
      `기자 A`,
      `트레이너님께서는 ${maru.name}의 우승에 대해 어떻게 생각하시나요?`,
    );
    era.printButton(`「승패보다도 ${maru.name}가 즐거워하는 모습이 제겐 가장 중요합니다.」`, 1);
    await era.input();
    await maru.say_and_wait(
      ` ${callname}은 말도 참 예쁘게 한다니까~ 하지만 ${callname}의 격려가 없었다면 아마 우승하긴 힘들었을 거야.`,
    );
    await say_by_passer_by_and_wait(
      `기자 A`,
      `정말 감동적인 유대감이네요. 두 분, 인터뷰에 응해주셔서 감사합니다.`,
    );
    await maru.say_and_wait(`오늘은 맛있는 거 잔뜩 먹으면서 축하 파티하자!`);
    await me.say_and_wait(`역시 웃는 얼굴의 ${maru.name}가 최고네.`, true);
  } else if (
    extra_flag.race === race_enum.arim_kin &&
    edu_weeks >= 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('아리마 기념 이후・최고의 무대!', maru);
    await era.printAndWait(`대기실\n`);
    await me.say_and_wait(`기분이 어때?`);
    await maru.say_and_wait(
      `함께 달린 ${maru.uma_sex_title}들 모두 '최강'을 목표로 하는 아이들이었어. 그런 ${maru.sex_code - 1 ? '그녀' : '그'}들과 함께 달릴 수 있어서 정말 즐거웠어.`,
    );
    await me.say_and_wait(`이제 만족해?`);
    await maru.say_and_wait(
      `에이~ 설마! 이거보다 더 큰 무대라면 이제 개선문상 정도밖에 안 남았잖아? 난 이런 짜릿한 느낌이 정말 좋은걸?`,
    );
    await me.say_and_wait(`시니어 시즌이 끝나면, 내년 여름엔 프랑스로 가서 도전해볼까?`);
    await maru.say_and_wait(
      `이 ${era.get('cflag:4:성별') - 1 ? '이쁜이' : '멋쟁이'}도 딱 그렇게 생각하던 참이야!`,
    );
    await maru.say_and_wait(`앞으로도 계속 같이 힘내자!`);
  } else if (
    extra_flag.race === race_enum.sank_hai &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('오사카배 이후・폭풍', maru);
    await maru.say_and_wait(`하아, 하아, 하아……`);
    await maru.say_and_wait(`이긴…… 거야?`, true);
    await era.printAndWait(
      `황제와의 정면 승부는 결국 ${maru.name}의 승리로 막을 내렸다.`,
    );
    await me.say_and_wait(`정말 대단한 레이스였어. 나도 모르게 식은땀이 다 흐르더라고.`);
    await era.printAndWait(
      `몰려드는 마군 속에서 최적의 위치를 찾아내고, 마지막 스퍼트의 순간 당연하다는 듯 선두로 치고 나간다——.`,
    );
    await era.printAndWait(`하지만 한 끗 차이였다. 하마터면 ${maru.name}는 추월당할 뻔했다.`);
    await era.printAndWait(`……그럼에도,`);
    await maru.say_and_wait(
      `이걸 흥분이라고 해야 할까, 아니면 공포라고 해야 할까? 괴물의 그림자를 밟은 ${maru.uma_sex_title}는 네가 처음이야, 루돌프♪`,
    );
    await era.printAndWait(
      `마침내 자신의 발걸음을 뒤쫓아오는 상대를 만났다는 사실에 만족한 듯, ${maru.name}는 미소를 지었다.`,
    );
    era.drawLine();
    await luna.say_and_wait(`……다행이군.`);
    await era.printAndWait(
      `황제는 멀어져가는 당신들의 뒷모습을 가만히 응시했다. ${maru.sex_code - 1 ? '그녀' : '그'}는 입술을 축이며 묘한 고양감을 느꼈다.`,
    );
    await era.printAndWait(
      `황제가 이루지 못한 업적은 아직 너무나 많다. 그렇기에 스스로를 더 증명해야만 한다. 동세대에 적수가 없을 뿐만 아니라, 과거의 영광을 무찌르고 미래의 광채까지도 제압할 수 있는 '유일무이'한 존재임을.`,
    );
    era.println();
    await luna.say_and_wait(`마루젠, 네가 부디 그 신념을 끝까지 관철할 수 있기를 바란다.`);
    await luna.say_and_wait(
      `그리고—— 스스로를 왕도라 자칭하지 마라. 개척자는 오직 고난만을 짊어지는 법. 네가 위대하다면 차라리 쓰러져서, 후발주자들이 딛고 올라설 계단이 되어라.`,
    );
    await luna.say_and_wait(
      `일본 ${maru.uma_sex_title}의 미래를 위해—— 그리고 더 강력해질 황제를 위해.`,
    );
    await era.printAndWait(`그 말을 끝으로 황제는 고개를 들어 ${maru.name}를 내려다보았다.`);
    era.println();
    await luna.say_and_wait(
      `그 우아한 교양 따위는 집어치우고 문명의 껍데기를 찢어버려라! 온갖 수단을 동원해라, 비겁해도 좋고 무례해도 좋다. 그저 할 수 있는 모든 것을 다해라!!!`,
    );
    await luna.say_and_wait(
      `아무리 꼴사나운 모습이라 해도 승리한다면 허용될 것이다. 모든 준비를 마쳐라…… 텐노상(가을)에서, 나의 복수를 맞이해라.\n`,
    );
    await era.printAndWait(`말을 마친 황제는 평소처럼 온화한 표정으로 가볍게 경기장을 떠났다.`);
  } else if (
    extra_flag.race === race_enum.sank_hai &&
    edu_weeks > 95 &&
    extra_flag.rank > 1
  ) {
    await print_event_name('오사카배 이후・침울한 분위기', maru);
    await maru.say_and_wait(`세상에, 루돌프한테 지다니…… 으아앙—`);
    await era.printAndWait(`하지만 ${maru.name}는 생각보다 크게 상심한 모습은 아니었다.`);
    era.printButton(`돌아가서 반성회를 열고 복수전을 준비하자.`, 1);
    await era.input();
    await era.printAndWait(`황제와의 대결은 일단 여기서 일단락되었다.`);
  } else if (
    extra_flag.race === race_enum.yasu_kin &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    await print_event_name('야스다 기념 이후・달리고 싶어지는 레이스', maru);
    era.drawLine({ content: '대기실 내부' });
    await maru.say_and_wait(` ${callname}, 나의 멋진 뒷모습 잘 봤어?`);
    await era.printAndWait(
      `야스다 기념에서 후배 ${maru.uma_sex_title}들은 ${maru.name}의 뒷모습에 매료된 듯, ${maru.sex_code - 1 ? '그녀' : '그'}를 목표로 힘차게 달려나갔다.`,
    );
    await maru.say_and_wait(
      `후배들도 정말 대단해졌는걸. 이러다 언젠가 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}도 후배들한테 추월당해서, 손수건을 깨물며 질투 섞인 눈으로 시상대의 아이들을 바라보게 될지도 몰라⭐`,
    );
    await maru.say_and_wait(
      `상처받은 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}의 마음을 달래주기 위해서라도, ${callname}은 오늘 나랑 같이 자야 해?`,
    );
    await me.say_and_wait(`그것보다 ${maru.name}는 정말 달리는 즐거움을 만끽하는 것 같네.`);
    await maru.say_and_wait(
      `어머, 말을 돌리다니! ${callname}의 태도, 너무 차가워진 거 아냐?`,
    );
    await maru.say_and_wait(
      `설마 나 이제 매력이 떨어진 거야? 이러다 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}가 나쁜 사람한테 버림받는 건 아니겠지?`,
    );
    await maru.say_and_wait(
      `이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'} 너무 불쌍해~`,
    );
    await era.printAndWait(` ${maru.name}는 어느덧 당신에게 어리광을 부리는 법까지 터득했다.`);
    await me.say_and_wait(`이럴 때는 역시……`, true);
    await era.printAndWait(
      `오른손으로 ${maru.name}의 허리를 부드럽게 감싸 안고 깊게 입을 맞추었다. 왼손으로는 귀 근처의 민감한 곳을 부드럽게 쓰다듬어 주었다.`,
    );
    await era.printAndWait(
      `마치 캣닙을 맡은 고양이처럼, ${maru.name}는 이제 완전히 긴장을 풀고 몸을 맡겼다.`,
    );
    await maru.say_and_wait(
      `돌아가면 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}의 사랑이 가득 담긴 도시락을 맛보게 해줄게♪`,
    );
    await era.printAndWait(
      ` ${me.actual_name}은(는) 폭신한 치즈와 꿀을 듬뿍 바른 빵의 달콤한 향기, 그리고 맑은 하늘 아래 환하게 웃던 ${maru.name}의 미소를 떠올렸다.`,
    );
    era.printButton(`「 ${maru.name}의 요리 솜씨는 언제나 최고지.」`, 1);
    await era.input();
    await era.printAndWait(
      `무언가 회상하는 듯 미소 속에 장난기 가득한 표정을 지은 ${maru.name}가 꼬리를 살랑거렸다.`,
    );
    await maru.say_and_wait(` ${callname}, 앞으로도 계속 내 전용 시식가로 있어 줘야 해?`);
    await me.say_and_wait(`그러고 보니, 내일은 중화 요리가 먹고 싶은걸.`);
    await maru.say_and_wait(`후후♪ ${callname}, 기대하고 있으라고!`);
    era.drawLine();
    await era.printAndWait(
      `그날 밤, ${maru.name}가 주방에서 갓 만든 양배추 고기 볶음을 내왔다. 젓가락을 들기도 전에 고소하고 감칠맛 나는 향기가 코끝을 자극해 식욕을 한껏 돋웠다.`,
    );
    await era.printAndWait(
      `한 점 집어 먹어보니, 돼지고기의 식감이 어찌나 부드러운지 마치 두부를 씹는 듯했다. 입안 가득 퍼지는 채소 육수와 육즙의 조화에 혀까지 녹아내릴 것만 같았다.`,
    );
    await maru.say_and_wait(`맛이 어때?`);
    await era.printAndWait(
      `맛있게 먹는 ${me.actual_name}의 모습을 보며, ${maru.name}는 만족스러운 미소를 지었다.`,
    );
  } else if (
    extra_flag.race === race_enum.tenn_sho &&
    edu_weeks > 95 &&
    extra_flag.rank === 1
  ) {
    const chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342);
    chara340_talk.name = '지혜의 여신';
    chara341_talk.name = '자애의 여신';
    chara342_talk.name = '엄격의 여신';
    await print_event_name('텐노상(가을) 이후・금빛 가을, 황금빛 꿈', maru);

    await maru.say_and_wait(`하아, 하아, 하아……`);
    await maru.say_and_wait(`이제…… 조금만 더……`);
    await era.printAndWait(`마지막 코너에서 단숨에 가속한다.`);
    await era.printAndWait(`지금 이 순간, 경기장은 두 사람만의 결투장으로 변했다.`);
    await era.printAndWait(`앞으로 10마신, 8마신, 6마신.`);
    await era.printAndWait(`결승선까지 남은 거리는 15m도 채 되지 않는다.`);
    await era.printAndWait(`뒤쪽에서 들려오는 천둥 같은 발소리가 점점 가까워진다.`);
    await maru.say_and_wait(`결국 마지막에 역전당하는 걸까?`, true);
    await era.printAndWait(`미리 벌려놓았던 거리가 마치 불길에 녹는 눈처럼 빠르게 사라져간다.`);
    await era.printAndWait(`라스트 스퍼트의 그 찰나.`);
    await era.printAndWait(`황제가 ${maru.name}의 뒷모습을 따라잡았다.`);
    await era.printAndWait(`하지만 ${maru.name}는 한 발짝 더 앞서 나갔다.`);
    await era.printAndWait(`황제: 설마 이렇게 될 줄이야, 정말 흥미롭군.`);
    await say_by_passer_by_and_wait(`해설`, `최종 우승자는—— ${maru.name}입니다!`);
    await maru.say_and_wait(`이겼어……`);
    await maru.say_and_wait(`……그런데 왜 이렇게 졸린 거지……`);
    era.drawLine();
    maru.print(
      `다시 눈을 떴을 때는 마치 긴 꿈에서 깨어난 듯했다. 눈앞에 펼쳐진 것은 몽환적이고 신비로운 초원이었다.`,
    );
    maru.print(
      `희박한 구름 사이로 쏟아지는 햇살이 무한한 녹음을 따스하고 부드러운 황금빛으로 물들이고 있었다.`,
    );
    maru.print(`몸을 일으키려 하자, 몸 안의 모든 세포가 활력으로 가득 차오르는 기분이 들었다.`);
    maru.print(
      `그대로 자리에서 일어났다. 사방을 둘러보니 푸른 하늘과 흰 구름 아래, 대지에 박힌 거대한 에메랄드처럼 끝없이 펼쳐진 초원이 신비로운 분위기를 자아내고 있었다.`,
    );
    maru.print(`산들바람이 불어올 때마다 풀잎들이 파도처럼 일렁이며 싱그러운 풀 향기를 실어 왔다.`);
    await maru.say_and_wait(`여기는 어디지?`);
    maru.print(`대답해주는 이는 없었지만, 마음속 깊은 곳에선 이곳에 해답이 있을 거라는 확신이 들었다.`);
    await maru.say_and_wait(`평소처럼 마력 전개!`);
    await maru.say_and_wait(`셋!`);
    await era.printAndWait(`상체를 곧게 펴고 어깨의 힘을 뺀다.`);
    await maru.say_and_wait(`둘!`);
    await era.printAndWait(`모든 힘을 다리에 집중한다.`);
    await maru.say_and_wait(`하나!`);
    await era.printAndWait(`깊게 숨을 들이마시며 대기에 스며든 싱그러운 풀 냄새를 느낀다.`);
    await era.printAndWait(
      `그리고 해답을 찾기 위해, ${maru.name}는 초원의 품속을 질주하기 시작했다.`,
    );
    era.drawLine();
    await era.printAndWait(` ${maru.name}는 황금빛 초원에 도착했다.`);
    await era.printAndWait(
      `그곳은 그리운 마음이 드는, ${maru.uma_sex_title}들의 영혼이 머무는 요람이었다.`,
    );
    await maru.say_and_wait(`여긴……?`);
    await chara341_talk.say_and_wait(`드디어 왔구나, 다정한 아이야.`);
    await era.printAndWait(
      `갑자기 나타난 이는 온화하고 자애로운 마음으로 만물을 감싸 안는 여신이었다.`,
    );
    await chara340_talk.say_and_wait(`그동안의 고생은 우리도 잘 알고 있단다.`);
    await era.printAndWait(
      `이어서 모든 ${maru.uma_sex_title}의 타고난 개성을 존중하고 축복하는, 냉철하면서도 자상한 여신이 나타났다.`,
    );
    await chara342_talk.say_and_wait(`시간에 의미를 부여하여 얻어낸 그 강력한 힘……`);
    await chara342_talk.say_and_wait(
      `한 명의 필멸자로서는 가히 대단한 증명이라 할 수 있겠지.`,
    );
    await era.printAndWait(
      `강함만이 미래를 개척한다고 믿는, 엄격하면서도 강인한 여신이 모습을 드러냈다.`,
    );
    await maru.say_and_wait(`제가 왜 여기 있는 거죠?`);
    await chara342_talk.say_and_wait(
      `……이곳은 '경지'를 깨달은 ${maru.uma_sex_title}가 자신의 재능을 극한까지 발휘했을 때 도달하게 되는 경기장이다.`,
    );
    await chara341_talk.say_and_wait(
      `또한 멋진 삶을 살아온 모든 ${maru.uma_sex_title}들이 마지막에 당도하게 되는 안식처이기도 하지.`,
    );
    await chara340_talk.say_and_wait(`에덴에 도달한 ${maru.uma_sex_title}여.`);
    await chara340_talk.say_and_wait(
      `그대는 우리가 창조한 이 세계가 서로 다른 이념의 영원한 대립으로 인해 수많은 슬픔과 고통을 겪고 있음을 알고 있을 것이다.`,
    );
    await chara340_talk.say_and_wait(
      `하지만 그 대립 덕분에 이 세상에는 언제나 대등한 가치를 지닌 또 다른 선택지들이 존재할 수 있는 것이지.`,
    );
    await chara341_talk.say_and_wait(
      `또한 그 누구에게도 인정받지 못하고 때로는 비현실적이라 치부되는 꿈들조차, 영원히 동경할 수 있는 저편의 안식처가 되어준단다.`,
    );
    await chara341_talk.say_and_wait(
      `그대가 어떤 신념을 품고 있든, 이 세상 어딘가에는 그대 마음의 안식처가 될 곳이 반드시 존재할 게다.`,
    );
    await chara342_talk.say_and_wait(
      `인간과 ${maru.uma_sex_title}에게는 아주 긴 시간이 필요하다. 서로를 존중하며 평화롭게 경쟁하는 법을 배우기 위한 시간 말이다.`,
    );
    await chara342_talk.say_and_wait(
      `모든 다툼의 끝에는 결국 하나의 의미가 남게 되며, 그 의미는 승리를 위해 대가를 치른 모든 ${maru.uma_sex_title}들을 구원하게 될 것이다.`,
    );
    await chara340_talk.say_and_wait(
      ` ${maru.name}, 에덴을 찾은 수많은 ${maru.uma_sex_title}들처럼 그대도 묻고 싶은 것이 있느냐?`,
    );
    await maru.say_and_wait(`묻고 싶은 것……?`);
    maru.print(`순간 묻고 싶은 질문들이 너무나 많아 말문이 막혔다.`);
    maru.print(`하지만……`);
    await maru.say_and_wait(`아뇨, 됐어요.`);
    await maru.say_and_wait(`여정에서 가장 중요한 건 길가에 핀 풍경들이니까요.`);
    await maru.say_and_wait(
      `처음부터 결승점의 해답을 다 알고 있다면, 지나온 풍경들은 그 존재 의미를 잃어버리게 될 거예요.`,
    );
    await maru.say_and_wait(
      `만약 꼭 물어야 한다면, 이 즐거운 여행을 다 마치고 나서 다시 만났을 때 묻는 게 더 현명한 선택 아닐까요?`,
    );
    await chara340_talk.say_and_wait(
      `진실보다 세속의 즐거움을 더 아끼는구나? 참으로 흥미로운 길을 선택했군.`,
    );
    await chara341_talk.say_and_wait(`앞으로의 길이 지금보다 더 험난할지라도 말이다.`);
    await chara342_talk.say_and_wait(`어떤 고난이라도 뛰어넘을 수 있겠지? 너에겐 그럴 자격이 있다.`);
    await chara340_talk.say_and_wait(`앞으로의 여정에 행운이 깃들기를.`);
    await era.printAndWait(
      `부드러운 바람이 ${maru.name}를 가볍게 들어 올려 머나먼 세계를 향해 가속시켰다.`,
    );
    await era.printAndWait(
      `의식이 사라지기 직전, ${maru.name}는 이 황금빛 고향의 풍경을 마음속 깊이 새겼다.`,
    );
    era.drawLine();
    era.printButton(`「 ${maru.name}?」`, 1);
    await era.input();
    await era.printAndWait(
      `불행 중 다행이라고 해야 할까? 레이스가 끝난 직후부터 멍하니 정신을 놓고 있던 ${maru.name}였지만, 위닝 라이브 무대에서는 평소처럼 멋진 춤으로 모든 팬의 마음을 사로잡았다.`,
    );
    await era.printAndWait(
      `트레이너인 당신은 현재 ${maru.name}에게 휴식이 필요하다며 모든 인터뷰와 팬 미팅을 정중히 거절했다. 그리고 과학적으로 설명하기 힘든 가사 상태에 빠진 ${maru.name}를 조심스럽게 업어, 애차인 타치에 태워 그녀의 아파트로 데려다주었다.`,
    );
    era.printButton(`「실례하겠습니다.」`, 1);
    await era.input();
    await era.printAndWait(
      `타치를 근처 주차장에 세워두고, ${maru.name}를 조심스럽게 안아 올렸다.`,
    );
    await era.printAndWait(
      ` ${maru.sex_code - 1 ? '그녀' : '그'}를 침대에 눕힌 뒤, 당신은 의자를 끌어당겨 곁을 지켰다.`,
    );
    await me.say_and_wait(`제발 아무 일 없어야 해, ${maru.name}.`, true);
    await era.printAndWait(
      `자신이 할 수 있는 최선을 다한 뒤, 차라리 내 잠을 줄여서라도 ${maru.name}가 깨어나길 간절히 기도했다.`,
    );
    await era.printAndWait(`불안함 속에서 시간이 흘러갔다.`);
    await era.printAndWait(`1분, 1시간…… 그리고 긴 밤이 지나갔다.`);
    await maru.say_and_wait(`으음……`);
    await era.printAndWait(
      `구름 사이로 비친 햇살이 ${maru.name}의 몸 위로 부드럽게 내려앉을 때쯤이었다.`,
    );
    await maru.say_and_wait(`여기는……?`);
    await era.printAndWait(
      `잠에서 깨어난 ${maru.sex_code - 1 ? '소녀' : '소년'}은(는) 의아한 듯 익숙한 천장을 바라보다가, 곁에서 졸고 있는 낯익은 실루엣에 시선을 고정했다.`,
    );
    await maru.say_and_wait(` ${callname}?`);
    await era.printAndWait(
      `하루 꼬박 쌓인 피로를 이기지 못한 듯, ${me.actual_name}은(는) 어느새 앉은 채 깊은 잠에 들어 있었다.`,
    );
    await maru.say_and_wait(`이렇게 보니까 ${callname}, 정말 잘생겼네♪`);
    await maru.say_and_wait(`아무리 봐도 질리지가 않아♪`);
    await maru.say_and_wait(`……여기까지 오느라 고생 많았어, ${callname}.`);
    await maru.say_and_wait(`무슨 일이 있어도, 우리 계속 함께하자?`);
    await era.printAndWait(` ${maru.name}가 당신을 꼭 껴안았다.`);
    await era.printAndWait(`세 여신이 아이들을 따스한 눈길로 지켜보고 있었다.`);
    await chara340_talk.say_and_wait(`……다정한 아이야, 네 소원은 반드시 이루어질 거란다.`);
  } else if (extra_flag.rank === 1) {
    await print_event_name('레이스 우승', maru);
    await maru.say_and_wait(
      `Victory! Victory! 이겼어, 트레이너♪ 역시 1등은 기분이 남다른걸. 가슴이 두근거려서 멈추질 않아!`,
    );
    await maru.say_and_wait(`트레이너, 내가 달리는 모습 똑똑히 봤어?`);
    era.printButton(`「네가 최고였어!」`, 1);
    era.printButton(`「더 잘할 수 있을 거야!」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait(
        `그치그치♪ 오늘은 찻집에 가서 레몬티랑 티라미수 먹으러 가자!`,
      );
      await maru.say_and_wait(`트레이너도 당연히 같이 가줄 거지? 후후♪`);
    } else {
      await maru.say_and_wait(`어머, 트레이너는 참 엄격하다니까!`);
      await maru.say_and_wait(`하지만 나도 여기서 안주할 순 없지!`);
      await era.printAndWait(
        ` ${maru.name}는 제일 좋아하는 코코넛 드링크를 단숨에 들이켰다!`,
      );
      await maru.say_and_wait(
        `——푸하! 진짜 시원하다! 좋아, 다음에도 의욕 충만하게 달려보겠어!`,
      );
    }
  } else if (extra_flag.rank <= 5) {
    await print_event_name('레이스 입상', maru);
    await maru.say_and_wait(
      `보러 와준 후배들을 위해서라도 1등을 하고 싶었는데, 아직 내 실력이 부족한가 봐……`,
    );
    era.printButton(`「충분히 잘 달렸어!」`, 1);
    era.printButton(`「다음엔 꼭 우승하자!」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait(`후후, 트레이너가 위로해주는구나. 고마워.`);
      await maru.say_and_wait(
        `하지만…… 아이참, 트레이너가 걱정하게 만들다니 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}도 참 못됐네.`,
      );
      await maru.say_and_wait(
        '좋아, 다음번엔 반드시 「슈퍼카」다운 모습을 보여줘서 아주 깔끔하게 우승해버리겠어!',
      );
    } else {
      await maru.say_and_wait('맞아, 계속 한숨만 쉬고 있는 건 나답지 않지.');
      await maru.say_and_wait(
        `다음에는 꼭 후배들에게 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}의 진가를 보여줄 거야!`,
      );
      await maru.say_and_wait('타치랑 같이 바다로 드라이브나 갈까♪');
      await era.printAndWait(
        `그 후, 당신은 ${maru.name}이(가) 기분이 풀릴 때까지 바닷가 드라이브를 함께해주었다.`,
      );
    }
  } else if (extra_flag.rank <= 10) {
    await print_event_name('레이스 패배', maru);
    await maru.say_and_wait('속상해……');
    await maru.say_and_wait(`미안해, 트레이너…… 나의 멋진 모습을 보여주고 싶었는데……`);
    era.printButton(`「다음 기회를 기대할게!」`, 1);
    era.printButton(`「기죽어 있어도 해결되는 건 없어!」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait(`……정말 다정하구나, 트레이너.`);
      await maru.say_and_wait(
        `……좋아, 그럼 얼른 돌아가서 훈련하자! 다음엔 꼭 멋지게 승리하는 모습을 보여줄게!`,
      );
    } else {
      await maru.say_and_wait('……말 그대로야. 기죽어 있다고 발이 빨라지는 건 아니니까.');
      await maru.say_and_wait(
        '이 이상 우울해하지 않겠어. 조금 찌그러져도 금방 수리해서 달려나가는 타쨩처럼!',
      );
      await maru.say_and_wait('좋아! 수리 끝. 얼른 기름 가득 채우고 다시 달려보자고!');
    }
  } else {
    return true;
  }
};