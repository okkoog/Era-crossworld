// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/timon/guides/base"),

  // [번역 대상] battle
  async battle(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '凡そ戦う者は、正を以て合い、奇を以て勝つ。',
    );
    await era.printAndWait(
      '力に自信があるなら、正面からの反抗は常に有効だ。とくに機関がほぼ解除されているときはなおさら。',
    );
    await era.printAndWait(
      'だが機関を解ききれず、主人に立ち直る隙を与えてしまえば、末路は想像に難くない……',
    );
    await you.say_as_passer_by_and_wait(
      '？？？',
      '交わりの回数が多ければ、急所を突ける確率も上がるかもしれない。',
    );
  },

  // [번역 대상] eat
  async eat(you) {
    await you.say_as_passer_by_and_wait('兵法に曰く', '軍に糧食なければ亡ぶ。');
    await era.printAndWait([
      '長期戦に備えるなら、',
      you.get_colored_name(),
      ' は食事で体の消耗を補う必要がある。一度食べれば、しばらく体力が回復し続ける。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      'ただし、主人が何か混ぜていないかには気をつけて……相手の警戒が高いときは特に。',
    );
  },

  // [번역 대상] flatter
  async flatter(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '上兵は謀を伐ち、その次は交を伐つ。',
    );
    await era.printAndWait([
      '地下室の主人とよい関係を築くことは、',
      you.get_colored_name(),
      ' にとって決して損にはならない。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      'そうすれば、主人の警戒を緩められるかもしれない。',
    );
  },

  // [번역 대상] get_intro
  get_intro: (you) => [
    you.get_colored_name(),
    ' はどうやら、',
    { content: '【何者か】', fontWeight: 'bold' },
    'に拉致され、この地下室へ連れてこられたらしい。',
    { isBr: true },
    '陽の差さぬこの場所では、',
    { content: '【時間すら正確に感じ取れない】', fontWeight: 'bold' },
    '。これから先は、かなり厳しい日々になりそうだ。',
    { isBr: true },
    '何か助けが要るか？',
  ],

  // [번역 대상] relax
  async relax(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '勝は知るべくして、為すべからざるなり。',
    );
    await era.printAndWait([
      '逃げ場がないときは、',
      you.get_colored_name(),
      ' は静かに座って気を養い、対策を練るのがよい。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      'そうしておけば、《地下室の主人》が戻ってきた瞬間や、目覚めた瞬間を逃さずに済む。',
    );
  },

  // [번역 대상] release
  async release(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '上兵は謀を伐ち、その次は交を伐つ。',
    );
    await era.printAndWait([
      '地下室の主人が ',
      you.get_colored_name(),
      ' から欲しいものをすでに手にしているなら、解放の願いを聞き入れてくれるかもしれない。',
    ]);
  },

  // [번역 대상] sex
  async sex(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '善く敵を動かす者は、これを与うれば、敵必ずこれを取る。',
    );
    await era.printAndWait(
      '地下室の主人に肉体を差し出せば、そこから逆転の糸口が見つかるかもしれない。',
    );
  },

  // [번역 대상] sleep
  async sleep(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '謹んで養いて労することなく、気を并せて力を積む。',
    );
    await era.printAndWait([
      '疲れているときは、',
      you.get_colored_name(),
      ' は素直に眠って体力と気力を補うのがいちばんいい。',
    ]);
  },

  // [번역 대상] strike
  async strike(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '善く奇を出す者は、窮まりなきこと天地のごとく、竭きざること江海のごとし。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' が自分の力と賢さに自信があるなら、地下室の主人を奇襲して活路を探るのも一つの手だ。ただし失敗したときの末路は、想像に難くない。',
    ]);
    await you.say_as_passer_by_and_wait(
      '？？？',
      '交わりの回数が多ければ、急所を突ける確率も上がるかもしれない。',
    );
  },

  // [번역 대상] unlock
  async unlock(you) {
    await you.say_as_passer_by_and_wait(
      '兵法に曰く',
      '兵は勝つを貴び、久しきを貴ばず。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' は手元の手段でそのまま脱出しようと試みられる。ただし《地下室の主人》が戻ってきたら一旦諦めざるを得ない。運が悪く鉢合わせれば、報復を受ける恐れすらある……',
    ]);
  },
};
