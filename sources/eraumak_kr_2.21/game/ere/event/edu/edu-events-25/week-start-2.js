const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject)>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[95 + 19] = async (coffee, me, callname, flags) => {
    await print_event_name('이별', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      '와 논의를 거친 끝에, ',
      me.get_couple_title(),
      '은 정식으로 해외 원정을 결정했다. 참가할 레이스는 프랑스 G1 레이스인 ',
      race_infos[race_enum.prix_lat].get_colored_name(),
      '.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 오늘 이 공항에서 출발하며, ',
      me.get_colored_name(),
      '도 동행하여 두 사람이 함께 이 도전에 맞서기로 했다.',
    ]);
    await coffee.say_and_wait([
      '가요, ',
      callname,
      '. 하늘 저편에 있는 친구를 따라잡기 위해서……',
    ]);
    era.printButton('「……잠시만 기다려 줘.」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 고개를 갸우뚱하며 ',
      me.get_colored_name(),
      '을(를) 바라보았다. ',
      me.get_colored_name(),
      '이(가) 떠나기 직전에 무엇을 하려는 것인지 잘 모르는 눈치다.',
    ]);
    await me.say_and_wait('프랑스 원정은 보통 일이 아니야. 출발하기 전에 다시 한번 상황을 정리할 필요가 있어……');
    await me.say_and_wait(
      '해외 경기장은 국내와는 완전히 다르고, 환경 변화와 장시간의 여정까지 고려하면, 너의 몸 상태를 확실히 체크해야 해……',
    );
    await coffee.say_and_wait('새삼스럽게 이제 와서 그런 걸 고민한다면…… 저도……');
    era.printButton('저지한다', 1);
    await era.input();
    await me.say_and_wait('마지막으로, 잠시 트레이너라는 신분을 내려놓고 말할게…… 난 네가 가지 않았으면 좋겠어.');
    await coffee.say_and_wait(
      '……왜죠? 저희…… 분명 약속했잖아요, 그렇죠? ……함께 친구를 따라잡기 위해 계속 나아가기로?',
    );
    await me.say_and_wait('카페…… 너에 관한 일은 언제나 나에게 최우선 사항이야……');
    await me.say_and_wait(
      '너의 꿈을 이루기 위해서라면, 비록 그 꿈과 함께 몰락하더라도 난 기꺼이 받아들일 수 있어……',
    );
    await me.say_and_wait(
      '하지만…… 이건 되돌릴 수 없는 도박이야. 만약 실패한다면, 너의 레이스 인생은…… 그걸로 끝이야.',
    );
    await era.printAndWait(
      '만약 두 사람이 지금까지 쌓아온 노력이, 결국 모든 것의 「끝」을 맞이하기 위한 것이라면……',
    );
    await era.printAndWait([
      '만약 꿈을 쫓기 위해 ',
      coffee.get_colored_name(),
      '가 다른 모든 것을 잃어야만 한다면……',
    ]);
    await era.printAndWait([
      '그렇다면 ',
      coffee.get_colored_name(),
      '의 성공과 미래가, 이른바 꿈이라는 것보다 훨씬 더 중요하다.',
    ]);
    era.printButton('「그러니, 해외 원정은…… 취소하자.」', 1);
    await era.input();
    await coffee.say_and_wait('…………');
    await coffee.say_and_wait('그렇군요…… 그렇다면……');
    if (era.get('love:25') > 75) {
      await coffee.say_and_wait('작별 인사를 해야겠네요…… 저의 사랑하는 사람……');
    } else {
      await coffee.say_and_wait(['작별 인사를 해야겠네요…… ', callname, '……']);
    }
    era.println();
    await coffee.say_and_wait(
      '전 당신만은 다를 거라고 생각했어요…… 당신만이 내 꿈을 정면으로 바라봐 주었고…… 당신만이 내 세계에 들어와 주었다고……',
    );
    await coffee.say_and_wait('하지만 결국…… 저만의 착각이었나요……');
    era.println();
    await coffee.say_and_wait('괜찮아요…… 상관없어요. 이제부터는…… 저 혼자서도 할 수 있어요……');
    await coffee.say_and_wait('괜찮아요…… 상관없어요. 그저 원래 상태로 돌아가는 것뿐이니까……');
    await coffee.say_and_wait('전 반드시 친구를 따라잡을 거예요. 그러니까——');
    era.println();
    await coffee.say_and_wait('……안녕히 계세요.');
    era.println();
    await era.printAndWait([
      '냉정하게 작별을 고하고는, 등을 보인 채 뒤돌아 떠나간다. ',
      coffee.get_colored_name(),
      '는 피맺힌 한마디로 ',
      me.get_couple_title(),
      ' 사이의 관계를 끊어내려 했다—— 아니, 피맺힌 것은 말뿐만이 아니었다.',
    ]);
    await era.printAndWait([
      '어느샌가 ',
      coffee.get_colored_name(),
      '의 발가락에서 피가 배어 나왔고, ',
      coffee.sex,
      '가 뻗은 손가락 끝에서도 피가 흐르고 있었다.',
    ]);
    era.println();
    await coffee.say_and_wait('왜 움직이지 않는 거지…… 내…… 발이……');
    await coffee.say_and_wait('……왜? 분명 난…… 가야만 하는데……');
    await coffee.say_and_wait('가지 않으면, 친구가……');
    await coffee.say_and_wait('친구가…… 사라져 버릴 거야……');
    await coffee.say_and_wait('움직이지 않는다고 해도, 난……!!');
    if (new CoffeeEduMarks().horse) {
      era.println();
      await era.printAndWait(['——', coffee.sex, '를 저지해야 해.']);
      await era.printAndWait([
        '알 수 없는 의념이 다시 한번 ',
        me.get_colored_name(),
        '의 뇌리에 스쳤다—— 하지만 말할 것도 없이 ',
        me.get_colored_name(),
        '은(는) 이미 몸을 움직이고 있었다……!',
      ]);
    }
    era.println();
    if (check_tachyon_plan_b()) {
      const tachyon = get_chara_talk(32),
        t_call_c = sys_get_colored_callname(32, 25);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 달려 나가기도 전에, 예상치 못한 인물이 ',
        coffee.get_colored_name(),
        '의 곁에 나타나 ',
        coffee.sex,
        '의 떨리는 어깨를 붙잡았다.',
      ]);
      await tachyon.say_and_wait([
        '정말 보기 흉하군, ',
        t_call_c,
        '. 그렇게까지 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '에 참가하고 싶은 건가?',
      ]);
      await coffee.say_and_wait('……!?');
      era.printButton('「타키온!? 네가 왜 여기에?」', 1);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 웬일인지 몰래 공항까지 따라왔고, ',
        me.get_couple_title(),
        '의 대화를 지켜보다가 현장에 끼어든 것이었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 달려가서 ',
        coffee.get_colored_name(),
        '가 억지로 움직이는 것을 막고, 한쪽 팔을 겨드랑이 사이로, 다른 한쪽 팔을 다리 아래로 넣어 ',
        coffee.sex,
        '를 공주님 안기로 들어 올렸다.',
      ]);
      await tachyon.say_and_wait(
        '『왜 여기에 있느냐』니, 자신의 실험 대상의 동향을 파악하는 것쯤은 당연한 일 아닌가?',
      );
      await coffee.say_and_wait('……당신은 아무것도 모르면서…… 왜 자꾸 사사건건 끼어드는 거죠……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 품 안에서 잠시 저항하다가 이내 포기하고, ',
        tachyon.get_colored_name(),
        '을 향해 한마디를 내뱉었다.',
      ]);
      await tachyon.say_and_wait(
        '이런 꼴을 하고서도 강행군을 하겠다니, 그래서 보기 흉하다고 하는 거네……',
      );
      await tachyon.say_and_wait([
        '그토록 간절히 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '에 참가하고 싶다면—— 내가 대신 나가주는 건 어떻겠나?',
      ]);
      await coffee.say_and_wait('……방금, 뭐라고 했죠?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 발언에 ',
        me.get_colored_name(),
        '의 품에 안긴 ',
        coffee.get_colored_name(),
        '는 큰 충격을 받았다. ',
        coffee.sex,
        '는 이런 이야기는 들어본 적도 없었다.',
      ]);
      await tachyon.say_and_wait([
        '과학자는 결코 무의미한 일은 하지 않아. ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '에 참가하는 건 나름의 계획이 있어서라고…… 아, 물론 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '도 참가할 생각이네.',
      ]);
      await tachyon.say_and_wait(
        '게다가, 자네가 말하는 그 친구라는 존재에게도 늘 흥미가 있었거든. 내가 자네 대신 친구를 따라잡아 보겠네, 어떤가?',
      );
      await coffee.say_and_wait('어째서…… 친구가, 동의한 거죠……');
      await coffee.say_and_wait('그리고 몸의 이상도…… 점점 회복되고 있어……');
      await coffee.say_and_wait('하지만…… 하지만 전…… 앞으로 어떻게 해야……');
      await coffee.say_and_wait('으, 으으으…… 으으윽……');
      await era.printAndWait([
        '울고 있는 ',
        coffee.get_colored_name(),
        '를 안고, ',
        me.get_couple_title(),
        ' 세 사람은 함께 트레센으로 돌아가는 길에 올랐다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 해외 원정은 출발 직전에 취소되었고, 다음 목표는 국내의 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '으로 다시 변경되었다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        tachyon.get_colored_name(),
        '은 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '이 끝난 뒤 프랑스로 건너가 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '에 참가하게 될 것이다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 달려가서 ',
        coffee.get_colored_name(),
        '가 억지로 움직이는 것을 막고, 한쪽 팔을 겨드랑이 사이로, 다른 한쪽 팔을 다리 아래로 넣어 ',
        coffee.sex,
        '를 공주님 안기로 들어 올렸다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 품 안에서 저항하지 않았다. 마치 영혼이 몸에서 빠져나간 것처럼…… 한참이 지나서야 ',
        coffee.sex,
        '는 다시 반응을 보였다.',
      ]);
      await coffee.say_and_wait('아무래도…… 방법이 없는 모양이네요……');
      await coffee.say_and_wait(['그저 ', callname, '의 말대로…… 원정을 취소할 수밖에요……']);
      await coffee.say_and_wait('하지만…… 하지만 전…… 앞으로 어떻게 해야……');
      await coffee.say_and_wait('으, 으으으…… 으으윽……');
      await era.printAndWait([
        '울기 시작한 ',
        coffee.get_colored_name(),
        '를 안고, ',
        me.get_colored_name(),
        '은(는) 트레센으로 돌아가는 길에 올랐다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 해외 원정은 출발 직전에 취소되었고, 다음 목표는 국내의 ',
        race_infos[race_enum.takz_kin].get_colored_name(),
        '으로 변경되었다.',
      ]);
    }
    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      [0, 10],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(25, -1) || flags.wait_flag;
  };

  handlers[95 + 29] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:25:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('여름 합숙(시니어 시즌) 시작', coffee);
    await era.printAndWait('여름 합숙으로 향하는 버스 안.');
    await era.printAndWait([
      '이번 여름 합숙을 거친 뒤에 ',
      coffee.get_colored_name(),
      '를 기다리고 있는 것은 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '이다. 비록 11월까지는 아직 멀어 보이지만, 방심했다간 열세에 몰릴 수 있다. 아직 참가가 확실치 않은 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '까지 고려하면 더욱 그렇다.',
    ]);
    await era.printAndWait('그러니 이번 여름 합숙의 주요 목표는 푹 쉬는 거야——');
    era.printButton('「——알겠어, 카페? ……카페?」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '의 옆에 앉아 있던 ',
      coffee.get_colored_name(),
      '는 어느샌가 고개를 ',
      me.get_colored_name(),
      '의 어깨에 기댄 채 조용히 잠들어 있었다. 몸이 차량의 흔들림에 따라 가볍게 흔들린다.',
    ]);
    await era.printAndWait([
      '살짝 자세를 고쳐 잡고, ',
      coffee.sex,
      '가 더 편하게 잘 수 있도록 해주었다.',
    ]);
    await coffee.say_and_wait('………………으음……');
    await era.printAndWait('정말 귀여운 자는 얼굴이다.');
    await era.printAndWait([
      me.get_colored_name(),
      '도 졸음이 밀려와, ',
      coffee.get_colored_name(),
      '와 서로 의지한 채 잠이 들었다……',
    ]);
  };

  handlers[143 + 1] = async (coffee, me) => {
    await print_event_name('정적의 계승자', coffee);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 트윙클 시리즈 초기 3년 동안 엄청난 성공을 거두었다.',
    ]);
    await era.printAndWait([
      '눈앞에 즐비한 트로피들은 마치 고층 건물이 늘어선 거리 같다. 하지만 ',
      coffee.sex,
      '의 활약은 여기서 멈추지 않았다——',
    ]);
    await coffee.say_and_wait('오늘도…… 손님이 많네요…… 그래서…… 상담하고 싶은 건 무엇인가요……?');
    await era.printAndWait([
      '어느샌가 경기장에서의 모습 때문에…… ',
      coffee.get_colored_name(),
      '는 많은 ',
      coffee.get_uma_sex_title(),
      '들의 동경을 받게 되었다.',
    ]);
    await say_by_passer_by_and_wait(
      `${coffee.get_uma_sex_title()} A`,
      '저기~ 카페 선배…… 어떻게 하면 더트에서 잘 달릴 수 있는지 알려주세요. 전 매번 잘 안돼서……',
    );
    await coffee.say_and_wait('더트…… 그렇군요……');
    await coffee.say_and_wait('제 생각엔…… 너무 힘을 주지 않는 게 좋을 것 같아요.');
    await coffee.say_and_wait('마치 모래 속에서…… 시계추를 흔드는 것처럼……');
    await say_by_passer_by_and_wait(
      `${coffee.get_uma_sex_title()} B`,
      '다음은 저요! 이번에 도주 주법에 도전해 보려고 하는데, 혹시 비결이 있을까요!?',
    );
    await coffee.say_and_wait('도주…… 제가 그리 잘하는 건 아니지만……');
    await coffee.say_and_wait(
      '가장 중요한 건…… 마음가짐이에요…… 무게 중심을 어디에 두느냐…… 각질이란, 결국 마음가짐의 발현이니까요……',
    );
    await coffee.say_and_wait('이렇게 하면…… 조금이라도 영감을 얻을 수 있을까요?');
    await say_by_passer_by_and_wait(
      `${coffee.get_uma_sex_title()}들`,
      '네! 정말 감사합니다!!',
    );
    await coffee.say_and_wait('그럼…… 커피라도 한 잔 마시고 갈래요?');
    await say_by_passer_by_and_wait(
      `${coffee.get_uma_sex_title()}들`,
      '……네!',
    );
    await era.printAndWait([
      '수많은 ',
      coffee.get_uma_sex_title(),
      '들의 질문 공세에도 ',
      coffee.get_colored_name(),
      '는 모두에게 영감이 가득한 조언을 건넸고, 실제로 ',
      coffee.sex,
      '들에게 큰 도움이 되었다.',
    ]);
    await era.printAndWait([
      '이 점은 트레이너인 ',
      me.get_colored_name(),
      '조차 스스로 부끄러워질 정도였다.',
    ]);
    era.drawLine();
    await coffee.say_and_wait([
      '하아, 하아…… ',
      sys_get_callname(25, 0),
      '…… 실례가 안 된다면 제 달리기를 다시 한번 지켜봐 주실 수 있나요?',
    ]);
    await coffee.say_and_wait(
      '오늘은 새로운 주법을 시도해 보고 싶어요. 다른 사람들에게…… 참고가 될 수 있도록……',
    );
    era.printButton('「후배들을 위해서야?」', 1);
    await era.input();
    await coffee.say_and_wait(
      '네…… 요즘 들어 문득 그런 생각이 들어요. 앞에 있는 친구를 따라잡는 것도 물론 중요하지만……',
    );
    await coffee.say_and_wait([
      '동시에…… 뒤에서 자신을 쫓아오는 ',
      coffee.get_uma_sex_title(),
      '들에게 지지를 보내는 것도 중요하다고.',
    ]);
    await coffee.say_and_wait(
      '전…… 친구처럼 빠르지는 않아요…… 하지만 그렇더라도, 조용히 도움을 주고 싶어요……',
    );
    await coffee.say_and_wait([
      '조용히 두 팔을 벌려…… 언젠가 미래에, 모든 ',
      coffee.get_uma_sex_title(),
      '들을 도울 수 있는 존재가 되고 싶어요……',
    ]);
    await era.printAndWait('——슈슉.');
    await era.printAndWait([
      '갑자기 ',
      me.get_colored_name(),
      '의 눈앞에 무언가 빠른 속도로 지나갔다. 비록 본 적은 없지만, ',
      me.get_colored_name(),
      '의 뇌리에는…… 「친구」라는 단어가 떠올랐다.',
    ]);
    era.printButton('「……카페, 친구는 지금 어디에 있어?」', 1);
    await era.input();
    await coffee.say_and_wait('친구라면, 바로 저기에…… 에? 사라졌어……');
    await era.printAndWait('——슈슉.');
    era.printButton(`「카페, 네가…… 바로 ${coffee.get_uma_sex_title()}의……」`, 1);
    await era.input();
    await era.printAndWait([
      '마치…… 「인자」의 목소리가 들린 것 같았다. ',
      coffee.get_uma_sex_title(),
      ' 인자의 목소리가 귓가에서 계속 맴돌고 있었다……',
    ]);
    await era.printAndWait([
      '그렇다, ',
      coffee.sex,
      '——',
      coffee.get_colored_name(),
      '는 바로——',
    ]);
    era.drawLine();
    await era.printAndWait([
      '어느 ',
      coffee.get_uma_sex_title(),
      '에 관한 우화가 하나 있다.',
    ]);
    await era.printAndWait([
      '그 ',
      coffee.get_uma_sex_title(),
      '는 거의 궁극에 가까운 속도를 지녔으며, ',
      coffee.get_colored_name(),
      '와 매우 닮았다고 전해진다.',
    ]);
    await era.printAndWait([
      '어쩌면 ',
      coffee.get_colored_name(),
      '는…… 줄곧 하나의 꿈속에 있었던 것일지도 모른다.',
    ]);
    await era.printAndWait([
      '그 궁극의 ',
      coffee.get_uma_sex_title(),
      '가 눈앞에 나타나, ',
      coffee.get_colored_name(),
      '가 「',
      coffee.sex,
      '가 되어, 그리고 ',
      coffee.sex,
      '를 뛰어넘기를」 기대하는 그런 꿈을……',
    ]);
  };

  /** @this CustomizedEdu */
  handlers.palace = async function (coffee, me, callname) {
    await CustomizedEdu.common_palace(coffee, me);
    const races = RaceHistory.get(25).get();
    if (
      check_aim_race(races, race_enum.kiku_sho, 1, 1) &&
      check_aim_race(races, race_enum.tenn_spr, 2, 1) &&
      check_aim_race(races, race_enum.arim_kin, 2, 1) &&
      era.get('relation:25:0') > 375 &&
      era.get('love:25') >= 75
    ) {
      era.drawLine();
      era.set('flag:현재위치', location_enum.gate);
      await print_event_name('낙원', coffee);
      era.set('flag:현재위치', location_enum.office);
      await coffee.print_and_wait([
        '만화경처럼 찬란한 빛을 내뿜는 하늘과 땅, 마치 꿈처럼 황금빛 윤기가 넘쳐흐르는 거대한 톱니바퀴……',
      ]);
      await coffee.print_and_wait('여긴…… 꿈의 세계인가?');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 주위를 둘러보았지만, 눈앞의 풍경은 ',
        coffee.sex,
        '에게 결코 낯설지 않았다.',
      ]);
      era.println();
      await coffee.print_and_wait([
        '수많은 밤 동안, ',
        coffee.sex,
        '는 이 몽환적인 세계를 탐색해 왔다. ',
        coffee.sex,
        '는 무지개를 향해 뛰어드는 비행 고래를 보았고, 보석처럼 화려한 날개를 가진 거룡을 보았으며, 밤낮으로 뒤쫓던 ',
        coffee.sex,
        '가 「친구」라고 부르는 존재도 만났었다.',
      ]);
      await coffee.print_and_wait([
        '그럼 오늘은, ',
        coffee.sex,
        '는 또 무엇을 보게 될까?',
      ]);
      era.println();
      await coffee.print_and_wait(
        '한 그림자가 파도처럼 눈앞에서 떠올랐다. 검은 긴 머리, 하얗게 솟은 유성, 익숙한 승부복……',
      );
      era.println();
      await coffee.say_and_wait(['당신은……']);
      era.println();
      await coffee.print_and_wait([
        '물음 소리를 듣고 손님이 고개를 돌렸다. ',
        coffee.get_colored_name(),
        '가 본 것은 마치 거울을 보는 것처럼 자신과 똑 닮은 ',
        coffee.get_uma_sex_title(),
        '였다.',
      ]);
      era.println();
      await coffee.print_and_wait('——친구.');
      await coffee.print_and_wait([
        '가장 먼저 ',
        coffee.get_colored_name(),
        '의 머릿속에 떠오른 것은 바로 이 단어였다.',
      ]);
      era.println();
      await coffee.print_and_wait(['——하지만 ', coffee.sex, '는 친구가 아니다.']);
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        '는 확신할 수 있었다. 상대는 친구도 괴이도 아닌, 자신과 똑같이 살아있는 존재이자 꿈속에 나타난 누군가라는 것을.',
      ]);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「……자신과 똑같은 존재를 보고도 놀라지 않는 건가?」',
      );
      era.println();
      await coffee.print_and_wait(['——목소리조차 자신과 똑같았다.']);
      era.println();
      await coffee.say_and_wait(['……전 여기서 저와 비슷한 사람을 본 적이 있거든요. 당신은요?']);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「아마 직업상의 이유로 거울을 보는 게 익숙해서일지도 모르겠네…… 여기엔 자네 혼자뿐인가?」',
      );
      era.println();
      await coffee.say_and_wait([
        '……저 말고도 가끔 친구가 있긴 하지만, 다른 사람을 보는 건 처음이에요…… 잠시 이야기라도 하는 건 어떨까요, 만난 것도 인연인데……',
      ]);
      era.println();
      await coffee.print_and_wait([
        '또 다른 카페 「인연이라…… 우리 ',
        coffee.get_uma_sex_title(),
        '에게 참 잘 어울리는 단어군. 우리 ',
        coffee.get_uma_sex_title(),
        '는 운명에 이끌리는 존재가 아닌가?」',
      ]);
      era.println();
      await coffee.print_and_wait([
        '——뭐랄까…… 겉모습은 자신과 똑같지만, 성격은 미묘하게 달랐다.',
      ]);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「……운명이라니, 정말 귀찮군…… 제멋대로 우리를 속박하고 말이야.」',
      );
      era.println();
      await coffee.say_and_wait(
        '……그러게요. 돌이켜보면 저도 계속 속박되어 있었을지도 몰라요…… 친구를 따라잡고, 친구를 뛰어넘는 것 또한 운명의 인도였을지도요.',
      );
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「자네의 목표는 따라잡을 수 없는 친구를 뛰어넘는 것인가?」',
      );
      era.println();
      await coffee.say_and_wait(['……이상하죠……']);
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「아니, 우린 많이 닮았어…… 난 『낙원』을 찾고 싶어. 도달할 수 없는 낙원으로 향하고 싶지…… 하지만 너무 멀군. 방향을 알고 있어도 시선조차 닿지 않을 정도로……」',
      );
      era.println();
      await coffee.say_and_wait(
        '네, 저도 그래요…… 친구는 저를 행복으로 이끌어 줄 사람이라, 과거의 저는 그를 위해 친구를 따라잡기를 갈망했죠…… 하지만 제가 쫓아가면 쫓아갈수록 친구는 더 빨리 달려나갔어요……',
      );
      era.println();
      await coffee.print_and_wait(
        '또 다른 카페 「과거의 너…… 라는 말은 지금의 너는 이미 친구를 따라잡았다는 뜻인가?」',
      );
      era.println();
      await coffee.say_and_wait('아니요…… 전 이제 인도가 필요 없으니까요……');
      era.println();
      await coffee.print_and_wait([
        '꿈의 세계에서 빛이 서서히 흐릿해졌다. 이제 꿈에서 깰 시간인 걸까?',
      ]);
      era.println();
      await coffee.print_and_wait([
        '또 다른 카페 「……여기서 작별해야겠군. 잘 가게, 이쪽의 ',
        coffee.get_colored_name(),
        '.」',
      ]);
      era.println();
      await coffee.say_and_wait([
        '당신도 몸조리 잘하세요, 저쪽의 ',
        coffee.get_colored_name(),
        '……',
      ]);
      era.drawLine();
      era.printButton('일어났어, 카페? 꿈이라도 꾼 거야?', 1);
      await era.input();
      era.println();
      await coffee.print_and_wait([
        '다시 눈을 떴을 때, ',
        coffee.get_colored_name(),
        '의 눈앞에 나타난 것은 가장 익숙한 얼굴…… 늘 곁에서 자신을 지켜주는, 행복을 상징하는 얼굴이었다.',
      ]);
      await coffee.print_and_wait([
        '——기억났다…… 내가 ',
        callname,
        '과 밤을 새우느라 너무 지쳐서 잠들었던가?',
      ]);
      era.println();
      await coffee.say_and_wait([
        '네…… 아주 재미있는 꿈을 꿨어요…… 시간이 나면 ',
        callname,
        '에게 들려드릴게요……',
      ]);
      era.println();
      await coffee.print_and_wait(
        '——전 낙원 같은 걸 찾아 떠나지 않을 거예요. 왜냐하면…… 전 이미 가장 행복한 곳에 있으니까요.',
      );
    } else {
      await CustomizedEdu.common_palace_relation(coffee, me);
    }
  };
};