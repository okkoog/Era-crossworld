/**
 * Partial Korean reuse from EraUmaK 2.21.
 * Unmatched/new 3.113 entries inherit from ja-JP.
 */
const { printAndWait } = require('#/era-electron');
const ja = require('#/i18n/ja-JP/timon/others/storage');

const ko = Object.create(ja);

Object.assign(ko, {
  single_vehicle_info_template:
    '현재 %ITEM%을(를) 1인용 탈것으로 이용하고 있습니다! 장비 해제하겠습니까?',
  single_vehicle_replace_confirm_template:
    '현재 외출 시 탑승하는 1인승 탈것은 %ITEM%입니다! %NEW%(으)로 변경할까요?',
  single_vehicle_equip_confirm_template:
    '외출할 때 %ITEM%을(를) 타고 나갈까요?',
  single_vehicle_equip_template:
    '%ITEM%을(를) 1인용 탈것으로 사용하기로 했다',

  multiple_vehicle_info_template:
    '현재 외출할 때 %ITEM%을(를) 사용 중입니다! 장비 해제하겠습니까?',
  multiple_vehicle_replace_confirm_template:
    '현재 외출 시 탑승하는 다인승 탈것은 %ITEM%입니다! %NEW%(으)로 변경할까요?',
  multiple_vehicle_equip_confirm_template:
    '외출할 때 %ITEM%을(를) 타고 나갈까요?',
  multiple_vehicle_equip_template:
    '%ITEM%을(를) 다인승 탈것으로 사용하기로 했다.',

  no_glass_template: '%LENS%을(를) 설치할 안경테가 없습니다!',
  glass_replace_confirm_template:
    '%GLASS%에 %NEW%을(를) 장착하시겠습니까? 기존 %LENS%은(는) 파손될 수 있습니다!',
  glass_equip_template: '%GLASS%에 %LENS%을(를) 장착했습니다……',

  use_mind_reader_select: '사용할 우마토커 포인트 카드 수를 선택하세요.',
  use_mind_reader_confirm_template:
    '우마토커 카드를 %COUNT%장 사용하시겠습니까?',
  mind_reader_welcome_timer_template:
    '【우마토커】앱을 이용해 주셔서 감사합니다! 회원 자격은 %TIMER%주 후에 만료됩니다.',
  mind_reader_continue_timer_template:
    '【우마토커】앱의 구독을 갱신해 주셔서 감사합니다! 회원 자격은 %TIMER%주 후에 만료됩니다.',
  mind_reader_notify_timer_template:
    '회원 자격은 %TIMER%주 후에 만료됩니다.',

  in_ero_item_common_description: '우마뾰이 도중에만 사용할 수 있다',

  eat_chocolate_confirm: '【발렌타인초콜릿】을 먹을까요?',
  get_eat_chocolate_disabled: (you) => [
    you.get_colored_name(),
    '은(는) 이미 배부르다……',
  ],

  get_chara_pressure_down: (chara) => [
    chara.get_colored_name(),
    '의 스트레스가 줄어들었다……',
  ],
  get_chara_lust_down: (chara) => [
    chara.get_colored_name(),
    '의 성욕이 줄어들었다...',
  ],
  get_chara_all_down: (chara) => [
    chara.get_colored_name(),
    '의 마음이 차분해졌다……',
  ],
  get_chara_lust_up: (chara) => [
    chara.get_colored_name(),
    '은(는) 조금 흥분하고 있다……',
  ],
  get_chara_remove_fat: (chara) => [
    chara.get_colored_name(),
    '은(는) 더 이상 살찐 상태가 아닐 것이다……',
  ],
  get_chara_remove_headache: (chara) => [
    chara.get_colored_name(),
    '은(는) 더 이상 편두통을 겪지 않을 것이다……',
  ],
  get_chara_drink_tea: (chara) => [
    chara.get_colored_name(),
    '은(는)【건강차】를 먹었다……',
  ],

  get_chara_temp_remove_fat: (chara) => [
    chara.get_colored_name(),
    '은(는) 당분간 살찌지 않을 것 같다……',
  ],
  get_chara_temp_remove_headache: (chara) => [
    chara.get_colored_name(),
    '의 편두통이 일단 사라졌다……',
  ],

  to_sell_milk_template: '판매할 %ITEM%의 수량은?',

  fixer_start: '【현실 침투 시작...】',
  fixer_stop: '【현실 법칙 복원 완료.】',
});

ko.drink_hate_drug = async (chara, you) => {
  await printAndWait([
    chara.get_colored_name(),
    '에게 몰래【혐오약】을 먹였다……',
  ]);
  await printAndWait([
    chara.sex,
    '의 ',
    you.get_colored_name(),
    '에 대한 호감이 사라지기 시작했다……',
  ]);
};

ko.drink_limit_drug = async (chara, you) => {
  await printAndWait([
    chara.get_colored_name(),
    '에게 몰래【억제약】을 먹였다……',
  ]);
  await printAndWait([
    chara.sex,
    '의 ',
    you.get_colored_name(),
    '에 대한 애정이 억눌렸다……',
  ]);
};

module.exports = ko;
