const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const Love52UntilWife = require('#/event/love/love-events-52/until-wife');
const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends Love52UntilWife {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 90(urara, me, callname) {
    const { in_urara } = this.get_event_vars();
    await print_event_name('타협하지 않는 애정', urara);
    new UraraLifeMarks().infidelity = 1;
    await in_urara.say_as_unknown_and_wait('……하아, 결국 이렇게 되어버렸군요……');
    await in_urara.say_as_unknown_and_wait(
      '적절한 토양만 있다면, 심어진 씨앗은 뿌리를 내리고 싹을 틔우는 법입니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '걱정하지 마세요, 우라라는 여전히 상냥하답니다. 다만 검게 뒤섞인 봄의 색채가, 당신의 눈에는 아름답게 보일까요?',
    );
    era.drawLine();
    await urara.say_and_wait([callname, ', 여기서 나를 기다리고 있었구나!']);
    await era.printAndWait([
      '평소의 활기찬 모습과는 달리, 오늘 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 다가와 벤치에 앉아있던 ',
      me.get_colored_name(),
      '의 곁에 조용히 자리 잡았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '가 무슨 일이 있었는지 물어보려던 찰나, 조용히 미소 짓던 작은 ',
      urara.get_uma_sex_title(),
      '가 본격화의 힘으로 옷깃을 잡아챘다.',
    ]);
    await era.printAndWait([
      '이어 ',
      me.get_colored_name(),
      '은(는) 입술이 맞닿는 부드러움을 느꼈다. 담당의 작고 말랑한 혀끝이 불가사의하게도 ',
      me.get_colored_name(),
      '의 방어막을 비집고 들어와, ',
      me.get_colored_name(),
      '의 구강 내부를 침범했다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 대담하게 ',
      me.get_colored_name(),
      '의 몸속을 파고들었다. 보드랍고 향긋한 혀끝이 치열과 설태를 부드러우면서도 강압적으로 훑었고, 끈적한 물소리가 끊임없이 이어졌다.',
    ]);
    era.println();
    begin_and_init_ero(0, 52);
    await quick_make_love(
      new EroParticipant(52, part_enum.mouth),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    end_ero_and_train();
    if (era.get('exp:52:키스횟수') <= 10) {
      await era.printAndWait([
        '무슨 일이 일어난 것일까? 왜 이런 짓을 하는 걸까? ',
      ]);
      await era.printAndWait([
        '수많은 의문이 ',
        me.get_colored_name(),
        '의 머릿속을 맴돌았다. 눈앞에서 자신을 습격한 이 벚꽃빛 소녀가 정말로 「',
        urara.get_colored_name(),
        '」가 맞는 것일까?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 입안의 타액과 함께 엉망으로 뒤섞인 머릿속을 정리하려 애썼지만, 지금은 그 어떤 답도 내릴 수 없었다.',
      ]);
      await era.printAndWait([
        '육체의 본능에 의지해 사랑하는 이를 짓누른 ',
        urara.get_colored_name(),
        '는 만족스러운 듯 온몸을 밀착해왔고, ',
        urara.sex,
        '라는 존재를 ',
        me.get_colored_name(),
        '의 모든 곳에 깊게 각인시키려 했다.',
      ]);
    } else {
      await era.printAndWait([
        '산소 부족으로 점차 흐릿해지는 시야 속에서, 활짝 피어난 벚꽃빛 눈동자가 너무나도 가까운 거리에서 ',
        me.get_colored_name(),
        '의 시야를 가득 메우고 있었다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '의 부드러운 공세에 사고 능력은 마비되었고, 힘을 모두 빼앗긴 몸은 더 이상 자신의 담당에게 저항할 수 없었다.',
      ]);
      await era.printAndWait(
        '마치 저산소증으로 인한 환각처럼, 모든 것을 앗아가겠다는 기세로 짓눌러오는 작은 담당의 눈에는 광기에 가까운 애정이 서려 있었다.',
      );
    }
    era.println();

    await era.printAndWait([
      urara.sex,
      '의 흔적을 ',
      me.get_colored_name(),
      '의 몸에 새기기로 결심하기까지, 작은 ',
      urara.get_uma_sex_title(),
      '는 오랫동안 고민했지만, 우라라는 결국 이해하고 말았다.',
    ]);
    await era.printAndWait(
      '이 감정을 믿든 믿지 않든, 연인의 인품을 신뢰하든 신뢰하지 않든 그것은 중요치 않았다.',
    );
    await era.printAndWait([
      callname,
      '가 인간 말종이면 또 어떠한가? ',
      callname,
      '가 호색한이면 또 어떠한가? ',
      callname,
      '가 그저 ',
      urara.get_colored_name(),
      '를 소유하고 싶어 할 뿐이라 해도 상관없었다.',
    ]);
    await era.printAndWait([
      '그런 것들은…… ',
      urara.get_colored_name(),
      '가 절친한 친구의 연인인 ',
      callname,
      '의 입술을 빼앗는 것과 별반 다를 게 없지 않은가.',
    ]);
    await era.printAndWait([
      '작은 ',
      urara.get_uma_sex_title(),
      '가 마침내 딥 키스에서 트레이너를 풀어주자, 서로 맞닿아있던 혀끝 사이로 아쉬운 듯한 은사가 길게 늘어졌다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 멍하면서도 숨 가빠하는 표정을 바라보며, ',
      urara.get_colored_name(),
      '는 순진함 속에 묘한 매혹이 섞인 미소를 지었다.',
    ]);
    await urara.say_and_wait([
      '미안해 ',
      callname,
      ', 하지만 나는 물러나지 않을 거야……',
    ]);
    await era.printAndWait([
      '죄책감이라곤 전혀 느껴지지 않는 목소리가 ',
      urara.get_teen_sex_title(),
      '의 입술 사이로 흘러나왔다. 한때 ',
      urara.sex,
      '가 그토록 혐오했던 친구를 향한 배신은, 이제 아무런 통증조차 주지 못했다.',
    ]);
    await urara.say_and_wait([
      '왜냐하면 우라라는 깨달았거든. 생각해보니까, 이건 다 ',
      callname,
      '의 잘못이야……',
    ]);
    era.println();
    const love_30 =
      (era.get('cflag:30:모집상태') === recruit_flags.yes &&
        era.get('love:30')) >= 75,
      love_61 =
        (era.get('cflag:61:모집상태') === recruit_flags.yes &&
          era.get('love:61')) >= 75;
    if (love_30 && love_61) {
      await in_urara.say_as_unknown_and_wait([
        '트레이너 ',
        me.get_adult_sex_title(),
        '은(는) 참 욕심이 많군요. 우라라의 소중한 친구들을 이미 가졌으면서, 우라라까지 가지려 하다니요.',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '아무것도 모르던 예전의 우라라였다면 훨씬 괴로워했겠지만, 지금의 우라라는 개의치 않습니다.',
      );
      await in_urara.say_as_unknown_and_wait([
        '그런데 지금의 우라라는 어째서 ',
        callname,
        '를 향해 기세등등한 표정을 짓고 있는 걸까요?',
      ]);
    } else {
      await in_urara.say_as_unknown_and_wait([
        '어째서 트레이너 ',
        me.get_adult_sex_title(),
        '은(는) ',
        sys_get_colored_callname(52, love_30 ? 30 : 61),
        '를 받아들이고서도, 우라라를 이토록 태연하게 대할 수 있는 건가요?',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '어째서 다른 사람의 사랑을 가지고서도, 우라라까지 품에 안으려 하는 걸까요?',
      );
      await in_urara.say_as_unknown_and_wait([
        '어째서 우라라는 그 사실을 잘 알면서도, 이런 트레이너 ',
        me.get_adult_sex_title(),
        '과(와) 웃으며 서로를 끌어안고 있는 걸까요?',
      ]);
    }
    era.println();
    await urara.say_and_wait(
      ['왜냐하면 ', callname, '는 거짓말쟁이고, 우라라는 그런 거짓말쟁이를 사랑하게 됐으니까.'],
      true,
    );
    await urara.say_and_wait(
      [
        callname,
        '가 주어서는 안 될 감정을 우라라에게 주었듯이, 그것이 진심이든 아니든 받아선 안 될 것을 알고도 독차지하려는 우라라도 똑같은 공범이야.',
      ],
      true,
    );
    await urara.say_and_wait(
      '우라라가 비열한 꼬맹이라고? 나중에 비열한 어른이 되어버릴 거라고? 우라라는 그런 건 중요하지 않다고 생각해.',
      true,
    );
    await urara.say_and_wait(
      '어린애 같은 내가 나중에 끼어든 게 뭐 어때서? 설령 이게 커다란 잘못이라 해도, 이미 여기에 빠져버린 다른 사람들이 우라라보다 얼마나 더 깨끗하겠어?',
      true,
    );
    await urara.say_and_wait([
      callname,
      '가 나를 이렇게 만들었으니까, ',
      callname,
      '도 우라라에게 제대로 책임져 줘야 해……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 이 말에 대한 의문을 표하기도 전에, 작은 담당마는 손을 뻗어 보드라운 검지로 ',
      me.get_colored_name(),
      '의 입술을 막았다.',
    ]);
    await urara.say_and_wait(
      [
        '이게 무슨 뜻인지는 우라라에게 묻지 마. ',
        callname,
        '라면, 스스로 답을 찾을 수 있겠지?',
      ],
      true,
    );
    await urara.say_and_wait([
      '묻지 마, ',
      callname,
      '. 지금은 일단 여기까지만 할까……?',
    ]);
    await era.printAndWait([
      urara.get_teen_sex_title(),
      '의 점차 탁해지는 벚꽃빛 눈동자와 함께, 불결한 애정을 머금고 추악한 씨앗은 요염하고도 비열한 꽃을 피워냈다……',
    ]);
    era.set('abl:52:키스기술', Math.min(era.get('abl:52:키스기술') + 1, 5));
    era.set('abl:52:구강숙련', Math.min(era.get('abl:52:구강숙련') + 1, 5));
    era.set('abl:52:구강내성', Math.min(era.get('abl:52:구강내성') + 1, 5));
    era.set('abl:52:달콤한말', Math.min(era.get('abl:52:달콤한말') + 1, 5));
    await era.printAndWait([
      urara.get_colored_name(),
      '의 ',
      {
        content: '구강 기교',
        color: buff_colors[3],
      },
      '가 더욱 숙련되었다……',
    ]);
    era.set('flag:현재상호작용캐릭터', 52);
  }
};