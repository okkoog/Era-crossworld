const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kita
 * @param {CharaTalk} me
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kita, me, hook, event_object) => {
  const cur_chara = era.get('flag:현재상호작용캐릭터');
  if (cur_chara > 0 && cur_chara !== 68) {
    add_event(hook.hook, event_object);
    return;
  }
  const event_arg = event_object?.arg;
  if (event_arg !== 'kitasan_touch') {
    return;
  }
  await print_event_name('긴급 개점 · 키타산 안마!', kita);
  await kita.say_and_wait(
    `트레이너 선생님! 키타산 안마소에 오신 것을 환영합니다!`,
  );
  await era.printAndWait(
    `트레이닝실 문을 열자, ${me.name}은(는) 기모노를 입은 ${kita.name}이 문 뒤에 무릎을 꿇고 앉아 있는 것을 발견했다. 그 뒤로 트레이닝실의 책상에는 하얀 천이 깔려 있었다.`,
  );
  await era.printAndWait(
    `이게 대체 무슨 일이야…… ${
      me.name
    }은(는) 오늘 훈련 일정도 없을 터인 ${kita.get_teen_sex_title()}를 멍하니 바라보았다.`,
  );
  await kita.say_and_wait(
    `헤헤헤~ 트레이너 선생님께서 항상 돌봐주시는 것에 대한 보답이에요. 요즘 몸 여기저기서 삐걱거리는 소리가 났잖아요?`,
  );
  await kita.say_and_wait(
    `그래서…… 음, 맞아요! 오늘은 이 키타산이 트레이너 선생님을 위해 준비한 임시 안마 서비스! 몸을 편안하게 해드릴 안마 ${
      kita.sex_code - 1 ? '여주인' : '주인장'
    } 키타산이라구요!`,
  );
  await era.printAndWait(
    '말을 마친 키타산은 이마를 바닥에 대고 정중히 절을 올렸다. 가지런히 모은 손 위로 매끄럽고 부드러운 뒷모습이 드러났다.',
  );
  await era.printAndWait(
    `${
      me.name
    }은(는) 그제야 키타산이 등 부분이 훤히 드러난 옷을 입고 있다는 것을 깨달았다. 조금만 몸을 숙여도 ${kita.get_uma_sex_title()}의 등 너머로 아찔한 광경이 보일 듯했다.`,
  );
  era.printButton('「아니, 아무리 그래도 이건 좀 이상하잖아……」', 1);
  era.printButton('「그럼 키타산에게 부탁해 볼까」', 2);
  const ret = await era.input();
  if (ret === 1) {
    await era.printAndWait(
      `${me.name}은(는) 몇 걸음 뒤로 물러나 도망치려 했으나, 그 순간 척추에서 우득 하는 소리와 함께 강렬한 통증이 느껴져 허리를 숙이며 고통스러워했다.`,
    );
    await era.printAndWait(
      `……안 되겠어, 키타산의 서비스를 받을 수밖에…… 키타산이 보내주지 않는 게 문제가 아니라, 이놈의 허리가 버텨주질 않아……`,
    );
    await era.printAndWait(`${me.name}은(는) 다시 몸을 돌려 비틀거리며 키타산에게 다가갔다.`);
    era.drawLine();
    await era.printAndWait(
      '몸 구석구석에서 삐걱거리는 소리가 났지만, 간혹 느껴지는 통증 너머로 형언할 수 없는 시원함이 밀려왔다.',
    );
    await era.printAndWait(
      `피로했던 몸이 키타산의 손길 아래 가벼워졌다. 부드러우면서도 힘 있는 안마는 마치 온몸이 치유되는 듯한 기분을 느끼게 했다. 역시 키타산이야…… 그런 감상을 남기며, 쏟아지는 졸음을 이기지 못한 ${me.name}은(는) 그대로 잠이 들고 말았다.`,
    );
  } else {
    await era.printAndWait(
      `${kita.name}은(는) 트레이너를 향해 온화한 미소를 지었다. 그녀는 네 발로 기어오듯 다가와 ${me.name}의 옷을 벗도록 유도한 뒤, 이어 붙인 책상 위에 엎드리게 했다.`,
    );
    await era.printAndWait(
      `도대체 이런 건 어디서 배운 거야……? ${
        me.name
      }은(는) 의아한 표정을 지으면서도, 자신의 등 위로 올라타 자리를 잡는 ${kita.get_teen_sex_title()}의 감촉을 느꼈다.`,
    );
    await era.printAndWait(
      `잠시 후, 키타산의 가늘지만 힘 있는 손가락이 ${me.name}의 뭉친 근육을 꾹꾹 누르기 시작했다.`,
    );
    await kita.say_and_wait(
      `트레이너 선생님의 몸, 정말 꽉 뭉쳐 있네요…… 당신은 ${kita.get_uma_sex_title()}와 다르니까, 몸을 잘 챙기셔야 해요.`,
    );
    await era.printAndWait(
      '몸 구석구석에서 삐걱거리는 소리가 났지만, 간혹 느껴지는 통증 너머로 형언할 수 없는 시원함이 밀려왔다.',
    );
    await era.printAndWait(
      `피로했던 몸이 키타산의 손길 아래 가벼워졌다. 부드러우면서도 힘 있는 안마는 마치 온몸이 치유되는 듯한 기분을 느끼게 했다. 역시 키타산이야…… 그런 감상을 남기며, 쏟아지는 졸음을 이기지 못한 ${me.name}은(는) 그대로 잠이 들고 말았다.`,
    );
  }
  era.println();
  sys_like_chara(68, 0, 100) && (await era.waitAnyKey());
};