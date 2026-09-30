const era = require('#/era-electron');

const { get_sex_acceptable } = require('#/system/ero/sys-calc-ero-status');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:52:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 도중', urara);
    const rice = get_chara_talk(30),
      rice_call_urara = sys_get_colored_callname(30, 52),
      urara_call_rice = sys_get_colored_callname(52, 30);
    await in_urara.say_as_unknown_and_wait([
      '『그저 ',
      urara.sex,
      '가 즐거울 수 있다면 그것으로 충분해』, 그렇기에 ',
      urara.sex,
      '는 언제나 미소를 지으며 달린다. 이것이 바로 『',
      urara.get_colored_actual_name(),
      '』.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '하지만 그 겉모습 아래에는, ',
      urara.sex,
      '조차 결코 접해본 적 없는 자신이 있을지도 모릅니다……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '여름 합숙 기간의 어느 오후, 기분 전환을 하러 나온 ',
      me.get_colored_name(),
      '은(는) 바닷바람을 맞으며 ',
      urara.get_uma_sex_title(),
      '들이 훈련 활동을 하던 해변에 도착했다.',
    ]);
    await era.printAndWait([
      '오늘의 훈련은 이미 끝났지만, 원래라면 텅 비어 있어야 할 백사장 위에서 ',
      me.get_colored_name(),
      '은(는) 고독하고 작은 실루엣 하나를 발견했다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 수영복 차림으로 홀로 바닷가에 앉아, 풀어헤친 머리띠를 손에 든 채 젖어 있는 분홍빛 머리카락으로 석양을 반사하고 있었다.',
    ]);
    await era.printAndWait([
      '지금의 어린 ',
      urara.get_uma_sex_title(),
      '는 수평선 너머로 저무는 석양을 멍하니 바라보며, 과도한 훈련으로 굳어진 다리를 두 손으로 주무르고 있었다.',
    ]);
    await era.printAndWait([
      '낮에 있었던 2500m 병주에서 ',
      urara.sex,
      '는 처참하게 패배했다. ',
      me.get_colored_name(),
      ' 역시 이 거리가 ',
      urara.sex,
      '에게는 너무나 가혹하며, 몸이 괴로운 것도 당연하다는 사실을 알고 있었다.',
    ]);
    await era.printAndWait([
      '다만 몸뿐만이 아닌 듯, 홀로 먼 곳을 바라보는 ',
      urara.get_colored_name(),
      '의 표정은 마치 무언가 감정을 억누르고 있는 것처럼 보였다.',
    ]);
    era.printButton('「오늘의 우라라는 왠지 즐거워 보이지 않네, 무슨 일 있었어?」', 1);
    await era.input();
    await era.printAndWait([
      urara.get_colored_name(),
      '의 곁으로 다가가, ',
      me.get_colored_name(),
      '은(는) 바닷물에 젖은 ',
      urara.get_colored_name(),
      '의 귀마개를 조심스레 벗겨주며 ',
      urara.sex,
      '에게 나지막이 물었다.',
    ]);
    await era.printAndWait([
      '다가오는 발소리를 진작에 듣고 있었는지, 작은 담당은 ',
      me.get_colored_name(),
      '의 등장에 놀라지 않았지만, 서둘러 지어 보인 미소는 어딘가 부자연스러웠다.',
    ]);
    await urara.say_and_wait([
      '괜찮아, ',
      callname,
      '. 그냥 병주가 끝난 뒤에 우라라가 이런저런 생각을 좀 했을 뿐이야……',
    ]);
    era.printButton(
      '「병주 일 때문에? 괜찮아, 그 거리는 확실히 너무 길었어. 정말 힘들면 내일은 쉬어도 좋아.」',
      1,
    );
    await era.input();
    await urara.say_and_wait([
      '그게 아니야! 그냥…… ',
      callname,
      ', 우라라가 너무 심하게 져버린 걸까?',
    ]);
    await era.printAndWait([
      '음? 너무 심하게 졌다니…… 남들이 그렇게 말한다면 근거가 있겠지만, 다른 누구도 아닌 ',
      urara.get_colored_name(),
      '가?',
    ]);
    await era.printAndWait([
      '하지만 생각해보니 ',
      me.get_colored_name(),
      '은(는) 지금까지 ',
      urara.get_colored_name(),
      '가 패배로 인해 특별히 슬퍼하거나 낙담하는 모습을 본 적이 없었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '와 함께 해변에 앉아, ',
      me.get_colored_name(),
      '은(는) 담당이 들려줄 이야기의 전말을 조용히 기다렸다.',
    ]);
    await urara.say_and_wait([
      '실은 이 일, ',
      urara_call_rice,
      '이랑 관련된 거야. ',
      urara_call_rice,
      '이 이상한 말을 한 건 아니야. 그냥 내가 잘 이해하지 못했을 뿐이지.',
    ]);

    era.printButton(`「${urara_call_rice.content}? 라이스 샤워 말이야?」`, 1);
    await era.input();

    await urara.say_and_wait([
      '응. 그날 훈련 레이스에서 지고 기운이 없던 ',
      urara_call_rice,
      '을 위로해 줬더니, ',
      urara_call_rice,
      '이 나한테 져도 슬퍼하지 않는 비결이 뭐냐고 물어봤어.',
    ]);
    await urara.say_and_wait(
      '언제나 말하는 것처럼, 달리지 않으면 1착을 할 수 없잖아? 나도 모두에게 내가 이기는 모습을 보여주고 싶어.',
    );
    await urara.say_and_wait(
      '그래서 내가 이기면 모두가 더 기뻐할 거라고 생각했어. 그래서 이기고 싶어!',
    );
    await urara.say_and_wait([
      '하지만 내가 그렇게 말하니까, ',
      urara_call_rice,
      '이 이전에는 한 번도 생각해보지 못한 질문들을 잔뜩 던졌어……',
    ]);
    era.drawLine();
    await rice.say_and_wait([
      '그럼 지금 ',
      rice_call_urara,
      '이 쫓는 승리는, 오직 다른 사람들을 위한 거야……? ',
      rice_call_urara,
      ', 혹시 중요한 걸 잊고 있는 건 아니야?',
    ]);
    await rice.say_and_wait([
      rice_call_urara,
      '이 틀렸다는 건 아니야. 남을 위해 이기고 싶어 하는 건 대단한 일이고, ',
      sys_get_colored_callname(30, 30),
      '도 문제없다고 생각해. 하지만 ',
      rice_call_urara,
      ' 자신을 위한 부분은 어디에 있어?',
    ]);
    await rice.say_and_wait([
      sys_get_colored_callname(30, 30),
      '는 모두가 ',
      rice_call_urara,
      '의 달리기에 각별한 기대를 품고 있다는 걸 알아. 하지만 ',
      rice_call_urara,
      ' 스스로가 어떻게 생각하는지도 중요해.',
    ]);
    await rice.say_and_wait([
      '그저 최선을 다했으니 괜찮다고만 생각하며, 레이스에 지고도 속상해하지 않는 ',
      sys_get_colored_callname(30, 52),
      '은 어쩌면 ',
      rice_call_urara,
      '의 진심이 아닐지도 몰라.',
    ]);
    if (era.get('love:30') >= 50) {
      await rice.say_and_wait([
        '게다가 승리하고 싶어 하면서도 동시에 지는 것을 받아들일 수 있다고 생각하는 건, 일종의 오만이야.',
      ]);
      await rice.say_and_wait([
        '만약 ',
        sys_get_colored_callname(30, 52),
        '이 지는 게 아무래도 상관없다면, ',
        sys_get_colored_callname(30, 0),
        '를 ',
        sys_get_colored_callname(30, 30),
        '에게 양보해도 괜찮다는 거지?',
      ]);
    }
    era.drawLine();
    await urara.say_and_wait([
      '그 뒤로 계속 ',
      urara_call_rice,
      '의 질문을 생각했어. 그러다 오늘 병주에서 모두에게 뒤쳐졌을 때……',
    ]);
    await urara.say_and_wait(
      '또 나 혼자만 남겨졌을 때 그 질문이 떠올랐어. 가슴이 너무 아팠는데, 달릴 때 힘든 거랑은 느낌이 달랐어……',
    );
    await urara.say_and_wait([
      callname,
      ', 우라라는 왜 이렇게 괴로운 걸까…… 역시 모르겠어……',
    ]);
    if (era.get('love:30') >= 50) {
      await era.printAndWait([
        urara.get_colored_name(),
        '와 마찬가지로 ',
        me.get_colored_name(),
        ' 역시 한동안 갈피를 잡지 못했다. 평소 상냥하던 ',
        rice.get_colored_name(),
        '가 친구에게 이토록 패기 넘치는 선언을 했을 줄은 상상도 못 했기 때문이다.',
      ]);
      await era.printAndWait([
        '하지만 「',
        sys_get_colored_callname(30, 0),
        '를 ',
        rice.sex,
        '에게 양보해라」라니, ',
        rice.get_colored_name(),
        '는 의외로 멋진 구석이 있다.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '가 어째서 그렇게 변했는지, 아마 원인 제공자가 가장 잘 알고 있겠지만…… 이야기가 샜다. 본론으로 돌아가서...',
      ]);
    }
    era.println();
    await era.printAndWait([
      urara.get_colored_name(),
      '가 비록 고뇌하고는 있지만 문제의 존재를 진정으로 깨달았다는 사실에 ',
      me.get_colored_name(),
      '은(는) 오히려 약간의 기쁨을 느꼈다.',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      '가 친구의 관점에서 건넨 조언은 실로 정곡을 찔렀다. 오히려 지금은 ',
      rice.get_colored_name(),
      '에게 감사해야 할 정도였다.',
    ]);
    await era.printAndWait([
      '지고 나서 슬퍼하고 괴로워하는 것은 지극히 정상적이고, 오히려 중요한 감정이다. 하지만 ',
      urara.get_colored_name(),
      '는 무의식중에 이를 간과해 왔다.',
    ]);
    await era.printAndWait([
      '아마도 ',
      urara.sex,
      '는 「달리기는 마땅히 즐거워야 하는 것」이라 믿었기에, 「지고 나서 슬퍼하는 모습」을 마음속 깊이 숨겨두었을 것이다.',
    ]);
    await era.printAndWait([
      '듣기에는 건강해 보이지 않지만, 의젓한 아이일수록 자신을 억누르는 경향이 있다. 다행히 주변 사람들이 모두 ',
      urara.sex,
      '를 따뜻하게 대해준 덕분에 유지될 수 있었을 뿐이다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      urara.get_colored_name(),
      '가 잊고 있었던 승부욕에 다시 주목하기 시작한 이상, 쌓여온 압박감과 1착에 대한 갈망이 점차 수면 위로 떠오를 것이다.',
    ]);
    await era.printAndWait([
      '요컨대 다음 단계로 나아갈 돌파구는 찾았으나, 어린 ',
      urara.get_uma_sex_title(),
      '의 심신 건강에는 조금 해로울지도 모른다는 뜻이다.',
    ]);

    const ret = [0, 0];
    await in_urara.say_as_unknown_and_wait([
      '그렇다 해도, 필요한 인도는 해야겠죠? 그렇다면 트레이너 ',
      me.get_adult_sex_title(),
      '은……',
    ]);
    era.printButton(
      '「우라라, 정말 모르겠어? 스스로가 『1등을 갈망하고 있다』는 건, 결코 『져도 상관없는』 일이 아니야.」（지력+10）',
      1,
    );
    era.printButton(
      '「분함에서 비롯된 압박감이란 그런 거야. 그것을 받아들이는 법을 배우면 더 빨리 달릴 수 있게 되겠지.」（스피드+10）',
      2,
    );
    ret[0] = await era.input();
    if (era.get('relation:52:0') > 150) {
      await era.printAndWait([
        me.get_colored_name(),
        '의 대답에 담긴 의미를 이해한 듯, ',
        urara.get_colored_name(),
        '의 눈에 깃들었던 상실감이 점차 생기로 바뀌어갔다.',
      ]);
      await urara.say_and_wait([
        '응! 그러니까 슬픔을 동력으로 바꾼다는…… 아니, 이것도 좀 아닌가! 하지만 대충 무슨 뜻인지 알 것 같아! ',
        sys_get_colored_callname(52, 61),
        '도 그렇게 말했었어!',
      ]);
      await era.printAndWait([
        '슬그머니 몸과 꼬리로 ',
        me.get_colored_name(),
        '의 몸을 꽉 끌어안았다. 얇은 천 한 장만을 걸친 어린 ',
        urara.get_uma_sex_title(),
        '의 몸이 바로 코앞에 있었다.',
      ]);
      await era.printAndWait([
        urara.get_teen_sex_title(),
        '의 뺨과 피부는 마치 석양빛에 물든 듯 붉게 상기되어, 약간 짠 기운이 섞인 밤바람 속에서 ',
        me.get_colored_name(),
        '에게 촉촉한 온기를 전해주었다.',
      ]);
      await urara.say_and_wait([
        '게다가 ',
        callname,
        '가 곁에 있잖아! 설령 괴로워지더라도 나중에는 분명 극복할 수 있을 거야—',
      ]);
    } else {
      await era.printAndWait([
        '아직 표정에는 약간의 망설임이 남아 있었지만, 어린 ',
        urara.get_uma_sex_title(),
        '의 내면은 이미 ',
        me.get_colored_name(),
        '의 답을 받아들인 듯했다.',
      ]);
      await urara.say_and_wait(
        '분명 그럴 거야. 1등을 하고 싶어 하는 내 마음도 똑같으니까. 비록 마음은 괴롭지만, 그래도……',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '의 곁에 조심스레 기대어 위로와 접촉을 갈구하던 ',
        urara.get_colored_name(),
        '가 머리와 귀를 ',
        me.get_colored_name(),
        '의 어깨에 살며시 얹었다.',
      ]);
      await era.printAndWait([
        '가느다란 손이 ',
        me.get_colored_name(),
        '의 손가락을 살짝 움켜쥐었다. 인간보다 조금 높은 ',
        urara.get_uma_sex_title(),
        '의 체온이 손등을 타고 온몸으로 기묘한 따스함을 퍼뜨렸다.',
      ]);
      await urara.say_and_wait([
        '하지만 ',
        urara_call_rice,
        '이 말한 것처럼, 자신의 갈망을 받아들이는 게 틀린 일은 아닐 거야—',
      ]);
    }
    era.println();
    await era.printAndWait([
      '주무르던 다리를 백사장 위로 쭉 펴며, ',
      urara.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '에게 다음 단계를 위한 제안을 건넸다.',
    ]);

    await urara.say_and_wait([
      '저기, ',
      callname,
      '. 나 지금 조금 더 뛰고 싶은데, 같이 훈련할래?',
    ]);
    era.printButton(
      '「그렇다면 저쪽에 쓸 수 있는 타이어가 있는데, 한번 해볼래?」（파워+10）',
      1,
    );
    era.printButton(
      '「그래, 해가 지기 전까지는 시간이 좀 남았으니까. 달릴까?」（근성+10）',
      2,
    );
    ret[1] = await era.input();

    await era.printAndWait([
      '몸에 묻은 모래를 털어내며, ',
      urara.get_colored_name(),
      '와 ',
      me.get_colored_name(),
      '은(는) 석양이 가득한 백사장에서 함께 일어섰다.',
    ]);
    await era.printAndWait([
      '이전과는 다르게, 금빛으로 물든 바다를 마주한 ',
      urara.get_colored_name(),
      '의 눈동자 속에는 작은 투지가 타오르고 있었다.',
    ]);
    await era.printAndWait([
      '어쩌면 ',
      urara.sex,
      '가 자신의 감정을 온전히 이해하기까지는 좀 더 시간이 필요할지도 모른다. 그렇기에 지금, ',
      urara.get_teen_sex_title(),
      '는 가장 단순하고 명쾌한 방법으로 그 첫발을 내디디기로 한 것이다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '우라라가 스스로를 직면하게 만드는 선택이라…… 아니, 이것 역시 우라라 자신의 선택이겠죠.',
    );
    await in_urara.say_as_unknown_and_wait(
      '정말로 이래도 괜찮은 걸까요? 나보다 당신이 더 잘 알고 있겠죠. 당신의 생각이라면…… 굳이 묻지 않아도 짐작이 가니까요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '비록 당신의 눈에 나는 『패배주의자』로 보일지도 모르지만, 언제라도 『급류에서 물러나는 것』은 선택지에 없으니까요.',
    );
    const attr_change = new Array(5).fill(0);
    attr_change[ret[0] === 1 ? attr_enum.intelligence : attr_enum.speed] = 10;
    attr_change[ret[1] === 1 ? attr_enum.strength : attr_enum.endurance] = 10;
    get_attr_and_print_in_event(52, attr_change, 0) && (await era.waitAnyKey());
  };

  handlers[47 + 32] = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:52:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return false;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 종료', urara);
    await in_urara.say_as_unknown_and_wait('……이런 것도 나쁘지 않네요?');
    await in_urara.say_as_unknown_and_wait(
      '그래, 합숙도 이제 끝이군요. 이 밤을 마음껏 즐기시길……',
    );
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 원래 침묵과 어색함으로 가득한 밤이 될 거라 예상했다. 하지만 지금 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 곁에 바짝 파고들어, ',
      urara.get_teen_sex_title(),
      ' 특유의 수줍음이 서린 미소를 짓고 있었다.',
    ]);
    await era.printAndWait([
      '……그렇다고 침묵이나 어색함이 사라졌다는 뜻은 아니다. 다만 이 방 안에서 어찌할 바를 몰라 쩔쩔매고 있는 것은 오직 ',
      me.get_colored_name(),
      ' 한 사람뿐이었다.',
    ]);
    await era.printAndWait([
      '그럼 ',
      urara.get_colored_name(),
      '는 어떤가? 잠옷 차림으로 아무런 이유도 없이 ',
      me.get_colored_name(),
      '이(가) 묵고 있는 방으로 들이닥치더니, 제멋대로 ',
      me.get_colored_name(),
      '을(를) 붙잡고 자기 직전까지 놀아댔다.',
    ]);
    await era.printAndWait([
      '그리고 지금, 도저히 내보낼 수 없는 이 어린 ',
      urara.get_uma_sex_title(),
      '는 남의 침구 속에 뻔뻔하게 누워, ',
      urara.sex,
      '의 ',
      callname,
      '와 함께 하룻밤을 보내겠다고 단단히 벼르고 있었다.',
    ]);
    await era.printAndWait([
      '몰래 다른 사람들에게 전화를 걸어 이 꼬맹이 ',
      urara.get_uma_sex_title(),
      '를 데려가라고 할까 했지만…… 일이 그렇게 간단했다면 좋았을 것이다.',
    ]);
    await era.printAndWait([
      '얇은 이불 밑에서 뻗어 나온 작은 손이 옷자락을 잡아당기는 감촉을 느끼며, ',
      me.get_colored_name(),
      '은(는) 이미 ',
      urara.get_colored_name(),
      '에게 퇴로를 차단당했음을 깨달았다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '가 무슨 생각을 하는지는 알 수 없으나, 아마 휴대폰을 집어 드는 순간 발칙한 ',
      urara.get_uma_sex_title(),
      '가 장난이라는 명목으로 덮쳐오는 사고가 발생할 것이 뻔했다.',
    ]);
    await era.printAndWait([
      '그렇다고 이대로 있을 수도 없었다. 「누군가 발견해 줄지도 모른다」는 실낱같은 희망을 품고, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '에게 작은 목소리로 확인을 요청했다.',
    ]);
    era.printButton('「그게…… 우라라, 다른 사람들도 네가 여기 온 걸 알아?」', 1);
    await era.input();
    await urara.say_and_wait(
      '모를걸? 다들 알았으면 분명 나를 여기 못 오게 했겠지.',
    );
    await urara.say_and_wait([
      '하지만 걱정 마! 우라라가 ',
      callname,
      '를 찾아간 거란 사실만 모르는 것뿐이니까!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 의도를 간파하기라도 한 듯, ',
      urara.get_colored_name(),
      '는 눈을 가늘게 뜨며 미소 짓는 육식동물처럼 말로써 ',
      me.get_colored_name(),
      '의 도망길을 막아 세웠다.',
    ]);
    await urara.say_and_wait([
      '그런데 ',
      callname,
      '는 왜 불을 껐는데도 계속 앉아만 있어? 벌써 자야 할 시간이라구?',
    ]);
    await era.printAndWait([
      '결국 예상했던 대로 고립무원의 상황. 어린 ',
      urara.get_uma_sex_title(),
      '의 재촉에 밀려 ',
      me.get_colored_name(),
      '은(는) 체념한 듯 나란히 놓인 침구 위로 몸을 뉘었다.',
    ]);
    await era.printAndWait([
      '진작 알았어야 했다. 평소에는 아무리 착하고 귀여워도, 이 아이는 결국 ',
      urara.get_uma_sex_title(),
      '로서 한 번 물면 놓지 않는 본능을 지닌 복병이라는 사실을……',
    ]);
    await urara.say_and_wait(
      '정말 신나게 놀았네! 바다에서 마음껏 수영도 하고, 모두랑 수다도 엄청 떨었어!',
    );
    await urara.say_and_wait([
      '헤헤~ 여름 추억이 잔뜩 생겼어. ',
      callname,
      ', 우리 내년에도 또 올 수 있을까?',
    ]);
    await era.printAndWait([
      '여름의 추억이라. 마지막이 이 꼬마 ',
      urara.get_uma_sex_title(),
      '의 강압적인 습격만 아니었어도 참 좋았을 텐데…… ',
      urara.get_colored_name(),
      '는 원래 그런 아이가 아니었지 않았나?',
    ]);
    era.printButton(
      '「올 수 있겠지. 그리고 훈련할 때의 추억도…… 아, 지금은 꺼내지 않는 게 좋겠네.」',
      1,
    );
    await era.input();
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        '아니야! 훈련할 때도 즐거웠어. ',
        callname,
        '와 함께라면 뭐든 다 즐거운 추억인걸.',
      ]);
      await era.printAndWait([
        '두 사람 사이의 거리가 한층 더 좁혀졌다. 담당의 작은 손가락이 이불 너머로 파고들어 ',
        me.get_colored_name(),
        '의 손바닥을 부드럽게 간질였다.',
      ]);
      await era.printAndWait([
        '아담한 몸이 조용히 ',
        me.get_colored_name(),
        '의 침구 안으로 미끄러져 들어왔다. 어린 ',
        urara.get_uma_sex_title(),
        '의 부드러운 육체를 통해 쿵쾅거리는 심장 소리가 ',
        me.get_colored_name(),
        '에게 일정한 리듬의 온기를 전해왔다.',
      ]);
      await era.printAndWait([
        '지금은 달빛이 더할 나위 없이 좋아, 시선을 조금만 옆으로 돌리면 달빛을 받아 반짝이는 ',
        urara.get_teen_sex_title(),
        '의 분홍빛 눈동자와 마주칠 수 있을 것 같았다.',
      ]);
    } else {
      await urara.say_and_wait([
        '괜찮아! 훈련도 중요하고, 무엇보다 ',
        callname,
        '가 우라라를 많이 도와줬는걸!',
      ]);
      await era.printAndWait([
        '어느샌가 슬그머니 다가온 ',
        urara.get_colored_name(),
        '의 작은 손이 틈을 타 ',
        me.get_colored_name(),
        '의 손목을 꽉 붙잡았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '와 같은 이불 속으로 조용히 파고들며, 천이 스치는 가벼운 소음 속에서 ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_teen_sex_title(),
        '가 점차 자신을 향해 고개를 돌리는 것을 느꼈다.',
      ]);
      await era.printAndWait([
        '지금 이 어린 ',
        urara.get_uma_sex_title(),
        '는 방 안으로 스며드는 달빛을 빌려, 복잡미묘한 눈빛으로 ',
        me.get_colored_name(),
        '의 옆얼굴을 찬찬히 뜯어보고 있었다.',
      ]);
    }
    await era.printAndWait([
      '침묵 속에서 ',
      urara.get_colored_name(),
      '의 손이 점차 ',
      me.get_colored_name(),
      '의 손가락을 얽어매었다. 분명 한여름임에도 불구하고 ',
      urara.get_colored_name(),
      '의 손바닥에서는 서늘한 감촉이 전해졌다.',
    ]);
    await era.printAndWait([
      '바짝 다가왔던 시선이 슬며시 떨어진 찰나, ',
      me.get_colored_name(),
      '의 곁에 기댄 어린 ',
      urara.get_uma_sex_title(),
      '가 다시 입을 열었다.',
    ]);
    await urara.say_and_wait(
      '오랫동안 생각해 봤는데, 예전에는 그저 모두에게 웃는 얼굴만 보여줬던 우라라가 왠지…… 왠지……',
    );
    await urara.say_and_wait(
      '마치…… 『흐르는 물에 몸을 맡기는』 것 같았어. 이 표현 맞지? 우라라가 틀리게 말한 건 아니지?',
    );

    era.printButton('「……우라라는 자신이 이전까지 흐름에 몸을 맡기고 있었다고 생각하는 거야?」', 1);
    await era.input();

    await urara.say_and_wait(
      '어떻게 해야 할지 잊어버릴 뻔했어…… 기분과 소망이 서로 충돌하지 않는다는 것도, 내가 정말 원하는 게 뭔지도.',
    );
    await urara.say_and_wait(
      '하지만 예전처럼 매번 지게 될까 봐 생각하면 마음이 조마조마하고, 결국 평소에도 긴장하게 돼버려서……',
    );
    await era.printAndWait(
      '심리적 변화에 너무 민감해진 나머지 불안을 느껴, 본능적으로 의지할 수 있는 어른에게 마음을 달래달라고 찾아온 것이었다. 그렇다면……',
    );

    era.printButton(
      '「무슨 뜻인지 알겠어. 우라라, 괴로울 때는 참지 말고 말해줘. 그리고—」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '그리고 ',
      callname,
      '는 언제나 우라라 곁에 있어 줄 거지? 헤헤~ 나도 알고 있어. 이건 이미 약속한 거니까.',
    ]);
    await era.printAndWait([
      '이미 예상했다는 듯한 대답과 함께 ',
      me.get_colored_name(),
      '의 귓가에 ',
      urara.get_teen_sex_title(),
      '의 만족스러운 웃음소리가 들려왔다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '에게서 가까운 쪽의 팔을 두 팔로 감싸 안으며, 어린 ',
      urara.get_uma_sex_title(),
      '의 가느다란 숨결이 ',
      me.get_colored_name(),
      '의 귓가를 간지럽혔다.',
    ]);
    await urara.say_and_wait([
      '나도 ',
      callname,
      '가 많이 힘들다는 거 알고 있으니까, 지금은 이걸로 충분해.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 행동을 공연히 넘겨짚고 싶지는 않았지만, 이쯤 되니 그 의도를 다시금 의심하지 않을 수 없었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 우려를 「확인」이라도 시켜주려는 듯, ',
      me.get_colored_name(),
      '이(가) 굳어버린 침묵 속에서 품 안의 어린 ',
      urara.get_uma_sex_title(),
      '는 연인 같은 속삭임을 이어갔다.',
    ]);

    await urara.say_and_wait([
      '저기…… ',
      callname,
      '가 보기에 우라라는 조금 성장한 것 같아?',
    ]);
    era.printButton(
      '「피부가 탔냐고 묻는 거라면, 나로선 대답해 줄 수가 없는데.」（호감도+10）',
      1,
    );
    era.printButton(
      '「우라라가 이전보다 훨씬 성숙해졌다고 하면, 우라라는 기뻐해 줄 거야?」（애정도+5）',
      2,
    );
    if (
      era.get('love:52') >= 50 &&
      get_sex_acceptable(52) &&
      urara.sex_code - 1 !== 0
    ) {
      era.printButton(
        '「조금 더 『특별한 추억』을 남기자고 하면, 우라라는 동의해 줄래?」（호감도+10, 애정도+5）',
        3,
      );
    }
const ret = await era.input();
    if (ret < 3) {
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 고의로 배려가 부족한 ',
        urara.get_teen_sex_title(),
        '의 방식으로 ',
        urara.sex,
        '에게 대답하는 것을 듣고, ',
        urara.get_teen_sex_title(),
        '는 이불 아래에서 약간 불만 섞인 태도로 ',
        me.get_colored_name(),
        '의 손목을 살짝 꼬집었다.',
      ]);
      await era.printAndWait([
        '하지만 고개를 돌려 보았을 때, ',
        urara.get_colored_name(),
        '는 이미 품속으로 파고들어 ',
        me.get_colored_name(),
        '의 어깨에 머리를 기대고, ',
        me.get_colored_name(),
        '을(를) 향해 조용히 미소 짓고 있었다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 내일이면 돌아가는 거지? 그럼 오늘은 좀 일찍 자야 할 것 같네.',
      ]);
      await urara.say_and_wait([
        '에헤헤~ 정말 특별한 밤이야. 만약 다음번에, ',
        callname,
        '에게 평소와는 다른 우라라를 보여줄 수 있다면 좋을 텐데……',
      ]);
      await urara.say_and_wait('그럼, 잘 자?');
      await era.printAndWait([
        '……적어도, 의심이 정말로 확인되지 않은 것만으로도 다행인 걸까? ',
        urara.get_colored_name(),
        '가 몸의 힘을 빼자, ',
        me.get_colored_name(),
        '도 서서히 안도의 한숨을 내쉬었다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '의 반쯤 장난 섞인 요청을 듣고, ',
        urara.get_teen_sex_title(),
        '는 우선 멍하니 눈을 크게 뜨더니, 이내 수줍음이 ',
        urara.sex,
        '의 뺨을 타고 올라오도록 내버려 두었다.',
      ]);
      await urara.say_and_wait([
        callname,
        '는 항상 곤란한 말만 한다니까. 하지만 만약 ',
        callname,
        '가 바란다면……',
      ]);
      await era.printAndWait([
        '몸을 일으켜 얇은 여름 이불을 걷어내고, ',
        urara.get_teen_sex_title(),
        '의 표정이 촉촉하게 젖어 들었다. ',
        urara.sex,
        '는 가볍게 ',
        me.get_colored_name(),
        '의 앞으로 올라타 무릎을 꿇고 앉으며, 자신의 옷에 달린 단추로 손을 뻗었다.',
      ]);
      await urara.say_and_wait([
        '다들 여름 합숙에는 청춘이 빠질 수 없다고들 하잖아. 우라라는 잘 모르겠지만, ',
        callname,
        '도 기대하고 있는 거지?',
      ]);
      await era.printAndWait([
        '잠옷이 흘러내리며 ',
        urara.get_teen_sex_title(),
        '의 청초한 향기를 풍겼다. 마지막 한 겹의 벽마저 벗어던진 어린 ',
        urara.get_uma_sex_title(),
        '의 벚꽃빛 눈동자에는 오직 ',
        me.get_colored_name(),
        '만을 위해 넘쳐흐르는 정욕이 맺혀 있었다.',
      ]);
      await era.printAndWait([
        '나지막한 속삭임 속에 순수한 욕망을 토해내며, ',
        urara.get_teen_sex_title(),
        '는 부드러운 미광 속에서 가쁘게 숨을 몰아쉬며 ',
        me.get_colored_name(),
        '에게 꾸밈없는 나신을 드러냈다.',
      ]);
      await era.printAndWait(
        '민감한 유두는 연인 앞에서 염치없이 꼿꼿이 솟아올라, 쾌락으로 혼절할 때까지 탐닉당할 준비가 된 듯 보였다.',
      );
      if (era.get('talent:52:유방사이즈') > 0) {
        await era.printAndWait([
          '두 개의 커다란 작은 괴물들이 마침내 잠옷의 속박에서 벗어나, ',
          urara.get_teen_sex_title(),
          '의 가냘픈 몸 위에서 음탕하게 흔들렸다.',
        ]);
        await era.printAndWait(
          '착유기로 모유를 짜낼 때 암컷을 굴복시키는 수법조차 필요 없었다. 그저 가볍게 손에 쥐고 혀끝으로 조금만 희롱해주면,',
        );
        await era.printAndWait([
          '참아왔던 유방은 순종적으로 진하고 걸쭉한 젖을, 어린 ',
          urara.get_uma_sex_title(),
          '의 넋 나간 신음과 함께 뿜어냈다.',
        ]);
      }
      await era.printAndWait(
        '등 뒤로 돌린 열 손가락은 성기로 사용되는 음란한 뒷구멍을 파고들어, 애인 앞에서 조급하게 격렬한 자위행위를 이어갔다.',
      );
      await era.printAndWait([
        '평소의 기특하고 사랑스러운 모습은 간데없었다. 모두를 위해 달리는 꼬마 아이돌은 이제 그저 ',
        callname,
        ' 전용의 노예일 뿐이었다.',
      ]);
      await era.printAndWait([
        '그리고 작은 ',
        urara.get_uma_sex_title(),
        '의, ',
        me.get_colored_name(),
        '의 하체 위에 살며시 눌린 어린 보지는, 당장이라도 애욕의 즙을 받아내고 삼키고 싶다는 듯 미세하게 떨리고 있었다.',
      ]);
      await era.printAndWait([
        urara.get_teen_sex_title(),
        '의 달궈진 몸이 음미한 춤을 추며 움직일 때마다, 사랑을 갈구받는 자의 복부 위로 뜨거운 은사가 끊임없이 떨어졌다.',
      ]);
      await urara.say_and_wait([
        '하웃..이제 우라라에게 가르쳐줘…… 응~ ',
        callname,
        '~ 도대체 무엇을 기대하고 있는 거야~?',
      ]);
      if (era.get('flag:징벌강도') >= 2) {
        const title = era.get('flag:징벌강도') === 2 ? '성노예' : '육변기';
        if (urara.sex_code === 0) {
          era.set('status:52:펄롱K', 1);
        }
        await era.printAndWait([
          '어쩌면, 눈앞에서 음탕하게 몸을 과시하는 어린 암컷은 ',
          me.get_colored_name(),
          '보다 더 ',
          title,
          ' 같았다. ',
          urara.sex,
          '는 아마도 ',
          me.get_colored_name(),
          '에게 유린당하기를 더 바라고 있을지도 모른다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          urara.sex,
          '는 결국 ',
          me.get_colored_name(),
          '의 「',
          urara.get_uma_sex_title(),
          '님」이다. 능욕은 비천한 ',
          me.get_colored_name(),
          '이(가) ',
          urara.sex,
          '를 만족시킬 수 있는 방법이 아니었다. 그러나 적어도 ',
          title,
          '로서, ',
          me.get_colored_name(),
          '은(는) 여전히 ',
          urara.sex,
          '에게 기쁨을 줄 수 있었다.',
        ]);
        await era.printAndWait([
          '가슴 계곡 사이에서 솟아오른 ',
          urara.sex,
          '의 자지, 그 ',
          urara.get_uma_sex_title(),
          '의 귀두를 부드럽고 향유하듯 머금고, ',
          me.get_colored_name(),
          '은(는) 혀를 이용해 정성스럽게 담당의 육봉을 받들기 시작했다.',
        ]);
        await era.printAndWait([
          '괜찮아, 그저 ',
          urara.sex,
          '가 기뻐할 수 있다면 그걸로 족해. 그저 ',
          urara.get_colored_name(),
          '가 즐겁다면, 설령 예전부터 우리 관계가 늘 이랬다고 하더라도……',
        ]);
        await era.printAndWait(
          '혀끝으로 입안에서 포피를 조금씩 밀어내고, 자국이 남을 정도의 힘으로 빨고 핥는 모든 행위가 마치 이미 몸에 새겨진 본능 같았다.',
        );
        await era.printAndWait([
          '하지만 자신을 이토록 열심히 받드는 노예 ',
          urara.get_uma_sex_title(),
          '를 보며, ',
          urara.get_colored_name(),
          '의 눈에는 형용할 수 없는 슬픔이 스쳐 지나갔다.',
        ]);
        await era.printAndWait([
          '어디가 ',
          urara.get_colored_name(),
          '를 괴롭게 한 걸까? 내가 실수한 걸까? 안 돼…… 더 잘해야 해, 이런 건 ',
          urara.sex,
          '에게 전혀 어울리지 않아……',
        ]);
        await era.printAndWait([
          '봉사 대상의 표정을 본 ',
          me.get_colored_name(),
          '의, 사고방식까지 철저히 개조된 뇌리 속에는 변기 실격으로 인한 수많은 자기 의심이 스쳐 지나갔다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          me.get_colored_name(),
          '이(가) 망설이고 있을 때, ',
          urara.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '의 입에서 살며시 육봉을 빼내고, 역으로 ',
          me.get_colored_name(),
          '의 몸을 부드럽게 눌렀다.',
        ]);
        await urara.say_and_wait([
          '괜찮아, 설령 예전으로 돌아갈 수 없다고 해도…… 그렇다면 내가 직접, ',
          callname,
          '의 기대에 부응해 줄게.',
        ]);
      }
      await quick_into_sex(52);
      await era.printAndWait([
        me.get_colored_name(),
        '의 곁에 웅크려 나지막이 작별 인사를 건네고, 만족감을 얻은 ',
        urara.get_colored_name(),
        '는 마침내 안심하고 잠에 들었다.',
      ]);
      await era.printAndWait([
        '그 작은 ',
        urara.get_uma_sex_title(),
        '는 조금이라도 성장했을까? 이 질문은, 아마 ',
        urara.sex,
        ' 본인이 직접 대답하는 것이 더 나을 것이다……',
      ]);
      await era.printAndWait([
        '몸에 밀착된 그 부드러운 온기를 살며시 껴안으며, ',
        me.get_colored_name(),
        '도 천천히 눈을 감았다.',
      ]);
      await era.printAndWait('어찌 됐든, 올해의 유난히 떠들썩했던 여름도 이제 막바지에 다다르고 있었다.');
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '……아니, 딱히 좋았다고 생각 안 해요, 지금 발언 취소…… 역시 안 되는 거겠죠……',
    );
    await in_urara.say_as_unknown_and_wait('……으으……');
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 5));
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(52, attr_change, 0, undefined, true) ||
      wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 10 * (ret !== 2), true, 5 * (ret >= 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};
