// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/108500-Daiichi-Ruby/rec-85"),

  // [번역 완료] rec_start
  async rec_start(ruby, you) {
    const ret = [];
    era.print(
      '오늘의 훈련장은 평소보다 훨씬 북적거린다. 응원, 환호, 감탄……',
    );
    await era.printAndWait(
      `이토록 풍부하고 감정이 가득 찬 목소리는, 오직 경기장 위의 ${ruby.sex}를 위해 자아내진 것이다. 경기장 전체의 시선이 그 한 사람에게 집중된 듯했다.`,
    );
    era.println();

    era.print('신입 트레이너A 「이봐, 이쪽이야!」');
    era.print('신입 트레이너A 「이미 시작했다고!」');
    era.printButton('「지금 갈게!」', 1);
    await era.input();

    await era.printAndWait(
      '신입 트레이너 동료: 「선배가 자세히 봐두는 게 좋다고 했던 우마무스메가…… 봐, 바로 저 아이야.」',
    );
    era.println();

    await era.printAndWait(`친구의 시선을 따라, ${you.name}은(는) 알아차렸다——`);
    era.printButton('（꽤 뒤쪽에서 달리고 있네……）', 1);
    era.printButton('（흰색 스타킹 + 짧은 브루마……）', 2);
    ret.push((ret['hentai1'] = await era.input()));
    if (ret['hentai1'] === 2) {
      era.println();
      era.print('제길, 위의 머리는 멀쩡한데, 아래 머리에 불이 붙어 버렸다.');
      era.print(
        `자신이 완전히 발기한 것을 확인한 순간, ${you.name}의 마음속 깊은 곳에서 불길한 예감이 엄습했다. 설마 나, 로리콘인가?`,
      );
      era.print(
        `${you.name}은(는) 경기장 위의 갈색 머리 우마무스메를 바라보았다. 뛰어난 감식안 덕분에 ${you.name}은(는) 소녀의 키가 겨우 140cm를 넘을까 말까 하다는 것을 한눈에 알아챘다.`,
      );
      era.print(`찰나의 순간, ${you.name}의 시선은 교차하는 두 다리 사이에 고정되었다.`);
      era.print(
        `몸에 딱 붙는 붉은색 체육복 바지 아래로, 새하얀 스타킹이 소녀의 은밀한 곳을 가리고 있었다. 하지만 ${you.name}의 눈에는 통통하고 핑크빛인 조개가 이미 눈앞에 선연히 드러난 것만 같았다. 분명 두부보다 부드러울 것이고, 한 입 머금고 싶어질 만큼 매끄러울 터였다.`,
      );
      era.print(
        `어렴풋이, ${you.name}은(는) 그 짧은 바지 한가운데에 치구로 인해 그려진 유혹적인 가느다란 틈새를 본 것 같았다……`,
      );
      await era.printAndWait(
        '흰색 스타킹을 신은 허벅지는 화창한 햇살 아래에서 사랑스러운 핑크빛을 띠었고, 둥글고 귀여운 엉덩이는 달리는 반동 속에서 기묘한 아름다움을 자아냈다.',
      );
    }
    era.println();

    await era.printAndWait('신입 트레이너A 「이봐 이봐, 너무 넋 놓고 보지 말라고.」');
    era.println();

    await era.printAndWait(
      `${you.name}은(는) 황급히 고개를 돌렸지만, 마지막 순간까지 소녀의 복숭아 빛이 도는 흰색 스타킹 신은 종아리를 훔쳐보는 것을 잊지 않았다.`,
    );
    era.println();

    era.print('신입 트레이너A 「앞이 저렇게 꽉 막혀 있으니, 거리를 좁히기는 힘들겠지.」');
    era.printButton('「그러게.」', 1);
    era.printButton('「아니, 대외곽으로 돌면……」', 2);
    await era.input();

    era.print('신입 트레이너A 「에? 거짓말이지!」');
    await era.printAndWait(
      `베테랑 트레이너A 「정말 대단한 뒷심이군, 저게 바로 그…… 화려한 일족의, ${ruby.name}다.」`,
    );
    era.println();

    era.print(
      '화려한 일족. 정계와 재계, 그리고 우마무스메의 레이스 세계에 이르기까지 모든 곳에서 명성을 떨친 혈족으로, 정통 후계자들이 지금 이 순간에도 도처에서 빛을 발하고 있다.',
    );
    await era.printAndWait('이 나라에서 그 이름을 들어보지 못한 사람은 존재하지 않을 것이다.');
    era.println();

    await era.printAndWait(
      `이미 데뷔한 선배들은 안중에도 없다는 듯, ${ruby.name}는 그 누구보다 빠른 속도로 결승선을 통과했다.`,
    );
    era.println();

    era.print(
      `신입 트레이너A 「엄청나!——…… 저게 소문으로만 듣던 화려한 일족, ${ruby.name}구나. 보아하니 이미 완전히 본격화에 접어들었네.」`,
    );
    era.printButton('（그럼 키는 이제 더 안 크는 건가?）', 1);
    await era.input();

    await era.printAndWait(
      `과연 어떤 트레이너가 그녀의 곁을 지키게 될까? 지금 ${ruby.name}의 주변에는 그녀를 스카우트하고 싶어 안달이 난 수많은 트레이너들이 모여들고 있었다.`,
    );
    era.println();

    era.print(`${you.name}은(는)——`);
    era.printButton('그럴 자신이 없다.（모집을 포기한다）', 1);
    era.printButton('（저런 질주를 보고서, 어떻게 제자리에 멈춰 서 있겠어!）', 2);
    era.printButton('（흰색 스타킹 로리 향긋해……）', 3);
    ret.push((ret['hentai2'] = await era.input()));
    if (ret['hentai2'] > 1) {
      era.println();

      await ruby.say_and_wait(
        '트레이너 여러분, 오늘 저는 이 자리를 빌려 여러분께 한 가지 전해드릴 말씀이 있습니다.',
      );
      era.println();

      era.print(
        `${you.name}은(는) 집사에게서 ${ruby.name}의 전속 트레이너를 결정하는 【선발 테스트】의 상세 자료를 전달받았다.`,
      );
      era.print(
        '【선발 테스트】의 기한은 30일이며, 각 테스트마다 평가를 진행하여 종합 점수에 따라 합격 여부를 결정한다.',
      );
      await era.printAndWait('동점자가 발생할 경우 새로운 테스트 항목이 추가된다고 집사가 덧붙였다.');
      era.println();

      await era.printAndWait(
        `${you.name}은(는) 자료를 살펴보았다. 사교댄스, 테이블 매너…… 그 외에도 다양한 항목들이 있었다. 확실한 것은 평범한 사람이 고작 30일 만에 마스터할 수 있는 내용이 결코 아니라는 점이다.`,
      );
      era.println();

      await ruby.say_and_wait(
        '질문이 없으시다면, 이것으로 마치겠습니다. 귀중한 시간을 내어주셔서 대단히 감사합니다.',
      );
      era.println();

      era.print(`말을 마친 뒤 사람들을 둘러보던 ${ruby.name}의 시선이 ${you.name}과(와) 마주쳤다.`);
      await era.printAndWait(
        '상냥한 표정은 온데간데없이 사라지고, 선홍빛 눈동자에는 유열과 경멸이라는 두 가지 상반된 감정이 어려 있었다.',
      );
      era.println();

      era.print(
        '학원에서 가장 가까운 도장이 제1시험장이다. 테스트 내용이 트레이너의 업무와는 전혀 상관없어 보이지만, 선배 트레이너들은 이미 옷을 갈아입고 출발했다. 참가하겠습니까?',
      );
      era.printButton('（역시 그만두자.）（모집을 포기한다）', 1);
      era.printButton('（……어쩌면 이게 절호의 기회일지도 몰라.）', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        era.println();
        await era.printAndWait(
          '선발 테스트를 돌파한 자신의 모습을 상상하며, 당신은 도장으로 출발하기로 결심했다.',
        );
      }
    }
    return ret;
  },

  // [번역 완료] rec_final
  async rec_final(ruby, you) {
    await ruby.say_as_passer_by_and_wait(
      '편지',
      '트레이너 선발 시험에 참가해 주셔서 진심으로 감사드립니다. 심사 결과는 다음과 같습니다——',
    );
    era.printButton('「……어?」', 1);
    await era.input();

    era.print(
      `${you.name}은(는) 그 편지를 한 손에 움켜쥐고 트레이너실에서 뛰쳐나갔다.`,
    );
    await era.printAndWait(
      `트레이닝장에서 ${ruby.name}을(를) 발견한 당신은 ${ruby.sex}의 이름을 큰 소리로 불렀다`,
    );

    ruby.say('하아…… 그 표정을 보아하니 편지는 잘 도착한 모양이군요.');
    era.printButton('「이 결과는……」', 1);
    await era.input();

    era.print(`${ruby.name}은(는) 정중하게 당신에게 인사했다.`);
    ruby.say(
      '앞으로 잘 부탁드리겠습니다. 서로 격려하며 제대로 정진하도록 하죠.',
    );
    ruby.say('그럼');
    era.printButton('「이 【합격】은요?」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name}은(는) 종이에 적힌 【합격】이 잘못된 것이 아님을 확인했다. 하지만 왜? 자신의 각 시험 결과는 잘해야 평균, 자랑할 만한 수준은 아니었다. 일부를 제외하면……`,
    );
    era.println();

    ruby.say('당신 외에는 아무도 남지 않았답니다.');
    ruby.say('다른 분들은 모두 기권하셨어요.');
    await ruby.say_and_wait(
      '그러므로 당신이 제 트레이너로 선택되었습니다. 이상입니다.',
    );
    era.println();

    era.print('그러니까 우연히 끝까지 남았을 뿐이라고?');
    await era.printAndWait(
      `${
        you.name
      }은(는) 실망해 어깨를 늘어뜨렸고,${ruby.child_sex_title}의 눈에 어린 미소를 눈치채지 못했다.`,
    );
    era.println();

    await era.printAndWait(
      `뭐, 적어도 ${ruby.name}의 트레이너가 되기는 했다고 생각하며 고개를 든 순간——`,
    );
    era.println();

    const temp = era.get('cflag:85:招募状态').special;
    if (temp) {
      era.add('relation:85:0', -temp * 10);
      era.add('love:85', temp);
      await ruby.say_and_wait(
        '끝까지 남으셨군요. 수고하셨어요. 미성년 소녀의 아래를 훔쳐보는 변태 씨.',
      );
    } else {
      await ruby.say_and_wait('끝까지 남으셨군요. 수고하셨어요.');
    }
    era.println();

    await era.printAndWait(
      `멍하니 있는 ${you.name}은(는) 아랑곳하지 않고 ${ruby.name}은(는) 말을 이었다.`,
    );
    era.println();

    await ruby.say_and_wait(
      '계약 전에 몇 가지 과제를 부탁드리고 싶습니다. 저기 서 있는 집사에게 과제를 받아 내일까지 제출해 주세요.',
    );
    era.println();

    await era.printAndWait([
      ruby.get_colored_name(),
      '은(는) 가볍게 웃으며 달려갔다.',
    ]);
  },

  // [번역 완료] rec_out1
  async rec_out1(ruby, you) {
    era.print('학원을 나와 가장 가까운 도장으로……');
    ruby.say('하아아앗!');
    era.print(
      `${ruby.name}의 움직임은 물 흐르듯 자연스러워서, 문외한인 당신도 ${ruby.name}이(가) 어릴 때부터 호신술을 익혀 왔다는 것을 한눈에 알 수 있었다.`,
    );
    era.print(
      '【호신술 훈련을 받고 기본적인 형을 익힐 것.】 거짓말은 아니었던 모양이다.',
    );
    era.printButton('（잠깐 잠깐 잠깐, 방금 그걸 하라고??）', 1);
    await era.input();

    await era.printAndWait(
      '의문이 떠오르는 것과 동시에 이미 몇 명의 참가자가 자신감을 잃고 있었다.',
    );
    era.println();

    await era.printAndWait(
      '집사「이 정도에 주눅 들어서는 앞으로 나아갈 수 없습니다. 온갖 단련을 거쳐 얻는 자신감이야말로 가장 빛나는 품격으로 승화하는 법입니다.」',
    );
    era.println();

    await era.printAndWait(
      `집사「여러분이 앞으로 헌신할 상대는 화려 일족의 영애——${ruby.name} 님입니다. 각오와 자각을 갖춰 주십시오.」`,
    );
    era.println();

    await ruby.say_and_wait(
      '이야기는 여기까지입니다. 최종 판단은 제가 내리겠습니다. 여러분은 선발 시험에 전념해 주세요.',
    );
    era.println();

    era.print('누군가에게 특별 지도를 부탁하려 했는데, 지금은 어떻게 할까?');
    era.printButton('그만두자. 스스로 한다.', 1);
    era.printButton('부탁한다!', 2);
    if ((await era.input()) === 2) {
      era.println();
      era.print('그럼 누구에게 부탁할까?');
      era.printButton('대학 기말고사 직전을 떠올린다. 답은 이미 보인다!', 1);
      await era.input();
      await you.say_and_wait(
        '——정했다. 흰 타이츠를 신은, 무뚝뚝한 영애다.',
        true,
      );
      era.get('cflag:85:招募状态').special++;
    }
  },

  // [번역 완료] rec_out2
  async rec_out2(ruby, you) {
    era.print('다음 시험장은 레스토랑이다');
    era.print(
      `${you.name}은(는) 트레이너실에서 시험장에 도착하자 얼굴이 굳었다. 눈에 들어온 것은`,
    );
    era.print('——자리가 거의 가득 차 있었다. 딱 한 곳을 빼고.');
    era.print(
      `주변의 흥미진진한 시선을 받으며 ${you.name}은(는) 어쩔 수 없이 ${ruby.name} 바로 옆에 앉았다.`,
    );
    era.print(
      '검은 치마 자락이 가장 아름다운 풍경을 가리고 있었지만, 의자 좌판은 테이블보다 조금 높았다.',
    );
    era.print(
      `${you.name}의 시야에는 균형 잡힌 하얀 다리가 살짝 기울어진 채 곧고 우아한 사선을 그리고 있었다.`,
    );
    era.print('완전히 긴장이 풀렸을 때 「이상한 냄새」가 코를 찔렀다.');
    era.print(
      '들이마시면 뇌가 녹고 심신이 풀릴 것 같은, 달콤한 독 같은 향기였다.',
    );
    era.print('신인 트레이너 B「야, 왜 그래? 안색이 이상한데.」');
    era.print('신인 트레이너 C「어디 몸이 안 좋은 거야?」');
    era.print(
      '당신의 이상한 표정과 찌푸린 눈썹을 눈치챈 근처 트레이너들이 나이프와 포크를 내려놓고 걱정했다.',
    );
    era.print(
      `${ruby.name}은(는) 주변에 반응하지 않고 손에 든 나이프를 요리 위로 미끄러뜨렸다. 식기는 소리 하나 내지 않았고, 당신에게는 훌륭한 무성극처럼 보였다. 와인잔을 잡은 손가락 끝까지 가늘어, 평범한 물조차 고급 와인처럼 보인다……`,
    );
    era.printButton('（대단하네……）', 1);
    era.printButton('（쥐고 있는 게 내 물건이면 좋을 텐데……）', 2);
    if ((await era.input()) === 2) {
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print(`식사, 혹은 시험이 끝나고 ${ruby.name}은(는) 자리에서 일어났다.`);
    era.print(
      `오늘 ${ruby.sex}의 상의는 짙은 남색 긴소매로, 섬세한 꽃 자수가 놓여 있었다.`,
    );
    era.print(
      '아래는 종아리까지 내려오는 검은 치마. 가냘프고 하얀 작은 발에는 부드러운 밑창의 가죽 구두가 신겨져 있다.',
    );
    era.print('화려한 갈색 긴 머리를 붉은 나비 장식이 뒤통수에서 묶고 있다.');
    era.print(
      '동양인의 아름다움을 남김없이 드러내는 섬세한 이목구비와 귀족다운 분홍빛 눈동자.',
    );
    era.print('그저 거기에 서 있기만 해도 그림 속 경국지색 같은 모습이었다.');
    era.print(
      `남색과 검은색으로 맞춘 옷감은 고급스러워, 문외한인 ${you.name}도 비싸다는 것을 한눈에 알 수 있었다.`,
    );
    era.print(
      `넋을 잃은 ${you.name}을(를) 보며 ${ruby.name}이(가) 무슨 생각을 하는지는 알 수 없다.`,
    );
    era.print(
      `${ruby.sex}은(는) 치맛자락을 집어 작별 인사를 하고, 우아하게 아름다운 얼굴을 들어 소리 없이 ${you.name}에게 미소 지었다.`,
    );
    await era.printAndWait('이를 드러내지는 않았다. 하지만 견딜 수 없이 달콤했다.');
  },

  // [번역 완료] rec_out3
  async rec_out3(ruby, you) {
    const ret = [];
    await era.printAndWait(
      '그 뒤 며칠 동안 당신은 교양과 지식을 계속 배우고 다시 호신술 복습으로 돌아왔다. 결과는——',
    );
    era.println();

    era.print('베테랑 트레이너 A「항복이다! 이제——못 하겠어!」');
    await era.printAndWait(
      '신인 트레이너 A「나도 항복. 애초에 트레이너에게 이런 게 필요한 거야?」',
    );
    era.println();

    era.print('시험이 진행될수록 스스로 기권하는 사람이 불합격자보다 많아졌다.');
    era.printButton('나도 항복한다.（모집을 포기한다）', 1);
    era.printButton('필요하니까 시키는 거겠지.', 2);
    ret.push((ret['select'] = await era.input()));
    if (ret['select'] === 2) {
      ruby.say('내일 사교댄스 시험에 여러분은 참가하시겠습니까?');
      era.print(
        '「사교댄스」라는 말을 듣자 곁에 남아 있던 동료들도 하나둘 떠났다.',
      );
      era.print(
        `${ruby.name}은(는) 사람들의 대화는 신경도 쓰지 않고 담담히 통보한 뒤 시선을 당신에게 돌렸다. 눈빛에 약간의 의외가 묻어 있었다.`,
      );
      era.print(
        `${ruby.name}에게서는 그날 레이스장에서 느껴졌던 열정이 보이지 않았다.`,
      );
      era.print(
        '트레이너 선발 시험에 참가한 것도 「혹시나」 하는 기대 때문이었다.',
      );
      era.print(
        `안타깝게도 현실은 ${you.name}에게 알려 주었다. 자신과 ${ruby.name} 사이의 격차가 얼마나 멀고 넘기 어려운지를.`,
      );
      era.print(
        `${ruby.sex}은(는) 험준한 절벽 위에 태어나 누구도 손댈 수 없는 높은 산의 꽃이다.`,
      );
      era.printButton('（나는 어울리지 않는다. 그만두자.）（모집을 포기한다）', 1);
      era.printButton(
        '（……하지만 그 뛰어난 달리기, 그 모습은 평생 잊지 못할 것이다.）',
        2,
      );
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        ruby.say(
          '……여기에 남으셨다는 건 다음 시험에도 참가하시겠다는 뜻으로 이해해도 되겠죠?',
        );
        era.print(`아름다운 진홍빛 눈동자가 똑바로 ${you.name}을(를) 바라봤다.`);
        era.printButton('「네!!!」', 1);
        await era.input();

        ruby.say('음——!');
        await ruby.say_and_wait('흐음…………');

        ruby.say('알겠습니다.');
        era.print(
          `${ruby.child_sex_title}의 뺨에 옅은 홍조가 떠오른 이유는 당신에게 알 수 없었다.`,
        );
        ruby.say('시험 곡목 등은 잊지 말고 확인해 주세요…… 그럼 안녕히 주무세요.');
        era.print(`${ruby.name}은(는) 당신에게 인사했다.`);
        era.printButton('체육관으로 달려간다', 1);
        await era.input();
      }
    }
    return ret;
  },

  // [번역 완료] rec_out4
  async rec_out4(ruby, you) {
    era.print(
      `${you.name}은(는) 혼자서 내일 시험에 나올 사교댄스를 묵묵히 반복했다. 하지만……`,
    );
    era.printButton('（어렵다!）', 1);
    await era.input();

    era.print('당연하다. 하루 이틀 만에 익힐 수 있는 게 아니다.');
    era.printButton('（배울 수 있는 만큼 배우는 수밖에.）', 1);
    await era.input();

    era.print('타닥, 타닥, 타닥……');
    ruby.say('아직도 연습하고 계신가요?');
    await ruby.say_and_wait(
      '다른 분들은 이미 돌아가셨어요. 당신도 이제는 쉬시는 편이 좋을 것 같습니다.',
    );
    era.println();

    era.print('사교댄스 시험은 내일이다. 지금은 체면을 신경 쓸 때가 아니다.');
    era.print(`${you.name}은(는) 각오를 다지고——`);
    era.printButton('「사교댄스를 지도해 주실 수 없을까요?」', 1);
    await era.input();

    ruby.say('……');
    await ruby.say_and_wait('우선 자세부터 바로잡아 주세요.');
    era.println();

    await era.printAndWait(
      `${ruby.name}은(는) 당신 앞으로 다가와 하나하나 손수 지도하기 시작했다.`,
    );
    era.println();

    await ruby.say_and_wait(
      '춤 동작은 이미 외우셨겠죠? 그럼 시작하겠습니다.',
    );
    era.println();

    era.print(
      `${ruby.sex}은(는) 한숨을 쉬고 당신 품 안으로 들어왔다. 부드러운 귀가 때때로 ${you.name}의 뺨에 닿았다.`,
    );
    era.print(`${ruby.name}의 지도는 의심할 여지 없이 엄격했다.`);
    era.print(
      `${you.name}은(는) ${ruby.name}의 말대로 음악에 맞춰 ${ruby.sex}와(과) 몸을 움직였다.`,
    );
    await era.printAndWait(
      `임시 파트너를 내려다보려던 순간, 작고 앳된 손이 ${you.name}의 뺨에 닿았다.`,
    );
    era.println();

    ruby.say(
      '고개를 들어 주세요. 무언가를 이루고 싶다면 언제나 위엄 있는 태도를 유지해야 합니다.',
    );
    await ruby.say_and_wait(
      '부끄러워할 일이 있으신가요? 없다면 자신을 위해 시선을 앞으로 두고 가슴을 펴고 고개를 드셔야 합니다.',
    );

    await era.printAndWait(
      `${ruby.sex}에게 그 말을 듣고 당신은 지금까지의 ${ruby.name}의 행동을 떠올렸다.`,
    );
    era.println();

    ruby.say(
      '네. 그 모습을 잊지 말아 주세요. 원하는 것이 있다면 그에 걸맞은 행동을 해야 합니다.',
    );
    ruby.say('그래야 언젠가 되고 싶은 자신이 될 수 있으니까요.');
    await era.printAndWait(`${ruby.name}은(는) 말을 마치고 방긋 웃었다.`);
    era.println();

    await era.printAndWait(
      `그 뒤 행사장 설치 업체가 와도 ${you.name}와(과) ${ruby.name}은(는) 장소를 야외로 옮겨 연습을 계속했다.`,
    );
    era.println();

    await era.printAndWait(
      `——그리고 다음 날, ${ruby.name}의 「세심한 지도」 덕분에 ${you.name}은(는) 시험에서 모두의 눈길을 끄는 성과를 냈다.`,
    );
  },

  // [번역 완료] rec_out5
  async rec_out5(ruby, you, breast_cup) {
    era.print(`다른 영애들과의 다과회에서 ${you.name}은(는) 경악했다!`);
    era.print(`트레이너는 ${you.name} 혼자뿐이다. 다른 사람은 아무도 없다.`);
    era.printButton('다들 다른 장소나 다른 날에 시험을 보는 게 틀림없다!', 1);
    await era.input();

    era.print(`독특한 분위기도 여성들의 체향도 ${you.name}에게는 익숙하지 않았다.`);
    era.print(`긴장한 ${you.name}은(는) 찻잔의 홍차를 단숨에 마셔 버렸다.`);
    era.printButton('（한 잔 더 마시자! 그래）', 1);
    await era.input();

    await ruby.say_and_wait('빤히……');
    era.println();

    era.print(`이 다과회는 ${ruby.name}이(가) 주최하고 있다.`);
    era.print('이 자리에서 직접 따라 마시면……');
    era.printButton('（차를 따르는 솜씨가 좋다.）', 1);
    await era.input();

    await era.printAndWait(
      `……${you.name}은(는) 그 표현이 조금 이상한 것 같다고 느꼈다. 하지만 스스로 차를 따른 것이 예법에 어긋난다는 점은 더 분명해졌다.`,
    );

    ruby.say('……칭찬해 주셔서 영광입니다.');
    era.print(`말을 마치고 ${ruby.name}이(가) 두 번째 잔을 따라 주었다.`);
    await era.printAndWait(`${you.name}이(가) 안도한 바로 그때——`);

    era.print(
      '집사「아가씨, 여러분. 시간이 되었습니다. 모실 차량이 준비되어 있습니다.」',
    );
    era.printButton('「만찬회?」', 1);
    await era.input();

    await ruby.say_and_wait(
      '네, 다음 시험장이기도 합니다. 그럼 가시죠.',
    );
    era.println();

    era.print(
      `${ruby.name}은(는) 문답무용으로 ${you.name}을(를) 사진으로만 보던 호화 여객선으로 데려갔다.`,
    );
    await era.printAndWait(
      `${you.name}은(는) 크게 놀랐다. 하지만——${ruby.name}은(는) 재계와 정계의 명사들 앞에서도 전혀 주눅 들지 않았고, ${you.name}와(과)는 완전히 달랐다.`,
    );
    era.println();

    await era.printAndWait(
      `주위를 둘러보면 그날 트레이닝장과 마찬가지로 많은 시선이 ${ruby.sex}의 모습을 쫓고 있다. 큰 기대는 모두 화려 일족을 향하고 있었다.`,
    );
    era.println();

    ruby.print(
      '【원하는 것이 있다면 그에 걸맞은 행동을 해야 합니다. 그래야 언젠가 되고 싶은 자신이 될 수 있으니까요.】',
    );
    era.print(`${you.name}의 목표는——`);
    era.printButton(`${ruby.name}에게 어울리는 트레이너가 된다`, 1);
    era.printButton(ruby.name, 2);
    if ((await era.input()) === 2) {
      era.print(
        `${ruby.name}의 체구는 작다고 할 수 있지만 가슴은 ${breast_cup}컵이나 된다. 매끄러운 뺨, 귀여운 의상. 트레이너인 ${
          you.name
        }도 음란한 일을 많이 하고 싶어진다.`,
      );
      era.print('초등학생처럼 작은 체구에게 키스를 받는다');
      era.print('도톰한 입술이 피부에 닿는 감촉');
      era.print('우유처럼 매끄러운 피부');
      await era.printAndWait('작은 혀가 귀에 파고들고, 귓가에 속삭임을 듣는다');
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print('……그래, 그런 거다.');
    await era.printAndWait(
      `정신을 차리고 보니 시선은 이미 ${ruby.name}에게서 떨어지지 않았다.`,
    );
    era.println();

    await era.printAndWait('심야의 교문 앞.');
    ruby.say(
      '수고하셨습니다. 그럼 이 뒤에도 트레이닝이 남아 있으니 저는 이만 실례하겠습니다.',
    );
    era.printButton('「네? 지금부터요?」', 1);
    await era.input();

    ruby.say('네. 신경 쓰지 마시고 먼저 돌아가 주세요. 내일 시험은——');
    era.printButton('「제가 도와드릴 일은 없을까요!」', 1);
    await era.input();

    ruby.say('딱히 필요하지 않습니다.');
    era.printButton('「타임을 재는 것이라든가!」', 1);
    await era.input();

    ruby.say('……');
    era.printButton('「재고 싶습니다. 정말로요.」', 1);
    await era.input();

    await ruby.say_and_wait('마음대로 하세요. 재 보시죠.');

    era.print(
      `이날 밤 ${you.name}은(는) 마음속 무언가가 변한 것 같았다. 분명 ${ruby.name}의 말이 자신을 바꾼 것이리라.`,
    );
    await era.printAndWait(
      '（당분간은 선발 시험 때문에 외출할 일은 없을 것 같다）',
    );
  },

  // [번역 완료] rec_week_end
  async rec_week_end(ruby, you) {
    era.print(
      `호화 여객선에서의 일 이후, 시험이 끝난 뒤 ${ruby.name}의 트레이닝을 도와주는 것이 ${you.name}의 일상이 되었다. ${you.name}은(는) 휴일까지 ${ruby.name}에게 썼다.`,
    );
    era.print(
      '하지만 시험이 막바지에 접어든다는 것은 이런 도움도 이번이 마지막이라는 뜻이다.',
    );
    era.printButton('「수고하셨습니다.」', 1);
    await era.input();

    ruby.say('당신도요.');
    era.printButton('「트레이너 선발 시험도 이제 곧 끝나는군요.」', 1);
    await era.input();

    await ruby.say_and_wait(
      '말씀하신 대로입니다. 또 시선이 내려가 있군요. 가슴을 펴고 턱을 당겨 서세요.',
    );
    era.println();

    await era.printAndWait('위험했다. 다리를 조금 봤을 뿐인데 들킬 뻔했다.');
    era.println();

    await ruby.say_and_wait(
      '의식은 태도에 드러납니다. 다시 한번 가슴에 손을 얹고 스스로에게 물어보세요. 당신의 마음은 어디에 있나요?',
    );
    era.println();

    era.print(
      `아직 포기하지 않은 트레이너는 분명 있을 것이다. 줄곧 ${ruby.name}을(를) 지켜본 ${you.name}은(는) 자신이 선택될 확률이 거의 없다는 것을 알고 있었다.`,
    );
    era.printButton('「지금까지 정말 감사했습니다!」', 1);
    await era.input();

    await ruby.say_and_wait('후……');
    era.println();

    era.print(
      `${you.name}은(는) ${ruby.name}에게 이 시험을 끝까지 치를 수 있었던 것을 영광으로 생각한다고 말했다.`,
    );
    await era.printAndWait(
      `결과가 어떻든 ${you.name}은(는) 이 한 달 동안 배운 것을 앞으로 성장할 힘으로 바꿀 생각이다.`,
    );
    era.println();

    await ruby.say_and_wait('……네. 수고하셨습니다.');
    era.println();

    era.print(
      `처음부터 끝까지 서로 사이에는 거리가 있었다. 그것이 ${you.name}을(를) 조금 쓸쓸하게 만든 것은 또 다른 이야기다.`,
    );
    era.print(
      `그때 트레이너가 누구든, 어떤 사람이든 ${you.name}은(는) 그 사람을 응원할 생각이었다.`,
    );
    await era.printAndWait(
      `고귀하고 긍정적인 ${ruby.sex}을(를) 지탱하며 함께 나아가 주기를 바랐다.`,
    );
  },
};
