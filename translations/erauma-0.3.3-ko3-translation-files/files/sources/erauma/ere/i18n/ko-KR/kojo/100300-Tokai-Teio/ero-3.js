// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100300-Tokai-Teio/ero-3"),

  // [번역 완료] ask_foot_job_with_hurt
  async ask_foot_job_with_hurt(teio, you, callname) {
    await teio.say_and_wait([
      '미안해……',
      callname,
      '、 이쪽으로는 힘이 되어줄 수 없겠네.',
    ]);
    await you.print_and_wait([
      '자책과 짜증이 뒤섞인 한숨이 귀에 닿자, 뭔가 잘못한 것 같은 기분이 든다.',
    ]);
    await you.say_and_wait(['그럼, 보상해 줄게.']);
    await you.print_and_wait([
      teio.sex,
      '이(가) 반응하기도 전에 발뒤꿈치를 살며시 받치고 매끄러운 피부를 손가락으로 쓰다듬으며 얼굴을 가까이 댄다.',
    ]);
    await teio.say_and_wait(['——！']);
    await you.print_and_wait([
      '손질과 세척을 마친 ',
      teio.uma_sex_title,
      '의 작은 발이 금세 뜨거워진다.',
    ]);
    await you.print_and_wait([
      '남몰래 웃으며 한 손을 아래로 뻗고 담당의 눈을 똑바로 바라보면서 ',
      teio.sex,
      '의 앞에서 그곳을 만지기 시작한다.',
    ]);
  },

  // [번역 완료] ask_tail_job
  async ask_tail_job(teio, you, is_first) {
    if (is_first) {
      await teio.say_and_wait(['큭…… 이런 건……']);
      await you.print_and_wait([
        '조금 별난 부탁일지도 모른다. 하지만 ',
        teio.sex,
        '은(는) 얼굴을 붉혔을 뿐 결국 응해 주었다……',
      ]);
      await you.print_and_wait(['게다가 무척 흥미로워 보인다.']);
      await you.print_and_wait([
        '매끄럽고 촉촉한 꼬리가 곧게 선 성기에 순식간에 감기고, 갑작스러운 자극에 하마터면 그대로 끝날 뻔한다.',
      ]);
      await teio.say_and_wait(['에헤헤……']);
      await you.print_and_wait([
        teio.sex,
        '의 눈이 반짝이고, 있는 힘껏 꼬리를 움직여 가장 민감한 곳을 자극한다.',
      ]);
    } else {
      await you.print_and_wait([
        '움직임이 거칠어지고 있다…… 아니, 능숙해지고 있다고 해야 하나.',
      ]);
      await teio.say_and_wait(['와아…… 젖어버렸네……']);
      await you.print_and_wait([
        '야릇한 액체로 끈적해진 꼬리는 털에 윤기를 내던 그 관리제와는 전혀 다른 것을 배워버린 모양이다.',
      ]);
      await you.print_and_wait(['게다가…… 그것뿐만이 아니다……']);
      await you.print_and_wait([
        '꼬리가 한 번 튀고 한 번 감긴다. 위로 늘어진 머리카락 다발까지 휘감아 이중 나선처럼 그곳을 조인다.',
      ]);
      await you.print_and_wait([
        '작은 ',
        teio.uma_sex_title,
        '은(는) 아직 눈치채지 못했다——꼬리샘에서 발정기의 사향 향까지 흘러나와 이 자리에 있는 생물의 욕망을 더욱 자극하고 있다는 것을.',
      ]);
      await you.print_and_wait(['호흡이 자신도 모르게 거칠어진다……']);
    }
  },

  // [번역 완료] lure
  async lure(teio, you, success) {
    await you.print_and_wait([
      '눈앞의 사랑스러운 존재를 보고 있자니 자연스럽게 ',
      teio.sex,
      '을(를) 품에 안고 머리카락을 만지며 머리를 쓰다듬고 있었다.',
    ]);
    await teio.say_and_wait('뭐야…… 또 어린애 취급……');
    if (success || era.get(`tcvar:${teio.id}:发情`) > 0) {
      await you.print_and_wait('그렇게 말하면서도…… 꼬리는 흔들리고 있다.');
      await you.print_and_wait('계속해 달라는 표정이다.');
    }
  },

  // [번역 완료] pet_anal
  async pet_anal(teio, you, callname) {
    if (Math.random() >= 0.5) {
      await you.print_and_wait([
        '매일의 관리와 사전의 꼼꼼한 세척을 마친 뒤, 사랑스럽고 깨끗한 작은 입구가 눈앞에 드러난다.',
      ]);
      await you.print_and_wait([
        '장난기가 솟아 손가락을 뻗어 이 은밀한 곳을 이리저리 쓰다듬고, 가끔은 잠긴 문을 억지로 열 듯 건드린다.',
      ]);
      await teio.say_and_wait(['앗…… 으응, ', callname, '！']);
      await you.print_and_wait(
        '……거부라기보다는 쾌감과 재촉이 뒤섞여 있다.',
      );
      await you.print_and_wait([
        '설마, 이 멋진 작은 ',
        teio.sex_code === 1 ? '王子' : '姫',
        '……거기가 민감한 건가?',
      ]);
    } else {
      await teio.say_and_wait(['으으……']);
      await you.print_and_wait([
        teio.sex,
        '에게는 이건 조금 비겁한 방식이다.',
      ]);
      await you.print_and_wait('하지만 지금은 그런 걸 신경 쓸 여유가 없다……');
      await you.print_and_wait('오히려 이래야 장난칠 보람이 있다.');
      await you.print_and_wait('보호구를 착용하고 살며시 문을 두드린다……');
    }
  },

  // [번역 완료] preg_report
  async preg_report(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 손에 든 보고서를 내려다보며 적힌 사실을 받아들이고 창가에 앉은 담당에게 고개를 든다.',
      ]);
      await era.printAndWait([
        '석양이 비스듬히 실내로 들어와 ',
        teio.sex,
        '이(가) 아랫배를 쓰다듬는 손에 닿고 힘없이 흔들리는 종아리에도 내려앉는다.',
      ]);
      await teio.say_and_wait(['트레이너…… 트레이너.']);
      await era.printAndWait([
        teio.sex,
        '은(는) 미소 지으며 자신의 배를 가리키고 ',
        you.get_colored_name(),
        '에게 손짓한다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 각오를 굳히고 그림자를 밟으며 다가간다.',
      ]);
      await era.printAndWait('두 사람은 가족이다.');
    } else {
      await teio.say_and_wait(['트레이너, 트레이너——']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무슨 일이 일어났는지 파악하기도 전에 황급히 달려오는 담당을 무의식적으로 두 팔로 받아 안고, 잠시 뒤에야 ',
        teio.sex,
        '이(가) 두 손에 들고 있는 서류의 의미를 이해한다.',
      ]);
      await era.printAndWait(['그런 거였구나……']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 시선을 내리고 ',
        teio.sex,
        '의 아랫배를 바라본다.',
      ]);
      await you.say_and_wait(['그곳이, ', teio.sex, '와(과) 나의……'], true);
      await era.printAndWait([
        you.get_colored_name(),
        '의 품 안에 있는 존재가 한 번 떨고 ',
        you.get_colored_name(),
        '은(는) 정신을 차려 담당의 두 눈과 마주한다.',
        teio.sex,
        '도 ',
        you.get_colored_name(),
        '을(를) 마주 바라보며 표정이 점차 차분하고 어른스러워진다.',
      ]);
      await era.printAndWait([
        '좋아, 하고 ',
        you.get_colored_name(),
        '은(는) 생각한다. 이제부터 세울 계획은 훈련만으로 끝나지 않을 것이다.',
      ]);
    }
  },

  // [번역 완료] prepare_anal
  async prepare_anal(teio, you) {
    await teio.say_and_wait(['……']);
    await you.print_and_wait([
      '얼굴이 새빨개진 ',
      teio.teen_sex_title,
      '은(는) 평소와 달리 한마디도 하지 않는다.',
    ]);
    await you.print_and_wait(['꼬리를 들어 올리고 그 은밀한 곳을 찬찬히 바라본다.']);
    await you.print_and_wait(['사랑스러운 엉덩이가 떨리고 옅고 깨끗한 구멍이 드러나 있다……']);
  },

  // [번역 완료] switch
  async switch(teio, you, callname) {
    await teio.say_and_wait([callname, '! 또 심술 부렸지——']);
    await you.print_and_wait([
      '볼을 부풀린 작은 우마를 보고 웃으며 두 손으로 ',
      teio.sex,
      '의 부드러운 어깨를 잡고 빙글 들어 올린다……',
    ]);
    await teio.say_and_wait('응?');
    await you.print_and_wait('천지가 거꾸로 뒤집힌다……');
    await you.say_and_wait('이제부터는 네 차례야.');
    await you.print_and_wait('아직 멍한 담당에게 짓궂게 말한다.');
    await you.say_and_wait([
      '테이오 선생님, ',
      you.actual_name,
      ' 군은 가르침을 받을 준비가 됐습니다.',
    ]);
  },

  // [번역 완료] talk_with_hurt
  async talk_with_hurt(teio, you, call_t) {
    await teio.say_and_wait('……');
    await you.say_and_wait('……');
    await you.print_and_wait(
      '욕망에 불이 붙어도 말은 필요 없다. 서로 끌어안고 귀를 만지며 입술과 숨결만으로 마음을 나눈다.',
    );
    await you.print_and_wait([
      teio.sex,
      '의 피부에 닿을 때마다 ',
      call_t,
      '의 몸이 순간 긴장하며 자신을 붙잡아 밀착한 시간을 조금이라도 늘리려 한다.',
    ]);
  },
};
