// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103700-Eishin-Flash/edu-37"),

  // [번역 대상] arim_kin_lose_c
  arim_kin_lose_c: (() => {
    const title = "도전의 길 · 4";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait("관중 A", "정말 멋진 레이스였어.");
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "맞아, 과연 아리마 기념이야. 티켓값이 전혀 아깝지 않네.",
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `長く出ていなかった${flash.uma_sex_title}たちの再登場だけでも興奮なのに、${
          flash.couple_title
        }がこんな走りをするとは。`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 B`,
        `後輩との差は歴然だな。来年も${flash.couple_title}が出たら、クラシック級はどうするんだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `클래식급 하니까 말인데, 봤어? 에이신 플래시의 이번 레이스 활약.`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "응, 객관적으로 보면 정말 훌륭했어. 다만 더 강력한 라이벌을 만난 게 아쉬울 뿐이지.",
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `정말 아쉽지만, ${flash.sex}의 성장은 아직 끝나지 않은 것 같아. 그렇게 생각하니 내년에는 어떻게 될지 정말 기대되는데.`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "맞아, 내년의 모습이 벌써부터 기다려지는걸.",
      );
      era.drawLine();
      await era.printAndWait(
        `에이신 플래시가 레이스 전에 말했던 대로, 지금까지 수많은 도전을 극복해 온 ${flash.sex}의 실력은 이제 결코 무시할 수 없는 수준이었다.`,
      );
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton("「수고했어, 정말 뛰어난 활약이었어.」", 1);
      await era.input();
      await era.printAndWait(
        "실전에서 아직 선배들과의 격차가 조금 존재하긴 했지만, 충분히 납득할 수 있는 범위 안이었다.",
      );
      await flash.say_and_wait(
        "후우…… 아주 상쾌한 레이스였어요. 비록 패배라는 결과는 피하지 못했지만요.",
      );
      await era.printAndWait(
        `내년에 다시 한번 성장할 ${flash.sex}이라면 진정한 의미에서의 대등한 승부를 벌일 수 있을 것이다.`,
      );
      await flash.say_and_wait(
        "그래도 재팬 컵과 아리마 기념, 이 두 레이스를 통해 제 성장을 확실히 실감할 수 있었습니다.",
      );
      await flash.say_and_wait(
        "다음번에는 저를 추월하는 게 그렇게 쉽지만은 않을 거예요.",
      );
      await era.printAndWait('目の前の人も、同じことを考えていた。');
      await era.printAndWait(
        `덕분에 ${you.name}은(는) 에이신 플래시의 표정이 그리 낙담해 보이지 않으며, 오히려 은은하게 아쉬움이 남는 듯한 열기를 띠고 있음을 알 수 있었다.`,
      );
      await flash.say_and_wait(
        "뭐, 어쨌든 아리마 기념이 끝났으니 올해의 계획도 공식적으로 막을 내린 셈이네요.",
      );
      await era.printAndWait(
        `말을 마치며 에이신 플래시는 의욕 넘치게 고개를 끄덕였다. 레이스에서 자극을 받은 ${flash.sex}는 벌써부터 3년 차 계획을 실행하고 싶어 못 견디는 듯했다.`,
      );
      era.printButton("「돌아가면 함께 미래를 계획해보자.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] arim_kin_win_c
  arim_kin_win_c: (() => {
    const title = "도전의 길 · 4";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait("관중 A", "정말 멋진 레이스였어.");
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "맞아, 과연 아리마 기념이야. 티켓값이 전혀 아깝지 않네.",
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `長く出ていなかった${flash.uma_sex_title}たちの再登場だけでも興奮なのに、${
          flash.couple_title
        }がこんな走りをするとは。`,
      );
      await you.say_as_passer_by_and_wait(
        "관중 B",
        "그 얘길 하자면, 에이신 플래시가 더 대단했지.",
      );
      await you.say_as_passer_by_and_wait(
        `관중 B`,
        `아직 성장이 다 끝나지 않은 클래식급 ${flash.uma_sex_title}이면서도, 레이스 도중 이미 명성이 자자한 선배들을 차례차례 제쳤잖아.`,
      );
      await you.say_as_passer_by_and_wait(
        `관중 A`,
        `정말이지 엄청난 실력이네. 3년 차에 ${flash.sex}가 보여줄 모습이 더욱 기대되는걸.`,
      );
      era.drawLine();
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton("「수고했어, 정말 뛰어난 활약이었어.」", 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시가 레이스 전에 말했던 대로, 지금까지 수많은 도전을 극복해 온 ${flash.sex}의 실력은 이제 결코 얕잡아 볼 수 없는 수준이었다.`,
      );
      await era.printAndWait(
        `심지어 고학년 선배들을 상대로도 ${flash.sex}는 대등하게 맞서 싸웠고, 마침내 승리까지 거머쥐었다.`,
      );
      await flash.say_and_wait(
        "후우…… 아주 상쾌한 레이스였어요. 과정은 무척 험난했지만, 결국 승리를 얻어냈습니다.",
      );
      await era.printAndWait(
        `에이신 플래시는 깊은 숨을 내쉬었고, 큰 싸움 끝에 원하는 결과를 얻은 만족감이 ${flash.sex}의 얼굴에 떠올랐다.`,
      );
      await flash.say_and_wait(
        "재팬 컵과 아리마 기념, 이 두 레이스를 통해 제 성장을 분명히 느낄 수 있었어요.",
      );
      await flash.say_and_wait(
        "그렇다는 건 올해의 계획은 성공적으로 마무리된 셈이네요.",
      );
      await era.printAndWait(
        `말을 마치며 에이신 플래시는 의욕 넘치게 고개를 끄덕였다. 레이스에서 자극을 받은 ${flash.sex}는 벌써부터 3년 차 계획을 실행하고 싶어 못 견디는 듯했다.`,
      );
      era.printButton("「돌아가면 함께 미래를 계획해보자.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_arim_kin_c
  before_arim_kin_c: (() => {
    const title = "도전의 길 · 3";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        "아리마 기념. 한 해를 마무리하는 큰 축제로서, 세간에는 『1년에 단 한 레이스를 본다면 그것은 아리마 기념이다』라는 말이 돌 정도다.",
      );
      await era.printAndWait(
        `팬 투표로 출주자가 결정되는 규칙 덕분에, 올해 눈부신 활약을 펼친 ${flash.uma_sex_title}만이 이 무대에 설 자격을 얻는다.`,
      );
      await era.printAndWait(
        "그리고 일본 더비 우승자인 에이신 플래시가 그 명단에 포함된 것은 당연한 일이었다.",
      );
      await you.say_as_passer_by_and_wait(`관객A`, `어이, 이거 봤어?`);
      await you.say_as_passer_by_and_wait(
        "관객B",
        "말도 안 돼. 스페셜 위크랑 젠노 롭 로이가 다시 나오는 것만으로도 대단한 일이라고 생각했는데.",
      );
      await you.say_as_passer_by_and_wait(
        "관객A",
        "참가자 중에 에어 그루브랑 후지 키세키까지 있어!",
      );
      await you.say_as_passer_by_and_wait(
        "관객B",
        "아무리 아리마 기념이라지만 진용이 너무 화려한 거 아냐……?",
      );
      await you.say_as_passer_by_and_wait(
        `관객A`,
        `지금도 그렇고 지난번 재팬 컵도 그렇고. 유명한 ${flash.uma_sex_title}들이 연달아 복귀하다니.`,
      );
      await you.say_as_passer_by_and_wait(
        "관객A",
        "마치 앞으로 엄청난 일이 벌어질 것만 같은 기분이라 정말 기대돼.",
      );
      await you.say_as_passer_by_and_wait(
        "관객B",
        "하지만 그게 클래식급 아이들에게 정말 좋은 일일까?",
      );
      era.drawLine();
      await flash.say_and_wait("정말…… 놀랍네요.");
      await era.printAndWait(
        "레이스 전, 대기실. 에이신 플래시는 이번 레이스 대진표를 보며 미간을 살짝 찌푸렸다.",
      );
      await flash.say_and_wait(
        'スペシャルウィークさんとゼンノロブロイさんだけで、このレース最強の相手だと思っていました。',
      );
      await flash.say_and_wait(
        "에어 그루브 양과 후지 키세키 양까지 참여할 줄은 몰랐어요.",
      );
      era.printButton("「레이스가 매우 험난할 것으로 예상되네.」", 1);
      await era.input();
      await flash.say_and_wait(
        "그렇네요. 하지만 애초에 도전하는 마음으로 참가한 거니까요. 강한 상대를 많이 만날수록 제가 얻는 수확도 그만큼 커질 거예요.",
      );
      await flash.say_and_wait("하물며……");
      await era.printAndWait(
        "에이신 플래시는 주먹을 꽉 쥐며 두려움 없는 눈빛을 보였다.",
      );
      await flash.say_and_wait(
        "이미 수많은 장애물을 함께 뛰어넘어 온 우리의 실력도 결코 얕볼 수준은 아니니까요.",
      );
      era.printButton(`「${flash.couple_title}に、お前の力を見せろ。」`, 1);
      await era.input();
      await flash.say_and_wait("네!");
      await flash.say_and_wait("정점에 도달할 때까지, 계속해서 달려나가겠어요.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_arim_kin_s
  before_arim_kin_s: (() => {
    const title = "미래의 일 · 4";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "트윙클 시리즈 매년 최고의 열기를 자랑하는 행사, 아리마 기념이 오늘 개최된다.",
      );
      await flash.say_and_wait("후우…… 레이스가 곧 시작되겠네요.");
      await era.printAndWait(
        `레이스 전 대기실. 에이신 플래시는 시간을 확인한 뒤 자리에서 일어나 ${you.name}에게 인사를 건넸다.`,
      );
      await flash.say_and_wait(
        "후후. 그러고 보니 처음이네요. 자신의 꿈을 전제로 하지 않고 레이스에 참가하는 건.",
      );
      await era.printAndWait(
        `그러더니 이내 ${flash.sex}는 장난스럽게 미소를 지어 보였다.`,
      );
      era.printButton("「한 달간의 휴가는 어땠어?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 어깨를 두드리며 다정하게 물었다.`,
      );
      await era.printAndWait(
        '夢を果たしたあと、レースへの執念が少し薄れたのか。エイシンフラッシュは当初の予定どおりジャパンカップへは出ず、遠路はるばる来た両親と、この一ヶ月を日本各地の旅に使っていた。',
      );
      await flash.say_and_wait('はい。体が、すっかりほぐれた気がします。');
      await era.printAndWait("에이신 플래시는 고개를 끄덕이며 시선을 멀리 옮겼다.");
      await flash.say_and_wait(
        "아마 지금 부모님께서도 집에서 이 아리마 기념의 결과를 지켜보고 계시겠죠.",
      );
      era.printButton("「부모님이 보시는 앞에서 다시 한번 승리를 거머쥐자고.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
      await era.printAndWait(
        `${flash.sex}는 자신 있게 대답하고는 문밖으로 향했다.`,
      );
      await flash.say_and_wait(`그러고 보니, ${callname}.`);
      era.printButton("「왜 그래?」", 1);
      await era.input();
      await era.printAndWait(
        `하지만 완전히 떠나기 전, ${flash.sex}는 ${you.name}에게 아직 할 말이 남은 듯했다.`,
      );
      await flash.say_and_wait(
        "다시 한번 말씀해 주시겠어요? 작년 사츠키상 전, 대기실에서 제게 해주셨던 그 말을요.",
      );
      era.printButton("「사츠키상 때 한 말?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 눈을 깜빡이다가 이내 에이신 플래시가 무엇을 말하는지 알아차렸다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) ${flash.sex}에게 해준 말은 무수히 많았지만, 격려든 이정표든 지금 이 순간 가장 어울리는 말은 오직 이것뿐이었다.`,
      );
      era.printButton("「해야 할 일을 하고……」", 1);
      await era.input();
      await flash.say_and_wait("할 수 있는 힘을 다해라.");
      await flash.say_and_wait("후후후.");
      era.printButton("「하하.」", 1);
      await era.input();
      await era.printAndWait(
        `문장 이어 말하기에 성공하자, ${you.name}와 플래시는 동시에 웃음을 터뜨렸다.`,
      );
      await flash.say_and_wait("그럼, 다녀오겠습니다.");
      await era.printAndWait(
        `그렇게 유쾌한 분위기 속에서 ${flash.sex}는 힘차게 발걸음을 내디뎌 경기장으로 향했다.`,
      );
      era.printButton("「파이팅!」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 떠나가는 ${flash.sex}의 뒷모습을 보며 힘차게 손을 흔들었다.`,
      );
      await era.printAndWait("참으로 아름다운 광경이었다.");
      await era.printAndWait(
        `약속한 대로, ${you.name}은(는) 서로를 지켜보는 이 관계가 앞으로도 오랫동안 계속될 것임을 믿어 의심치 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_begin_race
  before_begin_race: (() => {
    const title = "모든 일의 시작 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "드디어 에이신 플래시가 데뷔할 때가 왔다.",
      );
      await flash.say_and_wait("후우…… 레이스 시작까지 앞으로 15분 남았네요.");
      await era.printAndWait(
        `대기실 안, ${you.name}은(는) 에이신 플래시가 레이스를 위해 마지막 준비를 하는 모습을 지켜보았다.`,
      );
      era.printButton("「긴장돼?」", 1);
      await era.input();
      await flash.say_and_wait("네.");
      await era.printAndWait(
        `예상과는 조금 다르게, 에이신 플래시는 고개를 끄덕였다.`,
      );
      await flash.say_and_wait("긴장되는 감정은 분명 피할 수 없는 것이니까요.");
      await flash.say_and_wait(
        "앞으로 마주할 레이스는 트윙클 시리즈라는 길에 발을 들일 수 있을지를 결정하는 데뷔전, 그야말로 모든 일의 시작이니까요.",
      );
      await flash.say_and_wait(
        "아무리 마음을 억누르려 해도, 분명 조금은 동요가 생기기 마련이겠죠?",
      );
      era.printButton("「자연스러운 현상이야.」", 1);
      await era.input();
      await flash.say_and_wait(
        "맞아요. 그러니 긴장이 앞으로 일어날 일에 영향을 주지는 않을 거예요. 하물며……",
      );
      await era.printAndWait(
        `그렇게 말하며, ${you.name}은(는) 에이신 플래시의 얼굴에 옅은 미소가 번지는 것을 보았다.`,
      );
      await flash.say_and_wait(
        "모든 것이 계획대로 진행되고 있잖아요, 그렇죠?",
      );
      era.printButton("「!」", 1);
      await era.input();
      await flash.say_and_wait(
        `달리기 위해 해온 트레이닝도, 레이스를 위해 공부한 전략도. 저와 ${callname}은 담당 계약을 맺은 그 순간부터 오늘까지 정말 많은 일을 함께해 왔습니다.`,
      );
      await flash.say_and_wait(
        "그런 관점에서 보면 데뷔전도 그저 우리 성과를 확인하는 하나의 테스트일 뿐이에요.",
      );
      era.printButton("「그렇구나.」", 1);
      await era.input();
      await era.printAndWait(
        `자신만만한 표정의 에이신 플래시의 어깨를 ${you.name}은(는) 두드리며 격려의 눈빛을 보냈다.`,
      );
      era.printButton("「그럼 네 성적을 경기장의 모든 이에게 보여주자고.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
      await era.printAndWait(
        `에이신 플래시는 힘차게 고개를 끄덕였고, 고양된 투지가 ${flash.sex}의 몸에서 뿜어져 나왔다.`,
      );
      await flash.say_and_wait("레이스 시작까지 10분, 그럼 다녀올게요.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_japa_cup_c
  before_japa_cup_c: (() => {
    const title = "도전의 길 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "재팬 컵. 트윙클 시리즈 최고 영예를 상징하는 레이스 중 하나답게 쟁쟁한 실력자들이 대거 모였다.",
      );
      await you.say_as_passer_by_and_wait(
        `관객A`,
        "이번 재팬 컵 대진표 봤어?",
      );
      await you.say_as_passer_by_and_wait("관객B", "응응, 정말 예상 밖인걸.");
      await you.say_as_passer_by_and_wait(
        `관객A`,
        `ゼンノロブロイ、スペシャルウィーク……しばらく出ていなかった${flash.uma_sex_title}なのに、このレースでまた${
          flash.couple_title
        }の走りが見られるとは。`,
      );
      await you.say_as_passer_by_and_wait(
        `관객B`,
        `それだけじゃない。すごいのは、${flash.couple_title}、前にジャパンカップを勝ってるってことだ。`,
      );
      await you.say_as_passer_by_and_wait(
        "관객B",
        "이런 우연이라니, 마치 미리 약속이라도 한 것 같아.",
      );
      await you.say_as_passer_by_and_wait(
        "관객A",
        "하지만 그렇게 되면 경험 차이가 너무 크잖아. 클래식급에게는 정말 가혹한 시련이겠어.",
      );
      era.drawLine();
      await flash.say_and_wait("재팬 컵이 곧 시작되겠네요.");
      await era.printAndWait("레이스 전, 대기실.");
      await era.printAndWait(
        "에이신 플래시는 심호흡을 하며 컨디션을 최상으로 끌어올렸다.",
      );
      await flash.say_and_wait(
        '予想どおり、出走表にはシニア級の先輩がたくさんいました。',
      );
      era.printButton("「긴장돼?」", 1);
      await era.input();
      await flash.say_and_wait("네, 아무래도 전 『도전자』니까요.");
      await era.printAndWait(
        `${flash.sex}는 고개를 끄덕였지만, ${you.name}은(는) ${flash.sex}의 눈빛에서 은근한 기대를 읽어냈다.`,
      );
      await flash.say_and_wait(
        "지난번 미스터 시비 양과의 병주에서 정말 많은 것을 배웠고 큰 도움이 되었어요. 그러니 이번 재팬 컵도 마찬가지일 거예요. 결과가 어떻든 레이스 도중에 분명 깨닫는 것이 있겠죠.",
      );
      await era.printAndWait(
        `エイシンフラッシュはやる気に満ちて言った。${flash.sex}の顔に、自信の微笑がある。`,
      );
      await flash.say_and_wait(
        "뭐, 그렇다고 해서 승리를 쉽게 양보할 생각은 전혀 없지만요.",
      );
      await flash.say_and_wait(
        "그동안 잘 쉰 덕분에 몸은 완전히 회복되었으니까요.",
      );
      era.printButton("「드디어 아무 걱정 없이 달릴 수 있겠네.」", 1);
      await era.input();
      await flash.say_and_wait(`네! 그럼 다녀올게요, ${callname}.`);
      era.printButton("「파이팅!」", 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_keis_hai
  before_keis_hai: (() => {
    const title = "뜻밖의 기쁨";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "케이세이배. 클래식 3관 중 하나인 사츠키상의 전초전으로, 사츠키상과 같은 코스, 같은 거리에서 열린다.",
      );
      await era.printAndWait(
        "그렇기에 에이신 플래시는 계획 수립 단계부터 이곳을 왕도에 오르기 위한 사전 연습 무대로 삼았고, 이는 매우 적절한 판단이었다.",
      );
      await you.say_as_passer_by_and_wait(
        "행인A",
        'ところで今日のレース、誰を本命にしてる？',
      );
      await you.say_as_passer_by_and_wait(
        "행인B",
        `え？ 聞くまでもないだろ。やっぱり${flash.sex}だよ。`,
      );
      await era.printAndWait(
        `${you.name}과(와) ${flash.sex} 모두 예상치 못했던 일이지만, 정식으로 레이스에 참여하기도 전에 뜻밖의 기쁨을 맛보게 되었다.`,
      );
      await you.say_as_passer_by_and_wait(
        "행인A",
        "그렇네, 확실히 지난번 보여준 활약도 대단했으니까.",
      );
      await you.say_as_passer_by_and_wait(
        "행인B",
        `게다가 대진표를 봐도 ${flash.sex}를 응원할 수밖에 없잖아?`,
      );
      await you.say_as_passer_by_and_wait(
        "행인A",
        `다른 아이들에게는 좀 미안한 말이지만…… 뭐, 어쨌든 이따가 같이 ${flash.sex}를 응원하자고.`,
      );
      await you.say_as_passer_by_and_wait(
        "행인B",
        "응응, 힘내라! 에이신 플래시!!",
      );
      era.drawLine({ content: "레이스 당일, 대기실" });
      await flash.say_and_wait("……설마 제가 인기 1위일 줄은 몰랐네요.");
      await era.printAndWait(
        `오늘자 신문의 레이스 예측을 보며, ${you.name}은(는) 에이신 플래시의 미간이 살짝 찌푸려진 것을 발견했다.`,
      );
      era.printButton("「기쁘지 않아?」", 1);
      await era.input();
      await flash.say_and_wait(
        "아뇨, 기쁘지 않다기보다는 정확히 말해 기분이 조금 묘하네요.",
      );
      await flash.say_and_wait(
        "제가 인기 1위가 된 건, 다른 참가자들이 그다지 신뢰받지 못하고 있다는 점이 크니까요……",
      );
      era.printButton("「하지만 반대로 말하면, 그만큼 사람들이 너에게 기대를 걸고 있다는 증거 아닐까?」", 1);
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `${you.name}의 말에 에이신 플래시는 몇 초간 침묵했다. 그리고 이내 천천히 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        "선생님 말씀이 맞아요. 스스로의 능력이 뛰어나지 않다면 타인의 시선을 끌 수도 없었겠죠.",
      );
      await flash.say_and_wait(
        "그러니 이 기대가 실망으로 바뀌지 않도록, 전력을 다해 보답해야겠어요.",
      );
      await era.printAndWait(
        `そう言って、エイシンフラッシュの顔は真剣になった。${flash.sex}がファンの期待を重く見ているのが、${you.name} にはわかった。`,
      );
      await flash.say_and_wait("……그뿐만 아니라, 저 자신에게도 보답해야 해요.");
      await flash.say_and_wait(
        "케이세이배와 사츠키상은 코스와 거리가 같습니다. 즉, 이 레이스에서조차 만족스럽지 못한 결과를 낸다면 앞으로의 길은 더욱 험난해지겠죠.",
      );
      era.printButton("「할 일을 다하고, 스스로에게 부끄럽지 않게.」", 1);
      await era.input();
      await flash.say_and_wait("네! 선생님 말씀이 옳아요.");
      await flash.say_and_wait(
        "제가 할 수 있는 모든 것을 최선으로 해낸다면, 합당한 결과는 자연스럽게 제 손에 들어오겠죠.",
      );
      await flash.say_and_wait(`후우…… 좋아요! 다녀올게요, ${callname}.`);
      era.printButton("「파이팅!」", 1);
      await era.input();
      await era.printAndWait(
        "말을 마친 에이신 플래시는 자신감 넘치는 모습으로 경기장으로 향했다.",
      );
      await era.printAndWait(
        `${you.name}은(는) 떠나가는 ${flash.sex}의 뒷모습을 보며, 적어도 이번 레이스에서 ${flash.sex}의 활약은 매우 대단할 것이라 확신했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_kiku_sho
  before_kiku_sho: (() => {
    const title = "국화상을 향해";
    /** @param {CharaTalk} flash エイシンフラッシュ */
    const f = async (flash) => {
      await flash.say_and_wait("클래식 3관의 마지막 레이스— 국화상.");
      await flash.say_and_wait(
        "한때 목표에서 제외하기도 했었지만, 결국 출주하게 되었네요.",
      );
      era.printButton("「몸이 예상보다 빨리 회복되어서 정말 다행이야.」", 1);
      await era.input();
      await flash.say_and_wait("네.");
      await flash.say_and_wait(
        "하지만 지금은 새로운 목표를 향해 노력하고 있으니까요.",
      );
      await flash.say_and_wait(
        "더 이상 클래식 3관에 집착할 필요는 없어요. 국화상도 다른 레이스와 다를 바 없죠.",
      );
      await flash.say_and_wait(
        "그러니 제가 할 일도 평소와 같습니다.",
      );
      await flash.say_and_wait(
        "모든 것을 완벽하게 해내고, 자연스럽게 따라올 결과를 받아들이는 것뿐이에요.",
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_sank_hai
  before_sank_hai: (() => {
    const title = "도전의 길 · 5";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "봄 시니어 3관의 첫 번째 관문— 오사카배가 곧 시작된다.",
      );
      await flash.say_and_wait(
        "그럼 레이스 시작 전에 주의해야 할 상대를 다시 한번 확인해 볼까요.",
      );
      await era.printAndWait("레이스 전, 대기실.");
      await era.printAndWait("에이신 플래시는 출주 명단을 꺼내 들었다.");
      await flash.say_and_wait(
        `우선 후지 키세키 양입니다. 오사카배가 ${flash.sex}가 가장 잘하는 거리는 아니지만, ${flash.sex}가 뛰어난 실력을 갖춘 만큼 분명히 전황을 뒤흔들 수 있는 존재예요.`,
      );
      await flash.say_and_wait(
        `다음은 맨하탄 카페 양입니다. 레이스 전 인터뷰에서 한 달 뒤에 있을 봄 텐노상에 운명적인 예감을 느낀다고 하더군요. 오사카배가 그 레이스의 전초전인 만큼, ${flash.sex} 역시 여기서 상당히 무서운 실력을 보여줄 겁니다.`,
      );
      era.printButton("「세 번째는 에이신 플래시……」", 1);
      await era.input();
      await flash.say_and_wait("어라.");
      await flash.say_and_wait("후후후.");
      await era.printAndWait(
        `${you.name}의 갑작스러운 농담 섞인 말에 에이신 플래시는 즐겁게 웃었다.`,
      );
      await flash.say_and_wait(
        "설마 정말 그럴지도 모르겠네요. 작년에 비하면 저도 꽤 성장했으니까요.",
      );
      await flash.say_and_wait(
        "강적과 대결하고, 지식을 깨닫고, 경험을 쌓는다. 그리고 다음 레이스에서 그 모든 것을 쏟아부어 달림으로써 진보를 이뤄낸다.",
      );
      await flash.say_and_wait(
        "지금껏 겪어온 모든 도전이 그래왔듯, 오늘 오사카배도 예외는 아닐 거예요.",
      );
      era.printButton("「높은 벽이란 네가 더 높이 오르기 위한 계단일 뿐이야.」", 1);
      await era.input();
      await flash.say_and_wait("네.");
      await era.printAndWait("에이신 플래시는 고개를 끄덕였다.");
      await flash.say_and_wait("당당하게 장애물을 넘어서고, 결국 꿈을 이루어 돌아오겠어요……");
      await flash.say_and_wait(`다녀올게요! ${callname}.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_sats_sho
  before_sats_sho: (() => {
    const title = "해야할 일 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} win_keis_hai エイシンフラッシュが京成杯に勝ったか
     */
    const f = async (flash, you, callname, win_keis_hai) => {
      await era.printAndWait("클래식 3관의 첫 번째 관문인 사츠키상이 드디어 다가왔다.");
      await you.say_as_passer_by_and_wait(
        "행인A",
        "이번 레이스, 누구 응원할 거야?",
      );
      await you.say_as_passer_by_and_wait(
        `행인B`,
        `음, 원래는 에이신 플래시를 응원하려고 했어. 케이세이배 때 ${flash.sex}의 활약이 정말 눈부셨거든.`,
      );
      await you.say_as_passer_by_and_wait(
        `행인A`,
        `エイシンフラッシュか。でも数日前、かなり重い病気だったって聞いた。治ったとはいえ、この状態で出て、走りは大丈夫なのか？`,
      );
      await you.say_as_passer_by_and_wait(
        "행인B",
        "맞아, 바로 그 점이 걱정이야. 사츠키상은 G1급 중상 레이스라 압박감도 상대의 수준도 지난번 케이세이배와는 비교도 안 되잖아.",
      );
      await you.say_as_passer_by_and_wait(
        `행인A`,
        `응, 사츠키상의 경쟁은 너무 치열해서 가장 빠른 ${flash.uma_sex_title}만이 승리할 수 있다고 하니까.`,
      );
      await you.say_as_passer_by_and_wait(
        "행인B",
        "그래. 게다가 병의 영향도 있을 텐데, 지금의 에이신 플래시가 정말 자기 실력을 다 발휘할 수 있을지 의문이야.",
      );
      era.drawLine();
      if (win_keis_hai) {
        await era.printAndWait(
          `사회자 「다음 입장을 환영해주십시오! 바로 올해 케이세이배의 우승자, 이번 레이스 인기 3위— 에이신 플래시!!」`,
        );
      } else {
        await era.printAndWait(
          `사회자 「다음 입장을 환영해주십시오! 올해 케이세이배에서 눈부신 활약을 보여준, 이번 레이스 인기 3위— 에이신 플래시!!」`,
        );
      }
      await flash.say_and_wait('………');
      await flash.say_and_wait("후우……");
      era.printButton("「플래시?」", 1);
      await era.input();
      await era.printAndWait("사츠키상 당일, 대기실.");
      await era.printAndWait(
        `${you.name}은(는) 안내 방송에도 반응하지 않고 고개를 숙인 채 생각에 잠겨 있는 에이신 플래시를 의아한 듯 불렀다.`,
      );
      await flash.say_and_wait("아. 걱정 마세요, 괜찮아요.");
      await era.printAndWait(
        "에이신 플래시는 자리에서 일어나 고개를 저었다.",
      );
      await flash.say_and_wait(
        "그저 조금 감회가 새로워서요. 케이세이배에서 나름 잘 달렸다고 생각했는데, 사츠키상 인기는 그때의 활약이 전혀 반영되지 않은 느낌이라.",
      );
      era.printButton("「며칠 전 앓았던 병의 영향 때문이겠지.」", 1);
      await era.input();
      await era.printAndWait(
        `이런 반응이 나오는 이유를 ${you.name}은(는) 이미 잘 알고 있었다.`,
      );
      await era.printAndWait(
        "지난주, 에이신 플래시는 비를 맞고 감기에 걸려 심한 고열에 시달렸다.",
      );
      await era.printAndWait(
        `数日休んで${flash.sex}の身体は回復し、望みどおり出走できた。`,
      );
      await era.printAndWait(
        "그럼에도 불구하고 병마가 남긴 미세한 허약함은 여전히 몸에 남아 있는 듯했다.",
      );
      await era.printAndWait(
        "이런 상황에서 에이신 플래시의 사츠키상 활약을 기대하는 사람이 줄어든 것은 합리적인 현상이었다.",
      );
      era.printButton('「とにかく、自分のことをやればいい。」', 1);
      await era.input();
      await era.printAndWait(
        `目の前の人がこれに揺らがないか心配して、${you.name} はそう言った。`,
      );
      await flash.say_and_wait(
        "……네, 클래식 3관 도전은 제가 반드시 수행해야 할 계획입니다.",
      );
      await era.printAndWait(
        `${you.name} の言葉に、エイシンフラッシュは一瞬黙った。それから${flash.sex}は、ゆっくり拳を握った。`,
      );
      await flash.say_and_wait(
        "타인의 지지가 있든 없든, 전 끝까지 밀고 나갈 거예요.",
      );
      era.printButton("「……해야 할 일을 하고, 할 수 있는 힘을 다해.」", 1);
      await era.input();
      await era.printAndWait(
        `레이스에 과도하게 몰입하는 에이신 플래시의 태도에 ${you.name}은(는) 살짝 미간을 찌푸렸지만, 지금의 ${flash.sex}에게 이것이 나쁜 것만은 아니었다.`,
      );
      await flash.say_and_wait(`네! 그럼 준비하고 다녀올게요, ${callname}.`);
      era.printButton("「조심해서 다녀와.」", 1);
      await era.input();
      await era.printAndWait(
        `그래서 ${you.name}은(는) 그저 ${flash.sex}에게 가볍게 손을 흔들어주며 무사히 돌아오길 빌어주었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_tenn_sho_s
  before_tenn_sho_s: (() => {
    const title = "찬란한 가을 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait("만중의 기대를 한 몸에 받는 가을 텐노상이 드디어 시작되었다.");
      await era.printAndWait("관객：「오오오오——!!」");
      await you.say_as_passer_by_and_wait(
        "플래시의 어머니",
        "어머나, 이것이 일본의 G1 레이스인가요. 정말 열정적이네요.",
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `가을 텐노상, 역사가 깊은 레이스 같군. 그리고 우리 Schatzi, ${flash.sex}는……`,
      );
      await you.say_as_passer_by_and_wait(
        `에이신 플래시의 어머니`,
        `${flash.sex}를 믿으세요. 힘내렴, 플래시!`,
      );
      era.drawLine();
      await flash.say_and_wait("부모님께서 무사히 경기장에 도착하신 것 같네요.");
      await era.printAndWait(
        `レース前、選手控室で、エイシンフラッシュはスマホの安否確認のメッセージを見て、ほっとした笑みを浮かべた。`,
      );
      await flash.say_and_wait(
        "이걸로 모든 것이 계획대로 진행되고 있어요. 제 컨디션도 아주 좋으니, 남은 건……",
      );
      era.printButton("「플래시의 이름을 걸고, 이 레이스를 승리하자.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
      await era.printAndWait(
        "에이신 플래시는 힘차게 고개를 끄덕이며 자신감 넘치는 표정을 지었다.",
      );
      await flash.say_and_wait(
        "지난날 겪은 모든 일은 오늘 이 레이스의 결과를 위한 밑거름이었어요.",
      );
      await flash.say_and_wait("그러니 오늘만큼은.");
      await flash.say_and_wait("반드시 이겨야만 해요!");
      era.printButton("「모든 이에게 네 신념을 증명해 보여!」", 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_tenn_spr
  before_tenn_spr: (() => {
    const title = "도전의 길 · 6";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     */
    const f = async (flash, you) => {
      await era.printAndWait("봄 시니어 3관의 두 번째 관문— 봄 텐노상.");
      await era.printAndWait(
        "장거리 G1 레이스로서 3200m라는 엄청난 길이를 자랑하며, 에이신 플래시가 이전에 뛰었던 아리마 기념보다 무려 700m나 더 길다.",
      );
      await era.printAndWait(
        `의심할 여지 없이 ${flash.sex}의 지구력을 시험하는 거대한 시련이다.`,
      );
      await flash.say_and_wait("정말 강하네요, 맨하탄 카페 양은.");
      await era.printAndWait("레이스 전, 대기실.");
      await era.printAndWait("에이신 플래시의 목소리가 드물게 무거워졌다.");
      era.printButton(`「${flash.sex}가 가장 잘하는 분야니까.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 당연히 ${flash.sex}가 무엇을 걱정하는지 알고 있었다.`,
      );
      await era.printAndWait(
        '長距離に経験の薄いエイシンフラッシュと違い、マンハッタンカフェはそれで知られている。',
      );
      await era.printAndWait(
        `국화상, 아리마 기념, 봄 텐노상까지 모두 ${flash.sex}가 이전에 쟁취한 영광들이다.`,
      );
      await era.printAndWait(
        "즉 이번 봄 텐노상은 자신의 약점으로 상대의 강점을 공략해야 하는 셈이다.",
      );
      await era.printAndWait(
        "이런 상황에서 레이스의 위험함을 느끼는 것은 지극히 당연한 일이었다.",
      );
      await flash.say_and_wait("그렇다고 해서 포기할 이유는 되지 못하죠.");
      await era.printAndWait(
        `에이신 플래시는 고개를 저었다. 어떤 상황이 닥치더라도 ${flash.sex}는 결코 물러서지 않는다.`,
      );
      era.printButton("「그러고 보니.」", 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 문득 한 가지 일이 떠올랐다.`);
      era.printButton(
        "「어떤 기자가 이번 레이스가 끝나면 널 인터뷰하고 싶다고 하더라고.」",
        1,
      );
      await era.input();
      await flash.say_and_wait("어라, 인터뷰요?");
      era.printButton(
        "「가제는 『최강의 세대에서 피어난 눈부신 섬광』이었던 것 같아.」",
        1,
      );
      await era.input();
      await era.printAndWait(
        "작년 재팬 컵부터 지난 오사카배까지 쟁쟁한 선배들을 상대로 보여준 에이신 플래시의 활약은 대단했기에, 이번 레이스 결과를 미리 점치며 화제성을 선점하려는 기자의 의도는 충분히 이해할 만했다.",
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}에게 그 제목의 의미를 상세히 설명해주었다.`,
      );
      await flash.say_and_wait("눈부신 섬광이라……");
      await era.printAndWait(
        `${you.name}의 말을 들은 에이신 플래시는 깊이 생각하듯 고개를 끄덕였다.`,
      );
      await flash.say_and_wait("정말 간결하고 명확한 요약이네요.");
      await era.printAndWait(`${flash.sex}가 가볍게 웃었다.`);
      await flash.say_and_wait("하지만……");
      await era.printAndWait(
        `순식간에 ${you.name}은(는) ${flash.sex}의 표정이 엄숙하게 변하는 것을 보았다.`,
      );
      await flash.say_and_wait("저는 금방 사라지는 섬광과는 다릅니다.");
      await flash.say_and_wait("마지막 순간까지, 누구보다 찬란하게 계속해서 달려나가겠어요.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_toky_yus
  before_toky_yus: (() => {
    const title = "해야할 일 · 3";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "클래식 3관의 두 번째 레이스— 일본 더비가 드디어 오늘 막을 올렸다.",
      );
      await flash.say_and_wait("그럼, 다녀오겠……");
      await era.printAndWait('「プルル。」');
      await flash.say_and_wait("어라.");
      await era.printAndWait(
        "대기실 안, 레이스 전 마지막 준비를 마치고 경기장으로 향하려던 에이신 플래시가 갑작스러운 핸드폰 알림음에 시선을 빼앗겼다.",
      );
      era.printButton("「무슨 일이야?」", 1);
      await era.input();
      await flash.say_and_wait("아, 별거 아니에요.");
      await era.printAndWait(
        `後ろのポケットからスマホを出し、画面を数秒見つめた${flash.sex}の顔に、安堵が浮かんだ。`,
      );
      await flash.say_and_wait("어머니께서 보내신 메시지예요.");
      await flash.say_and_wait(
        `『내 ${
          flash.sex_code - 1 ? "딸" : "아들"
        }이 일본 더비에 출주하게 될 줄은 정말 꿈에도 몰랐구나.』`,
      );
      await flash.say_and_wait(
        "『부디 네가 만족할 수 있는 결과를 남기길 바란다. 아빠랑 여기서 응원하고 있을게.』",
      );
      era.printButton("「부모님의 축복이네.」", 1);
      await era.input();
      await flash.say_and_wait("기대해주시고 계시네요.");
      await era.printAndWait(
        "말을 마친 에이신 플래시는 핸드폰을 집어넣었다.",
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `머나먼 타국에서 전해진 부모님의 마음을 받은 ${flash.sex}에게서 묘한 변화가 느껴졌다.`,
      );
      await flash.say_and_wait("단순히 이기는 것보다 더 중요한 감정을 찾는 것…… 인가요?");
      era.printButton("「……플래시?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 작은 혼잣말을 들었다. 무슨 고민이 있냐고 물어보려던 찰나.`,
      );
      await flash.say_and_wait("후우……");
      await flash.say_and_wait(`${callname}!`);
      era.printButton("「응.」", 1);
      await era.input();
      await era.printAndWait(
        `마주친 것은 ${flash.sex}의 확신에 찬 눈빛이었다.`,
      );
      await flash.say_and_wait("제가 이 레이스를 이길 수 있을까요?");
      era.printButton("「난 항상 그렇게 믿고 있어.」", 1);
      await era.input();
      await flash.say_and_wait("좋아요!");
      await era.printAndWait(
        `${you.name}의 말에 에이신 플래시는 고개를 끄덕였고, 자신감 넘치는 미소가 ${flash.sex}의 얼굴에 번졌다.`,
      );
      await flash.say_and_wait("그럼, 다녀올게요.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] begin_race_win
  begin_race_win: (() => {
    const title = "모든 일의 시작 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton("「레이스하느라 수고했어.」", 1);
      await era.input();
      await flash.say_and_wait("후우…… 정말 잊지 못할 경험이었네요.");
      await era.printAndWait(
        "에이신 플래시는 깊은 숨을 내쉬며, 레이스에서 얻은 피로를 조금이나마 털어냈다.",
      );
      await era.printAndWait(
        `이어서 ${you.name}은(는) ${flash.sex}가 내뱉은 진심 어린 감탄을 들었다.`,
      );
      era.printButton("「잊지 못할 경험이지?」", 1);
      await era.input();
      await flash.say_and_wait(
        "네, 이것이 공식 레이스와 연습 레이스의 차이로군요. 역시 말로만 들어서는 느낄 수 없는 것이었어요.",
      );
      await era.printAndWait(
        "말을 마치며, 에이신 플래시는 만족스럽게 고개를 끄덕였다.",
      );
      await era.printAndWait(
        `新しい収穫を得た${flash.sex}が、このレースの過程を楽しんでいるのが、${you.name} にはわかった。`,
      );
      era.printButton("「이제 다음에는 뭘 할 거야?」", 1);
      await era.input();
      await era.printAndWait("그렇다면 지금이야말로 여세를 몰아 다음 단계로 나아갈 좋은 타이밍이다.");
      await flash.say_and_wait(
        "다음 일정이라면, 역시 계획에서 결정해둔 대로 진행해야겠지요.",
      );
      era.printButton("「계획이라.」", 1);
      await era.input();
      await era.printAndWait(
        "데뷔전을 통해 중장거리 코스에서의 기량을 점검하고, 이어서 참가할 클래식급의 클래식 3관과 시니어급의 춘추 3관을 준비한다.",
      );
      await era.printAndWait(
        `종합하자면, 이것이 에이신 플래시가 자신의 ${flash.uma_sex_title} 생애를 위해 세워둔 설계였다. 얻을 수 있는 모든 영광을 손에 넣겠다는 의지가 담겨 있었고, 종이 위에 적힌 글자만 보더라도 무척이나 호화로운 구성이었다.`,
      );
      await flash.say_and_wait("다만……");
      await era.printAndWait(
        `……だが、本当にすべてが${flash.sex}の望みどおりなら。最後には${flash.sex}自身が言ったように、栄誉をもって、ご両親に誇ってもらえるはずだ。`,
      );
      await era.printAndWait(`거기까지 생각하자, ${you.name}은(는) 속으로 스스로를 다독이며 의욕을 다졌다.`);
      era.printButton("「그럼 우리, 함께 힘내보자.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
      await era.printAndWait(
        `에이신 플래시는 ${you.name}에게 고개를 끄덕였고, ${flash.sex}의 얼굴에는 찬란한 미소가 떠올랐다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] japa_cup_lose_c
  japa_cup_lose_c: (() => {
    const title = "도전의 길 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "재팬 컵은 일본 더비와 비슷한 거리와 코스를 가지고 있다. 이론적으로는 일본 더비를 제패했던 에이신 플래시가 이 레이스에서도 눈에 띄는 활약을 보여줄 것으로 기대되었다.",
      );
      await flash.say_and_wait(`후우…… 다녀왔습니다, ${callname}.`);
      era.printButton("「레이스하느라 수고했어.」", 1);
      await era.input();
      await era.printAndWait(
        "하지만 안타깝게도, 코스의 이점만으로는 에이신 플래시와 선배들 사이의 실력 격차를 메우기에 부족했다.",
      );
      await flash.say_and_wait("패배했네요.");
      await era.printAndWait(
        `레이스 후 대기실에서, 방금 돌아온 에이신 플래시가 ${you.name}에게 조금은 지친 듯한 미소를 지어 보였다.`,
      );
      await flash.say_and_wait(
        "최선을 다했지만, 결국 스페셜 위크 씨와 젠노 롭 로이 씨를 따라잡지 못했습니다.",
      );
      era.printButton("「멋진 레이스였어.」", 1);
      await era.input();
      await flash.say_and_wait(
        `はい。${flash.couple_title}との差を、肌で感じられました。`,
      );
      await era.printAndWait(
        "에이신 플래시는 고개를 끄덕였고, 말투에 실망한 기색은 그리 크지 않았다.",
      );
      await flash.say_and_wait(
        "그래도 덕분에 새로운 깨달음을 많이 얻었습니다.",
      );
      await era.printAndWait(
        `이어서 ${flash.sex}의 얼굴에 깊이 생각에 잠긴 표정이 떠올랐다.`,
      );
      await flash.say_and_wait(
        `このまま進み続ければ。いつか正面から${flash.couple_title}に勝ち、一頭抜けできるはずです。`,
      );
      era.printButton("「다음 레이스에서 이번 레이스의 성과를 증명해 보자고.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
      await flash.say_and_wait("아리마 기념…… 후훗, 정말 기대되는 레이스군요.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] japa_cup_win_c
  japa_cup_win_c: (() => {
    const title = "도전의 길 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "재팬 컵은 일본 더비와 비슷한 거리와 코스를 가지고 있다. 따라서 당연하게도, 일본 더비 우승자였던 에이신 플래시는 이 레이스에서도 극도로 화려한 퍼포먼스를 보여주었다.",
      );
      await flash.say_and_wait(`후우…… 다녀왔습니다, ${callname}.`);
      era.printButton("「레이스하느라 수고했어.」", 1);
      await era.input();
      await era.printAndWait(
        "과정은 무척 험난했지만, 에이신 플래시는 마침내 자신의 탄탄한 실력으로 세대의 장벽을 넘어 선배들을 꺾는 데 성공했다.",
      );
      await flash.say_and_wait("이겼습니다.");
      await era.printAndWait(
        `레이스 후 대기실에서, 방금 돌아온 에이신 플래시가 ${you.name}에게 조금은 지친 듯한 미소를 지어 보였다.`,
      );
      await flash.say_and_wait(
        `スペシャルウィークさんとゼンノロブロイさんの実力は、本当に強いです。全力を尽くして、ようやく${flash.couple_title}を交わせました。`,
      );
      era.printButton("「정말 멋진 레이스였어.」", 1);
      await era.input();
      await flash.say_and_wait("네, 저도 제가 지금 어느 정도의 실력을 갖췄는지 확실히 체감할 수 있었습니다.");
      await era.printAndWait(
        `에이신 플래시가 고개를 끄덕였고, ${you.name}은(는) ${flash.sex}의 말투에서 이 값진 승리에 대한 기쁨을 분명히 느낄 수 있었다.`,
      );
      era.printButton('「嬉しいな。」', 1);
      await era.input();
      await flash.say_and_wait(
        "네, 이겼을 뿐만 아니라 그 덕분에 새로운 깨달음도 많이 얻었으니까요.",
      );
      await era.printAndWait(
        `이어서 ${flash.sex}의 얼굴에 깊이 생각에 잠긴 표정이 떠올랐다.`,
      );
      await flash.say_and_wait(
        `このまま進み続ければ。いつか正面から${flash.couple_title}に勝ち、一頭抜けできるはずです。`,
      );
      era.printButton("「다음 레이스에서 이번 레이스의 성과를 증명해 보자고.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
      await flash.say_and_wait("아리마 기념…… 후훗, 정말 기대되는 레이스군요.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] os_95_6
  os_95_6: (() => {
    const title = '出会いの花';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `バレンタインが近い。今年の新作チョコレートを見るため、エイシンフラッシュは ${you.name} を近くの菓子店へ誘った。`,
      );
      await era.printAndWait('だが……');
      await you.say_as_passer_by_and_wait(
        `客`,
        `待って、私のほうが先——痛っ、${you.name}、ぶつかった！`,
      );
      await you.say_as_passer_by_and_wait(
        '店員',
        '『チョコレート年輪ケーキ』をご希望のお客様はこちらへ。あ！ お客様、店内は走らないでください。',
      );
      await flash.say_and_wait('本当に……混乱していますね。');
      await era.printAndWait(
        '店内の押し合う人混みを見て、エイシンフラッシュは眉を寄せた。',
      );
      await flash.say_and_wait(
        'これではショーケースの菓子を丁寧に調べられません。少し困ります……',
      );
      era.printButton('「店を変えるか？」', 1);
      await era.input();
      await era.printAndWait(`${you.name} はそう提案した。`);
      await flash.say_and_wait(
        '……バレンタイン前ですから、ほかも似たようなものでしょう。',
      );
      await era.printAndWait('そこでエイシンフラッシュは小さく息をついた。');
      await flash.say_and_wait(
        'まあ、欲しい品はネットで先に買えています。現場で実物を調べられなくても、大きな問題ではありません。',
      );
      await flash.say_and_wait('ですから、今は戻りましょう。');
      era.drawLine();
      await flash.say_and_wait(
        '実は、日本に来てから毎年、バレンタインに贈り物で言い争う光景を見ると、少し不思議に思います。',
      );
      await era.printAndWait(
        'トレセン学園へ戻る道で、エイシンフラッシュは突然、そう漏らした。',
      );
      era.printButton('「ドイツには、そういう習慣はないのか？」', 1);
      await era.input();
      await era.printAndWait(`${you.name} は少し不思議に思った。`);
      await flash.say_and_wait(
        '正確にはあります。ですがチョコレートより、主流は花です。',
      );
      await era.printAndWait(
        `そう言ってエイシンフラッシュは一本指を立て、${you.name} に説明し始めた。`,
      );
      await flash.say_and_wait(
        'さらに言えば、贈る相手も、恋人以外にはなりません。',
      );
      await flash.say_and_wait('つまり、いわゆる義理の贈り物はありません。');
      era.printButton('「なるほど。」', 1);
      await era.input();
      await era.printAndWait(
        'つまり贈るなら、受け取る相手は、とても大切な存在だということだ。',
      );
      await era.printAndWait(`${you.name} はわかったようにうなずいた。`);
      await flash.say_and_wait(
        '身近な例で言えば、毎年バレンタインに、父が母へ薔薇の花束を贈るのを見ます。',
      );
      await flash.say_and_wait('………');
      await era.printAndWait('そこで、なぜかエイシンフラッシュは黙り込んだ。');
      await era.printAndWait(
        `${you.name} は、${flash.sex}の視線がわずかに ${you.name} のほうへ向いた気がした。`,
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await flash.say_and_wait('……いえ、なんでもありません。');
      await era.printAndWait(
        '再び口を開いたエイシンフラッシュは、小さく首を振った。',
      );
      await flash.say_and_wait(
        'とにかく、ドイツでは告白を理由に贈り物はしません。',
      );
      await flash.say_and_wait('そうするなら、双方はもっと深い関係だけです。');
      await flash.say_and_wait(
        'ですからその意味では、日本でバレンタインに告白する習慣があるほうが、私には意外です。',
      );
      era.printButton('「流れに乗る口実、みたいなものだろう？」', 1);
      await era.input();
      await era.printAndWait(
        '告白には勇気が要る。バレンタイン告白という、祭日の習わしを理由に、成否どちらでも関係が変わる行為をするのは、ちょうどいい。',
      );
      await flash.say_and_wait(
        '本当の気持ちを隠すのに、ふさわしい理由が要る、ですか……',
      );
      await flash.say_and_wait('ふふっ……悪くない考えですね。');
      await era.printAndWait(
        '何か閃いたように、エイシンフラッシュは考え込むようにうなずいた。',
      );
      await flash.say_and_wait(
        `あ、学園の正門が見えました。では、このあと用事がありますので、ここで失礼します、${callname}。`,
      );
      era.printButton('「気をつけて。」', 1);
      await era.input();
      era.drawLine({ content: 'バレンタイン当日' });
      await flash.say_and_wait(`Guten Morgen、${callname}。`);
      await era.printAndWait(
        `トレーナールームの扉を開けると、${you.name} は見た。みずみずしい青い花が、机の横の花瓶に立っている。`,
      );
      era.printButton('「この花は？」', 1);
      await era.input();
      await flash.say_and_wait('青いヤグルマギクです。ドイツの国花です。');
      await era.printAndWait(
        `エイシンフラッシュは微笑んで ${you.name} に紹介した。`,
      );
      await flash.say_and_wait(
        '先日お別れしたあと、帰り道でよく考えました。今いる国が日本なら、伝統の祭日も、郷に従ってよい、と。',
      );
      era.printButton('「つまり、これがバレンタインの贈り物か？」', 1);
      await era.input();
      await flash.say_and_wait(
        `はい。${callname} は花を飾りにする習慣がありませんから、これを贈り物にすれば、周囲の環境もよくなります。それに……`,
      );
      era.printButton('「それに？」', 1);
      await era.input();
      await flash.say_and_wait(
        'ふとしたときにこの花を見て、贈った人を思い出すかもしれません。',
      );
      await flash.say_and_wait('ふふふ——');
      await era.printAndWait(
        '言い終えると、エイシンフラッシュは口元を覆って小さく笑った。とても嬉しそうだった。',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] os_black_treasure
  os_black_treasure: (() => {
    const title = '漆黒の至宝';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        `一人でショッピングモールの生活用品を買っていたとき、${you.name} は近くで、沈んだ顔のエイシンフラッシュを見かけた。`,
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await era.printAndWait(`それを見て、${you.name} は気になって訊いた。`);
      await flash.say_and_wait(`ああ、${callname}。`);
      await era.printAndWait(
        `声の主が ${you.name} だと分かると、エイシンフラッシュは少し驚いた。`,
      );
      await flash.say_and_wait('いいえ、何でもありません。');
      await era.printAndWait(`次の瞬間、${flash.sex}はまた首を振った。`);
      await flash.say_and_wait(
        '故郷で食べた料理が急に恋しくなって、日本でも材料を探して再現してみようと思っただけです。',
      );
      await flash.say_and_wait('ただ……');
      await era.printAndWait(
        'そこまで言って、エイシンフラッシュの顔に一瞬、迷いが走った。',
      );
      era.printButton('「高いのか？」', 1);
      await era.input();
      await era.printAndWait(
        `その様子を鋭く捉えた ${you.name} は、${flash.sex}が沈んでいる理由を察した。`,
      );
      await flash.say_and_wait('……はい。');
      await era.printAndWait(
        `それを聞いて、${flash.sex}はしばし黙り、それからゆっくり頷いた。`,
      );
      await flash.say_and_wait(
        '料理に使う高級キャビアが、こちらの店では今月の小遣いの範囲を超えてしまって。',
      );
      await flash.say_and_wait(
        'もっと安いブランドで代用することもできますが、それでは最初に懐かしんでいた味にはなりません。',
      );
      await era.printAndWait(
        `言い終えると、${you.name} は${flash.sex}が小さく息をつくのを見た。`,
      );
      await era.printAndWait(
        `しょんぼりしたエイシンフラッシュを前に、${you.name} は——`,
      );
      era.printButton('「成り行きに任せる」', 1);
      if (era.get('flag:当前马币') > 50) {
        era.printButton(`「${flash.sex}にお金を貸す」`, 2);
      }
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} の心には、目の前の人の代わりに買ってあげようという考えがよぎった。だがよく考えると、エイシンフラッシュの性格では、きっと承諾しない。`,
        );
        await era.printAndWait(
          `結局、${you.name} は${flash.sex}が困った顔のまま店を出ていくのを見送るしかなかった。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} の心には、目の前の人の代わりに買ってあげようという考えがよぎった。だがよく考えると、エイシンフラッシュの性格では、きっと承諾しない。`,
        );
        await flash.say_and_wait('えっ？');
        await era.printAndWait('とはいえ、解決策がないわけでもない。');
        await flash.say_and_wait(
          `${callname} の仰ることは……私の分を払う、ということですか？`,
        );
        await era.printAndWait(
          `${you.name} の提案を聞いて、エイシンフラッシュは数秒、固まった。`,
        );
        await flash.say_and_wait(
          'お気持ちはありがたいのですが、このようなことはやはり……',
        );
        await era.printAndWait(
          `すぐ理解した${flash.sex}は、きっぱり首を振り、はっきりと拒んだ。`,
        );
        era.printButton('「未来の小遣いを、先に前借りするだけだ。」', 1);
        await era.input();
        await era.printAndWait(
          `それを見て、${you.name} はエイシンフラッシュに「貸す」と「おごる」の違いを改めて伝えた。`,
        );
        await era.printAndWait(
          `ただ貰うより、こちらのほうが公平で、${flash.sex}も受け入れやすいと ${you.name} は思った。`,
        );
        await flash.say_and_wait('む……');
        await era.printAndWait(
          `案の定、${you.name} の言葉を聞くと、${flash.sex}の顔に迷いが浮かんだ。`,
        );
        await flash.say_and_wait('……分かりました。');
        await era.printAndWait(
          `何度も考えた末、${flash.sex}は頷き、${you.name} の助けを受け入れた。`,
        );
        await flash.say_and_wait('このご恩は、忘れません。');
        await era.printAndWait(`${flash.sex}は改まった口調で言った。`);
        await flash.say_and_wait('約束します。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] sats_sho_end
  sats_sho_end: (() => {
    const title = "해야할 일 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "도중에 몇 차례 우여곡절이 있었지만, 클래식 3관 중 하나인 사츠키상이 마침내 막을 내렸다.",
      );
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      await era.printAndWait(
        `에이신 플래시가 무사히 경기장에서 돌아오는 모습을 보고, ${you.name}은(는) 안도의 한숨을 내쉬었다.`,
      );
      era.printButton("「수고했어.」", 1);
      await era.input();
      await flash.say_and_wait("네, 대체로 계획에서 구상했던 대로 달릴 수 있었습니다.");
      era.printButton("「정말 멋진 레이스였어.」", 1);
      await era.input();
      await era.printAndWait(
        `방금 막 회복한 몸을 이끌고도, ${flash.sex}가 이번 레이스에서 보여준 퍼포먼스는 훌륭했다. 그 사실은 의심의 여지 없이 매우 뛰어났다.`,
      );
      await flash.say_and_wait("후훗~");
      await era.printAndWait(
        `${you.name}의 칭찬을 듣고, 에이신 플래시는 가볍게 웃었다. 지금 ${flash.sex}의 눈동자에는 열정이라는 이름의 빛이 일렁이고 있었다.`,
      );
      await flash.say_and_wait("다음 레이스는 일본 더비군요.");
      await flash.say_and_wait(
        "지금의 컨디션을 반드시 유지해야 합니다. 한층 더 높은 강도의 훈련도 일정에 추가해야겠어요.",
      );
      await flash.say_and_wait(
        "또한 레이스에 필요한 전략과 참가자들의 관련 자료도 미리 준비해야 합니다.",
      );
      await flash.say_and_wait("그리고……");
      era.printButton('「……」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 일본 더비가 오기 전까지의 미래를 위해 갑자기 바쁘게 세부 계획을 세우는 에이신 플래시를 바라보았다.`,
      );
      era.printButton(
        "「어쨌든 일본 더비도 중요하지만, 레이스 준비 외에도 자신에게 적절한 휴식 시간을 주도록 해.」",
        1,
      );
      await era.input();
      await era.printAndWait(
        `노동과 휴식의 조화라는 이치를 잘 알고 있는 ${you.name}이(가) 조언을 건넸다.`,
      );
      era.drawLine();
      await flash.say_and_wait("일본 더비…… 에이신 플래시…… 평가……");
      await era.printAndWait(
        `トレセン学園へ戻る新幹線の中で、${you.name} はエイシンフラッシュがスマホの検索欄に、その三語を打ち込むのを見た。`,
      );
      era.printButton("「사람들이 너에 대해 어떻게 생각하는지 검색하는 거야?」", 1);
      await era.input();
      await era.printAndWait(
        `잠시 생각한 끝에, ${you.name}은(는) 에이신 플래시가 왜 그러는지 그 의도를 이해했다.`,
      );
      await flash.say_and_wait(
        "네, 사츠키상 레이스를 치른 뒤에 사람들이 저를 보는 시선이 어떻게 변했을지 무척 궁금했거든요.",
      );
      await era.printAndWait(
        "말을 하며 에이신 플래시는 웹 페이지의 어느 격렬한 토론 게시판을 열었다. 눈에 띄는 댓글은 다음과 같았다——",
      );
      await you.say_as_passer_by_and_wait(
        "네티즌 A",
        "사츠키상 활약은 정말 의외네. 몸이 갓 나은 상태였을 텐데.",
      );
      await you.say_as_passer_by_and_wait(
        `네티즌 B`,
        `이거 일본 더비에서의 ${flash.sex}의 활약이 기대되는걸.`,
      );
      await you.say_as_passer_by_and_wait(
        `네티즌 C`,
        `사츠키상에 비해 일본 더비는 난이도가 한층 더 높을 텐데, ${flash.sex}가 그때는 어떤 성적을 낼지 모르겠네.`,
      );
      era.printButton("「다들 너에게 큰 기대를 걸고 있는 모양이네.」", 1);
      await era.input();
      await era.printAndWait(`그걸 보고 ${you.name}이(가) 미소 지으며 말했다.`);
      await flash.say_and_wait(
        `ええ……私だけではありません。他の出走馬にも、掲示板の人たちは${flash.couple_title}それぞれに、応援の理由を持っています。`,
      );
      await flash.say_and_wait(
        "이해할 수 있어요. 결국 일본 더비는 누구에게나 특별한 레이스니까요.",
      );
      await flash.say_and_wait("그러니……");
      await era.printAndWait(
        `거기까지 말한 에이신 플래시는 갑자기 깊게 숨을 들이켰고, ${flash.sex}의 눈빛은 찰나에 매우 확고해졌다.`,
      );
      await flash.say_and_wait("더욱 노력해야만 합니다.");
      era.printButton("「플래시……」", 1);
      await era.input();
      await flash.say_and_wait("일본 더비의 우승, 반드시—— 제가 차지하겠습니다!");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] tenn_sho_win_s
  tenn_sho_win_s: (() => {
    const title = "찬란한 가을 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait(
        "사회자",
        "이번 가을 텐노상의 우승자는—— 에이신 플래시!!!",
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `${flash.sex}に、盛大な拍手を！！！`,
      );
      await you.say_as_passer_by_and_wait(
        `관중`,
        `에이신 플래시! 축하해, ${you.name}!!!`,
      );
      await flash.say_and_wait("후우…… Juhu! Geschafft! 해냈습니다!");
      await era.printAndWait(
        "눈부신 광채가 쏟아지는 도쿄 경마장에서, 화려한 모습으로 가장 먼저 결승선을 통과한 에이신 플래시가 환호하는 관중석을 향해 열렬히 손을 흔들었다.",
      );
      await flash.say_and_wait("응원해주신 여러분, 정말 감사합니다!");
      await era.printAndWait(
        `${flash.sex}의 미소는 그 어느 때보다 찬란했다. 수많은 시련을 겪고 이상을 실현한 뒤에야 터져 나온, 억누를 수 없는 기쁨이었다.`,
      );
      await flash.say_and_wait(
        `더비 ${flash.uma_sex_title}가 되었던 이 도쿄 경기장에서 다시 한번 승리할 수 있다니, 정말로……`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `フラッシュ、おめでとう、${you.name}。`,
      );
      await flash.say_and_wait("!");
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `素晴らしいレースだった。${you.name} は、やはり私たちの誇りだ。`,
      );
      await flash.say_and_wait("!!");
      await era.printAndWait(
        `그때, 관중석 앞쪽에서 바다를 건너와 ${
          flash.sex_code - 1 ? "딸" : "아들"
        }이 달리는 모습을 보길 간절히 바랐던 부모님이 일어서서 ${flash.sex}에게 박수를 보내며 축하해주었다.`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `もちろん、何もしなくても、${you.name} は私たちのいちばん可愛くて、いちばん大切な宝物よ。それは、いつまでも変わらないわ。`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `それ以上に、${you.name} が自分の道を貫き通したことが、何より尊い。`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 아버지`,
        `だから、一人の人間として、${you.name} に敬意を表する。`,
      );
      await flash.say_and_wait("아버지…… 어머니……");
      era.printButton(
        "「축하해, 플래시. 꿈을 이루었구나. 너는 나의 자랑이기도 해.」",
        1,
      );
      await era.input();
      await flash.say_and_wait("트레이너님까지……");
      await flash.say_and_wait("여러분, 감사합니다!");
      await era.printAndWait(
        "말을 마치며 에이신 플래시는 우아하게 허리를 굽혀 인사했다. 그러고는 잔디 위에 한쪽 무릎을 꿇었다.",
      );
      await flash.say_and_wait("후우——");
      await era.printAndWait(
        `${flash.sex}は深く息を吸い、心の中で用意していたのだろう台詞を口にした。`,
      );
      await flash.say_and_wait(
        "오늘 이 승리에 대해, 제가 진심으로 존경하는 몇 분에게 감사의 인사를 전하고 싶습니다.",
      );
      await flash.say_and_wait(
        "엄격하면서도 자상하신 아버지와 부드럽고 사랑 넘치시는 어머니, 그리고…… 언제나 길을 가리키는 이정표가 되어 제 곁에서 아낌없이 저를 도와주신 트레이너님.",
      );
      await flash.say_and_wait(
        "그분들의 도움이 없었더라면 지금의 저는 결코 이 자리에 서지 못했을 것입니다.",
      );
      await flash.say_and_wait(
        "그러니 부디, 이 영광스러운 자리에서 그분들에게 저의 가장 깊은 경의를 표하는 것을 허락해 주십시오.",
      );
      await era.printAndWait(
        "에이신 플래시가 깊게 고개를 숙였고, 하늘을 가득 메운 환호성은 실체화된 빛이 되어 내려앉았다.",
      );
      await era.printAndWait(
        "그것은 영광을 안고 돌아온 기사에게 주어지는 마땅한 보상이었다.",
      );
      era.drawLine();
      await flash.say_and_wait(`다녀왔습니다, ${callname}.`);
      era.printButton("「어서 와, 플래시.」", 1);
      await era.input();
      await era.printAndWait("레이스 후, 대기실.");
      await era.printAndWait(
        `방으로 돌아온 에이신 플래시가 한결 가벼워진 표정으로 ${you.name}에게 인사를 건넸다.`,
      );
      era.printButton("「부모님과의 대화는 잘 끝났어?」", 1);
      await era.input();
      await era.printAndWait(`그 모습을 보고 ${you.name}이(가) 물었다.`);
      await era.printAndWait(
        `에이신 플래시가 경기장을 내려오자마자 부모님과 서로 껴안고 있었기에, 곁에 서 있던 ${you.name}은(는) 가족의 재회를 방해하기 미안해 감정을 충분히 나눈 뒤에 돌아올 ${flash.sex}를 대기실에서 기다리고 있었다.`,
      );
      await flash.say_and_wait("네.");
      await era.printAndWait(
        "에이신 플래시는 아주 행복한 표정으로 고개를 끄덕였다.",
      );
      await flash.say_and_wait(
        "제가 독일을 떠나온 몇 년 동안 있었던 일들을 아버지, 어머니와 간단히 나누었어요.",
      );
      await flash.say_and_wait(
        "정말 즐거운 시간이었어요. 두 분의 새로운 이야기를 듣는 것도, 제 이야기를 들려드리는 것도요.",
      );
      await flash.say_and_wait("가능하다면 언제까지나 이렇게 지내고 싶을 정도로요.");
      await era.printAndWait(`${flash.sex}는 여운이 남는 듯 감탄을 내뱉었다.`);
      await flash.say_and_wait(
        "하지만 아쉽게도 시간이 늦어 부모님은 먼저 숙소로 돌아가 쉬셔야만 했네요.",
      );
      era.printButton(
        "「너도 오늘 고생했으니 가서 푹 쉬어. 남은 일들을 처리할 시간은 앞으로 아주 넉넉하니까.」",
        1,
      );
      await era.input();
      await era.printAndWait(
        "가을 텐노상을 제패하며 부모님의 자랑이 된 에이신 플래시는 이미 자신의 꿈을 이루었다.",
      );
      await era.printAndWait(
        `바꿔 말하면 ${flash.sex}에게 이제 트윙클 시리즈에 계속 참가해야 할 명분은 남아 있지 않았다. 이런 상황이라면 미래에는 가족과 함께 보낼 시간이 기다리고 있을 터였다.`,
      );
      await flash.say_and_wait(
        "……당신 말이 맞아요. 그래서 지금 그걸 위해 온 것이니까요.",
      );
      era.printButton("「?」", 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시는 당연히 ${you.name}의 말에 담긴 함축적인 의미를 알아챘다.`,
      );
      await era.printAndWait(
        `그러자 다음 순간, ${you.name}은(는) ${flash.sex}가 얼굴에서 미소를 거두는 것을 보았다.`,
      );
      await flash.say_and_wait(`당신에게 드리고 싶은 말씀이 있습니다, ${callname}.`);
      era.drawLine();
      await flash.say_and_wait(
        "올해 6월에 당신은 제게 꿈을 이룬 뒤 무엇을 하고 싶은지 물으셨죠.",
      );
      await era.printAndWait(
        '白い照明が、エイシンフラッシュの整った横顔を照らしている。',
      );
      await era.printAndWait(
        `${flash.sex}는 평온한 말투로 ${you.name}을(를) 응시했다.`,
      );
      era.printButton("「부모님의 케이크 가게를 물려받고 싶다고 했었지.」", 1);
      await era.input();
      await flash.say_and_wait("네, 그건 처음부터 정해두었던 일이었어요.");
      await flash.say_and_wait(
        "하지만 동시에 말씀드렸죠. 당신과 만난 뒤 겪은 일이 너무 많아, 시간을 들여 다시 계획을 세워야겠다고요.",
      );
      era.printButton("「계획의 결과는 어떻게 됐어?」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 에이신 플래시의 말에 따라 질문했다.`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `이어서 ${you.name}은(는) ${flash.sex}가 가볍게 한숨 짓는 것을 들었다.`,
      );
      await flash.say_and_wait(
        "한 말은 반드시 지키고, 받은 은혜는 반드시 갚는 것. 그것이 저의 철칙입니다.",
      );
      await flash.say_and_wait(
        "당신의 도움으로 저는 부모님께 인정받았고, 한 사람의 몫을 다하는 인간으로 성장했습니다. 그것은 제가 간절히 바라왔던 소망이었어요.",
      );
      await era.printAndWait(
        `말을 하며 에이신 플래시는 손을 뻗어, ${
          flash.sex
        }가 ${flash.uma_sex_title}로서 지금까지 세운 모든 계획이 담긴 노트를 ${you.name}에게 건넸다.`,
      );
      await flash.say_and_wait(
        "솔직히 지금도 이 사실을 마주할 때면 조금은 현실감이 없다는 생각이 들곤 합니다.",
      );
      await flash.say_and_wait(
        "물론 그랬기에 저에 대한 당신의 헌신이 얼마나 컸는지가 더욱 와닿지만요.",
      );
      await flash.say_and_wait("그러니 아무리 미미한 보답이라도 좋으니.");
      await era.printAndWait(
        `${flash.sex}는 자신의 신념을 강조하듯 말투에 힘을 주었다.`,
      );
      await flash.say_and_wait(
        "보답으로서 저 역시 당신을 돕고 싶습니다. 당신의 꿈을 제가 이루어드리고 싶어요.",
      );
      era.printButton("「그게 이전에 내 꿈을 물어봤던 이유였어?」", 1);
      await era.input();
      await flash.say_and_wait("네, 맞습니다.");
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 이 확고한 태도에 ${you.name}은(는) 침묵에 빠졌다.`,
      );
      await flash.used_to_say_and_wait(
        '栄誉を積み重ねて、両親に……私を誇りに思ってほしいのです。',
      );
      await era.printAndWait(
        `${you.name}은(는) 모든 것의 시작이었던 그 선발 레이스에서 ${flash.sex}가 ${you.name}에게 했던 말을 다시 한번 떠올렸다.`,
      );
      await era.printAndWait(
        `처음 ${you.name}이(가) ${flash.sex}의 담당 트레이너가 되기로 한 것은 단순히 ${flash.sex}의 적극적인 부탁 때문이었다.`,
      );
      await you.used_to_say_and_wait('嬉しいと思う。');
      await you.used_to_say_and_wait(
        'お前が走る姿を、まだ見続けられるからな。',
      );
      await era.printAndWait(
        `하지만 시간이 흘러 함께 지내며, ${you.name}은(는) 서서히 ${flash.sex}의 본질적인 매력에 끌리게 되었다.`,
      );
      await era.printAndWait(
        "레이스 시작 전 어떤 상대 앞에서도 두려움 없는 용기, 레이스 도중 미스터 시비마저 감탄하게 만든 승부욕, 그리고 레이스 후 결과가 어떠하든 냉정하게 대처하며 정진하는 정신까지.",
      );
      await era.printAndWait(
        "이런 에이신 플래시만의 정신은 실로 매혹적이었다.",
      );
      await era.printAndWait(
        `だから、合宿地からトレセン学園へ戻る車の中で、${flash.sex}が最終的に日本に残ったらどう思うかと訊いたとき、${you.name} は躊躇なく本音を口にしたのだ。`,
      );
      era.printButton("「나의 꿈이라 한다면.」", 1);
      await era.input();
      await era.printAndWait("거기까지 생각이 닿자, 답은 명확해졌다.");
      await era.printAndWait(
        `${you.name}은(는) 당시 에이신 플래시의 눈동자 속에 서려 있던 깊은 일렁임이 무엇을 뜻하는지 마침내 이해했다.`,
      );
      era.printButton("「나는, 네가 계속 달리는 모습을 보고 싶어.」", 1);
      await era.input();
      await flash.say_and_wait("!!!");
      await era.printAndWait(
        `대기실 안, 이제는 미련이 없을 터였던 타국에서 온 ${flash.teen_sex_title}은(는) ${you.name}의 말을 듣고 눈을 크게 떴다.`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait("훗…… 후훗……");
      await era.printAndWait(
        `잠시 침묵하던 ${flash.sex}가 갑자기 소리 내어 웃기 시작했다.`,
      );
      await flash.say_and_wait("후후후후——");
      await flash.say_and_wait("알겠습니다. 그것이 당신의 바람이라면.");
      await era.printAndWait(
        `가슴 속 깊은 곳에서 치밀어 오른 감정을 완전히 쏟아내고 나서야 ${flash.sex}는 다시 ${you.name}을(를) 바라보았다.`,
      );
      await era.printAndWait("푸른 눈동자에는 다정함이 가득 담겨 있었다.");
      await flash.say_and_wait("그럼……");
      await flash.say_and_wait("당신의 뜻대로 하겠어요, 나의 트레이너님.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] toky_yus_win
  toky_yus_win: (() => {
    const title = "해야할 일 · 4";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await you.say_as_passer_by_and_wait("관중", "오오오오오——!!!");
      await you.say_as_passer_by_and_wait(
        "사회자",
        "에이신 플래시—— 골인!!!",
      );
      await you.say_as_passer_by_and_wait(
        "사회자",
        "정말 놀라운 결과입니다, 이번 일본 더비의 우승자는—— 에이신 플래시!!!",
      );
      await you.say_as_passer_by_and_wait(`사회자`, `${flash.sex}に、拍手を！」`);
      await flash.say_and_wait("허억…… 허억……");
      await flash.say_and_wait("내가…… 이겼어?");
      await you.say_as_passer_by_and_wait(
        `팬 A`,
        `축하해, 에이신 플래시! 널 응원하길 정말 잘했어!`,
      );
      await flash.say_and_wait("!");
      await you.say_as_passer_by_and_wait(
        `팬 B`,
        `더비 ${flash.uma_sex_title} 에이신 플래시! 오늘의 모습, 꼭 기억할게.`,
      );
      await flash.say_and_wait("여러분……");
      era.printButton("「축하해, 플래시.」", 1);
      await era.input();
      await flash.say_and_wait(
        `${callname}…… 네! 제가 일본 더비에서 이겼어요!`,
      );
      era.printButton("「정말 대단한 성취야.」", 1);
      await era.input();
      await flash.say_and_wait(
        "부모님의 기대도, 당신의 기대도 저버리지 않았어요. 해냈습니다!",
      );
      await era.printAndWait(
        `에이신 플래시의 얼굴에 찬란한 미소가 피어올랐다. 지금 ${flash.sex}는 승리가 가져다준 기쁨에 완전히 젖어 있는 듯 보였다.`,
      );
      await era.printAndWait('「プルル。」');
      await era.printAndWait(
        `그리고 절묘한 타이밍에 스마트폰 알림음이 ${flash.sex}의 귀에 들려왔다.`,
      );
      await flash.say_and_wait("새 메시지?");
      await era.printAndWait(
        'エイシンフラッシュがスマホを出すと、目に入ったのは——',
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `1위 축하한다, 플래시. 일본 더비에서의 활약은 정말 super, toll, klasse 했단다.`,
      );
      await flash.say_and_wait("!");
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `우승 소식을 듣고 네 아빠는 기뻐서 케이크 가게 안을 이리저리 뛰어다니셨단다.`,
      );
      await flash.say_and_wait("아버지가 세상에…… 후훗~");
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `솔직히 널 품에 안고 실껏 칭찬해주고 싶구나. 이번 우승은 결코 쉽지 않았을 텐데, 네가 지난 몇 년간 쏟은 노력의 결실이자 성장의 증거란다.`,
      );
      await you.say_as_passer_by_and_wait(
        `플래시의 어머니`,
        `승리에서 오는 이 기쁨이 앞으로도 늘 네 곁에 머물기를 바라마.`,
      );
      await flash.say_and_wait("어머니……");
      era.printButton("「부모님도 무척 기뻐하고 계신 모양이네.」", 1);
      await era.input();
      await flash.say_and_wait("……네!");
      await era.printAndWait("기쁨을 전하는 메시지는 여기서 끝났다.");
      await era.printAndWait(
        "부모님의 축복을 받은 에이신 플래시는 지금 그 어느 때보다 의욕이 넘쳐 보였다.",
      );
      await flash.say_and_wait(
        "일본 더비에서 이겼다는 사실이 주는 기쁨은 취할 정도로 달콤하지만, 객관적으로 볼 때 이것도 생애의 한 단계일 뿐입니다.",
      );
      await flash.say_and_wait(
        `그러니 지체하지 말고 바로 다음 계획을 논의하러 가죠, ${callname}!`,
      );
      await flash.say_and_wait("함께——— 국화상을 향해, 전진입니다.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fail
  train_fail: (() => {
    const title = "푹 쉬기";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait("에이신 플래시의 트레이닝이 실패했다.");
      await flash.say_and_wait(
        "으윽, 제가 부주의했어요…… 준비운동을 좀 더 세심하게 했더라면…… 이런 결과를 피할 수 있었을지도 모르는데.",
      );
      await era.printAndWait(
        `トレーナールームで、${flash.sex}は沈んだ声で言った。`,
      );
      await flash.say_and_wait(
        "이렇게 되면 이후의 계획들이 차질을 빚을 수도 있겠네요.",
      );
      era.printButton("「조급해하지 말고 일단 푹 쉬자.」", 1);
      era.printButton("「무리하지 말고 일단 푹 쉬어.」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          "급할수록 돌아가라는 말이 운동에도 똑같이 적용되는 법이다.",
        );
        await era.printAndWait(
          "휴식 없는 노력은 결국 불균형을 초래하고, 더 나쁜 결과를 낳을 뿐이다.",
        );
        await flash.say_and_wait("으음……");
        await era.printAndWait(
          `에이신 플래시 역시 그 도리를 알고 있었기에, ${flash.sex}는 잠시 침묵한 뒤 천천히 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          "알겠습니다. 그럼 당신의 조언대로 일단 푹 쉴게요.",
        );
      } else {
        await era.printAndWait(
          "급할수록 돌아가라는 말은 운동에도 똑같이 적용된다.",
        );
        await era.printAndWait("무작정 무리하는 것은 상황을 악화시킬 뿐이다.");
        await flash.say_and_wait("으음……");
        if (!fail_again) {
          await era.printAndWait(
            `에이신 플래시 역시 그 도리를 알고 있었기에, ${flash.sex}는 잠시 침묵한 뒤 천천히 고개를 끄덕였다.`,
          );
          await flash.say_and_wait(
            "저는 이게 무리라고 생각하지는 않지만…… 당신 말씀이 맞네요.",
          );
          await flash.say_and_wait("그럼 당신의 조언대로 일단 푹 쉴게요.");
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] train_fumble
  train_fumble: (() => {
    const title = "무리는 금물";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (flash, you, fail_again) => {
      await era.printAndWait("에이신 플래시의 트레이닝이 실패했다.");
      await flash.say_and_wait('Autsch……');
      await flash.say_and_wait(
        "정말 죄송해요, 제가 부상을 입을 줄은 몰랐는데……",
      );
      await era.printAndWait(`보건실 안에서 ${flash.sex}가 미안한 어조로 말했다.`);
      await flash.say_and_wait(
        "하지만 이런 작은 부상 때문에 일정을 변경할 수는 없어요.",
      );
      await era.printAndWait(
        `다음 순간, ${flash.sex}는 고개를 저으며 다시 마음을 다잡으려 했다.`,
      );
      await flash.say_and_wait(
        "다행히 부상 정도가 받아들일 수 있는 범위 안이니까, 조금만 쉬면 계속 트레이닝할 수 있을 거예요.",
      );
      era.printButton("「일단 치료에 전념하자.」", 1);
      era.printButton("「정말로 계속할 수 있겠어?」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          "의욕적으로 트레이닝하는 건 좋지만, 그것 때문에 자신을 무리하게 몰아붙여서는 안 된다.",
        );
        await flash.say_and_wait(
          "하지만 여기서 너무 많은 시간을 낭비하면 다음 계획들이 밀려버릴 가능성이 있어서……",
        );
        await era.printAndWait(
          `${you.name}의 제안에 에이신 플래시의 얼굴에 망설임이 서렸다.`,
        );
        era.printButton("「부상이 악화되면 상황은 더 나빠질 거야.」", 1);
        await era.input();
        await era.printAndWait(`그 모습에 ${you.name}이(가) 가볍게 한숨을 쉬며 말했다.`);
        await flash.say_and_wait('……');
        await era.printAndWait(
          `확실히 ${you.name}의 말이 눈앞의 상대를 일깨운 모양이었다.`,
        );
        await era.printAndWait(
          `${flash.sex}는 고개를 떨구고 눈빛을 흔들며 득실을 따져보는 듯했다.`,
        );
        await flash.say_and_wait("알겠습니다……");
        await era.printAndWait(
          `しばらくして、${flash.sex}の肩から力が抜けた。`,
        );
        await flash.say_and_wait(
          "당신 말이 맞아요. 그렇다면 일단은 안심하고 치료에 전념할게요.",
        );
      } else {
        await era.printAndWait(
          "의욕적인 건 좋지만, 플래시의 지금 상태로 계속하는 건 너무 무리 아닐까?",
        );
        await flash.say_and_wait(
          "음, 고강도 운동은 당장 무리겠지만 가벼운 러닝 정도는 소화할 수 있어요.",
        );
        await era.printAndWait(
          `${you.name}의 우려 섞인 질문에 ${flash.sex}는 자신 있게 대답했다.`,
        );
        if (fail_again) {
          await flash.say_and_wait("윽!");
          await era.printAndWait(
            `……하지만 다음 순간, ${you.name}은(는) ${flash.sex}가 너무 급하게 일어나려다 신음하는 것을 보았다.`,
          );
          era.printButton("「역시 제대로 치료받자.」", 1);
          await era.input();
          await era.printAndWait(`그 광경에 ${you.name}은(는) 가볍게 한숨을 내쉬었다.`);
          await flash.say_and_wait("네……");
          await era.printAndWait(
            "부정할 수 없는 사실이 눈앞에 닥치자, 마음속에 아무리 미련이 남았어도 에이신 플래시는 고개를 숙이고 받아들일 수밖에 없었다.",
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] train_in_fat
  async train_in_fat(flash) {
    await flash.say_and_wait("……어라?");
    await era.printAndWait(
      "어느 날, 정기 신체검사 중에 에이신 플래시는 체중계의 숫자가 이전보다 늘어난 것을 발견했다.",
    );
    await flash.say_and_wait("체중이…… 늘었다고요?");
    await era.printAndWait(`그 광경에 ${flash.sex}는 미간을 찌푸렸다.`);
    await flash.say_and_wait(
      "기존의 일정표 외에 추가적인 다이어트 계획을 넣어야겠네요.",
    );
    await era.printAndWait(`거기까지 생각한 ${flash.sex}는 고개를 끄덕였다.`);
    await era.printAndWait(
      "그렇게 한동안의 노력 끝에 에이신 플래시의 체중은 다시 정상으로 돌아왔다.",
    );
  },

  // [번역 대상] ts_add
  ts_add: (() => {
    const title = "추가 트레이닝";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, festa, you) => {
      await era.printAndWait(
        "에이신 플래시는 뛰어난 퍼포먼스로 이번 트레이닝 목표를 완수했다.",
      );
      await era.printAndWait(
        `이제 쉬어도 될 법한 ${flash.sex}의 눈에 문득 운동장 한쪽에 서 있는 나카야마 페스타가 들어왔다.`,
      );
      await flash.say_and_wait("나카야마 씨, 지금 트레이닝 시간인가요?");
      await era.printAndWait(
        `상대가 잔뜩 나른한 표정을 짓고 있자 ${flash.sex}가 궁금한 듯 물었다.`,
      );
      await festa.say_and_wait("그래…… 그런데 도무지 의욕이 안 나네.");
      await era.printAndWait("나카야마 페스타는 어깨를 으쓱하며 대답했다.");
      await flash.say_and_wait("의욕이 안 난다고요?");
      await era.printAndWait(
        "그 말에 에이신 플래시의 얼굴에 걱정스러운 기색이 떠올랐다.",
      );
      await flash.say_and_wait("어디 몸이라도 안 좋은 건가요?");
      await festa.say_and_wait(
        "아니야. 그냥 혼자 하는 트레이닝은 자극이 부족해서 그래.",
      );
      await flash.say_and_wait("자극요?");
      await era.printAndWait(
        `상대의 말을 들은 ${flash.sex}는 무언가 생각하더니 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        "그렇다면 저와 함께 병주를 해보시는 건 어떠세요?",
      );
      await festa.say_and_wait("병주?");
      await era.printAndWait(
        "에이신 플래시의 제안에 나카야마 페스타의 얼굴에서 조금 전의 나른함이 사라지고, 흥미롭다는 듯한 미소가 번졌다.",
      );
      await festa.say_and_wait("그거 아주 재미있는 제안이네.");
      await festa.say_and_wait("어이, 거기 트레이너.");
      era.printButton("「?」", 1);
      await era.input();
      await era.printAndWait(
        `다음 순간, ${flash.sex}는 시선을 ${you.name}에게 돌렸다.`,
      );
      await festa.say_and_wait(
        `당장이라도 에이신 플래시를 끌고 시원하게 한 번 달리고 싶지만, ${
          flash.sex
        }는 네가 담당하는 ${flash.uma_sex_title} 맞지?`,
      );
      await festa.say_and_wait("네 의견은 어때?");
      era.printButton("「다녀와, 플래시.」", 1);
      era.printButton("「이미 휴식 시간이야.」", 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `에이신 플래시가 나카야마 페스타에게 뜨거운 자극이 될 레이스를 보여주고 싶어 한다면, ${flash.sex}가 원하는 대로 해주기로 했다.`,
        );
        await era.printAndWait(
          `${you.name} はエイシンフラッシュに手を振り、応援の合図を送った。`,
        );
        await flash.say_and_wait("네!");
        await era.printAndWait("그 모습에 에이신 플래시는 고개를 끄덕였다.");
        await flash.say_and_wait("그럼 전력을 다할게요, 나카야마 씨!");
        await festa.say_and_wait("하하! 좋아, 그래야지!");
        await era.printAndWait(
          "그 말에 나카야마 페스타도 기대감이 섞인 호탕한 웃음을 터뜨렸다.",
        );
        await era.printAndWait(
          "그렇게 두 사람은 코스로 달려나가 진지하게 병주 트레이닝에 임했다.",
        );
      } else {
        await era.printAndWait(
          `에이신 플래시가 나카야마 페스타에게 뜨거운 레이스를 보여주고 싶어 했고, ${you.name} 역시 ${flash.sex}의 소원을 들어주고 싶었지만.`,
        );
        await era.printAndWait(
          "오늘의 운동량은 이미 충분했다. 과도한 트레이닝은 오히려 몸에 문제를 일으킬 수 있었다.",
        );
        await era.printAndWait(
          `${you.name}은(는) 에이신 플래시를 향해 고개를 저었다.`,
        );
        await flash.say_and_wait("으음……");
        await era.printAndWait(
          "그 모습에 에이신 플래시는 아쉬운 기색을 내비쳤다.",
        );
        await flash.say_and_wait(
          "알겠습니다. 오버 트레이닝은 확실히 좋지 않죠.",
        );
        await flash.say_and_wait(
          "그렇다면 나카야마 씨, 우리 다음에 같이 달릴 수 있을까요?",
        );
        await era.printAndWait(
          'こうしてエイシンフラッシュは後ろから計画帳を取り出し、ナカヤマフェスタと約束した日付に丸をつけた。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_47_32
  we_47_32: (() => {
    const title = '胸の内・二';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_distracted エイシンフラッシュ専用状態 [分心]
     */
    const f = async (flash, you, callname, s_distracted) => {
      await flash.used_to_say_and_wait(
        '合宿が終わる日にお答えします。このあいだは、予定どおりに進めましょう。',
      );
      await era.printAndWait(
        'トレセンの合宿は短い。始まりから終わりまで、ひと月しかない。',
      );
      await era.printAndWait(
        `そのあいだ、${you.name} はエイシンフラッシュの調子が、秩序なく上下するのを感じた。時に固く、時に揺れ、時に ${you.name} に微笑み、時に空を見て迷う。`,
      );
      await era.printAndWait(
        `それでも ${you.name} は信じた。最後には理性で決める、と。どんな厳しいトレーニングにも文句を言わない相手にとって、これは取るに足らないことだ。`,
      );
      await flash.say_and_wait(
        `${callname}、本日の十七時から十八時、ご予定はありますか？`,
      );
      await era.printAndWait(
        `そして ${you.name} の期待を裏切らず、エイシンフラッシュは、完璧な答えを出した。`,
      );
      era.drawLine();
      await flash.say_and_wait(
        '実は、十年前の子どものころ、私は今のような、何事も正確を求める癖はありませんでした。',
      );
      await era.printAndWait('月末、合宿の宿のそばの浜辺。');
      await era.printAndWait(
        `エイシンフラッシュと ${you.name} は、海の縁を歩いていた。`,
      );
      await era.printAndWait('今、夕陽が向こうの果てへ、ゆっくり沈んでいく。');
      await era.printAndWait(
        '残光が金色に輝き、海岸線を一枚の壮麗な絵に染めていた。',
      );
      await flash.say_and_wait(
        '七歳のクリスマス前夜まで。その日、家に帰ると、父が Stollen を用意していました。ドイツのクリスマスの伝統パンです。',
      );
      await era.printAndWait(
        'そう言ってエイシンフラッシュは振り返り、無言でその絶景を見た。',
      );
      await era.printAndWait(`しばらくして、${flash.sex}はまた口を開いた。`);
      await flash.say_and_wait(
        '……作る過程で、一グラムの誤差も許さない真剣さでした。当時の私は理解できず、好奇心から尋ねました。',
      );
      await flash.say_and_wait(
        '『パパ、どうしてそんなに正確じゃなきゃいけないの？ 砂糖がレシピと少し違っても、味は変わらないでしょう。』',
      );
      era.printButton('「意外な発言だな。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} の知る相手からは、そんな投げやりな言葉は想像しにくい。`,
      );
      await flash.say_and_wait(
        'はい。だからこそ、父が次に言った言葉が、私の人生の軌跡を変えました。',
      );
      await era.printAndWait(
        `エイシンフラッシュはうなずいた。${flash.sex}の声に、懐かしさが混じっていた。`,
      );
      await flash.say_and_wait(
        '『もちろん品質だよ、フラッシュ。今日この誤差で基準を緩めたら、明日は？ 明後日は？』',
      );
      await flash.say_and_wait(
        '一度の緩みが次の緩みを呼び、ついには取り返しのつかない結果になる……わかりやすい道理ですよね。',
      );
      await flash.say_and_wait(
        '父は、それを私に知らせたかっただけだと思っていました。ですが次の言葉は、当時の私の理解をはるかに超えていました。',
      );
      await era.printAndWait(
        'そこでエイシンフラッシュはうつむき、手を胸に当てた。',
      );
      await flash.say_and_wait(
        '『だが品質が一番大事なわけじゃない。レシピさえあれば、誰でも完璧な菓子は作れる。』',
      );
      await flash.say_and_wait(
        '『だから肝心なのは、この心だ。菓子を通して、私たちの真心を感じてもらう。それがいちばんだ。』',
      );
      era.printButton('「大事なのは、込められた気持ちか？」', 1);
      await era.input();
      await flash.say_and_wait(
        'ですが心は調味料ではありません。食べ物をよりおいしくはできません。',
      );
      await era.printAndWait(
        'エイシンフラッシュは小さく息をつき、静かな瞳に、はっきりした揺らぎが走った。',
      );
      await flash.say_and_wait(
        '当時の私は、父にそう答えました。父は、まだ幼いからと詳しくは説明せず、あとで自然にわかる、と言っただけでした。',
      );
      era.printButton('「人生の経験と結びつく、ということか。」', 1);
      await era.input();
      await flash.say_and_wait(
        'はい。ですが幼い私は負けず嫌いで、あとまで待つ必要はないと思いました。',
      );
      await flash.say_and_wait(
        '親は子どものいちばんの手本だ、と言われます。当時の私は、二人のやり方を真似すれば、その言葉も理解できるのではないか、と考えました。',
      );
      await flash.say_and_wait(
        'ふふふ……現実離れした考えですね。今になっても、父のその言葉を、私はまだ完全には通じていません。',
      );
      await era.printAndWait(
        'エイシンフラッシュは自分をからかうように小さく笑った。過去の幼さを、少し滑稽に思っているようだった。',
      );
      await flash.say_and_wait(
        'ですが真似て学ぶうち、何事も厳密に、正しく、精密にやる難しさがわかり、それを日常にしている父と母を、ますます尊敬するようになりました。',
      );
      await flash.say_and_wait(
        'だからこそ、二人に誇ってもらいたいという思いが、胸の底から生まれました。',
      );
      era.printButton('「それが、すべての始まりか？」', 1);
      await era.input();
      await flash.say_and_wait('はい。それが、すべての始まりです。');
      await era.printAndWait(
        '言い終えると、エイシンフラッシュは後ろから、銀黒の勲章を取り出した。',
      );
      await flash.say_and_wait(
        'それから私はここに来て、あなたと出会いました。',
      );
      await era.printAndWait(
        `${flash.sex}はそれを長く見つめた。落日が光を収めるまで、口を開かなかった。`,
      );
      await flash.say_and_wait(
        `……${flash.uma_sex_title}として生まれ、コースを走れるのは誇らしいことだ、と聞きます。だから私はここで栄誉を得て、故郷へ帰りたいと願いました。`,
      );
      await flash.say_and_wait(
        'それが走る原動力であり、私がここまでこだわってきた理由です。',
      );
      await flash.say_and_wait('ですが……');
      await flash.say_and_wait('………');
      await era.printAndWait(
        `エイシンフラッシュは急に黙った。同時に ${you.name} は、${flash.sex}の手が力なく落ちるのを見た。`,
      );
      await flash.say_and_wait(
        '実行の途中で、その思いは、少しずつ偏った意志へ歪んでいきました。',
      );
      await era.printAndWait(`${flash.sex}は静かに言った。`);
      await flash.say_and_wait(
        '合宿の初日、あなたの言葉で、はっと気づきました。私の夢は、ずっと私ひとりのものではなかった、と。',
      );
      await flash.say_and_wait(
        '昔の私は、それがわかりませんでした……自分だけ前へ進み、あなたの考えを、一度も気にかけなかった。',
      );
      await flash.say_and_wait(
        'あなたの助けは、替えがきかないのに。私たちは一心同体であるはずなのに。',
      );
      era.printButton('「フラッシュ……」', 1);
      await era.input();
      await flash.say_and_wait(
        'よく思い返すと、私はあなたに、多くの恩を欠いています。',
      );
      await flash.say_and_wait(
        '皐月賞前の熱も、日本ダービー後の脚の傷も、あなたが一歩先にいちばん深いところまで考え、私の健康を最優先に計画を組み直してくれました。',
      );
      await flash.say_and_wait(
        '滑稽なことに、私はその緻密な計画を顧みず、未来の話ばかりしていました。',
      );
      await flash.say_and_wait(
        '……健康な身体がなければ、どんな夢も、意味のない空想になるというのに……',
      );
      await era.printAndWait(
        'そこでエイシンフラッシュは顔を上げ、まだ暗くなりきらない空へ、静かなため息をついた。',
      );
      era.printButton('「無事に回復できたのは、お前自身の努力だ。」', 1);
      await era.input();
      await era.printAndWait(
        `それを見て ${you.name} は眉を寄せた。${you.name} はこの様子を見たくない。エイシンフラッシュの言い方は、${flash.sex}自身の努力まで否定しているようだった。`,
      );
      await flash.say_and_wait(
        'ふ……こんなときまで慰めてくださるのですね。やはり、とても優しい方です。',
      );
      await era.printAndWait(
        `${flash.sex}は ${you.name} の言葉を聞き、${you.name} に小さく微笑んだ。`,
      );
      era.printButton('「事実だ。」', 1);
      await era.input();
      await era.printAndWait(`${you.name} はもう一度強調した。`);
      await flash.say_and_wait('私の言葉も、事実です。');
      await era.printAndWait(
        `エイシンフラッシュは首を振り、その話題には深入りしなかった。${flash.sex}は手を伸ばし、月初に ${you.name} が${flash.sex}に渡した銀黒の勲章を、また ${you.name} へ戻した。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はうつむいて勲章を見、また顔を上げて${flash.sex}を見た。`,
      );
      await flash.say_and_wait(
        'クラシック三冠に挑むのは夢を叶えるためです。ですが夢を叶える道は、クラシック三冠だけではありません。',
      );
      await flash.say_and_wait(
        '本当はとっくにわかっているべきでした。なのに自分の固執に縛られ、ひとりで袋小路に入っていました。',
      );
      era.printButton(
        '「お前が前から決めていた計画だ。こだわるのはわかる。」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        'ですが計画は変えられます。意固地になることこそ、未熟の現れです。',
      );
      await flash.say_and_wait('……あるいは……');
      await era.printAndWait(
        `そこで ${you.name} は、エイシンフラッシュが考え込むようにうなずくのを見た。`,
      );
      await flash.say_and_wait(
        'こんなに長くかかって、この道理に気づいた私は、やっと父と母に近づけたでしょうか。',
      );
      era.printButton('「ご両親も、お前が自分の道を歩くのを喜ぶはずだ。」', 1);
      await era.input();
      await flash.say_and_wait('おっしゃるとおりです。');
      await flash.say_and_wait(`ですから、${callname}。`);
      await flash.say_and_wait('ふぅ……');
      await era.printAndWait(
        '次の言葉の前に、エイシンフラッシュは深く息を吸った。今日いちばん大事な本題が、ここから始まるらしい。',
      );
      await flash.say_and_wait('今年のジャパンカップに、出走したいです。');
      era.printButton('「！」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}は ${you.name} の目を見て、一字一句、自分の考えを言った。`,
      );
      await flash.say_and_wait(
        `もし身体の都合で、同世代で最も強い${flash.uma_sex_title}だけが勝つ菊花賞に挑めないなら、目標をその上に置けばいい。`,
      );
      await flash.say_and_wait(
        '私は自分の絶頂で、私より経験の豊かな先輩に挑みたいのです。',
      );
      await flash.say_and_wait(
        `日本ダービーに勝った自分が、${flash.couple_title}に勝てるか、試したいのです。`,
      );
      era.printButton('「お前なら、できる。」', 1);
      await era.input();
      await flash.say_and_wait('ふふっ。');
      await era.printAndWait(
        `${you.name} のためらいのない支持を聞き、エイシンフラッシュは優しく笑った。`,
      );
      await flash.say_and_wait(
        'ええ。あなたがそばで支えてくださるなら、私はきっとできます。',
      );
      await era.printAndWait(
        `夜の帳が下り始めた浜辺で、異国の${flash.teen_sex_title}は穏やかな顔で ${you.name} に左手を差し出した。`,
      );
      await flash.say_and_wait('これから、これを目標に頑張りましょう！');
      await era.printAndWait(
        `${flash.sex}の声には、とても深い感情があった。天が崩れても動かない信頼だ。`,
      );
      era.printButton('「ああ。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はうなずき、自然に${flash.sex}の手を取った。`,
      );
      await era.printAndWait(
        `疑いなく、この夏合宿を経て、${you.name} たちの未来は、より鮮やかな火花を散らすだろう。`,
      );
      era.println();
      await era.printAndWait([
        flash.get_colored_name(),
        ' はもう ',
        s_distracted,
        ' ではなくなった！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_32
  we_95_32: (() => {
    const title = '未来のこと・三';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     * @param {string} callname エイシンフラッシュのトレーナーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait('夏の日々は、あっという間に過ぎた。');
      await era.printAndWait(
        `最後の夏合宿で、${you.name} はエイシンフラッシュの実力が着実に伸びていくのを見ていた。`,
      );
      await era.printAndWait(
        `最後の欠片をはめ込んだ鏡のように、今の${flash.sex}は状態がほぼ完璧で、出せる力もここ数年の頂点にある。`,
      );
      era.printButton('（これなら、天皇賞（秋）の走りも問題ないはずだ。）', 1);
      await era.input();
      await era.printAndWait(
        `それを見て、${you.name} は満足げに頷いた。${flash.sex}の夢がもうすぐ叶う喜びが、胸の内に湧いてくる。`,
      );
      await flash.say_and_wait(`${callname}？`);
      era.printButton('「どうした？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} の表情が妙だったのか、一通りのトレーニングを終えたエイシンフラッシュが、${you.name} の前に立ち、首を傾けて訊いた。`,
      );
      await flash.say_and_wait(
        '最近、私を見つめるあなたの目に、いつもとは違う感情が宿っている気がしまして。',
      );
      era.printButton('「使命が、もうすぐ果たせるからかもしれない。」', 1);
      await era.input();
      await flash.say_and_wait('使命を、果たす？');
      era.printButton('「お前の夢が叶うところを、見届けることだ。」', 1);
      await era.input();
      await era.printAndWait(
        `トレーナーとは、${flash.uma_sex_title}を助け、導き、管理し、最終的に${
          flash.couple_title
        }が円満な結末を迎えるよう支える存在だ。だから、${you.name} は自分の言い方に間違いはないと思っている。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `だが意外なことに、${you.name} の言葉を聞いても、エイシンフラッシュは嬉しそうな顔をせず、考え込んでしまった。`,
      );
      await flash.say_and_wait('では、そのあとは？');
      await era.printAndWait(`しばらくして、${flash.sex}は言った。`);
      era.printButton('「そのあと？」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は瞬きした。エイシンフラッシュがそう訊く意図が分からない。`,
      );
      await flash.say_and_wait('言い換えると、あなたの夢は何ですか？');
      era.printButton('「もちろん、お前の夢を叶えることだ。」', 1);
      await era.input();
      await era.printAndWait(`それを聞いて、${you.name} は反射的に答えた。`);
      await flash.say_and_wait('ふふっ。');
      await era.printAndWait(
        `${you.name} の答えを聞いて、エイシンフラッシュは小さく笑った。そう返すだろうと、分かっていたように。`,
      );
      await flash.say_and_wait('いいえ。知りたいのは、あなたの夢です。');
      await era.printAndWait(`次の瞬間、${flash.sex}は首を振った。`);
      await flash.say_and_wait('その件を除いたうえで、あなた自身の本音を。');
      await era.printAndWait(
        `そう言いながら、エイシンフラッシュは ${you.name} を見つめた。紺碧の瞳に、二ヶ月前にも ${you.name} が読み取れなかった揺らぎが、再び走っていた。`,
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `だが今は、目の前の人の細かな表情の変化を見ているうちに、${you.name} にも別の考えが浮かび始めていた。`,
      );
      era.printButton('「もう少し、考えさせてくれ。」', 1);
      await era.input();
      await era.printAndWait(`最終的に、${you.name} はそう言った。`);
      era.drawLine();
      await flash.say_and_wait('………');
      era.printButton('「フラッシュ？」', 1);
      await era.input();
      await era.printAndWait(
        `トレセン学園へ戻る車の中で、${you.name} はエイシンフラッシュの視線が、ずっとどこかを見つめていることに気づいた。`,
      );
      await flash.say_and_wait(
        '何でもありません。合宿の場所を見ていただけです。',
      );
      era.printButton('「合宿の場所？」', 1);
      await era.input();
      await flash.say_and_wait('はい。こちらで、たくさん学びましたから。');
      await flash.say_and_wait(
        `たとえば ${callname} と一緒に、多くのトレーニングを重ねて、自分の力をさらに伸ばせたこと。`,
      );
      era.printButton('「そうか。」', 1);
      await era.input();
      await flash.say_and_wait(
        'だから、ここへ来るのはこれが最後かもしれないと思うと、どうしても名残惜しくなってしまいます。',
      );
      era.printButton('「その大切な思い出を、胸に刻もう。」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュの微妙な表情を見て、${you.name} は慰めの言葉をかけた。`,
      );
      await flash.say_and_wait('はい。');
      await era.printAndWait(
        `${flash.sex}は頷き、それから ${you.name} のほうへ振り返った。`,
      );
      await flash.say_and_wait(`ところで、${callname}。`);
      era.printButton('「どうした？」', 1);
      await era.input();
      await flash.say_and_wait(
        '夢を叶えたあと、私が日本に残るとしたら、あなたはどう思いますか？',
      );
      era.printButton('「……えっ？」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュの突然の問いが、${you.name} を不意打ちにした。`,
      );
      await flash.say_and_wait(
        '両親のケーキ店を継ぐことは決まっていますが、その計画を進める途中で、なにかの理由で日本にしばらく滞在することもあるかもしれません。',
      );
      await era.printAndWait(
        `自分の質問が唐突すぎると分かっていたのか、続けて${flash.sex}は説明した。`,
      );
      era.printButton('「嬉しいと思う。」', 1);
      await era.input();
      await flash.say_and_wait('！');
      await era.printAndWait(
        `次の瞬間、${you.name} の率直な言葉に、${flash.sex}はわずかに目を見開いた。`,
      );
      await flash.say_and_wait('嬉しい……、ですか？');
      era.printButton('「お前が走る姿を、まだ見続けられるからな。」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は頷き、エイシンフラッシュに優しい笑みを向けた。`,
      );
      await flash.say_and_wait('……そう、ですか。');
      await era.printAndWait(
        `エイシンフラッシュは黙り込んだ。${you.name} は、${flash.sex}が視線を逸らしたのに気づいた。`,
      );
      era.printButton('「……フラッシュ？」', 1);
      await era.input();
      await flash.say_and_wait('……いいえ、何でもありません。');
      await era.printAndWait(
        `しばらくして、再び口を開いた${flash.sex}は首を振った。`,
      );
      await flash.say_and_wait(
        'その話は、あとにしましょう。今は、天皇賞（秋）が最優先です。',
      );
      await era.printAndWait(
        `そう言いながら、${flash.sex}の表情はすぐに覚悟へと切り替わった。`,
      );
      await flash.say_and_wait('父と母が、あそこで待っています。だから——');
      era.printButton('「胸を張って、進もう。」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_1
  ws_47_1: (() => {
    const title = "새해의 포부";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await flash.say_and_wait(
        `『Ich wünsche dir ein frohes neues Jahr!』 새해 복 많이 받으세요, ${callname}.`,
      );
      era.printButton("「새해 복 많이 받아」", 1);
      await era.input();
      await era.printAndWait(
        `新年の一日、トレーナールームで、${you.name} とエイシンフラッシュは互いに祝いの言葉を交わした。`,
      );
      await flash.say_and_wait("부디 이것을 받아주세요.");
      era.printButton("「?」", 1);
      await era.input();
      await era.printAndWait(
        `이어서 ${you.name}은(는) ${flash.sex}가 등 뒤에서 정성스럽게 포장된 선물 상자를 꺼내는 것을 보았다.`,
      );
      era.printButton("「이건...」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はエイシンフラッシュから贈り物を受け取り、開けたあと、中身を見て少し目を丸くした。`,
      );
      era.printButton("「...눈알이 달린 분홍색 원형 케이크?」", 1);
      await era.input();
      await flash.say_and_wait("후후후~");
      await era.printAndWait(
        `에이신 플래시는 ${you.name}의 묘사에 작게 웃음을 터뜨렸다.`,
      );
      await flash.say_and_wait(
        "객관적으로는 정확한 묘사입니다만, 이건 결코 『눈알이 달린 분홍색 원형 케이크』가 아니랍니다.",
      );
      await era.printAndWait(
        `이어서 ${flash.sex}는 손가락 하나를 치켜세우며 ${you.name}에게 이 선물의 구체적인 의미를 소개하기 시작했다.`,
      );
      await flash.say_and_wait(
        "『Glücksbringer』, 행운의 돼지라는 뜻이에요.",
      );
      await flash.say_and_wait(
        "독일에서는 돼지가 행운과 부를 가져다준다고 믿거든요. 그래서 새해가 되면 돼지를 본뜬 선물을 친한 지인에게 보내며 축복을 전하곤 하죠.",
      );
      era.printButton("「그렇구나, 정말 귀중한 선물이네.」(전 능력치 +10)", 1);
      era.printButton(`「그렇구나, 그래서 이게 돼지라는 거구나.」(스킬 포인트 +70)`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は箱を見た。エイシンフラッシュのわかりやすい説明を聞いても、このピンクの球体を、自分が知る豚と結びつけるのは難しい。`,
        );
        await era.printAndWait("하지만 어찌 됐든, 축하하는 마음은 무엇보다 값진 법이다.");
        await era.printAndWait(
          `그렇기에 ${you.name}은(는) 이 선물을 매우 소중하게 간직하기로 했다.`,
        );
        await flash.say_and_wait("후후, 그러고 보니...");
        await era.printAndWait(
          "바로 그때, 에이신 플래시가 갑자기 쑥스러운 듯 웃음을 지었다.",
        );
        await flash.say_and_wait(
          `最初は写実で作るつもりでした。ですがファルコさんが、それだと少し怖いのではないかと。最終的に${flash.sex}の提案で、デフォルメした形にすることにしました。`,
        );
        await flash.say_and_wait(
          "하지만 유감스럽게도 예술 방면에 있어서는 모사 외의 다른 기법에는 경험이 없어서... 여기에는 데포르메도 포함되어 있었네요.",
        );
        await flash.say_and_wait(
          "그래서 나름대로 최선을 다해 구현해 보려 했습니다만, 역시 최종적으로 나타난 결과물은 상태가 그리 좋지 못하군요.",
        );
        era.printButton("「중요한 건 겉모습이 아니라 마음이야.」", 1);
        await era.input();
        await flash.say_and_wait("!");
        await era.printAndWait(
          `${you.name}의 말을 들은 에이신 플래시는 무언가 생각에 잠긴 듯 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          "...당신 말이 맞아요. 선물이라는 건 그 속에 담긴 『마음』이 중요한 것이지, 『물건』 그 자체가 아니니까요.",
        );
      } else {
        await era.printAndWait(
          `エイシンフラッシュの説明はわかりやすい。だが箱の中のピンクの球体を、自分が知る豚と結びつけるのは、やはり難しい。`,
        );
        await flash.say_and_wait("으음.");
        await era.printAndWait(
          `${you.name} の言葉に、エイシンフラッシュは少し困った顔をした。`,
        );
        await flash.say_and_wait(
          `最初は写実で作るつもりでした。ですがファルコさんが、それだと少し怖いのではないかと。最終的に${flash.sex}の提案で、デフォルメした形にすることにしました。`,
        );
        await flash.say_and_wait(
          "하지만 유감스럽게도 예술 방면에 있어서는 모사 외의 다른 기법에는 경험이 없어서... 여기에는 데포르메도 포함되어 있었네요.",
        );
        await flash.say_and_wait(
          "그래서 나름대로 최선을 다해 구현해 보려 했습니다만, 지금 보니 역시 최종적으로 나타난 결과물은 좋지 못하네요...",
        );
        era.printButton("「...그렇긴 해도, 정말 맛있어!」", 1);
        await era.input();
        await era.printAndWait(
          `エイシンフラッシュの顔色が沈んだのを見て、${you.name} は箱に付いていた器具を取り、球体に大きな欠けを作った。`,
        );
        await flash.say_and_wait("!");
        await flash.say_and_wait(`${callname}……ふふ～～`);
        await era.printAndWait(
          `${you.name}이(가) 한입 또 한입 게걸스럽게 먹어 치우는 모습을 보자 에이신 플래시의 표정에 다시 기쁨이 서리기 시작했다.`,
        );
        await flash.say_and_wait(
          "정말이지, 아무리 맛있어도 먹는 속도에 주의해 주세요.",
        );
        await flash.say_and_wait(
          "하지만 기쁘네요. 직접 만든 디저트를 인정받을 수 있어서.",
        );
        await flash.say_and_wait(
          "그 속에는... 제 마음도 듬뿍 담겨 있으니까요.",
        );
        era.printButton("「마음?」", 1);
        await era.input();
      }
      await flash.say_and_wait(
        "올해는 제 지금까지의 인생 중에서 가장 중요한 한 해가 될지도 모르겠어요.",
      );
      await era.printAndWait(
        `エイシンフラッシュは口を開き、この贈り物に込めた${flash.sex}の気持ちを ${you.name} に説明した。`,
      );
      await flash.say_and_wait(
        "사츠키상, 일본 더비, 국화상... 클래식 3관을 향한 도전이 코앞으로 다가왔습니다.",
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 목소리가 점차 진지해지는 것을 느낄 수 있었다.`,
      );
      await flash.say_and_wait(
        "꿈을 이루기 위해, 부모님께서 저를 자랑스럽게 여기실 수 있도록, 저는 반드시 해내야만 합니다.",
      );
      await flash.say_and_wait("그래서...");
      await era.printAndWait(
        `하지만 ${you.name}이(가) 자세를 바로잡고 플래시의 고백을 경청하려던 찰나.`,
      );
      await era.printAndWait("다음 순간, 분위기는 다시 순식간에 누그러졌다.");
      await flash.say_and_wait(
        "이 행운의 돼지에, 당신과 함께 이 가시밭길 같은 길을 무사히 평안하게 끝까지 걸어갈 수 있기를 바라는 염원을 담았어요.",
      );
      era.printButton("「플래시...」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name} に優しい笑みを向けるエイシンフラッシュを見て、もう多くを言う必要はないと思った。`,
      );
      era.printButton("「고마워.」", 1);
      await era.input();
      await era.printAndWait(
        `그렇게 ${you.name}은(는) 정중하게 고개를 끄덕이며 그 축복을 받아들였다.`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_13
  ws_47_13: (() => {
    const title = "갑작스러운 재앙";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_weak エイシンフラッシュ専用状態 [虚弱]
     */
    const f = async (flash, you, callname, s_weak) => {
      await era.printAndWait(
        "케이세이배에서 에이신 플래시는 훌륭한 퍼포먼스로 자신의 성적을 남겼다. 계획대로라면 다음 단계는 사츠키상에 참가하는 것이었다.",
      );
      await flash.say_and_wait(`......${callname}.`);
      await era.printAndWait(
        "......그랬어야 했다. 하지만 레이스 개막을 일주일 앞두고 사고가 발생하고 말았다.",
      );
      era.printButton("「열이라도 나는 거야?」", 1);
      await era.input();
      await era.printAndWait(
        `학원 보건실 안, ${you.name}은(는) 걱정스러운 표정으로 병상에 누워 있는 에이신 플래시를 바라보았다.`,
      );
      await flash.say_and_wait("......네.");
      await era.printAndWait(`${flash.sex}는 힘없이 고개를 끄덕였다.`);
      await flash.say_and_wait(
        "어제 저녁 6시에 쇼핑하러 나갔을 때, 일기예보의 강수 확률을 너무 믿고 우산을 챙기지 않은 탓에 도중에 갑작스러운 폭우를 만나 온몸이 젖은 것이 원인... 콜록, 콜록!.",
      );
      await era.printAndWait(
        "에이신 플래시의 말은 격한 기침 소리에 가로막혔다.",
      );
      await era.printAndWait(
        `${flash.sex}의 병세가 상당히 심각해 보였기에, 이를 본 ${you.name}은(는) 가볍게 한숨을 내쉬었다.`,
      );
      era.printButton("「아무래도... 다음 주의 사츠키상은 나가지 않는 게 좋겠어.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 몸이 약해진 환자는 충분히 휴식을 취하며 고강도 운동을 피해야 한다는 도리를 잘 알고 있었다.`,
      );
      await flash.say_and_wait("!");
      await era.printAndWait("하지만 에이신 플래시의 생각은 달랐다.");
      await flash.say_and_wait("아뇨! 의사 선생님도 충분히 쉬기만 하면 금방 회복될 거라고 하셨어요!");
      await flash.say_and_wait(
        "게다가 사츠키상까지는 아직 7일이나 남았으니, 시간은 분명... 콜록콜록!",
      );
      era.printButton("「진정해! 플래시.」", 1);
      await era.input();
      await era.printAndWait(
        `急に熱くなり、起き上がりかけたエイシンフラッシュを見て、${you.name} は${flash.sex}を寝かせるように示した。`,
      );
      await flash.say_and_wait("......충분...해요......");
      await flash.say_and_wait("............");
      await era.printAndWait("에이신 플래시는 침묵 속에 다시 침대에 누웠다.");
      await era.printAndWait(
        `십여 초가 흐른 뒤, 다시 냉정을 되찾은 ${flash.sex}가 그제야 ${you.name}을(를) 쳐다보았다.`,
      );
      await flash.say_and_wait(
        `죄송해요, ${callname}. 제가 추태를 보였습니다.`,
      );
      era.printButton('「焦っても、何も解決しない。」', 1);
      await era.input();
      await flash.say_and_wait("......네, 당신 말이 맞아요.");
      await flash.say_and_wait(
        "하지만 이미 세워둔 계획은 무너뜨릴 수 없습니다. 그러니 설령 약해진 몸을 이끌고서라도 저는 반드시 사츠키상에 나가야 해요.",
      );
      era.printButton("「그런 상태로는 완벽한 실력을 발휘하기 힘들다는 걸 너도 알잖아.」", 1);
      await era.input();
      await flash.say_and_wait(
        "......하지만 시도조차 하지 않는다면 정말로 기회는 완전히 사라져 버리고 말아요.",
      );
      await era.printAndWait(
        `エイシンフラッシュは ${you.name} の言葉の含みを否定しなかった。それでも${flash.sex}は、出走を諦めなかった。`,
      );
      era.printButton("「.........」", 1);
      await era.input();
      await era.printAndWait(
        `그 모습을 본 ${you.name}은(는) 아무 말 없이, 그저 ${flash.sex}의 눈을 진지하게 뚫어지라 쳐다보았다.`,
      );
      await flash.say_and_wait(
        "그러니 부탁드려요. 제가 사츠키상에 나가는 것을 허락해 주세요.",
      );
      await flash.say_and_wait(
        "그것은 제 꿈을 이루기 위해 반드시 해야만 하는 일입니다.",
      );
      await era.printAndWait(
        `그 눈빛에서 ${you.name}은(는) 꺾이지 않는 고집과 무슨 일이 있어도 목표를 이루겠다는 집념을 읽어냈다.`,
      );
      era.printButton("「...알겠어. 그때 가서 정말 문제가 없다면 가도록 해.」", 1);
      await era.input();
      await era.printAndWait(
        `결국 ${you.name}은(는) 가볍게 한숨을 쉬며 양보를 선택했다.`,
      );
      era.println();
      era.print([flash.get_colored_name(), ' は ', s_weak, ' になった！']);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_16
  ws_47_16: (() => {
    const title = "경험담 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} s_weak エイシンフラッシュ専用状態 [虚弱]
     */
    const f = async (flash, you, s_weak) => {
      await era.printAndWait("일본 더비는 클래식 3관 레이스의 두 번째 관문이다.");
      await era.printAndWait(
        "이미 지나간 사츠키상과 비교하면 2400m라는 길이를 가진 이 레이스는 난이도 면에서 의심의 여지 없이 훨씬 가혹하다.",
      );
      await era.printAndWait(
        "그렇기에 에이신 플래시의 말대로 우승을 차지하기 위해서는 배의 노력이 필요했다.",
      );
      await era.printAndWait("......하지만......");
      era.printButton(
        "「미안하지만, 네 트레이닝 계획에는 동의할 수 없어.」",
        1,
      );
      await era.input();
      await flash.say_and_wait("엣, 왜인가요?");
      await era.printAndWait(
        `사츠키상이 끝난 지 사흘째 되는 날, 에이신 플래시는 수정된 계획표를 ${you.name}에게 건넸다.`,
      );
      await era.printAndWait(
        `${you.name} は丁寧に目を通した。びっしり詰まった文字から、「高強度」の四字が浮かび上がる。`,
      );
      era.printButton(
        "「일본 더비가 너에게 얼마나 중요한지는 알지만, 그렇다고 무리할 이유는 안 돼.」",
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name}은(는) 짧게 자신의 의견을 말했다.`);
      await era.printAndWait(
        "그러나 에이신 플래시는 그 말을 듣고 고개를 저었다.",
      );
      await flash.say_and_wait(
        "아뇨, 오해하셨어요. 이건 무리가 아니라 양이 질의 변화를 끌어낸다는 이론을 바탕으로 도출된 결과입니다.",
      );
      era.printButton("「양이 질을 변화시킨다고?」", 1);
      await era.input();
      await flash.say_and_wait("네.");
      await era.printAndWait(
        `에이신 플래시는 손가락 하나를 펴며 ${you.name}에게 설명했다.`,
      );
      await flash.say_and_wait(
        "오늘부터 일본 더비 개막까지 남은 시간은 39일입니다.",
      );
      await flash.say_and_wait(
        "정상적인 상황이라면 한 달 반도 채 되지 않는 이 기간 안에 실력을 끌어올려 레이스에서 더 좋은 성과를 내는 것은 거의 불가능에 가까운 일이죠.",
      );
      await flash.say_and_wait(
        "그래서 고민 끝에 저는 극단적인 해결책을 떠올렸습니다. 즉 단기간에 훈련량을 대폭 늘려 성장에 필요한 시간을 압축하는 것이죠.",
      );
      await flash.say_and_wait(
        `이를 위해 특별히 고강도 훈련으로 유명한 미호노 부르봉 양에게 조언을 구했고, ${flash.sex}의 제안에 따라 지금 당신이 보시는 이 훈련 계획을 세웠습니다.`,
      );
      era.printButton(
        "「...말하자면 신체의 잠재력을 최대한 쥐어짜는 식의 훈련 방식이라는 거네?」",
        1,
      );
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 말에 ${you.name}은(는) 생각에 잠겼다.`,
      );
      await era.printAndWait(
        `${
          flash.sex
        }가 말한 이 훈련 방법은 ${you.name}도 들어본 적이 있었다. 그리고 확실히 일부 ${flash.uma_sex_title}들에게 기적 같은 효과를 불러온 적도 있었다.`,
      );
      await era.printAndWait(
        `하지만 사람마다 체질이 다르기에, ${you.name}은(는) 이 방식이 에이신 플래시에게도 똑같이 통할지는 알 수 없었다.`,
      );
      await era.printAndWait(
        `게다가 그런 불확실한 가능성을 위해 ${flash.sex}가 부상을 입을 수도 있다는 높은 위험을 감수해야만 한다.`,
      );
      await era.printAndWait(
        `트레이너로서 ${you.name}은(는) 도저히 그것을 받아들일 수 없었다.`,
      );
      era.printButton('「ほかのやり方を、先に試さないか？」', 1);
      await era.input();
      await era.printAndWait(
        `그리하여 ${you.name}은(는) 완곡하게 자신의 뜻을 전했다.`,
      );
      await flash.say_and_wait(
        "하지만 이것 말고는 준비 기간 안에 제 능력을 더 효율적으로 끌어올릴 방법이 없는걸요!",
      );
      await era.printAndWait(
        `${you.name} が${flash.sex}の提案を否定したのを見て、エイシンフラッシュの声に、珍しく焦りが混じった。`,
      );
      await flash.say_and_wait(
        "제발 믿어주세요. 미호노 부르봉 양과 함께 심사숙고해서 내린 결론입니다. 훈련 중의 위험이나 도중에 마주할 수 있는 상황까지 모두 고려했다고요.",
      );
      await flash.say_and_wait(
        "제 꿈을 위해, 부모님의 자랑이 되기 위해 저는 반드시 일본 더비에서 이겨야만 합니다. 이 영광을 차지해야만 해요.",
      );
      await flash.say_and_wait("그러니──");
      era.printButton(
        "「하지만 난 그 과정에서 네 몸이 상하는 게 더 걱정돼.」",
        1,
      );
      await era.input();
      await flash.say_and_wait("!");
      era.printButton(
        "「그리고 네 부모님께서도 네가 이런 방식으로 자신을 증명하는 걸 원하시지는 않을 거야.」",
        1,
      );
      await era.input();
      await flash.say_and_wait(".........");
      await era.printAndWait(
        `뜻밖에도 에이신 플래시는 ${you.name}의 말을 듣고 크게 놀라며, 동요하는 반응을 보였다.`,
      );
      await flash.say_and_wait("............");
      await flash.say_and_wait("............");
      await flash.say_and_wait("......그렇군요......");
      await era.printAndWait(`${flash.sex}는 침묵에 빠졌다.`);
      await era.printAndWait(
        `${you.name} には、エイシンフラッシュの内心はわからない。だが今、${flash.sex}が ${you.name} を見つめる碧い瞳の中で、${you.name} には理解しきれない、複雑な感情が揺れていることだけは確かだった。`,
      );
      await flash.say_and_wait("......알겠습니다.");
      await era.printAndWait(
        "긴박했던 분위기가 점차 완화되었다. 몇 초 후 에이신 플래시는 시선을 돌렸다.",
      );
      await flash.say_and_wait("제가 생각이 짧았던 모양이네요. 정말 죄송합니다.");
      await era.printAndWait(
        `それから${flash.sex}は ${you.name} に深くお辞儀をした。立ち上がると、二人の争いの種になった計画表は、また${flash.sex}の手元に戻っていた。`,
      );
      await flash.say_and_wait("돌아가서 다시 한번 잘 생각해보도록 할게요.");
      if (era.get('status:37:虚弱') > 0) {
        await era.printAndWait(
          `사츠키상 전의 그 다툼과는 달리, 이번에는 ${flash.sex}가 먼저 양보를 선택했다.`,
        );
        era.println();
        era.print([
          flash.get_colored_name(),
          ' はもう ',
          s_weak,
          ' ではなくなった！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_17
  ws_47_17: (() => {
    const title = "경험담 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} mr_cb ミスターシービー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname_17 シンボリルドルフのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_57 ミスターシービーのプレイヤーへの呼び方
     */
    const f = async (flash, luna, mr_cb, you, callname_17, callname_57) => {
      await luna.say_and_wait([
        'つまり、それが私を訪ねた理由ですか、',
        callname_17,
        '。',
      ]);
      await era.printAndWait(
        `에이신 플래시가 고강도 훈련 계획을 포기하도록 설득하는 데는 성공했지만, 동시에 ${you.name}은(는) 일본 더비가 ${flash.sex}에게 얼마나 중요한지 잘 알고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자신만의 방식으로 ${flash.sex}를 돕기로 했다. 그리하여 심사숙고 끝에 ${you.name}은(는) 이곳을 찾아왔다.`,
      );
      era.printButton(
        "「맞아. 네가 에이신 플래시와 모의 레이스를 해줬으면 좋겠어.」",
        1,
      );
      await era.input();
      await era.printAndWait(
        `트레센 학원 학생회실 안, 『황제』 ${luna.name}는 평온한 기색으로 ${you.name}을(를) 바라보았다.`,
      );
      await luna.say_and_wait(
        `정말 뜻밖의 요청이네. 나와 함께 달리고 싶어 하는 ${flash.uma_sex_title}들은 많지만, 내가 달려주기를 바라는 트레이너는 정말 드무니.`,
      );
      era.printButton(`「${flash.sex}에게는 네 힘이 필요해.」`, 1);
      await era.input();
      await luna.say_and_wait("호오?");
      await era.printAndWait(
        `${you.name}이(가) 그렇게 말하자 ${luna.name}의 얼굴에 흥미롭다는 표정이 떠올랐다.`,
      );
      await luna.say_and_wait(
        "그건 어떤 의미지? 내가 알기로 에이신 플래시는 현재 올해의 일본 더비를 준비하고 있는 것으로 안다만.",
      );
      era.printButton("「구체적으로 말하자면...」", 1);
      await era.input();
      await era.printAndWait(
        "일본 더비에서 이기기 위해서는 자신의 능력을 끌어올리는 것 외에도 한 가지 길이 더 있었다.",
      );
      await era.printAndWait(
        `その領域の、より強い者と戦うこと。その過程で${flash.couple_title}の力を肌で知り、経験を得て、次のレースの臨機応変に活かす。`,
      );
      await era.printAndWait(
        `理論を実戦に落とせば、こうなる——エイシンフラッシュは普段どおりの強度で日常トレーニングを続けつつ、ふさわしい相手と${flash.sex}で模擬レースをする。`,
      );
      await luna.say_and_wait("하하하하.");
      await era.printAndWait(
        `${you.name}의 생각을 다 들은 ${luna.name}는 크게 웃음을 터뜨렸다.`,
      );
      await luna.say_and_wait("과연, 재미있는 생각이군.");
      await luna.say_and_wait(
        "이 『무패 3관』의 손에서 일본 더비의 경험을 훔쳐 가려는 속셈이란 거지. 상당히 대담무쌍하군.",
      );
      era.printButton(`「그것이 ${flash.sex}에게 필요하기 때문이야.」`, 1);
      await era.input();
      await luna.say_and_wait("음.........");
      await era.printAndWait(
        `${luna.name} は小さく唸り、${flash.sex}の指が机を軽く叩いた。何かを考えているようだった。`,
      );
      await luna.say_and_wait("좋다.");
      await era.printAndWait(
        `잠시 후 다시 입을 연 ${flash.sex}는 납득했다는 미소를 지었다.`,
      );
      await luna.say_and_wait([
        callname_17,
        '、担当',
        flash.uma_sex_title,
        'への思いは、十分に伝わっています。ですから私からも、一つ提案を。',
      ]);
      era.printButton("「제안?」", 1);
      await era.input();
      await luna.say_and_wait(
        `私が相手を務めるのも、不可能ではありません。ですが私より、エイシンフラッシュ${flash.sex}には、もう一色、鮮やかな相手が要るかもしれません。`,
      );
      await luna.say_and_wait("바로... 자유로운 바람 같은 존재 말이지.");
      era.drawLine();
      await era.printAndWait([
        "그 후, ",
        you.name,
        "은(는) ",
        luna.get_colored_name(),
        "의 지시에 따라 방금 중상급 레이스가 끝난 경기장으로 향했다.",
      ]);
      await era.printAndWait(`そこで ${you.name} は出会った……`);
      await mr_cb.say_as_unknown_and_wait(
        "하아~ 오늘 레이스는 정말 최고였어. 이렇게 자유로운 분위기라니, 내 마음을 억누르기가 힘들 정도야.",
      );
      era.printButton("「너는...」", 1);
      await era.input();
      await mr_cb.say_as_unknown_and_wait(
        "발걸음, 호흡, 응원... 내가 느끼고 싶어 했던 모든 것들이 이곳에 모여 있어.",
      );
      await mr_cb.say_as_unknown_and_wait([
        'そっちは？ 何しに来たんだ、',
        callname_57,
        '。',
      ]);
      await era.printAndWait(
        `말을 마치며, 가늘고 긴 체구와 온몸에서 풀밭 같은 싱그러운 기운을 내뿜는 ${flash.uma_sex_title}가 뒤를 돌아 ${you.name}에게 생긋 미소 지었다.`,
      );
      era.printButton("「...미스터 시비.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}의 눈앞에 나타난 이는 다름 아닌, 매료될 만큼 자극적인 주법으로 3관의 칭호를 거머쥔 ${flash.uma_sex_title}──미스터 시비였다.`,
      );
      await mr_cb.say_and_wait("뭐, 자세한 사정은 이미 전해 들었어.");
      await mr_cb.say_and_wait(
        `요컨대, 이제 곧 더비에 출주할 ${flash.uma_sex_title}와 함께 달려달라는 거지?`,
      );
      era.printButton("「응.」", 1);
      await era.input();
      await mr_cb.say_and_wait("하하, 좋아.");
      await era.printAndWait(
        "미스터 시비는 아주 시원스럽게 고개를 끄덕였다.",
      );
      era.printButton("「...좀 더 고민해 보지 않아도 괜찮겠어?」", 1);
      await era.input();
      await mr_cb.say_and_wait("아니, 꽤 재미있을 것 같으니까.");
      await mr_cb.say_and_wait("게다가 나에게 즐거움을 줄 수만 있다면 몇 번이라도 기꺼이 어울려 줄게.");
      era.printButton("「정말 고마워!」", 1);
      await era.input();
      await era.printAndWait(
        `그렇게 에이신 플래시의 모의 레이스 상대가 결정되었다. 3관 ${flash.uma_sex_title}인 미스터 시비가 직접 나서기로 한 것이다.`,
      );
      await era.printAndWait('あとは、日時を決めるだけだ。');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_18
  ws_47_18: (() => {
    const title = '経験の話・三';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} mr_cb ミスターシービー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, mr_cb, you) => {
      await flash.say_and_wait(`三冠の${mr_cb.uma_sex_title}、ですか……`);
      await flash.say_and_wait(
        'いえ、怖くはありません。おっしゃるとおり、得難い機会です。掴まなければなりません。',
      );
      await flash.say_and_wait('それに……より強い者との対決、私も楽しみです。');
      era.drawLine({ content: '約束の日' });
      await era.printAndWait(
        `${you.name} とエイシンフラッシュは、トレセン学園のグラウンドへ向かった。`,
      );
      await mr_cb.say_and_wait('準備できたら、始めようか。');
      await flash.say_and_wait(
        'はい。よろしくお願いいたします、シービーさん。',
      );
      await era.printAndWait(
        'ミスターシービーは、とうに待っていた様子だった。',
      );
      await era.printAndWait(
        `それを見て、${you.name} はエイシンフラッシュの肩を励ますように叩いた。`,
      );
      era.printButton('「行ってこい！」', 1);
      await era.input();
      await flash.say_and_wait('はい！');
      await mr_cb.say_and_wait(
        `ふふっ。いいね。三冠の${mr_cb.uma_sex_title}なんて肩書き、全然気にしてない。`,
      );
      await era.printAndWait(
        'エイシンフラッシュの、退かない落ち着いた様子に、ミスターシービーは感心してうなずいた。',
      );
      await mr_cb.say_and_wait('楽しいレースになりそうだ。手は抜かないよ。');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_18_end
  async ws_47_18_end(flash, mr_cb, you, rank) {
    await era.printAndWait([
      mr_cb.get_colored_name(),
      ' は',
      flash.uma_sex_title,
      'という仕事で名高い先輩だ。実力も経験も、三冠の王である',
      flash.sex,
      'は、疑いなく ',
      flash.get_colored_name(),
      ' を全方位で上回っている。',
    ]);
    if (rank === 1) {
      await era.printAndWait(
        'だがレースの勝ちは、そんな表面の要素だけでは決まらない。',
      );
      await flash.say_and_wait('ふぅ……私……勝ちました？');
      era.printButton('「よくやった！」', 1);
      await era.input();
      await era.printAndWait([
        'レースの途中、',
        flash.get_colored_name(),
        ' は強い勝ちへの執念を見せた。',
        mr_cb.get_colored_name(),
        ' に詰められ、絡まれ、何度か交わされても、',
        flash.sex,
        'は諦めずに攻めを組み直し、その粘りが、望み薄に見えた結果を書き換え、勝利を手にした。',
      ]);
      await mr_cb.say_and_wait('はっはっは、本当に面白かった。');
      await era.printAndWait([
        mr_cb.get_colored_name(),
        ' は大笑した。負けたのに、',
        mr_cb.sex,
        'は前より興奮しているように見えた。',
      ]);
    } else {
      await era.printAndWait(
        `だから後者の敗戦は、最初から ${you.name} の想定内だった。`,
      );
      await flash.say_and_wait('ふぅ……私の負けです。');
      era.printButton('「お疲れ。」', 1);
      await era.input();
      await era.printAndWait([
        'それでも、途中で ',
        mr_cb.get_colored_name(),
        ' に交わされたあと、',
        flash.get_colored_name(),
        ' は最後まで追い続け、勝利を自分の手に戻そうとした。その粘りに、',
        you.name,
        ' は胸を打たれた。',
      ]);
      await mr_cb.say_and_wait('ははは。');
      await era.printAndWait(`おそらく、${you.name} だけではない。`);
    }
    await mr_cb.say_and_wait('勝ちたい気持ち、かなり強いね。');
    await mr_cb.say_and_wait(
      `こっちまで伝わってきた……やっぱりエイシンフラッシュ、君は楽しいよ。`,
    );
    await flash.say_and_wait('楽しい……ですか。');
    await flash.say_and_wait(
      '……とにかく、本日はありがとうございました、シービーさん。',
    );
    await era.printAndWait(
      `エイシンフラッシュは何度か息を整え、${flash.sex}は目の前のミスターシービーにうなずいて礼を述べた。`,
    );
    await mr_cb.say_and_wait(`ねえ、どうしてそんなに勝ちを欲しがるの？`);
    await flash.say_and_wait('え。');
    await era.printAndWait(
      `次の瞬間、いきなりの問いが${flash.sex}を少し驚かせた。`,
    );
    await flash.say_and_wait(
      'なぜなら……勝利を目的としないレースに、意味はありません。',
    );
    await mr_cb.say_and_wait('それ以外は？');
    await flash.say_and_wait('それ以外、ですか？');
    await mr_cb.say_and_wait(`走るのは好き？ 君にとって、走る意味は何？`);
    await flash.say_and_wait('…………');
    await era.printAndWait(
      'ミスターシービーの言葉に、エイシンフラッシュは黙った。',
    );
    await flash.say_and_wait(
      '……申し訳ありません。シービーさんのその問いの意味が、私にはわかりません。',
    );
    await era.printAndWait(`しばらくして、${flash.sex}は首を振った。`);
    await flash.say_and_wait(
      '私にとって、走ることは走ることです。目的を果たす手段であり、必要な行為です。',
    );
    await flash.say_and_wait(
      'そこに余計な感情を乗せる必要はありません。私は勝つだけです。勝ち続けて、すべてが終わる日まで。',
    );
    await mr_cb.say_and_wait(
      `じゃあ日本ダービーは？ ダービーの${flash.uma_sex_title}になりたいのに、日本ダービーには特別な感情がないの？`,
    );
    await flash.say_and_wait('はい。');
    await mr_cb.say_and_wait('勝つために勝つだけか。つまらないね。');
    await era.printAndWait('ミスターシービーは肩をすくめた。');
    await mr_cb.say_and_wait(
      'そんな考えに縛られていたら、ちっとも自由じゃない。',
    );
    await flash.say_and_wait('……自由、ですか？');
    await mr_cb.say_and_wait(
      '日本ダービーに勝つコツは、勝つことだけを考えないことだよ。',
    );
    await flash.say_and_wait('え？');
    await mr_cb.say_and_wait(
      'ただ勝つより大事な感情を見つけて、それを力にする。',
    );
    await mr_cb.say_and_wait(
      '走って、また走る。限界も、相手も、運も、全部超えるまで。',
    );
    await flash.say_and_wait('………');
    await mr_cb.say_and_wait('わかる？');
    await flash.say_and_wait('……私は……');
    await mr_cb.say_and_wait('まあ、わからなくてもいい。');
    await era.printAndWait(
      '眉を寄せて考えるエイシンフラッシュを見て、ミスターシービーは微笑んだ。',
    );
    await mr_cb.say_and_wait(
      `よく考えて。あとは自分だ。一生に一度の日本ダービーで、何を悟るか。`,
    );
    await mr_cb.say_and_wait(
      'あ、でもまた相手が欲しくなったら、いつでも付き合うよ。',
    );
    await mr_cb.say_and_wait(
      '最初に言ったとおり、楽しいことなら何度でも大丈夫。',
    );
    era.printButton('「ありがとうございました、シービーさん。」', 1);
    await era.input();
    era.drawLine();
    await flash.say_and_wait('本日は、ありがとうございました。');
    await era.printAndWait(
      `ミスターシービーと別れたあと、エイシンフラッシュは急に振り返り、${you.name} に礼を言った。`,
    );
    era.printButton('「それが俺の仕事だ。」', 1);
    await era.input();
    await flash.say_and_wait('だからこそ、なおさら礼を述べるべきです。');
    await era.printAndWait(
      'エイシンフラッシュは首を振り、少し感慨のこもった声だった。',
    );
    await flash.say_and_wait(
      'シービーさんとの走りで、新しいものにたくさん触れました。',
    );
    await flash.say_and_wait(
      `……${flash.sex}の最後の言葉の具体的な意味は、まだよくわかりません。`,
    );
    await flash.say_and_wait(
      'ですが、わかっている分だけでも、しばらく消化して学ぶのに十分です。',
    );
    await era.printAndWait(
      `そう言って、${flash.sex}は手を胸に当て、${you.name} に優しい笑みを向けた。`,
    );
    await flash.say_and_wait(
      'ご助力がなければ、私ひとりでは、このようなトレーニング案には至らなかったでしょう。',
    );
    era.printButton('「それが、俺がいる意味だ。」', 1);
    await era.input();
    await flash.say_and_wait('！');
    await flash.say_and_wait(
      '……おっしゃるとおりです。私の誤りを指摘し、正しい道へ導いてくださる方。',
    );
    await flash.say_and_wait(
      'あなたと、本日のシービーさんには、ずいぶん助けていただきました。',
    );
    await flash.say_and_wait('ですから——');
    await era.printAndWait(
      `${you.name} はエイシンフラッシュが急に拳を握るのを見た。${flash.sex}の目に、揺がない意志が光っている。`,
    );
    await flash.say_and_wait(
      '日本ダービーに勝たなければなりません。皆さまへの報いとして。',
    );
  },

  // [번역 대상] ws_47_21
  ws_47_21: (() => {
    const title = "양자택일 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} win_toky_yus エイシンフラッシュが日本ダービーに勝ったか
     * @param {PrintedSpan} s_distracted エイシンフラッシュ専用状態 [分心]
     */
    const f = async (flash, you, callname, win_toky_yus, s_distracted) => {
      await flash.say_and_wait(".........");
      await flash.say_and_wait(".........");
      era.printButton("「플래시...」", 1);
      await era.input();
      await flash.say_and_wait(
        `......죄송해요, ${callname}. 하지만 저는 역시 받아들일 수 없습니다.`,
      );
      await flash.say_and_wait("국화상 출주 예정을 취소한다는 그 결정 말이에요.");
      era.drawLine();
      if (win_toky_yus) {
        await era.printAndWait(
          "바로 지난주, 에이신 플래시는 일본 더비의 무대에서 놀라운 성적을 거두었다.",
        );
        await era.printAndWait(
          `깊은 기쁨을 느낌과 동시에, ${flash.sex}는 국화상 레이스에서도 일본 더비의 영광을 이어가 만인이 주목하는 챔피언이 되겠노라 다짐했다.`,
        );
        await era.printAndWait("하지만...");
      }
      await era.printAndWait(
        `何事も順風満帆とはいかない。怪我と病は、${flash.uma_sex_title}から切り離せない話題だ。`,
      );
      await you.say_as_passer_by_and_wait(
        "의사",
        "통증의 원인은 다리 근육에 피로가 과하게 쌓였기 때문인 것으로 보입니다. 상태가 더 악화되는 것을 방지하기 위해 당분간은 충분히 쉬어주세요.",
      );
      await era.printAndWait(
        "사건의 발단은 일본 더비가 끝난 다음 날 트레이닝 도중, 에이신 플래시가 다리에 이상한 통증이 느껴진다고 말한 것에서 시작되었다.",
      );
      await era.printAndWait(
        `이를 걱정한 ${you.name}은(는) ${flash.sex}를 데리고 병원을 찾았고, 검사 결과 질환이 있다는 사실을 알게 되었다.`,
      );
      await flash.say_and_wait(
        "하지만 그렇다 해도 국화상 전까지 완치될 확률은 매우 높아요.",
      );
      await era.printAndWait(
        "하지만 에이신 플래시 본인은 이 상황을 받아들이고 싶지 않은 것이 분명해 보였다.",
      );
      await era.printAndWait(
        `${you.name} が『菊花賞に勝つには高強度のトレーニングが要る。今それをすれば、身体はさらに悪くなる』と説明しても。`,
      );
      await era.printAndWait(`${flash.sex}는 여전히 집요하게 참가를 고집했다.`);
      era.printButton('「……とにかく、しばらくは体を休めろ。」', 1);
      await era.input();
      await era.printAndWait(
        `결국 ${flash.sex}가 더 이상 근심하지 않고 안정을 취하게 하기 위해, ${you.name}은(는) 한 가지 약속을 하기로 했다.`,
      );
      era.printButton("「만약 그때까지 완치된다면, 반드시 출주하게 해줄게.」", 1);
      await era.input();
      await flash.say_and_wait(".........");
      await flash.say_and_wait("......알겠습니다......");
      await era.printAndWait(
        `더 이상 논쟁해 보았자 의미가 없다는 것을 깨달은 것일까. ${you.name}의 말을 들은 에이신 플래시는 침울하게 고개를 끄덕였다.`,
      );
      await flash.say_and_wait("그럼... 일단은 국화상을 계획에서 제외하도록 하죠.");
      era.printButton("「.........」", 1);
      await era.input();
      await era.printAndWait(
        `불만스러운 기색이 역력한 ${flash.sex}를 보며, ${you.name}은(는) 앞으로의 나날 동안 ${flash.sex}의 상태가 어떨지 매우 걱정되었다.`,
      );
      era.println();
      era.print([
        flash.get_colored_name(),
        ' は ',
        s_distracted,
        ' になった！',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_23
  ws_47_23: (() => {
    const title = "양자택일 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        "국화상을 목표로 하지 않기로 결정한 지 일주일이 지났다.",
      );
      await era.printAndWait(
        `${you.name}의 예상대로, 이 기간 동안 에이신 플래시의 컨디션은 이전보다 훨씬 떨어졌다.`,
      );
      await flash.say_and_wait("……아.");
      era.printButton("「왜 그래?」", 1);
      await era.input();
      await era.printAndWait(
        '控え室で、ノートを出して数日先の予定を確認していたエイシンフラッシュが、小さく声を漏らした。',
      );
      await flash.say_and_wait("......아뇨, 아무것도 아니에요.");
      await flash.say_and_wait(
        "단지 원래 계획대로라면 지금쯤 장거리 레이스 제패를 목적으로 한 트레이닝 단계에 들어갔어야 할 시기라서요.",
      );
      await flash.say_and_wait(
        "......하지만...... 역시 조금 분하네요. 국화상이 바로 코앞이었는데.",
      );
      await era.printAndWait(
        `${you.name} にはわかった。その言葉のエイシンフラッシュは、少し沈んでいた。`,
      );
      era.printButton("「당분간은 조정된 계획에 따라 움직이자.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 주저를 이해할 수 있었지만, 지금은 회복에 가장 중요한 시기인 만큼 몸을 아끼는 것을 최우선으로 해야 했다.`,
      );
      await flash.say_and_wait("네……");
      await era.printAndWait(
        `……하지만 실망한 ${flash.sex}의 표정을 보며, ${you.name}도 이렇게 계속 고민만 하는 것이 해결책이 아님을 알고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 에이신 플래시가 매우 고집스러운 아이라는 것을 잘 안다. 이는 대부분의 상황에서 장점이 되기도 하지만.`,
      );
      await era.printAndWait(
        `어떻게 해야 할지 모르는 상황에 부닥치면, 이런 기질은 오히려 ${flash.sex}를 막다른 골목으로 몰아넣기 쉬웠다.`,
      );
      await era.printAndWait(
        "그리고 여기서 벗어나기 위해서는 원래 궤도대로 걸어가거나, 즉 국화상에 참가하거나.",
      );
      await era.printAndWait(
        `아니면 이 궤도에서 벗어나, 즉... ${flash.sex}가 국화상에 참가할 수 없다는 사실을 스스로 인정하게 해야 한다.`,
      );
      await flash.used_to_say_and_wait(
        'それは、夢を叶えるために、私がしなければならないことです。',
      );
      await era.printAndWait(
        "（의사「상태가 더 악화되는 것을 방지하기 위해 당분간은 충분히 쉬어주세요.」）",
      );
      await era.printAndWait("……솔직히 말해, 어느 쪽도 쉬운 선택은 아니었다.");
      era.printButton("（도대체 어떻게 하는 게 좋을까.）", 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 미간을 찌푸리며 생각에 잠겼다.`);
      await era.printAndWait(
        `トレーナーとして、${flash.sex}が夢のために流した汗と執念を、${you.name} より知る者はいない。`,
      );
      await era.printAndWait(
        `그렇기에 ${you.name}도 당연히 ${flash.sex}가 꿈을 이루고 돌아오기를 간절히 바라고 있었다.`,
      );
      await era.printAndWait(
        `하지만 역시 트레이너이기에, ${you.name}은(는) ${flash.sex}가 위험한 행동을 계속하도록 내버려 둘 수 없었다.`,
      );
      await era.printAndWait(
        "단기적인 목표보다는 무사히 완주하는 것이 훨씬 중요하다.",
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `두 가지 생각이 머릿속에서 쉴 새 없이 충돌하며 ${you.name}의 마음속에 걷히지 않는 안개를 만들어냈다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자신이 서둘러 돌파구를 찾아야 한다는 것을 깨달았다.`,
      );
      await era.printAndWait(
        `${you.name}의 망설임은 에이신 플래시의 상황을 더욱 고통스럽게 만들 뿐이었다.`,
      );
      await flash.used_to_say_and_wait(
        '……おっしゃるとおりです。私の誤りを指摘し、正しい道へ導いてくださる方。',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `망설이던 찰나, ${you.name}은(는) 에이신 플래시가 미스터 시비와 대결한 뒤 ${you.name}에게 했던 말을 떠올렸다.`,
      );
      await era.printAndWait(
        `${flash.sex}は信じている。${you.name} は${
          flash.sex
        }の${flash.uma_sex_title}としての道の、導き手だと。`,
      );
      await era.printAndWait(
        `실제로 ${flash.sex}는 ${you.name}의 대부분의 지시를 아무런 이의 없이 수행해 왔다.`,
      );
      await era.printAndWait(
        `では ${you.name} のほうは、今になって、${flash.sex}を信じられるか。`,
      );
      era.printButton("「………후우.」", 1);
      await era.input();
      await era.printAndWait(
        `そこまで考えて、${you.name} はポケットに手を入れ、銅の勲章を取り出した。`,
      );
      await era.printAndWait("은도금이 된 겉면이 햇빛을 받아 반짝반짝 빛났다.");
      await flash.used_to_say_and_wait(
        'ご助力、ありがとうございました。どうかこれを、私からのお礼として受け取ってください。',
      );
      era.printButton('「………」', 1);
      await era.input();
      await era.printAndWait(
        `처음 만났을 때의 추억이 마음속에 밀려들었고, ${you.name}은(는) 그것을 한참 동안 응시했다.`,
      );
      await era.printAndWait(
        `마침내 ${you.name}은(는) 몸을 돌려, 곁에서 계획표를 보며 고민에 빠져 있는 에이신 플래시를 바라보았다.`,
      );
      era.printButton('（最初から、争う話ではなかったな。）', 1);
      await era.input();
      await era.printAndWait(
        `다음 순간, ${you.name}은(는) 훗 하고 웃으며 고개를 저었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자신이 이미 답을 찾았다고 생각했다. 이제 남은 일은 좋은 기회를 기다리는 것뿐이었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_47_29
  ws_47_29: (() => {
    const title = "마음을 나누는 대화 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (flash, you, callname) => {
      await era.printAndWait(
        "합숙이란, 트레센 학원 주도로 실력 향상을 목적으로 하는, 바닷가에서 진행되는 여름 전용 활동을 말한다.",
      );
      await flash.say_and_wait(
        "이게 일본의 바다군요. 독일 쪽과는 역시 꽤 차이가 있네요.",
      );
      await era.printAndWait(
        "월초, 학원 전용 버스에서 내려 눈앞에 펼쳐진 푸른 바다를 보며 에이신 플래시가 감탄했다.",
      );
      era.printButton("「놀러 가고 싶어?」", 1);
      await era.input();
      await flash.say_and_wait("아, 아뇨. 괜찮습니다.");
      await era.printAndWait(
        `하지만 다음 순간, ${you.name}의 제안을 들은 ${flash.sex}는 고개를 저었다.`,
      );
      await flash.say_and_wait(
        "무척 마음이 끌리는 선택지이긴 합니다만, 지금은 훈련을 최우선으로 삼아야 합니다.",
      );
      await era.printAndWait(
        "말을 마치며, 에이신 플래시는 고개를 숙여 자신의 두 다리를 바라보았다.",
      );
      await flash.say_and_wait(
        "국화상의 개최가 코앞으로 다가왔습니다. 승리하기 위해서는 단 하나의 기회라도 놓쳐서는 안 돼요.",
      );
      await era.printAndWait(
        `그동안의 휴식 덕분에 ${flash.sex}의 병세는 처음보다 크게 완화되어 있었다.`,
      );
      await era.printAndWait(
        "덕분에 에이신 플래시의 기분도 꽤 밝아진 듯 보였다.",
      );
      await era.printAndWait(
        `이미 세워둔 계획이 더 이상 어긋나지 않을 거라 믿는 ${flash.sex}는 다시 국화상을 목표로 준비하려 한다.`,
      );
      era.printButton("「그 부분에 대해서 말인데.」", 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}의 열정적인 모습을 보며, ${you.name}은(는) 이제 때가 되었다고 생각했다.`,
      );
      era.printButton("「네게 할 말이 있어.」", 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `사실 트레이너의 관점에서 볼 때, 에이신 플래시의 현재 상태는 ${you.name}에게 조금 난처한 상황이었다.`,
      );
      await era.printAndWait(
        `표면적으로 ${flash.sex}의 회복은 부정할 수 없는 사실이었고, ${you.name} 역시 ${flash.sex}가 경기장을 마음껏 달리는 모습을 보고 싶었다.`,
      );
      await flash.say_and_wait("국화상에 관한 이야기인가요?");
      era.printButton("「응.」", 1);
      await era.input();
      await era.printAndWait(
        `하지만 신중하게 생각하면, 근육 속에 뿌리 깊게 박힌 피로는 그렇게 쉽게 사라지는 것이 아니었다. ${you.name}은(는) 레이스를 준비하며 고강도 훈련을 이어가는 동안 통증이 재발하지 않으리라 보장할 수 없었다.`,
      );
      await flash.say_and_wait(
        "……당신은 그날 약속하셨죠. 국화상 전까지 회복한다면 출주를 허락해주겠다고요.",
      );
      era.printButton("「그래.」", 1);
      await era.input();
      await era.printAndWait(
        `바꿔 말하면, ${you.name}의 시점에서는 국화상을 포기하고 목표를 그 이후의 재팬 컵이나 아리마 기념으로 수정하여, 늘어난 공백기 동안 신체의 불안 요소를 완전히 해결하는 것이 최선이었다.`,
      );
      await flash.say_and_wait("그렇다면 지금이야말로 우위를 점해야 할 때입니다.");
      await era.printAndWait(
        `합숙소 내에서, ${you.name}이(가) 다음에 무슨 말을 할지 짐작한 듯 에이신 플래시의 태도는 매우 단호했다.`,
      );
      era.printButton("「내 말을 오해했나 본데, 널 말리러 온 게 아니야.」", 1);
      await era.input();
      await flash.say_and_wait("에?");
      await era.printAndWait(`하지만 이번에는 ${flash.sex}의 예상이 빗나갔다.`);
      era.printButton(
        '「認める。菊花賞に出すかどうかは、俺にとって二者択一だ。」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `このあと ${you.name} は、${flash.sex}に自分の苦しさを話した。感性と理性のあいだで、${flash.sex}に夢を叶えさせたいのに、その過程で${flash.sex}が傷つくのは見たくない、という矛盾を。`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(
        `疑いなく、エイシンフラッシュは賢い子だ。${flash.sex}は ${you.name} の立場を理解できる。${you.name} が${flash.sex}を理解できるように。`,
      );
      era.printButton(
        "「네 상태를 안 뒤로 계속 망설여왔어. 하지만 어쩌면 이런 주저함이야말로 가장 큰 실수일지도 몰라.」",
        1,
      );
      await era.input();
      await era.printAndWait(
        `말을 마치며 ${you.name}은(는) 손을 뻗어, 만남의 상징인 훈장을 ${flash.sex}의 눈앞에 내밀었다.`,
      );
      await flash.say_and_wait(`${callname}……`);
      await era.printAndWait(
        `에이신 플래시는 훈장을 한 번 내려다보고는, 다시 고개를 들어 ${you.name}을(를) 바라보았다.`,
      );
      await flash.say_and_wait('………');
      await era.printAndWait(`${flash.sex}は口を開きかけ、言葉を呑んだ。`);
      era.printButton("「만약 내가 결정할 수 없다면, 차라리 네가 결정해줬으면 해.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}의 어깨를 다독이며 미소를 지었다.`,
      );
      await era.printAndWait(
        `${flash.uma_sex_title}의 문제에 대해 트레이너의 관점에서 답을 낼 수 없다면, 당사자에게 맡기는 것도 방법이다.`,
      );
      await era.printAndWait(
        "걱정할 것 없어. 신뢰는 서로를 향하는 것이고, 일심동체란 바로 이런 거니까.",
      );
      await era.printAndWait("망설일 필요도 없어. 이건 회피가 아니야. 왜냐하면——");
      era.printButton(
        "「네가 어떤 선택을 하든, 내가 끝까지 함께 책임질 테니까.」",
        1,
      );
      await era.input();
      await flash.say_and_wait("!");
      await era.printAndWait(
        `薄暗い部屋で、異国の${flash.teen_sex_title}は ${you.name} の言葉に、しばし固まった。`,
      );
      await era.printAndWait(
        `まわりの時間が止まったようだった。一瞬の紅を除けば、${you.name} は${flash.sex}の顔にさざ波を見なかった。`,
      );
      await era.printAndWait(
        `하지만 그사이 ${flash.sex}의 맑고 투명한 푸른 눈동자는 침묵 속에 ${you.name}을(를) 계속 응시했고, 그 눈빛 속에는 묘한 빛이 감돌았다.`,
      );
      await flash.say_and_wait("……저……");
      await era.printAndWait(
        "십여 초가 지난 후에야 에이신 플래시가 다시 입을 열었다.",
      );
      await flash.say_and_wait(
        '……おっしゃるとおりかもしれません。この道を自分で決めるのは、双方にとってよい選択です。',
      );
      await era.printAndWait(
        `그러나 아까 전의 단호함과 달리, 지금 ${flash.sex}의 말투에는 다소 망설임이 섞여 있었다.`,
      );
      await flash.say_and_wait(
        "그러니 제게 시간을 조금만 더 주세요. 진지하게 고민해보고 싶습니다.",
      );
      await era.printAndWait(
        `말을 마친 ${flash.sex}는 ${you.name}에게 깊게, 아주 깊게 고개를 숙여 인사했다.`,
      );
      await flash.say_and_wait(
        "합숙이 끝나는 날에 답을 드릴게요. 그때까지는 원래 계획대로 진행해주세요.",
      );
      await era.printAndWait(
        `立ち上がると、${you.name} は見た。${flash.sex}が ${you.name} に、甘い微笑を向けているのを。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_1
  ws_95_1: (() => {
    const title = "새해 참배";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} fuji フジキセキ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {PrintedSpan} s_duty エイシンフラッシュ専用状態 [必行之事]
     */
    const f = async (flash, fuji, you, callname, s_duty) => {
      await era.printAndWait("또다시 새로운 봄이 찾아왔다.");
      await era.printAndWait('正月、初詣。');
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `최강 세대 돌입?! 유명 ${flash.uma_sex_title}의 화려한 부활!`,
      );
      await era.printAndWait(
        `${you.name}과(와) 에이신 플래시가 평온하게 보내야 할 오전의 정적은 TV에서 흘러나온 갑작스러운 뉴스 속보로 깨졌다.`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `얼마 전 재팬 컵과 아리마 기념에서 오랜만에 모습을 드러냈던 유명 ${flash.uma_sex_title}들이 방금 기자회견을 가졌습니다.`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `この会見で、${flash.couple_title}は明確に——今年一年のG1に、順次出走すると表明しました！！！`,
      );
      await you.say_as_passer_by_and_wait(
        "사회자",
        "현장에 모인 전원이 각자의 분야에서 거대한 업적을 남긴 실력자들이라는 점을 고려하면, 올해 트윙클 시리즈에 얼마나 큰 파장이 일어날지 짐작조차 되지 않습니다.",
      );
      await you.say_as_passer_by_and_wait("사회자", "그럼 현장에 나가 있는 기자를 연결해 보겠습니다——");
      await you.say_as_passer_by_and_wait(
        `기자`,
        `후지 키세키${flash.adult_sex_title}, 이 시점에 G1급 중상 레이스에 출주하겠다고 발표하신 의도는 무엇인가요?`,
      );
      await fuji.say_and_wait(
        "음…… 구체적인 의도를 말로 설명하기는 어렵지만, 『높은 벽』이 되기 위해서라고 해두죠.",
      );
      await you.say_as_passer_by_and_wait("기자", "높은 벽이요?");
      await fuji.say_and_wait(
        "후배들 앞에 서는 높은 벽이 되기 위해, 우리는 이 레이스에 참여하는 겁니다.",
      );
      await fuji.say_and_wait(
        `ですから、大胆に挑んできてください。私はここで、${you.name} を待っていますよ。`,
      );
      await era.printAndWait("「삑.」");
      await era.printAndWait(
        "화면 속의 후지 키세키가 카메라를 향해 손짓을 하는 장면에서 영상이 멈췄다.",
      );
      await flash.say_and_wait("……높은 벽, 인가요?");
      await era.printAndWait(
        "뉴스를 지켜보던 에이신 플래시는 미미하게 미간을 찌푸렸다.",
      );
      await flash.say_and_wait(
        "두렵지는 않지만, 왜 하필 이 시점에 그런 결정을 내린 걸까요? 그저 후배들의 앞길을 가로막기 위해서?",
      );
      era.printButton("「『시련』을 주겠다는 뜻 아닐까?」", 1);
      await era.input();
      await era.printAndWait(
        `하지만 ${you.name}은(는) 후지 키세키의 마지막 말 속에 담긴 의미를 예리하게 포착해냈다.`,
      );
      await flash.say_and_wait("시련요?");
      await era.printAndWait(
        `${you.name}의 말에 에이신 플래시는 이해가 잘 안 간다는 듯 고개를 갸웃거렸다.`,
      );
      era.printButton("「벽은 가로막는 역할을 하기도 하지만, 능력이 있는 사람은 그걸 뛰어넘을 수도 있으니까.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は口を開き、${flash.sex}に自分の見方を短く説明した。`,
      );
      await flash.say_and_wait(
        `なるほど。フジキセキさんの本意は、後輩が${flash.couple_title}に挑む道で成長できるように、ということですね。`,
      );
      await era.printAndWait(
        "에이신 플래시는 고개를 끄덕이며 납득한 표정을 지었다.",
      );
      era.printButton("「재팬 컵과 아리마 기념 때의 마음가짐으로 임하자.」", 1);
      await era.input();
      await flash.say_and_wait("네!");
      await era.printAndWait(`다음 순간, ${flash.sex}는 자신감 넘치게 대답했다.`);
      await era.printAndWait("「따르릉——」");
      await flash.say_and_wait("?");
      await era.printAndWait(
        `그때, ${flash.sex}의 스마트폰에서 연락을 알리는 벨소리가 울려 퍼졌다.`,
      );
      await flash.say_and_wait("……어머니의 전화?");
      era.drawLine();
      await flash.say_and_wait('………');
      await era.printAndWait("플래시와 부모님의 통화가 끝났다.");
      era.printButton("「무슨 일이야?」", 1);
      await era.input();
      await era.printAndWait(
        `전화를 내려놓은 ${flash.sex}는 조금 전의 여유로운 모습은 온데간데없이 무척 진지해 보였다.`,
      );
      await flash.say_and_wait(
        "아버지와 어머니께서 내년 10월 하순에 제 레이스를 보러 일본에 오시겠다고 하셨어요.",
      );
      era.printButton("「10월 하순?」", 1);
      await era.input();
      await flash.say_and_wait(
        "네. 이미 결정된 계획에 따르면 그 시기의 레이스는 바로 가을 텐노상입니다.",
      );
      era.printButton("「생각보다 빠른걸.」", 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 원래 생각은 일본에서 여러 G1 타이틀을 획득한 뒤 고향으로 돌아가 부모님께 자신의 성장을 증명하는 것이었다.`,
      );
      await flash.say_and_wait(
        "저도 그렇게 생각해요. 부모님께서 직접 일본까지 오실 시간이 있을 줄은 몰랐거든요. 두 분 다 평소에 무척 바쁘신 분들이라.",
      );
      era.printButton(
        `「어떻게 해서든 자기 ${
          flash.sex_code - 1 ? "딸" : "아들"
        }이 경기장을 달리는 늠름한 모습을 보고 싶으셨겠지.」`,
        1,
      );
      await era.input();
      await flash.say_and_wait(
        "후훗~ 뭐, 생각을 바꿔보면 이것도 나쁘지 않은 일일지도 모르겠네요.",
      );
      await era.printAndWait(
        "말을 하며 에이신 플래시는 주황색 마커를 꺼내 계획서를 수정하기 시작했다.",
      );
      await flash.say_and_wait(
        "부모님께서 직접 지켜보시는 가운데 우승하는 것보다 두 분을 더 자랑스럽게 해드릴 일이 또 어디 있겠어요?",
      );
      await era.printAndWait(
        `${you.name}은(는) ${flash.sex}가 가을 텐노상 출주 예정 칸 옆에 강조의 의미로 동그라미를 여러 개 그리는 것을 보았다.`,
      );
      era.printButton("「그렇네.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 고개를 끄덕이며 ${flash.sex}의 생각에 동조했다.`,
      );
      await era.printAndWait(
        `가을 텐노상에서 승리할 수만 있다면 에이신 플래시의 꿈은 이루어진다. 그리고 그것이 바로 ${you.name}이(가) 트레이너로서 존재하는 목적이기도 했다.`,
      );
      await era.printAndWait(
        `그렇다면 ${flash.sex}가 그 텐노상 방패를 얻는 과정이 조금 더 순조로울 수 있도록, ${you.name}은(는) 결심했다——`,
      );
      era.printButton("「신사에 가서 기원하자!」（전 능력치 +20）", 1);
      era.printButton(`「미래의 계획을 변경할까?」（【반드시 해야 할 일】 상태 획득）`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          "기원이란 본래 사람들이 신에게 자신의 소원을 전하며 가호을 받기를 바라는 의식에서 시작되었다.",
        );
        await era.printAndWait("그리고 시대가 흐르면서 이 행위에는 서서히 다른 의미들이 부여되기 시작했다.");
        await era.printAndWait(
          "오늘날 기원은 사람들이 더 나은 삶을 향해 나아가는 염원의 매개체가 되었다.",
        );
        await flash.say_and_wait(
          "음, 비록 이것이 레이스 결과에 실질적인 도움이 된다고는 생각하지 않지만……",
        );
        await era.printAndWait(
          `${you.name}의 제안에 에이신 플래시는 잠시 고민하더니 천천히 고개를 끄덕였다.`,
        );
        await flash.say_and_wait(
          "하지만 당신 말이 맞아요. 자신이 원하는 미래를 꿈꾸는 것은 언제나 좋은 일이니까요.",
        );
        await era.printAndWait(
          `そこで ${you.name} は見た。${flash.sex}が目の前の計画書を閉じ、立ち上がるのを。`,
        );
        await flash.say_and_wait(
          "게다가 오늘은 정월이니 신사 쪽도 무척 활기차겠네요.",
        );
        era.printButton("「근처에서 축제라도 할지 모르지.」", 1);
        await era.input();
        await flash.say_and_wait("축제라니…… 후훗~");
        await era.printAndWait(
          "에이신 플래시는 가볍게 웃으며 흥미를 보였다.",
        );
        await flash.say_and_wait(
          `앞으로 1년간의 계획에 대한 축복이자 연휴 기간의 기분 전환이라 생각하고 다녀오죠. 출발해요, ${callname}.`,
        );
        await era.printAndWait(
          `말을 마친 ${flash.sex}는 ${you.name}의 손을 잡고 밖으로 나가자는 신호를 보냈다.`,
        );
      } else {
        await era.printAndWait(
          "에이신 플래시의 현재 실력을 믿지 못하는 것은 아니지만, 목표 달성이라는 측면만 놓고 본다면.",
        );
        await era.printAndWait(
          `先輩との高強度のG1を続けて身体を疲れさせるより、空気の緩いG2やG3のほうが、${flash.sex}が調子を保ちつつ力を温存するには向いているのではないか。`,
        );
        await flash.say_and_wait('む、客観的にはよい選択ですが……');
        await era.printAndWait(
          `${you.name}이(가) 이 생각을 에이신 플래시에게 들려주자, ${flash.sex}는 잠시 생각하더니 고개를 저었다.`,
        );
        await flash.say_and_wait(
          `제 부모님께서는 당신의 ${
            flash.sex_code - 1 ? "딸" : "아들"
          }이 그런 요령을 부려 승리를 따내는 걸 결코 바라지 않으실 거예요.`,
        );
        await era.printAndWait(
          `말을 하며 ${flash.sex}는 계획서를 덮고 진지하게 말했다.`,
        );
        await flash.say_and_wait(
          "승리란 당당하게 쟁취했을 때 비로소 그 의미가 있는 법이니까요.",
        );
        await flash.say_and_wait(
          "시련이라면 마주하고, 벽이라면 뛰어넘는다. 오직 그런 방식으로 이루어낸 꿈만이 떳떳할 수 있습니다.",
        );
        era.printButton("「정말 기사도 정신이 넘치는 생각이네.」", 1);
        await era.input();
        await era.printAndWait(
          `${flash.sex}의 태도를 본 ${you.name}은(는) 무심코 감탄 섞인 말을 내뱉었다.`,
        );
        await flash.say_and_wait("후훗~ 칭찬 감사합니다.");
        await flash.say_and_wait(
          "아마 이런 생각을 가지고 있었기에 초등학생 때 학급 연극에서 기사 역할로 뽑혔던 것일지도 모르겠네요.",
        );
        await era.printAndWait(
          `そこでエイシンフラッシュは優しく笑った。いつのまにか、${flash.sex}の顔はまた軽やかになっていた。`,
        );
        era.println();
        era.print([
          flash.get_colored_name(),
          ' は ',
          s_duty,
          ' の覚悟を得た！',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_14
  ws_95_14: (() => {
    const title = "팬 대감사제";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, gs, festa, you) => {
      await era.printAndWait("4월, 봄의 팬 대감사제 이벤트 날이 밝았다.");
      await era.printAndWait(
        `오늘 ${flash.uma_sex_title}들은 팬들과 함께 즐길 수 있는 다양한 활동에 참여한다.`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `ではG区の挑戦者をご覧ください。${flash.couple_title}はエイシンフラッシュ、ナカヤマフェスタ、ゴールドシップです。`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `${flash.couple_title}が挑むのは——ファンおんぶ競争！`,
      );
      await you.say_as_passer_by_and_wait(
        `사회자`,
        `규칙은 간단합니다. 팬과 함께 가장 먼저 결승선을 통과하는 ${flash.uma_sex_title}가 우승입니다.`,
      );
      await you.say_as_passer_by_and_wait(
        "사회자",
        "과연 어떤 콤비가 승리를 거머쥐게 될지, 기대해 주십시오!",
      );
      await era.printAndWait(
        "현재 트레센 학원의 운동장은 사회자의 열정적인 멘트로 분위기가 달아올라 인파의 함성으로 가득 찼다.",
      );
      await era.printAndWait("그리고 바로——");
      await gs.say_and_wait("최후의 승자는 당연히 이 몸이지! 고루시 님의 운명적인——");
      await era.printAndWait(
        "신속한 움직임으로 선수를 친 골드 쉽이 앞줄에 있던 관객 한 명을 다짜고짜 끌어냈다.",
      );
      await gs.say_and_wait(`쌀•자•루! 너로 정했다!`);
      await you.say_as_passer_by_and_wait(
        "골드 쉽의 팬",
        "으아아아?! 갑자기 쌀가마니 들기냐고?! 너무 높고 빠르고 무서워!",
      );
      await festa.say_and_wait("음……");
      await era.printAndWait(
        "옆에 있던 나카야마 페스타도 이에 질세라 움직였다.",
      );
      await festa.say_and_wait(`야, 거기 너.`);
      await era.printAndWait(
        `${flash.sex}는 주위를 훑어보더니 인파 사이에 서 있던 팬 한 명을 지목했다.`,
      );
      await festa.say_and_wait("운이 트일 것 같은 얼굴이네. 나랑 같이 좀 뛰어보자고.");
      await you.say_as_passer_by_and_wait(
        "나카야마 페스타의 팬",
        "어어, 와아…… 한 손으로 날 들어 올렸어…… 대단하다!",
      );
      await flash.say_and_wait("음……");
      await era.printAndWait(
        `${flash.couple_title}にくらべ、エイシンフラッシュは慎重だった。`,
      );
      await era.printAndWait(
        `${flash.sex}는 떠들썩한 인파 속을 잠시 관찰했다.`,
      );
      await flash.say_and_wait("저기…… 혹시 절 도와주실 수 있을까요?");
      await era.printAndWait(
        `결국 ${flash.sex}는 인파 구석에서 흑백 배색의 깃발을 들고 서 있던 관객을 선택했다.`,
      );
      await you.say_as_passer_by_and_wait(
        "에이신 플래시의 팬",
        "엣, 저…… 저 말인가요?",
      );
      await flash.say_and_wait("네, 들고 계신 깃발의 배색, 제 승부복 배색이 맞죠?");
      await you.say_as_passer_by_and_wait(
        "에이신 플래시의 팬",
        "그, 그렇긴 한데…… 저…… 제가 정말 괜찮을까요……",
      );
      await flash.say_and_wait("그럼, 실례하겠습니다.");
      await era.printAndWait(
        "팬의 대답을 들었는지 못 들었는지, 에이신 플래시는 팬의 손을 잡았다.",
      );
      await you.say_as_passer_by_and_wait(
        "에이신 플래시의 팬",
        "고, 공주님 안기!!!",
      );
      await era.printAndWait(
        `悲鳴のなか、エイシンフラッシュはその少し怯えたファンを抱き上げ、先に差をつけた二人を追った。`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        "사회자",
        "경기 종료! 이번 팬 업고 달리기의 우승자는—— 골드 쉽!!",
      );
      await era.printAndWait(
        "얼마 지나지 않아 골드 쉽의 환호성과 함께 즐거웠던 경기가 막을 내렸다.",
      );
      await you.say_as_passer_by_and_wait(
        "사회자",
        "팬마저 경악하게 만드는 질주로 거칠게 승리를 쟁취했습니다!",
      );
      await you.say_as_passer_by_and_wait(
        "에이신 플래시의 팬",
        "죄송해요, 정말 죄송해요! 저 때문에 방해가 돼서……",
      );
      await era.printAndWait(
        "자신이 응원하는 아이돌이 우승하지 못하자, 에이신 플래시의 팬은 연신 고개를 숙이며 자신의 탓으로 돌렸다.",
      );
      await flash.say_and_wait('いえ、あなたの走りに問題はありません。');
      await era.printAndWait(
        'エイシンフラッシュは首を振り、傍らのゴールドシップを見て、困ったように息をついた。',
      );
      await flash.say_and_wait(
        "그리고 이런 종류의 경쟁에서 저분을 이기는 건 역시 꽤 어려운 일이니까요.",
      );
      await flash.say_and_wait("무엇보다——");
      await era.printAndWait(`말을 하며 ${flash.sex}의 얼굴에 부드러운 미소가 번졌다.`);
      await flash.say_and_wait(
        `소중한 팬분들을 ${flash.sex}처럼 함부로 대할 수는 없으니까요.`,
      );
      await you.say_as_passer_by_and_wait(
        "에이신 플래시의 팬",
        "!!!!",
      );
      await you.say_as_passer_by_and_wait(
        "에이신 플래시의 팬",
        `エ……エイシン${flash.adult_sex_title}、ありがとうございました！`,
      );
      await flash.say_and_wait(
        "후훗~ 제가 드려야 할 말씀인걸요. 저와 함께 경기에 참여해주셔서 감사합니다.",
      );
      await era.printAndWait(
        "에이신 플래시와 팬이 서로를 보며 미소 지었다.",
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_23
  ws_95_23: (() => {
    const title = "미래의 일 · 1";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (flash, you) => {
      await era.printAndWait("봄 시니어 3관의 마지막 관문인 타카라즈카 기념이 다가오고 있다.");
      await era.printAndWait(
        "상반기 레이스에서 연이어 활약한 에이신 플래시는 자연스럽게 출주 자격을 얻었다.",
      );
      await era.printAndWait("하지만……");
      await you.say_as_passer_by_and_wait(
        "의사",
        "신체 건강을 고려해볼 때, 당분간은 레이스에 출주하지 않는 것을 권장합니다.",
      );
      await era.printAndWait(
        "……레이스 전 정기 검진에서 에이신 플래시의 다리에 다시 한번 이상 징후가 발견되었다.",
      );
      await flash.say_and_wait('………');
      await era.printAndWait("비록 작년 일본 더비 이후에 겪었던 증상보다는 훨씬 가벼운 정도였지만.");
      await era.printAndWait(
        "안전을 최우선으로 생각한다면, 눈앞의 타카라즈카 기념은 아쉽게도 포기할 수밖에 없었다.",
      );
      era.printButton("「플래시……」", 1);
      await era.input();
      await era.printAndWait(
        `진단 보고서를 굳은 표정으로 쳐다보는 에이신 플래시를 어떻게 설득해야 할지 ${you.name}이(가) 고민하던 찰나.`,
      );
      await flash.say_and_wait("알겠습니다. 그럼 푹 쉬도록 하죠.");
      era.printButton("「!」", 1);
      await era.input();
      await era.printAndWait(
        `意外だった。${flash.sex}は長く息を吐いて、そう言った。`,
      );
      await flash.say_and_wait("어라, 제가 이렇게 말하는 게 의외인가요?");
      await era.printAndWait(
        `이어서 놀란 ${you.name}의 표정을 본 ${flash.sex}는 고개를 갸웃하며 의아해했다.`,
      );
      era.printButton("「그냥 작년의 네 모습이 생각나서.」", 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 머릿속에 스친 생각을 솔직하게 털어놓았다.`);
      await flash.say_and_wait("후후.");
      await era.printAndWait("그 말에 에이신 플래시는 가볍게 웃어 보였다.");
      await flash.say_and_wait(
        "작년 8월 이전의 저였다면, 이미 정해진 계획이 갑자기 틀어지는 상황을 절대 받아들이지 못했을 거예요.",
      );
      await flash.say_and_wait(
        "하지만 사람의 성격은 경험에 따라 변하는 법이잖아요?",
      );
      await era.printAndWait(
        `말을 하며 ${flash.sex}는 고개를 저으며 ${you.name}을(를) 지긋이 바라보았다.`,
      );
      await flash.say_and_wait(
        "지금의 저는 이미 깨달았습니다. 제 꿈은 저 혼자만의 것이 아니라는 사실을요. 그러니 모든 일을 신중하게 판단하고 결정해야 합니다.",
      );
      await flash.say_and_wait('無理は、許されません。');
      era.printButton("「긍정적인 변화네.」", 1);
      await era.input();
      await era.printAndWait(
        `에이신 플래시의 진지한 태도를 보며 ${you.name}은(는) 감탄했고, 동시에 짐을 내려놓은 듯 안도했다.`,
      );
      await flash.say_and_wait(
        "게다가 올해 가장 중요한 목표는 10월의 가을 텐노상입니다.",
      );
      await flash.say_and_wait(
        "그 전까지의 모든 행동은 완벽한 컨디션으로 출주할 수 있다는 전제하에 세워져야 해요.",
      );
      era.printButton("「그럼 그 이후에는?」", 1);
      await era.input();
      await flash.say_and_wait("……에?");
      await era.printAndWait(
        `묘한 호기심이 생긴 ${you.name}이(가) 뜬금없이 물었다.`,
      );
      await flash.say_and_wait("그…… 이후요?");
      await era.printAndWait(
        `トゥインクル・シリーズで栄誉を積み重ね、ご両親に誇ってもらうこと。それがエイシンフラッシュの夢だ。`,
      );
      await era.printAndWait(
        `하지만 생각해보면, ${flash.sex}는 꿈을 이룬 뒤에 무엇을 하고 싶은지에 대해서는 ${you.name}에게 한 번도 말한 적이 없었다.`,
      );
      await flash.say_and_wait("음……");
      await era.printAndWait(
        `비록 ${you.name}은(는) 에이신 플래시가 스스로 잘 계획하고 있을 거라 믿었지만, ${flash.sex}가 깊은 생각에 빠져 때때로 ${you.name}을(를) 힐끔거리는 모습을 보자.`,
      );
      await era.printAndWait(`${you.name}은(는) 조금 의구심이 들었다.`);
      era.printButton('「まだ決めてないのか？」', 1);
      await era.input();
      await flash.say_and_wait("……아뇨, 사실 그건 가장 처음부터 계획해두었던 일입니다.");
      await era.printAndWait("에이신 플래시는 가볍게 고개를 저으며 말을 이었다.");
      await flash.say_and_wait(
        "일본에 오던 그 순간부터 마음속으로 준비하고 있었어요. 꿈을 이루고, 인정받을 수 있는 이상적인 자신이 되었을 때 고향으로 돌아가 수년간 더 공부한 뒤 부모님의 케이크 가게를 물려받는 것이 제 계획이었죠.",
      );
      era.printButton("「멋진 미래네.」", 1);
      await era.input();
      await flash.say_and_wait("모든 일이 순조롭게 풀린다면 정말 그렇겠죠. 하지만……");
      era.printButton("「하지만?」", 1);
      await era.input();
      await flash.say_and_wait('………');
      await era.printAndWait(
        `에이신 플래시는 더 이상 말을 잇지 않고 침묵하며 ${you.name}을(를) 바라보았다.`,
      );
      await flash.say_and_wait("……아니요, 아무것도 아닙니다.");
      await era.printAndWait(`한참 뒤에야 ${flash.sex}가 다시 입을 열었다.`);
      await flash.say_and_wait(
        "아마도 당신과 만난 뒤 너무나 많은 일을 겪었기에, 다시 한번 시간을 들여 꼼꼼하게 계획을 세워야 할 것 같네요.",
      );
      era.printButton("「그렇구나.」", 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は気づいた。その言葉を口にした${flash.sex}の瞳に、${you.name} には読み取れない揺らぎが走っていたことに。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_95_29
  ws_95_29: (() => {
    const title = "미래의 일 · 2";
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you トレーナー
     */
    const f = async (flash, you) => {
      await era.printAndWait(
        "작년과는 달리, 이번에는 에이신 플래시의 다리 부상 회복 속도가 매우 빨랐다.",
      );
      await era.printAndWait(
        `병세의 정도가 가벼웠던 덕분이기도 하겠지만, ${you.name}은(는) 올해의 ${flash.sex}가 무척 긍정적인 마음가짐으로 요양에 임했기 때문이라고 믿었다.`,
      );
      await era.printAndWait(
        `덕분에 이번 여름 합숙이 시작되기 직전, ${flash.sex}의 몸은 완전히 건강해진 상태였다.`,
      );
      era.drawLine();
      await flash.say_and_wait(
        "어느덧 목표로 삼았던 가을 텐노상이 코앞으로 다가왔군요.",
      );
      await era.printAndWait(
        "월초, 합숙소에 짐을 푼 에이신 플래시는 창밖의 푸른 바다를 보며 감회에 젖은 듯 말했다.",
      );
      era.printButton(
        "「이번 여름 합숙을 실력을 쌓을 기회로 삼아 열심히 해보자.」",
        1,
      );
      await era.input();
      await era.printAndWait(`${you.name}이(가) 격려를 건넸다.`);
      await flash.say_and_wait(
        "네! 다리 부상도 다 나았으니 훈련에는 전혀 지장이 없겠네요.",
      );
      await era.printAndWait(
        "에이신 플래시는 고개를 끄덕이고는 훈련장을 향해 걸어갔다.",
      );
      await flash.say_and_wait("하지만………");
      await flash.say_and_wait('……最後、ですね。');
      era.printButton("「?」", 1);
      await era.input();
      await era.printAndWait(
        `완전히 떠나기 전, ${you.name}은(는) ${flash.sex}가 작게 중얼거리는 소리를 들은 것 같았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
};
