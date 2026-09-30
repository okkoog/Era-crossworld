const get_gradient_color = require('#/utils/gradient-color');

const base_color = require('#/data/const.json').mark_colors['음문'];

const level_colors = new Array(3)
  .fill(0)
  .map((_, i) => get_gradient_color('', base_color, (i + 1) / 3));

const group_names = {
  101: '구강 훈련',
  102: '가슴 훈련',
  103: '신체 훈련',
  104: '항문 훈련',
  105: '음경 훈련',
  106: '음핵 훈련',
  107: '질구 훈련',
  201: '가해 훈련',
  202: '피해 훈련',
  301: '쾌감 조절',
  401: '신뢰 조절',
  402: '애정 조절',
  403: '성격 조절',
  404: '성적 욕망',
  501: '절정 제어',
  502: '신체 제어',
  503: '체액 분비',
  601: '성향 전환',
  602: '훈련 방식',
  701: '행동 제한',
  702: '상식 전환',
};

class InmonPlugin {
  static group_names = group_names;

  id;
  name;
  group;
  level;
  size;
  description;
  condition;
  price;

  /**
   *
   * @param {number} id
   * @param {string} name
   * @param {number} group
   * @param {number} level
   * @param {number} size
   * @param {string} description
   * @param {function({chara:number,edu:boolean,id:number,love:number,pregnant:boolean,sex:number}):boolean} condition
   * @param {number} price
   */
  constructor(id, name, group, level, size, description, condition, price) {
    this.id = id;
    this.name = name;
    this.group = group;
    this.level = level;
    this.size = size;
    this.description = description;
    this.condition = condition;
    this.price = price;
  }

  get color() {
    return level_colors[this.level - 1];
  }

  get title() {
    return `【${this.name}】（${group_names[this.group]} · 등급 ${this.level} · ${this.size} 슬롯）\n${this.description}`;
  }

  get colored_name() {
    return {
      color: this.color,
      content: this.name,
      title: this.title,
    };
  }
}

module.exports = InmonPlugin;
