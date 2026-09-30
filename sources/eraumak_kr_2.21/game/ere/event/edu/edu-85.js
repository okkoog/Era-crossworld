/**
 * @file 다이이치 루비 - 育成
 * @author 梦露
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const Edu85CrazyFanEnd = require('#/event/edu/edu-events-85/crazy-fan-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');

const RubyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-85');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} */
const week_start_handlers = {};

require('#/event/edu/edu-events-85/week-start')(week_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean},function)>} */
const week_end_handlers = {};

require('#/event/edu/edu-events-85/week-end')(week_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,RaceStartParams)>} */
const race_start_handlers = {};

require('#/event/edu/edu-events-85/race-start')(race_start_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,RaceEndParams)>} */
const race_end_handlers = {};

require('#/event/edu/edu-events-85/race-end')(race_end_handlers);

/** @type {Record<string,function(CharaTalk,CharaTalk,string,string,{wait_flag:boolean})>} */
const out_church_handlers = {};

out_church_handlers[47 + 1] = async (ruby, me, r_call_m, m_call_r, flags) => {
  await print_event_name('새해 참배', ruby);
  await ruby.say_and_wait('새해 복 많이 받으세요.');
  era.printButton('「새해 복 많이 받아.」', 1);
  await era.input();
  await ruby.say_and_wait('트레이너님 덕분에 무사히 새로운 한 해를 맞이할 수 있었습니다.');
  await ruby.say_and_wait(
    '이제 어머님께서 승리하셨던 레이스와, 미처 승리하지 못하셨던 레이스에서 만족스러운 결과를 남겨야겠지요……',
  );
  await me.say_and_wait('어머님의 한을 풀어드리겠다는 거구나.', true);
  await ruby.say_and_wait('지금은 다리의 불안 요소가 완전히 해소되었다고 단언할 수 있습니다.');
  await ruby.say_and_wait('벚꽃상의 전초전에 출주하여, 당신에게 그것을 증명해 보이고 싶습니다.');
  await era.printAndWait(
    '하고 싶었던 말을 뺏기고 말았다…… 하지만 담당 우마무스메와 목표가 같다는 건 좋은 일이다.',
  );
  await ruby.say_and_wait('올해도 잘 부탁드립니다.');
  era.printButton('「나만 믿으라고.」', 1);
  await era.input();
  await ruby.say_and_wait('네.');
  era.printButton(
    `「그나저나, ${sys_get_callname(0, 85)}. 이따가 다른 분들께도 인사하러 가야 하지 않아?」`,
    1,
  );
  await era.input();
  await era.printAndWait(
    '정재계에 명성을 떨치는 명문 일족의 말예인 만큼, 연초에는 무척 바쁠 것이라 짐작하기 어렵지 않다.',
  );
  await ruby.say_and_wait('아닙니다.');
  await ruby.say_and_wait('가문의 어른들께는 이미 인사를 드렸습니다.');
  await ruby.say_and_wait('정말로 필요한 일이 생긴다면, 다시 연락이 오겠지요.');
  await era.printAndWait('그 말인즉슨, 지금은 시간이 아주 널널하다는 뜻이다.');
  await ruby.say_and_wait('그러면, 저는 자율 연습을 하러 가보겠습니다.');
  await ruby.say_and_wait('인사는 여기까지 드렸으니, 이만 실례하겠습니다.');
  await era.printAndWait('잠깐만——');
  await era.printAndWait([
    '새해 벽두부터 담당 우마무스메가 잠시라도 쉬어갔으면 하는 마음에, ',
    me.get_colored_name(),
    '이(가) 떠올린 생각은……',
  ]);
  era.printButton('「신춘 휘호 쓰기.」 (스피드 +20)', 1);
  era.printButton('「명절 음식은 좀 먹었어?」 (스태미나 +20)', 2);
  era.printButton('「우리만의 파티 타임을 시작하자!」 (스킬 포인트 +20)', 3);
  const attr_change = new Array(5).fill(0);
  let pt_change = 0;
  switch (await era.input()) {
    case 1:
      await era.printAndWait([
        '갑자기 붓글씨 이야기를 꺼낸 것은, ',
        me.get_colored_name(),
        '이(가) 새해에 신춘 휘호를 붙이는 풍습을 꽤 좋아하기 때문이었다.',
      ]);
      await ruby.say_and_wait('의외군요……');
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 글씨체는 고상하고 정갈하여, 무척 아름답다고 할 수 있었다.',
      ]);
      await era.printAndWait([
        '하지만 무려 세계 최고의 반열에 드는 서예가에게 사사한 ',
        me.get_colored_name(),
        '의 필체와 비교하면, 아무래도 조금 빛이 바래 보였다.',
      ]);
      await ruby.say_and_wait([r_call_m, ', 저를 지도해 주십시오.']);
      await era.printAndWait([
        ruby.get_uma_sex_title(),
        ' 특유의 지기 싫어하는 근성은 정말 어디서나 고개를 내미는구나.',
      ]);
      await era.printAndWait([
        '그렇게 감탄한 ',
        me.get_colored_name(),
        '은(는) 우선 붓을 잡는 자세를 교정해 주기 위해 등 뒤에서 ',
        ruby.get_colored_name(),
        '의 가냘픈 손을 감싸 쥐었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 깊이 있는 문화 교류로 가득 찬 즐거운 오후를 보냈다.',
      ]);
      attr_change[attr_enum.speed] = 20;
      break;
    case 2:
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('저녁에는 당주 분께서 다이이치 가문의 저택에서 연회를 베푸실 예정입니다.');
      await ruby.say_and_wait('당신께서도 참석해 주신다면 더할 나위 없이 좋겠군요.');
      await ruby.say_and_wait('안심하십시오, 화려한 일족 내부의 만찬회니까요.');
      await ruby.say_and_wait('어머님께도 인사를 드리러 가시겠습니까?');
      await era.printAndWait([
        me.get_colored_name(),
        '의 예상과는 다르게, 아주 편안하고 아늑한 연회 시간을 즐겼다.',
      ]);
      attr_change[attr_enum.endurance] = 20;
      break;
    case 3:
      await ruby.say_and_wait('훗, 후훗.');
      await ruby.say_and_wait('우리 두 사람뿐인데도 파티를 여는 건가요?');
      await era.printAndWait([
        '어째서인지, ',
        ruby.get_colored_name(),
        '가 무척 즐거운 듯 미소를 지었다.',
      ]);
      await ruby.say_and_wait(
        '좋습니다. 아쉽게도 저는『태양』과 달라서 이 방면에 그리 박식하지 못하답니다.',
      );
      await ruby.say_and_wait('그러니 당신께서 저를 한껏 즐겁게 만들어 주시겠어요?');
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 무척이나 유쾌한 하루를 보냈다.',
      ]);
      pt_change += 20;
  }
  flags.wait_flag = get_attr_and_print_in_event(85, attr_change, pt_change);
  era.set('cflag:85:축제이벤트표시', 0);
};

out_church_handlers[95 + 1] = async (ruby, me, r_call_m, m_call_r, flags) => {
  await print_event_name('새해 참배', ruby);
  await ruby.say_and_wait('세간의 주목을 받는 것쯤은 아무런 문제도 되지 않습니다.');
  await era.printAndWait([
    '새해 벽두부터, ',
    ruby.get_colored_name(),
    '가 ',
    me.get_colored_name(),
    '의 트레이닝실을 찾아왔다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 내심 ',
    ruby.sex,
    '가 훨씬 바쁠 것이라 생각했었지만, 막상 얼굴을 보니 기쁜 마음이 차올랐다.',
  ]);
  await era.printAndWait(['가볍게 새해 인사를 건넨 후, ', ruby.sex, '가 이어가는 말은 과연 여전히 늠름했다.']);
  await ruby.say_and_wait('이 기간 동안, 우리는 우리가 해야 할 일을 묵묵히 해 나가면 그뿐입니다.');
  await ruby.say_and_wait([r_call_m, '은 어떻게 생각하시나요?']);
  era.printButton('「스피드를 손에 넣어야…… 하겠지.」', 1);
  await era.input();
  await era.printAndWait([ruby.sex, '에게 있어 스피드란 태어날 때부터 축복받은 영역이었다.']);
  await era.printAndWait([
    ruby.sex,
    '의 다리를 한층 더 날카롭게 갈고닦는다면, 틀림없이 눈부신 광채를 뿜어내며 일족에서 가장 빛나는 존재가 될 것이다.',
  ]);
  await ruby.say_and_wait('네. 저는 더 이상 당신의 기대를 저버리지 않을 것입니다.');
  await era.printAndWait([
    '연초부터 지나치게 긴장해 있는 모습을 보고, ',
    me.get_colored_name(),
    '은(는) 어떻게든 ',
    ruby.get_colored_name(),
    '의 긴장을 풀어주고 싶다는 생각이 들었다……',
  ]);
  era.printButton('「새로운 새해 요리를 찾아보자」 (스태미나 +20)', 1);
  era.printButton('「근처 신사에서 성장을 기원하자」 (전 능력치 +8)', 2);
  era.printButton('「우리만의 파티 타임을 시작하자! Lv2!」 (스킬 포인트 +35)', 3);
  const attr_change = new Array(5).fill(0);
  let relation_change = 0,
    love_change = 0,
    pt_change = 0;
  switch (await era.input()) {
    case 1:
      await ruby.say_and_wait('하아……');
      await ruby.say_and_wait('어느 정도 마음의 준비는 했습니다만, 참 뜻을 알 수 없는 행동이군요.');
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 트레이닝실에서 이런저런 요리를 시도해 보며 알찬 하루를 보냈다.',
      ]);
      attr_change[attr_enum.endurance] = 20;
      break;
    case 2:
      await ruby.say_and_wait([r_call_m, '……']);
      era.printButton('「오해하지 마, 난 아담한 게 취향이니까.」', 1);
      era.printButton('「오해하지 마, 신체 능력의 성장을 말한 거야.」', 2);
      if ((await era.input()) === 1) {
        relation_change = -5;
        love_change = 1;
      } else {
        relation_change = 5;
      }
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('조금 후에 교문 앞에서 모이도록 하죠. 옷을 갈아입고 오겠습니다.');
      await era.printAndWait('기모노는 가슴이 아담한 사람에게 잘 어울린다는 말이 사실인 모양이다.');
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '은(는) 확신했다. ',
        ruby.get_colored_name(),
        '가 이 화려한 의상을 완벽하게 소화해 냈다는 것을.',
      ]);
      await era.printAndWait([
        '머리에 꽂은 동백꽃이 무척이나 아름다웠지만, ',
        ruby.get_teen_sex_title(),
        '그녀 자신의 눈부심에는 비할 바가 못 되었다.',
      ]);
      await era.printAndWait('옷에 새겨진 문양은…… 나팔꽃이구나.');
      await me.say_and_wait('결속, 그리고 영원히 함께하는 사랑을 뜻하지.', true);
      attr_change.fill(8);
      break;
    case 3:
      pt_change = 35;
      await era.printAndWait('어째서 Lv2인 걸까?');
      await era.printAndWait([
        '담당 우마무스메를 실망하게 하지 않기 위해, ',
        me.get_colored_name(),
        '은(는) 특별히 ',
        get_chara_talk(65).get_colored_name(),
        '에게 파티의 분위기를 띄우는 요령을 전수받아 왔던 것이다.',
      ]);
      await ruby.say_and_wait('지나치게 시끄럽군요.');
      await era.printAndWait([
        '그녀가 ',
        ruby.sex_code === 1 ? '도련님': '아가씨',
        '다운 미소를 지으며 가차 없는 평가를 내렸다.',
      ]);
  }
  era.println();
  flags.wait_flag = get_attr_and_print_in_event(
    85,
    attr_change,
    pt_change,
    undefined,
    true,
  );
  flags.wait_flag =
    sys_like_chara(85, 0, relation_change, true, love_change) ||
    flags.wait_flag;
  era.set('cflag:85:축제이벤트표시', 0);
};

module.exports = class extends Edu85CrazyFanEnd {
  async office_study(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'rest_day') {
      return;
    }
    await print_event_name('우아한 분위기는 변하지 않는다', ruby);
    await era.printAndWait([
      '경기장에 서 있지 않을 때조차, ',
      ruby.get_colored_name(),
      '의 우아한 분위기는 조금도 흐려지지 않는다.',
    ]);
    era.printButton(`「${sys_get_callname(0, 85)}, 오늘은 집안의 업무가 없는 거야?」`, 1);
    await era.input();
    await ruby.say_and_wait('네, 흔치 않은 휴일이니까요.');
    await ruby.say_and_wait('아무것도 하지 않고 시간을 낭비하는 것은 어리석은 짓이기에, 배움에 힘쓰고 있습니다.');
    await era.printAndWait([
      '과연 ',
      ruby.sex,
      '답다…… 하지만, ',
      me.get_colored_name(),
      '은(는) 묘한 위화감을 느꼈다.',
    ]);
    await era.printAndWait(
      '책상 위에 수북이 쌓여 있는 잡지 같은 것들은, 도저히 학습용 서적이라고 보기는 어려웠기 때문이다.',
    );
    await ruby.say_and_wait('꽤 신경 쓰이시는 모양이군요.');
    await era.printAndWait([
      '그러더니, ',
      ruby.get_colored_name(),
      '는 책을 탁 덮고는 표지를 ',
      me.get_colored_name(),
      '에게 슬쩍 보여주었다.',
    ]);
    await era.printAndWait('《임산부 클럽》');
    await era.printAndWait(
      '표지에는 커다란 글씨로 이렇게 적혀 있었다. 「출산 준비를 시작할 때의 필수 지침서!」',
    );
    await ruby.say_and_wait(
      '이것 말고도 《어머니의 벗》, 《맘앤베이비》…… 정보지란 정보지는 모조리 구해 두었습니다.',
    );
    await era.printAndWait([ruby.sex, '의 표정에 은근한 득의양양함이 스쳤다.']);
    await era.printAndWait('게다가 여러 권의 책 페이지마다 인덱스 스티커가 빼곡하게 붙어 있었다.');
    await ruby.say_and_wait('머지않아, 당신에게도 이 지식들이 절실히 필요한 날이 찾아오겠지요.');
    await ruby.say_and_wait('그렇다면 조금이라도 일찍 마스터해 두는 것도 나쁘지 않겠지요?');
    await ruby.say_and_wait('제가 생각하기에 중요하다고 판단한 부분을 골라 두었으니, 이것부터 먼저 읽어보시는 게 좋겠네요.');
    era.printButton('……호의를 무시할 순 없겠네.', 1);
    await era.input();
    return true;
  }

  async out_church(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    const flags = { wait_flag: false };
    await out_church_handlers[event_object?.arg](
      ruby,
      me,
      callname,
      sys_get_callname(0, 85),
      flags,
    );
    flags.wait_flag && (await era.waitAnyKey());
    return true;
  }

  async out_shopping(ruby, me, callname, hook, extra_flag, event_object) {
    const relation = era.get('relation:85:0');
    if (era.get('flag:현재상호작용캐릭터') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'shopping_together') {
      return;
    }
    await print_event_name('함께 상점가로', ruby);
    await era.printAndWait(
      '가게들의 화려한 간판이 지붕 위에 즐비하고, 사람들이 마치 꿀벌처럼 분주하게 그 사이를 오가고 있었다.',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      ruby.get_colored_name(),
      '의 손을 꼭 쥔 채 북적이는 거리를 걸으며, 이대로 학원으로 돌아갈지 아니면 호텔로 향할지 깊은 고민에 빠졌다.',
    ]);
    await era.printAndWait('스스로 답을 내리지 못할 때는, 역시 사랑하는 우마무스메의 뜻에 따르는 법이다.');
    if (relation > 150) {
      era.printButton('「안아줄까, 아니면 업어줄까?」', 1);
      await era.input();
      await ruby.say_and_wait('……업어주세요.');
      await era.printAndWait([me.get_colored_name(), '은(는) 기꺼이 등을 내주었다.']);
      await era.printAndWait([
        '아직 성년이 되지 않은, 자그마한 체구의 ',
        ruby.get_colored_name(),
        '는 너무나도 가볍게 들쳐 업혔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 등에 가만히 엎드린 채, 고개를 살짝 기울여 ',
        me.get_colored_name(),
        '의 옆모습을 물끄러미 바라보았다.',
      ]);
      await era.printAndWait('아무런 말도 없었다.');
      await era.printAndWait('심지어 표정 하나 변하지 않았다.');
      await era.printAndWait('그저 그 아름다운 눈동자 속에, 한없는 영롱함과 부드러움이 가득 차 있을 뿐이었다.');
      era.println();
      let wait_flag = sys_like_chara(85, 0, 50);
      wait_flag = sys_love_uma(85, 5) || wait_flag;
      wait_flag && (await era.waitAnyKey());
    } else {
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 살짝 마음이 동한 듯 보였으나, 결국은 학원으로 돌아가자는 의사를 내비쳤다.',
      ]);
    }
    return true;
  }

  async out_start(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'hot_spring_event') {
      return;
    }
    await print_event_name('온천 여행', ruby);
    await era.printAndWait([
      '이것은 ',
      me.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '가 수많은 가혹한 레이스를 승리로 장식해 낸 어느 날의 이야기——',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 메모장을 열어 일정을 확인하던 와중, 어딘가 낯익은 종이 한 장이 바닥으로 툭 떨어졌다.',
    ]);
    await era.printAndWait('주워 들어 보니, 그것은 다름 아닌 온천 여행권이었다.');
    const edu_marks = new RubyEduMarks();
    if (edu_marks.hot_spring > 0) {
      const date = Math.floor((edu_marks.hot_spring - 96) / 4);
      await ruby.say_and_wait([
        '그건 ',
        date < 2
          ? '막 시니어 시즌에 접어들었을 무렵'
          : date < 5
            ? '지난해 봄'
            : date < 9
              ? '지난해 여름'
              : date < 11
                ? '지난해 가을'
                : '지난달',
        ', 상점가에 들렀다가 경품 추첨에서 뽑았던 것이군요.',
      ]);
      await era.printAndWait([
        '그 당시에, ',
        me.get_colored_name(),
        '은(는) 「내가 ',
        ruby.get_colored_name(),
        '너처럼 당당하고 훌륭한 트레이너가 된다면, 그때 같이 이 티켓을 쓰자.」라고 말했었다.',
      ]);
      await ruby.say_and_wait(
        '지금, 그것이 다시 우리 앞에 모습을 드러냈다는 것은 즉 때가 되었다는 뜻이겠지요.',
      );
      await ruby.say_and_wait('마침 당분간은 굵직한 큰 레이스도 없으니, 함께 여행을 떠나는 건 어떠신가요?');
      era.printButton('「아직 약속을 완전히 이룬 건 아니라고 생각하는데.」', 1);
      await era.input();
    } else {
      await ruby.say_and_wait([callname, ', 아직도 온천 여행권을 보관하고 계셨던 건가요?']);
      await me.say_and_wait('뭐…… 어쩌다 보니 그렇게 됐네.');
      await me.say_and_wait('마침 당분간은 큰 레이스도 없으니, 같이 여행이나 다녀올까?');
    }
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('잠시 실례하겠습니다.');
    await era.printAndWait([ruby.get_colored_name(), '가 뒤를 돌아서 스마트폰을 꺼내 들었다.']);
    await ruby.say_and_wait('네, 저입니다. 지금 당장 학원 앞으로 차를 한 대 대기시켜 주십시오.');
    era.printButton(`「${sys_get_callname(0, 85)}???」`, 1);
    await era.input();
    await ruby.say_and_wait('그럼—— 저를 따라오시지요.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '을(를) 데리고 그 온천 여행권을 사용할 수 있는 최고급 료칸에 도착했다.',
    ]);
    await ruby.say_and_wait('최근 당신은 쉬지 않고 일만 매진하셨습니다. 제가 전부 지켜보고 있었죠.');
    await ruby.say_and_wait('이번 기회를 빌려 부디 기분 전환을 하시고, 푹 쉬면서 기력을 회복하시길 바랍니다.');
    await ruby.say_and_wait('그럼 저는 먼저 실례하겠습니다.');
    era.printButton('언제나 끈기 있게 노력하는 너야말로 휴식이 꼭 필요해.', 1);
    era.printButton('내가 보기엔 너한테 휴식이 더 시급해 보여.', 2);
    await era.input();
    await ruby.say_and_wait('후우……');
    await ruby.say_and_wait('이번만큼은 당신의 뜻에 따르도록 하죠.');
    era.drawLine({ content: '온천욕을 마친 후'});
    era.printButton('근데 너는 왜 남기로 해 준 거야?', 1);
    await era.input();
    await ruby.say_and_wait('그저 일시적인 충동이었습니다.');
    era.printButton('진짜로?', 1);
    await era.input();
    await ruby.say_and_wait('제가 순간의 흥미로 결정을 내린 것이, 그렇게나 이상한 일인가요?');
    era.printButton('응, 아주 많이.', 1);
    await era.input();
    await ruby.say_and_wait('그 당시에는 깊게 생각하지 않았습니다. 하지만, 당신의 그 한마디를 듣고 나니……');
    await ruby.say_and_wait('역시 곁에 남아 당신과 함께해 주는 편이 좋겠다고 생각하여 수락했을 뿐입니다…… 그 이상도 그 이하도 아닙니다.');
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 말을 줄였고, 더 이상 설명할 생각도 없어 보였다.',
    ]);
    await era.printAndWait([
      '하지만 이것만으로도 ',
      me.get_colored_name(),
      '에게는 충분하고도 넘쳤다.',
    ]);
    era.printButton(`「고마워, ${sys_get_callname(0, 85)}.」`, 1);
    await era.input();
    await ruby.say_and_wait('제가 딱히 당신께 감사 인사를 받을 만한 행동을 했다고는 생각치는 않는데 말이죠.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 자신의 방에서 ',
      ruby.get_colored_name(),
      '와 그 무엇과도 바꿀 수 없는 소중한 인연의 유대를 확인하기로 마음먹었다……',
    ]);
    const cache = era.get('flag:현재위치');
    era.set('flag:현재위치', location_enum.hot_spring);
    await quick_into_sex(85);
    era.set('flag:현재위치', cache);
    return true;
  }

  async out_station(ruby, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 85) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg === 'wait_station') {
      await print_event_name('만남의 약속', ruby);
      await era.printAndWait([
        '역 앞 광장, ',
        me.get_colored_name(),
        '은(는) 사복 차림을 한 ',
        ruby.get_teen_sex_title(),
        '에게 화사한 미소를 지으며 인사를 건넸다.',
      ]);
      await era.printAndWait([
        '약속 시간까지는 아직 십여 분 정도 남았음에도, ',
        ruby.get_colored_name(),
        '는 이미 꽤 오랜 시간 기다린 듯한 기색이었다.',
      ]);
      await era.printAndWait([me.get_colored_name(), '은(는) 그녀의 차림새를 가볍게 훑어보았다.']);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 입은 라운드넥 상의는 그녀의 섬세하고 매혹적인 쇄골 라인을 아낌없이 드러내고 있었다.',
      ]);
      await era.printAndWait(
        '하반신에는 롱스커트를 매치하고 스커트 자락을 상의 안으로 집어넣어, 전체적으로 단아하면서도 편안한 기품이 흘러넘쳤다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '이(가) 자신을 유심히 살펴보는 것을 눈치채고는, 손을 들어 귀가의 머리칼을 부드럽게 쓸어 넘겼다.',
      ]);
      await ruby.say_and_wait('그렇게 이상한가요?');
      era.printButton('「당연히 엄청 귀엽지.」', 1);
      era.printButton('「뭐랄까 청초하고 세련된 느낌이야.」', 2);
      await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 주변을 지나가던 행인들의 뜨거운 시선을 한 몸에 받았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 마치 「돈 많은 부자가 미성년자 ',
        ruby.get_teen_sex_title(),
        '를 스폰하는 듯한」 묘한 눈초리를 견디기 힘들었으나, 다행히도 ',
        ruby.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '의 손을 이끌고 열차 안으로 발걸음을 옮겼다.',
      ]);
    } else if (event_object?.arg === 'station') {
      await print_event_name('베이비 본점', ruby);
      await me.say_and_wait('그나저나, 여기 대체 무슨 가게야?');
      await ruby.say_and_wait('보시다시피, 영유아 및 임산부 용품 전문점입니다.');
      await era.printAndWait('주변에는 배가 제법 부른 임산부나, 갓난아기를 품에 안고 걷는 부부 등이 가득했다.');
      await era.printAndWait([
        '모두가 ',
        me.get_couple_title(),
        ' 두 사람보다 훨씬 이 매장에 자연스럽게 어우러지는 손님들이었다.',
      ]);
      await era.printAndWait([
        '이곳에서 ',
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '의 존재는 명백히 이질적이고 튀었다.',
      ]);
      await ruby.say_and_wait('서적을 통해서만 얻을 수 있는 지식에는 한계가 명확하니까요.');
      await ruby.say_and_wait('이렇게 직접 현장을 둘러보며 식견을 넓히고 지식을 공고히 하고 싶었습니다.');
      await say_by_passer_by('행인 A', [
        '야, 저기 있는 애 설마 ',
        ruby.get_colored_name(),
        '아니야?',
      ]);
      await say_by_passer_by('행인 B', '헐 대박…… 그 화려한 일족의 영애가 대체 왜 저런 곳에 있는 건데?');
      await say_by_passer_by(
        '행인 C',
        '옆에 있는 사람은 트레이너 같은데, 둘이 같이 저런 임산부 매장에 들어간 거라면 설마 그런 사이인 거야?',
      );
      await era.printAndWait([
        '역시나 너무 눈에 띄었던 탓인지, 말할 것도 없이 ',
        me.get_colored_name(),
        '과(와) 담당 우마무스메의 신분이 고스란히 탄로나 버렸다.',
      ]);
      await ruby.say_and_wait('그저 평범하게 견학하러 온 것뿐인데, 과연 상황이 조금 난처하게 흘러가는군요. 저를 도와주십시오.');
      era.printButton('손을 내민다.', 1);
      await era.input();
      await era.printAndWait([
        '그렇게 내민 손을, ',
        ruby.get_colored_name(),
        '가 망설임 없이 꽉 껴안듯 붙잡았다.',
      ]);
      await era.printAndWait('이렇게 밀착해 있으니, 적어도 이곳에 머무는 사정만큼은 위화감이 사라진 듯했다.');
      await say_by_passer_by('행인 A', '역시 두 사람 이미 깊은 관계였구나……');
      await say_by_passer_by('행인 B', [
        '진짜야? 그 말은 즉, 설마 ',
        ruby.get_colored_name(),
        '의 배가 벌써부터!?',
      ]);
      await say_by_passer_by('행인 C', '그거 완전 범죄잖아!');
      await era.printAndWait([
        '그 후로 ',
        me.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 주변에서 들려오는 온갖 억측과 수군거림을 한 귀로 흘리며, 한동안 유아용품 매장을 꿋꿋이 둘러보았다.',
      ]);
    }
    return true;
  }

  async race_end(ruby, me, callname, hook, extra_flag) {
    const m_call_r = sys_get_callname(0, 85);
    if (
      !race_end_handlers[extra_flag.race] ||
      (await race_end_handlers[extra_flag.race](
        ruby,
        me,
        callname,
        m_call_r,
        extra_flag,
      ))
    ) {
      return await super.race_end(ruby, me, callname, hook, extra_flag);
    }
  }

  async race_start(ruby, me, callname, hook, extra_flag) {
    const m_call_r = sys_get_callname(0, 85);
    if (
      !race_start_handlers[extra_flag.race] ||
      (await race_start_handlers[extra_flag.race](
        ruby,
        me,
        callname,
        m_call_r,
        extra_flag,
      ))
    ) {
      return await super.race_start(ruby, me, callname, hook, extra_flag);
    }
  }

  async week_end(ruby, me, callname, hook, extra_flag, event_object) {
    const flags = { wait_flag: false },
      ret = await week_end_handlers[event_object.arg](
        ruby,
        me,
        callname,
        sys_get_callname(0, 85),
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }

  async week_start(ruby, me, callname, hook, extra_flag, event_object) {
    if (!week_start_handlers[event_object?.arg]) {
      return super.week_start(
        ruby,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
    const flags = { wait_flag: false },
      ret = await week_start_handlers[event_object.arg](
        ruby,
        me,
        callname,
        sys_get_callname(0, 85),
        flags,
        () => add_event(hook.hook, event_object),
      );
    flags.wait_flag && (await era.waitAnyKey());
    return ret;
  }
};