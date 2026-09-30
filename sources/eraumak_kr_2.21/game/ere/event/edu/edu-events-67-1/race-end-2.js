const era = require('#/era-electron');

const {
  japa_cup_common,
  takz_kin_common,
} = require('#/event/edu/edu-events-67-1/snippets');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

const { race_enum, race_infos } = require('#/data/race/race-const');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,number,{race:number,rank:number},DaiyaEduMarks):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.sank_hai] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('공명', daiya);
    const kita = get_chara_talk(68);
    const mcqueen = get_chara_talk(13);
    const teio = get_chara_talk(3);
    if (extra_flag.rank === 1) {
      await say_by_passer_by_and_wait(
        '실황',
        '다이아몬드의 광채에 한 점의 그림자도 없습니다! 「오사카배」를 제패한 것은 사토노 다이아몬드입니다!',
      );
      await say_by_passer_by_and_wait('관중', '와아아아아아아아!');
      await say_by_passer_by_and_wait(
        '관중C',
        '정말 빈틈이 없네, 사토노 다이아몬드! 오늘 주행도 정말 눈부셨어.',
      );
      await say_by_passer_by_and_wait(
        '관중B',
        `${daiya.sex}의 실력은 마치 작년에 급부상했던 키타산 블랙 같아… 아니, 오히려 능가했을지도…!」`,
      );
      await say_by_passer_by_and_wait(
        '관중A',
        '키타산 블랙도 이대로 물러날 캐릭터는 아니지. 사토노와 키타산, 앞으로의 대결이 정말 기대되는걸…!',
      );
    } else {
      await say_by_passer_by_and_wait(
        '실황',
        `키타산 블랙, 거리를 좁힐 틈을 주지 않습니다! ${daiya.sex}는 작년의 설욕을 딛고, 오늘도 키타산 축제입니다!」`,
      );
      await say_by_passer_by_and_wait('관중', '와아아아아아아아!');
      await say_by_passer_by_and_wait(
        '관중B',
        '야아, 정말 대단한 풍채구나! 더 강해진 모양이네, 키타산 블랙!!',
      );
      await say_by_passer_by_and_wait(
        '관중A',
        `연도 대표 ${daiya.get_uma_sex_title()}의 실력은 올해도 여전하군!`,
      );
      await say_by_passer_by_and_wait(
        '관중C',
        '사토노 다이아몬드도 가능성이 보여. 이대로 계속 지지만은 않겠지. 키타산과 사토노의 대결, 앞으로도 놓칠 수 없겠어!',
      );
    }
    await teio.say_and_wait('음음, 키타산도 다이아도 많이 컸네!');
    await mcqueen.say_and_wait(
      '당신은 대체 어떤 입장에서 말하는 건가요… 뭐, 저도 그렇게 생각합니다만.',
    );
    await teio.say_and_wait(
      `열심히 달리는 ${daiya.sex}들의 모습을 보니까, 나와 네가 대결했을 때가 떠올라.`,
    );
    await mcqueen.say_and_wait([
      '그건 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '을 말하는 거겠죠.',
    ]);
    await mcqueen.say_and_wait(`어쩌면… ${daiya.sex}들의 다음 레이스도 그렇게 될지도 모르겠네요.`);
    await teio.say_and_wait('그럴지도 모르겠네~! 그건 그렇고, 맥퀸.');
    await teio.say_and_wait('나 지금 당장이라도 마구 달리고 싶은 기분이야!');
    await mcqueen.say_and_wait('어머, 우연이네요. 저도 마침 그렇게 생각하던 참이었어요.');
    await teio.say_and_wait('그럼 역까지 같이 달리기 시합할까!');
    await mcqueen.say_and_wait('좋아요, 그렇게 하죠.');
    era.drawLine();
    if (extra_flag.rank === 1) {
      await kita.say_and_wait(
        '으아아아아앙, 너무 분해!! 시니어 3관 노선 제패가 목표였는데!',
      );
      await kita.say_and_wait('첫 레이스부터 실패하다니, 제길──!!');
      await daiya.say_and_wait('키, 키타짱…!');
      await kita.say_and_wait(
        '다이아짱을 전혀 떨쳐낼 수가 없었어! 나 정말 엄격하게 트레이닝 해왔는데.',
      );
      await kita.say_and_wait(
        '그런데도 다이아짱이 쫓아오다니! 아니, 추월당한 건 마지막에 내가 방심했기 때문이야!',
      );
      await kita.say_and_wait('분해분해분해! 역시 다이아짱이야!');
      await daiya.say_and_wait(
        '헤헤헤! 나도 키타짱에게 뒤처지지 않으려고 정말 필사적이었거든!',
      );
      await kita.say_and_wait(
        '다이아짱이랑 진심으로 맞붙을 수 있어서 정말 즐거웠어! 앞으로도 같이 더 많이 달리고 싶어!',
      );
      await kita.say_and_wait([
        '진심인 다이아짱을 이기고 싶어! 그러니까… 네가 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '에도 나가줬으면 좋겠어!',
      ]);
    } else {
      await kita.say_and_wait(
        '앗싸──!! 오사카배 우승이다──! 첫 번째 목표 달성!!',
      );
      await daiya.say_and_wait('으윽…!');
      await daiya.say_and_wait(
        '역시 키타짱은 지난번 「아리마 기념」 때보다 더 강해졌어…!',
        true,
      );
      await daiya.say_and_wait('달리기 실력만큼은 이제 키타짱을 따라잡았다고 생각했는데…', true);
      await daiya.say_and_wait('키타짱은 그보다 더 앞서나가고 있구나!', true);
      await daiya.say_and_wait('…따라잡을 수 있을 줄 알았는데. 또 거리가 벌어져 버렸네…');
      await kita.say_and_wait('나도 다이아짱에게 지지 않으려고 정말 열심히 노력했는걸!');
      await kita.say_and_wait('「아리마 기념」에서 다이아짱의 실력을 실감한 뒤로 말이야.');
      await daiya.say_and_wait(
        '나도 나름대로 노력했다고 생각했는데, 아직 한참 부족했나 봐…',
      );
      await daiya.say_and_wait(
        '하지만! 나도 더 노력할 수 있어! 그러니까 다음번엔 꼭 내가 이길 거야!!',
      );
      await kita.say_and_wait(
        '응, 또 승부하자, 다이아짱! 나도 다이아짱이랑 같이 더 많이 달리고 싶어!',
      );
      await kita.say_and_wait('다이아짱을 이기고 싶다는 마음이 나를 더 강하게 만들어주니까!');
      await kita.say_and_wait([
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '!! 다이아짱도 꼭 나와줬으면 해!',
      ]);
    }
    await daiya.say_and_wait([
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '… 키타짱의 2연패가 걸린 레이스네.',
    ]);
    await kita.say_and_wait(
      '응! G1 최장 거리인 3200m 레이스, 다이아짱이랑 같이 달려보고 싶어!',
    );
    await kita.say_and_wait('트레이너 씨랑 상의해서 잘 한번 생각해 봐.');
    await kita.say_and_wait('교토에서 기다릴게!!');
    era.drawLine();
    await daiya.say_and_wait('…트레이너 선생님, 다음 레이스에 대해서 말인데요…');
    era.printButton('「나가고 싶은 건 『텐노상(봄)』이지?」', 1);
    await era.input();
    await daiya.say_and_wait('네! 그런데… 어떻게 아셨나요?');
    await era.printAndWait(
      `사토노 다이아몬드는 일전에, ${
        daiya.sex
      }가 키타산 블랙의 등을 쫓으며 「명문 ${daiya.get_uma_sex_title()}」로서의 자세에 대한 답을 찾겠다고 말했었다.`,
    );
    await era.printAndWait(
      `그렇기에 ${me.name}은(는) ${daiya.sex}가 키타산 블랙과 같은 레이스에 나가고 싶어 할 것이라 예상했다.`,
    );
    await era.printAndWait([
      `게다가 사토노 다이아몬드의 성격상, ${daiya.sex}는 키타산 블랙에게 유리하며 그녀가 2연패에 도전하는 `,
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '을 대결 무대로 고집할 것이라 생각했다.',
    ]);
    await daiya.say_and_wait(
      '전부 꿰뚫어 보고 계셨군요… 후훗, 이 정도면 나중에는 제가 직접 결정해도 문제없겠는걸요?',
    );
    era.printButton('「안 돼, 나랑은 꼭 상의해야지!?」', 1);
    await era.input();
    await daiya.say_and_wait('후후훗, 농담이에요♪');
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait([
        '그럼 다음 레이스는 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        '으로 정해진 거네요. 사토노 가문을 위해 그 유서 깊고 영광스러운 방패 모양의 트로피를 쟁취해 보이겠어요.',
      ]);
    } else {
      await daiya.say_and_wait(
        `제가 아직 「명문 ${daiya.get_uma_sex_title()}」가 되기엔 실력이 부족해서 오늘 패배한 거겠죠.`,
      );
      await daiya.say_and_wait([
        '그러니 다음번 ',
        race_infos[race_enum.tenn_spr].get_colored_name(),
        ' 에서는 반드시 키타짱을 이기겠어요…!!',
      ]);
      await daiya.say_and_wait(
        '그리고 사토노 가문을 위해 그 유서 깊고 영광스러운 방패 모양의 트로피를 쟁취해 보이겠어요.',
      );
    }
  };

  handlers[race_enum.tenn_spr] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('두 명의 강자', daiya);
    const kita = get_chara_talk(68);
    const mcqueen = get_chara_talk(13);
    const teio = get_chara_talk(3);
    await era.printAndWait(
      '실황 「두 번째 언덕을 지나, 이제 제3 코너로 진입합니다! 무척 고통스럽지만, 이제부터가 승부처입니다!」',
    );
    await daiya.say_and_wait('허억, 허억, 허억, 허억!');
    await kita.say_and_wait('하아, 하아, 하아, 하아────!');
    await era.printAndWait('관중A 「다이아몬드, 힘내라──!!」');
    await era.printAndWait('관중B 「키타산, 가라──!!」');
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        '실황 「키타산 블랙, 사토노 다이아몬드! 두 강자의 대결, 승자는… 사토노 다이아몬드──!!」',
      );
    } else {
      await era.printAndWait(
        '실황 「키타산 블랙, 사토노 다이아몬드! 두 강자의 대결, 승자는… 키타산 블랙──!! 키타산 블랙, 2연패 달성입니다────!!」',
      );
    }
    await say_by_passer_by_and_wait('관중', '와아아아아아아아아아아아!');
    await say_by_passer_by_and_wait('관중A', '…대단해… 정말 엄청난 퍼포먼스였어…');
    await say_by_passer_by_and_wait(
      '관중C',
      '와, 소름 돋았어…! 등줄기가 짜릿해질 정도야…!',
    );
    await say_by_passer_by_and_wait(
      '후드티를 입은 남성',
      '으으… 둘 다…! 둘 다 너무 잘했어…!!',
    );
    await teio.say_and_wait(`하… 아하하! 둘 다 정말 대단하네!`);
    await teio.say_and_wait('…저기, 맥퀸.');
    await mcqueen.say_and_wait('네, 가도록 하죠.');
    if (extra_flag.rank === 1) {
      await kita.say_and_wait('하아, 하아… 헤헤헤, 아직도 심장이 엄청나게 뛰네…');
      await daiya.say_and_wait('나도… 하아, 하아…');
      await kita.say_and_wait(
        '…음, 전력을 다했는데도 진 거라면 어쩔 수 없지! 오늘은 나의 완전패배야!',
      );
      await kita.say_and_wait('축하해, 다이아짱!');
      await daiya.say_and_wait(
        '내가 이길 수 있었던 것도 전부 키타짱 덕분이야! 키타짱이 앞에서 내 잠재력을 끌어내 줬기 때문에, 내 한계를 뛰어넘을 수 있었던 거야.',
      );
    } else {
      await daiya.say_and_wait('하아, 하아… 다리가 떨려요…');
      await kita.say_and_wait(
        '하아, 하아… 헤헤헤, 나도 마찬가지야…! 정말 어어어어엄청나게 힘들다──!!',
      );
      await daiya.say_and_wait('…정말 분해… 전력을 다했는데도…');
      await daiya.say_and_wait(
        '자신의 한계를 뛰어넘을 정도로 노력했는데… 그런데도 이기지 못하다니…',
      );
      await kita.say_and_wait('다이아짱…');
      await daiya.say_and_wait('나의 완전패배야… 2연패 달성 축하해, 키타짱.');
      await kita.say_and_wait('…고마워, 다이아짱.');
      await daiya.say_and_wait(
        '헤헤헤, 하지만… 키타짱이 앞에서 내 잠재력을 끌어내 준 덕분에, 오늘 난 내 한계를 넘을 수 있었어…',
      );
    }
    await daiya.say_and_wait('키타짱과 함께 달리면 더 많이 성장할 수 있을 것 같은 기분이 들어!');
    await kita.say_and_wait('그 점은 나도 동감이야! 우리 이대로 같이 정점을 향해 가보자!');
    await teio.say_and_wait('후후훗, 정점이라니~! 아주 쉽게 말하는걸!');
    await teio.say_and_wait('정점에서 기다리고 있는 상대가 누군지 알고는 있는 거야? 키타산!');
    await kita.say_and_wait('헉, 테이오 씨!?');
    await daiya.say_and_wait('맥퀸 씨도 오셨네요!');
    await teio.say_and_wait(
      '네가 말하는 정점은 나의 영역이거든! 내 지상에 발을 들이고 싶다면, 이 테이오 님을 먼저 이겨보시지~!',
    );
    await mcqueen.say_and_wait('테이오, 너무 짓궂게 굴지 마세요.');
    await daiya.say_and_wait('네…?');
    await teio.say_and_wait('너희에게 선전포고를 하겠어!! 나랑 맥퀸도 가을 레이스에 참가할 거야!');
    await teio.say_and_wait('정점에 도달하고 싶다고 했지! 그럼 우리에게 도전해 봐!');
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      ' 「에에에에에엑～～!?」',
    ]);
    await daiya.say_and_wait(
      '정, 정말로 참가하시는 건가요!? 아무 말도 없으셨는데… 어째서 이렇게 갑자기…?',
    );
    await mcqueen.say_and_wait('네, 원래 계획에는 참가 예정이 없었습니다만.');
    await mcqueen.say_and_wait(
      '사토노 씨와 키타산 씨의 레이스를 보고 마음이 바뀌었습니다.',
    );
    await mcqueen.say_and_wait('당신들과 한 번 겨뤄보고 싶어졌거든요.');
    await mcqueen.say_and_wait('두 분의 활약이 저희의 투지에 불을 지핀 겁니다.');
    await daiya.say_and_wait('…!');
    await mcqueen.say_and_wait('──어떤가요? 저희의 도전을 받아들여 주시겠습니까?');
    await daiya.say_and_wait('앗! 영광입니다!! 부디 꼭 그런 기회를 주세요!');
    await kita.say_and_wait('저도요! 잘 부탁드립니다!!');
    await teio.say_and_wait('그래야지!');
    await teio.say_and_wait('나는 『재팬 컵』에 나갈 거야!');
    await mcqueen.say_and_wait('그럼 저는 『텐노상(가을)』에서 기다리도록 하죠.');

    await teio.say_and_wait('정말 기대되는걸~! 오랜만의 트윙클 시리즈 레이스야!');
    await mcqueen.say_and_wait('그럼 이만 실례하겠습니다.');
    await kita.say_and_wait('다이아짱…! 나 지금 꿈꾸는 거 아니지…?');
    await daiya.say_and_wait(
      '응! 하지만… 어쩌면 우리 둘이 동시에 꿈을 꾸고 있는 걸지도 몰라요',
    );
    era.printButton('「나도 전부 들었어, 꿈이 아니란다」', 1);
    await era.input();
    await kita.say_and_wait(
      '우와아아아!! 역시 꿈이 아니었어! 테이오 씨랑 같이 레이스를 할 수 있다니!!',
    );
    await daiya.say_and_wait('맥퀸 씨와 함께 트윙클 시리즈의 무대에서…!');
    await daiya.say_and_wait('너무 기뻐요… 설마 이런 날이 올 줄이야…');
    await era.printAndWait('사토노 다이아몬드는 감격한 나머지 눈시울이 붉어졌다. 키타산 블랙도 마찬가지였다.');
    await era.printAndWait(
      `그도 그럴 것이 ${daiya.sex}들은 각자 메지로 맥퀸과 토카이 테이오를 동경하여 트레센 학원에 들어왔으니, 반응이 격한 것도 당연한 일이었다.`,
    );
    await kita.say_and_wait([
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '이랑 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      ' 다 나갈 거야!',
    ]);
    await kita.say_and_wait(
      '어차피 원래부터 「가을 시니어 3관」을 목표로 하고 있었으니까. 다이아짱은?',
    );
    await daiya.say_and_wait([
      '나는 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '에 나갈래! 맥퀸 씨에게 도전하고 싶어!!',
    ]);
    era.printButton('「『텐노상(가을)』이라…」', 1);
    await era.input();
    await era.printAndWait(
      `이렇게 되면 우선 여름 합숙을 거쳐야 한다. 본래 무더위 속 트레이닝에 약하다는 점을 고려하면…`,
    );
    await era.printAndWait(
      `여름이 지나자마자 바로 정면 승부를 벌이는 것은 안심할 수 없다. 『텐노상(가을)』 전에 다른 레이스에 출주해 컨디션을 점검하는 편이 좋겠다.`,
    );
    era.printButton('「그전에 우선 『교토 대상전』에 나가보자」', 1);
    await era.input();
    await daiya.say_and_wait([
      race_infos[race_enum.kyot_dai].get_colored_name(),
      '을 통해 상태를 살피고, 상황에 맞춰 최적의 컨디션을 만들자는 말씀이시죠. 저도 이견 없습니다.',
    ]);
    await kita.say_and_wait([
      '나는 팬 투표로 출주권을 얻는 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '에 먼저 나갔다가 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '에 나갈게!',
    ]);
    await kita.say_and_wait([
      '맥퀸 씨를 이기기 위해서라도 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '을 위해 열심히 노력하자!',
    ]);
    await daiya.say_and_wait('후우………… 아직도 꿈만 같아요…');
    era.printButton('「앞으로 서서히 실감이 날 거야」', 1);
    await era.input();
    await daiya.say_and_wait(
      '그렇네요… 그러니 언제까지고 기뻐만 하고 있을 수는 없겠어요. 맥퀸 씨와 함께 달릴 소중한 기회인걸요.',
    );
    await daiya.say_and_wait(
      `맥퀸 씨와 테이오 씨는 이미 「명문 ${daiya.get_uma_sex_title()}」로서 각지에서 활약하고 계시는 분들이니까요.`,
    );
    await daiya.say_and_wait(
      `두 분을 보며 저도 「명문 ${daiya.get_uma_sex_title()}」가 갖춰야 할 자세에 대해 배우고 싶어요.`,
    );
    await daiya.say_and_wait(
      `특히 맥퀸 씨는 메지로 가문의 책임을 짊어지고 계셔서, 저와 처지가 비슷하다는 느낌이 들거든요.`,
    );
    await daiya.say_and_wait(
      `저는 사토노 가문의 대표로서 어떤 「명문 ${daiya.get_uma_sex_title()}」가 되어야 할까요──`,
    );
    era.printButton('「고민이 생기면 언제든 이야기해 주렴」', 1);
    await era.input();
    await era.printAndWait(
      `「G1 레이스에서 승리하는 명문 ${daiya.get_uma_sex_title()}가 되는 것」, ${
        me.name
      }은(는) ${daiya.sex}와 함께 이 꿈을 이루겠다고 약속했었다.`,
    );
    await era.printAndWait(
      `${daiya.sex}의 트레이너로서, 그녀의 장래에 도움이 되는 일이라면 ${me.name}은(는) 무엇이든 도울 준비가 되어 있다.`,
    );
    await daiya.say_and_wait('헤헤헤, 그때가 되면 잘 부탁드릴게요♪');
    await daiya.say_and_wait('……만약 제가 맥퀸 씨를 이길 수 있다면──');
    await era.printAndWait(
      `「명문 ${daiya.get_uma_sex_title()}」인 메지로 맥퀸을 이긴다는 것은, 실질적으로 실력이 그 수준에 도달했음을 의미한다.`,
    );
    await era.printAndWait(
      `사토노 가문의 숙원 달성도 머지않았다── ${me.name}은(는) 그녀가 차마 끝맺지 못한 말을 짐작하며 다시 한번 자신의 중책을 실감했다.`,
    );
    await era.printAndWait([
      '우선은 ',
      race_infos[race_enum.kyot_dai].get_colored_name(),
      '다. 전초전에서 실수해선 안 된다.',
    ]);
  };

  handlers[race_enum.takz_kin] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('그림자', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait('…키타짱…');
    await kita.say_and_wait('………………으윽.');
    await era.printAndWait(
      '관중A 「이봐, 키타산 어떻게 된 거야… 오늘 컨디션이 별로인가…?」',
    );
    await era.printAndWait(
      '관중B 「마지막에 평소처럼 버티질 못하네. 키타산이라면 더 잘할 수 있었을 텐데…」',
    );
    await era.printAndWait(
      '관중C 「고개 숙이고 있는 건 너답지 않다고! 평소의 기세는 어디 간 거야, 키타산!!」',
    );
    await takz_kin_common(daiya, me, kita, true);
  };

  handlers[race_enum.kyot_dai] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('결과', daiya);
    const mcqueen = get_chara_talk(13);
    await say_by_passer_by_and_wait('실황', '사토노 다이아몬드, 선두로 골인!');
    await say_by_passer_by_and_wait('관중', '와아아아아아아아!');
    await say_by_passer_by_and_wait(
      '관중C',
      `「뭐야, 상태 전혀 나쁘지 않잖아!」`,
    );
    await say_by_passer_by_and_wait(
      '관중A',
      `「정말 잘 달렸어!! 다이아몬드가 달릴 때, 오로지 앞만 바라보며 가속하는 그 모습…」`,
    );
    await say_by_passer_by_and_wait(
      '관중A',
      '「그 어떤 것에도 영향받지 않고 흔들리지 않는 자태. 정말 좋아해…」',
    );
    await mcqueen.say_and_wait('…후후, 당연한 결과군요.');
    await mcqueen.say_and_wait('여기서 무너진다면 저의 상대가 될 수 없을 테니까요.');
    await daiya.say_and_wait('…네!');
    await daiya.say_and_wait('이것이 저의 주법이에요…!');
    await daiya.say_and_wait('트레이너 선생님, 드디어 저만의 리듬으로 아주 편안하게 달릴 수 있게 되었어요!');
    era.printButton('「확실히 그렇게 보이네!」', 1);
    await era.input();
    await daiya.say_and_wait(
      '트레이너 선생님께서도 그렇게 느끼신다면 정말 안심해도 되겠네요!',
    );
    era.printButton('「발걸음에 힘이 실렸어」', 1);
    await era.input();
    await era.printAndWait(
      `아직 완벽하게 강렬하다고는 할 수 없지만, ${me.name}은(는) 그녀의 보폭에서 느껴지는 힘과 안정감을 사실대로 말해주었다.`,
    );
    await daiya.say_and_wait('정말인가요…? 저는 그저 평소처럼 자연스럽게 달렸을 뿐인데…');
    era.printButton('「그 주법이 이미 네 몸에 익은 모양이야」', 1);
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) ${daiya.sex}가 자신만의 주행 방식을 되찾았기에, 이전까지의 트레이닝 성과가 함께 나타나고 있는 것이라 생각했다.`,
    );
    await daiya.say_and_wait(
      '다행이에요…! 그럼 이제 안심하고 보폭의 위력을 키우는 연습을 계속해도 된다는 뜻이겠죠…!',
    );
    await daiya.say_and_wait('제가 해외 레이스를 향해 나아갈 기회가 생겼다는 뜻이기도 하고요…');
    era.printButton('「함께 너에게 맞는 방식을 찾아보자」', 1);
    await era.input();
    await era.printAndWait(
      `앞으로의 트레이닝이 다시 주법에 영향을 줄 수도 있겠지만, 지금의 ${daiya.sex}라면 문제없을 것이다.`,
    );
    await era.printAndWait(
      `자신이 달리는 이유를 깨달은 ${daiya.sex}라면, 분명 자신에게 가장 적합한 성장 방법을 찾아낼 수 있을 것이다.`,
    );
    await daiya.say_and_wait('네, 걱정 마세요. 더 이상 망설이지 않을게요.');
    await daiya.say_and_wait('오직 제 꿈을 위해서만 앞을 향해 나아갈 거예요!');
    era.printButton('「『텐노상(가을)』 때도 이 기세를 유지하자!」', 1);
    await era.input();
    await daiya.say_and_wait('네! 드디어 맥퀸 씨와 함께…! 그리고 키타짱과도요!!');
    await daiya.say_and_wait('제가 그토록 꿈꿔오던 무대가 드디어…!');
    await daiya.say_and_wait(
      `그리고 거기서 이기기만 하면, 제가 「명문 ${daiya.get_uma_sex_title()}」의 실력을 갖췄다는 걸 증명할 수 있을 거예요.`,
    );
    await daiya.say_and_wait(
      '동경하는 사람과 오랜 라이벌… 그들과 승부할 수 있는 이 기회──',
    );
    await daiya.say_and_wait('모든 것을 걸고 도전할 각오로 임하겠어요!!');
  };

  handlers[race_enum.tenn_sho] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('도달', daiya);
    const kita = get_chara_talk(68);
    const mcqueen = get_chara_talk(13);
    const teio = get_chara_talk(3);
    await daiya.say_and_wait(
      '최악의 노면 상태 따윈 상관없어!! 오직 나만의 주행으로 결승선을 향해 나아갈 뿐!',
      true,
    );
    await daiya.say_and_wait('하아아아아아아아아아아아!!');
    await say_by_passer_by_and_wait(
      '실황',
      '1위는 사토노 다이아몬드────!! 최고급 다이아몬드에 흐림은 없었습니다! 순수하고 무구한 광채를 뿜어냅니다!',
    );
    await say_by_passer_by_and_wait('관중', '（와아아아아아아아아아!）');
    await say_by_passer_by_and_wait(
      '관중B',
      '정말 전율이 돋는 퍼포먼스야, 사토노 다이아몬드!! 설마 맥퀸을 이길 줄이야! 흠잡을 데 없는 실력이야!」',
    );
    await say_by_passer_by_and_wait(
      '관중A',
      '온몸이 진흙투성이가 되어도 늠름하고 확고한 모습… 그 자태가 너무나 아름다워…」',
    );
    await kita.say_and_wait('으아아아아아아아아!! 분해, 분해, 분해!!');
    await kita.say_and_wait('내 컨디션도 정말 완벽했는데!');
    await kita.say_and_wait('…하지만 이건 그만큼 다이아짱이 대단했다는 뜻이겠지.');
    await kita.say_and_wait('나도 더 정진해야겠어!');
    await daiya.say_and_wait('응, 나도 키타짱에게 추월당하지 않도록 노력할게.');
    await mcqueen.say_and_wait('사토노 씨, 아주 멋진 달리기였습니다.');
    await daiya.say_and_wait('맥퀸 씨! 감사해요, 하지만──');
    await mcqueen.say_and_wait('무슨 일인가요?');
    await daiya.say_and_wait(
      '거리에 있어서 제가 유리했을 뿐, 장거리 전문인 맥퀸 씨에게는 좀 더 긴 거리의 레이스가 본 실력을 발휘하기 좋으셨을 텐데 말이죠.',
    );
    await mcqueen.say_and_wait([
      '그렇네요. 하지만 이 ',
      race_infos[race_enum.tenn_sho].get_colored_name(),
      '을 고른 건 저 자신입니다.',
    ]);
    await daiya.say_and_wait('저, 저기! 기회가 된다면 꼭 장거리 레이스에서도 함께 달리고 싶어요!!');
    await daiya.say_and_wait('장거리 레이스에서도 맥퀸 씨를 이겨보고 싶어요…!');
    await mcqueen.say_and_wait('…!');
    await teio.say_as_unknown_and_wait('정말 대단한 마음가짐인걸, 다이아짱!');
    await daiya.say_and_wait('테이오 씨!');
    await teio.say_and_wait('그럼 이렇게 하는 건 어때?');
    await teio.say_and_wait('우리 다 같이 한 레이스에서 뛰는 거야!!');
    await daiya.say_and_wait('…! 저, 저도 좋아요! 부디 그런 기회를 주세요!!');
    await mcqueen.say_and_wait('정말이지… 테이오 씨 당신이 사토노 씨와 대결하고 싶은 거 아닌가요?');
    await teio.say_and_wait('헤헤♪ 들켰나.');
    await mcqueen.say_and_wait([
      '──',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '!',
    ]);
    await mcqueen.say_and_wait([
      '모두가 괜찮다면, 우리 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에서 다시 승부하도록 하죠!',
    ]);
    await teio.say_and_wait('나도 나갈 거야! 팬 투표, 다들 잘 부탁해!');
    await say_by_passer_by_and_wait(
      '관중B',
      '정말이야!? 나 무조건 투표할게! 테이오, 맥퀸!!',
    );
    await daiya.say_and_wait('맥퀸 씨…! 고맙습니다!!');
    await daiya.say_and_wait('저, 『아리마 기념』에 꼭 나갈게요!!');
    await kita.say_and_wait('저도요!! 그때까지 잘 부탁해요!!');
    await say_by_passer_by_and_wait('관중', '우오오오오오오오오오오!!');
    await era.printAndWait([
      '현장의 관중 6만 명의 함성이 스탠드를 뒤흔든다. 분명 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '은 세기의 드림 매치가 될 것이다.',
    ]);
    await era.printAndWait([
      '후추 경기장의 뜨거운 환호성 앞에서, 이제 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에 나가지 않는다는 선택지는 존재하지 않았다.',
    ]);
    await daiya.say_and_wait('──저기, 맥퀸 씨!');
    await daiya.say_and_wait('한 가지 여쭤봐도 될까요?');
    await mcqueen.say_and_wait('무엇이죠?');
    await daiya.say_and_wait('맥퀸 씨는… 어째서 저희와 함께 레이스를 하겠다고 해주신 건가요?');
    await mcqueen.say_and_wait(
      `…두 분의 레이스가 제 투지를 불태웠기 때문입니다. 그리고 메지로 가문의 ${daiya.get_uma_sex_title()}로서 마땅히 해야 할 선택이라 생각했고요.`,
    );
    await daiya.say_and_wait(`메지로 가문의 ${daiya.get_uma_sex_title()}로서…`);
    await mcqueen.say_and_wait('사토노 양이 알고 싶은 건 지금 저의 처지와 심경이겠죠?');
    await daiya.say_and_wait(
      `네. 맥퀸 씨는 사토노 가문이 바라는 「명문 ${daiya.get_uma_sex_title()}」의 모습 그 자체이며, 그 모습으로 활약하고 계시니까요.`,
    );
    await daiya.say_and_wait(
      `그래서 이번에 맥퀸 씨가 저희와 함께 달려주시는 것이 「명문 ${daiya.get_uma_sex_title()}」로서의 어떤 고려 끝에 나온 결론인지 궁금했어요.`,
    );
    await mcqueen.say_and_wait('네, 바로 그렇습니다.');
    await mcqueen.say_and_wait(
      `──압도적인 실력으로 메지로의 이름을 세상에 널리 알리는 것, 그것이 제가 스스로에게 부여한 과제입니다.`,
    );
    await mcqueen.say_and_wait(
      `따라서 저와 메지로 가문이 중요하게 여기는 『텐노상(봄)』에서… 강력한 라이벌이 나타난다면 기꺼이 맞서 싸워야 하죠.`,
    );
    await mcqueen.say_and_wait(
      `그뿐만이 아닙니다. 이미 트윙클 시리즈에서 좋은 성적을 거둔 자들뿐만 아니라──`,
    );
    await mcqueen.say_and_wait(
      `당신들처럼 새롭게 떠오르는 신세대들의 도전도 받아들이고, 압도적인 실력으로 이겨내야만 합니다.`,
    );
    await mcqueen.say_and_wait('그런 방식으로── 메지로의 명성을 영원히 시들지 않게 하는 것.');
    await mcqueen.say_and_wait('그것이 지금 저의 처지이자 심경입니다.');
    await daiya.say_and_wait('메지로 가문이 계속해서 실력으로 자부심을 가질 수 있도록…');
    await mcqueen.say_and_wait('…하지만 사토노 가문과 메지로 가문의 입장은 다릅니다.');
    await mcqueen.say_and_wait(
      `사토노 가문의 역사는 말하자면 사토노 양, 당신부터 시작되는 것이니까요.`,
    );
    await mcqueen.say_and_wait('그러니 당신에게는 저와는 다른 길이 있을 겁니다.');
    await daiya.say_and_wait('…사토노 가문의 역사는 저부터 시작된다…');
    await daiya.say_and_wait('…………');
    await daiya.say_and_wait('고맙습니다, 맥퀸 씨. 깊이 생각해보겠어요.');
    await mcqueen.say_and_wait('네, 충분히 고민해 보세요.');
    await mcqueen.say_and_wait('사토노 양의 앞날에 광채가 가득하길 빌죠. 그럼 실례.');
    await daiya.say_and_wait('…역시 맥퀸 씨는 정말 대단한 분이에요!');
    await daiya.say_and_wait(
      `${
        mcqueen.sex
      }가 가진 「명문 ${daiya.get_uma_sex_title()}」로서의 확고한 정의와 목표… 정말 존경스러워요…!`,
    );
    era.printButton('「참고가 되어서 다행이구나」', 1);
    await era.input();
    await daiya.say_and_wait(
      '네! 맥퀸 씨의 말씀대로 제가 어떻게 해야 할지 곰곰이 생각해볼게요…',
    );
    await daiya.say_and_wait(
      '할 수 있다면 『아리마 기념』 때까지는 저만의 답을 찾아내서 그녀에게 들려주고 싶어요!',
    );
    await era.printAndWait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      `──사토노 다이아몬드가 「명문 ${daiya.get_uma_sex_title()}」가 되고자 하는 꿈의 해답을, 어쩌면 그곳에서 찾을 수 있을지도 모른다.`,
    ]);
  };

  handlers[race_enum.japa_cup] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('도전', daiya);
    const kita = get_chara_talk(68);
    const teio = get_chara_talk(3);
    await say_by_passer_by_and_wait('실황', '지금 선두로 도착! 1위는──');
    await say_by_passer_by_and_wait('관중', '와아아아아아아아!');
    await daiya.say_and_wait('하아, 하아…');
    await teio.say_and_wait(
      '설마 이런 실력을 갖추고 있었을 줄이야…! 정말 잘했어, 다이아짱.',
    );
    await daiya.say_and_wait('감사합니다!');
    await teio.say_and_wait('키타신도, 이미 내 예상을 뛰어넘을 만큼 강해졌는걸!');
    await kita.say_and_wait([
      '정말요!? 하지만 전 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에서 오늘보다 훨씬 더 멋진 모습을 보여드릴 거예요!',
    ]);
    await daiya.say_and_wait('저도 현재에 안주하지 않겠어요.');
    await daiya.say_and_wait(
      '이제야 저도 저보다 한발 앞서 나갔던 키타짱, 맥퀸 씨, 그리고 테이오 씨와 같은 선상에 섰다는 기분이 들어요.',
    );
    await teio.say_and_wait('──좋은걸. 키타짱도 다이아짱도 최고야.');
    await teio.say_and_wait('우리를 이기겠다는 결의에 찬 그 눈빛, 정말 멋져.');
    await teio.say_and_wait('나도 모르게 예전의 내 모습이 떠오르네.');
    await daiya.say_and_wait('예전의… 테이오 씨 말인가요?');
    await teio.say_and_wait(
      '응, 나도 예전에는 그렇게 회장을 동경하며… 언젠가 반드시 회장을 넘어서겠다고 생각하며 트윙클 시리즈에서 달렸거든.',
    );
    await teio.say_and_wait('그리고 드디어 회장과 직접 맞붙게 되었을 때──');
    await teio.say_and_wait(
      '동경하던 대상이 순식간에 라이벌이 되었지. 그때 반드시 이기고 말겠다고 다짐했어.',
    );
    await teio.say_and_wait(
      '너희 둘도 지금 그때의 나와 같은 마음이겠지, 문득 그런 생각이 들더라고!',
    );
    await teio.say_and_wait('하지만 나도 회장에게 도전하던 그때의 기분은 절대 잊지 않았어.');
    await teio.say_and_wait(
      '너희의 훌륭한 활약을 보니 나도 모르게 몸이 근질근질해지는걸!',
    );
    await teio.say_and_wait(
      '다가올 『아리마 기념』에서는 나도 도전자로서 다이아랑 키타산에게 도전하겠어!',
    );
    await japa_cup_common(daiya, me, kita, teio);
  };
};