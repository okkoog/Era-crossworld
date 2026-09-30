const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const say_by_mother = require('#/event/edu/edu-events-85/say-by-mother');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const CharaSkills = require('#/data/chara-skills');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,RaceEndParams)>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (era.get('cflag:85:육성턴수합산') >= 48 || extra_flag.rank !== 1) {
      return true;
    }
    extra_flag.relation_change = extra_flag.love_change = 0;
    await print_event_name('때를 기다리며', ruby);
    await ruby.say_and_wait('다녀왔습니다.');
    era.printButton('「수고했어.」', 1);
    era.printButton('「우와, 스타킹이 엄청 더러워졌네.」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await ruby.say_and_wait('감사합니다.');
    } else {
      await ruby.say_and_wait('지긋이——', true);
    }
    era.println();
    await era.printAndWait('어쨌든, 화려한 일족의 이름에 부끄럽지 않은 멋진 데뷔전이었다.');
    await ruby.say_and_wait('잠시 후에 기자 회견이 있으니, 옷을 갈아입고 가겠습니다.');
    era.printButton('「알겠어.」', 1);
    era.printButton('「내가 좀 도와줄까?」', 2);
    if ((await era.input()) === 2) {
      extra_flag.relation_change -= 5;
      extra_flag.love_change++;
    }
    era.drawLine();
    await say_by_passer_by('기자 A', [
      '아직 이르긴 합니다만, 트리플 티아라야말로 바로 ',
      ruby.get_colored_name(),
      ruby.get_adult_sex_title(),
      '의 본래 목표 노선이라고 생각하는 이들이 많습니다.',
    ]);
    await say_by_passer_by('기자 B', '오늘 경기를 보니 저도 그렇게 느껴지더군요.');
    await say_by_passer_by('기자 B', '어머님과 대등하거나, 혹은 그 이상의 광채를 느꼈습니다.');
    await say_by_passer_by('기자 C', [
      '그렇고말고요. 그 이후에는 부디 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '이나 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '등의 레이스에도 출전해 주었으면 좋겠군요.',
    ]);
    await era.printAndWait('흥분과 기대감……');
    await ruby.say_and_wait('모두 감사드립니다.');
    await ruby.say_and_wait('여러분께서 기대하시는 만큼의 활약을 반드시 보여드리겠습니다.');
    await era.printAndWait([
      '이때, ',
      me.get_colored_name(),
      '의 머릿속에 번뜩이는 생각이 스쳤다! 데뷔전이 시작되기 전——',
    ]);
    await ruby.used_to_say_and_wait('기대를 받는 상황은 무척 감사하면서도, 한편으로는 부담스럽기도 합니다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '에게 있어서 이것은 평범하고도 당연한 일이다.',
    ]);
    await era.printAndWait('하지만……');
    era.printButton(`「내가 바로 ${m_call_r}의 트레이너니까 말이지.」`, 1);
    await era.input();
    await era.printAndWait([
      ruby.get_colored_name(),
      '가 주니어급에서 G1 승리를 거머쥘 만한 자질을 갖추고 있다는 점을 감안하면, 트리플 티아라조차 ',
      me.get_couple_title(),
      '의 여정의 중간 기착지에 불과할지도 모른다.',
    ]);
    await era.printAndWait([
      '기자들의 흥을 깨고 싶지 않았기에, ',
      me.get_colored_name(),
      '은(는) 이 일에 대해 입을 닫기로 했다.',
    ]);
    era.drawLine({ content: '기자 회견이 끝난 후'});
    await ruby.say_and_wait('올해 안에는 훈련에만 집중하고 싶습니다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 트레이너가 된 이후 ',
      me.get_colored_name(),
      '이(가) 알게 된 사실이 있었다.',
    ]);
    await ruby.say_and_wait('트리플 티아라 전선이야말로 【화려한 일족】이 가장 중시하는 무대입니다.');
    await era.printAndWait('그 무대의 정점에 서기 위해서는 훈련을 거듭해 역량을 쌓을 필요가 있다.');
    await era.printAndWait(
      '양이 쌓이면 질적 변화를 일으키는 법이다. 물론, 레이스에 출전해 실전 경험을 쌓는 선택지도 존재한다.',
    );
    era.printButton(`「${m_call_r}.」`, 1);
    await era.input();
    await ruby.say_and_wait('당신이 무슨 뜻으로 말씀하시는지 이해합니다.');
    await ruby.say_and_wait('당연히 레이스 출주도 고려하고 있어요.');
    await ruby.say_and_wait('하지만 현재로서는 제 신체의 본격화가 완전히 이루어졌다고 보기는 어렵습니다.');
    await ruby.say_and_wait('그러니 당분간은 훈련을 중심으로 하는 방침을 유지하고 싶습니다.');
    await era.printAndWait('아무래도 더 이상 논쟁할 여지는 없는 듯하다.');
    await era.printAndWait([
      me.get_colored_name(),
      ' 역시 본래는 ',
      ruby.get_colored_name(),
      '의 신체를 좀 더 착실하게 단련시키고 싶었기에, 본인 또한 같은 생각을 하고 있다면 더할 나위 없이 좋은 일이었다——',
    ]);
    era.printButton('「알겠어.」', 1);
    await era.input();
    await ruby.say_and_wait('대단히 감사합니다.');
    await era.printAndWait([
      '그동안의 훈련 성과를 점검하기 위한 시험대로, ',
      me.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '는 해가 바뀐 뒤의 첫 중상 레이스로 ',
      race_infos[race_enum.hoch_rev].get_colored_name(),
      '를 선택했다—— 바로 ',
      race_infos[race_enum.oka_sho].get_colored_name(),
      '의 전초전이다.',
    ]);
  };

  handlers[race_enum.hoch_rev] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('지금이야말로 화려한 순간', ruby);
    await ruby.say_and_wait('마침내 해냈군요……');
    await ruby.say_and_wait('……');
    era.drawLine({ content: '대기실 안'});
    await ruby.say_and_wait('오늘 레이스에 대한 평가를 부탁드립니다.');
    era.printButton('「우선 스타트 시점부터 짚어볼까.」', 1);
    await era.input();
    await era.printAndWait('피드백 회의가 한동안 이어졌다……');
    await ruby.say_and_wait([r_call_m, ', 오늘은 여기까지만 해도 괜찮을까요.']);
    await ruby.say_and_wait('그럼 방금 분석한 반성점들을 토대로 훈련 계획을 조정하겠습니다.');
    await era.printAndWait([
      '다음 목표는 ',
      race_infos[race_enum.oka_sho].get_colored_name(),
      '. ',
      ruby.get_colored_name(),
      '의 ',
      ruby.sex_code === 1 ? '아버님': '어머님',
      '께서도 승리를 거머쥐었던 트리플 티아라의 제1전이다.',
    ]);
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.attr_change[get_random_value(0, 4)] = 0;
    extra_flag.pt_change = 35;
  };

  handlers[race_enum.oka_sho] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('기대, 깊어지다', ruby);
    await era.printAndWait([
      '레이스가 끝난 후, ',
      ruby.get_colored_name(),
      '는 뜻깊은 승리를 거두었음에도 불구하고 여전히 평온하고 차분한 표정을 유지하고 있었다.',
    ]);
    era.printButton('「축하해.」', 1);
    await era.input();
    await ruby.say_and_wait('감사합니다. 하지만 아직 멀었습니다.');
    await era.printAndWait([
      race_infos[race_enum.yush_him].get_colored_name(),
      '는 티아라 노선의 제2전이자, 과거 ',
      ruby.get_colored_name(),
      '의 어머님께서 고배를 마셨던 무대이기도 하다.',
    ]);
    await era.printAndWait([
      '중거리 이상의 레이스에서는 ',
      ruby.get_colored_name(),
      '의 실력에 아직 미지수인 부분이 남아 있었다.',
    ]);
    await ruby.say_and_wait('제가 가진 과제는 아마도……');
    await ruby.say_and_wait('아니요. 어떤 문제가 있든 간에, 신속하게 해결하면 그만입니다.');
    await ruby.say_and_wait('그러니 저를 철저하게 지도해 주십시오.');
    await era.printAndWait([
      '그렇게 다음 목표 레이스인 ',
      race_infos[race_enum.yush_him].get_colored_name(),
      '를 향해, 다시 한번 훈련의 나날이 시작되었다.',
    ]);
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.yush_him] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (extra_flag.rank === 1) {
      await print_event_name('비둘기의 피', ruby);
      await ruby.say_and_wait('위화감.');
      await ruby.say_and_wait(
        '어떤 책략도 쓰지 않았고, 타이밍을 잴 필요조차 없이, 그저 순수한 신체 능력만으로 기어이……',
      );
      await ruby.say_and_wait('제가 저 자신이 아닌 다른 누군가에게 장악당했던 건가요?');
      await ruby.say_and_wait([r_call_m, ', 당신은 대체……']);
      era.printButton('（눈치챘구나）', 1);
      era.printButton('「나쁘지 않았지?」', 2);
      if ((await era.input()) === 1) {
        extra_flag.relation_change = 3;
      } else {
        extra_flag.love_change = 1;
      }
      await ruby.say_and_wait('제 몸에 무슨 짓을 한 건가요?');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('아니요, 제가 실언을 했습니다. 앞으로도 계속 당신 뜻대로 해 주세요.');
      await ruby.say_and_wait('일족을 위해서라면, 전 언제든 제 모든 것을 당신에게 바칠 준비가 되어 있으니까요.');
    } else {
      await print_event_name('참나무 잎사귀는 넓다', ruby);
      await ruby.say_and_wait('그런가요, 역시, 저는……', true);
      await ruby.say_and_wait('대단히 죄송합니다. 아직 미숙한 모습을 보여드리고 말았군요.');
      await ruby.say_and_wait([
        r_call_m,
        '께서도 오늘을 위해 훈련 외에도 수많은 도움을 주셨는데 말이죠.',
      ]);
      await ruby.say_and_wait('보답을 해드리지 못해 무척 송구스러울 따름입니다.');
      era.printButton('「나야말로 미안해……」', 1);
      era.printButton('「사실 다른 방식으로 보답할 방법이 있어.」', 2);
      if ((await era.input()) === 1) {
        extra_flag.relation_change = 3;
        await ruby.say_and_wait('……네?');
        await era.printAndWait([
          ruby.get_colored_name(),
          '가 속마음을 드러내지 않은 채 겉으로만 담담한 척하는 모습이, ',
          me.get_colored_name(),
          '의 마음을 한층 더 안타깝고 후회스럽게 만들었다.',
        ]);
        era.printButton('「다음번엔…… 반드시 네가……」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('……대단히, 감사합니다.');
        await ruby.say_and_wait([
          '다음 목표는 ',
          race_infos[race_enum.shuk_sho].get_colored_name(),
          '입니다만, 그전에 한 가지 제안하고 싶은 것이 있습니다.',
        ]);
        await ruby.say_and_wait([
          '그 전초전으로서 치러지는 ',
          race_infos[race_enum.rose_sta].get_colored_name(),
          '에 출전하고 싶습니다.',
        ]);
        await ruby.say_and_wait(
          '여름 합숙 또한 고되겠지만, 본 무대인 레이스에서 최상의 컨디션을 유지하기 위해서는 필연적인 선택입니다.',
        );
        await era.printAndWait('확실히 중간에 레이스를 한 번 거치면 큰 경기에서 몸이 더 잘 적응할 터였다.');
        era.printButton('「알겠어.」', 1);
        await era.input();
        await ruby.say_and_wait('부탁드리겠습니다.');
        era.printButton('「그럼, 입구에서 기다릴게.」', 1);
        await era.input();
        await ruby.say_and_wait('네.');
      } else {
        extra_flag.love_change = 1;
        await ruby.say_and_wait('그런 농담은 두 번 다시 듣고 싶지 않군요.');
        era.printButton('「레이스는 즐겼어?」', 1);
        await era.input();
        await ruby.say_and_wait('네?');
        era.printButton('「한번 레이스 자체를 즐겨봐.」', 1);
        await era.input();
        era.printButton('「너를 어떻게 승리로 이끌지는 내가 고민할 몫이니까.」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          '가 고개를 숙인 채 무언가를 깊이 생각하는 사이, ',
          me.get_colored_name(),
          '은(는) 먼저 자리를 떴다.',
        ]);
      }
    }
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.rose_sta] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    extra_flag.relation_change = 0;
    await print_event_name('화려한 변화', ruby);
    await ruby.say_and_wait('——음?');
    await ruby.say_and_wait('오른발이…… 방금 아주 잠깐 이상한 위화감이……', true);
    await ruby.say_and_wait('조금만 경과를 지켜보도록 하죠. 계속 신경 쓰인다면 그때……', true);
    await era.printAndWait([
      '——며칠 후, ',
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '로부터 「다리 주변에 미세한 위화감이 느껴진다」는 보고를 받았다……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 즉시 ',
      ruby.get_colored_name(),
      '를 데리고 평소 자주 찾던 주치의를 방문했다.',
    ]);
    await say_by_passer_by('의사', [
      ruby.get_colored_name(),
      ' 양의 오른발 증상은 급성 화농성 질환입니다.',
    ]);
    await say_by_passer_by('Doctor', '이른바 【봉와직염】이라고 하는 것이죠.');
    await me.say_and_wait('!', true);
    await say_by_passer_by('의사', '다행히 그리 심각한 상황은 아니니 안심하십시오.');
    await say_by_passer_by('의사', '위화감이 들기 시작한 초기 단계에 곧바로 진료를 받으러 온 덕분입니다.');
    await say_by_passer_by('의사', [
      '두 분의 다음 목표인 ',
      race_infos[race_enum.shuk_sho].get_colored_name(),
      '이 시작되기 전까지는 충분히 완치될 수 있습니다.',
    ]);
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('결정했습니다. 올해 예정되어 있던 목표 레이스는 잠정 철회하겠어요.');
    await ruby.say_and_wait('제 다리는 태생적으로 문제가 있으니, 어쩔 수 없는 일입니다.');
    await ruby.say_and_wait('다리 문제에 관해서는 증상의 경중을 막론하고 늘 신중하게 대처해야 합니다.');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait([r_call_m, '.']);
    await ruby.say_and_wait('레이스 출전 여부에 관한 모든 판단은 당신에게 일임하겠습니다.');
    era.printButton('「그래, 그래.」', 1);
    era.printButton('「나만 믿어줘.」', 2);
    if ((await era.input()) === 2) {
      extra_flag.relation_change = 3;
    }
    await say_by_passer_by('의사', '하지만 정말로 괜찮겠습니까?');
    await say_by_passer_by('의사', [
      race_infos[race_enum.shuk_sho].get_colored_name(),
      '과 ',
      race_infos[race_enum.eliz_cup].get_colored_name(),
      '는 당신의 오랜 꿈이었을 텐데요.',
    ]);
    await ruby.say_and_wait('……꿈.');
    await ruby.say_and_wait('신경 써주신 호의에는 감사드립니다만……');
    await ruby.say_and_wait('하지만, 제게는 이미 새로운 사명이 생겼습니다.');
    await say_by_passer_by('집사', '한창 대화 나누시는 중에 실례하겠습니다.');
    await say_by_passer_by('집사', [
      ruby.sex_code === 1 ? '도련님': '아가씨',
      ', 곧바로 회견 일정을 잡아드릴까요?',
    ]);
    await ruby.say_and_wait('네, 그렇게 진행해 주세요.');
    await ruby.say_and_wait(
      '예정보다 조금 앞당겨지긴 했습니다만…… 목표 레이스 변경 건과 함께 오늘 공식 발표를 하도록 하죠.',
    );
    era.drawLine({ content: '기자 회견장'});
    await say_by_passer_by('기자 A', [
      '트레이너 ',
      me.get_adult_sex_title(),
      ', 방금 발표하신 내용에 틀림이 없는 건가요?',
    ]);
    era.printButton('「네, 맞습니다. 아무 문제 없습니다.」', 1);
    await era.input();
    await ruby.say_and_wait('그리고 한 가지 더, 여러분께 보고드릴 말씀이 있습니다. 향후 목표 레이스에 관해서입니다.');
    await ruby.say_and_wait([
      '다가오는 봄의 ',
      race_infos[race_enum.takm_kin].get_colored_name(),
      '에 출전하기로 결정했습니다.',
    ]);
    await ruby.say_and_wait('금일 이 자리에서 저 다이이치 루비는 단거리 전선에 전격 합류할 것임을 선언합니다.');
    await me.say_and_wait('에에에에엑?!', true);
    era.drawLine();
    await era.printAndWait('간략하게 준비된 기자 회견은 순조롭게 마무리되었다——');
    await ruby.say_and_wait('오늘 정말 수고 많으셨습니다.');
    era.printButton('「오늘은 정말 파란만장한 하루였네.」', 1);
    era.printButton('「이렇게 고생한 나한테 무슨 포상이라도 없어?」', 2);
    const ret2 = await era.input();
    if (ret2 === 1) {
      await ruby.say_and_wait('염려하실 필요 없습니다. 전부 제 상정 범위 내의 일이니까요.');
      await ruby.say_and_wait('내년에는 아마도 지금까지와는 전혀 다른 형태로 노력을 요구받는 한 해가 되겠지요.');
      await ruby.say_and_wait([r_call_m, ', 내년에도 부디 정진해 주시길 바랍니다.']);
      await ruby.say_and_wait('그럼……');
      await ruby.say_and_wait('……');
      era.printButton(`「${m_call_r}?」`, 1);
      await era.input();
      await ruby.say_and_wait('내년뿐만 아니라, 앞으로도 쭉 잘 부탁드립니다.');
    } else {
      extra_flag.relation_change = -3;
      extra_flag.love_change = 1;
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('눈을 감아 주세요.');
      await ruby.say_and_wait('쪽.', true);
      await era.printAndWait([
        '사실 ',
        me.get_colored_name(),
        '은(는) 그저 타이밍 좋게 눈을 감았을 뿐이었고, ',
        ruby.get_colored_name(),
        '가 무엇을 하려는지 물어보려던 참이었다.',
      ]);
      await era.printAndWait([
        '뺨가에서 들려온 부드러운 입맞춤 소리에 ',
        me.get_colored_name(),
        '은(는) 순간 말문이 막혀버렸고, 한동안 감히 눈을 뜰 생각조차 하지 못했다.',
      ]);
      await era.printAndWait([
        '그 향긋하고 부드러운 감촉을 마음속으로 다 음미하고 나서야 눈을 떴을 때, ',
        ruby.get_colored_name(),
        '은(는) 이미 그 자리를 떠나고 없었다.',
      ]);
    }
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.attr_change[get_random_value(0, 4)] = 0;
    extra_flag.pt_change = 35;
  };

  handlers[race_enum.takm_kin] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('3대 제패', ruby);
    await ruby.say_and_wait('승리했어……');
    await ruby.say_and_wait('헤헤……');
    await era.printAndWait([ruby.get_colored_name(), '가 고개를 살짝 흔들었다.']);
    await ruby.say_and_wait('여러분들의 성원, 진심으로 감사드립니다. 일족의 오랜 염원을 마침내 이루어 냈습니다.');
    await ruby.say_and_wait('다음 레이스에서도 한층 더 멋진 질주를 선사해 드리겠습니다.');
    era.drawLine({ content: '지하 통로 안'});
    await ruby.say_and_wait('예전에 당신이 했던 일들은, 전부 옳았던 모양이군요.');
    await ruby.say_and_wait('비록 인간의 몸이지만, 당신은 어떤 면에서는 무척 강인한 생물입니다.');
    await ruby.say_and_wait('앞으로 나아가는 길에 저 또한 다시 벽에 부딪히는 날이 올지도 모릅니다.');
    await ruby.say_and_wait('그러니 부디, 제 손을 놓지 말아 주세요.');
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
    extra_flag.skill_change = [
      CharaSkills.get(85).get().indexOf(200672) === -1 ? 200672 : 200671,
    ];
  };

  handlers[race_enum.yasu_kin] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (era.get('cflag:85:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('진홍은 정열의 색', ruby);
    await era.printAndWait([
      '레이스가 끝난 후, ',
      ruby.get_colored_name(),
      '의 표정은 그 어느 때보다 활짝 피어 있었다.',
    ]);
    await era.printAndWait([
      '얼음처럼 날카로운 광채, 그것이 지금까지 ',
      ruby.sex,
      '가 풍기던 고유한 인상이었다.',
    ]);
    await era.printAndWait('하지만 지금은 마치 온몸의 세포 하나하나가 살아 숨 쉬듯, 내면에서부터 눈부신 광채가 뿜어져 나오고 있었다.');
    await ruby.say_and_wait(r_call_m);
    await ruby.say_and_wait('다음 목표에 관해 제안하고 싶은 바가 있습니다.');
    await era.printAndWait([
      '그것은 바로 가장 빠른 이를 가려내는 레이스인——',
      race_infos[race_enum.sprt_sta].get_colored_name(),
      '입니다.',
    ]);
    await ruby.say_and_wait('네, 맞습니다.');
    await ruby.say_and_wait('그곳에서라면 제가 한층 더 높은 정상에 도달할 수 있으리라 확신합니다.');
    await ruby.say_and_wait('쟁쟁한 실력자들과 강력한 라이벌들이 저희를 매섭게 겨누어 오겠지요.');
    await ruby.say_and_wait('하지만 결코 외면할 수 없는 강력한 의무감이 온몸으로 느껴집니다.');
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
    extra_flag.skill_change = [
      CharaSkills.get(85).get().indexOf(201382) === -1 ? 201382 : 201381,
    ];
  };

  handlers[race_enum.sprt_sta] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (era.get('cflag:85:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    const miracle = get_chara_talk(93);
    await print_event_name('미래는……', ruby);
    await miracle.say_and_wait('스퍼트…… 그 누구보다 빠르게, 누구보다도 먼저—— 결승선을 통과하겠어!');
    await miracle.say_and_wait('다리가…… 너무 아파, 더는 땅을 박차고 나갈 수가……');
    await miracle.say_and_wait('안 돼! 모두를 위해서라도, 난 어떻게든 승리를……');
    await ruby.say_and_wait('그렇게 두고 보지 않겠습니다. 당신을 기다리는 그 절망이 도래하기 전에……');
    await ruby.say_and_wait('제가 미래를 개척해 보이겠어요!');
    await miracle.say_and_wait([
      '어, 루비?',
    ]);
    era.drawLine({ content: '레이스 전'});
    await ruby.used_to_say_and_wait(
      '모든 것을 내던져서라도 지금 이 순간 은혜를 갚겠다, 그것 역시 나쁜 선택은 아닙니다.',
    );
    await ruby.used_to_say_and_wait('하지만 그것이 과연 당신에게 있어 진정 최고의 선택이라 단언할 수 있습니까?');
    await ruby.used_to_say_and_wait('당신이 모든 것을 불태워 바친다고 한들, 과연 그 사람들이 진정으로 보답받을 수 있을까요?');
    await miracle.used_to_say_and_wait('하필이면 왜 이 타이밍에 그런 얘길……');
    await ruby.used_to_say_and_wait(
      '그저 곧 한계에 도달할 『현재』만을 바라보며 달리는 것, 전 그런 방식은 딱 질색입니다.',
    );
    await ruby.used_to_say_and_wait(['저는…… ', r_call_m, ' 덕분에.']);
    await ruby.used_to_say_and_wait(
      '지금까지와는 다른 새로운 길을 찾았고, 새로운 사명과 한 걸음 더 나아간 미래를 얻었습니다.',
    );
    await ruby.used_to_say_and_wait('그 길을 훌륭하게 완수해 내는 것인말로, 제게 주어지기 시작한 것들에 대한 진정한 보답입니다.');
    await ruby.used_to_say_and_wait('이것이 바로 저의, 정입니다.');
    era.drawLine({ content: '다시 경기장 안'});
    await ruby.say_and_wait('하아아앗——!');
    await miracle.say_and_wait('!');
    await miracle.say_and_wait('어떻게 저런 속도로……');
    await miracle.say_and_wait('나도, 모두를 위해서……');
    await say_by_passer_by('해설', [
      miracle.get_colored_name(),
      ', 속도가 떨어집니다! 현재 선두로 치고 나오는 마군은 바로——',
    ]);
    await say_by_passer_by('해설', [ruby.get_colored_name(), '!']);
    await say_by_passer_by('해설', [
      ruby.get_colored_name(),
      ', 이 얼마나 아름답고도 매서운 라스트 스퍼트인가요!',
    ]);
    era.printButton(`「가라, ${m_call_r}.」`, 1);
    await era.input();
    await ruby.say_and_wait('……——');
    await say_by_passer_by('해설', [
      '우승은 바로 ',
      ruby.get_colored_name(),
      '! 압도적인 스피드를 선보이며, 화려한 일족의 ',
      ruby.get_colored_name(),
      '가 승리를 거머륍니다!',
    ]);
    era.drawLine({ content: '자하 통로 안'});
    await miracle.say_and_wait(['……루비.']);
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), '.']);
    await miracle.say_and_wait('우승 축하해. 정말로, 무척이나 멋진 질주였어.');
    await miracle.say_and_wait('나 말이야, 정말이지 오늘을 끝으로 다 끝나버려도 상관없다고 생각했었거든.');
    await miracle.say_and_wait(
      '앞으로 오랫동안 달릴 수는 없을 테니, 오직 『지금』만을 위해 모든 것을 쏟아붓겠다고 다짐했었는데……',
    );
    await ruby.say_and_wait('……');
    await miracle.say_and_wait('하지만.');
    await miracle.say_and_wait(
      '네 질주가 너무나도 눈부셨어. 어쩌면 나도 앞으로 해낼 수 있는 일이 더 남아있을지도 모른다는 생각이 들더라.',
    );
    await miracle.say_and_wait('포기하지 않고 계속 달려 나가며 모두에게 미래를 보여주는 것. 그것이 네가 보여준 상냥함에 보답하는 길이겠지.');
    await ruby.say_and_wait('……!');
    await miracle.say_and_wait('정말 분하네.');
    await miracle.say_and_wait('그런데, 신기하게도 마음은 아주 상쾌해.');
    await miracle.say_and_wait('나, 반드시 지금보다 훨씬 더 강해져서 돌아올게.');
    await miracle.say_and_wait('제대로 몸을 단련해서, 기초부터 다시 차근차근 시작하는 거야.');
    await miracle.say_and_wait('두 번 다시 내 몸을 무리하게 파괴하지 않을게.');
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), '……']);
    await miracle.say_and_wait([
      '다음 복귀 무대로는 아마도 ',
      race_infos[race_enum.swan_sta].get_colored_name(),
      '를 고르게 될 것 같아.',
    ]);
    await ruby.say_and_wait(['……저도 ', r_call_m, '과 함께 논의해 보도록 하겠습니다.']);
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
  };

  handlers[race_enum.swan_sta] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (era.get('cflag:85:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('점화', ruby);
    await ruby.say_and_wait('역시 다들 만만치 않은 상대들이군요, 그리고——');
    await ruby.say_and_wait([
      sys_get_colored_callname(85, 93),
      '…… 확실히 예전보다 한층 더 강해졌습니다.',
    ]);
    await ruby.say_and_wait([
      '다가오는 ',
      race_infos[race_enum.mile_cha].get_colored_name(),
      '에서 압도적인 승리를 거두기 위해서는, 저 또한 지금보다 훨씬 더 강해져야만 하겠어요.',
    ]);
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('후훗～');
    await era.printAndWait([
      '한쪽에서 ',
      get_chara_talk(93).get_colored_name(),
      '를 붙잡고 시끌벅적하게 소란을 피우고 있는 ',
      get_chara_talk(65).get_colored_name(),
      '의 모습을 바라보며, ',
      ruby.get_colored_name(),
      '은(는) 엷은 미소를 지어 보였다.',
    ]);
    extra_flag.attr_change = new Array(5).fill(20);
    extra_flag.base_change = JSON.parse('{"체력":-150}');
    extra_flag.pt_change = 120;
    extra_flag.skill_change = [
      CharaSkills.get(85).get().indexOf(200962) === -1 ? 200962 : 200961,
      CharaSkills.get(85).get().indexOf(200972) === -1 ? 200972 : 200971,
    ];
  };

  handlers[race_enum.mile_cha] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (era.get('cflag:85:육성턴수합산') < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('가장 눈부신 광채', ruby);
    await era.printAndWait(
      '경기장 안에는 여느 때와 같은 소란스러움 대신, 모두가 경외심을 담아 오늘의 승자를 맞이하고 있었다.',
    );
    await era.printAndWait('（짝짝짝짝짝……!!）');
    await era.printAndWait(['관중석의 모든 이들이 일제히 기립하여 ', ruby.sex, '를 향해 찬사를 보냈다.']);
    await ruby.say_and_wait('여러분……');
    await era.printAndWait('（짝짝짝짝짝……!!）');
    await era.printAndWait('……');
    await say_by_mother('——');
    await ruby.say_and_wait('……! 어머님……', true);
    await ruby.say_and_wait('어머님께서도 박수를…… 마침내 저를 인정해 주셨군요.');
    await ruby.say_and_wait('드디어……');
    era.printButton(`「우승 축하해, ${m_call_r}.」`, 1);
    await era.input();
    await ruby.say_and_wait('……');
    await era.printAndWait([
      '아주 찰나의 순간, 시선이 ',
      ruby.get_colored_name(),
      '와 교차했다. ',
      ruby.sex,
      '는 이내 다시 관중석을 가득 메운 팬들을 향해 몸을 돌렸다.',
    ]);
    await ruby.say_and_wait('여러분, 대단히 감사합니다.');
    await ruby.say_and_wait('방금 전 제가 보여드린 질주와 함께 이 자리에서 선언하겠습니다.');
    await ruby.say_and_wait('앞으로도 이 두 다리로 더욱 원대한 광채를 찾아 탐구해 나갈 것임을.');
    await ruby.say_and_wait('화려한 일족의 새로운 상징으로서……');
    await ruby.say_and_wait('저의 트레이너와 함께 말이죠.');
    await era.printAndWait('훗날 사람들은 이날을 두고 이렇게 기록했다. 화려한 일족의 새로운 상징이 탄생한 날이라고.');
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
    extra_flag.skill_change = [
      CharaSkills.get(85).get().indexOf(200612) === -1 ? 200612 : 200611,
      CharaSkills.get(85).get().indexOf(201032) === -1 ? 201032 : 201031,
      CharaSkills.get(85).get().indexOf(201042) === -1 ? 201042 : 201041,
    ];
  };
};