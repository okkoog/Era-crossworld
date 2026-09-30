const era = require('#/era-electron');

const CustomizedEdu = require('#/event/edu/edu-common');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks1 = require('#/data/event/edu-event-marks/edu-event-marks-67-1');
const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedEdu {
  async back_school(daiya, me, callname, hook, extra_flag, event_object) {
    if (
      era.get('flag:현재상호작용캐릭터') !== 67 ||
      era.get('flag:현재위치') !== location_enum.gate
    ) {
      if (era.get('flag:현재상호작용캐릭터') === 67) {
        await era.printAndWait([daiya.get_colored_name(), '가 외출을 기대하고 있다……']);
      }
      add_event(hook.hook, event_object);
      return;
    }
    const edu_marks = new DaiyaEduMarks1();
    let wait_flag = false;
    if (edu_marks.street_adv === 1) {
      edu_marks.street_adv++;
      await print_event_name('뒷골목 어드벤처', daiya);
      const jordan = get_chara_talk(48);
      await era.printAndWait(`${me.name}과(와) 사토노 다이아몬드가 외출하고 돌아오는 길──`);
      await daiya.say_and_wait('어머? 어머 어머 어머!?');
      await daiya.say_and_wait(
        '트레이너 선생님, 굉장한 걸 발견했어요! 저기에 『뒷골목』이 있네요!',
      );
      await daiya.say_and_wait(
        '와아~ 지금까지 전혀 몰랐어요! 저 길은…… 어디로 이어지는 걸까요!',
      );
      await era.printAndWait(
        `${me.name}이(가) 말릴 틈도 없이, 사토노 다이아몬드는 골목 안으로 뛰어 들어갔다……`,
      );
      await daiya.say_and_wait(
        '후훗, 왠지 기묘한 분위기가 감도는 곳이네요. 유령이 나와도 이상하지 않을 것 같아요……',
      );
      await jordan.say_and_wait('유령이라니~ 이런 유령을 말하는 거야!?');
      await daiya.say_and_wait('어머, 조던 씨였군요. 안녕하세요♪');
      await jordan.say_and_wait(
        '야, 조금도 안 놀라는 거야? 안 놀라면 장난친 내가 민망해지잖아~!',
      );
      await jordan.say_and_wait('그건 그렇고, 너희들 여기서 뭐 하고 있어?');
      await daiya.say_and_wait(
        '이 뒷골목이 어디로 통하는지 알고 싶어서…… 지금 모험 중이에요.',
      );
      await daiya.say_and_wait(
        '이곳은 풍경이 무척 색달라서 마치 다른 세상에 온 것 같아요…… 후훗, 정말 두근거리고 기대돼요♪',
      );
      await jordan.say_and_wait(
        '그래~? 그럼 같이 갈래? 내가 좋은 곳을 알려줄게!',
      );
      await jordan.say_and_wait(
        '……그리고 저 집 개는 진짜 무섭거든! 눈이 마주치는 순간 미친 듯이 짖어댄다고!',
      );
      await daiya.say_and_wait(
        '정말 활기찬 강아지군요! 어떤 아이일까요……?',
      );
      await era.printAndWait('큰 개 「멍멍! 왈왈!!」');
      await daiya.say_and_wait('와아, 정말이네요! 후훗, 귀여워라~!');
      await jordan.say_and_wait(
        '진짜 즐거워 보이네~! 이왕 이렇게 된 거, 기분 전환이 될 만한 가게라도 들러볼래?',
      );
      await daiya.say_and_wait('어머, 재밌을 것 같──');
      await daiya.say_and_wait('──어머? 저쪽 골목은 유난히 어둑어둑해 보이네요.');
      await jordan.say_and_wait('아, 잠깐만! 저긴 가면 안 돼!');
      era.printButton('「저쪽은 무슨 문제라도 있어?」', 1);
      await era.input();
      await jordan.say_and_wait(
        '아~ 그러니까~ 좀 무서운 언니들이 저기에 자주 모여 있달까?',
      );
      await jordan.say_and_wait(
        '나한테 딱히 뭘 하진 않지만~ 굳이 제 발로 찾아갈 필요는 없잖아, 그치?',
      );
      await jordan.say_and_wait('그러니까 다이아, 저쪽 말고 이쪽으로──');
      era.printButton('「벌써 없어졌어!?」', 1);
      await era.input();
      await jordan.say_and_wait('헐!? 야, 다이아──!');
      await daiya.say_and_wait(
        '어머, 혹시 불량소녀인가요……? 드라마에서 본 적 있어요, 그게……',
      );
      await era.printAndWait('불량소녀 「앙? 너 뭐라 그랬냐!?」');
      await daiya.say_and_wait('아, 저는 사토노 다이아몬드라고 해요. 여쭤보고 싶은 게 있어서요.');
      await daiya.say_and_wait(
        '불량소녀라고 하면 비 오는 날 젖어 있는 강아지를 도와주는 장면을 정말 좋아하는데…… 당신도 그런 경험이 있나요?',
      );
      await jordan.say_and_wait('잠깐잠깐잠깐! 타임!');
      await jordan.say_and_wait('아하하, 정말 죄송해요! 저희 지금 바로 갈게요~!');
      await daiya.say_and_wait('어라? 아, 하지만……!');
      era.printButton('「자, 이제 그만 돌아가자!」（지능+20）', 1);
      era.printButton('「갑자기 말을 건 것에 대해 사과하자」（근성+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('아, 알겠어요……');
        await daiya.say_and_wait('그럼 저희는 이만 실례할게요. 안녕히 계세요♪');
        await daiya.say_and_wait(
          '아아, 불량소녀분…… 조금 더 이야기를 나눌 수 있었다면 좋았을 텐데…… 아쉬워요.',
        );
        await jordan.say_and_wait('아니, 진짜 겁도 없는 거야!?');
        await daiya.say_and_wait(
          '무서워할 게 있나요? 드라마 속 불량소녀들은 유기견을 도와주는 마음 따뜻한 분들이잖아요♪',
        );
        await jordan.say_and_wait('다이아, 너 진짜 멘탈 대박이다~!');
        await era.printAndWait(
          `사토노 다이아몬드가 너무나도 아쉬워하는 기색이었기에, ${me.name}은(는) 더 이상 꾸짖을 수 없었다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 0, 20], 0);
      } else {
        await daiya.say_and_wait('제가 그렇게 행동한 것은 확실히 예의에 어긋난 일이었네요…… 죄송합니다, 실례를 범했군요.');
        await era.printAndWait(
          '불량소녀 「쳇, 나도 일반인하고 싸울 생각은 없어. 다음부턴 조심해라.」',
        );
        await daiya.say_and_wait(
          '감사합니다! 역시 불량소녀는 말이 통하는 하드보일드한 성격이라는 게 정말이었군요!',
        );
        await era.printAndWait(
          '불량소녀 「오호? 너 뭘 좀 아는 모양인데. 헤헤, 같이 음료수라도 마시러 갈래?」',
        );
        await daiya.say_and_wait('어머, 정말 그래도 되나요? 부디 기회를 주세요♪');
        await jordan.say_and_wait('진짜로? 다이아, 너 너무 센거 아냐!?');
        await era.printAndWait('그 후, 사토노 다이아몬드는 호기심 어린 눈빛으로 불량소녀의 이야기를 경청했다.');
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
      }
    } else if (edu_marks.shopping === 1) {
      edu_marks.shopping++;
      await print_event_name('편의점 앞에선 주의하자', daiya);
      const gold_ship = get_chara_talk(7);
      const festa = get_chara_talk(49);
      const sirius = get_chara_talk(70);
      const coffee = get_chara_talk(25);
      const condor_pasa = get_chara_talk(14);
      await era.printAndWait(
        `${me.name}과(와) 사토노 다이아몬드가 외출 후 돌아오는 길, 편의점을 지나치는데…… ${daiya.get_uma_sex_title()} 두 명이 모여 있는 것을 발견했다.`,
      );
      await gold_ship.say_and_wait(
        '빌어먹을! 또── 홍학이냐! 벌써 다섯 장째라고……!?',
      );
      await festa.say_and_wait('나도 마찬가지야…… 또 고구마벌레네.');
      await daiya.say_and_wait(
        '어머, 골드 쉽 씨랑 나카야마 씨인가요? 두 분이 여기서 뭘 하고 계신 걸까요? ──제가 가서 물어보고 올게요!',
      );
      await era.printAndWait(
        `왠지 안 좋은 예감이 든다…… ${me.name}은(는) 그렇게 생각하며 사토노 다이아몬드의 뒤를 쫓았다.`,
      );
      await daiya.say_and_wait('안녕하세요. 두 분 여기서 뭘 하고 계시나요?');
      await gold_ship.say_and_wait(
        '오, 사토노잖아! 지금 막 『깜짝 생물 초코』를 대량으로 구입했거든!',
      );
      await gold_ship.say_and_wait(
        '근데 제일 희귀한 암모나이트 나이트가 안 나와서…… 여기서 계속 초코를 먹고 있는 중이야.',
      );
      await daiya.say_and_wait(
        '어머, 새로운 도전을 하고 계신 거군요? 재밌어 보여요! 저도 참가해도 될까요?',
      );
      await festa.say_and_wait(
        '하하, 참으로 호기심 왕성한 아가씨네…… 좋아, 어떤 봉지를 고를래? 선택해 봐.',
      );
      await daiya.say_and_wait('어디 보자, 트레이너 선생님은 어떤 봉지가 좋을 것 같나요?');
      era.printButton('「포장이 예쁜 것」', 1);
      era.printButton('「포장이 구겨진 것」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait(
          '저도 그게 좋을 것 같아요! 그럼 바로 뜯어볼게요, 갑니다──',
        );
        await daiya.say_and_wait('짜잔──!');
        await daiya.say_and_wait('이건── 음, 프테라노돈……인가요?');
        await gold_ship.say_and_wait(
          '──프테라노돈 리더!!!! 오오옷, 프테라노돈 리더잖아!!',
        );
        await festa.say_and_wait(
          '헤에, 골드 등급을 뽑았네…… 운이 꽤 좋은걸, 사토노.',
        );
        await daiya.say_and_wait(
          '어머, 그럼 좋은 걸 뽑은 건가요!? 그럼 몇 봉지 더 뜯어보고 싶네요!',
        );
        await gold_ship.say_and_wait(
          '좋아, 더 뜯어봐! 넌 카드만 꺼내고 이쪽으로 던져, 초코는 내가 책임지고 다 먹어치울 테니까!',
        );
        await daiya.say_and_wait('네! 그럼 시작할게요──');
        await condor_pasa.print_and_wait('??? 「잠깐 기다려 주세YO!」');
        await daiya.say_and_wait('?');
        await condor_pasa.say_and_wait(
          '이 『깜짝 생물 초코』, 저도 사려고 했었단 말이GiYO!!',
        );
        await condor_pasa.say_and_wait(
          '그런데 품절이라니…… 골드 쉽 씨랑 나카야마 선배 짓이GiYO!?',
        );
        await gold_ship.say_and_wait(
          '엘, 왜 그렇게 화가 나 있어…… 어쩔 수 없네. 그럼──',
        );
        await gold_ship.say_and_wait(
          '──승부하자! 네가 이기면 이 프테라노돈 리더를 줄게! 하지만 지면 점보 매미밖에 못 얻는다고!!',
        );
        await condor_pasa.say_and_wait(
          '좋아YO! 도전을 받아들이겠어YO! 반드시 프테라노돈 리더를 쟁취하겠습니DA!',
        );
        await condor_pasa.say_and_wait('그럼, 정정당당하게──!!');
        await era.printAndWait([
          gold_ship.get_colored_name(),
          '&',
          condor_pasa.get_colored_name(),
          ' 「──승부DA!!」',
        ]);
        await daiya.say_and_wait('음── 왠지 엄청난 국면으로 접어든 것 같네요, 트레이너 선생님.');
        era.printButton('「그러게……」', 1);
        await era.input();
        await coffee.print_and_wait(
          '??? 「──걱정하지 마세요. 내버려 두면 알아서 지칠 테니까요……」',
        );
        await daiya.say_and_wait('카페 씨! 물건 사러 오셨나요?');
        await coffee.say_and_wait(
          '네, 단골 카페가 마침 쉬는 날이라…… 그래서 여기까지……',
        );
        await coffee.say_and_wait('하지만── 역시 다른 카페로 가야겠어요…… 그럼 전 이만……');
        await daiya.say_and_wait(
          '어머, 알고 계신 카페가 그렇게 많으신가요. 괜찮으시다면 저도 같이 가도 될까요!?',
        );
        await era.printAndWait(
          '곁에서 일어나는 싸움보다 자신의 호기심을 우선시하다니…… 그녀의 순수함을 다시 한번 확인하게 되었다.',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
      } else {
        await daiya.say_and_wait(
          '일부러 이런 도전을 고르시는 거군요! 재밌을 것 같아요, 그럼 뜯어볼게요──',
        );
        await era.printAndWait(
          '하지만 사토노 다이아몬드가 포장을 뜯으려는 찰나── 갑자기 강풍이 불어와 초코 봉지가 누군가의 발밑으로 날아갔다.',
        );
        await sirius.print_and_wait('??? 「음…… 이건 뭐지?」');
        await sirius.say_and_wait(
          '……정말이지, 과자 봉지였군. 너희들 여기서 무슨 친목회라도 여는 거야?',
        );
        await festa.say_and_wait(
          '후후…… 마침 잘 왔어. 너도 끼어볼래? 시리우스?',
        );
        await sirius.say_and_wait(
          '끼다니, 과자로 승부라도 하자는 거야? 야야, 나이가 몇인데 그런 시시한 일로──',
        );
        await sirius.say_and_wait('──응?');
        await sirius.say_and_wait(
          '……호오── 천진난만한 아가씨로군. 상대가 너라면 꽤 재미있을지도 모르겠어.',
        );
        await daiya.say_and_wait('? 저랑 대결하시겠다는 건가요?');
        await sirius.say_and_wait(
          '그래. 방금 내 발밑으로 날아온 이 봉지에 좋은 게 들어있으면 네 승리다.',
        );
        await sirius.say_and_wait(
          '반대로 꽝이 나오면 네 패배지. 그럼 내 부탁을 하나 들어줘야겠어. ──어때?',
        );
        era.printButton('（뭐라고……!?）', 1);
        await era.input();
        await daiya.say_and_wait(
          '후훗, 재밌을 것 같네요. 그런 조건이라면 절대로 질 수 없겠는걸요♪',
        );
        await daiya.say_and_wait('도전을 받아들이겠어요!');
        await daiya.say_and_wait('그럼──!');
        await era.printAndWait([
          gold_ship.get_colored_name(),
          '&',
          festa.get_colored_name(),
          ' 「……!!」',
        ]);
        await era.printAndWait([
          gold_ship.get_colored_name(),
          '&',
          festa.get_colored_name(),
          ' 「',
          { color: gold_ship.color, content: '히든 캐릭터!!' },
          { color: festa.color, content: '메탈카이저잖아……!!' },
          '」',
        ]);
        await era.printAndWait(
          '카드를 본 순간, 골드 쉽과 나카야마 페스타 두 사람은 즉각적으로 격렬한 반응을 보였다……!!',
        );
        await sirius.say_and_wait(
          '!? 히든 캐릭터……? 최고는 아니지만 나쁘지도 않다는 뜻인가?',
        );
        await sirius.say_and_wait(
          '……못 보겠군, 이번 승부는 무효로 하지. 패배를 안겨주진 못했지만, 꽤 좋은 구경을 했어.',
        );
        await daiya.say_and_wait('후훗♪ 그럼 승부는 다음 기회로 미뤄진 거네요?');
        await sirius.say_and_wait('……호오?');
        await daiya.say_and_wait(
          '승부가 나지 않았으니까요. 부디 다시 한번 도전할 기회를 주세요!',
        );
        await sirius.say_and_wait(
          '후후, 하하하! 모처럼 위기를 모면했는데, 스스로 다시 뛰어들겠다고!?',
        );
        await sirius.say_and_wait(
          '……좋다. 그럼 정점에서 기다려 주지. 네가 내 위치까지 올라오는 그날까지.',
        );
        await daiya.say_and_wait('후훗♪ 이렇게 또 하나의 목표가 생겼네요.');
        await era.printAndWait(
          `사토노 다이아몬드는 선배 앞에서도 두려움 없이 적극적으로 나아갔다. ${me.name}은(는) 그녀의 강인함을 다시 한번 깨달았다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
      }
    } else if (edu_marks.in_colorful === 1) {
      edu_marks.in_colorful++;
      await print_event_name('많은 색상 중에서', daiya);
      const maya = get_chara_talk(24);
      const creek = get_chara_talk(45);
      await era.printAndWait(
        `${me.name}과(와) 사토노 다이아몬드가 외출 후 돌아오는 길, 쇼핑몰에 들렀을 때──`,
      );
      await daiya.say_and_wait(
        '가게가 정말 많아서 눈이 즐겁네요. 언젠가 모든 가게를 다 한 번씩 들러보고 싶── 어머?',
      );
      await maya.say_and_wait(
        '……있지, 이건 어때? 어른스러워 보여? 아니면 이게 더──',
      );
      await maya.say_and_wait('아! 다이아짱☆ 안녕~!');
      await daiya.say_and_wait('마야 씨랑 크릭 씨! 쇼핑하러 오셨나요?');
      await maya.say_and_wait(
        '헤헤헤, 응~ 크릭한테 어른스러운 옷 고르는 걸 도와달라고 했어♪',
      );
      await maya.say_and_wait(
        '근데 도무지 못 고르겠단 말이지. 마야는 이것저것 다 탐나는걸☆',
      );
      await creek.say_and_wait(
        '후후, 마야 양은 뭘 입어도 귀여우니까 저도 고르기가 참 힘드네요~',
      );
      await daiya.say_and_wait(
        '어머! 그럼 저도 같이 골라봐도 될까요? 마야 씨에게 어울리는 옷 찾기에 도전하고 싶어요!',
      );
      await era.printAndWait('그렇게 마야노 탑건에게 어울리는 옷을 함께 고르기로 했다.');
      await daiya.say_and_wait(
        '음~ 생각보다 어렵네요. 제 옷을 고를 때는 금방이었는데……',
      );
      await daiya.say_and_wait(
        '역시 제 물건을 고를 때와는 조건이나 기준이 달라서 그런 걸까요.',
      );
      await daiya.say_and_wait('트레이너 선생님, 어떻게 고르는 게 좋을 것 같나요?');
      era.printButton('「어른스러움을 우선으로」', 1);
      era.printButton('「마야노에게 어울리는 것을 우선으로」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await daiya.say_and_wait('그렇군요, 먼저 방향을 정하는 게 중요하겠어요!');
        await daiya.say_and_wait('그럼 다시 한번 생각해 볼게요! ……후훗, 어떤 게 좋을까요♪');
        await daiya.say_and_wait(
          '정했어요! 마야 씨, 이런 조합은 어떠신가요?',
        );
        await era.printAndWait(
          '사토노 다이아몬드는 차분한 배색으로 코디한 세트를 마야노 탑건에게 제안했다.',
        );
        await maya.say_and_wait(
          '와아, 하얀색 상의에 네이비색 스커트! 클래식하면서도 고상한 어른 느낌이야~!',
        );
        await maya.say_and_wait(
          '스커트가 하이웨이스트라 다리도 길어 보이고 섹시한 느낌도 나네♪',
        );
        await maya.say_and_wait('이런 조합도 가능하구나~! 한 수 배웠어☆');
        await daiya.say_and_wait('후훗, 마음에 드셨다니 다행이에요.');
        await maya.say_and_wait('근데 다이아 짱은 어떻게 이런 어른스러운 코디를 잘 아는 거야?');
        await daiya.say_and_wait(
          '그건…… 제가 사토노 가문의 일원으로서 여러 행사에 참석할 기회가 많아서 그럴 거예요.',
        );
        await daiya.say_and_wait(
          '특히 사교 파티에 참석하시는 분들은 대부분 성인분들이거든요.',
        );
        await daiya.say_and_wait(
          '그분들 곁에서 뒤처지지 않으려다 보니 자연스레 클래식한 색상의 조합을 선호하게 되었나 봐요.',
        );
        await maya.say_and_wait('와아~ 사교 파티라니 정말 어른스러워!!');
        await maya.say_and_wait(
          '있지, 마야도 언젠가 멋진 숙녀가 되어서 사교 파티에 갈 수 있을까?',
        );
        await daiya.say_and_wait(
          `물론이죠! 레이스 ${daiya.get_uma_sex_title()}들은 연회에 초대받을 일이 많으니까요!`,
        );
        await maya.say_and_wait(
          '정말!? 그럼 마야도 얼른 사교 파티 준비를 해야겠는걸☆',
        );
        await maya.say_and_wait('저기, 다이아 짱! 어른스러운 코디법 더 가르쳐줘~♪');
        await daiya.say_and_wait('네, 물론이죠! 저만 믿으세요!');
        await creek.say_and_wait(
          '후후, 두 사람 다 정말 귀엽네요~ 그렇게 즐겁게 대화하는 모습이♪',
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [20, 0, 0, 0, 0], 0);
      } else {
        await daiya.say_and_wait(
          '그렇군요……! 역시 본인에게 어울리지 않으면 의미가 없으니까요!',
        );
        await daiya.say_and_wait('음음…… 그럼 잠시만 생각 좀 해볼게요. 후훗♪');
        await daiya.say_and_wait(
          '정했어요! 마야 씨, 이런 조합은 어떠신가요?',
        );
        await era.printAndWait(
          '사토노 다이아몬드는 귀엽고 활발한 스타일의 코디를 마야노 탑건에게 제안했다.',
        );
        await daiya.say_and_wait('이 프릴이 정말 귀엽다고 생각하는데, 마음에 드시나요?');
        await maya.say_and_wait(
          '와아, 진짜 진짜 귀엽다~! 소매에 달린 리본이 포인트가 되어서 정말 멋진걸☆',
        );
        await daiya.say_and_wait('맞아요! 역시 그 포인트를 알아보셨군요!');
        await daiya.say_and_wait(
          '리본 크기가 소매 끝에 방해되지 않을 정도라 딱 알맞은 포인트가 되어주거든요♪',
        );
        await maya.say_and_wait(
          '응응, 바지도 짧은 편이라 마야가 좋아하는 스타일이고 정말 귀여워☆',
        );
        await daiya.say_and_wait('그리고 여기에 신발을 맞춘다면──');
        await maya.say_and_wait('──아, 마야 알 것 같아!! 숏부츠를 신는 거지?');
        await daiya.say_and_wait('정답이에요! 역시 마야 씨, 패션 센스가 대단하시네요!');
        await daiya.say_and_wait(
          '바지가 짧으니까 부츠도 짧은 걸 선택하면 다리가 더 길어 보이는 효과가 있거든요!',
        );
        await maya.say_and_wait(
          '응응, 알아~! 게다가 매끈한 다리가 드러나서 섹시한 느낌도 나고.',
        );
        await maya.say_and_wait(
          '마야랑 다이아 짱은 눈썰미가 비슷한 것 같아~☆ 저기, 우리 더 많은 조합을 찾아보자!',
        );
        await daiya.say_and_wait(
          '네, 기꺼이요! 그럼 저쪽부터 차례대로 구경해 볼까요♪',
        );
        await creek.say_and_wait(
          '후후, 두 사람 다 정말 귀엽네요~ 그렇게 즐겁게 대화하는 모습이♪',
        );
        await daiya.say_and_wait(
          '트레이너 선생님, 크릭 씨! 괜찮으시다면 두 분도 같이 가요~?',
        );
        era.printButton('「응, 지금 갈게」', 1);
        await era.input();
        await era.printAndWait(
          `그 후, ${me.get_couple_title()} 네 사람은 함께 즐거운 쇼핑 시간을 보냈다.`,
        );
        era.println();
        wait_flag = get_attr_and_print_in_event(67, [0, 0, 0, 20, 0], 0);
      }
    }
    wait_flag && (await era.waitAnyKey());
    return true;
  }
};