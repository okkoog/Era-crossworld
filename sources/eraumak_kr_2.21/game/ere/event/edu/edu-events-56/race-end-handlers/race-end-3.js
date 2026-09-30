const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,FukukitaruEduMarks,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.kink_sho] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    const races = RaceHistory.get(56).get();
    if (!check_aim_race(races, race_enum.kiku_sho, 1, 1)) {
      return true;
    }
    if (extra_flag.rank === 1) {
      // 국화상 승리 시
      await print_event_name('빙의된 자', kitaru);
      await kitaru.print_and_wait([
        '여유롭게 승리를 거머쥐었다. 마치 ',
        callname,
        '과 약속했던 것처럼.',
      ]);
      await kitaru.print_and_wait([
        kitaru.get_bigger_sibling_sex_title(),
        '에게 지금 내 상태를 보고하고 싶어.',
      ]);
      await kitaru.say_and_wait([
        '이제 나도 훌륭한 레이스 ',
        kitaru.get_uma_sex_title(),
        '가 되었다구!',
      ]);
      await kitaru.print_and_wait([
        kitaru.get_bigger_sibling_sex_title(),
        '의 묘 앞에서, 나는 ',
        kitaru.get_bigger_sibling_sex_title(),
        '의 묘비를 향해 그렇게 말했다.',
      ]);
      await kitaru.say_and_wait([callname, '은 뭐 하실 말씀 없으세요?']);
      await kitaru.print_and_wait([
        '나는 ',
        callname,
        '이 두 손을 모으고 기도하는 모습을 보았다. 진지한 옆얼굴 너머로 미세하게 달싹이는 입술만이 보였다.',
      ]);
      await me.say_and_wait([
        sys_get_colored_callname(0, 56),
        '의 ',
        kitaru.get_bigger_sibling_sex_title(),
        ', 고마워. 그동안 ',
        sys_get_colored_callname(0, 56),
        '을 지켜봐 줘서!',
      ]);
      await kitaru.print_and_wait([
        '네, ',
        kitaru.get_bigger_sibling_sex_title(),
        '도 분명 기뻐해 줄 거예요!',
      ]);
      era.drawLine({ content: '어느 정도 시간이 흐른 뒤 트레센 학원 기숙사 안'});
      await kitaru.say_and_wait('……');
      await kitaru.print_and_wait('그런 걸까?');
      await kitaru.print_and_wait(
        '청엽상, 일본 더비, 고베 신문배, 국화상, 킨코상……',
      );
      await kitaru.print_and_wait('지금의 나를 달리게 하는 건 대체 무엇일까?');
      await kitaru.say_and_wait([kitaru.get_bigger_sibling_sex_title(), '……']);
      await kitaru.print_and_wait(
        '무심코 바라본 창문이 거울이 되어, 홀로 서 있는 나를 비추었다.',
      );
      await kitaru.print_and_wait('키는 예전보다 컸고, 머리카락도 길어졌다.');
      await kitaru.print_and_wait([
        callname,
        '을 처음 만났을 때보다 훨씬 성숙해진 모습.',
      ]);
      await kitaru.print_and_wait([
        '사진 속의 ',
        kitaru.get_bigger_sibling_sex_title(),
        '와 판박이였다.',
      ]);
      await kitaru.print_and_wait('그럼…… 나는?');
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait('빙의된 빈껍데기……');
      await kitaru.print_and_wait(
        '이유 모를 구역질이 치밀어 올랐고, 위와 창자가 뒤틀리는 듯한 기분이 들었다.',
      );
      era.drawLine({ content: '다음 날 '+ me.name + '의 집무실'});
      era.printButton('「빈껍데기?」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '가 내뱉은 그 결론을 멍하니 되뇌었다. 자신이 ',
        kitaru.get_bigger_sibling_sex_title(),
        '의 영혼에 빙의되었다고 믿는 ',
        kitaru.get_teen_sex_title(),
        '는 불안한 기색으로 방구석에 서 있었다.',
      ]);
      await kitaru.say_and_wait('맞아요. 확실히 제가 제 자신이 아닌 것 같은 기분이 들어요.');
      await kitaru.say_and_wait('말하자면, 그저 몸을 빌려준 것뿐이랄까요? 집념이 깃들 수 있도록요.');
      await kitaru.say_and_wait('저는 사실 아무 생각도 없으니까요.');
      await kitaru.say_and_wait('그저 흘러가는 대로 몸을 맡겼을 뿐이에요.');
      await kitaru.say_and_wait('이런 게…… 정말 제가 이긴 거라고 할 수 있을까요?');
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait('2년 전이라면 차라리 기뻐했을지도 모르겠네요!');
      await kitaru.say_and_wait('하지만 생각해보면……');
      await era.printAndWait([
        kitaru.get_teen_sex_title(),
        '의 떨리는 목소리는 점차 안개처럼 흐릿해졌다.',
      ]);
      era.printButton('「후쿠짱?」', 1);
      await era.input();
      await kitaru.say_and_wait('죄송해요……');
      await kitaru.say_and_wait('잠시 혼자 있게 해주세요.');
      era.set('status:56:PTSD', 1);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 PTSD가 다시 재발했다.',
      ]);
    } else {
      await print_event_name('운이 다하다', kitaru);
      await kitaru.say_and_wait('어라…… 제가 졌다고요……?');
      await kitaru.say_and_wait('제 행운이, 먹히지 않았다고요……?');
      await kitaru.say_and_wait('거짓말이죠! 이럴 리가 없어요! 제 운세는 분명……!');
      await kitaru.say_and_wait([callname, '! 이거 악몽이죠? 그쵸!']);
      await kitaru.say_and_wait('분명, 분명 당신 곁에 있는 저는 대길이어야 한다고요!');
      era.printButton('「이게 현실이야……」', 1);
      await era.input();
      await kitaru.say_and_wait('어째서, 전 제가 완전히 새로 태어난 줄 알았는데!');
      await kitaru.say_and_wait('신령님께 버림받는다면…… 저는…… 저는……!');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 묵묵히 다가가 금방이라도 울음을 터뜨릴 듯한 ',
        kitaru.get_colored_name(),
        '를 품에 안아주었다.',
      ]);
      await kitaru.say_and_wait(['우우우…… ', callname, '……']);
      era.drawLine({ content: '다음 날 '+ me.name + '의 집무실'});
      era.printButton('「빈껍데기?」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.get_colored_name(),
        '가 말한 그 결론을 중얼거렸다. 그 ',
        kitaru.get_teen_sex_title(),
        '는 불안한 듯 방구석에 서 있었다.',
      ]);
      await kitaru.say_and_wait('맞아요, 확실히 제가 제 자신이 아닌 것 같은 기분이 들어요.');
      await kitaru.say_and_wait('말하자면, 그저 몸을 빌려준 것뿐이랄까요? 집념이 깃들 수 있도록요.');
      await kitaru.say_and_wait('저는 사실 아무 생각도 없으니까요.');
      await kitaru.say_and_wait('그저 흘러가는 대로 몸을 맡겼을 뿐이에요.');
      await kitaru.say_and_wait('이런 제가…… 정말로 그 그림자에서 달려 나온 걸까요?');
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        kitaru.get_teen_sex_title(),
        '의 떨리는 목소리는 점차 안개처럼 흐릿해졌다.',
      ]);
      era.printButton('「후쿠짱?」', 1);
      await era.input();
      await kitaru.say_and_wait('죄송해요……');
      await kitaru.say_and_wait('잠시 혼자 있게 해주세요.');
      era.set('status:56:PTSD', 1);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 PTSD가 다시 재발했다.',
      ]);
    }

    era.set('status:56:흉', 1);
    era.set('cflag:56:컨디션', -2);
    era.set('status:56:대길', 0);
    era.set('status:56:소길', 0);
    era.set('status:56:중길', 0);
  };

  handlers[race_enum.takz_kin] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('부활', kitaru);
    await era.printAndWait([
      '관중석에서 터져 나오는, 마치 전쟁의 신만이 낼 법한 거대한 환호성이 ',
      kitaru.get_colored_name(),
      '의 승리를 선포했다.',
    ]);
    await era.printAndWait('뜻이 있는 곳에 길이 있다.');
    await era.printAndWait([
      '깊은 슬럼프를 딛고 일어선 대부활. ',
      kitaru.get_colored_name(),
      '의 오늘 모습은 그 격언의 완벽한 표본이었다.',
    ]);
    era.println();
    era.drawLine({ content: '한신 경기장 대기실 안'});
    await kitaru.say_and_wait([callname, '! 저 이겼어요! 이겼다고요!']);
    era.printButton('「응! 팬들도 정말 기뻐하고 있어!」', 1);
    await era.input();
    await kitaru.say_and_wait('그럼 저희 다음 레이스는 뭐로 할까요?');
    await kitaru.say_and_wait('여름 합숙 기간 동안 느긋하게 생각해보는 게 좋겠네요.');
    await kitaru.say_and_wait(['맞다, ', callname, '!']);
    era.printButton('「왜 그래?」', 1);
    await era.input();
    await kitaru.say_and_wait('제가 가야 할 길에 대해서, 조금은 갈피가 잡힌 것 같아요!');
    await me.say_and_wait('나한테도 알려줄 수 있어?');
    await kitaru.say_and_wait('으음…… 아직은 그저 막연한 예감일 뿐이지만요!');
    if (era.get('love:56') >= 75 && edu_marks.kink_shoKISS === 1) {
      await kitaru.say_and_wait(['하지만 그 길에는 반드시 ', callname, '이 있어야 해요!']);
      await era.printAndWait([
        '그 말을 마친 뒤, 방금 레이스를 마쳐 뺨이 발그레하게 상기된 ',
        kitaru.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 허리를 껴안았다.',
      ]);
      await era.printAndWait([
        '일부러 느슨하게 풀어헤친 승부복 사이로 ',
        kitaru.sex,
        '의 매끄러운 쇄골과 호흡에 맞춰 가늘게 떨리는 가슴팍이 비쳐 보였다.',
      ]);
      await era.printAndWait(
        '시선을 아래로 내리자, 땀에 젖어 서로 비벼지는 하얀 스타킹과 두 다리 사이로 말려 들어간 파란 치마가 보였다.',
      );
      await kitaru.say_and_wait(['저기…… ', callname, '……']);
      await kitaru.say_and_wait([
        '킨코상 때 일은 정말 죄송해요. ',
        callname,
        '께 그런 심한 말을 하고……',
      ]);
      await kitaru.say_and_wait('혹시 괜찮으시다면…… 저를 사죄의 제물로 삼아주세요……');
      era.printButton('받아들인다', 1);
      era.printButton('거절한다', 2);
      if ((await era.input()) === 1) {
        begin_and_init_ero(0, 56);
        await era.printAndWait([
          '승리를 거두고 돌아온 ',
          kitaru.get_colored_name(),
          '를 구석 벽으로 밀어붙였다.',
        ]);
        await kitaru.say_and_wait([callname, '!']);
        await era.printAndWait(
          '땀에 젖은 스타킹, 가슴과 겨드랑이 사이에서 풍겨오는 달콤한 향기를 들이켰다.',
        );
        await era.printAndWait([
          '대기실 모니터에서 흘러나오는 해설자의 평론을 배경음 삼아, 오늘 우승한 레이스 ',
          kitaru.get_uma_sex_title(),
          '의 단련된 육체를 하나하나 음미했다.',
        ]);
        await era.printAndWait([
          '거친 숨소리 속에서 ',
          kitaru.get_colored_name(),
          '의 오른다리를 어깨에 걸쳤다. 어릴 때부터 카구라 춤으로 단련된 ',
          kitaru.sex,
          '는 유연함이 남달랐다.',
        ]);
        await era.printAndWait([
          '내려간 속옷과 타액이 실처럼 엉킨 비소에 성기를 갖다 대자, ',
          me.get_colored_name(),
          '의 담당은 무의식적으로 몸을 떨었으나 이내 오늘의 제물이라는 본분을 떠올리며 저항을 멈추었다.',
        ]);
        await era.printAndWait(
          '삽입이 이루어지자 허리에 매달린 에마가 마치 축복을 빌듯 딸랑거리며 소리를 냈다.',
        );
        await era.printAndWait([
          '가차 없는 피스톤질을 이어갔고, ',
          kitaru.get_colored_name(),
          '가 욕망에 젖은 목소리로 애원하는 것도 아랑곳하지 않았다.',
        ]);
        await era.printAndWait([
          '그대로 안쪽에 사정하며, 늘 애를 먹이던 이 담당의 자궁을 ',
          me.get_colored_name(),
          '의 정액으로 가득 채워 응징했다.',
        ]);
        await era.printAndWait([
          kitaru.sex,
          '의 세일러복 아래 평평한 배가 살짝 부풀어 오를 때쯤 되어서야, 이 녀석이 잠시 후 위닝 라이브를 해야 한다는 사실이 떠올라 멈추었다.',
        ]);
        await era.printAndWait([
          '이어진 라이브 무대에서, 좀처럼 실수하지 않던 ',
          kitaru.get_colored_name(),
          '는 몇 번이나 안무 실수를 저질렀다.',
        ]);
        await era.printAndWait(
          '라이브가 절반도 지나지 않아 새로 갈아입은 무대 의상은 이미 땀으로 흠뻑 젖었고, 가슴과 배 쪽 옷감이 물기에 젖어 몸에 달라붙었으며, 짧은 치마 아래 떨리는 다리 사이로 흘러내리는 액체는 턱을 타고 흐르는 땀방울과 함께 무대 위에 떨어졌다.',
        );
        end_ero_and_train();
      } else {
        await era.printAndWait([
          '거절했다. ',
          me.get_colored_name(),
          '는 ',
          kitaru.get_colored_name(),
          '가 왠지 모르게 볼을 부풀린 채 라이브 대기실로 향하는 뒷모습을 지켜보았다.',
        ]);
      }
    }
  };

  handlers[race_enum.arim_kin] = async (
    kitaru,
    me,
    callname,
    edu_weeks,
    edu_marks,
    extra_flag,
  ) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('복은 지금 이 자리에', kitaru);
    await kitaru.print_and_wait([
      '옛날 옛적에, ',
      kitaru.get_colored_name(),
      '라는 ',
      kitaru.get_uma_sex_title(),
      '가 살았습니다.',
    ]);
    await kitaru.print_and_wait([
      kitaru.sex,
      '는 재능이라고는 눈곱만큼도 없고, 그저 요행으로만 올라가려는 욕심쟁이 ',
      kitaru.get_child_sex_title(),
      '였습니다.',
    ]);
    await kitaru.print_and_wait([
      '하지만 그런 ',
      kitaru.sex,
      '가 아리마 기념을 제패했습니다!',
    ]);
    await kitaru.print_and_wait(['맞아요…… ', kitaru.sex, '는 모든 것을 쏟아부었습니다!']);
    await kitaru.print_and_wait([
      '그 ',
      kitaru.get_child_sex_title(),
      '는 신이 되었고, ',
      kitaru.sex,
      '는 우마무스메의 경지를 뛰어넘어 신역에 도달하여 한 줄기 빛이 되었습니다……',
    ]);
    era.drawLine({ content: '나카야마 경기장 지하 통로'});
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 레이스 후 ',
      me.get_colored_name(),
      '에게 마치 설법이라도 하듯 떠들어댔다.',
    ]);
    await kitaru.say_and_wait([callname, '! 저희 성공했어요!']);
    await kitaru.say_and_wait('행복하신가요?');
    await kitaru.say_and_wait('담당이 저라서 정말 다행이라고 생각하시죠?');
    era.printButton('「당연하지!」', 1);
    await era.input();
    await kitaru.say_and_wait('우와아! 바로 그 말을 듣고 싶었다고요!');
    await me.say_and_wait('욱?!');
    await era.printAndWait([
      '흥분한 ',
      kitaru.get_colored_name(),
      '는 그대로 ',
      me.get_colored_name(),
      '의 품으로 달려들었고, 아랑곳하지 않은 채 몸의 땀을 ',
      me.get_colored_name(),
      '의 셔츠에 묻혔다.',
    ]);
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      '의 레이스 후 달큰하면서도 진한 체취가 ',
      me.get_colored_name(),
      '의 코끝을 찔렀고, 가슴의 부드러운 감촉은 운동 후의 열기 때문에 더욱 생생하게 전해졌다.',
    ]);
    await era.printAndWait([
      '너무나 밀착된 모습에 주변의 다른 우마무스메들과 트레이너들의 시선이 꽂히자, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 등을 가볍게 두드리며 ',
      kitaru.sex,
      '에게 이제 그만 떨어지라는 신호를 보냈다.',
    ]);
    await kitaru.say_and_wait('좋아요, 이 기세 그대로 승자 인터뷰에 참여하러 가죠!');
    era.drawLine({ content: '아리마 기념 종료 후 인터뷰 현장'});
    await kitaru.say_and_wait('오늘! 저는 여기서 이 말을 꼭 해야겠어요!');
    await kitaru.say_and_wait('국화의 무대에 이어서! 나카야마에도 복이 찾아왔습니다!');
    await kitaru.say_and_wait('진심으로 바란다면, 복은 반드시 찾아오는 법이에요!');
    await kitaru.say_and_wait('희망을 잃지 않는다면, 행운은 꼭 당신 곁에 머물 거예요!');
    await kitaru.say_and_wait('그럼! 여러분 모두 새해 복 많이 받으세요!');
    await era.printAndWait([
      '수많은 조명과 카메라 앞에서 소신 있게 말을 마친 ',
      kitaru.get_colored_name(),
      '는 ',
      kitaru.sex,
      '의 상징인 두 손을 하늘로 뻗는 동작으로 마무리하며, ',
      kitaru.sex,
      '에게 소망을 맡긴 모든 팬들에게 행복을 전달했다.',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '의 뒤에서 함께 인터뷰를 마친 ',
      me.get_colored_name(),
      '도 이후 사람들의 염원을 대신 빌어준 ',
      kitaru.get_colored_name(),
      '와 함께 여러 매체의 신문 1면을 장식했다.',
    ]);
  };
};