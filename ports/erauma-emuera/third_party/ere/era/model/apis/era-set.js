const EraApiBase = require('@/era/model/era-api-base');

const { safeUndefinedCheck } = require('@/renderer/utils/value-utils');

const initDataTables = {
  flag: true,
  global: true,
  item: true,
  tflag: true,
  love: true,
};

/** @this EraApi */
function eraSet(key, val, isAdd) {
  if (!key) {
    return undefined;
  }
  const keyArr = key.split(':').map((x) => x.toLocaleLowerCase());
  let tableName, charaIndex, valueIndex, handler;
  tableName = keyArr[0];
  if (tableName === 'param') {
    tableName = 'palam';
  } else if (tableName.endsWith('jewel')) {
    tableName = tableName.substring(0, tableName.length - 5) + 'juel';
  }
  switch (keyArr.length) {
    case 1:
      switch (tableName) {
        case 'no':
          return this.data.no;
        case 'gameconfig':
          return this.config;
        case 'gamebase':
          return this.staticData.gamebase;
        case 'version':
          if (typeof val === 'number') {
            this.data.version = val;
          }
          return this.data.version;
        case 'chara':
          return Object.keys(this.staticData.chara)
            .map(Number)
            .sort((a, b) => a - b);
        default:
          if (tableName.endsWith('names')) {
            handler = Object.keys;
            tableName = tableName.substring(0, tableName.length - 5);
          } else if (tableName.endsWith('keys')) {
            handler = Object.values;
            tableName = tableName.substring(0, tableName.length - 4);
          } else if (tableName.endsWith('entries')) {
            handler = Object.entries;
            tableName = tableName.substring(0, tableName.length - 7);
          }
          if (handler !== undefined) {
            switch (tableName) {
              case 'palam':
              case 'param':
              case 'jewel':
                return handler(this.staticData.juel);
              case 'item':
                return handler(this.staticData.item.name);
              default:
                if (this.staticData[tableName]) {
                  return handler(this.staticData[tableName]);
                }
            }
          } else if (tableName === 'global') {
            return this.global;
          } else if (
            this.data[tableName] &&
            (initDataTables[tableName] ||
              this.extendedTables[tableName] === EraApiBase.tableType.normal)
          ) {
            return this.data[tableName];
          }
      }
      break;
    case 2:
      valueIndex = keyArr[1];
      switch (tableName) {
        case 'callname':
          return this.data.callname[valueIndex] || {};
        case 'chara':
          return this.staticData.chara[valueIndex];
        case 'love':
          if (val !== undefined) {
            if (isAdd) {
              this.data.love[valueIndex] += val;
            } else {
              this.data.love[valueIndex] = val;
            }
          }
          return this.data.love[valueIndex];
        case 'global':
          valueIndex = safeUndefinedCheck(
            this.staticData.global[valueIndex],
            valueIndex,
          );
          if (val !== undefined) {
            if (isAdd) {
              this.global[valueIndex] += val;
            } else {
              this.global[valueIndex] = val;
            }
          }
          return this.global[valueIndex];
        case 'palamname':
        case 'paramname':
        case 'jewelname':
          return this.fieldNames.juel[valueIndex].n;
        case 'relation':
          return this.data.relation[valueIndex] || {};
        default:
          if (tableName.endsWith('name')) {
            tableName = tableName.substring(0, tableName.length - 4);
            if (tableName === 'item' && valueIndex === 'bought') {
              return (this.fieldNames[tableName][this.data.item.bought] || {})
                .n;
            }
            if (this.fieldNames[tableName]) {
              return this.fieldNames[tableName][valueIndex].n;
            }
          } else if (tableName.startsWith('item')) {
            if (valueIndex === 'bought') {
              if (val !== undefined) {
                this.data.item.bought = val;
              }
              return this.data.item.bought;
            }
            valueIndex = safeUndefinedCheck(
              this.staticData.item.name[valueIndex],
              valueIndex,
            );
            switch (tableName.substring(4)) {
              case 'price':
                tableName = 'price';
                break;
              case 'sales':
                tableName = 'sales';
                break;
              default:
                tableName = 'hold';
            }
            if (val !== undefined) {
              if (isAdd) {
                this.data.item[tableName][valueIndex] += val;
              } else {
                this.data.item[tableName][valueIndex] = val;
              }
            }
            return this.data.item[tableName][valueIndex];
          } else if (this.data[tableName]) {
            if (
              !initDataTables[tableName] &&
              this.extendedTables[tableName] !== EraApiBase.tableType.normal
            ) {
              return this.data[tableName][valueIndex];
            }
            valueIndex = safeUndefinedCheck(
              this.staticData[tableName][valueIndex],
              valueIndex,
            );
            if (val !== undefined) {
              if (isAdd) {
                this.data[tableName][valueIndex] += val;
              } else {
                this.data[tableName][valueIndex] = val;
              }
            }
            return this.data[tableName][valueIndex];
          }
      }
      break;
    case 3:
      charaIndex = keyArr[1];
      valueIndex = keyArr[2];
      switch (tableName) {
        case 'callname':
          if (!this.data.callname[charaIndex]) {
            return '-';
          }
          if (val !== undefined) {
            this.data.callname[charaIndex][valueIndex] = val;
          }
          return safeUndefinedCheck(
            this.data.callname[charaIndex][valueIndex],
            this.data.callname[valueIndex]
              ? this.data.callname[valueIndex][-2]
              : '-',
          );
        case 'relation':
          if (!this.data.relation[charaIndex]) {
            return undefined;
          }
          if (val !== undefined) {
            if (isAdd) {
              this.data.relation[charaIndex][valueIndex] += val;
            } else {
              this.data.relation[charaIndex][valueIndex] = val;
            }
          }
          return this.data.relation[charaIndex][valueIndex];
        case 'global':
          if (!this.global[charaIndex]) {
            return undefined;
          }
          if (val !== undefined) {
            if (isAdd) {
              this.global[charaIndex][valueIndex] += val;
            } else {
              this.global[charaIndex][valueIndex] = val;
            }
          }
          return this.global[charaIndex][valueIndex];
        case 'base':
          if (!this.data.base[charaIndex]) {
            return undefined;
          }
          valueIndex = safeUndefinedCheck(
            this.staticData.base[valueIndex],
            valueIndex,
          );
          if (val !== undefined) {
            if (isAdd) {
              this.data.base[charaIndex][valueIndex] += val;
            } else {
              this.data.base[charaIndex][valueIndex] = val;
            }
            if (this.data.maxbase[charaIndex][valueIndex] > 0) {
              this.data.base[charaIndex][valueIndex] = Math.min(
                this.data.maxbase[charaIndex][valueIndex],
                Math.max(0, this.data.base[charaIndex][valueIndex]),
              );
            }
          }
          return this.data.base[charaIndex][valueIndex];
        case 'deltabase':
        case 'maxbase':
          if (!this.data[tableName][charaIndex]) {
            return undefined;
          }
          valueIndex = safeUndefinedCheck(
            this.staticData.base[valueIndex],
            valueIndex,
          );
          if (val !== undefined) {
            if (isAdd) {
              this.data[tableName][charaIndex][valueIndex] += val;
            } else {
              this.data[tableName][charaIndex][valueIndex] = val;
            }
          }
          return this.data[tableName][charaIndex][valueIndex];
        default:
          if (tableName.startsWith('static')) {
            tableName = tableName.substring(6);
            if (!this.staticData.chara[charaIndex]) {
              return undefined;
            }
            if (!this.staticData[tableName]) {
              return this.staticData.chara[charaIndex][valueIndex];
            }
            valueIndex = safeUndefinedCheck(
              this.staticData[tableName][valueIndex],
              valueIndex,
            );
            return this.staticData.chara[charaIndex][tableName][valueIndex];
          }
          if (!this.data[tableName] || !this.data[tableName][charaIndex]) {
            return undefined;
          }
          switch (tableName) {
            case 'palam':
            case 'gotjuel':
            case 'delta':
              valueIndex = safeUndefinedCheck(
                this.staticData.juel[valueIndex],
                valueIndex,
              );
              break;
            case 'nowex':
              valueIndex = safeUndefinedCheck(
                this.staticData.ex[valueIndex],
                valueIndex,
              );
              break;
            default:
              valueIndex = safeUndefinedCheck(
                this.staticData[tableName][valueIndex],
                valueIndex,
              );
          }
          if (val !== undefined) {
            if (isAdd) {
              this.data[tableName][charaIndex][valueIndex] += val;
            } else {
              this.data[tableName][charaIndex][valueIndex] = val;
            }
          }
          return this.data[tableName][charaIndex][valueIndex];
      }
  }
  this.era.error(`key error in getter/setter! key (${key})`, new Error().stack);
  return undefined;
}

module.exports = eraSet;
