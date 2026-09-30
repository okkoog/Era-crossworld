const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');

const RaceHistory = require('#/data/race/model/race-history');
const { class_enum } = require('#/data/race/model/race-info');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,HookArg):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[race_enum.begin_race] = async (urara, me, in_urara, callname) => {
    if (era.get('cflag:52:육성턴수합산') === 23) {
      await print_event_name('데뷔전을 향해!', urara);

      await in_urara.say_as_unknown_and_wait(
        '계약을 맺은 트레이너와 서로를 알아가며 보낸 긴 시간 끝에, 두 사람은 서서히 진정한 준비를 마쳤습니다.',
      );
      await in_urara.say_as_unknown_and_wait([
        urara.get_colored_actual_name(),
        '라는 이름의 작은 ',
        urara.get_uma_sex_title(),
        '는, 드디어 『데뷔전』에 출주하게 되었습니다——',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        '드디어 데뷔야? 그럼 오늘도 「우라라」하게 가보자!',
      );

      era.printButton('「우라라, 긴장 풀고 너무 떨지 마.」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '와 함께 경기장 통로에 서서, ',
        me.get_colored_name(),
        '은(는) 곁에서 웃고 있지만 몸을 떨고 있는 ',
        urara.get_colored_name(),
        '를 다독였다.',
      ]);
      await era.printAndWait([
        '훈련 성과를 점검하는 날은 바로 오늘이다. ',
        urara.get_colored_name(),
        ' 역시 데뷔의 「기회」는 한정되어 있다는 것을 알고 있으며, 이번 승리가 상당히 중요하다는 사실도 인지하고 있다.',
      ]);
      await era.printAndWait(
        '승부욕이 생기는 것은 좋은 일이지만, 지나친 흥분은 실력 발휘를 방해할 수 있다. 긴장 탓에 제대로 뛰지 못하는 경우도 적지 않다.',
      );
      await era.printAndWait([
        '그러니 아직 데뷔하지 못한 담당에게 설교를 늘어놓는 주변 동료들보다는, ',
        urara.sex,
        '가 즐겁게 달리게 하는 것이 상책이다.',
      ]);
      await urara.say_and_wait('응! 맞아! 헤헤~ 나도 모르게 긴장해 버렸네!');
      await era.printAndWait([
        me.get_colored_name(),
        '의 조언을 듣고 어깨의 힘을 뺀 ',
        urara.get_colored_name(),
        '는 조금 무리하면서도 귀를 쫑긋거리며 ',
        me.get_colored_name(),
        '에게 미소를 지어 보였다.',
      ]);
      era.println();
      if (era.get('relation:52:0') > 150) {
        await urara.say_and_wait(
          '하지만 드디어 데뷔할 수 있는걸! 지금 데뷔한다는 건 정말 대단한 일이라고 생각해!',
        );
        await urara.say_and_wait([
          '데뷔하면 더 많은 레이스에 나갈 수 있겠지! 1등을 많이 하면 ',
          callname,
          '랑 모두가 기뻐해 줄 거야!',
        ]);
        await era.printAndWait([
          '꼬리를 힘차게 흔드는 ',
          urara.get_colored_name(),
          '의 앳된 목소리에서, 자신을 지지해 주는 사람들을 위해 달리겠다는 투지가 명확히 느껴졌다.',
        ]);
        await era.printAndWait([
          '마치 영웅 만화의 주인공 같은 느낌이다. ',
          urara.get_colored_name(),
          ', 정말 대단한 아이구나……',
        ]);
      } else {
        await urara.say_and_wait(
          '하지만 곧 데뷔니까! 조금 이르다는 생각도 들지만, 이제 나아갈 때네!',
        );
        await urara.say_and_wait(
          '기운 낼게! 1등만 할 수 있다면 모두 웃어줄 테니까!',
        );
        await era.printAndWait([
          '가슴 속의 투지를 불태우듯 ',
          urara.get_colored_name(),
          '는 힘차게 꼬리를 흔들었고, 얼굴에는 진지함이 서렸다.',
        ]);
        await era.printAndWait([
          '자신감이 부족하더라도 자신을 돌봐주는 모두를 위해 최선을 다하려는 ',
          urara.get_colored_name(),
          ', 정말 착한 아이구나……',
        ]);
      }
      era.println();
      await urara.say_and_wait([
        '그리고 나, 전보다 더 강해진 것 같아! ',
        callname,
        '의 방법이 정말 도움이 됐어!',
      ]);
      await urara.say_and_wait(['아직 잘은 모르겠지만, ', callname, '의 몸도—']);

      era.printButton(
        `「괜찮아, 몇 번이나 말했잖아? 나는 문제없어!」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어? 정말? 그럼 ',
        callname,
        '도 긴장 좀 풀어야 해?',
      ]);

      era.printButton('「정말이야! 우라라는 안심해도 좋아!」', 1);
      await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        '과(와) 나누는 한마디 한마디의 대화 속에서 ',
        urara.get_colored_name(),
        '의 굳어 있던 표정이 서서히 풀려갔다.',
      ]);
      await era.printAndWait([
        '이걸로 괜찮겠지? 여전히 심하게 떨리는 두 다리를 몰래 누르며, ',
        me.get_colored_name(),
        '은(는) 서 있는 것조차 힘겨운 몸의 자세를 고쳐 잡았다.',
      ]);
      await era.printAndWait(
        '몸은 지금까지도 죽을 만큼 쑤시지만, 노력이 헛되지 않았다면 이 정도 고생은 충분히 가치가 있다.',
      );
      await era.printAndWait([
        '호흡을 가다듬고 체육복과 번호표를 정리한 ',
        urara.get_colored_name(),
        '는 안내 방송에 따라 한 걸음 앞으로 내디뎠다.',
      ]);

      era.printButton('「첫 레이스, 준비됐어?」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 오늘 내가 꼭 1등 할 거야! 아니, 절대 이길 거야!',
      );
      await urara.say_and_wait([
        '그럼 다녀올게! 질문! ',
        callname,
        ', 우라라는 어떻게 달릴까요—?',
      ]);
      await era.printAndWait([
        '빛을 등지고 미소 짓는 ',
        urara.get_colored_name(),
        '에게 ',
        me.get_colored_name(),
        '은(는) 힘찬 응원을 보냈다.',
      ]);

      era.printButton('「어찌 됐든, 즐겁게 달리고 와—!」', 1);
      await era.input();
    } else {
      await print_event_name('정말 괜찮을까?', urara);
      await in_urara.say_as_unknown_and_wait(
        '우라라가 여기까지 올 것이라고 예상하지 못한 것은 아니었지만, 심정적으로는 받아들이기 어렵군요. 여러 의미로 말이죠.',
      );
      await in_urara.say_as_unknown_and_wait([
        '당신과 ',
        urara.sex,
        ' 모두 괜찮으신 건가요? 이야기가 이렇게 간단히 끝나버린다면, 저는 인정하지 않을 겁니다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '걱정스러운 눈빛으로 담당을 바라보며 ',
        me.get_colored_name(),
        '은(는) 어떻게 말을 꺼내야 할지 망설였다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 지금의 ',
        urara.get_colored_name(),
        '가 겉보기만큼 여유롭지 않다는 것을 알고 있다. 하지만 데뷔를 선택한 이상, 앞을 가로막는 장애물은 반드시 넘어야만 한다.',
      ]);
      await era.printAndWait([
        '이번에 승리하지 못하면 어떤 일이 벌어질지 ',
        urara.sex,
        '에게 직접 말해야 할까? 역시 입이 떨어지지 않는다.',
      ]);
      await era.printAndWait([
        '게다가 지금 말하기엔 너무 늦었다. 설령 ',
        urara.get_colored_name(),
        '가 이미 눈치채고 있었다 하더라도, 지금 언급하는 것은 압박감만 더할 뿐이다.',
      ]);
      await era.printAndWait([
        '결국 해줄 수 있는 말이라곤 평소처럼 즐겁게 달리라는 것뿐인데, 하지만 그렇게 되면……',
      ]);
      await urara.say_and_wait([
        callname,
        ', 우라라 걱정은 안 해도 돼! 어떻게 달려야 할지 알고 있으니까!',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 고뇌를 꿰뚫어 본 듯, ',
        urara.get_colored_name(),
        '는 곁에 있는 ',
        me.get_colored_name(),
        '에게 상냥하게 웃어 보였다. 마치 ',
        urara.sex,
        '가 출주하는 담당을 배웅하는 트레이너인 것처럼.',
      ]);
      await urara.say_and_wait([
        callname,
        '는 정말 대단하니까! 그러니까 우라라는 분명 괜찮을 거야!',
      ]);

      era.printButton('「……즐겁게 달리고 오는 거야, 알았지?」', 1);
      await era.input();

      era.println();
      if (era.get('relation:52:0') > 150) {
        await urara.say_and_wait([
          '응! 결과가 어떻든 우라라는 달리는 걸 포기하지 않아! 그러니까 ',
          callname,
          ', 걱정 마!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 말에 대답하며 ',
          urara.get_colored_name(),
          '는 안심시켜 주는 미소를 지었다.',
        ]);
        await urara.say_and_wait([
          '헤헤~ ',
          callname,
          ', 내가 했던 말을 기억해주고 있구나. 역시 ',
          callname,
          '는 대단해!',
        ]);
        await era.printAndWait([
          '그렇다, 지금 와서 걱정해봐야 의미는 없다. 이제 달리는 것은 ',
          urara.get_colored_name(),
          '에게 맡기면 된다.',
        ]);
      } else {
        await urara.say_and_wait(
          '맞아! 그러니까 또 지더라도 우라라는 계속 달릴 거야!',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '을(를) 바라보고 있지는 않았지만, ',
          urara.get_colored_name(),
          '의 얼굴에는 미소가 번져 있었다.',
        ]);
        await urara.say_and_wait('그러니까 앞으로도 계속 열심히 달리기만 하면 돼!');
        await era.printAndWait([
          '그렇다, ',
          urara.get_colored_name(),
          '는 이렇게 강인한 ',
          urara.get_uma_sex_title(),
          '였다. 걱정해야 할 쪽은 ',
          urara.sex,
          '를 믿지 못하는 나 자신뿐이다……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '심호흡으로 마음을 가라앉힌 뒤, ',
        me.get_colored_name(),
        '도 ',
        urara.get_colored_name(),
        '와 함께 웃음을 터뜨렸다. 비록 자조 섞인 웃음이었지만.',
      ]);
      await era.printAndWait([
        '분명 ',
        urara.get_colored_name(),
        '의 레이스인데, 어째서 자신이 달리는 것처럼 구는 걸까. 방금까지만 해도 ',
        urara.get_colored_name(),
        '를 어떻게 위로할지 고민했는데, 결국 위로받는 쪽은 자신이었다.',
      ]);
      await era.printAndWait([
        '하지만 적어도 ',
        me.get_colored_name(),
        '은(는) 깨달았다. 이제 망설일 필요는 없다. ',
        urara.get_colored_name(),
        '는 반드시 앞으로 나아갈 것이기 때문이다.',
      ]);
      await era.printAndWait([
        '주변 트레이너와 담당들처럼 긴 대화를 나누지는 않았지만, ',
        me.get_colored_name(),
        '과(와) 곁에 선 작은 ',
        urara.get_uma_sex_title(),
        '는 입장 안내 방송이 나올 때까지 조용히 기다렸다.',
      ]);
      await urara.say_and_wait(['시간 다 됐어, ', callname, '! 다녀올게!']);

      era.printButton('「이번에야말로 가장 좋아하는 1착을 따내자!」', 1);
      await era.input();

      await urara.say_and_wait('응! 꼭 그럴게!');
      await era.printAndWait([
        '짧고 힘찬 대답과 함께 통로 밖의 햇살을 향해 ',
        urara.get_colored_name(),
        '는 다시 한번 미소를 띠며 경기장으로 향했다.',
      ]);
    }
  };

  handlers[race_enum.arim_kin] = async (
    urara,
    me,
    in_urara,
    callname,
    _,
    hook,
  ) => {
    if (era.get('cflag:52:육성턴수합산') < 96) {
      hook.override = true;
      await print_event_name('나아갈 결의!', urara);
      const best_mvp = Math.min(
        ...RaceHistory.get(52)
          .get_values()
          .filter((e) => race_infos[e.race].race_class <= class_enum.G3)
          .map((e) => e.rank),
      );
      await in_urara.say_as_unknown_and_wait(
        '어째서…… 분명 제가 말씀드렸는데…… 왜 그런 짓을…… 당신이라는 사람은 정말……',
      );
      era.drawLine();
      await era.printAndWait([
        '넓은 지하 통로 안에 서서 ',
        urara.get_colored_name(),
        '는 주변의 긴장감 넘치는 분위기와 어울리지 않게 두리번거리고 있었다.',
      ]);
      await era.printAndWait([
        '그리고 너무 흥분한 작은 ',
        urara.get_uma_sex_title(),
        '의 곁에는 ',
        urara.sex,
        '때문에 약간 골치가 아픈 듯한 ',
        callname,
        '가 서 있었다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 내가 정말로 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '에 나가게 될 줄은 몰랐어!',
      ]);
      await era.printAndWait([
        '사실 많은 이들의 예상을 깬 결과였다. 팬 투표라는 수단을 제안했던 ',
        me.get_colored_name(),
        '조차 이 방법이 정말로 통할 줄은 몰랐다.',
      ]);
      await era.printAndWait([
        '무모한 생각은 그저 생각일 뿐이라 여겼지만, ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '를 사랑하는 팬들의 뜨거운 열정을 과소평가하고 있었다.',
      ]);
      await era.printAndWait([
        '주변에 있는 ',
        urara.get_uma_sex_title(),
        '들과 트레이너들의 살기 등등한 표정만 봐도 알 수 있다. 여기서 긴장하지 않은 사람은 오직 ',
        urara.get_colored_name(),
        '뿐일 것이다.',
      ]);
      await urara.say_and_wait([
        '헤헤~ 다들 표정이 정말 무서워…… 우라라도 조금 더 긴장한 척을 해야 할까?',
      ]);
      await era.printAndWait([
        '주변 참가자들이 뿜어내는 분위기에 맞춰 목소리를 낮추며, ',
        urara.get_colored_name(),
        '는 살며시 ',
        me.get_colored_name(),
        '의 옷자락을 붙잡았다.',
      ]);

      era.printButton(
        '「괘, 괜찮아. 우라라는 긴장할 필요 없어. 그저 미래를 위한 연습이라고 생각하고……」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어? ',
        callname,
        ', 우라라가 다음에 또 올 수 있을 거라고 생각해? ',
        callname,
        '와 모두가 우라라를 정말 믿어주고 있구나!',
      ]);
      await urara.say_and_wait([
        '하지만 이건 ',
        race_infos[race_enum.arim_kin].get_colored_name(),
        '인걸! ',
        urara.get_colored_name(),
        '는 모두의 기대를 받고 있으니까, 그러니까 만약 이길 수 있다면, 이길 수 있다면—!',
      ]);
      await era.printAndWait([
        '승리를 염원하는 ',
        urara.get_colored_name(),
        '의 목소리에 ',
        me.get_colored_name(),
        '의 머리는 죄책감으로 인해 더욱 어지러워졌다.',
      ]);
      if (best_mvp === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '는 정말로 이기는 것을 생각하고 있다. 가능성이 있을까? 모르겠다. 하지만 중상을 우승해본 적이 있으니 조금은 희망을 걸어봐도……',
        ]);
        await era.printAndWait(
          '아니, 무슨 소린가. 이건 차원이 다른 문제다. 세 여신에게 물어볼 것도 없이 결과는 뻔하지 않은가.',
        );
      } else {
        await era.printAndWait([
          '이길 희망은커녕, 기적이 일어나지 않는 한 이 가여운 ',
          urara.get_uma_sex_title(),
          '가 이 레이스를 이기는 것은 불가능에 가깝다.',
        ]);
        await era.printAndWait([
          '설령 세 여신이 작은 ',
          urara.get_uma_sex_title(),
          '의 노력을 지켜보고 있다 한들, 지금 ',
          urara.sex,
          '에게 응답해줄 수 있는 것은 응원해주는 팬들뿐이다.',
        ]);
      }
      era.println();
      await era.printAndWait(
        '이거 정말 큰일이다. 트레이너 실격이다. 역시 지금 아리마 기념에 출주하기로 한 결정은 너무 성급했다.',
      );
      await era.printAndWait([
        '애초에 승리를 기대한 것은 아니었지만, 적어도 이번 레이스에서 ',
        urara.get_colored_name(),
        '가 충분한 준비를 마친 뒤에 올 수 있었다면……',
      ]);
      era.println();
      if (era.get('relation:52:0') > 150) {
        await urara.say_and_wait([
          '우라라는 괜찮아! ',
          callname,
          '는 평소처럼만 있어 줘. 이번 기회를 헛되이 보내지 않을 거니까!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 평소와 다른 표정을 눈치챈 작은 ',
          urara.get_uma_sex_title(),
          '는 씩씩하게 ',
          me.get_colored_name(),
          '을(를) 껴안으며, 아이를 달래는 어머니 같은 미소를 지었다.',
        ]);
        await urara.say_and_wait([
          '첫 번째 참패는 두 번째 도약의 밑거름으로 삼으면 돼. 우라라는 괜찮으니까! 그럼 ',
          callname,
          ', 나중에 봐!',
        ]);
        await urara.say_and_wait('레이스하는 동안 계속 우라라만 보고 있어야 해!');
      } else {
        await urara.say_and_wait([
          callname,
          ', 고민하고 있어? 괜찮아, 우리 지금까지 계속 이렇게 무모하게 해왔잖아?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 마음을 꿰뚫어 본 듯, ',
          urara.get_colored_name(),
          '는 갑자기 다가와 조용히 안아주었다. 그 미소는 마치 어쩔 수 없다는 듯한 상냥함을 머금고 있었다.',
        ]);
        await urara.say_and_wait([
          '그리고 벌써 나갈 시간이야! ',
          callname,
          '는 평소처럼 관람석에서 모두와 함께 내가 돌아오길 기다려 줘!',
        ]);
        await urara.say_and_wait('이전처럼, 눈을 떼면 안 돼?');
      }
      era.println();
      await era.printAndWait([
        '긴 찰나의 시간이 흐른 뒤 작은 ',
        urara.get_uma_sex_title(),
        '의 포옹이 끝났고, 이어 ',
        me.get_colored_name(),
        '의 귀에 레이스 입장을 알리는 예고가 들려왔다.',
      ]);
      await urara.say_and_wait([
        '마음이 조금은 편해졌어? 헤헤~ ',
        callname,
        '는 항상 스트레스를 쌓아두는구나!',
      ]);
      await urara.say_and_wait([
        '하지만 어떤 일은 ',
        callname,
        '만이 할 수 있는 거야! 우린 ',
        callname,
        '와 담당이니까!',
      ]);
      await era.printAndWait([
        '마치 출주 전의 정해진 의식처럼 통로 밖의 빛을 등지고 ',
        urara.get_colored_name(),
        '는 웃으며 ',
        me.get_colored_name(),
        '에게 마지막 작별 인사를 건넸다.',
      ]);
      await era.printAndWait([
        '똑같이 손을 흔들어 ',
        urara.get_colored_name(),
        '가 경기장으로 달려가는 모습을 배웅한 뒤, 비로소 ',
        me.get_colored_name(),
        '도 관자놀이를 힘껏 누르며 자신이 있어야 할 곳으로 발걸음을 옮겼다.',
      ]);
      era.println();
      await era.printAndWait('하지만.');
      await in_urara.say_as_unknown_and_wait(
        '……떠나기 전에, 질문 하나만 더 해도 될까요?',
      );
      await era.printAndWait(
        '아무도 없는 지하 통로 안, 모든 것이 회백색으로 물든 환경 속에서 마치 시간이 멈춘 듯한 착각이 들었다.',
      );
      await era.printAndWait([
        '그리고 지금 ',
        me.get_colored_name(),
        '을(를) 향해 곧장 걸어오는 것은, 낯설고 음침한 표정을 지은, 평소 가장 익숙했던 벚꽃이었다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.sex,
        '는 ',
        urara.get_colored_name(),
        '가 아니었다. 목소리는 똑같고 화낼 때의 얼굴도 완전히 일치했지만, ',
        urara.sex,
        '는 절대로 ',
        urara.get_colored_name(),
        '가 아니다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 이토록 낯설 정도로 정중하지도 않고, 이처럼 어둡고 복잡한 표정을 짓지도 않는다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '는 당연히 ',
        urara.get_colored_name(),
        '가 아니다. 지금 ',
        urara.get_colored_name(),
        '는 이미 경기장으로 나갔으며, 갑자기 뒤에서 나타날 리도, 교복을 입고 있을 리도 없다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.sex,
        '는 어쩌면 「',
        in_urara.get_colored_actual_name(),
        '」일지도 모른다. 아마도 ',
        me.get_colored_name(),
        '과(와) ',
        urara.sex,
        '는 꿈속에서 여러 번 만났을 테지만, 꿈에서 깨면 모든 것이 사라져 버릴 뿐——',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '제가 분명히 말씀드렸을 텐데, 왜 무리하게 ',
        urara.sex,
        '를……',
      ]);
      await era.printAndWait([
        '이성마저 얼어붙는 것 같은 공간 속에서, 엄한 질책의 목소리가 ',
        in_urara.get_colored_name(),
        '의 모습으로 ',
        me.get_colored_name(),
        '의 코앞까지 다가왔다.',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '묻겠습니다, 왜 ',
        urara.sex,
        '를 이 레이스에 내보낸 거죠…… 왜 우라라를 지금 아리마 기념에 내보낸 거냐고 묻고 있습니다!',
      ]);
      await era.printAndWait([
        '황홀경 속의 망설임은 ',
        urara.get_teen_sex_title(),
        '의 분노를 산 듯했다. 쌓여있던 분노가 ',
        urara.get_uma_sex_title(),
        ' 특유의 힘으로 폭발하며 ',
        me.get_colored_name(),
        '의 몸을 통로 벽면에 밀어붙였다.',
      ]);
      await era.printAndWait([
        '충돌의 통증이 등에서 온몸으로 퍼져 나갔고, 이는 미망 속에 있던 ',
        me.get_colored_name(),
        '에게 자극적인 각성을 가져다주었다.',
      ]);
      await era.printAndWait([
        '멈춰버린 세계는 꿈이 아니었으며, 눈앞의 「',
        in_urara.get_colored_actual_name(),
        '」 또한 실재하고 있었다.',
      ]);
      await era.printAndWait([
        '하지만 몸을 억누르던 중압감은 불과 몇 초 만에 사라졌고, 가녀린 벚꽃색 ',
        urara.get_uma_sex_title(),
        '는 울먹이며 무력하게 ',
        me.get_colored_name(),
        '의 옷깃을 놓아주었다.',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '그래서 다들 똑같다는 겁니다. 그냥 내버려 둬도 끊임없이 변화하려고 하고, 설령 그것이 자신을 해치게 될지라도……',
      );
      await era.printAndWait([
        '오열 섞인 말을 끝까지 잇지 못한 채, 슬픔을 억누른 미소를 지으며 「',
        in_urara.get_colored_actual_name(),
        '」는 고개를 들어 ',
        me.get_colored_name(),
        '의 옷자락을 펴주었다.',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '죄송합니다, 제가 실례를 범했군요. 처음부터 당신이 멈출 거라고 기대해서는 안 되는 것이었는데……',
      );

      era.printButton(
        '「미안해, 무슨 일이 일어난 건지 모르겠지만, 나는 담당의 레이스를 보러 가야 해……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '기괴하기 짝이 없는 상황 앞에서도 ',
        me.get_colored_name(),
        '은(는) 이상할 정도로 침착했다. 그저 눈앞의 ',
        urara.get_uma_sex_title(),
        '를 지나쳐 ',
        urara.get_colored_name(),
        '의 레이스를 지켜보러 가려 할 뿐이었다.',
      ]);
      await era.printAndWait([
        '마치 지금 마주하고 있는 이가 「이질적인 ',
        urara.get_colored_name(),
        '」이기도 하지만, 이름은 몰라도 오랫동안 알고 지낸 「성가신 친구」처럼 느껴졌기 때문이다.',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '『우라라』가 걱정되시나요? 괜찮습니다, ',
        urara.sex,
        '는 당신이 이토록 서두를 정도로 약하지 않으니까요.',
      ]);

      era.println();
      if (era.get('relation:52:0') > 150) {
        await in_urara.say_as_unknown_and_wait(
          '하지만 당신의 마음은 이해합니다. 당신은 진심으로 우라라를 돌봐주고 있고, 그러니 우라라가 당신에게 그토록 의지하는 것이겠지요.',
        );
        await era.printAndWait([
          me.get_colored_name(),
          '의 앞을 온화하게 가로막으며, 이름 모를 성가신 친구는 마음을 달래주듯 꼬마 ',
          urara.get_uma_sex_title(),
          '와 판박이인 미소를 지어 보였다.',
        ]);
      } else {
        await in_urara.say_as_unknown_and_wait([
          '평소에는 우라라에게 큰 관심도 없으셨던 것 같은데? 왜 이렇게 긴장하시는 건가요, 트레이너 ',
          me.get_adult_sex_title(),
          '?',
        ]);
        await era.printAndWait([
          '끈질기게 ',
          me.get_colored_name(),
          '의 앞길을 막아선 채, 이름조차 알 수 없는 「친구」는 눈앞의 영문도 모른 채 당황하는 미숙한 어른을 비웃었다.',
        ]);
      }
      era.println();
      await in_urara.say_as_unknown_and_wait([
        '이것이 바로 당신과 ',
        urara.sex,
        '가 만들어내고 싶었던 변화 아닌가요? 그러니 지금은 조금만 더 인내심을 가져주세요.',
      ]);
      await era.printAndWait([
        urara.sex,
        '의 말이 맞을지도 모른다…… 아니, ',
        urara.sex,
        '는 아마도 옳을 것이다. 정적만이 흐르는 공기 속에서 ',
        me.get_colored_name(),
        '은(는) 무조건적인 신뢰를 보내듯 발걸음을 멈추었다.',
      ]);
      await era.printAndWait([
        '뒤를 돌아보자 기쁨도 슬픔도 없는 「가면」을 쓴 「',
        urara.sex,
        '」가 제자리에 서서 「당신」의 시선을 기다리고 있었다.',
      ]);
      await in_urara.say_as_unknown_and_wait(
        '이제 제 이야기를 조금만 들려드리죠. 그리 오랜 시간은 걸리지 않을 겁니다……',
      );
      await era.printAndWait([
        '한 걸음 다가와 ',
        me.get_colored_name(),
        '과(와) 나란히 서서 통로 밖을 바라보며, 벚꽃색의 ',
        urara.get_teen_sex_title(),
        '는 귀와 꼬리를 흔들며 변덕스러운 하늘을 향해 손을 뻗었다.',
      ]);
      await in_urara.say_as_unknown_and_wait([
        '그것은 아주 보잘것없고 작은…… ',
        urara.get_uma_sex_title(),
        '의 이야기입니다.',
      ]);
    } else {
      await print_event_name('결말을 향해——', urara);
      await in_urara.say_as_unknown_and_wait(
        '……여보세요? 들리시나요? 역시 계속 듣고 계셨군요. 그럼 이 이야기를 이어가 보도록 하죠.',
      );
      await in_urara.say_as_unknown_and_wait(
        '이 이야기는 도중에 당신을 만족시키지 못했을 수도 있고, 어쩌면 결말에 이르기까지 결점 투성이라 이별하는 법을 배워야 할지도 모릅니다.',
      );
      await in_urara.say_as_unknown_and_wait(
        '하지만 그렇기에, 저희와 함께 길을 걸어주신 당신께 감사의 인사를 드립니다. 자, 준비되셨나요?',
      );
      await in_urara.say_as_unknown_and_wait([
        '이것은 아주 보잘것없고 작지만, 그 누구도 대체할 수 없는, 『',
        urara.get_colored_actual_name(),
        '』라는 이름의 작은 ',
        urara.get_uma_sex_title(),
        '의 이야기입니다——',
      ]);
      era.drawLine();
      await era.printAndWait(
        `${era.get('flag:현재연도')}년 12월 22일, 나카야마 경마장.`,
      );
      await era.printAndWait('만개한 푸른 하늘 아래, 축복에 둘러싸여 이야기는 결말을 넘어섭니다.');
      await era.printAndWait('웅성거리는 인파 속에서, 늦봄의 벚꽃이 엄동설한 속에 활짝 피어나길 기원합니다.');
      await era.printAndWait('이것은 「우리」가 함께 써 내려간 이야기——');

      era.printButton('그러니 달려나가렴, 하루 우라라.', 1);
      await era.input();
    }
  };

  handlers[race_enum.negi_sta] = async (urara, me, in_urara, callname) => {
    await print_event_name(
      [race_infos[race_enum.negi_sta].get_colored_name(), '를 향해!'],
      urara,
    );
    await in_urara.say_as_unknown_and_wait('기운이 나지 않는 것은 이해합니다만……');
    await in_urara.say_as_unknown_and_wait('관두죠, 너무 대충 하지는 마세요.');
    era.drawLine();

    era.printButton('「우라라, 준비됐어? 오늘의 레이스.」', 1);
    await era.input();

    await urara.say_and_wait(['응—! 근데 ', callname, ', 오늘 레이스 중상이야?']);

    era.printButton('「오늘은 중상이야. 그래도 다른 사람들의 분위기에 휩쓸리지 마, 알았지?」', 1);
    await era.input();

    await urara.say_and_wait([
      '응! 왠지 이번 레이스는 예전이랑 비슷한 것 같으면서도 뭔가 다른 느낌이야!',
    ]);
    await urara.say_and_wait('그나저나 분, 위, 기……? 이번엔 안 틀리고 제대로 말했지! 헤헤~');

    era.printButton(
      '「……의외의 부분에서 발전했네. 아무튼 평소 페이스대로, 이전처럼 힘내서 가보자.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '조용히 지하 통로에 서서 ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      ' 두 사람은 레이스 전의 소소한 잡담을 나누었다.',
    ]);
    await era.printAndWait(
      '지나가는 사람이 본다면 「점심에 뭐 먹었어?」 수준의 이 대화가 정말 중상 레이스를 앞두고 하는 대화인지 의아해할지도 모른다.',
    );
    await era.printAndWait(
      '두 사람의 태도는 진지하지 못하다는 질문에 「예」라고 답하는 것 같았지만, 결코 기운이 없는 것은 아니었다. 그저 긴장이 되지 않을 뿐이었다.',
    );
    await era.printAndWait(
      '두 사람은 예전에 중상 레이스에 나갈 때의 가능성을 많이 고민했었지만, 시니어 급이 되어 경기장에 서보니 그리 대단한 일도 아니라는 것을 깨달았다.',
    );
    await era.printAndWait([
      '왜냐하면 ',
      urara.sex,
      '는 「',
      urara.get_colored_name(),
      '」이고, ',
      me.get_colored_name(),
      '은(는) ',
      urara.sex,
      '의 「트레이너」니까. 지든 이기든 매번 전력을 다해 달리기만 하면 그만이다.',
    ]);
    await era.printAndWait([
      '다만 결과적으로 이곳까지 오게 되었을 뿐이다. 이 ',
      race_infos[race_enum.negi_sta].get_colored_name(),
      '에.',
    ]);
    const race_history = RaceHistory.get(52);
    if (
      race_history
        .get_values()
        .findIndex((e) => race_infos[e.race].race_class <= class_enum.G3) !== -1
    ) {
      await era.printAndWait([
        '여기에 온 이유는 예전의 약속대로 ',
        urara.get_colored_name(),
        '에게 시니어 급의 벽이 얼마나 높은지 경험시켜 주기 위해서다.',
      ]);
      await era.printAndWait([
        '하지만 이전의 중상과는 다르길 바랐다. 이번 레이스에서는 ',
        urara.get_colored_name(),
        '가 조금 더 편안하게 달릴 수 있기를.',
      ]);
    } else {
      await era.printAndWait([
        '꼭 이 레이스일 필요는 없었지만, 어쨌든 이것이 ',
        urara.get_colored_name(),
        '의 첫 중상 출주이었기에 가급적 ',
        urara.get_colored_name(),
        '에게 쉬운 곳을 골라주었다.',
      ]);
      await era.printAndWait([
        '지금의 ',
        urara.get_colored_name(),
        '라면 설령 지더라도 처음처럼 영문을 몰라 당황하지는 않을 것이다.',
      ]);
    }
    const arim_kin_check = race_history.get_result(47 + 48);
    if (arim_kin_check?.race === race_enum.arim_kin) {
      if (arim_kin_check?.rank === 1) {
        await me.say_and_wait(
          '무엇보다 중요한 건, 우리 아리마 기념을…… 이겨버렸으니까? 이번에 정말 기운이 안 난다고 해도 아무도 우리를 탓하지 못하겠지……?',
          true,
        );
      } else {
        await era.printAndWait([
          '이미 ',
          race_infos[race_enum.arim_kin].get_colored_name(),
          '에 출주해본 뒤라 그런지 ',
          urara.get_colored_name(),
          '가 긴장하지 않는 것도 어느 정도 예상 범위 안이었다.',
        ]);
        await era.printAndWait([
          '그러므로 이번 레이스의 결과가 좋든 나쁘든, ',
          urara.get_colored_name(),
          '에게 큰 감정의 동요는 없을 것으로 보인다.',
        ]);
      }
    }
    era.println();
    await urara.say_and_wait(['그럼 ', callname, ', 다녀올게——!']);
    await era.printAndWait([
      '출주 알림과 함께 들려오는 경쾌한 외침 속에서 ',
      urara.get_colored_name(),
      '는 한 걸음 나아가 ',
      me.get_colored_name(),
      '을(를) 향해 손을 흔들었다.',
    ]);

    era.printButton('「오! 즐겁게 달리고 와야 한다?」', 1);
    await era.input();

    await era.printAndWait([
      '두 사람에게 가장 익숙한 작별 인사와 함께 ',
      urara.get_colored_name(),
      '는 또다시 경기장을 향해 달려나갔다——',
    ]);
  };
};