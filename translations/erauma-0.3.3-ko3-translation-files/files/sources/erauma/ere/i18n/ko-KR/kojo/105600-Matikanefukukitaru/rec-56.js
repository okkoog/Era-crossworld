// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file マチカネフクキタル - 募集
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/105600-Matikanefukukitaru/rec-56.js');

module.exports = {
  ...__JaOriginal,
  // [번역 완료] rec
  async rec(kitaru, you) {
    await era.printAndWait([
      '선발 레이스.',
      kitaru.uma_sex_title,
      "와 트레이너의 만남의 장이다.",
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        '트레이너로 일한 지도 어느덧 제법 시간이 흘렀다.',
        you.get_colored_name(),
        '은(는) 이 일의 요령도 어느 정도 익혀 가고 있다.',
      ]);
      await era.printAndWait([
        '그중 하나는――',
        kitaru.uma_sex_title,
        '와(과) 트레이너가 담당 계약을 맺는다면, 3년에 이르는 계약은 인생이라는 긴 여정 속에서 서로의 운명을 잠시라도 얽어 놓는다는 것.',
      ]);
      await era.printAndWait(
        '앞으로 인생의 비바람을 함께 맞게 될지도 모른다.',
      );
    } else {
      await era.printAndWait([
        '선배 트레이너들에게 전해 내려오는 조언은 많다. 그중 하나는――',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        '와(과) 트레이너가 담당 계약을 맺는다면, 3년에 이르는 계약은 인생이라는 긴 여정 속에서 서로의 운명을 잠시라도 얽어 놓는다는 것.',
      ]);
      await era.printAndWait(
        '앞으로 인생의 비바람을 함께 맞게 될지도 모른다.',
      );
    }
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 양손으로 주머니를 뒤적이며 신사의 돌길을 걸어갔다.',
    ]);
    await era.printAndWait([
      '트레센 학생들이 자주 찾는 그 신사는 선발 레이스를 앞두고 신에게 의지하려는 트레이너와 ',
      kitaru.uma_sex_title,
      '들로 지금쯤 북적이고 있을 것이다.',
    ]);
    await era.printAndWait([
      '그래서 ',
      you.get_colored_name(),
      '은(는) 그 유명한 신사로 가지 않고, 감을 따라 트레센으로 가는 길에 들를 수 있는 작은 신사를 골랐다.',
    ]);
    await era.printAndWait([
      '인적 드문 곳에 있어 어떤 신을 모시는지도 알 수 없는 이 신사는 평소처럼 한산했다.',
    ]);
    await era.printAndWait([
      '주홍빛 도리이를 지나자, ',
      you.get_colored_name(),
      '은(는) 신역에 발을 들였다. 굵은 금줄을 두른 거목과 석등롱이 곳곳에 서 있었다.',
    ]);
    if (era.get('flag:当前声望') >= 200) {
      await era.printAndWait([
        '신사의 엄숙한 분위기는 다음 담당을 고대하고 있는 ',
        you.get_colored_name(),
        '에게조차 잠시나마 평온을 가져다주었다.',
      ]);
    } else {
      await era.printAndWait([
        '신사의 엄숙한 분위기는 아직 앞날을 고민하고 있는 ',
        you.get_colored_name(),
        '에게조차 잠시나마 평온을 가져다주었다.',
      ]);
    }
    era.printButton('祈願', 1);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 눈을 감고 깊게 숨을 들이마셨다……',
    ]);
    await kitaru.say_as_unknown_and_wait('오오오오옷——————!!!!');
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 참배의 다음 동작으로 넘어가기 전에 뒤에서 들린 외침이 흐름을 끊었다.',
    ]);
    era.printButton('뒤돌아본다', 1);
    await era.input();
    await era.printAndWait([
      '유감스럽게도 전설과 달리 종소리와 함께 나타난 것은 신이 아니라 한 명의 ',
      kitaru.uma_sex_title,
      '였다.',
    ]);
    await era.printAndWait([
      '조금 헝클어진 주황색 단발. 가슴팍의 리본이 팽팽하게 들려 있었고, 이나리 신의 여우 사자를 떠올리게 하는 길쭉한 귀가 흥분에 맞춰 팔랑팔랑 흔들리고 있었다.',
    ]);
    await era.printAndWait([
      '넘칠 듯 활기찬 겉모습과 달리, 바로 눈앞에 선 이 ',
      kitaru.uma_sex_title,
      '에게서는 이 신사를 닮은 맑고 고요한 향기가 났다. 왼쪽 귀에는 위엄 있는 달마, 오른쪽 귀에는 노란 데이지 장식.',
    ]);
    await era.printAndWait([
      '전혀 다른 두 요소가, ',
      you.get_colored_name(),
      '의 눈앞에 있는 이 ',
      kitaru.uma_sex_title,
      '에게 겹쳐져 있었다.',
    ]);
    await era.printAndWait([
      '그리고 고개를 들어 ',
      you.get_colored_name(),
      '을(를) 바라봤을 때――별 모양의 눈동자는 ',
      kitaru.uma_sex_title,
      '중에서도 보기 드문 편이다.',
      you.get_colored_name(),
      '과(와) 마주친 기쁨으로 반짝반짝 빛나고 있었다.',
    ]);
    era.printButton('자세히 본다', 1);
    await era.input();
    await era.printAndWait([
      '이 활기찬 밤색 머리의 아이는 틀림없이 트레센 학생이다. 입고 있는 교복을 보면 ',
      you.get_colored_name(),
      '도 알 수 있었다.',
    ]);
    await era.printAndWait('그런데…… 지금은 선발 레이스가 열릴 시간이 아닌가?');
    await era.printAndWait([
      you.get_colored_name(),
      '의 시선에 의문이 섞여 있음을 눈치챈 ',
      kitaru.get_colored_name(),
      '은(는) 곧바로 대답했다.',
    ]);
    await kitaru.say_as_unknown_and_wait(
      '맞아요, 맞아요! 자기소개를 깜빡했네요!',
    );
    await kitaru.say_as_unknown_and_wait([
      '제 이름은 【',
      kitaru.get_colored_name(),
      '】! 백흥 님의 인도로 이곳에 왔습니다!',
    ]);
    await kitaru.say_and_wait([
      '운명의 사람이 오기를 기다리고 있었어요! 즉, 트레이너 ',
      you.adult_sex_title,
      ', 바로 당신 말이에요!',
    ]);
    await era.printAndWait([
      '그렇게 말하며, ',
      kitaru.sex,
      '은(는) ',
      you.get_colored_name(),
      '을(를) 향해 두 팔을 활짝 벌렸다.',
    ]);
    await kitaru.say_and_wait(
      '부디! 부디 제 트레이너가 되어 주세요!',
    );
    await era.printAndWait([
      '이 신사의 영험함이 지나치게 강했던 걸까. 아니면 삼여신이나 다른 신의 시선이 우연히 ',
      you.get_colored_name(),
      '에게 닿은 걸까.',
    ]);
    await era.printAndWait('예를 들면 저 백흥 님이라든가.');
    era.printButton('배운 민속 지식을 떠올린다', 1);
    era.printButton('비슷한 신화를 들은 적이 없는지 떠올린다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 단언할 수 있다. 배운 범위 안에서는 이 신의 이름을 들은 기억이 없다.',
      ]);
    } else {
      await era.printAndWait([
        '없다.',
        you.get_colored_name(),
        '은(는) 이 신의 이름을 들어 본 적이 없다고 확신했다.',
      ]);
      await era.printAndWait([
        '눈앞의 ',
        kitaru.uma_sex_title,
        '의 망상일지도 모른다.',
      ]);
    }
    await kitaru.say_and_wait(
      '자! 트레이너님! 트윙클 시리즈에서 함께 행운을 붙잡아요!',
    );
    era.printButton('거절한다', 1);
    era.printButton('받아들인다', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        '아무것도 모르는 상태로 ',
        kitaru.uma_sex_title,
        '의 트레이너가 되는 것은 어느 쪽에게도 무책임한 일이다.',
      ]);
      await kitaru.say_and_wait('우우……');
      await era.printAndWait([
        you.get_colored_name(),
        '에게 거절당한 ',
        kitaru.teen_sex_title,
        '은(는) 눈에 띄게 풀이 죽었다. 쫑긋하던 두 귀도 꼬리와 함께 힘없이 늘어졌다.',
      ]);
      await era.printAndWait([
        '조금 마음이 아팠다. 그래도 ',
        you.get_colored_name(),
        '은(는) 알고 있다. 이 ',
        kitaru.get_colored_name(),
        '의 말만 듣고 ',
        kitaru.sex,
        '의 트레이너가 되는 것은 어느 쪽에게도 무책임한 일이다.',
      ]);
      await era.printAndWait('다만……');
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 문득 깨달았을 때는 거절한 지 몇 초도 지나지 않았는데, ',
        kitaru.get_colored_name(),
        '의 얼굴에 다시 미소가 돌아와 있었다.',
      ]);
      await era.printAndWait(
        '미소라기보다는 오랜 시간 몸에 밴 습관 같은, 틀에 박힌 웃음이었다.',
      );
      await you.say_and_wait('……하아');
      await era.printAndWait([
        '트레이너로서의 책임감이 ',
        you.get_colored_name(),
        '이 일을 그냥 지나치게 두지 않았다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '에 대해 거의 아는 것이 없다. 그래도 방금 전 기도했던 신에게 자신의 운명을 맡겨 보기로 했다.',
      ]);
      await era.printAndWait([
        '그렇다고 해도 이대로 ',
        kitaru.uma_sex_title,
        '의 트레이너가 되는 것은 어느 쪽에게도 무책임한 일이다.',
      ]);
    }
    era.printButton(
      '「네 선발 레이스를 보러 갈게. 그다음에 결정하는 건 어때?」',
      1,
    );
    await era.input();
    await kitaru.say_and_wait('오오――!');
    await kitaru.say_and_wait('맞아요, 맞아요! 바로 그거예요!');
    await kitaru.say_and_wait(
      '곧 열릴 선발 레이스에서! 제 실력을 보여 드릴 테니까요!',
    );
    await kitaru.say_and_wait([
      '그럼 손가락 걸고 약속해요! 그러니까……',
      you.actual_name,
      ' 트레이너님!',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '은(는) 가슴의 명찰을 보고 ',
      you.get_colored_name(),
      '의 이름을 조금 서툴게 읽어 내린 뒤, ',
      you.get_colored_name(),
      '에게 손을 내밀었다.',
    ]);
    await kitaru.say_and_wait('응?');
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 당황하는 모습을 보고, ',
      kitaru.get_colored_name(),
      '은(는) 설명했다.',
    ]);
    await kitaru.say_and_wait('이건 언니가 가르쳐 준 의식이에요!');
    await kitaru.say_and_wait('손가락 걸기 의식이에요!');
    await kitaru.say_and_wait('약속하면 이제 운명인 거예요!');
    era.printButton('손을 내민다', 1);
    await era.input();
    await kitaru.say_and_wait('좋아요! 그럼 결정된 거네요!');
    await kitaru.say_and_wait(
      '반드시 트레이너님과! 계약하고 말 테니까요! 꼭 보러 와 주세요~!',
    );
    era.drawLine({ content: '翌日' });
    await era.printAndWait([
      kitaru.get_colored_name(),
      '의 선발 레이스가 마침내 시작되었다.',
    ]);
    await era.printAndWait([
      '오늘 운세가 나빴던 건지 교통 체증 때문에 조금 늦었다. 간신히 인파를 헤치고, ',
      you.get_colored_name(),
      '은(는) 관중들 사이로 비집고 들어갔다.',
    ]);
    await era.printAndWait([
      '무엇보다 이번 선발 레이스에는 신입생들 사이에서 이미 대도주로 이름을 날린 ',
      kitaru.uma_sex_title,
      '도, 메지로 가문의 신성도, 삼관을 노릴 수 있는 밤색 털의 ',
      kitaru.uma_sex_title,
      '도 있다. 누구 하나만 떼어 놓고 보더라도 트레이너들이 몰려들 만한 상대다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '은(는) 그저 들러리에 불과했다. 주변의 이야기를 들어 보면, ',
      kitaru.sex,
      '을(를) 주목하는 사람은 거의 없었다.',
    ]);
    await era.printAndWait([
      '그럼에도 인파에 밀려난 관중석 구석에서, ',
      you.get_colored_name(),
      '은(는) 게이트로 향하는 ',
      kitaru.get_colored_name(),
      '을(를) 발견했다.',
    ]);
    await era.printAndWait([
      '체육복은 ',
      kitaru.sex,
      '의 굴곡 있는 몸선을 선명하게 드러내고 있었다. 흰 스타킹을 신은 다리는 희고 길었다.',
    ]);
    await era.printAndWait([
      '겉모습만 본다면, ',
      kitaru.sex,
      '은(는) 분명 사랑스러운 ',
      kitaru.uma_sex_title,
      '다.',
    ]);
    await era.printAndWait([
      '다만, ',
      kitaru.sex,
      '의 표정은 조금 난처해 보였다. 빛을 잃은 별 모양 눈동자가 관중석의 누군가를 찾는 듯했다. 인파 구석에 있는 ',
      you.get_colored_name(),
      '은(는) 눈치채지 못한 모양이다.',
    ]);
    await era.printAndWait([
      '결국 스태프의 재촉을 받아, ',
      kitaru.get_colored_name(),
      '은(는) 게이트에 들어갔다.',
    ]);
    era.drawLine({ content: '선발 레이스 종료 후' });
    await era.printAndWait('惨敗……');
    await era.printAndWait([
      '참패라고 해도 좋았다. 굳이 칭찬하자면, ',
      kitaru.sex,
      '의 막판 스퍼트가 간신히 평균 이상이라고 할 수 있는 정도였다.',
    ]);
    await era.printAndWait([
      '달리는 폼마저 어색했고 스퍼트 타이밍도 놓쳐, 순위는 최하위였다.',
    ]);
    await era.printAndWait([
      '정말로 ',
      kitaru.sex,
      '을(를) 담당으로 삼을 것인가.',
      you.get_colored_name(),
      '은(는) 고민하지 않을 수 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '에게는 보였다. 간간이 말을 걸어 오는 트레이너들을 ',
      kitaru.get_colored_name(),
      '은(는) 거절하고 있었다.',
    ]);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '이라는 ',
      kitaru.uma_sex_title,
      '은(는) 의외로 한번 약속하면 끝까지 지키는 타입인 듯했다.',
    ]);
    await kitaru.say_and_wait(
      '죄송합니다! 하지만 저에겐 이미 운명의 사람이 있어요!',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 다가오려는 트레이너들에게 ',
      kitaru.sex,
      '이(가) 큰 소리로 그렇게 말하는 것을 들었다.',
    ]);
    await era.printAndWait([
      '그래도 억지로 미소를 지으려 하고 있었다. 하지만 주사위는 실패만 나온 듯했다. 밤색 꼬리가 힘없이 두 다리 사이로 늘어져 있었다.',
    ]);
    era.printButton(`（${kitaru.name}의 담당이 된다）（모집을 시도한다）`, 1);
    era.printButton('（역시 그만두자……）（모집을 포기한다）', 2);
    const ret = await era.input();
    if (ret === 1) {
      era.printButton(`「${kitaru.name}！」`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '의 이름을 큰 소리로 불렀다. 들리지 않는 건가 싶어 더욱 큰 목소리로 몇 번이나 반복했다.',
      ]);
      era.printButton(`「${kitaru.name}！！！」`, 1);
      await era.input();
      await era.printAndWait([
        '먼저 축 처져 있던 귀가 번쩍 섰다. 불빛을 되찾은 별 모양 눈동자가 ',
        you.get_colored_name(),
        '을(를) 향했다.',
      ]);
      await era.printAndWait([
        '그리고, ',
        you.get_colored_name(),
        '이(가) 지금까지 본 것 중 가장 빠른 막판 스퍼트――선명한 주황빛 번개가 ',
        you.get_colored_name(),
        '에게 일직선으로 날아왔다.',
      ]);
      await era.printAndWait([
        '거리 감각이 없는 ',
        kitaru.get_colored_name(),
        '이(가) 멈추지 못하고 ',
        you.get_colored_name(),
        '의 가슴으로 쓰러지듯 부딪칠 것 같은 순간, ',
        you.get_colored_name(),
        '은(는) 재빨리 머리를 눌러 부딪쳐 오는 움직임을 막았다.',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        '의 힘은 인간의 몇 배나 될 터다.',
        you.get_colored_name(),
        '이(가) 막을 수 있을 리 없다.',
      ]);
      await era.printAndWait([
        '그런데도 ',
        you.get_colored_name(),
        '의 손바닥 아래에서는 ',
        kitaru.sex,
        '은(는) 힘 빠진 토끼처럼 비틀거리고 있었다.',
      ]);
      await kitaru.say_and_wait(
        '역시! 트레이너님은 보러 와 주실 줄 알았어요!',
      );
      await kitaru.say_and_wait('오늘은 역시――');
      await kitaru.say_and_wait('대길이에요! 복이 찾아왔어요!');
      await era.printAndWait([
        kitaru.sex,
        '은(는) 두 손을 하늘로 치켜드는 묘한 포즈를 취한 뒤, ',
        you.get_colored_name(),
        '을(를) 바라봤다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '에게는 ',
        kitaru.sex,
        '의 뜻을 알 수 있었다.',
      ]);
      await era.printAndWait([
        '結局 ',
        you.get_colored_name(),
        '은(는) 지푸라기라도 잡으려는 듯한 그 시선 앞에서 계약서를 꺼냈다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '과(와), 【운명?】의 만남을 이루었다.',
      ]);

      await era.printAndWait([
        kitaru.get_colored_name(),
        '과(와) 계약을 맺었다.',
      ]);
    } else {
      await era.printAndWait([
        '이 아이의 정신 상태를 보면 담당으로 삼기에는 적합하지 않은 것 같다. 관여하지 않는 편이 좋겠다.',
        you.get_colored_name(),
        '은(는) 조용히 그 자리를 떠났다.',
      ]);
    }
    return ret;
  },
};
