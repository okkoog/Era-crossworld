const era = require('#/era-electron');

/**
 * @param {number} cid
 * @returns {Promise<number>}
 */
function select_action_in_station(cid = 0) {
  era.printInColRows(
    { columns: [{ content: '역에 가서 무엇을 할까?', type: 'text' }] },
    {
      columns: ['식사', '데이트', '쇼핑']
        .map((action, i) => ({
          accelerator: i,
          content: `${action}`,
          type: 'button',
        }))
        .filter((_, i) => i !== 1 || cid > 0)
        .map((b, i, l) => ({
          config: {
            align: 'center',
            disabled: l.length === 3 && i === 1 && era.get(`love:${cid}`) < 50,
            width: 24 / l.length,
          },
          ...b,
        })),
    },
  );
  return era.input();
}

module.exports = select_action_in_station;
