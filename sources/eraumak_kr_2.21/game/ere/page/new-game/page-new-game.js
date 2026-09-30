const era = require('#/era-electron');

const { sys_fix_chara_base } = require('#/system/sys-calc-base-cflag');
const { init_chara } = require('#/system/sys-init-chara');
const sys_next_week = require('#/system/sys-next-week');

const page_custom = require('#/page/new-game/page-custom');
const print_set_page = require('#/page/new-game/page-setting');

const basement_queue = require('#/event/basement-queue');
const { get_custom_check } = require('#/event/check/check-factory');
const game_guides = require('#/event/others/game-guides');
const event_queue = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');

const { get_random_value } = require('#/utils/value-utils');

const CharaAvailableSkills = require('#/data/chara-available-skills');
const { chara_colors, get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const {
  player_sex_title,
  pregnant_stage_enum,
} = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const { yes } = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { first_child_id } = require('#/data/other-const');
const { chara_skill_dict } = require('#/data/race/skill/skill-const');
const { attr_names } = require('#/data/train-const');

/**
 * start a new game, set data
 * @param {number} src_chara
 * @return {Promise<boolean|undefined>} if true, call main.js to call homepage
 */
module.exports = async (src_chara) => {
  let flag_new_game = true;
  let player_name = '';

  era.resetData();
  if (src_chara > 0) {
    chara_colors[0] = get_chara_color(src_chara);
    init_chara(src_chara);
    era.set(`cflag:${src_chara}:무작위모집`, 0);
    init_chara(0, src_chara);
    era.set('talent:0:조교도', 1);
    player_name = era.get('callname:0:-1');
    CharaTitles.get(0).push(
      ...get_custom_check(src_chara)
        .get_personal_titles()
        .map((e) => ({ c: chara_colors[0], n: e })),
    );
    (chara_skill_dict[src_chara] || []).forEach((s) =>
      get_skills_and_print_in_event(0, [s], undefined, false),
    );
    CharaAvailableSkills.get(0).clear();
    era.set('callname:0:-2', '당신');
    era.set('cflag:0:성장단계', 5);
    era.set('cstr:0:승부복', 0);
  } else {
    chara_colors[0] = '#ffffff';
  }
  const my_marks = new MyEduMarks();

  let player_gender = 3;

  while (flag_new_game) {
    await era.clear();
    era.setAlign('center');
    era.print(
      '10년간의 고된 공부 끝에 마침내 합격의 기쁨을 맛보았고, \n우편함에 도착한 편지에는 방금 받은 트레이너 배지와 똑같은 색의 빛을 발하고 있는 \n금색 인장이 찍혀 있었다. \n\n당신은 아직도 떨리는 손으로 왁스 인장을 떼어냈다————',
    );
    era.drawLine();
    era.print(
      '임명장\n…………\n…………\n…………\n…………\n…………\n…………\n…………이에 귀하를 본교 트레이너로 임명합니다.',
    );
    era.println();
    era.print('일본 중앙 트레센 학원 이사장\n아키카와 야요이', {
      align: 'right',
    });
    era.print(
      `(작성란)：  ${player_name}  ${player_sex_title[player_gender] || ''}`,
      {
        align: 'left',
      },
    );
    era.drawLine();
    era.setAlign('left');

    if (player_name === '') {
      // 未输入姓名
      era.print(
        '——그리고 왼쪽 하단에 자신의 이름을 적었다.(이름을 입력한 후 엔터 키를 누르세요. 10자 이내로 제한됩니다).',
      );
      player_name = (await era.input()).toString();
      if (player_name.length > 10) {
        await era.printAndWait('너무 깁니다. 다시 서명해 주세요!');
        player_name = '';
      }
    } else if (player_gender === 3) {
      // 再输入性别子循环
      era.printMultiColumns([
        { type: 'text', content: '(성별을 선택하십시오)' },
        {
          accelerator: 0,
          config: { width: 4 },
          content: '여성',
          type: 'button',
        },
        {
          accelerator: 1,
          config: { width: 4 },
          content: '남성',
          type: 'button',
        },
        {
          accelerator: 10,
          config: { width: 4 },
          content: '양성',
          type: 'button',
        },
        {
          accelerator: 98,
          config: { width: 4 },
          content: '다시 서명',
          type: 'button',
        },
        {
          accelerator: 99,
          config: { align: 'right', width: 8 },
          content: '이전 단계로 돌아가기',
          type: 'button',
        },
      ]);
      const ret = await era.input();
      switch (ret) {
        case 0:
        case 1:
        case 10:
          player_gender = ret;
          break;
        case 98:
          player_name = '';
          break;
        case 99:
          flag_new_game = false;
      }
    } else {
      //均已输入
      era.printMultiColumns([
        {
          accelerator: 1,
          config: { width: 6 },
          content: '임명장 제출',
          type: 'button',
        },
        {
          accelerator: 97,
          config: { disabled: src_chara > 0, width: 6 },
          content: '다시 서명',
          type: 'button',
        },
        {
          accelerator: 98,
          config: { width: 6 },
          content: '성별 재선택',
          type: 'button',
        },
        {
          accelerator: 99,
          config: { align: 'right', width: 6 },
          content: '이전 단계로 돌아가기',
          type: 'button',
        },
      ]);

      switch (await era.input()) {
        case 1:
          era.set('callname:0:-1', player_name);
          era.set('cflag:0:성별', player_gender);

          if (await print_set_page()) {
            return false;
          }

          if (era.get('flag:튜토리얼')) {
            era.set('flag:튜토리얼', {});
            game_guides.init();
          }

          era.set('abl:0:스피드트레이닝레벨', 1);
          era.set('abl:0:스태미나트레이닝레벨', 1);
          era.set('abl:0:파워트레이닝레벨', 1);
          era.set('abl:0:근성트레이닝레벨', 1);
          era.set('abl:0:지능트레이닝레벨', 1);

          era.set('base:0:성욕', 0);
          era.set('base:0:스트레스', 0);
          era.set('base:0:체중 편차', 0);
          era.set('base:0:약물 잔류량', 0);

          era.set('cflag:0:질크기', era.get('cflag:0:성별') - 1 ? 1 : 0);

          if (era.get('cflag:0:성별')) {
            era.set('cflag:0:음경크기', get_random_value(1, 5));
          }

          era.set('cflag:0:모집상태', yes);
          era.set('cflag:0:부계캐릭', -1);
          era.set('cflag:0:모계캐릭', -1);
          era.set('cflag:0:임신단계', 1 << pregnant_stage_enum.no);

          era.set('talent:0:동정', 1);
          era.set('talent:0:처녀', 1);
          if (src_chara <= 0) {
            if (await page_custom()) {
              return false;
            }
          }

          // 0号角色初始化
          attr_names.forEach((v) =>
            era.add(`base:0:${v}`, get_random_value(0, 50)),
          );
          sys_fix_chara_base(0);

          era.set('flag:현재턴수', 0);
          era.set('flag:현재연도', 2000);
          era.set('flag:현재월', 1);
          era.set('flag:현재주', 0);
          era.set('flag:현재위치', location_enum.office);
          era.set('cflag:0:육성턴수합산', 4800);

          // 游戏设置
          era.set('flag:신생아ID', first_child_id);

          event_queue.init();
          basement_queue.init();

          [
            201, 202, 203, 204, 205, 206, 207, 301, 302, 303, 304, 305, 306,
            308, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349,
          ].forEach((e) => init_chara(e));
          switch (era.get('flag:이스터에그메커니즘')) {
            case 179:
              // 初始卡池：富赤速茶宫穴
              [5, 9, 25, 32, 36, 94].forEach(
                (e) => src_chara !== e && init_chara(e),
              );
              era.set('flag:현재명성', 5000);
              era.set('flag:현재코인', 0);
              break;
            default:
              // 初始卡池：内恰帝王北黑（萌战四强 - 光钻） + 루나 + 阿船
              [60, 3, 68, 17, 7].forEach(
                (e) => src_chara !== e && init_chara(e),
              );
              era.set('flag:현재명성', era.get('global:초기명성증가량') + 100);
              era.set('flag:현재코인', era.get('global:초기자금증가량') + 300);
          }
          era.add('flag:현재명성', -era.get('flag:턴당명성패널티'));

          await sys_next_week();
          my_marks.god = get_random_value(13, 40);
          if (src_chara !== 32) {
            new TachyonLifeMarks().drug_notice = get_random_value(24, 48);
            my_marks.strange_day = get_random_value(24, 48);
            if (src_chara !== 25) {
              my_marks.experiment = get_random_value(1, 24);
            }
          }
          if (src_chara !== 20) {
            my_marks.fishing = 1;
          }
          my_marks.custom = get_random_value(1, 12);
          my_marks.trainer_race = get_random_value(13, 36);
          my_marks.work_over = my_marks.sick = 24;
          my_marks.kamen_rider = 1;
          my_marks.big_sale = get_random_value(5, 10);
          new MeekEduMarks().all_round = get_random_value(5, 12);
          if (src_chara !== 10) {
            new TokinoLifeMarks().shadow = get_random_value(5, 12);
          }
          new TasteLifeMarks().annoyance = get_random_value(13, 20);

          era.set('flag:랜덤시드', get_random_value(0, 233280 - 1));
          era.set('flag:세이브파일명', 0);
          era.set('item:현실투시기', 1);
          return true;
        case 97:
          player_name = '';
          break;
        case 98:
          player_gender = 3;
          break;
        case 99:
          flag_new_game = false;
      }
    }
  }
  return false;
};
