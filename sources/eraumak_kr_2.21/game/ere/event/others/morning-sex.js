/**
 * @file H이벤트 - 다음 날 아침 시리즈
 * @author 雞雞
 * @author 黑奴队长
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  set,
} = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const print_ero_page = require('#/page/page-ero');

const { get_custom_check } = require('#/event/check/check-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { penis_desc } = require('#/data/ero/status-const');
const { get_trainer_title } = require('#/data/info-generator');
const { location_enum } = require('#/data/locations');

/**
 * @author 雞雞
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function blowjob(chara, me) {
  await print_event_name('모닝 펠라', chara);
  await printAndWait([
    '아침에 눈을 뜨니 ',
    me.get_colored_name(),
    '의 하체에서 이상한 느낌이 들었다.',
  ]);
  await printAndWait([
    '눈을 뜨자 눈앞에 나타난 것은 알몸의 ',
    chara.get_colored_name(),
    '이(가) 입으로 ',
    me.get_colored_name(),
    '의 ',
    me.sex_code === 0 ? '음핵' : '음경',
    '을 빠는 음란한 모습이었다.',
  ]);
  const skill = get(`abl:${chara.id}:구강기술`);
  await printAndWait([
    chara.get_colored_name(),
    '이(가) ',
    get(`talent:${chara.id}:정액음용중독`) || get(`talent:${chara.id}:음란한입`)
      ? '탐욕스럽게'
      : skill > 2
        ? '능숙하게'
        : '서투르게',
    ' ',
    me.sex_code === 0 ? '클리토리스를 핥는' : '음경을 빨아들이는',
    ' 것을 보고 ',
    me.get_colored_name(),
    '도 참지 못하고 손으로 ',
    chara.get_colored_name(),
    '의 머리를 누르며 더 깊은 쾌감을 갈망하기 시작했다.',
  ]);
  begin_and_init_ero(0, chara.id);
  printButton('（젠장, 더는 못 참겠어!）', 1);
  printButton('（이제 갈 것 같아……!）', 2);
  if ((await input()) === 1) {
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.mouth),
      new EroParticipant(
        0,
        me.sex_code === 0 ? part_enum.clitoris : part_enum.penis,
      ),
      false,
    );
    await print_ero_page(chara.id, true);
    await end_ero_and_show_result(true);
  } else {
    await printAndWait([
      chara.get_colored_name(),
      '의 모닝 펠라에 ',
      me.get_colored_name(),
      '은(는) 순식간에 절정에 달했고, ',
      me.sex_code === 0 ? '애액' : '정액',
      '을 남김없이 ',
      chara.get_colored_name(),
      '의 앵두 같은 입안에 쏟아냈다.',
    ]);
    await chara.say_and_wait([
      '입안이 가득해졌여…… ',
      sys_get_callname(chara.id, 0),
      '의 맛으로 가득해……',
    ]);
    await printAndWait('욕망을 배설한 뒤, 새로운 하루가 시작되었다……');
    set_palam_to_max(chara.id, part_enum.mouth);
    set_palam_to_max(
      0,
      me.sex_code === 0 ? part_enum.clitoris : part_enum.penis,
    );
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.mouth),
      new EroParticipant(
        0,
        me.sex_code === 0 ? part_enum.clitoris : part_enum.penis,
      ),
      false,
    );
    await end_ero_and_show_result();
  }
}

/**
 * @author 黑奴队长
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function duty(chara, me) {
  await print_event_name('아침의 의무 이행', chara);
  await printAndWait([me.get_colored_name(), ' 은(는) 뺨을 때리는 온기에 눈을 떴다.']);
  if (chara.sex_code === 0) {
    set(`status:${chara.id}:펄롱${Math.random() < 0.5 ? 'K' : 'P'}`, 1);
    await printAndWait([
      '밤새도록 ',
      me.get_colored_name(),
      '을(를) 괴롭혔던 ',
      chara.get_colored_name(),
      '이(가) 다시 한번 약을 마시고, 친히 ',
      chara.sex,
      '의 고귀하고도 ',
      penis_desc[get_penis_size(chara.id)],
      '한 육봉을 알람 삼아 깨워 주었다.',
    ]);
  } else {
    await printAndWait([
      '밤새도록 ',
      me.get_colored_name(),
      '을(를) 괴롭혔던 ',
      chara.get_colored_name(),
      '이(가) 다시 한번 친히 ',
      chara.sex,
      '의 고귀하고 ',
      penis_desc[get_penis_size(chara.id)],
      '한 육봉을 알람으로 삼았다.',
    ]);
  }
  await printAndWait([
    '——그것은 ',
    me.get_colored_name(),
    '에게 ',
    me.sex,
    '로서 아직 다하지 못한 의무가 있음을 상기시켰다. 아침부터 밤까지, 끝없이 반복되는 굴레다.',
  ]);
  printButton('순종적으로 물기', 1);
  printButton('혐오하며 고개를 돌리기', 2);
  begin_and_init_ero(0, chara.id);
  set('tflag:주도권', chara.id);
  if ((await input()) === 1) {
    await printAndWait([
      '사실 수고를 들일 필요도 없었다. ',
      me.get_colored_name(),
      '이(가) 입술을 살짝 벌리자마자, 그 육봉이 기다렸다는 듯이 안으로 밀려 들어왔다.',
    ]);
    await printAndWait([
      chara.get_colored_name(),
      '의 멋대로 휘두르는 쾌락 속에서, ',
      me.get_colored_name(),
      '은(는) 온순하게 혀와 입술로 봉사했다.',
    ]);
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.penis),
      new EroParticipant(0, part_enum.mouth),
      false,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(chara.id, part_enum.penis),
      false,
    );
    await printAndWait([
      get_trainer_title(),
      ' ',
      me.get_colored_actual_name(),
      ', 오늘도 자신의 본분을 뼈저리게 새겼다……',
    ]);
  } else {
    await printAndWait([
      '비록 이 지경까지 떨어졌을지언정, ',
      me.get_colored_name(),
      '에게도 자존심, 혹은 최소한의 반항심은 남아 있었다——',
    ]);
    await printAndWait([
      me.get_colored_name(),
      '이(가) 살짝 고개를 돌려 거부 의사를 표시하려던 찰나, 이미 인내심을 잃은 주인 ',
      chara.get_colored_name(),
      '의 손바닥이 ',
      me.get_colored_name(),
      '의 뺨을 세차게 내리쳤다. 지금 처지가 어떤 상황인지 다시금 일깨워 주려는 듯이.',
    ]);
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.hit),
      new EroParticipant(0, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(chara.id, part_enum.hit),
      new EroParticipant(0, part_enum.mouth, -0.5),
      false,
    );
    await printAndWait([
      '그 후, ',
      chara.get_colored_name(),
      '은(는) 더 이상 ',
      me.get_colored_name(),
      '의 협조 따위는 바라지도 않는다는 듯, 제멋대로 이 아침의 뷔페를 즐기기 시작했다.',
    ]);
    await printAndWait([
      get_trainer_title(),
      ' ',
      me.get_colored_actual_name(),
      ', 오늘도 자신의 의무를 강제로 주입당하며……',
    ]);
    set('tflag:강간', chara.id);
  }
  await print_ero_page(chara.id, true);
  await end_ero_and_show_result();
}

/**
 * @author 雞雞
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 */
async function naked_apron(chara, me) {
  await print_event_name('아침의 알몸 앞치마', chara);
  await printAndWait([
    '아침에 눈을 뜨니, ',
    chara.get_colored_name(),
    '은(는) 이미 침대 위에 없었다.',
  ]);
  await printAndWait([
    '세수를 하고 부엌으로 가 보니 ',
    chara.sex,
    '의 실루엣이 보였다. 아침 식사를 준비하고 있는 것 같았지만……',
  ]);
  await printAndWait([
    '실오라기 하나 걸치지 않은 알몸에 앞치마만 두르고 정성껏 요리하는 ',
    chara.get_colored_name(),
    '의, 귀여운 엉덩이를 살랑살랑 흔들며 요리하는 모습은 그야말로——',
  ]);
  printButton('（제길, 더는 못 참겠어!）', 1);
  printButton('（소수를 세며 진정하자……）', 2);
  if ((await input()) === 1) {
    begin_and_init_ero(0, chara.id);
    await print_ero_page(chara.id, true);
    await end_ero_and_show_result();
  } else {
    await printAndWait([
      me.get_colored_name(),
      '은(는) 충동을 억누르고, 이성적으로 ',
      chara.get_colored_name(),
      '에게 아침 인사를 건넸다.',
    ]);
  }
}

async function morning_sex() {
  const cid = get('flag:잠자리파트너');
  if (
    cid > 0 &&
    !sys_check_remote(cid) &&
    get('flag:현재위치') !== location_enum.basement &&
    get(`mark:${cid}:반발`) === 0 &&
    get(`mark:${cid}:수치`) === 0
  ) {
    const buffer = [],
      love = get(`love:${cid}`);
    if (get('flag:징벌강도') >= 2) {
      buffer.push(duty);
    } else if (love >= 75 || get(`mark:${cid}:쾌락`) >= 1) {
      if (get_custom_check(cid).is_want_make_love()) {
        buffer.push(blowjob);
      }
      if (Math.random() < 0.5) {
        buffer.push(naked_apron);
      }
    }
    const handler = get_random_entry(buffer);
    if (handler) {
      const my_cache = { s: get('base:0:체력'), t: get('base:0:기력') },
        chara_cache = {
          s: get(`base:${cid}:체력`),
          t: get(`base:${cid}:기력`),
        };
      await handler(get_chara_talk(cid), get_chara_talk(0));
      set(`status:0:숙면`, 0);
      set('base:0:체력', my_cache.s);
      set('base:0:기력', my_cache.t);
      set(`status:${cid}:숙면`, 0);
      set(`base:${cid}:체력`, chara_cache.s);
      set(`base:${cid}:기력`, chara_cache.t);
    }
  }
}

module.exports = morning_sex;