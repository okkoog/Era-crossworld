const era = require('#/era-electron');

/**
 * @param {string|array} content
 * @param {string} [yes_button]
 * @param {string} [no_button]
 */
async function select_yes_or_no(content, yes_button, no_button) {
  era.printMultiColumns([
    {
      content,
      type: 'text',
    },
    {
      accelerator: 0,
      config: { align: 'center', width: 12 },
      content: yes_button || '확인',
      type: 'button',
    },
    {
      accelerator: 100,
      config: { align: 'center', width: 12 },
      content: no_button || '취소',
      type: 'button',
    },
  ]);
  return (await era.input()) === 0;
}

module.exports = select_yes_or_no;
