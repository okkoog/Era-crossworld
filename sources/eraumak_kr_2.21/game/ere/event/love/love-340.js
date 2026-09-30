/**
 * @file 달리 아라비안 - 애정
 * @author O口口口口口
 */
const { get, printAndWait } = require('#/era-electron');

const LoveGod = require('#/event/love/snippets/love-god');
const print_event_name = require('#/event/snippets/print-event-name');

const { skin_colors } = require('#/data/color-const');
const { skin_desc } = require('#/data/ero/status-const');
const { get_skin, get_skin_color } = require('#/data/info-generator');

module.exports = class extends LoveGod {
  get fuck_her_button() {
    return '모독';
  }

  get fuck_pregnant_button() {
    return '헌신';
  }

  get fuck_me_button() {
    return '헌신';
  }

  get reject_button() {
    return '나무삼';
  }

  async 49(god, me) {
    await print_event_name('여신상을 쫓는 「시선」', god);
    await printAndWait([
      '아무런 의미도 없는 듯한 수색에도 불구하고 ',
      me.get_colored_name(),
      '은(는) 여전히 누군가에게 몰래 감시당하고 있었다.',
    ]);
    await printAndWait(
      '음… 조금 더 자세히 묘사하자면, 악의가 담긴 시선은 아니었다.',
    );
    await printAndWait('굳이 말하자면 고양이 혀 같달까?');
    await printAndWait(
      '부드럽고…… 또 따뜻하고…… 하지만 피부를 간지럽히는 유연한 돌기가 있고, 게다가 언제인지도 모르게 휘감겨 등 뒤로 숨어든 것 같은 느낌도 비슷하다.',
    );
    await printAndWait('여신님께 기도라도 해봐야 할까……');
    await super[49]();
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async 50(god, me) {
    await print_event_name('「시선」과 사냥', god);
    await printAndWait('가볍고 날렵하게 침대 위로 올라왔다.');
    await printAndWait([
      '양손으로 짚고 ',
      me.get_colored_name(),
      '을(를) 몸 아래에 고정시켰다.',
    ]);
    await printAndWait('어디서부터 손을 대야 할지 가늠하듯 에메랄드빛 시선을 던져왔다.');
    await printAndWait([
      '이것도 꿈의 일부인가… 기묘할 정도로 무덤덤한 시선으로, ',
      me.get_colored_name(),
      '은(는) 자신의 방에 붉은 머리칼에 피부색이 ',
      { color: skin_colors.at(-1), content: skin_desc.at(-1) },
      '인 우마무스메가 나타난 것을 보았고, ',
      god.get_colored_sex(),
      '가 암표범처럼 침대 위의 ',
      me.get_colored_name(),
      '을(를) 덮친 뒤, 키스하는 것을 보았다……',
    ]);
    await printAndWait([
      '그 뒤는…… 안개 속에 가려진 것처럼…… 땀투성이가 되어 얽혀있는 ',
      me.get_phy_sex_title(),
      '과 우마무스메의 몸이 있었다……',
    ]);
    await super[50](god, me);
  }

  async fuck_her(god, me) {
    await printAndWait([
      '아무리 꿈속이라도, 눈앞의 왠지 모르게 기품 있고 고귀한 분위기를 풍기는 우마무스메 아가씨를 상대로도, 아래에 깔려 있을 이유는 없지!',
    ]);
    await printAndWait([
      '눈앞의 우마무스메 아가씨의 놀란 시선 아래, 치밀어 오르는 불타는 듯한 작열감에 이성을 잃은 ',
      me.get_colored_name(),
      '은(는), 침대 위에서 어린 양처럼 휘둘리던 ',
      me.get_colored_name(),
      '의 몸과 하나가 되어, 탁해진 눈을 뜨고 역으로 그 두 손을 제압했다.',
    ]);
    if (get('cflag:0:피부색') === get('cflag:340:피부색')) {
      await printAndWait(
        '이윽고 격렬하게 저항하는 몸과 몸, 갈색 피부의 여신은 자신과 같은 피부색을 가진 아이의 밑에 굴복했다.',
      );
    } else {
      await printAndWait([
        '이윽고 격렬하게 저항하는 몸과 몸, ',
        { color: skin_colors.at(-1), content: skin_desc.at(-1) },
        '이 ',
        { color: get_skin_color(0), content: get_skin(0) },
        '에게 제압당했다.',
      ]);
    }
  }

  async fuck_me(god, me) {
    await printAndWait('저항할 힘이 전혀 없다.');
    await printAndWait(
      '지금 몸이 그렇게 호소하고 있었다. 눈앞의 우마무스메 아가씨는 의심할 여지 없는 지배자였다.',
    );
    await printAndWait(
      '트레이너로서 평소 학생으로 보던 우마무스메 아가씨에게 깔리는 것이 상당히 수치스럽다 해도, 침대 위로 올라타졌다 해도, 그 능숙한 입술과 혀에 키스를 빼앗겼다 해도, 눈앞의 사냥꾼이 이쯤 해서도 멈출 기미가 없다 해도——',
    );
    await printAndWait([me.get_colored_name(), '이(가) 할 수 있는 건, 오로지 헌신하는 것뿐……이겠지……']);
  }

  async after_fuck() {
    await printAndWait('……');
    await printAndWait(['으윽…… 오늘도…… 꿈……인가.']);
  }

  async reject(god, me) {
    await printAndWait('꿈이겠지.');
    await printAndWait([
      '꿈속에서 자신이 꿈을 꾸고 있다는 걸 깨닫는 것도 조금 이상하지만, 지금 이처럼 ',
      me.get_colored_name(),
      '이(가) ',
      me.get_colored_name(),
      '과(와) ',
      god.get_colored_sex(),
      '의 정사를 보고 있는 것은 꿈이 틀림없겠지.',
    ]);
    await printAndWait([
      '그러니, 이쪽의 입술도 이미 그 부드러움을 느꼈다 해도, 저쪽의 ',
      me.sex,
      '와 ',
      god.get_colored_sex(),
      '가 이미 알몸이 되어 요염해졌다 해도, ',
      me.get_couple_title(),
      '이(가) 이미 뱀처럼 매끄러운 몸을 얽어맸다 해도,',
    ]);
    await printAndWait('그저…… 계속 기도하는 수밖에……');
  }
};