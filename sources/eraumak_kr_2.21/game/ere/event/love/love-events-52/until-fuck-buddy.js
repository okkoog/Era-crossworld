const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { chara_colors } = require('#/data/chara-colors');
const { lust_from_palam } = require('#/data/ero/orgasm-const');
const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');

module.exports = class extends CustomizedLove {
  get_event_vars() {
    return {
      chara_self_name: sys_get_callname(52, 52),
      in_urara: get_chara_talk(52, chara_colors[52][1]),
      relation: new UraraEduMarks().loop === 2 ? 150 : era.get('relation:52:0'),
    };
  }

  async 49(urara, me, callname) {
    const { chara_self_name, in_urara } = this.get_event_vars();
    await print_event_name('각성하는 미숙함', urara);
    await in_urara.say_as_unknown_and_wait(
      `평소라면 지금쯤 ${
        urara.name
      }는 이미 꿈나라에 가 있었겠지만, 오늘 밤의 어린 ${urara.get_uma_sex_title()}는 좀처럼 잠을 이루지 못하고 있네요.`,
    );
    await in_urara.say_as_unknown_and_wait(
      `룸메이트의 침대에서 끊임없이 들려오는 얼굴이 붉어지는 신음 소리는 마치 어떤 주문처럼, ${urara.sex}의 생각을 알 수 없는 어딘가로 계속 데려가고 있어요……`,
    );
    era.drawLine();
    await urara.print_and_wait(
      `침대 위에서 뒤척이며, ${urara.name}의 생각도 폭풍우 속의 작은 배처럼 머릿속 바다 위를 어지럽게 흔들리고 있었다.`,
    );
    await urara.print_and_wait(
      `이대로 눈을 감으면, 지난번처럼 말도 안 되는 꿈을 꿀 것만 같았다. 예를 들면 ${chara_self_name}에게 이런저런 짓을 하는 ${callname} 같은 꿈 말이다.`,
    );
    await urara.print_and_wait(
      `하지만 갈구하듯이 ${chara_self_name}를 덮치는 ${callname}는 조금 무섭긴 해도, 지금은 받아들여도 괜찮을 것 같다는 느낌이 들었다.`,
    );
    await urara.print_and_wait(
      `꿈속에서 ${callname}를 껴안고 있던 ${urara.get_uma_sex_title()}의 그 부끄러움 없는 표정도 그렇고, 나중에 ${chara_self_name}도…… 그런 파렴치한 「${urara.get_phy_sex_title()}」가 되어버리는 걸까?`,
    );
    await urara.print_and_wait(
      `그렇게 대등하게 서로 껴안고 있을 때, 그때의 ${callname}와 ${chara_self_name} 중 과연 누가 누구를 갈구하고 있었던 걸까……`,
    );
    await urara.print_and_wait(
      '안 돼 안 돼, 지금은 이런 이상한 생각을 할 때가 아니야! 빨리 자야 해!',
    );
    await urara.print_and_wait([
      `그럼 지금 가서 `,
      sys_get_colored_callname(52, 61),
      `에게 주의를 줘야 할까? 하지만 그랬다간 분명 화낼 테니, 역시 ${chara_self_name}가 조금 더 노력해 보는 게 낫겠어……`,
    ]);
    urara.print('으으…… 몸이 너무 뜨거워. 이불을 걷어차도 계속 뜨거워……');
    era.printButton('한 번만, 딱 한 번만 해보자…… (관계 진전)', 1);
    era.printButton('으음…… 그래도 역시 너무 졸려…… (관계 진전 보류)', 2);
    if ((await era.input()) === 1) {
      begin_and_init_ero(52);
      await urara.print_and_wait(
        `그러나 잠옷을 벗고 손을 ${
          urara.sex_code - 1 ? '비부로 뻗는' : '페니스에 대는'
        } 순간, ${urara.get_teen_sex_title()}의 가냘픈 몸은 이미 절정을 맞이할 준비를 마친 상태였다.`,
      );
      await urara.print_and_wait(
        `그저 살짝 건드렸을 뿐인데도, 어린 ${urara.get_uma_sex_title()}의 몸은 그 어느 때보다 격렬하게 반응하며 억제할 수 없는 물소리로 시트를 적셔버렸다.`,
      );
      await urara.print_and_wait(
        `입을 세게 틀어막아 소리가 새어 나가지 않게 하려 했지만, 끊이지 않는 떨림 속에서 ${callname}를 부르는 가냘픈 목소리는 뒤집어쓴 이불 아래로 살며시 빠져나갔다.`,
      );
      era.println();
      if (era.get('talent:52:유방사이즈') >= 1) {
        await urara.print_and_wait(
          '어느샌가 절정으로 인해 꼿꼿이 세워진 암컷의 살덩이에서도 참지 못하고 젖이 배어 나오고 있었다.',
        );
        await urara.print_and_wait([
          '몸에 힘이 하나도 들어가지 않는 와중에도 우유는 계속해서 유두를 타고 흘러나와, ',
          urara.get_teen_sex_title(),
          '의 잠옷을 흠뻑 적셨다.',
        ]);
        era.println();
        era.set('palam:52:가슴쾌감', era.get('tcvar:52:胸부快感上限') * 0.75);
      }
      await urara.print_and_wait(
        `몸에 이해할 수 없는 반응이 일어나자 ${chara_self_name}는 조금 당황했지만, 욕망은 여전히 몸의 절대적인 지배권을 쥐고 있었다.`,
      );
      await urara.print_and_wait(
        `손가락이 통제력을 잃고 깊숙이 파고들며 멈추지 않는 신음 소리가 터져 나오는 가운데, 어린 ${urara.get_uma_sex_title()}는 그 어느 때보다 누군가를 향한 애욕에 듬뿍 젖어 있었다.`,
      );
      await urara.print_and_wait(
        `마치 처음 발정을 경험한 새끼 짐승이 성체 수컷에게 정복당하기를 바라는 것처럼, ${chara_self_name}는 이불 밑에서 계속해서 허리를 비틀어댔다.`,
      );
      await urara.say_and_wait(
        `${callname}…… 으으…… ${callname}에게, 거칠게…… 이제 안 돼, 하아……`,
      );
      await urara.print_and_wait(
        `누군가에게 지배당하고 능욕당하는 망상이 밤새도록 이어진 것만 같아, ${chara_self_name}는 자신이 언제 잠들었는지조차 알 수 없었다.`,
      );
      await urara.print_and_wait(
        `그렇게 ${urara.get_teen_sex_title()}가 다시 눈을 떴을 때는, 이미 다음 날 아침 알람 소리가 울릴 때였다.`,
      );
      await urara.print_and_wait(
        '욕망을 발산한 덕분에 시트 상태가 좀 엉망인 것을 제외하면 이 밤은 의외로 평온하게 지나갔지만, 다만──',
      );
      await urara.say_and_wait(
        `잘은 모르겠지만…… ${callname}랑, 해보고 싶어…… 진짜로……`,
      );
      await urara.print_and_wait(
        `잠에서 깨어난 ${urara.get_teen_sex_title()}의 입가에서는 아쉬움 섞인 「파렴치한」 고백이 다시금 작은 소리로 새어 나오고 말았다……`,
      );
      era.println();
      await masturbate(52);
      end_ero_and_train();
      await sys_love_uma_in_event(52);
    } else {
      await urara.say_and_wait(`내일 또 ${callname}를 만나러 가야 하니까, 얼른 자야지……`);
      await urara.print_and_wait(
        `꿈틀거리는 몸을 억지로 참아내며 꼬리를 한쪽으로 힘껏 끌어당기고, 어린 ${urara.get_uma_sex_title()}는 힘들게 침대 위에서 몸을 뒤척였다.`,
      );
    }
    era.set('talent:52:성적성향', 1);
  }

  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 50(urara, me, callname) {
    const { in_urara, relation } = this.get_event_vars();
    await print_event_name('미숙한 물소리', urara);
    new UraraLifeMarks().fuck_buddy = 1;
    await in_urara.say_as_unknown_and_wait('별로 마주하고 싶지 않은 일이지만……');
    await in_urara.say_as_unknown_and_wait(
      '애욕의 보살핌 아래에서 풋풋한 과실은 결국 요염한 뱀의 사과로 익어가는 법이지요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '그렇다면, 이 달콤한 열매를 일찌감치 따버려야 할지 말지 고민이 되네요……?',
    );
    era.drawLine();
    await era.printAndWait([
      '기다려도 오지 않아 직접 찾아 나선 ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '가 숨어 있는 그림자를 어렵지 않게 찾아낼 수 있었다.',
    ]);
    await era.printAndWait([
      '눈 가리고 아웅 하듯, 얼굴이 새빨갛게 달아오른 ',
      urara.get_colored_name(),
      '는 작은 몸을 로비의 빛이 들지 않는 구석으로 힘껏 웅크리고 있었다.',
    ]);
    await era.printAndWait([
      '바로 벽 하나를 사이에 두고 있음에도, 수치스러운 쾌감에 빠져버린 어린 ',
      urara.get_uma_sex_title(),
      '는 ',
      me.get_colored_name(),
      '이(가) 이미 코앞까지 와 있다는 사실조차 깨닫지 못하고 있었다.',
    ]);
    await era.printAndWait(
      '단정하게 입고 있어야 할 옷가지는 어지럽게 몸에 걸쳐져 있을 뿐이었고, 미숙하고 민감한 부위는 아무런 가감 없이 공기 중에 노출되어 있었다.',
    );
    if (urara.sex_code - 1) {
      await era.printAndWait(
        '열 손가락은 몸의 음란한 구석구석을 열심히 탐색하며, 분홍빛 비부에서 끈적한 은사들을 끊임없이 끌어내고 있었다.',
      );
      await era.printAndWait([
        urara.get_teen_sex_title(),
        '의 음란한 물이 줄줄 흘러나와, 매끄러운 바닥 위에 배덕감 넘치는 욕망의 작은 물웅덩이를 만들고 있었다.',
      ]);
    }
    if (era.get('talent:52:유방사이즈') >= 1) {
      await era.printAndWait(
        '그리고 음란한 물과 함께 쏟아지는 것은, 금기시되고 때 이른 유백색 액체였다.',
      );
      await era.printAndWait(
        '꽉 조여져 있던 가슴 가리개는 젖혀져 있었고, 어린 몸에는 다소 어울리지 않는 팽팽한 가슴 한 쌍이 보는 이 앞에 노출되었다.',
      );
      await era.printAndWait(
        '가슴은 푹신하고 부드럽게 처져 있었고, 앞으로 툭 튀어나온 유륜과 유두에서는 통제할 수 없는 백색 액체가 분비되고 있었다.',
      );
      await era.printAndWait([
        urara.get_teen_sex_title(),
        '가 팔을 앞으로 모아 발정으로 떨리는 두 마리의 작은 괴물을 억지로 감싸 쥐려 했음에도, 유백색 물자국은 발치에 점점 더 쌓여만 갔다.',
      ]);
      await era.printAndWait(
        '부드럽고 예민해져 새로운 성기가 되어버린 자가 발전용 젖가슴은, 이 가냘픈 몸이 사실 이미 준비를 마쳤음을 알려주고 있었다──',
      );
      await era.printAndWait(
        '미래의 어느 순간 수유를 할 수 있도록, 그리고 꽉 조이는 아랫배가 새로운 아기집이 될 수 있도록……',
      );
    }
    await era.printAndWait([
      '지금의 ',
      urara.get_colored_name(),
      '는 마치 살찐 어린 토끼처럼, 매혹적인 약점들을 숨어 있는 포식자 앞에 전부 드러내고 있는 꼴이었다.',
    ]);
    await urara.say_and_wait([
      '으으…… ',
      callname,
      '…… ',
      me.actual_name,
      '…… 대체 어떻게 된 거야…… 너무 기분 좋아서, 멈출 수가 없어……',
    ]);
    await era.printAndWait([
      '정복욕을 자극하는 가냘픈 울음 섞인 목소리와 함께, ',
      urara.get_colored_name(),
      '는 연이은 거친 숨소리 속에서 ',
      me.get_colored_name(),
      '의 이름을 부르고 있었다.',
    ]);
    await era.printAndWait(
      '절대로 남에게 들켜서는 안 될 짓을 하고 있다는 것을 알면서도, 쾌락에 젖은 신음 소리를 억누르지 못했다.',
    );
    await era.printAndWait([
      '피어날 준비를 하는 ',
      urara.get_teen_sex_title(),
      '는 무력하면서도 기대 섞인 모습으로 보이지 않는 누군가에게 자신의 가장 수치스러운 모습을 보이고 있었다.',
    ]);
    if (relation > 150) {
      await urara.say_and_wait([
        me.sex,
        '가 기다리고 있을 텐데…… 분명 이러면 안 되는데, 만약 ',
        me.sex,
        '에게 들키기라도 하면, 안 돼……',
      ]);
      await era.printAndWait([
        '뇌까지 타버린 듯한 음란한 표정을 지은 채, ',
        urara.get_colored_name(),
        '는 물소리를 섞어가며 음탕하게 속삭였다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '는 지금 마치 무엇에 홀린 것처럼, 건드리기만 해도 터질 것 같은 예민한 몸을 계속해서 헤집어놓고 있었다.',
      ]);
      await urara.say_and_wait([
        '만약 ',
        callname,
        '에게 들키면, 만약 ',
        me.actual_name,
        '에게 들킨다면, 으으……',
      ]);
      await urara.say_and_wait('하고 싶어…… 하지만 안 돼…… 머리가 이상해질 것 같아──');
    } else {
      await urara.say_and_wait([
        '분명히, 다 알고 있는데…… ',
        callname,
        '는 그런 사람이라는 걸, 하지만, 아, 하아……',
      ]);
      await era.printAndWait([
        '정신은 거부하고 있었지만, 정욕에 빠져버린 어린 ',
        urara.get_uma_sex_title(),
        '는 스스로의 힘으로는 격렬하게 자위하는 손가락을 멈출 수 없었다.',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '의 두 다리는 밖으로 꺾여 대자로 벌어져 있었고, 등은 격렬한 쾌감으로 인해 한계까지 휘어 있었다.',
      ]);
      await urara.say_and_wait([
        '역시 난 아직…… ',
        urara.get_colored_name(),
        '는, 아직 ',
        callname,
        '를 믿고 싶어, ',
        me.actual_name,
        '을(를) 믿고 싶어……',
      ]);
      await urara.say_and_wait([
        '하지만…… 왜, 지금 ',
        callname,
        '를 떠올리기만 해도 몸이──',
      ]);
    }
    await era.printAndWait(
      '억제할 수 없는 절정의 외침과 함께, 작고 음란한 몸은 격렬한 절정을 맞이했다.',
    );
    await era.printAndWait([
      '실금하듯 뿜어져 나온 애액이 바닥을 적시고, 신발과 반쯤 벗겨진 스타킹을 적셨으며, ',
      urara.get_teen_sex_title(),
      '의 팬티와 속바지까지 흠뻑 적셔버렸다.',
    ]);
    await era.printAndWait([
      '욕망이 잠시 해소된 ',
      urara.get_colored_name(),
      '는 넋이 나간 채 구석에 기대어 있었고, 귀와 꼬리는 힘없이 처진 채 초점 없는 눈으로 어딘가를 멍하니 바라보고 있었다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      urara.sex,
      '가 서투르게 몸을 추스르려 할 때, 두 다리에 힘이 풀리는 바람에 어린 ',
      urara.get_uma_sex_title(),
      '는 결국 발치에 고인 차갑게 식어가는 액체 위로 주저앉고 말았다……',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 옷매무새가 흐트러진 채 당황하며 달려와 ',
      me.get_colored_name(),
      '와 합류했을 때는 이미 약속 시각을 한참 넘긴 뒤였지만, 이번에 ',
      me.get_colored_name(),
      '은(는) 다음부터 조심하라는 훈계조차 꺼낼 수 없었다.',
    ]);
    await era.printAndWait([
      '그 자리에서 당장 ',
      urara.get_colored_name(),
      '를 잡아먹고 싶은 욕망을 억누르기 위해 ',
      me.get_colored_name(),
      '은(는) 거의 모든 기력을 소진했고, 여전히 유혹적인 홍조가 가시지 않은 그 작은 얼굴을 똑바로 쳐다볼 엄두조차 나지 않았기 때문이었다.',
    ]);
    await era.printAndWait([
      '다만 시선을 둘 곳을 찾지 못하던 ',
      me.get_colored_name(),
      '은(는) 결국 보고야 말았다. 담당의 헝클어진 치마 아래, 젖어버린 팬티 가장자리를 따라 수정 같은 액체가 끊임없이 흘러나와 스타킹의 끝을 적시고 있는 것을……',
    ]);
    sys_change_lust(0, lust_from_palam * 2);
    sys_change_lust(52, lust_from_palam * 4);
    begin_and_init_ero(52);
    await masturbate(52);
    end_ero_and_train();
    era.set('flag:현재상호작용캐릭터', 52);
  }
};