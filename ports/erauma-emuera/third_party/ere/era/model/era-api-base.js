const { existsSync } = require('fs');
const { join } = require('path');

const { resTypeEnum } = require('@/era/const');
const {
  safelyGetObjectEntry,
  toLowerCase,
} = require('@/renderer/utils/value-utils');

class EraApiBase {
  static tableType = { normal: 1, chara: 2 };
  static initCharaTable = [
    'abl',
    'talent',
    'cflag',
    'equip',
    'mark',
    'exp',
    'juel',
  ];

  allowWait = false;
  clearKey = undefined;
  debug = false;
  inputKey = undefined;
  isContinue = false;
  totalLines = 0;

  /** @param {Era} era */
  constructor(era) {
    this.era = era;
  }

  /** @returns {EraConfig} */
  get config() {
    return this.era.config;
  }

  /** @returns {EraData} */
  get data() {
    return this.era.data;
  }

  get fieldNames() {
    return this.era.fieldNames;
  }

  /** @returns {EraGlobal} */
  get global() {
    return this.era.global;
  }

  /** @returns {Record<string,EraResource>} */
  get res() {
    return this.era.res;
  }

  /** @returns {EraStatic} */
  get staticData() {
    return this.era.staticData;
  }

  /** @returns {Record<string,1|2>} */
  get extendedTables() {
    return this.era.extendedTables;
  }

  /** @returns {number} */
  addTotalLines() {
    this.allowWait = true;
    return ++this.totalLines;
  }

  /**
   * @param {number} lineCount
   * @returns {Promise<number>}
   */
  clearScreen(lineCount) {
    this.clearKey = new Date().getTime().toString();
    this.era.connect('clear', { clearKey: this.clearKey, lineCount });
    return new Promise((r) => {
      this.era.listen(this.clearKey, (_, ret) => {
        this.era.cleanListener(this.clearKey);
        this.clearKey = undefined;
        this.setTotalLines(ret);
        r(ret);
      });
    });
  }

  fillData() {
    Object.values(this.staticData.flag || {}).forEach(
      (num) => (this.data.flag[num] ??= 0),
    );
    if (this.staticData.item !== undefined) {
      Object.values(this.staticData.item.name).forEach((num) => {
        this.data.item.hold[num] ??= 0;
        this.data.item.sales[num] ??= 0;
        this.data.item.price[num] ??= this.staticData.item.price[num];
      });
    }
    if (this.staticData.base !== undefined) {
      ['base', 'maxbase'].forEach((t) => {
        this.data[t] ||= {};
        this.data.no.forEach((id) => {
          this.data[t][id] ||= {};
          Object.values(this.staticData.base).forEach(
            (k) =>
              (this.data[t][id][k] ??=
                safelyGetObjectEntry(
                  this.staticData.chara,
                  `${id}.base.${k}`,
                ) ?? 0),
          );
        });
      });
    }
    EraApiBase.initCharaTable
      .filter((t) => this.staticData[t] !== undefined)
      .forEach((t) => {
        this.data[t] ||= {};
        this.data.no.forEach((id) => {
          if (typeof this.data[t][id] !== 'object') {
            this.data[t][id] = {};
          }
          Object.values(this.staticData[t]).forEach(
            (k) =>
              (this.data[t][id][k] ??=
                safelyGetObjectEntry(
                  this.staticData.chara,
                  `${id}.${t}.${k}`,
                ) ?? 0),
          );
        });
      });
    if (this.staticData.cstr !== undefined) {
      if (!this.data.cstr) {
        this.data.cstr = {};
        this.data.no.forEach((id) => {
          this.data.cstr[id] ||= {};
          Object.values(this.staticData.cstr).forEach(
            (k) =>
              (this.data.cstr[id][k] ??=
                safelyGetObjectEntry(
                  this.staticData.chara,
                  `${id}.chara.${k}`,
                ) ?? ''),
          );
        });
      }
    }
    Object.entries(this.era.extendedTables)
      .filter((t) => this.staticData[t[0]] !== undefined)
      .forEach(([t, type]) => {
        this.data[t] ||= {};
        if (type === EraApiBase.tableType.normal) {
          Object.values(this.staticData[t]).forEach(
            (n) => (this.data[t][n] ??= 0),
          );
        } else if (t[1] === EraApiBase.tableType.chara) {
          this.data.no.forEach((id) => {
            this.data[t][id] ||= {};
            Object.values(this.staticData[t]).forEach(
              (k) =>
                (this.data[t][id][k] ??=
                  safelyGetObjectEntry(
                    this.staticData.chara,
                    `${id}.${t}.${k}`,
                  ) ?? 0),
            );
          });
        }
      });
    this.data.no.forEach((id) => {
      this.data.callname[id][-1] ??= this.staticData.chara[id].name;
      this.data.callname[id][-2] ??=
        this.staticData.chara[id].callname ?? this.staticData.chara[id].name;
    });
    Object.entries(this.staticData.relationship.callname).forEach(
      ([pair, callname]) => {
        const [_from, _to] = pair.split('|');
        if (
          this.data.callname[_from] !== undefined &&
          this.data.callname[_to] !== undefined
        ) {
          this.data.callname[_from][_to] ??= callname;
        }
      },
    );
    Object.entries(this.staticData.relationship.relation).forEach(
      ([pair, relation]) => {
        const [_from, _to] = pair.split('|');
        if (
          this.data.relation[_from] !== undefined &&
          this.data.relation[_to] !== undefined
        ) {
          this.data.relation[_from][_to] ??= relation;
        }
      },
    );
  }

  getImageObject(names) {
    return (Array.isArray(names) ? names : [names])
      .map((e) => {
        const ret = (typeof e === 'string' ? { names: e } : e) || {};
        const altImages = (ret.names || '').split('\t').map(toLowerCase);
        delete ret.names;
        for (const img of altImages) {
          if (this.res[img] && this.res[img].type === resTypeEnum.image) {
            ret.src = this.res[img].path;
            ret.x = this.res[img].x;
            ret.y = this.res[img].y;
            ret.width = this.res[img].width;
            ret.height = this.res[img].height;
            ret.posX = this.res[img].posX;
            ret.posY = this.res[img].posY;
            return ret;
          }
        }
      })
      .filter((e) => e && e.src);
  }

  getWholeImage(names) {
    return (Array.isArray(names) ? names : [names])
      .map((e) => {
        const ret = (typeof e === 'string' ? { names: e } : e) || {};
        const altImages = (ret.names || '').split('\t').map(toLowerCase);
        delete ret.names;
        for (const img of altImages) {
          if (this.res[img] && this.res[img].type === resTypeEnum.image) {
            ret.height = this.res[img].height;
            ret.src = this.res[img].path || '';
            ret.width = this.res[img].width;
            return ret;
          }
        }
      })
      .filter((e) => e && e.src);
  }

  inColRows(func, ...columnObjects) {
    const data = {
      columns: columnObjects.map((x) => {
        const obj = Array.isArray(x) ? { columns: x, config: {} } : x;
        return {
          columns: obj.columns
            .filter((y) => typeof y === 'object' && y.type !== undefined)
            .map((y) => {
              if (y.type === 'image') {
                return {
                  type: 'image',
                  images: this.getImageObject(y.names),
                  config: y.config || {},
                };
              } else if (y.type === 'image.whole') {
                return {
                  type: 'image.whole',
                  images: this.getWholeImage(y.names),
                  config: y.config || {},
                };
              }
              return y;
            }),
          config: obj.config || {},
        };
      }),
    };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect(func, data);
  }

  async listSaveFiles() {
    const maxSavFiles =
      safelyGetObjectEntry(this.config, 'system.saveFiles') || 10;
    for (let i = 0; i <= maxSavFiles; ++i) {
      const existing = existsSync(join(this.era.path, `./sav/save${i}.sav`));
      if (existing) {
        if (!this.global.saves[i]) {
          this.global.saves[i] = 'UNNAMED SAVE FILE';
        } else if (this.global.saves[i].startsWith('(FILE LOST) ')) {
          this.global.saves[i] = this.global.saves[i].substring(12);
        }
      } else if (
        this.global.saves[i] &&
        !existing &&
        !this.global.saves[i].startsWith('(FILE LOST) ')
      ) {
        this.global.saves[i] = `(FILE LOST) ${this.global.saves[i]}`;
      }
    }
  }

  raw() {
    return { data: this.data, global: this.global };
  }

  resetParams() {
    if (this.inputKey) {
      this.era.cleanListener(this.inputKey);
      this.inputKey = undefined;
    }
    if (this.clearKey) {
      this.era.cleanListener(this.clearKey);
      this.clearKey = undefined;
    }
    this.isContinue = false;
  }

  setTotalLines(val) {
    if (this.totalLines !== val) {
      this.allowWait = true;
      return (this.totalLines = val);
    }
    return this.totalLines;
  }

  text(func, content, config) {
    config ||= {};
    const data = { content, config };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect(func, data);
  }
}

module.exports = EraApiBase;
