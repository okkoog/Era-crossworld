/**
 * @file 고돌핀 바브 - 招募
 * @author フィンランド
 */
const { get, printAndWait, set } = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const me = get_chara_talk(0);
    const god = get_chara_talk(341);
    await print_event_name('돌고 돌아, 네가 보는 모습으로', god);
    await printAndWait('새로운 하루, 새로운 시작.');
    await printAndWait([
      me.get_colored_name(),
      '이(가) 트레이닝실 문을 열자, 평소와 달리 이미 누군가가 안에 있었다.',
    ]);
    await printAndWait(
      '창밖에서 불어온 바람이 물빛의 긴 머리칼을 흩날렸고, 그녀는 창가에 기대어 포근한 아침 햇살을 받고 있었다.',
    );
    await god.say_as_unknown_and_wait([
      '어머, 오늘도 부지런하네, ',
      sys_get_colored_callname(341, 0),
      '.',
    ]);
    await printAndWait(
      '여신의 상징과도 같은 그리스식 옷을 벗고, 푸른색 트레이닝복을 입은 그녀는 지금 이 순간만큼은 평범한 우마무스메와 다를 바 없었다.',
    );
    await printAndWait([
      '하지만 물처럼 부드러운 자애와 포용을 머금은 채, 항상 미소 짓고 있는 그 두 눈 덕분에 ',
      me.get_colored_name(),
      '은(는) 단번에 그녀를 알아볼 수 있었다.',
    ]);
    await printAndWait(
      '학원에 있는 물병을 든 미소의 여신, 그리고 짙은 안개와 함께 꿈속을 찾아왔던 방문자가 눈앞의 우마무스메와 겹쳐 보였다.',
    );
    await god.say_and_wait([
      '트레이너 일은 많이 힘들지? ',
      get('flag:캐릭터성별') === 1 ? '우마무스코' : '우마무스메',
      '를 이끌고, ',
      get('flag:캐릭터성별') === 1 ? '그' : '그녀',
      '들에게 나아갈 길을 알려주는 사람으로서, 지금까지 정말 고생 많았어.',
    ]);
    await god.say_and_wait('하지만, 앞으로는 내가 지켜보고 있을 테니까.');
    await printAndWait([
      '그녀는 황금빛 아침 햇살을 벗어나 ',
      me.get_colored_name(),
      '의 앞으로 걸어왔다——마치 다른 세계에서 인간 세상으로 강림한 것처럼.',
    ]);
    await god.say_and_wait('앞으로 잘 부탁해.');
    set('flag:현재상호작용캐릭터', 341);
    set('cflag:341:모집상태', recruit_flags.yes);
    set('cflag:341:육성턴수합산', 'x');
    await this.recruit_end();
  }
};