const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_show_result,
} = require('#/system/ero/sys-prepare-ero');

const page_ero = require('#/page/page-ero');

/**
 * @param {number} cid
 * @param {number} sid
 * @param {number} master
 * @param {boolean} is_rape
 */
async function quick_into_3p(cid, sid, master = 0, is_rape = false) {
  begin_and_init_ero(0, cid, sid);
  era.set('tflag:주도권', master);
  if (is_rape) {
    era.set('tflag:강간', master);
  }
  era.set('tflag:현재조수', sid);
  await page_ero(cid, true);
  await end_ero_and_show_result();
}

module.exports = quick_into_3p;
