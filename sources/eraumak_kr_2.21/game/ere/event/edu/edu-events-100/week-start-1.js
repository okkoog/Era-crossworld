const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[5] = async (acute, me, callname, flags) => {
    const tokino = get_chara_talk(301);
    era.set('cflag:100:축제이벤트표시', 0);
    await print_event_name('초궁극 무신 다이맥스 이하 생략 · 초콜릿 무스 케이크', acute);
    await era.printAndWait([
      '겨울의 기운이 점차 가시고, 만물이 서서히 깨어나는 시기; 옥상에서 만난 할머니 같은 ',
      acute.get_teen_sex_title(),
      '와의 만남 이후, 어느덧 눈 깜짝할 새 2월 중순이 되었다.',
    ]);
    await era.printAndWait([
      '어느덧 발렌타인데이가 다가왔고, 트레센 학원 인근 상점가의 많은 상점들은 「발렌타인데이 특가」라는 문구를 내걸며 발렌타인 한정 상품들을 팔고 있었다.',
    ]);
    await era.printAndWait([
      '이곳에 쇼핑하러 오는 주 고객층은 당연히 트레센의 ',
      acute.get_uma_sex_title(),
      '들이다——비록 ',
      acute.get_uma_sex_title(),
      '들은 대부분 레이스에 전념하느라 연애에는 큰 관심이 없지만. 그래도 발렌타인데이 우정 선물로 친구에게 줄 소소한 간식을 사는 것 정도는 당연히 아주 좋은 일일 테니까.',
    ]);
    await era.printAndWait([
      '물론 그중에는 트레센 학원에서 근무하는 교직원들도 몇몇 섞여 있었는데…… 그건 또 다른 이야기다.',
    ]);
    await me.say_and_wait(['……그런데 내가 왜 상점가에 있지?']);
    await era.printAndWait([
      '——그야 당연히 ',
      sys_get_colored_callname(0, 302),
      '과 ',
      sys_get_colored_callname(0, 301),
      '의 명령 때문이다.',
    ]);
    await era.printAndWait([
      '얼마 전까지 기분이 좋지 않았던 ',
      me.get_colored_name(),
      '이(가) 드디어 그 상태에서 벗어난 것을 본 모양인지, ',
      sys_get_colored_callname(0, 301),
      '가 교직원들을 위한 발렌타인 파티를 열어서 기분 전환을 제대로 해보자고 제안했다.',
    ]);
    await era.printAndWait([
      '그리고 상점가에서 미리 주문 제작한 「초콜릿 무스 케이크」를 가져오는 임무가 ',
      me.get_colored_name(),
      '의 손에 맡겨진 것이다.',
    ]);
    await me.say_and_wait([
      '……어쩐지 잡일꾼으로 취급받는 기분인데. 정말이지, 설마 ',
      sys_get_colored_callname(0, 301),
      '가 날 엄청 싫어하는 건가?',
    ]);
    await era.printAndWait([
      '원래 「초콜릿 무스 케이크」를 찾아오는 일은 ',
      tokino.get_colored_name(),
      '의 담당이었을 텐데. 무슨 바람이 불었는지 굳이 ',
      me.get_colored_name(),
      '에게 다녀오라고 하다니…… 참으로 기묘한 노릇이다.',
    ]);
    await era.printAndWait([
      '하지만 이제 와서 이런 생각을 해봤자 늦었다. 이미 왔으니, 어떻게든 일을 마쳐야지...',
    ]);
    await era.printAndWait([
      '그런 생각을 하며 다소 자포자기한 심정으로, ',
      me.get_colored_name(),
      '은(는) 한숨을 쉬며 상점가 끝에 있는 케이크 가게로 들어섰다……',
    ]);

    era.drawLine();
    await era.printAndWait([
      '……교사에 있는 세 여신상만큼 거대한 이 케이크 상자는 대체 뭐지?',
    ]);
    await say_by_passer_by_and_wait('점원', [
      '……오래 기다리셨습니다, ',
      me.actual_name,
      '님. 하야카와 ',
      tokino.get_adult_sex_title(),
      '께서 예약하신 『초궁극 무신 다이맥스 파워업 호화 특전판 · 초콜릿 무스 케이크』입니다.',
    ]);
    await era.printAndWait(['……이게 무슨, 여기 케이크 가게 점원들은 다들 만담이라도 배운 건가?']);
    await me.say_and_wait([
      '……저기, 가게를 꽉 채울 듯한 이 거대한 케이크 상자가 진짜 제가 주문한 초콜릿 무스 케이크가 맞나요?',
    ]);
    await say_by_passer_by_and_wait('점원', [
      '? 손님은 『',
      me.actual_name,
      '』 님 맞으시죠?',
    ]);
    await era.printAndWait([
      '그래, 분명 ',
      me.get_colored_name(),
      '의 이름이 맞다…… 비록 지금 이 순간만큼은 ',
      me.get_colored_name(),
      '도 인정하고 싶지 않지만.',
    ]);
    await say_by_passer_by_and_wait('점원', [
      '그럼 맞네요, 하야카와 ',
      tokino.get_adult_sex_title(),
      '께서 예약하신 『초궁극 무신 다이맥스 파워업 호화 특전판 · 초콜릿 무스 케이크』요.',
    ]);
    await era.printAndWait(['좋아, 이젠 도망칠 수도 없군.']);
    await me.say_and_wait([
      '……알겠습니다, 백번 양보해서, 그래요 백번 양보할게요. 제 눈앞에 있는 이 거물이 제가 가져갈 초콜릿 무스 케이크라고 칩시다. 근데 질문 하나 할게요, 이걸 도대체 어떻게 트레센까지 들고 가라는 거죠?',
    ]);
    await say_by_passer_by_and_wait('점원', ['? 손님 트레센 학원 사람 아니신가요?']);
    await era.printAndWait([
      '점원은 다시 한번 의아한 눈빛으로 ',
      me.get_colored_name(),
      '을(를) 쳐다보았다.',
    ]);
    await era.printAndWait([
      '그래, ',
      me.get_colored_name(),
      '은(는) 트레센 사람이 맞다…… 여기서 ',
      me.get_colored_name(),
      '이(가) 아니라고 부정할 선택지는 없다.',
    ]);
    await say_by_passer_by_and_wait('점원', [
      '그럼 간단하잖아요——그냥 이 케이크 상자를 번쩍 들어서 매고 가면 되는 거 아니신가요?',
    ]);
    await me.say_and_wait([
      '아니아니아니! 무리라고요?! 절 대체 뭘로 보는 겁니까? 헤라클레스라도 됩니까?',
    ]);
    await say_by_passer_by_and_wait('점원', [
      '하지만 ',
      acute.get_uma_sex_title(),
      '들은 다 할 수 있잖아요?',
    ]);
    await me.say_and_wait([
      acute.get_uma_sex_title(),
      '도 무리일걸요!? 그렇게 쉽게 말하지 마시죠!',
    ]);
    await say_by_passer_by_and_wait('점원', [
      '그치만 하야카와 ',
      tokino.get_adult_sex_title(),
      '께선 하실 수 있으시다던데요?',
    ]);
    await me.say_and_wait(['하야카와……']);
    await era.printAndWait(['…………그런 것이었다.']);
    await era.printAndWait([
      '알고 보니 ',
      sys_get_colored_callname(0, 301),
      '의 짓이었다. 이제야 모든 게 설명이 되는 것 같았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이 순간 모든 것이 물 흐르듯 자연스럽고 당연한 이치라 느껴졌다. 고개를 들자, ',
      me.get_colored_name(),
      '은(는) 이 사건에 대해 더 이상 어떠한 의문이나 고뇌도 느끼지 않았다.',
    ]);
    await say_by_passer_by_and_wait('점원', [
      '어쨌든, 본 매장의 상품은 한 번 판매되면 교환 및 환불이 불가능합니다. 이것이 바로 하야카와 ',
      tokino.get_adult_sex_title(),
      '께서 주문하신 케이크입니다——',
    ]);
    await era.printAndWait([
      '그렇게 말하며, 점원은 ',
      me.get_colored_name(),
      '에게 정중하게 인사를 했다.',
    ]);
    await say_by_passer_by_and_wait('점원', ['그럼 서명 부탁드립니다.']);

    era.drawLine();
    await me.say_and_wait(['작용점, 받침점, 힘점……']);
    await me.say_and_wait(['작용점, 받침점, 힘점……']);
    await era.printAndWait([
      '자신보다 몇 배나 큰 케이크 상자를 짊어지고 거리를 걷는 모습은, 현실 세계만 아니었다면 ',
      me.get_colored_name(),
      '은(는) 틀림없이 다O소울의 새로운 등장인물 취급을 받았을 것이다.',
    ]);
    await era.printAndWait([
      '중력에 의해 케이크 상자가 기울어지는 것을 막기 위해, ',
      me.get_colored_name(),
      '은(는) 밸런스를 유지하는 주문을 외울 수밖에 없었다.',
    ]);
    await me.say_and_wait(['작용점, 받침점, 힘점……']);
    await me.say_and_wait(['작용점, 받침점, 힘점……']);
    await acute.say_and_wait(['……저기, ', callname, ', 대체 무슨 주문을 외우고 있는 겐가?']);
    await era.printAndWait(['!?', acute.get_colored_name(), '!?']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 고개를 돌리자, ',
      acute.get_colored_name(),
      '가 몸을 숙인 채 ',
      me.get_colored_name(),
      '의 곁에 서 있었다.',
    ]);
    await me.say_and_wait([
      sys_get_colored_callname(0, 100),
      '? 언제부터 와 있었어?',
    ]);
    await acute.say_and_wait([
      '……',
      me.actual_name,
      '이(가) 케이크 가게에 들어갈 때부터 쭉 따라왔지…… 그래서, ',
      me.actual_name,
      ', 무슨 주문을 외우고 있었던 겐가?',
    ]);
    await era.printAndWait([
      '그러니까 처음부터 다 보고 있었다는 소리군…… 이거 얼버무릴 수도 없을 것 같다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 어색한 분위기를 풀기 위해 애써 웃어보려 했지만, 입을 열자마자 이마에서 땀방울이 뚝 떨어져 ',
      me.get_colored_name(),
      '의 혀끝을 적셨다. 그 짠맛에 ',
      me.get_colored_name(),
      '은(는) 차마 웃을 수가 없었다.',
    ]);
    await me.say_and_wait([
      '이건 말이지…… 외우면 평상심을 유지할 수 있는 주문이야. 이른바 『정심주』라는 거지——',
    ]);
    await acute.say_and_wait(['『정심주』라……']);
    await era.printAndWait([
      acute.get_colored_name(),
      '는 의미심장한 표정으로 「정심주」라는 세 글자를 중얼거렸다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 당연히 태클이 들어올 줄 알았지만...',
    ]);
    await acute.say_and_wait([
      '『정심주』였구먼. 다행이네. 나는 또 ',
      callname,
      '이 악령에라도 씐 줄 알았지 뭔가……',
    ]);
    await me.say_and_wait(['악령?']);
    await acute.say_and_wait([
      '그야 그렇잖은가, ',
      callname,
      '이 케이크 가게에서 딱 봐도 크기가 비정상적인 물건을 짊어지고 나왔으니 말일세?',
    ]);
    await era.printAndWait(['아…… 그거 말이었구나.']);
    await era.printAndWait([
      '듣고 보니 그렇다. 지나가던 사람들이 보기엔, 이렇게 거대한 케이크 상자를 매고 있는 녀석은 분명 제정신이 아닐 것이다.',
    ]);
    await acute.say_and_wait(['내가 좀 거들어줄까, ', callname, '?']);
    await era.printAndWait([
      '비록 ',
      acute.get_colored_name(),
      '의 목소리는 여전히 부드러웠지만, 거대한 물건을 짊어진 ',
      me.get_colored_name(),
      '에겐 지금 ',
      acute.get_colored_name(),
      '의 온화한 얼굴에서 치유를 구할 여유 따윈 없었다.',
    ]);
    await me.say_and_wait(['괜찮아…… 이런 힘쓰는 일은 우리 젊은이들 몫이지.']);
    await era.printAndWait([
      '당연하다는 듯이 ',
      acute.get_colored_name(),
      '의 도움을 거절했다. ',
      me.get_colored_name(),
      '에겐 그래도 트레이너로서의 알량한 자존심이 남아 있었다. 아무리 그래도 무거운 짐을 옮기는 이런 험한 일을 ',
      me.get_colored_name(),
      '은(는) 결코 ',
      acute.get_colored_name(),
      '에게 떠넘기고 싶지 않았다.',
    ]);
    await era.printAndWait([
      '게다가, ',
      acute.get_colored_name(),
      '는 척 보기에도 저리 「가녀린데」 어찌 ',
      acute.sex,
      '에게 중력의 압박을 받게 한단 말인가?',
    ]);
    await acute.say_and_wait([
      '저기, ',
      callname,
      ', 나이로 따지면 내가 자네보다 어리다네?',
    ]);
    await era.printAndWait([
      '화내는 것은 아니었고 그저 온화하게 정정할 뿐이었다; ',
      acute.get_colored_name(),
      '는 서두르지 않고 차분히 말했다.',
    ]);
    await era.printAndWait([
      '그러고는, ',
      acute.sex,
      '는 허리를 곧게 펴고, 걸음을 살짝 늦춰 ',
      me.get_colored_name(),
      '의 시야가 닿지 않는 옆쪽으로 물러났다.',
    ]);
    await era.printAndWait([
      acute.sex,
      '는 고개를 들어, 거대한 상자 위에 쓰인 초콜릿 무스 글자를 보더니, 자신만 들릴 듯한 작은 목소리로 중얼거렸다:',
    ]);
    await acute.say_and_wait(['……', callname, ', 초콜릿 케이크를 좋아하는구먼——']);
    await era.printAndWait([
      '말을 마치고, ',
      acute.get_colored_name(),
      '는 숨을 가볍게 내쉬며 ',
      me.get_colored_name(),
      '에게는 보이지 않는 케이크 상자 뒤편으로 오른손을 뻗었다.',
    ]);
    await era.printAndWait(['——곧게 뻗은 검지손가락이, 그대로 케이크 상자 뒷면을 받쳤다.']);

    era.drawLine();
    await era.printAndWait([
      '정말 놀랍게도, ',
      me.get_colored_name(),
      '은(는) 길 한복판에서 기절하지 않았다.',
    ]);
    await era.printAndWait([
      '원래 ',
      me.get_colored_name(),
      '은(는) 거대한 초콜릿 무스를 옮기는 도중 체력 고갈로 길바닥에 쓰러질 게 뻔하다고 생각했다. 하지만 뜻밖에도, 운반 후반부에 접어들자 ',
      me.get_colored_name(),
      '은(는) 등 뒤가 유난히 가벼워진 것을 느꼈다. 결국 ',
      me.get_colored_name(),
      '은(는) 거의 잰걸음으로 달려 트레센에 돌아왔다.',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      '와 작별 인사를 나눈 후, 왠지 모르게 등 뒤가 다시 엄청나게 무거워진 기분이었지만. 그래도 두세 걸음밖에 남지 않았기에 ',
      me.get_colored_name(),
      '은(는) 재빨리 거대한 초콜릿 무스 케이크를 ',
      tokino.get_colored_name(),
      '에게 넘겨주었다.',
    ]);
    await tokino.say_and_wait([
      '수고 많으셨어요, ',
      me.actual_name,
      '. 이제 파티엔 당신 한 명 남았으니, 어서 들어오세요——',
    ]);
    await me.say_and_wait([
      '죄송합니다, ',
      sys_get_colored_callname(0, 301),
      '. 저는 좀 쉬어야겠습니다.',
    ]);
    await tokino.say_and_wait(['네?']);
    await era.printAndWait([
      '아무리 그래도 이렇게 큰 케이크 상자를 매고 그 먼 길을 걸어왔으니 ',
      me.get_colored_name(),
      '의 체력은 이미 바닥난 상태였다. 지금 ',
      me.get_colored_name(),
      '은(는) 파티에 참가하기보다는 당장 침대에 누워 한숨 푹 자고 싶은 마음뿐이었다.',
    ]);
    await era.printAndWait([
      tokino.get_colored_name(),
      '에게 자초지종을 설명한 뒤, ',
      me.get_colored_name(),
      '은(는) 뒤도 돌아보지 않고 휴게실로 돌아갔다. 오늘도 참 고된 하루였다.',
    ]);
    await era.printAndWait(['…………………']);
    await era.printAndWait(['………………']);
    await era.printAndWait(['…………']);
    await era.printAndWait(['그러고 보니, 애초에 이 파티는 대체 무슨 이유로 연 거였더라?']);
    await era.printAndWait(['그런 사소한 것은 당신에게 더는 중요하지 않았다.']);

    era.drawLine();
    await era.printAndWait([
      '다음 날 이른 아침, 휴게실 문 앞에는 「입사를 축하합니다」라고 쓰인 초콜릿 무스 케이크 한 조각이 놓여 있었다.',
    ]);
    await era.printAndWait(['도대체 누가 둔 걸까? 참으로 궁금한 일이다.']);

    era.println();
    flags.wait_flag = get_attr_and_print_in_event(
      100,
      [0, 0, 10],
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_change_motivation(100, 1) || flags.wait_flag;
    flags.wait_flag =
      get_attr_and_print_in_event(0, [0, 0, 0, 1], 0, undefined, true) ||
      flags.wait_flag;
  };

  handlers[47] = async (acute, me, callname, flags) => {
    const tokino = get_chara_talk(301);
    era.set('cflag:100:축제이벤트표시', 0);
    await print_event_name('도박과 사랑과 비행', acute);
    await era.printAndWait(['봄이 가고 가을이 오더니, 어느덧 크리스마스가 코앞으로 다가왔다.']);
    await era.printAndWait([
      '겨울철, 학생들이 감기에 걸리지 않도록 교사 내부는 난방을 아주 빵빵하게 틀어놓았다. 그 난방이 어찌나 강했던지, ',
      me.get_colored_name(),
      '은(는) 결국 목도리와 겉옷을 벗어 교직원 휴게실 문 옆 옷걸이에 걸어둘 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '비록 크리스마스가 다가왔지만, 이 시기에도 레이스는 적지 않다. 트레센 학원의 트레이너로서 당연히 근무지에서 열심히 일해야 했고, 다른 사람들처럼 마음껏 휴일을 즐길 수는 없었다.',
    ]);
    await era.printAndWait([
      '……하지만, 말은 그렇게 해도. 밤이 되면 업무 틈틈이 쉴 시간 정도는 어떻게든 낼 수 있었다.',
    ]);
    await era.printAndWait([
      '누군가의 제안으로 휴게실 안의 교직원들이 옹기종기 모여 앉아, 서랍 밑바닥에 숨겨두었던 트럼프 카드를 꺼내 들었다. 이내 교직원 사무실은 즐거운 분위기로 가득 찼다.',
    ]);
    await era.printAndWait([
      '명색이 어른들인데, 당연히 무언가 걸어야 제맛 아니겠는가. 하지만 무엇을 걸든 간에, ',
      me.get_colored_name(),
      '은(는) 누구에게도 지지 않을 절대적인 자신감이 있었다.',
    ]);
    await era.printAndWait(['물론 당신이 도박이나 심리전의 천재인 것은 아니고...']);
    await era.printAndWait(['콧등에 걸친 안경을 쓱 밀어 올리면, 다 보일 것이었기 때문이다.']);
    await era.printAndWait([
      '이것은 ',
      me.get_colored_name(),
      '이(가) 오늘의 판을 위해, 「자발적으로 모든 생물학적 실험을 감수한다」는 계약서(이하 신체 포기 각서)에 서명하는 것을 대가로, 정체불명의 상점 아가씨에게서 빌려온 「투시 렌즈」 렌즈가 끼워진 만능 안경테다. 이것만 있으면, ',
      me.get_colored_name(),
      '은(는) 상대의 모든 패를 꿰뚫어 볼 수 있어, 도박판에서 완벽한 무패의 전설을 쓸 수 있다.',
    ]);
    await era.printAndWait([
      '물론 이 안경에는 소소한 부가 기능도 있었다. 예를 들어, 이 안경을 쓰면 옷을 투시하여 사람의 알몸을 직접 볼 수 있다. 덕분에 지금 ',
      me.get_colored_name(),
      '은(는) ',
      sys_get_colored_callname(0, 304),
      '의 아담한 가슴을 선명하게 볼 수 있었지만——',
    ]);
    await era.printAndWait([
      '하지만 그딴 건 아무래도 상관없다! 여자의 몸이 카드 게임보다 중요할 리가 없잖아!?',
    ]);
    await era.printAndWait([
      '들리는 소문으론 골드 쉽이 모 명문가의 파티에서 하룻밤 사이에 121억을 따냈다 하던데, 내가 교직원 도박판에서 「20000」우마코인을 따는 것쯤이야 일도 아니지!',
    ]);
    await era.printAndWait(['오늘, 트레센 타짜의 전설이 학원에 널리 퍼질지어다!']);
    await era.printAndWait(['그런 생각을 하며 당신은 자신만만하게 첫 패를 받아들었다!']);

    era.drawLine({ content: '세 여신상 앞'});
    await acute.say_and_wait([
      '그래서, ',
      me.actual_name,
      '. 자넨 무슨 잘못을 했길래 세 여신상에 매달려서 조리돌림을 당하고 있는 겐가?',
    ]);
    await era.printAndWait([
      '트레센의 안뜰, ',
      acute.get_colored_name(),
      '는 분수대 옆에 앉아, 얇은 옷차림으로 세 여신상에 대롱대롱 매달려 있는 ',
      me.get_colored_name(),
      '을(를) 올려다보았다.',
    ]);
    await me.say_and_wait([
      '……투시 안경을 쓴 걸 ',
      sys_get_colored_callname(0, 301),
      '에게 들켰거든.',
    ]);
    await acute.say_and_wait(['에구~ 그랬구먼~']);
    await era.printAndWait([
      acute.get_colored_name(),
      '는 여느 때처럼 부드럽고 여유로운 말투로 말했다.',
    ]);
    await era.printAndWait(['……사실, 원래는 모든 게 순조로웠다.']);
    await era.printAndWait([
      '투시 안경 덕분에, ',
      me.get_colored_name(),
      '은(는) 도박판에서 무패 행진을 이어갔다. 몇 판을 내리 이기면서, ',
      me.get_colored_name(),
      '은(는) 돈을 쓸어 담았고, 목표였던 「20000」우마코인까지 정말 한 걸음밖에 남지 않았었다.',
    ]);
    await era.printAndWait([
      '——',
      tokino.get_colored_name(),
      '가 오기 전까지는.',
    ]);

    era.drawLine({ content: '트레센 교직원실'});
    await tokino.used_to_say_and_wait([
      '헤에…… 1980년 서독에서 수입된 최신 기술, 투시가 가능한 X선 안경이라……',
    ]);
    await me.used_to_say_and_wait(['헉!?']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 기겁하며 고개를 돌리자, 언제 왔는지 ',
      tokino.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 등 뒤에 서 있었다.',
    ]);
    await tokino.used_to_say_and_wait([
      '안심하세요. 폭로할 생각은 없으니까요, ',
      me.actual_name,
      '……',
    ]);
    await era.printAndWait([
      tokino.get_colored_name(),
      '는 싸늘한 목소리로 말하며, ',
      me.get_colored_name(),
      '의 어깨를 가볍게 두드렸다; 하지만 그 순간, ',
      me.get_colored_name(),
      '은(는) 보이지 않는 거대한 손이 ',
      me.get_colored_name(),
      '을(를) 의자에 짓누르는 듯한 압박감을 느꼈다.',
    ]);
    await tokino.used_to_say_and_wait([
      '제가 전부터 여러분께 말씀드렸죠. 트레센 안에서 트럼프를 치는 건 괜찮지만, 돈을 거는 도박은 안 된다고요. 다들 참 말을 안 들으시네요…… 그래도 뭐 잘 됐네요. 이번 일을 교훈 삼아 앞으로 학원에서 도박하는 사람은 없겠죠……',
    ]);
    await tokino.used_to_say_and_wait([
      '그렇지만 말이에요, 당신이 이렇게나 많은 돈을 딴 게 소문나면 좀 곤란하잖아요…… 마침 최근에 ',
      sys_get_colored_callname(301, 302),
      ' 쪽 예산이 좀 펑크가 나서요. 그러니—— ',
      me.actual_name,
      ', 저랑 한 판 승부해보시겠어요?',
    ]);

    era.drawLine({ content: '세 여신상 앞'});
    await acute.say_and_wait([
      '음…… 내 생각에 ',
      sys_get_colored_callname(100, 301),
      '의 의도는, ',
      callname,
      '이 딴 돈을 도박이라는 형태를 빌려 고스란히 뱉어내게 하려는 거였던 거 같네만……',
    ]);
    await era.printAndWait([
      '……그렇다, ',
      me.get_colored_name(),
      '도 그렇게 생각한다.',
    ]);
    await era.printAndWait([
      '불법으로 얻은 돈을 포기하고 명예를 지키느냐, 아니면 ',
      tokino.get_colored_name(),
      '가 부정행위를 까발리게 두어 돈과 명예를 모두 잃느냐…… ',
      me.get_colored_name(),
      '은(는) 후자를 택할 만큼 미치진 않았다.',
    ]);
    await acute.say_and_wait([
      '그럼, ',
      me.actual_name,
      '은(는) 어쩌다 동상에 매달리게 된 겐가?',
    ]);
    await era.printAndWait(['그게 말이지……']);

    era.drawLine({ content: '트레센 교직원실'});
    await era.printAndWait([
      me.get_colored_name(),
      '에게 돈이 「3000」우마코인 밖에 남지 않았을 때, ',
      tokino.get_colored_name(),
      '가 먼저 판을 멈추었다.',
    ]);
    await tokino.used_to_say_and_wait([
      '후유…… 여기까지 하죠. 참 땀을 쥐게 하는 훌륭한 승부였네요. 수고하셨어요.',
    ]);
    await me.used_to_say_and_wait(['어라? 계속 안 하나요?']);
    await tokino.used_to_say_and_wait([
      '안 해요. 저도 뭐 악마는 아니니까요. 씨를 말려버릴 생각은 없답니다—— 게다가, 당신도 이 돈을 쓸 데가 있을 거 아니에요?',
    ]);
    await era.printAndWait([
      tokino.get_colored_name(),
      '가 고개를 젓자, 초록색 모자가 좌우로 흔들렸다. ',
      acute.sex,
      '는 검지를 입가에 가져다 대고 교활한 미소를 지었다.',
    ]);
    await era.printAndWait([
      '……그나저나, ',
      acute.sex,
      '는 대체 어떻게 ',
      me.get_colored_name(),
      '이(가) 지금 당장 돈이 필요하단 걸 알고 있는 거지?',
    ]);
    await tokino.used_to_say_and_wait(['뭐, 제 정보망을 얕보지 마시죠.']);
    await era.printAndWait([acute.sex, '는 웃으며 말했고, 더 이상 자세히 설명할 생각은 없어 보였다.']);
    await tokino.used_to_say_and_wait([
      '그런데 말이에요, 그 서독의 최첨단 물건은 대체 어디서 구한 거죠? 이런 X선 안경은 옛날 옛적에 단종된 걸로 아는데요……',
    ]);
    await me.used_to_say_and_wait([
      '아니…… 애초에 이거 X선 안경이 아니에요. 투시 렌즈를 끼워 넣은 만능 안경테라……',
    ]);
    await tokino.used_to_say_and_wait(['……투시 렌즈요?']);
    await me.used_to_say_and_wait([
      '네, 간단히 말해서 이 안경테에 렌즈를 끼우면 뭘 보든 투시가 되는 효과가 있어요. 심지어 옷도 예외는……',
    ]);
    await era.printAndWait(['………………']);
    await era.printAndWait([
      '잠깐, 방금 무심결에 뭐라고 떠든 거지?',
    ]);
    await tokino.used_to_say_and_wait([
      '……옷도 예외가 아니라면, 그 말은 즉 당신 지금 누가 됐든 다 알몸으로 보인다는…… 소리네요?',
    ]);
    await me.used_to_say_and_wait(['…………']);
    await era.printAndWait([
      '칠흑 같은 기운이 ',
      me.get_colored_name(),
      '을(를) 덮치기 시작했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 예민한 감각으로 ',
      me.get_colored_name(),
      '의 머리 위에 「危」이라는 글자가 아른거리는 것을 눈치챘다. 보이지 않는 거대한 손이 완전히 ',
      me.get_colored_name(),
      '을(를) 짓뭉개버리기 전에, 뭔가를 해야만 한다, 어떻게든 조치를 취해야만 한다.',
    ]);
    await era.printAndWait([
      '역시 사과할까? 무릎 꿇고 싹싹 빌면서 사과할까? 지금? 바로 이 자리에서?',
    ]);
    await era.printAndWait([
      '아니, 분명 무슨 다른 방법이 있을 거야. 이 위기를 모면할 더 그럴듯한 변명거리가 틀림없이……',
    ]);
    await era.printAndWait([
      '——아 맞다, ',
      me.get_colored_name(),
      '은(는) 떠올렸다. 어떻게 이렇게 중요한 걸 잊고 있었지? ',
      tokino.get_colored_name(),
      '도 ',
      me.get_colored_name(),
      '의 이 말을 들으면 분명 용서해 줄 것이다.',
    ]);
    await me.used_to_say_and_wait([
      '……안심해 주세요, ',
      sys_get_colored_callname(0, 301),
      '. 전 당신의 알몸 따위엔 관심 없었으니까요.',
    ]);
    await me.used_to_say_and_wait([
      '그야, 전 카드쟁이잖아요. 카드쟁이라면 자고로 집중력은 카드에만 쏠려 있어야——',
    ]);
    await me.used_to_say_and_wait(['아아아아아아아아아아아아악———']);
    await era.printAndWait([
      '……정신을 차렸을 때, 몸은 이미 ',
      tokino.get_colored_name(),
      '의 샌드백이 된 후였다.',
    ]);

    era.drawLine({ content: '세 여신상 앞'});
    await acute.say_and_wait([
      '어머…… 알몸을 훔쳐보는 안경을 썼으면서, 알몸에 관심 없다고 둘러대다니. 감옥에 가는 건 둘째 치고, 질이 아주 안 좋은 핑계구먼, ',
      callname,
      '.',
    ]);
    await me.say_and_wait(['뭐…… 확실히 그렇긴 하지——']);
    await era.printAndWait([
      '변명의 여지 없이, 아무리 생각해도 ',
      me.get_colored_name(),
      '이(가) 먼저 잘못을 저질렀다; 그러니 세 여신상에 매달려 반성하라는 처분도 군말 없이 받아들일 수밖에 없었다.',
    ]);
    await era.printAndWait(['하지만, 그래도 말이지……']);
    await me.say_and_wait([
      acute.get_colored_name(),
      ', 시간이 꽤 늦었는데 기숙사에 안 돌아가도 돼? 기숙사 통금 시간도 있을 텐데……',
    ]);
    await acute.say_and_wait(['음……']);
    await era.printAndWait([
      acute.get_colored_name(),
      '는 고개를 들어 밤하늘을 바라보았다. 구름 한 점 없는 밤이었지만, 도시의 번화한 불빛에 가려 별빛은 거의 보이지 않았다.',
    ]);
    await acute.say_and_wait([
      callname,
      '을 혼자 두자니, 마음이 좀 안 놓여서 말이지……',
    ]);
    await me.say_and_wait(['……그래.']);
    await me.say_and_wait('난 괜찮으니까, 어서 돌아가서 푹 쉬어', true);
    await era.printAndWait([
      '……이렇게 말하며 위로해 주고 싶었지만 어쩐지 ',
      me.get_colored_name(),
      '이(가) 입을 열려던 찰나, 어떤 공허함과 가슴 저림이 불쑥 ',
      me.get_colored_name(),
      '의 목구멍을 메웠다.',
    ]);
    await era.printAndWait([
      '세 여신상에 매달려, 저 높은 곳에서 쓸쓸해 보이는 ',
      acute.get_colored_name(),
      '의 뒷모습을 바라보고 있자니…… 왠지 모르게 ',
      me.get_colored_name(),
      '은(는) 숨이 턱 막히고 가슴이 아려오는 것을 느꼈다.',
    ]);
    await me.say_and_wait(['……저기, ', sys_get_colored_callname(0, 100), '.']);
    await acute.say_and_wait(['응?']);
    await me.say_and_wait(['설 연휴 때 말이야…… 같이 오키나와로 여행 안 갈래?']);
    await acute.say_and_wait(['……오키나와 여행?']);
    await era.printAndWait([
      acute.sex,
      '는 고개를 돌려, 동상 위에 매달려 있는 ',
      me.get_colored_name(),
      '을(를) 쳐다보았다.',
    ]);
    await me.say_and_wait([
      '그래, 수중에 남은 『3000』우마코인으로 비행기 표 끊어서 가는 1박 2일 오키나와 여행…… 응—— 이 정도면 충분하겠지?',
    ]);
    await acute.say_and_wait(['……왜 나를 굳이 데려가려는 겐가, ', callname, '?']);
    await me.say_and_wait([
      '그게…… 한순간 귀신에 홀린 건지, 아니면 애초부터 그럴 속셈이었는지…… 어쩌면 처음부터 ',
      acute.get_colored_name(),
      ' 널 위해서 도박판에 뛰어든 걸지도 모르겠어.',
    ]);
    await me.say_and_wait([
      '『20000』우마코인을 따서, ',
      acute.get_colored_name(),
      '네 앞에 딱 가져다준 다음 ',
      acute.get_colored_name(),
      '네가 깜짝 놀라며 『오오~』 하고 박수 치는 걸 보고 싶었거든……',
    ]);
    await me.say_and_wait([
      acute.get_colored_name(),
      ' 네가 기뻐하는 모습도 보고 싶었고, 네게 칭찬도 받고 싶었어…… 하하, 참 이상하지?',
    ]);
    await acute.say_and_wait(['……']);
    await acute.say_and_wait(['……그런, 가?']);
    await era.printAndWait([
      acute.get_colored_name(),
      '는 고개를 푹 숙였다. 여전히 온화한 미소를 띠고 있었지만, 안색은 어쩔 수 없이 조금 어두워졌다.',
    ]);
    await era.printAndWait([
      '달빛이 ',
      acute.sex,
      '를 비추자, 문득, ',
      acute.get_colored_name(),
      '는 평소의 여유로움을 잃고, 마치 ',
      acute.get_teen_sex_title(),
      '처럼 연약해 보였다.',
    ]);
    await me.say_and_wait(['……미안, 내가 널 슬프게 한 거야?']);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 무심코 사과를 건넸지만, ',
      acute.get_colored_name(),
      '는 고개를 살레살레 저었다.',
    ]);
    await acute.say_and_wait(['아니, 오히려 반대지. 사실 속으론 무척 기쁘단다.']);
    await acute.say_and_wait([
      '하지만 말이야, 오키나와 여행은…… 사양하는게 좋을 것 같구먼. 나는 더운 곳에는 쥐약이라~',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      '는 자리에서 일어나, 분수대를 넘어 단상 위로 성큼성큼 다가가, 동상, 즉 ',
      me.get_colored_name(),
      '의 바로 앞까지 왔다.',
    ]);
    await me.say_and_wait(['……너무 더운 곳은 싫어?']);
    await acute.say_and_wait([
      '사실 비행기를 타는 것도 별로 좋아하지 않는게야. 하늘을 나는 쇳덩어리 새라니, 생각만 해도 무서워서 말이지…… 그러니——',
    ]);
    await acute.say_and_wait([callname, ', 자기 몸부터 잘 챙기도록 혀.']);
    await era.printAndWait([
      '자신의 짙은 갈색 목도리를 풀어, ',
      acute.get_colored_name(),
      '는 그것을 ',
      me.get_colored_name(),
      '의 목에 둘러주었다.',
    ]);
    await era.printAndWait(['반으로 접고, 뒤집고, 한 바퀴 돌려, 틈새로 쏙 집어넣고…… 순식간에 목도리가 예쁘게 매어졌다.']);
    await acute.say_and_wait(['자, 다 됐구먼……']);
    await era.printAndWait([
      acute.get_colored_name(),
      '의 손길이 ',
      me.get_colored_name(),
      '의 뺨을 어루만졌다.',
    ]);
    await era.printAndWait([acute.sex, '의 손바닥은 무척이나 차가웠다.']);
    await acute.say_and_wait(['다음부턴, 이런 짓 하면 안 된단다, ', callname, '.']);
    await era.printAndWait(['………………']);
    await era.printAndWait(['……………']);
    await era.printAndWait(['………']);
    await era.printAndWait(['이상하다.']);
    await era.printAndWait(['어째서 갑자기 눈물이 멈추질 않는 걸까?']);

    era.drawLine();
    await era.printAndWait(['다시 눈을 떴을 때는 이미 다음 날 아침이었다.']);
    await era.printAndWait(['옷매무새가 흐트러진 채 창가에 누워 있었고, 창밖으로는 새하얀 눈송이가 흩날리고 있었다.']);
    await era.printAndWait(['자리에서 일어났지만 왠지 머릿속이 몽롱했다.']);
    await era.printAndWait([
      '어제 있었던 일은 어쩐지 희미했다. 그저 마지막에 ',
      me.get_colored_name(),
      '이(가) 따뜻한 꿈속으로 빠져들었다는 것밖엔 기억나지 않았다.',
    ]);
    await era.printAndWait([
      '일어나 평소처럼 세면을 하고, 밥을 먹고, 트레이닝 계획을 세우고, 트레이닝 준비를 했다. 수수께끼 실험녀의 강제 약물 실험을 받고, 박살 난 투시 안경 렌즈 배상금 「3000」우마코인의 빚을 갚아나갔다.',
    ]);
    await era.printAndWait(['뜻밖에도 무척 기분이 상쾌했다.']);
    await era.printAndWait([
      '그러다 안뜰을 지나던 중, 마른 나무 구멍 안에 웅크리고 앉아 있는 ',
      acute.get_colored_name(),
      '를 발견했다.',
    ]);
    await era.printAndWait(['하늘에선 여전히 눈송이가 흩날리고 있었다.']);
    await era.printAndWait(['발뒤꿈치를 들고, 몰래몰래, 살금살금, ']);
    await era.printAndWait(['뒤에서 다가가——']);

    flags.wait_flag = get_attr_and_print_in_event(0, [0, 0, 0, 1], 0);
  };
};