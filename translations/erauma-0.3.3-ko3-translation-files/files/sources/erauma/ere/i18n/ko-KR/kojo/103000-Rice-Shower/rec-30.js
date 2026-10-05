/**
 * @file 라이스 샤워 - 모집
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   */
  async rec_start(rice, you) {
    era.print([
      '응? 저 ',
      rice.sex_code === 1 ? '소년' : '소녀',
      '는 귀가 정말 크네, 평균보다 훨씬 위인걸?',
    ]);
    era.print(
      `보통 이 나이대의 아이들, 특히 ${rice.uma_sex_title}는 대부분 활발하기 마련인데.`,
    );
    era.print(
      `하지만 흑발의 ${rice.teen_sex_title}는 다른 사람과 부딪히지 않으려 조심스럽게 꼬리를 신경 쓰고 있는 것 같아 보였다.`,
    );
    era.print(`게다가 중앙 트레센에서 이렇게 기가 약한 아이는 보기 드문데.`);
    era.print(
      `역시 ${rice.sex}는 친구들과 함께 뛰지 않고 혼자 트레이닝복 차림으로 교문 밖을 향해 달려갔다.`,
    );
    await era.printAndWait('방향은…… 역이네.');
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_station(rice, you, chara_self_name) {
    era.print([
      '조금 떨어진 역 앞에서 쇼핑을 하고 학원으로 돌아오는 길에 어느 ',
      rice.uma_sex_title,
      '를 만났다.',
    ]);
    era.print(['휴식을 마친 ', rice.sex, '는 서둘러 다음 트레이닝을 위해 돌아가고 있었다.']);
    you.say('정말 올바른 주법이군');
    era.print([
      rice.sex,
      '의 뒷모습을 보며, ',
      you.get_colored_name(),
      '은(는) 감탄을 금치 못했다.',
    ]);
    await era.printAndWait([
      '몸집은 작지만, ',
      rice.sex,
      '의 주위를 감도는 기세에 압도될 것만 같았다.',
    ]);
    era.drawLine();
    era.print(
      '결국 빈번하게 빨간불에 걸리는 바람에, 트레센 학원에 도착했을 때는 이미 완전히 어두워져 있었다.',
    );
    rice.say('저기, 죄, 죄송해요!');
    you.say(`음? 나한테 하는 말이야?`);
    rice.say('네, 네, 저기, 죄송해요!');
    you.say(`응?`);
    rice.say(
      `오늘 ${chara_self_name}가 당신 곁을 달리는 바람에 이렇게 늦게 돌아오시게 된 거예요.`,
    );
    rice.say('정말 정말, 정말로 죄송해요!');
    you.say(`네 잘못이 아니야.`);
    rice.say(
      `아니요, ${chara_self_name}의 잘못이에요. 왜냐하면 ${chara_self_name}는 다른 사람에게 불행을 가져다주는 나쁜 아이니까……`,
    );
    era.print([rice.teen_sex_title, '의 커다란 귀가 힘없이 축 처졌다.']);
    rice.say(
      `${chara_self_name}가 곁에 없으면 괜찮을 거예요! 안녕히 계세요!`,
    );
    era.print([
      rice.get_colored_name(),
      '를 채 불러 세우기도 전에 ',
      rice.sex,
      '가 달려가 버렸다. 이대로 내버려 두기엔 너무 가없다.',
    ]);

    era.printButton(`${rice.sex}에게 너무 깊게 생각하는 거라고 말해주러 간다`, 1);
    await era.input();
    era.print([rice.sex, '에게 말을 걸려던 찰나']);
    rice.say(
      '다음 선발 레이스에 나가기로 결정했어. 제대로 출주해서, 착실하게 달리면, 그렇게 하면……',
    );
    rice.say(
      `무사히 데뷔해서 활약하면, 조금은 도움이 되는 ${chara_self_name}가 될 수 있을 거야!`,
    );
    era.print([
      '의욕에 넘쳐 트레이닝을 시작하려는 ',
      rice.sex,
      '의 모습을 보자 차마 방해할 수 없어, 결국 말을 걸지 못했다.',
    ]);
    await era.printAndWait([
      rice.get_colored_name(),
      '가 다음 선발 레이스에서 보여줄 진정한 실력이 기대된다.',
    ]);
  },
  /** @param {CharaTalk} rice */
  async rec_race(rice) {
    era.print([
      '「오늘은 ',
      rice.get_colored_name(),
      '가 출주하는 선발 레이스가 있는 날인데……」',
    ]);
    era.print(
      `???「${rice.name}! ${rice.name} 양! ${rice.name} 양! 어디 있나요, ${rice.name} 양!」`,
    );
    era.print([
      '슬슬 ',
      rice.get_colored_name(),
      '가 출주할 차례인 것 같지만, ',
      rice.sex,
      '는 나타나지 않았다.',
    ]);
    era.print([
      rice.get_colored_name(),
      '를 찾던 ',
      rice.uma_sex_title,
      '는 금방 불려 가 버렸다.',
    ]);
    era.print(
      `???「${rice.name}, 결국 선발 레이스마저 거부하기 시작한 건가. 그렇게 재능 있는 아이인데도.」`,
    );
    era.print('???「애초에 재능 이전에, 출주할 의지가 없다는 게 가장 큰 문제야.」');
    await era.printAndWait([
      '결국, ',
      rice.get_colored_name(),
      '는 그날 선발 레이스 경기장에 끝내 모습을 드러내지 않았다.',
    ]);
  },
  /**
   * @param {CharaTalk} rice
   * @param {CharaTalk} you
   * @param {string} chara_self_name
   */
  async rec_final(rice, you, chara_self_name) {
    era.print(`다음에 ${rice.name}를 본 것은 선발 레이스가 끝난 뒤였다.`);
    era.print('나무 그루터기 옆');
    rice.say(
      `바보, 바보바보, ${chara_self_name}는 바보야! 분명…… 분명 노력하겠다고 결심했는데……`,
    );
    rice.say(`으으…… 왜…… 왜 ${chara_self_name}는 이렇게 쓸모가 없을까?`);
    era.print(
      `혼자 흐느끼고 있는 ${rice.name}를 차마 두고 볼 수 없었던 당신은 정신을 차려보니 어느새 ${rice.sex}의 곁으로 다가가 있었다.`,
    );
    rice.say('당신은…… 예전의 그분?');
    rice.say('죄송해요! 저기, 더 이상 가까이 오지 마세요……');
    rice.say(
      `${chara_self_name} 곁에 있으면 불행해질 거예요. ${chara_self_name}는 쓸모없는 아이라, 또 당신에게 폐를 끼치게 될 거예요.`,
    );
    rice.say(
      `${chara_self_name}도 도움이 되고 싶어서, 선발 레이스에 나가려고 노력했는데, 결국……`,
    );
    era.println();
    era.print(
      `눈앞에서 울고 있는 ${rice.name}를 보니, 며칠 전 보았던 그 뒷모습이 다시 떠올랐다——`,
    );
    era.print([
      '무슨 일이 있었는지는 모르겠지만, ',
      rice.sex,
      '는 정말로 변하고 싶어 했다.',
    ]);
    era.print([
      you.get_colored_name(),
      '도 알고 있다. ',
      rice.sex,
      '가 이 한 걸음을 내딛기 위해 필사적으로 훈련했다는 것을.',
    ]);
    rice.say(`으으…… 역시, 역시 ${chara_self_name}같은 건……`);

    era.printButton(`${rice.sex}를 이대로 내버려 둘 순 없어!`, 1);
    await era.input();
    era.print(`「${rice.name}, 나에게 오렴!」`);
    era.print(`${rice.name}의 귀가 쫑긋하며 세워졌다.`);
    rice.say('에?');
    rice.say(
      `그 말은…… 당신이 ${chara_self_name}의 트레이너가 되어 주신다는 건가요?`,
    );
    rice.say(`와아아…… ${chara_self_name}는 너무너무 기쁘지만, 하지만……!`);
    rice.say(
      `하지만 ${chara_self_name}는…… 정말 쓸모없는걸요. 폐만 끼칠 뿐이고, 레이스에도 나가지 못해요.`,
    );
    rice.say('그래도, 정말로 제 트레이너가 되어 주실 건가요?');

    era.printButton('「그렇다 해도 너를 지지하고 싶어」', 1);
    await era.input();
    rice.say(['대단해……', you.elder_sibling_sex_title, '가 말하는 것처럼……']);
    you.say([you.elder_sibling_sex_title, '?']);
    rice.say('와앗! 죄, 죄송해요! 방금 건 못 들은 걸로 해주세요!');
    rice.say('저기…… 그, 그럼 잘 부탁드려요, 트레이너 선생님!');
    rice.say(`${chara_self_name}, 열심히 할게요!`);
    await era.printAndWait([
      '아직 표정은 조금 굳어있지만, ',
      rice.sex,
      '는 노력해서 애써 미소를 지어 보였다.',
    ]);
  },
};
