const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const betray_ending = require('#/event/edu/edu-events-32/force-bad-ending');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function common(tachyon, me) {
  await tachyon.say_and_wait('……그래, 푹 자게. 내가 곁에 있어 줄테니.');
  era.drawLine();
  await tachyon.print_and_wait('모르모트 군은 평온하게 눈을 감았다.');
  await tachyon.print_and_wait([
    tachyon.get_colored_name(),
    '은 울지 않았다. 왜냐하면…… 이번이 처음이 아니었기 때문이다.',
  ]);
  era.println();
  await tachyon.print_and_wait('모르모트 군과의 이별.');
  await tachyon.print_and_wait('첫 번째는, 그날 상점가에서였다.');
  await tachyon.print_and_wait('만약 자신이 떠나지 않았더라면.');
  await tachyon.print_and_wait(['만약 강제로라도 ', me.sex, '를 곁에 두었더라면.']);
  await tachyon.print_and_wait('만약……');
  await tachyon.print_and_wait('만약이란 건 없다.');
  era.println();
}

module.exports = async () => {
  const me = get_chara_talk(0),
    t_call_c = sys_get_colored_callname(32, 25),
    tachyon = get_chara_talk(32);
  if (era.get('flag:강제배드엔딩') === 32) {
    return await betray_ending(tachyon, me);
  }
  await tachyon.say_and_wait('눈을 떠봐.');
  await tachyon.say_and_wait('정신 차려보게.');
  await tachyon.say_and_wait('제발…… 눈을 떠줘.');
  era.drawLine();
  await era.printAndWait('나는 누구지.');
  era.println();
  await tachyon.say_and_wait('자네는…… 모르모트 군, 나의 전속 트레이너라네.');
  era.println();
  await era.printAndWait('……너는 누구야?');
  era.println();
  await tachyon.say_and_wait([
    '……나는 ',
    tachyon.get_colored_name(),
    '일세. 자네를 담당하는 ',
    tachyon.get_uma_sex_title(),
  ]);
  await era.printAndWait('…………');
  era.println();
  await tachyon.say_and_wait('……자네, 기억하고 있나?');
  await era.printAndWait('…………');
  await tachyon.say_and_wait([
    '아…… 아무 말도 안 하면 곤란하네. 나를 기억하고 있지? 그렇지? 여기는 트레센 학원 안에 있는 우리 실험실이고, 저쪽은 ',
    t_call_c,
    '의 구역이고……',
  ]);
  era.println();
  if (new TachyonEduMarks().plan_b) {
    await era.printAndWait('……미안.');
    era.println();
    await era.printAndWait([me.get_colored_name(), '은(는) 고개를 저었다.']);
    await era.printAndWait([
      '눈앞의 ',
      tachyon.get_teen_sex_title(),
      '…… 어째서인지 모르겠지만, 어딘가 그리운 느낌이 든다.',
    ]);
    await era.printAndWait('하지만 분명히, 조금도 알지 못하는 사람이다.');
    era.println();
    await tachyon.say_and_wait(
      '……괜찮네. 기억 상실도 하나의…… 하나의 가능성일 뿐이야…… 그저 기억을 다시 되찾으면 될 일이지.',
    );
    era.println();
    await era.printAndWait('……가능성.');
    await era.printAndWait('그 단어가 진흙탕 같은 의식 속에서 어떤 영감을 깨우는 듯했다.');
    await era.printAndWait('그러나……');
    await era.printAndWait('영감은 언제나 찰나에 불과했다.');
    era.println();
    await era.printAndWait('모르겠다.');
    await era.printAndWait('생각하면 할수록 머릿속의 빈 공간이 늘어만 간다.');
    await era.printAndWait('하지만, 역시 필사적으로 기억해내야만 한다.');
    await era.printAndWait('방금 스쳐 지나간 영감을 다시 붙잡을 수 있기를 기도한다.');
    await era.printAndWait('이유는 단 하나.');
    await era.printAndWait([
      '비록 눈앞의 ',
      tachyon.get_colored_name(),
      '이라는 이름의 ',
      tachyon.get_teen_sex_title(),
      '를 알지는 못하지만.',
    ]);
    await era.printAndWait([
      '잠재의식이 외치고 있다. ',
      tachyon.sex,
      '를 상처 입혀서는 안 된다고, ',
      tachyon.sex,
      '를 슬프게 해서는 안 된다고.',
    ]);
    era.println();
    await era.printAndWait([
      '그렇기에, 주변을 가볍게 둘러보며 기억을 더듬어보자는 ',
      tachyon.sex,
      '의 제안에.',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 거절하지 않았다.']);
    await era.printAndWait([
      '그저 ',
      tachyon.sex,
      '를 따라, 학원(그녀의 말에 따르면 그렇다고 한다) 안을 걸었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '모르모트 군…… 보게나, 이쪽은 훈련장이라네. 우리가 처음 만난 곳이지.',
    );
    era.println();
    await era.printAndWait('만남……?');
    era.println();
    await tachyon.say_and_wait(
      '그렇다네. 비록 당시의 나는 자네를 제대로 보지 못했지만…… 자네가 내게 말을 걸어주었지.',
    );
    era.println();
    await era.printAndWait('그랬구나……');
    await era.printAndWait('그렇다면, 당시의 나는 분명 타키온의 달리기에 매료되었던 것이겠네.');
    era.println();
    await tachyon.say_and_wait('!…… 자네, 기억이 난 건가!');
    era.println();
    await era.printAndWait('……미안.');
    await era.printAndWait('그저, 어떤 느낌이…… 타키온은, 달리기 시작하면 분명 무척 아름다울 것이라는 생각이 들어서.');
    era.println();
    await tachyon.say_and_wait(
      '………그래, 자네는 몇 번이나 그렇게 말했었지…… 나로서는 잘 이해가 안 가지만 말이야. 그저 평범한 달리기일 뿐인데, 대체 무엇이 그렇게 매력적이라는 건지.',
    );
    era.println();
    await era.printAndWait('……아니.');
    await era.printAndWait(
      '다른 사람들은 어떨지 몰라도, 타키온의 달리기만큼은…… 내게 확신을 줘. 분명 나를 매료시킬 거라고.',
    );
    era.println();
    await tachyon.say_and_wait('……그렇다면, 내가 한 바퀴 뛰는 것을 봐주겠나?');
    era.println();
    await era.printAndWait('!그래도 돼?');
    await era.printAndWait('하지만…… 타키온의 다리는……');
    era.println();
    await tachyon.say_and_wait('……자네, 그걸 기억하고 있는 건가?');
    era.println();
    await era.printAndWait('……');
    era.println();
    await era.printAndWait('침묵이 가장 확실한 대답이 되었다.');
    await era.printAndWait([
      '만약 이 상황에서 ',
      tachyon.sex,
      '에게 거짓말을 해서, 기억이 났다고 말한다면.',
    ]);
    await era.printAndWait([tachyon.sex, '는 분명 아주 기뻐할 것이다.']);
    await era.printAndWait(['하지만…… 그렇게 ', tachyon.sex, '를 속이는 것이 정말로 옳은 일일까?']);
    era.println();
    await era.printAndWait('어째서인지 가슴 속의 목소리가 다시금 외치기 시작한다.');
    await era.printAndWait(['「더 이상」 ', tachyon.sex, '를 속이지 마라.']);
    await era.printAndWait('「더 이상」 자신을 속이지 마라.');
    await era.printAndWait('……어째서「더 이상」인 걸까.');
    era.println();
    await tachyon.say_and_wait('……괜찮네. 한 바퀴 뛰고 오겠네.');
    await tachyon.say_and_wait('그러면, 혹시 무언가 떠오를지도 모르니까 말이야.');
    era.println();
    await era.printAndWait([tachyon.sex, '는 운동장을 한 바퀴 달렸다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 생각했던 대로, 그것은 몹시도 매혹적인 달리기였다.',
    ]);
    await era.printAndWait('하지만…… 그뿐이었다.');
    era.println();
    await era.printAndWait([tachyon.sex, '는 한 바퀴를 다 돌고 멈추려 했다.']);
    await era.printAndWait([
      '그러나 여전히 멍한 눈을 하고 있는 ',
      me.get_colored_name(),
      '을(를) 보자, ',
      tachyon.sex,
      '는 웬일인지 다시 달리기 시작했다.',
    ]);
    await era.printAndWait([
      '넋을 잃고 보고 있는 ',
      me.get_colored_name(),
      ' 앞에서, ',
      tachyon.sex,
      '는 날이 저물 때까지 몇 바퀴고 계속해서 달렸다.',
    ]);
    era.println();
    await era.printAndWait('……미안.');
    era.println();
    await tachyon.say_and_wait('아니, 아무것도 아니네…… 그저, 갑자기 달리고 싶어졌을 뿐이라네.');
    era.println();
    await era.printAndWait('거짓말이다.');
    await era.printAndWait([me.get_colored_name(), '은(는) 그것을 느꼈지만, 굳이 지적하지 않았다.']);
    await era.printAndWait('지적할 수 있을 리가 없다.');
    await era.printAndWait([
      '그 ',
      tachyon.get_teen_sex_title(),
      '의, 헛수고에 불과한 애처로움을 차마 입에 담을 수는 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……내일, 다시 같이 찾아보세. 반드시, 언젠가는 되찾을 수 있을 걸세.',
    );
    era.println();
    await era.printAndWait('그렇기에, 비록 이것이 헛된 일임을 알면서도.');
    await era.printAndWait([me.get_colored_name(), '은(는) 끝내 거절의 말을 내뱉지 못했다.']);
    era.println();
    await tachyon.say_and_wait(
      '모르모트 군…… 보게나, 평소에 우린 여기서 실험을 했다네. 매번 내가 약을 만들면 자네가 마셔주었지.',
    );
    era.println();
    await era.printAndWait('에에…… 그거, 실험체 아니야?');
    era.println();
    await tachyon.say_and_wait('당연하지. 자네는 모르모트 군이 무슨 뜻이라고 생각했나?');
    era.println();
    await era.printAndWait('……정말로 실험 동물을 뜻하는 거였구나.');
    era.println();
    await tachyon.say_and_wait(
      '……그러니 조만간 연구할 걸세. 기억을 되찾아주는 약을…… 자네도 도와줄 거지?',
    );
    era.println();
    await era.printAndWait('……물론이지.');
    era.drawLine();
    await tachyon.say_and_wait([
      '모르모트 군…… 저쪽은 ',
      t_call_c,
      '의 구역이니까 조심해야 하네. 함부로 저기 물건을 건드렸다간 큰일 날 수도 있어……',
    ]);
    era.println();
    await era.printAndWait('에……?');
    await era.printAndWait('……아무 일도 일어나지 않는데.');
    era.println();
    await tachyon.say_and_wait('응? 그럴 리가…… 내가 해보지…… 아악! 연구 자료가 불타고 있네!');
    era.drawLine();
    await tachyon.say_and_wait('모르모트 군, 홍차 타는 법 기억하나?');
    era.println();
    await era.printAndWait('당연하지. 홍차 정도는 탈 줄 알아.');
    era.println();
    await tachyon.say_and_wait('으윽…… 이건 완전히 낙제점이군.');
    era.println();
    await era.printAndWait('에에?');
    era.println();
    await tachyon.say_and_wait('홍차와 설탕의 비율은 최소한 1:1이어야 한단 말일세!');
    era.println();
    await era.printAndWait('그건 너무 달잖아!?');
    era.drawLine();
    await era.printAndWait('타키온…… 기억을 잃기 전의 나와 너는 어떤 관계였어?');
    era.println();
    await tachyon.say_and_wait('……왜 그러나? 갑자기 뭔가를 떠올린 건가?');
    await era.printAndWait([
      '……아뇨, 그냥 네가 말해주는 느낌으로 봐서는, 단순히 트레이너와 ',
      tachyon.get_uma_sex_title(),
      '의 관계…… 혹은 실험자와 실험 동물의 관계만은 아니었던 것 같아서.',
    ]);
    era.println();
    await tachyon.say_and_wait('…………사실 우리, 연인이라네.');
    await era.printAndWait('정말?');
    era.println();
    await tachyon.say_and_wait([
      '……음, 아주 깨가 쏟아지는 연인이었지. 매일 붙어 다니느라 ',
      t_call_c,
      ' 조차 질려버릴 정도로 말이야.',
    ]);
    await era.printAndWait('…………미안.');
    era.println();
    await tachyon.say_and_wait('사과할 필요 없지 않나?');
    await era.printAndWait('만약…… 내가 기억해낼 수만 있다면.');
    era.println();
    await tachyon.say_and_wait(
      '……무슨 소릴 하는 건가. 기억해낼 수 있다면이 아니라, 아직 기억해내지 못한 것뿐이라네…… 반드시, 반드시 기억날 걸세.',
    );
    await era.printAndWait('……그렇겠네. 고마워, 타키온.');
    era.drawLine();
    await tachyon.say_and_wait(
      '보게나, 여기는 상점가라네…… 우리의 평소 실험 도구들은 다 여기서 샀었지.',
    );
    era.println();
    await era.printAndWait('……저기, 타키온.');
    era.println();
    await tachyon.say_and_wait('응? 왜 그러나?');
    era.println();
    await era.printAndWait('……어째서 주변 사람들이 우리를 귀신이라도 본 듯한 눈빛으로 보는 거야?');
    era.println();
    await tachyon.say_and_wait('그랬나? 아마 지난달 내 실험 때문일 걸세.');
    era.println();
    await era.printAndWait('……지난달?');
    era.println();
    await tachyon.say_and_wait('음, 그때 실험 중에 사고가 나서 거리 전체를 핏빛으로 물들여버렸거든.');
    era.println();
    await era.printAndWait('…………설마, 타키온은 사실 굉장히 위험한 사람인거야?');
    era.println();
    await tachyon.say_and_wait([
      '무례하긴, 난 청렴결백한 사춘기 미',
      tachyon.get_teen_sex_title(),
      '라네.',
    ]);
    await tachyon.say_and_wait(
      '그저 모르모트 군이 곁에 없으면 폭주하는 지구 최종병기가 될 뿐이지.',
    );
    era.println();
    await era.printAndWait('무서워!');
    era.println();
    await tachyon.say_and_wait('……그러니, 절대로 다시는 나를 떠나지 말아주게. 알겠나?');
    era.println();
    await era.printAndWait('…………응.');
    era.drawLine();
    await tachyon.say_and_wait('……모르모트 군, 자네, 내가 원망스럽지 않나?');
    era.println();
    await era.printAndWait('왜?');
    era.println();
    await tachyon.say_and_wait('내가 자네의 인생을 여기에 속박해버렸네. 만약……');
    era.println();
    await era.printAndWait('……어째서?');
    await era.printAndWait('오히려 네가 나를 원망해야 하는 거 아냐?');
    await era.printAndWait('기억도 없는 내가…… 정말로 네 사랑을 받을 자격이 있는 걸까?');
    era.println();
    await tachyon.say_and_wait('! 아니…… 그렇지 않아!');
    await tachyon.say_and_wait(
      '분명 기억해낼 수 있을 거야……! 그러니까, 그러니까…… 제발 그런 말은 하지 말아주게……',
    );
    era.drawLine();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '과 모르모트 군의 발자취가, 그들이 함께했던 모든 장소에 새겨졌다.',
    ]);
    await era.printAndWait('훈련장, 경기장, 강변, 신사.');
    await era.printAndWait('마지막까지, 그 무엇도 모르모트 군의 기억을 다시 일깨우지는 못했다.');
    await era.printAndWait('하지만 그들은 그 일을 조금도 슬퍼하지 않았다.');
    await era.printAndWait('왜냐하면 그 장소들에서, 다시금 가장 아름다운 추억을 남겼기 때문이다.');
    era.println();
    await tachyon.say_and_wait('……이런 이야기의 결말, 자네는 마음에 드나?');
    era.println();
    await era.printAndWait('……응, 아주 좋네.');
    era.println();
    await tachyon.say_and_wait('……모르모트 군.');
    era.println();
    await era.printAndWait('됐어, 이제, 이것으로 충분해.');
    await era.printAndWait('나는…… 이제 곧 죽으니까.');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait('타키온…… 고마워.');
    await era.printAndWait('비록 몹시도 짧은 인생이었지만.');
    await era.printAndWait('이 기간 동안 나는 정말 행복했어.');
    await era.printAndWait('설령 과거가 기억나지 않더라도…… 나는 자랑스럽게 말할 수 있어.');
    await era.printAndWait('타키온을 알게 된 것이…… 내 인생에서 가장 아름다운 일이었다고.');
    await era.printAndWait('그러니, 정말 미안해.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '과 모르모트 군의 이야기는…… 여기서 끝이야.',
    ]);
    era.println();
    await tachyon.say_and_wait('만약 자네가 원한다면……');
    await era.printAndWait('……미안.');
    await era.printAndWait('하지만 나는 더 이상 네 발목을 붙잡고 싶지 않아.');
    await era.printAndWait('이야기는 여기서 끝내기로 하자.');
    era.println();
    await me.say_and_wait('미안해, 타키온. 정말로 졸려…… 이제 됐을까?');
    await common(tachyon, me);
    await tachyon.print_and_wait('설령 범인을 가루로 만들어 흩뿌렸을지라도.');
    await tachyon.print_and_wait('설령 상점가를 선혈로 물들였을지라도.');
    await tachyon.print_and_wait([me.sex, '는 돌아올 수 없었다.']);
    await tachyon.print_and_wait([
      '그 붉은 빛조차 ',
      me.sex,
      '의 복부에서 흘러나온 피를 채울 수는 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([me.sex, '는 역시…… 나를 원망하지 않았어.']);
    era.println();
    await tachyon.print_and_wait('자신에 의해 이런 모습이 되었음에도.');
    await tachyon.print_and_wait('눈앞의 모르모트 군의 얼굴에는 청춘의 흔적이 넘쳐흐르고 있었다.');
    await tachyon.print_and_wait([me.sex, '는 여기서 떠나선 안 되었다.']);
    await tachyon.print_and_wait([me.sex, '는 지금 떠나선 안 되었다.']);
    await tachyon.print_and_wait(['하지만, ', tachyon.get_colored_name(), ' 때문에.']);
    await tachyon.print_and_wait([
      me.sex,
      '는 잘못된 시간에, 잘못된 장소에서…… 잘못된 사람을 만나고 말았다.',
    ]);
  } else {
    await era.printAndWait('미안해…… 정말로 기억이 나지 않아.');
    era.println();
    await tachyon.say_and_wait('모르……');
    era.printButton('「——물론, 거짓말이야!」', 1);
    await era.input();
    await tachyon.say_and_wait('…………어?');
    era.printButton('「무슨 생각을 하는 거야, 내가 어떻게 타키온을 잊을 수 있겠어?」', 1);
    await era.input();
    await tachyon.say_and_wait('…………');

    era.printButton('「……어? 타키온?」', 1);
    await era.input();
    await era.printAndWait('타키온은 갑자기 입을 다물고 고개를 숙였다.');
    await era.printAndWait('돌연, 타키온이 당신의 몸을 억눌렀다.');
    era.println();
    await tachyon.say_and_wait('이 바보 같은 녀석! 내가 얼마나 걱정했는지 아나!');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 고개를 들지 않았다. 하지만 바닥에 떨어지는 물방울로 보아————',
      tachyon.sex,
      '는 울고 있었다.',
    ]);
    era.printButton('「타키온?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '제발…… 다시는 그런 식으로 날 속이지 말게. 부탁이야, 제발…… 정말 무서웠어…… 자네를 잃고 싶지 않아……',
    );
    era.printButton('「…………응, 미안해」', 1);
    await era.input();
    await era.printAndWait('미안하다.');
    await era.printAndWait('정말로 미안하다.');
    await era.printAndWait([
      '무슨 일이 있었는지는 모르겠지만, 자신은 또 ',
      tachyon.sex,
      '를 속이고 말았다.',
    ]);
    await era.printAndWait([
      '속여버렸다——— 눈앞의 이 ',
      tachyon.get_colored_name(),
      '이라는 이름의 낯선 ',
      tachyon.get_uma_sex_title(),
      '를.',
    ]);
    era.println();
    await tachyon.say_and_wait('모르모트 군…… 자네, 이전에 무슨 일이 있었는지 기억하나?');
    era.println();
    await era.printAndWait('이것만큼은…… 대답해도 상관없겠지.');
    await era.printAndWait([me.get_colored_name(), '은(는) 고개를 저었다.']);
    await era.printAndWait('솔직히 말해서, 아무것도 모른다.');
    await era.printAndWait([
      '여기가 어디인지, 눈앞의 ',
      tachyon.get_teen_sex_title(),
      '가 누구인지.',
    ]);
    await era.printAndWait('모든 것을, 전혀 알지 못한다.');
    await era.printAndWait('하지만 오직 하나, 마음속 깊은 곳에 변치 않고 박혀 있는 것이 있었다.');
    await era.printAndWait(['—————', tachyon.sex, '를 슬프게 하고 싶지 않다.']);
    await era.printAndWait(['—————', tachyon.sex, '를 괴롭게 하고 싶지 않다.']);
    await era.printAndWait('그것을 위해서라면, 설령 거짓말로 과거를 덮어버린대도 상관없다.');
    era.println();
    await tachyon.say_and_wait(
      '……아무것도 아니네. 그럼 됐어. 어쨌든 자네가 지금 깨어났으니…… 그거면 된 거야.',
    );
    era.println();
    await era.printAndWait([
      '보아하니 ',
      tachyon.sex,
      '는 자세히 설명할 생각이 없는 듯했다.',
    ]);
    await era.printAndWait('그렇다면 어쩔 수 없다.');

    era.printButton('「그나저나, 지금은————」', 1);
    await era.input();
    await tachyon.say_and_wait('모르모트 군, 자네도 피곤하겠지. 자세한 건 내일 얘기하세.');
    era.println();
    await era.printAndWait([
      '지금이 언제인지 물어보려던 찰나, ',
      tachyon.sex,
      '는 다급하게 화제를 돌렸다.',
    ]);
    await era.printAndWait('비록 과거의 기억은 없지만, 인간으로서의 상식은 남아 있었다.');
    await era.printAndWait([
      tachyon.sex,
      '의 표정에서 알 수 있었다. ',
      tachyon.sex,
      '는 이 질문에 대답하고 싶어 하지 않는다.',
    ]);
    await era.printAndWait('……그럼 관두자. 묻지 않기로 했다.');
    await era.printAndWait([
      '만약 이 질문이 ',
      tachyon.sex,
      '에게 저런 당혹스러운 표정을 짓게 만든다면.',
    ]);
    era.drawLine();
    await tachyon.say_and_wait(
      '자, 모르모트 군. 이제 깨어났으니 가장 먼저 해야 할 일이 무엇인지 알고 있겠지?',
    );
    await say_by_passer_by_and_wait('모르모트', '그건……?');
    await tachyon.say_and_wait(
      '당연히 밥이지! 밥! 배고파 죽겠네. 모르모트 군, 빨리 가서 뭐라도 좀 만들어 오게!',
    );
    await say_by_passer_by_and_wait('모르모트', '…………알겠어.');
    era.println();
    await say_by_passer_by_and_wait('모르모트', '맛은…… 어때?');
    await tachyon.say_and_wait('………음.');
    await tachyon.say_and_wait('우엑…… 맛없어……');
    await tachyon.say_and_wait('어쩜 이렇게 맛이 없을 수가…… 모르모트 군, 자네……');
    await say_by_passer_by_and_wait('모르모트', '!?');
    await tachyon.say_and_wait('분명…… 몸이 아직 다 회복되지 않아서 그런 거겠지. 하긴 그렇게 오래 누워 있었으니.');
    await tachyon.say_and_wait('이번만은 봐주겠지만, 다음엔 빨리 감각을 되찾아야 하네.');
    await say_by_passer_by_and_wait('모르모트', '……아하하, 미안해.');
    era.drawLine();
    await tachyon.say_and_wait('그럼…… 다음은 먼저 운동장으로 트레이닝을 하러 가세.');
    await say_by_passer_by_and_wait('모르모트', '…………');
    await tachyon.say_and_wait('………모르모트 군?');
    await say_by_passer_by_and_wait('모르모트', '아, 응……');
    await tachyon.say_and_wait(
      '자네, 조금도 놀라지 않는 건가? 내가 무려 자발적으로 트레이닝을 하러 가겠다고 했다고?',
    );
    await say_by_passer_by_and_wait('모르모트', '……에.');
    await say_by_passer_by_and_wait('모르모트', '……무의식적으로 또 땡땡이치러 가자는 소린 줄 알았어.');
    await say_by_passer_by_and_wait('모르모트', '타키온, 너 정말로 트레이닝하러 가는 거야!?');
    await tachyon.say_and_wait('아니, 그건 또 반응이 너무 과하군.');
    await say_by_passer_by_and_wait('모르모트', '아하하…… 그렇네.');
    era.drawLine();
    await say_by_passer_by_and_wait('모르모트', '상점가……?');
    await tachyon.say_and_wait(
      '그래, 내 실험 기구가 좀 부족해졌거든. 같이 좀 가주게.',
    );
    await say_by_passer_by_and_wait('모르모트', '아, 알았어. 당연히 가야지.');
    await tachyon.say_and_wait('모르모트 군? 어디로 가는 건가? 상점가는 그쪽이 아닐세.');
    await say_by_passer_by_and_wait(
      '모르모트',
      '……아, 아냐, 아무것도. 그냥 갑자기 챙길 게 생각나서.',
    );
    await say_by_passer_by_and_wait(
      '모르모트',
      '하지만 다시 생각해보니 별로 중요한 것도 아니었어. 아하하하.',
    );
    await tachyon.say_and_wait('……참 이상하군.');
    era.println();
    await tachyon.say_and_wait('흠～ 흠흠흠♪');
    await say_by_passer_by_and_wait('모르모트', '……저기, 타키온?');
    await tachyon.say_and_wait('응?');
    await say_by_passer_by_and_wait(
      '모르모트',
      '…… 상점가 사람들이 널 보는 눈빛이 어쩐지 좀 이상한 것 같은데?',
    );
    await tachyon.say_and_wait('……그, 그런가? 자네 기분 탓이겠지, 모르모트 군.');
    await say_by_passer_by_and_wait(
      '모르모트',
      '아니, 분명해. 마치 위험 인물을 보는 듯한……',
    );
    await tachyon.say_and_wait('자네가 잘못 본 거야.');
    await say_by_passer_by_and_wait('모르모트', '그렇지만.');
    await tachyon.say_and_wait('잘못 본 거라니까.');
    await say_by_passer_by_and_wait('모르모트', '……알았어.');
    era.drawLine();
    await tachyon.say_and_wait(
      '……저기 말이야, 모르모트 군. 지금 당장, 아주 조심스럽게, 손에 든 걸 내려놓는 게 좋겠네.',
    );
    await say_by_passer_by_and_wait('모르모트', '으음…… 왜 그래?');
    await tachyon.say_and_wait([
      '왜 그러냐니, 그게 ',
      t_call_c,
      '의 물건이라는 걸 잊은 건가?',
    ]);
    await say_by_passer_by_and_wait(
      '모르모트',
      '에…… 하지만 살짝 만지는 정도는 별일 없겠지.',
    );
    await tachyon.say_and_wait(
      '그럴 리가! 지난번에 내가 살짝 건드리기만 했는데 내 연구 자료가 순식간에 불타버렸단 말일세!',
    );
    await say_by_passer_by_and_wait('모르모트', '하지만……');
    await tachyon.say_and_wait('………');
    await say_by_passer_by_and_wait('모르모트', '…………');
    await tachyon.say_and_wait(
      '그럼 나도 한번……… 으아아악! 불붙었다! 빨리 자료 구조해! 아아악!',
    );
    era.drawLine();
    await tachyon.say_and_wait('이보게, 모르모트 군.');
    await say_by_passer_by_and_wait('모르모트', '응? 타키온, 왜 그래?');
    await tachyon.say_and_wait('내 말은, 자네 깨어난 뒤로 나랑 전혀 애정 행각을 안 했잖나?');
    await say_by_passer_by_and_wait('모르모트', '……에?');
    await tachyon.say_and_wait(
      '연인을 이렇게 방치해두다니. 깨어난 직후에는 회복 중이라 쳐도…… 지금은 정밀 검사에서도 아무 이상 없다는데, 이제 슬슬 예전처럼 알콩달콩 지내야 하지 않겠나?',
    );
    await say_by_passer_by_and_wait('모르모트', '아니, 잠깐만. 타키온은 학생이잖아.');
    await tachyon.say_and_wait('그렇지. 그게 무슨 문제라도?');
    await say_by_passer_by_and_wait('모르모트', '문제가 아주 크지!? 윤리 같은 게……');
    await tachyon.say_and_wait('……왜 갑자기 그렇게 격하게 반응하나. 예전엔 자네가 훨씬 적극적이었으면서♡');
    await say_by_passer_by_and_wait('모르모트', '…과거의 나는 그렇게 쓰레기였던 거야?');
    await tachyon.say_and_wait('? 모르모트 군, 방금 뭐라고 했나?');
    await say_by_passer_by_and_wait('모르모트', '……아니, 아무것도 아니야.');
    await tachyon.say_and_wait('그럼 어서, 진하게 사랑을 나누자고♡');
    era.drawLine();
    await tachyon.say_and_wait(
      '오오, 이번 도시락은 꽤 괜찮군! 모르모트 군! 드디어 예전 실력을 되찾았구만!',
    );
    await say_by_passer_by_and_wait('모르모트', '그…… 그래?');
    await tachyon.say_and_wait('필사적으로 재활한 보람이 있군 그래!');
    await say_by_passer_by_and_wait('모르모트', '그렇네………… 그 요리책들도 도움이 됐고.');
    await tachyon.say_and_wait(
      '정말…… 오랜만이군, 이 맛………… 정말로, 아주 오래도록………',
    );
    await say_by_passer_by_and_wait('모르모트', '……타키온, 질문 하나 해도 될까?');
    await tachyon.say_and_wait('응?');
    await say_by_passer_by_and_wait('모르모트', '내가 대체…… 얼마나 오랫동안 잠들어 있었던 거야?');
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait('…………년이라네.');
    await say_by_passer_by_and_wait('모르모트', '…………');
    await tachyon.say_and_wait('……모르모트 군?');
    await say_by_passer_by_and_wait(
      '모르모트',
      '미안해…… 그 긴 세월 동안, 너…… 정말 외로웠겠구나.',
    );
    await tachyon.say_and_wait('!');
    await say_by_passer_by_and_wait(
      '모르모트',
      '……내가 돌아왔어. 이제 됐어. 더 이상은……',
    );
    await tachyon.say_and_wait('……');
    await tachyon.say_and_wait('모르모트 군…… 나 정말로…… 정말로, 거의 무너질 뻔했다네……');
    await tachyon.say_and_wait(
      '만약…… 자네가 깨어나지 못했다면…… 만약…… 나를 완전히 잊어버렸다면…… 만약…… 만약……',
    );
    await tachyon.say_and_wait(
      '정말로…… 너무나 무서웠어…… 마치 악몽 같았지…… 수년간 이어진 악몽 말이야……',
    );
    await say_by_passer_by_and_wait('모르모트', '……………');
    await tachyon.say_and_wait('하지만…… 자네가 돌아왔어. 결국 다시 돌아와 주었어.');
    await tachyon.say_and_wait('약속해주게…… 이번엔 절대로 나를 떠나지 않겠다고…… 알겠나?');
    await say_by_passer_by_and_wait('모르모트', '……응, 다시는 떠나지 않을게.');
    era.drawLine();
    await say_by_passer_by_and_wait('모르모트', '그래서…… 그날 대체 무슨 일이 있었던 거야?');
    await tachyon.say_and_wait(
      '……그날, 자네가 상점가에서…… 내가 잠시 자리를 비운 사이, 어떤…… 자칭 팬이라는 녀석이 달려들어서…… 그래서……',
    );
    await tachyon.say_and_wait('……만약 그때, 내가 조금만 더 빨랐더라면.');
    await tachyon.say_and_wait('아니, 내가 계속 자네 곁에 있었더라면……');
    await tachyon.say_and_wait('절대로, 절대로 그런 일은 일어나지 않았을 텐데…… 미안하네……');
    await say_by_passer_by_and_wait(
      '모르모트',
      '괜찮아…… 어쨌든, 지금은 이렇게 멀쩡하잖아?',
    );
    await tachyon.say_and_wait(
      '하지만…… 그 사이 자네의 인생은…… 수년간의 세월이 무의미하게………… 나를 원망하지 않나?',
    );
    await tachyon.say_and_wait(
      '나 때문이 아니었다면…… 나를 담당하지 않았더라면…… 자네는 이런 일을 겪지 않아도 됐을 텐데.',
    );
    await say_by_passer_by_and_wait('모르모트', '내가 왜 너를 원망하겠어?');
    await say_by_passer_by_and_wait(
      '모르모트',
      '타키온 네 잘못도 아니고…… 게다가, 네가 노력해서 나를 살려냈잖아.',
    );
    await say_by_passer_by_and_wait('모르모트', '고마워해도 모자랄 판에, 원망이라니.');
    await tachyon.say_and_wait('…………그렇군. 과연 자네답군. 분명 그렇게 말할 줄 알았어.');
    await say_by_passer_by_and_wait('모르모트', '? 무슨 뜻이야.');
    await tachyon.say_and_wait('아니…… 아무것도 아니야.');
    era.drawLine();
    await era.printAndWait('그렇게.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '과 모르모트 군의 발자취가, 그들이 함께했던 모든 장소에 새겨졌다.',
    ]);
    await era.printAndWait('훈련장, 경기장, 강변, 신사.');
    await era.printAndWait('과거를 되새기기 위해, 그리고 수년 전 멈춰버린 시간을 다시 움직이기 위해.');
    await era.printAndWait('어쩌면 잃어버린 세월은 메울 수 없을지도 모른다.');
    await era.printAndWait('하지만 그들은 여전히 노력하며, 오직 그들만의 새로운 인생을 만들어나갔다.');
    era.println();
    await tachyon.say_and_wait('……이런 이야기의 결말, 만족하나?');
    era.println();
    await era.printAndWait('……응. 아주 좋네.');
    era.println();
    await tachyon.say_and_wait('……모르모트 군.');
    era.println();
    await era.printAndWait('됐어, 이제, 이것으로 충분해.');
    await era.printAndWait('나는…… 이제 곧 죽으니까.');
    await tachyon.say_and_wait('…………');
    await era.printAndWait('타키온…… 고마워.');
    await tachyon.say_and_wait('나랑 약속했잖나…… 다시는 떠나지 않겠다고, 약속했지 않았나.');
    era.println();
    await era.printAndWait('……미안.');
    await era.printAndWait('내가 또 너를 속였다고 생각해 줘.');
    await era.printAndWait('이 기간 동안 나는 정말 행복했어.');
    await era.printAndWait('하지만 이 행복은…… 내 것이 아니라 「모르모트 군」의 것이야.');
    await era.printAndWait('타키온을 알게 된 것이…… 내 인생에서 가장 아름다운 일이었다고 생각해.');
    await era.printAndWait('그러니 더 이상은 속이고 싶지 않아.');
    await era.printAndWait('그러니, 정말 미안해.');
    await era.printAndWait('그러니, 미안해.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '과 모르모트 군의 이야기는…… 여기서 끝이야.',
    ]);
    await tachyon.say_and_wait('만약 자네가 원한다면……');
    era.println();
    await era.printAndWait('……미안해.');
    await era.printAndWait('하지만 나는 더 이상 네 발목을 붙잡고 싶지 않아.');
    await era.printAndWait('모르모트 군의 이야기는 여기서 끝내기로 하자.');
    era.println();
    await era.printAndWait('미안해, 타키온. 정말로 졸려…… 이제 됐을까?');
    await common(tachyon, me);
    await tachyon.print_and_wait('설령 범인을 가루로 만들어 흩뿌렸을지라도.');
    await tachyon.print_and_wait('설령 상점가에서 자신이 미친 사람처럼 날뛰었을지라도.');
    await tachyon.print_and_wait([me.sex, '는 돌아올 수 없었다.']);
    await tachyon.print_and_wait([
      '응급조치조차 ',
      me.sex,
      '의 복부에서 흘러나온 피를 채울 수는 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '그렇게 오랫동안 속여왔으면서…… 마지막에 한 번 더 속여주는 게 뭐 그리 대수라고……',
    );
    era.println();
    await tachyon.print_and_wait('처음부터 알고 있었다.');
    await tachyon.print_and_wait([me.sex, '이기도 하고, ', me.sex, '가 아니기도 하다는 것을.']);
    await tachyon.print_and_wait(
      '필사적으로 꾸며냈을지 모르나, 기억을 잃은 사람 특유의 그 막막한 눈빛은 결코 쉽게 숨겨지는 것이 아니었다.',
    );
    await tachyon.print_and_wait('하물며…… 그 이후의 거짓말들은 또 얼마나 서툴렀던가.');
    era.println();
    await tachyon.print_and_wait([
      '하지만…… ',
      tachyon.get_colored_name(),
      '은 개의치 않았다.',
    ]);
    await tachyon.print_and_wait(['그저 ', me.sex, '이기만 하면 되었다.']);
    await tachyon.print_and_wait('그저 살아있어 주기만 한다면, 계속 살아만 준다면 그것으로 충분했다.');
    await tachyon.print_and_wait('기억이 없다고? 그게 무슨 상관인가.');
    await tachyon.print_and_wait([
      me.sex,
      '가 계속 곁에 있어 주기만 한다면, ',
      tachyon.get_colored_name(),
      '은 기꺼이 평생이라도 속아줄 용의가 있었다.',
    ]);
    await tachyon.print_and_wait('……하지만.');
    await tachyon.print_and_wait([
      '마찬가지로, 설령 「이번」의 ',
      me.sex,
      '가 자신을 평생토록 속였을지라도.',
    ]);
    await tachyon.print_and_wait([
      '결국 마지막의 마지막 순간만큼은, ',
      tachyon.get_colored_name(),
      '을 속이는 것을 거부하고 말았다.',
    ]);
  }
  era.println();
  await tachyon.print_and_wait('침대 곁에 놓인 홍차를 한 모금 마셨다.');
  await tachyon.print_and_wait([
    '자신이 탄 홍차는 ',
    me.sex,
    '가 탔던 것과 이론적인 성분이 완벽하게 일치한다.',
  ]);
  await tachyon.print_and_wait('그도 그럴 것이, 이미 수년 동안 스스로 타왔기 때문이다.');
  await tachyon.print_and_wait('연구할 수 있는 모든 것, 수정할 수 있는 모든 것을 최상의 상태로 다듬었다.');
  await tachyon.print_and_wait('하지만 맛이 다르다.');
  await tachyon.print_and_wait('같을 수 없다. 영원히 같아질 수 없다.');
  await tachyon.print_and_wait('오늘의 홍차는 결코 어제의 맛을 이길 수 없다.');
  era.println();
  await tachyon.say_and_wait('————그럼, 다음 실험을 시작해볼까.');
  era.drawLine();
  await tachyon.print_and_wait('트레센 학원의 지하실.');
  era.println();
  await tachyon.say_and_wait('마지막으로 여기 온 게…… 언제였더라.');
  era.println();
  await tachyon.print_and_wait('3개월 전? 5개월 전? 아니면……');
  await tachyon.print_and_wait('「이번」에는 모르모트 군과 얼마나 시간을 보냈더라?');
  era.println();
  await tachyon.say_and_wait('됐다. 중요하지 않아.');
  era.println();
  await tachyon.print_and_wait('불을 켰다.');
  await tachyon.print_and_wait('눈이 서서히 빛에 적응하자.');
  await tachyon.print_and_wait('눈앞에 나타난 것은 수천 개에 달하는 배양 수조였다.');
  era.println();
  await tachyon.print_and_wait([
    '아아, 만약 ',
    me.sex,
    '가 알게 된다면, ',
    me.sex,
    '는 절대로 나를 용서하지 않겠지.',
  ]);
  await tachyon.print_and_wait(['하지만…… ', me.sex, '는 결국 나를 원망하지 않았다.']);
  await tachyon.print_and_wait('그러니 이건 묵인한 셈이나 다름없다.');
  era.println();
  await tachyon.say_and_wait(
    '제56차 실험, 기억 회복 경향 없음, 신체 이상 없음, 생존 기간 5개월……',
  );
  era.println();
  await tachyon.print_and_wait([me.sex, '가 떠난 그날부터 시작된 계획이었다.']);
  await tachyon.print_and_wait('자신을 수없이 원망했다.');
  await tachyon.print_and_wait('어째서 이렇게 늦게서야 이 방법을 떠올렸느냐고.');
  await tachyon.print_and_wait(
    '물거품 같은 행복에 취해 연구자의 기본인 유비무환조차 잊고 있었단 말인가.',
  );
  await tachyon.print_and_wait('그 결과가 바로 이런 꼴이다.');
  era.println();
  await tachyon.print_and_wait([
    '한 땀 한 땀, 모래성을 쌓듯이 ',
    me.sex,
    '의 신체를 다시 이어 붙여 만들었다.',
  ]);
  await tachyon.print_and_wait(
    '하지만 모든 것을 이어 붙였음에도, 형체 없는 것만은 다시 빚어낼 수 없었다.',
  );
  await tachyon.print_and_wait('인체에서 가장 많은 비밀을 담고 있는 뇌———— 바로 기억이다.');
  await tachyon.print_and_wait(
    '처음부터 존재했는지조차 알 수 없는 것을 대체 어떻게 재구성한단 말인가.',
  );
  await tachyon.print_and_wait('그저 이렇게 할 수밖에 없었다.');
  await tachyon.print_and_wait('반복되는 실험, 반복되는 각성.');
  await tachyon.print_and_wait('그리고 되풀이되는…… 기적을 기다리는 일.');
  era.println();
  await tachyon.say_and_wait('실패 주요 원인, 다발성 장기 부전으로 인한 패혈증…… 생존 의지, 없음.');
  era.println();
  await tachyon.print_and_wait(
    '범인의 흙장난 따위는 역시 여신에게 비길 바가 못 되는 모양이다.',
  );
  await tachyon.print_and_wait(['그래서 매번 만들어지는 ', me.sex, '는 항상 이랬다.']);
  await tachyon.print_and_wait('길어야 반년, 짧으면…… 고작 2주.');
  await tachyon.print_and_wait(
    '시간이 다 되면, 항상 각양각색의 이유로 영면에 들고 만다.',
  );
  await tachyon.print_and_wait('……물론.');
  await tachyon.print_and_wait('그 질병들은 어디까지나 상식적인 범주 내의 일이다.');
  await tachyon.print_and_wait([
    tachyon.get_colored_name(),
    '의 연구 성과를 이용한다면.',
  ]);
  await tachyon.print_and_wait(
    '생명을 연장하는 것쯤이야 3년에서 5년은 거뜬했고, 심지어…… 그보다 훨씬 오래 살게 할 수도 있었다.',
  );
  await tachyon.print_and_wait(
    '마음만 먹는다면 첫 번째 5년, 그리고 두 번째, 세 번째, 네 번째…… 영원히 이어갈 수도 있었다.',
  );
  era.println();
  await tachyon.say_and_wait([me.sex, '는 끝내 말하지 않았다.']);
  era.println();
  await tachyon.print_and_wait('아무리 반복해도.');
  await tachyon.print_and_wait('아무리 신체를 개조해도.');
  await tachyon.print_and_wait(['마지막 순간에 ', me.sex, '가 내뱉는 말은 늘 비슷했다.']);
  era.println();
  await tachyon.say_and_wait('이제 끝났어.');
  await tachyon.say_and_wait('이걸로 만족해.');
  era.println();
  await tachyon.say_and_wait('웃기지 마…… 웃기지 말라고!');
  await tachyon.say_and_wait(
    '누가 마음대로 만족하라고 했나! 말하란 말이야! 내게 말해! 살고 싶다고! 계속 나와 함께 살아가고 싶다고 말하란 말이야!',
  );
  await tachyon.say_and_wait(
    '기억이 없어도 상관없어, 평생 기억을 찾아 헤매도 상관없으니까, 제발 말해줘…… 어째서 말하지 않는 거야…… 왜…… 왜 나를 혼자 두는 거냐고……',
  );
  era.println();
  await tachyon.print_and_wait([
    '만약 ',
    me.sex,
    '가 증오 때문에, 자신의 목숨을 앗아가게 만든 ',
    tachyon.get_colored_name(),
    '을 원망해서 차라리 죽음을 택하는 것이라면, 그것은 받아들일 수 있었다.',
  ]);
  await tachyon.print_and_wait([
    '정말로 그렇다면 ',
    tachyon.get_colored_name(),
    '은 군말 없이 ',
    me.sex,
    '의 곁을 떠나, 최소한의 의료적 접촉만을 유지했을 것이다.',
  ]);
  await tachyon.print_and_wait([
    '마지막 순간에 조금이라도 망설이거나, 혹은 ',
    tachyon.get_colored_name(),
    '을 향한 혐오를 드러내 주기만 한다면.',
  ]);
  await tachyon.print_and_wait([
    '설령 심장이 멈추더라도, 마지막 수단을 써서라도 ',
    me.sex,
    '를 다시 살려냈을 것이다.',
  ]);
  await tachyon.print_and_wait('하지만…… 56번의 실험 동안.');
  await tachyon.print_and_wait('그런 일은 단 한 번도 일어나지 않았다.');
  era.println();
  await tachyon.print_and_wait('자신을 끌어들이고 싶지 않아서.');
  await tachyon.print_and_wait('자신을 구속하고 싶지 않아서.');
  await tachyon.print_and_wait('설령 모든 것을 잃었음에도, 생명도, 기억도 잃었음에도.');
  await tachyon.print_and_wait([
    '56번의 기회 속에서 매번 ',
    me.sex,
    '가 마지막까지 생각한 것은 오직 ',
    tachyon.get_colored_name(),
    '의 가능성뿐이었다.',
  ]);
  era.println();
  await tachyon.print_and_wait([
    '하지만 ',
    tachyon.get_colored_name(),
    '의 가능성은 이미 끝났다.',
  ]);
  await tachyon.print_and_wait([
    tachyon.get_colored_name(),
    '의 시간은 이미 멈춰버렸다.',
  ]);
  await tachyon.print_and_wait('그 홍차의 맛은 그 순간부터 이미 고정되어버렸다.');
  era.println();
  await tachyon.say_and_wait('제57차 실험, 개시.');
  era.println();
  await tachyon.print_and_wait(
    '배양 수조의 영양액이 빠져나가며, 수조 안의 실루엣이 해방되었다.',
  );
  era.println();
  await tachyon.print_and_wait([
    me.sex,
    '를 끝내게 하지 않겠다. 결코 ',
    me.sex,
    '를 끝나게 두지 않을 것이다.',
  ]);
  await tachyon.print_and_wait([
    tachyon.get_colored_name(),
    '과 모르모트 군의 이야기는 반드시 영원히 계속되어야만 한다.',
  ]);
  era.println();
  await tachyon.print_and_wait(
    '그리하여 과거에 얽매이고, 과거에 갇혀버린 과학자는 다시금 새로운 실험을 시작했다.',
  );
  await print_event_name(
    [{ color: buff_colors[3], content: '정지된 시계' }],
    tachyon,
  );
};