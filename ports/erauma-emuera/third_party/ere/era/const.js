const resTypeEnum = { image: 0, audio: 1 };

/** @type {Record<string,0|1>} */
const extNames = {};

extNames.gif = resTypeEnum.image;
extNames.jpeg = resTypeEnum.image;
extNames.jpg = resTypeEnum.image;
extNames.png = resTypeEnum.image;
extNames.svg = resTypeEnum.image;
extNames.webp = resTypeEnum.image;

extNames.flac = resTypeEnum.audio;
extNames.mp3 = resTypeEnum.audio;
extNames.wav = resTypeEnum.audio;
extNames.wma = resTypeEnum.audio;

const loggerLevelEnum = { debug: 0, error: 0, info: 0, warn: 0 };
Object.keys(loggerLevelEnum).forEach((k, i) => (loggerLevelEnum[k] = i));
loggerLevelEnum.keys = Object.keys(loggerLevelEnum);

module.exports = {
  embeddedTableNames: {
    abl: 1,
    base: 1,
    maxbase: 1,
    cflag: 1,
    cstr: 1,
    equip: 1,
    ex: 1,
    nowex: 1,
    exp: 1,
    flag: 1,
    global: 1,
    item: 1,
    mark: 1,
    palam: 1,
    juel: 1,
    gotjuel: 1,
    stain: 1,
    talent: 1,
    tcvar: 1,
    tequip: 1,
    tflag: 1,
    source: 1,
    delta: 1,
  },
  extNames,
  loggerLevelEnum,
  resTypeEnum,
  safeLibs: { crypto: true },
  staticFormatPriority: ['yml', 'json', 'csv'],
  staticFormatRegex: [/chara[^/]+.yml/, /chara[^/]+.json/, /chara[^/]+.csv/],
};
