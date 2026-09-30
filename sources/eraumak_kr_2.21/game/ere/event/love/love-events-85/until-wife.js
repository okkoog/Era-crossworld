const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love85AfterGirlFriend = require('#/event/love/love-events-85/after-girl-friend');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love85AfterGirlFriend {
  async 89(ruby, me, callname, stage, extra_flag, event_object) {
    if (ruby.sex_code !== 0 || me.sex_code === 0) {
      return await super[89](
        ruby,
        me,
        callname,
        stage,
        extra_flag,
        event_object,
      );
    }
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('천생연분', ruby);
    await era.printAndWait([
      '어느 날, ',
      ruby.get_colored_name(),
      '는 홀로 ',
      me.get_colored_name(),
      '의 트레이닝실에서 원망 섞인 한탄을 하고 있었다.',
    ]);
    await ruby.say_and_wait('결국, 난 말할 용기가 없는 걸까?');
    era.printButton('「나한테 하고 싶은 말이라도 있어?」', 1);
    await era.input();
    await ruby.say_and_wait('!');
    await ruby.say_and_wait([
      ruby.get_colored_name(),
      '는 마치 「아차」 하는 듯한 기색으로 시선을 돌렸다.',
    ]);
    await ruby.say_and_wait([
      '한동안 침묵이 흐른 후, ',
      ruby.get_colored_name(),
      '는 결심한 듯이 한숨을 내쉬었다.',
    ]);
    await ruby.say_and_wait('네, 맞아요.');
    era.printButton('그럼 들어볼까.', 1);
    await era.input();
    await ruby.say_and_wait('대단히 죄송합니다, 말씀드릴 수 없어요.');
    await era.printAndWait([ruby.get_colored_name(), '의 뺨이 붉게 물들었다.']);
    await era.printAndWait('그 모습이 너무나도 귀여워, 평범한 남성의 뇌 회로를 단선시켜 버릴 정도였다.');
    era.printButton(
      `「나는 ${m_call_r}의 전속 트레이너니까, 뭐든지 편하게 말해도 좋아.」`,
      1,
    );
    await era.input();
    await ruby.say_and_wait('아니요, 그러니까 더더욱 말씀드릴 수 없어요.');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('무슨 말을 하든, 전부 받아들여 주실 건가요?');
    era.printButton('「당연하지! 네가 무슨 말을 하든 다 받아들인다고 약속할게.」', 1);
    era.printButton(
      '「네가 행복해질 수만 있다면 그게 내 최고의 소원이니까, 어떤 결정을 내리든 난 널 지지해 줄 거야.」',
      2,
    );
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 잠시 깊은 생각에 잠기더니, 천천히 심호흡을 하고 입을 열었다.',
    ]);
    await ruby.say_and_wait('방금 하신 말씀, 부디 잊지 말아 주세요.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '이(가) 있는 소파 쪽으로 걸어와, 우아하게 ',
      me.get_colored_name(),
      '의 곁에 걸터앉았다.',
    ]);
    await era.printAndWait([
      '차가운 손가락 끝이 ',
      me.get_colored_name(),
      '의 팔을 타고 올라왔고, 부드러운 촉감과 함께 달콤한 체향이 풍겨왔다.',
    ]);
    await ruby.say_and_wait('귀 좀 잠시 빌려주세요.');
    await era.printAndWait([me.get_colored_name(), '은(는) 순종적으로 고개를 숙였다.']);
    await era.printAndWait([ruby.get_colored_name(), '는 가볍게 숨을 들이쉬었다.']);
    await ruby.say_and_wait('엄마가 되고 싶어요……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 표정을 바라보며 살짝 미소를 지었다.',
    ]);
    await ruby.say_and_wait('당신과의 아이를, 갖고 싶어요.');
    await ruby.say_and_wait('저기, 괜찮겠죠?');
    era.printButton('「그럼, 언제가 좋을까?」 (관계 진전)', 1);
    era.printButton('「아직은 때가 아니야」 (관계 진전 보류)', 2);
    era.printButton(`(지키지 못할 약속이라면 차라리 거절하자.) (권장하지 않음)`, 3);
    switch (await era.input()) {
      case 1:
        await ruby.say_and_wait('엣?');
        await me.say_and_wait('우리 아이라면 나도 빨리 만나보고 싶어.');
        await ruby.say_and_wait('에…… 엣?');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 손을 잡았고, 서로의 뺨에 뜨거운 숨결이 닿았다.',
        ]);
        await ruby.say_and_wait('잠깐만요! 집사님이 아직 계시는데…… 아무리 그래도 이런 시간에는 안 돼요!');
        era.printButton('「그럼, 어느 정도까지는 괜찮은데?」', 1);
        await era.input();
        await ruby.say_and_wait('어느 정도고 뭐고 다 안 돼요!');
        era.printButton('「만약 내가 무슨 일이 있어도 하고 싶다고 한다면?」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('알겠습니다.');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 다소 내키지 않는 기색으로 자리에서 일어났다.',
        ]);
        await era.printAndWait([
          '순간, ',
          me.get_colored_name(),
          '은(는) 불길한 예감이 들었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 허둥지둥 몸을 일으키려던 찰나, 장난스럽게 웃는 ',
          ruby.get_colored_name(),
          '에게 밀려 소파 위로 도로 자빠졌다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 자신의 입술을 ',
          me.get_colored_name(),
          '의 입술 위에 겹치고는, 몇 번이고 가볍게 쪼아대듯 입을 맞추었다.',
        ]);
        await era.printAndWait('점차 가벼운 입맞춤은 사라지고, 그 자리를 깊고 진한 타액의 교환이 채우기 시작했다.');
        await era.printAndWait(
          '서로의 혀끝이 닿기만 해도 짜릿하게 얽혀들었고, 아찔한 쾌감이 온몸으로 퍼져나갔다.',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 손을 뻗어 ',
          ruby.get_colored_name(),
          '의 등을 감싸 안아, 그녀를 ',
          me.get_colored_name(),
          '의 몸에 완전히 밀착시켰다.',
        ]);
        await era.printAndWait([
          '사랑스러운 담당 우마무스메의 부드러운 육체와 달콤한 향기에, ',
          me.get_colored_name(),
          '은(는) 머릿속이 하얘지는 것만 같았다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 역시 ',
          me.get_colored_name(),
          '의 머리를 안아 오며, ',
          me.get_colored_name(),
          '의 촉감을 탐닉했다.',
        ]);
        await era.printAndWait([
          '간헐적으로 터져 나오는 외설스러운 숨소리가 ',
          me.get_colored_name(),
          '을(를) 더욱 흥분시켰다.',
        ]);
        await era.printAndWait('이윽고 누구의 것인지 모를 은밀한 타액이 실을 길게 늘어뜨리며 떨어져 나갔다.');
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 아쉬워하는 듯한 표정은, ',
          me.get_colored_name(),
          '(으)로 하여금 당장이라도 다시 그녀를 끌어안고 싶게 만들었다.',
        ]);
        await ruby.say_and_wait('이제 이쯤 해두죠……');
        era.printButton('「응, 고마워.」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '의 곁을 떠나 조금 흐트러진 옷가지를 정리하기 시작했다.',
        ]);
        await era.printAndWait([
          '방금 전까지 흐르던 요염한 분위기는 온데간데없이 사라지고, ',
          me.get_couple_title(),
          '은(는) 평소 평범하게 훈련하던 때의 공기로 되돌아왔다.',
        ]);
        await sys_love_uma_in_event(85);
        begin_and_init_ero(0, 85);
        await quick_make_love(
          new EroParticipant(0, part_enum.mouth),
          new EroParticipant(85, part_enum.mouth),
          false,
        );
        end_ero_and_train();
        break;
      case 2:
        await ruby.say_and_wait('……알겠어요.');
        await era.printAndWait([ruby.get_colored_name(), '은(는) 묵묵히 방을 나섰다……']);
        era.set('cflag:85:호감거절', 89);
        await punish_rejecting_love(85);
        break;
      case 3:
        era.set('flag:강제배드엔딩', 85);
    }
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} r_call_m
   */
  async kiss(ruby, me, r_call_m) {
    await print_event_name('트레이닝실에서의 키스', ruby);
    await era.printAndWait([
      me.get_colored_name(),
      '의 담당 우마무스메는 멍하니 서 있는 ',
      me.get_colored_name(),
      '을(를) 소파 위로 밀쳐 눕혔다.',
    ]);
    await era.printAndWait([
      '풀어헤쳐진 화려하고 사치스러운 승부복 아래로, 흰색 타이즈를 신은 가녀린 엉덩이가 ',
      me.get_colored_name(),
      '의 가랑이 위에 내려앉았다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 상체를 앞으로 숙였고, 몇 가닥의 흑갈색 곱슬머리가 옆얼굴을 타고 흘러내렸다. 마치 그림 속 인형처럼 정교하고 아름다운 작은 얼굴이 옅은 홍조를 띠었다.',
    ]);
    await ruby.say_and_wait([r_call_m, ', 딴생각하지 마세요.']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 팔꿈치로 몸을 지탱하며 일어나려 하자, 부드럽고 매끄러운 소녀의 입술이 ',
      me.get_colored_name(),
      '의 입을 막아버렸다.',
    ]);
    await era.printAndWait([
      '말랑하고 촉촉한 혀가 단숨에 ',
      me.get_colored_name(),
      '의 입술과 치열을 열고 안으로 파고들었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 거칠고 두툼한 혀가 붙잡혀 농락당했고, 이내 담당 우마무스메의 향긋한 혀와 한데 얽혔다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 타액은 마치 식후 과일처럼 달콤한 맛을 품고 있었으며, 끊임없이 ',
      me.get_colored_name(),
      '의 입안으로 밀려 들어왔다.',
    ]);
    await era.printAndWait([
      '자세의 제약 탓에, ',
      me.get_colored_name(),
      '은(는) 꼼짝없이 그녀의 끈적하고 청량한 타액을 계속해서 삼켜내야만 했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 향긋한 체향이 점차 사방을 가득 채우며 ',
      me.get_colored_name(),
      '의 비강을 파고들어 뇌를 마비시켰다.',
    ]);
    await era.printAndWait([
      '이 어린 소녀는 ',
      me.get_colored_name(),
      '의 구강 안에서 자신의 젖고 뜨거운 핑크빛 혀를 굴리며, ',
      me.get_colored_name(),
      '의 거친 혀와 함께 맞붙어 감아올렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '는 서로의 침을 나누어 가지고 게걸스럽게 삼켜대며, 질척하고 젖은 소리를 요란하게 내뿜었다.',
    ]);
    era.printButton('담당 우마무스메의 가는 허리를 붙잡는다.', 1);
    era.printButton('그녀의 꼿꼿하고 아름다운 엉덩이를 만지작거린다.', 2);
    await era.input();
    await ruby.say_and_wait('쮸웁…… 츄르릅, 꿀꺽…… 하아…… 으음……');
    await era.printAndWait([me.get_colored_name(), '은(는) 음란한 설원에 푹 빠져 정신을 차리지 못했다.']);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 하얀 타이즈에 단단히 조여진 은밀한 부위는, 연약한 틈새로부터 흘러나온 애액으로 인해 짙은 색으로 얼룩져 가고 있었다.',
    ]);
    await era.printAndWait([
      '한참이 지나서야, ',
      me.get_colored_name(),
      '은(는) 폐활량 부족으로 패배하여 머리가 어지러운 채 거친 숨을 몰아쉬었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 만족스러운 듯 ',
      me.get_colored_name(),
      '의 입안에 머무르느라 살짝 부어오른 혀를 거두어들였으나, 호흡만큼은 무척이나 평온했다.',
    ]);
    await era.printAndWait([
      '오르막길 달리기, 수영…… 신체 능력이 인간을 아득히 초월하는 우마무스메인 만큼, 의식을 완전히 비워낸 채 ',
      me.get_colored_name(),
      '과(와) 격렬한 키스를 나누면서도 호흡을 조절하는 본능적인 감각은 지극히 훌륭했다.',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async jade(ruby, me) {
    await print_event_name('옥 상점', ruby);
    await era.printAndWait('일반적인 액세서리 상점은 대개 여성용 장식품 위주로 판매하기 마련이다.');
    await era.printAndWait('하지만 두 사람이 발을 들인 이 상점은 내부 인테리어부터 눈길을 사로잡았다.');
    await era.printAndWait('비취, 보석 등 매장 안에는 원석의 종류도 풍부할 뿐만 아니라 완성된 가공품도 제법 많았다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 눈앞의 화려한 보물들에 전혀 한눈을 팔지 않고, 곧장 옥 패물이 진열된 방향으로 걸어갔다.',
    ]);
    await era.printAndWait(
      '그녀에게 있어서 아름다운 보석 따위는 이미 질리도록 봐온 것들이라, 진작에 흥미를 잃은 지 오래였다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고개를 요리조리 흔들었지만, 마음에 쏙 드는 것을 찾지 못한 모양이었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 카운터 근처에 있는 직원에게 안내를 요청했다.',
    ]);
    await era.printAndWait([
      '가이드가 몇 쌍의 상품을 추천하며 설명해 주었지만, ',
      ruby.get_colored_name(),
      '는 그리 만족스러워하지 않았다.',
    ]);
    await ruby.say_and_wait('다른 더 좋은 것은 없나요?');
    await era.printAndWait([
      '잠시 후, 가게의 주인이 직접 모습을 드러냈다. 그는 ',
      me.get_couple_title(),
      ' 두 사람을 2층으로 초대해 대화를 나누었다.',
    ]);
    await era.printAndWait('정성스럽게 포장된 상자가 전해졌고, 뚜껑을 열자 눈앞에 나타난 것은 한 쌍의 비취 노리개였다.');
    await era.printAndWait(
      '알고 보니 그것은 연못 위의 원앙을 형상화한 것으로, 완벽하게 대칭되는 형태에 주변을 연꽃잎들이 감싸 안아 풍요롭고 원만한 느낌을 자아내고 있었다.',
    );
    await era.printAndWait('떼어놓으면 그저 한 마리의 새에 불과하지만, 둘을 합쳐놓으면 서로 목을 교차한 채 친밀함을 과시하는 한 쌍의 연인이 되었다.');
    await era.printAndWait('가게 주인은 「본래 제 아내에게 선물하려 했던 물건입니다만, 안타깝게도……」 라며 말문을 흐렸다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 확실히 마음이 동했다. 최상품이라 불리기에 부족함이 없었다.',
    ]);
    era.printButton('「이 물건을 혹시 판매하실 생각이 있으십니까?」', 1);
    era.printButton('「이건 너무 과하게 귀중하군요, 다른 걸 좀 둘러볼까요?」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait('점장은 고개를 끄덕였으나, 제시된 가격은 이미 수많은 사람을 지레 겁먹고 물러나게 만든 액수였다.');
      await era.printAndWait(
        '일반적인 사람이라면 감히 엄두도 내지 못할 금액이었고, 그저 가벼운 마음으로 환심을 사기 위해 살 수 있는 수준의 물건이 아니었다.',
      );
      await ruby.say_and_wait('그러면 당신이 하나 차고, 제가 하나 차면 딱 좋겠네요.');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' 역시 무척 마음에 들어 하는 눈치였다. 보면 볼수록 마음에 들어 당장이라도 몸에 지니고 싶어 안달이 난 듯했다.',
      ]);
      await era.printAndWait(
        '도리어 가게 주인이 깜짝 놀라, 이 어린 소녀가 이 장식에 담긴 속뜻을 모르고 하는 소리인가 싶어 서둘러 해명하려 했다.',
      );
      era.printButton('「사장님, 다른 작품도 좀 보여주세요.」', 1);
      await era.input();
      era.drawLine();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 마음에 쏙 드는 커플 옥장식을 손에 넣고 무척 기뻐했다.',
      ]);
      await era.printAndWait([
        '가게 문을 나서기 직전까지도, 주인은 ',
        ruby.get_colored_name(),
        '에게 이 원앙들이 깊은 의미를 필사적으로 설명하려 애썼다.',
      ]);
      await ruby.say_and_wait('제가 암컷 원앙이고, 이 사람이 수컷 원앙인 거 알고 있어요.');
      await era.printAndWait([
        '주인이 황당함에 말문이 막혀 멍하니 서 있는 사이, ',
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 손을 이끌고 서둘러 다른 곳으로 자리를 옮겼다.',
      ]);
    } else {
      await era.printAndWait('이런저런 즐거운 대화가 오가고……');
      await era.printAndWait([
        '가게 주인은 참으로 소탈하고 참된 성품의 인물이었다. 그는 기꺼이 ',
        me.get_couple_title(),
        '을 위해 이 장신구를 따로 보관해 두겠다고 약속했고, 이윽고 ',
        me.get_couple_title(),
        '은(는) 옥 상점을 나섰다.',
      ]);
    }
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async dance(ruby, me) {
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('무용실', ruby);
    await era.printAndWait(
      '정오에 가까워진 햇살은 눈이 시릴 만큼 이글거렸고, 바닥에 부딪혀 후끈거리는 불쾌한 열기를 뿜어내고 있었다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 아담한 몸 위에는 순결하고 우아한 흰색 원피스 발레복이 입혀져 있었고, 그 아래로는 흰색 타이즈로 꽉 감싸인 가늘고 긴 미각이 뻗어 있었다.',
    ]);
    await era.printAndWait('단정하고 정교한 이목구비는 한낮의 열기 속에서 청사과처럼 풋풋하고 달콤한 분위기를 풍겼다.');
    await era.printAndWait([
      '조명처럼 쏟아지는 햇살 아래에서, 사뿐사뿐 춤을 추는 ',
      ruby.get_colored_name(),
      '는 몸을 유연하게 늘어뜨리며 우아한 곡선미를 완벽하게 드러냈다.',
    ]);
    await era.printAndWait([
      '그녀의 가녀린 옆얼굴이 ',
      me.get_colored_name(),
      '쪽을 향했으나, 들어 올린 스텝은 멈추지 않았다.',
    ]);
    await era.printAndWait('가슴 앞의 부드러운 두 둔덕은 그녀의 상체가 앞으로 쏠릴 때마다 출렁이며 하얀 파문을 그려냈다.');
    await era.printAndWait([
      '한 곡이 끝나고 잠시 숨을 고를 때, ',
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 한껏 치켜 올라간 예쁜 엉덩이 뒤에 서서 가볍게 박수를 쳤다.',
    ]);
    await era.printAndWait([
      '춤에 푹 몰두해 있던 ',
      ruby.get_colored_name(),
      '는 조그맣게 깜짝 놀랐다.',
    ]);
    await era.printAndWait([
      '그녀는 시선을 아래로 내린 채 가녀린 몸을 돌리더니, ',
      me.get_colored_name(),
      '의 하반신에서 터질 듯이 부풀어 오른 정장 바지 가랑이를 힐끗 쳐다보고는 얼굴을 붉혔다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 손을 뻗어 ',
      ruby.get_colored_name(),
      '의 뺨을 부드럽게 감싸 쥐었다.',
    ]);
    await era.printAndWait([
      '다음 순간, 두툼한 입술이 ',
      ruby.get_colored_name(),
      '의 핑크빛 입술을 남김없이 집어삼켰다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 눈빛은 마치 마음속으로 깊은 한숨을 내쉬는 듯했다.',
    ]);
    await era.printAndWait([
      '오랜만에 발레 연습을 좀 해보려 했건만, 결국 지금 이 순간만큼은 속수무책으로 ',
      me.get_colored_name(),
      '과(와)의 농밀한 키스를 즐길 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '달콤한 체향이 ',
      me.get_colored_name(),
      '의 코끝을 가득 채웠고, 마치 최고급 아로마처럼 신경을 황홀하게 매료시켰다.',
    ]);
    await era.printAndWait([
      '이내 주도권을 빼앗아 온 ',
      ruby.get_colored_name(),
      '는 탐욕스럽게 ',
      me.get_colored_name(),
      '의 타액을 빨아들였고, 가녀린 두 손은 ',
      me.get_colored_name(),
      '의 등을 부드러운 손길로 쓸어내렸다.',
    ]);
    await era.printAndWait([
      '남성의 거친 거친 호흡과 소녀의 정에 겨운 가쁜 숨소리가 얽히는 와중에, ',
      me.get_colored_name(),
      '의 커다란 손은 흰색 타이즈에 감싸인 탄력 있는 엉덩이를 쥐고 주무르기 시작했다.',
    ]);
    await era.printAndWait([
      '바지 바깥으로 솟구친 성기 역시 자연스럽게 ',
      ruby.get_colored_name(),
      '의 부드럽고 연약한 육체를 부비며 압박했다.',
    ]);
    await era.printAndWait('음란했던 입맞춤이 막을 내렸다.');
    await era.printAndWait([
      me.get_colored_name(),
      '의 품에 안겨 있는 ',
      ruby.get_colored_name(),
      '는 특유의 수줍은 기색을 띤 채 마른침을 작게 삼켰다.',
    ]);
    await era.printAndWait([
      '조그만 손 하나가 슬그머니 ',
      me.get_colored_name(),
      '의 터질 듯이 성을 내고 있는 사타구니를 찾아내더니, 가녀린 손가락으로 능숙하게 정장 바지 지퍼를 내렸다.',
    ]);
    await ruby.say_and_wait('요즘 저랑 단둘이 있을 때마다, 유독 쉽게 커지시는 것 같은데……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 자신을 겁주면서도 애틋하게 만드는 커다란 물건에 제 몸을 살짝 비벼대었다.',
    ]);
    await era.printAndWait([
      '눈처럼 하얗고 정교한 턱을 음낭 위에 턱 하니 걸쳐놓아, ',
      me.get_colored_name(),
      '의 성기의 귀두가 소녀의 새하얀 이마 끝에 곧바로 닿도록 만들었다.',
    ]);
    await ruby.say_and_wait('후훗…… 트레이너님 본인과는 다르게, 아주 늠름하고 무서운 아이네요.');
    await era.printAndWait([
      '진한 남성의 정취가 ',
      ruby.get_colored_name(),
      '의 비강 속으로 고스란히 들이닥쳤고, 그녀는 자신을 향한 농밀한 애정이 담긴 이 냄새에 갈수록 저항할 수 없게 되어갔다.',
    ]);
    await era.printAndWait('방금 막 무용을 마친 담당 우마무스메의 몸에는 운동 뒤의 미열과 가벼운 땀방울이 배어 있었다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 두 손으로 ',
      me.get_colored_name(),
      '의 흥분하여 떨리는 하체를 감싸 쥐고, 부드러운 손길로 앞뒤로 가볍게 흔들며 풀어주었다.',
    ]);
    await era.printAndWait([
      '그녀는 촉촉하고 핑크빛인 부드러운 혀끝을 살짝 내밀며, 눈을 반짝이며 ',
      me.get_colored_name(),
      '을(를) 올려다보았다.',
    ]);
    era.printButton(`「그건 ${m_call_r}가 너무 예쁜 탓이야. 매번 볼 때마다 발기해서 아플 정도라고.」`, 1);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 그 말을 듣고는, ',
      me.get_colored_name(),
      '의 쿠퍼액이 맺힌 요도구를 가볍게 핥아 올린 뒤, 귀두를 조그만 입안에 머금고 천천히 빨아들이기 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 두 손 역시 가만히 있지 않았다. 그녀의 위로 치켜 올라간 골반과 엉덩이를 부드럽게 주무르다, 발레 스커트 아래 숨겨진 타이즈의 엉덩이 골 사이로 손가락을 밀어 넣었다.',
    ]);
    await era.printAndWait(
      '연약한 틈새를 몇 번이고 살며시 매만지자, 고급 실크 스타킹을 흠뻑 적시며 스며 나온 애액이 손가락 위를 부드럽게 뒤덮었다.',
    );
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(85, part_enum.hand),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   * @param {string} r_call_m
   */
  async take_shower(ruby, me, r_call_m) {
    await print_event_name('목욕', ruby);
    await era.printAndWait([
      '깊은 밤 귀가하자, ',
      me.get_colored_name(),
      '은(는) 때마침 ',
      ruby.get_colored_name(),
      '가 목욕을 마치고 욕실에서 막 나오는 모습을 마주했다.',
    ]);
    await era.printAndWait('그녀의 온몸에서는 향긋한 열기가 피어오르고 있었고, 긴 머리카락은 촉촉하게 젖어 얽혀 있었다.');
    era.printButton('그녀를 끌어안고 애무한다.', 1);
    era.printButton('거실로 데려가 조교한다.', 2);
    await era.input();
    await ruby.say_and_wait([r_call_m, ', 안 돼요……']);
    await era.printAndWait([me.get_colored_name(), '은(는) 일부러 화가 난 듯한 표정을 지었다.']);
    await era.printAndWait([ruby.get_colored_name(), '는 분위기가 이상함을 눈치채고 즉각 말을 바꾸었다.']);
    await ruby.say_and_wait('제 사랑, 이러지 마세요, 저 방금 막 씻고 나왔단 말이에요.');
    await era.printAndWait([me.get_colored_name(), '은(는) 들은 체도 하지 않고 그대로 입술을 찍어 눌렀다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 마치 발정 난 수컷처럼, ',
      ruby.get_colored_name(),
      '의 몸에서 풍기는 살결의 향기를 거칠게 탐닉했다.',
    ]);
    era.printButton('목덜미를 가볍게 깨문다.', 1);
    era.printButton('허벅지 안쪽을 애무한다.', 2);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 깜짝 놀라며, 본능적으로 두 다리를 단단히 맞조였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      ruby.get_colored_name(),
      '의 잘게 떨리는 부드러운 귀를 살짝 깨물자, 효과가 있었는지 ',
      ruby.get_colored_name(),
      '의 허벅지 근육이 제법 느슨하게 풀려났다.',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 지체없이 단숨에 속옷으로 향했다.']);
    await era.printAndWait([
      '손가락이 ',
      ruby.get_colored_name(),
      '의 순백색 팬티 겉면을 더듬으며 유영하더니, 이내 그녀의 은밀한 언덕의 완벽한 형태를 고스란히 그려냈다.',
    ]);
    await era.printAndWait('속옷의 틈새를 비집고 들어간 뒤, 그 핑크빛 연약한 부위 주위를 앞뒤로 끊임없이 문질렀다.');
    await era.printAndWait([ruby.get_colored_name(), '의 예쁜 얼굴이 새빨갛게 상기되었고, 어금니를 꽉 깨물었다.']);
    await me.say_and_wait('느낌이 와?');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 참지 못하고 가녀린 외마디 비명을 질렀고, 호흡이 점차 격렬해지기 시작했다.',
    ]);
    await me.say_and_wait('어라? 설마 전에도 이런 짓을 당해본 적이 있는 거야?');
    await ruby.say_and_wait('제발 터무니없는 소리 좀 하지 말아 주세요.');
    await era.printAndWait('그녀의 어조에는 다소 화가 난 기색이 서려 있었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 입을 맞추는 동시에 애무를 가하며, 양쪽으로 공세를 몰아쳤다.',
    ]);
    await era.printAndWait('몸은 거짓말을 하지 않는 법, 이윽고 굳게 닫혀 있던 연약한 구멍으로부터 맑은 샘물이 졸졸 흘러나왔다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 사랑스럽고 청초한 얼굴은 붉은 조밀함으로 인해 뜨거운 열기를 품었고, 갈아입은 지 얼마 안 된 잠옷도 이미 반쯤 젖어 들었다.',
    ]);
    era.printButton('그녀와 함께 두 번째 목욕을 하러 간다.', 1);
    era.printButton('손바닥을 높이 들어 올려, 묻어 나온 끈적한 체액을 보여준다.', 2);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 부끄러움을 참지 못하고 ',
      me.get_colored_name(),
      '의 어깨에 기대어 눈물짓기 시작했다.',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    set_palam_to_max(85, part_enum.clitoris);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
    end_ero_and_train();
  }
};