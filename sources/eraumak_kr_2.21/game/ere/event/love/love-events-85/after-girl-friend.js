const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const Love85UtilGirlFriend = require('#/event/love/love-events-85/until-girl-friend');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

module.exports = class extends Love85UtilGirlFriend {
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async delicious(ruby, me) {
    await print_event_name('미식', ruby);
    await era.printAndWait([
      '어느 날, ',
      me.get_couple_title(),
      '은 이야기 하던 중 음식 이야기로 흘러가게 되었다.',
    ]);
    await era.printAndWait([
      '그리하여, ',
      me.get_colored_name(),
      '은(는) 직접 주방으로 가 ',
      ruby.get_colored_name(),
      '를 위해 미식을 한 상 가득 요리하기로 결정했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '이(가) 흥미진진해하는 모습을 보고는 ',
      me.get_colored_name(),
      '을(를) 그냥 따라주었고, 당연히 ',
      me.get_colored_name(),
      '의 뒤를 따라왔다.',
    ]);
    await era.printAndWait([
      '화려한 일족의 창고에 있는 하얗고 뽀얀 쌀은, ',
      me.get_colored_name(),
      '이(가) 이전에 먹었던 것보다 몇 배는 더 좋아 보였다.',
    ]);
    await era.printAndWait(
      '주방에서는 파, 생강, 마늘, 간장, 맛술 등의 조미료를 아주 쉽게 찾을 수 있었다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 돼지고기를 거의 먹지 않고 대부분 소나 양고기를 위주로 먹지만, ',
      me.get_colored_name(),
      '은(는) 용케도 훈제 베이컨 한 덩이를 찾아냈다.',
    ]);
    await era.printAndWait([
      '식사는 화려하고 커다란 홀에서 진행되었는다. 한쪽에 서 있는 집사를 제외하면 오직 ',
      ruby.get_colored_name(),
      '만이 중앙 자리에 앉아 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 분주히 요리를 나르는 동안, 텅 빈 방 안은 어딘지 모르게 쓸쓸한 기운이 감돌았지만, 다행히도 따스한 화로와 사랑하는 이가 함께 있었다.',
    ]);
    await era.printAndWait([ruby.get_colored_name(), '는 반신반의하며 젓가락을 움직였다.']);
    await ruby.say_and_wait('음, 정말 맛있네요.');
    await era.printAndWait([
      '사실 ',
      me.get_colored_name(),
      '이(가) 만든 것은 그저 평범한 가정식 요리였고, ',
      me.get_colored_name(),
      '이(가) 느끼기에도 그저 평범한 맛이었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      ruby.get_colored_name(),
      '에게 있어서 이런 미각적 자극은 절대적으로 맛있다고 표현하기에 부족함이 없었다.',
    ]);
    era.printButton('「네가 좋다면, 내가 가르쳐 줄 수도 있어.」', 1);
    await era.input();
    await ruby.say_and_wait('좋아요.');
    await era.printAndWait([
      '식후 산책은 빠질 수 없는 법, 기분이 무척 좋아진 ',
      ruby.get_colored_name(),
      '는 본관 밖으로 나섰다.',
    ]);
    await era.printAndWait([
      me.get_couple_title(),
      '은 정원으로 이어지는 돌길을 따라 걸었다. 딱히 정처 없이 편하게 거닐 뿐이었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 입꼬리는 연신 올라가 있었고, 그녀는 ',
      me.get_colored_name(),
      '의 팔짱을 낀 채, ',
      me.get_colored_name(),
      '이(가) 들어본 적 없는 콧노래를 흥얼거렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 등 뒤에서 슬그머니 손을 뻗어 ',
      ruby.get_colored_name(),
      '의 허리에 올린 뒤, 천천히 끌어안았다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 기분이 최고조에 달해 있었기에, ',
      me.get_colored_name(),
      '의 행동을 그대로 받아들였다.',
    ]);
    await era.printAndWait([
      '방으로 돌아오자, ',
      me.get_colored_name(),
      '은(는) 흥분하기 시작했다.',
    ]);
    await era.printAndWait([ruby.get_colored_name(), '는 옷을 벗고 욕실로 발을 들였다.']);
    await ruby.say_and_wait('들어오세요.');
    await era.printAndWait([
      '마침내 소원을 성취한 ',
      me.get_colored_name(),
      '은(는) 힘 조절을 제대로 하지 못했다.',
    ]);
    await era.printAndWait(
      '본래는 가볍게 입을 맞추려 했으나, 마치 물어뜯을 듯이 격렬하게 탐하는 입맞춤으로 변해버렸다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 입을 열어, 자신의 혀로 ',
      me.get_colored_name(),
      '(아)라는 이름의 짐승을 달래주었다.',
    ]);
    await era.printAndWait([
      '그녀가 손을 뻗어 ',
      me.get_colored_name(),
      '의 옆구리를 꼬집고 나서야, ',
      me.get_colored_name(),
      '은(는) 자신이 너무 지나치게 몰입했다는 것을 깨달았다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 뒤로 조금 물러나며, 몸 전체를 바닥으로 옮겼다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 마른침을 삼키며, 두 손으로 ',
      ruby.get_colored_name(),
      '의 발을 받쳐 들고는 발가락부터 정성스레 탐닉하기 시작했다.',
    ]);
    await era.printAndWait('엄지발가락을 입에 머금고 혀를 끊임없이 굴린다.');
    await era.printAndWait('이어서 발가락 하나하나와 꼿꼿하게 펴진 발등까지.');
    await era.printAndWait([
      '단순히 씻어내리는 목욕물과는 다르게, ',
      me.get_colored_name(),
      '의 타액은 그녀의 몸 위에서 마치 미약과도 같은 작용을 일으켰다.',
    ]);
    await ruby.say_and_wait('빨리요……');
    await era.printAndWait([
      '섬세한 살결에 매료된 ',
      me.get_colored_name(),
      '은(는) 입술을 떼지 못한 채 허벅지 위로, 그리고 허벅지 안쪽 깊은 곳까지 핥아 올렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 허리를 슬쩍 들어 올려, 자신의 성기를 ',
      ruby.get_colored_name(),
      '의 뺨에 가볍게 부딪혔다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 짓궂게 구는 육봉을 붙잡고 귀두 끝부분부터 핥기 시작했다.',
    ]);
    await ruby.say_and_wait('아…… 으응……');
    await era.printAndWait([
      '아무런 거침없이 터져 나오는 신음 소리에 ',
      me.get_colored_name(),
      '은(는) 더 이상 참을 수 없게 되었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 한 손으로 눈앞에서 늘어진 머리를 붙잡고, 다른 한 손으로는 ',
      ruby.get_colored_name(),
      '의 귀를 만지작거리며 비벼대었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 열심히 봉사하고 있는 ',
      ruby.get_colored_name(),
      '의 머리를 두 손으로 감싸 쥔 채, 스스로도 앞뒤로 허리를 흔들기 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 자신이 부드럽고 따스한 온기에 온통 둘러싸인 것을 느꼈고, 조여드는 압박감에 ',
      me.get_colored_name(),
      '의 감정은 최고조로 치달았다.',
    ]);
    await era.printAndWait([
      '음모가 ',
      ruby.get_colored_name(),
      '의 뺨을 스치며 말로 다 표현할 수 없는 자극을 주었고, 이는 ',
      ruby.get_colored_name(),
      '가 더욱 열렬하게 입을 놀리도록 만들었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 정액을 삼켰다.',
    ]);
    await era.printAndWait([
      '맛은 없었지만 그녀는 그대로 삼켜냈다. 그것은 온전히 ',
      me.get_colored_name(),
      '의 것이었기에.',
    ]);
    await era.printAndWait([
      '자신의 몸 안에 ',
      me.get_colored_name(),
      '의 액체가 채워졌다는 사실은, 단순한 키스보다 훨씬 더 깊은 의미를 지니고 있었다.',
    ]);
    await era.printAndWait('하지만 담당 우마무스메는 아직 절정에 도달하지 못했다.');
    await era.printAndWait([
      '그녀가 다리를 들어 올리자, ',
      me.get_colored_name(),
      '은(는) 짓궂은 마음으로 ',
      ruby.get_colored_name(),
      '의 봉긋하게 선 유두를 장난치듯 손가락 사이에 끼워 잡아당겼다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 가만히 있지 못하는 손을 잡아채어 자신의 하체 위로 옮겼다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 뜨겁게 달아오른 은밀한 곳에 손이 닿았고, ',
      ruby.get_colored_name(),
      '에게 살짝 흘겨짐을 당했다.',
    ]);
    await era.printAndWait([
      '그녀의 발가락이 미세하게 오므라들었고, ',
      me.get_colored_name(),
      '의 손톱이 음핵을 스쳐 지나갈 때마다 몸을 잘게 떨었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 고조되어 절정에 도달하기까지는 한참의 시간이 더 걸렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 방심하지 않고 커다란 수건을 가져와 담당 우마무스메를 감싸 안은 뒤, 그녀를 안고 욕실을 나왔다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 조금 졸린 듯했고, ',
      me.get_couple_title(),
      ' 둘은 두툼한 이불을 뒤집어쓴 채 커다란 침대 위에서 서로를 끌어안았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      ruby.get_colored_name(),
      '의 머리카락을 쓸어 넘기다 보니, 아직 다 마르지 않은 백탁을 발견했다.',
    ]);
    await era.printAndWait([
      '몇 번이고 반복해서 ',
      ruby.get_colored_name(),
      '의 머리를 닦아주는 동안, 어차피 잠이 오지 않던 그녀는 ',
      me.get_colored_name(),
      '의 품속에 파고들어 ',
      me.get_colored_name(),
      '을(를) 꼭 껴안았다.',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.foot),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hit),
      new EroParticipant(85, part_enum.mouth, -0.5),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.mouth),
      new EroParticipant(0, part_enum.penis),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    set_palam_to_max(85, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(85, part_enum.virgin),
      new EroParticipant(0, part_enum.hand),
      false,
    );
    end_ero_and_train();
    return true;
  }

  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} me
   */
  async dessert(ruby, me) {
    await print_event_name('디저트', ruby);
    await era.printAndWait([
      '식사를 마친 후, ',
      me.get_colored_name(),
      '은(는) 문득 장난기가 발동해 ',
      ruby.get_colored_name(),
      '를 안아 식탁 위로 올려두었다.',
    ]);
    await era.printAndWait(
      '갑작스러운 행동에 그녀는 「앗!」 하고 조금 놀란 기색을 보였으나, 이내 곧 차분함을 되찾았다.',
    );
    await era.printAndWait('하얀 니삭스를 신은 가녀린 발이 공중에 대롱거렸다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 스커트를 걷어올리고, 그녀가 입고 있는 고급스러운 팬티를 조심스레 벗겨냈다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 두 다리를 벌려 그 벌어질 듯 말 듯 한 붉은 장미 봉오리를 자세히 관찰했다.',
    ]);
    await era.printAndWait(
      '뽀얗고 붉은 기가 도는 부끄러운 언덕 위로, 마치 고동치는 혈관이 보이는 듯했다. 앵두 같은 입술에 뒤지지 않는 조그만 소음순 두 조각이 열렸다 닫혔다 하는 모습은, 흡사 또 다른 생명체가 숨을 헐떡이는 것 같았다.',
    );
    await era.printAndWait([
      '이렇게 정면으로 마주하고 있음에도 불구하고, ',
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 전혀 거부 반응을 보이지 않았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 고개를 ',
      ruby.get_colored_name(),
      '의 가랑이 사이에 묻고는, 혀를 내밀어 꽃봉오리의 감미로움을 맛보았다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 깜짝 놀라 두 다리를 맞부딪혔고, ',
      me.get_colored_name(),
      '은(는) 진심으로 우마무스메의 힘찬 허벅지에 머리가 터질 것만 같다고 느꼈다.',
    ]);
    era.printButton('숨이 막혀 구조 요청 소리를 낸다.', 1);
    era.printButton('그 좁은 틈새 속으로 파고든다.', 2);
    await era.input();
    await era.printAndWait([ruby.get_colored_name(), '는 얼굴을 붉히며 두 다리를 열어주었다.']);
    await era.printAndWait([
      '그녀의 신체는 본능적으로 허벅지를 힘껏 조이려 했으나, 혹여나 ',
      me.get_colored_name(),
      '에게 상처를 입힐까 두려워 무척이나 열심히 인내하고 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 뺨으로 하체의 탄력을 느끼며, 혀끝으로 발기한 음핵을 애무하고, 더 깊고 촉촉한 음도 안으로 들어가 연약한 살결의 주름을 매만졌다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 참지 못하고 작은 신음을 흘렸다.',
    ]);
    await era.printAndWait([
      '욕망이 자극된 ',
      me.get_colored_name(),
      '은(는) 그 자그만 음핵을 빨아들이기 시작했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 머리를 감싸 안은 채 몸을 끊임없이 떨었고, ',
      me.get_colored_name(),
      '은(는) 자신의 목덜미 뒤로 닿는 호흡이 점차 가빠지는 것을 느꼈다.',
    ]);
    await era.printAndWait([
      '마지막으로, ',
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 애액을 한 모금 머금은 채 깊은 입맞춤을 나누며, 그녀에게 ',
      me.get_colored_name(),
      '의 입안에 맴도는 그녀 자신의 맛을 공유했다.',
    ]);
    begin_and_init_ero(0, 85);
    set_palam_to_max(85, part_enum.clitoris);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
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
  async non_penetration(ruby, me) {
    const m_call_r = sys_get_callname(0, this.id);
    await print_event_name('함께 목욕하기', ruby);
    let _relation = 0,
      _love = 0;
    begin_and_init_ero(0, 85);
    era.printButton('「같이 목욕하는 건 어때?」', 1);
    await era.input();
    await era.printAndWait([ruby.get_colored_name(), '는 고개를 들어 눈을 동그랗게 떴다.']);
    await era.printAndWait([
      me.get_colored_name(),
      ' 역시 스스로가 뱉은 말에 깜짝 놀랐다.',
    ]);
    await era.printAndWait(
      '이 제안이 아주 터무니없는 것은 아니었다. 결국 두 사람은 이미 여러 번 서로에게 숨김없이 솔직해진 적이 있었으니까.',
    );
    await era.printAndWait([
      '하지만 오늘 같은 평범한 평일에 정면으로 ',
      ruby.get_colored_name(),
      '에게 이런 제안을 건네는 것은, 다소 대담한 구석이 있었다.',
    ]);
    await ruby.say_and_wait('으음……');
    await ruby.say_and_wait('안 될 것도 없죠.');
    era.printButton(`「${m_call_r}, 역시 최고야!」`, 1);
    era.printButton(`「나도 어쩔 수 없었다고, ${m_call_r}가 너무 귀여운 탓이니까.」`, 2);
    era.printButton(`${m_call_r}를 안아 올린다.`, 3);
    switch (await era.input()) {
      case 1:
        _relation += 5;
        break;
      case 2:
        _love++;
        break;
      case 3:
        _relation += 5;
        _love++;
    }
    await era.printAndWait([ruby.get_colored_name(), '는 다소 부끄러워했다.']);
    await era.printAndWait([
      '눈앞에 펼쳐진 눈처럼 하얗고 고운 피부와 맵시 있고 요염한 나신을 바라보며, ',
      me.get_colored_name(),
      '은(는) 자신도 모르게 목이 타들어 갔다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 뜨거운 시선에 다소 수줍은 기색을 내비쳤다.',
    ]);
    await ruby.say_and_wait('씻죠.');
    era.drawLine();
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 빠른 걸음으로 욕조를 향해 걸어가 손을 뻗어 물 온도를 확인했다. 겹겹이 피어오르는 물안개가 담당 우마무스메의 풋풋한 몸을 가려주어, 보일 듯 말 듯 한 실루엣 속에서 더욱 몽환적인 미감을 자아냈다.',
    ]);
    await era.printAndWait([
      '알몸인 아름다운 등과 매끄러운 엉덩이를 ',
      me.get_colored_name(),
      '에게 보여주며, ',
      ruby.get_colored_name(),
      '는 고운 발을 들어 올려 물 위에 잔잔한 파문을 일으켰다.',
    ]);
    await era.printAndWait('물에 들어가는 모습이 가뿐하여 물보라가 그리 많이 튀지 않았다.');
    era.printButton(`「${m_call_r}, 정말 아름다워.」`, 1);
    era.printButton('바지를 벗고 귀두를 공기 중에 노출시킨다.', 2);
    if ((await era.input()) === 1) {
      _relation += 3;
    } else {
      _love++;
    }
    await ruby.say_and_wait('으으…… 당신은 대체 며칠 동안이나 정리를 안 하신 건가요……');
    await era.printAndWait([
      '그러나 ',
      me.get_colored_name(),
      '의 육봉이 위풍당당하게 솟구쳐 있는 것을 보자, ',
      ruby.get_colored_name(),
      '는 자신도 모르게 두 다리를 꼭 맞조였다.',
    ]);
    await era.printAndWait('몸은 분명 따스한 물에 부드럽게 적셔졌건만, 소녀의 표정에는 어딘가 허전하고 아쉬운 기색이 감돌았다.');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 짧은 멋쩍음이 지난 후, 눈치 없이 싱글벙글 웃으며 물속으로 몸을 던졌다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '와 달리 거칠게 입수하는 바람에 물보라가 사방으로 세차게 튀었다.',
    ]);
    era.printButton('그녀의 맞은편에 앉는다.', 1);
    await era.input();
    await era.printAndWait([
      '욕조가 협소한 탓에, ',
      ruby.get_colored_name(),
      '의 두 발은 정확히 ',
      me.get_colored_name(),
      '의 음낭 바로 아랫부분에 위치해 있었다.',
    ]);
    await era.printAndWait([
      '그저 아주 미세하게 들어 올리기만 해도, ',
      me.get_colored_name(),
      '에게 미칠 것만 같은 자극을 안겨줄 수 있는 구도였다.',
    ]);
    await ruby.say_and_wait('무례하시기는……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 말은 그렇게 하면서도, 커다란 눈동자를 ',
      me.get_colored_name(),
      '의 육봉으로부터 떼지 못했다.',
    ]);
    await era.printAndWait('그것은 비록 물 아래 감춰져 있었으나, 결코 무시할 수 없는 웅장하고 늠름한 자태로 고개를 치켜들고 있었다.');
    await era.printAndWait([
      '그럼에도 불구하고, ',
      ruby.get_colored_name(),
      '가 ',
      me.get_couple_title(),
      '두 사람의 체취가 섞인 맑은 물을 움켜쥐어 자신의 몸에 끼얹는 동작은 여전히 우아하고 사랑스러웠다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 멍하니 ',
      ruby.get_colored_name(),
      '가 몸을 씻는 모습을 바라보았다.',
    ]);
    await era.printAndWait(
      '자신이 움직여야 한다는 사실조차 잊은 채, 그저 하얗고 뽀얀 살결 하나하나를 조그만 손으로 따스한 물을 적셔 부드럽게 문지르는 광경만을 주시했다.',
    );
    await era.printAndWait([
      '고급 비누가 만들어내는 화사한 꽃향기가 향긋하고 달콤한 비눗방울 하나하나에 깃들어, ',
      ruby.get_colored_name(),
      '를 마치 고귀한 공주님처럼 돋보이게 했다.',
    ]);
    await ruby.say_and_wait('넋 놓고 있지 마세요.');
    await era.printAndWait([
      '담당 우마무스메의 재촉에 ',
      me.get_colored_name(),
      '은(는) 정신을 차렸으나, 이내 양다리 사이에 어떤 부드럽고 가녀린 감촉이 밀착하는 것을 강렬하게 느꼈다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이것이 무의식적인 엇갈림인지, 아니면 의도된 유혹인지 분간하기 어려웠다.',
    ]);
    era.printButton('꽃잎처럼 가녀린 발을 붙잡는다.', 1);
    era.printButton('발을 조물거리며 만지작댄다.', 2);
    await era.input();
    await ruby.say_and_wait('하앗…… 간지러워요…… 당신 지금 뭘 하시는 건가요?');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 조그만 발이 붙잡혀 올려진 채, ',
      me.get_colored_name(),
      '에 의해 때로는 가볍게, 때로는 묵직하게 주물러져 다리에 힘이 풀릴 지경이 되었다.',
    ]);
    await era.printAndWait([
      '비록 ',
      me.get_colored_name(),
      '이(가) 마음대로 가지고 놀도록 내버려 두었으나, 몸을 씻는 손길은 갈수록 눈에 띄게 느려졌다.',
    ]);
    era.printButton(`「내가 깨끗하게 씻겨줄게, ${m_call_r} 스스로 발을 씻기는 조금 불편하잖아?」`, 1);
    await era.input();
    await era.printAndWait([
      '당연하게도, ',
      me.get_colored_name(),
      ' 밑에서 단련된 결과로 ',
      ruby.get_colored_name(),
      '의 뛰어난 유연성을 이용하면 제 손으로 발을 깨끗이 씻는 것 따위는 일도 아니었지만, 확실히 다소 번거로운 일이기는 했다.',
    ]);
    await era.printAndWait([
      '무엇보다도, ',
      me.get_colored_name(),
      '에게 이렇게 쪼물딱거려지다 보니.',
    ]);
    await ruby.say_and_wait('으응…… 앗! 힘이 너무 과해요…… 하지만, 기분 좋네요……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 두 눈을 지그시 감은 채, ',
      me.get_colored_name(),
      '의 주무름 속에서 한 발짝씩 터져 나오는 고혹적인 신음을 흘렸다.',
    ]);
    await era.printAndWait(
      '화려한 일족의 소녀는 눈동자가 풀린 채 욕조 가장자리에 기대어 있었고, 그녀의 흑갈색 긴 머리칼은 물속에 흩어져 마치 버드나무 가지처럼 하늘거렸다.',
    );
    await era.printAndWait(
      '인간 남성을 가볍게 때려눕힐 수도 있는 그 새하얀 손은, 지금 이 순간만큼은 두 다리 사이에 교차된 채 아슬아슬하게 방어벽을 치며 허벅지를 비벼대고 있을 뿐이었다.',
    );
    await era.printAndWait([
      '예술품보다 더 완벽한 한 쌍의 발은 소녀의 가녀린 신음 소리와 함께 ',
      me.get_colored_name(),
      '의 손안에서 구석구석 남김없이 농락당했다.',
    ]);
    await era.printAndWait([ruby.get_colored_name(), '는 거의 물 밑바닥으로 미끄러져 누울 지경이었다.']);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.foot),
      false,
    );
    era.printButton('그녀의 허리를 감싸 품 안으로 끌어당긴다.', 1);
    await era.input();
    await era.printAndWait([
      '소녀의 부드럽고 뽀얀 살결과 한 쌍의 풍만한 가슴이 ',
      me.get_colored_name(),
      '의 가슴팍에 정면으로 밀착했다.',
    ]);
    await ruby.say_and_wait('당신…… 대체 뭘 하려는 건가요?');
    era.printButton(`「당연히 ${m_call_r}의 목욕을 도와주려는 거지.」`, 1);
    era.printButton(`「등 밀어줄게.」`, 2);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 상황을 완전히 이해하기도 전에, ',
      me.get_colored_name(),
      '은(는) 그녀의 몸을 통째로 붙잡아 방향을 횅하니 돌려버렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 자신의 단단한 허벅지로 ',
      ruby.get_colored_name(),
      '를 정중앙에 끼워 맞추듯 고정했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 부드러운 곡선을 그리는 등줄기가 ',
      me.get_colored_name(),
      '의 가슴에 완전히 기댔고, 그녀는 등 뒤에서 전해지는, 목욕물보다 훨씬 더 자신을 조바심치게 만드는 뜨거운 양물을 고스란히 체감해야만 했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 손을 뻗어 ',
      ruby.get_colored_name(),
      '의 젖가슴을 온갖 기묘한 모양으로 주물렀고, 고혹적인 핑크빛 홍조가 하얀 피부 위로 번져나갔다.',
    ]);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.breast),
      false,
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 가슴은 커다란 손에 짓눌려 뭉개졌고, 엉덩이는 굳센 육봉에 지속적으로 마찰당했으며, 심지어 두 다리마저 ',
      me.get_colored_name(),
      '의 다리털에 사정없이 쓸려나갔다.',
    ]);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.clitoris),
      false,
    );
    await era.printAndWait('온몸을 휘감는 쾌감이 짜릿한 전류의 형태로 척수를 타고 올라가 뇌리를 사정없이 관통했다.');
    await era.printAndWait('음란한 액체가 비처의 입구로부터 끊임없이 흘러내렸다.');
    await ruby.say_and_wait('안…… 안 돼요……!');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 흔들리는 눈빛은 ',
      me.get_colored_name(),
      '에게 말할 수 없는 희열을 안겨주었으나, 그녀는 여전히 끝끝내 허락하지 않았다.',
    ]);
    await ruby.say_and_wait('다리 사이라면……');
    era.printButton('몸을 뒤로 파묻으며, 두 손으로 욕조 가장자리를 지탱한다.', 1);
    era.printButton('고개를 바짝 들이밀어, 뜨거운 숨결과 함께 담당 우마무스메의 귀와 뺨을 어루만진다.', 2);
    if ((await era.input()) === 1) {
      await me.say_and_wait('원한다면, 네가 직접 움직여봐.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 자그만 엉덩이를 조금 위로 달싹이더니, 그대로 주저앉으며 조그만 살 틈새를 거대한 육봉에 빈틈없이 밀착시켰다.',
      ]);
      await era.printAndWait([
        '고운 다리가 그대로 단단히 조여들었고, 이에 ',
        me.get_colored_name(),
        '은(는) 즉각적으로 ',
        ruby.get_colored_name(),
        '의 허벅지 틈새가 자아내는 강렬한 흡인력을 맛보았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 쾌감에 겨워 비명을 지르기도 전에, ',
        ruby.get_colored_name(),
        '는 고운 손가락을 뻗어 물속에 잠긴 귀두 끝을 지그시 눌렀다.',
      ]);
      await era.printAndWait([
        '손끝이 몇 번이고 미끄러지듯 스쳐 지나갔고, 그 닿을 듯 말 듯한 감각에 ',
        me.get_colored_name(),
        '은(는) 정신이 아득해졌다.',
      ]);
      await era.printAndWait([
        '이토록 농밀하고 생생한 자극에 ',
        me.get_colored_name(),
        '은(는) 더 이상 참지 못하고 다시금 ',
        ruby.get_colored_name(),
        '의 허리를 억세게 움켜잡았다.',
      ]);
      await era.printAndWait([
        '붙잡힌 채 희롱당하는 ',
        ruby.get_colored_name(),
        '는 자신도 모르게 두 다리를 더 꽉 집어삼키며 비비고, 몸을 비틀었다.',
      ]);
      await era.printAndWait([
        '마침내, 자신을 압박하는 ',
        me.get_colored_name(),
        '의 육봉이 한계까지 팽창하는 것을 느끼자, ',
        ruby.get_colored_name(),
        '는 두 다리에 온 힘을 주어 강하게 조였다.',
      ]);
      await era.printAndWait([
        '마치 화산이 폭발하듯, 엄청난 양의 백탁액이 뿜어져 나와 ',
        ruby.get_colored_name(),
        '의 고운 다리와 꽃봉오리를 하얗게 더럽혔다.',
      ]);
      await era.printAndWait('뜨거운 열기가 확산됨에 따라, 맑았던 온수 속에도 하얀빛이 번져나갔다.');
      await era.printAndWait([
        '화려한 일족의 고귀한 보물이, 또 한 번 ',
        me.get_colored_name(),
        '에 의해 여지없이 더럽혀지고 말았다.',
      ]);
    } else {
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 마음을 알아채고는, 고개를 돌려 ',
        me.get_colored_name(),
        '의 입술을 마중 나왔다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 두툼한 혀가 당당하게 ',
        ruby.get_colored_name(),
        '의 조그만 입안으로 침입하여, 앵두 같은 작은 혀와 얽히며 외설스럽고 음미로운 마찰음을 내뿜었다.',
      ]);
      await era.printAndWait('한쪽은 얼굴이 온통 붉게 상기되었고, 다른 한쪽은 황홀경에 취해 있었다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 손에 힘을 주어, 자그맣고 예쁜 가슴 위에 얹힌 앵두를 살짝 비틀어 쥐었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 다른 남성들이라면 감히 상상조차 할 수 없을 고귀한 미소녀를 제멋대로 유린했다.',
      ]);
      await era.printAndWait([
        '머리카락, 가녀린 어깨, 고운 가슴, 탄력 있는 엉덩이, 매끄러운 다리, 심지어 ',
        ruby.get_colored_name(),
        '가 자신의 추잡한 행위에 순순히 보조를 맞추도록 만들었다.',
      ]);
      await era.printAndWait('입술이 떨어지자마자, 육봉이 짙고 걸쭉한 백탁을 격렬하게 분출했다.');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 매끄러운 턱을 치켜세우며, 눈앞에 펼쳐진 수줍음으로 완전히 붉어진 조그만 얼굴을 감상했다.',
      ]);
      await era.printAndWait([
        '넋이 나간 듯 멍해져 있던 ',
        ruby.get_colored_name(),
        '는 슬며시 ',
        me.get_colored_name(),
        '의 품을 삐져나왔다.',
      ]);
      await era.printAndWait([
        '그 후, ',
        me.get_couple_title(),
        ' 둘은 타인이 보면 온갖 상상을 자극할 법한 흔적들을 말끔히 지워내고, 신속하게 서로의 몸을 깨끗하게 씻겨주었다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.mouth),
        false,
      );
    }
    await quick_make_love(
      new EroParticipant(85, part_enum.body, -0.4),
      new EroParticipant(0, part_enum.penis, -0.4),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(85, part_enum.clitoris, -0.4),
      new EroParticipant(0, part_enum.penis, -0.4),
      false,
    );
    end_ero_and_train();
    era.println();
    sys_like_chara(85, 0, _relation, true, _love) && (await era.waitAnyKey());
  }
};