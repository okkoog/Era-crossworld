const era = require('#/era-electron');

const { join_list, sort_list } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { adaptability_colors } = require('#/data/color-const');

const dict = {};

const types = {
  edu: 0,
  race: 0,
  love: 0,
  sex: 0,
  birth: 0,
  end: 0,
  all: 0,
  hidden: 0,
};
Object.keys(types).forEach((e, i) => (types[e] = i));

/** @type {string[]} */
const type_names = [];
type_names[types.edu] = '육성';
type_names[types.race] = '레이스';
type_names[types.love] = '애정';
type_names[types.sex] = '조교';
type_names[types.birth] = '출산';
type_names[types.end] = '결말';
type_names[types.all] = '종합';
type_names[types.hidden] = '히든';

const rarity = {
  3: '브론즈',
  4: '실버',
  5: '골드',
  6: '플래티넘',
  7: '다이아몬드',
  8: 'UMA',
};

const platinum_type = {
  all: 0,
};
Object.keys(platinum_type).forEach((e, i) => (platinum_type[e] = i));
platinum_type.keys = Object.keys(platinum_type);

// TODO 二期成就待用
const platinum_tags = [];
platinum_tags[platinum_type.all] = '';

class GlobalAchievement {
  get #bean() {
    // GLOBALNAME:2 = 전역업적
    return era.get('global:2') || era.set('global:2', {});
  }

  get #fields() {
    return Object.keys(this).filter((m) => typeof this[m] !== 'function');
  }

  edu_one = ['교육과 지도', 4, '육성 1회 완료.', types.edu, platinum_type.all];
  edu_thr = ['모범 트레이너', 5, '육성 3회 완료.', types.edu, platinum_type.all];
  edu_nrg = ['제자가 잔뜩', 6, '육성 7회 완료.', types.edu, platinum_type.all];
  edu_1_ex = [
    '두 사람이 함께',
    5,
    '담당 캐릭터와 [열애] 이상의 관계를 달성한 상태에서 육성 1회 완료.',
    types.edu,
    platinum_type.all,
  ];
  edu_sex = [
    '나의 임무',
    6,
    '육성을 한 번 완료하고, 담당 캐릭터가 다음 조건 중 하나를 달성:\n' +
      '● [연인] 이상의 관계를 달성.\n' +
      '● 동심각인 레벨 3단계 이상, 부정적 각인 없음.\n' +
      '● 3단계 음문각인 획득.',
    types.edu,
    platinum_type.all,
  ];
  edu_tch = [
    '스승의 본보기',
    6,
    '육성을 한 번 완료하고, 담당 캐릭터가 다음 조건을 달성:\n' +
      '● 트레이너와 혈연관계 없음.\n' +
      '● 애정 관계가 [희미] 이하로 유지됨.\n' +
      '● 성관계(수면간 포함)가 전혀 없었음.',
    types.edu,
    platinum_type.all,
  ];
  chan_sec = [
    '꿈만 같았어',
    5,
    '한 캐릭터의 2번째 육성을 완료.',
    types.edu,
    platinum_type.all,
  ];
  chan_thr = [
    '되감기',
    6,
    '세 번 이상 한 캐릭터를 반복 육성.',
    types.edu,
    platinum_type.all,
  ];
  chan_mor = [
    '운명의 문',
    7,
    '스킬포인트 할인을 최대로 받기 위해 한 캐릭터의 8번째 육성을 시작.',
    types.hidden,
  ];

  wins_one = [
    '전사 트레이너',
    7,
    '아무 담당 우마무스메를 육성해 칭호 [백전백승] 획득.',
    types.race,
    platinum_type.all,
  ];
  wins_six = ['우마군단', 7, '6명을 육성해 칭호 [백전백승] 획득.', types.hidden];
  wins_thr = [
    '끊임없는 원정',
    7,
    '13명을 육성해 칭호 [백전백승] 획득.',
    types.hidden,
  ];
  wins_hnt = [
    '엄청난...「변태」',
    7,
    '[불운한 자] 칭호를 획득한 상태에서 레이스에서 승리.',
    types.hidden,
  ];

  blnc_cel = [
    '중립의 달인',
    6,
    '한 주에 6명 이상의 캐릭터와 기념일을 축하하기.',
    types.love,
    platinum_type.all,
  ];
  blnc_rac = [
    '균형의 달인',
    6,
    '동시에 6명 이상의 담당 캐릭터가 같은 레이스에 참여하여 모든 레이스 전/후 이벤트를 발생시킴.',
    types.love,
    platinum_type.all,
  ];
  yandere = [
    '가시돋친 장미',
    7,
    '한 캐릭터가 상태 [애정 억제]와 특성 [얀데레]를 획득.',
    types.hidden,
  ];

  inmn_one = [
    '마주',
    5,
    '1명에게 음문각인 3단계를 새긴다.',
    types.sex,
    platinum_type.all,
  ];
  inmn_thr = [
    '말딸 통제',
    6,
    '3명에게 음문각인 3단계를 새긴다.',
    types.sex,
    platinum_type.all,
  ];
  inmn_six = [
    '마왕',
    7,
    '6명에게 음문각인 3단계를 새긴다.',
    types.sex,
    platinum_type.all,
  ];
  slav_mil = [
    '착유의 달인',
    6,
    '착유용 우마무스메에게 한번에 6명 분량 이상의 젖을 얻는다.',
    types.sex,
    platinum_type.all,
  ];
  slav_prg = [
    '조산의 달인',
    6,
    '번식용 우마무스메를 통해 임신 기간을 총 36주 이상 단축.',
    types.sex,
    platinum_type.all,
  ];
  slav_mon = [
    '감독의 달인',
    6,
    '환금용 우마무스메를 통해 누적 100,000 우마코인을 획득.',
    types.sex,
    platinum_type.all,
  ];
  slav_inh = [
    '육종의 달인',
    6,
    '상속용 우마무스메를 통해 한번에 각종 인자를 100개 이상 획득.',
    types.sex,
    platinum_type.all,
  ];
  slav_frn = [
    '불침번의 달인',
    6,
    '베개용 우마무스메를 통해 100회 이상의 수면간 또는 감금을 저지.',
    types.sex,
    platinum_type.all,
  ];
  slav_ass = [
    '소환의 달인',
    6,
    '조수의 도움을 받아 100회 이상 조교.',
    types.sex,
    platinum_type.all,
  ];
  slav_mas = [
    '조교의 달인',
    7,
    '다음 업적을 획득:\n' +
      '● [마왕]\n' +
      '● [착유의 달인]\n' +
      '● [조산의 달인]\n' +
      '● [감독의 달인]\n' +
      '● [육종의 달인]\n' +
      '● [불침번의 달인]\n' +
      '● [소환의 달인]',
    types.sex,
    platinum_type.all,
  ];
  play_mil1 = [
    '음매',
    5,
    '[갓짠모유] 혹은 [갓짠마유]를 획득.',
    types.sex,
    platinum_type.all,
  ];
  play_mil2 = [
    '음매음매',
    6,
    '[갓짠모유] 혹은 [갓짠마유]를 판매.',
    types.sex,
    platinum_type.all,
  ];
  play_mil3 = [
    '음매음매음매',
    7,
    '조교 1번에 [갓짠모유] 혹은 [갓짠마유]를 4개 이상 획득.',
    types.sex,
    platinum_type.all,
  ];

  st_maria = ['성모 마리아', 5, '뜻밖의 아이를 얻는다.', types.birth, platinum_type.all];
  father = ['대종마', 5, '[대종마] 칭호 획득.', types.birth, platinum_type.all];
  mother = [
    '영웅의 어머니',
    6,
    '칭호 [영웅의 어머니]를 획득.',
    types.birth,
    platinum_type.all,
  ];
  famother = [
    '앞으로는 덮치고 뒤로는 내주고',
    7,
    '칭호 [대종마]와 [영웅의 어머니]를 동시에 획득',
    types.birth,
    platinum_type.all,
  ];
  ck_m = [
    '사소한 악행-양',
    4,
    '아버지로서, 자신의 아이에게 자신의 아이를 낳게 한다.',
    types.birth,
    platinum_type.all,
  ];
  ck_f = [
    '사소한 악행-음',
    4,
    '어머니로서, 자신의 아이의 아이를 낳는다.',
    types.birth,
    platinum_type.all,
  ];
  ck_d = [
    '뒤틀린 패륜',
    5,
    '자신이 아버지로서 얻은 자식의 아이를 직접 낳거나, 자신이 어머니로서 얻은 자식이 자신의 아이를 낳게 만들기.',
    types.birth,
    platinum_type.all,
  ];
  ck = [
    '크루세이더 킹즈',
    6,
    '다음 업적 중 2가지를 달성:\n' +
      '● [사소한 악행-양];\n' +
      '● [사소한 악행-음];\n' +
      '● [뒤틀린 패륜].',
    types.birth,
    platinum_type.all,
  ];

  end_los = [
    'Loser',
    3,
    '성과가 나지 않아 트레센에서 해고당해 게임오버되기.',
    types.end,
    platinum_type.all,
  ];
  end_hnt = [
    '「떳떳한」신사',
    3,
    '스캔들로 인해 트레센에서 제명당해 게임오버되기.',
    types.end,
    platinum_type.all,
  ];
  end_fan = [
    '아쉬운 여정',
    4,
    '육성 종료 시 형편없는 육성 성적이나 담당 우마무스메와의 긴장된 관계로 인해 게임오버되기',
    types.end,
    platinum_type.all,
  ];
  end_mon = [
    '무전유죄',
    4,
    '갚을 수 없는 빚을 지게 되어 게임오버되기.',
    types.end,
    platinum_type.all,
  ];
  end_lov = [
    'Merry Bad End',
    4,
    '「사랑」에 포획되어 게임오버되기.',
    types.end,
    platinum_type.all,
  ];
  ending = [
    '비참한 세상',
    7,
    '다음 조건을 달성:\n' +
      '● 업적 [Loser] 또는 [「떳떳한」신사] 완료;\n' +
      '● 업적 [아쉬운 여정] 완료;\n' +
      '● 업적 [무전유죄] 완료;\n' +
      '● 업적 [Merry Bad End] 완료.',
    types.end,
    platinum_type.all,
  ];

  time_ten = [
    '10년의 가르침',
    6,
    'EraUma에서 9 (10)년의 시간을 보내기...\n그리고 영혼의 달 둥지가 되기 (아닙니다).',
    types.all,
    platinum_type.all,
  ];
  time_twe = [
    '20년의 발자취',
    6,
    'EraUma에서 16 (20)년의 시간을 보내기...\n그리고 세계의 포식자가 되기 (아닙니다).',
    types.all,
    platinum_type.all,
  ];
  time_thr = [
    '30년지기 절친',
    6,
    'EraUma에서 21 (30)년의 시간을 보내기...\n그리고 생명의 직조자가 되기 (아닙니다).',
    types.all,
    platinum_type.all,
  ];
  time_for = [
    '40년의 전설',
    7,
    'EraUma에서 24 (40)년의 시간을 보내기...\n그리고 갈망의 그릇이 되기 (아닙니다).',
    types.all,
    platinum_type.all,
  ];
  time_fif = [
    '인간의 50년은 한낱 덧없는 꿈과 다르지 아니하니',
    7,
    'EraUma에서 25 (50)년의 시간을 보내기...\n그리고 윤회의 종말이 되기 (아닙니다).',
    types.all,
    platinum_type.all,
  ];
  all = ['학원의 지배자', 8, '모든 일반 업적 달성.', types.hidden];

  c_luna1 = [
    '에덴이여, 나를 보라',
    7,
    '【심볼리 루돌프】목도하라. 이 전무후무한 위업을——우리의 태양, 나의 달을.',
    types.hidden,
    void 0,
    get_chara_color(17),
  ];

  constructor() {
    this.#fields.forEach((m) => {
      dict[m] = this[m];
      if (dict[m][3] !== types.hidden && platinum_tags[dict[m][4]]) {
        dict[m][2] += `\n\n（${platinum_tags[dict[m][4]]}）`;
      }
      Object.defineProperty(this, m, {
        get() {
          return this.#bean[m] || 0;
        },
        set(v) {
          if (!this.#bean[m] && v > 0) {
            era.notify(
              [
                {
                  color: this.get_color(m),
                  content: `[${rarity[dict[m][1]]}] ${dict[m][0]}`,
                  fontSize: '1rem',
                  fontWeight: 'bold',
                },
                { isBr: true },
                ...join_list(dict[m][2].split('\n'), { isBr: true }),
              ],
              '업적 달성!',
              'success',
              50000,
            );
            const p_type = dict[m][4];
            const type_key = platinum_type.keys[p_type];
            if (platinum_tags[p_type] && !this.#bean[type_key]) {
              const index = this.#fields.findIndex(
                (m) => !this[m] && dict[m][4] === p_type,
              );
              if (index === -1) {
                this[type_key] = 1;
              }
            }
          }
          this.#bean[m] = new Date().getTime();
        },
      });
    });
  }

  /**
   * @param {string} m
   * @returns {string}
   */
  get_color(m) {
    return dict[m][5] || adaptability_colors[dict[m][1]];
  }

  async show() {
    const curr = era.getLineCount();
    let flag = true;
    let page = 0;
    let show_hidden = false;

    era.setAlign('right');
    while (flag) {
      await era.clear(era.getLineCount() - curr);
      era.printInColRows(
        [
          {
            config: { content: `【${type_names[page]}】유형 달성 현황` },
            type: 'divider',
          },
        ],
        {
          columns: [
            ...type_names.map((t, i) => ({
              accelerator: i + 1,
              config: { disabled: i === page && page !== types.hidden },
              content: t,
              type: 'button',
            })),
            { accelerator: 99, content: '돌아가기', type: 'button' },
          ],
          config: { width: 3 },
        },
        {
          columns: sort_list(
            this.#fields.filter(
              (m) =>
                dict[m][3] === page &&
                (dict[m][3] !== types.hidden ||
                  show_hidden ||
                  this.#bean[m] > 0),
            ),
            (m) =>
              this.#bean[m] > 0 ? this.#bean[m] : 100 - this.#fields.indexOf(m),
          ).map((m) => {
            let desc;
            if (this.#bean[m] > 0) {
              desc = dict[m][2].split('\n');
              if (desc.length > 1) {
                desc = [{ content: desc[0] + '……', title: dict[m][2] }];
              } else {
                desc = join_list(desc, { isBr: true });
              }
            } else {
              desc = [{ content: '???', title: dict[m][2] }];
            }
            return {
              config: { align: 'center', offset: 1, width: 7 },
              content: [
                {
                  fontSize: '1.25rem',
                  color: this.get_color(m),
                  opacity: this[m] > 0 ? 1 : 0.5,
                  content: dict[m][0],
                  title:
                    this[m] > 0
                      ? `[${rarity[dict[m][1]]}] 획득 일시: ${new Date(this[m]).toLocaleString(/** TODO */ 'zh-CN')}`
                      : `희귀도: [${rarity[dict[m][1]]}]`,
                },
                { isBr: true },
                ...desc,
                { isBr: 2 },
              ],
              type: 'text',
            };
          }),
          config: { width: 21 },
        },
      );
      const ret = await era.input({ hideInput: true });
      if (ret === 99) {
        flag = false;
      } else {
        show_hidden = page === types.hidden && ret - 1 === types.hidden;
        page = ret - 1;
      }
    }
    era.setAlign('left');
  }
}

const global_achievement = new GlobalAchievement();

module.exports = global_achievement;
