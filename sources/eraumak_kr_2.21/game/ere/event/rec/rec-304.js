/**
 * @file 키류인 아오이 - 招募
 * @author 黑奴队长（临时）
 */
const {
  get,
  printAndWait,
  println,
  set,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const recruit_flags = require('#/data/event/recruit-flags');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const aoi = get_chara_talk(304),
      me = get_chara_talk(0),
      meek = get_chara_talk(201);
    if (
      RaceHistory.get(201)
        .get_values()
        .findIndex(
          (e) =>
            race_infos[e.race].race_class === class_enum.G1 && e.rank === 1,
        ) !== -1
    ) {
      await print_event_name('성과', aoi);
      await printAndWait([
        meek.get_colored_name(),
        '가 G1에서 승리한 후, ',
        aoi.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 찾아와 훌륭한 성과를 거두었다며 칭찬했다.',
      ]);
      await printAndWait([
        aoi.sex,
        '는 ',
        me.get_colored_name(),
        '과(와) 앞으로도 함께 노력하고 싶다며, ',
        meek.get_colored_name(),
        ' 뿐만 아니라 더 많은 ',
        meek.get_uma_sex_title(),
        '가 승리하여 꿈을 이룰 수 있도록 돕자고 했다.',
      ]);
    } else {
      await print_event_name('「성과」', aoi);
      await printAndWait([
        meek.get_colored_name(),
        '의 육성이 끝난 후, ',
        aoi.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 찾아왔다.',
      ]);
      if (
        get('cflag:201:임신단계') !== 1 << pregnant_stage_enum.no ||
        get('exp:201:출산횟수') + get('exp:201:아이숫자') > 0
      ) {
        await printAndWait([
          aoi.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '이(가) ',
          meek.get_colored_name(),
          '를 더럽힌 행위에 대해 극도로 분노했다.',
        ]);
        await printAndWait([
          '하지만 일이 이렇게 된 이상 ',
          meek.get_colored_name(),
          '를 위해 ',
          aoi.sex,
          '도 현실을 받아들일 수밖에 없었다.',
        ]);
        await printAndWait([
          '하지만 ',
          aoi.sex,
          '는 절대로 ',
          me.get_colored_name(),
          '을(를) 용서하지 않을 것이다.',
        ]);
        println();
        sys_like_chara(304, 0, -800) && (await waitAnyKey());
      } else if (get('love:201') >= 75) {
        await printAndWait([
          aoi.sex,
          '는 순수한 ',
          meek.get_teen_sex_title(),
          '의 감정을 이용한 ',
          me.get_colored_name(),
          '을(를) 비난했다.',
        ]);
        await printAndWait([
          '하지만 ',
          meek.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '과(와) 계속 함께하고 싶어 하는 이상 ',
          aoi.sex,
          '도 더 이상 할 말이 없었다.',
        ]);
        await printAndWait([
          aoi.sex,
          '는 ',
          me.get_colored_name(),
          '이(가) ',
          meek.get_colored_name(),
          '에게 몹쓸 짓을 하지 않도록 계속 지켜보겠다고 했다.',
        ]);
      } else {
        await printAndWait([
          aoi.get_colored_name(),
          '는 진지한 얼굴로 ',
          me.get_colored_name(),
          '이(가) 이렇다 할 성적을 거두지는 못했지만 이 3년 동안 ',
          me.get_colored_name(),
          '도 많이 단련되었을 거라고 말했다.',
        ]);
        await printAndWait([
          aoi.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '이(가) 어엿한 트레이너가 되는 그날까지 계속 돕겠다고 했다.',
        ]);
        await printAndWait([
          '말을 마친 뒤 ',
          aoi.get_colored_name(),
          '는 주위에 아무도 없는 틈을 타 ',
          me.get_colored_name(),
          '의 뺨에 입을 맞췄다.',
        ]);
      }
    }
    set('callname:304:-2', '키류인 아오이');
    set('cflag:304:모집상태', recruit_flags.yes);
    new MeekEduMarks().debuff = 0;
    await this.recruit_end();
  }
};