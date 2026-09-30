const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_names } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    tachyon,
    me,
    callname,
    _,
    relation,
    love,
  ) => {
    if (era.get('cflag:32:육성턴수합산') !== 23) {
      return true;
    }
    await print_event_name('과제 가독성 분석', tachyon);
    await era.printAndWait([
      '만약 ',
      tachyon.get_uma_sex_title(),
      '와 트레이너의 첫 만남이 두 사람의 톱니바퀴가 돌아가기 시작한 순간이었다면,',
    ]);
    await era.printAndWait('이날은 바로 그 톱니바퀴가 돌아가는 소리가 세상을 뒤흔드는 순간이었다.');
    await era.printAndWait([
      '…………적어도, 다른 ',
      tachyon.get_uma_sex_title(),
      '들에게 있어서는 그러했다.',
    ]);

    era.printButton('「타키온!」', 1);
    await era.input();
    await era.printAndWait([
      '만약 자신의 ',
      tachyon.get_uma_sex_title(),
      '가 정말로 이런 서사시의 서막과 같은 감상을 품고 있었다면, 지금처럼 소중한 레이스 전 준비 시간을 다른 ',
      tachyon.get_uma_sex_title(),
      '들과 잡담을 나누는 데 소비하지는 않았을 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '따라서 시간이라는 것은 그저 인위적으로 부여된 정의에 불과하며, 본래 인류가 만들어낸 단위일 뿐이다. 빠름과 느림 또한 상대적인 개념일 뿐이지…………',
    );
    await tachyon.say_and_wait(['이런, ', callname, '? 자네 왔나.']);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 어이가 없었다. 출주하는 ',
      tachyon.get_uma_sex_title(),
      '들의 입장까지 겨우 몇 분밖에 남지 않았고, 이론상 평생 단 한 번뿐인 첫 데뷔전이다.',
    ]);
    await era.printAndWait([
      '제1인기 주인공인 ',
      tachyon.sex,
      '는 레이스 시작 직전까지 한가롭게 수다를 떨고 있었으며, 심지어 그 주제는 지극히 사소한 것이었다.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 논리에 심취해 있던 아이들에게 작별 인사를 건넨 뒤, ',
      tachyon.get_colored_name(),
      '을 이끌고 지하 통로로 내려갔다.',
    ]);
    if (me.sex_code === 1) {
      era.println();
      await tachyon.say_and_wait(['남자가 그렇게 성급하면 미움받는다네, ', callname]);
    }
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 여전히 여유로운 태도로 ',
      me.get_colored_name(),
      '의 뒤를 따랐다.',
    ]);
    await era.printAndWait([
      me.get_couple_title(),
      ' 두 사람의 발소리만이 텅 빈 지하 통로에 울려 퍼졌고, 분위기는 잠시 어색해졌다.',
    ]);

    era.printButton('「……생각보다 붙임성이 좋네.」', 1);
    await era.input();
    await era.printAndWait([
      '분명히 억지로 말을 꺼낸 것이었으나, ',
      tachyon.get_colored_name(),
      '은 그 어색함을 눈치채지 못한 듯, 혹은 알고도 모른 척하며 말을 이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '당연하지 않나. 가끔은 개인의 이미지를 관리해 둬야 실험체가 끊이지 않는 법이라네.',
    );
    era.println();
    await era.printAndWait('정말 이미지를 생각한다면 평소에 이상한 짓 좀 하지 말라고……');
    era.println();
    await tachyon.say_and_wait([
      callname,
      ', 자네는 아직 멀었군. 이미지라는 것은 말이지, 사람들은 악인에게서 이유를 찾고, 선인에게서 결점을 찾는 것을 가장 좋아한다네.',
    ]);
    await tachyon.say_and_wait(
      '완벽한 인격자가 폭로되는 것보다, 미친 과학자가 소외받는 이유를 찾아내어 동정하는 쪽을 그들은 더 선호하지.',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '는 냉소했다.']);
    era.println();
    await tachyon.say_and_wait([
      '방금 전의 대화는 그저 씨앗을 심은 것뿐이라네. 곧 레이스에 이기게 되면 오늘의 대화는 ',
      tachyon.sex,
      '들의 마음속에서 뿌리를 내리고 싹을 틔우겠지.',
    ]);
    await tachyon.say_and_wait(
      '미래에 문제가 생겼을 때, 자연스럽게 『친절한 타키온 선배』를 찾아와 답을 구하게 될 것이야.',
    );
    await tachyon.say_and_wait([
      '그리고 자애로운 나는 당연히 무상으로 그 ',
      tachyon.sex,
      '들을 도와주겠지.',
    ]);
    await tachyon.say_and_wait(
      '하지만 답례로 실험 데이터를 기록하게 해주는 건 당연한 도리 아니겠나?',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 식은땀이 흘렀다. 이미지 관리를 위한 것이라고는 예상했지만, 설마 이렇게까지 먼 미래를 계산하고 있을 줄은 몰랐다.',
    ]);
    if (love >= 50) {
      await tachyon.say_and_wait('이런이런, 설마 누가 질투라도 하는 건가?');
      era.println();
      await era.printAndWait([
        '무언가 오해한 듯, ',
        tachyon.get_colored_name(),
        '이 갑자기 ',
        me.get_colored_name(),
        '의 몸에 밀착해 왔다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 등 뒤에서 ',
        me.get_colored_name(),
        '의 몸을 껴안더니, 가느다란 손길로 ',
        me.get_colored_name(),
        '의 몸을 무질서하게 쓰다듬다가 아래쪽 부근에서 멈췄다.',
      ]);
      if (tachyon.sex_code - 1 && me.sex_code === 1) {
        await era.printAndWait([
          tachyon.sex,
          '는 바지 위로 서서히 솟아오른 형상을 덧그렸다. ',
          me.get_colored_name(),
          '의 신체 부위가 각성함에 따라, ',
          tachyon.sex,
          '의 동작도 가볍게 그리는 것에서 움켜쥐고 흔드는 것으로 변해갔다.',
        ]);
        era.println();
        await tachyon.say_and_wait('안심하게나. 여자보다는 역시 가득 채워지는 감각이 더 좋으니까.');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 ',
          me.get_colored_name(),
          '의 귀에 대고 난초 같은 어조로 속삭였다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '하지만…… 자네가 여자가 된다면, 그것도 받아들일 수 있을지도 모르겠군?',
        );
        era.println();
      }
      await era.printAndWait([
        tachyon.sex,
        '는 킥킥거리며 웃더니 ',
        me.get_colored_name(),
        '을(를) 놓아주고 자기 마음대로 경기장을 향해 걸어갔다.',
      ]);
    }
    era.printButton('「……아무리 그래도, 이기지 못하면 네 계획도 수포로 돌아가는 거 아냐?」', 1);
    await era.input();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 돌아보지 않고 빛이 쏟아지는 곳을 향해 직진했다.',
    ]);
    await era.printAndWait([
      '어두운 지하 통로에서 갑자기 밖을 바라본 탓에, ',
      me.get_colored_name(),
      '은(는) 눈이 부실 정도의 광채를 느꼈다.',
    ]);
    await era.printAndWait([
      '눈물이 고인 시야 속에서 경기장으로 나아가는 ',
      tachyon.sex,
      '는 마치 빛 속으로 녹아드는 것만 같았다.',
    ]);
    era.println();
    await tachyon.say_and_wait('자네는 여기서 얌전히 나의 승전보를 기다리기만 하면 된다네.');
  };

  handlers[race_enum.hope_sta] = async (tachyon, me, callname) => {
    await print_event_name('과제 연구 추진', tachyon);
    await era.printAndWait('마침내 이날이 왔다.');
    await era.printAndWait([
      race_infos[race_enum.hope_sta].get_colored_name(),
      '는 갓 데뷔한 ',
      tachyon.get_uma_sex_title(),
      '들에게 있어 하반기 가장 중요한 레이스라고 할 수 있었다.',
    ]);
    await era.printAndWait('클래식 3관 노선을 걷는 이들에게는 더욱 그러했다.');
    await era.printAndWait([
      '주니어급 유일의 중거리 G1 레이스로서, 이것은 수많은 재능 있는 ',
      tachyon.get_uma_sex_title(),
      '들이 꿈의 여정을 시작하는 첫걸음이다.',
    ]);
    era.println();
    await era.printAndWait([
      '하지만 이토록 중요한 날에, ',
      me.get_colored_name(),
      '의 담당 ',
      tachyon.get_uma_sex_title(),
      '인 ',
      tachyon.get_colored_name(),
      '은……',
    ]);
    era.println();
    await me.say_and_wait('어라?');
    era.println();
    await era.printAndWait([
      '이곳저곳 뛰어다닐 거라 생각했던 ',
      tachyon.get_colored_name(),
      '이 오늘은 웬일로 얌전히 대기실에 머물고 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['이런, ', callname, ', 자네 왔나.']);
    era.println();
    await era.printAndWait([
      '대기실에서 다리에 모종의 스프레이를 뿌리고 있던 ',
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '를 한 번 슥 쳐다보고는 다시 손에 든 스프레이에 집중했다.',
    ]);

    era.printButton('「그게 네가 말한 약이야?」', 1);
    await era.input();
    await tachyon.say_and_wait('그렇다네. 이번 레이스에서 제 역할을 해주길 바랄 뿐이야……');
    await tachyon.say_and_wait(
      '이제 와서 자네에게 숨길 것도 없지. 이 약은 다리 근육을 이완해 주는 약이라네……',
    );
    await tachyon.say_and_wait(
      '말하자면 냉각제 같은 것이라고나 할까. 레이스 후에 부상을 입지 않도록 미리 사용하는 것이지. 이번 실험이 성공한다면……',
    );
    era.println();
    await era.printAndWait('그렇구나.');
    await era.printAndWait([
      '그 말을 듣고 ',
      me.get_colored_name(),
      '은(는) 안도의 한숨을 내쉬었다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '을 믿고는 있었지만, 마음 한구석에는 어쩔 수 없는 불안함이 남아 있었다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '본인에 대한 의심은 아니었지만, ',
      tachyon.get_colored_name(),
      '의 약이 매번 정확하게 효과를 본 것은 아니었으니까…… 그렇지 않았다면 자신도 지금까지 전신에서 빛이 나고 있지는 않았을 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['좋아, 준비 만전이다. ', callname, ', 출발하지.']);
    era.println();
    await era.printAndWait('고양된 목소리는 경기장의 분위기 때문일까?');
    await era.printAndWait('초롱초롱한 눈빛은 강적에 대한 기대 때문일까?');
    await era.printAndWait('그것도 아니면……');
    era.println();
    await tachyon.say_and_wait('오늘의 상대가 약효를 끝까지 끌어내 주었으면 좋겠군.');
    era.println();
    await era.printAndWait('역시, 실험 때문이었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 여전히 마이페이스인 ',
      tachyon.sex,
      '가 경기장으로 향하는 뒷모습을 배웅했다.',
    ]);
  };

  handlers[race_enum.hoch_sho] = async (tachyon, me, callname) => {
    await print_event_name('실험 대조군', tachyon);
    await tachyon.say_and_wait(
      '어느 정도 각오는 했지만…… 역시 특별히 언급할 만한 실험 대조군이 없군.',
    );
    era.println();
    await era.printAndWait(['하지만 이 레이스는 사츠키상의 전초전이다.']);
    await era.printAndWait([
      '사츠키상을 목표로 한다면 강하든 약하든 이 레이스의 결과는 놓칠 수 없다.',
    ]);
    era.println();
    const t_call_c = sys_get_colored_callname(32, 25);
    if (sys_reg_race(25).curr.race === race_enum.hoch_sho) {
      await tachyon.say_and_wait(['그러고 보니 오늘 ', t_call_c, '도 참전하는군.']);
      await tachyon.say_and_wait([
        t_call_c,
        '…… 만족스러운 달리기를 보여주었으면 좋겠군. 어쨌든……',
      ]);
    } else {
      await tachyon.say_and_wait([
        '만약 ',
        t_call_c,
        '이 참가했더라면…… 분명 더 실험 가치가 있었을 텐데 말이야.',
      ]);
    }
    await tachyon.say_and_wait([
      '그건 그렇고, ',
      callname,
      ', 자네는 ',
      t_call_c,
      '을 어떻게 생각하나?',
    ]);
    era.println();
    await era.printAndWait('에?');
    await era.printAndWait([
      '뜬금없는 질문에 ',
      me.get_colored_name(),
      '은(는) 생각에 잠겼다.',
    ]);
    await era.printAndWait('회색 뇌세포가 쉼 없이 돌아가기 시작했다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '이 이런 말을 하는 의미는 대체……',
    ]);
    era.println();
    await era.printAndWait([
      '경계하는 기색이 역력한 ',
      me.get_colored_name(),
      '의 모습을 보고 ',
      tachyon.get_colored_name(),
      '은 웃음을 터뜨렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '그렇게 긴장하지 말게나. 그냥 물어본 것뿐이야. 그리고 개인적으로는 자네가 ',
      tachyon.sex,
      '와 사이좋게 지냈으면 좋겠군…… 만일을 위해서 말이지.',
    ]);
    era.printButton('「듣기에 굉장히 불안한데……」', 1);
    era.printButton('「나는 영원히 타키온의 트레이너일 거야!」', 2);
    await era.input();
    await tachyon.say_and_wait('대체 무슨 생각을 하는 건가…… 참 나, 됐네. 나갈 시간이야.');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 호프풀 스테이크스 때 보았던 스프레이를 다리에 뿌리고 나갈 준비를 했다.',
    ]);
  };

  handlers[race_enum.sats_sho] = async (tachyon, me, callname) => {
    await print_event_name('단일 실험과 결과 분석', tachyon);
    await era.printAndWait('오늘은 클래식 레이스 제1차전, 사츠키상이다.');
    await era.printAndWait(
      '관중들은 흥분하며 레이스가 시작되기를 기다리고 있었고, 그 열기에 힘입어 참가자들 또한 레이스 전부터 흥분하고 있었다.',
    );
    await era.printAndWait([
      '그것은 ',
      tachyon.get_colored_name(),
      '또한 마찬가지였다.',
    ]);
    await era.printAndWait([
      '다만…… ',
      tachyon.sex,
      '가 흥분한 이유는 조금 남달랐다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      callname,
      '! 보게나, 역시…… G1 경기장이야말로 데이터 수집 가치가 있군!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 흥분해서 이곳저곳 뛰어다녔고, 심지어 다른 참가자의 대기실에 잠입해 개별 데이터를 수집하려 들었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 필사적으로 가로막은 덕분에 겨우 ',
      tachyon.sex,
      '의 집념을 꺾을 수 있었다.',
    ]);
    await era.printAndWait([
      '레이스 전부터 들떠 있는 ',
      tachyon.get_colored_name(),
      '과 대조적으로, ',
      me.get_colored_name(),
      '은(는) 원인 모를 불안감을 느꼈다.',
    ]);
    era.println();
    await era.printAndWait(['지난 야요이상 때는 적어도 사츠키상 전까지는 문제없다고 했다.']);
    await era.printAndWait(['하지만…… 사츠키상 이후로는 장담할 수 없다?']);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 몸에…… 무슨 문제라도 있는 걸까?',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '? 왜 그러나? 평소의 자네답지 않게 침묵이 길군.',
    ]);
    await era.printAndWait([
      '오히려 ',
      tachyon.get_colored_name(),
      '에게 걱정을 사고 말았다. 이래서는 안 된다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 황급히 정신을 차리고 평소의 상태로 돌아왔다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '좋네. 오늘…… 자네에게 보여주지. 진심을 다한 모습… 진짜 ',
      tachyon.get_uma_sex_title(),
      '의 한계를.',
    ]);
    era.println();
    await era.printAndWait('한계……?');
    await era.printAndWait('아니, 문제없을 거야. 분명히.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 의혹과 불안을 떨쳐내고 ',
      tachyon.get_colored_name(),
      '이 경기장에 들어서는 모습을 배웅했다.',
    ]);
  };

  handlers[race_enum.toky_yus] = async (tachyon, me, callname) => {
    await print_event_name('실험 결과 미지지', tachyon);
    await tachyon.say_and_wait([
      '이런이런, 과연 일본 더비로군…… ',
      sys_get_colored_callname(32, 94),
      '도 출주하겠지. 정말 기대되는군, ',
      tachyon.sex,
      '의 가능성이란……',
    ]);
    era.println();
    await era.printAndWait([
      '일본 더비는 가장 운이 좋은 ',
      tachyon.get_uma_sex_title(),
      '가 승리하는 레이스라고 한다.',
    ]);
    await era.printAndWait([
      '가장 빠른 ',
      tachyon.get_uma_sex_title(),
      '가 사츠키를 이기고, 가장 운이 좋은 ',
      tachyon.get_uma_sex_title(),
      '가 더비를 이기며, 가장 강한 ',
      tachyon.get_uma_sex_title(),
      '가 국화상을 이긴다.',
    ]);
    await era.printAndWait([
      '빠름이나 강함처럼 이미 확정된 것보다…… 운이라는 허무맹랑한 요소 때문에 ',
      me.get_colored_name(),
      '은(는) 레이스 전부터 ',
      tachyon.sex,
      '걱정에 휩싸였다.',
    ]);
    era.printButton('「정말 괜찮을까?」', 1);
    era.printButton('「역시 신사에서 받아온 대길 부적을……?」', 2);
    await era.input();
    await era.printAndWait([
      '오늘 이른 아침, ',
      tachyon.get_colored_name(),
      '을 위해 수백 개의 계단을 올라 신사에서 구해온 부적이 있었다.',
    ]);
    await era.printAndWait([
      '어째서인지 ',
      me.get_colored_name(),
      '의 행동을 전해 들은 ',
      tachyon.get_colored_name(),
      '은 묘한 표정을 지었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……아침 일찍부터 이런 걸 뽑으러 가다니…… 자네가 이렇게 미신을 믿는 사람인 줄은 몰랐군, ',
      callname,
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 말에 ',
      me.get_colored_name(),
      '은(는) 고개를 저었다.',
    ]);
    era.printButton(
      '「신령님께 빌든 뭘 하든, 타키온이 더 빨리 달릴 수만 있다면 뭐든지 할 수 있어!」',
      1,
    );
    await era.input();
    await tachyon.say_and_wait(
      '……후후, 이런 미신 같은 건 자네나 잘 간직하게나. 하지만 그 마음…… 잘 받았네. 오늘의 실험은 분명 좋은 결과가 나오겠군.',
    );
  };

  handlers[race_enum.kiku_sho] = async (tachyon, me, callname, _, relation) => {
    if (relation <= 225) {
      await print_event_name('다른 가능성', tachyon);
      await era.printAndWait([
        '그날 밤, ',
        me.get_colored_name(),
        '은(는) 꿈을 꾸었다.',
      ]);
      await era.printAndWait([
        '초광속 입자라 불리던 ',
        tachyon.sex,
        '가 경기장에서 날개가 꺾이는 꿈이었다.',
      ]);
      await era.printAndWait([
        '그 유리 같은 다리가 부서지고, 흩어진 유리 파편들이 ',
        me.get_colored_name(),
        '의 두 눈을 찔렀다.',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 꿈에서 깨어나 한참 동안 평정심을 되찾지 못했다.',
      ]);
      await era.printAndWait([
        '꿈이 너무나도 생생했던 탓에 ',
        me.get_colored_name(),
        '은(는) 가슴이 철렁 내려앉았다.',
      ]);
      await era.printAndWait([
        '남은 밤 동안 ',
        me.get_colored_name(),
        '은(는) 동이 틀 때까지 뜬눈으로 밤을 지새웠다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '날이 겨우 밝아오자마자 ',
        me.get_colored_name(),
        '은(는) 서둘러 트레이너 숙소를 나섰다.',
      ]);
      await era.printAndWait([
        '레이스 전 이미 수없이 ',
        tachyon.sex,
        '의 신체 상태를 확인했음에도 불구하고 말이다.',
      ]);
      await era.printAndWait(
        '아무리 생각해도 꿈처럼 과장되게 부서질 리가 없는데도. 여전히 걱정되고, 두려웠다.',
      );
      await era.printAndWait([
        '직접 ',
        tachyon.sex,
        '를 봐야만 꿈속의 일이 현실이 아니라는 것을 확신할 수 있을 것 같았다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['이런, ', callname, '? 오늘은 일찍 왔군.']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 실험실로 달려갔을 때 본 것은, 이른 아침부터 유유자적하게 홍차를 마시고 있는 ',
        tachyon.get_colored_name(),
        '이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '뭐, 오늘은 결국 삼관의 마지막 레이스니까…… 긴장하는 것도 무리는 아니겠지.',
      );
      await era.printAndWait([
        '국화상. 가장 강한 ',
        tachyon.get_uma_sex_title(),
        '만이 이길 수 있는 레이스.',
      ]);
      await era.printAndWait([
        '갑자기 ',
        me.get_colored_name(),
        '은(는) 할 말을 잃었다.',
      ]);
      await era.printAndWait('자신이 내린 선택이 정말 옳은 것이었을까?');
      await era.printAndWait(['만약 ', tachyon.sex, '가 정말 꿈처럼 부서져 버린다면.']);
      await era.printAndWait('자신은 정말 의연하게 마주할 자신이 있는가?');
      era.println();
      await tachyon.say_and_wait([callname, '? 무슨 일인가?']);
      era.println();
      await era.printAndWait('그토록 충동적으로 실험실에 달려왔건만.');
      await era.printAndWait([
        tachyon.sex,
        '를 마주한 순간, 아무런 말도 나오지 않았다.',
      ]);
      era.printButton('「……아무것도 아냐. 국화상, 반드시 이기자.」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그저 자기 위안조차 되지 않는 말을 내뱉을 수밖에 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……음, 반드시 이길 것이야.');
      era.println();
      await era.printAndWait('침묵.');
      await era.printAndWait('오늘의 국화상, 부디 평안하기를.');
      await era.printAndWait([me.get_colored_name(), '은(는) 신에게, 부처에게, 빛에게 기도했다.']);
    } else {
      await print_event_name('이길 수 있을까?', tachyon);
      await era.printAndWait([
        '국화상. 가장 강한 ',
        tachyon.get_uma_sex_title(),
        '만이 이길 수 있는 레이스.',
      ]);
      await era.printAndWait('최강. 그 단어는 모든 방면을 의미했다.');
      await era.printAndWait('스피드, 스태미나, 파워, 근성, 지능.');
      await era.printAndWait(
        '트레이너들이 가장 중요하게 여기는 다섯 가지 능력이 모두 균형 있게 최강에 도달해야만 이길 수 있는 레이스다.',
      );
      await era.printAndWait([
        '하지만…… ',
        tachyon.get_colored_name(),
        '이라면 문제없다.',
      ]);
      era.println();
      await era.printAndWait('타고난 강자.');
      await era.printAndWait([
        '따로 단련하지 않아도 ',
        tachyon.sex,
        '라면 반드시 그 정도 수준에 도달했으리라.',
      ]);
      await era.printAndWait([
        '그것이 바로 ',
        tachyon.get_colored_name(),
        '이며, 절대적인 강함이다.',
      ]);
      await era.printAndWait([
        '……아니, 오히려 자신이 정말 ',
        tachyon.sex,
        '에게 도움이 되고 있는 걸까?',
      ]);
      if (attr_names.findIndex((e) => era.get(`base:32:${e}`) < 1200) !== -1) {
        await era.printAndWait([
          '애초에 지금의 ',
          tachyon.sex,
          '는 예전 ',
          tachyon.sex,
          '의 한계에 비하면 아직 한참 멀지 않았나?',
        ]);
      } else {
        await era.printAndWait([
          '애초에 지금의 ',
          tachyon.sex,
          '은 그저 예전에 당연히 가졌어야 할 수준을 회복했을 뿐 아닌가?',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([callname, '? 레이스 전부터 또 멍하니 뭘 하고 있나?']);
      era.println();
      await era.printAndWait([
        '자기혐오에 빠져 있던 ',
        me.get_colored_name(),
        '를 깨운 것은 편자를 박고 있던 ',
        tachyon.get_colored_name(),
        '이었다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        me.get_colored_name(),
        '의 말을 듣고 예상대로 콧방귀를 뀌었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '무의미하군. 나의 두 다리는 현재 나의 연구와 자네의 훈련 위에 세워져 있다네.',
      );
      era.println();
      await tachyon.say_and_wait(
        '자네의 노력이 없었다면 지금의 나는 달리는 것조차 불가능했을지도 모르지. 자네는 상황이 그렇게 되길 바라는 건가?',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그런 뜻이 아니었다며 황급히 사과했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '늦었네. 내일부터 약의 용량을 두 배로 늘리지. 자네가 그 노력의 무게를 체감하지 못하겠다면, 몸으로 더 느끼게 해주는 수밖에.',
      );
      era.println();
      await era.printAndWait(
        '아니, 이미 하루 세 번 밥 먹듯이 먹고 있는데 여기서 더 늘릴 수가 있는 거야?',
      );
      await era.printAndWait([me.get_colored_name(), '은(는) 마음속으로 딴지를 걸었다.']);
      era.println();
      await era.printAndWait([
        me.get_couple_title(),
        '이 아무런 압박감 없이 대화를 나누는 사이 레이스 시간도 가까워졌다.',
      ]);
      await era.printAndWait([me.get_couple_title(), '은 나란히 경기장을 향해 걸어갔다.']);
      era.printButton('「오늘 레이스, 이길 수 있지?」', 1);
      await era.input();
      await tachyon.say_and_wait('글쎄…… 과연 어떨까나～～');
      await tachyon.say_and_wait('아니, 자네가 그렇게 진지하게 물어보면 나도 참 대답하기 곤란하군……');
      if (sys_reg_race(25).curr.race === race_enum.kiku_sho) {
        const t_call_c = sys_get_colored_callname(32, 25);
        await tachyon.say_and_wait([
          '결국 ',
          t_call_c,
          '과 다른 ',
          tachyon.get_uma_sex_title(),
          '들은 완전히 차원이 다르니까 말이지.',
        ]);
        await tachyon.say_and_wait([
          '어쨌든 ',
          tachyon.sex,
          '는 내가 선택한, 한계 너머의 세계를 함께 밟을 수 있는 사람이니까……',
        ]);
        await tachyon.say_and_wait([
          '게다가 이 거리에서의 ',
          t_call_c,
          '이라면…… 어쩌면 역사상 최강이라 불러도 과언이 아닐 걸세.',
        ]);
      }
      era.printButton('「그럼, 질 것 같아?」', 1);
      await era.input();
      await tachyon.say_and_wait('이길 거라네.');
      era.println();
      await tachyon.say_and_wait('『우리』는 반드시 이길 것이야.');
      era.println();
      await era.printAndWait('더 이상 배웅이 아니었다.');
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '은 함께 경기장으로 향했다.',
      ]);
    }
  };
};