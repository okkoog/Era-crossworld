const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string):Promise>} handlers */
module.exports = async (handlers) => {
  handlers[0] = async (ruby, me) => {
    await print_event_name('새해', ruby);
    await era.printAndWait([
      '새해의 행복한 분위기 덕분인지, ',
      me.get_colored_name(),
      '은(는) 아침부터 지금까지 줄곧 흥분해 있다.',
    ]);
    await era.printAndWait(['새해 첫 판을 치러볼까?']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 안달이 나 조용히 ',
      ruby.get_colored_name(),
      '의 곁으로 다가가, 얼굴에 어리광 부리는 표정을 띠며 암시를 보냈다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 화가 난 듯 ',
      me.get_colored_name(),
      '을(를) 한 번 노려보고는, 손을 휘저으며 「저리 가세요」라는 듯이 손짓했다.',
    ]);
    await era.printAndWait([
      '그녀의 화난 표정이 유난히 차갑고 아름다웠기에, 쫓겨나던 ',
      me.get_colored_name(),
      '의 선택은?',
    ]);
    era.printButton('방으로 돌아가 잠을 청한다.', 1);
    era.printButton(`과감하게 ${sys_get_callname(0, 85)}의 허리를 안아 들어 올린다.`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '밤새도록 ',
        me.get_colored_name(),
        '은(는) 뒤척이며 쉽게 잠들지 못했다.',
      ]);
      await era.printAndWait([
        '결국 ',
        me.get_colored_name(),
        '은(는) 눈물을 흘리며, 화장실에서 새해 첫 발을 울렸다.',
      ]);
    } else {
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 비명을 지르며, 신발도 채 벗지 못한 채 ',
        me.get_colored_name(),
        '에게 침대 위로 눌려졌다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 난폭하게 ',
        ruby.get_colored_name(),
        '의 상의를 찢어발기고, 살짝 부풀어 오른 부드러운 가슴에 온 얼굴을 파묻고 부볐다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 오랜만에 마주한 새하얀 피부의 향기를 깊게 들이마셨다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 이어서 지퍼를 내리고, 오랫동안 참아왔던 자신의 굳건한 분신을 꺼내 숨을 쉬게 했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 도망치지 못하도록, ',
        ruby.get_colored_name(),
        '의 가느다란 허리를 양손으로 가볍게 압박했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 단단해진 하체가 ',
        ruby.get_colored_name(),
        '의 매끄럽고 좁은 입구에 맞물렸고, 이내 미성숙한 통로를 끊임없이 꿰뚫기 시작했다.',
      ]);
      await era.printAndWait([
        '마침내 ',
        ruby.get_colored_name(),
        '의 조그만 자궁구까지 닿은 뒤에야 멈췄으나, 여전히 기둥의 일부는 공기 중에 그대로 노출되어 있었다.',
      ]);
      await ruby.say_and_wait('망가져…… 버려요!');
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 두 작은 손이 ',
        me.get_colored_name(),
        '의 어깨 위에 얹어진 채 떨리고 있었지만, 멋대로 움직이지는 않았다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 동작을 멈추었다.']);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 조금 익숙해지기를 기다린 뒤, 그녀의 허리를 붙잡고 미끄러지듯 움직이기 시작했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 특수한 체질 덕분에, ',
        me.get_colored_name(),
        '의 하체는 전진할 때 그리 큰 부담을 느끼지 않았다.',
      ]);
      await era.printAndWait(['마치 적당한 무게감이 있는 인형을 안고 있는 것처럼 가뿐했다.']);
      await era.printAndWait([
        '그곳에서 전해지는 포용감과 마찰감은 ',
        me.get_colored_name(),
        '을(를) 단숨에 구름 위로 솟구치게 만들었다.',
      ]);
      await era.printAndWait([
        '매번 ',
        ruby.get_colored_name(),
        '의 자궁구를 찌를 때마다, 그녀가 격렬하게 부르짖는 신음 소리는 ',
        me.get_colored_name(),
        '의 웃음을 자아냈다.',
      ]);
      await ruby.get_colored_name(), '는 ', me.get_colored_name(), '에게 조금만 살살, 천천히 해달라고 애원했다.';
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 허리를 움직이는 리듬을 가속하자, ',
        ruby.get_colored_name(),
        '의 신음과 비명도 끊임없이 고조되었다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '의 내면에서 정복욕이 들끓었다.']);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 위닝 라이브 무대 위에서 들려주는 노래는 의심할 여지 없이 사람의 마음을 사로잡는 천사의 목소리였다.',
      ]);
      await era.printAndWait([
        '그러나 지금 그녀가 내뱉는 교성은 오직 ',
        me.get_colored_name(),
        '의 영혼을 지옥 끝까지 끌어내릴 뿐이었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 아직 사정감을 채 느끼기도 전에.',
      ]);
      await era.printAndWait([
        '갑작스럽게 ',
        ruby.get_colored_name(),
        '가 온몸을 뒤로 활짝 젖혔고, 질내 역시 쉴 새 없이 파르르 떨리며 수축했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 사랑스러운 뺨을 가볍게 톡톡 쳤다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 몇 분 동안이나 정신을 잃고 있다가, 그제야 몽롱하게 의식을 되찾았다.',
      ]);
      await era.printAndWait([
        '이에 ',
        me.get_colored_name(),
        '의 하체가 다시금 거칠게 왕복하기 시작했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 한쪽 흰색 스타킹을 반쯤 벗겨내어 코끝에 가져다 댔다.',
      ]);
      await era.printAndWait([
        '방금 막 벗겨낸 스타킹에서는 ',
        ruby.get_colored_name(),
        ' 특유의 향기가 배어 나오고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 마치 고급 향수라도 음미하듯 숨을 크게 들이마셨다.',
      ]);
      await ruby.say_and_wait('변태.');
      await era.printAndWait([me.get_colored_name(), '은(는) 허리를 흔드는 속도를 한층 더 올렸다.']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 때로는 위아래로 들이치고, 때로는 좌우로 돌려가며 압박했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 입술을 꽉 깨문 채, 밀려드는 쾌감에 극구 저항하려 애썼다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '가 다시 한번 절정에 달할 때까지 끈질기게 버틴 후에야 욕망을 해방했다.',
      ]);
      await era.printAndWait(['그녀가 절정에 달해 넋을 잃은 모습은 무척이나 대단해서, 눈물과 침이 온통 흘러내리고 있었다.']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 친절하게 혀를 내밀어, 그 흔적들을 빠짐없이 핥아내 주었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그동안 쌓인 스트레스를 이번 한 번에 전부 쏟아붓고 싶었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        ruby.get_colored_name(),
        '는 이미 온몸이 흐물흐물해져 금방이라도 쓰러질 것 같은 기색이었다.',
      ]);
      await era.printAndWait([
        '그녀의 절정에 달한 모습은 갈수록 사랑스러워졌고, 피부는 홍조를 띠며 아름다운 광택을 발했다.',
      ]);
      await era.printAndWait(['붉게 물든 입술은 마치 살짝 녹아내린 에로틱한 양초 같았다.']);
      await era.printAndWait([
        '특히 물기 어린 촉촉한 눈망울은 애틋하고도 몽롱하여, 잠깐 바라보는 것만으로도 영혼이 빨려 들어갈 것만 같았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 숨이 넘어갈까 걱정되기도 했고, 자신 역시 조금 지쳤기에 ',
        me.get_colored_name(),
        '은(는) 내년에 다시 도전하기로 마음먹었다.',
      ]);
      begin_and_init_ero(0, 85);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(85, part_enum.breast),
        false,
      );
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(85, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(85, part_enum.virgin),
        false,
      );
      end_ero_and_train();
    }
  };

  handlers[47] = async (ruby, me) => {
    await print_event_name('크리스마스', ruby);
    await ruby.say_and_wait('받고 싶은 선물은 정하셨나요?');
    era.printButton('「너를 원해.」', 1);
    await era.input();
    await ruby.say_and_wait('참으로 진솔한 답변이군요.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 손놀림을 멈추었고, 얼굴을 살짝 붉혔다.',
    ]);
    await ruby.say_and_wait('그렇다면 당신의 활약에 달려 있겠네요.');
    await era.printAndWait([
      me.get_couple_title(),
      '은(는) 장식을 위해 크리스마스트리를 한가득 들여놓았다. 어떤 의미로는 이 역시 ',
      ruby.get_colored_name(),
      '의 동심이 남아있기 때문이 아닐까.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문득 자신이 크리스마스트리를 한 번도 꾸며본 적이 없다는 사실을 깨달았지만, 이제는 ',
      ruby.get_colored_name(),
      '와 함께하게 되었다.',
    ]);
    await era.printAndWait(
      '지팡이 모양의 작은 사탕, 구멍 뚫린 금화, 진저브레드 맨과 온갖 종류의 장난감들이 가지 끝에 매달렸다.',
    );
    await era.printAndWait([
      '물론 편자 장식도 있었다. ',
      ruby.get_colored_name(),
      '는 그것이 무척 마음에 든 모양이다.',
    ]);
    await era.printAndWait([
      '이어서 씻는 시간이다. 비록 ',
      ruby.get_colored_name(),
      '의 태도는 애매모호했으나, ',
      me.get_colored_name(),
      '은(는) 그녀 역시 오늘 밤을 내심 기대하고 있음을 눈치챘다.',
    ]);
    await era.printAndWait([
      '무사히 목욕을 마친 후, ',
      ruby.get_colored_name(),
      '가 먼저 물 밖으로 나와 침실로 향하더니 커다란 침대맡에 걸터앉았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '도 따라 들어갔으나, ',
      me.get_colored_name(),
      '은(는) 다짜고짜 ',
      ruby.get_colored_name(),
      '를 껴안고 마구 입을 맞추기 시작했다.',
    ]);
    await era.printAndWait([
      '마치 마약에 취한 것처럼, ',
      me.get_colored_name(),
      '은(는) 그저 한 걸음 더 가까이 그녀를 어루만지고, 입 맞추고, 핥고 싶을 뿐이었다.',
    ]);
    await era.printAndWait(
      '방 안에도 정성 어린 장식이 가득했다. 넓은 침대의 네 기둥에는 나이스 네이처의 것과 유사한 스타일의 리본이 묶여 있었다.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 손에 잡히는 리본 한 줄을 풀어내어, ',
      ruby.get_colored_name(),
      '의 손을 가볍게 결박했다.',
    ]);
    await era.printAndWait(
      '연황색 피부는 건강한 밀빛 자태를 뽐내고 있었고, 다리 사이의 흉기는 최근 잦은 사용 탓인지 짙은 붉은색으로 변해 있었다.',
    );
    await era.printAndWait('빳빳하게 솟구친 귀두 끝부분은 붉은빛을 넘어 자줏빛으로 물들 기미마저 보였다.');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      ruby.get_colored_name(),
      '의 머리카락 몇 가닥을 귀 뒤로 넘기자, 거대한 기둥이 그녀의 얼굴 앞으로 점점 가까워졌다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고개를 들어 ',
      me.get_colored_name(),
      '을(를) 보며 미소 지었고, 혀를 내밀어 끝부분을 살짝 건드렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 작은 트레이너(?)가 가르르 떨리며, 기쁜 듯이 ',
      ruby.get_colored_name(),
      '의 입술을 쫓았다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 매우 고분고분하게 ',
      me.get_colored_name(),
      '의 것을 받아들였고, 있는 힘껏 입을 벌려야 겨우 머리 부분을 머금을 수 있었다.',
    ]);
    await era.printAndWait(
      '그녀는 목구멍을 꿀꺽이며 천천히 뒤로 물러났고, 오직 입술 가장자리만 끝부분에 겨우 닿을 만큼 뺐다가 다시 깊숙이 머금기를 반복했다.',
    );
    await era.printAndWait([
      '동작은 비록 완만했으나, ',
      me.get_colored_name(),
      '은(는) 하마터면 너무나 큰 쾌감에 비명을 지를 뻔했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 머리를 붙잡은 채 앞뒤로 거칠게 허리를 움직이기 시작했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 잠시 버둥거리는가 싶더니, 이내 ',
      me.get_colored_name(),
      '의 리듬에 맞추어 필사적으로 협조해 왔다.',
    ]);
    await era.printAndWait([
      '일반 인간이었다면 ',
      me.get_colored_name(),
      '에게 이런 식으로 구강을 유린당했을 때, 피는 흘리지 않더라도 구강 내부가 한 꺼풀 벗겨졌을 터였다.',
    ]);
    await era.printAndWait([
      '한참이 지나 ',
      ruby.get_colored_name(),
      '의 턱이 뻐근해질 무렵에야, ',
      me.get_colored_name(),
      '은(는) 겨우 사정할 수 있었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 전부 삼키지 못한 정액이 그녀의 몸 위로 흩뿌려졌다.',
    ]);
    await era.printAndWait([
      '한동안 입을 제대로 다물지 못하는 채로, ',
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 곁눈질로 흘겨보았다.',
    ]);
    era.printButton(`「${sys_get_callname(0, 85)}, 미안해.」`, 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 사랑하는 우마무스메의 어깨를 끌어안고, 그녀의 귀여운 귀를 쓰다듬고 입꼬리에 키스하며 그제야 ',
      ruby.get_colored_name(),
      '의 기분을 달래주었다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 자세를 바꾸어, ',
      me.get_colored_name(),
      '을(를) 등진 채 ',
      me.get_colored_name(),
      '의 가슴팍 위에 앉더니 일부러 엉덩이를 한껏 내밀었다.',
    ]);
    await era.printAndWait([
      '하얗고 탐스러운 두 덩이가 ',
      me.get_colored_name(),
      '의 눈앞에서 살랑거렸고, ',
      me.get_colored_name(),
      '은(는) 처음 만났을 때도 바로 이곳에 시선을 빼앗겼던 기억을 떠올렸다.',
    ]);
    await era.printAndWait([
      '둔부를 가득 붙잡고, ',
      me.get_colored_name(),
      '은(는) 참지 못하고 짓무르듯 주무르기 시작했다.',
    ]);
    await era.printAndWait('세차게 꽉 쥐었다가 놓아주고, 이내 손바닥으로 찰싹 내리쳤다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 몸을 두어 번 떨었고, 선명하고 붉은 손자국이 이내 화려하게 피어올랐다.',
    ]);
    await ruby.say_and_wait('빨리……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 말에 따라 혀를 내밀어 깊은 엉덩이 골짜기를 위에서 아래로, 작은 홈을 가로지를 때까지 진득하게 핥아 내렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 검지손가락으로 그곳을 벌렸고, 주름진 핑크빛 비처가 조그맣게 오므라들어 있었다.',
    ]);
    await era.printAndWait([
      '그 내부에서 풍겨 나오는 특유의 육욕적인 내음이 ',
      me.get_colored_name(),
      '의 탐구욕을 강하게 자극했다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 힘이 빠진 채 ',
      me.get_colored_name(),
      '의 허벅지 위로 쓰러졌고, 그녀의 코끝에는 꼿꼿이 서서 굳건히 버티고 있는 분신이 있었다. 그녀는 이 온화하고도 끈적한 분위기를 만끽하고 있었다.',
    ]);
    await ruby.say_and_wait('오늘은 여기까지만 해요, 너무 지쳤어요.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 아쉬움이 가득한 눈빛으로 그곳을 바라보며 미련을 버리지 못했다.',
    ]);
    begin_and_init_ero(0, 85);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(85, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(85, part_enum.anal),
      false,
    );
    set_palam_to_max(0, part_enum.penis);
    end_ero_and_train();
  };
};