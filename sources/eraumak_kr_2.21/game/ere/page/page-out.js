const era = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { sys_get_move_cost } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const print_chara_info = require('#/page/components/cur-chara-info');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const MejiroCity = require('#/page/mejiro/mejiro-common');

const { run_custom_daily } = require('#/event/daily/daily-factory');
const game_guides = require('#/event/others/game-guides');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const chara_info_type = require('#/data/chara-info-type');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const TokinoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-301');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { location_enum } = require('#/data/locations');
const { vehicle_names, vehicle_verbs } = require('#/data/move-const');

require('#/page/mejiro/free-mejiro');
require('#/page/mejiro/call-of-mejiro');

/**
 * @param {{[a]:number,s:number,d:boolean,l:number,n:string,[t]:string}[]} positions
 * @param {EventMarks} event_marks
 * @returns {{accelerator:number,config:{buttonType:string,disabled:boolean|*,width:number},content:string,type:string}[]}
 */
function get_position_buttons(positions, event_marks) {
  return positions.map((e, i) => ({
    accelerator: e.a ?? i + 1,
    config: {
      buttonType: event_marks.check(e.s) ? 'danger' : 'warning',
      disabled: e.d,
      disableWarning: true,
      title: e.t,
      width: 4,
    },
    content: e.n,
    type: 'button',
  }));
}

async function out_page() {
  let cid = era.get('flag:현재상호작용캐릭터');
  let vehicle;
  const player_base = {
    stamina: era.get('base:0:체력'),
    time: era.get('base:0:기력'),
  };
  const chara_base =
    cid > 0
      ? {
          stamina: era.get(`base:${cid}:체력`),
          time: era.get(`base:${cid}:기력`),
        }
      : undefined;

  await era.clear();
  print_page_header();
  const tokino_check = cid !== 301 && sys_check_npc_working(301);
  print_chara_info(cid, chara_info_type.out, tokino_check && 301);
  era.drawLine();
  if (!(await sys_get_random_event(event_hooks.out_start, cid)())) {
    const event_marks = EventMarks.get(cid);
    const positions = MejiroCity.instance().get_positions(
      cid,
      player_base,
      chara_base,
    );
    vehicle = !cid && era.get('flag:1인용탈것');
    era.drawLine();
    if (vehicle) {
      era.print(
        `【${vehicle_verbs[vehicle]}着 ${vehicle_names[vehicle]} 到达了 학원정문】`,
      );
    }
    await game_guides.out();
    era.printMultiColumns([
      {
        content: [
          ...(cid
            ? [get_chara_talk(cid).get_colored_name(), '과(와) 같이']
            : ['혼자서']),
          ' 어디로 갈까?',
        ],
        type: 'text',
      },
      ...get_position_buttons(positions, event_marks),
      ...(!cid && tokino_check
        ? [
            {
              accelerator: 10,
              content: `${era.get('callname:301:-2')}와 대화하기`,
              type: 'button',
            },
          ]
        : []),
      { accelerator: 999, content: '그냥 돌아가자……', type: 'button' },
    ]);

    const aim = await era.input();
    let temp;
    switch (aim) {
      case 10:
        temp = {
          flag: true,
          chara: get_chara_talk(301),
          title: CharaTitles.get(301).get_colored_curr_title(),
        };
        while (temp.flag) {
          const temp_flag = await npc_common(
            temp.chara,
            temp.title,
            {
              async handle() {
                await era.printAndWait([
                  '【',
                  get_chara_talk(0).get_colored_name(),
                  '과(와) ',
                  temp.chara.get_colored_name(),
                  '는(은) 잠시 대화했다】',
                ]);
              },
              name: '잡담',
            },
            {
              fail_cb() {
                temp.flag = false;
              },
              loc: location_enum.restroom,
              name: '구애',
            },
            {
              async handle() {
                const positions = MejiroCity.instance().get_positions(
                  301,
                  {
                    stamina: era.get('base:0:체력'),
                    time: era.get('base:0:기력'),
                  },
                  {
                    stamina: era.get('base:301:체력'),
                    time: era.get('base:301:기력'),
                  },
                );
                era.printMultiColumns([
                  {
                    content: [
                      temp.chara.get_colored_name(),
                      '과(와) 어디로 갈까?',
                    ],
                    type: 'text',
                  },
                  ...get_position_buttons(positions, EventMarks.get(301)),
                  { accelerator: 999, content: '그냥 돌아가자……', type: 'button' },
                ]);
                const aim = await era.input();
                if (aim !== 999) {
                  vehicle = era.get('flag:다인용탈것');
                  era.printMultiColumns([
                    { type: 'divider' },
                    {
                      content: [
                        '【',
                        temp.chara.get_colored_name(),
                        '과(와) 함께',
                        vehicle
                          ? `${vehicle_names[vehicle]}을(를) 타고 `
                          : '',
                        `${positions[aim - 1].n}(으)로 향했다】`,
                      ],
                      type: 'text',
                    },
                  ]);
                  sys_handle_action(
                    sys_get_move_cost(positions[aim - 1].l, 301),
                    301,
                  );
                  era.set('flag:현재위치', positions[aim - 1].l);
                  if (positions[aim - 1].l === location_enum.mejiro) {
                    await MejiroCity.instance().page(301);
                  } else if (
                    !(await sys_get_random_event(positions[aim - 1].s, 301)())
                  ) {
                    await run_custom_daily(301, positions[aim - 1].s);
                  }
                  era.set('flag:현재위치', location_enum.gate);
                }
                temp.flag = false;
              },
              name: '외출',
            },
            {
              name: '축하',
            },
            era.get('cflag:301:모집상태') === recruit_flags.yes ||
              new TokinoLifeMarks().who_am_i !== 2
              ? {}
              : {
                  name: '「도와주세요」(모집)',
                  handle() {
                    era.set('callname:301:-2', '하야카와 타즈나');
                    era.set('cflag:301:모집상태', recruit_flags.yes);
                    if (era.get('talent:301:얀데레')) {
                      yandere_list.push(301);
                    }
                    return era.printAndWait([
                      temp.chara.get_colored_name(),
                      '가 팀에 합류했다!',
                    ]);
                  },
                },
            {
              handle() {
                return era.printAndWait([
                  '【',
                  temp.chara.get_colored_name(),
                  '과(와) 작별 인사를 나눈 뒤, ',
                  get_chara_talk(0).get_colored_name(),
                  '은(는) 떠났다】',
                ]);
              },
              name: '떠나기',
            },
          );
          if ((temp.flag &&= temp_flag)) {
            await era.clear();
            print_page_header();
          }
        }
        break;
      case 999:
        break;
      default:
        vehicle =
          cid > 0
            ? era.get('flag:다인용탈것')
            : era.get('flag:다인용탈것') || era.get('flag:1인용탈것');
        era.printMultiColumns([
          {
            type: 'divider',
          },
          {
            content: [
              '【',
              ...(cid > 0
                ? [get_chara_talk(cid).get_colored_name(), '과(와) 함께 ']
                : ['혼자']),
              vehicle
                ? `${vehicle_names[vehicle]}을(를) 타고 `
                : '',
              `${positions[aim - 1].n}(으)로 향했다】`,
            ],
            type: 'text',
          },
        ]);
        sys_handle_action(sys_get_move_cost(positions[aim - 1].l, cid), cid);
        era.set('flag:현재위치', positions[aim - 1].l);
        if (positions[aim - 1].l === location_enum.mejiro) {
          await MejiroCity.instance().page(cid);
        } else if (!(await sys_get_random_event(positions[aim - 1].s, cid)())) {
          await run_custom_daily(cid, positions[aim - 1].s);
        }
        era.set('flag:현재위치', location_enum.gate);
    }
    era.drawLine();
    await era.printAndWait('【복귀】');
    await sys_get_random_event(
      event_hooks.back_school,
      cid,
    )({
      loc: positions[aim - 1]?.l,
    });
  }
}

module.exports = out_page;
