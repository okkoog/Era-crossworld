const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { buff_colors } = require('#/data/color-const');
const { unexpected_pregnant_enum } = require('#/data/ero/status-const');

/**
 * @author 雞雞
 * @author 黑奴队长
 * @param {CharaTalk} father
 * @param {CharaTalk} mother
 * @param {number} unexpected_pregnant
 */
async function pregnant_report_in_love(father, mother, unexpected_pregnant) {
  await print_event_name('잉태', mother);
  await era.printAndWait([
    mother.get_colored_name(),
    ' 은(는) 기쁨에 찬 눈빛으로 ',
    {
      content:
        era.get(`mark:${mother.id}:음문`) === 3
          ? '아랫배 음문에 나타난 임신 징조'
          : '손에 든 임신 테스트기',
      color: buff_colors[2],
    },
    '를 바라보며, 활기찬 목소리로 ',
    father.get_colored_name(),
    '에게 기쁜 소식을 전했다.',
  ]);
  if (unexpected_pregnant === unexpected_pregnant_enum.father_sleep) {
    await era.printAndWait([
      father.get_colored_name(),
      '이(가) 몇 번이고 되물어 확인했지만, 아이는 자신의 혈육이라는 대답을 들었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      father.get_colored_name(),
      '은(는) 이에 대해 전혀 기억이 없다……',
    ]);
  } else {
    if (unexpected_pregnant === unexpected_pregnant_enum.mother_sleep) {
      await era.printAndWait([
        '어떻게 임신했는지에 대한 기억은 전혀 없지만, ',
        mother.get_colored_name(),
        '은(는) 아이의 아버지가 자신이 사랑하는 ',
        father.get_colored_name(),
        '임을 추호도 의심하지 않았다.',
      ]);
    }
    await era.printAndWait([
      father.get_colored_name(),
      '은(는) ',
      mother.get_colored_name(),
      '을(를) 조심스럽게 끌어안으며, 함께 새로운 생명이 잉태된 순간을 축하했다……',
    ]);
  }
}

module.exports = pregnant_report_in_love;