/**
 * @file 玩家 - 日常
 * @author 雞雞
 * @author 幽白書
 * @author 黑奴队长（改编）
 */
const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const recruit_flags = require('#/data/event/recruit-flags');
const { gene_type_colors } = require('#/data/race/model/uma-gene');

module.exports = class extends CustomizedDaily {
  async office_cook() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) 트레이닝실에서 혼자 요리를 하며, 튀김으로 자신에게 보상을 주었다.',
    ]);
  }

  async office_game() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) 트레이닝실에서 혼자 게임을 하며, 상사에게 들키지 않기를 바랬다.',
    ]);
  }

  async office_rest() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) 트레이닝실에서 혼자 쉬며, 머릿속을 비우고 시간을 보냈다.',
    ]);
  }

  async out_church() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) 혼자 신사에 와 기도했다.',
    ]);
    await era.printAndWait(
      Math.random() < 0.5
        ? '길한 점괘를 뽑았다! 이번 여행은 헛되지 않은 듯 하다.'
        : '흉한 점괘를 뽑았다! 며칠 동안은 조심해서 지내야겠다……',
    );
  }

  async out_river(hook, extra_flag) {
    const me = get_chara_talk(0);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 혼자 강가에 산책하러 와서, 할 일 없이 시간을 보냈다.',
      ]);
    } else {
      const my_marks = new MyEduMarks();
      if (my_marks.fishing) {
        if (era.get('cflag:20:모집상태') === recruit_flags.yes) {
          my_marks.fishing = 0;
        } else if (Math.random() < 0.2) {
          /** @author 幽白書 */
          my_marks.fishing = 0;
          const sky = get_chara_talk(20);
          await print_event_name('낚시 소감', sky);
          sky.name = '밀짚모자를 쓴 갈색 털의 ' + sky.get_uma_sex_title();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 강가에서 낚싯대를 든 한 ',
            sky.get_colored_name(),
            '를 만났다.',
          ]);
          await era.printAndWait([
            sky.sex,
            '는 뒤를 돌아보지 않고, 등을 돌린 채 ',
            me.get_colored_name(),
            '에게 인사했다.',
          ]);
          era.println();
          await sky.say_and_wait(
            '냐하하, 참 우연이네요. 만난 것 자체가 인연이니까, 마음에 드는 걸 하나 골라 가져가세요~',
          );
          sky.name = undefined;
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 주위를 둘러보니, 상대방 곁에 낡은 낚싯대와 미끼 하나가 놓여 있었다.',
          ]);
          era.printButton('낚싯대를 고른다（어획량 2배）', 1);
          era.printButton('미끼를 고른다（백색 인자 20 획득）', 1);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 낚싯대를 선택했다. 그러자 마치 마법이라도 걸린 듯 ',
              me.get_colored_name(),
              '은(는) 오늘 운이 엄청나게 좋아서, 평소보다 두 배 이상이나 많은 물고기를 잡았다!',
            ]);
            extra_flag.jpy = 5 + get_random_value(1, 5);
          } else {
            await era.printAndWait('음? 이 미끼의 유선형 디자인이……');
            await era.printAndWait([
              '이때 ',
              me.get_colored_name(),
              '은(는) 문득 번뜩이는 생각이 떠올랐다',
            ]);
            era.println();
            era.add('juel:0:흰색', 20);
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) ',
              {
                content: '흰색인자 × 20',
                color: gene_type_colors[2],
              },
              ' 를 획득했다!',
            ]);
            extra_flag.jpy = 1;
          }
          return;
        }
      }
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 혼자 강가에 와 낚시했다. 빈손으로 돌아가지 않기를.',
      ]);
    }
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station();
    let talk;
    switch (hook.arg) {
      case 0:
        talk = '식사하러 갔다. 가장 좋아하는 그 가게, 여전히 익숙한 맛이다.';
        break;
      case 2:
        talk = '쇼핑몰에 들러서, 장보기 목록을 확인해 봤다.';
    }
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      `은 혼자 역 근처에 와 ${talk}`,
    ]);
  }

  async out_shopping(hook) {
    const me = get_chara_talk(0),
      temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    let talk;
    switch (temp) {
      case 0:
        talk = ' 오락실에 가서 적당히 시간을 때웠다.';
        break;
      case 1:
        talk = ' 경품 추첨하러 갔다. 좋은 게 당첨됐으면!';
        break;
      case 2:
        talk = ' 노래방에 갔다. 왜 이런 일을 해야 할까...';
        break;
      case 3:
        talk = ' 영화관에 갔다. 사람들 사이에 섞이지 못한다는 느낌이 지워지지 않는다.';
        break;
      case 4:
        hook.arg = 2;
        talk = ' 눈에 띄지 않는 분홍색 가게로 곧장 걸어갔다...';
    }
    await era.printAndWait([me.get_colored_name(), `은(는) 혼자 상점가에 왔다. ${talk}`]);
    const my_marks = new MyEduMarks();
    /** @author Mr.E. */
    if (my_marks.kamen_rider === 1 && Math.random() < 0.05) {
      my_marks.kamen_rider = 0;
      await print_event_name(['가면(?)라이더!'], me);
      await era.printAndWait(['상점가를 지나가다 보니, 한 가게에서 이벤트를 하고 있는 것을 발견했다:']);
      await era.printAndWait(['「가면라이더 흉내 내기, 따뜻한 마음 전하기～」']);
      await era.printAndWait([
        '가게 주인은 이 행사가 아이들에게 따뜻한 마음을 전하기 위해 마련된 것이라고 설명했지만, 옷은 충분해도 인력이 부족하다고 했다.',
      ]);
      await era.printAndWait(['그는 이렇게 해서 아이들의 생활이 더욱 풍요로워지기를 바란다고 한다.']);
      await era.printAndWait(['참가하면, 맞는 가면라이더 의상을 입어볼 수도 있다.']);
      era.printButton('「시간도 남으니 한번 참가해 볼까.」', 1);
      era.printButton('「아, 됐어. 이런 시끌벅적한 행사는 내 스타일이 아니야.」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '가게 주인은 ',
          me.get_colored_name(),
          '의 노력에 감사하며, ',
          me.get_colored_name(),
          '을(를) 탈의실로 안내해 ',
          me.get_colored_name(),
          '이(가) 직접 옷을 고를 수 있도록 해 주었다——',
        ]);
        era.printButton('「당근맨!」（명성+15）', 1);
        era.printButton('「마법소녀!(가면라이더 버전)」（우마코인+25）', 2);
        era.printButton(
          '「???一좀 이상한 옷」（명성+20，일부 담당 우마무스메의 컨디션+1）',
          3,
          {
            disabled:
              new Array(14)
                .fill(0)
                .map((_, i) => 70 + i)
                .findIndex((e) => era.get(`item:${e}`) > 0) === -1,
          },
        );
        switch (await era.input()) {
          case 1:
            await era.printAndWait([
              '대호평이었다! 왠지 낯익은 학생들도 보이는 것 같은데?!',
            ]);
            sys_change_fame(15);
            break;
          case 2:
            await era.printAndWait(['반응이 아주 좋다! 비록 이 옷은 입기가 꽤 힘들지만……']);
            sys_change_money(25);
            break;
          case 3:
            await era.printAndWait([
              '점원의 도움으로 타이트한 옷과 몇 조각의 이상한 천을 입었는데, 속옷처럼 보이는 그 천이 알고 보니 얼굴을 가리는 것뿐이라니?',
            ]);
            await era.printAndWait([
              '가게 마스코트로서의 효과는 좋지만, 뭔가 잃어버린 것 같은 기분이 든다……',
            ]);
            sys_change_fame(20);
            sys_filter_chara('cflag', '모집상태', recruit_flags.yes).reduce(
              (p, c) => {
                if (
                  c > 0 &&
                  era.get(`cflag:${c}:종족`) > 0 &&
                  era.get(`love:${c}`) >= 50
                ) {
                  sys_change_lust(c, 1000);
                  return p || sys_change_motivation(c, 1);
                }
                return p;
              },
              false,
            ) && (await era.waitAnyKey());
        }
      }
    }
  }

  async school_atrium(hook) {
    hook.arg = false;
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) 혼자 안뜰에 와 할일 없이 시간을 죽였다.',
    ]);
  }

  async school_rooftop() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) 혼자 옥상에 올라와, 금연 경고판을 무시하고 담배 한 대 피울까 고민했다.',
    ]);
  }
};
