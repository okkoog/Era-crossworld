const era = require('#/era-electron');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const print_event_name = require('#/event/snippets/print-event-name');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[-1] = async (daiya, me, flags) => {
    await print_event_name('나를 이루는 존재', daiya);
    const kita = get_chara_talk(68);
    await era.printAndWait(
      `데뷔전이 끝난 후, ${me.name}과(와) 사토노 다이아몬드는 다음 목표에 대해 논의했다.`,
    );
    await era.printAndWait(
      `「G1에서 우승할 수 있는 명문 ${daiya.get_uma_sex_title()}가 되는 것. 이 목표를 고려하면, 주니어급 G1 레이스에 나가는 것이 적절해 보였는데──`,
    );
    era.printButton('「다음 레이스에 대해서 생각해 둔 게 있니?」', 1);
    await era.input();
    await daiya.say_and_wait('저는 클래식 3관에 도전하고 싶어요.');
    era.printButton('「주니어급 G1 레이스는 선택하지 않는 거야?」', 1);
    await era.input();
    await daiya.say_and_wait(
      'G1에서 승리하는 것은 물론 저의 목표이지만, 그것은 과정에 불과해요.',
    );
    await daiya.say_and_wait(
      `사토노 가문이 바라는 『명문 ${daiya.get_uma_sex_title()}』란, ${daiya.get_uma_sex_title()} 계의 발전을 지탱할 수 있는 ${daiya.get_uma_sex_title()}예요.`,
    );
    await daiya.say_and_wait(
      `아시다시피, 사토노 가문은 ${daiya.get_uma_sex_title()} 계에 공헌하기 위해 오랜 세월 운영 지원과 다양한 자선 활동에 전념해 왔어요.`,
    );
    await daiya.say_and_wait(
      `『G1 레이스에서 우승할 수 있는 명문 ${daiya.get_uma_sex_title()}』를 많이 배출하는 것 또한 ${daiya.get_uma_sex_title()} 계를 지탱하는 공헌 중 하나죠.`,
    );
    await daiya.say_and_wait(
      `제 목표는 ${daiya.get_uma_sex_title()} 계와 레이스 문화 그 자체를 내부에서부터 지탱하는 존재가 되는 거예요.`,
    );
    await daiya.say_and_wait(
      `그렇다면 저는 가장 정통적인 길을 걸어야 한다고 생각해요. 제가 출주함으로써 클래식 3관이 더욱 분위기가 달아오른다면, 그것 또한 ${daiya.get_uma_sex_title()} 계에 대한 공헌이 될 테니까요.`,
    );
    await daiya.say_and_wait([
      ' 가능하다면 만전의 상태로 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '에 도전하고 싶어요.',
    ]);
    era.printButton('「다음 목표는 『사츠키상』인 거니?」', 1);
    await era.input();
    await era.printAndWait(
      '만전의 상태로 조정하려면 확실히 주니어급 레이스를 우선하기보다 「사츠키상」을 목표로 잡는 것이 더 적절했다.',
    );
    await daiya.say_and_wait('네. 트레이너 님은 어떻게 생각하시나요?');
    era.printButton('「알았어」', 1);
    await era.input();
    await era.printAndWait(
      `반대할 이유가 없었다. 클래식 3관에서 승리할 수 있다면 G1 우승은 당연히 따라오는 결과이기 때문이다. 그건 그렇고──`,
    );
    await daiya.say_and_wait('……무슨 일이신가요? 제 얼굴을 그렇게 빤히 보시고.');
    era.printButton('「그저, 너는 항상 신념이 확고하다는 생각이 들어서」', 1);
    await era.input();
    await daiya.say_and_wait(
      '목표에 대해서 말씀하시는 건가요? 그것이 제가 이 세상에 태어난 이유니까요. 의심할 여지가 없답니다.',
    );
    await daiya.say_and_wait(
      `……그러고 보니, 저와 부모님이 왜 그토록 명문 ${daiya.get_uma_sex_title()}에 집착하는지 아직 말씀드리지 않았었네요.`,
    );
    await daiya.say_and_wait(
      `방금 말씀드린 것처럼, 사토노 가문은 ${daiya.get_uma_sex_title()} 계의 발전에 열정을 쏟아왔지만, 지금까지 명문 ${daiya.get_uma_sex_title()}를 배출한 경험은 단 한 번도 없었어요.`,
    );
    await daiya.say_and_wait(
      `과거 사토노 가문의 ${daiya.get_uma_sex_title()}들 중에는 G1 레이스에서 승리한 분이 아무도 없었거든요.`,
    );
    await daiya.say_and_wait('그것이 시간이 흐르면서 『사토노 가문의 저주』라고 불리게 되었죠.');
    await daiya.say_and_wait(
      `게다가 한동안은 계속 남자아이만 태어나서, 가문에 새로운 ${daiya.get_uma_sex_title()}가 탄생하지 않는 시기도 길었어요……`,
    );
    await daiya.say_and_wait(
      `심지어 사토노 가문 내부에서도 ${daiya.get_uma_sex_title()}가 태어나지 않는 것조차 저주 때문이라고 생각했을 정도였죠.`,
    );
    await daiya.say_and_wait(
      `그리고 제가 바로 그 저주를 깨고 태어난 ${daiya.get_uma_sex_title()}예요──`,
    );
    await daiya.say_and_wait('사토노 가문의 꿈을 실현하기 위해 태어난 것이 바로 저예요.');
    await daiya.say_and_wait(
      '게다가 저희 부모님은 사토노 그룹의 핵심 인물이셔서, 어릴 때부터 정말 많은 지원과 도움을 받았어요.',
    );
    await daiya.say_and_wait('사토노 가문 모든 분의 기대가 있었기에 지금의 제가 있는 거랍니다.');
    await daiya.say_and_wait('──이것은 곧 저의 정신적 지주이기도 해요!');
    await daiya.say_and_wait(
      '그래서 저는 사토노 가문의 기대에 부응하고 싶어요. 이것이 제 꿈이에요! 절대로 흔들리지 않아요!',
    );
    await daiya.say_and_wait(
      `사토노 가문의 ${daiya.get_uma_sex_title()}는 G1에서 이길 수 없다는 저주, 저라면 깰 수 있어요──`,
    );
    await daiya.say_and_wait('클래식 3관을 제패해서 그것을 증명해 보이겠어요!');
    era.printButton('「알았어, 그럼 클래식 3관을 목표로 하자」', 1);
    await era.input();
    await daiya.say_and_wait('감사합니다! 그럼 우리의 첫 번째 관문은 『사츠키상』이 되겠네요.');
    await era.printAndWait([
      '클래식 3관에 도전하기로 결정했다면, ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '보다 거리가 긴 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '와 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '에 대한 대비도 철저히 해야 한다.',
    ]);
    await era.printAndWait([
      `지금부터 시작한다면 충분히 준비할 시간이 있다. ${me.get_couple_title()}은 더 먼 미래의 목표를 구상하며, 내년의 `,
      race_infos[race_enum.sats_sho].get_colored_name(),
      '을 향해 준비를 시작했다.',
    ]);
    era.drawLine();
    await daiya.say_and_wait('──준비 운동은 끝났어요. 첫 번째 훈련 항목은……');
    await kita.say_and_wait('아────!! 다이아짱, 다이아짱!');
    await daiya.say_and_wait('와왓! 키타짱 무슨 일이야? 왜 그렇게 허둥지둥……');
    await kita.say_and_wait('저기 말이야, 나 봤어! 다이아짱의 데뷔전 봤다구!!');
    await kita.say_and_wait(
      '직접 보러 가지는 못했지만, 레이스 영상으로 봤어! 정말로 초～～～급 흥분했었다니까!',
    );
    await kita.say_and_wait(
      '기숙사 큰 TV로 다 같이 봤어! 나도 모르게 TV를 향해 『다이아짱 힘내──!』라고 소리 질러버렸지 뭐야.',
    );
    await kita.say_and_wait('너무 크게 소리 지르는 바람에 다들 한소리 하더라.');
    await kita.say_and_wait('하지만 다이아짱의 그 레이스는 정말 손에 땀을 쥐게 할 정도로 멋졌어!');
    await daiya.say_and_wait('후후, 딱 키타짱다운 행동이네. 응원해 줘서 고마워!');
    await kita.say_and_wait(
      '뭐랄까…… 내 데뷔전 때와는 또 다른 기쁨이 느껴졌어. 가슴이 두근거려서 견딜 수 없었거든!',
    );
    await kita.say_and_wait(
      '레이스 중인 다이아짱의 표정은 학원에서 모의 레이스나 병주 연습을 할 때랑은 완전히 달랐어……',
    );
    await kita.say_and_wait(
      '그때서야 비로소, 아아, 다이아짱이 정말로 나와 같은 곳에 왔구나…… 하는 실감이 났어.',
    );
    await kita.say_and_wait('……다이아짱, 데뷔전 성공 축하해!');
    await daiya.say_and_wait('응, 많이 기다리게 했지…… 키타짱!');
    await kita.say_and_wait(
      '헤헤, 다이아짱이 내 뒤를 쫓아오기 시작한다고 생각하니 나도 더 열심히 해야겠는걸!',
    );
    await kita.say_and_wait([
      '나는 비록 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '과 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '는 놓쳤지만, ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '은 반드시 이길 거야!!',
    ]);
    await kita.say_and_wait('다이아짱의 언니로서, 내가 먼저 G1 승리를 따내야 하니까!');
    await daiya.say_and_wait('내 다음 목표도 클래식 3관이야.');
    await kita.say_and_wait('에엣!? 정말로!?');
    await daiya.say_and_wait([
      '응, 그러니까 키타짱이 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '에서 보여줄 활약…… 제대로 참고하게 해줘.',
    ]);
    await kita.say_and_wait(
      '으으～! 그럼 더더욱 질 수 없겠네! 절대로 나쁜 본보기가 될 수는 없지!',
    );
    await kita.say_and_wait('그럼 난 먼저 훈련하러 갈게! 나중에 봐, 다이아짱!');
    await daiya.say_and_wait('나도 내 레이스에 최선을 다할게! 조금만 더 기다려 줘!');
    await kita.say_and_wait('좋아──! 그럼 우리 둘 다 파이팅이야!');
    await era.printAndWait(
      '키타산 블랙은 바람처럼 빠르게 떠나갔다. 대화만으로도 상대에게 활력을 주는 신기한 소녀였다.',
    );
    era.printButton('「너희들…… 언젠가 함께 달리기로 약속했었지」', 1);
    await era.input();
    await daiya.say_and_wait(
      '네, 어릴 적에 한 약속이에요. 우리, 계속 함께 달리자고 약속했거든요.',
    );
    await daiya.say_and_wait(
      '키타짱은 제가 만난 또래들 중에서 처음으로 저보다 『강한』 사람이었어요.',
    );
    await daiya.say_and_wait(
      '우리는 그 후로 단짝 친구가 되었죠…… 키타짱은 바깥 세상을 잘 몰랐던 저를 여기저기 데리고 다녀줬어요.',
    );
    await daiya.say_and_wait(
      '저는 항상 제 앞에서 달려가는 키타짱의 뒤를 쫓아서, 계속, 계속 그녀의 발자취를 따라갔어요……',
    );
    await daiya.say_and_wait('그녀를 따라잡고 싶다, 추월하고 싶다. 어릴 때부터 줄곧 그렇게 생각해 왔죠.');
    await daiya.say_and_wait(
      '키타짱은 소중한 친구인 동시에, 제가 언젠가 반드시 이기고 싶은 목표이기도 해요.',
    );
    await daiya.say_and_wait(
      '게다가 키타짱은 정말 대단해요. 저에게는 없는 끈기…… 아니, 강인한 의지력을 가지고 있거든요.',
    );
    era.printButton('「네가 무슨 말을 하려는지 알 것 같아……!」', 1);
    await era.input();
    await daiya.say_and_wait([
      '후후후, 그렇죠? 비록 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '과 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      `에서는 모두 아쉽게 패배했지만……`,
    ]);
    await daiya.say_and_wait(
      '키타짱은 절대 포기하지 않는 성격이에요. 그녀의 진가는 다음 레이스부터 드러날 거예요!',
    );
    await daiya.say_and_wait(
      '그러니 저도 발걸음을 재촉해야겠어요. 반드시 『사츠키상』에서 승리하겠어요!',
    );
    await era.printAndWait(
      `이기고 싶은 목표── 키타산 블랙이라는 존재가 사토노 다이아몬드를 더욱 성장하게 한다. 그 이야기를 들으며 ${me.name}(은)는 더욱 강한 확신을 갖게 되었다.`,
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };
};