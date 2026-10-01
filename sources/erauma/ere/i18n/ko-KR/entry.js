// ko-KR system-first language pack (Stage 1)
// Kojo/Timon and untranslated data inherit from ja-JP on purpose.
module.exports = class extends require('#/i18n/ja-JP/entry') {
  language = '한국어';

  speed = '스피드';
  endurance = '스태미나';
  strength = '파워';
  toughness = '근성';
  intelligence = '지능';

  hp = '체력';
  tp = '기력';
  abbr_hp = '체';
  abbr_tp = '기';

  ui_mot = '의욕';
  mot_0 = '절부조';
  mot_1 = '부조';
  mot_2 = '보통';
  mot_3 = '호조';
  mot_4 = '절호조';

  a_g_grass = '잔디';
  a_g_dirt = '더트';
  a_d_short = '단거리';
  a_d_mile = '마일';
  a_d_medium = '중거리';
  a_d_long = '장거리';
  a_s_nige = '도주';
  a_s_senko = '선행';
  a_s_sashi = '선입';
  a_s_okimi = '추입';
  adapt_template = '%ADAPT% 적성';

  edu_0 = '주니어급';
  edu_1 = '클래식급';
  edu_2 = '시니어급';
  pre_edu = '입학 예정';
  a_edu_0 = '주니어';
  a_edu_1 = '클래식';
  a_edu_2 = '시니어';

  oot_0 = '육성 완료';
  oot_1 = '명예의 전당';

  honour_m = '실격';
  honour_0 = '신입';
  honour_1 = '숙련';
  honour_2 = '중견';
  honour_3 = '엘리트';
  honour_4 = '전설';

  title_0 = '트레이너';
  title_1 = '우마무스메';
  title_2 = '성노예';
  title_3 = '임신용 몸';

  ui_love = '연모';
  ui_love_template = '연모: %LOVEINFO%';
  get_ui_colored_love = (love) => ['연모: ', love];
  love_u = '?';
  love_0 = '평상';
  love_1 = '은근함';
  love_2 = '두근거림';
  love_3 = '애욕';
  love_4 = '열애';
  love_5 = '좋은 인연';
  love_6 = '의존';

  ui_relation = '호감';
  ui_relation_template = '호감: %RELATIONINFO%';
  get_ui_colored_relation = (relation) => ['호감: ', relation];
  relation_u = '?';
  relation_0 = '실망';
  relation_1 = '의심';
  relation_2 = '냉담';
  relation_3 = '양호';
  relation_4 = '열의';
  relation_5 = '호의';
  relation_6 = '친밀';
  relation_7 = '불변';

  cl_new_year = '신년';
  cl_valentine = '밸런타인';
  cl_palace = '명예의 전당 주간';
  cl_fans = '팬 감사제';
  cl_temple_fair = '축제';
  cl_halloween = '핼러윈';
  cl_christmas = '크리스마스';

  tt_disclaimer = '면책 사항';
  tt_version_template = '버전: v%VERSION%';
  tt_version_resource = '대응 리소스 팩:';
  tt_new_game = '새 게임';
  tt_load_game = '불러오기';
  tt_achieve = '업적';
  tt_chara_achieve = '캐릭터 업적';
  tt_help = '튜토리얼';
  tt_copyrights = '크레딧';
  tt_links = '관련 링크:';
  tt_link_release = 'EraUma 배포 페이지';
  tt_link_desk_engine = 'EraElectron 엔진(PC판) 배포 페이지';
  tt_link_app_engine = 'ere.app 엔진(Android판) 배포 페이지';
  tt_link_community = 'ERA 트레센 학원(Discord 커뮤니티)';
  tt_link_wiki = 'Wiki(설명/설정/대사 작성 가이드 등)';

  cr_title_copyrights = '크레딧';
  cr_header_engine = '엔진';
  cr_header_developer = '개발';
  cr_header_art = '아트';
  cr_header_translate_reference = '번역 참고';
  cr_header_kojo = '대사';
  cr_header_test = '테스트';
  cr_header_special_thanks = '스페셜 땡스';

  nt_ask = '관련 메모를 볼까?';
  nt_no = '나중에 타이틀에서 확인';

  ui_comma = ', ';
  ui_comma2 = ' · ';
  ui_period = '.';
  ui_exclamation = '!';
  ui_conjunction = '와 ';
  ui_ellipses = '……';
  ui_semicolon = '; ';
  ui_back = '뒤로';
  ui_back_title = '타이틀로';
  ui_achieve_title = '새 업적 획득!';
  ui_yes = '확인';
  ui_no = '취소';
  ui_yes2 = '예';
  ui_no2 = '아니오';
  ui_reset = '초기화';
  ui_skip = '건너뛰기';
  ui_nothing = '없음';
  ui_money_template = '%MONEY% 우마코인';
  ui_get_date = (year, month, week) => [year, '년 ', month, '월 ', week, '주차'];
  ui_date_without_year_template = '%MONTH%월 %WEEK%주차';
  ui_month_template = '%MONTH%개월';
  ui_et_prev = '이전 항목';
  ui_et_next = '다음 항목';
  ui_pg_prev = '이전 페이지';
  ui_pg_next = '다음 페이지';
  ui_ch_prev = '이전 캐릭터';
  ui_ch_next = '다음 캐릭터';
  ui_pagination_template = '%CURR% / %TOTAL% 페이지';
  ui_default = '기본값';
  ui_game_over = 'GAME OVER';
  ui_all = '전체';
  ui_increase = '상승';
  ui_decrease = '하락';
  ui_end = '종료';
  ui_cancel = '그만두기';
  ui_signature_result = '주요 우승 경력';
  ui_agree = '동의';
  ui_disagree = '거부';

  ui_get_pt_template = '스킬 Pt %PT% 획득!';
  ui_train_level_up_template = '%ATTR% 트레이닝 숙련도가 올랐다!';
  ui_love_level_up = '이제 되돌아갈 수 없다……';
  edu_aim_done = '달성!';
  ui_time_flow = '【시간이 흐르기 시작한다】';
  ui_new_week = '【새로운 한 주가 시작되었다】';

  ui_hd_no_save = '세이브 데이터 미로드';
  get_ui_hd_location = (location) => ['현재: ', location];
  get_ui_hd_honour = (honour) => ['명성: ', honour];
  get_ui_hd_money = (money, income = []) => [money, ...income, ' 우마코인'];
  ui_billing_title_start = '정산:';
  ui_hd_current_race = '이번 주 레이스';
  ui_hd_races = '전체 보기';

  ui_no_target = '상대가 선택되지 않음';
  ui_select_hd_info_template = '정보를 볼 캐릭터 선택 (%COUNT%)';
  ui_select_hd_interact_template = '상대 선택 (%COUNT%)';
  ui_select_hd_name = '이름';
  ui_select_hd_score = '평가';
  ui_select_hd_races = '전적';
  ui_select_hd_edu = '육성';
  ui_select_hd_playthrough = '회차';


  // Stage 3: common UI / title / homepage / training.
  ui_rl_mark_with_value = '%MARK% (%VAL%)';

  ui_love_icon = '❤️';
  ui_relation_icon = '🤝';
  celebration_template = '[%CELEBRATION%]';

  tt_disclaimer_content = [
    '1. 이 게임은 개발자의 자기만족과 코딩 연습을 위해 제작되었다. 저속한 취향의 산물이며 영리 목적은 없다.',
    { isBr: true },
    '2. 이 게임에는 다수의 R18 성적 묘사가 포함된다. 다인, 조교, 가벼운 SM, 비합의 성행위, 근친상간 등이 등장할 수 있다. 강제 NTR, 과도한 SM, 유혈, R18G 등은 등장하지 않는다.',
    { isBr: true },
    '3. 설계와 내용은 era 및 여러 작품의 요소를 조합했다. era 계열 플레이어 또는 텍스트 어드벤처 애호가를 대상으로 하며, 일반 플레이어 특히 미성년자의 플레이는 엄격히 금지한다.',
    { isBr: true },
    '4. 사용 소재에는 개발자 제작물, 인터넷 수집물, 협력자 제공물이 포함된다. 개발자와 협력자는 서로 다른 지역·배경·국적에 속하며 경제적 관계도 없다.',
    { isBr: true },
    '5. 공식 배포처는 ',
    {
      content: '호스팅 저장소',
      url: 'https://gitgud.io/umaera/erauma',
    },
    '뿐이다. 게임의 성격상 미성년자가 접할 수 있는 공개 장소에서의 전시·확산을 금지하며, 영리 목적(판매/경품 등) 및 공개 활동(방송 등)에 사용하는 것도 금지한다.',
    { isBr: true },
    '6. 출처를 밝히고 영리 목적이 없으며, 본 면책 조항과 ',
    {
      content: 'GPL 2.0 only 오픈소스 라이선스',
      fontWeight: 'bold',
      url: 'https://gnu.ac.cn/licenses/old-licenses/gpl-2.0.html',
    },
    ' 및 ',
    {
      content: '구상 창작 규약',
      fontWeight: 'bold',
      url: 'https://gitgud.io/umaera/erauma/-/wikis/LICENSE',
    },
    '을 준수하는 한 수정 및 2차 개발(파생판은 마개조판이라 부름)을 허용한다. 이 허가는 모든 플레이어에게 직접 부여되므로 개발자의 개별 동의는 필요 없지만, 타이틀 등에서 마개조판임을 명시해 원본과 구분해야 한다.',
    { isBr: true },
    '7. 본 선언의 해석 권한은 개발자에게 있으며 업데이트로 내용이 바뀔 수 있다. 항상 최신판을 따른다.',
    { isBr: true },
    '8. 여기까지 반복해서 적었다. 대담한 생각이 있다면 지금 창을 닫고 삭제하라. 삭제하지 않는다면 내용을 이해하고 준수하는 것으로 본다. 준수하지 않아 발생하는 사고와 법적 책임은 개발자와 무관하다.',
  ];
  tt_disclaimer_accept =
    '위 8개 조항을 읽고 이해했다. 내 책임으로 삭제하지 않고 플레이한다.';
  tt_disclaimer_reject = '남녀는 따로 둬라! 그만한다!';
  tt_birthday_notify = (birth_list) => ['오늘은 ', ...birth_list, '의 생일!'];

  cr_header_susai = '주최';
  cr_header_architecture = '설계';
  cr_header_tr_repo = "Trainers' Legend G 번역(중국어)";
  cr_header_tr_wiki = '우마무스메 중국어 Wiki';
  cr_kojo_tip = '담당 캐릭터 ID 최솟값 순';
  cr_thanks_detail = '감사 상세';
  cr_kojo_suffix_template = '(%SUFFIX%)';
  cr_kojo_suffix_temporary = '임시';
  cr_kojo_suffix_part = '일부';
  cr_timon_recruit = '모집 지문';
  cr_timon_daily = '일상 지문';
  cr_timon_edu = '육성 지문';
  cr_timon_love = '연모 지문';
  cr_timon_ero = '조교 지문';
  cr_timon_basement = '지하실 지문';
  cr_timon_special = '특수 캐릭터(임시)';
  cr_timon_mejiro = '메지로의 부름';
  cr_timon_random = '랜덤 이벤트';
  cr_timon_guide = '초보자 가이드';
  cr_timon_guide_b = '지하실 가이드';
  cr_header_image = '조교 스탠딩 CG';
  cr_image_common = '공용 스탠딩 CG';
  cr_image_gif = '지시 애니메이션';
  cr_header_lib_en_us = '영어 현지화';
  cr_header_lib_ru_ru = '러시아어 현지화';
  cr_header_lib_ja_jp = '일본어 현지화';
  cr_header_kojo_make = '구상 제작';
  cr_header_community_management = '커뮤니티 운영';
  cr_header_community_assistant = '커뮤니티 협력';
  cr_umamusme_pretty_derby = '우〇무스메 프〇티 더〇비';

  tk_speak_border = ['「', '」'];
  tk_think_border = ['(', ')'];
  tk_past_border = ['(', ')'];
  tk_unknown = '???';

  ui_on = 'ON';
  ui_off = 'OFF';
  ui_too_long_template =
    '(표시 폭은 전각 %WIDTH%자 또는 반각 %WIDTH*2%자를 넘을 수 없습니다. 다시 입력해 주세요!)';
  ui_invalid_value = '-';
  ui_unknown_value = '?';

  get_ui_reward_header = (chara) => [chara, '의 능력이 다음과 같이 변했다:'];
  get_ui_change_attr = (attr, change_mark, change_val) => [
    attr,
    ' ',
    change_mark,
    ' ',
    change_val,
  ];
  get_ui_add_skills = (chara, skills) => [chara, '이(가) ', ...skills, '을(를) 익혔다'];
  get_ui_change_motivation = (chara, motivation) => [
    chara,
    '의 의욕은 현재 ',
    motivation,
  ];
  get_ui_change_relation = (chara, target, change_mark, val, result) => [
    chara,
    '의 ',
    target,
    '에 대한 호감이 ',
    change_mark,
    ' ',
    val,
    '! 현재: ',
    result,
  ];
  get_ui_find_betrayed = (chara, you) => [
    you,
    '의 불성실함에 ',
    chara,
    '은(는) 몹시 화가 났다……',
  ];
  get_ui_change_love = (chara, you, change_mark, val, result) => [
    chara,
    '의 ',
    you,
    '에 대한 연모가 ',
    change_mark,
    ' ',
    val,
    '! 현재: ',
    result,
  ];
  get_trigger_love_event = (chara) => [
    '(',
    chara,
    '과(와)의 관계는 한 걸음 더 나아갈 수 있을 것 같다……)',
  ];
  get_ui_hurt_uma = (chara) => ['【', chara, '이(가) 부상을 입었다!】'];
  get_ui_hurt_uma_plus = (chara) => ['【', chara, '의 부상이 악화됐다!】'];
  get_ui_hurt_tired_uma = (chara) => [
    '【',
    chara,
    '은(는) 피로한 상태에서 더 심한 부상을 입었다!】',
  ];
  get_ui_add_titles = (chara) => ['【', chara, '은(는) 새로운 칭호를 얻었다!】'];
  get_ui_too_tired = (chara) => [chara, '은(는) 완전히 지쳐 있다……'];
  get_ui_bankrupt_warn = (you) => ['【', you, '이(가) 파산할 것 같다!】'];
  get_ui_ignore_event_punish = (chara, you) => [
    '【',
    you,
    '이(가) 신경 써주지 않아 ',
    chara,
    '은(는) 조금 실망했다】',
  ];
  get_ui_ignore_event_punish2 = (chara, you) => [
    '【',
    you,
    '이(가) 신경 써주지 않아 ',
    chara,
    '은(는) 크게 실망했다】',
  ];
  get_ui_edu_end = (chara) => ['【', chara, '의 육성이 끝났다】'];
  get_ui_edu_aim_summary_header = (chara) => [chara, '의 육성 목표 달성 현황:'];
  get_ui_edu_ignore_aim = (chara, count) => [
    chara,
    '의 육성 이벤트를 ',
    count,
    '개 놓쳤다……',
  ];

  ui_hd_income_template = '(%INCOME%)';
  ui_billing_invest_template = '%INCOME% (%CHARA% 투자 수익)';
  ui_billing_bonus_template = '%INCOME% (월급+보너스)';
  ui_billing_salary_template = '%INCOME% (월급)';
  ui_billing_borrow_template = '%INCOME% (%CHARA%%MAIN% 남은 기간 %TIMER%주)';
  ui_billing_borrow_main = '·메인';
  ui_billing_slave_template = '%INCOME% (%CHARA% 헌금)';

  get_ui_cur_chara_info = (
    title,
    name,
    palace,
    growth,
    motivation,
    edu,
    race,
  ) => [
    '현재 캐릭터: ',
    ...title,
    name,
    palace,
    ' (',
    growth,
    ')',
    ...motivation,
    edu,
    ...race,
  ];
  ui_palace_template = '[%PALACE%]';
  get_ui_motivation = (motivation) => [this.ui_mot, '·', motivation];
  ui_edu_template = '%EDU%';
  get_ui_race_indicator = (race, delta) => [
    '(',
    race,
    '까지 ',
    delta,
    '주)',
  ];
  get_ui_curr_race_indicator = (race) => ['(이번 주 개최: ', race, ')'];

  ui_select_clear = '상대 선택 해제';
  ui_select_no_character = '팀에 다른 멤버가 없다';
  ui_select_event_filter_tooltip =
    '* 버튼이 빨간 캐릭터는 이번 주 주목할 이벤트가 있다';
  ui_select_event_filter_template = '특별 이벤트가 있는 캐릭터만 [%STATUS%]';
  ui_select_order_marks = ['▼', '▲'];

  ui_change_image = '스탠딩 CG 변경';
  ui_show_team = '팀 보기';
  ui_train = '트레이닝';
  ui_self_train = '자율 트레이닝';
  ui_goto_race = '레이스 출주';
  ui_register_race = '출주 등록';
  ui_goto_sex = '밤의 권유';
  ui_next_turn = '한 주를 끝낸다';
  ui_office_study = '학습 지도';
  ui_office_prepare = '레이스 전 준비';
  ui_talk = '대화';
  ui_office_gift = '선물하기';
  ui_self_cook = '식사';
  ui_office_cook = '함께 식사';
  ui_self_rest = '잠깐 휴식';
  ui_office_rest = '함께 휴식';
  ui_self_game = '게임';
  ui_office_game = '함께 게임';
  ui_change_take_care = '돌볼 상대 변경';
  ui_ask_take_care = '돌봄 부탁하기';
  ui_self_update = '자신의 성기술 올리기';
  ui_ero_update = '서로의 성기술 올리기';
  ui_borrow_money = '돈 빌리기';
  ui_celebration_template = '함께 %CELEBRATION% 축하';
  ui_birthday = '생일 축하';
  ui_check_love = '연모 이벤트 다시 발생';
  ui_basement_me = '광애를 구한다';
  ui_recruit = '트레이닝장으로(모집)';
  ui_trainer_office = '트레이너실로';
  ui_clinic = '보건실로';
  ui_god_together = '함께 삼여신상으로';
  ui_god_alone = '삼여신상으로';
  ui_atrium_together = '함께 중정으로';
  ui_atrium_alone = '중정으로';
  ui_rooftop_together = '함께 옥상으로';
  ui_rooftop_alone = '옥상으로';
  ui_chairman_office = '이사장실로';
  ui_visitors = '응접실로';
  ui_school_shop = '수상한 매점으로';
  ui_out_together = '함께 외출';
  ui_out_alone = '외출';
  ui_info_page = '캐릭터 정보';
  ui_storage = '소지품';
  ui_races = '레이스 기록';
  ui_office_filter_template = '트레이너실 행동 제외 [%STATUS%]';
  ui_out_filter_template = '외출 행동 제외 [%STATUS%]';
  ui_save_game = '저장';
  ui_load_game = '불러오기';

  ui_foreign_study_template = '%LAN% 학습';
  ui_foreign_rest = '요양';
  ui_foreign_train = '적성 트레이닝';
  ui_foreign_travel = '관광';

  ui_act_event_tip = '이 행동에는 이벤트가 있다';
  ui_loc_npc_tip_template = '이 장소에 %COUNT%명';
  ui_loc_back_tip = '돌아갈 때 이벤트가 있다';
  ui_loc_event_tip = '이 장소에는 이벤트가 있다';
  ui_loc_celebration_tip_template = '이 장소의 %COUNT%명에게 기념 이벤트';

  ui_cost_chara_stamina_tip_template =
    '담당의 체력이 부족하다(필요: %STAMINA%)';
  ui_cost_chara_time_tip_template = '담당의 기력이 부족하다(필요: %TIME%)';
  ui_cost_you_stamina_tip_template = '체력이 부족하다(필요: %STAMINA%)';
  ui_cost_you_time_tip_template = '기력이 부족하다(필요: %TIME%)';
  ui_cost_money_tip_template = '우마코인이 부족하다(필요: %MONEY%)';
  ui_foreign_lan_max_tip_template = '%LAN%은(는) 이미 충분히 숙달했다';
  ui_foreign_rest_max_tip = '몸은 이미 건강을 되찾았다';
  ui_foreign_train_max_tip = '코스에는 완전히 적응했다';
  ui_celebration_remote_tip = '원격 상태에서는 축하할 수 없다';

  ui_moon_well_partner_tip = '곁에 아직 사람이 있다';

  ui_rec_chara_info = '개인 정보';
  ui_rec_edu_info = '육성 미리보기';
  ui_rec_exit = '그대로 떠난다';

  ui_rec_c_info_template = '%NAME%의 개인 정보';
  ui_rec_c_body_template = '%NAME%의 신체 치수';
  ui_rec_c_talent_template = '%NAME%의 성격 특성';
  ui_rec_c_image_template = '%NAME%의 조교 스탠딩 CG';
  ui_rec_e_train_template = '%NAME%의 트레이닝 보정';
  ui_rec_e_train_buff_template = '%ATTR%: +%BUFF%%';
  ui_rec_e_adapt_template = '%NAME%의 각질 적성';
  ui_rec_e_skill_template = '%NAME%의 레이스 기술';
  ui_rec_e_aim_template = '%NAME%의 육성 목표';
  ui_rec_e_title_template = '%NAME%의 전용 칭호';
  ui_rec_e_skill_init = '초기:';
  ui_rec_e_skill_init_pt = '스킬 Pt +680';
  ui_rec_e_skill_classic = '클래식급에서 해금:';
  ui_rec_e_skill_after_pt = '스킬 Pt +400';
  ui_rec_e_skill_senior = '시니어급에서 해금:';

  ui_train_base = '기초 능력';
  ui_train_score = '평가';
  ui_train_pt = '스킬 Pt';
  ui_train_race = '레이스 능력';
  ui_train_adapt_track = '마장 적성';
  ui_train_adapt_dis = '거리 적성';
  ui_train_adapt_style = '각질 적성';
  ui_train_adapt_ui_conjunction = '·';
  ui_train_learnt_skills = '습득 스킬';
  ui_train_learn_skill = '스킬 습득';
  ui_train_reset_skill = '스킬 초기화';
  ui_train_with_s_rate_template =
    '%ATTR% 트레이닝 Lv.%LEVEL%\n성공률: %SUCCESS%%';
  ui_train_reset_skill_confirm = '스킬 Pt 100으로 스킬을 초기화할까?';
  ui_train_skill_header_template = '%NAME%의 스킬 선택';
  get_ui_train_skill_pt_info = (pt) => ['스킬 Pt: ', pt];
  ui_train_skill_enable_filter = '필터 열기';
  ui_train_skill_disable_filter = '필터 닫기';
  get_ui_train_learn_skill = (skill) => [...skill, '을(를) 배울까?'];
  get_ui_train_replace_skill = (skill, remove) => [
    ...skill,
    '을(를) 배울까? ',
    ...remove,
    '과(와) 교체된다.',
  ];


  // Stage 3: race / outing / shop / save-load UI.
  get_ui_reg_header = (chara) => [chara, '의 다음 레이스를 등록한다'];
  ui_reg_race_template = '%NAME% (%COUNTRY%) %GRAND% %MARK%';
  ui_grand_live_mark = '🎤';
  ui_reg_registered = '[▲등록됨]';
  get_ui_reg_tip_1_before_begin = (chara) => [
    chara,
    '은(는) 메이크 데뷔를 치러야 다른 레이스에 출주할 수 있다',
  ];
  get_ui_reg_tip_1_after_begin = (chara) => [
    chara,
    '은(는) 빨간색으로 표시된 레이스를 신경 쓰고 있다',
  ];
  ui_reg_tip_2 = '끝에 별표(*)가 붙은 레이스에서는 특별한 일이 일어날 수 있다';
  ui_reg_tip_3 = '끝에 🎤가 붙은 레이스는 큰 무대다. 출주하면 명성을 더 얻기 쉽다';
  ui_reg_tip_4 =
    '(FR) 등의 표시는 해외 레이스다. 2주 전에 등록하고 2주 전에 원정을 떠나야 한다';
  ui_reg_race_filter_template = '불리한 레이스 제외 [%STATUS%]';
  ui_reg_race_more_info = '상세 정보 표시 [%STATUS%]';

  get_ui_race_select_contestants = (race) => [
    '다음 팀원이 ',
    race,
    '에 등록돼 있다. 출주를 취소시킬까?',
  ];
  ui_race_select_contestant_template = '%NAME% [%STATUS%]';
  ui_race_select_selected = '출주';
  ui_race_select_prevent = '출주 취소';
  ui_race_select_done = '출주 명단 확정';
  get_ui_race_your_tp = (you) => [you, '의 기력'];
  ui_race_prev_template = '이전\n%NAME%';
  ui_race_next_template = '다음\n%NAME%';
  ui_race_item_prev_template = '이전 %NAME%';
  ui_race_item_next_template = '다음 %NAME%';
  get_ui_race_preview_contestant_entry = (score, motivation, pop, pop_mark) => [
    score,
    { isDivider: true },
    ...motivation,
    { isDivider: true },
    ' 인기 ',
    pop,
    '위 ',
    pop_mark,
  ];
  ui_race_preview_contestant_attr = '%ATTR% (%RANK%)';
  ui_race_preview_contestant_style = '출주 각질';
  get_ui_race_preview_contestant_adapt = (name, adapt) => [name, ' ', adapt];
  ui_race_preview_contestant_tip =
    '* 출주마는 게이트 번호가 빠른 순서. 팀원은 초록색, 강적은 빨간색';
  ui_race_bt_go = '출주!';
  ui_race_bt_chart = '코스 데이터';
  ui_race_bt_item = '성인용품 장착';
  get_ui_race_preview_equip_item = (chara) => [chara, '에게 성인용품 장착:'];
  ui_race_preview_equip_item_part_template = '%NAME%의 %PART%에 성인용품 장착';
  get_ui_race_preview_item_stg_template = '남은 수량 %COUNT%개';
  ui_race_preview_equip_item_v_tip = '아직 처녀다!';
  ui_race_preview_equip_item_a_cond =
    '필요: 애널 횟수 %REQUIRE% 이상(현재: %CURRENT%)';
  ui_race_start_event = '누구에게 레이스 전 한마디를 건넬까?';
  ui_race_speed_1 = '1배속으로 보기';
  ui_race_speed_2 = '2배속으로 보기';
  ui_race_speed_4 = '4배속으로 보기';
  ui_race_few_contestants = '출주마 표시 줄이기';
  ui_race_skip_race = '결과 보기';
  ui_race_timer_template = '타이머: %TIMER%';
  ui_race_progress = '경과';
  ui_race_contestant_no = '번호';
  ui_race_contestant_name = '이름';
  ui_race_contestant_style = '각질';
  ui_race_contestant_total_time = '기록';
  ui_race_contestant_speed = '속도';
  ui_race_contestant_loc = '상대 위치';
  ui_race_contestant_rank = '순위';
  ui_race_contestant_progress_template =
    '%LOCATION% (%LANE% %SLOPE% %BLOCKED% %TEMPTATION%)';
  ui_race_start = '게이트 인!';
  ui_race_bad_start = '출발 지연!';
  ui_race_reporter = '실황';
  ui_race_result_summary = '게시판';
  get_ui_race_result_summary_header = (track, race) => [track, ' ', race];
  ui_race_result_location = '상대 위치 집계';
  ui_race_result_location_header = '선두와의 상대 위치 그래프';
  ui_race_result_speed = '속도 집계';
  ui_race_result_speed_header = '속도 그래프';
  ui_race_result_endurance = '지구력 집계';
  ui_race_result_endurance_header = '지구력 그래프';
  ui_race_result_skills = '발동 스킬 집계';
  ui_race_result_log = '레이스 로그';
  get_ui_race_result = (chara, race, rank) => [
    chara,
    '은(는) ',
    race,
    '에서 ',
    rank,
    '!',
  ];
  ui_race_end_event = '누구를 축하하거나 위로할까?';
  ui_race_event_chara_template = '%NAME% (%RANK%)';
  ui_race_event_end = '종료';
  ui_race_event_tip = '* 버튼이 빨간 캐릭터에게는 전용 이벤트가 있다';
  get_ui_race_honour_reward = (you, up_info) => [
    '팀의 활약으로 세간의 ',
    you,
    '에 대한 평가가 ',
    up_info,
    '했다!',
  ];
  get_ui_race_honour_pregnant_punish = (you, down_info) => [
    '팀은 활약했지만 현역 트레이너의 사생아 스캔들로 세간의 ',
    you,
    '에 대한 평가가 ',
    down_info,
    '했다!',
  ];
  get_ui_race_honour_hentai_punish = (you, down_info) => [
    '팀의 변태 행위로 세간의 ',
    you,
    '에 대한 평가가 ',
    down_info,
    '했다!',
  ];
  get_ui_race_honour_lose_punish = (you, down_info) => [
    '팀의 패배로 세간의 ',
    you,
    '에 대한 평가가 ',
    down_info,
    '했다!',
  ];
  get_ui_race_money_reward = (money) => [
    '레이스 상금 배당 ',
    money,
    ' 우마코인을 받았다',
  ];

  get_ui_out_confirm = (chara) => [chara, '과(와) 어디로 갈까?'];
  ui_out_self_confirm = '혼자 어디로 갈까?';
  get_ui_bt_talk_with_npc_template = '%NAME%에게 말 걸기';
  ui_deep_interact_with_npc_template =
    '아직 그 정도로 가까운 사이는 아니다(필요: 호감 %R_REQUIRE% 이상, 현재 %R_CURRENT%; 또는 연모 %L_REQUIRE% 이상, 현재 %L_CURRENT%)';
  get_ui_out_bye = (chara, you) => [
    '【',
    chara,
    '에게 작별을 고하고 ',
    you,
    '은(는) 떠났다】',
  ];
  ui_moon_well_close_tip = '비탕은 현재 영업하지 않는다';
  ui_mejiro_city_alone_tip = '메지로 시티는 혼자 오는 손님을 반기지 않는다';
  ui_mejiro_city_love_tip_template =
    '아직 그 정도로 가까운 사이는 아니다(필요: %REQUIRE% 이상, 현재 %CURRENT%)';

  ui_select_action_atrium = '중정에서 무엇을 할까?';
  ui_action_atrium_tree_hollow = '마른 나무의 구멍 살펴보기';
  ui_action_atrium_date = '데이트';
  ui_select_action_river = '강변에서 무엇을 할까?';
  ui_action_river_fish = '낚시';
  ui_action_river_walk = '산책';
  ui_select_action_shopping = '상점가에서 무엇을 할까?';
  ui_action_shopping_arcade = '게임센터로';
  ui_action_shopping_drawing = '제비뽑기';
  ui_action_shopping_ktv = '노래방';
  ui_action_shopping_movie = '영화';
  ui_action_shopping_ero_item = '성인용품점 들여다보기';
  ui_select_action_station = '역에서 무엇을 할까?';
  ui_action_station_restaurant = '식사';
  ui_action_station_date = '데이트';
  ui_action_station_shopping = '백화점 둘러보기';

  ui_race_report_header = '출주 예정';

  ui_shop_limited_item_entry_template = '%ITEM%(한정)';
  ui_shop_hold = '보유';
  ui_shop_max = '최대';
  ui_shop_buy_template = '구매(%PRICE% 우마코인)';
  ui_shop_tip = '* 아이템을 누르면 설명 표시\n** 「한정」 아이템은 1개만 보유 가능';
  get_ui_shop_bargain = (item, discount) => [
    '*** 이번 주 특가! ',
    item,
    ' ',
    discount,
    '!',
  ];
  ui_shop_30_off = '30%off';
  ui_shop_50_off = '50%off';
  ui_shop_acc_switch_template = '단축키 숨기기 [%STATUS%]';
  get_ui_shop_buy = (item, count) => [item, ' ', count, '개 구매'];

  get_ui_take_care = (chara) => [chara, '에게 누구를 돌봐 달라고 할까?'];
  get_ui_take_care_change_confirm = (chara, curr) => [
    chara,
    '은(는) 현재 ',
    curr,
    '을(를) 돌보고 있다. 상대를 바꿀까?',
  ];
  ui_take_care_aim_continue_template = '%NAME%(돌봄 중)';
  ui_take_care_aim_taken_template = '%NAME%(%TEACHER%이(가) 돌봄 중)';
  ui_take_care_bt_cancel = '돌봄 중단';
  ui_take_care_bt_keep = '그대로 유지';
  get_ui_take_care_continue = (chara, curr) => [
    chara,
    '은(는) 계속 ',
    curr,
    '을(를) 돌본다',
  ];
  get_ui_take_care_cancel = (chara, prev) => [
    chara,
    '은(는) 더 이상 ',
    prev,
    '을(를) 돌보지 않는다',
  ];
  get_ui_take_care_change = (chara, next) => [
    chara,
    '은(는) 앞으로 ',
    next,
    '을(를) 돌본다',
  ];

  ui_storage_have_items =
    '현재 보유 아이템(버튼을 눌러 사용하거나 설명 확인):';
  ui_storage_no_items = '보유한 아이템이 없다';
  ui_storage_select_header_template = '%ITEM%을(를) 사용할 상대 선택';
  ui_storage_no_targets_template = '%ITEM%을(를) 사용할 수 있는 상대가 없다';

  ui_bt_self_info = '내 정보';
  ui_bt_chara_info = '상대 정보';

  ui_wur_sleep = '가만히 즐긴다';
  ui_wur_wake = '잠에서 깬다';

  ui_sex_bt_setting = '설정';
  ui_sex_bt_touch = '신체 접촉';
  ui_sex_bt_stain = '오염 확인';
  ui_sex_bt_turn_around = '방향 전환';

  bs_info_template = '어두컴컴한 방……%DURABILITY%……';
  bs_no_one_info_template = '어두컴컴하고 아무도 없는 방……%DURABILITY%……';
  ui_bs_durability_0 = '하지만 거의 무방비다';
  ui_bs_durability_1 = '하지만 약간 손보면 될 것 같다';
  ui_bs_durability_2 = '문은 쉽게 열리지 않을 것 같다';
  ui_bs_durability_3 = '성가신 장애물이 여럿 있다';
  ui_bs_durability_4 = '시설이 모두 견고하다';
  ui_bs_durability_5 = '어떤 저항도 여기서는 통하지 않는다';

  ui_bs_flatter = '아첨하며 시간을 번다';
  ui_bs_unlock = '탈출을 시도한다';
  ui_bs_relax = '그냥 앉아 있는다';
  ui_bs_sleep = '조금 잔다';
  ui_bs_eat = '조금 먹는다';
  ui_bs_sex = '밤의 권유';
  ui_bs_strike = '뒤에서 기습한다';
  ui_bs_battle = '정면으로 저항한다';
  ui_bs_release = '풀어 달라고 부탁한다';
  ui_bs_clock = '시간을 묻는다';
  ui_bs_guide = '탈출 가이드';

  ui_save_game_header = '어느 슬롯에 저장할까?';
  ui_auto_save_template = '%NAME%(자동 저장)';
  ui_empty_save = '빈 슬롯';
  ui_save_rename = '이름 변경';
  ui_save_name_save = '이 이야기에 이름 붙이기';
  ui_save_remove_save = '이 이야기의 이름 지우기';
  ui_save_name_save_header = '저장 이름 입력:';
  ui_save_name_save_confirm_template = '이 이야기의 이름을 [%NAME%](으)로 할까?';
  ui_save_name_save_result_template = '이 이야기의 이름을 [%NAME%](으)로 정했다';
  ui_save_name_remove_confirm_template = '[%NAME%] 이름을 지울까?';
  ui_save_name_remove_result = '이름을 지웠다. 다음 저장부터 기본 이름을 사용한다';
  ui_save_override_confirm_template = '%NO%번 슬롯을 덮어쓸까?';
  ui_save_save_result_template = '%NO%번 슬롯에 저장했다';
  ui_save_rename_confirm_template = '%NO%번 슬롯의 이름을 [%NAME%](으)로 바꿀까?';
  ui_save_rename_result_template = '%NO%번 슬롯 이름 변경 완료';
  ui_save_rename_cancel_template = '%NO%번 슬롯 이름 변경 취소';

  ui_load_game_header = '어느 슬롯에서 불러올까?';
  ui_load_remove = '삭제';
  ui_load_fail_template = '%NO%번 슬롯을 불러오지 못했다';
  ui_load_remove_success_template = '%NO%번 슬롯을 삭제했다';

  name = new (require('#/i18n/ko-KR/chara/names'))();
  title = new (require('#/i18n/ko-KR/chara/titles'))();
  feature = new (require('#/i18n/ko-KR/chara/feature'))();

  new_game = new (require('#/i18n/ko-KR/new-game'))();
  location = new (require('#/i18n/ko-KR/location'))();
  vehicle = new (require('#/i18n/ko-KR/vehicle'))();

  tb_abl = new (require('#/i18n/ko-KR/table/abl'))();
  tb_exp = new (require('#/i18n/ko-KR/table/exp'))();
  tb_item = new (require('#/i18n/ko-KR/table/item'))();
  tb_mark = new (require('#/i18n/ko-KR/table/mark'))();
  tb_param = new (require('#/i18n/ko-KR/table/param'))();
  tb_stain = new (require('#/i18n/ko-KR/table/stain'))();
  tb_status = new (require('#/i18n/ko-KR/table/status'))();
  tb_talent = new (require('#/i18n/ko-KR/table/talent'))();

  race = new (require('#/i18n/ko-KR/race/races'))();
  skill = new (require('#/i18n/ko-KR/race/skills'))();
  clothe = new (require('#/i18n/ko-KR/race/clothes'))();
  inherit_shop = new (require('#/i18n/ko-KR/race/inherit'))();
  gene = new (require('#/i18n/ko-KR/race/genes'))();
  gene_desc = new (require('#/i18n/ko-KR/race/gene-desc'))();
};
