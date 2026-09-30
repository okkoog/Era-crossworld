/**
 * @file 에이신 플래시 - 日常
 * @author 爱放箭的袁本初
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const FlashLifeMarks = require('#/data/event/life-event-marks/life-event-marks-37');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(37)) {
      return super.select();
    }
    const callname = sys_get_callname(37, 0),
      talk_arr = [],
      relation = era.get(`relation:37:0`);
    if (relation < 0) {
      talk_arr.push(`……하아. 무슨 일이신가요, ${callname}?`);
    } else {
      talk_arr.push(`여기 있습니다. ${callname}. 무슨 일이신가요?`);
      if (relation > 75)
        talk_arr.push(`후우…… 조금 기다려지기 시작했네요. 자, 시작하죠, ${callname}.`);
      if (relation > 226)
        talk_arr.push(
          '시간, 이상 없음. 장소, 정확함. 그리고…… 후훗. 계획 확인 완료. 에이신 플래시, 언제든 당신의 명령을 기다리고 있습니다.',
        );
      if (era.get('love:37') > 76) {
        talk_arr.push(
          `음, 긴말할 필요 없겠죠. 이미 준비는 끝났으니까요, ${callname}.`,
          `후훗~ 여기 있습니다. ${callname}. 무슨 일이신가요?`,
          `후우…… 몹시 기다려지네요. 지금 바로 시작하죠, ${callname}.`,
        );
      }
    }
    get_chara_talk(37).say(get_random_entry(talk_arr));
  }

  good_morning() {
    const callname = sys_get_callname(37, 0);
    const talk_arr = [
      `좋은 아침입니다, ${callname}. 새로운 하루, 새로운 여정, 새로운 희망을 향해 긍정적인 태도로 마주해 봐요.`,
      `Guten Tag, ${callname}. 멋진 하루를 보내시길 바랍니다.`,
      `Guten Morgen, ${callname}. 다시 새로운 하루가 시작되었네요. 오늘 계획에 대한 준비는 되셨나요?`,
      `즐거운 오전입니다, ${callname}. 바쁜 와중에도 곁에 있는 아름다움을 감상할 여유를 가지시길 빌게요.`,
    ];
    get_chara_talk(37).say(get_random_entry(talk_arr));
  }

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(37)) {
      return await super.good_night(hook);
    }
    const callname = sys_get_callname(37, 0);
    const talk_arr = [
      `오늘 하루 고생하셨습니다, ${callname}. 일과를 마친 뒤에는 몸의 긴장을 풀어주는 걸 잊지 마세요.`,
      `오늘은 정말 감사했습니다, ${callname}. 밤새 달콤한 꿈을 꾸시길 바랍니다.`,
    ];
    if (era.get('base:37:체력') < era.get('maxbase:37:체력') * 0.5) {
      talk_arr.push(
        '후우…… 『Aus nichts wird nichts』.',
        '몸이…… 조금 무겁게 느껴지네요. 하지만 이 정도로 게을러진다면 이상적인 결과를 얻을 수 없겠죠?',
      );
    }
    if (era.get('base:37:체력') < era.get('maxbase:37:체력') * 0.25) {
      talk_arr.push(
        '후우…… 몸에 힘이 빠지기 시작했어요. 역시 이후의 계획을 조금 수정하는 편이 좋을까요?',
        '일과 휴식의 조화는 참 심오한 학문이네요. 제가 이것을 온전히 이해하기까지는 아직 갈 길이 먼 것 같습니다.',
      );
    }
    get_chara_talk(37).say(get_random_entry(talk_arr));
  }

  async talk() {
    if (!sys_check_awake(37)) {
      return await super.talk();
    }
    const callname = sys_get_callname(37, 0),
      flash = get_chara_talk(37),
      relation = era.get(`relation:37:0`);
    let talk_arr;
    switch (era.get('cflag:37:컨디션')) {
      case -2:
        talk_arr = [
          '컨디션이…… 최악이네요. 다음 계획을 조정해야만 하는 단계에 온 걸까요?',
          '인정하고 싶지는 않지만, 계획의 정상적인 수행에 지장을 줄 정도의 상태군요…… 정말 변화를 시도해야 할지도 모르겠어요.',
        ];
        break;
      case -1:
        talk_arr = [
          '상태가…… 조금 좋지 않네요. 하지만 이미 예정된 계획이 이런 일로 방해받아서는 안 되겠죠?',
          '후우…… 끝까지 해내겠어요!',
        ];
        break;
      case 0:
        talk_arr = [
          '음, 지금 컨디션이라면 현재 계획을 수행하는 데 아무런 문제가 없습니다.',
          '아무리 평범한 하루라도 실행해야 할 계획이 있는 법이죠. 성공이란 이런 매일의 성실함이 쌓여서 이루어지는 것 아닐까요?',
        ];
        break;
      case 1:
        talk_arr = [
          '기분이 아주 좋네요. 이런 상태라면 계획한 일들을 수월하게 예상대로 마칠 수 있을 거예요.',
          `충만한 하루를 맞이할 생각에 몸이 흥분하고 있어요. 어서 오늘의 계획을 시작하죠, ${callname}!`,
        ];
        break;
      case 2:
        talk_arr = [
          '지금 몸이 굉장히 가볍게 느껴져요. 정말 드문 경험이네요. 자, 다음 계획을 실행하러 가요!',
          `이런 컨디션이라면 어떤 일을 해도 평소보다 배의 효율을 낼 수 있겠죠. 목표를 향해 노력해 봐요, ${callname}!`,
        ];
        break;
    }
    if (relation > 525)
      talk_arr.push(
        '사실 저는 영원이라는 것을 믿지 않았어요. 영원함을 상징하는 다이아몬드조차 언젠가는 산화하기 마련이니까요. 하지만 당신과의 만남이 제 생각을 바꾸어 놓았답니다.',
      );
    if (era.get('love:37') > 76) {
      talk_arr.push(
        'To love and to be loved is the greatest happiness of existence. 이 말의 뜻을 아시나요? 저는 지금 그 의미를 뼈저리게 느끼고 있답니다.',
        '후훗~ 당신을 볼 때마다 내면에서 달콤한 감정이 솟아나요. 이것이 어쩌면 『마음』의 맛일까요?',
      );
    }
    if (relation > 225)
      talk_arr.push(
        '당신과 함께 있을 때면 제 안에서 특별한 감정이 생겨나요. 고향의 언어로 표현하자면 『Schmetterlinge im Bauch haben』이라고 할 수 있겠네요.',
      );
    if (relation > 375)
      talk_arr.push(
        '레시피가 곧 법이라고는 하지만, 그것이 디저트 제작 자체가 딱딱한 행위여야 함을 뜻하지는 않아요. 예를 들어, 누군가를 향한 강렬한 애정을 가미함으로써 완성품을 훨씬 맛있게 만들 수도 있죠. 후훗~ 묘하지만 확실히 효과가 있는 방법이랍니다.',
      );
    talk_arr.push([
      '당신은 경품 추첨에 대해 어떻게 생각하시나요? 아, 다른 뜻은 아니고요. 이전에 휴식 시간에 쇼핑 리스트에 있던 물건을 산 뒤, 무료 추첨권을 받아서 한 번 시도해 봤거든요. 그런데 세상에, 1등에 당첨됐지 뭐예요…… 하지만 당시의 저는 기쁨보다는 불안한 마음이 더 컸어요. 객관적으로 볼 때, 아무런 비용도 들지 않은 종이 한 장을 내고 고가의 선물을 받았으니까요. 제 관점에서는 이건 전혀 공평하지 않은 보답이라고 느껴졌거든요.',
    ]);
    if (era.get('flag:현재월') >= 3 && era.get('flag:현재월') <= 5)
      talk_arr.push(
        '『Der Frühling ist die Zeit der Pläne, der Vorsätze』. 봄은 제게 매우 중요한 계절이에요. 이 기간에 일 년의 계획을 세심하게 고민하고 세워야 하니까요.',
        '봄이군요…… 만물이 소생하는 계절이 돌아왔어요. 아시나요? 저는 이 시기에 맞춰 정확히 피어나는 식물들에게 특별한 감정을 가지고 있답니다. 그렇게 하려면 겨울의 냉혹함을 견뎌내야만 하니까요…… 어떤 타격을 입더라도 결국 자신의 사명을 정확히 완수해 내는 모습은 정말 존경스러워요.',
      );
    if (era.get('flag:현재월') >= 6 && era.get('flag:현재월') <= 8)
      talk_arr.push(
        '여름은 언제든 열사병의 위험이 있으니 제때 수분을 보충하는 것을 잊지 마세요. 건강을 위해서 아주 중요한 일이랍니다.',
        '여름이 왔네요…… 어릴 적 휴가 시즌마다 부모님이 저를 호숫가의 작은 오두막으로 데려가 피서를 즐겼던 기억이 나요. 후훗~ 정말 잊지 못할 즐거운 추억이죠.',
      );
    if (era.get('flag:현재월') >= 9 && era.get('flag:현재월') <= 11)
      talk_arr.push(
        '가을이 되면 항상 독일의 옥토버페스트가 생각나요. 놀이공원과 자유로운 음주 문화가 결합된 남녀노소 즐길 수 있는 대중적인 축제죠. 정말 환상적이랍니다. 언젠가 당신과 꼭 함께 가보고 싶네요.',
        `역시 가을은 운동하기 딱 좋은 계절이에요. ${callname}, 저랑 같이 축구 한 판 어떠신가요?`,
      );
    if (era.get('flag:현재월') === 12 || era.get('flag:현재월') <= 2)
      talk_arr.push(
        '평소보다 겨울에는 실내에 머무는 시간이 눈에 띄게 늘어나네요. 하지만 그게 나쁜 일만은 아니에요. 새로운 레시피를 연구하기에는 아주 좋은 기회니까요.',
        '눈이 내리는 계절이 되면 고향의 독일식 크리스마스 케이크인 슈톨렌이 생각나요. 반죽에 말린 과일과 견과류를 듬뿍 넣은 크리스마스 디저트인데, 전 그 맛을 정말 좋아하거든요. 매년 크리스마스마다 가족들과 함께 만들곤 했죠. 그러니 당신도 관심이 있다면, 적당한 기회가 왔을 때 대접해 드릴 수도 있답니다. 후훗.',
      );
    if (era.get('cflag:49:모집상태') === 1)
      talk_arr.push(
        `나카야마 양은 승패를 대하는 태도가 저와는 전혀 다르지만, 그렇기에 오히려 ${flash.sex}에게서 새로운 관점을 배울 수 있어요…… 이건 정말 좋은 일이죠.`,
      );
    if (era.get('cflag:7:모집상태') === 1)
      talk_arr.push(
        `그러고 보니 지난 일요일에 골드 쉽 양과 케이크 가게에서 신제품을 시식하기로 약속했었는데, 어느샌가 옛날 불량식품 시식회로 바뀌어 버렸지 뭐예요…… 하지만 객관적으로 볼 때, ${flash.sex}가 추천한 간식들도 맛은 꽤 훌륭했답니다, 후후~`,
      );
    if (era.get('cflag:48:모집상태') === 1)
      talk_arr.push(
        '자신만의 방식으로 수많은 사람과 가볍게 우정을 유지하는 조던 양의 능력은 정말 감탄스러워요.',
      );
    if (era.get('cflag:38:모집상태') === 1)
      talk_arr.push(
        `인형요? 아, 이건 카렌짱 양이 선물해 준 거예요. 후훗~ 정말 정교하지 않나요? ${flash.sex}의 취향은 ${flash.sex} 본인만큼이나 귀엽네요.`,
      );
    if (era.get('cflag:105:모집상태') === 1)
      talk_arr.push(
        '네오 유니버스 양이 제가 만든 초코 쿠키를 아주 좋아하는 것 같아요. 후훗~ 제과를 하는 사람에게 이보다 더 큰 격려는 없겠죠. 그러니 더 힘내서 맛있는 디저트를 개발해야겠어요!',
      );
    const life_marks = new FlashLifeMarks();
    let temp;
    if (era.get('cflag:46:모집상태') === 1) {
      if (life_marks.gacha_talk === 1) {
        temp = `팔콘 양이 제가 추첨을 대하는 태도가 너무 특이하다고 하더라고요. ${flash.sex}는 이게 불로소득이 아니라 제가 받아 마땅한 보상이라며, 마음 편히 즐기라고 하더군요…… 하아, 어쩌면 ${flash.sex}의 말이 맞을지도 몰라요. 제 관점을 바꾸려고 노력해 봐야겠네요.`;
        life_marks.gacha_talk++;
      } else {
        talk_arr.push(
          '팔콘 양은 제 몸에 밴 냄새만으로 오늘 제가 어떤 종류의 디저트를 만들었는지 맞힐 수 있어요. 솔직히 대단한 능력이긴 하지만, 조금 부끄러운 기분이 드는 건 어쩔 수 없네요……',
        );
      }
    }
    if (!temp) {
      temp = get_random_entry(talk_arr);
      if (Array.isArray(temp)) {
        life_marks.gacha_talk = 1;
      }
    }
    await flash.say_and_wait(temp);
  }

  async office_gift() {
    const callname = sys_get_callname(37, 0);
    await get_chara_talk(37).say_and_wait(
      Math.random() < 0.5
        ? '어머, 선물인가요? 저에게 주시는……? 후훗, 알겠습니다. 마음 써주셔서 감사해요. 이 호의에 반드시 보답할게요, 약속하죠.'
        : `『besten Dank!』, ${callname}. 당신의 마음을 저버리지 않겠어요.`,
    );
  }

  async office_cook() {
    const flash = get_chara_talk(37);
    const callname = sys_get_callname(37, 0);
    await era.printAndWait('당신과 에이신 플래시는 트레이닝실에서 함께 요리를 했다.');
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        `흰자 100그램, 노른자 60그램, 그리고…… 아! ${callname}, 설탕을 2그램이나 더 넣으셨잖아요.`,
      );
    } else {
      await flash.say_and_wait(
        '조금…… 적당히…… 대충…… 으음, 대체 어디서 보신 레시피인지는 모르겠지만, 만드는 사람을 꽤 곤란하게 만드는 설명이네요……',
      );
      await flash.say_and_wait(
        `하지만 그렇다고 포기할 수는 없죠. 자, 지금부터 완벽한 결과물을 만들기 위해 필요한 각 재료의 정확한 함량을 함께 찾아보도록 해요, ${callname}.`,
      );
    }
  }

  async office_study() {
    await get_chara_talk(37).say_and_wait(
      Math.random() < 0.5
        ? '알고 계시나요? 독일에는 사실 좋은 점심이라는 인사가 따로 없답니다. 우리는 그냥 낮 동안 Guten Tag이라고 인사하죠.'
        : '알고 계시나요? 독일 문화에서 돼지는 행운의 상징으로 여겨진답니다. 행운과 재물을 가져다준다고 믿거든요. 그래서 새해에는 소중한 사람들에게 돼지 모양의 선물을 주며 축복을 전하기도 하죠.',
    );
  }

  async office_rest() {
    await get_chara_talk(37).say_and_wait(
      `고생하셨습니다, ${sys_get_callname(37, 0)}. ${
        Math.random() < 0.5
          ? '짧은 휴식 시간을 잘 활용해야 다음 업무를 활기차게 처리할 수 있어요.'
          : '너무 피곤하다면 푹 쉬어 두세요. 『All work and no play makes Jack a dull boy』라는 말도 있잖아요?'
      }`,
    );
  }

  async office_prepare() {
    const flash = get_chara_talk(37);
    const callname = sys_get_callname(37, 0);
    era.print(`${get_chara_talk(0).name}과(와) 에이신 플래시는 트레이닝실에서 레이스 준비를 했다.`);
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        '현재 기상 상태, 예보와 일치. 경기장 상황, 예상 범위 내. 본인 컨디션…… 완벽.',
      );
      await flash.say_and_wait(
        `후우…… 모든 것이 계획대로군요. 그럼 다녀오겠습니다, ${callname}.`,
      );
    } else {
      await flash.say_and_wait(
        `toi, toi, toi…… 후우…… 좋아! ${callname}, 다녀올게요.`,
      );
    }
  }

  async office_game() {
    const callname = sys_get_callname(37, 0);
    const flash = get_chara_talk(37);
    await era.printAndWait(
      `${get_chara_talk(0).name}과(와) 에이신 플래시는 트레이닝실에서 함께 게임을 했다.`,
    );
    flash.say(
      '어머, 저와 게임을 하고 싶으신가요? 당연히 좋죠, 초대해 주셔서 기뻐요. 그럼 어떤 장르의 게임을 하실지 생각하신 게 있나요?',
    );
    era.printButton('「당연히 2인 협동 게임이지」', 1);
    era.printButton('「2인 대전 게임은 어때?」', 2);
    if ((await era.input()) === 1) {
      await flash.say_and_wait('협동 게임이라니, 좋은 선택이네요.');
      await flash.say_and_wait(
        `그럼 지체할 것 없이 시작하죠. 당신과 함께 손을 잡고 난관을 헤쳐 나갈 생각을 하니 무척 기대되네요, 후훗~`,
      );
    } else {
      await flash.say_and_wait('대전 게임이라니, 좋은 선택이네요.');
      await flash.say_and_wait('음…… 하지만 플레이하기 전에 조건 하나를 거는 건 어떨까요?');
      await flash.say_and_wait('예를 들면 진 사람이 이긴 사람의 소원을 하나 들어준다든가 하는 식으로요.');
      await flash.say_and_wait(
        '후훗~ 내기를 걸고 게임을 해야 훨씬 박진감이 넘치니까요. 이건 나카야마 양에게 배운 원칙이랍니다.',
      );
    }
  }

  async school_atrium(hook) {
    hook.arg = (await select_action_in_atrium()) === 0;
    const callname = sys_get_callname(37, 0);
    const flash = get_chara_talk(37);
    if (hook.arg) {
      await era.printAndWait(
        `${get_chara_talk(0).name}과(와) 에이신 플래시는 함께 안뜰의 나무 구멍으로 왔다.`,
      );
      if (Math.random() < 0.5) {
        await flash.say_and_wait(
          '나무 구멍이라니…… 좌절을 겪은 사람에게 적절한 분출구는 꼭 필요하죠.',
        );
        await flash.say_and_wait(
          '하지만 저 개인적으로는, 역시 소중한 사람과 대화를 나누는 쪽을 더 선호해요.',
        );
        await flash.say_and_wait(
          '한풀이는 수단일 뿐이고, 좌절을 딛고 일어날 방법을 찾는 것이 진정한 목적이니까요, 그렇죠?',
        );
      } else {
        await flash.say_and_wait(
          '나무 구멍인가요…… 그러고 보면 이 작은 나무 하나에 참 많은 사람의 감정이 담겨 있네요.',
        );
        await flash.say_and_wait(
          '슬플 때는 하소연하고, 기쁠 때는 기쁨을 나누고. 누군가에게 이 구멍은 이미 대체 불가능한 단짝 친구일 연인일 거예요.',
        );
        await flash.say_and_wait(
          '……네, 저 또한 그중 한 명이었죠. 하지만 지금은 달라요.',
        );
        await flash.say_and_wait(
          '이제 저에게는 마음을 맡길 수 있는 더 소중한 분이 생겼으니까요, 후후.',
        );
      }
    } else {
      await era.printAndWait(
        `${get_chara_talk(0).name}과(와) 에이신 플래시는 안뜰에 데이트를 하러 왔다.`,
      );
      if (Math.random() < 0.5) {
        await flash.say_and_wait(
          `벤치에 앉아 따스한 햇볕을 쬐는 건 정말 기분 좋은…… 아! ${callname}, 등 뒤에 무당벌레가 붙어 있어요.`,
        );
        await flash.say_and_wait(
          '쉿, 너무 거칠게 쫓아버리지는 마세요…… 무당벌레는 아주 귀여운 생물이니까요, 안 그래요?',
        );
      } else {
        await flash.say_and_wait(
          `오늘의 도시락입니다, 마음껏 즐기…… 어머나, ${callname}, 머리 위에 낙엽이 떨어졌네요.`,
        );
        await flash.say_and_wait(
          '『큰 나무 아래가 시원하다』라는 말이 있지만, 가끔은 이런 귀여운 해프닝도 생기네요.',
        );
      }
    }
  }

  async school_rooftop() {
    const flash = get_chara_talk(37);
    const callname = sys_get_callname(37, 0);
    await era.printAndWait(
      `${get_chara_talk(0).name}과(와) 에이신 플래시는 옥상에서 도시락을 먹었다.`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait('민트 케이크인가요…… 이게 당신이 준비한 디저트군요.');
      await flash.say_and_wait(
        '……아뇨, 아무것도 아니에요. 민트를 싫어하는 건 아니니까요. 굳이 말하자면 이 강한 향에 조금 익숙하지 않을 뿐이에요.',
      );
      await flash.say_and_wait(
        '하지만 당신의 정성이 담긴 것이니 기쁘게 먹을게요. 그리고 객관적으로 봐도 크림 케이크는 아주 맛있는 음식이니까요, 그렇죠?',
      );
    } else {
      await flash.say_and_wait('플레이팅이 아주 근사하다고요? 후후. 칭찬 감사합니다.');
      await flash.say_and_wait(
        '하지만 음식에 대한 평가는 겉모습만 보고 내려서는 안 돼요. 저는 내면의 맛이 더 중요하다고 생각하거든요.',
      );
      await flash.say_and_wait(
        `그러니 어서 드셔보세요, ${callname}. 식사 후에 들려주실 평가가 무척 기대되네요.`,
      );
    }
  }

  async out_river(hook) {
    const callname = sys_get_callname(37, 0),
      flash = get_chara_talk(37);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      await era.printAndWait([
        get_chara_talk(0).get_colored_name(),
        '과(와) ',
        flash.get_colored_name(),
        '는 함께 강변 산책을 하러 왔다.',
      ]);
      if (Math.random() < 0.5) {
        await flash.say_and_wait('bildschön! 아주 인상적인 경치예요.');
        await flash.say_and_wait(
          `음…… 기념사진을 찍어두는 게 좋을 것 같네요. 당신은 어떻게 생각하시나요? ${callname}.`,
        );
      } else {
        await flash.say_and_wait('오늘 나들이는 만족스러우신가요?');
        await flash.say_and_wait(
          '당신이 즐거워할 수 있도록 신중하게 고민해서 짠 계획이거든요. 기뻐하시는 모습을 보니 저도 보람차네요.',
        );
      }
    } else {
      await era.printAndWait([
        get_chara_talk(0).get_colored_name(),
        '과(와) ',
        flash.get_colored_name(),
        '는 함께 강가로 낚시를 하러 왔다.',
      ]);
      if (Math.random() < 0.5) {
        await flash.say_and_wait('마음 내키는 대로 낚시를 즐길 수 있다는 건 참 멋진 경험이네요.');
        await flash.say_and_wait('어라, 왜 갑자기 그런 말을 하느냐고요?');
        await flash.say_and_wait('독일에서는 낚시를 하려면 전용 면허증이 있어야 하거든요.');
        await flash.say_and_wait(
          '비록 면허 시험에서는 이론 지식이 더 중요하지만, 미리 일본에서 실전 기술을 단련해 두는 것도 나쁘지 않은 선택이겠죠.',
        );
        await flash.say_and_wait('그러니까……');
        await flash.say_and_wait(`그때가 되면 당신의 도움이 필요할지도 모르겠네요, ${callname}.`);
      } else {
        await flash.say_and_wait(
          '낚시를 하니 어릴 적 휴가 때마다 부모님과 이름 없는 호숫가 별장으로 놀러 갔던 기억이 나요.',
        );
        await flash.say_and_wait(
          '그곳에서 호숫가에 앉아 낚싯대를 휘두르던 아버지의 뒷모습을 보곤 했죠.',
        );
        await flash.say_and_wait(
          '비록 아버지께 많은 기술을 배우지는 못했지만, 당신과 함께 이 즐거움을 나누는 정도라면 충분히 해낼 수 있을 거예요.',
        );
      }
    }
  }

  async out_church() {
    const callname = sys_get_callname(37, 0),
      flash = get_chara_talk(37),
      me = get_chara_talk(0);
    await era.printAndWait(`${me.name}과(와) 에이신 플래시는 함께 신사로 기도를 하러 왔다.`);
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        `두 번 절하고, 두 번 박수 치고, 다시 한 번 절…… 후우, 세세한 디테일은 아직 좀 헷갈리지만, 전체적인 절차에서 실수는 없었겠죠? ${callname}`,
      );
      await era.printAndWait(
        `돌아오는 길에, 에이신 플래시는 ${me.name}에게 장난스럽게 웃어 보였다. ${flash.sex}는 이번 참배 여행이 꽤 즐거웠던 모양이다.`,
      );
    } else {
      await flash.say_and_wait(
        '맑은 공기에 신성한 분위기까지. 저는 신사의 환경이 정말 마음에 들어요. 그곳에 있으면 들뜬 마음까지 차분해지거든요.',
      );
      await era.printAndWait(
        `돌아오는 길에, 에이신 플래시는 미소를 지으며 ${me.name}에게 자신의 소감을 들려주었다. ${flash.sex}는 이번 여정에 아주 만족한 것 같다.`,
      );
    }
  }

  async out_shopping(hook) {
    const callname = sys_get_callname(37, 0),
      flash = get_chara_talk(37),
      me = get_chara_talk(0);
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        await era.printAndWait(`${me.name}과(와) 에이신 플래시는 상점가의 오락실로 갔다.`);
        await flash.say_and_wait(
          Math.random() < 0.5
            ? '으음, 이론상으로는 기계 팔과 인형 사이의 거리와 각도만 계산하면 쉽게 출구로 떨어뜨릴 수 있어야 하는데, 왜 자꾸 도중에 놓치는 걸까요……'
            : '어머, 게임 속에 왜 갑자기 좀비가 나타나는 거죠?! 으으, 이왕 이렇게 된 거 용기를 내서 맞서 싸울 수밖에 없겠네요.',
        );
        break;
      case 1:
        await era.printAndWait(`${me.name}과(와) 에이신 플래시는 상점가로 경품 추첨을 하러 왔다.`);
        await flash.say_and_wait(
          '경품 추첨인가요…… 음, 사실 저는 이런 무작위적인 것들에 대해서는 별다른 매력을 느끼지 못해요.',
        );
        await flash.say_and_wait('어라, 구체적인 이유가 뭐냐고요?');
        await flash.say_and_wait(
          '복잡한 이유는 아니에요. 그저 통제 불가능한 확률보다는, 노력한 만큼 보답을 받는 공평한 규칙을 더 선호할 뿐이죠.',
        );
        await flash.say_and_wait(
          '……뭐, 하지만 여기까지 왔는데 아무것도 안 하고 그냥 가면 조금 흥이 깨지긴 하겠죠.',
        );
        await flash.say_and_wait('그럼 오늘의 운세를 한 번 시험해 볼까요?');
        await era.printAndWait(
          '에이신 플래시가 회전판을 돌렸다. 다음 상황을 기대하게 만드는 음악이 흐르는 가운데, 화면 위로 천천히 결과가 나타나기 시작했다.',
        );
        switch (get_random_value(0, 4)) {
          case 0:
            await flash.say_and_wait('특별상?!');
            await era.printAndWait('스피커에서 심장을 울리는 웅장한 선율이 흘러나왔다.');
            await era.printAndWait(
              '그와 동시에 디스플레이에 뜬 선명하고 커다란 글자를 본 에이신 플래시는 몇 초간 멍하니 서 있었다.',
            );
            await flash.say_and_wait('……정말…… 예상 밖이네요.');
            await era.printAndWait(
              `곧이어, ${flash.sex}의 얼굴에 찬란한 미소가 피어올랐다.`,
            );
            await flash.say_and_wait(
              '결과에 대해 전혀 기대하지 않았는데…… 이런 게 바로 운의 묘미라는 걸까요.',
            );
            await flash.say_and_wait(
              `후후. 오늘 운세가 아주 좋네요. 그럼 축하하는 의미로 같이 맛있는 케이크라도 먹으러 갈까요? ${callname}.`,
            );
            break;
          case 1:
            await flash.say_and_wait('1등상?!');
            await era.printAndWait('스피커에서 경쾌하고 즐거운 음악이 흘러나왔다.');
            await era.printAndWait(
              '그와 동시에 디스플레이에 뜬 선명한 글자를 보고 에이신 플래시는 잠시 깜짝 놀랐다.',
            );
            await flash.say_and_wait('……와…… 정말 기쁘네요.');
            await era.printAndWait(
              `곧이어, ${flash.sex}의 얼굴에 즐거운 미소가 가득해졌다.`,
            );
            await flash.say_and_wait(
              '전혀 기대하지 않았는데…… 운이라는 건 참 신기하네요.',
            );
            await flash.say_and_wait(
              `후후. 오늘 운세가 꽤 좋네요. 그럼 기념으로 같이 맛있는 케이크라도 먹으러 갈까요? ${callname}.`,
            );
            break;
          case 2:
            await flash.say_and_wait('2등상?!');
            await era.printAndWait('스피커에서 리드미컬한 음악이 흘러나왔다.');
            await era.printAndWait(
              '그와 동시에 화면에 뜬 글자를 보고 에이신 플래시는 잠시 고민하는 듯한 표정을 지었다.',
            );
            await flash.say_and_wait('……음…… 기대를 뛰어넘었네요.');
            await era.printAndWait(
              `곧이어, ${flash.sex}의 얼굴에 기분 좋은 미소가 번졌다.`,
            );
            await flash.say_and_wait(
              '전혀 예상치 못한 결과인데…… 이것도 운의 매력이겠죠.',
            );
            await flash.say_and_wait(
              `후훗~ 오늘 운세가 제법 괜찮네요. 그럼 축하하는 의미로 함께 맛있는 케이크를 먹으러 갈까요? ${callname}.`,
            );
            break;
          case 3:
            await flash.say_and_wait('3등상?');
            await era.printAndWait(
              '화면에 뜬 선명한 글자를 보며 에이신 플래시는 눈을 깜빡였다.',
            );
            await flash.say_and_wait('뭐, 예상했던 결과네요.');
            await era.printAndWait(
              `다음 순간, ${flash.sex}의 얼굴에 온화한 미소가 감돌았다.`,
            );
            await flash.say_and_wait(
              '지불한 만큼 돌아오는 법이죠. 역시 이런 공평한 결과가 마음 편해요. 어느 한쪽이 과했다면 오히려 불안했을지도 모르거든요.',
            );
            await flash.say_and_wait(
              `후훗~ 그럼 기분 좋게 마무리한 기념으로 같이 맛있는 케이크를 먹으러 갈까요? ${callname}.`,
            );
            break;
          case 4:
            await flash.say_and_wait('꽝…… 다음 기회에?');
            await era.printAndWait('스피커에서 나지막하고 차분한 곡조가 흘러나왔다.');
            await era.printAndWait(
              '그와 동시에 화면에 뜬 글자를 보고 에이신 플래시는 잠시 침묵했다.',
            );
            await flash.say_and_wait('……뭐, 받아들일 수 있는 결과네요.');
            await era.printAndWait(
              `곧이어, ${flash.sex}의 얼굴에 시원스러운 미소가 떠올랐다.`,
            );
            await flash.say_and_wait(
              '확률적인 일이란 게 다 그렇죠. 기대에 부응하기보다는 어긋날 가능성이 더 높은 법이니까요.',
            );
            await flash.say_and_wait(
              `그럼 추첨에서 떨어진 아쉬움을 달래는 의미로, 같이 맛있는 케이크를 먹으러 가는 건 어떨까요? ${callname}.`,
            );
            break;
        }
        await era.printAndWait(
          `매력 없다고 말은 했지만 역시 이런 불확실성이 주는 미지수 앞에서, ${flash.sex}도 결국은 최종 결과가 꽤나 신경 쓰였던 모양이다.`,
        );
        break;
      case 2:
        await era.printAndWait(`${me.name}과(와) 에이신 플래시는 상점가의 노래방으로 왔다.`);
        if (Math.random() < 0.5) {
          await flash.say_and_wait(
            '그러고 보니 지난 일요일에 조던 양이 이번 달에 새로 나온 J-POP 노래 세 곡의 가창 기교를 가르쳐 줬는데, 한 번 들어보실래요?',
          );
        } else {
          await flash.say_and_wait(
            '네? 제가 자신 있는 노래요……? 음, 하지만 제가 가장 자주 부르는 건 독일 전래 동요인걸요? 괜찮으시겠어요?',
          );
          await flash.say_and_wait('……알겠습니다. 그럼, 부족하지만 불러보도록 할게요.');
        }
        break;
      case 3:
        await era.printAndWait(`${me.name}과(와) 에이신 플래시는 상점가로 영화를 보러 갔다.`);
        if (era.get('love:37') >= 75 && Math.random() < 0.34) {
          await flash.say_and_wait('《첫사랑 당근 케이크: 사랑은 당근보다 달콤해 2》?');
          await era.printAndWait(
            '영화관 안에 즐비한 최근 개봉작 포스터들을 둘러보던 중, 에이신 플래시의 시선이 한 게시판 앞에서 멈췄다.',
          );
          await flash.say_and_wait(
            '들어본 적 있어요. 루돌프 회장님도 감상 후에 호평을 남기셨다는 청춘 로맨스 영화의 신작이군요.',
          );
          await flash.say_and_wait(
            `${callname}, 저와 함께 보러 가시겠어요? 마침 다음 데이트 계획을 위한 영감을 얻기에도 딱 좋을 것 같아서요.`,
          );
        } else if (Math.random() < 0.5) {
          await flash.say_and_wait('《우마무스메의 여명: 정점에 선 순간》?');
          await era.printAndWait(
            '영화관에 붙은 여러 포스터들을 살피던 에이신 플래시의 시선이 한곳에 고정되었다.',
          );
          await flash.say_and_wait(
            '소문은 들었답니다. 루돌프 회장님이 추천하신 전기 영화 시리즈의 신작이죠?',
          );
          await flash.say_and_wait(
            `${callname}, 같이 보러 가지 않을래요? 작중에서 묘사되는 레이스 중 우마무스메의 심경 변화에 대해 무척 흥미가 있거든요.`,
          );
        } else {
          await flash.say_and_wait('《5시간의 지옥》?');
          await era.printAndWait(
            '영화관 게시판을 둘러보던 에이신 플래시의 시선이 멈췄다.',
          );
          await flash.say_and_wait(
            '기억나요. 메지로 맥퀸 양이 언급했던, 관객의 인내심을 시험하기로 유명한 그 엄청난 길이의 영화죠?',
          );
          await flash.say_and_wait(
            `${callname}, 저와 함께 도전해 보시겠어요? 당신과 함께라면 300분이라는 시간도 전혀 문제없을 것 같거든요.`,
          );
        }
    }
    hook.arg = hook.arg <= 1;
  }

  async out_station(hook) {
    const callname = sys_get_callname(37, 0),
      flash = get_chara_talk(37),
      me = get_chara_talk(0);
    hook.arg = await select_action_in_station(37);
    switch (hook.arg) {
      case 0:
        await era.printAndWait(`${me.name}과(와) 에이신 플래시는 역 근처로 식사를 하러 왔다.`);
        if (Math.random() < 0.5) {
          await flash.say_and_wait('어머, 이번 식사 메뉴를 제가 결정해도 될까요?');
          await flash.say_and_wait(
            '음…… 그렇다면 평소 제가 즐겨 먹는 음식들로 구성된 식단을 골라도 괜찮을까요?',
          );
          await flash.say_and_wait(
            '말은 그렇게 했지만 영양과 맛, 두 마리 토끼를 다 잡을 수 있도록 구성했으니 실망하게 해드리지 않을 자신 있어요.',
          );
          await flash.say_and_wait('네, 알겠습니다. 그럼 기대해 주세요.');
          await flash.say_and_wait(
            '후훗~ 제 취향을 당신과 함께 공유할 수 있게 되어 무척 기쁘네요.',
          );
        } else {
          await flash.say_and_wait('당신은 낫토를 좋아하시나요?');
          await flash.say_and_wait(
            '아, 다른 뜻은 아니고 메뉴에 낫토가 있길래 문득 궁금해져서요.',
          );
          await flash.say_and_wait(
            '사실 저는 낫토를 아주 좋아해요. 몸에 좋은 건강식품이니까요.',
          );
          await flash.say_and_wait(
            '처음 시도할 때는 향 때문에 거부감이 들 수도 있지만, 익숙해지면 오히려 독특한 매력에 빠지게 된답니다.',
          );
          await flash.say_and_wait(
            '그러니 괜찮다면 당신께도 권해드리고 싶네요. 이를테면…… 지금 당장이라던가? 후후훗~',
          );
        }
        break;
      case 1:
        await era.printAndWait(`${me.name}과(와) 에이신 플래시는 역 근처로 데이트를 하러 갔다.`);
        if (Math.random() < 0.5) {
          await flash.say_and_wait(`제 손을 꼭 잡으세요, ${callname}.`);
          await flash.say_and_wait(
            '그리고 실례가 안 된다면 저에게 5센티미터만 더 가까이 붙어주시겠어요? 네, 좋아요.',
          );
          await flash.say_and_wait(
            '어머, 아뇨…… 딴마음이 있는 건 아니에요. 그저 유동 인구가 너무 많아서 당신의 안전이 걱정되어…… 네, 정말 그뿐이랍니다.',
          );
        } else {
          await flash.say_and_wait('오늘 입은 옷이 예쁘다고요? 후후. 칭찬 감사합니다.');
          await flash.say_and_wait(
            '당신과의 약속이니까, 당연히 이렇게 정성을 들여야죠.',
          );
          await flash.say_and_wait(
            `하지만 데이트란 게 단순히 차림새만 보는 건 아니잖아요? 그러니 저와 함께 무엇을 할지 계획은 세워두셨나요, ${callname}.`,
          );
        }
        break;
      case 2:
        await era.printAndWait(`${me.name}과(와) 에이신 플래시는 역 근처 백화점에서 쇼핑을 하러 갔다.`);
        if (Math.random() < 0.5) {
          await flash.say_and_wait(
            `구매할 품목은 미리 정해두셨나요? ${callname}.`,
          );
          await flash.say_and_wait('에, 왜 미리 계획해야 하느냐고요?');
          await flash.say_and_wait(
            '저에게 쇼핑이란 계획을 실행하는 것과 같아서, 정밀하게 대처해야 하는 행위거든요.',
          );
          await flash.say_and_wait(
            '당신께도 이 방법을 추천해 드리고 싶어요. 심사숙고 끝에 결정한 물건만 단호하게 구매함으로써 불필요한 지출을 최대한 억제하는 거죠. 장기적으로 보면 엄청난 비용을 절약할 수 있답니다.',
          );
          await flash.say_and_wait(
            '음…… 관심이 있으시다면 아예 오늘부터 시작해 보는 건 어떨까요? 이번 쇼핑 리스트를 같이 작성해 봐요.',
          );
        } else {
          await flash.say_and_wait('테디 베어 인형이네요.');
          await era.printAndWait(
            `도중에, ${me.name}은(는) ${flash.sex}가 어느 장난감 가게 진열장을 멍하니 바라보고 있는 것을 발견했다.`,
          );
          era.printButton('「왜 그래?」', 1);
          await era.input();
          await flash.say_and_wait(
            '……아뇨, 아무것도 아니에요. 그저 어릴 적 부모님이 선물해 주셨던 테디 베어 인형이 생각나서요. 겉모습이 꽤 닮아서 저도 모르게 추억에 잠겼나 봐요.',
          );
          await flash.say_and_wait(`어? 잠깐만요! ${callname}, 딱히 관심이 있다는 뜻은 아………`);
          await flash.say_and_wait('…………');
          await flash.say_and_wait(
            '……하아, 참 당신도. 이 인형은 이번 쇼핑 리스트에 없었는데 말이죠.',
          );
          await flash.say_and_wait(
            '하지만……당신의 따뜻한 마음, 정말 고맙게 받을게요. 소중히 간직하겠습니다.',
          );
        }
    }
  }

  async load_talk() {
    const flash = get_chara_talk(37);
    if (
      (era.get('cflag:37:임신단계') !== 1 << pregnant_stage_enum.no &&
        !LifeEventMarks.get_marks(37).report) ||
      era.get(`exp:37:출산횟수`) > 0
    ) {
      await flash.say_and_wait('그런가요…… 당신은 결국 이런 선택을 내렸군요.');
      await era.printAndWait([
        flash.get_colored_name(),
        '가 나지막이 한숨을 내쉬었다. 그 목소리엔 실망감이 가득했다.',
      ]);
      await flash.say_and_wait(
        '……훗, 아무래도 이전에 느꼈던 그 가짜 아름다움에 제 눈이 멀었었나 봐요.',
      );
      await era.printAndWait(
        `다음 순간, 모든 것이 되돌릴 수 없음을 깨달은 ${flash.sex}는 자조적인 미소를 지으며 고개를 저었다.`,
      );
      await flash.say_and_wait('그럼, 마지막으로 한 가지만 물어볼게요.');
      await era.printAndWait(
        `${flash.get_teen_sex_title()}은(는) 눈가에 맺힌 눈물을 닦아냈다. 슬픔은 어느새 서늘한 질문으로 변해 있었다.`,
      );
      await flash.say_and_wait(
        '처자식을 버리고, 믿음을 저버리다니. 당신에게 맹세란 건, 그렇게 아무런 가치도 없는 것이었나요?',
      );
    }
  }
};