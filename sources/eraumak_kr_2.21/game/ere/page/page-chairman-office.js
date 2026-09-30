const era = require('#/era-electron');

const sys_check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_get_star_premium_draw = require('#/system/flag/sys-get-star-premium-draw');
const { sys_handle_action } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_get_move_cost,
} = require('#/system/sys-calc-chara-param');
const { sys_change_fame } = require('#/system/sys-calc-flag');
const sys_get_random_event = require('#/system/sys-get-random-event');

const arrive_location = require('#/page/components/arrive-location');
const get_riko_button = require('#/page/components/get-riko-button');
const goto_sex = require('#/page/components/goto-sex');
const npc_common = require('#/page/components/npc-common');
const print_page_header = require('#/page/components/page-header');
const print_out_page = require('#/page/page-out');

const { check_edu_script } = require('#/event/edu/edu-factory');
const { check_rec_script } = require('#/event/rec/rec-factory');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { get_chara_color } = require('#/data/chara-colors');
const CharaTitles = require('#/data/chara-titles');
const event_hooks = require('#/data/event/event-hooks');
const TasteLifeMarks = require('#/data/event/life-event-marks/life-event-marks-302');
const loc_characters = require('#/data/event/loc-characters');
const recruit_flags = require('#/data/event/recruit-flags');
const yandere_list = require('#/data/event/yandere-list');
const { get_celebration, get_relation_mark } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

async function page_chairman_office() {
  let flag_page = true;
  let nothing = true;
  await arrive_location(era.set('flag:현재위치', location_enum.chairman));
  const celebration = get_celebration();
  const chara = get_chara_talk(loc_characters.get(location_enum.chairman)[0]);
  const title = CharaTitles.get(chara.id).get_colored_curr_title();
  const star_premium_draw = sys_get_star_premium_draw();
  let cost = star_premium_draw.cost;
  if (era.get('cflag:302:모집상태') === recruit_flags.yes) {
    cost = (cost * 3) / 4;
  }
  let temp_flag;
  while (flag_page) {
    switch (chara.id) {
      case 302:
        temp_flag = await npc_common(
          chara,
          title,
          {
            name: '「잡담! 심심해서 놀러왔어요!」',
            async handle() {
              nothing = false;
              switch (get_relation_mark(302)) {
                case '실망':
                  await chara.say_and_wait(
                    '냉담! 나를 찾아올 틈이 있다면 우선 자신의 일부터 하는 게 좋네!',
                  );
                  break;
                case '의심':
                  await chara.say_and_wait('불쾌! 별로 보고 싶지 않네!');
                  break;
                case '냉담':
                  await chara.say_and_wait(
                    '의아! 트레이너는 무슨 일로 나를 찾아온 것인가?',
                  );
                  break;
                case '화목':
                  await chara.say_and_wait('인사! 오늘도 순조로운가?');
                  break;
                case '열정':
                  await chara.say_and_wait('칭찬! 자네도 전설의 반열에 오를 걸세!');
                  break;
                case '호감':
                  await chara.say_and_wait('환영! 무슨 일이 있다면 나를 찾아오게나!');
                  break;
                case '친밀':
                  await chara.say_and_wait('기쁨! 시간이 된다면 와서 이야기나 나누세!');
                  break;
                case '불변':
                  await chara.say_and_wait('자네라면……화, 환청! 자넨 아무것도 못 들은 걸세!');
              }
            },
          },
          {
            async handle() {
              nothing = false;
              switch (await goto_sex(chara.id, location_enum.chairman)) {
                case true:
                  await chara.say_and_wait('수줍! 그럼 저녁에 당신을 찾아가겠네!');
                  break;
                case 2:
                  flag_page = false;
              }
            },
            name: '「섹스! 당신을 덮치고 싶습니다!!」',
          },
          {
            async handle() {
              nothing = false;
              sys_handle_action(
                sys_get_move_cost(location_enum.gate, chara.id),
                chara.id,
              );
              era.set('flag:현재위치', location_enum.gate);
              await print_out_page();
              era.set('flag:현재위치', location_enum.chairman);
            },
            name: '「약속! 같이 산책하러 갑시다!」',
          },
          {
            handle: async () => (nothing = false),
            name: `「경축! 즐거운 ${celebration}!」`,
          },
          {
            async handle() {
              nothing = false;
              if (sys_check_team_limit() >= 0) {
                await chara.say_and_wait('의문! 자네 팀원은 이미 충분히 많지 않은가!');
              } else if (era.get('flag:현재월') > 3) {
                await chara.say_and_wait('의혹! 지금은 담당 우마무스메를 모집할 시기가 아니네!');
              } else {
                chara.say(
                  '통지! 아직 입학하지 않았으나 천부적인 재능을 가진 아이들의 경우, 학원 측에서 이미 성과를 낸 트레이너가 상대를 직접 지명하여 교육하는 것을 허가하나, 대중들을 납득시킬만한 명성을 필요로 한다네!',
                );
                chara.say(
                  '주의! 이러한 방식으로 지명하더라도, 상대방과 처음부터 다시 사이좋게 지내야 함을 명심하도록!',
                );
                const temp_list = era
                  .getAllCharacters()
                  .filter(
                    (cid) =>
                      cid > 0 &&
                      (era.get(`cflag:${cid}:무작위모집`) ||
                        era.get(`staticcflag:${cid}:무작위모집`)) === 1 &&
                      era.get(`cflag:${cid}:모집상태`) !== recruit_flags.yes &&
                      era.get('cflag:0:템플릿캐릭터') !== cid,
                  );
                if (
                  era.get('cflag:302:모집상태') !== recruit_flags.yes &&
                  new TasteLifeMarks().who_am_i === 2
                ) {
                  temp_list.push(302);
                }
                era.printMultiColumns(
                  ['목록에서 지명', '이름으로 지명', 'ID로 지명', '그만두기'].map(
                    (e, i) => {
                      return {
                        accelerator: i + 1,
                        content: e,
                        config: { width: 6, align: 'center' },
                        type: 'button',
                      };
                    },
                  ),
                );
                let temp = await era.input();
                switch (temp) {
                  case 1:
                    temp = [];
                    temp_list
                      .map((cid) => {
                        const color = get_chara_color(cid);
                        const flag_script =
                          check_rec_script(cid) && check_edu_script(cid);
                        let name = era.get(`callname:${cid}:-1`);
                        if (name === '-') {
                          name = era.get(`static:${cid}:name`);
                        }
                        return {
                          accelerator: cid,
                          config: {
                            align: 'center',
                            buttonType: '',
                            color,
                            width: 4,
                          },
                          content:
                            name +
                            (star_premium_draw.chara === cid
                              ? ' [지명됨]'
                              : ''),
                          priority: flag_script,
                          type: 'button',
                        };
                      })
                      .reduce(
                        (p, c) => {
                          p[1 - c.priority].push(c);
                          return p;
                        },
                        [[], []],
                      )
                      .forEach((l) => {
                        if (l.length > 0) {
                          temp.push({
                            config: {
                              content: l[0].priority
                                ? '전용 구상이 있음'
                                : '전용 지문이 있음',
                            },
                            type: 'divider',
                          });
                          temp.push(...l);
                        }
                      });
                    era.printMultiColumns(temp);
                    temp = await era.input();
                    break;
                  case 2:
                    era.print('지명하고자 하는 캐릭터의 이름을 입력해 주십시오.');
                    temp = await era.input();
                    temp = temp_list.filter(
                      (e) =>
                        era.get(`callname:${e}:-1`) === temp ||
                        era.get(`static:${e}:name`) === temp,
                    )[0];
                    break;
                  case 3:
                    era.print('지명하고자 하는 캐릭터의 ID를 입력해 주세요.');
                    temp = await era.input();
                    break;
                  case 4:
                    temp = -255;
                }
                if (temp === 302) {
                  await chara.say_and_wait('경악!');
                  await chara.say_and_wait('당황! 어어어어어쩌지?!');
                  await get_chara_talk(0).say_and_wait(
                    '장군! 물러날 길은 없습니다. 저와 함께 가시지요!',
                  );
                  era.set('callname:302:-2', '아키카와 야요이');
                  await chara.say_and_wait('아와와와와와와……');
                  era.set('cflag:302:모집상태', recruit_flags.yes);
                  if (era.get('talent:302:얀데레')) {
                    yandere_list.push(302);
                  }
                  await era.printAndWait([
                    '경축! ',
                    chara.get_colored_actual_name(),
                    '가 팀에 합류했습니다!',
                  ]);
                } else if (temp !== -255) {
                  if (temp === star_premium_draw.chara) {
                    await chara.say_and_wait([
                      '통보!',
                      get_chara_talk(temp).get_colored_actual_name(),
                      ' 학생은 이미 훈련장에서 기다리고 있네!',
                    ]);
                  } else if (temp_list.indexOf(temp) === -1) {
                    await chara.say_and_wait('의문! 그 인물은 존재하지 않네!');
                  } else {
                    chara.say([
                      '선택! 학원 측에서 자네가 ',
                      {
                        content: era.get(`static:${temp}:name`),
                        color: get_chara_color(temp),
                        fontWeight: 'bold',
                      },
                      ' 학생과 연결해 주길 바라나?',
                    ]);
                    era.printButton('「동의!!」', 1);
                    era.printButton('「취소!!」', 2);
                    if ((await era.input()) === 1) {
                      await chara.say_and_wait([
                        '격양! 이제 ',
                        get_chara_talk(temp).get_colored_actual_name(),
                        ' 학생은 늘 훈련장에 나올 테니, 잘 해보게나!',
                      ]);
                      sys_change_fame(-cost);
                      if (star_premium_draw.chara > 0) {
                        await chara.say_and_wait([
                          '불쾌! ',
                          get_chara_talk(0).get_colored_actual_name(),
                          ' 트레이너는 다음엔 더 신중히 생각하고 결정하도록!',
                        ]);
                        era.println();
                        sys_like_chara(302, 0, -50) && (await era.waitAnyKey());
                      }
                      star_premium_draw.chara = temp;
                    } else {
                      await chara.say_and_wait('분노! 다시 생각하고 오게나!');
                    }
                  }
                }
              }
            },
            name: '「항의! 훈련장에 훈련시키고 싶은 우마무스메가 없습니다!」',
          },
          {
            async handle() {
              if (sys_check_awake(chara.id)) {
                await chara.say_and_wait(
                  nothing ? '불쾌! 날 놀리지 말게!' : '작별! 열심히 일하게나!',
                );
                if (nothing) {
                  era.println();
                  sys_like_chara(302, 0, -25) && (await era.waitAnyKey());
                }
              }
            },
            name: '「작별! 바이바이!」',
          },
          () => (nothing = false),
        );
        break;
      case 306:
        temp_flag = await npc_common(
          chara,
          title,
          { name: '잡담' },
          {
            name: '구애',
            fail_cb() {
              flag_page = false;
            },
          },
          { loc: location_enum.chairman, name: '데이트', print_out_page },
          { name: `${celebration} 축하` },
          get_riko_button(chara, get_chara_talk(0)),
          { name: '작별' },
        );
    }
    if ((flag_page &&= temp_flag)) {
      await era.clear();
      print_page_header();
    }
  }
  era.drawLine();
  await era.printAndWait('【복귀】');
  if (!sys_check_awake(chara.id)) {
    loc_characters.set(location_enum.chairman, []);
  }
  await sys_get_random_event(event_hooks.back_school)({
    loc: location_enum.chairman,
  });
  era.set('flag:현재위치', location_enum.office);
}

module.exports = page_chairman_office;
