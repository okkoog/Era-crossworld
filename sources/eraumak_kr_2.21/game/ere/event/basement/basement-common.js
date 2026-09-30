/**
 * @file 地下室地文
 * @author 露娜俘虏
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { basement_status_enum } = require('#/data/basement-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

const desc_replace_type = { chara_sex: 0, my_name: 1 };

const love_desc = [
    [{ t: desc_replace_type.chara_sex }, '에게는 따로 할 일이 있으며, 곧 떠날 듯하다'],
    [
      { t: desc_replace_type.chara_sex },
      '가 ',
      { t: desc_replace_type.my_name },
      '을(를) 뚫어지게 응시하고 있다. 아무래도 ',
      { t: desc_replace_type.chara_sex },
      '는 쉽게 떠나지 않을 모양이다',
    ],
    [
      { t: desc_replace_type.chara_sex },
      '가 ',
      { t: desc_replace_type.my_name },
      '을(를) 집요하게 노려보고 있다. 아무래도 ',
      { t: desc_replace_type.chara_sex },
      '는 쉽게 떠나지 않을 모양이다',
    ],
    [
      { t: desc_replace_type.chara_sex },
      '가 ',
      { t: desc_replace_type.my_name },
      '을(를) 향해 미소 짓고 있다. ',
      { t: desc_replace_type.my_name },
      '의 곁을 떠날 생각이 전혀 없어 보인다',
    ],
    [
      { t: desc_replace_type.chara_sex },
      '의 안색이 슬픔으로 일그러져 있다. ',
      { t: desc_replace_type.my_name },
      '의 곁을 떠날 생각은 티끌만큼도 없어 보인다',
    ],
  ],
  security_desc = [
    '일시적인 충동으로 인한 후회에 젖어 있다',
    '매우 긴장한 기색이며, 좀처럼 진정하지 못하고 있다',
    '안의 집착이 이미 깊게 뿌리를 내렸다',
    '의 결심은 결코 과소평가할 수 없어 보인다',
    '의 마음의 장벽은 그야말로 철통같다',
  ];

class CustomizedBase {
  /**
   * @param {number} hours
   * @param {number} minutes
   * @param {boolean} [base_12]
   */
  static get_cur_time(hours, minutes, base_12) {
    return `${base_12 ? hours % 12 || 12 : hours}시 ${minutes ? `${minutes}분` : '정각'}`;
  }

  constructor(chara_id) {
    this.id = chara_id;
  }

  get_this() {
    return this;
  }

  /**
   * 지하실 첫 진입 - 무인 버전
   */
  first_time() {
    era.print([
      '어느 정도의 시간이 흘렀을까, ',
      get_chara_talk(0).get_colored_name(),
      '은(는) 간소한 침대 위에서 가느다랗게 의식을 되찾았다……',
    ]);
    era.print('눈에 들어오는 것은 낯선 천장이다……');
  }

  /**
   * 지하실 첫 진입 환영
   */
  welcome() {
    const me = get_chara_talk(0),
      chara = get_chara_talk(this.id);
    if (LifeEventMarks.get_marks(0).b_start) {
      era.print([
        '어느 정도의 시간이 흘렀을까, ',
        me.get_colored_name(),
        '은(는) 간소한 침대 위에서 가느다랗게 의식을 되찾았다……',
      ]);
      era.print([
        '눈에 들어오는 것은 낯선 천장…… 그리고 미소 짓고 있는 ',
        chara.get_colored_name(),
        '의 모습이었다.',
      ]);
      era.print([
        '이제 ',
        me.get_colored_name(),
        '은(는) 이 사랑의 감옥에 갇힌 죄수가 되었고…… ',
        chara.get_colored_name(),
        '은(는) 유일한 간수가 되었다……',
      ]);
    } else {
      era.print(['어느 정도의 시간이 흘렀을까, ', me.get_colored_name(), '은(는) 천천히 깨어났다……']);
      era.print([
        '눈앞에는 여전히 낯선 천장…… 그리고 미소 짓는 ',
        chara.get_colored_name(),
        '이(가) 있다.',
      ]);
      era.print(['죄수와 유일한 간수가, 마침내 이 사랑의 덫 안에서 조우했다……']);
    }
  }

  /**
   * 지하실 기초 정보 표시 (경계도 및 독점욕 상황)
   * @param {boolean} [can_strike]
   */
  get_basement_info(can_strike) {
    const chara = get_chara_talk(this.id),
      my_name = get_chara_talk(0).get_colored_name();
    if (can_strike) {
      return [
        chara.get_colored_name(),
        '이(가) 방금 이곳으로 돌아왔다. 어쩌면 기습할 수 있는 절호의 기회일지도 모른다……',
      ];
    } else if (sys_check_awake(this.id)) {
      const life_marks = LifeEventMarks.get_marks(this.id),
        relation = era.get(`relation:${this.id}:0`),
        love = era.get(`love:${this.id}`);
      let love_level =
        (love >= 85) * 2 +
        (relation < (era.get('flag:극단적행위제한') || 1) * love);
      if (love_level === 3 && relation < 0) {
        love_level = 4;
      }
      return [
        chara.get_colored_name(),
        '은(는) 현재 ',
        security_desc[life_marks.b_s_level - 1],
        '……',
        ...love_desc[love_level].map((e) => {
          switch (e.t) {
            case desc_replace_type.chara_sex:
              return chara.sex;
            case desc_replace_type.my_name:
              return my_name;
          }
          return e;
        }),
        '……',
        LifeEventMarks.get_marks(this.id).b_status ===
        1 << basement_status_enum.fix
          ? '현재 지하실을 보강하는 중이다……'
          : '',
      ];
    } else {
      return [
        chara.get_colored_name(),
        era.get('status:0:우마뾰이S') ? '이(가) 깊은 ': '이(가) 고요한 ',
        '잠에 빠져 있다……',
      ];
    }
  }

  /**
   * 아부(flatter) 후의 반응
   */
  async flatter(supporter) {}

  /**
   * 기습 성공
   */
  async strike_success() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '의 기습이 성공했다! 지하실에서 무사히 탈출하였다!',
    ]);
  }

  /**
   * 기습 실패
   */
  async strike_fail() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '의 기습은 실패로 돌아갔다! 충격으로 인해 정신을 잃고 쓰러졌다!',
    ]);
  }

  /**
   * 정면 승리
   */
  async battle_success() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '이(가) ',
      get_chara_talk(this.id).get_colored_name(),
      '에게 시도한 반항이 성공하였다!',
    ]);
  }

  /**
   * 정면 패배
   */
  async battle_fail() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '의 반항은 실패하였다! ',
      get_chara_talk(this.id).get_colored_name(),
      '에 의해 제압당해 의식을 잃었다!',
    ]);
  }

  /**
   * 정면 승리 후 장치 해제 성공 및 탈출
   */
  async battle_escape() {
    await era.printAndWait([
      get_chara_talk(0).get_colored_name(),
      '은(는) 성공적으로 장치를 해제하고, 지하실에서 탈출하였다!',
    ]);
  }

  /**
   * 정면 승리 후 장치 해제 실패
   */
  async battle_prison() {
    const me = get_chara_talk(0);
    await era.printAndWait([
      '그러나 ',
      me.get_colored_name(),
      '은(는) 끝내 장치를 풀어내지 못했다……',
      { isBr: true },
      me.get_colored_name(),
      '은(는) 다시 붙잡혀 지하실 깊숙한 곳으로 끌려갔다……',
    ]);
  }

  /**
   * 탈출 시도 중 발각
   */
  find_escape(out_of_prison, s_level_up, is_back) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (out_of_prison) {
      era.print([
        me.get_colored_name(),
        '은(는) 막 ',
        is_back ? '돌아온 ': '깨어난 ',
        chara.get_colored_name(),
        '와 정면으로 마주치고 말았다!',
      ]);
    } else {
      era.print([me.get_colored_name(), '의 탈출 시도가 현장에서 발각되었다!']);
    }
    era.print([
      '격노한 ',
      chara.get_colored_name(),
      '이(가) ',
      me.get_colored_name(),
      '을(를) 억지로 끌고 되돌아갔다!',
    ]);
    if (s_level_up) {
      era.print([
        chara.get_colored_name(),
        '의 ',
        me.get_colored_name(),
        '에 대한 경계심이 한층 더 강해졌다……',
      ]);
    }
  }

  /**
   * 지하실 보강
   */
  fix_prison() {
    era.print([get_chara_talk(this.id).get_colored_name(), '이(가) 지하실의 설비를 보강하였다……']);
  }

  /**
   * 기상
   */
  get_up() {
    const chara = get_chara_talk(this.id),
      life_marks = LifeEventMarks.get_marks(this.id);
    if (life_marks.b_start) {
      era.print([
        '깊은 잠에서 깨어난 지하실의 주인, ',
        chara.get_colored_name(),
        '이(가) 마침내 모습을 드러냈다. ',
        get_chara_talk(0).get_colored_name(),
        '와 함께할 시간을 즐기려는 듯하다……',
      ]);
      life_marks.b_start = 0;
    } else {
      era.print([chara.get_colored_name(), '은(는) 천천히 눈을 떴다……']);
    }
  }

  /**
   * 귀환
   */
  back_basement() {
    const chara = get_chara_talk(this.id),
      life_marks = LifeEventMarks.get_marks(this.id);
    if (life_marks.b_start) {
      era.print([
        '긴 기다림 끝에, 이 지하실의 주인인 ',
        chara.get_colored_name(),
        '이(가) 마침내 나타났다. 이제 ',
        get_chara_talk(0).get_colored_name(),
        '과(와) 둘만의 시간을 보낼 생각인 모양이다……',
      ]);
    } else {
      era.print([chara.get_colored_name(), '이(가) 지하실로 돌아왔다……']);
    }
  }

  deep_sleep() {}

  eat_something() {}

  sleep() {}

  lure() {}

  /**
   * 강간(Rape) 시작
   */
  async rape(supporter) {
    if (supporter > 0) {
      await era.printAndWait([
        chara.get_colored_name(),
        '의 뒤를 따라, ',
        get_chara_talk(supporter).get_colored_name(),
        '이(가) 함께 ',
        get_chara_talk(0).get_colored_name(),
        '에게 천천히 다가왔다……',
      ]);
    } else {
      await era.printAndWait([
        get_chara_talk(this.id).get_colored_name(),
        '이(가) ',
        get_chara_talk(0).get_colored_name(),
        '에게 소리 없이 다가왔다……',
      ]);
    }
  }

  start_fixing() {}

  out() {}

  /**
   * 석방 요청 - 승낙
   */
  async ask_release_agree() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 미안함이 서린 얼굴로 ',
      me.get_colored_name(),
      '의 요청을 받아들였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      chara.get_colored_name(),
      '의 머리를 쓰다듬으며, 별일 아니라는 듯 미소 지어 보였다.',
    ]);
  }

  /**
   * 석방 요청 - 거절
   */
  async ask_release_reject() {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 엷은 미소를 띤 채 ',
      me.get_colored_name(),
      '의 요청을 부드럽게 거절하였다.',
    ]);
  }

  /**
   * 시간 확인 요청
   */
  async ask_time(date, hours, minutes) {
    const chara = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await chara.say_and_wait('지금이 몇 시냐구?');
    await era.printAndWait([
      chara.get_colored_name(),
      '은(는) 그저 생긋 웃으며 ',
      me.get_colored_name(),
      '을(를) 바라볼 뿐이었다.',
    ]);
  }

  /**
   * 구출 이벤트 - 실패
   */
  async rescue_fail(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    if (sys_check_awake(0)) {
      await print_event_name('마지막 순간의 실패', chara);
      await era.printAndWait([
        chara.get_colored_name(),
        '이(가) ',
        owner.get_colored_name(),
        '의 지하실을 돌파하였으나, 끝내 사랑하는 ',
        me.get_colored_name(),
        '을(를) 구출하는 데는 실패하였다……',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 절망적인 시선 속에서, ',
        chara.get_colored_name(),
        '은(는) ',
        owner.get_colored_name(),
        '에 의해 지하실 밖으로 쫓겨나고 말았다……',
      ]);
    } else {
      await era.printAndWait([me.get_colored_name(), '은(는) 격렬한 격투 소리에 잠에서 깨어났다.']);
      await era.printAndWait([
        '지하실 안은 엉망진창이었으나, 상처 하나 없는 ',
        owner.get_colored_name(),
        '이(가) 여전히 ',
        me.get_colored_name(),
        '를 향해 미소 짓고 있었다……',
      ]);
    }
  }

  /**
   * 구출 이벤트 - 빈집털이 성공
   */
  async rescue_sneak_success(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('영웅의 구출', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        owner.get_colored_name(),
        '이(가) ',
        sys_check_awake(owner_id) ? '자리를 비운 사이, ': '깊이 잠든 사이, ',
        chara.get_colored_name(),
        '이(가) 지하실에 잠입하였다. 곧이어 ',
        me.get_colored_name(),
        '을(를) 부축하여 유유히 현장을 빠져나갔다……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 비몽사몽한 와중에 자신이 어디론가 옮겨지고 있다는 느낌을 받았다.',
      ]);
      await era.printAndWait([
        '정신을 차려보니 그곳은 트레이닝실이었고, 눈앞에는 미소 짓는 ',
        chara.get_colored_name(),
        '이(가) 서 있었다.',
      ]);
    }
  }

  /**
   * 구출 이벤트 - 구출 후 자신의 지하실에 감금
   */
  async rescue_sneak_prison(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('호랑이 굴을 벗어나니……', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        owner.get_colored_name(),
        '이(가) ',
        sys_check_awake(owner_id) ? '자리를 비운 사이, ': '깊이 잠든 사이, ',
        chara.get_colored_name(),
        '이(가) 지하실에 잠입하였다. 곧이어 ',
        me.get_colored_name(),
        '을(를) 부축하여 유유히 현장을 빠져나갔다……',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 일상으로 돌아갈 수 있다고 안도한 찰나, ',
        chara.get_colored_name(),
        '은(는) ',
        me.get_colored_name(),
        '을(를) 또 다른 낯선 곳으로 데려갔다. 그리고 무거운 금속음이 울려 퍼졌다……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 비몽사몽한 와중에 자신이 어디론가 옮겨지고 있다는 느낌을 받았다.',
      ]);
      await era.printAndWait([
        '눈을 뜨니 여전히 지하실이었으나, 구조가 이전과는 확연히 달랐다. 그리고 그 앞에는 미소 짓는 ',
        chara.get_colored_name(),
        '이(가) 서 있었다.',
      ]);
    }
    await era.printAndWait('「철컥」', { fontSize: '1.5rem'});
  }

  /**
   * 구출 이벤트 - 공모 (두 명의 주인)
   */
  async rescue_join(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('하늘 아래 두 개의 태양', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '이(가)  ',
        owner.get_colored_name(),
        '의 지하실에 침입하여, ',
        owner.get_colored_name(),
        '과(와) 대치하였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 큰 싸움이 벌어질 것이라 예상했으나, ',
        chara.get_couple_title(),
        '은 놀랍게도 서로의 손을 맞잡고 타협하였다……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 몽롱한 의식 속에서 깨어났을 때, 지하실 안에는 자신과 ',
        owner.get_colored_name(),
        '외에 제3의 인물인 ',
        chara.get_colored_name(),
        '이(가) 함께 있는 것을 발견하였다.',
      ]);
    }
    await era.printAndWait([
      '이제 이 비좁은 지하실과 그 안에 갇힌 ',
      me.get_colored_name(),
      '에게는, 두 명의 주인이 생기고 말았다……',
    ]);
  }

  /**
   * 구출 이벤트 - 정면 승부 구출 성공
   */
  async rescue_battle_success(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('영웅의 구출', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '이(가) ',
        owner.get_colored_name(),
        '의 지하실에 난입하여, ',
        owner.get_colored_name(),
        '을(를) 바닥에 쓰러뜨렸다……',
      ]);
      await era.printAndWait([
        owner.get_colored_name(),
        '의 시선이 머무는 가운데, ',
        chara.get_colored_name(),
        '은(는) ',
        me.get_colored_name(),
        '을(를) 부축해 당당히 현장을 떠났다……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 의식이 흐릿한 가운데 운반되는 감각을 느꼈다.',
      ]);
      await era.printAndWait([
        '깨어보니 트레이닝실이었고, 눈앞에는 옷매무새가 다소 흐트러졌음에도 미소를 잃지 않은 ',
        chara.get_colored_name(),
        '이(가) 있었다.',
      ]);
    }
  }

  /**
   * 구출 이벤트 - 정면 승부 승리 후 자신의 지하실에 감금
   */
  async rescue_battle_prison(owner_id) {
    const chara = get_chara_talk(this.id),
      owner = get_chara_talk(owner_id),
      me = get_chara_talk(0);
    await print_event_name('호랑이 굴을 벗어나니……', chara);
    if (sys_check_awake(0)) {
      await era.printAndWait([
        chara.get_colored_name(),
        '이(가) ',
        owner.get_colored_name(),
        '의 지하실에 난입하여, ',
        owner.get_colored_name(),
        '을(를) 바닥에 쓰러뜨렸다……',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 일상으로 복귀할 수 있으리라 믿었던 순간, ',
        chara.get_colored_name(),
        '은(는) ',
        me.get_colored_name(),
        '을(를) 이끌고 다른 장소로 향했다. 이윽고 차가운 잠금 장치 소리가 들려왔다……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 의식이 흐릿한 가운데 운반되는 감각을 느꼈다.',
      ]);
      await era.printAndWait([
        '깨어보니 여전히 지하실이었으나 구조가 달랐고, 그곳에는 옷이 조금 구겨진 채 여전히 웃고 있는 ',
        chara.get_colored_name(),
        '이(가) 서 있었다……',
      ]);
    }
    await era.printAndWait('「철컥」', { fontSize: '1.5rem'});
  }

  handle_escape() {}
}

module.exports = CustomizedBase;