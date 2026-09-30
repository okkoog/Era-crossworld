const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const set_luck_result = require('#/event/edu/edu-events-56/snippets/set-luck-result');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { motivation_colors } = require('#/data/color-const');

// 타로 펜듈럼 괘상 점성술 수비학
const luck_ways = ['타로', '펜듈럼', '팔괘', '점성술', '수비학', '주사위'];

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers.fortune_week = async (kitaru) => {
    if (!era.get('status:56:운세의존')) {
      return;
    }
    await print_event_name('길흉 점치기', kitaru);
    //random 0-3
    let luck;
    let luck_result = ['소길', '중길', '대길', '흉'];

    if (era.get('status:56:PTSD') === 1) {
      luck = luck_result.length - 1;
    } else {
      luck = get_random_value(0, luck_result.length - 1);
    }

    await era.printAndWait([
      kitaru.get_colored_name(),
      '가 ',
      { color: kitaru.color, content: get_random_entry(luck_ways) },
      '(으)로 점을 쳐 보았더니, 결과는 ',
      {
        color: motivation_colors[luck === 3 ? 1 : luck + 2],
        content: luck_result[luck],
      },
      ' 이었다!',
    ]);

    set_luck_result(luck);
  };

  handlers.beginning = async (kitaru, me, callname, flags) => {
    await print_event_name(['운명을 엿보는 ', kitaru.get_teen_sex_title()], kitaru);
    await kitaru.say_and_wait([callname, '! 다 끝났어요!']);
    await era.printAndWait([
      '멀지 않은 곳에서, 막 트레이닝 한 세트를 마친 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '을(를) 향해 손을 흔들고 있었다. 그 과할 정도로 열정적인 외침에 다른 ',
      kitaru.get_uma_sex_title(),
      '들의 시선이 쏠렸다.',
    ]);
    await era.printAndWait([
      '지난 며칠간 함께 지내며 느낀 바로는, 행운 아이템에 지나치게 의존하는 점을 제외하면 ',
      kitaru.sex,
      '는 쾌활하고 외향적이고...한마디로 활기찬 성격과 관련된 모든 긍정적인 단어를 다 붙여줄 수 있을 법한 아이였다.',
    ]);
    await era.printAndWait('하지만……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 몸짓에서 점술, 운명, 행운 등에 대한 지나치게 명백한 집착을 발견할 수 있었다.',
    ]);
    await era.printAndWait(
      '보통 점술이라고 하면, 대부분의 사람들은 그저 가벼운 가십거리나 농담 정도로 여기기 마련이다.',
    );
    await era.printAndWait([
      '그러나 ',
      kitaru.get_colored_name(),
      '의 생각은 달랐다. 평일의 트레이닝부터 휴일의 외출 장소까지, ',
      kitaru.sex,
      '는 ',
      kitaru.sex,
      ' 나름대로 운기를 응집해 낸 점괘를 통해 오직 자신만이 해석할 수 있는 답을 내어 결정을 내리곤 했다.',
    ]);
    await era.printAndWait([
      '어쩌면 그런 것 때문에, 어느 날 점괘에서 ',
      kitaru.sex,
      '의 운명의 사람으로 찍히게 된 것이 바로 ',
      me.get_colored_name(),
      '(이)었다.',
    ]);
    await era.printAndWait([
      kitaru.sex,
      '는 ',
      me.get_colored_name(),
      '에게 아직 서로를 맞추어 가는 중인 다른 담당 콤비들과는 차원이 다른 깊은 신뢰를 보이고 있었다.',
    ]);
    await era.printAndWait([
      '마치 ',
      kitaru.sex,
      '는 ',
      me.get_colored_name(),
      '(이)야말로 ',
      kitaru.sex,
      '가 말하는 그 시라오키 님께서 보내주신 사자라고 굳게 믿고 있는 듯했다.',
    ]);
    await era.printAndWait('이어서, 한 가지 중요한 사항을 확정해야 했다.');
    era.printButton('「마치카네 후쿠키타루 양, 장래의 목표에 대해서 말인데……」', 1);
    await era.input();
    await era.printAndWait([
      '목표, 혹은 레이스 ',
      kitaru.get_uma_sex_title(),
      '로서 달리는 목적이자 염원.',
    ]);
    await era.printAndWait('구체적으로는 클래식 3관, 춘추 연패, 나아가서는 개선문상까지.');
    await era.printAndWait(
      '혹은 좀 더 포괄적인 의미로, 단순히 승리를 위해서라거나 어떤 동경하는 이의 길을 쫓는 것.',
    );
    await era.printAndWait('아니면 더 추상적으로, 자신의 존재와 가치를 증명하는 것 등이 있겠다.');
    await kitaru.say_and_wait('목표인가요……');
    era.printButton(
      `「앞으로 어떤 레이스에 나가고 싶다거나, 어떤 ${kitaru.get_uma_sex_title()}가 되고 싶다든가 하는 것들 말이야.」`,
      1,
    );
    await era.input();
    await kitaru.say_and_wait('에헤! 전 딱히 특별한 목표 같은 건 없어요!');
    await kitaru.say_and_wait('그저 지금 같은 행운을 계속 유지할 수만 있다면 그걸로 충분하답니다!');
    await kitaru.say_and_wait('하지만……');
    await kitaru.say_and_wait('꼭 하나를 말해야 한다면…… 국화상은 어떨까요?');
    await era.printAndWait([
      '앞에 서 있는 ',
      kitaru.get_colored_name(),
      '의 말투는 장난처럼 들렸지만, 그 표정만은 진지하기 그지없었다.',
    ]);
    era.printButton('「무슨 이유라도 있어?」', 1);
    await era.input();
    await kitaru.say_and_wait('음……');
    await kitaru.say_and_wait([
      kitaru.get_colored_name(),
      '라는 이름의 ',
      kitaru.get_teen_sex_title(),
      '가! 행복을 실현하기 위해! 신이 되기 위해! 운명 속에서 반드시 거쳐야 할 길이니까요!',
    ]);
    await era.printAndWait([
      '잠시 고민하던 ',
      kitaru.get_teen_sex_title(),
      '는 특유의 과장된 말투로 ',
      me.get_colored_name(),
      '에게 대답했지만, ',
      kitaru.sex,
      '의 눈빛은 더할 나위 없이 진실해 보였다.',
    ]);
    await era.printAndWait('그나저나, 3000미터의 국화상에서 우승이라니.');
    await era.printAndWait('소위 가장 강한 우마무스메가 이긴다는 국화상.');
    await era.printAndWait([
      '그 목표는 ',
      kitaru.sex,
      '에겐 너무나 먼 이야기인 것은 아닐까.',
    ]);
    await era.printAndWait('일단은 한 걸음씩, 데뷔전 승리를 목표로 삼기로 하자!');

    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[14] = async (kitaru, me, callname, flags) => {
    await print_event_name('대국 시작', kitaru);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '에 대해 거의 아무것도 모르는 상태에서 ',
      kitaru.sex,
      '와 계약을 맺었다.',
    ]);
    await era.printAndWait([
      '다행히 시간이 흐르면서, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '에 대한 이해를 달리기 이외의 영역으로 점차 넓혀가고 있었다.',
    ]);
    await era.printAndWait([
      '예를 들어, ',
      me.get_colored_name(),
      '과(와) ',
      kitaru.get_colored_name(),
      '가 처음 만났던 그 신사는 마침 ',
      kitaru.sex,
      '의 집안에서 운영하는 곳이었다.',
    ]);
    await kitaru.say_and_wait(['앗! ', callname, ', 관심 있으신가요?']);
    await kitaru.say_and_wait('마침 오늘 저도 일을 도와드리러 갈 참이었거든요!');
    await era.printAndWait([
      '어차피 오늘은 트레이닝 일정도 없었다. ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 초대에 응해, ',
      kitaru.sex,
      '를 따라 신사 업무를 돕기로 했다.',
    ]);
    await era.printAndWait([
      '휴일임에도 불구하고, 이곳 신사는 처음에 ',
      kitaru.get_colored_name(),
      '와 만났을 때처럼 한산했다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      kitaru.get_colored_name(),
      '의 열정만큼은 전혀 꺾이지 않았다. 무녀복으로 갈아입은 ',
      kitaru.sex,
      '는 간단한 청소부터 고헤이를 접는 일까지 제법 진지하게 임하고 있었다.',
    ]);
    await era.printAndWait([
      '어느덧 황혼 무렵, 여전히 참배객은 한 명도 오지 않았지만, ',
      me.get_colored_name(),
      '의 담당은 여전히 기대에 찬 눈빛으로 참배객이 드나드는 토리이를 바라보고 있었다.',
    ]);
    await era.printAndWait('그리고…… 오늘 하루 종일 본 신직자라고는 오직――');
    era.printButton('「마치카네 후쿠키타루?」', 1);
    await era.input();
    await kitaru.say_and_wait(['넵! ', callname, '?']);
    era.printButton('「평소에도 여기엔 너 혼자뿐이야?」', 1);
    await era.input();
    await kitaru.say_and_wait('네!');
    await kitaru.say_and_wait(
      '물론 신년이나 특별한 축제 때는 사람을 고용해서 도움을 받긴 하지만요!',
    );
    await kitaru.say_and_wait('가끔은 엄마도 오시고……');
    await era.printAndWait([
      '거기까지 말하자, ',
      kitaru.get_uma_sex_title(),
      '의 가느다란 귀가 축 처졌다.',
    ]);
    await kitaru.say_and_wait('아무래도 제 기억으로는……');
    await kitaru.say_and_wait('이곳에 사람이 별로 오지 않았던 것 같네요.');
    await era.printAndWait([
      '어쩔 수 없다는 듯 ',
      me.get_colored_name(),
      '에게 어깨를 으쓱해 보였다. 아무래도 ',
      kitaru.sex,
      '는 ',
      me.get_colored_name(),
      '이(가) 이 일로 자신을 동정하지 않기를 바라는 모양이었다.',
    ]);
    await kitaru.say_and_wait(['자! ', callname, ', 억지로 절 위로하려고 애쓰지 않으셔도 돼요!']);
    await kitaru.say_and_wait('우와앗!');
    await era.printAndWait([
      '갑자기 무언가 생각난 듯, ',
      kitaru.get_colored_name(),
      '는 털이 곤두선 고양이처럼 껑충 뛰어오르며 다시 기분 좋은 표정을 되찾았다.',
    ]);
    await kitaru.say_and_wait([
      '맞아요! 그렇기에 그 당시에 여기까지 찾아와 주신 ',
      callname,
      '은 정말 대단하신 거네요!',
    ]);
    await era.printAndWait([
      '그녀가 운세에 대해 몇 마디 더 늘어놓는 사이, 어느덧 돌아가야 할 시간이 되었다.',
    ]);
    await kitaru.say_and_wait(
      '그럼! 저 뒤에서 옷 좀 갈아입고 올게요! 조금 이따 같이 트레센으로 돌아가요!',
    );
    await era.printAndWait([
      '그렇게 말하며 ',
      kitaru.get_colored_name(),
      '는 본전 옆의 작은 방으로 향했다.',
    ]);
    era.drawLine({ content: '몇 분 후'});
    await era.printAndWait('딸랑딸랑!');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 참배를 상징하는 종소리가 울리는 것을 들었다. 손님이 온 모양이다.',
    ]);
    await era.printAndWait(['하지만 ', kitaru.get_colored_name(), '는 아직 돌아오지 않았다.']);
    await era.printAndWait([
      '아무래도 이번에는 ',
      me.get_colored_name(),
      '이(가) 나가서 맞이할 수밖에 없을 듯했다.',
    ]);
    await era.printAndWait('주변을 둘러보았으나, 여전히 흔들리고 있는 구리종 외에는 사람의 흔적이 보이지 않았다.');
    await era.printAndWait('그런데 새전함의 투입구 쪽에 무언가 끼어 있는 것이 보였다.');
    era.printButton('새전함 확인', 1);
    await era.input();
    await me.say_and_wait('이상하네, 왜 이런 게……');
    await era.printAndWait('새전함 위에는 뜬금없이 누렇게 변색된 신문 조각 하나가 놓여 있었다.');
    await era.printAndWait(
      '내용은 현지 신문사가 이 신사의 일상을 기록하며 찍은 사진 몇 장인 듯했다.',
    );
    await era.printAndWait([
      '인산인해를 이룬 참배객들, 신직자들의 웃는 얼굴, 그리고 그들에게 둘러싸인…… 두 명의 ',
      kitaru.get_colored_name(),
      '?',
    ]);
    era.printButton('아니, 나이가 맞지 않아', 1);
    await era.input();
    await era.printAndWait([
      '아무래도 ',
      kitaru.get_siblings_sex_title(),
      '인 모양이다. 나이가 많은 ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 어린 ',
      kitaru.get_smaller_sibling_sex_title(),
      '의 손을 잡고 있었다.',
    ]);
    await era.printAndWait([
      '나이가 좀 더 적은 쪽은 귀 장식을 통해 ',
      kitaru.get_colored_name(),
      '임을 확실히 알 수 있었지만, ',
      kitaru.sex,
      '의 곁에 있는 사람은 대체……?',
    ]);
    era.printButton(`(${kitaru.get_bigger_sibling_sex_title()}일까?)`, 1);
    await era.input();
    await era.printAndWait([
      '하지만 지금까지 ',
      kitaru.get_colored_name(),
      '에게서 ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 있다는 이야기는 한 번도 듣지 못했다.',
    ]);
    await kitaru.say_and_wait(['어라! ', callname, ', 거기서 뭐 하세요?']);
    await era.printAndWait([
      '교복으로 갈아입은 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 뒤에 나타났다.',
    ]);
    era.printButton('마치카네 후쿠키타루에게 보여준다', 1);
    era.printButton('보여주지 않는다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '그러나 ',
        me.get_colored_name(),
        '이(가) 막 주운 신문 조각을 ',
        kitaru.sex,
        '에게 보여주려던 찰나.',
      ]);
    } else {
      await era.printAndWait([
        '그러나 ',
        me.get_colored_name(),
        '이(가) 막 주운 신문 조각을 숨기려던 찰나.',
      ]);
    }
    await era.printAndWait(['갑작스러운 돌풍이 휘몰아치며, 종이가 찢어지는 소리가 들려왔다.']);
    await era.printAndWait([
      '그 신문 조각은 ',
      me.get_colored_name(),
      '의 손에 아주 작은 파편만을 남긴 채, 나머지는 바람에 휩쓸려 공중으로 날아갔다. ',
      me.get_colored_name(),
      '과(와) ',
      kitaru.get_colored_name(),
      '의 눈앞에서 더 잘게 쪼개진 파편들은 저 멀리 사방으로 흩어져 사라졌다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[28] = async (kitaru, me, callname, flags) => {
    await print_event_name('쇼윈도 속의 데자뷔', kitaru);
    await era.printAndWait([
      '데뷔전이 마무리되며, ',
      me.get_colored_name(),
      '과(와) ',
      kitaru.get_colored_name(),
      '의 2인 3각은 정식으로 닻을 올리게 되었다.',
    ]);
    await era.printAndWait([
      '승리의 보상으로, ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '와 함께 상점가에 가서 새로운 행운 아이템을 사는 것을 도와주기로 약속했다.',
    ]);
    await era.printAndWait([
      '벌써 몇 번째인지 모를 환호성 속에 ',
      kitaru.get_colored_name(),
      '를 향해 달려갔다. 가방 안에 든 값비싼 수정구슬의 무게만으로도 숨이 턱 밑까지 차올랐다.',
    ]);
    await era.printAndWait([
      '짐을 한 보따리 들고 벽에 기댄 채 땀을 흘리던 ',
      me.get_colored_name(),
      '은(는), 문득 ',
      kitaru.get_colored_name(),
      '의 다음 부름이 들려오지 않는다는 사실을 깨달았다.',
    ]);
    era.printButton('고개를 든다', 1);
    await era.input();
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 마치 명상이라도 하듯 스포츠용품점의 쇼윈도 앞에 멍하니 서 있었다. 가끔 흔들리는 꼬리만이 ',
      kitaru.sex,
      '가 조각상 같은 무생물이 아님을 증명하고 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '의 시선을 따라가 보았다.',
    ]);
    await era.printAndWait('스포츠용품점의 쇼윈도 안, 텔레비전에서는 영상이 흘러나오고 있었다.');
    await era.printAndWait([
      '트레이너인 ',
      me.get_colored_name(),
      '은(는) 그것이 역사적으로 유명한 도주 ',
      kitaru.get_uma_sex_title(),
      '의 도주 하이라이트 영상임을 즉시 알아차렸다.',
    ]);
    era.printButton('「마치카네 후쿠키타루?」', 1);
    await era.input();
    await kitaru.say_and_wait('……');
    era.printButton('「마치카네 후쿠키타루! 괜찮아?」', 1);
    await era.input();
    await kitaru.say_and_wait(['아! 아뇨, 아무것도 아니에요, ', callname, '!']);
    await kitaru.say_and_wait('에헤헤! 조금 너무 몰입해서 봤나 봐요!');
    await kitaru.say_and_wait('자, 다음 파워 스폿으로 가요!');
    await era.printAndWait([
      '아니었다. ',
      me.get_colored_name(),
      '은(는) 느낄 수 있었다. ',
      kitaru.get_colored_name(),
      '의 화제 전환은 너무나 작위적이었다. 게다가……',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 주력 주법이 선입이라는 점을 차치하더라도, 그 표정은 다른 ',
      kitaru.get_uma_sex_title(),
      '들이 타인의 질주를 보며 느끼는 순수한 공감이나 흥분과는 거리가 멀었다. 그것은 오히려……',
    ]);
    await era.printAndWait('멍한 표정? 아니, 오히려 지나칠 정도로 완벽하게 고정된 미소에 가까웠다.');
    era.printButton('「방금 무슨 일 있었어?」', 1);
    era.printButton('「왜 그래?」', 2);
    await era.input();
    await kitaru.say_and_wait('……저기');
    await kitaru.say_and_wait('그냥 좀 데자뷔 같은 게 느껴져서요!');
    era.printButton('「데자뷔?」', 1);
    await era.input();
    await kitaru.say_and_wait('그게…… 그러니까……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '의 눈빛이 흔들리는 것을 보았다. 그녀는 머리를 몇 번 가볍게 흔들었다.',
    ]);
    await kitaru.say_and_wait([
      '제 ',
      kitaru.get_bigger_sibling_sex_title(),
      '가 생각났거든요! 예전에 같이 병주했을 때, 항상 저 텔레비전 속 도주 우마무스메들처럼 저를 아주 멀리 따돌리곤 했었죠!',
    ]);
    era.printButton(
      `「그 ${kitaru.get_bigger_sibling_sex_title()}분은 아주 훌륭한 ${kitaru.get_uma_sex_title()}였나 보구나?」`,
      1,
    );
    await era.input();
    await kitaru.say_and_wait('네…… 다만……');
    await era.printAndWait([
      '거의 목구멍에서 억지로 짜낸 듯한 대답이었다. ',
      kitaru.get_colored_name(),
      '의 뒤로 젖혀진 귀는 마치 머릿속으로 파고들 듯 잔뜩 긴장해 있었다.',
    ]);
    await kitaru.say_and_wait('돌아가셨어요……');
    await kitaru.say_and_wait('맞아요…… 돌아가셨거든요……');
    era.printButton('「미안해」', 1);
    await era.input();
    await kitaru.say_and_wait('앗! 아뇨! 사과해야 할 건 저인걸요. 또 이런 이상한 소리를 하고.');
    await kitaru.say_and_wait([
      callname,
      '과 같이 있으면 자꾸 저도 모르게 마음이 풀어져서 실수를 하게 되네요!',
    ]);
    await kitaru.say_and_wait('음……');
    await era.printAndWait([
      '그 후 ',
      kitaru.get_colored_name(),
      '는 서둘러 핑계를 대며 이번 축하 활동을 마무리했다. ',
      me.get_colored_name(),
      '은(는) 홀로 구매한 행운 아이템 더미를 들고 자신의 사무실로 돌아왔다.',
    ]);
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    flags.wait_flag =
      get_skills_and_print_in_event(56, [200791]) || flags.wait_flag;
  };

  handlers[35] = async (kitaru, me, callname, flags) => {
    const tannhauser = get_chara_talk(62);
    await print_event_name('바람같이 청소', kitaru);
    await era.printAndWait([
      '평소와 다름없이 ',
      me.get_colored_name(),
      '은(는) 사무실로 향하고 있었다.',
    ]);
    await era.printAndWait('「우당탕탕!!!」');
    await era.printAndWait([
      kitaru.get_uma_sex_title(),
      '의 기숙사를 지나던 찰나, 거대한 굉음이 들려왔다.',
    ]);
    era.printButton('소리가 난 방향을 가늠해 본다', 1);
    era.printButton('무시한다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '의 청력이 저 ',
        kitaru.get_uma_sex_title(),
        '들에게 비할 바는 아니었으나, 이 고요한 아침에 갑작스러운 소음의 발원지를 찾아내는 것은 ',
        me.get_colored_name(),
        '에게 그리 어려운 일은 아니었다.',
      ]);
      await tannhauser.say_as_unknown_and_wait('으으……');
      await era.printAndWait([
        '어느 ',
        kitaru.get_uma_sex_title(),
        '가 내뱉는 신음 소리가 들렸다.',
      ]);
      await kitaru.say_as_unknown_and_wait('아아악! 정말 죄송해요!');
      await era.printAndWait([
        '그리고, 의심할 여지 없는 ',
        kitaru.get_colored_name(),
        '의 목소리였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) ',
        kitaru.sex,
        '에게 전화를 걸어야 할지 고민하던 찰나, 기숙사 입구에서 익숙한 모습이 튀어나왔다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 분명 자신의 사고뭉치 담당이 또 무슨 일을 저지른 것이 틀림없으리라 짐작했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 이 일이 학생회 아이들에게 발각되기 전에 먼저 자리를 뜨고자 발걸음을 재촉했다.',
      ]);
      await era.printAndWait([
        '하지만 이내 ',
        me.get_colored_name(),
        '은(는) 뒤에서 누군가 옷자락을 붙잡는 것을 느꼈다.',
      ]);
    }
    await kitaru.say_and_wait('아하하!');
    await kitaru.say_and_wait('다행이다!');
    await kitaru.say_and_wait([callname, '!']);
    await me.say_and_wait('하아……');
    era.printButton('「도움이 필요해?」', 1);
    era.printButton('「또 사고 쳤어?」', 2);
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait('오오! 역시 오늘은 대길이네요!');
      await kitaru.say_and_wait([
        '곤경에 처하자마자 나타나 주신 자비로운 ',
        callname,
        '!',
      ]);
    } else {
      await kitaru.say_and_wait('우와! 역시 제 운명의 사람이십니다! 단번에 맞히셨어요!');
      await kitaru.say_and_wait([
        '그래도 도와주실 거죠? 우린 영원히 함께할 운명의 관계잖아요!',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 고집에 못 이겨, ',
        me.get_colored_name(),
        '은(는) 결국 고개를 끄덕였다.',
      ]);
    }
    await kitaru.say_and_wait('저기…… 일단 이쪽으로 오세요!');
    await era.printAndWait([
      '경비원의 의아한 시선을 뒤로한 채, ',
      kitaru.sex,
      '는 막무가내로 ',
      me.get_colored_name(),
      '을(를) 기숙사 안으로 끌고 들어갔다!',
    ]);
    await era.printAndWait([
      '문을 열자마자 ',
      me.get_colored_name(),
      '의 시야에 들어온 것은 잡동사니로 이루어진 거대한 쓰레기산이었다.',
    ]);
    await tannhauser.say_and_wait('살려……');
    if (era.get('cflag:62:모집상태') === 1) {
      await tannhauser.say_and_wait([
        sys_get_colored_callname(62, 0),
        '…… 살려주세요!',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 또 다른 담당이 그 아래 깔려 있었다.',
      ]);
    } else {
      await era.printAndWait([kitaru.sex, '의 룸메이트가 그 아래 깔려 있었다.']);
    }
    era.printButton('「이 쓰레기산은 뭐야?」', 1);
    await era.input();
    await kitaru.say_and_wait('쓰레기산이라니요!');
    await kitaru.say_and_wait('이건 제가 지금까지 모아온 행운 아이템들이라고요!');
    await kitaru.say_and_wait(
      '이 기세로 계속 늘어나다간, 언젠가 트레센 학원이 통째로 집어삼켜질지도 몰라요!',
    );
    await kitaru.say_and_wait('아, 방금 한 말은 점괘가 아니라 제 추측이에요.');
    await kitaru.say_and_wait([
      '자 자! ',
      callname,
      ', 이걸 어디다 두면 좋을지 같이 생각 좀 해봐요!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 이름을 아는 것부터 모르는 것까지 온갖 잡동사니들이 이 거대한 산에 섞여 있었다. 심지어는 최근에 산 것이 분명해 보이는 기념품들까지.',
    ]);
    await era.printAndWait('오히려 지금까지 무너지지 않았던 게 대길 중의 대길이었다.');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '라는 이름의 ',
      kitaru.get_uma_sex_title(),
      '는, 의외로 아주 심각한 저장 강박증을 가지고 있었다.',
    ]);
    await era.printAndWait('역시 답은 하나뿐이었다.');
    era.printButton('「그냥 버리자……」', 1);
    await era.input();
    await kitaru.say_and_wait('네?');
    await kitaru.say_and_wait('에에에에엑!!!!!!');
    era.drawLine({ content: '트레센 학원 기숙사 뒤편 소각장'});
    await era.printAndWait([
      '산더미처럼 쌓인 행운 아이템들을 마주하며, ',
      me.get_colored_name(),
      '은(는) 무엇부터 처리하기로 했을까?',
    ]);
    let a = true,
      b = true,
      c = true;
    do {
      era.printMultiColumns(
        [
          { c: '지극히 평범해 보이는 병뚜껑', e: a },
          { c: '파손이 심각한 인형', e: b },
          { c: '【대원성취】라고 적힌 부적', e: c },
        ].map((e, i) => ({
          accelerator: i + 1,
          config: { disabled: !e.e },
          content: e.c,
          type: 'button',
        })),
      );
      switch (await era.input()) {
        case 1:
          a = false;
          await kitaru.say_and_wait('이건, 이건 제가 처음으로 한 번에 돌려 딴 병뚜껑이란 말이에요!');
          await kitaru.say_and_wait('제발요! 절대 안 돼요!');
          break;
        case 2:
          b = false;
          await kitaru.say_and_wait(
            '으앙! 그건 제가 세발자전거에 치일 뻔했을 때 절 대신해 다쳐준 인형이라니까요!',
          );
          await kitaru.say_and_wait('이걸 버리면 저한테 커다란 액운이 닥칠 거예요!');
          break;
        case 3:
          c = false;
          await kitaru.say_and_wait(
            '앗! 그건 제가 초등학생 때! 저희 구기 대항전 팀을 8강까지 이끌어준 부적이에요!',
          );
          await kitaru.say_and_wait('이것부터 버리는 건 절대 용납 못 해요!');
      }
    } while (a || b || c);
    await kitaru.say_and_wait('으으! 역시 어느 것 하나 버릴 수 없어요!');
    await kitaru.say_and_wait([
      '간곡히 부탁드릴게요, ',
      callname,
      '! 제발 버리지 말아 주세요! 뭐든지 다 할 테니까요!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 필사적으로 손을 비비며 애원하는 ',
      kitaru.get_colored_name(),
      '를 소각장 앞에서 끌어낼 수밖에 없었다.',
    ]);
    await era.printAndWait('이 물건들을 어떻게 처리해야 할지 곰곰이 따져보아야 할 듯했다.');
    flags.wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 30);
  };

  handlers[38] = async (kitaru, me, callname, flags) => {
    await print_event_name('수용! 행운 아이템', kitaru);
    await kitaru.say_and_wait([callname, ', 정말 다행이에요!']);
    await era.printAndWait([
      '심사숙고 끝에, ',
      me.get_colored_name(),
      '은(는) 실현 가능한 해결책 하나를 떠올렸다――',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 물건들을 잠시 ',
      me.get_colored_name(),
      '의 집에 맡아두기로 한 것이다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.get_colored_name(),
      '가 온갖 기상천외한 행운 아이템들로 ',
      me.get_colored_name(),
      '의 집 구석구석을 하나씩 채워가는 모습을 지켜보았다.',
    ]);
    await era.printAndWait([
      '그 비정상적일 정도의 들뜬 모습은 ',
      kitaru.get_uma_sex_title(),
      '보다는, 자신의 영역을 표시하는 작은 동물처럼 보였다.',
    ]);
    await kitaru.say_and_wait('에헤헤! 정말 면목이 없네요!');
    await kitaru.say_and_wait(
      '행운 아이템을 모으는 건 제가 아주…… 예전부터 지켜온 습관이라서요!!!',
    );
    await kitaru.say_and_wait('제가 신이 되기 전까지는! 계속 고집하게 될 것 같아요!');
    await era.printAndWait([
      kitaru.sex,
      '는 잠시 말을 고르는 듯하더니, 원래 말하려던 특정 시점을 아무렇지 않게 건너뛰며 대화를 이어갔다.',
    ]);
    await era.printAndWait('……데뷔전 때와 마찬가지의 위화감이었다.');
    await kitaru.say_and_wait([
      '그나저나, 앞으로도 자주 ',
      callname,
      '의 집에 구경하러 와도 될까요?',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 집 거실에서 기뻐 어쩔 줄 모르는 ',
      kitaru.get_colored_name(),
      '를 보며, 어쩔 수 없다는 듯 고개를 끄덕였다.',
    ]);
    await kitaru.say_and_wait('에이―― 그런 표정 짓지 말아주세요!');
    await kitaru.say_and_wait([
      '자! 그럼 ',
      callname,
      ', 이 후쿠짱에게 부탁하고 싶은 건 없으신가요! 힘이 닿는 데까지 도와드릴게요!',
    ]);
    await era.printAndWait([
      '자신의 행동이 ',
      me.get_colored_name(),
      '에게 적지 않은 폐를 끼쳤다는 것을 자각하고 있는 듯, 오렌지색 머리카락의 ',
      kitaru.get_teen_sex_title(),
      '는 ',
      kitaru.sex,
      '의 트레이드 마크와도 같은 동작인 하얗고 매끄러운 두 팔을 천장을 향해 쭉 뻗는 자세를 취하며 ',
      me.get_colored_name(),
      '의 대답을 기다렸다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '에게 부탁할 만한 일이 있을까?',
    ]);
    await era.printAndWait([
      '음…… ',
      kitaru.sex,
      '가 더 이상 사고만 치지 않아도 가장 큰 도움이 될 것 같았다.',
    ]);
    await era.printAndWait([
      '하지만 이것은 ',
      kitaru.sex,
      '에 대해 더 깊이 알아갈 좋은 기회일지도 몰랐다.',
    ]);
    await era.printAndWait([
      '예를 들어, ',
      kitaru.sex,
      '가 자주 언급하는 시라오키 님이라는 존재는 ',
      kitaru.get_colored_name(),
      '에게 있어 단순한 신앙 이상의 의미를 지닌 것처럼 보였다.',
    ]);
    await kitaru.say_and_wait('앗! 시라오키 님에 대해 더 알고 싶으시다고요!');
    await kitaru.say_and_wait('으음……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '가 무언가 떠올린 듯 미간을 찌푸리며 호흡이 다소 거칠어지는 것을 보았다.',
    ]);
    era.printButton('「정말 내키지 않는다면……」', 1);
    await era.input();
    await kitaru.say_and_wait('아니요, 아니요, 아니요!');
    await kitaru.say_and_wait('그냥 오늘은 아직 대길이 아니라서요! 먼저 준비할 게 좀 필요할 것 같아요!');
    flags.wait_flag = get_attr_and_print_in_event(56, [0, 0, 0, 0, 0], 30);
  };
};