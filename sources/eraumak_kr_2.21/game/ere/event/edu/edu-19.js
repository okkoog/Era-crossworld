/**
 * @file 아그네스 디지털 - 育成
 * @author 片手虾好评发售中!
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const event_hooks = require('#/data/event/event-hooks');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise<boolean|void>>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-19/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} */
const week_end_handlers = {};

[
  require('#/event/edu/edu-events-19/week-end-1'),
  require('#/event/edu/edu-events-19/week-end-2'),
].forEach((f) => f(week_end_handlers));

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceStartParams):Promise<boolean|void>>} */
const race_start_handlers = {};

race_start_handlers[race_enum.begin_race] = async (digital, me, callname) => {
  if (era.get('cflag:19:육성턴수합산') >= 48) {
    return true;
  }
  await print_event_name('데뷔전 시작!', digital);
  await digital.say_and_wait([
    '음흥, 들리시나요? 저는 ',
    digital.get_colored_name(),
    '입니다. 새 잎이 돋아나는 이 계절, 여러분 모두 잘 지내고 계신가요? 저는 지금 데뷔전의 예시장에 서 있습니다. 주변에 있는 분들은……',
  ]);
  await digital.say_and_wait([
    '디지땅…… 디지땅…… ',
    digital.get_uma_sex_title(),
    '짱의 굿즈……라기보다 바로 ',
    digital.get_uma_sex_title(),
    '짱 안에 있어요!',
  ]);
  await digital.say_and_wait([
    '이미…… 모에사할 것 같아…… ',
    callname,
    '! 보이시나요! 이 주변의 ',
    digital.get_uma_sex_title(),
    '짱들이!',
  ]);
  await era.printAndWait([
    '보인다. 주변의 ',
    digital.get_uma_sex_title(),
    ' 중 일부는 긴장해서 떨고 있고, 어떤 아이는 눈을 빛내고 있지만, 그중에서도 가장 특별한 건……',
  ]);
  await era.printAndWait([
    '뺨을 감싸 쥐고 거의 위험해 보일 정도의 눈빛으로 이 모든 것을 감상하고 있는——',
    digital.get_colored_name(),
    '이였다.',
  ]);
  await digital.say_and_wait([
    '씁하씁하, 제가 말하고 싶은 건 ',
    digital.get_uma_sex_title(),
    '짱들이 대체 어디까지 갈 수 있느냐는 거예요! 존귀함 측정기가 한계돌파한 것도 모자라 무려 이 틈에 끼어들 수 있기까지 하다니!',
  ]);
  await digital.say_and_wait('하~ 너무 존귀해서 죽을 것 같아…… 디지땅…… 곧 재가 되어버려……');
  await me.say_and_wait('이제 곧 레이스 시작이야!');
  await digital.say_and_wait('와아! 맞아요! 지금은 승천할 때가 아니죠!');
  await digital.say_and_wait([
    '지금의 저도 ',
    digital.get_uma_sex_title(),
    '짱들과 어깨를 나란히 하는 존재. 제 존재가 ',
	digital.get_uma_sex_title(),
	'짱을 흐리게 만들 수는 없죠!',
  ]);
  await digital.say_and_wait(
    '열심히 할게요! 에너지 충전, 점검 완료! 존귀력 기능 100% 가동!',
  );
  await digital.say_and_wait([
    '디지땅의 눈은 필름이에요. ',
    digital.get_uma_sex_title(),
    '짱들의 모든 미소와 눈물을 전부 그 안에 새겨넣을 거예요!',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    '은 각오를 품고 경기장으로 향했다.',
  ]);
};

race_start_handlers[race_enum.hyac_sta] = async (digital, me, callname) => {
  await print_event_name(
    [race_infos[race_enum.hyac_sta].get_colored_name(), ' 시작!'],
    digital,
  );
  const dotou = get_chara_talk(58);
  await era.printAndWait([
    '얼마 전 ',
    race_infos[race_enum.nikk_hai].get_colored_name(),
    '에서 ',
    dotou.get_colored_name(),
    '가 2위를 차지했다.',
  ]);
  await era.printAndWait([
    '원래는 지하 통로에서 ',
    dotou.get_colored_name(),
    '를 축하해주려 했던 ',
    digital.get_colored_name(),
    '은 이전의 무례함 때문에 머리를 싸매고 있었지만, 뜻밖에도 ',
    dotou.get_colored_name(),
    '에게 감사의 인사를 받았다.',
  ]);
  await era.printAndWait([
    '일반적인 팬의 행동과는 상반되는 행동이었음에도 점차 결실을 보고 있는 상황에 ',
    digital.get_colored_name(),
    '은 점점 이해하기 어려워하는 것 같았다.',
  ]);
  await era.printAndWait(
    '그 문제를 해결하는 방식은 바로 레이스. 오늘의 이 레이스는 이전부터 이미 예정되어 있던 레이스였다.',
  );
  await era.printAndWait('OP 레이스로서, G3조차 되지 않는 작은 레이스였다.');
  await era.printAndWait([
    '예시장 안에서 ',
    digital.get_colored_name(),
    '은 다른 ',
    digital.get_uma_sex_title(),
    '를 뚫어지게 쳐다보았다.',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    '의 양손이 갈퀴가 되어 허공을 휘저었고, 눈동자에는 「맛있어 보인다」는 생각이 가득 담겨 있었다……',
  ]);
  era.printButton('「디지털, 덮치면 안 된다.」', 1);
  await era.input();
  await digital.say_and_wait('아뇨, 애초에 전에도 덮친 적은 없거든요.');
  await digital.say_and_wait(['그건 그렇고, ', callname, ', 왠지 기분이 묘해요.']);
  await digital.say_and_wait(
    '분위기가 무척 엄격한 것 같으면서도, 그 안에 담긴 존귀함의 농도는 변함이 없어서……',
  );
  await era.printAndWait([
    digital.get_colored_name(),
    '은 각 ',
    digital.get_uma_sex_title(),
    '의 표정에 비장함이 서려 있음을 발견했다. 이 감정은 ',
    digital.get_colored_name(),
    '을 견딜 수 없게 만들었지만, 분위기상 ',
    digital.get_colored_name(),
    '이 평소처럼 한계 발언을 내뱉을 수는 없었다.',
  ]);
  await digital.say_and_wait([
    '이 안에는 분명 더욱 순수한 무언가가 있고, 그것이 ',
    digital.get_uma_sex_title(),
    '짱을 존귀하게 만드는 이유일 거예요……',
  ]);
  await me.say_and_wait('그걸 만져보고 싶어?');
  await digital.say_and_wait('엑! 그건 너무 실례잖아요!');
  await digital.say_and_wait('하지만, 뭐랄까, 예전보다 조금 더 가까운 위치에서 관찰하고 싶어요……');
  await era.printAndWait([
    digital.get_colored_name(),
    '은 여전히 스스로를 관객이라 여기고 있었지만, ',
    digital.sex,
    '의 눈빛에는 이전과는 다른 변화가 생겨나고 있었다.',
  ]);
};

race_start_handlers[race_enum.nhk_cup] = async (digital, me) => {
  await print_event_name(
    [race_infos[race_enum.nhk_cup].get_colored_name(), ' 시작!'],
    digital,
  );
  await digital.say_and_wait('오오오오오오오! 역시, 정말 다르네요!');
  await era.printAndWait('G1 경기장, 10만 명 이상의 관중이 모인 레이스……');
  await era.printAndWait(
    '자주 관람해 왔음에도, 예시장에 직접 서서 느끼는 감각은 무척 신선했다.',
  );
  await era.printAndWait(
    '10만 관중이 뿜어내는 기운도 충분히 압도적이지만, 진정한 핵심은 우마무스메의……',
  );
  await digital.say_and_wait(
    '어어어어떻게 된 거지! 이 기운, 마치 영역 전개 같은 압박감이야!',
  );
  await digital.say_and_wait('위험해! 최고야! 그야말로 존귀함의 극치!');
  await me.say_and_wait('엄청 흥분했구나! 컨디션은 최고조네!');
  await digital.say_and_wait('이미, 이미 아무것도 생각할 수 없어요. 머릿속이 이미……');
  await digital.say_and_wait(
    '아름다워, 공포스러워, 해상도가 4K에 달하는 기분이에요. 지금은 여기 서 있는 것조차 힘들어……',
  );
  await digital.say_and_wait([
    '하지만 알아내고 말겠어요, ',
    digital.get_uma_sex_title(),
    '짱들의 존귀함의 오묘함을!',
  ]);
  await digital.say_and_wait('설령…… 제가 존귀함에 못 이겨 재가 되어 사라질지라도…… 히익?!');
  await era.printAndWait([
    '왜 그러지? ',
    digital.get_colored_name(),
    '이 말을 하다 말고 갑자기 몸을 떨었다.',
  ]);
  await era.printAndWait([digital.get_colored_name(), '은 주위를 둘러보더니……']);
  await digital.say_and_wait('왠지 누군가 저를 지켜보고 있는 것 같은데요?');
  await era.printAndWait([
    '하지만 ',
    me.get_colored_name(),
    '이(가) 보기에는 참가자들 중에 ',
    digital.get_colored_name(),
    '을 주시하는 사람은 없었다. 그렇다면 관중석에서 오는 시선일 것이다.',
  ]);
  await digital.say_and_wait('그런가요, 저도 모르는 사이에 최애 속에서 최애가 되는 꿈이라도 꾸고 있는 걸까요……');
  await digital.say_and_wait('이렇게 들떠 있어서는 안 되겠어요!');
  await era.printAndWait([
    '이토록 중대한 레이스라면 분명 ',
    digital.get_colored_name(),
    '도 ',
    digital.sex,
    '의 소질을 일깨울 수 있을 것이었다.',
  ]);
};

race_start_handlers[race_enum.japa_dir] = async (digital, me) => {
  await print_event_name(
    [race_infos[race_enum.japa_dir].get_colored_name(), ' 시작!'],
    digital,
  );
  await digital.say_and_wait(
    [
      '나는 아직 눈치채지 못했어. ',
      digital.get_uma_sex_title(),
      '짱들의 존귀 에너지의 근원, 그것은 분명 더없이 소중한 것일 텐데……',
    ],
    true,
  );
  await digital.say_and_wait(
    '오이…… 밤…… 더트…… 이 낯선 타지의 코스에서, 이 특수한 경기장에서라면, 어쩌면 내가 찾고 싶은 비밀이 있을지도 몰라……',
    true,
  );
  era.drawLine();
  await digital.say_and_wait([
    '『',
    race_infos[race_enum.japa_dir].get_colored_name(),
    '』, 왠지 이 레이스의 분위기는 무척 독특하네요.',
  ]);
  await me.say_and_wait('JG1 레이스니까…… 이런 유형의 레이스는 항상 편견이 따르곤 하지.');
  await digital.say_and_wait(
    '그럼에도 불구하고 이 레이스가 뿜어내는 뜨거운 기운. 마치 여름날의 태양 같아요……',
  );
  await digital.say_and_wait(
    '코스도, 풍경도, 잔디나 더트냐도 모두 다르지만, 그럼에도……',
  );
  await digital.say_and_wait([
    digital.get_uma_sex_title(),
    '짱들의 마음은 모두 같겠죠?',
  ]);
  await era.printAndWait(
    '맞다. G1이든 G3이든, 중상이든 일반 레이스든, 잔디든 더트든, 중앙이든 지방이든……',
  );
  await me.say_and_wait('모두 똑같아.');
  await me.say_and_wait(
    '이 레이스가 끝나면 너는 모든 유형의 레이스를 경험하게 되는 거야. 왜 똑같은지 분명 알 수 있을 거야.',
  );
  await era.printAndWait([
    digital.get_colored_name(),
    '은 어쩌면 이미 알고 있었을지도 모른다. ',
    digital.sex,
    '는 그저 확인하고 싶었을 뿐이었다. 바로 이 레이스를 통해서.',
  ]);
  await digital.say_and_wait([
    '지금! 오이의 더트 ',
    digital.get_uma_sex_title(),
    '짱들과 함께 답을 찾아내겠어요!',
  ]);
};

race_start_handlers[race_enum.mile_cha] = async (digital) => {
  if (era.get('cflag:19:육성턴수합산') >= 96) {
    return true;
  }
  await print_event_name(
    [race_infos[race_enum.mile_cha].get_colored_name(), ' 시작!'],
    digital,
  );
  const halo = get_chara_talk(61);
  await era.printAndWait([
    halo.get_colored_name(),
    ', ',
    digital.get_colored_name(),
    '이 데뷔 전부터 동경해왔던 ',
    digital.get_uma_sex_title(),
    '. 드디어 ',
    digital.get_colored_name(),
    '이 ',
    digital.sex,
    '와 같은 무대에 서게 되었다.',
  ]);
  await era.printAndWait([
    '예시장 위의 ',
    halo.get_colored_name(),
    '는 이전의 부진을 털어낸 듯 기세가 드높았다. 마치 전성기로 돌아간 듯한 모습이었다.',
  ]);
  await halo.say_and_wait([
    '어때? ',
    sys_get_colored_callname(61, 19),
    ', 오늘의 나는 눈이 멀어버릴 정도로 눈부시지 않아?',
  ]);
  await digital.say_and_wait(
    '네! 무척 눈부셔요! 하지만…… 등줄기는 올봄만큼 곧지는 않네요……',
  );
  await halo.say_and_wait('하아…… 정말 못 속이겠네. 설마 그런 것까지 눈치챌 줄이야.');
  await halo.say_and_wait([
    sys_get_colored_callname(61, 19),
    ', 너는 나를 어느 정도까지 좋아해?',
  ]);
  await digital.say_and_wait('마리아나 해구보다 더 깊게 파고 있을 정도로 좋아해요!');
  await era.printAndWait([
    halo.get_colored_name(),
    '와 ',
    digital.get_colored_name(),
    '은 즐겁게 대화를 나누었다. 이곳에서 ',
    digital.sex,
    '들이 분명 말로 다 할 수 없는 레이스를 보여줄 것임을 예감할 수 있었다.',
  ]);
  await digital.say_and_wait('당신의 진심을 오늘 레이스를 통해 확인하고 싶어요!');
  await halo.say_and_wait([
    '진정한 일류란 무엇인지 전신으로 이해해봐! ',
    sys_get_colored_callname(61, 19),
    '!',
  ]);
};

race_start_handlers[race_enum.tenn_sho] = async (digital) => {
  if (era.get('cflag:19:육성턴수합산') < 96) {
    return true;
  }
  await print_event_name(
    [race_infos[race_enum.tenn_sho].get_colored_name(), ' 시작!'],
    digital,
  );
  await era.printAndWait([
    '드디어 ',
    race_infos[race_enum.tenn_sho].get_colored_name(),
    ' 당일이 밝았다.',
  ]);
  await era.printAndWait([
    '예시장 안에서 ',
    digital.get_colored_name(),
    '은 낯익은 두 사람과 마주쳤다.',
  ]);
  await digital.say_and_wait([
    '잘 부탁드려요! ',
    sys_get_colored_callname(19, 15),
    ', ',
    sys_get_colored_callname(19, 58),
    '.',
  ]);
  const opera = get_chara_talk(15),
    dotou = get_chara_talk(58);
  await dotou.say_and_wait([
    '이쪽이야말로! 잘 부탁해, ',
    sys_get_colored_callname(58, 19),
    '!',
  ]);
  await era.printAndWait([
    '3년이라는 시간이 흘러, ',
    digital.get_colored_name(),
    '도 드디어 자신의 최애 앞에서 정상적으로 교류할 수 있게 되었다.',
  ]);
  await opera.say_and_wait(
    '아하하하, 너희 지금 명함이라도 교환하는 건가? 하지만 패왕인 나, 그 찬란한 존재 자체가 이미 나를 대변하고 있다! 어떤 소개도 필요 없지!',
  );
  await opera.say_and_wait([
    sys_get_colored_callname(15, 19),
    ', 나의 대관식에 온 걸 환영한다!',
  ]);
  await opera.say_and_wait(
    '너의 노력은 지켜보고 있었다. 네가 우리의 뒤편까지 도달했다는 점은 인정해주지.',
  );
  await opera.say_and_wait([
    '하지만 뒤편은 어디까지나 뒤편일 뿐! ',
    sys_get_colored_callname(15, 19),
    ', 이 잔디 위에서 너는 나를 이길 수 없다. 『세기말 패왕』으로서 중거리 잔디를 호령하는 나를 말이다!',
  ]);
  await digital.say_and_wait('확실히…… 말씀하신 대로 순수한 실력만으로는 아직 미치지 못할지도 모르죠……');
  await digital.say_and_wait('하지만, 저의 기교, 잔디와 더트를 아우르는 기교는……');
  await era.printAndWait([
    '그렇다. 이번 잔디 레이스에서 이도류인 ',
    digital.get_colored_name(),
    '의 강점은…… 잠시 후면 분명해질 것이었다.',
  ]);
  await era.printAndWait('똑…… 똑……');
  await era.printAndWait('좌르르…… 좌르르……');
  await era.printAndWait('처음에는 조금씩 내리던 비가 이내 사방을 적시기 시작했다!');
  await era.printAndWait([
    '그렇다. 포화 마장, 이번 ',
    race_infos[race_enum.tenn_sho].get_colored_name(),
    '는 포화 마장에서 치러지게 되었다!',
  ]);
  await digital.say_and_wait([
    '이것은…… ',
    digital.get_uma_sex_title(),
    '짱들의 눈물비일까요…… 아니요, 제가 만난 모든 ',
    digital.get_uma_sex_title(),
    '짱들이 기뻐하며 흘리는, 저의 승리를 축하하는 비예요!',
  ]);
  await opera.say_and_wait(
    '……비인가…… 미리 말해두지만, 나도 포화 마장은 자신 있다. 패왕은 어떤 상태든 적응할 수 있는 법이니까!',
  );
  await dotou.say_and_wait('아와와와…… 비예요오오……');
  await era.printAndWait([
    '티엠 오페라 오도 포화 마장에 능숙하지만, ',
    digital.get_colored_name(),
    '은 단순히 능숙한 수준이 아니었다!',
  ]);
  await era.printAndWait([
    digital.get_colored_name(),
    '은 말 그대로 진흙탕 위를 달려온 몸. 이런 상황이라면……',
  ]);
  await era.printAndWait('오직 승리만이 보일 뿐이었다.');
};

/** @type {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-19/race-end')(race_end_handlers);

module.exports = class extends CustomizedEdu {
  async out_church(digital, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 19) {
      add_event(event_hooks.out_church, event_object);
      return;
    }
    if (event_object.arg !== 95 + 1) {
      return;
    }
    const tachyon = get_chara_talk(32),
      falcon = get_chara_talk(46),
      palace = get_chara_talk(36);
    await print_event_name('새해 첫 참배', digital);
    await digital.say_and_wait('신령님! 올해는 굿즈 같은 건 됐으니까, 제발 라이벌을 내려주세요!');
    await era.printAndWait([
      '세상에! ',
      digital.get_colored_name(),
      '이 이런 말을 하다니, 대체 어떤 자극을 받은 걸까?!',
    ]);
    await me.say_and_wait('디지털? 왜 갑자기 그런 말을 해?');
    await era.printAndWait([
      digital.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '에게 털어놓기를, 얼마 전 ',
      get_chara_talk(15).get_colored_name(),
      '가 ',
      digital.get_colored_name(),
      '에게는 라이벌이 부족하다고 지적했다고 한다.',
    ]);
    await digital.say_and_wait([
      '음, 지난번 ',
      sys_get_colored_callname(19, 15),
      '가 말씀하신 대로 제가 지금보다 더 강해지지 못하는 이유는……',
    ]);
    await era.printAndWait('라이벌.');
    await era.printAndWait([
      digital.get_colored_name(),
      '에게는 라이벌이 부족했다. 트레이너로서 ',
      me.get_colored_name(),
      '은(는) 경쟁 상대가 ',
      digital.get_uma_sex_title(),
      '에게 얼마나 큰 동기부여와 고무가 되는지 잘 알고 있었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      digital.get_colored_name(),
      '의 경우는 너무나 특수했다. ',
      digital.sex,
      '가 가진 그 특성, ',
      digital.get_uma_sex_title(),
      '를 향한 순수한 애정 또한 ',
      digital.sex,
      '에게 경쟁 상대와 비슷한 효과를 가져다주었기 때문이다.',
    ]);
    await era.printAndWait([digital.get_colored_name(), '에게 정말 라이벌이 필요한 걸까?']);
    await digital.say_and_wait(
      '으으으, 전에는 너무 깊게 관여하고 싶지 않아서 라이벌은커녕 경기장에서 상대와 대화도 거의 안 했는데, 이제 와서 업보가 돌아온 걸까요……',
    );
    await era.printAndWait([
      '그래도 이번 기회에 ',
      digital.get_colored_name(),
      '이 다른 ',
      digital.get_uma_sex_title(),
      '와 교류해보는 것도 나쁘지 않을 것 같았다.',
    ]);
    await me.say_and_wait('그럼 라이벌을 찾아보자!');
    await era.printAndWait('그리하여……');
    era.drawLine();
    await palace.say_and_wait('하? 라이벌? 일찌감치 때려치워.');
    await digital.say_and_wait('기다려봐요! 마침 동기인데 딱 좋잖아요.');
    await palace.say_and_wait([
      '있지, ',
      sys_get_colored_callname(36, 19),
      ', 다른 건 몰라도 적어도 나는 안 맞는 것 같아. 그럼 이만.',
    ]);
    era.drawLine();
    await falcon.say_and_wait('에? 라이벌? 왠지 아이돌 이미지랑은 좀 안 맞는 것 같은데~');
    await digital.say_and_wait(
      '아니 아니 아니, 아이돌 중에는 그런 라이벌이 있어서 서로 대결하면서도 서로 돕는 그런 느낌이 있잖아요!',
    );
    await falcon.say_and_wait([
      '아하하, 팔코는 그냥 평범한 ',
      digital.get_uma_sex_title(),
      ' 꼬마 아이돌이라 그런 건 좀…… 하지만 ',
      sys_get_colored_callname(46, 19),
      ', 라이벌 제안은 정말 고마워!',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([
      '흠흠…… 라이벌이라…… 하지만 ',
      sys_get_colored_callname(32, 19),
      ', 자네는 연구 대상으로서나 어울리지 내 이념과는 맞지 않아!',
    ]);
    await digital.say_and_wait('……그렇군요.');
    await era.printAndWait([
      '여러 가지 이유로 몇 번이나 거절당한 ',
      digital.get_colored_name(),
      '. 그 활발한 ',
      digital.sex,
      '조차 귀가 축 처지고 말았다.',
    ]);
    await tachyon.say_and_wait([
      '그렇게 축 처져 있지 말게나, ',
      sys_get_colored_callname(32, 19),
      '. 그리고 자네도, ',
      sys_get_callname(32, 0),
      '. 자네는 알고 있겠지? ',
      sys_get_colored_callname(32, 19),
      '의 라이벌이 될 만한 후보를.',
    ]);
    await era.printAndWait([
      '특유의 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 뚫어지게 쳐다보며, ',
      tachyon.get_colored_name(),
      '은 턱 끝으로 ',
      me.get_colored_name(),
      '을(를) 가리켰다.',
    ]);
    await digital.say_and_wait([
      '에에에! ',
      callname,
      ', 알고 있나요? 제 라이벌이 될 만한 사람을?',
    ]);
    await me.say_and_wait('확실히 그렇긴 해.');
    await digital.say_and_wait('그럼 왜 처음부터 말 안 해줬어요?');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 애가 타서 금방이라도 ',
      me.get_colored_name(),
      '의 품으로 뛰어들 기세였다.',
    ]);
    await tachyon.say_and_wait([
      '보아하니 저 사람도 나름대로 생각이 있는 모양이군. ',
      sys_get_colored_callname(32, 19),
      ', 이제부턴 지루한 해답 편이겠으니 난 이만 가보겠네.',
    ]);
    await era.printAndWait([
      '아그네스 타키온은 분위기를 살피더니 눈치껏 자리를 비워주었다.',
    ]);
    await me.say_and_wait(
      '사실 네가 찾기 시작하고 나서야 알게 된 것도 있고, 나도 좀 더 확실히 알아보고 싶은 부분이 있어서 그랬어……',
    );
    await me.say_and_wait('그래서 내가 내린 결론은 이거야. 네 라이벌은 바로 모두야!');
    await digital.say_and_wait(
      '모두……! 그 말은 누구든지 밀어주는 것도 가능하다는 건가요?! 잠깐, 그럼 아까 그건……',
    );
    await era.printAndWait([
      '그렇다. 오늘 ',
      digital.get_colored_name(),
      '이 찾아다니던 사람들을 보며 생각난 것이었다. ',
      digital.get_colored_name(),
      '이 찾던 이들은 잔디에 능한 아이도, 더트에 능한 ',
      digital.get_uma_sex_title(),
      '도 있었으니, 처음부터 그랬던 것처럼……',
    ]);
    await me.say_and_wait('딱 한 명만 고르는 건 불가능해.');
    await me.say_and_wait(
      '누구를 골라도 디지털처럼 두 종류의 코스를 모두 달릴 수 있는 우마무스메는 없어. 하지만 만약……',
    );
    await digital.say_and_wait('모두라면……');
    await me.say_and_wait('맞아.');
    await digital.say_and_wait('아하하하, 설마 또 「모두」가 결론일 줄이야.');
    await digital.say_and_wait([
      sys_get_colored_callname(19, 61),
      '의 말대로 『더 많은 우마무스메와 함께 레이스하기』를 저는 분명히 해낼 거예요!',
    ]);
    await digital.say_and_wait(
      '모두가 라이벌이라니, 생각해보니 꽤 욕심쟁이 같네요…… 저는 모두에게서 무엇을 얻을 수 있을까요?',
    );
    era.print([me.get_colored_name(), '은(는) 결정했다:']);
    era.printButton('양분 (스태미나 +20)', 1);
    era.printButton('우정의 힘 (모든 능력치 +5)', 2);
    era.printButton('다양성 (스킬 포인트 +30)', 3);
    switch (await era.input()) {
      case 1:
        await me.say_and_wait('말하자면 그건 양분이겠지.');
        await digital.say_and_wait([
          '맞아요! ',
          digital.get_uma_sex_title(),
          '짱들 각자의 맛있는 부분들이 매번 저에게 활력을 줘요!',
        ]);
        await digital.say_and_wait(
          '매일매일 신선한 먹거리가 넘쳐나죠! 이보다 더 좋은 연료는 없어요!',
        );
        await era.printAndWait([
          '앞으로도 ',
          digital.get_uma_sex_title(),
          '들이 ',
          digital.get_colored_name(),
          '에게 더 많은 활력을 불어넣어 줄 것이다.',
        ]);
        get_attr_and_print_in_event(19, [0, 20], 0) && (await era.waitAnyKey());
        break;
      case 2:
        await me.say_and_wait('그래, 바로 우정이지! POWER!');
        await digital.say_and_wait([
          '오오옷, 모든 ',
          digital.get_uma_sex_title(),
          '짱들이 저에게 조금씩 힘을 보태준다면 저는 무적이에요!',
        ]);
        await digital.say_and_wait(
          '흥흥, 우하하하, 생각만 해도 온몸에 힘이 솟구치는 기분이에요!',
        );
        await era.printAndWait([
          '1인당 1우마코인씩 기부받는 것과는 좀 다르지만, ',
          digital.get_colored_name(),
          '은 분명 ',
          digital.get_uma_sex_title(),
          '들에게서 힘을 얻어 더욱 강해질 것이다.',
        ]);
        get_attr_and_print_in_event(19, new Array(5).fill(5), 0) &&
          (await era.waitAnyKey());
        break;
      case 3:
        await me.say_and_wait('다양성, 그거지!');
        await digital.say_and_wait([
          '당연하죠! ',
          digital.get_uma_sex_title(),
          '짱들의 질주는 그 다양성만으로도 평범한 주법의 틀에 가둘 수 없는 법!',
        ]);
        await digital.say_and_wait('마치 우마무스메 도감을 수집하는 것처럼 전부 기록해두겠어요!');
        await era.printAndWait([
          '올 콜렉팅 유저인 걸까. ',
          digital.get_colored_name(),
          '은 이 게임을 통해 분명 새로운 기술을 습득할 수 있을 것이다.',
        ]);
        get_attr_and_print_in_event(19, undefined, 30) &&
          (await era.waitAnyKey());
    }
    era.set('cflag:19:축제이벤트표시', 0);
    return true;
  }

  async race_end(digital, me, callname, hook, extra_flag) {
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        digital,
        me,
        callname,
        extra_flag,
      ))
    ) {
      if (extra_flag.rank === 1) {
        await print_event_name('레이스 승리', digital);
        await digital.say_and_wait(
          '하와와와와와! 모든 아이가 가장 존귀한 빛을 내뿜고 있어!',
        );
        await era.printAndWait([
          '레이스 후의 ',
          digital.get_colored_name(),
          '은 큰 레이스를 치렀다고는 믿기지 않을 정도로 활기찼고, 여느 때처럼 ',
          digital.sex,
          '의 열정을 뽐냈다.',
        ]);
        await digital.say_and_wait([
          '모두와 함께 달릴 수 있어서…… 정말 행복했어요……!',
        ]);
        await digital.say_and_wait(
          '게다가 1위까지 차지하다니! 정말 감사히 받겠습니다!',
        );
        era.printButton('「네가 가장 빛나고 있었어!」', 1);
        era.printButton('「다음 레이스에서도 힘내자!」', 2);
        if ((await era.input()) === 1) {
          await digital.say_and_wait([
            '에? 그그그, 그럴 리가요?! 이렇게 많은 ',
            digital.get_uma_sex_title(),
            '짱들 사이에서 저는 그저 공기 같은 존재인데…… 설마 저를 보고 계셨던 건가요?',
          ]);
          await era.printAndWait('이 수줍어하는 모습도 이제는 익숙해졌다.');
          await me.say_and_wait('당연하지, 너는 나의 최애잖아!');
          await digital.say_and_wait('으으으……');
          await digital.say_and_wait('칭찬을 들으니 정말 마음이 진정되질 않네요……');
          await era.printAndWait('물론 매번 봐도 질리지 않는 모습이었다.');
        } else {
          await digital.say_and_wait(
            '좋아! 다음 레이스에서도 이 기세를 이어갈 수 있도록 더 강해질 거예요! Power!',
          );
          await digital.say_and_wait([
            '더 강해져서 더 치열한 레이스 속에서 더 눈부시게 빛나는 ',
            digital.get_uma_sex_title(),
            '짱들을 보겠어요!',
          ]);
          await era.printAndWait('바로 그 기세다! 계속 힘내보자!');
          await digital.say_and_wait('에이! 에이! 오!');
        }
      } else {
        await print_event_name('레이스 입상', digital);
        await digital.say_and_wait(
          '으음 으음, 그렇군요.',
		  digital.get_uma_sex_title(),
		  '짱들의 눈부심에 다가가기엔 아직 조금 부족했나 봐요……',
        );
        await era.printAndWait([
          '우승하지 못한 ',
          digital.get_colored_name(),
          '이였지만, 레이스 후에도 큰 실망감은 보이지 않았다.',
        ]);
        await digital.say_and_wait(
          '우으…… 역시 저는 팬으로서 여기 있으면 안 되는 걸까요……',
        );
        await era.printAndWait('이런 이런.');
        era.printButton(
          `「이번에 ${digital.get_uma_sex_title()}짱들을 마음껏 감상했니?」`,
          1,
        );
        era.printButton(`「다음에는 가장 앞에서 ${digital.sex}들을 감상하자!」`, 2);
        if ((await era.input()) === 1) {
          await digital.say_and_wait('에! 맞아요! 디지땅, 가능해요!');
          await era.printAndWait('이게 대체 무슨 뜻일까.');
        } else {
          await digital.say_and_wait([
            '더 앞에 있다면 분명……! 더욱 아름다운 ',
            digital.get_uma_sex_title(),
            '짱들을 감상할 수 있겠죠!',
          ]);
          await era.printAndWait([
            '어쨌든 ',
            digital.get_colored_name(),
            '은 기운을 차렸다!',
          ]);
        }
      }
    }
  }

  async race_start(digital, me, callname, hook, extra_flag) {
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](digital, me, callname))
    ) {
      const buffer = [
        () =>
          digital.say_and_wait([
            '승리를 확신하는 ',
            digital.get_uma_sex_title(),
            '짱, 긴장한 ',
            digital.get_uma_sex_title(),
            '짱, 겉으로는 아무렇지 않아 보이지만 속으론 진심인 ',
            digital.get_uma_sex_title(),
            '짱…… 후…… 헤헤……',
          ]),
        () =>
          digital.say_and_wait([
            '아니 아니, 아무리 생각해도 저 같은 ',
            digital.get_uma_sex_title(),
            '가 경기장에 서는 건 역시 좀 이상하죠?',
          ]),
      ];
      if (era.get('mark:19:음문')) {
        buffer.push(() =>
          digital.say_and_wait(
            '디지땅의 승부복은 배가 드러나는 타입이었죠?! 큰일이야 큰일, 가려야 하나? 어떻게? 가려지긴 하나?',
          ),
        );
      }
      if (check_aim_race(RaceHistory.get(19).get(), race_enum.japa_dir, 1, 3)) {
        buffer.push(() =>
          digital.say_and_wait('한 명의 우마무스메로서 상대에게 부끄럽지 않은 레이스를 보여주겠어요.'),
        );
      }
      await get_random_entry(buffer)();
    }
  }

  async week_end(digital, me, callname, hook, extra_flag, event_object) {
    if (week_end_handlers[event_object.arg]) {
      const flags = { wait_flag: false },
        ret = await week_end_handlers[event_object.arg](
          digital,
          me,
          callname,
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }

  async week_start(digital, me, callname, hook, extra_flag, event_object) {
    if (week_start_handlers[event_object.arg] !== undefined) {
      const flags = { wait_flag: false },
        ret = await week_start_handlers[event_object.arg].call(
          this,
          digital,
          me,
          callname,
          flags,
          event_object,
        );
      flags.wait_flag && (await era.waitAnyKey());
      return ret;
    }
  }
};