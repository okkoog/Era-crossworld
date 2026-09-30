const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');

const { attr_enum, fumble_result } = require('#/data/train-const');

/**
 * @param {CharaTalk} urara
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {HookArg} hook
 * @param {TrainFailParams} extra_flag
 */
module.exports = async (urara, me, callname, hook, extra_flag) => {
  extra_flag.args = extra_flag.fumble
    ? fumble_result.fumble
    : fumble_result.fail;
  switch (extra_flag.train) {
    case attr_enum.speed:
      await urara.say_and_wait('에? 어째서 다리가……? 움직이지 않아……');
      break;
    case attr_enum.endurance:
      await urara.say_and_wait('……하아, 하아…… 머, 머리가 어지러워……');
      break;
    case attr_enum.strength:
      await urara.say_and_wait([
        '빨, 빨리 봐 ',
        sys_get_callname(52, 0),
        ', 하늘에 작은 별들이 반짝이고 있어……',
      ]);
      break;
    case attr_enum.toughness:
      await urara.say_and_wait([sys_get_callname(52, 0), '……나 좀 끌어올려 줘～～']);
      break;
    case attr_enum.intelligence:
      await urara.say_and_wait('졸려…… 으윽……');
  }
  era.println();
  if (extra_flag.train !== attr_enum.intelligence) {
    if (extra_flag.fumble) {
      await print_event_name('무리 금지!', urara);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 훈련 중 실수로 크게 넘어졌기 때문에, ',
        me.get_colored_name(),
        '은(는) 즉시 ',
        urara.sex,
        '를 안아 들고 보건실로 데려갔다.',
      ]);
      await era.printAndWait([
        '긴장되는 검사 후, 큰 이상이 없다는 말을 들은 ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '와 함께 안도의 한숨을 내쉬었다.',
      ]);
      await urara.say_and_wait(
        '후유~ 단순한 가벼운 상처라서 다행이야, 의사 선생님 표정이 엄청 무서워서, 주사 맞아야 하는 줄 알았어!',
      );
      await urara.say_and_wait(
        '헤헤~ 게다가 주사가 이것보다 훨씬 아프니까, 조금 다친 것 정도는 문제없어!',
      );

      await urara.say_and_wait([callname, ', 우리 돌아가면 계속 훈련할 수——']);
      era.printButton('「아무튼 지금은 푹 쉬자.」', 1);
      era.printButton('「무리하지 말고, 오늘은 돌아가서 쉬어!」', 2);
      const ret = await era.input();
      await era.printAndWait([
        urara.sex,
        '가 아직 조금 부자연스럽게 걷는 모습을 보며, ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '가 말을 채 끝내기도 전에 즉시 ',
        urara.sex,
        '가 하는 요청을 거절했다.',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(
          '쉬라고? 하지만 우라라는 아직 이렇게 팔팔한데, 계속 훈련하면 안 되는 거야?',
        );

        era.printButton('「아무래도 걱정되니까 그렇지.」', 1);
        await era.input();

        await urara.say_and_wait(
          '으음…… 그렇구나, 그럼 알았어! 우라라 푹 쉴게!',
        );
        await urara.say_and_wait([
          callname,
          '가 그렇게 시무룩해하면 우라라도 엄청 슬퍼지니까, 그러니까 슬퍼하지 마?',
        ]);
        await urara.say_and_wait(
          '그래도 푹 쉬기만 하라니…… 다들 훈련하고 있는데, 왠지 우라라만 뒤처지는 것 같아……',
        );
        await urara.say_and_wait(
          '그렇게 생각하니까 왠지 온몸이 근질근질한걸, 쉬는 것도 어쩌면 주사 맞는 것만큼 힘든 일일지도 몰라……',
        );
        await era.printAndWait([
          '비록 ',
          urara.get_colored_name(),
          '는 무척 지루해 보였지만, 그 후로 ',
          urara.sex,
          '의 상처는 확실히 호전되기 시작했다.',
        ]);
        hook.arg = 0;
      } else {
        await urara.say_and_wait(['에? ', callname, ' 왜, 왜 갑자기 화내는 거야?']);

        era.printButton('「……의사 선생님이 상처가 악화되면, 주사보다 훨씬 아플 거라고 하셨어.」', 1);
        await era.input();

        await urara.say_and_wait(
          '뭐야, 우라라는 이제 어린애가 아닌걸, 정말 그만큼 아프다고 해도 괜찮아!',
        );

        if (Math.random() < extra_flag.args.ratio.fail_again) {
          await urara.say_and_wait([
            '게다가 ',
            callname,
            ' 이것 봐! 우라라는 이래도 전혀 문제없—— 우아앗!',
          ]);
          await urara.say_and_wait(['……아, 아파…… 너무 아파…… ', callname, '……']);
          await era.printAndWait([
            '내가 뭐라 그랬어? 눈물을 훔치기 시작하는 어린 ',
            urara.get_uma_sex_title(),
            '를 일으켜 세우며, ',
            me.get_colored_name(),
            '은(는) 묵묵히 ',
            urara.sex,
            '를 멀지 않은 보건실로 다시 끌고 갔다.',
          ]);
          await era.printAndWait([
            '예상대로, ',
            urara.get_colored_name(),
            '는 무리하게 움직인 탓에 상처가 악화되어 회복 시간도 더 길어지고 말았다.',
          ]);
          hook.arg = -1;
        } else {
          await urara.say_and_wait([
            '……응? ',
            callname,
            '? 왜 갑자기 아무 말도 안 해? 서, 설마 진짜 그렇게 심각한 거야……?',
          ]);

          era.printButton('「어린애가 아닌 우라라의 생각은 어때?」', 1);
          await era.input();

          await urara.say_and_wait(
            '너무해! 쉬는 건 엄청 지루하지만…… 주사보다 아픈 건…… 주사보다……',
          );
          await urara.say_and_wait([
            urara.get_colored_name(),
            '는 금방 나을 거야! 그러니까 달릴 수 있게 될 때까지…… ',
            callname,
            '가 계속 곁에 있어 줄래……?',
          ]);
          await era.printAndWait([
            '그리하여, 비록 ',
            urara.get_colored_name(),
            '는 상처가 낫기까지 꽤 긴 시간이 걸렸지만, ',
            urara.sex,
            '는 마침내 건강을 되찾았다.',
          ]);
          hook.arg = 1;
        }
      }
    } else {
      await print_event_name('몸조심!', urara);

      await era.printAndWait([
        '훈련 도중 ',
        urara.get_colored_name(),
        '의 몸에 약간의 이상이 생긴 것을 발견하여, ',
        me.get_colored_name(),
        '은(는) ',
        urara.sex,
        '를 보건실로 데려가 검사를 받게 했다.',
      ]);
      await era.printAndWait(
        '보건실에는 마침 아무도 없었지만, 다행히 단순한 신체검사 정도라면 트레이너 혼자서도 충분히 감당할 수 있었다.',
      );
      await era.printAndWait([
        '다만, 평소에 몸이 튼튼했던 어린 ',
        urara.get_uma_sex_title(),
        '는 ',
        me.get_colored_name(),
        '이(가) 걱정하는 것을 그저 대수롭지 않게 여기는 듯했다.',
      ]);
      await urara.say_and_wait([
        '우라라는 아무렇지도 않은데, 이런 작은 일은 아무것도 아니야! ',
        callname,
        '도 참 걱정이 많다니까.',
      ]);

      await urara.say_and_wait('걱정하지 마, 여길 이렇게 눌러도 하나도 안…… 아야!');
      era.printButton('「……꽤 아픈 거 아니야?」', 1);
      era.printButton('「아무래도 푹 쉬는 게 낫겠지?」', 2);
      const ret = await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 퉁퉁 부어오른 듯한 다리를 조심스레 누르자, 갑작스런 통증에 가여운 ',
        urara.get_uma_sex_title(),
        '는 눈물이 글썽해진 채 동작을 멈췄다.',
      ]);
      await urara.say_and_wait(
        '아우…… 왜, 왜 그렇게 화내는 거야? 내 말 좀 들어봐, 진짜 하나도 안 아프다니까……',
      );
      await era.printAndWait([
        '갑자기 엄격해진 ',
        me.get_colored_name(),
        '을(를) 억울한 표정으로 쳐다보며, ',
        urara.get_colored_name(),
        '는 눈물이 고인 눈망울로 의아함을 가득 담고 있었다.',
      ]);
      await urara.say_and_wait('이것 봐! 이렇게 움직여도 아무렇지도 않은걸…… 아파!');
      await era.printAndWait([
        urara.get_colored_name(),
        '는 발버둥 치다 부딪힌 발가락을 움켜쥐었고, ',
        me.get_colored_name(),
        '은(는) 손가락을 뻗어 어린 ',
        urara.get_uma_sex_title(),
        '의 이마에 꿀밤을 먹였다.',
      ]);

      era.printButton(
        '「계속 그렇게 몸부림치면 진짜 화낼 거야? 몸을 망치면 이길 수 없게 되잖아.」',
        1,
      );
      await era.input();

      if (ret === 1) {
        await era.printAndWait([
          '두 번의 통증에 더해 ',
          me.get_colored_name(),
          '이(가) 내린 경고를 듣고 나자, 가여운 ',
          urara.get_uma_sex_title(),
          '의 머리 위에서 불안하게 움직이던 귀가 마침내 풀이 죽어 축 늘어졌다.',
        ]);
        await urara.say_and_wait(
          '……우으, 알았어…… 조심할게! 날 다치게 할 만한 건 없다고! 어디 아플 만한 곳은……',
        );
        await urara.say_and_wait([
          '아…… ',
          callname,
          ', 발가락 쪽이 뭔가…… 아까부터 조금 아픈 것 같아……',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 즉시 어린 ',
          urara.get_uma_sex_title(),
          '의 말에 따라 ',
          urara.sex,
          '가 다친 발을 들어 올려 자세히 살펴보았고, 그 결과 아까 부딪혔던 곳도 조금 부어오른 것을 발견했다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 새로 생긴 상처까지 함께 약을 바르고 붕대를 감았고, ',
          me.get_colored_name(),
          '은(는) ',
          urara.sex,
          '를 이날 하루 푹 쉬도록 조치했다.',
        ]);
        hook.arg = 0;
      } else {
        await era.printAndWait([
          '하지만 ',
          me.get_colored_name(),
          '이(가) 그렇게 말했음에도 불구하고, 어린 ',
          urara.get_uma_sex_title(),
          '의 본래도 가만있지 못하던 꼬리는 한층 더 격렬하게 요동쳤다.',
        ]);
        await urara.say_and_wait(
          '……알았어! 달릴 때도, 공부할 때도, 우라라가 앞으로는 꼭 조심할게!',
        );
        await urara.say_and_wait(
          '그러니까…… 우리 계속 훈련하면 안 될까? 그냥 간단한 훈련 정도면 다시 다치진 않을 거잖아!',
        );
        await urara.say_and_wait([
          '왜냐하면 나도 엄청 진지하게 1등을 하고 싶단 말이야! 그러니까 우라라가 조심할 거라는 걸 ',
          callname,
          '가 알아줬으면 좋겠어!',
        ]);
        await era.printAndWait([
          '어쩔 수 없지, ',
          urara.sex,
          '가 그렇게까지 말한다면……. ',
          me.get_colored_name(),
          '은(는) 한숨을 내쉬고는, ',
          urara.get_colored_name(),
          '가 다친 곳을 처치받은 뒤 조심스레 다시 훈련을 시작하게 했다.',
        ]);
        hook.arg = (Math.random() > extra_flag.args.ratio.fail_again) * 2 - 1;
      }
    }
  }
};