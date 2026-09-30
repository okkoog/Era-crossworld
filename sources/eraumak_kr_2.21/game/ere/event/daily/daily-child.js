/**
 * @file 日常地文 - 孩子
 * @author 雞雞
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const recruit_flags = require('#/data/event/recruit-flags');

class DailyChild extends CustomizedDaily {
  async load_talk() {
    let temp;
    switch (era.get(`cflag:${this.id}:성장단계`)) {
      case 0:
        temp = {
          color: get_chara_color(0),
          content: era.get(`cflag:${this.id}:부계캐릭`) ? '마마' : '파파',
          fontWeight: 'bold',
        };
        await get_chara_talk(this.id).say_and_wait([
          '으아아앙——',
          temp,
          '—— ',
          temp,
          '——안아줘——',
        ]);
        break;
      case 1:
        await get_chara_talk(this.id).say_and_wait([
          sys_get_colored_callname(this.id, 0),
          '……저기…… ',
          sys_get_colored_callname(0, this.id),
          '……두고 가지 말아줘…… (훌쩍)',
        ]);
    }
  }

  async growth(stage) {
    const child = get_chara_talk(this.id),
      father = get_chara_talk(era.get(`cflag:${this.id}:부계캐릭`)),
      mother = get_chara_talk(era.get(`cflag:${this.id}:모계캐릭`)),
      love = era.get(`love:${mother.id || father.id}`),
      stockholm = era.get(`mark:${mother.id || father.id}:동심`),
      is_pregnant_slave = !mother.id && era.get('flag:징벌강도') === 3;
    era.drawLine();
    if (stage === 0) {
      // 育儿
      await print_event_name('성장', child);
      if (love >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '과(와) ',
          father.get_colored_name(),
          '은(는) 함께 아이와 즐겁게 놀며 행복한 가족의 시간을 보냈다.',
        ]);
        if (
          LifeEventMarks.get_marks(this.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) 자신과 어딘가 닮은 ',
            child.get_colored_name(),
            '을(를) 바라보며, 앞으로의 가정 생활에 대해 생각했다……',
          ]);
        }
      } else {
        if (
          LifeEventMarks.get_marks(this.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            mother.get_colored_name(),
            '과(와) ',
            father.get_colored_name(),
            '은(는) 함께 아이와 즐겁게 놀며 행복한 가족의 시간을 보냈다.',
          ]);
          await era.printAndWait([
            '그 후 ',
            mother.get_colored_name(),
            '은(는) 아이를 등에 업은 ',
            father.get_colored_name(),
            '에게 미안함이 담긴 시선을 보냈다.',
          ]);
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) ',
            mother.get_colored_name(),
            '의 ',
            era.get(`cflag:${father.id}:키`) >=
            era.get(`cflag:${mother.id}:키`) + 5
              ? '머리'
              : '뺨',
            '을(를) 쓰다듬으며 전혀 신경 쓰지 않는다는 뜻을 전했다.',
          ]);
          await era.printAndWait([
            '용서받은 ',
            mother.get_colored_name(),
            '은(는) 다시 시선을 ',
            child.get_colored_name(),
            '에게 돌리며 자애로운 미소를 지었다.',
          ]);
        } else {
          if (is_pregnant_slave) {
            await era.printAndWait([
              mother.get_colored_name(),
              '은(는) 따뜻한 미소를 지으며 아이와 놀아주었고 ',
              child.get_colored_name(),
              '도 ',
              mother.get_colored_name(),
              '의 비참한 인생에서 얼마 안 되는 위안이 되었다.',
            ]);
          } else {
            await era.printAndWait([
              mother.get_colored_name(),
              '은(는) ',
              father.get_colored_name(),
              '이(가) 아이와 함께하려는 행동을 거부하진 않았지만 ',
              father.get_colored_name(),
              '에게는 무관심한 태도로 일관했다.',
            ]);
          }
          if (stockholm >= 2) {
            await era.printAndWait([
              mother.get_colored_name(),
              '은(는) 결국 경계를 풀고 ',
              father.get_colored_name(),
              '과(와) 함께 아이와 놀아주었다.',
            ]);
          }
        }
      }
    } else if (stage === 1) {
      // 本格化
      await print_event_name('본격화', child);
      LifeEventMarks.get_marks(this.id).unexpected_child = 0;
      if (love >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) ',
          father.get_colored_name(),
          '의 어깨에 기대어 하루하루 성장하는 아이를 바라보며, 행복한 미소를 지었다.',
        ]);
      } else {
        if (is_pregnant_slave) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 자신을 이토록 따르는 아이가 머지않아 날개를 펴고 곁을 떠날 것이라 생각하니 씁쓸함을 느꼈다.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 하루하루 성장하는 아이를 바라보며, 마음속으로 ',
            father.get_colored_name(),
            '에 대한 생각이 더욱 복잡해졌다.',
          ]);
        }
        if (stockholm >= 2) {
          await era.printAndWait([
            '하지만 ',
            mother.get_colored_name(),
            '은(는) ',
            father.get_colored_name(),
            '의 어깨에 기대어 하루하루 성장하는 아이를 바라보며, 조금이나마 충족감을 맛보았다.',
          ]);
        }
      }
    } else if (stage === 2) {
      // 入学
      await print_event_name('입학', child);
      if (love >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '과(와) ',
          father.get_colored_name(),
          '은(는) 아이의 입학 동의서에 각자의 이름을 서명했다.',
        ]);
        await era.printAndWait([
          '서명을 마친 후 ',
          mother.get_colored_name(),
          '은(는) 아이가 학원에서 쓸 물건들을 적극적으로 준비하기 시작했다.',
        ]);
      } else {
        if (is_pregnant_slave) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 아이 역시 트레센 학원에 입학한다는 사실을 알고는, 갑자기 등골이 서늘해짐을 느꼈다……',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            '과(와) ',
            father.get_colored_name(),
            '은(는) 아이의 입학 동의서에 각자의 이름을 서명했다.',
          ]);
          await era.printAndWait([
            '서명을 마칠 때까지도 ',
            mother.get_colored_name(),
            '은(는) 여전히 비현실적인 허무함을 느꼈다.',
          ]);
        }
        if (stockholm >= 2) {
          await era.printAndWait([
            '하지만 ',
            mother.get_colored_name(),
            '은(는) 이내 그런 생각들을 떨쳐내고 아이가 학원에서 쓸 물건들을 적극적으로 준비하기 시작했다.',
          ]);
        }
      }
    }
  }

  select() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (sys_check_awake(this.id)) {
      const growth = era.get(`cflag:${this.id}:성장단계`);
      if (growth === 0) {
        era.print(
          get_random_entry([
            [
              '아이는 아직 옹알이를 하고 있었지만, ',
              me.get_colored_name(),
              '을(를) 보자마자 기쁜 듯 종종걸음으로 달려왔다.',
            ],
            [
              chara.get_colored_name(),
              '이(가) 바닥에서 끊임없이 구르고 있다. ',
              me.get_colored_name(),
              '은(는) ',
              chara.get_colored_name(),
              '이(가) 구르다가 지구 반대편까지 굴러가 버리는 건 아닐까 걱정했다.',
            ],
          ]),
        );
      } else if (growth === 1) {
        let temp =
          era.get(`cflag:${this.id}:부계캐릭`) ||
          era.get(`cflag:${this.id}:모계캐릭`);
        if (!era.get(`cflag:${temp}:종족`)) {
          temp = get_random_entry(
            sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
              (e) => era.get(`cflag:${e}:종족`),
            ),
          );
        }
        const uma_sex_title = era.get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메';
        era.print(
          get_random_entry([
            [
              chara.get_colored_name(),
              '이(가) 진지하게 레이스 ',
              uma_sex_title,
              ' 관련 지식 서적을 넘겨보고 있다. ',
              chara.get_colored_name(),
              '에게 가장 좋아하는 레이스 ',
              uma_sex_title,
              '가 누구냐고 물으면 ',
              chara.get_colored_name(),
              '은(는) 항상 자랑스럽게 ',
              get_chara_talk(temp).get_colored_name(),
              '을(를) 언급한다.',
            ],
            [
              chara.get_colored_name(),
              '은(는) ',
              me.get_colored_name(),
              '의 지도 아래 달리기 연습을 했고, 석양이 지는 강변 산책로에는 두 개의 기다란 그림자가 드리워졌다.',
            ],
          ]),
        );
      } else if (
        era.get(`cflag:${this.id}:성장단계`) === 2 &&
        era.get(`cflag:${this.id}:육성턴수합산`) === 'x' &&
        Math.random() < 1 / 3
      ) {
        era.print([
          chara.get_colored_name(),
          '은(는) 나이가 들면서 어느새 ',
          get_chara_talk(
            era.get(`cflag:${this.id}:모계캐릭`) ||
              era.get(`cflag:${this.id}:부계캐릭`),
          ).get_colored_name(),
          ' 못지않은 미인으로 자라났다. 달리기 실력 역시 청출어람이었다.',
        ]);
      } else {
        return super.select();
      }
    } else {
      era.print([chara.get_colored_name(), '은(는) 깊이 잠들어 있다.']);
    }
  }

  async talk() {
    const chara = get_chara_talk(this.id),
      father_id = era.get(`cflag:${this.id}:부계캐릭`),
      growth = era.get(`cflag:${this.id}:성장단계`);
    if (!sys_check_awake(this.id)) {
      return await super.talk();
    }
    if (growth === 0) {
      await chara.say_and_wait([
        {
          color: get_chara_color(0),
          content: father_id === 0 ? '파파' : '마마',
          fontWeight: 'bold',
        },
        '……! 나는 ',
        chara.get_colored_name(),
        '야!',
      ]);
    } else if (growth === 1) {
      await chara.say_and_wait([
        sys_get_colored_callname(this.id, 0),
        '! 나 배고파!',
      ]);
    } else if (growth === 2) {
      const temp = [];
      if (era.get(`talent:${this.id}:겨드랑이털성장`)) {
        temp.push('겨드랑이에 털이 났어……');
      }
      if (era.get(`talent:${this.id}:음모성장`)) {
        temp.push('아래에 털이 났어……');
      }
      if (chara.sex_code !== 1) {
        temp.push('가슴이 커졌어……');
        if (era.get(`talent:${this.id}:모유분비`)) {
          temp.push('하얀 게 흘러나와……');
        }
      }
      if (chara.sex_code > 0) {
        temp.push('아래가 커졌어……');
      }
      await chara.say_and_wait([
        sys_get_colored_callname(this.id, 0),
        '……내 몸이 좀 이상해…… 그게, ',
        get_random_entry(temp),
      ]);
    } else if (
      era.get(`status:${this.id}:발정`) &&
      (father_id === 0 || era.get(`cflag:${this.id}:모계캐릭`) === 0)
    ) {
      chara.say([
        '하아…… 하아……',
        sys_get_colored_callname(this.id, 0),
        '……나 너무 더워…… 이게 발정기라는 거야……?',
      ]);
      await era.printAndWait([
        '그 후 ',
        get_chara_talk(0).get_colored_name(),
        '은(는) 서둘러 ',
        chara.get_colored_name(),
        '에게 줄 발정 억제제를 사 왔다.',
      ]);
    } else {
      await super.talk();
    }
  }
}

module.exports = DailyChild;