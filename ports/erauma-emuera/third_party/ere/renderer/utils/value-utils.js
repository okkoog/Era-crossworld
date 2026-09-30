/**
 * @param {string} stack
 * @param {string} path
 * @param split
 */
function replaceStack(stack, path, split = '#') {
  const index = stack.indexOf(path);
  if (index === -1) {
    return stack;
  }
  return (
    stack.substring(0, index) + split + stack.substring(index + path.length)
  );
}

module.exports = {
  fuckOffUtf8Bom(content) {
    return content.replace(/^\uFEFF/, '');
  },
  getEmptyConfigForm() {
    return {
      system: {
        _replace: false,
        collapseBlankLines: false,
        disableClear: false,
        extendedCharaTables: [],
        hideUserInput: false,
        resource: false,
        saveCompressedData: false,
        saveFiles: 10,
      },
      window: {
        audio: 100,
        autoMax: false,
        fontFamily: 'EraMono SC',
        fontSize: 16,
        height: 880,
        limit: 512,
        orientation: 1,
        width: 1000,
      },
    };
  },
  getGameVersion(version) {
    if (!version) {
      return '0.001';
    }
    let verStr = version / 1000;
    if (verStr % 1 === 0) {
      verStr = verStr.toFixed(1);
    }
    return verStr.toString();
  },
  getNumber(val) {
    const num = Number(val);
    if (isNaN(num)) {
      return val;
    }
    return num;
  },
  getValidValue(val, lowest, highest, defVal) {
    const num = Number(val);
    if (isNaN(num) || num < lowest || num > highest) {
      return defVal;
    }
    return num;
  },
  replaceStack,
  safeUndefinedCheck(_value, _default) {
    if (_value === undefined) {
      return _default;
    }
    return _value;
  },
  safelyGetObjectEntry(obj, _entry) {
    const entries = _entry.split('.');
    let tmp = obj;
    entries.forEach((e) => {
      if (tmp === undefined) {
        return undefined;
      }
      tmp = tmp[e];
    });
    return tmp;
  },
  simplifiedStack(path) {
    return replaceStack(
      new Error().stack.split('\n')[3].replace(/^\s+/, ''),
      path,
    );
  },
  simplifiedFullStack(path, stack) {
    if (!stack) {
      stack = new Error().stack.split('\n');
      stack.splice(1, 2);
    } else {
      stack = stack.split('\n');
    }
    return [stack[0], ...stack.slice(1).map((s) => replaceStack(s, path))].join(
      '\n',
    );
  },
  toLowerCase(val) {
    if (typeof val === 'string') {
      return val.toLowerCase();
    }
    return val;
  },
};
