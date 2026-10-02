const { proxy_kojo_js } = require('#/i18n/tools');
const JaTimon = require('#/i18n/ja-JP/timon/entry');

module.exports = class extends JaTimon {
  recruit = proxy_kojo_js(require('#/i18n/ko-KR/timon/recruit'));
  daily = proxy_kojo_js(require('#/i18n/ko-KR/timon/daily'));
  edu = proxy_kojo_js(require('#/i18n/ko-KR/timon/edu'));
  love = proxy_kojo_js(require('#/i18n/ko-KR/timon/love'));
  basement = proxy_kojo_js(require('#/i18n/ko-KR/timon/base'));
  game_guides = proxy_kojo_js(require('#/i18n/ko-KR/timon/guides/game'));
  ending = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/ending'));
  storage = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/storage'));
  god_shop = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/god-shop'));
  race = proxy_kojo_js(require('#/i18n/ko-KR/timon/others/race'));
  cum = proxy_kojo_js(require('#/i18n/ko-KR/timon/mejiro/cum'));
  pregnant_slave = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/others/pregnant-slave'),
  );
  tachyon_shop = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/others/tachyon-shop'),
  );
  ero_c = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-common'));
  ero_r = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-rape'));
  ero_s = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-sleep'));
  ero_o = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/ero-others'));
  ero_sys = proxy_kojo_js(require('#/i18n/ko-KR/timon/sex/system'));
  act_desc_c = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/sex/act-desc-common'),
  );
  act_desc_r = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/sex/act-desc-rape'),
  );
  act_desc_s = proxy_kojo_js(
    require('#/i18n/ko-KR/timon/sex/act-desc-sleep'),
  );

  ed_saying_01 =
    '좁은 방 안에서 붉은 입술이 대나무와 어우러져 은혜를 나누네. —— 타카스기 신사쿠';
  ed_saying_02 =
    '돈, 우마무스메, 여자. 남자는 영원히 이 세 가지를 이해하지 못한다. —— 윌 로저스';
  ed_saying_03 = '한 푼의 돈이 영웅을 무릎 꿇게 만든다. —— 리루위안';
  ed_saying_04 =
    '속박된 노예는 누구나 자신의 손으로 사슬을 끊어버릴 수 있다. —— 셰익스피어';
  ed_saying_05 =
    '난 이제 더 이상 외롭지 않아. 내 생애 최고의 사랑이 지금 내 곁에 있으니. —— 레 미제라블';
  ed_saying_06 = '일식이 시작되면 만물은 빛을 잃는다. —— 데니스 오켈리';
  ed_saying_07 = '두견새가 울지 않으면 죽여버리겠다. —— 오다 노부나가';
  ed_saying_08 =
    '수사 과정에서 나는 최후이자 최고의 상소 법원이다. —— 셜록 홈즈';
  ed_saying_09 =
    '세상은 성패로 인물을 논하니, 조조 또한 영웅의 반열에 든다. —— 소식';
  ed_saying_10 =
    '위대한 우마무스메를 소유한 자는 가장 위대한 옥좌를 소유한 것이다. —— 처칠';
  ed_saying_11 =
    '인간이 진정으로 저질러질 때, 타인의 불행을 기뻐하는 것 외에 다른 즐거움이란 없다. —— 괴테';
  ed_saying_12 =
    '자유란 제멋대로 하는 것이 아니라, 남의 뜻에 휘둘리지 않는 것이다. —— 칸트';
  ed_saying_13 = '나의 가장 큰 적은 바로 나 자신이다. —— 나폴레옹';

};
