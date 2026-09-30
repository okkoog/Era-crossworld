const era = require('#/era-electron');

const sys_change_hair = require('#/system/chara/sys-change-hair');
const sys_personal_achievement = require('#/system/global/sys-calc-personal-achievement');

const CharaTalk = require('#/utils/chara-talk');
const {
  gacha,
  get_random_entry,
  join_to_string,
} = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const CharaTitles = require('#/data/chara-titles');
const { buff_colors, sex_colors, skin_colors } = require('#/data/color-const');
const {
  chara_desc,
  chara_full_desc,
  human_sex_title,
  penis_colors,
  penis_desc,
  skin_desc,
} = require('#/data/ero/status-const');
const {
  get_breast_cup,
  get_filtered_talents,
  get_hair_color,
  get_talent,
  get_xp,
} = require('#/data/info-generator');
const { back_hairs, front_hairs, top_hairs } = require('#/data/other-const');
const { attr_names } = require('#/data/train-const');
const {
  get_bust_size,
  get_hip_size,
  get_waist_size,
} = require('#/system/ero/sys-calc-ero-status');

const body_hair_type = ['반들반들', '보통', '빨리 자람'];
const characteristic_type = [
  '머리색',
  '바보털',
  '앞머리',
  '뒷머리',
  '피부색',
  '겨드랑이털',
  '음모',
  '성기색상',
];
const hair_color_names = [
  '검정색',
  '진한 갈색',
  '주황빛 갈색',
  '붉은 갈색',
  '흰색',
  '금색',
  '연한 갈색',
  '분홍색',
  '푸른색',
];
const taiwu_talents = [
  '위기일발',
  '물아일체',
  '절차탁마',
  '고진감래',
  '명경지수',
];
const taiwu_talent_desc = [
  '위기일발, 절체절명의 순간 당신의 스피드는 타의 추종을 불허합니다.',
  '물아일체, 자연과 하나 된 듯한 당신의 스태미나는 타의 추종을 불허합니다.',
  '절차탁마, 뼈를 깎는 단련으로 얻은 당신의 파워는 타의 추종을 불허합니다.',
  '고진감래, 매서운 추위를 견뎌낸 당신의 근성은 타의 추종을 불허합니다.',
  '명경지수, 고요한 마음으로 진리를 깨닫는 당신의 지능은 타의 추종을 불허합니다.'
];
const uma_hairs = ['어두운 갈색', '밤색', '갈색', '흑갈색', '회색', '짙은 밤색', '검은색'];

/** @type {(function(number):{color:string,content:string}|string)[]} */
const hair_content_cb = [
  (p) => {
    const hair = hair_color_names[p];
    return {
      color: get_hair_color(hair),
      content: hair,
    };
  },
  (p) => top_hairs[p],
  (p) => front_hairs[p],
  (p) => back_hairs[p],
  (p) => ({
    color: skin_colors[p + 1],
    content: skin_desc[p + 1],
  }),
  (p) => body_hair_type[p],
  (p) => body_hair_type[p],
  (p) => {
    return { color: sex_colors[p], content: penis_colors[p] };
  },
];
const hair_length_arr = [
  hair_color_names.length,
  top_hairs.length,
  front_hairs.length,
  back_hairs.length,
  skin_desc.length,
  body_hair_type.length,
  body_hair_type.length,
  penis_colors.length,
];

function set_bust_size(size) {
  switch (size) {
    case 1:
      era.set('cflag:0:가슴둘레', era.get('cflag:0:밑가슴둘레') + 5);
      break;
    case 2:
      era.set('cflag:0:가슴둘레', era.get('cflag:0:밑가슴둘레') + 10);
      break;
    case 3:
      era.set('cflag:0:가슴둘레', era.get('cflag:0:밑가슴둘레') + 15);
      break;
    case 4:
      era.set('cflag:0:가슴둘레', era.get('cflag:0:밑가슴둘레') + 18);
      break;
    case 5:
      era.set('cflag:0:가슴둘레', era.get('cflag:0:밑가슴둘레') + 23);
  }
}

function set_height(height) {
  era.set('cflag:0:키', height);
  if (era.get('cflag:0:성별') === 1) {
    era.set('cflag:0:가슴둘레', height * 0.48);
    era.set('cflag:0:밑가슴둘레', 200);
    era.set('cflag:0:허리둘레', height * 0.47);
    era.set('cflag:0:엉덩이둘레', height * 0.51);
  } else {
    era.set('cflag:0:밑가슴둘레', height * 0.51 - 15);
    era.set('cflag:0:허리둘레', height * 0.34);
    era.set('cflag:0:엉덩이둘레', height * 0.542);
  }
}

function random_chara() {
  switch (era.get('flag:이스터에그메커니즘')) {
    case 3:
      era.set('callname:0:-2', '천마');
      break;
    case 179:
      era.set('callname:0:-2', '모르모트 군');
      break;
    case 621:
      era.set('callname:0:-2', '까마귀');
      break;
    default:
      era.set('callname:0:-2', '당신');
  }
  era.set('cstr:0:머리색', get_random_entry(hair_color_names));
  era.set('cstr:0:바보털', top_hairs[get_random_value(1, 5)] || '');
  era.set('cstr:0:앞머리', get_random_entry(front_hairs));
  era.set('cstr:0:뒷머리', get_random_entry(back_hairs));
  era.set('cflag:0:피부색', get_random_value(-1, 2));
  era.set('cflag:0:겨드랑이털', era.set('talent:0:겨드랑이털성장', get_random_value(0, 2)));
  era.set('cflag:0:음모', era.set('talent:0:음모성장', get_random_value(0, 2)));
  era.set('talent:0:음핵타입', get_random_value(0, 2));
  era.set('cflag:0:출생월', get_random_value(1, 12));
  era.set('cflag:0:출생일', get_random_value(1, 31));
  switch (era.get('cflag:0:출생월')) {
    case 4:
    case 6:
    case 9:
    case 11:
      era.set('cflag:0:출생일', Math.min(era.get('cflag:0:출생일'), 30));
      break;
    case 2:
      era.set('cflag:0:출생일', Math.min(era.get('cflag:0:출생일'), 28));
  }
  set_height(get_random_value(150, 200));
  const my_sex = era.get('cflag:0:성별');
  if (my_sex > 0) {
    era.set('cflag:0:음경크기', get_random_value(1, 5));
  }
  if (my_sex !== 1) {
    set_bust_size(get_random_value(1, 5));
  }
  era.set('cflag:0:성격', get_random_value(-3, 3));
  era.set('cstr:0:털색', get_random_entry(uma_hairs));
  attr_names.forEach((v) => era.set(`base:0:${v}`, 25));
  era.add(`base:0:${get_random_entry(attr_names)}`, 100);
}

function random_talent() {
  era.get('talentkeys').forEach((e) => {
    if (e >= 40 && e <= 66) {
      era.set(`talent:0:${e}`, 0);
    }
  });
  const chara_talents = new Array(18).fill(0).map((_, i) => i);
  chara_talents.forEach((tid) => era.set(`talent:0:${tid}`, 0));
  gacha(chara_talents, 5).forEach((e) =>
    era.set(`talent:0:${e}`, 2 * get_random_value(0, 1) - 1),
  );
  const my_sex = era.get('cflag:0:성별');
  era.set(`talent:0:${get_random_entry(get_filtered_talents(my_sex, 50))}`, 1);
  era.set(
    `talent:0:${get_random_entry(get_filtered_talents(my_sex, 60))}`,
    get_random_value(0, 1) || -4,
  );
  const temp = get_random_value(40, 47);
  era.set(
    `talent:0:${temp}`,
    1 - 2 * (temp === 43 ? get_random_value(0, 1) : 0),
  );
  if (my_sex === 1) {
    era.set('talent:0:유두타입', 0);
    era.set('talent:0:모유분비', 0);
  } else {
    era.set('talent:0:유두타입', get_random_value(0, 2));
    era.set('talent:0:모유분비', 3 * (Math.random() > 0.75));
  }
}

async function page_custom() {
  let buffer;
  let flag_custom = true;
  let temp;

  if (era.get('callname:0:-1').indexOf('豚鼠子') !== -1) {
    era.set('flag:캐릭터성별', 0);
    era.set('flag:이스터에그메커니즘', 179);
    era.set('flag:게임오버', 0);
    era.set('flag:명성부족교체', 1);
    era.set('flag:말딸신장', 0);
    era.set('flag:우마무스메초기호감도', 300);
    era.set('flag:우마무스메초기애정도', 50);
    era.set('flag:불충실패널티', 0);
    CharaTitles.get(0).push({ c: buff_colors[2], n: '로리콘', s: true });
  } else if (era.get('callname:0:-1').indexOf('渡鸦') !== -1) {
    era.set('flag:캐릭터성별', 99);
    era.set('flag:게임오버', 0);
    era.set('flag:이스터에그메커니즘', 621);
    era.set('flag:극단적행위제한', 3);
    era.set('flag:말딸신장', 2);
    era.set('flag:우마무스메초기호감도', 300);
    era.set('flag:우마무스메초기애정도', 50);
    era.set('flag:불충실패널티', 0);
    CharaTitles.get(0).push({ c: buff_colors[2], n: '완전패배', s: true });
  } else if (
    era.get('callname:0:-1').indexOf('天马闪光蹄') !== -1 &&
    sys_personal_achievement.get(3)
  ) {
    era.set('flag:캐릭터성별', 0);
    era.set('flag:이스터에그메커니즘', 3);
    CharaTitles.get(0).push({ c: buff_colors[2], n: '체육계 애호가', s: true });
  }
  while (flag_custom) {
    attr_names.forEach((v) => era.set(`base:0:${v}`, 25));
    await era.clear();
    era.printMultiColumns([
      { type: 'divider' },
      {
        content: '캐릭터 생성 시간! 캐릭터를 무작위로 생성하시겠습니까?',
        type: 'text',
      },
      { accelerator: 1, content: '무작위 생성', type: 'button' },
      { accelerator: 2, content: '기본값', type: 'button' },
      { accelerator: 3, content: '직접 설정', type: 'button' },
    ]);
    const first_button = await era.input();
    if (first_button === 1) {
      random_chara();
      random_talent();
    } else if (first_button === 2) {
      era.set('cstr:0:머리색', hair_color_names[0]);
      era.set('cstr:0:바보털', '');
      era.set('cstr:0:앞머리', front_hairs[0]);
      era.set('cstr:0:뒷머리', back_hairs[0]);
      era.set('cflag:0:피부색', 0);
      era.set('cflag:0:겨드랑이털', era.set('talent:0:겨드랑이털성장', 1));
      era.set('cflag:0:음모', era.set('talent:0:음모성장', 1));
      era.set('talent:0:음핵타입', 1);
      era.set('cflag:0:출생월', 1);
      era.set('cflag:0:출생일', 1);
      set_height(170);
      set_bust_size(3);
      era.set('cflag:0:밑가슴둘레', era.get('cflag:0:가슴둘레') - 15);
      if (era.get('cflag:0:성별')) {
        era.set('cflag:0:음경크기', 3);
      }
      era.set('cflag:0:성격', 0);
      era.set('cstr:0:털색', uma_hairs[0]);
      attr_names.forEach((v) => era.add(`base:0:${v}`, 20));
      if (era.get('flag:이스터에그메커니즘') === 179) {
        era.set('callname:0:-2', '豚鼠子');
      } else {
        era.set('callname:0:-2', '당신');
      }
      random_talent();
    } else if (first_button === 3) {
      let flag_hair = true,
        indexes = new Array(hair_content_cb.length).fill(0);
      while (flag_hair) {
        await era.clear();
        era.printInColRows(
          [
            { type: 'divider' },
            { content: '먼제 신체 세부사항입니다!', type: 'text' },
          ],
          ...indexes.map((e, i) => {
            return [
              {
                config: { width: 3 },
                content: `${characteristic_type[i]}：`,
                type: 'text',
              },
              {
                accelerator: i * 10,
                config: { width: 3 },
                content: '이전',
                type: 'button',
              },
              {
                config: { width: 3 },
                content: [hair_content_cb[i](e)],
                type: 'text',
              },
              {
                accelerator: i * 10 + 1,
                config: { width: 3 },
                content: '다음',
                type: 'button',
              },
            ];
          }),
          [{ accelerator: 99, content: '완료!', type: 'button' }],
        );
        temp = await era.input();
        if (temp === 99) {
          era.set('cstr:0:머리색', hair_color_names[indexes[0]]);
          era.set('cstr:0:바보털', !indexes[1] ? '' : top_hairs[indexes[1]]);
          era.set('cstr:0:앞머리', front_hairs[indexes[2]]);
          era.set('cstr:0:뒷머리', back_hairs[indexes[3]]);
          era.set('cflag:0:피부색', indexes[4]);
          era.set('cflag:0:겨드랑이털', era.set('talent:0:겨드랑이털성장', indexes[5]));
          era.set('cflag:0:음모', era.set('talent:0:음모성장', indexes[6]));
          era.set('talent:0:음핵타입', indexes[7]);
          flag_hair = false;
        } else {
          const i = Math.floor(temp / 10),
            j = temp % 10;
          if (i === 4) {
            if (j === 0) {
              indexes[i] += hair_length_arr[i];
            } else {
              indexes[i] += 2;
            }
            indexes[i] = (indexes[i] % hair_length_arr[i]) - 1;
          } else if (j === 0) {
            indexes[i] += hair_length_arr[i] - 1;
          } else {
            indexes[i] += 1;
          }
          indexes[i] %= hair_length_arr[i];
        }
      }

      let flag_height = true,
        height = 170,
        month = 1,
        day = 1;
      while (flag_height) {
        await era.clear();
        era.printMultiColumns([
          { type: 'divider' },
          {
            content:
              '다음은 키와 생일입니다!\nPS：개발자는 여러분이 2월 29일에 태어나지 않았다고 가정하고 있습니다.',
            type: 'text',
          },
          { config: { width: 2 }, content: '키 (cm)', type: 'text' },
          {
            accelerator: 10,
            config: { align: 'center', width: 3 },
            content: '-5',
            type: 'button',
          },
          {
            accelerator: 11,
            config: { align: 'center', width: 3 },
            content: '-1',
            type: 'button',
          },
          {
            config: { align: 'center', width: 3 },
            content: height.toString(),
            type: 'text',
          },
          {
            accelerator: 12,
            config: { align: 'center', width: 3 },
            content: '+1',
            type: 'button',
          },
          {
            accelerator: 13,
            config: { align: 'center', width: 3 },
            content: '+5',
            type: 'button',
          },
          { config: { width: 7 }, content: '', type: 'text' },
          { config: { width: 2 }, content: '태어난 달', type: 'text' },
          {
            accelerator: 20,
            config: { align: 'center', offset: 3, width: 3 },
            content: '이전달',
            type: 'button',
          },
          {
            config: { align: 'center', width: 3 },
            content: month.toString(),
            type: 'text',
          },
          {
            accelerator: 21,
            config: { align: 'center', width: 3 },
            content: '다음달',
            type: 'button',
          },
          { config: { width: 10 }, content: '', type: 'text' },
          { config: { width: 2 }, content: '태어난 일수', type: 'text' },
          {
            accelerator: 30,
            config: { align: 'center', width: 3 },
            content: '5일 전',
            type: 'button',
          },
          {
            accelerator: 31,
            config: { align: 'center', width: 3 },
            content: '전날',
            type: 'button',
          },
          {
            config: { align: 'center', width: 3 },
            content: day.toString(),
            type: 'text',
          },
          {
            accelerator: 32,
            config: { align: 'center', width: 3 },
            content: '다음날',
            type: 'button',
          },
          {
            accelerator: 33,
            config: { align: 'center', width: 3 },
            content: '5일 후',
            type: 'button',
          },
          { config: { width: 7 }, content: '', type: 'text' },
          { accelerator: 99, content: '완료!', type: 'button' },
        ]);
        temp = await era.input();
        switch (temp) {
          case 10:
            height -= 5;
            if (height < 150) {
              height = 200;
            }
            break;
          case 11:
            height--;
            if (height < 150) {
              height = 200;
            }
            break;
          case 12:
            height++;
            if (height > 200) {
              height = 150;
            }
            break;
          case 13:
            height += 5;
            if (height > 200) {
              height = 150;
            }
            break;
          case 20:
            month--;
            if (!month) {
              month = 12;
            }
            break;
          case 21:
            month++;
            if (month === 13) {
              month = 1;
            }
            break;
          case 30:
            day -= 5;
            break;
          case 31:
            day--;
            break;
          case 32:
            day++;
            break;
          case 33:
            day += 5;
            break;
          case 99:
            era.set('cflag:0:출생월', month);
            era.set('cflag:0:출생일', day);
            set_height(height);
            flag_height = false;
        }
        let date_limit = 31;
        switch (month) {
          case 4:
          case 6:
          case 9:
          case 11:
            date_limit = 30;
            break;
          case 2:
            date_limit = 28;
        }
        if (day <= 0) {
          day = date_limit;
        } else if (day === date_limit + 1) {
          day = 1;
        } else if (day > date_limit + 1) {
          day = date_limit;
        }
      }

      if (era.get('cflag:0:성별') - 1) {
        era.printMultiColumns([
          { type: 'divider' },
          {
            content: '여성의 상징의 크기를 어떻게 하실 건가요?\nPS: 크다고 해서 좋은 건 아닙니다!',
            type: 'text',
          },
          { accelerator: 1, content: '....저는 빨래판입니다', type: 'button' },
          { accelerator: 2, content: '빈유는 희소가치입니다', type: 'button' },
          { accelerator: 3, content: '평범한 게 좋아요', type: 'button' },
          { accelerator: 4, content: '좀 더 캈으면 좋겠어요!', type: 'button' },
          {
            accelerator: 5,
            content: '나는 모든 것을 압도할 테다(아님)',
            type: 'button',
          },
        ]);
        set_bust_size(await era.input());
      }

      if (era.get('cflag:0:성별')) {
        era.printMultiColumns([
          { type: 'divider' },
          {
            content: '당신의「범행 도구」의 크기는?\nPS: 크다고 해서 좋은 건 아닙니다!',
            type: 'text',
          },
          { accelerator: 1, content: '누구나 들어가는 사이즈!', type: 'button' },
          { accelerator: 2, content: '위 것보다 조금 더 큰 정도', type: 'button' },
          { accelerator: 3, content: '평범한 게 좋아요', type: 'button' },
          { accelerator: 4, content: '당연히 웅장해야죠!', type: 'button' },
          {
            accelerator: 5,
            content: '모두가 아프고 행복하게 만들 거야!',
            type: 'button',
          },
        ]);
        temp = await era.input();
        era.set('cflag:0:음경크기', temp);
      }

      buffer = [
        { type: 'divider' },
        {
          content: '이제 상상해 봅시다! 만약 여러분이 우마무스메가 된다면 어떤 성격이 될 것 같나요?',
          type: 'text',
        },
      ];
      chara_desc.forEach((e, i) =>
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 2 },
            content: e,
            type: 'button',
          },
          {
            config: { width: 22 },
            content: chara_full_desc[i],
            type: 'text',
          },
        ),
      );
      era.printMultiColumns(buffer);
      temp = await era.input();
      era.set('cflag:0:성격', temp - 4);

      buffer = [
        { type: 'divider' },
        {
          content: `음음. 당신은 ${
            chara_desc[era.get('cflag:0:성격') + 3]
          } 성격일 것 같나요...그럼 털 색은 어떨까요?`,
          type: 'text',
        },
      ];
      uma_hairs.forEach((e, i) => {
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 1 },
            content: '',
            type: 'button',
          },
          {
            config: { width: 23 },
            content: [
              {
                color: get_hair_color(e),
                content: `${e} 털`,
              },
            ],
            type: 'text',
          },
        );
      });
      era.printMultiColumns(buffer);
      temp = await era.input();
      era.set('cstr:0:털색', uma_hairs[temp - 1]);

      era.drawLine();
      era.print('이제 호칭을 지어볼 차례군요!');
      switch (era.get('flag:이스터에그메커니즘')) {
        case 3:
          era.drawLine();
          await era.printAndWait('오오, 말발굽을 정말 좋아하는 이름을 지으셨네요!');
          era.set('callname:0:-2', '天马');
          break;
        case 179:
          era.drawLine();
          await era.printAndWait('오오, 정말 로리콘스러운 이름을 지으셨네요!');
          era.set('callname:0:-2', '豚鼠子');
          break;
        case 621:
          era.drawLine();
          await era.printAndWait('오오, 정말 괴롭히고 싶어지는 이름을 지으셨네요!');
          era.set('callname:0:-2', '渡鸦');
          break;
        default:
          era.printInColRows([
            { content: '어떻게 불리길 원하시나요?', type: 'text' },
            { accelerator: 1, content: '당신', type: 'button' },
            { accelerator: 2, content: '주인공', type: 'button' },
            { accelerator: 3, content: '내가 정한다!', type: 'button' },
          ]);
          temp = await era.input();
          switch (temp) {
            case 1:
              era.set('callname:0:-2', '당신');
              break;
            case 2:
              era.set('callname:0:-2', '주인공');
              break;
            case 3:
              era.print('어떻게 불리길 원하시나요?(6자 이내)');
              temp = '';
              do {
                if (temp) {
                  await era.printAndWait('너무 길어요!');
                }
                temp = era.set('callname:0:-2', await era.input());
              } while (temp.length > 6);
          }
      }
      await era.printAndWait([
        CharaTalk.me.get_colored_actual_name(),
        ' 트레이너님, 저는 앞으로 당신을 ',
        CharaTalk.me.get_colored_name(),
        ' (이)라고 부를 겁니다!',
      ]);

      buffer = [
        { type: 'divider' },
        {
          content: '마지막으로, 개발자가 준비한 선물입니다!',
          type: 'text',
        },
      ];
      taiwu_talents.forEach((e, i) => {
        buffer.push(
          {
            accelerator: i + 1,
            config: { width: 3 },
            content: e,
            type: 'button',
          },
          {
            config: { width: 21 },
            content: taiwu_talent_desc[i],
            type: 'text',
          },
        );
      });

      era.printMultiColumns(buffer);
      temp = await era.input();
      era.add(`base:0:${temp + 4}`, 100);

      random_talent();
    }

    let flag_check = true;
    while (flag_check) {
      const hair_color = era.get('cstr:0:머리색'),
        uma_hair_color = era.get('cstr:0:털색');
      sys_change_hair(0);
      era.printMultiColumns([
        { type: 'divider' },
        { content: '한번 더 확인해 봅시다!', type: 'text' },
        {
          content: [CharaTalk.me.get_colored_actual_name(), ' 트레이너'],
          type: 'text',
        },
        {
          content: [
            '호칭:',
            CharaTalk.me.get_colored_name(),
            ' | 성별: ',
            human_sex_title[era.get('cflag:0:성별')],
            ` | 키: ${era.get('cflag:0:키')}cm`,
            era.get('cflag:0:성별') - 1
              ? ` | 쓰리사이즈: B${get_bust_size(0, true)} (${get_breast_cup(
                  0,
                )} Cup) · W${get_waist_size(0)} · H${get_hip_size(0)}`
              : '',
            { isBr: true },
            '헤어스타일: ',
            join_to_string(
              [
                era.get('cstr:0:바보털') ? `${era.get('cstr:0:바보털')} 바보털` : '',
                era.get('cstr:0:앞머리'),
                era.get('cstr:0:중간머리'),
                era.get('cstr:0:뒷머리'),
              ],
              '+',
            ),
            ' | 머리색:',
            {
              color: get_hair_color(hair_color),
              content: hair_color,
            },
            { isBr: true },
            '피부색:',
            {
              color: skin_colors[era.get('cflag:0:피부색') + 1],
              content: skin_desc[era.get('cflag:0:피부색') + 1],
            },
            ` | 겨드랑이털: ${body_hair_type[era.get('talent:0:겨드랑이털성장')]} | 음모：${
              body_hair_type[era.get('talent:0:음모성장')]
            } | 성기색상: `,
            {
              color: sex_colors[era.get('talent:0:음핵타입')],
              content: penis_colors[era.get('talent:0:음핵타입')],
            },
            era.get('cflag:0:성별')
              ? ` | 음경 길이: ${penis_desc[era.get('cflag:0:음경크기')]}`
              : '',
            { isBr: true },
            '만약 당신이 우마무스메라면 ',
            {
              color: get_hair_color(uma_hair_color),
              content: `${uma_hair_color} 털 `,
            },
            {
              content: chara_desc[era.get('cflag:0:성격') + 3],
              title: `${chara_desc[era.get('cflag:0:성격') + 3]}：${
                chara_full_desc[era.get('cflag:0:성격') + 3]
              }`,
            },
            ' 우마무스메',
            { isBr: true },
            '성격 특성: ',
            ...get_talent(0),
            { isBr: true },
            '기타 특성: ',
            ...get_xp(0),
            { isBr: true },
            '개발자의 선물: ',
            attr_names.filter((e) => era.get(`base:0:${e}`) >= 100)[0] ||
              '기본',
          ],
          type: 'text',
        },
        {
          accelerator: 1,
          config: { width: 4 },
          content: '이거야!',
          type: 'button',
        },
        {
          accelerator: 2,
          config: { width: 4 },
          content: '특성 랜덤',
          type: 'button',
        },
        {
          accelerator: 3,
          config: { width: 4 },
          content: '전부 무작위로!',
          type: 'button',
        },
        {
          accelerator: 4,
          config: { width: 4 },
          content: '다시 고를래!',
          type: 'button',
        },
        {
          accelerator: 99,
          config: { width: 4 },
          content: '더 이상 안할래...',
          type: 'button',
        },
      ]);
      temp = await era.input();
      switch (temp) {
        case 1:
          flag_check = false;
          flag_custom = false;
          break;
        case 2:
          random_talent();
          await era.clear();
          break;
        case 3:
          random_chara();
          random_talent();
          await era.clear();
          break;
        case 4:
          flag_check = false;
          break;
        case 99:
          return true;
      }
    }
  }
}

module.exports = page_custom;
