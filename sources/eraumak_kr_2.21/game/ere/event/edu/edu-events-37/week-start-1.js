const era = require('#/era-electron');

const sys_get_chara_pseudo = require('#/system/chara/sys-get-chara-pseudo');
const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const check_aim_race = require('#/event/snippets/check-aim-race');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const simulation_game_in_event = require('#/event/snippets/simulation-game-in-event');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const { get_chara_color } = require('#/data/chara-colors');
const { buff_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status.json');
const PseudoUma = require('#/data/race/model/pseudo-uma');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');
const { skill_sets, skills_dict } = require('#/data/race/skill/skill-const');

/** @param {Record<string,function(CharaTalk,string,string,{wait:boolean},function):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (flash, your_name, callname, flags) => {
    await print_event_name('새해의 포부', flash);
    await flash.say_and_wait(
      `『Ich wünsche dir ein frohes neues Jahr!』 새해 복 많이 받으세요, ${callname}.`,
    );
    era.printButton('「새해 복 많이 받아」', 1);
    await era.input();
    await era.printAndWait(
      `새해 첫날, 트레이닝실 안에서 ${your_name}과(와) 에이신 플래시는 서로 축복을 주고받았다.`,
    );
    await flash.say_and_wait('부디 이것을 받아주세요.');
    era.printButton('「?」', 1);
    await era.input();
    await era.printAndWait(
      `이어서 ${your_name}은(는) ${flash.sex}가 등 뒤에서 정성스럽게 포장된 선물 상자를 꺼내는 것을 보았다.`,
    );
    era.printButton('「이건...」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 에이신 플래시가 건네준 선물을 받아 열어보았으나, 그 내용물에 ${your_name}은(는) 살짝 멍해지고 말았다.`,
    );
    era.printButton('「...눈알이 달린 분홍색 원형 케이크?」', 1);
    await era.input();
    await flash.say_and_wait('후후후~');
    await era.printAndWait(`에이신 플래시는 ${your_name}의 묘사에 작게 웃음을 터뜨렸다.`);
    await flash.say_and_wait(
      '객관적으로는 정확한 묘사입니다만, 이건 결코 『눈알이 달린 분홍색 원형 케이크』가 아니랍니다.',
    );
    await era.printAndWait(
      `이어서 ${flash.sex}는 손가락 하나를 치켜세우며 ${your_name}에게 이 선물의 구체적인 의미를 소개하기 시작했다.`,
    );
    await flash.say_and_wait('『Glücksbringer』, 행운의 돼지라는 뜻이에요.');
    await flash.say_and_wait(
      '독일에서는 돼지가 행운과 부를 가져다준다고 믿거든요. 그래서 새해가 되면 돼지를 본뜬 선물을 친한 지인에게 보내며 축복을 전하곤 하죠.',
    );
    era.printButton('「그렇구나, 정말 귀중한 선물이네.」(전 능력치 +10)', 1);
    era.printButton(`「그렇구나, 그래서 이게 돼지라는 거구나.」(스킬 포인트 +70)`, 2);
    const temp = await era.input();
    if (temp === 1) {
      await era.printAndWait(
        `${your_name}은(는) 선물 상자를 바라보았다. 비록 에이신 플래시의 알기 쉬운 설명을 들은 뒤였음에도, 상자 속의 분홍색 구체를 ${your_name}이(가) 알고 있는 돼지와 연결 짓기는 역시 무리가 있었다.`,
      );
      await era.printAndWait('하지만 어찌 됐든, 축하하는 마음은 무엇보다 값진 법이다.');
      await era.printAndWait(
        `그렇기에 ${your_name}은(는) 이 선물을 매우 소중하게 간직하기로 했다.`,
      );
      await flash.say_and_wait('후후, 그러고 보니...');
      await era.printAndWait(
        '바로 그때, 에이신 플래시가 갑자기 쑥스러운 듯 웃음을 지었다.',
      );
      await flash.say_and_wait(
        `사실 처음에는 실사풍으로 모델링을 설계하려 했어요. 하지만 팔콘 씨가 그렇게 만들면 결과물이 좀 무섭지 않겠느냐고 해서, 결국 ${flash.sex}의 조언에 따라 귀여운 모양을 채택하게 되었죠.`,
      );
      await flash.say_and_wait(
        '하지만 유감스럽게도 예술 방면에 있어서는 모사 외의 다른 기법에는 경험이 없어서... 여기에는 데포르메도 포함되어 있었네요.',
      );
      await flash.say_and_wait(
        '그래서 나름대로 최선을 다해 구현해 보려 했습니다만, 역시 최종적으로 나타난 결과물은 상태가 그리 좋지 못하군요.',
      );
      era.printButton('「중요한 건 겉모습이 아니라 마음이야.」', 1);
      await era.input();
      await flash.say_and_wait('!');
      await era.printAndWait(
        `${your_name}의 말을 들은 에이신 플래시는 무언가 생각에 잠긴 듯 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '...당신 말이 맞아요. 선물이라는 건 그 속에 담긴 『마음』이 중요한 것이지, 『물건』 그 자체가 아니니까요.',
      );
    } else {
      await era.printAndWait(
        `에이신 플래시의 설명은 이해하기 쉬웠지만, ${your_name}은(는) 선물 상자 속의 분홍색 구체를 보며 역시 이것을 ${your_name}이(가) 알고 있는 돼지와 연결 짓기는 힘들다고 생각했다.`,
      );
      await flash.say_and_wait('으음.');
      await era.printAndWait(
        `${your_name}의 말을 듣고 에이신 플래시의 얼굴에 조금 부끄러워하는 기색이 서렸다.`,
      );
      await flash.say_and_wait(
        `사실 처음에는 실사풍으로 모델링을 설계하려 했어요. 하지만 팔콘 씨가 그렇게 만들면 결과물이 좀 무섭지 않겠느냐고 해서, 결국 ${flash.sex}의 조언에 따라 귀여운 모양을 채택하게 되었죠.`,
      );
      await flash.say_and_wait(
        '하지만 유감스럽게도 예술 방면에 있어서는 모사 외의 다른 기법에는 경험이 없어서... 여기에는 데포르메도 포함되어 있었네요.',
      );
      await flash.say_and_wait(
        '그래서 나름대로 최선을 다해 구현해 보려 했습니다만, 지금 보니 역시 최종적으로 나타난 결과물은 좋지 못하네요...',
      );
      era.printButton('「...그렇긴 해도, 정말 맛있어!」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 안색이 어두워지는 것을 본 ${your_name}은(는) 서둘러 선물 상자에 동봉된 식기를 들고 원형 구체를 크게 한입 떠먹었다.`,
      );
      await flash.say_and_wait('!');
      await flash.say_and_wait(`${callname}...`);
      await era.printAndWait(
        `${your_name}이(가) 한입 또 한입 게걸스럽게 먹어 치우는 모습을 보자 에이신 플래시의 표정에 다시 기쁨이 서리기 시작했다.`,
      );
      await flash.say_and_wait('정말이지, 아무리 맛있어도 먹는 속도에 주의해 주세요.');
      await flash.say_and_wait(
        '하지만 기쁘네요. 직접 만든 디저트를 인정받을 수 있어서.',
      );
      await flash.say_and_wait('그 속에는... 제 마음도 듬뿍 담겨 있으니까요.');
      era.printButton('「마음?」', 1);
      await era.input();
    }
    await flash.say_and_wait(
      '올해는 제 지금까지의 인생 중에서 가장 중요한 한 해가 될지도 모르겠어요.',
    );
    await era.printAndWait(
      `에이신 플래시는 입을 열어 ${your_name}에게 이 선물에 담긴 ${flash.sex}의 진심을 설명했다.`,
    );
    await flash.say_and_wait(
      '사츠키상, 일본 더비, 국화상... 클래식 3관을 향한 도전이 코앞으로 다가왔습니다.',
    );
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}의 목소리가 점차 진지해지는 것을 느낄 수 있었다.`,
    );
    await flash.say_and_wait(
      '꿈을 이루기 위해, 부모님께서 저를 자랑스럽게 여기실 수 있도록, 저는 반드시 해내야만 합니다.',
    );
    await flash.say_and_wait('그래서...');
    await era.printAndWait(
      `하지만 ${your_name}이(가) 자세를 바로잡고 플래시의 고백을 경청하려던 찰나.`,
    );
    await era.printAndWait('다음 순간, 분위기는 다시 순식간에 누그러졌다.');
    await flash.say_and_wait(
      '이 행운의 돼지에, 당신과 함께 이 가시밭길 같은 길을 무사히 평안하게 끝까지 걸어갈 수 있기를 바라는 염원을 담았어요.',
    );
    era.printButton('「플래시...」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}에게 부드러운 미소를 지어 보이는 에이신 플래시를 보며, ${your_name}은(는) 더 이상 아무 말도 할 필요가 없다고 생각했다.`,
    );
    era.printButton('「고마워.」', 1);
    await era.input();
    await era.printAndWait(
      `그렇게 ${your_name}은(는) 정중하게 고개를 끄덕이며 그 축복을 받아들였다.`,
    );
    if (temp === 1) {
      era.println();
      flags.wait ||= get_attr_and_print_in_event(
        37,
        new Array(5).fill(10),
        0,
        JSON.parse('{"체력":400}'),
      );
    } else {
      era.println();
      flags.wait ||= get_attr_and_print_in_event(
        37,
        undefined,
        70,
        JSON.parse('{"체력":400}'),
      );
    }
    era.set('cflag:37:축제이벤트표시', 0);
  };

  handlers[47 + 13] = async (flash, your_name, callname, flags) => {
    await print_event_name('갑작스러운 재앙', flash);
    await era.printAndWait(
      '케이세이배에서 에이신 플래시는 훌륭한 퍼포먼스로 자신의 성적을 남겼다. 계획대로라면 다음 단계는 사츠키상에 참가하는 것이었다.',
    );
    await flash.say_and_wait(`......${callname}.`);
    await era.printAndWait(
      '......그랬어야 했다. 하지만 레이스 개막을 일주일 앞두고 사고가 발생하고 말았다.',
    );
    era.printButton('「열이라도 나는 거야?」', 1);
    await era.input();
    await era.printAndWait(
      `학원 보건실 안, ${your_name}은(는) 걱정스러운 표정으로 병상에 누워 있는 에이신 플래시를 바라보았다.`,
    );
    await flash.say_and_wait('......네.');
    await era.printAndWait(`${flash.sex}는 힘없이 고개를 끄덕였다.`);
    await flash.say_and_wait(
      '어제 저녁 6시에 쇼핑하러 나갔을 때, 일기예보의 강수 확률을 너무 믿고 우산을 챙기지 않은 탓에 도중에 갑작스러운 폭우를 만나 온몸이 젖은 것이 원인... 콜록, 콜록!.',
    );
    await era.printAndWait('에이신 플래시의 말은 격한 기침 소리에 가로막혔다.');
    await era.printAndWait(
      `${flash.sex}의 병세가 상당히 심각해 보였기에, 이를 본 ${your_name}은(는) 가볍게 한숨을 내쉬었다.`,
    );
    era.printButton('「아무래도... 다음 주의 사츠키상은 나가지 않는 게 좋겠어.」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 몸이 약해진 환자는 충분히 휴식을 취하며 고강도 운동을 피해야 한다는 도리를 잘 알고 있었다.`,
    );
    await flash.say_and_wait('!');
    await era.printAndWait('하지만 에이신 플래시의 생각은 달랐다.');
    await flash.say_and_wait('아뇨! 의사 선생님도 충분히 쉬기만 하면 금방 회복될 거라고 하셨어요!');
    await flash.say_and_wait(
      '게다가 사츠키상까지는 아직 7일이나 남았으니, 시간은 분명... 콜록콜록!',
    );
    era.printButton('「진정해! 플래시.」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 갑자기 흥분하며 몸을 일으키려는 에이신 플래시를 보며 서둘러 ${flash.sex}를 눕혀 쉬게 했다.`,
    );
    await flash.say_and_wait('......충분...해요......');
    await flash.say_and_wait('............');
    await era.printAndWait('에이신 플래시는 침묵 속에 다시 침대에 누웠다.');
    await era.printAndWait(
      `십여 초가 흐른 뒤, 다시 냉정을 되찾은 ${flash.sex}가 그제야 ${your_name}을(를) 쳐다보았다.`,
    );
    await flash.say_and_wait(`죄송해요, ${callname}. 제가 추태를 보였습니다.`);
    era.printButton('「흥분한다고 해결되는 건 아무것도 없어.」', 1);
    await era.input();
    await flash.say_and_wait('......네, 당신 말이 맞아요.');
    await flash.say_and_wait(
      '하지만 이미 세워둔 계획은 무너뜨릴 수 없습니다. 그러니 설령 약해진 몸을 이끌고서라도 저는 반드시 사츠키상에 나가야 해요.',
    );
    era.printButton('「그런 상태로는 완벽한 실력을 발휘하기 힘들다는 걸 너도 알잖아.」', 1);
    await era.input();
    await flash.say_and_wait(
      '......하지만 시도조차 하지 않는다면 정말로 기회는 완전히 사라져 버리고 말아요.',
    );
    await era.printAndWait(
      `에이신 플래시는 ${your_name}의 말에 담긴 속뜻을 부정하지 않았지만, 그럼에도 고집스럽게 출주를 원했다.`,
    );
    era.printButton('「.........」', 1);
    await era.input();
    await era.printAndWait(
      `그 모습을 본 ${your_name}은(는) 아무 말 없이, 그저 ${flash.sex}의 눈을 진지하게 뚫어지라 쳐다보았다.`,
    );
    await flash.say_and_wait('그러니 부탁드려요. 제가 사츠키상에 나가는 것을 허락해 주세요.');
    await flash.say_and_wait('그것은 제 꿈을 이루기 위해 반드시 해야만 하는 일입니다.');
    await era.printAndWait(
      `그 눈빛에서 ${your_name}은(는) 꺾이지 않는 고집과 무슨 일이 있어도 목표를 이루겠다는 집념을 읽어냈다.`,
    );
    era.printButton('「...알겠어. 그때 가서 정말 문제가 없다면 가도록 해.」', 1);
    await era.input();
    await era.printAndWait(`결국 ${your_name}은(는) 가볍게 한숨을 쉬며 양보를 선택했다.`);
    era.println();
    era.print([
      flash.get_colored_name(),
      '가 ',
      {
        color: buff_colors[0],
        content: '[허약]',
        title: status_desc['허약'],
      },
      ' 해졌다!',
    ]);
    era.set('status:37:허약', 1);
    sys_change_motivation(37, -1);
    flags.wait = true;
  };

  handlers[47 + 16] = async (flash, your_name, callname, flags) => {
    await print_event_name('경험담 · 1', flash);
    await era.printAndWait('일본 더비는 클래식 3관 레이스의 두 번째 관문이다.');
    await era.printAndWait(
      '이미 지나간 사츠키상과 비교하면 2400m라는 길이를 가진 이 레이스는 난이도 면에서 의심의 여지 없이 훨씬 가혹하다.',
    );
    await era.printAndWait(
      '그렇기에 에이신 플래시의 말대로 우승을 차지하기 위해서는 배의 노력이 필요했다.',
    );
    await era.printAndWait('......하지만......');
    era.printButton('「미안하지만, 네 트레이닝 계획에는 동의할 수 없어.」', 1);
    await era.input();
    await flash.say_and_wait('엣, 왜인가요?');
    await era.printAndWait(
      `사츠키상이 끝난 지 사흘째 되는 날, 에이신 플래시는 수정된 계획표를 ${your_name}에게 건넸다.`,
    );
    await era.printAndWait(
      `${your_name}은(는) 자세히 읽어본 뒤, 빽빽하게 적힌 글자들 사이에서 『고강도』라는 세 글자를 발견했다.`,
    );
    era.printButton('「일본 더비가 너에게 얼마나 중요한지는 알지만, 그렇다고 무리할 이유는 안 돼.」', 1);
    await era.input();
    await era.printAndWait(`${your_name}은(는) 짧게 자신의 의견을 말했다.`);
    await era.printAndWait('그러나 에이신 플래시는 그 말을 듣고 고개를 저었다.');
    await flash.say_and_wait(
      '아뇨, 오해하셨어요. 이건 무리가 아니라 양이 질의 변화를 끌어낸다는 이론을 바탕으로 도출된 결과입니다.',
    );
    era.printButton('「양이 질을 변화시킨다고?」', 1);
    await era.input();
    await flash.say_and_wait('네.');
    await era.printAndWait(`에이신 플래시는 손가락 하나를 펴며 ${your_name}에게 설명했다.`);
    await flash.say_and_wait(
      '오늘부터 일본 더비 개막까지 남은 시간은 39일입니다.',
    );
    await flash.say_and_wait(
      '정상적인 상황이라면 한 달 반도 채 되지 않는 이 기간 안에 실력을 끌어올려 레이스에서 더 좋은 성과를 내는 것은 거의 불가능에 가까운 일이죠.',
    );
    await flash.say_and_wait(
      '그래서 고민 끝에 저는 극단적인 해결책을 떠올렸습니다. 즉 단기간에 훈련량을 대폭 늘려 성장에 필요한 시간을 압축하는 것이죠.',
    );
    await flash.say_and_wait(
      `이를 위해 특별히 고강도 훈련으로 유명한 미호노 부르봉 양에게 조언을 구했고, ${flash.sex}의 제안에 따라 지금 당신이 보시는 이 훈련 계획을 세웠습니다.`,
    );
    era.printButton(
      '「...말하자면 신체의 잠재력을 최대한 쥐어짜는 식의 훈련 방식이라는 거네?」',
      1,
    );
    await era.input();
    await era.printAndWait(`에이신 플래시의 말에 ${your_name}은(는) 생각에 잠겼다.`);
    await era.printAndWait(
      `${flash.sex}가 말한 이 훈련 방법은 ${your_name}도 들어본 적이 있었다. 그리고 확실히 일부 ${flash.get_uma_sex_title()}들에게 기적 같은 효과를 불러온 적도 있었다.`,
    );
    await era.printAndWait(
      `하지만 사람마다 체질이 다르기에, ${your_name}은(는) 이 방식이 에이신 플래시에게도 똑같이 통할지는 알 수 없었다.`,
    );
    await era.printAndWait(
      `게다가 그런 불확실한 가능성을 위해 ${flash.sex}가 부상을 입을 수도 있다는 높은 위험을 감수해야만 한다.`,
    );
    await era.printAndWait(
      `트레이너로서 ${your_name}은(는) 도저히 그것을 받아들일 수 없었다.`,
    );
    era.printButton('「차라리 다른 방법을 찾아보는 게 어때?」', 1);
    await era.input();
    await era.printAndWait(`그리하여 ${your_name}은(는) 완곡하게 자신의 뜻을 전했다.`);
    await flash.say_and_wait(
      '하지만 이것 말고는 준비 기간 안에 제 능력을 더 효율적으로 끌어올릴 방법이 없는걸요!',
    );
    await era.printAndWait(
      `${your_name}이(가) 자신의 제안을 부정하자, 에이신 플래시의 말투에서 드물게 초조함이 묻어났다.`,
    );
    await flash.say_and_wait(
      '제발 믿어주세요. 미호노 부르봉 양과 함께 심사숙고해서 내린 결론입니다. 훈련 중의 위험이나 도중에 마주할 수 있는 상황까지 모두 고려했다고요.',
    );
    await flash.say_and_wait(
      '제 꿈을 위해, 부모님의 자랑이 되기 위해 저는 반드시 일본 더비에서 이겨야만 합니다. 이 영광을 차지해야만 해요.',
    );
    await flash.say_and_wait('그러니──');
    era.printButton('「하지만 난 그 과정에서 네 몸이 상하는 게 더 걱정돼.」', 1);
    await era.input();
    await flash.say_and_wait('!');
    era.printButton(
      '「그리고 네 부모님께서도 네가 이런 방식으로 자신을 증명하는 걸 원하시지는 않을 거야.」',
      1,
    );
    await era.input();
    await flash.say_and_wait('.........');
    await era.printAndWait(
      `뜻밖에도 에이신 플래시는 ${your_name}의 말을 듣고 크게 놀라며, 동요하는 반응을 보였다.`,
    );
    await flash.say_and_wait('............');
    await flash.say_and_wait('............');
    await flash.say_and_wait('......그렇군요......');
    await era.printAndWait(`${flash.sex}는 침묵에 빠졌다.`);
    await era.printAndWait(
      `${your_name}은(는) 에이신 플래시가 무슨 생각을 하고 있는지 알 수 없었다. 하지만 확실한 것은 지금 ${your_name}을(를) 똑바로 응시하는 그 벽안 속에서, ${your_name}은(는) 이해할 수 없으면서도 매우 복잡한 감정이 소용돌이치고 있다는 점이었다.`,
    );
    await flash.say_and_wait('......알겠습니다.');
    await era.printAndWait(
      '긴박했던 분위기가 점차 완화되었다. 몇 초 후 에이신 플래시는 시선을 돌렸다.',
    );
    await flash.say_and_wait('제가 생각이 짧았던 모양이네요. 정말 죄송합니다.');
    await era.printAndWait(
      `이어서 ${flash.sex}는 ${your_name}에게 깊이 머리 숙여 사과했다. 몸을 일으켰을 때 ${your_name}은(는) 두 사람 사이의 갈등을 빚었던 계획표가 다시 ${flash.sex}의 손에 들려 있는 것을 보았다.`,
    );
    await flash.say_and_wait('돌아가서 다시 한번 잘 생각해보도록 할게요.');
    if (era.get('status:37:허약')) {
      await era.printAndWait(
        `사츠키상 전의 그 다툼과는 달리, 이번에는 ${flash.sex}가 먼저 양보를 선택했다.`,
      );
      era.println();
      era.print([
        flash.get_colored_name(),
        '가 더 이상 ',
        {
          color: buff_colors[0],
          content: '[허약]',
          title: status_desc['허약'],
        },
        ' 하지 않게 되었다!',
      ]);
      era.set('status:37:허약', 0);
      sys_change_motivation(37, 1);
      flags.wait = true;
    }
  };

  handlers[47 + 17] = async (flash, your_name) => {
    await print_event_name('경험담 · 2', flash);
    const luna = get_chara_talk(17);
    await luna.say_and_wait(
      `그래서, 그것이 나를 찾아온 이유인가? ${sys_get_callname(17, 0)}.`,
    );
    await era.printAndWait(
      `에이신 플래시가 고강도 훈련 계획을 포기하도록 설득하는 데는 성공했지만, 동시에 ${your_name}은(는) 일본 더비가 ${flash.sex}에게 얼마나 중요한지 잘 알고 있었다.`,
    );
    await era.printAndWait(
      `${your_name}은(는) 자신만의 방식으로 ${flash.sex}를 돕기로 했다. 그리하여 심사숙고 끝에 ${your_name}은(는) 이곳을 찾아왔다.`,
    );
    era.printButton('「맞아. 네가 에이신 플래시와 모의 레이스를 해줬으면 좋겠어.」', 1);
    await era.input();
    await era.printAndWait(
      `트레센 학원 학생회실 안, 『황제』 ${luna.name}는 평온한 기색으로 ${your_name}을(를) 바라보았다.`,
    );
    await luna.say_and_wait(
      `정말 뜻밖의 요청이네. 나와 함께 달리고 싶어 하는 ${flash.get_uma_sex_title()}들은 많지만, 내가 달려주기를 바라는 트레이너는 정말 드무니.`,
    );
    era.printButton(`「${flash.sex}에게는 네 힘이 필요해.」`, 1);
    await era.input();
    await luna.say_and_wait('호오?');
    await era.printAndWait(
      `${your_name}이(가) 그렇게 말하자 ${luna.name}의 얼굴에 흥미롭다는 표정이 떠올랐다.`,
    );
    await luna.say_and_wait(
      '그건 어떤 의미지? 내가 알기로 에이신 플래시는 현재 올해의 일본 더비를 준비하고 있는 것으로 안다만.',
    );
    era.printButton('「구체적으로 말하자면...」', 1);
    await era.input();
    await era.printAndWait(
      '일본 더비에서 이기기 위해서는 자신의 능력을 끌어올리는 것 외에도 한 가지 길이 더 있었다.',
    );
    await era.printAndWait(
      `그것은 바로 이 분야의 강자와 맞붙어 그 과정에서 ${flash.sex}들이 가진 힘을 직접 체감하고, 이를 통해 관련 경험을 쌓아 실전 레이스에서 그 경험을 바탕으로 우위를 점하는 것이었다.`,
    );
    await era.printAndWait(
      `이 이론을 실전에 적용하면, 에이신 플래시가 평소 강도의 일상 훈련을 유지하면서도 적절한 상대를 찾아 모의 레이스를 치르게 한다는 결론에 도달한다.`,
    );
    await luna.say_and_wait('하하하하.');
    await era.printAndWait(
      `${your_name}의 생각을 다 들은 ${luna.name}는 크게 웃음을 터뜨렸다.`,
    );
    await luna.say_and_wait('과연, 재미있는 생각이군.');
    await luna.say_and_wait(
      '이 『무패 3관』의 손에서 일본 더비의 경험을 훔쳐 가려는 속셈이란 거지. 상당히 대담무쌍하군.',
    );
    era.printButton(`「그것이 ${flash.sex}에게 필요하기 때문이야.」`, 1);
    await era.input();
    await luna.say_and_wait('음.........');
    await era.printAndWait(
      `${luna.name}는 잠시 생각에 잠긴 듯 손가락으로 책상을 가볍게 두드렸다.`,
    );
    await luna.say_and_wait('좋다.');
    await era.printAndWait(`잠시 후 다시 입을 연 ${flash.sex}는 납득했다는 미소를 지었다.`);
    await luna.say_and_wait(
      `${sys_get_callname(
        17,
        0,
      )}, 그대가 담당 ${flash.get_uma_sex_title()}에 대해 품고 있는 생각은 충분히 잘 알겠다. 그러니 그에 상응하여 나도 한가지 제안을 하지.`,
    );
    era.printButton('「제안?」', 1);
    await era.input();
    await luna.say_and_wait(
      `내가 직접 상대를 맡는 것도 불가능하진 않지만, 에이신 플래시에게는 나보다는 좀 더 선명한 색채의 상대가 필요할지도 모르겠군.`,
    );
    await luna.say_and_wait('바로... 자유로운 바람 같은 존재 말이지.');
    era.drawLine();
    const mr_cb = get_chara_talk(57);
    await era.printAndWait([
      '그 후, ',
      your_name,
      '은(는) ',
      luna.get_colored_name(),
      '의 지시에 따라 방금 중상급 레이스가 끝난 경기장으로 향했다.',
    ]);
    await era.printAndWait(`그곳에서 ${your_name}은(는)...`);
    await mr_cb.say_as_unknown_and_wait(
      '하아~ 오늘 레이스는 정말 최고였어. 이렇게 자유로운 분위기라니, 내 마음을 억누르기가 힘들 정도야.',
    );
    era.printButton('「너는...」', 1);
    await era.input();
    await mr_cb.say_as_unknown_and_wait(
      '발걸음, 호흡, 응원... 내가 느끼고 싶어 했던 모든 것들이 이곳에 모여 있어.',
    );
    await mr_cb.say_as_unknown_and_wait(
      `그럼 당신은? 당신은 무엇 때문에 여기까지 온 거야? ${sys_get_callname(57, 0)}.`,
    );
    await era.printAndWait(
      `말을 마치며, 가늘고 긴 체구와 온몸에서 풀밭 같은 싱그러운 기운을 내뿜는 ${flash.get_uma_sex_title()}가 뒤를 돌아 ${your_name}에게 생긋 미소 지었다.`,
    );
    era.printButton('「...미스터 시비.」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}의 눈앞에 나타난 이는 다름 아닌, 매료될 만큼 자극적인 주법으로 3관의 칭호를 거머쥔 ${flash.get_uma_sex_title()}──미스터 시비였다.`,
    );
    await mr_cb.say_and_wait('뭐, 자세한 사정은 이미 전해 들었어.');
    await mr_cb.say_and_wait(
      `요컨대, 이제 곧 더비에 출주할 ${flash.get_uma_sex_title()}와 함께 달려달라는 거지?`,
    );
    era.printButton('「응.」', 1);
    await era.input();
    await mr_cb.say_and_wait('하하, 좋아.');
    await era.printAndWait('미스터 시비는 아주 시원스럽게 고개를 끄덕였다.');
    era.printButton('「...좀 더 고민해 보지 않아도 괜찮겠어?」', 1);
    await era.input();
    await mr_cb.say_and_wait('아니, 꽤 재미있을 것 같으니까.');
    await mr_cb.say_and_wait(
      '게다가 나에게 즐거움을 줄 수만 있다면 몇 번이라도 기꺼이 어울려 줄게.',
    );
    era.printButton('「정말 고마워!」', 1);
    await era.input();
    await era.printAndWait(
      `그렇게 에이신 플래시의 모의 레이스 상대가 결정되었다. 3관 ${flash.get_uma_sex_title()}인 미스터 시비가 직접 나서기로 한 것이다.`,
    );
    await era.printAndWait('이제 남은 일은 시간만 정하면 될 뿐이었다.');
  };

  handlers[47 + 18] = async (flash, your_name) => {
    const mr_cb = get_chara_talk(57);
    await print_event_name('경험담 · 3', flash);
    await flash.say_and_wait(`3관 ${flash.get_uma_sex_title()}라니...`);
    await flash.say_and_wait(
      '아뇨, 두렵지 않아요. 당신 말대로 이건 흔치 않은 기회이고, 저는 반드시 이 기회를 잡아야만 합니다.',
    );
    await flash.say_and_wait('게다가... 저도 기대되는걸요. 더 강한 상대와의 대결이.');
    era.drawLine({ content: '약속 당일' });
    await era.printAndWait(
      `${your_name}과(와) 에이신 플래시는 함께 트레센 학원의 운동장으로 향했다.`,
    );
    await mr_cb.say_and_wait('그럼 준비됐으면 시작해 볼까.');
    await flash.say_and_wait('네, 잘 부탁드립니다, 미스터 시비 양.');
    await era.printAndWait('미스터 시비는 이미 오래전부터 기다리고 있었던 모양이었다.');
    await era.printAndWait(
      `이 광경을 보며 ${your_name}은(는) 격려하듯 에이신 플래시의 어깨를 두드려 주었다.`,
    );
    era.printButton('「힘내서 가보자!」', 1);
    await era.input();
    await flash.say_and_wait('네!');
    await mr_cb.say_and_wait(
      `후후~ 좋아. 나의 3관 ${flash.get_uma_sex_title()}라는 명성에 전혀 기죽지 않았네.`,
    );
    await era.printAndWait(
      '전혀 물러서지 않고 침착하고 의연한 모습을 보이는 에이신 플래시를 보며 미스터 시비는 칭찬하듯 고개를 끄덕였다.',
    );
    await mr_cb.say_and_wait(
      '아주 즐거운 레이스가 될 것 같네. 나도 봐주지는 않을 거야.',
    );
    const pseudo = sys_get_chara_pseudo(37);
    const p = new PseudoUma(
      57,
      '미스터 시비',
      get_chara_color(57),
      2,
      new Array(5).fill(1200),
      get_random_value(2, 3),
      [0, 2, 6, 6],
      [0, 5, 6, 6],
      [6, 0],
      skill_sets[1105703].map((e) => skills_dict[e]),
    );
    p.legend = true;
    await simulation_game_in_event(pseudo, [p], race_enum.toky_yus);
    await era.printAndWait([
      mr_cb.get_colored_name(),
      '는 레이스 ',
      flash.get_uma_sex_title(),
      ' 사이에서 명성이 자자한 선배였다. 실력이든 경험이든 의심할 여지 없이, 3관왕으로서 ',
      flash.sex,
      '는 모든 면에서 ',
      flash.get_colored_name(),
      '를 압도하고 있었다.',
    ]);
    if (pseudo.rank.curr === 1) {
      await era.printAndWait(
        '그럼에도 불구하고 레이스의 승리는 결코 그런 겉으로 드러난 요소만으로 결정되는 것이 아니었다.',
      );
      await flash.say_and_wait('후우... 제가... 이겼나요?');
      era.printButton('「멋지게 해냈어!」', 1);
      await era.input();
      await era.printAndWait([
        '레이스 도중 ',
        flash.get_colored_name(),
        '는 매우 강렬한 승부욕을 보여주었다. 설령 도중에 ',
        mr_cb.get_colored_name(),
        '에게 따라잡히고 몇 번이고 추월당했음에도, ',
        flash.sex,
        '는 굴하지 않고 다시 공세를 가다듬었다. 결국 그 끈질긴 정신력이 가망 없어 보였던 결과를 뒤집고 승리를 거머쥐게 한 것이다.',
      ]);
      await mr_cb.say_and_wait('하하하하, 정말 재미있었어.');
      await era.printAndWait([
        mr_cb.get_colored_name(),
        '는 크게 웃음을 터뜨렸다. 비록 패배했지만 ',
        mr_cb.sex,
        '는 이전보다 더욱 흥분한 기색이었다.',
      ]);
    } else {
      await era.printAndWait(
        `그렇기에 플래시의 패배는 시작부터 어느 정도 ${your_name}의 예상 범위 안에 있었다.`,
      );
      await flash.say_and_wait('후우... 제가 졌네요.');
      era.printButton('「고생했어.」', 1);
      await era.input();
      await era.printAndWait([
        '하지만 레이스 도중 ',
        mr_cb.get_colored_name(),
        '에게 추월당한 뒤에도 ',
        flash.get_colored_name(),
        '가 보여준 그 끈질김, 최후의 결과가 나오기 전까지 포기하지 않고 승리를 되찾으려 했던 강인한 정신은 ',
        your_name,
        '을(를) 꽤 감동시켰다.',
      ]);
      await mr_cb.say_and_wait('하하하.');
      await era.printAndWait(`심지어 그것은 ${your_name}뿐만이 아니었을지도 모른다.`);
    }
    await mr_cb.say_and_wait('이 이기고자 하는 갈망, 정말 강렬하네.');
    await mr_cb.say_and_wait(
      `나한테까지 전해졌어... 역시 에이신 플래시, 넌 나를 정말 즐겁게 해주는구나.`,
    );
    await flash.say_and_wait('즐겁게... 인가요.');
    await flash.say_and_wait('......어찌 됐든, 오늘 도와주셔서 정말 감사합니다, 미스터 시비 양.');
    await era.printAndWait(
      `에이신 플래시는 숨을 몰아쉬며 상태를 가다듬은 뒤, ${flash.sex}는 눈앞의 미스터 시비에게 고개를 끄덕이며 감사의 뜻을 표했다.`,
    );
    await mr_cb.say_and_wait(`있잖아, 나한테 말해줄 수 있어? 왜 그렇게 승리를 갈구하는 거지?`);
    await flash.say_and_wait('엣.');
    await era.printAndWait(
      `그러나 다음 순간, 미스터 시비의 갑작스러운 질문에 ${flash.sex}는 살짝 멍해졌다.`,
    );
    await flash.say_and_wait('그건... 승리를 목적으로 하지 않는 레이스는 아무런 의미가 없으니까요.');
    await mr_cb.say_and_wait('그거 말고는?');
    await flash.say_and_wait('그거 말고는요?');
    await mr_cb.say_and_wait(`달리는 걸 좋아해? 너에게 있어서 달린다는 건 어떤 의미지?`);
    await flash.say_and_wait('............');
    await era.printAndWait('미스터 시비의 질문에 에이신 플래시는 침묵에 빠졌다.');
    await flash.say_and_wait(
      '......죄송합니다. 저는 미스터 시비 양의 질문이 어떤 의도인지 이해하지 못하겠어요.',
    );
    await era.printAndWait(`잠시 후, ${flash.sex}는 고개를 저으며 말했다.`);
    await flash.say_and_wait(
      '제게 있어 달리는 것은 달리는 것 그 자체일 뿐입니다. 목적을 달성하기 위한 수단이자 필요한 행위이죠.',
    );
    await flash.say_and_wait(
      '거기에 그 이상의 감정을 담을 필요는 없다고 생각해요. 제가 해야 할 일은 이기는 것, 계속해서 이겨 나가는 것뿐입니다. 모든 것이 끝나는 그날까지요.',
    );
    await mr_cb.say_and_wait(
      `그럼 일본 더비는? 더비 ${flash.get_uma_sex_title()}가 되고 싶어 하면서, 정작 일본 더비에 대해서는 아무런 특별한 감정도 없는 거야?`,
    );
    await flash.say_and_wait('네.');
    await mr_cb.say_and_wait('그저 이기기 위해 이긴다라, 정말 지루하네.');
    await era.printAndWait('미스터 시비는 어깨를 으쓱했다.');
    await mr_cb.say_and_wait('그런 생각에 얽매여 있으면 전혀 자유롭지 못해.');
    await flash.say_and_wait('......자유요?');
    await mr_cb.say_and_wait('일본 더비에서 이기는 비결은, 이기는 것만 생각하지 않는 거야.');
    await flash.say_and_wait('엣?');
    await mr_cb.say_and_wait(
      '단순히 이기는 것보다 더 중요한 감정을 찾아내서, 그 감정을 자신의 동력으로 삼아야 해.',
    );
    await mr_cb.say_and_wait(
      '달리고, 또 달리는 거야. 한계든, 라이벌이든, 운이든, 모든 것을 초월할 때까지.',
    );
    await flash.say_and_wait('.........');
    await mr_cb.say_and_wait('내 말이 무슨 뜻인지 알겠어?');
    await flash.say_and_wait('......저는......');
    await mr_cb.say_and_wait('뭐, 이해 못 해도 괜찮아.');
    await era.printAndWait('에이신 플래시가 미간을 찌푸리며 깊은 생각에 잠긴 모습을 보자 미스터 시비는 살짝 미소 지었다.');
    await mr_cb.say_and_wait(
      `잘 생각해보렴, 이제부터는 네 몫이니까. 일생에 단 한 번뿐인 일본 더비에서 무엇을 깨닫게 될까.`,
    );
    await mr_cb.say_and_wait(
      '아, 그래도 나중에 또 상대를 해달라고 하면 언제든 환영이야.',
    );
    await mr_cb.say_and_wait(
      '처음에 말했듯이, 나를 즐겁게 해줄 수 있는 일이라면 몇 번이라도 상관없거든.',
    );
    era.printButton('「정말 고마워, 미스터 시비.」', 1);
    await era.input();
    era.drawLine();
    await flash.say_and_wait('오늘 일은 정말 감사했습니다.');
    await era.printAndWait(
      `미스터 시비와 헤어진 뒤, 에이신 플래시는 갑자기 뒤를 돌아 ${your_name}에게 고개를 숙였다.`,
    );
    era.printButton('「내가 당연히 해야 할 일을 한 것뿐이야.」', 1);
    await era.input();
    await flash.say_and_wait('그렇기에 더욱 감사를 표해야 한다고 생각해요.');
    await era.printAndWait('에이신 플래시는 고개를 저으며 감회가 새로운 듯한 말투로 말했다.');
    await flash.say_and_wait(
      '미스터 시비 양과의 레이스를 통해 많은 새로운 것들을 접할 수 있었어요.',
    );
    await flash.say_and_wait(
      `......비록 ${flash.sex}가 마지막에 하신 말씀의 구체적인 의미는 아직 이해하지 못하겠지만요.`,
    );
    await flash.say_and_wait(
      '하지만 이미 깨달은 것들만으로도 한동안은 소화하고 배우기에 충분할 것 같습니다.',
    );
    await era.printAndWait(
      `말을 마친 뒤, ${flash.sex}는 손을 가슴에 얹고 ${your_name}에게 부드러운 미소를 지어 보였다.`,
    );
    await flash.say_and_wait(
      '당신의 도움이 없었다면 저 혼자서는 이런 훈련 방안을 떠올리지 못했을 거예요.',
    );
    era.printButton('「그게 내가 존재하는 이유니까.」', 1);
    await era.input();
    await flash.say_and_wait('!');
    await flash.say_and_wait(
      '......당신 말씀대로예요. 저의 잘못을 지적해 주고 저를 올바른 길로 이끌어 주는 분.',
    );
    await flash.say_and_wait(
      '오늘은 당신과 미스터 시비 양에게 많은 도움을 받았네요.',
    );
    await flash.say_and_wait('그러니까──');
    await era.printAndWait(
      `${your_name}은(는) 에이신 플래시가 갑자기 주먹을 불끈 쥐는 것을 보았다. ${flash.sex}의 눈빛에는 흔들림 없는 의지가 서려 있었다.`,
    );
    await flash.say_and_wait('반드시 일본 더비에서 우승해서, 모두에게 보답해야겠어요.');
  };

  handlers[47 + 21] = async (flash, your_name, callname, flags) => {
    await print_event_name('양자택일 · 1', flash);
    await flash.say_and_wait('.........');
    await flash.say_and_wait('.........');
    era.printButton('「플래시...」', 1);
    await era.input();
    await flash.say_and_wait(`......죄송해요, ${callname}. 하지만 저는 역시 받아들일 수 없습니다.`);
    await flash.say_and_wait('국화상 출주 예정을 취소한다는 그 결정 말이에요.');
    era.drawLine();
    if (check_aim_race(RaceHistory.get(37).get(), race_enum.toky_yus, 1, 1)) {
      await era.printAndWait(
        '바로 지난주, 에이신 플래시는 일본 더비의 무대에서 놀라운 성적을 거두었다.',
      );
      await era.printAndWait(
        `깊은 기쁨을 느낌과 동시에, ${flash.sex}는 국화상 레이스에서도 일본 더비의 영광을 이어가 만인이 주목하는 챔피언이 되겠노라 다짐했다.`,
      );
      await era.printAndWait('하지만...');
    }
    await era.printAndWait(
      `만사가 언제나 순조로울 수는 없는 법이다. 부상은 ${flash.get_uma_sex_title()}들에게 뗄 수 없는 주제였다.`,
    );
    await say_by_passer_by_and_wait(
      '의사',
      '통증의 원인은 다리 근육에 피로가 과하게 쌓였기 때문인 것으로 보입니다. 상태가 더 악화되는 것을 방지하기 위해 당분간은 충분히 쉬어주세요.',
    );
    await era.printAndWait(
      '사건의 발단은 일본 더비가 끝난 다음 날 트레이닝 도중, 에이신 플래시가 다리에 이상한 통증이 느껴진다고 말한 것에서 시작되었다.',
    );
    await era.printAndWait(
      `이를 걱정한 ${your_name}은(는) ${flash.sex}를 데리고 병원을 찾았고, 검사 결과 질환이 있다는 사실을 알게 되었다.`,
    );
    await flash.say_and_wait(
      '하지만 그렇다 해도 국화상 전까지 완치될 확률은 매우 높아요.',
    );
    await era.printAndWait('하지만 에이신 플래시 본인은 이 상황을 받아들이고 싶지 않은 것이 분명해 보였다.');
    await era.printAndWait(
      `${your_name}이(가) ${flash.sex}에게 『국화상에서 이기려면 고강도 훈련을 거쳐야 하는데, 지금 그렇게 하는 건 몸 상태를 더 악화시킬 뿐이다』라고 현 상황을 설명했음에도 불구하고.`,
    );
    await era.printAndWait(`${flash.sex}는 여전히 집요하게 참가를 고집했다.`);
    era.printButton('「...일단은 요즘 좀 쉬면서 마음을 편히 먹어봐.」', 1);
    await era.input();
    await era.printAndWait(
      `결국 ${flash.sex}가 더 이상 근심하지 않고 안정을 취하게 하기 위해, ${your_name}은(는) 한 가지 약속을 하기로 했다.`,
    );
    era.printButton('「만약 그때까지 완치된다면, 반드시 출주하게 해줄게.」', 1);
    await era.input();
    await flash.say_and_wait('.........');
    await flash.say_and_wait('......알겠습니다......');
    await era.printAndWait(
      `더 이상 논쟁해 보았자 의미가 없다는 것을 깨달은 것일까. ${your_name}의 말을 들은 에이신 플래시는 침울하게 고개를 끄덕였다.`,
    );
    await flash.say_and_wait('그럼... 일단은 국화상을 계획에서 제외하도록 하죠.');
    era.printButton('「.........」', 1);
    await era.input();
    await era.printAndWait(
      `불만스러운 기색이 역력한 ${flash.sex}를 보며, ${your_name}은(는) 앞으로의 나날 동안 ${flash.sex}의 상태가 어떨지 매우 걱정되었다.`,
    );
    era.println();
    era.set('status:37:염려', 1);
    flags.wait = true;
    sys_hurt_uma(37, 1);
    era.print([
      flash.get_colored_name(),
      '가 ',
      {
        color: buff_colors[0],
        content: '[염려]',
        title: status_desc['염려'],
      },
      ' 상태가 되었다!',
    ]);
  };

  handlers[47 + 23] = async (flash, your_name) => {
    await print_event_name('양자택일 · 2', flash);
    await era.printAndWait(
      '국화상을 목표로 하지 않기로 결정한 지 일주일이 지났다.',
    );
    await era.printAndWait(
      `${your_name}의 예상대로, 이 기간 동안 에이신 플래시의 컨디션은 이전보다 훨씬 떨어졌다.`,
    );
    await flash.say_and_wait('……아.');
    era.printButton('「왜 그래?」', 1);
    await era.input();
    await era.printAndWait(
      '휴게실 안에서 다음 며칠간의 일정을 확인하기 위해 노트를 꺼내던 에이신 플래시가 갑자기 작은 탄식을 내뱉었다.',
    );
    await flash.say_and_wait('......아뇨, 아무것도 아니에요.');
    await flash.say_and_wait(
      '단지 원래 계획대로라면 지금쯤 장거리 레이스 제패를 목적으로 한 트레이닝 단계에 들어갔어야 할 시기라서요.',
    );
    await flash.say_and_wait(
      '......하지만...... 역시 조금 분하네요. 국화상이 바로 코앞이었는데.',
    );
    await era.printAndWait(
      `${your_name}은(는) 이 말을 하는 에이신 플래시의 목소리가 꽤 가라앉아 있음을 느꼈다.`,
    );
    era.printButton('「당분간은 조정된 계획에 따라 움직이자.」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}의 주저를 이해할 수 있었지만, 지금은 회복에 가장 중요한 시기인 만큼 몸을 아끼는 것을 최우선으로 해야 했다.`,
    );
    await flash.say_and_wait('네……');
    await era.printAndWait(
      `……하지만 실망한 ${flash.sex}의 표정을 보며, ${your_name}도 이렇게 계속 고민만 하는 것이 해결책이 아님을 알고 있었다.`,
    );
    await era.printAndWait(
      `${your_name}은(는) 에이신 플래시가 매우 고집스러운 아이라는 것을 잘 안다. 이는 대부분의 상황에서 장점이 되기도 하지만.`,
    );
    await era.printAndWait(
      `어떻게 해야 할지 모르는 상황에 부닥치면, 이런 기질은 오히려 ${flash.sex}를 막다른 골목으로 몰아넣기 쉬웠다.`,
    );
    await era.printAndWait(
      '그리고 여기서 벗어나기 위해서는 원래 궤도대로 걸어가거나, 즉 국화상에 참가하거나.',
    );
    await era.printAndWait(
      `아니면 이 궤도에서 벗어나, 즉... ${flash.sex}가 국화상에 참가할 수 없다는 사실을 스스로 인정하게 해야 한다.`,
    );
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「그것은 제 꿈을 이루기 위해 반드시 해야만 하는 일입니다.」）',
    ]);
    await era.printAndWait(
      '（의사「상태가 더 악화되는 것을 방지하기 위해 당분간은 충분히 쉬어주세요.」）',
    );
    await era.printAndWait('……솔직히 말해, 어느 쪽도 쉬운 선택은 아니었다.');
    era.printButton('（도대체 어떻게 하는 게 좋을까.）', 1);
    await era.input();
    await era.printAndWait(`${your_name}은(는) 미간을 찌푸리며 생각에 잠겼다.`);
    await era.printAndWait(
      `트레이너로서 ${your_name}보다 더 ${flash.sex}가 꿈을 위해 흘린 땀방울과 집념을 잘 아는 사람은 없었다.`,
    );
    await era.printAndWait(
      `그렇기에 ${your_name}도 당연히 ${flash.sex}가 꿈을 이루고 돌아오기를 간절히 바라고 있었다.`,
    );
    await era.printAndWait(
      `하지만 역시 트레이너이기에, ${your_name}은(는) ${flash.sex}가 위험한 행동을 계속하도록 내버려 둘 수 없었다.`,
    );
    await era.printAndWait('단기적인 목표보다는 무사히 완주하는 것이 훨씬 중요하다.');
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `두 가지 생각이 머릿속에서 쉴 새 없이 충돌하며 ${your_name}의 마음속에 걷히지 않는 안개를 만들어냈다.`,
    );
    await era.printAndWait(`${your_name}은(는) 자신이 서둘러 돌파구를 찾아야 한다는 것을 깨달았다.`);
    await era.printAndWait(
      `${your_name}의 망설임은 에이신 플래시의 상황을 더욱 고통스럽게 만들 뿐이었다.`,
    );
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「……당신 말씀대로예요. 저의 잘못을 지적해 주고 저를 올바른 길로 이끌어 주는 분.」）',
    ]);
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `망설이던 찰나, ${your_name}은(는) 에이신 플래시가 미스터 시비와 대결한 뒤 ${your_name}에게 했던 말을 떠올렸다.`,
    );
    await era.printAndWait(
      `${flash.sex}는 ${your_name}이(가) ${flash.sex}의 레이스 인생에 있어 올바른 길잡이라고 믿고 있다.`,
    );
    await era.printAndWait(
      `실제로 ${flash.sex}는 ${your_name}의 대부분의 지시를 아무런 이의 없이 수행해 왔다.`,
    );
    await era.printAndWait(
      `그렇다면 이번에는 ${your_name}의 차례다. ${your_name}은(는) 과연 ${flash.sex}를 믿고 있는가?`,
    );
    era.printButton('「………후우.」', 1);
    await era.input();
    await era.printAndWait(
      `거기까지 생각이 미치자, ${your_name}은(는) 주머니에 손을 넣어 훈장 하나를 꺼냈다.`,
    );
    await era.printAndWait('은도금이 된 겉면이 햇빛을 받아 반짝반짝 빛났다.');
    await flash.print_and_wait([
      '（',
      flash.get_colored_name(),
      '「도와주셔서 정말 감사합니다. 부디 이것을 제 보답으로 받아주세요.」）',
    ]);
    era.printButton('「………」', 1);
    await era.input();
    await era.printAndWait(
      `처음 만났을 때의 추억이 마음속에 밀려들었고, ${your_name}은(는) 그것을 한참 동안 응시했다.`,
    );
    await era.printAndWait(
      `마침내 ${your_name}은(는) 몸을 돌려, 곁에서 계획표를 보며 고민에 빠져 있는 에이신 플래시를 바라보았다.`,
    );
    era.printButton('（이건 처음부터 고민할 거리도 아니었지.）', 1);
    await era.input();
    await era.printAndWait(`다음 순간, ${your_name}은(는) 훗 하고 웃으며 고개를 저었다.`);
    await era.printAndWait(
      `${your_name}은(는) 자신이 이미 답을 찾았다고 생각했다. 이제 남은 일은 좋은 기회를 기다리는 것뿐이었다.`,
    );
  };
};