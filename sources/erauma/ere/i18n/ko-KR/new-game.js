// Stage 1: new-game/system settings only.
// Untranslated entries inherit from ja-JP.
module.exports = class extends require('#/i18n/ja-JP/new-game') {
  rp_select = '플레이할 캐릭터 선택';
  rp_select_me = '나 자신';
  rp_select_tip_1 = '* 표시가 있는 캐릭터는 전용 대사가 있음';
  rp_select_tip_2 = '개인 업적을 달성한 캐릭터만 선택 가능';
  rp_select_tip_3 = (clist) => [...clist, ' 등의 특수 캐릭터는 선택할 수 없음'];

  intro_input_name =
    '——그리고 왼쪽 아래에 자신의 이름을 적었다. (이름 입력 후 Enter, 전각 10자 이내)';
  intro_select_sex = '(성별을 선택해 주세요)';
  intro_resign = '다시 서명';
  intro_submit = '임명장 제출';
  intro_re_select_sex = '성별 다시 선택';

  set_diff_header = '게임 모드';
  set_dif0 = '지상의 신국';
  set_dif1 = '속세';
  set_dif2 = '트레프';
  set_dif3 = '세계의 적';
  set_dif4 = '고모라';
  set_dif5 = 'Uma3rb';
  set_dif6 = '소돔';
  set_dif7 = '환상♂향';
  set_guide = '초보자 가이드 표시';
  set_ng_tooltip = '* 처음이라면 【지상의 신국】 또는 【속세】부터 권장!';
  set_detail = '항목별 조정';
  set_mode_header = '프리셋';
  set_option_header = '게임 옵션';
  set_next = '게임 시작';

  set_train_diff = '트레이닝 난이도';
  set_td_0 = '여유롭다';
  set_td_1 = '간신히 해낸다';
  set_td_2 = '한 걸음마다 험난하다';
  set_td_0_desc = '트레이닝 성공률 +25%';
  set_td_2_desc = '트레이닝 성공률 -25%';

  set_train_buff = '트레이닝 보정';
  set_tb_0 = '적은 노력, 큰 성과';
  set_tb_1 = '매일의 축적';
  set_tb_2 = '많은 노력, 적은 성과';
  set_tb_0_desc = '트레이닝 보정 +25%';
  set_tb_2_desc = '트레이닝 보정 -25%';

  set_race_diff = '레이스 난이도';
  set_rd_0 = '상대가 되지 않는다';
  set_rd_1 = '호각';
  set_rd_2 = '강호가 즐비하다';
  set_rd_0_desc = '상대 평가 -20%';
  set_rd_2_desc = '상대 평가 +10%; 전설의 강적 활성화';

  set_hurt = '우마무스메가 부상을 입을 수 있음';
  set_ht_0 = '무사태평';
  set_ht_1 = '간신히 화를 피한다';

  set_pressure = '우마무스메가 스트레스를 받음';
  set_ps_0 = '가볍게 달린다';
  set_ps_1 = '무거운 짐을 지고 간다';

  set_money_price = '상점 가격';
  set_mp_0 = '인심 좋음';
  set_mp_1 = '정가';
  set_mp_2 = '악덕 상인';
  set_mp_0_desc = '상점 아이템 가격 -50%';
  set_mp_2_desc = '상점 아이템 가격 +100%';

  set_sex_skill_price = '조교 스킬 인자 소비';
  set_race_skill_price = '레이스 능력 인자 소비';
  set_sp_0 = '낮음';
  set_sp_1 = '보통';
  set_sp_2 = '높음';
  set_sp_0_desc = '인자 소비 -50%';
  set_sp_2_desc = '인자 소비 +100%';

  set_game_over = '게임 오버';
  set_go_0 = '연회는 끝나지 않는다';
  set_go_1 = '+ 팬 습격';
  set_go_2 = '+ 돈의 노예';
  set_go_3 = '+ 사랑의 감옥';

  set_honour = '명성 변화';
  set_hn_0 = '날마다 증가';
  set_hn_1 = '증감 없음';
  set_hn_2 = '조금씩 감소';
  set_hn_0_desc = '명성이 천천히 오른다. 매 턴 명성 +1';
  set_hn_1_desc = '다른 요인이 없다면 명성은 변하지 않는다';
  set_hn_2_desc = '명성이 조금씩 줄어든다. 매 턴 명성 -1';

  set_honour_empty = '명성이 바닥났을 때';
  set_he_0 = '조용히 퇴장';
  set_he_1 = '암거래';

  set_chara_sex = '우마무스메의 성별';
  set_relation = '첫 만남 호감도';
  set_relation_buff = '호감도 상승 난이도';
  set_love_buff = '연모 상승 난이도';
  set_diff_easy = '쉬움';
  set_diff_normal = '보통';
  set_diff_hard = '어려움';
  set_diff_easy_desc = '획득량 +50%';
  set_diff_hard_desc = '획득량 -50%';

  set_relation_change = '호감도 변화';
  set_love = '첫 만남 연모';
  set_love_change = '연모 변화';
  set_unfaith = '바람에 대한 생각';
  set_extreme = '우마무스메의 극단적 행동';
  set_eb_0 = '하지 않음';
  set_eb_1 = '발생 가능';
  set_eb_2 = '가능한 억제';
  set_eb_3 = '적극적으로 행동';

  set_talent = '선천적 특성';
  set_abl_update = '캐릭터가 성기술을 배우는 방식';
  set_resist = '강제 행위에 대한 저항';
  set_ero_item = '도구의 영향';
  set_mejiro_style = '메지로 성의 방식';
  set_child_love = '금단의 사랑';
  set_height = '우마무스메의 키';

  cus_intro_header = '캐릭터 메이킹! 무작위로 생성할까?';
  bt_cus_random = '무작위 생성';
  bt_cus_default = '초기값 사용';
  bt_cus_set = '직접 설정';
  cus_body_header = '먼저 신체의 세부 설정부터!';
  bt_cus_confirm = '이걸로!';
  cus_birthday_month = '출생월';
  cus_bm_prev = '이전 달';
  cus_bm_next = '다음 달';
  cus_birthday_date = '생일';
  cus_bd_prev_5 = '5일 전';
  cus_bd_prev = '전날';
  cus_bd_next = '다음 날';
  cus_bd_next_5 = '5일 후';
  cus_call_header = '그럼 호칭을 정하자!';
  cus_set_callname = '내레이션은 당신을 어떻게 부를까?';
  cus_set_by_self = '직접 정한다!';
  cus_final_header = '마지막으로 다시 확인!';
  cus_f_talent = '성격 특성:';
  cus_f_xp = '기타 특성:';
  cus_f_gift = '개발자의 선물:';
  bt_random_talents = '특성 무작위';
  bt_random_all = '전부 무작위!';
  bt_re_make = '다시 선택!';
  bt_exit = '그만두기……';

  // Stage 2: EraUma 3.113 new-game/system strings missing from Stage 1.
  intro_info1 =
    '10년간의 고학 끝에 마침내 합격자 명단에 이름을 올렸다.\n우편함 속 그 편지는 금빛 칠로 테두리가 둘러져 있었고,\n지금 손에 쥔 트레이너 배지와 같은 빛을 내고 있다.\n\n아직 떨리는 손으로 봉랍을 뜯었다————';
  intro_info2 =
    '임명장\n…………\n…………\n…………\n…………\n…………\n…………\n…………귀하를 본교 트레이너로 초빙한다.';
  intro_info3 = '일본 중앙 트레센 학원 이사장';
  intro_sign = (name) => ['(서명)', { isBlank: 2 }, name];
  intro_time = ['(날짜)', { isBlank: 2 }, '2000년 1월 1일'];

  set_dif0_desc =
    '세 여신은 모든 우마무스메를 평등하게 가호한다|트레센의 우마무스메는 동년배를 크게 능가한다|우마무스메는 순수한 사랑을 동경한다';
  set_dif1_desc =
    '세 여신의 시선은 이곳에 닿지 않는다|트레센은 수많은 명문 중 하나일 뿐이다|우마무스메는 현실의 압박에 노출된다';
  set_dif2_desc =
    '세 여신은 우마무스메를 지켜본다. 당신의 팀만 빼고|레이스에는 강적이 등장한다|우마무스메는 여러 방법으로 스트레스를 풀려 한다|트레센은 트레이너에게 엄격하고 자비가 없다';
  set_dif3_desc =
    '세 여신은 우마무스메를 지켜본다. 당신과 당신의 팀만 빼고|레이스에는 강적이 등장한다|우마무스메는 당신을 싫어한다|트레센은 트레이너에게 엄격하고 자비가 없다';
  set_dif4_desc =
    '세 여신은 당신의 팀을 각별히 가호한다|트레센의 우마무스메는 동년배를 크게 능가한다|우마무스메는 수단을 가리지 않고 당신을 독점하려 한다|우마무스메의 아이들도 또한';
  set_dif5_desc =
    '세 여신은 당신의 팀을 각별히 가호한다|트레센의 우마무스메는 동년배를 크게 능가한다|우마무스메는 항상 발정해 있다|우마무스메는 성인용품을 잔뜩 착용한 채로도 완주할 수 있다';
  set_dif6_desc =
    '고모라와 동일|단, 전원이 후타나리|트레센은 트레이너에게 엄격하고 자비가 없다';
  set_dif7_desc =
    '고모라와 동일|단, 전원이 남성|트레센은 트레이너에게 엄격하고 자비가 없다';

  set_go_0_desc = '명성이 바닥날 때까지 트레이너 인생은 계속된다';
  set_go_1_desc =
    '우마무스메의 성적이 당신의 생사를 결정한다…… 조금이라도 미움을 사고 있다면 육성의 끝이 인생의 끝이 될 수 있다';
  set_go_2_desc =
    '우마무스메에게 진 빚도 운명을 결정한다. 어른답게 자산은 제대로 관리할 것';
  set_go_3_desc =
    '이루어질 가망이 없는 사랑은 어떤 결실을 맺을까. 사랑으로 쌓인 감옥에서 인생을 마칠 기회도 있다';

  set_he_0_desc = '명성은 바닥났다. 모든 것이 끝났다…… 시스템이여, 타이틀로 돌려보내라';
  set_he_1_desc = '명성이 바닥나도 계속하고 싶은가? 모든 것을 대가로 치르더라도?';

  set_cs_0 = '미인들에게 둘러싸여';
  set_cs_1 = '양기가 넘쳐흐른다';
  set_cs_2 = '음양이 함께 선다';
  set_cs_3 = '현실의 투영';
  set_cs_0_desc = '미녀들에게 둘러싸였다!';
  set_cs_1_desc = '청춘의 땀을 흘리는 형님들……';
  set_cs_2_desc = '여러분, 여자…… 맞지?';
  set_cs_3_desc = '귀 장식이 달린 위치는 무엇을 뜻하는 걸까?';

  set_rc_0 = '날마다 증가';
  set_rc_1 = '군자의 교제';
  set_rc_2 = '볼수록 싫어진다';
  set_rc_0_desc = '우마무스메들의 호감도가 날마다 오른다. 매 턴 호감도 +5';
  set_rc_1_desc = '우마무스메들의 호감도는 시간만으로 변하지 않는다';
  set_rc_2_desc = '우마무스메들이 점점 당신을 싫어한다. 매 턴 호감도 -10';

  set_lc_0 = '자만하지 않는다';
  set_lc_1 = '조금씩 끌린다';
  set_lc_0_desc =
    '스스로 행동하지 않으면 우마무스메는 사랑에 빠지지 않는다. 연모 상승 이벤트는 발생할 수 있다';
  set_lc_1_desc =
    '아무것도 하지 않아도 우마무스메들은 의존 단계까지 조금씩 끌린다. 매 턴 연모 +1. 연모 상승 이벤트는 발생하지 않는다';

  set_uf_0 = '마음이 넓다';
  set_uf_1 = '용서하지 않는다';
  set_uf_0_desc = '우마무스메는 당신과 함께 보낸 시간만 신경 쓴다';
  set_uf_1_desc = '독점욕을 조심할 것……';

  set_eb_0_desc = '우마무스메는 아무것도 하지 않는다. 안전하다';
  set_eb_1_desc = '마음이 이루어지지 않을 때 아주 낮은 확률로 야습이나 납치가 일어난다';
  set_eb_2_desc = '우마무스메는 야습과 납치를 억누르려 한다…… 하지만 꽤 무리다';
  set_eb_3_desc = '보이지 않는 곳에서 그녀들은 뒤틀린 미소를 짓는다……';

  set_tt_0 = '음란한 암말들';
  set_tt_1 = '타고난 차이';
  set_tt_2 = '청정무구';
  set_tt_3 = '돌처럼 단단한 아이';
  set_tt_0_desc = '눈에 보이는 건 모두 암말';
  set_tt_1_desc = '누구나 단 하나뿐';
  set_tt_2_desc = '우마무스메의 몸은 완벽해서 약점이라곤 보이지 않는다';
  set_tt_3_desc = '쾌감을 주기가 극도로 어렵다';

  set_au_0 = '관심 없음';
  set_au_1 = '빠르게 배운다';

  set_rs_0 = '밀면 넘어간다';
  set_rs_1 = '격렬히 저항한다';

  set_ei_0 = '물 만난 물고기';
  set_ei_1 = '한 걸음도 못 간다';
  set_ei_0_desc =
    '어느 관객 「가끔 레이스가 이상해. 선수 표정이나 옷이 젖은 모습 같은 게…… 그래도 볼거리는 있어」';
  set_ei_1_desc =
    '어느 관객 「눈을 까뒤집고 비틀거리며 달리면서 코스까지 젖게 만들다니——아리마 기념이라고, 최소한의 존중은 해라!」; 성인용품 착용 시 기초 능력 -25%';

  set_ms_0 = '자유';
  set_ms_1 = '자애';
  set_ms_0_desc = '마음대로 해❤️';
  set_ms_1_desc = '메지로가 부르고 있다……';

  set_cl_0 = '허용하지 않는다';
  set_cl_1 = '허용한다';
  set_cl_0_desc = '아이들은 그저 당신을 따를 뿐…… 당신이 직접 망가뜨리지 않는 한';
  set_cl_1_desc = '아이들은 그저 당신을 따를 뿐…… 정말로?';

  set_hg_0 = '이렇게 작은 엄마';
  set_hg_1 = '평범하면 된다';
  set_hg_2 = '지배당하고 싶다!';
  set_hg_0_desc = '작은 아이들에게 둘러싸인 천국……';
  set_hg_1_desc = '우마무스메의 키는 자연스럽게 분포한다';
  set_hg_2_desc = '거대 우마무스메는 무적!';

  set_gd_0 = '이제 완전히 파악했다!';
  set_gd_1 = '처음일 때만 보여줘';

  cus_birthday_header =
    '다음은 키와 생일!\nPS: 개발자는 2월 29일생이 아니라고 가정하고 진행합니다';

  cus_breast_header =
    '여성의 상징은 어느 정도 크기가 좋을까?\nPS: 크다고 무조건 좋은 건 아니다!';
  cus_breast_1 = '……절벽입니다';
  cus_breast_2 = '희소가치로 승부';
  cus_breast_3 = '평범하면 된다';
  cus_breast_4 = '조금 큰 게 좋다!';
  cus_breast_5 = '모든 것을 내려다보고 싶다(아님)';

  cus_penis_header = '「흉기」의 크기는?\nPS: 크다고 무조건 좋은 건 아니다!';
  cus_penis_1 = '누구나 받아들일 수 있는 크기!';
  cus_penis_2 = '그보다 조금 더 크게';
  cus_penis_3 = '평범하면 된다';
  cus_penis_4 = '당당한 게 좋다!';
  cus_penis_5 = '모두를 아프면서도 기분 좋게 만들고 싶다!';

  cus_uma_header = '상상의 시간! 우마무스메가 된다면 자신은 어떤 기질일 것 같아?';
  cus_uma_color_header_template = '그렇군, %CHARA% 기질…… 그럼 털색은?';

  cus_call_3 = '오, 발굽을 정말 좋아할 것 같은 이름이네요!';
  cus_call_179 = '오, 로리콘 같아 보이는 이름이네요!';
  cus_call_621 = '오, 괴롭힘당하고 싶어 보이는 이름이네요!';

  get_cus_callname_confirm = (actual, call) => [
    actual,
    ' 트레이너, 앞으로 내레이션은 ',
    call,
    '라고 부르겠습니다!',
  ];

  cus_taiwu_header = '마지막은 개발자가 주는 선물!';

  taiwu_talent_speed = '빠름은 위기에서 나온다';
  taiwu_talent_stamina = '순수함은 자연에서 나온다';
  taiwu_talent_power = '날카로움은 연마에서 나온다';
  taiwu_talent_guts = '향기는 혹한에서 나온다';
  taiwu_talent_wiz = '뜻은 고요한 마음을 따른다';

  taiwu_talent_speed_desc =
    '빠름은 위기에서 나오며, 위기를 찰나에 벗어난다. 당신의 스피드는 보통 사람을 크게 능가한다.';
  taiwu_talent_stamina_desc =
    '순수함은 자연에서 나오며, 모든 것이 하나가 된다. 당신의 스태미나는 보통 사람을 크게 능가한다.';
  taiwu_talent_power_desc =
    '날카로움은 연마에서 나오며, 호랑이를 제압하고 용을 굴복시킨다. 당신의 파워는 보통 사람을 크게 능가한다.';
  taiwu_talent_guts_desc =
    '향기는 혹한에서 나오며, 마음을 다잡아 본성을 견딘다. 당신의 근성은 보통 사람을 크게 능가한다.';
  taiwu_talent_wiz_desc =
    '뜻은 고요한 마음을 따르며, 깨달음은 스스로 생겨난다. 당신의 지능은 보통 사람을 크게 능가한다.';

  get_cus_f_name = (name) => [name, ' 트레이너'];
  get_cus_f_male = (callname, sex, height) => [
    '내레이션 호칭:',
    callname,
    { isDivider: true },
    '성별:',
    sex,
    { isDivider: true },
    '키:',
    height,
    'cm',
  ];
  get_cus_f_female = (callname, sex, height, female_info) => [
    ...this.get_cus_f_male(callname, sex, height),
    { isDivider: true },
    ...female_info,
  ];
  get_cus_f_hair = (hair, hair_color) => [
    '헤어스타일:',
    hair,
    { isDivider: true },
    '머리색:',
    hair_color,
  ];
  get_cus_f_uma = (body_hair, chara) => [
    '우마무스메가 된 자신은 ',
    body_hair,
    ' 털색의 ',
    chara,
    ' 계열 우마무스메라고 생각한다',
  ];
  get_cus_f_skin_male = (skin, armpit, pubic, pv_color, penis) => [
    ...this.get_cus_f_skin_female(skin, armpit, pubic, pv_color),
    { isDivider: true },
    '음경 길이:',
    penis,
  ];
  get_cus_f_skin_female = (skin, armpit, pubic, pv_color) => [
    '피부색:',
    skin,
    { isDivider: true },
    '겨드랑이털:',
    armpit,
    { isDivider: true },
    '음모:',
    pubic,
    { isDivider: true },
    '성기 색:',
    pv_color,
  ];

};
