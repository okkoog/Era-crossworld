const era = require('#/era-electron');

const Edu67BackSchool = require('#/event/edu/edu-events-67-1/back-school');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks1 = require('#/data/event/edu-event-marks/edu-event-marks-67-1');

module.exports = class extends Edu67BackSchool {
  async out_start(daiya, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 67) {
      add_event(hook.hook, event_object);
      return;
    }
    const edu_marks = new DaiyaEduMarks1();
    const edu_weeks = era.get('cflag:67:육성턴수합산');
    let wait_flag = false;
    
    if (edu_marks.win_g1 === 1) {
      await print_event_name('나를 응원해 주는 모두', daiya);
      const kita = get_chara_talk(68);
      await era.printAndWait('사토노 다이아몬드가 첫 G1 승리를 거둔 지 며칠 후. 거리에서──');
      await say_by_passer_by_and_wait(
        '게임 센터 스태프',
        '누구나 호화 경품에 도전할 수 있는 1인 1회 무료 뽑기 이벤트! 현재 「사토노 다이아몬드 G1 우승 기념 캠페인」 진행 중입니다~!!」',
      );
      era.printButton('「사토노 다이아몬드의 이벤트!?」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 궁금한 마음에 게임 센터로 발걸음을 옮겼다. 가게 안은 화려하게 장식되어 있었고, 곳곳에 지난 경기 사진이 담긴 패널이 세워져 있었다.`,
      );
      await daiya.say_and_wait('어머, 트레이너 선생님. 안녕하세요.');
      await kita.say_and_wait('안녕하세요! 트레이너 선생님도 게임 하러 온 건가요?');
      era.printButton('「아니, 다이아의 이벤트가 열리고 있어서 놀라서 그만……」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 어째서 사토노 다이아몬드의 이벤트가 열리고 있는지 물어보았다.`,
      );
      await daiya.say_and_wait('이곳은 사토노 그룹에서 개발한 게임 기기들을 들여놓은 게임 센터예요.');
      await daiya.say_and_wait(
        '저의 G1 우승을 기념해서 그룹 관련 시설에서 일제히 이벤트를 열고 있답니다.',
      );
      await daiya.say_and_wait(
        '「경사가 있으면 고객님들께 보답하고 기쁨을 나누자」는 것이 사토노 그룹의 경영 방침이거든요.',
      );
      await daiya.say_and_wait('이 일에 관해서는 학원 측에서도 허가를 받았다고 들었는데……');
      await era.printAndWait(
        `${me.name}은(는) 레이스와 직접적인 관련이 없는 잡무라 학원 측에서 ${me.name} 모르게 처리해 준 것이라 생각했다.`,
      );
      await kita.say_and_wait(
        '지금 패밀리 레스토랑에 가려던 참인데, 트레이너 선생님도 가실래요?',
      );
      await daiya.say_and_wait('맞아요! 저희와 함께 가요!');
      era.printButton('「그럼 같이 가도록 할까」', 1);
      await era.input();
      await daiya.say_and_wait('좋아요! 헤헤헷♪');
      await daiya.say_and_wait('아…… 맞다, 그전에 잠시만 기다려 주세요.');
      await era.printAndWait(
        '말을 마친 사토노 다이아몬드는 스태프에게 다가가 말을 걸더니, 사인지를 건네주고 게임 기기 중 한 대에 사인을 남겼다.',
      );
      await kita.say_and_wait(
        '다이아짱은 이렇게 그룹 관련 시설을 돌면서 사인을 남기고 있어요!',
      );
      await kita.say_and_wait(
        '조금이라도 가게를 찾아주신 분들이 즐거워하셨으면 좋겠다고 다이아짱이 직접 생각한 거래요!',
      );
      await kita.say_and_wait(
        '전국의 모든 가게를 다 돌 수는 없으니까, G1 때 썼던 편자를 사인 보드에 찍어서 선물하기도 한대요!',
      );
      await daiya.say_and_wait('오래 기다리게 해서 죄송해요. 이제 가요.');
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        '「『다이아 햄버그 스테이크』 세 개 주세요──!」',
      ]);
      await era.printAndWait('점원 「네. 잠시만 기다려 주십시오.」');
      era.printButton('「이벤트 한정 메뉴까지 있을 줄이야……」', 1);
      await era.input();
      await daiya.say_and_wait(
        '후훗, 사실 이 『다이아 햄버그 스테이크』는 어머니께서 제게 만들어 주시던 메뉴를 재현한 거예요.',
      );
      await daiya.say_and_wait(
        '……레이스 전날이면 어머니께서 셰프님 대신 직접 주방에 들어가 햄버그 스테이크를 만들어 주셨거든요.',
      );
      await daiya.say_and_wait(
        '둥근 햄버그 위에 다이아몬드 모양 치즈를 올리고…… 가운데에는 어머니께서 손수 만드신 깃발을 꽂아 주셨죠.',
      );
      await daiya.say_and_wait(
        '아무리 업무로 바쁘셔도, 절 응원하는 마음을 담아 꼭 직접 만들어 주셨답니다.',
      );
      await kita.say_and_wait('그래서 이름이 『다이아 햄버그 스테이크』구나!');
      await daiya.say_and_wait(
        '네, 그때 그 맛과 완전히 똑같지는 않겠지만…… 저도 무척 기대돼요♪',
      );
      await era.printAndWait(
        '점원 「오래 기다리셨습니다. 주문하신 『다이아 햄버그 스테이크』 나왔습니다.」',
      );
      await daiya.say_and_wait('와아, 왔다! 잘 먹겠습니다──!');
      await daiya.say_and_wait('우물우물………… 음~!');
      await daiya.say_and_wait(
        '이 맛…… 어머니께서 해 주신 거랑 정말 비슷해요! 특히 이 폭신폭신한 식감이……!',
      );
      await daiya.say_and_wait('……후훗, 분명 어머니께서 직접 감수하셨나 봐요♪');
      await era.printAndWait(
        '패밀리 레스토랑 메뉴치고는 『다이아 햄버그 스테이크』에서 정성이 가득 담긴 손맛이 느껴졌다.',
      );
      await kita.say_and_wait(
        '이렇게 대대적으로 이벤트를 열 정도면, 아버님이랑 어머님도 다이아짱의 첫 G1 우승을 정말 기뻐하셨나 봐?',
      );
      await daiya.say_and_wait(
        '음── 전화로 축하는 해 주셨지만, 평소랑 크게 다른 점은 없으셨던 것 같아요. 여전히 바빠 보이셨고요.',
      );
      await kita.say_and_wait('에? 그래?');
      await daiya.say_and_wait('네, 대신 다음에 집에 돌아오면 축하 파티를 열어 주겠다고 하셨어요.');
      await daiya.say_and_wait('……두 분, 아직 더 드실 수 있나요?');
      await daiya.say_and_wait(
        '그룹에서 운영하는 다른 카페에서도 G1 우승 기념으로 원 코인 케이크 세트 이벤트를 하고 있거든요.',
      );
      await daiya.say_and_wait(
        '디저트는 거기 가서 먹어요♪ 그 후엔 실내 유원지 시설도 지금 전부 무료로 이용할 수 있으니까……',
      );
      era.printButton('「다이아의 부모님이 바쁘신 건, 설마……」', 1);
      await era.input();
      await kita.say_and_wait('설마 이 G1 우승 기념 이벤트를 준비하시느라 그런 걸까요?');
      await kita.say_and_wait(
        '……설마 그룹이랑 관련된 곳 전부에서 이벤트를 하고 있는 건 아니겠죠……',
      );
      await daiya.say_and_wait(
        '아, 사토노 그룹 리조트 호텔에서도 오늘 예약 한정으로 원 코인 숙박 이벤트를 하고 있대요.',
      );
      await daiya.say_and_wait('괜찮으시다면 트레이너 선생님도 한번 체험해 보세요♪');
      await kita.say_and_wait('정말 모든 곳에서 다 하고 있나 봐요!!');
      await era.printAndWait(
        '──축하의 규모가 그야말로 파격적이었다. 사토노 다이아몬드의 부모님과 가문 사람들이 얼마나 기뻐했는지 온몸으로 느낄 수 있었다.',
      );
      await era.printAndWait(
        '사토노 가문의 염원이었던 G1 승리. 사토노 다이아몬드가 일궈낸 위업은 수많은 사람에게 기쁨을 주었다.',
      );
      await era.printAndWait(
        `앞으로도 ${daiya.sex}와 함께 더 많은 승리를 모두에게 전해주자고 다짐했다──`,
      );
      edu_marks.win_g1++;
    } else if (edu_marks.satono_uma === 1) {
      edu_marks.satono_uma++;
      await print_event_name(
        `사토노 가문의 일원으로서, ${daiya.get_uma_sex_title()}로서`,
        daiya,
      );
      const ryan = get_chara_talk(27),
        bright = get_chara_talk(74);
      await era.printAndWait('어느 휴일 해 질 녘, 교문 근처를 지나가던 중──');
      await ryan.say_and_wait('그러니까, 사토노짱이 아직 안 돌아왔다는 거지?');
      await bright.say_and_wait('그런 것 같아요~ 조금 더 여기서 기다려 볼까요~');
      era.printButton('「사토노 다이아몬드에게 무슨 일이라도 있니?」', 1);
      await era.input();
      await ryan.say_and_wait('당신은…… 사토노짱의 트레이너 씨 맞으시죠.');
      await ryan.say_and_wait(
        '사실 오늘 아침에 파머가 사토노짱이 외출하는 걸 봤대요. 회사에 간다고 했다더라고요.',
      );
      era.printButton('「회사!?」', 1);
      await era.input();
      await era.printAndWait(
        `예상치 못한 단어에 ${me.name}은(는) 깜짝 놀랐고, 메지로 라이언에게 자세한 상황을 물었다. 사토노 가문이 운영하는 어느 회사로 향했다는 모양이다.`,
      );
      await ryan.say_and_wait(
        '저녁쯤엔 돌아온다고 했는데, 아직 소식이 없어서 다들 걱정하고 있었어요……',
      );
      era.printButton('「알려줘서 고마워」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) ${daiya.sex}들에게 뒷일은 자신에게 맡겨달라고 말한 뒤, 사토노 다이아몬드에게 전화를 걸기로 했다.`,
      );
      await daiya.say_and_wait('어머, 트레이너 선생님?');
      era.printButton('「아직 회사에 있는 거니?」', 1);
      await era.input();
      await era.printAndWait(
        `상황을 파악한 ${me.name}은(는) ${daiya.sex}에게 메지로 라이언 일행이 걱정하고 있다는 사실을 전했다.`,
      );
      await daiya.say_and_wait(
        '『어머나, 걱정을 끼쳐드렸군요. 하지만 이제 괜찮아요. 일은 거의 다 끝났거든요.』',
      );
      await daiya.say_and_wait(
        '『괜찮으시다면 트레이너 선생님께서 데리러 와 주실 수 있나요? 회사 분들께는 트레이너 선생님이 오시면 바로 들여보내 달라고 말씀해 놓을게요.』',
      );
      era.drawLine();
      await era.printAndWait(
        `${me.name}은(는) ${daiya.sex}가 알려준 회사 빌딩으로 들어가 사토노 다이아몬드가 있는 층으로 향했다.`,
      );
      await era.printAndWait(`${daiya.sex}는 어디에 있을까? ${me.name}이(가) 주위를 둘러보자──`);
      await era.printAndWait(
        '사토노 그룹 직원 「──그럼, 자선 레이스 건은 어떻게 진행할까요?」',
      );
      await daiya.say_and_wait('우선 일정과 개최 장소부터 확정해야 해요.');
      await daiya.say_and_wait('다음 주 회의 전까지 제가 어머니와 함께 대략적인 안을 생각해 둘게요.');
      await daiya.say_and_wait('당일에 더 많은 분이 찾아주실 수 있도록 다 함께 힘을 모아 봐요♪');
      await era.printAndWait('직원으로 보이는 인물이 정중히 인사를 하고 물러났다.');
      era.printButton('「자선 레이스?」', 1);
      await era.input();
      await daiya.say_and_wait('트레이너 선생님, 오셨군요!');
      await daiya.say_and_wait(
        '방금 그건 우리 사토노 그룹 자선 사업의 일환으로 계획 중인 자선 레이스 이야기예요.',
      );
      await daiya.say_and_wait(
        `저는 사토노 가문의 일원이기도 하지만 동시에 ${daiya.get_uma_sex_title()}이기도 하니까, 제가 할 수 있는 일로 모두에게 힘이 되어 드리고 싶었거든요.`,
      );
      await era.printAndWait(
        `${daiya.sex}의 표정은 평소보다 훨씬 늠름해 보였고, 자신의 일에 강한 책임감을 느끼고 있음이 전해졌다.`,
      );
      era.printButton('「과연 사토노 가문의 일원이구나」', 1);
      era.printButton('「자선 레이스에 너도 참가하는 거야?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('후훗, 칭찬 감사합니다♪');
        await daiya.say_and_wait(
          '전 언젠가 사토노 가문을 이끌어 나가야 할 위치에 있으니까요. 그래서 지금부터 견문과 시야를 넓혀두고 싶어요.',
        );
        await daiya.say_and_wait(
          '게다가 이렇게 사토노의 이름으로 무언가를 하는 건, 제게 더 큰 동기부여가 된답니다!',
        );
        await era.printAndWait(
          '말을 마친 그녀의 미소에서는 사토노의 대표라는 자부심이 느껴졌다.',
        );
        await ryan.say_and_wait(
          '아, 돌아왔구나! 사토노짱, 방금까지 일을 마쳤는데도 엄청 기운차 보이네.',
        );
        await daiya.say_and_wait(
          '사토노를 짊어질 사람으로서 이 정도 일에 지칠 수는 없으니까요♪',
        );
        await ryan.say_and_wait(
          '아하하, 정말 파머가 말한 대로네! 그런 부분은 정말 맥퀸이랑 똑 닮았다니까.',
        );
        await daiya.say_and_wait(
          '어머, 정말인가요!? 라이언 씨, 방금 하신 이야기 더 자세히 들려주세요!',
        );
      } else {
        await daiya.say_and_wait('네, 그럴 생각이에요.');
        await daiya.say_and_wait(
          `아까 말씀드린 대로, 저는 사토노 가문의 일원이자 ${daiya.get_uma_sex_title()}니까요.`,
        );
        await daiya.say_and_wait(
          `아직은 미숙한 후배지만, 언젠가 사토노 가문과 ${daiya.get_uma_sex_title()} 업계 모두에 공헌할 수 있는 사람이 되고 싶어요!`,
        );
        await era.printAndWait(
          `현재뿐만 아니라 미래까지 내다보는 ${daiya.sex}의 눈빛에서, ${me.name}은(는) 그녀가 장차 활약할 모습을 예견할 수 있었다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);

        era.drawLine();
        await bright.say_and_wait(
          '어머나, 돌아오셨나요~ 업무는 잘 마무리됐나요?',
        );
        await era.printAndWait(
          `사토노 다이아몬드는 마중 나온 두 사람에게 자선 레이스에 대해 이야기했다.`,
        );
        await bright.say_and_wait(
          '어머, 정말 재미있을 것 같네요~! 그 레이스, 저도 꼭 참가해 보고 싶어요~',
        );
        await daiya.say_and_wait('물론이죠! 메지로 가문 여러분의 참가는 언제나 환영이에요!');
        await bright.say_and_wait(
          '호호훗♪ 기왕 참가하기로 한 거, 우승을 목표로 달려보겠어요~',
        );
        await daiya.say_and_wait(
          '네, 레이스라면 당연히 그래야죠! 저도 진심으로 상대해 드릴게요♪',
        );
        await ryan.say_and_wait(
          '닮은 꼴인 사람들끼리 모이는 느낌이네. 아하하, 당일엔 대체 어떤 분위기가 될지……',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 10, 10, 0, 0], 0);
      }
    } else if (edu_marks.diamond_cotton === 1) {
      edu_marks.diamond_cotton++;
      await print_event_name('단단한 다이아는 풀솜 속에', daiya);
      await era.printAndWait('오늘은 승부복 촬영을 포함한 인터뷰가 있는 날이다.');
      await era.printAndWait(
        `${me.name}과(와) 사토노 다이아몬드는 조금 일찍 스튜디오에 도착했다. 현재──`,
      );
      await daiya.say_and_wait('흠, 흠, 흠~♪');
      await era.printAndWait(
        `승부복으로 갈아입은 ${daiya.sex}는 카메라 앞에서 포즈를 취하며 수시로 모니터를 확인하고 있었다.`,
      );
      era.printButton('「꼼꼼하게 확인하고 있구나」', 1);
      await era.input();
      await daiya.say_and_wait('네, 제가 표현하고 싶은 느낌이 제대로 담겼는지 확인 중이에요.');
      await me.say_and_wait('표현하고 싶은 느낌?');
      await daiya.say_and_wait(
        '네, 이 승부복은 제가 평소 소중히 여기는 생각들을 테마로 디자인되었거든요.',
      );
      await daiya.say_and_wait('기사를 보시는 분들께 제 마음이 전해졌으면 좋겠어요.');
      await era.printAndWait(
        `그러고 보니 ${daiya.sex}의 승부복에는 특히 인상적인 부분이 있었다.`,
      );
      era.printButton('「다이아몬드 장식이 가장 눈에 띄네」', 1);
      era.printButton('「프릴 장식이 가장 눈에 띄네」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('네, 맞아요!');
        await daiya.say_and_wait(
          '제 이름 때문이기도 하지만, 꺾이지 않는 확고한 의지를 상징하기도 하죠.',
        );
        await daiya.say_and_wait('예를 들면 종유석 같은 거예요.');
        await daiya.say_and_wait(
          '빗물이 대지에 내리고 석회암 성분을 머금은 물방울이 떨어지며 만들어지죠.',
        );
        await daiya.say_and_wait(
          '수만 년, 수십만 년이라는 세월 동안 한자리에서 계속 쌓여야만 비로소 단단하고 크게 성장할 수 있어요.',
        );
        await daiya.say_and_wait(
          `저는 ${daiya.get_uma_sex_title()}의 강함도 그와 비슷하다고 생각해요.`,
        );
        await daiya.say_and_wait('──즉, 끝까지 관철해 내는 힘이죠.');
        await daiya.say_and_wait(
          '목표를 정하고 계속 전진하는 것. 그런 노력이 승리를 불러온다고 믿어요.',
        );
        await era.printAndWait(
          `말을 하는 ${daiya.sex}의 눈동자에는 그녀의 다이아몬드 장식처럼 견고한 신념과 의지가 깃들어 있었다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
      } else {
        await daiya.say_and_wait('어머, 그 부분에 주목하시다니!');
        await daiya.say_and_wait(
          '제가 프릴을 귀엽다고 생각해서 좋아하는 면도 있지만, 사실 여기엔 「유연함」이라는 의미가 담겨 있어요.',
        );
        await daiya.say_and_wait(
          '목표가 높고 멀수록 나아가는 길에는 수많은 고난이 닥치기 마련이죠.',
        );
        await daiya.say_and_wait(
          '모든 시련에 정면으로 부딪치기만 하면, 아무리 단단한 보석이라도 언젠가는 금이 가고 말 거예요.',
        );
        await daiya.say_and_wait('그래서── 때로는 부드러움으로 강함을 제압하는 것이 중요하답니다.');
        await daiya.say_and_wait(
          '그렇게 하면 불필요한 마찰을 줄이고 가야 할 방향으로 온전히 집중할 수 있을 테니까요.',
        );
        await era.printAndWait(
          `이야기를 나누는 ${daiya.sex}의 눈빛에는 그녀가 말한 프릴의 신념처럼 부드러운 광채가 감돌았다.`,
        );
        await era.printAndWait(
          `그 후 ${me.get_couple_title()}은 한참 동안 대화를 나누었고, 정식 촬영까지는 아직 시간이 좀 남았다.`,
        );
        era.printButton('「뭐 좀 마시면서 기다릴까?」', 1);
        await era.input();
        await daiya.say_and_wait('좋아요! 그럼 같이 차를 마시며 쉬기로 해요!');
        await daiya.say_and_wait('그나저나 차는…… 어디서 살 수 있을까요?');
        era.printButton('「복도에 자동판매기가 있었던 것 같은데──」', 1);
        await era.input();
        await daiya.say_and_wait(
          '자동판매기! 아까 지나오면서 봤는데 일반적인 기계랑은 좀 다르게 생겨서 궁금했거든요!',
        );
        await daiya.say_and_wait(
          '트레이너 선생님, 그 일은 제게 맡겨주세요. 제가 가서 차를 사 올게요.',
        );
        await era.printAndWait(
          `${me.name}은(는) 신이 나서 달려가는 사토노 다이아몬드를 보며…… 조금 전 그녀가 말한 「일반적인 기계랑은 다르다」는 말이 어쩐지 불안하게 느껴졌다.`,
        );
        await era.printAndWait(
          `아무래도 따라가 보는 게 좋겠다. ${me.name}이(가) 그녀를 쫓아가려던 찰나──`,
        );
        await daiya.say_and_wait(
          '……어라, 캔이나 페트병이 없네요. 이 패널은 뭐죠? 이걸 누르면 되는 걸까요? 아니면 여기 버튼을?',
        );
        await era.printAndWait('덜컹, 덜컹──');
        await daiya.say_and_wait('어머! 컵이 나왔어요!');
        await era.printAndWait('쏴아아아아!');
        await daiya.say_and_wait(
          '와아, 얼음이 나오기 시작했어요!? 차는 안 나오는 건가요? 일단 멈추는 게 좋을까요?',
        );
        era.printButton('「지금 갈 테니까 거기 가만히 있어!」', 1);
        await era.input();
        await era.printAndWait(
          `${daiya.sex}는 매우 차분하고 믿음직한 면이 있는가 하면, 정반대의 허당 같은 면도 있었다. ${me.name}은(는) 앞으로 그녀를 잘 지켜봐 주기로 다시 한번 굳게 결심했다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
      }
    } else if (edu_marks.high_place === 1) {
      edu_marks.high_place++;
      await print_event_name('동경하는 사람이 기다리는 높은 경지로', daiya);
      const mcqueen = get_chara_talk(13);
      const gold_ship = get_chara_talk(7);
      await era.printAndWait(
        `휴일, ${me.name}은(는) 카페에서 사토노 다이아몬드와 메지로 맥퀸이 함께 있는 모습을 발견했다.`,
      );
      await daiya.say_and_wait('아, 트레이너 선생님! 안녕하세요!');
      await daiya.say_and_wait(
        '후훗, 오늘은 맥퀸 씨가 추천하는 카페에 데려와 주셨답니다!',
      );
      await mcqueen.say_and_wait(
        '부디 마음껏 고르세요. 이곳 메뉴는 무엇을 선택하든 절대 실망하지 않으실 거예요.',
      );
      await daiya.say_and_wait('감사합니다! 어디 보자……!');
      await daiya.say_and_wait(
        '근사해라……! 이 가게에는 디저트 종류가 129가지나 있네요……!',
      );
      await daiya.say_and_wait(
        '……어라? 『전 메뉴를 정복한 손님께는 특별한 영예를……!?』 이건…… 무슨 뜻인가요?',
      );
      await mcqueen.say_and_wait(
        '그, 그건…… 저도 듣기로는, 모든 메뉴를 다 드신 분께 「마스터」라는 칭호를 준다고 하더군요.',
      );
      await mcqueen.say_and_wait('지금까지 그 칭호를 받은 사람은 아무도 없다고 하던데……');
      await gold_ship.say_and_wait('맞아── (체중 조절 중인) 맥퀸만 빼고 말이지.');
      await mcqueen.say_and_wait('당신이 그걸 어떻게!? 그리고 여긴 왜 있는 건가요!?');
      await daiya.say_and_wait(
        '맥퀸 씨만이 얻은 칭호라니…… 정말 흥미로운걸요!',
      );
      await daiya.say_and_wait(
        '저도 도전해 보고 싶어요! 우선 메뉴 왼쪽의 스무 가지부터 주세요!',
      );
      era.printButton('「필요 이상의 칼로리야」', 1);
      era.printButton('「한번 도전해 볼까」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('듣고 보니 그렇긴 하네요…… 으음~ 역시 안 될까요……?');
        await mcqueen.say_and_wait(
          '현명한 판단이에요. 저도 열흘 동안 필사적으로 도전했다가 체중이──',
        );
        await mcqueen.say_and_wait(
          '콜록콜록. 맛있는 건 적당히 먹을 때 가장 좋은 법이죠. 자, 다시 먹고 싶은 걸 골라 보세요──',
        );
        await gold_ship.say_and_wait(
          '내 추천 메뉴는 돈가스 덮밥이랑 오이절임, 그리고 바지락국이야.',
        );
        await daiya.say_and_wait('그렇군요…… 그럼 전 그걸로──');
        await mcqueen.say_and_wait(
          '이곳에 그런 메뉴는 없어요! 골드 쉽 씨는 얼른 집에나 가세요!',
        );
        await era.printAndWait(
          '결국 사토노 다이아몬드는 메지로 맥퀸이 추천한 디저트를 주문했다. 칼로리를 고려한 합리적인 선택이었다.',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"체력":100}'),
        );
      } else {
        await daiya.say_and_wait('네! 반드시 맥퀸 씨를 따라잡겠어요!');
        await daiya.say_and_wait(
          '우으…… 저, 이제 한계예요…… 온몸에서 디저트의 단내가 풍기는 것만 같아요……',
        );
        await daiya.say_and_wait('아무래도 제가 맥퀸 씨의 경지에 도달하기엔 아직 멀었나 봐요……');
        await mcqueen.say_and_wait(
          '당연한 결과예요. 저도 열흘이나 걸려서 완성한 도전인걸요. 한 번에 스무 접시라니 무모해요……',
        );
        await gold_ship.say_and_wait(
          '이거 이거, 벌써 훌륭한걸. 맥퀸, 네 뒤를 이을 계승자가 나타났네.',
        );
        await mcqueen.say_and_wait(
          '대체 뭘 계승한다는 건가요!? 하아, 제 과오가 후배에게까지 영향을 줄 줄이야……!',
        );
        await era.printAndWait(
          `사토노 다이아몬드는 어마어마한 칼로리를 섭취했다. ${daiya.sex}는 이대로 제2의 『마스터』가 되는 것일까……!?`,
        );
        era.add(`base:67:체중 편차`, 500);
        era.println();
        wait_flag = get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"체력":300}'),
        );
      }
    } else if (edu_marks.fresh === 1) {
      edu_marks.fresh++;
      await print_event_name('프레시!', daiya);
      const kita = get_chara_talk(68);
      await era.printAndWait(
        '사토노 다이아몬드와 외출하던 중, 채소가게 아저씨와 대화하고 있는 키타산 블랙을 발견했다.',
      );
      await daiya.say_and_wait('어라? 키타짱 무슨 일이야? 표정이 안 좋아 보이는데……');
      await kita.say_and_wait('아, 다이아짱. 그게, 채소가게 아저씨가 곤란한 상황이래……');
      await era.printAndWait(
        '채소가게 아저씨 「에휴, 오늘따라 채소가 잔뜩 남았는데…… 손님이 통 오질 않는구나.」',
      );
      await era.printAndWait(
        '채소가게 아저씨 「정말 싼데, 싸게 팔고 있는데~ 신선하고 맛있는 채소라고……」',
      );
      era.printButton('「…………정말로 손님이 없네」', 1);
      await era.input();
      await era.printAndWait(
        '채소가게 아저씨 「그렇지? 우리가 응원하는 야구팀이 지는 날엔 꼭 이렇다니까. 정말 지긋지긋한 징크스야……」',
      );
      await kita.say_and_wait('아저씨 말로는 이 징크스 때문에 몇 번이나 고생하셨대.');
      await daiya.say_and_wait('……윽!');
      await daiya.say_and_wait(
        '아저씨, 징크스는 깨뜨릴 수 있는 거예요! 포기하지 말고 징크스에 맞서 싸워요!',
      );
      await daiya.say_and_wait(
        '음…… 예를 들어서, 제가 여기 남은 채소를 전부 사버리는 건 어떨까요?',
      );
      era.printButton('「그건 좀 아닌 것 같은데……」', 1);
      await era.input();
      await kita.say_and_wait('그럼 다른 방식으로……! 나도 곤란한 사람을 돕고 싶어!');
      await kita.say_and_wait('……맞다! 내가 채소 파는 걸 도와줄게!');
      await daiya.say_and_wait('저도요! 저도 징크스를 깨뜨리는 걸 돕게 해 주세요!');
      await kita.say_and_wait('상점가 여러분~!');
      await kita.say_and_wait('싱싱한 채소 사세요──!');
      await era.printAndWait('행인 「무슨 일이야, 무슨 일?」');
      await era.printAndWait(
        '키타산 블랙의 씩씩한 호객 소리가 상점가에 울려 퍼지자, 길을 가던 사람들이 발걸음을 멈췄다.',
      );
      await daiya.say_and_wait(
        '수분을 가득 머금은 토마토와 윤기가 흐르는 가지예요! 오늘 저녁 반찬으로 어떠신가요~?',
      );
      await era.printAndWait(
        '주부 「어머, 목소리에 활기가 넘치네~ 어디 한번 구경해 볼까.」',
      );
      await daiya.say_and_wait('하나같이 전부 추천하는 것들이랍니다♪ 다들 와서 봐 주세요.');
      await kita.say_and_wait('헤헤헷, 느낌 좋은데! 효과가 있어!');
      await daiya.say_and_wait('키타짱의 힘찬 목소리 덕분이야♪');
      await kita.say_and_wait(
        '다이아짱도 손님 응대를 정말 잘하는걸! 평소의 예의 바른 모습이 빛을 발하고 있어!',
      );
      await era.printAndWait('가게 안은 사람들로 북적이며 성황을 이루었다……');
      await era.printAndWait(
        '채소가게 아저씨 「세상에……! 응원하는 팀이 진 날에 이렇게 장사가 잘되는 건 처음이야!」',
      );
      await daiya.say_and_wait(
        '후훗, 저희는 대단한 일을 한 게 아니에요. 아저씨도 평소처럼 기운을 내신다면 저희 도움 없이도 장사는 잘될 거예요.',
      );
      await kita.say_and_wait(
        '아, 듣고 보니 그렇네! 아저씨 오늘 목소리가 평소보다 좀 힘이 없긴 했어요!',
      );
      await era.printAndWait(
        '채소가게 아저씨 「아아, 그렇구나……! 듣고 보니 내가 너무 낙담해서 축 처져 있었군.」',
      );
      await daiya.say_and_wait(
        '『징크스 따위에 질 순 없어!』, 『신경 쓰지 말고 즐겁게 살자!』.',
      );
      await daiya.say_and_wait(
        '그런 마음가짐으로 손님을 대한다면, 징크스 같은 건 금방 사라질 거예요♪',
      );
      era.printButton('「언제나 긍정적으로 생각하는 게 최고지!」（스피드+20）', 1);
      era.printButton('「어떤 징크스든 깰 수 있는 거야?」（스태미나+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('후훗, 맞아요!');
        await daiya.say_and_wait(
          '바로 그거예요. 징크스 때문에 고생하는 다른 분들도 찾아볼까요? 분명 도움이 될 거예요!',
        );
        await kita.say_and_wait('나도 찬성! 상점가의 다른 사람들한테도 물어보자!');
        await era.printAndWait(
          `${me.get_couple_title()} 세 사람은 함께 상점가를 걸으며 미지의 징크스를 찾아 나섰다!`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
      } else {
        await daiya.say_and_wait(
          '어머, 혹시 못 믿으시는 건가요? 그럼 제가 징크스를 하나 더 깨뜨려 드릴게요!',
        );
        await era.printAndWait(
          '채소가게 아저씨 「징크스라면 여기 또 있지! 『장사가 잘되는 날엔 꼭 오이가 남는다』는 징크스야!」',
        );
        await kita.say_and_wait(
          '그럼 오이를 맛있게 먹는 법을 홍보하자. 예를 들면…… 맛있게 요리하는 법 시연회라든가?',
        );
        await daiya.say_and_wait(
          '그거 좋은 아이디어네! 내가 자주 가는 3성급 셰프님의 레시피를 물어볼게♪',
        );
        await era.printAndWait(
          '현장 요리 시연 판매는 큰 호평을 받았고, 사토노 다이아몬드 일행은 오이까지 완판하는 데 성공했다!',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
      }
    } else if (edu_marks.heartbeat_excite === 1) {
      edu_marks.heartbeat_excite++;
      await print_event_name('하트비트 익사이트', daiya);
      era.println();
      await era.printAndWait('외출 중, 사토노 다이아몬드가 커다란 포스터 앞에서 발걸음을 멈췄다.');
      await daiya.say_and_wait(
        '『놀이공원 사상 최악의 공포── 헤븐 탄생…… 용기 있는 도전자를 모집합니다』?',
      );
      await daiya.say_and_wait(
        '엄청나게 높거나…… 혹은 속도가 무진장 빠르거나 한 걸까요? 대체 어떤 롤러코스터일까요……!',
      );
      await daiya.say_and_wait('당장 놀이공원에 가봐야겠어요!');
      era.printButton('「엣!? 잠깐만……」', 1);
      await era.input();
      await daiya.say_and_wait('어서요, 트레이너 선생님. 얼른 출발해요♪');
      await daiya.say_and_wait(
        '아, 저거예요! 저 높은 곳에 있는 레일…… 저게 바로 그 소문의 롤러코스터겠죠!?',
      );
      await era.printAndWait(
        '저것이 바로 『헤븐』…… 구름을 뚫을 듯한 높이가 과연 이름값에 어울리는 규모였다!',
      );
      await era.printAndWait(
        '행인 A 「세상에…… 정말 『천국』을 보고 온 기분이야……! 이 정도일 줄은 몰랐어……」',
      );
      await era.printAndWait(
        '행인 B 「안 돼, 무리무리…… 난 5대조 할아버지까지 뵙고 왔다고……!」',
      );
      await daiya.say_and_wait('어머나, 타고 온 분들이 다들 저 모양이네요……! 이럴 수가──');
      await daiya.say_and_wait(
        '저까지 두근거리기 시작했어요! 새로운 체험이 될 것 같아요♪',
      );
      era.printButton('「재미있을 것 같긴 한데, 하지만……」', 1);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 호기심과 공포 사이에서 갈등했다. 두 마음이 머릿속에서 격렬하게 싸우고 있었다……`,
      );
      await daiya.say_and_wait('트레이너 선생님, 왜 그러세요? 혹시 타기 싫으신 건가요……?');
      await daiya.say_and_wait('그러시다면…… 트레이너 선생님이 마음의 준비가 될 때까지 기다릴게요♪');
      await era.printAndWait(
        `${me.get_couple_title()}은 우선 공원 안을 돌아다니며 여유로운 시간을 보내기로 했다.`,
      );
      await daiya.say_and_wait('우물우물……');
      await daiya.say_and_wait('잘 먹었습니다♪');
      await daiya.say_and_wait('아, 롤러코스터요. 지금 마침 줄이 좀 짧아진 것 같은데요?');
      era.printButton('「너 혼자라도 타고 와도 괜찮아」', 1);
      await era.input();
      await daiya.say_and_wait(
        '음~ 역시 사양할게요! 처음엔 혼자라도 괜찮겠다고 생각했지만……',
      );
      await daiya.say_and_wait('아무래도 1인분의 짜릿함으로는 저를 만족시킬 수 없을 것 같아요.');
      await daiya.say_and_wait(
        '……지금 생각해보면, 전 트레이너 선생님과 정말 많은 곳을 다녔네요.',
      );
      await daiya.say_and_wait('함께 미지의 세계를 엿보고, 새로운 것을 발견하고──');
      await daiya.say_and_wait('함께 새로운 체험을 하고, 더 즐거운 일을 찾아다녔죠……');
      await daiya.say_and_wait(
        '잠깐 회상하는 것만으로도 아름다운 추억이 가득해요…… 그리고 깨달았답니다.',
      );
      await daiya.say_and_wait('트레이너 선생님이 곁에 계실 때…… 모든 즐거움은 배가 된다는 걸요!');
      await daiya.say_and_wait(
        '그러니까 전 언제까지라도 기다릴 거예요♪ 트레이너 선생님이 저와 함께 이 짜릿함을 느낄 준비가 될 때까지요!',
      );
      era.printButton('「아직 마음의 준비가……」', 1);
      era.printButton('「좋아, 타러 가자!」', 2);
      era.printButton('「다른 모험을 찾아볼까?」', 3);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('네── 알겠습니다♪');
        await era.printAndWait(
          `하지만 ${me.name}은(는) 끝내 결심을 굳히지 못했다. 결국 통금 시간이 다 되어버렸는데……`,
        );
        await daiya.say_and_wait('그럼…… 돌아가도록 해요!');
        era.printButton('「괜찮겠어?」', 1);
        await era.input();
        await daiya.say_and_wait(
          '괜찮아요. 사실 저는 좋아하는 걸 아껴뒀다 마지막에 먹는 타입이거든요.',
        );
        await daiya.say_and_wait('그러니까 언젠가 나중에 꼭 함께 체험하기로 해요♪');
        await era.printAndWait(
          `그날이 오면 반드시 용기를 내기로, ${me.name}은(는) ${daiya.sex}의 미소를 위해 마음속으로 맹세했다!`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
      } else if (ret === 2) {
        await daiya.say_and_wait('와아~ 그 말을 기다리고 있었어요! 가요, 어서 가요!');
        await era.printAndWait('덜컹덜컹덜컹덜컹…… 슈우우우우우웅──!');
        await daiya.say_and_wait('꺄아아아아아아──!');
        era.printButton('「헤브으으으으으은────────!!」', 1);
        await era.input();
        await daiya.say_and_wait(
          '정말 대단한 경험이었어요, 트레이너 선생님! 방금 하늘 위에서 예쁜 꽃밭도 봤답니다!',
        );
        await daiya.say_and_wait('……맨 앞자리에 앉으면 또 어떤 풍경이 보일까요!');
        await era.printAndWait(
          `${me.get_couple_title()}은 맨 앞자리에 앉을 때까지 몇 번이나 줄을 섰고, 즐거우면서도 머리가 어질어질한 하루를 보냈다!`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
      } else {
        await daiya.say_and_wait(
          '어머, 그것도 좋은 생각이네요! 사실 다른 놀이기구에도 관심이 많았거든요♪',
        );
        await daiya.say_and_wait('회전 컵이랑 귀신의 집…… 마지막 순간까지 함께 즐겨요!');
        await daiya.say_and_wait('어서요 트레이너 선생님! 첫 번째 코스는 귀신의 집이에요~');
        await daiya.say_and_wait('어디 보자── 가장 무서운 귀신의 집…… 『헬』!');
        await era.printAndWait(
          `비록 롤러코스터는 타지 않았지만, ${me.name}은(는) 사토노 다이아몬드와 함께 즐거운 시간을 보냈다!`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
      }
    } else if (edu_weeks === 95 + 1) {
      await print_event_name('새해 참배', daiya);
      await daiya.say_and_wait('새해 복 많이 받으세요.「신년 파티」에 오신 걸 환영합니다!');
      await era.printAndWait(
        `새해. 사토노 다이아몬드의 초대를 받아 ${me.name}은(는) 사토노 그룹에서 주최하는 신년 파티에 참석했다.`,
      );
      await era.printAndWait(
        '그곳은 사토노 가문 사람들과 그룹 관계자들이 새해 인사를 나누기 위해 마련된 자리인 듯했다.',
      );
      await daiya.say_and_wait(
        '파티가 시작되자마자 실례를 범해 죄송하지만, 저희 부모님께서 트레이너 선생님께 인사를 드리고 싶어 하세요.',
      );
      await era.printAndWait('다이아의 아버지 「새해 복 많이 받으십시오. 우리 다이아가 신세를 많이 지고 있습니다.」');
      await era.printAndWait(
        '다이아의 아버지 「지난해 클래식 시리즈에서 보여준 아이의 모습은 기대 이상이었습니다. 이 모든 것이 트레이너 선생님의 지도 덕분입니다.」');
      await era.printAndWait(
        '다이아의 아버지 「역시 다이아의 직관이 틀리지 않았음을 증명해 주셨군요── 앞으로의 시니어 시리즈도 잘 부탁드립니다.」');
      era.printButton(
        `「네. 반드시 그녀를 『명문 ${daiya.get_uma_sex_title()}』로 이끌겠습니다」`,
        1,
      );
      await era.input();
      await era.printAndWait('다이아의 아버지 「음, 기대하고 있겠습니다.」');
      await daiya.say_and_wait(
        '저는 이제 다른 분들께도 인사를 드려야 해서, 잠시 자리를 비울게요.',
      );
      await daiya.say_and_wait('트레이너 선생님은 편히 쉬면서 파티를 즐겨 주세요.');
      await era.printAndWait(
        `사토노 다이아몬드의 부모님은 사토노 가문의 핵심 인물들이었다. 그분들의 ${
          daiya.sex_code - 1 ? '딸' : '아들'
        }인 ${daiya.sex} 역시 꽤나 바빠 보였다.`,
      );
      await era.printAndWait(
        '다이아의 전 트레이너 「다이아, 새해 복 많이 받으렴! 트윙클 시리즈에서 정말 잘해주고 있더구나!」',
      );
      await era.printAndWait(
        '다이아의 전 주치의 「호호호, 그 조그맣던 다이아가 벌써 이렇게 훌륭한 성취를 이루다니, 경기를 볼 때마다 감회가 새롭단다.」',
      );
      await daiya.say_and_wait('새해 복 많이 받으세요. 트레이너 선생님, 박사님, 오랜만이에요.');
      await daiya.say_and_wait(
        '두 분 덕분에 오늘의 제가 있을 수 있었어요. 달리기의 기초도 두 분이 닦아주신 덕분이죠. 진심으로 감사드려요.',
      );
      await era.printAndWait(
        '다이아의 전 트레이너 「사실 요새 내 학생들에게 내가 다이아의 전임 트레이너였다고 자랑하고 다닌단다! 다들 얼마나 부러워하는지 몰라!」',
      );
      await daiya.say_and_wait(
        '어머나, 후훗. 정말 영광이에요♪ 하지만 트레이너 선생님은 저를 가르치기 전부터 이미 명망 높은 분이셨잖아요.',
      );
      await daiya.say_and_wait(
        '박사님 또한 영양학계에서 존경받는 교수님이시고요. 이런 훌륭한 분들께 지도를 받은 제가 오히려 부러움의 대상이죠.',
      );
      await era.printAndWait(
        '다이아의 전 주치의 「어쩜 말도 이렇게 예쁘게 할까. 사토노 그룹의 간판을 짊어질 만한 기품이구나.」',
      );
      await daiya.say_and_wait('아니에요, 전 아직 부족한걸요.');
      await daiya.say_and_wait(
        `『명문 ${daiya.get_uma_sex_title()}』로서 마땅히 갖춰야 할 모습을 갖추기 위해 노력 중이랍니다.`,
      );
      await era.printAndWait(
        `다이아의 전 트레이너 「명문 ${daiya.get_uma_sex_title()}가 된다는 건…… 해외 원정도 계획에 있다는 뜻이지?」`,
      );
      await era.printAndWait(
        '스포츠 용품사 직원 「해외 원정 계획이 있으시다면, 저희 회사에서 해외 현지에 맞춘 트레이닝 기기와 편자를 준비해 드릴 수 있습니다.」',
      );
      await era.printAndWait(
        '스포츠 용품사 직원 「다이아 양만을 위한 맞춤형 제품 개발도 가능합니다. 필요하실 때 언제든 말씀해 주십시오.」',
      );
      await daiya.say_and_wait(
        '전에 만들어 주신 트레이닝 기기는 집에서도 아주 잘 사용하고 있어요.',
      );
      await daiya.say_and_wait('새 기계가 필요할 때 다시 한번 부탁드려도 될까요?');
      await era.printAndWait(
        '스포츠 용품사 직원 「물론입니다. 다이아 양은 사토노 그룹의 별이니까요. 저희도 최선을 다하겠습니다.」',
      );
      await daiya.say_and_wait('감사합니다. 그럼 조만간 다시 연락드릴게요♪');
      await era.printAndWait(
        '우수한 트레이너, 일류 주치의, 그리고 스포츠 용품사의 전폭적인 지원까지……',
      );
      await era.printAndWait(
        `사토노 다이아몬드는 어릴 때부터 풍족한 환경에서 자라왔다. 이것은 ${daiya.sex}가 수많은 기대를 짊어지고 있기 때문이리라.`,
      );
      await era.printAndWait(
        `그에 상응하여 ${daiya.sex}가 짊어진 책임 또한 무거웠다. 그녀는 확실한 성적으로 그 은혜에 보답해야만 한다. 기대에는 피할 수 없는 책임이 따르는 법이다.`,
      );
      era.printButton(
        `──시니어급이 되는 올해, 반드시 ${daiya.sex}와 함께 승리라는 결과를 쟁취하겠어!`,
        1,
      );
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `신년 파티가 끝난 후, ${me.name}과(와) 사토노 다이아몬드는 함께 새해 참배를 하러 갔다.`,
      );
      await daiya.say_and_wait('──트레이너 선생님, 기도를 정말 오래 하시네요.');
      era.printButton('「신님께 내 결의를 보여드려야 하니까」', 1);
      await era.input();
      await daiya.say_and_wait('제 레이스에 관련된 일인가요?');
      era.printButton('「당연하지」', 1);
      await era.input();
      await daiya.say_and_wait('그렇다면 저도 같이 신님께 결의를 다지고 싶었는데……');
      await daiya.say_and_wait(
        '하지만 트레이너 선생님의 진지한 표정을 곁에서 볼 수 있었으니 이번엔 봐 드릴게요♪ 후훗!',
      );
      await daiya.say_and_wait('그럼, 남은 시간 동안…… 트레이너 선생님은 무엇을 하실 계획인가요?');
      await daiya.say_and_wait(
        '괜찮으시다면 트레이너 선생님은 평소에 새해를 어떻게 보내시는지 알고 싶어요!',
      );
      await daiya.say_and_wait('저희 집이나 키타짱네 집은 언제나 북적북적한 연회를 열거든요.');
      await daiya.say_and_wait(
        '그래서 파티나 연회 말고 다른 방식의 새해맞이를 경험해 보고 싶어요! 부디 저와 함께 보내 주세요!',
      );
      await era.printAndWait(
        '그저 설명만 해주면 될 줄 알았는데, 어느샌가 같이 새해를 보내게 되었다.',
      );
      await era.printAndWait(`새해맞이라고 하면, ${me.name}이(가) 늘 해오던 일은──`);
      era.printButton('「잠으로 보내기」', 1);
      era.printButton('「복주머니 사기」', 2);
      era.printButton('「신춘 휘호 쓰기」', 3);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '……벌써 주무시는 건가요? 새해 첫 꿈을 꾸기 위한 연습이라든가──',
        );
        await era.printAndWait(
          '정말로 잠만 자는 사람도 있겠지만, 보통은 외출하지 않고 집에서 빈둥거리며 여유롭게 지낸다는 뜻이라고 설명해주었다.',
        );
        await daiya.say_and_wait(
          '어머나, 새해 벽두부터 집에서 뒹굴뒹굴하는 건가요…… 왠지 죄책감이 들 것 같은 기분이네요♪ 그럼 같이 「잠으로 보내기」를 해봐요!',
        );
        await era.printAndWait(
          `${me.get_couple_title()}은 트레이닝실에서 간식을 먹으며 신년 특별 프로그램을 시청하기로 했다.`,
        );
        await daiya.say_and_wait(
          '……이분들은 버스 여행을 하신다더니 거의 걷기만 하시네요……',
        );
        await daiya.say_and_wait('와아! 이 장어덮밥 정말 맛있어 보여요……!');
        era.printButton('「보고 있으면 정말 먹고 싶어지네」', 1);
        await era.input();
        await daiya.say_and_wait(
          '오늘도 영업하는 모양인데, 저희 장어덮밥 배달시켜 먹을까요?',
        );
        era.printButton('「배달이 올 수 있는 거리가 아닌데!?」', 1);
        await era.input();
        await daiya.say_and_wait(
          '문제없어요. 저와 트레이너 선생님이 이렇게 열심히 하고 있는데, 이 정도 어리광쯤은 아버님도 들어주실 거예요♪',
        );
        await era.printAndWait(
          `그렇게── ${me.get_couple_title()}은 신칸센으로 배달된 맛있는 장어덮밥을 함께 즐겼다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"체력":300}'),
        );
      } else if (ret === 2) {
        await daiya.say_and_wait(
          '복주머니! 정말 기대되는 이벤트네요! 저도 사고 싶어요!',
        );
        await era.printAndWait(
          `복주머니를 사기 위해 ${me.name}과(와) 사토노 다이아몬드는 쇼핑몰을 찾았다.`,
        );
        await daiya.say_and_wait(
          '어느 가게로 갈까요…… 어머, 음식이나 차가 든 복주머니도 있네요.',
        );
        era.printButton('「저걸로 골라 볼까?」', 1);
        await era.input();
        await daiya.say_and_wait(
          '음식이라면 혹시 취향에 안 맞는 게 나오더라도 다른 분들께 나눠드릴 수 있으니까요. 저걸로 하죠!',
        );
        await daiya.say_and_wait(
          '줄이 꽤 기네요…… 시간이 좀 걸릴 것 같은데, 기다리는 동안 관찰 퀴즈 게임이나 할까요?',
        );
        await daiya.say_and_wait('지나가는 행인이 어느 가게로 들어갈지 맞히는 거예요!');
        era.printButton('「좋아!」', 1);
        await era.input();
        await daiya.say_and_wait(
          '그럼 저기 패딩 점퍼를 입은 남자분부터 시작하죠. 전 카페로 가실 것 같아요!',
        );
        era.printButton('「난 위층 서점으로 갈 것 같아」', 1);
        await era.input();
        await daiya.say_and_wait(
          '…………아, 카페로 들어가셨어요! 후훗, 제가 이겼네요♪ 아까 왠지 피곤해 보였거든요.',
        );
        await daiya.say_and_wait(
          '게임을 하니 시간이 금방 가네요. 자, 얼른 돌아가서 복주머니를 열어 봐요!',
        );
        await era.printAndWait(
          `${me.get_couple_title()}은 즐겁게 줄을 서서 기다린 끝에 무사히 복주머니를 손에 넣었다!`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, new Array(5).fill(10), 0);
      } else {
        await daiya.say_and_wait(
          '신춘 휘호 쓰기인가요…… 그렇다면 전 아주 큼직하게 쓰고 싶어요!',
        );
        era.printButton('「서예 퍼포먼스를 말하는 거야?」', 1);
        await era.input();
        await daiya.say_and_wait('네! 커다란 붓과 화선지는 집안 사람들에게 부탁해서 준비할게요!');
        await era.printAndWait(
          `다행히 새해라 비어 있던 체육관을 빌려, ${me.get_couple_title()}은 서예 퍼포먼스를 시작했다.`,
        );
        await daiya.say_and_wait(
          '음…… 미리 구상을 잘해두지 않으면 글자 배치를 망칠 것 같네요.',
        );
        await era.printAndWait(
          `사토노 다이아몬드는 화선지 앞에서 진지하게 연습을 마친 뒤, 자신의 키만 한 붓을 들고 단숨에 글자를 써 내려갔다.`,
        );
        await daiya.say_and_wait('하아아아아아아아! 흡! 하아! 핫!');
        await daiya.say_and_wait('후우──! 어떠신가요, 트레이너 선생님!');
        await era.printAndWait(
          `${daiya.sex}는 매우 유려한 필체로 『숙원성취(宿願成就)』라는 네 글자를 써냈다!`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, undefined, 70);
      }
      era.set('cflag:67:축제이벤트표시', 0);
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};