const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const global_achievement = require('#/system/global/sys-calc-achievement');
const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_custom_check } = require('#/event/check/check-factory');
const { get_custom_daily } = require('#/event/daily/daily-factory');
const { get_custom_edu } = require('#/event/edu/edu-factory');
const { get_custom_mec } = require('#/event/mec/mec-factory');
const print_ending_name = require('#/event/snippets/print-ending-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');
const date_indicator = require('#/data/date-indicator');
const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const basement_owners = require('#/data/event/basement-owners');
const crazy_fans = require('#/data/event/crazy-fans');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

const basement_saying_arr = [
  '좁은 방 안에서 붉은 입술이 대나무와 어우러져 은혜를 나누네. —— 타카스기 신사쿠',
  '속박된 노예는 누구나 자신의 손으로 사슬을 끊어버릴 수 있다. —— 셰익스피어',
  '난 이제 더 이상 외롭지 않아. 내 생애 최고의 사랑이 지금 내 곁에 있으니. —— 레 미제라블',
  '자유란 제멋대로 하는 것이 아니라, 남의 뜻에 휘둘리지 않는 것이다. —— 칸트',
  '돈, 우마무스메, 여자. 남자는 영원히 이 세 가지를 이해하지 못한다. —— 윌 로저스',
];

/** @param {boolean} [again] */
async function game_over(again) {
  const game_over = era.get('flag:게임오버');
  let end_talk = 0;
  let saying_arr;
  let temp;
  if (game_over === 3 && era.get('flag:현재위치') === location_enum.basement) {
    era.drawLine();
    global_achievement.end_lov = 1;
    await get_custom_daily(basement_owners.get(0)).basement_end();
    saying_arr = basement_saying_arr;
  } else if (
    game_over >= 2 &&
    era.get('flag:현재코인') < 0 &&
    (temp = sys_get_billings()[0]).creditor
  ) {
    era.drawLine();
    global_achievement.end_mon = 1;
    await get_custom_daily(temp.creditor).slave_end();
    saying_arr = [
      '좁은 방 안에서 붉은 입술이 대나무와 어우러져 은혜를 나누네. —— 타카스기 신사쿠',
      '돈, 우마무스메, 여자. 남자는 영원히 이 세 가지를 이해하지 못한다. —— 윌 로저스',
      '한 푼의 돈이 영웅을 무릎 꿇게 만든다. —— 리루위안',
      '속박된 노예는 누구나 자신의 손으로 사슬을 끊어버릴 수 있다. —— 셰익스피어',
      '난 이제 더 이상 외롭지 않아. 내 생애 최고의 사랑이 지금 내 곁에 있으니. —— 레 미제라블',
    ];
  } else if ((temp = crazy_fans.get()) && game_over) {
    era.drawLine();
    global_achievement.end_fan = 1;
    await get_custom_edu(temp).crazy_fan_end();
    saying_arr = [
      '일식이 시작되면 만물은 빛을 잃는다. —— 데니스 오켈리',
      '두견새가 울지 않으면 죽여버리겠다. —— 오다 노부나가',
      '수사 과정에서 나는 최후이자 최고의 상소 법원이다. —— 셜록 홈즈',
      '세상은 성패로 인물을 논하니, 조조 또한 영웅의 반열에 든다. —— 소식',
      '위대한 우마무스메를 소유한 자는 가장 위대한 옥좌를 소유한 것이다. —— 처칠',
    ];
  } else {
    let punish_level = era.get('flag:징벌강도');
    if (
      punish_level < 3 &&
      (era.get('flag:현재명성') <= 0 ||
        (era.get('flag:이스터에그메커니즘') === 179 && !again))
    ) {
      if (
        era.get('flag:명성부족교체') > 0 &&
        era.get('cflag:0:템플릿캐릭터') === -1
      ) {
        const me = get_chara_talk(0);
        punish_level = era.add('flag:징벌강도', 1);
        let jpy = era.get('flag:현재코인');
        switch (punish_level) {
          case 1:
            era.set('cflag:0:음경크기', 1);
            era.set('cflag:0:질크기', 1);
            if (era.get('cflag:0:성별') === 1) {
              era.set('cflag:0:가슴둘레', era.get('cflag:0:키') * 0.51);
              era.set('cflag:0:허리둘레', era.get('cflag:0:키') * 0.34);
              era.set('cflag:0:엉덩이둘레', era.get('cflag:0:키') * 0.542);
              era.set('cflag:0:밑가슴둘레', era.get('cflag:0:가슴둘레') - 15);
            }
            era.set('cflag:0:성별', 10);
            era.set('cflag:0:육성턴수합산', 0);
            era.set('flag:현재명성', era.get('global:초기명성증가량') + 100);
            if (jpy > 0) {
              era.add('flag:현재코인', -Math.floor(jpy / 2));
            }
            era
              .getAddedCharacters()
              .filter((e) => e)
              .forEach((e) => get_custom_mec(e).set_callname());

            era.drawLine();
            era.setOffset(6);
            era.setWidth(12);
            await me.say_as_unknown_and_wait(
              '듣기로는, 인간은 자유를 박탈당한 후에야…… 진정으로 자신을 알게 된다고 한다.',
            );
            await me.say_as_unknown_and_wait('그렇다면…… 당신은 자신을 얼마나 잘 알고 있을까?');
            await me.say_as_unknown_and_wait([
              me.get_colored_actual_name(),
              '……나태, 오만',
              era.get('flag:변태행위') ? ', 색욕' : '',
              '……오늘…… 당신은 다시 태어났다.',
            ]);
            await me.say_as_unknown_and_wait(
              '하지만 곧 깨닫게 될 것이다…… 자유에는 대가가 따른다는 것을.',
            );
            await me.say_as_unknown_and_wait(
              '감옥이 당신과 동행할 것이며…… 이 육체는 당신에게 영원한 징벌이 될 것이다.',
            );
            await me.say_as_unknown_and_wait(
              '속죄가 곧 시작된다—— 더 큰 고통을 겪고 싶지 않다면, 필사적으로 달려야 한다.',
            );
            await me.say_as_unknown_and_wait(
              `${me.actual_name}—— 자유가 당신을 부르고 있다.`,
            );
            await me.say_as_unknown_and_wait('다시는 보지 않았으면 좋겠군.');
            era.setWidth(24);
            era.setOffset(0);
            era.println();
            if (era.get('cflag:0:종족')) {
              await era.printAndWait([me.get_colored_name(), '이(가) 개조당했습니다!']);
            } else {
              era.set(
                'maxbase:0:스피드',
                Math.min(2000, era.get('maxbase:0:스피드') + 800),
              );
              era.set(
                'maxbase:0:스태미나',
                Math.min(2000, era.get('maxbase:0:스태미나') + 800),
              );
              era.set(
                'maxbase:0:파워',
                Math.min(2000, era.get('maxbase:0:파워') + 800),
              );
              await era.printAndWait([
                me.get_colored_name(),
                '이(가) 우마무스메로 변했습니다!',
              ]);
              await era.printAndWait([
                me.get_colored_name(),
                '은(는) 여전히 우마무스메를 모집하고, 훈련시키며, 함께 달릴 수 있지만, 더 이상 트레센에서 지급하는 급여를 받을 수 없습니다.',
              ]);
              await era.printAndWait([
                '대신, ',
                me.get_colored_name(),
                '은(는) 스스로 자율 훈련을 하고, 레이스에 참여하여 상금과 사회적 명성을 얻을 수 있습니다.',
              ]);
            }
            await era.printAndWait('명성이 다시 0 이하로 떨어지면, 더 엄격한 처벌을 받게 됩니다!');
            era.set('cflag:0:종족', 1);
            break;
          case 2:
            era.set('talent:0:조교도', 6);
            new Array(3).fill(0).forEach((_, i) => {
              era.set(`talent:0:${i + 60}`, 2);
              era.set(`talent:0:${i + 64}`, 2);
            });
            new Array(4)
              .fill(0)
              .forEach((_, i) => era.set(`talent:0:${i + 50}`, 1));
            era.set('talent:0:명기', 1);
            era.set('talent:0:마성의엉덩이', 1);
            new Array(4)
              .fill(0)
              .forEach((_, i) => era.set(`talent:0:${i + 74}`, 1));
            era.set('talent:0:도S', 0);
            era.set('talent:0:매도좋아함', 1);
            era.set('talent:0:고통좋아함', 1);
            era.set('talent:0:유두타입', 2);
            era.set('talent:0:모유분비', 3);
            era.set('flag:현재명성', era.get('global:초기명성증가량') + 100);
            jpy > 0 && era.set('flag:현재코인', 0);
            era.set('mark:0:음문', 3);

            era.drawLine();
            era.setOffset(6);
            era.setWidth(12);
            await era.printAndWait('성 노 예 선 언', {
              align: 'center',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              isParagraph: true,
            });
            await era.printAndWait(
              `본 암말 ${me.actual_name}은(는) 우마무스메 님들의 노예가 될 것을 자원하며,`,
            );
            await era.printAndWait(
              '심신을 주인님들을 기쁘게 해드리기 위한 최적의 상태로 조정하고, 모든 인권을 영원히 포기하며,',
            );
            await era.printAndWait(
              '이후 주인님들의 모든 조교를 수용하고, 모든 지시에 복종하며, 어떠한 이의도 제기하지 않겠습니다.',
            );
            era.setOffset(13);
            era.setWidth(5);
            era.setAlign('center');
            era.print(me.actual_name);
            era.print(`<${me.name} 의 입술 자국>`);
            era.print(`<${me.name} 의 유두 자국>`);
            await era.printAndWait(`<${me.name} 의 음순 자국>`);
            await era.printAndWait(date_indicator());
            era.setAlign('left');
            era.setOffset(0);
            era.setWidth(24);
            era.println();
            await era.printAndWait(
              `강제적인 자원 하에 선언서에 서명한 후, ${me.name}은(는) 우마무스메들의 성노예로 개조되었습니다!`,
            );
            await era.printAndWait(
              `${me.name}은(는) 여전히 우마무스메를 모집하고, 훈련시키며, 함께 달리고 자율 훈련 및 레이스에 참여할 수 있습니다.`,
            );
            await era.printAndWait(
              `하지만 ${me.name} 의 더 중요한 책무는 그녀들의 성욕을 해소해 주는 것입니다!`,
            );
            await era.printAndWait(
              `${me.name}의 몸은 이미 예민도가 극대화된 상태로 조정되었습니다. 부디 자신의 성 기술을 더욱 정진하여 주인님들을 기쁘게 해드리고 명성을 획득하십시오!`,
            );
            await era.printAndWait('명성이 다시 0 이하로 떨어지면, 더 엄격한 처벌을 받게 됩니다!');
            sys_add_titles(0, { c: buff_colors[2], n: '성처리기' });
            break;
          case 3:
            CharaInmon.get(0).slave = slavery_enum.pregnant;
            era.set('status:0:발정', 1);
            if (era.get('cflag:0:임신단계') === 1 << pregnant_stage_enum.no) {
              era.set('status:0:생리', 0);
              era.set('status:0:배란기', 1);
            }
            era.set(
              'flag:현재명성',
              era.get('global:초기명성증가량') +
                100 +
                sys_filter_chara('cflag', '모계캐릭', 0).length * 100,
            );
            era.set('flag:현재코인', 0);

            era.drawLine();
            era.setOffset(6);
            era.setWidth(12);
            await me.say_as_unknown_and_wait(
              '당신이 이 지경까지 타락할 줄은 몰랐다.',
            );
            await me.say_as_unknown_and_wait(
              '당신의 손에는 한때 바닥에서 지상으로 기어 올라올 수 있는 밧줄이 쥐어져 있었다.',
            );
            await me.say_as_unknown_and_wait('하지만 당신은 그 구명줄을 제 손으로 버리고 말았다.');
            await me.say_as_unknown_and_wait(
              '이제 와서 생각해보면, 당신이 일부러 방임하여 모든 것을 돌이킬 수 없게 만든 게 아닌가 의심스러울 정도다.',
            );
            await me.say_as_unknown_and_wait(
              '당신에게 인권을 지킬 기회는 이미 수없이 주어졌었다.',
            );
            await me.say_as_unknown_and_wait('뭐, 지금의 당신에겐 들리지도 않겠지만.');
            await me.say_as_unknown_and_wait(
              `그럼 안녕히, ${me.actual_name}.`,
            );
            await me.say_as_unknown_and_wait([
              {
                color: buff_colors[3],
                content: 'GAME OVER',
                fontWeight: 'bold',
              },
            ]);
            era.setWidth(24);
            era.setOffset(0);
            era.println();
            await era.printAndWait(`번식용 우마무스메, 그것이 ${me.name}의 말로입니다.`);
            await era.printAndWait(
              '과거의 야망은 바람에 흩날리고, 한때의 이상은 무참히 부서졌습니다.',
            );
            await era.printAndWait(
              `이제부터 ${me.name}의 책무는 짧은 육봉으로 고귀한 우마무스메들을 기쁘게 하고, 열등한 구멍으로 신성한 인자를 받아들여 그녀들의 우수한 후세를 잉태하는 것뿐입니다!`,
            );
            await era.printAndWait(
              `비록 인권은 ${me.name}에게서 멀리 떠나갔지만, 부디 씨받이로서 정진해주시길 바랍니다.`,
            );
            await era.printAndWait(
              `운이 좋다면, 어쩌면 ${me.name}도 자식 덕에 귀한 몸이 될지도 모르니까요!`,
            );
            sys_add_titles(0, { c: buff_colors[2], n: '임신의 길' });
        }
        sys_filter_chara('cflag', '모집상태', recruit_flags.yes).forEach(
          (e) => {
            get_custom_mec(e).set_callname();
            get_custom_check(e).check_after_punish(punish_level);
          },
        );
      } else {
        era.drawLine();
        const me = get_chara_talk(0);
        const uma = era.get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
        if (era.get('flag:현재위치') === location_enum.basement) {
          if (
            await select_yes_or_no(
              [
                me.get_colored_name(),
                '은(는) 지하실에서 결말을 맞이했다……',
                { isBr: true },
                '지하실 엔딩을 확인합니까?',
              ],
              '비참한 현실을 직시한다',
              '으아아 안 볼래',
            )
          ) {
            await get_custom_daily(basement_owners.get(0)).basement_end();
          }
          global_achievement.end_lov = 1;
          saying_arr = basement_saying_arr;
        } else if (era.get('flag:변태행위') > 0) {
          era.setOffset(6);
          era.setWidth(12);
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 성인으로서의 사회적 책임을 망각하고, 담당 우마무스메에게 변태적인 행위를 사주한 사실이 폭로되었습니다. 트레센조차 ',
            me.get_colored_name(),
            '의 죄를 덮어줄 수는 없었습니다.',
          ]);
          await era.printAndWait([
            '결국 학원 측은 ',
            me.get_colored_name(),
            '에게 담당 ',
            uma,
            '와의 계약 해지 및 이적을 명령했습니다.',
          ]);
          await era.printAndWait([
            '사회적 평판이 바닥으로 떨어져 해고된 ',
            me.get_colored_name(),
            '은(는) 결말을 맞이했습니다……',
          ]);
          era.setWidth(24);
          era.setOffset(0);
          await print_ending_name('패가망신', me);
          saying_arr = [
            '인간이 진정으로 저질러질 때, 타인의 불행을 기뻐하는 것 외에 다른 즐거움이란 없다. —— 괴테',
            '자유란 제멋대로 하는 것이 아니라, 남의 뜻에 휘둘리지 않는 것이다. —— 칸트',
            '나의 가장 큰 적은 바로 나 자신이다. —— 나폴레옹',
            '돈, 우마무스메, 여자. 남자는 영원히 이 세 가지를 이해하지 못한다. —— 윌 로저스',
            '속박된 노예는 누구나 자신의 손으로 사슬을 끊어버릴 수 있다. —— 셰익스피어',
          ];
          end_talk = 2;
          global_achievement.end_hnt = 1;
        } else {
          era.setOffset(6);
          era.setWidth(12);
          await era.printAndWait([
            '아마도 ',
            me.get_colored_name(),
            '이(가) 너무 나태했거나, 혹은 담당 ',
            uma,
            '의 재능이 부족했던 것일지도 모릅니다. 승리는 당신들에게서 언제나 멀리 있었습니다.',
          ]);
          await era.printAndWait([
            '아무리 노력해도 소용이 없었고, 결국 학원 측은 ',
            me.get_colored_name(),
            '에게 담당 ',
            uma,
            '와의 계약 해지 및 이적을 명령했습니다.',
          ]);
          await era.printAndWait([
            '사회적 평판 부족으로 해고된 ',
            me.get_colored_name(),
            '은(는) 결말을 맞이했다……',
          ]);
          era.setWidth(24);
          era.setOffset(0);
          await print_ending_name('문전박대', me);
          saying_arr = [
            '돈, 우마무스메, 여자. 남자는 영원히 이 세 가지를 이해하지 못한다. —— 윌 로저스',
            '위대한 우마무스메를 소유한 자는 가장 위대한 옥좌를 소유한 것이다. —— 처칠',
            '세상은 성패로 인물을 논하니, 조조 또한 영웅의 반열에 든다. —— 소식',
            '일식이 시작되면 만물은 빛을 잃는다. —— 데니스 오켈리',
            '나의 가장 큰 적은 바로 나 자신이다. —— 나폴레옹',
          ];
          end_talk = 1;
          global_achievement.end_los = 1;
        }
      }
    }
  }
  if (saying_arr) {
    era.print('GAME OVER', {
      align: 'center',
      color: buff_colors[3],
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(get_random_entry(saying_arr), {
      align: 'center',
    });
    if (end_talk > 0) {
      era.println();
      const team_list = era
        .getAddedCharacters()
        .filter(
          (cid) =>
            cid > 0 && era.get(`cflag:${cid}:모집상태`) === recruit_flags.yes,
        );
      for (const cid of team_list) {
        await get_custom_daily(cid).end_talk(end_talk > 1);
      }
    }
    if (
      (global_achievement.end_los > 0 || global_achievement.end_hnt > 0) &&
      global_achievement.end_fan > 0 &&
      global_achievement.end_mon > 0 &&
      global_achievement.end_lov > 0
    ) {
      global_achievement.ending = 1;
    }
    return true;
  }
  return false;
}

module.exports = game_over;