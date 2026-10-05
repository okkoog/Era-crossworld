// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
const { get } = require('#/era-electron');
const { get_random_entry } = require('#/utils/list-utils');
const JaRace = require('#/i18n/ja-JP/timon/others/race');

module.exports = {
  ...JaRace,

  contestants_conjunction: '와(과) ',
  prepare_report_sim: '우마무스메들이 신발굽을 점검하고 있습니다...',
  get_prepare_report_high_mot: (chara) => [
    '제 1 인기, ',
    chara,
    '. 오늘은 컨디션이 매우 좋은 것 같군요!',
  ],
  get_prepare_report_low_mot: (chara) => [
    '제 1 인기, ',
    chara,
    '. 오늘은 컨디션이 그다지 좋지 않은 것 같군요!',
  ],
  get_prepare_report_normal_mot: (chara) => [
    '제 1 인기, ',
    chara,
    '. 오늘은 컨디션이 보통인 것 같군요!',
  ],

  prepare_record_sim: '트랙을 점검 중입니다...',
  get_prepare_record_default: (race, uma) => [
    '이곳에서 ',
    race,
    '이(가) 펼쳐지고 있습니다. 모든 ',
    uma,
    '들도 여러분에게 꿈을 선사하기 위해 최선을 다할 것입니다.',
  ],
  get_prepare_record_sats_sho: (chara, uma) => [
    chara,
    ', 무사히 게이트에 진입했습니다. 앞으로 명 ',
    uma,
    '가 될 것 같네요.',
  ],
  get_prepare_record_toky_yus: (uma) => [
    uma,
    '들의 일생에 단 한번뿐인 더비, 이제 곧 시작합니다.',
  ],
  get_prepare_record_kiku_sho: (race) => [
    '올해의 ',
    race,
    '은 그야말로 전국시대라 할 수 있겠네요. 강자들이 속출하고 있습니다.',
  ],
  get_prepare_record_takz_kin: (chara) => [
    '여러분의 꿈은 무엇인가요? 제 꿈은 ',
    chara,
    '이(가) 잘 달리는 것입니다.',
  ],

  beginning_report_sim: [
    '출발 게이트 점검 중...',
    '스타팅 건 점검 중...',
    '우마무스메 입장...',
    '출발!',
  ],
  get_beginning_report(race, gates, uma) {
    const buffer = [
      [
        [uma, '들, 게이트로 입장...'],
        ['모든 ', uma, ', 준비 완료됐습니다...'],
        '준비……',
        '——게이트 오픈!',
      ],
      [
        [uma, '들, 준비 완료...'],
        '언제든지 출발할 준비가 되었습니다...',
        '준비...',
        '——출발!',
      ],
      [
        '레이스가 곧 시작됩니다...',
        ['출주한 ', uma, ' 총 ', gates, '명……'],
        [get('flag:当前年').toString(), ' 년도 ', race, '……'],
        '——시작!',
      ],
    ];
    return get_random_entry(buffer);
  },
  get_first_report_no_bad_start: (uma) => [
    '레이스 시작, 모든 ',
    uma,
    '들이 동등하게 출발했습니다!',
  ],
  get_first_report: (first, last, uma) => [
    '레이스 시작, ',
    first,
    ' 선두 출발! 다른 ',
    uma,
    '들이 그 뒤를 따르고, 마지막으로 ',
    Math.random() < 0.5 ? '출발이 늦었던 ' : '뒤쳐진 ',
    last,
    '!',
  ],

  location_change_location_report_template: '%LANE% 진입',
  get_location_change_slope_report: (up_slope) =>
    `${up_slope ? '오르막' : '내리막'} 진입`,
  get_location_change_slope_over_report: (up_slope) =>
    `${up_slope ? '오르막' : '내리막'} 탈출`,
  location_change_report_template: '현재 %MESSAGE%',
  location_in_order_report_template: '현재 %LANE%',
  get_order_report: (chara, rank, no) => [
    '제 ',
    rank,
    ' 위의 ',
    no,
    ' 번 ',
    chara,
  ],

  lost_stamina_reports: [
    (contestants) => [...contestants, '，실속! '],
    (contestants) => [
      ...contestants,
      ', 페이스가 떨어집니다，더이상 속도를 유지할 수 없습니다! ',
    ],
    (contestants) => [...contestants, ', 속도가 느려졌습니다! '],
    (contestants) => [...contestants, ', 한계에 달했나요!? '],
  ],
  orgasm_reports: [
    (contestants) => [
      ...contestants,
      ', 얼굴이 빨개졌습니다. 온 힘을 다한 걸까요... ',
    ],
    (contestants) => [
      '증기가 ',
      ...contestants,
      '의 몸에서 끊임없이 뿜어져 나옵니다! ',
    ],
    (contestants) => [
      '무엇이 ',
      ...contestants,
      '의 승부복을 저렇게 젖게 만든 걸까요...? ',
    ],
    (contestants) => [
      ...contestants,
      ', 발걸음이 비틀렸지만 다행히 속도를 잃지는 않았습니다! ',
    ],
  ],
  loc_mind_nige_ex_reports: [
    (contestants) => [
      '도주 우마무스메의 앞에 다른 우마무스메가 있을 수 있을까! 달려라 ',
      ...contestants,
      '!',
    ],
    (contestants) => [
      '그 자리는 네 자리가 아니야! ',
      ...contestants,
      ', 질주로 경고하고 있다! ',
    ],
    (contestants) => [...contestants, '이(가) 선두 자리를 되찾고 있습니다! '],
    (contestants) => [
      ...contestants,
      ', 계속 가속하며 다른 우마무스메보다 더 앞서가려고 합니다! ',
    ],
  ],
  loc_mind_other_ex_reports: [
    (contestants) => [
      ...contestants,
      ', 자신이 있어야 할 자리로 힘차게 나아가라! ',
    ],
    (contestants) => [
      '그 자리는 ',
      contestants.length > 1 ? '너' : '너희들',
      '의 자리가 아니야! 힘내라 ',
      ...contestants,
      '!',
    ],
    (contestants) => [...contestants, ' 자리를 되찾기 위해 싸우고 있습니다!'],
  ],
  loc_mind_nige_over_take_reports: [
    (contestants) => [
      ...contestants,
      ', 주저 없이 선두를 향해 돌진하고 있습니다! ',
    ],
    (contestants) => [...contestants, ', 선두를 다투고 있다! '],
    (contestants) => [...contestants, '의 눈에는 오직 선두뿐! '],
  ],
  loc_mind_nige_speed_up_reports: [
    (contestants) => [
      ...contestants,
      ', 계속 가속하며 더 큰 격차를 벌리려 합니다! ',
    ],
    (contestants) => [...contestants, ', 더 멀리 도망가려 합니다! '],
    (contestants) => [
      '도망가. 세상의 끝까지 도망가라! ',
      ...contestants,
      '! ',
    ],
  ],
  loc_mind_other_quick_reports: [
    (contestants) => [
      ...contestants,
      ', 뒤처지는 것을 참지 못하고 필사적으로 추격하고 있습니다! ',
    ],
    (contestants) => [
      '너무 멀리 뒤쳐졌다앗! ',
      ...contestants,
      ', 필사적으로 추격 중! ',
    ],
    (contestants) => [...contestants, ', 거리를 단단히 유지하고 있습니다!'],
  ],
  loc_mind_other_relax_reports: [
    (contestants) => [
      ...contestants,
      ', 체력을 아끼는 듯, 꽤 대담한 전략입니다!! ',
    ],
    (contestants) => [
      ...contestants,
      '의 페이스가 느려졌습니다. 조심해야 합니다!! ',
    ],
    (contestants) => [...contestants, ', 방심은 큰 적입니다! '],
  ],
  blocked_reports: [
    (contestants) => [...contestants, ', 막혀버렸습니다. 정말 아쉽네요! '],
    (contestants) => [...contestants, ', 돌파 실패했습니다! '],
    (contestants) => [
      ...contestants,
      ', 마군에 갇혀 빠져나올 수 없습니다! ',
    ],
  ],
  temptation_reports: [
    (contestants) => [
      ...contestants,
      '의 페이스가 흐트러졌습니다. 조금 초조해하는 것 같습니다! ',
    ],
    (contestants) => [...contestants, ', 급해졌나요! '],
    (contestants) => [...contestants, ', 초조해졌다! '],
  ],
  temp_end_reports: [
    (contestants) => [
      ...contestants,
      ', 드디어 정상적인 페이스로 돌아왔습니다! ',
    ],
    (contestants) => [...contestants, ', 이제 좀 진정된 것 같습니다! '],
    (contestants) => [...contestants, ', 초조함에서 벗어났다앗! '],
  ],
  temp_continue_reports: [
    (contestants) => [
      ...contestants,
      ', 페이스가 계속 엉망입니다! 조금 좋지 않습니다! ',
    ],
    (contestants) => [
      ...contestants,
      ', 초조함에 깊이 빠져 헤어나올 수 없습니다! ',
    ],
    (contestants) => [
      '진정해 ',
      ...contestants,
      '! 기회를 놓치지 않도록 조심해야 합니다! ',
    ],
  ],
  temp_wrong_style_reports: [
    (contestants) => [
      ...contestants,
      ', 달리기 스타일을 바꾼 것 같습니다! ',
    ],
    (contestants) => [
      ...contestants,
      ', 왜 이렇게 필사적으로 돌진하고 있나요! ',
    ],
  ],

  get_compete_fight_report: (target, aim) => [
    aim,
    '을(를) 목표로, ',
    target,
    '이(가) 가속합니다!',
  ],
  get_final_push_report: (chara) => [
    chara,
    ' 라스트 스퍼트를 시작했습니다!',
  ],
  get_final_push_multi_report: (contestants, at_same_time) => [
    ...contestants,
    ` ${at_same_time ? '동시에 ' : '거의 동시에 '}라스트 스퍼트를 시작했습니다!`,
  ],
  get_final_push_follow_report: (contestants) => [
    ...contestants,
    ', 이제 라스트 스퍼트를 시작했습니다!',
  ],

  overtake_reports: [
    (top, over) => [over, '이(가) ', top, '을(를) 순식간에 앞질렀습니다! '],
    (top, over) => [
      over,
      '이(가) ',
      top,
      '와의 경쟁에서 우위를 점했습니다! ',
    ],
    (top, over) => [
      top,
      '을(를) 넘어선 ',
      over,
      '의 승리의 순간입니다! ',
    ],
    (top) => [top, '이(가) 앞서고 있습니다! 승리를 확정지을 수 있을까요! '],
  ],
  get_battle_start_report: (first, second) => [
    first,
    ' 대 ',
    second,
    ', 치열한 경합을 벌인다!',
  ],
  battle_reports: [
    { w: 0.6, h: (first, second) => [first, '! ', second, '!'] },
    {
      w: 0.3,
      h: (first, second) => [
        first,
        '과(와) ',
        second,
        '의 경합이 계속됩니다!둘 다 승리를 위해 최선을 다하고 있습니다! ',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '치열하다! 치열해!',
        first,
        '도 ',
        second,
        '도 도망칠 수 없습니다! ',
      ],
    },
    {
      w: 0.1,
      h: (first, second) => [
        '과연 ',
        first,
        '일까 ',
        second,
        '일까! 마지막 순간까지 결말이 보이질 않습니다! ',
      ],
    },
  ],
  top_reports: [
    (top) => [top, ' 선두 자리를 단단히 지키고 있습니다! '],
    (top) => ['빠르다 빠르다! ', top, ', 독주하고 있습니다!'],
    (top) => [top, ', 컨디션이 최고입니다! 계속해서 돌진할 건가요! '],
    (top) => ['계속해서 선두! 끝까지 ', top, '을(를) 아무도 이길 수 없는 건가요! '],
    (top) => [top, ', 곧 승리가 코앞입니다! '],
    (top) => [top, '! ', top, '! '],
  ],

  get_finish_report: (champion, bashin_behind) => [
    champion,
    '이(가) ',
    bashin_behind,
    ' 차이로 결승선을 통과했습니다!',
  ],
  get_finish_report_begin_race: (champion, bashin_behind) => [
    champion,
    '이(가) ',
    bashin_behind,
    ' 차이로 결승선을 통과했습니다!',
    Math.random() < 0.5
      ? '데뷔를 축하합니다!'
      : '앞으로의 활약이 기대됩니다!',
  ],

  ero_common_reports: [
    '으으으으으응……',
    '땀과 섞여 무언가가 흘러내리고 있어... 내 침인가❤️❤️❤️',
    '목소리…… 들리진 않을까…… 더 이상 헐떡거리면 안돼❤️❤️❤️',
    '부족해…… 이걸로는 완전 부족해❤️❤️❤️',
    '레이스 중이지만 지금 가버려도 상관없겠지, 아무도 모를 테니까——❤️❤️❤️',
    '아아❤️❤️❤️ 뜨거운 열기가 몸속을 휘젓고 있어. 더는 못 참겠어❤️❤️❤️',
  ],
  ero_team_reports: [
    '보여지고 있는 걸까❤️❤️❤️ 분명 엄청 눈에 띄겠지❤️❤️❤️',
  ],
  ero_breast_reports: [
    '계속 괴롭힘 당하는 젖꼭지❤️❤️❤️ 빨갛게 부어오르고 돌처럼 딱딱해졌어❤️❤️❤️',
  ],
  ero_penis_reports: [
    '너무 창피해❤️❤️❤️하지만 싸버리고 싶다는 생각이 도저히 멈추질 않아❤️❤️❤️',
    '카메라가 겨냥해진 채 달리는 하반신…… 싸버리고 싶어❤️❤️❤️부끄럽게 쳐다보이는 가운데 사정해서 다리가 풀려 일어설 수 없을 정도로 ❤️❤️❤️',
    '사정 직전의 냄새가 나. 너무 괴로워어어으읏 아아아아❤️❤️❤️',
    '응❤️❤️❤️……정액이 넘쳐흐를 것 같아……',
  ],
  ero_clitoris_reports: [
    '클리가 강제로 공기에 닿아 딱딱해졌어. 너무 창피해——❤️❤️❤️',
    '클리가 꽉 조여서 아프지만…… 너무 기분  좋아——축축한 애액이 줄줄 흘러내려❤️❤️❤️',
    '클리가 뻣뻣하게 서 있어. 마치 전기에 맞은 것처럼……❤️❤️❤️',
    '끈적끈적한 애액이 허벅지를 타고 흘러내릴 거야❤️❤️❤️ 다들 보고 있겠지……!',
  ],
  ero_vagina_reports: [
    '하읏, 이 장난감이 들어가자마자 안쪽이 조여와서 숨이 막혀, 으응 하……❤️❤️❤️',
    '다리와 보지가 너무 축축해❤️❤️❤️ 미끈미끈한 감촉이 너무 부끄러워!',
    '안 돼, 몸속에서 떨리는 느낌이 너무 강해❤️❤️❤️……!',
    '어떻게❤️❤️❤️이런 걸 끼고 만족할 수 있겠어아아앗——❤️❤️❤️',
  ],
  ero_vagina_dildo_reports: [
    '장난감❤️❤️❤️이 자궁을 세게 진동시키고 있어…… 그래도 아직 부족해……❤️❤️❤️',
    '응❤️❤️❤️ 깊숙이 찌르고 있어❤️❤️❤️ 꾸물거리면서…… 녹아버릴 것 같아～ ❤️❤️❤️',
    '삽입된 채로 달리니까, 신경 쓰지 않으려 할수록 더 느껴져❤️❤️❤️ 안 돼……!',
    '달리면서 딜도에 찔려 가버릴 것 같아으웃 오오❤️❤️❤️!',
  ],
  ero_anal_reports: [
    '뒷구멍이 찢어질 듯이 벌어져 있어❤️❤️❤️ 따끔거리며 경련을 일으키고 있어……❤️❤️❤️',
    '하앗❤️❤️❤️ 뒷구멍이 문질러져서 너무 괴로워어어엇❤️❤️❤️',
    '빠져나가면 절대 안돼❤️❤️❤️ 『배설』될까봐 드는 긴장감, 정말 심장에 안 좋네❤️❤️❤️',
  ],
  ero_tail_reports: [
    '꿈틀거리는 느낌이❤️❤️❤️ 너무 강렬해…… 마치 두 번째 꼬리 같아❤️❤️❤️',
  ],
  ero_in_body_reports: [
    '아우❤️❤️❤️ 달리는 동안 안의 장난감이 계속 움직여——❤️❤️❤️!',
  ],
  ero_multi_item_reports: [
    '응아아앗❤️❤️❤️ 온몸이 진동하는 느낌❤️❤️❤️——!',
  ],

  orgasm_common_reports: ['응아앗❤️❤️❤️아아아❤️❤️❤️——'],
  orgasm_breast_reports: [
    '젖꼭지가 딱딱해졌어…… 아❤️❤️❤️ 몸이 떨려………',
    '젖꼭지, 젖꼭지가 터질 듯이 딱딱해——으응 아아아앗❤️❤️❤️!',
  ],
  orgasm_penis_reports: [
    '아래가 너무 딱딱해…… 나오고 있어❤️❤️❤️……!',
    '!!!——더 많이 싸고 싶어——❤️❤️❤️!',
  ],
  orgasm_clitoris_reports: ['응아아❤️❤️❤️클리가 으스러질 것 같아❤️❤️❤️'],
  orgasm_vagina_reports: [
    '자궁이 찢어질 듯이 떨리고 있어——응아아아아아❤️❤️❤️——!',
  ],
  orgasm_vagina_dildo_reports: [
    '보지❤️❤️❤️ 딜도에 쑤셔져서 부어오를 것 같아——❤️❤️❤️',
  ],
  orgasm_anal_reports: [
    '여기서 나와버리면 인생이 ❤️❤️❤️ 안 돼❤️❤️❤️',
    '아~ ❤️❤️ ❤️뒷구멍이 뜨겁게 쑤셔지고 있어❤️❤️❤️들락날락거려~❤️❤️❤️',
  ],
  orgasm_bv_reports: [
    '가슴과 보지가 전부 장난감으로 채워져 있어❤️❤️❤️ 애액이 마구 뿜어져 나오고 있어❤️❤️❤️ 짐승처럼 신음할 것 같아❤️❤️❤️!',
  ],
  orgasm_va_reports: [
    '보지랑 뒷구멍이 딱딱한 물건에 찢어질 것 같아——응오오옷❤️❤️❤️ 온몸이 찢어질 것 같아❤️❤️❤️——!',
  ],

  in_race_pregnant_info:
    '【임신한 상태로 대회에 출주한 행위가 사회 각계에서 논란을 불러일으켰다】',
  in_race_orgasm_info:
    '【레이스 도중 공개적으로 절정에 이른 행위가 사회 각계에서 큰 파문을 일으켰다】',

  // [번역 완료] full_speed_push_reports
  full_speed_push_reports: [
    (contestants) => [...contestants, '이(가) 전력으로 스퍼트!'],
    (contestants) => [...contestants, '이(가) 마지막 승리를 향해 더욱 가속합니다!'],
    (contestants) => [
      '한계를 넘어라!',
      ...contestants,
      '은(는) 아직도 가속하고 있습니다!',
    ],
  ],
};
