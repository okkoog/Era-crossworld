// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100700-Gold-Ship/ero-7"),

  // [번역 완료] have_baby
  async have_baby(gs, callname) {
    await gs.say_and_wait([callname, '……']);
    await gs.say_and_wait('평소엔 제대로 입 밖에 내진 않지만……');
    await gs.say_and_wait('지금의 나, 행복해.');
  },

  // [번역 완료] report_preg
  async report_preg(gs, you, taste, minoru, callname) {
    await gs.say_and_wait('……');
    era.println();
    await gs.print_and_wait([
      gs.get_colored_name(),
      '은(는) 변기에 다리를 벌리고 앉아 막대 모양의 물건을 손에 든 채 골똘히 생각하고 있다.',
    ]);
    era.println();
    await gs.print_and_wait(
      '그것은 임신 테스트기다. 소변 속 호르몬 양으로 여성이 임신했는지 확인하는 신기한 도구다.',
    );
    era.println();
    const love = era.get('love:7');
    if (love === 100) {
      if (era.get('relation:7:0') > 0) {
        await gs.say_and_wait([
          callname,
          '은(는) 인정해 주려나…… 뭐, 걔는 올곧은 녀석이니까……',
        ]);
      } else {
        await gs.say_and_wait([
          callname,
          '은(는) 인정해 주려나…… 개자식이긴 하지만……',
        ]);
      }
    } else if (love >= 75) {
      await gs.say_and_wait('생겼어, 우리 사랑의 결실❤️');
    } else if (love >= 50) {
      await gs.say_and_wait('이걸로 그 녀석을 붙잡아 둘 수 있겠지……');
    }
    era.drawLine();
    await gs.say_and_wait([
      '오늘 날씨 좋네——아, 맞다!',
      callname,
      ', 나 임신했어.',
    ]);
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 옆에 서서 자신의 배를 가리켰다.',
    ]);
    era.printButton(
      '「어젯밤에 막 했는데 다음 날 일어나자마자 생겼다고? 그렇게 빨리 될 리가 있냐?」',
      1,
    );
    await era.input();
    await gs.say_and_wait(
      '오오~ 『막 했다』라~! 아니, 농담 아니야. 자, 따끈따끈한 검사 결과.',
    );
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '의 얼굴은 놀랄 만큼 진지했다.',
      you.get_colored_name(),
      '은(는) 반신반의하며 검사기를 받아 든다——결과는 양성. 어떻게 봐도,',
      you.get_colored_name(),
      '이(가) 아버지다.',
    ]);
    era.println();
    await era.printAndWait([
      '담당 ',
      gs.uma_sex_title,
      '을(를) 임신시킨 일은 트레센 상층부에 보고하지 않을 수 없다.',
      taste.get_colored_name(),
      '와(과) ',
      minoru.get_colored_name(),
      '은(는) 드물게 사람 하나 죽일 듯한 눈빛을 보내왔다. 그래도 두 사람은 책임지고, 이제 시작될 육아——그리고 명성에 흠집을 낼 스캔들을 가능한 한 수습해 줄 것이다.',
    ]);
    era.println();
    await era.printAndWait('물론, 실제로 가능한지는 또 다른 문제다.');
  },
};
