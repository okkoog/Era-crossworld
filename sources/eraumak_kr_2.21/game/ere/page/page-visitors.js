const era = require('#/era-electron');

const { sys_get_billings } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { run_custom_rec } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_abbr_number } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const BryneLifeMarks = require('#/data/event/life-event-marks/life-event-marks-349');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');
const { creditors } = require('#/data/other-const');

/** @type {Record<string,function(CharaTalk,CharaTalk):{[handle]:function:Promise,[name]:string}>} */
const handlers = {};

[204, 346, 347, 348].forEach((cid) => {
  handlers[cid] = () =>
    era.get(`cflag:${cid}:모집상태`) !== recruit_flags.yes
      ? {
          name: '「저를 도와주세요 !」（모집）',
          handle() {
            era.set(`cflag:${cid}:모집상태`, recruit_flags.yes);
            if (era.get(`talent:${cid}:얀데레`) > 0) {
              yandere_list.push(cid);
            }
            return era.printAndWait([
              get_chara_talk(cid).get_colored_name(),
              ' 을(를) 영입했다!',
            ]);
          },
        }
      : {};
});

[207, 308, 345].forEach((cid) => {
  handlers[cid] = () =>
    era.get(`cflag:${cid}:모집상태`) !== recruit_flags.yes &&
    era.get(`love:${cid}`) >= 40
      ? {
          name: '「함께 갑시다!」(영입)',
          handle() {
            era.set(`callname:${cid}:-2`, era.get(`callname:${cid}:-1`));
            era.set(`cflag:${cid}:모집상태`, recruit_flags.yes);
            if (era.get(`talent:${cid}:얀데레`) > 0) {
              yandere_list.push(cid);
            }
            return era.printAndWait([
              get_chara_talk(cid).get_colored_name(),
              ' 을(를) 영입했다!',
            ]);
          },
        }
      : {};
});

handlers[303] = () =>
  era.get('cflag:303:모집상태') !== recruit_flags.yes
    ? {
        name: '더 많은 권한 부여(영입)',
        handle() {
          return run_custom_rec(303, event_hooks.recruit);
        },
      }
    : {};

handlers[343] = () =>
  era.get('cflag:343:모집상태') !== recruit_flags.yes &&
  new MayLifeMarks().who_am_i === 3
    ? {
        name: '「함께 갑시다!」(영입)',
        handle() {
          era.set('callname:343:-2', '사타케 메이');
          era.set('cflag:343:모집상태', recruit_flags.yes);
          if (era.get('talent:343:얀데레')) {
            yandere_list.push(343);
          }
          return era.printAndWait([
            get_chara_talk(343).get_colored_name(),
            ' 을(를) 영입했다!',
          ]);
        },
      }
    : {};

handlers[344] = () =>
  era.get('cflag:344:모집상태') !== recruit_flags.yes &&
  era.get('love:344') >= 25
    ? {
        name: '「함께 갑시다!」(영입)',
        handle() {
          era.set('callname:344:-2', '츠루기 료카');
          era.set('cflag:344:모집상태', recruit_flags.yes);
          return era.printAndWait([
            get_chara_talk(344).get_colored_name(),
            ' 을(를) 영입했다!',
          ]);
        },
      }
    : {};

handlers[349] = () =>
  era.get('cflag:349:모집상태') === recruit_flags.yes
    ? {
        name: '투자',
        async handle() {
          const bryne = get_chara_talk(349);
          const life_marks = new BryneLifeMarks();
          const money = era.get('flag:현재코인');
          if (money < 1000 && !life_marks.funds) {
            await bryne.say_and_wait(
              `미안해, 하지만 ${sys_get_callname(349, 0)}, 지금 자금이 부족한 거 아니야? 내 커넥션 중에는 1,000 우마코인 미만의 투자를 받아주는 기관은 없단 말이지……`,
            );
            return;
          }
          if (life_marks.funds > 0) {
            era.print([
              '현재 ',
              bryne.get_colored_name(),
              '에게 ',
              get_abbr_number(life_marks.funds),
              '우마코인을 투자 중이며, 매주 총 ',
              get_abbr_number(life_marks.funds / (500 - 300 * life_marks.buff)),
              '우마코인 만큼의 수익이 발생합니다.',
            ]);
          }
          era.printButton('투자하기 (1000우마코인 단위)', 1, {
            disabled: money < 1000,
          });
          era.printButton('투자금 회수', 2, { disabled: life_marks.funds <= 0 });
          const _old = life_marks.funds;
          if ((await era.input()) === 1) {
            era.print('얼마를 투자할까?');
            let flag = true;
            let _new = 1;
            const curr = era.getLineCount();
            while (flag) {
              await era.clear(era.getLineCount() - curr);
              era.printMultiColumns([
                {
                  accelerator: 2,
                  config: { align: 'center', disabled: _new <= 20, width: 4 },
                  content: '-20,000',
                  type: 'button',
                },
                {
                  accelerator: 4,
                  config: { align: 'center', disabled: _new === 1, width: 4 },
                  content: '-1000',
                  type: 'button',
                },
                {
                  config: {
                    align: 'center',
                    width: 4,
                  },
                  content: [get_abbr_number(_new * 1000), ' 우마코인'],
                  type: 'text',
                },
                {
                  accelerator: 6,
                  config: {
                    align: 'center',
                    disabled: money <= _new * 1000,
                    width: 4,
                  },
                  content: '+1000',
                  type: 'button',
                },
                {
                  accelerator: 8,
                  config: {
                    align: 'center',
                    disabled: money < (_new + 20) * 1000,
                    width: 8,
                  },
                  content: '+20,000',
                  type: 'button',
                },
                { content: [], type: 'text' },
                {
                  config: { width: 4 },
                  accelerator: 98,
                  content: '확인',
                  type: 'button',
                },
                {
                  config: { width: 4 },
                  accelerator: 99,
                  content: '취소',
                  type: 'button',
                },
              ]);
              switch (await era.input()) {
                case 2:
                  _new -= 20;
                  break;
                case 4:
                  _new--;
                  break;
                case 6:
                  _new++;
                  break;
                case 8:
                  _new += 20;
                  break;
                case 98:
                  flag = false;
                  break;
                case 99:
                  _new = 0;
                  flag = false;
              }
            }
            if (_new > 0) {
              life_marks.funds += _new * 1000;
              era.add('flag:현재코인', -_new * 1000);
              await era.printAndWait([
                bryne.get_colored_name(),
                '에게 ',
                get_abbr_number(_new * 1000),
                '우마코인을 추가 투자했습니다. 매주 총 ',
                get_abbr_number(
                  life_marks.funds / (500 - 300 * life_marks.buff),
                ),
                '우마코인 만큼의 수익이 발생합니다.',
              ]);
            }
          } else {
            era.print([
              '얼마를 회수하시겠습니까? 총 투자 금액 ',
              get_abbr_number(life_marks.funds),
              '우마코인: ',
            ]);
            let flag = true;
            let got = 1;
            const curr = era.getLineCount();
            while (flag) {
              await era.clear(era.getLineCount() - curr);
              era.printMultiColumns([
                {
                  accelerator: 2,
                  config: { align: 'center', disabled: got <= 20, width: 4 },
                  content: '-20,000',
                  type: 'button',
                },
                {
                  accelerator: 4,
                  config: { align: 'center', disabled: got === 1, width: 4 },
                  content: '-1,000',
                  type: 'button',
                },
                {
                  config: {
                    align: 'center',
                    width: 4,
                  },
                  content: [get_abbr_number(got * 1000), ' 우마코인'],
                  type: 'text',
                },
                {
                  accelerator: 6,
                  config: {
                    align: 'center',
                    disabled: life_marks.funds <= got * 1000,
                    width: 4,
                  },
                  content: '+1,000',
                  type: 'button',
                },
                {
                  accelerator: 8,
                  config: {
                    align: 'center',
                    disabled: life_marks.funds < (got + 20) * 1000,
                    width: 8,
                  },
                  content: '+20,000',
                  type: 'button',
                },
                { content: [], type: 'text' },
                {
                  config: { width: 4 },
                  accelerator: 98,
                  content: '확인',
                  type: 'button',
                },
                {
                  config: { width: 4 },
                  accelerator: 99,
                  content: '취소',
                  type: 'button',
                },
              ]);
              switch (await era.input()) {
                case 2:
                  got -= 20;
                  break;
                case 4:
                  got--;
                  break;
                case 6:
                  got++;
                  break;
                case 8:
                  got += 20;
                  break;
                case 98:
                  flag = false;
                  break;
                case 99:
                  got = 0;
                  flag = false;
              }
            }
            if (got > 0) {
              life_marks.funds -= got * 1000;
              era.add('flag:현재코인', got * 1000);
              era.print([get_abbr_number(got * 1000), '우마코인을 회수했습니다.']);
              if (life_marks.funds > 0) {
                await era.printAndWait([
                  '아직 ',
                  get_abbr_number(life_marks.funds),
                  '우마코인이 남아있으며, 매주 총 ',
                  get_abbr_number(
                    life_marks.funds / (500 - 300 * life_marks.buff),
                  ),
                  '우마코인 만큼의 수익이 발생합니다.',
                ]);
              }
            }
          }
          if (_old !== life_marks.funds) {
            const billings = sys_get_billings();
            let invest = billings.find((e) => e.creditor === creditors.invest);
            if (!invest) {
              invest = { creditor: creditors.invest, timer: -1, repay: 0 };
              billings.push(invest);
            }
            invest.repay = life_marks.funds / (500 - 300 * life_marks.buff);
          }
        },
      }
    : era.get('love:349') >= 40
      ? {
          name: '「함께 갑시다!」(영입)',
          handle() {
            era.set('callname:349:-2', era.get('callname:349:-1'));
            era.set('cflag:349:모집상태', recruit_flags.yes);
            if (era.get('talent:349:얀데레') > 0) {
              yandere_list.push(349);
            }
            return era.printAndWait([
              get_chara_talk(349).get_colored_name(),
              ' 을(를) 영입했다!',
            ]);
          },
        }
      : {};

async function page_visitors() {
  let flag_page = true;
  let flag_visitor = true;
  await arrive_location(era.set('flag:현재위치', location_enum.visitor));
  let visitor_list = loc_characters.get(location_enum.visitor);
  if (visitor_list.length > 0) {
    const celebration = get_celebration(),
      me = get_chara_talk(0);
    while (flag_page) {
      era.setHorizontalAlign('space-around');
      era.printInColRows(
        [{ content: '누구와 이야기할까?', type: 'text' }],
        ...visitor_list.map((cid) => {
          const image = era.get(`cstr:${cid}:이미지`);
          return {
            columns: [
              {
                names: `${image}_私_半身\t${image}_半身`,
                type: 'image.whole',
              },
              {
                accelerator: cid,
                config: {
                  align: 'center',
                  buttonType:
                    EventMarks.get(cid).count() > 0 ? 'danger' : 'warning',
                },
                content: era.get(`callname:${cid}:-2`),
                type: 'button',
              },
            ],
            config: { width: 4 },
          };
        }),
        [{ accelerator: 999, type: 'button', content: '돌아간다' }],
      );
      era.setHorizontalAlign('start');
      const cid = await era.input();
      if (cid !== 999) {
        const chara = get_chara_talk(cid);
        const title = CharaTitles.get(chara.id).get_curr_title();
        flag_visitor = true;
        while (flag_visitor) {
          const temp_flag = await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: '잡담',
            },
            {
              loc: visitor_list.length > 1 && location_enum.restroom,
              name: '구애',
              fail_cb() {
                flag_visitor = flag_page = false;
              },
            },
            {
              loc: location_enum.visitor,
              name: '데이트',
              print_out_page,
            },
            {
              name: `축하 ${celebration}`,
            },
            handlers[cid](chara, me),
            { name: '작별' },
          );
          if ((flag_visitor &&= temp_flag)) {
            await era.clear();
            print_page_header();
          }
        }
        visitor_list = visitor_list.filter(sys_check_awake);
        flag_page = visitor_list.length > 0;
      } else {
        flag_page = false;
      }
      if (flag_page) {
        await era.clear();
        print_page_header();
        era.drawLine();
      }
    }
    era.drawLine();
    await era.printAndWait('【복귀】');
  } else {
    era.drawLine();
    await era.printAndWait('【아무도 없는 것 같아 돌아왔다……】');
  }
  loc_characters.set(location_enum.visitor, visitor_list);
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.visitor,
  });
  era.set('flag:현재위치', location_enum.office);
}

module.exports = page_visitors;
