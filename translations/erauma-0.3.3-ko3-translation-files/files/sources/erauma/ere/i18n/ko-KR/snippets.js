// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const akuochi = require('#/data/color-const')["akuochi"];
module.exports = {
  ...require("#/i18n/ja-JP/snippets"),

  // [번역 대상] degeneration_to_evil
  async degeneration_to_evil(bt_yes, bt_no, change_color = true) {
    const flag = era.get('flag:恶堕');
    era.printButton(bt_yes, 1, {
      buttonType: '',
      color: akuochi[1],
      disabled: flag === 1,
    });
    if (!flag) {
      era.print('（これを選ぶと、以降の関連イベントで受け入れる態度になる）', {
        color: akuochi[1],
      });
    }
    era.printButton(bt_no, 2, {
      buttonType: '',
      color: akuochi[0],
      disabled: flag === 2,
    });
    if (!flag) {
      era.print('（これを選ぶと、以降の関連イベントで拒む態度になる）', {
        color: akuochi[0],
      });
    }
    const ret = await era.input();
    if (ret === 1) {
      era.set('flag:恶堕', 2);
      change_color && era.setColor(akuochi[1]);
    } else {
      era.set('flag:恶堕', 1);
      change_color && era.setColor(akuochi[0]);
    }
    return ret;
  },
};
