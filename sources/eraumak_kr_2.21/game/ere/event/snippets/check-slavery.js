const era = require('#/era-electron');

module.exports = {
  /**
   * @param {number} cid
   * @returns {0|1|2|3} 0-normal, 1-slavery, 2-rape, 3-punishment
   */
  check_slavery(cid) {
    const love = era.get(`love:${cid}`);
    if (era.get(`mark:${cid}:음문`) > 0) {
      return 1;
    }
    if (love < 75) {
      if (era.get('flag:징벌강도') >= 2) {
        return 3;
      }
      if (love < 50) {
        if (
          era.get(`mark:${cid}:쾌락`) -
            Math.max(era.get(`mark:${cid}:고통`), era.get(`mark:${cid}:수치`)) +
            era.get(`mark:${cid}:동심`) -
            era.get(`mark:${cid}:반발`) >
          0
        ) {
          return 1;
        } else if (
          era.get(`mark:${cid}:고통`) > 0 ||
          era.get(`mark:${cid}:수치`) > 0 ||
          era.get(`mark:${cid}:반발`) > 0
        ) {
          return 2;
        }
      }
    }
    return 0;
  },
  /**
   * @param {number} cid character id
   * @param {number} sex_acc sex acceptable
   * @returns {1|2|3|4} 1-rape, 2-sex, 3-slave, 4-love
   */
  check_sub_slavery(cid, sex_acc) {
    if (era.get(`love:${cid}`) >= 50 && sex_acc >= 0) {
      return 4;
    }
    const meek = era.get(`mark:${cid}:순종`) - era.get(`mark:${cid}:반발`);
    if (era.get(`mark:${cid}:음문`) >= meek) {
      return 3;
    } else if (
      era.get(`mark:${cid}:쾌락`) -
        Math.max(era.get(`mark:${cid}:고통`), era.get(`mark:${cid}:수치`)) >=
      meek
    ) {
      return 2;
    } else {
      return 1;
    }
  },
};
