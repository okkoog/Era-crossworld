// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/110000-Wonder-Acute/rec-100"),

  // [번역 완료] rec_rooftop
  async rec_rooftop(acute, taste, minoru, you) {
    await era.printAndWait(
      '황혼의 옥상에서, 모든 걸 잠시 잊게 해 줄 담배에 무심코 손이 간다.',
    );
    await era.printAndWait('주머니를 뒤진다.');
    await era.printAndWait('——아무것도 없다.');
    era.drawLine();
    await era.printAndWait(
      '황혼의 노을 아래, 비행기 한 대가 하늘 끝을 향해 날아가며 주황빛 직선을 남긴다.',
    );
    await era.printAndWait(
      '난간에 기대어 하늘을 바라본다. 이렇게 자유로웠던 적도, 이렇게 숨 막혔던 적도 없었다.',
    );
    await era.printAndWait([
      '예전에 121억이라는 터무니없는 빚을 떠안았을 때, ',
      taste.get_colored_name(),
      '이(가) ',
      you.get_colored_name(),
      '을(를) 맡아 주었고, 트레이너로서 빚 갚기의 지옥을 헤쳐 나가며 그 구멍을 메우게 해 주었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 생각한다. 지금도 ',
      taste.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 믿고 있을지도 모른다고.',
    ]);
    await era.printAndWait([
      taste.get_colored_name(),
      '뿐만 아니라 ',
      minoru.get_colored_name(),
      ', 그리고 다른 담당 ',
      acute.uma_sex_title,
      '들도…… ',
      you.get_colored_name(),
      '은(는) 생각한다. ',
      acute.couple_title,
      '은(는) 아직 ',
      you.get_colored_name(),
      '에게 기대를 걸고 있다고.',
    ]);
    await era.printAndWait('하지만 그 기대가 오히려 짐이 되어 버린 것은 아닐까.');
    await era.printAndWait([
      '따지고 보면 ',
      you.get_colored_name(),
      '도 그저 【범인】일 뿐이다.',
    ]);
    await era.printAndWait(
      '모든 일을 완벽하게 해낼 수는 없다. 이렇게 큰 기대를 받아낼 그릇도 아니다. 세상 속에서 필사적으로 발버둥 치면서, 가능하다면 뒤로 도망치고 싶다고까지 생각하는 평범한 【범인】이 아니었던가.',
    );
    await you.say_and_wait('……………………');
    await you.say_and_wait('…………');
    await you.say_and_wait('……');
    await you.say_and_wait('도망치고 싶네……', true);
    era.printButton('「하아……(한숨)」', 1);
    await era.input();
    await acute.say_as_unknown_and_wait(
      '어머어머…… 한숨만 계속 쉬면 복이 달아난답니다?',
    );
    await era.printAndWait([
      '그때 ',
      you.get_colored_name(),
      '의 앞에 나타난 것은 노을과 같은 빛깔로 빛나는 ',
      acute.uma_sex_title,
      '였다.',
    ]);
    await era.printAndWait([
      '트레센 학원의 옥상, 저무는 해의 잔광 속에서. ',
      you.get_colored_name(),
      '은(는) 목소리가 들린 쪽으로 조용히 고개를 돌렸다. 줄곧 온화하게 미소 짓는 ',
      acute.uma_sex_title,
      '이(가) ',
      you.get_colored_name(),
      '의 눈앞에 모습을 드러냈다.',
    ]);
    await era.printAndWait(
      `${acute.sex}의 몸에는 만화에서나 볼 법한 특별한 빛 같은 것은 없다. 그래도 ${acute.sex}의 모습은 이상할 만큼 잊기 어렵다.`,
    );
    await era.printAndWait(
      `왜냐하면 ${acute.sex}은(는)——이 저녁놀에 너무나도 자연스럽게 녹아들어 있었으니까.`,
    );
    await acute.say_as_unknown_and_wait(
      '어머어머…… 그렇게 곤란한 표정 짓지 마세요.',
    );
    await acute.say_as_unknown_and_wait(
      '제 이름은 원더 어큐트…… 네——처음 뵙는 거 맞지요?',
    );
    await acute.say_and_wait(
      '미안해요, 갑자기 말을 걸어서 놀라게 했나요? 금방이라도 울 것 같은 얼굴을 하고 계셔서, 저도 모르게 걱정이 돼서요.',
    );
    await acute.say_and_wait(
      '학원의 나쁜 아이한테 괴롭힘이라도 당했나요? 아니면 직장 내 괴롭힘? 그것도 아니면, 그냥 배가 고픈 걸까요?',
    );
    await acute.say_and_wait(
      '배가 고프다면…… 자, 단무지랍니다～ 사양하지 말고 손으로 집어 드세요～',
    );
    await era.printAndWait(
      `줄곧 온화하게 웃으며 노을과 하나가 된 듯한 ${acute.sex}은(는) 뒤에서 단무지를 담은 유리 접시를 꺼냈다.`,
    );
    await era.printAndWait(
      '붙임성도, 아부도, 물론 평소의 팬 서비스도 아니다——',
    );
    await era.printAndWait([
      '딱 알맞게, 너무 가깝지도 멀지도 않은 거리. ',
      acute.sex,
      '은(는) 유리 접시를 받친 손을 뻗어 단무지를 ',
      you.get_colored_name(),
      '의 앞에 내밀었다.',
    ]);
    await era.printAndWait(`정신을 차려 보니 ${you.name}도 오른손을 뻗고 있었다.`);
    await era.printAndWait('오독, 오독, 오독, 오독——');
    await era.printAndWait('조금 쌉싸래하면서도 의외로 씹는 맛이 좋은 맛.');
    await era.printAndWait('배가 고픈 것도 아니었는데…… 어째서인지——');
    await era.printAndWait('멈출 수 없을 것만 같았다.');
    await era.printAndWait(
      '처음에는 손끝으로 맨 위의, 가장 말라 있는 한 조각 끝을 집어 입으로 가져가 이로 베어 물었다.',
    );
    await era.printAndWait(
      '다음에는 손끝으로 한 조각의 가운데를 집어 그대로 입에 던져 넣고 씹었다.',
    );
    await era.printAndWait('마지막에는 여러 장을 한꺼번에 집어 단숨에 입에 넣었다.');
    await era.printAndWait('먹을수록 갈증이 더해진다.');
    await era.printAndWait('갈증이 심해질수록 이상하게도 속은 시원해진다.');
    await era.printAndWait([
      '유리 접시에 있던 단무지는 순식간에 ',
      you.get_colored_name(),
      '의 배 속으로 사라졌다.',
    ]);
    await acute.say_and_wait('어머어머…… 참 호쾌하게 드시네요～');
    await era.printAndWait('늘 온화하고 차분하던 얼굴에 미소가 하나 더 번졌다.');
    await acute.say_and_wait('어땠나요, 맛있었어요?');
    era.printButton('「……아, 응.」', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 말없이 고개를 끄덕이며, 한 접시를 통째로 먹어 치운 것에 대한 사과를 가슴속으로 삼켰다.',
    ]);
    await acute.say_and_wait(
      '맛있었다면 다행이에요～ 그럼, 앉도록 해요.',
    );
    await era.printAndWait([
      acute.get_colored_name(),
      '이라는 이름의 ',
      acute.teen_sex_title,
      '은(는) 옥상 벽에 기대어 노을을 받으며 자리에 앉았다.',
    ]);
    await era.printAndWait(
      `${acute.sex}은(는) 앉은 채로 옆의 빈자리를 가볍게 두드린다.`,
    );
    await acute.say_and_wait(
      '힘들 때 혼자 있는 건 좋지 않답니다～',
    );
    await acute.say_and_wait(
      '시간은 아직 많으니까요. 무슨 일이 있으면 천천히 이야기해 주세요～',
    );
    era.drawLine();
    await era.printAndWait('그날, 해가 지기 전.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 노을과 같은 색으로 빛나는 ',
      acute.teen_sex_title,
      '——훗날 ',
      you.get_colored_name(),
      '의 담당이 될 ',
      acute.teen_sex_title,
      ', ',
      acute.get_colored_name(),
      '와(과).',
    ]);
    await era.printAndWait('많이, 정말 많은 이야기를 나누었다——');
    era.println();
    await era.printAndWait([
      acute.get_colored_name(),
      '의 트레이너가 되었다!',
    ]);
  },

  // [번역 완료] rec_start
  async rec_start(
    acute,
    you,
    {
      nn,
      tannhauser,
      mcqueen,
      gs,
      ardan,
      halo,
      oguri,
      tama,
      grass,
      tachyon,
      coffee,
    },
  ) {
    await you.say_and_wait(
      '……우리 집 문 앞에는 나무가 두 그루 있다. 한 그루는 대추나무고, 다른 한 그루도 대추나무다.',
      true,
    );
    await you.say_and_wait(
      '미안. 이 명문을 인용한 건 문인의 말을 빌려 폼을 잡고 싶어서가 아니다.',
      true,
    );
    await you.say_and_wait(
      '그냥 뭔가 말하고 싶었을 뿐이다…… 아니면 정말 할 말이 없었던 걸지도 모르겠다.',
      true,
    );
    await you.say_and_wait(
      '일의 피로가 트레이너로서의 자신감을 짓눌러 버린 걸까?',
      true,
    );
    await you.say_and_wait(
      '연달아 이어지는 레이스가 너무 무거운 압박이 된 걸까?',
      true,
    );
    await you.say_and_wait(
      [
        '아니면 진심을 쏟아부은 ',
        acute.uma_sex_title,
        '에게 트레이너로서 어디까지 거리를 둬야 할지 정하지 못해, 결국 서로에게 상처를 주고 만 걸까?',
      ],
      true,
    );
    await you.say_and_wait(
      '전부 맞을지도 모른다…… 아니면 어느 것도 아닐지도 모른다.',
      true,
    );
    era.drawLine();
    if (nn) {
      await nn.ct.used_to_say_and_wait(
        '그래그래, 평범한 인간이니까 지치는 것도 당연하잖아.',
      );
    }
    if (tannhauser) {
      await tannhauser.ct.used_to_say_and_wait([
        '괜찮아, ',
        tannhauser.cl,
        '～ 기운 내～',
      ]);
    }
    if (mcqueen) {
      await mcqueen.ct.used_to_say_and_wait([
        '뭐…… 일단 같이 홍차라도 한잔하시겠어요, ',
        mcqueen.cl,
        '?',
      ]);
    }
    if (gs) {
      await gs.ct.used_to_say_and_wait([
        '오, ',
        gs.cl,
        '～ 라멘 한 그릇 어때애?',
      ]);
    }
    if (ardan) {
      await ardan.ct.used_to_say_and_wait([
        '괜찮답니다, ',
        ardan.cl,
        '! 메지로 가문의 재력만 있다면——',
      ]);
    }
    if (halo) {
      await halo.ct.used_to_say_and_wait([
        '오―홋홋홋홋! 범인들의 시선 따위 신경 쓰지 마세요. 언제 어디서든 당신의 재능과 모습은 이 ',
        halo.ct.name,
        '이(가) 인정해 드리겠어요!',
      ]);
    }
    if (oguri) {
      await oguri.ct.used_to_say_and_wait(['……', oguri.cl, ', 배고프다.']);
    }
    if (tama) {
      await tama.ct.used_to_say_and_wait([
        '자, ',
        tama.cl,
        '. 이거 오코노미야키다. 니랑 ',
        tama.cl,
        ' 몫까지 만들어 왔다. 먹고 기운 내라.',
      ]);
    }
    if (grass) {
      await grass.ct.used_to_say_and_wait([
        '후훗～ 귀엽네요, ',
        grass.cl,
        '～',
      ]);
    }
    if (tachyon) {
      await tachyon.ct.used_to_say_and_wait([
        '이런, ',
        tachyon.cl,
        '! 그렇게 신경 쓰인다면 모든 걸 잊게 해 주는 약을 시험해 보겠나? 공짜라고～',
      ]);
    }
    if (coffee) {
      await coffee.ct.used_to_say_and_wait([
        '……이대로 계속하면, ',
        coffee.cl,
        '……죽을지도 몰라요?',
      ]);
    }
    era.drawLine();
    await era.printAndWait('옥상에서 한 대 피울까……');
  },
};
