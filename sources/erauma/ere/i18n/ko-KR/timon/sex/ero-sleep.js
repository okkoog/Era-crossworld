/**
 * @file 調教の地の文 - 睡姦
 * @author O口口口口口
 * @author 黑奴队长
 */
const era = require('#/era-electron');

const JaEroSleep = require('#/i18n/ja-JP/timon/sex/ero-sleep');

module.exports = {
  ...JaEroSleep,
  async kiss(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait('입을 맞췄다.');
        await attacker.print_and_wait([
          '꿈결에 무의식적으로 살짝 벌어진 ',
          a_call_d,
          '의 두 입술이 무척이나 맞추기 좋아 보였기 때문이다.',
        ]);
        await defender.say_and_wait('으음……');
        await attacker.print_and_wait(
          '팟 하고 튀어 오르려던 오른손을 다시 눌러 내렸다. 몸을 옆으로 틀어 조금 더 깊숙이 숙이면 이 입술 사이의 온기를 완전히 독점할 수 있을 것이다.',
        );
        await attacker.print_and_wait('다만…… 혼자서만 하는 건 역시 조금 쓸쓸하네.');
      } else {
        await defender.say_and_wait('으음——');
        await attacker.print_and_wait(
          '머리를 무의식적으로 흔들기 시작하더니 얼굴색도 살짝 붉어졌다. 호흡이 조금 가빠진 모양이다.',
        );
        await attacker.print_and_wait(
          '슬슬 멈춰야 할까…… 아니면 다른 짓을 좀 더 해볼까.',
        );
        await defender.say_and_wait('쪽……');
        await attacker.print_and_wait('그럼 진짜 마지막으로 한 번만 더……?');
      }
    },
  async french_kiss(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait(
          '뺨을 감싸 쥐고 한층 더 깊은 곳까지 입을 맞추고 있음에도, 오히려 어딘가 공허한 기분이 든다……',
        );
        await attacker.print_and_wait([
          '눈앞의 ',
          a_call_d,
          '의 입술과 치열 사이에 자신의 흔적을 가득 남겨두었으니, 몰래 훔쳐 먹는 입장에서는 대승리라고 할 수 있겠지만……',
        ]);
        await attacker.print_and_wait([
          '하아…… 하지만 차라리 ',
          a_call_d,
          '이(가) 이대로 깨어나서, 당황한 기색으로 이쪽을 바라봐 주었으면 좋겠다는 생각이 든다…… 그러면 참 재밌을 텐데 말이지ㅋㅋ',
        ]);
      } else {
        await defender.say_and_wait('하아…… 하아……');
        await attacker.print_and_wait('몸을 꼿꼿이 굳혔다가, 바둥거리다, 이내 포기한다.');
        await attacker.print_and_wait([
          '뺨을 붙잡힌 채 혀로 농락당해 얼굴까지 붉어진 ',
          a_call_d,
          '의 신체 반응은 의외로 알기 쉬웠다.',
        ]);
      }
    },
  async pet_ear(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait('정말 좋네……');
        await attacker.print_and_wait(
          '부드럽고, 따뜻하고, 게다가…… 지금은 도망치지 않아.',
        );
        await defender.say_and_wait('으음……');
        await attacker.print_and_wait(
          '괴로운 듯 살짝 벌어진 입술 사이로 새어 나오는 숨결이, 이 귀가 두 손에 어떻게 다뤄지길 원하는지 충분히 깨닫게 해준다.',
        );
      } else {
        await defender.say_and_wait('하아……❤️');
        await attacker.print_and_wait(
          '처음에는…… 그저 이 따뜻한 귀가 손에 착 감기는 느낌이 좋아서 놓지 못했을 뿐인데.',
        );
        await attacker.print_and_wait([
          '점점, 깊이 잠든 ',
          a_call_d,
          ' 이(가) 무의식중에 흘리는 귀여운 표정과 목소리를 전부 수집하고 싶어졌다.',
        ]);
        await attacker.print_and_wait('괜찮아…… 시간은 아주 많으니까.');
      }
    },
  async pull_ear(attacker, defender, a_call_d) {
      const is_trainer = attacker.id === 0 && !attacker.race && attacker.race > 0;
      await attacker.print_and_wait('이러면 안 되는데……');
      await attacker.print_and_wait(
        is_trainer
          ? '이나 트레이너'
          : '',
      );
      await attacker.print_and_wait('……그래도');
      await attacker.print_and_wait([
        '눈앞에서 무방비하게 괴로운 표정을 짓고 있는 ',
        a_call_d,
        is_trainer
          ? '트레이너 실격인 '
          : '',
      ]);
    },
  async pet_breast(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait(
          '조심스러워할 필요는 없어. 호흡에 맞춰 얕게 오르내리는 이 가슴은 이 손아귀에서 도망칠 수 없으니까.',
        );
        await attacker.print_and_wait(
          '그러니 마음껏 손가락을 펼쳐, 손가락 사이로 빠져나갈 듯한 부드러움과 온기를 느껴보자.',
        );
        await attacker.print_and_wait(
          '심지어 코와 입을 바짝 대고, 평소라면 절대로 허락되지 않았을 살결 사이의 짙은 살냄새를 들이마시는 것조차 거절당하지 않는다.',
        );
      } else {
        await attacker.print_and_wait([
          '한심하기도 하지. 잠든 ',
          a_call_d,
          ' 을(를) 몸 아래 깔고, 두 손을 저 부드러운 살덩어리 속에 깊이 파묻은 채 헤어나오지 못하는 나 자신.',
        ]);
        await attacker.print_and_wait([
          a_call_d,
          ' 의 얼굴에 점차 잡히는 미간의 주름을 못 본 척하고, 아래에서 점점 달아오르는 부드러운 몸을 방치한 채……',
        ]);
        await attacker.print_and_wait(
          '심지어 이런 행위에 대해 어떤 허락도, 수줍은 묵인조차 받지 않았는데……',
        );
        await attacker.print_and_wait('……위험해, 갑자기 더 흥분되기 시작했어.');
      }
    },
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait(
          '기억하지 못할 테니까, 지금이라도 그만둘 기회는 있어……',
        );
        await attacker.print_and_wait([
          '눈앞의 요염한 풍경을 몰래 눈에 담고, 서둘러 ',
          a_call_d,
          ' 의 옷을 다시 입혀주는 것도 방법이지.',
        ]);
        await attacker.print_and_wait(
          '손가락으로 저 분홍색 작은 살덩이를 덮은 가죽을 밀어내고, 공기 중에 노출되어 귀여운 분홍색에서 점차 요염한 핏빛으로 충혈되는 음핵을 지켜본다.',
        );
        await attacker.print_and_wait([
          '배덕감에 몸을 가늘게 떨면서도 ',
          attacker.get_colored_name(),
          ' 은(는), 역시 계속하기를 선택했다.',
        ]);
      } else {
        await defender.say_and_wait('으음……');
        await attacker.print_and_wait(
          '아아, 어느새 이렇게 빨갛게 부어오른 가련한 모습이 되어버렸네.',
        );
        await attacker.print_and_wait([
          '그저 가벼운 손길과 약간의 인내심만으로도, 이 작은 민감한 돌기는 혼수상태인 ',
          a_call_d,
          ' 의 순결한 몸을 더욱 방탕하게 움직이게 만든다……',
        ]);
        await attacker.print_and_wait('부스럭부스럭……');
        await attacker.print_and_wait(
          '의식 없이 오로지 쾌락에 이끌린 몸이 시트와의 마찰을 통해 이 답답함을 해소하고 싶어 한다.',
        );
        await attacker.say_and_wait('정말 미안해……', true);
        await attacker.say_and_wait(
          '하지만 한 번만 더 보여줘, 마지막으로.',
          true,
        );
      }
    },
  async finger_fuck(attacker) {
      await attacker.print_and_wait('원래…… 이런 느낌이었나……');
      await attacker.print_and_wait(
        '예상했던 것과 달리, 젖고 조여진 살벽이 손가락 끝을 밀어내려는 저항감이 전혀 느껴지지 않아.',
      );
      await attacker.print_and_wait(
        '오히려 이성의 제약이 사라져 솔직해진 비소는 살며시 파고든 손가락에 간절하게 입을 맞추고 있다.',
      );
      await attacker.print_and_wait(
        '위로 긁어 올리고, 아래로 문지르고, 꿈틀거리는 결을 따라 양옆으로……',
      );
      await attacker.print_and_wait(
        '하아…… 다리를 이렇게 꽉 조이면, 더 계속할 수 없잖아.',
      );
    },
  async prepare_virgin(attacker, defender, a_call_d) {
      await attacker.print_and_wait([
        '숨기거나 부끄러워하며 얼굴을 붉힐 ',
        a_call_d,
        ' 의 눈치를 볼 필요는 없다.',
      ]);
      await attacker.print_and_wait(
        '지금 이 순간, 내 처분만을 기다리는 무방비한 몸을 마주하며.',
      );
      await attacker.print_and_wait(
        `해야 할 일은 그저, 호흡에 따라 얕게 일렁이는 좁은 틈새의 비소를 충분히 감상한 뒤, 손가락 끝에 힘을 주어 ${defender.sex}을(를) 더욱 요염하고 축축한 모양으로 피어나게 만드는 것뿐이다.`,
      );
    },
  async pet_anal(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait(
          '아아, 역시 잘 때조차 이곳은 유독 예민하게 신경 쓰고 있네……',
        );
        await attacker.print_and_wait([
          attacker.get_colored_name(),
          ' 의 손가락이 애매하게 다가와, 몸이 딱 경계할 정도의 거친 감촉으로 좁은 입구 주변을 빙글빙글 맴돌자, ',
          a_call_d,
          ' 의 한가로웠던 두 다리가 당황한 듯 침대 위에서 꼿꼿하게 펴졌다.',
        ]);
      } else {
        await defender.say_and_wait('……❤️');
        await attacker.print_and_wait('드디어……라고 해야 할까?');
        await attacker.print_and_wait([
          '더는 긴장을 유지하지 못한 채, ',
          a_call_d,
          ' 의 그 미묘한 애무에 녹아버린 항문은 어느새 슬며시 이완되어, 본인은 기억도 못 하는 사이에 무엇을 삼켜도 이상하지 않을 섹스용 구멍으로 변해버렸다.',
        ]);
      }
    },
  async prepare_anal(attacker) {
      await attacker.print_and_wait([
        '눈앞에서 오물거리는 구멍이 내뿜는 아찔한 열기를 손바닥으로 느끼며, ',
        attacker.get_colored_name(),
        ' 의 네 손가락이 말뚝처럼 부끄러운 구멍을 억지로 벌리고, ',
        attacker.get_colored_name(),
        ' 의 시선을 피하려는 엉덩이살을 고정했다.',
      ]);
      await attacker.print_and_wait(
        '오직 유독 굵고 긴 중지만이 다른 할 일이 있다는 듯, 전갈의 꼬리처럼 미세하게 굽힌 채 후장으로 조금씩 다가가더니, 이내 느릿하고 단호하게 삽입되었다.',
      );
      await attacker.print_and_wait('저항감이 강하다.');
      await attacker.print_and_wait([
        '자발적으로 꿈틀거리는 장벽이 마치 살아있는 생명체처럼 숨을 몰아쉬며 ',
        attacker.get_colored_name(),
        ' 의 손가락을 밀어낸다. 분명 옆의 비소처럼 섹스를 위해 존재하는 음란한 살점이 아닐 텐데도, 지금 ',
        attacker.get_colored_name(),
        ' 의 손가락을 맞이하는 모습은 놀라울 정도로 적극적이다.',
      ]);
      await attacker.print_and_wait('두려워하고 있는 건가…… 아니면 기뻐하고 있는 건가……?');
      await attacker.print_and_wait(
        '안타깝게도 지금 당장 여주인공의 입을 통해 답을 들을 수는 없네……',
      );
    },
  async pet_tail(attacker, defender, a_call_d) {
      await attacker.print_and_wait('정말…… 위험하네……');
      await attacker.print_and_wait([
        '단순히 눈앞의 촉감 좋은, ',
        a_call_d,
        ' 의 체취가 가득 밴 꼬리털만을 말하는 게 아니야.',
      ]);
      await attacker.print_and_wait([
        '잠든 ',
        a_call_d,
        ' 을(를) 침대 위에서 뒤집어 놓은 채, 엉덩이를 치켜세우고 옷까지 벗겨서, ',
        defender.teen_sex_title,
        '의 은밀한 곳을 이런 난폭한 방식으로 마음껏 감상하고 있는 나 자신을 말하는 거지……',
      ]);
    },
  async cunnilingus(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait([
          '이성의 지배가 없기에, 뜨거운 숨을 내뿜는 입술이 다가와도 아무것도 모르는 ',
          a_call_d,
          ' 의 비소는 그저 아랫배의 움직임에 맞춰 얕게 숨을 들이켜고 내쉴 뿐이다.',
        ]);
        await attacker.print_and_wait(
          '심장 박동을 빠르게 만드는 체취…… 혀끝에서 온몸으로 녹아드는 새콤달콤하고 비릿한 맛……',
        );
        await attacker.print_and_wait(
          '휘파람을 불듯 오므린 입술 모양으로 구도 안에 억지로 말려 들어가 천천히 나아가는 혀와, 그 뜨거운 자극에 서툴게 꿈틀거리며 저항하는 비소……',
        );
        await attacker.print_and_wait([
          '두 사람분의 숨소리 속에서, 오직 한 사람만이 볼 수 있는 이 음란한 풍경을 독점한 ',
          attacker.get_colored_name(),
          '의 혀끝이 조금씩 조금씩 앞으로 나아간다.',
        ]);
      } else {
        await attacker.print_and_wait(
          '처음에 어떻게 좁은 틈새처럼 청순한 모양으로 닫혀 있었는지 기억조차 나지 않을 정도로, 끊임없이 몰아치는 혀에 핥아져 안팎이 축축해진 구멍은 이제 겉으로 뒤집힌 채 미세하게 떨리고 있다……',
        );
        await attacker.print_and_wait(
          '침대 위에 편안하게 벌려져 있던 그 두 다리는, 가랑이 사이의 젖어 드는 쾌감에 어떻게 반응해야 할지 전혀 모르는 채, 그저 떨며 나쁜 아이의 어깨를 꽉 감싸 안았다.',
        );
      }
    },
  async blow_job(attacker, defender, is_first, a_call_d) {
      if (is_first) {
        await attacker.print_and_wait(
          '눈앞의 모습을 보고 있으니, 정말 죄책감이 치밀어 오르네……',
        );
        await attacker.say_and_wait([
          '하아…… ',
          a_call_d,
          ' 이(가) 잠든 사이에 이런 짓을 하는 나는…… 정말……',
        ]);
        if (defender.race > 0 && attacker.sex_code !== 1) {
          await attacker.print_and_wait([
            '우마무스메와 육봉, 거의 접점이 없던 이 두 단어가 지금 ',
            attacker.get_colored_name(),
            ' 의 입술을 통해 끈적하게 이어졌다……',
          ]);
        }
        await attacker.print_and_wait([
          '혼수상태 중에도 봉사를 받으면 허리를 꼿꼿이 세울 정도의 본능이 남아 있는지, ',
          attacker.get_colored_name(),
          ' 의 입술은 스스로 움직이는 육봉에 의해 강제로 벌려졌고, 원래 영양분을 섭취해야 할 곳은 그 딱딱하게 발기한 위험한 녀석에게 점령당해 몸을 이상하게 만드는 하류한 냄새를 제멋대로 풍기고 있다.',
        ]);
        await attacker.print_and_wait(
          '눈앞의 자는 얼굴 때문에 수치심이 더 느껴지냐고……? 당연하지.',
        );
        await attacker.print_and_wait('하지만 어떤 욕망은 바로 그 때문에 조절이 안 되는 법이야……');
      } else {
        await attacker.say_and_wait('할짝할짝~');
        await attacker.print_and_wait('어느새 좀 더 능숙해진 것 같아……');
        await attacker.print_and_wait(
          '고개를 좀 더 들면, 눈앞의 육봉을 더 많이 머금을 수 있어……',
        );
        await attacker.print_and_wait(
          '눌린 혀로 옆면을 살살 핥으면, 기분 좋은 듯 파르르 떨려와.',
        );
        await attacker.print_and_wait('입술을 잘 활용하면…… 흡……');
        await attacker.print_and_wait(
          '콜록…… 입안으로 밀려 들어오는 진하고 부끄러운 맛 때문에 머리가 어질어질해져……',
        );
      }
    },
  async deep_blow_job(attacker, defender, a_call_d) {
      await attacker.say_and_wait('더, 깊은 곳까지 원해……');
      await attacker.print_and_wait([
        '탐욕스럽게 잠꼬대를 하며, 쾌락을 갈구하는 본능에 지배당한 ',
        attacker.get_colored_name(),
        ' 이(가) 고개를 숙였다.',
      ]);
      await attacker.say_and_wait('할짝할짝……');
      await attacker.print_and_wait([
        '……그리하여, ',
        attacker.get_colored_name(),
        ' 의 이 작은 입은 이 순간부터 영양 섭취 외의 또 다른 의미를 부여받아, 끈적한 소리를 내며 꿈틀거리고 육봉을 휘감는 하류한 성기관으로 전락했다는 사실은 이제 돌이킬 수 없는 현실이 되었다❤️',
      ]);
      await attacker.print_and_wait(
        '목구멍의 연한 살로 귀두를 맞이하고, 영리한 혀끝으로 육봉 위의 충혈된 핏줄을 부드럽게 어루만지며, 공기 한 점 허락하지 않는 꽉 조인 흡입으로 기둥을 받쳐 올린다……',
      );
      await attacker.print_and_wait([
        '무엇을 배우고, 무엇을 기억하며, 어떤 모습으로 변해가고 있는 걸까…… 지금 ',
        a_call_d,
        ' 의 곁에 웅크리고 앉은 ',
        attacker.get_colored_name(),
        ' 은(는)……',
      ]);
    },
  async force_deep_blow_job(attacker, defender) {
      await attacker.print_and_wait('눈앞의 모습을 보고 있으니, 정말 죄책감이 치밀어 오르네……');
      if (defender.sex_code === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          '우마무스메와 육봉, 거의 접점이 없던 이 두 단어가 지금 끈적하게 이어져 버렸어……',
        );
      }
      await attacker.print_and_wait([
        defender.teen_sex_title,
        '의 입술은 육봉에 의해 강제로 벌려졌고, 원래 영양분을 섭취해야 할 곳은 그 딱딱하게 발기한 위험한 녀석에게 점령당해 몸을 이상하게 만드는 하류한 냄새를 제멋대로 풍기고 있다.',
      ]);
      await attacker.print_and_wait(
        '눈앞의 자는 얼굴 때문에 추가적인 가책이 느껴지냐고……? 당연하지.',
      );
      await attacker.print_and_wait('하지만 어떤 욕망은 바로 그 때문에 조절이 안 되는 법이야……');
    },
  async hand_job(attacker, defender, a_call_d) {
      await attacker.print_and_wait([
        '잠든 ',
        a_call_d,
        ' 은(는) 아무 말도 하지 않았지만, ',
        attacker.get_colored_name(),
        ' 은(는) 눈앞의 붉게 달아오른 육봉을 바라보며, 이미 예열을 마친 듯 움직이기 시작한 열 손가락으로 자신이 무엇을 해야 할지 완벽히 이해했다.',
      ]);
      await defender.say_and_wait('으음──');
      await attacker.print_and_wait([
        '그 뜨거운 열기에 놀라, ',
        attacker.get_colored_name(),
        ' 의 육봉을 붙잡으려던 손이 본능적으로 움츠러들었다. 그러고 나서야, 마치 겨울날 두 발을 이불 속으로 들이밀듯 조금씩 다시 다가갔다.',
      ]);
      await attacker.print_and_wait(
        '분명 상당히 흉악하고…… 여자아이의 아랫배를 쿡쿡 찌를 것 같은 모양인데……',
      );
      await attacker.print_and_wait(
        '하지만…… 손가락으로 감싸 쥐고 가볍게 흔들자 손가락 사이에서 쿠퍼액을 흘리며 춤추는 모습은…… 조금 귀엽네.',
      );
      await defender.say_and_wait('하아…… 하아…… 으음──');
      await attacker.print_and_wait('이제 알아들을 수 있게 됐어……');
    },
  async tit_job(attacker, defender, a_call_d) {
      await attacker.print_and_wait(
        '딱히 그런 요구를 들은 것도 아닌데, 제멋대로 상의를 내리고 가슴을 드러내 버렸어……',
      );
      await attacker.say_and_wait(
        '도대체 육봉 앞에 얼마나 굴복해버린 거야, 나란 녀석은……',
        true,
      );
      await attacker.print_and_wait(
        '그 부드러움에 감싸인 육봉은 비소를 떨게 할 만큼 오만하게 꼿꼿이 서 있다.',
      );
      await attacker.print_and_wait([
        '스스로 두 손으로 가슴을 모아 쥐고 고개를 들지 못하는 ',
        attacker.get_colored_name(),
        ' 은(는), 만약 ',
        a_call_d,
        ' 이(가) 지금 깨어있다면 지었을 표정을 상상해 본다.',
      ]);
      await attacker.print_and_wait([
        '어떤 표정을 예견했는지, 고요한 방안에 ',
        attacker.get_colored_name(),
        ' 의 심장 소리가 쿵쿵 울려 퍼진다.',
      ]);
    },
  async tit_and_blow_job(attacker, defender) {
      await attacker.print_and_wait([
        defender.race > 0
          ? '담당'
          : '파트너',
      ]);
      await attacker.say_and_wait('할짝할짝할짝……');
      await attacker.print_and_wait([
        '육봉 줄기에서 흘러나온 쿠퍼액 때문에 가슴이 미끈거리고 번들거리지만, 고생하는 가슴보다 가장 뜨겁고 팽팽한 귀두를 ',
        attacker.get_colored_name(),
        ' 은(는) 두 손으로 정성스레 입안에 모셔 들였다.',
      ]);
      await defender.say_and_wait('으음……');
      await attacker.print_and_wait(
        '혀가 마음대로 움직이지 않기 시작했지만, 입에 물린 귀두가 조금이라도 외로움을 느끼는 것 같으면 유두를 비비며 육봉의 기분을 맞추는 동작을 멈출 수가 없어……',
      );
    },
  async bite_nipple(attacker, defender, a_call_d) {
      await attacker.print_and_wait([
        '치아 사이에 딱딱해진 유두를 물고 입안에 넣는 순간, 눈앞에 똑바로 누워 있던 ',
        a_call_d,
        ' 의 몸이 순식간에 굳어버렸다.',
      ]);
      await attacker.print_and_wait('에…… 그래?……');
      await attacker.print_and_wait(
        `살살 치아를 놀려 민감한 유두 주변에 울긋불긋한 흔적을 남기며…… 품 안의 ${defender.teen_sex_title} 몸이 끊임없이 떨리게 만든다……`,
      );
      await attacker.print_and_wait([
        '아마 이쪽의 다음 목표를 눈치챈 거겠지. 유두가 혀에 꼼꼼히 핥아지며 미끈거리는 순간, ',
        a_call_d,
        ' 의 두 다리가 ',
        attacker.get_colored_name(),
        ' 의 허리를 감싸 안았다……',
      ]);
      await defender.say_and_wait('으음──');
      await attacker.print_and_wait('정말 귀여워.');
      await attacker.print_and_wait([
        '품 안의 ',
        a_call_d,
        ' 뿐만 아니라, 그 붉게 부어오른 흔적들이 가득한 유두까지 말이야.',
      ]);
    },
  async force_armpit_intercourse(attacker, defender, a_call_d) {
      await attacker.print_and_wait([
        '잠든 ',
        a_call_d,
        ' 의 무방비한 손을, 성욕에 눈이 먼 ',
        attacker.get_colored_name(),
        ' 이(가) 위로 곧게 들어 올렸다.',
      ]);
      await attacker.print_and_wait([
        '곧이어 ',
        a_call_d,
        ' 의 겨드랑이는 육봉의 거대한 귀두에 의해 책임지고 깨끗하게 닦여졌다.',
      ]);
      await attacker.print_and_wait(
        '열기를 띤 겨드랑이 살이 피스톤 운동을 따라 붉게 물드는 것이, 정말로 성과 관련된 음란한 기관으로 변해버린 것만 같아……',
      );
      await attacker.print_and_wait([
        '이것을 완전히 당연한 일로 받아들이지는 못한 듯, ',
        attacker.get_colored_name(),
        ' 의 동작에는 약간의 망설임이 섞여 있다……',
      ]);
      await attacker.print_and_wait([
        '……망설이면서도 자신을 등지고 있는 ',
        a_call_d,
        ' 의 겨드랑이 구멍을 육봉으로 비비며 쑤셔대고 있다……',
      ]);
    },
  async foot_job(attacker) {
      await attacker.print_and_wait(
        '침대 위에 일어선 덕분에, 시야 아래에서 작아진 육봉조차 훨씬 귀엽게 느껴져.',
      );
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        ' 은(는) 발을 들어 붉게 부풀어 오른 육봉을 발밑에 깔고 뭉개버렸다.',
      ]);
      await attacker.print_and_wait(
        '에헤…… 이런 대단한 육봉조차 발밑에 짓밟힐 때는 이렇게나 귀엽게 흔들리는구나ㅋㅋ',
      );
    },
  async doggy_style(attacker, defender, a_call_d) {
      await attacker.print_and_wait('마치 강아지처럼……');
      await attacker.print_and_wait(
        '그 두 다리…… 앞발바닥에 힘을 주고 까치발을 든 채, 무릎을 굽혀 땀에 젖은 허리를 높이 치켜든 그 다리……',
      );
      await attacker.print_and_wait(
        '그 위로 떠받들려 있는 것은…… 강아지처럼 무의식적으로 흔들리는 엉덩이다.',
      );
      await attacker.print_and_wait([
        '하지만 다소 아쉽게도, ',
        a_call_d,
        '이(가) 아직 제때 깨어나지 못한 탓에, 이 자세를 유지하는 것은 전적으로 ',
        attacker.get_colored_name(),
        '의 허리를 감싼 두 손에 의존하고 있다.',
      ]);
      await attacker.print_and_wait([
        '선정적인 자세로 인형처럼 침대에서 안겨 올려진 ',
        a_call_d,
        '은(는) 몸의 떨림을 멈추지 못해, 그 모습을 본 사람이라면 무심코 마른 입술을 축이고 싶게 만든다.',
      ]);
      await attacker.print_and_wait('완전히 일방적인 폭력처럼 되어버렸네……');
      await attacker.print_and_wait('하지만…… 이걸로 좋아……');
    },
  async stimulate_g_spot(attacker, defender, a_call_d) {
      await attacker.print_and_wait('조금 더 깊이.');
      await attacker.print_and_wait([
        a_call_d,
        '(으)로부터 애원하는 소리를 들을 일이 없기에, 육봉이 뿌리까지 다 잠길 때까지 마음껏 깊이 박아 넣으며, 눈앞에서 깊이 잠든 ',
        a_call_d,
        '을(를) 자신의 몸 안으로 품어버릴 수 있다.',
      ]);
      await attacker.print_and_wait([
        '만족을 모르는 ',
        attacker.get_colored_name(),
        '은(는) 제로의 거리를 돌파했음에도 일말의 망설임 없이, 허리를 쳐올림과 동시에 사타구니의 단단한 육봉을 앞으로 밀어넣어, 소녀의 입술과 보지, 그리고 자궁마저 매료된 신음을 내뱉게 만든다……',
      ]);
      await defender.say_and_wait('————❤️❤️');
      await attacker.print_and_wait(
        '이른바 G스팟이란 건 이런 것이다. 그 전까지 어떤 성격의 소녀였든, 상냥하든 발랄하든 상관없이, 수컷 냄새가 물씬 풍기는 단단한 육봉이 그곳의 주름을 벌리고 찌르는 순간, 단숨에 성애에 푹 빠진 천박한 암컷으로 타락해 버린다.',
      );
      await attacker.print_and_wait(
        '아름다운 몸은 육봉의 맹렬한 찌르기에 둥글게 움츠러들고, 목구멍에서는 탁한 음란한 신음만이 새어 나오며, 오직 지척에 맞닿은 자궁만이 델 듯이 뜨거워진다.',
      );
      era.println();
      await attacker.print_and_wait(
        '…………하지만, 이렇게 여자가 잠든 틈을 타 몰래 육봉과 쾌감으로 그녀의 몸을 길들이는 짓은……',
      );
      await attacker.say_and_wait(
        '비록 이러고 있는 게 나 자신이라 해도, 정말이지 비열하다고 할 수밖에 없네❤️',
      );
    },
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
      await attacker.print_and_wait('삼켜버렸네……');
      await attacker.print_and_wait([
        '반듯하게 누워 있는 ',
        a_call_d,
        '과(와) 제멋대로 깍지를 낀 채, ',
        attacker.get_colored_name(),
        '의 탄력 있고 윤기 나는 두 다리가 아래로 쪼그려 앉아, 구멍 입구로 비비적거리며 육봉의 거대한 귀두를 머금으려는 기회를 엿본다……',
      ]);
      if (!is_vagina) {
        await attacker.print_and_wait('여기는, 몰래…… 엉덩이 구멍으로……❤️');
      }
      await attacker.print_and_wait([
        '이번에는 ',
        a_call_d,
        '의 느릿하고 부드러운 움직임을 기다릴 필요 없이, 좁은 구멍 안에 머금어진 육봉이 민감한 질벽을 향해 가볍게 찌르기만 하면, ',
        attacker.get_colored_name(),
        '의 도망칠 곳 없는 허리는 마치 태엽이 감긴 것처럼 끊임없이 ',
        a_call_d,
        '의 눈앞에서 춤을 추듯 흔들릴 수밖에 없다…',
      ]);
    }
};
