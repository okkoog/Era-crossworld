const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const hot_spring_ticket = require('#/event/edu/edu-events-32/out-shopping-hot-spring');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');
const { get_random_value } = require('#/utils/value-utils');

const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 */
async function common(tachyon, me) {
  era.println();
  await era.printAndWait('세, 세상에「아앙~~」이라니.');
  await era.printAndWait([me.get_colored_name(), '은(는) 감동하며 햄버그 스테이크를 먹었다……']);
  era.drawLine();
  era.printButton('「…………대체 왜」', 1);
  await era.input();
  await era.printAndWait('아무 이유 없는 친절에는 반드시 꿍꿍이가 있는 법이다.');
  await era.printAndWait('하지만…… 미인계는 언제나 대처하기 어렵다.');
  await era.printAndWait([
    '특히 상대가 ',
    me.get_colored_name(),
    '에게 음식을 먹여주려고 준비하는 절세 미',
    tachyon.get_teen_sex_title(),
    '라면 말이다.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 몸에서 뿜어져 나오는 짙은 푸른 광채를 보며 어이없다는 듯 물었다.',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '흥, 내 투약 기술을 자네 따위가 간파할 수 있다면, 매일 정성을 다해 ',
    sys_get_colored_callname(32, 25),
    '을 속여서 내가 조제한 약제를 마시게 하던 보람이 없지 않겠나.',
  ]);
}

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {EventObject} event_object
 */
module.exports = async (tachyon, me, callname, hook, event_object) => {
  if (era.get('flag:현재상호작용캐릭터') !== 32) {
    add_event(hook.hook, event_object);
  }
  await print_event_name('경품 추첨과 대용 효과', tachyon);
  await tachyon.say_and_wait('정말이지…… 설마 그렇게 쉽게 폭발할 줄은 몰랐군.');
  await tachyon.say_and_wait([
    sys_get_colored_callname(32, 25),
    '도 참…… 커피 가루에 신체 능력을 높여주는 약을 좀 섞었을 뿐인데, 어째서 그렇게 화를 내는 건지……',
  ]);
  await tachyon.say_and_wait('역시 이번에는 저주를 견뎌낼 수 있는 비커를 사야 하는 걸까?');
  era.printButton('「그런 물건을 누구한테 발주한다는 거야……」', 1);
  era.printButton('「애당초 수요조차 없을 텐데……」', 2);
  await era.input();
  await tachyon.say_and_wait([
    '흥. ',
    tachyon.sex,
    '의 저주 원리가 무엇이든 간에, 결국은 외부의 힘으로 파괴하는 것일 뿐이라네.',
  ]);
  await tachyon.say_and_wait(
    '바꿔 말하면 어떤 외부의 힘으로도 파괴할 수 없을 정도로 강화하기만 하면 된다는 뜻이지.',
  );
  await tachyon.say_and_wait(
    '그래서 이번에 찾을 물건은 우주 산업 소재로 만들어져 우주의 극한 추위와 열기, 그리고 기압을 견딜 수 있는 규격의 비커라네.',
  );
  await tachyon.say_and_wait(['아, 찾았군. ', callname, ', 이것 좀 보게.']);
  era.println();
  await era.printAndWait('진짜야?! 상점가 정말 대단한걸!');
  era.drawLine({ content: '시간을 조금 거슬러 올라가서'});
  era.println();
  await era.printAndWait([
    '이날, ',
    me.get_colored_name(),
    '과(와) ',
    tachyon.get_colored_name(),
    '은 함께 상점가로 실험 도구를 사러 나갔다.',
  ]);
  await era.printAndWait('구매를 마치고 돌아가려던 찰나……');
  await say_by_passer_by_and_wait(
    '상점가 아저씨',
    '골라 골라! 상점가 실험 기구 대방출!',
  );
  await say_by_passer_by_and_wait(
    '상점가 아저씨',
    '우주용 특제 유리 비커, 우주 운석 도가니, 로켓 연료 알코올 램프를 한꺼번에 구매하시는 분께는 추첨 기회를 한 번 드립니다!',
  );
  await say_by_passer_by_and_wait(
    '상점가 아저씨',
    '특별상은 온천 여행권! 1등상은 특대 사이즈 당근 햄버그 스테이크!',
  );
  era.println();
  await era.printAndWait(
    '에에…… 저런 물건들, 첫 번째는 그렇다 쳐도 뒤의 것들을 정말 사는 사람이 있긴 한 걸까……',
  );
  era.println();
  await tachyon.say_and_wait([callname, ', 추첨하러 가세.']);
  era.printButton('「설마 전부 다 산 거야!?」', 1);
  era.printButton('「……알코올 램프에 로켓 연료를 써도 정말 문제없는 거야?」', 2);
  if ((await era.input()) === 1) {
    await tachyon.say_and_wait('그야 당연하지, 실험실에 보충해야 할 것들이 꽤 많았거든.');
    era.println();
    await era.printAndWait([tachyon.get_colored_name(), '은 당연하다는 듯이 말했다.']);
    await era.printAndWait('……도대체 이 상점가는 정체가 뭐야.');
  } else {
    await tachyon.say_and_wait([
      callname,
      ', 자네는 상술이라는 것도 모르는 건가? 당연히 그냥 이름만 붙인 거지.',
    ]);
    era.println();
    await era.printAndWait(
      '……아니, 앞의 것들이 진짜라면 마지막 것도 의심받는 게 당연하잖아.',
    );
  }
  era.printButton('「그나저나 타키온이 이런 추첨에 관심을 보이다니 별일이네.」', 1);
  await era.input();
  await tachyon.say_and_wait(
    '음…… 그렇긴 하군. 사실 추첨보다는, 이런 경품들은 돈으로 직접 살 수 있는 것들이니까…… 우리 레이스 상금이라면 부족할 것도 없지.',
  );
  era.println();
  await era.printAndWait('그렇다면……');
  era.println();
  await tachyon.say_and_wait('하지만 내 목적은 경품이 아니라 관찰이라네.');
  era.println();
  await era.printAndWait('관찰……?');
  era.println();
  await tachyon.say_and_wait(
    '지난번 새해에 했던 말 기억하나? 감정의 영향에 대해 연구해보고 싶다고 했었지……',
  );
  await tachyon.say_and_wait(
    '그렇다면 당연히 대조군이 필요하고, 가장 좋은 대조군은 내 곁에 늘 붙어있는 자네 아니겠나.',
  );
  await tachyon.say_and_wait('자네가 추첨한 뒤의 반응을 보여주게나.');
  era.println();
  await era.printAndWait(['그렇게 ', me.get_colored_name(), '은(는) 앞으로 나가 추첨통을 돌렸다……']);
  const relation = era.get('relation:32:0'),
    love = era.get('love:32'),
    event_marks = new TachyonEduMarks(),
    life_marks = new TachyonLifeMarks();
  let wait_flag = false;
  switch (get_random_value(0, 5)) {
    case 0:
      await say_by_passer_by_and_wait('점주', '꽝입니다, 티슈 한 갑.');
      await era.printAndWait('꽝이라니…… 아쉽지만 어쩔 수 없지.');
      era.println();
      if (relation <= 225) {
        await tachyon.say_and_wait('흠…… 자네 별로 반응이 없군 그래.');
        era.println();
        await era.printAndWait('아니…… 애초에 별로 기대도 안 했으니까.');
        era.println();
        await tachyon.say_and_wait(
          '기대를 안 했다는 건, 처음부터 당첨될 거라고 생각지도 않았다는 건가? ……결과를 보기도 전에 가능성을 부정하는 태도는 별로 마음에 들지 않는군.',
        );
        era.println();
        await era.printAndWait('아……');
        era.println();
        await tachyon.say_and_wait('가세, 돌아가서 실험을 계속해야겠군.');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '의 기분이 나빠졌다.']);
        await era.printAndWait([me.get_couple_title(), '은(는) 묵묵히 학원으로 돌아갔다.']);
      } else {
        await tachyon.say_and_wait('꽝이라니…… 뭐, 사실 상관없네.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '도 맞장구쳤다. 생각해보면 그저 상점가의 작은 이벤트일 뿐이었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('이런 경품 따위야 우리 돈으로 얼마든지 살 수 있지 않나.');
        await tachyon.say_and_wait(
          '게다가 티슈도 사실 꽤 쓸모가 있지…… 보게나, 뭔가를 닦을 때 쓸 수도 있고 말이야.',
        );
        await tachyon.say_and_wait(
          '그리고, 그러니까…… 그 온천 여행권 같은 건…… 당첨돼도 우린 여행 갈 시간도 없지 않나.',
        );
        era.println();
        await era.printAndWait('음? 왜 갑자기 말이 많아진 거야.');
        await tachyon.say_and_wait([
          '……그건 그렇고, ',
          callname,
          ', 이런 추첨은 가끔 상인들이 조작을 한다고들 하던데……',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 직접 추첨통을 분해해서 검사하려 들자, ',
          me.get_colored_name(),
          '은(는) 서둘러 ',
          tachyon.get_colored_name(),
          '을 끌고 상점가를 떠났다.',
        ]);
        await tachyon.say_and_wait([
          '윽…… 이거 놓게, ',
          callname,
          '! 경품 따위는 관심 없지만, 소비자로서 공정성 여부를 확인할 권리와 책임이 있단 말이네……!',
        ]);
        era.println();
        await era.printAndWait([
          '……사실 ',
          tachyon.sex,
          '는 본인이 말한 것만큼 태연하지 않은 모양이다.',
        ]);
      }
      wait_flag = sys_change_motivation(32, -1);
      break;
    case 1:
      await say_by_passer_by_and_wait('점주', '3등상, 특선 당근 한 개!');
      era.println();
      await era.printAndWait('특선이라니…… 그냥 재고 처리 같은데.');
      await era.printAndWait([me.get_colored_name(), '은(는) 어쩔 수 없다는 듯 당근 한 개를 들었다.']);
      await era.printAndWait('태클을 걸어야 할지 말아야 할지 모르겠지만, 이 경품 구성……');
      await era.printAndWait([
        '어쩐지 참가상 티슈랑 특등 온천권을 빼면 전부 ',
        tachyon.get_uma_sex_title(),
        '를 위해 설계된 것 같은 기분이 든다.',
      ]);
      era.println();
      if (relation <= 225 && event_marks.plan_b === 1) {
        if (event_marks.plan_b) {
          await tachyon.say_and_wait(
            '당근인가…… 그러고 보니 여기 경품들은 꽤 실용적이군 그래.',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 별말 없이 ',
            me.get_colored_name(),
            '의 손에서 당근을 받아 한 입 베어 물었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('나쁘지 않군, 꽤 달아.');
        } else {
          await tachyon.say_and_wait([
            '호오? ',
            callname,
            ', 지금 자네 표정이 아주 좋군.',
          ]);
          era.println();
          await era.printAndWait('에? 표정?');
          era.println();
          await tachyon.say_and_wait('허탈함, 실망감, 위로받고 싶은 마음…… 아주 복잡한 표정일세.');
          era.println();
          await era.printAndWait([
            '아…… 그러고 보니 ',
            tachyon.get_colored_name(),
            '의 감정 연구를 위해 추첨했던 거였지.',
          ]);
          await era.printAndWait(
            '……감정 연구니 뭐니, 가끔 보면 사람 마음을 모르는 로봇 같다니까.',
          );
          await era.printAndWait([
            '하지만 눈앞의 매드 사이언티스트 같은 ',
            tachyon.get_colored_name(),
            '을 생각하면……',
          ]);
          await era.printAndWait([
            '설령 ',
            tachyon.sex,
            '가 지금 당장 사람의 마음 따윈 이해 못 한다고 말해도 전혀 이상하지 않을 것 같다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '오늘 실험은 꽤 성공적이군. 앞으로도 내게 더 다양한 감정을 보여주게나, ',
            callname,
            '.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 멋대로 ',
            me.get_colored_name(),
            '의 손에서 당근을 뺏어 끝부분을 조금 베어 물었다.',
          ]);
          era.println();
          await tachyon.say_and_wait('맛있군.');
        }
      } else {
        await tachyon.say_and_wait('이런, 당근이라니 이거 괜찮지 않나?');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 다가와 ',
          me.get_colored_name(),
          '을(를) 위로했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '허울만 좋은 것들보다는 영양을 보충할 수 있는 게 훨씬 실속 있지 않겠나.',
        );
        await tachyon.say_and_wait(
          '당근이라…… 돌아가서 당근 달걀 볶음을 할까? 아니면 바로 당근 햄버그 스테이크를 만들까? 그냥 즙을 내서 마시는 것도 좋을 것 같군……',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 위로 섞인 말에 ',
          me.get_colored_name(),
          '도 그만 웃음을 터뜨리고 말았다.',
        ]);
        era.printButton('「그러려면 당근 한 개로는 부족하겠는걸.」', 1);
        era.printButton('「당근을 좀 더 사야겠어.」', 2);
        await era.input();
        await era.printAndWait([
          '그렇게 ',
          me.get_couple_title(),
          '은(는) 다시 상점가로 돌아가 저녁 식사를 만들기에 충분한 양의 당근을 샀다.',
        ]);
        await era.printAndWait('……이거 결국 상점가의 상술에 넘어간 거 아냐?');
        await era.printAndWait([
          '돌아오는 길에 ',
          me.get_colored_name(),
          '은(는) 그제야 그 사실을 깨달았다.',
        ]);
      }
      wait_flag = get_attr_and_print_in_event(
        32,
        undefined,
        0,
        JSON.parse(`{"체력":${era.get('maxbase:32:체력') * 0.2}}`),
      );
      break;
    case 2:
      await say_by_passer_by_and_wait('점주', '2등상, 산더미처럼 쌓인 당근 더미!');
      era.println();
      await era.printAndWait('우와! 엄청나다!');
      await era.printAndWait('정말 글자 그대로 작은 산처럼 쌓여 있다.');
      era.println();
      if (relation <= 225) {
        await tachyon.say_and_wait('이런, 이거 아주 좋지 않나?');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '이 기뻐하는 표정을 지었다.']);
        era.println();
        await tachyon.say_and_wait('이번 달, 아니 어쩌면 반년 동안은 당근 걱정 없겠군.');
        era.println();
        if (era.get('cflag:0:종족')) {
          await era.printAndWait([
            '아니, 아무리 ',
            tachyon.get_uma_sex_title(),
            '라도 둘이서는 다 못 먹을 텐데……',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '일반적으로 ',
            tachyon.get_uma_sex_title(),
            '에게 있어 소모하는 에너지가 많을수록 보충해야 할 에너지도 많아지는 법이라네. 즉, 많이 먹는 것=강함이라는 공식이 성립될 수 있지.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 평가하는 듯한 눈빛으로 ',
            me.get_colored_name(),
            '의 몸을 훑어보았다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '식욕을 돋우는 약인가? ……후후, 나쁘지 않은 선택이겠군.',
          );
          era.println();
          await era.printAndWait([
            '아무래도 저 당근 더미는 고스란히 ',
            me.get_colored_name(),
            ' 한 사람의 책임이 될 모양이다.',
          ]);
          era.println();
          await era.printAndWait([
            me.get_colored_name(),
            '은(는) 축 처진 어깨로 당근 수레를 끌며 ',
            tachyon.get_colored_name(),
            '과 함께 트레센 학원으로 돌아왔다.',
          ]);
        } else {
          await era.printAndWait([
            '하지만 인간으로서 당근이 이렇게 많이 필요할 리가 없는데…… ',
            me.get_colored_name(),
            '은(는) 자신의 고민을 ',
            tachyon.get_colored_name(),
            '에게 털어놓았다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '이런…… 그 말은 인간을 ',
            tachyon.get_uma_sex_title(),
            '로 변화시킬 가능성에 대해 실험해보고 싶다는 뜻인가? 그런 연구라면…… 뭐, 안 될 것도 없지……',
          ]);
          era.println();
          await me.say_and_wait('…………타키온?');
          era.println();
          await tachyon.say_and_wait([
            '후후…… 새로운 연구 주제를 제안해주었군, ',
            callname,
            '…… 이건 일단 만약을 위한 플랜 C로 두도록 하지.',
          ]);
          era.println();
          era.print([
            '매우 위험하고 불길한 명칭에 ',
            me.get_colored_name(),
            '은(는) 저도 모르게 등에 소름이 돋았다.',
          ]);
          era.printButton('「그…… 그냥 타키온 다 줄게.」', 1);
          era.printButton('「어차피 네 추첨권으로 뽑은 거니까.」', 2);
          await era.input();
          await tachyon.say_and_wait('……그렇군. 아쉽구만, 모처럼 좋은 기회였는데.');
          era.println();
          await era.printAndWait([
            '간신히 또 한 번의 위기를 넘긴 ',
            me.get_colored_name(),
            '과(와) ',
            tachyon.get_colored_name(),
            '은 당근 수레를 끌고 학원으로 돌아갔다.',
          ]);
        }
      } else {
        era.println();
        await era.printAndWait([
          '경품을 본 순간 ',
          me.get_colored_name(),
          '은(는) 이 많은 당근으로 ',
          tachyon.get_colored_name(),
          '에게 몇 끼나 해줄 수 있을지 계산하기 시작했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('정말 많군……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '도 이 산더미 같은 당근을 보며 입을 다물지 못했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('이렇게 되면…… 방법이 있지……');
        era.println();
        await era.printAndWait([tachyon.get_colored_name(), '은 깊은 생각에 잠겼다.']);
        await era.printAndWait([
          tachyon.sex,
          '에 대해 잘 아는 ',
          me.get_colored_name(),
          '은(는) 즉시 불길함을 감지했다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……공짜 당근…… 약…… 오구리 캡이나 스페셜 위크를 불러서……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 서둘러 ',
          tachyon.sex,
          '의 생각을 가로막았다.',
        ]);
        era.printButton('「그…… 그래, 당근 만찬을 만들자!」', 1);
        era.printButton('「나 최근에 당근 위주의 요리를 많이 배웠거든!」', 2);
        await era.input();
        await tachyon.say_and_wait('………………');
        era.println();
        await era.printAndWait('역시…… 안 되는 걸까?');
        era.println();
        await tachyon.say_and_wait([
          '진작 말하지 그랬나! 이런, 찌고 삶고 볶고 튀기고…… 어떻게 만들어줄 건가~~ ',
          callname,
          ', 마음껏 실력을 발휘해보게! 식재료는 부족하지 않나? 더 필요하진 않고?!',
        ]);
        era.println();
        await era.printAndWait([
          '이미 충분하다고, ',
          me.get_colored_name(),
          '은(는) 쓴웃음을 지으며 고개를 저었다.',
        ]);
        await era.printAndWait([
          '음식으로 ',
          tachyon.get_colored_name(),
          '의 주의를 돌릴 수 있어서 다행이었다…… 비록 나중에 맛이 없으면 벌로 약을 먹게 되겠지만.',
        ]);
        await era.printAndWait('하지만 나 혼자 약을 먹는 게 학원 전체에 소동이 일어나는 것보다야 낫겠지……');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 당근 수레를 끌고 흥분한 ',
          tachyon.get_colored_name(),
          '과 함께 돌아가며, 머릿속으로는 어떻게 해야 ',
          tachyon.get_colored_name(),
          '을(를) 만족시킬 수 있을지 고민했다.',
        ]);
      }
      wait_flag = get_attr_and_print_in_event(
        32,
        new Array(5).fill(5),
        0,
        JSON.parse(`{"체력":${era.get('maxbase:32:체력') * 0.2}}`),
      );
      wait_flag = sys_change_motivation(32, 1) || wait_flag;
      break;
    case 3:
      await say_by_passer_by_and_wait('점주', '1등상, 특대 당근 햄버그 스테이크!');
      era.println();
      await era.printAndWait('에……?');
      await era.printAndWait('1등상이 고작 이거야?');
      era.println();
      await era.printAndWait(
        '……그렇군. 유명 셰프가 만든 거라는데, 들어본 적 없는 이름이다.',
      );
      await era.printAndWait(
        '기분 탓일까, 왠지 2등상인 당근 한 수레보다 가치가 떨어지는 것 같은데.',
      );
      era.println();
      await tachyon.say_and_wait([
        '이런, 무려 1등상이라니…… 그런데 ',
        callname,
        ', 자네 표정이 별로 기뻐 보이지 않는군?',
      ]);
      era.printButton('「어차피 이 경품은 타키온밖에 못 먹잖아.」', 1);
      era.printButton('「왠지…… 2등상보다 못한 느낌이라서.」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '호오? ……음, 어떤 의미에서는 확실히 그렇군. 유명 셰프가 만들었든 어쨌든, 결국은 당근과 고기일 뿐이니까.',
      );
      await tachyon.say_and_wait(
        '원재료의 측면에서 보면 가치가 2등상인 당근 더미보다 낮은 건 사실이지.',
      );
      if (love >= 75) {
        await tachyon.say_and_wait('그럼, 내가 여기에 합당한 가치를 부여해주도록 하지……');
        era.println();
        await era.printAndWait([
          '말을 마치고 ',
          tachyon.get_colored_name(),
          '은 경품인 햄버그 스테이크를 받아 들었다.',
        ]);
        await era.printAndWait([
          '딱 한 입 크기로 잘라 ',
          me.get_colored_name(),
          '의 입가로 가져왔다.',
        ]);
        await era.printAndWait('어, 이건……');
        era.println();
        await tachyon.say_and_wait(
          '사랑하는 이와 함께 먹는 햄버그 스테이크…… 자, 이제 가치가 좀 올라갔나?',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '이(가) 대답할 틈도 없이, ',
          tachyon.get_colored_name(),
          '은 햄버그를 ',
          me.get_colored_name(),
          '의 입안으로 밀어 넣었다.',
        ]);
        await era.printAndWait(['다 씹고 나서야 ', tachyon.sex, '은 포크를 뗐다.']);
        era.println();
        await tachyon.say_and_wait('이제 자네 차례라네, 여보❤');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은 입을 벌리고 ',
          me.get_colored_name(),
          '이(가) 먹여주기를 기다렸다.',
        ]);
        await era.printAndWait([me.get_couple_title(), '은 햄버그 스테이크를 사이좋게 나눠 먹었다.']);
      } else if (love >= 50) {
        await tachyon.say_and_wait('……무엇보다, 자네가 만든 것보다 맛없어 보이는군.');
        era.println();
        await era.printAndWait('에……?');
        await era.printAndWait(
          '칭찬은 고맙지만, 내 요리 실력이 저런 유명 셰프를 이길 리가 없는데……',
        );
        era.println();
        await tachyon.say_and_wait(
          '후후…… 중요한 건 영양도 맛도 아니라네. 바로 만드는 이의 정성이지…… 이거, 자네가 내게 가르쳐준 것 아닌가?',
        );
        era.println();
        await era.printAndWait([
          '말을 마친 ',
          tachyon.get_colored_name(),
          '은 경품인 햄버그 스테이크를 들었다.',
        ]);
        await era.printAndWait([
          '한 입 크기로 잘라 ',
          me.get_colored_name(),
          '의 입가에 갖다 대었다.',
        ]);
        await era.printAndWait('어, 이건……');
        era.println();
        await tachyon.say_and_wait(
          '하지만 자네 말도 일리가 있군…… 비교 대상이 없으면 확신할 수 없지. 과학은 엄격해야 하니까 말이야.',
        );
        await tachyon.say_and_wait(
          '그러니…… 기술은 좋지만 사랑이 없는 요리와, 기술은 좀 처져도 사랑이 담긴 요리. 과연 어느 쪽이 더 우수한지 확인해보자고❤',
        );
        era.println();
        await era.printAndWait([
          '햄버그를 부드럽게 ',
          me.get_colored_name(),
          '의 입에 넣어준 ',
          tachyon.get_colored_name(),
          '.',
        ]);
        await era.printAndWait('본인도 작은 조각을 하나 입에 넣었다.');
        era.println();
        await tachyon.say_and_wait([
          '비교를 위해서 돌아가면 자네가 다시 한 번 만들어주게나, ',
          callname,
          '❤',
        ]);
        era.println();
        await era.printAndWait([tachyon.sex, '의 미소 앞에서.']);
        await era.printAndWait('자신이 정말로 실험용 모르모트가 된 것처럼 느껴져, 그저 하라는 대로 할 수밖에 없었다.');
      } else if (!life_marks.cook) {
        await tachyon.say_and_wait('하지만 나만 먹을 수 있다는 생각은 틀렸네.');
        era.println();
        await era.printAndWait([
          '말을 마치고 ',
          tachyon.get_colored_name(),
          '은 경품인 햄버그 스테이크를 받았다.',
        ]);
        await era.printAndWait([
          '한 입 크기로 잘라 ',
          me.get_colored_name(),
          '의 입가에 가져다 대었다.',
        ]);
        await me.say_and_wait('어, 이건……');
        era.println();
        await tachyon.say_and_wait(
          '당근의 영양 성분은 인간에게도 상당히 유익하다네. 햄버그 속의 동물성 단백질도 마찬가지고……',
        );
        await tachyon.say_and_wait([
          '오히려 인간의 소화 속도를 생각하면 육류에 대한 요구량은 ',
          tachyon.get_uma_sex_title(),
          '보다 훨씬 높지.',
        ]);
        era.println();
        await era.printAndWait('아니, 그러니까…… 이걸 나보고 먹으라는 소리야?');
        era.println();
        await tachyon.say_and_wait('쯧…… 자, 착하지. 아~~');
        await common(tachyon, me);
        await tachyon.say_and_wait(
          '남은 건…… 자네가 다 먹게나. 난 이런 것엔 별로 관심 없으니까.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '…… 왠지 모르겠지만, ',
          tachyon.sex,
          '는 식사에 관한 기준이 굉장히 낮았다.',
        ]);
        await era.printAndWait('아니, 기준이 낮다기보다는…… 아예 아무런 요구 사항이 없는 것 같았다.');
        await era.printAndWait('그저 영양만 보충할 수 있다면 무엇이든 상관없다는 식이다.');
        await era.printAndWait(
          '하지만…… 어쨌든 지금은 아직 새해 연휴니까…… 조금은 기어올라도 괜찮겠지.',
        );
        era.printButton('「……진짜 맛있는데, 타키온도 한 입 먹어볼래?」', 1);
        await era.input();
        await tachyon.say_and_wait('됐네. 사양하는 게 아니라 정말 필요 없어서 그러는 거야.');
        era.printButton(
          '「그래도 타키온 추첨권으로 뽑은 거니까, 직접 맛보지 않으면 불공평하잖아.」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait('……하긴 그렇군. 그럼 한 입만 먹어보지.');
        era.println();
        await era.printAndWait([
          '정신을 차려보니 ',
          me.get_colored_name(),
          '의 포크에 꽂혀 있던 고기는 이미 ',
          tachyon.get_colored_name(),
          '이 번개 같은 속도로 물어간 뒤였다.',
        ]);
        era.println();
        await tachyon.say_and_wait('됐네, 확실히 맛은 있군. 이 정도면 됐어.');
        era.println();
        await era.printAndWait('……뭐야, 왜 이렇게 빨라!?');
        await era.printAndWait('입을 움직이는 것조차 제대로 보이지 않았는데……!');
        await era.printAndWait([
          '……만약 ',
          tachyon.sex,
          '가 정말로 식사를 즐기기 시작한다면, 분명 식탁 위의 최고의 식탐왕이 되겠지.',
        ]);
        await era.printAndWait([
          '어째서인지 ',
          me.get_colored_name(),
          '은(는) 그런 엉뚱한 생각을 하기 시작했다.',
        ]);
      } else {
        await tachyon.say_and_wait('그럼…… 내가 여기에 합당한 가치를 부여해주지.');
        era.println();
        await era.printAndWait([
          '말을 마치고 ',
          tachyon.get_colored_name(),
          '은 경품인 햄버그 스테이크를 들었다.',
        ]);
        await era.printAndWait([
          '한 입 크기로 잘라 ',
          me.get_colored_name(),
          '의 입가로 가져갔다.',
        ]);
        await era.printAndWait('어, 이건……');
        if (relation <= 225) {
          await tachyon.say_and_wait([
            'G1 우승 ',
            tachyon.get_uma_sex_title(),
            '인 ',
            tachyon.get_colored_name(),
            '이 직접 먹여주는 햄버그라네. 이 정도면 가치가 좀 생겼나?',
          ]);
        } else {
          await tachyon.say_and_wait([
            '절세 미',
            tachyon.get_teen_sex_title(),
            '이자 G1 우승 ',
            tachyon.get_uma_sex_title(),
            '인 ',
            tachyon.get_colored_name(),
            '이 직접 먹여주는 햄버그라네. 이 한 입을 위해 자네라면 얼마를 낼 텐가?',
          ]);
        }
        era.println();
        await tachyon.say_and_wait('자, 착하지. 아~~');
        await common(tachyon, me);
        await tachyon.say_and_wait('남은 건…… 야! 내 것도 좀 남겨두게나!');
        era.println();
        await era.printAndWait([
          '슬픔과 분노를 식욕으로 승화시킨 ',
          me.get_colored_name(),
          '은(는) 필사적으로 ',
          tachyon.get_colored_name(),
          '과 남은 햄버그를 두고 쟁탈전을 벌였다.',
        ]);
        await era.printAndWait(
          '…………인정하긴 싫지만, 유명 셰프가 만든 게 내가 만든 것보다 훨씬 맛있긴 하네.',
        );
      }
      wait_flag = get_attr_and_print_in_event(
        32,
        new Array(5).fill(10),
        0,
        JSON.parse(`{"체력":${era.get('maxbase:32:체력') * 0.3}}`),
      );
      wait_flag = sys_change_motivation(32, 1) || wait_flag;
      break;
    case 4:
      await hot_spring_ticket(tachyon, me, callname, relation, love);
      wait_flag = get_attr_and_print_in_event(
        32,
        new Array(5).fill(10),
        0,
        JSON.parse(`{"체력":${era.get('maxbase:32:체력') * 0.3}}`),
      );
      wait_flag = sys_change_motivation(32, 1) || wait_flag;
  }
  wait_flag && (await era.waitAnyKey());
  return true;
};