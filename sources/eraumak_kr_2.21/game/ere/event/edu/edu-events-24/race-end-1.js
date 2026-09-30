const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (maya, me, callname, extra_flag) => {
    if (era.get('cflag:24:육성턴수합산') > 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('비행 연장 희망!', maya);
    await era.printAndWait([
      '비록 ',
      maya.get_colored_name(),
      '의 데뷔전은 이렇게 무사히 끝났지만──',
    ]);
    await maya.say_and_wait('으으…… 음……?');
    await maya.say_and_wait('으음음음……?');
    await era.printAndWait([
      '아까부터 ',
      maya.get_colored_name(),
      '의 상태가 조금 이상했다……',
    ]);
    era.printButton('「무슨 일 있어?」', 1);
    await era.input();
    await maya.say_and_wait('음…… 딱히 그런 건 아냐. 그냥 끝났구나~ 싶어서!');
    await maya.say_and_wait([
      '있지 있지, ',
      callname,
      '! 데뷔전은 정말 이걸로 끝이야?',
    ]);
    await maya.say_and_wait('나 몰래 숨겨둔 거 있는 거 아니지?');
    await era.printAndWait([
      '……설령 ',
      maya.sex,
      '가 그렇게 말해도, 데뷔전은 누구나 한 번밖에 겪을 수 없는 일이었다.',
    ]);
    await maya.say_and_wait('에엣……?');
    await era.printAndWait([
      '……하지만, ',
      maya.get_colored_name(),
      '은 전혀 만족하지 못한 기색이었다.',
    ]);
    era.printButton('「레이스에 더 많이 나가자」', 1);
    await era.input();
    await maya.say_and_wait('으음…………');
    await maya.say_and_wait('……응, 그렇게 하자.');
    await maya.say_and_wait('드디어 성공적으로 데뷔했는걸. 드디어 여기까지 왔어.');
    await maya.say_and_wait('트윙클 시리즈……');
    await maya.say_and_wait('……분명 가슴이 두근거리고, 반짝반짝 빛나는 레이스일 거야.');
  };

  handlers[race_enum.kiku_sho] = async (maya, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('아직 착륙할 생각은 없어', maya);
    await maya.say_and_wait('레이더에 신호 포착! 타겟 록온! 목표까지 거리 3, 2, 1……! 펑! 마야노 승리~☆');
    await maya.say_and_wait([callname, ', 방금 봤어~? 마야의 활약~☆']);
    era.printButton('「정말 잘 달려줬어」', 1);
    await era.input();
    await maya.say_and_wait('헤헤헤~☆ 그치 그치! 마야는 역시 주목받는 스타니까♪');
    const reporter = get_chara_talk(303);
    await reporter.say_and_wait([
      '……',
      sys_get_colored_callname(303, 24),
      '씨! ',
      sys_get_colored_callname(303, 24),
      '씨!',
    ]);
    await reporter.say_and_wait(
      '저는 『월간 트윙클』의 오토나시라고 합니다. 레이스 후 소감을 잠시 인터뷰해도 될까요?',
    );
    await maya.say_and_wait('와아! 마야를 인터뷰하는 거야~!? 좋아~☆ 뭐든 대답해 줄게!');
    await reporter.say_and_wait('감사합니다. 그럼 곧바로──');
    await reporter.say_and_wait([
      '시행착오 끝에 맞이한 이번 『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』이었습니다만, 이번 레이스는 마치 본인에게 가장 적합한 거리가 장거리라는 점을 증명하는 듯한……',
    ]);
    await maya.say_and_wait('응?');
    await reporter.say_and_wait('아, 실례했습니다. 제 질문 방식이 조금 어려웠나요.');
    await reporter.say_and_wait([
      sys_get_colored_callname(303, 24),
      '씨가 클래식 레이스에 도전하면서, 진정한 목표로 삼은 것은 역시 『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』였던 걸까요──',
    ]);
    await maya.say_and_wait('응? 질문을 바꿀 필요는 없어. 마야도 다 알아들었는걸.');
    await maya.say_and_wait('다만 『어째서?』라고 생각했을 뿐이야.');
    await maya.say_and_wait([
      '마야는 그냥 『',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '』에 나가고 싶어서 나간 거야. 그리고 이곳은 ',
      sys_get_colored_callname(24, 16),
      '도 달렸던 레이스니까.',
    ]);
    await reporter.say_and_wait([
      '……',
      sys_get_callname(24, 16),
      '? 혹시 그 ',
      sys_get_colored_callname(303, 16),
      '씨 말씀이신가요?',
    ]);
    await maya.say_and_wait([
      '응, 맞아! 기자님, 물어볼게! 내 달리기, ',
      sys_get_colored_callname(24, 16),
      '보다 더 두근거렸어? 어때?',
    ]);
    await reporter.say_and_wait('오오…… 이거 놀랍군요.');
    await reporter.say_and_wait([
      sys_get_colored_callname(303, 16),
      '씨에게 도전장을 내밀 생각이시군요! 이건 정말이지……!',
    ]);
    await reporter.say_and_wait([
      '그렇다면 단도직입적으로 묻겠습니다. ',
      sys_get_colored_callname(303, 24),
      '씨도 올해 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』에 출주하실 건가요?',
    ]);
    await maya.say_and_wait([
      '『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』? 마야가?',
    ]);
    await reporter.say_and_wait([
      '네, 왜냐하면 『삼관 ',
      maya.get_uma_sex_title(),
      '』인 ',
      sys_get_colored_callname(303, 16),
      '씨도 올해 아리마 기념에 참전하기 때문이죠.',
    ]);
    await reporter.say_and_wait('상황이 이렇다면, 역시 정면 승부를 피할 수 없겠죠?');
    await era.printAndWait([
      '「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」…… 매년 연말에 개최되는 레이스다. 출주하는 ',
      maya.get_uma_sex_title(),
      '의 팬 투표 지지율과, 그 당시의 실력이 여실히 드러나는 무대였다.',
    ]);
    await era.printAndWait([
      '「삼관 ',
      maya.get_uma_sex_title(),
      '」인 ',
      get_chara_talk(16).get_colored_name(),
      '뿐만 아니라, 「여걸」 ',
      get_chara_talk(12).get_colored_name(),
      '등 쟁쟁한 이름값의 우마무스메들이 이미 출주 의사를 밝히고 있었다.',
    ]);
    await maya.say_and_wait('응응, 나갈게!');
    era.printButton('（대답이 너무 가볍잖아!）', 1);
    await era.input();
    await reporter.say_and_wait([
      '후훗. 슈퍼스타와 뉴스타, 과연 누가 더 눈부실까요. 올해의 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '가 정말 기대되는군요.',
    ]);
    era.drawLine();
    await maya.say_and_wait([
      '하하♪ 다음 레이스는 『',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '』이구나! ',
      callname,
      ', 우리 힘내자☆',
    ]);
    era.printButton('「정말로 『아리마 기념』에 나갈 거야?」', 1);
    await era.input();
    await maya.say_and_wait([
      '응. 거기라면 ',
      sys_get_colored_callname(24, 16),
      '이랑 직접 대결할 수 있지?',
    ]);
    await maya.say_and_wait('히히, 이 기회를 얼마나 기다렸다구! 이제야 드디어 증명할 수 있어!');
    await maya.say_and_wait([
      '마야가 ',
      sys_get_colored_callname(24, 16),
      '보다 훨씬 더 쌤을 두근거리게 만들 수 있다는 걸 말야♪',
    ]);
    await era.printAndWait([
      '이렇게 ',
      maya.sex,
      '가 올봄에 내뱉었던 목표는, 드디어 손에 닿을 듯한 거리까지 다가왔다……!',
    ]);
  };

  handlers[race_enum.arim_kin] = async (maya, me, callname, extra_flag) => {
    const amazon = get_chara_talk(12),
      brian = get_chara_talk(16);
    if (era.get('cflag:24:육성턴수합산') < 96) {
      if (extra_flag.rank === 1) {
        await print_event_name('연료 가득', maya);
        await say_by_passer_by_and_wait('해설', [
          '──대단합니다! 정말 대단해요! 올해 『',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '』의 챔피언에게 박수를 보내주십시오!!',
        ]);
        await era.printAndWait('（와아아아────────!!）');
        await say_by_passer_by_and_wait('관중A', [
          '그나저나 ',
          maya.get_colored_name(),
          ', 진짜 대단하네. 설마 ',
          brian.get_colored_name(),
          '을 이길 줄이야……',
        ]);
        await say_by_passer_by_and_wait('관중B', '으음…… 정말이네. 하지만……');
        await say_by_passer_by_and_wait('관중B', [
          brian.get_colored_name(),
          '이 이대로 물러날 리 없어. 너도 그렇게 생각하지?',
        ]);
        await say_by_passer_by_and_wait('관중A', [
          '응, 나도 그렇게 생각해…… 다음에는 ',
          brian.get_colored_name(),
          '이 이길 거라고 믿어.',
        ]);
        await maya.say_and_wait('하아…… 후……! 후…… 하아……!');
        await amazon.say_and_wait([
          '어, 어이, ',
          sys_get_colored_callname(12, 24),
          '. 너 괜찮은 거냐? 안색이 좀 안 좋아 보이는데……',
        ]);
        era.printButton('「……마야!」', 1);
        await era.input();
        await amazon.say_and_wait([
          '다행히 문제가 있는 건 아니고 체력을 다 써버린 모양이군. 빨리 쉬게 해주는 게 좋겠어……',
        ]);
        await maya.say_and_wait('……난 괜찮아. 그것보다 훨씬 중요한 게 있어……!');
        await maya.say_and_wait('마야, 엄청 즐겁게 달렸어!!');
        await amazon.say_and_wait('──앙!?');
        await brian.say_and_wait('……');
        era.drawLine();
        await say_by_passer_by_and_wait(
          '스태프',
          '저기, 그럼 이어서 다음 질문 받겠습니다. 질문하실 분은 손을 들어──',
        );
        await maya.say_and_wait('……저요! 저 질문 있어요!!');
        await say_by_passer_by_and_wait('스태프', [
          '네, 그럼 저기 계신…… ',
          maya.get_colored_name(),
          '씨!? ',
        ]);
        await era.printAndWait('（웅성웅성……）');
        await maya.say_and_wait([
          '저기, ',
          sys_get_colored_callname(24, 16),
          '! 다음엔 어떤 레이스에 나갈 거야!?',
        ]);
        await maya.say_and_wait([
          '나, ',
          sys_get_colored_callname(24, 16),
          '이랑 한 번 더 달리고 싶어!',
        ]);
        await maya.say_and_wait(
          '골인하기 전까지 결과가 어떻게 될지, 내가 어떻게 해야 할지도 모른 채로 계속 가슴이 조마조마했어……',
        );
        await maya.say_and_wait('그게 너무나도 두근거려!');
        await say_by_passer_by_and_wait('스태프', [
          '저, 저기…… ',
          maya.get_colored_name(),
          '씨. 죄송합니다만 지금은 기자분들의 질문 시간이라……',
        ]);
        await maya.say_and_wait('싫어! 금방 끝나니까 잠깐만 기다려 줘!');
        await maya.say_and_wait('저기저기, 우리 한 번 더 붙자! 마야가 또 이겨줄 테니까!');
        await maya.say_and_wait([
          '부탁이야, 부탁해! ',
          sys_get_colored_callname(24, 16),
          '도 아직 만족 못 했지!?',
        ]);
        await brian.say_and_wait('……흥.');
        await say_by_passer_by_and_wait('기자A', [
          '너, 너 이 녀석! 적당히 좀 해! ',
          brian.get_colored_name(),
          '씨도──',
        ]);
        await brian.say_and_wait([
          '……『',
          race_infos[race_enum.hans_dai].get_colored_name(),
          '』.',
        ]);
        await maya.say_and_wait('!');
        await brian.say_and_wait('네 질문에 대답했다. 사회자, 다음으로 넘기지.');
        await say_by_passer_by_and_wait(
          '스태프',
          '에, 아…… 네! 그럼 다음 분──',
        );
        await amazon.say_and_wait([
          '오호~ ',
          sys_get_colored_callname(12, 24),
          '가 일을 아주 재미있게 만드는걸.',
        ]);
        await amazon.say_and_wait([
          '스스로 호랑이 굴에 뛰어들다니. ',
          maya.sex,
          '가 하룻강아지 범 무서운 줄 모르는 건지, 아니면──',
        ]);
      } else {
        await print_event_name('연료 보충', maya);
        await say_by_passer_by_and_wait('해설', [
          '──대단합니다! 정말 대단해요! 올해 『',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '』의 챔피언에게 박수를 보내주십시오!!',
        ]);
        await era.printAndWait('（와아아아────────!!）');
        await say_by_passer_by_and_wait('관중A', [
          '와, 진짜 ',
          maya.get_colored_name(),
          '도 엄청났어. 한순간이나마 ',
          maya.sex,
          '가 ',
          brian.get_colored_name(),
          '을 이기는 줄 알았다고.',
        ]);
        await say_by_passer_by_and_wait(
          '관중B',
          '후훗, 그렇게 보였다면 아직 안목이 부족하다는 증거지. 이게 바로 『격의 차이』라는 거야.',
        );
        await say_by_passer_by_and_wait('관중B', [
          '하지만 ',
          maya.sex,
          '는 정말 실력 있어. 1년 뒤의 ',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '이라면…… 혹시 모를 일이지.',
        ]);
        await maya.say_and_wait('하아…… 후……! 후…… 하아……!');
        await amazon.say_and_wait([
          '어, 어이, ',
          sys_get_colored_callname(12, 24),
          '. 너 괜찮은 거냐? 안색이 좀 안 좋아 보이는데……',
        ]);
        era.printButton('「……마야!」', 1);
        await era.input();
        await amazon.say_and_wait([
          '다행히 문제가 있는 건 아니고 체력을 다 써버린 모양이군. 빨리 쉬게 해주는 게 좋겠어……',
        ]);
        await maya.say_and_wait('……난 괜찮아. 그것보다 훨씬 중요한 게 있어……!');
        await maya.say_and_wait('마야, 엄청 즐겁게 달렸어!!');
        await amazon.say_and_wait('──앙!?');
        await brian.say_and_wait('……');
        era.drawLine();
        await say_by_passer_by_and_wait(
          '스태프',
          '저기, 그럼 이어서 다음 질문 받겠습니다. 질문하실 분은 손을 들어──',
        );
        await maya.say_and_wait('……저요! 저 질문 있어요!!');
        await say_by_passer_by_and_wait('스태프', [
          '네, 그럼 저기 계신…… ',
          maya.get_colored_name(),
          '씨!? ',
        ]);
        await era.printAndWait('（웅성웅성……）');
        await maya.say_and_wait([
          '저기, ',
          sys_get_colored_callname(24, 16),
          '! 다음엔 어떤 레이스에 나갈 거야!?',
        ]);
        await maya.say_and_wait([
          '나, ',
          sys_get_colored_callname(24, 16),
          '이랑 한 번 더 달리고 싶어!',
        ]);
        await maya.say_and_wait(
          '골인하기 전까지 결과가 어떻게 될지, 내가 어떻게 해야 할지도 모른 채로 계속 가슴이 조마조마했어……',
        );
        await maya.say_and_wait('그게 너무나도 두근거려!');
        await brian.say_and_wait('──흥. 사회자, 다음 질문으로……');
        await maya.say_and_wait('앗, 기다려 봐! 치사해! 도망가지 마!!');
        await brian.say_and_wait('……호오?');
        await brian.say_and_wait('방금 뭐라고 했지? 내가 너에게서 도망친다고?');
        await maya.say_and_wait('응, 맞아! 마야의 도전을 피하려고 하잖아!');
        await maya.say_and_wait('그렇게 강하고 반짝반짝 빛나면서!');
        await maya.say_and_wait(
          '사실은 다음에 또 나랑 붙으면, 본인이 질지도 모른다는 게 무서운 거 아냐?',
        );
        await say_by_passer_by_and_wait('기자A', [
          '저, 저기…… ',
          maya.get_colored_name(),
          '씨? 이번엔 당신이 ',
          maya.sex,
          '에게 진 건데──',
        ]);
        await maya.say_and_wait('하지만 다음엔 이길 거야!');
        await maya.say_and_wait(
          '마야, 겨우 반짝반짝 빛날 수 있을 것 같은 기분이 들었는데, 이 정도로 만족할 리 없잖아!!',
        );
        await brian.say_and_wait('……');
        await say_by_passer_by_and_wait(
          '기자B',
          '이, 이봐요…… 다음이라니 그건 좀 무리죠, 실력 차이가 이렇게 명백한데──',
        );
        await brian.say_and_wait([
          '……『',
          race_infos[race_enum.hans_dai].get_colored_name(),
          '』.',
        ]);
        await maya.say_and_wait('!');
        await brian.say_and_wait('네 질문에 대답했다. 사회자, 다음으로 넘기지.');
        await say_by_passer_by_and_wait(
          '스태프',
          '에, 아…… 네! 그럼 다음 분──',
        );
        await amazon.say_and_wait([
          '오호~ ',
          sys_get_colored_callname(12, 24),
          '가 일을 아주 재미있게 만드는걸.',
        ]);
        await amazon.say_and_wait([
          '설마 그런 식으로 도전을 던질 줄이야. ',
          maya.sex,
          '가 하룻강아지 범 무서운 줄 모르는 건지, 아니면──',
        ]);
      }
      era.printButton('「' + maya.sex + '는 담력이 세니까」', 1);
      await era.input();
      await amazon.say_and_wait(['하하. 너, ', maya.sex, '를 아주 높게 평가하고 있구나.']);
      await amazon.say_and_wait('좋아. 너희 두 사람을 기억해두지.');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────!!']);
      await maya.say_and_wait([
        '있지 있지, 마야 말야! 다음엔 『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』에 나가고 싶어!',
      ]);
      era.printButton('「그럴 줄 알았어」', 1);
      await era.input();
      await maya.say_and_wait(
        '어라, 어떻게 알았어? 텔레파시!? 아니면 우리 사이에 운명의 붉은 실이라도 있는 거야!?',
      );
      era.printButton('「네가 너무 신나 보였거든」', 1);
      await era.input();
      await maya.say_and_wait('!');
      await maya.say_and_wait([
        '헤헤. 그런 것까지 알아주다니, 역시 우리 ',
        callname,
        '.',
      ]);
      await maya.say_and_wait([
        '좋아, 『',
        race_infos[race_enum.hans_dai].get_colored_name(),
        '』에서 ',
        sys_get_colored_callname(24, 16),
        '을 완전히 이겨버릴 거야☆',
      ]);
      await maya.say_and_wait(
        '난기류에 뛰어들 거라면 정면으로 돌파해야지! 그게 바로 마야의 비행 방식이라구!',
      );
    } else {
      if (extra_flag.rank !== 1) {
        return true;
      }
      await print_event_name('파이널 어프로치', maya);
      const luna = get_chara_talk(17);
      await say_by_passer_by_and_wait('관중들', [
        { color: maya.color, content: '마야노! 마야노! 마야노! 마야노!' },
      ]);
      await maya.say_and_wait('…………이겼다.');
      await maya.say_and_wait([
        '……내가 이겼어. ',
        sys_get_colored_callname(24, 16),
        '을 이겼어.',
      ]);
      await maya.say_and_wait([callname, '! 나…… 나……!']);
      era.printButton(`「마야, 너 정말 대단했어」`, 1);
      await era.input();
      await maya.say_and_wait('응…… 응……!');
      await maya.say_and_wait('마야 대단하지? 반짝반짝 빛나지?');
      era.printButton('「너는 언제나 가장 빛나고 있었어」', 1);
      await era.input();
      await maya.say_and_wait(['와아앙~~~~!! ', callname, '~~!!']);
      era.drawLine();
      await brian.say_and_wait('……하…… 하하, 내가 아직도 숨을 헐떡이고 있다니.');
      await brian.say_and_wait(
        '완패다. 전력을 다했는데…… 졌어. 하지만…… 기분이 나쁘진 않군.',
      );
      await brian.say_and_wait('훗, 이게 바로──');
      await luna.say_and_wait(['──', sys_get_colored_callname(24, 16), '!']);
      await luna.say_and_wait('……정말로 괜찮은 건가?');
      await brian.say_and_wait('……그래, 맞다. 아직 그게 남았었지.');
      await brian.say_and_wait('──나의 『은퇴식』 말이다.');
      await luna.say_and_wait('미동도 없군…… 정말 마음이 변하지 않은 건가?');
      await luna.say_and_wait(
        '……기자들이 이미 모여 있다. 너의 은퇴식이니, 적어도 성대하게 치러주마.',
      );
      await brian.say_and_wait('……고맙군.');
      await say_by_passer_by_and_wait('스태프', [
        '……',
        brian.get_colored_name(),
        '씨, 은퇴식은 5분 뒤에 시작될 예정입니다.',
      ]);
      await brian.say_and_wait('음…… 알겠다.');
      await brian.say_and_wait(
        '──내가 발을 멈추는 곳이 경기장이라 다행이군. 학원이 아니라, 이 잔디 위라서 말이야.',
      );
      await say_by_passer_by_and_wait('관중A', [
        '거짓말이지!? ',
        brian.get_colored_name(),
        '! 우리에게 전설을 더 보여달라고!!',
      ]);
      await say_by_passer_by_and_wait('관중B', '제발, 은퇴하지 마세요!');
      await brian.say_and_wait('참 나…… 뭘 그렇게 슬퍼하고 있나. 너희는 곧 다음 꿈을 보게 될 텐데.');
      await brian.say_and_wait('──바로 저 아이에게서 말이다.');
      await say_by_passer_by_and_wait('사회자', [
        '그럼 지금부터, ',
        brian.get_colored_name(),
        '씨의 은퇴식을 거행하겠습니다──',
      ]);
      await maya.say_and_wait('잠깐만──!');
      await maya.say_and_wait([
        '마야는 인정 못 해! ',
        sys_get_colored_callname(24, 16),
        '의 은퇴식은 중지야!!',
      ]);
      await say_by_passer_by_and_wait('사회자', '에엣!? 하, 하지만……');
      await maya.say_and_wait('하지만이고 뭐고 없어! 마야는 싫단 말야! 그러니까 안 돼!');
      await brian.say_and_wait('……어이.');
      await brian.say_and_wait(
        '갑자기 튀어나와서 떼를 쓰다니, 너무 제멋대로잖아. 넌 오늘의 승자라고.',
      );
      await brian.say_and_wait(
        '네 영향력을 좀 생각하란 말이다. 꼬맹이가 어리광을 부릴 거면 다른 데 가서──',
      );
      await maya.say_and_wait('마야는 원래 꼬맹이인걸!!');
      await maya.say_and_wait([
        '마야는 앞으로 ',
        sys_get_colored_callname(24, 16),
        '이랑 더 많이 레이스를 해서 멋진 어른 우마무스메가 될 거란 말야!',
      ]);
      await maya.say_and_wait(
        '그러니까 이런 말 해도 상관없어! 제멋대로 굴어도 돼! 마야는 아직 어린애니까!',
      );
      await maya.say_and_wait([
        '나 아직 ',
        sys_get_colored_callname(24, 16),
        '이랑 실컷 달리지 못했어! 나랑 다음 레이스 약속해 줘!',
      ]);
      await brian.say_and_wait('뭐…… 뭐라고!?');
      await brian.say_and_wait('그건 너무 억지잖아! 정말이지, 오늘은 나의──');
      await maya.say_and_wait('당신의 은퇴식 따위가 아니야!!');
      await brian.say_and_wait('야!!');
      await say_by_passer_by_and_wait('관중C', '푸흡…… 하하!');
      await say_by_passer_by_and_wait('관중D', [
        '맞아, 맞아! ',
        brian.get_colored_name(),
        ', 은퇴하지 마! 챔피언이랑 레이스 해!',
      ]);
      await say_by_passer_by_and_wait('관중E', [
        '도전을 받고 도망치다니, ',
        brian.get_colored_name(),
        '이라면 그럴 리 없지!',
      ]);
      await brian.say_and_wait('어이, 어째서 너희들까지 부추기는 거냐……');
      await maya.say_and_wait([
        '아하하, 다들 ',
        sys_get_colored_callname(24, 16),
        '을 아주 잘 알고 있네!',
      ]);
      await maya.say_and_wait([
        '하지만 마야가 훨씬 더 잘 아는걸. 있잖아, 오늘의 ',
        sys_get_colored_callname(24, 16),
        '은──',
      ]);
      await maya.say_and_wait(
        '──마야랑 한 번 더 달리고 싶지? 마음이 더 두근거리고 싶지?',
      );
      await brian.say_and_wait('……!');
      await maya.say_and_wait([
        '헤헤. 그러니까 마야가 ',
        sys_get_colored_callname(24, 16),
        '의 소원을 들어줄게!',
      ]);
      await maya.say_and_wait(
        '반짝반짝 빛나는 사람이랑 계속 대결해야, 마야도 훨씬 더 눈부신 어른이 될 수 있으니까!',
      );
      await brian.say_and_wait('……이건 뭐. 개인적인 어리광을 만족시키려고 나보고 계속 달리는 소리군.');
      await maya.say_and_wait('응!');
      await brian.say_and_wait('……못 당하겠군. 참으로 앞날이 걱정되는 아이야.');
      await maya.say_and_wait('나, 금방 어른이 될 거야☆');
      await brian.say_and_wait('그런 뜻이 아니야……');
      await luna.say_and_wait([
        '후훗…… 그냥 항복해라, ',
        sys_get_colored_callname(17, 16),
        '.',
      ]);
      await luna.say_and_wait('이 자리에 있는 누구도 너의 은퇴를 바라지 않아.');
      await luna.say_and_wait('──너 자신조차도 말이다.');
      await luna.say_and_wait('지금이라도 다른 행사로 바꾸는 건 가능하다만.');
      await maya.say_and_wait('좋아, 그럼! 나의 도전 선언식으로 바꿔줘!');
      await brian.say_and_wait('어이!? 그렇게 바꾸면 행사의 주인공이 네가 되어버리잖아──');
      await maya.say_and_wait('흥, 상관없잖아! 그쵸, 회장님!');
      await luna.say_and_wait(
        '음, 좋다. 훨씬 분위기를 띄울 수 있는 행사라면 기자들도 납득하겠지.',
      );
      await maya.say_and_wait('라져☆');
      await brian.say_and_wait('……정말이지 꼬맹이 녀석.');
      await maya.say_and_wait(
        '아하하☆ 그러니까 더더욱, 내가 자랐을 때의 모습이 기대되는 거지? 두근거리지?',
      );
      await brian.say_and_wait('……그래.');
      await brian.say_and_wait('분할 정도로 기대되는군.');
    }
  };
};