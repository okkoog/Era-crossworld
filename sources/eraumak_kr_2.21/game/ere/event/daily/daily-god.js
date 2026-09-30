const {
  add,
  get,
  input,
  printAndWait,
  printMultiColumns,
  waitAnyKey,
} = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { money_color } = require('#/data/color-const');

class DailyGod extends CustomizedDaily {
  async borrow_money() {
    const god = get_chara_talk(this.id),
      me = get_chara_talk(0),
      fame = get('flag:현재명성');
    if (get('flag:현재명성') < 50) {
      await printAndWait('명성 부족');
      return;
    }
    printMultiColumns([
      { content: '얼마를 빌릴까?', type: 'text' },
      ...[
        { content: '400 우마코인（50 명성）', type: 'button' },
        { content: '800 우마코인（100 명성）', type: 'button' },
        { content: '1200 우마코인（150 명성）', type: 'button' },
        { content: '1600 우마코인（200 명성）', type: 'button' },
      ].map((e, i) => {
        e.accelerator = i + 1;
        e.config = { disabled: fame < 50 * (i + 1), width: 6 };
        return e;
      }),
      { accelerator: 99, content: '그만둔다', type: 'button' },
    ]);
    const ret = await input();
    if (ret === 99) {
      await printAndWait([
        me.get_colored_name(),
        '은(는) ',
        god.get_colored_name(),
        '에게 우마코인을 달라고 하던 기도를 포기했다……',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        '은(는) 트레센으로부터 보조금 ',
        { color: money_color, content: (250 * ret).toLocaleString() },
        ' 우마코인을 지급하겠다는 메세지를 받았지만……그 메세지는 무시당한 것 같다……',
      ]);
      add('flag:현재명성', -50 * ret);
      add('flag:현재코인', 400 * ret);
      sys_like_chara(this.id, 0, 25 * ret) && (await waitAnyKey());
    }
  }
}

module.exports = DailyGod;
