const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon
   * @param {string} callname
   */
  async common_future(tachyon, callname) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      '에게 있어, 그런 가능성도 존재할까?',
    ]);
    await era.printAndWait(['찻집의 주인이 된 ', tachyon.get_colored_name()]);
    await era.printAndWait([
      '연구원의 길을 걸어 과학자가 된 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      '평범한 학생으로서 계속 진학하여 대학생이 되고, 이후 사회에 진출해 직장인이 된 ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      '에게도 있을까. 평범한 사람처럼 경기장을 떠나 자신만의 삶을 살아가는 나날이.',
    ]);
    era.println();
    await tachyon.say_and_wait(['……', callname, ', 자네, 나를 따라와 주겠나?']);
    await tachyon.say_and_wait('만약…… 내가 그런 가능성을 선택한다면 말이야.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '과 함께 레이스와는 관계없는, ',
      tachyon.get_uma_sex_title(),
      '의 속도와는 무관한 평온하고 평화로운 일상.',
    ]);
    await era.printAndWait('그런 삶은 분명 무척이나 아름다울 것이었다.');
    await era.printAndWait([
      '아무리 평범한 삶이라 할지라도 ',
      tachyon.get_colored_name(),
      '이 곁에 있다면, 결코 지루하지는 않을 것이었다.',
    ]);
  },
};