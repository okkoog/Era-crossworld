const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_check_race_ready } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const recruit_flags = require('#/data/event/recruit-flags');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {number} race
 * @returns {Promise<number[]>}
 */
async function select_contestants(race) {
  if (race === race_enum.begin_race) {
    return [era.get('flag:현재상호작용캐릭터')];
  }
  const registered_list = sys_filter_chara(
      'cflag',
      '모집상태',
      recruit_flags.yes,
    ).filter((e) => sys_reg_race(e).curr.race === race),
    contestants = registered_list.filter((e) => sys_check_race_ready(e));
  const dict = {};
  let ret = contestants;
  ret.forEach((e) => (dict[e] = true));
  if (contestants.length > 1) {
    const cur_line = era.getLineCount();
    let contestant_count = contestants.length,
      flag = true;
    while (flag) {
      await era.clear(era.getLineCount() - cur_line);
      era.drawLine();
      era.printInColRows(
        [
          {
            content: [
              '다음 팀원이 ',
              race_infos[race].get_colored_name_with_class(),
              '에 출주 등록되어 있다. 누군가 레이스를 회피해야 할까?',
            ],
            type: 'text',
          },
        ],
        {
          columns: contestants.map((e) => {
            return {
              accelerator: e,
              config: {
                align: 'center',
                buttonType: dict[e] ? 'warning' : 'info',
                width: 6,
              },
              content: `${era.get(`callname:${e}:-1`)} [${
                dict[e] ? '출주' : '회피'
              }]`,
              type: 'button',
            };
          }),
          config: { horizontalAlign: 'center' },
        },
        [
          {
            accelerator: 1000,
            config: { disabled: !contestant_count },
            content: '출주 명단 확정',
            type: 'button',
          },
        ],
      );
      const select = await era.input();
      if (select === 1000) {
        flag = false;
      } else {
        dict[select] ? contestant_count-- : contestant_count++;
        dict[select] = !dict[select];
      }
    }
    ret = Object.entries(dict)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
  }
  registered_list.forEach((e) => {
    if (dict[e]) {
      era.set(`cflag:${e}:자율훈련`, 0);
    } else {
      sys_reg_race(e).curr = { race: -1, week: -1 };
    }
  });
  return ret;
}

module.exports = select_contestants;
