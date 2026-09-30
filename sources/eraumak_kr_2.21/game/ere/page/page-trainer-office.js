const {
  clear,
  drawLine,
  get,
  input,
  printAndWait,
  printInColRows,
  set,
  setHorizontalAlign,
} = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { get_image } = require('#/system/sys-calc-image');
const sys_filter_chara = require('#/system/sys-filter-chara');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const get_riko_button = require('#/page/components/get-riko-button');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { cb_enum } = require('#/event/queue');
const { run_custom_rec } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const CharaTitles = require('#/data/chara-titles');
const MeekEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-201');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const { get_celebration } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

/** @type {Record<string,function(CharaTalk,CharaTalk):{handle:function:Promise,name:string}>} */
const handlers = {};

handlers[304] = (chara, me) => {
  if (get('cflag:304:모집상태') === recruit_flags.yes) {
    return {};
  } else if (get('cflag:304:모집상태') === recruit_flags.no) {
    return {
      handle: () => {
        set('cflag:304:모집상태', -1);
        return printAndWait([
          chara.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '에게, ',
          chara.sex,
          '가 담당하고 있는 ',
          chara.get_uma_sex_title(),
          '인 ',
          get_chara_talk(201).get_colored_name(),
          '의 재능이 훌륭해서, 곧 육성을 시작할 것이라고 말했다.',
        ]).then(() =>
          printAndWait([
            '만약 ',
            me.get_colored_name(),
            '이(가) 괜찮다면, 한동안 ',
            chara.sex,
            '의 훈련을 보조하며 경험을 쌓아보는 것이 어떻겠냐고 제안했다.',
          ]),
        );
      },
      name: '트레이너 업무에 대해 이야기한다',
    };
  } else if (get('cflag:304:모집상태') === -1) {
    return {
      disabled: get('flag:현재월') > 3 || sys_check_team_limit() > -1,
      handle: () => {
        set('cflag:304:모집상태', -2);
        return run_custom_rec(201, cb_enum.recruit).then(() => {
          if (get('cflag:201:육성횟수') === 0) {
            new MeekEduMarks().debuff = 40;
          }
        });
      },
      name: get('cflag:201:육성횟수') === 0 ? '임무 수락' : '다시 시도',
    };
  } else if (get('cflag:201:육성턴수합산') < 3 * 48) {
    return {
      disabled: get('base:0:기력') < 200 || get('base:304:기력') < 200,
      async handle() {
        const edu_marks = new MeekEduMarks();
        if (edu_marks.debuff) {
          await printAndWait([
            me.get_colored_name(),
            '과(와) ',
            chara.get_colored_name(),
            '은(는) 잠시 대화를 나누며, ',
            get_chara_talk(201).get_colored_name(),
            '에 대한 이해를 높였다.',
          ]);
          edu_marks.debuff = Math.max(
            edu_marks.debuff -
              1 -
              (Math.random() < get('relation:304:0') / 600) -
              (Math.random() < get('love:304') / 100),
            0,
          );
          sys_change_attr_and_print(0, '기력', -200);
          sys_change_attr_and_print(304, '기력', -200);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            '는 더 이상 ',
            me.get_colored_name(),
            '에게 공유할 만한 새로운 정보가 없다고 말했다.',
          ]);
        }
      },
      name: '해피 미쿠의 훈련에 대해 이야기한다',
    };
  } else {
    return {
      handle: () =>
        printAndWait([chara.get_colored_name(), '는 별다른 일이 없다고 답했다.']).then(() =>
          printAndWait([
            '하지만 ',
            chara.sex,
            '는 동시에, 만약 ',
            me.get_colored_name(),
            '이(가) 그 ',
            chara.get_uma_sex_title(),
            '에게 두 번째 기회를 줄 방법을 찾는다면, 꼭 ',
            get_chara_talk(201).get_colored_name(),
            '의 아쉬움을 달래 달라고 부탁했다.',
          ]),
        ),
      name: '해피 미쿠의 근황에 대해 이야기한다',
    };
  }
};

handlers[306] = get_riko_button;

async function page_trainer_office() {
  let flag_page = true;
  let flag_trainer = true;
  await arrive_location(set('flag:현재위치', location_enum.trainer));
  let trainer_list = loc_characters.get(location_enum.trainer);
  if (trainer_list.length > 0) {
    const celebration = get_celebration(),
      me = get_chara_talk(0);
    if (!get('flag:사무실첫만남')) {
      set('flag:사무실첫만남', 1);
      await printAndWait([
        me.get_colored_name(),
        '이(가) 트레이너 공용 사무실에 도착하니, 이미 두 명의 트레이너가 안에 있었다.',
      ]);
      const trainer0 = get_chara_talk(304),
        trainer1 = get_chara_talk(306);
      await trainer1.say_as_unknown_and_wait([
        '안녕하세요. 새로 오신 ',
        me.actual_name,
        ' 트레이너님 이시죠.',
      ]);
      await trainer1.say_and_wait([
        '저는 ',
        trainer1.get_colored_actual_name(),
        '입니다. 앞으로 중앙 트레센의 영광을 위해 함께 노력합시다.',
      ]);
      await trainer0.say_and_wait([
        '안녕하세요. 저는 ',
        trainer0.get_colored_actual_name(),
        '입니다. 앞으로 잘 부탁드립니다.',
      ]);
      if (
        sys_filter_chara('cflag', '모집상태', recruit_flags.yes).length === 1
      ) {
        await trainer1.say_and_wait([
          '아직 담당 우마무스메가 없으시니, 어려움이 있으시면 언제든지 저나 ',
          sys_get_colored_callname(306, 304),
          '과(와) 상의해 주세요.',
        ]);
      }
      await clear();
      print_page_header();
      drawLine();
    }
    while (flag_page) {
      setHorizontalAlign('space-around');
      printInColRows(
        [{ content: '누구와 이야기할까?', type: 'text' }],
        ...trainer_list.map((cid) => ({
          columns: [
            {
              names: get_image(cid)
                .map((e) => `${e}_半身`)
                .join('\t'),
              type: 'image.whole',
            },
            {
              accelerator: cid,
              config: {
                align: 'center',
                buttonType:
                  EventMarks.get(cid).count() > 0 ? 'danger' : 'warning',
              },
              content: get(`callname:${cid}:-2`),
              type: 'button',
            },
          ],
          config: { width: 4 },
        })),
        [{ accelerator: 999, type: 'button', content: '돌아가기' }],
      );
      setHorizontalAlign('start');
      const ret = await input();
      if (ret !== 999) {
        const chara = get_chara_talk(ret);
        const title = CharaTitles.get(ret).get_curr_title();
        flag_trainer = true;
        while (flag_trainer) {
          const temp_flag = await npc_common(
            chara,
            title,
            {
              async handle() {},
              name: '대화',
            },
            {
              loc: trainer_list.length > 1 && location_enum.restroom,
              name: '구애',
              fail_cb() {
                flag_trainer = flag_page = false;
              },
            },
            {
              loc: location_enum.trainer,
              name: '데이트',
              print_out_page,
            },
            {
              name: `${celebration} 축하`,
            },
            handlers[ret](chara, me),
            {
              name: '작별',
            },
          );
          if ((flag_trainer &&= temp_flag)) {
            await clear();
            print_page_header();
          }
        }
        trainer_list = trainer_list.filter(sys_check_awake);
        flag_page &= trainer_list.length > 0;
      } else {
        flag_page = false;
      }
      if (flag_page) {
        await clear();
        print_page_header();
        drawLine();
      }
    }
    drawLine();
    await printAndWait('【돌아갔다】');
  } else {
    drawLine();
    await printAndWait('【아무도 없는 것 같다…… 발길을 돌렸다】');
  }
  loc_characters.set(location_enum.trainer, trainer_list);
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.trainer,
  });
  set('flag:현재위치', location_enum.office);
}

module.exports = page_trainer_office;