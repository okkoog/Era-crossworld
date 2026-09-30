const era = require('#/era-electron');

/** @returns {Promise<number>} */
function select_action_in_atrium() {
  era.printInColRows(
    { columns: [{ content: '안뜰에서 함께 무엇을 할까?', type: 'text' }] },
    {
      columns: ['고목 구멍 구경하기', '데이트'].map((action, i) => ({
        accelerator: i * 100,
        config: { align: 'center', width: 12 },
        content: `${action}`,
        type: 'button',
      })),
    },
  );
  return era.input();
}

module.exports = select_action_in_atrium;
