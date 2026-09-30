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
};
