/**
 * @file 아그네스 디지털 - 일상
 * @author 片手虾好评发售中!
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const digital_river = require('#/event/daily/daily-events-19/out-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(19)) {
      return super.select();
    }
    const callname = sys_get_callname(19, 0),
      digital = get_chara_talk(19);
    const buffer = [
      ['맞아요! 무슨 일이 있어도 전력으로 덕질하는 거예요, ', callname, '!'],
      '우후후, 너무 고귀해요, 못 참겠어……',
      '잔디! 더트! 모두 저의 전장이에요!',
    ];
    if (era.get('relation:19:0') > 375) {
      buffer.push([
        callname,
        '! 당신과 함께 ',
        digital.get_uma_sex_title(),
        '짱들을 덕질할 수 있어서 정말 다행이에요!',
      ]);
    }
    switch (era.get('mark:19:쾌락')) {
      case 1:
        buffer.push(
          '아하하하…… 에? 왜 다리가 떨리냐고요? 아무것도 아니에요! 디지땅 아주 멀쩡하다고요!',
        );
        break;
      case 2:
      case 3:
        buffer.push([
          '구헤헤헤, 아직도 이유를 묻다니, ',
          callname,
          '. 당신이 가장 잘 알고 있잖아요…… 츄릅……',
        ]);
    }
    switch (era.get('mark:19:동심')) {
      case 1:
        buffer.push([
          '일심동체…… ',
          sys_get_colored_callname(19, 13),
          '씨가 말했던 아름다운 미래를, 저도 조금씩 이해할 것 같아요……',
        ]);
        break;
      case 2:
      case 3:
        buffer.push('메지로 시티, 가실 건가요? 가실 거죠!');
    }
    switch (era.get('mark:19:고통')) {
      case 1:
        buffer.push(['에, 저기, ', callname, '(이)군요…… 오늘은 무슨 일인가요.']);
        break;
      case 2:
      case 3:
        buffer.push('우우우…… 히익! 아뇨 아뇨, 아무것도 아니에요!');
    }
    switch (era.get('mark:19:수치')) {
      case 1:
        buffer.push('저기 말이죠, 아무리 저라도 이런 건 조금 부끄럽다고요.');
        break;
      case 2:
      case 3:
        buffer.push('우우, 역시 이건 너무 심한 거 아닌가요?!');
    }
    switch (era.get('mark:19:반발')) {
      case 1:
        buffer.push(['응? ', callname, '(이)군요. 에, 뭐, 뭘 하려는 건가요?']);
        break;
      case 2:
      case 3:
        buffer.push([
          '으윽, ',
          callname,
          ', 요즘 좀 동지답지 않은 모습인걸요?',
        ]);
    }
    switch (era.get('mark:19:음문')) {
      case 1:
        buffer.push(
          '낯익으면서도 묘한 게 몸에 새겨지다니…… 소재로 써도 되는 거……겠죠?',
        );
        break;
      case 2:
      case 3:
        buffer.push('이 문양 멋지다고 해야 할지…… 설마 이거 진짜로 진화하는 건가요?!');
    }
    digital.say(get_random_entry(buffer));
  }

  good_morning() {
    const digital = get_chara_talk(19),
      talk_arr = [
      `하앗! ${
        digital.name
      } 등장! 우주에서 가장 고귀한 ${digital.get_uma_sex_title()}의 힘을 찾기 위해서!`,
      `우후후, ${sys_get_callname(19, 0)}! 오늘도 덕질의 힘을 쌓으러 가죠!`,
      ];
    digital.say(get_random_entry(talk_arr));
  }

  async talk() {
    if (!sys_check_awake(19)) {
      return await super.talk();
    }
    const digital = get_chara_talk(19);
    let talk_arr;
    if (era.get('base:19:체력') < era.get('maxbase:19:체력') / 3) {
      talk_arr = [
        `하아…… 다 타버렸어, 덕질할 기운이…… 없어……`,
        `이런 상태로는 덕질 대상인 ${digital.get_uma_sex_title()}짱들을 뵐 낯이 없어요.`,
      ];
    } else {
      switch (era.get('cflag:19:컨디션')) {
        case -2:
          talk_arr = [
            '우오오, 모에 에너지가 부족해, 당장 보충해야 해요……',
            `이런 모습은 절대 최애들에게 보일 수 없어요……`,
          ];
          break;
        case -1:
          talk_arr = [
            '아…… 왠지 힘이 안 들어가네요, 모에 에너지가 부족한가.',
            `에구구, 방금 ${digital.get_uma_sex_title()}에 대한 생각을 하느라……`,
          ];
          break;
        case 0:
          talk_arr = [
            `쓰읍…… 후우…… 조금만 더, 모에모에한 힘을!`,
            `아직 부족해요, 모자란 느낌이야. 더 많은 ${digital.get_uma_sex_title()} 모에 에너지를 흡수해야겠어요!`,
          ];
          break;
        case 1:
          talk_arr = [
            `상태 최고! 같이 ${digital.get_uma_sex_title()} 모에 에너지를 모으러 가요!`,
            `사랑, 바로 ${digital.get_uma_sex_title()}짱들을 향한 사랑이 저에게 이런 힘을 주는 거예요!`,
          ];
          break;
        case 2:
          talk_arr = [
            `와아아아! 이쪽도, 저쪽도 온통 ${digital.get_uma_sex_title()}짱들뿐! 지금이라면 뭐든 할 수 있을 것 같아요!`,
            `히얏! 모에 에너지가 이미 하늘을 뚫어버렸어요!`,
          ];
          break;
      }
    }
    await digital.say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const digital = get_chara_talk(19);
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        '이런 선물을 고르다니, 역시 ',
        sys_get_callname(19, 0),
        '!',
      ]);
    } else {
      await digital.say_and_wait([
        '와, 이건 ',
        get_random_entry([
          '다이이치 루비 선생님의 사인본',
          '카렌짱 사진집',
          '스마트 팔콘 악수권',
          '마치카네 탄호이저 인형',
          '메지로 가문 스타일 찻잔',
          '아그네스 타키온 & 맨하탄 카페 테마 머그컵',
          digital.get_uma_sex_title() + ' 편자 모델',
          digital.get_uma_sex_title() + ' 한정 콜라보 굿즈',
          digital.get_uma_sex_title() + '용 귀 덮개 사인본',
        ]),
        '! 여기서 넘쳐나는 ',
        digital.get_uma_sex_title(),
        ' 모에 에너지를 듬뿍 흡수할게요!',
      ]);
    }
  }

  async office_cook() {
    const digital = get_chara_talk(19);
    switch (get_random_value(0, 2)) {
      case 0:
        await digital.say_and_wait(
          `담당 ${digital.get_uma_sex_title()}를 향한 사랑을 담아 만드는 건가요……${sys_get_callname(19, 0)}에게 그런 신조가 있을 줄이야. 저도 배워야겠어요!`,
        );
        break;
      case 1:
        await digital.say_and_wait(
          `평소에 부모님이랑 캠핑을 자주 다녔거든요. 이래 봬도 요리 솜씨는 제법이랍니다.`,
        );
        break;
      case 2:
        await digital.say_and_wait(
          `${digital.get_uma_sex_title()}짱들의 풋풋한 감정이, 직접 전하지 못한 채 도시락에 녹아들어 전달되는 건가요! 이거 너무 고귀하잖아요!`,
        );
    }
  }

  async office_study() {
    const digital = get_chara_talk(19);
    const buffer = [
      `에? 어째서 ${digital.get_uma_sex_title()}짱 관련 지식에 그렇게 정통하냐고요? 팬으로서 당연한 거 아닌가요!`,
      `사실 트레센 학원에 들어오기 위해 여러 방면으로 노력했거든요. 그래서…… 확실히 공부 쪽은 큰 문제 없어요. 제 입으로 말하긴 좀 그렇지만요.`,
      `가끔 공부가 서툴러서 보충 수업을 받는 ${digital.get_uma_sex_title()}짱들이 있잖아요? 어떻게 하면 ${
        digital.sex
      }들에게 도움이 될 수 있을까요……`,
    ];
    await digital.say_and_wait(get_random_entry(buffer));
  }

  async office_rest() {
    const digital = get_chara_talk(19);
    switch (get_random_value(0, 1 + (era.get('relation:19:0') > 375))) {
      case 0:
        await digital.say_and_wait(
          `후우…… 귀여운 ${digital.get_uma_sex_title()}짱의 치유계 ASMR을 듣고 있으니, 온몸이 녹아내리는 기분이에요……`,
        );
        break;
      case 1:
        await digital.say_and_wait(
          `이렇게 당신과 목적 없이 ${digital.get_uma_sex_title()}짱에 대해 수다 떠는 것도 꽤 괜찮네요.`,
        );
        break;
      case 2:
        await digital.say_and_wait(
          `무릎베개요? 아뇨 아뇨, 제 가느다란 다리를 베개로 써봤자 불편하실 텐데…… 역시 좀 부끄럽네요……`,
        );
    }
  }

  async office_game() {
    const digital = get_chara_talk(19);
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `이거 한 번 해보실래요? 《우마무스메 올스타 대난투》예요! 전 캐릭터 랜덤으로 갈게요. 다 좋아하니까요!`,
      );
    } else {
      await digital.say_and_wait(
        `에헤헤! ${sys_get_callname(19, 0)}, 아무리 그래도 이 게임만큼은 꽤 자신 있다고요.`,
      );
    }
  }

  async school_atrium(hook) {
    const digital = get_chara_talk(19);
    const ret = await select_action_in_atrium();
    hook.arg = !!ret;
    if (ret === 0) {
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait(
            `언제나 ${digital.get_uma_sex_title()}들에게 레이스의 냉혹함, 훈련의 고됨, 감정의 갈등을 전해 듣는 당신! 어째서 제가 대나무 숲 같은 당신에게 질투를 느끼는 걸까요!`,
          );
          break;
        case 1:
          await digital.say_and_wait(
            `음, 저기, 어째서 전장에는 승자와 패자가 나뉘는 걸까요…… ${digital.get_uma_sex_title()}짱들 모두가 승자라면 좋을 텐데……`,
          );
          break;
        case 2:
          await digital.say_and_wait(
            `제 각오, 아직 부족하네요. 라이벌로서도, ${digital.get_uma_sex_title()}로서의 각오도……`,
          );
      }
    } else {
      switch (get_random_value(0, 2)) {
        case 0:
          await digital.say_and_wait(
            `……왠지 많은 ${digital.get_uma_sex_title()}짱들이 저희를 보고 있는 것 같아요. 어디 숨을 곳 없나……`,
          );
          break;
        case 1:
          await digital.say_and_wait(
            `이 커다란 리본요? 어릴 때부터 계속 하고 다녔던 것 같은데…… 에? 너무 눈에 띈다고요? 아하하, 확실히 문제긴 하네요.`,
          );
          break;
        case 2:
          await digital.say_and_wait(
            `${sys_get_callname(19, 0)}, 제가 너무 번거로운 애라고 생각하진 않으신가요…… 맨날 절 따라서 응원 활동 하느라 고생하시고…… 에? 아니라고요?`,
          );
      }
    }
  }

  async school_rooftop() {
    const digital = get_chara_talk(19);
    switch (get_random_value(0, 2)) {
      case 0:
        await digital.say_and_wait(
          `에? ${sys_get_callname(19, 0)}, 설마 숨겨진 고수였나요? 이 외형의 재현도……저조차 감탄하게 만드네요!`,
        );
        break;
      case 1:
        await digital.say_and_wait(
          `음, 귀여운 ${digital.get_uma_sex_title()}짱을 제가 어떻게 감히 먹을 수 있겠어요……`,
        );
        break;
      case 2:
        await digital.say_and_wait(
          `보세요! ${sys_get_callname(19, 0)}, 이 디자인은 제 심혈을 기울인 역작이라고요! 특허라도 신청해볼까요, 우헤!`,
        );
    }
  }

  out_river(hook) {
    return digital_river(hook);
  }

  async out_shopping(hook) {
    const digital = get_chara_talk(19);
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        switch (get_random_value(0, 2)) {
          case 0:
            await digital.say_and_wait([
              '우오오오, 설마 ',
              sys_get_colored_callname(19, 46),
              '의 신곡이 나오다니! 장갑을 챙겨와서 다행이에요!',
            ]);
            break;
          case 1:
            await digital.say_and_wait(
              `뽑았다 뽑았어! 바로 그 승부복 한정판 인형!`,
            );
            break;
          case 2:
            await digital.say_and_wait(
              `포인트를 다 모아서 경품으로 바꿨어요! 그 한정판 피규어로 교환할 수 있다고요!`,
            );
        }
        break;
      case 1:
        switch (get_random_value(0, 2)) {
          case 0:
            await digital.say_and_wait([
              '당근을 뽑았어요! 이건 가져가서 ',
              sys_get_colored_callname(19, 32),
              '에게 줘야겠네요. 식습관을 좀 제대로 고쳤으면 좋겠는데, 이러다 몸 다 상한다고요! 안 돼 안 돼!',
            ]);
            break;
          case 1:
            await digital.say_and_wait(`쿠후후후. 뽑았어요. 바로 그거예요!`);
            break;
          case 2:
            await digital.say_and_wait(`종이 티슈라니…… 역시 단뽑으로 대박을 노리는 건 무리인가요.`);
        }
        break;
      case 2:
        switch (get_random_value(0, 2)) {
          case 0:
            await digital.say_and_wait(`오늘의 승리의 여신은 오직 저에게만 입을 맞추는군요……`);
            break;
          case 1:
            await digital.say_and_wait(
              `위닝 라이브는 승리한 ${digital.get_uma_sex_title()}짱을 위한 보상일 뿐만 아니라, 저희 같은 팬들에게 주는 선물이기도 하죠!`,
            );
            break;
          case 2:
            await digital.say_and_wait([
              '음 하이 에 하이! 오—— 하이——! ',
              sys_get_callname(19, 0),
              '! 응원봉 휘두르는 게 늦어요!',
            ]);
            break;
        }
        break;
      case 3:
        switch (get_random_value(0, 1)) {
          case 0:
            await digital.say_and_wait(
              `너무 고귀해! 감독님이 뭘 좀 아시네요! ${digital.get_uma_sex_title()}짱의 매력 포인트를 아주 완벽하게 보여줬어요!`,
            );
            break;
          case 1:
            await digital.say_and_wait(
              `우오오오오, 너무 감동적이에요. 이런 분함, 이런 투지, 마치 현실 속의 ${digital.get_uma_sex_title()}짱과 같네요!`,
            );
        }
    }
  }

  async out_church() {
    const digital = get_chara_talk(19),
      me = get_chara_talk(0);
    await print_event_name('덕을 쌓자 덕을…… 이건 복을 모으는 건가요?', digital);
    await era.printAndWait([
      '신사 앞에서 박수를 두 번 친 후, ',
      me.get_colored_name(),
      '과(와) ',
      digital.get_colored_name(),
      '은 두 손을 모아 기도했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 당연히 담당 ',
      digital.get_uma_sex_title(),
      '의 건강을 빌었지만, ',
      digital.get_colored_name(),
      '은 과연 무엇을 빌었을까?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 살짝 곁눈질로 ',
      digital.get_colored_name(),
      '을 보니, ',
      digital.sex,
      '는 아직 눈을 감은 채 손을 비비며 귀를 쫑긋거리면서 무언가 중얼거리고 있었다. 이건 보통 경건함이 아닌 것 같다.',
    ]);
    await era.printAndWait(['잠시 후 ', digital.sex, '가 몸을 돌려 진지하게 말했다.']);
    await digital.say_and_wait([
      '모든 ',
      digital.get_uma_sex_title(),
      '들을 신께서 보살펴 주시도록, 저 나름대로 최대한의 경건함을 담아 기도했어요.',
    ]);
    await digital.say_and_wait(
      '비록 눈에 보이지 않는 것이라 해도, 이를 통해 다시금 자신을 이성적으로 바라볼 수 있고, 겸사겸사 덕도 쌓을 수 있으니까요!',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 뜻밖이면서도 ',
      digital.sex,
      '의 말이 일리가 있다고 생각했다. 그래서 ',
      me.get_colored_name(),
      ' 역시 잡념을 버리고 다시 한번 기도하기로 했다.',
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait([
        '조금씩, ',
        me.get_colored_name(),
        '의 정신 속에 세 줄기 맑은 샘물이 흐르는 것을 느꼈다. ',
        me.get_colored_name(),
        '이(가) 깜짝 놀라 눈을 뜨니, 맑은 바람이 나뭇잎을 스치고 신사를 지나며 ',
        me.get_colored_name(),
        '의 마음을 차분하게 가라앉혀 주고 있었다.',
      ]);
      await digital.say_and_wait([
        sys_get_colored_callname(19, 98),
        '가 추천해 준 아주 영험한 신사라, 방금까진 감히 말을 걸 엄두도 못 냈네요~',
      ]);
      await era.printAndWait('이게 정말 일어날 수 있는 일인가?');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 옆에 있는 ',
        digital.get_colored_name(),
        ' 역시 동시에 이 분위기에 젖어있는 것을 발견했다.',
      ]);
      await digital.say_and_wait('이것이 세 여신의 은총이군요!');
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 신사에서 기도하는데 왜 세 여신의 축복이 내려오냐고 태클을 걸고 싶었지만, 실제로 심리적인 효과라도 있다면 상관없다고 생각했다.',
      ]);
    } else {
      await era.printAndWait([
        '양눈 사이에 정신을 집중하고 어떻게 하면 정성껏 기도할 수 있을지 고민했지만, 사실 그런 방법 자체가 문제였던 것 같다. ',
        me.get_colored_name(),
        '은(는) 아직 잡념을 없애는 데 서툰 모양이다.',
      ]);
      await digital.say_and_wait(
        '괜찮아요, 저도 꽤 오랫동안 연습해서 겨우 이런 경지에 오른 거니까요. 동지여, 수행이 더 필요하겠어요!',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 이 기술의 실질적인 용도가 궁금해졌다. 설마 레이스 때 집중력을 응집하는 데 쓰는 걸까?',
      ]);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        ' 역시 때로는 마음을 다스릴 필요가 있다고 느꼈다. 다음 기회에 다시 시도해 보는 수밖에 없겠다.',
      ]);
    }
  }

  async out_station(hook) {
    const digital = get_chara_talk(19);
    const relation = era.get(`relation:19:0`);
    hook.arg = await select_action_in_station(19);
    switch (hook.arg) {
      case 0:
        if (Math.random() < 0.5) {
          await digital.say_and_wait(
            `${digital.get_uma_sex_title()}짱들이 보편적으로 좋아하는 당근을 저도 좋아하는 건, 제가 ${digital.get_uma_sex_title()}짱을 좋아해서일까요, 아니면 제가 ${digital.get_uma_sex_title()}이기 때문일까요……`,
          );
        } else {
          await digital.say_and_wait(
            `파르페♪ 파르페♪ 메론 파르페♪ 하치미♪ 하치미♪ 진한 하치미♪ 그리고 딸기 찹쌀떡♪ 최애들을 흉내 내면 행운이 따를 것 같아요!`,
          );
        }
        break;
      case 1:
        switch (get_random_value(0, 1 + (relation > 375))) {
          case 0:
            await digital.say_and_wait(
              `아하하하, ${sys_get_callname(19, 0)}, 막상 같이 돌아다니려니 어디가 좋을지 못 고르겠어요……`,
            );
            break;
          case 1:
            await digital.say_and_wait(
              `에? 제가 장소를 고르라고요? 왠지 저는 자꾸 ${digital.get_uma_sex_title()} 관련 장소만 고르게 될 것 같은데……`,
            );
            break;
          case 2:
            await digital.say_and_wait(
              `${sys_get_callname(19, 0)}! 저쪽으로 다시 한번 성지 순례 가요!`,
            );
        }
        break;
      case 2:
        switch (get_random_value(0, 2)) {
          case 0:
            await digital.say_and_wait(
              `으누누! 이 카페 스타일 커피잔이랑 저 메지로 스타일 홍차 잔 사이에서 어떻게 선택하라는 거예요?! 당연히 전부 다 사야죠!`,
            );
            break;
          case 1:
            await digital.say_and_wait([
              get_chara_talk(33).get_colored_name(),
              '가 광고하는 건조기? 이건…… 사야…… 아니, 사야만 해!',
            ]);
            break;
          case 2:
            await digital.say_and_wait(
              `에? 왜 굿즈를 세 개씩이나 사냐고요? 당연히 하나는 실사용, 하나는 소장용, 하나는 포교용이죠!`,
            );
        }
    }
  }
};