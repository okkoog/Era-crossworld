/**
 * @file 바이얼리 터크 - 招募
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const {
  get,
  input,
  printAndWait,
  printButton,
  set,
} = require('#/era-electron');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const me = get_chara_talk(0),
      god = get_chara_talk(342);
    await print_event_name('너와 만난 기적', god);
    await printAndWait([
      '여느 때처럼 입학을 앞둔 어린 ',
      get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메',
      '들의 달리기 모습을 지켜보며, 능숙하게 ',
      get('flag:캐릭터성별') === 1 ? '그' : '그녀',
      '들의 움직임과 전략을 머릿속에 새기던 중, 고개를 들자 뜻밖에도 잊을 수 없는 눈동자와 마주쳤다.',
    ]);
    printButton('「정말이지…… 믿을 수 없군」', 1);
    await input();
    await god.say_as_unknown_and_wait(
      '어째서 그런 표정을 짓고 있는 거지? 이곳에는 밝은 미래를 가진 아이들뿐이지 않나?',
    );
    await printAndWait('허리에서 느껴지는 기묘한 감촉이 뇌로 신호를 보냈다.');
    await god.say_as_unknown_and_wait(
      '트레이너로서 평가하자면, 넌 여전히 썩 훌륭하다고 볼 수는 없다만. 뭐, 나름대로 장점도 있긴 하더군.',
    );
    await printAndWait([
      '뒤를 돌아보자, 꿈속에서 보았던 그 기가 센 우마무스메가 또다시 ',
      me.get_colored_name(),
      '의 눈앞에 서 있었다. 짙은 갈색 머리카락, 아름다운 눈동자, 그리고 오른쪽 눈 위에 선명하게 남아 있는 흉터까지. 그녀는 ',
      me.get_colored_name(),
      '의 위아래를 훑어보더니, 이내 ',
      me.get_colored_name(),
      '의 가랑이 쪽에 시선을 멈췄다.',
    ]);
    await god.say_and_wait(
      '또 만났군, 여신상 아래에서 기도하던 자여. 그런 골치 아픈 소원을 비는 건 정말 성가시단 말이지.',
    );
    await printAndWait([
      '말투는 조금 차가웠지만, ',
      me.get_colored_name(),
      '은(는) 그녀가 조금 부끄러워하고 있다는 걸 느낄 수 있었다. 마치 그날 ',
      me.get_colored_name(),
      '에게 방어선이 뚫린 뒤 보여주었던 부드러운 모습처럼.',
    ]);
    await printAndWait([
      '두 사람의 시선이 교차하고, 이내 ',
      god.get_colored_name(),
      '가 갑자기 미소를 지었다. 마치 마음속 깊이 만족했다는 듯, 그녀가 입을 열었다.',
    ]);
    await god.say_and_wait('그렇다면, 네 소원에 대한 응답이라 쳐 두지. 내 트레이너가 되어라.');
    set('flag:현재상호작용캐릭터', 342);
    set('cflag:342:모집상태', recruit_flags.yes);
    set('cflag:342:육성턴수합산', 'x');
    await this.recruit_end();
  }
};