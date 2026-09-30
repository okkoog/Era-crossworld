/**
 * @file 골드 쉽 - 지하실
 * @author 雞雞
 */
const era = require('#/era-electron');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

/**
 * @param {CharaTalk} gold_ship
 * @param {CharaTalk} me
 */
async function ask_release_common(gold_ship, me) {
  await era.printAndWait([
    me.get_colored_name(),
    '의 떠나고 싶다는 요청을 듣고, 의자 등받이에 기대어 ',
    me.get_colored_name(),
    '과(와) 함께 게임을 하고 있는 ',
    gold_ship.get_colored_name(),
    '은 눈살을 찌푸렸다.',
  ]);
  era.println();
  await gold_ship.say_and_wait('에~~?');
  await gold_ship.say_and_wait('여긴 물도 맑고 모래도 고우며 바람도 시원하고 물도 차가운데, 왜 굳이 나가려고 하는데?');
  era.println();
}

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const gold_ship = get_chara_talk(7),
      me = get_chara_talk(0);
    await ask_release_common(gold_ship, me);
    await era.printAndWait([
      gold_ship.get_colored_name(),
      '은 잠시 생각하더니, 마지못해 중얼거렸다.',
    ]);
    era.println();
    await gold_ship.say_and_wait('정말 신경 쓰이는 녀석이네……');
    await gold_ship.say_and_wait('그럼 우리 나중에 장보러 가자.');
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '아, 맞다…… 갓 잡은 장어와 찹쌀밥을 먹고 싶어!' },
    ]);
    era.println();
    await era.printAndWait([
      '그 후, 억지로라도 다시 모습을 드러낸 ',
      gold_ship.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '에게 맛있는 저녁 한 끼를 챙겨준 뒤에야 비로소 풀어주었다.',
    ]);
  }

  async ask_release_reject() {
    const gold_ship = get_chara_talk(7),
      me = get_chara_talk(0);
    await ask_release_common(gold_ship, me);
    await era.printAndWait([
      '아마도 이 주제를 피하고 싶은지, ',
      gold_ship.get_colored_name(),
      '은 순식간에 다시 화면 속 격렬한 전투 상황에 주의를 돌렸다.',
    ]);
    era.println();
    await gold_ship.say_and_wait('쓸데없는 소리 말고, 빨리 벌레 둥지 폭군을 처리해 줘!');
    await gold_ship.say_and_wait('아아아, 광역기에 맞았어!');
    era.println();
    await era.printAndWait([
      '보아하니 ',
      gold_ship.get_colored_name(),
      '이 지루해질 때 까지는 나갈 수 없을 것 같다.',
    ]);
  }

  async ask_time(date, hours, minutes) {
    const gold_ship = get_chara_talk(7),
      me = get_chara_talk(0),
      life_marks = LifeEventMarks.get_marks(this.id);
    await era.printAndWait([
      '보아하니 ',
      me.get_colored_name(),
      '은(는) ',
      gold_ship.get_colored_name(),
      '이 지루해질 때 까지는 나갈 수 없을 것 같다.',
    ]);
    era.println();
    await gold_ship.say_and_wait([
      { color: chara_colors[1], content: '지금 몇시야?' },
    ]);
    if (life_marks.b_s_level > 3) {
      await gold_ship.say_and_wait('도박장에 시계가 없는 이유를 알아?');
      await gold_ship.say_and_wait('모르겠어? 그럼 이제 알겠네.');
    } else {
      await gold_ship.say_and_wait([
        { color: chara_colors[1], content: '삐삐~~' },
      ]);
      await gold_ship.say_and_wait([
        {
          color: chara_colors[1],
          content: `현재 시각은~~${CustomizedBase.get_cur_time(hours, minutes, true)} 입니다~~`,
        },
      ]);
    }
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (is_back) {
      const gold_ship = get_chara_talk(7),
        me = get_chara_talk(0);
      era.print([me.get_colored_name(), '은 불안한 마음으로 어두운 통로를 지나가고 있다……']);
      era.println();
      gold_ship.say([{ color: chara_colors[1], content: '후……하……후……하……' }]);
      era.println();
      era.print([
        '출구에 거의 다다랐을 무렵, ',
        me.get_colored_name(),
        '의 거친 숨소리가 들려왔다.',
      ]);
      era.print('숨소리가 너무 커서, 마치 일부러 연기하는 게 아닌가 하는 생각이 들 정도였다.');
      era.print([
        '그러다 눈부신 붉은 빛이 번쩍였다. 알고 보니 다◯ 베이더 복장을 한 ',
        gold_ship.get_colored_name(),
        '이 검은 가면을 쓰고, 핏빛 라이트세이버를 든 채 오랫동안 기다리고 있었던 것이었다!',
      ]);
    } else {
      super.find_escape(out_of_prison, s_level_up, is_back);
    }
  }
};
