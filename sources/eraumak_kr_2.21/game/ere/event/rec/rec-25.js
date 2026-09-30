/**
 * @file 맨하탄 카페-招募，id=25
 * @author Necroz
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_custom_mec } = require('#/event/mec/mec-factory');
const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage) {
    const coffee = get_chara_talk(25),
      event_marks = EventMarks.get(0),
      me = get_chara_talk(0);
    switch (stage) {
      case event_hooks.recruit:
        if (era.get('cflag:25:모집상태') === recruit_flags.no) {
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 검은 머리의 ',
            coffee.get_uma_sex_title(),
            '를 발견했다.',
          ]);
          await era.printAndWait([
            '하지만 ',
            me.get_colored_name(),
            '이(가) 다가가려 하자, ',
            coffee.sex,
            '의 모습은 마치 처음부터 존재하지 않았던 것처럼 사라져 버렸다.',
          ]);
          await me.say_and_wait('헛것을 본 건가? 일단 돌아가서 좀 쉬어야겠군.', true);
          add_event(
            event_hooks.recruit_start,
            new EventObject(25, cb_enum.recruit),
          );
          event_marks.add(event_hooks.recruit_start);
          return true;
        } else {
          await era.printAndWait([
            '그날 밤 이후로 며칠이 지났지만, 트레이닝 현장에서 본 그 검은 머리 ',
            coffee.get_uma_sex_title(),
            '의 모습과 목소리가 ',
            me.get_colored_name(),
            '의 머릿속을 떠나지 않았다. 선발 레이스가 시작된 후에야 ',
            me.get_colored_name(),
            '은(는) 명단에서 처음으로 ',
            coffee.sex,
            '의 이름을 발견했다—— ',
            coffee.get_colored_name(),
            '.',
          ]);
          await era.printAndWait([
            '서둘러 달려갔을 때는 이미 ',
            coffee.get_colored_name(),
            '의 레이스는 끝난 뒤였다. 직접 보지는 못했지만, 게시판 상단에 적힌 이름만으로도 ',
            coffee.sex,
            '의 실력을 충분히 짐작할 수 있었다.',
          ]);
          await era.printAndWait([
            '북적이는 인파를 헤치고 레이스 후 휴게 구역에서 ',
            me.get_colored_name(),
            '은(는) ',
            coffee.sex,
            '의 모습을 발견했다.',
          ]);
          era.print([me.get_colored_name(), '은(는) 어떻게 할까?']);
          era.printButton('다가간다 (영입 시도)', 1);
          era.printButton('관둔다 (영입 포기)', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait([
              '그날 밤의 경험 때문에 ',
              me.get_colored_name(),
              '은(는) 두려움을 느꼈지만, 호기심이 공포를 이겨냈다. ',
              me.get_colored_name(),
              '은(는) 앞으로 걸음을 옮겼다.',
            ]);
            await era.printAndWait([
              coffee.sex,
              '의 모습은 동기 ',
              coffee.get_uma_sex_title(),
              '들과 영입하러 온 트레이너들 사이에 섞여 있었다. 선발 레이스에서 상위권에 올랐음에도 불구하고, 아무도 ',
              coffee.sex,
              '에게 다가가지 않는 듯한 분위기였다.',
            ]);
            era.printButton(
              `「안녕, ${coffee.name} 학생. 선발 레이스 성적이 아주 좋던데. 축하해.」`,
              1,
            );
            await era.input();
            await coffee.say_and_wait([
              '……감사합니다. 그날의 트레이너 ',
              me.get_adult_sex_title(),
              '……',
            ]);
            await era.printAndWait([
              coffee.get_colored_name(),
              '도 ',
              me.get_colored_name(),
              '을(를) 알아본 모양이다. 하지만 ',
              me.get_colored_name(),
              '이(가) 말을 걸어온 것에 조금 놀란 듯 멍하니 고개를 끄덕였다.',
            ]);
            era.printButton('「오지랖일지도 모르겠지만, 영입 제안은 좀 있었니?」', 1);
            await era.input();
            await coffee.say_and_wait('……지금은, 없어요.');
            await era.printAndWait('두 사람 사이에 잠시 침묵이 흘렀다.');
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 아까 찾아보았던 ',
              coffee.get_colored_name(),
              '에 대한 자료를 떠올렸다.',
            ]);
            await era.printAndWait([
              '다른 ',
              coffee.get_uma_sex_title(),
              '들과 ',
              coffee.sex,
              '에게 관심을 가졌던 트레이너들의 말에 따르면, ',
              coffee.get_colored_name(),
              '는 항상 아무도 모르는 사람이나 사물에 대해 기묘한 이야기를 하곤 하며, 무언가를 쫓는 듯한 모습이 자주 목격된다고 한다. 한 베테랑 트레이너가 ',
              coffee.sex,
              '와 접촉을 시도한 적이 있었으나, 돌아올 때의 찌푸린 미간으로 보아 결과가 좋지 않았음을 짐작게 했다. 결국 ',
              coffee.get_colored_name(),
              '에겐 「문제아」라는 딱지가 붙었고, 트레이너들이 기피하는 존재가 되어버린 것이다.',
            ]);
            await era.printAndWait([
              '하지만 ',
              me.get_colored_name(),
              '은(는) 그렇게 생각하지 않았다. 그날 밤의 경험과 ',
              coffee.sex,
              '가 말한 【친구】에는 분명 숨겨진 사정이 있을 것이라 확신했다.',
            ]);
            await era.printAndWait('일단 화제를 돌려보기로 했다.');
            era.printButton(
              '「그날 밤 일은 정말 고마웠어. 네 도움이 없었다면 정말 큰일 났을 거야……」',
              1,
            );
            await era.input();
            await era.printAndWait([
              '그날 밤 어둠 속에서 ',
              me.get_colored_name(),
              '은(는) 눈치채지 못했지만, ',
              coffee.get_colored_name(),
              '는 타인의 감사를 받는 것에 몹시 서툰 모양이다. ',
              me.get_colored_name(),
              '의 솔직한 감사 인사에 ',
              coffee.get_colored_name(),
              '는 멍하니 굳어버렸고, 꼬리가 좌우로 흔들리는 리듬이 순식간에 흐트러졌다. 한참이 지나서야 ',
              me.get_colored_name(),
              '에게 대답을 돌려주었다.',
            ]);
            await coffee.say_and_wait(
              '그저 우연히 도와준 것뿐이에요…… 그보다 저에게 가까이 오지 않는 편이 좋을 텐데……',
            );
            await era.printAndWait(['가까이 오지 말라니, 어째서?' ]);
            await era.printAndWait([
              '이번엔 ',
              me.get_colored_name(),
              '이(가) 당황할 차례였다. 대화를 이어가려 준비했던 말들이 거절 섞인 답변에 막혀 목구멍 안으로 삼켜졌다.',
            ]);
            await era.printAndWait([
              me.get_colored_name(),
              '이(가) 의문을 제기하기도 전에, ',
              coffee.get_colored_name(),
              '는 「죄송합니다」라는 한마디를 남기고 인파 속으로 사라졌다.',
            ]);
            await era.printAndWait([
              '홀로 떠나가는 ',
              coffee.sex,
              '의 뒷모습을 보며, ',
              me.get_colored_name(),
              '의 의문은 이내 감탄으로 바뀌었다.',
            ]);
            era.printButton(
              `（대체 정체가 뭘까, 이 ${coffee.get_uma_sex_title()}는……）`,
              1,
            );
            await era.input();
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) 트레센 학원에서 말하는 「문제아」라는 단어의 무게를 조금 실감하게 되었다.',
            ]);
            await era.printAndWait([
              coffee.get_colored_name(),
              '가 떠난 뒤, ',
              me.get_colored_name(),
              '은(는) 더 이상 선발 레이스에 집중할 수 없었다. 몇몇 괜찮아 보이는 ',
              coffee.get_uma_sex_title(),
              '들과 이야기를 나누어 보았지만 성과는 없었고, 결국 일찍 트레센을 나섰다.',
            ]);
            era.set('cflag:25:무작위모집', 0);
            era.set('flag:대상물색', 25);
            add_event(
              event_hooks.week_end,
              new EventObject(25, cb_enum.recruit),
            );
            event_marks.add(event_hooks.week_end);
            return true;
          } else {
            await era.printAndWait([
              '그날 밤의 일은 ',
              me.get_colored_name(),
              '에겐 평생의 악몽이었다. 공포심에 발걸음을 멈춘 ',
              me.get_colored_name(),
              '은(는) 결국 몸을 돌려 떠나버렸다.',
            ]);
          }
        }
        break;
      case event_hooks.recruit_start:
        event_marks.sub(event_hooks.recruit_start);
        await era.printAndWait(
          '불행은 겹쳐서 온다더니, 일이 안 풀릴 때는 정말 끝도 없는 법이다.',
        );
        await era.printAndWait([
          '이른 아침부터 훈련장에 나가 담당 ',
          coffee.get_uma_sex_title(),
          '를 물색하던 ',
          me.get_colored_name(),
          '은(는) 예상대로 소득 없이 돌아왔다. 지친 몸을 이끌고 기숙사에 돌아와 잠들었다가 깨어나 보니, 온몸을 뒤져도 스마트폰이 보이질 않았다.',
        ]);
        await era.printAndWait('별수 있나, 다시 찾으러 가야지.');
        await era.printAndWait([
          '훈련장에 도착했을 때는 이미 날이 완전히 저문 뒤였다. ',
          me.get_colored_name(),
          '은(는) 휴대폰을 찾느라 한참 고생할 줄 알았으나, 머지않은 풀밭 위에서 잘게 부서지는 눈부신 빛의 조각들이 반짝이는 것을 발견했다.',
        ]);
        await era.printAndWait([
          '마치 무언가에 이끌리는 기분으로—— ',
          me.get_colored_name(),
          '은(는) 묘한 이끌림에 다가갔고, 그곳에서 잃어버렸던 자신의 휴대폰을 찾았다.',
        ]);
        era.printButton('「운이…… 좋다고 해야 하나?」', 1);
        await era.input();
        await era.printAndWait('슈슉————');
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 안도할 새도 없이, 정체 모를 무언가가 바람을 가르며 ',
          me.get_colored_name(),
          '의 어깨를 스쳐 지나갔다. 주위를 둘러보았으나 차가운 달빛 아래 그 무엇도 보이지 않았다.',
        ]);
        era.printButton('「이건……」', 1);
        await era.input();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 사지에서 몸통으로 스며드는 한기를 느꼈고, 그 한기가 지나간 자리는 점차 굳어갔다. ',
          me.get_colored_name(),
          '은(는) 움직이려 했지만 손발이 한기에 눌린 듯 마치 녹슨 기계처럼 움직이지 않았다. 마음을 다스려 보려 해도 머릿속에선 트레센의 온갖 괴담들이 자꾸만 떠올랐고, 이는 ',
          me.get_colored_name(),
          '을(를) 공포의 도가니로 몰아넣었다.',
        ]);
        await coffee.say_as_unknown_and_wait('저기……');
        await era.printAndWait([
          '등 뒤에서 들려온 목소리가 순식간에 정적을 깼다. 찰나의 순간 움직임을 되찾은 ',
          me.get_colored_name(),
          '은(는) 다급하게 신선한 공기를 들이마셨다. 당장이라도 도망치고 싶은 공포를 억누르며 뒤를 돌아보자, 방금 러닝을 마친 듯 숨을 몰아쉬는 한 ',
          coffee.get_uma_sex_title(),
          '가 ',
          me.get_colored_name(),
          '을(를) 바라보고 있었다.',
        ]);
        await coffee.say_as_unknown_and_wait(
          '여기 한참 서 계시는 걸 보고, 혹시 무슨 일이라도 있나 해서……',
        );
        await era.printAndWait([
          '한참 서 있었다고? ',
          me.get_colored_name(),
          '이(가) 달빛에 의지해 시계를 보자, 분침이 이미 한 바퀴의 4분의 1 이상을 돌아가 있었다. 벌써 20분 가까이 흐른 것인가?',
        ]);
        await coffee.say_and_wait([
          '친구가 먼저 당신을 발견했어요…… 친구와 함께 달리고 있었는데, ',
          coffee.sex,
          '가 갑자기 방향을 바꾸는 바람에 당신을 보게 된 거예요……',
        ]);
        await era.printAndWait([
          '어쨌든 이 학생과 ',
          coffee.sex,
          '의 친구가 ',
          me.get_colored_name(),
          '을(를) 도와준 셈이다. 감사를 표한 뒤 ',
          me.get_colored_name(),
          '은(는) 자신의 신분과 이곳에 온 이유를 설명했고, 감사를 전하기 위해 친구의 위치를 물었다.',
        ]);
        await coffee.say_as_unknown_and_wait('친구라면, 바로 옆에 있잖아요……?');
        await era.printAndWait([
          '눈앞의 검은 긴 생머리를 가진 가냘픈 ',
          coffee.get_uma_sex_title(),
          '가 ',
          me.get_colored_name(),
          '의 옆 빈 공간을 힐끗 보며 고개를 갸웃거렸다. 그제야 ',
          me.get_colored_name(),
          '은(는) ',
          coffee.sex,
          '의 시선이 처음부터 줄곧 자신에게 고정되어 있었다는 것을 깨달았다. 마치 심문하는 듯한 그 태도에 ',
          me.get_colored_name(),
          '은(는) 묘한 이질감을 느꼈다.',
        ]);
        await era.printAndWait([
          '검은 머리 ',
          coffee.get_uma_sex_title(),
          '의 머리 위에 솟은 흰색 바보털이 ',
          coffee.sex,
          '의 호흡에 맞춰 미세하게 흔들렸고, ',
          me.get_colored_name(),
          '의 마음도 그에 맞춰 요동쳤다.',
        ]);
        await era.printAndWait([
          '이런 상황에서 농담을 하다니, 참 이상한 ',
          coffee.get_uma_sex_title(),
          '로군.',
        ]);
        await era.printAndWait([
          '……정말 농담일까? 직접 겪은 영리적인 현상 때문에 ',
          me.get_colored_name(),
          '은(는) 자신도 모르게 빈 공간에서 몇 걸음 물러났다.',
        ]);
        era.printButton('「……저기, 지금 농담하는 거야?」', 1);
        await era.input();
        await coffee.say_as_unknown_and_wait([
          '……농담 같은 게 아니에요…… 그리고, 트레이너 ',
          me.get_adult_sex_title(),
          '……',
        ]);
        await era.printAndWait([
          coffee.get_uma_sex_title(),
          '가 서서히 ',
          me.get_colored_name(),
          '에게 다가왔다. 그제야 ',
          me.get_colored_name(),
          '은(는) ',
          coffee.sex,
          '의 모습을 제대로 볼 수 있었다. ',
          coffee.get_uma_sex_title(),
          '중에서도 손꼽힐 만큼 아름답고 정교한 이목구비, 핏기 없이 창백한 피부, 이마 위로 드리워져 얼굴을 가르는 검은 긴 머리. 그리고 ',
          me.get_colored_name(),
          '에게 가장 깊은 인상을 남긴 것은 ',
          coffee.sex,
          '의 탁한 황색 눈동자였다.',
        ]);
        await coffee.say_as_unknown_and_wait(
          '어서 저와 함께 여기서 나가주세요. 무언가가 당신을 노리고 있어요. 방금 전에도……',
        );
        await era.printAndWait([
          coffee.get_teen_sex_title(),
          '의 낮은 속삭임이 밤바람을 타고 ',
          me.get_colored_name(),
          '의 귓가에 스며들었다. 주변의 어둠 속에서 희미한 웃음소리가 들려오는 것 같았다. 그 후 이 ',
          coffee.get_uma_sex_title(),
          '와 함께 무사히 훈련장을 빠져나왔지만, 그날 밤의 기억은 ',
          me.get_colored_name(),
          '의 머릿속에 깊게 각인되었다.',
        ]);
        era.add('cflag:25:모집상태', -1);
        return true;
      case event_hooks.week_end:
        await era.printAndWait([
          '노을이 질 무렵, ',
          me.get_colored_name(),
          '은(는) 홀로 우울한 퇴근길을 걷고 있었다. 머릿속이 오늘의 답답한 일들로 가득 차 있었기에, ',
          me.get_colored_name(),
          '은(는) 어느 길모퉁이를 돌고 나서야 주변 세계가 변했다는 것을 깨달았다.',
        ]);
        era.printButton('「뭔가 이상해……」', 1);
        await era.input();
        await era.printAndWait(
          '평소보다 짙은 황색의 노을이 등 뒤에서 대지를 비추고 있었고, 익숙한 주변 풍경은 이 황혼 속에서 마치 오래된 영화처럼 현실감을 잃어버린 듯했다. 발밑의 그림자가——',
        );
        await era.printAndWait('아니, 그림자가 사라졌다!');
        await era.printAndWait([
          '순식간에 이마에 식은땀이 맺혔다. ',
          me.get_colored_name(),
          '은(는) 비틀거리며 길가 담벼락으로 다가가 힘이 풀린 다리를 지탱하기 위해 벽에 등을 기댔다.',
        ]);
        await era.printAndWait(
          '길 양옆을 둘러보아도 별다른 변화는 없어 보였다. 저 멀리 사람들의 실루엣과 트레센 학원도 보였다. 만약 이대로 전력을 다해 트레센으로 달려간다면……',
        );
        await era.printAndWait([
          '생각이 들자마자 ',
          me.get_colored_name(),
          '은(는) 트레센 방향을 향해 무작정 달리기 시작했다.',
        ]);
        await era.printAndWait([
          '하지만 결과는 ',
          me.get_colored_name(),
          '의 생각처럼 낙관적이지 않았다. 괴담을 통해 얻은 지식 덕분인지, 세 번째로 같은 광고판을 마주한 순간 ',
          me.get_colored_name(),
          '은(는) 자신이 소위 「귀신 들린 길」에 갇혔다는 사실을 받아들이고 방금 전의 담벼락으로 되돌아왔다.',
        ]);
        await era.printAndWait(
          '석양은 계속해서 저물어가고, 주변 풍경은 더욱 기괴하게 변해갔다. 이미 문을 닫은 상점 안에서는 가느다란 속삭임이 들려왔고, 길가 쓰레기통에서는 검은 머리카락이 기어 나왔다. 멀리 보이던 트레센마저 깊어가는 어둠 속에서 흐릿하고 뒤틀려 보이기 시작했다.',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 이제 한계라고 느꼈다.',
        ]);
        await coffee.say_and_wait('트레이너 선생님…… 제 목소리…… 들리나요?');
        await era.printAndWait(['이것은 ', coffee.get_colored_name(), '의 목소리다.']);
        await era.printAndWait([
          '비록 ',
          coffee.sex,
          '와 만난 것은 두 번뿐이었고, 목소리 또한 흐릿하고 끊겼지만, ',
          me.get_colored_name(),
          '은(는) ',
          coffee.sex,
          ' 특유의 낮고 허스키한 목소리를 똑똑히 기억하고 있었다. ',
          coffee.sex,
          '는 어디에 있지?',
        ]);
        await era.printAndWait([
          '마치 구명줄을 잡은 기분으로 ',
          me.get_colored_name(),
          '은(는) 고개를 들어 사방을 두리번거렸다.',
        ]);
        await coffee.say_and_wait([
          '트레이너 ',
          me.get_adult_sex_title(),
          ', 당신은 지금…… 다른 세계에 있어요. 저는 친구의 도움을 빌려…… 겨우 소통하고 있는……',
        ]);
        era.printButton('「다른 세계…… 설마 나 죽은 거야?」', 1);
        await era.input();
        await coffee.say_and_wait([
          '아니요…… 시간…… 해가 지기 전까지는 기회가…… 트레이너 ',
          me.get_adult_sex_title(),
          ', 저는 직접 도와드릴 수가…… 진정하세요…… 환각에 미혹되지 마세요. 그것들도 직접적으로는…… 대응 방법만 찾는다면 반드시……',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 목소리는 서서히 사라졌지만, ',
          me.get_colored_name(),
          '은(는) 다시금 기운을 차릴 수 있었다.',
        ]);
        await era.printAndWait([
          '정신을 바짝 차리고 최대한 주변의 기괴한 풍경을 무시하며, ',
          me.get_colored_name(),
          '은(는) 모든 것의 시작이었던 「그림자」에 대해 생각했다.',
        ]);
        await era.printAndWait([
          '그래, 그림자. 이것이 현재 ',
          me.get_colored_name(),
          '에게 일어난 유일한 이변이다. ',
          me.get_colored_name(),
          '이(가) 손을 들어 살펴보니 손가락 사이의 음영은 여전했고, 옷의 주름 또한 빛의 대비로 선명했다. 사라진 것은 오직 발밑에서 뻗어 나가는 전신의 그림자뿐이었다.',
        ]);
        await era.printAndWait('다시 말해, 정신적 혹은 영적인 의미의 「그림자」를 잃어버린 것인가?');
        await era.printAndWait([
          coffee.get_colored_name(),
          '가 말한 「다른 세계」라는 설명과 종합해볼 때, 지금 있는 곳은 어떤 괴이가 만들어낸 격리된 공간이며, 그림자가 사라진 것은 이곳에 붙잡혔다는 증표일지도 모른다.',
        ]);
        await era.printAndWait(
          '실마리를 잡았으니 이제 탈출할 방법뿐이다. 남은 시간은……',
        );
        await era.printAndWait('멀리 보이는 석양이 지평선에 닿으려 하고 있었다. 남은 시간은 단 몇 분뿐이다.');
        await era.printAndWait([
          '심장 박동이 전신으로 느껴졌고, 아드레날린이 혈관을 타고 온몸에 퍼졌다. ',
          me.get_colored_name(),
          '은(는) 심호흡을 한 뒤 눈을 감았다.',
        ]);
        await era.printAndWait(
          '빛이 있어야 그림자가 생긴다면, 정신적인 그림자가 사라졌을 때는 마음의 창을 닫아야 하는 게 아닐까.',
        );
        await era.printAndWait([
          '기억 속의 경로를 되새기며, ',
          me.get_colored_name(),
          '은(는) 눈을 감은 채 트레센 방향으로 빠르게 걸음을 옮겼다.',
        ]);
        await era.printAndWait([
          '남자의 욕설, 여자의 비명, 아이의 울음소리, 노인의 탄식. 온갖 소리가 밧줄처럼 꼬여 ',
          me.get_colored_name(),
          '의 귓속을 파고들었다. ',
          me.get_colored_name(),
          '은(는) 이 공간의 노골적인 악의를 느꼈다.',
        ]);
        await era.printAndWait([
          '안도감을 얻기 위해 눈을 뜨고 싶은 욕구를 억누르며, ',
          me.get_colored_name(),
          '은(는) 속도를 높였다.',
        ]);
        await era.printAndWait([
          '결과는 예상외로 순조로웠다. 이 괴이한 존재는 정말로 ',
          me.get_colored_name(),
          '에게 직접적인 해를 끼칠 수 없었던 것이다.',
        ]);
        await era.printAndWait([
          '귓가에서 무언가 깨지는 듯한 소리가 들린 뒤 모든 것이 정적으로 돌아갔다. ',
          me.get_colored_name(),
          '은(는) 눈을 떴다. 하늘은 이미 어두워져 있었고, 길가에서 멍하니 서 있던 괴상한 사람을 행인들이 이상하게 쳐다보고 있었다.',
        ]);
        await era.printAndWait('발밑을 내려다보자, 그림자가 얌전히 자리를 지키고 있었다.');
        await era.printAndWait('드디어 끝난 모양이다.');
        await coffee.say_and_wait([
          '어서 오세요, 트레이너 ',
          me.get_adult_sex_title(),
          '……',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 목소리가 등 뒤에서 들려왔다.',
        ]);
        await era.printAndWait([
          '뒤를 돌아보자, ',
          coffee.sex,
          '는 손에 이미 깨져버린 부적을 든 채, ',
          me.get_colored_name(),
          '(으)로부터 2미터도 채 안 되는 거리에서 ',
          me.get_colored_name(),
          '의 상태를 살피고 있었다.',
        ]);
        era.printButton('「또 너한테 구원받았네……」', 1);
        await era.input();
        await era.printAndWait([coffee.get_colored_name(), '가 고개를 저었다.']);
        await coffee.say_and_wait([
          '그런 말씀 마세요. 트레이너님이 스스로의 의지로 돌아올 방법을 찾아내신 거예요…… 오히려, 트레이너 ',
          me.get_adult_sex_title(),
          '이 이번 위험에 빠진 건 제 책임도 있어요……',
        ]);
        await coffee.say_and_wait([
          '트레이너 ',
          me.get_adult_sex_title(),
          ', 당신을 향한 그들의 유혹이 제 예상보다 훨씬 강했어요…… 원래는 제가 그들을 끌어들인 거라고 생각했는데…… 만약 더 일찍 눈치챘더라면, 오늘 같은 일은 없었을지도 몰라요……',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 이제야 ',
          coffee.get_colored_name(),
          '가 전에 했던 말의 의미를 이해했다. 문제가 ',
          coffee.sex,
          ' 자신에게 있다고 생각해서 다른 사람을 말려들게 하고 싶지 않았기에, ',
          me.get_colored_name(),
          '에게 다가오지 말라고 했던 것이다. 정말 착한 아이로군……',
        ]);
        era.printButton('「그럼, 앞으로도 이런 일을 겪게 된다는…… 뜻일까?」', 1);
        await era.input();
        await coffee.say_and_wait('그럴 가능성이 있어요……');
        await coffee.say_and_wait('하지, 하지만! 제가 계속 도와드릴 테니까, 부디……');
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 겁먹을까 걱정된 모양인지, ',
          coffee.get_colored_name(),
          '는 다급하게 뒷말을 덧붙였다.',
        ]);
        await era.printAndWait([
          '갑자기 다급해진 ',
          coffee.get_uma_sex_title(),
          '를 보며, ',
          me.get_colored_name(),
          '의 마음속에는 의외로 미래에 대한 두려움이 생기지 않았다. 이번에 성공적으로 탈출해서 담력이 세진 걸까? 아니면 ',
          coffee.get_colored_name(),
          '와 ',
          coffee.sex,
          '가 말하는 「친구」에 대해 막연한 신뢰가 생긴 걸까?',
        ]);
        await era.printAndWait([
          '어쨌든, ',
          me.get_colored_name(),
          '은(는) 어떤 가능성을 떠올렸고, 그것을 눈앞의 ',
          coffee.get_teen_sex_title(),
          '에게 전하기로 했다.',
        ]);
        era.printButton(
          '「그만큼 신세를 졌으니, 나도 그에 걸맞은 보답을 해야겠지……」',
          1,
        );
        era.printButton(
          '「내가 네 트레이너가 되는 건 어때? 이래 봬도 트레이닝에 대해서는 꽤 자신이 있거든.」',
          2,
        );
        await era.input();
        await era.printAndWait([
          '생각지도 못한 영입 제안을 들은 ',
          coffee.get_colored_name(),
          '는 놀란 듯 눈을 크게 떴다. 그러더니 이내 무언가 깨달은 듯 아무도 없는 허공을 바라보았다. 한동안의 침묵 끝에 ',
          coffee.get_teen_sex_title(),
          '가 대답했다.',
        ]);
        await coffee.say_and_wait([
          '그렇다면, 트레이너 ',
          me.get_adult_sex_title(),
          '…… 제가 그 아이를 따라잡을 수 있게 도와주실래요? 저의…… 친구를?',
        ]);
        await era.printAndWait([
          '친구. ',
          me.get_colored_name(),
          '은(는) 다시 한번 ',
          coffee.get_colored_name(),
          '의 입에서 그 단어를 들었다.',
        ]);
        await era.printAndWait([
          '직접 영적인 현상을 겪어본 ',
          me.get_colored_name(),
          '이(가) 이를 ',
          coffee.sex,
          '의 망상이라고 치부할 리 없었다. 하물며 ',
          coffee.sex,
          '의 말대로라면 그 친구는 위기의 순간마다 ',
          me.get_colored_name(),
          '을(를) 두 번이나 구해준 존재가 아닌가.',
        ]);
        await era.printAndWait('대답은 이미 정해져 있었다.');
        era.printButton(
          `「어디 한번 해보자고……! 그 친구든, 아니면 다른 어떤 강력한 ${coffee.get_uma_sex_title()}든, 내가 너를 이끌고 반드시 뛰어넘게 해줄게!」`,
          1,
        );
        await era.input();
        get_custom_mec(25).set_callname();
        await coffee.say_and_wait([
          '……네! 그럼 잘 부탁드려요, ',
          sys_get_colored_callname(25, 0),
          '!',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '에게 손을 내밀었다. ',
          coffee.sex,
          '가 처음으로 ',
          me.get_colored_name(),
          ' 앞에서 미소를 지었고, 탁했던 황색 눈동자에도 생기가 돌기 시작했다.',
        ]);
        await era.printAndWait('톡——');
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 손을 뻗어 ',
          coffee.get_colored_name(),
          '와 손을 잡는 순간, 무언가가 가볍게 ',
          me.get_colored_name(),
          '의 어깨를 두드렸고, 그 반동에 ',
          me.get_colored_name(),
          '은(는) 저도 모르게 비틀거렸다.',
        ]);
        await era.printAndWait('——부탁할게.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 아무런 목소리도 듣지 못했지만, 마음속으로 그런 감정을 느낄 수 있었다.',
        ]);
        await era.printAndWait([
          '이것이 친구인가? ',
          me.get_colored_name(),
          '은(는) 주위를 둘러보았으나 여전히 그 모습은 보이지 않았다.',
        ]);
        await era.printAndWait([
          '아무래도 앞으로 ',
          coffee.sex,
          '와 함께 기묘하고도 특별한 시간을 보내게 될 것 같다.',
        ]);
        era.set('cflag:25:모집상태', recruit_flags.yes);
        era.set('flag:대상물색', 0);
        event_marks.sub(event_hooks.week_end);
        add_event(
          event_hooks.week_start,
          new EventObject(25, cb_enum.edu).set_arg('beginning'),
        );
    }
  }
};