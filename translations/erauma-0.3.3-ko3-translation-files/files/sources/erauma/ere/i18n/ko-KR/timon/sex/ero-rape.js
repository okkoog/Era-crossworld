// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file 調教の地の文 - 強姦
 * @author ALEX
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { stain_enum } = require('#/data/ero/stain-const');

const JaEroRape = require('#/i18n/ja-JP/timon/sex/ero-rape');

module.exports = {
  ...JaEroRape,
  async kiss(attacker, defender, is_first, d_call_a) {
      if (is_first) {
        await defender.print_and_wait([
          '아름다운 눈동자가 공포로 크게 확장되고, ',
          d_call_a,
          '의 두 팔에 구속된 몸이 바들바들 떨린다.',
        ]);
        await defender.say_and_wait('우으……');
        await defender.print_and_wait(
          '짙은 숨결이 섞인 혀가 입안으로 들어오고, 억지로 밀고 들어온 혀끝이 필사적으로 막으려던 하얀 이를 넘어, 매우 공격적으로 잇몸 뿌리를 따라 핥고 지나간다.',
        );
        await defender.print_and_wait([
          '상대에게 완전히 제압당한 지금, 입술 사이로 마찰음과 타액이 흘러나오는 것을 그저 내버려둘 수밖에 없었다.',
        ]);
      } else {
        await defender.say_and_wait(['크읏……']);
        await defender.print_and_wait([
          '꼴사납게 비명을 지르던 입술은, 이내 ',
          d_call_a,
          '의 입술에 의해 틀어막힌다.',
        ]);
        await defender.print_and_wait([
          '자신은 그저 무력하게 두 눈을 감고, 몸에 얹힌 팔을 꽉 쥘 수밖에 없었다.',
        ]);
        await defender.print_and_wait([
          '상대가 입안을 유린하도록 내버려 두자, 혀와 입술이 얽히는 낮은 키스 소리가 울려 퍼진다.',
        ]);
      }
    },
  async french_kiss(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await defender.say_and_wait('하아……');
        await defender.print_and_wait([
          '아무런 자비도 없이 난폭하게 턱을 벌리고, 엉망진창이 된 머릿속은 한동안 상황을 받아들이지 못한 채 상대가 제멋대로 굴도록 내버려 둔다.',
        ]);
        await defender.print_and_wait([
          '입안 구석구석을 핥고, 푹 늘어진 혀를 머금고 얼마나 빨았는지……',
        ]);
        await defender.print_and_wait([
          '정신을 차리고 반항을 시도하려 했을 땐, 입안에 남아있는 짜릿한 쾌감에 무의식적으로 침을 삼키다 하마터면 신음을 흘릴 뻔했다.',
        ]);
      } else {
        await defender.say_and_wait('당장…… 그만…… 둬…… 츄웁……');
        await attacker.print_and_wait([
          '혀가 ',
          a_call_d,
          '의 입안을 끊임없이 탐하고, 억지로 버티는 반항은 그저 혀가 얽히고 밀리는 사이로 더욱 끈적한 물소리를 만들어낼 뿐이다.',
        ]);
        await attacker.print_and_wait([
          '농밀한 호르몬 냄새를 띤 타액이 강제로 입안에 흘러들어오고, 숨을 쉬기 위해 끊임없이 삼키는 목구멍은 그 강제로 부어진 타액을 전부 마실 수밖에 없었다.',
        ]);
        await attacker.print_and_wait([
          '기나긴 딥키스가 계속되고, ',
          a_call_d,
          '의 눈물과 입가에서 흘러넘친 투명한 타액이 끊임없이 바닥으로 뚝뚝 떨어진다.',
        ]);
      }
    },
  async pet_ear(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait([
          '본인의 허락도 없이 ',
          a_call_d,
          '의 귀를 만지기 시작했다. 가느다란 솜털과 약간 열이 오른 귓바퀴가 붉게 달아오른 그녀의 얼굴과 대조를 이룬다.',
        ]);
        await attacker.print_and_wait([
          '살짝 힘주어 쥐자, 고개가 순식간에 반대편으로 튕겨 나갔고 입에서는 반대의 의미를 담은 강한 신음이 새어 나왔다.',
        ]);
        await attacker.print_and_wait([
          '하지만 이 녀석이 아무리 발버둥 치며 미간을 찌푸려도, 귓가에서 계속되는 강렬한 자극은 불과 몇 초 만에 ',
          a_call_d,
          '의 힘을 빼앗아 버렸다.',
        ]);
      } else {
        await defender.print_and_wait([
          '파르르 떨며 고개를 숙였다. 귀가 그 녀석에 의해 마치 성기라도 되는 양 애무 당하고 있다.',
        ]);
        await defender.say_and_wait(['이제 끝내주면 안 돼……?'], true);
        await defender.say_and_wait(['윽!']);
        await defender.print_and_wait([
          '민감한 뿌리와 안쪽을 갑자기 손가락 끝으로 찌르자, 깜짝 놀란 귀가 반사적으로 쫑긋 섰다.',
        ]);
        await defender.print_and_wait([
          '보복하듯 쫑긋 세운 귀로 상대의 뺨을 「착」 소리가 나게 때렸지만, 그 녀석은 오히려 웃음소리를 낼 뿐이었다.',
        ]);
      }
    },
  async pet_breast(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait([
          '푸딩처럼 탄력 있게 떨리는 가슴살을 손으로 받쳐 들고 부드럽게 압박하며, 손바닥으로 이 ',
          defender.race > 0 ? '암컷' : '암컷',
          '이 나의 침범으로 인해 빨라진 심장 박동을 느꼈다.',
        ]);
        await defender.say_and_wait(['절대! 절대로 용서 못 해……']);
        await defender.say_and_wait(['으윽!!!']);
        await attacker.print_and_wait([
          '거칠게 가슴을 여러 모양으로 주무르자, 그녀가 내뱉으려던 위협은 가슴의 뜨거운 촉감에 막혀버렸다.',
        ]);
        await attacker.print_and_wait(['자, 다음은 어떤 모양으로 빚어줄까?']);
      } else {
        await attacker.print_and_wait([
          '손바닥 아래에서 따뜻한 가슴살이 짓눌려 변형되고, 손가락 사이의 유두도 점점 더 뚜렷하게 발기한다.',
        ]);
        await attacker.print_and_wait(['마치 그 촉감을 음미하듯 앞뒤로 쓰다듬는다.']);
        await defender.say_and_wait(['이 자식이!!!']);
        await attacker.print_and_wait([
          '가슴을 마음껏 농락당하는 ',
          a_call_d,
          '은(는) 자신을 유린하는 자를 향해 저주를 퍼붓지만…… 할 수 있는 것은 오직 그것뿐이다.',
        ]);
      }
    },
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait([
          '두 손가락을 벌리자, 껍질이 벗겨진 작은 콩알이 부끄러운 듯 미세하게 떨리고 있다.',
        ]);
        await defender.say_and_wait(['어이…… 대체 뭘 하려고……']);
        await attacker.print_and_wait([
          '손톱을 음핵의 살점 사이에 살짝 끼워 넣고 들어 올리자, ',
          a_call_d,
          '은(는) 본능적으로 허리를 활처럼 굽히며 몸을 방탕하게 떨기 시작했다.',
        ]);
      } else {
        await attacker.print_and_wait([
          '음핵을 감싼 표피를 거칠게 벗겨내고, 검지로 음핵을 눌러 고정한 채 중지와 약지로 음순을 고정했다.',
        ]);
        await attacker.print_and_wait([
          '숙련된 솜씨로 긁고 진동시키며 자극하자, 충혈되어 발기한 음핵은 제멋대로 주무르고 당겨지는 대로 더욱 민감해진다.',
        ]);
        await attacker.print_and_wait([
          '끊임없는 애무를 통해 지속적인 쾌락이 척수를 타고 ',
          a_call_d,
          '의 뇌로 전달된다. 아무리 강인한 의지라도 이렇게 농락당하면 균열이 생길 수밖에 없으리라.',
        ]);
        await defender.say_and_wait(['으으윽……❤️ 클리토리스가, 망가져 버려…… 아아아악❤️']);
        await attacker.print_and_wait(['맞아…… 정말로 좀 붉게 부어올랐네.']);
      }
    },
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait(['겉만 맴도는 게 무슨 재미가 있겠어?']);
        await attacker.print_and_wait([
          '손가락을 더 깊숙이 전진시켜, ',
          a_call_d,
          '이(가) 평소 자위할 때 거의 건드리지 못했던 곳을 탐색하다 손가락 끝이 육벽 위의 작은 돌기를 스쳤다.',
        ]);
        await defender.say_and_wait(['하아…… 제발 부탁이야……']);
        await defender.say_and_wait(['——이얏~!']);
        await attacker.print_and_wait([
          '그저 가볍게 한 번 눌렀을 뿐인데, ',
          a_call_d,
          '의 애원은 바로 쾌락 섞인 신음으로 바뀌었다.',
        ]);
        await attacker.print_and_wait([
          '야동에서나 볼 법한 저급한 아헤가오를 지어 보이고 있다.',
        ]);
      } else {
        await defender.say_and_wait(['하아~ 이건…… 뭐야……']);
        await attacker.print_and_wait([
          '불안하게 허리를 비틀어 보지만, 오히려 연해진 보지 살점들이 내 손가락을 꽉 휘감게 만들 뿐이다.',
        ]);
        await attacker.print_and_wait([
          '약점을 들킨 뒤로는, 처음엔 이물질을 밀어내려던 보지가 이제는 적극적으로 돌기를 이용해 손가락의 거친 지문을 비벼대고 있다.',
        ]);
        await attacker.print_and_wait([
          '땀방울이 그녀의 매끄러운 뺨을 타고 살짝 벌어진 입가로 흘러들어, 혀끝에 맺힌 침과 함께 떨어진다.',
        ]);
        await defender.say_and_wait(['으으……']);
        await attacker.print_and_wait([
          '눈을 반쯤 뜬 채, 눈동자도 곧 잠들 것 처럼 위로 뒤집혀 있다.',
        ]);
      }
    },
  async pet_tail(attacker, defender, is_first, a_call_d, d_hair) {
      if (is_first) {
        await attacker.print_and_wait([
          '남는 손으로 등을 타고 내려가 꼬리 뿌리 부분에 닿자마자, 온몸을 팽팽하게 긴장시킨 ',
          a_call_d,
          '의 몸이 마치 전기가 통한 듯 파르르 떨렸다.',
        ]);
        await defender.say_and_wait(['너! 이 나쁜 놈! 꿈도 꾸지 마!']);
        await attacker.print_and_wait([
          '갑자기 고개를 들어 사납게 노려보는 우마무스메였지만, 그 눈동자에는 눈물이 맺혀 가련해 보일 뿐이다.',
        ]);
      } else {
        await attacker.print_and_wait([
          '도발하듯 계속해서 꼬리 뿌리를 가볍게 긁으며, ',
          a_call_d,
          '의 가련하면서도 자극을 억지로 참으려 애쓰는 표정을 감상한다.',
        ]);
        await defender.say_and_wait(['하아, 하아…… 인간…… 쓰레기……']);
        await attacker.print_and_wait([
          '살짝 이를 악물고 몸을 미세하게 떨고 있지만, 그것이 오히려 나의 가학심을 부추길 뿐이다.',
        ]);
        await attacker.print_and_wait([
          '더욱 짖궂게 ',
          d_hair,
          ' 꼬리를 휘감아 가볍게 흔들었다.',
        ]);
      }
    },
  async pull_tail(attacker, defender) {
      await defender.say_and_wait('이얏~❤️');
      await defender.print_and_wait([
        '꼬리 끝에서 뿌리까지, 그리고 온몸을 휩쓰는 기묘한 감각.',
      ]);
      await defender.print_and_wait([
        '오랫동안 쓰지 않던 케이블에 갑자기 전기가 통하듯, 통증이 느껴지는 꼬리 뿌리에서 뇌로, 다시 뇌에서 웅성거리는 보지로 쾌락이 전해진다.',
      ]);
      await defender.print_and_wait([
        '몸이 뒤로 젖혀지는 동시에, 무의식적으로 꼬리를 흔들며 아양을 떨기 시작했다.',
      ]);
    },
  async cunnilingus(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait([
          '눈을 가늘게 뜨고 ',
          a_call_d,
          '의 이미 스스로 꼿꼿하게 선 붉게 부은 음핵을 근거리에서 관찰했다.',
        ]);
        await attacker.print_and_wait([
          '그 과정에서 일부러 내뱉는 숨결이 닿게 하자, 자극받은 작은 콩알이 조금 더 꼿꼿해졌다.',
        ]);
        await defender.say_and_wait(['안 돼, 보지 마……']);
        await attacker.print_and_wait([
          '혀를 음핵 위에 대고 강하게 핥아 올리자, 방금 전까지 엄하게 호통치던 목소리에 애원의 기색이 섞인다.',
        ]);
        await attacker.print_and_wait([
          '경련하며 음액을 내뿜는 보지가 내 입술을 축축하게 적셨다.',
        ]);
      } else {
        await defender.print_and_wait([
          '민감한 작은 콩알이 혀끝에 농락당하자, 이를 악물어 참으려 하지만 입술 사이로 가끔 신음 소리가 새어 나온다.',
        ]);
        await defender.print_and_wait(['하지만, 그렇게 쉽게 저항을 포기하지 않을 거야!']);
        await defender.say_and_wait(['이야아악!!!']);
        await defender.print_and_wait([
          '갑작스러운 통증과 전기가 통하는 듯한 쾌락에 몸이 순간적으로 뻣뻣해졌고, 입가는 제어할 수 없이 파르르 떨렸다.',
        ]);
        await defender.say_and_wait(['잠깐! 거기를 이빨로 물지 마!']);
      }
    },
  async ask_blow_job(attacker, defender, is_first) {
      if (is_first) {
        await defender.print_and_wait([
          '입가에 내밀어진 비릿한 귀두를 머금고, 망설이듯 천천히 혀를 기둥에 밀착시켰다.',
        ]);
        await attacker.say_and_wait(['조금 더 힘내보라고.']);
        await defender.say_and_wait(['정말 끝도 없네……'], true);
        await defender.say_and_wait(['으응……']);
        await defender.print_and_wait([
          '하지만 현재의 상황에 굴복한 그녀는 스스로 입안을 좁혔고, 위아래로 움직이는 입술이 젖은 타액을 자지에 골고루 발랐다.',
        ]);
        await defender.print_and_wait([
          '설면이 아주 마지못해 표면에 솟은 핏줄을 핥아 올리자, 자지가 그녀의 타액으로 반짝이기 시작했다.',
        ]);
        await defender.say_and_wait(['으응…… 왜 또 조금 커진 거야……'], true);
      } else {
        await defender.print_and_wait([
          '눈을 감고, 보지 않으면 신경 쓰이지 않을 거라 생각한다.',
        ]);
        await defender.print_and_wait([
          '하지만 예민한 후각은 현재의 상황을 그녀에게 충실히 보고하고 있다.',
        ]);
        await defender.print_and_wait([
          '부드러운 입술이 천천히 음경을 감싸 안고, 노래를 연습하던 혀끝이 귀두 주위를 감돌며, 트로피를 들어야 할 양손이 음경을 붙잡는다.',
        ]);
        await defender.print_and_wait(['입맞춤…… 호흡…… 냄새……']);
        await defender.say_and_wait(['냄새나……'], true);
      }
    },
  async bite_nipple(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await defender.say_and_wait(['안 돼~ 안 돼~~ 저리 가!']);
        await attacker.print_and_wait([
          '침으로 젖은 ',
          a_call_d,
          '의 붉은 딸기를 이빨로 지그시 물었다. 힘을 주어 깨물자, 그동안 쌓여있던 강렬한 가려움과 욕망이 단숨에 폭발했다.',
        ]);
        await defender.say_and_wait(['으앗!!!❤️']);
        await attacker.print_and_wait([
          a_call_d,
          '은(는) 참지 못하고 가련한 신음을 흘렸다.',
        ]);
        await attacker.print_and_wait([
          '이내 제정신이 든 듯 서둘러 고개를 저으며 떼어냈고, 얼굴 가득 홍조를 띤 채 혀를 거두어들였지만 가슴 위로는 타액의 은사가 길게 늘어졌다.',
        ]);
      } else {
        await attacker.print_and_wait([
          '이빨 끝으로 깨물어 붉게 부어오른 흔적을 남기고, 때때로 강하게 물어뜯어 밀쳐내려던 ',
          a_call_d,
          '을(를) 맥없이 주저앉게 만들었다.',
        ]);
        await defender.say_and_wait(['으윽…… 나쁜 놈❤️! 쓰레기! 강간범❤️!']);
        await attacker.print_and_wait([
          '내뱉는 분노의 욕설조차 이제는 끈적하고 유혹적으로 들릴 뿐이다.',
        ]);
      }
    },
  async missionary(attacker, defender, d_body_hair) {
      await defender.say_and_wait('쓰레기! 내게서 떨어져, 꺼지라고!');
      await defender.print_and_wait([
        '발을 들어 차려 했지만, 너무도 쉽게 발목을 잡혀 위로 들려버렸다.',
      ]);
      if (defender.race > 0) {
        await defender.print_and_wait([
          d_body_hair,
          ' 꼬리로 가려져 있던 암컷 구멍을 억지로 드러내고 말았다.',
        ]);
      } else {
        await defender.print_and_wait('자신의 천박한 암컷구멍을 억지로 드러내고 말았다.');
      }
      await defender.print_and_wait([
        '모아진 손목마저 눈앞의 녀석에게 결박당하자, 이제 완벽히 반항할 수 없다는 사실을 깨달았다.',
      ]);
      await defender.say_and_wait('히잇, 오오오오옷!!❤️');
      await defender.print_and_wait(
        '원래라면 튀어나왔을 욕설, 저항, 꾸짖음은 작열하는 육봉이 삽입되는 순간, 듣기에 너무나도 아양 떠는 듯한 음란한 교성으로 변해버렸다.',
      );
    },
  async hug_sitting(attacker, defender, a_call_d) {
      await attacker.say_and_wait('기분 좋지?');
      await attacker.print_and_wait([
        '뒤에서 ',
        a_call_d,
        '의 ',
        defender.race > 0 ? '쫑긋 세워진 귀에 ' : '귀에 ',
        ' 밀착한 채 물었다.',
      ]);
      await defender.say_and_wait('쓰레기! 변태!');
      await defender.say_and_wait('응아앗❤️……');
      await attacker.print_and_wait([
        '단속적으로 이어지던 반박은 교태로운 음란한 신음소리에 막혀버렸고, ',
        a_call_d,
        '의 푹 숙인 고개는 조금 더 아래로 꺾인 듯했다.',
      ]);
      await attacker.print_and_wait([
        '피스톤 질을 할 때마다 구멍이 꽉꽉 조여오는 이 ',
        defender.race > 0 ? '암컷이' : '암컷이',
        ' 대체 얼마나 황홀한 표정을 짓고 있는지 들키고 싶지 않다는 듯이.',
      ]);
    },
  async hug_standing(attacker, defender, d_body_hair) {
      await defender.print_and_wait([
        '두 손으로 벽을 짚고 엉덩이를 높이 치켜든 채, 조금의 감정도 담지 않으려 애쓰며 물었다.',
      ]);
      await defender.say_and_wait(['이러면 되는 거지?']);
      await defender.print_and_wait([
        '아마 후배위를 하려는 거라 짐작했지만…… 그래도 바닥에 짓눌리는 것보다는 낫겠지……',
      ]);
      await defender.print_and_wait([
        '그렇게 애써 스스로를 설득하려던 찰나, 갑자기 허리를 쓰다듬는 감촉이 전해지더니 이내 주무르기로 변하며 강제로 엉덩이를 더 높이 치켜들게 만들었다.',
      ]);
      await defender.say_and_wait(['응웃❤️!']);
      if (defender.race > 0) {
        await defender.print_and_wait([
          '이런 자세, 육봉이 자신의 구멍을 완전히 꿰뚫게 만드는 이 자세는 우마무스메에게 너무나도 반칙이잖아! 심지어 ',
          d_body_hair,
          ' 꼬리조차 채찍처럼 붙잡혀 자신의 엉덩이를 찰싹찰싹 때리고 있었다.',
        ]);
      } else {
        await defender.print_and_wait(
          '이런 자세, 육봉이 자신의 구멍을 완전히 꿰뚫게 만드는 이 자세는 정말이지 너무나도 반칙이잖아!',
        );
      }
      await defender.print_and_wait([
        '상반신은 곧바로 그 충격에 허물어져 내렸고, 오직 붙잡힌 두 손에만 의지해 간신히 버티고 있었다.',
      ]);
    },
  async suspended_congress(attacker, defender) {
      await defender.say_and_wait('안 돼…… 우앗!?');
      await defender.print_and_wait([
        '피하려고 했지만, 결국 뒤에 있는 사람에게 오금 쪽을 붙잡혀 번쩍 안겨 들고 말았다.',
      ]);
      await defender.print_and_wait([
        '유연한 몸은 거의 통째로 접히다시피 했고, 무릎은 거의 어깨에 짓눌린 채, 어깨에 걸쳐진 두 다리는 육봉이 들락거리는 동작에 맞춰 위아래로 크게 흔들렸다.',
      ]);
    },
  async hug_suspended_congress(attacker, defender, a_call_d, d_hair) {
      await attacker.print_and_wait([
        '이 자세라면, ',
        a_call_d,
        '은(는) 마치 상대의 몸에 매달려 있는 것처럼 된다.',
      ]);
      if (defender.race > 0) {
        await attacker.print_and_wait([
          '장점이라면, 육봉이 중력을 빌려 곧장 ',
          d_hair,
          ' 우마무스메의 가장 깊은 곳까지 찌르고 들어가, 서로의 성기를 빈틈없이 밀착시킬 수 있다는 점이다.',
        ]);
      } else {
        await attacker.print_and_wait([
          '장점이라면, 육봉이 중력을 빌려 곧장 ',
          d_hair,
          ' 여성의 가장 깊은 곳까지 찌르고 들어가, 서로의 성기를 빈틈없이 밀착시킬 수 있다는 점이다.',
        ]);
      }
      await defender.say_and_wait('떨어져!…… 무조건 떨어진다고!');
      await attacker.print_and_wait([
        '무중력감과 하반신의 강렬한 쾌감이 동시에 덮쳐오는 충격 속에서, 눈앞에서 거의 판단력을 잃은 ',
        a_call_d,
        '은(는) 무의식적으로 팔을 뒤로 뻗어 목을 껴안았다.',
      ]);
    },
  async stimulate_g_spot(attacker, defender) {
      await defender.say_and_wait(['앗❤️! 안 돼……❤️ 거긴 찌르지 마……❤️!']);
      await attacker.print_and_wait(['그러니까 여기가 성감대라는 거네?']);
      await attacker.print_and_wait([
        '육봉에 부풀어 오른 핏줄로 긁어내리거나, 아예 귀두로 직접 두드리듯 자극을 계속하자, 신경이 밀집된 질 고기들이 기쁘다는 듯 떨리며 조여오기 시작했다.',
      ]);
      await defender.say_and_wait('응오오옷, 호오오오오옷————❤️❤️❤️');
      await attacker.print_and_wait([
        '가설을 증명하기라도 하듯, ',
        defender.get_colored_name(),
        '(이)라는 이름의 여성은 스스로 고개를 쳐들고 고음의 음란한 비명을 질렀고, 피스톤 질에 맞춰 엉덩이를 치켜들며 육봉이 민감한 곳을 더 많이 찌를 수 있도록 도왔다.',
      ]);
      await attacker.print_and_wait([
        '아름다운 눈동자는 반쯤 풀린 채, 얼마 남지 않은 이성과 자존심마저 애액과 함께 체외로 배출되어 버렸다.',
      ]);
    }
,
  // [번역 대상] ask_cowgirl
  async ask_cowgirl(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '腰に跨った',
      era.get(`cflag:${defender.id}:成长阶段`) < 5
        ? defender.teen_sex_title
        : defender.phy_sex_title,
      'は体を支えたまま、尻を小さく動かすだけで、手で唇まで覆い、何事もない顔を作ろうとする。',
    ]);
    await attacker.print_and_wait([
      '秘部へ吞み込ませたときは、声を上げていたのに。',
    ]);
    await attacker.print_and_wait(['ならば、こちらから動くとしよう。']);
    await attacker.print_and_wait([
      '両尻をわずかに支え、',
      a_call_d,
      ' の驚きの声のなか、腰を上へ強く突き上げる。',
    ]);
    await defender.say_and_wait(['んあっ❤️！！！']);
    await attacker.print_and_wait([
      a_call_d,
      ' の悲鳴のなかで同じことを繰り返す。腰を突き、上げ下ろし、擦り回す。香る汗が雨のように胸へ落ち、規則正しい肉体の衝突音が空気に残る。',
    ]);
  },

  // [번역 대상] ask_deep_blow_job
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(['はぁあぁ～～～ん～～ぐっ～～']);
      await attacker.print_and_wait([
        '精巧な',
        defender.race > 0 ? 'ウマ耳の' : '',
        '性人形のように、股下で好きに扱われている。',
      ]);
      await attacker.print_and_wait([
        '口のなかの空間はすべて奪われ、ほとんど真空の口穴になる。',
      ]);
      await defender.say_and_wait(['ぐえっ～']);
      await attacker.print_and_wait([
        'さっきまで文句ばかりだった小さな口は、いま吸うことしかできない。',
      ]);
      await defender.say_and_wait(['ぅ～熱い～息が……'], true);
      await defender.print_and_wait(['耳元には、速く粗い水音しか聞こえない。']);
      await defender.print_and_wait([
        '自分が保とうとした、嫌悪に満ちた軽蔑の視線も、ただ上へ反る美しい瞳へ変わる。',
      ]);
      await defender.print_and_wait([
        '肉棒が乱暴に入るたび喉の穴は押し潰され、広がった食道が気管を圧し、呼吸できないのに喉肉はこの最低な相手の肉棒を締め上げる。',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '口腔でわざと止まり、残った精の汚れを自分の舌苔と桜色の唇へ塗りつけてから、名残惜しそうに抜く。',
        ]);
        await defender.print_and_wait([
          '粗く汚れた亀頭と薄い唇のあいだに、濁った白い糸が引く。',
        ]);
      }
      await defender.print_and_wait([
        '余分な喉の液と涎も、奥へ押し込まれていく。',
      ]);
      await defender.print_and_wait([
        '目の前の強姦犯の袋に溜まった濃い精を、自分が飲み込めるように整えているだけだ。',
      ]);
    } else {
      await defender.say_and_wait(['——ぐっ！？']);
      await defender.print_and_wait([
        '喉の奥に埋まった肉棒が、自分の頭を下げさせない。',
      ]);
      await defender.print_and_wait([
        '体を反らせるしかなく、口腔で先走りと混ざった涎まで、絶えず飲み込まされる。',
      ]);
      await defender.print_and_wait([
        '異物に侵される吐き気と、生臭いもので喉を塞がれる窒息。',
      ]);
      await defender.print_and_wait([
        'それ以上に、目の前の人でなしを根元まで喉奥で満たすために、尻を高く上げねばならない屈辱。',
      ]);
      await defender.say_and_wait(['早く抜け……！！！'], true);
      await defender.print_and_wait([
        '吸い込む空気は、この最低な相手の乱暴な動きに追いつけなくなっていく。',
      ]);
      await defender.print_and_wait([
        'わずかに紫がかった頬。抗おうとした両手も、力を失って柔らかくなる。',
      ]);
    }
  },

  // [번역 대상] ask_or_force_hand_job
  async ask_or_force_hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        '権力であれ武力であれ、とにかく ',
        defender.get_colored_actual_name(),
        ' という名の',
        defender.race > 0 ? 'ウマ耳の' : '',
        defender.phy_sex_title,
        'に、いまは従うしかないと分からせる。',
      ]);
      await attacker.print_and_wait([
        '先走りを垂らす亀頭を、気が進まないまま差し出された小さな手へ挿し入れる。',
      ]);
      await attacker.print_and_wait([
        '肉柱の脇を囲む指はごく軽く、それがかえって羽根が掠めるような感触になる。',
      ]);
      await attacker.print_and_wait(['美しいものを汚す、癖になる興奮もある。']);
    } else {
      await attacker.say_and_wait(['力を入れろ。握っているだけじゃ足りない。']);
      await defender.print_and_wait([
        '目の前の人でなしは、さらに酷い要求を急かし、自分は両手を肉棒へ密着させるほかない。',
      ]);
      await defender.print_and_wait([
        '先走りで粘つく指も、その下で脈打つ興奮した筋も、すべて感じ取ってしまう。',
      ]);
      await defender.say_and_wait(['気持ち悪い……']);
      await defender.print_and_wait([
        '仕返しのように扱く速度を上げ、わざと指先で鈴口を突く。',
      ]);
      await defender.say_and_wait(['ふ……少しは、苦しそうな顔をした……'], true);
    }
  },

  // [번역 대상] ask_or_force_tit_and_blow_job
  async ask_or_force_tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'わざと腰を突き、乳肉から覗く亀頭を唇へ当て、いまは口を開ける番だと ',
        a_call_d,
        ' に示す。',
      ]);
      await defender.say_and_wait(['ん……']);
      await attacker.print_and_wait([
        a_call_d,
        ' は眉を寄せ、唇を結び、わずかに歯を見せて、どうしても口を開けない。',
      ]);
      await attacker.print_and_wait([
        'だから亀頭を頬と唇へ何度も突き、涙を含んだ瞳が次第に見開き、やがて焦点を失うまで続ける。',
      ]);
      await attacker.print_and_wait([
        'ようやく、',
        a_call_d,
        ' が口を開き、淡く誘う唇を見せる。',
      ]);
      await defender.say_and_wait(['——あ——ん。']);
    } else {
      await defender.say_and_wait(['ぐちゅ～ぐちゅ～ぐちゅ～']);
      await defender.print_and_wait([
        '亀頭から冠状溝までを完全に咥え込み、時おり舌先で竿まで舐めさせられる。',
      ]);
      await defender.print_and_wait([
        '両腕で胸の肉を支えながら、空いた手でも肉棒を摘まむよう命じられる。',
      ]);
      await defender.print_and_wait([
        '屈辱だ。頭を下げ切った、服従と敗北そのものの姿勢。',
      ]);
      await defender.say_and_wait(['ぅ——']);
      await defender.print_and_wait([
        '不満の嗚咽を漏らしても、目の前の強姦犯は、次に自分が飲み込むときに頭を撫でるだけだ。',
      ]);
    }
  },

  // [번역 대상] ask_tit_job
  async ask_tit_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '膝をついて呆けている ',
        a_call_d,
        ' の両胸を支え、肉棒を乳肉のあいだへ真っ直ぐ挿し入れる。',
      ]);
      await defender.say_and_wait(['肉棒が、ん、胸のなかに……❤️']);
      await attacker.print_and_wait([
        '無意識に心を奪う淫語を吐いたあと、胸の熱さに焼かれたのか、呆けていた ',
        a_call_d,
        ' はようやく我に返り、両手で肉棒を押しのけようとする。',
      ]);
      await attacker.print_and_wait([
        'だからその手を握り、自分の胸の肉を支えさせる。',
      ]);
      await attacker.print_and_wait([
        '胸を揉む動きで、完全に昂ぶった肉根へどう奉仕するかを、ついでに教える。',
      ]);
      await defender.say_and_wait(['ん……❤️脈打ってる……❤️']);
    } else {
      await defender.print_and_wait([
        attacker.race > 0
          ? '谷間に収まった肉根の熱さも、呼吸に混じる生臭さも、乱れた熱い息に吹かれるウマ耳も、どれも無視できない。'
          : '谷間に収まった肉根の熱さも、呼吸に混じる生臭さも、どれも無視できない。',
      ]);
      await defender.print_and_wait([
        'やけになって柔らかさを強く摘まみ、未熟なまま胸で肉棒を擦る力を増し、意識を逸らそうとする。',
      ]);
      await defender.print_and_wait([
        '乳肉を肉根へ密着させ、機械のように押し離す。気づかぬうち、胸を潰す動きは随分と粗くなっていた。',
      ]);
      await defender.say_and_wait(['……ふん。']);
    }
  },

  // [번역 대상] continue_fucking
  async continue_fucking(attacker, defender, a_call_d, d_call_a, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '象牙色';
        break;
      case 0:
        skin_desc = '白い';
        break;
      case 1:
        skin_desc = '血色のよい';
        break;
      case 2:
        skin_desc = '浅褐色';
    }
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('はやく……はぁ❤️……止めて……');
      await defender.print_and_wait([
        '膨らんだ肉茎が礼節もなく自分の体内を出入りし、襞に密着して脈打つ充血した筋まで、はっきり分かる。',
      ]);
      await defender.say_and_wait('うはぁ……ん❤️');
      await defender.say_and_wait('だめ……このままじゃ……', true);
      await defender.print_and_wait([
        '精巧な肉の玩具を乱暴に弄ばれるように、熱い亀頭と硬い肉棒が膣の襞を残らず擦る。',
      ]);

      await defender.print_and_wait(
        '来るはずだった激しい痛みではなく、脳髄まで痺れさせる快感が、波のように重なる。',
      );

      await defender.say_and_wait('これ以上❤️は……このままじゃ……', true);
      await defender.say_and_wait('このままじゃ、イっ……❤️', true);
      await defender.print_and_wait([
        '抗いたい。だが制御を失った顔も、甘い吐息も、ピンと伸びた細い足指も、体に余裕がないことを示している。',
      ]);
    } else {
      const message = [
        async () => {
          await defender.say_and_wait('おぐぅ！！');
          await attacker.print_and_wait([
            '太い肉茎が容赦なく ',
            a_call_d,
            ' の雌の秘部を出入りさせ、淫声を上げさせると同時に、美しい瞳を何度も白く返す。',
          ]);
          await attacker.print_and_wait([
            '熱く太い肉棒が秘部のなかを掻き回し、亀頭を膣壁へ当て、反った冠状溝で媚肉を擦り上げて花芯へ真っ直ぐ当たる……',
          ]);
          await attacker.print_and_wait([
            '全力で衝く亀頭は愛液に濡れ、柔らかい子宮口へ重く口づけ、平坦な下腹にさえ亀頭の輪郭がぼんやり浮かぶ。',
          ]);
          await defender.say_and_wait(['お！ ま……待っ……少し……お願い……']);
          await attacker.print_and_wait([
            '快感で満たされた頭からは砕けた言葉しか生まれず、一緒に溢れるのは口角から落ちる透き通った雫だ。',
          ]);
        },
        async () => {
          await defender.print_and_wait([
            '人形のように扱われ、従順な性の機械のように触れられれば淫声を出す。',
          ]);
          await defender.print_and_wait([
            {
              color: d_skin_color,
              content: skin_desc,
            },
            '体が震え、よじれる。',
          ]);
          await defender.say_and_wait(['ぅ、うわぁ……']);
          await defender.print_and_wait([
            '体がいま最も欲しているのは ',
            d_call_a,
            ' から逃れる力なのに、快感に駆られ、残った力は足指を丸めることに使われる。',
          ]);
          await defender.print_and_wait([
            '乱暴に犯される感覚と、愛撫され弄ばれる快感が、自分の両脚も両足も全身も、快楽を求める一塊の雌肉の水準まで引き下げていく。',
          ]);
          await defender.say_and_wait(['はぁ！']);
          await defender.print_and_wait([
            '恥知らずな喘ぎが、自分の口から聞こえる。',
          ]);
        },
      ];
      if (defender.race > 0) {
        message.push(async () => {
          await defender.say_and_wait('んあぁ……やめ……止めて……お願い……ぅ……');
          await defender.print_and_wait([
            '口ではやめろと甘く叫んでも、張り詰めた膣肉はすでに柔らかく侵入者を抱き、肉棒をより深く迎え入れる。',
          ]);
          await defender.print_and_wait([
            '熱い子宮口が肉茎に何度も叩かれ、冠状溝が子宮口の輪へ深く口づけ、閉じようとする子宮口まで上へ凹まされる。',
          ]);
          await defender.print_and_wait(
            '快感でピンと伸びたウマ耳に聞こえるのは、肉茎が膣内の体液を押し出す「ぷちゅぷちゅ」という単調な音だけだ。',
          );
          await defender.print_and_wait([
            a_call_d,
            ' は悟る。レースのために鍛えられた柔軟な体が、いま交わるときの最上の砲架になっている。',
          ]);
        });
      }
      await get_random_entry(message)();
    }
  },

  // [번역 대상] doggy_style
  async doggy_style(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      a_call_d,
      ' の両腕を引き、少し力を入れただけで',
      defender.sex,
      'は牝犬のように尻を上げ、地面に跪かされる。',
    ]);
    await attacker.print_and_wait([
      '抗おうとする',
      defender.race > 0 ? '牝馬' : '雌',
      'は耐えきれず尻をよじって逃げようとするが、それがかえって誘いのように見える。',
    ]);
    await attacker.print_and_wait([
      '腰を前へ打ち、肉棒は遮るものなく ',
      a_call_d,
      ' の秘部へ収まる。',
    ]);
    await defender.say_and_wait(['ひぁぁ❤️！']);
    await attacker.print_and_wait([
      '電流が走ったように腰が反り、',
      d_hair,
      'の髪が揺れる。',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait(['尻尾まで、真っ直ぐに強張る……']);
    }
  },

  // [번역 대상] finger_fuck
  async finger_fuck(attacker, defender, is_first, a_call_d, d_hair) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '淡く可憐な';
        break;
      case 1:
        vagina_desc = '赤みを帯び紫がかった';
        break;
      case 2:
        vagina_desc = '深く色づいた大人びた';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '人差し指と中指を揃えて見せ、',
        a_call_d,
        ' が気づくより先に、二本を揃えたまま',
        vagina_desc,
        '秘部へ挿し入れる。',
      ]);
      await defender.say_and_wait(['ひっ……や……やめろ……最低！']);
      await attacker.print_and_wait([
        '首が後ろへ反り、',
        d_hair,
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        'は射られた白鳥のように、苦痛と悦びの混じった甘い悲鳴を上げる。',
      ]);
    } else {
      await attacker.print_and_wait([
        '柔らかく湿った膣のなかを指先が乱暴に出入りし、奥で叩く、揉む、擦るを変え、空いたもう一方の手は下腹の上から押し返す。',
      ]);
      await defender.say_and_wait(['うぅ……']);
      await attacker.print_and_wait([
        a_call_d,
        ' は両手で唇を必死に押さえ、美しい瞳が潤んで揺れている。',
      ]);
      await attacker.say_and_wait(['効果は十分だな、', a_call_d, '。']);
    }
  },

  // [번역 대상] force_blow_job
  async force_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '極限まで膨らんだ肉棒で、いきなり ',
        a_call_d,
        ' の唇を押し開く。',
      ]);
      await attacker.print_and_wait([
        '柔らかい唇が輪のように肉棒を縛って前後し、頬の内側まで突き上げられる。',
      ]);
      await attacker.print_and_wait([
        '無意識に窄まる唇と頬の粘膜が、肉茎のための極狭い口穴を作る。',
      ]);
      await attacker.print_and_wait([
        'だが何より好ましいのは、自分を見る、軽蔑を含んだ潤んだ瞳だ。',
      ]);
    } else {
      await defender.say_and_wait(['はぁ……❤️']);
      await attacker.print_and_wait([
        'さっきまで自分だけを睨んでいた目は、いま焦点を失い、肉棒が口腔から抜ける息の合間にだけ揺れる。',
      ]);
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' という名の',
        defender.race > 0 ? defender.sex_slave_title : defender.phy_sex_title,
        'は、無意識に出した舌で肉棒を軽く支える。',
      ]);
      await attacker.print_and_wait([
        '口のなかの涎が先走りと混ざって滴るあいだ、濃い肉棒の匂いの混じった空気を大きく吸う。',
      ]);
    }
  },

  // [번역 대상] force_deep_blow_job
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      if (defender.race > 0) {
        await defender.print_and_wait([
          '聞こえないふりをして、亀頭を銜えて吸う動作だけを続ける。',
        ]);
        await defender.print_and_wait([
          'ここまでさせられて、さらに深く銜えろなど、あまりに酷すぎる。',
        ]);
        await defender.say_and_wait(['ん？']);
        await defender.print_and_wait([
          '尻尾に撫でられる感触。また触りたいのか。もう一方の手は自分の耳を掻いている。',
        ]);
        await defender.say_and_wait(['んっ？！']);
        await defender.print_and_wait([
          '予期せぬ尻尾の引きで全身の力が抜け、頭頂の手が容赦なく押し下げる。',
        ]);
        await defender.print_and_wait([
          '唇と舌のあいだに留まっていた亀頭が、喉の奥まで一気に押し込まれる。',
        ]);
        await defender.say_and_wait(['ぐっ！！']);
        await defender.print_and_wait([
          '生臭い匂いに満たされた味蕾と鼻腔と頭が、敏感な体を痙攣させる。',
        ]);
      } else {
        await defender.say_and_wait(['はぁあぁ～～～ん～～ぐっ～～']);
        await attacker.print_and_wait(
          '精巧な性人形のように、股下で好きに扱われている。',
        );
        await attacker.print_and_wait([
          '口のなかの空間はすべて奪われ、ほとんど真空の口穴になる。',
        ]);
        await defender.say_and_wait(['ぐえっ～']);
        await attacker.print_and_wait([
          'さっきまで文句ばかりだった小さな口は、いま吸うことしかできない。',
        ]);
      }
      await defender.say_and_wait(['ぅ～熱い～息が……'], true);
      await defender.print_and_wait(['耳元には、速く粗い水音しか聞こえない。']);
      await defender.print_and_wait([
        '自分が保とうとした、嫌悪に満ちた軽蔑の視線も、ただ上へ反る美しい瞳へ変わる。',
      ]);
      await defender.print_and_wait([
        '肉棒が乱暴に入るたび喉の穴は押し潰され、広がった食道が気管を圧し、呼吸できないのに喉肉はこの最低な相手の肉棒を締め上げる。',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '口腔でわざと止まり、残った精の汚れを自分の舌苔と桜色の唇へ塗りつけてから、名残惜しそうに抜く。',
        ]);
        await defender.print_and_wait([
          '粗く汚れた亀頭と薄い唇のあいだに、濁った白い糸が引く。',
        ]);
      }
      await defender.print_and_wait([
        '余分な喉の液と涎も、奥へ押し込まれていく。',
      ]);
      await defender.print_and_wait([
        '目の前の強姦犯の袋に溜まった濃い精を、自分が飲み込めるように整えているだけだ。',
      ]);
    } else {
      await defender.say_and_wait(['——ぐっ！？']);
      await defender.print_and_wait([
        '喉の奥に埋まった肉棒が、自分の頭を下げさせない。',
      ]);
      await defender.print_and_wait([
        '体を反らせるしかなく、口腔で先走りと混ざった涎まで、絶えず飲み込まされる。',
      ]);
      await defender.print_and_wait([
        '異物に侵される吐き気と、生臭いもので喉を塞がれる窒息。',
      ]);
      await defender.print_and_wait([
        'それ以上に、目の前の人でなしを根元まで喉奥で満たすために、尻を高く上げねばならない屈辱。',
      ]);
      await defender.say_and_wait(['早く抜け……！！！'], true);
      await defender.print_and_wait([
        '吸い込む空気は、この最低な相手の乱暴な動きに追いつけなくなっていく。',
      ]);
      await defender.print_and_wait([
        'わずかに紫がかった頬。抗おうとした両手も、力を失って柔らかくなる。',
      ]);
    }
  },

  // [번역 대상] pet_leg
  async pet_leg(attacker, defender, is_first, a_call_d, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '象牙色';
        break;
      case 0:
        skin_desc = '白い';
        break;
      case 1:
        skin_desc = '血色のよい';
        break;
      case 2:
        skin_desc = '浅褐色';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '触診でも恋人の資格でもなく、相手の意思に反して、目の前の',
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        'の太腿を弄ぶ。',
      ]);
      await attacker.print_and_wait([
        { color: d_skin_color, content: skin_desc },
        '肌と、ほどよい肉の感触。',
      ]);
      await attacker.print_and_wait([
        '美しい脚の線を辿り、',
        a_call_d,
        ' が鍛え上げた成果を味わう。手を離せばすぐ戻る弾力は、指先にとって最上の快楽だ。',
      ]);
      await attacker.print_and_wait(['トレーニングの成果は、十分だな……']);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        ' の肉感と曲線を兼ねた太腿は、掌で往復されるうち、下品な桃色と脂ぎった汗の光を帯びる。',
      ]);
      await attacker.print_and_wait([
        '太腿を閉じて逃げようとすれば、より敏感な付け根まで掌へ送り出すことになる。',
      ]);
      await attacker.print_and_wait([
        '脚の肉に包まれた掌全体が、引き締まった摩擦を楽しむ。',
      ]);
      await attacker.print_and_wait([
        '潮紅のなかに嫌悪を残した ',
        a_call_d,
        ' の顔を見ていると、断りもなく性器に触れているような気分になる。',
      ]);
    }
  },

  // [번역 대상] pet_nipple
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'すでに自ら硬くなった、苺のような乳首を丁寧に擦り、ラジオのつまみを回すように摘まむ。',
      ]);
      await attacker.print_and_wait([
        '充血して赤くなった乳首が、存在を主張するように熱を放っている。',
      ]);
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' は刺激に歯を食いしばり、閉じきれない唇に耐えの色が滲む。',
      ]);
      await attacker.print_and_wait(['……もう少し、力を入れてやろう。']);
    } else {
      await attacker.print_and_wait([
        '立ち上がった乳首へ遠慮なく手を伸ばし、指先で素早く先を弄り、硬い突起を何度も押し込む。',
      ]);
      await attacker.print_and_wait([
        '米粒のように硬くなった乳首を引っ張り、桃色の体が微かに震える……それでも唇は意地を張って閉じたまま。',
      ]);
      await attacker.print_and_wait(['簡単だ。爪で軽く摘まむだけで——']);
      await defender.say_and_wait(['ん——❤️！']);
      await attacker.print_and_wait([
        a_call_d,
        ' の短く高い淫声が返り、口角から出た舌先に、透き通った涎が光る。',
      ]);
    }
  },

  // [번역 대상] pull_ear
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait(
      '先の愛撫で十分に熱を持ったウマ耳は、これ以上触られたくないと髪に張り付いて逃げようとしている。',
    );
    await attacker.print_and_wait([
      'それでも造作なく掴まれ、容赦なく引っ張られ、目の前の',
      defender.uma_sex_title,
      'は口ごもりながら許しを乞う。',
    ]);
    await attacker.print_and_wait([
      '乱暴な扱いに本能で痙攣する耳先が、充血した愛らしい桃色に染まっている。',
    ]);
  },

  // [번역 대상] sitting
  async sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('逃げるつもりか？');
    await attacker.print_and_wait([
      'よろよろと立ち上がり、逃げようとする ',
      a_call_d,
      ' の脛を掴み、引けばすぐ懐へ落ちる。',
    ]);
    await attacker.print_and_wait([
      '肉棒が平坦な腹へ重く当たり、恐怖で下腹まで凹むのが分かる。',
    ]);
    await attacker.print_and_wait([
      '言うことを聞かない悪い子には、罰が必要だ。',
    ]);
    await defender.say_and_wait(['うわぁ……抜け……！']);
    await attacker.print_and_wait([
      defender.race > 0
        ? '腰が勢いよく反り、レースで鍛えられた両脚が自分の腰へ強く絡む。'
        : '腰が勢いよく反り、両脚が自分の腰へ強く絡む。',
    ]);
  },

  // [번역 대상] standing
  async standing(attacker, defender, a_call_d) {
    if (defender.race > 0) {
      await attacker.print_and_wait([
        'やはり、',
        defender.uma_sex_title,
        'は柔軟さもバランスも優れている。',
      ]);
    }
    await attacker.print_and_wait([
      'つま先だけを床に残し、太腿の内側を伸ばし、右脚をゆっくり水平まで上げる。',
    ]);

    await attacker.print_and_wait([
      '必死に側方へ脚を上げた ',
      a_call_d,
      ' は、細い腰と誘う側の尻を自分の目の前へ晒す。',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:阴毛`) >= 1
        ? '陰毛に隠れた'
        : '滑らかで愛らしい',
      '秘部が、張り詰めた動きに合わせて開閉する。',
    ]);
    await defender.say_and_wait('満足したでしょう……人でなし！');
    await attacker.print_and_wait([
      'まだ限界ではない。自ら手を伸ばして姿勢を正し、水平に保たれた右脚をさらに上げ、左脚と一直線になるまで垂直へ導く。',
    ]);
    await defender.say_and_wait('さ、触らないで……');
    await attacker.print_and_wait([
      '肉茎が真っ直ぐ入り、狭く柔らかい膣は無理に押し開かれ、熱い亀頭は幾重にも蠢く肉を無視して花芯へ当たる。',
    ]);
    await defender.say_and_wait('……おぐっ❤️！！');
  },

  // [번역 대상] suck_virgin
  async suck_virgin(attacker, defender, is_first, a_call_d) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '淡く可憐な';
        break;
      case 1:
        vagina_desc = '赤みを帯び紫がかった';
        break;
      case 2:
        vagina_desc = '深く色づいた大人びた';
    }
    if (is_first) {
      await defender.say_and_wait(['や……やめ……離れろ……']);
      await attacker.print_and_wait([
        '威嚇にもならない、震えた脅しなど構わず、',
        a_call_d,
        ' の',
        vagina_desc,
        '秘部へ自ら口づける。',
      ]);
      await attacker.print_and_wait(['軽く吸い、温かく柔らかい舌が膣へ入る。']);
      await attacker.print_and_wait([
        '柔らかい襞を往復して擦ると、時おり収縮する膣が、自分の舌を押し出そうとする。',
      ]);
    } else {
      await defender.say_and_wait(['やめて……うふふ……']);
      await defender.print_and_wait([
        '浅いところの襞は、入り込んだ異物に残らず押し潰されている。',
      ]);
      await defender.print_and_wait([
        '低い呪詛のあいだに、',
        defender.race > 0 ? '走るための' : '',
        '両脚は震え、力なく、脚のあいだに埋まった頭を挟んでしまう。',
      ]);
    }
  },
};
