const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const EduEventMarks = require('#/data/event/edu-event-marks/marks-class');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} maru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} ebj
 */
module.exports = async function (maru, me, callname, hook, ebj) {
  const digital = get_chara_talk(19),
    falcon = get_chara_talk(46),
    event_marks = new MaEduMarks(),
    edu_weeks = era.get('cflag:4:육성턴수합산');
  let wait_flag = false;

  if (ebj?.arg === 'memory') {
    await print_event_name(`좋은 아침, ${maru.name}`, maru);
    maru.print(`얼굴을 직격하는 햇살에 마지못해 눈을 떴다.`);
    maru.print(`어젯밤에 너무 무리해서 놀아버린 걸까?`);
    await maru.say_and_wait(`우으—`);
    await era.printAndWait(`${maru.name}가 침대에서 눈을 떴다.`);
    await maru.say_and_wait(`후아—암`);
    await maru.say_and_wait(`침대에서 일어나기 싫어서, 그대로 손을 뻗어 알람 시계를 더듬거린다.`);
    maru.print(
      `의외네. 평소라면 늦잠 자는 나를 ${
        callname
      }이(가) 무서운 눈으로 노려보는 것 같은 살벌한 알람 소리가 들려야 하는데, 지금은 이사장님이 학원에 심은 당근처럼 조용하다.`,
    );
    maru.print(`……아니, 아무리 생각해도 좀 이상한데?`);
    maru.print(`역시 어제 너무 힘을 줘서 눌렀나? 고장 난 걸까?`);
    maru.print(`아니면 설마—`);
    await maru.say_and_wait(`오늘 휴일인가?`, true);
    maru.print(`이 기쁜 소식에 만족하며 다시 잠들려다가——아니지!`);
    maru.print(`시계가 고장 난 거면 어떡해? 오늘이 무슨…… 무슨 요일이었더라?`);
    maru.print(`지각이라도 해서 ${callname}에게 들켰다간……`);
    await maru.say_and_wait(`정말 스트레스 만땅이야!`, true);
    maru.print(
      `벌떡 몸을 일으키자, 아직 잠기운이 가시지 않은 몸에 찌릿한 마비감이 느껴졌다.`,
    );
    await maru.say_and_wait(`하—암.`);
    maru.print(`몸이 자동으로 반응했다.`);
    await era.printAndWait(
      `${maru.name}는 헝클어진 머리를 하고 어디론가 사라진 슬리퍼를 더듬으며 흐릿한 시야로 침대에서 내려왔다.`,
    );
    era.drawLine();
    maru.print(
      `비몽사몽 하던 정신이 차가운 물줄기에 씻겨 내려가며, 세 여신의 에덴에서 현실로 강제로 끌려 나왔다.`,
    );
    maru.print(
      `드라이기로 가볍게 머리를 말린 뒤, 아직 물기가 뚝뚝 떨어지는 머리를 수건으로 감싸고 화장실을 나왔다.`,
    );
    maru.print(`꿀꺽꿀꺽, 캬아～`);
    maru.print(`커피 우유 한 병을 단숨에 들이키니 기분도 한결 들뜨네♪`);
    await maru.say_and_wait(`이제 뭘 할까?`);
    maru.print(`휴일인 오늘, 후배들도 다들 놀러 갔겠지.`);
    maru.print(`쉬는 날의 트레센은 조금 쓸쓸하네.`);
    await maru.say_and_wait(`${callname}——`);
    maru.print(`가슴 속에서 어떤 감정이 조용히 솟아올랐다.`);
    maru.print(`낯설면서도 묘하게 익숙한 달콤함이 마음을 스쳤다.`);
    maru.print(
      `설령 ${callname}이(가) 이 세상에서 사라진다 해도, 난 아마 이 설렘을 잊지 못할 거야.`,
    );
    await maru.say_and_wait(`그럼, 오늘은 트레이닝실에 가보자.`);
    await era.printAndWait(`자책하면서도 누구보다 승부욕이 강한 ${callname}(이)라면.`);
    await era.printAndWait(
      `지금 이 순간에도 분명 트레이닝실에서 다음 레이스를 고민하며 쓴 커피를 마시고 있겠지.`,
    );
    await maru.say_and_wait(
      `그럼, 쩔쩔매는 ${callname}을 그 지독한 괴로움 속에서 건져내 주지 않으면 안 되겠네.`,
    );
    await era.printAndWait(`${maru.name}가 트레이닝실 문 앞에 도착했다.`);
    await era.printAndWait(
      `최근에 배운 「갑자기 문을 열어 깜짝 놀라게 하기」라는 유행을 따라, 문을 활짝 열며 큰 소리로 자신의 도착을 알렸다.`,
    );
    await era.printAndWait(
      `방금 전의 습격에 놀라 소파 아래로 날아가 버린 리모컨을 허둥지둥 찾는 ${
        callname
      }의 당황한 표정이 보인다.`,
    );
    await era.printAndWait(
      `${maru.name}는 가방 속에 든, ${
        callname
      }과 함께 가라오케에서 찍은 사진을 떠올렸다. 술 기운에 발그레해진 채 귀여운 웃음을 짓고 있던 ${
        callname
      }과 모습. 침대 위에서 몇 번이고 다시 보았던 사진이다.`,
    );
    await era.printAndWait(`날씨가 맑아서일까.`);
    await era.printAndWait(
      `${maru.name}는 방금 수분을 가득 머금은 반짝이는 당근처럼 보였다.`,
    );
    await era.printAndWait(
      `내일의 ${maru.sex}도 평소처럼 이 특별한 느낌으로 모두를 응원해 줄 것이다.`,
    );
    await era.printAndWait(
      `미래에 대한 동경을 가슴에 품고, ${maru.name}는 새로운 하루를 맞이했다.`,
    );

  } else if (ebj?.arg === 'teacher_sister') {
    await print_event_name(`지도해 주세요, 마루젠스키 선생님!`, maru);
    await era.printAndWait(`어느 휴일 아침.`);
    await era.printAndWait(`${me.name}은(는) 책상에 엎드려 아무것도 하기 싫어하고 있다.`);
    await era.printAndWait(
      `꿈에 그리던 트레센에 들어온 뒤로, 어째서인지 학생 시절의 열정이 한순간에 사라져 버린 느낌이다.`,
    );
    await era.printAndWait(
      `${maru.name}와 대화하며 조금씩 예전의 감각을 되찾고는 있지만, 억지로 짜내는 듯한 이 기분은 여전히 고민거리다.`,
    );
    await me.say_and_wait(`평소에 그렇게 고생했으니까, 오늘은 좀 쉬어도 되겠지.`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 들어갈게♪`,
    );
    await era.printAndWait(
      `그런 핑계를 대며 땡땡이칠 준비를 하던 차에, ${maru.name}가 문을 열고 들어왔다.`,
    );
    await era.printAndWait(
      `우연일까, ${maru.name}는 기분이 무척 좋아 보인다.`,
    );
    await maru.say_and_wait(
      `이런, 우리 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}에게 확실하게 설명해 줘야겠네.`,
    );
    await me.say_and_wait(
      `${maru.name}와 상담해 보면 새로운 돌파구가 보일지도 몰라.`,
      true,
    );
    await era.printAndWait(
      `밑져야 본전이라는 생각으로, ${me.name}은(는) ${maru.name}에게 마음속 고민을 털어놓았다.`,
    );
    await maru.say_and_wait(`음— 과연 그렇구나.`);
    await era.printAndWait(
      `${maru.name}는 살짝 미소 지으며 구석에 있던 작은 칠판을 끌어당겼다.`,
    );
    await maru.say_and_wait(`그럼, 이 누나가 내 생각을 좀 들려줄게.`);
    await era.printAndWait(`${maru.name}가 칠판 왼쪽에 귀여운 자신의 캐릭터를 그렸다.`);
    await maru.say_and_wait(
      `가끔 말이야, 하지 않으면 후회할 걸 알면서도 도무지 의욕이 나지 않을 때가 있지?`,
    );
    await era.printAndWait(
      `칠판 오른쪽에 고민거리인 숙제, 순위, 그리고 댄스에 동그라미를 쳤다.`,
    );
    await maru.say_and_wait(
      `중요하다는 건 알지만, 하지 않으면 가까운 사람들에게 불안하고 초조한 느낌을 주게 돼.`,
    );
    await era.printAndWait(
      `${maru.sex}는 설명하며 작은 캐릭터 머리 위에 세심하게 먹구름을 그려 넣었다.`,
    );
    await maru.say_and_wait(
      `후회와 초조함 속에서 시간을 보내지만, 어라? 이대로도 어떻게든 유지가 되는 것 같네?!`,
    );
    await era.printAndWait(`두 그림 아래에서 캐릭터가 트레이너에게 사과하기 시작했다.`);
    await maru.say_and_wait(
      `그래서 다음에 똑같은 일이 생겨도 후회하는 척만 하면 주변에서도 뭐라 하지 않고, 결국 다들 적당한 상태로 유지하게 되는 거야.`,
    );
    await era.printAndWait(`세 그림을 화살표로 잇자 하나의 순환이 완성되었다.`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 어떻게 생각해?`,
    );
    era.printButton(`사태가 해결된 건 아니지 않아?`, 1);
    await era.input();
    await me.say_and_wait(
      `상황이 악화되고 주변에서 압박을 주면 후회하는 척을 해서 포기하게 만드는 이 순환 속에서, 정작 문제는 하나도 해결되지 않은 거잖아?`,
    );
    await me.say_and_wait(
      `동력원이 되어야 할 에너지를 후회하는 모습으로 소모해 버리니까, 결국 사태는 더 나쁜 방향으로 흘러가는 거지.`,
    );
    await me.say_and_wait(
      `결국 상황이 심각해질수록 이 후회의 순환은 자가 유지되는 걸 넘어 더 강화되는 거야.`,
    );
    await era.printAndWait(`약 8분간 고민한 끝에, ${me.name}은(는) 조심스럽게 답을 내놓았다.`);
    await maru.say_and_wait(
      `정답! 이 순환은 문제를 해결하는 게 아니라 문제라는 감정만 해결하는 거야. 당사자 입장에선 다음 주가 시험인 걸 알면서도 시간이 많다고 자위하며 게임 센터로 달려가는 학생과 같지.`,
    );
    await maru.say_and_wait(`본질은 그저 아픈 게 무서워서 진통제를 먹고 자신을 마비시키는 것뿐이야.`);
    await maru.say_and_wait(`그러니까 우리는 행동의 동기를 찾아야 해.`);
    await era.printAndWait(
      `정답을 맞힌 듯, 꽃 같은 미소가 ${maru.sex}의 얼굴에 피어났다.`,
    );
    await maru.say_and_wait(
      `인류 문명이 원주율을 소수점 일곱 자리까지 밝혀내는 데 최소 2,000년이 걸렸어.`,
    );
    await maru.say_and_wait(`무리수라는 걸 인식하는 데만 1,000년이 걸렸지.`);
    await maru.say_and_wait(
      `이차방정식, 삼각함수, 로그, 팩토리얼…… 이 모든 건 수천 년에 걸친 인류의 집단적인 탐구로 이루어낸 학술적 성취야.`,
    );
    await era.printAndWait(
      `칠판 지우개로 이전 그림을 깨끗이 지우더니, 커다란 크리스털 당근을 그렸다.`,
    );
    await maru.say_and_wait(
      `겨우 8년 정도의 학습으로 이 성취들을 자유자재로 다룰 수 있게 된다는 건, 정말 화려한 업적이란다.`,
    );
    await maru.say_and_wait(
      `어떤 사람들은 아주 영리하고 운도 좋아서, 순위나 주변의 칭찬을 연료 삼아 이 지식들을 더 빨리 마스터하기도 해.`,
    );
    await era.printAndWait(`작은 캐릭터가 드릴을 이용해 금세 크리스털 당근을 찾아냈다.`);
    await me.say_and_wait(`만약 내가 오랫동안 노력해도 이해하지 못하면 어쩌지?`);
    await maru.say_and_wait(`그게 뭐 어때서?`);
    await era.printAndWait(`${maru.name}가 눈을 깜빡였다.`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 목표는 이 문명의 유산을 온전히 물려받는 거야. 얼마나 걸리든 결국 배우기만 하면 엄청난 이득인걸.`,
    );
    await me.say_and_wait(`하지만 도무지 이해 안 가는 것들은 어떻게 처리해야 할까?`);
    await maru.say_and_wait(
      `가장 좋은 방법은 배경지식과 역사적 맥락을 읽어보는 거야. 이 사상적 성취가 역사 속에서 어떻게 걸러져 나왔는지 추적해 보는 거지.`,
    );
    await era.printAndWait(
      `칠판의 캐릭터가 광물 지식을 찾아보고 경험 많은 선배에게 조언을 구한다.`,
    );
    await maru.say_and_wait(
      `그렇게 하면 인지적 장벽이 낮아질 뿐만 아니라, 올바른 역사적 감각이 사회적 통념이 만들어낸 왜곡된 가치 평가에서 벗어나게 해 줄 거야.`,
    );
    await maru.say_and_wait(`의욕이 없는 근본적인 원인은 언제나 가격을 잘못 매겼기 때문이니까.`);
    await era.printAndWait(`크리스털 당근이 반짝반짝 빛나기 시작했다.`);
    await maru.say_and_wait(
      `역사적으로 중요하고 귀한 것들 주위에는 자연스럽게 거대한 산업과 생태계가 형성되기 마련이야.`,
    );
    await era.printAndWait(`캐릭터들이 여신 제단 위에 크리스털 당근을 올려놓았다.`);
    await maru.say_and_wait(
      `그리고 그 거대한 산업은 이 지식의 가치를 보증하고, 그것을 잘 아는 사람에게 기회와 풍부한 보상을 제공하지.`,
    );
    await era.printAndWait(`이야기의 마지막, 세 여신들이 캐릭터에게 당근 산을 선물했다.`);
    await maru.say_and_wait(`그러니까 공부는 수익률이 극도로 높은 투자 기회인 셈이야.`);
    await me.say_and_wait(`그렇군요, 감사합니다 ${maru.name} 선생님!`);
    await maru.say_and_wait(
      `어머나～ ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}도 참 정중하네. 도움이 됐다면 이 누나가 더 기쁘단다.`,
    );
    await era.printAndWait(
      `${me.name}에게 도움이 되어 진심으로 기뻐하는 ${maru.name} 주변에 무지개가 피어오르는 듯했다.`,
    );
    await era.printAndWait(`${me.name}들은 의미 있는 하루를 보냈다.`);

  } else if (edu_weeks === 5) {
    await print_event_name(
      `누나의 선물`,
      maru,
    );
    await era.printAndWait(`트레이닝실\n\n`);
    await era.printAndWait(`똑똑똑`);
    await maru.say_and_wait(`하이루, ${callname}!`);
    await era.printAndWait(
      `초콜릿 산을 품에 안은 ${maru.name}가 ${me.actual_name}의 트레이닝실로 들어왔다.`,
    );
    era.printButton(`「좀 도와줄까?」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.actual_name}은(는) 자신의 눈을 의심할 정도로 엄청난 양의 초콜릿을 들고 온 ${maru.name}을 보았다.`,
    );
    await maru.say_and_wait(`후배들이 생각보다 너무 열정적이라 정말 못 말리겠다니까.`);
    await maru.say_and_wait(
      `평소에 도와줘서 고맙다느니 뭐라느니 하면서 억지로 떠맡기더라고— 아, 여기 둬도 될까?`,
    );
    era.printButton(`「후배들이 ${maru.name}을 정말 좋아하네」`, 1);
    await era.input();
    await era.printAndWait(
      `탁자 위에 있던 간식과 만화책을 바닥으로 치우고, ${maru.name}의 손에서 초콜릿 일부를 건네받았다.`,
    );
    await maru.say_and_wait(`항복— 후배들의 기대는 정말 묵직하네.`);
    await era.printAndWait(
      `무너질 것 같던 초콜릿 탑에서 해방된 ${maru.name}는 곤란한 듯 미소를 지으며 소파에 앉았다.`,
    );
    await maru.say_and_wait(`${callname}, 쌩큐♪`);
    await me.say_and_wait(`보답으로 귀여운 후배들 이야기 좀 더 해줄래?`);
    await era.printAndWait(
      `${me.actual_name}은(는) 자연스럽게 소파에 앉아 ${maru.name}의 눈을 정면으로 바라보았다.`,
    );
    await maru.say_and_wait(
      `음— ${callname}의 부탁이라면야. 아, 그러고 보니 저번에 아주 풀이 죽어있던 아이가 있었지.`,
    );
    await maru.say_and_wait(
      `선발 레이스에서 졌다고 울먹이며 상담하러 왔더라고. 이야기를 차근차근 들어주고 내가 달릴 때 느꼈던 요령을 좀 알려줬더니, ${
        maru.sex
      }가 정말 열심히 듣는 거야.`,
    );
    await maru.say_and_wait(
      `미묘한 부분까지 자기 의견을 내면서 노트를 한 페이지 가득 채우더라니까. 덕분에 나도 배운 게 많았어.`,
    );
    await maru.say_and_wait(
      `가기 전에 정중하게 고맙다고 인사하더니, 나중에 들어보니까 무사히 트레이너랑 계약했다지 뭐야♪`,
    );
    await maru.say_and_wait(`가끔 이런 기억을 떠올리면, 난 이런 느낌이 참 좋더라⭐`);
    await me.say_and_wait(`정말 멋진 경험이네.`);
    await maru.say_and_wait(`^_^ 나도 그렇게 생각해.`);
    await maru.say_and_wait(`그나저나, ${callname}은(는) 초콜릿 받았어?`);
    await era.printAndWait(
      `${maru.name}가 ${me.actual_name}의 책상으로 시선을 돌렸다.`,
    );
    await me.say_and_wait(
      `아쉽게도, 예전에 팀에 있을 때는 ${maru.get_uma_sex_title()}들이 주곤 했지만, 독립 트레이너로 활동하고 나서는 의리 초콜릿조차 구경하기 힘드네.`,
    );
    await maru.say_and_wait(`그것참 아쉽게 됐네.`);
    await maru.say_and_wait(`……음.`);
    await maru.say_and_wait(`그렇다면, 우리 같이 초콜릿 고르러 갈까♪`);
    await era.printAndWait(
      `갑자기 좋은 생각이 떠오른 듯 ${maru.name}의 귀가 쫑긋 섰고, 두 눈을 반짝이며 ${me.actual_name}을(를) 바라보았다.`,
    );
    await maru.say_and_wait(`금방 갔다 올 수 있어, 지금 바로 출발하자!`);
    await me.say_and_wait(`역시 그만두는 게 좋겠어.`, true);
    await era.printAndWait(
      `그렇게 말하려 했지만, 진지하게 가게를 고르는 ${maru.name}의 모습에 ${me.actual_name}은(는) 입을 꾹 다물었다.`,
    );
    await me.say_and_wait(`잠깐 나가는 정도라면 괜찮겠지.`, true);
    era.drawLine();
    await maru.say_and_wait(`오늘도 컨디션 짱인데? 그치, 타치!`);
    era.printButton(`「타치? 만나서 반가워!」`, 1);
    await era.input();
    await maru.say_and_wait(`${callname}은(는) 조수석에 앉아.`);
    await maru.say_and_wait(
      `타치도 ${callname} 같은 새로운 친구를 만나서 기뻐할 거야.`,
    );
    await me.say_and_wait(`조금 흥분되는데.`, true);
    await maru.say_and_wait(`후후, 타치도 아주 신난 것 같네♪`);
    await maru.say_and_wait("준비됐어? Let's go!");
    await me.say_and_wait(`어? 잠깐 이거 스포츠카 카카카카카카아아아악!`);
    era.drawLine();
    await maru.say_and_wait(
      `후우— 오랜만에 한바탕 달렸더니 정말 못 참겠다니까! ${callname}도 느꼈어? ……${
        callname
      }?`,
    );
    era.printButton(
      `「여기가 에덴인가요? 세 여신님, 처음 뵙겠습니다……」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `대답할 기운조차 남아있지 않은 채, 꼬리를 내리고 도망치는 ${me.actual_name}은(는) 마치 ${maru.get_uma_sex_title()}에게 쫓기는 당근 같았다.`,
    );
    await maru.say_and_wait(
      `음, 자극이 너무 강했나? ${callname}이 넋이 나갔네.`,
    );
    await era.printAndWait(`홀로 남겨진 ${maru.name}가 혼잣말을 중얼거렸다.`);
    new EduEventMarks(4).add('wind');
    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;

  } else if (edu_weeks === 24) {
    await print_event_name('훈련이 끝난 평범한 하루', maru);
    await me.say_and_wait(`오늘 훈련은 여기까지야, 고생했어.`);
    await maru.say_and_wait(`${callname}도 수고했어.`);
    await era.printAndWait(
      `${maru.name}는 ${me.actual_name}의 손에서 수건을 받아 이마의 땀을 가볍게 닦아내고는 다시 ${me.name}에게 건네주었다.`,
    );
    await me.say_and_wait(
      `이 페이스대로라면 다음 아사히배에서도 충분히 우승을 노려볼 수 있겠어.`,
    );
    await maru.say_and_wait(
      `G1급 레이스에선 또 어떤 열기가 기다리고 있을까? 정말 기대돼～`,
    );
    await me.say_and_wait(`${maru.name}는 달리는 게 즐거워?`);
    await era.printAndWait(
      `수건을 다시 짜서 가방에서 꺼낸 여분 수건과 함께 ${maru.get_uma_sex_title()}의 헝클어진 긴 머리를 정성스럽게 닦아주었다.`,
    );
    await maru.say_and_wait(
      `핀으로 고정하지 않으면 달릴 때 머리카락이 눈을 찔러서 꽤 아프거든. 실수로 깜빡했네.`,
    );
    await maru.say_and_wait(
      `역시 헤어스타일을 바꿔서 기분 전환을 하는 게 좋을까? ${callname} 생각은 어때?`,
    );
    await me.say_and_wait(`나도 그렇게 생각해.`);
    await me.say_and_wait(
      `머리를 묶어서 포니테일로 꽉 고정하면 달릴 때도 훨씬 편할 거야.`,
    );
    await me.say_and_wait(
      `게다가 그러면 사람들에게 ${maru.name}의 색다른 모습도 보여줄 수 있으니까 좋은 선택이지.`,
    );
    await maru.say_and_wait(
      `음— 어떻게 하는 게 좋을까? ${callname}의 제안도 좋지만, 하지만……`,
    );
    await maru.say_and_wait(`아, 따가워.`);
    await me.say_and_wait(`미안, 이쪽 머리카락이 좀 엉켰네.`);
    await maru.say_and_wait(`쌩큐.`);
    await maru.say_and_wait(`오늘은 타치랑 같이 해풍을 맞으면서 기분 전환해야겠다♪`);
    await maru.say_and_wait(`${callname}, 정문까지 데려다줄래?`);
    era.printButton(`「같이 가자」`, 1);
    await era.input();
    await era.printAndWait(`\n${me.name}과(와) ${maru.name}가 황혼이 깃든 오솔길을 함께 걷고 있다.`);
    await me.say_and_wait(
      `그러고 보니 ${maru.name}, 혼자 맨션에서 통학하는 거 불편하지 않아?`,
    );
    await era.printAndWait(
      `기숙사에 사는 다른 ${maru.get_uma_sex_title()}들과 달리, ${maru.name}는 줄곧 학원 밖 맨션에서 생활해 왔다.`,
    );
    await era.printAndWait(
      `그 특별함에 대한 호기심으로 ${me.name}은(는) ${maru.name}에게 답을 구했다.`,
    );
    await maru.say_and_wait(
      `학원 통금 시간에 얽매이지 않으니까, 난 지금이 더 자유로운 것 같아.`,
    );
    await maru.say_and_wait(
      `대신 다른 학생들보다 일찍 일어나야 하는 게 자유의 대가랄까.`,
    );
    await me.say_and_wait(
      `기회가 되면 ${maru.name}의 맨션에서 지내보고 싶네. 어때?`,
    );
    await maru.say_and_wait(
      `어머? ${callname}(이)라면 꽤 재밌을지도 모르겠네.`,
    );
    await maru.say_and_wait(
      `${callname}, 방금 한 말 잊으면 안 돼? 말 바꾸기 없기야!`,
    );
    era.printButton(`「당연하지.」`, 1);
    await era.input();
    await maru.say_and_wait(`후훗～ 나도 기대하고 있을게.`);
    await era.printAndWait(`한참 떠들다 보니 어느덧 학원 정문에 도착했다.`);
    await maru.say_and_wait(`${callname}과 있으면 시간이 왜 이렇게 빨리 갈까.`);
    await me.say_and_wait(
      `짧으니까 더 소중하게 느껴지는 거 아닐까? ${maru.name}에게도 좋은 추억이 됐으면 좋겠어.`,
    );
    await maru.say_and_wait(`즐거운 추억이었어. 내일 봐, 사요나라～`);
    await era.printAndWait(
      `엔진 소리와 함께 ${maru.name}의 뒷모습이 시야 밖으로 사라졌다.`,
    );
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], 0) || wait_flag;

  } else if (edu_weeks === 30) {
    digital.name = '황제';
    await print_event_name('세 여신의 아이들', maru);
    await era.printAndWait(`안뜰 세 여신상 앞`);
    await era.printAndWait(
      `시끌벅적한 운동장과 교사에서 떨어진 이곳은 ${maru.get_uma_sex_title()}들의 마음의 안식처다.`,
    );
    await era.printAndWait(
      `이곳에는 세 여신—달리 아라비안, 고돌핀 바브, 바이얼리 터크가 모셔져 있다.`,
    );
    await era.printAndWait(`여신들이 든 물병에서 맑은 물이 흘러 연못으로 모인다.`);
    await era.printAndWait(`그리고 이곳에 새로운 손님이 찾아왔다.`);
    await digital.say_and_wait(`……`);
    await era.printAndWait(`황제가 세 여신상을 응시하고 있다.`);
    await digital.say_and_wait(`아직 안 온 건가?`, true);
    await era.printAndWait(
      `개인적인 명목으로 최근 눈여겨보던 ${maru.get_uma_sex_title()}를 초대했지만, 상대의 태도는 여전히 모호하다.`,
    );
    await era.printAndWait(
      `학생회장의 위압감이 두려운 걸까. 뭐, 좋다. 그렇게 나약한 ${maru.get_uma_sex_title()}에겐 등을 맡길 수 없지.`,
    );
    await era.printAndWait(`우리가 만든 이 에덴동산에서 부디 자유롭게 살아가길.`);
    await digital.say_and_wait(`그럼, 이만 돌아가야겠군.`);
    await era.printAndWait(`황제의 중얼거림이 안뜰로 다가오는 발소리에 끊겼다.`);
    era.drawLine();
    era.printButton(`「어라, 제가 길을 잘못 들었나요?」`, 1);
    await era.input();
    await era.printAndWait(
      `어떻게 말을 이어갈지 몰라 당황한 사이, 귓가에는 여신상이 든 병에서 쏟아지는 물소리만이 울려 퍼졌다.`,
    );
    await era.printAndWait(
      `다행히 황제는 ${me.name}의 등장에 개의치 않고 여신상을 다시 바라보았다.`,
    );
    era.printButton(`「휴, 다행이다」`, 1);
    await era.input();
    await me.say_and_wait(`그러고 보니……`);
    await era.printAndWait(
      `옛날 어릴 적에 혼자 신사에 갔을 때도 이런 일이 있었던 것 같다.`,
    );
    await era.printAndWait(
      `세 여신의 조각상을 멍하니 보며 주변 소음을 지우고 추억 속에 잠겨본다.`,
    );
    await era.printAndWait(
      `친구들과 숨바꼭질을 하다가 술래를 피해 외딴 구석에 숨어들었다.`,
    );
    await era.printAndWait(`그러다 기다림에 지쳐 깜빡 잠이 들었었다.`);
    await era.printAndWait(`그렇게 꿈속에서 세 여신님을 만났던 것 같다.`);
    await era.printAndWait(
      `불꽃처럼 타오르는 아름다운 붉은 머릿결. 다정한 ${
        maru.sex
      }가 겁에 질린 ${me.actual_name}을(를) 달래주던 기억.`,
    );
    await era.printAndWait(
      `당시의 위로 한마디는 기억나지 않지만, 그 따스한 감촉만큼은 퇴색되지 않는 사진 속 글자처럼 ${me.actual_name}의 머릿속에 깊이 새겨져 있다.`,
    );
    await digital.say_and_wait(
      `——그러니 짐은 인정을 갈구하지도, 찬동을 바라지도 않는다. 왕이란 솔선수범하는 자니까.`,
    );
    await era.printAndWait(
      `웅성거리는 소리에 ${me.name}의 사색이 깨졌고, 다리의 저릿함이 의식을 현실로 끌어올렸다.`,
    );
    await me.say_and_wait(`하—암.`);
    await era.printAndWait(
      `참지 못하고 하품을 하며 온기의 여운을 뒤로한 채 시선을 안뜰 반대편으로 옮겼다.`,
    );
    await era.printAndWait(`${me.actual_name}을(를) 일부러 멀리하며 무언가 대화하는 소리가 들린다.`);
    await me.say_and_wait(`그만 돌아가자.`, true);
    await maru.say_and_wait(`${callname}? 후배들이 당근을 좀 보내줬는데, 오늘은……
    `);
    await era.printAndWait(`${maru.name}가 안뜰의 출구를 가로막았다. 그리고……`);
    await digital.say_and_wait(`${maru.name}, 별일 없었나.`);
    await maru.say_and_wait(`루돌프도 오늘 아주 기운차 보이네.`);
    await maru.say_and_wait(`후배들이 당근을 줬는데, ${me.name}도 좀 먹어볼래?`);
    await digital.say_and_wait(`사양하지.`);
    await maru.say_and_wait(`그래? 아깝네.`);
    await digital.say_and_wait(`나중에 ${me.name}을(를) 통해 좀 보내주겠나?`);
    await maru.say_and_wait(`물론이지!`);
    await maru.say_and_wait(
      `${maru.get_uma_sex_title()}들의 행복을 위해 필사적으로 노력하는 루돌프, 난 정말 대단하다고 생각해.`,
    );
    await maru.say_and_wait(
      `도전자로서 끝까지 노력해서 경기장에 황제의 위명을 남겼잖아.`,
    );
    await maru.say_and_wait(
      `아무도 할 수 없다던 예언을 차례차례 깨부수는 인생, 그것도 하나의 행복 아니겠어?`,
    );
    await digital.say_and_wait(`그럼 ${maru.name}, 자네는 행복한가?`);
    await maru.say_and_wait(
      `글쎄, 이렇게 경기장에서 귀여운 후배들에게 쫓고 싶은 희망을 남겨주는 것도 꽤 행복한 일 아닐까?`,
    );
    await maru.say_and_wait(
      `잔디 위를 자유롭게 달리고, 후배들의 고민을 들어주며 조언하는 것. 난 아주 짱인 선택이라고 봐.`,
    );
    await digital.say_and_wait(
      `${maru.get_uma_sex_title()}들의 기대라는 건 생각보다 훨씬 무거운 법이지.`,
    );
    await digital.say_and_wait(
      `도중에 핑크빛 거품이 터져버린다면 다행이지만, 계속 그 꿈속에만 머문다면……`,
    );
    await digital.say_and_wait(`언젠가는 스스로 감당할 수 없는 일과 마주하게 될 거다.`);
    await digital.say_and_wait(
      `그때가 왔을 때, ${maru.name}. 자네와 ${me.name}이(가) 어떤 방식으로 그 장애물을 뛰어넘을지 기대하고 있겠다.`,
    );
    await era.printAndWait(
      `종소리가 울리며 오후 훈련의 시작을 알렸다. ${maru.name}는 잠시 생각에 잠기더니 침묵했다.`,
    );
    await digital.say_and_wait(
      `이야기를 더 나누고 싶지만, 집무실에 쌓인 업무가 끝이 없어서 이만 실례하지.`,
    );
    await era.printAndWait(`루돌프가 안뜰을 떠났다.`);
    await maru.say_and_wait(`……그래도, 난 알고 있어.`);
    await maru.say_and_wait(`……미안, ${callname}. 생각할 게 좀 생겼네.`);
    await era.printAndWait(`${maru.name}는 우울한 표정을 지으며 안뜰을 나섰다.`);
    await me.say_and_wait(`이제 아무도 없나?`);
    await me.say_and_wait(`${maru.name}, 고민이 있는 것 같네. 나중에 꼭 대화해 봐야겠어.`);
    await era.printAndWait(`${me.actual_name}은(는) 안뜰을 떠났다.`);
    await era.printAndWait(`그렇게 여행자들은 각자의 마음을 품고 각자의 목적을 향해 나아간다.`);
    await era.printAndWait(`세 여신은 그 모든 것을 묵묵히 포용할 뿐이다.`);
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], undefined) || wait_flag;

  } else if (edu_weeks === 34) {
    await print_event_name('선물', maru);
    await era.printAndWait(`어느 날, ${me.name}이(가) 집무실에서 서류를 정리하고 있을 때.`);
    await era.printAndWait(`똑똑똑`);
    era.printButton(`「들어오세요」`, 1);
    await era.input();
    await say_by_passer_by_and_wait(`${maru.get_uma_sex_title()}`, `실례합니다.`);
    await era.printAndWait(
      `문이 열리고 고등부로 보이는 ${maru.get_uma_sex_title()}가 들어왔다.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `안녕하세요, 트레이너 ${me.get_adult_sex_title()}.`,
    );
    era.printButton(`「안녕하세요」`, 1);
    await era.input();
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `저는 트레센 학원의 흔하디흔한 평범한 우마무스메 중 한 명이에요.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `마루젠 선배님처럼 경기장에서 계속 승리하고 싶어요. 잘 부탁드립니다.`,
    );
    era.printButton(`「잘 부탁해요」`, 1);
    await era.input();
    await era.printAndWait(`두 사람이 악수를 나누었다.\n`);
    era.printButton(`커피라도…… 아, 아니지. 홍차와 코코넛 주스 중 어느 걸 좋아해요?`, 1);
    await era.input();
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `감사하지만, 선물을 전해드리러 온 것뿐이에요.`,
    );
    await era.printAndWait(`${maru.sex}이(가) 주머니에서 작은 상자를 꺼냈다.`);
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `저희 같은 평범한 학생들에겐 트레이너님이 봐주시고 G3에서 이기는 것만으로도 정말 대단한 일이에요.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `다들 그저 전광판에 이름을 올리는 걸 목표로 필사적으로 노력하죠.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `그렇지만 입착하는 아이들도 극소수고, 대부분은 데뷔전 승리 이후 한 번도 이기지 못한 채 3년의 커리어를 끝내곤 해요.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `어떤 친구들은 졸업할 때까지 전속 계약을 맺어줄 트레이너조차 만나지 못하기도 하고요.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `마루젠 선배님은 그런 거 따지지 않고 언제나 저희를 응원해 주셨어요.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `저희가 벽에 부딪힐 때마다 곁에서 조언해 주셨죠.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `그래서 저희는 항상 마루젠 선배님께 감사하고 있어요.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `이 선물은 친구들과 함께 정성을 모아 만든 거예요. 마루젠 선배님께 꼭 전해주셨으면 해요.`,
    );
    era.printButton(
      `「${maru.name}도 분명 기뻐할 거예요, 고마워요.」`,
      1,
    );
    await era.input();
    await me.say_and_wait(`나비넥타이 장식이 달린 작은 상자를 조심스레 건네받았다.`);
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `감사합니다, 트레이너 ${me.get_adult_sex_title()}.`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `다음 선발 레이스에서 꼭 모두를 깜짝 놀라게 해드릴게요!`,
    );
    await say_by_passer_by_and_wait(
      `${maru.get_uma_sex_title()}`,
      `안녕히 계세요, ${maru.name}의 트레이너님!`,
    );
    await era.printAndWait(
      `정중히 인사한 뒤, ${maru.sex}는 문밖에서 고개를 내밀고 기다리던 동료들에게 달려갔다.`,
    );
    await me.say_and_wait(`저 아이들도 꼭 좋은 트레이너를 만났으면 좋겠네.`, true);
    await era.printAndWait(`문을 살며시 닫고, ${me.name}은(는) 상자를 열어보았다.`);
    await era.printAndWait(`상자 안에는 정교하게 만들어진 크리스탈 팔찌가 들어 있었다.`);
    await me.say_and_wait(`${maru.name}가 돌아오면 직접 전해주자.`, true);
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], 0) || wait_flag;

  } else if (edu_weeks === 47) {
    await print_event_name('크리스마스와 설레는 추억', maru);
    await maru.say_and_wait(`메리 크리스마스!`);
    await era.printAndWait(`두툼한 옷을 입은 ${maru.name}가 트레이닝실에 나타났다.`);
    era.printButton(`「메리 크리스마스! 추우면 이쪽에 코타츠랑 귤 있으니까 좀 쉬어.」`, 1);
    await era.input();
    await era.printAndWait(
      `피로한 눈을 비비며 ${maru.name}와 대화하며 잠시 멍하니 머리를 비워본다.`,
    );
    await maru.say_and_wait(`밖이 생각보다 너무 추워서 정말 못 참겠다니까.`);
    await era.printAndWait(
      `푹신한 소파에 몸을 맡긴 ${maru.name}는 조심스레 귤껍질을 까서 입에 넣었다.`,
    );
    await me.say_and_wait(
      `오늘 기온이 벌써 영하 1도야. 일기예보에선 밤부터 눈이 온대.`,
    );
    await era.printAndWait(
      `'눈이 오는 건가' 하고 중얼거리며 ${maru.name}는 귤을 하나 더 깠다.`,
    );
    await era.printAndWait(
      `잠시 트레이닝실에 정적이 흘렀고, 종이 넘기는 팔락거리는 소리만이 방 안을 채웠다.`,
    );
    await era.printAndWait(
      `소파 깊숙이 몸을 파묻고 이번 주 패션 잡지를 펼친 ${maru.name}는 따뜻한 난로 빛에 둘러싸여 즐거운 표정을 지었다.`,
    );
    era.drawLine();
    await me.say_and_wait(`이게 마지막 서류네.`, true);
    await era.printAndWait(`파일을 정리해 폴더에 넣고 저릿한 다리를 풀었다.`);
    await maru.say_and_wait(`${callname} 수고했어. 다음 일정은 뭐야?`);
    await era.printAndWait(
      `풀어져 있던 근육을 순식간에 긴장시키며 평소의 모습으로 돌아온 ${maru.name}가 일어나는 ${me.actual_name}을(를) 바라보았다.`,
    );
    await me.say_and_wait(`계획 말이야?`);
    await era.printAndWait(
      `예전 크리스마스엔 항상 혼자 트레이닝실에서 노트를 정리하곤 했던 ${me.actual_name}.`,
    );
    await me.say_and_wait(`음—— 그렇네,`);
    await maru.say_and_wait(`같이 축하하러 나갈까?`);
    await me.say_and_wait(`트레이닝실에서 쉴 거야...`, true);
    await era.printAndWait(
      `기대에 가득 찬 ${maru.name}의 표정을 보자, 뒷말이 목구멍 안으로 쏙 들어가 버렸다.`,
    );
    await maru.say_and_wait(`지금 바로 출발!`);
    await era.printAndWait(`${maru.name}의 열성적인 권유에 두 사람의 의견이 일치했다.`);
    era.drawLine();
    await era.printAndWait(`진동하는 엔진 소리와 함께 타치가 시동을 걸었다.`);
    await era.printAndWait(
      `어둑어둑한 하늘, 때때로 불어오는 칼바람이 가차 없이 생명을 할퀴고 지나간다.`,
    );
    await me.say_and_wait(`에취!`);
    await era.printAndWait(`강풍이 옷과 피부 틈새로 사정없이 파고들었다.`);
    await me.say_and_wait(`진짜 춥다. 곧 눈까지 올 텐데.`);
    await era.printAndWait(`앞으로의 여정이 조금 걱정되기 시작했다.`);
    await maru.say_and_wait(
      `——그러고 보니 스페쨩네도 생각보다 훨씬 빨리 성장하고 있네. 후배들이 그렇게 열심히 하는 걸 보니까 이 누나도 덩달아 흥분되더라니까.`,
    );
    await era.printAndWait(
      `${maru.get_uma_sex_title()}를 껴안고 온기라도 빌리고 싶다는 생각을 하며, 몸을 웅크린 채 추위를 견뎠다.`,
    );
    await me.say_and_wait(`목도리라도 하고 올걸.`, true);
    await maru.say_and_wait(
      `……백화점 쪽에서 크리스마스 테마 촛불 디너를 한다던데, 같이 가서 먹어볼래?`,
    );
    await era.printAndWait(`울부짖는 바람 소리에 ${maru.name}의 목소리가 아득하게 들려왔다.`);
    await me.say_and_wait(`너무 춥네.`, true);
    await maru.say_and_wait(`……그것보다 난, 아, 도착했다!`);
    await era.printAndWait(`머지않은 곳에 백화점이 보였다.`);
    era.drawLine();
    await era.printAndWait([
      maru.get_colored_name(),
      '/',
      me.get_colored_name(),
      '「',
      { content: '건', color: maru.color },
      '배!」',
    ]);
    await era.printAndWait(
      `${maru.name}가 말한 특가 레스토랑에서 두 사람은 축배를 들었다.`,
    );
    await maru.say_and_wait(`아직 술은 못 마시지만…… 그래도 주스 맛도 꽤 짱이지♪`);
    era.printButton(`「머지않아 ${maru.name}도 술을 마실 수 있게 될 거야.」`, 1);
    await era.input();
    await maru.say_and_wait(
      `그날이 오면 ${callname}은(는) 나랑 밤새도록 마셔줘야 해.`,
    );
    await era.printAndWait(
      `창밖 하늘에서 눈송이 하나가 떨어지더니, 수많은 눈송이가 뒤따라 지면에 내려앉았다.`,
    );
    await me.say_and_wait(`그날을 위해서라도 다음 훈련도 힘내야겠네!`);
    await era.printAndWait(
      `차갑고 아름다운 눈송이들이 자연의 정령처럼 자유롭게 허공에서 춤을 추며 내려온다.`,
    );
    await maru.say_and_wait(`눈 오네, 정말 귀여워.`);
    await era.printAndWait(
      `무언가 회상하는 듯, ${maru.name}는 밖의 눈송이를 보며 깊은 생각에 잠겼다.`,
    );
    await me.say_and_wait(`${maru.name}는 눈을 좋아해?`);
    await era.printAndWait(
      `다 마신 유리잔을 흔들며, ${maru.get_teen_sex_title()}의 생각은 먼 과거로 향하는 듯 보였다.`,
    );
    await maru.say_and_wait(`……앗! 미안, 잠시 딴생각을 했네.`);
    await era.printAndWait(
      `방금 ${me.name}의 존재를 알아차린 듯 당황하며 대답하는 ${maru.name}의 귀여운 틈을 발견했다.`,
    );
    era.printButton(`「아냐, 아무것도」`, 1);
    era.printButton(`「${maru.name}는 눈을 좋아해?」`, 2, { disabled: true });
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        `똑같은 질문을 또 하는 건 ${maru.name}에게도 좀 무례하겠지.`,
      );
      await era.printAndWait(`${me.name}은(는) 다른 화제로 넘기기로 했다.`);
      await era.printAndWait(`저녁 식사는 화기애애한 분위기 속에서 마무리되었다.`);
    } else {
      await maru.say_and_wait(`응? 눈송이 말이야?`);
      await era.printAndWait(`잠시 고민하던 ${maru.name}가 드디어 입을 열었다.`);
      await maru.say_and_wait(`사실 정말 짱 좋아해!`);
      await maru.say_and_wait(
        `아침에 일어났을 때 커튼을 젖히면 창가에 눈이 쌓여있는 풍경을 항상 꿈꾸곤 하거든!`,
      );
      await me.say_and_wait(`왜 그렇게 아련한 표정을 지은 거야?`);
      await maru.say_and_wait(`${callname}도 그렇지 않아?`);
      await era.printAndWait(`질문에 답하는 대신 다른 질문을 던져왔다.`);
      await maru.say_and_wait(
        `마치 답을 갈구하는 탐구자처럼 고민에 빠진 표정.`,
      );
      await era.printAndWait(`다시 주도권을 잡은 ${maru.name}가 장난기 어린 미소를 지었다.`);
      await maru.say_and_wait(`하지만 정답은 아주 간단하단다?`);
      await me.say_and_wait(`그 정답이 뭔데?`);
      await maru.say_and_wait(`가르쳐·줄·수·없·지⭐`);
      await me.say_and_wait(
        `안돼, 너무 조급하게 물어봤더니 경계해 버린 걸까.`,
        true,
      );
      await me.say_and_wait(`다음에 기회를 다시 봐야겠어.`, true);
      await era.printAndWait(
        `이후 훈련에 관한 이야기를 조금 더 나눈 뒤, 즐거운 저녁 식사가 끝났다.`,
      );
    }
    era.drawLine({ content: '트레이너 기숙사 앞' });
    await maru.say_and_wait(`바이바이!`);
    await maru.say_and_wait(`어머, 깜빡할 뻔했네! ${callname}, 이거 선물이야.`);
    await era.printAndWait(
      `가득 찬 뒷좌석에서 예쁜 리본으로 포장된 선물 상자를 꺼냈다.`,
    );
    await me.say_and_wait(`${maru.name}, 이건 뭐야?`);
    await maru.say_and_wait(`진짜로 내일 봐!`);
    await era.printAndWait(
      `${me.actual_name}의 말은 엔진 소리에 묻혔고, 멀어져 가는 타치를 보며 상자를 품에 안았다.`,
    );
    await me.say_and_wait(`일단 들어가자.`);
    await era.printAndWait(
      `${maru.name}의 마음이 담긴 상자를 소중히 들고 방으로 돌아왔다.`,
    );
    await era.printAndWait(
      `금색 리본을 풀고 뚜껑을 열자, 마치 어린 시절 어른들에게 선물을 받던 설렘이 되살아났다.`,
    );
    await era.printAndWait(`정성스레 만들어진 목도리와 편지 한 장.`);
    await maru.say_and_wait(
      `미안해, ${callname}에게 더 좋은 걸 해주고 싶었는데 지금은 이 브랜드밖에 없네. 마음에 들었으면 좋겠어. 메리 크리스마스!`,
    );
    await era.printAndWait(`섬세하고 아름다운 필체가 마치 본인과 대화하는 듯 느껴졌다.`);
    await me.say_and_wait(`쌩큐, ${maru.name}.`);
    await era.printAndWait(`어느덧 ${me.name}도 그녀의 말투에 물들어 있었다.`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], 120) || wait_flag;
    era.set('cflag:4:축제이벤트표시', 0);

  } else if (edu_weeks === 47 + 1) {
    await print_event_name('새해의 단상', maru);
    await era.printAndWait(`시간은 눈 깜짝할 사이 흘러 어느덧 새로운 한 해가 밝았다.`);
    await era.printAndWait(
      `${maru.name}와 함께 겪은 기쁨과 슬픔들이 이제는 아름다운 추억이 되었다.`,
    );
    await era.printAndWait(
      `법정 공휴일이지만, 기숙사에서 빈둥거리기엔 너무 따분한 기분이 들었다.`,
    );
    await era.printAndWait(
      `「그냥 좀 둘러볼까」 하고 나선 발걸음이 어느덧 다시 트레센으로 향하고 있었다.`,
    );
    await me.say_and_wait(`여기까지 온 김에 트레이닝실이나 한번 가볼까.`);
    await era.printAndWait(`결심을 굳힌 뒤, ${me.actual_name}은(는) 트레이닝실로 향했다.`);
    era.drawLine({ content: '트레이닝실' });
    await era.printAndWait(
      `평소의 트레이닝실은 「또 출근인가」 하는 짜증이 섞여 있었지만.`,
    );
    await era.printAndWait(
      `휴일에 「가볍게 둘러보자」는 마음으로 돌아온 트레이닝실은 느낌이 달랐다.`,
    );
    await era.printAndWait(
      `${maru.name}와 다음 훈련 방침을 논의하고, 맛있는 케이크를 나눠 먹고, 소파에 옹기종기 모여 앉아 중상 레이스 녹화본을 보던 기억.`,
    );
    await era.printAndWait(`그 모든 것이 마치 어제의 일처럼 선명하다.`);
    await me.say_and_wait(`시간 정말 빠르네.`);
    await era.printAndWait(`늘 보던 공간인데도 묘하게 낯선 이질감이 느껴졌다.`);
    await me.say_and_wait(`너무 지친 건가?`);
    await me.say_and_wait(`좋아! 옥상에 가서 바람 좀 쐬고 오자.`, true);
    await me.say_and_wait(
      `……${maru.name}는 지금 어디서 뭘 하고 있을까. 아마 떠들썩하게 새해를 맞이하고 있겠지.`,
    );
    await era.printAndWait(`트레이닝실 문을 살며시 닫고, 기분 전환을 위해 옥상으로 향했다.`);
    era.drawLine({ content: '옥상' });
    await era.printAndWait(
      `많은 ${maru.get_uma_sex_title()}들이 새해에는 동료나 트레이너와 함께 시간을 보내며 작년의 고민을 털어버리곤 한다.`,
    );
    await era.printAndWait(`평소의 시끌벅적함은 사라지고, 학원은 고요한 평온함에 잠겨 있다.`);
    await era.printAndWait(`옥상에서 내려다보니 트레센 학원 전체가 한눈에 들어온다.`);
    await me.say_and_wait(
      `이럴 땐 '나는 삼관 ${maru.get_uma_sex_title()}를 키워낼 남자다!'라고 외쳐야 분위기 살 것 같은데.`,
      true,
    );
    await me.say_and_wait(`아무도 없긴 하지만, 역시 좀 부끄럽네.`, true);
    await me.say_and_wait(`……`);
    await era.printAndWait(
      `「나는 ${maru.name}에게 어울리는 ${me.get_phy_sex_title()}가 되겠어!!!」`,
      {
        align: 'center',
        color: me.color,
        fontSize: '1.5rem',
        fontWeight: 'bold',
      },
    );
    await era.printAndWait(
      `트레이너라는 신분도, 어른으로서의 체면도 모두 던져버리고 기세에 맡겨 자신조차 깜짝 놀랄 만큼 큰 소리로 외쳤다.`,
    );
    await era.printAndWait(
      `금기를 깬 쾌감이 불러온 흥분 때문에 ${me.actual_name}의 얼굴이 빨갛게 달아올랐다.`,
    );
    await me.say_and_wait(`정말 상쾌하네.`);
    await me.say_and_wait(`누가 보기 전에 빨리 내려가야겠다.\n`);
    await maru.say_and_wait(`어라라? ${callname}?`);
    await era.printAndWait(`야생의 ${maru.name}가 나타났다!`);
    await me.say_and_wait(`으아아아?! ${maru.name}가 왜 여기 있어?`, true);
    await me.say_and_wait(`하하, 내 인생 끝났구나.`, true);
    await me.say_and_wait(`아무도 없는 무인도에 가서 남은 생을 보내자.`, true);
    era.printButton(`「죄송합니다, 사람을 잘못 보신 것 같네요.」`, 1);
    await era.input();
    era.printButton(`「지금의 저는 그저 아주 평범한 트레이너일 뿐입니다.」`, 1);
    await era.input();
    await maru.say_and_wait(
      `……어라라, 이분은 그러니까…… 아주 평범한 트레이너 ${me.get_adult_sex_title()}이시구나.`,
    );
    await maru.say_and_wait(
      `방금 외침 정말 기세 좋던걸? 계단까지 그 뜨거운 열정이 다 전해지더라니까.`,
    );
    await maru.say_and_wait(`청춘은 정말 아름답네.`);
    await maru.say_and_wait(
      `근데 그런 말은 역시 당사자 앞에서 제대로 말해줘야 하는 거 아닐까?`,
    );
    await maru.say_and_wait(
      `우리 트레이너라면 분명 끓어오르는 감정을 담아서 근사하게 설명해 줄 텐데 말이야.`,
    );
    await era.printAndWait(
      `밀려오는 수치심에 온몸이 뜨거워진 ${me.actual_name}은(는) 무릎에 힘이 풀려 주저앉을 뻔했다.`,
    );
    await me.say_and_wait(`정말 죄송합니다.`, true);

    await era.printAndWait(`${maru.name}는 그저 조용히 하늘을 올려다보고 있었다.`);
    era.printButton(`……스페짱 일행이랑 같이 놀러 안 가?`, 1);
    era.printButton(`「${me.name}의 생각을 말해줄 수 있어?」`, 1, {
      disabled: true,
    });
    await era.input();
    await era.printAndWait(`${maru.name}는 기분이 좋은지 그리운 멜로디를 흥얼거리고 있다.`);
    await me.say_and_wait(`외로움을 느끼고 있는 거야?`, true);
    era.printButton(`「이렇게 추운 날씨에 왜 일부러 옥상에 왔어?」`, 1);
    era.printButton(`「${maru.name}은 대체 무슨 생각을 하고 있는 거야?」`, 1, { disabled: true });
    await era.input();
    await era.printAndWait(
      `진심을 알고 싶었던 ${me.actual_name}은(는) 자연스럽게 난간에 기대어 함께 이야기를 나누기 시작했다.`,
    );
    await maru.say_and_wait(
      `작년에는 스페짱 친구들이랑 같이 신년 파티를 했었는데, 올해는 다들 얼른 트레이너 곁으로 가라면서 나를 밀어내더라고.`,
    );
    era.printButton(`스페짱, ${maru.name}를 무척 걱정하고 있네.`, 1);
    await era.input();
    await era.printAndWait(`${maru.name}에게서 향긋하고 풍부한 향기가 감돌았다.`);
    await me.say_and_wait(`샴푸 냄새인가? 오늘따라 왜 이렇게 향기가 좋지?`, true);
    await maru.say_and_wait(
      `${callname}도 그렇게 생각해? ${maru.sex}들은 희망이 가득한 어린 싹들이니까.`,
    );
    await maru.say_and_wait(`언젠가는 비바람의 속박을 뚫고 거대한 나무가 되겠지.`);
    await era.printAndWait(
      `${maru.name}의 기대 섞인 말투와 달리, 하늘을 바라보는 ${maru.sex}의 눈빛에는 복잡한 생각이 가득해 보였다.`,
    );
    era.printButton(`「${maru.name}는 거대한 나무가 되고 싶지 않아?」`, 1);
    await era.input();
    await maru.say_and_wait(`거대한 나무보다는, 나는 한 줄기 부드러운 바람이 되고 싶어.`);
    era.printButton(`「바람?」`, 1);
    await era.input();
    await maru.say_and_wait(`${callname}은(는) 하늘을 자유롭게 떠다니는 바람을 보지 못했니?`);
    await maru.say_and_wait(
      `만약 하늘을 부는 바람이 될 수 있다면, 후배들이 고민하고 있을 때나,`,
    );
    await maru.say_and_wait(
      `성공까지 딱 한 걸음이 모자랄 때, 한숨을 내쉴 때 곁에서 ${maru.sex}들을 격려해 줄 수 있을 텐데.`,
    );
    await me.say_and_wait(`${maru.name}는 지금도 충분히 잘하고 있어.`);
    await me.say_and_wait(`지금은 새해의 즐거움을 마음껏 만끽하자고.`);
    await maru.say_and_wait(`에구구, 이러고 있는 건 정말 나답지 않네.`);
    await maru.say_and_wait(`${callname}은(는) 무슨 계획이라도 있어?`);
    era.printButton('「오늘은 잔디밭에서 연습하자」', 1);
    era.printButton('「같이 시내로 나가서 우울한 기분을 싹 날려버리자」', 2);
    era.printButton('「오늘은 트레이닝실에서 푹 쉬자」', 3);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait('응응, 잔디 위를 질주하다 보면 고민 따위는 구름처럼 사라질 거야!');
      await maru.say_and_wait(`역시 ${callname}, 내 마음을 정말 잘 아는걸.`);
      await era.printAndWait(`${maru.name}는 다시 기운을 차린 듯 보였다.`);
      await maru.say_and_wait('OK! 그럼 지금 바로 출발하자!');
      await era.printAndWait(
        `${me.get_couple_title()}은(는) 잔디밭에서 하루 종일 훈련한 뒤, 트레이닝실에 모여 소박한 파티를 열었다.`,
      );
      wait_flag =
        get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], 0) || wait_flag;
    } else if (ret === 2) {
      await maru.say_and_wait(
        `어머? ${callname}은(는) 지금 이 누나랑 데이트하고 싶다는 거야?`,
      );
      await maru.say_and_wait('정말 성급하다니까, 데이트 코스를 제대로 짜지 않으면 안 된다구.');
      await maru.say_and_wait('그럼 타짱을 타고 갈까?');
      era.printButton(`「데이트니까 같이 걸어가 보는 건 어때?」`, 1);
      await era.input();
      await maru.say_and_wait(`음——`);
      era.printButton(`「연인 사이라면 같이 걷는 게 더 분위기 있잖아」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}이 그렇게까지 말한다면야.`);
      await maru.say_and_wait(`가끔은 산책하는 것도 색다른 기분을 느낄 수 있겠지⭐`);
      await era.printAndWait(`그럼 지금 출발!`);
      await era.printAndWait(`트레이닝실로 돌아왔을 때 두 사람은 녹초가 되어 소파에 기대어 앉았다.`);
      era.println();
      wait_flag =
        get_attr_and_print_in_event(
          4,
          [0, 0, 0, 0, 0],
          0,
          JSON.parse('{"체력":200}'),
        ) || wait_flag;
    } else {
      await maru.say_and_wait(
        `하긴, 이렇게 추운 날엔 따뜻한 트레이닝실에 있는 게 정답이겠지.`,
      );
      era.printButton(`「트레이닝실에 둔 간식이랑 귤을 가져올게」`, 1);
      await era.input();
      await maru.say_and_wait(`후훗, 그럼 내가 귤을 까 줄게.`);
      await era.printAndWait(`그렇게 두 사람은 코타츠에 앉아 화기애애한 분위기 속에서 하루를 보냈다.`);
      era.println();
      wait_flag =
        get_attr_and_print_in_event(4, [0, 0, 0, 0, 0], 100) || wait_flag;
    }
    era.set('cflag:4:축제이벤트표시', 0);
  } else if (edu_weeks === 47 + 5) {
    await print_event_name('겨울과 봄의 교차', maru);
    await era.printAndWait(`훈련장`);
    await era.printAndWait(
      `${maru.get_uma_sex_title()}들이 이곳에서 땀을 흘리며 희망찬 미래를 향해 나아가고 있다.`,
    );
    await era.printAndWait(
      `아사히배의 세례를 거친 뒤, ${me.name}들은 사츠키상의 전초전인 스프링 스테이크스로 시선을 돌렸다.`,
    );
    await maru.say_and_wait(
      `예정대로라면 세 번째 코너를 돌았으니, 이제 스퍼트를 올릴 차례야!`,
    );
    await maru.say_and_wait(`이대로 단숨에 엑셀을 끝까지 밟는 거야!`);
    await era.printAndWait(
      `도주 전략을 사용하는 ${maru.get_uma_sex_title()}에게 있어, 다른 각질의 ${maru.get_uma_sex_title()}들보다 초반과 중반에 주의를 더 집중하게 된다.`,
    );
    await era.printAndWait(
      `초반과 중반에 확보한 우위를 끝까지 유지하여 승리하는 것을 고려한 것이리라.`,
    );
    await era.printAndWait(
      `레이스 중 같은 전략을 취하는 도주 우마무스메가 여럿일 경우, 종종 초반과 중반 사이에 사투에 가까운 경쟁이 벌어지곤 한다.`,
    );
    await era.printAndWait(
      `이렇게 레이스를 하이 페이스로 이끌어, 선입이나 선행 전략을 쓰는 ${maru.get_uma_sex_title()}들의 리듬을 무너뜨리는 것이다.`,
    );
    await era.printAndWait(
      `하지만, 앞서 언급하지 않은 추입 우마무스메는 도주 우마무스메들끼리의 싸움 덕분에 종반에도 속도를 유지하며 온존했던 체력을 한꺼번에 폭발시켜 우위를 점하기도 한다.`,
    );
    await era.printAndWait(`방심은 금물이라는 걸까?`);
    await era.printAndWait(
      `하지만, ${maru.name}는 단순히 도주 전략을 선택했기 때문이 아니라...`,
    );
    await me.say_and_wait(
      `역시 괴물이라 불리는 ${maru.get_uma_sex_title()}답네.`,
      true,
    );
    await era.printAndWait(
      `달리는 것 자체를 즐기기에, 어느샌가 상상조차 할 수 없는 속도에 도달해 있었다.`,
    );
    era.printButton(`「수고했어, 잠시 쉬자.」`, 1);
    await era.input();
    await maru.say_and_wait(`하아…… 하아…… 후우～`);
    await era.printAndWait(`주변 잔디가 마치 태풍이 휩쓸고 지나간 것처럼 엉망이 되어 있었다.`);
    await maru.say_and_wait(`고마워♪`);
    await era.printAndWait(
      `${me.name}이(가) 건넨 수건을 받은 ${maru.name}는 이마의 땀을 닦아냈다. 젖은 긴 머리 사이로 풍겨오는 바닐라 향이 ${me.actual_name}의 코끝을 간지럽혔다.`,
    );
    await era.printAndWait(
      `어쩌면 이렇게 달린 뒤에 보여주는 진심 어린 만족감이야말로 ${maru.name}의 진짜 모습일지도 모른다.`,
    );
    era.printButton(`「그리운 향기네.」`, 1);
    await era.input();
    await era.printAndWait(
      `${maru.name}의 젖은 머리카락을 수건으로 닦아주는 것을 도우며 대화의 실마리를 찾았다.`,
    );
    await maru.say_and_wait(`${callname}은(는) 향기에 관심이 많니?`);
    await me.say_and_wait(`응, 아주 좋은 살냄새 같아.`);
    await maru.say_and_wait(`후훗～ 살냄새랑 비슷하긴 하지만, 사실 이건 향수 냄새야.`);
    await maru.say_and_wait(`기분 전환을 하고 싶어서 골라본 건데.`);
    await maru.say_and_wait(`${callname}의 반응을 보아하니,`);
    await maru.say_and_wait(`꽤 인기가 좋은 모양이네.`);
    await maru.say_and_wait(
      `음, 이 ${maru.get_bigger_sibling_sex_title()}도 역시 유행의 최첨단에 서 있는 모양이야.`,
    );
    await era.printAndWait(`${maru.sex}의 기분이 더 좋아진 듯했다.`);
    await me.say_and_wait(
      `음, 나는 유행에 대해서는 잘 모르지만, ${maru.name}는 언제나 굉장히 매력적인 캐릭터야.`,
    );
    await maru.say_and_wait(`${callname}이 그렇게 말해도, 상 같은 건 없다구?`);
    era.printButton(`「정말 필요 없어」`, 1);
    era.printButton(`「이미 아주 멋진 추억을 선물 받았으니까」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`에헤이——`);
      await maru.say_and_wait(`${callname}이 그런 말투로 말하니까 조금 귀여운걸～`);
      await era.printAndWait(`${maru.name}가 ${me.name}의 머리를 가볍게 쓰다듬었다.`);
      await maru.say_and_wait(`후후후～ 역시 이런 ${callname}이 제일 귀엽다니까♪`);
      event_marks.wind--;
    } else {
      await maru.say_and_wait(`에엣——`);
      await era.printAndWait(`${maru.name}이(가) 신기하다는 표정으로 ${me.name}을(를) 바라보았다.`);
      await maru.say_and_wait(`트레이너…… ${callname}, 그런 말을 하는 건 정말 반칙이야.`);
      await maru.say_and_wait(`……혹시 ${callname}, 다른 아이들에게도 똑같이 말하고 다니는 건 아니지?`);
      await era.printAndWait(
        `마치 골치 아픈 일을 만난 것처럼, ${maru.name}는 ${me.name}을(를) 빤히 쳐다보았다.`,
      );
      await maru.say_and_wait(
        `만약 ${callname}이 그런 바람둥이가 된다면, 이 ${maru.get_bigger_sibling_sex_title()}도 슬퍼질 거라구?`,
      );
      await me.say_and_wait(`미안해, 다음에는 그럴 일 없을 거야.`);
      await maru.say_and_wait(
        `하아, 어쨌든 다른 아이들에게는 절대 그렇게 말하면 안 돼. 이번 상대가 나였기에 망정이지. 아니, 나한테도 하지 마.`,
      );
      event_marks.wind++;
    }
    await me.say_and_wait(`그건 그렇고, ${maru.name}.`);
    await me.say_and_wait(`조금 갑작스럽긴 하지만, 오랫동안 고민해 온 문제가 있어.`);
    await maru.say_and_wait(
      `어머나, ${callname}이 이 ${maru.get_bigger_sibling_sex_title()}에게 가르침을 청할 때도 있니?`,
    );
    await maru.say_and_wait(
      `걱정 마, 내가 아는 부분은 전부 다 ${me.name}에게 알려줄 테니까.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 땀을 닦은 수건의 물기를 짜서 개어 가방에 넣었다.`,
    );
    await me.say_and_wait(`${maru.name}는 언제나 후배들에게 인기가 많잖아, 그래서 생각해 봤는데.`);
    await me.say_and_wait(`혹시나 해서 묻는 거지만, ${maru.name}...`);
    await me.say_and_wait(`${maru.name}의 소원은 뭐야?`);
    await maru.say_and_wait(
      `음—— 마치 정원의 정원사처럼, 잡초가 무성한 토양 위에 씨앗을 심는 것.`,
    );
    await maru.say_and_wait(
      `물을 주고, 흙을 고르고, 비료를 주면서 외부의 변화에 상관없이 그저 기대하며 기다리는 것.`,
    );
    await maru.say_and_wait(
      `때로는 비바람을 만나기도 하고, 흙을 고르다 예상치 못한 끈질긴 잡초를 만나기도 하겠지만, 스스로의 끈질긴 의지로 땅을 뚫고 나오는 꽃들을 보는 것.`,
    );
    await maru.say_and_wait(
      `아름다운 꽃이 마침내 피어나는 순간, 만감이 교차하며 흘리는 기쁨의 눈물. 내 생각엔 그것이 내가 존재하는 의미인 것 같아.`,
    );
    await me.say_and_wait(`그래서 ${maru.name}는 항상 묵묵히 노력하고 있었던 거네.`);
    await maru.say_and_wait(
      `당연하지, 이렇게 어린 후배들을 이끌며 천천히 나아가고, 그${
        maru.sex
      }들이 꽃을 피우고 열매를 맺을 순간이 오기를 기다리는 것.`,
    );
    await maru.say_and_wait(`모든 수고는 그에 합당한 보상을 받게 될 거야.`);
    await era.printAndWait(
      `격앙된 감정 없이, ${maru.name}는 차분하게 자신의 꿈을 이야기했다.`,
    );
    await me.say_and_wait(`……정말 아름답다, ${maru.name}.`);
    await me.say_and_wait(`고마워, 앞으로도 잘 부탁해.`);
    await maru.say_and_wait(`나야말로 잘 부탁해.`);
    await era.printAndWait(
      `겨울의 추위가 채 가시지 않았음에도 불구하고, ${maru.name}의 미소는 ${me.name}에게 따뜻함을 느끼게 해주었다.`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 6) {
    await print_event_name('발렌타인데이', maru);
    await era.printAndWait(
      `트레이너 전용 아파트에서 트레센으로 등원하니, 오늘따라 공기가 평소보다 더 달콤하게 느껴졌다.`,
    );
    await era.printAndWait(
      `평소의 무기력한 모습은 온데간데없이, 아침 일찍부터 둘씩 짝을 지어 선물을 받을 사람의 표정을 상상하며 신나게 떠드는 학생들을 보고 나서야,`,
    );
    await era.printAndWait(`발렌타인데이가 돌아왔음을 깨달았다.`);
    await era.printAndWait(
      `혹시 어떤 ${maru.get_uma_sex_title()}가 초콜릿을 주러 오면 어떻게 대응해야 할지 고민하며 트레이닝실로 향했지만, 인사를 건네는 이는 아무도 없었다.`,
    );
    await me.say_and_wait(
      `커플들 다 폭발해버려라. 솔로단의 성화가 커플들을 다 불태워버렸으면 좋겠네.`,
      true,
    );
    await era.printAndWait(
      `투덜거리면서도 공기 중에 감도는 끈적하고 달콤한 분위기를 피하려는 듯 정처 없이 뛰기 시작했다.`,
    );
    await era.printAndWait(`그러다 누군가와 정면으로 부딪히고 말았다.`);
    era.printButton(`「미안!」`, 1);
    await era.input();
    await era.printAndWait(`가벼운 충돌이었지만, 이 향기는 무척이나 익숙했다.`);
    await maru.say_and_wait(`안녕, ${callname}?`);
    await me.say_and_wait(`${maru.name}?`);
    await era.printAndWait(
      `눈앞의 ${maru.get_teen_sex_title()}와 산더미 같은 초콜릿 가방을 보며 ${me.name}은(는) 깊은 생각에 잠겼다.`,
    );
    await me.say_and_wait(`올해도 이렇게나 많이 받았어?`);
    await maru.say_and_wait(
      `작년에 새로 입학한 후배들이랑 방금 트레센을 졸업한 ${maru.get_uma_sex_title()}들이 준 거야. 어느새 이렇게 쌓여버렸네.`,
    );
    await era.printAndWait(
      `이대로는 방법이 없다. 둘이서 초콜릿을 주식으로 삼아도... 아니, 도저히 다 먹을 수 없는 양이다.`,
    );
    await me.say_and_wait(`받지 않을 수도 없고, 참 난처하게 됐네.`);
    await era.printAndWait(`이 초콜릿들을 처리할 좋은 방법이 없을까?`);
    await me.say_and_wait(`음, 이 초콜릿들을 지금까지 응원해준 팬들에게 선물로 주는 건 어때?`);
    await me.say_and_wait(`이 정도 수량이라면 팬 서비스용으로 아주 충분할 거야!`);
    await maru.say_and_wait(`그거 좋은 생각이네! 근데 장소는 어디가 좋을까?`);
    await era.printAndWait(`내 생각에는...`);
    era.printButton(`「공연실을 하나 빌려서 임시 행사장으로 쓰자!」`, 1);
    era.printButton(`「아예 상점가에서 길거리 공연을 열어버리자!」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`좋은 생각이야, 그렇게 하자.`);
      await era.printAndWait(
        `${me.name}은(는) 예전에 연락했던 유명 감독에게 추천할 만한 장소가 있는지 물었고, 곧바로 답장을 받았다.`,
      );
      await era.printAndWait(
        `우마터에 저녁에 팬 대감사제를 연다는 소식을 올리자 순식간에 수많은 리트윗이 쏟아졌다.`,
      );
      await era.printAndWait(
        `팬 대감사제의 성공적인 마무리는 말할 것도 없고, 많은 팬이 초콜릿을 받지 못했음에도 ${maru.name}와 악수하기 위해 줄을 섰다.`,
      );
      await era.printAndWait(
        `3시간 동안 미소를 유지하며 서 있는 ${maru.name}의 모습을 보며, ${me.name}은(는) 아이돌이라는 존재에 대해 깊은 경외심을 느꼈다.`,
      );
      await era.printAndWait(
        `다음 날 패션 잡지에는 '${maru.name} 트렌드'라는 제목으로 1면이 장식되었다.`,
      );
    } else {
      await maru.say_and_wait(`길거리 공연? 파코짱이 자주 하던 거네.`);
      await maru.say_and_wait(`의외로 재미있을지도 모르겠어!`);
      await era.printAndWait(
        `${falcon.name}에게 게릴라 라이브 노하우와 타즈나${
          me.sex_code === 1 ? ' 씨' : ' 씨'
        }의 추격을 뿌리치고 도망치는 기술을 전수받았다.`,
      );
      await era.printAndWait(
        `우마터에 저녁 상점가 게릴라 라이브 소식을 알리자 순식간에 폭발적인 반응이 일어났다.`,
      );
      await era.printAndWait(
        `팬 대감사제의 성공적인 마무리는 말할 것도 없고, 많은 팬이 초콜릿을 받지 못했음에도 ${maru.name}와 악수하기 위해 줄을 섰다.`,
      );
      await era.printAndWait(
        `3시간 동안 미소를 유지하며 서 있는 ${maru.name}의 모습을 보며, ${me.name}은(는) 아이돌이라는 존재에 대해 깊은 경외심을 느꼈다.`,
      );
      await era.printAndWait(`공연이 끝난 뒤 열광한 가게 주인들에게서 수많은 생필품을 공짜로 선물 받았다.`);
    }
    await me.say_and_wait(`드디어 끝났다.`);
    await era.printAndWait(
      `열정적인 팬들을 한 명 한 명 응대한 뒤, 어수선해진 현장에는 ${me.name}들 두 사람만이 남았다.`,
    );
    await me.say_and_wait(`수고했어. 정말 고생 많았어.`);
    await era.printAndWait(`${me.name}은(는) 진심 어린 존경의 눈빛으로 ${maru.name}를 바라보았다.`);
    await era.printAndWait(`석양을 등지고 서 있는 그녀는 마치 침범할 수 없는 여신처럼 보였다.`);
    await maru.say_and_wait(
      `아이돌 활동을 응원해주시는 여러분께 감사드리며, 앞으로도 잘 부탁드립... 아, ${
        callname
      }(이)구나.`,
    );
    await era.printAndWait(`순간 뭐라고 대답해야 할지 할 말을 잃었다.`);
    await maru.say_and_wait(`그러고 보니, 이것도 있어♪`);
    await era.printAndWait(`${maru.name}이(가) 무대 뒤에서 예쁘게 포장된 초콜릿 상자를 꺼냈다.`);
    await maru.say_and_wait(`발렌타인데이 축하해, ${callname}♪`);
    await era.printAndWait(`${me.name}은(는) ${maru.name}에게서 초콜릿을 건네받았다.`);
    await maru.say_and_wait(`앞으로도 이 ${maru.name}와 함께 걸어가 줘, ${callname}♪`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], 0) || wait_flag;
    era.set('cflag:4:축제이벤트표시', 0);
  } else if (edu_weeks === 47 + 7) {
    await print_event_name('아이돌', maru);
    await era.printAndWait(`트레이닝실`);
    await era.printAndWait(`스프링 스테이크스까지 앞으로 2주.`);
    await era.printAndWait(
      `마지막 서류 처리를 마친 ${me.actual_name}은(는) 펜을 내려놓고 길게 숨을 내뱉었다.`,
    );
    await me.say_and_wait(`드디어 다 끝냈네.`);
    await me.say_and_wait(`하지만...`);
    await era.printAndWait(`오랫동안 품어왔던 의문.`);
    await era.printAndWait(`억눌러 왔던, 아니 차라리 떠올리고 싶지 않았던 기억.`);
    await me.say_and_wait(`${maru.name}.`);
    await era.printAndWait(`정원사.`);
    await me.say_and_wait(`언제나 강자의 모습으로 문제에 맞서는 것에 익숙해져 있다.`);
    await era.printAndWait(
      `교육자로서 자신의 경험을 통해 귀여운 어린 ${maru.get_uma_sex_title()}들을 돕고 싶어 한다.`,
    );
    await me.say_and_wait(`하지만 정원사의 길은 그렇게 이상적인 것만은 아니니까.`);
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `실례합니다.`);
    await era.printAndWait(`체구가 작은 ${maru.get_uma_sex_title()} 한 명이 들어왔다.`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `저기, 혹시 마루젠 선배님 여기 계시나요?`,
    );
    await me.say_and_wait(
      `${maru.name}는 잠시 자리를 비웠어. 여기 앉아서 잠깐 쉬면서 기다려.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `아... 네, 감사합니다!`,
    );
    await era.printAndWait(`${me.name}은(는) 당근 주스 한 캔을 테이블 위에 놓아주었다.`);
    await era.printAndWait(
      `${me.name}은(는) 보던 중이었던 ${maru.name}의 아사히배 레이스 영상을 다시 재생했다.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `와, 이건 마루젠 선배님의...!`,
    );
    await me.say_and_wait(`${me.name}도 이 영상을 자주 봐?`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `네! 마루젠 선배님이 골인 지점을 통과하는 슬로우 모션을 대여섯 번은 넘게 돌려봤어요!`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `선배님의 주법을 따라 하다 보면, 저도 언젠가 G3에서 우승할 수 있지 않을까 해서요!`,
    );
    await me.say_and_wait(`……그랬구나.`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `아... 네. 본격화가 일찍 온 편이라 중학교 때부터 레이스 ${maru.get_uma_sex_title()}로 뛰었거든요.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `벌써 3년이나 지났지만, 데뷔전 승리 이후로는 G3 5착이 제 최고 성적이에요.`,
    );
    await era.printAndWait(
      `${maru.get_uma_sex_title()}은(는) 손에 든 주스 캔 속의 오렌지빛 액체를 빤히 바라보았다.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `정말 피나는 노력을 했는데도, 실력은 거의 늘지 않았어요.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `그저 매일 똑같은 훈련을 반복하며 흐리멍덩하게 하루하루를 보낼 뿐이었죠.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `제 방법이 잘못된 걸까 생각도 해봤지만...`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `그냥 머릿속으로만 생각하다 포기하게 되더라고요.`,
    );
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `어쩌면 저는 레이스 ${maru.get_uma_sex_title()}에 어울리지 않는 걸지도 몰라요. 이제 다른 길을 찾아봐야 할 때가 온 것 같아요.`,
    );
    await era.printAndWait(
      `말을 마친 ${maru.get_uma_sex_title()}은(는) ${me.name}과(와) ${maru.name}가 따낸 트로피들을 묵묵히 응시했다.`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(
      `레이스 우마무스메의 세계는 노력한 만큼 반드시 보상을 받는 그런 따뜻한 곳이 아니다.`,
    );
    await era.printAndWait(`그럼에도 불구하고.`);
    era.printButton(`「노력은 언젠가 보답을 받을 거야」`, 1);
    era.printButton(`「어쩌면 빨리 포기하는 것도 하나의 방법일 수 있어」`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await me.say_and_wait(`노력은 언젠가 반드시 보답을 받을 거야.`);
      event_marks.wind++;
    } else {
      await me.say_and_wait(`어쩌면 빨리 포기하는 것이 나을 수도 있어.`);
      event_marks.wind--;
    }
    await era.printAndWait(
      `마음이 복잡하다. 아마 이 ${maru.get_uma_sex_title()}도 같은 마음이겠지.`,
    );
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `……감사합니다.`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `아, 죄송해요. 너무 오래 있었네요. 마루젠 선배님은 안 오시는 것 같으니 이만 가볼게요.`,
    );
    await era.printAndWait(
      `다 마신 캔을 쓰레기통에 버린 뒤, ${maru.get_uma_sex_title()}은(는) ${me.name}에게 작별 인사를 건넸다.`,
    );
    await me.say_and_wait(`네 앞날에 행운이 있기를.`);
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `네, 안녕히 계세요.`);
    await era.printAndWait(
      `씁쓸한 미소를 지은 ${maru.get_uma_sex_title()}은(는) 조용히 트레이닝실 문을 닫고 나갔다.`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 9) {
    await print_event_name('전당 주간(인자 계승)', maru);
    era.set('cflag:4:축제이벤트표시', 0);
    await era.printAndWait(`강당\n`);
    await era.printAndWait(`전당 주간은 트레센에서 가장 중요한 축제 중 하나였다.`);
    await era.printAndWait(
      `이날은 많은 전당 ${maru.get_uma_sex_title()}들이 트레센에 강연하러 왔다.`,
    );
    await era.printAndWait(
      `그리고 이 선배들의 경험은 갓 데뷔했거나 데뷔한 지 얼마 안 된 ${maru.get_uma_sex_title()}들에게는 소중한 자산이었다.`,
    );
    await era.printAndWait(
      `그 중요성 때문에, ${me.name}과(와) ${maru.name}는 일찍부터 강당에 와서 강연이 시작되기를 기다렸다.`,
    );
    await maru.say_and_wait(
      `만약 경기장에서 선배들이랑 겨뤄볼 수 있다면, 의외로 재미있을지도 모르겠네♪`,
    );
    await era.printAndWait(
      `강연대 위의 전당 ${maru.get_uma_sex_title()}들을 보며, ${maru.name}는 기대에 찬 표정을 지었다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 옆에서 핵심 키워드들을 빠르게 포착해 컴퓨터에 기록했다.`,
    );
    await say_by_passer_by(
      `전당 ${maru.get_uma_sex_title()}A`,
      `……다들 알다시피 이 세계는 세 여신님에 의해 창조되었습니다……`,
    );
    await era.printAndWait(
      `강단에서 강연하던 전당 ${maru.get_uma_sex_title()}가 갑자기 세 여신님에 대해 언급했다.`,
    );
    await maru.say_and_wait(`그러고 보니, ${callname}도 알고 있어?`);
    await era.printAndWait(`옆에 앉아 있던 ${maru.name}가 ${me.name}을(를) 쳐다봤다.`);
    await maru.say_and_wait(
      `안뜰의 세 여신상에 대고 기도하면, 다른 세계로부터의 축복을 받을 수 있대.`,
    );
    await maru.say_and_wait(`심지어 불가사의한 힘이 일어나기도 한다나 봐.`);
    await era.printAndWait(
      `사방에서 천둥 같은 박수갈채가 터져 나왔고, 강연하던 ${maru.get_uma_sex_title()}가 단상에서 내려오며 행사는 다음 단계로 넘어갔다.`,
    );
    await era.printAndWait(`그 틈을 타서 ${me.name}은(는) 고개를 돌려 ${maru.name}를 바라봤다.`);
    await era.printAndWait(
      `주년 기념 의상으로 갈아입은 ${maru.sex}는 ${me.name}의 대답을 기다리고 있었다.`,
    );
    era.printButton(`「${maru.name}가 강단에 서는 그날을 기대하고 있을게.」`, 1);
    await era.input();
    await maru.say_and_wait(`잉? ${callname}은 나를 그렇게 높게 평가해 주는 거야?`);
    era.printButton(
      `이렇게 상냥하고 성숙한 누나는 꽤 보기 드무니까.`,
      1,
    );
    await era.input();
    await maru.say_and_wait(`앞으로 더 열심히 트레이닝하지 않으면 안 되겠네!`);
    await me.say_and_wait(`같이 힘내자!`);
    await era.printAndWait(
      `트레이닝실로 돌아온 뒤, ${me.name}들은 밤늦게까지 함께 녹화 테이프를 감상했다.`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 12) {
    await print_event_name('팬 대감사제', maru);
    await era.printAndWait(
      `팬 대감사제는 경기장에서 우마무스메들을 언제나 응원해 주는 팬들에게 보답하기 위해 열리는 축제였다.`,
    );
    await era.printAndWait(
      `이날 트레센은 교문을 개방하고, 학생들은 학생회가 준비한 메인 스테이지와 여러 서브 스테이지에서 공연을 펼쳤다.`,
    );
    await era.printAndWait(
      `레이스 우마무스메의 길을 걷는 ${maru.get_uma_sex_title()}들은 보통 더 많은 주목을 받곤 했다.`,
    );
    await era.printAndWait(`무용실\n`);
    await maru.say_and_wait('하나, 둘, 셋, 넷, 여유만만♪');
    await maru.say_and_wait('다섯, 여섯, 일곱, 여덟, 완전 문제없어♪');
    await era.printAndWait(`${me.name}은(는) ${maru.name}가 마지막으로 예행연습을 하는 것을 지켜봤다.`);
    await maru.say_and_wait(`${callname} ${me.name}, 어때 보여?`);
    era.printButton(`「정말 그리운 노래네」`, 1);
    await era.input();
    await era.printAndWait(
      `세기말 감성의 유행가가 귓가에 울려 퍼졌고, 격렬한 비트와 경쾌한 리듬에 맞춰 스텝을 밟는 ${maru.name}의 모습이 보였다.`,
    );
    await era.printAndWait(
      `황홀한 기분 속에 마치 학창 시절로 돌아간 것만 같았다. 방과 후에 옹기종기 모여 최신 CD 앨범에 대해 떠들던 그때 말이다.`,
    );
    await maru.say_and_wait(
      `${callname}, 이건 지금 가장 핫한 최신 유행곡이라구? 그렇게 멍하니 있으면 유행에 뒤처져 버려.`,
    );
    await maru.say_and_wait(`슬슬 내 차례네.`);
    await maru.say_and_wait(`${callname}은 무대 아래에서 제대로 감상해 줘.`);
    await era.printAndWait(`일부 관객들은 이런 레트로한 음악을 무척이나 좋아했다.`);
    await era.printAndWait(
      `${maru.name}는 그 관객들을 데리고 과거의 환상 속으로 이끌었다.`,
    );
  } else if (edu_weeks === 47 + 17) {
    await print_event_name('동경', maru);
    await era.printAndWait(`트레이닝실\n`);
    await era.printAndWait(
      `짙게 내려앉은 다크서클과 끊이지 않는 커피. ${me.name}은(는) 손에 든 서류를 보고 또 보았다.`,
    );
    await me.say_and_wait(`지금 상태로 더비에 도전한다면...`);
    await era.printAndWait(`이제 어떤 능력치를 중점적으로 강화할 것인지 결정해야 했다.`);
    era.printButton(`「스태미나와 근성!」`, 1);
    era.printButton(`「스피드와 파워!」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await me.say_and_wait(`여름 합숙 때 그동안 소홀했던 스태미나를 제대로 끌어올리자.`);
    } else {
      await me.say_and_wait(`역시 스피드와 파워가 더 낫겠지.`);
    }
    await me.say_and_wait(`에취!`);
    await era.printAndWait(
      `집중력이 재채기 한 번에 끊겨버렸다. ${me.name}은(는) 오른쪽에 둔 티슈를 한 장 뽑아 쓰고는 가득 찬 쓰레기통에 던져 넣었다.`,
    );
    await me.say_and_wait(`이 서류까지만 처리하고...`, true);
    await era.printAndWait(
      `몸이 너무 차가웠다. 마치 온몸이 얼음 속에 파묻힌 것 같았고 시야도 흐릿해졌다.`,
    );
    await era.printAndWait(
      `젊고 건강하니 일주일 정도의 밤샘은 괜찮을 줄 알았으나, 몸이 먼저 버티지 못하고 무너져버린 것이었다.`,
    );
    await me.say_and_wait(`빌어먹을 몸뚱이... 감기약, 감기약이 어디 있더라?`);
    await era.printAndWait(
      `서랍을 열어 감기약이라고 적힌 종이 상자를 꺼냈지만, 안의 약은 이미 다 먹고 비어 있었다.`,
    );
    await me.say_and_wait(`……그런가. 적어도 머리가 돌아갈 때 마무리해야 해.`);
    await era.printAndWait(
      `이보다 더 최악일 순 없다는 생각에 오히려 마음은 가벼워졌다.`,
    );
    await era.printAndWait(
      `정수기에서 따뜻한 물을 한 컵 받아 단숨에 들이켠 ${me.name}은(는) 다시 자리에 앉았다.`,
    );
    await me.say_and_wait(`속도를 올려야 해.`);
    await era.printAndWait(
      `추위 때문에 이빨이 저절로 맞부딪히며 「딱딱딱」 소리를 냈고, 목구멍은 무언가를 삼키기조차 힘들었다.`,
    );
    await era.printAndWait(
      `그저 「빨리 이 일을 끝내야 해」,「여기서 쓰러질 순 없어」라는 일념 하나로 ${me.name}은(는) 이를 악물고 버텼다.`,
    );
    await me.say_and_wait(`끝났다!`);
    await era.printAndWait(
      `마지막 글자를 입력한 순간, 완수했다는 만족감과 함께 긴장이 풀리면서 정신을 유지할 수 없게 되었다. 시야가 빙글빙글 돌기 시작했고, 아마 한계에 다다른 모양이었다.`,
    );
    await era.printAndWait(`그렇게 ${me.name}은(는) 만족스럽게 쓰러졌다.`);
    await maru.say_and_wait(`${callname}, 나 잠깐 들렀어♪ ……${callname}?`);
    await era.printAndWait(
      `의식이 사라지기 직전, ${me.name}은(는) ${maru.name}의 목소리를 들었다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `나를 지켜봐 줘, 레이스 우마무스메로서의 선배로서.`,
    );
    await era.printAndWait(`나를 뚫어지게 주시해 줘, 그렇게 영원히 내 뒤에 남겨진 채로.`);
    await era.printAndWait(
      `나를 축복해 줘. 자, 이제 ${me.name}이(가) 나를 위해 환호할 차례야.`,
    );
    await me.say_and_wait(`그렇구나.`);
    await era.printAndWait(
      `아마 이름 모를 어떤 ${maru.get_uma_sex_title()}의 마음속 깊은 목소리가 무의식중에 새어 나온 것이리라.`,
    );
    await maru.say_and_wait(`${callname}?`);
    await era.printAndWait(`누군가 ${me.name}을(를) 부르고 있는 것 같았다.`);
    await maru.say_and_wait(`${callname}!`);
    await era.printAndWait(`목소리가 점점 더 커지며 간절하게 불렀다.`);
    await era.printAndWait(`이제 깨어나야 했다. 일어나기 싫어하는 자신을 달랬다.`);
    await era.printAndWait(`마침내 ${me.name}은(는) 마지못해 눈을 떴다.`);
    await maru.say_and_wait(`드디어 깼구나? ${callname}.`);
    await me.say_and_wait(`여기는……?`);
    await era.printAndWait(`주위를 둘러보니 그곳은 ${me.name}이(가) 사는 방이었다.`);
    await maru.say_and_wait(`잠깐만 기다려 봐.`);
    await era.printAndWait(`${maru.name}가 부엌으로 들어가더니 죽 한 그릇을 내왔다.`);
    await maru.say_and_wait(
      `만든 지 좀 됐는데, 혹시 아직 너무 뜨거우면 말해 줘.`,
    );
    await era.printAndWait(
      `따뜻한 액체가 ${me.name}의 입안으로 들어왔다. 몽롱한 뇌는 본능적으로 이것이 자신에게 필요한 영양분임을 알아차렸다.`,
    );
    era.printButton(`「고마워.」`, 1);
    era.printButton(`「괜찮아, 내가 직접 할게.」`, 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await era.printAndWait(
        `눈앞의 실루엣에 뿌연 안개가 낀 것처럼 ${me.name}은(는) ${maru.sex}의 동작을 잘 볼 수 없었다.`,
      );
      await era.printAndWait(`이럴 바엔 그냥 눈을 감는 게 낫겠다고 생각했다.`);
      await era.printAndWait(
        `마음을 정한 ${me.name}은(는) 눈을 감고 상대방의 손길에 몸을 맡겼다.`,
      );
      await era.printAndWait(
        `숟가락과 사발이 부딪치는 소리가 들릴 때마다 따뜻한 죽이 입속으로 들어왔다.`,
      );
      await era.printAndWait(
        `따뜻한 촉감, 그리고 숙련되고 정확한 손길. 무엇보다 그 그리운 느낌... 어느샌가 어머니의 모습과 천천히 겹쳐 보였다.`,
      );
      event_marks.wind++;
    } else {
      await me.say_and_wait(`아냐, 내가 직접 할게.`);
      await era.printAndWait(
        `억지로 몸을 일으키려 했으나, 더 강하고 단단한 두 손에 제지당하고 말았다.`,
      );
      await maru.say_and_wait(
        `지금은 허세 부릴 때가 아니야. 환자는 얌전히 침대에 누워서 푹 쉬어야 한다구.`,
      );
      await me.say_and_wait(`${maru.name}……`);
      await era.printAndWait(
        `마지막 남은 기운까지 다 쓰고는 다시 침대에 누울 수밖에 없었다. 입으로 들어오는 음식을 열심히 삼켰다.`,
      );
      event_marks.wind--;
    }
    await me.say_and_wait(`……따뜻해.`);
    await era.printAndWait(
      `그리운 기운에 ${me.name}은(는) 눈을 감고 깊은 잠에 빠져들었다.`,
    );
    await era.printAndWait(`두려움 때문에 쉴 새 없이 달려온 몸이 드디어 안식을 찾은 것이었다.`);
    era.drawLine();
    await me.say_and_wait(`……지금 몇 시지?`);
    await era.printAndWait(
      `눈을 뜨고 일어나려다 보니, 의자에 앉아 쉬던 ${maru.get_teen_sex_title()}가 침대에 엎드려 잠들어 있었다.`,
    );
    await era.printAndWait(
      `몸이 떨리지 않게 조심하며 커튼을 살짝 들춰보자, 한 줄기 빛이 ${me.name}의 얼굴을 비췄다. 아침이 온 것이었다.`,
    );
    await maru.say_and_wait(`음냐…… 요즘 트렌드는 이런 식인가……?`);
    await era.printAndWait(
      `다행히 몸을 일으킬 때의 미세한 진동은 ${maru.sex}가 무의식중에 자세를 바꾸게 했을 뿐, 고른 숨소리는 끊기지 않았다.`,
    );
    await me.say_and_wait(`${maru.sex}가 깰 때까지 이대로 기다리자.`, true);
    await era.printAndWait(`그렇게 생각하며 ${me.name}은(는) 눈을 감고 완전히 날이 밝기를 기다렸다.`);

    if (ret1 === 1) {
      wait_flag =
        get_attr_and_print_in_event(4, [0, 20, 0, 20, 0], 0) || wait_flag;
    } else {
      wait_flag =
        get_attr_and_print_in_event(4, [20, 0, 20, 0, 0], 0) || wait_flag;
    }
  } else if (edu_weeks === 47 + 29) {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:4:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, ebj);
      return false;
    }
    await print_event_name('여름 합숙', maru);
    await era.printAndWait(`해변`);
    await era.printAndWait(`이사장의 개인 해변이라고는 하지만, 공기에서 청량함이 느껴졌다.`);
    await era.printAndWait(`아마 바다와 가까운 덕분일 것이었다.`);
    await era.printAndWait(
      `바닷바람을 타고 멀리서 파도가 밀려왔다 밀려가는 소리와 함께 습한 기운이 전해졌다.`,
    );
    await era.printAndWait(
      `타치에서 내린 ${maru.name}는 만족스러운 듯 눈을 가늘게 뜨고 휴양지의 분위기를 즐겼다——`,
    );
    await me.say_and_wait(`그나저나, 왜 굳이 셔틀버스를 안 탄 거야?`);
    await era.printAndWait(
      `${maru.name}의 강력한 요구 때문에 ${me.name}들은 타치의 도움을 받아 이사장의 개인 해변에 오게 되었다.`,
    );
    await maru.say_and_wait(
      `모처럼 이렇게 풍경 좋은 해변에 오는데, 그냥 후배들이랑 같이 버스 타고 오면 좀 아쉽잖아.`,
    );
    await me.say_and_wait(
      `뭐? ${maru.name}, 너도 여름 합숙이 능력을 빠르게 올릴 지름길인 거 알고 있잖아?`,
    );
    await me.say_and_wait(`그러니까 평소보다 좀 더 진지하게 임하자고.`);
    await maru.say_and_wait(
      `에구구. ${callname}이 그렇게까지 말한다면, 이 ${maru.get_bigger_sibling_sex_title()}도 진지해지지 않을 수 없겠네⭐`,
    );
    era.printButton(`「그건 당연한 거 아냐?」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}도 바닷물과 일광욕, 그리고 곳곳에 보일 수영복 차림을 기대하고 있긴 했지만 말이다.`,
    );
    await me.say_and_wait(`그럼 이제부터 청춘을 마음껏 즐겨보자고.`);
    await era.printAndWait(`어떤 사람들은 몸이 가는 대로 맡기는 게 더 올바른 길일 수도 있었다.`);
    await era.printAndWait(`그러니 가급적이면 간섭하지 않는 게 좋겠다고 판단했다.`);
    await maru.say_and_wait(
      `이렇게 바닷바람을 느끼고 있으니까 기분도 구름 위를 나는 것 같아, 따봉♪`,
    );
    await me.say_and_wait(
      `그런 옛날 유행어까지 튀어나오는 걸 보니 ${maru.name}, 기분이 정말 좋나 보네.`,
      true,
    );
    await maru.say_and_wait(`흐흐~ ${callname} 참 귀엽다니까♪`);
    await era.printAndWait(
      `어느새 다가온 ${maru.name}가 ${me.name}을(를) 빤히 쳐다보았다.`,
    );
    await maru.say_and_wait(`아무리 칭찬해도 서비스 같은 건 없다구~?`);
    await era.printAndWait(
      `${me.name}이(가) 다음에 할 말을 미리 예측한 ${maru.name}가 얄밉게 웃음을 지었다.`,
    );
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], 0) || wait_flag;
  } else if (edu_weeks === 47 + 30) {
    await print_event_name('축제', maru);
    await me.say_and_wait(`진짜 떠들썩하네.`);
    await era.printAndWait(
      `${maru.name}와 아주 성대하다는 축제에 같이 가기로 약속했지만, ${me.name}은(는) 입구에서 한참을 기다려도 ${maru.sex}의 모습을 찾을 수 없었다.`,
    );
    await era.printAndWait(
      `「사람이 너무 많아서 길을 잃었나」라고 생각하며 ${me.name}은(는) 멍하니 인파를 구경하다 하품을 하고 있었다.`,
    );
    await me.say_and_wait(`정말 북적이는군.`);
    await era.printAndWait(
      `노점이 몇 개 없을 거라는 예상과는 완전히 다르게, 사방에서 모여든 관광객들과 노점들이 거리 끝까지 이어져 있었다.`,
    );
    await say_by_passer_by(`노점 주인`, `거기 멍하니 서 있는 총각, 싱싱한 과일 좀 먹어보지 않을래?`);
    await me.say_and_wait(`어?`);
    await era.printAndWait(`밀려드는 사람들에 떠밀려 어느새 과일 가게 앞에 서 있게 되었다.`);
    await say_by_passer_by(`노점 주인`, `보아하니 이 축제는 처음인가 보군?`);
    await era.printAndWait(
      `장사가 잘되어 기분이 좋은지, 아저씨는 쉴 새 없이 말을 이어가기 시작했다.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `그럴 만도 하지. 여기가 관광할 때 꼭 들러야 할 축제 중 하나로 꼽히거든.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `이 마을 자체가 아름다운 해변 덕분에 휴양하러 오는 사람이 꽤 많단 말이야.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `예전에는 교통도 불편하고 평범하기 짝이 없는 시골 마을이었는데, 해변이 유명해지면서 손님이 엄청 늘었지.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `나중에 철도까지 개통되니까 사람들이 확 몰려와서 지금 같은 마을이 된 거야.`,
    );
    await me.say_and_wait(`저기, 말씀 좀 묻겠습니다.`);
    await say_by_passer_by(
      `노점 주인`,
      `오, 내 정신 좀 봐. 당신, 길을 잃어서 여기 서 있는 거지?`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `그럴 수 있어. 이 축제는 입구가 네 군데나 있는데 다 똑같이 생겼거든. 난 예술 같은 건 모르지만, 매년 입구에서 만나기로 해놓고 서로 못 찾아서 쩔쩔매는 사람들 구경하는 게 제일 재밌더라고.`,
    );
    await era.printAndWait(
      `흥이 났는지 마을 토박이인 것을 자랑스러워하는 아저씨가 큰 목소리로 계속 설명해 주었다.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `참고로 축제를 다 둘러보고 싶으면 여기서 쭉 직진해 봐. 그럼 특별 공연을 볼 수 있을 거야.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `오늘 밤 공연 보러 온 사람들 덕분에 한몫 챙길 수 있겠어, 하하하!`,
    );
    await era.printAndWait(`마지막 말과 함께 침을 튀기며 열변을 토하던 아저씨가 드디어 말을 멈추었다.`);
    await say_by_passer_by(`휴대폰`, `위이이잉`);
    await era.printAndWait(
      `주머니 속 휴대폰이 진동했다. 다들 공연장으로 향하는 이 시점에 전화를 걸 사람은 뻔했다.`,
    );
    await maru.say_and_wait(`${callname}, 어디 있어?`);
    await era.printAndWait(
      `주머니 속 휴대폰이 다시 진동했다. 전화를 걸 사람은 당연히 그 사람뿐이었다.`,
    );
    await maru.say_and_wait(
      `하아, 나름대로 완벽하게 준비하고 사진 찍은 입구로 달려왔는데, 아무리 봐도 ${callname}의 모습이 안 보여.`,
    );
    await maru.say_and_wait(
      `${callname}을 놓칠 리 없다고 생각했는데, 아무리 찾아도 안 보이니 이 ${maru.get_bigger_sibling_sex_title()}도 정말 기운 빠지네ㅠㅠ.`,
    );
    await era.printAndWait(
      `입구를 착각한 것일까? 아니면 ${me.name} 본인도 잘못 찾아온 것일까?`,
    );
    era.printButton(`「실례지만 잠시만요.」`, 1);
    await era.input();
    await say_by_passer_by(`노점 주인`, `응? 입구 구별하는 법을 묻고 싶은 거지?`);
    await say_by_passer_by(`노점 주인`, `매년 있는 일이라니까.`);
    await say_by_passer_by(
      `노점 주인`,
      `평소엔 구별하기 쉬워도 사람이 많아지면 다 거기서 거기처럼 보이거든.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `입구에서 다섯 번째 노점까지 걸어가 봐. 거기 안내해 주는 자원봉사자가 있을 거야.`,
    );
    await era.printAndWait(
      `아저씨는 말하면서 자연스럽게 지도를 꺼내 ${me.name}에게 가리켜 주었다.`,
    );
    await say_by_passer_by(
      `노점 주인`,
      `공연 시간에 맞추려면 이 길로 가. 지금 가면 늦지 않을 거야.`,
    );
    await era.printAndWait(`지나치게 친절해서 좀 이상하지만 참 착한 아저씨였다.`);
    await era.printAndWait(
      `그에게 감사를 표한 뒤, ${me.name}은(는) 그 내용을 ${maru.name}에게 전달하고 서둘러 달려갔다.`,
    );
    era.drawLine();
    await era.printAndWait(`저 멀리 성대한 무대가 보이기 시작했다.`);
    await era.printAndWait(`번뇌는 잊어버리고, 이 열정적인 춤사위 속에 몸을 맡길 시간이었다.`);
    await era.printAndWait(
      `이 성대한 축제 속에 녹아들며, ${maru.sex}의 무대가 영원하기를 기도했다.`,
    );
    await era.printAndWait(
      `눈물과 땀이 뒤섞인 기쁨을 안고, 방황과 고통을 뒤로한 채 마침내 해방감을 느꼈다.`,
    );
    await era.printAndWait(
      `해변 위의 반짝이는 모래알처럼, 그들의 환희와 안식은 결국 역사에 기록될 것이었다.\n`,
    );
    await me.say_and_wait(`겨우 도착했네.`);
    await era.printAndWait(
      `공연을 보러 온 사람들로 인산인해를 이루고 있었다. 사람들은 서거나 앉아서 음료나 카메라를 든 채 무대를 관람했다.`,
    );
    await era.printAndWait(
      `사람들이 내뱉는 숨결이 마치 얇은 그물처럼 얽혔고, 아이들은 사람들 사이를 신나게 뛰어다녔다.`,
    );
    await me.say_and_wait(`사람 진짜 많다.`);
    await era.printAndWait(
      `발밑을 상당히 주의하며 걸었지만, 몇 번이나 뛰어다니는 아이들에게 부딪혀 중심을 잃을 뻔했다.`,
    );
    await me.say_and_wait(`덥다... 하지만 일단 ${maru.name}부터 찾아야 해——`);
    await era.printAndWait(
      `${maru.sex}에게 위치를 보내려고 했으나, 인파 탓에 휴대폰 신호마저 끊기기 일쑤였다.`,
    );
    await maru.say_and_wait(`${callname}!`);
    await era.printAndWait(
      `밤이 깊어지자 무대 조명이 하나둘 켜졌고, 관광객들의 시선은 무대 위로 집중되었다——`,
    );
    await era.printAndWait(
      `${maru.name}를 바라보는 ${me.name}과(와), 그 시선을 느끼고 손을 흔들며 달려오는 ${maru.name}를 제외하고 말이다.`,
    );
    era.printButton(`「${maru.name}를 만나서 다행이야」`, 1);
    await era.input();
    await era.printAndWait(
      `가슴 속 무거운 짐이 드디어 내려앉은 듯, ${me.name}은(는) 길게 안도의 한숨을 내쉬었다.`,
    );
    await maru.say_and_wait(
      `드디어 ${me.name}을(를) 찾았네. 이 ${maru.get_bigger_sibling_sex_title()}도 정말 십년감수했다구.`,
    );
    await me.say_and_wait(`미안해. 나도 빨리 ${maru.name}랑 만나고 싶었지만——`);
    await maru.say_and_wait(
      `음~ 사과보다는 이제부터 ${callname}이 나랑 같이 공연을 보는 게 행동으로 보여주는 최고의 보답이겠지?`,
    );
    await me.say_and_wait(
      `……무대가 끝날 때까지 ${maru.name} 곁을 떠나지 않을게.`,
    );
    await me.say_and_wait(
      `그러니까 나랑 ${maru.name}가 함께 멋진 추억을 만들 수 있게 해 줘. 부탁이야!`,
    );
    await maru.say_and_wait(`어머, 이건 무슨 새로운 고백 방식이니?`);
    await maru.say_and_wait(
      `이 ${maru.get_bigger_sibling_sex_title()}도 조~금 설레버렸는걸.`,
    );
    await maru.say_and_wait(`그렇다면 ${callname}, 절대 내 곁에서 떨어지면 안 돼?`);
    await era.printAndWait(
      `공연에 초청받은 ${maru.get_uma_sex_title()}이 화려한 의상을 입고 무대 위로 뛰어올랐다. 조명이 ${maru.sex}의 몸에 집중되었고, 그녀는 해변에서 가장 빛나는 존재가 되었다.`,
    );
    await me.say_and_wait(`${maru.name}?`);
    await era.printAndWait(
      `${maru.sex}의 동작은 유려하여 마치 파도를 떠올리게 했다. 민속풍 반주가 깊은 바닷속에서 육지로 올라와 춤추는 요정처럼 그를 돋보이게 했다.`,
    );
    await me.say_and_wait(`${maru.name}!`);
    await maru.say_and_wait(`응? ${callname}, 왜 그래?`);
    await era.printAndWait(
      `갑자기 커진 ${me.name}의 목소리에 깜짝 놀란 ${maru.get_teen_sex_title()}이(가) 의아한 눈빛으로 ${me.name}을(를) 바라보았다.`,
    );
    await era.printAndWait(`${me.name}의 결정은...`);
    era.printButton(`「${maru.name}, 나에게 너의 고통과 슬픔을 말해 줘.」`, 1);
    await era.input();
    await maru.say_and_wait(`……`);
    await era.printAndWait(
      `무대 위의 ${maru.get_teen_sex_title()}는 혼신의 힘을 다하고 있었고, 그가 흘린 땀방울은 파도처럼 물결쳤다.`,
    );
    await era.printAndWait(
      `관객들은 기대 섞인 눈빛으로 무대 위에서 빛나는 아이돌에게 정신이 팔려 있었다.`,
    );
    await era.printAndWait(
      `그 와중에 ${maru.name}는 시종일관 불안한 침묵을 지키고 있었다.`,
    );
    await me.say_and_wait(`지금이 가장 중요한 순간이야.`, true);
    await me.say_and_wait(`무슨 일이 있어도 인내심을 가져야 해.`, true);
    await era.printAndWait(
      `무대 위의 우마무스메는 회전하고 도약할 때마다 관객들의 마음을 사로잡았다.`,
    );
    await era.printAndWait(`관객들은 숨을 죽이며 결정적인 순간이 오기를 기다렸다.`);
    await maru.say_and_wait(`역시 ${callname}은 못 속이겠네?`);
    await era.printAndWait(
      `갑자기 관객들의 열렬한 박수와 환호성이 터져 나왔다.`,
    );
    await era.printAndWait(
      `쓰고 있던 미소라는 가면을 벗어 던진 채, ${maru.name}는 슬픔과 해방감이 교차하는 표정으로 ${me.name}을(를) 바라보았다.`,
    );
    await era.printAndWait(
      `고통조차 사라지고, 마비감 속에서 ${maru.get_teen_sex_title()}는 땀인지 눈물인지 모를 짠맛을 느꼈다.`,
    );
    await maru.say_and_wait(`……자, 장소를 옮겨서 얘기할까? ${me.actual_name}?`);
    await era.printAndWait(
      `수많은 관광객이 축제의 장으로 쏟아져 들어왔다. 오늘 밤은 이제부터가 시작이었다.`,
    );
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [20, 0, 0, 0, 0], undefined) || wait_flag;
    era.set('cflag:4:축제이벤트표시', 0);
  } else if (edu_weeks === 47 + 31) {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:4:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, ebj);
      return;
    }
await print_event_name('선택', maru);
    await era.printAndWait(`훈련이 끝난 후, ${me.name}은(는) ${maru.name}의 쪽지를 받았다.`);
    await maru.say_and_wait(
      `${callname}, 근처 신사로 좀 와줘. ${me.name}에게 할 말이 있어.`,
    );
    await era.printAndWait(
      `설마 그 전형적인 고백 장면인가? 짐을 챙긴 ${me.name}은(는) 신속하게 출발했다.`,
    );
    await era.printAndWait(
      `기대와 즐거움, 그리고 망각을 바라는 인파를 거슬러, ${me.name} 일행은 산책하듯 근처의 신사에 도착했다.`,
    );
    await era.printAndWait(
      `즐거운 여운이 채 가시지 않은 채, 관광객들의 시선은 마을 중심의 무대로 쏠려 있었다.`,
    );
    await era.printAndWait(`외진 곳이라고 한다면 이곳보다 더 외진 곳도 있겠지만,`);
    await era.printAndWait(
      `이곳은 너무 고요해서 두렵지도, 너무 시끌벅적해서 불안하지도 않은 적당한 곳이었다.`,
    );
    await maru.say_and_wait(`세 여신님, 부디 제 이야기를 들어주세요.`);
    await era.printAndWait(
      `새전함에 던져진 동전이 부딪히는 맑은 소리와 동시에 ${maru.name}의 기도가 시작되었다.`,
    );
    era.printButton(`「동전을 넣는다」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}의 동작을 흉내 내며, 눈을 감고 세 여신에게 기도했다.`,
    );
    era.printButton(`「세 여신님, 부디 고통받는 자를 인도하소서」`, 1);
    era.printButton(`「세 여신님, 부디 방황하는 자를 인도하소서」`, 2);
    await era.input();
    await era.printAndWait(
      `소원을 빈 뒤, ${me.name}은(는) 옆에 서 있는 ${maru.get_teen_sex_title()}를 바라보았다.`,
    );
    await era.printAndWait(
      `${maru.sex}는 새전함을 뚫어지게 응시하고 있었다—— 아니, ${
        maru.sex
      }는 그 미지의, 아주 먼 곳을 바라보고 있었다.`,
    );
    await me.say_and_wait(`${maru.name}, 울고 있는 건가?`, true);
    await say_by_passer_by(`무녀`, `정말 죄송합니다. 오늘 인연 부적은 이미 다 나갔어요.`);
    await era.printAndWait(
      `잠시 후, 눈을 비비며 하품을 하는 무녀가 공연을 관람하던 인파 속에서 뒤늦게 나타났다.`,
    );
    await say_by_passer_by(`무녀`, `……괜찮으시다면 두 분, 이걸 받아주시겠어요?`);
    await era.printAndWait(
      `무언가 깨달은 듯, 무녀는 소맷자락 안에 꿰매둔 작은 주머니에서 부적을 꺼냈다.`,
    );
    await me.say_and_wait(`정말 감사합니다.`);
    await say_by_passer_by(`무녀`, `감사의 말은 아름다운 여신님께.`);
    await say_by_passer_by(`무녀`, `축복의 말은 인자하신 여신님께.`);
    await say_by_passer_by(`무녀`, `해방의 말은 자애로운 여신님께.`);
    await me.say_and_wait(`해방인가?`, true);
    await maru.say_and_wait(`축복이라…… 세 여신님, 감사합니다.`, true);
    await say_by_passer_by(`무녀`, `세 여신님들이여, 이 세계에 아름다움과 희망을 가져다주소서.`);
    await say_by_passer_by(`무녀`, `사랑스러운 분들, 세 여신이 당신들과 함께하기를.`);
    await era.printAndWait(
      `무녀는 축복의 말을 건네며 ${me.name} 일행에게 부적을 건네주었다.`,
    );
    await era.printAndWait(
      `재빨리 무녀로부터 부적을 받아 답례하는 ${me.name}과(와) 달리, ${maru.name}은 부적을 받은 뒤 소중하게 휴대용 가방에 넣었다.`,
    );
    await era.printAndWait(`그리고——`);
    await maru.say_and_wait(`역시 ${callname}은 못 속이겠네.`);
    await era.printAndWait(
      `분위기의 변화를 감지한 듯, 무녀는 오른손으로 한적한 오솔길을 가리키고는 자리를 떠났다.`,
    );
    await era.printAndWait(
      `나막신이 지면과 부딪히며 내는 소리가 점점 작아지더니, 이내 이곳에는 멀리서 들려오는 북소리와 관중들의 환호성만이 남았다.`,
    );
    await me.say_and_wait(
      `이제 여기엔 우리 둘뿐이야. 지금부터 하는 이야기는 세 여신님 말고는 아무도 듣지 못할 거야.`,
    );
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}의 얼굴을 바라보았다. 그녀는 마침내 고민에서 해방된 듯 몸을 미세하게 떨고 있었다.`,
    );
    await maru.say_and_wait(`어디서부터 말하는 게 좋을까. 사실, 그날 밤 나도 그 자리에 있었어.`);
    await me.say_and_wait(`뭐라고?!`);
    await era.printAndWait(
      `${me.name}의 등 뒤로 한기가 엄습했다. 다리가 후들거려 당장이라도 뒤돌아 도망치고 싶었지만, 남은 이성이 스스로에게 말했다. 인간은 절대 ${maru.get_uma_sex_title()}를 이길 수 없다고.`,
    );
    await era.printAndWait(
      `하물며, 그 ${maru.get_uma_sex_title()} 중에서도 톱 클래스인 ${maru.name}이다.`,
    );
    await maru.say_and_wait(
      `역시 내가 생각한 대로야. 그날의 ${
        callname
      }은 어딘가 이상했고, 자꾸 무의식적으로 시계를 확인했었지.`,
    );
    await maru.say_and_wait(`그때, 그 짜증 나는 직감이 발동해버린 거야.`);
    await era.printAndWait(
      `${maru.name}는 ${me.name}이(가) 본 적 없는 가면을 쓴 듯, 무표정한 얼굴로 이야기를 이어갔다.`,
    );
    await maru.say_and_wait(
      `저녁 식사 후에 아파트에 돌아갔다고는 했지만, 사실은 근처 주차장에 타치를 잠시 세워두고 각력으로 트레센에 돌아왔었어.`,
    );
    await era.printAndWait(
      `배신자, 짐승, 죄인…… 뇌리에는 ${maru.name}와 맺었던 약속이 떠올랐다.`,
    );
    await me.say_and_wait(`내가 무슨 낯짝으로 ${maru.sex}를 보겠어?`, true);
    await era.printAndWait(
      `그 생각을 하자 머릿속이 하얘졌고, 입술은 무의식적으로 꽉 깨물렸으며 위장이 뒤틀리는 듯한 불쾌한 메스꺼움이 올라왔다.`,
    );
    await maru.say_and_wait(
      `${
        callname
      }은 들키지 않도록 주의를 기울였긴 하지만, 경계 상태에 들어간 ${maru.get_uma_sex_title()}는 아주 작은 소리조차 놓치지 않거든.`,
    );
    await maru.say_and_wait(
      `저 멀리서 ${
        callname
      }이 당황한 기색으로 교사 안으로 들어가는 걸 보고, 1층에서 목소리가 들릴 때까지 인내심 있게 기다렸다가 위치를 특정했지.`,
    );
    await me.say_and_wait(`……`);
    await era.printAndWait(`${me.name}은(는) 입을 뻥긋거렸지만, 아무 말도 나오지 않았다.`);
    await era.printAndWait(
      `마치 1초가 1년처럼 느껴지는 감각. 당장 도망치고 싶었지만, 납을 채운 듯 무거운 다리가 바닥에 단단히 박혀 있었다.`,
    );
    await maru.say_and_wait(
      `정말이지, 만약 ${
        callname
      }이 나와 축제에 가기로 약속하지 않았다면, 난 모든 게 끝날 때까지 모르는 척해주려고 했었는데.`,
    );
    await era.printAndWait(
      `말투에는 가벼운 기운이 섞여 있었지만, 미소 하나 없는 얼굴로 ${maru.name}는 ${me.name}을(를) 뚫어지게 쳐다봤다.`,
    );
    await maru.say_and_wait(
      `하지만 ${callname}이 이미 결심을 굳혔다면, 나도 그에 합당한 존중을 해줘야겠지.`,
    );
    await maru.say_and_wait(`자, ${callname}. 이제 ${me.name} 차례야.`);
    await era.printAndWait(
      `인류 원초의 공포가 ${me.name}의 두뇌를 풀가동시켰다. ${me.name}의 결정은.`,
    );
    era.printButton(`「물러서지 않겠어」`, 1);
    era.printButton(`「미안해」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`……`);
      await era.printAndWait(`${me.name}은(는) 망설임 없이 ${maru.name}의 눈을 정면으로 받아냈다.`);
      await maru.say_and_wait(
        `${me.actual_name}, ${me.name}은(는) 부디 내가 만족할 만한 답을 내놓길 바랄게.`,
      );
      await era.printAndWait(
        `${maru.name}의 귀가 천천히 뒤로 누웠고, 말투에는 조급함이 섞이기 시작했다.`,
      );
      await me.say_and_wait(`한 걸음만 잘못 내디디면 낭떠러지야.`);
      await era.printAndWait(
        `거세게 뛰는 심장을 억지로 진정시키자, 마치 자신이 아닌 것처럼 냉정해졌다.`,
      );
      await era.printAndWait(
        `스스로도 왜 무의식적으로 거절했는지 확실히는 알 수 없었다.`,
      );
      await era.printAndWait(
        `하지만 ${me.name}은(는) 알고 있었다. 지금은 절대 타협해서는 안 된다는 것을. ${me.name}은(는) ${maru.name}와 소꿉놀이를 하러 온 게 아니다. 자신의 의지를 보여줘야만 한다.`,
      );
      await era.printAndWait(
        `본론으로 돌아가서, ${maru.name}가 신경 쓰는 것은 무엇인가? 그녀를 고통스럽게 하는 것이 맹세를 배신한 것 말고 또 무엇이 있는가?`,
      );
      await me.say_and_wait(
        `난 ${me.name}을(를) 아이돌의 신좌에서 끌어내리러 온 거야, ${maru.name}.`,
      );
      await era.printAndWait(
        `${maru.name}가 의도적이든 아니든 자신의 영역을 조금 흘리자, ${me.name}은(는) 경기장에서 ${maru.get_uma_sex_title()}들이 느꼈을 법한 공포를 체감했다.`,
      );
      await me.say_and_wait(
        `아이돌이란 게 뭐야? 타인에게 숭배받고, 운명을 기탁받고, 다른 이들이 자신의 뒤를 보고 전진하게 하기 위해서라고는 하지만, 사실 ${maru.name}는 무척이나 오만해.`,
      );
      await me.say_and_wait(
        `${maru.name}는 수많은 이들의 희망을 짊어진 그 천근만근의 무게를 정말 감당할 수 있다고 생각해?`,
      );
      await me.say_and_wait(`나조차도 세상에 완벽한 사람은 없다는 걸 알아.`);
      await me.say_and_wait(`사람이라면 반드시 실수하고, 반드시 잘못된 선택을 해.`);
      await me.say_and_wait(
        `실수는 피할 수 없어. 슬픔과 고통을 겪은 뒤에야 소중함을 더 잘 알게 되는 법이지.`,
      );
      await me.say_and_wait(`하지만 ${maru.name}.`);
      await me.say_and_wait(
        `비록 고민하는 ${maru.get_uma_sex_title()}들을 돕는 다정한 ${maru.get_bigger_sibling_sex_title()} 역할을 하고 있지만 말이야.`,
      );
      await me.say_and_wait(
        `뒷수습을 제대로 하지 않았어. ${maru.get_uma_sex_title()}들이 ${maru.name}를 모든 문제로부터 도망치기 위한 피난처로 삼고 있다는 걸 전혀 깨닫지 못했단 말이야.`,
      );
      await me.say_and_wait(
        `그렇게 ${maru.get_uma_sex_title()}들에게 멋대로 희망을 맡겨지고, 또 그렇게 멋대로 배신당했다고 생각한 ${maru.get_uma_sex_title()}들에게 증오를 사고 있어.`,
      );
      await me.say_and_wait(
        `그 ${maru.get_uma_sex_title()}들은 입으로는 ${maru.name}의 뒷모습을 아이돌로서 보고 있다고 하지만, 실제로는 ${maru.name}를 신처럼 숭배하고 있다고.`,
      );
      await me.say_and_wait(
        `${maru.name}가 의도한 것도 아니고 그런 생각을 한 적도 없겠지만, 비극은 그렇게 탄생하는 거야.`,
      );
      await me.say_and_wait(
        `그러니까, 제발 그 신좌에서 내려와 줘. 이건 나 자신을 위한 부탁이 아니라, 지옥으로 향하는 편도 열차를 보고서 ${maru.name}를 붙잡으려는 거야.`,
      );
      await era.printAndWait(
        `${me.name}의 생각은 아랑곳하지 않고, 가슴 속에 억눌러왔던 생각을 단숨에 쏟아냈다.\n`,
      );
      await maru.say_and_wait(
        `그럼 ${me.name}의 해결책은 뭔데? 세상엔 문제를 발견하는 사람은 많지만, 한 걸음 더 나아가 해결하는 사람은 언제나 부족해.`,
      );
      await maru.say_and_wait(`게다가, 결국 이건 다 ${me.name}의 일방적인 주장이잖아?`);
      await maru.say_and_wait(
        `이게 ${me.name}이(가) 공포 때문에 지어낸 헛소리가 아니라는 걸 누가 알아?`,
      );
      era.printButton(
        `내가 ${maru.name}에게 미움받을 위험을 무릅쓴 것처럼, ${maru.name}도 내가 왜, 누구를 위해 위험을 감수하고 있는지 알 텐데!`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `말을 이어가려던 ${maru.name}은(는) ${me.name}의 외침에 말을 멈췄다.`,
      );
      await me.say_and_wait(
        `난 후배들의 엄청난 희망과 기대를 짊어져 본 경험은 없지만, ${maru.name}가 그들을 도운 건 사랑 때문이라는 걸 알아.`,
      );
      await me.say_and_wait(
        `몸이 부서지고 돌이킬 수 없는 지경이 되더라도 그들을 돕고 싶어 하는, 바로 그 사랑이라는 것 때문에!`,
      );
      await me.say_and_wait(`그래서 난 ${maru.name}가 자신의 길을 가는 걸 막지 않을 거야.`);
      await era.printAndWait(
        `영역을 정면으로 마주한 건 처음이었지만, 가슴 속 형언할 수 없는 따스함과 열정이 ${me.name}이(가) 하여금 그녀의 눈을 응시하게 했다.`,
      );
      await me.say_and_wait(`내면의 슬픔, 미래에 대한 방황…… 내가 조금만 나눠 가져도 될까?`);
      await me.say_and_wait(
        `한 치 앞도 보이지 않는 어둠 속에서 혼자 나아갈 때, 앞을 비춰주는 등불 하나만 있어도 좋잖아.`,
      );
      await me.say_and_wait(
        `나에게 맡겨줘. 트레이너로서는 평범할지 몰라도, 한 줄기 등불로서는 잘해낼 자신이 있으니까.`,
      );
      await me.say_and_wait(`난 조금씩, 천천히, 타인을 위해 죽어갈 거야.`);
      await era.printAndWait(
        `그러자 ${me.name}은(는) ${maru.sex}의 기세가 서서히 흩어지며 작아지는 것을 보았다.`,
      );
      await era.printAndWait(`결국, ${maru.name}는 자책하듯 한숨을 내쉬었다.`);
      event_marks.wind++;
      wait_flag =
        get_attr_and_print_in_event(4, [20, 20, 20, 20, 20], undefined) ||
        wait_flag;
    } else {
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `1년처럼 길게 느껴지는 시간 동안, ${me.name}은(는) 죄인을 심문하는 듯한 ${maru.name}의 시선에 묶여 있었다. 결국, ${
          maru.sex
        }는 시선을 거두었다.`,
      );
      await maru.say_and_wait(`그럼, 앞으로도 잘 부탁해♪`);
      await era.printAndWait(
        `아무 일도 없었다는 듯, ${maru.sex}는 미소를 지으며 ${me.name}에게 손을 내밀었다.`,
      );
      await me.say_and_wait(`잘 부탁드립니다.`);
      await era.printAndWait(
        `${maru.sex}는 여전히 부드러운 말투였지만, ${me.name}은(는) 알고 있었다——`,
      );
      await era.printAndWait(
        `무언가 따끈따끈한 것이 어둠 속으로 자신의 영혼과 함께 휩쓸려 내려가고 있음을.\n`,
      );
      await era.printAndWait(`그리고, 마침내 끝났다.`);
      await era.printAndWait(`남은 것은 정적뿐이었다.`);
      event_marks.broken_tears++;
      era.set('flag:강제배드엔딩', 4);
    }
  } else if (edu_weeks === 47 + 40) {
    era.set('cflag:4:축제이벤트표시', 0);
    await print_event_name(`할로윈`, maru);
    await era.printAndWait(`심해 속에서 깨어난 당신의 눈앞에는 어둠 말고는 아무것도 보이지 않았다.`);
    await era.printAndWait(
      `의외로 여전히 자유롭게 숨을 쉴 수 있었고, 자신의 심장 박동도 느껴졌다.`,
    );
    await era.printAndWait(`출구는 어디지? 난 어떻게 해야 하지? 나 이대로 죽는 건가?`);
    await era.printAndWait(
      `그런 질문들이 머릿속을 맴돌며 내 의식을 집어삼키려 했다.`,
    );
    await era.printAndWait(`그때, 소맷자락에 차가운 마찰감이 느껴졌다.`);
    await era.printAndWait(
      `마치 당신을 강제로 전진시키려는 듯, 당신은 바람에 실려 심해를 벗어나 하늘로 날아올랐다.`,
    );
    era.printButton(`「으으, 또 악몽인가.」`, 1);
    await era.input();
    await era.printAndWait(`악몽에서 깨어나니 이미 등 뒤가 축축하게 젖어 있었다.`);
    await me.say_and_wait(`왜일까?`, true);
    await era.printAndWait(
      `이른 아침의 햇살이 커튼 사이로 스며들어 베개 위를 비추고 있었다. 빛줄기 덕분에 평소엔 보이지 않던 먼지들조차 반짝거렸다.`,
    );
    await me.say_and_wait(`검은 바다, 언제부턴가 불어온 바람, 그리고 누군가의 존재.`, true);
    await era.printAndWait(
      `방금 전의 조각난 기억들을 필사적으로 떠올리려 애썼다. 왠지 이 일이 무척 중요하다는 느낌과 함께 막연한 불안감이 엄습했다.`,
    );
    await me.say_and_wait(`앞으로는 이런 B급 영화는 보지 말아야겠어.`, true);
    await era.printAndWait(
      `이런 이상한 일에 유난히 진지해진 자신이 우스워 고개를 흔들고는 옷을 입을 준비를 했다.`,
    );
    await maru.say_and_wait(`똑똑똑.`);
    await era.printAndWait(`문 밖에서 노크 소리가 들렸다.`);
    if (era.get('love:4') >= 75) {
      await maru.say_and_wait(`하이루～ ${callname}, 일어났니?`);
      await me.say_and_wait(`금방 나갈게.`);
      await me.say_and_wait(`${maru.name}의 집에서 지내는 게 벌써 익숙해진 건가.`, true);
      await era.printAndWait(`이불을 개고 옷을 입으며 일과를 준비했다.`);
    } else {
      await maru.say_and_wait(`하이루～ ${callname}, 좋은 아침?`);
      await era.printAndWait(`${maru.name}는 평소처럼 트레이닝실로 찾아왔다.`);
    }
    await era.printAndWait(`새로운 하루가 시작되었다.`);
    era.drawLine();
    await era.printAndWait(
      `마지막 서류를 폴더에 넣는 것으로 오늘 일정은 대강 마무리되었다.`,
    );
    await maru.say_and_wait(`수고했어.`);
    await era.printAndWait(`옆에 앉아 있던 ${maru.name}가 커피를 책상 위에 놓아주었다.`);
    await me.say_and_wait(`고마워.`);
    await era.printAndWait(
      `비싼 브랜드는 아니었다. 그냥 가게에서 흔히 파는 그런 인스턴트 커피였다.`,
    );
    await era.printAndWait(
      `예전에 품질 좋은 커피나 홍차를 마셔본 적도 있지만, 역시 입에 잘 맞지 않았다.`,
    );
    await era.printAndWait(
      `결국 편의점 커피야말로 세 여신이 인류에게 내린 보물이라며 스스로를 위로할 뿐이었다.`,
    );
    await maru.say_and_wait(`${callname}, 오늘 밤에 무슨 계획 있어?`);
    await era.printAndWait(`기지개를 켜며 ${maru.name}가 소파에서 일어났다.`);
    await me.say_and_wait(`계획?`);
    await era.printAndWait(`머릿속으로 빠르게 훑어봤지만, 놓친 일은 없는 것 같았다.`);
    await me.say_and_wait(`일단은 스태미나 강화 트레이닝을 준비할까 하는데?`);
    await era.printAndWait(`장거리 레이스에 나가려면 스태미나는 정말 중요하니까.`);
    await maru.say_and_wait(
      `정말 못 말려. 스태미나 훈련도 물론 중요하지만, ${callname} 혹시 잊은 거 없어?`,
    );
    await me.say_and_wait(`……?`);
    await maru.say_and_wait(
      `작년에 같이 할로윈 퍼레이드에 가기로 약속했었잖아. 설마 잊은 건 아니겠지?`,
    );
    await era.printAndWait(
      `어리둥절해하는 ${me.actual_name}을(를) 보며, ${maru.name}는 결국 직접 말을 꺼냈다.`,
    );
    await me.say_and_wait(`아, 확실히 그런 말을 했던 것 같네.`, true);
    await era.printAndWait(
      `휴대폰 메모장을 열어 한참을 내리고서야 발견했다. 작년 할로윈 밤에 기록해둔 약속이었다.`,
    );
    await me.say_and_wait(`나 정말 건망증이 심하구나.`);
    await era.printAndWait(
      `더 중요한 일들이 많아서 우선순위가 낮은 일은 잠시 밀려났던 걸까.`,
    );
    await maru.say_and_wait(`${callname}?`);
    await me.say_and_wait(`같이 가자.`);
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}의 오른손을 살며시 잡고 앞장서서 트레이닝실을 나섰다.`,
    );
    await maru.say_and_wait(`그럼 할로윈 축제에서 가볍게 분위기나 내볼까♪`);
    await era.printAndWait(
      `바람에 흩날리는 머리카락을 따라 ${maru.name}의 맑은 웃음소리가 트레이닝실에 즐거운 기운을 전했다.`,
    );
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 48) {
    await print_event_name('크리스마스', maru);
    await era.printAndWait(
      `벌써 12월인가. ${me.name}은(는) 펜을 멈추고 창밖의 눈송이를 바라보았다.`,
    );
    await era.printAndWait(`트레센의 이 시기는 매년 유난히 춥단 말이지.`);
    await era.printAndWait(
      `${me.name}은(는) 고개를 가로저으며 다시 서류에 집중하려던 찰나.`,
    );
    await maru.say_and_wait(`흥흥흥♪`);
    await maru.say_and_wait(`하이루———— ${callname}.`);
    await era.printAndWait(
      `문고리가 돌아가며, ${me.name}을(를) 설레게 하는 그 ${maru.get_teen_sex_title()}가 문을 열고 들어왔다.`,
    );
    await maru.say_and_wait(
      `${callname}은 축제 날에도 쉬지 않네. 난 이렇게 노력하는 ${
        era.get('cflag:4:성별') - 1 ? '예쁜이' : '멋쟁이'
      }가 참 좋더라♪`,
    );
    await era.printAndWait(
      `갑자기 들이닥친 ${maru.name} 때문에 깜짝 놀라 펜을 바닥에 떨어뜨렸다. 허겁지겁 펜을 주운 ${me.name}은(는) 짐짓 퉁명스럽게 대꾸했다.`,
    );
    era.printButton(`「${maru.name}, 나랑 데이트라도 하려는 거야?」`, 1);
    await era.input();
    await era.printAndWait(`의외로 ${maru.name}는 더 기뻐 보였다.`);
    await maru.say_and_wait(
      `후후～ ${callname}이 그렇게 나랑 데이트하고 싶었어? 어머나♪ 이 ${
        era.get('cflag:4:성별') - 1 ? '예쁜이' : '멋쟁이'
      }의 매력이 정말 대단하긴 한가 봐⭐`,
    );
    await maru.say_and_wait(`그럼 ${callname}이 먼저 초대했으니까, 지금 당장 출발하자!`);
    era.drawLine();
    await maru.say_and_wait(`어머, ${callname}과 이렇게 보도를 걷는 것도 나쁘지 않네.`);
    era.printButton(`「아아…… 정말 눈부셔」`, 1);
    await era.input();
    await era.printAndWait(
      `겨울옷으로 갈아입은 ${maru.name}와 거리를 걷는다. 본래 아름다운 ${
        maru.sex
      }였지만, 정성껏 고른 옷을 입은 그녀의 독특한 아우라는 ${me.name}의 마음을 사로잡기에 충분했다.`,
    );
    await era.printAndWait(
      `관광객 A: 저분 ${maru.name} 아니야? TV에서 달리는 거 본 적 있어.`,
    );
    await era.printAndWait(
      `관광객 B: 마루젠스키다! 저 팬이에요! 제발 사인 좀 해주세요!`,
    );
    await maru.say_and_wait(`어머나, 나 벌써 이렇게 유명해진 거야?`);
    await era.printAndWait(`안 좋네, 점점 더 많은 사람이 그녀를 알아보고 몰려들기 시작했다.`);
    await era.printAndWait(`${maru.name}의 매력은 상관없는 일반인들까지 끌어들이고 있었다.`);
    era.printButton(
      `(다른 사람들이 ${maru.name}와의 오붓한 시간을 방해하게 둘 순 없지)`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}의 따뜻해진 작은 손을 꽉 잡고, 팬들을 따돌리기 위해 발걸음을 재촉했다.`,
    );
    await maru.say_and_wait(`……후훗♪`);
    await era.printAndWait(
      `끈질기게 따라붙던 팬 무리를 겨우 따돌리고 나서야, 두 사람은 시중심 공원에 도착했다는 걸 깨달았다.`,
    );
    await era.printAndWait(
      `숨을 헐떡이는 ${me.name}과(와) 달리, 우마무스메인 ${
        maru.sex
      }는 호흡 하나 흐트러지지 않은 모습이었다.`,
    );
    await era.printAndWait(`————평소 훈련에 비하면 이건 에피타이저 수준도 안 된다.`);
    await me.say_and_wait(`하아…… 하아…… 이제야 따돌린 것 같네.`, true);
    await maru.say_and_wait(`${callname}, 여기 참 조용하다.`);
    await era.printAndWait(
      `서로 얽힌 LED 조명이 가로수들을 감싸며, 두 사람의 등 뒤에서 앞을 향해 무한히 뻗어 나가고 있었다.`,
    );
    await era.printAndWait(
      `색색의 전구들이 크리스마스 밤을 밝히며, 12월의 차가운 바람 속에 따스함과 빛을 더해주었다.`,
    );
    era.printButton(`「그러게, 정말 데이트하기 딱 좋은 장소네.」`, 1);
    await era.input();
    await maru.say_and_wait(
      `크리스마스 이브잖아, 트레이너 ${me.get_adult_sex_title()}♪ …… 가장 좋아하는 사람과 함께 흐르는 시간을 나누고 싶지 않아?`,
    );
    await me.say_and_wait(`그렇게까지 말하는데 여기서 한 발짝 더 나아가지 않는 건 실례지!`);
    await maru.say_and_wait(`흐흥～ 그래서 ${callname}의 대답은?`);
    era.printButton(`${maru.name} ${me.get_adult_sex_title()}, 저와 데이트해주세요!`, 1);
    await era.input();

    await maru.say_and_wait(
      `어머나～ ${callname} 제법 용기 있는데? 그 기세에 눌려 바로 대답해주고 싶긴 하지만————`,
    );
    await era.printAndWait(`방금 전 뛰어오느라 ${me.name}의 머리카락이 엉망이 되어 있었다.`);
    await maru.say_and_wait(
      `${callname} 참 귀엽네. 데이트하기 전에 머리부터 좀 정리해야겠어.`,
    );
    era.printButton(`「어, 어어.」`, 1);
    await era.input();

    await era.printAndWait(
      `${me.name}이(가) 대답하기도 전에 ${maru.name}는 가방에서 빗을 꺼냈다.`,
    );
    await maru.say_and_wait(`${callname}, 고개 좀 숙여봐.`);
    await era.printAndWait(`${me.name}은(는) 그녀의 말에 순순히 고개를 숙였다.`);
    await maru.say_and_wait(
      `음…… ${me.name} 머릿결이 좀 푸석푸석하네. 고생이 많구나.`,
    );
    await era.printAndWait(
      `${maru.sex}는 최대한 힘을 빼고 다정하게 ${
        me.name
      }의 머리를 빗어주었다. 그 따스하고 그리운 향기는 ${
        me.name
      }에게 어릴 적 풀밭에서 햇볕을 쬐던 기억을 떠올리게 했다.`,
    );
    await maru.say_and_wait(
      `……이 정도면 됐다♪ 그럼 ${callname}, 오늘 데이트 잘 부탁할게.`,
    );
    era.printButton(`「나야말로 잘 부탁해.」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}의 왼손을 꼭 잡고, 천천히 이 짧고 달콤한 시간을 만끽했다.`,
    );
    await maru.say_and_wait(`그러고 보니 여기가 이번 주 가장 인기 있는 커플 명소라나 봐.`);
    era.printButton(`「어쩐지 오는 길에 온통 커플들뿐이더라니.」`, 1);
    await era.input();

    await maru.say_and_wait(`후훗♪ 다음 크리스마스에도 여기로 풍경 보러 오자.`);
    await maru.say_and_wait(`${callname}, 그때는 풍경이 지금보다 훨씬 더 아름다울 거야.`);
    await era.printAndWait(
      `12월의 찬 바람이 마치 ${me.name}과(와) ${maru.name} 사이의 친밀한 관계를 축복하는 듯했다.`,
    );

    if (
      event_marks.wind === 15 &&
      event_marks.sister_annoyance === 2 &&
      event_marks.girls_blue === 3
    ) {
      new EduEventMarks(4).add('good_end');
    } else if (
      event_marks.wind >= 10 &&
      event_marks.wind < 15 &&
      event_marks.sister_annoyance === 2 &&
      event_marks.girls_blue === 3
    ) {
      new EduEventMarks(4).add('true_end');
    }
    era.set('cflag:4:축제이벤트표시', 0);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], undefined) || wait_flag;
} else if (edu_weeks === 95 + 6) {
    await print_event_name('발렌타인데이', maru);
    await maru.say_and_wait(`자, 이건 ${callname}을 위한 거야.`);
    await era.printAndWait(
      `${me.name}의 제안에 따라, 올해 발렌타인 데이에 ${me.name}들은 트레이닝실에서 둘이서만 파티를 열기로 했다.`,
    );
    era.printButton(`「고마워」`, 1);
    await era.input();
    await era.printAndWait(
      `장식으로 매여 있던 리본을 살며시 풀고, 핸드백 모양의 초콜릿 상자를 열었다.`,
    );
    await era.printAndWait(
      `액상 초콜릿이 가득 담긴 튤립 잔에 생크림이 층을 이루고, 그 위에는 진한 딸기 시럽과 장식용 체리, 민트 잎, 그리고 산딸기가 곁들여져 있었다.`,
    );
    await era.printAndWait(
      `컵 부분에 묶인 검은색 리본은 은은한 핑크빛 배경과 어우러져 묘한 분위기를 풍겼다.`,
    );
    await maru.say_and_wait(
      `그동안은 무엇을 위해 달리는지 계속 고민해 왔지만, 이제는 달려야 할 이유가 하나 더 늘었어.`,
    );
    await maru.say_and_wait(`앞으로도 계속 곁에서 지탱해 줄 거지? ${callname}은`);
    era.printButton(`「그럼 감사히 받을게. 고마워, ${maru.name}」`, 1);
    await era.input();
    await maru.say_and_wait(
      `아, 맞다! 스페${maru.sex_code - 1 ? '짱' : '군'}네한테 들었는데, 백화점에 있는 어떤 가게에서 발렌타인 때 커플끼리 사진을 찍어서 인증하면 40%나 할인해 준대.`,
    );
    await era.printAndWait(`${callname}은 관심 있어?`);
    era.printButton(`「문제없지」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}과(와) ${maru.name}는 백화점에 도착했고, 잠시 찾아다닌 끝에 그 가게를 발견했다.`,
    );
    await era.printAndWait(
      `이번 주의 핫플레이스인지, 가게 앞에는 긴 줄이 늘어서 있었고 전부 커플인 듯 보였다.`,
    );
    await maru.say_and_wait(
      `사람 정말 많네. 스페${maru.sex_code - 1 ? '짱' : '군'}네들 말이 정말 맞았나 봐. 여기가 분명해.`,
    );
    await era.printAndWait(`그럼 우리도 가서 줄을 서자.`);
    await era.printAndWait(
      `${maru.name}는 ${me.name}의 팔짱을 끼며 커플들 사이에 섞여 들었다.`,
    );
    await era.printAndWait(`점원: 두 분 손님, 커플 특혜 세트를 구매하실 건가요?`);
    await era.printAndWait(
      `점원: 하지만 할인이 된다는 소문을 듣고 이득만 챙기려는 손님들이 많이 오셔서, 정작 사고 싶어 하는 진짜 커플들이 못 사는 경우가 생기더라고요.`,
    );
    await era.printAndWait(
      `점원: 저희도 참 고민이었는데, 결국 점장님이 좋은 아이디어를 내셨답니다.`,
    );
    await era.printAndWait(`점원: 자, 두 분의 낭만적인 키스를 보여주세요.`);
    era.printButton(`「키.. 키스?!」`, 1);
    await era.input();

    await era.printAndWait(
      `점원: 키스는 낭만적인 일이잖아요? 파트너에 대한 사랑을 표현할 수 있을 뿐더러, 이득만 보려던 사람들은 키스를 해야 한다는 말에 다들 도망가 버렸거든요.`,
    );
    await era.printAndWait(`점원: 진짜 커플이라면 부끄러워할 것 없잖아요?`);
    await era.printAndWait(
      `점원의 날카로운 시선에 ${me.name}의 압박감은 점점 커져 갔다. ${me.name}이(가) ${
        maru.name
      }을(를) 바라보자, ${maru.sex}는 애써 침착한 척하고 있었지만 격렬하게 흔들리는 꼬리가 본심을 드러내고 있었다.`,
    );
    era.printButton(`「이렇게 할 수밖에 없겠네」`, 1);
    await era.input();
    await maru.say_and_wait(`${callname}?`);
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}의 허리를 감싸 안고 ${maru.sex}의 뺨을 어루만진 뒤, 마음을 굳게 먹고 입을 맞추었다.`,
    );
    await era.printAndWait(
      `처음에는 조심스러운 가벼운 입맞춤이었으나, 분위기가 고조됨에 따라 ${me.name}의 속도도 빨라졌고, 뜨거운 사랑은 이내 깊은 입맞춤으로 변했다.`,
    );
    await era.printAndWait(
      `${maru.sex}의 입술에서는 마치 사과 같은 향기가 났고, 그것은 채집자를 유혹하는 듯했다. ${
        me.name
      }은(는) 자신의 혀를 ${maru.sex}의 입안으로 밀어 넣어 구석구석을 세밀하게 탐했다.`,
    );
    await era.printAndWait(
      `${me.name}이(가) ${maru.name}의 혀에 닿으려 할 때마다, ${maru.sex}가 부끄러워하며 피하려 하는 모습이 오히려 ${me.name}의 정열을 더욱 자극했다.`,
    );
    await era.printAndWait(`더 이상 계속하면 안 된다고 생각하면서도 ${me.name}의 움직임은 멈추지 않았다.`);
    await era.printAndWait(
      `강렬한 자극으로 머릿속이 하얘지는 가운데, ${me.name}은(는) 이 순간을 영원으로 돌리고 싶다고 생각하며 행복을 느꼈다.`,
    );
    await maru.say_and_wait(`……${callname}`);
    await era.printAndWait(
      `점원: 우와, 정말 뜨거운 키스네요! 그럼 어서 안으로 들어가세요. 뒷손님들이 기다리겠어요.`,
    );
    await era.printAndWait(
      `뒤의 손님들을 신경 쓸 겨를도 없이, ${me.name}은(는) ${maru.sex}의 얼굴을 세상 유일한 보물인 양 소중하게 감싸 쥐었다.`,
    );
    await era.printAndWait(
      `${maru.sex}의 얼굴은 완전히 새빨개졌고, 격렬한 심장 고동이 밀착된 몸을 통해 ${
        me.name
      }에게도 전해졌다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) ${maru.sex}의 손을 잡고 비어 있는 좌석으로 향했다.`,
    );
    await maru.say_and_wait(`……`);
    await era.printAndWait(
      `두 사람은 침묵 속에 같은 파르페를 나누어 먹었으나, 떨리는 팔이 주인의 동요를 암시하고 있었다.`,
    );
    await era.printAndWait(
      `나중에 어떻게 사과해야 할까? ${maru.sex}가 이대로 나랑 절교하면 어떡하지? 공포와 기쁨이 ${me.name}의 뇌리에서 교차하던 중, 마지막으로 남은 생각은 하나였다.`,
    );
    era.printButton(
      `「${maru.name}가 나를 좋아하는지는 상관없어. 내가 ${maru.sex}를 좋아하니까.」`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `긴 고문 같은 시간 끝에 파르페 그릇이 바닥을 드러냈다. ${me.get_couple_title()}은) 말없이 가게를 나와 거리를 걷고, 제방을 지나 트레이닝실로 돌아왔다.`,
    );
    await maru.say_and_wait(`있지, ${callname}.`);
    await era.printAndWait(`갑자기 발걸음을 멈춘 ${maru.name}가 ${me.name}을(를) 껴안았다.`);
    await era.printAndWait(`입술에 닿는 촉촉한 감각이 파문처럼 퍼져 나갔다.`);
    await maru.say_and_wait(`앞으로도 잘 부탁해❤`);
    await era.printAndWait(
      `처음의 당혹감에서 회복한 ${me.name}은(는) 애써 어른스러운 여유를 유지하려는 ${maru.name}을(를) 바라보았다.`,
    );
    await era.printAndWait(
      `그런 ${maru.name}의 모습이 우습기도 했지만, 동시에 ${maru.sex}가 너무나도 사랑스러워 마치 비단실이 마음 위에 살며시 내려앉는 듯한 기분이 들었다.`,
    );
    era.printButton(`「참 기분이 묘하네.」`, 1);
    await era.input();
    await era.printAndWait(`별빛과 네온사인이 비치는 아래에서, 두 사람의 손은 꽉 맞잡혀 있었다.`);
    era.set('cflag:4:축제이벤트표시', 0);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 20, 0, 0, 0], undefined) || wait_flag;
  } else if (edu_weeks === 95 + 14) {
    await print_event_name('팬 대감사제', maru);
    await era.printAndWait(
      `오늘은 팬 대감사제. 우마무스메들이 팬들의 성원에 보답하기 위해 공연을 펼치는 날이다.`,
    );
    await era.printAndWait(
      `트레센 학원 곳곳에서 우마무스메들이 준비한 다양한 행사가 열리고 있었다.`,
    );
    await era.printAndWait(
      `모처럼 여유가 생긴 ${me.name}도 이 기회를 빌려 이곳저곳을 돌아다니며 쌓인 스트레스를 해소했다.`,
    );
    await era.printAndWait(
      `${me.name}의 담당 우마무스메인 ${maru.name}는 지금 후배들의 공연을 지켜보고 있었다.`,
    );
    await era.printAndWait(
      `발소리를 듣고 뒤를 돌아본 ${maru.name}는 ${me.name}을(를) 향해 부드러운 미소를 지었다.`,
    );
    await maru.say_and_wait(
      `${callname}도 우마무스메들의 공연을 보러 온 거야?`,
    );
    era.printButton(`「고개를 끄덕인다」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${
        maru.name
      }의 곁에 서서, 무대 위에서 최선을 다해 가장 아름다운 모습을 보여주려는 우마무스메들을 지켜보았다.`,
    );
    await maru.say_and_wait(
      `후배들이 다들 활기차 보여. ${callname}도 그렇게 생각하지?`,
    );
    era.printButton(
      `「저 아이들은 모두 ${maru.name}를 동경해서, ${
        maru.name
      }의 뒷모습을 뛰어넘고 싶어서 필사적으로 노력하는 거야.」`,
      1,
    );
    await era.input();
    await maru.say_and_wait(`어머나♪ ${callname}은 매번 나를 깜짝 놀라게 한다니까.`);
    await maru.say_and_wait(`그럼, ${callname}은 내가 무대에서 공연하는 걸 보고 싶어?`);
    await era.printAndWait(
      `${maru.name}의 꼬리가 어느샌가 ${me.name}의 허벅지를 휘감았다. 다행히 주변 관객들은 무대 열기에 취해 이 작은 움직임을 눈치채지 못했다.`,
    );
    await era.printAndWait(
      `${maru.name}는 ${me.name}의 약점을 파악한 듯, 더욱 과감하게 온몸을 ${me.name}의 팔에 밀착시켰다.`,
    );
    era.printButton(`「${maru.name}」`, 1);
    await era.input();
    await era.printAndWait(
      `둘 사이에 좋지 않은 소문이 돌아 ${
        maru.name
      }의 앞날에 지장이 생기거나 ${me.name}이(가) 해고당할지 모른다는 두려움에 ${me.name}의 몸은 순식간에 굳어버렸다.`,
    );
    await maru.say_and_wait(
      `${era.get('cflag:0:성별') - 1 ? '트·레·이·너·짱' : '트·레·이·너·군'}♪`,
    );
    await era.printAndWait(
      `${me.name}은(는) 주변의 모든 시선이 자신을 향하는 것만 같아 입안이 바짝바짝 마르기 시작했다.`,
    );
    await maru.say_and_wait(
      `${
        callname
      }의 이런 반응, 정말 귀엽네. 아쉽지만 슬슬 내 차례야. 나한테서 눈을 떼면 안 돼?`,
    );
    await era.printAndWait(`정신을 차려보니 ${maru.sex}는 이미 무대 위에 서 있었다.`);
    await era.printAndWait(
      `${me.name}은(는) 급히 주변 관광객에게 야광봉을 빌려 팬들의 물결에 맞춰 몸을 흔들기 시작했다.`,
    );
    await maru.say_and_wait(
      `바람을 즐기고, 바람을 쫓는 우마무스메, ${
        maru.name
      }. 지금부터 팬들과 후배들에게 내 노래를 바칠게.`,
    );
    await era.printAndWait(`해묵은 복고풍 노래를 부르는 오늘의 스타,`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], undefined) || wait_flag;
    era.set('cflag:4:축제이벤트표시', 0);
  } else if (edu_weeks === 95 + 29) {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:4:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(hook.hook, ebj);
      return false;
    }
    await print_event_name('여름 합숙 시작', maru);
    await era.printAndWait(
      `3년째 여름 합숙이 정식으로 시작되었다. 작년과는 사뭇 다른 마음가짐으로 ${me.name}과(와) ${maru.name}는 함께 모래사장으로 향했다.`,
    );
    await maru.say_and_wait(`후훗♪ 올해도 다른 애들을 다 따돌리고 제일 먼저 도착했네, ${callname}.`);
    await era.printAndWait(
      `곁에 있는 우마무스메는 여전히 다른 우마무스메들보다 앞서 해변에 도착하는 것을 즐기고 있었다.`,
    );
    await me.say_and_wait(`${maru.name}는 기분이 좋아 보이네.`);
    await maru.say_and_wait(
      `어머, 당연하지! 작년에 제대로 즐기지 못한 청춘을 올해 전부 보상받아야 하니까.`,
    );
    await era.printAndWait(
      `${maru.name}가 준비한 검은색 수영복은 ${maru.sex}의 몸매와 어우러져 각별한 매력을 뽐내고 있었다.`,
    );
    await me.say_and_wait(
      `평소의 ${maru.name}는 늦잠 자는 걸 좋아했는데, 오늘은 오히려 ${maru.name}가 나를 깨우러 왔었지.`,
    );
    await maru.say_and_wait(
      `아무튼 지금은 합숙을 만끽할 시간이야! 하지만 그전에 선크림부터 바르는 게 중요하겠지?`,
    );
    await maru.say_and_wait(
      `${callname}, ${
        me.name
      }이 나 대신 선크림 좀 발라줄래? 올해 여름은 예상보다 훨씬 뜨겁네.`,
    );
    era.printButton(`「지금 바로 갈게」`, 1);
    await era.input();
    await era.printAndWait(`여름 합숙은 이런 편안한 분위기 속에서 시작되었다.`);
    event_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 20, 0], undefined) || wait_flag;
  } else if (edu_weeks === 95 + 30) {
    await print_event_name('축제', maru);
    era.set('cflag:4:축제이벤트표시', 0);
    await era.printAndWait(
      `작년 이맘때, 처음으로 이 마을의 열기를 느꼈다. 그리고 바로 이곳에서 운명의 궤적이 바뀌었다.`,
    );
    await era.printAndWait(
      `미숙했던 자신과 손가락 사이로 흘러가 버린 시간은 앞으로 나아가기 위한 흔적이 되었다.`,
    );
    await era.printAndWait(
      `다시 찾은 마을을 바라보며 느끼는 감정은 처음 방문했을 때보다 훨씬 복잡했다.`,
    );
    await era.printAndWait(
      `입구를 착각해 방향을 헤매던 일, 친절한 가게 주인이 준 지도, 화려한 축제 공연까지.`,
    );
    await era.printAndWait(
      `기억 속의 장소를 향해 인파를 따라 걷자, 지난 기억들이 시냇물처럼 천천히 솟아올랐다.`,
    );
    await maru.say_and_wait(`${callname}.`);
    await era.printAndWait(`익숙한 실루엣이 입구에 서 있었다.`);
    era.printButton(`「미안, 너무 기다리게 했지.」`, 1);
    await era.input();
    await maru.say_and_wait(`나도 방금 막 도착했어.`);
    await maru.say_and_wait(
      `금붕어 건지기, 별사탕, 인연 부적, 그리고 마지막 무대 공연까지! 이번엔 후회 없도록 마음껏 즐겨야 해!`,
    );
    era.printButton(`「함께 가자」`, 1);
    await era.input();
    await era.printAndWait(`두 사람의 손이 꼭 맞잡혔다.`);
    await maru.say_and_wait(`앞으로도 이렇게 계속 내 곁에 있어 줄 거지?`);
    await era.printAndWait(` ${maru.name}가 ${me.name}을(를) 슬쩍 쳐다보았다.`);
    await era.printAndWait(
      `${me.name}은(는) 손을 잡은 상태에서 살짝 강압적으로 상대방을 이끌며 나아갔다.`,
    );
    await era.printAndWait(
      `예상했던 불평은 없었다. ${me.name}은(는) 다만 손바닥에서 전해지는 힘이 점점 강해져, 마치 바이스에 꽉 물린 것 같은 압박을 느꼈다.`,
    );
    await era.printAndWait(
      `통증을 느낀 ${me.name}이(가) 무심코 원인을 바라보자, ${maru.name}는 장난기 가득한 미소를 짓고 있었다.`,
    );
    await era.printAndWait(`어른스러운 체면은 집어치우고, 어린아이처럼 장난을 치며 노는 시간이었다.`);
    await era.printAndWait(`이대로는 질 것이라 직감한 ${me.name}은(는) 발걸음을 재촉했다.`);
    await era.printAndWait(
      ` ${maru.name}의 눈빛은 「현역 우마무스메랑 달리기 시합을 하려다니, ${me.name}은(는) 아직 백 년은 일러」라고 말하는 듯했다. ${maru.name}는 여유롭게 손을 놓고 우아한 걸음걸이로 추월할 준비를 했다.`,
    );
    await era.printAndWait(
      `——하지만 ${me.name}은(는) 살며시 ${maru.sex}의 허리를 감싸 안고, 애정 어린 눈빛으로 상대를 빤히 바라보았다.`,
    );
    await maru.say_and_wait(
      `어라? 트레이너…… ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 주변에 사람들도 있는데.`,
    );
    await era.printAndWait(
      `주변 사람들은 ${me.name}들의 친밀한 행동을 보고 열애 중인 커플의 애정 행각이라 생각하며 넘겼고, 간혹 두 사람을 알아본 관광객들은 무언가를 눈치채고 서둘러 자리를 피해주기도 했다.`,
    );
    await era.printAndWait(`순식간에 주변에는 ${me.name}들 두 사람만이 남게 되었다.`);
    await maru.say_and_wait(
      `어머나, 마치 순정 만화에서 튀어나온 이야기 같네. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 이제 사춘기 꼬맹이가 아니잖아?`,
    );
    await era.printAndWait(
      `이 묘한 분위기 속에서 열세에 몰린 ${maru.name}는 다시 주도권을 잡으려 애썼다.`,
    );
    era.printButton(`「꼬맹이면 좀 어때?」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${maru.sex}의 이마에 가볍게 입을 맞추고, 장난감을 가로챈 아이처럼 의기양양한 표정으로 상대방을 바라보며 형용할 수 없는 상쾌함을 느꼈다.`,
    );
    await maru.say_and_wait(
      `——그래, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 그런 말을 하다니, 각오는 되어 있겠지?`,
    );
    await era.printAndWait(
      `이득만 챙기고 빠지려던 ${me.name}은(는) 갑자기 중심을 잃었고, ${maru.name}을(를) 감싸고 있던 손도 풀려버렸다.`,
    );
    await era.printAndWait(
      `이어서 왼쪽 귀로 달콤한 숨결이 느껴졌고, 온몸을 짜릿하게 만드는 전류가 흘렀다.`,
    );
    await maru.say_and_wait(`——`);
    await era.printAndWait(
      `평소와 다름없는 느낌이었으나, ${me.name}의 귀에는 약간의 심술과 성취감이 섞인 목소리로 들렸다.`,
    );
    await era.printAndWait(
      ` ${maru.name}의 손가락이 ${me.name}의 가슴팍을 살며시 훑고 지나갔다. 길게 다듬어진 손톱은 피부를 상하게 하지 않을 정도로 절묘하게 스쳤고, ${me.name}의 몸은 공포와 흥분으로 미세하게 떨렸다.`,
    );
    era.printButton(`「곧 불꽃놀이가 시작될 텐데, 빨리 안 가면…」`, 1);
    await era.input();
    await era.printAndWait(`「아직 부족해.」 ${maru.name}의 손가락은 여전히 멈추지 않았다.`);
    era.printButton(
      `「작년의 아쉬움을 달래기 위해 ${maru.name}와 함께 멋진 추억을 만들고 싶어!」`,
      1,
    );
    await era.input();
    await era.printAndWait(` ${maru.name}는 드디어 움직임을 멈추었다.`);
    await maru.say_and_wait(`——미안해, 이 누나가 조금 자제력을 잃었네.`);
    await era.printAndWait(
      `말투에는 반성의 기미가 전혀 없었지만, 얼굴에는 레이스를 마음껏 즐긴 뒤의 만족감이 서려 있었다.`,
    );
    await maru.say_and_wait(
      `앞으로 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}과 함께 만들 추억과 그 너머의 더 큰 만족감을 생각하니, 이 누나가 너무 욕심쟁이가 된 걸까?`,
    );
    await maru.say_and_wait(
      `음—— 부정적인 기분은 NG야! 앞으로의 매분 매초를 소중히 여기지 않는 건 인생에 대한 실례니까!`,
    );
    await era.printAndWait(
      `축제 음악이 바람을 타고 ${me.name}들의 귀가에 들려왔다.`,
    );
    await era.printAndWait(`하늘에 수놓아진 붉은 꽃송이가 축제의 피날레를 알렸다.`);
    await era.printAndWait(`그리고 ${maru.name}가 ${me.name}의 팔짱을 꼈다.`);
    await era.printAndWait(`두 사람의 발걸음이 빨라졌다.`);
    await era.printAndWait(
      `마지막으로 ${me.name}과(와) ${maru.name}는 연인들만이 누릴 수 있는, 그 무엇과도 바꿀 수 없는 분위기를 만끽했다.`,
    );
    event_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
} else if (edu_weeks === 95 + 40) {
    await print_event_name('사탕 안 주면 장난칠 거야!', maru);
    await maru.say_and_wait(`${callname}, 일어나!`);
    await era.printAndWait(`귓가에 익숙한 목소리가 들려오는 듯했다.`);
    era.printButton(`「으음, 조금만 더 자자」`, 1);
    await era.input();
    await maru.say_and_wait(`곧 있으면 9시라고!`);
    era.printButton(`「뭐, 9시? 헉!」`, 1);
    await era.input();
    await era.printAndWait(
      `무슨 일이 벌어질지 순식간에 깨달은 ${me.actual_name}은(는) 침대에서 튀어 올라 서둘러 옷을 입기 시작했다.`,
    );
    await me.say_and_wait(`이러다 타즈나 ${me.get_adult_sex_title()}한테 설교 듣겠어.`);
    await maru.say_and_wait(`후훗~`);
    await era.printAndWait(
      `허둥지둥 일어나는 ${me.name}의 모습을 보며 ${maru.name}은(는) 살며시 미소 지었다.`,
    );
    await me.say_and_wait(`알람이 왜 안 울렸지? 어라?`);
    await era.printAndWait(`핸드폰에 표시된 시간은 7시. 출근까지는 아직 1시간이나 남아 있었다.`);
    await me.say_and_wait(`${maru.name}!`);
    await maru.say_and_wait(`사탕 안 주면 장난칠 거야!`);
    await me.say_and_wait(`으아— 할로윈은 만우절이 아니라고!`);
    await maru.say_and_wait(`그치만 ${callname}이 주는 사탕을 받고 싶은걸~`);
    await me.say_and_wait(`나중에 같이 사탕 가게에 가보자.`);
    await era.printAndWait(`어느샌가 두 사람의 입술이 다시 한번 맞닿았다.`);
    await maru.say_and_wait(`으음— 그럼 이걸로 조금만 참아볼게♪`);
    await era.printAndWait(
      `두 사람의 아침 식사를 식탁으로 나르는 ${maru.name}은(는) 귀여운 미소를 띠었다.`,
    );
    era.drawLine({ content: '트레이닝실' });
    await me.say_and_wait(`이게 마지막 서류야.`);
    await maru.say_and_wait(`수고했어!`);
    await era.printAndWait(
      `옆에서 기다리던 ${maru.name}은(는) 능숙하게 서류를 파일 안에 정리해 넣었다.`,
    );
    await me.say_and_wait(`다음은 말이지.`);
    await maru.say_and_wait(`다음은?`);
    await me.say_and_wait(`내 기억으론…… 뭔가 중요한 할 일이 있었던 것 같은데?`);
    await maru.say_and_wait(
      `${era.get('cflag:0:성별') - 1 ? '트·레·이·너·짱' : '트·레·이·너·군'}?`,
    );
    await era.printAndWait(
      `귀가 뒤로 눕혀진 ${maru.name}를 본 ${me.actual_name}은(는) 자신도 모르게 가슴이 철렁했다.`,
    );
    await me.say_and_wait(`빨리 생각하자, 뭘 잊었지? 아, 맞다!`, true);
    await maru.say_and_wait(
      `${era.get('cflag:0:성별') - 1 ? '트·레·이·너·짱' : '트·레·이·너·군'}?`,
    );
    await era.printAndWait(
      `${maru.name}의 말투는 점점 위압감을 더해갔지만, 얼굴 표정에는 아무런 변화가 없었다.`,
    );
    await me.say_and_wait(`같이 사탕 가게에 갈까?`);
    await era.printAndWait(`스스로도 놀랄 만큼 평온한 말투로 대답했다.`);
    await maru.say_and_wait(
      `그렇지! 어머나~ 이 ${maru.get_bigger_sibling_sex_title()}도 깜빡 잊을 뻔했네. 정말 ${callname} 덕분이야♪`,
    );
    await era.printAndWait(
      `방금 전의 압박감이 거짓말처럼 사라졌다. ${
        maru.name
      }은(는) 어느새 영역을 자유자재로 다루게 된 것일까?`,
    );
    await maru.say_and_wait(`같이 출발할까?`);
    await me.say_and_wait(`하지만 가기 전에 할 일이 하나 더 있어.`);
    await maru.say_and_wait(`응?`);
    await era.printAndWait(`입술이 다시 포개졌다.`);
    await maru.say_and_wait(`으응— 하아, 어어어?!`);
    await era.printAndWait(`15초 동안 이어진 깊은 입맞춤.`);
    await me.say_and_wait(`해피 할로윈! 사탕 안 주면 장난칠 거야!`);
    await maru.say_and_wait(`어라? ${callname}, 나·생·각·이·바·뀌·었·어!`);
    await era.printAndWait(
      `부드러운 감촉보다도 ${me.actual_name}은(는) ${maru.name}가 내뱉을 다음 말이 더 신경 쓰였다.`,
    );
    await maru.say_and_wait(`오늘 밤에는 ${me.name}을(를) 재우지 않을 거니까❤`);
    await era.printAndWait(
      `전신의 힘이 한순간에 빠져나가는 듯한 기분과 함께, ${me.actual_name}은(는) ${maru.name}의 품속으로 무너져 내렸다.`,
    );
    await maru.say_and_wait(`호호호— 벌써 다리가 풀리면 곤란해, ${callname}은.`);
    await era.printAndWait(`어느샌가 촉촉해진 눈가를 ${maru.name}이(가) 살며시 닦아주었다.`);
    await maru.say_and_wait(`밤에도 잘 부탁해, ${callname}♪`);
    era.set('cflag:4:축제이벤트표시', 0);
  } else if (edu_weeks === 95 + 48) {
    await print_event_name('크리스마스', maru);
    await era.printAndWait(
      `${maru.name}와의 약속을 지키기 위해, ${me.name}은(는) 마지막 업무를 마치자마자 약속 장소로 서둘러 향했다.`,
    );
    await era.printAndWait(
      `약속 장소인 느티나무 가로수길 근처에 도착해 핸드폰을 확인하니, 약속 시간보다 30분이나 일찍 도착해 있었다.`,
    );
    era.printButton(`「시간은 아직 충분하네」`, 1);
    await era.input();
    await era.printAndWait(`마음의 여유를 찾은 ${me.name}은(는) 급했던 발걸음을 늦추었다.`);
    await era.printAndWait(
      `작년 크리스마스, ${maru.name}과(와) 함께 팬들의 포위를 피하려고 정신없이 달리다 우연히 이 오솔길을 발견했었다.`,
    );
    await era.printAndWait(
      `당시의 ${
        maru.name
      }는 무척 즐거워 보였다…… 아니, 평소 경기장에서 보여주던 것과는 또 다른 종류의 즐거움이었다.`,
    );
    await era.printAndWait(
      `당신과 함께 달리는 즐거움을 나누기 위해 일부러 속도를 늦춰주던 ${maru.name}. 당시 당신의 머릿속은 하얗게 비어 있었다.`,
    );
    await era.printAndWait(`발렌타인 때의 키스, 팬 대감사제에서의 밀착된 접촉까지……`);
    await era.printAndWait(`지난 추억들이 마치 타오르는 난로의 불꽃처럼 천천히 피어올랐다.`);
    await era.printAndWait(`사실은……`);
    await maru.say_and_wait(`왁!`);
    await era.printAndWait(
      `${me.name}을(를) 깜짝 놀라게 하려던 것인지, ${maru.name}가 왼쪽 느티나무 뒤에서 갑자기 튀어나왔다. 흰 눈을 배경으로 한 그 빨간색 실루엣은 유난히 눈부시게 빛났다.`,
    );
    era.printButton(`「으아아아악!」`, 1);
    await era.input();
    await era.printAndWait(
      `시야 밖에서 갑자기 튀어나온 ${maru.get_teen_sex_title()}(?)의 등장에, ${me.name}은(는) 훌륭하게 비명을 질렀다.`,
    );
    await maru.say_and_wait(`방가방가♪ ${callname}`);
    era.printButton(`「${maru.name}, 그렇게 갑자기 튀어나오면 너무 무섭잖아!」`, 1);
    await era.input();
    await era.printAndWait(
      `작년에도 이 가로수길에서 만나기로 약속했었지만, ${
        maru.name
      }가) 이렇게까지 활기 넘칠 줄은 몰랐다.`,
    );
    await era.printAndWait(
      `늘 성숙한 ${maru.get_bigger_sibling_sex_title()}를 자처해 왔지만, ${me.name} 앞에서는 ${maru.name}만의 또 다른 일면을 보여주기 시작했다.`,
    );
    await maru.say_and_wait(
      `설레는 마음을 주체 못 해서 한 시간이나 일찍 도착해 버렸거든. 너무 심심해서 장난 좀 쳐봤어.`,
    );
    await maru.say_and_wait(`${callname}이 깜짝 놀라는 모습, 정말 귀엽네♪`);
    era.printButton(`「${maru.name}!!!」`, 1);
    await era.input();
    await maru.say_and_wait(`후훗♪ ${callname}, 나 잡아봐라~`);
    era.printButton(`「거기 서!」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.get_couple_title()}은 어린아이처럼 뒤쫓으며 장난을 쳤다. 마치 아무 걱정 없던 어린 시절로 돌아간 듯한 착각마저 들었다.`,
    );
    era.printButton(`「정말 즐겁네」`, 1);
    await era.input();
    await era.printAndWait(
      `다행히 이 길을 지나는 사람은 많지 않았고, 대부분 ${me.get_couple_title()}과 같은 연인들이었다.`,
    );
    await era.printAndWait(
      `${maru.name}는 몰라도, ${
        me.name
      }은(는) 이제 아이 같은 체력이 남아있지 않았다. 결국 거친 숨을 몰아쉬며 나무통을 붙잡고 ${maru.name}을(를) 바라볼 뿐이었다.`,
    );
    await maru.say_and_wait(`후흥♪ 이번 승부도 나의 승리네.`);
    await maru.say_and_wait(`승리자의 권리로, ${callname}은 내 소원을 하나 들어줘야겠어.`);
    era.printButton(`「잠깐, 그런 얘기가 있었나?」`, 1);
    await era.input();

    await maru.say_and_wait(`오늘 밤, 나랑 데이트하자.`);
    await maru.say_and_wait(
      `나같이 트렌디하고 예쁜 ${maru.get_teen_sex_title()}와 데이트할 기회는 평생 한 번 올까 말까 하다고.`,
    );
    await maru.say_and_wait(`${callname}의 생각은 어때?`);
    era.printButton(`「……」`, 1);
    await era.input();
    await era.printAndWait(
      `${me.name}이(가) 대답하려던 찰나, 배꼽시계가 야속하게 울려 퍼졌다.`,
    );
    await maru.say_and_wait(
      `후훗, ${callname}은 배가 고픈 모양이네. 그럼 일단 뭐 좀 먹고 출발하자.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 다시 조수석에 앉았다. 익숙한 승차감이 ${me.name}을(를) 더할 나위 없이 안심시켰다.`,
    );
    await era.printAndWait(
      `${maru.name}가 열쇠를 꽂고 엔진을 걸자, 중저음의 엔진음이 고요한 공원을 가득 채웠다.`,
    );
    await era.printAndWait(
      `${me.get_couple_title()}은 사이제리아에서 조금 호화로운 저녁 식사를 함께했다.`,
    );
    await era.printAndWait(
      `혼자 묵묵히 먹던 때보다, ${maru.name}와 함께하니 음식이 훨씬 더 맛있게 느껴졌다.`,
    );
    await maru.say_and_wait(`OK, 난 타치에서 기다리고 있을게.`);
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}를 먼저 차로 보내고 카운터에서 계산을 마쳤다.`,
    );
    await era.printAndWait(
      `다시 한번 엔진 소리가 울려 퍼지며, ${me.get_couple_title()}은 오늘의 마지막 목적지로 향했다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 익숙하게 오디오 패널을 조작해 음악을 틀고, 시트에 몸을 맡긴 채 선율을 즐겼다.`,
    );
    await era.printAndWait(`신호가 바뀌자, 차는 언덕길을 오르기 시작했다.`);
    await era.printAndWait(
      `고속도로에 진입해 속도를 높이자, 창밖으로 빠르게 스쳐 지나는 가로등 빛이 마치 타임머신을 타고 있는 듯한 기분을 들게 했다.`,
    );
    await era.printAndWait(
      `처음의 어지러움이 가라앉자, ${me.name}은(는) 차츰 ${maru.name}의 속도감에 적응해 나갔다.`,
    );
    await era.printAndWait(
      `음악은 ${me.name}을(를) 시간으로부터 도망치게 했고, 호흡은 ${me.name}이(가) 시간을 해방하게 했다.`,
    );
    await era.printAndWait(
      `${me.name}이(가) 고개를 돌려 ${maru.name}를 보았을 때, 마침 ${maru.name}가 시선을 거두는 순간을 포착했다.`,
    );
    await era.printAndWait(`스피커에서 흘러나오는 부드러운 음악 외에는 침묵이 찾아왔다.`);
    await maru.say_and_wait(`${callname}, 벌써 산 정상이네.`);
    await era.printAndWait(
      `이 도심 근교에서 가장 높은 산이었다. 산 정상에서 내려다보니 도시의 전경이 한눈에 들어왔다.`,
    );
    await era.printAndWait(
      `차가운 공기가 폐 속의 온기를 앗아가며 심장의 고동을 자극했다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 곁에 있는 ${
        maru.name
      }을(를) 바라보았다. 그 편안하고 맑은 눈동자는 반짝이는 빛을 담고 축제 분위기에 젖은 도시를 눈에 담고 있었다.`,
    );
    era.printButton(`「${maru.name}의 눈은 정말 아름답네」`, 1);
    await era.input();
    await maru.say_and_wait(`후훗♪ ${callname}은, 나랑 밀당이라도 하고 싶은 거야?`);
    await maru.say_and_wait(
      `어머나, 나도 이제 나이가 꽤 들었는데 젊은이가 대시를 다 하다니. 내 매력이 아직 죽지 않았나 봐?`,
    );
    await era.printAndWait(
      `${maru.name}은(는) 시선을 거두었다가 다시금 ${me.name}을(를) 빤히 바라보았다.`,
    );
    await maru.say_and_wait(
      `사람들은 눈이 마음의 창이라고 하잖아. 그럼 ${callname}이 보기에 나는 어떤 마음인 것 같아?`,
    );
    await me.say_and_wait(`어딘가 애틋하면서도 다정하고 아름다운 눈이야.`);
    await maru.say_and_wait(`${callname}은 대체 무슨 생각을 하길래 그런 감상을 말하는 거야?`);
    await me.say_and_wait(`그 다정한 눈은 언제나 후배들을 지켜보고 있잖아.`);
    await me.say_and_wait(`즐거운 시간이 영원히 계속되지 않는다는 사실에 조금은 서글퍼 보이기도 하지만.`);
    await me.say_and_wait(`그래도 후배들이 장차 보여줄 눈부신 빛을 믿고 있기에 행복해 보여.`);
    await me.say_and_wait(`마치 구름 한 점 없는 여름날의 맑은 하늘 같아.`);
    await maru.say_and_wait(
      `${callname}은 나를 너무 좋게 평가하는 거 아니니? 게다가 지금은 겨울인데 말이야.`,
    );
    await me.say_and_wait(
      `그 다정한 마음이 가진 힘을 얕볼 사람은 아무도 없어. 그건 결국 사랑이니까.`,
    );
    await me.say_and_wait(`다정한 사랑만이 사람들의 마음속 상처를 치유할 수 있는 법이야.`);
    await me.say_and_wait(
      `그 사랑에 보답하기 위해 네 뒷모습을 쫓는 아이들이 뿜어내는 불꽃 덕분에, 겨울이라도 여름 같은 따스함이 느껴져.`,
    );
    await maru.say_and_wait(
      `아이들의 뒷모습을 바라본다면, 내일도 따뜻하고 맑은 날이 되겠지.`,
    );
    await maru.say_and_wait(`${callname}을 만날 수 있어서 정말 다행이야♪`);
    await maru.say_and_wait(`……${callname}, 내 응석 한 번만 들어줄래?`);
    era.printButton(`「${maru.name}의 소원이라면 무엇이든 말해줘」`, 1);
    await era.input();
    await maru.say_and_wait(`나한테 키스해 줄래?`);
    await era.printAndWait(
      `${me.name}은(는) ${maru.name}의 허리를 감싸 안고, 머리카락을 살며시 쓸어 넘겼다.`,
    );
    await era.printAndWait(`10초간의 짧은 입맞춤이었으나, 평생 잊지 못할 추억의 한 조각이 되었다.`);
    await era.printAndWait(`잠시 후 두 사람이 입을 떼자, ${maru.name}의 뺨 위로 눈물이 천천히 흘러내렸다.`);
    await maru.say_and_wait(`${callname}, 사랑해.`);
    era.printButton(`「나도 사랑해, ${maru.name}」`, 1);
    await era.input();
    await era.printAndWait(
      `시계 바늘이 12시를 가리키자, 두 사람은 밤하늘을 수놓는 불꽃을 배경으로 서로를 꽉 껴안았다.`,
    );

    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], 120) || wait_flag;
    era.set('cflag:4:축제이벤트표시', 0);
  } else if (edu_weeks === 143 + 5 && event_marks.girls_dream === 1) {
    event_marks.girls_dream++;
    await print_event_name(`꿈의 미래`, maru);
    await era.printAndWait(
      `지난 3년 동안, ${me.name}과(와) ${maru.name}는 같은 목표를 향해 달려왔고, 마침내 URA 대회에서 우승을 차지했다.`,
    );
    await era.printAndWait(`그 후로 시간이 흘러————`);
    await say_by_passer_by(
      `지나가는 ${maru.get_uma_sex_title()} A`,
      `${maru.name} ${
        era.get('cflag:4:성별') - 1 ? '선배님' : '선배님'
      }, 이번 GIII 레이스에서 가르쳐 주신 방법대로 달렸더니 정말 우승했어요!`,
    );
    await say_by_passer_by(
      `지나가는 ${maru.get_uma_sex_title()} B`,
      `세상에, 그런 해결책이 있었나요? 역시 마루젠스키 ${
        era.get('cflag:4:성별') - 1 ? '선배님' : '선배님'
      }이야!`,
    );
    await say_by_passer_by(
      `지나가는 ${maru.get_uma_sex_title()} C`,
      `마루젠스키 ${
        era.get('cflag:4:성별') - 1 ? '선배님' : '선배님'
      }이 알려주신 팁 덕분에, 이제 트레이너 ${me.get_adult_sex_title()}과도 사이좋게 지내고 있어요.`,
    );
    await maru.say_and_wait(`후배들에게 도움이 될 수 있어서 정말 기뻐!`);
    await era.printAndWait(`오늘도 ${maru.name}은(는) 후배들에게 조언을 아끼지 않고 있었다.`);
    await say_by_passer_by(
      `지나가는 ${maru.get_uma_sex_title()} A`,
      `${maru.name} ${
        era.get('cflag:4:성별') - 1 ? '선배님' : '선배님'
      }의 트레이너 ${me.get_adult_sex_title()}이 오셨다!`,
    );
    await era.printAndWait(
      `${maru.get_uma_sex_title()}에게 둘러싸여 있던 ${
        maru.name
      }가 ${me.name}의 존재를 눈치챘다.`,
    );
    await maru.say_and_wait(`${callname}!`);
    await era.printAndWait(
      `${maru.name}가 풍만한 가슴을 ${me.name}의 어깨에 가득 밀착시켰다.`,
    );
    await say_by_passer_by(
      `지나가는 ${maru.get_uma_sex_title()} B`,
      `우와, 이건 설마?`,
    );
    await say_by_passer_by(
      `지나가는 ${maru.get_uma_sex_title()} C`,
      `마루젠스키 ${era.get('cflag:4:성별') - 1 ? '선배님' : '선배님'}이랑 ${
        maru.name
      }선배님의 트레이너님은 오늘도 정말 깨가 쏟아지시네.`,
    );
    era.printButton(`「늦어서 미안해」`, 1);
    await era.input();
    await maru.say_and_wait(
      `응응, 무려 두 시간 동안이나 ${
        callname
      }을 못 봤더니 이 ${maru.get_bigger_sibling_sex_title()}는 너무나 외로웠다구~`,
    );
    await maru.say_and_wait(`보답으로 오늘 오후는 나랑 데이트하는 거야♪`);
    era.printButton(`「사실 나도 ${maru.name}을 오~랫동안 못 봐서 불안했어」`, 1);
    await era.input();
    await maru.say_and_wait(`${callname}은 역시 내 생각뿐이네. 그럼 평소처럼——`);
    await era.printAndWait(`두 사람은 훈련장에서 서로를 꽉 껴안았다.`);
    await maru.say_and_wait(`역시 ${callname}이 제일 좋아⭐`);
    await era.printAndWait(`NORMAL END - 평온한 나날\n\n`);
    await era.printAndWait(`힌트를 확인하시겠습니까?`);
    era.printButton(`「네」`, 1);
    era.printButton(`「아니오」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`GOOD END를 달성하려면 모든 육성 목표 레이스에서 우승해야 합니다.`);
      await era.printAndWait(`축제 관련 선택지는 엔딩에 영향을 주지 않습니다.`);
      await era.printAndWait(
        `스토리와 관련된 주의사항: 2년 차 선택지가 중요합니다. 2년 차 1월 3주 차의 겨울과 봄의 교차 이벤트 시점에 세이브를 권장합니다.`,
      );
      await era.printAndWait(
        `트루엔딩/굿엔딩 조건을 만족했다면, 크리스마스 이벤트 후 팀 목록을 비우고 다시 ${maru.name}를 선택해 대화를 시도할 시 특수 대사가 등장합니다.`,
      );
      await era.printAndWait(
        `추가로, 3년 차 1주 차에는 신년 참배를 먼저 선택한 뒤 신사로 이동하는 것이 효율이 더 높습니다.`,
      );
      await era.printAndWait(`마지막으로, ${me.name}의 빠른 굿엔딩 달성을 기원합니다.`);
    } else {
      await maru.say_and_wait(
        `직접 알아내고 싶어? 공략의 신이 될 자질이 보이네. ${callname}, 힘내!`,
      );
    }
} else if (edu_weeks === 143 + 5 && event_marks.gentle_wind === 1) {
    event_marks.gentle_wind++;
    await print_event_name(`온 세상에 휘몰아치는 부드러운 바람`, maru);
    await era.printAndWait(
      `${maru.name}와 잊지 못할 3년을 보낸 끝에, URA 트로피를 손에 넣었다.`,
    );
    await era.printAndWait(`다음으로 도전할 것은 새로운 트윙클 시리즈다.`);
    await era.printAndWait(`하지만 그전에.`);
    await me.say_and_wait(`이제 ${maru.name}을(를) 만나러 가는 건가?`);
    await me.say_and_wait(`조금 긴장되네.`);
    era.drawLine({ content: '옥상' });
    await era.printAndWait(`옥상 문을 열었다.`);
    await me.say_and_wait(`${maru.name}가 없는 것 같은데?`);
    await era.printAndWait(`한차례 미풍이 불어올 뿐, 옥상 위에는 아무도 보이지 않았다.`);
    await maru.say_and_wait(`누구게~?`);
    await era.printAndWait(
      `${me.name}의 시야가 두 손에 가려졌고, 익숙한 향기에 ${me.name}은(는) 즉시 상대가 누구인지 알아차렸다.`,
    );
    await me.say_and_wait(`${maru.name}.`);
    await era.printAndWait(
      `감격에 겨워 크게 소리칠 줄 알았지만, 지금의 목소리는 스스로 의심스러울 정도로 평온했다.`,
    );
    await maru.say_and_wait(`역시 ${callname}이야, 단번에 누군지 맞히다니.`);
    await maru.say_and_wait(
      `이 ${maru.get_bigger_sibling_sex_title()}는 이렇게 누군가를 좋아해 본 적이 없어♪`,
    );
    await maru.say_and_wait(`이게 바로 사랑이라는 걸까♪`);
    era.printButton(`「${maru.name}, 나도 ${maru.name}에게 하고 싶은 말이 있어, 그러니까」`, 1);
    await era.input();
    await maru.say_and_wait(
      `후훗~ ${callname}은 이 ${maru.get_bigger_sibling_sex_title()}한테 어리광 부리고 싶은 거야?`,
    );
    await maru.say_and_wait(`그게 어떤 거라도……`);
    era.printButton(`「나와 평생 함께 살아줘」`, 1);
    await era.input();
    await era.printAndWait(
      `${maru.name}가 믿기지 않는다는 표정을 짓는 사이, ${
        me.name
      }은(는) 맹세의 상징인 반지를 ${maru.sex}에게 건넸다.`,
    );
    era.printButton(`「이상보다도, 레이스보다도, 내가 정말 소중히 여기는 건 ${maru.name}야」`, 1);
    await era.input();
    era.printButton(`「그러니 내 사랑을 받아줘」`, 1);
    await era.input();
    await maru.say_and_wait(
      `이래서야, 이 사랑에 똑같은 대답으로 보답하지 않으면 세 여신님을 뵐 낯이 없겠는걸.`,
    );
    await maru.say_and_wait(
      `${callname}, 레이스뿐만 아니라 앞으로의 인생도 잘 부탁해.`,
    );
    era.printButton(`「나도, 앞으로 잘 부탁해」`, 1);
    await era.input();

    await era.printAndWait(
      `맹세의 키스는 어떤 맛일까? 짤까? 아니면 아주 조금 달콤할까? 지금은 눈앞에서 황홀해하는 ${maru.get_teen_sex_title()}보다 중요한 건 없었다.`,
    );
    await era.printAndWait(
      `${me.name}과(와) ${maru.name} 사이의 운명은 우여곡절 끝에 마침내 보답을 받았다.`,
    );
    await era.printAndWait(
      `${maru.name}의 질주는 다른 ${maru.get_uma_sex_title()}들에게 용기와 희망을 주었다.`,
    );
    await era.printAndWait(
      `${maru.get_uma_sex_title()}들은 앞으로도 계속 ${
        maru.name
      }의 뒷모습을 쫓으며 ${maru.sex}을(를) 넘어서려 하겠지.`,
    );
    await maru.say_and_wait(
      `우승하는 것보다, 더 많은 ${maru.get_uma_sex_title()}들이 희망의 존재를 느끼게 하는 게 내 이상이야♪`,
    );
    await maru.say_and_wait(
      `앞으로는 터프의 한쪽 끝에서 ${maru.get_uma_sex_title()}들을 묵묵히 지켜보며, ${
        maru.sex
      }들을 에덴으로 인도하는 게 내 새로운 사명이야.`,
    );
    await maru.say_and_wait(
      `하지만 지금은 ${
        callname
      }과 달콤하게 함께 사는 것이 가장 행복한 TRUE END네♪`,
    );
    await era.printAndWait(
      `방황하던 시기의 ${maru.name}을 이끌어준 ${
        me.name
      }과(와), 방황하는 ${maru.get_uma_sex_title()}들을 이끄는 ${
        maru.name
      }는 마침내 부드러운 바람이 되어 ${maru.get_uma_sex_title()}의 세계에 휘몰아칠 것이다.`,
    );
    await era.printAndWait(
      `그렇게 두 사람의 이야기는 일단 결말을 맺었다. 메데타시, 메데타시.`,
    );
    await era.printAndWait(`TRUE END - 온 세상에 휘몰아치는 부드러운 바람\n\n`);
    await era.printAndWait(`힌트를 확인하시겠습니까?`);
    era.printButton(`「네」`, 1);
    era.printButton(`「아니오」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await era.printAndWait(`GOOD END를 달성하려면 모든 육성 목표 레이스에서 우승해야 합니다.`);
      await era.printAndWait(`축제 관련 선택지는 엔딩에 영향을 주지 않습니다.`);
      await era.printAndWait(
        `스토리 관련 주의사항: 2년 차 선택지가 중요합니다. 2년 차 1월 3주 차의 '봄과 겨울의 교차' 이벤트에서 세이브하는 것을 추천합니다.`,
      );
      await era.printAndWait(
        `GOOD END 조건을 만족했다면, 크리스마스 이벤트 후 팀 목록을 비우고 다시 ${maru.name}를 선택해 대화를 시도하면 특수 대사가 등장합니다.`,
      );
      await era.printAndWait(
        `또한, 3년 차 1주 차에는 신년 참배를 먼저 선택하고 신사로 이동하는 것이 효율이 더 높습니다.`,
      );
      await era.printAndWait(`마지막으로, ${me.name}의 빠른 굿 엔딩 달성을 기원합니다.`);
    } else {
      await maru.say_and_wait(
        `직접 알아내고 싶어? 공략의 신이 될 소질이 보이네. ${callname}, 힘내!`,
      );
    }
  } else if (edu_weeks === 143 + 5 && event_marks.fall_heaven === 1) {
    const chara302_talk = get_chara_talk(302),
      chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342);
    chara340_talk.name = '자애로운 여신';
    chara341_talk.name = '예지의 여신';
    chara342_talk.name = '엄숙한 여신';
    await era.printAndWait(`평범하기 그지없는 휴일.`);
    await era.printAndWait(`심볼리 루돌프를 꺾고 멋지게 2연승을 차지했다.`);
    await era.printAndWait(
      `${maru.name}와 함께 보낸 이 3년은 아마 평생 잊지 못할 나날이 될 것이다.`,
    );
    await era.printAndWait(`${maru.name}와 잠시 작별했다.`);
    await chara302_talk.say_and_wait(`축하! URA 우승!`);
    await era.printAndWait(
      `자그마한 이사장이 ${maru.sex} 키의 절반은 될 법한 트로피를 ${maru.name}의 손에 전달했다.`,
    );
    await maru.say_and_wait(`정말 감사합니다!`);
    await era.printAndWait(
      `${maru.name}은(는) 트로피를 받아 들고, 카메라와 옆에서 오래 기다린 기자들의 인터뷰에 응했다.`,
    );
    await say_by_passer_by(
      `기자 A`,
      `${maru.name}님, 트로피를 거머쥔 소감은 어떠신가요?`,
    );
    await maru.say_and_wait(`보통은 엄청나게 감격스러워하겠죠? 이렇게 큰 대회니까요.`);
    await maru.say_and_wait(`하지만 정작 트로피를 손에 넣은 순간, 마음속은 무척 평온했어요.`);
    await say_by_passer_by(`기자 A`, `시청자분들께 자세히 말씀해 주실 수 있나요?`);
    await maru.say_and_wait(
      `네! ${maru.get_uma_sex_title()}들이 1등을 차지하기 위해 보이지 않는 곳에서 땀 흘리고, 경기장에서 힘껏 경쟁하는 그 생동감이 『아, 난 이걸 위해 레이스에 나갔던 거구나』 하는 생각이 들게 하더라고요. 후훗~`,
    );
    await say_by_passer_by(
      `기자 A`,
      `${maru.name}님은 ${maru.get_uma_sex_title()}들에 대해 깊이 이해하고 계시네요.`,
    );
    await maru.say_and_wait(
      `네! 레이스 전에는 항상 참가하는 ${maru.get_uma_sex_title()}들과 이야기를 나눠요. 그러다 보면 재미있는 이야기를 많이 듣게 된답니다~`,
    );
    await say_by_passer_by(`기자 A`, `시청자분들께도 들려주실 수 있나요?`);
    await maru.say_and_wait(
      `음, 가장 최근 레이스를 예로 들면, 어떤 ${maru.get_uma_sex_title()}가——`,
    );
    await maru.say_and_wait(
      `——마지막까지 자기 트레이너는 정말 돌부처 같은 사람이라며 투덜거리더라고요.`,
    );
    await say_by_passer_by(`기자 A`, `참 재미있네요, 감사합니다.`);
    await era.printAndWait(
      `인터뷰하던 기자가 미처 자리를 뜨기도 전에, 다른 기자가 못 참겠다는 듯 앞으로 달려 나왔다.`,
    );
    await say_by_passer_by(
      `기자 B`,
      `실례합니다, ${maru.name}님의 다음 목표는 무엇인가요?`,
    );
    await maru.say_and_wait(`음, 그건 참 대답하기 어려운 질문이네요——`);
    await maru.say_and_wait(`트레이너와 상의한 결과, 당분간은 휴식을 취하기로 했어요.`);
    await say_by_passer_by(
      `기자 B`,
      `보나 마나 트레이너랑 신혼여행이라도 가려는 거겠지. 이런 일은 하도 많이 봐서 말이야.`,
      true,
    );
    await say_by_passer_by(`기자 B`, `굴건염인가요?`);
    await maru.say_and_wait(
      `네, 결승 전에 의사 선생님을 찾아갔는데, 다행히 경증이었지만 계속 출주하는 데는 리스크가 있었거든요.`,
    );
    await maru.say_and_wait(
      `트레이너 ${me.get_adult_sex_title()}은 끝까지 쉬라고 하셨지만, 저는 끝까지 해내고 싶어서…… 다행히 무사히 승리했어요. 정말 ${callname} 덕분이야⭐`,
    );
    await say_by_passer_by(
      `기자 B`,
      `${callname}? 역시 승리한 ${maru.get_uma_sex_title()}는 결국 다 똑같은 결말이군.`,
      true,
    );
    await say_by_passer_by(
      `기자 B`,
      `${maru.name}님의 트레이너로서 뒤에서 정말 노력하셨겠군요. 저희에게 트레이너님에 관한 이야기도 좀 해주시겠어요?`,
    );
    await maru.say_and_wait(`좋은 기회네요, 트레이너가 직접 말하게 해줄게요!`);
    await era.printAndWait(`옆에서 지켜보던 ${me.name}이(가) ${maru.name}에게 끌려 나왔다.`);
    era.printButton(`「에? 나?」`, 1);
    await era.input();
    await era.printAndWait(
      `갑자기 흥분한 기자들과 각종 전문 촬영 장비들 앞에서, 아무 준비도 안 된 ${me.name}은(는) 식은땀을 흘렸다.`,
    );
    await maru.say_and_wait(
      `트레이너 ${me.sex_code === 1 ? '선생님' : '선생님'} 부끄러워하지 말고 소감을 말해봐!`,
    );
    era.printButton(
      `어어어어쨌든 저를 믿어준 트레센 학원에 감사하며, 담당 ${maru.get_uma_sex_title()}가 열심히 노력해 준 덕분에……`,
      1,
    );
    await era.input();
    await say_by_passer_by(`사진작가`, `여기 보세요!`);
    await era.printAndWait(`3년간의 웃음과 눈물을 가득 담은 채 막이 내렸다.`);
    era.drawLine();
    await era.printAndWait(`${maru.name}와 잠시 떨어져, ${me.name}은(는) 트레이닝실에 앉아 있었다.`);
    await era.printAndWait(
      `진열장에 놓인 트로피들이 이 3년간 보낸 시간이 결코 환상이 아니었음을 증명하고 있었다.`,
    );
    await era.printAndWait(`다만, 갑자기 목표가 사라지니 마음이 한꺼번에 놓이는 기분이었다.`);
    await era.printAndWait(`머리는 몽롱하고 눈꺼풀은 무거웠다.`);
    await me.say_and_wait(`${maru.name}가 돌아오기 전까지, 조금만 자자.`);
    await era.printAndWait(
      `적당한 핑계를 찾은 듯, 안심하고 눈을 감은 ${me.name}은(는) 그대로 깊은 잠에 빠져들었다.`,
    );
    await era.printAndWait(`다시 깨어났을 때, ${me.name}은(는) 끝없이 펼쳐진 초원에 와 있었다.`);
    await era.printAndWait(
      `${maru.name}과(와) 담소를 나눌 때, ${maru.sex}가 농담 반 진담 반으로 「나 에덴에 가봤어」라고 말했던 적이 있다.`,
    );
    await era.printAndWait(
      `이 세상 것이라고는 생각되지 않는 아름다운 풍경을 보니, ${maru.sex}의 말은 아마 사실이었던 모양이다.`,
    );
    await me.say_and_wait(`이제 어느 쪽으로 가야 하지?`);
    await era.printAndWait(
      `그리고 당장 해결해야 할 문제가 있었다. ${me.name}은(는) 우마무스메가 아니다.`,
    );
    await era.printAndWait(`${maru.name}의 방법은 별 도움이 되지 않았다.`);
    await era.printAndWait(`${maru.name}가 곧 돌아올 터라, 남은 선택의 시간은 얼마 없었다.`);
    await me.say_and_wait(`출발하는 수밖에 없어.`);
    await era.printAndWait(
      `망설일수록 상황은 나빠질 뿐이다. 선택을 내리는 것이 아무것도 하지 않는 것보다 낫다.`,
    );
    await era.printAndWait(
      `${maru.name}가 말했던 모호한 방향을 떠올리며, ${me.name}은(는) 그곳을 향해 출발했다.\n\n\n`,
    );
    await era.printAndWait(
      `얼마나 걸었을까, 시간 감각조차 희미해졌다. 다행히 이곳은 배고픔이나 갈증이 느껴지지 않아 ${me.name}은(는) 내심 안도했다.`,
    );
    await era.printAndWait(`한결같은 초원, 영원히 닿을 수 없을 것만 같은 저편.`);
    await era.printAndWait(`${maru.name}이(가) 말했던 그 황금빛 초원……`);
    await me.say_and_wait(`정말 존재하는 걸까?`);
    await era.printAndWait(`그 아름다운 세계.`);
    await maru.say_and_wait(`${maru.sex}는 저기 있다?`);
    await me.say_and_wait(`${maru.name}!?`);
    await era.printAndWait(`멀지 않은 곳에 있는 사람, 분명 ${maru.name}이다!`);
    await me.say_and_wait(`드디어 ${maru.name}를 찾았어!!`);
    await era.printAndWait(`기쁜 마음에 ${me.name}은(는) 그 환영을 향해 달려가 껴안으려 했다.`);
    await me.say_and_wait(`에?`);
    await era.printAndWait(`하지만 허공을 가른 팔은 ${maru.sex}의 몸을 통과해 버렸다.`);
    await maru.say_and_wait(`……`);
    await era.printAndWait(`환영은 아무 말 없이 어디론가 걸어갔다.`);
    await me.say_and_wait(`?`);
    await era.printAndWait(
      `처음에는 천천히 걷더니, 점점 속도를 높여 나중에는 아예 달리기 시작했다.`,
    );
    await me.say_and_wait(`기다려!`);
    await era.printAndWait(
      `${me.name}을(를) 인도하기 위해 태어난 존재인 양, 지쳐서 주저앉아 헐떡일 때면 멀지 않은 곳에 멈춰 서 있었다.`,
    );
    await era.printAndWait(`전력으로 달려도, ${maru.sex}에게 닿기까지는 늘 한 끗이 모자랐다.`);
    await era.printAndWait(`어떻게 해야 하지? 어떻게 해야 다시 ${maru.sex}에게 닿을 수 있을까?`);
    await era.printAndWait(`분했다. ${maru.sex}를 쫓아가고 싶었다.`);
    await era.printAndWait(
      `${maru.sex}를 앞지르고 싶었다. ${maru.sex}가 알고 있는 세계를 보고 싶었다.`,
    );
    await me.say_and_wait(`분명 엄청나게 아름답겠지! 그렇지 않고서야 저렇게 집요하게 나아갈 리가 없어.`);
    await me.say_and_wait(`갖고 싶어, 차지하고 싶어, 그 아름다운 세계를 보고 싶어.`);
    await era.printAndWait(`희미하게나마 자신을 억죄고 있던 굴레를 건드린 것 같았다.`);
    await era.printAndWait(`계속 달린다면 정말 죽을지도 모른다.`);
    await me.say_and_wait(
      `오랫동안 생각했어. 계약한 날부터, URA가 끝나는 그 순간까지.`,
    );
    await me.say_and_wait(`내가 진정으로 원했던 건, 사실 그 아름다운 찰나야.`);
    await me.say_and_wait(
      `단 한 순간, 감정이 최고조에 달하는 그 순간. 나는 그 순간을 위해 지금까지 살아온 거야.`,
    );
    await me.say_and_wait(`지금 이 순간이야말로, 세 여신님이 내게 주신 유일한 기회가 아닐까?`);
    await me.say_and_wait(`그렇다면 정답은 처음부터 정해져 있었어.`);
    await era.printAndWait(`비명을 지르는 몸의 통증을 무시하고, ${me.name}은(는) 다시 앞으로 가속했다.`);
    await era.printAndWait(`……앞에 보이는 저 서광과, 닿을 수 없을 듯 몽환적인 거리를 유지하며.`);
    await era.printAndWait(
      `인간과 ${maru.get_uma_sex_title()} 사이의, 결코 넘을 수 없는 그 간극.`,
    );
    await me.say_and_wait(`우아아아아아!`, true);
    await era.printAndWait(`전신의 마지막 힘을 짜내어 힘껏 도약했다.`);
    await era.printAndWait(`환영조차 이 마지막 도발은 예상치 못한 듯, 반응하지 못했다.`);
    await era.printAndWait(`결국, ${me.actual_name}은(는) 그 뒷모습에 손을 뻗어 닿았다.`);
    await me.say_and_wait(`해냈어!`, true);
    await era.printAndWait(`그리고, 느껴질 듯 말 듯 했던 감촉이 찰나에 사라졌다.`);
    await era.printAndWait(
      `마지막 힘까지 소진한 ${me.actual_name}은(는) 그저 멀리 서 있는 환영을 바라볼 뿐이었다.`,
    );
    await me.say_and_wait(
      `${maru.name}, 나 드디어 ${maru.name}의 기분을 이해했어!`,
      true,
    );
    await era.printAndWait(`한계를 넘은 움직임 끝에 쓰러졌으니, 아마 뼈가 부러졌을지도 모른다.`);
    await era.printAndWait(`거친 호흡을 내뱉을 때마다 폐가 칼로 베이는 듯 아파왔다.`);
    await era.printAndWait(`이 거대한 대가 끝에 ${me.name}은(는) 무엇을 얻었을까?`);
    await era.printAndWait(
      `${me.name}의 내면은 이미 그 아름다움에 점령당했고, 눈물이 걷잡을 수 없이 흘러나왔다.`,
    );
    await me.say_and_wait(`나, 죽는 걸까?`, true);
    await era.printAndWait(
      `환영은 더 이상 목적지를 향해 가지 않고, 오히려 ${me.name}에게 다가왔다.`,
    );
    await era.printAndWait(
      `마치 시들어가는 이에게 마지막 자비를 베풀 듯, 살며시 ${me.name}을(를) 무릎에 뉘었다.`,
    );
    await me.say_and_wait(`${maru.name}.`, true);
    await era.printAndWait(
      `고향으로 돌아가는 낙엽처럼, 마주한 이는 그리워하던 그 사람은 아니었으나, 마음의 호수는 초봄 바람에 날리는 첫 꽃잎에 덮인 듯 모든 소란이 잦아들고 고요해졌다.`,
    );
    await me.say_and_wait(`이건 ${maru.name}를 만나기 위해 바치는 선물이야.`, true);
    await me.say_and_wait(`나…… 더 이상 도망치지 않을게.`, true);
    await era.printAndWait(`끊임없이 솟구치는 눈물에 시야가 흐려졌다.`);
    await me.say_and_wait(`${maru.name}…… ${maru.name}는 이제 영원히 외롭지 않을 거야.`, true);
    await era.printAndWait(`마지막 장면은 ${maru.name}과(와) 보았던 그 바다에서 멈췄다.`);
    await era.printAndWait(`거울처럼 평온한 바다가 지난 세월을 비추고 있었다.`);
    era.drawLine();
    await me.say_and_wait(`여기는?`);
    await era.printAndWait(`다시 깨어났을 때, 눈앞에는 황금빛 초원이 펼쳐져 있었다.`);
    await era.printAndWait(`${maru.name}의 말대로, 모든 인류의 요람 같은 곳이었다.`);
    await chara341_talk.say_and_wait(`이제 더는 울지 않아도 된단다.`);
    await chara341_talk.say_and_wait(`이 낙원에는 더 이상 슬픔이 존재하지 않으니까.`);
    await era.printAndWait(
      `포용을 상징하는 여신 고돌핀 바브가 자애로운 표정으로 ${me.name}을(를) 바라보았다.`,
    );
    await chara340_talk.say_and_wait(`${me.name}은(는) 우리에게 자신의 용기를 증명했다.`);
    await chara340_talk.say_and_wait(
      `다시 만날 그날까지, 네가 생각하는 대로 이 길을 끝까지 걸어가 보렴.`,
    );
    await era.printAndWait(
      `용기를 상징하는 여신 달리 아라비안이 기대 섞인 눈빛으로 ${me.name}을(를) 격려했다.`,
    );
    await chara342_talk.say_and_wait(
      `인간의 몸으로 전력을 다해 겨우 ${maru.get_uma_sex_title()}의 경지에 닿았구나.`,
    );
    await chara342_talk.say_and_wait(
      `강함이라는 단어는 ${me.name}과(와)는 거리가 멀지. 지금까지 겁쟁이처럼 거짓으로 짜인 종이 성안에 숨어 그 성이 견고하기만을 바랐을 뿐이야.`,
    );
    await chara342_talk.say_and_wait(
      `……하지만, ${me.name}은(는) 마지막 순간에 우리에게 깊이 참회했어. 도망치지 않고 전력을 다한 그 마지막 도약이 바로 참회의 증거다.`,
    );
    await era.printAndWait(
      `힘과 강인함을 상징하는 여신 바이얼리 터크가 감탄 섞인 표정으로 ${me.name}을(를) 바라보았다.`,
    );
    era.printButton(`「세 여신님!?」`, 1);
    await era.input();
    await chara341_talk.say_and_wait(
      `${me.name}이(가) 본 대로, 우리는 이 에덴을 창조하고 수호하는 여신이란다.`,
    );
    await chara341_talk.say_and_wait(
      `죽기 직전에 이곳을 찾는 보통 사람은 셀 수 없이 많지만, 산 사람의 몸으로 이곳에 발을 들인 자는 아마 ${me.name} 한 사람뿐일 게다.`,
    );
    await chara340_talk.say_and_wait(`${me.name}, 바라는 소원이 있느냐?`);
    await chara340_talk.say_and_wait(
      `인간 사회의 섭리를 거스르는 것이 아니라면, 우리는 ${me.name}의 소원을 들어줄 수 있단다.`,
    );
    await era.printAndWait(`소원?`);
    await era.printAndWait(`지금까지 걸어온 고난의 길을 되새기며 내놓은 답은 하나였다.`);
    era.printButton(`「저를 현실 세계로, ${maru.name}의 곁으로 돌려보내 주세요」`, 1);
    await era.input();
    await chara342_talk.say_and_wait(
      `소원을 비는 순간 ${me.name}은(는) 인간 사회로 돌아가게 될 텐데, 정말 그것이 네 소원이냐?`,
    );
    era.printButton(`「존경하는 여신님, 보시는 바와 같이 그것이 제 소원입니다.」`, 1);
    await era.input();
    await me.say_and_wait(
      `내가 추구하는 아름다움은, 이런 평범한 사람의 기준에서 적당한 운을 바라는 것이 아니야. 거대한 대가를 치른 뒤에야 비로소 피어나는 것이지.`,
    );
    await me.say_and_wait(`비유하자면, 땀과 시간을 들여 미술 전시회의 추첨권을 얻은 것과 같아.`);
    await me.say_and_wait(`그 전시회에 들어가려면 반드시 그 표를 뽑아야만 해.`);
    await me.say_and_wait(
      `하지만 그 어떤 소원이라도, 설령 내 운이 좋아지게 해달라는 소원조차 내가 추구하는 아름다움의 가치를 깎아내릴 거야.`,
    );
    await me.say_and_wait(
      `소원을 비는 행위 자체가 오히려 내 목표에서 멀어지게 만드는, 공허한 산물일 뿐이야.`,
    );
    await chara340_talk.say_and_wait(
      `……${me.name}의 뜻이 정해졌다면, 우리가 배웅해 주마.`,
    );
    await chara341_talk.say_and_wait(
      `사랑스러운 아이야, 네 생애를 다 마치고 다시 이곳에 올 때는 부디 안식을 누리길 바란다.`,
    );
    await chara342_talk.say_and_wait(
      `……생쥐처럼 약할지언정, 약한 것은 육신일 뿐. 그 작은 몸 안에 깃든 용기는 육신에 국한되지 않으니 참으로 가상하구나.`,
    );
    await chara342_talk.say_and_wait(`어쩌면 내가 ${me.name}을(를) 얕보았을지도 모르겠군.`);
    await era.printAndWait(
      `${me.name}의 몸이 서서히 지면에서 떠올랐다. 세 여신의 배웅 속에 점점 더 높이, 더 빠르게 솟구치다 의식이 끊기는 그 순간까지 보였던 황금빛 초원.`,
    );
    await era.printAndWait(
      `……그리고, 환영으로서의 ${maru.sex}가 ${me.name}에게 작별의 손을 흔들고 있었다.`,
    );
    era.drawLine();
    await maru.say_and_wait(`${callname}?`);
    await era.printAndWait(`아주 긴 시간이 흐른 것 같기도 하고, 찰나였던 것 같기도 했다.`);
    await era.printAndWait(
      `${maru.name}의 눈에는 그저 너무 지쳐서 잠시 잠든 것처럼 보였던 모양이다.`,
    );
    era.printButton(`「다녀왔어, ${maru.name}.」`, 1);
    await era.input();
    await era.printAndWait(`꿈속의 환영처럼, ${maru.name}은(는) 환한 미소를 지었다.`);
    await maru.say_and_wait(`어서 와!`);
    await print_event_name(`GOOD END - 에덴의 꿈`, maru);
    await era.printAndWait(`Thank you for playing!`);
  }
  wait_flag && (await era.waitAnyKey());
};