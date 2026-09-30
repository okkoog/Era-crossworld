const era = require('#/era-electron');

const sys_add_titles = require('#/system/chara/sys-add-titles');
const sys_count_juels = require('#/system/chara/sys-count-juels');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { get_custom_check } = require('#/event/check/check-factory');
const { remove_edu_events } = require('#/event/queue');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaAvailableGenes = require('#/data/chara-available-genes');
const CharaSkills = require('#/data/chara-skills');
const {
  adaptability_colors,
  attr_change_colors,
  buff_colors,
  sex_colors,
} = require('#/data/color-const');
const CharaInmon = require('#/data/ero/chara-inmon');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { vp_status_enum } = require('#/data/ero/status-const');
const { get_chara_score } = require('#/data/info-generator');
const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_infos } = require('#/data/race/race-const');
const { adaptability_names, attr_names } = require('#/data/train-const');

/** @param {number} cid */
function sys_handle_palace(cid) {
  // CFLAGNAME:47 = 명예의전당
  era.set(`cflag:${cid}:47`, 1);
  // CFLAGNAME:49 = 육성횟수
  era.add(`cflag:${cid}:49`, 1);
  const chara = get_chara_talk(cid);
  const miss_count = remove_edu_events(cid)[cid] || 0;
  /** @type {*[]} */
  const buffer = [
    {
      content: ['【', chara.get_colored_name(), '의 육성 완료】'],
      type: 'text',
    },
  ];
  const aim_check = get_custom_check(cid).check_palace_and_get_aims();
  let aim_punish_count = 0,
    aim_count = 0;
  if (aim_check.length) {
    aim_check.forEach((e) => {
      aim_punish_count += 1 - e.check;
      aim_count += e.check === 1;
    });
    buffer.push(
      {
        content: [
          chara.get_colored_name(),
          '의 육성 목표 달성 현황: ',
          aim_count === aim_check.length
            ? {
                color: attr_change_colors.up,
                content: '완료!',
                fontWeight: 'bold',
              }
            : {
                color: attr_change_colors.down,
                content: `${aim_count}/${aim_check.length}`,
              },
        ],
        type: 'text',
      },
      ...aim_check.map((e) => {
        return {
          config: { color: e.color, offset: 1, width: 23 },
          content: e.content,
          type: 'text',
        };
      }),
    );
  }
  if (miss_count) {
    buffer.push({
      content: [
        chara.get_colored_name(),
        '의 이벤트 ',
        {
          content: miss_count.toString(),
          color: buff_colors[3],
        },
        '개를 놓쳤습니다...',
      ],
      type: 'text',
    });
  }
  const titles = get_custom_check(cid).check_and_get_titles(!aim_punish_count);
  const races = RaceHistory.get(cid).get_entries();
  let g1_count = 0,
    pop_g1_count = 0;
  races.forEach((e) => {
    if (race_infos[e.race].race_class === class_enum.G1) {
      g1_count++;
      if (e.pop === 1) {
        pop_g1_count++;
      }
    }
  });
  if (races.length >= 30) {
    titles.push({ n: '철의 소녀', c: buff_colors[1] });
    g1_count && titles.push({ n: '황금의 길', c: buff_colors[1] });
  }
  if (
    g1_count >= 10 &&
    races.findIndex((e) => e.pop !== 1 || e.rank !== 1) === -1
  ) {
    titles.push({ n: '시대의 패자', c: adaptability_colors.at(-2) });
  }
  if (races.length >= 101) {
    titles.push({ n: '백전연마', c: adaptability_colors.at(-2) });
    if (races.findIndex((e) => e.rank !== 1) === -1) {
      titles.push({ c: adaptability_colors.at(-1), n: '백전백승', wins: 1 });
    }
  }
  const pv = era.get(`talent:${cid}:동정`);
  const vv = era.get(`talent:${cid}:처녀`);
  if (pv === vp_status_enum.virgin && vv === vp_status_enum.virgin) {
    titles.push({ n: '순수한 영혼', c: sex_colors[1] });
    pop_g1_count >= 2 && titles.push({ n: '완벽한 아이돌', c: sex_colors[0] });
  } else if (pv === vp_status_enum.virgin && vv === vp_status_enum.reborn) {
    titles.push({ n: '「순수한」영혼', c: sex_colors[1] });
    pop_g1_count >= 2 && titles.push({ n: '「완벽한」아이돌 ', c: sex_colors[0] });
  }
  era.printMultiColumns(buffer);
  sys_add_titles(cid, ...titles);
  era.set(`cflag:${cid}:컨디션`, 0);
  sys_like_chara(cid, 0, -(miss_count + aim_punish_count) * 100);
  sys_like_chara(302, 0, -aim_punish_count * 20);
  era.println();
  const attr_list = attr_names.map((e) => era.get(`base:${cid}:${e}`));
  const adapt_list = adaptability_names.map((e) =>
      era.get(`cflag:${cid}:${e}적성`),
    ),
    { blue, pink, white } = sys_count_juels(
      cid,
      1,
      attr_list,
      adapt_list,
      aim_count / aim_check.length,
    ),
    score_times = Math.max(
      2 ** ((get_chara_score(cid, true) - 20000) / 20000),
      1,
    );
  era.set(`juel:${cid}:분홍색`, Math.floor(Math.min(pink * score_times, 200)));
  era.set(`juel:${cid}:푸른색`, Math.floor(Math.min(blue * score_times, 268)));
  era.set(`juel:${cid}:흰색`, Math.floor(Math.min(white * score_times, 256)));
  const genes = new CharaAvailableGenes(cid);
  genes.clear();
  adapt_list.forEach((e, i) => {
    if (e === 6) {
      genes.add(100000 + i);
    } else if (e === 7) {
      genes.add(100000 + i, 2);
    }
  });
  attr_list.forEach((e, i) => {
    if (e >= 800) {
      genes.add(200000 + i * 10);
    }
    if (e >= 1200) {
      genes.add(200001 + i * 10);
    }
    if (e >= 1500) {
      genes.add(200002 + i * 10);
    }
    if (e >= 1800) {
      genes.add(200003 + i * 10);
    }
  });
  CharaSkills.get(cid)
    .get()
    .filter((e) => e < 200000)
    .forEach((e) => genes.add(e + 800000));
  const gene_a = era.get(`cflag:${cid}:상속자1`);
  if (gene_a > 0) {
    era.set(`cflag:${gene_a}:피상속`, 0);
    era.set(`cflag:${era.get(`cflag:${cid}:상속자2`)}:피상속`, 0);
  }
  const tid = era.get(`cflag:${cid}:돌봄`);
  if (tid > 0) {
    era.set(`cflag:${tid}:돌봄`, 0);
    era.set(`cflag:${cid}:돌봄`, 0);
  }
  if (get_chara_score(cid).charAt(0) >= 'S') {
    era.set(
      'flag:중복육성첫만남',
      Number(era.get('flag:중복육성첫만남') || !era.get('flag:중복육성첫만남')),
    );
  }
  era.set(`cflag:${cid}:자율훈련`, 0);
  const inmon = CharaInmon.get(cid);
  [plugin_enum.sex_1, plugin_enum.sex_2].forEach((p) => {
    if (inmon.on(p)) {
      inmon.set(p, 0);
    }
  });
}

module.exports = sys_handle_palace;
