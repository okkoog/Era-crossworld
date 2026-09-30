const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');

const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,string,RaceStartParams)>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    ruby,
    me,
    r_call_m,
    m_call_r,
    extra_flag,
  ) => {
    if (era.get('cflag:85:육성턴수합산') >= 48) {
      return true;
    }
    extra_flag.relation_change = 0;
    extra_flag.love_change = 0;
    await print_event_name('데뷔전을 앞두고', ruby);
    await ruby.say_and_wait('대기실로 가죠.');
    era.drawLine();
    await say_by_passer_by('의원 A', [
      '자, ',
      ruby.get_colored_name(),
      '양의 화려한 첫 데뷔 무대를 위해, 박수!!',
    ]);
    await era.printAndWait('（짝짝짝……!）');
    era.printButton('（……어라, 이 사람은 누구지?）', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 머릿속으로 잠시 기억을 더듬어 보았고, 불쑥 찾아온 중년 남성의 얼굴이 최근 급부상하고 있는 어느 정치인의 모습과 일치한다는 것을 깨달았다.',
    ]);
    await say_by_passer_by(
      '의원 A',
      '하하, 정말 영광이군요. 그 유명한 『화려한 일족』의 데뷔전을 직접 지켜보게 되다니.',
    );
    await ruby.say_and_wait('축하해 주셔서 감사합니다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 의원으로 보이는 남자를 향해 태연하게 대응하고 있었지만, 지금은 중요한 데뷔전을 앞둔 시점이었기에, ',
      me.get_colored_name(),
      '은(는) 상대가 속히 자리를 비워주기를 바랐다……',
    ]);
    await say_by_passer_by('의원 A', '축하의 의미로 꽃도 좀 챙겨왔는데, 마음에 들었으면 좋겠군요.');
    await ruby.say_and_wait('마음 써주셔서 감사합니다. 그럼 살펴 가십시오.');
    await say_by_passer_by('의원 A', '어, 잠깐——');
    await ruby.say_and_wait('죄송합니다, 시간이 다 되었군요. 의원님의 응원을 받게 되어 무척 감격스럽습니다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 가볍게 손을 흔들어 작별을 고하며 ',
      me.get_colored_name(),
      '을(를) 슬쩍 곁눈질했다.',
    ]);
    await ruby.say_and_wait('다음번에는 미리 연락을 주시고, 필히 정문으로 방문해 주시길 바랍니다.');
    await ruby.say_and_wait(
      '의원님께서 제 트레이너처럼, 저희 일족에게 온전히 인정받을 수 있을 만한 자부심을 품고 계신다면 말이죠.',
    );
    await say_by_passer_by('의원 A', '과연 그렇군요. 실례 많았습니다. 방해해서 죄송했습니다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 떠나가는 남자의 뒷모습을 배웅하고 나서, 이내 몸을 돌려 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await say_by_passer_by('기자 A', [
      '루비 ',
      ruby.get_adult_sex_title(),
      ', 트레이너 ',
      me.get_adult_sex_title(),
      ', 정말 면목이 없습니다. 스태프분들께 그분의 방문을 정중히 거절해 달라고 미리 전달해 두었습니다만.',
    ]);
    era.printButton('「거절하기 힘든 상대였으니 어쩔 수 없지.」', 1);
    era.printButton('「소문대로 정말 위압감이 넘치는 분이네.」', 2);
    if ((await era.input()) === 2) {
      extra_flag.relation_change += 3;
    }
    await me.say_and_wait([m_call_r, ', 저 사람을 알고 있어?']);
    await ruby.say_and_wait('네.');
    await ruby.say_and_wait('아마도 저를 상징 삼아 저희 일족과의 연줄을 과시하고 싶었던 것이겠지요.');
    await me.say_and_wait('최근에야 급부상한 인물이니, 든든한 뒷배가 간절했던 거겠지.', true);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 한쪽에 놓인 위문품들로 시선을 돌렸다. 방금 다녀간 의원뿐만 아니라, 각계각층의 유력 인사들이 보내온 화환이 즐비했다.',
    ]);
    await ruby.say_and_wait('입구에 세워진 스탠드 화환 말이군요.');
    await ruby.say_and_wait(
      '저 화환을 보낸 기업은 현재 자금 융통에 꽤나 난항을 겪고 있는 모양이에요. 저희 일족의 지원을 바라고 있는 거겠죠.',
    );
    await era.printAndWait([ruby.get_colored_name(), '가 다시 다른 쪽을 바라보았다.']);
    await ruby.say_and_wait(
      '백합을 중심으로 꾸며진 저 꽃은, 현재 정계의 중심에 서 있는 인물이 보내온 것입니다.',
    );
    await ruby.say_and_wait(
      '편지까지 동봉한 의도는 아주 명백하죠. 저를 타깃으로 삼아, 장차 제 아이가 가지게 될 세력의 기반을 탄탄히 다지려는 심산입니다.',
    );
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 목소리에는 그 어떤 감동의 기색도 없었다. 그녀는 마치 자신과는 전혀 상관없는 타인의 이야기를 늘어놓듯, ',
      me.get_colored_name(),
      '에게 각 화환에 담긴 내막을 덤덤히 설명해 주었다.',
    ]);
    era.printButton('「꽃을 몇 송이 챙겨가서 트레이닝실에 장식해도 될까?」', 1);
    era.printButton('「내가 너무 분위기 파악을 못 하는 얘길 한 걸까?」', 2);
    if ((await era.input()) === 1) {
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('마음대로 하세요. 다 들고 가기 힘드시다면 집사에게 말씀해 두겠습니다.');
    } else {
      await ruby.say_and_wait('당신이 보내준 축하는, 이미 제 마음에 확실하게 와닿았답니다.');
      await ruby.say_and_wait('당신의 손으로 훌륭하게 가꾸어 낸 저의 첫 무대를, 부디 한눈팔지 말고 지켜봐 주세요.');
      extra_flag.love_change++;
    }
    await era.printAndWait('시간이 되었으니, 전 경기장으로 가보겠습니다.');
    await me.say_and_wait('역시 내 눈에는 이 꽃이 가장 아름답네.', true);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '가 지하 통로를 지날 때에도, 경기장 내부를 가득 채운 열띤 열기가 그대로 전해져 왔다.',
    ]);
    await era.printAndWait('관중들이 보내는 환호성 속에는, 대다수가 「화려한 일족」의 등장을 애타게 기대하는 목소리들로 가득했다.');
    await era.printAndWait([
      '막중한 압박감이 밀려오는 상황 속에서도, ',
      ruby.get_colored_name(),
      '가 너무나도 담담한 태도를 유지하고 있었기에, ',
      me.get_colored_name(),
      '은(는) 도리어 미세한 불안감을 느꼈다.',
    ]);
    era.printButton(
      `「역시 ${
        ruby.sex_code === 1 ? '도련님': '아가씨'
      }라 그런지, 이런 큰 무대에는 이미 익숙한 모양이네.」`,
      1,
    );
    era.printButton('「정말 괜찮은 거야?」', 2);
    if ((await era.input()) === 2) {
      extra_flag.relation_change += 3;
      extra_flag.love_change++;
      await ruby.say_and_wait('준비는 아주 충분합니다. 불안해할 만한 요소는 단 하나도 없어요.');
      era.printButton('「응응, 정말 아무 문제도 없어 보여.」', 1);
      era.printButton('「그렇다면, 솔직하게 말해줄 수 있을까?」', 2);
      if ((await era.input()) === 2) {
        extra_flag.relation_change += 3;
        extra_flag.love_change++;
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('당신은 정말이지.');
        await ruby.say_and_wait('남들의 기대를 가득 한몸에 받는 이 상황이 무척 감사하면서도, 동시에 무거운 짐으로 다가오는 것은 사실입니다.');
        await ruby.say_and_wait('하지만 그렇다 하더라도, 결코 그런 감정에 휘둘리지는 않을 겁니다.');
        await era.printAndWait([
          '그렇게 단호하게 단언하는 ',
          ruby.get_colored_name(),
          '의 눈빛에서, ',
          me.get_colored_name(),
          '은(는) 정말로 그 어떤 동요의 기색도 찾아볼 수 없었다.',
        ]);
      }
    }
    await ruby.say_and_wait('그럼, 다녀오겠습니다.');
    era.printButton('「조심히 다녀와.」', 1);
    await era.input();
    await era.printAndWait([
      '홀로 모든 짐을 짊어지고 묵묵히 나아가는 그녀를 향해, 지금 이 순간 ',
      me.get_colored_name(),
      '이(가) 건넬 수 있는 말은 오직 이 한마디뿐이었다.',
    ]);
  };

  handlers[race_enum.sprt_sta] = async (ruby, me) => {
    if (era.get('cflag:85:육성턴수합산') < 96) {
      return true;
    }
    const miracle = get_chara_talk(93);
    await print_event_name('기적', ruby);
    await miracle.say_and_wait('……——');
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), '.']);
    await miracle.say_and_wait('……');
    await ruby.say_and_wait([miracle.get_colored_name(), ' 씨.']);
    await miracle.say_and_wait('아.');
    await miracle.say_and_wait(['루비?']);
    await ruby.say_and_wait('시간이 다 되었어요, 이제 출발해야 합니다.');
    await miracle.say_and_wait('아, 벌써 시간이 이렇게 됐네.');
    await ruby.say_and_wait('……');
    await miracle.say_and_wait('미안해, 난 정말 괜찮아. 그냥 이런저런 생각을 좀 하느라.');
    await miracle.say_and_wait('서로 후회 없는 멋진 승부를 가려보자.');
    await ruby.say_and_wait('……네.');
    era.drawLine({ content: '대기 통로 안'});
    await miracle.say_and_wait('……이길 거야.');
    await miracle.say_and_wait('그 누구보다도 빠르게…… 오늘은…… 나의 달리기를, 모두에게 바치겠어……');
    await ruby.say_and_wait([sys_get_colored_callname(85, 93), '.']);
    await miracle.say_and_wait(['루비……']);
    await miracle.say_and_wait('오늘 잘 부탁해. 당연히 조금도 봐줄 필요는 없으니까.');
    await miracle.say_and_wait('서로 양보 없는 치열한 경쟁을……');
    await ruby.say_and_wait('당신의 그 희망을 전부 무너뜨려 드리겠어요.');
    await miracle.say_and_wait('!');
    await ruby.say_and_wait('지금의 당신이 그 누구보다 눈부신 광채를 손에 쥐도록 가만히 내버려 두지 않을 겁니다.');
    await ruby.say_and_wait('당신이 예전에 제게 말해 주었던 그것을, 이번엔 제가 직접 증명해 보이겠어요.');
    await miracle.say_and_wait(['루비?']);
    await ruby.say_and_wait('……——');
    await ruby.say_and_wait('이 레이스를 이끄는 선두 주자로서, 당신을 훨씬 더 높은 곳으로 이끌어 드리죠.');
    await ruby.say_and_wait('『화려한 일족』의 새로운 상징이 나아가는 길을, 부디 똑똑히 지켜보시길 바랍니다.');
    era.drawLine({ content: '대기실 안'});
    await ruby.say_and_wait('오늘 레이스는, 반드시 승리하겠어요.');
    await era.printAndWait([
      '레이스를 코앞에 두고, ',
      ruby.get_colored_name(),
      '는 돌연 ',
      me.get_colored_name(),
      '을(를) 향해 당차게 선언했다.',
    ]);
    await era.printAndWait('두 사람의 우정이 참으로 눈부시게 빛나고 있었다.');
  };

  handlers[race_enum.swan_sta] = async (ruby) => {
    if (era.get('cflag:85:육성턴수합산') < 96) {
      return true;
    }
    const miracle = get_chara_talk(93);
    await print_event_name('스완 스테이크스를 앞두고', ruby);
    await miracle.say_and_wait(['루비……와줬구나.',
    ]);
    await ruby.say_and_wait('당신께서 직접 저를 지명해 주셨기에, 곰곰이 고려해 보았습니다.');
    await era.printAndWait([
      race_infos[race_enum.swan_sta].get_colored_name(),
      '…… ',
      miracle.get_colored_name(),
      '의 간곡한 초청 덕분에, ',
      ruby.get_colored_name(),
      '는 이번 레이스에 출주하기로 결정을 내렸다.',
    ]);
    await miracle.say_and_wait('고마워. 이렇게나 빨리 너와 다시 함께 달릴 수 있게 될 줄은 몰랐어.');
    await ruby.say_and_wait('……몸 상태는 이제 완전히 괜찮으신 건가요?');
    await miracle.say_and_wait('응, 이제 정말 아무렇지도 않아.');
    await miracle.say_and_wait('전에는 그저 빨라지면 그만이라고만 생각해서, 내 몸을 무리하게 몰아붙이기만 했었지만……');
    await miracle.say_and_wait(
      '지금의 나는 내가 도달할 수 있는 최선의 상태를 이끌어내기 위해 훈련 방향을 새로 고쳤어.',
    );
    await miracle.say_and_wait('——그렇다 하더라도, 지금의 나는 이전보다 훨씬 더 빠르게 달릴 수 있다는 자신감이 있어.');
    await miracle.say_and_wait('너보다도 훨씬 더 빠르게 말이지.');
    await ruby.say_and_wait('!');
    await miracle.say_and_wait('나, 말했던 대로 정말 강해져서 돌아왔다구. ——그러니 부디 나와 겨뤄줘.');
    await era.printAndWait([
      miracle.get_colored_name(),
      '이 살며시 미소를 지어 보였다. 비록 무척이나 부드러운 미소였지만, 그녀가 풍기는 기세와 당당한 자세 속에서는 확실한 자부심과 자신감이 고스란히 묻어났다.',
    ]);
    await ruby.say_and_wait('최상의 컨디션인 모양이군요.', true);
    await miracle.say_and_wait('잘 부탁해.');
  };
};