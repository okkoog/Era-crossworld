const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const Edu17UntilRaceStart = require('#/event/edu/edu-events-17/race-start');
const { add_event } = require('#/event/queue');
const { handle_debuff, normal_end, transform } = require('#/event/snippets/17');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu17UntilRaceStart {
  async week_start(_, me, callname, hook, extra_flag, event_object) {
    const event_marks = new LunaEduMarks();
    let ret = event_marks.emperor * 100,
      allow_transform = true;
    const { luna, emperor } = ret
        ? {
            luna: 9017,
            emperor: 17,
          }
        : { luna: 17, emperor: 9017 },
      luna_talk = get_chara_talk(luna),
      emperor_talk = get_chara_talk(emperor),
      edu_weeks = era.get('cflag:17:육성턴수합산');
    if (edu_weeks >= 144) {
      if (edu_weeks === 144 && !event_marks.good_end) {
        // 아리마를 뛰지 않았거나 사후 이벤트 미발생 시 NE(노멀 엔드) 계산
        normal_end(
          event_marks,
          !era.get(`status:${luna}:신경쇠약`) && era.get(`love:${luna}`) >= 90,
        );
      } else if (edu_weeks === 143 + 9) {
        const chara = luna === 17 ? luna_talk : emperor_talk;
        await CustomizedEdu.common_palace(chara, me);
        await CustomizedEdu.common_palace_relation(chara, me);
        era.println();
        await chara.say_and_wait(
          event_marks.good_end === 2
            ? '당신은 어떤 하늘을 좋아해? 태양? 아니면 달? 결정하지 못해도 괜찮아. 당신이 어떤 하늘 아래 있든, 언젠가 우리는 반드시 만나게 될 테니까. 응, 이번에는 우리가 당신을 찾아갈게.'
            : ret
              ? '아직 앞으로 나아갈 수 있다면, 이곳에 머무를 이유는 없다! 짐의 천도는 결코 멈추지 않으니, 경축하라, 광대여! 너는 황제의 위업을 증언하게 될 것이다. 그 포상으로, 짐을 영원히 따르며 보필할 영광을 허락하마…… 대답은?'
              : '황제의 이야기는 끝났지만, 나의 사명은 아직 끝나지 않았어. 우리 함께 그곳으로 가자, 모든 우마무스메가 행복해질 수 있는 미래로. 음…… 그 미래에는 나도 포함되어 있겠지? 그러니까…… 나를 행복하게 해 줄 거지?',
        );
      }
      return;
    }

    if (event_marks.a_stones_throw === 1) {
      event_marks.a_stones_throw++;
      await print_event_name(
        [{ color: color_17[1], content: '한 걸음의 거리' }],
        luna_talk,
      );

      await era.printAndWait(`루나가 어떻게 황제로 변하게 되었나? ${me.name}은(는) 마침내 기억해냈다.`);
      await era.printAndWait(
        '그것은 무모한 책략이었고, 풋내기 애송이가 심볼리의 미래가 될 스타에게 건네버린 미혹이었다.',
      );
      era.printButton('「폭압을 증오한다면, 다른 이에게 그 역할을 맡기면 되잖아?」', 1);
      await era.input();
      await luna_talk.say_and_wait('다른 이……?');
      era.printButton(
        '「응, 다른 사람. 예를 들면—— 또 다른 인격이라든가, 그러니까, 또 다른 너 말이야.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 고민에 빠진 루나를 달래기 위해 농담조로 던진 말이었지만, 웬일인지 평소 장난기 많던 아이는 무척 진지하게 귀를 기울였다.`,
      );
      await era.printAndWait(
        `${luna_talk.sex}의 재촉하는 눈빛에 ${me.name}은(는) 머리를 쥐어짜며 허무맹랑한 서술을 이어갔다.`,
      );
      era.printButton('「루나와는 전혀 다른, 호전적이고 위압적인 존재를 만들어내는 거야.」', 1);
      era.printButton('「네 개성 위에 세워진, 상상 속의 이미지를 말이지.」', 2);
      await era.input();
      await era.printAndWait(`${me.name}은(는) 한숨을 내쉬며 돌발적인 영감을 내뱉었다.`);
      await me.say_and_wait('그래, 마치 【황제】처럼 말이야!');
      await era.printAndWait(
        `루나는 멍하니 ${me.name}을(를) 바라보았고, ${me.name}은(는) 방금 뇌리를 스친 생각에 들떠 있었다.`,
      );
      await era.printAndWait(
        `안 돼, 안 돼—— ${me.name}의 영혼이 떨려왔다. 이제야 똑똑히 기억났다.`,
      );
      await era.printAndWait(`황제는, ${me.name}이(가) 루나를 가두기 위해 직접 만든 감옥이었다.`);
      era.printButton('「루나가 할 수 없는 일은, 전부 황제가 완수하게 하는 거야.」', 1);
      await era.input();
      await era.printAndWait(
        `그럴 리가 없어. 그 아이의 운명, ${luna_talk.sex}가 짊어진 모든 것을 어떻게 그렇게 가볍게 단정 지을 수 있단 말인가?!`,
      );
      await me.say_and_wait('그러면 루나는 아주 쉽게 정점에 오를 수 있을 거야!');
      await era.printAndWait('닥쳐! 제발 입 다물어! 더는 말하지 마!!!');
      await era.printAndWait(
        `${me.name}은(는) 자신의 목을 조르고 싶을 정도의 괴로움 속에서 꿈에서 깨어났다.`,
      );
      await era.printAndWait(`${me.name}은(는) 식은땀에 흠뻑 젖어 있었다.`);
      await era.printAndWait(
        `그때의 ${me.name}은(는) 그저 오만한 얼간이에 불과했다. 도처에서 재능을 인정받지 못한다며 투덜댔지만, 실상은 학생의 허풍이나 다름없었다.`,
      );
      await era.printAndWait(
        `루나를 만났을 때, ${me.name}은(는) 머릿속에 숨겨두었던 빛 보지 못한 전략과 견문, 환상들…… 그리고 루나에게서 보았던 「거물이 될 자질」을 한꺼번에 쏟아내 버렸다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 그때의 자신이 얼마나 꼴불견이었는지 알지 못했지만, 루나는 그때 홀가분한 듯 미소를 지었었다.`,
      );
      await era.printAndWait('달밤 아래서 피어난, 그 미소.');
      await era.printAndWait(
        '그때 결심했었다. 루나를 위해 물불 가리지 않고, 자신의 목숨과 지혜를 모두 바치겠노라고.',
      );
      await era.printAndWait(
        '트레이너 본업으로 돌아온 것도, 필사적으로 공부한 것도, 심볼리 루돌프의 트레이너가 된 것도——',
      );
      await era.printAndWait('【황제】의 위명을 떨치기 위해서가 아니었다.');
      await era.printAndWait('모든 것은 루나의 미소를 위해서였어야만 했다!');
      await era.printAndWait('그런데 어째서, 왜 이렇게 되어버린 걸까……');
      await era.printAndWait(`${me.name}은(는) 머리를 감싸 쥐고 깊은 한숨을 내뱉었다.`);
      era.drawLine();
    } else if (edu_weeks === 48) {
      // 클래식급 1월 1주
      await print_event_name('신년의 포부', luna_talk);

      await era.printAndWait(
        '루나와 「공범」이 된 후, 어느덧 새로운 한 해가 밝았다.',
      );
      await era.printAndWait(
        `시도 때도 없이 찾아오는 전전긍긍함과 공포 탓에 ${me.name}은(는) 밤잠을 설치기 일쑤였다.`,
      );
      await era.printAndWait(
        `하지만 신년의 차가운 바람이 불어오자, ${me.name}은(는) 조금은 용기가 생기는 것 같았다.`,
      );
      await era.printAndWait(
        `무엇보다, 화려한 설빔을 차려입은 루나가 ${me.name}을(를) 향해 아장아장 달려오고 있었다.`,
      );
      await era.printAndWait(
        `${luna_talk.sex}는 마치 항구로 들어오는 배처럼 당신의 품속으로 뛰어들었다.`,
      );
      await luna_talk.say_and_wait(
        '이대로 더 계속된다면, 아무래도 황제에게 대신 부탁해야 할지도 모르겠네.',
      );
      await era.printAndWait(
        `${me.name}은(는) 어쩔 수 없다는 듯 ${luna_talk.sex}의 머리카락을 쓰다듬으며 고운 눈송이를 털어주었다.`,
      );
      await era.printAndWait(
        `조금이라도 빨리 ${me.name}과(와) 단둘이 있고 싶었는지, 루나는 오는 길에 우산조차 쓰지 않은 모양이었다.`,
      );
      await era.printAndWait(
        `${me.name}이(가) 루나의 이마에 입을 맞추자, 답례로 ${luna_talk.sex}는 ${me.name}의 어깨에 머리를 기대었다.`,
      );
      await era.printAndWait('창밖으로 흩날리는 눈꽃을 바라보며.');
      await luna_talk.say_and_wait(
        '올해는 드디어 클래식 3관에 도전하는 해네. 이걸 따내야만 나는……',
      );
      await era.printAndWait(
        `진지한 표정의 루나를 보며 ${me.name}은(는) 깊게 숨을 들이마시고 ${luna_talk.sex}의 손을 맞잡았다.`,
      );
      await era.printAndWait(
        `어떤 상황에서도 ${me.name}이(가) 루나의 곁에 있겠다는 무언의 약속이었다.`,
      );
      await era.printAndWait(`루나는 행복과 희망이 가득한 눈으로 ${me.name}을(를) 올려다보았다.`);
      era.printButton('「네가 현명하고 올곧게, 언제나 최고의 선택을 하길 바라.」', 1);
      era.printButton('「네가 무조건 건강하길, 몸과 마음 모두 소중히 하길 바라.」', 2);
      era.printButton('「황제가 온갖 무예를 익혀, 모든 기교를 발휘하길 바라.」', 3);
      ret = await era.input();
      await luna_talk.say_and_wait(
        '전부 행복하고 아름다운 소원들이네…… 그럼 나도 소원이 하나 있어.',
      );
      await era.printAndWait(
        `루나가 ${me.name}의 얼굴을 어루만졌다. ${me.name}은(는) ${luna_talk.sex}의 체온과 영혼 속의 갈망을 느낄 수 있었다.`,
      );
      await luna_talk.say_and_wait(
        '당신이 만수무강했으면 좋겠어. 그래야 영원히 내 곁에 있어 줄 수 있을 테니까.',
      );
      await era.printAndWait(`${me.name}은(는) 하하하 웃음을 터뜨렸다.`);
      await luna_talk.say_and_wait('그리고, 썰렁한 농담을 더 많이 들을 수 있기를.');
      await era.printAndWait(`${me.name}의 웃음소리가 뚝 끊겼다.`);
      era.println();
      const attr_change = new Array(5).fill(0);
      let pt_change = 0;
      if (ret === 1) {
        attr_change[attr_enum.intelligence] = 40;
      } else if (ret === 2) {
        attr_change[attr_enum.endurance] = 40;
      } else {
        pt_change = 20;
      }
      allow_transform = false;
      ret = 0;
      era.println();
      get_attr_and_print_in_event(17, attr_change, pt_change);
      era.drawLine();
      era.set('cflag:17:축제이벤트표시', 0);
    } else if (edu_weeks === 47 + 29) {
      if (
        era.get('cflag:0:위치') !== location_enum.beach ||
        era.get('cflag:17:위치') !== era.get('cflag:0:위치')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      // 클래식급 여름 합숙
      await print_event_name('여름 합숙', luna_talk);

      await era.printAndWait('분명 여름 합숙 기간인데도——');
      await era.printAndWait(
        `${me.name}은(는) 우마무스메들에게 겹겹이 둘러싸인 루나를 보며 식은땀을 흘렸다.`,
      );
      await era.printAndWait(
        '만인의 주목을 받는 학생회장으로서 학생들의 자율 훈련을 지도하고,',
      );
      await era.printAndWait('한계에 부딪힌 학생들을 돕고, 직접 대련까지 해준다.');
      await era.printAndWait(
        `그뿐만 아니라, ${luna_talk.sex} 본인의 훈련에도 누구보다 열심이었다.`,
      );
      await era.printAndWait(
        '밤이 되어서도 루나는 두 기숙사 사감들을 도와 업무를 분담하고 있었다.',
      );
      await luna_talk.say_and_wait('학원의 문제는 곧 나의 문제이니, 신경 쓰지 않아도 돼.');
      await era.printAndWait(
        `그 말을 마친 ${luna_talk.sex}는 솔선수범하듯 일찍 침실로 돌아가 휴식을 취했다.`,
      );
      await era.printAndWait(`하지만 그 순간, ${me.name}의 스마트폰이 타이밍 좋게 울렸다.`);
      await luna_talk.say_and_wait('왠지 당신의 시선이 한 번도 나에게서 떨어지지 않은 것 같은데.');
      await era.printAndWait(`루나가 보낸 메시지를 보며 ${me.name}은(는) 빙그레 미소 지었다.`);
      era.printButton('「현재 지역은 서비스 지역이 아니오니, 다음에 다시……」', 1);
      era.printButton('「네가 너무 내 눈길을 사로잡아서 그래.」', 2);
      await era.input();
      await luna_talk.say_and_wait(
        '말은 참 잘한다니까. 하지만 학원 환경의 정화를 위해, 나 이외의 아이들에게는 삼가주길 바라.',
      );
      await luna_talk.say_and_wait('맞다.');
      await luna_talk.say_and_wait('당신은 늘 그랬지!');
      await luna_talk.say_and_wait('심볼리 가문에서도 감언이설을 늘어놓다니, 용케 살아남았네.');
      await luna_talk.say_and_wait('그나저나, 난 이제 자야겠어. 내일 아침 일찍 훈련하러 가자.');
      await era.printAndWait(
        `${me.name}은(는) 깜빡이는 스마트폰 화면을 보다 어느새 잠이 들었다.`,
      );
      await era.printAndWait(
        `다음 날 아침, 루나가 훈련을 나가려는 채비를 하자 ${me.name}이(가) ${luna_talk.sex}를 불러세웠다.`,
      );
      await era.printAndWait(
        `여름 합숙이 시작되기 전부터 ${luna_talk.sex}는 이미 수많은 업무를 촘촘히 처리해왔고, 훈련 또한 거르지 않았다.`,
      );
      await era.printAndWait(`피로는 반드시 축적되기 마련이라고 ${me.name}은(는) 확신했다.`);
      era.printButton('「맛있는 걸 먹고 기운을 차리자.」', 1);
      era.printButton('「가끔은 훈련을 미뤄보는 건 어때?」', 2);
      ret = await era.input();
      await era.printAndWait('루나가 멍하니 멈춰 섰다.');
      await luna_talk.say_and_wait('나를 걱정해 주는 거야?');
      await era.printAndWait(
        `${me.name}은(는) 고개를 끄덕였다. 루나는 창가에 기대어 바다와 백사장을 바라보았다.`,
      );
      await era.printAndWait(
        `이른 아침의 햇살이 ${luna_talk.sex}의 얼굴을 가득 채워 표정을 읽을 수 없었다.`,
      );
      await luna_talk.say_and_wait('타인을 위해 노력한다는 건 언제나 아름다운 염원이야.');
      await luna_talk.say_and_wait('그렇긴 해도, 우리는 국화상을 위해 정진해야만 해.');
      await luna_talk.say_and_wait(
        '하지만 당신의 눈빛이 이미 말하고 있네—— 『더 훈련하는 건 몸에 해롭다』고, 그렇지?',
      );
      await luna_talk.say_and_wait(
        '하지만 더비 이후로 나는 더욱 확신하게 됐어. 우리의 이상을 실현하려면 평범한 노력으로는 부족하다는 걸.',
      );
      await luna_talk.say_and_wait(
        '당신, 나를 너무 과잉보호하는 거 아니야? 내가 고작 여기서 쓰러질 만큼 약해 보여?',
      );
      era.printButton('「……!」', 1);
      await era.input();
      await era.printAndWait(
        `당황한 ${me.name}을(를) 보며 루나는 무언가 깨달은 듯 ${me.name}의 팔을 붙잡았다.`,
      );
      await luna_talk.say_and_wait('이건 마치 당신한테 화풀이하는 꼴이 되어버렸네……');
      await era.printAndWait(
        `루나는 ${me.name}에게 사과하는 듯했지만, ${me.name}은(는) 알고 있었다. ${luna_talk.sex}가 타협하지 않았다는 것을.`,
      );
      await era.printAndWait(
        `${luna_talk.sex}의 의지는 확실하게 ${me.name}의 마음속으로 전해졌다.`,
      );
      await luna_talk.say_and_wait('오늘은 훈련하지 않을게. 안심해.');
      await era.printAndWait(`그러고는 루나는 ${me.name}의 곁을 떠났다.`);
      await era.printAndWait(
        `${me.name}은(는) 붙잡지 못했다. 가슴을 짓누르는 감정을 억누르며 한참 뒤에야 텅 빈 복도를 빠져나왔다.`,
      );
      await era.printAndWait(`그날 하루 종일, ${me.name}은(는) 루나를 볼 수 없었다.`);
      await era.printAndWait(`밤이 되어 ${me.name}은(는) 스마트폰을 들어 루나에게 메시지를 보냈다.`);
      era.printButton('「내가 언제나 네 곁에 있을게.」', 1);
      era.printButton('「루나, 나는 언제나 너를 사랑해.」', 2);
      await era.input();
      await era.printAndWait('메시지는 읽음으로 표시되었지만, 루나에게선 끝내 답장이 오지 않았다.');
      await era.printAndWait(
        `${me.name}은(는) 애타게 기다렸지만, 밤이 다 지나도록 루나의 회신은 없었다.`,
      );
      const attr_change = new Array(5).fill(0);
      if (ret === 1) {
        attr_change[attr_enum.strength] = 10;
      } else if (ret === 2) {
        attr_change[attr_enum.toughness] = 10;
      }
      allow_transform = false;
      ret = 0;
      era.println();
      get_attr_and_print_in_event(17, attr_change, 0);
      era.drawLine();
    } else if (edu_weeks === 95 + 1) {
      ret = 0;
      allow_transform = false;
    } else if (edu_weeks === 95 + 4) {
      // 시니어급 1월 4주
      await print_event_name('함께 기대어 나아가다', luna_talk);

      await era.printAndWait(
        `새해를 맞아 ${me.name}은(는) 찬 바람을 뚫고 루나와 만나기로 한 장소로 향하고 있었다.`,
      );
      await era.printAndWait(
        `그런데 가는 길에 루나가 정문에서 아직 앳된 티가 나는 학생과 대화하고 있는 것을 발견했다.`,
      );
      await era.printAndWait(
        '학생은 연신 고개를 숙여 인사하더니, 정중하게 감사를 표하고는 자리를 떠났다.',
      );
      era.printButton('「루나 선배님.」', 1);
      era.printButton('「루나 언니?」', 2);
      ret = await era.input();
      await era.printAndWait(
        `${me.name}의 짓궂은 농담에 루나의 얼굴이 살짝 붉어졌다. ${luna_talk.sex}는 나무라는 눈으로 ${me.name}을(를) 보았지만, 싫지는 않은 기색이었다.`,
      );
      await luna_talk.say_and_wait(
        '이제 막 복귀한 아이야. 곧 데뷔전을 치를 예정이거든.',
      );
      await luna_talk.say_and_wait(
        '1월 말이나 되어서야 학원에 돌아오다니 의아하게 생각하겠지? 보통은 가을이나 겨울에 데뷔하니까.',
      );
      await luna_talk.say_and_wait(
        '하지만 그전에 우리는 학원에 와서 또래들과 함께 배우고, 또 경쟁해.',
      );
      await luna_talk.say_and_wait(
        '그건 즐거운 일이지만, 그 과정에 상처나 피로가 없으리란 보장은 없지.',
      );
      await era.printAndWait(
        `인적이 드문 곳으로 들어서자 루나의 팔이 ${me.name}의 어깨에 닿았다. ${luna_talk.sex}는 무의식중에 당신에게 몸을 기대는 버릇이 있었다.`,
      );
      await luna_talk.say_and_wait(
        '가혹한 레이스와 훈련을 견디지 못하고 자신에게 실망했을 때, 방학을 맞아 따뜻한 집으로 돌아가면……',
      );
      await luna_talk.say_and_wait('어쩌면 포기하고 싶다는 마음이 싹틀지도 몰라.');
      await era.printAndWait(
        `${me.name}은(는) 루나의 이야기를 묵묵히 들었다. 솔직히 ${me.get_couple_title()}의 입장—— 심볼리 루돌프의 파트너로서 ${me.name}이(가) 해줄 수 있는 달콤한 위로 같은 건 없었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 알고 있었다. 많은 우마무스메들이 루나가 출주한다는 소식을 들으면 가장 먼저 기권부터 생각한다는 사실을.`,
      );
      era.printButton('「현실과 고난에 정면으로 맞서는 자가 진정한 용자야.」', 1);
      era.printButton('「어쩌면 우리가 그들에게 더 많은 도움을 줘야 할지도 몰라.」', 2);
      await era.input();
      await era.printAndWait(`루나가 미소 지으며 ${me.name}을(를) 바라보았다.`);
      await luna_talk.say_and_wait(
        '나도 도망치고 싶다고 생각한 적 있어. 하지만 내 도망칠 곳은 언제나 당신뿐이었던 것 같네.',
      );
      await era.printAndWait(
        `루나가 ${me.name}의 품에 기대어 손가락으로 ${me.name}의 가슴팍을 살짝 찔렀다.`,
      );
      await luna_talk.say_and_wait(
        `루나 ${ret === 1 ? '선배' : '언니'}도 이제 도망칠 곳이 없네.`,
      );
      await era.printAndWait(`참 나……`);
      await era.printAndWait(`${me.name}은(는) 얼굴을 붉히며 루나의 작은 복수를 기꺼이 받아들였다.`);
      const attr_change = new Array(5).fill(0);
      attr_change[attr_enum.toughness] = 5;
      era.println();
      get_attr_and_print_in_event(17, attr_change, 0);
      era.drawLine();
    } else if (edu_weeks === 95 + 14) {
      // 시니어급 4월 2주
      await print_event_name(
        [{ color: color_17[1], content: '황제의 추락' }],
        luna_talk,
      );
      await era.printAndWait('4월이 되면 만인이 고대하던 팬 대감사제가 시작된다.');
      await era.printAndWait(
        `${me.name}은(는) 내심 불만이 있었지만, 개막식 직후에는 모의 레이스가 열릴 예정이었다.`,
      );
      await era.printAndWait(
        `모의 레이스라고는 해도 그 치열함만큼은 공식 레이스와 다를 바 없었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 이런 시기일수록 루나의 컨디션을 조절하기가 무척 어렵다는 것을 잘 알고 있었다.`,
      );
      await era.printAndWait('만약 문제라도 생긴다면……');
      await era.printAndWait(
        `하지만 지난 여름 합숙 때의 일이 떠올라 ${me.name}은(는) 차마 루나에게 레이스를 포기하라고 말할 수 없었다.`,
      );
      await era.printAndWait(
        `모의 레이스 시작 전, 루나의 초췌한 기색을 본 ${me.name}은(는) 가슴이 철렁 내려앉았다.`,
      );
      await era.printAndWait(
        '단순한 훈련뿐만 아니라 학생회 업무와 행사 운영까지, 오늘을 위해 루나가 짊어진 짐은 너무나 무거웠다.',
      );
      await era.printAndWait('——좀 쉬어.');
      await era.printAndWait(
        `곁에 선 루나를 보며 그 말이 목구멍까지 차올랐지만, 결국은 한숨으로 변해 흩어졌다.`,
      );
      await luna_talk.say_and_wait('모든 사람이 이 레이스를 기대하고 있어.');
      await luna_talk.say_and_wait(
        '팬들의 환호와 기대, 축복이 이미 은퇴한 선배들의 마음까지 들끓게 하고 있어.',
      );
      await era.printAndWait(
        `${me.name}이(가) 루나를 돌아보자 ${luna_talk.sex}는 깊은 생각에 잠겨 있는 듯했다. 잠시 후 ${luna_talk.sex}이(가) ${me.name}을(를) 바라보았다.`,
      );
      await luna_talk.say_and_wait('당신도 나에게 무언가 기대하고 있어?');
      era.printButton('「물론, 언제나!」', 1);
      era.printButton('「그냥 좀 쉬었으면 좋겠어……」', 2);
      await era.input();
      await era.printAndWait(
        `${me.name}의 대답에 루나는 깊은 숨을 내쉰 뒤 ${me.name}의 어깨를 가볍게 두드렸다.`,
      );
      await luna_talk.say_and_wait('금방 다녀올게.');
      await era.printAndWait(
        `${me.name}은(는) 그 자리에 굳어버렸다. 루나가 【지금】 그 상태로 경기장에 나가려 한다는 사실을 뒤늦게 깨달았기 때문이었다.`,
      );
      await era.printAndWait(
        `——결국 루나는 고전을 면치 못했다. 연일 이어진 피로 탓에 제 실력을 내지 못한 것이리라.`,
      );
      await era.printAndWait(`관중석은 술렁거렸다.`);
      await era.printAndWait(`황제가 어쩌다 저렇게 망가진 거지? 그런 논란은 몇 주간이나 계속되었다.`);
      if (era.get('status:17:정신손상') < 4) {
        era.println();
        get_attr_and_print_in_event(17, [0, 0, 0, 0, 5], 0);
        await era.waitAnyKey();
      }
      event_marks.a_stones_throw++;
      event_marks.just_luna = 3 + 3 * (era.get('status:17:정신손상') >= 4);
      era.drawLine();
      era.set('cflag:17:축제이벤트표시', 0);
    } else if (edu_weeks === 95 + 16) {
      // 시니어급 4월 4주
      await print_event_name(
        [{ color: color_17[1], content: '건곤일척' }],
        luna_talk,
      );
      await era.printAndWait(
        `내일은 텐노상(봄)이 시작되는 날이다. 하지만 최근 ${me.name}은(는) 루나가 아무리 애써도 【황제】를 불러내지 못한다는 사실을 발견했다.`,
      );
      era.printButton('「계속 쌓여온 피로가 결국 한계에 달했어.」', 1);
      era.printButton('「더 이상 자신을 몰아세우지 마!」', 2);
      await era.input();
      await era.printAndWait(
        `학생회실에서 ${me.name}은(는) 이마를 짚고 있는 루나를 걱정스럽게 바라보았다.`,
      );
      await era.printAndWait(`${luna_talk.sex}는 머리카락이 헝클어진 채 짙은 다크서클이 내려앉아 있었다.`);
      era.printButton('「전부 내 책임이야……!」', 1);
      era.printButton('「미안해 루나, 내가……」', 2);
      await era.input();
      await luna_talk.say_and_wait('아니, 당신 잘못이 아니야.');
      await era.printAndWait(
        `루나가 고개를 들어 ${me.name}을(를) 보았다. 엉망이 된 모습으로 눈물이 ${luna_talk.sex}의 뺨을 타고 흘러내렸다.`,
      );
      await luna_talk.say_and_wait(
        '꿈을 위해 무모할 정도로 달려왔어. 내 독단적인 고집이 당신까지 끌어들인 거야……',
      );
      await luna_talk.say_and_wait(
        '게다가 당신은 몇 번이고 건강을 챙기라고 말해줬는데, 내가 모든 걸 망쳐버렸어.',
      );
      await luna_talk.say_and_wait(
        '【황제】를 잃어버린 지금의 나로서는 결코 모두를 만족시킬 수 없어.',
      );
      await luna_talk.say_and_wait('미안해, 나는 강한 우마무스메가 아니었어…… 미안해…… 미안해……');
      await era.printAndWait(`${me.name} 앞에서 루나는 아이처럼 통곡했다.`);
      await era.printAndWait(`${me.name}은(는) 급히 다가가 루나를 꽉 껴안았다.`);
      await era.printAndWait(
        `${me.name}은(는) ${luna_talk.sex}의 연약함과 억눌러온 서러움을 온몸으로 느꼈다.`,
      );
      await era.printAndWait(
        `동시에 ${me.name}의 가슴 속에는 루나에게 쏟아내고 싶은 안타까움과 애틋함이 휘몰아쳤다.`,
      );
      await era.printAndWait(
        '루나의 눈물에는 가슴이 찢어질 듯 아팠고, 루나의 자조에는 화가 치밀었다.',
      );
      await era.printAndWait(
        '고작 모의 레이스 한 번 제대로 뛰지 못했다고 해서, 루나가 모두의 경외를 받는 존재가 아니게 된단 말인가?',
      );
      await era.printAndWait('아니. 절대 아니다!!!');
      await era.printAndWait(`${me.name}은(는) 이를 악물었다.`);
      await era.printAndWait(
        '트레센을 위해, 모든 우마무스메를 위해 온 마음을 다해 헌신해 온 루나가 그런 소리를 들어서는 안 된다.',
      );
      await era.printAndWait(`루나는 마땅히 스스로에게 당당해야만 한다!`);
      await me.say_and_wait('아무래도 너는 사람들이 생각하는 【황제】의 강함을 오해하고 있는 것 같아.');
      await era.printAndWait(
        `루나가 울다 지쳐 진정되자 ${me.name}이(가) 위로를 건넸다. 확신에 찬 목소리에 루나의 마음이 가늘게 떨렸다.`,
      );
      await me.say_and_wait(
        '황제—— 심볼리 루돌프가 매력적인 이유는, 그 상징의 깃발 아래서 모두가 각자의 역할을 다할 수 있기 때문이야.',
      );
      await me.say_and_wait('모든 이가 노력하고 분투할 수 있도록 격려해주니까.');
      await me.say_and_wait(
        '지금까지 그 누구도 너보다 【황제】라는 칭호에 어울리는 사람은 없었어. 너는 우리를 이끌었고, 끊임없이 앞으로 나아가게 했어!',
      );
      await me.say_and_wait('꿈을 향해 나아가는 그 길 위에서, 너는 이미 다른 누군가의 꿈이 되었단 말이야.');
      await me.say_and_wait('그러니까 자신을 깎아내리지 마, 루나——');
      await era.printAndWait(
        `${me.name}은(는) 루나에게 무한한 힘을 나눠주려는 듯 세차게 껴안았다. 마치 생명에서 가장 소중한 사람을 자신의 영혼 속에 새겨넣으려는 것 같았다.`,
      );
      await era.printAndWait(
        `한참이 지나서야 루나는 항의하듯 가벼운 주먹으로 ${me.name}의 어깨를 톡톡 쳤다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 그제야 너무 세게 안았다는 걸 깨달았다. 서둘러 팔을 풀었지만 루나는 떨어지지 않고 여전히 ${me.name}의 가슴팍에 머리를 묻고 있었다.`,
      );
      await luna_talk.say_and_wait('나, 계속 앞으로 나아가도 괜찮을까?');
      era.printButton('「당연하지.」', 1);
      await era.input();
      await luna_talk.say_and_wait('당신도 계속 곁에 있어 줄 거야?');
      era.printButton('「지옥 끝까지라도.」', 1);
      era.printButton('「영원히.」', 2);
      await era.input();
      await era.printAndWait(`${me.name}은(는) 루나의 옅은 웃음소리를 들었다.`);
      await me.say_and_wait(
        '사실 나뿐만이 아니야. 학생회 식구들, 그리고 트레센의 학생들 모두가 너를 돕고 싶어 해. 비록 사소한 일일지라도 말이야.',
      );
      await me.say_and_wait('네 노력은 반드시 결실을 맺을 거야.');
      await luna_talk.say_and_wait('그렇다면 더더욱 여기서 멈출 수는 없겠네.');
      await luna_talk.say_and_wait('우리의 꿈은 오직 미래에만 존재하니까.');
      await era.printAndWait(
        `${me.name}은(는) 주머니에서 손수건을 꺼내 루나의 눈물을 부드럽게 닦아주었다. 루나의 눈에서 빛나고 있는 것은 이제 눈물이 아니었다.`,
      );
      await era.printAndWait(`그것은 건곤일척의 의지였다.`);
      ret = 1;
      allow_transform = false;
      era.drawLine();
    }

    if (event_marks.just_luna > 0) {
      event_marks.just_luna--;
      ret = 0;
      allow_transform = false;
    }

    if (allow_transform) {
      ret = event_marks.want_emperor;
    }

    if (+ret !== +event_marks.emperor) {
      await print_event_name('해와 달의 교체', ret > 0 ? emperor_talk : luna_talk);
      if (ret > 0) {
        const talk_list = [
          '음…… 우리의 공통된 염원을 위해서라면 참아내겠어.',
          '……나를 안아줘…… 혼자 마주하고 싶지 않아……',
        ];
        if (era.get('status:17:정신손상') > 0) {
          talk_list.push(`${me.actual_name}, 꼭 이렇게 해야만 해?`);
        }
        if (era.get(`status:${luna}:신경쇠약`) > 0) {
          talk_list.push('…………………………………………나는 누구지?');
        }
        await luna_talk.say_and_wait(get_random_entry(talk_list));
      } else {
        const talk_list = ['꿈에 들 시간인가……?', '대기만성이라 하거늘, 연마 또한 필요한 법이지.'];
        if (era.get(`status:${luna}:정신손상`) > 0) {
          talk_list.push('꿈에서 깰 시간이다.');
        }
        if (era.get(`status:${luna}:신경쇠약`) > 0) {
          talk_list.push('에덴을 향해 전진하라!');
        }
        await emperor_talk.say_and_wait(get_random_entry(talk_list));
      }
    }

    let punish = false;
    const race_his = RaceHistory.get(17).get();

    switch (edu_weeks) {
      case race_infos[race_enum.sats_sho].date + 48: // 5월 1주 사츠키상 미달성 페널티
        punish = !check_aim_race(race_his, race_enum.sats_sho, 1, 1);
        break;
      case race_infos[race_enum.toky_yus].date + 48: // 6월 1주 일본 더비 미달성 페널티
        punish = !check_aim_race(race_his, race_enum.toky_yus, 1, 1);
        break;
      case race_infos[race_enum.kiku_sho].date + 48: // 11월 1주 국화상 미달성 페널티
        punish = !check_aim_race(race_his, race_enum.kiku_sho, 1, 1);
        break;
      case race_infos[race_enum.arim_kin].date + 48: // 신년 1주 아리마 기념 미달성 페널티
        punish = !check_aim_race(race_his, race_enum.arim_kin, 1, 1);
        break;
      case race_infos[race_enum.tenn_spr].date + 96: // 5월 1주 텐노상(봄) 미달성 페널티
        punish = !check_aim_race(race_his, race_enum.tenn_spr, 2, 1);
        break;
      case race_infos[race_enum.japa_cup].date + 96: // 11월 4주 재팬 컵 미달성 페널티
        punish = !check_aim_race(race_his, race_enum.japa_cup, 2, 1);
    }

    if (punish) {
      sys_like_chara(emperor, 0, -50);
    }

    const total_punish =
      (ret > 0 && ++event_marks.break_down % 7 === 0) + punish;
    if (total_punish > 0) {
      await handle_debuff(event_marks, luna, total_punish);
    }

    if (+ret !== +event_marks.emperor) {
      transform(event_marks);
    }
  }
};