/**
 * @file 골드 쉽 - 조교
 * @author 雞雞
 */
const era = require('#/era-electron');

const CustomizedEro = require('#/event/ero/ero-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedEro {
  async report_pregnant_between_weeks(
    gold_ship,
    me,
    callname,
    hook,
    extra_flag,
  ) {
    if (extra_flag.mother_id !== 7) {
      return super.report_pregnant_between_weeks(
        gold_ship,
        me,
        callname,
        hook,
        extra_flag,
      );
    }
    era.drawLine();
    await gold_ship.say_and_wait('……');
    era.println();
    await gold_ship.print_and_wait([
      gold_ship.get_colored_name(),
      '은 변기에 거침없이 앉아, 손에 막대 모양의 물건을 들고 생각에 잠겨 있다.',
    ]);
    era.println();
    await gold_ship.say_and_wait(
      '그건 임신 테스트기야. 소변 속 호르몬 농도를 측정해서 여성이 임신했는지 확인하는 신기한 도구지.',
    );
    era.println();
    const love = era.get('love:7');
    if (love === 100) {
      await gold_ship.say_and_wait(
        `${callname}이 인정해 줄까...${
          era.get('relation:7:0') > 0
            ? '이런 나지만……'
            : '그래도 그 녀석은 정직한 녀석이니……'
        }`,
      );
    } else if (love >= 75) {
      await gold_ship.say_and_wait('만들었어, 우리 사랑의 결실♡');
    } else if (love >= 50) {
      await gold_ship.say_and_wait('이러면 그 녀석을 묶어둘 수 있겠지……');
    }
    era.drawLine();
    await gold_ship.say_and_wait(
      `오늘 날씨 참 좋네——아, 맞다! ${callname}，생각난 게 있어.`,
    );
    era.println();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      ' 곁에 서서, 손가락으로 자신의 배를 가리켰다.',
    ]);

    era.printButton('「어제 밤에 끝냈는데 다음 날 바로 임신했다고? 그렇게 빨리 될 리가 없잖아?」', 1);
    await era.input();

    await gold_ship.say_and_wait(
      '「오~ 『방금 했다고』~! 아니, 농담 아니야. 이 신선한 임신 테스트기 좀 봐.」',
    );
    era.println();
    await era.printAndWait([
      gold_ship.get_colored_name(),
      '의 표정이 의외로 진지하고 엄숙헤서 ',
      me.get_colored_name(),
      '은(는) 반신반의하며 임신 테스트기를 받아들었다——테스트기에 나타난 결과는 양성이었고, 분명하게 ',
      me.get_colored_name(),
      '이(가) 아이의 아버지가 되었음을 보여주고 있었다.',
    ]);
    era.println();
    await era.printAndWait([
      '우마무스메의 임신 사실을 트레센 상층부에 보고할 수 밖에 없었고, ',
      get_chara_talk(302).get_colored_name(),
      '과 ',
      get_chara_talk(301).get_colored_name(),
      '는 드물게 살인적인 눈빛을 보냈지만 그래도 책임감 있게 ',
      me.get_couple_title(),
      '이(가) 다가올 육아 생활을 대비하고——명예에 영향을 줄 수 있는 모든 스캔들을 최대한 덮어두려 할 것이다.',
    ]);
    era.println();
    await era.printAndWait('물론, 해낼 수 있을지는 또 다른 문제지만.');

    era.drawLine();
  }

  async have_baby(father, mother, child) {
    if (mother.id !== 7 || father.id > 0) {
      return await super.have_baby(father, mother, child);
    }
    era.drawLine();
    const gold_ship = get_chara_talk(7);
    await gold_ship.say_and_wait(`${era.get('callname:7:0')}……`);
    await gold_ship.say_and_wait('평소에는 잘 표현하지 못했지만……');
    await gold_ship.say_and_wait('지금 나 정말 행복해.');
  }
};
