const era = require('#/era-electron');

const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { back_school } = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum, race_infos } = require('#/data/race/race-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,RaceEndParams):Promise<boolean|void>>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[race_enum.begin_race] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1 || era.get('cflag:25:육성턴수합산') >= 48) {
      return true;
    }
    await print_event_name('신기루', coffee);
    await say_by_passer_by_and_wait(
      `레이스 ${coffee.get_uma_sex_title()}A`,
      '하아, 후우……! 다들 수고하셨어요! 정말 멋진 레이스였네요!',
    );
    await say_by_passer_by_and_wait(`레이스 ${coffee.get_uma_sex_title()}A`, [
      '저기 계신 분…… 이름이 ',
      coffee.get_colored_name(),
      ' 맞죠? 당신도 수고 많았어요……',
    ]);
    await say_by_passer_by_and_wait(
      `레이스 ${coffee.get_uma_sex_title()}A`,
      '어라, 음…… 안 들리나? 저기……',
    );
    await coffee.say_and_wait('…………');
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 다른 레이스',
       coffee.get_uma_sex_title(),
      '들을 등진 채, 묵묵히 먼 곳을 바라보고 있었다.',
    ]);
    await era.printAndWait([
      '대기실 통로로 급히 달려온 ',
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '를 발견하고는 그 곁으로 다가갔다.',
    ]);
    await coffee.say_and_wait(['아, ', callname, '……']);
    era.printButton('「레이스 결과는 어때?」', 1);
    await era.input();
    await coffee.say_and_wait(
      '……제가 졌어요. 친구가 홀로 가장 앞에서, 결승점을 통과했어요…… 점점 더 멀리 달려가요……',
    );
    await coffee.say_and_wait(
      '게다가 아주 즐거워 보였어요. 아마도 넓은 곳에서 마음껏 달릴 수 있었기 때문이겠죠. 하지만 동시에……',
    );
    await coffee.say_and_wait(
      '거리 차이가…… 지금까지 중 가장 컸어요…… 마치 무언가 속박에서 풀려난 것처럼, 아주 빠르게.',
    );
    await coffee.say_and_wait('……친구를 쫓아가고 싶어요. 하지만…… 전 어떻게 해야 할까요……');
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 설명으로 미루어 보아, 「친구」와 ',
      coffee.sex,
      '의 속도 차이는 상당히 큰 모양이다……',
    ]);
    await era.printAndWait(
      '그렇다면 서둘러 계획을 짜더라도 성과를 거두기는 어려울 것이다. 그렇다면——',
    );
    era.printButton('「당분간은 일정을 정하지 말고, 차근차근 자신을 강화하자.」', 1);
    await era.input();
    await coffee.say_and_wait('차근차근 강화한다니…… 꽤 오랜 시간이 걸린다는 뜻인가요……');
    await era.printAndWait([
      me.get_colored_name(),
      '의 제안에 ',
      coffee.get_colored_name(),
      '는 망설였다. ',
      coffee.sex,
      '의 무거운 표정에서 미루어 보건대, 머릿속에서 치열하게 고민하고 있는 것이리라.',
    ]);
    await coffee.say_and_wait(
      '……알겠어요. 당장 따라잡을 수 없다면, 게다가 제 체질이 튼튼한 편도 아니니…… 아마 그게 더 나을지도 모르겠네요.',
    );
    await era.printAndWait('이것으로 서로의 합의가 이루어졌다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      coffee.sex,
      '에게 고개를 끄덕이며 곁에 섰고, ',
      coffee.sex,
      '와 함께 같은 목표를 쫓을 것을 다짐했다.',
    ]);
    await say_by_passer_by_and_wait(
      `레이스 ${coffee.get_uma_sex_title()}A`,
      '저기, 저 두 사람 좀 이상하지 않아……? 계속 아무것도 없는 먼 곳만 쳐다보고 있는데.',
    );
    await say_by_passer_by_and_wait(
      `레이스 ${coffee.get_uma_sex_title()}B`,
      '아마 둘 다…… 괴짜인가 보지. 너무 가까이 가지 않는 게 좋겠어……',
    );
    await era.printAndWait([
      '우연히 다른 세계와 접촉했다가 ',
      coffee.get_colored_name(),
      '에게 구해졌던 ',
      me.get_colored_name(),
      '은(는), 이제 오직 ',
      coffee.sex,
      '만이 이해하는 세계를 알아가기로 결심했다…… 그리고 한 걸음씩, 좋은 성적을 거두어 가기로.',
    ]);
    extra_flag.relation_change = 15;
    extra_flag.pt_change = 30;
    add_event(back_school, new EventObject(25, cb_enum.edu));
  };

  handlers[race_enum.hoch_sho] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('이정표', coffee);
    await era.printAndWait([
      '레이스가 끝난 후, ',
      me.get_colored_name(),
      '은(는) 곧장 대기실 통로로 달려갔다.',
    ]);
    era.printButton('「카페!」', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '의 외침을 들은 듯, 아직 숨을 헐떡이던 ',
      coffee.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '쪽을 바라보았다. 레이스의 피로에서 채 회복되지 않은 ',
      coffee.sex,
      '의 얼굴은 평소보다 더욱 창백했고, 이마에서는 끊임없이 땀방울이 흘러내리고 있었다.',
    ]);
    await coffee.say_and_wait([
      '하아, 하아…… ',
      callname,
      '…… 콜록, 콜록……',
    ]);
    era.printButton('「괜찮아!?」', 1);
    await era.input();
    await coffee.say_and_wait('괜찮아요…… 그저 조금, 무리해서 달렸을 뿐이에요……');
    await era.printAndWait([
      '이번 ',
      race_infos[race_enum.hoch_sho].get_colored_name(),
      '에서 ',
      coffee.get_colored_name(),
      '의 상대들은 하나같이 강적이었다. 내내 손에 땀을 쥐고 지켜보던 ',
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '가 마침내 결승선을 통과하는 것을 보고서야 안도의 한숨을 내쉬었다.',
    ]);
    await era.printAndWait([
      '하지만…… 단순한 승리만이 ',
      me.get_couple_title(),
      '의 목표는 아니었다.',
    ]);
    era.printButton('「친구는 어때?」', 1);
    await era.input();
    await coffee.say_and_wait('여전히 따라잡지는 못했어요…… 하지만, 거리가 줄어들었어요……!');
    await coffee.say_and_wait('이대로 계속 레이스에 나가다 보면…… 언젠가는 반드시……');
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 설명으로 미루어 볼 때, 친구는 의심할 여지 없이 매우 강력한 존재다…… 친구를 쫓는다는 목표는 ',
      coffee.get_colored_name(),
      '가 더 좋은 성적을 거두게 한다는 목표와 완벽하게 일치했다.',
    ]);
    await era.printAndWait([
      '그런 관점에서 보면, ',
      coffee.get_colored_name(),
      '가 현재 상태를 유지하며 클래식 3관 노선을 계속 준비하게 하는 것이 최선의 선택이겠지만……',
    ]);
    if (sys_reg_race(32).curr.race === race_enum.hoch_sho) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '여기 있었군, ',
        sys_get_callname(32, 0),
        ', 그리고 ',
        t_call_c,
        '.',
      ]);
      await era.printAndWait([
        '이번에는 비록 ',
        coffee.get_colored_name(),
        '에게 패배했지만, ',
        tachyon.get_colored_name(),
        '은 지금 지쳐 있는 ',
        coffee.get_colored_name(),
        '보다 훨씬 여유로워 보였다. 특유의 미소를 지으며 ',
        coffee.sex,
        '는 ',
        me.get_couple_title(),
        ' 두 사람에게 다가왔다.',
      ]);
      await tachyon.say_and_wait([
        t_call_c,
        ', 자네 이번에—— 아주 잘 달렸어, 정말 훌륭했네! 비록 부족하긴 했지만, 좋았어! 예상 밖의 성공과 예상 내의 실패는 상쇄될 수 있는 법이지!',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 혼자 한참을 웃더니, 다시 하늘을 바라보며 무언가 나직이 읊조렸다.',
      ]);
      await tachyon.say_and_wait('타키온—— 그것은…… 빛보다 빠르게 움직이는 가상의 입자.');
      await tachyon.say_and_wait(
        '하지만 설령 가상일지라도, 광기가 가져오는 잔광을 모두에게 보여줘야만 해.',
      );
      await tachyon.say_and_wait([
        race_infos[race_enum.sats_sho].get_colored_name(),
        '에서 마음껏 불태우고 나면, 반드시 눈부신 잔해가 탄생할 거야.',
      ]);
      await tachyon.say_and_wait([
        '그럼, 당분간은 여기까지 하지. ',
        t_call_c,
        ', 자네의 향후 활약을 기대하겠네.',
      ]);
      era.printButton('「…………」', 1);
      await era.input();
      await era.printAndWait([
        '평소처럼 ',
        tachyon.get_colored_name(),
        '은 갑자기 나타나 난해한 말을 내뱉고는 제멋대로 가버렸고, 멀어지는 ',
        coffee.sex,
        '의 뒷모습을 보며 ',
        me.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '는 침묵에 빠졌다.',
      ]);
      await coffee.say_and_wait([
        callname,
        '…… ',
        race_infos[race_enum.sats_sho].get_colored_name(),
        '…… 제가 참가해야 할까요?',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 말을 듣고 무언가 생각난 듯, ',
        coffee.get_colored_name(),
        '가 고개를 돌려 ',
        me.get_colored_name(),
        '에게 물었다.',
      ]);
    }
    era.printButton('「오늘 레이스는 꽤 힘들었지?」', 1);
    await era.input();
    await coffee.say_and_wait('네…… 조금은, 힘에 부쳤어요……');
    era.printButton('「그럼, 사츠키상은…… 일단 포기하자.」', 1);
    await era.input();
    await era.printAndWait([
      '오늘의 치열한 레이스는 ',
      coffee.sex,
      '의 가냘픈 몸에 큰 부담을 주었을 것이다. 앞으로 도전해야 할 노선을 파악했다고는 하나, 이렇게 빨리 G1 레이스에 도전하는 것은 ',
      coffee.sex,
      '에게 너무 무리였다.',
    ]);
    await coffee.say_and_wait('그럼…… 더비는……');
    await era.printAndWait([
      race_infos[race_enum.toky_yus].get_colored_name(),
      '는 확실히 ',
      me.get_colored_name(),
      '이(가) ',
      coffee.get_colored_name(),
      '가 차지하길 바라는 레이스다. 하지만 정말로 더비를 다음 목표로 삼는다면, 그것은 ',
      coffee.sex,
      '가 견뎌낼 수 있을지에 대한 커다란 도박이 될 것이다……',
    ]);
    await coffee.say_and_wait([
      '……죄송해요, ',
      callname,
      '…… 다 제가…… 이렇게 변변치 못한 탓에……',
    ]);
    await coffee.say_and_wait(
      '당신의 상냥함을…… 이용하고 싶지 않아요…… 게다가…… 이렇게 중요한 일전에서…… 콜록……',
    );
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 등을 가볍게 두드려주며, ',
      coffee.sex,
      '가 진정할 수 있게 도와주었다.',
    ]);
    era.printButton(
      `「가을의 ${race_infos[race_enum.stli_kin].name_zh} 에 도전하자.」`,
      1,
    );
    await era.input();
    await coffee.say_and_wait([
      race_infos[race_enum.stli_kin].get_colored_name(),
      '…… ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '의 전초전인가요…… 그렇게 오래 쉬어야 한다니……',
    ]);
    await coffee.say_and_wait('하지만…… 그렇게 되면…… 적어도 더비는 역시……');
    era.printButton('「더비는 상황을 봐서 다시 결정하자.」', 1);
    await era.input();
    await coffee.say_and_wait('상황을 봐서…… 알겠어요. 그럼 상황이 허락한다면 다시……');
    await era.printAndWait([
      '그렇게 다음 목표는 ',
      race_infos[race_enum.stli_kin].get_colored_name(),
      '로 정해졌고, ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '는 상황에 맞춰 참가 여부를 결정하기로 했다.',
    ]);
    extra_flag.attr_change = new Array(5).fill(10);
    extra_flag.attr_change[get_random_value(0, 4)] = 0;
    extra_flag.pt_change = 35;
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.toky_yus] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('우뚝 서다', coffee);
    await say_by_passer_by_and_wait('해설', [
      coffee.get_colored_name(),
      ' 더비를 제패합니다──!! 불멸의 마천루, 여기에 우뚝 섭니다!',
    ]);
    await say_by_passer_by_and_wait('해설', [
      '그런데 ',
      coffee.sex,
      '는 괜찮은 걸까요? 체력을 완전히 소진한 듯 발걸음조차 제대로 떼지 못하고 있습니다…… 하지만 ',
      coffee.sex,
      '는 자신에게 꿈을 맡긴 사람들의 염원을 끝내 이루어 냈습니다──!!',
    ]);
    await era.printAndWait([
      '대기실 통로 안, ',
      coffee.get_colored_name(),
      '가 비틀거리며 ',
      me.get_colored_name(),
      '에게 다가왔다.',
    ]);
    await coffee.say_and_wait(['트레이너…… ', me.get_adult_sex_title(), '……']);
    era.printButton('「정말 잘해줬어, 카페……」', 1);
    await era.input();
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 품에 쓰러졌다. 기진맥진한 모습에 ',
      me.get_colored_name(),
      '은(는) 가슴이 미어지는 것 같았지만, ',
      coffee.sex,
      '는 결국 승리를 거머쥐었다.',
    ]);
    await coffee.say_and_wait('하아, 하아……');
    era.printButton('「이제 푹 쉬도록 해.」', 1);
    era.printButton('「훈련 강도도 적절히 낮추자.」', 2);
    await era.input();
    await coffee.say_and_wait('네……');
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '에서 우승을 차지했고, 오랫동안 이어온 노력이 마침내 최고의 결실을 맺었다. 동시에 ',
      me.get_colored_name(),
      '의 지극정성 어린 간호 덕분에 ',
      coffee.sex,
      '의 몸 상태도 빠르게 회복되었고, 가을 시즌에도 좋은 성적을 기대할 수 있을 것 같다……',
    ]);
    extra_flag.attr_change = new Array(5).fill(0);
    extra_flag.attr_change[get_random_value(0, 4)] = 20;
    extra_flag.base_change = JSON.parse('{"체력":-250}');
    extra_flag.pt_change = 45;
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };

  handlers[race_enum.stli_kin] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('과도기', coffee);
    era.printButton('「수고했어, 카페!」', 1);
    await era.input();
    await era.printAndWait([
      '평소처럼 ',
      me.get_colored_name(),
      '은(는) 일찍이 대기실 통로에 도착해 ',
      coffee.get_colored_name(),
      '를 기다리고 있었다.',
    ]);
    await coffee.say_and_wait(['하아, 하아…… ', callname, '. 해냈어요……']);
    await coffee.say_and_wait('과정이 쉽지는 않았지만…… 다리에는…… 아직 여력이 남아 있어요.');
    await era.printAndWait([
      '훌륭한 레이스를 보여준 뒤의 ',
      coffee.sex,
      '는 여전히 조금 연약해 보였다. 하지만 신체적으로는 여름 동안의 단련 덕분에 전보다 훨씬 튼튼해진 듯했다.',
    ]);
    await era.printAndWait([
      '하지만 결코 방심할 수는 없다. 한 달 뒤에는 가장 중요한—— ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '이 기다리고 있기 때문이다.',
    ]);
    extra_flag.attr_change = new Array(5).fill(6);
    extra_flag.attr_change[get_random_value(0, 4)] = 0;
    extra_flag.pt_change = 35;
    extra_flag.relation_change = 20;
  };

  handlers[race_enum.kiku_sho] = async (coffee, me, callname, extra_flag) => {
    if (extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('수확', coffee);
    await say_by_passer_by_and_wait('해설', [
      coffee.get_colored_name(),
      '! ',
      coffee.sex,
      '가 파죽지세로 다른 이들을 제치고 가장 먼저 결승선을 통과합니다!',
    ]);
    await say_by_passer_by_and_wait('관중들', '오오오오오오오오오!!!!');
    await say_by_passer_by_and_wait('해설', [
      coffee.sex,
      '의 저 놀라운 속도…… 아니, 경이로운 발걸음! 현장의 모든 이들이 넋을 잃고 바라보고 있습니다……!',
    ]);
    await era.printAndWait([
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '에서 ',
      coffee.get_colored_name(),
      '는 유례없이 안정적인 발걸음으로 결승점에 도달했다.',
    ]);
    await era.printAndWait(
      '봄, 여름…… 그동안 꾸준히 쌓아온 노력이 마침내 결실을 맺는 순간이었다.',
    );
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 보기 드물게 흥분한 표정으로 대기실 통로를 지나 ',
      me.get_colored_name(),
      '의 곁으로 다가왔다.',
    ]);
    await coffee.say_and_wait(
      '트레이너 선생님……! 친구가……! 방금…… 바로 제 눈앞에……! 레이스 중에 이렇게 가까이 있었던 적은 처음이에요……!',
    );
    era.printButton('「축하해, 얼굴은 제대로 보였어?」', 1);
    await era.input();
    await coffee.say_and_wait('아직요…… 하지만 오늘 전 코스를 달렸는데도 전혀 힘들지 않았어요……');
    await coffee.say_and_wait('이게 저…… 이게 지금의 저인가요……');
    await era.printAndWait([
      coffee.sex,
      '의 목소리에는 믿기지 않는다는 기색이 역력했다. ',
      me.get_colored_name(),
      '은(는) ',
      coffee.sex,
      '의 말에서 그동안 ',
      coffee.get_colored_name(),
      '의 몸에 좋지 않은 영향을 끼쳤던 기이한 현상이 사라졌음을 느꼈다.',
    ]);
    await coffee.say_and_wait([callname, '…… 다음 목표는요?']);
    await era.printAndWait('흥분이 가라앉자, 이제 다음 목표를 결정할 때가 왔다.');
    era.printButton('「……아리마 기념으로 가자.」', 1);
    await era.input();
    await coffee.say_and_wait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '…… 그럼 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '은 포기하는 건가요?',
    ]);
    await era.printAndWait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '을 선택한 주요 이유는 ',
      coffee.get_colored_name(),
      '를 푹 쉬게 해주고 싶었기 때문이다.',
    ]);
    await era.printAndWait([
      '비록 ',
      coffee.sex,
      '의 현재 몸 상태가 눈에 띄게 좋아졌다고는 하나, 고강도 레이스는 여전히 큰 위험 부담이 따른다.',
    ]);
    await era.printAndWait([
      '게다가 오늘 레이스를 지켜본 ',
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '가 장거리 레이스에 더 적합하다는 것을 확신했다. ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '과 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '은 단 100미터 차이지만…… 때로는 그 100미터가 승부를 결정짓기도 한다.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '에게 충분히 설명하자, ',
      coffee.sex,
      '는 반박하는 대신 한 걸음 다가와 ',
      me.get_colored_name(),
      '의 손을 잡았다.',
    ]);
    await coffee.say_and_wait([
      '전…… ',
      callname,
      '을 믿어요. 당신이 곁에 있었기에…… 지금의 성적을 낼 수 있었고, 친구에게 이렇게 다가갈 수 있었으니까요……',
    ]);
    if (check_tachyon_plan_b()) {
      const c_call_t = sys_get_colored_callname(25, 32),
        t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await tachyon.say_and_wait([
        '하하하! 좋아 좋아, 아주 훌륭해. ',
        t_call_c,
        ', 자네 정말 멋지게 달렸어!',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 그제야 관객석에서 느긋하게 이쪽으로 다가왔다.',
      ]);
      await tachyon.say_and_wait([
        '내 예상과 완벽히 일치해! 과연 내가 선택한 플랜 B답군! 그렇지 않나, ',
        t_call_c,
        '!?',
      ]);
      await coffee.say_and_wait([
        c_call_t,
        '…… 전 여전히 당신을 완전히 신뢰하지는 않아요…… 하지만 도와준 점에 대해서는 감사하고 있어요.',
      ]);
      await era.printAndWait([
        '말을 마친 ',
        coffee.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 손을 끌고 그곳을 벗어나려 했다. 떠나는 순간 ',
        me.get_colored_name(),
        '은(는) 자신의 또 다른 담당 우마무스메인 ',
        tachyon.get_colored_name(),
        '을 돌아보았다. ',
        coffee.sex,
        '는 평소와 다름없이 여유로운 미소를 짓고 있었다.',
      ]);
      await era.printAndWait([
        '다만, ',
        me.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        '가 알아채지 못한 곳에서, ',
        tachyon.get_colored_name(),
        '은 찰나의 순간 스쳐 지나가는 공허한 표정을 지었다.',
      ]);
    }
    extra_flag.attr_change = new Array(5).fill(6);
    extra_flag.relation_change = 25;
    extra_flag.love_change = 3;
  };
};