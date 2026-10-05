// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ja-JP/snippets.js
// 대상 함수/속성: ws_punishment3
const era = require('#/era-electron');

const { akuochi } = require('#/data/color-const');

module.exports = {
  /**
   * 打字效果
   * @param {string} content
   * @param {string} color
   * @param {number} interval
   */
  async typing(content, color, interval = 125) {
    if (interval < 100) {
      interval = 100;
    } else if (interval > 1000) {
      interval = 1000;
    }
    let print_flag = true;
    for (let i = 1; i <= content.length; ++i) {
      (print_flag ? era.print : era.replaceText)(
        ['<', content.slice(0, i), '>'],
        {
          align: 'center',
          color,
          fontSize: '2.25rem',
          fontWeight: 'bold',
        },
      );
      await era.delay(interval);
      print_flag = false;
    }
  },
  /**
   * 悪堕選択肢
   * @param {string} bt_yes
   * @param {string} bt_no
   * @param {boolean} change_color
   */
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
