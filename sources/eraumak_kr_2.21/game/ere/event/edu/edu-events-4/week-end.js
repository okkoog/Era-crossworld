const era = require('#/era-electron');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/**
 * @this CustomizedEdu
 * @param {CharaTalk} maru
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} ebj
 */
module.exports = async function (maru, me, hook, ebj) {
  const luna = get_chara_talk(17);
  const digital = get_chara_talk(19);
  const edu_marks = new MaEduMarks();
  const edu_weeks = era.get('cflag:4:육성턴수합산');
  let wait_flag = false;
if (ebj?.arg === 'beginning') {
    // ${zensky.name} 등장부터 바람 수치가 1로 시작. 최종 엔딩은 바람 수치에 따름. 예: TE=20 GE = 17-19 나머지는 모두 NE
    // 비록 경쟁은 극심한 소모를 야기하겠지만, 당신은 그곳의 풍경을 보고 싶지 않나요?
    await print_event_name(`서장·${maru.name} 등장`, maru);
    await era.printAndWait(`잔디밭 위에서`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 이제 같이 어디라도 좀 둘러보러 갈까?`,
    );
    await era.printAndWait(`곁에 앉은 ${maru.get_uma_sex_title()}가 당신에게 말을 건다.`);
    era.printButton(`「미안, 아직 트레이닝실에 가서 서류를 정리해야 해.」`, 1);
    await era.input();
    await era.printAndWait(`하늘은 낙조로 인해 금빛으로 물들어 있었다.`);
    await maru.say_and_wait(
      `이거 내가 졌네. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 이렇게 열심히 하니까, ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}도 한 바퀴 더 뛰고 싶어지는걸♪`,
    );
    await era.printAndWait(
      `${me.actual_name}의 곁에 바짝 붙어 앉아 있던 ${maru.get_uma_sex_title()}가 수분을 보충한 뒤 일어섰다. 잔광에 비친 웨이브 진 긴 머리카락은 마치 타오르는 불꽃 같았다.`,
    );
    await me.say_and_wait(`너무 무리해서 뛰지는 마.`);
    await maru.say_and_wait(`알았어♪`);
    await era.printAndWait(
      `당신의 허락을 받은 ${maru.sex_code - 1 ? '그녀' : '그'}는 다시 출발선으로 돌아갔다.`,
    );
    await era.printAndWait(`출발 신호탄 소리와 함께, 잔디밭 위에 다시 한번 불꽃이 타오른다.`);
    await era.printAndWait(
      `불꽃의 주인 또한 질주하며 불어오는 강한 바람을 맞으며 진심 어린 미소를 지었다.`,
    );
    era.drawLine();
    await era.printAndWait(
      `다시 트레이닝실로 돌아온 ${me.actual_name}은(는), 마지막 햇살이 사그라들기 전에 가지고 있던 서류철을 원래 자리에 돌려놓았다.`,
    );
    await era.printAndWait(
      `원래는 ${maru.name}의 주행 데이터를 정리하려던 ${me.actual_name}였으나, 지금은 어느 편지 한 통에 마음을 빼앗겼다.`,
    );
    await me.say_and_wait(`이건 뭐지?`, true);
    await era.printAndWait(`주변 분위기와는 어울리지 않는, 청춘의 기운이 가득한 봉투였다.`);
    await era.printAndWait(
      `우편번호도 적혀 있지 않고, 주소는 자신의 사무실, 수신인도 ${me.actual_name}(이)라고 잘 적혀 있었지만, 마지막 발신인 부분에는...`,
    );
    await me.say_and_wait(`${maru.name}?`, true);
    await era.printAndWait(`의구심을 가득 품은 채 봉투를 뜯었다.`);
    await maru.say_and_wait(
      `짠! 이 편지를 읽고 있을 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 이런 방식 꽤 멋지다고 생각하지 않니?`,
    );
    await maru.say_and_wait(
      `사실 처음에 계획했던 건 네가 트레이닝실에 돌아올 때쯤 맞춰서 갑자기 문자를 보내는 거였는데, 버튼 조작이 익숙지 않아서 정말 답답해 죽는 줄 알았지 뭐야 ><`,
    );
    await maru.say_and_wait(
      `결국 타협해서 편지를 쓰게 됐지만... 하지만! ${
        era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'
      }가 우연히 발견했는데, 편지로 마음을 전하는 게 요즘 다시 유행하기 시작했나 봐! 역시, ${
        era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'
      }는 언제나 유행의 선구자라니까♪`,
    );
    await maru.say_and_wait(
      `이렇게 기세 좋게 써 내려가긴 했는데, 정작 뭘 하면 좋을까?`,
    );
    await maru.say_and_wait(
      `——음, 만화 같은 전개를 생각해보면, 역시 옥상 같은 데가 분위기 있지 않겠어?`,
    );
    await maru.say_and_wait(
      `그러니까 오늘 밤 7시 반에 옥상에서 만나자! 그럼, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 이따 봐!`,
    );
    await era.printAndWait(
      `봉투에서 편지지를 꺼내 펼친 채로, ${me.actual_name}은(는) 선 자리에서 그대로 읽어 내려갔다.`,
    );
    await me.say_and_wait(`정말 유행에 민감하네.`, true);
    await me.say_and_wait(
      `어쨌든 앞으로 3년 동안 밤낮으로 함께할 파트너니까, 만났을 때 상대에 대해 좀 더 알아둬야겠지.`,
      true,
    );
    era.printButton(`「그리고」`, 1);
    await era.input();
    say_by_passer_by(
      `행인 ${maru.get_uma_sex_title()}`,
      `에? 마루젠 ${era.get('cflag:0:성별') - 1 ? '선배' : '선배'}가 설마 그런 사람을 3년이나 담당으로 허락했다고?`,
    );
    say_by_passer_by(
      `행인 트레이너`,
      `결국 ${me.actual_name}은(는) 괴물 같은 ${maru.name}의 변덕에 눈에 띈 운 좋은 녀석일 뿐이야. 정말 운도 좋군.`,
    );
    await me.say_and_wait(`괴물의 변덕에 눈에 띈 행운아인가?`);
    await era.printAndWait(
      `그 말대로, ${maru.name}를 영입하려던 트레이너 중에는 커리어 내내 훌륭한 성적을 거둔 엘리트 트레이너들이 수두룩했다.`,
    );
    await era.printAndWait(
      `자신은 그들과 비교하면 낙관적으로 봐도 경력 차이가 존재했고, ${maru.name}의 선택을 받은 것도 그저 어쩌다 마음의 문을 두드리는 데 성공했기 때문일지 모른다.`,
    );
    await era.printAndWait(`다음번에도 내가 이렇게 운이 좋을 수 있을까?`);
    await era.printAndWait(`억지로 다시 업무에 집중하려 애썼다.`);
    await era.printAndWait(`스마트폰을 슬쩍 보니, 잠금 화면에 표시된 시간은 6시 5분이었다.`);
    await me.say_and_wait(`앞으로 더 노력해야겠어.`);
    await era.printAndWait(
      `편지 봉투를 서랍에 넣은 뒤, ${me.actual_name}은(는) 다시 업무 속으로 도망치듯 몰두했다.`,
    );
    era.drawLine();
    await era.printAndWait(`슬슬 출발해야 할 시간이네.`);
    await era.printAndWait(
      `트레이닝실에서 교사동 옥상까지는 대략 10분 정도 걸린다. 예의를 생각하면 10분 전쯤 도착하는 게 적당하겠지.`,
    );
    await era.printAndWait(`마침 잠금 화면에 표시된 시간은 7시 정각이었다.`);
    era.printButton(`「출발!」`, 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(
      `밤바람은 낮보다 훨씬 부드럽게 불어왔다. 가만히 느껴보니 달콤한 향기가 코끝을 간지럽혔다.`,
    );
    await me.say_and_wait(`내일도 날씨가 좋겠네.`);
    await maru.say_and_wait(`그러게, 매일매일이 오늘처럼 좋은 날씨였으면 좋겠어.`);
    await me.say_and_wait(`그러게. 어라?`);
    await era.printAndWait(`맞장구를 치려던 찰나, 뒤에서 들려온 익숙한 목소리에 뒤늦게 깨달았다.`);
    await era.printAndWait(
      `${maru.sex_code - 1 ? '그녀' : '그'}와 대화하기 위해 급히 뒤를 돌아보았지만, 뒤에는 아무도 없었다.`,
    );
    await maru.say_and_wait(
      `어머, 그런 거였어? ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 정말 귀엽네.`,
    );
    await era.printAndWait(`갑자기 누군가 뒤에서 안아왔다.`);
    await me.say_and_wait(`!!!`);
    await era.printAndWait(`밤은 산들바람의 장난 속에 더욱 정적에 잠겼다.`);
    await era.printAndWait(
      `뒤에서 안겼지만, 더 이상의 움직임 없이 그 자리에 멈춰 있었다.`,
    );
    await maru.say_and_wait(
      `미안해, 그냥 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}을 보니까 나도 모르게 그만.`,
    );
    await era.printAndWait(`등 뒤에서 부드럽게 감싸 안았던 팔이 허리에서 떨어졌다.`);
    await era.printAndWait(
      `자유로워진 당신은 다시 몸을 돌려 이 ${maru.sex_code - 1 ? '소녀' : '소년'}를 바라보았다.`,
    );
    await era.printAndWait(
      `잔디밭 위에서의 타오르는 듯한 모습과는 달리, 달빛 아래 조용히 서 있는 ${maru.name}가 당신에게 미소 짓고 있었다.`,
    );
    era.printButton(`「……${maru.name}」`, 1);
    await era.input();
    await era.printAndWait(`입을 떼려 했지만, 무슨 말을 해야 할지 알 수 없었다.`);
    await era.printAndWait(`그저 그렇게 묵묵히 서로를 바라볼 뿐.`);
    await era.printAndWait(`……왠지 모를 두려움이 느껴졌다.`);
    await era.printAndWait(`어떻게 해야 저 불꽃과 함께 춤출 수 있을까?`);
    await era.printAndWait(`어떻게 해야 ${maru.name}가 나만을 바라보게 할 수 있을까?`);
    era.printButton(`「……」`, 1);
    await era.input();
    await maru.say_and_wait(`^_^ 사실 그렇게 긴장할 필요 없어. 평소처럼 대화하면 되거든.`);
    await era.printAndWait(
      `너무 긴장한 당신의 모습이 ${maru.sex_code - 1 ? '그녀' : '그'}에게는 재미있게 보였나 보다.`,
    );
    await maru.say_and_wait(
      `타인을 배려하는 것도 좋지만, 자신의 솔직한 기분을 표현하지 않으면 말이야.`,
    );
    await maru.say_and_wait(
      `소통하고 싶어도 참 어려워지지 않겠어? 그러니까 뭐든 훌훌 털어버린다는 마음가짐이 중요해!`,
    );
    await era.printAndWait(`마음속 깊은 곳을 들킨 것만 같았다.`);
    await me.say_and_wait(
      `그렇네, 내 앞에 서 있는 건 앞으로 3년 동안 파트너가 될 ${maru.name} ${
        maru.sex_code === 1 ? '선생님' : '씨'
      }니까.`,
    );
    await era.printAndWait(
      `——그 비췻빛의 맑은 두 눈에 격려받아, 생각지도 못한 말이 튀어나왔다.`,
    );
    await maru.say_and_wait(
      `그래야지. 바로 ${era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'}라구.`,
    );
    await me.say_and_wait(`${maru.name}의 눈은 정말 예쁘네.`);
    await me.say_and_wait(`이 눈에 매료된 사람도 분명 많겠지.`);
    await me.say_and_wait(
      `게다가 이렇게 다른 사람을 격려해주는 ${maru.name}에게 반한 사람도 한둘이 아닐 거야.`,
    );
    await maru.say_and_wait(
      `어머나—— 생각보다 말솜씨가 좋은걸? 방황하는 ${maru.get_uma_sex_title()}와 사람들을 선배로서 이끌어주는 건 당연한 일이잖니♪`,
    );
    await maru.say_and_wait(
      `하물며 앞으로 파트너가 될 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 이라면 더더욱 그렇고.`,
    );
    await maru.say_and_wait(`음—— 앞으로도 이런 템포로 즐겁게 지내보자구.`);
    await maru.say_and_wait(
      `자, 다시 한번. ${maru.name}, 앞으로 3년 동안의 파트너이자 담당 ${maru.get_uma_sex_title()}로서, 잘 부탁해♪`,
    );
    era.printButton(`「잘 부탁해, ${maru.name}」`, 1);
    await era.input();
    await era.printAndWait(
      `보드라운 피부와 그 안에 깃든 힘을 충분히 느끼며, ${me.actual_name}은(는) 그 손을 꽉 잡았다.`,
    );
    await era.printAndWait(
      `당신과 ${maru.name}가 계약한 뒤 가진 첫 공식적인 만남은 이렇게 끝이 났다.`,
    );
    // 바람 속성 1 상승

  } else if (ebj?.arg === 'dream') {
    await print_event_name(`초록 꿈`, maru);
    // 헛되고 아스라한 꿈, 득실이 덧없음, 혹은 어리둥절한 꿈결 같은 상황을 비유.
    maru.print(
      `깨어났을 때, 나는 풀밭에 누워 있었다. 주변은 꽃밭이었고, 곁에 있는 풀밭에서 지평선 끝까지 이어져 있었다.`,
    );
    maru.print(`평소라면 즐거운 마음으로 꽃밭을 거닐었을지도 모른다.`);
    maru.print(`하지만 왠지 모르게 출구를 찾아야 한다는 마음이 앞섰다.`);
    await maru.say_and_wait(`그런데, 어느 방향으로 가야 좋을까?`);
    era.printButton(`「가시 돋친 장미 덩굴」`, 1);
    era.printButton(`「거대한 관목 미로」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      maru.print(`내가 하는 일들이 전부 너를 고통스럽게 하기 위해서일까?`);
      maru.print(`가시덩굴을 헤치는 순간, 귓가에 탄식 소리가 들리는 듯했다.`);
      maru.print(`앞으로 나아갈수록 가시덩굴은 빽빽해졌고, 헤치는 데 더 큰 힘이 필요했다.`);
      maru.print(`게다가 뒤편의 길은 어느샌가 막혀 있었다.`);
      await maru.say_and_wait(`퇴로가 없어.`);
      maru.print(`몸도 위기감을 느낀 듯 미세하게 떨려왔다.`);
      maru.print(
        `평범한 인간이나, 혹은 조금 약한 ${maru.get_uma_sex_title()}였다면 햇빛 한 줄기 보이지 않는 이 감옥 속에서 길을 잃었을지도 모른다.`,
      );
      maru.print(
        `점점 팔에 힘이 빠지기 시작했다. 땀방울이 피부를 타고 지면으로 굴러떨어져 관목 숲에 흡수되었다.`,
      );
      maru.print(`하지만 어디를 봐도 출구는 보이지 않았다.`);
      await say_by_passer_by(`장미들`, `이런 상황에서도 포기하지 않을 셈인가요?`);
      maru.print(`관목 숲 사이에서 속삭임이 들려왔다.`);
      await maru.say_and_wait(
        `바깥세상은 생각보다 훨씬 풍요롭고 아름답단다? 이런 곳에서 옷자락이 걸려 멈춰있기엔 너무 아깝지 않니?`,
      );
      await say_by_passer_by(
        `장미들`,
        `과연 그렇군요, 이해했습니다. 절망적인 상황이기에 더욱 낙관적으로 대처하는 것이군요.`,
      );
      maru.print(`속삭임은 점점 커졌다.`);
      await say_by_passer_by(`환영의 목소리`, `이제 힘이 다했어, 넌 이제 기운이 없어.`);
      await say_by_passer_by(
        `환영의 목소리`,
        `너의 호흡, 애써 갈무리하고 있지만 이미 눈치챘다구?`,
      );
      await say_by_passer_by(
        `환영의 목소리`,
        `그 조급함, 그 불안함은 네 말투와는 전혀 딴판이잖아?`,
      );
      await say_by_passer_by(
        `환영의 목소리`,
        `사실 넌 그 트레이너를 생각만큼 용서하지 않았지?`,
      );
      await say_by_passer_by(
        `환영의 목소리`,
        `설령 일시적으로 의식해서 억누르고 있다 해도, 의심의 씨앗은 이미 뿌려졌다구?`,
      );
      await say_by_passer_by(`환영의 목소리`, `그러니 그를 용서할 필요는...`);
      await maru.say_and_wait(`아아…… 알고 있어.`);
      await maru.say_and_wait(
        `${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }의 배신은 확실히 슬펐지.`,
      );
      await maru.say_and_wait(
        `하지만, 그런 ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }이라 해도 난 언제나 사랑하고 있단다?`,
      );
      await say_by_passer_by(
        `환영의 목소리`,
        `왜지? 어째서? 사랑 따위 언젠가 부서질 환상일 뿐인데.`,
      );
      await maru.say_and_wait(`사랑은 그렇게 천박한 게 아니야!`);
      await maru.say_and_wait(
        `연인 사이에 거품처럼 스러질 열정만 있다면, 언젠가 올 이별이 두려워 결코 행복할 수 없겠지.`,
      );
      await maru.say_and_wait(`그 공포가 언젠가는 행복의 달콤함을 압도해버릴 테니까.`);
      await maru.say_and_wait(
        `나도 언젠가 ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }을 잃게 될 고통에 짓눌릴까 봐 무섭긴 해.`,
      );
      await maru.say_and_wait(
        `하지만 난 ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }을 믿어.`,
      );
      await say_by_passer_by(`환영의 목소리`, `분명 널 배신했는데도?`);
      await maru.say_and_wait(`자신의 얄팍한 지혜만으로 절망해서는 안 되는 법이지.`);
      await maru.say_and_wait(
        `설령 온 세상 사람들이 입을 모아 불가능하다고 말해도 난 절망하지 않아.`,
      );
      await maru.say_and_wait(
        `인간은 자신의 미래를 예측할 수 없기에, 무엇이든 일어날 가능성이 있는 법이니까!`,
      );
      await say_by_passer_by(`환영의 목소리`, `그 낙관이 자신조차 지키지 못하는데도?`);
      await maru.say_and_wait(`지난 십수 년간, 이렇게 무사히 보내오지 않았니?`);
      await say_by_passer_by(`환영의 목소리`, `어?`);
      maru.print(
        `틈 없을 것 같던 가시벽에 작은 균열이 생겼고, 기회를 잡은 ${maru.name}는 그대로 감옥을 박차고 나갔다.`,
      );
      maru.print(`가시밭길을 벗어나자 온몸의 기운이 서서히 돌아오기 시작했다.`);
      await say_by_passer_by(`환영의 목소리`, `……생명은 가능성의 총합이기 때문인가요?`);
      maru.print(`말의 의미를 곱씹던 환영은, 깨달음을 얻은 찰나에 흩어져 사라졌다.`);
    } else {
      era.drawLine();
      maru.print(` 얼마나 지났을까, 여전히 벗어날 기미가 보이지 않았다.`);
      maru.print(`왼손 법칙을 써보든, 아예 벽을 밀어 넘어뜨리려 하든 결과는 똑같았다.`);
      maru.print(
        `설상가상으로 이전의 궤적을 따라 출발점으로 돌아가려 했으나, 그곳마저 벽이 연장되어 있었다.`,
      );
      await maru.say_and_wait(`음—— 조금 곤란한걸.`);
      maru.print(`일단 중심부라고 부를 만한 작은 공터로 물러날 수밖에 없었다.`);
      maru.print(
        `그곳을 공터라고 부르는 이유는, 강한 바람이 워낙 격렬해서 어떤 풀도 살아남지 못했기 때문이다.`,
      );
      maru.print(`특이하게도 그 강풍은 사람을 벽 쪽으로 밀어붙였다.`);
      maru.print(`지금까지는 재빨리 옆으로 비껴가며 처참하게 부딪히는 상황을 면해왔지만.`);
      maru.print(`하지만 시도해볼 수 있는 방법은 이제 전부 써버렸다.`);
      await maru.say_and_wait(`모든 가능성을 제외한다면, 남은 건...`);
      await era.printAndWait(`${maru.name}가 그 공터 안으로 걸어 들어갔다.`);
      await era.printAndWait(
        `몰아치는 광풍이 ${maru.sex_code - 1 ? '그녀' : '그'}를 쓰러뜨리려 했지만, ${
          maru.sex_code - 1 ? '그녀' : '그'
        }는 끝내 중심을 잡고 버텼다.`,
      );
      await era.printAndWait(`그리고.`);
      await era.printAndWait(`바람의 힘을 빌려 그 벽들을 향해 돌진했다.`);
      await era.printAndWait(`그러자 강력한 힘 앞에 벽들이 마디마디 균열을 일으키며 무너졌다.`);
      await era.printAndWait(`눈앞에 새로운 길이 펼쳐졌다.`);
    }
    await maru.say_and_wait(`도중에 여러 어려움이 있었지만, 다 무사히 넘겼네.`);
    await maru.say_and_wait(`앞으로 또 무엇이 기다리고 있을까?`);
    await maru.say_and_wait(
      `과거의 잿빛 그림자를 멀리 던져버리고, 꽃이 깔린 카펫 위를 걸어간다.`,
    );
    await maru.say_and_wait(`……내 직감이 말해주고 있어.`);
    era.printButton(`「잠에서 깼을 때의 방향을 향해 계속해서 달린다」`, 1);
    await era.input();
    await maru.say_and_wait(`준비!`);
    maru.print(`출발 신호탄 소리와 함께, ${maru.name}는 자신이 설정한 종착점을 향해 질주했다.`);
    maru.print(`아름다운 꽃들이 뒤로 빠르게 스쳐 지나갔고, 점차 그 형태를 유지하지 못하게 되었다.`);
    maru.print(`마치 오색찬란한 비단 리본처럼, 서서히 하나로 융합되어 갔다.`);
    maru.print(
      `호흡의 제약도 없이 그렇게 점점 더 빠르게, 더 빠르게. 마치 꽃밭의 일부로 녹아버릴 것만 같았다.`,
    );
    await maru.say_and_wait(`……이대로라면.`);
    era.printButton(`「이대로 계속 가속하자!」`, 1);
    await era.input();
    await maru.say_and_wait(`그럼 ${maru.name}의 진짜 실력을 보여줄게!`);
    await era.printAndWait(
      `귓가에 엔진의 굉음이 들려왔다. 틀림없다, 그건 타치의 목소리였다.`,
    );
    maru.print(`마치 차티가 나에게 힘을 빌려주는 것만 같았다.`);
    maru.print(`이대로, 이대로면 된 걸까?`);
    maru.print(`아니, 이걸로 충분해.`);
    maru.print(`어린 시절 처음 타치를 보았을 때의 동경을 품고.`);
    maru.print(`지평선 너머, 저기서 빛나는 광채.`);
    maru.print(`저기가 결승점이겠지. 이미 종착점이 보이고 있어.`);
    await maru.say_and_wait(`왠지 모르게 조금 서글픈걸.`);
    maru.print(`태양이 떠오르면 이 몽롱한 감촉도 사라지겠지.`);
    maru.print(`아마 이것이 꿈의 종말일지도 몰라.`);
    await maru.say_and_wait(`어머나, 이런 모습 나답지 않네.`);
    maru.print(
      `세상에 영원한 파티는 없는 법. 이 달콤한 추억은 영원히 잠들게 되겠지.`,
    );
    maru.print(`현실에서도 즐겁게 살아가야 한다? 약속이야.`);
    maru.print(`좋은 아침, ${maru.name}.`);
    await era.printAndWait(`${maru.name}가 눈을 떴다.`);
    await era.printAndWait(
      `따스한 햇살이 ${maru.sex_code - 1 ? '그녀' : '그'}의 긴 머리카락을 부드럽게 어루만지고 있었다.`,
    );
    await era.printAndWait(`그 여운을 되새기며, ${maru.name}는 몸을 일으켰다.`);
    await era.printAndWait(`새로운 하루가 시작되었다.`);
    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;

  } else if (edu_weeks === 39) {
    await print_event_name('할로윈 나이트', maru);
    await era.printAndWait(
      `마지막 데이터를 정리한 뒤, ${me.actual_name}은(는) 길게 한숨을 내뱉었다.`,
    );
    era.printButton(`「드디어 끝났다.」`, 1);
    await era.input();
    await era.printAndWait(`거의 감각이 없어진 다리를 움직였다. 겨울 밤은 여름보다 훨씬 길었다.`);
    await me.say_and_wait(`좀 걷고 올까`, true);
    await era.printAndWait(
      `업무를 모두 마쳤다는 성취감 덕분에 ${me.actual_name}의 발걸음이 가벼워졌다.`,
    );
    await era.printAndWait(
      `트레이닝실을 나서자, 학원 로비는 호박 등불과 보라색 리본 등으로 장식되어 신비로운 분위기의 고성처럼 변해 있었다.`,
    );
    await me.say_and_wait(`그러고 보니 오늘이 무슨 날이었더라?`, true);
    await say_by_passer_by(
      `활발한 ${maru.get_uma_sex_title()}들`,
      `사탕 안 주면 장난칠 거야!`,
    );
    await era.printAndWait(
      `유령, 늑대인간, 흡혈귀로 분장한 ${maru.get_uma_sex_title()}들에게 둘러싸였다!`,
    );
    await me.say_and_wait(`우와악!`);
    await era.printAndWait(
      `길모퉁이에 숨어있던 ${maru.get_uma_sex_title()}들에게 허를 찔려 깜짝 놀란 ${
        me.actual_name
      }은(는) 바닥에 엉덩방아를 찧었다.`,
    );
    await say_by_passer_by(
      `활발한 ${maru.get_uma_sex_title()}들`,
      `장난 성공!`,
    );
    await era.printAndWait(
      `행인을 놀라게 하는 데 성공한 ${maru.get_uma_sex_title()}들이 웃으며 달려갔고, 현장에는 피해자인 ${
        me.actual_name
      }만 남겨졌다.`,
    );
    await me.say_and_wait(`이렇게 꾸민 걸 보니 무슨 축제였던 것 같은데...`);
    await era.printAndWait(
      `열심히 기억을 더듬으며 ${me.actual_name}은(는) 엉덩이의 먼지를 털고 일어났다.`,
    );
    await me.say_and_wait(`학원 밖으로 나가보자.`);
    await era.printAndWait(`결심을 굳힌 ${me.actual_name}은(는) 로비를 떠났다.`);
    era.drawLine();
    await say_by_passer_by(
      `미라로 분장한 ${maru.get_uma_sex_title()}들`,
      `사탕 안 주면 장난칠 거야!`,
    );
    await era.printAndWait(
      `서양의 할로윈을 본뜬 듯, 트레센 학원의 ${maru.get_uma_sex_title()}들도 상점가 근처에서 집집마다 문을 두드리고 있었다.`,
    );
    await era.printAndWait(`가게 주인들도 미리 준비해둔 사탕을 내놓으며 대접하고 있었다.`);
    await me.say_and_wait(`오늘이 크리스마스였나?`);
    await era.printAndWait(
      `거대한 박쥐와 호박 등불이 걸린 입구를 보며, ${me.actual_name}은(는) 깊은 생각에 빠졌다.`,
    );
    await maru.say_and_wait(`HAPPY HALLOWEEN!`);
    await era.printAndWait(`입구에서 누군가 인사를 건네왔다.`);
    await me.say_and_wait(`${maru.name}?`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 해피 할로윈♪`,
    );
    await era.printAndWait(
      `짙은 보라색 마녀복을 코스프레한 ${maru.name}가 미소를 지으며 ${me.actual_name}를 바라보고 있었다.`,
    );
    await me.say_and_wait(`여기서 ${maru.name}를 만날 줄이야. 즐겁게 놀고 있어?`);
    await era.printAndWait(
      `실룩거리는 귀와 장난기 가득한 요정처럼 활발한 꼬리가 이미 대답을 대신하고 있었다.`,
    );
    await maru.say_and_wait(
      `이런 분위기 너무 좋아! ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}도 같이 놀면 훨씬 더 즐거울 텐데♪`,
    );
    await me.say_and_wait(`음……`);
    await era.printAndWait(
      `각종 괴물로 분장한 ${maru.get_uma_sex_title()}들은 모두 미성년자인 ${
        maru.get_teen_sex_title
      }들이라, 성인이 끼어들기엔 조금...`,
    );
    await me.say_and_wait(`오히려 영광이지.`);
    await era.printAndWait(
      `쌓였던 스트레스를 풀 겸, 온몸으로 이 즐거움의 바다에 뛰어들기로 했다.`,
    );
    await maru.say_and_wait(`후후♪ 그럼 약속한 거다?`);
    await me.say_and_wait(`약속할게.`);
    await me.say_and_wait(`휴식이라고 생각하자.`, true);
    await say_by_passer_by(
      `리치로 분장한 ${maru.get_uma_sex_title()}`,
      `선배! 이쪽 손이 모자라요!`,
    );
    await era.printAndWait(
      `사탕을 나눠주는 가판대가 ${maru.get_uma_sex_title()}들로 인산인해를 이룬 모양이다.`,
    );
    await maru.say_and_wait(`아이코, 나 먼저 가볼게.`);
    era.printButton(`「나도 도울게」`, 1);
    await era.input();
    await era.printAndWait(
      `사탕 세 포대를 다 나눠준 뒤, 녹초가 된 두 사람은 트레이닝실 소파에 대자로 뻗어버렸다.`,
    );
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 20], undefined) || wait_flag;
    era.set('cflag:4:축제이벤트표시', 0);

  } else if (edu_weeks === 41) {
    await print_event_name(`트레이너와 담당 ${maru.get_uma_sex_title()}`, maru);
    await era.printAndWait(`11월의 어느 날이었다.`);
    await era.printAndWait(
      `${me.name}은(는) 작년 아사히배 녹화 테이프를 보며, 그 기술들을 어떻게 활용해 ${maru.name}의 능력을 끌어올릴지 고민하고 있었다.`,
    );
    await me.say_and_wait(`과연 슈퍼카라고 불릴 만하네.`);
    await era.printAndWait(`달리기 위해 태어난 다리, 우아한 사지 아래 숨겨진 거대한 힘.`);
    await me.say_and_wait(`이 정도면 내가 없어도 가뿐히 이기겠는걸.`);
    await era.printAndWait(`일시정지 버튼을 누르고 커피 한 모금을 머금었다. 차가운 쓴맛이 입안에 천천히 퍼졌다.\n`);
    await era.printAndWait(`끼익.`);
    await maru.say_and_wait(
      `방가방가! ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 나 들어갈게.`,
    );
    await me.say_and_wait(`기분이 좋아 보이네, 무슨 좋은 일이라도 있었어?`);
    await maru.say_and_wait(
      `어머, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 한테 들켜버렸나?`,
    );
    await maru.say_and_wait(
      `오늘 선발 레이스에서 계속 눈여겨보던 후배가 드디어 장애물을 극복하고 똑같이 달리는 즐거움을 깨달았거든! \n`,
    );
    await me.say_and_wait(
      `${maru.name}가 그렇게 말하니 나도 그 후배의 실력이 궁금해지네. \n`,
    );
    await maru.say_and_wait(
      `그렇지 그렇지? 후배들이 아주 그냥—— 쑥쑥 성장하더라니까! 나도 깜짝 놀랐어.`,
    );
    await maru.say_and_wait(
      `이러다 언젠가 나도 후배들한테 쉽게 추월당해서 저 멀리 뒤처질지도 몰라. 아아, 압박감이 장난 아닌걸? \n`,
    );
    era.printButton(`「앞으로의 트레이닝도 힘내야겠네!」`, 1);
    await era.input();
    await maru.say_and_wait(
      `맞아! ${
        era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'
      }도 앞으로는 스파르타식으로 단련해야겠어! \n`,
    );
    await maru.say_and_wait(`그건 그렇고.`);
    await era.printAndWait(`${maru.name}가 뭔가 떠오른 듯 두 손을 가볍게 마주쳤다. \n`);
    await maru.say_and_wait(
      `맞다, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 훈련 끝나고 같이 드라이브 갈래?`,
    );
    await maru.say_and_wait(
      `다른 계절과 다르게 가을바람은 사람 기분을 참 상쾌하게 만들어주잖아.`,
    );
    await maru.say_and_wait(
      `근데 이렇게 말로만 하면 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 잘 못 느낄 것 같아. 그러니까 직접 몸으로 느껴보는 게 제일 좋을 것 같거든.`,
    );
    era.printButton(
      `「${maru.name}가 그렇게까지 말한다면 나도 가을바람을 느껴보고 싶네.」`,
      1,
    );
    await era.input();
    await me.say_and_wait(`${maru.name}가 말하는 가을바람이 어떤 느낌일지 기대되는걸?`);
    era.drawLine();
    await maru.say_and_wait(`후아, 바람을 맞고 나니 정말 모든 고민이 싹 가시는 기분이야.`);
    era.printButton(`「${maru.name}, 조금만 천천히 달려줄 수 있어?」`, 1);
    await era.input();
    await era.printAndWait(
      `조수석에 처음 탔을 때 기절할 뻔했던 것에 비하면, 이제 ${me.actual_name}도 서서히 이 속도에 적응해가고 있었다.`,
    );
    await me.say_and_wait(`인간은 생각보다 강인하구나.`, true);
    await me.say_and_wait(
      `고속으로 이동하는 기류 속에는 바람의 포효와 뒤로 급박하게 물러나는 풍경만이 존재했다.`,
      true,
    );
    await era.printAndWait(
      `열기가 섞인 여름도, 한기의 파편이 섞인 겨울도 아니었다.`,
    );
    await era.printAndWait(`가을의 바람에는 강렬한 해방감이 깃들어 있었다.`);
    await era.printAndWait(
      `마치 학창 시절 마지막 과제를 끝내고 펜을 내려놓으며 내뱉는 안도감 같기도 했다.`,
    );
    await era.printAndWait(
      `혹은 오랫동안 괴롭히던 무언가가 마침내 끝났을 때의 감각.`,
    );
    await era.printAndWait(
      `바람에 스치는 뺨에서 시작해 머리카락 한 올 한 올, 그리고 뇌를 거쳐 마침내 마음까지 전달되었다.`,
    );
    await era.printAndWait(`형언할 수 없는 상쾌함에 모든 것을 무작정 쏟아내고 싶어졌다.`);
    await me.say_and_wait(`${maru.name}, 어쩌면 나는...`);
    await maru.say_and_wait(`거의 다 왔어, 바다야!`);
    await era.printAndWait(`입 밖으로 나오려던 말들은 결국 침묵 속으로 흩어졌다.`);
    await me.say_and_wait(`……그렇네.`);
    era.drawLine();
    await era.printAndWait(
      `${maru.name}의 조수석에서 내린 뒤, ${me.actual_name}은(는) 먼 곳을 응시했다. 시야에는 깨알 같은 사람의 형체뿐이었다.`,
    );
    await era.printAndWait(
      `${maru.get_uma_sex_title()}라는 종족이 가진 선천적인 우월함 때문인지, 아니면 아직 파도에 씻기지 않은 발자국에서 유추한 상황인지는 알 수 없었다.`,
    );
    await maru.say_and_wait(`……`);
    await era.printAndWait(
      `이 짙푸른 공간 속에서, ${maru.name}는 일렁이는 파도를 응시하다가——`,
    );
    await era.printAndWait(`이내 쓸쓸한 표정을 지었다.`);
    await me.say_and_wait(`${maru.name}?`);
    await maru.say_and_wait(`어라?`);
    await maru.say_and_wait(
      `이렇게 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 이랑 휴일에 같이 바다를 보는 건 처음이네.`,
    );
    await era.printAndWait(
      `축축한 기운을 머금은 해풍이 정면으로 불어와 눈을 뜨기조차 힘들 정도였다.`,
    );
    await maru.say_and_wait(`어머나, 오늘 바람이 생각보다 거세네.`);
    await me.say_and_wait(`그러게.`);
    await me.say_and_wait(`해풍이란 게 원래 이렇게 약간 쓰고 짠 내음이 나는 거였구나.`);
    await maru.say_and_wait(
      `응, 비린내가 섞인 바람은 바다를 터전 삼아 살아가는 생물들에게 이정표가 되어주기도 해.`,
    );
    await maru.say_and_wait(`그들은 이 특별한 냄새를 의지해서 먹이를 찾거든.`);
    await maru.say_and_wait(
      `그러니 어떤 면에서는 이 냄새가 그들의 생존을 지탱하는 생명선이라고 할 수도 있겠지.`,
    );
    await me.say_and_wait(
      `${maru.name}는 언제나 다정한 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'} 같네.`,
    );
    await maru.say_and_wait(
      `아이참, 다른 사람은 몰라도 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}한테는 그런 소리 듣고 싶지 않은걸♪`,
    );
    await maru.say_and_wait(
      `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 그렇게 말해주니까 ${era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'} 조금 부끄러운걸.`,
    );
    await era.printAndWait(
      `${me.actual_name}의 칭찬에 ${maru.name}가 보기 드문 귀여운 표정을 지었다.`,
    );
    await me.say_and_wait(`세 여신님의 선물에 감사드립니다, 이미 배가 부르네요.`, true);
    await era.printAndWait(
      `그렇게 ${maru.name}의 귀여운 모습을 마음껏 눈에 담았다.`,
    );
    await era.printAndWait(
      `수십 년에 걸친 트레이너의 커리어에 비하면, 짧디짧은 3년은 거품처럼 찰나에 불과할지도 모른다.`,
    );
    await era.printAndWait(
      `그렇다고 해서 커리어에서 처음 만난 ${maru.get_uma_sex_title()}를 그저 연습 상대로 여겨도 된다는 뜻일까?`,
    );
    await era.printAndWait(
      `아니, 트레이너로서 우리의 능력은 분명 부족할 것이고, 우리에게 모든 것을 건 ${maru.get_uma_sex_title()}들을 실망시킬 수도 있다.`,
    );
    await era.printAndWait(`그럼에도 불구하고 우리는 계약을 선택해야만 한다.`);
    await era.printAndWait(`${maru.get_uma_sex_title()}들이 그것을 원하기 때문이다.`);
    await era.printAndWait(`그렇기에 트레이너에게 가장 중요한 것은 바로 경건한 마음이다.`);
    await era.printAndWait(
      `"비록 파멸할 가능성이 있을지라도, 트레이너로서 담당과 함께 빛나리라." 이 경건한 마음으로 트레이닝 과정 중의 모든 추함과 부족함을 구원받는 것이다.`,
    );
    await maru.say_and_wait(
      `슬슬 집에 가서 밥 먹어야지, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} ——`,
    );
    await era.printAndWait(`달이 떠올랐다.`);
    edu_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [10, 0, 10, 0, 0], 0) || wait_flag;

  } else if (edu_weeks === 47 + 12 && edu_marks.sister_annoyance === 1) {
    // 트레이너가 격려하고, 믿어줄 때 기운을 차리는 이벤트
    edu_marks.sister_annoyance++;
    await print_event_name(
      `${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}의 고민`,
      maru,
    );
    await era.printAndWait(`옥상\n`);
    await era.printAndWait(`오늘 처리해야 할 자료들을 정리한 뒤, 당신은 옥상으로 향했다.`);
    await era.printAndWait(
      `레이스 후의 ${maru.name}는 어딘가 이상해 보였고, 대화할 때도 어딘가 집중하지 못하는 기색이었다.`,
    );
    await era.printAndWait(
      `착각일 수도 있겠지만, 당신은 친구로서 ${maru.sex_code - 1 ? '그녀' : '그'}의 고민에 좀 더 깊이 다가가고 싶었다.`,
    );
    await me.say_and_wait(`한꺼번에 전부 해결할 수 있다면 참 좋을 텐데.`);
    await era.printAndWait(
      `${maru.name}의 능력이라면 어떤 좌절이라도 쉽게 이겨낼 수 있을 거라 믿으며.\n`,
    );
    say_by_passer_by(`의사`, `${maru.name}의 정강이뼈 부분에 손상이 확인되었습니다.`);
    say_by_passer_by(`의사`, `이대로 계속하면 걷거나 뛰는 능력에 지장이 생길 수 있습니다.`);
    say_by_passer_by(`의사`, `트레이닝을 중단하고 당분간 충분한 휴식을 취하는 게 좋겠습니다.`);
    await me.say_and_wait(`알겠습니다.`);
    await era.printAndWait(`진단서를 가방에 넣고 막 떠나려던 찰나, 누군가 불러 세웠다.`);
    say_by_passer_by(`의사`, `당신이 ${maru.name}의 트레이너입니까?`);
    await me.say_and_wait(`네, 그렇습니다.`);
    say_by_passer_by(`의사`, `${maru.name}의 다리는 생각보다 연약합니다.`);
    say_by_passer_by(
      `의사`,
      `그 때문인지, 당신도 꽤 오랫동안 제대로 잠을 자지 못한 것 같군요.`,
    );
    await me.say_and_wait(`그렇네요.`);
    say_by_passer_by(
      `의사`,
      `주목받는 레이스 ${maru.get_uma_sex_title()}를 지도하는 트레이너가 짊어질 압박감은 상상 이상으로 거대할 겁니다.`,
    );
    say_by_passer_by(`의사`, `건강 유의하십시오.\n`);
    await me.say_and_wait(`……감사합니다.`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} ?`,
    );
    await era.printAndWait(
      `${maru.name}의 부름에 상념이 깨졌다. 약속 시간까지는 아직 10분 정도 여유가 있었다.`,
    );
    await me.say_and_wait(`아, 마침 나도 막 도착했어.`);
    await era.printAndWait(
      `흰색 원피스를 입은 ${maru.get_uma_sex_title()}가 옥상에 나타났다.`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 생각보다 서둘러서 온 모양이네?`,
    );
    await me.say_and_wait(
      `응, 오늘은 날씨가 좋아서 ${maru.name}랑 같이 시간을 보내고 싶었거든.`,
    );
    await me.say_and_wait(
      `그리고 자세히 보니 오늘따라 평소보다 더 예쁘게 꾸민 것 같네. 게다가 쟈스민 향기도 나는 것 같고.`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 웬일로 직접 초대해줬는데, 신경 좀 쓰고 나와야지.`,
    );
    await me.say_and_wait(`그렇게 말하니 오히려 내가 너무 평범하게 온 것 같아서 실례네.`);
    await era.printAndWait(
      `무슨 말부터 꺼내야 할지 몰라 침묵이 이어지자, 결국 ${maru.name}가 먼저 화제를 꺼냈다.`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 이 평소에 열심히 노력하는 모습, ${era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'} 정말 감동했어.`,
    );
    await maru.say_and_wait(
      `어떻게 하면 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}을 좀 쉬게 해줄까 고민하고 있었는데, 먼저 이렇게 불러줄 줄은 몰랐는걸.`,
    );
    await maru.say_and_wait(
      `사실 그렇게까지 항상 신경을 곤두세우고 있을 필요는 없어. 좀 더 ${era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'}한테 의지해도 괜찮아.`,
    );
    await era.printAndWait(`${maru.name}의 격려에 팽팽했던 긴장이 조금씩 풀리기 시작했다.`);
    await me.say_and_wait(
      `알겠어. 앞으로도 ${maru.name} ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}, 잘 부탁할게.`,
    );
    await me.say_and_wait(`자, 그럼 본론으로 들어갈까.`);
    await era.printAndWait(
      `긴장 탓에 하얘졌던 머릿속이 서서히 정리되기 시작했다.`,
    );
    await me.say_and_wait(`너에 대해 좀 더 알고 싶어.`);
    await maru.say_and_wait(
      `나랑 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 항상 같이 있잖아? 새삼스럽게 무슨 소리야?`,
    );
    await me.say_and_wait(`아니, 그런 게 아니야.`);
    await era.printAndWait(
      `당신은 단호하게 고개를 저으며 ${maru.sex_code - 1 ? '그녀' : '그'}의 두 눈을 정면으로 응시했다.`,
    );
    await me.say_and_wait(`다른 사람의 속사정을 캐묻는 게 좋은 일이 아니라는 건 알아.`);
    await me.say_and_wait(
      `하지만 트레이닝실에서 쉴 때 가끔씩 보여주던 ${maru.name}의 침울한 모습...`,
    );
    await me.say_and_wait(
      `그걸 볼 때마다 가슴에 무거운 돌을 얹은 것처럼 괴로웠어. 그때 깨달았지. 사실 난 ${maru.name}에 대해 아는 게 너무 없다는 걸.`,
    );
    await me.say_and_wait(`그러니까 이건 부탁이 아니라 선언이야.`);
    era.printButton(`「${maru.name}에 대해 더 많이 알고 싶어.」`, 1);
    await era.input();
    await era.printAndWait(
      `${maru.name}의 눈동자가 갑자기 커지더니 눈을 빠르게 깜빡였다. 당신의 시선을 피하려다 이내 평정을 되찾았다.`,
    );
    await maru.say_and_wait(`나도 똑같은 태도로 대답하지 않으면 안 되겠네.`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 뭐가 알고 싶은데?`,
    );
    await me.say_and_wait(`네가 요즘 왜 그렇게 기운이 없는지 알고 싶어.`);
    await me.say_and_wait(
      `더 이상 즐겁지 않은 거야? 아니면 달리는 다른 ${maru.get_uma_sex_title()}들의 자포자기한 심정이 느껴져서 그래?`,
    );
    await maru.say_and_wait(`……`);
    await era.printAndWait(
      `${maru.name}는 망설였다. 자신의 진짜 속마음을 털어놓을지 말지 고민하고 있었다.`,
    );
    await maru.say_and_wait(`……미안해.`);
    await era.printAndWait(`${maru.name}의 목소리가 무척이나 가라앉아 있었다.`);
    era.printButton(`「아니, 나야말로 미안.」`, 1);
    await era.input();
    await me.say_and_wait(`사실 내가 사과해야 할 쪽이야. 너무 조급했어.`);
    await me.say_and_wait(`기다릴게. 네가 직접 나에게 털어놔 줄 날이 올 때까지.`);
    await me.say_and_wait(
      `그러니까 고개를 들어. 넌 내가 본 중 가장 아름다운 ${maru.get_uma_sex_title()}니까.`,
    );
    await maru.say_and_wait(
      `고마워, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} .`,
    );
    await era.printAndWait(`${maru.name}가 평소의 모습으로 돌아왔다.`);
    await maru.say_and_wait(`역시 믿음직한 어른이네.`);
    await maru.say_and_wait(
      `지금 기분은 마치 줄곧 챙겨주던 ${era.get('cflag:0:성별') - 1 ? '여동생' : '남동생'}이 갑자기 자기를 챙겨주겠다고 나선 것 같아.`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}로서 기분이 참 묘한걸——`,
    );
    await era.printAndWait(
      `함께 자란 ${era.get('cflag:0:성별') - 1 ? '여동생' : '남동생'}을 바라보는 듯한 자애로운 눈빛.`,
    );
    await maru.say_and_wait(`그럼 약속한 거다——`);
    await maru.say_and_wait(
      `무슨 일이 생기면 반드시 ${era.get('cflag:4:성별') - 1 ? '이 누나' : '이 오빠'}랑 상의하기로!`,
    );
    era.printButton(`「무슨 일이 생기든 ${maru.name}에게 확실히 말할게.」`, 1);
    await era.input();
    await me.say_and_wait(
      `듬직한 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}니까 어떤 문제든 척척 해결해주겠지.`,
    );
    await maru.say_and_wait(`당빠지!`);
    await me.say_and_wait(`나도 믿고 있어.`);
    await maru.say_and_wait(`그러고 보니 오늘 날씨 참 좋네, 타치랑 같이 드라이브 가자——`);
    await me.say_and_wait(`좋아.`);
    await me.say_and_wait(`뭔가 잊은 건 없나?`, true);
    await era.printAndWait(
      `담소를 나누며 두 사람은 타치를 향해 걸어갔다. 잠시 후, 비명 소리가 트레센 학원에 울려 퍼졌다.`,
    );
    edu_marks.wind--;

    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;

  } else if (edu_weeks === 47 + 16) {
    await print_event_name(`안녕, ${maru.name}`, maru);
    await era.printAndWait(`아파트.`);
    await me.say_and_wait(`다음 훈련 계획은 일단 여기까지 써두자.`, true);
    await era.printAndWait(
      `부드러운 조명 아래, ${me.actual_name}은(는) 컴퓨터 앞에 앉아 휴일에 밀린 업무를 처리하고 있었다. 낮 동안 활기찬 함성으로 가득한 트레센과는 달리, 밤의 트레이너 숙소는 유달리 조용했다.`,
    );
    await me.say_and_wait(`벌써 12시가 다 됐나?`, true);
    await era.printAndWait(
      `마지막 서류를 정리해 이사장에게 전송한 뒤, ${me.actual_name}은(는) 피로한 눈을 비비며 소파에 몸을 던졌다.`,
    );
    await me.say_and_wait(`씻고 푹 자야겠다.`, true);
    await era.printAndWait(
      `두 눈을 질끈 감으며 하루의 피로를 씻어내려 애썼다. 그리고 깊게 숨을 들이마시며 몸 안의 짜증을 밖으로 밀어냈다.`,
    );
    await era.printAndWait(`웅웅웅`);
    await me.say_and_wait(`이 시간에 스팸 전화가 올 리는 없을 텐데.`, true);
    await era.printAndWait(
      `몸은 천근만근이었지만, 직장인의 본능으로 스마트폰을 확인했다.`,
    );
    await me.say_and_wait(`${maru.name}?`);
    await era.printAndWait(
      `담당 ${maru.get_uma_sex_title()}가 왜 이 야심한 시각에 전화를 했는지 의아했지만, 망설임 없이 전화를 받았다.`,
    );
    await maru.say_and_wait(
      `하이~ ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} , 오늘 밤 날씨 정말 킹왕짱이네~`,
    );
    await me.say_and_wait(`이쪽은 맨날 보던 풍경이라 특별할 것도 없는데.`);
    await me.say_and_wait(`그리고,`);
    await era.printAndWait(
      `아직 정화되지 않은 짜증이 튀어나오지 않도록 심호흡을 크게 한 번 했다.`,
    );
    era.printButton(`「밤새면 피부 거칠어지니까 빨리 가서 자!」`, 1);
    await era.input();
    await maru.say_and_wait(
      `정말 대략난감이네~! ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 맨날 그렇게 안습한 소리만 하구. 그러다간 나 정말 스트레스 만땅 될지도?`,
    );
    await era.printAndWait(
      `${maru.name}의 은어들을 뇌로 처리하며 그 의미를 떠올리는 데 꼬박 10초가 걸렸다.`,
    );
    await me.say_and_wait(`그건 그렇고, ${maru.name}, 왜 갑자기 전화를 한 거야?`);
    await maru.say_and_wait(
      `한숨 자고 일어났는데 도저히 잠이 안 와서 말이야. 그래서 그냥 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 한테 가기로 했어.`,
    );
    await me.say_and_wait(`뭐라고?`);
    await era.printAndWait(
      `방금 뭔가 엄청난 소리를 들은 것 같았지만, 일단 계속 들어보기로 했다.`,
    );
    await maru.say_and_wait(
      `처음엔 잠이 안 와서 좀 막막했는데, 밖의 달을 보니까 기분도 상쾌해지더라구. 특히 트레센을 지날 때 밤바람의 시원한 기운이 느껴져서 정말 기분 킹왕짱이야⭐`,
    );
    era.printButton(`「설마——」`, 1);
    await era.input();
    await era.printAndWait(
      `트레이너 제복으로 갈아입기도 전에, 잠시 머물고 있던 방 문이 열렸다.`,
    );
    await maru.say_and_wait(
      `안녕, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} `,
    );
    await me.say_and_wait(`에?`);
    await era.printAndWait(
      `${maru.sex_code - 1 ? '그녀' : '그'}의 미소 띤 얼굴에 경악한 자신의 모습이 비쳤다.`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} ?`,
    );
    era.drawLine();
    await era.printAndWait(
      `한바탕 설교를 들은 뒤, ${maru.name}는 소파에 다소곳이 무릎을 꿇고 앉아 있었다.`,
    );
    await maru.say_and_wait(`정말 고마워♪`);
    await era.printAndWait(
      `그 후, 당신은 난데없는 손님과 함께 탁자 위에 쌓인 잡동사니를 치웠다. 그리고 ${maru.sex_code - 1 ? '그녀' : '그'}에게 인스턴트 홍차를 건넸다.`,
    );
    await era.printAndWait(
      `홍차를 홀짝홀짝 마시는 ${maru.name}를 보며 당신은 한숨을 내쉬었다.`,
    );
    await era.printAndWait(
      `이 밤중에 ${maru.sex} 혼자 돌려보내는 건 위험하지만, 그렇다고 학생을 함부로 재울 수도 없는 노릇이다.`,
    );
    await me.say_and_wait(`어떡하면 좋지?`, true);
    await maru.say_and_wait(
      `저기, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} ?`,
    );
    await era.printAndWait(`${maru.name}가 답변을 기다리고 있다. 여기서는 역시...\n`);
    era.printButton(`${maru.sex_code - 1 ? '그녀' : '그'}를 오늘 밤 여기서 재운다.`, 1);
    era.printButton(`「고집스럽게 ${maru.sex_code - 1 ? '그녀' : '그'}를 돌려보낸다.」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(
        `${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }, 안색이 별로 안 좋아 보여.`,
      );
      await me.say_and_wait(
        `다음 주 트레이닝 방안에 수정할 부분이 생각나서 고민하느라 그래.`,
      );
      await maru.say_and_wait(
        ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 정말 고생 많네.`,
      );
      await era.printAndWait(
        `${maru.name}에게 습관처럼 머리를 쓰다듬어졌다. 처음엔 거부감도 들었지만, 시간이 흐르자 트레이너로서의 마지막 자존심인 신음 소리만 남게 되었다.`,
      );
      await maru.say_and_wait(`미안해, 앞으론 안 그럴게.`);
      await era.printAndWait(
        `평소의 의례적인 사과와 달리, 이번 사과에는 당신을 걱정하게 만든 것에 대한 진심 어린 미안함이 담겨 있었다.`,
      );
      await era.printAndWait(
        `${maru.sex}의 풀 죽은 모습을 보니 차마 마음을 모질게 먹을 수 없어 다시 한번 한숨을 쉬었다.`,
      );
      await me.say_and_wait(
        `이 시간에 혼자 보내는 건 불안하니까, 오늘 밤은 여기서 자고 가.`,
      );
      await era.printAndWait(
        `파파라치니, 내일 자 1면 기사니, 타즈나 ${
          maru.sex_code === 1 ? ' 선생님' : ' 씨'
        }의 싸늘한 눈초리와 잔소리, 그리고 한 달 치 월급... 이제 아무래도 상관없다.`,
      );
      await me.say_and_wait(`내 침대에서 자, 난 소파에서 잘 테니까.`);
      await maru.say_and_wait(`음—— 그건 좀 아쉬운데?`);
      await me.say_and_wait(`한밤중에 쳐들어온 주범이 요구 사항도 많네!`);
      await maru.say_and_wait(`뎨-둉-합-니-다!`);
      await me.say_and_wait(`그런 이상한 말투 쓰지 마.`);
      await era.printAndWait(
        `미소녀 연애 시뮬레이션 게임에서나 나올 법한 러브 코미디 같은 상황이 현실에서 벌어지고 있다. 분명 기뻐해야 할 일인데.`,
      );
      await era.printAndWait(
        `하지만 이미 무장한 파파라치가 당신이 ${maru.name}를 방으로 들인 것을 찍었을지도 모른다는 생각, 내일 아침 대서특필될 기사, 그리고 타즈나 ${
          maru.sex_code === 1 ? ' 선생님' : ' 씨'
        }의 싸늘한 시선과 날아간 월급 봉투가 떠오를 뿐이다.`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(`당신은 꽤나 괴로운 하룻밤을 보냈다.`);
      edu_marks.wind++;
} else {
      await me.say_and_wait(`……${maru.name}, 역시 그냥 데려다줘야겠어.`);
      await maru.say_and_wait(`에? 정말로?`);
      await era.printAndWait(
        `한바탕 격렬한 실랑이 끝에, 당신은 결국 ${maru.name}을 설득해 머물고 있는 아파트로 돌려보냈다.`,
      );
      await era.printAndWait(
        `알고 보니 이런 행동조차 ${maru.sex_code - 1 ? '그녀' : '그'}의 예상 범위 안이었다.`,
      );
      await maru.say_and_wait(
        `시간도 늦었으니 ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }은 그냥 여기서 자고 가. 그게, 이 주변엔 파파라치가 의외로 많거든.`,
      );
      await maru.say_and_wait(`방금 다투는 소리에 다들 잠에서 깨버렸을걸?`);
      await maru.say_and_wait(
        `${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }도 내일 연예 잡지 1면을 장식하고 싶진 않지?`,
      );
      await era.printAndWait(`당신은 문득 이것이야말로 진짜 함정이라는 것을 깨달았다.`);
      await maru.say_and_wait(
        `그럼, ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }. 잘 자!`,
      );
      await era.printAndWait(
        `당신은 ${maru.name}가 빌려준 담요를 덮고 소파에서 하룻밤을 보냈다.`,
      );
      await era.printAndWait(
        `다음 날, 특종 냄새를 맡고 몰려든 파파라치들과 벌인 지략 싸움은 또 다른 모험의 이야기다.`,
      );
      edu_marks.wind--;
    }

    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
  } else if (edu_weeks === 47 + 21 && edu_marks.girls_blue === 1) {
    edu_marks.girls_blue++;
    await print_event_name(`${maru.get_teen_sex_title()}의 우울`, maru);
    await era.printAndWait(`빈 교실`);
    await era.printAndWait(
      `${maru.name} 몰래, 당신은 작은 쪽지에 적혀 있던 약속 장소로 향했다.`,
    );
    await era.printAndWait(`약속 시간보다 5분 정도 늦게 교실 문을 열었다.`);
    await era.printAndWait(`오랫동안 사용하지 않은 빈 교실이었지만.`);
    await era.printAndWait(`공기 중에는 생각보다 케케묵은 느낌이 없었다.`);
    await era.printAndWait(`아마 방금 내린 비 덕분일 것이다.`);
    await era.printAndWait(`옅은 안개가 여전히 먼 발치의 훈련장에 머물러 있었다.`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `결국 왔나요? 마루젠 선배——`,
    );
    await era.printAndWait(`눈앞에 나타난 것은, 예전에 관객석에서 당신에게 감사를 표했던 그 모습이었다.`);
    await me.say_and_wait(`미안, ${maru.name}는 일이 생겨서 못 오게 됐어.`);
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `……그럴 수가, 분명히`);
    await era.printAndWait(`${maru.get_uma_sex_title()}가 당신을 똑바로 쏘아보았다——`);
    await era.printAndWait(
      `이상하게도, 화가 난 모습이라기보다는 무언가를 갈구하는 듯한 눈빛이었다.`,
    );
    await me.say_and_wait(`미안해.`);
    await era.printAndWait(
      `따지고 보면 처음부터 끝까지 자신의 개인적인 욕망을 채우기 위해 저지른 잘못이었다.`,
    );
    await me.say_and_wait(
      `진정해, 나도 방금 알게 된 거야. ${maru.name}가 얼마 전 쪽지를 하나 주웠거든——\n`,
    );
    await maru.say_and_wait(
      `무슨 일이 생기면, 꼭 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}랑 상의해야 한다?`,
    );
    await era.printAndWait(`두뇌가 자연스럽게 ${maru.name}와 나누었던 맹세를 떠올렸다.`);
    await era.printAndWait(`그렇게 자책감에 휩싸여 괴로워했다.`);
    await me.say_and_wait(
      `그래서 좀 고민하다가 나한테 말하더라고. 어떤 ${maru.get_uma_sex_title()}가 ${maru.sex_code - 1 ? '그녀' : '그'}와 옥상에서 만나기로 약속했다고 말이야.`,
    );
    await me.say_and_wait(`그러니까, 미안하게 됐어.`);
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `……`);
    await era.printAndWait(
      `상대방이 다음에 무슨 행동을 할지 알 수 없었다. 도망치고 싶었지만, 만약 ${maru.sex_code - 1 ? '그녀' : '그'}가 이대로 돌아가 ${maru.name}에게 말해버린다면——`,
    );
    await era.printAndWait(`그렇게 호기심에 이끌려 어둠의 심연 속으로 발을 들였다.`);
    await me.say_and_wait(`이제는 정면으로 돌파할 수밖에 없어.`);
    await era.printAndWait(
      `처음에는 휘몰아치는 감정에 압도당할 뻔했지만, 막상 최고조에 달하자 내면은 오히려 고요해졌다.`,
    );
    await me.say_and_wait(
      `미안해, 이건 내가 자원한 일이야. ${maru.name}의 트레이너로서, 담당의 고민은 내가 해결해야 하니까.`,
    );
    await me.say_and_wait(`${maru.name}만 하지는 못하겠지만, 그래도 트레이너로서——.`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `저기, 당신은 ${maru.name} 선배를 어떻게 생각하시나요?`,
    );
    await me.say_and_wait(`에?`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()}`,
      `당신이 품고 있는 ${maru.name} 선배의 인상은 어떤가요?`,
    );
    await era.printAndWait(`가슴 속에서 어떤 느낌이 조용히 솟구쳤다.`);
    await era.printAndWait(`초조하고 괴로운 후회가 마음을 엄습했다.`);
    await me.say_and_wait(`내 생각에 그녀는`);
    era.printButton(`「듬직하고 신뢰할 수 있는 관점에서」`, 1);
    era.printButton(`「상냥하고 의지할 수 있는 관점에서」`, 2);
    era.printButton(`「선배와 후배 사이의 관계라는 관점에서」`, 3);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await me.say_and_wait(`마루젠스키는 듬직하——`);
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `죄송해요, 제가 원한 답은 그게 아니에요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `지난번에 도와주신 보답으로, 마루젠 선배에게는 말하지 않을게요. 트레이너 ${me.get_adult_sex_title()}.`,
      );
      await era.printAndWait(
        `${maru.get_uma_sex_title()}는 가볍게 목례를 한 뒤 빈 교실을 떠났고, 이곳에는 다시 당신 혼자만 남게 되었다.`,
      );
      edu_marks.happiness_day++;
      era.set('flag:강제배드엔딩', 4);
    } else if (ret1 === 2) {
      await me.say_and_wait(`마루젠스키는 무척 상냥하——`);
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `죄송해요, 제가 원한 답은 그게 아니에요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `지난번에 도와주신 보답으로, 마루젠 선배에게는 말하지 않을게요. 트레이너 ${me.get_adult_sex_title()}.`,
      );
      await era.printAndWait(
        `${maru.get_uma_sex_title()}는 가볍게 목례를 한 뒤 빈 교실을 떠났고, 이곳에는 다시 당신 혼자만 남게 되었다.`,
      );
      edu_marks.happiness_day++;
      era.set('flag:강제배드엔딩', 4);
    } else if (ret1 === 3) {
      await era.printAndWait(
        `듬직함이나 상냥함 모두, 어쩌면 ${maru.name}가 자신의 앞에서 보여주는 겉모습일 뿐일지도 모른다.`,
      );
      await era.printAndWait(
        `같은 ${maru.get_uma_sex_title()}의 관점에서 생각한다면, 아니, ${
          maru.sex_code - 1 ? '그녀' : '그'
        }가 갈망하는 ${maru.name}라는 이름의 아이돌.`,
      );
      await me.say_and_wait(
        `${maru.name}는 후배들을 극진히 아끼고, 가능한 한 많은 도움을 주려 노력하는…… 아이돌이라고 생각해.`,
      );
      await say_by_passer_by(`${maru.get_uma_sex_title()}`, `어째서, 아이돌인가요?`);
      await me.say_and_wait(
        `${maru.name}는 후배들이 ${
          maru.sex_code - 1 ? '그녀' : '그'
        }의 뒷모습을 뛰어넘기를 갈망하고 있어. 후배들이 ${
          maru.sex_code - 1 ? '그녀' : '그'
        }가 달리는 모습을 보고 청춘의 활력을 뿜어내기를 바라고 있지.`,
      );
      await me.say_and_wait(
        `${maru.sex_code - 1 ? '그녀' : '그'}의 뒷모습에 도달하고, 뛰어넘고, 경기장에서 ${
          maru.sex_code - 1 ? '그녀' : '그'
        }를 격파하는 것. 그리고 마지막으로는—— 자유롭게 상쾌한 공기를 즐길 수 있게 되는 것 말이야.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `……그래요. 마루젠 선배는 정말 그런 분이었죠.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `마루젠 선배의 트레이너님이기도 하고, 예전에 경기장에서 저를 도와주기도 하셨으니까, 제 생각에는……`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `어쩌면 마루젠 선배보다는 당신에게 털어놓는 게 더 나을지도 모르겠네요.`,
      );
      await era.printAndWait(
        `${maru.get_uma_sex_title()}는 창가에 서서 오른손으로 창틀을 짚은 채, 운동장과 안뜰 사이로 시선을 옮겼다. 무언가 정답을 쫓는 것 같기도, 무언가를 회피하는 것 같기도 했다.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `저, 레이스 ${maru.get_uma_sex_title()}를 그만두려고 해요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `아주 오래전부터 제가 레이스 ${maru.get_uma_sex_title()}에 어울리지 않는다는 걸 알고 있었어요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `하지만 ${maru.name} 선배가 격려해 주셨고, 그 격려 덕분에 지금까지 버텨온 거예요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `하지만 레이스 ${maru.get_uma_sex_title()}의 세계는 노력만으로 성공할 수 있는 동화 속 같은 곳이 아니더라고요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `G1은커녕 G2조차 저에게는 넘을 수 없는 거대한 벽이었어요. 아무리 노력해도 상대는 늘 저보다 뛰어나고 재능이 넘쳤죠.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `위너스 서클 중앙에서 꽃다발과 찬사를 받는 1위를 보며, 패자인 우리는 입착권에 들지 못한다면 그간의 노력이 아무 의미도 없게 느껴져요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `낮이든 비가 오는 날이든, 누구보다 일찍 일어나 감각이 사라질 정도로 노력했지만 결국 실패했어요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `가끔은, 아주 가끔은 저를 격려해 줬던 마루젠 선배에게 어두운 감정이 생기기도 해요. ${
          maru.sex_code - 1 ? '그녀' : '그'
        }의 멱살을 잡고 바닥에 짓누르며 따져 묻고 싶을 때가 있어요.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `그때 당신이 격려해주지 않았다면, 나도 지금까지 상처뿐인 채로 버티지는 않았을 거라고요.`,
      );
      await era.printAndWait(
        `오랫동안 억눌러온 우울함을 쏟아붓듯, ${maru.get_uma_sex_title()}는 비정상적으로 격앙된 감정으로 가슴 속 고통을 토해냈다.`,
      );
      await era.printAndWait(
        `밤은 먹물처럼 어두워 ${
          maru.sex_code - 1 ? '그녀' : '그'
        }의 표정을 거의 볼 수 없었지만, 거울 같은 달빛이 옥반에 떨어지는 진주 같은 눈물방울을 비추며 뚝뚝 소리를 냈다.`,
      );
      await say_by_passer_by(
        `${maru.get_uma_sex_title()}`,
        `죄송해요, 제가 너무 흥분했네요. 들어주셔서 감사해요. 그럼 안녕히 계세요, 트레이너님.`,
      );
      await era.printAndWait(
        `그 말을 남기고, 더 이상 감정을 주체하지 못한 ${maru.get_uma_sex_title()}는 교실을 뛰쳐나갔다.`,
      );
      await me.say_and_wait(`너도 결국……`);
      await era.printAndWait(`당신은 한참 동안 깊은 생각에 잠겼다.`);
    }
    await maru.say_and_wait(
      `만약 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}에게 고민이 생기면, 꼭 ${era.get('cflag:4:성별') - 1 ? '누나' : '형'}한테 솔직하게 말해야 해?`,
    );
    await era.printAndWait(
      `먼 곳에서 들려오는 듯하기도, 텅 빈 교실 안에 메아리치는 듯하기도 했다.`,
    );
    await era.printAndWait(`가슴 속에 자리 잡은 이 불안함을 떨쳐낼 수가 없었다.`);
    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 0, 0, 0], 120) || wait_flag;
  } else if (edu_weeks === 47 + 32) {
    if (era.get('flag:현재위치') === location_enum.beach) {
      if (era.get('cflag:4:위치') !== era.get('cflag:0:위치')) {
        add_event(event_hooks.week_end, ebj);
      }
      return;
    }
    await print_event_name(`여름 합숙 종료`, maru);
    maru.print(`합숙이 생각보다 더 빨리 지나갔네.`);
    maru.print(
      `스페${maru.sex_code - 1 ? '짱' : '군'}들이 백사장에서 청춘을 불태우며 필사적으로 달리는 모습을 보니까.`,
    );
    maru.print(`한밤중에 혼자 바닷가에 나가 밀물과 썰물을 바라보는 것과는 또 다른 느낌이랄까.`);
    await maru.say_and_wait(
      `…… ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}.`,
    );
    maru.print(
      `의외로 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 배신에 그렇게 화가 나진 않더라고.`,
    );
    maru.print(`마치, 마치 말이야.`);
    era.drawLine();
    await maru.say_and_wait(`합숙이 생각보다 빨리 끝났네.`);
    era.printButton(`「그러게.」`, 1);
    await era.input();
    await me.say_and_wait(`일단 집중하기 시작하면 시간은 늘 모자란 법이니까.`);
    await maru.say_and_wait(`그래도 시간은 되돌릴 수 없겠지?`);
    await me.say_and_wait(`적어도 즐거운 추억은 남겼잖아?`);
    await maru.say_and_wait(
      `후후, 맞아. 어젯밤 스페${maru.sex_code - 1 ? '짱' : '군'}들과 했던 쫑파티, 그전에는 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이랑 해변에서 물놀이한 거, 더 거슬러 올라가면 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이랑 같이 즐긴 마을 축제까지.`,
    );
    await maru.say_and_wait(`그렇게 따져보면 사실 정말 충실하게 보냈네.`);
    await maru.say_and_wait(`정말 8월 초로 돌아가서 다시 시작하고 싶어지네~`);
    era.printButton(`「아마 시간이 의미에 의해 고정되었기 때문 아닐까?」`, 1);
    await era.input();
    await me.say_and_wait(`의미가 부여되었기에 결국 무언가를 남긴 거겠지?`);
    await maru.say_and_wait(`후후, 정말 흥미로운 생각이네.`);
    await maru.say_and_wait(
      `그렇다면, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 나랑 같이 이 마지막 여름 합숙을 즐겨줄래?`,
    );
    await me.say_and_wait(`?`);
    await era.printAndWait(
      `얼마 지나지 않아, 조수석에 앉은 당신은 운전에 대한 트라우마가 생기기 시작했다.`,
    );
    edu_marks.wind++;

    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 10, 0, 0], 120) || wait_flag;
  } else if (edu_weeks === 47 + 33) {
    await print_event_name(`물과 모래`, maru);
    await era.printAndWait(
      `다행히 그동안 ${maru.name}는 원래의 훈련을 소홀히 하지 않았다.`,
    );
    await era.printAndWait(`그 사실에 안도하며 마음이 조금 가벼워졌다.`);
    await era.printAndWait(`당신은 업무에서 시선을 돌려 자리에서 일어나 기지개를 켰다.`);
    await era.printAndWait(
      `백사장은 마치 신비로운 베일에 싸인 듯했고, 멀지 않은 곳에서 ${maru.get_uma_sex_title()}들이 기세등등하게 모래사장을 돌며 체력 훈련을 하고 있었다.`,
    );
    await me.say_and_wait(`벌써 시간이 이렇게 됐나.`);
    await era.printAndWait(
      `그 축제 이후, 당신과 ${maru.name} 사이의 거리는 한층 더 가까워진 듯했다.`,
    );
    await era.printAndWait(
      `마치 마침내 ${maru.sex_code - 1 ? '그녀' : '그'}의 내면 깊숙한 곳으로 들어갈 허락을 받은 것 같았다.`,
    );
    await me.say_and_wait(`${maru.name}.`);
    await era.printAndWait(
      `어떻게든 ${maru.sex_code - 1 ? '그녀' : '그'}와 진지하게 대화해야 한다. 그리고 어쩌면 기회는 이번 한 번뿐일지도 모른다.`,
    );
    await era.printAndWait(`당신은 결정했다.`);
    era.printButton(`「${maru.name}를 찾는다」`, 1);
    era.printButton(`「${maru.name}를 찾는다」`, 2);
    await era.input();
    era.drawLine();
    await era.printAndWait(
      `석양의 잔광이 백사장에 쏟아지며, 금빛 광채와 고운 모래알이 어우러져 마치 해변 전체가 금칠을 한 듯 빛났다.`,
    );
    await era.printAndWait(`어째서인지 초조함이 서서히 사라졌다.`);
    await era.printAndWait(
      `발가락과 모래 사이의 마찰이 주는 간질거리는 느낌은 곧 기분 좋은 쾌감으로 변했고, 마음도 덩달아 들뜨기 시작했다.`,
    );
    await era.printAndWait(
      `멀리 주황빛과 진한 푸른빛이 만나는 경계선에 서 있는 실루엣이, 다른 ${maru.get_uma_sex_title()}들이 말해준 ${maru.name}일 것이다.`,
    );
    await era.printAndWait(`당신이 지켜보던 실루엣도 당신의 등장을 눈치챈 것 같았다. 그리고——`);
    await era.printAndWait(`목소리는 파도 소리에 조용히 녹아들었다.`);
    await era.printAndWait(
      `파도가 부드럽게 해변을 때리며, 밀려왔다 밀려가는 물소리가 마치 하루의 이야기를 들려주는 듯했다.`,
    );
    era.drawLine();
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}! 여기 물 캡짱 시원해!`,
    );
    await era.printAndWait(`${maru.name}가 기쁘게 손을 흔들었다.`);
    await me.say_and_wait(`${maru.name}.`);
    await era.printAndWait(
      `당신은 약간 복잡한 심정으로 ${maru.name}를 바라보다가, 신발을 벗고 맨발로 바다를 향해 걸어갔다.`,
    );
    await era.printAndWait(
      `차가운 감각보다 먼저 느껴진 것은 묘하게 가로막는 듯한 저항감이었다.`,
    );
    await era.printAndWait(
      `하지만 의식적으로 앞으로 다가가자, 그런 불편함도 서서히 사라졌다.`,
    );
    era.printButton(`「여름 기분은 좀 어때?」`, 1);
    era.printButton(`「바닷물 느낌이 킹왕짱하지 않아?」`, 2);
    await era.input();
    await maru.say_and_wait(
      `몸만 시원해지는 게 아니라, 이 뜨거웠던 마음까지 단번에 차분해지는 기분이야.`,
    );
    await me.say_and_wait(
      `즐겁게 노는 ${maru.name}의 모습을 보니, 정말 내일이 오는 게 기다려지는데.`,
    );
    await maru.say_and_wait(`내일도 맑고 좋은 날씨가 되겠지?`);
    await era.printAndWait(
      `${maru.sex_code - 1 ? '소녀' : '소년'}는 해변 위에서 저녁까지 연습을 이어가는 ${maru.get_uma_sex_title()}들을 바라보았다.`,
    );
    await me.say_and_wait(
      `어쩌면 무언가를 잃고 고통 속에 몸부림친 뒤에야, 비로소 예전에 얼마나 오만하게 모든 것을 낭비했는지 뼈저리게 깨닫게 되는 걸지도 몰라.`,
    );
    await maru.say_and_wait(
      `……그렇게 고통과 방황을 겪고 나서야, 온 힘을 다해 짜낸 무언가가 진정한 빛을 발하는 거겠지.`,
    );
    await maru.say_and_wait(
      `방황과 고통이 각오로 변하는 그 순간을, 난 계속 기다려왔어.`,
    );
    await era.printAndWait(`말을 마친 두 사람은 침묵에 빠졌다. 이윽고 당신이 먼저 입을 열었다.`);
    await me.say_and_wait(`${maru.name}, 내 이야기 좀 들어줄래?`);
    await maru.say_and_wait(
      `난 이미 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 때문에 여신의 자리에서 끌어내려졌는데, 이번엔 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 또 무슨 야한 짓이라도 하려는 거야?`,
    );
    await era.printAndWait(
      `무서워서(?) 미세하게 떨고 있는 ${maru.name}를 보며, 당신은 방금 전의 과격한 발언 때문에 괜히 얼굴이 붉어졌다.`,
    );
    era.printButton(`「콜록콜록, 사실은 너에게 해줄 말이 있어.」`, 1);
    await era.input();
    await era.printAndWait(
      `트레이너로서의 품위(이제 와서 그런 게 남아있긴 한지는 모르겠지만)를 유지하기 위해 자세를 가다듬은 뒤.`,
    );
    era.printButton(`「다시 한번 그 빛나는 뒷모습을 보여줘!」`, 1);
    era.printButton(`「어떻게 해서든, 그 뒷모습이, 그 바람이 다시 불게 해줘.」`, 2);
    await era.input();
    await maru.say_and_wait(
      `! 에? 아무리 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 부탁이라지만, 그건 좀`,
    );
    await me.say_and_wait(
      `아니, 알고 있어. 아니, 나뿐만이 아니야. 내가 모르는 사람들도 모두 그 순간을 기다리고 있다는 걸 알아.`,
    );
    await maru.say_and_wait(
      `아무리 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 그렇게 말해도`,
    );
    era.printButton(`「그 후 ${maru.name}, 너 자신을 보긴 한거야?」`, 1);
    await era.input();
    await maru.say_and_wait(
      `노력하면 반드시 성공한다는 환상은 늘 현실에 깨지기 마련 아니야?`,
    );
    await me.say_and_wait(
      `아니, 결과보다는 고통을 피하려던 사람들이 결국 마지막 순간에 깨닫는 건, 꿈을 쫓는 과정 그 자체가 가진 의미야.`,
    );
    await me.say_and_wait(
      `그리고 설령 그렇다 해도, 그런 자신을 혐오하기보다는 방황과 고통 끝에 지쳐버린 사람들이기에 비로소 세상이 말하는 '미(美)'라는 것에 주목하게 되는 거지.`,
    );
    await me.say_and_wait(
      ` 그렇게 기대하고, 갈망하고, 자신의 방황이 드디어 선명해질 순간을 기도하는 거야.`,
    );
    await me.say_and_wait(
      ` 그리고 그 아름다움을 깨달은 순간, 그 눈부신 아름다움에 완전히 사로잡히는 찰나를 말이지.`,
    );
    await me.say_and_wait(` 비록 인생이 고난으로 가득 차 있을지라도.`);
    await me.say_and_wait(` 비록 처음 겪는 일들에 허둥댈지라도.`);
    await me.say_and_wait(
      ` 비록 이 고통을 남에게 털어놓지 못해 깊이 억눌린 마음일지라도.`,
    );
    era.printButton(`「나도 그 아름다운 뒷모습을 보고 싶어.」`, 1);
    await era.input();
    await me.say_and_wait(
      ` 하지만 반대로 보면, 그것이야말로 사람을 탈바꿈시키는 가장 강력한 바람이 될 거야.`,
    );
    await me.say_and_wait(`분명, 그 아름다운 뒷모습을 쫓으며 다시 기억해낼 수 있을 거야!`);
    await me.say_and_wait(`그러니 제발 힘을 보태줘.`);
    await era.printAndWait(
      `그렇게 ${maru.sex_code - 1 ? '그녀' : '그'}의 눈을 똑바로 응시했다.`,
    );
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 내가 뭘 하길 바라는 거야?`,
    );
    await me.say_and_wait(`학원 운동장에서 내가 너에게 가장 잊지 못할 장면을 보여줄게.`);
    await maru.say_and_wait(`기대하고 있을게?`);
    await era.printAndWait(
      `그 미소는 마치 봄날에 처음 핀 꽃 같았다. ${maru.name}는 그 순간이 오기를 기대하고 있었다.`,
    );

    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
  } else if (edu_weeks === 47 + 34) {
    digital.name = '심볼리 루돌프';
    await print_event_name(`무풍지대`, maru);
    await era.printAndWait(`당신은 손에 든 연습장을 멍하니 바라보았다.`);
    await me.say_and_wait(
      `아니야, 이래선 ${maru.sex_code - 1 ? '그녀' : '그'}의 응어리를 풀 수 없어.`,
      true,
    );
    await era.printAndWait(`눈앞의 연습장을 구겨서 옆으로 던져버렸다.`);
    await era.printAndWait(`날아간 종이 뭉치는 포물선을 그리며 다른 종이 뭉치들과 부딪혔다.`);
    await era.printAndWait(`도망치고 싶은 마음, 할 수 없다는 좌절감이 그렇게 번져나갔다.`);
    await era.printAndWait(`똑똑똑.`);
    await say_by_passer_by(
      `${maru.get_uma_sex_title()} A`,
      `혹시 ${me.actual_name} ${maru.sex_code === 1 ? ' 선생님' : ' 씨'} 계신가요?`,
    );
    era.printButton(`「네, 무슨 일이시죠?」`, 1);
    await era.input();
    say_by_passer_by(
      `${maru.get_uma_sex_title()} A`,
      `아, 트레이너 ${me.adult_sex_title}. 회장님이 트레이너 ${
        me.adult_sex_title
      }께 전할 말이 있다고 하셔서요.`,
    );
    say_by_passer_by(
      `${maru.get_uma_sex_title()} A`,
      `『내가 당신이 원하는 답을 가지고 있다.』 라고요.`,
    );
    await me.say_and_wait(`……알겠습니다. 지금 바로 가죠.`);
    await me.say_and_wait(`언제부터, 아니 설마 처음부터 곁에서 지켜보고 있었던 건가?`, true);
    era.drawLine();
    await era.printAndWait(`${maru.get_uma_sex_title()}의 뒤를 따랐다.`);
    await me.say_and_wait(`루돌프는 어디까지 알고 있는 거지?`, true);
    await era.printAndWait(`묘한 초조함이 내면을 잠식했다.`);
    await say_by_passer_by(`${maru.get_uma_sex_title()}`, `실례합니다. `);
    await era.printAndWait(
      `${maru.get_uma_sex_title()}의 안내로 당신은 밤의 학생회실에 도착했다.`,
    );
    await era.printAndWait(`eclipse first, the rest nowhere.`);
    await era.printAndWait(
      `거대한 현판과 서류 처리에 몰두하고 있는 황제의 모습에 당신은 식은땀을 흘렸다.`,
    );
    await digital.say_and_wait(`왔나?`);
    await era.printAndWait(
      `방금 당신의 존재를 알아차린 듯, 일을 멈춘 황제가 여유로운 미소를 띠며 당신을 바라보았다.`,
    );
    await digital.say_and_wait(`자네는 오늘 밤 달이 어떠하다고 생각하나?`);
    await me.say_and_wait(
      `어제의 달과 크게 다르지 않군요. 그리고 황제 폐하, 다시 뵙게 되어 영광입니다.`,
    );
    await era.printAndWait(
      `${maru.sex_code - 1 ? '그녀' : '그'}를 화나게 해서는 안 된다. 그랬다간 끔찍한 결과가 초래될 테니까.`,
    );
    await era.printAndWait(
      `그렇다고 너무 아첨해서도 안 된다. ${maru.sex_code - 1 ? '그녀' : '그'}가 흥미를 잃게 할 테니까.`,
    );
    await digital.say_and_wait(
      `이렇게 우수한 트레이너를 만나게 되다니, 트레센의 학생회장으로서 나 또한 매우 영광이군.`,
    );
    await me.say_and_wait(`상대방이 기량을 보여줄 때는 거절하지 않는 편이 좋다.`, true);
    await digital.say_and_wait(`그리고`);
    await era.printAndWait(
      `대답이 마음에 들었는지 어쨌는지 알 수 없는 표정으로, 황제는 곧바로 두 번째 질문을 던졌다.`,
    );
    await digital.say_and_wait(
      `자네는 트레이너와 ${maru.get_uma_sex_title()} 사이의 관계가 어떠해야 한다고 생각하나? ${maru.name}의 트레이너여.`,
    );
    await era.printAndWait(`마지막 호칭의 어조를 고의로 높인 것은 아마 힌트를 주기 위함이리라.`);
    await me.say_and_wait(
      `${maru.get_uma_sex_title()}와 트레이너의 관계는 서로를 지탱해 주는 관계여야 한다고 생각합니다.`,
    );
    await digital.say_and_wait(`……그리고?`);
    await era.printAndWait(`황제가 장난기 어린 표정으로 당신을 쳐다보았다.`);
    await me.say_and_wait(`예를 들어 이인삼각 같은……`);
    await digital.say_and_wait(
      `겨우 그 정도인가? 그렇다면 자네는 어째서 지금 같은 처지에 놓이게 된 거지?`,
    );
    await digital.say_and_wait(
      `트레이너란, 즉 ${maru.get_uma_sex_title()}의 지도자다.`,
    );
    await digital.say_and_wait(
      `길이 없는 곳에서 길을 만들고, 이미 지나온 길에서 새로운 길을 찾아내며, 타인을 미지의 땅으로 이끄는 자다.`,
    );
    await digital.say_and_wait(
      `${maru.get_uma_sex_title()}가 미래에 대한 방황과 불안에 직면했을 때, 그들의 비전과 확신을 적절히 관리해 줄 수 있어야 하지.`,
    );
    await digital.say_and_wait(`자네는 그중 무엇을 해냈나?`);
    await me.say_and_wait(`……`);
    await me.say_and_wait(`황제는 트레이너에게 필요한 리더십을 이야기하고 있다.`, true);
    await me.say_and_wait(
      `그리고 여기서 ${maru.sex_code - 1 ? '그녀' : '그'}는 내가 ${maru.name}의 트레이너로서 자격이 있는지를 증명하길 원하고 있어.`,
      true,
    );
    await me.say_and_wait(`그렇다면`, true);
    await me.say_and_wait(
      `……제가 가고자 하는 곳이 ${maru.sex_code - 1 ? '그녀' : '그'}와 같은 방향이라면, 저는 배를 탈 것입니다. 조건은 선원이 되는 것이죠.`,
    );
    await me.say_and_wait(
      `매 순간 제가 목표를 향해 나아가고 있는지 살피고, 매 순간 선장에게 협력하는 것이 자발적인 저의 선택임을 자각할 것입니다.`,
    );
    await me.say_and_wait(
      `이것은 제가 스스로 선택한 조건으로, 제가 정한 곳에서, 제 의지에 따라 내린 결정입니다.`,
    );
    await me.say_and_wait(
      `불필요한 짐, 오해받을 위험, 홀로 견뎌야 하는 고독까지도 말이죠.`,
    );
    await me.say_and_wait(`……어떤 의미에서 이것은 제가 이상에 바치는 제물입니다.`);
    await me.say_and_wait(`하지만 이상의 길에 대가가 없을 리 없지 않겠습니까.`);

    await me.say_and_wait(
      `그러니 제가 따르는 것은 선장의 명령이라기보다, 제 자신의 선택입니다.`,
    );
    await digital.say_and_wait(`복종이란 결국 굴복을 그럴싸하게 포장한 말에 불과하다.`);
    await digital.say_and_wait(`그저 공포 속에서 내뱉는 임기응변의 거짓말 아닌가?`);
    await me.say_and_wait(`……황제 폐하께서도 미꾸라지라는 생물에 대해 들어보셨겠지요.`);
    await digital.say_and_wait(`논이나 못에서 흔히 볼 수 있는 생물 아닌가, 그게 왜?`);
    await me.say_and_wait(`그렇다면 미꾸라지는 참 잡기 어려운 생물이라는 것도 아시겠군요.`);
    await me.say_and_wait(
      `논바닥 밑에서 이리저리 미끄러지며 잡기 힘들고, 운 좋게 손에 닿아도 금방 빠져나가 버리죠.`,
    );
    await me.say_and_wait(`늘 도망치기만 하는 우리 인간이 그 교활한 미꾸라지와 무엇이 다르겠습니까.`);
    await me.say_and_wait(
      `당연히 짊어져야 할 책임 앞에서 미끄러지듯 빠져나가는 삶이, 고통을 감내하는 삶보다 정말로 행복할까요?`,
    );
    await me.say_and_wait(`굴복의 근원은 나약함입니다.`);
    await me.say_and_wait(
      `패배에 익숙해지고, 패배를 받아들이고, 결국 패배에 적응해버린 자는 패배하는 법밖에 모릅니다. 자신이 성공할 수 있다는 꿈조차 꾸지 못하는 실패자가 되는 것이죠.`,
    );
    await me.say_and_wait(
      `……그리고 한 번의 실패에서 다음 실패로 이어지는 사람은 결코 성공을 거머쥘 수 없습니다.`,
    );
    await me.say_and_wait(
      `울음소리와 함께 빈손으로 태어나, 다시 울음소리와 함께 빈손으로 떠나는 인생입니다. 이 세상에 무언가 흔적을 남기지 못하고 그저 후회만 남긴 채 떠난다면 조금은 아쉽지 않겠습니까.`,
    );
    await me.say_and_wait(`그래서 저는 어떤 '결정'에 복종하는 것입니다.`);
    await me.say_and_wait(
      `……제가 트레이너가 되기로 결심한 이상, 제가 가장 큰 역할을 할 수 있는 곳은 당연히 이곳 트레센입니다.`,
    );
    await me.say_and_wait(
      `비록 제가 나아가는 방향이 ${maru.name}가 바라는 것과 완전히 일치하는지는 확신할 수 없지만,`,
    );
    await me.say_and_wait(
      `저는 ${maru.name}가 저에게 보내는 신뢰와 애정이 충분히 견고하다는 것을 믿기에, 의심 대신 행동을 택하겠습니다.`,
    );
    await digital.say_and_wait(`……지휘자로서는 간신히 턱걸이 합격점이군.`);
    await digital.say_and_wait(`세계관은 아직 유치하고, 가치관 역시 평범하기 그지없다.`);
    await digital.say_and_wait(`유일하게 봐줄 만한 점은 확고한 비전을 품었다는 것뿐.`);
    await digital.say_and_wait(`……하지만 오늘 밤의 요점은 이게 아니다.`);
    await era.printAndWait(`황제가 '미소'라는 가면을 쓴 채 당신을 바라보았다.`);
    await digital.say_and_wait(`자네는 영화 보는 걸 좋아하나?`);
    await era.printAndWait(`갑작스러운 질문에 당신은 당황했다.`);
    await me.say_and_wait(`……`);
    await era.printAndWait(
      `어떻게 대답해야 체면이 설지 고민하던 찰나, 황제는 스스로 말을 이어갔다.`,
    );
    await digital.say_and_wait(
      `이런 장면을 상상해 보게. 두 명의 트레이너가 우연히 같은 서부 영화를 골랐고, 이런 장면이 나왔다고 치지. 보안관과 카우보이가 결투를 벌이고, 총성이 울린 뒤 한 명은 죽고 한 명은 살아남았어. 하지만 관객인 두 사람의 표정은 제각각이었지——`,
    );
    await era.printAndWait(`황제는 뒷말을 길게 끌며 당신의 대답을 기다렸다.`);
    await me.say_and_wait(`그들은 아마 영화 속 서로 다른 캐릭터에 자신을 투영해 기쁨과 슬픔을 함께했겠지요.`);
    await digital.say_and_wait(
      `비록 죽은 자가 카우보이를 쫓던 고결한 경관이고, 살아남은 자가 수배 중인 범죄자라 할지라도 말인가?`,
    );
    await me.say_and_wait(
      `……아마 범죄자에게 감정을 이입한 트레이너는 자신의 심미적 즐거움을 해치지 않기 위해, 잠재의식 속에서 모든 결점을 지워버렸을 겁니다.`,
    );
    await me.say_and_wait(
      `……반면 다른 한 사람은 주인공인 범죄자를 인정하지 않았기에, 그 카우보이의 결점을 견딜 수 없었겠지요.`,
    );
    await digital.say_and_wait(`훌륭한 논리군. 생각했던 것보다 더 뛰어난 인물이야.`);
    await era.printAndWait(`황제가 박수를 쳤다.`);
    await digital.say_and_wait(`그렇다면, 자네는 '진정한' ${maru.name}에 대해 얼마나 알고 있지?`);
    await digital.say_and_wait(
      `자네 자신이 그 카우보이에게 감정을 이입한…… 이른바 관객이 아니라고 어떻게 확신하나?`,
    );
    await digital.say_and_wait(`수고했네.`);
    await era.printAndWait(`황제는 자리에서 일어나 먼 곳의 훈련장을 바라보았다.`);
    await era.printAndWait(
      `운동장에서 훈련에 매진하는 ${maru.get_uma_sex_title()}들의 함성이 트레센 전체에 울려 퍼지고 있었다.`,
    );

    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
  } else if (edu_weeks === 47 + 37) {
    await print_event_name(`사색`, maru);
    await maru.say_and_wait(`흐흥~ 이거 벌써 연인 사이나 다름없는 거 아니야?`);
    await era.printAndWait(
      `담소 중에 농담 반 진담 반으로 ${maru.name}의 집에 잠시 머물고 싶다고 했는데, 상대가 흔쾌히 수락해버렸다.`,
    );
    await era.printAndWait(
      `당신을 끌고 다니며 쇼핑몰에서 적당한 생활용품을 잔뜩 고르는 바람에, 결국 물건이 너무 많아져 타치에 다 실리지도 않을 정도였다.`,
    );
    await era.printAndWait(
      `${maru.name}와 상의 끝에 이 물건들은 전부 배송 서비스를 통해 보내기로 했다.`,
    );
    await era.printAndWait(`함께 생활하게 되면서 두 사람 사이의 유대감은 더욱 깊어졌다.`);
    await me.say_and_wait(
      `슬슬 때가 됐어. 이제는 ${maru.name}가 그 한 걸음을 내딛게 해야 해.`,
      true,
    );
    await era.printAndWait(`실패에 대한 두려움 때문에 적당한 기회들이 손끝에서 빠져나가는 것을 지켜보았다.`);
    await era.printAndWait(`무언가를 갈구하면서도 차마 손을 뻗지 못했다.`);
    await me.say_and_wait(
      `……사실 ${maru.name}라기보다, 내가 이 발걸음을 내디뎌야 하는 거겠지.`,
      true,
    );
    await era.printAndWait(`당신은 새로 산 가구들을 확인하며 어떻게 행동할지 고민했다.`);
    era.drawLine({ content: '저녁 식사 후' });
    era.printButton(`「내일 같이 가을 나들이 갈까?」`, 1);
    await era.input();
    await era.printAndWait(
      `분위기가 가장 좋을 때 ${maru.name}에게 다음 주 계획을 말할 생각이다.`,
    );
    await maru.say_and_wait(`그러고 보니 벌써 단풍 구경할 때가 됐네.`);
    await maru.say_and_wait(`그럼 내일 같이 소풍 가자!`);
    await era.printAndWait(
      `${maru.name}는 젓가락을 내려놓고, 두 손을 모은 채 미소를 띠며 당신을 바라보았다.`,
    );
    await me.say_and_wait(`좋았어!`, true);
    await me.say_and_wait(`좋지. 흔히 예술의 가을, 독서의 가을이라고들 하잖아?`);
    await me.say_and_wait(
      `여름의 더위나 겨울의 추위보다, 가을처럼 상쾌한 계절이 예술적 감성을 표현하기에 가장 좋은 때지.`);
    await me.say_and_wait(
      `게다가 나도 이번 가을에 ${maru.name}과 아름다운 추억을 남기고 싶거든.`);
    await maru.say_and_wait(
      `어머나, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 나를 그렇게까지 생각해주고 있었어?`);
    await maru.say_and_wait(
      `${era.get('cflag:4:성별') - 1 ? '이 예쁜 누나' : '이 멋진 형'}도 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이랑 예쁜 추억 만들고 싶어……`);
    await maru.say_and_wait(`후후~ 벌써 내일 일정이 기대되기 시작하는걸♪`);
    await era.printAndWait(`${maru.name}의 기분이 무척 좋아 보였다.`);
    era.drawLine({ content: '다음 날 아침' });
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}? 일어났어?`,
    );
    await era.printAndWait(`당신은 아직 덜 깬 눈을 비비며 간신히 일어났다.`);
    era.printButton(`「약속한 기상 시간보다 조금 이르네」`, 1);
    await era.input();
    await era.printAndWait(
      `아침 일찍부터 들려오는 ${maru.name}의 활기찬 목소리에 앞으로 일어날 일들에 대한 희망이 생겨났다.`,
    );
    await maru.say_and_wait(
      `듣기로는 요즘 미술 전시회가 열린다던데, 거기를 우리 첫 번째 목적지로 삼자.`,
    );
    era.drawLine();
    await maru.say_and_wait(
      `벌써 점심때가 다 됐네. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 내가 만든 도시락 좀 먹어볼래?`,
    );
    era.drawLine();
    await me.say_and_wait(`인형 뽑기는 정말 어렵네.`);
    await era.printAndWait(
      `${maru.name} 인형을 품에 안은 ${maru.get_teen_sex_title()}가 행복한 미소를 짓고 있었다.`,
    );
    await me.say_and_wait(`이거면 충분해.`);
    era.drawLine();
    await era.printAndWait(`마지막 행선지는 학원 옥상이었다.`);
    await maru.say_and_wait(`바람도 성장하는 법이겠지.`);
    await era.printAndWait(
      `${maru.name}의 시선을 따라 학원 전체를 바라보자, 황금빛 은행잎들이 바람을 타고 하늘거리고 있었다.`,
    );
    await maru.say_and_wait(`새로 태어난 바람은 늘 걱정 없이 하늘을 향해 날아올라.`);
    await maru.say_and_wait(
      `하지만 ${maru.sex}가 시든 잎의 슬픔을 접하게 되면, ${maru.sex}의 발걸음은 무거워지고 말아.`,
    );
    await maru.say_and_wait(
      `${maru.sex}도 그 시든 잎들이 하늘의 자유를 느끼게 해주고 싶어서, 상냥하게 그들을 품에 안고 걱정 없는 하늘로 함께 날아가려 하지.`,
    );
    await maru.say_and_wait(
      `하지만 시든 잎을 붙잡는 대지의 힘이 결국 바람의 품을 이겨내고, 잎은 하늘로 날아오르는 도중에 날개가 꺾이고 말아.`,
    );
    await maru.say_and_wait(`결국 시든 잎은 다시 대지로 돌아가는 거야.`);
    await era.printAndWait(`당신은 ${maru.get_teen_sex_title()}의 성역 안으로 발을 들이기 시작했다.`);
    await me.say_and_wait(`그렇다 해도, 시든 잎은 바람의 인도 아래 스스로 결정을 내린 거야.`);
    await me.say_and_wait(`그 과정보다 잎의 생명력을 잘 보여주는 건 없어.`);
    era.printButton(`「${maru.name}…… 너에게 해줄 말이 있어.」`, 1);
    await era.input();
    await maru.say_and_wait(`응?`);
    await era.printAndWait(
      `석양의 잔광이 ${maru.name}의 긴 머리카락에 내려앉아, ${maru.sex_code - 1 ? '그녀' : '그'}에게 금빛 아우라를 입혀주었다.`,
    );
    era.printButton(`「다음 주를 기대해 줘!」`, 1);
    era.printButton(`그때 가서 ${maru.sex_code - 1 ? '그녀' : '그'}가 직접 보게 하자.`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await maru.say_and_wait(
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 나를 얼마나 깜짝 놀라게 해줄지, 기대하고 있을게.`,
      );
      await era.printAndWait(`무언가를 짐작한 듯, ${maru.name}가 눈을 찡긋했다.`);
      edu_marks.wind++;
    } else {
      await me.say_and_wait(`분명 깜짝 놀라게 될 거야!`, true);
      await era.printAndWait(`당신은 안도의 한숨을 내쉬며 다음 주가 오기를 기다렸다.`);
      edu_marks.wind--;
    }

    wait_flag =
      get_attr_and_print_in_event(4, [0, 0, 20, 0, 0], undefined) || wait_flag;
  } else if (edu_weeks === 47 + 38) {
    await print_event_name(`무풍`, maru);
    maru.print(`슬슬 끝낼 때가 됐네.`);
    maru.print(`달리는 게 즐겁지 않다면, 아무리 노력해도 한 가지 질문에 답할 수 없어.`);
    maru.print(`'어째서 내가 이 고통을 참아야 하는가?'라는 질문 말이야.`);
    maru.print(`그러니, 이제는 그저 경기장에서 활약하는 후배들의 모습을 지켜보자!`);
    maru.print(`지금의 나는 특히 이런 거에 아주 자신 있거든!`);
    await maru.say_and_wait(`……`);
    maru.print(`그런데, 왜 마음 한구석이 텅 빈 것 같은 기분이 들까?`);
    maru.print(`마치 어딘가에서 내가 찾아야 할 답이 나를 기다리고 있는 것 같아.`);
    await maru.say_and_wait(`답이라……?`);
    maru.print(
      `뭐, 됐어! 기분 전환하고, 사랑하는 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}을 찾아가야지!`,
    );
    maru.print(
      `앞으로 어떤 길을 가든, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 상냥하게 나를 응원해 주겠지?`,
    );
    maru.print(
      `그러고 보니, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 나한테 줄 선물이 있다고 했던 것 같은데.`,
    );
    await maru.say_and_wait(
      `나 정말 기대하면서 기다리고 있다구? ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}?`,
    );
    era.drawLine({ content: '이사장 집무실' });
    await era.printAndWait(
      `황제와 ${maru.name}를 지지해 준 ${maru.get_uma_sex_title()}들의 도움 덕분에, 오늘 드디어 서명 90%를 모으는 데 성공했다.`,
    );
    await era.printAndWait(
      `이사장실 문을 가볍게 두드렸다. 안에서 들어오라는 소리가 들려오자 대문을 밀어 열었다.`,
    );
    await say_by_passer_by(
      `아키카와 야요이`,
      `질문! 이 트레이너는 어째서 한밤중에 훈련장을 빌리려는 것인가!`,
    );
    await era.printAndWait(`간단한 인사를 마친 뒤, 당신은 단도직입적으로 구상을 제안했다.`);
    await me.say_and_wait(
      `제 담당 ${maru.get_uma_sex_title()}인 ${maru.name}에게 다시 한번 희망의 불꽃을 지펴주고 싶습니다.`,
    );
    await say_by_passer_by(`아키카와 야요이`, `경악! 어째서 반드시 트레센의 훈련장이어야만 하는가?`);
    await me.say_and_wait(
      `이 훈련장에는 이곳에서 땀 흘린 수많은 ${maru.get_uma_sex_title()}들의 마음이 깃들어 있습니다. ${maru.get_uma_sex_title()}들이 필사적으로 노력하는 모습을 지켜보는 것이야말로 ${maru.name}가 진심으로 바라는 모습이기 때문입니다.`,
    );
    await me.say_and_wait(
      `이것은 제가 모아온 여러 ${maru.get_uma_sex_title()}들의 연명 청원서입니다.`,
    );
    await era.printAndWait(
      `당신은 허리를 숙여 빽빽한 서명이 적힌 종이를 눈앞의 ${maru.sex_code - 1 ? '소녀' : '소년'}에게 건넸다.`,
    );
    await era.printAndWait(
      `상대방은 서명 하나하나를 꼼꼼히 확인했다. ${maru.sex_code - 1 ? '소녀' : '소년'}의 머리 위에 있는 고양이는 낯선 당신이 흥미로운지 주변을 맴돌며 '야옹~ 야옹~' 울어댔다.`,
    );
    await era.printAndWait(
      `${maru.sex_code - 1 ? '소녀' : '소년'}는 당신과 눈을 맞추기 위해 까치발을 들어야 했지만, 당신은 숨을 죽인 채 최종 판결만을 기다렸다.`,
    );
    await say_by_passer_by(
      `아키카와 야요이`,
      `감동! 트레센의 ${maru.get_uma_sex_title()}들은 내가 생각했던 것보다 훨씬 더 단결력이 있군!`,
    );
    await say_by_passer_by(`아키카와 야요이`, `이보게, 트레이너.`);
    era.printButton(`「네!」`, 1);
    await era.input();
    await say_by_passer_by(`아키카와 야요이`, `동의! 이번 이벤트에는 나도 직접 참가하도록 하겠네!`);
    await era.printAndWait(
      `${maru.sex_code - 1 ? '소녀' : '소년'}는 만년필을 들어 '아키카와 야요이'라는 이름을 종이에 정성껏 적어 당신에게 돌려주었다.`,
    );
    era.printButton(`「이사장님, 감사합니다!」`, 1);
    await era.input();
    await era.printAndWait(
      `미소를 짓는 ${maru.sex_code - 1 ? '소녀' : '소년'}가 '유!열!'이라 적힌 부채를 펼쳤다. 옆에 있던 타즈나 ${
        maru.sex_code === 1 ? ' 씨' : ' 씨'
      }는 고뇌와 기쁨이 교차하는 복잡한 표정으로 이사장과 당신을 바라보았다.`,
    );
    await era.printAndWait(`조심스럽게 서류를 챙겨 이사장실을 나섰다.`);
    era.drawLine();
    maru.print(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 상점가에 같이 가자면서 미리 준비한 쿠폰을 꺼내 보여줬어.`,
    );
    maru.print(
      `말투나 행동이 아무리 봐도 수상쩍긴 했지만, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 먼저 데이트를 신청하는 건 참 드문 일이잖아.`,
    );
    maru.print(`낚시용 미끼라고 쳐도 너무 호화로운걸.`);
    maru.print(
      `웃는 얼굴로 선물을 받은 뒤, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이랑 사이제리아에서 간단히 점심을 먹고 영화를 보러 갔어.`,
    );
    maru.print(
      `평일이라서 그런 걸까? 상영관에 관객이 의외로 적어서, 편하게 둘이 붙어 앉는 자리를 예매할 수 있었지.`,
    );
    maru.print(
      `영화는 나약했던 어느 ${maru.get_uma_sex_title()}가 점차 성숙해가는 과정을 그린 감동적인 내용이었어. 수많은 고난 속에서도 이를 악물고 나아가는 ${maru.get_uma_sex_title()}의 모습을 보니, 나도 모르게 박수를 쳐주고 싶어지더라고.`,
    );
    await me.say_and_wait(
      `몇 번을 봐도 이런 장면은 마음속에서 자연스럽게 감동과 힘이 솟구치게 만드는 것 같아.`,
    );
    maru.print(`깊이 동감해.`);
    maru.print(
      `영화가 끝난 뒤에는 근처에서 가장 어렵다는 인형 뽑기에 도전했는데, 아니나 다를까 보기 좋게 실패했지 뭐야.`,
    );
    maru.print(
      `나를 위로해 주려던 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 오히려 자기가 불이 붙어서 무조건 뽑겠다고 난리를 피우더라니까.`,
    );
    maru.print(
      `위로받아야 할 쪽이 오히려 위로하는 쪽이 되다니, 이것도 운명의 묘미 중 하나겠지.`,
    );
    era.printButton(`「오늘 밤에 같이 트레센에 가보지 않을래?」`, 1);
    await era.input();
    maru.print(
      `백화점 고급 레스토랑에서 저녁을 먹으며 그렇게 말하는 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}.`,
    );
    await maru.say_and_wait(
      `어머, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}. 드디어 아껴왔던 그 선물을 공개하는 거야?`,
    );
    await me.say_and_wait(`이미 너무 설레서 포크조차 제대로 쥐지 못할 정도라고.`);
    await maru.say_and_wait(`그 정도로 대단한 거야?`);
    await me.say_and_wait(`응, 그만큼 엄청난 선물이야. 분명 잊지 못할 추억이 될 거야.`);
    maru.print(
      `나의 농담을 진지하게 받아쳐 주는 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}을 보니, 나도 모르게 가슴이 설레기 시작했어.`,
    );
    await maru.say_and_wait(`그럼, 이 기분을 제대로 즐겨줘야겠는걸!`);
    maru.print(`법적으로 술을 마실 수 있는 나이는 내년이지만, 이 정도 기분은 내도 괜찮겠지?`);
    maru.print(
      `기분 좋게 취기가 오른 채로, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이랑 이런저런 이야기를 나누며 천천히 트레센을 향해 걸어갔어.`,
    );
    maru.print(
      `이야기하던 도중, 대화의 주제가 예전에 은퇴한 그 ${maru.get_uma_sex_title()}의 이야기로 흘러갔을 때 가슴 한구석이 욱신거렸어.`,
    );
    await me.say_and_wait(
      `그러고 보니, 저번에 은퇴한 그 ${maru.get_uma_sex_title()}는 이제 트레이너가 되려고 노력 중이라더라.`,
    );
    await maru.say_and_wait(`트레이너를 향해 노력하는 것도 하나의 길이지.`);
    maru.print(`그 ${maru.sex_code - 1 ? '아이' : '아이'}도 드디어 자신의 목표를 찾은 모양이네.`);
    maru.print(`……가슴이 다시 한번 욱신거렸어.`);
    await me.say_and_wait(
      `어떤 분야에 태생적으로 맞지 않는 사람도 있겠지만, 자기가 가진 자원을 다시 점검하고 다른 방향으로 노력하다 보면 생각지도 못한 놀라운 결과가 기다리고 있을지도 몰라!`,
    );
    maru.print(`무슨 말을 해야 할지 몰라, 나는 그저 침묵을 지켰어.`);
    maru.print(
      `트레센 학원까지 한 블록 정도 남았을 무렵, 축제라도 열린 듯한 즐거운 웃음소리가 귓가에 들려왔어.`,
    );
    maru.print(`이상하네, 평소의 트레센이 이렇게 소란스러웠나?`);
    maru.print(
      `이게 바로 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 준비한 선물이었구나.`,
    );
    maru.print(`정말이지, 한참을 돌아서 왔네.`);
    await maru.say_and_wait(`같이 가보자!`);
    maru.print(
      `그렇게 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 손을 잡고 트레센을 향해 달렸어.`,
    );
    maru.print(`이렇게 즐겁게 달리는 건 정말 오랜만인 것 같아. `);
    maru.print(`소리가 커지는 쪽을 따라, 우리는 서서히 훈련장이 있는 곳으로 다가갔어.`);
    maru.print(
      `마치 축제라도 열린 것 같았어. 트레이너와 ${maru.get_uma_sex_title()}들이 웃으며 대화하거나 잔디 위에서 땀을 흘리며 달리고, 관중석에서는 서로 대화를 나누며 환호하고 있었지.`,
    );
    maru.print(
      `이사장님과 타즈나 ${
        maru.sex_code === 1 ? '씨' : '씨'
      }가 우리를 발견했어. 전자는 '유!열!'이라 적힌 부채를 펼쳐 보였고, 후자는 우리에게 미소를 지어주었지. 아, 이사장님 머리 위의 고양이도 기분 좋은 듯 꼬리를 흔들고 있더라.`,
    );
    maru.print(`누구랄 것 없이, 모두의 얼굴에는 만족스러운 미소가 걸려 있었어.`);
    maru.print(`마치 축제를 즐기고 있는 것처럼 말이야.`);
    await maru.say_and_wait(`정말 그립네.`);
    maru.print(`나의 세계는 한때 색채로 가득했어.`);
    maru.print(`어릴 적 목격했던 새빨간 슈퍼카. 그 멋진 외형은 당시의 나를 완전히 사로잡았지.`);
    maru.print(`그 차의 속삭임이 들리는 것 같았어. 나처럼, 자유롭게 달리는 것을 갈망하는 소리가.`);
    maru.print(`그래서 어린 나는 마음속으로 맹세했어. 나중에 차를 산다면 반드시 저 차를 사겠다고.`);
    maru.print(
      `그 차와 공명할 날을 기다리며 카탈로그 사진을 보고, 운전 기술을 필사적으로 연습했어.`,
    );
    maru.print(`운전면허를 딴 날, 내 손으로 직접 면허증을 받아 들었을 때.`);
    maru.print(`마치 꿈을 꾸는 듯한 비현실감 속에서 몇 번이고 현실인지 확인했었지.`);
    maru.print(
      `훈련하며 겪었던 온갖 고난들. 성취의 기쁨 뒤에는 주저함과 망설임도 소리 없이 찾아왔어.`,
    );
    maru.print(
      `어쩌면 그때의 내가 가장 행복한 상태였을까? 아니, 지금의 하루하루도 충분히 즐겁긴 하지만 말이야.`,
    );
    maru.print(
      `승리 뒤의 영광보다도 레이스 전 소소한 소식을 나누고, 잔디 위에서 땀 흘리며 달리고, 거친 호흡이 다리에 더 큰 힘을 불어넣던 그 순간들.`,
    );
    maru.print(`오직 세 여신만이 아는 그 세계에 도달하기까지.`);
    maru.print(`모두가 달리는 즐거움을 느낄 수 있다면, 나의 이상향도 머지않았다고 생각했어.`);
    maru.print(`하지만 이상과 현실은 늘 모순되기 마련이지.`);
    maru.print(
      `많은 ${maru.get_uma_sex_title()}들이 그 즐거움을 깨닫기도 전에, 겹겹이 쌓인 가시넝쿨에 옷이 걸리고 발이 묶여버려.`,
    );
    maru.print(
      `누군가 자신들을 도와주기를 소리 높여 기도하면서 말이야.`,
    );
    maru.print(`하지만 유일한 해결책은 오직 ${maru.sex}들 스스로가 깨달아야만 얻을 수 있는 것이었어.`);
    maru.print(
      `재능이 부족한 자신을 용서해 달라고, 이 무거운 짐을 내려놓게 해달라고 매일 밤 무능한 자신을 저주하며 기도했겠지.`,
    );
    maru.print(`그렇게 말로 다 할 수 없는 슬픔은 흑백의 색깔로 변해버렸어.`);
    maru.print(`나의 세계에 말없이 서 있는 침묵의 성벽처럼, 회색 유령처럼.`);
    maru.print(`유령처럼 맴돌고, 배회하며, 울부짖고 있었어.`);
    maru.print(`방황하는 ${maru.get_uma_sex_title()}들을 위해서, 그리고 나 자신을 위해서.`);
    maru.print(`후배들의 동경, 잔디 위에서 느꼈던 바람, 그리운 과거.`, );
    maru.print(
      `하지만 과거의 추억에만 매몰되어 '후회'라는 이름의 쾌감을 짜내기만 하는 건 옳지 않아.`,
    );
    maru.print(`그래서, 나는 미래를 향해 나아가기로 했어.`);
    maru.print(`내가 선택한 길이 옳은지는 나도 몰라.`);
    maru.print(
      `……어쩌면 과거라는 요람 속에서 기회가 오기만을 기다리는 게 정답이었을지도 모르지.`,
    );
    maru.print(`준비도 부족하고, 각오조차 그저 일시적인 열정의 산물일지도 모르는 나니까.`);
    maru.print(`어쩌면 외딴 길에서 갑자기 고장이 나버려 곤란해질지도 몰라.`);
    maru.print(`무엇이 이 모든 것을 구원할 수 있을까?\n`);
    maru.print(`'의미', 그것이 내가 찾은 답이야.`);
    maru.print(
      `'미래의 어느 순간, 내가 무엇을 했는가'라는 그 의미 하나가 앞으로 겪을지도 모를 끔찍한 일들로부터 나를 구원해 줄 거야.`,
    );
    maru.print(
      `나 자신의 관점이 아니야. 인간은 결국 시간을 싣고 어디론가 향하는 운송 수단에 불과하니까.`,
    );
    maru.print(`세계여, 너는 정말로 아름답구나.`);
    maru.print(
      `나의 욕망을 위해서도, 타인을 위해서도 아닌, 바람의 시선으로 눈앞의 ${maru.get_uma_sex_title()}를 바라봐.`,
    );
    maru.print(`나는 기꺼이 산들바람이 되리니. 아니, 나(바람)는 시간 위에 나만의 의미를 새겼어.`);
    maru.print(`결말이 어떻든, 바람은 영원히 나와 함께할 거야.`);
    maru.print(`빨리 트레이너의 곁으로 돌아가야겠어.`);
    await maru.say_and_wait(`새롭게 태어난 내 모습을 트레이너에게 꼭 보여줘야 하니까♪`);
    maru.print(`정말 이걸로 괜찮은 거야?`);
    await maru.say_and_wait(`내 마음을 배신하고 싶지 않아. 그러니까, 이제 충분해.`);
    await maru.say_and_wait(
      `마지막 힘을 다해 한 번 더 발버둥 쳐 보겠어. 이번에는 오직 내 마음속에 부는 바람만을 위해서.`,
    );
    maru.print(`그것이 너의 미학인가?`);
    await era.printAndWait(
      `탄식하던 ${maru.name}은 사라지고, 새롭게 태어난 자아가 주변의 공기를 다시 일깨웠다.`,
    );
    await era.printAndWait(
      `부드러운 바람처럼, 따스한 미소를 가진 그 사람의 곁으로 서둘러 가고 싶다.`,
    );
    await era.printAndWait(`그날, 상냥한 바람이 탄생했다.`);
    era.drawLine();
    await era.printAndWait(`당신은 초조한 마음으로 ${maru.name}의 반응을 기다렸다.`);
    await era.printAndWait(
      `슬픔? 고통? 아니면 해방감? 눈앞의 ${maru.sex_code - 1 ? '소녀' : '소년'}의 심경을 표현하기에 당신의 어휘는 너무나 빈약했다.`,
    );
    await era.printAndWait(
      `시간은 마치 달팽이가 기어간 흔적 같기도, 비행기가 남기고 간 비행운 같기도 했다.`,
    );
    await era.printAndWait(`하지만 지금은 기다릴 수밖에 없다. 당신은 마음속의 공포에게 그렇게 타일렀다.`);
    await era.printAndWait(
      `운명의 톱니바퀴는 잘못을 저지른 순간에 멈추는 것이 아니다. 잘못을 저지른 뒤에 무엇을 하느냐가 가장 중요한 법이다.`,
    );
    await era.printAndWait(
      `언제든 떠올리면 가슴 한구석이 아릿해지는 교훈을 얻었기에, 비로소 세상에 대해 더 깊이 이해할 수 있게 된 것이다.`,
    );
    await era.printAndWait(`${maru.name}라면 분명 비슷한 생각을 하고 있을 것이다.`);
    await era.printAndWait(`모든 것을 정리하고, 다가올 미래를 마주하기로 했다.`);
    edu_marks.wind++;
    wait_flag =
      get_attr_and_print_in_event(4, [10, 10, 10, 10, 10], undefined) ||
      wait_flag;
    edu_marks.mygo--;
    // STATUSNAME:15 = 영역
    era.set('status:46:15', 1);
  } else if (edu_weeks === 95 + 9) {
    // 황제와 ${chara_talk.name}의 만남, ${chara_talk.name}에게 새로운 풍경을 보여주고 싶어함
    await print_event_name(`불꽃과 화염`, maru);
    await era.printAndWait(`길었던 추운 겨울이 드디어 지나가고, 봄바람이 다시 트레센에 불어오기 시작했다.`);
    await era.printAndWait(
      `고통과 방황을 겪은 뒤, 스스로 선택한 방향으로 다시 달리기 시작한 당신들——`,
    );
    await era.printAndWait(`그리고 기다리고 있던 심볼리 루돌프.`);
    await luna.say_and_wait(`드디어 이 순간이 왔군.`);
    await era.printAndWait(`가벼운 발걸음으로 황제가 훈련장에 나타났다.`);
    await luna.say_and_wait(`지난번 논쟁의 결과는 결국 나의 승리인 모양이군.`);
    await luna.say_and_wait(`지옥 밑바닥에서 기어 올라온 기분은 어떤가? ${maru.name}.`);
    await era.printAndWait(`주변의 시선을 아랑곳하지 않고, 황제는 곧장 ${maru.name}에게 다가갔다.`);
    await maru.say_and_wait(
      `힘든 시간이었지만, 고된 훈련 끝에 오는 쾌감을 제대로 맛본 기분이야.`,
    );
    await luna.say_and_wait(`호오? 지옥의 불길이 자네를 태워 없애지는 못한 모양이군.`);
    await maru.say_and_wait(`지옥을 통과하는 길이 에덴과 가장 가까운 법이거든♪`);
    await luna.say_and_wait(`……점점 더 기대되는군.`);
    await maru.say_and_wait(`칭찬으로 들어도 될까? 쌩큐!`);
    await luna.say_and_wait(`……쌩큐라니. Thank you인가. 후훗.`);
    await luna.say_and_wait(
      `본론으로 돌아가지. ${maru.get_uma_sex_title()}들의 우상이 되기로 결심했다면, 이미 뼈가 가루가 될 정도의 각오는 되어 있겠지?`,
    );
    await luna.say_and_wait(`자네의 그 행보는 사랑에서 비롯된 것인가?`);
    await maru.say_and_wait(
      `내 행동이 반드시 옳다고 확신할 수는 없지만, 한 가지는 분명해.`,
    );
    await maru.say_and_wait(`이를 위해 분투하는 매일매일이 나는 정말 행복해⭐`);
    await luna.say_and_wait(`자네만의 길을 찾았다니, 그럼 경기장에서 다시 보도록 하지.`);
    await era.printAndWait(`황제는 말을 마치고 훈련장을 떠났다.`);
    era.printButton(`「드디어 황제와 대결인가?」`, 1);
    await era.input();
    await maru.say_and_wait(`회장님과 대결이라니, 정말 흥미진진한 전개가 될 것 같아.`);
    await maru.say_and_wait(
      `이 성대한 무대 위에서 이가 떨릴 정도로 짜릿한 순간이 나를 기다리고 있을지도 몰라.`,
    );
    await maru.say_and_wait(
      `같이 힘내자, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}♪`,
    );
    await era.printAndWait(`그리하여, 다음 목표가 정해졌다.`);
    edu_marks.wind++;
  } else if (edu_weeks === 95 + 32) {
    if (era.get('flag:현재위치') === location_enum.beach) {
      if (era.get('cflag:4:위치') !== era.get('cflag:0:위치')) {
        add_event(event_hooks.week_end, ebj);
      }
      return;
    }
    await print_event_name('여름 합숙 종료·잊지 못할 성연', maru);
    await era.printAndWait(`올해 여름 합숙은 정말 알차게 보냈다.`);
    await era.printAndWait(
      `해변에서 배구를 하거나 수박 깨기를 하는 일상적인 운동 외에도, 후배 ${maru.get_uma_sex_title()}들의 고민을 듣고 적절한 조언을 해주는 것 또한 즐거움 중 하나였다.`,
    );
    await era.printAndWait(`여름 합숙의 마지막 날, 당신들은 기숙사 파티에 참석했다.`);
    await era.printAndWait(
      `스페셜 위크와 치요노 오가 존경 어린 눈빛으로 ${maru.name}의 지난 2년간의 경험담을 경청했고, 그래스 원더도 ${maru.name}에게 도전을 신청했다.`,
    );
    await era.printAndWait(`밤이 깊어질 무렵에야 다들 만족스럽게 해산했다.`);
    await me.say_and_wait(`여름 합숙도 끝나가네. 다음은 텐노상(가을)인가.`, true);
    await me.say_and_wait(
      `레이스 결과보다도, 역시 ${maru.name}의 웃는 얼굴이 최고지.`,
      true,
    );
    era.printButton(`「좋아! 트레센으로 돌아가서도 전력을 다하자.」`, 1);
    await era.input();
    await era.printAndWait(`혼잣말을 하며 방문을 열자,`);
    await me.say_and_wait(`이상하네, 문이 안 잠겨 있었나?`);
    await maru.say_and_wait(
      ` ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}♪`,
    );
    await era.printAndWait(`문 뒤에서 나타난 ${maru.name}이 당신에게 달려들어 안겼다.`);
    await maru.say_and_wait(`오늘은 같이 자자!`);
    await me.say_and_wait(`합숙 중에 같이 자는 건 아무래도 좀……`);
    await maru.say_and_wait(
      `이사장 ${maru.sex_code === 1 ? '씨' : '씨'}한테는 이미 허락받았어.`,
    );
    await era.printAndWait(
      `${maru.name}이 당신도 모르는 사이에 이사장과 모종의 합의를 본 모양이다.`,
    );
    await maru.say_and_wait(
      `이사장님도 우리가 청춘을 마음껏 즐기길 바라시더라고. 그러니까 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}?`,
    );
    await era.printAndWait(`${maru.name}이 얼굴을 붉히며 당신을 쳐다보았다.`);
    edu_marks.wind++;
    era.printButton(`「가자!」`, 1);
    era.printButton(`「역시 안 되겠어」`, 2);
    const ret1 = await era.input();
    if (ret1 === 1) {
      await maru.say_and_wait(`그럼 앞으로 잘 부탁해♪`);
    } else {
      await maru.say_and_wait(
        `에에? ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }은 이런 미${maru.get_teen_sex_title()}를 앞에 두고도 아무 의욕이 안 생기는 거야? ${
          era.get('cflag:4:성별') - 1 ? '누나' : '형'
        } 정말 내 매력을 의심하게 될지도 몰라.`,
      );
      await era.printAndWait(
        `귀를 축 늘어뜨린 ${maru.name}의 모습은 평소의 당당한 모습과 대비되어 묘한 가학심을 불러일으켰다.`,
      );
      await era.printAndWait(`억눌렀던 욕망이 다시금 고개를 들었다.`);
      await maru.say_and_wait(
        `그럼 앞으로 잘 부탁해, ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }♪`,
      );
    }
  } else if (edu_weeks === 95 + 43) {
    await print_event_name('상냥한 바람', maru);
    maru.print(`뜻밖의 이른 기상.`);
    maru.print(`졸린 눈을 비벼보지만, 뒤척여도 다시 잠이 오지 않아.`);
    maru.print(`답답한 기분에 차라리 침대에서 일어나기로 했어.`);
    maru.print(`졸음을 쫓으며 창문을 열었지.`);
    maru.print(`상쾌한 공기가 아파트를 찾아왔어.`);
    maru.print(
      `창밖의 금빛 나뭇잎들도 나무의 품을 떠나 금풍의 인도를 따라 이곳을 방문했네.`,
    );
    await maru.say_and_wait(`방가방가!`);
    maru.print(`작은 손님을 웃는 얼굴로 맞이했어.`);
    maru.print(`주인의 초대를 받은 작은 손님은 책상 위에 가뿐히 내려앉았지.`);
    await maru.say_and_wait(`……그러고 보니 요즘 낙엽으로 책갈피를 만드는 게 유행이라던데.`);
    maru.print(`나뭇잎을 조심스럽게 씻어 말린 뒤, 사전 사이에 끼워 평평하게 눌러두었어.`);
    maru.print(`상쾌한 공기가 방 안을 가득 채웠지.`);
    await maru.say_and_wait(`이제 태양이 뜨기를 느긋하게 기다리기만 하면 돼.`, true);
    maru.print(`새벽안개가 채 가시지 않은 하늘엔 달이 떠 있고, 별들이 반짝이고 있어.`);
    await maru.say_and_wait(`머지않아 겨울이 오겠네.`, true);
    maru.print(
      `봄에 돋아난 잎은 여름에 무성해지고, 가을에 시들어 결국 겨울의 품으로 돌아가.`,
    );
    await maru.say_and_wait(`나도 힘차게 꽃을 피웠던 걸까?`, true);
    maru.print(
      `갑자기 불어온 강풍에 눈을 뜨기 힘들었지만, 금빛 낙엽들은 미련 없이 가지를 떠나 열정적인 바람을 따라 마지막 여행을 떠나고 있었어.`,
    );
    maru.print(
      `시냇물처럼 넘실거리는 무수한 낙엽들이 바람의 손길에 이끌려 대지의 바다로 즐겁게 흘러가네.`,
    );
    await maru.say_and_wait(
      `귀여운 후배들이 마지막에 어떤 경지에 도달하게 될지 정말 기대돼. 음, 생각만 해도 벌써 긴장되는걸.`,
    );
    maru.print(`낙엽에게 건네는 말인지, 아니면 자신에게 하는 말인지.`);
    await maru.say_and_wait(`후배들이 나를 앞지르는 그날을 기다릴게.`, true);
    maru.print(`후배들이 자신의 뒷모습을 따라잡는 그날까지, ${maru.name}는 계속 기다릴 것이다.`);
    edu_marks.wind++;
  }
  wait_flag && (await era.waitAnyKey());
};