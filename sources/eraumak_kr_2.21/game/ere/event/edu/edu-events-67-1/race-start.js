const era = require('#/era-electron');

const Edu67UntilOutStart = require('#/event/edu/edu-events-67-1/out-start');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const DaiyaEduMarks1 = require('#/data/event/edu-event-marks/edu-event-marks-67-1');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {CharaTalk} daiya */
async function first_g1_event(daiya) {
  era.printButton('「옷은 챙겼어?」', 1);
  await era.input();
  await daiya.say_and_wait(
    '챙겼어요, 이미 가방 안에 넣어뒀답니다. 만약을 대비해서 예비용 편자도 잊지 않고 가져왔고요.',
  );
  era.printButton('「편자는?」', 1);
  await era.input();
  await daiya.say_and_wait('물론 이미 다 박아두었죠…… 트레이너 선생님, 그렇게 긴장하지 마세요.');
  await era.printAndWait(`${daiya.sex}의 긴장을 풀어주려다, 오히려 위로를 받고 말았다.`);
  await era.printAndWait('우우웅, 우우웅……');
  await daiya.say_and_wait('어머, 핸드폰이…… 전화네요. 잠시 실례할게요.');
  await daiya.say_and_wait('여보세요, 아버님? 네, 씩씩하게 준비하고 있어요──');
  await era.printAndWait('……');
  await daiya.say_and_wait('이야기 도중에 갑자기 전화를 받아서 죄송해요.');
  era.printButton('「부모님께서 응원 전화를 하신 거야?」', 1);
  await era.input();
  await daiya.say_and_wait(
    '네…… 후훗! 아버님도 트레이너 선생님처럼, 제가 빠뜨린 물건은 없는지 계속 걱정하시더라고요.',
  );
  await daiya.say_and_wait(
    '매번 레이스 전이 되면, 저보다 주변 분들이 더 긴장하시는 것 같아요.',
  );
  await daiya.say_and_wait(
    '……전 『반드시 승리를 가져오겠다』고 말씀드렸지만, 부모님은 그저 제가 다치지 않고 무사하기만을 바라셨어요.',
  );
  era.printButton('「분명 진심으로 네가 다치지 않길 바라시는 걸 거야」', 1);
  await era.input();
  await daiya.say_and_wait(
    '맞아요. 아버님과 어머님은 단 한 번도 제게 『이겨라』라고 강요하신 적이 없어요. 그저 부모로서 다정하게 대해주실 뿐이죠.',
  );
  await daiya.say_and_wait('그게 오히려 제 마음을…… 내일 레이스에서 꼭 이기고 싶게 만들어요.');
  await daiya.say_and_wait(
    `그분들의 딸인 제가 『명문 ${daiya.get_uma_sex_title()}』가 되어서, 사토노 가문이 그토록 염원하던 첫 영광을 바쳐드리고 싶거든요.`,
  );
  await daiya.say_and_wait(
    `아버님과 어머님은 아무리 바쁘셔도 ${daiya.get_uma_sex_title()} 업계의 발전을 위해 온 힘을 다하셨어요.`,
  );
  await daiya.say_and_wait('그러니까, 그 노력은 충분히 『보상』받을 가치가 있다고 생각해요♪');
  era.printButton('「반드시 최고의 보답을 해드리자!」', 1);
  await era.input();
  await daiya.say_and_wait('네! 사토노 가문의 첫 G1 승리, 제가 반드시 이뤄내겠어요!');
}

/**
 * @param {CharaTalk} daiya
 * @param {CharaTalk} me
 */
async function sats_sho_event(daiya, me) {
  era.printButton('「내일 폭풍우가 올 거라던데……」', 1);
  await era.input();
  await daiya.say_and_wait(
    '그런 모양이더라고요. 하지만 안심하세요! 악조건의 노면 상태에도 대비해뒀으니까요!',
  );
  await era.printAndWait(
    `사토노 다이아몬드는 ${me.name}에게 꽤 듬직한 대답을 들려주었다. 만약을 위해, ${me.name}은(는) 내일 평소보다 일찍 트레센 학원에서 출발하기로 했다.`,
  );
  era.drawLine({ content: '다음 날 아침' });
  await era.printAndWait('비는 예상만큼 강하지 않았지만, 끊임없이 강한 바람이 불고 있었다.');
  await era.printAndWait(
    `강풍 때문에 전차가 멈출 가능성이 커 보였다. 결국 ${me.name}은(는) 택시를 타고 나카야마 경기장으로 향하기로 했다.`,
  );
  await era.printAndWait(
    '하지만 고속도로 역시 날씨의 영향으로 정체되어 있었다. 경기장 도착 예정 시간이 되었는데도 아직 고속도로를 빠져나가지 못했다──',
  );
  await era.printAndWait(
    '나들목을 빠져나온 뒤에도 길은 여전히 막혔고, 이대로라면 지각할지도 모르는 상황이다……!',
  );
  era.printButton('「내려서 뛰어서 가는 수밖에 없겠어!」', 1);
  await era.input();
  await daiya.say_and_wait('네! 그럼 제가 먼저 출발할게요!');
  await daiya.say_and_wait('윽……! 바람이 너무 강해……!');
  await era.printAndWait(
    `강풍이 사토노 다이아몬드를 쓰러뜨릴 기세로 몰아쳤다. 이 시기에는 보기 드문 봄의 폭풍우다. 날씨 때문에 길에 갇혀 지각 위기에 처할 줄은 꿈에도 몰랐는데──`,
  );
  await daiya.say_and_wait(
    '이런 폭풍우에…… 교통 정체까지…… 하필 오늘 이런 불운이 겹치다니……',
    true,
  );
  await daiya.say_and_wait('……설마………… 징크스 때문에?', true);
  await daiya.say_and_wait(
    '이대로라면 출주조차 불투명해지고…… 그리고 이런 당혹감이 제 퍼포먼스에도 영향을 줄 거예요……!',
    true,
  );
  await daiya.say_and_wait(
    `제가 『명문 ${daiya.get_uma_sex_title()}』가 되기 위해 반드시 거쳐야 할 이 길을, 징크스가 막으려 하는 건가요……!?`,
    true,
  );
  await daiya.say_and_wait('……윽! 그렇다면 절대로 지지 않겠어요!!', true);
  await daiya.say_and_wait('하압──!');
  await era.printAndWait(
    `사토노 다이아몬드는 기합을 내지르며, ${daiya.get_uma_sex_title()} 전용 도로를 질주했다.`,
  );
  era.printButton('「제발 늦지 않기를……!」', 1);
  await era.input();
  era.drawLine();
  await era.printAndWait(
    '나카야마 경기장에 도착했을 때는 이미 『사츠키상』 개최 30분 전이었다.',
  );
  await era.printAndWait(
    `${me.name}은(는) ${daiya.sex}가 무사히 도착했기를 기도하며 패덕으로 향했다.`,
  );
  await era.printAndWait(`사토노 다이아몬드의 모습이……`);
  await daiya.say_and_wait('……흡!');
  era.printButton('（다행이다……!）', 1);
  await era.input();
  await daiya.say_and_wait('……후우……');
  await daiya.say_and_wait('아, 트레이너 선생님!');
  era.printButton('「괜찮아?」', 1);
  await era.input();
  await daiya.say_and_wait('네, 간신히 시간에 맞췄어요!');
  await daiya.say_and_wait(
    '페이스가 조금 흐트러지긴 했지만…… 오히려 그 덕분에 더 냉정해진 것 같아요!',
  );
  await era.printAndWait(
    `사토노 다이아몬드는 미소를 지어 보였다. ${daiya.sex}의 강인한 정신력에 ${me.name}은(는) 다시 한번 놀라고 말았다.`,
  );
  await daiya.say_and_wait('클래식 3관의 첫 관문…… 절대로 질 수 없어요!!');
  await era.printAndWait(
    `그녀의 의지에 호응이라도 하듯, 두껍게 깔렸던 먹구름이 어느덧 걷히고 경기장에는 눈부신 햇살이 다시 찾아왔다.`,
  );
}

module.exports = class extends Edu67UntilOutStart {
  async race_start(daiya, me, callname, hook, extra_flag) {
    const edu_marks = new DaiyaEduMarks1(),
      edu_weeks = era.get('cflag:67:육성턴수합산');
    if (extra_flag.race === race_enum.begin_race && edu_weeks < 48) {
      const mcqueen = get_chara_talk(13);
      await print_event_name('데뷔전을 향해', daiya);
      await era.printAndWait(
        `데뷔전 관람석에 선 ${me.name}은(는), 데뷔전이 코앞으로 다가왔던 어느 날을 떠올렸다──`,
      );
      era.drawLine();
      await mcqueen.say_and_wait('──실례하겠어요.');
      era.printButton('「맥퀸?」', 1);
      await era.input();
      await mcqueen.say_and_wait(
        '조금 참견일지도 모르겠지만, 알고 계시는 게 좋을 것 같아서 왔답니다.',
      );
      await mcqueen.say_and_wait('사토노 씨의 데뷔전이 평소보다 훨씬 큰 주목을 받을 것 같아요.');
      await era.printAndWait(
        `『RKST 총 평점 5억의 데뷔전!!』 메지로 맥퀸이 ${me.name}에게 건넨 잡지에는 커다란 제목이 박혀 있었다.`,
      );
      await era.printAndWait('『Rookie Knowledge, Stats, and Talent』');
      await era.printAndWait(
        `소위 RKST 평점이란 매년 7월 발표되는 데뷔 전 ${daiya.get_uma_sex_title()}들에 대한 평가 점수다.`,
      );
      await era.printAndWait(
        `은퇴한 트레이너와 평론가들이 ${daiya.get_uma_sex_title()}의 능력을 분석하여 수치화한 종합 지표다.`,
      );
      await era.printAndWait(
        '사토노 다이아몬드는 2억 3천만 점이라는, 평점 역사상 압도적인 고득점을 기록했다. 그 때문에 데뷔 전부터 큰 기대를 모으고 있었다.',
      );
      await mcqueen.say_and_wait(
        `듣자하니 사토노 씨보다 더 높은 평점을 받은 ${daiya.get_uma_sex_title()}도 같은 데뷔전에 나간다고 하더군요.`,
      );
      await mcqueen.say_and_wait(
        `그 외에도 고평점을 받은 이들이 여럿 참전하기에, 합계 평점 5억 엔의 데뷔전이라는 이름이 붙은 모양이에요.`,
      );
      era.printButton('「그래서 5억 점의 대결이라고 불리는구나」', 1);
      await era.input();
      await mcqueen.say_and_wait(
        '아무리 많은 관심을 받더라도 사토노 씨라면 문제없겠지만……',
      );
      era.printButton('「고마워, 신경 써서 잘 지켜볼게」', 1);
      await era.input();
      await era.printAndWait(
        '사토노 다이아몬드가 침착한 성격이라 해도 데뷔전이다. 신중하게 행동해서 나쁠 것은 없다.',
      );
      await mcqueen.say_and_wait(
        '네. 워낙 주목도가 높다 보니…… 자연스럽게 이런저런 소리도 들려오겠죠.',
      );
      await daiya.say_and_wait('트레이너 선생님, 오늘도 잘 부탁드려요!');
      await say_by_passer_by_and_wait('기자 A', '아, 사토노 다이아몬드가 나타났다!');
      await daiya.say_and_wait('……오늘은 기자가 참 많이 왔네요.');
      await say_by_passer_by_and_wait(
        '기자 B',
        '사토노 다이아몬드 양, 잠시 인터뷰 가능할까요?',
      );
      era.printButton('「저희는 이제 훈련에 가야 해서……」', 1);
      await era.input();
      await daiya.say_and_wait('트레이너 선생님, 괜찮아요. 짧은 인터뷰라면 문제없답니다.');
      await say_by_passer_by_and_wait(
        '기자 B',
        `감사합니다! 데뷔전이 고평가 ${daiya.get_uma_sex_title()}들의 대결이 될 텐데, 포부 한 말씀 부탁드립니다!`,
      );
      await daiya.say_and_wait('어머, 그런 식으로 불리고 있었나요?');
      await daiya.say_and_wait(
        '주목받는다는 건 기쁜 일이죠. 그 평가에 걸맞은 데뷔전을 보여드릴 수 있도록 노력할게요.',
      );
      await say_by_passer_by_and_wait('기자 B', '압박감은 느껴지지 않나요?');
      await daiya.say_and_wait('그건 다른 분들도 마찬가지라고 생각해요.');
      await era.printAndWait(
        `사토노 다이아몬드는 인터뷰 질문에 빈틈없이 대답했다. 5억 점의 대결 같은 수식어에는 딱히 개의치 않는 모습이다.`,
      );
      await daiya.say_and_wait('후우…… 기다리게 해서 죄송해요. 인터뷰는 끝났어요.');
      era.printButton('「괜찮아?」', 1);
      await era.input();
      await daiya.say_and_wait('헤헤, 목이 좀 마르네요.');
      era.printButton('「학원에 부탁해서 취재를 좀 제한할까?」', 1);
      await era.input();
      await era.printAndWait(
        '지금은 데뷔전을 준비해야 하는 중요한 시기다. 타즈나 씨에게 부탁하면 어느 정도 조율해 줄 것이다.',
      );
      await daiya.say_and_wait(
        `아니요, 괜찮아요. 인터뷰에 응하는 것도 ${daiya.get_uma_sex_title()}의 의무니까요.`,
      );
      await daiya.say_and_wait(
        '제 데뷔전이 화제가 되고 열기가 뜨거워진다면, 오히려 반가운 일인걸요.',
      );
      await daiya.say_and_wait('사토노 가문의 어른들도 이런 상황을 반기실 거라 생각해요.');
      era.printButton('「지나친 관심이 너에게 부담이 되지는 않을까?」', 1);
      await era.input();
      await daiya.say_and_wait(
        '후훗, 이런 건 이미 익숙해요. 저는 어릴 때부터 사토노 가문에서 가장 주목받는 존재였거든요.',
      );
      await daiya.say_and_wait(
        '파티 같은 곳에서도 늘 질문을 받았죠── 성적은 어떠니? 나중에 트레센 학원에 갈 거니? 같은 것들이요.',
      );
      await daiya.say_and_wait(
        `제 또래 친척들이나 ${daiya.get_uma_sex_title()} 친구들은 저만 주목받는 게 치사하다면서 부러워하기도 했는걸요♪`,
      );
      await era.printAndWait(
        `${daiya.sex}는 무리하는 기색이 전혀 없어 보였다. 주목받는 게 익숙하다는 말은 진심인 듯하다.`,
      );
      await daiya.say_and_wait('혹시…… 이런 상황 때문에 트레이너 선생님이 곤란해지신 건가요?');
      await daiya.say_and_wait(
        '만약 훈련에 지장이 생길 것 같다면, 그때는 취재를 거절할게요.',
      );
      era.printButton('「네가 괜찮다면 나도 문제없어……!」', 1);
      await era.input();
      await era.printAndWait(
        `오히려 ${daiya.sex}가 ${me.name}을(를) 걱정해주고 말았다. 본인이 전혀 신경 쓰지 않으니, ${me.name} 역시 과하게 걱정할 필요는 없으리라.`,
      );
      era.drawLine();
      await era.printAndWait('그리고 마침내 다가온 데뷔전 당일──');
      await daiya.say_and_wait('──드디어 시작이네요.');
      era.printButton('「즐거워 보이는걸」', 1);
      await era.input();
      await daiya.say_and_wait('네, 저의 트윙클 시리즈가 드디어 시작된다고 생각하니……');
      await daiya.say_and_wait('흥분돼서 소름이 돋을 정도예요……!');
      await era.printAndWait('사토노 다이아몬드에게 긴장한 기색은 조금도 없었다. 적절한 기합만이 느껴질 뿐.');
      era.printButton('「가자!」', 1);
      await era.input();
      await daiya.say_and_wait('네! 사토노 다이아몬드, 나갑니다!');
    } else if (extra_flag.race === race_enum.sats_sho) {
      await print_event_name('사츠키상을 향해', daiya);
      if (edu_marks.run_g1 === 1) {
        await era.printAndWait(
          '내일은 고대하던 사츠키상 날이다. 하지만 일기예보가 좋지 않다.',
        );
        await sats_sho_event(daiya, me);
      } else {
        await era.printAndWait(
          '내일은 사토노 다이아몬드의 첫 G1 레이스인 『사츠키상』이 열리는 날이다.',
        );
        await first_g1_event(daiya);
        await era.printAndWait(
          `${me.get_couple_title()}은 『사츠키상』 승리를 향해 평소보다 더한 의욕을 보이고 있었다. 그녀의 첫 G1 승리를 기대해 본다.`,
        );
        await era.printAndWait(
          '──하지만, 하늘이 찬물을 끼얹기라도 하듯 TV 속 일기예보는 우려스러운 정보를 전하고 있었다.',
        );
        await sats_sho_event(daiya, me);
      }
    } else if (extra_flag.race === race_enum.toky_yus) {
      await print_event_name('일본 더비를 향해', daiya);
      await era.printAndWait(
        `수많은 ${daiya.get_uma_sex_title()}들이 꿈꾸는 무대── 『일본 더비』. 내일 열릴 본 레이스를 앞두고 사토노 다이아몬드는 평소보다 더 기합이 들어가 있었다.`,
      );
      await daiya.say_and_wait('옷이랑 편자는 어제 미리 준비해 뒀어요.');
      await daiya.say_and_wait('그러니 오늘은 마지막 훈련에 온전히 집중할 수 있겠네요!');
      era.printButton('「그래도 조율하는 정도로만 하자」', 1);
      await era.input();
      await daiya.say_and_wait(
        '피로를 안고 레이스에 나갈 수는 없으니까요. 알겠어요, 모든 건 트레이너 선생님의 지시대로 할게요.',
      );
      await daiya.say_and_wait('──내일은 날씨가 맑을 것 같네요.');
      era.drawLine({
        content: `${race_infos[race_enum.toky_yus].name_zh} 당일`,
      });
      await daiya.say_and_wait('시간이 다 됐네요. 후훗, 오늘은 모든 게 순조로워요♪');
      await era.printAndWait(
        `사토노 다이아몬드는 기분이 좋아 보였다. 그녀의 말대로 『사츠키상』 때와는 달리 경기장으로 오는 길도 매끄러웠다.`,
      );
      await daiya.say_and_wait('마지막으로 편자를 확인하고──');
      await daiya.say_and_wait('꺄앗!');
      era.printButton('「무슨 일이야!?」', 1);
      await era.input();
      await daiya.say_and_wait('신발이……');
      await daiya.say_and_wait(
        '밑창이 터졌어요…… 편자를 박은 위치부터 통째로 찢어진 것 같아요……',
      );
      await daiya.say_and_wait('………………어제 확인할 때만 해도 괜찮았는데……');
      await era.printAndWait(
        `${me.name}이(가) 상태를 살펴보니 수리가 불가능한 수준이었다. 예비용 신발로 갈아 신는 수밖에 없다.`,
      );
      await era.printAndWait(
        '다행히 사토노 다이아몬드는 미리 예비용 신발에도 편자를 박아둔 상태였다.',
      );
      await daiya.say_and_wait('…………네, 괜찮아요!');
      era.printButton('「나가기 전에 발견해서 정말 다행이야!」', 1);
      await era.input();
      await daiya.say_and_wait('……그러게요.');
      await daiya.say_and_wait('…………');
      era.printButton('「……다이아?」', 1);
      await era.input();
      await daiya.say_and_wait('자꾸 평소엔 일어나지 않는 일이 벌어지네요……');
      await daiya.say_and_wait([
        race_infos[race_enum.sats_sho].get_colored_name(),
        ' 때도, ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 때도 그래요. 하필 중요한 클래식 3관 레이스 때만 이런 일이 생기다니, 왜일까요……!',
      ]);
      await daiya.say_and_wait('마치 사토노 가문의 숙원 달성을 방해하려는 것만 같아요.');
      await daiya.say_and_wait('……누군가 제 뒷덜미를 잡아끄는 듯한 느낌이 들어서……');
      await daiya.say_and_wait('……이것이 사토노 가문을 짓누르는 징크스의 힘일까요……');
      era.printButton('「다이아, 지금은 일단……」', 1);
      await era.input();
      await daiya.say_and_wait('하지만!! 전 지지 않아요! 모든 징크스를 깨부수겠어요!!');
      await daiya.say_and_wait('반드시 그러겠다고 맹세했으니까요!! 그러니까……!');
      await daiya.say_and_wait([
        '이번 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        '에서 꼭 이길 거예요! 반드시!!',
      ]);
    } else if (extra_flag.race === race_enum.kiku_sho) {
      const kita = get_chara_talk(68);
      await print_event_name('국화상을 향해', daiya);
      await daiya.say_and_wait(
        '아무리 많이 겪어도, 이 분위기는 늘 가슴을 뛰게 만드네요.',
      );
      era.printButton('「긴장돼?」', 1);
      await era.input();
      await daiya.say_and_wait(
        '아뇨, 제 페이스대로 달리기만 하면 된다고 생각하면 이상하게 마음이 가라앉아요.',
      );
      await daiya.say_and_wait(
        '클래식 3관의 마지막 관문인 『국화상』. 저의 목표도 오늘로 일단락되겠네요.',
      );
      await daiya.say_and_wait(
        '목표를 달성하는 마지막 순간까지, 절대로 방심하지 않겠어요!',
      );
      await kita.say_and_wait('다이아짱, 트레이너 선생님! 어때요? 다이아 컨디션은 괜찮나요?');
      era.printButton('「평소랑 똑같아」', 1);
      await era.input();
      await era.printAndWait(
        '이번에는 아무 사고 없이 레이스를 준비할 수 있을 것 같다. 오늘 사토노 다이아몬드는 징크스에 대해 단 한 번도 언급하지 않았다.',
      );
      await era.printAndWait(
        `${me.name}은(는) 이것이 사토노 다이아몬드에게 아주 좋은 징조라고 생각했다.`,
      );
      await kita.say_and_wait('아, 다이아짱이다!');
      await say_by_passer_by_and_wait(
        '관객 A',
        '오, 사토노 다이아몬드! 기합이 팍 들어간 게 아주 좋아 보이는데!',
      );
      await say_by_passer_by_and_wait('관객 B', [
        `인터뷰에서 한 말을 보니까, 그녀는 `,
        race_infos[race_enum.sats_sho].get_colored_name(),
        '이랑 ',
        race_infos[race_enum.toky_yus].get_colored_name(),
        ' 때는 진정한 실력을 다 발휘하지 못했다고 생각하나 봐.',
      ]);
      await say_by_passer_by_and_wait(
        '관객 B',
        `그렇다면 그녀의 진짜 실력이 어느 정도일지 정말 보고 싶은걸!`,
      );
      await kita.say_and_wait('……응, 나도 마찬가지야……!');
      await kita.say_and_wait('다이아짱──! 힘내────!!');
      await kita.say_and_wait('아, 들었나 봐!');
      await kita.say_and_wait('…………읏!');
      await kita.say_and_wait(
        '……트레이너 선생님. 다이아짱, 오늘은 분명 최고의 모습을 보여줄 거예요!',
      );
      await kita.say_and_wait(
        '저렇게까지 집중한 표정은 저도 처음 봐요……!',
      );
    } else if (extra_flag.race === race_enum.arim_kin && edu_weeks < 96) {
      const kita = get_chara_talk(68);
      await print_event_name('아리마 기념을 향해', daiya);
      await era.printAndWait(
        `『아리마 기념』. 팬 투표로 출주 ${daiya.get_uma_sex_title()}가 결정되는 특별한 레이스.`,
      );
      await era.printAndWait('사토노 다이아몬드의 득표수는 2위. 1위는 키타산 블랙이다.');
      await era.printAndWait(
        `관객 A「오늘 우승은 무조건 키타산 블랙이지! 마지막 끈기가 차원이 다르다고!!」`,
      );
      await era.printAndWait(
        '관객 B「막판에 한 번 더 치고 나가는 그 속도! 웬만한 추입으로는 절대 못 따라잡아!」',
      );
      await era.printAndWait(
        `관객 A「키타산은 우리들의 희망이야! 제발 잘 달려줬으면 좋겠어!」`,
      );
      await daiya.say_and_wait('다들 키타짱 이야기뿐이네요.');
      era.printButton('「다이아도 근소한 차이로 2위잖아!」', 1);
      await era.input();
      await daiya.say_and_wait(
        '어머, 트레이너 선생님도 참…… 너무 우리 쪽 편만 드시네요. 2만 표 차이가 어떻게 근소한 차이인가요.',
      );
      await daiya.say_and_wait(
        '그래도 정말 많은 분이 저를 찍어주셨어요. 그건 정말 기쁘고 영광스러운 일이에요♪',
      );
      await daiya.say_and_wait(
        '……전 그저 키타짱의 팬들이 정말 뜨겁게 응원하고 있다는 게 느껴져서 그래요.',
      );
      await daiya.say_and_wait(
        '그분들이 키타짱에게 거는 기대는 단순히 『이겨라』가 아니라, 『기운 내서 잘 달려줘』라는 느낌이거든요.',
      );
      era.printButton('「혹시…… 부러운 거야?」', 1);
      await era.input();
      await daiya.say_and_wait('음…… 부럽지 않다면 거짓말이겠죠……');
      await daiya.say_and_wait('사람이라면 어쩔 수 없이 남을 부러워하게 되는 법이니까요.');
      await daiya.say_and_wait(
        '게다가 키타짱의 팬들을 실망하게 만든다고 생각하니, 조금 미안한 마음도 들고요.',
      );
      await era.printAndWait(
        `말을 마친 사토노 다이아몬드는 장난스러운 미소를 지었다. 이것은 곧 자신이 승리하겠다는 선언이나 다름없었다. 그녀는 참으로 강하고 믿음직스러웠다.`,
      );
      await daiya.say_and_wait('시간이 됐네요. 그럼 다녀올게요!');
      await era.printAndWait(
        '해설「지보의 이름을 계승한 영애가 등장합니다! 팬 투표 2위, 사토노 다이아몬드!」',
      );
      await era.printAndWait('관객「와아아아아아!」');
      await era.printAndWait(
        '해설「드디어 기다리고 기다리던 마지막 참가자 입장! 팬 투표 1위, 키타산 블랙!」',
      );
      await era.printAndWait('관객「와아아아아아아아아아!!」');
      await daiya.say_and_wait('……키타짱, 오래 기다렸지!');
      await kita.say_and_wait('응! 나도 이날만을 기다려왔어, 다이아짱!');
      await daiya.say_and_wait(
        '이런 기회를 줘서 고마워. 오늘 레이스에서 내가 키타짱을 따라잡았다는 걸 증명할게!',
      );
      await daiya.say_and_wait('아니, 단숨에 추월해 버리겠어!');
      await kita.say_and_wait('선두 자리는 내주지 않을 거야!! 승부하자, 다이아짱!');
    } else if (extra_flag.race === race_enum.sank_hai) {
      const kita = get_chara_talk(68);
      await print_event_name('오사카배를 향해', daiya);
      await era.printAndWait(
        '키타산 블랙도 출주하는 『오사카배』. 사토노 다이아몬드는 묵묵히 준비를 이어갔다.',
      );
      era.printButton('「굉장히 침착해 보이네」', 1);
      await era.input();
      await daiya.say_and_wait(
        '네, 키타짱과 함께 달리는 건 기대되지만, 그렇다고 냉정함을 잃어선 안 되니까요.',
      );
      await daiya.say_and_wait(
        `『명문 ${daiya.get_uma_sex_title()}』가 되기 위해선 제가 어떤 모습이 되어야 하는지 명확히 알고 있어야 해요.`,
      );
      await daiya.say_and_wait(
        `${daiya.get_uma_sex_title()} 계에 어떻게 공헌할 것인가? 『명문 ${daiya.get_uma_sex_title()}』로서 내가 달성해야 할 성취는 무엇인가? 그 답을 찾아야 하죠.`,
      );
      await daiya.say_and_wait(
        `키타짱을 보면, 관객들에게 웃음과 활기를 전해주며 그 힘으로 ${daiya.get_uma_sex_title()} 계를 지탱하는 존재가 될 것 같아요.`,
      );
      await daiya.say_and_wait(
        '그러니 저도 키타짱을 참고하면서 제가 할 수 있는 일을 찾을 수 있다면 좋겠는데……',
      );
      era.printButton(
        `「더불어 『명문 ${daiya.get_uma_sex_title()}』라면 압도적인 실력도 갖춰야겠지」`,
        1,
      );
      await era.input();
      await daiya.say_and_wait(
        `그렇죠. 너무 많은 생각에 잠겨 레이스에서 진다면 『명문 ${daiya.get_uma_sex_title()}』라고 할 수 없을 테니까요.`,
      );
      await daiya.say_and_wait(
        `『명문 ${daiya.get_uma_sex_title()}』라는 이름에 걸맞은 활약으로 승리를 거머쥐겠어요. 그것이 제가 가장 먼저 증명해야 할 일이에요.`,
      );
      await era.printAndWait(
        '관객들은 사토노 다이아몬드와 키타산 블랙의 대결로 열띤 토론을 벌이고 있었다.',
      );
      await era.printAndWait(
        `관객 A「키타산 블랙 대 사토노 다이아몬드…… 이 조합의 대결을 다시 볼 수 있을 줄이야! 둘 다 힘냈으면 좋겠어!」`,
      );
      await era.printAndWait(
        `관객 B「키타산 블랙은 작년 『오사카배』에서 아쉽게 2착이었지, 이번엔 정말 이기고 싶을 거야.」`,
      );
      await era.printAndWait('관객 C「아! 다이아몬드 나왔다!」');
      await era.printAndWait(
        '관객 B「사토노──! 오늘도 멋진 활약 기대할게──!」',
      );
      await era.printAndWait('관객 D「키타산──! 작년의 설욕을 꼭 갚아줘!!」');
      await kita.say_and_wait('네, 반드시 그럴게요!');
      era.printButton('（어라……? 왠지……）', 1);
      await era.input();
      await era.printAndWait(
        `……평소와는 어딘가 느낌이 다르다. ${me.name}은(는) 키타산 블랙에게서 이질적인 분위기를 감지했다.`,
      );
      await kita.say_and_wait('──다이아짱. 저기 말이야, 레이스 전에 꼭 하고 싶은 말이 있어.');
      await daiya.say_and_wait('응……? 키타짱, 무슨 일이야?');
      await kita.say_and_wait('시니어 3관 노선을 제패하는 건 내 목표야!');
      await kita.say_and_wait('그러니까 이 『오사카배』, 절대로 양보 못 해!');
      await daiya.say_and_wait('…………윽!?');
      await kita.say_and_wait('우리 둘 다 최선을 다하자, 다이아짱!');
      await daiya.say_and_wait('……응……!');
      await era.printAndWait(
        `관객 A「오늘 키타산 블랙은 위엄이 느껴지네. 역시 작년 연도 대표 ${daiya.get_uma_sex_title()}다워.」`,
      );
      await era.printAndWait(
        `……기세에 압도당하고 말았다. 키타산 블랙의 당당한 모습에 늘 침착하던 사토노 다이아몬드조차 잠시 말을 잃었다.`,
      );
      await daiya.say_and_wait('방금 찰나였지만…… 키타짱에게 경외감을 느꼈어요……', true);
      await daiya.say_and_wait(
        '기세에서 밀리면 이길 수 없는데!! 제가 그런 실수를……!',
        true,
      );
      await daiya.say_and_wait('……지 않을 거예요!');
      await daiya.say_and_wait('지지 않아, 절대 지지 않아!!');
      era.printButton(`「다이아, 저 기세에 눌리면 안 돼!!」`, 1);
      await era.input();
      await daiya.say_and_wait('네! 반드시 이기겠어요!!');
    } else if (extra_flag.race === race_enum.tenn_spr) {
      const teio = get_chara_talk(3);
      const mcqueen = get_chara_talk(13);
      await print_event_name('텐노상(봄)을 향해', daiya);
      await era.printAndWait(
        '『텐노상(봄)은 2강 대결의 국면!!』 『키타산 블랙 VS 사토노 다이아몬드』',
      );
      await era.printAndWait(
        '『함께 자란 소꿉친구들의 최강 타이틀 쟁탈전! 승리의 여신은 과연 누구에게 미소 지을 것인가!?』',
      );
      await era.printAndWait(
        '──『텐노상(봄)』 관련 기사는 온통 『2강 대결』이라는 제목으로 가득했다.',
      );
      await era.printAndWait(
        '관객 A「2강 대결이라니, 두 사람이 완전히 다른 타입인 게 재미있단 말이지~」',
      );
      await era.printAndWait(
        '관객 A「데뷔 전부터 2억 3천만 점의 영애라고 불리며 큰 기대를 받았던 사토노 다이아몬드와──」',
      );
      await era.printAndWait(
        `관객 C「처음엔 무명이었지만 노력과 근성으로 팬들의 공감을 얻으며 서서히 두각을 나타낸 키타산 블랙……」`,
      );
      await era.printAndWait(
        `관객 A「게다가 둘은 어릴 때부터 절친이잖아. 운명적인 대결 같은 느낌이야!」`,
      );
      await era.printAndWait(
        `관객 C「그래도 오늘은 키타산 블랙이 좀 더 유리하지 않을까? 작년 우승자이기도 하니까.」`,
      );
      await era.printAndWait(
        '안경을 쓴 남성「『텐노상(봄)』은 3200m로 가장 긴 G1 레이스입니다. 요도의 코너는 고저 차가 뚜렷해서 스태미나뿐만 아니라 코스 선점 능력도 중요하죠.」',
      );
      await era.printAndWait('후드티를 입은 남성「갑자기 웬 분석이야?」');
      await era.printAndWait(
        `안경을 쓴 남성「키타산 블랙은 작년 출주 경험이 있다는 점이 유리하게 작용할 겁니다…… 어라, 왠지 전에도 이런 대화를 한 것 같은데.」`,
      );
      await era.printAndWait(
        '후드티를 입은 남성「……아아, 그거 말이지! 똑같은 『텐노상(봄)』에서 메지로 맥퀸과 토카이 테이오가 대결했을 때!」',
      );
      await era.printAndWait(
        '안경을 쓴 남성「과연…… 확실히 그때랑 상황이 비슷하네요……」',
      );
      await teio.say_and_wait(
        '하핫, 다들 오늘 레이스가 우리 때랑 비슷하다고 생각하는 모양이네!',
      );
      await mcqueen.say_and_wait(
        '저와 테이오를 동경하던 두 사람이 우리처럼 『텐노상(봄)』에서 맞붙다니……',
      );
      await mcqueen.say_and_wait('정말 기묘한 인연이군요.');
      await teio.say_and_wait(
        '그 아이들은 우리 경기를 직접 봤었잖아. 그때의 우리보다 더 멋진 모습을 보여줬으면 좋겠어!',
      );
      await mcqueen.say_and_wait('네, 적어도 당시의 우리와 필적할 정도는 되어야겠죠.');
      await daiya.say_and_wait('2강 대결…… 이런 열기 속에 제가 있다는 게 무척 영광스러워요.');
      era.printButton('「다이아는 그렇게 느끼는구나」', 1);
      await era.input();
      await daiya.say_and_wait(
        `네, 이건 과거의 사토노 가문이 단 한 번도 해내지 못한 일이에요. 『레이스로 ${daiya.get_uma_sex_title()}계에 공헌하는 것』.`,
      );
      await daiya.say_and_wait('데뷔 전부터 저를 취재해주셨던 기자분들에게도 감사드리고 싶어요.');
      era.printButton('「네가 늘 성실하게 인터뷰에 응해준 덕분이지」', 1);
      await era.input();
      await daiya.say_and_wait('후훗♪ 키타짱에게도 고마워해야겠네요.');
      await daiya.say_and_wait(
        '키타짱이 모두에게 웃음을 주기 위해 열심히 노력해준 덕분에, 오늘 우리가 이렇게 많은 주목을 받는 거니까요.',
      );
      await daiya.say_and_wait(
        `『명문 ${daiya.get_uma_sex_title()}』로서 마땅히 갖춰야 할 모습…… 저는 역시 키타짱과 경쟁하면서 그 답을 찾고 싶어요.`,
      );
      await daiya.say_and_wait(
        `진정한 『명문 ${daiya.get_uma_sex_title()}』가 되기 위해선 이겨야만 해요.`,
      );
      await daiya.say_and_wait(
        '키타짱이 작년 우승 경험이 있어서 유리해 보일지 모르지만, 그렇기에 이번 승리는 제게 더 큰 의미가 있어요.',
      );
      await daiya.say_and_wait(
        `이 레이스에서 이겨서, 모두가 인정하는 최고의 ${daiya.get_uma_sex_title()}가 되겠어요!`,
      );
    } else if (extra_flag.race === race_enum.kyot_dai && edu_weeks >= 96) {
      await print_event_name('교토 대상전을 향해', daiya);
      await era.printAndWait(
        '『교토 대상전』 시작 전. 관객들 사이에는 걱정스러운 분위기가 감돌고 있었다.',
      );
      await era.printAndWait(
        `관객 C「뉴스 보니까 사토노 다이아몬드 컨디션이 별로라던데, 오늘 어떨지 모르겠네……」`,
      );
      await era.printAndWait(
        `관객 A「기자들이 위화감을 느낄 정도라면 꽤 심각한 거 아냐……?」`,
      );
      await era.printAndWait('관객 C「그러게, 무슨 일이 있었던 건지……」');
      await daiya.say_and_wait('후우……');
      era.printButton('「괜찮아?」', 1);
      await era.input();
      await daiya.say_and_wait('아, 네…… 오늘은 조금 긴장되네요.');
      await era.printAndWait(
        '사토노 다이아몬드의 컨디션은 조율을 거쳐 서서히 회복되고 있었다. 하지만 그 사건 이후의 첫 레이스인 만큼 긴장감이 느껴졌다.',
      );
      await daiya.say_and_wait('……오늘은 괜찮을 거예요.');
      await daiya.say_and_wait('키타짱과 함께 달리고 나서 깨달았거든요……');
      await daiya.say_and_wait('그저 앞만을 바라보고 달렸던 그 감각을요.');
      await daiya.say_and_wait('키타짱을 따라잡고 싶어서, 일편단심으로 달렸던 기분.');
      await daiya.say_and_wait('저는 잠시 제가 달리는 이유를 착각하고 있었어요.');
      era.printButton('「달리는 이유……?」', 1);
      await era.input();
      await daiya.say_and_wait(
        `네, 이전까진 『명문 ${daiya.get_uma_sex_title()}』답게 달려야 한다는 게 제 의무라고만 생각했어요.`,
      );
      await daiya.say_and_wait(
        '맥퀸 씨를 뛰어넘고, 모두에게 해외 진출의 가능성을 보여줘야 한다는 강박…… 그게 제 원래 생각이었죠.',
      );
      await daiya.say_and_wait('하지만 사실은 그게 아니었어요.');
      await daiya.say_and_wait('──전 그저 모두가 제게서 가능성을 느끼길 바랐던 거예요.');
      await daiya.say_and_wait(
        `사토노 가문의 숙원을 이루고 싶고, 맥퀸 씨를 넘어서고 싶고, 『명문 ${daiya.get_uma_sex_title()}』로서 공헌하고 싶은 마음.`,
      );
      await daiya.say_and_wait('그건 모두 제가 키타짱을 쫓고 싶어 했던 마음과 같아요.');
      await daiya.say_and_wait('전부 저 자신의 소망이었던 거죠.');
      await daiya.say_and_wait(
        '누구를 위해서가 아니라, 제 자신의 꿈을 위해 달리는 것.',
      );
      await daiya.say_and_wait(
        '그 본질을 착각했기 때문에 길을 잃고, 목표를 향해 나아가는 법을 잊어버렸던 거예요.',
      );
      await daiya.say_and_wait(
        '전 그냥 앞만 보고 달리면 됐던 거예요. 제 마음이 시키는 대로요.',
      );
      await daiya.say_and_wait('마음 가는 대로 달린다는 건 참 즐거운 일이네요.');
      await daiya.say_and_wait('달리는 게 즐겁다, 그 감각을 다시 되찾았어요.');
      era.printButton('「그랬구나……」', 1);
      await era.input();
      await era.printAndWait(
        `확실히 그녀의 말이 맞다. 가문의 숙원을 짊어지는 것조차 ${daiya.sex} 본인의 선택이었다.`,
      );
      await era.printAndWait(`${daiya.sex}는 자신의 꿈을 향해 나아가고 있는 것이다.`);
      await daiya.say_and_wait(
        `그러니 오늘은 제가 『명문 ${daiya.get_uma_sex_title()}』가 되고 싶다는 꿈을 가슴에 품고 레이스에 임하겠어요.`,
      );
      await daiya.say_and_wait('──사토노 다이아몬드다운 방식으로요.');
    } else if (extra_flag.race === race_enum.takz_kin && edu_weeks >= 96) {
      await print_event_name('타카라즈카 기념을 향해', daiya);
      const kita = get_chara_talk(68);
      await daiya.say_and_wait('……하아, 하아……');
      era.printButton('「어디 아프거나 무거운 곳은 없어?」', 1);
      await era.input();
      await daiya.say_and_wait('……네, 없어요.');
      await daiya.say_and_wait('몸은 가볍고 움직임도 둔하지 않아요.');
      era.printButton('「너무 무리하진 마」', 1);
      await era.input();
      await daiya.say_and_wait('무리하면 다치기 쉬우니까요, 그렇죠?');
      await daiya.say_and_wait(
        '『텐노상(봄)』이 끝난 직후의 피로감은 정말 대단했어요. 몸소 뼈저리게 느꼈답니다.',
      );
      await era.printAndWait(
        '『텐노상(봄)』의 격전 여파로 사토노 다이아몬드의 피로감은 꽤 오랫동안 지속되었다.',
      );
      await era.printAndWait(
        '훈련 강도를 낮추고 체력 회복을 최우선으로 삼았지만, 다행히 몸이 굳지는 않은 듯하다.',
      );
      await daiya.say_and_wait(
        '제게 투표해주신 분들께 예정대로 제 활약을 보여드릴 수 있어서 다행이에요.',
      );
      await daiya.say_and_wait('『타카라즈카 기념』, 시작이구나.');
      await daiya.say_and_wait('키타짱, 오늘도 잘 부탁해.');
      await daiya.say_and_wait('……키타짱?');
      await kita.say_and_wait('어? 아, 다이아짱! 미안 미안, 잠깐 생각을 하느라 못 들었어.');
      await daiya.say_and_wait('방금 잘 부탁한다고 했는데……');
      await kita.say_and_wait('응! 나도 지지 않을 거야!!');
      await daiya.say_and_wait('…………?');
      await daiya.say_and_wait(
        '……키타짱, 『오사카배』나 『텐노상(봄)』 때보다 훨씬 더……',
        true,
      );
      await daiya.say_and_wait('그저 기분 탓이라면 좋겠는데……', true);
    } else if (extra_flag.race === race_enum.tenn_sho) {
      await print_event_name('텐노상(가을)을 향해', daiya);
      const kita = get_chara_talk(68);
      await kita.say_and_wait('──드디어 이날이 왔네…… 『텐노상(가을)』.');
      await daiya.say_and_wait('응……! 드디어 맥퀸 씨과 함께……!');
      await daiya.say_and_wait('내가 동경해온 메지로 맥퀸 씨──', true);
      await daiya.say_and_wait(
        `메지로 가문의 ${daiya.get_uma_sex_title()}로서 의무를 다해낸 『명문 ${daiya.get_uma_sex_title()}』.`,
        true,
      );
      await daiya.say_and_wait(
        `그녀의 고귀하고 기품 넘치는 모습에 매료되어, 저도 그녀처럼 되고 싶다고 꿈꿔왔어요.`,
        true,
      );
      await daiya.say_and_wait(
        '트레센 학원에 들어온 뒤로는 가까이서 그녀의 달리기를 볼 수 있는 것만으로도 행복했죠.',
        true,
      );
      await daiya.say_and_wait(
        '사토노 가문의 숙원을 위해 꿈을 쫓다 보니, 어느새 여기까지 왔네요.',
        true,
      );
      await daiya.say_and_wait('동경하는 분과 드디어 같은 무대에 서게 되다니──', true);
      await daiya.say_and_wait(
        '……그리고 오늘, 저는 라이벌로서 동경하는 분에게 도전하겠습니다!!',
        true,
      );
      await daiya.say_and_wait(
        '전설적인 장거리 주자를 뛰어넘어, 모두가 저에게서 새로운 가능성을 보게 만들겠어요!',
        true,
      );
      await era.printAndWait(
        '해설「이어서 등장! 키타산 블랙과 사토노 다이아몬드! 두 사람이 함께 입장합니다!」',
      );
      await era.printAndWait('관객 A「다이아──! 힘내라────!!」');
      await era.printAndWait('관객 B「『텐노상(가을)』까지 먹어치워 버려, 키타산!!」');
      await era.printAndWait(
        `해설「자, 오래 기다리셨습니다!! 과연 누가 이 참전을 예측했을까요!?」`,
      );
      await era.printAndWait(
        `해설「『텐노상(봄)』 2연패를 달성했던 전설적인 ${daiya.get_uma_sex_title()}, 메지로 맥퀸!!」`,
      );
      await say_by_passer_by_and_wait('관객', '오오오오오오오오!!');
      await era.printAndWait(
        '해설「현장의 이 함성을 들어보십시오! 도쿄 경기장 전체가 흔들리고 있습니다!!」',
      );
      await era.printAndWait(
        '해설「비가 오는 중에도 이 꿈의 대결을 보기 위해 수많은 관객이 몰려들었습니다!」',
      );
      await daiya.say_and_wait('……맥퀸 씨는 역시 대단하네.');
      await kita.say_and_wait('응…… 하지만 우리도 질 수 없지!');
      await daiya.say_and_wait('맞아! 오늘까지 잘 달려온 우리라면!');
      await daiya.say_and_wait('분명 맥퀸 씨를 이길 수 있을 거야!');
      await era.printAndWait('두 사람「1등은 내 거야!! 1등은 내 거라고!!」');
    } else if (extra_flag.race === race_enum.japa_cup && edu_weeks > 95) {
      await print_event_name('재팬 컵을 향해', daiya);
      const kita = get_chara_talk(68);
      const teio = get_chara_talk(3);
      await era.printAndWait(
        '『재팬 컵』── 사토노 다이아몬드는 토카이 테이오가 참전을 선언한 이 레이스에 도전한다.',
      );
      await kita.say_and_wait('설마 다이아짱까지 이 레이스에 나갈 줄은 몰랐어.');
      await daiya.say_and_wait('왜? 테이오 씨도 내가 뛰어넘고 싶은 분인걸!');
      await daiya.say_and_wait(
        '맥퀸 씨의 가장 특별한 라이벌이잖아. 당연히 테이오 씨와도 함께 달려보고 싶었지!',
      );
      await kita.say_and_wait(
        '하하, 하긴 그렇네! 다이아짱이랑 나는 테이오 씨가 얼마나 대단한지 직접 본 사이니까!',
      );
      await daiya.say_and_wait('그리고, 테이오 씨에게서 배우고 싶은 게 하나 더 있어.');
      await daiya.say_and_wait(
        `테이오 씨가 어떻게 『명문 ${daiya.get_uma_sex_title()}』다운 모습을 보여주는지 직접 눈으로 확인하고 싶거든.`,
      );
      await kita.say_and_wait(
        '음…… 자세히는 모르겠지만, 다이아짱에겐 나름의 이유가 있는 거네.',
      );
      await kita.say_and_wait('하지만 말이야! 테이오 씨는 내가 줄곧 동경해온 대상이니까!');
      await kita.say_and_wait(
        '이번 승리는 절대 양보 못 해! 테이오 씨를 이기는 건 바로 나야!!',
      );
      await daiya.say_and_wait(
        `키타짱도, 테이오 씨도 이기고 내가 최고의 『명문 ${daiya.get_uma_sex_title()}』가 되겠어!!`,
      );
      await teio.say_and_wait(
        '후훗, 둘 다 정말 강해졌네. 하지만 이 토카이 테이오 님은 훨씬 더 강하다고!',
      );
      await teio.say_and_wait('내 실력을 똑똑히 보여줄게!');
      await teio.say_and_wait('키타산, 다이아! 전력을 다해서 덤벼보라고!!');
      await era.printAndWait('두 사람「지지 않겠습니다!!」');
    } else if (extra_flag.race === race_enum.arim_kin && edu_weeks > 95) {
      await print_event_name('아리마 기념을 향해', daiya);
      const kita = get_chara_talk(68);
      await daiya.say_and_wait(
        `──사토노 가문의 꿈. 『G1에서 우승할 수 있는 ${daiya.get_uma_sex_title()}』를 수없이 배출하는 것.`,
      );
      await daiya.say_and_wait(
        `저는 그런 『명문 ${daiya.get_uma_sex_title()}』가 되기 위해 어릴 적부터 쉬지 않고 달려왔어요.`,
      );
      await daiya.say_and_wait(
        '트윙클 시리즈의 G1 레이스에서 승리하며 무사히 여기까지 왔고, 오늘 도전할 상대는──',
      );
      await daiya.say_and_wait(
        `『명문 ${daiya.get_uma_sex_title()}』의 선배님들. 제가 동경해온 대상이자 오늘 넘어야 할 라이벌인 두 분.`,
      );
      await daiya.say_and_wait('맥퀸 씨와 테이오 씨.');
      await daiya.say_and_wait(
        '그리고── 우리가 처음 만난 이후로, 늘 제 곁에는 당신이 있었죠.',
      );
      await daiya.say_and_wait(
        '언제나 저보다 앞서 달리고 있던 사람. 비록 우리가 뛰는 레이스가 다르고 목표가 달랐어도.',
      );
      await daiya.say_and_wait('우리 둘은 늘 함께였어.');
      await kita.say_and_wait('──다이아짱!');
      await daiya.say_and_wait('응, 키타짱!');
      await daiya.say_and_wait(
        '트레센 학원에 오기 전부터, 동경하는 분들과 같은 무대에 서는 것을 꿈꿔왔고……',
      );
      await daiya.say_and_wait(
        '키타짱과 서로 경쟁해왔기에 무사히 여기까지 올 수 있었어요.',
      );
      await daiya.say_and_wait('하지만 우리 중 승리의 영광을 차지할 수 있는 건 단 한 사람뿐!');
      await daiya.say_and_wait('키타짱도! 맥퀸 씨도! 테이오 씨도! 그 누구에게도 지지 않겠어요!!');
      await daiya.say_and_wait('승리해서 사토노 가문의, 그리고 저의 꿈을 실현하겠어요!!');
    } else if (
      Math.random() <
      (0.2 * era.get('base:67:체력')) / era.get('maxbase:67:체력')
    ) {
      await print_event_name('활기찬 마음', daiya);
      await era.printAndWait('딩동♪');
      await daiya.say_and_wait(
        '후훗, 또 응원 메시지가 왔네요. 아침부터 알람이 멈추질 않아요.',
      );
      await daiya.say_and_wait(
        '가족, 친구, 그리고 저를 도와주신 수많은 분…… 격려가 필요할 때마다 늘 모두가 곁에 있어 주네요.',
      );
      await daiya.say_and_wait(
        '모두의 마음에 보답하기 위해서라도── 이번 레이스는 꼭 이기겠어요!',
      );
    } else if (
      race_infos[extra_flag.race].race_class === class_enum.G1 &&
      edu_marks.run_g1 !== 1
    ) {
      await print_event_name('나만의 온기', daiya);
      await era.printAndWait(
        '사토노 다이아몬드가 처음으로 도전하는 G1 레이스까지 드디어 하루만이 남았다.',
      );
      await first_g1_event(daiya);
    } else {
      return await super.race_start(daiya, me, callname, hook, extra_flag);
    }
  }
};