/**
 * @file 달리 아라비안 - 招募
 * @author O口口口口口
 */
const { printAndWait, println, set } = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedRecruit = require('#/event/rec/rec-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit() {
    const god = get_chara_talk(340),
      me = get_chara_talk(0);
    await print_event_name('더 이상 그저…… 「태양」만이 아니야', god);
    await printAndWait(
      '환호성으로 가득한 입장식과 라이브 무대에서 순수한 레이스 영상만을 분리해 낸다.',
    );
    await printAndWait(
      '기록된 그 몇 분을 더욱 가속시켜, 종반부터 다시 시간이 흐르게 만든다.',
    );
    await printAndWait(
      '마지막으로 시선을 집중한 렌즈를 십여 명의 참가자 중 단 한 명의 두 발에 맞추고, 다시 확대한다.',
    );
    await me.say_and_wait(
      '……역시 완전히 다른 주법이야. 공통점이라곤 라스트 스퍼트가 엄청나다는 것뿐……',
    );
    println();
    await god.say_as_unknown_and_wait(
      '그게 꼬마들의 본능이니까 말이야~ 힘을 주는 습관, 발바닥의 유연성, 키, 체중, 그 모든 걸 마지막에 바람을 맞으며 던져버리는 거지——',
    );
    println();
    await printAndWait('아, 그러니까……');
    await printAndWait('귓가에 들려온 목소리를 따라 자연스럽게 사고를 이어간다.');
    println();
    await god.say_as_unknown_and_wait(
      '즉, 트레이너가 할 일은 그 이전부터 시작되어야 한다는 뜻이지.',
    );
    println();
    await printAndWait('무거워졌다.');
    await printAndWait(
      '어느새 몸에 익숙해진 등 뒤의 목소리가, 지금은 확실한 무게감이 되어 어깨를 짓누르고 있다……',
    );
    await printAndWait(
      '고개를 돌리고 싶었지만, 목덜미에 닿는 따스한 숨결에 몸은 이미 흥분으로 굳어버려 통나무처럼 뻣뻣해졌다.',
    );
    await printAndWait(
      '하지만, 붉은색이… 더 이상 돌릴 수 없는 시야의 끝자락에……',
    );
    println();
    await god.say_and_wait(['또 만났네~ ', sys_get_callname(340, 0), '~']);
    println();
    await printAndWait(
      '그렇게 또다시 빠져들고 말았다. 고양이 같고, 보석 같고, 우마무스메 같고, 마치 신과도 같은 그 시선 속으로……',
    );
    set('flag:현재상호작용캐릭터', 340);
    set('cflag:340:모집상태', recruit_flags.yes);
    set('cflag:340:육성턴수합산', 'x');
    await this.recruit_end();
  }
};