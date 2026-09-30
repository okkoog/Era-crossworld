const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,TachyonEduMarks,number,number):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.sank_hai] = async (
    tachyon,
    me,
    callname,
    _,
    relation,
    love,
  ) => {
    await print_event_name('변수 · 군중 심리의 자극', tachyon);
    await era.printAndWait('오사카배.');
    await era.printAndWait('한 해 중, 중장거리 노선의 첫 G1 레이스이다.');
    await era.printAndWait([
      '이제 막 시니어 급에 들어선 ',
      tachyon.get_uma_sex_title(),
      '에게 있어서, 이것은 처음으로 실력을 검증받는 레이스이기도 하다.',
    ]);
    await era.printAndWait(['하지만…… ', tachyon.get_colored_name(), '에게 있어서는.']);
    era.println();
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'A',
      '타키온 선배! 사츠키상 때의 모습은 정말 멋졌어요!',
    );
    await tachyon.say_and_wait(
      '후후, 응원 고맙네. 하지만 내 주법은 계속해서 진보하고 있다네. 사츠키상 때보다 지금의 달리기가…… 훨씬 더 놀라울 테니까 말이야.',
    );
    await say_by_passer_by_and_wait(tachyon.get_uma_sex_title() + 'B', [
      '타키온 선배…… 더비에서의 달리기를 보고 생각했어요…… 만약 ',
      tachyon.get_uma_sex_title(),
      '에게 한계라는 게 있다면, 분명 저런 모습일 거라고요!',
    ]);
    await tachyon.say_and_wait([
      '아니, 그것은 단지 ',
      tachyon.get_colored_name(),
      '의 한계일 뿐이라네…… ',
      tachyon.get_uma_sex_title(),
      '에게 한계란 없다네. 자네들 모두 무한한 가능성을 품고 있다고 나는 믿고 있어.',
    ]);
    await say_by_passer_by_and_wait(
      tachyon.get_uma_sex_title() + 'C',
      '타키온 선배! 도대체 어떻게 해야 선배처럼 그렇게 빨리 달릴 수 있는 건가요……!',
    );
    await tachyon.say_and_wait('오호? 정말 알고 싶은가? 그렇다면 내일 오후에 이과 교실로……');
    era.printButton('「콜록콜록」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 헛기침을 하며 ',
      tachyon.get_colored_name(),
      '에게 주의를 주었다.',
    ]);
    await era.printAndWait([
      '후배들과 다정하게 교류하던 ',
      tachyon.sex,
      '는 잠시 움찔하더니, 아무 일도 없었다는 듯 이야기를 계속했다.',
    ]);
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 자신이 레이스할 때의 에피소드를 쉴 새 없이 늘어놓았고, 후배인 어린 ',
      tachyon.get_uma_sex_title(),
      '들은 그 이야기에 집중했다.',
    ]);
    await era.printAndWait('마치 레이스 전의 평범한 팬 서비스처럼 훈훈한 광경이었다.');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 한숨을 내쉬며, 몇 달 전 ',
      tachyon.get_colored_name(),
      '이 말했던 실험 내용을 회상했다.',
    ]);
    era.println();
    await tachyon.used_to_say_and_wait([
      '수집한 자료에 따르면…… ',
      tachyon.get_uma_sex_title(),
      '가 레이스나 질주 중에 쾌락을 느끼는 원인 중 가장 우선시되는 것은 타인에게 칭찬받거나 관객의 지지를 받는 것이라네.',
    ]);
    await tachyon.used_to_say_and_wait([
      '결국 아직 중고등학생 정도의 나이이니, 인정을 갈구하는 것도 당연한 일이겠지.',
    ]);
    await tachyon.used_to_say_and_wait(
      '나 자신은 그런 것에 영향받지 않는다고 생각하지만…… 실험인 이상, 모든 가능성을 고려해야만 하네.',
    );
    await tachyon.used_to_say_and_wait('이상의 내용을 종합하면…… 그래, 관객의 지지를 얻는 것……');
    era.println();
    await era.printAndWait([
      '거기까지 말하던 중, ',
      me.get_couple_title(),
      '은 갑자기 말문이 막히고 말았다.',
    ]);
    era.println();
    await era.printAndWait(
      '몇 달 전 여름의 일…… 그리고 그 이후 계속되었던 인터뷰 거절을 떠올렸다.',
    );
    await era.printAndWait([
      '대중의 눈에 비친 ',
      tachyon.get_colored_name(),
      '은, 미디어의 선전과 당신들 측의 방치 속에 어느덧 현역 최대의 문제아로 변해버린 듯했다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……어쨌든, 우선 트레센 내부에서 장악할 수 있는 것부터 시작하도록 하지.');
    era.drawLine();
    await era.printAndWait('이러쿵저러쿵 시간이 흘렀다.');
    await era.printAndWait([
      '하지만, 이미 한두 번 본 것도 아닌데 ',
      tachyon.get_colored_name(),
      '의 소통 능력은 여전히 대단하다고 느껴졌다.',
    ]);
    await era.printAndWait(
      '저 위험한 실험들에 쏟는 에너지를 인간관계 관리에 조금이라도 나누어 주었더라면……',
    );
    await era.printAndWait(['당신은 ', tachyon.sex, '에게 반하지 않았을지도 모른다.']);
    await era.printAndWait(
      '모든 것을 아랑곳하지 않고 연구를 위해 최선을 다하는 헌신적인 모습.',
    );
    await era.printAndWait('그리고 모든 것을 떨쳐내고 등 뒤로 흘려보내는 저 주법.');
    await era.printAndWait([
      '그 두 가지가 합쳐진 ',
      tachyon.get_colored_name(),
      '이야말로, 가장 매혹적인 ',
      tachyon.sex,
      '이다.',
    ]);
    if (love >= 75 && tachyon.sex_code - 1 && me.sex_code > 0) {
      await era.printAndWait('……하지만.');
      await era.printAndWait([
        '자신의 연인이 이렇게 타인에게 둘러싸여 있는 것을 보니, 비록 동성이라 해도 역시 조금 질투가 났다.',
      ]);
      await era.printAndWait('이럴 때는……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 몰래 손에 숨기고 있던 어떤 버튼을 눌렀다.',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'A',
        '타키온 선배! 저 사인 좀 해주실 수 있을까요!',
      );
      await tachyon.say_and_wait('후후, 물론이…… 윽!');
      era.println();
      await era.printAndWait([
        '사인을 하던 찰나에 작동된 작은 장난감 때문에, ',
        tachyon.get_colored_name(),
        '의 사인이 조금 삐뚤어지고 말았다.',
      ]);
      await era.printAndWait([
        '다행히 눈을 빛내며 동경심을 드러내던 꼬마 팬은 그런 작은 실수에는 신경 쓰지 않는 듯했다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 뒤를 돌아보며 슬쩍 ',
        me.get_colored_name(),
        '을(를) 노려보았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 고개를 끄덕이며 미안하다는 듯 미소 지었다…… 그리고, 손에 든 리모컨의 강도를 한 단계 높였다.',
      ]);
      era.println();
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'B',
        '타키온 선배…… 오늘 레이스 꼭 힘내세요!',
      );
      await tachyon.say_and_wait('그으으…… 으응…… 반드시……');
      await say_by_passer_by_and_wait(
        tachyon.get_uma_sex_title() + 'C',
        '타키온 선배…… 무슨 일 있으신가요?',
      );
      await tachyon.say_and_wait('아…… 아무것도 아니네…… 단지…… 단지…… 윽……');
      era.printButton('「시간이 늦었어, 이제 대기실로 돌아가서 준비해야지」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 서둘러 다가가 ',
        tachyon.get_colored_name(),
        '의 곤란을 해결해 주었다. ',
        tachyon.sex,
        '의 노려보는 듯하면서도 어딘가 욕구불만 섞인 유혹적인 시선을 받으며, ',
        tachyon.sex,
        '를 데리고 서둘러 대기실로 돌아갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……정말이지…… 그렇게 질투하지 말게나…… 후배들까지 질투하다니…… ',
        me.sex_code === 1 ? '남자라면 좀 더 대범하게 굴어야 하지 않겠나.' : '',
      ]);
      era.printButton('「그럼, 나는 카페의 레이스 상황을 좀 보러 갈게」', 1, {
        disabled: sys_reg_race(25).curr.race === race_enum.sank_hai,
      });
      era.printButton('「그럼, 나도 네 후배들을 좀 챙겨주러 가볼까」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '사람의 성욕을 잔뜩 자극해 놓고, 이제 와서 다른 사람을 찾아가겠다니…… 그건 안 될 말이지.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 뒤에서 살며시 껴안아 왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '레이스 전까지…… 시간은 충분하겠지? ♡ 이런 시시한 장난감 말고…… 자네가 직접, 내 안을 가득 채워주고 싶지 않은가? ♡',
      ]);
      era.drawLine();
      await era.printAndWait([tachyon.get_colored_name(), '이 경기장에 발을 내디뎠다.']);
      await era.printAndWait([
        '하지만…… 이번만큼은 ',
        tachyon.sex,
        '의 꽁꽁 싸맨 승부복 덕분에 다행이라고 생각했다. 그렇지 않았다면 아마 모든 관객이 ',
        tachyon.sex,
        '의 묘하게 부풀어 오른 아랫배를 알아차렸을 테니까.',
      ]);
      begin_and_init_ero(0, 32);
      set_palam_to_max(0, part_enum.penis);
      set_palam_to_max(32, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(0, part_enum.penis),
        new EroParticipant(32, part_enum.virgin),
        false,
      );
      end_ero_and_train();
    }
    era.printButton('「시간 다 됐어, 타키온.」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '아, 그렇군. 그럼 슬슬 나갈 시간인가…… 내 축하는 레이스가 끝난 뒤에 해달라고, 포니짱.',
    );
    era.println();
    await era.printAndWait([
      '마지막 윙크 한 번에 어린 ',
      tachyon.get_uma_sex_title(),
      '들은 다시 한번 환호성을 내질렀다.',
    ]);
    era.printButton('「……포니짱?」', 1);
    await era.input();
    await tachyon.say_and_wait([
      sys_get_colored_callname(32, 5),
      '에게 배웠다네…… 왜, 자네도 그렇게 불리고 싶은가? 나의 모르모트 군?',
    ]);
    era.printButton('…………아니, 역시 사양할게.', 1);
    await era.input();
    await tachyon.say_and_wait(['이런, 설마 부끄러워하는 건가? 정말 순진하구만, ', callname, '.']);
    era.printButton('그야…… 하드웨어가 못 따라가니까, 그렇게 흉내 내봤자 비웃음만 살걸……', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 가엾다는 듯이 ',
      tachyon.get_colored_name(),
      '의 가슴 부근을 바라보았다.',
    ]);
    await tachyon.say_and_wait([
      '…………',
      callname,
      '? 실례지만 하드웨어가 무슨 뜻인지 자세히 설명해 줄 수 있겠나?',
    ]);
    era.printButton('「……아니, 아무것도 아니야.」', 1);
    await era.input();
    await era.printAndWait('티격태격하는 사이에 어느덧 레이스가 시작될 시간이 되었다.');
  };

  handlers[race_enum.takz_kin] = async (tachyon, me, callname, edu_marks) => {
    if (era.get('cflag:32:육성턴수합산') < 96) {
      return true;
    }
    if (edu_marks.plan_b) {
      await print_event_name('마음이 통하다', tachyon);
      await era.printAndWait('피가 끓어오른다.');
      await era.printAndWait('이런 레이스에 대한 열정을 느껴본 것이 도대체 얼마만인가.');
      era.println();
      await tachyon.say_and_wait([callname, '…… 가겠네.']);
      era.printButton(
        `「가라! 나에게 ${tachyon.get_uma_sex_title()}의 한계를 보여줘!」`,
        1,
      );
      era.printButton('「안심하고 이겨. 나를 다시 한번 전율하게 해줘!」', 2);
      await era.input();
      await tachyon.say_and_wait('음…… 그리고, 타카라즈카가 끝나면……');
      era.println();
      await era.printAndWait([me.get_colored_name(), '이(가) 고개를 끄덕였다.']);
      await era.printAndWait('그때 약속했던, 더욱 넓은 세계를 향해.');
      era.printButton('「우리의 한계를, 세계의 정점에 새겨보자고!」', 1);
      await era.input();
    } else {
      await print_event_name('단결', tachyon);
      await era.printAndWait([
        me.get_couple_title(),
        '이 한신 경기장에 도착했을 때, 이미 전 구역은 인파로 북적이고 있었다.',
      ]);
      era.println();
      await say_by_passer_by_and_wait('관객A', [
        '역시 기대되는 건 ',
        tachyon.get_colored_name(),
        '이지.',
      ]);
      await say_by_passer_by_and_wait('관객B', [
        tachyon.get_colored_name(),
        '? 그건…… 지난번에……',
      ]);
      await say_by_passer_by_and_wait('관객C', [
        '딱 보니 지난 오사카배를 안 봤구먼. 그런 주법으로 달리는 ',
        tachyon.get_uma_sex_title(),
        '가 나쁜 사람일 리가 없다고!',
      ]);
      await say_by_passer_by_and_wait(
        '관객D',
        '인격주법론 같은 건 적당히 좀 하지…… 뭐, 확실히 매우 독특한 주법이긴 해.',
      );
      await say_by_passer_by_and_wait('관객E', [
        '힘내라! 오사카배 때 같은 주법을 다시 보여줘!',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '이런 이런…… 정말 인기 폭발이군. 게다가 다들 오사카배 이야기뿐이야…… 이보게, 내 작년 레이스가 그렇게 지루했나?',
      );
      era.printButton('「작년 레이스도 당연히 멋졌어.」', 1);
      era.printButton('「오사카배가 유독 특별했을 뿐이야.」', 2);
      await era.input();
      await era.printAndWait([
        '작년의 ',
        tachyon.get_colored_name(),
        '은 달리는 동안 빛의 눈부심 속에서도 어딘가 허무함이 서려 있었다.',
      ]);
      await era.printAndWait([
        '그렇기에 ',
        tachyon.sex,
        '의 레이스를 보고 나면, 경탄보다는 걱정이 앞섰다.',
      ]);
      await era.printAndWait(['혹시라도 ', tachyon.sex, '가 그대로 빛이 되어 사라져버릴까 봐 두려웠던 것이다.']);
      await era.printAndWait('그 허무함이 사라진 뒤의.');
      await era.printAndWait([tachyon.get_colored_name(), '의 주법은, 예술 그 자체였다.']);
      era.println();
      await tachyon.say_and_wait(
        '……일단 칭찬으로 받아두지. 그럼, 이런 분위기는 두 번째 실험을 진행하기에 딱 좋겠어.',
      );
      await tachyon.say_and_wait(
        '오사카배 때는…… 레이스 도중에 확신할 수 없었지만, 지금 이 G1 무대와 응원해 주는 팬들, 후후, 과연 어디까지 도달할 수 있을지 궁금하군.',
      );
    }
  };

  handlers[race_enum.arim_kin] = async (tachyon, me, callname, edu_marks) => {
    if (era.get('cflag:32:육성턴수합산') < 96) {
      return true;
    }
    await print_event_name('최종 실험 준비 완료', tachyon);
    const coffee = get_chara_talk(25),
      t_call_c = sys_get_colored_callname(32, 25);
    if (edu_marks.plan_b) {
      const c_call_me = sys_get_colored_callname(25, 0),
        c_call_t = sys_get_colored_callname(25, 32);
      await tachyon.print_and_wait('아리마 기념.');
      await tachyon.print_and_wait([
        callname,
        '이 말한 대로라면, 이 레이스가 끝난 후에 스스로에게 해답을 줄 수 있을 것이다.',
      ]);
      await tachyon.print_and_wait('조금은 두렵지만, 또 한편으로는 기대되기도 한다.');
      await tachyon.print_and_wait('곧 마주하게 될 결말에 대한 두려움.');
      await tachyon.print_and_wait('곧 밝혀지게 될 진실에 대한 기대감.');
      await tachyon.print_and_wait([me.sex, '는 도대체 무엇을 말하려 하는 것일까.']);
      await tachyon.print_and_wait('오늘의 아리마라면, 명확히 설명할 수 있을까.');
      era.println();
      await coffee.say_and_wait(['…… ', c_call_t, '?']);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([c_call_t, '!']);
      await tachyon.say_and_wait('…… 응?');
      era.println();
      await era.printAndWait([
        '정신을 차려보니, 눈앞에서 ',
        t_call_c,
        '이 어쩔 수 없다는 듯 자신을 바라보고 있었다.',
      ]);
      era.println();
      await coffee.say_and_wait('몇 번이나 불렀는데…… 또 무슨 딴생각을 하고 있는 건가요?');
      await tachyon.say_and_wait('…… 아니, 아무것도 아니네.');
      await coffee.say_and_wait('…… 이상하네.');
      await tachyon.print_and_wait([
        '만약 ',
        t_call_c,
        '을 위해서가 아니었다면, 자신은 절대로 이렇게 변하지 않았을 것이다.',
      ]);
      await tachyon.print_and_wait([
        '차라리 처음에 ',
        t_call_c,
        '을 진심으로 돕지 않았더라면 좋았을 텐데. 그랬다면 적어도 ',
        callname,
        '의 마음속에서 가장 밝은 빛으로 남을 수 있었을지도 모른다.',
      ]);
      await tachyon.print_and_wait([
        '…… 같은 생각은, 단 한 번도 ',
        tachyon.get_colored_name(),
        '의 머릿속에 떠오른 적이 없었다.',
      ]);
      await tachyon.print_and_wait([
        '만약 그런 생각을 품었다면, 그것은 과거의 ',
        tachyon.get_colored_name(),
        '을 완전히 부정하는 꼴이 되기 때문이다.',
      ]);
      await tachyon.print_and_wait([
        '하물며 ',
        t_call_c,
        '은 그 어떤 잘못도 하지 않았다.',
      ]);
      await tachyon.print_and_wait('다만…… 모든 전개가 예상과는 달랐을 뿐이다.');
      await tachyon.print_and_wait([
        '그로 인해 ',
        tachyon.get_colored_name(),
        '은 극히 복잡한 눈빛으로 ',
        t_call_c,
        '을 바라볼 수밖에 없었다.',
      ]);
      era.println();
      await coffee.say_and_wait('슬슬 나갈 시간이에요.');
      await tachyon.say_and_wait('…… 아아, 힘내게.');
      await coffee.say_and_wait([c_call_t, '…… 목소리가 좀 이상한데요.']);
      era.println();
      await tachyon.print_and_wait([
        '지나친 기대 때문이었을까. ',
        tachyon.get_colored_name(),
        '의 목소리는 조금 쉬어 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…… 별거 아니네. 어제 ',
        callname,
        '과 같이 거리에 나갔을 때 감기 기운이 좀 돌았을 뿐이야.',
      ]);
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '잠깐만, 당신들 둘이 크리스마스에 시내를 돌아다녔다고요? ……레이스가 끝난 뒤에 도대체 어떻게 된 일인지 자세히 설명해야 할 겁니다.',
        );
      } else {
        await coffee.say_and_wait([
          '또 ',
          c_call_me,
          '과 돌아다니다니…… 오늘은 명색이 ',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '인데 이러기에요?',
        ]);
      }
      era.println();
      await era.printAndWait('뒷말은 이제 아무래도 좋았다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 기다렸다. 레이스가 끝나고 수수께끼가 풀리는 그 순간을.',
      ]);
    } else {
      await era.printAndWait('그날이 오자, 모든 것은 의외로 평온했다.');
      await era.printAndWait([
        '전날 밤에 푹 잠을 자서인지 유난히 컨디션이 좋은 ',
        me.get_colored_name(),
        '은(는) 아침 일찍 일어나 ',
        tachyon.get_colored_name(),
        '을 위해 홍차를 우려냈다.',
      ]);
      await era.printAndWait('실내에는 햇살이 쏟아지고, 먼지가 빛 그림자 속에서 춤을 추었다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 실험을 하지 않고, 그저 평소처럼 조간신문을 읽고 있었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        ' 또한 빛을 발하지 않고, 그저 조용히 홍차의 맛을 음미했다.',
      ]);
      await era.printAndWait('두 사람은 실험실에서 폭풍 전야의 마지막 정적을 만끽했다.');
      era.println();
      await say_by_passer_by_and_wait('기자A', [
        '타키온',
        tachyon.get_adult_sex_title(),
        ', 이번 아리마 기념에서 특별히 주목하고 있는 라이벌이 있습니까?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…… 음, 며칠 전부터 나타났지. ',
        coffee.get_colored_name(),
        '. ',
        t_call_c,
        '…… 아마도, 숙적이라 부를 만한 존재겠지.',
      ]);
      await say_by_passer_by_and_wait('기자A', '아마도…… 인가요?');
      await tachyon.say_and_wait('음, 대략 그런 셈이라네.');
      era.println();
      await era.printAndWait([
        '경기장에 발을 들이기 전, ',
        me.get_colored_name(),
        '은(는) 문득 며칠 전 인터뷰 때 ',
        tachyon.get_colored_name(),
        '이 했던 말을 떠올렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ', 물리학의 두 먹구름 이야기를 들어본 적 있나?']);
      await tachyon.say_and_wait('못 들어봤다고? 괜찮네, 그저 이야기를 시작하기 위한 화두일 뿐이니까.');
      await tachyon.say_and_wait(
        '듣기로는, 켈빈 경이 물리학이라는 대성당은 이미 완성되었으며, 단지 하늘에 두 점의 작은 먹구름이 떠 있을 뿐이라고 말했다더군.',
      );
      await tachyon.say_and_wait(
        '하지만 누구도 예상하지 못했지. 그 두 점의 작은 먹구름이 양자역학과 상대성 이론이라는 근대 물리학의 두 거물을 불러오게 될 줄은……',
      );
      await tachyon.say_and_wait([
        '물론 이 이야기는 십중팔구 후대에 지어낸 것이겠지만, 하지만…… 내 말은, ',
        t_call_c,
        '이 바로 그 먹구름이라는 것이네.',
      ]);
      await tachyon.say_and_wait([
        '내 이론 속에서 ',
        t_call_c,
        '은 마지막으로 남은 조각이었지…… 하지만 그 뒤에는 무엇이 있을까?',
      ]);
      await tachyon.say_and_wait(
        '저 먹구름이 나에게 상대성 이론과도 같은 충격을 안겨줄 수 있을까? 어디 한번…… 나에게 보여주게나.',
      );
    }
  };
};