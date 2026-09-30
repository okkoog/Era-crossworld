/**
 * @file 特殊赛后事件口上
 * @author 幽白書
 * @author Mr.E.
 * @author 黑奴队长（临时）
 */
const {
  add,
  drawLine,
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  set,
  waitAnyKey,
} = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_show_result,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_remote } = require('#/system/sys-calc-chara-param');

const page_ero = require('#/page/page-ero');

const { check_edu_script } = require('#/event/edu/edu-factory');
const { check_rec_script } = require('#/event/rec/rec-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaInmon = require('#/data/ero/chara-inmon');
const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { plugin_enum } = require('#/data/ero/plugin/plugin-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const MyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-0');
const EtsukoLifeMarks = require('#/data/event/life-event-marks/life-event-marks-303');
const MayLifeMarks = require('#/data/event/life-event-marks/life-event-marks-343');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');
const { class_enum, track_names } = require('#/data/race/model/race-info');
const { race_enum } = require('#/data/race/race-const');

const rec_list = {};
[race_enum.prix_lat].forEach((e) => (rec_list[e] ||= []).push(204));
[race_enum.prix_dia, race_enum.prix_lat].forEach((e) =>
  (rec_list[e] ||= []).push(205, 206),
);
[race_enum.sats_sho, race_enum.toky_yus, race_enum.kiku_sho].forEach((e) =>
  (rec_list[e] ||= []).push(346),
);
[
  race_enum.tenn_spr,
  race_enum.takz_kin,
  race_enum.prix_lat,
  race_enum.arim_kin,
].forEach((e) => (rec_list[e] ||= []).push(347));
[race_enum.sats_sho, race_enum.takz_kin, race_enum.arim_kin].forEach((e) =>
  (rec_list[e] ||= []).push(348),
);

/**
 * @param {number} race
 * @param {RaceInfo} info
 * @param {PseudoUma[]} team
 */
async function check_race_events(race, info, team) {
  const may_marks = new MayLifeMarks();
  let handler = undefined;
  const best = Math.min(...team.map((e) => e.rank.curr));
  const mvp = team.find((e) => e.rank.curr === best);
  const mvp_id = mvp.index_chara;
  const my_marks = new MyEduMarks();
  if (best === 1) {
    (rec_list[race] || []).forEach((cid) => {
      if (!get(`cflag:${cid}:모집상태`) && get(`cflag:${cid}:무작위모집`) <= 0) {
        add(`cflag:${cid}:무작위모집`, -1);
      }
    });
  }
  if (race === race_enum.prix_lat && best === 1 && !may_marks.who_am_i) {
    may_marks.who_am_i = 1;
  }
  if (get('flag:URA시상식첫만남') < 2) {
    /**
     * 오토나시 에츠코 - 初见
     * @author 黑奴队长
     */
    handler = async () => {
      const etsuko = get_chara_talk(303);
      const me = get_chara_talk(0);
      await print_event_name('인터뷰 시작', etsuko);
      await printAndWait([
        track_names[info.track],
        ' 경기장을 나서던 도중, ',
        me.get_colored_name(),
        '은(는) 기자 복장을 한 ',
        etsuko.get_phy_sex_title(),
        '과 마주쳤다.',
      ]);
      if (get('flag:URA시상식첫만남')) {
        await printAndWait([
          me.get_colored_name(),
          '은(는) ',
          etsuko.sex,
          '가 매년 URA 시상식을 담당하는 ',
          etsuko.get_colored_name(),
          ' 임을 알아봤다.',
        ]);
      }
      set('flag:URA시상식첫만남', 2);
      await printAndWait([
        etsuko.sex,
        '는 ',
        me.get_colored_name(),
        '에게 자신의 이름은 ',
        etsuko.get_colored_actual_name(),
        ' 라고 자기소개했다.',
      ]);
      await printAndWait([
        '간단한 인사를 나눈 후, ',
        etsuko.sex,
        '는 ',
        me.get_colored_name(),
        '의 팀이 앞으로 보여 줄 활약에 큰 기대를 표했다.',
      ]);
      set('cflag:303:모집상태', -1);
    };
  } else if (
    !new EtsukoLifeMarks().rape &&
    get('flag:징벌강도') === 3 &&
    get('cflag:303:모집상태') === recruit_flags.yes &&
    get('cflag:0:임신단계') >> pregnant_stage_enum.fetal > 0 &&
    team.findIndex((e) => e.index_chara === 0) === -1 &&
    best === 1 &&
    info.race_class <= class_enum.G3
  ) {
    new EtsukoLifeMarks().rape = 1;
    /**
     * 오토나시 에츠코 - 임신주머니
     * @author 幽白書
     */
    handler = async () => {
      const etsuko = get_chara_talk(303),
        me = get_chara_talk(0),
        champion = get_chara_talk(mvp_id);
      if (get_penis_size(303) === 0) {
        set(`status:303:펄롱${Math.random() < 0.5 ? 'K' : 'P'}`, 1);
      }
      if (get_penis_size(champion.id) === 0) {
        set(`status:${champion.id}:펄롱${Math.random() < 0.5 ? 'K' : 'P'}`, 1);
      }
      begin_and_init_ero(0, champion.id, 303);
      await print_event_name('「인터뷰」 시작', etsuko);
      await etsuko.say_and_wait('자, 그럼 인터뷰를 시작하겠습니다.');
      await me.say_and_wait('찌걱…… 찌걱……');
      println();
      await printAndWait('선수 대기실에서, 레이스 후 인터뷰가 순조롭게 진행되고 있다.');
      await printAndWait([
        me.get_colored_name(),
        ' 팀의 전담 기자인 ',
        etsuko.get_colored_name(),
        '는 방문자용 의자에 앉아, 막 경기를 마친 ',
        champion.get_uma_sex_title(),
        '와 인터뷰를 하고 있다.',
      ]);
      println();
      await etsuko.say_and_wait(
        '먼저 오늘의 승리를 축하합니다. 오늘 경기는…… 읏…… 정말로, 훌륭했어요.',
      );
      await champion.say_and_wait(
        '칭찬 감사합니다! 오늘 경기는…… 승리할 수 있어서 정말 기뻐요.',
      );
      await me.say_and_wait('찌걱…… 찌걱찌우욱……');
      println();
      await printAndWait(
        '가끔씩 부자연스럽게 말이 끊기는 것과, 어째서인지 실내에 울려 퍼지는 물소리를 제외하면, 인터뷰는 순조롭게 진행되고 있었다.',
      );
      await etsuko.say_and_wait(
        '그…… 그럼, 뭔가…… 감사하고 싶은 사람이나, 시청자들에게…… 하고 싶은 말이 있나요?',
      );
      await champion.say_and_wait('음…… 역시, 가장 감사한 건 트레이너님이네요.');
      await me.say_and_wait('!찌걱…… 찌구욱…… 찌르르륵……');
      println();
      await etsuko.say_and_wait('읏……!');
      await champion.say_and_wait('하아……!');
      println();
      await printAndWait(
        '갑자기 무슨 일이 일어났는지는 모르지만, 배경음처럼 들리던 물소리의 빈도가 갑자기 빨라졌고, 인터뷰하는 기자와 인터뷰 대상자 모두 잠시 침묵에 빠졌다.',
      );
      println();
      await etsuko.say_and_wait([
        '그거…… 정말 멋지네요, ',
        champion.get_uma_sex_title(),
        '와 트레이너…… 서로를 성장시키는 미담이군요.',
      ]);
      await champion.say_and_wait(
        '네…… 맞아요…… 트레이너님은…… 언제나 저희를 생각해 주시고…… 정말로…… 멋지신 분이에요……',
      );
      await etsuko.say_and_wait(
        '그…… 그럼, 오늘…… 인…… 인터뷰에 응해주셔서…… 가, 갈 것 같아!',
      );
      set_palam_to_max(303, part_enum.penis);
      set_palam_to_max(0, part_enum.mouth);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      set_palam_to_max(champion.id, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.virgin),
        new EroParticipant(champion.id, part_enum.penis),
        false,
      );
      println();
      await printAndWait('의미를 알 수 없는 맺음말을 끝으로, 인터뷰 녹음이 끝났다.');
      println();
      await etsuko.say_and_wait(
        '어머나…… 예전에는 트레이너 양의 육성 솜씨가 일류라는 것만 알았는데, 입 기술도 이 정도일 줄은……',
      );
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        '는 책상 위에서 아까 인터뷰에 썼던 유성펜을 집어 들고, 책상 밑에다가 마구잡이로 무언가를 그렸다.',
      ]);
      await printAndWait([
        '그리고 ',
        champion.get_colored_name(),
        '는 인터뷰가 끝난 순간 바로 책상 밑으로 손을 뻗었고, 이내 큰 마찰음과 그에 섞인 억눌린 교성이 울려 퍼졌다.',
      ]);
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      println();
      await printAndWait(
        '만약 지금 누군가 문을 열고 들어온다면, 눈앞에 펼쳐진 광경에 분명 깜짝 놀랄 것이다.',
      );
      await printAndWait('아니면…… 그저 흔한 일이라고 생각하려나?');
      await printAndWait('어쨌든 이런 일은 트레센 학원 내에서는 이미 일상다반사니까.');
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        '와 ',
        champion.get_colored_name(),
        '이(가) 인터뷰를 진행하던 책상 밑에는, 놀랍게도 몸매가 좋은 우마무스메 한 명이 두 사람에게 봉사하고 있었다.',
      ]);
      await printAndWait(
        '그 우마무스메는 트레센 학원 트레이너의 정장처럼 보이는 옷을 입고 있었다. 왜 보이는 옷이냐면 전신에서 등에 걸친 정장 재킷만이 그나마 옷처럼 보였기 때문이다. 거유와 정액이 가득 찬 임신한 배 때문에 터져버린 하얀색 셔츠, 하반신에 가득한 정액 자국과 찢어진 스타킹의 흔적을 보면 옷이라기보다는 걸레 조각이나 성인용 속옷이라고 부르는 편이 더 적합할 정도였다.',
      );
      await printAndWait([
        '그녀는 ',
        etsuko.get_colored_name(),
        '의 가랑이 사이 거근을 머금고 있었고, 뒤에서는 후배위 자세로 ',
        champion.get_uma_sex_title(),
        '의 엉덩이 때리기와 사정을 받아내고 있었다.',
      ]);
      await printAndWait([
        '만약 이번 레이스 라인업에 대해 조금이라도 아는 사람이라면 눈치챘을 것이다. 이런 음란한 광경의 중심에서, 앞뒤로 샌드위치가 되어 공격받고 있는 우마무스메가 바로 이번 경기의 우승자인 ',
        champion.get_colored_name(),
        '의 트레이너, ',
        me.get_colored_name(),
        '(이)라는 사실을.',
      ]);
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 고개를 들어 올리며 자신의 걸작을 자세히 살펴보았다.',
      ]);
      await printAndWait([
        '이마에 적힌 바를 정(正) 자, 그 단정한 획은 ',
        etsuko.get_colored_name(),
        '가 기자로서 가진 교양을 보여주고 있었다.',
      ]);
      await printAndWait('왼쪽 뺨에 생생하게 그려진 음경 그림은 기자의 데생 실력을 보여주었다.');
      await printAndWait([
        '오른쪽 뺨에 그려진 귀여운 거북이는 ',
        etsuko.get_colored_name(),
        '의 자그마한 동심을 드러냈다.',
      ]);
      await printAndWait('하지만 아쉽게도 얼굴은 이미 그림으로 꽉 차버렸는데, 다음엔 어떻게 해야 할까?');
      println();
      await printAndWait([
        '그때, ',
        champion.get_colored_name(),
        '의 격렬한 피스톤 운동 때문에 리듬에 맞춰 앞뒤로 흔들리는 ',
        me.get_colored_name(),
        '의 새하얀 가슴이 ',
        etsuko.get_colored_name(),
        '의 눈에 들어왔다.',
      ]);
      println();
      await etsuko.say_and_wait('옳지, 여긴 아직 비어있잖아!');
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 거유를 들어 올려 자신의 다리 위에 놓고 가슴으로 자신의 음경을 끼우도록 했다.',
      ]);
      await quick_make_love(
        new EroParticipant(303, part_enum.penis),
        new EroParticipant(0, part_enum.breast),
        false,
      );
      await printAndWait([
        '상반신 전체가 들어 올려진 탓에, ',
        me.get_colored_name(),
        '의 머리도 입에 머금고 있던 육봉에 밀려 올라가 책상에 부딪혀 소리를 냈고, 이에 불만을 품은 뒤쪽의 ',
        champion.get_colored_name(),
        '이(가) 다시 세게 ',
        me.get_colored_name(),
        '의 엉덩이를 몇 번 내리쳤다.',
      ]);
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      await printAndWait([
        '머리가 책상에 부딪히지 않게 하려고 ',
        me.get_colored_name(),
        '은(는) 필사적으로 거근을 삼켜 식도까지 꽉 차게 만들 수밖에 없었다.',
      ]);
      println();
      await printAndWait([
        '하지만 ',
        etsuko.get_colored_name(),
        '는 그런 건 안중에도 없었고, 그녀의 눈에 보이는 것은 새하얀 ',
        me.get_colored_name(),
        '의 가슴뿐이었다. 이로써 그림을 그릴 캔버스가 하나 더 생겼다.',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        '은(는) 잠시 생각하더니, 자신의 굵직한 육봉을 감싼 가슴살 위에 자신의 크기에 맞춰 원을 그리고, 그 원을 따라 생생한 보지를 하나 그렸다———개조를 거쳐 이미 완벽한 성노리개가 된 ',
        me.get_colored_name(),
        '의 몸을 생각하면, 이 파이즈리는 확실히 보지 못지않은 압박감이 있었다. 비록 보지처럼 주름은 없지만, 완벽하게 개조된 입과 목구멍이 그 이상의 봉사를 제공할 수 있었다.',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        '는 자신의 걸작을 보며 만족스럽게 바라보았다. 썩 보기 좋은 모습은 아니었지만, 적어도 트레이너의 엉덩이에 유치한 글씨체로 『암퇘지』, 『공중화장실』, 『육변기』, 『트레이너 실격』이라고 적어놓은 ',
        champion.get_colored_name(),
        ' 보다는 나았다.',
      ]);
      println();
      await printAndWait([
        '얼마 지나지 않아 ',
        etsuko.get_colored_name(),
        ' 가 부르르 떨었고, ',
        me.get_colored_name(),
        '은(는) 그것이 사정할 징조임을 바로 알아차리고 눈앞의 거근에 더욱 정성을 다해 봉사했다.',
      ]);
      await printAndWait([
        '이윽고 대포가 발사되었고, 탁한 백색의 축포가 순식간에 ',
        me.get_colored_name(),
        '의 식도를 가득 채웠다. 그뿐만 아니라 밖으로 넘쳐흘러 ',
        me.get_colored_name(),
        '의 입안 가득 탁한 생명이 채워질 정도였다.',
      ]);
      set_palam_to_max(303, part_enum.penis);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      printButton('「콜록…… 켁켁」', 1);
      await input();
      await printAndWait([
        me.get_colored_name(),
        '은(는) 결국 참지 못하고 육봉을 뱉어냈고, 그때까지도 사정을 멈추지 않던 거포는 ',
        me.get_colored_name(),
        '의 등을 향해 마지막 백탁액을 뿜어냈다. 이렇게 되자, 마지막 남은 옷이라고 부를 수 있던 검은색 정장 재킷조차 정액으로 완전히 하얗게 물들어버렸다.',
      ]);
      println();
      await champion.say_and_wait('정말 쓸모없네…… 얌전히 봉사하는 것조차 못 하는 거야?');
      println();
      await printAndWait([
        me.get_colored_name(),
        '이(가) 발버둥 치는 바람에 원래 보지 안에 박혀 있던 ',
        champion.get_colored_name(),
        '의 육봉도 미끄러져 빠져나왔고, 앞쪽은 입에 꽉 찬 육봉에 지탱하고 있던 ',
        me.get_colored_name(),
        '이(가) 바닥으로 쓰러졌다. 바닥에 가장 먼저 닿은 임신한 배가 하중을 견디지 못하고 보지 안에서 정액을 토해냈다.',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '은(는) 허둥지둥 두 사람을 향해 도게자를 하며 용서를 구했고, 떨리는 몸은 또다시 의지와 상관없이 뒤에서 작은 백탁액 줄기를 뿜어내 바닥에 얼룩을 남겼다——하지만 대기실을 청소하는 것도 당연히 ',
        me.get_colored_name(),
        '의 일 중 하나였다. 원래 유일하게 멀쩡했던 정장 재킷도 이럴 때 쓰기 위한 것이었지만, 지금은 정액으로 얼룩져 버렸으니…… 보아하니 이후 트레이너 양은 자신의 몸으로 직접 바닥을 닦아내야 할 것 같다.',
      ]);
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        '는 고개를 저으며 이런 사소한 일은 신경 쓰지 않는다는 뜻을 내비쳤다.',
      ]);
      println();
      await etsuko.say_and_wait(
        '오늘 인터뷰도 끝났고, 슬슬 돌아가 봐야겠네요. 두 분, 오늘 환대해 주셔서 감사합니다.',
      );
      println();
      await printAndWait([
        etsuko.get_colored_name(),
        '의 신호를 듣고, ',
        me.get_colored_name(),
        '은(는) 곧바로 다가가 이제 막 사정을 끝내고 아직 가라앉지 않은 ',
        etsuko.get_colored_name(),
        '의 육봉을 입에 머금고 마지막 청소를 하며 아까 다 마치지 못한 일을 마저 했다.',
      ]);
      await quick_make_love(
        new EroParticipant(0, part_enum.mouth),
        new EroParticipant(303, part_enum.penis),
        false,
      );
      println();
      await printAndWait([
        me.get_colored_name(),
        '은(는) 청소를 마친 뒤 입을 벌려 주인님들이 입안의 하얀 탁액, 아까 미처 다 삼키지 못한 정액 찌꺼기, 그리고 그 옆에 섞인 몇 가닥의 꼬불꼬불한 털을 똑똑히 확인하게 한 뒤에야 꿀꺽 삼키고, 다시 입을 벌려 주인님들의 검사를 청했다.',
      ]);
      println();
      await etsuko.say_and_wait(
        '그럼, 앞으로의 활약을 기대하겠습니다. 두 분을 계속 응원할게요!',
      );
      await champion.say_and_wait([
        '네! 앞으로도 계속 노력해서, 기자님과 모두의 기대를 절대 저버리지 않겠습니다!',
      ]);
      println();
      await printAndWait([
        '대기실을 나온 ',
        etsuko.get_colored_name(),
        '는 바로 자리를 떠나지 않았기에 문 안쪽에서 들려오는 소리도 들을 수 있었다.',
      ]);
      println();
      await champion.say_and_wait(
        '트레이너라는 말에 갑자기 꽉 조이는 걸 보니, 너 아직도 스스로 훌륭한 트레이너라고 생각하는 건 아니지? 경기장에 있을 때만 트레이너고, 밖에서는 그저 성욕 처리용 암퇘지 임신 주머니일 뿐이니까, 네 분수를 똑똑히 기억하라고!',
      );
      println();
      await printAndWait('꾸짖는 소리와 함께 다시 울려 퍼진 것은 찰지게 때리는 소리와 둔탁하게 부딪히는 소리였다.');
      await printAndWait([etsuko.get_colored_name(), ' 는 만족스럽게 고개를 끄덕였다.']);
      set_palam_to_max(champion.id, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.abuse),
        new EroParticipant(0, part_enum.masochism),
        false,
      );
      await quick_make_love(
        new EroParticipant(champion.id, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      println();
      await printAndWait([
        '담당 ',
        champion.get_uma_sex_title(),
        '를 위해 모든 것을 바치는 트레이너, 그리고 상대방을 신뢰하면서도 잘못이 있을 때는 두려움 없이 지적하는 ',
        champion.get_uma_sex_title(),
        ', 이 콤비의 미래는 틀림없이 밝을 것이다.',
      ]);
      await printAndWait([
        etsuko.get_colored_name(),
        '는 그렇게 굳게 믿었고, 하반신의 거근도 마치 ',
        etsuko.sex,
        ' 의 생각에 찬동하듯 살짝 고개를 치켜들었다.',
      ]);
      await end_ero_and_train();
      println();
      sys_like_chara(champion.id, 0, 50) && (await waitAnyKey());
      sys_like_chara(303, 0, 200) && (await waitAnyKey());
    };
  } else if (
    get(`cflag:${mvp_id}:성별`) !== 1 &&
    !my_marks.we_are_one &&
    mvp_id > 0 &&
    (!check_rec_script(mvp_id) || !check_edu_script(mvp_id)) &&
    !sys_check_remote(mvp_id) &&
    best === 1 &&
    get(`love:${mvp_id}`) >= 75 &&
    Math.random() * 100 <
      20 +
        20 * (mvp.race.conditionParams.item === 1) +
        (get(`base:${mvp_id}:성욕`) * 16) / 1000 &&
    !CharaInmon.get(mvp_id).on(plugin_enum.tuna) &&
    !CharaInmon.get(mvp_id).on(plugin_enum.meek)
  ) {
    /**
     * 「」心「」体
     * @author Mr.E.
     */
    handler = async () => {
      my_marks.we_are_one = get_random_value(4, 8);
      const chara = get_chara_talk(mvp_id);
      const me = get_chara_talk(0);
      await print_event_name(['「」심「」체'], chara);
      await printAndWait([
        '트레이닝실로 돌아오자, ',
        chara.get_colored_name(),
        '이(가) 머리에 목욕 수건을 얹은 채 소파에서 일어나, 싱글벙글 웃으며 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      println();
      await chara.say_and_wait([
        '오늘 제 활약도 꽤 좋았죠? ',
        sys_get_colored_callname(chara.id, 0),
        '~. 저한테 상을 듬뿍 주셔야 하는 거 아니에요?',
      ]);
      printButton('「오늘 정말 수고 많았어, 푹 쉬고 우리 밖으로 놀러 가자!」', 1);
      print('（컨디션 -1, 호감도 +50）');
      printButton('「그럼, 무슨 상을 받고 싶은데?」', 2);
      if ((await input()) === 1) {
        sys_change_motivation(chara.id, -1) && (await waitAnyKey());
        sys_like_chara(chara.id, 0, 50) && (await waitAnyKey());
      } else {
        await printAndWait(['무의식적으로 되물으며 농담을 던졌지만, 예상치 못한 대답이 돌아왔다.']);
        println();
        await chara.say_and_wait([
          '저는 ',
          sys_get_colored_callname(chara.id, 0),
          '의 『신부』가 되고 싶은데, 어때요?',
        ]);
        println();
        await printAndWait([
          '눈앞의 우마무스메는 히죽히죽 웃으며, 그렇게 말하는 동시에 ',
          me.get_colored_name(),
          '의 손을 ',
          chara.sex,
          '의 몸으로 끌어당겼다.',
        ]);
        println();
        await chara.say_and_wait([
          '우리는 일심동체인 관계잖아요, 그쵸? 이럴 땐 분명 같은 생각일 거예요, 그렇죠? 어쨌든 ',
          me.get_colored_name(),
          '이(가) 뭐라고 하든, 전 이제 더는 못 참겠어요!!!',
        ]);
        println();
        await printAndWait([
          '그녀는 꼬리로 문을 걸어 잠그고는, 덥석 ',
          me.get_colored_name(),
          '을(를) 껴안고 옆에 있는 소파로 돌진했다.',
        ]);
        println();
        await chara.say_and_wait(['제 「면사포」를 벗기고, 아내를 대하듯 저를 대해주세요~']);
        println();
        await printAndWait([
          me.get_colored_name(),
          '이(가) 정신을 차렸을 때는, 이미 모든 것이 늦어버린 후였다.',
        ]);
        println();
        printButton('「진정해, 우리 아직 다른 해야 할 일이 있잖아……」', 1);
        printButton(
          '면사포처럼 쓰인 목욕 수건을 거칠게 벗겨내고, 침대 위의 패자가 누구인지 똑똑히 알려줄 때다!',
          2,
        );
        begin_and_init_ero(0, chara.id);
        if ((await input()) === 1) {
          await printAndWait([
            me.get_colored_name(),
            '의 거절을 들었음에도 불구하고, ',
            me.get_colored_name(),
            '을(를) 껴안은 우마무스메는 여전히 웃는 얼굴이었다.',
          ]);
          await chara.say_and_wait(
            '싫어요? 아무래도 우리의 호흡이 아직 덜 맞춰졌나 보네요. 알겠어요. 계속하다 보면, 일심동체가 될 때까지 하면 문제없는 거겠죠?',
          );
          set('tflag:주도권', chara.id);
        }
        const location = get('flag:현재위치');
        if (get('cflag:0:위치') > 0) {
          set('flag:현재위치', location_enum.hotel);
        } else {
          set('flag:현재위치', location_enum.restroom);
        }
        await page_ero(chara.id, true);
        await end_ero_and_show_result(true);
        set('flag:현재위치', location);
      }
    };
  }
  if (handler) {
    drawLine();
    await handler();
  }
}

module.exports = check_race_events;