/**
 * @file 아그네스 타키온 - 모집
 * @author 幽白書
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_start(tachyon, you) {
    era.print(
      `${you.name}은(는) 오늘 선발 레이스에서 잊지 못할 광경을 목격했다. 독보적인 주법을 선보인 한 명의 ${tachyon.uma_sex_title}.`,
    );
    era.print(
      `${tachyon.sex}가 스타트하는 순간, ${tachyon.sex}가 스퍼트를 올리는 순간, ${tachyon.sex}가 결승선을 통과하는 순간`,
    );
    era.print('마치 빛처럼 빠르고, 빛처럼 눈부시며, 빛처럼…… 허무했다.');
    await era.printAndWait(
      `안타깝게도 인파가 ${you.name}의 발걸음을 가로막았고, ${you.name}은(는) ${tachyon.sex}에게 말을 걸 기회를 얻지 못했다.`,
    );
    era.println();

    era.print(
      `${you.name}은(는) 다시 한번 그 ${tachyon.uma_sex_title}를, 그 빛을 보고 싶다는 조바심을 느꼈다.`,
    );
    await era.printAndWait(
      `${you.name} 스스로도 왜 마지막에 그런 생각이 들었는지 알 수 없었다. 마치 「허무」라는 단어가 갑자기 ${you.name}의 뇌리에 스쳐 지나간 것만 같았다……`,
    );
  },
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} you
   */
  async rec_final(tachyon, you) {
    era.print(`${you.name}은(는) 며칠 전 이곳에서 보았던 그 주법을 여전히 잊지 못했다.`);
    era.print(
      `${you.name}은(는) 아직 데뷔하지 않은 ${tachyon.uma_sex_title}들이 나타날 법한 곳인 훈련장, 모의 레이스장, 체육관, 식당 등을 샅샅이 뒤졌다.`,
    );
    await era.printAndWait(
      `하지만 지난 며칠간 ${you.name}은(는) 그 ${tachyon.uma_sex_title}의 모습을 단 한 번도 보지 못했다. 마치 연기처럼 사라져 버린 듯했다.`,
    );
    era.println();

    era.print(`${you.name}은(는) 경기장 울타리에 기대어 자신도 모르게 한숨을 내뱉었다.`);
    await era.printAndWait(
      `그때, ${you.name}의 귀에 누군가의 대화 소리가 들려왔다.`,
    );
    era.println();

    await era.printAndWait([
      `??? 「……맞아, 이대로 트레이너가 나타나지 않는다면 결국…… 아깝네, 그렇게 뛰어난 소질을 가졌는데도…… `,
      tachyon.get_colored_name(),
      ` 말이야.」`,
    ]);
    era.println();

    await era.printAndWait([
      `${you.name}은(는) 상대가 누구인지 신경 쓸 겨를이 없었다. `,
      tachyon.get_colored_name(),
      `. ${you.name}은(는) 마음속으로 그 이름을 되뇌었다. 어째서인지 그 이름을 듣는 순간 ${you.name}의 마음이 크게 요동쳤다. ${you.name}에게는 직감이 있었다. 이것이 바로 ${you.name}이(가) 찾고 있던 ${tachyon.uma_sex_title}, ${tachyon.sex}의 이름이라는 것을.`,
    ]);
    era.println();

    era.print(`타키온(Tachyon), 빛보다 빠른 입자.`);
    era.print(`빛처럼 달리는 ${tachyon.sex}에게 이보다 더 잘 어울리는 이름이 있을까.`);
    era.print(
      `${you.name}은(는) 흥분을 감출 수 없었으나, 곧 누군가가 했던 말을 떠올렸다.`,
    );
    era.print(`(트레이너가 없다면…… 결국……)`);
    await era.printAndWait(`${you.name}은(는) 급히 자리를 박차고 달려 나갔다.`);
    era.println();

    era.print(`${tachyon.sex}를 찾는 과정은 의외로 쉬웠다.`);
    era.print([
      `이름이 `,
      tachyon.get_colored_name(),
      `이라고 하니, 많은 학생이 그녀를 기억하고 있었다.`,
    ]);
    era.print(`??? 「수업에는 통 얼굴을 안 비춰요.」`);
    era.print(`??? 「빈 교실을 마음대로 점거해서 자기 실험실로 쓰고 있대요.」`);
    era.print(
      `??? 「눈에 띄는 ${tachyon.uma_sex_title}들에게 이상한 약물을 먹이려 한다니까요.」`,
    );
    era.print(`??? 「타키온 선배의 약은 달콤해서 맛있어!」`);
    await era.printAndWait(
      `온갖 기괴한 소문들이 들려왔지만 ${you.name}의 귀에는 들어오지 않았다. ${you.name}은(는) 오로지 ${tachyon.sex}를 찾아야 한다는 생각뿐이었다.`,
    );
    era.println();

    await era.printAndWait(`${you.name}은(는) 소문의 실험실 문 앞에 서서 문을 두드렸다.`);
    era.println();

    tachyon.say(`들어오게나~~`);
    await era.printAndWait(`안에서 나른한 목소리가 들려왔다.`);
    era.println();

    era.print(`하지만 ${you.name}은(는) 갑자기 겁이 났다.`);
    era.print(
      `소문 때문이 아니라, 마치 팬이 우상을 만나기 직전에 느끼는 감정과 비슷했다.`,
    );
    era.print(
      `이 문 너머에 지난 사흘간 밤낮으로 생각하며 마치 홀린 듯 찾아 헤매던 ${tachyon.sex}가 있다.`,
    );
    await era.printAndWait(
      `너무 오래 기다리게 한 탓일까, ${you.name}이(가) 결심을 굳히기도 전에 문이 먼저 열렸다.`,
    );
    era.println();

    era.print(
      `문 뒤에서 나타난 것은 흰 가운을 입은 한 명의 ${tachyon.uma_sex_title}였다. 밤색 머리칼에 깔끔한 숏컷${tachyon.sex_code - 1 ? ', 가운으로도 가려지지 않는 가슴의 곡선이 눈에 띄었다' : ''}.`,
    );
    era.print(
      `그리고 ${tachyon.sex}의 다리는…… 의외로 가냘팠다. 바지를 입었음에도 알 수 있을 정도였다. 대부분의 ${tachyon.uma_sex_title}들이 가느다란 몸에 믿기지 않는 괴력을 숨기고 있다지만, ${tachyon.sex}의 다리는 분명 다른 ${tachyon.uma_sex_title}들에 비해서도 훨씬 가늘어 보였다.`,
    );
    era.print(`그것이 그날 ${you.name}이(가) 느꼈던「허무」의 정체였다.`);
    era.print(`하지만 다리보다 더 충격적인 것은 ${tachyon.sex}의 눈이었다.`);
    era.print('마치 블라인드처럼, 공허하게 가라앉은 붉은 눈동자.');
    await era.printAndWait('분명 자신을 바라보고 있음에도, 마치 아무것도 담고 있지 않은 듯했다.');
    era.println();

    await era.printAndWait(
      `${you.name}은(는) 긴장한 나머지 준비했던 모집 멘트가 전부 머릿속에서 사라졌고, 그저 더듬거리며 상대방을 스카우트하고 싶다는 의사를 간신히 전달했다.`,
    );
    era.println();

    await era.printAndWait(
      `${tachyon.sex}는 한참 동안 ${you.name}의 눈을 응시하더니, 이내 미소를 지었다.`,
    );
    era.println();

    await era.printAndWait(
      `그 후, ${you.name}은(는) ${tachyon.sex}의 지시에 따라 일련의 불평등 계약서에 서명했다. 여기에는 반드시 ${tachyon.sex}의 시약 실험을 도와야 한다는 것과, 트레이닝이나 레이스 참가 여부는 ${tachyon.sex}의 기분에 따라 결정한다는 내용 등이 포함되어 있었다.`,
    );
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '의 3년이 시작되었다……',
    ]);
  },
};
