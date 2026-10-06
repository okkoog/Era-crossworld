// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const chara_colors = require('#/data/chara-colors').chara_colors[7];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100700-Gold-Ship/base-7"),

  // [번역 완료] ask_release_agree
  async ask_release_agree(gs, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 돌아가고 싶다고 말을 꺼내자, 의자 등받이에 기대어 ',
      you.get_colored_name(),
      '와(과) 함께 게임을 하던 ',
      gs.get_colored_name(),
      '은(는) 눈살을 찌푸렸다.',
    ]);
    era.println();
    await gs.say_and_wait('아——?');
    await gs.say_and_wait(
      '여기 물도 맑고 모래도 부드럽고 바람도 시원하고 물도 차가운데, 굳이 왜 밖에 나가야 하는데?',
    );
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '은(는) 잠시 생각하더니 내키지 않는 듯 중얼거렸다.',
    ]);
    era.println();
    await gs.say_and_wait('정말, 손이 많이 가는 녀석이라니까……');
    await gs.say_and_wait('그럼 시장에서 장 보고 돌아가자고.');
    await gs.say_and_wait([
      {
        color: chara_colors[1],
        content: '아, 맞다…… 살아 있는 장어에 팥밥이 좋아!',
      },
    ]);
    era.println();
    await era.printAndWait([
      '그 뒤 ',
      gs.get_colored_name(),
      '은(는) 마침내 지상으로 나온 ',
      you.get_colored_name(),
      '에게 맛있는 저녁 한 끼를 추가로 얻어먹고 나서야 비로소 정식으로 풀어주었다.',
    ]);
  },

  // [번역 완료] ask_release_reject
  async ask_release_reject(gs, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 돌아가고 싶다고 말을 꺼내자, 의자 등받이에 기대어 ',
      you.get_colored_name(),
      '와(과) 함께 게임을 하던 ',
      gs.get_colored_name(),
      '은(는) 눈살을 찌푸렸다.',
    ]);
    era.println();
    await gs.say_and_wait('아——?');
    await gs.say_and_wait(
      '여기 물도 맑고 모래도 부드럽고 바람도 시원하고 물도 차가운데, 굳이 왜 밖에 나가야 하는데?',
    );
    era.println();
    await era.printAndWait([
      '아마 이 이야기를 피하고 싶은 것인지,',
      gs.get_colored_name(),
      '은(는) 순식간에 화면 속 격렬한 전투로 시선을 돌렸다.',
    ]);
    era.println();
    await gs.say_and_wait('쓸데없는 소리 말고 벌레 둥지의 폭군이나 잡아!');
    await gs.say_and_wait('아아아아 범위기 맞았다——!');
    era.println();
    await era.printAndWait([
      gs.get_colored_name(),
      '이(가) 질릴 때까지는 여기서 나갈 수 없을 것 같다.',
    ]);
  },

  // [번역 완료] ask_time
  async ask_time(gs, you, cur_time, security_level) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      gs.get_colored_name(),
      '에게 지금 시각을 물었다……',
    ]);
    era.println();
    await gs.say_and_wait([
      { color: chara_colors[1], content: '지금 몇 시?' },
    ]);
    if (security_level > 3) {
      await gs.say_and_wait('카지노에 시계가 없는 이유, 아냐?');
      await gs.say_and_wait('몰라? 그럼 이제 알았네.');
    } else {
      await gs.say_and_wait([
        { color: chara_colors[1], content: '뚜뚜~~' },
      ]);
      await gs.say_and_wait([
        {
          color: chara_colors[1],
          content: `현재 시각은~~${cur_time}~~`,
        },
      ]);
    }
  },

  // [번역 완료] find_escape
  find_escape(gs, you) {
    era.print([
      you.get_colored_name(),
      '은(는) 불안한 걸음으로 어두운 통로를 나아간다……',
    ]);
    era.println();
    gs.say([{ color: chara_colors[1], content: '후…… 하…… 후…… 하……' }]);
    era.println();
    era.print([
      '출구 바로 앞에서,',
      you.get_colored_name(),
      '은(는) 거친 숨소리를 들었다.',
    ]);
    era.print('그 소리가 어찌나 큰지 일부러 연기하는 게 아닐까 싶을 정도다.');
    era.print([
      '그리고 눈을 찌르는 붉은 빛이 켜진다. 무려 검은 가면에 붉은 광선검, 다스 베이더풍의 ',
      gs.get_colored_name(),
      '이(가) 한참 전부터 기다리고 있었던 것이다아!',
    ]);
  },
};
