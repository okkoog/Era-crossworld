const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const crazy_fans = require('#/data/event/crazy-fans');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,{race:number,rank:number,relation_change:number,love_change:number,attr_change:number[],pt_change:number},UraraEduMarks):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[`${race_enum.elm_sta}_${95 + 29}`] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    if (extra_flag.rank === 1) {
      await print_event_name('반드시 더 강해질 거야!', urara);
      await in_urara.say_as_unknown_and_wait(
        '또 이기셨군요, 우라라의 상태도…… 저조차 당신에게 쓸데없는 확신을 갖게 될 정도네요.',
      );
    } else {
      await print_event_name('더 노력할게!', urara);
      await in_urara.say_as_unknown_and_wait(
        '또 지셨나요? 하지만 우라라의 상태는 나쁘지 않네요, 저조차 당신에게 쓸데없는 확신을 갖게 될 정도예요.',
      );
    }
    await in_urara.say_as_unknown_and_wait([
      '다만 ',
      urara.sex,
      '가 처한 상황이…… 우선은 당신을 축복해 드리죠, 원래 제가 당신을 탓해서는 안 되는 일이지만요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '당신이 여전히 원만한 대단원을 생각하고 있다면, ',
      urara.sex,
      '와 함께 끝까지 버텨보세요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '그전에, ',
      urara.sex,
      '의 미소마저 잃어버리지 않도록 말이에요.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '대기실 통로에 들어서자마자, 레이스에서 이긴 어린 ',
      urara.get_uma_sex_title(),
      '는 몸의 피로도 잊은 채 곧장 ',
      me.get_colored_name(),
      '의 곁으로 달려왔다.',
    ]);
    if (extra_flag.rank === 1) {
      await era.printAndWait([
        '모두를 모아 완수한 계획이 성공한 듯 보였다. ',
        urara.get_colored_name(),
        '의 미소를 맞이하려는 마음으로, ',
        me.get_colored_name(),
        '도 자신의 담당 우마무스메를 향해 다가갔다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '이(가) ',
        urara.get_colored_name(),
        '에게 수고했다는 인사를 건네기도 전에, 어린 ',
        urara.get_uma_sex_title(),
        '는 곧바로 ',
        me.get_colored_name(),
        '의 손을 잡고 후방 대기실 방향으로 뛰기 시작했다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 일 다 정리되면 우리 오늘 바로 돌아가자!',
      ]);

      era.printButton('「서두르지 마, 어렵게 1등을 했는데 먼저 좀 쉬어야지?」', 1);
    } else {
      await era.printAndWait([
        '모두를 모으는 계획은 성공한 것일까? ',
        urara.get_colored_name(),
        '를 위로할 준비를 하며, ',
        me.get_colored_name(),
        '도 서둘러 자신의 담당 우마무스메를 향해 다가갔다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '이(가) ',
        urara.sex,
        '에게 위로의 첫마디를 건네기도 전에, 어린 ',
        urara.get_uma_sex_title(),
        '는 곧바로 ',
        me.get_colored_name(),
        '의 손을 잡고 후방 대기실 방향으로 뛰기 시작했다.',
      ]);

      era.printButton('「왜 그래? 힘들게 레이스를 마쳤는데 먼저 좀 쉬어야지?」', 1);
    }
    await era.input();
    await era.printAndWait([
      urara.get_colored_name(),
      '의 이상함을 감지한 ',
      me.get_colored_name(),
      '은(는) 황급히 발걸음을 멈췄지만, 하마터면 ',
      urara.get_colored_name(),
      '의 힘에 끌려 비틀거릴 뻔했다.',
    ]);
    await era.printAndWait([
      '의아해하며 고개를 들자, ',
      me.get_colored_name(),
      '의 눈에 분명 ',
      urara.get_colored_name(),
      '의 미소가 보였다. 다만 그것은 평소에 상상하던 온화하고 치유되는 미소와는 거리가 멀었다.',
    ]);
    await urara.say_and_wait(
      '하지만 훈련이 더 급하잖아! 이제 연말까지 시간도 얼마 안 남았고, 우라라는 더 강해져야만 해!',
    );
    await era.printAndWait([
      '아니, 지금 ',
      urara.get_colored_name(),
      '가 짓고 있는 미소는, ',
      urara.sex,
      '의 예전 즐거움보다는…… 지독한 피로가 섞인 허무함이 더 크게 자리 잡고 있었다.',
    ]);
    if (extra_flag.rank === 1) {
      await urara.say_and_wait(
        '계속 이겨나가기만 하면, 분명 모두에게 인정받을 수 있겠지! 내가 인정받으면 다들 분명 더 기뻐할 거야!',
      );
      await urara.say_and_wait(
        '우라라 때문에 본의 아니게 상처받은 사람들도, 반드시, 반드시……',
      );
      era.printButton('「우라라, 진정해. 서두른다고 다 되는 게 아니야.」', 1);
    } else {
      await urara.say_and_wait(
        '다들 우라라가 이기길 바랐는데, 내가 그 마음에 보답하지 못했어. 그러니까 지금은 더 노력해야 해!',
      );
      await urara.say_and_wait([
        '게다가 스스로를 증명하지 못하면…… ',
        urara.sex,
        '도…… ',
        urara.sex,
        '도 우라라를 용서하지 않겠지……',
      ]);
      era.printButton('「우라라, 진정해.」', 1);
    }
    await era.input();
    await urara.say_and_wait(
      '응? 우라라는 아주 멀쩡해! 아무렇지도 않다니까! 자, 이제 돌아가서 훈련 일정 짜자, 응?',
    );
    await era.printAndWait([
      '「그렇다면 다음 레이스에서도 1등을 해야 해」라는 말은, 거의 메말라 버린 ',
      urara.get_colored_name(),
      '의 벚꽃빛 눈동자를 바라보며 도저히 꺼낼 수 없었다.',
    ]);
    await era.printAndWait([
      '모두와 함께 ',
      urara.get_colored_name(),
      '를 격려하려던 계획은 분명 성공했지만, 겉으로 드러나는 증상만 완화되었을 뿐 마음의 병은 너무나 깊게 뿌리내려 있었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 이제 예전과 다르다. 지금의 ',
      urara.sex,
      '는 오로지 목표를 위해 승리하려는 마음가짐을 갖추었으나, 그것은 동시에 자신을 벼랑 끝으로 내모는 일이었다.',
    ]);
    await era.printAndWait([
      '만약 지금 ',
      urara.get_colored_name(),
      '를 멈춰 세우지 못한다면, ',
      urara.sex,
      '는 돌아간 뒤에 앞뒤 가리지 않고 무모하게 달릴 것이 분명했다.',
    ]);
    await era.printAndWait([
      '하지만 지금 당장 ',
      urara.sex,
      '의 마음을 진정시키기 위해서는, 우선 이 가여운 ',
      urara.get_uma_sex_title(),
      '가 다음에 어떻게 달리고 싶은지에 대해 ',
      urara.sex,
      '의 이야기를 들어줄 수밖에 없었다.',
    ]);
    if (era.get('relation:52:0') > 150) {
      if (extra_flag.rank === 1) {
        await urara.say_and_wait([
          '괜찮아, ',
          callname,
          '는 걱정하지 마! 내가 ',
          callname,
          '에게 승리를 보여줄게!',
        ]);
        await urara.say_and_wait(
          '지금의 우라라라면 G1도 쉽게 이길 수 있을지도 몰라! 그러니까 다음에도 우라라가 G1에 도전하게 해줘!',
        );
      } else {
        await urara.say_and_wait([
          '괜찮아, ',
          callname,
          '는 걱정하지 마. 다음엔 우라라가 꼭 이길게.',
        ]);
        await urara.say_and_wait(
          '그리고 지금은 더 많은 사람이 우라라를 인정해 줘야 하잖아? 그러니까 다음에도 우라라가 G1에 도전하게 해줘!',
        );
      }
      await era.printAndWait([
        me.get_colored_name(),
        '의 품에 뛰어든 뒤에도 ',
        urara.get_colored_name(),
        '의 절박한 갈망은 여전했으나, 적어도 미소만은 조금씩 평소의 모습을 되찾아갔다.',
      ]);
    } else {
      if (extra_flag.rank === 1) {
        await urara.say_and_wait(
          '괜찮아, 난 다음에도 계속 모두를 위해 1등을 향해 달릴 거야!',
        );
        await urara.say_and_wait(
          '그러니까 다음에도 우라라를 G1에 보내줘! 지금의 나라면 반드시 이길 수 있어!',
        );
      } else {
        await urara.say_and_wait(
          '괜찮아, 다음에도 기회는 있잖아? 그리고 져버렸으니까 더 쉴 수 없겠지?',
        );
        await urara.say_and_wait(
          '그러니까 다음엔 우라라를 G1에 보내줘! 지금은 모두에게 인정받지 못하면 안 된단 말이야.',
        );
      }
      await era.printAndWait([
        me.get_colored_name(),
        '의 허리를 조심스럽게 감싸 안으며, ',
        urara.get_colored_name(),
        '는 여전히 긴장된 말투였지만 표정은 어느 정도 부드러워졌다.',
      ]);
    }
    await era.printAndWait([
      '자신의 강렬한 출주 의사를 직접 입 밖으로 내뱉는 것을 보니, ',
      urara.get_colored_name(),
      '의 성장은 상상을 훨씬 초월해 있었다.',
    ]);
    await era.printAndWait([
      '물론 ',
      urara.sex,
      '가 자신을 갉아먹다시피 하는 전제 아래에서 나온 말이 아니었다면, ',
      me.get_colored_name(),
      '도 좀 더 기뻐할 수 있었을 것이다.',
    ]);
    await era.printAndWait([
      '다만 ',
      urara.sex,
      '의 지금 「광기 어린」 모습을 생각하니, 설령 ',
      urara.sex,
      '가 하는 말이 진심이라 해도 ',
      me.get_colored_name(),
      '은(는) 그저 마음이 무거워질 뿐이었다.',
    ]);

    era.printButton(
      '「『JBC 스프린트』로 가자. 일단 이걸 추천할게. 다음 레이스까지 시간도 꽤 남았으니까 서둘러도 소용없어, 알겠지?」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '에? 응……',
      callname,
      '가 그렇게 말한다면, 우라라는 일단 좀 참아볼게……',
    ]);
    await era.printAndWait([
      '더트, 단거리. 지금의 ',
      urara.get_colored_name(),
      '에게는 확실히 우승할 가능성이 매우 높은 레이스이자, 동시에 ',
      me.get_colored_name(),
      '이(가) 내놓은 고육지책이었다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '는 만족했을까? 적어도 지금 이 가여운 ',
      urara.get_uma_sex_title(),
      '는 드디어 안정을 찾았고, 다시 억지로 돌아가겠다고 떼를 쓰지도 않았다.',
    ]);
    await era.printAndWait([
      '다만 이번만큼은 ',
      me.get_colored_name(),
      '조차 걱정이 되었다. 과연 ',
      urara.get_colored_name(),
      '와 함께 이 3년의 마지막 몇 달을 무사히 보낼 수 있을지.',
    ]);
    await era.printAndWait(
      '성패는 여기에 달려 있다. 버텨내기로 선택했다면 반드시 돌파구는 있을 터이니, 전력을 다해 부딪쳐보자.',
    );
    if (extra_flag.rank === 1) {
      extra_flag.attr_change = new Array(5).fill(3);
      extra_flag.pt_change = 45;
    } else {
      extra_flag.attr_change = new Array(5)
        .fill(1)
        .map((e) => e + (Math.random() < 0.5));
      extra_flag.pt_change = 30;
    }
  };

  handlers[`${race_enum.jbc_spr}_${95 + 41}`] = async (
    urara,
    me,
    in_urara,
    callname,
    extra_flag,
  ) => {
    await print_event_name('전진, 전진……', urara);
    extra_flag.attr_change = new Array(5).fill(3);
    extra_flag.pt_change = 45;
    extra_flag.skill_change = [201002];
    if (extra_flag.rank === 1) {
      await urara.print_and_wait(
        '방금 옆을 지나간 게 결승선 판이 맞겠지…… 우라라, 이긴 걸까?',
      );
      await urara.print_and_wait(
        '다행이다, 오늘의 우라라도 누구에게도 지지 않았어. 우라라, 모두에게 인정받은 걸까? 다들 정말 기뻐하겠지?',
      );
      await urara.print_and_wait(
        '오늘 컨디션은 역시 좋네. 몸이 좀 둔하긴 하지만 더 이상 아프지 않아. 온몸이 괴롭던 느낌도 다 사라졌어……',
      );
    } else {
      await urara.print_and_wait(
        '레이스가 벌써 끝난 거야? 그렇다는 건…… 우라라가 또 진 걸까?',
      );
      await urara.print_and_wait(
        '이러면 안 되는데. 돌아가면 꼭 제대로 훈련해야지. 다음엔 분명 또 기회가 있을 거야……',
      );
      await urara.print_and_wait(
        '게다가 몸 상태도 회복됐어. 몸이 이제 아프지 않아. 온몸이 괴롭던 느낌도 다 사라졌어……',
      );
    }
    await urara.print_and_wait(
      '근데 다들 왜 그렇게 이상한 눈으로 보는 걸까? 지금 우라라 표정이 너무 엉망이라서 그런가?',
    );
    await urara.print_and_wait(
      '괜찮아, 우라라는 그냥 조금 어지러울 뿐이야. 금방 웃어 보일 테니까 다들 걱정하지 마……',
    );
    await urara.print_and_wait([
      '……',
      callname,
      '! 오늘도 우라라는 1등 했어! 정말 무서웠고 정말 싫었지만, 우라라는 이겨냈다구!',
    ]);
    await urara.print_and_wait(
      '그러니까 그렇게 무서운 표정 짓지 마. 그렇게 경기장 울타리를 넘으면 위험하단 말이야. 다들 웃어줘……',
    );

    era.printButton('「우라라! 괜찮아? 내 목소리 들려?! ──?!」', 1);
    await era.input();

    await urara.print_and_wait([
      callname,
      ', 걱정이 너무 심해. 우라라는 그냥 좀 지친 것뿐이니까 그렇게 서둘러 달려오지 않아도……',
    ]);
    await urara.print_and_wait([
      '그런데, 왠지 ',
      callname,
      '의 목소리가 점점 작아지는 것 같아. 왜 우라라는 점점 ',
      callname,
      '가 무슨 말을 하는지 들리지 않는 걸까?',
    ]);
    await urara.print_and_wait(
      '이상해, 왜 손이 안 올라가지? 왜 다리가 안 움직여? 왜 내 몸이 느껴지지 않는 거야?',
    );
    await urara.print_and_wait(
      '이상해, 왜 시야가 점점 좁아지지? 왜 하늘이 점점 어두워지는 거야?',
    );
    await urara.print_and_wait('이상해, 왜 말이 안 나오지?');
    await urara.print_and_wait('……');
    await urara.print_and_wait(
      '……너무 아파, 너무 캄캄해…… 우라라가 넘어진 걸까? 대체 무슨 일이……',
    );
    await urara.print_and_wait('……무서워…… 우라라는 이제 모두에게 버려지는 거야? 싫어……');
    await urara.print_and_wait('……우라라는 분명 더 달릴 수 있는데……');
    await urara.print_and_wait(['……', callname, '……']);
    if (extra_flag.rank === 1) {
      era.drawLine();
      await in_urara.print_and_wait('무대 중앙의 주인공에게:');
      await in_urara.print_and_wait(
        '무대 소품으로 만든 날개는 역시 너무나 나약했네. 하지만 추락하더라도 상관없지 않아?',
      );
      await in_urara.print_and_wait(
        '무섭다면 네 마음속으로 숨어버려. 지쳤다면 시든 꽃을 그대로 내버려 둬.',
      );
      await in_urara.print_and_wait(
        '불안하다면 믿음직한 사람에게 기대. 더 이상 버티기 힘들다면 도망친다 해도 누구도 너를 탓하지 않을 거야.',
      );
      await in_urara.print_and_wait(
        '괜찮아. 내가 언제나 우라라를 지켜줄게. 언제라도. 이건 아주 오래전부터 한 약속이잖아?',
      );

      await in_urara.print_and_wait('무대 뒤에 서 있는 트레이너에게:');
      await in_urara.print_and_wait([
        '참 유감이네요, 정말 한 끗 차이였는데 말이죠. 결국 날개는 녹아버렸고, ',
        urara.sex,
        '는 끝내 평범한 타인의 모습이 되어버렸습니다.',
      ]);
      await in_urara.print_and_wait([
        '하지만 이건 당신의 잘못이 아니에요. 그저 당신과 ',
        urara.sex,
        ' 모두 도를 넘었을 뿐이죠. 보시다시피 양분을 전부 소진해버렸잖아요?',
      ]);
      await in_urara.print_and_wait(
        '그리고 제가 말했었죠? 이야기를 계속 써 내려갈 권리는 제 손안에 쥐어두겠다고.',
      );
      await in_urara.print_and_wait(
        '당신을 탓하지 않겠다고도 말했지만, 다음에 정식으로 대화하게 될 때는 마음의 준비를 해두시는 게 좋을 거예요.',
      );
    } else {
      crazy_fans.push(52);
    }
  };
};