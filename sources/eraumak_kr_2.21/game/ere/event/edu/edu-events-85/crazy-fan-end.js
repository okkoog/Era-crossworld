const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');

module.exports = class extends CustomizedEdu {
  async crazy_fan_end() {
    const me = get_chara_talk(0),
      ruby = get_chara_talk(85);
    await era.printAndWait(
      '[WARNING]\n!!!!NTR 주의!!!!\n해당 엔딩 구상에는 고농도의 NTR 요소가 포함되어 있습니다. 계속하시겠습니까?',
      {
        align: 'center',
        color: buff_colors[3],
        fontSize: '2rem',
        fontWeight: 'bold',
        isParagraph: true,
      },
    );
    era.printMultiColumns(
      ['어서 보여줘', '역시 그만둘래……'].map((e, i) => {
        return {
          accelerator: i * 100,
          config: { width: 12, align: 'center'},
          content: e,
          type: 'button',
        };
      }),
    );
    if (await era.input()) {
      await era.clear();
      era.drawLine();
      return await super.crazy_fan_end();
    }
    await era.printAndWait('（당신은 분명히 경고를 받았습니다）', {
      align: 'center',
      color: buff_colors[3],
      fontSize: '2rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    const m_call_r = sys_get_callname(0, 85);
    await era.printAndWait([
      '그로부터 얼마 후의 어느 날, ',
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '가 집사 분을 통해 전해달라며 맡긴 CD 한 장을 받았다.',
    ]);
    era.println();
    await say_by_passer_by_and_wait('금발남', ['자, ', m_call_r, ', 얼른 벗겨 줘.']);
    await ruby.say_and_wait('……아, 알겠어요.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 마음의 준비를 마친 듯, 약혼자의 속옷에 손을 얹었다.',
    ]);
    await era.printAndWait([
      '그녀는 숨을 한 번 내쉬며 마음을 진정시켰다. 그리고 있는 힘껏 속옷을 단숨에 끌어내린 순간, 거대한 남근이 무시무시한 기세로 튕겨 나오며 ',
      ruby.get_colored_name(),
      '의 눈앞에 나타났다.',
    ]);
    await ruby.say_and_wait('아앗……');
    await era.printAndWait([ruby.get_colored_name(), '가 짧은 비명을 질렀다.']);
    await era.printAndWait('그의 거대한 성기가 힘차게 우뚝 솟아 있었다.');
    await era.printAndWait('그 자태는 그야말로 수컷의 상징이라 부르기에 부족함이 없었다.');
    await era.printAndWait([
      '거대한 성기는 마치 ',
      ruby.get_colored_name(),
      '를 빤히 내려다보듯, 거무스름한 안광을 뿜어내는 듯했다.',
    ]);
    await era.printAndWait('너무나도 크다……');
    await era.printAndWait(
      '그의 거대한 성기는 이미 완전히 발기하여, 잘 익은 바나나처럼 검고 거대했다. 그 크기는 페트병을 연상시켰으며, 굵직한 혈관들이 잔뜩 돋아나 마치 하나의 살아있는 생물처럼 꿈틀거렸다.',
    );
    await ruby.say_and_wait('아……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 음경이 너무나도 비대하여 자신도 모르게 탄성을 내뱉었다. 그녀의 두 눈은 그 거대한 성기에서 차마 눈을 떼지 못한 채, 깜짝 놀라 동그래졌다. 그녀는 눈앞에 놓인, 크기가 도저히 믿기지 않는 육봉을 충격에 휩싸인 채 주시했다.',
    ]);
    await ruby.say_and_wait('굉장해…… 설마…… 이 정도로……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 그의 거대한 성기를 찬양했다. 특히 그 흉악한 길이에 첫눈에 매료된 듯 거친 숨을 몰아쉬었다.',
    ]);
    await era.printAndWait([
      '그녀가 손으로 거대한 뿌리 부분을 움켜쥐었다. ',
      ruby.get_colored_name(),
      '의 손가락은 가늘고 무척이나 아름다웠지만, 상대의 규격 외로 거대한 성기 앞에서는 손가락의 크기가 전혀 맞지 않아, 그 압도적인 크기를 다시금 실감하게 만들 뿐이었다.',
    ]);
    await era.printAndWait('금발남 「네 트레이너 녀석이랑 비교하면, 누구 게 더 큰 것 같아?」');
    await era.printAndWait([
      '그는 오만한 미소를 지으며 ',
      ruby.get_colored_name(),
      '에게 물었다. 그 의도가 무엇인지는 굳이 보지 않아도 뻔히 알 수 있었다. 하지만 약혼녀의 신분인 그녀의 입에서 직접 그 대답을 받아내는 것에야말로 의미가 있는 법이었다.',
    ]);
    await ruby.say_and_wait('……! 그런 것, 제 입으로 말하지 않겠어요.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 표정이 흐려지자, 약혼자는 손을 ',
      ruby.get_colored_name(),
      '의 머리 위에 얹고서 달래듯 어루만졌다.',
    ]);
    await era.printAndWait('금발남 「얼른 말해.」');
    await era.printAndWait([
      '그가 날카로운 표정으로 ',
      ruby.get_colored_name(),
      '에게 명령하자, 그녀는 결국 포기했다는 듯 나지막이 웅얼거렸다.',
    ]);
    await ruby.say_and_wait('당신의 것이…… 더 커요.');
    await era.printAndWait('금발남 「누구 것보다 더 좋은지 확실하게 말해야지.」');
    await ruby.say_and_wait('당신의 것이 더 좋아요……! 트레이너의 것보다 훨씬 더 크고 굉장해요……!');
    await era.printAndWait('금발남 「착하네, 말 잘 들었어.」');
    await era.printAndWait([
      '조금 전의 서슬 퍼런 표정과는 완전히 딴판으로, 그는 부드러운 미소를 띠며 ',
      ruby.get_colored_name(),
      '의 머리를 쓰다듬었다.',
    ]);
    await ruby.say_and_wait('죄송해요……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 미안함과 죄책감이 가득 교차하는 표정으로 카메라 렌즈를 응시했다.',
    ]);
    await era.printAndWait('그녀의 그런 모습을 바라보며, 당신은 자신이 한때 그녀에게 진정으로 사랑받았음을 뼈저리게 깨달았다.');
    await era.printAndWait([
      '그녀와 카메라 너머로 시선이 마주치던 순간, 갑작스럽게 두 사람 사이에 거대한 성기가 끼어들었다. 눈앞에 그의 거대한 육봉이 들이밀어 지자, ',
      ruby.get_colored_name(),
      '도 이미 카메라에서 시선을 돌린 채, 눈앞의 거대한 물건에 완전히 마음을 빼앗겨 버렸다.',
    ]);
    await era.printAndWait([
      '그는 아무렇게나 ',
      ruby.get_colored_name(),
      '의 머리카락을 움켜잡고는 자신의 가랑이 사이로 짓눌렀다. 억지로 입을 벌리게 만든 뒤, 거대한 성기를 그녀의 입안 깊숙이 쑤셔 박고는 머리카락을 난폭하게 잡아당기며 상하로 거칠게 흔들었다.',
    ]);
    await ruby.say_and_wait('읍…… 읍…… 으읍……!');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고통스러운 듯 미간을 잔뜩 찌푸렸다. 거무스름하고 거대한 성기가 ',
      ruby.get_colored_name(),
      '의 자그마한 입안을 드나들 때마다, 턱 밑으로 침이 끊임없이 뚝뚝 흘러내렸다.',
    ]);
    await era.printAndWait(
      '그녀의 작은 입안에서 차마 갈 곳을 잃은 거대한 성기는 마침내 목구멍까지 침범해 들어갔고, 그녀의 가늘고 아름다운 목덜미가 보기 싫게 불룩 튀어나오도록 짓이겼다.',
    );
    await ruby.say_and_wait('으음～! 읍……!');
    await era.printAndWait(
      '평소라면 늘 의연하고 아름다웠을 그녀의 얼굴은, 도를 넘어선 고통 탓에 눈물과 콧물로 엉망진창이 되어 버렸다.',
    );
    await era.printAndWait('금발남 「나온다! 한 방울도 남기지 말고 전부 삼켜!」');
    await era.printAndWait(
      '약혼자가 그렇게 소리치더니, 단숨에 그녀의 머리를 뿌리 끝까지 짓누르며 사정했다. 그 무지막지한 양의 정액이 그녀의 코와 입 틈새로 감당하지 못하고 흘러넘쳤다.',
    );
    await ruby.say_and_wait('읍…… 꿀꺽……');
    await era.printAndWait([ruby.get_colored_name(), '는 정액을 남김없이 꿀꺽꿀꺽 삼켜 버렸다.']);
    await ruby.say_and_wait('하아……! 으음…… 하아……');
    await era.printAndWait([
      '마침내 ',
      ruby.get_colored_name(),
      '의 목구멍에서 뽑혀 나온 거대한 성기에는 걸쭉한 정액과 타액이 잔뜩 엉겨 붙어 있었고, 그녀의 풍만하고 촉촉한 입술 사이로 은밀한 실침이 길게 늘어졌다.',
    ]);
    await era.printAndWait(
      '산소가 부족한 상태에 빠진 듯 두 눈의 초점이 흐릿해져 있었고, 시선은 갈팡질팡 헤맸다. 그녀의 입가에는 음경 뿌리까지 깊숙이 머금었던 흔적으로 남성의 음모가 지저분하게 묻어 있었고, 일부는 입안까지 침범해 있었다.',
    );
    await era.printAndWait([
      '약혼자는 거대한 성기를 ',
      ruby.get_colored_name(),
      '의 얼굴에 문지르며, 흘러넘친 정액을 그녀의 고운 뺨 위에 그대로 덧칠하듯 펴 발랐다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 얼굴은 온통 정액 범벅이 되었고, 입가에서는 침이 뚝뚝 떨어져 도저히 제대로 숨조차 쉬지 못하는 몰골이었다.',
    ]);
    await era.printAndWait('이제 그녀에게 반항할 마음 따위는 조금도 남아있지 않으리라.');
    await ruby.say_and_wait('으응♥ 아♥ 아♥ 아♥');
    await ruby.say_and_wait('오♥♥ 오♥♥♥♥');
    await ruby.say_and_wait('응아아♥ 으응♥');
    await ruby.say_and_wait('오오♥ 흑♥');
    await ruby.say_and_wait('오～ 오♥');
    await era.printAndWait(
      '그것은 그야말로 짐승이 내는 소리였다. 강인한 수컷에게, 그리고 비대한 성기에게 바치는 천박하고도 비굴한 아첨의 신음이었다.',
    );
    await me.say_and_wait([m_call_r, '……?'], true);
    await era.printAndWait([
      '믿을 수 없다. ',
      ruby.get_colored_name(),
      '가 저렇게나 추잡한 목소리로 무력하게 숨을 헐떡이고 있다니.',
    ]);
    await era.printAndWait('거대하고 가무잡잡한 수컷 한 마리가 새하얀 암컷 한 마리를 무자비하게 범하고 있었다.');
    await era.printAndWait(
      '수컷은 그녀를 위에서 거세게 내리누르며 사정없이 허리를 흔들었고, 암컷은 추잡한 교성을 내지르며 매달리듯 두 다리를 수컷의 허리에 꼭 감아올렸다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 비처를 드나드는 칠흑같이 거대한 성기는 압도적인 부피 탓에 들어갈 때마다 커다란 호를 그리며 내부를 변형시켰다.',
    ]);
    await era.printAndWait(
      '난폭하게 허리를 돌리며 거대한 성기를 여자의 육체 속으로 사정없이 쑤셔 박는 그 모습은, 그야말로 강간이나 다름없어 보였다.',
    );
    await era.printAndWait(
      '두 사람은 서로 눈을 마주할 때마다, 몇 번이고 깊은 타액을 나누며 입을 맞추었다. 이토록 친밀감이 깊은 체위는, 본래 오직 진정으로 사랑하는 연인하고만 나눌 수 있는 종류의 것이었다.',
    );
    await ruby.say_and_wait('오♥ 오♥ 오! 굉장해♥ 가장 깊은 안쪽까지 닿고 있어♥ 으오오옷 안돼!');
    await era.printAndWait('그녀가 상스럽게 비명을 지르자, 약혼자는 무척 흡족해하며 그녀에게 다그치듯 물었다.');
    await era.printAndWait('금발남 「트레이너 녀석의 앙상한 고추랑 내 거대한 육봉 중에 어느 쪽이 더 기분 좋아?」');
    await ruby.say_and_wait(
      '아! 이거! 여기 이 커다란 거요♥ 트레이너는 절대 닿지 못하는 곳까지 잔뜩 쑤셔져서♥',
    );
    await era.printAndWait('금발남 「하하, 너 정말로 큰 자지에 가버린 걸레가 됐구나!」');
    await ruby.say_and_wait(
      '좋아♥ 이렇게 늠름하고 거대한 게 너무 좋아요!♥ 꼬맹이 고추를 가진 트레이너 따위랑은 생물로서의 등급 자체가 달라요♥',
    );
    await era.printAndWait('금발남 「그렇지, 그딴 쓰레기 트레이너 놈은 이제 버려버려!」');
    await ruby.say_and_wait(
      '안 돼요♥ 그 사람 욕은 하지 말아 주세요♥ 그치만 그 사람은 거기가 조그맣단 말이에요♥ 포경도 안 된 어린애 고추인걸요♥ 그치만 다정한 점은 좋아하니까♥ 안 돼요♥',
    );
    await era.printAndWait('금발남 「아무리 다정해 봤자, 남자 구실도 못 하는 쓰레기지!」');
    await ruby.say_and_wait('안 돼♥ 그렇게 팩트를 말하면 안 돼요♥');
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 거친 숨을 몰아쉬며 비명을 지르자, 그녀의 대답을 들은 그의 허리 놀림이 한층 더 빨라지며 맹렬하게 스퍼트를 올리기 시작했다.',
    ]);
    await ruby.say_and_wait('와아아앗♥ 안 돼♥ 안 돼♥ 가요♥ 가버려어어♥♥♥');
    await era.printAndWait('이윽고 약혼자 역시 온몸을 파르르 떨며 힘차게 사정하기 시작했다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 「흣, 흣♥」 하는 가쁜 조수를 내뿜으며, 단단히 감아쥐고 있던 두 다리를 쭉 뻗은 채 밀려드는 쾌감 속에서 사정없이 파르르 떨었다.',
    ]);
    await era.printAndWait([
      '그가 그녀의 몸에서 떨어져 자리에서 일어서자, ',
      ruby.get_colored_name(),
      '의 비처에서 거대한 성기가 매끄럽게 스르륵 빠져나왔다. 당연히 피임기구 따위는 착용하지 않았기에, 정액이 아래로 뚝뚝 볼품없이 흘러내렸다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 흰자위를 드러낸 채, 다리와 온몸을 사정없이 경련했다. 그녀의 비처에서는 미처 갇히지 못한 정액이 끊임없이 흘러넘쳤다.',
    ]);
    await era.printAndWait([ruby.get_colored_name(), '는 자궁 안 가득 인자를 받아들였다.']);
    await era.printAndWait([
      '약혼자는 온몸의 힘이 완전히 빠져 흐물거리는 ',
      ruby.get_colored_name(),
      '를 가볍게 안아 들어 올리고는, 그녀의 사랑스러운 허벅지 관절 사이에 팔을 걸쳤다.',
    ]);
    await era.printAndWait([
      '검은 광택을 내뿜는 흉기가 흠뻑 젖어버린 ',
      ruby.get_colored_name(),
      '의 비처 속으로 다시금 무자비하게 처박혔다.',
    ]);
    await ruby.say_and_wait('와아앗♥');
    await era.printAndWait([
      '단숨에 있는 힘껏 가장 깊은 안쪽까지 꿰뚫렸기에, ',
      ruby.get_colored_name(),
      '는 추잡한 비명을 지르며 숨을 헐떡였다. 격렬한 피스톤 운동이 이어질 때마다, ',
      ruby.get_colored_name(),
      '의 풍만하고 부드러운 가슴이 보기 좋게 출렁거렸다.',
    ]);
    await ruby.say_and_wait('보지 마♥ 보지 마세요♥ 이런 비참한 제 모습♥ 제발 부탁이니까♥ 으오오오옷♥♥♥');
    await era.printAndWait(
      '그녀는 당신에게 장면을 보지 말아 달라고 애원했다. 평소에 철저히 유지해 오던 고결한 이미지와는 너무나도 동떨어진, 추잡하게 망가진 자신의 모습을 차마 들키고 싶지 않은 모양이었다.',
    );
    await era.printAndWait(
      '바로 그 순간, 약혼자가 그녀의 귓가에 대고 나지막이 무언가를 속삭였다. 그녀는 뜨거운 숨을 몰아쉬며 얌전히 고개를 끄덕였다. 그리고 카메라를 향해 입을 열었다.',
    );
    await ruby.say_and_wait('보지 마♥ 이 변태 자식♥ 조그만 고추나 가진 변태는 그냥 뒤져버려♥ 뒤져버리라고♥');
    await era.printAndWait('그녀는 숨조차 제대로 쉬지 못하는 와중에도, 당신을 향해 무자비한 멸시의 폭언을 쏟아냈다.');
    await ruby.say_and_wait(
      '포경도 안 된 쪼다 새끼는 뒤져버려♥ 기껏 키운 애마마저 빼앗기는 무능한 쓰레기는 그냥 뒤져♥ 뒤져♥ 뒤져버리라고♥',
    );
    await era.printAndWait(
      '그 악에 받친 폭언을 들은 약혼자는 더욱 강경하게 안쪽을 유린했다. 아마도 조금 전 귓속말의 내용은 「나를 더 기분 좋게 만들어 줄 테니, 트레이너의 욕을 실컷 하라구」 같은 지저분한 명령이었으리라.',
    );
    await ruby.say_and_wait('뒤져버려♥ 뒤져라 열등 유전자 새끼야♥ 이 세상에 살아갈 가치도 없는 쓰레기♥');
    await me.say_and_wait(['이게 정말로 ', m_call_r, '의 진심인 건가?'], true);
    await ruby.say_and_wait('으으♥ 아아아～♥');
    await era.printAndWait(
      '그녀는 다리를 꼿꼿이 편 채 격렬하게 절정했다. 입가에서는 침이 줄줄 흘러내렸고, 두 눈은 완전히 위를 향해 뒤집혔다. 온몸을 빈틈없이 지배하는 압도적인 쾌감으로부터 어떻게든 도망치기 위해, 그녀는 사지를 축 늘어뜨렸다.',
    );
    await era.printAndWait([
      '그 모습을 지켜보던 약혼자는 ',
      ruby.get_colored_name(),
      '를 아무렇게나 침대 위에 팽개치듯 내던졌다.',
    ]);
    await ruby.say_and_wait(['……죄송해요, ', sys_get_callname(85, 0), '……']);
    await print_event_name(
      `「${m_call_r}는 어쩌면 담당 트레이너를 바꿀지도 모른다」`,
      ruby,
      buff_colors[3],
      6,
    );
  }
};