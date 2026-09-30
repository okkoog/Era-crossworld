const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  check_pregnant_unprotect,
} = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');

const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const FukukitaruEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-56');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 */
async function cristmas_common(kitaru, me, callname) {
  await kitaru.say_and_wait('저기!');
  await era.printAndWait([
    '목소리가 들리는 쪽으로 시선을 돌렸다. ',
    me.get_colored_name(),
    '의 속을 썩이던 담당이 커다란 보따리를 짊어지고 창문을 통해 방으로 들어오려 애쓰고 있었다.',
  ]);
  await era.printAndWait([
    '정체 모를 물건이 가득 든 보따리가 좁은 창문에 끼어버렸으나, ',
    kitaru.get_uma_sex_title(),
    '가 괴력을 발휘하자 서서히 일그러지며 통과되었다.',
  ]);
  await kitaru.say_and_wait('어라라!');
  await era.printAndWait(
    '천이 찢어지는 소리와 함께 지팡이 사탕, 전구, 진저브레드 맨, 선물 상자 등 온갖 크리스마스 소품들이 보따리에서 쏟아져 나왔다.',
  );
  await era.printAndWait('평범했던 사무실은 순식간에 크리스마스 분위기로 가득 찼다.');
  await kitaru.say_and_wait('따단! 마치카네 산타 등장입니다아!');
  await kitaru.say_and_wait([callname, ', 깜짝 놀라셨나요?']);
  era.printButton('「다친 데는 없어?」', 1);
  await era.input();
  await kitaru.say_and_wait('에헤헤! 괜찮아요!');
  await kitaru.say_and_wait(['아, 맞다 맞다, ', callname, '께 드릴 게 있어요!']);
  await era.printAndWait([
    '바닥에 흩어진 물건들 사이를 한참 뒤진 끝에, ',
    kitaru.get_colored_name(),
    '는 의외로 정성스럽게 포장된 상자 하나를 집어 들었다.',
  ]);
  await kitaru.say_and_wait('짠!── 상자 안에 든 건, 수령 천 년의 크리스마스트리입니다아!');
  await kitaru.say_and_wait('뭐, 미니 모델일 뿐이지만요.');
  await era.printAndWait(
    '안타깝게도 상자를 열어보니 수제 크리스마스트리는 방금 전의 소동으로 두 동강 나 있었고, 꼭대기에 달려있던 별마저 떨어져 있었다.',
  );
  await kitaru.say_and_wait('에엣! 어째서어!');
  await kitaru.say_and_wait([
    '후우…… 이렇게 된 이상, 염치 불구하고 ',
    callname,
    '이 저와 함께 잠시 외출해 주셔야겠어요.',
  ]);
  era.drawLine({ content: '트레센 학원 옥상'});
  await era.printAndWait([
    kitaru.get_colored_name(),
    '와 자주 오곤 했던 옥상에 도착했다. 겨울의 찬 바람에 ',
    me.get_colored_name(),
    '은(는) 조금 몸을 떨었지만, ',
    kitaru.get_colored_name(),
    '는 전혀 개의치 않는 모습이었다.',
  ]);
  await kitaru.say_and_wait([
    '자아! ',
    callname,
    ', 손에 든 트리를 하늘을 향해 들어 올려 보세요!',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 시키는 대로 했다. 오늘 밤하늘은 더없이 맑았고, 무수한 별들이 수놓인 밤의 막이 트리의 나뭇가지 사이로 비쳐 보였다.',
  ]);
  await kitaru.say_and_wait('보세요! 이러면 마치 하늘의 별을 가득 담은 것 같지 않나요?');
  await kitaru.say_and_wait('정말 로맨틱해요!');
}

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  if (event_object?.arg !== 143) {
    return;
  }
  const edu_marks = new FukukitaruEduMarks();
  era.set('cflag:56:축제이벤트표시', 0);
  if (
    edu_marks.begin_race_end === 10 &&
    check_aim_race(RaceHistory.get(56).get(), race_enum.arim_kin, 2, 1)
  ) {
    await print_event_name('마치카네 후쿠키타루라는 이름의 별', kitaru);
    await era.printAndWait([
      '아리마 기념이 끝났다. 하지만 ',
      kitaru.get_colored_name(),
      '와의 계약이 종료되기 전, 일 년에 한 번뿐인 크리스마스가 먼저 찾아왔다.',
    ]);
    await era.printAndWait(
      '크리스마스 분위기는 이미 트레센 전체에 퍼져 있었고, 학생들이 장식해 둔 장식물들이 도처에 보였다.',
    );
    await era.printAndWait([
      '사무실에서 연말 보고서로 바쁜 시간을 보내고 있던 ',
      me.get_colored_name(),
      '은(는) 창문에서 들려오는 소리를 들었다.',
    ]);
    await cristmas_common(kitaru, me, callname);

    if (era.get('love:56') < 75 || kitaru.sex_code === 1 || me.sex_code === 0) {
      await era.printAndWait([
        '잠시 축제 분위기를 즐긴 뒤, ',
        kitaru.get_colored_name(),
        '와 함께 돌아갔다.',
      ]);
      return;
    }
    era.printButton('「실체가 있는 별을 갖고 싶은데.」', 1);
    await era.input();
    await kitaru.say_and_wait('에에! 하늘의 별로는 안 되는 건가요?');
    await era.printAndWait([
      '그 말을 듣자마자 오렌지색 머리의 ',
      kitaru.get_teen_sex_title(),
      '는 고개를 숙였다.',
    ]);
    era.printButton('「예를 들면…… 마치카네 후쿠키타루라는 이름의 별이라든가!」', 1);
    await era.input();
    await kitaru.say_and_wait('에엣! 저요?');
    await era.printAndWait([
      '이름이 불린 ',
      kitaru.get_teen_sex_title(),
      '가 고개를 돌려 ',
      me.get_colored_name(),
      '을(를) 바라보았다. 십자 모양의 눈동자 속에는 북극성처럼 밝은 빛이 일렁이고 있었다.',
    ]);
    await kitaru.say_and_wait('우와아! 그런 방법이 있다니, 제가 졌어요!');
    await kitaru.say_and_wait(['저기, 오늘의 ', callname, '은 정말 박력 넘치시네요!']);
    await kitaru.say_and_wait('뭐랄까, 보고만 있어도 가슴이 두근거린달까……');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 얼굴에 사랑스러운 홍조가 피어올랐다. 일렁이는 눈망울은 마치 정성껏 보살펴달라고 속삭이는 듯했다.',
    ]);
    await era.printAndWait([
      '무심코 손을 뻗어 ',
      kitaru.get_colored_name(),
      '의 몸에 올렸다. ',
      kitaru.sex,
      '의 몸 상태를 속속들이 알고 있던 ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '의 체온이 ',
      kitaru.get_uma_sex_title(),
      '임을 감안해도 평소보다 다소 높다는 것을 알아챘다.',
    ]);
    await era.printAndWait('먼저 교복 너머로 어깨를 어루만졌다.');
    await kitaru.say_and_wait('……에헤.');
    await kitaru.say_and_wait([callname, '!']);
    await era.printAndWait([
      '손을 미끄러뜨려 가슴을 가볍게 쥐자, ',
      kitaru.get_colored_name(),
      '는 그에 맞춰 가느다란 신음을 내뱉었다.',
    ]);
    await kitaru.say_and_wait('으으……');
    await kitaru.say_and_wait('그곳은 예민하다고요……', true);
    await era.printAndWait([
      '계속해서 아래로 내려가 손끝이 허리춤을 스쳤다. 겨울용 두툼한 교복 너머였음에도 불구하고 ',
      kitaru.get_colored_name(),
      '는 마치 전기에 감전된 듯 몸을 떨었다.',
    ]);
    await kitaru.say_and_wait('……하아.');
    await kitaru.say_and_wait('내 운명의 사람에게 이런 손길을 받는 건 오랜만이네……', true);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 숨결이 더욱 습해지며 일렁였다.',
    ]);
    await era.printAndWait([
      '눈앞에서 청초한 뺨이 완전히 붉게 물든 채, 눈물 어린 눈으로 바라보는 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '에게 기대 섞인 시선을 던져왔다.',
    ]);
    await kitaru.say_and_wait('원해요……', true);
    era.printButton('아무 말 없이 돌아간다', 1);
    era.printButton('마치카네 후쿠키타루를 안아 올린다', 2, {
      disabled:
        kitaru.sex_code === 1 ||
        me.sex_code === 0 ||
        !check_pregnant_unprotect(56),
    });

    if ((await era.input()) === 1) {
      await era.printAndWait([
        '무언가를 기대하던 ',
        kitaru.get_colored_name(),
        '를 뒤로한 채, ',
        me.get_colored_name(),
        '은(는) 등을 돌려 옥상을 떠났다.',
      ]);
      return;
    }

    if (
      !era.get('status:56:경구피임약') &&
      !era.get('status:56:사후피임약') &&
      !era.get('status:0:생리') &&
      era.get('cflag:56:임신주수') === 0
    ) {
      era.set('status:56:경구피임약', 1);
    }
    await era.printAndWait([
      '아리마 기념을 대비하기 위해 ',
      kitaru.get_colored_name(),
      '와 ',
      me.get_colored_name(),
      '은(는) 한동안 금욕 생활을 이어왔었다.',
    ]);
    await era.printAndWait(
      '그 보상으로 격정적인 행위를 선물하는 것도 나쁘지 않은 선택일 것이다.',
    );
    await kitaru.say_and_wait('엣, 아아!');
    await era.printAndWait([
      '다리에 힘이 풀린 ',
      kitaru.get_colored_name(),
      '를 공주님 안기로 들어 올리자, ',
      kitaru.get_colored_name(),
      '의 가느다란 팔이 ',
      me.get_colored_name(),
      '의 목을 감싸 안았다.',
    ]);
    await kitaru.say_and_wait([callname, '의 냄새……'], true);
    await kitaru.say_and_wait('뜨거워……', true);
    await era.printAndWait([
      '옥상 입구까지 가는 그 짧은 거리조차 참지 못하고 ',
      kitaru.get_colored_name(),
      '는 얼굴을 ',
      me.get_colored_name(),
      '의 가슴에 묻었다. 겹쳐진 두 다리는 점점 더 노골적으로 서로를 비벼댔고, 치마 아래에서 풍겨오는 야릇한 향기가 ',
      me.get_colored_name(),
      '의 코끝을 자극했다.',
    ]);
    era.printButton('마치카네 후쿠키타루를 안아 올린다', 1);
    await era.input();
    await kitaru.say_and_wait('응……', true);
    await era.printAndWait([
      '입 밖으로 내지는 않았지만, ',
      me.get_colored_name(),
      '은(는) 품에 안긴 담당의 의중을 충분히 읽을 수 있었다.',
    ]);
    await era.printAndWait('옥상으로 통하는 문을 닫아 찬 바람을 차단했다.');
    await era.printAndWait('계단 입구의 공간은 그리 넓지 않았다.');
    await era.printAndWait([
      '품 안의 ',
      kitaru.get_colored_name(),
      '를 ',
      me.get_colored_name(),
      '에게 등을 돌리게 한 뒤 차가운 시멘트 벽을 짚게 하고, ',
      kitaru.sex,
      '의 교복 치마를 걷어 올려 속옷을 노출시켰다.',
    ]);
    await kitaru.say_and_wait(
      ['으으, 이 자세는 ', callname, '이 전혀 안 보여……'],
      true,
    );
    await era.printAndWait(
      '다리를 계속 교차하며 비빈 탓에 속옷은 이미 물이 뚝뚝 떨어질 듯 젖어 있었고, 가늘게 꼬여 있었다.',
    );
    era.printButton('다리를 벌린다', 1);
    await era.input();
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 명령에 순종하며 다리를 크게 벌렸다. 손을 뻗어 속옷을 내리자 은밀한 곳과 천 사이로 끈적한 실이 길게 늘어졌다.',
    ]);
    await era.printAndWait(
      '이어서 손가락을 밀어 넣자, 부드러운 속살은 아무런 저항도 하지 못한 채 길을 내주었다.',
    );
    await kitaru.say_and_wait('하…… 하아앗');
    await era.printAndWait([
      '처음에는 조심스러웠으나, ',
      kitaru.get_colored_name(),
      '의 신음이 점점 거칠어지자 남은 손가락들을 사정없이 밀어 넣었다.',
    ]);
    await kitaru.say_and_wait('으으응?!');
    begin_and_init_ero(0, 56);
    set_palam_to_max(56, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    await era.printAndWait([
      '부풀어 오른 음핵을 집요하게 자극하자, 막대한 쾌감이 ',
      kitaru.get_colored_name(),
      '의 척추 끝에서부터 솟구쳐 올라 전신으로 번져나갔다.',
    ]);
    await kitaru.say_and_wait('아앗, 아아아아아앙!');
    await era.printAndWait(
      '절정을 상징하는 액체가 뿜어져 나와 옥상 입구의 시멘트 바닥을 적셨다.',
    );
    set_palam_to_max(
      56,
      kitaru.sex_code > 0 ? part_enum.virgin : part_enum.clitoris,
    );
    await quick_make_love(
      new EroParticipant(0, part_enum.hand),
      new EroParticipant(
        56,
        kitaru.sex_code ? part_enum.virgin : part_enum.clitoris,
      ),
      false,
    );
    await era.printAndWait([
      '걷어 올려진 겨울 교복 치마 아래로 드러난 하얀 엉덩이가 ',
      kitaru.get_colored_name(),
      '의 경련에 맞춰 끊임없이 파르르 떨리고 있었다.',
    ]);
    era.printButton('손을 뻗는다', 1);
    await era.input();
    await kitaru.say_and_wait('꺄앗!');
    await era.printAndWait([
      '처음에는 부드럽게 문지르다, ',
      kitaru.get_colored_name(),
      '의 목소리가 더 애처로워질수록 무자비하게 짓이기며 음란한 형태로 변형시켰다.',
    ]);
    await era.printAndWait(
      '절정의 여운과 함께 액체가 다시 한번 바닥으로 쏟아졌다.',
    );
    await kitaru.say_and_wait([callname, '……']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 재촉에 맞춰, 이제 본편을 시작할 때가 되었다.',
    ]);
    await era.printAndWait('바지를 내리고 팽창한 성기를 드러냈다.');
    await kitaru.say_and_wait('응……');
    await era.printAndWait([
      '점점 다가오는 뜨거운 기운을 감지한 듯, 굶주린 입구가 오므라들며 ',
      me.get_colored_name(),
      '의 성기를 유혹해 왔다.',
    ]);
    await era.printAndWait('이윽고 굵직한 육봉이 단숨에 끝까지 밀고 들어갔다.');
    await era.printAndWait('내부의 애액이 공기와 함께 무참히 밖으로 밀려 나갔다.');
    await era.printAndWait([
      '성인 남성의 육봉이 좁은 내부의 모든 공간을 독점하며, ',
      kitaru.get_teen_sex_title(),
      '의 은밀한 곳을 유린하기 시작했다.',
    ]);
    await kitaru.say_and_wait(
      ['입구가 조여지면서 ', callname, '의 것을 꽉 물고 있어……'],
      true,
    );
    await era.printAndWait('퍽! 퍽!');
    await era.printAndWait([
      '둔탁한 마찰음이 ',
      kitaru.get_colored_name(),
      '의 안쪽 깊은 곳에서부터 울려 퍼졌다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 크게 비명을 지르려 했으나, ',
      me.get_colored_name(),
      '의 제지에 목소리를 억눌렀다.',
    ]);
    await kitaru.say_and_wait('질척거리는 음란한 소리가 여기까지 다 들려……', true);
    await era.printAndWait([
      '부끄러워하면서도 ',
      kitaru.get_colored_name(),
      '는 다리를 더욱 벌려 뒤에서 밀어붙이기 좋은 자세를 취해주었다.',
    ]);
    await era.printAndWait(
      '분홍빛 육벽이 충격에 밀려 나갔다 돌아오기를 반복하며 파들거렸다.',
    );
    await kitaru.say_and_wait('이렇게 격렬하면, 가, 가버려요아아앙～～～', true);
    await kitaru.say_and_wait('가버려요오오!!!');
    set_palam_to_max(56, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    await era.printAndWait([
      '탈력한 연인의 몸을 돌려 세웠다. 시멘트 벽의 차가운 감촉이 ',
      kitaru.get_colored_name(),
      '의 초점 잃은 눈동자를 다시 불러 모았다.',
    ]);
    await era.printAndWait([
      '이번에는 마주 본 자세로, ',
      me.get_colored_name(),
      '은(는) 평소 원기 왕성했던 ',
      kitaru.get_uma_sex_title(),
      '가 정사 중에 짓는 표정을 만끽했다.',
    ]);
    await kitaru.say_and_wait('퍽～ 퍽～');
    await era.printAndWait('음란한 결합음이 옥상 계단 입구의 좁은 공간에 메아리쳤다.');
    await kitaru.say_and_wait('너무 대단해요! 너무 격렬하다고요!', true);
    await kitaru.say_and_wait('가, 가버려요오～');
    await era.printAndWait('억눌러왔던 교성들이 마침내 봇물 터지듯 터져 나왔다.');
    await era.printAndWait([
      '말은 그렇게 하면서도 오렌지색 꼬리는 자의식을 가진 듯 ',
      me.get_colored_name(),
      '의 다리를 휘감았다. 더욱 긴밀하게 조여오는 입구는 주인의 의사와 상관없이 절정이 임박했음을 알리고 있었다.',
    ]);
    await kitaru.say_and_wait('가버려요오오오!!!');
    set_palam_to_max(0, part_enum.penis);
    set_palam_to_max(56, part_enum.virgin);
    await quick_make_love(
      new EroParticipant(0, part_enum.penis),
      new EroParticipant(56, part_enum.virgin),
      false,
    );
    await era.printAndWait('몸을 앞으로 숙여 귀두를 자궁구에 밀착시킨 채 정액을 쏟아부었다.');
    await era.printAndWait('결합부 틈새로 하얀 탁류가 점점이 흘러내렸다.');
    era.drawLine();
    await kitaru.print_and_wait('그 뒤로 얼마나 더 계속되었을까요?');
    await kitaru.print_and_wait([
      '다음 날 눈을 떴을 때, 저는 ',
      callname,
      '님의 집 침대에 누워 있었답니다아.',
    ]);
    end_ero_and_train();
  } else {
    await print_event_name('승리의 별을 따다', kitaru);
    await era.printAndWait(
      '아리마 기념까지 며칠 남지 않은 시점, 일 년에 한 번뿐인 크리스마스가 먼저 찾아왔다.',
    );
    await era.printAndWait(
      '크리스마스 분위기는 이미 트레센 전체에 퍼져 있었고, 학생들이 장식해 둔 장식물들이 도처에 보였다.',
    );
    await era.printAndWait([
      '아리마 기념의 전술을 연구하던 ',
      me.get_colored_name(),
      '은(는) 창문에서 들려오는 소리를 들었다.',
    ]);
    await cristmas_common(kitaru, me, callname);
    era.printButton('「실체가 있는 별을 갖고 싶은데.」', 1);
    await era.input();
    await kitaru.say_and_wait('에에! 하늘의 별로는 안 되는 건가요?');
    await era.printAndWait([
      '그 말을 듣자마자 오렌지색 머리의 ',
      kitaru.get_teen_sex_title(),
      '는 고개를 숙였다.',
    ]);
    era.printButton('「아리마 기념의 승리라는 별로 장식하자!」', 1);
    await era.input();
    await kitaru.say_and_wait('오오! 아리마 기념!');
    await kitaru.say_and_wait('우와아! 그런 방법이 있다니, 제가 졌어요!');
    era.printButton('「그럼 그렇게 약속한 거다?」', 1);
    await era.input();
    await kitaru.say_and_wait('네! ……네, 네에…… 무슨 말씀이든 다 들을게요!');
    await kitaru.say_and_wait(['저기, 오늘의 ', callname, '은 정말 박력 넘치시네요!']);
    await kitaru.say_and_wait('뭐랄까, 보고만 있어도 가슴이 두근거린달까……');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 얼굴에 사랑스러운 홍조가 피어올랐다. 일렁이는 눈망울은 마치 정성껏 보살펴달라고 속삭이는 듯했다.',
    ]);
    await era.printAndWait([
      '하지만 아리마 기념이 코앞이었기에, ',
      me.get_colored_name(),
      '은(는) 끓어오르는 욕망을 억눌렀다.',
    ]);
    await era.printAndWait([
      '트리 꼭대기에 장식할 별은 아직 없지만, ',
      kitaru.get_colored_name(),
      '와 함께 마지막 별을 따러 가기로 맹세했다.',
    ]);
    await era.printAndWait('아리마 기념이 끝난 뒤에 크리스마스를 축하하는 것도 나쁘지 않을 것이다.');
  }
  return true;
};