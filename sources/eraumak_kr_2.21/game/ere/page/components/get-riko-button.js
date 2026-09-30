const {
  get,
  input,
  printAndWait,
  printMultiColumns,
  set,
} = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');

const { cb_enum } = require('#/event/queue');
const { run_custom_rec } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const GlasseEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-202');
const CoconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-203');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 * @returns {{[handle]:function:Promise,[name]:string}}
 */
function get_riko_button(chara, me) {
  if (get('cflag:306:모집상태') === recruit_flags.yes) {
    return {};
  } else if (get('cflag:306:모집상태') === recruit_flags.no) {
    return get('flag:현재명성') < 500
      ? {
          handle: () => {
            set('cflag:306:모집상태', -1);
            return printAndWait([
              chara.get_colored_name(),
              '는 ',
              me.get_colored_name(),
              '에게 몇 가지 훈련 노하우를 소개하며, 건강 관리의 중요성을 강조했다.',
            ]).then(() =>
              printAndWait([
                '실습 방면에서는, ',
                chara.get_colored_name(),
                '가 ',
                chara.sex,
                '의 팀에 재능이 뛰어난 두 명의 ',
                chara.get_uma_sex_title(),
                '가 있다고 말하며, ',
                me.get_colored_name(),
                '이(가) ',
                chara.sex,
                '들의 훈련을 보조하는 것부터 시작해도 좋겠다고 덧붙였다.',
              ]),
            );
          },
          name: '트레이너 업무에 대해 가르침을 구한다',
        }
      : {
          handle: () => {
            set('cflag:306:모집상태', -1);
            return printAndWait([
              chara.get_colored_name(),
              '은 트레이너로서의 ',
              me.get_colored_name(),
              '의 능력을 높게 평가했다.',
            ]).then(() =>
              printAndWait([
                '만약 ',
                me.get_colored_name(),
                '에게 여력이 있다면, ',
                chara.sex,
                '는 ',
                me.get_colored_name(),
                '이(가) 곧 육성을 시작할 재능 있는 두 명의 ',
                chara.get_uma_sex_title(),
                '의 훈련을 도와주길 바라고 있다.',
              ]),
            );
          },
          name: '트레이너 업무 논의',
        };
  } else if (get('cflag:306:모집상태') === -1) {
    return {
      disabled: get('flag:현재월') > 3 || sys_check_team_limit() > -2,
      handle:
        get('cflag:202:육성횟수') === 0
          ? async () => {
              const glasse = get_chara_talk(202),
                cocon = get_chara_talk(203);
              await printAndWait([
                chara.get_colored_name(),
                '의 추천으로, ',
                me.get_colored_name(),
                '은(는) ',
                glasse.get_colored_name(),
                '와 ',
                cocon.get_colored_name(),
                '을 알게 되었다.',
              ]);
              await printAndWait([
                chara.get_colored_name(),
                '의 기대를 짊어지고, ',
                me.get_colored_name(),
                '과(와) ',
                glasse.sex,
                '들의 3년이 시작되었다……',
              ]);
              await me.say_and_wait(
                [glasse.sex, '들을 이끌고 많은 중상 레이스에서 승리하자……'],
                true,
              );
              await run_custom_rec(202, cb_enum.recruit);
              await run_custom_rec(203, cb_enum.recruit);
              new GlasseEduMarks().debuff = 20;
              new CoconEduMarks().debuff = 20;
              set('cflag:306:모집상태', [0, 0]);
              set('flag:현재상호작용캐릭터', get_random_entry([202, 203]));
            }
          : async () => {
              const glasse = get_chara_talk(202),
                cocon = get_chara_talk(203);
              await printAndWait([
                '어느덧 시간이 흘러, ',
                me.get_colored_name(),
                '과(와) ',
                glasse.get_colored_name(),
                ', ',
                cocon.get_colored_name(),
                '은 다시 같은 잔디 위에 섰다.',
              ]);
              await printAndWait([
                '이번에야말로 ',
                me.get_colored_name(),
                '이(가) ',
                chara.sex,
                '들의 염원을 이뤄줄 수 있을까?',
              ]);
              await run_custom_rec(202, cb_enum.recruit);
              await run_custom_rec(203, cb_enum.recruit);
              set('cflag:306:모집상태', [0, 0]);
              set('flag:현재상호작용캐릭터', get_random_entry([202, 203]));
            },
      name: get('cflag:202:육성횟수') === 0 ? '임무 수락' : '다시 시도',
    };
  } else if (get('cflag:202:육성턴수합산') < 3 * 48) {
    return {
      disabled: get('base:0:기력') < 200 || get('base:304:기력') < 200,
      async handle() {
        const aims = [],
          glasse_edu_marks = new GlasseEduMarks(),
          cocon_edu_marks = new CoconEduMarks(),
          glasse = get_chara_talk(202),
          cocon = get_chara_talk(203);
        if (glasse_edu_marks.debuff) {
          aims.push(202);
        }
        if (cocon_edu_marks.debuff) {
          aims.push(203);
        }
        let aim, aim_marks;
        switch (aims.length) {
          case 2:
            printMultiColumns([
              { content: '누구에 대해 이야기할까?', type: 'text' },
              {
                accelerator: 1,
                content: glasse.name,
                type: 'button',
              },
              {
                accelerator: 2,
                content: cocon.name,
                type: 'button',
              },
            ]);
            aim = (await input()) + 201;
            break;
          case 1:
            aim = aims[0];
            break;
          case 0:
            await printAndWait([
              chara.get_colored_name(),
              '는 더 이상 ',
              me.get_colored_name(),
              '에게 공유할 만한 새로운 정보가 없다고 말했다.',
            ]);
            return;
        }
        aim_marks = aim === 202 ? glasse_edu_marks : cocon_edu_marks;
        aim = aim === 202 ? glasse : cocon;
        await printAndWait([
          me.get_colored_name(),
          '은(는) ',
          chara.get_colored_name(),
          '에게 한동안 가르침을 받아, ',
          aim.get_colored_name(),
          '에 대한 이해가 깊어졌다……',
        ]);
        aim_marks.debuff = Math.max(
          aim_marks.debuff -
            1 -
            (Math.random() < get('relation:306:0') / 600) -
            (Math.random() < get('love:306') / 100),
          0,
        );
        sys_change_attr_and_print(0, '기력', -200);
        sys_change_attr_and_print(306, '기력', -200);
      },
      name: '담당의 훈련에 대해 이야기한다',
    };
  } else {
    return {
      handle: () =>
        printAndWait([
          chara.get_colored_name(),
          '은(는) 단지 ',
          me.get_colored_name(),
          '에게 ',
          chara.sex,
          '들이 잘 지내고 있다고만 전했다.',
        ]),
      name: `${chara.sex}들의 현황을 파악한다`,
    };
  }
}

module.exports = get_riko_button;