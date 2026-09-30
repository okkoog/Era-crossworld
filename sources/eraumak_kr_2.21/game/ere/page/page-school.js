const era = require('#/era-electron');

const sys_get_random_event = require('#/system/sys-get-random-event');

const print_curr_chara = require('#/page/components/cur-chara-info');
const print_page_header = require('#/page/components/page-header');

const { run_custom_daily } = require('#/event/daily/daily-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum, location_name } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

module.exports = async (location) => {
  await era.clear();
  era.set('flag:현재위치', location);
  const cid = era.get('flag:현재상호작용캐릭터');
  print_page_header();
  print_curr_chara(cid, chara_info_type.school);
  era.drawLine();
  const hook =
    location === location_enum.atrium
      ? event_hooks.school_atrium
      : event_hooks.school_rooftop;
  if (!(await sys_get_random_event(hook, cid)())) {
    era.drawLine();
    const vehicle = !cid && era.get('flag:1인용탈것');
    era.print([
      '【',
      ...(cid
        ? [get_chara_talk(cid).get_colored_name(), '과(와) 같이 ']
        : ['혼자 ']),
      vehicle ? `${vehicle_verbs[vehicle]}, ${vehicle_names[vehicle]} 타고 ` : '',
      `${location_name[location]}에 왔다】`,
    ]);
    await run_custom_daily(cid, hook);
    era.drawLine();
    await era.printAndWait('【복귀】');
    await sys_get_random_event(event_hooks.back_school, cid)({ loc: location });
  }
  era.set('flag:현재위치', location_enum.office);
};
