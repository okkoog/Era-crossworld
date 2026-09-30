/**
 * @file 키류인 아오이 - 육성
 * @author 黑奴队长（临时）
 */
const { get, printAndWait, println, waitAnyKey } = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedEdu {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} aoi
   * @param {CharaTalk} me
   */
  async fail(aoi, me) {
    const meek = get_chara_talk(201);
    await print_event_name('실패', aoi);
    await printAndWait([meek.get_colored_name(), ' 의 육성이 종료되었다.']);
    await printAndWait([
      me.get_colored_name(),
      '은(는) ',
      meek.sex,
      '와 눈에 띄는 성과를 거두지 못했다.',
    ]);
    await printAndWait([
      '트레이너 사무실 안, ',
      me.get_colored_name(),
      '과(와) ',
      aoi.get_colored_name(),
      '는 침묵 속에 마주 앉아 있었다.',
    ]);
    await printAndWait([
      aoi.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 크게 질책하지 않았지만, 오히려 그것이 ',
      me.get_colored_name(),
      '을(를) 더욱 부끄럽게 만들었다.',
    ]);
    if (get('cflag:201:육성횟수') === 1) {
      await printAndWait([
        '결국 ',
        aoi.get_colored_name(),
        '가 먼저 말문을 열고, 세 여신상 앞에서 경건하게 기도하면 두 번째 기회를 얻을 수 있다는 소문을 들은 적이 있다고 말했다.',
      ]);
      await printAndWait([
        '만약, ',
        me.get_colored_name(),
        '이(가) 무언가 알아낸 것이 있다면, ',
        me.get_colored_name(),
        '이(가) ',
        meek.get_colored_name(),
        '에게 다시 한번 기회를 주어 과거의 아쉬움을 만회하기를 바랐다.',
      ]);
    } else {
      await printAndWait([
        '결국 ',
        aoi.get_colored_name(),
        '가 먼저 말문을 열어 ',
        me.get_colored_name(),
        '이(가) 다음에는 조금 더 노력하여 ',
        meek.get_colored_name(),
        '에게 아쉬움을 남기지 않기를 바란다고 전했다.',
      ]);
    }
    println();
    sys_like_chara(304, 0, -200 - 100 * get('cflag:201:육성횟수')) &&
      (await waitAnyKey());
  }
};