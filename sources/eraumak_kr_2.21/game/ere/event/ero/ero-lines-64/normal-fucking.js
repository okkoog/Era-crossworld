const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const EroNormalFucking = require('#/event/ero/common/normal/fucking');

const PamaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-64');

module.exports = class extends EroNormalFucking {
  async missionary(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.missionary(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.missionary) {
        life_marks.missionary = 1;
        await attacker.print_and_wait([
          '무릎을 잡고 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 두 다리를 벌리자, ',
          defender.sex,
          '의 음란한 모습이 ',
          attacker.get_colored_name(),
          '의 눈앞에 고스란히 드러났다.',
        ]);
        await attacker.print_and_wait([
          '이 순간, ',
          defender.get_teen_sex_title(),
          '의 몸 모든 부분은 마치 교미를 위해 태어난 것만 같았다. 풍만함이 넘치는 가슴은 물론, 군침을 흘리는 듯한 비소까지.',
        ]);
        await attacker.print_and_wait([
          '정성스럽게 관리된 분홍빛 발바닥, 향기를 풍기는 목덜미, 그리고 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '가 자랑하는 허리조차 풍만하고 육감적으로 보였다.',
        ]);
        await defender.say_and_wait([
          '그렇게 자세히 보지 마...',
          sys_get_colored_callname(defender.id, attacker.id),
          '.',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 부끄러운 듯 얼굴을 가리면서도, 손가락 사이로 ',
          attacker.get_colored_name(),
          '의 반응을 훔쳐보았다.',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '의 손을 치우고 손가락을 맞잡자, ',
          sys_get_colored_callname(attacker.id, defender.id),
          '는 ',
          attacker.get_colored_name(),
          '를 보며 살짝 놀란 눈치를 보이더니, 이내 이해했다는 듯 미소를 지었다.',
        ]);
        await defender.say_and_wait(['괜찮아... 들어와 줘, 여기로.']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '가 손가락으로 음순을 벌리고, ',
          defender.sex,
          '의 유도에 따라 ',
          attacker.get_colored_name(),
          '이(가) 천천히 밀고 들어갔다...',
        ]);
      }
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 두 무릎을 누르고, 가장 깊숙이 삽입할 수 있는 자세로 따뜻하고 젖은 통로에 진입해 정면으로 결합을 시작했다...',
      ]);
      await defender.say_and_wait(['으응, 읏, 하아...']);
      await attacker.print_and_wait([
        defender.get_teen_sex_title(),
        '의 참지 못한 신음소리가 삽입이 반복될 때마다 터져 나왔고, 두 풍만한 가슴도 그에 맞춰 자유분방하게 흔들렸다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 안정감을 갈구하듯, 혹은 정사 상대를 확인하듯 ',
        attacker.get_colored_name(),
        '의 손을 꽉 잡았고, 열 손가락은 ',
        attacker.get_colored_name(),
        '과(와) 단단히 맞물렸다.',
      ]);
      await defender.say_and_wait([
        '으응...',
        sys_get_colored_callname(defender.id, attacker.id),
        '...하아, 으읏...',
      ]);
    } else {
      await attacker.print_and_wait([
        '육체끼리 부딪히는 소리에 애액이 섞이는 소리가 더욱 격렬해졌고, 억누를 수 없는 신음이 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 입술 사이로 흘러나왔다.',
      ]);
      await defender.say_and_wait(['하아, 앗, 아, 아으응.']);
      await attacker.print_and_wait([
        '결합 부위는 서로 섞인 체액으로 엉망진창이 되었고, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '도 더 이상 얼굴을 가리지 않은 채, 쾌락에 젖은 ',
        defender.get_teen_sex_title(),
        '의 표정을 가감 없이 드러냈다.',
      ]);
    }
  }

  async doggy_style(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.doggy_style(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.doggy_style) {
        life_marks.doggy_style = 1;
        await defender.say_and_wait(['뒤에서? ...괜찮아.']);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '는 침대에 엎드려 고양이처럼 상체를 낮추고, 유혹적인 커다란 엉덩이를 ',
          attacker.get_colored_name(),
          '에게 내맡겼다.',
        ]);
        await attacker.print_and_wait([
          '역시 조금은 부끄러운지, 꼬리가 다리 사이로 늘어져 국부를 가리고 있었다.',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '의 부드럽고 탄력 있는 엉덩이 살에 손가락을 파묻고, 주무르면서 가벼운 칭찬으로 ',
          defender.sex,
          '의 긴장을 풀어주었다.',
        ]);
        await defender.say_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          '는 너무 밝힌다니까... 엉덩이... 뭐, 안 되는 건 아니지만...',
        ]);
        await attacker.print_and_wait([
          '나른한 목소리와 함께 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '는 자신도 모르게 엉덩이를 흔들었고, 일렁이는 꼬리 뒤편으로 비소가 언뜻언뜻 보였다.',
        ]);
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          '의 근부가 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 가랑이에 밀착되자, ',
          defender.sex,
          '는 무의식적으로 신음하며 등을 굽혔다.',
        ]);
        await attacker.print_and_wait([
          '자신의 치부를 숨김없이 ',
          attacker.get_colored_name(),
          '에게 보이며, 매끄러운 입구로 끝부분을 애태우듯 자극했다.',
        ]);
      }
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이를 붙잡고, ',
        attacker.get_colored_name(),
        '이(가) 천천히 깊숙한 곳까지 밀어 넣자 ',
        defender.sex,
        '의 허벅지가 ',
        attacker.get_colored_name(),
        '의 허리에 밀착되었다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '는 시트를 꽉 쥐고 얼굴을 베개에 묻은 채 나직이 신음했고, 커다란 가슴이 몸 아래에 눌렸다.',
      ]);
      await defender.say_and_wait(['으응... 윽... 아흥...']);
      await attacker.print_and_wait([
        '음란한 마찰음이 방 안에 울려 퍼졌고, 결합 부위에서 흘러나온 액체가 ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 다리 사이 시트로 끊임없이 떨어졌다.',
      ]);
    } else {
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '은(는) ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이를 거침없이 몰아붙이며, 살벽이 조여들고 빨아들이는 감각을 만끽했다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 약간 경직되어 있던 허리가 완전히 아래로 가라앉으며, ',
        attacker.get_colored_name(),
        '이(가) ',
        defender.sex,
        '의 가장 민감한 곳을 몇 번이고 탐험하도록 부추겼다.',
      ]);
      await defender.say_and_wait([
        '으응... 아흥...',
        sys_get_colored_callname(defender.id, attacker.id),
        '...오... 으으응...',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 허벅지가 ',
        attacker.get_colored_name(),
        '의 리듬에 맞춰 파도치듯 출렁였고, 쾌락에 침잠한 ',
        defender.sex,
        '는 발가락을 잔뜩 폈다.',
      ]);
    }
  }

  async sitting(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.sitting(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.sitting) {
        life_marks.sitting = 1;
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          '과(와) ',
          sys_get_colored_callname(attacker.id, defender.id),
          ' 두 사람은 마주 앉아 호흡을 섞었고, 서로의 격렬한 심장 고동을 느꼈다.',
        ]);
        await defender.say_and_wait(['너무 가까워... 조금... 부끄러울지도.']);
        await attacker.print_and_wait([
          '그렇게 말하면서도, ',
          sys_get_colored_callname(attacker.id, defender.id),
          '는 ',
          attacker.get_colored_name(),
          '의 팔을 붙잡고 참지 못하겠다는 듯 거리를 좁혀, ',
          attacker.get_colored_name(),
          '의 발기한 성기를 아랫배에 밀착시켰다.',
        ]);
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          '의 다리 위에 실린 ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 무게를 느끼는 동안, ',
          defender.sex,
          '의 딱딱해진 유두가 ',
          attacker.get_colored_name(),
          '의 가슴을 비벼댔다.',
        ]);
        await defender.say_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          '...벌써 기다릴 수 없게 됐어... 헤헤.',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '가 더 가까이 다가와 ',
          attacker.get_colored_name(),
          '의 근부를 다리 사이에 밀착시키자, ',
          defender.sex,
          '의 그 희박한 숲이 위의 모든 신경을 간지럽혔다.',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '는 천천히 허리를 비틀며 다음 이어질 정사를 위해 예열하듯 두 다리로 ',
          attacker.get_colored_name(),
          '의 허리를 감싸 안았다.',
        ]);
        await defender.say_and_wait(['하아... 이렇게 하는 거지?...']);
      }
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 허리를 붙잡고, ',
        attacker.get_colored_name(),
        '은(는) ',
        defender.sex,
        '를 위에서부터 천천히 내려앉도록 유도했다. 입구에 조준되었을 때, ',
        defender.sex,
        '의 몸이 ',
        attacker.get_colored_name(),
        '의 손안에서 팽팽하게 긴장했다.',
      ]);
      await defender.say_and_wait(['아...!']);
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '의 음경이 깊숙이 파고들자, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '는 짧은 신음을 내뱉었고, ',
        defender.sex,
        '는 미간을 찌푸리며 가득 채워지는 감각에 적응하려 애썼다.',
      ]);
      await attacker.print_and_wait([
        '잠시 후, ',
        defender.sex,
        '는 ',
        attacker.get_colored_name(),
        '의 어깨에 손을 얹고 허리를 움직이기 시작했다. 뜨겁고 좁은 내부의 벽이 움직임에 따라 꿈틀거리며 극상의 쾌락을 가져다주었다.',
      ]);
      await defender.say_and_wait(['으응... 읏... 아흥...']);
    } else {
      await attacker.print_and_wait([
        '젖어있는 통로가 삽입 리듬에 맞춰 끊임없이 수축했고, 숨 막히는 쾌락이 전신을 훑고 지나갔다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 몸은 ',
        attacker.get_colored_name(),
        '의 매번의 추동에 맞춰 팽팽하게 당겨진 거문고 줄처럼 떨렸다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 두 손은 ',
        attacker.get_colored_name(),
        '의 어깨를 꽉 쥐었고, 손가락 끝이 살에 깊게 파고들어 붉은 흔적을 남겼다.',
      ]);
      await defender.say_and_wait([
        '아... 아응...',
        sys_get_colored_callname(defender.id, attacker.id),
        '...아... 으으응...',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 엉덩이가 ',
        attacker.get_colored_name(),
        '의 고환을 몇 번이고 압박하며, 마치 ',
        attacker.get_colored_name(),
        '에게 사정을 재촉하는 듯했다.',
      ]);
    }
  }

  async hug_standing(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.hug_standing(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.hug_standing) {
        life_marks.hug_standing = 1;
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '의 유혹적인 허리와 엉덩이를 보며, ',
          attacker.get_colored_name(),
          '은(는) 자신도 모르게 두 팔을 벌렸다.',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '의 모든 곡선을 손가락 끝으로 그려보려 애썼고, 그로 인해 흥분 섞인 멍한 상태에 빠져들었다.',
        ]);
        await defender.say_and_wait([
          sys_get_colored_callname(defender.id, attacker.id),
          '...그만 만져...',
        ]);
        await attacker.print_and_wait([
          '정신을 차렸을 때, ',
          attacker.get_colored_name(),
          '이(가) ',
          sys_get_colored_callname(attacker.id, defender.id),
          '의 엉덩이 사이에 대고 있던 물건은 이미 딱딱하게 서 있었다.',
        ]);
        await attacker.print_and_wait([
          '눈앞의 미인은 괴로운 듯 허리를 비틀었고, 꼬리는 애액이 배어 나온 끝부분을 자극하듯 앞뒤로 살랑거렸다.',
        ]);
      }
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 허리를 꽉 붙잡고, 뒤에서 밀착한 채 ',
        defender.get_teen_sex_title(),
        '의 비혈로 진입했다.',
      ]);
      await defender.say_and_wait([
        '아아~ ',
        sys_get_colored_callname(defender.id, attacker.id),
        '...',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 목소리에 미세한 떨림이 섞였고, 꼬리는 무의식적으로 ',
        attacker.get_colored_name(),
        '의 팔을 휘감았다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 밀혈은 침입물을 꽉 조여 물었고, 내부의 주름은 완전히 펴졌다.',
      ]);
      await attacker.print_and_wait([
        '그 풍만한 가슴은 움직임에 따라 앞뒤로 흔들렸고, 돌기처럼 선 유두는 ',
        attacker.get_colored_name(),
        '의 손바닥을 자극했다.',
      ]);
    } else {
      await defender.say_and_wait(['아아, 아응, 아...']);
      await attacker.print_and_wait([
        '성교가 계속됨에 따라, ',
        attacker.get_colored_name(),
        '은(는) 손에 느껴지는 무게가 점점 무거워짐을 느꼈다.',
      ]);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '의 두 다리는 쉴 새 없이 떨려 자신의 몸무게조차 지탱하기 힘들어 보였지만, 그럼에도 뒤로 몸을 밀착하며 ',
        attacker.get_colored_name(),
        '의 동작에 응했다.',
      ]);
      await attacker.print_and_wait([
        '두 사람의 체액이 결합 부위에서 은색 실을 그리며 흘러내려 바닥에 물웅덩이를 만들었다.',
      ]);
    }
  }

  async ask_cowgirl(attacker, defender, hook) {
    if (defender.id !== 64) {
      return await super.ask_cowgirl(attacker, defender, hook);
    }
    if (hook.arg) {
      const life_marks = new PamaEduMarks();
      if (!life_marks.ask_cowgirl) {
        life_marks.ask_cowgirl = 1;
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '가 ',
          attacker.get_colored_name(),
          '의 허리 위에 올라탔고, 젖은 허벅지 안쪽이 ',
          attacker.get_colored_name(),
          '의 복근을 스쳤다.',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '가 몸을 숙이자 따뜻한 숨결이 ',
          attacker.get_colored_name(),
          '의 귓가를 간지럽혔고, 가슴이 ',
          attacker.get_colored_name(),
          '의 가슴팍에 닿으며 진한 암컷의 체취를 풍겼다.',
        ]);
        await defender.say_and_wait([
          '다음은... 나한테 맡겨줄래? 이렇게 하는 건지는 잘 모르겠지만... 히힛.',
        ]);
        await attacker.print_and_wait([
          defender.sex,
          '가 천천히 엉덩이를 들고 손으로 ',
          attacker.get_colored_name(),
          '의 딱딱한 음경을 붙잡아 자신의 젖은 입구에 맞추었다.',
        ]);
        await attacker.print_and_wait([
          sys_get_colored_callname(attacker.id, defender.id),
          '가 서서히 내려앉자, ',
          attacker.get_colored_name(),
          '은(는) ',
          defender.sex,
          '의 좁은 내부가 자신을 한치씩 삼키는 것을 느꼈다.',
        ]);
        await defender.say_and_wait(['으음... 읏...']);
      }
      await defender.say_and_wait(['이... 이제 움직일게.']);
      await attacker.print_and_wait([
        sys_get_colored_callname(attacker.id, defender.id),
        '가 숨을 크게 들이마시며 ',
        attacker.get_colored_name(),
        '의 가슴에 두 손을 얹고 천천히 허리를 흔들기 시작했다.',
      ]);
      await attacker.print_and_wait([
        '따뜻한 살결이 ',
        attacker.get_colored_name(),
        '의 근부를 문질러댔고, ',
        attacker.get_colored_name(),
        '의 손은 자신도 모르게 ',
        defender.sex,
        '의 허벅지를 붙잡고 리듬에 맞춰 위로 밀어 올렸다.',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 쇄골을 타고 흐른 땀방울이 가슴 사이로 떨어지며 조명 아래에서 유혹적인 빛을 냈다.',
      ]);
      await defender.say_and_wait(['으응... 하아...']);
    } else {
      await attacker.print_and_wait([
        '동작이 빨라짐에 따라, ',
        sys_get_colored_callname(attacker.id, defender.id),
        '의 풍만한 가슴이 제멋대로 흔들리며 ',
        attacker.get_colored_name(),
        '의 시선을 사로잡았다.',
      ]);
      await defender.say_and_wait([
        '하아...',
        sys_get_colored_callname(defender.id, attacker.id),
        '...아... 하아...',
      ]);
      await attacker.print_and_wait([
        defender.sex,
        '의 목소리는 부드러운 신음에서 점차 만족감 섞인 신음으로 변해갔고, 갈구하듯 초조하게 ',
        attacker.get_colored_name(),
        '의 가랑이 사이에서 위아래로 움직였다.',
      ]);
      await attacker.print_and_wait([
        '육체가 맞닿는 소리가 방 안에 울려 퍼졌고, 정사가 가져온 쾌락의 파도는 마치 ',
        attacker.get_colored_name(),
        '을(를) 익사시킬 듯이 몰려왔다.',
      ]);
    }
  }
};