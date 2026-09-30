const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const { gacha } = require('#/utils/list-utils');

const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.negi_sta] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name('다음은?', urara);
    if (extra_flag.rank === 1) {
      await in_urara.say_as_unknown_and_wait('예상했던 대로의 승리군요, 축하드려요?');
      await in_urara.say_as_unknown_and_wait(
        '실수로 지더라도 당신을 탓하지는 않겠지만, 다음에는 좀 더 진지하게 임해 주세요.',
      );
      era.drawLine();
      await era.printAndWait([
        '앞줄 가장자리에 도착하자마자, 경기장에서 달려온 벚꽃색 소동물이 곧바로 폴짝폴짝 뛰며 ',
        me.get_colored_name(),
        '의 손바닥과 하이파이브를 했다.',
      ]);
      await era.printAndWait(
        '울타리 너머로 내려다보니, 그곳에는 여전히 땀을 닦을 새도 없이 밝게 웃는 얼굴이 기다리고 있었다.',
      );
      await urara.say_and_wait([callname, '! 1등, 1등이야──!']);
      await urara.say_and_wait(
        '헤헤~ 잘하는 단거리라서 그럴까? 순식간에 다 달려버린 기분이야!',
      );
      await urara.say_and_wait(
        '하지만 맨 앞에서 달리는 기분은 예전이랑 똑같이, 맨 앞의 풍경은 정말 예뻐~',
      );

      era.printButton('「응, 이번엔 꽤 잘했어. 소감이 어때?」', 1);
      await era.input();

      await urara.say_and_wait(
        '하고 싶은 말은 잔뜩 있지만, 결국 전력으로 앞으로 달려 나가는 게 우라라에게 제일 어울리는 것 같아!',
      );
      await urara.say_and_wait(
        '그치만 오늘 레이스랑은 별개로…… 나, 더 높은 단계의 레이스에도 나갈 수 있을 것 같아!',
      );
      await era.printAndWait([
        '그 말대로다. ',
        urara.get_colored_name(),
        '의 현상태로는, 지금까지도 ',
        urara.sex,
        '가 전술을 수행하는 능력은 상당히 한정적이다.',
      ]);
      await era.printAndWait([
        '하지만 다른 한편으로는 틀린 말도 아니었다. 지금의 ',
        urara.sex,
        '는 분명 더 높은 수준의 레이스에 도전할 자격이 있다.',
      ]);

      era.printButton(
        `「그렇다면 선택지가 적지는 않지만…… 일단 ${race_infos[race_enum.febr_sta].name_zh}를 추천할게, 어때?」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('페…… 아! 교과서에서 배운 적 있어! 아마 G1 레이스였지?');
      await urara.say_and_wait([
        '그러니까 다음엔 G1에 도전해 보라는 거지? 올해의 아리마 기념을 위해 경험을 쌓으라는 거지?',
      ]);

      era.printButton('「응…… 대충 비슷해. 어쨌든 다음 레이스를 맞이할 준비를 하자!」', 1);
      await era.input();

      await urara.say_and_wait('응!');
    } else {
      await in_urara.say_as_unknown_and_wait(
        '정말로 져버릴 줄은 몰랐네요, 음…… 제가 처음에 뭐라고 했었죠?',
      );
      await in_urara.say_as_unknown_and_wait('하아…… 다음에는 좀 더 진지하게 임해 주세요.');
      era.drawLine();
      await era.printAndWait([
        '차분하게 코스 가장자리로 다가가자, ',
        me.get_colored_name(),
        '의 눈에 저 멀리서 ',
        urara.get_colored_name(),
        '가 얼굴의 땀방울을 닦으며 달려오는 모습이 보였다.',
      ]);
      await urara.say_and_wait('후우── 이번엔 금방 끝났네! 하지만 실수로 져버렸어……');
      await urara.say_and_wait(
        '그래도 이번 레이스 정말 즐거웠어! 그거 말고 또 주의해야 할 게 있을까?',
      );

      era.printButton(
        '「괜찮아, 그냥 컨디션이 좀 안 좋았을 뿐이야. 다음엔 꼭 이기면 돼.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '조금은 억지 웃음을 짓는 ',
        urara.get_colored_name(),
        '에게 수건을 건네주며, ',
        me.get_colored_name(),
        '는 웃으며 손을 뻗어 ',
        urara.sex,
        '의 처진 귀를 부드럽게 쓰다듬었다.',
      ]);
      await era.printAndWait([
        '어떤 레이스에서도 평소의 모습을 유지하는 것은 분명 ',
        urara.get_colored_name(),
        '의 강력한 장점 중 하나지만, 지금은 분명 컨디션 조절이 더 필요한 시점이다.',
      ]);
      await era.printAndWait([
        '이제부터는 모두가 전력을 다하는 레이스에 참여해 봐야 할 것이다. 어쩌면 그것이 ',
        urara.get_colored_name(),
        '가 새해의 리듬을 더 빨리 찾는 데 도움이 될지도 모른다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        urara.get_colored_name(),
        '가 선택한 목표를 준비하기 위해서라도, 이제는 더 높은 등급의 레이스에 계속 도전해야 할 때다.',
      ]);

      era.printButton(
        `「우라라, 다음에는 더 높은 등급의 레이스에 도전해 볼래? 참고로 나는 ${race_infos[race_enum.febr_sta].name_zh}를 추천해.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('페…… 아! 교과서에서 배운 적 있어! 아마 G1 레이스였지?');
      await urara.say_and_wait('하지만 나 이번에 져버렸는걸, 그래도 괜찮을까……');

      era.printButton(
        '「괜찮아, 레이스 참가 자격은 있으니까. 컨디션만 잘 조절하면 문제없어.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '그렇게 말하며 ',
        me.get_colored_name(),
        '는 실망한 어린 ',
        urara.get_uma_sex_title(),
        '를 계속 달래주었고, 마침내 ',
        urara.sex,
        '가 다시 평소의 미소를 띨 때까지 곁을 지켰다.',
      ]);
    }
    const race_history = RaceHistory.get(52);
    const g1_reward = Math.min(
      ...race_history
        .get_values()
        .filter((e) => race_infos[e.race].race_class === class_enum.G1)
        .map((e) => e.rank),
    );
    if (g1_reward === Infinity) {
      await era.printAndWait([
        extra_flag.rank === 1 ? '사실' : '하지만',
        ' 단순히 마지막 레이스를 준비하는 것뿐만 아니라, 무엇보다 중요한 것은 ',
        urara.get_colored_name(),
        '가 언젠가는 G1이라는 벽을 넘어야 한다는 점이다.',
      ]);
      await era.printAndWait([
        '시니어 시즌에 들어선 뒤로 ',
        urara.get_colored_name(),
        '에게 남은 시간은 그리 넉넉지 않지만, 이것은 여전히 ',
        urara.sex,
        '가 반드시 한 번은 겪어야 할 시험이다.',
      ]);
      await era.printAndWait([
        '적어도…… ',
        urara.sex,
        '가 계속 달릴 수 있는 시간 동안 후회를 남기게 하고 싶지는 않다.',
      ]);
    } else if (g1_reward === 1) {
      if (extra_flag.rank === 1) {
        await era.printAndWait([
          '본인이 말한 것처럼, 이제 ',
          urara.get_colored_name(),
          '는 G1 우승 실적을 가진 강력한 ',
          urara.get_uma_sex_title(),
          '로 성장했다.',
        ]);
        await era.printAndWait([
          '처음 그 어리버리하고 훈련조차 힘들어하던 꼬마 ',
          urara.get_uma_sex_title(),
          '가 이 정도의 ',
          urara.get_uma_sex_title(),
          '로 성장할 줄이야, 정말 상상조차 하기 힘든 일이었다.',
        ]);
        await era.printAndWait([
          '사실은 모두의 예상이 틀렸던 것이고, ',
          urara.get_colored_name(),
          '는 알아차리기 힘든 천재였던 게 아닐까?',
        ]);
      } else {
        await era.printAndWait([
          '물론 ',
          me.get_colored_name(),
          '가 한 말이 단순히 달래기 위한 것만은 아니었다. 지금의 ',
          urara.get_colored_name(),
          '는 분명 G1에 도전해 우승할 수 있는 실력을 갖추고 있다.',
        ]);
        await era.printAndWait([
          '처음과는 완전히 다르다. 단 한 번의 패배만으로 ',
          urara.sex,
          '를 다시 「실패」라는 단어로 수식할 수는 없게 되었다.',
        ]);
        await era.printAndWait([
          '어쩌면 ',
          urara.get_colored_name(),
          '는 어떤 면에서 정말 천재일지도 모른다.',
        ]);
      }
    } else {
      await era.printAndWait([
        extra_flag.rank === 1 ? '사실' : '하지만',
        ' 단순히 마지막 레이스를 준비하는 것뿐만 아니라, 무엇보다 중요한 것은 ',
        urara.get_colored_name(),
        '가 언젠가는 G1이라는 벽을 넘어야 한다는 점이다.',
      ]);
      await era.printAndWait([
        '시니어 시즌에 들어선 뒤로 ',
        urara.get_colored_name(),
        '에게 남은 시간은 그리 넉넉지 않지만, 이것은 여전히 ',
        urara.sex,
        '가 반드시 한 번은 겪어야 할 시험이다.',
      ]);
      await era.printAndWait([
        '적어도, ',
        urara.sex,
        '가 계속 달릴 수 있는 시간 동안 후회를 남기게 하고 싶지는 않다.',
      ]);
    }
    const arim_kin_check = race_history.get_result(47 + 48);
    if (arim_kin_check?.race === race_enum.arim_kin) {
      if (arim_kin_check?.rank === 1) {
        if (extra_flag.rank === 1) {
          await era.printAndWait([
            '하지만 「',
            race_infos[race_enum.arim_kin].get_colored_name(),
            '을 위한 준비」라…… 본의는 아니었지만, 이미 한 번 이긴 적이 있는 이상 확실히 필요해 보인다.',
          ]);
          await era.printAndWait([
            '중요한 레이스에서 한 번이라도 이기면 경쟁자들의 표적이 되기 마련이다. 게다가 「',
            urara.get_colored_actual_name(),
            '가 아리마에서 이긴다」는 사실은 더욱 공포스러운 화학 반응을 일으킬 것이다.',
          ]);
          await era.printAndWait(
            '이번 아리마가 어떤 양상으로 흘러갈지 참으로 상상하기 어렵다. 그러니 그때까지 최선을 다할 수밖에.',
          );
        } else {
          await era.printAndWait([
            '그렇지만, 평소에 ',
            urara.get_colored_name(),
            '가 기복이 심하긴 해도, 이번엔 대체 왜 진 거지?',
          ]);
          await era.printAndWait([
            '그 생각을 하자 ',
            me.get_colored_name(),
            '은(는) 다시 이마를 짚었다. 시간은 마치 데뷔 첫해 첫 훈련 때의 어질어질했던 오후로 돌아간 듯했다.',
          ]);
          await era.printAndWait('어쨌든, 다음엔 이런 사고가 다시 일어나지 않겠지?');
        }
      } else {
        await era.printAndWait([
          '「',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '을 위한 준비」에 관해서라면, ',
          urara.get_colored_name(),
          '가 강조하지 않아도 트레이너인 ',
          me.get_colored_name(),
          '은(는) 반드시 기억하고 있을 것이다.',
        ]);
        await era.printAndWait([
          '하지만 지금의 어린 ',
          urara.get_uma_sex_title(),
          '는 단순히 즐겁게 달리는 것보다, 올해는 승리에 대한 욕구가 훨씬 강해 보였다.',
        ]);
        await era.printAndWait(
          extra_flag.rank === 1
            ? '하지만 아리마 우승은 역시…… 어쨌든 트레이너로서 최선을 다할 수밖에 없다.'
            : [
                '하지만 아리마 우승은 역시…… 일단은 ',
                urara.get_colored_name(),
                '의 컨디션을 회복하는 것을 최우선 목표로 삼자.',
              ],
        );
      }
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait([
      '그렇게 트레이너 ',
      me.get_adult_sex_title(),
      '과(와) ',
      urara.get_colored_name(),
      '는 다음 출주 목표를 결정했습니다.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      extra_flag.rank === 1
        ? ['과연 ', urara.sex, '가 어디까지 도전할 수 있을지는 오직 세 여신만이 알겠죠.']
        : [
            '과연 ',
            urara.sex,
            '가 어디까지 도전할 수 있을지…… 부디 당신이 ',
            urara.sex,
            '를 좀 더 채찍질해 주시길 바랍니다.',
          ],
    );
    await in_urara.say_as_unknown_and_wait(
      '다음에 만날 때는 아마 이렇게 쉽지는 않을 거예요……',
    );
    extra_flag.pt_change = 37;
    if (extra_flag.rank === 1) {
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.relation_change = 50;
    } else {
      extra_flag.attr_change = new Array(5).fill(0);
      gacha(Object.values(attr_enum), 4).forEach(
        (e) => (extra_flag.attr_change[e] = 2),
      );
      extra_flag.relation_change = 10;
    }
  };

  handlers[race_enum.febr_sta] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name('분해?', urara);
    extra_flag.pt_change = 45;
    if (extra_flag.rank === 1) {
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.relation_change = 50;
      await era.printAndWait([
        '레이스가 끝난 후, ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 함께 대기실로 향하는 통로를 걷고 있었다.',
      ]);
      await era.printAndWait([
        '여전히 레이스 분위기에 흠뻑 젖어 있는 듯, 방금 전까지 현장에 있었음에도 ',
        urara.get_colored_name(),
        '는 계속해서 ',
        me.get_colored_name(),
        '에게 달릴 때의 일을 이야기했다.',
      ]);
      await urara.say_and_wait(
        '헤헤~ 게다가 다들 나 때문에 기뻐해 줬어! 1등 해서 정말 다행이야!',
      );
      await urara.say_and_wait([
        '내가 계속 달리면 모두가 계속 웃어주겠지? ',
        callname,
        ', 다음에는 어떤 레이스에 나갈 거야?',
      ]);
    } else {
      extra_flag.attr_change = new Array(5)
        .fill(1)
        .map((e) => e + (Math.random() > 0.5));
      await era.printAndWait([
        '레이스가 끝난 후, 아쉽게 승리를 놓쳐버린 탓인지 ',
        urara.get_colored_name(),
        '는 조금 풀이 죽어 보였다.',
      ]);
      await era.printAndWait([
        '하지만 그런 상태는 오래가지 않았다. 모두를 생각한 어린 ',
        urara.get_uma_sex_title(),
        '는 금세 귀를 쫑긋 세우며 미소를 되찾았다.',
      ]);
      await urara.say_and_wait(
        '이래도 다들 즐거워해 줬는걸! 게다가 나중에 무대 공연도 해야 하니까, 지금은 낙담할 때가 아니야!',
      );
      await urara.say_and_wait([
        '아 맞다! ',
        callname,
        ', 다음에는 어떤 레이스에 나갈 거야?',
      ]);
    }
    era.printButton('「그 이야긴데…… 우라라, 다음번에 뛰고 싶은 레이스가 있어?」', 1);
    await era.input();

    await urara.say_and_wait(
      '응? 이길 수 있다면 더 좋겠지만, 달릴 수만 있다면 사실 뭐든 괜찮아──',
    );
    await era.printAndWait([
      '예상했던 대답이다. ',
      me.get_colored_name(),
      '은(는) 이제 ',
      urara.get_colored_name(),
      '가 스스로 레이스를 선택하게 할 때라고 생각했지만, 역시 ',
      urara.sex,
      '의 성격상 제대로 고르기는 어려울 것 같았다.',
    ]);
    await era.printAndWait([
      '게다가 최종 목표를 「',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '」으로 고려했을 때, ',
      urara.get_colored_name(),
      '가 선택할 수 있는 일정은 사실상 한정되어 있다.',
    ]);

    era.printButton(
      `「그럼…… 다음에 『${race_infos[race_enum.elm_sta].name_zh}』에 나가는 건 어때?」`,
      1,
    );
    await era.input();

    await era.printAndWait(
      '이 레이스가 최선의 선택은 아닐 수도 있지만, 이해득실을 따져본 결과 일단 이 레이스를 예정해두기로 했다.',
    );
    await urara.say_and_wait([
      '좋아, 알았어! 상점가랑 응원회 여러분에게 다음 레이스는 ',
      race_infos[race_enum.elm_sta].get_colored_name(),
      '라고 말해둘게──',
    ]);

    era.printButton(
      `「참고로 이 레이스에 나간다면 다들 응원 오기가 좀 힘들 거야. ${race_infos[race_enum.elm_sta].name_zh}는 홋카이도에서 열리거든.」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '에? 정말!? 너무 멀잖아! 하지만 상관없을지도, 다들 어디서든 우라라를 볼 수 있을 테니까!',
    );
    await urara.say_and_wait(
      '모두가 우라라를 생각해주기만 한다면 전혀 문제없어. 그러니 그때도 어떻게든 이길 생각만 하면 돼!',
    );

    era.printButton(
      '「그전에, 이따가 라이브도 해야 하잖아. 다들 우라라의 멋진 모습을 기다리고 있다고?」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '알았어! 그럼 우라라는 공연 준비하러 갈게! ',
      callname,
      '는 볼일 있으면 먼저 보고 와!',
    ]);

    era.printButton(
      '「응! 그럼 난 무대 뒤편에 가 있을게. 무슨 일 생기면 꼭 바로 연락해야 해!」',
      1,
    );
    await era.input();

    await urara.say_and_wait('네에──');
    era.drawLine();
    await urara.print_and_wait([
      callname,
      '랑 작별하고 ',
      me.sex,
      '가 시야에서 사라지는 것을 배웅한 뒤, 나는 몸을 돌려 대기실로 들어갔어.',
    ]);
    if (era.get('relation:52:0') > 150) {
      await urara.print_and_wait([
        callname,
        '가 세 걸음에 한 번씩 돌아보는 모습이 왠지 좀 귀여웠어. 마치 ',
        callname,
        '가 어린애고, 우라라가 엄마인 것 같아.',
      ]);
      await urara.print_and_wait([
        '매일 ',
        callname,
        '가 그렇게 계속 바라봐줬으면 좋겠지만, 그건 너무 응석 부리는 걸까?',
      ]);
    } else {
      await urara.print_and_wait([
        callname,
        '는 여느 때처럼 그냥 가버렸네. 다시 한번 뒤돌아봐 줬으면 좋았을 텐데……',
      ]);
      await urara.print_and_wait([
        '그런데 우라라는 왜 이런 걸 신경 쓰고 있는 걸까? ',
        callname,
        '도 우라라만 계속 보고 있을 만큼 한가하지는 않을 텐데 말이야.',
      ]);
    }
    await urara.print_and_wait([
      '역시 잘 모르겠어…… 응? 저쪽 구석에 누군가 웅크리고 있네. 안색도 엄청 안 좋아 보여…… 아! 저 애는……',
    ]);
    await urara.print_and_wait([
      'G1에서 이기지 못해서 충격을 받은 걸까? 지기 싫어하는 ',
      urara.sex,
      '가 이렇게 연약한 모습을 보이는 건 우라라도 처음 봐……',
    ]);
    await urara.print_and_wait([
      '하지만 저렇게 있으면 그냥 내버려 둘 수 없어. 나는 ',
      callname,
      '처럼 해줄 순 없겠지만…… 일단 가서 물어보자!',
    ]);
    await urara.say_and_wait('저기, 괜찮아? 어디 아픈 거야?');
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「……아, 우라라구나…… 응, 걱정 마, 난 괜찮아……」',
    ]);
    await urara.say_and_wait(
      '하지만 표정이 너무 괴로워 보여! 이제 곧 라이브 시작인데, 정말 괜찮은 거야?',
    );
    await urara.say_and_wait(
      '너무 무리하지 마? 내가 곁에 있어 줄 테니까, 다시 웃을 수 있을 때까지──',
    );
    await era.printAndWait([urara.get_uma_sex_title(), 'A 「지금은 건드리지 마!」']);
    await urara.say_and_wait('……앗? 아파……!');
    await urara.print_and_wait([
      '내밀었던 손이 ',
      urara.get_uma_sex_title(),
      '의 힘에 뿌리쳐졌고, 맞은 손등에서 서서히 화끈거리는 느낌이 전해졌다.',
    ]);
    await urara.print_and_wait([
      '고개를 들었을 때, ',
      urara.sex,
      '는 분명 평소에 항상 생글생글 웃던 ',
      urara.get_uma_sex_title(),
      '였지만, 지금 보여주는 얼굴은 방황과 슬픔이 가득한 표정이었다.',
    ]);
    await urara.print_and_wait([
      '이런 표정을 마주했을 때 대체 어떻게 해야 할까? 하지만 지금 그냥 가버린다면, ',
      urara.sex,
      '가 더 슬퍼질 뿐이야.',
    ]);
    await urara.print_and_wait([
      '역시 갈 수 없어. 입술을 꽉 깨물고 붉게 부어오른 오른손을 숨긴 채, 나는 ',
      urara.sex,
      '의 옆에 주저앉아 ',
      urara.sex,
      '가 속마음을 더 털어놓기를 기다렸어.',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「어떻게, 웃음이 나올 리가 없잖아……!」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「어렵게 G1에 나갔는데, 나도 무대 중심에 서고 싶단 말이야! 그런데 이런 기회를 얻고도 난 이렇게 약해서……」',
    ]);
    await urara.print_and_wait(
      '누군가 슬퍼하고 있다면 먼저 진심을 다 이야기하게 들어주라고, 엄마도 항상 말씀하셨어.',
    );
    await urara.print_and_wait([
      '이제 좀 ',
      urara.sex,
      '에게 마음이 편해졌을까? 그런데 이 옆얼굴, 왠지 본 적이 있는 것 같아. 이게 대체 어떤 표정이었더라?',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「미안해…… 우라라, 일부러 그런 건 아니었어…… 하지만, 정말 웃음이 잘 안 나와……」',
    ]);
    await urara.say_and_wait('아니야, 우라라는 하나도 안 아파! 정말 괜찮은 거지?');
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「……어딜 봐서 안 아프다는 거야, 표정은 금방이라도 울 것 같으면서……」',
    ]);
    await urara.say_and_wait('에? 정말……? 아니야! 우라라는 정말 괜찮아!');
    await urara.print_and_wait([
      '사실 정말 아팠지만…… 아마 그렇게 아프진 않았을 거야! 하지만 내 표정을 보고 나서인지, ',
      urara.sex,
      '의 떨리던 입꼬리도 점점 올라가는 것 같아.',
    ]);
    await urara.print_and_wait(
      '우라라의 목적은 달성한 셈이지만, 정말 울던 사람을 웃게 만들 정도로 웃긴 표정이었을까? 내 표정이……',
    );
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「그런 뜻이 아니야…… 하지만 난 괜찮아, 무대에 올라갈 때는 제대로 웃을 수 있을 거야.」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「우라라는 항상 내 이야기를 잘 들어주는구나. 이번에도 정말 고마워. 그러니까 너도 무대에 서기 전에 표정 잘 추슬러!」',
    ]);
    await urara.say_and_wait('응! 괜찮아! 몇 번이라도 우라라가 들어줄게!');
    await urara.print_and_wait([
      '고맙다는 말을 남기고 먼저 일어선, 드디어 진정한 ',
      urara.sex,
      '가 가볍게 나를 끌어 올려주었어.',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「그러게, 몇 번이라도…… 다음엔 절대로…… 정중앙 자리에 설 거야!」',
    ]);
    await era.printAndWait([
      urara.get_uma_sex_title(),
      'A 「꼭…… 다음이 있을 거야……!」',
    ]);
    await urara.print_and_wait([
      '「이따가 봐」라는 말을 남기고, ',
      urara.sex,
      '는 무언가를 숨기려는 듯 서둘러 몸을 돌려 떠나갔어.',
    ]);
    await urara.print_and_wait([
      '하지만 겉으로는 평소처럼 돌아온 듯 보였으나, ',
      urara.sex,
      '의 뒷모습은 마치 활력이 다 빠져나간 듯 가냘퍼 보였어.',
    ]);
    await urara.print_and_wait([
      urara.sex,
      '의 두 다리는 너무 오래 주저앉아 있었던 탓인지 마비된 듯 보였고, 비틀거리는 모습은 더욱 「넋이 나간」 것처럼 느껴져.',
    ]);
    await urara.print_and_wait([
      '우라라는 저 애의 그런 모습은 처음 봤어. 방금 전의 너무 슬픈 표정도, 지금 떠나는 실망한 뒷모습도.',
    ]);
    await urara.print_and_wait([
      '하지만 드디어 생각났어. ',
      urara.sex,
      '의 지금 모습은, 인생의 마지막 어떤 기회를 놓쳐버린 뒤에도 억지로 태연한 척하는 모습 같아……',
    ]);
    await urara.print_and_wait(
      '왠지 돌이킬 수 없는 일이 벌어진 것 같은 느낌이야. 우라라가 너무 예민한 걸까?',
    );
    await urara.print_and_wait([
      '하지만 ',
      urara.sex,
      '의 말대로 곧 무대 공연이 시작되니까, 남은 일은 공연이 끝난 뒤에 생각하자!',
    ]);
    await urara.print_and_wait([
      '뺨을 톡톡 쳐서 다시 기운을 차린 뒤, 나도 ',
      urara.sex,
      '의 뒷모습을 쫓아 라이브 대기실로 달려갔어.',
    ]);
    await urara.print_and_wait([
      '힘찬 발소리와 함께 앞서가던 ',
      urara.sex,
      '는 다시 활기찬 모습으로 돌아온 듯 보였지만...',
    ]);
    await urara.print_and_wait(
      '우라라가 잘못 본 걸까? 분명 내가 너무 예민했던 거겠지…… 응, 분명 그럴 거야……',
    );
    era.drawLine();
    await era.printAndWait([
      '오늘 라이브는 꽤 순조로웠다. 무대 뒤편에서 상점가와 응원단 사람들이 있는 관객석으로 돌아오며, ',
      me.get_colored_name(),
      '는 안도하며 생각했다.',
    ]);
    await era.printAndWait([
      '그렇다. 몇 등을 하든 어떤 위치에 서든, ',
      urara.get_colored_name(),
      '는 자신의 최고의 미소를 모두에게 보여줄 수 있다.',
    ]);
    await era.printAndWait([
      '그래서 다들 ',
      urara.get_colored_name(),
      '를 좋아하는 것이다. 지더라도, 우승하지 못하더라도 여전히 활기차게 웃는 ',
      urara.sex,
      '를 모두가 아끼고 있었다.',
    ]);
    await era.printAndWait([
      '게다가 매번은 아닐지라도, 지금의 ',
      urara.sex,
      '는 의심할 여지 없이 승리할 수 있는 실력을 갖추고 있다.',
    ]);
    await era.printAndWait([
      '상점가 사람 A 「……우라라, 정말 열심히 하네. 예전에 했던 걱정도 이제 덜어도 되겠어.」',
    ]);
    await era.printAndWait([
      '상점가 사람 B 「그러게 말이야. 마음속으론 그냥 즐겁기만 하면 된다고 생각하면서도, 그런 생각들이 도리어 ',
      urara.sex,
      '의 발목을 잡는 건 아닐까 싶었거든.」',
    ]);
    await era.printAndWait([
      '상점가 사람 C 「이제 우리 우라라도 많이 성장했어. 나도 이번 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '에서 ',
      urara.sex,
      '의 웃는 얼굴을 보고 싶구먼.」',
    ]);
    await era.printAndWait([
      '뒤에서 조용히 귀를 기울이니, ',
      urara.get_colored_name(),
      '를 지지하는 사람들도 공연을 보며 무언가 이야기를 나누고 있었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '의 전략이 서서히 맞아떨어지는 듯했다. 계속해 나간다면 ',
      urara.get_colored_name(),
      '를 응원하는 사람들도 결국 ',
      urara.sex,
      '의 전진을 인정하게 될 것이다.',
    ]);
    await era.printAndWait([
      '어려움이 뜻하지 않게 해결되어 가는군…… 어쨌든 이 일을 기억해 뒀다가, 돌아가는 길에 ',
      urara.get_colored_name(),
      '에게 몰래 기쁜 소식을 전해줘야겠다.',
    ]);
    await era.printAndWait([
      '상점가 사람 A 「근데 우라라의 마지막 목표가 ',
      race_infos[race_enum.arim_kin].get_colored_name(),
      '이라던데, 그 레이스는 선발 기준이 꽤 엄격하잖아.」',
    ]);
    await era.printAndWait(
      '상점가 사람 C 「우리가 도와줄 방법은 없을까? 그냥 지켜보기만 하려니 마음이 편치 않아서 그래.」',
    );
    await era.printAndWait(
      '상점가 사람 D 「사실 나한테 생각이 하나 있어. 예전에 우리가 상점가를 살리기 위해 했던 것처럼……」',
    );
    if (RaceHistory.get(52).get_result(47 + 48)?.race === race_enum.arim_kin) {
      await era.printAndWait(
        '상점가 사람 C 「백지장도 맞들면 낫다는 건가? 하지만 우라라는 이미 한 번 선발된 적이 있는데, 굳이 그럴 필요가 있을까?」',
      );
      await era.printAndWait(
        '상점가 사람 D 「확실히 기우일지도 모르지. 하지만 만약을 대비해서 나쁠 건 없잖아, 상대는 그 아이니까……」',
      );
    }
    await era.printAndWait(
      '응? 이건 또 무슨 소리지? 설마 다들 나 몰래 다른 일을 꾸미고 있는 건가?',
    );
    await era.printAndWait([
      '직감이 ',
      me.get_colored_name(),
      '에게 이것이 아주 중요한 일이라고 말하고 있었다. 하지만 ',
      me.get_colored_name(),
      '이(가) 더 자세히 들으려 다가갔을 때, 고개를 들어보니 라이브는 이미 끝나가고 있었다.',
    ]);
    await era.printAndWait([
      '사람들이 나누는 이야기가 신경 쓰였지만, ',
      urara.get_colored_name(),
      '의 상태를 제때 확인하기 위해 ',
      me.get_colored_name(),
      '은(는) 곧바로 대기실로 달려갔다.',
    ]);
    await era.printAndWait([
      '무대 위에서 보인 ',
      urara.get_colored_name(),
      '의 알아채기 힘든 부자연스러운 미소, 「',
      urara.sex,
      '」의 빈번한 등장, 그리고 레이스 전에 보았던 그 어두운 표정의 ',
      urara.get_child_sex_title(),
      '.',
    ]);
    await era.printAndWait(
      '지금은 사람들의 사적인 대화조차 불안한 느낌을 준다. 어째서지, 요즘 왜 이렇게 예민해진 걸까?',
    );
    await era.printAndWait(
      '미래의 어느 날 무언가 일이 벌어질 것만 같은 예감이 든다. 부디 기우이기를 바랄 뿐이다……',
    );
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('잠시 저와 편하게 이야기 좀 나누실 수 있나요?');
    await in_urara.say_as_unknown_and_wait([
      '그러고 보니 트레이너 ',
      me.get_adult_sex_title(),
      '도 잘 알고 계시죠, ',
      urara.get_uma_sex_title(),
      '가 달리면서 쌓아온 부상은 치료하기가 무척 어렵다는 것을요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '타고난 신체 구조와 체질적인 요인, 그리고 아직 설명할 수 없는 많은 현상 때문이죠.',
    );
    await in_urara.say_as_unknown_and_wait(
      '게다가 프로 레이스 우마무스메는 종종 신체 부하를 넘어서야 하기에, 그렇게 발생한 부상은 일반적인 방법으로는 거의 치료가 불가능합니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '왜 갑자기 이런 이야기를 하느냐고요? 아뇨, 그냥 우라라는 지금까지 참 운이 좋았다는 생각이 들어서요.',
    );
    await in_urara.say_as_unknown_and_wait([
      '계속해서 ',
      urara.sex,
      '를 잘 보살펴 주세요. ',
      urara.sex,
      '마저 길 위에서 미아가 되지 않도록……',
    ]);
  };
};