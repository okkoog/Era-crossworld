const era = require('#/era-electron');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const { add_event } = require('#/event/queue');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

/**
 * @param {CharaTalk} kitaru
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (kitaru, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 56) {
    add_event(hook.hook, event_object);
    return;
  }
  if (event_object?.arg !== 'hot_line') {
    return;
  }
  const love = era.get('love:56');
  await print_event_name('핫라인 전화', kitaru);
  await era.printAndWait([
    '신이 난 ',
    kitaru.get_colored_name(),
    '에게 이끌려 구 교사 안을 이곳저곳 돌아다녔다.',
  ]);
  await kitaru.say_and_wait([callname, '!']);
  await kitaru.say_and_wait(
    '글쎄! 이 전화번호로 전화를 걸기만 하면! 운이 트이는 에너지를 얻을 수 있대요!',
  );
  await era.printAndWait([
    '가느다란 팔이라고는 믿기지 않는 힘으로 ',
    me.get_colored_name(),
    '의 팔을 붙잡는 바람에, ',
    me.get_colored_name(),
    '은(는) 도망칠 엄두도 내지 못했다.',
  ]);
  era.drawLine({ content: '잠시 후' });
  await kitaru.say_and_wait('후우……');
  await era.printAndWait([
    kitaru.get_colored_name(),
    '가 적당하다고 생각하는 장소에 도착했을 때는 이미 날이 저물어 있었다. 창가로 스며든 노을이 복도의 빛바랜 벽면에 얼룩을 남겼다.',
  ]);
  await era.printAndWait([
    '하지만 그 빛도…… 흥분으로 금방이라도 넘쳐흐를 듯한 ',
    me.get_colored_name(),
    '의 담당 우마무스메의 눈동자 속 광채에는 비할 바가 못 되었다.',
  ]);
  await kitaru.say_and_wait(['그럼, ', callname, '! 전화를 걸어볼까요!']);
  await era.printAndWait([
    '미리 선정해둔 의식의 장소, 즉 낡은 책걸상에 둘러싸인 교실 한가운데에 서서 ',
    kitaru.get_colored_name(),
    '는 전화를 들었다.',
  ]);
  let a = true,
    b = true,
    c = true;
  do {
    era.printMultiColumns(
      [
        { c: '전화를 건다', e: a },
        { c: '전화번호에 대한 자세한 내용을 묻는다', e: b },
        { c: '주변 상황을 살핀다', e: c },
      ].map((e, i) => ({
        accelerator: i + 1,
        config: { disabled: !e.e, width: 12 },
        content: e.c,
        type: 'button',
      })),
    );
    switch (await era.input()) {
      case 1:
        a = b = c = false;
        await era.printAndWait('뚜루루…… 뚜루루……');
        era.drawLine({ content: '몇 초 후' });
        break;
      case 2:
        b = false;
        await kitaru.say_and_wait('으음…… 어느 커뮤니티 게시판에서 봤거든요.');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 고개를 갸우뚱거리며 자신의 행동에 별다른 문제가 없다고 생각하는 듯했다.',
        ]);
        break;
      case 3:
        c = false;
        await era.printAndWait('지나치게 고요했다. 이따금 창밖에서 들려오는 새의 지저귐만이 정적을 깼다.');
        await era.printAndWait('해가 지려 하고 있었다……');
    }
  } while (a || b || c);

  await era.printAndWait('따르릉…… 따르릉……');
  await kitaru.say_and_wait('에엑?!');
  await kitaru.say_and_wait(['그, 저기…… ', callname, ', 방금 들으셨나요?']);
  await era.printAndWait('일반 전화기의 벨소리 같은 소리가 들려왔다.');
  await era.printAndWait(
    '소리는 옆 교실에서 들리는 듯했고, 텅 빈 교사 안에서 메아리쳤다.',
  );
  await era.printAndWait([
    me.get_colored_name(),
    '과(와) ',
    kitaru.get_colored_name(),
    '는 복도로 나와 그 교실 안을 들여다보았다.',
  ]);
  await kitaru.say_and_wait('지, 지지진짜인가요?!');
  await era.printAndWait('먼지 쌓인 교탁 위에 낡은 구식 전화기 한 대가 덩그러니 놓여 있었다.');
  await era.printAndWait(
    '붉은 본체는 광택을 띠고 있었으나, 다이얼이 있어야 할 자리에는 검은색 회전 노브가 달려 있었다.',
  );
  await era.printAndWait(
    '전화기는 아무런 선도 연결되어 있지 않은 상태로, 마치 허공에서 나타난 듯 계속해서 울리고 있었다.',
  );
  await kitaru.say_and_wait('이이이이제…… 어떡하죠?');
  await era.printAndWait(
    love >= 50
      ? [
          '오렌지색 머리의 ',
          kitaru.get_teen_sex_title(),
          '가 나무늘보처럼 ',
          me.get_colored_name(),
          '의 허리를 껴안은 채, 계속해서 소리를 내는 통신 기기를 향해 떨리는 손가락을 가리켰다.',
        ]
      : [
          '오렌지색 머리의 ',
          kitaru.get_teen_sex_title(),
          '가 겁에 질린 표정으로 ',
          me.get_colored_name(),
          '의 옷자락을 붙잡으며, 계속해서 소리를 내는 통신 기기를 향해 떨리는 손가락을 가리켰다.',
        ],
  );

  const bonus_list = [];
  let str;
  a = b = c = true;
  do {
    era.printMultiColumns(
      [
        { c: '전화를 받는다', e: a },
        { c: '후쿠키타루에게 받게 한다', e: b },
        { c: '떠난다', e: c },
      ].map((e, i) => ({
        accelerator: i + 1,
        config: { disabled: !e.e, width: 12 },
        content: e.c,
        type: 'button',
      })),
    );
    switch (await era.input()) {
      case 1:
        a = b = c = false;
        era.printButton('「여보세요?」', 1);
        era.printButton('「누구세요?」', 2);
        await era.input();
        await kitaru.say_as_unknown_and_wait('……#&A%……');
        await era.printAndWait([
          '무언가 응답하는 소리가 들린 듯했으나, ',
          me.get_colored_name(),
          '은(는) 확신할 수 없었다.',
        ]);
        era.printButton('「여보세요?」', 1);
        era.printButton('「누구세요?」', 2);
        await era.input();
        await kitaru.say_as_unknown_and_wait('……@&*#……&&￥……');
        await era.printAndWait('수화기 너머로는 잡음과 마치 테이프를 거꾸로 감는 듯한 마찰음만이 가득했다.');
        era.printButton('전화를 끊는다', 1);
        era.printButton('「여보세요?」', 2);
        str = `마치카네 후쿠키타루를 잘 부탁드립니다. ${me.actual_name} 트레이너님.`;
        if ((await era.input()) === 1) {
          await era.printAndWait([
            me.get_colored_name(),
            '이(가) 수화기를 내려놓으려던 그때, 반대편에서 기계 합성음 같은 목소리가 들려왔다……',
          ]);
        } else {
          await era.printAndWait('반대편에서 기계 합성음 같은 목소리가 들려왔다……');
        }
        era.println();
        await typing(str);
        era.println();
        await era.printAndWait('뚜…… 뚜……');
        await era.printAndWait('전화가 끊겼다……');
        bonus_list.push(201542);
        break;
      case 2:
        a = b = c = false;
        await kitaru.say_and_wait('에엑! 제가요?!!!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 부들부들 떨리는 손으로 수화기를 들었다.',
        ]);
        await kitaru.say_and_wait('……어라?!');
        await era.printAndWait([
          '전화 너머의 상대가 예상 밖이었는지, ',
          kitaru.get_colored_name(),
          '의 얼굴에 경악이 서렸다.',
        ]);
        await kitaru.say_and_wait('네…… 맞아요……');
        await kitaru.say_and_wait('……네, 트레이너 님, 제 트레이너 선생님도 계세요!');
        await kitaru.say_and_wait('……알겠습니다.');
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 전화를 끊은 ',
          kitaru.get_colored_name(),
          '의 눈시울이 붉어져 있는 것을 발견했다.',
        ]);
        await era.printAndWait([
          '이후 상대가 누구였는지 물어보았으나 끝내 대답을 듣지 못했고, ',
          kitaru.sex,
          '는 마치 그 일을 완전히 잊은 것처럼 행동했다.',
        ]);
        bonus_list.push(201222);
        break;
      case 3:
        c = false;
        await kitaru.say_and_wait('마, 맞아요…… 저도 이건 좀 그렇다고 생각해요……');
        era.drawLine({ content: '잠시 후' });
        await era.printAndWait('따르릉…… 따르릉……');
        await kitaru.say_and_wait('에에엑?! 왜 또 여기로 돌아온 거예요!!!!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 비명이 복도에 메아리쳤다.',
        ]);
    }
  } while (a || b || c);
  era.println();
  get_skills_and_print_in_event(56, bonus_list) && (await era.waitAnyKey());
  return true;
};