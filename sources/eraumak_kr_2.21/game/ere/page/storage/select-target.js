const era = require('#/era-electron');

const get_status = require('#/system/chara/sys-get-status');
const sys_filter_chara = require('#/system/sys-filter-chara');

const { attr_background_colors } = require('#/data/const.json');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {number} item
 * @param {function(number):boolean} filter_cb
 * @returns {Promise<number|undefined>}
 */
async function select_target_in_storage(item, filter_cb = () => true) {
  const buffer = [];
  const item_name = era.get(`itemname:${item}`);
  let team_list = sys_filter_chara(
    'cflag',
    '모집상태',
    recruit_flags.yes,
  ).filter(filter_cb);
  if (team_list.length) {
    buffer.push({
      config: { content: `选择要使用【${item_name}】的对象` },
      type: 'divider',
    });
    team_list.forEach((e) => {
      const stamina = era.get(`base:${e}:체력`);
      const max_stamina = era.get(`maxbase:${e}:체력`);
      const time = era.get(`base:${e}:기력`);
      const max_time = era.get(`maxbase:${e}:기력`);
      buffer.push(
        {
          accelerator: e,
          config: { width: 4 },
          content: era.get(`callname:${e}:-2`),
          type: 'button',
        },
        {
          config: {
            barWidth: 20,
            color: attr_background_colors['체력'],
            height: 22,
            width: 4,
          },
          inContent: `${Math.floor(stamina)}/${max_stamina}`,
          percentage: (stamina * 100) / max_stamina,
          type: 'progress',
        },
        {
          config: {
            barWidth: 20,
            color: attr_background_colors['기력'],
            height: 22,
            width: 4,
          },
          inContent: `${Math.floor(time)}/${max_time}`,
          type: 'progress',
          percentage: (time * 100) / max_time,
        },
        {
          config: { width: 12 },
          content: get_status(e),
          type: 'text',
        },
      );
    });
    buffer.push({ accelerator: 999, content: '돌아가기', type: 'button' });
    era.printMultiColumns(buffer);
    const ret = await era.input();
    if (ret === 999) {
      return;
    }
    return ret;
  } else {
    await era.printAndWait(`${item_name}의 사용 대상이 없다...`);
  }
}

module.exports = select_target_in_storage;
