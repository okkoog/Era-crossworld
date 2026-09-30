const { get, set } = require('#/era-electron');

class YandereList {
  /** @returns {number[]} */
  get #obj() {
    return get('flag:얀데레리스트') || set('flag:얀데레리스트', []);
  }

  /** @param {number} cid */
  push(cid) {
    const yandere = get(`talent:${cid}:얀데레`);
    if (!yandere && get(`love:${cid}`) >= 50) {
      set(`status:${cid}:애정억제`, 1);
    }
    set(`talent:${cid}:얀데레`, yandere || 1);
    const obj = this.#obj;
    obj.push(cid);
    set(
      'flag:얀데레리스트',
      obj.filter((e, i, l) => i === l.indexOf(e)),
    );
  }

  /** @returns {number[]} */
  get() {
    return this.#obj;
  }

  /** @param {number[]} arr */
  set(arr) {
    set('flag:얀데레리스트', arr);
  }
}

const yandere_list = new YandereList();

module.exports = yandere_list;
