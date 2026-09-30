const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalMakingOuts = require('#/event/ero/common/normal/making-outs-final');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends EroNormalMakingOuts {
  async pet_breast(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.pet_breast(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.pet_breast) {
        life_marks.pet_breast = 1;
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 등 뒤에 밀착하여 ',
          defender.sex,
          '의 몸을 품에 안으며, ',
          defender.sex,
          '의 풍만한 가슴이 ',
          attacker.get_colored_name(),
          '의 팔뚝 위에 얹히는 무게감을 느꼈다.',
        ]);
        await attacker.print_and_wait([
          defender.get_teen_sex_title(),
          '는 ',
          attacker.get_colored_name(),
          '의 품 안에서 가쁘게 숨을 몰아쉬며, ',
          defender.sex,
          '의 가슴 아래에 밀착된 팔에 천천히 몸을 비벼댔다.',
        ]);
        await defender.say_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          '…… 괜찮아…… 만지고 싶다면.',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 몸이 ',
          attacker.get_colored_name(),
          '의 품 안에서 미세하게 떨렸고, ',
          defender.sex,
          '의 피부에는 흥분으로 인해 얇게 땀이 배어 나왔다.',
        ]);
      }
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '의 손바닥이 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가슴을 덮어 누르자, ',
        defender.sex,
        '는 참지 못하고 짧은 신음을 내뱉었다.',
      ]);
      await defender.say_and_wait([
        '아으…… ',
        sys_get_colored_callname(defender.id, attacker.id),
        '……',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 가슴은 풍만하고 탄력이 넘쳤으며, 유륜은 흥분으로 인해 넓어지고 끝부분은 잘 익은 체리처럼 바짝 서 있었다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 작게 교성을 지르며, ',
        defender.sex,
        '의 몸을 무의식적으로 ',
        attacker.get_colored_name(),
        '에게 바짝 밀착시켰다.',
      ]);
      await attacker.print_and_wait([
        '손바닥이 계속해서 ',
        defender.sex,
        '의 가슴 위를 노닐며, ',
        defender.sex,
        '의 피부의 부드러움과 온기를 만끽했다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸은 이런 애무 속에서 점점 더 민감해졌고, 손길이 닿을 때마다 ',
        defender.sex,
        '는 온몸을 떨었다.',
      ]);
    } else {
      await attacker.print_and_wait([
        '손가락으로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 유두를 잡아 가볍게 잡아당기자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 깜짝 놀라 비명을 질렀다.',
      ]);
      await defender.say_and_wait([
        '앗! ',
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 너무…… 세게 하지는 마……',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 목소리에는 수줍음이 섞여 있었지만, 몸은 정직하게 반응하며 조건반사적으로 움찔거렸다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 유두는 더욱 단단해지며, 마치 더 많은 애무를 갈구하는 듯했다.',
      ]);
    }
  }

  async prepare_anal(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.prepare_anal(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.prepare_anal) {
        life_marks.prepare_anal = 1;
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 침대 위에 엎드려 엉덩이를 높게 치켜들었고, ',
          attacker.get_colored_name(),
          '의 손바닥이 ',
          defender.sex,
          '의 엉덩이에 부드럽게 닿자 몸을 크게 떨었다.',
        ]);
        await defender.say_and_wait(['정말로? 여기…… 아주…… 지저분할 텐데.']);
        await attacker.print_and_wait([
          '손가락이 서서히 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 엉덩이 사이 골짜기를 타고 내려가, 굳게 닫힌 구멍 주변의 주름을 더듬자, ',
          defender.sex,
          '는 천천히 몸을 비틀었다.',
        ]);
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          '의 손가락 끝이 그 민감한 입구를 가볍게 누르자 입구가 움찔하며 조여들었고, 동시에 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 비명이 새어 나왔다.',
        ]);
        await defender.say_and_wait(['우윽! ……']);
      }
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) 몸을 숙여 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 뒷덜미에 가볍게 입을 맞추며, ',
        defender.sex,
        '의 긴장을 풀어주려 애썼다.',
      ]);
      await attacker.print_and_wait([
        '그리고 ',
        defender.sex,
        '의 엉덩이를 벌려 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 민감하고 귀여운 후혈을 공기 중에 노출시키자, 구멍은 계속해서 움찔거렸다.',
      ]);
      await defender.say_and_wait(['안 돼…… 보지 마…… 부끄러워 죽겠어……']);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '이 천천히 손가락 하나를 밀어 넣자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸이 크게 튀어 올랐고 후혈은 본능적으로 수축하며 침입한 손가락을 꽉 물었다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 뺨은 터질 듯이 붉게 달아올랐고, 수치심과 쾌감이 뒤섞인 감정에 ',
        defender.sex,
        '는 어찌할 바를 몰라 했다.',
      ]);
    } else {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) 인내심 있게 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 국문을 확장시켰고, 한 단계마다 조심스럽게 움직였다. ',
        defender.sex,
        '는 아랫입술을 깨물며 몸을 이완시키려 노력했다.',
      ]);
      await defender.say_and_wait(['으응……']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 더 이상 목구멍에서 새어 나오는 소리를 숨기지 않았고, ',
        attacker.get_colored_name(),
        '의 손가락 움직임에 맞춰 천천히 허리를 흔들었다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 후혈은 ',
        attacker.get_colored_name(),
        '의 손가락이 어루만지는 대로 조금씩 벌어졌고, 마치 더 큰 침입을 기대하는 듯 보였다……',
      ]);
    }
  }

  async cunnilingus(attacker, defender, hook) {
    if (defender.id !== 64 || !hook.arg) {
      return await super.cunnilingus(attacker, defender, hook);
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.cunnilingus) {
      life_marks.cunnilingus = 1;
      await defender.say_and_wait(['보지 마…… 더 이상 보지 말아줘.']);
      await attacker.print_and_wait([
        '그렇게 말하면서도 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 그저 두 눈을 가린 채, ',
        attacker.get_colored_name(),
        '이 ',
        defender.sex,
        '의 가랑이 사이를 살피고 만지작거리는 것을 내버려 두었다.',
      ]);
      await attacker.print_and_wait([
        '깔끔하게 정리된 밤색 음모 아래, 애액으로 젖어든 분홍빛 음핵이 은은하게 빛나고 있었다.',
      ]);
      await attacker.print_and_wait([
        '약간 짙은 색의 음순 사이로 흥분하여 부풀어 오른 살결이 꽃잎처럼 벌어져 있었고, 이는 이미 성숙을 향한 첫걸음을 내디딘 듯한 모습이었다.',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '의 기척을 느낀 것인지, 꽃봉오리가 미세하게 떨리며 은은한 암컷의 향기를 풍겼다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 두 다리는 무의식적으로 오므려지려 했으나, 닿는 순간 모든 힘을 잃고 살짝 밀어내자 다시 얌전하게 옆으로 벌어졌다.',
      ]);
    }
    await attacker.print_and_wait([
      defender.get_teen_sex_title(),
      '의 꽃잎을 벌리고, ',
      attacker.get_colored_name(),
      '은(는) 붉게 달아오른 음핵을 혓바닥으로 훑은 뒤, 그 돌기 위에서 혀끝을 굴렸다.',
    ]);
    await defender.say_and_wait(['안 돼…… 아…… 으응……']);
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '는 ',
      attacker.get_colored_name(),
      '의 머리를 눌러 밀어내려 했지만, 두 다리는 이미 단단히 붙잡혀 있었기에 그저 얼굴을 가린 채 흐느낄 뿐이었다.',
    ]);
    await attacker.print_and_wait([
      defender.sex,
      '의 허리가 위아래로 움찔거렸는데, 이것이 도망치려는 것인지 아니면 무의식적으로 ',
      attacker.get_colored_name(),
      '의 입놀림에 영합하는 것인지 알 수 없었다.',
    ]);
  }

  async ask_blow_job(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.ask_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.ask_blow_job) {
        life_marks.ask_blow_job = 1;
        await defender.say_and_wait(['킁…… 킁킁.']);
        await attacker.print_and_wait([
          '처음으로 구강 성교를 허락한 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '는 ',
          attacker.get_colored_name(),
          '의 다리 사이에 무릎을 꿇고, 코끝으로 성기 끝을 살짝 건드리며 냄새를 맡아 긴장을 가라앉히려 애썼다.',
        ]);
        await attacker.print_and_wait([
          defender.get_teen_sex_title(),
          '의 콧김이 핏줄이 곤두선 뿌리 부분을 스치자, 쾌감이 척수를 타고 머리끝까지 전해졌다……',
        ]);
        await defender.say_and_wait(['시…… 시작할게. 혹시라도 아프면 말해줘.']);
        await attacker.print_and_wait([
          defender.sex,
          '는 옆머리를 귀 뒤로 넘긴 뒤, 민감한 끝부분을 입술로 받아들여 키스하듯 앞뒤로 빨아올렸다.',
        ]);
        await attacker.print_and_wait([
          '따뜻하고 부드러운 감촉이 귀두부터 앞부분을 덮어왔고, 가끔 이빨이 껍질에 스칠 때마다 더욱 강렬한 전율이 온몸으로 퍼져나갔다……',
        ]);
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          '은(는) ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 한쪽 손을 잡아 격려해주었고, 다른 한 손으로는 앞머리를 걷어내어 ',
          defender.sex,
          '의 붉게 달아오른 예쁜 얼굴을 감상했다.',
        ]);
        await attacker.print_and_wait([
          '무척이나 부끄러워하면서도 ',
          defender.sex,
          '는 ',
          attacker.get_colored_name(),
          '과(와) 눈을 맞추려 노력했고, 그 눈동자에는 숨길 수 없는 욕망과 갈구함이 서려 있었다……',
        ]);
      }
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '의 요청에 따라, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 입술과 혀로 귀두를 애무한 뒤, 앞부분을 입안 가득 머금고 빨아들였다.',
      ]);
      await attacker.print_and_wait([
        '젖고 따뜻한 구강에 감싸인 성기 끝에서 쿠퍼액과 침이 섞여, ',
        defender.get_teen_sex_title(),
        '의 입술 사이로 외설적인 물소리가 울려 퍼졌다.',
      ]);
      await attacker.print_and_wait(['「츕, 츄릅.」']);
      await attacker.print_and_wait([
        '앞머리 사이로 보이는 벽람색 눈동자가 ',
        attacker.get_colored_name(),
        '의 반응을 살피며, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 천천히 입놀림의 템포를 바꾸기 시작했다.',
      ]);
    } else {
      await defender.say_and_wait(['으응, 읍.']);
      await attacker.print_and_wait([
        '머리를 살짝 누르는 것만으로도 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 순종적으로 눈을 감고 봉사하며, 때때로 목구멍에서 가느다란 교성을 흘렸다.',
      ]);
      await attacker.print_and_wait([
        '액체가 ',
        defender.sex,
        '의 아랫입술을 타고 가슴까지 흘러내렸지만, 그것은 오히려 ',
        defender.sex,
        '의 얼굴에 홍조를 더할 뿐이었다.',
      ]);
      await attacker.print_and_wait([
        '사정감이 파도처럼 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 움직임에 따라 하반신에서 소용돌이쳤고, 이대로라면……',
      ]);
    }
  }

  async ask_deep_blow_job(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.ask_deep_blow_job(attacker, defender, hook);
    }
    if (hook.arg) {
      await defender.say_and_wait(['좋아, 위에서부터…… 이제 나한테 맡겨줘.']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 무릎을 꿇고 앉아 고개를 치켜들고, 혀를 내밀어 ',
        attacker.get_colored_name(),
        '의 삽입을 맞이했다. 타액으로 가득 찬 구강 내부가 훤히 들여다보였다.',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '이 몸을 굽혀 천천히 깊숙이 밀어 넣자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 코끝이 숲속에 파묻혔고, 식도의 조여드는 감촉에 ',
        attacker.get_colored_name(),
        '의 하반신이 저릿해졌다.',
      ]);
      await attacker.print_and_wait([
        '구역질이 날 정도로 자극이 심한 것인지, 피스톤질을 할 때마다 식도관이 수축하는 것이 느껴졌지만 그것이 오히려 흥분을 돋우었다.',
      ]);
      await attacker.print_and_wait([
        '눈가에 눈물이 맺혔음에도 불구하고, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 ',
        attacker.get_colored_name(),
        '의 허리를 붙잡고 순종적으로 ',
        attacker.get_colored_name(),
        '의 움직임에 맞추었다.',
      ]);
    } else {
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 ',
        attacker.get_colored_name(),
        '의 허리를 지탱 삼아, 입안과 식도에 완전히 감싸인 육봉을 위아래로 짜내듯 움직였다.',
      ]);
      await attacker.print_and_wait([
        '입가에서 넘쳐흐른 액체가 아랫입술과 고환 사이에 은색 실을 만들며, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가슴팍을 엉망으로 적셔놓았다.',
      ]);
      await attacker.print_and_wait([
        '빨리 끝내고 싶은 것인지, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '은(는) 점차 속도를 높였고, 애써 참으려던 신음과 거친 숨소리가 점점 더 흐트러져 갔다……',
      ]);
    }
  }

  async sixty_nine(attacker, defender, hook) {
    if (
      defender.id !== 64 ||
      !hook.arg ||
      attacker.sex_code === 0 ||
      defender.sex_code === 1
    ) {
      return await super.sixty_nine(attacker, defender, hook);
    }
    const life_marks = new PamaEduMarks();
    if (!life_marks.sixty_nine) {
      life_marks.sixty_nine = 1;
      await defender.say_and_wait([
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 이 자세는 너무 부끄러워……',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) 평평하게 누운 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 머리 위에 올라타 팽창한 음경을 ',
        defender.sex,
        '의 얼굴 앞에 두고, 동시에 자신의 얼굴을 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 가랑이 사이에 묻었다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 음순을 살짝 벌려 안쪽의 분홍빛 속살을 드러낸 뒤, 혀를 내밀어 핥음과 동시에 허리를 낮게 가라앉혔다.',
      ]);
      await defender.say_and_wait(['잠…… 잠깐만! …… 읍.']);
      await attacker.print_and_wait([
        '갑작스러운 상황에 당황하면서도 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 ',
        attacker.get_colored_name(),
        '의 귀두를 입에 물고, 서툰 솜씨로 기둥을 핥기 시작했다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 신음소리는 목구멍에 막혀 불분명한 콧소리로 변했다.',
      ]);
      await attacker.print_and_wait([
        '반면 ',
        attacker.get_colored_name(),
        '은(는) 혀를 ',
        defender.sex,
        '의 음순 위로 왕복시키고, 혀끝을 안으로 밀어 넣어 ',
        defender.get_teen_sex_title(),
        '의 맛을 음미했다.',
      ]);
      await attacker.print_and_wait([
        '자극이 가해질 때마다 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸은 격렬하게 떨렸고, 거의 숨이 넘어갈 듯한 ',
        defender.sex,
        '가 ',
        attacker.get_colored_name(),
        '을(를) 밀어냈다.',
      ]);
      await defender.say_and_wait([
        '하아…… 하아…… 미안해, ',
        sys_get_colored_callname(defender.id, attacker.id),
        '…… 다시 한번만 더 해줄 수 있을까?',
      ]);
    }
    await attacker.print_and_wait([
      sys_get_colored_callname(attacker.id, defender.id),
      '는 필사적으로 정신을 집중하며 눈앞의 음경을 입에 머금고, 하반신을 핥아주는 ',
      attacker.get_colored_name(),
      '의 리듬에 맞추려 노력했다.',
    ]);
    await attacker.print_and_wait([
      defender.sex,
      '는 고환을 손으로 쥐고 부드럽게 주무르며, 혀로 기둥을 위아래로 훑고 가끔 혀끝으로 요도 끝을 자극했다.',
    ]);
    await defender.say_and_wait(['으으…… 읍……']);
    await attacker.print_and_wait([
      '자극을 받은 ',
      attacker.get_colored_name(),
      '은(는) 혀를 ',
      defender.sex,
      '의 음순 사이로 유영시키며, 때로는 얕게 때로는 꽃길 깊숙이 파고들었다.',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '들은 서로의 리듬을 찾아가며, 낮은 신음과 외설적인 물소리 속에서 쾌감의 고조와 헌신에 푹 빠져들었다.',
    ]);
  }

  async ask_foot_job(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.ask_foot_job(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.ask_foot_job) {
        life_marks.ask_foot_job = 1;
        await defender.say_and_wait([
          '발…… 발로 하는 거야? ',
          sys_get_colored_callname(defender.id, attacker.id),
          '는 이런 걸 좋아하는구나……',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 그 맨발을 ',
          attacker.get_colored_name(),
          '에게 내밀었다. ',
          defender.sex,
          '의 발바닥은 옥처럼 하얗고 매끄러웠으며, 피부의 마디마디마다 유혹적인 광택이 돌았다.',
        ]);
        await attacker.print_and_wait([
          '발가락은 둥글고 귀여웠으며 발톱은 적당히 손질되어 연한 분홍빛을 띠고 있었고, 지금은 조금 긴장한 듯 꼼지락거리고 있었다.',
        ]);
        await defender.say_and_wait([
          '메지로 가문에는 매일 발 관리를 해주는 분들이 계셔서 좀 번거롭다고 생각하긴 했지만…… 잠깐, ',
          sys_get_colored_callname(defender.id, attacker.id),
          '?',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 발목을 붙잡고, ',
          attacker.get_colored_name(),
          '은(는) 코끝을 ',
          defender.sex,
          '의 발가락 사이에 묻고 들이켰다. 바디워시의 향기가 콧속을 가득 채웠다.',
        ]);
        await defender.say_and_wait(['더…… 더 맡아도 냄새 같은 건 안 날 텐데, 정말…… 아우, 간지러워!']);
      }
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '이 코를 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 매끈한 발바닥에 대고 체취를 확인하자, 하반신은 마치 스위치를 켠 것처럼 바로 팽창했다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 깊게 숨을 들이마시고, 천천히 두 발을 ',
        attacker.get_colored_name(),
        '의 발기한 음경에 가까이 가져가 발바닥이 민감한 피부에 닿게 했다.',
      ]);
      await defender.say_and_wait(['뜨거워…… 자…… 움직일게.']);
      await attacker.print_and_wait([
        defender.sex,
        '의 둥근 발가락은 때때로 귀두를 가볍게 스치고, 때로는 기둥을 문질렀으며, 발꿈치는 ',
        attacker.get_colored_name(),
        '의 고환에 밀착되어 천천히 압박을 가했다.',
      ]);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) ',
        defender.sex,
        '의 발목을 잡아 유도했고, 비록 서툰 마찰일 뿐이었지만 마치 마법처럼 ',
        attacker.get_colored_name(),
        '을(를) 흥분시켰다.',
      ]);
    } else {
      await defender.say_and_wait(['하아…… 하아……']);
      await attacker.print_and_wait([
        '흥분과 다리의 움직임 때문에 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 숨결은 몹시 거칠어졌고, 얼굴은 홍조로 가득 찼으며 가슴은 움직임에 따라 출렁였다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 두 발바닥이 만든 공간에 ',
        attacker.get_colored_name(),
        '의 육봉을 끼워 넣고 위아래로 비벼대자, 쿠퍼액이 ',
        defender.sex,
        '의 발가락 사이로 흘러내렸다.',
      ]);
      await attacker.print_and_wait([
        '다리 너머로 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '와 눈이 마주쳤으나, 아주 잠시뿐이었고 ',
        defender.sex,
        '는 바로 고개를 돌리며 눈을 감았다. 수치심 속에서 갈등하고 있는 듯한 모습이었다.',
      ]);
    }
  }
};