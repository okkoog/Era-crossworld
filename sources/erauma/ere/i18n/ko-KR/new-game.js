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
};
