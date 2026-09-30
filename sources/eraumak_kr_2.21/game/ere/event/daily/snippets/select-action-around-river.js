const era = require('#/era-electron');

/** @returns {Promise<number>} */
function select_action_around_river() {
  era.printInColRows(
    { columns: [{ content: '강가에 가서 뭘 할까?', type: 'text' }] },
    {
      columns: ['낚시한다', '산책한다'].map((action, i) => ({
        accelerator: i * 100,
        config: { align: 'center', width: 12 },
        content: `${action}`,
        type: 'button',
      })),
    },
  );
  return era.input();
}

module.exports = select_action_around_river;
