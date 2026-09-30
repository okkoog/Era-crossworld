const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');

/** @param {HookArg} hook */
module.exports = async function (hook) {
  const callname = sys_get_callname(32, 0),
    me = get_chara_talk(0),
    tachyon = get_chara_talk(32);

  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 마시다 만 위스키 병을 든 채, 비틀거리며 다섯 번째 바를 나섰다.',
  ]);
  await era.printAndWait('밤공기는 여전히 차갑고, 퇴폐적인 밤은 계속되고 있었다.');
  era.println();
  await era.printAndWait('끝났군…… 그럼, 다음은 어디로 가는 게 좋을까?');
  await era.printAndWait('몸을 가누지 못하고 길을 걷는 모습에선 온몸에 술 냄새가 진동했다.');
  await era.printAndWait([
    '어떤 행인이 보더라도 코를 찌푸리며 멀리할 법한 이 모습이야말로, ',
    me.get_colored_name(),
    '이(가) 필사적으로 연출하고자 했던 모습이었다.',
  ]);
  era.println();
  await era.printAndWait('둘, 셋, 다섯……… 스물셋, 스물아홉 ');
  await era.printAndWait([me.get_colored_name(), '은(는) 머릿속으로 숫자를 세었다.']);
  await era.printAndWait([
    '이것은 소수를 세며 마음을 진정시키려는 것이 아니라, 오늘 하룻밤 동안 ',
    me.get_colored_name(),
    '이(가) 마셔버린 술의 양이었다.',
  ]);
  await era.printAndWait('총금액은…… 7자리…… 아니면 8자리인가?');
  await era.printAndWait([
    '경악스러운 액수였지만, 그것은 단지 ',
    me.get_colored_name(),
    '이(가) 하룻밤 사이에 해치운 술값에 불과했다.',
  ]);
  await era.printAndWait(
    '최고급 바에서 질 따위는 따지지 않고 오직 비싼 것들로만 가게 안을 싹쓸이한 결과가, 일반인이라면 상상도 못 할 숫자를 만들어낸 것이다.',
  );
  era.println();
  await era.printAndWait('그러나……');
  await era.printAndWait('소용없었다. 아무런 효과가 없었다.');
  await era.printAndWait([
    '가격이 얼마든, 도수가 몇 도든, 오늘 마신 그 어떤 술도 ',
    me.get_colored_name(),
    '을(를) 화장실에 몇 번 더 가게 했을 뿐, 그 이상의 작용은 전혀 하지 못했다.',
  ]);
  await era.printAndWait([
    '의식은 더할 나위 없이 또렷했고, 그 명료함은 ',
    me.get_colored_name(),
    '에게 이틀 전의 일을 떠올리게 했다.',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait('돈을 빌려달라고?');
  await tachyon.say_as_unknown_and_wait(['좋지, ', callname]);
  await tachyon.say_as_unknown_and_wait(
    '하지만 늘 그렇듯 규칙은 알고 있겠지…… 오늘의 실험은, 신경 억제제 배제에 관한 실험이라네.',
  );
  await tachyon.say_as_unknown_and_wait('그럼, 실험을 시작하도록 하지.');
  era.println();
  await era.printAndWait([me.get_colored_name(), '은(는) 위스키를 병째로 들이켰다.']);
  await era.printAndWait([
    '보통 사람이라면 한 모금만으로도 고꾸라질 독주가, 오히려 ',
    me.get_colored_name(),
    '의 머릿속을 더욱 맑게 만들었다.',
  ]);
  await era.printAndWait(
    '술로 시름을 잊는다는 것이 알코올을 통해 신경을 마비시켜 현실을 도피하는 것이라면, 신경을 마비시키는 것조차 허락되지 않는 자신은 분명 세상에서 가장 고통스러운 주정뱅이일 터였다.',
  );
  era.println();
  await era.printAndWait('번화한 밤거리에서 자신과 같은 취객은 흔하디흔했다.');
  await era.printAndWait([
    '비틀거리는 그들의 뒷모습을 보며, ',
    me.get_colored_name(),
    '은(는) 가슴 깊은 곳에서 우러나오는 진심 어린 부러움을 느꼈다.',
  ]);
  era.println();
  await era.printAndWait([
    '걷다 보니 갑자기 눈앞에서 번쩍이는 빛 때문에 ',
    me.get_colored_name(),
    '은(는) 자신도 모르게 두 눈을 가늘게 떴다.',
  ]);
  await era.printAndWait(
    '눈을 어지럽히는 것은 조명뿐만이 아니라, 화려한 인테리어와 일확천금을 꿈꾸는 수많은 욕망이었다.',
  );
  await era.printAndWait('도박과 술, 술과 도박. 이 둘은 예로부터 떼려야 뗄 수 없는 관계였다.');
  await era.printAndWait(
    '진탕 마셔대던 주당들이 거나하게 취했을 때, 카지노에 들러 한 판 벌이는 것은 이미 관례와도 같았다.',
  );
  era.println();
  await era.printAndWait([
    '하지만 취객의 모습을 한 ',
    me.get_colored_name(),
    '은(는) 카지노 쪽으로는 눈길조차 주지 않고 오직 정면만을 응시하며 걸었다.',
  ]);
  await era.printAndWait('카지노의 판돈이 너무 작아서가 아니었다———');
  await era.printAndWait([
    '듣기로는 이곳 카지노에는 심지어 ',
    tachyon.get_uma_sex_title(),
    ' 레이스에 돈을 거는, 외부에 발설되는 순간 파멸이 확정된 은밀한 영업까지 행해지고 있다고 했다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 대단히 도덕적인 사람이라서도 아니었다. 애초에 이런 시간에 이런 거리를 배회하는 인간이 깨끗해 봐야 얼마나 깨끗하겠는가.',
  ]);
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 다시 술을 한 모금 들이켜며 과거를 회상했다.',
  ]);
  era.println();
  await tachyon.say_as_unknown_and_wait('돈을 빌려달라고?');
  await tachyon.say_as_unknown_and_wait(['좋지, ', callname]);
  await tachyon.say_as_unknown_and_wait(
    '하지만 늘 그렇듯 규칙은 알고 있겠지…… 오늘의 실험은, 뇌의 보상 메커니즘의 조정과 억제에 관한 것이라네.',
  );
  await tachyon.say_as_unknown_and_wait('그럼, 실험을 시작하도록 하지.');
  era.println();
  await era.printAndWait('평범한 직장인의 연봉을 뛰어넘는 돈을 따더라도.');
  await era.printAndWait('하룻밤 사이에 바다 조망의 별장을 잃는다 해도.');
  await era.printAndWait('아무런 감정의 동요도 없었고, 미간에 주름조차 잡을 수 없었다.');
  await era.printAndWait('이런 상황에서의 도박에 대체 무슨 재미가 있겠는가?');
  era.println();
  await era.printAndWait('마치 카지노 전체에서 자신만이 세상 밖으로 격리된 것 같았다.');
  await era.printAndWait('과거의 자신이 왜 이곳에 몰두했었는지 이해할 수 없었다.');
  await era.printAndWait('아니, 이해는 할 수 있었으나, 되지 않는 것은 되지 않는 법이었다.');
  await era.printAndWait('마치 이미 잠에서 깬 사람이 다시 꿈속으로 돌아갈 수 없는 것과 같았다.');
  era.println();
  await say_by_passer_by_and_wait(
    '거리의 소녀',
    '아저씨, 혼자 계신 게 참 외로워 보이시네요…… 관심 있으시면 저랑 같이 즐거운 밤을 보내지 않으실래요? ♡',
  );
  era.println();
  await era.printAndWait([
    '어느덧 화려한 카지노를 뒤로하고 홍등가로 접어든 ',
    me.get_colored_name(),
    '에게 유흥가의 여인들이 부드러운 유혹을 건네왔다.',
  ]);
  await era.printAndWait(
    '만약 그녀들의 품에 안겨 탐닉할 수만 있다면, 그것은 분명 더할 나위 없는 행복이었겠지만……',
  );
  era.println();
  await tachyon.say_as_unknown_and_wait('돈을 빌려달라고?');
  await tachyon.say_as_unknown_and_wait(['좋지, ', callname]);
  await tachyon.say_as_unknown_and_wait('하지만 규칙은……');
  era.println();
  await era.printAndWait('아아.');
  await era.printAndWait([me.get_colored_name(), '은(는) 소녀의 초대를 거절했다.']);
  await era.printAndWait('아무런 반응도 없었다.');
  await era.printAndWait(
    '본래라면 딱 취향이었을 소녀였지만, 지금은 몸에 티끌만큼의 반응조차 일으키지 못했다.',
  );
  era.println();
  await era.printAndWait([
    '어느새 ',
    me.get_colored_name(),
    '은(는) 그 거리를 벗어나 있었다.',
  ]);
  await era.printAndWait([
    '이토록 거대한 밤거리, 번화한 밤의 도시에서 ',
    me.get_colored_name(),
    '에게 욕망을 불러일으킬 만한 것은 그 어디에도 없었다.',
  ]);
  await era.printAndWait('한때 흥미를 느꼈던 것들.');
  await era.printAndWait('미식, 술과 담배, 도박, 여자……');
  await era.printAndWait('자신을 탐닉하게 하고 신경을 마비시켰던 그 모든 것들이,');
  await era.printAndWait('이제는 오로지 신경을 더욱 날카롭게 깨울 뿐이었다.');
  era.println();
  await era.printAndWait('그만해, 이제 충분해.');
  await era.printAndWait(
    '무엇이든 좋으니 자신을 취하게 할 수만 있다면, 사고를 멈출 수만 있다면 무엇이든 좋았다.',
  );
  await era.printAndWait('이성이 이토록 사람을 광기로 몰아넣을 줄은 미처 몰랐다.');
  await era.printAndWait('폭력, 고통, 혈흔, 상처.');
  await era.printAndWait('심지어 이런 것들조차 자신에게 더 큰 자극을 주지는 못했다.');
  await era.printAndWait('이것들은 또 몇 번째 실험에서 팔아넘긴 것일까?');
  await era.printAndWait('이미 잊었다. 그런 건 이제 중요하지 않았다.');
  era.println();
  await era.printAndWait('마치 인격이 해체되는 것처럼, 다급하게 자극을 갈구했으나 그 무엇도 얻을 수 없었다.');
  await era.printAndWait(
    '이대로라면…… 무너지고 말 것이다. 신경도, 몸도, 반드시 붕괴하고 끊어질 것이다.',
  );
  await era.printAndWait('그러니 그전에, 무엇이라도 좋으니……');
  await era.printAndWait('무엇이라도, 좋으니……');
  await tachyon.say_as_unknown_and_wait([callname, '? 자네가 왜 여기에 있나.']);
  await tachyon.say_as_unknown_and_wait('……이런, 참으로 꼴사나운 모습이군.');
  await tachyon.say_as_unknown_and_wait(
    '왜 그러나, 술 살 돈이 떨어진 건가? 아니면 판돈이 없어서 카지노에서 쫓겨났나…… 그것도 아니면, 마음에 드는 소녀라도 생긴 건가?',
  );
  await tachyon.say_as_unknown_and_wait('돈이…… 더 필요한가?');
  era.println();
  await era.printAndWait([me.get_colored_name(), '은(는) 멍하니 상대를 바라보았다.']);
  await era.printAndWait([
    '마치 악마의 속삭임처럼, ',
    me.get_colored_name(),
    '의 귓가에 솜처럼 부드럽게 감겨왔다.',
  ]);
  await era.printAndWait('돈.');
  await era.printAndWait('돈이 더 필요해.');
  await era.printAndWait('더 많은 돈이 있어야 해.');
  await era.printAndWait('더 많이 빌려야만 해.');
  era.println();
  await era.printAndWait('………………………왜?');
  await era.printAndWait('왜 돈을 원하는 거지?');
  await era.printAndWait('왜 돈을 빌리려 하는 거지?');
  await era.printAndWait('술을 사기 위해서?');
  await era.printAndWait('도박을 하기 위해서?');
  await era.printAndWait('여자랑 놀기 위해서?');
  await era.printAndWait('왜?');
  await era.printAndWait('대체 왜?');
  era.println();
  await era.printAndWait('무엇이든 상관없어.');
  await era.printAndWait('무슨 짓을 해도 좋아.');
  await era.printAndWait('제발 생각해내.');
  await era.printAndWait('어떻게 해야 사고를 멈출 수 있지?');
  await era.printAndWait('어떻게 해야 내 머릿속을 완전히 마비시킬 수 있지?');
  era.println();
  await era.printAndWait('아아……');
  await era.printAndWait('아아!');
  await era.printAndWait('찾았다.');
  await era.printAndWait('찾았다찾았다찾았다찾았다찾았다찾았다찾았다찾았다찾았다찾았다');
  era.println();
  await me.say_and_wait('……부탁이야, 내게 돈을 빌려줄 수 있을까?');
  await tachyon.say_as_unknown_and_wait([
    '물론이고말고…… 하지만, ',
    callname,
    ', 그 돈을 빌려서 무얼 할 생각인가?',
  ]);
  era.println();
  await era.printAndWait('상대가 남긴 유일한 허점.');
  await era.printAndWait('자신에게 남겨진 마지막 자비.');
  await era.printAndWait('포석? 음모? 계산?');
  await era.printAndWait('그런 것들은 이제 중요하지 않았다.');
  era.println();
  await me.say_and_wait('타키온…… 이 돈으로…… 오늘 밤을 나와 함께 보내주겠어?');
  era.println();
  await era.printAndWait('그 말을 내뱉은 순간, 한계까지 팽팽해졌던 용수철이 드디어 풀려났다.');
  await era.printAndWait('아아……');
  await era.printAndWait('오직 상대만을 생각할 때, 머릿속은 비로소 숨을 쉴 수 있었다.');
  await era.printAndWait('오직 상대만을 갈망할 때, 내면은 비로소 마비될 수 있었다.');
  await era.printAndWait('왜 예전의 자신은 몰랐던 것일까.');
  await era.printAndWait('왜 계속해서 돈을 빌려 그런 의미 없는 짓거리들을 해왔던 것일까.');
  await era.printAndWait('분명히, 분명히 내면의 유일한 안식은 여기에 있었는데.');
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), '과 함께 밥을 먹고 싶어.']);
  await era.printAndWait([tachyon.get_colored_name(), '과 함께 드라이브를 가고 싶어.']);
  await era.printAndWait([
    tachyon.get_colored_name(),
    '과 함께 야경을 보고 싶어.',
  ]);
  await era.printAndWait([
    tachyon.get_colored_name(),
    '과 함께 러브 호텔에 들어가고 싶어.',
  ]);
  await era.printAndWait([
    '완전히, 안에서부터 밖까지, 전부 다 ',
    tachyon.get_colored_name(),
    '의 색으로 물들고 싶어.',
  ]);
  await era.printAndWait('그런 생각을 하면 할수록, 마음은 더욱 가벼워졌고 편안해졌다.');
  era.println();
  await tachyon.say_as_unknown_and_wait('후후…… 착한 아이구나, 착한 아이야.');
  era.println();
  await era.printAndWait([
    '그리하여, ',
    me.get_colored_name(),
    '은(는) 진정한 행복을 얻었다.',
  ]);
  await print_event_name(
    [{ color: buff_colors[3], content: '금전의 대가'}],
    tachyon,
  );
};