/**
 * @file 베누스 파크 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(205)) {
      return super.select();
    }
    const arr = [`Bonjour~ 지시사항이 있나요, ${sys_get_callname(205, 0)}?`];
    if (era.get('love:205') >= 50) {
      arr.push('부르실 때 이런 곳을 찌르면 안 돼요.');
    }
    if (era.get('love:205') >= 75) {
      arr.push('후후, 괜찮아요.');
    }
    get_chara_talk(205).say(get_random_entry(arr));
  }

  good_morning() {
    const arr = [
      '그럼 다음엔 뭘 하고 놀까요?',
      '지금 힘이 넘쳐나서, 에너지가 너무 가득해 조금 곤란할 정도예요.',
    ];
    if (era.get('love:205') >= 50) {
      arr.push(
        '절 너무 예뻐해 주시는 거 아닌가요…… 조금 과보호일지도?',
        '이른 아침부터 저녁까지, 전 매분 매초 당신을 생각하고 있어요. 한순간도 그리워하지 않은 적이 없답니다.',
      );
    }
    if (era.get('love:205') >= 75) {
      arr.push(
        '당신을 만나기 전까진, 제가 한 사람에게만 빠지는 타입일 줄은 몰랐어요.',
        '당신을 향해 걸어갈 때면, 마치 첫사랑을 시작한 것처럼 심장이 쿵쾅거려요.',
      );
    }
    get_chara_talk(205).say(get_random_entry(arr));
  }

  async talk() {
    if (!sys_check_awake(205)) {
      return await super.talk();
    }
    const vp = get_chara_talk(205);
    if (era.get('base:205:체력') < 0.3 * era.get('maxbase:205:체력')) {
      await vp.say_and_wait(
        get_random_entry([
          '품을 잠시 빌려주실 수 있나요?',
          '지금은 걷는 것조차 힘들답니다~',
        ]),
      );
    } else {
      const arr = [];
      switch (era.get('cflag:205:컨디션')) {
        case 2:
          arr.push('방금 건 저 혼자 한 훈련이에요, 훈련이라니까요.');
          era
            .getAddedCharacters()
            .findIndex((e) => e !== 205 && era.get(`love:${e}`) >= 50) !== -1 &&
            arr.push(`당신과 ${vp.sex}들이 어떻게 만났는지 제게 이야기해 주시면 안 되나요?`);
          era.get('love:205') >= 50 &&
            arr.push('당신에게 『내 사랑』이라고 말할 수 있다니, 정말 좋은 느낌이네요.');
          break;
        case 1:
          arr.push(
            '사람마다 저마다의 이야기가 있어서, 전 듣는 걸 무척 좋아해요.',
            '앞으로도 계속 절 보살펴 주셨으면 좋겠어요.',
          );
          break;
        case 0:
          arr.push(
            '당신을 기다리는 건 정말 쉬운 일이 아니네요.',
            '제가 『초보』 트레이너 씨를 위해 시범을 보여드려야겠어요.',
          );
          break;
        case -1:
          arr.push(
            '만약 절 안아주신다면, 제 컨디션이 조금은 나아질지도 몰라요.',
            '제 열정이 흔적도 없이, 소리 소문도 없이 사라져 버렸어요……',
          );
          break;
        case -2:
          arr.push(
            '절 휴게실까지 데려다주신다면 더할 나위 없이 좋겠어요.',
            '죽음이란 인생의 세금 같은 것……',
            '당신은 단순한 트레이너가 아니라, 여심을 뒤흔드는 바람둥이예요……',
          );
      }
      await vp.say_and_wait(get_random_entry(arr));
    }
  }

  office_gift() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry(['세상이 변해도, 사랑만은 영원한 흔적으로 남는 법이죠.', '이걸 사랑이라고 생각해도 될까요?']),
    );
  }

  office_study() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '이상하네요, 당신도 프랑스어를 배울 때 이렇게 더듬거리셨나요? 아니라고요? ……얄미운 천재 같으니.',
        '왠지 당신이 곁에 있으면 더 잘 출 수 있을 것 같아요…… 어때요, 멋지죠?',
        '잠깐 멈춰요! 아무리 변태라지만 이런 식으로 지도하는 게 어디 있어요!',
      ]),
    );
  }

  office_cook() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '프랑스 요리는 뭐라고 해야 할까…… 아하하하, 이 이야기는 일단 넘어가죠.',
        '으우, 나쁜 사람한테 위장을 붙잡혀 버리겠어요.',
      ]),
    );
  }

  office_rest() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry(['앞으로 어떻게 될지 궁금하네요.', '저랑 같이 쉬니까 즐거우신가요?']),
    );
  }

  office_prepare() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '당신에게 최고의 선물을 선사할 수 있게 해 주세요.',
        `오늘의 승리는 제가 차지하겠어요. ${sys_get_callname(205, 0)}를 위해서요.`,
      ]),
    );
  }

  office_game() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        `${sys_get_callname(205, 0)}! 왜 어떤 사람들은 우마소프트를 유비소프트라고 부르는 건가요?`,
        '《어쌔신 크리드: 트레센》…… 모든 면에서 시리즈의 전작들을 완벽하게 뛰어넘은 역작이에요——',
      ]),
    );
  }

  async school_atrium(hook) {
    const vp = get_chara_talk(205);
    hook.arg = (await select_action_in_atrium()) === 0;
    if (hook.arg) {
      await vp.say_and_wait(
        get_random_entry(['멀리서 전하는 나의 키스는 씁쓸하고도 애달프구나.', '우리의 운명은 험난하고도 굴곡지구나.']),
      );
    } else {
      await vp.say_and_wait(
        get_random_entry([
          '무서울 정도로 능숙하시네요…… 혹시 이게 본업이신 건 아니겠죠!',
          '지금에 비하면, 예전의 삶은 그저 『죽음을 기다리는 것』뿐이었다고 할 수 있겠네요.',
        ]),
      );
    }
  }

  school_rooftop() {
    return get_chara_talk(205).say_and_wait(
      get_random_entry([
        '짜잔! 오늘 점심의 퀄리티는 꽤 훌륭하답니다.',
        '랍스터, 대하, 구운 새우, 홍합에 구운 오징어, 사이드 메뉴는 감자튀김과 해물죽이에요. 몸보신 톡톡히 하세요.',
      ]),
    );
  }

  async out_river(hook) {
    if ((hook.arg = (await select_action_around_river()) > 0)) {
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          '안심하고 제 손을 잡으세요. 설령 멀리 도망친다 해도 괜찮으니까요.',
          '그으……로맨스 알레르기에다 눈치 하나도 없는 당신 때문에 속 터져 죽겠어요.',
        ]),
      );
    } else {
      await get_chara_talk(205).say_and_wait(
        get_random_entry([
          `한 마리도 안 낚이네요…… 흥, ${get_chara_talk(0).actual_name} 나으리께서 이 소녀에게 하사해 주신 걸로 치죠.`,
          '드디어 큰 물고기가 걸려들었네요…… 얼마 전에도 꽤 괜찮은 녀석을 낚으셨다고요? 거짓말, 전 보지도 못했는걸요.',
        ]),
      );
    }
  }

  async out_shopping(hook) {
    let temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        temp = get_random_entry(
          sys_filter_chara('cflag', '모집상태', recruit_flags.yes).filter(
            (e) => e !== 205 && era.get(`cflag:${e}:종족`),
          ),
        );
        temp = temp
          ? [
              [
                sys_get_callname(205, 0),
                '! 마침 ',
                sys_get_colored_callname(205, temp),
                ' 인형이 있네요! 하나 뽑아도 될까요?',
              ],
            ]
          : [];
        temp.push(
          '그거 아세요? 프랑스의 오락실에는 연인들뿐만 아니라 귀여운 꼬마 소꿉친구들도 자주 보인답니다.',
          [
            '으윽, 져버렸어요…… ',
            get_chara_talk(0).get_colored_actual_name(),
            ', 저기 있는 【펀치력 측정기】에서 다시 한판 붙어요.',
          ],
        );
        await get_chara_talk(205).say_and_wait(get_random_entry(temp));
        break;
      case 1:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            `와아아…… ${sys_get_callname(205, 0)}! 제 용돈 좀 가불해 주세요.`,
            '파리 4박 5일 호화 여행…… 진짜로 당첨되면 일정을 어떻게 짤까요?',
          ]),
        );
        break;
      case 2:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '당신의 노래 솜씨는 정말 매혹적이네요. 어쩌면 《기차는 떠나고》나 《장밋빛 인생》 같은 곡을 배워보시는 게 어떨까요……',
            '미리 말해두겠는데, 전 목이 너무 아파서 여기서 당신이랑 같이 부르는 건……',
          ]),
        );
        break;
      case 3:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '엄청난 몰입감을 주는 명작이네요. impeccable à tous les sens.',
            '스승님께서 저희에게 딱 어울리는 고전 영화가 있다고 하셨어요. 《Un homme et une femme》라는 제목인데…… 남자 하나와 여자 하나라니, 참 묘한 제목이죠, 하하하……',
          ]),
        );
    }
  }

  async out_church() {
    const me = get_chara_talk(0),
      vp = get_chara_talk(205);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 근처 신사에 가자고 제안하자, ',
      sys_get_colored_callname(0, 205),
      `는 기쁘게 수락했다.`,
    ]);
    await vp.say_and_wait('무슨 생각을 그렇게 하세요? 영 집중하지 못하시는 것 같아요.');
    await vp.say_and_wait('저 먼저 운세 뽑으러 갈게요!');
    await vp.say_and_wait(
      Math.random() < 0.5
        ? `【대길】이 나왔어요! 한 번 더 뽑아도 될까요? 이건 ${sys_get_callname(205, 0)}에게 선물하고 싶거든요.`
        : '으아아, 이런 건 역시 한 번 경험해보는 걸로 족해요……',
    );
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station(205);
    switch (hook.arg) {
      case 0:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '이런 레스토랑은 꼭 연인들이 데이트하러 오는 곳 같네요……',
            '이런 멋진 곳은 어떻게 찾으신 거예요?! 저렴한데 양도 많아서 도저히 다 못 먹겠어요!',
          ]),
        );
        break;
      case 1:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            '당신이 평소에 하루를 어떻게 보내는지 제대로 지켜봐야겠어요.',
            '왜 제겐 꽃을 안 주시나요? 저도 꽃을 좋아한단 말이에요.',
          ]),
        );
        break;
      case 2:
        await get_chara_talk(205).say_and_wait(
          get_random_entry([
            `수박이…… 왜 이렇게 비싸죠?! 게다가 조각으로 팔다니, 이게 말이 되나요, ${sys_get_callname(205, 0)}?`,
            '전 이것저것 고르는 걸 잘 못 해서…',
            '오늘 마침 할인 행사를 하네요, chanceux~',
          ]),
        );
    }
  }

  async basement_end() {
    const me = get_chara_talk(0);
    const vp = get_chara_talk(205);
    const callname = sys_get_colored_callname(205, 0);
    await era.printAndWait('어느 날, 파리의 거리에서.');
    await vp.say_and_wait([callname, '!']);
    await era.printAndWait(
      `귀에 익은 목소리가 들려 뒤를 돌아보니, ${vp.name}가 달려오고 있었다.`,
    );
    await era.printAndWait(
      `앳되고 사랑스러운 ${vp.sex}는 바다처럼 맑은 눈으로 ${me.name}을(를) 올려다보았다.`,
    );
    await era.printAndWait('바람에 흔들리는 머리카락에서 은은한 샴푸 향기가 풍겨왔다.');
    await era.printAndWait(`${vp.name}는 「안녕하세요!」 하며 ${me.name}에게 손을 흔들었다.`);
    await vp.say_and_wait('정말 우연이네요.');
    await era.printAndWait(`그렇게 말하는 ${vp.name}의 눈이 어째서인지 반짝이고 있었다.`);
    await vp.say_and_wait('제가 관광시켜 드릴게요!');
    await era.printAndWait(`${vp.name}는 당당하게 가슴을 폈다.`);
    era.printButton('「그래도 돼?」', 1);
    await era.input();
    await era.printAndWait(`밑져야 본전으로 물어보자, ${vp.name}는 활기차게 고개를 끄덕였다.`);
    await vp.say_and_wait('그럼 우선, 저기에 맛있는 가게가 있으니 들어가 봐요.');
    await era.printAndWait(
      `그렇게 말하며 ${vp.name}가 ${me.name}의 손을 잡아끄는 순간, ${vp.sex}의 주머니에서 사진 한 장이 바람을 타고 펄럭이며 떨어졌다.`,
    );
    await era.printAndWait(
      `떨어진 사진을 주워 들자, ${vp.name}의 표정이 순식간에 새하얗게 질렸다.`,
    );
    await vp.say_and_wait('——앗!');
    await era.printAndWait(`사진을 줍기가 무섭게—— ${vp.name}가 즉시 손을 뻗어 그것을 빼앗으려 했다.`);
    await era.printAndWait(
      `하얀 뒷면을 돌려 정면을 확인한 ${me.name}은(는) 그곳에 찍힌 사진을 보고 자신도 모르게 숨을 삼켰다.`,
    );
    await era.printAndWait(
      `그러나 사진은 눈 깜짝할 사이에 빼앗겼고, ${vp.name}는 서둘러 주머니에 집어넣으며 눈을 가늘게 떴다.`,
    );
    await vp.say_and_wait('보셨나요……?');
    await era.printAndWait(
      `${vp.name}의 질문에 ${me.name}은(는) 저도 모르게 고개를 가로저었다.`,
    );
    await era.printAndWait(
      `${vp.sex}는 이내 미소를 지으며 『다행이네요!』 라고 하더니, ${me.name}의 손을 잡고 달리기 시작했다.`,
    );
    await era.printAndWait(
      `${me.name}의 머릿속에는 ${vp.name}가 숨기려 했던 사진이 계속 맴돌았다. 아주 찰나의 순간이었지만, 틀림없었다.`,
    );
    await era.printAndWait(`——그 사진에 찍혀 있던 것은 바로 ${me.name}(이)었다.`);
    await era.printAndWait('특별한 일 없이 시간이 흘러, 어느새 하늘이 붉게 물들었다.');
    await era.printAndWait(
      `${vp.name}의 안내를 받으며 프랑스의 명소들을 둘러보고, 맛있는 음식도 먹었다.`,
    );
    await era.printAndWait(`${vp.name}와의 대화도 무척 잘 통했고 즐거웠다.`);
    await era.printAndWait('하지만 오직 그 사진 한 장만큼은 머릿속에서 도저히 떠나지 않았다.');
    await era.printAndWait(
      `그것은 ${me.name}이(가) 카메라를 정면으로 바라보고 찍은 사진이 아니었으며, 그런 사진을 찍힌 기억조차 없었다.`,
    );
    await era.printAndWait(
      `명백히 어둠 속에서 몰래 촬영한 도촬 사진이었다. 문제는 ${vp.name}가 대체 왜 그런 것을 가지고 있느냐는 점이었다.`,
    );
    await era.printAndWait(
      '우연히 그런 사진을 주운 걸까? 그렇다 쳐도 너무 소름 끼쳤다. 혹시 스토커인 걸까?',
    );
    await era.printAndWait(`하지만 다른 사람도 아닌 ${vp.name}라면 별문제 없을 거라 애써 스스로를 안심시켰다.`);
    await era.printAndWait(`어쨌든 나중에 ${vp.sex} 본인에게 직접 물어보면 될 일이었다.`);
    await vp.say_and_wait(['저, ', callname, '를——']);
    await era.printAndWait('그 순간—— 피부를 적시는 차가운 감각이 전해졌다.');
    await era.printAndWait(
      '뒤이어 하늘을 뒤덮은 먹구름에서 장대비가 쏟아지기 시작했고, 주변 사람들은 일제히 하늘을 올려다보았다.',
    );
    await vp.say_and_wait([callname, '，이쪽이에요!']);
    await era.printAndWait(
      `쏟아지는 빗속에서 ${vp.name}는 서둘러 ${me.name}의 손을 잡아끌었다.`,
    );
    await era.printAndWait(
      `${vp.name}에게 손을 붙잡힌 채 정신없이 내달렸다. 고인 물웅덩이에 발자국이 파문을 그리며 번져갔고, 정신을 차렸을 때는 이미 어떤 방 앞에 도착해 있었다.`,
    );
    era.printButton(`「${sys_get_callname(0, 205)}, 여기 어디야?」`, 1);
    await era.input();
    await era.printAndWait(
      `낯선 길이었지만 ${me.name}은(는) 이곳이 어떤 곳인지는 직감할 수 있었다—— 아파트였다. 하지만 정확히 누구의 방으로 불려온 것인지는 알 수 없었다.`,
    );
    await era.printAndWait(
      `고개를 돌려 옆에 선 ${vp.name}를 빤히 쳐다보자, ${vp.sex}는 황급히 시선을 회피했다.`,
    );
    await era.printAndWait(`갑작스러운 소나기 때문에 ${me.name}과(와) ${vp.name} 모두 물에 쫄딱 젖은 상태였다.`);
    await era.printAndWait(`${vp.name}의 옷은 얇지 않았음에도 불구하고, 물에 젖어 살결이 투명하게 비치고 있었다.`);
    era.printButton('「이거 누구 방이야?」', 1);
    await era.input();
    await vp.say_and_wait('제 방이에요. 잠시만 기다려 주세요.');
    await era.printAndWait(
      `${vp.name}는 생긋 웃으며 그렇게 말했다. 그러고는 문을 열고 ${me.name}에게 수건을 건넨 뒤, 황급히 문을 쾅 닫아버렸다. 방 안에서 무언가를 거칠게 정리하는 소리가 요란하게 들려왔다. ${me.name}이(가) 건네받은 수건으로 얼굴을 닦으며 기다리기를 몇 분, ${vp.name}가 문틈으로 슬그머니 얼굴을 내밀었다.`,
    );
    await vp.say_and_wait(['들어오세요, ', callname, '，어서 들어오세요.']);
    await vp.say_and_wait('조금 지저분하긴 하지만요.');
    await era.printAndWait(`등을 떠밀리듯 ${me.name}은(는) ${vp.name}의 방 안으로 발을 들여놓았다.`);
    await era.printAndWait(
      `${vp.name}는 욕실로 향하려다 말고 급히 돌아서더니, 손가락으로 벽장을 가리켰다.`,
    );
    await vp.say_and_wait('저 벽장은 절대로 열어보시면 안 돼요.');
    era.printButton('「어, 어어. 알았어.」', 1);
    await era.input();
    await vp.say_and_wait('——절대로요!');
    await era.printAndWait(`${me.name}은(는) 영문을 모르겠다는 듯 고개를 끄덕였다.`);
    await era.printAndWait(
      '하지만 바로 그 순간, 벽장 아래 틈새로 사진 같은 종이 한 장이 툭 떨어져 내렸다.',
    );
    await me.say_and_wait('이게 뭐야?');
    await era.printAndWait(
      `벽장을 연 것도 아니니 괜찮겠지. 그런 가벼운 마음으로 ${me.name}이(가) 틈새에 떨어진 사진을 집어 든 순간, 척추를 타고 극심한 오한이 내달렸다.`,
    );
    await era.printAndWait(`손이 떨리기 시작했다. 사진 속 내용물은 다름 아닌 ${me.name}을(를) 몰래 촬영한 사진들이었다.`);
    await me.say_and_wait('어라, 왜 이런 게……');
    await era.printAndWait(`게다가 이것은 아까 전에 ${vp.name}가 가지고 있던 사진과는 또 다른 종류였다.`);
    await era.printAndWait(
      `${me.name}이(가) 충동적으로 벽장 문을 활짝 열어젖혔다—— 그리고 그 순간, 눈앞에 펼쳐진 광경에 숨이 턱 막히고 말았다.`,
    );
    await me.say_and_wait('왜 여기…… 전부 내 사진밖에 없는 거야……?');
    await era.printAndWait(
      `벽장 내부의 한쪽 벽면을 빼곡하게 채우고 있는 사진들은, 전부 ${me.name}의 일거수일투족을 찍은 것들이었다.`,
    );
    await era.printAndWait(
      `언제 어디서 찍힌 것인지 일일이 따질 겨를도 없었다. ${me.name}은(는) 척추를 타고 올라오는 강한 공포에 사로잡혔다.`,
    );
    await era.printAndWait(
      '마른침을 삼키며 그 기괴한 광경에 압도되어 서서히 시선을 내리자, 허리 높이의 서랍장 위에 일기장 한 권이 놓여 있었다.',
    );
    await era.printAndWait(
      `떨리는 손으로 일기장을 펼쳐 대충 내용을 넘겨보았다. 아기자기하고 예쁜 프랑스어로 매일의 일과가 상세히 기록되어 있었다—— 그리고 그 내용은 전부 ${me.name}에 관한 이야기뿐이었다. ${me.name}이(가) ${vp.name}를 처음 만난 날부터 단 하루도 빠짐없이.`,
    );
    await vp.used_to_say_and_wait(
      '일본에서 온 트레이너. 정말 멋지고 다정하며 웃는 모습이 너무나 귀여운 사람. 노력하는 모습도, 서툰 프랑스어를 구사하는 모습도 전부 좋아하게 되어버렸다.',
    );
    await vp.used_to_say_and_wait(
      '트레이너는 밤색 털의 우마무스메를 좋아하는 것 같다. 나와 함께 있을 때 무척 즐거워 보였으니까.',
    );
    await vp.used_to_say_and_wait(
      '트레이너가 묵는 숙소는 ◯◯ 호텔이다. 나도 같이 묵으면 안 되는 걸까?',
    );
    await vp.used_to_say_and_wait([
      '오늘 드디어 ',
      callname,
      '가 말을 걸어주었다! 이런저런 이야기를 들을 수 있어서 정말 행복했다. 이 시간이 영원히 계속되었으면 좋겠다.',
    ]);
    await vp.used_to_say_and_wait(
      '좋아해. 너무 좋아해. 세상에서 제일 좋아해. 먹어버리고 싶을 정도로 좋아, 좋아좋아좋아좋아좋아좋아좋아——',
    );
    await era.printAndWait(`${me.name}은(는) 소름 끼치는 공포에 급히 일기장을 덮고 손으로 입을 틀어막았다.`);
    await era.printAndWait(
      '신변의 위협을 직감하고 이곳을 빠져나가기 위해 서둘러 뒤를 돌아보려던 찰나—— 머리 뒤쪽에서 둔기로 강하게 내리치는 듯한 충격이 전해졌다. 이내 시야가 사정없이 흔들리더니, 몸에 힘이 빠지며 그대로 바닥으로 쓰러졌다.',
    );
    await era.printAndWait(`의식을 잃어가며 마지막으로 들은 것은, 위에서 내려다보는 ${vp.name}의 가라앉은 목소리였다.`);
    await vp.say_and_wait('결국 보셨군요……');
    await era.printAndWait(`그리고 ${me.name}의 의식은 암전되었다.`);
    era.drawLine();
    await era.printAndWait(`흐릿해지는 감각 속에서 깨어나 보니, ${me.name}은(는) 낯선 침대 위에 누워 있었다.`);
    await era.printAndWait(
      '머리가 깨질 듯이 아팠다. 무슨 일이 일어난 건지 파악하기 위해, 일단 천장의 희미한 불빛을 응시하며 필사적으로 기억을 더듬었다.',
    );
    era.printButton(`「난 ${vp.name}의 방에 왔었고, 그리고……」`, 1);
    await era.input();
    await era.printAndWait(`${me.name}은(는) 그제야 모든 기억이 떠올랐다.`);
    await era.printAndWait(
      `${vp.name}가 보여준 광기 어린 이상성이 떠오르자, ${me.name}의 의식이 순식간에 또렷해졌다.`,
    );
    await era.printAndWait(`동시에, ${me.name}은(는) 자신의 사지가 수갑에 채여 침대 틀에 단단히 고정되어 있다는 사실을 깨달았다.`);
    era.printButton('「이게 뭐야? 왜 이래……?」', 1);
    await era.input();
    await era.printAndWait(
      `아무리 몸부림을 쳐봐도 사지를 파고드는 날카로운 통증만 더해질 뿐이었다. ${me.name}이(가) 구조를 요청하기 위해 다급히 주위를 둘러보던 그때, 등 뒤에서 익숙한 목소리가 들려왔다.`,
    );
    await vp.say_and_wait(['일어나셨네요, ', callname, '.']);
    await era.printAndWait(`${vp.name}였다.`);
    await era.printAndWait(
      `${vp.sex}는 침대 맡에 선 채, 칠흑같이 어두운 심해를 닮은 눈동자로 ${me.name}을(를) 묵묵히 내려다보고 있었다.`,
    );
    era.printButton(`「${sys_get_callname(0, 205)}, 왜 이런 짓을 하는 거야!?」`, 1);
    await era.input();
    await vp.say_and_wait(
      `제가 보지 말라고 말씀드렸는데…… ${sys_get_callname(205, 0)}가 말을 안 들어서 그런 거잖아요?`,
    );
    await era.printAndWait(
      `${vp.name}는 결박당해 움직이지 못하는 ${me.name}의 손가락 사이에 자신의 손가락을 얽어맸다. 그러고는 천천히 얼굴을 가까이 가져가, 숨결이 닿을 듯 가까운 거리에서 ${me.name}을(를) 빤히 응시했다.`,
    );
    await vp.say_and_wait([
      '전 ',
      callname,
      '에게 첫눈에 반해버렸어요. 그날 이후로 제 머릿속은 온통 ',
      callname,
      '에 대한 생각뿐이었죠. 가슴이 찢어질 것처럼 아플 정도로, 정말 너무나도 좋아해요, ',
      callname,
      '.',
    ]);
    await era.printAndWait(
      `${me.name}의 몸 위로 올라탄 ${vp.name}는 ${me.name}의 가슴팍에 살며시 손을 얹었다.`,
    );
    await era.printAndWait(
      `이대로 있으면 정말 위험하다며 본능이 비명을 질러댔지만, 아무리 발버둥을 쳐도 수갑은 요지부동이었다. 하물며 인간의 힘으로 ${vp.get_uma_sex_title()}를 힘으로 찍어누르는 건 애초에 불가능에 가까웠다.`,
    );
    await vp.say_and_wait([
      callname,
      '，당신은 이제 일본으로 돌아갈 수 없어요…… 영원히 저의 것, 오직 저만을 위해 살아가는 사람이 되어주실 거죠……?',
    ]);
    await era.printAndWait(
      `${vp.name}는 황홀한 미소를 지으며 요염한 눈빛을 보냈다. 발그레하게 상기된 뺨을 한 채 ${me.name}의 얼굴로 바짝 다가온 ${vp.sex}는, 이내 숨결마저 삼켜버릴 듯 밀착한 거리에서 나지막이 속삭였다.`,
    );
    await vp.say_and_wait([
      '전부 ',
      callname,
      ' 탓이라니까요? 절 이렇게 망가뜨려 놓은 ',
      callname,
      '가 나쁜 거예요.',
    ]);
    await era.printAndWait(
      `어떻게든 고개를 돌리려 했지만, ${vp.name}의 강인한 손아귀에 붙잡혀 꼼짝도 할 수 없었다. 이윽고 ${vp.name}는 거부할 틈도 주지 않고 ${me.name}의 입술을 집어삼켰다. 부드러운 감촉이 입술을 틀어막았고, 이내 뜨거운 열기가 뇌리를 지배했다. ${vp.name}의 혀가 굳게 닫힌 ${me.name}의 입술을 강제로 비집고 들어와, 무자비하게 얽혀들었다.`,
    );
    await vp.say_and_wait(['읍, 으응……', callname, '……']);
    await era.printAndWait(
      `질척한 타액 소리가 입안 가득 공허하게 울려 퍼졌다. 쾌감을 음미하듯, ${vp.name}는 집요하게 ${me.name}의 입술을 탐닉했다.`,
    );
    await era.printAndWait(`이윽고 숨이 가빠와 한계에 달했을 때가 되어서야, ${vp.sex}는 서서히 입술을 떼어냈다.`);
    await vp.say_and_wait(`하아, 하아, 저…… 이제——`);
    await era.printAndWait(
      `사고가 정지되어 간신히 말을 내뱉으려는 순간, ${vp.name}는 다시 한 번 입술을 겹쳐오며 ${me.name}의 유언 같은 반발을 차단해버렸다.`,
    );
    await era.printAndWait(
      `숨이 막혀왔다. 아무리 도망치려 발버둥 쳐도, ${vp.name}는 결코 ${me.name}을(를) 놓아줄 생각이 없어 보였다.`,
    );
    await era.printAndWait(
      `끝없이, 영원토록, 한계조차 모르는 ${vp.name}의 집착 어린 사랑은 입술을 포개고 혀를 섞으며 끊임없이 맹목적인 애정을 갈구했다.`,
    );
    await era.printAndWait(
      `마침내 입술을 뗀 ${vp.name}는 가느다랗게 실을 그리며 이어지는 타액을 삼킨 뒤, 잔혹하리만치 아름다운 미소를 지었다.`,
    );
    await vp.say_and_wait([
      callname,
      '는 제 거예요. 저 말고 그 누구도 바라봐선 안 돼요. 일본 같은 곳엔 절대 안 보내줄 거니까요. 영원히, 언제까지나, 평생 당신만을 사랑할게요.',
    ]);
    await era.printAndWait(
      `${vp.name}는 ${me.name}의 뺨을 다정하게 감싸 안으며, 주체할 수 없는 격정의 여운을 담아 다시금 입술을 겹쳐왔다.`,
    );
    era.drawLine();
    await era.printAndWait('며칠 뒤, 정적만이 감도는 방 안에 켜진 TV에서 뉴스가 흘러나왔다.');
    await me.say_as_unknown_and_wait(
      '——프랑스를 방문 중이던 일본인 트레이너가 돌연 행방불명되었습니다. 현재 현지 경찰과 공조하여 행방을 쫓고 있으나, 이렇다 할 단서가 발견되지 않아 수사에 난항을 겪고 있습니다.',
    );
    await vp.say_as_unknown_and_wait('후후……');
  }
};