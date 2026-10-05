// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const era = require('#/era-electron');
const { get_random_entry } = require('#/utils/list-utils');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = {
  ...require('#/i18n/ja-JP/timon/child/daily'),

  select_0(child, you) {
    const talk = [
      () =>
        era.print([
          '아이는 아직 옹알이를 하고 있었지만, ',
          you.get_colored_name(),
          '을(를) 보자마자 기쁜 듯 종종걸음으로 달려왔다.',
        ]),
      () =>
        era.print([
          child.get_colored_name(),
          '이(가) 바닥에서 끊임없이 구르고 있다. ',
          you.get_colored_name(),
          '은(는) ',
          child.get_colored_name(),
          '이(가) 구르다가 지구 반대편까지 굴러가 버리는 건 아닐까 걱정했다.',
        ]),
    ];
    get_random_entry(talk)();
  },

  select_1(child, you) {
    era.print([
      child.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '의 지도 아래 달리기 연습을 했고, 석양이 지는 강변 산책로에는 두 개의 기다란 그림자가 드리워졌다.',
    ]);
  },

  select_2(child, you, parent) {
    era.print([
      child.get_colored_name(),
      '은(는) 나이가 들면서 어느새 ',
      parent.get_colored_name(),
      ' 못지않은 미인으로 자라났다. 달리기 실력 역시 청출어람이었다.',
    ]);
  },

  async talk_0(child, you, callname) {
    await child.say_and_wait([
      callname,
      '……! 나는 ',
      child.get_colored_name(),
      '야!',
    ]);
  },

  async talk_1(child, you, callname) {
    await child.say_and_wait([callname, '! 나 배고파!']);
  },

  growth_0: (() => {
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '과(와) ',
          father.get_colored_name(),
          '은(는) 함께 아이와 즐겁게 놀며 행복한 가족의 시간을 보냈다.',
        ]);
        if (
          LifeEventMarks.get_marks(child.id).unexpected_child ===
          unexpected_pregnant_enum.father_sleep
        ) {
          await era.printAndWait([
            father.get_colored_name(),
            '은(는) 자신과 어딘가 닮은 ',
            child.get_colored_name(),
            '을(를) 바라보며, 앞으로의 가정 생활에 대해 생각했다……',
          ]);
        }
      } else if (
        LifeEventMarks.get_marks(child.id).unexpected_child ===
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
          era.get(`cflag:${father.id}:6`) >= era.get(`cflag:${mother.id}:6`) + 5
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
        if (!mother.id && era.get('flag:35') >= 2) {
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
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 결국 경계를 풀고 ',
            father.get_colored_name(),
            '과(와) 함께 아이와 놀아주었다.',
          ]);
        }
      }
    };
    f.title = '성장';
    return f;
  })(),

  growth_1: (() => {
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
        await era.printAndWait([
          mother.get_colored_name(),
          '은(는) ',
          father.get_colored_name(),
          '의 어깨에 기대어 하루하루 성장하는 아이를 바라보며, 행복한 미소를 지었다.',
        ]);
      } else {
        if (!mother.id && era.get('flag:35') >= 2) {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 하루하루 성장하는 아이를 바라보며, 마음속으로 ',
            father.get_colored_name(),
            '에 대한 생각이 더욱 복잡해졌다.',
          ]);
        } else {
          await era.printAndWait([
            mother.get_colored_name(),
            '은(는) 자신을 이토록 따르는 아이가 머지않아 날개를 펴고 곁을 떠날 것이라 생각하니 씁쓸함을 느꼈다.',
          ]);
        }
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            '하지만 ',
            mother.get_colored_name(),
            '은(는) ',
            father.get_colored_name(),
            '의 어깨에 기대어 하루하루 성장하는 아이를 바라보며, 조금이나마 충족감을 맛보았다.',
          ]);
        }
      }
    };
    f.title = '본격화';
    return f;
  })(),

  growth_2: (() => {
    const f = async (child, father, mother) => {
      if (era.get(`love:${mother.id || father.id}`) >= 90) {
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
        if (!mother.id && era.get('flag:35') >= 2) {
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
        if (era.get(`mark:${mother.id || father.id}:2`) >= 2) {
          await era.printAndWait([
            '하지만 ',
            mother.get_colored_name(),
            '은(는) 이내 그런 생각들을 떨쳐내고 아이가 학원에서 쓸 물건들을 적극적으로 준비하기 시작했다.',
          ]);
        }
      }
    };
    f.title = '입학';
    return f;
  })(),

  async load_talk(child, callname, call_child) {
    switch (era.get(`cflag:${child.id}:15`)) {
      case 0:
        await child.say_and_wait([
          '으아아앙——',
          callname,
          '—— ',
          callname,
          '——안아줘——',
        ]);
        break;
      case 1:
        await child.say_and_wait([
          callname,
          '……저기…… 두고 가지 말아줘, ',
          call_child,
          '을(를)…… (훌쩍)',
        ]);
    }
  },

  // [번역 완료] talk_2
  async talk_2(child, you, callname) {
    const temp = [];
    // TALENTNAME:35 = 腋毛成长
    if (era.get(`talent:${child.id}:35`)) {
      temp.push('겨드랑이에 털이 나기 시작했어……');
    }
    // TALENTNAME:36 = 阴毛成长
    if (era.get(`talent:${child.id}:36`)) {
      temp.push('아래쪽에도 털이 나기 시작했어……');
    }
    if (child.sex_code !== 1) {
      temp.push('가슴이 커졌어……');
      // TALENTNAME:32 = 泌乳
      if (era.get(`talent:${child.id}:32`)) {
        temp.push('하얀 게 나오기 시작했어……');
      }
    }
    if (child.sex_code > 0) {
      temp.push('아래쪽이 커졌어……');
    }
    await child.say_and_wait([
      callname,
      '……몸 상태가 좀 이상해서…… 저기,',
      get_random_entry(temp),
    ]);
  },

  // [번역 완료] talk_estrus
  async talk_estrus(child, you, callname) {
    child.say(['하아……하아……', callname, '……더워…… 이게 발정기……?']);
    await era.printAndWait([
      '그 후,',
      you.get_colored_name(),
      '은(는) 급히 ',
      child.get_colored_name(),
      '에게 발정 억제제를 사러 달려갔다.',
    ]);
  },
};
