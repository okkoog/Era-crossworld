const era = require('#/era-electron');

const { check_chara_ero_image } = require('#/system/ero/sys-calc-ero-image');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors } = require('#/data/color-const');
const { mark_colors } = require('#/data/const.json');
const CharaInmon = require('#/data/ero/chara-inmon');
const { slavery_enum } = require('#/data/ero/mark-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const {
  penis_desc,
  skin_desc,
  unexpected_pregnant_enum,
  vp_status_enum,
} = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');
const extra_base = require('#/data/extra-base');
const { get_breast_cup, get_hair_color } = require('#/data/info-generator');

const hair_color_names = [
  '흰색',
  '주황빛 갈색',
  '분홍색',
  '검정색',
  '붉은 갈색',
  '금색',
  '푸른색',
  '초록색',
  '연한 갈색',
  '진한 갈색',
  '보라색',
];
const body_color_names = ['짙은 밤색', '밤색', '회색', '검은색', '갈색', '어두운 갈색', '흑갈색'];

/**
 * @this {CallOfMejiro}
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function cum_shop(chara, me) {
  const mayor = get_chara_talk(13);
  const waiters = [
    get_chara_talk(27),
    get_chara_talk(59),
    get_chara_talk(64),
    get_chara_talk(71),
    get_chara_talk(74),
    get_chara_talk(86),
  ];
  const easter_egg = era.get('flag:이스터에그메커니즘');
  const say_by_waiter = (v) => get_random_entry(waiters).say_as_unknown(v);
  const say_by_waiter_and_wait = (v) =>
    get_random_entry(waiters).say_as_unknown_and_wait(v);
  let flag = true;
  let money = era.get('item:「은총」');
  const print_money_divider = () =>
    era.drawLine({
      content: `현재「은총」：${money.toLocaleString()}`,
    });
  while (flag) {
    await era.clear();
    this.page_header(chara);
    era.drawLine();
    era.print([
      me.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 깨끗한 거리에 서 있다.',
    ]);
    era.print('화창한 햇살 아래, 연인들끼리 거리를 오가고 있다.');
    era.drawLine();
    const buttons = [
      {
        c: '「미용실」',
        async h() {
          // 染发染毛
          // 人类改造成马娘
          await say_by_waiter_and_wait(
            '어서 오세요! 미용 서비스를 받으실 분은 누구신가요?',
          );
          const lines = era.getLineCount();
          let _flag = true,
            target = chara;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            const buttons = [];
            const height = era.get(`cflag:${target.id}:키`);
            const change_height = (new_height) => {
              era.set(`cflag:${target.id}:키`, new_height);
              era.set(
                `cflag:${target.id}:허리둘레`,
                (new_height * era.get(`cflag:${target.id}:허리둘레`)) / height,
              );
              era.set(
                `cflag:${target.id}:엉덩이둘레`,
                (new_height * era.get(`cflag:${target.id}:엉덩이둘레`)) / height,
              );
              if (target.sex_code === 1) {
                era.set(
                  `cflag:${target.id}:가슴둘레`,
                  (new_height * era.get(`cflag:${target.id}:가슴둘레`)) / height,
                );
              } else {
                era.set(
                  `cflag:${target.id}:가슴둘레`,
                  era.get(`cflag:${target.id}:가슴둘레`) -
                    era.get(`cflag:${target.id}:밑가슴둘레`) +
                    era.set(
                      `cflag:${target.id}:밑가슴둘레`,
                      (new_height * era.get(`cflag:${target.id}:밑가슴둘레`)) /
                        height,
                    ),
                );
              }
            };
            buttons.push(
              {
                c: `키 키우기（10「은총」，현재 ${height}cm）`,
                ...(height >= 229 ? { d: true, t: '더 이상 키울 수 없습니다' } : {}),
                h() {
                  money = era.add('item:「은총」', -10);
                  change_height(height + 1);
                },
              },
              {
                c: `키 줄이기（10「은총」，현재 ${height}cm）`,
                ...(height <= 135 ? { d: true, t: '더 이상 키를 줄일 수 없습니다' } : {}),
                h() {
                  money = era.add('item:「은총」', -10);
                  change_height(height - 1);
                },
              },
              undefined,
            );
            if (target.sex_code !== 1) {
              const delta =
                  era.get(`cflag:${target.id}:가슴둘레`) -
                  era.get(`cflag:${target.id}:밑가슴둘레`),
                cup = get_breast_cup(target.id);
              buttons.push({
                c: `가슴 키우기（5「은총」，현재 ${cup} ）`,
                ...(delta >= 22.5
                  ? { d: true, t: '[폭유] 이상으로 키울 수 없습니다' }
                  : {}),
                h() {
                  money = era.add('item:「은총」', -5);
                  era.add(`cflag:${target.id}:가슴둘레`, 1);
                },
              });
              buttons.push({
                c: `가슴 줄이기（5「은총」，현재 ${cup} ）`,
                ...(delta <= 5 ? { d: true, t: '이미 평평합니다' } : {}),
                h() {
                  money = era.add('item:「은총」', -5);
                  era.add(`cflag:${target.id}:가슴둘레`, -1);
                },
              });
              const breast_size = era.get(`talent:${target.id}:유두타입`);
              if (breast_size === 0) {
                buttons.push({
                  c: '유두 색소 침착（5「은총」）',
                  h() {
                    money = era.add('item:「은총」', -5);
                    era.add(`talent:${target.id}:유두타입`, 1);
                  },
                });
              } else {
                buttons.push({
                  c: '유두 색소 침착 제거（5「은총」）',
                  h() {
                    money = era.add('item:「은총」', -5);
                    era.add(`talent:${target.id}:유두타입`, -1);
                  },
                });
              }
              const milk_status = era.get(`talent:${target.id}:모유분비`);
              if (milk_status === 3) {
                buttons.push({
                  c: '[모유체질] 제거（30「은총」）',
                  async h() {
                    const inmon = CharaInmon.get(target.id);
                    if (inmon.slave === slavery_enum.milk) {
                      say_by_waiter(
                        '이 작업은 당신이 한 사소한 개조도 없앨 텐데, 괜찮으신가요?',
                      );
                      if (await select_yes_or_no([])) {
                        inmon.slave = 0;
                      } else {
                        return;
                      }
                    }
                    money = era.add('item:「은총」', -30);
                    era.set(`talent:${target.id}:모유분비`, 0);
                  },
                });
              } else if (milk_status === 0) {
                buttons.push({
                  c: '[모유체질] 획득（30「은총」）',
                  h() {
                    money = era.add('item:「은총」', -30);
                    era.set(`talent:${target.id}:모유분비`, 3);
                  },
                });
              }
              if (era.get(`talent:${target.id}:처녀`) === vp_status_enum.no) {
                buttons.push({
                  c: '처녀 회복（20「은총」）',
                  h() {
                    money = era.add('item:「은총」', -20);
                    era.set(`talent:${target.id}:처녀`, vp_status_enum.reborn);
                  },
                });
              }
            }
            buttons.push(undefined);
            if (
              !era.get(`status:${target.id}:펄롱K`) &&
              !era.get(`status:${target.id}:펄롱P`)
            ) {
              const penis_size = era.get(`cflag:${target.id}:음경크기`),
                cur_desc = penis_desc[get_penis_size(target.id)];
              buttons.push(
                {
                  c: `${target.sex_code === 0 ? '후타나리화（15' : '음경 확대（10'}「은총」，현재 ${cur_desc || '여성'}）`,
                  ...(penis_size === 5
                    ? { d: true, t: '더 이상 확대할 수 없습니다' }
                    : {}),
                  h() {
                    money = era.add('item:「은총」', -10);
                    era.add(`cflag:${target.id}:음경크기`, 1);
                    if (target.sex_code === 0) {
                      money = era.add('item:「은총」', -5);
                      era.set(
                        `talent:${target.id}:조루`,
                        Math.max(
                          era.get(`talent:${target.id}:조루`),
                          era.get(`talent:${target.id}:음란한클리토리스`),
                        ),
                      );
                      era.set(`talent:${target.id}:음란한클리토리스`, 0);
                      era.set(`cflag:${target.id}:성별`, 10);
                      const inmon = CharaInmon.get(target.id);
                      for (let i = 1; i <= 3; ++i) {
                        if (inmon.on(plugin_enum[`cl_u${i}`])) {
                          inmon.set(plugin_enum[`cl_u${i}`], 0);
                          inmon.set(plugin_enum[`pe_u${i}`], 1);
                        }
                        if (inmon.on(plugin_enum[`cl_d${i}`])) {
                          inmon.set(plugin_enum[`cl_d${i}`], 0);
                          inmon.set(plugin_enum[`pe_d${i}`], 1);
                        }
                      }
                    }
                  },
                },
                {
                  c: `${target.sex_code === 10 && penis_size === 1 ? '여성화（15' : '음경 축소（10'}「은총」，현재 ${cur_desc || '여성'}）`,
                  ...((penis_size === 1 && target.sex_code === 1) ||
                  penis_size === 0
                    ? {
                        d: true,
                        t:
                          penis_size === 0
                            ? '원래 아무것도 없다'
                            : '더 이상 축소할 수 없다',
                      }
                    : {}),
                  h() {
                    money = era.add('item:「은총」', -10);
                    era.add(`cflag:${target.id}:음경크기`, -1);
                    if (target.sex_code === 10 && penis_size === 1) {
                      money = era.add('item:「은총」', -5);
                      era.set(
                        `talent:${target.id}:음란한클리토리스`,
                        Math.max(
                          era.get(`talent:${target.id}:조루`),
                          era.get(`talent:${target.id}:음란한클리토리스`),
                        ),
                      );
                      era.set(`talent:${target.id}:조루`, 0);
                      era.set(`cflag:${target.id}:성별`, 0);
                      era.set(`talent:${target.id}:흉기`, 0);
                      const inmon = CharaInmon.get(target.id);
                      for (let i = 1; i <= 3; ++i) {
                        if (inmon.on(plugin_enum[`pe_u${i}`])) {
                          inmon.set(plugin_enum[`pe_u${i}`], 0);
                          inmon.set(plugin_enum[`cl_u${i}`], 1);
                        }
                        if (inmon.on(plugin_enum[`pe_d${i}`])) {
                          inmon.set(plugin_enum[`pe_d${i}`], 0);
                          inmon.set(plugin_enum[`cl_d${i}`], 1);
                        }
                      }
                      if (inmon.on(plugin_enum.pe_up_0)) {
                        inmon.set(plugin_enum.pe_up_0, 0);
                      }
                      if (inmon.on(plugin_enum.pe_up_1)) {
                        inmon.set(plugin_enum.pe_up_1, 0);
                      }
                    }
                  },
                },
              );
            }
            const part = target.sex_code === 1 ? '음경' : '음핵',
              clitoris_size = era.get(`talent:${target.id}:음핵타입`);
            buttons.push(
              {
                c: `${part} 색소 침착 완화（5「은총」）`,
                ...(clitoris_size === 0
                  ? {
                      d: true,
                      t: `이미 분홍색인 ${part}`,
                    }
                  : {}),
                h() {
                  money = era.add('item:「은총」', -5);
                  era.add(`talent:${target.id}:음핵타입`, -1);
                },
              },
              {
                c: `${part} 색소 침착 심화（5「은총」）`,
                ...(clitoris_size === 2
                  ? {
                      d: true,
                      t: `이미 검은색인 ${part}`,
                    }
                  : {}),
                h() {
                  money = era.add('item:「은총」', -5);
                  era.add(`talent:${target.id}:음핵타입`, 1);
                },
              },
            );
            buttons.push(undefined);
            const custom_enabled = !check_chara_ero_image(target.id);
            if (custom_enabled) {
              const skin_status = era.get(`cflag:${target.id}:피부색`);
              buttons.push(
                {
                  c: `미백（5「은총」，现在是 ${skin_desc[skin_status + 1]}）`,
                  ...(skin_status === -1
                    ? {
                        d: true,
                        t: '피부를 더 하얗게 할 수 없습니다',
                      }
                    : {}),
                  h() {
                    money = era.add('item:「은총」', -5);
                    era.add(`cflag:${target.id}:피부색`, -1);
                  },
                },
                {
                  c: `태닝（5「은총」，现在是 ${skin_desc[skin_status + 1]}）`,
                  ...(skin_status === 2
                    ? {
                        d: true,
                        t: '피부색이 더 이상 어두워질 수 없습니다',
                      }
                    : {}),
                  h() {
                    money = era.add('item:「은총」', -5);
                    era.add(`cflag:${target.id}:피부색`, 1);
                  },
                },
                {
                  c: '염색',
                  async h() {
                    const curr_color = era.get(`cstr:${target.id}:머리색`);
                    say_by_waiter('어떤 색으로 염색하시겠습니까?');
                    era.printMultiColumns(
                      hair_color_names.map((e, i) => ({
                        accelerator: i + 1,
                        config: { color: get_hair_color(e), width: 6 },
                        content: e + (curr_color === e ? '（현재 머리색）' : ''),
                        type: 'button',
                      })),
                    );
                    const ret = await era.input();
                    era.set(
                      `cstr:${target.id}:머리색`,
                      hair_color_names[ret - 1],
                    );
                  },
                },
              );
            }
            buttons.push(undefined);
            if (era.get(`cflag:${target.id}:종족`) === 0) {
              buttons.push({
                c:
                  '변환: ' +
                  target.get_uma_sex_title() +
                  '（100「은총」，되돌릴 수 없음!）',
                h() {
                  money = era.add('item:「은총」', -100);
                  era.set(`cflag:${target.id}:종족`, 1);
                  era.set(
                    `cstr:${target.id}:털색`,
                    era.get(`cstr:${target.id}:털색`) ||
                      get_random_entry(body_color_names),
                  );
                  era.set(`cflag:${target.id}:재육성가능`, 1);
                  if (easter_egg === 179 || easter_egg === 621) {
                    era.set(`talent:${target.id}:얀데레`, 1);
                  }
                },
              });
            } else if (custom_enabled) {
              buttons.push({
                c: '털색 변화（1「은총」）',
                async h() {
                  const curr_color = era.get(`cstr:${target.id}:털색`);
                  say_by_waiter('어떤 색으로 염색할까요?');
                  era.printMultiColumns(
                    body_color_names.map((e, i) => ({
                      accelerator: i + 1,
                      config: { color: get_hair_color(e), width: 6 },
                      content: e + (curr_color === e ? '（현재 색）' : ''),
                      type: 'button',
                    })),
                  );
                  const ret = await era.input();
                  if (
                    curr_color !==
                    era.set(`cstr:${target.id}:털색`, body_color_names[ret - 1])
                  ) {
                    money = era.add('item:「은총」', -1);
                  }
                },
              });
            }

            const filtered_buttons = buttons.filter((e) => e !== undefined);
            filtered_buttons.forEach((e, i) => (e.a = i + 2));

            era.printButton(`서비스를 받는 대상 전환. 현재는: ${target.name}`, 1);
            era.printMultiColumns(
              buttons.map((e) =>
                e !== undefined
                  ? {
                      accelerator: e.a,
                      config: { disabled: e.d, title: e.t, width: 12 },
                      content: e.c,
                      type: 'button',
                    }
                  : { content: [], type: 'text' },
              ),
            );
            era.printButton('나가기', 99);
            const ret = await era.input();
            switch (ret) {
              case 1:
                target = target === chara ? me : chara;
                break;
              case 99:
                _flag = false;
                break;
              default:
                await filtered_buttons[ret - 2].h();
                await say_by_waiter_and_wait('네, 긴장 풀고 계세요. 금방 끝날 거예요~');
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('다음에 봐요~');
        },
      },
      {
        c: '「병원」',
        async h() {
          await say_by_waiter_and_wait(
            '여기는 메지로 시티 병원입니다! 두통, 감기, 허리 통증, 손 떨림, 가슴 통증, 다리 떨림, 발 저림 등 모든 증상을——',
          );
          await say_by_waiter_and_wait('……완치 보장하지는 않습니다……');
          await say_by_waiter_and_wait('농담이에요. 무엇을 도와드릴까요?');
          const lines = era.getLineCount();
          const life_marks = LifeEventMarks.get_marks(0);
          let _flag = true;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            era.printButton(
              `「파워 필」（${
                extra_base.stamina >= 1000
                  ? 'MAX'
                  : `${
                      extra_base.stamina / 10 + 10
                    }「은총」：추가 체력 상한 ${extra_base.stamina.toLocaleString()} → ${(
                      extra_base.stamina + 50
                    ).toLocaleString()}`
              }）`,
              1,
              { disabled: extra_base.stamina === 1000 },
            );
            era.printButton(
              `「멘탈 크림」（${
                extra_base.time >= 1000
                  ? 'MAX'
                  : `${
                      extra_base.time / 10 + 10
                    }「은총」：추가 기력 상한 ${extra_base.time.toLocaleString()} → ${(
                      extra_base.time + 50
                    ).toLocaleString()}`
              }）`,
              2,
              { disabled: extra_base.time === 1000 },
            );
            if (
              life_marks.unexpected_pregnant ===
                unexpected_pregnant_enum.mother_sleep &&
              !life_marks.report
            ) {
              era.printButton('초음파 검사（-10「은총」）', 3);
            }
            era.printButton('나가기', 99);
            switch (await era.input()) {
              case 1:
                await say_by_waiter_and_wait('네，「파워 필」하나~');
                await say_by_waiter_and_wait('1주 뒤에 효과가 나타납니다~');
                money = era.add(
                  'item:「은총」',
                  -(extra_base.stamina / 10 + 10),
                );
                extra_base.stamina += 50;
                break;
              case 2:
                await say_by_waiter_and_wait('네，「멘탈 크림」하나~');
                await say_by_waiter_and_wait('1주 뒤에 효과가 나타납니다~');
                money = era.add('item:「은총」', -(extra_base.time / 10 + 10));
                extra_base.time += 50;
                break;
              case 3:
                await say_by_waiter_and_wait(
                  '축하합니다. 아이의 성장 상태를 한번 보죠...',
                );
                await era.printAndWait(
                  [
                    '＜기기 화면에 아이의 영상이 나타났다. ',
                    me.get_colored_name(),
                    '은(는) 왠지 모르게 흑백 화면 속에서',
                    get_chara_talk(life_marks.sperm).get_colored_name(),
                    '의 얼굴이 보였다＞',
                  ],
                  { isParagraph: true },
                );
                await say_by_waiter_and_wait('정말 귀엽네요! 누군가를 닮은 것 같지 않나요?');
                life_marks.report = -1;
                money = era.add('item:「은총」', 10);
                break;
              default:
                _flag = false;
            }
            _flag &&= money > 0;
          }
        },
      },
      {
        c: '「마사지 샵」',
        async h() {
          const max_limit = 5 + (chara.sex_code !== 1);
          let _flag = true;
          await say_by_waiter_and_wait(
            '여긴 에센셜 오일 마사지 서비스를 제공합니다! 좀 쉬어 가실래요?',
          );
          const lines = era.getLineCount();
          let target = chara;
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            const part_limit = era.get(`talent:${chara.id}:조교도`);
            print_money_divider();
            let talent_list = ['방탕한입술', '신의손', '신의발', '마성의엉덩이'];
            if (target.sex_code !== 1) {
              talent_list.push('요염한유방', '명기');
            }
            if (target.sex_code > 0) {
              talent_list.push('흉기');
            }
            talent_list = talent_list.filter(
              (e) => era.get(`talent:${target.id}:${e}`) === 0,
            );
            era.printButton(`서비스를 받는 대상 전환. 현재는: ${target.name}`, 1);
            era.printButton(
              `특정 부위의 성적 능력을 강화（60「은총」）`,
              2,
              talent_list.length === 0
                ? {
                    disabled: true,
                    title: '성적 능력을 향상시킬 수 있는 부위가 더 이상 없습니다',
                  }
                : {},
            );
            if (target.id > 0) {
              era.printButton(
                `${chara.name}의 최고 민감도로 조교할 수 있는 부위를 늘린다（${
                  part_limit >= max_limit
                    ? 'MAX'
                    : `25「은총」：${part_limit} 부위 → ${part_limit + 1} 부위`
                }）`,
                3,
                {
                  disabled: part_limit >= max_limit,
                },
              );
            }
            era.printButton('나가기', 99);
            const p = get_random_entry(talent_list);
            switch (await era.input()) {
              case 1:
                target = target === chara ? me : chara;
                break;
              case 2:
                money = era.add('item:「은총」', -60);
                await era.printAndWait([
                  target.get_colored_name(),
                  '은(는) ',
                  { color: buff_colors[2], content: `[${p}]` },
                  ' 을(를) 획득했다!',
                ]);
                era.set(`talent:${target.id}:${p}`, 1);
                break;
              case 3:
                money = era.add('item:「은총」', -25);
                await era.printAndWait([
                  chara.get_colored_name(),
                  '은(는) 마사지를 받고 나니 몸이 더 부드러워진 것 같다...',
                ]);
                era.add(`talent:${chara.id}:조교도`, 1);
                break;
              default:
                _flag = false;
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('좋은 여행 되세요~');
        },
      },
      {
        c: '「도서관」',
        async h() {
          let _flag = true;
          await say_by_waiter_and_wait(
            '메지로 시티 대도서관에 오신 것을 환영합니다! 어떤 책을 빌리시겠습니까?',
          );
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            print_money_divider();
            // TALENTNAME:57 = 강철의의지
            const iron_mind = era.get('talent:0:57') > 0;
            const chara_im = era.get(`talent:${chara.id}:57`);
            era.printButton(
              `《키류인 가문 트레이너 백서》（10「은총」→ ${me.name} [강철의의지] 습득 ）`,
              1,
              { disabled: iron_mind },
            );
            era.printButton(
              `《나와 나의 우마무스메 아내》（5「은총」→ ${me.name} [강철의의지] 상실 ）`,
              2,
              { disabled: !iron_mind },
            );
            era.printButton(
              `《성스러운 한 걸음 반》（5「은총」→ ${chara.name} [강철의의지] 습득）`,
              3,
              { disabled: chara_im },
            );
            era.printButton(
              `《둔한 남자도 단번에 사로잡는다! 연애의 비결》（10「은총」→ ${chara.name} [강철의의지] 상실）`,
              4,
              { disabled: !chara_im },
            );
            if (!extra_base.skill && money >= 36) {
              era.printButton(
                '《성기술 향상 입문서——색욕의 고리 출판사 출판》（66「은총」）',
                5,
              );
            }
            era.printButton('나가기', 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else if (ret === 5) {
              await era.printAndWait('……뭘 읽을까?');
              // ITEMNAME:110 = 「은총」
              money = era.add('item:110', -66);
              extra_base.skill = 1;
            } else {
              // ITEMNAME:110 = 「은총」
              money = era.add('item:110', -5 - (ret === 1 || ret === 4) * 5);
              const { t: target, s: im_status } =
                ret <= 2 ? { t: me, s: iron_mind } : { t: chara, s: chara_im };
              if (im_status) {
                era.set(`talent:${target.id}:57`, 0);
              } else {
                era.set(`talent:${target.id}:57`, 1);
              }
              await era.printAndWait([
                target.get_colored_name(),
                im_status ? ' 상실: ' : ' 획득: ',
                { content: '[강철의의지]', color: mark_colors['강철'] },
                '!',
              ]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('다음에 또 방문해 주세요~');
        },
      },
      {
        c: '「경품 가게」',
        async h() {
          say_by_waiter('메지로 시티에 오신 것을 환영합니다! 여기서 행운을 시험해 보시겠습니까?');
          print_money_divider();
          if (await select_yes_or_no('2「은총」을 사용해 추첨하겠습니까?')) {
            const dice = Math.random();
            if (dice < 0.01) {
              await say_by_waiter_and_wait('대~박~이~ 나왔~어요~');
              await say_by_waiter_and_wait('10배로 드립니다!');
              await era.printAndWait('「은총」20 획득!');
              money = era.add('item:「은총」', 20);
            } else {
              money = era.add('item:「은총」', -2);
              const items = [];
              if (dice < 2 / (money + 10)) {
                [
                  26,
                  ...new Array(7).fill(0).map((_, i) => 60 + i),
                  ...new Array(4).fill(0).map((_, i) => 70 + i),
                  ...new Array(7).fill(0).map((_, i) => 76 + i),
                  85,
                ].forEach((e) => {
                  if (era.get(`item:${e}`) < 1) {
                    items.push(e);
                  }
                });
                [74, 75].forEach((e) => {
                  if (era.get(`item:${e}`) < 2) {
                    items.push(e);
                  }
                });
              }
              if (items.length === 0) {
                new Array(8).fill(0).forEach((_, i) => items.push(i));
                new Array(11).fill(0).map((_, i) => items.push(i + 10));
                new Array(3).fill(0).map((_, i) => items.push(i + 27));
                new Array(11).fill(0).map((_, i) => items.push(i + 31));
                items.push(25, 43, 84, 101);
              }
              const item = get_random_entry(items);
              era.add(`item:${item}`, 1);
              await era.printAndWait([
                '아이템【',
                era.get(`itemname:${item}`).toUpperCase(),
                '】획득!',
              ]);
            }
          }
        },
      },
      {
        c: '「신문사」',
        async h() {
          const menu = [1, 5, 10, 50];
          let _flag = true;
          await say_by_waiter_and_wait('어서오세요!');
          await say_by_waiter_and_wait(
            '메지로 시티 신문사는 귀하의 명예를 회복하고 명성을 널리 알리는 데 도움을 드릴 수 있습니다',
          );
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            say_by_waiter('무엇을 도와드릴까요?');
            print_money_divider();
            era.printMultiColumns(
              menu.map((e, i) => ({
                accelerator: i + 1,
                content: `${e}「은총」→ ${e}～${e * 4} 명성`,
                type: 'button',
                config: { width: 12 },
              })),
            );
            era.printButton('离开', 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              const delta = get_random_value(menu[ret - 1], menu[ret - 1] * 4);
              await say_by_waiter_and_wait(
                `네，${delta} 명성, 바로 처리해 드리겠습니다~`,
              );
              era.add('flag:현재명성', delta);
              money = era.add('item:「은총」', -menu[ret - 1]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('이용해 주셔서 감사합니다!');
        },
      },
      {
        c: '「은행」',
        async h() {
          const menu = [1, 5, 10, 50];
          let _flag = true;
          await say_by_waiter_and_wait('어서 오세요~');
          const lines = era.getLineCount();
          while (_flag) {
            await era.clear(era.getLineCount() - lines);
            say_by_waiter('인출 업무를 처리하시겠습니까?');
            print_money_divider();
            era.printMultiColumns(
              menu.map((e, i) => ({
                accelerator: i + 1,
                content: `${e}「은총」→ ${e}～${e * 10} 우마코인`,
                type: 'button',
                config: { width: 12 },
              })),
            );
            era.printButton('나가기', 99);
            const ret = await era.input();
            if (ret === 99) {
              _flag = false;
            } else {
              const got = menu[ret - 1] * get_random_value(1, 10);
              await say_by_waiter_and_wait(
                `네, 총 ${got.toLocaleString()} 우마코인，바로 인출해 드리겠습니다~`,
              );
              era.add('flag:현재코인', got);
              money = era.add('item:「은총」', -menu[ret - 1]);
            }
            _flag &&= money > 0;
          }
          await say_by_waiter_and_wait('안녕히 가세요~');
        },
      },
      {
        c: '「시청」',
        d: true,
        async h() {
          await mayor.say_and_wait('메지로 시티에 오신걸 환영합니다.');
          await mayor.say_and_wait('무엇을 도와드릴까요?');
          if (await select_yes_or_no([], '제발 살려주세요……', '괜찮아요')) {
            await mayor.say_and_wait('그렇군요…… 정말 괜찮으신가요?');
            if (
              await select_yes_or_no(
                [
                  {
                    color: 'red',
                    content: '（이 작업은 되돌릴 수 없으며, 메지로 시티의 스타일을 영구적으로 변경합니다!）',
                  },
                ],
                '확인',
                '취소',
              )
            ) {
              await mayor.say_and_wait('알겠습니다.');
              await mayor.say_and_wait(
                '다음에 방문하실 때, 메지로 시티는 원하시는 모습으로 변해 있을 것입니다.',
              );
              await mayor.say_and_wait('떠나기.');
              era.set('flag:메지로성변수', {});
              era.set('flag:메지로성스타일', 0);
              era.set('item:「은총」', 0);
            } else {
              await mayor.say_and_wait('귀하와 일행분들이 메지로 시티에서 즐거운 시간 보내시길 바랍니다~');
            }
          } else {
            await mayor.say_and_wait('귀하와 일행분들이 메지로 시티에서 즐거운 시간 보내시길 바랍니다~');
          }
        },
        t: '메지로 시티 스타일 변경 기능. 현재 미실장',
      },
      {
        a: 999,
        c: '나가기',
        async h() {
          flag = false;
        },
      },
    ];
    era.printMultiColumns(
      buttons.map((e, i) => ({
        accelerator: e.a || 100 + i,
        config: { disabled: e.d, title: e.t, width: e.a === 999 ? 24 : 6 },
        content: e.c,
        type: 'button',
      })),
    );
    const ret = await era.input();
    era.drawLine();
    await (buttons.find((e) => e.a === ret) || buttons[ret - 100]).h();
    if (money <= 0) {
      era.set('item:「은총」', 0);
      era.set('item:「빚」', -money);
      era.drawLine();
      await era.printAndWait([
        me.get_couple_title(),
        '이 가게를 나서자, 눈앞에는 거리가 아닌 교외의 풍경이 펼쳐져 있었다',
      ]);
      await era.printAndWait('뒤를 돌아보니, 메지로 시티는 다시 안개에 휩싸여 있었다……');
      flag = false;
    }
  }
}

module.exports = cum_shop;
