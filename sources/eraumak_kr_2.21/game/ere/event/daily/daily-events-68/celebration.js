const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');

/** @param {Record<string,function(CharaTalk,CharaTalk,string):Promise>} handlers */
module.exports = async (handlers) => {
  handlers[5] = async (kita, me) => {
    await print_event_name('발렌타인데이의 향긋한 향기', kita);
    await era.printAndWait(
      '발렌타인데이, 성 발렌티노의 날이라고도 불리는 이 날은 서로 호감을 가진 남녀가 선물을 주고받는 날이다.',
    );
    await era.printAndWait(
      '사회적으로는 연인들이 서로의 사랑을 확인하며 달콤한 분위기를 풍기는 날이기도 하다.',
    );
    await era.printAndWait(
      '하지만 학원에서는 학생들이 디저트 솜씨를 뽐내거나 친구들에게 무차별적으로 초콜릿을 나누어 주는 날이며, 모두가 즐겁게 간식을 먹으면서 선생님께 드릴 몫을 챙기는 것도 잊지 않는 날이다.',
    );
    await era.printAndWait(
      `지도했던 학생들과 동료들이 보내온 예닐곱 개의 초콜릿을 내려놓은 뒤, ${me.name}은(는) 책상 앞에 앉아 업무를 준비했다.`,
    );
    await kita.say_and_wait(`트레이너 선생님, 여기 계시나요?`);
    await kita.say_and_wait(
      `헤헤헤~ 발렌타인데이 축하드려요, 트레이너 선생님! 이건 키타산이 ${
        me.name
      }께 드리는 선물이에요!`,
    );
    await era.printAndWait(
      `말을 마치며 ${kita.name}은 손에 든 선물을 ${me.name}에게 건넸다. ${me.name}이(가) 포장을 뜯자 그 안에서 다크 초콜릿이 모습을 드러냈다.`,
    );
    await era.printAndWait(
      `정말 근사한 선물이다. 키타산의 기대 어린 시선 속에서 ${
        me.name
      }은(는) 초콜릿을 한 입 베어 물고는, ${kita.get_teen_sex_title()}의 작은 머리를 가볍게 쓰다듬어 주었다.`,
    );
    if (era.get('cflag:68:육성턴수합산') === 47 + 6) {
      new KitaEduMarks().classical_valentine++;
    }
  };

  handlers[47] = async (kita, me) => {
    await print_event_name('크리스마스의 특별 메뉴', kita);
    await era.printAndWait(
      `크리스마스의 트레센은 지난 십수 년이 그러했듯 변함없이 시끌벅적하다.`,
    );
    await era.printAndWait(
      `지금 ${me.name}과(와) ${kita.name}은 다른 사람들처럼 식당에서 축제 분위기를 만끽하며, 식당의 공휴일 특별 메뉴를 즐기고 있다.`,
    );
    await kita.say_and_wait(
      `으음~ 감자튀김 곱빼기로 두 개랑 치킨너겟 네 세트, 치킨버거랑 콜라 두 잔도……`,
    );
    await era.printAndWait(
      `${me.name}의 곁에서, 담당 우마무스메는 까치발을 들고 카운터 뒤의 메뉴판을 보며 칼로리가 상당히 높은 음식들을 거침없이 주문하고 있었다.`,
    );
    await era.printAndWait(
      `앞으로 훈련 강도를 좀 더 높여야겠군…… ${me.name}은(는) 마음속 수첩에 몰래 메모를 남겼다.`,
    );
  };
};