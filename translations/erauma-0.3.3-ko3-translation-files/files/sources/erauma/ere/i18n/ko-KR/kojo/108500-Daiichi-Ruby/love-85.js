// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/108500-Daiichi-Ruby/love-85"),

  // [번역 완료] 74-after
  async '74-after'(ruby, mother, you, callname) {
    era.drawLine();
    await era.printAndWait([
      '구름이 걷히고 비가 멎자, ',
      ruby.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '의 품에 깊숙이 안긴 채, 가느다란 손가락으로 ',
      you.get_colored_name(),
      '의 가슴팍을 부드럽게 문지르고 쿡쿡 찌르며 장난을 쳤다.',
    ]);
    await era.printAndWait([
      ruby.get_colored_name(),
      '는 고개를 살짝 들어, 눈동자 속에 장난스러우면서도 묘한 색기가 서린 표정을 지었다.',
    ]);
    await ruby.say_and_wait('저, 당신의 아이를 낳아드릴 수도 있어요……');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 손에 넣은 망아지를 놓아줄 생각이 없었기에, ',
      ruby.get_colored_name(),
      '의 붉게 도드라진 가슴의 젖꼭지를 부드럽게 꼬집었다.',
    ]);
    era.printButton(
      '「쓸데없는 생각 하지 마. 널 절대 다른 남자에게 시집보내지 않아.」',
      1,
    );
    await era.input();
    await you.say_and_wait('그게 그 누구가 되었든 간에……');
    await era.printAndWait([
      ruby.get_colored_name(),
      '의 가슴이 크게 떨렸다. 방금 ',
      you.get_colored_name(),
      '의 말에는 분명 다른 뜻이 담겨 있었고, ',
      you.get_colored_name(),
      ' 자신도 그 말이 무엇을 의미하는지 알고 있었다.',
    ]);
    era.printButton(
      '「그렇게 겁먹을 필요 없어. 루비와 루비 어머님의 입장이 어떤지 나도 알고 있으니까.」',
      1,
    );
    await era.input();
    era.printButton(
      '「결혼 문제는 하기도노 톱 레이디와 내가 직접 상의할게. 루비는 네가 해야 할 일에만 집중하면 돼.」',
      1,
    );
    await era.input();
    await ruby.say_and_wait([
      callname,
      '……고마워요. 당신에게 그런 말을 들으니, 마음이 한결 가벼워졌어요……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '며칠 뒤 주말이 찾아왔고, 약혼 상대와 대면하기 위해 ',
      ruby.get_colored_name(),
      '는 어느 호텔로 향했다.',
    ]);
    await era.printAndWait(
      '최근 며칠 동안 울며 잠든 탓인지, 그녀의 안색은 다소 가라앉아 있었다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 약속된 방으로 들어서는 ',
      ruby.get_colored_name(),
      '를 바라보았다.',
    ]);
    era.printButton('「처음 뵙겠습니다, 루비 씨.」', 1);
    await era.input();
    await ruby.say_and_wait(['어째서, ', callname, '이 이곳에 있는 건가요……?']);
    await mother.say_and_wait(
      '실로 감회가 새롭구나, 루비. 이 광경은 어딘가 낯익게 느껴지는구나.',
    );
    await era.printAndWait([
      '어머님은 이미 ',
      ruby.get_colored_name(),
      '가 전속 트레이너에게 품고 있는 마음을 알아차리고 있었던 모양이다.',
    ]);
    await era.printAndWait([
      '할머니와 어머니의 트레이너를 맡았던 남성이 은퇴한 지금, 일족으로서는 ',
      you.get_colored_name(),
      '과(와) 같은 우수한 인재를 순순히 놓아줄 수 없었다.',
    ]);
    await mother.say_and_wait(
      '미리 자세히 이야기하지 않아서 정말 미안하구나.',
    );
    await era.printAndWait([
      '어머님의 다정한 사과에, ',
      ruby.get_colored_name(),
      '는 도저히 화를 낼 수가 없었다.',
    ]);
    await era.printAndWait(
      '일족이 직면한 재계의 압박 속에서도 딸의 행복을 우선한다는 것은 상당한 각오 없이는 불가능한 일이었다.',
    );
    await ruby.say_and_wait(
      '제가 이토록 당신을 경외하고 따르는데, 제게 아무 말씀도 해주시지 않으셨군요.',
    );
    await era.printAndWait([
      '달콤한 숨결을 내쉬며, ',
      ruby.get_colored_name(),
      '가 와락 안겨들었다.',
    ]);
    await era.printAndWait([
      '우마무스메의 힘을 생각하면, 미래의 장모가 곁에서 의미심장한 눈빛으로 바라보고 있어도, ',
      you.get_colored_name(),
      '은(는) 저항을 포기할 수밖에 없었다.',
    ]);
    era.printButton(
      '「제가 화려한 일족의 후계자의 남편이 되겠습니다. 당신의 일생은 제가 책임지겠습니다.」',
      1,
    );
    await era.input();
  },

  // [번역 완료] 89
  89: (() => {
    const title = '천생연분';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      const ret = [];
      await era.printAndWait([
        '어느 날, ',
        ruby.get_colored_name(),
        '는 홀로 ',
        you.get_colored_name(),
        '의 트레이닝실에서 원망 섞인 한탄을 하고 있었다.',
      ]);
      await ruby.say_and_wait('결국, 난 말할 용기가 없는 걸까?');
      era.printButton('「나한테 하고 싶은 말이라도 있어?」', 1);
      await era.input();
      await ruby.say_and_wait('！');
      await ruby.say_and_wait([
        ruby.get_colored_name(),
        '는 마치 「아차」 하는 듯한 기색으로 시선을 돌렸다.',
      ]);
      await ruby.say_and_wait([
        '한동안 침묵이 흐른 후, ',
        ruby.get_colored_name(),
        '는 결심한 듯이 한숨을 내쉬었다.',
      ]);
      await ruby.say_and_wait('네, 맞아요.');
      era.printButton('그럼 들어볼까.', 1);
      await era.input();
      await ruby.say_and_wait('대단히 죄송합니다, 말씀드릴 수 없어요.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 뺨이 붉게 물들었다.',
      ]);
      await era.printAndWait(
        '그 모습이 너무나도 귀여워, 평범한 남성의 뇌 회로를 단선시켜 버릴 정도였다.',
      );
      era.printButton(
        `「나는 루비의 전속 트레이너니까, 뭐든지 편하게 말해도 좋아.」`,
        1,
      );
      await era.input();
      await ruby.say_and_wait('아니요, 그러니까 더더욱 말씀드릴 수 없어요.');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('무슨 말을 하든, 전부 받아들여 주실 건가요?');
      era.printButton('「당연하지! 네가 무슨 말을 하든 다 받아들인다고 약속할게.」', 1);
      era.printButton(
        '「네가 행복해질 수만 있다면 그게 내 최고의 소원이니까, 어떤 결정을 내리든 난 널 지지해 줄 거야.」',
        2,
      );
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 잠시 깊은 생각에 잠기더니, 천천히 심호흡을 하고 입을 열었다.',
      ]);
      await ruby.say_and_wait('방금 하신 말씀, 부디 잊지 말아 주세요.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '이(가) 있는 소파 쪽으로 걸어와, 우아하게 ',
        you.get_colored_name(),
        '의 곁에 걸터앉았다.',
      ]);
      await era.printAndWait([
        '차가운 손가락 끝이 ',
        you.get_colored_name(),
        '의 팔을 타고 올라왔고, 부드러운 촉감과 함께 달콤한 체향이 풍겨왔다.',
      ]);
      await ruby.say_and_wait('귀 좀 잠시 빌려주세요.');
      await era.printAndWait([you.get_colored_name(), '은(는) 순종적으로 고개를 숙였다.']);
      await era.printAndWait([ruby.get_colored_name(), '는 가볍게 숨을 들이쉬었다.']);
      await ruby.say_and_wait('엄마가 되고 싶어요……');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 표정을 바라보며 살짝 미소를 지었다.',
      ]);
      await ruby.say_and_wait('당신과의 아이를, 갖고 싶어요.');
      await ruby.say_and_wait('저기, 괜찮겠죠?');
      era.printButton('「그럼, 언제가 좋을까?」 (관계 진전)', 1);
      era.printButton('「아직은 때가 아니야」 (관계 진전 보류)', 2);
      era.printButton(
        `(지키지 못할 약속이라면 차라리 거절하자.) (권장하지 않음)`,
        3,
      );
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await ruby.say_and_wait('엣?');
          await you.say_and_wait('우리 아이라면 나도 빨리 만나보고 싶어.');
          await ruby.say_and_wait('에…… 엣?');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            ruby.get_colored_name(),
            '의 손을 잡았고, 서로의 뺨에 뜨거운 숨결이 닿았다.',
          ]);
          await ruby.say_and_wait(
            '잠깐만요! 집사님이 아직 계시는데…… 아무리 그래도 이런 시간에는 안 돼요!',
          );
          era.printButton('「그럼, 어느 정도까지는 괜찮은데?」', 1);
          await era.input();
          await ruby.say_and_wait('어느 정도고 뭐고 다 안 돼요!');
          era.printButton('「만약 내가 무슨 일이 있어도 하고 싶다고 한다면?」', 1);
          await era.input();
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('알겠습니다.');
          await era.printAndWait([
            ruby.get_colored_name(),
            '는 다소 내키지 않는 기색으로 자리에서 일어났다.',
          ]);
          await era.printAndWait([
            '순간, ',
            you.get_colored_name(),
            '은(는) 불길한 예감이 들었다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 허둥지둥 몸을 일으키려던 찰나, 장난스럽게 웃는 ',
            ruby.get_colored_name(),
            '에게 밀려 소파 위로 도로 자빠졌다.',
          ]);
          await era.printAndWait([
            ruby.get_colored_name(),
            '는 자신의 입술을 ',
            you.get_colored_name(),
            '의 입술 위에 겹치고는, 몇 번이고 가볍게 쪼아대듯 입을 맞추었다.',
          ]);
          await era.printAndWait(
            '점차 가벼운 입맞춤은 사라지고, 그 자리를 깊고 진한 타액의 교환이 채우기 시작했다.',
          );
          await era.printAndWait(
            '서로의 혀끝이 닿기만 해도 짜릿하게 얽혀들었고, 아찔한 쾌감이 온몸으로 퍼져나갔다.',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 손을 뻗어 ',
            ruby.get_colored_name(),
            '의 등을 감싸 안아, 그녀를 ',
            you.get_colored_name(),
            '의 몸에 완전히 밀착시켰다.',
          ]);
          await era.printAndWait([
            '사랑스러운 담당 우마무스메의 부드러운 육체와 달콤한 향기에, ',
            you.get_colored_name(),
            '은(는) 머릿속이 하얘지는 것만 같았다.',
          ]);
          await era.printAndWait([
            ruby.get_colored_name(),
            ' 역시 ',
            you.get_colored_name(),
            '의 머리를 안아 오며, ',
            you.get_colored_name(),
            '의 촉감을 탐닉했다.',
          ]);
          await era.printAndWait([
            '간헐적으로 터져 나오는 외설스러운 숨소리가 ',
            you.get_colored_name(),
            '을(를) 더욱 흥분시켰다.',
          ]);
          await era.printAndWait(
            '이윽고 누구의 것인지 모를 은밀한 타액이 실을 길게 늘어뜨리며 떨어져 나갔다.',
          );
          await era.printAndWait([
            ruby.get_colored_name(),
            '의 아쉬워하는 듯한 표정은, ',
            you.get_colored_name(),
            '(으)로 하여금 당장이라도 다시 그녀를 끌어안고 싶게 만들었다.',
          ]);
          await ruby.say_and_wait('이제 이쯤 해두죠……');
          era.printButton('「응, 고마워.」', 1);
          await era.input();
          await era.printAndWait([
            ruby.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '의 곁을 떠나 조금 흐트러진 옷가지를 정리하기 시작했다.',
          ]);
          await era.printAndWait([
            '방금 전까지 흐르던 요염한 분위기는 온데간데없이 사라지고, ',
          ]);
          break;
        case 2:
          await ruby.say_and_wait('……알겠어요.');
          await era.printAndWait([
            ruby.get_colored_name(),
            '은(는) 묵묵히 방을 나섰다……',
          ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 99
  99: (() => {
    const title = '의존';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await ruby.say_and_wait('외로워요.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '이(가) 거절하지도, 무시하지도 않는 것을 보며 가만히 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.printButton('팔을 벌린다.', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 동작을 따라 하듯 두 팔을 벌리더니……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '을(를) 덮어누르듯이 안겨 왔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 당황하며 담당 우마무스메를 받아안았다. 의자가 쓸리는 소리와 함께, 소녀의 향기가 코끝을 찔렀다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '를 꼭 끌어안았다.',
      ]);
      await ruby.say_and_wait(
        '외로워요, 모처럼의 휴일인 오늘도 당신은 하루 종일 일만 하시고.',
      );
      era.printButton('「미안해.」', 1);
      await era.input();
      await ruby.say_and_wait('사과보다는, 더 먼저 해야 할 일이 있지 않나요?');
      await ruby.say_and_wait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 무릎 위에 앉아, ',
        you.get_colored_name(),
        '의 얼굴을 지긋이 응시했다.',
      ]);
      await era.printAndWait([
        '조금 앞으로 다가온 그녀의 입술 위로 ',
        you.get_colored_name(),
        '의 입술이 겹쳐졌다.',
      ]);
      await era.printAndWait(
        '커피 맛이 나는 키스. 분명 블랙커피인데도, 입맞춤은 감미롭기 그지없었다.',
      );
      await ruby.say_and_wait('어머님께서 하루라도 빨리 손주를 보고 싶다고 하셨어요.');
      era.printButton('「그럼, 오늘 밤이 기대되는걸.」', 1);
      era.printButton(`루비를 안는다.`, 2, {
        disabled: era.get('relation:85:0') <= 525,
      });
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('...부디 일에 정진해 주세요.');
        await era.printAndWait([
          you.get_colored_name(),
          '의 비통한 부르짖음을 무시한 채, ',
          ruby.get_colored_name(),
          '는 냉정하게 방 문을 닫아버렸다.',
        ]);
        await era.printAndWait([
          '그녀를 선택한 것은 ',
          you.get_colored_name(),
          '、',
          you.get_colored_name(),
          '에게 있어 가장 행복한 형태일지도 모른다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 문득, 품 안의 ',
          ruby.get_colored_name(),
          '가 말할 수 없이 요염해졌다고 느꼈다.',
        ]);
        await era.printAndWait(
          '소녀의 달콤한 매력과는 다른, 어엿한 한 명의 여성이자 아내가 된 이의 숙성된 매력이었다.',
        );
        await ruby.say_and_wait('제 얼굴에 뭐라도 묻었나요?');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 대답 대신 담당 우마무스메의 부드럽고 풍만한 살결을 그대로 움켜쥐었다.',
        ]);
        await era.printAndWait([
          '자비 없이 부드러운 가슴을 쥐어짜며 주물러대도, ',
          ruby.get_colored_name(),
          '는 개의치 않았다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 행동을 용인하며, 교태 섞인 신음을 흘렸다.',
        ]);
        await ruby.say_and_wait('응…… 좋아요…… 어떻게 주무르시든 다 괜찮아요……');
        await era.printAndWait([
          ruby.get_colored_name(),
          '가 ',
          you.get_colored_name(),
          '을(를) 바라보았다. 아름다운 눈동자는 이미 쾌감으로 흐려져 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 황홀해하는 모습을 보며 힘을 살짝 뺐다.',
        ]);
        await era.printAndWait(
          '하지만 여전히 담당 우마무스메의 앙증맞은 유방에 빠져들어 쉴 새 없이 주무르고 문질러댔다.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 향기로운 혀를 내밀어 ',
          you.get_colored_name(),
          '의 입가를 살짝 핥았다.',
        ]);
        await ruby.say_and_wait(
          '괜찮아요, 조금 거칠게 하셔도…… 왜 옷 안으로 손을 넣어서 만져주지 않으시나요?',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그녀의 앵두 같은 입술에 다시 한번 입을 맞추고는, 윗옷을 걷어 올려 마침내 그녀의 뽀얀 가슴을 부드럽게 움켜쥐었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 유두는 이미 딱딱하게 서 있었고, 사랑스러운 유륜 주변까지 작은 돌기들이 돋아나 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 담당 우마무스메의 변화를 뼈저리게 실감했다. 처음에는 겨우 이런 애무만으로 이토록 흥분하는 아이가 아니었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 풍만한 엉덩이가 뒤로 쑥 밀려들며, ',
          you.get_colored_name(),
          '의 발기한 성기를 강하게 압박했다.',
        ]);
        await era.printAndWait([
          '그녀는 다시 작은 혀로 ',
          you.get_colored_name(),
          '의 턱을 간지럽히며 요염한 눈빛을 보냈다.',
        ]);
        await ruby.say_and_wait('여기서 저를 임신시켜 주실 건가요?');
        await era.printAndWait([
          '교복 스커트는 그리 길지 않아서, ',
          you.get_colored_name(),
          '에게 가슴을 유린당하는 동안 이미 엉덩이 위까지 말려 올라가 있었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 엉덩이를 감싸고 있는 것은, 뜻밖에도 섹시한 티팬티였다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 자신의 작은 속옷을 옆으로 밀어 젖히며, ',
          you.get_colored_name(),
          '의 성기를 풍만한 둔부 골짜기 사이에 끼워 넣었다.',
        ]);
        await era.printAndWait([
          '그녀의 부드러운 엉덩이 살이 ',
          you.get_colored_name(),
          '의 이성을 마구 흔들어 놓았다.',
        ]);
        await ruby.say_and_wait('보지…… 아니면, 뒷구멍?');
        await ruby.say_and_wait('어디든 다 괜찮아요……');
        era.printButton('「죽을 정도로 박겠어.」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 품 안에서 가냘픈 몸을 더욱 격렬하게 비틀었다.',
        ]);
        await ruby.say_and_wait(
          '여보의 커다란 자지로, 제가 죽을 정도로 박아주세요……',
        );
        era.printButton(`「루비, 영원히 사랑해.」`, 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 귀를 간지럽히듯 속삭이자, 그녀는 만족스러운 듯 격렬하게 입을 맞추어 왔다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 열정적으로 ',
          you.get_colored_name(),
          '에게 키스하며, ',
          you.get_colored_name(),
          '의 혀를 자신의 작은 입안으로 삼키고는 ',
          you.get_colored_name(),
          '의 타액을 갈구하듯 빨아들였다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 양손은 여전히 그녀의 가슴을 주무르고 있었고, 성기는 ',
          ruby.get_colored_name(),
          '의 비부를 단단히 압박하고 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 몸을 뒤집어 ',
          ruby.get_colored_name(),
          '의 사랑스러운 몸을 아래에 깔고 압박했다.',
        ]);
        await era.printAndWait(
          '몸 아래에 깔린 담당 우마무스메는 눈가가 촉촉해진 채, 뜨거운 숨을 토해내고 있었다.',
        );
        await ruby.say_and_wait(
          '제 사랑, 박아줘요, 당신의 자지로 절 죽을 정도로 찔러주세요. 당신을 원해요, 전 영원히 당신의 것이니까……',
        );
        await era.printAndWait([
          '진심 어린 고백은 ',
          you.get_colored_name(),
          '(으)로 하여금 ',
          ruby.get_colored_name(),
          '가 평소에 가졌던 단정한 자태를 까맣게 잊게 만들었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그녀의 가냘프고 아름다운 두 다리를 M자 형태로 벌린 뒤, 성기를 들이밀었다.',
        ]);
        await era.printAndWait('푸슉.');
        await era.printAndWait([
          '성기가 ',
          ruby.get_colored_name(),
          '의 애액으로 젖어 끈적이는 질 내부로 미끄러져 들어갔다.',
        ]);
        await era.printAndWait(
          '침대 가득 번진 끈적한 애액과 정액에 개의치 않고, ',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] 99-after
  async '99-after'(ruby, you) {
    era.drawLine();
    await era.printAndWait([
      '이날, ',
      you.get_colored_name(),
      '은(는) 담당 우마무스메를 끊임없이 절정에 이르게 만들었고, 그녀가 정신을 잃기 직전이 되어서야 정액을 세차게 뿜어냈다.',
    ]);
    await era.printAndWait([
      '정신을 차린 ',
      ruby.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '을(를) 침대 위로 밀어눕히고는, 입술로 ',
      you.get_colored_name(),
      '의 온몸 구석구석에 키스를 남겼다.',
    ]);
    await era.printAndWait([
      '깊은 밤, 둘은 정사를 끝마쳤음에도 샤워하러 가지 않았다.',
    ]);
    await era.printAndWait([
      '침대 가득 번진 끈적한 애액에 개의치 않고, ',
      you.get_colored_name(),
      '과(와) ',
      ruby.get_colored_name(),
      '는 서로를 꼭 껴안은 채 깊은 잠에 빠져들었다.',
    ]);
  },

  // [번역 완료] clinic
  clinic: (() => {
    const title = '보건실';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     * @param {CharaTalk} callname 다이이치 루비가 플레이어를 부르는 호칭
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([
        callname,
        '……루비, 여기가 좋지 않아요…… 루비의 몸을 한 번 진찰해 주시지 않겠어요……',
      ]);
      await ruby.say_and_wait([
        '하아…… ',
        callname,
        '…… 어떻게 이러실 수가…… 우린 아직 학원에 있는걸요…… 누가 보면 어쩌려고…… 아…… 안 돼요…… 스타킹이 찢어져 버리잖아요……',
      ]);
      await ruby.say_and_wait(
        '안 돼요…… 조금 있으면 보건 선생님이 검사하러 오실 텐데…… 하아…… 왜라뇨……',
      );
      await ruby.say_and_wait('루비가 바로 환자인걸요…… 읏…… 잠시만요…… 하아…… 아윽……');
      await ruby.say_and_wait(
        '루비는 음란한 아이가 아니에요…… 절대 아니란 말이에요…… 이건 정상적인 신체 반응일 뿐……',
      );
      await ruby.say_and_wait('이 끈적한 물이 뭔지…… 루비는 몰라요……');
      await ruby.say_and_wait([
        '루비를 제발 놓아주세요…… 오늘…… 하아…… 어쩌다 ',
        callname,
        '에게 진료실 침대 위로 짓눌리게 된 건지……',
      ]);
      await ruby.say_and_wait(
        '으음…… 너무 크고…… 뜨겁고…… 굵어요…… 아…… 이게 대체 뭐죠…… 안 돼요…… 너무 커서…… 찢어져 버릴 것만 같아……',
      );
      await ruby.say_and_wait([
        callname,
        '…… 옷은 벗기지 말아 주세요…… 흑흑…… 루비가 잘못했어요……',
      ]);
      await ruby.say_and_wait(
        '루비의 엉덩이를 때리지 마세요…… 하아…… 멈춰주세요…… 안 된대도요……',
      );
      await ruby.say_and_wait('아…… 매를 맞을 때마다 기분이 이상해져요……');
      await ruby.say_and_wait(
        '그럴 리가 없잖아요…… 엉덩이를 맞는다고 어떻게 애액이 사방으로 튈 수가 있겠어요…… 그건…… 루비가 그저 오늘 물을 너무 많이 마셨을 뿐이라서……',
      );
      await ruby.say_and_wait(
        '정말이에요…… 아아아앙…… 또 루비의 엉덩이를 때리시다니…… 루비 엉덩이가 온통 빨개져 버렸잖아요…… 이제 안 돼요…… 그곳이 너무 간지러워요…… 으음……',
      );
      await ruby.say_and_wait(
        '어떻게 이런…… 하아…… 키스하면 안 되는 건데…… 읏…… 온몸에 힘이 다 풀려버리는 것 같아…… 하아…… 조금 원하게 되어버렸을지도……',
      );
      await ruby.say_and_wait(
        '안 돼요…… 루비는 그런 음란한 아이가…… 아앗…… 들어와 버렸어…… 아파…… 너무 아파요…… 살살 해주세요…… 너무 커서…… 진짜로 망가져 버릴 것 같아요……',
      );
      await ruby.say_and_wait(
        '우우우…… 커다란 귀두가 쑤시고 들어오니까 너무 기분 좋아져 버렸어요……',
      );
      await ruby.say_and_wait([
        '만약 루비가 이대로 가 버리면…… 루비는 정말로 커다란 자지를 가진 ',
        callname,
        '의 성노예가 되어버리는 걸까요……',
      ]);
      await ruby.say_and_wait(
        '하아…… 무슨 말씀이세요…… 말도 안 돼요…… 루비에게 어떻게 그런 이상한 성벽이 있을 수가 있겠어요…… 커다란 자지를 숭배한다니…… 그럴 리가 없잖아요……',
      );
      await ruby.say_and_wait(
        '하아…… 너무 크고…… 가득 차서 터질 것 같아요…… 천천히 다시 박아주세요…… 너무 만족스러워요…… 하아……',
      );
      await ruby.say_and_wait(
        '조금씩 쑤셔 박히는…… 이 느낌 너무 이상해요…… 마치 제 몸과 마음이 전부 굴복당하는 기분이라……',
      );
      await ruby.say_and_wait(
        '으음…… 끝까지 들어왔어…… 또 들어왔어…… 어떻게 이렇게 깊은 곳까지 들어올 수가 있죠…… 거긴…… 한 번도 유린당한 적 없는 연약한 속살인데……',
      );
      await ruby.say_and_wait(
        '하아…… 너무 민감해요…… 자지가 스칠 때마다 가 버릴 것만 같아…… 어째서 이렇게 신기한 기분이 드는 거죠…… 하아…… 분명 자위할 때는 거의 절정에 가본 적이 없었는데……',
      );
      await ruby.say_and_wait(
        '아…… 역시…… 커다란 자지만 있으면…… 루비는 버텨낼 수가 없나 봐요…… 커다란 자지가 안을 마구 헤집어 놓으니까…… 루비…… 이제 한계예요……',
      );
      await ruby.say_and_wait([
        callname,
        '…… 루비는 결국 ',
        callname,
        '의 그 커다란 자지에…… 완전히 길들여진 암캐가 되어버렸어요……',
      ]);
      await ruby.say_and_wait([
        '하아…… 뭐라고요…… ',
        callname,
        '은 진작부터 다 알고 계셨다고요…… 루비가 항상 욕구불만에 시달리고 있었다는 것을……',
      ]);
      await ruby.say_and_wait(
        '루비는 정말로 레이스 우마무스메로서 실격이에요……',
      );
      await ruby.say_and_wait([
        '하아…… 그렇지만…… ',
        callname,
        '도 좋아하신다고…… 이렇게 음탕하고 천박하게 달라붙는 루비를 좋아하신다고 들으니……',
      ]);
      await ruby.say_and_wait([
        '아…… 사랑받고 있다는 느낌은 정말 최고예요…… 이제 버틸 수 없어요…… ',
        callname,
        '……',
      ]);
      await ruby.say_and_wait(
        '으음…… 루비 머릿속이 망가져 버려요…… 하아…… 루비 숨 좀 돌리게 해주세요…… 아앗…… 조금만 살살…… 또 푹 박아 넣으셨어……',
      );
      await ruby.say_and_wait(
        '아…… 좁은 보지 구멍이 벌써 말을 안 듣기 시작했어요…… 애액이 너무 많이 나와요…… 우우우……',
      );
      await ruby.say_and_wait([
        '결국 ',
        callname,
        '에게 잔뜩 박혀서 가 버렸어요…… 아…… 너무 좋아요……',
      ]);
      await ruby.say_and_wait(
        '커다란 자지에 박혀서 맞이하는 절정이야말로 진짜 절정이에요……',
      );
      await ruby.say_and_wait([
        '이대로…… 루비는…… 완전히 ',
        callname,
        '의 성노예가 되어버렸네요……',
      ]);
      await ruby.say_and_wait([
        '하아…… 전속 성노예라니…… 나중에 간호부장이 된 루비는…… 부하 간호사들을 전부 ',
        callname,
        '에게 바쳐서 박히게 만들겠어요…… 그런 가차 없는 쾌락…… 커다란 자지가 가져다주는 절정의 기쁨…… 하아…… 또 가 버려요……',
      ]);
      await ruby.say_and_wait([
        callname,
        '의 앞에서…… 아주 조금 이성을 놓았을 뿐인데…… 완전히 망가져 버리다니……',
      ]);
      await ruby.say_and_wait(
        '아…… 이것이 바로 대물 자지가 주는 기쁨이군요…… 도저히 억누를 수가 없어요…… 절정 너무나 기분 좋아서……',
      );
      await ruby.say_and_wait([
        '암캐가 되는 건 정말 멋진 일이에요…… ',
        callname,
        '의 암캐가 되는 건……',
      ]);
      await ruby.say_and_wait(
        '이런 절정을 맛보다니…… 이렇게 파도처럼 밀려오는 짜릿한 쾌감은…… 정말이지 너무 과해요……',
      );
      await ruby.say_and_wait([
        '평생 동안 ',
        callname,
        '의 커다란 자지에 꿰뚫린 채 지내고 싶어요…… 음란한 루비의 보지 구멍 속에 항상 꽂아두고서……',
      ]);
      await ruby.say_and_wait(
        '정말로 너무 기분 좋아요…… 절정…… 멈추지 않는 연속된 절정…… 오르가슴의 쾌감이…… 사람을 완전히 미치게 만들어요……',
      );
      await ruby.say_and_wait(
        '망가졌어…… 또 망가져 버렸어요…… 우우우…… 루비 이제 한계예요……',
      );
      await ruby.say_and_wait('머릿속이 하얘져서…… 아무것도 안 보여요……');
      await ruby.say_and_wait([
        '아…… 음탕한 루비…… 암캐 루비는…… ',
        you.get_colored_actual_name(),
        '님을 너무나도 갈망해요오',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] dance
  dance: (() => {
    const title = '무용실';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        '정오에 가까워진 햇살은 눈이 시릴 만큼 이글거렸고, 바닥에 부딪혀 후끈거리는 불쾌한 열기를 뿜어내고 있었다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 아담한 몸 위에는 순결하고 우아한 흰색 원피스 발레복이 입혀져 있었고, 그 아래로는 흰색 타이즈로 꽉 감싸인 가늘고 긴 미각이 뻗어 있었다.',
      ]);
      await era.printAndWait(
        '단정하고 정교한 이목구비는 한낮의 열기 속에서 청사과처럼 풋풋하고 달콤한 분위기를 풍겼다.',
      );
      await era.printAndWait([
        '조명처럼 쏟아지는 햇살 아래에서, 사뿐사뿐 춤을 추는 ',
        ruby.get_colored_name(),
        '는 몸을 유연하게 늘어뜨리며 우아한 곡선미를 완벽하게 드러냈다.',
      ]);
      await era.printAndWait([
        '그녀의 가녀린 옆얼굴이 ',
        you.get_colored_name(),
        '쪽을 향했으나, 들어 올린 스텝은 멈추지 않았다.',
      ]);
      await era.printAndWait(
        '가슴 앞의 부드러운 두 둔덕은 그녀의 상체가 앞으로 쏠릴 때마다 출렁이며 하얀 파문을 그려냈다.',
      );
      await era.printAndWait([
        '한 곡이 끝나고 잠시 숨을 고를 때, ',
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 한껏 치켜 올라간 예쁜 엉덩이 뒤에 서서 가볍게 박수를 쳤다.',
      ]);
      await era.printAndWait([
        '춤에 푹 몰두해 있던 ',
        ruby.get_colored_name(),
        '는 조그맣게 깜짝 놀랐다.',
      ]);
      await era.printAndWait([
        '그녀는 시선을 아래로 내린 채 가녀린 몸을 돌리더니, ',
        you.get_colored_name(),
        '의 하반신에서 터질 듯이 부풀어 오른 정장 바지 가랑이를 힐끗 쳐다보고는 얼굴을 붉혔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손을 뻗어 ',
        ruby.get_colored_name(),
        '의 뺨을 부드럽게 감싸 쥐었다.',
      ]);
      await era.printAndWait([
        '다음 순간, 두툼한 입술이 ',
        ruby.get_colored_name(),
        '의 핑크빛 입술을 남김없이 집어삼켰다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 눈빛은 마치 마음속으로 깊은 한숨을 내쉬는 듯했다.',
      ]);
      await era.printAndWait([
        '오랜만에 발레 연습을 좀 해보려 했건만, 결국 지금 이 순간만큼은 속수무책으로 ',
        you.get_colored_name(),
        '과(와)의 농밀한 키스를 즐길 수밖에 없었다.',
      ]);
      await era.printAndWait([
        '달콤한 체향이 ',
        you.get_colored_name(),
        '의 코끝을 가득 채웠고, 마치 최고급 아로마처럼 신경을 황홀하게 매료시켰다.',
      ]);
      await era.printAndWait([
        '이내 주도권을 빼앗아 온 ',
        ruby.get_colored_name(),
        '는 탐욕스럽게 ',
        you.get_colored_name(),
        '의 타액을 빨아들였고, 가녀린 두 손은 ',
        you.get_colored_name(),
        '의 등을 부드러운 손길로 쓸어내렸다.',
      ]);
      await era.printAndWait([
        '남성의 거친 거친 호흡과 소녀의 정에 겨운 가쁜 숨소리가 얽히는 와중에, ',
        you.get_colored_name(),
        '의 커다란 손은 흰색 타이즈에 감싸인 탄력 있는 엉덩이를 쥐고 주무르기 시작했다.',
      ]);
      await era.printAndWait([
        '바지 바깥으로 솟구친 성기 역시 자연스럽게 ',
        ruby.get_colored_name(),
        '의 부드럽고 연약한 육체를 부비며 압박했다.',
      ]);
      await era.printAndWait('음란했던 입맞춤이 막을 내렸다.');
      await era.printAndWait([
        you.get_colored_name(),
        '의 품에 안겨 있는 ',
        ruby.get_colored_name(),
        '는 특유의 수줍은 기색을 띤 채 마른침을 작게 삼켰다.',
      ]);
      await era.printAndWait([
        '조그만 손 하나가 슬그머니 ',
        you.get_colored_name(),
        '의 터질 듯이 성을 내고 있는 사타구니를 찾아내더니, 가녀린 손가락으로 능숙하게 정장 바지 지퍼를 내렸다.',
      ]);
      await ruby.say_and_wait(
        '요즘 저랑 단둘이 있을 때마다, 유독 쉽게 커지시는 것 같은데……',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 자신을 겁주면서도 애틋하게 만드는 커다란 물건에 제 몸을 살짝 비벼대었다.',
      ]);
      await era.printAndWait([
        '눈처럼 하얗고 정교한 턱을 음낭 위에 턱 하니 걸쳐놓아, ',
        you.get_colored_name(),
        '의 성기의 귀두가 소녀의 새하얀 이마 끝에 곧바로 닿도록 만들었다.',
      ]);
      await ruby.say_and_wait(
        '후훗…… 트레이너님 본인과는 다르게, 아주 늠름하고 무서운 아이네요.',
      );
      await era.printAndWait([
        '진한 남성의 정취가 ',
        ruby.get_colored_name(),
        '의 비강 속으로 고스란히 들이닥쳤고, 그녀는 자신을 향한 농밀한 애정이 담긴 이 냄새에 갈수록 저항할 수 없게 되어갔다.',
      ]);
      await era.printAndWait(
        '방금 막 무용을 마친 담당 우마무스메의 몸에는 운동 뒤의 미열과 가벼운 땀방울이 배어 있었다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 두 손으로 ',
        you.get_colored_name(),
        '의 흥분하여 떨리는 하체를 감싸 쥐고, 부드러운 손길로 앞뒤로 가볍게 흔들며 풀어주었다.',
      ]);
      await era.printAndWait([
        '그녀는 촉촉하고 핑크빛인 부드러운 혀끝을 살짝 내밀며, 눈을 반짝이며 ',
        you.get_colored_name(),
        '을(를) 올려다보았다.',
      ]);
      era.printButton(`「그건 루비가 너무 예쁜 탓이야. 매번 볼 때마다 발기해서 아플 정도라고.」`, 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 그 말을 듣고는, ',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 두 손 역시 가만히 있지 않았다. 그녀의 위로 치켜 올라간 골반과 엉덩이를 부드럽게 주무르다, 발레 스커트 아래 숨겨진 타이즈의 엉덩이 골 사이로 손가락을 밀어 넣었다.',
      ]);
      await era.printAndWait(
        '연약한 틈새를 몇 번이고 살며시 매만지자, 고급 실크 스타킹을 흠뻑 적시며 스며 나온 애액이 손가락 위를 부드럽게 뒤덮었다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] date
  date: (() => {
    const title = '데이트';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await you.say_as_passer_by_and_wait(
        '데이트',
        '집사 「실례하겠습니다, 트레이너님.」',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 전속 집사가 ',
        you.get_colored_name(),
        '의 트레이닝실을 방문했다. 방문한 목적은 필시 ',
        ruby.get_colored_name(),
        '와 관련된 일이리라.',
      ]);
      await you.say_as_passer_by_and_wait(
        '집사 「아가씨께서 저택의 프라이빗 수영장에서 수영을 즐기고 계십니다. 제가 그곳으로 모시겠습니다.」',
        '아가씨께서는 저택의 수영장에서 수영을 즐기고 계십니다. 제가 그곳으로 모시겠습니다.',
      );
      await era.printAndWait([
        '집사가 방을 나선 뒤, ',
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '를 조교할 때 사용하는 전용 도구들을 스포츠 가방에 남김없이 챙겨 넣고는 그 뒤를 따랐다.',
      ]);
      await era.printAndWait([
        '은은한 달빛이 내리쬐는 야외 루프탑 수영장 안에서, ',
        ruby.get_colored_name(),
        '는 마치 한 마리의 매혹적인 인어와도 같은 자태로 유유히 헤엄치고 있었다.',
      ]);
      era.printButton('「이 밤늦은 시각까지 훈련이라니 고생이 많네.」', 1);
      await era.input();
      await ruby.say_and_wait(
        '과분한 말씀이셔요. 그래서, 절 데리러 오신 건가요?',
      );
      era.printButton('「아니, 너한테 좀 할 이야기가 있어서 말이지.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 스포츠 가방을 내려놓고 수영장 가장자리에 걸터앉았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 물속에서 얼굴을 내밀며 ',
        you.get_colored_name(),
        '의 곁으로 다가왔을 때, 그녀의 풍만한 가슴골이 단숨에 시야에 가득 들어왔다.',
      ]);
      await era.printAndWait(
        '남근이 본능적인 번식 욕구에 지배당해, 자신도 모르는 사이에 딱딱하게 발기했다.',
      );
      await ruby.say_and_wait(
        '하지만 아주 유감스럽게도, 전 갑자기 수영을 더 하고 싶어졌는걸요.',
      );
      await ruby.say_and_wait('만약 저와 대화를 나누고 싶으시다면, 이쪽으로 들어오셔요……');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '를 향해 부드러운 손길을 내밀었다.',
      ]);
      await ruby.say_and_wait(
        '지금 이곳에는 오직 당신과 저뿐이니, 전 당신의 알몸 따윈 개의치 않아요.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 목전에서 옷을 전부 거침없이 벗어던져, 반쯤 발기한 성기를 고스란히 노출시켰다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 얼굴이 방금 전까지의 여유롭던 표정에서, 자신이 강인한 수컷에게 완전히 굴복당하기 직전의 가련한 암컷의 표정으로 급변하는 바로 그 순간.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 육봉 위로 굵직한 혈관과 청진이 흉포하게 도드라졌다.',
      ]);
      await era.printAndWait(
        '그리고 일부러 하반신을 음란하게 들썩이며 수영장 물속으로 뛰어들어, 눈앞에 대령한 풍만한 엉덩이 살덩이를 왁살스럽게 움켜쥐었다.',
      );
      await era.printAndWait([
        '완전히 발기한 성기를 그녀의 배꼽 밑에 거칠게 밀착시킨 채, 폭압적으로 ',
        ruby.get_colored_name(),
        '의 입술을 빼앗았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 입안을 비집어 열고는, 혀뿌리로 구강 내부를 무참히 짓밟고 유린했다.',
      ]);
      await era.printAndWait('한 치의 여지도 남기지 않고 구석구석 핥아 내리며, 혀끝에 고인 은밀한 타액을 남김없이 빨아 당겼다.');
      await era.printAndWait(
        '이어 그녀의 혀를 자신의 입안으로 깊숙이 끌어들여, 서로 격렬하게 얽히며 진득한 웅덩이를 교환했다.',
      );
      await era.printAndWait([
        '마치 실제 성교를 나누는 듯 농밀하고 격정적인 키스가 끝났을 때, ',
        ruby.get_colored_name(),
        '의 고결한 여유는 이미 흔적도 없이 박살 나 있었다.',
      ]);
      await ruby.say_and_wait('너무해요……');
      era.printButton('「자, 그럼 이제 다음엔 뭘 해줄까?」', 1);
      await era.input();
      await ruby.say_and_wait('제 말을 좀 들어주셔요……');
      era.printButton('「네가 솔직하게 불지 않으면, 난 아무것도 모른다고?」', 1);
      await era.input();
      await ruby.say_and_wait('부디, 부드럽게 해주세요……');
      await era.printAndWait(
        '그렇게 속삭이며, 그녀는 수영장 물가에서 기어 올라와 양손을 차가운 벽면에 짚었다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그녀의 젖은 수영복을 옆으로 젖혀버리고는, 은밀한 애무를 개시했다.',
      ]);
      await era.printAndWait(
        '손가락 끝으로 최소한의 음모조차 정갈하게 제모하고 관리된 암컷의 비소를 매끄럽게 애무했다.',
      );
      await era.printAndWait(
        '비록 손길 자체는 지극히 부드러웠으나, 밀착해 오는 거대한 성기의 존재감만큼은 그 자체로 흉포하기 짝이 없었다.',
      );
      era.printButton(
        '「아주 상스러운 소리를 내네, 화려한 일족은 품위 유지가 불가능하 거야?」',
        1,
      );
      era.printButton(
        '「이래서야 우마무스메라기보단, 발정 난 암컷이라고 부르는 게 훨씬 어울리겠어.」',
        2,
      );
      await era.input();
      await ruby.say_and_wait('그건 전부 당신이……');
      era.printButton('「지금 그게 내 탓이라고 우기는 거야?」', 1);
      era.printButton(
        '「암컷이라고 불리는 주제에, 보지에서 액을 줄줄 흘려대며 뿜어대다니. 정말 천박한 암컷이네.」',
        2,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한 손의 손가락들을 ',
        ruby.get_colored_name(),
        '의 항문 속으로 사정없이 쑤셔 박아 처넣으며, ',
        ruby.get_colored_name(),
        '의 허리를 강제로 높이 치켜들게 만들었다.',
      ]);
      await era.printAndWait('다른 한 손으로는 고귀한 일족의 잘 여문 엉덩이를 철썩철썩 방자하게 후려쳤다.');
      await era.printAndWait([
        '숨겨진 피학증이 극치로 자극당해서였을까, ',
        ruby.get_colored_name(),
        '는 신체를 거칠게 비틀며, 바닥 위로 막대한 양의 분수를 성대하게 뿜어냈다.',
      ]);
      await ruby.say_and_wait('아윽…… 저, 인정할게요.');
      await ruby.say_and_wait('저는, 당신의 암컷이에요.');
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 손을 ',
        ruby.get_colored_name(),
        '의 엉덩이에서 가차 없이 떼어내자, 그녀의 자세는 그 자리에서 무참히 무너져 내렸다.',
      ]);
      await era.printAndWait('격렬한 분출의 나른한 여운에 푹 침전된 채, 그녀는 간헐적으로 상스러운 신음을 흘려댔다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 스포츠 가방에서 줄이 길게 늘어진 가죽 개목줄을 꺼내어, ',
        ruby.get_colored_name(),
        '의 고결한 목덜미에 단단히 채워 넣었다.',
      ]);
      await era.printAndWait(
        '이로써 완벽한 암컷의 형상을 띠게 되었으나, 아직 어딘가 부자연스럽고 불완전한 구석이 남아있었다.',
      );
      await ruby.say_and_wait('다, 당신, 대체 뭘 더 하실 생각인가요?');
      await era.printAndWait('과연 어디가 부조화스러운 것일까?');
      era.printButton('그녀는 지금 당장 나에게 짓눌린 채, 자궁 깊숙이 씨앗이 주입되기를 갈망하고 있다.', 1);
      era.printButton('「옷을 입고 있는 암컷이 세상에 어디 있어.」', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '에게 당장 걸치고 있는 모든 수영복을 벗어 던지라고 명령했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 표정에 일순 반발심이 서렸으나, ',
        you.get_colored_name(),
        '이(가) 거대한 육봉으로 그녀의 뺨을 찰싹찰싹 몇 차례 후려치자, 그녀의 손놀림은 이내 무시무시하게 빨라졌다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 발밑에는 이미 그녀의 비소에서 뿜어져 나온 암컷의 진득한 액으로 커다란 웅덩이가 형성되어 있었다.',
      ]);
      await era.printAndWait(
        '그녀는 바닥에 주저앉아 두 다리를 활짝 벌린 채, 매끄러운 겨드랑이를 고스란히 노출하는 상스러운 엠자 쪼그려 앉기 자세를 취했다.',
      );
      await era.printAndWait(
        '이어 입을 벌려 분홍빛 혀를 길게 내밀고는, 하아하아 가느다란 가쁜 숨을 내쉬었다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 거대한 성기를 ',
        ruby.get_colored_name(),
        '의 목구멍 깊숙한 내부까지 사정없이 밀어 넣었고, 그녀의 얼굴에는 구역질을 참지 못하는 극심한 고통의 신색이 역력히 비쳤다.',
      ]);
      await era.printAndWait(
        '혀와 식도가 거칠게 침범당하는 끔찍한 가학을 고스란히 감내하면서도, 그녀는 어떻게든 성심성의껏 수컷을 모시며 정액을 짜내기 위해 필사적으로 입굴을 움직였다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 제멋대로 ',
        ruby.get_colored_name(),
        '의 머리채를 무자비하게 움켜쥔 채, 허리를 격렬하게 몰아붙였다.',
      ]);
      await era.printAndWait([
        '육봉의 뿌리 끝까지 목구멍 속에 완전히 박아 넣었음에도, ',
        ruby.get_colored_name(),
        '는 양 뺨이 푹 꺼질 정도로 필사적이고 진지하게 구강 성교에 임했다.',
      ]);
      await era.printAndWait('사정한다!');
      await era.printAndWait(
        '목구멍 가장 깊숙한 성역에서 정액을 사출하자, 그녀가 원하든 원치 않든 막대한 양의 정액이 식도를 타고 위장 내부로 다이렉트로 주입되었다.',
      );
      await era.printAndWait([
        '사정이 완전히 끝났을 때, ',
        ruby.get_colored_name(),
        '의 위장은 마치 정액을 가득 채워 넣은 콘돔처럼 팽팽하게 부풀어 올랐다.',
      ]);
      await era.printAndWait('외부에서 육안으로 바라보아도, 그녀의 아랫배가 확연하게 볼록 튀어나와 있었다.');
      await ruby.say_and_wait('당신…… 이제야, 만족하셨나요?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이 가련한 담당을 밤새도록 무참히 침범하고 유린했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] delicious
  delicious: (() => {
    const title = '미식';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await era.printAndWait(['어느 날, ']);
      await era.printAndWait([
        '그리하여, ',
        you.get_colored_name(),
        '은(는) 직접 주방으로 가 ',
        ruby.get_colored_name(),
        '를 위해 미식을 한 상 가득 요리하기로 결정했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 그냥 따라주었고, 당연히 ',
        you.get_colored_name(),
        '의 뒤를 따라왔다.',
      ]);
      await era.printAndWait([
        '화려한 일족의 창고에 있는 하얗고 뽀얀 쌀은, ',
        you.get_colored_name(),
        '이(가) 이전에 먹었던 것보다 몇 배는 더 좋아 보였다.',
      ]);
      await era.printAndWait(
        '주방에서는 파, 생강, 마늘, 간장, 맛술 등의 조미료를 아주 쉽게 찾을 수 있었다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 돼지고기를 거의 먹지 않고 대부분 소나 양고기를 위주로 먹지만, ',
        you.get_colored_name(),
        '은(는) 용케도 훈제 베이컨 한 덩이를 찾아냈다.',
      ]);
      await era.printAndWait([
        '식사는 화려하고 커다란 홀에서 진행되었는다. 한쪽에 서 있는 집사를 제외하면 오직 ',
        ruby.get_colored_name(),
        '만이 중앙 자리에 앉아 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 분주히 요리를 나르는 동안, 텅 빈 방 안은 어딘지 모르게 쓸쓸한 기운이 감돌았지만, 다행히도 따스한 화로와 사랑하는 이가 함께 있었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 반신반의하며 젓가락을 움직였다.',
      ]);
      await ruby.say_and_wait('음, 정말 맛있네요.');
      await era.printAndWait([
        '사실 ',
        you.get_colored_name(),
        '이(가) 만든 것은 그저 평범한 가정식 요리였고, ',
        you.get_colored_name(),
        '이(가) 느끼기에도 그저 평범한 맛이었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        ruby.get_colored_name(),
        '에게 있어서 이런 미각적 자극은 절대적으로 맛있다고 표현하기에 부족함이 없었다.',
      ]);
      era.printButton('「네가 좋다면, 내가 가르쳐 줄 수도 있어.」', 1);
      await era.input();
      await ruby.say_and_wait('좋아요.');
      await era.printAndWait([
        '식후 산책은 빠질 수 없는 법, 기분이 무척 좋아진 ',
        ruby.get_colored_name(),
        '는 본관 밖으로 나섰다.',
      ]);
      await era.printAndWait([
        '은 정원으로 이어지는 돌길을 따라 걸었다. 딱히 정처 없이 편하게 거닐 뿐이었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 입꼬리는 연신 올라가 있었고, 그녀는 ',
        you.get_colored_name(),
        '의 팔짱을 낀 채, ',
        you.get_colored_name(),
        '이(가) 들어본 적 없는 콧노래를 흥얼거렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 등 뒤에서 슬그머니 손을 뻗어 ',
        ruby.get_colored_name(),
        '의 허리에 올린 뒤, 천천히 끌어안았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 기분이 최고조에 달해 있었기에, ',
        you.get_colored_name(),
        '의 행동을 그대로 받아들였다.',
      ]);
      await era.printAndWait([
        '방으로 돌아오자, ',
        you.get_colored_name(),
        '은(는) 흥분하기 시작했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 옷을 벗고 욕실로 발을 들였다.',
      ]);
      await ruby.say_and_wait('들어오세요.');
      await era.printAndWait([
        '마침내 소원을 성취한 ',
        you.get_colored_name(),
        '은(는) 힘 조절을 제대로 하지 못했다.',
      ]);
      await era.printAndWait(
        '본래는 가볍게 입을 맞추려 했으나, 마치 물어뜯을 듯이 격렬하게 탐하는 입맞춤으로 변해버렸다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 입을 열어, 자신의 혀로 ',
        you.get_colored_name(),
        '(아)라는 이름의 짐승을 달래주었다.',
      ]);
      await era.printAndWait([
        '그녀가 손을 뻗어 ',
        you.get_colored_name(),
        '의 옆구리를 꼬집고 나서야, ',
        you.get_colored_name(),
        '은(는) 자신이 너무 지나치게 몰입했다는 것을 깨달았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 뒤로 조금 물러나며, 몸 전체를 바닥으로 옮겼다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마른침을 삼키며, 두 손으로 ',
        ruby.get_colored_name(),
        '의 발을 받쳐 들고는 발가락부터 정성스레 탐닉하기 시작했다.',
      ]);
      await era.printAndWait('엄지발가락을 입에 머금고 혀를 끊임없이 굴린다.');
      await era.printAndWait('이어서 발가락 하나하나와 꼿꼿하게 펴진 발등까지.');
      await era.printAndWait([
        '단순히 씻어내리는 목욕물과는 다르게, ',
        you.get_colored_name(),
        '의 타액은 그녀의 몸 위에서 마치 미약과도 같은 작용을 일으켰다.',
      ]);
      await ruby.say_and_wait('빨리요……');
      await era.printAndWait([
        '섬세한 살결에 매료된 ',
        you.get_colored_name(),
        '은(는) 입술을 떼지 못한 채 허벅지 위로, 그리고 허벅지 안쪽 깊은 곳까지 핥아 올렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 허리를 슬쩍 들어 올려, 자신의 성기를 ',
        ruby.get_colored_name(),
        '의 뺨에 가볍게 부딪혔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 짓궂게 구는 육봉을 붙잡고 귀두 끝부분부터 핥기 시작했다.',
      ]);
      await ruby.say_and_wait('아…… 으응……');
      await era.printAndWait([
        '아무런 거침없이 터져 나오는 신음 소리에 ',
        you.get_colored_name(),
        '은(는) 더 이상 참을 수 없게 되었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한 손으로 눈앞에서 늘어진 머리를 붙잡고, 다른 한 손으로는 ',
        ruby.get_colored_name(),
        '의 귀를 만지작거리며 비벼대었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 열심히 봉사하고 있는 ',
        ruby.get_colored_name(),
        '의 머리를 두 손으로 감싸 쥔 채, 스스로도 앞뒤로 허리를 흔들기 시작했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 자신이 부드럽고 따스한 온기에 온통 둘러싸인 것을 느꼈고, 조여드는 압박감에 ',
      ]);
      await era.printAndWait([
        '음모가 ',
        ruby.get_colored_name(),
        '의 뺨을 스치며 말로 다 표현할 수 없는 자극을 주었고, 이는 ',
        ruby.get_colored_name(),
        '가 더욱 열렬하게 입을 놀리도록 만들었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 정액을 삼켰다.',
      ]);
      await era.printAndWait([
        '맛은 없었지만 그녀는 그대로 삼켜냈다. 그것은 온전히 ',
        you.get_colored_name(),
        '의 것이었기에.',
      ]);
      await era.printAndWait([
        '자신의 몸 안에 ',
        you.get_colored_name(),
        '의 액체가 채워졌다는 사실은, 단순한 키스보다 훨씬 더 깊은 의미를 지니고 있었다.',
      ]);
      await era.printAndWait('하지만 담당 우마무스메는 아직 절정에 도달하지 못했다.');
      await era.printAndWait([
        '그녀가 다리를 들어 올리자, ',
        you.get_colored_name(),
        '은(는) 짓궂은 마음으로 ',
        ruby.get_colored_name(),
        '의 봉긋하게 선 유두를 장난치듯 손가락 사이에 끼워 잡아당겼다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 가만히 있지 못하는 손을 잡아채어 자신의 하체 위로 옮겼다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 뜨겁게 달아오른 은밀한 곳에 손이 닿았고, ',
        ruby.get_colored_name(),
        '에게 살짝 흘겨짐을 당했다.',
      ]);
      await era.printAndWait([
        '그녀의 발가락이 미세하게 오므라들었고, ',
        you.get_colored_name(),
        '의 손톱이 음핵을 스쳐 지나갈 때마다 몸을 잘게 떨었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 고조되어 절정에 도달하기까지는 한참의 시간이 더 걸렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 방심하지 않고 커다란 수건을 가져와 담당 우마무스메를 감싸 안은 뒤, 그녀를 안고 욕실을 나왔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 조금 졸린 듯했고, ',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) ',
        ruby.get_colored_name(),
        '의 머리카락을 쓸어 넘기다 보니, 아직 다 마르지 않은 백탁을 발견했다.',
      ]);
      await era.printAndWait([
        '몇 번이고 반복해서 ',
        ruby.get_colored_name(),
        '의 머리를 닦아주는 동안, 어차피 잠이 오지 않던 그녀는 ',
        you.get_colored_name(),
        '의 품속에 파고들어 ',
        you.get_colored_name(),
        '을(를) 꼭 껴안았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] dessert
  dessert: (() => {
    const title = '디저트';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '식사를 마친 후, ',
        you.get_colored_name(),
        '은(는) 문득 장난기가 발동해 ',
        ruby.get_colored_name(),
        '를 안아 식탁 위로 올려두었다.',
      ]);
      await era.printAndWait(
        '갑작스러운 행동에 그녀는 「앗!」 하고 조금 놀란 기색을 보였으나, 이내 곧 차분함을 되찾았다.',
      );
      await era.printAndWait(
        '하얀 니삭스를 신은 가녀린 발이 공중에 대롱거렸다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 스커트를 걷어올리고, 그녀가 입고 있는 고급스러운 팬티를 조심스레 벗겨냈다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 두 다리를 벌려 그 벌어질 듯 말 듯 한 붉은 장미 봉오리를 자세히 관찰했다.',
      ]);
      await era.printAndWait(
        '뽀얗고 붉은 기가 도는 부끄러운 언덕 위로, 마치 고동치는 혈관이 보이는 듯했다. 앵두 같은 입술에 뒤지지 않는 조그만 소음순 두 조각이 열렸다 닫혔다 하는 모습은, 흡사 또 다른 생명체가 숨을 헐떡이는 것 같았다.',
      );
      await era.printAndWait([
        '이렇게 정면으로 마주하고 있음에도 불구하고, ',
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '에게 전혀 거부 반응을 보이지 않았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 ',
        ruby.get_colored_name(),
        '의 가랑이 사이에 묻고는, 혀를 내밀어 꽃봉오리의 감미로움을 맛보았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 깜짝 놀라 두 다리를 맞부딪혔고, ',
        you.get_colored_name(),
        '은(는) 진심으로 우마무스메의 힘찬 허벅지에 머리가 터질 것만 같다고 느꼈다.',
      ]);
      era.printButton('숨이 막혀 구조 요청 소리를 낸다.', 1);
      era.printButton('그 좁은 틈새 속으로 파고든다.', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 얼굴을 붉히며 두 다리를 열어주었다.',
      ]);
      await era.printAndWait([
        '그녀의 신체는 본능적으로 허벅지를 힘껏 조이려 했으나, 혹여나 ',
        you.get_colored_name(),
        '에게 상처를 입힐까 두려워 무척이나 열심히 인내하고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 뺨으로 하체의 탄력을 느끼며, 혀끝으로 발기한 음핵을 애무하고, 더 깊고 촉촉한 음도 안으로 들어가 연약한 살결의 주름을 매만졌다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 참지 못하고 작은 신음을 흘렸다.',
      ]);
      await era.printAndWait([
        '욕망이 자극된 ',
        you.get_colored_name(),
        '은(는) 그 자그만 음핵을 빨아들이기 시작했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 머리를 감싸 안은 채 몸을 끊임없이 떨었고, ',
        you.get_colored_name(),
        '은(는) 자신의 목덜미 뒤로 닿는 호흡이 점차 가빠지는 것을 느꼈다.',
      ]);
      await era.printAndWait([
        '마지막으로, ',
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 애액을 한 모금 머금은 채 깊은 입맞춤을 나누며, 그녀에게 ',
        ruby.get_colored_name(),
        '의 입안에 맴도는 그녀 자신의 맛을 공유했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] foot_job
  foot_job: (() => {
    const title = '풋잡';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     * @param {CharaTalk} callname 다이이치 루비가 플레이어를 부르는 호칭
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([callname, ', 당신의 그거…… 커진 건가요?']);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 고개를 숙여 ',
        you.get_colored_name(),
        '의 가랑이를 슬쩍 보더니, 이내 붉게 빛나는 눈동자로 올려다보며 물었다.',
      ]);
      await ruby.say_and_wait('어째서 커지는 건가요?');
      await ruby.say_and_wait([
        callname,
        ', 제가 흰색 스타킹을 신은 다리가 좋은 건가요?',
      ]);
      era.printButton('「으응.」', 1);
      era.printButton('「너무 예뻐서…… 그리고 만지기 좋아서, 그러니까……」', 2);
      await era.input();
      await era.printAndWait([
        '순간, ',
        ruby.get_colored_name(),
        '가 부드러운 작은 손을 뻗어 ',
        you.get_colored_name(),
        '의 손을 끌어당겨 자신의 허벅지 위에 올려놓았다.',
      ]);
      await ruby.say_and_wait([
        callname,
        '이 좋으시다면, 마음껏 만지셔도 돼요. 저…… 저는 ',
        callname,
        '이 이러는 거 싫지 않으니까……',
      ]);
      await era.printAndWait([
        '어떻게 된 일이지? ',
        you.get_colored_name(),
        '의 머릿속이 하얘졌지만, 손끝으로 전해지는 실크 같은 감촉은 결코 거짓말을 하지 않았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 손은 본능적으로 담당 우마무스메의 스타킹 신은 허벅지를 부드럽게 쓰다듬었고, 바지 속의 흉기는 더욱 팽팽하게 부풀어 올랐다.',
      ]);
      await ruby.say_and_wait('참고 계시면, 무척 괴로우시겠죠.');
      await era.printAndWait([
        '말을 마친 ',
        ruby.get_colored_name(),
        '는 손을 뻗어 ',
        you.get_colored_name(),
        '의 바지 지퍼를 내렸다. 흉포한 음경이 힘차게 튀어나왔고, 그녀는 작은 손으로 그것을 부드럽게 훑기 시작했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아예 바지를 걷어차 버리고, 양손을 모두 사용해 담당 우마무스메의 스타킹 신은 다리를 주무르며 손바닥 깊숙이 전해지는 온기를 만끽했다.',
      ]);
      await ruby.say_and_wait([callname, ', 기분 좋으신가요?']);
      await era.printAndWait([
        '몇 번 움직이지도 않았는데, ',
        you.get_colored_name(),
        '은(는) 하반신이 저릿하며 당장이라도 하얀 이물질을 뿜어낼 것만 같았다.',
      ]);
      era.printButton('그녀의 손을 치운다.', 1);
      era.printButton('항복하고 받아들인다.', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 서둘러 ',
        ruby.get_colored_name(),
        '의 손을 치우며 치명적인 쾌감을 중단시켰다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 의아한 시선 속에서, ',
        you.get_colored_name(),
        '은(는) 의자에서 내려와 바닥에 앉았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 의도를 알아차리고, 스타킹에 감싸인 가냘픈 두 발로 ',
        you.get_colored_name(),
        '의 분노로 가득 차 하늘을 찌를 듯한 남근을 좌우에서 가두어 쥐고 위아래로 비벼대기 시작했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 자극에 어느 정도 익숙해진 것을 느끼자, ',
        ruby.get_colored_name(),
        '는 살짝 힘을 주어 밟아 내렸다. ',
        you.get_colored_name(),
        '은(는) 몸이 중심을 잃고 바닥에 쓰러지지 않도록 두 손으로 뒤쪽 바닥을 지탱할 수밖에 없었다.',
      ]);
      await ruby.say_and_wait('이러면 기분 좋으신가요?');
      await ruby.say_and_wait('얄미운 변태 씨.');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 부끄러워하며 매도하면서도, 스타킹을 신은 두 발의 움직임은 점점 빨라져만 갔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 요도구에서는 이내 윤활유 같은 쿠퍼액이 연달아 흘러나와, 그녀의 하얀 스타킹 발을 적시기 시작했다.',
      ]);
      await ruby.say_and_wait(
        '만약 마음에 드신다면, 앞으로 매일 이렇게 해드릴게요.',
      );
      await era.printAndWait([
        '이미 뇌가 욕망으로 가득 찬 ',
        you.get_colored_name(),
        '은(는) 거친 숨을 몰아쉬며 고개를 끄덕일 뿐이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 치명적인 쾌감을 이기지 못하고 고개를 뒤로 젖히며 신음을 내뱉었다.',
      ]);
      await era.printAndWait(
        '작은 발 사이에 끼인, 소녀와 극명한 대조를 이루는 굵직한 남근이 바르르 떨리더니 요도구로부터 분수처럼 하얀 농밀한 정액을 연달아 뿜어냈고, 이내 그녀의 귀여운 스타킹을 신은 발 위로 후두둑 떨어져 내렸다.',
      );
      await era.printAndWait([
        '사정은 십여 초간 지속되었고, ',
        you.get_colored_name(),
        '은(는) 눈앞이 하얘지며 뇌수가 전부 뽑혀 나가는 듯한 강렬한 쾌감에 휩싸였다.',
      ]);
      await era.printAndWait([
        '그러나 ',
        ruby.get_colored_name(),
        '의 두 발은 멈추지 않고 여전히 위아래로 움직이며 ',
        you.get_colored_name(),
        '의 인자즙을 쥐어짜냈다.',
      ]);
      await era.printAndWait([
        '사정이 완전히 끝나고 한참이 지나서야 그녀는 두 발을 ',
        you.get_colored_name(),
        '의 허벅지 위에 올려놓았다.',
      ]);
      await era.printAndWait([
        '정액으로 흠뻑 젖은 스타킹 발로 ',
        you.get_colored_name(),
        '의 허벅지를 툭툭 건드리며, ',
        you.get_colored_name(),
        '이(가) 사정 후의 여운을 충분히 만끽하도록 만들었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] jade
  jade: (() => {
    const title = '옥 상점';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        '일반적인 액세서리 상점은 대개 여성용 장식품 위주로 판매하기 마련이다.',
      );
      await era.printAndWait(
        '하지만 두 사람이 발을 들인 이 상점은 내부 인테리어부터 눈길을 사로잡았다.',
      );
      await era.printAndWait(
        '비취, 보석 등 매장 안에는 원석의 종류도 풍부할 뿐만 아니라 완성된 가공품도 제법 많았다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 눈앞의 화려한 보물들에 전혀 한눈을 팔지 않고, 곧장 옥 패물이 진열된 방향으로 걸어갔다.',
      ]);
      await era.printAndWait(
        '그녀에게 있어서 아름다운 보석 따위는 이미 질리도록 봐온 것들이라, 진작에 흥미를 잃은 지 오래였다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 고개를 요리조리 흔들었지만, 마음에 쏙 드는 것을 찾지 못한 모양이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 카운터 근처에 있는 직원에게 안내를 요청했다.',
      ]);
      await era.printAndWait([
        '가이드가 몇 쌍의 상품을 추천하며 설명해 주었지만, ',
        ruby.get_colored_name(),
        '는 그리 만족스러워하지 않았다.',
      ]);
      await ruby.say_and_wait('다른 더 좋은 것은 없나요?');
      await era.printAndWait([
        '잠시 후, 가게의 주인이 직접 모습을 드러냈다. 그는 ',
      ]);
      await era.printAndWait('정성스럽게 포장된 상자가 전해졌고, 뚜껑을 열자 눈앞에 나타난 것은 한 쌍의 비취 노리개였다.');
      await era.printAndWait(
        '알고 보니 그것은 연못 위의 원앙을 형상화한 것으로, 완벽하게 대칭되는 형태에 주변을 연꽃잎들이 감싸 안아 풍요롭고 원만한 느낌을 자아내고 있었다.',
      );
      await era.printAndWait(
        '떼어놓으면 그저 한 마리의 새에 불과하지만, 둘을 합쳐놓으면 서로 목을 교차한 채 친밀함을 과시하는 한 쌍의 연인이 되었다.',
      );
      await era.printAndWait(
        '가게 주인은 「본래 제 아내에게 선물하려 했던 물건입니다만, 안타깝게도……」 라며 말문을 흐렸다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 확실히 마음이 동했다. 최상품이라 불리기에 부족함이 없었다.',
      ]);
      era.printButton('「이 물건을 혹시 판매하실 생각이 있으십니까?」', 1);
      era.printButton('「이건 너무 과하게 귀중하군요, 다른 걸 좀 둘러볼까요?」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '점장은 고개를 끄덕였으나, 제시된 가격은 이미 수많은 사람을 지레 겁먹고 물러나게 만든 액수였다.',
        );
        await era.printAndWait(
          '일반적인 사람이라면 감히 엄두도 내지 못할 금액이었고, 그저 가벼운 마음으로 환심을 사기 위해 살 수 있는 수준의 물건이 아니었다.',
        );
        await ruby.say_and_wait(
          '그러면 당신이 하나 차고, 제가 하나 차면 딱 좋겠네요.',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' 역시 무척 마음에 들어 하는 눈치였다. 보면 볼수록 마음에 들어 당장이라도 몸에 지니고 싶어 안달이 난 듯했다.',
        ]);
        await era.printAndWait(
          '도리어 가게 주인이 깜짝 놀라, 이 어린 소녀가 이 장식에 담긴 속뜻을 모르고 하는 소리인가 싶어 서둘러 해명하려 했다.',
        );
        era.printButton('「사장님, 다른 작품도 좀 보여주세요.」', 1);
        await era.input();
        era.drawLine();
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 마음에 쏙 드는 커플 옥장식을 손에 넣고 무척 기뻐했다.',
        ]);
        await era.printAndWait([
          '가게 문을 나서기 직전까지도, 주인은 ',
          ruby.get_colored_name(),
          '에게 이 원앙들이 깊은 의미를 필사적으로 설명하려 애썼다.',
        ]);
        await ruby.say_and_wait(
          '제가 암컷 원앙이고, 이 사람이 수컷 원앙인 거 알고 있어요.',
        );
        await era.printAndWait([
          '주인이 황당함에 말문이 막혀 멍하니 서 있는 사이, ',
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 손을 이끌고 서둘러 다른 곳으로 자리를 옮겼다.',
        ]);
      } else {
        await era.printAndWait('이런저런 즐거운 대화가 오가고……');
        await era.printAndWait([
          '가게 주인은 참으로 소탈하고 참된 성품의 인물이었다. 그는 기꺼이 ',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] kiss
  kiss: (() => {
    const title = '트레이닝실에서의 키스';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     * @param {CharaTalk} callname 다이이치 루비가 플레이어를 부르는 호칭
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '의 담당 우마무스메는 멍하니 서 있는 ',
        you.get_colored_name(),
        '을(를) 소파 위로 밀쳐 눕혔다.',
      ]);
      await era.printAndWait([
        '풀어헤쳐진 화려하고 사치스러운 승부복 아래로, 흰색 타이즈를 신은 가녀린 엉덩이가 ',
        you.get_colored_name(),
        '의 가랑이 위에 내려앉았다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 상체를 앞으로 숙였고, 몇 가닥의 흑갈색 곱슬머리가 옆얼굴을 타고 흘러내렸다. 마치 그림 속 인형처럼 정교하고 아름다운 작은 얼굴이 옅은 홍조를 띠었다.',
      ]);
      await ruby.say_and_wait([
        callname,
        ', 딴생각하지 마세요.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 팔꿈치로 몸을 지탱하며 일어나려 하자, 부드럽고 매끄러운 소녀의 입술이 ',
        you.get_colored_name(),
        '의 입을 막아버렸다.',
      ]);
      await era.printAndWait([
        '말랑하고 촉촉한 혀가 단숨에 ',
        you.get_colored_name(),
        '의 입술과 치열을 열고 안으로 파고들었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 거칠고 두툼한 혀가 붙잡혀 농락당했고, 이내 담당 우마무스메의 향긋한 혀와 한데 얽혔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 타액은 마치 식후 과일처럼 달콤한 맛을 품고 있었으며, 끊임없이 ',
        you.get_colored_name(),
        '의 입안으로 밀려 들어왔다.',
      ]);
      await era.printAndWait([
        '자세의 제약 탓에, ',
        you.get_colored_name(),
        '은(는) 꼼짝없이 그녀의 끈적하고 청량한 타액을 계속해서 삼켜내야만 했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 향긋한 체향이 점차 사방을 가득 채우며 ',
        you.get_colored_name(),
        '의 비강을 파고들어 뇌를 마비시켰다.',
      ]);
      await era.printAndWait([
        '이 어린 소녀는 ',
        you.get_colored_name(),
        '의 구강 안에서 자신의 젖고 뜨거운 핑크빛 혀를 굴리며, ',
        you.get_colored_name(),
        '의 거친 혀와 함께 맞붙어 감아올렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        ruby.get_colored_name(),
        '는 서로의 침을 나누어 가지고 게걸스럽게 삼켜대며, 질척하고 젖은 소리를 요란하게 내뿜었다.',
      ]);
      era.printButton('담당 우마무스메의 가는 허리를 붙잡는다.', 1);
      era.printButton('그녀의 꼿꼿하고 아름다운 엉덩이를 만지작거린다.', 2);
      await era.input();
      await ruby.say_and_wait('쮸웁…… 츄르릅, 꿀꺽…… 하아…… 으음……');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 음란한 설원에 푹 빠져 정신을 차리지 못했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 하얀 타이즈에 단단히 조여진 은밀한 부위는, 연약한 틈새로부터 흘러나온 애액으로 인해 짙은 색으로 얼룩져 가고 있었다.',
      ]);
      await era.printAndWait([
        '한참이 지나서야, ',
        you.get_colored_name(),
        '은(는) 폐활량 부족으로 패배하여 머리가 어지러운 채 거친 숨을 몰아쉬었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 만족스러운 듯 ',
        you.get_colored_name(),
        '의 입안에 머무르느라 살짝 부어오른 혀를 거두어들였으나, 호흡만큼은 무척이나 평온했다.',
      ]);
      await era.printAndWait([
        '오르막길 달리기, 수영…… 신체 능력이 인간을 아득히 초월하는 우마무스메인 만큼, 의식을 완전히 비워낸 채 ',
        you.get_colored_name(),
        '과(와) 격렬한 키스를 나누면서도 호흡을 조절하는 본능적인 감각은 지극히 훌륭했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] loli_wife
  loli_wife: (() => {
    const title = '로리 아내';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 위해 목욕물을 받아 두었다.',
      ]);
      await era.printAndWait([
        '옷을 벗던 도중, ',
        you.get_colored_name(),
        '와 함께 목욕하자고 청했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 이미 씻은 상태였지만, 군말 없이 옷을 벗고 욕실로 들어왔다.',
      ]);
      await era.printAndWait([
        '욕실 안에서, ',
        ruby.get_colored_name(),
        '는 부끄러운 마음에 차마 ',
        you.get_colored_name(),
        '을(를) 똑바로 쳐다보지 못했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그녀의 손가락을 쥐어 잡고, 남성의 신체 구조에 대해 가르쳐 주었다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 손을 대기도 전에, ',
        you.get_colored_name(),
        '이(가) 먼저 소녀의 부드러운 살결 위에 비누칠을 하기 시작했다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        you.get_colored_name(),
        '의 양손이 그녀의 가슴 앞에 머물렀다. 그녀의 가슴은 마치 정성스레 구워낸 달걀 프라이 같았다. 흰자가 노른자를 감싸 안은 듯 촉촉하게 흔들려 ',
        you.get_colored_name(),
        '이(가) 하여금 당장이라도 한 입 베어 물고 싶게 만들었다.',
      ]);
      await era.printAndWait([
        '자그만 돌기는 ',
        you.get_colored_name(),
        '의 조급한 손길에 자꾸만 손아귀를 벗어나 미끄러졌고, 그럴 때마다 ',
        ruby.get_colored_name(),
        '는 참지 못하고 풋 웃음을 터뜨렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '를 깨끗이 씻겨준 후, 이번에는 ',
        ruby.get_colored_name(),
        '에게 ',
        you.get_colored_name(),
        '의 몸을 닦아달라고 부탁했다.',
      ]);
      await era.printAndWait(
        '그녀는 몸의 모든 부위를 세심하게 닦아내렸지만, 오직 가장 중요한 부위만큼은 쏙 빼놓았다.',
      );
      era.printButton('아직 안 씻은 부위를 말해준다', 1);
      era.printButton('그녀의 손을 잡고 강제로 시킨다', 2);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] non_penetration
  non_penetration: (() => {
    const title = '함께 목욕하기';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      const ret = [];
      era.printButton('「같이 목욕하는 건 어때?」', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 고개를 들어 눈을 동그랗게 떴다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 역시 스스로가 뱉은 말에 깜짝 놀랐다.',
      ]);
      await era.printAndWait(
        '이 제안이 아주 터무니없는 것은 아니었다. 결국 두 사람은 이미 여러 번 서로에게 숨김없이 솔직해진 적이 있었으니까.',
      );
      await era.printAndWait([
        '하지만 오늘 같은 평범한 평일에 정면으로 ',
        ruby.get_colored_name(),
        '에게 이런 제안을 건네는 것은, 다소 대담한 구석이 있었다.',
      ]);
      await ruby.say_and_wait('으음……');
      await ruby.say_and_wait('안 될 것도 없죠.');
      era.printButton(`「루비, 역시 최고야!」`, 1);
      era.printButton(`「나도 어쩔 수 없었다고, 루비가 너무 귀여운 탓이니까.」`, 2);
      era.printButton(`루비를 안아 올린다.`, 3);
      ret.push(await era.input());
      await era.printAndWait([ruby.get_colored_name(), '는 다소 부끄러워했다.']);
      await era.printAndWait([
        '눈앞에 펼쳐진 눈처럼 하얗고 고운 피부와 맵시 있고 요염한 나신을 바라보며, ',
        you.get_colored_name(),
        '은(는) 자신도 모르게 목이 타들어 갔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 뜨거운 시선에 다소 수줍은 기색을 내비쳤다.',
      ]);
      await ruby.say_and_wait('씻죠.');
      era.drawLine();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 빠른 걸음으로 욕조를 향해 걸어가 손을 뻗어 물 온도를 확인했다. 겹겹이 피어오르는 물안개가 담당 우마무스메의 풋풋한 몸을 가려주어, 보일 듯 말 듯 한 실루엣 속에서 더욱 몽환적인 미감을 자아냈다.',
      ]);
      await era.printAndWait([
        '알몸인 아름다운 등과 매끄러운 엉덩이를 ',
        you.get_colored_name(),
        '에게 보여주며, ',
        ruby.get_colored_name(),
        '는 고운 발을 들어 올려 물 위에 잔잔한 파문을 일으켰다.',
      ]);
      await era.printAndWait(
        '물에 들어가는 모습이 가뿐하여 물보라가 그리 많이 튀지 않았다.',
      );
      era.printButton(`「루비, 정말 아름다워.」`, 1);
      era.printButton('바지를 벗고 귀두를 공기 중에 노출시킨다.', 2);
      ret.push(await era.input());
      await ruby.say_and_wait('그러나 ');
      await era.printAndWait([
        you.get_colored_name(),
        '의 육봉이 위풍당당하게 솟구쳐 있는 것을 보자, ',
        ruby.get_colored_name(),
        '는 자신도 모르게 두 다리를 꼭 맞조였다.',
      ]);
      await era.printAndWait(
        '몸은 분명 따스한 물에 부드럽게 적셔졌건만, 소녀의 표정에는 어딘가 허전하고 아쉬운 기색이 감돌았다.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 짧은 멋쩍음이 지난 후, 눈치 없이 싱글벙글 웃으며 물속으로 몸을 던졌다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '와 달리 거칠게 입수하는 바람에 물보라가 사방으로 세차게 튀었다.',
      ]);
      era.printButton('그녀의 맞은편에 앉는다.', 1);
      await era.input();
      await era.printAndWait([
        '욕조가 협소한 탓에, ',
        ruby.get_colored_name(),
        '의 두 발은 정확히 ',
        you.get_colored_name(),
        '의 음낭 바로 아랫부분에 위치해 있었다.',
      ]);
      await era.printAndWait([
        '그저 아주 미세하게 들어 올리기만 해도, ',
        you.get_colored_name(),
        '에게 미칠 것만 같은 자극을 안겨줄 수 있는 구도였다.',
      ]);
      await ruby.say_and_wait('무례하시기는……');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 말은 그렇게 하면서도, 커다란 눈동자를 ',
        you.get_colored_name(),
        '의 육봉으로부터 떼지 못했다.',
      ]);
      await era.printAndWait(
        '그것은 비록 물 아래 감춰져 있었으나, 결코 무시할 수 없는 웅장하고 늠름한 자태로 고개를 치켜들고 있었다.',
      );
      await era.printAndWait([
        '그럼에도 불구하고, ',
        ruby.get_colored_name(),
        '두 사람의 체취가 섞인 맑은 물을 움켜쥐어 자신의 몸에 끼얹는 동작은 여전히 우아하고 사랑스러웠다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 멍하니 ',
        ruby.get_colored_name(),
        '가 몸을 씻는 모습을 바라보았다.',
      ]);
      await era.printAndWait(
        '자신이 움직여야 한다는 사실조차 잊은 채, 그저 하얗고 뽀얀 살결 하나하나를 조그만 손으로 따스한 물을 적셔 부드럽게 문지르는 광경만을 주시했다.',
      );
      await era.printAndWait([
        '고급 비누가 만들어내는 화사한 꽃향기가 향긋하고 달콤한 비눗방울 하나하나에 깃들어, ',
        ruby.get_colored_name(),
        '를 마치 고귀한 공주님처럼 돋보이게 했다.',
      ]);
      await ruby.say_and_wait('넋 놓고 있지 마세요.');
      await era.printAndWait([
        '담당 우마무스메의 재촉에 ',
        you.get_colored_name(),
        '은(는) 정신을 차렸으나, 이내 양다리 사이에 어떤 부드럽고 가녀린 감촉이 밀착하는 것을 강렬하게 느꼈다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 이것이 무의식적인 엇갈림인지, 아니면 의도된 유혹인지 분간하기 어려웠다.',
      ]);
      era.printButton('꽃잎처럼 가녀린 발을 붙잡는다.', 1);
      era.printButton('발을 조물거리며 만지작댄다.', 2);
      await era.input();
      await ruby.say_and_wait('하앗…… 간지러워요…… 당신 지금 뭘 하시는 건가요?');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 조그만 발이 붙잡혀 올려진 채, ',
        you.get_colored_name(),
        '에 의해 때로는 가볍게, 때로는 묵직하게 주물러져 다리에 힘이 풀릴 지경이 되었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 마음대로 가지고 놀도록 내버려 두었으나, 몸을 씻는 손길은 갈수록 눈에 띄게 느려졌다.',
      ]);
      era.printButton(
        `「내가 깨끗하게 씻겨줄게, 루비 스스로 발을 씻기는 조금 불편하잖아?」`,
        1,
      );
      await era.input();
      await era.printAndWait([
        '당연하게도, ',
        you.get_colored_name(),
        ' 밑에서 단련된 결과로 ',
        ruby.get_colored_name(),
        '의 뛰어난 유연성을 이용하면 제 손으로 발을 깨끗이 씻는 것 따위는 일도 아니었지만, 확실히 다소 번거로운 일이기는 했다.',
      ]);
      await era.printAndWait([
        '무엇보다도, ',
        you.get_colored_name(),
        '에게 이렇게 쪼물딱거려지다 보니.',
      ]);
      await ruby.say_and_wait(
        '으응…… 앗! 힘이 너무 과해요…… 하지만, 기분 좋네요……',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 두 눈을 지그시 감은 채, ',
        you.get_colored_name(),
        '의 주무름 속에서 한 발짝씩 터져 나오는 고혹적인 신음을 흘렸다.',
      ]);
      await era.printAndWait(
        '화려한 일족의 소녀는 눈동자가 풀린 채 욕조 가장자리에 기대어 있었고, 그녀의 흑갈색 긴 머리칼은 물속에 흩어져 마치 버드나무 가지처럼 하늘거렸다.',
      );
      await era.printAndWait(
        '인간 남성을 가볍게 때려눕힐 수도 있는 그 새하얀 손은, 지금 이 순간만큼은 두 다리 사이에 교차된 채 아슬아슬하게 방어벽을 치며 허벅지를 비벼대고 있을 뿐이었다.',
      );
      await era.printAndWait([
        '예술품보다 더 완벽한 한 쌍의 발은 소녀의 가녀린 신음 소리와 함께 ',
        you.get_colored_name(),
        '의 손안에서 구석구석 남김없이 농락당했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 거의 물 밑바닥으로 미끄러져 누울 지경이었다.',
      ]);
      era.printButton('그녀의 허리를 감싸 품 안으로 끌어당긴다.', 1);
      await era.input();
      await era.printAndWait([
        '소녀의 부드럽고 뽀얀 살결과 한 쌍의 풍만한 가슴이 ',
        you.get_colored_name(),
        '의 가슴팍에 정면으로 밀착했다.',
      ]);
      await ruby.say_and_wait('당신…… 대체 뭘 하려는 건가요?');
      era.printButton(`「당연히 루비의 목욕을 도와주려는 거지.」`, 1);
      era.printButton(`「등 밀어줄게.」`, 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '가 상황을 완전히 이해하기도 전에, ',
        you.get_colored_name(),
        '은(는) 그녀의 몸을 통째로 붙잡아 방향을 횅하니 돌려버렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 자신의 단단한 허벅지로 ',
        ruby.get_colored_name(),
        '를 정중앙에 끼워 맞추듯 고정했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 부드러운 곡선을 그리는 등줄기가 ',
        you.get_colored_name(),
        '의 가슴에 완전히 기댔고, 그녀는 등 뒤에서 전해지는, 목욕물보다 훨씬 더 자신을 조바심치게 만드는 뜨거운 양물을 고스란히 체감해야만 했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손을 뻗어 ',
        ruby.get_colored_name(),
        '의 젖가슴을 온갖 기묘한 모양으로 주물렀고, 고혹적인 핑크빛 홍조가 하얀 피부 위로 번져나갔다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 가슴은 커다란 손에 짓눌려 뭉개졌고, 엉덩이는 굳센 육봉에 지속적으로 마찰당했으며, 심지어 두 다리마저 ',
        you.get_colored_name(),
        '의 다리털에 사정없이 쓸려나갔다.',
      ]);
      await era.printAndWait(
        '온몸을 휘감는 쾌감이 짜릿한 전류의 형태로 척수를 타고 올라가 뇌리를 사정없이 관통했다.',
      );
      await era.printAndWait('음란한 액체가 비처의 입구로부터 끊임없이 흘러내렸다.');
      await ruby.say_and_wait('안…… 안 돼요……!');
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 흔들리는 눈빛은 ',
        you.get_colored_name(),
        '에게 말할 수 없는 희열을 안겨주었으나, 그녀는 여전히 끝끝내 허락하지 않았다.',
      ]);
      await ruby.say_and_wait('다리 사이라면……');
      era.printButton('몸을 뒤로 파묻으며, 두 손으로 욕조 가장자리를 지탱한다.', 1);
      era.printButton('고개를 바짝 들이밀어, 뜨거운 숨결과 함께 담당 우마무스메의 귀와 뺨을 어루만진다.', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await you.say_and_wait('원한다면, 네가 직접 움직여봐.');
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 자그만 엉덩이를 조금 위로 달싹이더니, 그대로 주저앉으며 조그만 살 틈새를 거대한 육봉에 빈틈없이 밀착시켰다.',
        ]);
        await era.printAndWait([
          '고운 다리가 그대로 단단히 조여들었고, 이에 ',
          you.get_colored_name(),
          '은(는) 즉각적으로 ',
          ruby.get_colored_name(),
          '의 허벅지 틈새가 자아내는 강렬한 흡인력을 맛보았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 쾌감에 겨워 비명을 지르기도 전에, ',
          ruby.get_colored_name(),
          '는 고운 손가락을 뻗어 물속에 잠긴 귀두 끝을 지그시 눌렀다.',
        ]);
        await era.printAndWait([
          '손끝이 몇 번이고 미끄러지듯 스쳐 지나갔고, 그 닿을 듯 말 듯한 감각에 ',
          you.get_colored_name(),
          '은(는) 정신이 아득해졌다.',
        ]);
        await era.printAndWait([
          '이토록 농밀하고 생생한 자극에 ',
          you.get_colored_name(),
          '은(는) 더 이상 참지 못하고 다시금 ',
          ruby.get_colored_name(),
          '의 허리를 억세게 움켜잡았다.',
        ]);
        await era.printAndWait([
          '붙잡힌 채 희롱당하는 ',
          ruby.get_colored_name(),
          '는 자신도 모르게 두 다리를 더 꽉 집어삼키며 비비고, 몸을 비틀었다.',
        ]);
        await era.printAndWait([
          '마침내, 자신을 압박하는 ',
          you.get_colored_name(),
          '의 육봉이 한계까지 팽창하는 것을 느끼자, ',
          ruby.get_colored_name(),
          '는 두 다리에 온 힘을 주어 강하게 조였다.',
        ]);
        await era.printAndWait([
          '마치 화산이 폭발하듯, 엄청난 양의 백탁액이 뿜어져 나와 ',
          ruby.get_colored_name(),
          '의 고운 다리와 꽃봉오리를 하얗게 더럽혔다.',
        ]);
        await era.printAndWait(
          '뜨거운 열기가 확산됨에 따라, 맑았던 온수 속에도 하얀빛이 번져나갔다.',
        );
        await era.printAndWait([
          '화려한 일족의 고귀한 보물이, 또 한 번 ',
          you.get_colored_name(),
          '에 의해 여지없이 더럽혀지고 말았다.',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 마음을 알아채고는, 고개를 돌려 ',
          you.get_colored_name(),
          '의 입술을 마중 나왔다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 두툼한 혀가 당당하게 ',
          ruby.get_colored_name(),
          '의 조그만 입안으로 침입하여, 앵두 같은 작은 혀와 얽히며 외설스럽고 음미로운 마찰음을 내뿜었다.',
        ]);
        await era.printAndWait(
          '한쪽은 얼굴이 온통 붉게 상기되었고, 다른 한쪽은 황홀경에 취해 있었다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 손에 힘을 주어, 자그맣고 예쁜 가슴 위에 얹힌 앵두를 살짝 비틀어 쥐었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 다른 남성들이라면 감히 상상조차 할 수 없을 고귀한 미소녀를 제멋대로 유린했다.',
        ]);
        await era.printAndWait([
          '머리카락, 가녀린 어깨, 고운 가슴, 탄력 있는 엉덩이, 매끄러운 다리, 심지어 ',
          ruby.get_colored_name(),
          '가 자신의 추잡한 행위에 순순히 보조를 맞추도록 만들었다.',
        ]);
        await era.printAndWait('입술이 떨어지자마자, 육봉이 짙고 걸쭉한 백탁을 격렬하게 분출했다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 매끄러운 턱을 치켜세우며, 눈앞에 펼쳐진 수줍음으로 완전히 붉어진 조그만 얼굴을 감상했다.',
        ]);
        await era.printAndWait([
          '넋이 나간 듯 멍해져 있던 ',
          ruby.get_colored_name(),
          '는 슬며시 ',
          you.get_colored_name(),
          '의 품을 삐져나왔다.',
        ]);
        await era.printAndWait([
          '그 후, ',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sex_mark
  sex_mark: (() => {
    const title = '';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     * @param {CharaTalk} callname 다이이치 루비가 플레이어를 부르는 호칭
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([
        '배는 이미 가득 찼는데, 아직도 ',
        callname,
        '이 내 자궁 속에 정액을 가득 채워주기를 바라고 있어……',
      ]);
      await ruby.say_and_wait([
        ruby.get_colored_name(),
        ', 너는 정말…… 부끄러운 줄도 모르는구나.',
      ]);
      era.println();
      await ruby.say_and_wait('——이건, 무슨 기분이지?');
      await ruby.print_and_wait([
        '심장이 쿵쾅쿵쾅 격렬하게 뛰기 시작했다. ',
        ruby.get_colored_name(),
        '는 자신의 얼굴이 얼마나 새빨갛게 물들었는지조차 인지하지 못했다.',
      ]);
      await ruby.print_and_wait(
        '충격과 혼란으로 가득 찬 눈동자로 자신의 아랫배를 뚫어지게 바라보며, 양손을 겹쳐 벌어진 입술을 살포시 가렸다.',
      );
      await ruby.print_and_wait('몸이 이상할 정도로 뜨거워졌고, 의식이 간헐적으로 흐려졌다.');
      await ruby.print_and_wait([
        '마치 체내에서 불꽃이 타오르는 듯한 감각이 밀려와, 하마터면 ',
        ruby.get_colored_name(),
        '는 정신을 잃을 뻔했다.',
      ]);
      await ruby.print_and_wait(
        '단련된 사지에서 힘이 쭉 빠져나갔고, 절정에 달한 것처럼 가볍게 바르르 떨렸다.',
      );
      await ruby.print_and_wait(
        '제3자가 보기에는 잘게 떨리는 귀와 꼿꼿이 선 꼬리가 영락없는 절정의 그것과 다를 바 없었다.',
      );
      await ruby.say_and_wait('우우우…… 싫어……');
      await ruby.print_and_wait([
        '몸속을 지지는 듯한 이 치명적인 뜨거움은 ',
        callname,
        '의 품에 안겨 격렬하게 혀를 섞을 때의 감각과 완전히 똑같았다.',
      ]);
      await ruby.print_and_wait([
        ruby.get_colored_name(),
        '가 거울을 바라보자, 눈가에는 눈물이 고여 있었고 입술을 지그시 깨문 채 고뇌하는 표정은 말할 수 없이 음란했다.',
      ]);
      await ruby.print_and_wait([
        '그녀는 거의 반사적으로 ',
        callname,
        '와 보냈던 낮과 밤들을 떠올렸다.',
      ]);
      await ruby.print_and_wait([
        '심지어 지금 당장 ',
        callname,
        '에게 안겨 입맞춤을 받는다면 자신의 표정이 어떻게 변할지 상상하기 시작했다.',
      ]);
      await ruby.say_and_wait('이런 갈망은, 대체 왜……?');
      await ruby.print_and_wait([
        ruby.get_colored_name(),
        '는 자신의 귀가 쫑긋거리는 것을 느끼고 손을 뻗어 매만졌다.',
      ]);
      await ruby.print_and_wait([
        '이상하게도, 원래 느껴져야 할 ',
        callname,
        '에게 애무받을 때의 쾌감은 전혀 없었다. 이 초조한 감각은 ',
        ruby.get_colored_name(),
        '를 무척이나 답답하게 만들었다.',
      ]);
      await ruby.print_and_wait([
        '분출구를 찾지 못한 압박감이 ',
        ruby.get_colored_name(),
        '의 자그마한 체내에 짓눌리듯 쌓여갔고, 앳된 입술 사이로 뜨거운 숨결이 연달아 새어 나왔다.',
      ]);
      await ruby.say_and_wait(['하아, 하아…… ', callname, '…… 어째서……']);
      await ruby.say_and_wait([
        callname,
        ', 도와주세요, 저, 저 온통 당신 생각밖에 나질 않아서……',
      ]);
      await ruby.say_and_wait('그 느낌이, 점점 더 강해져서…… 어째서…… 어째서인가요?');
      await ruby.print_and_wait([
        ruby.get_colored_name(),
        '가 숨을 짧게 몰아쉬자, 눈빛이 조금은 또렷해졌다.',
      ]);
      await ruby.print_and_wait([
        '하지만 몸 안에 남아있는 열기와 ',
        callname,
        '과(와)의 기억이 자꾸만 그녀를 불순한 망상 속으로 빠뜨렸다.',
      ]);
      era.drawLine();
      await era.printAndWait('（똑 똑 똑）');
      await ruby.say_and_wait([callname, ', 저…… 저에요……']);
      await era.printAndWait('——목소리가 가냘프게 떨리며 가쁜 숨이 섞여 있다.');
      await era.printAndWait([
        '담당 우마무스메의 목소리가 심상치 않음을 감지한 ',
        you.get_colored_name(),
        '은(는) 주저 없이 방문을 열었다.',
      ]);
      await era.printAndWait([
        '눈앞에 선 미인의 모습을 미처 제대로 확인하기도 전에, ',
        ruby.get_colored_name(),
        '의 몸이 그대로 ',
        you.get_colored_name(),
        '의 품 안으로 무너지듯 안겨 왔다.',
      ]);
      await you.say_and_wait('몸이 왜 이렇게 뜨겁지?', true);
      await era.printAndWait([
        you.get_colored_name(),
        '의 양손이 루비의 등을 감싸 안았다. 그녀는 다리에 힘이 풀려 반쯤 꿇어앉은 채 온몸의 무게를 ',
        you.get_colored_name(),
        '의 품에 맡기고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 시선이 고급 원피스의 살짝 비치는 시스루 부위를 뚫고 들어가, ',
        ruby.get_colored_name(),
        '의 속옷 위로 떨어졌다.',
      ]);
      await era.printAndWait([
        '손바닥으로 고스란히 전해지는 엄청난 열기에 ',
        you.get_colored_name(),
        '은(는) 순간 당혹감을 감출 수 없었다.',
      ]);
      await ruby.say_and_wait(['하아~ 하아~ ', callname, '…… 하아……']);
      await era.printAndWait([
        you.get_colored_name(),
        '의 가슴에 묻혀있던 ',
        ruby.get_colored_name(),
        '의 고개가 서서히 들려졌다. 얼굴은 발그레하게 상기되어 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 서둘러 문을 닫고, ',
        ruby.get_colored_name(),
        '를 소파 위로 올려 눕혔다.',
      ]);
      await ruby.say_and_wait([callname, ', 저, 몸이 너무 뜨거워요……']);
      await ruby.say_and_wait([
        '당신이 보고 싶었어요, ',
        callname,
        '…… 저, 저도 왜 이러는지 모르겠어요……',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 목소리는 평소의 의연함을 잃고, 한없이 약하고 부드럽게 늘어졌다.',
      ]);
      await era.printAndWait([
        '물기 어린 눈망울이 ',
        you.get_colored_name(),
        '을(를) 애처롭게 바라보았고, 꼬리는 슬그머니 ',
        you.get_colored_name(),
        '의 허벅지를 감싸 안았다.',
      ]);
      await era.printAndWait(
        '그녀는 허벅지를 꽉 조인 채 좌우로 비벼대며 소파 위에서 몸을 살랑살랑 뒤틀었다.',
      );
      await era.printAndWait(
        '이러지도 저러지도 못하는 수줍은 몸짓은, 만약 유흥가의 여인이었다면 유혹하는 수작이라 여겼을 만큼 요염했다.',
      );
      await era.printAndWait([
        '하지만 그녀는 다른 누구도 아닌 명문가의 ',
        ruby.get_colored_name(),
        '다. 완전히 발정 난 암컷이 따로 없는 모습에 ',
        you.get_colored_name(),
        '은(는) 순간 멍해질 수밖에 없었다.',
      ]);
      await ruby.say_and_wait([callname, '…… 머리가, 머릿속이 어질어질해요.']);
      era.printButton(`심호흡을 해봐, 루비.`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 스마트폰 화면에는 이미 늙은 집사의 번호가 띄워져 있었지만, 끝내 ',
        you.get_colored_name(),
        '은(는) 그것을 탁자 위에 엎어놓았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ruby.get_colored_name(),
        '의 곁에 쪼그리고 앉아, 살며시 ',
        ruby.get_colored_name(),
        '의 곁에 쪼그리고 앉아, 그녀의 흑갈색 머리카락 사이에 코를 묻고 숨을 들이쉬었다.',
      ]);
      await era.printAndWait('——암컷의 달콤한 페로몬.');
      await era.printAndWait([
        '우마무스메가 발정했을 때 뿜어져 나오는, 특유의 농후하면서도 맑은 향기가 ',
        you.get_colored_name(),
        '을(를) 순간 깊은 도취감에 빠뜨렸다.',
      ]);
      await era.printAndWait(
        '마치 맑은 물처럼 순수하면서도 오래 맡으면 묵직한 먹물처럼 깊어지는 이 향은, 수많은 풍파를 겪은 난봉꾼들조차 포로로 만든다고 알려져 있었다.',
      );
      await era.printAndWait([
        '확인을 위해, ',
        you.get_colored_name(),
        '은(는) 우선 손을 ',
        ruby.get_colored_name(),
        '의 이마에 얹어 체온을 측정했다.',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 풀려있던 눈동자가 순간 번쩍 뜨이더니, 가볍고 색기 어린 숨소리가 흘러나왔다.',
      ]);
      await ruby.say_and_wait('하아~ 읏~ 하아~');
      await era.printAndWait('——역시, 음문 때문인가.');
      await ruby.say_and_wait([
        callname,
        ', 제게 무슨 일이 일어난 건가요? 너무 더워요……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 손길이 부드러운 궤적을 그리며 ',
        ruby.get_colored_name(),
        '의 이마에 흘러내린 머리카락을 정돈해 주었다. 손가락은 부드럽게 ',
        ruby.get_colored_name(),
        '의 이마에 흘러내린 머리카락을 정돈해 주었다. 손가락은 이내 그녀의 귀여운 귀를 살포시 매만졌다.',
      ]);
      await era.printAndWait([
        '기분 좋은 감각과 ',
        you.get_colored_name(),
        '에게 닿아있다는 사실 덕분인지, ',
        ruby.get_colored_name(),
        '는 그제야 긴장이 조금 풀린 듯했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게 있어 ',
        ruby.get_colored_name(),
        '는 차마 더럽히기 아까울 정도로 맑고 깨끗한 물과 같았고, 음문은 그 투명한 물에 떨어뜨린 단 한 방울의 짙은 먹물과도 같았다.',
      ]);
      await era.printAndWait(
        '겉보기엔 미미한 욕망일지라도, 순식간에 잔 전체를 탁하게 만들고 끓어오르게 만들기엔 충분했다.',
      );
      await ruby.say_and_wait([
        '하아~ 하아~ 너무 기분 좋아요, ',
        callname,
        '의 손……',
      ]);
      await era.printAndWait(['쓴웃음을 지으며, ', you.get_colored_name(), '……']);
      era.printButton('그녀의 초점 흐린 두 눈을 부드럽게 감겨주었다.', 1);
      era.printButton(`「괜찮아, 무서워할 것 없단다, 루비.」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '이 순수하면서도 요염함이 가득한 시선을 차단하고 나서야, 비로소 ',
          you.get_colored_name(),
          '의 이성이 간신히 중심을 잡을 수 있었다.',
        ]);
        await era.printAndWait([
          '비록 그 보드라운 작은 입술이 여전히 가쁜 숨을 몰아쉬며 ',
          you.get_colored_name(),
          '을(를) 유혹하고 있었지만, ',
          you.get_colored_name(),
          '은(는) 용케 참아낼 수 있었다——적어도 지금은.',
        ]);
        await era.printAndWait([
          '다음 날 아침, ',
          you.get_colored_name(),
          '은(는) 집사에게 연락해 ',
          ruby.get_colored_name(),
          '를 가문 저택으로 돌려보냈다.',
        ]);
      } else {
        await ruby.say_and_wait([
          callname,
          '의 표정, 무척 괴로워 보여요…… 제가 당신에게 짐이 된 건가요……',
        ]);
        await era.printAndWait([
          '치맛자락을 꽉 쥐고 있던 작은 손이 슬그머니 올라와 ',
          you.get_colored_name(),
          '의 얼굴에 닿았고, 굳어 있는 ',
          you.get_colored_name(),
          '의 뺨을 부드럽게 감싸 쥐었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 표정이 점점 더 무거워졌다……',
        ]);
        era.printButton('「참아야 해.」', 1);
        era.printButton('「반드시 억눌러야 한다.」', 2);
        era.printButton('「몸은 정직하네.」', 3);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 부드러운 손길이 ',
          you.get_colored_name(),
          '의 뺨을 어루만지는 사이, ',
          you.get_colored_name(),
          '의 하반신 텐트는 이미 바지를 팽팽하게 밀어 올리고 있었다.',
        ]);
        await era.printAndWait([
          '그녀는 온통 ',
          you.get_colored_name(),
          '의 표정과 기색을 살피느라, 정작 그 변화에 대해서는 눈치채지 못한 듯했다.',
        ]);
        await era.printAndWait([
          '이를 악문 ',
          you.get_colored_name(),
          '이(가) 마침내 음문에 대한 사실을 ',
          ruby.get_colored_name(),
          '에게 솔직하게 털어놓으려던 찰나, 그녀의 호흡이 턱 하고 멎었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '과(와) ',
          ruby.get_colored_name(),
          '는 동시에 커진 눈으로 서로를 바라보았다.',
        ]);
        await ruby.say_and_wait(['아~! 흣~ 아! ', callname, '……！']);
        await ruby.say_and_wait([
          '이상해요, ',
          callname,
          ', 으아아앗! ——',
        ]);
        await era.printAndWait([
          '아랫배에 전해지는 격렬한 자극 때문에, ',
          ruby.get_colored_name(),
          '는 허리를 바짝 튕기며 거의 상체를 일으켜 세웠고, 양손은 본능적으로 바닥을 짚어 몸을 지탱했다.',
        ]);
        await era.printAndWait(
          '눈동자가 사정없이 흔들렸고, 조그맣고 귀여운 입술이 활짝 벌어지며 그 안의 분홍빛 혀가 밖으로 길게 새어 나왔다.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '의 이성이 격렬하게 경고음을 울려댔고, 아무리 꼴사나운 모양새가 될지언정 의사를 부르기로 결심했다.',
        ]);
        await era.printAndWait([
          '손이 막 스마트폰을 움켜쥐려던 순간, ',
          ruby.get_colored_name(),
          '의 버티던 몸이 돌연 균형을 잃고 소파 아래로 미끄러져 내렸다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 반사적으로 몸을 날려 그녀를 받아냈으나, 그 충격으로 스마트폰이 바닥에 나뒹굴며 처참하게 박살 나 버렸다.',
        ]);
        await era.printAndWait([
          '온몸의 맥이 풀려버린 ',
          ruby.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 가슴팍 위에 엎어졌고, 그녀의 아랫배 한가운데는 하필 ',
          you.get_colored_name(),
          '이(가) 바짝 세워 올린 우뚝 솟은 장막에 정확히 받쳐지게 되었다.',
        ]);
        await era.printAndWait([
          '키 차이 때문에 그녀의 얼굴은 겨우 ',
          you.get_colored_name(),
          '의 가슴 근처에 묻혀 있는 형태가 되었다.',
        ]);
        await era.printAndWait([
          '흑갈색의 긴 머리카락이 등 뒤로 스르륵 흘러내렸고, 힘이 빠진 가녀린 팔은 ',
          you.get_colored_name(),
          '의 가슴을 겨우 짚고 있었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 비틀거리며 ',
          you.get_colored_name(),
          '을(를) 올려다보았다. 이 자그마한 우마무스메는 웅크리고 있으니 ',
          you.get_colored_name(),
          '의 몸뚱이 절반 크기밖에 되지 않았다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 상체를 바짝 세우며 얼굴을 붉혔다. 이슬이 맺힌 두 눈동자가 한없이 애처로워 보였다.',
        ]);
        await era.printAndWait([
          '음문의 영향 때문에, 그녀는 지금 그저 육체의 본능이 이끄는 대로 ',
          you.get_colored_name(),
          '의 몸에 매달려 있을 뿐이었다.',
        ]);
        await ruby.say_and_wait(
          '부디 저를…… 치료해 주실 수 있나요?',
        );
        await era.printAndWait([
          '작은 혀를 살짝 내민 채, ',
          ruby.get_colored_name(),
          '는 자신이 지금 얼마나 화끈하고 야한 표정을 짓고 있는지 전혀 자각하지 못하고 있었다.',
        ]);
        era.println();
        await era.printAndWait('두 입술이 틈새도 없이 거칠게 맞물렸다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ruby.get_colored_name(),
          '의 양손을 한데 모아 머리 위로 붙잡아 고정해, 그녀가 반항할 엄두도 내지 못하게 만들었다.',
        ]);
        await era.printAndWait([
          '남은 한 손으로는 자유롭게 ',
          ruby.get_colored_name(),
          '의 매끄러운 등줄기를 부드럽게 쓸어내렸고, ',
          ruby.get_colored_name(),
          '의 두 다리는 몰려오는 쾌감을 견디지 못하고 허공에서 무력하게 허우적거릴 뿐이었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 육체가 달콤한 신음과 함께 잘게 요동치며 위쪽으로 밀어 올려졌다. 마치 ',
          you.get_colored_name(),
          '과(와) 조금이라도 더 빈틈없이 밀착하고 싶어 하는 듯한 몸짓이었다.',
        ]);
        await ruby.say_and_wait(
          [callname, '의 냄새…… 이상해요, 어째서 몸이 더 뜨거워지는지……'],
          true,
        );
        await ruby.say_and_wait('너무 난폭해……', true);
        await ruby.say_and_wait(
          '하지만 어째서인지, 아랫배의 그 답답함이 가라앉는 듯한……?',
          true,
        );
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 간혹 ',
          ruby.get_colored_name(),
          '의 작은 입술을 놓아줄 때마다, 그녀는 음란하게도 신선한 공기를 허겁지겁 들이마셨다.',
        ]);
        await era.printAndWait(
          '감긴 두 눈이 서서히 뜨여질 때면, 산소 부족과 쾌감으로 인해 살짝 흰자위를 드러낸 눈부신 보랏빛 눈동자가 고스란히 노출되었다.',
        );
        await era.printAndWait([
          '몸이 위태롭게 허물어지며 떨릴 때마다, 타액이 ',
          ruby.get_colored_name(),
          '의 입꼬리를 타고 가느다랗게 흘러내렸다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 양손을 결박하고 있던 손이 이내 소녀의 등 뒤로 돌아가, 한 손으로는 등을 굳게 끌어안고 다른 한 손으로는 그녀의 풍만한 둔부를 번쩍 받쳐 올렸다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 신체가 완전히 ',
          you.get_colored_name(),
          '과(와) 하나로 밀착되었고, 이번에는 ',
          ruby.get_colored_name(),
          '쪽에서 먼저 ',
          you.get_colored_name(),
          '의 입술을 격렬하게 탐닉해 왔다.',
        ]);
        era.println();
        await era.printAndWait([
          ruby.get_colored_name(),
          '의 수없이 이어지던 가냘픈 신음 소리는, 격렬하게 살덩이가 부딪히는 파음과 함께 어느 순간 뚝 끊겼다.',
        ]);
        await era.printAndWait([
          '물론, ',
          ruby.get_colored_name(),
          '의 자궁은 여전히 ',
          you.get_colored_name(),
          '이(가) 뿜어내는 뜨거운 정액으로 가득 채워지는 중이었다.',
        ]);
        await era.printAndWait([
          '마침내 육봉을 뽑아낸 ',
          you.get_colored_name(),
          '은(는) 침대 머리에 기댄 채, 한 손으로 머리를 지탱했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 제 아래에 누워있는 담당 우마무스메를 내려다보는 눈빛에는 이전에는 없었던 오만한 지배욕이 가득 차 있었다.',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          '는 제 눈앞에 당당히 솟아있는 육봉에 완전히 매료되어 있었고, 그 기특한 광경을 만족스럽게 바라보던 ',
          you.get_colored_name(),
          '은(는) 손을 뻗어 ',
          ruby.get_colored_name(),
          '의 머리를 부드럽게 쓰다듬어 주었다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] shame
  shame: (() => {
    const title = '수줍은 소녀';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 떨리는 손으로 옷의 단추를 풀기 시작했다.',
      ]);
      await era.printAndWait(
        '그녀가 벗어던진 것은 옷뿐만이 아니라, 마지막 남은 존엄성이었다.',
      );
      await era.printAndWait(
        '그 화려한 드레스가 그녀의 작은 손짓에 풀려 바닥으로 흘러내렸다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 하반신 곡선이 고스란히 드러났다. 매끄럽고 가느다란 예쁜 다리는 벗을 듯 말 듯한 모습으로 더욱 상상을 자극했다.',
      ]);
      era.printButton('말로 재촉한다', 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 망설이던 작은 손이 몸에 남은 마지막 무장을 해제하기 시작했다.',
      ]);
      await era.printAndWait(
        '마침내 머리에 장식된 붉은 리본과 다리에 신은 흰색 오버니삭스를 제외하고는 아무런 가림막도 남지 않게 되었다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 손은 방어 본능 때문에, 여전히 필사적으로 중요 부위를 가리고 있었다.',
      ]);
      era.printButton('손을 치우라고 명령한다', 1);
      await era.input();
      await era.printAndWait('잠시 주저하던 그녀는 어쩔 수 없다는 듯 양손을 벌렸다.');
      await era.printAndWait([
        '작은 얼굴은 수치심으로 가득 차서 새빨갛게 달아올랐고, 고개를 돌려 더 이상 ',
        you.get_colored_name(),
        '과(와) 시선을 마주치지 않으려 했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 담당 우마무스메의 눈부시도록 아름다운 나신을 감상하기 시작했다.',
      ]);
      await era.printAndWait('피부는 백옥처럼 하얗고, 고급 실크처럼 매끄러웠다.');
      await era.printAndWait(
        '가슴팍의 하얀 두 토끼는 금방이라도 튀어나올 듯 존재감을 드러내고 있었다. 크지는 않지만 결코 빈약하지 않은, 마치 반쯤 피어난 청초한 꽃잎 같았다.',
      );
      await era.printAndWait(
        '아랫배는 매끄럽고 깨끗했으며, 아직 잡초에 물들지 않은 상태였다.',
      );
      await era.printAndWait(
        '살짝 부푼 부끄러운 언덕은 완벽한 형태를 그리며, 연분홍빛의 가느다란 틈새에 의해 둘로 나뉘어 있었다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 품에 안기며 공처럼 몸을 웅크렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 눈앞의 가녀린 몸을 살짝 건드리자, 담당 우마무스메가 긴장으로 몸을 떨며 소름이 돋아나고 있는 것이 느껴졌다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 지금의 ',
        ruby.get_colored_name(),
        '가 막 붙잡혀 길들여지는 중인 들고양이 같은 상태라 너무 서두르면 겁을 먹고 도망칠 것이라는 걸 잘 알고 있었다.',
      ]);
      era.printButton('그녀를 꼭 껴안아 준다', 1);
      era.printButton('방으로 데려가 재운다', 2);
      await era.input();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] take_shower
  take_shower: (() => {
    const title = '목욕';
    /**
     * @param {CharaTalk} ruby 다이이치 루비
     * @param {CharaTalk} you 플레이어
     * @param {CharaTalk} callname 다이이치 루비가 플레이어를 부르는 호칭
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait([
        '깊은 밤 귀가하자, ',
        you.get_colored_name(),
        '은(는) 때마침 ',
        ruby.get_colored_name(),
        '가 목욕을 마치고 욕실에서 막 나오는 모습을 마주했다.',
      ]);
      await era.printAndWait('그녀의 온몸에서는 향긋한 열기가 피어오르고 있었고, 긴 머리카락은 촉촉하게 젖어 얽혀 있었다.');
      era.printButton('그녀를 끌어안고 애무한다.', 1);
      era.printButton('거실로 데려가 조교한다.', 2);
      await era.input();
      await ruby.say_and_wait([callname, ', 안 돼요……']);
      await era.printAndWait([you.get_colored_name(), '은(는) 일부러 화가 난 듯한 표정을 지었다.']);
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 분위기가 이상함을 눈치채고 즉각 말을 바꾸었다.',
      ]);
      await ruby.say_and_wait(
        '제 사랑, 이러지 마세요, 저 방금 막 씻고 나왔단 말이에요.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 들은 체도 하지 않고 그대로 입술을 찍어 눌렀다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마치 발정 난 수컷처럼, ',
        ruby.get_colored_name(),
        '의 몸에서 풍기는 살결의 향기를 거칠게 탐닉했다.',
      ]);
      era.printButton('목덜미를 가볍게 깨문다.', 1);
      era.printButton('허벅지 안쪽을 애무한다.', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 깜짝 놀라며, 본능적으로 두 다리를 단단히 맞조였다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) ',
        ruby.get_colored_name(),
        '의 잘게 떨리는 부드러운 귀를 살짝 깨물자, 효과가 있었는지 ',
        ruby.get_colored_name(),
        '의 허벅지 근육이 제법 느슨하게 풀려났다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 지체없이 단숨에 속옷으로 향했다.',
      ]);
      await era.printAndWait([
        '손가락이 ',
        ruby.get_colored_name(),
        '의 순백색 팬티 겉면을 더듬으며 유영하더니, 이내 그녀의 은밀한 언덕의 완벽한 형태를 고스란히 그려냈다.',
      ]);
      await era.printAndWait(
        '속옷의 틈새를 비집고 들어간 뒤, 그 핑크빛 연약한 부위 주위를 앞뒤로 끊임없이 문질렀다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 예쁜 얼굴이 새빨갛게 상기되었고, 어금니를 꽉 깨물었다.',
      ]);
      await you.say_and_wait('느낌이 와?');
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 참지 못하고 가녀린 외마디 비명을 질렀고, 호흡이 점차 격렬해지기 시작했다.',
      ]);
      await you.say_and_wait('어라? 설마 전에도 이런 짓을 당해본 적이 있는 거야?');
      await ruby.say_and_wait('제발 터무니없는 소리 좀 하지 말아 주세요.');
      await era.printAndWait('그녀의 어조에는 다소 화가 난 기색이 서려 있었다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 입을 맞추는 동시에 애무를 가하며, 양쪽으로 공세를 몰아쳤다.',
      ]);
      await era.printAndWait(
        '몸은 거짓말을 하지 않는 법, 이윽고 굳게 닫혀 있던 연약한 구멍으로부터 맑은 샘물이 졸졸 흘러나왔다.',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        '의 사랑스럽고 청초한 얼굴은 붉은 조밀함으로 인해 뜨거운 열기를 품었고, 갈아입은 지 얼마 안 된 잠옷도 이미 반쯤 젖어 들었다.',
      ]);
      era.printButton('그녀와 함께 두 번째 목욕을 하러 간다.', 1);
      era.printButton('손바닥을 높이 들어 올려, 묻어 나온 끈적한 체액을 보여준다.', 2);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        '는 부끄러움을 참지 못하고 ',
        you.get_colored_name(),
        '의 어깨에 기대어 눈물짓기 시작했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
