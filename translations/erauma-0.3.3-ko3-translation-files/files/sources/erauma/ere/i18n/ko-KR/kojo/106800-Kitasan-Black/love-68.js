// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/106800-Kitasan-Black/love-68"),

  // [번역 완료] 49
  49: (() => {
    const title = "애욕";
    /** @param {CharaTalk} kita キタサンブラック */
    const f = async (kita) => {
      await kita.say_and_wait("아…… 으음…… 으으으……");
      await era.printAndWait([
        "몸이 달아오른 ",
        kita.get_colored_name(),
        "은(는) 침대 위에서 스스로를 탐닉하며 절정에 도달했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 74
  74: (() => {
    const title = "열렬";
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(["으응…… ", callname, '……', callname, "…… 아아……"]);
      await era.printAndWait([
        "이불 속에서 ",
        you.get_colored_name(),
        "의 이름을 나직이 읊조리며, ",
        kita.get_colored_name(),
        "은(는) 입술을 깨물며 절정했다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 89
  89: (() => {
    const title = '';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, callname) => {
      await kita.say_and_wait([
        "으으…… 으으으…… ",
        callname,
        '、',
        callname,
        ", 으우우웃~",
      ]);
      await era.printAndWait([
        kita.get_colored_name(),
        "은(는) 민감한 곳을 열심히 문질러 댔고, 체취가 섞인 진한 애액이 이불 속에 흠뻑 뿜어져 나왔다.",
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] m_kita
  m_kita: (() => {
    const title = "괴롭힘당하는 걸 좋아하는 키타산";
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name}과 학원 정문에서 만나기로 했다. 오늘은 함께 데이트를 하기로 한 날이다.`,
      );
      await era.printAndWait(
        `하지만 웬일인지 오늘따라 키타산은 마스크를 쓰고 연신 주위를 살피며 안절부절못하고 있었다.`,
      );
      await era.printAndWait(
        `담당 우마무스메가 대체 몇 번째인지 모를 정도로 ${you.name}을(를) 혼자 두고 화장실로 달려가자, ${you.name}은(는) 마침내 그녀를 붙잡고 도대체 무슨 일이냐고 물었다.`,
      );
      await kita.say_and_wait(
        `트레이너 ${you.adult_sex_title}…… 그러니까, 음, 그게……`,
      );
      await kita.say_and_wait(`저…… 아무래도 발정기가 온 것 같아요…… 으으……`);
      await kita.say_and_wait(
        `약을 먹어도 소용이 없어요. 길을 걷다가 트레이너${you.adult_sex_title}의 냄새만 맡아도 자꾸 하고 싶어져서…… 트레이너 선생님, 저 어쩌면 좋죠……`,
      );
      await era.printAndWait(
        `마스크를 벗자, 키타산의 잘 익은 발정기 체취가 옷 속에 갇혀 있던 암컷의 향기와 섞여 공기 중에 육안으로 보일 법한 열기로 피어올랐다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 숨을 들이켰다. 공기 중에 퍼진 키타산의 농익은 땀 냄새를 맡자, 하반신이 열기 속에서 자신도 모르게 고개를 들었다.`,
      );
      await era.printAndWait(
        `JK ${kita.uma_sex_title} A 「야…… 좀 이상한 냄새 나지 않아?」`,
      );
      await era.printAndWait(
        `JK ${kita.uma_sex_title} B 「어, 그러게. 이게 무슨 냄새지?」`,
      );
      await era.printAndWait(
        `지나가던 우마무스메 학생들이 코를 킁킁거리자, ${you.name}은(는) 서둘러 옷으로 발정 중인 키타산을 감싸 안고 자리를 피했다.`,
      );
      era.println();
      await era.printAndWait(
        `단둘뿐인 캡슐 호텔 안, 얼굴이 새빨갛게 달아오른 ${kita.name}은(는) 다리를 비비며 ${you.name}의 가랑이 사이에 앉았다.`,
      );
      await era.printAndWait(
        `지금의 키타산에게선 평소의 영특함은 찾아볼 수 없었다. 귀여운 입술을 살짝 벌린 채, 얼굴에는 발정으로 인한 요염하고 음란한 표정만이 가득했다.`,
      );
      await era.printAndWait(
        `私服のせいもあって、通気のいい白いTシャツはすでに汗で完全に透けていた。`,
      );
      await era.printAndWait(
        `얇은 옷감이 신체 곡선에 밀착되어, 키타산의 가슴팍에 자리 잡은 풍만하고 탄력 있는 가슴의 육감이 고스란히 드러났다.`,
      );
      await era.printAndWait(
        `평소 소중히 관리되어 온 이 음숙한 두 덩이의 유방은 레이스 브래지어에 꽉 조여진 채 서로 맞물려 있었고, 비벼질 때마다 우유 향이 섞인 땀방울을 흘려보냈다.`,
      );
      await era.printAndWait(
        `트레이너의 시선을 눈치챘는지, 키타산은 다리를 오므리며 신음 소리를 냈다.`,
      );
      await kita.say_and_wait(
        `으응…… 으으…… 원해요…… 트레이너 ${you.adult_sex_title}을…… 아아……`,
      );
      await era.printAndWait(
        `갑자기 ${kita.name}이 가슴을 위아래로 흔들자, 포동포동한 가슴이 브래지어 밖으로 튕겨 나오듯 요동쳤다.`,
      );
      await era.printAndWait(
        `아첨하는 듯한 표정의 우마무스메. 방금까지 거친 숨을 몰아쉬던 소녀는 제 팔로 무거운 가슴을 받쳐 올렸고, 크고 선명한 유두가 옷감 위로 도드라진 돌기를 만들어냈다.`,
      );
      await era.printAndWait(
        `이어 ${you.name}은(는) 따스하고 부드러운 촉감과 함께, 살짝 딱딱해진 유두가 손바닥을 간지럽히는 느낌을 받았다.`,
      );
      await era.printAndWait(
        `발정으로 몽롱해진 ${kita.name}은(는) 혀를 내민 채, 약간은 멍한 표정으로 새하얗고 부드러운 유방을 받쳐 들고 트레이너의 팔에 문질러 댔다.`,
      );
      await era.printAndWait(
        `소녀의 유혹적인 가슴골은 압박에 의해 더욱 깊어졌고, 묵직한 실감이 ${you.name}의 팔에 전해졌다. 땀 냄새 섞인 우유 향이 콧속으로 파고들자 흥분이 고조되었다.`,
      );
      await you.say_and_wait(`내 담당은 정말이지, 음란한 아이구나.`);
      await era.printAndWait(
        `가볍게 비웃으며, ${you.name}은(는) 손을 뻗어 ${kita.name}의 발기한 유두를 움켜쥐었다. 그녀는 고개를 뒤로 젖히며 차마 들어주기 힘든 요염한 신음을 흘렸다.`,
      );
      await era.printAndWait(
        `탄탄한 종아리가 가볍게 들렸다. 암컷의 절정에 다다른 목소리가 평소 '대장부'라 불리던 키타산의 입에서 흘러나와 고막을 울렸다.`,
      );
      await era.printAndWait(
        `유두를 농락당하는 우마무스메는 지배당하는 표정을 지으며, 트레이너의 장난질에 그저 한 마리의 암말로 변해갔다.`,
      );
      await era.printAndWait(
        `비릿하고 끈적한 애액이 소파 위로 번져나갔다. 가랑이 사이에서 흘러나오는 액체를 주체하지 못한 ${kita.name}은 풍만한 엉덩이를 뒤틀었고, 손가락 끝에 유두가 잡힐 때마다 기쁨 섞인 신음을 내뱉었다.`,
      );
      await kita.say_and_wait(
        `트레이너 ${you.adult_sex_title}, 가요 가버려요오오옷!?`,
      );
      await era.printAndWait(
        `탁한 애액이 ${kita.name}의 다리 사이에서 뿜어져 나왔고, 우마무스메의 뇌는 돌이킬 수 없는 쾌락으로 전환되었다.`,
      );
      await era.printAndWait(
        `少女の首をトレーナーが強く締め、${kita.name} は背を反らすしかなく、死んだ魚のように痙攣しながら尻を前後に揺らし、今日最初の絶頂を迎えた。`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] m_kita_end
  async m_kita_end(you) {
    await era.printAndWait(
      `아마 오늘은 이 정도면 되겠지. ${you.name}은(는) 거친 숨을 내뱉는 소녀를 안아 침대에 눕히며, 소녀의 체취가 잔뜩 묻어버린 자신을 타즈나 씨에게 어떻게 설명해야 할지 고민했다.`,
    );
  },

  // [번역 대상] m_kita_notify
  m_kita_notify: (kita) => [
    kita.get_colored_name(),
    ' を何度かいじめたあと、発情期に駅へ行くと、思いがけないことが起きるかもしれない！',
  ],

  // [번역 대상] nyotaimori
  nyotaimori: (() => {
    const title = "「간단한」 식사";
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name}과 약속하여 상점가의 레스토랑에서 간단한 식사를 하기로 했다……`,
      );
      await era.printAndWait(`꽤나 수상쩍은 레스토랑이지만, 별 문제는 없겠지?`);
      await era.printAndWait(
        "여종업원 「어머, 키타산 양과 트레이너님 맞으시죠? 여체안주 한 상, 준비되었습니다.」",
      );
      era.println();
      era.printButton("「여체안주!?」", 1);
      await era.input();
      await era.printAndWait(
        `여체안주. 말 그대로 여체의 몸을 그릇 삼아 요리를 올리는 것을 뜻한다. 주로 생선회가 올라가며, 게이샤의 풍습으로서 문화적인 측면에서는 합리적일 수도 있겠지만……`,
      );
      await era.printAndWait(`아니 아니, 아무리 그래도 이건 너무 나간 거 아냐?`);
      await era.printAndWait(
        `전혀 합리적이지 않다고!? 만약 들키기라도 하면 트레센에서 퇴출당할 테고, 키타산도 변태 트레이너를 뒀다는 불명예를 안고 차별받게 될 거야!`,
      );
      await era.printAndWait(
        `하지만 담당 우마무스메 특유의 괴력이 ${you.name}을(를) 붙잡아 세웠다. 고개를 돌리자, 키타산의 단호하고 진지한 눈빛이 보였다.`,
      );
      era.println();
      await kita.say_and_wait(
        `트레이너${you.adult_sex_title}, 항상 제가 고민할 때마다 도와주시고 트레이닝도 지도해 주셔서 정말 감사해요!`,
      );
      await kita.say_and_wait(
        `그래서 이번에는 트레이너님께 제 경의를 충분히 표현할 수 있는 선물을 드리고 싶어요. 너무 놀라지 마세요!`,
      );
      await era.printAndWait(
        `당황해하는 ${you.name}을(를) 보며, ${kita.name}은(는) 미소 지으며 ${you.name}의 손을 잡았다. 상상을 초월하는 그녀의 체온이 손바닥을 뜨겁게 달구었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 마음을 굳게 먹고 거절하려 했지만, 담당의 간절한 부탁 앞에 차마 말이 떨어지지 않았다.`,
      );
      await era.printAndWait(
        `担当が ${you.name} に目隠しの黒い布をかけてから、${you.name} は手を引かれてキタの用意した部屋へ連れていかれ、箸を一本握らされた。`,
      );
      await era.printAndWait(
        `족히 10분은 됨직한 불안함과 자잘한 소음 끝에, ${you.name}은(는) 마침내 담당의 목소리에 맞춰 안대를 풀었다.`,
      );
      era.println();
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait(
        `코를 찌르는 술 향기와 함께, 새하얀 여체가 나무 식탁 위에 반듯이 누워 ${you.name}을(를) 맞이하고 있었다.`,
      );
      await era.printAndWait(
        `흑발 소녀의 얼굴은 가련하고 귀여웠으며, 몸매는 풍만하고 고왔다. M자로 벌린 두 다리는 길고 곧게 뻗어 있었다.`,
      );
      await era.printAndWait(
        `다만 ${you.name}의 정면에 놓인 그 육감적이고 둥근 엉덩이를 보고, 그것이 자신의 담당인 ${kita.name}임을 단번에 알아차렸다.`,
      );
      await kita.say_and_wait(`으음…… 하우…… 이이~`);
      await era.printAndWait(
        `투명한 액체 방울이 소녀의 벌거벗은 목덜미를 따라 천천히 흘러내렸다. 차가운 정종이 뿌려진 피부는 온도 차에 미세하게 떨리고 있었고, 담당은 괴로운 듯한 표정을 지었다.`,
      );
      await era.printAndWait(
        `다리를 꽉 껴안아 V자로 만들고 트레이너 앞에서 엉덩이를 높게 치켜든 ${kita.name}은(는) 마치 먹음직스러운 칠면조 같았고, 보는 것만으로도 식욕을 자극했다.`,
      );
      await era.printAndWait(
        `언덕처럼 솟아오른 가슴 근처에서 멈춘 물방울이 간장 소스와 섞였지만, ${you.name}의 시선은 식재료의 윤기에 사로잡혔다.`,
      );
      await era.printAndWait(
        `우마무스메의 탄력 있고 풍만한 가슴 위에는 얇게 썬 소고기 장조림 조각들이 아름다운 두 봉우리를 덮고 있었지만, 유독 연분홍빛 유두만은 가리지 못했다.`,
      );
      await era.printAndWait(
        `체리처럼 귀여운 유두 끝은 공기 중에 그대로 노출되어 있었고, 고기에 가려져 유륜조차 보이지 않는 모습은 마치 갓 딴 석류 알갱이처럼 신선해 보였다.`,
      );
      await era.printAndWait(
        `시선을 그 가슴에서 아래로 옮기자, 선명한 붉은빛의 참치 등살이 소녀의 몸매 곡선에 밀착되어 있는 모습이 눈에 들어왔다.`,
      );
      await era.printAndWait(
        `贅肉のない腰と腹が、いま盛り合わせの主体になり、鯉のように整った形を作っている。`,
      );
      await era.printAndWait(
        `色とりどりの刺身とカニミソが、キタの小さく縦長の臍を中心に密着し、香ばしい酒滴の下で独特の匂いを放つ。`,
      );
      await era.printAndWait(
        `그리고 ${kita.name}의 소중한 자궁 위치에는 특별히 『여기를 마사지해 주세요❤️』라는 와인색 스탬프가 찍혀 있었다.`,
      );
      await era.printAndWait(
        `그 스탬프 양옆으로는 소녀의 두툼하고 음란한 하얀 엉덩이와 V자로 벌린 길고 탄탄한 다리가 자리 잡고 있었다.`,
      );
      await era.printAndWait(
        `${kita.name}의 자세 때문에, 수컷의 씨를 받기에 최적화된 형태로 진화한 안산형 우마무스메의 풍만한 엉덩이가 아무런 가림막 없이 ${you.name}의 눈앞에 놓여 있었다.`,
      );
      await era.printAndWait(
        `${you.name}의 공격적인 시선을 느꼈는지, 키타산의 음숙한 복숭아 같은 엉덩이는 ${you.name} 앞에서 의미 없는 가련한 몸부림을 치며 움찔거렸다.`,
      );
      await era.printAndWait(
        `얇게 저민 참치회가 소녀의 엉덩이 살색을 투과하며 그 음란한 곡선에 착 달라붙어 있었다.`,
      );
      if (era.get('relation:68:0') > 376) {
        await era.printAndWait(
          `다리 사이의 살에 눌려 강조된 포동포동한 비구가 가볍게 벌어졌다 닫혔다 하며 ${you.name}의 총애를 기다리고 있었다.`,
        );
        await era.printAndWait(
          `음란한 꿀물이 조개처럼 하얀 살 틈에서 넘쳐흘러, 소녀만의 색정적인 핑크빛을 적시고 있었다.`,
        );
        await era.printAndWait(
          `살짝 솟아오른 발기한 음핵은 ${you.name}의 젓가락 앞에서 마치 가련한 꼬마 기사 같았으며, 가벼운 찌르기 한 번에도 신음을 내뱉으며 패배할 것만 같았다.`,
        );
      } else {
        await era.printAndWait(
          `소녀의 다리 사이 소중한 은밀한 곳은 마치 꽃봉오리처럼 조심스럽게 가려져 있었다.`,
        );
        await era.printAndWait(
          `지금 수축하는 질 근육을 따라 새하얗고 향긋한 속살이 ${kita.name}의 음란한 핑크빛 속에서 들락날락하고 있었다.`,
        );
        await era.printAndWait(
          `안 그래도 농밀하고 꽉 조이는 하얀 속살이 우마무스메의 음란한 애액에 흠뻑 젖어 있는 모습은, 바라보는 것만으로도 범죄가 되는 기분이었다.`,
        );
        await kita.say_and_wait(`으음으……`);
        await era.printAndWait(
          `키타산의 겁먹은 신음과 함께, 색정적인 질 입구는 이제 부드러운 조개껍데기가 되어 맛있는 진주를 깊숙이 삼켜 버렸다.`,
        );
        await you.say_and_wait(
          "인어 공주님께서 귀중한 비보를 더 이상 감상하게 두고 싶지 않으신 모양이네.",
        );
        await era.printAndWait(`${you.name}은(는) 저도 모르게 농담을 던졌다.`);
      }
      await era.printAndWait(
        `시선을 다시 아래로 옮기자, ${kita.name}의 가장 큰 약점이 무방비하게 ${you.name} 앞에 노출되어 있었다.`,
      );
      await era.printAndWait(
        `${kita.name}의 신체 하부에서 극도로 민감한 제2의 성기라 할 수 있는 항문은 그야말로 두툼하고 부드러웠다.`,
      );
      await era.printAndWait(
        `${kita.name}의 앞쪽 구멍이 소중히 보호받는 비밀의 영역이라면, 뒤쪽 구멍은 육봉의 정액을 짜내는 착정 천국이나 다름없었다.`,
      );
      await era.printAndWait(
        `함몰된 유두처럼 귀하게 살짝 솟아오른 도넛 모양의 항문은, 그저 근육의 조임만으로도 육봉을 사정하게 만들 수 있을 정도였다.`,
      );
      await era.printAndWait(
        `여기에 음란한 엉덩이 살이 육봉을 짓누르고 짜내는 감각까지 더해지면, 키타산의 항문은 침대 위에서 살인적인 마기라 불리기에 충분했다.`,
      );
      await era.printAndWait(
        `그 분홍빛의 민감한 주름 위에는 맛있는 참치 뱃살이 어두운 골짜기를 따라 펼쳐져 있었다.`,
      );
      await era.printAndWait(
        `주인장의 뛰어난 칼솜씨 덕분에 가장 귀한 부위가 끊어지지 않는 실처럼 가늘게 썰려, 마치 불결한 뒷문에서 피어난 꽃처럼 장식되어 있었다.`,
      );
      await era.printAndWait(
        `한 입 거리도 안 되는 이 작은 요리는 항문의 꿈틀거림에 맞춰 함께 움직였고, 구석구석 정성스럽게 세척된 덕분에 ${kita.name}의 뒤쪽에는 그 어떤 불결함도 찾아볼 수 없었다.`,
      );
      await era.printAndWait(
        `우마무스메의 분홍빛 항문은 팽팽하게 수축하며, ${you.name}을(를) 즐겁게 하기 위한 그릇으로서의 소임을 다하고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}의 젓가락이 소녀의 배꼽 주변을 맴돌았고, 담당의 귀여운 저항 속에서 이 풍성한 만찬을 즐길 준비를 마쳤다.`,
      );
      await era.printAndWait("맛있게(여러 의미로) 한참 동안 즐긴 뒤");
      await era.printAndWait("결론적으로, 정말 최고의 진미였다.");
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] nyotaimori_notify
  nyotaimori_notify: (kita) => [
    kita.get_colored_name(),
    "을 좀 더 괴롭힌 뒤에 상점가에 온다면 예상치 못한 일이 벌어질지도 모른다!",
  ],
};
