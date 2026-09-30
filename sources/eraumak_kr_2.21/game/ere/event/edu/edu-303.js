/**
 * @file 오토나시 에츠코 - 育成
 * @author 雞雞
 * @author 黑奴队长
 */
const {
  get,
  printAndWait,
  printInColRows,
  printMultiColumns,
  println,
  set,
  setAlign,
  setHorizontalAlign,
  waitAnyKey,
} = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedEdu = require('#/event/edu/edu-common');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { get_random_entry, sort_list } = require('#/utils/list-utils');

const {
  adaptability_colors,
  buff_colors,
  money_color,
} = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum, prize_ratios } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

const random_trainers = [
  undefined,
  '雞雞',
  '无名路人',
  '黑奴队长',
  '天马闪光蹄',
  '黑奴一号',
  '露娜俘虏',
  '片手虾',
  '黑奴二号',
  'Necroz',
  '梦露',
  '幽白書',
  '袁本初',
  '99',
  '红红火火恍惚',
  '小黑',
  '红桃Q',
  '黑衣剑士',
  'O口口口口口',
  'フィンランド',
  'kxmodel',
  '植物牙线',
  'bug',
  'Advocator',
  '清音林檎',
  '科比 · 布莱恩特',
];

/**
 * @param {{id:number,history:RaceResult[]}} chara_info
 * @returns {number}
 */
function get_mvp_sort_by(chara_info) {
  const metric = [0, 0, 0, 0];
  chara_info.history.forEach((e) => {
    if (e.rank === 1) {
      metric[Math.min(race_infos[e.race].race_class, 3)]++;
    }
  });
  return (metric[0] << 18) + (metric[1] << 12) + (metric[2] << 6) + metric[3];
}

/**
 * @param {number} id
 * @param {RaceResult[]} history
 */
function print_character_statistics({ id, history }) {
  setAlign('center');
  const main_wins = sort_list(
    history.filter((e) => e.rank === 1 && e.race !== race_enum.begin_race),
    (e) => ((5 - race_infos[e.race].race_class) << 6) + race_infos[e.race].date,
  );
  printMultiColumns([
    {
      config: { width: 4, offset: 10 },
      names: get_image(id)
        .map((e) => `${e}_半身`)
        .join('\t'),
      type: 'image.whole',
    },
    {
      content: [get_chara_talk(id).get_colored_name()],
      type: 'text',
    },
    {
      config: { fontSize: '1.25rem', isParagraph: true },
      content: [
        '연간 총 승수: ',
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history.filter((r) => r.rank === 1).length.toLocaleString(),
        },
        { isBr: true },
        '연간 총 상금: ',
        {
          color: money_color,
          fontWeight: 'bold',
          content: Math.floor(
            history.reduce(
              (p, c) =>
                p +
                (c.rank <= 5
                  ? race_infos[c.race].prize * prize_ratios[c.rank - 1]
                  : 0),
              0,
            ),
          ).toLocaleString(),
        },
        ' 우마코인',
        { isBr: true },
        '연간 G1 우승 횟수: ',
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history
            .filter(
              (r) =>
                race_infos[r.race].race_class === class_enum.G1 && r.rank === 1,
            )
            .length.toLocaleString(),
        },
        { isBr: true },
        '연간 중상 레이스 승리 횟수: ',
        {
          color: buff_colors[1],
          fontWeight: 'bold',
          content: history
            .filter(
              (r) =>
                race_infos[r.race].race_class <= class_enum.G3 && r.rank === 1,
            )
            .length.toLocaleString(),
        },
      ],
      type: 'text',
    },
    {
      config: { fontSize: '1.25rem', isParagraph: true },
      content: '주요 시상 이력',
      type: 'text',
    },
    ...main_wins.slice(0, 5).map((e) => ({
      content: [race_infos[e.race].get_colored_name_with_class()],
      type: 'text',
    })),
    ...(main_wins.length > 5 ? [{ content: '……', type: 'text' }] : []),
  ]);
  setAlign('left');
}

module.exports = class extends CustomizedEdu {
  /**
   * @author 雞雞
   * @author 黑奴队长
   * @param {CharaTalk} etsuko
   * @param {CharaTalk} me
   */
  async reward(etsuko, me) {
    if (!get('flag:URA시상식첫만남')) {
      set('flag:URA시상식첫만남', 1);
    }
    const loc = get('flag:현재위치');
    set('flag:현재위치', location_enum.race);
    const etsuko_check =
        get('cflag:303:육성턴수합산') < 3 * 48 ||
        !check_pregnant_unprotect(303),
      report = etsuko_check
        ? (args) => say_by_passer_by('主持人', args)
        : etsuko.say_and_wait.bind(etsuko),
      year = get('flag:현재연도') - 1;
    let fame_reward = 0;
    await print_event_name('URA 시상식', etsuko);
    await report([
      '우마무스메 여러분, ',
      etsuko.get_uma_sex_title(),
      ' 팬 여러분, 안녕하십니까! 여러분이 간절히 기다리시던 연중 최대의 행사, URA 시상식이 곧 시작됩니다!',
    ]);
    await report([
      '예년과 마찬가지로, 주최측은 최선을 다해 최고의 기량으로 멋진 레이스를 선보인 ',
      etsuko.get_uma_sex_title(),
      '분들과 ',
      etsuko.get_uma_sex_title(),
      '분들을 뒤에서 묵묵히 지원해 주신 트레이너 분들께 경의를 표합니다!',
    ]);
    if (etsuko_check) {
      await report([
        '올해도 저, ',
        etsuko.get_colored_actual_name(),
        '가 이 시상식을 진행하게 되었습니다. 잘 부탁드립니다!',
      ]);
    }
    println();
    await report([
      '시상식이 본격적으로 시작되기 전에, ',
      year,
      '년 G1 레이스에서 어떤 ',
      etsuko.get_uma_sex_title(),
      '들이 두각을 나타냈는지 되돌아봅니다!',
    ]);
    const team_list = sys_filter_chara(
      'cflag',
      '모집상태',
      recruit_flags.yes,
    ).map((e) => ({
      id: e,
      history: RaceHistory.get(e)
        .get_values()
        .filter((r) => r.year === year),
    }));
    const g1_list = team_list
      .map((e) => ({
        id: e.id,
        g1_count: e.history.filter(
          (r) =>
            race_infos[r.race].race_class === class_enum.G1 && r.rank === 1,
        ).length,
        history: e.history,
      }))
      .filter((e) => e.g1_count > 0);
    println();
    if (g1_list.length > 0) {
      setHorizontalAlign('space-evenly');
      printInColRows(
        ...g1_list.map((e) => ({
          columns: [
            {
              names: get_image(e.id)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
            {
              config: { align: 'center' },
              content: [get_chara_talk(e.id).get_colored_actual_name()],
              type: 'text',
            },
          ],
          config: { width: 4 },
        })),
      );
      setHorizontalAlign('start');
      await waitAnyKey();
    } else {
      await printAndWait(
        ['（일부 참가자들의 이름 중, 아쉽게도 ', me.get_colored_name(), '의 이름은 없었다）'],
        { align: 'center' },
      );
    }
    println();
    await report('이 자리를 빌려 대회에 참가해 주신 모든 분들께 다시 한번 감사드립니다!');
    println();
    await report('그럼 더 이상 지체하지 않고, 바로 모두가 주목하는 각 상의 수상자를 발표하겠습니다!');
    println();
    await report('먼저…… 올해의 《최우수 트레이너상》입니다!');
    println();
    const wins = team_list.reduce(
        (p, c) => p + c.history.filter((e) => e.rank === 1).length,
        0,
      ),
      all = team_list.reduce((p, c) => p + c.history.length, 0),
      prize = team_list.reduce(
        (p, c) =>
          p +
          c.history.reduce(
            (hp, hc) =>
              hp +
              (hc.rank <= 5
                ? race_infos[hc.race].prize * prize_ratios[hc.rank - 1]
                : 0),
            0,
          ),
        0,
      ),
      is_best_trainer = wins >= 30 && wins * 100 >= all * 30 && prize >= 35000;
    if (is_best_trainer) {
      const mvp_wins = sort_list(
        sort_list(team_list, get_mvp_sort_by)[0].history.filter(
          (e) => e.rank === 1 && e.race !== race_enum.begin_race,
        ),
        (e) =>
          ((5 - race_infos[e.race].race_class) << 6) + race_infos[e.race].date,
      );
      setAlign('center');
      printMultiColumns([
        {
          config: { fontSize: '1.5rem', isParagraph: true },
          content: [me.actual_name, ' 트레이너'],
          type: 'text',
        },
        {
          config: { fontSize: '1.25rem', isParagraph: true },
          content: [
            '연간 팀원 총 승수: ',
            {
              color: buff_colors[1],
              fontWeight: 'bold',
              content: wins.toLocaleString(),
            },
            { isBr: true },
            '연간 팀 총 상금: ',
            {
              color: money_color,
              fontWeight: 'bold',
              content: Math.floor(prize).toLocaleString(),
            },
            ' 우마코인',
            { isBr: true },
            '연간 팀 G1 승리 횟수: ',
            {
              color: buff_colors[1],
              content: g1_list
                .reduce((p, c) => p + c.g1_count, 0)
                .toLocaleString(),
              fontWeight: 'bold',
            },
            { isBr: true },
            '연간 팀 중상 레이스 승리 횟수: ',
            {
              color: buff_colors[1],
              content: team_list
                .reduce(
                  (p, c) =>
                    p +
                    c.history.filter(
                      (e) =>
                        race_infos[e.race].race_class <= class_enum.G3 &&
                        e.rank === 1,
                    ).length,
                  0,
                )
                .toLocaleString(),
              fontWeight: 'bold',
            },
          ],
          type: 'text',
        },
        {
          config: { fontSize: '1.25rem', isParagraph: true },
          content: '주요 시상 이력',
          type: 'text',
        },
        ...mvp_wins.slice(0, 5).map((e) => ({
          content: [race_infos[e.race].get_colored_name_with_class()],
          type: 'text',
        })),
        ...(mvp_wins.length > 5 ? [{ content: '……', type: 'text' }] : ['']),
      ]);
      await waitAnyKey();
      setAlign('left');
      await report([me.actual_name, ' 트레이너의 노력은 누구다 다 알고 있죠!']);
      fame_reward += 500;
    } else {
      const trainer = get_random_entry(random_trainers);
      if (trainer) {
        await report([trainer, ' 트레이너의 노력이 돋보입니다!']);
      } else {
        await report('올해에는 수상 기준을 충족한 트레이너가 없군요...');
        await report('정말 아쉽습니다. 내년에는 수상자가 나오기를 바랍니다!');
      }
    }
    println();
    await report('그리고...올해의《최우수 신인상》입니다!');
    println();
    const junior = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:육성턴수합산`) === 47 + 4 &&
          e.history.filter((r) => r.rank === 1).length >= 3,
      ),
      get_mvp_sort_by,
    )[0];
    if (junior) {
      print_character_statistics(junior);
      await waitAnyKey();
      fame_reward += 50;
    } else {
      await printAndWait(
        [
          '（주니어 시즌을 막 마친 우마무스메의 이름과 사진이다. 아쉽게도 ',
          me.get_colored_name(),
          '의 팀 소속 우마무스메는 아니다.）',
        ],
        { align: 'center' },
      );
    }
    println();
    await report('이 우마무스메가 앞으로 경기장에서 빛나기를 바랍니다!');
    println();
    await report('다음으로...올해의《최우수 클래식상》입니다!');
    println();
    const classic = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:육성턴수합산`) === 95 + 4 &&
          e.history.filter((r) => r.rank === 1).length >= 4,
      ),
      get_mvp_sort_by,
    )[0];
    if (classic) {
      print_character_statistics(classic);
      await waitAnyKey();
      fame_reward += 100;
    } else {
      await printAndWait(
        [
          '（클래식 시즌을 막 마친 우마무스메의 이름과 사진이다. 아쉽게도 ',
          me.get_colored_name(),
          '의 팀 소속 우마무스메는 아니다.）',
        ],
        { align: 'center' },
      );
    }
    println();
    await report('점점 중추적인 역할을 해낼 만한 모습으로 성장하고 있군요!');
    println();
    await report('그리고…… 올해의 《최우수 시니어상》입니다!');
    println();
    const senior = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:육성턴수합산`) === 143 + 4 &&
          e.history.filter((r) => r.rank === 1).length >= 5,
      ),
      get_mvp_sort_by,
    )[0];
    if (senior) {
      print_character_statistics(senior);
      await waitAnyKey();
      fame_reward += 150;
    } else {
      await printAndWait(
        [
          '（시니어 시즌을 막 마친 우마무스메의 이름과 사진이다. 아쉽게도 ',
          me.get_colored_name(),
          '의 팀 소속 우마무스메는 아니다.）',
        ],
        { align: 'center' },
      );
    }
    println();
    await report('의심의 여지 없이, 이미 수많은 레이스를 겪은 베테랑입니다!');
    println();
    await report([
      '마지막으로! 올해 가장 빠르고, 가장 드높았고, 가장 강력한 우마무스메를 결정할 역사적인 순간입니다! 수많은 명 우마무스메들 사이에서 자신만의 독보적인 발자취를 남긴 ',
      etsuko.get_uma_sex_title(),
      '는...누구일까요?!',
    ]);
    await report([
      '《올해의 ',
      etsuko.get_uma_sex_title(),
      '》，이 최고의 영예는 바로——',
    ]);
    println();
    const uoty = sort_list(
      g1_list.filter(
        (e) =>
          get(`cflag:${e.id}:육성턴수합산`) > 96 &&
          e.history.filter((r) => r.rank === 1).length >= 7,
      ),
      get_mvp_sort_by,
    )[0];
    if (uoty) {
      print_character_statistics(uoty);
      await waitAnyKey();
      fame_reward += 300;
    } else {
      await printAndWait(
        [
          '（한 우마무스메의 이름과 사진이다. 아쉽게도  ',
          me.get_colored_name(),
          '의 팀 소속 우마무스메는 아니다.）',
        ],
        { align: 'center' },
      );
    }
    println();
    await report('지금, 최강자가 결정되었습니다!');
    println();
    await report('오늘 참석해 주신 모든 분들께 감사드리며, 내년에 다시 뵙겠습니다!');
    println();
    const titles_dict = {};
    if (is_best_trainer) {
      (titles_dict[0] || (titles_dict[0] = [])).push({
        c: adaptability_colors.at(-1),
        n: `${year}년도 최우수 트레이너`,
      });
    }
    if (junior) {
      get_attr_and_print_in_event(
        junior.id,
        new Array(5).fill(20),
        40,
        undefined,
        true,
      );
      (titles_dict[junior.id] || (titles_dict[junior.id] = [])).push({
        c: adaptability_colors.at(-5),
        n: `최우수 신인 ${etsuko.get_uma_sex_title()}`,
      });
    }
    if (classic) {
      get_attr_and_print_in_event(
        classic.id,
        new Array(5).fill(40),
        80,
        undefined,
        true,
      );
      (titles_dict[classic.id] || (titles_dict[classic.id] = [])).push({
        c: adaptability_colors.at(-3),
        n: `최우수 클래식 ${etsuko.get_uma_sex_title()}`,
      });
    }
    if (senior) {
      (titles_dict[senior.id] || (titles_dict[senior.id] = [])).push({
        c: adaptability_colors.at(-2),
        n: `최우수 시니어 ${etsuko.get_uma_sex_title()}`,
      });
    }
    if (uoty) {
      (titles_dict[uoty.id] || (titles_dict[uoty.id] = [])).push({
        c: adaptability_colors.at(-1),
        n: `${year}년도 올해의 ${etsuko.get_uma_sex_title()}`,
      });
    }
    Object.entries(titles_dict).forEach((e) =>
      sys_add_titles(Number(e[0]), ...e[1]),
    );
    sys_change_fame(fame_reward);
    sys_like_chara(302, 0, fame_reward / 5);
    sys_like_chara(303, 0, fame_reward / 5);
    await waitAnyKey();
    set('flag:현재위치', loc);
  }
};
