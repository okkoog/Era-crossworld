/**
 * @file 系列事件 - 奇怪的一天
 * @author 念来过倒要你
 */
const {
  add,
  clear,
  drawLine,
  get,
  getLineCount,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  waitAnyKey,
} = require('#/era-electron');

const sys_check_npc_working = require('#/system/chara/sys-check-npc-working');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const MyPrivacyEvents = require('#/event/edu/edu-events-0/privacy');
const { add_event } = require('#/event/queue');
const add_jewel_reward = require('#/event/snippets/add-jewel-reward');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends MyPrivacyEvents {
  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async strange_day(me, _me, _call, hook, _extra, event_object) {
    const tachyon = get_chara_talk(32),
      target =
        get('cflag:32:모집상태') === recruit_flags.yes
          ? tachyon
          : get_chara_talk(
              get_random_entry(
                sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
                  (e) => e > 0 && e !== 32 && get(`cflag:${e}:성장단계`) >= 2,
                ),
              ),
            );
    await print_event_name('웃긴 날 (이상한 날）', me);
    await printAndWait([
      '아침, ',
      me.get_colored_name(),
      '은(는) 뭔가 좀 이싱하다는 느낌이 들었지만 그래도 행복한 하루를 맞이했다. ',
    ]);
    await me.say_and_wait('(ง •̀_•́)ง');
    await printAndWait([
      me.get_colored_name(),
      ' 은(는) 별다른 생각 없이 세수를 마치고 집을 나섰다.',
    ]);
    println();
    if (sys_check_npc_working(301)) {
      const tokino = get_chara_talk(301);
      await tokino.say_and_wait('Y(^_^)Y');
      await printAndWait([tokino.sex, '는 여전히 학원 정문에서 모든 사람을 반기고 있다.']);
      println();
    }
    await me.say_and_wait('……?', true);
    await me.say_and_wait('눈_눈');
    await printAndWait([
      me.get_colored_name(),
      '은(는) 뭔가 이상한 기분이 들었지만 뭐라 표현할 수가 없었다.',
    ]);
    println();
    if (target.id !== 58) {
      const dotou = get_chara_talk(58);
      await dotou.say_and_wait('(๑•́ωก̀๑)');
      await printAndWait([dotou.sex, '는 왜 또 울고 있는 걸까?']);
      println();
    }
    if (target.id !== 24) {
      await get_chara_talk(24).say_and_wait('(～0～)');
      await printAndWait('이 녀석 또 밤을 세웠나 보군.');
      println();
    }
    if (target.id !== 20) {
      await get_chara_talk(20).say_and_wait('<(*ΦωΦ*)>');
      await printAndWait('...이게 다 무슨 표정이지?');
      println();
    }
    await me.say_and_wait('……!', true);
    await me.say_and_wait('(#ﾟДﾟ)');
    await printAndWait([
      me.get_colored_name(),
      '은(는) 드디어 눈치챘다. 오는 내내 말 한 마디도 듣지 못했지만 이상하게도 이모티콘들이 머리에 떠오른다.',
    ]);
    await me.say_and_wait('……', true);
    await me.say_and_wait('(#`皿´)');
    println();
    if (target.id !== 32) {
      await printAndWait('머릿속에 항상 실험복을 입고 있는 어떤 악덕 상인이 떠오른다.');
      await me.say_and_wait('(‡▼益▼)');
      await printAndWait([
        '또 ',
        tachyon.sex,
        '의 실험인가. ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '를 찾으러 떠날 계획이다.',
      ]);
      println();
      await target.say_and_wait('(｢･ω･)｢嘿');
      printButton('「(｢･ω･)｢嘿」', 1);
      printButton('「ヾ(＾。^*)」', 2);
      await input();
      await target.say_and_wait('( •᷄ὤ•᷅)?');
      await printAndWait([
        '아무래도 ',
        me.get_colored_name(),
        '이(가) 뭘 하는지 이해하지 못하는 듯 하다',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '은(는) ',
        target.get_colored_name(),
        '에게 손을 내밀었다.',
      ]);
      await target.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
      printButton(`${target.sex}에게 현재 상황을 설명한다.`, 1);
      await input();
      await me.say_and_wait('(´ﾟωﾟ｀)');
      await me.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
      await me.say_and_wait('₍₍◞( •௰• )◟₎₎');
      await printAndWait('한동한 신나게 춤을 췄다.');
      await me.say_and_wait('╮（╯＿╰）╭');
      println();
      await target.say_and_wait('【•】_【•】');
      await target.say_and_wait('(ノ=Д=)ノ┻━┻');
      println();
      await printAndWait([
        '한참이 지나 ',
        target.sex,
        '는 드디어 뜻을 이해하곤 ',
        me.get_colored_name(),
        '과(와) 함께 갔다.',
      ]);
      drawLine();
      await printAndWait(['잠시 후 아그네스 타키온의 실험실 ']);
      await tachyon.say_and_wait('(¦3[▓▓]');
      await me.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
      await tachyon.say_and_wait('Σ(っ °Д °;)っ');
      await target.say_and_wait('(ಡωಡ)');
      drawLine({ content: '한참 동안 설명한 후' });
      await tachyon.say_and_wait('(//▽//)');
      await tachyon.say_and_wait('～(￣▽￣～)～');
      await printAndWait([
        '마지막으로 ',
        me.get_colored_name(),
        '의 감정을 기록한 후 해독제와 보상을 주었다.',
      ]);
    } else {
      await printAndWait([
        me.get_colored_name(),
        '은(는) 매일 실험을 하던 담당 우마무스메를 떠올렸다.',
      ]);
      await me.say_and_wait('(๑•ี_เ•ี๑)');
      drawLine();
      await printAndWait([
        me.get_colored_name(),
        '은(는) 익숙한 발걸음으로 ',
        tachyon.sex,
        '의 실험실로 향했다.',
      ]);
      await tachyon.say_and_wait('⊙▽⊙');
      await me.say_and_wait('(^_^)');
      await tachyon.say_and_wait('Σ(っ °Д °;)っ');
      await printAndWait('우마 TV, 지금 여기에 개국!');
      await tachyon.say_as_unknown_and_wait('嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷');
      drawLine({ content: '(톰 선생님 성우 감사드립니다)' });
      await tachyon.say_and_wait('≥﹏≤');
      await me.say_and_wait('╮（﹀＿﹀）╭');
    }
    println();
    const item = get_random_entry([
      ...new Array(8).fill(0).map((_, i) => i),
      ...new Array(7).fill(0).map((_, i) => i + 10),
    ]);
    await printAndWait(['【', get(`itemname:${item}`), '】을(를) 받았다!']);
    add(`item:${item}`, 1);
    if (get('flag:극단적행위제한') > 0) {
      add_event(hook.hook, event_object.set_arg('strange_day2'));
    }
  }

  /**
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async strange_day2(me, _me, _call, hook, _extra, event_object) {
    const tachyon = get_chara_talk(32),
      target_id = get_random_entry(
        sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
          (e) =>
            e > 0 &&
            e !== 32 &&
            get(`cflag:${e}:종족`) > 0 &&
            get(`exp:${e}:수면간횟수`) > 0,
        ),
      ),
      is_tachyon_in_team = get('cflag:32:모집상태') === recruit_flags.yes;
    if (
      (is_tachyon_in_team && new TachyonLifeMarks().cook === 0) ||
      target_id === undefined
    ) {
      add_event(hook.hook, event_object);
      return;
    }
    const target = get_chara_talk(target_id);
    await print_event_name('웃긴 날 (이상한 날) 2', me);
    await printAndWait([
      me.get_colored_name(),
      '은(는) 평소처럼 일어났지만, 몸 상태가 어딘지 모르게 이상하다는 것을 깨달았다.',
    ]);
    await printAndWait([me.get_colored_name(), '은(는) 주위를 둘러보았지만, 변한 것은 없었다.']);
    await printAndWait('다만……… 손이 근질거리는 게, 왠지 조사를 하고 싶어졌다……');
    let flag_a = true,
      horse_hair = false,
      flag_b = true,
      b_line;
    const check_times_in_a = new Array(6).fill(0),
      check_times_in_b = new Array(2).fill(true);
    const cur_line = getLineCount();
    while (flag_a) {
      printInColRows(
        [
          { content: '그럼 무엇을 조사해볼까?', type: 'text' },
          { config: { width: 8 }, type: 'divider' },
        ],
        [
          {
            config: { width: 3 },
            content: '벽벽벽벽벽',
            type: 'text',
          },
          {
            accelerator: 1,
            config: { align: 'center', showAcc: false, width: 2 },
            content: '창',
            type: 'button',
          },
          {
            config: { align: 'right', width: 3 },
            content: '벽벽벽벽벽',
            type: 'text',
          },
        ],
        [
          { config: { width: 5 }, content: '벽', type: 'text' },
          {
            accelerator: 2,
            config: {
              align: 'right',
              disableWarning: true,
              showAcc: false,
              width: 2,
            },
            content: '２２２',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '벽', type: 'text' },
        ],
        [
          { config: { width: 5 }, content: '벽', type: 'text' },
          {
            accelerator: 2,
            config: {
              align: 'right',
              disableWarning: true,
              showAcc: false,
              width: 2,
            },
            content: '인인인',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '벽', type: 'text' },
        ],
        [
          { config: { width: 5 }, content: '벽', type: 'text' },
          {
            accelerator: 2,
            config: {
              align: 'right',
              disableWarning: true,
              showAcc: false,
              width: 2,
            },
            content: '침대애',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '벽', type: 'text' },
        ],
        [
          { config: { width: 6 }, content: '벽', type: 'text' },
          {
            accelerator: 3,
            config: { align: 'right', showAcc: false, width: 1 },
            content: '탁',
            type: 'button',
          },
          { config: { align: 'right', width: 1 }, content: '벽', type: 'text' },
        ],
        [
          { config: { width: 1 }, content: '벽', type: 'text' },
          {
            accelerator: 4,
            config: { width: 1, showAcc: false },
            content: '거',
            type: 'button',
          },
          { config: { align: 'right', width: 6 }, content: '벽', type: 'text' },
        ],
        [
          { config: { width: 7 }, content: '벽', type: 'text' },
          {
            accelerator: 5,
            config: { align: 'right', showAcc: false, width: 1 },
            content: '욕',
            type: 'button',
          },
        ],
        [
          { config: { width: 3 }, content: '벽벽벽벽', type: 'text' },
          {
            accelerator: 6,
            config: { align: 'center', showAcc: false, width: 2 },
            content: '현 관',
            type: 'button',
          },
          {
            config: { align: 'right', width: 3 },
            content: '벽벽벽벽',
            type: 'text',
          },
        ],
        [{ config: { width: 8 }, type: 'divider' }],
      );
      switch (await input()) {
        case 1:
          switch (++check_times_in_a[0]) {
            case 1:
              await printAndWait([me.get_colored_name(), '은(는) 창문을 열었다.']);
              await printAndWait('밖에서는 새들이 지저귀고, 꽃들이 피어나고 있다.');
              await printAndWait([
                '이런 날에 ',
                me.get_colored_name(),
                ' 같은 트레이너는…… 집에서 푹 자야만 한다.',
              ]);
              break;
            case 2:
              await printAndWait([
                me.get_colored_name(),
                '은(는) 창문을 닫았다. 외부의 소리를 차단했다.',
              ]);
              await printAndWait([
                '안타깝게도 ',
                me.get_colored_name(),
                '은(는) 일을 해야 하기에, 아직 쉴 수 없다.',
              ]);
              break;
            default:
              await printAndWait('창문 여닫는 게 그렇게 재밌나?');
          }
          break;
        case 2:
          switch (++check_times_in_a[1]) {
            case 1:
              await printAndWait('아주 크고 부드러운 침대다.');
              await printAndWait('……그런데 왜 굳이 2인용 침대를 샀던 걸까?');
              break;
            case 2:
              await printAndWait('……어라, 왜 여기에 우마무스메의 꼬리 털이 있지?');
              await printAndWait([me.get_colored_name(), '은(는) 냄새를 맡아보았다.']);
              await printAndWait('……익숙한 냄새다.');
              await printAndWait('【꼬리 털】을 획득했다.');
              horse_hair = true;
              break;
            default:
              await printAndWait([
                '크고 편안한 침대…… 아마 ',
                me.get_colored_name(),
                ' 뿐만 아니라 다른 누군가에게도 편안할 것이다.',
              ]);
          }
          break;
        case 3:
          switch (++check_times_in_a[2]) {
            case 1:
              await printAndWait('침대 옆 협탁이다. 위에는 소중한 사진들이 놓여 있다.');
              break;
            case 2:
              await printAndWait([
                me.get_colored_name(),
                ' 서랍을 샅샅이 뒤져보았지만, 아무것도 나오지 않았다.',
              ]);
              await printAndWait([me.get_colored_name(), '은(는) 누군가 묻는 소리를 들은 것 같았다.']);
              await me.say_as_unknown_and_wait('……왜 자기 집 서랍을 그렇게 뒤져대는 거야?');
              await printAndWait('……기분 탓이겠지.');
              break;
            case 3:
              await printAndWait([
                me.get_colored_name(),
                '은(는) 구석구석 조사한 끝에…… 구석에서 10 우마코인을 찾아냈다.',
              ]);
              await printAndWait([
                me.get_colored_name(),
                '은(는) 만족스러운 표정으로 자리를 떴다.',
              ]);
              await printAndWait('10 우마코인 획득.');
              add('flag:현재코인', 10);
              break;
            default:
              await printAndWait('소중한 사진 한 장만이 놓여 있을 뿐이다.');
          }
          break;
        case 4:
          switch (++check_times_in_a[3]) {
            case 1:
              await printAndWait([
                '거울 속에 비친 것은 ',
                me.get_colored_name(),
                '. 평범한 얼굴, 수수한 배지, 소박한 옷차림이다.',
              ]);
              break;
            case 2:
              await printAndWait(
                '그곳에는 잘생긴 얼굴, 우아한 옷차림, 반짝이는 배지를 지닌 트레이너가 서 있다.',
              );
              await printAndWait('……참 보기 좋지 않은가.');
              break;
            case 3:
              await printAndWait([
                '거울 속의 인물은 이제 더 이상 칭찬할 말이 없는지, 어처구니없다는 듯 ',
                me.get_colored_name(),
                '을(를) 쳐다보고 있다.',
              ]);
              await printAndWait('……무언가 좀 이상한데?');
              await printAndWait('눈을 한 번 깜빡이자, 모든 것이 정상으로 돌아왔다.');
              break;
            case 4:
              if (target_id === 25 || target_id === 98 || target_id === 400) {
                await printAndWait([
                  me.get_colored_name(),
                  '이(가) 거울을 향해 미소 지었다.',
                ]);
                await printAndWait([
                  '거울 속의 인물도 갑자기 ',
                  me.get_colored_name(),
                  '을(를) 향해 웃기 시작했다……',
                ]);
                await printAndWait('……다만 입이 너무 크게 벌어져 귀 밑까지 찢어졌다.');
                await printAndWait([
                  me.sex,
                  '는 거울 틀을 붙잡고 힘을 주기 시작했다.',
                ]);
                await printAndWait([me.get_colored_name(), '은(는)_……너무 무서워서 움직일 수 없는 걸까?']);
                await printAndWait([me.sex, '의 얼굴이 점점 커지더니, 바로 눈앞까지 다가왔다.']);
                await printAndWait([
                  '……그러다 ',
                  me.sex,
                  '가 ',
                  me.get_colored_name(),
                  '의 얼굴을 자세히 확인하더니,',
                ]);
                await printAndWait(['……', me.sex, '는 도망쳐 버렸다.']);
                await printAndWait('이제 거울 속에는 아무것도 비치지 않는다.');
                await printAndWait([me.get_colored_name(), '은(는) 하품을 했다.']);
              } else {
                await printAndWait(['그곳에는 ', me.get_colored_name(), '이(가) 있다.']);
              }
              break;
            default:
              if (target_id === 25 || target_id === 98 || target_id === 400) {
                await printAndWait('거울 속은 텅 비어 있다…… 언제쯤 돌아오려나.');
                await printAndWait([
                  me.get_colored_name(),
                  '은(는) 매무새를 좀 정리하고 싶었는데 말이다.',
                ]);
              } else {
                await printAndWait(['그곳에는 ', me.get_colored_name(), '이(가) 있다.']);
              }
          }
          break;
        case 5:
          flag_b = true;
          await printAndWait([
            me.get_colored_name(),
            '은(는) 욕실 문을 열고 안으로 들어갔다.',
          ]);
          b_line = getLineCount();
          while (flag_b) {
            printInColRows(
              [
                {
                  content: [
                    me.get_colored_name(),
                    '은(는) 주위를 둘러보았다. 어디부터 시작할까?',
                  ],
                  type: 'text',
                },
                { config: { width: 6 }, type: 'divider' },
              ],
              [
                { config: { width: 3 }, content: '벽벽벽벽', type: 'text' },
                {
                  config: { align: 'right', width: 3 },
                  content: '벽벽벽벽',
                  type: 'text',
                },
              ],
              [
                { config: { width: 1 }, content: '墙', type: 'text' },
                {
                  accelerator: 1,
                  config: { width: 2, showAcc: false },
                  content: '변기',
                  type: 'button',
                },
                {
                  config: { align: 'right', width: 3 },
                  content: '벽',
                  type: 'text',
                },
              ],
              [
                { config: { width: 3 }, content: '벽', type: 'text' },
                {
                  accelerator: 2,
                  config: { align: 'right', width: 2, showAcc: false },
                  content: '욕조',
                  type: 'button',
                },
                {
                  config: { align: 'right', width: 1 },
                  content: '벽',
                  type: 'text',
                },
              ],
              [
                {
                  accelerator: 3,
                  config: { width: 3, showAcc: false },
                  content: '방',
                  type: 'button',
                },
                {
                  config: { align: 'right', width: 3 },
                  content: '벽',
                  type: 'text',
                },
              ],
              [
                { config: { width: 3 }, content: '벽벽벽벽', type: 'text' },
                {
                  config: { align: 'right', width: 3 },
                  content: '벽벽벽벽',
                  type: 'text',
                },
              ],
              [{ config: { width: 6 }, type: 'divider' }],
            );
            switch (await input()) {
              case 1:
                if (check_times_in_b[0]) {
                  await printAndWait([
                    me.get_colored_name(),
                    '은(는) 누군가 자신을 쳐다보는 느낌이 든다…… 하지만 주위엔 아무도 없다.',
                  ]);
                  if (
                    await select_yes_or_no(
                      '소변이 마려운 것 같다. 볼일을 볼까?',
                      '본다',
                      '아니'
                    )
                  ) {
                    await printAndWait([
                      '……착각인가?',
                      me.get_colored_name(),
                      '은(는) 변기가 말을 하는 것 같은 기분이 들었다.',
                    ]);
                    await printAndWait('……');
                    await printAndWait('……');
                    await printAndWait([
                      me.get_colored_name(),
                      '은(는) 변기가 이렇게 말하는 소리를 들은 것 같았다.'
                    ]);
                    await me.say_as_unknown_and_wait('우우우…… 난 이제 더러워졌어……');
                    await me.say_and_wait('……기분 탓이겠지.', true);
                    check_times_in_b[0] = false;
                  }
                } else {
                  await printAndWait('변기가 울고 있는 것 같다…… 나중에 사과라도 하자.');
                }
                break;
              case 2:
                if (check_times_in_b[1]) {
                  await printAndWait('평범한 욕조다. 들어가 있으면 기분이 좋다.');
                  check_times_in_b[1] = false;
                } else {
                  await printAndWait([
                    me.get_colored_name(),
                    '은(는) 희미한 목소리를 들었다.',
                  ]);
                  await me.say_as_unknown_and_wait(
                    '그만 좀 뒤져봐, 난 그냥 욕실이 비어 보이지 않게 가져다 놓은 것뿐이니까.',
                  );
                  await printAndWait('……정말 기묘한 일이다.');
                }
                break;
              case 3:
                flag_b = false;
            }
            await clear(getLineCount() - b_line);
          }
          break;
        case 6:
          flag_a = false;
      }
      await clear(getLineCount() - cur_line);
    }
    drawLine();
    await printAndWait('현관문을 밀어 열었다. 왠지 오늘따라 외출이 유난히 늦어졌다.');
    await printAndWait('시간을 확인해보니, 벌써 지각하기 직전이다.');
    if (horse_hair) {
      await printAndWait([
        me.get_colored_name(),
        '은(는) 현관문을 바라보며, 문을 바꿔야 할지 고민했다.',
      ]);
      await say_by_passer_by_and_wait('문', '나랑은 상관없는 일이야.');
      await me.say_and_wait('……이제는 숨길 생각조차 없는 건가?', true);
    }
    println();
    await printAndWait([me.get_colored_name(), '은(는) 큰길로 나섰다.']);
    await printAndWait([
      me.get_colored_name(),
      '은(는) 아무래도 자신이 또 ',
      tachyon.get_colored_name(),
      '에게 약을 투여당했다고 확신했다.',
    ]);
    await printAndWait('이번 약의 효과는 대체 무엇일까?');
    print(
      [
        { content: ' ', isDivider: true },
        '집집집집집집집집집집집집',
        { isBr: 2 },
        '나',
        ...new Array(8).fill(undefined).map(() => ({ isBlank: true })),
        '빵집',
        ...new Array(2).fill(undefined).map(() => ({ isBlank: true })),
        target.get_colored_name(),
        { isBr: 2 },
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '木',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '木',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '木',
        { content: ' ', isDivider: true },
      ],
      { width: 8 },
    );
    await printAndWait([
      me.get_colored_name(),
      '이(가) 기다리고 있던 ',
      target.get_colored_name(),
      '와(과) 마주쳤다!',
    ]);
    await select_yes_or_no('거리가 아주 가깝다. 어떻게 할까?', '도망친다', '냉정하게 대응한다');
    await printAndWait([
      '……',
      target.sex,
      '는 이미 ',
      me.get_colored_name(),
      '을(를) 노리고 있다. 무엇을 해도 소용없을 것 같다!',
    ]);

    print(
      [
        { content: ' ', isDivider: true },
        '집집집집집집집집집집집집',
        { isBr: 2 },
        '나',
        ...new Array(2).fill(undefined).map(() => ({ isBlank: true })),
        target.get_colored_name(),
        { isBr: true },
        ...new Array(4).fill(undefined).map(() => ({ isBlank: true })),
        '빵집',
        { isBr: true },
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '木',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '木',
        ...new Array(6).fill(undefined).map(() => ({ isBlank: true })),
        '木',
        { content: ' ', isDivider: true },
      ],
      { width: 8 },
    );
    await printAndWait([
      target.sex,
      '가 ',
      me.get_colored_name(),
      '에게 달려들었다.',
    ]);
    await target.say_and_wait([
      '죄송해요, ',
      sys_get_colored_callname(target_id, 0),
      '! 고의가 아니었어요!',
    ]);
    await target.say_and_wait('지각할 것 같아서 급하게 달려오느라 그만.');
    await target.say_and_wait('좋은 냄새…… 당장이라도…… 아니야 아니야, 조금만 더 참자……', true);
    await printAndWait('입으로는 그렇게 말하면서도, 몸은 비키려 하지 않는다.');
    await me.say_and_wait('괜찮아, 조심하면 되지.');
    await printAndWait([
      me.get_colored_name(),
      '은(는) 눈앞에서 벌써 자신의 체취를 맡기 시작한 ',
      target.get_uma_sex_title(),
      '를 보며, 짓궂은 장난기가 발동했다.',
    ]);
    await printAndWait([
      me.get_colored_name(),
      '은(는) ',
      target.sex,
      '에게 현재 상황을 설명해 주었다.',
    ]);
    await printAndWait([target.sex, '의 얼굴이 새빨갛게 달아올랐다.']);
    await target.say_and_wait('……');
    await target.say_and_wait('그러니까 지금 제가 생각하는 게……?', true);
    await target.say_and_wait('……앗, 지각하겠어요! 저 먼저 갈게요……!');
    await printAndWait([target.sex, '는 뒤도 돌아보지 않고 달려나갔다.']);
    await me.say_and_wait('참 귀엽네.');
    if (horse_hair) {
      await say_by_passer_by_and_wait(
        '꼬리 털',
        '확실히 귀엽죠. 나중에도 그렇게 생각하시길 바랄게요.',
      );
      await me.say_and_wait('???');
    }
    drawLine();
    await printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 실험실에 도착했다.',
    ]);
    if (is_tachyon_in_team) {
      await printAndWait([tachyon.sex, '가 등을 돌린 채…… 하얀 플라스틱 의자에 앉아 있다?']);
      await tachyon.say_and_wait('오지 말았어야 했네.');
      await me.say_and_wait('또 나한테 뭘 먹인 거야? 어서 해독제 내놔.');
      await tachyon.say_and_wait('우리가 그동안 몇 번이나 싸웠지?');
      await me.say_and_wait('……');
      await tachyon.say_and_wait('원한다면, 직접 와서 가져가 보게.');
      await me.say_and_wait('자꾸 드립 치면 점심 굶길 줄 알아.');
      await printAndWait([tachyon.get_colored_name(), '이 광속으로 무릎을 꿇었다.']);
      await printAndWait([
        tachyon.sex,
        '가 ',
        me.get_colored_name(),
        '의 다리를 붙잡으며 내심 무언가를 기대하고 있다.',
      ]);
      await tachyon.say_and_wait([
        '우우우, 제발 그러지 말게, ',
        sys_get_colored_callname(32, 0),
        '.',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '은(는) 해독제를 향해 걸어가다 실수로 ',
        tachyon.sex,
        '를 발로 찼다.',
      ]);
      await printAndWait([tachyon.sex, '는 왠지 모를 쾌감을 느끼고 있다.']);
      await tachyon.say_and_wait('아얏, 아프다네, 우우.', true);
      await printAndWait([
        '……',
        me.get_colored_name(),
        '은(는) 이 해독제를 반드시 마셔야 한다고 생각했다.',
      ]);
      await printAndWait([
        '해독제를 단숨에 들이켰다. 세계는 다시 고요해졌고, ',
        me.get_colored_name(),
        '은(는) 더 이상 주변을 조사하고 싶다는 욕망을 느끼지 않게 되었다.',
      ]);
      await tachyon.say_and_wait('……마셨나? ……나도 한 병 주게나.');
      await printAndWait([
        '잔뜩 실망한 표정의 ',
        tachyon.sex,
        '를 보며, ',
        me.get_colored_name(),
        '은(는) 우마 TV를 재가동해야겠다고 결심했다.',
      ]);
      await me.say_and_wait('……');
      await tachyon.say_and_wait('에?⊙▽⊙');
      await tachyon.say_as_unknown_and_wait('嗷(∩∀°╭嗷∀∀嗷∀∀°)嗷嗷');
      drawLine({ content: '(톰 선생님의 더빙에 감사드립니다)' });
      sys_like_chara(32, 0, get_random_value(100, 150));
      add_jewel_reward(32, '순종', 200);
    } else {
      await printAndWait([
        tachyon.sex,
        '가 의자에 앉아, 마치 ',
        me.get_colored_name(),
        '이(가) 올 것을 이미 알고 있었다는 듯 기다리고 있었다.',
      ]);
      await printAndWait('잠시 정적이 흘렀다.');
      await me.say_and_wait('입 꾹 다물고 보스인 척하는 거야?');
      await tachyon.say_and_wait('말은 필요 없지 않은가?', true);
      await me.say_and_wait('?');
      await tachyon.say_and_wait('그 표정을 보니 성공한 모양이군.', true);
      await tachyon.say_and_wait('이건 내가 최근 개발한, 「이체동심(異體同心)」 물약이라네.', true);
      await tachyon.say_and_wait('효과가 꽤 좋지? 화내지 말게나. 자, 이게 해독제일세.');
      await printAndWait([
        tachyon.sex,
        '가 옆에 있는 관찰 일지와 물약을 가리켰다.',
      ]);
      await printAndWait([
        '물약을 단숨에 들이켰다. 세계는 다시 고요해졌고, ',
        me.get_colored_name(),
        '은(는) 더 이상 주변을 조사하고 싶다는 욕망을 느끼지 않게 되었다.',
      ]);
      await printAndWait('그렇긴 해도, 생각할수록 점점 빡친다.');
      const med_list = get('itemkeys').filter(
        (e) => e < 25 && get(`itemprice:${e}`) >= 500,
      );
      print('\n꽤 값비싼 약물 몇 병을 챙겼다:');
      let total = 5;
      for (let i = 0; i < med_list.length; ++i) {
        const item_id = med_list[i];
        const count =
          i === med_list.length - 1 ? total : get_random_value(0, total);
        if (count > 0) {
          total -= count;
          print(`· ${get(`itemname:${item_id}`)} × ${count}`);
          add(`item:${item_id}`, count);
        }
      }
      await waitAnyKey();
    }
  }
};
