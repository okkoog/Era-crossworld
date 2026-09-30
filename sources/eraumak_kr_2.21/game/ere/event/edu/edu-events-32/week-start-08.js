const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_colored_callname,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 29] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:32:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('잠시 동안의 휴식', tachyon);
    await tachyon.say_and_wait('여름 집중 훈련, 그리고……');
    if (edu_marks.plan_b) {
      await tachyon.say_and_wait([
        '그다음 단계는…… 바로 ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        ' 이겠군.',
      ]);
      await tachyon.say_and_wait(
        '음, 세계의 정점을 목표로 삼다니…… 후후, 이거 정말, 더할 나위 없이 어울리는군.',
      );
    } else {
      era.println();
      await tachyon.say_and_wait([
        '그다음 단계는…… 바로 연말의 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        ' 이겠군.',
      ]);
      await tachyon.say_and_wait(
        '음, 가장 영향력 있는 레이스로 우리 이론의 종지부를 찍다니…… 후후, 이거 정말, 더할 나위 없이 어울리는군.',
      );
    }
    era.printButton('「그치만, 그전에……」', 1);
    era.printButton('「우선은 좀 즐기도록 하자」', 2);
    await era.input();
    await era.printAndWait('햇살, 백사장, 비키니.');
    await era.printAndWait(['그리고 ', tachyon.get_colored_name(), '의 수영복.']);
    await era.printAndWait([tachyon.get_colored_name(), '의, 수영복.']);
    era.println();
    if (love >= 50 && tachyon.sex_code - 1) {
      await tachyon.say_and_wait(
        '그저 바라보기만 하는 걸로…… 만족하는 건가? 설마 직접 체험해보고 싶지는 않은 건가?',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 몸을 내밀어 ',
        me.get_colored_name(),
        '의 눈을 지켜보며, 누군가가 먼저 다가오기를 기다리고 있었다.',
      ]);
      era.printButton('손을 뻗어 만진다', 1);
      era.printButton('거절한다', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 참지 못하고 손을 뻗어, ',
          tachyon.get_colored_name(),
          '의 가슴께, 그 가느다란 끈으로는 도저히 담아낼 수 없는 과실을 향했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('응……❤');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 낮은 신음을 내뱉었지만, 눈동자 속의 감정에는 별다른 변화가 없었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 내심 긴장했다. 자신의 기술이 부족한 것일까?',
        ]);
        era.println();
        await era.printAndWait('아무리 노력해도, 좀 더 강하게 해달라는 소리를 들을 뿐이었다.');
        await era.printAndWait([
          '애초에 인간의 힘으로 ',
          tachyon.get_uma_sex_title(),
          '를 만족시키려 한 것 자체가 무리였던 걸까……',
        ]);
        await era.printAndWait([
          '그때, 당신은 문득 수영복 아래에 이전에는 없었거나, 혹은 그리 뚜렷하지 않았던 두 개의 돌기를 발견했다.',
        ]);
        await era.printAndWait([
          '어쩌면 빠른 공략을 위한 치트 버튼일지도 모른다는 생각에, 당신은 홀린 듯 원만한 구체 위의 유일한 돌기를 눌렀다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '잠깐…… 아앗! ',
          callname,
          '! 거기, 거기는 안 돼!',
        ]);
        era.println();
        await era.printAndWait([
          '방금 전까지 마음대로 지시해놓고 이제 와서 멈추라니 말도 안 되는 소리였다. ',
          me.get_colored_name(),
          '은(는) 아랑곳하지 않고 계속해서 뾰족한 끝부분을 괴롭혔다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '내…… 내가 잘못했네…… 방금은 그렇게 말하는 게 아니었어…… 하지 마, 더 이상 누르지 마…… 안 돼, 안 된다니까……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 반응은 ',
          me.get_colored_name(),
          '의 예상보다 훨씬 컸다.',
        ]);
        await era.printAndWait([
          '호기심이 발동한 ',
          me.get_colored_name(),
          '은(는) 문득 동심으로 돌아가, 어떻게 해야 ',
          tachyon.get_colored_name(),
          '의 반응이 가장 격렬해질지 시험해보고 싶어졌다.',
        ]);
        era.println();
        await tachyon.say_and_wait([callname, '…… 하아…… 하아……']);
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 손의 움직임을 살짝 늦추었다. 위기에서 벗어났다고 생각한 모르모트 양이 방심한 틈을 타서……',
        ]);
        era.println();
        await tachyon.say_and_wait('히이익—————— 가, 가버렷!');
        era.println();
        await era.printAndWait('마치 젖소의 우유를 짜내듯, 힘껏 아래로 잡아당겼다.');
        await era.printAndWait([
          '전신을 타고 흐르는 멈추지 않는 경련과 함께, ',
          tachyon.get_colored_name(),
          '은 눈을 치켜뜨며 앞으로 쓰러져 ',
          me.get_colored_name(),
          '의 몸 위로 엎어졌다.',
        ]);
        era.println();
        await tachyon.say_and_wait('에헤헤……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 등을 부드럽게 쓰다듬으며, ',
          tachyon.sex,
          '의 전신 경련을 진정시켜 주었다.',
        ]);
        era.printButton('「정말 한심하네, 겨우 가슴 좀 만졌다고 가버린 거야?」', 1);
        era.printButton(
          `「레이스 ${tachyon.get_uma_sex_title()}라기보단, 번식용 암컷이 더 어울리겠는데」`,
          2,
        );
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '의 모욕적인 말을 듣자, ',
          tachyon.get_colored_name(),
          '은 다시 한번 몸을 떨었다. ',
          tachyon.sex,
          '의 몸 아래에 깔린 ',
          me.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 가랑이 사이에서 흘러나오는 미지근한 온기를 느꼈다.',
        ]);
        begin_and_init_ero(0, 32);
        set_palam_to_max(32, part_enum.breast);
        await quick_make_love(
          new EroParticipant(0, part_enum.hand),
          new EroParticipant(32, part_enum.breast),
          false,
        );
        set_palam_to_max(32, part_enum.masochism);
        await quick_make_love(
          new EroParticipant(0, part_enum.abuse),
          new EroParticipant(32, part_enum.masochism),
          false,
        );
        end_ero_and_train(true);
      }
    } else if (relation >= 225 && tachyon.sex_code - 1) {
      await tachyon.say_and_wait(
        '왜? 그렇게 넋을 잃고 보는 건가? 후후, 실험을 도와준 보답으로 조금 더 봐도 상관없다네.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 몸을 뒤척이며 풍만한 가슴을 더욱 강조해 보였다.',
      ]);
    } else if (relation > 0 && relation <= 225) {
      era.println();
      await tachyon.say_and_wait(
        '허, 이렇게나 노출도 높은 옷을 좋아하는 건가? ……아니, 이런 상황이라면 공기 저항이 줄어들어 확실히 속도가 증가할 가능성이 있겠군……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 말을 하다가 다시 자기만의 생각에 빠져들었다.',
      ]);
      await era.printAndWait([
        '수영복이 달리기에 주는 가중치에 대해서라면…… ',
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 그 엉성한 핫팬츠와 샌들을 보았다. ',
        me.get_colored_name(),
        '이(가) 생각하기에, 문제는 수영복에 있는 게 아닌 것 같았다.',
      ]);
    } else {
      await tachyon.say_and_wait(
        '……나처럼 이성 지상주의가 되라고 강요하지는 않겠네만, 적어도 그 발정 난 원숭이 같은 눈빛은 좀 거둬주게.',
      );
    }
  };

  handlers[95 + 31] = async (
    tachyon,
    me,
    callname,
    flags,
    relation,
    love,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:32:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    if (edu_marks.plan_b) {
      const coffee = get_chara_talk(25);
      await print_event_name('다시 빛나는 광자', tachyon);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 홀로 백사장을 달리고 있었다.',
      ]);
      await era.printAndWait('작년 이맘때와 어딘지 모르게 닮아 있는 풍경이었다.');
      await era.printAndWait([
        '그 생각이 들던 와중 ',
        tachyon.get_colored_name(),
        '은 갑자기 발걸음을 멈추었다.',
      ]);
      era.println();
      await era.printAndWait('지금 이 순간은, 마치 그때 그 순간과도 같았다.');
      era.println();
      await tachyon.say_and_wait('……왔군.');

      era.printButton('「왔어」', 1);
      await era.input();
      await tachyon.say_and_wait('오지 말았어야 했는데.');

      era.printButton('「그래도 결국 왔잖아」', 1);
      era.println();
      await era.printAndWait([
        '미리 약속한 것도 아니었음에도, ',
        me.get_colored_name(),
        '은(는) 1년이라는 시간이 흐른 뒤 오늘, 다시 한번 이 백사장을 찾아왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……됐다, 장난은 그만하고 본론으로 들어가지.');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '의 농담에 더 이상 장단을 맞춰줄 생각이 없는 ',
        tachyon.get_colored_name(),
        '이 곧장 본론을 꺼내려 했으나, 누군가에게 말을 가로막혔다.',
      ]);
      era.printButton('「그것보다」', 1);
      era.printButton('「먼저 한 번 달리는 걸 보여주지 않을래?」', 2);
      await era.input();
      era.drawLine();
      await era.printAndWait('작년 이맘때와 비교했을 때.');
      await era.printAndWait([
        '훈련을 재개한 ',
        tachyon.get_colored_name(),
        '의 주법은 당연히 그때와는 비할 바가 아니었다.',
      ]);
      await era.printAndWait('하지만, 차이가 나는 것은 단순히 훈련의 정도뿐만이 아니었다.');
      era.println();
      await era.printAndWait(
        '작년처럼, 분명 오랫동안 단련하지 않아 엉망진창인 주법임에도 불구하고 매혹적인 빛을 발하던 것처럼.',
      );
      await era.printAndWait([
        '지금의 ',
        tachyon.get_colored_name(),
        '은, ',
        me.get_colored_name(),
        '이(가) 지금까지 봐온 것 중 가장 눈부신 빛을 내뿜고 있었다.',
      ]);
      await era.printAndWait(['마치 착각을 불러일으킬 정도로 밝았다.']);
      await era.printAndWait('———설령 이 순간 빛이 꺼진다 해도, 단 한 점의 후회도 남지 않을 것만 같았다.');
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', ',
        race_infos[race_enum.prix_lat].get_colored_name(),
        '이 끝나면, 난 트윙클 시리즈에서 물러날 걸세.',
      ]);
      era.println();
      await era.printAndWait('일시 중단이 아니라, 은퇴였다.');
      await era.printAndWait('한번 물러나면, 다시는 되돌릴 기회가 없으리라.');
      era.println();
      await tachyon.say_and_wait(
        '내 다리도…… 무리해서 반년이나 버텨줬으니, 이제는 만족할 때도 됐지.',
      );
      await tachyon.say_and_wait([
        '봄 텐노상, 그리고 타카라즈카 기념…… 그다음은, 마지막 개선문상이다.',
      ]);
      await tachyon.say_and_wait([
        '……그래서 마지막으로 묻고 싶네. ',
        callname,
        '…… 후회하지 않나?',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 던진 질문에 ',
        me.get_colored_name(),
        '은(는) 회상에 잠겼다.',
      ]);
      await era.printAndWait('후회라, 무엇을 후회한다는 말인가?');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 타카라즈카 기념에서 전력을 다하게 한 것을?',
      ]);
      await era.printAndWait([
        '텐노상(봄) 전날 밤에 ',
        tachyon.get_colored_name(),
        '을 말리지 않은 것을?',
      ]);
      await era.printAndWait('플랜 B를 선택한 것을?');
      await era.printAndWait([
        '아니면…… ',
        tachyon.get_colored_name(),
        '을 스카우트한 것을?',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 되물어보자, ',
        tachyon.get_colored_name(),
        '은 잠시 침묵했다.',
      ]);
      await era.printAndWait('이윽고, 대답을 꺼냈다.');
      era.println();
      await tachyon.say_and_wait('……전부 다 말일세.');
      await tachyon.say_and_wait([
        '후회되지 않나? 나처럼 까다롭고, 말을 번복하고, 마음이 수시로 바뀌는 ',
        tachyon.get_uma_sex_title(),
        '를 담당으로 삼은 것이.',
      ]);
      if (love >= 50) {
        await tachyon.say_and_wait([
          '처음부터 ',
          sys_get_colored_callname(32, 25),
          '만 담당했더라면 좋았을 텐데～ 같은 생각 말이야.',
        ]);
        era.println();
        await era.printAndWait(
          '질문의 형식을 띠고는 있었지만, 느껴지는 기색은 질투 섞인 투정에 더 가까웠다.',
        );
      }
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 말을 들으며, ',
        me.get_colored_name(),
        '은(는) 진지하게 지난날을 되짚어보았다.',
      ]);
      await era.printAndWait([
        '타카라즈카 기념을 떠올리면, 머릿속에는 ',
        tachyon.get_colored_name(),
        '과 ',
        coffee.get_colored_name(),
        '의 절정의 대결만이 떠올랐다.',
      ]);
      await era.printAndWait([
        '텐노상(봄)을 떠올리면, ',
        coffee.get_colored_name(),
        '의 기이한 주법과…… ',
        tachyon.get_colored_name(),
        '의 다시 피어오른 섬광만이 기억났다.',
      ]);
      await era.printAndWait([
        '플랜 B를 선택했던 그날을 떠올리면…… 진심으로 ',
        tachyon.get_colored_name(),
        '이 무사하기를 바랐던 마음이 되살아났다.',
      ]);
      await era.printAndWait([
        '마지막으로, 그날 훈련장에서 ',
        tachyon.sex,
        '의 주법에 눈이 멀어버려, 영원히 아물지 않을 흉터가 남았던 그날을 생각했다.',
      ]);
      era.printButton('「후회하지 않아」', 1);
      era.printButton('「후회돼, 타키온을 좀 더 일찍 만나지 못한 게 말이야」', 2);
      await era.input();
      await tachyon.say_and_wait('……후후, 그렇군.');
      await tachyon.say_and_wait('그럼, 계속 나를 따라오게나……');
      await tachyon.say_and_wait([
        '함께 세계의 정점에 서서, 내 연구의 성과를 보여주지——— 가장 만족스러운, 오직 ',
        tachyon.get_colored_name(),
        '만의 주법을!',
      ]);
      await era.printAndWait('지금까지 중 가장 만족스럽고, 가장 눈부신 주법을 보여주리라.');
      await era.printAndWait(
        '자신을 늘 지켜봐 주던, 곁에 있는 가장 큰 팬을 만족시킬 단 하나의 레이스.',
      );
      await era.printAndWait('어느덧, 입술 사이가 조금 말라 있었다.');
      await era.printAndWait('더욱 멋진 레이스를 기대하며, 더욱 찬란한 자태를 고대했다.');
      await era.printAndWait([
        '아이돌인 ',
        tachyon.sex,
        '가 이미 그렇게까지 선언했으니, 그 주법에 매료된 모르모트는 수긍하는 것 말고 무슨 말을 더 할 수 있을까.',
      ]);
      era.printButton('「가자, 타키온」', 1);
      await era.input();
      await era.printAndWait('과거는 후회되지 않는다. 지금도 그렇고, 미래에도 그럴 것이다.');
      await era.printAndWait(['두 사람은 프랑스를 향해 발을 내디뎠다——— 개선문상으로.']);
      flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 20, 10], 0);
      flags.wait_flag = sys_love_uma(32, 5) || flags.wait_flag;
    } else {
      await print_event_name('타인의 가능성', tachyon);
      await era.printAndWait('햇살, 백사장.');
      await era.printAndWait([
        '그리고 백사장을 달리고 있는 ',
        tachyon.get_uma_sex_title(),
        '들.',
      ]);
      era.printButton('「정말 청춘이네」', 1);
      await era.input();
      await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + ' A', [
        '……눈앞의 풍경을 보고 그런 소리가 나오다니, 트레이너 ',
        me.get_adult_sex_title(),
        '도…… 정말이지 타키온 선배의 트레이너답네요.',
      ]);
      era.println();
      await era.printAndWait([
        '여름의 백사장 위에서는 ',
        tachyon.get_uma_sex_title(),
        '들 사이의 추격전이 벌어지고 있었다.',
      ]);
      await era.printAndWait('마치 술래잡기라도 하는 듯했다.');
      await era.printAndWait(
        '분명 일대다의 상황임에도 불구하고, 어째서인지 겁을 먹고 도망치는 쪽은 숫자가 많은 쪽이었다.',
      );
      await era.printAndWait([
        '그리고 공포의 대상이 된 쪽은, 다름 아닌 올해 상반기 기세가 가장 등등한 ',
        tachyon.get_uma_sex_title(),
        '이자, ',
        me.get_colored_name(),
        '의 담당 ',
        tachyon.get_uma_sex_title(),
        '인 ',
        tachyon.get_colored_name(),
        '이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '이런 이런…… 이거 원, 요즘 아이들은 좋은 약은 입에 쓰다는 도리조차 모르는 건가.',
      );
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' B',
        '……그게, 단순히 쓴 정도라면 참겠는데요!',
      );
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' C',
        '타키온 선배의 약…… 맛은 나쁘지 않지만, 나쁘지는 않지만, 그래도……!',
      );
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' D',
        '몸에서 빛이 난다니…… 그런 건 정말 너무 창피하다고요!',
      );
      era.println();
      await era.printAndWait('…………어?');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 눈앞의 ',
        tachyon.get_uma_sex_title(),
        '들을 보았다. 햇빛 때문에 그리 뚜렷하지는 않았지만, 확실히 팔이나 어깨, 혹은 다리 부위에서 미약한 빛이 뿜어져 나오고 있었다.',
      ]);
      await era.printAndWait('그런데, 왜 빛이 나는 곳들이 하나같이 묘한 부분들인 걸까.');
      await era.printAndWait([
        '응? 저쪽 ',
        tachyon.get_uma_sex_title(),
        '는 왜 허벅지 안쪽이……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……이 약의 효과는 혈류가 가속된 부위를 발광하게 만드는 것이라네. 게다가 약효는 훈련 중인 그 한 시간 동안만 유효할 텐데.',
      );
      await tachyon.say_and_wait(
        '다만 부작용으로 흥분 상태에서 접촉된 부위의 단백질 UMA—A의 활성을 가속시키지. 혈류 가속 시 발광하는 원리가 바로 이 UMA—A를 통해……',
      );
      era.drawLine();
      await tachyon.say_and_wait(
        '요컨대…… 마음에 둔 사람이나, 혹은 자신을 두근거리게 만드는 사람과 신체 접촉이 있어야만 빛이 난다는 소릴세.',
      );
      era.println();
      await era.printAndWait('아, 과연 그렇군.');
      await era.printAndWait('이제야 어깨나 팔이 빛나는 이유를 알 것 같았다.');
      await era.printAndWait('……잠깐, 그럼 허벅지 안쪽의 저건……');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '가 돌연 얼굴을 붉히는 모습을 보고 모든 것을 깨달았다.',
      ]);
      await era.printAndWait('……요즘 애들은 참 대담하게 노는구나.');
      era.println();
      await tachyon.say_and_wait(
        '아무튼…… 이 약은 어디까지나 보조적인 역할일 뿐이네. 반드시 꾸준한 훈련이 병행되어야만 효과가 있지.',
      );
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' B',
        '저…… 저희 정말 열심히 훈련할게요! 진짜 땡땡이 안 칠게요! 그러니까 약 같은 건……!',
      );
      await tachyon.say_and_wait(
        '후후, 그건 안 되지. 두 가지가 결합되어야 최고의 향상 효과를 볼 수 있으니…… 얌전히 마시게나!',
      );
      era.println();
      await era.printAndWait([
        '눈 깜짝할 새에, ',
        tachyon.get_colored_name(),
        '은 ',
        tachyon.get_uma_sex_title(),
        '들이 방심한 틈을 타 전광석화 같은 속도로 그중 한 명의 ',
        tachyon.get_uma_sex_title(),
        ' 앞으로 달려들어, 번개 같은 속도로 ',
        tachyon.sex,
        '의 입안에 약을 털어 넣었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '똑똑히 지켜보게나…… 오직 ',
        callname,
        '을 대상으로 단련해온 이 강제 투약 능력을! 하하하하하하하!',
      ]);
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' B',
        '아앗———!',
      );
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' C',
        '끄아악————!',
      );
      era.println();
      await era.printAndWait([
        '아무리 그래도 G1급 ',
        tachyon.get_uma_sex_title(),
        '이자, ',
        me.get_colored_name(),
        '이(가) 인정한 가장 빠른 ',
        tachyon.get_uma_sex_title(),
        '이다. 아직 완전히 성장하지 못한 후배들이 ',
        tachyon.get_colored_name(),
        '의 상대가 될 리 없었다.',
      ]);
      await era.printAndWait('불과 몇 분 만에, 백사장은 시체들이 즐비한 전장이 되었다.');
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' B',
        '타…… 타키온 선배, 마치 딴사람이 된 것 같아……',
      );
      era.println();
      await era.printAndWait([
        '그러고 보니, 후배들 눈에 비칠 이미지를 관리해 실험을 원활하게 하려고 ',
        tachyon.get_colored_name(),
        '은 보통 후배들 앞에서 꾸며낸 성숙한 선배의 모습을 유지해왔었다.',
      ]);
      await era.printAndWait([
        '말하자면 지금의 이 모습이야말로 ',
        tachyon.get_colored_name(),
        '이라는 이름의 ',
        tachyon.get_uma_sex_title(),
        '가 가진 본성일 것이다.',
      ]);
      await era.printAndWait(['하지만…… ', tachyon.sex, '의 말도 틀린 건 아니었다.']);
      era.printButton('「타키온도 정말…… 많이 변했네」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 며칠 전 ',
        tachyon.get_colored_name(),
        '이 했던 말을 떠올렸다.',
      ]);
      await tachyon.used_to_say_and_wait(
        '타키온 선배처럼 강해지고 싶어요…… 그 아이들이 나에게 그렇게 말해줬다네!',
      );
      await tachyon.used_to_say_and_wait([
        '자! ',
        callname,
        '! 그 아이들을 위해서라도, 반드시 그들에게 가장 잘 맞는 약을 조제해야만 하네!',
      ]);
      await era.printAndWait(['「실험을 위해서 그들을 모르모트로 쓴다」는 말이 아니었다.']);
      await era.printAndWait(['「그들을 위해서, 약을 조제한다」는 말이었다.']);
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' A',
        '역시 그런 거였나…… 예전의 그 다정했던 타키온 선배는 대체 어디로 가버린 건지……',
      );
      era.println();
      await tachyon.say_and_wait('오호라～～ 여기 아직 포니짱 한 마리가 남아있었군?');
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + ' A',
        '히익!!!',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '의 곁에 숨어 있던 마지막 어린 ',
        tachyon.get_uma_sex_title(),
        '마저 ',
        tachyon.get_colored_name(),
        '에게 붙잡혀 약이 먹여지는 것을 보며, 이 잔혹한 해변 실험은 ',
        tachyon.get_colored_name(),
        '의 완전 승리로 막을 내렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '자, ',
        callname,
        ', 우리의 오늘 실험을 시작해볼까.',
      ]);
      await era.printAndWait('하지만 이 점만큼은, 결코 변하지 않았다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 여전히 한계를 추구하고 그 한계를 돌파하려는 ',
        tachyon.get_uma_sex_title(),
        '였다.',
      ]);
      era.printButton('「그래서, 오늘 실험 주제는 뭐야?」', 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '…… 자네도 알고 있겠지. 최근 ',
          sys_get_colored_callname(32, 2),
          '이 물 위를 달리는 법을 터득했다는 모양이더군.',
        ]);
        await era.printAndWait('…………어?');
        era.println();
        await tachyon.say_and_wait(
          '계산에 따르면, 초속 30m가 넘는 속도로 수면 위를 질주할 수만 있다면 확실히 경공술처럼 물을 딛고 서는 게 가능하다네.',
        );
        era.println();
        await era.printAndWait('……아니, 초속 30m라고?');
        await era.printAndWait('어느샌가 당신의 허리에는 밧줄 하나가 묶여 있었다.');
        await era.printAndWait([
          '그리고 ',
          tachyon.get_colored_name(),
          '은 해변의 수상 오토바이에 올라탔다.',
        ]);
        await me.say_and_wait('……왜 너는 오토바이고 나는 맨몸으로 물 위를 뛰어야 하는 건데!?');
        era.println();
        await tachyon.say_and_wait(['힘내게나, ', callname, ', 자네라면 할 수 있을 걸세.']);
        era.println();
        await era.printAndWait('말이 끝나기가 무섭게, 몸이 허공으로 붕 떠올랐다.');
        await era.printAndWait([
          '경공술인지 뭔지에는 성공했는지 모르겠지만, 그 광경을 목격한 어린 ',
          tachyon.get_uma_sex_title(),
          '들의 말에 따르면, 물수제비를 뜰 때 수면 위를 튕겨 다니는 돌멩이 같았다고 했다.',
        ]);
      } else {
        await tachyon.say_and_wait('오늘은…… 좀 흥미로운 실험을 해보도록 하지.');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          tachyon.get_colored_name(),
          '이 수많은 후배가 지켜보는 앞에서 ',
          me.get_colored_name(),
          '의 손을 꽉 잡았다.',
        ]);
        era.printButton('「타…… 타키온?」', 1);
        await era.input();
        await era.printAndWait([
          '바닥에 엎드려 죽은 척하던 후배들이 일제히 고개를 들어 ',
          me.get_couple_title(),
          ' 두 사람을 빤히 쳐다보았다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 얼굴을 ',
          me.get_colored_name(),
          '의 귓가에 바짝 대고 조용히 속삭였다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '전에 말하지 않았나, 관객, 혹은 팬에 대한 관찰을 진행하고 싶다고.',
        );
        await tachyon.say_and_wait([
          '지금은 감정 자극 방면에 대한 탐구라네…… 예를 들어, 내가 여기서 자네에게 입을 맞춘다면 ',
          tachyon.sex,
          '들의 반응은 어떨 것 같나?',
        ]);
        era.println();
        await era.printAndWait([
          '햇살이 너무 뜨거웠던 탓일까, ',
          me.get_colored_name(),
          '은(는) 차마 고개를 들어 ',
          tachyon.get_colored_name(),
          '의 눈을 마주 볼 엄두를 내지 못했다.',
        ]);
        await era.printAndWait([
          '문득 ',
          tachyon.get_colored_name(),
          '의 입술이 ',
          me.get_colored_name(),
          '의 얼굴 가까이 다가왔다. 몸에 가려진 탓에, 보는 이들에게는 정말로 입을 맞춘 것처럼 보였다.',
        ]);
        await era.printAndWait([
          '곁에서 구경하던 ',
          tachyon.get_uma_sex_title(),
          '들이 작은 비명을 내질렀다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '정말…… 불가사의하군. ',
          callname,
          ', 왠지 모르겠지만 ',
          tachyon.sex,
          '들의 목소리를 들으니 나 자신의 행동 욕구가 더 강해지는 것 같네.',
        ]);
        await tachyon.say_and_wait(
          '칼리굴라 효과인 걸까? 공공장소에서 이런 짓을 한다는 수치심이 오히려 행위에 대한 갈망을 증폭시키고 있어.',
        );
        era.println();
        await tachyon.say_and_wait('쪽❤');
        era.println();
        await era.printAndWait('정말로 입을 맞추고 말았다.');
        await era.printAndWait('이젠 스스로를 설득할 핑계조차 남아있지 않았다.');
        era.println();
        await tachyon.say_and_wait(
          '자…… 그럼 계속할 텐가? 관객들의 감상을 한 번 들어보도록 하지❤',
        );
        era.println();
        await era.printAndWait([
          '마지막 말을 내뱉을 때, ',
          tachyon.get_colored_name(),
          '의 목소리가 갑자기 커졌다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 고개를 돌려 백사장을 바라보자, 눈앞의 광경에 얼굴이 새빨갛게 달아오른 앳된 얼굴들이 보였다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '보아하니…… 다들 아주 좋아하는 모양이군. 이거, 자네가 타카라즈카 때 나에게 말했던 거 아닌가? 팬 서비스…… 같은 거 말이야.',
        ]);
        era.println();
        await era.printAndWait([
          '큰일이었다. 예전에 ',
          tachyon.get_colored_name(),
          '을 설득하려 했던 말들이 부메랑이 되어 돌아오고 있었다.',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '의 몸을 껴안더니, 그 기세로 ',
          me.get_colored_name(),
          '을(를) 모래사장 위로 눌러 눕혔다.',
        ]);
        era.println();
        await tachyon.say_and_wait('더…… 계속하고 싶은가?');
        era.printButton('「하고 싶지 않아」', 1);
        era.printButton('「……하고 싶지 않아」', 2);
        await era.input();
        await era.printAndWait(
          '아무리 그래도, 백번 양보한다 해도 이렇게나 많은 사람 앞에서 이건 너무 지나친 일이었다.',
        );
        await era.printAndWait([
          '게다가 자세히 보니, 사실 ',
          tachyon.get_colored_name(),
          '의 얼굴도 옅게 붉어져 있었다…… 수줍음 때문인지 흥분 때문인지는 알 수 없었지만.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '그럼…… 저 어린 ',
          tachyon.get_uma_sex_title(),
          '들로부터 흥분 시의 데이터를 수집하는 건 자네에게 맡기겠네.',
        ]);
        era.println();
        await era.printAndWait([
          '갑자기 ',
          tachyon.get_colored_name(),
          '이 ',
          me.get_colored_name(),
          '의 몸 위에서 일어났다.',
        ]);
        era.println();
        await tachyon.say_and_wait('더 계속하고 싶다면…… 데이터를 챙겨서 나를 찾아오게나❤');
        era.println();
        await era.printAndWait([
          '목소리를 낮추지 않은 노골적인 암시에 주변의 ',
          tachyon.get_uma_sex_title(),
          '들이 다시 한번 술렁거렸다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 코를 쓱 문질렀다. 이래서야 데이터 수집은 쉽겠지만, 나중에 타키온에게 가든 안 가든 뒷말이 나오는 건 피할 수 없을 것 같았다.',
        ]);
      }
      flags.wait_flag = get_attr_and_print_in_event(32, [0, 0, 0, 5, 10], 0);
    }
  };
};