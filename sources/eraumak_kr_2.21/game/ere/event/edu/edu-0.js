/**
 * @file 玩家 - 育成
 * @author 雞雞
 * @author 天马闪光蹄
 * @author イーウィヤ
 * @author 幽白書
 * @author Mr.E.
 */
const {
  add,
  get,
  getAddedCharacters,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  replaceInColRows,
  set,
  waitAnyKey,
} = require('#/era-electron');

const check_team_limit = require('#/system/chara/sys-check-team-limit');
const sys_get_random_uma_god = require('#/system/chara/sys-get-random-uma-god');
const sys_rape_in_sleeping = require('#/system/ero/sys-rape-in-sleeping');
const global_achievement = require('#/system/global/sys-calc-achievement');
const {
  sys_change_attr_and_print,
  sys_change_lust,
  sys_change_motivation,
  sys_reg_race,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');
const {
  sys_check_awake,
  sys_check_remote,
} = require('#/system/sys-calc-chara-param');
const { sys_change_fame, sys_change_money } = require('#/system/sys-calc-flag');
const sys_filter_chara = require('#/system/sys-filter-chara');
const { reset_chara } = require('#/system/sys-init-chara');

const { get_custom_check } = require('#/event/check/check-factory');
const kojo = require('#/event/edu/edu-0.kojo');
const StrangeDayEvents = require('#/event/edu/edu-events-0/strange-day');
const { add_event } = require('#/event/queue');
const all_reward_in_event = require('#/event/snippets/all-reward-in-event');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const print_name_and_show_kojo = require('#/event/snippets/print-name-and-show-kojo');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_extremum_entry, get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { max_chara_id } = require('#/data/other-const');

module.exports = class extends StrangeDayEvents {
  get dict() {
    return {
      YOU: get('callname:0:-2'),
      ...(get('flag:캐릭터성별') === 1
        ? { UMA: '우마무스코', SHE: '그' }
        : { UMA: '우마무스메', SHE: '그녀' }),
    };
  }

  /**
   * @author 天马闪光蹄
   * @param {CharaTalk} me
   */
  async second_chance(me) {
    const team_limit = -check_team_limit();
    let second_list = sys_filter_chara(
      'cflag',
      '모집상태',
      recruit_flags.yes,
    ).filter(
      (cid) =>
        cid > 0 &&
        get(`cflag:${cid}:종족`) > 0 &&
        get(`cflag:${cid}:재육성가능`) > 0,
    );
    if (second_list.length === 0 || team_limit <= 0) {
      return;
    }
    let yes_button = '계속 나아간다',
      no_button = '돌아간다';
    await print_event_name('「꿈」', me);
    if (get('flag:중복육성첫만남') === 1) {
      await printAndWait('한밤중, 고요함이 감돈다.');
      await printAndWait([
        me.get_colored_name(),
        ' 혼자 트레센의 중심부로 향한다.',
      ]);
      await printAndWait('세 여신을 모신 조각상이 이곳에 우뚝 서 있다.');
      await printAndWait([
        me.get_colored_name(),
        '은(는) 심호흡을 하고, 샘가로 걸어가, 방금 쓴 편지를 정중히 바치며 물속에 던져 넣는다.',
      ]);
      await printAndWait([
        '연못에 비친 달빛이 순간 가볍게 흔들리며, 은은한 빛이 일렁이고,',
        me.get_colored_name(),
        '은(는) 머릿속에서 여러 목소리가 동시에 메아리치는 것을 느꼈다——',
      ]);
      await printAndWait(
        '인생은 무상하여, 앞장서서 나아가는 용사든, 시대를 지배하는 패왕이든, 혹은 영역을 통치하는 황제든, 그 여정이 반드시 순탄할 수는 없으며, 빛이든 어둠이든 결국은 환상 같은 거품일 뿐이다.',
      );
      await printAndWait(
        '하지만, 악몽은 결국 사라지고, 아름다운 꿈도 현실이 될 수 있다. 거품 속에서도 건져내어 간직하고 싶은 것들이 있다.',
      );
      await me.say_as_unknown_and_wait('그럼, 네 결심을 말해 보거라.');
      yes_button = '「이것을 위해 왔다」';
      no_button = '「……이제 충분해」';
    } else {
      await printAndWait([me.get_colored_name(), '은 또다시 이곳에 돌아왔다.']);
      await printAndWait([
        '이건...몇번째일까? ',
        me.get_colored_name(),
        '의 기억이 묘하게 흐릿해진다.',
      ]);
      await printAndWait('히지만, 그건 중요한 것이 아니다...');
      await printAndWait([me.get_colored_name(), '의 마음속에 품은 것, 그것이 바로 핵심이다.']);
    }
    const second_dict = {};
    let second_count = 0,
      flag_print = true,
      flag_select = true;
    while (flag_select) {
      (flag_print ? printInColRows : replaceInColRows)(
        {
          columns: [
            {
              type: 'divider',
              config: {
                content: `다시 육성할 캐릭터를 선택해 주세요 (최대 ${team_limit} 명)`,
              },
            },
            ...second_list.map((e) => ({
              accelerator: e,
              config: {
                align: 'center',
                buttonType: second_dict[e] ? 'warning' : 'info',
                disabled: get(`cflag:${e}:피상속`) > 0,
                width: 8,
              },
              content: `${get(`callname:${e}:-1`)}${get(`cflag:${e}:피상속`) ? ' (상속됨)' : ''}`,
              type: 'button',
            })),
          ],
          config: { horizontalAlign: 'space-evenly' },
        },
        [
          {
            accelerator: 1001,
            config: {
              align: 'center',
              disabled: second_count === 0 || second_count > team_limit,
              width: 12,
            },
            content: yes_button,
            type: 'button',
          },
          {
            accelerator: 1002,
            config: { align: 'center', width: 12 },
            content: no_button,
            type: 'button',
          },
        ],
      );
      flag_print = false;
      const ret = await input({ hideInput: true });
      if (ret === 1001) {
        flag_select = false;
      } else if (ret === 1002) {
        Object.keys(second_dict).forEach((k) => delete second_dict[k]);
        flag_select = false;
      } else {
        if ((second_dict[ret] = !second_dict[ret])) {
          second_count++;
        } else {
          second_count--;
        }
      }
    }
    second_list = Object.entries(second_dict)
      .filter((e) => e[1])
      .map((e) => Number(e[0]));
    if (second_list.length > 0) {
      println();
      if (get('flag:중복육성첫만남') === 1) {
        await printAndWait([
          me.get_colored_name(),
          '은(는) 동상의 얼굴을 바라보며, 실물처럼 생생한 세 쌍의 눈동자를 응시하고, 고개를 숙여 인사했다.',
        ]);
        await printAndWait('그 후, 눈부신 빛이 피어올랐다——');
        await printAndWait('이제「다음」진실을 찾아 나설 때다.');
      } else {
        await printAndWait([
          me.get_colored_name(),
          '이(가) 세 여신의 조각상을 바라보자, 안개가 그들의 얼굴을 흐릿하게 가렸다',
          me.get_colored_name(),
          '이(가) 무언가를 하려 손을 뻗으려던 순간——',
        ]);
        await printAndWait('눈앞의 모든 것이 뒤틀린다.');
        await printAndWait('그러자 곧바로 원래대로 돌아왔다. 마치 아무 일도 없었던 것처럼');
        await printAndWait('……');
        await printAndWait('모든 것이 평소와 같다…… 아니면 뭔가 다른가?');
        await printAndWait('나…… 뭘 했던 거지?');
      }
      second_list.forEach((cid) => {
        // CFLAGNAME:48 = 육성턴수합산
        set(`cflag:${cid}:48`, 'x');
        // CFLAGNAME:49 = 육성횟수
        if (get(`cflag:${cid}:49`) === 7) {
          global_achievement.chan_mor = 1;
        }
        reset_chara(cid);
        get_custom_check(cid).check_second_chance();
      });
    }
    // FLAGNAME:32 = 중복육성첫만남
    set('flag:32', 2);
  }

  /**
   * @author イーウィヤ
   * @param {CharaTalk} me
   */
  async god_coin(me) {
    const cur_weeks = get('flag:현재턴수'),
      next_year = Math.floor((cur_weeks + 47) / 48) * 48;
    new MyEduMarks().god = next_year + get_random_value(13, 40) - cur_weeks;
    await print_event_name('세 여신상의 소원의 우물', me);
    await printAndWait('동전이나 하나 던져서 소원을 빌어 볼까...');
    const dice = Math.random(),
      god = sys_get_random_uma_god();
    if (dice < 0.4 && god) {
      await printAndWait('이건...환청? 왠지 모르게 친근하고 신뢰가 가는 목소리가 들리네...');
      const color = get_chara_color(god);
      switch (god) {
        case 340:
          await printAndWait('열정적인, 붉은 목소리……', {
            color,
          });
          break;
        case 341:
          await printAndWait('포용적인, 푸른 목소리……', {
            color,
          });
          break;
        case 342:
          await printAndWait('엄격한, 노란 목소리……', {
            color,
          });
      }
      println();
      sys_like_chara(god, 0, get_random_value(10, 20)) && (await waitAnyKey());
    } else if (dice < 0.7) {
      await printAndWait('아…… 이거 어쩌면 될지도……?');
      await printAndWait(
        '하지만 그렇게 말은 해도…… 딱히 떠오르는 건 없는데, 곰곰이 생각해보니 뭔가 깨달은 것 같기도 하고……',
      );
      const cur_chara = get('flag:현재상호작용캐릭터');
      if (
        get(`cflag:${cur_chara}:육성턴수합산`) < 3 * 48 ||
        (cur_chara === 0 && get('cflag:0:종족'))
      ) {
        get_attr_and_print_in_event(
          cur_chara,
          [0, 0, 0, 0, 3],
          get_random_value(0, 10),
        ) && (await waitAnyKey());
      }
    } else if (dice < 0.9) {
      await printAndWait('역시 아무 일도 일어나지 않았다……');
    } else {
      await printAndWait('줍는 순간 두 개가 되었다!');
      sys_change_money(50);
    }
    return true;
  }

  /**
   * @author イーウィヤ
   * @param {CharaTalk} me
   */
  async experiment(me) {
    new MyEduMarks().experiment = get_random_value(36, 60);
    await print_event_name('버려진 과학실 탐험', me);
    await me.say_and_wait('누구 있나요……');
    println();
    await printAndWait('이 교실이 다른 용도로 쓰인다는 얘기는 못 들었는데…');
    await printAndWait([
      '갑작스러운 폭우와 천둥번개에 쫓긴 ',
      me.get_colored_name(),
      '은(는) 이 작은 보물창고에 도착했다.',
    ]);
    println();
    await me.say_and_wait('아마도, 하나 골라보라는 뜻인가?');
    println();
    await printAndWait('띠에 묶인 와인색 약병 하나');
    await printAndWait('그리고 약간 낡은 검은 고양이 인형 하나');
    println();
    me.say('어느 걸로 할까……', true);
    printButton('약병（스태미나+? or 체력+50）', 1);
    printButton('인형（지능+8，스킬포인트+?）', 2);
    let wait_flag;
    if ((await input()) === 1) {
      get_chara_talk(32);
      if (Math.random() < 0.5) {
        await printAndWait('엄청 쓰다——');
        wait_flag = get_attr_and_print_in_event(
          0,
          [0, get_random_value(0, 10)],
          0,
        );
      } else {
        await printAndWait('엄청 맵다——');
        wait_flag = get_attr_and_print_in_event(
          0,
          undefined,
          0,
          JSON.parse('{"체력":50}'),
        );
      }
      wait_flag = sys_like_chara(32, 0, get_random_value(5, 15)) || wait_flag;
    } else {
      const coffee = get_chara_talk(25);
      await get_chara_talk(400).say_as_unknown_and_wait('좋아좋아좋아좋아——');
      await coffee.say_as_unknown_and_wait('음……?');
      await printAndWait(
        `창밖으로 ${coffee.get_uma_sex_title()}의 그림자가 스쳐지나간 것 같은데? 그럴리 없나~여긴 1층도 아니고.`,
      );
      wait_flag = get_attr_and_print_in_event(
        0,
        [0, 0, 0, 0, 8],
        get_random_value(0, 10),
      );
      wait_flag = sys_like_chara(25, 0, get_random_value(5, 15)) || wait_flag;
    }
    wait_flag && (await waitAnyKey());
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async custom(me) {
    new MyEduMarks().custom = get_random_value(24, 48);
    await print_event_name('습관은 천성이 된다', me);
    await printAndWait([
      '어느 날 오후 ',
      me.get_colored_name(),
      '은(는) 최근에 즐기기 시작한 모바일 게임 《빛나는 소녀》에서 또다시 낮은 확률의 트레이닝 실패를 겪었다…… 익숙해지면 되겠지……',
    ]);
    printButton('「……이런 거에 익숙해질까보냐!」（우마코인-50，육성 중인 우마무스메의 체력+15%）', 1, {
      disabled: get('flag:현재코인') < 50,
    });
    printButton('「그냥 익숙해지면 돼!」', 2);
    if ((await input()) === 1) {
      await printAndWait([
        me.get_colored_name(),
        '은(는) 어른의 마법・과금을 사용했다!',
      ]);
      add('flag:현재코인', -50);
      sys_filter_chara('cflag', '모집상태', recruit_flags.yes)
        .filter((e) => get(`cflag:${e}:육성턴수합산`) < 3 * 48)
        .forEach((e) =>
          sys_change_attr_and_print(e, '체력', get(`maxbase:${e}:체력`) * 0.15),
        );
    } else {
      await printAndWait([me.get_colored_name(), '은(는) 휴대폰을 내던져 부숴버리고 싶은 충동을 참았다……']);
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async trainer_race(me) {
    new MyEduMarks().trainer_race = get_random_value(24, 48);
    await print_event_name('바람에 펄럭이는 포스터', me);
    await printAndWait([
      '트레센 학원으로 가는 길에 포스터 한 장이 바람에 날려 ',
      me.get_colored_name(),
      '의 얼굴에 떨어졌다.',
    ]);
    await printAndWait([
      '포스터를 보니 트레이너를 대상으로 한 ',
      get_random_entry(['단거리 달리기', '수영', '등산']),
      ' 대회인 것 같다. 체력에 자신이 없더라도 현장에서 지원해준다고 하는데, 참가해 볼까?',
    ]);
    printButton('(한번 해 봐서 나쁠 건 없지?) (체력&기력-25%，상품을 받을 수도 있음)', 1);
    printButton('（이렇게 바쁜데 참가할 시간 따위 있을까 보냐—!）', 2);
    if ((await input()) === 1) {
      await printAndWait(
        '기묘한 침술을 시술받은 뒤 의외로 순조롭게 승리하고 주최 측이 준비한 상품까지 받았다!',
      );
      await printAndWait(
        '하지만 너무 순조로워서 반대로 등골이 오싹해진다...마치 무슨 실험 대상이 된 것 마냥...',
      );
      println();
      sys_change_attr_and_print(0, '체력', -get('maxbase:0:체력') * 0.25);
      sys_change_attr_and_print(0, '기력', -get('maxbase:0:기력') * 0.25);
      const item = get_random_entry([
        ...new Array(8).fill(0).map((_, i) => i),
        ...new Array(7).fill(0).map((_, i) => i + 10),
      ]);
      print(['상품 획득【', get(`itemname:${item}`).toUpperCase(), '】!']);
      add(`item:${item}`, 1);
      sys_like_chara(305, 0, get_random_value(0, 10));
      await waitAnyKey();
    } else {
      await printAndWait([
        '나중에 듣자 하니 ',
        get_chara_talk(304).get_colored_name(),
        '가 아무런 지원 없이 승리한 듯 하다.',
      ]);
      await printAndWait('역시, 그 사람 엄청나게 강하네...');
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async bankruptcy(me) {
    await print_event_name('파산', me);
    await printAndWait([
      '게으름만 피우고 일을 안 한 탓일까? 아니면 운이 정말 ',
      me.get_colored_name(),
      '의 편이 아니었던 걸까? 아무튼 ',
      me.get_colored_name(),
      '의 계좌 잔고가 바닥을 쳤다!',
    ]);
    await printAndWait([
      '매우 비참하지만 담당 우마',
      get('flag:캐릭터성별') === 1 ? '무스코' : '무스메',
      '에게 지원해 달라고 할 수 밖에...',
    ]);
    printButton('「어째서 이런 일이……」', 1);
    await input();
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async reject(me) {
    await print_event_name('중상모략이다!', me);
    await printAndWait('왠지 모르겠지만, 요즘 학원을 걸어 다닐 때마다 항상 수군거림이 들린다.');
    await printAndWait([
      me.get_colored_name(),
      '이(가) 좀 알아본 결과 어느새 배신자로 취급받고 있었다?!',
    ]);
    printButton('「아니야. 난 안 그랬어!」', 1);
    await input();
    sys_change_fame(-10);
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async work_over(me) {
    new MyEduMarks().work_over = get_random_value(12, 36);
    await print_event_name('인생무상, 야근', me);
    await printAndWait('트레이너라는 직업은 연봉도 높고 지위도 높지만, 결코 쉬운 일은 아니다.');
    await printAndWait([
      '자신이 관리하는 우마',
      get('flag:캐릭터성별') === 1 ? '무스코' : '무스메',
      '의 훈련을 담당하는 것 외에도, 학원 업무, 기자 회견, 재무 관리, 연구 보고서 작성 등 무거운 책임이 있다.',
    ]);
    println();
    await printAndWait('오늘도 에너지 드링크를 마시며 버티고, 사무실 책상 밑에서 잠을 자는 하루다.');
    printButton('「바닥이 너무 딱딱해…」', 1);
    if (
      get_attr_and_print_in_event(0, undefined, 0, JSON.parse('{"체력":-50}'))
    ) {
      await waitAnyKey();
    }
  }

  /**
   * @author 雞雞
   * @param {CharaTalk} me
   */
  async sick(me) {
    new MyEduMarks().sick = get_random_value(36, 60);
    await print_event_name('인생무상, 병', me);
    await printAndWait([
      me.get_colored_name(),
      '이(가) 잠에서 깨어나니 머리가 멍하고 졸음이 쏟아지며, 어쨌든 온몸이 이상하다.',
    ]);
    printButton('「젠장, 억지로라도 해내자!」', 1);
    printButton('「전화로 병가 내고, 병원에 가보자……」', 2);
    if ((await input()) === 1) {
      get_attr_and_print_in_event(
        0,
        undefined,
        0,
        JSON.parse('{"체력":-50}'),
      ) && (await waitAnyKey());
      sys_change_money(get_random_value(10, 20));
    } else {
      sys_like_chara(305, 0, get_random_value(0, 10)) && (await waitAnyKey());
    }
  }

  /**
   * @author 幽白書
   * @param {CharaTalk} me
   * @param _me
   * @param _call
   * @param {HookArg} hook
   * @param _extra
   * @param {EventObject} event_object
   */
  async breakfast(me, _me, _call, hook, _extra, event_object) {
    const chara_id = get_random_entry(
      getAddedCharacters().filter(
        (e) =>
          e > 0 &&
          get(`cflag:${e}:모집상태`) === recruit_flags.yes &&
          get(`love:${e}`) >= 50 &&
          !sys_check_remote(e),
      ),
    );
    if (!chara_id || get('flag:현재위치') !== location_enum.office) {
      add_event(hook.hook, event_object);
      return;
    }
    const chara = get_chara_talk(chara_id);
    await print_event_name('「아침 식사」', chara);
    await printAndWait([
      me.get_colored_name(),
      '이(가) 트레이닝실에 들어서자마자, ',
      chara.get_colored_name(),
      '이(가) 아침 식사를 막 마치고 우유를 마시고 있는 모습을 보았다.',
    ]);
    await printAndWait(['그 우유 병의 포장…… 왠지 낯익은데……']);
    await printAndWait([
      '그리고 ',
      chara.get_colored_name(),
      '의 눈빛이 왠지 모르게 좀 이상하다……',
    ]);
    await printAndWait(['……분명 착각이겠지.']);
    sys_change_lust(chara_id, (get('cflag:0:종족') ? 800 : 300) * 2);
    set('flag:현재상호작용캐릭터', chara_id);
    println();
    if (sys_love_uma(chara_id, 1)) {
      await waitAnyKey();
    }
    add_event(hook.hook, event_object.set_arg('privacy_1'));
  }

  /**
   * @author Mr.E.
   * @param {CharaTalk} me
   */
  async wind_welcome(me) {
    await print_event_name(['바람이 찾아오다'], me);
    const god_id = sys_get_random_uma_god();
    await printAndWait([
      me.get_colored_name(),
      '의 몸 옆을 스치는 산들바람이 운동장 잔디의 상쾌한 향기를 실어 온다.',
    ]);
    const in_team_list = sys_filter_chara(
        'cflag',
        '모집상태',
        recruit_flags.yes,
      ),
      cur_week = get('flag:현재턴수');
    printButton('「오늘 날씨 정말 좋네」(담당 우마무스메의 컨디션+1)', 1);
    printButton('「오늘 레이스도 순조롭게 진행되길」(??? 호감도+50)', 2, {
      disabled:
        !god_id ||
        in_team_list.findIndex(
          (e) => sys_reg_race(e).curr.week === cur_week,
        ) === -1,
    });
    if ((await input()) === 1) {
      for (const c of in_team_list) {
        if (get(`cflag:${c}:종족`) > 0) {
          if (sys_change_motivation(c, 1)) {
            await waitAnyKey();
          }
        }
      }
    } else {
      sys_like_chara(god_id, 0, 50) && (await waitAnyKey());
    }
  }

  /**
   * @author Mr.E.
   * @param {CharaTalk} me
   */
  async chocolate(me) {
    await print_event_name(['초콜릿!'], me);
    await printAndWait(['발렌타인데이인데, 아쉽게도 휴가를 내지 못했다.']);
    await printAndWait([
      '트레이너라는 직업은「딴 마음」을 품은 사람들을 경계해야 한다. 우마터를 보니 여전히 사랑에 젖은 사람들이 넘쳐난다.',
    ]);
    printButton(
      '「이런 건 그저 잡념일 뿐. 오늘도 담당을 위해 몸을 불태우는 날이다.」（체력&기력+50）',
      1,
    );
    printButton('「한가하니까 트윗이나 올려서 분위기나 띄워볼까.」', 2);
    if ((await input()) === 1) {
      get_attr_and_print_in_event(
        0,
        undefined,
        0,
        JSON.parse('{"체력":50,"기력":50}'),
      ) && (await waitAnyKey());
    } else {
      const p_love =
          get('cflag:36:모집상태') === recruit_flags.yes ? get('love:36') : -1,
        t_love =
          get('cflag:80:모집상태') === recruit_flags.yes ? get('love:80') : -1,
        l_love =
          get('cflag:119:모집상태') === recruit_flags.yes
            ? get('love:119')
            : -1,
        max = get_extremum_entry(
          [
            [36, p_love],
            [80, t_love],
            [119, l_love],
          ],
          (e) => e[1],
        );
      if (max.max[1] === -1) {
        await printAndWait(['「냉장고를 열어보니까 역시 가장 로맨틱한 건 에스프레소였어」']);
        await printAndWait('트윗을 하나 작성해서 부계로 올렸다.');
      } else if (max.max[1] < 60) {
        await printAndWait([
          '「오늘도 열심히 일한 하루였는데 벌써 발렌타인데이라고? 초콜릿을 사려고 보니까 연락처가 텅 비어 있네」',
        ]);
        await printAndWait('트윗을 하나 작성해서 부계로 올렸다.');
        println();
        await printAndWait([
          '다음 날 익명의 발신자로부터 소포가 도착했다. 열어보니 고급 초콜릿 한 상자였다.',
        ]);
        println();
        await printAndWait(['이상하네. 도대체 누가 보낸 거지……']);
        sys_like_chara(max.max[0], 0, 20, false) && (await waitAnyKey());
      } else {
        await printAndWait([
          '「진정한 초콜릿을 잃어버린 지 N년째. 편의점에서 녹즙 맛 빼빼로를 사서 스스로를 응원한다」',
        ]);
        await printAndWait('트윗을 하나 작성해서 부계로 올렸다.');
        println();
        await printAndWait([
          '다음 날 익명으로 온 소포를 받았다. 열어보니 ',
          max.max[0] === 119
            ? '고급스러운'
            : max.max[0] === 80
              ? '귀여운'
              : '작고 정교한',
          '초콜릿이었다.',
        ]);
        println();
        await printAndWait(['이상하네. 도대체 누가 보낸 거지……']);
        sys_change_lust(max.max[0], 2000);
      }
    }
  }

  /** @author Mr.E. */
  async sakura_regret() {
    const my_marks = new MyEduMarks();
    const cid = get_random_entry(my_marks.pity || []);
    if (cid !== undefined) {
      const chara = get_chara_talk(cid);
      await print_event_name('벚꽃의 후회', chara);
      await printAndWait([
        '밤, 침대 위에서 ',
        chara.get_colored_name(),
        '은(는) 이불로 몸을 감싸고 있었다.',
      ]);
      println();
      await chara.say_and_wait([
        sys_get_colored_callname(chara.id, 0),
        '，왜…… 내 사랑을 받아주지 않는 거야……',
      ]);
      println();
      await chara.say_and_wait(['분명 그 아름다운 추억들은, 우리 둘이 함께 만들어낸 것인데……']);
      println();
      await chara.say_and_wait(['정말…… 외로워……']);
      println();
      await printAndWait(['당신이 ', chara.sex, '를 눈치채지 못한 사이, 베개가 슬그머니 젖어 있었다']);
      println();
      sys_change_motivation(chara.id, -2) && (await waitAnyKey());
    }
  }

  /**
   * @author Mr.E.
   * @param {CharaTalk} me
   */
  async nice_weekend(me) {
    const my_marks = new MyEduMarks(),
      chara_id = get_random_entry(
        [19, 59].filter(
          (e) => get(`cflag:${e}:명예의전당`) > 0 && sys_check_awake(e),
        ),
      );
    if (chara_id !== undefined && get('cflag:0:위치') === 0) {
      const chara = get_chara_talk(chara_id);
      my_marks.nice_weekend = 0;
      await print_event_name(['즐거운 주말!'], chara);
      await printAndWait([
        chara.get_colored_name(),
        '의 동인작품 마감일이 다가오니,  ',
        me.get_colored_name(),
        '은(는) ',
        chara.sex,
        '의 작업실로 가 원고를 마감하러 갈 수 있다.',
      ]);
      printButton('트레이닝에 지장이 없도록, 이건 꼭 필요한 일이다 (동의)', 1);
      printButton('휴일은 휴일, 야근은 절대 안 돼! (거절)', 2);
      if ((await input()) === 1) {
        await printAndWait([
          '회사원으로서 마감 기한에 대한 혐오감은 이미 뼈 속 깊이 새겨져 있지만, 트레이너로서 담당을 돕는 것은 당연한 의무!',
        ]);
        await printAndWait([
          '드디어, 일요일이 끝나갈 무렵, ',
          me.get_couple_title(),
          '은 이 작품을 완성했다.',
        ]);
        const love = get(`love:${chara.id}`),
          relation = get(`relation:${chara.id}:0`);
        if (love >= 50 && love * (get('flag:극단적행위제한') || 1) >= relation) {
          await printAndWait([
            me.get_colored_name(),
            '은(는) 언제 잠들었는지 기억나지 않지만, 담당과 ',
            me.get_colored_name(),
            '이(가) 일을 했던 것만 기억난다. 아마 ',
            me.get_colored_name(),
            '이(가) 이런 건 정말 서툴러서, 어쩌면 ',
            me.get_colored_name(),
            '이(가)  너무 지쳐서 그랬을지도 모른다. 어쨌든 ',
            me.get_colored_name(),
            '이(가) 잠에서 깼을 때는 이미 월요일 새벽이었고, 몸에서는 과로로 인한 쑤시는 통증이 계속 느껴졌다.',
          ]);
          println();
          await printAndWait([
            '갑자기, ',
            me.get_colored_name(),
            '의 몸이 훨씬 무거워진 것 같은 느낌이 들었다.',
          ]);
          println();
          printButton('너무 피곤한가? 그럼 계속 쉬자 （이상을 발견하지 못함）', 1);
          printButton('잠이 덜 깼나? 조금 움직여 볼까（이상함을 확인）', 2);
          if ((await input()) === 1) {
            await printAndWait([
              me.get_colored_name(),
              '은(는) 몽롱한 상태로 ',
              chara.get_colored_name(),
              '의 작업실에서 깨어났다. 상대방은 이미  ',
              me.get_colored_name(),
              '의 저녁을 준비해 두었지만, 아쉽게도 ',
              me.get_colored_name(),
              '은(는) 여전히 의욕이 떨어진다...',
            ]);
            get_attr_and_print_in_event(
              0,
              undefined,
              0,
              JSON.parse(
                `{"체력":-${get('maxbase:0:체력') * 0.2},"기력":-${get('maxbase:0:기력') * 0.2}}`,
              ),
            ) && (await waitAnyKey());
            set('status:0:우마뾰이S', 1);
            await sys_rape_in_sleeping(chara.id);
            set('status:0:우마뾰이S', 0);
          } else {
            await printAndWait([
              me.get_colored_name(),
              '이(가) 몸을 좀 움직여 보니, 알고 보니 ',
              chara.get_colored_name(),
              '이(가) ',
              me.get_colored_name(),
              '의 곁에 엎드려 있었다.',
            ]);
            await printAndWait([
              '알몸으로 ',
              me.get_colored_name(),
              '의 곁에.',
            ]);
            await printAndWait([
              me.get_colored_name(),
              '이(가) 뭔가 말하려고 했는데, 눈앞이 캄캄해지고 허리가 시큰거린다.',
            ]);
            await chara.say_and_wait([
              sys_get_colored_callname(chara.id, 0),
              '벌써 깨어나셨나요? 그럼 두 번째 라운드를 시작해 볼까요❤️～',
            ]);
            set('base:0:체력', Math.floor(get('base:0:체력') / 2));
            set('base:0:기력', Math.floor(get('base:0:기력') / 2));
            set(
              `base:${chara.id}:체력`,
              Math.floor(get(`base:${chara.id}:체력`) / 2),
            );
            set(
              `base:${chara.id}:기력`,
              Math.floor(get(`base:${chara.id}:기력`) / 2),
            );
            await quick_into_sex(chara.id);
          }
        } else {
          if (love >= 50) {
            await printAndWait([
              '작품 내용은 트레이너와 ',
              chara.get_uma_sex_title(),
              '의 달콤한 일상이 담겨 있어 큰 호평을 받았다! 왜인지 트레이너의 얼굴이 ',
              me.get_colored_name(),
              '과(와) 닮은 것 같은데?（우마코인+150）',
            ]);
            add('flag:현재코인', 150);
          }
          if (relation >= 550) {
            await printAndWait([
              '판매가 끝난 후，',
              chara.get_colored_name(),
              '이(가) ',
              me.get_colored_name(),
              '에게 감사의 뜻으로 ',
              me.get_colored_name(),
              '에게 디저트를 사 주었다（획득 [에스프레소]×5）',
            ]);
            add('item:에스프레소', 5);
          }
        }
      }
    }
  }

  /** @param {CharaTalk} me */
  async big_sale(me) {
    let ret = (
      await print_name_and_show_kojo('상점가 세일', me, kojo, this.dict)
    )[0];
    if (ret !== 6) {
      const attr = new Array(5).fill(0);
      attr[ret - 1] = 20;
      sys_change_money(-10);
      if (
        getAddedCharacters()
          .filter(
            (cid) =>
              cid > 0 &&
              cid < max_chara_id &&
              get(`cflag:${cid}:육성턴수합산`) < 3 * 48,
          )
          .reduce((p, cid) => all_reward_in_event(cid, { attr }) || p, false)
      ) {
        await waitAnyKey();
      }
    }
    new MyEduMarks().big_sale = get_random_value(10, 15);
    return true;
  }

  /** @param {CharaTalk} me */
  async justice(me) {
    const dict = this.dict;
    dict.T_SEX = get('cflag:301:성별') === 1 ? '秘书' : '씨';
    dict.TOKINO = sys_get_callname(0, 301);
    dict.Y_A_TITLE = me.adult_sex_title;
    await print_event_name('불의를 보면 참지 못한다', me);
    switch ((await kojo['JUSTICE'](dict))[0]) {
      case 1:
        println();
        add('flag:현재코인', 100);
        await printAndWait('획득 100 우마코인!');
        break;
      case 2:
        println();
        add('item:우마뾰이Z', 1);
        await printAndWait('획득【우마뾰이Z】!');
        break;
      case 3:
        add('maxbase:0:기력', 100);
        if (
          all_reward_in_event(0, {
            base: JSON.parse('{"기력":200}'),
          })
        ) {
          await waitAnyKey();
        }
    }
  }
};
