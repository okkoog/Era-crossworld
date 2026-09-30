const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');

const event_hooks = require('#/data/event/event-hooks');
const EventObject = require('#/data/event/event-object');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,number,{race:number,rank:number},DaiyaEduMarks):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (
    daiya,
    me,
    edu_weeks,
    extra_flag,
    edu_marks,
  ) => {
    if (edu_weeks >= 48 || extra_flag.rank !== 1) {
      return true;
    }
    await print_event_name('여명', daiya);
    await daiya.say_and_wait('하아, 하아, 하아……');
    await daiya.say_and_wait('…………후우!');
    await say_by_passer_by_and_wait(
      '관중 A',
      '오오~ 사토노 다이아몬드, 제법인데……! 과연 그렇게 높은 평가를 받은 참가자답네!',
    );
    await say_by_passer_by_and_wait(
      '관중 B',
      '데뷔전이라고는 믿기지 않을 정도로 안정감이 있어. 앞날이 기대되는걸!',
    );
    await say_by_passer_by_and_wait(
      '관중 A',
      '이대로 G1까지 이겨줬으면 좋겠어!! 『사토노 가문의 징크스』를 깨뜨리고 말이야……!',
    );
    await daiya.say_and_wait('트레이너 선생님!!');
    await daiya.say_and_wait('저, 드디어 무사히 데뷔했어요!');
    era.printButton('「그래, 축하해」', 1);
    await era.input();
    await daiya.say_and_wait('레이스를 마치고 나니 이제야 실감이 나요.');
    await daiya.say_and_wait(
      '관객분들의 환호성…… 다른 참가자들의 압박감과 거친 숨소리. 피부로 직접 느껴지는 이 긴장감……',
    );
    await daiya.say_and_wait(
      '지금껏 경험해 본 적 없는 분위기였어요. 이것이 바로 진짜 레이스군요……!',
    );
    await daiya.say_and_wait('맥퀸 씨와 키타짱도 이런 분위기 속에서 달렸던 거겠죠……');
    await daiya.say_and_wait('저도 드디어 그녀들과 같은 무대에 서게 되었어요……!');
    await era.printAndWait(
      `사토노 다이아몬드는 꽤나 흥분한 모습이다. 이번 데뷔전이 ${daiya.sex}에게 얼마나 깊은 감회를 주었는지 알 수 있었다.`,
    );
    await daiya.say_and_wait(
      '……저는 이 발로 계속해서 달려나가 승리하고, 또 승리할 거예요. 반드시 사토노 가문의 숙원을 이루겠어요!',
    );
    await era.printAndWait(
      `${me.get_couple_title()}은 흩어지는 관중들과 함께 경기장에서 역을 향해 천천히 걸어갔다.`,
    );
    await say_by_passer_by_and_wait(
      '관중 C',
      `방금 그 사토노 다이아몬드라는 ${daiya.get_uma_sex_title()}, 달리는 모습 정말 아름답지 않았어? 그 유명한 『5억 점의 대결』 주인공 말이야!`,
    );
    await say_by_passer_by_and_wait(
      '관중 A',
      `마지막 라스트 스퍼트, 정말 대단하더라!`,
    );
    await say_by_passer_by_and_wait('관중 C', [
      '머지않아 G1에도 나가겠지? 왠지 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '도 충분히 승산이 있을 것 같아!',
    ]);
    await era.printAndWait(
      `관중 B「……응? 그런데 사토노 그룹에서 G1 우승을 한 ${daiya.get_uma_sex_title()}가 있었나……?」`,
    );
    await era.printAndWait(
      `관중 A「한 번도 없었지. 예전부터 사토노 가문의 ${daiya.get_uma_sex_title()}들이 꽤 많이 도전했지만, G1만큼은 아무도 못 이겼거든.」`,
    );
    await era.printAndWait(
      `관중 A「그래서 잡지 같은 데서도 『아직 G1 우승이 없는 사토노 가문의 징크스』 같은 제목을 쓰곤 하잖아……」`,
    );
    await era.printAndWait(
      '관중 C「아, 그런 소문이 있었구나. 그럼 징크스 때문에 못 이기는 거야?」',
    );
    await era.printAndWait(
      `관중 A「그렇지. 사토노 다이아몬드는 사토노 가문에서 오랜만에 나온 기대주니까, 이번에야말로 G1에서 이겨줬으면 좋겠네.」`,
    );
    await era.printAndWait(
      `${me.name}은(는) 앞에서 걷는 사람들의 대화를 들으며 슬쩍 사토노 다이아몬드를 쳐다보았다.`,
    );
    await daiya.say_and_wait('후훗, 제가 반드시 그 징크스를 깨뜨리겠어요!');
    await era.printAndWait(
      `사토노 다이아몬드는 밝은 미소를 지으며 ${me.name}을(를) 향해 기운차게 파이팅 포즈를 취해 보였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 마음가짐이 단단하고 확고한 ${daiya.sex}라면, 분명 그런 소문과 징크스 따위는 떨쳐낼 수 있으리라 생각했다.`,
    );
    edu_marks.after_begin = 1;
    add_event(event_hooks.week_start, new EventObject(67, cb_enum.edu));
  };

  handlers[race_enum.sats_sho] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('액운', daiya);
    await say_by_passer_by_and_wait('해설', '참가자들, 제4코너를 돌아 직선 주로에 진입합니다!');
    await daiya.say_and_wait('──지금이야! 여기서부터……!', true);
    await daiya.say_and_wait('어라……?');
    await daiya.say_and_wait(
      '다리가…… 무거워……! 여기서부터 가속해야 하는데……!!',
      true,
    );
    await daiya.say_and_wait('으으으으윽……!');
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        '해설「결승선 통과! 1위는 사토노 다이아몬드!! 다이아몬드가 폭풍우 뒤의 햇살 속에서 눈부시게 빛납니다!」',
      );
      await say_by_passer_by_and_wait('관중', '와아아아아아아아아!');
      await daiya.say_and_wait('하아, 하아…… 하아, 하아……');
      await say_by_passer_by_and_wait(
        '관중 A',
        '대단해, 사토노 다이아몬드!! 앞으로도 계속 성장할 것 같네, 정말 기대된다!',
      );
      await say_by_passer_by_and_wait(
        '관중 B',
        '마지막엔 조금 힘겨워 보였지만 잘 버텨냈어!',
      );
      era.printButton('（아니야……）', 1);
    } else {
      await era.printAndWait(
        '해설「……모두의 기대를 모았던 사토노 다이아몬드, 『사츠키상』의 영광을 놓치고 맙니다!!」',
      );
      await daiya.say_and_wait('하아, 하아…… 하아, 하아……');
      await era.printAndWait(
        '관중 A「아~ 아쉽네. 사토노 다이아몬드가 기대만큼 활약하지 못했어.」',
      );
      await era.printAndWait(
        '관중 B「마지막에 너무 지쳐 보이더라고. 이래서야 장거리는 무리 아닐까……?」',
      );
      era.printButton('（방금 건 다이아의 최상의 컨디션이 아니었어……）', 1);
    }
    await era.input();
    await era.printAndWait(
      `${me.name}은(는) 레이스 도중 ${daiya.sex}의 모습에서 위화감을 느꼈다. 종반에 접어들었을 때, 사토노 다이아몬드는 눈에 띄게 피로한 기색을 보였다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 생각했다. 경기 전, 경기장까지 직접 달려와야 했던 상황이 ${daiya.sex}의 체력을 크게 소모시킨 것이 아닐까 하고……?`,
    );
    await era.printAndWait(
      '그때는 뛰지 않았다면 레이스 시간에 맞출 수 없었을 것이다. 어쩔 수 없는 상황이었다고는 해도……',
    );
    await daiya.say_and_wait(
      '……겨우 2000m를 달린 것뿐인데 한계가 느껴지다니…… 이런 실력으로는 1위를 할 수 없어요……',
      true,
    );
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait(
        '사실 마지막 직선에서 정말 힘들었어요…… 라스트 스퍼트의 실력을 전혀 발휘하지 못했죠……',
        true,
      );
      await daiya.say_and_wait('이건…… 제가 예상했던 모습과는 너무나도 거리가 멀어요……', true);
      await daiya.say_and_wait(
        `가장 빠른 ${daiya.get_uma_sex_title()}가 승리한다는『사츠키상』에서, 승자인 제가 이런 모습을 보이다니……!`,
        true,
      );
      await daiya.say_and_wait(
        `명문 ${daiya.get_uma_sex_title()}가 되기엔 전 아직 한참 부족해요!`,
        true,
      );
    } else {
      await daiya.say_and_wait('하지만, 제 실력이 조금만 더 뛰어났더라면……!', true);
    }
    await daiya.say_and_wait('으으……!');
    era.printButton('다이아……!', 1);
    await era.input();
    await daiya.say_and_wait('……트레이너 선생님……');
    era.printButton('「경기장까지 뛰게 해서 정말 미안해」', 1);
    await era.input();
    await daiya.say_and_wait('앗!? 트레이너 선생님이 사과하실 일이 아니에요!');
    await daiya.say_and_wait('그 상황에선 저도 내려서 뛰는 게 최선이라고 생각했는걸요!');
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait(
        '……하지만…… 하필 오늘 날씨가 좋지 않았던 탓에 100% 실력을 내지 못했어요……',
      );
      await daiya.say_and_wait('이것도 사토노 가문 징크스의 영향일까요……?');
      await daiya.say_and_wait('하지만, 만약 정말로 징크스의 영향이라면──');
      await daiya.say_and_wait('제가 직접 깨부숴 보이겠어요!');
      await daiya.say_and_wait([
        '다음 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        '에서 징크스를 이겨내겠어요! 완벽한 실력을 발휘해서 모두에게 승리를 보여드릴게요!!',
      ]);
    } else {
      await daiya.say_and_wait(
        '……하지만…… 하필 오늘 날씨가 좋지 않았던 탓에 실력을 다 발휘하지 못했고, 결국 지고 말았네요……',
      );
      await daiya.say_and_wait(
        `『사토노 가문의 ${daiya.get_uma_sex_title()}는 G1에서 이길 수 없다』는 이 징크스에 저마저도……`,
      );
      era.printButton('「다이아……」', 1);
      await era.input();
      await daiya.say_and_wait('하지만 다음엔 절대 지지 않겠어요!');
      await daiya.say_and_wait('전 반드시 징크스를 깨뜨릴 거예요!!');
      await daiya.say_and_wait([
        '다음 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        '! 반드시 징크스를 이겨내고 승리하는 모습을 보여드리겠어요!!',
      ]);
    }
    await era.printAndWait(
      `사토노 다이아몬드는 강하게 선언했다. 운 나쁜 경험들이 오히려 ${daiya.sex}의 가슴 속에 징크스를 이겨내겠다는 결의를 불태우게 했다.`,
    );
  };

  handlers[race_enum.toky_yus] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('수치', daiya);
    await daiya.say_and_wait('……괜찮아요! 신발도 이미 갈아신었고요!', true);
    await daiya.say_and_wait(
      '예비용 신발에도 미리 편자를 박아뒀어요! ……보세요, 신었을 때 느낌도 아주 정상이에요.',
      true,
    );
    await daiya.say_and_wait('……걱정할 필요 같은 건……', true);
    await daiya.say_and_wait('전혀 없으니까요!!', true);
    await daiya.say_and_wait('아아아아아아아아아아!!');
    await era.printAndWait(
      '무언가를 떨쳐내려는 듯한…… 진심 어린 포효. 사토노 다이아몬드는 놀라운 기세로 잔디 위를 질주했다.',
    );
    if (extra_flag.rank === 1) {
      await say_by_passer_by_and_wait(
        '해설',
        `선두는…… 사토노 다이아몬드──! 올해의 더비 ${daiya.get_uma_sex_title()}는 사토노 다이아몬드입니다!`,
      );
      await say_by_passer_by_and_wait('관중', '와아아아아아아아!');
      await say_by_passer_by_and_wait(
        '관중 A',
        '사토노 다이아몬드가 1위야!! 정말 엄청난 뒷심이네!',
      );
      await say_by_passer_by_and_wait(
        '관중 B',
        '지구력에도 아직 여유가 있어 보여. 『국화상』도 문제없겠는걸!',
      );
    } else {
      await say_by_passer_by_and_wait(
        '해설',
        `……사토노 다이아몬드, 해내지 못했습니다! 더비 ${daiya.get_uma_sex_title()}의 꿈이 ${
          daiya.sex
        }에게서 멀어집니다──!!`,
      );
    }
    await daiya.say_and_wait('하아, 하아……');
    await daiya.say_and_wait(
      '신발은…… 아무런 문제가 없었는데, 전 계속 신발 신경만 쓰고 있었어요……',
      true,
    );
    await daiya.say_and_wait('정말 한심한 모습이에요……!!', true);
    if (extra_flag.rank === 1) {
      const reporter = get_chara_talk(303);
      await reporter.say_and_wait(
        `사토노 다이아몬드 씨, 축하드립니다! 더비 ${daiya.get_uma_sex_title()}가 된 소감 한 말씀 부탁드릴까요?`,
      );
      await daiya.say_and_wait(
        `……감사합니다. ${daiya.get_uma_sex_title()}의 역사에 제 이름을 남길 수 있게 되어 영광입니다.`,
      );
      await daiya.say_and_wait(
        '『일본 더비』에서 우승한 것은 사토노 가문에게도 더할 나위 없는 영광이에요.',
      );
      await reporter.say_and_wait('사토노 그룹의 모든 분이 정말 기뻐하시겠네요!');
      await daiya.say_and_wait(
        '네, 물론이죠. 하지만 다들 제게 자만하지 말라고 따끔하게 충고해 주실 것 같아요.',
      );
      await reporter.say_and_wait(
        `아하하! 하지만 그런 엄격한 상향심이 있었기에 사토노 다이아몬드 씨가 이렇게 강해질 수 있었던 거겠죠!`,
      );
      await daiya.say_and_wait('네, 그룹의 어른들은 항상 제게 더 높은 곳을 향하라고 독려해 주시니까요.');
      await daiya.say_and_wait(
        '그러니 다음번에는 오늘보다 더 훌륭한 모습을 보여드릴 수 있도록 노력할게요!',
      );
      await era.printAndWait('관중 A「오오, 기대하고 있을게──!」');
      await daiya.say_and_wait('네! 반드시요!!');
      await say_by_passer_by_and_wait('관중', '와아아아아아아아……');
      await daiya.say_and_wait('……후우……');
      await era.printAndWait(
        '지하 통로로 들어서자 사토노 다이아몬드의 긴장했던 기색이 누그러졌다. 길게 한숨을 내쉰 후, 평소의 표정으로 돌아왔다.',
      );
      await daiya.say_and_wait('……가요.');
      era.drawLine();
      await era.printAndWait(
        `대기실로 돌아왔을 때, ${daiya.sex}의 표정에는 어딘가 불만족스러운 기색이 역력했다.`,
      );
      era.printButton(
        `「축하해, 오늘부터 네가 더비 ${daiya.get_uma_sex_title()}야」`,
        1,
      );
      await era.input();
      await daiya.say_and_wait('고맙습니다. 하지만……');
      await daiya.say_and_wait(
        `더비 ${daiya.get_uma_sex_title()}의 타이틀을 다투는 레이스에서…… 그런 한심한 모습을 보이다니, 제 자신이 너무나 실망스러워요……`,
      );
      era.printButton('「무슨 일 있었어?」', 1);
      await era.input();
      await daiya.say_and_wait('저…… 레이스 도중에도 계속 신발 상태가 신경 쓰여서 집중하지 못했어요.');
    } else {
      era.drawLine();
      await era.printAndWait('대기실로 돌아온 후, 사토노 다이아몬드는 줄곧 침묵을 지켰다.');
      era.printButton('「우승하지 못한 건 아쉽지만……」', 1);
      await era.input();
      await daiya.say_and_wait('……아니요, 트레이너 선생님. 진 것은 제가 부족했기 때문이에요.');
      era.printButton('「부족했다니?」', 1);
      await era.input();
      await daiya.say_and_wait('네. 레이스 내내 신발 상태가 신경 쓰여서 견딜 수가 없었거든요.');
    }
    await daiya.say_and_wait(
      '분명 아무런 이상이 없었고, 저도 직접 몇 번이나 확인해서 문제가 없다는 걸 알고 있었는데도요!',
    );
    await daiya.say_and_wait('……그 순간의 저는…… 징크스를 너무나 두려워하고 있었던 거예요……');
    if (extra_flag.rank === 1) {
      await daiya.say_and_wait(`징크스 때문에 정신이 팔려서 최상의 상태로 달리지 못했어요!`);
      await daiya.say_and_wait('그런 제 자신을 용서할 수 없어요!!');
    } else {
      await daiya.say_and_wait(
        '징크스에 한눈을 파느라 최선을 다하지 못했고, 그래서 졌어요!',
      );
      await daiya.say_and_wait('정말 창피하고, 스스로가 용납되지 않아요!!');
    }
    await daiya.say_and_wait('절대 징크스 따위에 지지 않겠다고 그렇게 맹세했는데!!');
    await daiya.say_and_wait(
      '……사토노 가문의 꿈을 실현하는 길에 조금의 불안도 남겨두어선 안 돼요!',
    );
    await daiya.say_and_wait(
      '앞으로 더 강력한 징크스가 저를 기다리고 있다면, 제 실력을 그보다 훨씬 더 높게 끌어올리면 될 일이에요!',
    );
    await daiya.say_and_wait(
      '어떤 곤경에도 흔들리지 않는 강인한 실력! 모든 상황에 대처할 수 있는 완벽한 준비!',
    );
    await daiya.say_and_wait(
      '불운이든 징크스든, 압도적인 실력으로 짓눌러 버리겠어요!',
    );
    await era.printAndWait(
      `완전한 승리를 쟁취하겠다는 그녀의 선언에 ${me.name}은(는) 감탄을 금치 못했다.`,
    );
    await daiya.say_and_wait('트레이너 선생님!');
    era.printButton('「훈련 스케줄은 나에게 맡겨줘!」', 1);
    await era.input();
    await daiya.say_and_wait('후훗! 역시 제 트레이너 선생님이시네요♪');
    await daiya.say_and_wait(
      '『국화상』에서는 반드시 모두에게 가장 완벽한 레이스를 보여드리겠어요!',
    );
    era.drawLine();
    await era.printAndWait(
      `경기장에서 돌아오는 길에 ${me.name}은(는) 사토노 다이아몬드에게 카페에 가자고 제안했다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 징크스에 맞서려는 ${daiya.sex}를 격려하기 위해 달콤한 디저트를 사주기로 했다.`,
    );
    await daiya.say_and_wait(
      '정말 뭐든지 시켜도 되나요……? 어디 보자…… 과일 파르페에 치즈 케이크를 추가해도 괜찮을까요……?',
    );
    era.printButton('「물론이지!」', 1);
    await era.input();
    await daiya.say_and_wait(
      '그럼 아이스크림 세 스푼에 초콜릿이랑 젤리도 추가하고, 과일도 곱빼기로……',
    );
    era.printButton('「원하는 만큼 다 추가해!」', 1);
    await era.input();
    await daiya.say_and_wait('후훗, 더 추가하면 그릇에 다 안 담기겠는걸요. 잘 먹을게요, 트레이너 선생님♪');
    await era.printAndWait('──그때, 옆 좌석에서 익숙한 이름이 들려왔다.');
    await say_by_passer_by_and_wait('방금 경기를 관전한 남성 관중 A', [
      '지난번 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      ' 팬 투표 중간 발표 결과 봤어? 1위가 키타산 블랙이래!',
    ]);
    await say_by_passer_by_and_wait(
      '방금 경기를 관전한 남성 관중 B',
      `그럴 줄 알았어! 나도 ${daiya.sex}에게 투표했거든, 정말 기쁘다!`,
    );
    await era.printAndWait([
      '팬 투표로 출주자가 결정되는 ',
      race_infos[race_enum.takz_kin].get_colored_name(),
      '. 중간 발표 결과에서 키타산 블랙이 1위를 차지했다.',
    ]);
    await say_by_passer_by_and_wait('방금 경기를 관전한 남성 관중 A', [
      `${daiya.sex}가 `,
      race_infos[race_enum.tenn_spr].get_colored_name(),
      '에서 보여준 모습은 정말 감동적이었지! 키타산 블랙, 한 번 추월당했는데도 마지막에 다시 역전해서 코 차이로 우승했잖아!!',
    ]);
    await say_by_passer_by_and_wait(
      '방금 경기를 관전한 남성 관중 B',
      `그 경기는 정말 짜릿했어~! 결국 ${daiya.sex}의 끈질긴 의지력이 승리한 거지!!`,
    );
    await say_by_passer_by_and_wait(
      '방금 경기를 관전한 남성 관중 A',
      `${daiya.sex}는 정말 필사적으로 달리는 게 느껴지거든. 그런 흔들림 없는 모습이 사람을 끌어당겨서 응원하게 만드는 것 같아.`,
    );
    await say_by_passer_by_and_wait(
      '방금 경기를 관전한 남성 관중 B',
      `무슨 느낌인지 알아! ${daiya.sex}는 특별히 화려한 점은 없어도, 평범하고 우리랑 가까운 느낌이 들잖아.`,
    );
    await say_by_passer_by_and_wait(
      '방금 경기를 관전한 남성 관중 B',
      `그래서 오히려 ${daiya.sex}가 이겨줬으면 좋겠어! 마치 내가 성공한 것 같은 기분이 들거든!`,
    );
    await daiya.say_and_wait(
      '저도 그렇게 생각해요! 저 두 분, 키타짱의 장점을 정말 잘 알고 계시네요!',
    );
    await daiya.say_and_wait(
      '키타짱…… 새해 참배 때 자신을 응원해 주는 사람을 늘리는 게 목표라고 했는데……',
    );
    await daiya.say_and_wait('벌써 실현했네요.');
    era.printButton('「무려 팬 투표 1위니까 말이야」', 1);
    await era.input();
    await daiya.say_and_wait(
      '맞아요. 게다가 팬분들이 키타짱의 레이스를 정말 즐겁게 이야기하고 계시잖아요.',
    );
    await daiya.say_and_wait(
      '응원해 주는 분들에게 미소를 전해주고 싶다는 목표에도 점점 다가가고 있어요.',
    );
    await daiya.say_and_wait('……저도 그녀에게 질 수는 없겠네요.');
    await daiya.say_and_wait(
      '키타짱과 함께 경쟁하는 라이벌로서, 부끄럽지 않도록 노력해야겠어요……!',
    );
    await daiya.say_and_wait(
      '지금은 키타짱이 저보다 앞서 나가고 있지만, 저도 제 길을 계속 나아가서 반드시 그녀를 따라잡겠어요!',
    );
    era.printButton('「『국화상』은 더더욱 질 수 없겠는걸」', 1);
    await era.input();
    await daiya.say_and_wait(
      '네. 키타짱이 작년에 우승했던 『국화상』, 이 레이스만큼은 절대 놓치지 않을 거예요!',
    );
  };

handlers[race_enum.kiku_sho] = async (daiya, me, edu_weeks, extra_flag) => {
    await print_event_name('극기', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait(
      '이 흐름대로라면…… 이제부터 자리를 선점해야겠어요. 잠시 이 위치에서 버티며……',
      true,
    );
    await era.printAndWait(
      '해설「안쪽에서 파고듭니다! 지금 이 타이밍에 들어갑니다! 뒤에 있던 참가자들도 일제히 달려 나갑니다!」',
    );
    await daiya.say_and_wait('아직이에요. 참아야 해요. 제 페이스대로……', true);
    await daiya.say_and_wait('──지금이에요!!');
    await daiya.say_and_wait('하아아아아아아아아아아!!');
    await era.printAndWait(
      '해설「왔습니다──!! 사토노 다이아몬드! 날카로운 라스트 스퍼트 능력을 발휘합니다──!」',
    );
    if (extra_flag.rank === 1) {
      await era.printAndWait(
        `해설「1위는 사토노 다이아몬드!! ${daiya.sex}가 다이아몬드처럼 견고한 실력으로 모든 장애물을 부수고 들어왔습니다──!」`,
      );
      await say_by_passer_by_and_wait('관중', '와아아아아아아아아!');
      await kita.say_and_wait('좋았어! 해냈구나, 해냈어, 해냈어──────!!');
      await kita.say_and_wait('다이아짱! 네가 해냈어, 다이아짱!!');
      await say_by_passer_by_and_wait(
        '관중 A',
        '대단해…… 소름 돋았어……! 사토노 다이아몬드, 정말 강하잖아!!',
      );
      await say_by_passer_by_and_wait('관중 B', [
        `하하, 저게 바로 ${daiya.sex}의 진짜 실력이었구나! 저 정도니까 `,
        race_infos[race_enum.sats_sho].get_colored_name(),
        '이랑 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 때 자기 결과에 만족 못 한다고 했던 거네!',
      ]);
      await kita.say_and_wait('……다이아짱은 역시 대단해!');
    } else {
      await era.printAndWait(
        '해설「사토노 다이아몬드, 아쉽게 1위는 놓쳤습니다만 최고급 다이아몬드다운 멋진 레이스를 보여주었습니다!!」',
      );
      await say_by_passer_by_and_wait('관중', '짝짝짝짝짝!');
      await kita.say_and_wait('대단해…… 다이아짱이 나도 모르는 사이에 이렇게나 성장하다니……!');
      await kita.say_and_wait('헤헤헤! 얼른 같이 레이스 하고 싶어!');
      await say_by_passer_by_and_wait(
        '관중 A',
        '나…… 방금 소름 돋았어…… 사토노 다이아몬드의 레이스, 정말 훌륭했어.',
      );
      await say_by_passer_by_and_wait('관중 B', [
        race_infos[race_enum.sats_sho].get_colored_name(),
        '이나 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 때와는 완전히 딴판이야! 이게 바로 사토노 다이아몬드의 본모습이었나……!',
      ]);
      await say_by_passer_by_and_wait(
        '관중 A',
        `${daiya.sex}의 다음 레이스가 벌써 기다려지는데!`,
      );
    }
    await daiya.say_and_wait('하아…… 하아……');
    await daiya.say_and_wait('다리가…… 정말 가벼워요………… 설마 이 정도로……', true);
    await daiya.say_and_wait('저……', true);
    await daiya.say_and_wait('저………… 윽!', true);
    await daiya.say_and_wait('트레이너 선생님……!');
    if (extra_flag.rank === 1) {
      era.printButton('「1위 축하해! 정말 멋진 모습이었어!」', 1);
      await era.input();
      await daiya.say_and_wait('네……! 감사합니다!!');
    } else {
      era.printButton('「정말 잘해줬어!」', 1);
      await era.input();
      await daiya.say_and_wait('네……!');
    }
    await daiya.say_and_wait(
      '저기, 오늘은 다리가 정말 가벼웠어요! 레이스를 마쳤는데도 전혀 피곤하지 않아요!!',
    );
    await daiya.say_and_wait('제 스스로도 정말 만족스러운 레이스를 했어요!!');
    await daiya.say_and_wait('마치 발을 묶고 있던 족쇄가 풀린 기분이에요……!');
    await daiya.say_and_wait('……몸도………… 마음도…… 정말 가뿐해요……!');
    era.printButton('「아무래도 징크스를 『극복』한 모양이구나」', 1);
    await era.input();
    await daiya.say_and_wait('……!');
    await daiya.say_and_wait('…………흑………… 흐으……');
    await era.printAndWait('사토노 다이아몬드의 눈에서 눈물방울이 한 방울씩 떨어지기 시작했다. 그리고──');
    await daiya.say_and_wait('으아아아아아앙……!!');
    await era.printAndWait('지하 통로에 울음소리가 가득 울려 퍼졌다.');
    await era.printAndWait(
      `${daiya.sex}가 태어나기도 전부터 계속되어 온 사토노 가문의 징크스에 대한 소문. 그동안 ${daiya.sex}의 어깨를 짓눌러 왔을 짐이 얼마나 무거웠을지 짐작조차 할 수 없었다.`,
    );
    await era.printAndWait(
      `징크스 따위에 지지 않겠다고 항상 당당하게 선언해 온 것은, 어쩌면 ${daiya.sex} 나름대로 스스로를 채찍질하던 방식이었을지도 모른다.`,
    );
    await era.printAndWait(`${daiya.sex}는 드디어 그 구속에서 해방되었다.`);
    await daiya.say_and_wait('……헤헤헤…… 흐윽…… 죄송해요……');
    await daiya.say_and_wait(
      '……정말 맥퀸 씨가 말했던 대로예요. 전 지금까지 징크스를 너무 의식한 나머지…… 스스로 한계를 정해버렸던 거군요.',
    );
    await daiya.say_and_wait('하지만 이제 괜찮아요. 더 이상 휘둘리지 않을 거예요!');
    await daiya.say_and_wait(
      '앞으로도 오늘처럼 저만의 페이스로 다른 G1 레이스에서도 승리해 나가겠어요!',
    );
    await kita.say_and_wait('그렇게 쉽게 내버려 두진 않을걸!');
    await daiya.say_and_wait('키타짱!');
    if (extra_flag.rank === 1) {
      await kita.say_and_wait('『국화상』 1위 축하해, 다이아짱!');
      await daiya.say_and_wait(
        '고마워! 작년에 키타짱이 이겼던 레이스에서…… 나도 이겼어! 그러니까 지금은 자신 있게 말할 수 있어!',
      );
      await daiya.say_and_wait('키타짱! 나와 『아리마 기념』에서 승부를 가리자!');

      await kita.say_and_wait('바라던 바야!!');
      await daiya.say_and_wait('괜찮겠죠? 트레이너 선생님?');
      era.printButton('「물론이지!」', 1);
      await era.input();
    } else {
      await kita.say_and_wait('잘했어, 다이아짱!');
      await daiya.say_and_wait('고마워! 내 달리기…… 키타짱의 상대가 될 자격이 생겼을까……?');
      await kita.say_and_wait('──다이아짱.');
      await kita.say_and_wait('나랑 같이 『아리마 기념』에서 결판을 내자!');
      await daiya.say_and_wait('키타짱……!');
      await daiya.say_and_wait('……트레이너 선생님, 『아리마 기념』……');
      era.printButton('「그래, 다음은 『아리마 기념』이다!」', 1);
      await era.input();
      await daiya.say_and_wait('네!!');
    }
    await kita.say_and_wait(
      '하지만 다이아짱, 각오하는 게 좋을 거야! 『아리마 기념』의 나는 지금까지와는 다를 테니까!',
    );
    await kita.say_and_wait(
      '다이아짱이랑 대결하기 전에, 먼저 『재팬 컵』에서 내 달리기와 일본의 마음을 전 세계에 보여주겠어!',
    );
    await daiya.say_and_wait('후훗, 기대하고 있을게!');
    await daiya.say_and_wait([
      race_infos[race_enum.arim_kin].get_colored_name(),
      '……지금의 우리가 보여줄 수 있는 최고의 승부로 만들자!',
    ]);
    era.drawLine();
    await era.printAndWait('그날, 교토 경기장에서 돌아오는 길에.');
    await daiya.say_and_wait('후후후, 트레이너 선생님. 저 오늘 내내 기분이 정말 들떠 있어요♪');
    era.printButton('「지금도 그래?」', 1);
    await era.input();
    await daiya.say_and_wait('네, 지금도요.');
    await daiya.say_and_wait([
      '키타짱과 함께 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '을 달릴 생각을 하니 가슴이 계속 두근거려요. 아, 설레는 것보다는 기대된다는 마음이 더 크겠네요.',
    ]);
    await daiya.say_and_wait(
      '우리가 어릴 적 꿈꿨던 순수하고 천진난만한 꿈이 곧 현실이 되려 하고 있어요……',
    );
    era.printButton('「키타산과 같이 레이스를 한다는 꿈 말이야?」', 1);
    await era.input();
    await daiya.say_and_wait(
      '후훗, 그때 제가 꿈꿨던 무대는 G1 레이스였지만, 현실은 생각보다 훨씬 더 멋진 상황이 되었네요.',
    );
    await daiya.say_and_wait(
      `제가 명문 ${daiya.get_uma_sex_title()}가 되겠다는 꿈을 향해 나아가는 길에, 키타짱이…… ${
        kita.sex
      }가 라이벌로서 제 앞을 가로막고 서 있어요.`,
    );
    await daiya.say_and_wait(
      '이보다 더 운명적이고 기대되는 상황은 없을 거예요!',
    );
    era.printButton('「정말 최고의 무대가 되겠는걸」', 1);
    await era.input();
    await daiya.say_and_wait(
      `네, 제 앞에서 달리는 키타짱을 뒤쫓고, ${kita.sex}를 뛰어넘어 제 꿈을 실현할 거예요. 저와 사토노 가문의 꿈을요.`,
    );
    await era.printAndWait(
      `사토노 다이아몬드의 눈빛에는 한 치의 망설임도 없었다. ${daiya.sex}의 눈동자 깊은 곳에서 타오르는 불꽃은 처음 만났을 때처럼, 아니 그보다 더 뜨겁게 타오르고 있었다.`,
    );
    era.printButton('「우선은 『아리마 기념』이다!」', 1);
    await era.input();
    await daiya.say_and_wait('맞아요! 이젠 그 어떤 도움도 빌릴 필요 없어요.');
    await daiya.say_and_wait(
      '징크스를 멋지게 극복해낸 저, 다이아가 키타짱과 다른 시니어급 참가자들을 모두 압도해 보이겠어요!',
    );
  };

  handlers[race_enum.arim_kin] = async (daiya, me, edu_weeks, extra_flag) => {
    if (edu_weeks < 96) {
      await print_event_name('당당하게', daiya);
      const kita = get_chara_talk(68);
      if (extra_flag.rank === 1) {
        await daiya.say_and_wait('줄곧 눈앞에 있는 그 등을 쫓아왔어요.', true);
        await daiya.say_and_wait('지금 이 순간── 그 등을 뛰어넘겠어요!!', true);
        await daiya.say_and_wait('야아아아아아아아아!!');
        await say_by_passer_by_and_wait(
          '해설',
          `사토노 다이아몬드가 가장 먼저 결승선을 통과합니다!! ${daiya.sex}가 다이아몬드 같은 단단함으로 다른 적수들을 물리쳤습니다──!`,
        );
        await say_by_passer_by_and_wait('관중', '와아아아아아아아아!');
        await daiya.say_and_wait('하아, 하아, 하아……');
        await kita.say_and_wait('……아────! 너무 분해! 내가 지다니────!!');
        await kita.say_and_wait('그래도 정말 즐거운 레이스였어────!!');
        await daiya.say_and_wait(
          '후후후후! 나도! 나도 정말 즐거운 레이스였어────!!',
        );
        await daiya.say_and_wait('앞으로 이런 즐거운 기분을 자주 느낄 수 있겠네!');
        await say_by_passer_by_and_wait(
          '관중 C',
          '다이아, 축하해────! 방금 그 모습 정말 멋졌어────!!',
        );
        await say_by_passer_by_and_wait(
          '관중 D',
          '최고의 경기였어!! 방금 연기 정말 좋았어, 사토노──!',
        );
        await kita.say_and_wait('다들 다이아짱을 기다리고 있어! 어서 가봐!');
        const reporter = get_chara_talk(303);
        await reporter.say_and_wait(
          '사토노 다이아몬드 씨, 축하드립니다! 지금 기분이 어떠신지 팬 여러분께 한 말씀 부탁드려요!',
        );
        await daiya.say_and_wait(
          '클래식 시즌의 마지막을 이렇게 멋진 레이스로 장식할 수 있어서 정말 기뻐요.',
        );
        await daiya.say_and_wait(
          '올 한 해…… 클래식 3관을 목표로 달려온 이 길이 결코 순탄치만은 않았거든요.',
        );
        await daiya.say_and_wait(
          '그 과정에서 많은 일을 겪었고, 예상치 못한 상황에 직면하기도 했죠.',
        );
        await reporter.say_and_wait('구체적으로 어떤 일들이 있었나요?');
        await daiya.say_and_wait([
          '예를 들면 ',
          race_infos[race_enum.sats_sho].get_colored_name(),
          ' 때 겪었던 궂은 날씨라든가…… 당시엔 정말 상상 이상으로 날씨가 좋지 않았거든요.',
        ]);
        await daiya.say_and_wait(
          '트윙클 시리즈의 레이스들이 힘들게 느껴질 때도 있었지만…… 하지만 오늘은 정말 멋진 레이스였어요.',
        );
        await daiya.say_and_wait(
          '지금까지 저와 함께 걸어와 주신 모든 분께 진심으로 감사드리고 싶어요. 감사합니다.',
        );
        await kita.say_and_wait(
          '헤헤헤, 내가 오히려 고맙지! 하지만 다음번엔 절대 안 질 거야, 다이아짱!!',
        );
        await say_by_passer_by_and_wait(
          '관중 A',
          '오, 기세 좋은데──! 키타산! 다음에도 응원할게!',
        );
        await say_by_passer_by_and_wait('관중 C', '다이아도 힘내라──!');
        await reporter.say_and_wait(
          '두 분은 어릴 적부터 함께 자란 소꿉친구이자 서로 라이벌임을 선포하셨는데요! 혹시 다음 대결은 정해졌나요?',
        );
        await daiya.say_and_wait('아뇨, 아직은……');
        await kita.say_and_wait([
          race_infos[race_enum.sank_hai].get_colored_name(),
          '!',
        ]);
        await kita.say_and_wait([
          '전 ',
          race_infos[race_enum.sank_hai].get_colored_name(),
          '에 나갈 거예요! 거기서 설욕하겠어요!!',
        ]);
      } else {
        await daiya.say_and_wait('하아, 하아, 하아……');
        await kita.say_and_wait('하아, 하아…… 다이아짱…… 너 정말 바짝 쫓아왔구나……!');
        await kita.say_and_wait(
          '다이아짱의 기세가 내 피부까지 느껴질 정도였어. 지금도 따끔거리는 것 같아.',
        );
        await daiya.say_and_wait('나도 마찬가지예요. 키타짱의 뜨거운 투지에 데어버리는 줄 알았는걸.');
        await kita.say_and_wait('이게 레이스 때의 다이아짱이구나……!');
        await daiya.say_and_wait('이게 레이스 때의 키타짱이구나……!');
        await kita.say_and_wait(
          '앞으로도 오늘처럼 다이아짱이랑 자주 대결할 수 있겠네! 정말 기대돼!',
        );
        await daiya.say_and_wait('응! 이제부터 계속 키타짱과 함께 레이스를 할 수 있겠네!');
        await say_by_passer_by_and_wait(
          '관중 A',
          '좋았어──! 키타산! 다음에도 응원할게!',
        );
        await say_by_passer_by_and_wait('관중 C', '다이아도 힘내라──!');
        await kita.say_and_wait([
          '네!! 감사합니다! 제 다음 레이스는…… ',
          race_infos[race_enum.sank_hai].get_colored_name(),
          '예요!',
        ]);
      }
      await say_by_passer_by_and_wait('관중', '오오오오오오오!');
      await say_by_passer_by_and_wait(
        '관중 A',
        '그럼 『봄 시니어 3관』에 도전하는 거네! 꼭 우승해라, 키타산!!',
      );
      await kita.say_and_wait('네! 여러분도 꼭 현장에 보러 와 주세요!');
      await daiya.say_and_wait(['저도 나갈게요!', '!!']);
      era.printButton('「어…… 다이아!?」', 1);
      await era.input();
      await era.printAndWait(
        `다음 레이스, 아니 시니어 시즌 전체의 출주 방침에 대해서는 ${me.get_couple_title()}이 아직 논의하지 않은 상태였다.`,
      );
      await era.printAndWait(
        `하지만 사토노 다이아몬드는 ${me.name}을(를) 살짝 쳐다본 뒤, 관중석을 향해 다시 한번 똑똑히 말했다.`,
      );
      await daiya.say_and_wait([
        race_infos[race_enum.sank_hai].get_colored_name(),
        '에서 키타짱과 대결하겠어요!!',
      ]);
      await say_by_passer_by_and_wait(
        '관중 B',
        `사토노 다이아몬드와 키타산 블랙, ${daiya.sex}들의 대결은 계속되는구나!`,
      );
      await say_by_passer_by_and_wait('관중 A', [
        race_infos[race_enum.arim_kin].get_colored_name(),
        '은 그저 시작일 뿐이었어…… 오오오! 앞으로도 계속 지켜봐 주마!!',
      ]);
      await era.printAndWait(
        `관중석의 떠나갈 듯한 함성이 경기장을 가득 메우고 좀처럼 그칠 줄 몰랐다. 이때, 키타산 블랙이 참가한 모든 ${daiya.get_uma_sex_title()}를 위너스 서클로 불러 모았다.`,
      );
      await era.printAndWait(
        `${daiya.get_uma_sex_title()}들은 한 줄로 늘어서서 관중석을 향해 두 손을 크게 흔들었다.`,
      );
      await kita.say_and_wait('여러분, 내년에도 계속해서 저희를 응원해 주세요──!!');
      await say_by_passer_by_and_wait('관중', '와아아아아아아아아아!');
      era.drawLine();
      await daiya.say_and_wait('……멋대로 결정해 버려서 정말 죄송해요.');
      await era.printAndWait('대기실로 돌아온 사토노 다이아몬드가 정중하게 고개를 숙여 사과했다.');
      era.printButton('「다음 목표는 정말로 『오사카배』로 결정한 거야?」', 1);
      await era.input();
      await era.printAndWait(
        `거리나 일정상으로는 문제가 없었다. 하지만 만약의 상황을 대비해 ${me.name}은(는) ${
          daiya.sex
        }에게 이것이 명문 ${daiya.get_uma_sex_title()}라는 꿈을 향한 결정인지 다시 한번 확인했다.`,
      );
      await daiya.say_and_wait(
        '네. 『오사카배』 역시 G1 레이스니까 아무 문제 없어요.',
      );
      if (extra_flag.rank === 1) {
        await daiya.say_and_wait(
          `오늘 위너스 서클에서 키타짱이 보여준 모습…… ${kita.sex}가 얼마나 대단한지 다시 한번 깨달았거든요.`,
        );
        await daiya.say_and_wait(
          '비록 오늘 레이스는 제가 이겼지만, 전 아직 키타짱을 완전히 따라잡지 못했어요……',
        );
      } else {
        await daiya.say_and_wait(
          `오늘 레이스 후 키타짱이 보여준 모습…… ${kita.sex}가 얼마나 대단한지 새삼 다시 느꼈어요.`,
        );
        await daiya.say_and_wait('……저와 키타짱 사이의 거리는 아직 한참 멀었나 봐요……');
      }
      await daiya.say_and_wait(
        '트레이너 선생님도 보셨죠? 그때 관중석의 모든 분이 짓고 있던 미소와 경기장을 뒤흔들던 그 함성소리요.',
      );
      await daiya.say_and_wait(
        `키타짱은 레이스로 사람들에게 웃음을 주고, 트윙클 시리즈 전체에 활기를 불어넣고 있어요.`,
      );
      await daiya.say_and_wait(
        `그게 바로 『명문 ${daiya.get_uma_sex_title()}』의 진정한 모습이 아닐까 깊게 느꼈답니다.`,
      );
      await daiya.say_and_wait(
        `『명문 ${daiya.get_uma_sex_title()}』가 구체적으로 어떤 모습이어야 하는지, 전 아직 정답을 찾지 못했어요.`,
      );
      await daiya.say_and_wait(
        `키타짱의 경우엔 ${kita.sex}가 진지하게 달리는 모습이 사람들의 응원을 이끌어내죠.`,
      );
      await daiya.say_and_wait('팬들의 마음을 사로잡고 뒤흔드는 것, 그것이 키타짱의 스타일이에요.');
      await daiya.say_and_wait(
        '……사토노 가문의 영애인 저로서는 그런 뜨거운 열풍을 직접 일으키기는 힘들지도 몰라요.',
      );
      era.printButton('「다이아에게는 다이아만의 장점이 있어」', 1);
      await era.input();
      await era.printAndWait(
        `흔들리지 않는 굳건한 의지. 고귀한 기품을 잃지 않고 약한 소리를 하지 않는 것이 ${daiya.sex}의 방식이다.`,
      );
      await era.printAndWait(
        `다만 아쉬운 점이 있다면 그 때문에 ${daiya.sex}의 노력이 잘 보이지 않는다는 것이다. ${daiya.sex} 역시 키타산 블랙 못지않게 노력하며 매 순간 눈부신 광채를 내뿜고 있음에도 말이다.`,
      );
      await daiya.say_and_wait('후훗, 그렇게 말씀해 주시니 기뻐요…… 하지만 걱정 마세요.');
      await daiya.say_and_wait(
        `저만의 『명문 ${daiya.get_uma_sex_title()}』다운 모습을 찾아낼 생각이니까요.`,
      );
      await daiya.say_and_wait(
        `저, 사토노 다이아몬드가 어떤 방식으로 ${daiya.get_uma_sex_title()}계를 지탱해 나갈 수 있을지……`,
      );
      await daiya.say_and_wait(
        `키타짱의 모습을 지켜보며 ${kita.sex}의 등을 뒤쫓다 보면…… 제가 원하는 정답을 찾을 수 있을 것 같아요.`,
      );
      era.printButton('「알았어. 그럼 다음 대결은 『오사카배』로구나!」', 1);
      await era.input();
      await daiya.say_and_wait('네! 트레이너 선생님, 앞으로도 잘 부탁드려요!');
      await era.printAndWait(
        `『명문 ${daiya.get_uma_sex_title()}』의 진정한 모습. 그 미지의 해답을 찾기 위해 ${
          me.name
        }과 사토노 다이아몬드는 이제 시니어 시즌의 문턱을 넘으려 하고 있다.`,
      );
    } else if (extra_flag.rank === 1) {
      await print_event_name('지보', daiya);
      const kita = get_chara_talk(68);
      const mcqueen = get_chara_talk(13);
      const teio = get_chara_talk(3);
      await era.printAndWait(
        '해설「제2코너를 돌아 내리막길을 지나 반대편 직선 주로에 진입합니다! 선두 그룹의 페이스는 현재 어떤가요?」',
      );
      await era.printAndWait(
        '안경을 쓴 남성「나카야마 잔디 2500m는 6개의 코너를 지나야 합니다. 고저 차가 크기 때문에 강인한 스태미나가 요구되죠. 단순히 속도만으로 밀어붙이는 건 한계가 있습니다.」',
      );
      await era.printAndWait('후드티를 입은 남성「갑자기 웬 분석이야?」');
      await era.printAndWait(
        '안경을 쓴 남성「골인 지점 직전에 심장이 터질 듯한 가파른 언덕이 기다리고 있어서, 결과는 끝날 때까지 아무도 모릅니다.」',
      );
      await era.printAndWait('관중들 모두가 숨을 죽인 채 레이스를 지켜본다. 그리고──');
      await daiya.say_and_wait('하아아아아아아아아아아아!!');
      await era.printAndWait(
        '해설「누군가 튀어나옵니다! 사토노 다이아몬드다! 선두는 사토노 다이아몬드!!」',
      );
      await kita.say_and_wait('으아아아아아아!!');
      await era.printAndWait('맥퀸 & 테이오「하아아아아아아아!」');
      await era.printAndWait(
        '해설「사토노 다이아몬드, 마지막 언덕을 치고 올라갑니다! 절친과 동경하는 대상을 한꺼번에 추월하며──」',
      );
      await era.printAndWait('해설「사토노 다이아몬드, 1위로 결승선을 통과합니다!!」');
      await era.printAndWait('（와아아아아아아아아아!）');
      await daiya.say_and_wait('하아, 하아, 하아……');
      await mcqueen.say_and_wait('축하해요, 사토노 씨. 당신의 승리네요.');
      await daiya.say_and_wait('맥퀸 씨……!');
      await mcqueen.say_and_wait(
        '장거리 레이스에서조차 당신에게 지고 말았군요. 당신의 실력은 이제 의심의 여지가 없어요.',
      );
      await mcqueen.say_and_wait(
        `──이미 갖추고 있었군요. 당신이 말하던 『명문 ${daiya.get_uma_sex_title()}』의 실력을요.`,
      );
      await daiya.say_and_wait('감사합니다……!');
      await teio.say_and_wait(
        '음~ 다이아랑 키타산이 이렇게나 강해졌을 줄이야…… 상상 이상인걸.',
      );
      await kita.say_and_wait('테이오 씨……! 저저저저 정말 기뻐요~~!!');
      await teio.say_and_wait(
        '이봐, 이게 끝이 아니라고. 이제 겨우 시작일 뿐이잖아!',
      );
      await teio.say_and_wait(
        '잠시라도 멈춰 서면 바로 추월당할걸. 난 언제든 다시 도전할 생각이니까.',
      );
      await teio.say_and_wait(
        `게다가 너희만큼 대단한 ${daiya.get_uma_sex_title()}들은 앞으로도 계속해서 나타날 테니까 말이야.`,
      );
      await kita.say_and_wait(
        '네! 방심하지 않을게요! 모두에게 미소를 전하기 위해 더, 더 강해질 거예요!',
      );
      await mcqueen.say_and_wait(
        '……사토노 씨, 당신은 어떤가요? 이제 자신이 나아가야 할 방향이 확실히 보이나요?',
      );
      await daiya.say_and_wait(
        `……네. 사토노 가문의 ${daiya.get_uma_sex_title()}로서 가문을 이끌고, 더 많은 역사를 개척해 나갈 거예요.`,
      );
      await daiya.say_and_wait(
        `레이스 결과로 ${daiya.get_uma_sex_title()}계에 기록을 남기고, 그렇게 사토노 가문만의 역사를 계속 만들어 가겠어요.`,
      );
      await mcqueen.say_and_wait('그렇군요. 그럼 어떤 길을 개척할 생각인가요?');
      await daiya.say_and_wait(
        '──정상을 향한 길이에요. 제 이름처럼 가장 정점에 서서 다이아몬드의 빛을 내뿜는 것에 도전하겠어요.',
      );
      await daiya.say_and_wait(
        `일본뿐만 아니라 전 세계의 정점에 도전해서 ${daiya.get_uma_sex_title()}계를 널리 알리는 것.`,
      );
      await daiya.say_and_wait(
        `그것이 저, 사토노 다이아몬드가 생각하는 『명문 ${daiya.get_uma_sex_title()}』의 모습이에요.`,
      );
      await daiya.say_and_wait(
        `전 이제 막 그 길의 입구에 섰을 뿐이에요. 앞으로도 이 포부를 가슴에 품고 『명문 ${daiya.get_uma_sex_title()}』를 향해 계속 정진하겠어요.`,
      );
      await mcqueen.say_and_wait('후훗, 정말 훌륭한 마음가짐이군요.');
      await mcqueen.say_and_wait(
        `그럼 이제 『명문 ${daiya.get_uma_sex_title()}』답게 나아가세요! 모두가 당신을 기다리고 있어요!`,
      );
      await daiya.say_and_wait('네!');
      await daiya.say_and_wait('여러분, 응원해 주셔서 감사합니다!');
      await era.printAndWait('관중 A「다이아────!! 축하해────!」');
      await era.printAndWait(
        `관중 B「${daiya.get_uma_sex_title()}계의 보배!! 다이아몬드의 광채를 이길 자는 아무도 없다!」`,
      );
      await daiya.say_and_wait('후후후, 저도 이 광채를 계속 유지하고 싶어요.');
      await daiya.say_and_wait(
        `사토노 다이아몬드는 사토노 가문의 ${daiya.get_uma_sex_title()}로서 일본 ${daiya.get_uma_sex_title()}계의 발전을 위해 온 힘을 다해 공헌하겠습니다.`,
      );
      await daiya.say_and_wait('그리고 이 길을 앞으로도──');
      await daiya.say_and_wait('키타짱!!');
      await daiya.say_and_wait('난 키타짱과 함께 앞으로의 도전을 계속해 나가고 싶어.');
      await daiya.say_and_wait(
        '우리가 참가하는 레이스가 달라지고, 목표와 나아가는 방향이 달라지더라도.',
      );
      await daiya.say_and_wait('각자의 길을 걸어가게 된다 하더라도──');
      await daiya.say_and_wait('나는 계속해서 키타짱과 어깨를 나란히 하며 나아가고 싶어!');
      await kita.say_and_wait('다이아짱……!');
      await daiya.say_and_wait('우리 함께 계속해서 달려가자!!');
      await kita.say_and_wait('응!! 앞으로도 영원히 함께야!');
      await kita.say_and_wait(
        '하지만 그전에! 다음 레이스!! 다음엔 꼭 다이아짱을 이길 거니까!',
      );
      await kita.say_and_wait('내 당장의 목표는 바로 그거야!');
      await daiya.say_and_wait('후후후! 나도 지지 않을 거야!');
      await era.printAndWait('관중 C「우오오오오! 너희 정말 보기 좋다!! 기대하고 있을게!」');
      await era.printAndWait(
        '안경을 쓴 남성「약속하죠, 사토노 가문과 너희 두 사람의 역사를 끝까지 지켜보겠다고!!」',
      );
      await era.printAndWait(
        '후드티를 입은 남성「우리 마음은 언제나 너희와 함께야! 영원히 응원하마!!」',
      );
      await daiya.say_and_wait('감사합니다! 이렇게 따뜻한 응원을 받을 수 있다니……');
      await daiya.say_and_wait('헤헤헤, 사토노 다이아는 정말 행복한 사람이에요!');
      await era.printAndWait('말을 마친 사토노 다이아몬드가 그 어느 때보다 화사한 미소를 지어 보였다.');
      await era.printAndWait(
        '그것은 어떤 보석보다도, 다이아몬드보다도 더욱 눈부시게 빛나는── 사토노 다이아몬드만의 빛이었다.',
      );
    } else {
      return true;
    }
  };
};