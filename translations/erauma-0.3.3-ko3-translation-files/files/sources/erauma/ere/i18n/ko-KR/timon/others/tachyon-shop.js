// 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
// 원본 경로: sources/erauma/ere/i18n/ko-KR/timon/others/tachyon-shop.js
// 대상 함수/속성: start_first
/**
 * @file 売店 - システム提示
 * @author 幽白書
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  /**
   * タキオンがチームにいる、熱恋＆良好以上、初めて売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start_first_love(tachyon, you, callname) {
    await tachyon.say_and_wait([
      '어이쿠, ',
      callname,
      '…… 설마 이런 곳까지 오다니, 정말이지…… 그렇게나 급했던 건가……',
    ]);
    await printAndWait([
      '한가롭게 거닐던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 얼굴을 붉히며 부끄러워하는 밤색 털의 ',
      tachyon.uma_sex_title,
      '를 발견했다.',
    ]);
    await printAndWait([
      tachyon.sex,
      '의 블라인드 같은 진홍빛 눈동자에는 광기와 신비가 서려 있었고, 다소 커 보이는 흰 가운은 안쪽에 매달린 물건들로 인해 팽팽하게 부풀어 있었다.',
    ]);
    await printAndWait([
      '수상한 행동을 하는 ',
      tachyon.sex,
      ', 그 정체는 바로 ',
      you.get_colored_name(),
      '의 담당 ',
      tachyon.uma_sex_title,
      '이자 연인인 ',
      tachyon.get_colored_name(),
    ]);
    if (get('exp:32:性爱次数') > get('exp:32:睡奸次数')) {
      await tachyon.say_and_wait(
        '……설마, 내가 너무 무리하게 해대서 약이 필요해진 건가…… 아, 아니…… 그런 건 어쩔 수 없지 않나, 서로의 상성을 실험해야 하니까……',
      );
      await tachyon.say_and_wait(
        '그리고 그, 뭐냐……그건 기분 좋으니…… 한꺼번에 많이 사두게. 돌아가서 쓰기 편하게 말이야♡',
      );
    } else if (get('exp:0:性爱次数') > get('exp:0:睡奸次数')) {
      await tachyon.say_and_wait(
        '나, 나대신 다른 누구랑 하려는 건 아니겠지? ……아, 아니지? 그럴 리가 없지. 이건 전부…… 전부…… 나랑 하려고 사는 거지?',
      );
      await tachyon.say_and_wait(
        '정말인가? 거짓말은 아니겠지? ……알겠네, 오늘 밤 기대하고 있겠네♡',
      );
    } else {
      await tachyon.say_and_wait([
        callname,
        '…… 으음, 이해했네. 이미 사귀기 시작했으니, 나도 그 정도 각오는 되어 있네……',
      ]);
      if (you.sex_code === 1) {
        await tachyon.say_and_wait(
          '듣기로는 인간 남성의 성욕은 매우 강하다고 하더군…… 솔직히 지금까지 잘도 참았다가 이제야 온 게 더 놀라울 정도야……',
        );
      }
      await tachyon.say_and_wait([
        '미리 확인해두겠는데, 자네가 그럴 리 없다고 생각은 하지만…… 이 약들, 나랑 하기 위해 사는 거 맞겠지? ……',
        callname,
        '?',
      ]);
    }
    await tachyon.say_and_wait('어쨌든, 오늘의 물건들을 확인해 보게나.');
  },
  /**
   * タキオンがチームにいる、愛欲＆良好以上
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   * @param {boolean} is_first 初めて売店へ来たか
   */
  async start_lust(tachyon, you, callname, is_first) {
    if (is_first) {
      await tachyon.say_and_wait([callname, '? 여기서 뭘 하고 있는 건가?']);
    } else if (!get('exp:32:性爱次数')) {
      tachyon.say('……또 온 건가? 이번엔 또 어떤 녀석이랑……');
    } else {
      tachyon.say([
        '그렇게 하고도 모자란 건가…… 정말 정력적이군, ',
        callname,
        ', 자네의 내부 구조를 연구해보고 싶어질 정도군.',
      ]);
    }
    print([
      '한가롭게 거닐던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 수상쩍은 분위기를 풍기는 밤색 털의 ',
      tachyon.uma_sex_title,
      '를 발견했다.',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍빛 눈동자에는 광기와 신비가 서려 있었고, 다소 커 보이는 흰 가운은 안쪽에 매달린 물건들로 인해 팽팽하게 부풀어 있었다.',
    ]);
    print([
      '수상한 행동을 하는 ',
      tachyon.sex,
      ', 그 정체는 바로 ',
      you.get_colored_name(),
      '의 담당 ',
      tachyon.uma_sex_title,
      '인 ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait([
        callname,
        '…… 여기가 뭘 파는 곳인지는 알고 있겠지…… 다시 말해…… 자네, 그런 상대가 생긴 건가?',
      ]);
      await printAndWait([
        tachyon.get_colored_name(),
        '이 왠지 모르게 긴장된 표정으로 물었다.',
      ]);
      printButton('당연히 있지', 1);
      printButton('없어', 2);
      if ((await input()) === 1) {
        await tachyon.say_and_wait([
          '호오? 상대가 누구지? 자네같이 온몸에서 빛을 내뿜는 수상한 인물에게 반할 녀석이 있다니? 인간인가, 아니면 ',
          tachyon.uma_sex_title,
          '인가?',
        ]);
        await tachyon.say_and_wait(
          '아니, 이건 그저 생물 다양성에 대한 탐구이자 고찰일 뿐이네. 좋아하는 사람에 대한 정보를 제출하는 것은 자네가 모르모트로서 해야 할 가장 기초적인 정보 공유지……',
        );
        await tachyon.say_and_wait(
          '뭐 됐네, 어차피 언젠가는 알아낼 수 있을 테니까.',
        );
      } else {
        await tachyon.say_and_wait(
          '……후후, 예상대로군. 자네처럼 온몸에서 빛을 내뿜는 수상한 인물을 좋아할 녀석이 있다면 오히려 내가 관찰 연구를 해야 할 판이지.',
        );
        await tachyon.say_and_wait([
          '하지만 그렇게 되면, 자네가 이 약들을 필요로 하는 이유가 참 의문스러워지는군. 이보게, ',
          callname,
          ', 설마 범죄 같은 걸 저지르려는 건 아니겠지?',
        ]);
        await tachyon.say_and_wait(
          '그러고 보니, 약물 반응에 대한 피드백을 받은 지도 꽤 된 것 같군……',
        );
        await tachyon.say_and_wait(
          '뭐 됐네, 마음대로 쓰게나. 연구를 위해서라면 어떤 대가를 치르더라도 시도해 볼 가치가 있지…… 비록 나 자신이라 할지라도 말이야.',
        );
        await tachyon.say_and_wait(
          '내가 뭘 암시하고 있냐고? 글쎄, 누가 알겠나. 이 무신경한 모르모트 군이 내 말뜻을 눈치챌 수 있을지 모르겠군.',
        );
      }
    }
    tachyon.say('어쨌든, 오늘의 물건들을 확인해 보게나.');
  },
  /**
   * タキオンがチームにいる、低恋慕＆冷淡以上、初めて売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  // [번역 대상] start_first — 함수/속성 전체 문맥에서 남은 원문을 번역
  async start_first(tachyon, you, callname) {
    await tachyon.say_and_wait(['이런, 이거 ', callname, ' 아닌가?']);
    await printAndWait([
      '한가롭게 거닐던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 수상쩍은 분위기를 풍기는 밤색 털의 ',
      tachyon.uma_sex_title,
      '를 발견했다.',
    ]);
    await printAndWait([
      tachyon.sex,
      '의 블라인드 같은 진홍빛 눈동자에는 광기와 신비가 서려 있었고, 다소 커 보이는 흰 가운은 안쪽에 매달린 물건들로 인해 팽팽하게 부풀어 있었다.',
    ]);
    await printAndWait([
      '수상한 행동을 하는 ',
      tachyon.sex,
      ', 그 정체는 바로 ',
      you.get_colored_name(),
      '의 담당 ',
      tachyon.uma_sex_title,
      '인 ',
      tachyon.get_colored_name(),
    ]);
    await tachyon.say_and_wait(
      '자네가 이런 부류의 인간이었다니…… 뭐, 상관없네. 식(食)과 색(色)은 인간의 본성이라 하지 않았나. 하지만 일부러 약까지 사러 나오다니,',
    );
    await tachyon.say_and_wait([
      '아무래도 평소에 먹이는 약의 양을 두 배로 늘려야겠군…… 그래서 말해 보게, 대체 어떤 ',
      tachyon.uma_sex_title,
      '에게 반한 건가?',
    ]);
    printButton('솔직하게 대답한다', 1);
    printButton('고개를 저어 거절한다', 2);
    if ((await input()) === 1) {
      print('相手の名前を入力：');
      let _default = false;
      switch (await input()) {
        case '爱丽速子':
        case '速子':
        case 'アグネスタキオン':
        case 'タキオン':
        case '你':
        case '妳':
        case 'あなた':
        case '君':
          if (get('relation:32:0') <= 150) {
            await tachyon.say_and_wait([
              '……',
              callname,
              ', 어떤 농담은 하지 않는 것이 신상에 좋을 때가 있다네.',
            ]);
            await printAndWait([
              tachyon.sex,
              '는 입만 웃고 있는 표정을 지었지만, 눈빛에는 짙은 경고의 의미가 담겨 있었다.',
            ]);
            await printAndWait([
              '이 질문은 ',
              tachyon.get_colored_name(),
              '의 심기를 건드린 것 같다. 더 이상 말하지 않는 편이 좋을 것 같다……',
            ]);
          } else {
            await tachyon.say_and_wait(
              '그렇게 내가 좋다면, 내일 이 약을 시험해 보게나.',
            );
            await tachyon.say_and_wait([
              '이상하게도 이 약을 마신 사람들은 모두 아름다운 ',
              tachyon.teen_sex_title,
              '의 모습을 보았다고 하더군. 그 ',
              tachyon.teen_sex_title,
              '를 제외한 세상의 다른 모든 것들은 고깃덩어리처럼 보였다던가……',
            ]);
            await tachyon.say_and_wait(
              '이상하군, 이건 분명 시력을 개선하는 약일 뿐인데. 대체 어떻게 된 일일까.',
            );
            await printAndWait([
              tachyon.sex,
              '는 ',
              you.get_colored_name(),
              '이(가) 한 말을 대충 넘겨버렸다. 진심으로 받아들이지 않은 모양이다.',
            ]);
          }
          break;
        case '曼城茶座':
        case '茶座':
        case 'マンハッタンカフェ':
        case 'カフェ':
          // カフェとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 25) {
            await tachyon.say_and_wait('설마 카페 군이라니……!');
            await printAndWait([
              tachyon.get_colored_name(),
              '은 왠지 모르게 경외심 섞인 표정을 지었다.',
            ]);
            await tachyon.say_and_wait(
              '필요한 게 있다면 얼마든지 가져가게! 20% 할인…… 아니, 30% 할인해 주지! 대신 조건이 있네. 모든 과정을 기록해서 남겨주게!',
            );
            await tachyon.say_and_wait(
              '실험 보고서 형식으로 작성…… 아니, 아예 전부 녹화해 오게나!',
            );
            await tachyon.say_and_wait(
              '크흐흐흐, 실험 외에도 그 녀석이 정욕에 빠진 모습을 볼 수 있다니…… 너무 재미있겠군!',
            );
            await printAndWait([
              you.get_colored_name(),
              '은(는) ',
              tachyon.get_colored_name(),
              '의 갑작스러운 속사포 제안에 당황하며 서둘러 ',
              tachyon.sex,
              '의 제안을 거절했다.',
            ]);
            await tachyon.say_and_wait('칫…… 거절하는 건가? 뭐 됐네.');
            await printAndWait([
              tachyon.get_colored_name(),
              ' はがっかりしてため息をつき、白衣の内側を探り始めた',
            ]);
            await tachyon.say_and_wait([
              '그렇다면…… 이걸 주겠네, ',
              callname,
              '.',
            ]);
            await printAndWait([
              you.get_colored_name(),
              '은(는) ',
              tachyon.get_colored_name(),
              '에게 장기 기증 동의서를 한 장 받았다. 수혜 기관은 ',
              tachyon.get_colored_name(),
              ' 연구실이었다.',
            ]);
            printButton('……', 1);
            await input();
            await tachyon.say_and_wait([
              '카페 군이라면 시체를 훼손하는 취미는 없을 테니, 아마 장기의 80% 정도는 연구용으로 온전히 남겨주겠지. 나중에 ',
              tachyon.sex,
              '와 상의해서 좀 깔끔하게 절단해달라고 해야겠군……',
            ]);
            await printAndWait([
              you.get_colored_name(),
              '은(는) 온몸에 식은땀을 흘리며, 눈앞에서 웃는 얼굴로 무서운 소리를 하는 ',
              tachyon.get_colored_name(),
              '를 바라보았다.',
            ]);
            await tachyon.say_and_wait(
              '하하하, 농담이라네…… 하지만 만약을 위해 서명은 해 두지 않겠나?',
            );
          } else {
            _default = true;
          }
          break;
        case '大和赤骥':
        case '大和':
        case '赤骥':
        case 'ダイワスカーレット':
        case 'ダイワ':
        case 'スカーレット':
          // ダイワとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 9) {
            await tachyon.say_and_wait([
              '……',
              callname,
              ', 만약을 위해 묻겠는데, 만약 내일이 자네 인생의 마지막 날이라면 어떤 색깔의 약을 마시고 싶나?',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              '은 거의 냉혹함에 가까운 눈빛으로 ',
              you.get_colored_name(),
              '을(를) 바라보았다.',
            ]);
            printButton('「……!?」', 1);
            printButton('「살려줘!」', 2);
            tachyon.sex_code - 1 &&
              printButton('「적어도 스칼렛의 가슴에 묻혀 죽고 싶어!」', 3);
            await input();
            await tachyon.say_and_wait([
              '후후…… 농담일 뿐이라네…… 그런데 ',
              callname,
              ', 자네는 산이 좋은가, 바다가 좋은가?',
            ]);
            await tachyon.say_and_wait(
              '아니, 이런 어리석은 질문을 왜 했지. 역시 내 실험실의 포르말린이 가장 좋겠지?',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              '의 눈빛은 전혀 농담을 하는 것처럼 보이지 않았다……',
            ]);
          } else {
            _default = true;
          }
          break;
        case '森林宝穴':
        case '宝穴':
        case 'ジャングルポケット':
        case 'ポケット':
          // ポケットとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 94) {
            await tachyon.say_and_wait([
              '……',
              callname,
              ', 바보를 건드리는 건 범죄라네?',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              '은 마치 쓰레기를 보는 듯한 눈빛으로 ',
              you.get_colored_name(),
              '을(를) 바라보았다.',
            ]);
            await tachyon.say_and_wait([
              '장사꾼이자 광기 어린 과학자라는 입장상 참견할 일은 아니지만, 조금 경찰에 신고하고 싶어지는군, ',
              callname,
            ]);
            await printAndWait([
              you.get_colored_name(),
              '은(는) 그저 어색하게 웃을 뿐이었다.',
            ]);
          } else {
            _default = true;
          }
          break;
        default:
          _default = true;
      }
      if (_default) {
        await tachyon.say_and_wait(
          '호오…… 흥미롭군. 그렇다면 사용 후의 데이터와 감정 변화를 보고서 형식으로 정리해서 제출하도록 하게.',
        );
        await printAndWait([
          tachyon.get_colored_name(),
          '은 무척 즐거워 보였지만, ',
          you.get_colored_name(),
          '은(는) 그것이 그저 실험 데이터에 대한 흥미일 뿐이라는 것을 알고 있었다.',
        ]);
      }
    } else {
      await tachyon.say_and_wait(
        '그렇게 부끄러워할 것 없네, 다른 사람에겐 말하지 않을 테니.',
      );
      await printAndWait([tachyon.get_colored_name(), '은 흥이 깨진 듯한 표정을 지었다.']);
    }
    await tachyon.say_and_wait('어쨌든, 오늘의 물건들을 확인해 보게나.');
  },
  /**
   * タキオンがチームにいる、疑念、売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  start_doubt(tachyon, you) {
    tachyon.say('……왔나. 이번엔 또 누굴 망치려고 약을 사러 온 거지?');
    print([
      '한가롭게 거닐던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 수상쩍은 분위기를 풍기는 밤색 털의 ',
      tachyon.uma_sex_title,
      '를 발견했다.',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍빛 눈동자에는 광기와 신비가 서려 있었지만, ',
      you.get_colored_name(),
      '을(를) 보는 눈빛은 더러운 오물을 보는 듯했다. 다소 커 보이는 흰 가운은 안쪽에 매달린 물건들로 인해 팽팽하게 부풀어 있었다.',
    ]);
    tachyon.say(
      '칫…… 정말이지, 자네 같은 인간에게 약을 팔아도 되는 건지 수십 번은 넘게 고민했다네.',
    );
    tachyon.say('됐으니까, 오늘은 무슨 물건이 있는지 알아서 보게나.');
  },
  /**
   * タキオンがチームにいる、失望、売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  start_hate(tachyon, you) {
    tachyon.say('……쳇.');
    print([
      '한가롭게 거닐던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 수상쩍은 분위기를 풍기는 밤색 털의 ',
      tachyon.uma_sex_title,
      '를 발견했다. ',
      tachyon.sex,
      '의 블라인드 같은 진홍빛 눈동자에는 광기와 신비가 서려 있었다.',
    ]);
    print([
      you.get_colored_name(),
      '을(를) 발견한 순간 그 눈빛은 적의로 가득 찼으며, 다소 커 보이는 흰 가운은 안쪽에 매달린 물건들로 인해 팽팽하게 부풀어 있었다.',
    ]);
    print([
      '증오 섞인 눈으로 ',
      you.get_colored_name(),
      '를 노려보는 ',
      tachyon.sex,
      ', 그 정체는 바로 ',
      you.get_colored_name(),
      '의 담당 ',
      tachyon.uma_sex_title,
      '인 ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      '더 나은 실험 동물이 없었다면, 이 약들에 사람을 죽지도 살지도 못하게 만드는 것들을 잔뜩 섞어 넣었을 텐데 말이야.',
    );
    print([tachyon.sex, '는 아무렇지도 않게 위험천만한 소리를 내뱉었다.']);
    tachyon.say('알아서 보고, 돈이나 내놓고 빨리 꺼지게.');
  },
  /**
   * タキオンがチームにいる、汎用
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start(tachyon, you, callname) {
    tachyon.say(['이런, 이거 ', callname, ' 아닌가?']);
    print([
      '한가롭게 거닐던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 수상쩍은 분위기를 풍기는 밤색 털의 ',
      tachyon.uma_sex_title,
      '를 발견했다.',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍빛 눈동자에는 광기와 신비가 서려 있었고, 다소 커 보이는 흰 가운은 안쪽에 매달린 물건들로 인해 팽팽하게 부풀어 있었다.',
    ]);
    print([
      '수상한 행동을 하는 ',
      tachyon.sex,
      ', 그 정체는 바로 ',
      you.get_colored_name(),
      '의 담당 ',
      tachyon.uma_sex_title,
      '인 ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      '처음 온 풋내기도 아니고, 여기가 뭐 하는 곳인지 알고 왔겠지? 필요한 약이 있으면 말하게나. 마시고 난 다음 날에는 잊지 말고 실험 결과를 보고하도록 하고.',
    );
    printButton('「대놓고 실험이라고 말하다니……」', 1);
    printButton('「실험용 약이라면 나한테 돈을 받으면 안 되는 거 아냐?」', 2);
    await input();
    tachyon.say([
      '으음~~ 만약 자네가 사는 약 속에 성기가 빛나거나, 전신 피부가 투명해지거나, 사정된 정액이 강력한 부식성을 띠게 되는 기능을 추가해도 상관없다면 공짜로 줄 수도 있네만?',
    ]);
    print([you.get_colored_name(), '은(는) 군말 없이 얌전하게 지갑을 꺼냈다.']);
    tachyon.say('그래야 착한 아이지. 그럼 오늘의 물건들을 확인해 보게나.');
  },
  /**
   * タキオンがチームにいる場合の売店導入の締め。どの分岐も最後はこの一文
   * @param {CharaTalk} tachyon タキオン
   */
  async start_final_welcome(tachyon) {
    await printAndWait([
      tachyon.get_colored_name(),
      '은 ',
      tachyon.sex,
      '의 흰 가운을 활짝 펼쳤다……',
    ]);
  },
  /**
   * タキオンがチームにいない、純粋な初見
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  async start_first_out_of_team(tachyon, you) {
    await tachyon.say_as_unknown_and_wait(
      '오, 새로운 먹잇감... 아니 모르모트... 아니 손님이군.',
    );
    await printAndWait([
      '돌아다니던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 신비로운 분위기의 밤색 털을 가진 ',
      tachyon.uma_sex_title,
      '를 만났다.',
    ]);
    await printAndWait([
      tachyon.sex,
      '의 블라인드같은 짙은 붉은 눈동자에는 광기와 신비가 서려 있었고,',
    ]);
    await printAndWait(
      '좀 커 보이는 흰 가운은 안에 걸려있는 물건들로 꽉 차 있었다.',
    );
    await tachyon.say_as_unknown_and_wait(
      '하하하, 여기까지 왔으니, 여기가 무슨 곳인지 잘 알고 있겠지.',
    );
    printButton('「몰라」', 1);
    printButton('「……몰라」', 2);
    printButton('「알지」', 3);
    switch (await input()) {
      case 1:
        await tachyon.say_as_unknown_and_wait(
          '오오, 설마 순수한 어린양인가? 괜찮아. 보면 알 거네.',
        );
        break;
      case 2:
        await tachyon.say_as_unknown_and_wait(
          '하하, 누구도 믿지 않을 거짓말을 왜 하는 건가? 정말 불성실하군.',
        );
        break;
      case 3:
        await tachyon.say_as_unknown_and_wait(
          '정직한 착한 아이……아니, 이런 상황에서는 나쁜 아이라고 해야겠지?',
        );
    }
    await tachyon.say_as_unknown_and_wait('그럼 오늘 준비한 것을 보여주지.');
    await printAndWait([
      '밤색 털의 ',
      tachyon.uma_sex_title,
      '는 ',
      tachyon.sex,
      '의 흰 가운을 열었다...',
    ]);
  },
  /**
   * タキオンがチームにいないが、募集の第一環は済んでいる
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} is_first 初めて売店へ来たか
   */
  async start_out_of_team(tachyon, you, is_first) {
    if (is_first) {
      await tachyon.say_as_unknown_and_wait(
        '오, 새로운 먹잇감... 아니 모르모트... 아니 손님이군.',
      );
    } else {
      tachyon.say(
        '오, 또 너로군 손님군. 트레이너란 직업은 이렇게 방탕한 거였나? 쯧쯧.',
      );
    }
    print([
      '돌아다니던 ',
      you.get_colored_name(),
      '은(는) 흰 가운을 입고 신비로운 분위기의 밤색 털을 가진 ',
      tachyon.uma_sex_title,
      '를 만났다.',
    ]);
    print([
      tachyon.sex,
      '의 블라인드 같은 진홍빛 눈동자에는 광기와 신비가 서려 있었고, 다소 커 보이는 흰 가운은 안쪽에 매달린 물건들로 인해 팽팽하게 부풀어 있었다.',
    ]);
    print([
      '그런 ',
      tachyon.sex,
      '는 학원 내 유명한 문제아, ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait(
        '오? 왠지 낯이 익은데…… 음, 기억이 맞다면, 자네는 트레이너 맞지?',
      );
      printButton('「아니」', 1);
      printButton('「……아니」', 2);
      printButton('「응」', 3);
      switch (await input()) {
        case 1:
          await tachyon.say_and_wait(
            '음? 내가 착각한 건가?……아니면, 암시장에서 만난 건가……',
          );
          await printAndWait([
            tachyon.get_colored_name(),
            '은 다소 소름끼치는 말을 중얼거렸다.',
          ]);
          break;
        case 2:
          await tachyon.say_and_wait([
            '하하하. 안심하게! 이 부분에 있어선 내 입은 아주 무겁거든. 자네의 담당 ',
            tachyon.uma_sex_title,
            '에게는 아무 말 하지 않겠네.',
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            '은「다 알고 있다」는 듯한 신비로운 미소를 지었다.',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            '……설마 그렇게 시원하게 인정하는 것인가. 이쯤 되면 자네의 담당 ',
            tachyon.uma_sex_title,
            '가 불쌍해지기 시작하는군.',
          ]);
          await printAndWait([tachyon.get_colored_name(), '은 기가 막힌 표정을 지었다.']);
      }
    }
    tachyon.say('어쨌든, 오늘은 무슨 물건이 있는지 보게나.');
    await printAndWait([
      tachyon.get_colored_name(),
      '은 ',
      tachyon.sex,
      '의 흰 가운을 열어젖혔다……',
    ]);
  },
  /**
   * 売店を離れる、愛欲＆良好以上、購入が3点未満
   * @param {CharaTalk} tachyon タキオン
   */
  end_love_buy_few(tachyon) {
    tachyon.say(
      '어…… 이렇게 적어도 충분한가? 뭐? 내 능력을 의심하냐고? 아니, 그런 뜻은 아닐세…… 나를 제대로 혼내주려는 건가? 흐흐, 그럼 오늘 밤이 정말 기대되는군♡',
    );
  },
  /**
   * 売店を離れる、愛欲＆良好以上、購入が10点超
   * @param {CharaTalk} tachyon タキオン
   */
  end_love_buy_many(tachyon) {
    tachyon.say(
      '!?이렇게나 많이 사다니…… 감당 못 할지도 모르겠네…… 후후, 정말 기대되는군. 게다가 다 하고 나면 약을 복용한 후의 변화를 가장 직접적으로 느낄 수 있을 테니까……',
    );
    tachyon.say('오늘 밤은 내가 제대로 즐겨보도록 하지...');
  },
  /**
   * 売店を離れる、購入が3点未満
   * @param {CharaTalk} tachyon タキオン
   * @param {boolean} is_first 初めて売店へ来たか
   */
  end_buy_few(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown('어라, 이렇게 적게 사도 충분한 건가?');
      tachyon.say_as_unknown(
        '아니, 그냥 궁금해서 그렇네. 뭐, 이런 건 사람마다 차이가 있으니. 가능하다면 실험 횟수를 더 늘렸으면 좋겠다만...아니, 아무것도 아닐세.',
      );
    } else {
      tachyon.say('어라, 이렇게 적게 사도 충분한 건가?');
      tachyon.say(
        '아니, 그냥 궁금해서 그렇네. 뭐, 이런 건 사람마다 차이가 있으니. 가능하다면 실험 횟수를 더 늘렸으면 좋겠다만...아니, 아무것도 아닐세.',
      );
    }
  },
  /**
   * 売店を離れる、購入が10点超
   * @param {CharaTalk} tachyon タキオン
   * @param {boolean} is_first 初めて売店へ来たか
   */
  end_buy_many(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown(
        '어라, 이렇게나 많이 산 건가? 아니, 그냥 궁금해서 그렇네. 아무래도 이런 건 사람마다 차이가 있으니 말일세?....',
      );
      tachyon.say_as_unknown(
        '참고로, 개인적으로 다음 방문 시 사용 후기를 남겨주면 좋겠군. 표준 실험 보고서 형식으로 제출해 주면 더 좋고.',
      );
    } else {
      tachyon.say(
        '어라, 이렇게나 많이 산 건가? 아니, 그냥 궁금해서 그렇네. 아무래도 이런 건 사람마다 차이가 있으니 말일세?....',
      );
      tachyon.say(
        '참고로, 개인적으로 다음 방문 시 사용 후기를 남겨주면 좋겠군. 표준 실험 보고서 형식으로 제출해 주면 더 좋고.',
      );
    }
  },
};
