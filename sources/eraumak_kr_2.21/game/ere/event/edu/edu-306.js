/**
 * @file 카시모토 리코 - 육성
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

const CustomizedEdu = require('#/event/edu/edu-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

module.exports = class extends CustomizedEdu {
  /**
   * @author 黑奴队长
   * @param {CharaTalk} riko
   * @param {CharaTalk} me
   */
  async fail(riko, me) {
    await print_event_name('실패', riko);
    const glasse = get_chara_talk(202),
      cocon = get_chara_talk(203);
    await printAndWait([
      glasse.get_colored_name(),
      '와 ',
      cocon.get_colored_name(),
      '의 육성이 종료되었다.',
    ]);
    await printAndWait([
      riko.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 크게 질책하지 않았다.',
    ]);
    await printAndWait([
      '두 담당 우마무스메를 달래준 후, ',
      riko.sex,
      '는 ',
      me.get_colored_name(),
      '과(와) 함께 조용히 학원 안을 걸었다.',
    ]);
    if (get('cflag:202:육성횟수') === 1) {
      await printAndWait([
        '트레이닝실에 가까워졌을 때, ',
        riko.sex,
        '는 비로소 담담하게 입을 열어 ',
        me.get_colored_name(),
        '이(가) 전력을 다했는지 물었다.',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '이(가) 뭐라 반응하기도 전에, ',
        riko.sex,
        '는 곧장 사무실로 향했다.',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '은(는) 제자리에 서서, 학원 내에 떠도는 ',
        glasse.get_uma_sex_title(),
        '의 두 번째 기회에 대한 소문을 떠올렸다.',
      ]);
    } else {
      await printAndWait([
        '트레이닝실에 가까워졌을 때, ',
        riko.sex,
        '는 비로소 담담하게 입을 열어, ',
        me.get_colored_name(),
        '에게 다시 한번 도전할 용기가 있는지 물었다.',
      ]);
    }
    println();
    sys_like_chara(306, 0, -200 - 100 * get('cflag:202:육성횟수')) &&
      (await waitAnyKey());
  }

  /**
   * @author 黑奴队长
   * @param {CharaTalk} riko
   * @param {CharaTalk} me
   */
  async welcome(riko, me) {
    await print_event_name('환영', riko);
    await printAndWait([
      '어느 날, ',
      me.get_colored_name(),
      '은(는) 트레이닝실 입구에서 기다리고 있는 한 ',
      riko.get_phy_sex_title(),
      '을 보았다.',
    ]);
    await printAndWait([
      me.get_colored_name(),
      '은(는) ',
      riko.sex,
      '가 학원 이사장 대리인 ',
      riko.get_colored_actual_name(),
      '라는 것을 알아보고 서둘러 인사를 건넸다.',
    ]);
    await printAndWait([
      riko.get_colored_name(),
      '의 목소리는 정중하고 품위 있었으며, ',
      riko.sex,
      '는 신임 트레이너가 업무로 바쁠 수도 있겠지만 학원의 동료들끼리 서로 알아가는 것도 좋겠다고 말했다.',
    ]);
    await printAndWait([
      riko.sex,
      '는 ',
      me.get_colored_name(),
      '에게 근처에 있는 트레이너 사무실이 모든 트레이너가 공용으로 이용하는 곳이라며, ',
      me.get_colored_name(),
      '도 이용할 수 있다고 말했다. 물론 트레이닝실에서 계속 업무를 봐도 무방하다고도 말했다.',
    ]);
    await printAndWait([
      '다른 문의 사항이 있다면 ',
      me.get_colored_name(),
      '은(는) 트레이너 사무실에서 ',
      riko.sex,
      '를 찾을 수 있을 것이다. ',
      get_chara_talk(302).get_colored_name(),
      '이 출장으로 자리를 비워 ',
      riko.sex,
      '가 대신 근무할 때는 트레이너 사무실의 ',
      get_chara_talk(304).get_colored_name(),
      '룰 찾거나, 이사장실로 가서 ',
      riko.sex,
      '를 찾아보면 될 것이다.',
    ]);
    await printAndWait([
      '이 사실을 알린 뒤 ',
      riko.get_colored_name(),
      '는 떠났다. ',
      me.get_colored_name(),
      '은(는) 이사장 대리가 마음속에 품은 불만을 어렴풋이 느낄 수 있었다.',
    ]);
    println();
    sys_like_chara(306, 0, -25) && (await waitAnyKey());
    set('flag:사무실첫만남', 1);
  }
};