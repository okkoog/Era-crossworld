const era = require('#/era-electron');

/** @returns {Promise<number>} */
function select_action_in_shopping_street() {
  era.printInColRows(
    { columns: [{ content: '상점가에 가서 뭘 할까?', type: 'text' }] },
    {
      columns: [
        '아케이드',
        '경품 추첨하러',
        '노래방',
        '영화 보러',
        era.get('flag:현재상호작용캐릭터') > 0 ? '' : '작은 분홍색 가게',
      ]
        .filter((e) => e)
        .map((action, i, l) => ({
          accelerator: i,
          config: { align: 'center', width: Math.floor(24 / l.length) },
          content: `${action} 가기`,
          type: 'button',
        })),
      config: { horizontalAlign: 'space-evenly' },
    },
  );
  return era.input();
}

module.exports = select_action_in_shopping_street;
