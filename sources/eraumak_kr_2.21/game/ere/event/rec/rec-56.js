/**
 * @file 마치카네 후쿠키타루 - 招募
 * @author ALEX
 */
const era = require('#/era-electron');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const me = get_chara_talk(0),
      kitaru = get_chara_talk(56);
    let temp = 0;
    if (await this.check_before_rec()) {
      return false;
    }
    await era.printAndWait([
      '선발 레이스, 그것은 ',
      kitaru.get_uma_sex_title(),
      '와 트레이너의 만남의 장이다.',
    ]);
    if (era.get('flag:현재명성') >= 200) {
      await era.printAndWait([
        '트레이너를 맡은 지도 어느덧 시간이 흘러, ',
        me.get_colored_name(),
        '은(는) 이 업계에 대해 나름대로 깨달은 바가 있었다.',
      ]);
      await era.printAndWait([
        '그중 하나는, ',
        kitaru.get_uma_sex_title(),
        '와 트레이너가 담당 관계를 맺은 뒤 이어지는 3년이라는 계약은, 의심할 여지 없이 양쪽의 운명을 인생이라는 긴 여정 속에서 짧게 교차시킨다는 점이었다.',
      ]);
      await era.printAndWait(
        '어쩌면 그 이후로도 인생의 풍파를 함께 헤쳐 나가게 될지도 모를 일이다.',
      );
    } else {
      await era.printAndWait([
        '트레이너 선배들로부터 전해 내려오는 경험담은 많지만, 그중 하나는 바로——',
      ]);
      await era.printAndWait([
        kitaru.get_uma_sex_title(),
        '와 트레이너가 담당 관계를 맺은 뒤 이어지는 3년이라는 계약은, 의심할 여지 없이 양쪽의 운명을 인생이라는 긴 여정 속에서 짧게 교차시킨다는 점이었다.',
      ]);
      await era.printAndWait(
        '어쩌면 그 이후로도 인생의 풍파를 함께 헤쳐 나가게 될지도 모를 일이다.',
      );
    }
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 주머니에 손을 넣고 만지작거리며, 신사 안의 돌길을 걷고 있었다.',
    ]);
    await era.printAndWait([
      '트레센 학생들이 자주 찾는 그 신사는 이 시기가 되면 선발 레이스를 앞두고 기도를 하러 온 트레이너들과 ',
      kitaru.get_uma_sex_title(),
      '들로 가득 차기 마련이다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이름난 신사로 가는 대신 영감에 이끌려, 트레센으로 가는 길목에 있는 한적한 신사를 골랐다.',
    ]);
    await era.printAndWait([
      '어떤 신을 모시는지도 모를 이 외딴 신사는 평일처럼 한산했다.',
    ]);
    await era.printAndWait([
      '붉은 토리이를 지나 경내로 들어서자, ',
      me.get_colored_name(),
      '의 눈앞에 굵직한 새끼줄을 두른 거목들과 석등들이 나타났다.',
    ]);
    await era.printAndWait([
      '신사의 신성하고 숙연한 분위기는 ',
      era.get('flag:현재명성') >= 200
        ? '다음 담당 우마무스메를 기대하던'
        : '미래에 대해 망설이고 있던',
      '',
      me.get_colored_name(),
      '의 마음에도 잠시나마 평온을 가져다주었다.',
    ]);
    era.printButton('기원한다', 1);
    await era.input();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 눈을 감고 깊게 숨을 들이마셨다……',
    ]);
    await kitaru.say_as_unknown_and_wait('오오오오오——————!!!!');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 참배의 다음 단계를 이어가려던 찰나, 등 뒤에서 들려온 비명에 가까운 함성이 흐름을 끊어 놓았다.',
    ]);
    era.printButton('뒤를 돌아본다', 1);
    await era.input();
    await era.printAndWait([
      '아쉽게도 전설 속 이야기와는 달리, 종소리와 함께 나타난 것은 신령님이 아니라 한 명의 ',
      kitaru.get_uma_sex_title(),
      '였다.',
    ]);
    await era.printAndWait([
      '살짝 헝클어진 오렌지색 단발머리에, 리본 아래로 존재감을 드러내는 가슴팍, 그리고 이나리신의 사자인 여우처럼 가늘고 긴 귀가 쫑긋거리며 ',
      kitaru.get_uma_sex_title(),
      '의 흥분을 여실히 드러내고 있었다.',
    ]);
    await era.printAndWait([
      '하지만 넘쳐흐르는 원기 왕성한 외견과는 딴판으로, ',
      me.get_colored_name(),
      '의 코끝에 닿을 듯 가까운 거리의 ',
      kitaru.get_uma_sex_title(),
      '에게서는 이 신사처럼 맑고 고요한 체취가 풍겼다. 왼쪽 귀에는 다루마 장식을, 오른쪽 귀에는 노란 데이지 꽃을 달고 있었다.',
    ]);
    await era.printAndWait([
      '전혀 어울리지 않을 것 같은 두 가지 요소가 ',
      me.get_colored_name(),
      '의 눈앞에 있는 ',
      kitaru.get_uma_sex_title(),
      '에게 절묘하게 공존하고 있었다.',
    ]);
    await era.printAndWait([
      '그리고 ',
      kitaru.sex,
      '가 고개를 들어 ',
      me.get_colored_name(),
      '을(를) 바라보았을 때, ',
      kitaru.get_uma_sex_title(),
      '들 중에서도 보기 드문 별 모양의 눈동자가 ',
      me.get_colored_name(),
      '을(를) 발견했다는 기쁨으로 반짝이고 있었다.',
    ]);
    era.printButton('자세히 살펴본다', 1);
    await era.input();
    await era.printAndWait([
      '이 시끌벅적한 밤색 털 아이가 트레센 학원의 학생인 것은 확실했다. ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '가 입고 있는 교복을 보고 그것을 확인했다.',
    ]);
    await era.printAndWait('그런데, 지금은 한창 선발 레이스가 열리고 있을 시간이 아닌가?');
    await era.printAndWait([
      me.get_colored_name(),
      '의 눈에 서린 의구심을 읽기라도 한 듯, ',
      kitaru.get_colored_name(),
      '가 곧바로 반응했다.',
    ]);
    await kitaru.say_as_unknown_and_wait('오오! 자기소개를 깜빡했네요!');
    await kitaru.say_as_unknown_and_wait([
      '제 이름은 바로 【',
      kitaru.get_colored_name(),
      '】! 시라오키 님의 인도에 따라 이곳에 왔답니다!',
    ]);
    await kitaru.say_and_wait([
      '운명의 상대가 나타나길 기다리고 있었죠! 즉, 트레이너 ',
      me.get_adult_sex_title(),
      ', 바로 당신이에요!',
    ]);
    await era.printAndWait([
      '말을 마친 ',
      kitaru.sex,
      '는 ',
      me.get_colored_name(),
      '을(를) 향해 두 팔을 활짝 벌렸다.',
    ]);
    await kitaru.say_and_wait('부디! 부디 저의 트레이너가 되어 주세요!');
    await era.printAndWait([
      '이 신사의 영험함이 너무 뛰어난 탓일까? 아니면 세 여신, 혹은 다른 신령의 시선이 우연히 ',
      me.get_colored_name(),
      '을(를) 향한 것일까?',
    ]);
    await era.printAndWait('예를 들면, 저 시라오키 님이라던가?');
    era.printButton('배웠던 민속학 지식을 떠올려 본다', 1);
    era.printButton('비슷한 신화가 있었는지 떠올려 본다', 2);
    temp = await era.input();
    if (temp === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 자신이 배운 지식 중에 그런 신의 이름은 들어본 적이 없다고 확신했다.',
      ]);
    } else if (temp === 2) {
      await era.printAndWait([
        '아니, ',
        me.get_colored_name(),
        '은(는) 그런 신의 이름을 들어본 적이 결코 없었다.',
      ]);
      await era.printAndWait([
        '어쩌면 눈앞의 ',
        kitaru.get_uma_sex_title(),
        '가 만들어낸 망상일지도 모른다는 생각이 들었다.',
      ]);
    }
    await kitaru.say_and_wait(
      '자, 트레이너 님! 저와 함께 트윙클 시리즈에서 행운을 거머쥐자고요!',
    );
    era.printButton('거절한다', 1);
    era.printButton('받아들인다', 2);
    temp = await era.input();
    if (temp === 1) {
      await era.printAndWait([
        '확실히 잘 알지도 못하는 상태에서 덥석 ',
        kitaru.get_uma_sex_title(),
        '의 트레이너가 되는 것은 서로에게 무책임한 행동이다.',
      ]);
      await kitaru.say_and_wait('으으……');
      await era.printAndWait([
        me.get_colored_name(),
        '에게 거절당한 ',
        kitaru.get_teen_sex_title(),
        '는 순식간에 풀이 죽어버렸고, 조금 전까지 파닥거리던 귀도 꼬리와 함께 축 처졌다.',
      ]);
      await era.printAndWait([
        '안타까운 마음이 들긴 했지만, ',
        me.get_colored_name(),
        '은(는) 이 ',
        kitaru.get_colored_name(),
        '의 말 몇 마디에 덜컥 트레이너가 되는 것이 얼마나 위험한지 잘 알고 있었다.',
      ]);
      await era.printAndWait('다만……');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 거절당한 지 불과 몇 초 만에 ',
        kitaru.get_colored_name(),
        '의 얼굴에 다시 미소가 떠오르는 것을 보았다.',
      ]);
      await era.printAndWait(
        '그것은 미소라기보다, 오랜 습관이 만들어낸 강박적인 표정에 가까워 보였다.',
      );
      await me.say_and_wait('……하아.');
      await era.printAndWait([
        '트레이너로서의 책임감이 ',
        me.get_colored_name(),
        '(으)로 하여금 이 상황을 그냥 지나칠 수 없게 만들었다.',
      ]);
    } else if (temp === 2) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 비록 ',
        kitaru.sex,
        '에 대해 잘 알지 못했지만, 자신의 운명을 방금 기도를 마친 신령에게 맡겨보기로 했다.',
      ]);
      await era.printAndWait([
        '하지만 이대로 바로 ',
        kitaru.get_uma_sex_title(),
        '의 트레이너가 되는 것은 서로에게 무책임한 일이다.',
      ]);
    }
    era.printButton('「선발 레이스를 보러 갈게. 결정은 그 후에 하는 게 어때?」', 1);
    await era.input();
    await kitaru.say_and_wait('오오——!');
    await kitaru.say_and_wait('맞아요, 맞아요! 바로 그거예요!');
    await kitaru.say_and_wait('곧 열릴 선발 레이스에서 제 실력을 제대로 보여드릴게요!');
    await kitaru.say_and_wait([
      '그럼, 약속의 의미로 손가락 걸기예요! 에 그러니까…… ',
      me.actual_name,
      ' 트레이너 님!',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 가슴에 달린 명찰을 보고 이름을 더듬더듬 읽으며 손을 내밀었다.',
    ]);
    await kitaru.say_and_wait('네?');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 의아해하자, ',
      kitaru.get_colored_name(),
      '가 설명했다.',
    ]);
    await kitaru.say_and_wait('이건 저희 언니가 가르쳐 준 의식이에요!');
    await kitaru.say_and_wait('손가락 걸기 의식!');
    await kitaru.say_and_wait('이렇게 약속하면, 운명이 정해지는 거라니까요!');
    era.printButton('손을 내민다', 1);
    await era.input();
    await kitaru.say_and_wait('좋아요! 그럼 그렇게 정해진 거예요!');
    await kitaru.say_and_wait('저는 반드시 트레이너 님과 계약할 테니까요! 꼭 보러 오셔야 해요~!');
    era.drawLine({ content: '다음 날'});
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 선발 레이스가 드디어 시작되었다.',
    ]);
    await era.printAndWait([
      '오늘 운세가 좋지 않았던 것인지 교통 체증 때문에 ',
      me.get_colored_name(),
      '은(는) 도착이 조금 늦어졌고, 결국 인파를 비집고 들어가는 데 한참 애를 먹었다.',
    ]);
    await era.printAndWait([
      '그도 그럴 것이, 이번 선발 레이스에는 신입생 사이에서 대도주로 이름을 날린 ',
      kitaru.get_uma_sex_title(),
      '나 메지로 가문의 유망주, 혹은 삼관의 가능성이 보이는 ',
      kitaru.get_uma_sex_title(),
      ' 등, 트레이너들이 눈독을 들일 만한 인재들이 가득했기 때문이다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 그저 들러리 중 한 명일 뿐이었다. 주변의 이야기를 들어봐도 ',
      kitaru.sex,
      '에게 관심을 두는 사람은 거의 없었다.',
    ]);
    await era.printAndWait([
      '그럼에도 관객석 구석에 밀려난 ',
      me.get_colored_name(),
      '은(는) 게이트로 들어가는 ',
      kitaru.get_colored_name(),
      '를 눈으로 쫓았다.',
    ]);
    await era.printAndWait([
      '체육복 위로 드러난 ',
      kitaru.sex,
      '의 실루엣과 하얀 타이즈 너머로 보이는 매끈하고 긴 다리는 훌륭했다.',
    ]);
    await era.printAndWait([
      '외모만 놓고 본다면 ',
      kitaru.sex,
      '는 확실히 귀여운 ',
      kitaru.get_uma_sex_title(),
      '였다.',
    ]);
    await era.printAndWait([
      '다만, ',
      kitaru.sex,
      '의 표정은 어딘가 초조해 보였다. 빛을 잃은 별 모양 눈동자로 관객석 어딘가에 있을 누군가를 필사적으로 찾고 있었지만, 인파에 가려진 ',
      me.get_colored_name(),
      '을(를) 발견하지 못한 모양이었다.',
    ]);
    await era.printAndWait([
      '결국 ',
      kitaru.get_colored_name(),
      '는 진행 요원의 재촉에 못 이겨 게이트 안으로 들어갔다.',
    ]);
    era.drawLine({ content: '선발 레이스 종료 후'});
    await era.printAndWait('참패였다……');
    await era.printAndWait([
      '변명의 여지가 없는 참패였다. 유일하게 칭찬할 만한 점이라곤 ',
      kitaru.sex,
      '의 평균보다 조금 나은 수준의 뒷심뿐이었다.',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '의 달리기 자세는 어딘가 어색했고, 스퍼트 타이밍까지 놓치는 바람에 결국 최하위권으로 골인하고 말았다.',
    ]);
    await era.printAndWait([
      '정말로 ',
      kitaru.sex,
      '를 담당으로 선택해도 괜찮을 것인가? ',
      me.get_colored_name(),
      '은(는) 망설여지기 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '가 자신에게 다가온 몇 안 되는 트레이너들의 제안을 거절하는 것을 보았다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '라는 이름의 ',
      kitaru.get_uma_sex_title(),
      '는 예상외로 한 번 약속한 것은 끝까지 고수하는 타입인 듯했다.',
    ]);
    await kitaru.say_and_wait('정말 죄송해요! 하지만 전 이미 운명의 상대를 만났거든요!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '가 주위 트레이너들에게 큰 소리로 외치는 것을 들었다.',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '는 애써 미소를 지으려 노력하는 듯했지만 주사위 결과는 실패였고, 밤색 꼬리는 힘없이 다리 사이로 처져 있었다.',
    ]);
    era.printButton(`(${kitaru.name}의 담당이 되기로 한다)`, 1);
    era.printButton('(역시 그만두자……)', 2);
    temp = await era.input();
    if (temp === 1) {
      era.printButton(`「${kitaru.name}!」`, 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 큰 소리로 ',
        kitaru.sex,
        '의 이름을 불렀다. 혹여 듣지 못했을까 봐 더 큰 목소리로 몇 번이고 반복했다.',
      ]);
      era.printButton(`「${kitaru.name}!!!」`, 1);
      await era.input();
      await era.printAndWait([
        '축 처져 있던 귀가 쫑긋 서더니, 다시 불이 켜진 별 모양 눈동자가 ',
        me.get_colored_name(),
        ' 쪽을 향했다.',
      ]);
      await era.printAndWait([
        '그리고 그것은 ',
        me.get_colored_name(),
        '이(가) 평생 본 것 중 가장 빠른 라스트 스퍼트였다. 선명한 오렌지색 번개가 ',
        me.get_colored_name(),
        '을(를) 향해 직진해 왔다.',
      ]);
      await era.printAndWait([
        '거리 조절 따윈 안중에도 없는 ',
        kitaru.get_colored_name(),
        '가 멈추지 못하고 ',
        me.get_colored_name(),
        '의 품으로 뛰어들려던 찰나, ',
        me.get_colored_name(),
        '은(는) 재빨리 ',
        kitaru.sex,
        '의 머리를 짚어 더 이상의 충돌을 막아냈다.',
      ]);
      await era.printAndWait([
        kitaru.get_uma_sex_title(),
        '의 힘은 이론적으로 인간의 몇 배에 달한다. ',
        me.get_colored_name(),
        '이(가) ',
        kitaru.sex,
        '를 힘으로 막아내는 것은 불가능에 가깝다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '의 손바닥 아래에서 ',
        kitaru.sex,
        '는 마치 힘 빠진 토끼처럼 휘청거리고 있었다.',
      ]);
      await kitaru.say_and_wait('그럴 줄 알았어요! 트레이너 님이 보러 와 주실 줄 알았다고요!');
      await kitaru.say_and_wait('역시 오늘은——');
      await kitaru.say_and_wait('대길이에요!');
      await era.printAndWait([
        kitaru.sex,
        '는 하늘을 향해 두 손을 치켜드는 묘한 포즈를 취하더니 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '가 무엇을 바라는지 알고 있었다.',
      ]);
      await era.printAndWait([
        '결국 ',
        me.get_colored_name(),
        '은(는) 마치 구원의 밧줄이라도 잡은 듯한 ',
        kitaru.sex,
        '의 시선 속에서 계약서를 꺼냈다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '와 함께, 【운명적인?】 만남을 완성했다.',
      ]);

      await era.printAndWait([
        kitaru.get_colored_name(),
        '와 성공적으로 계약했다.',
      ]);
      era.set('cflag:56:모집상태', recruit_flags.yes);
      era.set('flag:대상물색', 0);
      add_event(
        event_hooks.week_start,
        new EventObject(56, cb_enum.edu).set_arg('beginning'),
      );
    } else {
      await era.printAndWait([
        '이 아이의 정신 상태는 담당으로 삼기에 조금 부적절해 보인다. 관여하지 않는 편이 좋다고 생각한 ',
        me.get_colored_name(),
        '은(는) 조용히 현장을 떠났다.',
      ]);
    }
    EventMarks.get(0).sub(event_hooks.recruit_start);
    era.set('flag:대상물색', 0);
  }
};