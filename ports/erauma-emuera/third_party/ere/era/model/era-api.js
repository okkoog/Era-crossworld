const { gzip } = require('compressing');
const {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} = require('fs');
const { join } = require('path');

const { loggerLevelEnum, resTypeEnum } = require('@/era/const');
const eraSet = require('@/era/model/apis/era-set');
const EraApiBase = require('@/era/model/era-api-base');
const {
  fuckOffUtf8Bom,
  getNumber,
  replaceStack,
  safelyGetObjectEntry,
  simplifiedStack,
  toLowerCase,
} = require('@/renderer/utils/value-utils');

class EraApi extends EraApiBase {
  add(k, v) {
    if (!v) {
      return this.get(k);
    }
    return this.set(k, v, true);
  }

  addCharacter(...ids) {
    const ret = ids.map((charaId) => {
      let src = charaId,
        dst = charaId;
      if (charaId.length === 2) {
        dst = charaId[0];
        src = charaId[1];
      }
      if (!this.staticData.chara[src]) {
        return false;
      }
      if (this.data.callname[dst] !== undefined) {
        this.data.no = this.data.no.filter((e) => e !== dst);
      }
      this.data.no.push(dst);
      this.data.maxbase[dst] = {};
      this.data.base[dst] = {};
      this.data.abl[dst] = {};
      this.data.talent[dst] = {};
      this.data.cflag[dst] = {};
      this.data.cstr[dst] = {};
      this.data.equip[dst] = {};
      this.data.mark[dst] = {};
      this.data.exp[dst] = {};
      this.data.juel[dst] = {};
      this.data.callname[dst] = {};
      this.data.relation[dst] = {};
      if (this.staticData.base !== undefined) {
        ['base', 'maxbase'].forEach((t) =>
          Object.values(this.staticData.base).forEach(
            (k) =>
              (this.data[t][dst][k] =
                safelyGetObjectEntry(
                  this.staticData.chara,
                  `${src}.base.${k}`,
                ) ?? 0),
          ),
        );
      }
      EraApi.initCharaTable
        .filter((t) => this.staticData[t] !== undefined)
        .forEach((t) =>
          Object.values(this.staticData[t]).forEach(
            (k) =>
              (this.data[t][dst][k] =
                safelyGetObjectEntry(
                  this.staticData.chara,
                  `${src}.${t}.${k}`,
                ) ?? 0),
          ),
        );
      if (this.staticData.cstr !== undefined) {
        Object.values(this.staticData.cstr).forEach(
          (v) =>
            (this.data.cstr[dst][v] =
              safelyGetObjectEntry(this.staticData.chara, `${src}.cstr.${v}`) ??
              ''),
        );
      }
      Object.entries(this.era.extendedTables).forEach(([t, type]) => {
        if (type === EraApi.tableType.chara) {
          this.data[t][dst] = {};
          Object.values(this.staticData[t]).forEach(
            (k) =>
              (this.data[t][dst][k] =
                safelyGetObjectEntry(
                  this.staticData.chara,
                  `${src}.${t}.${k}`,
                ) ?? 0),
          );
        }
      });
      this.data.callname[dst][-1] = this.staticData.chara[src].name;
      this.data.callname[dst][-2] =
        this.staticData.chara[src].callname ?? this.staticData.chara[src].name;
      Object.entries(this.staticData.relationship.callname)
        .filter(([k]) => k.startsWith(`${dst}|`) || k.endsWith(`|${dst}`))
        .forEach(([k, v]) => {
          const [_from, _to] = k.split('|');
          if (
            this.data.callname[_from] !== undefined &&
            this.data.callname[_to] !== undefined
          ) {
            this.data.callname[_from][_to] = v;
          }
        });
      Object.entries(this.staticData.relationship.relation)
        .filter(([k]) => k.startsWith(`${dst}|`) || k.endsWith(`|${dst}`))
        .forEach(([k, v]) => {
          const [_from, _to] = k.split('|').map(Number);
          if (
            this.data.relation[_from] !== undefined &&
            this.data.relation[_to] !== undefined
          ) {
            this.data.relation[_from][_to] = v;
            if (
              _to !== this.staticData.gamebase.defaultChara &&
              this.staticData.relationship.relation[`${_to}|${_from}`] ===
                undefined
            ) {
              this.data.relation[_to][_from] = v;
            }
          }
        });
      this.data.love[dst] = 0;
      return true;
    });
    if (ids.length === 1) {
      return ret[0];
    }
    return ret;
  }

  addCharacterForTrain(...ids) {
    ids
      .filter((cid) => !this.data.tequip[cid])
      .forEach((cid) => {
        this.data.deltabase[cid] = {};
        this.data.tequip[cid] = {};
        this.data.tcvar[cid] = {};
        this.data.palam[cid] = {};
        this.data.gotjuel[cid] = {};
        this.data.source[cid] = {};
        this.data.delta[cid] = {};
        this.data.stain[cid] = {};
        this.data.ex[cid] = {};
        this.data.nowex[cid] = {};
        Object.values(this.staticData.base).forEach(
          (v) => (this.data.deltabase[cid][v] = 0),
        );
        ['tequip', 'tcvar', 'source', 'stain'].forEach((t) => {
          if (this.staticData[t] !== undefined) {
            Object.values(this.staticData[t]).forEach(
              (v) => (this.data[t][cid][v] = 0),
            );
          }
        });
        if (this.staticData.juel !== undefined) {
          Object.values(this.staticData.juel).forEach(
            (v) =>
              (this.data.palam[cid][v] =
                this.data.delta[cid][v] =
                this.data.gotjuel[cid][v] =
                  0),
          );
        }
        if (this.staticData.ex !== undefined) {
          Object.values(this.staticData.ex).forEach(
            (v) => (this.data.ex[cid][v] = this.data.nowex[cid][v] = 0),
          );
        }
      });
  }

  beginTrain(...ids) {
    if (!this.data.tequip) {
      this.data.deltabase = {};
      this.data.tequip = {};
      this.data.tflag = {};
      this.data.tcvar = {};
      this.data.palam = {};
      this.data.delta = {};
      this.data.gotjuel = {};
      this.data.source = {};
      this.data.stain = {};
      this.data.ex = {};
      this.data.nowex = {};

      if (this.staticData.tflag !== undefined) {
        Object.values(this.staticData.tflag).forEach(
          (v) => (this.data.tflag[v] = 0),
        );
      }
    }
    this.addCharacterForTrain(...ids);
  }

  checkImage(...names) {
    if (names.length === 0) {
      return false;
    }
    names = names.map(toLowerCase);
    const ret = names.map(
      (e) => this.res[e] && this.res[e].type === resTypeEnum.image,
    );
    if (names.length === 1) {
      return ret[0];
    }
    return ret;
  }

  async clear(lineCount) {
    if (safelyGetObjectEntry(this.config, 'system.disableClear')) {
      return this.totalLines;
    }
    if (lineCount !== 0 && this.isContinue) {
      await this.waitAnyKey(true);
    }
    return await this.clearScreen(lineCount);
  }

  drawLine(config) {
    config ||= {};
    const data = { config };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect('drawLine', data);
    return this.addTotalLines();
  }

  endTrain() {
    this.getCharactersInTrain().forEach((id) =>
      Object.entries(this.data.gotjuel[id]).forEach(
        ([k, v]) => (this.data.juel[id][k] += v),
      ),
    );
    delete this.data.deltabase;
    delete this.data.tequip;
    delete this.data.tflag;
    delete this.data.tcvar;
    delete this.data.palam;
    delete this.data.gotjuel;
    delete this.data.stain;
    delete this.data.ex;
    delete this.data.nowex;
    delete this.data.source;
    delete this.data.delta;
  }

  get(k) {
    return this.set(k);
  }

  getAllCharacters() {
    return Object.keys(this.staticData.chara).map(Number);
  }

  getAddedCharacters() {
    return Object.keys(this.data.base).map(Number);
  }

  getCharactersInTrain() {
    return Object.keys(this.data.tequip || {}).map(Number);
  }

  getLineCount() {
    return this.totalLines;
  }

  input(config) {
    this.inputKey = new Date().getTime().toString();
    config ||= {};
    this.era.connect('input', { config, inputKey: this.inputKey });
    return new Promise((r) => {
      this.era.listen(this.inputKey, (_, ret) => {
        this.era.cleanListener(this.inputKey);
        this.inputKey = undefined;
        const val = getNumber(ret.val);
        this.isContinue = ret.continue;
        if (
          !safelyGetObjectEntry(this.config, 'system.hideUserInput') &&
          !config.hideInput &&
          !config.any
        ) {
          this.print(val);
        }
        r(val);
      });
    });
  }

  async loadData(sav) {
    const path = join(this.era.path, `./sav/save${sav}.sav`);
    try {
      let tmp;
      const handlers = [
        async () => {
          try {
            tmp = JSON.parse(fuckOffUtf8Bom(readFileSync(path, 'utf-8')));
            return true;
          } catch (_) {
            // empty
          }
        },
        async () => {
          const tmpPath = join(
            this.era.path,
            `ere-tmp-sav-${new Date().getTime()}`,
          );
          let flag = false;
          try {
            await gzip.uncompress(path, tmpPath);
            tmp = JSON.parse(fuckOffUtf8Bom(readFileSync(tmpPath, 'utf-8')));
            flag = true;
          } finally {
            rmSync(tmpPath, { force: true });
          }
          return flag;
        },
      ];
      if (safelyGetObjectEntry(this.config, 'system.saveCompressedData')) {
        handlers.push(handlers.pop());
      }
      for (const handler of handlers) {
        if (await handler()) {
          break;
        }
      }
      if (!tmp) {
        const err = new Error('invalid saved data!');
        this.era.error(err.message, err.stack);
        return false;
      }
      if (
        tmp.code !== undefined &&
        tmp.code !== this.staticData.gamebase.gameCode
      ) {
        this.era.error(
          `存档文件所属游戏ID（${tmp.code}）与GameBase（${this.staticData.gamebase.gameCode}）不匹配！请检查sav文件夹！`,
        );
      } else if (
        !tmp.version ||
        tmp.version < this.staticData.gamebase.allowVersion
      ) {
        this.era.error(`save${sav}.sav 版本过低（${tmp.version / 1000}）！`);
      } else {
        this.era.data = tmp;
        this.fillData();
        return true;
      }
    } catch (e) {
      this.era.error(e.message, e.stack);
    }
    return false;
  }

  async loadGlobal() {
    let resetFlag = false;
    const globalPath = join(this.era.path, './sav/global.sav');
    if (existsSync(globalPath)) {
      let invalidCode = false;
      try {
        const tmp = JSON.parse(readFileSync(globalPath, 'utf-8'));
        if (
          tmp.code !== undefined &&
          tmp.code !== this.staticData.gamebase.gameCode
        ) {
          invalidCode = true;
          this.era.error(
            `global.sav 所属游戏ID（${tmp.code}）与GameBase（${this.staticData.gamebase.gameCode}）不匹配！请检查sav文件夹！`,
          );
        } else if (
          tmp.version === undefined ||
          tmp.version < this.staticData.gamebase.allowVersion
        ) {
          this.era.error(`global.sav版本过低（${tmp.version}）！已重新生成`);
          resetFlag = true;
        } else {
          this.era.global = tmp;
          Object.values(this.staticData.global).forEach(
            (k) => (this.global[k] ||= 0),
          );
        }
      } catch (_) {
        resetFlag = true;
      }
      if (invalidCode) {
        throw new Error();
      }
    } else {
      resetFlag = true;
    }
    if (resetFlag) {
      return await this.resetGlobal();
    }
    await this.listSaveFiles();
    return await this.saveGlobal();
  }

  isDebug() {
    return this.debug;
  }

  async isLandscape() {
    return true;
  }

  logger = {
    assert(check, aim) {
      if (check !== aim) {
        const msg = `assert failed! aim val: ${aim}, got val: ${check}`;
        this.era.logger.warn(new Error(msg).stack);
        this.era.connect('warn', {
          level: loggerLevelEnum.warn,
          message: msg,
          stack: simplifiedStack(this.era.erePath),
        });
      }
    },
    debug(msg) {
      if (this.debug) {
        this.era.log(
          msg,
          simplifiedStack(this.era.erePath),
          loggerLevelEnum.debug,
        );
      }
    },
    error: this.era.error,
    info(msg) {
      this.era.log(msg, simplifiedStack(this.era.erePath));
    },
    warn(msg, stack) {
      if (stack === undefined) {
        stack = new Error().stack.split('\n');
        stack.splice(1, 1);
        stack = [
          stack[0],
          ...stack.slice(1).map((s) => replaceStack(s, this.era.erePath)),
        ].join('\n');
      }
      this.era.log(msg, stack, loggerLevelEnum.warn);
    },
  };

  nextTurnInTrain() {
    this.getCharactersInTrain().forEach((id) => {
      Object.keys(this.data.deltabase[id]).forEach((k) => {
        this.data.base[id][k] += this.data.deltabase[id][k];
        this.data.deltabase[id][k] = 0;
        if (this.data.maxbase[id][k] > 0) {
          this.data.base[id][k] = Math.max(
            Math.min(this.data.base[id][k], this.data.maxbase[id][k]),
            0,
          );
        }
      });
      Object.keys(this.data.source[id]).forEach(
        (k) => (this.data.source[id][k] = 0),
      );
      Object.keys(this.data.delta[id]).forEach((k) => {
        this.data.palam[id][k] += this.data.delta[id][k];
        this.data.delta[id][k] = 0;
      });
      Object.keys(this.data.nowex[id]).forEach((k) => {
        this.data.ex[id][k] += this.data.nowex[id][k];
        this.data.nowex[id][k] = 0;
      });
    });
  }

  notify(content, title, type) {
    this.era.connect('notify', { content, title, type });
  }

  playMusic(name, config) {
    if (typeof config !== 'object') {
      config = { loop: false };
    }
    const names = (Array.isArray(name) ? name : [name]).map(toLowerCase);
    for (const music of names) {
      if (this.res[music] && this.res[music].type === resTypeEnum.audio) {
        this.era.connect('playMusic', { path: this.res[music].path, config });
        return true;
      }
    }
    return false;
  }

  print(...params) {
    if (
      !(params[1] || {}).flush &&
      (params[0] === '' ||
        (Array.isArray(params[0]) && params[0].filter((e) => e).length === 0))
    ) {
      return this.println();
    }
    if (params[1] !== undefined && Array.isArray(params[1].dict)) {
      params[1].dict.forEach((entry) => {
        if (Array.isArray(params[0])) {
          params[0] = params[0].map((e) => {
            if (typeof e === 'object') {
              if (typeof e.content === 'string') {
                e.content = e.content.replace(...entry);
              }
              return e;
            }
            return e.replace(...entry);
          });
        } else {
          params[0] = params[0].replace(...entry);
        }
      });
    }
    this.text('print', ...params);
    return this.addTotalLines();
  }

  async printAndWait(content, config) {
    this.print(content, config);
    await this.waitAnyKey();
    return this.totalLines;
  }

  printButton(content, accelerator, config) {
    config ||= {};
    const data = {
      accelerator,
      config,
      content,
    };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    if (Array.isArray(config.dict)) {
      config.dict.forEach(
        (entry) => (data.content = data.content.replace(...entry)),
      );
    }
    this.era.connect('printButton', data);
    return this.addTotalLines();
  }

  printImage(...names) {
    const data = {
      images: this.getImageObject(names),
      config: {},
    };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect('printImage', data);
    return this.addTotalLines();
  }

  printInColRows(...objects) {
    this.inColRows('printInColRows', ...objects);
    return this.addTotalLines();
  }

  printLineChart(data) {
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect('printLineChart', data);
    return this.addTotalLines();
  }

  println() {
    const data = {};
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect('println', data);
    return this.addTotalLines();
  }

  printMultiColumns(objects, config) {
    config ||= {};
    const data = {
      columns: objects
        .filter((x) => typeof x === 'object' && x.type !== undefined)
        .map((x) => {
          if (x.type === 'image') {
            return {
              type: 'image',
              images: this.getImageObject(x.names),
              config: x.config || {},
            };
          } else if (x.type === 'image.whole') {
            return {
              type: 'image.whole',
              images: this.getWholeImage(x.names),
              config: x.config || {},
            };
          }
          return x;
        }),
      config,
    };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect('printMultiCols', data);
    return this.addTotalLines();
  }

  printProgress(percentage, inContent, outContent, config) {
    config ||= {};
    const data = {
      config,
      inContent,
      outContent,
      percentage,
    };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect('printProgress', data);
    return this.addTotalLines();
  }

  printWholeImage(name, config) {
    config ||= {};
    const data = {
      config,
      images: this.getWholeImage(name),
    };
    if (this.debug) {
      data._s = new Error().stack
        .split('\n')
        .slice(1)
        .map((e) => e.replace(/^\s+/, ''));
    }
    this.era.connect('printWholeImage', data);
    return this.addTotalLines();
  }

  quit() {
    this.era.quit();
    throw new Error('quit');
  }

  removeCharacter(...ids) {
    const toRemove = [];
    this.data.no = this.data.no.filter((charaId) => {
      if (ids.indexOf(charaId) !== -1) {
        toRemove.push(charaId);
        return false;
      }
      for (const toId of ids) {
        delete this.data.relation[charaId][toId];
        delete this.data.callname[charaId][toId];
      }
      return true;
    });
    for (const charaId of toRemove) {
      delete this.data.maxbase[charaId];
      delete this.data.base[charaId];
      delete this.data.abl[charaId];
      delete this.data.talent[charaId];
      delete this.data.cflag[charaId];
      delete this.data.cstr[charaId];
      delete this.data.equip[charaId];
      delete this.data.mark[charaId];
      delete this.data.exp[charaId];
      delete this.data.juel[charaId];
      delete this.data.callname[charaId];
      delete this.data.relation[charaId];
      Object.entries(this.era.extendedTables).forEach(([t, type]) => {
        if (type === EraApi.tableType.chara) {
          delete this.data[t][charaId];
        }
      });
      delete this.data.callname[charaId];
      delete this.data.relation[charaId];
      delete this.data.love[charaId];
    }
  }

  replaceInColRows(...objects) {
    this.inColRows('replaceInColRows', ...objects);
    return this.totalLines;
  }

  replaceText(...params) {
    this.text('replaceText', ...params);
    return this.totalLines;
  }

  resetCharacter(...ids) {
    return this.addCharacter(...ids);
  }

  resetData() {
    this.era.data = {
      abl: {},
      base: {},
      callname: {},
      cflag: {},
      code: this.staticData.gamebase.gameCode,
      cstr: {},
      equip: {},
      exp: {},
      flag: {},
      item: {
        bought: -1,
        hold: {},
        price: {},
        sales: {},
      },
      juel: {},
      love: {},
      mark: {},
      maxbase: {},
      no: [],
      relation: {},
      source: {},
      talent: {},
      version: this.staticData.gamebase.version,
    };
    this.fillData();
    if (this.staticData.gamebase.defaultChara !== undefined) {
      this.addCharacter(this.staticData.gamebase.defaultChara);
    }
  }

  async resetGlobal() {
    this.era.global = {
      code: this.staticData.gamebase.gameCode,
      saves: {},
      version: this.staticData.gamebase.version,
    };
    Object.values(this.staticData.global || {}).forEach(
      (k) => (this.global[k] = 0),
    );
    await this.listSaveFiles();
    return await this.saveGlobal();
  }

  resumeMusic() {
    this.era.connect('resumeMusic');
  }

  async rmData(sav) {
    try {
      rmSync(join(this.era.path, `./sav/save${sav}.sav`), { force: true });
      delete this.global.saves[sav];
      await this.saveGlobal();
    } catch (e) {
      this.era.error(e.message, e.stack);
      return false;
    }
    return true;
  }

  async saveData(sav, comment) {
    const savDirPath = join(this.era.path, './sav');
    if (!existsSync(savDirPath)) {
      mkdirSync(savDirPath);
    }
    try {
      this.data.version = this.staticData.gamebase.version;
      this.data.code = this.staticData.gamebase.gameCode;
      const data = JSON.stringify(this.data),
        dataPath = join(this.era.path, `./sav/save${sav}.sav`);
      if (safelyGetObjectEntry(this.config, 'system.saveCompressedData')) {
        await gzip.compressFile(Buffer.from(data, 'utf-8'), dataPath);
      } else {
        writeFileSync(dataPath, data);
      }
      this.global.saves[sav] = comment;
      await this.saveGlobal();
    } catch (e) {
      this.era.error(e.message, e.stack);
      return false;
    }
    return true;
  }

  async saveGlobal() {
    const savDirPath = join(this.era.path, './sav');
    if (!existsSync(savDirPath)) {
      mkdirSync(savDirPath);
    }
    try {
      this.global.version = this.staticData.gamebase.version;
      this.global.code = this.staticData.gamebase.gameCode;
      writeFileSync(
        join(savDirPath, './global.sav'),
        JSON.stringify(this.global),
      );
    } catch (e) {
      this.era.error(e.message, e.stack);
      return false;
    }
    return true;
  }

  set(key, val, isAdd) {
    return eraSet.call(this, key, val, isAdd);
  }

  setAlign(textAlign) {
    this.era.connect('setAlign', textAlign);
  }

  setBack(name, config) {
    if (typeof config !== 'object') {
      config = {};
    }
    const obj = this.getWholeImage(name)[0];
    this.era.connect('setBack', { url: obj ? obj.src : void 0, ...config });
    this.allowWait = true;
  }

  setColor(color) {
    this.era.connect('setColor', color);
  }

  setHorizontalAlign(align) {
    this.era.connect('setHorizontalAlign', align);
  }

  setMask(name, config) {
    this.setOverlay(name, config);
  }

  setOffset(offset) {
    this.era.connect('setOffset', offset);
  }

  setOverlay(name, config) {
    // 兼容 4.1.1 以前
    if (typeof config === 'number') {
      config = { opacity: config };
    } else if (typeof config !== 'object') {
      config = {};
    }
    const obj = this.getWholeImage(name)[0];
    this.era.connect('setOverlay', { url: obj ? obj.src : void 0, ...config });
    this.allowWait = true;
  }

  setTitle(title) {
    this.era.connect('setTitle', title);
  }

  setToBottom() {
    this.era.connect('setToBottom');
    return this.addTotalLines();
  }

  setVerticalAlign(align) {
    this.era.connect('setVerticalAlign', align);
  }

  setWidth(width) {
    this.era.connect('setWidth', width);
  }

  stopMusic() {
    this.era.connect('stopMusic');
  }

  toggleDebug() {
    this.debug = !this.debug;
    this.era.logger.level = this.debug ? 'debug' : 'info';
    return this.debug;
  }

  async waitAnyKey(fromClear) {
    if (this.allowWait || fromClear) {
      this.allowWait = false;
      await this.input({
        any: true,
        fromClear,
        useRule: false,
      });
    }
  }
}

module.exports = EraApi;
