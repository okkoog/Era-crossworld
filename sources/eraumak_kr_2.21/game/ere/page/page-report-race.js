const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_check_awake,
  sys_check_race_ready,
} = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const race_page = require('#/page/page-race');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { race_infos } = require('#/data/race/race-const');

async function report_race_page() {
  await era.clear();
  const cur_round = era.get('flag:현재턴수') - 1,
    begin_round = cur_round - (cur_round % 4);
  const dict = {};
  sys_filter_chara('cflag', '모집상태', recruit_flags.yes)
    .filter((chara_id) => era.get(`cflag:${chara_id}:종족`))
    .forEach((chara_id) => {
      const tmp = sys_reg_race(chara_id).curr;
      if (tmp.week <= begin_round + 12) {
        (dict[tmp.week] || (dict[tmp.week] = [])).push({
          id: chara_id,
          race: tmp.race,
        });
      }
    });
  era.printInColRows(
    [
      { type: 'divider' },
      {
        config: { align: 'center' },
        content: '출주 예정 레이스',
        type: 'text',
      },
    ],
    ...new Array(12)
      .fill(0)
      .map((_, i) => begin_round + i)
      .map((round) => {
        const year = Math.floor(round / 48),
          month = Math.floor((round - year * 48) / 4),
          week = round - year * 48 - month * 4,
          date_str = `${2000 + year} 년 ${month + 1} 월 제 ${week + 1} 주`;
        /** @type {*[]} */
        const columns = [
          { config: { offset: 1, width: 22 }, type: 'divider' },
          {
            config: {
              align: 'center',
              fontWeight: cur_round === round ? 'bold' : undefined,
            },
            content: cur_round === round ? `[${date_str}]` : date_str,
            type: 'text',
          },
        ];
        (dict[round + 1] || []).forEach((race) => {
          columns.push({
            config: { align: 'center', offset: 1, width: 22 },
            content: [
              get_chara_talk(race.id).get_colored_name(),
              ' ',
              race_infos[race.race].get_colored_name_with_class(),
            ],
            type: 'text',
          });
          if (cur_round === round) {
            columns.push({
              accelerator: race.id,
              config: {
                align: 'center',
                disabled: !sys_check_race_ready(race.id) || !sys_check_awake(0),
              },
              content: '레이스 출주',
              type: 'button',
            });
          }
        });
        return {
          columns,
          config: { width: 6 },
        };
      }),
    [
      { type: 'divider' },
      {
        accelerator: 999,
        config: { align: 'center' },
        content: '돌아가기',
        type: 'button',
      },
    ],
  );
  const ret = await era.input();
  if (ret !== 999) {
    const cur_loc = era.get('flag:현재위치'),
      cur_chara = era.get('flag:현재상호작용캐릭터');
    era.set('flag:현재위치', location_enum.race);
    era.set('flag:현재상호작용캐릭터', ret);
    await race_page(sys_reg_race(ret).curr.race);
    era.set('flag:현재상호작용캐릭터', cur_chara);
    era.set('flag:현재위치', cur_loc);
  }
}

module.exports = report_race_page;
