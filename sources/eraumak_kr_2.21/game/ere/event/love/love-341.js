/**
 * @file 고돌핀 바브 - 애정
 * @author フィンランド
 */
const { input, printAndWait, printButton } = require('#/era-electron');

const LoveGod = require('#/event/love/snippets/love-god');
const print_event_name = require('#/event/snippets/print-event-name');

module.exports = class extends LoveGod {
  get fuck_her_button() {
    return '본능에 따른다';
  }

  get fuck_pregnant_button() {
    return '신의 뜻에 복종한다';
  }

  get fuck_me_button() {
    return '신의 뜻에 복종한다';
  }

  get reject_button() {
    return '나무삼';
  }

  async 49(god, me) {
    await print_event_name('축복의 물', god);
    await printAndWait('세 여신상이 조용히 서 있다. 석조로 된 눈은 여느 때처럼 먼 곳을 바라보고 있다.');
    await printAndWait(
      '세 여신의 어깨 위에서, 병을 통해 흐르는 물이 발치에 있는 연못으로 쏟아져 내린다.',
    );
    printButton(
      '「만약 병에서 쏟아지는 것이 여신의 은총이라면, 내 몸에도 닿을 수 있을까……」',
      1,
    );
    await input();
    await printAndWait([
      me.get_colored_name(),
      '은(는) 두 눈을 감고 여신상 앞에서 기도했다.',
    ]);
    await printAndWait([
      '우연일까, 쏟아져 내리는 물줄기 사이로 물방울 하나가 튀어 올라 ',
      me.get_colored_name(),
      '의 신발을 적셨다.',
    ]);
    await super[49]();
  }

  /**
   * @param {CharaTalk} god
   * @param {CharaTalk} me
   */
  async 50(god, me) {
    await print_event_name('꿈속의 방문자', god);
    await printAndWait('（달칵）');
    await printAndWait(
      '분명 문이 없는데도 문고리가 돌아가는 소리가 들렸고, 이어 익숙한 얼굴이 나타났다.',
    );
    await printAndWait(
      '미소 짓는 얼굴, 물빛 긴 머리카락, 그리고…… 몸을 감싼 천 사이로 언뜻 보이는 조각처럼 아름다운 육체.',
    );
    await printAndWait([
      '꿈속에 나타난 여신은 「신」에 걸맞은 위엄이나 신적 권능을 드러내지 않았다. 오히려 그 반대로 다정하게 ',
      me.get_colored_name(),
      '의 곁에 앉아 몸을 숙이고 ',
      me.get_colored_name(),
      '에게 입을 맞추었다.',
    ]);
    if (me.sex_code === 1) {
      await printAndWait([
        '그분의 손가락이 살며시 ',
        me.get_colored_name(),
        '의 하체로 향해, 발기한 성기를 쥐고 부드럽게 앞뒤로 쓰다듬기 시작했다……',
      ]);
    } else {
      await printAndWait([
        '그분의 손가락이 살며시 ',
        me.get_colored_name(),
        '의 하체로 향해, 애액이 흐르는 따스한 화원 속으로 파고들었다……',
      ]);
    }
    await super[50](god, me);
  }

  async fuck_her(god, me) {
    if (me.sex_code > 0) {
      await printAndWait([
        '단순히 입술과 손만으로는 ',
        me.get_colored_name(),
        '의 고조된 욕망을 채울 수 없었다.',
      ]);
      await printAndWait([
        '본능에 이끌려, 여신의 말 없는 시선 속에서 ',
        me.get_colored_name(),
        '은(는) 여신의 손목을 붙잡고 거칠게 아래에 깔아뭉개 눌렀다.',
      ]);
      await printAndWait([
        '몸부림도, 저항도 없었다. 그저 ',
        me.get_colored_name(),
        '의 동작에 순응할 뿐이었다. 하얀 육체 위에서 천이 흘러내리며 가벼운 소리를 냈지만, 곧 ',
        me.get_colored_name(),
        '의 짐승 같은 거친 숨소리에 묻혀버렸다……',
      ]);
    } else {
      await printAndWait('이 생각이 스치는 순간, 무언가 일이 일어났다.');
      await printAndWait('꿈이기 때문일까? 아니면 여신의 장난일까?');
      await printAndWait([
        me.get_colored_name(),
        '의 가랑이 사이에, 자신에게 속하지 않은 물건이 돋아났다. 하지만 눈앞의 요염한 여신에 비하면 이런 일은 전혀 중요하지 않았다.',
      ]);
      await printAndWait([
        me.get_colored_name(),
        '은(는) 여신의 손목을 홱 낚아채 아래에 깔아눕혔다.',
      ]);
      await printAndWait([
        '몸부림도, 저항도 없었다. 그저 ',
        me.get_colored_name(),
        '의 동작에 순응하며, 심지어는 ',
        me.get_colored_name(),
        '에게 이 낯선 성기를 사용하는 법을 인도해 주기까지 했다……',
      ]);
    }
  }

  async fuck_me(god, me) {
    await printAndWait([
      '혼란스러운 분위기 속에서, 고조되는 애욕 속에서 ',
      me.get_colored_name(),
      '은(는) 점차 자아를 잃어갔다.',
    ]);
    await printAndWait('머릿속을 비우고, 사지의 힘을 뺀다. 그것으로 충분했다.');
    await printAndWait('심신과 영혼을 모두 여신님께 바치자.');
    await printAndWait('여신의 몸 위로 옷가지가 흘러내려 피부와 마찰하며 아름다운 음률을 만들어냈다.');
    await printAndWait([
      me.get_colored_name(),
      '은(는) 두 눈을 감고, 여신에게 모든 것을 바칠 준비를 마쳤다.',
    ]);
  }

  async reject(god, me) {
    await printAndWait('나무삼, 이 무슨 불경인가!');
    await printAndWait([
      '이러한 극락을 마주하고도, ',
      me.get_colored_name(),
      '의 경건함은 내면의 음욕을 이겨냈다.',
    ]);
    await printAndWait([
      me.get_colored_name(),
      '은(는) 떨리는 손을 내밀었다—이미 너무 경황이 없어 좌우조차 분간할 수 없었다.',
    ]);
    await printAndWait('이마, 가슴, 왼쪽 어깨, 그리고 오른쪽 어깨……');
    await printAndWait('끊임없이 성호를 그으며 기도를 올렸다……');
  }
};