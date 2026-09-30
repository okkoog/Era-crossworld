/**
 * @file 심볼리 루돌프 - 育成
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const Edu17UntilWeekStart = require('#/event/edu/edu-events-17/week-start');
const { add_event } = require('#/event/queue');
const { handle_debuff } = require('#/event/snippets/17');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const color_17 = require('#/data/chara-colors').chara_colors[17];
const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');
const event_hooks = require('#/data/event/event-hooks');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu17UntilWeekStart {
  async out_church(chara, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== this.id) {
      add_event(event_hooks.out_church, event_object);
      return;
    }
    await print_event_name('새해 참배', chara);
    await era.printAndWait('새해이기에 더욱 바쁘다.');
    await era.printAndWait(`한겨울의 추위 속에서, ${me.name}이(가) 내뱉은 숨결이 금세 하얀 안개로 변했다.`);
    await era.printAndWait(
      `또다시 찾아온 새해, ${me.name}은(는) 루나의 뒤에 서서 고개를 숙이고, 선물을 받고, 답례를 하는 그녀의 업무를 보좌했다.`,
    );
    await era.printAndWait(
      '지인들에게 신년 인사를 건네고, 신년 결의 대회를 개최하며, 작년에 남겨진 업무들을 마무리한다……',
    );
    await era.printAndWait(
      `루나의 업무를 아주 조금 분담했을 뿐인데도, ${me.name}은(는) 정신이 아득해질 지경이었다.`,
    );
    await era.printAndWait(
      `그제야 ${me.name}은(는) 깨달았다. 1년 전, 루나가 왜 황제에게 대신 업무를 맡기고 싶어 했는지를.`,
    );
    await chara.say_and_wait('왠지 모르겠지만, 당신 지금 무척 실례되는 생각을 하는 것 같네.');
    await era.printAndWait(
      `단계적인 임무를 해결한 뒤, ${me.get_couple_title()}은 드디어 참배를 할 시간을 얻었다. 길을 걷던 중 루나가 왠지 모르게 불쑥 중얼거렸다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 서둘러 부정했다. 루나는 긍정도 부정도 하지 않은 채, 신사의 종과 북을 바라보며 두 눈을 감았다.`,
    );
    await era.printAndWait(
      `새로운 일 년, 루나의 소원은 무엇일까? ${me.name}은(는) 묻지 않았다. 원래 소원은 입 밖으로 내뱉으면 이루어지지 않는 법이니까.`,
    );
    await era.printAndWait(
      `의식을 마친 모양이다. 루나는 눈을 뜨고 고개를 치켜들며, ${me.name}의 모습을 따라 하듯 숨을 크게 내뱉었다.`,
    );
    await era.printAndWait(
      `한 줄기 하얀 김이 흩어지고, 그녀는 멍하니 허공을 바라보다가 이내 고개를 돌려 두 손을 모으고 ${me.name}에게 옅은 미소를 지어 보였다.`,
    );
    await chara.say_and_wait('어쩌면, 나 또한 실례되는 생각을 하고 있었을지도 모르겠네.');
    await era.printAndWait(
      `그 순간, ${me.name}의 얼굴이 확 붉어졌다. 그동안 겪어온 파란만장한 이야기들이 떠올라 감회가 새로웠다.`,
    );
    await era.printAndWait(`${me.name}이(가) 정중하게 루나에게 말했다:`);
    era.printButton('「잘 먹고 잘 자서 건강에 신경 쓰길 바라.」', 1);
    era.printButton('「네가 진정한 황제가 되기를 기원할게.」', 2);
    era.printButton('「너무 깊게 생각하지 말고 네가 좋아하는 걸 즐겼으면 좋겠어.」', 3);
    const ret = await era.input();
    await era.printAndWait(
      `${me.name}의 축복을 듣고서도 루나는 대답하지 않았다. 그저 살며시 당신의 어깨에 기대어 피곤한 듯 두 눈을 감을 뿐이었다.`,
    );
    await era.printAndWait('이 찰나의 휴식이, 지금 이 순간에는 무엇보다 소중하게 느껴졌다.');
    era.println();
    const attr_change = new Array(5).fill(0);
    let pt_change = 0;
    if (ret === 1) {
      attr_change[attr_enum.endurance] = 30;
    } else if (ret === 2) {
      attr_change.fill(5);
    } else {
      pt_change = 35;
    }
    if (era.get('status:17:신경쇠약') > 0) {
      attr_change[attr_enum.endurance] += 10;
    }
    if (get_attr_and_print_in_event(17, attr_change, pt_change)) {
      await era.waitAnyKey();
    }
    era.set('cflag:17:축제이벤트표시', 0);
    return true;
  }

  async train_success(chara, me, callname, hook, extra) {
    const edu_marks = new LunaEduMarks();
    const i_emperor = edu_marks.emperor;
    await era.printAndWait([chara.get_colored_name(), '의 트레이닝이 순조롭게 끝났다!']);
    // 클래식급 5월 1주
    if (era.get('cflag:17:육성턴수합산') === 47 + 17 && !edu_marks.dissonance) {
      edu_marks.dissonance++;
      era.println();
      await print_event_name(
        [{ color: color_17[1], content: '불협화음' }],
        chara,
      );
      const luna = i_emperor ? 9017 : 17;
      await era.printAndWait([
        '목표인 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        '이(가) 코앞으로 다가왔고, 훈련도 마지막 단계에 접어들었다.',
      ]);
      await era.printAndWait([
        '훈련장을 질주하는 ',
        chara.get_colored_name(),
        '의 모습을 보며, 구경하던 우마무스메들과 트레이너들이 연신 찬사와 탄성을 쏟아냈다.',
      ]);
      await era.printAndWait(
        `트랙을 돌고 또 돌며, ${me.name}은(는) ${chara.name}의 컨디션이 최상임을 확인했다. 그녀는 달리는 도중 미소까지 짓고 있었다.`,
      );
      await era.printAndWait(`그럼에도 불구하고, ${me.name}의 마음 한구석에는 커다란 불안감이 자리 잡고 있었다.`);
      await era.printAndWait([
        race_infos[race_enum.sats_sho].get_colored_name(),
        ' 이후 루나의 어깨에 지워진 짐은 산처럼 무거워졌고, 그 부담은 갈수록 걷잡을 수 없이 커져만 갔다.',
      ]);
      await era.printAndWait(`어쩌면 ${chara.name}은(는) 겉보기만큼 평온하지 않을지도 모른다.`);
      era.printButton(
        i_emperor
          ? '「폐하, 충분히 즐기신 듯하오니 부디 옥체를 보존하시옵소서.」'
          : '「오늘 훈련은 여기까지 하자.」',
        1,
      );
      await era.input();
      await era.printAndWait(`한 바퀴를 다 돌았을 때, ${me.name}이(가) 큰 소리로 외쳤다.`);
      await era.printAndWait(
        `${me.name}의 말을 들은 ${chara.name}는 발걸음을 멈추었다.`,
      );
      if (i_emperor) {
        await era.printAndWait(
          `잠시 후, 숨을 헐떡이는 황제가 ${me.name}에게 다가왔다. 어째서인지 그녀의 즐거웠던 표정은 분노로 바뀌어 있었다.`,
        );
        await chara.say_and_wait('광대여, 짐의 흥을 깬 대가로 합당한 이유를 대라.');
        era.printButton('「폐하, 너무 흥분하신 것 같습니다.」', 1);
        era.printButton('「사냥이 가까워질수록 더욱 냉정해지셔야……」', 2);
        await era.input();
        await era.printAndWait(
          `처음부터 끝까지, ${me.name}은(는) 황제가 훈련 강도를 버티지 못할 것이라고는 생각지 않았다.`,
        );
        await era.printAndWait(
          `${me.name}이(가) 그녀의 트레이너가 되든, 그녀를 황제가 되도록 부추기든.`,
        );
        await era.printAndWait(
          `오로지 루나가 자기 내면의 야수에게 굴복할까 봐 걱정할 뿐이었다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 자신을 비웃듯 바라보는 황제를 향해 고개를 숙였다. 그녀에게서 뿜어져 나오는 산악 같은 압박감에 ${me.name}은(는) 식은땀을 흘렸다.`,
        );
        await era.printAndWait(
          `사츠키상을 넘어 이제 더비로…… 지금 이 순간, 훈련 상태보다 ${me.name}이(가) 지키고 싶은 것은 루나라는 한 소녀의 몸이었다.`,
        );
        await era.printAndWait(
          `${me.name}을(를) 바라보던 황제는 차갑게 코웃음을 치며 경기장을 떠났다.`,
        );
        await era.printAndWait(
          `${me.name}은(는) 본능적으로 그녀에게 손을 뻗었지만, 그녀의 걸음이 너무 빨라 붙잡을 수 없었다.`,
        );
        era.printButton('「미안해.」', 1);
        era.printButton('「푹 쉬도록 해.」', 2);
        await era.input();
        await era.printAndWait(`${me.name}은(는) 한숨을 내쉬며 그녀의 뒤를 쫓아 뛰어갔다.`);
      } else {
        await era.printAndWait(
          `잠시 후, 숨을 헐떡이는 루나가 ${me.name}에게 다가왔다. 어째서인지 그녀의 활기찼던 표정은 어둡게 가라앉아 있었다.`,
        );
        await chara.say_and_wait(
          `${me.actual_name}, 내 컨디션은 아주 좋아. 일본 더비가 얼마 남지 않았으니 더 박차를 가해야 해!`,
        );
        era.printButton('「이해해. 하지만 이럴 때일수록 냉정해져야 해.」', 1);
        era.printButton('「네 상태가 걱정돼서 그래……」', 2);
        await era.input();
        await era.printAndWait(
          `처음부터 끝까지, ${me.name}은(는) 루나가 훈련 강도를 버티지 못할 것이라고는 생각지 않았다.`,
        );
        await era.printAndWait(
          `${me.name}이(가) 그녀의 트레이너가 되든, 그녀를 황제가 되도록 부추기든.`,
        );
        await era.printAndWait(
          `오로지 루나가 자기 내면의 야수에게 굴복할까 봐 걱정할 뿐이었다.`,
        );
        await era.printAndWait(
          `하지만 처음 만났을 때 속마음을 터놓은 이후로, 루나는 좀처럼 ${me.name}에게 속내를 드러내지 않았다.`,
        );
        await era.printAndWait(
          `사츠키상을 넘어 이제 더비로. 지금 이 순간, 훈련 성과보다 ${me.name}이(가) 알고 싶은 것은 루나의 진심이었다.`,
        );
        await era.printAndWait([
          me.get_colored_name(),
          '을(를) 바라보며 루나는 잠시 생각에 잠겼다. 그녀는 곧 ',
          me.get_colored_name(),
          '에게 미소를 지어 보였다.',
        ]);
        await chara.say_and_wait(
          '이 정도조차 해내지 못한다면, 우리의 이상은 결코 실현될 수 없어.',
        );
        await era.printAndWait(`${me.name}은(는) 속으로 입술을 깨물며 무어라 더 말하려 했다.`);
        await era.printAndWait(
          `루나는 발을 구르며 다시 트랙으로 향하려 했으나, ${me.name}의 걱정 어린 시선을 이기지 못하고 결국 멈춰 섰다.`,
        );
        era.printButton('「미안해.」', 1);
        era.printButton('「푹 쉬도록 해.」', 2);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 건네준 수건과 물을 받으며, 루나는 나지막이 대답했다.',
        ]);
      }
      await handle_debuff(edu_marks, luna);
      hook.override = true;
      extra.pt_change = 5;
      return extra;
    } else if (Math.random() < 0.2 * extra.stamina_ratio) {
      era.println();
      await print_event_name('추가 자율 트레이닝', chara);

      await era.printAndWait(`훈련이 끝난 후에도 ${chara.name}는 여전히 아쉬움이 남는 듯했다.`);
      await era.printAndWait(
        `그녀는 멀리 지평선을 바라보았다. 석양은 지고 있었고, 마지막 잔광이 대지를 적시고 있었다.`,
      );
      await era.printAndWait('금세 어두워지겠지만 아직 부족하다. 아직 한계에 도달하지 못했다——');
      await era.printAndWait(`${me.name}은(는) 그녀의 마음을 알아차렸다.`);

      era.printButton('「계속 달려보자! 그 감각을 놓치지 마.」', 1);
      era.printButton('「오늘은 여기까지 하자. 다음에 더 중요한 일이 기다리고 있어.」', 2);
      hook.arg = (await era.input()) === 1;
      if (hook.arg) {
        await chara.say_and_wait(
          i_emperor
            ? '——정벌의 끝인가? 재미있군.'
            : '응…… 왠지 점점 요령을 알 것 같은 기분이야.',
        );
      } else {
        await chara.say_and_wait(
          i_emperor ? '잠들라는…… 것인가?' : '과연 그렇네. 일깨워줘서 고마워.',
        );
      }
      era.println();
    }
  }

  async week_end(_chara, me, callname, hook, extra_flag, event_object) {
    const edu_marks = new LunaEduMarks(),
      luna = get_chara_talk(edu_marks.emperor ? 9017 : 17),
      event_arg = event_object?.arg;
    if (event_arg === 'wax_and_wane') {
      await print_event_name('음양의 감옥', luna);

      await luna.print_and_wait('어릴 적, 가족들은 내게 큰 기대를 걸지 않았어.');
      await luna.print_and_wait(
        '마음껏 뛰어노는 것도, 훈련에 빠지는 것도 허락됐지. 다들 내게 「어찌 되든 상관없다」는 식의 태도였어.',
      );
      await luna.print_and_wait('심볼리 가문은 그런 곳이야. 오직 실력만을 중요하게 여기지.');
      await luna.print_and_wait('그래서 강인한 언니들은 트랙 위를 질주했고,');
      await luna.print_and_wait('나는 잔디밭에 누워 온종일 잠을 자도 괜찮았어.');
      await luna.print_and_wait(
        '나 역시 편안하게 하루하루를 보내고 싶었지만, 나이가 들수록 내 몸 안의 요동치는 기운을 억누를 수가 없었어.',
      );
      await luna.print_and_wait('마치 내 피가 몸 안에서 타오르는 것 같았어.');
      await luna.print_and_wait(
        '그럴 때마다 내 마음속에는 폭압적이고 흉포한 감정이 솟구쳤지.',
      );
      await luna.print_and_wait(
        '찢어발기고 싶고, 짓뭉개버리고 싶고, 상대를 발아래 짓밟으며 비웃어주고 싶었어! 조롱하고 싶었다고!',
      );
      await luna.print_and_wait('——모든 이의 모든 것을 빼앗고, 이 세상을 잿더미로 만들고 싶었어!');
      await luna.print_and_wait(
        '체력을 완전히 소진하고 간신히 정신을 차렸을 때, 내게 남은 건 끝없는 허무함과 공포뿐이었지.',
      );
      await luna.print_and_wait(
        '불안해지기 시작했어…… 쓸데없는 생각을 하지 않으려 스스로 훈련에 참여하기 시작했어.',
      );
      await luna.print_and_wait(
        '한계까지 달릴 때만이 비로소 평온해질 수 있었으니까…… 그래야만 나 자신으로 남아있을 수 있었어.',
      );
      await luna.print_and_wait('「루나.」');
      await luna.print_and_wait(
        '어머니는 내게 예쁘고도 다정한 이름을 지어주셨어.',
      );
      await luna.print_and_wait('폭력만을 휘두르는 괴물이 되고 싶지 않았어……');
      await luna.print_and_wait(
        '하지만 혈통이 내게 부여한 그 포악함을 극복할 수 없었지. 과거 심볼리 가문의 모든 우마무스메들이 그랬던 것처럼.',
      );
      await luna.print_and_wait('그때 깨달았어. 왜 가족들이 나를 훈육하지 않았는지.');
      await luna.print_and_wait(
        '대대로 이어져 내려온 「심볼리」의 피가, 나를 정해진 길로 인도할 것이기 때문이었지.',
      );
      await luna.print_and_wait('승리. 그리고 승리.');
      await luna.print_and_wait(
        '승리할 수만 있다면, 설령 내가 더 이상 내가 아니게 된다 해도 허용되는 거야.',
      );
      await luna.print_and_wait('아니, 오히려 승리만 한다면 무엇이든 상관없다는 거지.');
      await luna.print_and_wait(
        '내게서 희대의 재능이 엿보이자, 심볼리 가문은 본격적으로 나를 육성하기 시작했어.',
      );
      await luna.print_and_wait('마음만 먹으면 모든 자원을 손에 넣을 수 있었고,');
      await luna.print_and_wait('마음만 먹으면 모든 총애를 독차지할 수 있었지.');
      await luna.print_and_wait('하지만 여전히 공허하고 두려웠어.');
      await luna.print_and_wait(
        '달리기가 잠시나마 머릿속을 비워줄지라도, 모든 상대를 제치고 결승선에서 뒤를 돌아볼 때면…… 숨을 헐떡이면서도 내 입꼬리가 멈추지 않고 올라가는 걸 발견하곤 했거든.',
      );
      await luna.print_and_wait('마치 내가 다른 사람이 된 것처럼 말이야.');
      await luna.print_and_wait('문득 생각했어. 루나가 진짜 나일까?');
      await luna.print_and_wait(
        '아니면 경기장에서 사방을 유린하는 저 괴물이 진짜 나인 걸까?',
      );
      await luna.print_and_wait(
        '누군가에게 매달려 울고 싶었지만, 내가 자라날수록 나를 따뜻하게 대해주던 사람들은 갑작스레 세상을 떠났어.',
      );
      await luna.print_and_wait(
        '어머니는 사냥꾼에게 놀란 여파로 앓다가 돌아가셨고, 언니는 레이스 전 준비 중에 허망하게 가버렸지.',
      );
      await luna.print_and_wait('어쩌면 나도……');
      await luna.print_and_wait(
        '차가운 달빛 아래에서, 나는 미친 듯이 어른들을 찾아갔어.',
      );
      await luna.say_and_wait('나는——');
      await luna.print_and_wait(
        '안정감을 원한다고, 더 이상 무섭지 않게 해달라고 말하고 싶었어. 하지만 인자한 조부모님과 부모님 앞에서 차마 그럴 수 없었지.',
      );
      await luna.print_and_wait('그분들의 눈에 서린 기대감을 보았으니까.');
      await luna.print_and_wait(
        '그래서 나는【사랑】을 달라고 빌었어. 수많은 형제자매가 내 곁에 있어 주길, 세상 천지의 흥미로운 사람들이 심볼리 가문으로 모여들기를 바랐지.',
      );
      await luna.print_and_wait('이곳이 북적거리기만 한다면——');
      await luna.print_and_wait('사람들에게 둘러싸여 있기만 한다면——');
      await luna.print_and_wait(
        '분명, 분명 기회가 있을 거라고. 분명 누군가는 내가 더 이상 공허함과 공포를 느끼지 않게 해줄 수 있을 거라고 믿었어.',
      );
      await luna.print_and_wait('그때가 되면…… 나…… 루나는…… 반드시——');
      await luna.say_and_wait(`${me.actual_name}?`);
      await luna.print_and_wait('루나는 꿈에서 깨어나, 자신이 홀로 침대에 누워 있음을 깨달았다.');
      await luna.print_and_wait(
        '왜 이런 꿈을 꾼 걸까? 루나는 머리를 짚었다. 창밖의 휘영청 밝은 달을 바라보자 현기증이 일었다.',
      );
      await luna.print_and_wait(
        '분명 격려를 받고 이상을 향해 나아가기로 결심했건만, 【황제】에게 의식을 빼앗기고 잔혹한 혈통에 몸을 맡길 생각을 하니……',
      );
      await luna.print_and_wait('루나는 눈물을 흘렸다. 아무리 애써도 결국 너무나 무서웠다.');
      await luna.print_and_wait(
        '참아내는 데 익숙해졌고, 견디다 보면 분명 상황이 나아질 거라 굳게 믿어왔는데.',
      );
      await luna.print_and_wait(
        `${me.actual_name}과(와) 재회한 이후로, 지금까지 의지해왔던 그 인내심이 아무런 소용이 없게 되어버렸다.`,
      );
      await luna.say_and_wait('보고 싶어……');
      await luna.say_and_wait('만나고 싶어……');
      await luna.print_and_wait(`루나는 한숨도 자지 못한 채 밤을 지새웠다.`);
    } else if (event_arg === 47 + 41) {
      await print_event_name(
        [{ color: color_17[1], content: '급전직하' }],
        luna,
      );
      await era.printAndWait(
        `차가운 달빛 아래, ${me.name}은(는) 초조하게 병실 밖 복도를 서성였다.`,
      );
      await era.printAndWait(`한참이 지난 후에야 간호사가 부르는 소리가 들렸다.`);
      await era.printAndWait(
        `다급히 병실로 뛰어 들어간 ${me.name}은(는) 침대에 누워 잠든 루나를 발견했다.`,
      );
      await era.printAndWait(
        `창백하지만 고른 숨소리를 내는 그녀의 모습에 ${me.name}은(는) 안도의 한숨을 내쉬었다.`,
      );
      await era.printAndWait('국화상 이후, 루나는 긴급히 심볼리 가문의 전용 병원으로 이송되었다.');
      await era.printAndWait('검사 결과, 의사가 내린 진단명은——과로였다.');
      await era.printAndWait(
        `몸은 쇠약해졌지만, 루나가 푹 쉬기만 한다면 여전히 재팬 컵에는 출주할 수 있을 것이라고 했다.`,
      );
      era.printButton('「재팬 컵인가——」', 1);
      await era.input();
      await era.printAndWait(
        `루나에게는 정적이 필요했기에, ${me.name}은(는) 상태를 확인한 후 살금살금 문밖으로 나왔다.`,
      );
      await era.printAndWait(`창밖의 밤풍경을 바라보며 ${me.name}은(는) 머리를 감싸 쥐었다.`);
      await era.printAndWait(
        '재팬 컵. 모든 일본 우마무스메들의 숙원…… 안방에서 열리는 가장 거대한 레이스임에도, 번번이 해외 강호들에게 승리를 빼앗겨 온 곳.',
      );
      await era.printAndWait(
        `루나와 ${me.name}의 꿈을 이루기 위해, 모든 우마무스메가 행복해질 수 있는 세상을 만들기 위해.`,
      );
      await era.printAndWait('재팬 컵은 루나가 반드시 넘어야만 하는 시련이었다.');
      await era.printAndWait(
        `${me.name}은(는) 뒤를 돌아 문을 바라보았다. 루나가 저 문 너머 침대에서 쉬고 있다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 한숨을 내쉬었다. 그녀의 창백한 얼굴을 떠올리자 굳건했던 결심이 흔들리기 시작했다.`,
      );
      await era.printAndWait(
        '우마무스메가 달리는 모습은 무엇보다 아름답지만, 그 안에는 진검승부가 오가는 전장 못지않은 위기가 도사리고 있다.',
      );
      await era.printAndWait(
        '한순간의 방심, 찰나의 실수만으로도 우마무스메는 영영 돌이킬 수 없는 구렁텅이에 빠질 수 있다.',
      );
      await era.printAndWait(
        `루나는 아직 젊다. 그녀에게 기회는 반드시 다시 올 것이다…… 굳이 이번이 아니어도 된다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 스스로를 설득하려 애썼다. 하지만 루나에게——아니, 루돌프 심볼에게 거는 전 일본의 기대는 그녀의 「전선 이탈」을 허락하지 않을 것임을 잘 알고 있었다.`,
      );
      await era.printAndWait('루나 본인 또한 결코 포기하고 싶어 하지 않을 것이다.');
      await era.printAndWait(
        `${me.name}은(는) 초조하게 머리를 헝클어뜨렸다. 고심에 고심을 거듭하던 중, 지독한 졸음이 쏟아졌다.`,
      );
      era.printButton('「내일 다시 루나와 이야기해보자……」', 1);
      await era.input();
      await era.printAndWait(`${me.name} 역시 지칠 대로 지쳐 있었다.`);
      await era.printAndWait(
        `그러나 다음 날, 눈을 떴을 때 ${me.name}은(는) 자신의 어깨에 이불이 덮여 있는 것을 발견했다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 옆의 문을 거칠게 열었다. 문은 살짝 열려 있었고, 병실 안에서 쉬고 있어야 할 루나는 흔적도 없이 사라져 있었다.`,
      );
      era.printButton('「설마?!」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 깨달았다. 루나가 행동으로써 자신의 결의를 증명해 보였다는 것을.`,
      );
      era.drawLine();
      await era.printAndWait(
        `${me.name}이(가) 학생회실 문을 열자, 그 안은 인산인해를 이루고 있었다. 서무들이 각종 서류를 들고 루나에게 최근 업무를 보고하고 있었다.`,
      );
      await era.printAndWait(`루나는 ${me.name}을(를) 바라보며 입술을 살짝 깨물었다.`);
      await luna.say_and_wait('트레이너, 무슨 일인가?');
      await era.printAndWait(
        `${me.name}은(는) 숨을 헐떡이며 모두가 자신을 빤히 바라보는 것을 느꼈다. 결국 그는 어색하게 웃어넘길 수밖에 없었다.`,
      );
      era.printButton('「두고 가신 물건이 있어서……」', 1);
      era.printButton('「좀 더 쉬어야 한다고……」', 2);
      await era.input();
      await era.printAndWait(
        `말을 채 끝내기도 전에, ${me.name}은(는) 자신을 응시하는 루나의 보랏빛 눈동자에 간절한 애원이 서려 있음을 발견했다.`,
      );
      await luna.say_and_wait('난 괜찮아.', true);
      await era.printAndWait(
        `${me.name}은(는) 그녀의 입모양을 읽었다. 그는 그녀의 의사를 거스릴 수 없었다. 어릴 때부터 지금까지 늘 그랬던 것처럼……`,
      );
      era.printButton('「아니, 별일 아니야.」', 1);
      era.printButton('「미안해……」', 2);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 넋이 나간 채 학생회실을 빠져나왔다. 학원에는 루나가 필요하다는 것을 그는 잘 알고 있었다.`,
      );
      await era.printAndWait('그리고 루나 또한, 지금 이 시점에 일본이 심볼리 루돌프를 잃어서는 안 된다는 것을 누구보다 잘 알고 있었다.');

      get_attr_and_print_in_event(
        17,
        undefined,
        0,
        JSON.parse(
          `{"체력":${-era.get('maxbase:17:체력') / 2},"기력":${
            -era.get('maxbase:17:기력') / 2
          }}`,
        ),
      );
    } else if (event_arg === 95 + 10) {
      // 시니어급 3월 2주
      await print_event_name(
        [{ color: color_17[1], content: '피땀 흘려' }],
        luna,
      );
      await era.printAndWait(
        '텐노상(봄)이 다가오고 있다. 최장거리 G1 레이스인 3200m는 우마무스메의 인내심을 시험하는 거대한 관문이다.',
      );
      await era.printAndWait(
        '과거에는 텐노상을 제패한 우마무스메가 곧 최강으로 인정받았으나, 시대가 변하며 여러 레이스에 대한 평가도 달라졌다.',
      );
      await era.printAndWait(
        '그러나 어떤 시대든, 텐노상(봄)이 현재 가장 가혹한 레이스라는 사실만은 변함이 없다.',
      );
      await era.printAndWait(
        '고학년이 된 루나의 학생회 업무는 줄어들기는커녕, 후배들을 지도하고 각종 인터뷰에 응하느라 더욱 늘어만 갔다.',
      );
      await era.printAndWait(
        `${me.name}이(가) 우려를 표해도, 루나는 항상 이것이 자신의 명성에 걸맞은 책임이라고 여겼다.`,
      );
      await era.printAndWait(
        `${me.name}의 생각을 눈치챈 듯, 바쁜 하루를 마친 루나가 그를 불러 세웠다.`,
      );
      await luna.say_and_wait('화가 난 거야?');
      era.printButton('「그저 네가 걱정될 뿐이야.」', 1);
      era.printButton('「내게 좀 더 의지해줬으면 좋겠어.」', 2);
      await era.input();
      await era.printAndWait(`${me.name}의 말을 들은 루나가 가볍게 한숨을 내쉬었다.`);
      await luna.say_and_wait('당신도 나를 좀 믿어줘.');
      await era.printAndWait(
        `루나는 ${me.name}을(를) 바라보며 손을 뻗어 그의 뺨을 어루만졌다.`,
      );
      await luna.say_and_wait(
        '내가 멈추면, 수많은 이들이 미궁 속에 빠져 방황하게 될 거야. 나는 계속해야만 해.',
      );
      await luna.say_and_wait('우리는 아직 꿈을 이루지 못했으니까.');
      await era.printAndWait(`${me.name}은(는) 루나의 손을 맞잡았다.`);
      await era.printAndWait(
        `원대한 이상을 이야기하고 있었지만, ${me.name}은(는) 루나의 미간에 서린 깊은 수심을 보았다.`,
      );
      await era.printAndWait(
        `그것은 그들이 재회했을 때와 같은, 숨이 막힐 듯한 표정이었다.`,
      );
      await era.printAndWait(`${me.name}은(는) 한숨을 내쉬며 고개를 끄덕였다.`);
      await era.printAndWait(
        `——진정 루나를 위해 내가 할 수 있는 일은 무엇일까? 이어지는 며칠 동안 ${me.name}은(는) 그 고민에 잠겼다.`,
      );
      era.println();
      const attr_change = new Array(5).fill(0);
      attr_change[attr_enum.intelligence] = 5;
      get_attr_and_print_in_event(17, attr_change, 0);
      await handle_debuff(edu_marks, luna.id);
    }
  }
};