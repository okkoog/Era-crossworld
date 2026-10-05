// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/timon/mejiro/cum.js
// 대상 함수/속성: leave_misty
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');
const JaCum = require('#/i18n/ja-JP/timon/mejiro/cum');

module.exports = {
  ...JaCum,

  // Reused from EraUmaK 2.21 page/mejiro/call-of-mejiro.js.
  async misty_notify() {
    await printAndWait('……갑자기 안개가 당신들을 삼켰다……');
  },

  get_misty_info(chara, you, progress) {
    const ret = [];
    const lust = Math.max(get('base:0:性欲'), get(`base:${chara.id}:性欲`));
    ret.push([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 안개가 자욱한 거리에 서 있다……',
    ]);
    if (lust >= 7500) {
      ret.push(
        '주변에는 쌍을 이루어 음탕하게 즐기는 무리들로 가득하며, 방탕한 신음과 육체가 부딪히는 소리, 분출되는 물소리가 온 공간을 채우고 있다.',
      );
    } else if (lust >= 5000) {
      ret.push(
        '주변에는 얼굴이 흐릿한 연인들이 애무하며 몸을 흔들고 있고, 낮은 신음과 물소리가 끊이지 않는다.',
      );
    } else if (lust >= 4000) {
      ret.push(
        '주변에는 얼굴이 흐릿한 느긋한 커플들이 서로를 더듬으며 장난치고 있고, 가끔 신음과 끈적한 물소리가 들려온다.',
      );
    } else if (lust >= 3000) {
      ret.push(
        '주변에는 쌍을 이룬 파트너들이 서로 포옹하고 입을 맞추며, 가끔씩 속삭이는 사랑의 소리가 들린다.',
      );
    } else if (lust >= 2000) {
      ret.push(
        '주변에는 그림자 같은 여행객들이 쌍을 지어 지나가며, 가끔 모호한 속삭임이 들린다.',
      );
    }
    if (progress === 1) {
      ret.push(
        '앞쪽의 안개가 걷히기 시작하며, 밝고 깨끗한 거리가 보이기 시작한다.',
      );
    } else if (progress >= 0.66) {
      ret.push(
        '앞쪽의 안개가 조금 옅어졌고, 구름 사이로 햇살이 점점이 내리쬐고 있다.',
      );
    } else if (progress >= 0.33) {
      ret.push(
        '온 길은 이제 보이지 않는다. 오직 앞으로 나아갈 수밖에 없는 것 같다.',
      );
    } else if (progress === 0) {
      ret.push(
        '한 줄기 큰 길이 앞으로 곧게 뻗어 있지만, 어디로 이어지는지는 알 수 없다. 온 길에는 몽환적인 잿빛만이 남았다.',
      );
    }
    return ret;
  },

  async fail_to_escape(chara, you) {
    const ret = [];
    await printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 안개에 완전히 포위되었다……',
    ]);
    await printAndWait(
      '시야는 온통 안개뿐이며, 광기 어린 정사를 나누는 연인들의 모습뿐이다. 그들의 얼굴은 어렴풋이 당신들의 그림자를 닮아 있다.',
    );
    await printAndWait(
      '교접하는 소리가 다른 모든 소리를 덮어버리고, 숨 쉬는 공기 중에는 음란한 체취가 가득하다……',
    );
    if (get('base:0:性欲') >= 9000) {
      await printAndWait([
        you.get_colored_name(),
        '은(는) 뇌 속에서 피가 요동치는 소리를 들었다. 억눌렀던 이성은 음란한 망상의 공격 앞에 산산이 조각났다……',
      ]);
      await printAndWait([
        '곁에 있는 ',
        chara.get_colored_name(),
        ' 역시 뺨을 붉게 물들이고 다리를 꼬고 있는 것을 보며, ',
        you.get_colored_name(),
        '은(는) 결국 욕망이 자신을 지배하도록 내버려 두었다……',
      ]);
    } else {
      printButton('빠져든다 (「은총」+10)', 1);
      printButton('냉정을 유지하려 애쓴다 (체력&기력+50%)', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          you.get_colored_name(),
          '이(가) ',
          chara.get_colored_name(),
          '을(를) 바라보자, 그 눈동자 속에 욕망의 물결이 일렁인다……',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 스스로 욕망의 수렁에 발을 들였다.',
        ]);
        await printAndWait([
          chara.sex,
          '와 함께 끝없이 추락하고, 또 추락한다……',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '이(가) ',
          chara.get_colored_name(),
          '을(를) 바라보자, 그 눈동자 속에 욕망의 물결이 일렁인다……',
        ]);
        await printAndWait([
          you.get_colored_name(),
          '은(는) 당황하며 욕망의 수렁에서 벗어나려 발을 떼려 하지만,',
        ]);
        await printAndWait(
          '발걸음은 점점 더 깊이 빠져들 뿐이었고, 결국 추락하고 말았다……',
        );
      }
    }
    return ret;
  },

  // Partial reuse: the changed middle failure line stays on the current Japanese text.
  // [번역 대상] leave_misty — 함수/속성 전체 문맥에서 남은 원문을 번역
  async leave_misty(chara, you, vehicle, success) {
    if (success) {
      if (typeof vehicle === 'string') {
        await printAndWait([
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 안개를 벗어났고, ',
          vehicle,
          ' 옆에 있다는 사실을 깨달았다.',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          '과(와) ',
          chara.get_colored_name(),
          '은(는) 안개를 벗어났고, 버스 옆에 있다는 사실을 깨달았다.',
        ]);
      }
    } else {
      await printAndWait([
        you.get_colored_name(),
        '이(가) 정신을 차렸을 때, 이미 메지로 시티 밖의 벤치에 있었고 곁에는 잠든 ',
        chara.get_colored_name(),
        '이(가) 있었다.',
      ]);
      await printAndWait([
        chara.sex,
        'が目覚めたあと、ふたりはどこからともなく聞こえる満ち足りた笑い声のなか、メジロシティを離れた……',
      ]);
      await printAndWait([
        '……하지만 그날 이후로, ',
        chara.get_colored_name(),
        '은(는) 가끔 실체가 없는 속삭임을 듣게 되었다……',
      ]);
    }
  },

  async notify_misty() {
    await printAndWait('메지로 시티가 다시 안개에 휩싸였다……');
  },

  async notify_called(chara) {
    await printAndWait([
      chara.get_colored_name(),
      '은(는) 귓가의 속삭임 속에서 메지로의 부름을 들었다……',
    ]);
  },

  calling_tip: '메지로가 부르고 있다……',
  calling_not_chara_tip: '메지로는 이 사람을 부르지 않았다……',
  calling_god_tip:
    '메지로는 세 여신 아래에 있지 않을지 몰라도, 결코 그 위에 있지는 않다……',
  come_limited: '이번 주에는 메지로 시티를 찾을 수 없다……',

  bt_slow_forward: '신중하게 전진 (위험도 낮음, 성욕+++, 체력--)',
  bt_normal_forward: '평범하게 전진 (위험도 보통, 성욕++, 체력--)',
  bt_fast_forward: '대담하게 전진 (위험도 높음, 성욕+, 체력--)',
  bt_slow_search: '자세히 수색 (위험도 낮음, 성욕++, 체력---)',
  bt_normal_search: '평범하게 수색 (위험도 보통, 성욕++, 체력--)',
  bt_fast_search: '대충 수색 (위험도 높음, 성욕++, 체력-)',
  bt_rest: '멈춰서 휴식 (성욕++, 체력+)',
  bt_surrender: '저항을 포기한다 (일심동체❤️)',

  async come_in_mejiro_city(chara, you) {
    await printAndWait([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 메지로 시티에 들어갔다……',
    ]);
  },

  money_header_template: '현재「은총」：%MONEY%',
  print_city_info(chara, you) {
    print([
      you.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 깨끗한 거리에 서 있다.',
    ]);
    print('화창한 햇살 아래, 연인들끼리 거리를 오가고 있다.');
  },
  city_change_target_template:
    '서비스를 받는 대상 전환. 현재는: %NAME%',
  city_leave: '나가기',

  city_bt_beauty_salon: '「미용실」',
  city_bs_welcome: '어서 오세요! 미용 서비스를 받으실 분은 누구신가요?',
  city_bs_height_up_limit_tip: '더 이상 키울 수 없습니다',
  city_bs_height_down_limit_tip: '더 이상 키를 줄일 수 없습니다',
  city_bs_boob_up_limit_tip: '[폭유] 이상으로 키울 수 없습니다',
  city_bs_boob_down_limit_tip: '이미 평평합니다',
  city_bs_nipple_deeper: '유두 색소 침착（5「은총」）',
  city_bs_nipple_shallower: '유두 색소 침착 제거（5「은총」）',
  city_bs_clean_milk: '[모유체질] 제거（30「은총」）',
  city_bs_clean_milk_confirm:
    '이 작업은 당신이 한 사소한 개조도 없앨 텐데, 괜찮으신가요?',
  city_bs_get_milk: '[모유체질] 획득（30「은총」）',
  city_bs_re_virgin: '처녀 회복（20「은총」）',
  // Reused from EraUmaK 2.21 event/others/mejiro-kindness/cum-shop.js.
  city_bs_penis_bigger_man_template:
    '음경 확대（10「은총」，현재 %SIZE%）',
  city_bs_penis_smaller_man_template:
    '음경 축소（10「은총」，현재 %SIZE%）',
  city_bs_penis_smaller_futa_template:
    '여성화（15「은총」，현재 %SIZE%）',
  city_bs_uma_template: '변환: %UMA%（100「은총」，되돌릴 수 없음!）',

  city_bs_penis_bigger_limit_tip: '더 이상 확대할 수 없습니다',
  city_bs_penis_smaller_male_limit_tip: '더 이상 축소할 수 없다',
  city_bs_penis_smaller_female_limit_tip: '원래 아무것도 없다',
  city_bs_skin_shallower_limit_tip: '피부를 더 하얗게 할 수 없습니다',
  city_bs_skin_deeper_limit_tip: '피부색이 더 이상 어두워질 수 없습니다',
  city_bs_hair_color: '염색',
  city_bs_hair_color_confirm: '어떤 색으로 염색하시겠습니까?',
  city_bs_hair_color_current_suffix: '（현재 머리색）',
  city_bs_body_hair_color: '털색 변화（1「은총」）',
  city_bs_body_hair_color_current_suffix: '（현재 색）',
  city_bs_change_done: '네, 긴장 풀고 계세요. 금방 끝날 거예요~',
  city_bs_bye: '다음에 봐요~',

  city_bt_hospital: '「병원」',
  async city_hospital_start(waiter_say_cb) {
    await waiter_say_cb(
      '여기는 메지로 시티 병원입니다! 두통, 감기, 허리 통증, 손 떨림, 가슴 통증, 다리 떨림, 발 저림 등 모든 증상을——',
    );
    await waiter_say_cb('……완치 보장하지는 않습니다……');
    await waiter_say_cb('농담이에요. 무엇을 도와드릴까요?');
  },
  city_hp_hp_medicine_template: '「파워 필」%PRICE%',
  city_hp_hp_medicine_price_template:
    '（%PRICE%「은총」：추가 체력 상한 %NOW% → %NEXT%）',
  city_hp_tp_medicine_template: '「멘탈 크림」%PRICE%',
  city_hp_tp_medicine_price_template:
    '（%PRICE%「은총」：추가 기력 상한 %NOW% → %NEXT%）',
  city_hp_b_scan: '초음파 검사（-10「은총」）',
  async city_hospital_medicine(waiter_say_cb, medicine) {
    await waiter_say_cb(['네，', medicine, '하나~']);
    await waiter_say_cb('1주 뒤에 효과가 나타납니다~');
  },
  async city_hospital_b_scan(waiter_say_cb, father, you) {
    await waiter_say_cb('축하합니다. 아이의 성장 상태를 한번 보죠...');
    await printAndWait(
      [
        '＜기기 화면에 아이의 영상이 나타났다. ',
        you.get_colored_name(),
        '은(는) 왠지 모르게 흑백 화면 속에서',
        father.get_colored_name(),
        '의 얼굴이 보였다＞',
      ],
      { isParagraph: true },
    );
    await waiter_say_cb('정말 귀엽네요! 누군가를 닮은 것 같지 않나요?');
  },

  city_bt_massage: '「마사지 샵」',
  city_massage_welcome:
    '여긴 에센셜 오일 마사지 서비스를 제공합니다! 좀 쉬어 가실래요?',
  city_mg_get_talent: '특정 부위의 성적 능력을 강화（60「은총」）',
  city_mg_get_talent_limit_tip:
    '성적 능력을 향상시킬 수 있는 부위가 더 이상 없습니다',
  city_mg_trained_talent_price_template:
    '（25「은총」：%NOW% 부위 → %NEXT% 부위）',
  get_city_massage_get_talent: (target, talent) => [
    target.get_colored_name(),
    '은(는) ',
    talent,
    ' 을(를) 획득했다!',
  ],
  get_city_massage_upgrade_trained_talent: (target) => [
    target.get_colored_name(),
    '은(는) 마사지를 받고 나니 몸이 더 부드러워진 것 같다...',
  ],
  city_mg_bye: '좋은 여행 되세요~',

  city_bt_library: '「도서관」',
  city_library_welcome:
    '메지로 시티 대도서관에 오신 것을 환영합니다! 어떤 책을 빌리시겠습니까?',
  city_lb_self_get_im_template:
    '《키류인 가문 트레이너 백서》（10「은총」→ %NAME% [강철의의지] 습득 ）',
  city_lb_self_rm_im_template:
    '《나와 나의 우마무스메 아내》（5「은총」→ %NAME% [강철의의지] 상실 ）',
  city_lb_chara_get_im_template:
    '《성스러운 한 걸음 반》（5「은총」→ %NAME% [강철의의지] 습득）',
  city_lb_chara_rm_im_template:
    '《둔한 남자도 단번에 사로잡는다! 연애의 비결》（10「은총」→ %NAME% [강철의의지] 상실）',
  city_lb_update_abl_limit:
    '《성기술 향상 입문서——색욕의 고리 출판사 출판》（66「은총」）',
  async handle_city_library(target, get_or_rm, iron_mind, unlimit) {
    if (unlimit) {
      await printAndWait('……뭘 읽을까?');
    } else if (get_or_rm) {
      await printAndWait([
        target.get_colored_name(),
        ' 획득: ',
        iron_mind,
        '!',
      ]);
    } else {
      await printAndWait([
        target.get_colored_name(),
        ' 상실: ',
        iron_mind,
        '!',
      ]);
    }
  },
  city_lb_bye: '다음에 또 방문해 주세요~',

  city_bt_arcade: '「경품 가게」',
  city_ac_welcome:
    '메지로 시티에 오신 것을 환영합니다! 여기서 행운을 시험해 보시겠습니까?',
  city_ac_confirm: '2「은총」을 사용해 추첨하겠습니까?',
  async handle_ac_grand_prize(waiter_say_cb) {
    await waiter_say_cb('대~박~이~ 나왔~어요~');
    await waiter_say_cb('10배로 드립니다!');
    await printAndWait('「은총」20 획득!');
  },

  city_bt_newspaper: '「신문사」',
  async city_newspaper_start(waiter_say_cb) {
    await waiter_say_cb('어서오세요!');
    await waiter_say_cb(
      '메지로 시티 신문사는 귀하의 명예를 회복하고 명성을 널리 알리는 데 도움을 드릴 수 있습니다',
    );
  },
  city_ns_welcome: '무엇을 도와드릴까요?',
  city_ns_button_template: '%PRICE%「은총」→ %HONOUR1%～%HONOUR2% 명성',
  city_ns_result_template:
    '네，%HONOUR% 명성, 바로 처리해 드리겠습니다~',
  city_ns_bye: '이용해 주셔서 감사합니다!',

  city_bt_bank: '「은행」',
  city_bn_start: '어서 오세요~',
  city_bn_welcome: '인출 업무를 처리하시겠습니까?',
  city_bn_button_template:
    '%PRICE%「은총」→ %MONEY1%～%MONEY2% 우마코인',
  city_bn_result_template:
    '네, 총 %MONEY% 우마코인，바로 인출해 드리겠습니다~',
  city_bn_bye: '안녕히 가세요~',

  city_bt_gov: '「시청」',
  async handle_gov(mayor) {
    await mayor.say_and_wait('메지로 시티에 오신걸 환영합니다.');
    await mayor.say_and_wait('무엇을 도와드릴까요?');
    printButton('제발 살려주세요……', 1);
    printButton('괜찮아요', 2);
    if ((await input()) === 1) {
      print(
        '（이 작업은 되돌릴 수 없으며, 메지로 시티의 스타일을 영구적으로 변경합니다!）',
        { color: 'red' },
      );
      printButton('확인', 1);
      printButton('취소', 2);
      if ((await input()) === 1) {
        await mayor.say_and_wait('알겠습니다.');
        await mayor.say_and_wait(
          '다음에 방문하실 때, 메지로 시티는 원하시는 모습으로 변해 있을 것입니다.',
        );
        await mayor.say_and_wait('떠나기.');
        return true;
      }
    }
    await mayor.say_and_wait(
      '귀하와 일행분들이 메지로 시티에서 즐거운 시간 보내시길 바랍니다~',
    );
    return false;
  },
  async city_notify_misty() {
    await printAndWait(
      '이 가게를 나서자, 눈앞에는 거리가 아닌 교외의 풍경이 펼쳐져 있었다',
    );
    await printAndWait(
      '뒤를 돌아보니, 메지로 시티는 다시 안개에 휩싸여 있었다……',
    );
  },
};
