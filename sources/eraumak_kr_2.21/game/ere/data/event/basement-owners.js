const era = require('#/era-electron');

class BasementOwners {
  /** @returns {number[]} */
  get #obj() {
    return era.get('flag:지하실주인') || era.set('flag:지하실주인', []);
  }

  clear() {
    era.set('flag:지하실주인', []);
  }

  /**
   * @param {function(number,number,number[])} cb
   * @returns {number}
   */
  count(cb) {
    return this.#obj.filter(cb).length;
  }

  /**
   * @param {function(number,number,number[])} cb
   * @returns {number[]}
   */
  filter(cb) {
    return this.#obj.filter(cb);
  }

  /** @param {function(number,number,number[])} cb */
  for_each(cb) {
    this.#obj.forEach(cb);
    return this;
  }

  /**
   * @param {number} [index]
   * @returns {number|number[]}
   */
  get(index) {
    if (index !== undefined) {
      return this.#obj[index];
    }
    return this.#obj;
  }

  is_empty() {
    return this.#obj.length === 0;
  }

  length() {
    return this.#obj.length;
  }

  /** @param {number} chara_id */
  push(chara_id) {
    const obj = this.#obj;
    obj.push(chara_id);
    era.set(
      'flag:지하실주인',
      obj.filter((e, i, l) => i === l.indexOf(e)),
    );
  }
}

const basement_owners = new BasementOwners();

module.exports = basement_owners;
