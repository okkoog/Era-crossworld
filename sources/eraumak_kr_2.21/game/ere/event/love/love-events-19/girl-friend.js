const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const print_event_name = require('#/event/snippets/print-event-name');

const AgLifeMarks = require('#/data/event/life-event-marks/life-event-marks-19');

/**
 * @param {CharaTalk} digital
 * @param {CharaTalk} me
 * @param {string} callname
 */
module.exports = async (digital, me, callname) => {
  const life_marks = new AgLifeMarks();
  if (life_marks.again_74) {
    await print_event_name(
      '한 번으로 안 되면 두 번, 이건 당연한 거 아닌가요!!',
      digital,
    );
    await digital.print_and_wait(
      '디지땅은 디지땅은, 시간이 꽤 흘러서 드디어 고통의 심연에서 빠져나왔지만!',
    );
    await digital.print_and_wait(
      '하지만 그렇게 생각하니 역시! 역시 좋아! 역시 너무너무 좋아!',
    );
    await digital.print_and_wait('그러니까 다시 한 번 더! 이번에야말로 디지땅은 꼭 성공할 거야!');
    era.print(['다시 한 번, ', me.get_colored_name(), '의 선택은 :']);
    era.printButton('받아들인다', 1);
    era.printButton('거절한다', 2);
    if ((await era.input()) === 1) {
      await digital.print_and_wait('우아아아아앙! 해냈어!!');
      await digital.print_and_wait('왜냐고요?');
      await digital.print_and_wait('그건 중요하지 않아. 성공했다는 게 중요한 거지!');
      await sys_love_uma_in_event(19);
    } else {
      await digital.print_and_wait('아니, 이건 아니지 않아?');
      await digital.print_and_wait('으아아아아, 안 돼!');
      await digital.print_and_wait('디지땅이라도, 나에게도 자존심이라는 게 있다구!');
      await digital.print_and_wait('반드시, 쟁취하고 말겠어!');
      era.set('cflag:19:호감거절', 74);
      await punish_rejecting_love(19);
    }
  } else {
    life_marks.again_74 = 1;
    await print_event_name('기록', digital);
    await digital.print_and_wait([
      '오늘은 무척이나 기대되던 신인 ',
      digital.get_uma_sex_title(),
      '쨩 선발 레이스날이다! 다시금 여신님들의 끝없는 잠재력에 감탄하게 되네!',
    ]);
    await digital.print_and_wait([
      '그리고…… 이상한 사람을 만났어! 만났다고 해야 할지 이상하다고 해야 할지…… 아무래도 ',
      me.sex,
      '는 동지인 것 같네.',
    ]);
    digital.print('……');
    await digital.print_and_wait(
      '\n바로 오늘, 디지땅은 드디어 잔디를 달릴지 더트를 달릴지에 대한 문제를 해결했다구! 이따가 작게 자축할 가치가 있지만, 일단 지금은 기록부터 해야겠어.',
    );
    await digital.print_and_wait([
      '세상에. 바로 저번에 그 사람이 완벽한 방안을 내놓았지 뭐야! 정말 자다가 봉창 두드리는 격으로 깨달음을 얻었다니까.',
    ]);
    await digital.print_and_wait([
      '결국, 나는 ',
      me.sex,
      '의 권유에 응해서 ',
      me.sex,
      '의 담당 ',
      digital.get_uma_sex_title(),
      '가 되기로 계약을 맺었어.',
    ]);
    digital.print('……');
    await digital.print_and_wait([
      { isBr: true },
      '정말 뜻밖이네. 설마 ',
      callname,
      '이(가) 나와 함께 응원 활동을 하러 가주다니!',
    ]);
    await digital.print_and_wait(
      '내 페이스를 따라올 수 있는 사람이 있을 거라고는 전에는 단 한 번도 생각해 본 적 없었는데!',
    );
    await digital.print_and_wait('그리고 정말 많은 곳을 갔었지, 다시 회상해 보면……');
    await digital.print_and_wait([
      '지금 생각하니 역시 마지막에 ',
      callname,
      '의 안색이 그리 좋지 않아 보였지. 엄청 지쳐 보였었어.',
    ]);
    await digital.print_and_wait([
      '하지만 그럼에도 불구하고, ',
      callname,
      '은(는) 「동지」라는 칭호를 받을 자격이 충분해!',
    ]);
    digital.print('……');
    await digital.print_and_wait(
      '\n그리고 정말 많은 곳을 갔었지, 또 왔다 또 왔어, 성지순례! ……',
    );
    await digital.print_and_wait(
      '최애들이 갔던 장소, 최애들에게 중요한 의미가 있는 장소에 가서 최애들의 행동을 따라 하는 활동!',
    );
    await digital.print_and_wait([
      '세상에나, ',
      callname,
      '가(이) 내 초대에 응해서 나랑 고생해 주다니.',
    ]);
    await digital.print_and_wait(
      '이것은 마치 도버 해협 같은 공명, 심장이 파열될 것 같은 공진!',
    );
    await digital.print_and_wait([
      '게다가 게다가, ',
      callname,
      '가(이) 아는 게 그렇게 많을 줄이야! 내가 전혀 몰랐던 최애들에 관한 지식까지! 역시 난 모두좋아 실격인 걸까……',
    ]);
    await digital.print_and_wait([
      '마지막에는 ',
      callname,
      '에게 한계 돌파 발언을 해버렸어! 우주에 내 한계 발언을 들어줄 사람이 또 있을 줄은 정말 꿈에도 몰랐기에 감동해서 몸 둘 바를 모르겠어……',
    ]);
    digital.print('……');
    await digital.print_and_wait([
      { isBr: true },
      '여름 합숙이 다가오고 있네. 그때가 되면 수영복을 입은 ',
      digital.get_uma_sex_title(),
      '쨩들을 볼 수 있겠지!',
    ]);
    await digital.print_and_wait([
      '태양빛 아래에서 태양보다 더 눈부신 건—— 바로 ',
      digital.get_uma_sex_title(),
      '쨩이지!',
    ]);
    await digital.print_and_wait('튀어 오르는 수박은 과연 누구의 솜씨일까.');
    await digital.print_and_wait('광속의 배구공은 과연 누가 받아낼까.');
    await digital.print_and_wait([
      '그리고 빙수, 해산물, 이 모든 것들이 ',
      digital.get_uma_sex_title(),
      '쨩들을 더욱 빛나게 해주겠지!',
    ]);
    await digital.print_and_wait(['그때가 되면 ', callname, '를(을) 초대해서 같이 놀러 가야겠어!']);
    await digital.print_and_wait('……아');
    await digital.print_and_wait([
      '(노트북 앞에 앉아 있던 분홍색 ',
      digital.get_teen_sex_title(),
      '가 펜을 멈췄다.)',
    ]);
    await digital.say_and_wait('나 혹시, 계속 내 생각만 하고 있는 건가……');
    digital.print('……');
    await digital.print_and_wait([
      { isBr: true },
      '만약 이기심과 ',
      digital.get_uma_sex_title(),
      '를 저울질한다면, 저울은 분명 오른쪽으로 기울겠지만.',
    ]);
    await digital.print_and_wait([
      '만약 ',
      digital.get_uma_sex_title(),
      '와 ',
      callname,
      '를(을) 저울질한다면?',
    ]);
    await digital.print_and_wait(
      '인정하기 어렵지만 디지땅은, 지금까지의 행동을 보면 마음속의 저울이 전부 왼쪽으로 기울어버려.',
    );
    await digital.print_and_wait([
      '그러니까 적어도 내일 여름 합숙에서는 ',
      callname,
      '를(을) 위해 ',
      callname,
      '가(이) 하고 싶은 일을 해줘야겠어.',
    ]);
    digital.print('……');
    await digital.print_and_wait('\n어떻게 써야 할까……');
    await digital.print_and_wait('사실 지금 다시 회상해도 너무 부끄러워……');
    await digital.print_and_wait(
      '디지땅은 정말로 처음 알았어. 누군가 나를 이렇게까지 밀어줄 수 있다는 걸, 그것도 다름 아닌 나의 트레이너가.',
    );
    digital.print('——');
    await digital.print_and_wait('사실 그날부터 기분이 좀 이상해진 것 같아……');
    await digital.print_and_wait([
      callname,
      '를(을) 보기만 해도 벌써 안절부절못하게 돼서 어쩌면 좋을지.',
    ]);
    await digital.print_and_wait(
      '알고 있어, 대충은 알고 있다구. 그러니까 심장의 고동을 느끼느냐, 아니면 그 목소리를 무시하느냐겠지?',
    );
    digital.print('……');
    await digital.print_and_wait([
      '\n고백하지 않을 수 없겠어. 나는 ',
      callname,
      '에게 마음이 생겼어. 맞아. 사랑이라는 감정 말이지.',
    ]);
    await digital.print_and_wait('사실 이렇게 자세히 생각해보면 뭔가 좀 이상하지 않나?');
    await digital.print_and_wait([
      '디지땅, 생각해보라구. ',
      callname,
      '와(과) 함께 응원 활동을 하러 가고,',
    ]);
    await digital.print_and_wait(
      '함께 외출하고, 함께 영화를 보고, 함께 축제를 구경하고, 해변에서 감정을 나누고……',
    );
    await digital.print_and_wait('이상하지?');
    await digital.print_and_wait('이거 그냥 데이트잖아?!');
    await digital.print_and_wait('（물론 데이트가 꼭 그런 뜻만은 아니지만.）');
    await digital.print_and_wait([
      '설마 사실 이미 ',
      callname,
      '와(과) 사귀고 있는데, 그냥 잊어버린 것뿐인 걸까?!',
    ]);
    digital.print('……');
    await digital.print_and_wait(
      '\n큰일이다 큰일이야, 어제 기록을 안 했더니 오늘 생각나서 모든 게 큰일 났다는 걸 깨달았어!',
    );
    await digital.print_and_wait('이제 어쩌면 좋지……');
    digital.print('……');
    await digital.print_and_wait('\n오늘,');
    await digital.print_and_wait([
      '또 ',
      callname,
      '와(과) 함께 성지순례를 갔어. ',
      digital.get_uma_sex_title(),
      '쨩들은 여전히 그렇게나 눈부셨지만,',
    ]);
    await digital.print_and_wait([
      callname,
      '와(과) 함께 앉아 있으면 자꾸만 안절부절못하며 ',
      callname,
      '를(을) 훔쳐보게 돼서……',
    ]);
    await digital.print_and_wait([
      '지금 다시 생각해보니 정말 꽤 잘생겼더라구. 게다가 ',
      callname,
      '의 그 정신은 나조차 존경스러울 정도!',
    ]);
    await digital.print_and_wait('……결정했어.');
    digital.print('……');
    await digital.print_and_wait(
      '\n오늘은 평소와 다르게 아침에 일기를 쓰고 있어.',
    );
    await digital.print_and_wait(
      '디지땅, 넌 할 수 있어! 아, 아니지, 생각해보니까 나 매력이 전혀 없잖아?',
    );
    await digital.print_and_wait(
      '빈약한 몸매…… 그야말로 자그마한 키…… 평소 행동조차 그저 평범한……',
    );
    await digital.print_and_wait('아니, 평범하기보다 변태 같잖아!');
    await digital.print_and_wait([
      '우마무스메 이야기만 나오면 봇물 터지듯 말하고, 익숙한 주제만 나오면 말 속도가 계속 빨라지고, 이거 완전 변태 아닌가?',
    ]);
    await digital.print_and_wait([
      '아니, ',
      callname,
      ' 말고는 정말 내가 다른 사람이랑 사귀는 게 가능이나 할까?',
    ]);
    await digital.print_and_wait([
      callname,
      '를(을) 만난 건 정말이지 최고의 행운. 즉, 이번 기회를 놓치면 다음은 없다는 뜻이지! 나를 이렇게까지 잘 이해해 주고 친절하게 대해줄 사람은 다시는 찾을 수 없을 거야!',
    ]);
    await digital.print_and_wait('디지땅, 디지땅, 너 지금 당장 행동해야 해!');
    await digital.print_and_wait(
      '이번 기회를 놓치면 아마 남은 평생 동안 베개를 붙잡고 이불 뒤집어쓴 채 울부짖게 될걸?',
    );
    await digital.print_and_wait([
      callname,
      '도 나를 좋아하는 거겠지? 그렇지 않다면 저랑 같이 응원하러 가주지도 않았을 거잖아?',
    ]);
    await digital.print_and_wait('좋아 좋아 좋아, 성공 확률이 꽤 높다구!');
    await digital.print_and_wait('가자 가자 가자, 더 이상 기다리지 말자구!');
    era.drawLine();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 휴대폰을 확인했다. 평소라면 ',
      digital.get_colored_name(),
      '이 한참 전에 트레이닝을 시작했을 시간이다. 비록 정식 트레이닝 시간 전이긴 하지만……',
    ]);
    await era.printAndWait([
      '최근 ',
      digital.get_colored_name(),
      '의 행동을 돌이켜 보았다. 지난번 해변에서의 대화 이후로 ',
      digital.get_colored_name(),
      '은 점차 ',
      me.get_colored_name(),
      '에게 더 신경을 쓰는 듯 보였다.',
    ]);
    await era.printAndWait([
      digital.sex,
      '가 ',
      digital.get_uma_sex_title(),
      '쨩들을 응원하는 것 말고도 고민이 꽤 많은 모양이다.',
    ]);
    await era.printAndWait([
      '생각에 잠겨 있을 때 ',
      digital.get_colored_name(),
      '이 멀리서 달려오고 있었다.',
    ]);
    await era.printAndWait('음? 왜 얼굴이 저렇게 빨갛게 상기되어 있지?');
    await era.printAndWait(
      '설마 어디 다쳐서 저러는 건 아니겠지? 오늘도 평소보다 조금 늦었고.',
    );
    await me.say_and_wait('디지털! 당장 멈춰!');
    await digital.say_and_wait('에?!');
    await era.printAndWait([
      '놀라서 멈춰 선 ',
      digital.get_colored_name(),
      '의 앞으로 빠르게 달려갔다.',
    ]);
    await era.printAndWait([
      '당신은 몸을 숙여 ',
      digital.get_colored_name(),
      '의 다리 상태를 자세히 살폈다.',
    ]);
    await digital.say_and_wait(['저기…… ', callname, '?']);
    await era.printAndWait('음…… 적어도 붓거나 붉어진 곳은 보이지 않는데……');
    await me.say_and_wait('혹시 다리를 다친 거니? 보건실에 가야 할까?');
    await digital.say_and_wait('에?');
    await era.printAndWait([
      '큰일이군, ',
      digital.get_colored_name(),
      '은 아직 인지하지 못한 모양이다. 아무래도 먼저 확인을 좀 해봐야겠다.',
    ]);
    await era.printAndWait(
      '먼저 무릎을 확인한다. 왼손으로 튀어나온 외측을 잡고 오른손으로 안쪽 인대를 가볍게 눌러본다. 음, 뻣뻣한 느낌은 없다.',
    );
    await digital.say_and_wait('저기, 그러니까……');
    await era.printAndWait(
      '다음은 허벅지, 대퇴이두근과 대퇴직근 모두 잘 이완된 좋은 상태다.',
    );
    await digital.say_and_wait('일단 좀…… 멈춰주실래요?');
    await me.say_and_wait('어떻게 멈춰!');
    await era.printAndWait('이어서 종아리, 비복근 상태도 완벽해 보이는군.');
    await era.printAndWait(
      '마지막은 발. 이건 일단 신발을 벗어야 한다. 하지만 이대로 그냥 벗겼다가 상처라도 있으면 2차 부상을 초래할 텐데……',
    );
    await digital.say_and_wait([callname, '! 저 아무 문제 없다니까요!']);
    await me.say_and_wait('그럼 오늘 왜 그렇게 상태가 이상한 거야?');
    await era.printAndWait([
      '반쯤 쪼그려 앉은 채로 고개를 들어 ',
      digital.get_colored_name(),
      '의 얼굴을 쳐다보니, 얼굴이 더욱 붉게 달아오른 것 같았다.',
    ]);
    await digital.say_and_wait('그게 말이죠…… 일단! 일단 트레이닝실에 가서 설명할게요!');
    await me.say_and_wait('하지만……');
    await digital.say_and_wait('……');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 아무 말 없이 ',
      me.get_colored_name(),
      '을(를) 빤히 바라보았다.',
    ]);
    era.drawLine();
    await me.say_and_wait('자, 이제 설명해 줄래? 다리는 정말 괜찮은 거지?');
    await digital.say_and_wait('그게요…… 먼저 말씀드리자면, 다리는 정말 아무 문제 없어요.');
    await me.say_and_wait('……그럼 대체 왜……');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 고개를 숙인 채 손가락을 만지작거리며 한 마디씩 어렵게 내뱉었다.',
    ]);
    await digital.say_and_wait('사실…… 제가…… 그때부터…… 에잇……');
    await era.printAndWait([
      '말을 하다 말고 ',
      digital.get_colored_name(),
      '은 다시 한숨을 내쉬었다.',
    ]);
    await me.say_and_wait('차라리 내가 먼저 이야기를 꺼내볼까.');
    await me.say_and_wait('여기서 말하긴 좀 그러니 같이 밖으로 나가자.');
    await digital.say_and_wait('……아.');
    await era.printAndWait(
      '자리에서 일어나 트레이닝실 문을 열고 경기장으로 나가 관중석으로 올라갔다.',
    );
    await era.printAndWait([
      '코스, 아침 햇살은 부지런히 훈련하는 ',
      digital.get_uma_sex_title(),
      '에게 최고의 커피나 다름없다.',
    ]);
    await digital.say_and_wait(['저기, ', callname, '?']);
    await me.say_and_wait('다음 장소로 가자.');
    await digital.say_and_wait('네?');
    await era.printAndWait([digital.get_colored_name(), '이 뒤따라왔다.']);
    await era.printAndWait('강변, 정오의 햇살 아래 강물이 눈부시게 반짝인다.');
    await digital.say_and_wait([callname, ', 혹시 하려는 말이……']);
    await era.printAndWait('신사, 오후의 어른거리는 나무 그림자가 참배객들을 가려준다.');
    await digital.say_and_wait('……');
    await era.printAndWait('공원, 해가 지기도 전에 가로등이 서둘러 자리를 대신한다.');
    await digital.say_and_wait('……');
    await era.printAndWait('바닷가, 조명 없는 푸른 해안선은 오직 달빛에만 의지하고 있다.');
    await digital.say_and_wait('……');
    await digital.say_and_wait('한 바퀴를 쭉 따라오니, 이제는 아무래도 상관없다는 기분이 드네요.');
    await me.say_and_wait('그럼 됐어.');
    await digital.say_and_wait([callname, '.']);
    await me.say_and_wait('응.');
    await digital.say_and_wait('좋아해요.');
    era.print(['이 순간, ', me.get_colored_name(), '의 선택 :']);
    era.printButton('받아들인다', 1);
    era.printButton('거절한다', 2);
    const ret = await era.input();
    await digital.print_and_wait([
      '정말 꼴불견이네. 설마 고백까지 ',
      callname,
      '가(이) 유도하게 만들다니.',
    ]);
    if (ret === 1) {
      await digital.print_and_wait('하지만, 성공했어.');
      await digital.print_and_wait('맞아. 성공했다구.');
      await digital.print_and_wait(
        '원래대로라면 더 날뛰며 기뻐해야 할 텐데, 지금은 그저……',
      );
      await digital.print_and_wait('넘쳐흐르는 행복감뿐이야.');
      await sys_love_uma_in_event(19);
    } else {
      await digital.print_and_wait('아하하하, 결국은 실패네.');
      await digital.print_and_wait([
        '하지만 알 것 같아. 나와 ',
        callname,
        '의 관계가 단순히 남녀 관계 그 이상이라는 걸.',
      ]);
      await digital.print_and_wait('이 안에는 더욱 복잡한 감정이 얽혀 있는 거겠자……');
      await digital.print_and_wait(
        '생각한 건 많고, 쓰고 싶은 것도 정말 많은데 도저히 펜이 움직이질 않아…… 일기장이 다 젖어버렸네……',
      );
      await digital.print_and_wait('역시 좀 분해……');
      era.set('cflag:19:호감거절', 74);
      await punish_rejecting_love(19);
    }
  }
};