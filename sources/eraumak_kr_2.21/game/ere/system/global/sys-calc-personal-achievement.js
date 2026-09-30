const era = require('#/era-electron');

const { get_chara_color } = require('#/data/chara-colors');
const title_desc = require('#/data/desc/titles.json');

class SysPersonalAchievement {
  /** @returns {Record<string,number>} */
  get #obj() {
    return era.get('global:캐릭터업적') || era.set('global:캐릭터업적', {});
  }

  /**
   * @param {number} cid
   * @returns {number}
   */
  get(cid) {
    return this.#obj[cid] || 0;
  }

  list() {
    return Object.entries(this.#obj)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
  }

  /**
   * @param {number} cid
   * @param {string} [title]
   * @returns {string}
   */
  describe(cid, title = era.get(`staticcstr:${cid}:칭호`)) {
    return `육성 주기 내에 모든 육성 목표를 달성했으며, 동시에，${(
      title_desc[title] || '육성 주기 내에 G1 레이스에서 6회 이상 우승.'
    ).substring(8)}`;
  }

  /**
   * @param {number} cid
   * @param {number} _val
   */
  set(cid, _val) {
    if (!this.#obj[cid] && _val) {
      const color = get_chara_color(cid);
      const title = era.get(`staticcstr:${cid}:칭호`);
      era.notify(
        [
          {
            color,
            content: `[${title}] `,
            fontSize: '1.25rem',
          },
          {
            color,
            content: era.get(`static:${cid}:name`),
            fontSize: '1.25rem',
            fontWeight: 'bold',
          },
          { isBr: true },
          this.describe(cid, title),
        ],
        '업적 달성!',
        'success',
        50000,
      );
    }
    return (this.#obj[cid] = _val);
  }
}

const sys_personal_achievement = new SysPersonalAchievement();

module.exports = sys_personal_achievement;
