// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const recruit_flags = require('#/data/event/recruit-flags');
const adaptability_colors = require('#/data/color-const')["adaptability_colors"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/103200-Agnes-Tachyon/edu-32-plan-a"),

  // [번역 완료] arim_kin_end_a
  arim_kin_end_a: (() => {
    const title = '한계를 넘어서';
    /**
     * シニア級有馬記念終了、Plan A 限定
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {boolean} coffee_win_kiku_sho マンハッタンカフェが菊花賞を勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_win_kiku_sho,
    ) => {
      await tachyon.say_and_wait('하아…… 하아……');
      era.println();
      await tachyon.print_and_wait('발걸음이 무겁고, 둔하다.');
      await tachyon.print_and_wait('원인은…… 명확하다.');
      await tachyon.print_and_wait('등 뒤의 사냥개로부터 뿜어져 나오는 강렬한 압박감 때문이다.');
      era.println();
      await tachyon.print_and_wait([
        call_25,
        '이 달릴 때, 전후방의 ',
        tachyon.uma_sex_title,
        '들이 느끼게 되는 극심한 압박감.',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '의 친구를 포함해, 모든 것이 자신의 과학으로는 설명할 수 없는 것들이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……왔나!');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '가 등 뒤를 바짝 쫓는다.',
      ]);
      await tachyon.print_and_wait([
        '뒷덜미의 솜털이 곤두서며, 마치 ',
        tachyon.sex,
        '의 콧결이 느껴질 것만 같다.',
      ]);
      await tachyon.print_and_wait('바로 지금, 이곳이다.');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이 가진 것이 차원을 넘어서는 속도라면,',
      ]);
      await tachyon.print_and_wait([
        '그렇다면 ',
        coffee.get_colored_name(),
        '는 차원을 넘나드는 기묘함 그 자체다.',
      ]);
      await tachyon.print_and_wait(
        '어디서 나타날지 알 수 없는, 마치 거울 속 세계에서 튀어나온 듯한 이형의 모습이다.',
      );
      era.println();
      await tachyon.print_and_wait([
        '그 칠흑 같은 환영이, 순식간에 ',
        tachyon.get_colored_name(),
        '을 추월했다.',
      ]);
      era.drawLine();
      await coffee.say_and_wait('……미안해요.');
      era.println();
      await coffee.print_and_wait(
        '자신의 꿈을 이루기 위해, 타인의 꿈을 짓밟는다.',
      );
      await coffee.print_and_wait('하물며, 상대는……');
      await coffee.print_and_wait('무엇이었을까?');
      await coffee.print_and_wait(
        '친구? 숙적? 타고난 상극? 연구자와 실험체?',
      );
      await coffee.print_and_wait([
        '마지막 선택지를 머릿속에서 지워버린 채, ',
        coffee.get_colored_name(),
        '는 계속해서 앞으로 내달렸다.',
      ]);
      await coffee.print_and_wait(
        '꿈으로 향하는 길 위에서는, 아무리 깊은 감정이라 해도 기껏해야 이런 사과 한마디로 변할 뿐이다.',
      );
      era.println();
      await coffee.print_and_wait('이곳만 넘어선다면, 그다음, 다음 목표는 「그 뒷모습」이다……!');
      era.println();
      await coffee.print_and_wait([
        '하지만, ',
        coffee.sex,
        '는 한 가지 가능성을 간과했다.',
      ]);
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '에게 아직 여력이 남아있을 가능성.',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '이 처음부터 전력을 다하지 않았을 가능성.',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        '이 기다리고 있었던 것이 바로 이 타이밍일 가능성.',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        '앞서가는 ',
        tachyon.uma_sex_title,
        '…… 선두에서 달리는 도주 ',
        tachyon.uma_sex_title,
        ', 그리고 ',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '에게 가장 적합한 위치, 마치 실험실 안에 있는 것처럼 안락한 위치.',
      ]);
      await tachyon.print_and_wait('바로 지금, 이곳이다.');
      era.println();
      await tachyon.print_and_wait('시간이 정지하고, 세계가 변했다.');
      era.println();
      await tachyon.print_and_wait('눈앞에는 끝없이 넓고 아득한 검은 공간이 펼쳐졌다.');
      await tachyon.print_and_wait('수식과 공식들로 가득 찬 수리의 공간이다.');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        '를 추월하고 싶다——변수 숙적 추가.',
      ]);
      await tachyon.print_and_wait(
        '자신에게 가장 적합한 환경——변수 포지셔닝 추가.',
      );
      await tachyon.print_and_wait('단련과 재능의 결합——변수 속도 추가.');
      await tachyon.print_and_wait('그리고……');
      era.println();
      await tachyon.print_and_wait(
        '등 뒤에서, 미미한 온기와 홍차의 향기가 느껴졌다.',
      );
      await tachyon.print_and_wait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은 뒤돌아보지 않았다.',
      ]);
      await tachyon.print_and_wait(
        '뒤돌아볼 필요는 없다. 그것은 상대에 대한 불신이기 때문이다.',
      );
      await tachyon.print_and_wait([
        '앞을 바라보며, 그리고…… 상대를 기다리며, ',
        you.sex,
        '가 반드시 자신을 쫓아와 함께 달릴 것임을 믿는다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '김이 모락모락 피어오르는 홍차가 ',
        tachyon.get_colored_name(),
        '의 앞에 놓였다.',
      ]);
      await tachyon.print_and_wait('마치 일상의 실험실 풍경처럼.');
      await tachyon.print_and_wait('모든 것이 지극히 당연하게 느껴졌다.');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        '는 당연하다는 듯이 ',
        tachyon.get_colored_name(),
        '의 곁을 지킬 것이다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은(는) 당연하다는 듯이 눈앞의 모든 난제를 해결할 것이다.',
      ]);
      era.println();
      await tachyon.say_and_wait('마지막 해는 이것이다……');
      era.println();
      await tachyon.print_and_wait('마치 칠판 같은 공간 속에 U=MA2라는 공식을 새겨 넣었다.');
      await tachyon.print_and_wait('순간, 어두운 공간 속의 모든 수식이 빛을 발하기 시작했다.');
      await tachyon.print_and_wait([
        '이것이 바로, ',
        tachyon.get_colored_name(),
        '의 최종해다.',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        tachyon.get_colored_name(),
        '이 쫓아옵니다!',
        tachyon.get_colored_name(),
        '이 쫓아옵니다!',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        '가장 앞서던 도주 ',
        tachyon.uma_sex_title,
        '는 이미 힘이 다했습니다! 마지막 격전은 역시 이 두 사람입니다!',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '! 거의 나란히 최종 직선에 진입합니다!',
      ]);
      if (coffee_win_kiku_sho) {
        await you.say_as_passer_by_and_wait('해설', [
          '『최강의 ',
          tachyon.uma_sex_title,
          '』와 『최속의 ',
          tachyon.uma_sex_title,
          '』가 여기에서 승부를 가립니다!',
        ]);
      }
      await tachyon.print_and_wait('아아.');
      await tachyon.print_and_wait('분명 레이스 중임에도.');
      await tachyon.print_and_wait('이토록…… 상쾌한 기분이 들다니.');
      era.println();
      await tachyon.print_and_wait('자신이 인정한 숙적과 함께.');
      await tachyon.print_and_wait('자신의 전력을 다한다.');
      await tachyon.print_and_wait('하지만…… 아직 부족하다.');
      era.printButton('「한계를 넘어서!」', 1);
      await era.input();
      await tachyon.print_and_wait('몇 차례의 인터뷰를 거치며,');
      await tachyon.print_and_wait([
        '『한계를 넘어서!』는 어느샌가 ',
        tachyon.get_colored_name(),
        '의 팬들 사이에서 「',
        tachyon.get_colored_name(),
        ' 최강」, 「',
        tachyon.get_colored_name(),
        ' 필승」 등을 넘어서는 구호가 되어 있었다.',
      ]);
      await tachyon.print_and_wait([
        '하지만 그런 소란스러운 응원 소리조차, ',
        you.sex,
        '의 말 한마디에 비하면 너무나도 희미하게 들릴 뿐이었다.',
      ]);
      era.println();
      await tachyon.print_and_wait('그래, 그렇군.');
      await tachyon.print_and_wait('바로 지금이다.');
      era.println();
      await tachyon.print_and_wait('영역보다도 한 단계 더 높은 곳의 한계.');
      await tachyon.print_and_wait('한계를 뛰어넘는 것이다.');
      await tachyon.print_and_wait([tachyon.uma_sex_title, '의 한계를 넘어서.']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 한계를 넘어서.',
      ]);
      await tachyon.print_and_wait('모든 것을 초월하여, 그 너머에 있는.');
      await tachyon.print_and_wait('더욱 머나먼 피안을 향해—————손을 뻗는다.');
      await you.say_as_passer_by_and_wait('해설', [
        '골————인! 기, 기록 경신입니다! 올해의 최종 결선! 승자는 ',
        tachyon.get_colored_name(),
        '! 신기록을 세우며 오늘 나카야마 경기장을 제패한 것은 ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait('끝났다.');
      await tachyon.print_and_wait('끝……난 건가?');
      era.println();
      await tachyon.print_and_wait('끝난 것이 맞을 터였다.');
      await tachyon.print_and_wait('전광판에는 이미 성적이 정렬되어 있으니까.');
      await tachyon.print_and_wait(
        '하지만 몸의 열기는 전혀 레이스가 끝난 것 같지 않았다.',
      );
      await tachyon.print_and_wait(
        '아드레날린이 마치 끓어오르는 것처럼 끊임없이 솟구치고 있었다.',
      );
      era.println();
      await you.say_as_passer_by_and_wait('관중A', '해냈구나!');
      era.println();
      await tachyon.print_and_wait(
        '갑작스러운 함성 소리에 깜짝 놀라며 현실로 돌아왔다.',
      );
      await you.say_as_passer_by_and_wait(
        '관중B',
        '정말로, 정말로 기록을 갈아치웠어!',
      );
      await you.say_as_passer_by_and_wait('관중C', '잘했다!');
      era.println();
      await tachyon.print_and_wait('경기장 전체가 환호성으로 진동했다.');
      await tachyon.print_and_wait(
        '……그야말로, 승리한 본인보다도 다들 흥분해 있었다.',
      );
      era.println();
      await tachyon.print_and_wait('응당, 대답해 주어야겠지.');
      await tachyon.print_and_wait('어찌 됐든, 사회적인 표현은 해야 한다.');
      await tachyon.print_and_wait(
        '……아니, 이것은 순수한, 지지자들에 대한 감사의 마음이다.',
      );
      await tachyon.print_and_wait('겉으로 표현해야 마땅하다.');
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.print_and_wait('한참을 망설이다가.');
      await tachyon.print_and_wait('겨우 손을 들어 올릴 수밖에 없었다.');
      await tachyon.print_and_wait('마치 온몸이 아직 꿈속에 잠겨 있는 것만 같았다.');
      era.println();
      await tachyon.print_and_wait('단지.');
      await tachyon.print_and_wait('그 가벼운 동작만으로도, 해일 같은 환호성을 불러일으키기엔 충분했다.');
      era.drawLine();
      era.printButton('「타키온…… 저건……!」', 1);
      await era.input();
      await era.printAndWait('함부로 단정 지을 수 없었다.');
      await era.printAndWait('본 적도 없는 것에 대해 확신을 가질 수 있는 사람은 아무도 없으니까.');
      await era.printAndWait(
        '만약 그것이 사실이라면, 이것은 그 누구도 도달한 적 없는 영역일 것이다————',
      );
      era.println();
      await era.printAndWait('…………');
      era.printButton('「……타키온?」', 1);
      await era.input();
      await era.printAndWait('마치 아직 꿈에서 깨어나지 못한 듯했다.');
      await era.printAndWait([
        '말로 설명하기는 어렵지만, 눈앞의 ',
        tachyon.get_colored_name(),
        '은 마치 몽유병 환자처럼 보였다.',
      ]);
      await era.printAndWait(['이런 상황이라면, ', tachyon.sex, '를 깨워야 하는 걸까?']);
      await era.printAndWait('하지만, 어떻게 해야 하지?');
      await era.printAndWait(
        '당신 자신조차 눈앞의 광경이 그저 꿈이 아닐까 의심하고 있었기 때문이다.',
      );
      await era.printAndWait(
        '이토록 길었던 3년이, 오늘 마침내 가장 완벽한 실험 결과로 마침표를 찍었다.',
      );
      era.println();
      await tachyon.say_and_wait('…………후훗.');
      await tachyon.say_and_wait('하하하하하하하!');
      era.println();
      await era.printAndWait('방금 전까지의 웃음소리가 드디어 정신을 차렸다는 안도감을 주었다면,');
      await era.printAndWait(
        '그다음에 이어진 광기 어린 웃음은 머리에 이상이라도 생긴 게 아닐까 의심케 했다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 걱정스러운 마음에 상태를 확인하려 다가갔을 때……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '자네, 보았나? ……분명히 보았겠지! ',
        callname,
        '！',
      ]);
      await tachyon.say_and_wait(
        '이것이 바로 실험의 성과다…… 내가 보여주었어! 이것이 바로, 한계 너머의 세계다!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 작년 11월에 ',
        tachyon.get_colored_name(),
        '이 했던 말을 떠올렸다.',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait(
        '보답으로, 자네에게 더욱 넓은 세계를 보여주도록 하지.',
      );
      era.println();
      await era.printAndWait([tachyon.sex, '는 정말로 해냈다.']);
      await era.printAndWait('매 레이스마다, 목표를 향해 한 걸음씩 다가갔다.');
      await era.printAndWait('그리고 지금.');
      await era.printAndWait('두 사람은 정말로 더 넓은, 한계 너머의 세계를 목격했다.');
      era.printButton('「그래…… 우리 정말 해냈어.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '이 처음으로 목격한, 세상 그 무엇보다, 심지어 ',
        tachyon.get_colored_name(),
        '의 달리기보다도 더욱 눈부시게 빛나는 것이었다.',
      ]);
      await era.printAndWait([
        '그것은 바로 지금, ',
        tachyon.get_colored_name(),
        '의 얼굴에 피어난 미소였다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_arim_kin_a
  before_arim_kin_a: (() => {
    const title = '最終実験、準備完了';
    /**
     * シニア級有馬記念のレース前、Plan A 限定
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait('그날이 찾아왔지만 모든 것은 놀라우리만큼 평온했다.');
      await era.printAndWait([
        '어젯밤 푹 잔 덕분인지 오늘 유난히 컨디션이 좋은 ',
        you.get_colored_name(),
        '은(는) 일찍 일어나 ',
        tachyon.get_colored_name(),
        '에게 홍차를 끓여 주었다.',
      ]);
      await era.printAndWait('햇살이 방 안에 쏟아지고 먼지가 빛 속에서 춤췄다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 실험하지 않았다. 평소처럼 조간신문을 읽을 뿐이다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '역시 빛을 내뿜지 않고 조용히 홍차를 음미하고 있었다.',
      ]);
      await era.printAndWait(
        '두 사람은 연구실에서 폭풍 전 마지막 고요를 즐겼다.',
      );
      era.println();
      await you.say_as_passer_by_and_wait('記者A', [
        '타키온 ',
        tachyon.adult_sex_title,
        ', 이번 아리마 기념에서 특별히 의식하는 상대가 있나?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……그래, 며칠 전에 나타났네.',
        coffee.get_colored_name(),
        '、',
        call_25,
        '……아마 라이벌이라 부를 만한 존재일 걸세.',
      ]);
      await you.say_as_passer_by_and_wait('記者A', '아마……?');
      await tachyon.say_and_wait('그래, 대충 그런 뜻일세.');
      era.println();
      await era.printAndWait([
        '코스로 향하기 전 ',
        you.get_colored_name(),
        '은(는) 문득 얼마 전 취재에서 ',
        tachyon.get_colored_name(),
        '이(가) 했던 말을 떠올렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 물리학의 두 먹구름에 대해 들어 본 적 있나?',
      ]);
      await tachyon.say_and_wait('없다고? 괜찮네. 그냥 서두로 꺼낸 이야기니까.');
      await tachyon.say_and_wait(
        '켈빈 경은 이렇게 말했다고 전해지지. 물리학이라는 거대한 건물은 완성되었지만 하늘에는 작은 구름 두 개가 남았다고.',
      );
      await tachyon.say_and_wait(
        '하지만 누구도 예상하지 못했네. 그 작은 구름 두 개가 양자역학과 상대성이론이라는 현대물리학의 두 기둥을 낳으리라고는……',
      );
      await tachyon.say_and_wait([
        '물론 이 일화의 팔 할은 후세의 각색일 걸세. 다만…… 내 말은 ',
        call_25,
        '이(가) 바로 그 구름이라는 뜻이네.',
      ]);
      await tachyon.say_and_wait([
        '내 이론에서 ',
        call_25,
        '은(는) 마지막으로 남은 조각이지…… 그렇다면 그 다음은?',
      ]);
      await tachyon.say_and_wait(
        '이 구름이 상대성이론만큼의 충격을 내게 가져다줄까? 보여…… 주게.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_kiku_sho_high_rel
  before_kiku_sho_high_rel: (() => {
    const title = '이길 수 있을까?';
    /**
     * 菊花賞前 - 高好感
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        '국화상. 가장 강한 ',
        tachyon.uma_sex_title,
        '만이 거머쥘 수 있는 레이스.',
      ]);
      await era.printAndWait('최강이란 모든 면에서 강하다는 뜻이다.');
      await era.printAndWait('스피드, 스태미나, 파워, 근성, 지능.');
      await era.printAndWait(
        '트레이너가 가장 중시하는 다섯 능력을 균형 있게 한계까지 끌어올린 자만이 이길 수 있는 레이스.',
      );
      await era.printAndWait([
        '하지만…… ',
        tachyon.get_colored_name(),
        '이라면 문제없다.',
      ]);
      era.println();
      await era.printAndWait('타고난 강자.');
      await era.printAndWait([
        '단련하지 않아도 ',
        tachyon.sex,
        '이라면 그곳에 도달할 것이다.',
      ]);
      await era.printAndWait([
        '그것이 바로 ',
        tachyon.get_colored_name(),
        '. 절대적인 강함이다.',
      ]);
      await era.printAndWait([
        '……그보다 자신은 정말 ',
        tachyon.sex,
        '에게 도움이 되고 있는 걸까?',
      ]);
      if (
        new Array(5).fill(0).some((_, i) => era.get(`base:32:${5 + i}`) < 1200)
      ) {
        await era.printAndWait([
          '애초에 지금의 ',
          tachyon.sex,
          '은(는) 과거의 ',
          tachyon.sex,
          '이(가) 도달한 한계까지 아직 한참 남지 않았을까?',
        ]);
      } else {
        await era.printAndWait([
          '결국 지금의 ',
          tachyon.sex,
          '은(는) 옛 수준을 되찾았을 뿐인 것은 아닐까?',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        callname,
        '? 레이스 전에 또 무슨 생각에 빠져 있는 건가?',
      ]);
      era.println();
      await era.printAndWait([
        '자기혐오에 빠진 ',
        you.get_colored_name(),
        '의 생각을 끊은 것은 편자를 두드리던 ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '은(는) ',
        you.get_colored_name(),
        '의 말을 듣더니 예상대로 ',
        tachyon.get_colored_name(),
        '은(는) 코웃음을 쳤다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '시시한 소리로군. 지금 내 두 다리는 내 연구와 자네의 훈련 덕분에 존재하는 걸세.',
      );
      era.println();
      await tachyon.say_and_wait(
        '자네가 힘써 주지 않았다면 지금쯤 난 달릴 수 없게 됐을지도 모르지. 그런 결과를 원한다는 건가?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 황급히 그런 뜻이 아니었다고 사과했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '늦었네. 내일 약은 두 배일세. 노력의 무게를 모르겠다면 좀 더 많이 맛보게 해 주지.',
      );
      era.println();
      await era.printAndWait(
        '아니, 이미 하루 세 끼 밥처럼 약을 마시는데 여기서 더 늘릴 수 있다고?',
      );
      await era.printAndWait([you.get_colored_name(), '은(는) 속으로 태클을 걸었다.']);
      era.println();
      await era.printAndWait([
        '별다른 부담 없는 잡담을 나누는 사이 출발 시간이 가까워졌다.',
      ]);
      await era.printAndWait(['두 사람은 함께 걸어서 레이스장으로 향했다.']);
      era.printButton('「오늘 레이스, 이길 수 있겠지?」', 1);
      await era.input();
      await tachyon.say_and_wait('그건…… 글쎄, 과연 어떨까나~~');
      await tachyon.say_and_wait(
        '아니, 진지하게 물어도 솔직하게 답하기는 어렵군……',
      );
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait([
          '아무래도 ',
          call_25,
          '은(는) 다른 ',
          tachyon.uma_sex_title,
          '와(과)는 격 자체가 다르니까.',
        ]);
        await tachyon.say_and_wait([
          '무엇보다 ',
          tachyon.sex,
          '은(는) 내가 선택한, 한계 너머의 세계에 발을 들일 수 있는 또 한 명의 존재……',
        ]);
        await tachyon.say_and_wait([
          '그리고 이 거리의 ',
          call_25,
          '은(는)…… 역사상 최강이라고 해도 지나치지 않을지 모르지.',
        ]);
      }
      era.printButton('「그럼 지는 건가?」', 1);
      await era.input();
      await tachyon.say_and_wait('이길 걸세.');
      era.println();
      await tachyon.say_and_wait('『우리』는 반드시 이기네.');
      era.println();
      await era.printAndWait('지켜보기만 하지는 않는다.');
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '은(는) 나란히 레이스장으로 향했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_kiku_sho_low_rel
  before_kiku_sho_low_rel: (() => {
    const title = '또 다른 가능성';
    /**
     * 菊花賞前 - 低好感
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '그날 밤 ',
        you.get_colored_name(),
        '은(는) 꿈을 꾸었다.',
      ]);
      await era.printAndWait([
        '초광속 입자라고 불리는 ',
        tachyon.sex,
        '이(가) 경기장에서 날개가 꺾이는 꿈이었다.',
      ]);
      await era.printAndWait([
        '유리로 된 두 다리가 산산이 부서지고 사방으로 튄 유리 조각이 ',
        you.get_colored_name(),
        '의 두 눈에 박혔다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 꿈에서 벌떡 깨어나 한동안 진정하지 못했다.',
      ]);
      await era.printAndWait([
        '너무도 생생한 꿈이어서 ',
        you.get_colored_name(),
        '은(는) 좀처럼 그 여운에서 벗어나지 못했다.',
      ]);
      await era.printAndWait([
        '남은 밤 동안 ',
        you.get_colored_name(),
        '은(는) 계속 뒤척이다가 결국 날이 밝도록 잠들지 못했다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '하늘이 희미하게 밝아 오자 ',
        you.get_colored_name(),
        '은(는) 서둘러 트레이너 기숙사를 나섰다.',
      ]);
      await era.printAndWait([
        '레이스 전에 ',
        tachyon.sex,
        '의 몸 상태를 몇 번이나 확인했었다.',
      ]);
      await era.printAndWait(
        '꿈에서처럼 처참하게 부서질 리가 없다. 그래도 걱정되고 두려웠다.',
      );
      await era.printAndWait([
        '내 눈으로 직접 ',
        tachyon.sex,
        '을(를) 확인하지 않으면 그 꿈이 현실이 아니라는 확신이 들지 않았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오호, ',
        callname,
        '? 오늘은 상당히 일찍 왔군.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 연구실로 뛰어 들어갔을 때 아침부터 여유롭게 홍차를 마시고 있던 ',
        tachyon.get_colored_name(),
        '이(가) 보였다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '뭐, 오늘은 삼관의 마지막 경기니까…… 긴장하는 것도 당연하지.',
      );
      await era.printAndWait([
        '국화상. 최강의 ',
        tachyon.uma_sex_title,
        '만이 승리할 수 있는 레이스다.',
      ]);
      await era.printAndWait([
        '문득 ',
        you.get_colored_name(),
        '은(는) 말을 잃었다.',
      ]);
      await era.printAndWait('내 선택은 정말 옳았던 걸까?');
      await era.printAndWait([
        '만약 ',
        tachyon.sex,
        '이(가) 꿈에서처럼 산산조각이 난다면?',
      ]);
      await era.printAndWait('나는 그 일을 태연하게 받아들일 수 있을까?');
      era.println();
      await tachyon.say_and_wait([callname, '? 무슨 일인가?']);
      era.println();
      await era.printAndWait('충동적으로 연구실에 뛰어 들어왔건만 ');
      await era.printAndWait([tachyon.sex, '을(를) 보는 순간 아무 말도 할 수 없었다.']);
      era.printButton('「……아무것도 아니야. 국화상, 반드시 이기자.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 자기 자신을 위로하기에도 부족한 말밖에 꺼내지 못했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……그래, 반드시 이기겠네.');
      era.println();
      await era.printAndWait('無言');
      await era.printAndWait('오늘 국화상에서는 제발 아무 일도 일어나지 않기를.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 신에게, 부처에게, 그리고 빛에게 기도했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] before_sank_hai
  before_sank_hai: (() => {
    const title = '변수 · 군중 심리의 자극';
    /**
     * Plan A 専用（Plan B は大阪杯出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_5 アグネスタキオンのフジキセキへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_sank_hai マンハッタンカフェが大阪杯に出走するか
     */
    const f = async (tachyon, you, callname, call_5, love, coffee_sank_hai) => {
      await era.printAndWait('오사카배');
      await era.printAndWait('한 해 중 중장거리 노선의 첫 G1 레이스다');
      await era.printAndWait([
        '이제 막 시니어급에 들어선 ',
        tachyon.uma_sex_title,
        '에게는 처음으로 실력을 검증받는 레이스이기도 하다.',
      ]);
      await era.printAndWait([
        '하지만…… ',
        tachyon.get_colored_name(),
        '에게 있어서는.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배! 사츠키상 때의 모습은 정말 멋졌어요!',
      );
      await tachyon.say_and_wait(
        '후후, 응원 고맙네. 하지만 내 주법은 계속해서 진보하고 있다네. 사츠키상 때보다 지금의 달리기가…… 훨씬 더 놀라울 테니까 말이야.',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '타키온 선배…… 더비에서의 달리기를 보고 생각했어요……',
        tachyon.uma_sex_title,
        '에게 한계라는 게 있다면 분명 저런 모습일 거라고요!',
      ]);
      await tachyon.say_and_wait([
        '아니, 그것은 단지 ',
        tachyon.get_colored_name(),
        '의 한계일 뿐이라네…… ',
        tachyon.uma_sex_title,
        '에게 한계란 없다네. 자네들 모두 무한한 가능성을 품고 있다고 나는 믿고 있어.',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '타키온 선배! 도대체 어떻게 해야 선배처럼 그렇게 빨리 달릴 수 있는 건가요……!',
      );
      await tachyon.say_and_wait(
        '오호? 정말 알고 싶은가? 그렇다면 내일 오후에 이과 교실로……',
      );
      era.printButton('「콜록콜록」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 헛기침을 두 번 하며 ',
        tachyon.get_colored_name(),
        '에게 주의를 주었다.',
      ]);
      await era.printAndWait([
        '후배들과 다정하게 교류하던 ',
        tachyon.sex,
        '는 잠시 움찔하더니 아무 일도 없었다는 듯 이야기를 계속했다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 레이스 이야기를 계속했고, 후배인 작은 ',
        tachyon.uma_sex_title,
        '들은 그 이야기에 귀를 기울이고 있었다.',
      ]);
      await era.printAndWait(
        '레이스 전의 평범한 팬 서비스처럼 훈훈한 광경이었다.',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한숨을 내쉬며 몇 달 전 ',
        tachyon.get_colored_name(),
        '이(가) 말했던 실험 내용을 떠올렸다.',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait([
        '수집한 자료에 따르면…… ',
        tachyon.uma_sex_title,
        '가 레이스나 질주 중에 기쁨을 느끼는 가장 큰 이유는 칭찬과 관객의 지지를 받는 것이라네……',
      ]);
      await tachyon.used_to_say_and_wait(
        '中高生の年齢ですもの、認められたいと思うのは自然ですわ',
      );
      await tachyon.used_to_say_and_wait(
        '나 자신은 그런 것에 영향받지 않는다고 생각하지만…… 실험인 이상 모든 가능성을 고려해야 하네.',
      );
      await tachyon.used_to_say_and_wait(
        '종합하자면…… 그래, 관객의 지지를 얻는 것……',
      );
      era.println();
      await era.printAndWait(['거기서 두 사람은 막히고 말았다.']);
      era.println();
      await era.printAndWait(
        '몇 달 전 여름 합숙…… 그리고 그 후 계속되었던 인터뷰 거절을 떠올렸다.',
      );
      await era.printAndWait([
        '대중의 눈에 비친 ',
        tachyon.get_colored_name(),
        '은(는) 언론의 선전과 이쪽의 방치 탓에 어느덧 현역 최대의 문제아가 되어 버린 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……어쨌든 우선 트레센 내부에서 장악할 수 있는 것부터 시작하도록 하지.',
      );
      era.drawLine();
      await era.printAndWait('이러쿵저러쿵 시간이 흘렀다.');
      await era.printAndWait([
        '이미 한두 번 본 것도 아니지만 ',
        tachyon.get_colored_name(),
        '의 소통 능력은 여전히 대단했다……',
      ]);
      await era.printAndWait(
        '저 위험한 실험들에 쏟는 에너지를 인간관계 관리에 조금이라도 나누어 주었더라면……',
      );
      await era.printAndWait([
        '자신은 ',
        tachyon.sex,
        '에게 반하지 않았을지도 모른다.',
      ]);
      await era.printAndWait(
        '연구를 위해서라면 무엇이든 최선을 다하는 그 헌신적인 모습.',
      );
      await era.printAndWait('모든 것을 떨쳐내고 뒤로 흘려보내는 저 주법.');
      await era.printAndWait([
        '그 두 가지가 합쳐진 ',
        tachyon.get_colored_name(),
        '이야말로 가장 사람을 매혹하는 ',
        tachyon.sex,
      ]);
      if (love >= 75 && tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait('……だが');
        await era.printAndWait(
          '自分の恋人を他人に囲まれるのは、同性同士でも少し嫉妬する',
        );
        await era.printAndWait('こんなときは……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は手元に隠したスイッチを、そっと押した',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'タキオン先輩！ サインください！',
        );
        await tachyon.say_and_wait('ふふ、もちろん……むっ！');
        era.println();
        await era.printAndWait([
          'サインの瞬間に起動した小さな玩具で、',
          tachyon.get_colored_name(),
          ' のサインは少し歪んだ',
        ]);
        await era.printAndWait(
          '幸い、崇拝の眼差しの小さなファンは、その程度を気にしなかった',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は振り返り、',
          you.get_colored_name(),
          ' をじっと睨んだ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は頷いて、申し訳なさそうに笑った……そしてリモコンの強度を一段上げた',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'B',
          'タキオン先輩……今日のレース、頑張ってください！',
        );
        await tachyon.say_and_wait('ええっ……か……必ず……');
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'C',
          'タキオン先輩……どうしたんですか？',
        );
        await tachyon.say_and_wait('な……なんでも……ただ……ただ……くっ……');
        era.printButton('「時間もない。選手控室で準備しよう」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて ',
          tachyon.get_colored_name(),
          ' を助けた。睨みというより欲求不満の色気を帯びた視線を受けながら、',
          tachyon.sex,
          'を連れて選手控室へ戻った',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……まったく……そんなに嫉妬しないでください……後輩にまで焼き餅を……',
          you.sex_code === 1 ? '男なら、もう少し器を大きくなさいな' : '',
        ]);
        era.printButton('「じゃあ、カフェのレースを見に行くよ」', 1, {
          disabled: !coffee_sank_hai,
        });
        era.printButton('「じゃあ、後輩たちも心配してあげよう」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '欲を煽っておいて、今さら他人のところへ行くつもり……それはいけませんわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は後ろからそっと抱きついた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'レース前……時間は足りるでしょう❤️ こんな退屈な玩具はもう……中を、直接満たしたくはないのですか❤️',
        ]);
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はレース場へ立った',
        ]);
        await era.printAndWait([
          'ただ……今回ばかりは、',
          tachyon.sex,
          'の勝負服がしっかり隠れているのが幸いだった。でなければ、妙に膨らんだ下腹に全員が気づいただろう',
        ]);
      }
      era.printButton('「時間だ、タキオン」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'ああ、そうですわね。では出場しますわ……レースが終わってから、祝ってくださいな、仔馬たち',
      );
      era.println();
      await era.printAndWait([
        '最後の流し目に、小さな',
        tachyon.uma_sex_title,
        'たちはまた歓声を上げた',
      ]);
      era.printButton('「……仔馬？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        call_5,
        ' から習ったのです……どうです、あなたもそう呼ばれたいですの？ 私の小さなモルモット？',
      ]);
      era.printButton('…………いや、遠慮しておく', 1);
      await era.input();
      await tachyon.say_and_wait([
        'おや、照れたのですか？ 純情ですわね、',
        callname,
      ]);
      era.printButton(
        'だって……ハードウェアが追いつかない。真似するとかえって……',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は憐れむように ',
        tachyon.get_colored_name(),
        ' の胸元を見た',
      ]);
      await tachyon.say_and_wait([
        '…………',
        callname,
        '？ ハードウェアとは何の意味か、はっきり言ってくださいな',
      ]);
      era.printButton('「……なんでもない」', 1);
      await era.input();
      await era.printAndWait('ふざけているうちに、発走の時刻が来た');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] before_takz_kin_a
  before_takz_kin_a: (() => {
    const title = '万衆一心';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '한신 경마장에 도착했을 때는 이미 경기장이 열기로 들끓고 있었다.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait('観客A', [
        '역시 우승 후보는 ',
        tachyon.get_colored_name(),
        '이지.',
      ]);
      await you.say_as_passer_by_and_wait('観客B', [
        tachyon.get_colored_name(),
        '? 아, 저건…… 전에……',
      ]);
      await you.say_as_passer_by_and_wait('観客C', [
        '그런 말만 봐도 오사카배를 안 봤다는 걸 알겠군. 그렇게 달릴 수 있는 ',
        tachyon.uma_sex_title,
        '이(가) 나쁜 녀석일 리가 없잖아!',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客D',
        '인격과 주법에 관한 논쟁은 됐고…… 하지만 확실히 다른 선수들과는 다른 달리기야.',
      );
      await you.say_as_passer_by_and_wait('観客E', [
        '힘내라! 오사카배에서 보여 준 달리기를 다시 보여 줘!',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '이런…… 인기가 많군. 게다가 오사카배 이야기뿐이라니…… 작년 레이스는 그렇게 지루했던 건가?',
      );
      era.printButton('「작년에도 물론 멋있었지.」', 1);
      era.printButton('「오사카배가 특히 멋있었을 뿐이야.」', 2);
      await era.input();
      await era.printAndWait([
        '작년의 ',
        tachyon.get_colored_name(),
        '의 달리기에는 눈부신 빛과 더불어 덧없음이 감돌았다.',
      ]);
      await era.printAndWait([
        '그래서 ',
        tachyon.sex,
        '의 레이스를 보고 나면 감탄보다 걱정이 앞섰다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 그대로 빛이 되어 사라져 버리지 않을까 하고.',
      ]);
      await era.printAndWait('이제 그 덧없음이 사라진 지금,');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 달리기는 예술이라 부를 만하다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……일단 칭찬으로 받아들이겠네. 그럼 이런 분위기는 두 번째 실험에 딱 좋겠군.',
      );
      await tachyon.say_and_wait(
        '오사카배에서는…… 중간에 끝까지 확인하지 못했지. 지금은 G1 무대고 응원하는 팬도 있네. 후후, 어디까지 갈 수 있을까.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ending_a
  ending_a: (() => {
    const title = '祝勝';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} callname_25 マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
    ) => {
      await era.printAndWait('아리마 기념 다음 날.');
      await era.printAndWait([
        '목표를 달성하고 긴장이 풀린 탓인지, 지난 3년 동안 처음으로 ',
        you.get_colored_name(),
        '은(는) 지각했다.',
      ]);
      await era.printAndWait('뭐, 두 사람의 목표는 이미 이루어졌다.');
      await era.printAndWait('이제는 느긋하게 URA 결승만 맞이하면 된다.');
      era.println();
      if (love < 50) {
        await tachyon.say_and_wait(
          '뭘 하고 있는 건가? 너무 늦었네. 실험은 진작 시작했다고!',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) ',
          tachyon.get_colored_name(),
          '의 연구실에 도착했을 때, 그곳에는 변함없이 연구에 몰두하고 있는 ',
          tachyon.get_colored_name(),
          '이(가) 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '어제 레이스에서 한계를 넘어설 가능성을 보여 줬을 뿐일세. 다음 목표는 그걸 일상적으로 재현하는 거지!',
        );
        await tachyon.say_and_wait(
          '한 번의 돌파는 우연이고 두 번은 요행이지. 꾸준히 유지할 수 있어야 진정한 돌파라고 할 수 있네!',
        );
        await tachyon.say_and_wait(
          '어서 실험복으로 갈아입고 돕게!',
        );
        await coffee.say_and_wait([c_call_t, '……시끄러워.']);
        await tachyon.say_and_wait([
          '이런, 어제 아리마 기념에서 내게 패배한 ',
          call_25,
          '아닌가?',
        ]);
        await tachyon.say_and_wait(
          '할 말이 있으면 얼마든지 듣겠네. 패자의 울부짖음을 들어 주는 것도 승자의————',
        );
        await coffee.say_and_wait('쳇……');
        await tachyon.say_and_wait(
          '으악! 내 실험 자료가———— 불타…… 안 타잖아?',
        );
        era.println();
        await era.printAndWait([
          '一瞬、',
          tachyon.get_colored_name(),
          '의 실험 자료에 불길이 치솟았다.',
          tachyon.get_colored_name(),
          '이(가) 황급히 구해 내려던 순간 불길이 사라졌다.',
        ]);
        era.println();
        await coffee.say_and_wait([
          '……이번만큼은 인정할게…… 어제의 ',
          c_call_t,
          '은(는) 확실히 훌륭하게 달렸어……',
        ]);
        await coffee.say_and_wait(
          '분하지만…… 무심코 네 모습에서 『친구』를 겹쳐 봤어……',
        );
        await tachyon.say_and_wait([
          '친구? 오호? 그건…… 흥미로운 이야기로군!',
          call_25,
          ', 꼭 자세히 들려주게!',
        ]);
        await tachyon.say_and_wait('시끄러워…… 비켜……');
        era.println();
        await era.printAndWait([
          '떠들썩한 두 사람을 바라보며 ',
          you.get_colored_name(),
          '은(는) 실험복으로 갈아입고 쓴웃음을 지으며 앞으로도 계속될 일상에 합류했다.',
        ]);
      } else if (love > 50) {
        await era.printAndWait([
          '그런데 ',
          you.get_colored_name(),
          '이(가) 연구실 문 앞까지 왔을 때',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 안쪽에서 들려오는 대화를 들었다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          call_25,
          '……어쩌지……',
          callname,
          '은(는) ',
          you.sex,
          ', 정말로 이제 오지 않는 건 아닐까……',
        ]);
        await coffee.say_and_wait('……내 알 바 아니야.');
        await tachyon.say_and_wait([
          '어제 목표를 달성했다고 말했잖나……',
          you.sex,
          ', 그 말을 듣고 이젠 오지 않는다면……',
        ]);
        await tachyon.say_and_wait([
          '애초에 지난 3년간 쌓은 유대감도 내 착각일 뿐이고 ',
          you.sex,
          '은(는) 처음부터 끝까지 아무것도…… 아무것도……',
        ]);
        await coffee.say_and_wait('……정말 그렇다면 어떻게 할 거야?');
        await tachyon.say_and_wait([
          '……역시 약을 써서라도 ',
          you.sex,
          '을(를) 내 곁에서 떠날 수 없게 만들어야겠어. 생각해 보니 불공평하지 않은가?',
        ]);
        await tachyon.say_and_wait([
          '나만 ',
          you.sex,
          '에게서 떠날 수 없는데 ',
          you.sex,
          '은(는) 내가 없어도 잘만 살아갈 테니 말일세. 의존성이 높은 약을 서둘러 만들어 ',
          you.sex,
          '을(를) 다시는 내 곁을 떠나지 못하게 해야겠군……',
        ]);
        await tachyon.say_and_wait(
          '아니면 소설에 나오는 고독 같은 독을 써서…… 내가 만든 해독제를 주기적으로 먹지 않으면 발병하게 만드는 방법도 있겠지……',
        );
        await coffee.say_and_wait('……무겁네.');
        const coffee_check =
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 50;
        if (coffee_check) {
          await coffee.say_and_wait([
            '하지만 경고해 둘게. 내 ',
            callname_25,
            '에게는 그런 짓 하지 마.',
          ]);
        }
        era.println();
        await era.printAndWait([
          '그 말을 듣고 등골이 서늘해진 ',
          you.get_colored_name(),
          '은(는) 황급히 문을 열었다.',
        ]);

        era.printButton('「미안해! 늦잠을 잤어!」', 1);
        await era.input();
        await tachyon.say_and_wait([
          callname,
          '! ………지금 뭘 하는 건가? 너무 늦었네. 실험은 진작 시작했다고!',
        ]);
        era.println();
        await era.printAndWait([
          '엄한 표정을 지으려 애썼지만 ',
          tachyon.get_colored_name(),
          '의 등 뒤에서 꼬리가 미친 듯 흔들리며 좀처럼 멈추지 않았다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '도 알아챘는지 몇 차례 꼬리를 붙잡으려 했지만 소용없었다. 결국 아무렇지 않은 척 다시 꾸짖기 시작했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '어제 레이스에서 한계를 넘어설 가능성을 보여 줬을 뿐일세. 다음 목표는 그걸 일상적으로 재현하는 거지!',
        );
        await tachyon.say_and_wait(
          '한 번의 돌파는 우연이고 두 번은 요행이지. 꾸준히 유지할 수 있어야 진정한 돌파라고 할 수 있네!',
        );
        era.println();
        await tachyon.say_and_wait(
          '……그러니까 얼른 실험복으로 갈아입고 돕게! ……알겠나?',
        );
        era.println();
        await era.printAndWait([
          '엄하게 보이려 하면서도 불안한 눈빛으로 ',
          you.get_colored_name(),
          '을(를) 바라보는 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 참지 못하고 앞으로 나아가 ',
          tachyon.sex,
          '을(를) 끌어안았다.',
        ]);
        era.println();
        await tachyon.say_and_wait(['！', callname, '……！']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '와 ',
          tachyon.sex,
          '의 실험동물은 3년이 지나도 두 번째, 세 번째 3년을 함께 맞이할 것이다. 영원히……',
        ]);
        era.setToBottom();
        await era.waitAnyKey();
        if (coffee_check) {
          await coffee.say_and_wait([
            '……우쭐대지 마.',
            callname_25,
            '을(를) 돌려줘.',
          ]);
          era.println();
          await era.printAndWait([
            '두 사람에게 서로 차지하겠다며 붙잡힌 ',
            you.get_colored_name(),
            '은(는) 쓴웃음을 지으며 떠들썩한 일상으로 돌아갔다.',
          ]);
        } else {
          await coffee.say_and_wait('……그런 애정 행각은 내 앞에서 하지 말아 줘.');
          era.println();
          await era.printAndWait(
            '두 사람은 방 안에서 달콤한 공세를 견디고 있던 또 다른 동거인의 존재를 잊고 있었다.',
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] hot_spring_a
  hot_spring_a: (() => {
    const title = '슈뢰딩거의 초광속 입자';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, coffee, you, callname, love) => {
      await tachyon.say_and_wait('맞아, 그러고 보니 이런 게 있었지……');
      await tachyon.say_and_wait([
        '그냥 썩히기엔 아깝다는 생각이 드는데, 어떤가, ',
        callname,
        '? 함께 가겠나?',
      ]);
      era.println();
      await era.printAndWait('우연히 실험실을 정리하던 중이었다.');
      await era.printAndWait(['은 어느 구석에 숨겨져 있던 봉투를 발견했다.']);
      if (love >= 75) {
        await era.printAndWait('응……?');
        await era.printAndWait('어쩐지 모를 위화감이 강하게 느껴졌다.');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 자세히 관찰한 끝에 실마리를 찾아냈다.',
        ]);
        await era.printAndWait(
          '분명 대청소 중에 발견된 것임에도 불구하고, 봉투에는 구겨진 흔적이 전혀 없었으며 오히려 소중하게 보관되어 온 듯한 느낌마저 들었다.',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 직접 「찾아낸」 것이라는 점을 미루어 보아, ',
          you.get_colored_name(),
          '은(는) 대략적인 진상을 짐작했다.',
        ]);
        era.println();
        await tachyon.say_and_wait(['응? ', callname, '? 왜 그러나?']);
        era.println();
        await era.printAndWait('……역시 입 밖으로 내지는 말자.');
        await era.printAndWait([
          '화를 내는 것은 그나마 괜찮다. 정말 문제는 ',
          tachyon.sex,
          '가 토라진 뒤의 밤은 결코 편안하지 않을 것이라는 점이었다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '이 도착한 온천 여관은 상점가 경품 치고는 상당히 호화로운 곳이었다.',
      ]);
      await era.printAndWait(
        '단독 온천탕, 일본 전통식 객실, 그리고 가이세키 요리까지 제공되었다.',
      );
      await era.printAndWait(
        '생각해 보면…… 일반적인 상점가 추첨에서 이런 호화로운 경품을 준비하는 게 가능한 일일까?',
      );
      await era.printAndWait([
        '어쩌면…… 처음부터 누군가가 계획한 것이고, 그저 이 기회를 빌려 ',
        tachyon.uma_sex_title,
        '와 트레이너에게 제공한 것은 아닐까?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 온천탕에 앉아 이런저런 잡념에 잠겨 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? 저기, 나 들어가도 되나~~?']);
      era.println();
      await era.printAndWait([
        '갑자기 들려온 담당 ',
        tachyon.uma_sex_title,
        '의 목소리에 ',
        you.get_colored_name(),
        '은(는) 정신을 차렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무심코 들어오라고 대답해 버렸지만, 곧 자신이 지금 온천욕 중이라는 사실을 깨달았다.',
      ]);
      await era.printAndWait('이제 와서 몸을 가리기엔 이미 늦어버렸다—————');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 서둘러 몸을 물속으로 깊숙이 집어넣고, 온천의 수증기가 조금이라도 시야를 가려주기를 바랐다.',
      ]);
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.say_and_wait([
          callname,
          '————— 왜 그렇게 부끄러워하며 몸을 웅크리고 있나? 이미 볼 건 다 본 사이 아닌가.',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '————— 왜 그렇게 부끄러워하며 몸을 웅크리고 있나? 실험할 때 이미 다 보지 않았나.',
        ]);
      }
      era.println();
      await era.printAndWait([
        '말은 그렇게 했지만, ',
        tachyon.get_colored_name(),
        '의 말투 역시 조금은 긴장한 듯 보였다.',
      ]);
      await era.printAndWait([
        '알몸인 ',
        you.get_colored_name(),
        '과(와) 달리, ',
        tachyon.get_colored_name(),
        '은 몸에 타월을 두르고 있었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 자연스럽게 탕 안으로 들어와 ',
        you.get_colored_name(),
        '의 옆으로 다가왔다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        you.get_colored_name(),
        '의 곁에 앉아 편안한 표정으로 몸을 기대어 왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('드디어…… URA도 끝이 났군.');
      await tachyon.say_and_wait('가끔은 이렇게 긴장을 푸는 것도 나쁘지 않네.');
      era.println();
      await era.printAndWait([tachyon.sex, '은 만족스러운 듯 한숨을 내뱉었다.']);
      await era.printAndWait(
        '마치 큰 프로젝트를 마친 직장인이 회식 자리에서 맥주 한 잔을 들이켜고 내뱉는 한숨과도 같았다.',
      );
      await era.printAndWait(
        '그것이 해방감인지 성취감인지, 아니면…… 스스로도 알 수 없는 미묘한 상실감인지 알 수 없었다.',
      );
      await era.printAndWait([
        '지난 3년을 되돌아보면, ',
        you.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '은 참으로 많은 것을 함께 이루어 냈다.',
      ]);
      await era.printAndWait([
        '삼관을 향한 여정, 감정에 대한 연구 과제, ',
        coffee.get_colored_name(),
        '와의 격전……',
      ]);
      await era.printAndWait(
        '그 밖에도 언급할 가치가 있거나 혹은 사소한 수많은 추억이 있었다.',
      );
      await era.printAndWait([
        '지난 3년의 무게에, ',
        you.get_colored_name(),
        ' 역시 ',
        tachyon.get_colored_name(),
        '과 마찬가지로 깊은 한숨을 내쉬었다.',
      ]);
      era.println();
      await era.printAndWait([
        '그 후 한동안 ',
      ]);
      await era.printAndWait([
        ' 두 사람은 아무 말 없이 서로에게 기대어 있었다.',
        you.get_colored_name(),
        '은(는) 그제야 곁에 있는 ',
        tachyon.sex,
        '의 몸이 무척이나 가냘프다는 사실을 새삼 깨달았다.',
      ]);
      await era.printAndWait([
        '지금 이곳에 있는 그녀는 천재 ',
        tachyon.uma_sex_title,
        '도, 매드 사이언티스트도 아니었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        ' 또한 그저 평범한 한 명의 ',
        tachyon.teen_sex_title,
        '일 뿐이었다.',
      ]);
      era.println();
      await era.printAndWait('수증기가 피어오르는 온천 속에서 두 사람은 정적을 만끽했다.');
      await era.printAndWait([
        '트러블 메이커인 ',
        tachyon.get_colored_name(),
        '과 그녀의 조력자인 트레이너를 아는 사람들이라면 상상조차 할 수 없는 광경일 것이다.',
      ]);
      await era.printAndWait('하지만 지금 이 순간, 두 사람은 그 어느 때보다 이 평온함에 침잠해 있었다.');
      era.drawLine();
      await tachyon.say_and_wait([
        callname,
        ', 자네는 『슈뢰딩거의 고양이』를 알고 있나?',
      ]);
      era.println();
      await era.printAndWait([
        '갑자기 ',
        tachyon.get_colored_name(),
        '이 침묵을 깼다.',
      ]);
      await era.printAndWait('슈뢰딩거의 고양이……?');
      era.printButton('「몰라」', 1);
      era.printButton('「알아」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          '슈뢰딩거의 고양이란, 본래 슈뢰딩거가 양자역학의 모순을 반박하기 위해 제시했던 가상 실험이라네.',
        );
        await tachyon.say_and_wait(
          '아이러니하게도 지금은 양자역학을 설명하는 가장 대표적인 예시가 되어버렸지만 말이야.',
        );
        await tachyon.say_and_wait(
          '간단히 말해, 방사성 물질과 그 방사선에 반응하는 독가스 장치, 그리고 고양이를 밀폐된 상자 안에 넣는 실험이지.',
        );
        await tachyon.say_and_wait(
          '방사성 물질이 언제 붕괴하여 방사선을 내뿜을지는 아무도 모른다네.',
        );
        await tachyon.say_and_wait(
          '즉, 장치가 작동할지 안 할지도 알 수 없지. 상자를 열기 전까지 고양이는 죽어 있는 상태와 살아 있는 상태가 동시에 중첩되어 있는 셈이라네.',
        );
      } else {
        await tachyon.say_and_wait(
          '이 실험에 대해서는 오늘날 여러 학파가 저마다의 견해를 내놓고 있지. 하지만 그 본질은 변하지 않아…… 자네는 이 실험에서 가장 중요한 것이 무엇이라고 생각하나?',
        );
      }
      era.printButton('「……고양이?」', 1);
      era.printButton('「……독가스?」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '하하, 확실히 그것들이 없으면 실험 자체가 성립되지 않으니 정답이라 할 수도 있겠군…… 하지만 틀렸어.',
      );
      era.println();
      await era.printAndWait([
        '갑자기 ',
        tachyon.get_colored_name(),
        '이 온천에서 일어나 ',
        you.get_colored_name(),
        '을(를) 정면으로 마주 보았다. 두 사람의 시선이 얽혔다.',
      ]);
      await era.printAndWait(
        '그녀의 와인빛 눈동자는 잘 익은 과실주처럼 사람을 매료시켰다.',
      );
      await era.printAndWait([
        '문득 ',
        you.get_colored_name(),
        '은(는) 생각했다. 이런 ',
        tachyon.sex,
        '는 자신을 보고 광기 어린 눈을 가졌다고 평한 적이 있었다.',
      ]);
      await era.printAndWait([
        '그렇다면 지금 그녀의 눈동자에 비친 ',
        tachyon.sex,
        '의 모습은 과연 어떠할까.',
      ]);
      era.println();
      await tachyon.say_and_wait('정답은————— 『관측자』라네.');
      await tachyon.say_and_wait(
        '고양이가 살았는지 죽었는지는 어디까지나 『가능성』에 불과해. 무한히 수렴하지만 정해지지 않은 가능성이지.',
      );
      await tachyon.say_and_wait(
        '오직 관측이 더해졌을 때만 가능성이 고정되어, 생과 사라는 결과로 나타나는 걸세.',
      );
      era.println();
      await era.printAndWait('즉, 다시 말해.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 손을 뻗어 ',
        you.get_colored_name(),
        '의 눈을 만지려 했다. 하지만 그녀의 손은 어쩐지 조금 떨리고 있었고, 혹시라도 상처를 입힐까 두려워하는 듯 보였다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 먼저 ',
        tachyon.sex,
        '의 손을 맞잡았다. 그리고 느릿하지만 확실하게 자신의 눈가로 그녀의 손을 이끌었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('자네가 바로 나의 관측자라네.');
      await tachyon.say_and_wait([
        tachyon.get_colored_name(),
        '의 가능성을 고정해 주는 단 한 사람이지.',
      ]);
      await tachyon.say_and_wait([
        '지금 이 순간의 ',
        tachyon.get_colored_name(),
        '을 결정해 주는 사람 말일세.',
      ]);
      await tachyon.say_and_wait(
        '이 실험에서 연구자는 자네고, 나는 그저 자네가 상자 속에 넣은 고양이일 뿐이라네.',
      );
      era.println();
      await era.printAndWait('그녀의 손가락이 조심스럽게 닿았다.');
      await era.printAndWait('눈동자에 닿은 이물감 외에는 특별한 감각은 없었다.');
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은 그것만으로 만족한 듯 스스로 손을 거두었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '앞으로의 실험도…… 부디 잘 부탁하네.',
      );
      await tachyon.say_and_wait('나의 친애하는 교수 군.');
      await tachyon.say_and_wait(
        '이따가 밖으로 나가면 내가 준비한 선물을 잊지 말게나.',
      );
      era.println();
      await era.printAndWait([
        '말을 마친 뒤, ',
        tachyon.get_colored_name(),
        '은 먼저 탕 위로 올라갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '참, 오늘 먹을 약은 차가운 우유에 섞어 두었으니 잊지 말고 마시게.',
      );
      era.println();
      await era.printAndWait(
        '…………적어도 차가운 우유를 챙겨줄 정도로는 성장했다고 봐도 되는 걸까.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마치 가스라이팅이라도 당한 듯한 생각을 하며, 온천욕을 조금 더 즐기기로 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] kiku_sho_lose
  kiku_sho_lose: (() => {
    const title = '불씨가 보이다';
    /**
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} c_call_y マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
    ) => {
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton('「……타키온?」', 1);
      await era.input();
      await era.printAndWait([
        '레이스는 끝났다. 영광의 국화상, 최강의 ',
        tachyon.uma_sex_title,
        '을(를) 가리는 싸움.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 담당하는 ',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        '은(는) 이번 레이스에서 패배했다.',
      ]);
      await era.printAndWait([
        '레이스를 마치고 선수 대기실에 들어온 뒤에도 두 사람은 줄곧 침묵했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 조용히 ',
        tachyon.sex,
        '의 얼굴을 살폈지만 ',
        tachyon.sex,
        '의 속마음은 알 수 없었다.',
      ]);
      await era.printAndWait('침묵의 무게가 견딜 수 없을 만큼 쌓였을 때……');
      era.println();
      await tachyon.say_and_wait('후후……');

      era.printButton('「타키온……?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '지지 않을 줄 알았는데…… 이런, 결국 누군가 나를 넘어섰군.',
      );
      await tachyon.say_and_wait([
        '역시 ',
        tachyon.uma_sex_title,
        '의 가능성은 레이스에서만 확인할 수 있는 법인가 보네.',
      ]);
      await tachyon.say_and_wait('졌네, 완전히 져 버렸군.');
      era.println();
      await era.printAndWait([
        '타키온의 태도는 ',
        you.get_colored_name(),
        '의 예상보다 훨씬 태연했다.',
      ]);
      await era.printAndWait([
        '그렇지……',
        tachyon.sex,
        '에게 레이스란 결국 실험에 불과하다.',
      ]);
      await era.printAndWait('실험에는 성공도 있고 실패도 있다. 레이스도 마찬가지다.');
      await era.printAndWait('실패했다면 거기서 교훈을 얻으면 된다.');
      era.println();
      await era.printAndWait([
        '그런 태도가 레이스에 적합한지는 별개지만, 적어도 ',
        tachyon.sex,
        '은(는) 크게 동요하지 않은 것 같았다.',
      ]);
      era.println();
      await era.printAndWait('하지만 안심할 틈도 없이 반갑지 않은 손님이 찾아왔다.');
      era.println();
      await coffee.say_and_wait([c_call_t, '……오늘 달리는 모습이……']);
      await tachyon.say_and_wait(['어라, ', call_25, ', 무슨 일인가?']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 Plan B를 이어받을 후계자.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 Plan A를 시험하는 시금석.',
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          '이번 국화상에서 ',
          tachyon.get_colored_name(),
          '의 가장 큰 적.',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '동시에 ',
          you.get_colored_name(),
          '의 또 다른 담당 ',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, '……너의 달리기…… 예전과 달라……']);
      await tachyon.say_and_wait(
        '후후, 무슨 문제라도 있나? 달리는 방식이란 원래 계속 진화하는 법이지.',
      );
      await coffee.say_and_wait(
        '……별건 아니야. 그저 축하해. 또 다른 자신을 넘어섰구나.',
      );
      await tachyon.say_and_wait([
        '……또 다른 나? 잠깐, ',
        call_25,
        '! 그게 무슨 뜻인가!',
      ]);
      await coffee.say_and_wait(
        '……무슨 뜻일까. 난 그저 친구의 말을 전했을 뿐이야.',
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            '그리고 담당 ',
            tachyon.uma_sex_title,
            '라고 해도…… 남의 연인을 너무 오래 독차지하지는 마, ',
            c_call_t,
          ]);
          await era.printAndWait([
            '그렇게 말한 뒤 ',
            coffee.get_colored_name(),
            '은(는) ',
            you.get_colored_name(),
            '의 뺨에 입을 맞춰 자신의 마음을 드러냈다.',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            '오늘은 특별한 날이니까 ',
            c_call_y,
            '을(를) 잠시 빌려줄게…… 나중에 돌려줘.',
          ]);
        } else {
          await coffee.say_and_wait([
            '그리고…… 나중에 ',
            c_call_y,
            '을(를) 돌려줘.',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '! …………쳇, 가 버렸군……',
      ]);
      await era.printAndWait([
        '괜찮은지 걱정된 ',
        you.get_colored_name(),
        '은(는) 조심스레 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            '별일 아니네…… 그것보다 ',
            callname,
            ', 꽤 인기가 많군.',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            '별일 아니네…… 그것보다 ',
            callname,
            ', 연애 문제로 빚진 게 너무 많지 않은가.',
          ]);
        } else {
          await tachyon.say_and_wait([
            '별일 아니네…… 그보다 ',
            callname,
            '……연애 문제로 빚진 게 너무 많군.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 이를 악물고 돌아보며 말했다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            call_25,
            '에게 더럽혀진 곳은 제대로 소독해야겠군!',
          ]);
          era.println();
          await era.printAndWait([
            '그런 핑계로 ',
            tachyon.sex,
            '은(는) ',
            you.get_colored_name(),
            '의 뺨에 여러 번 입을 맞추고 ',
            coffee.get_colored_name(),
            '이(가) 먼저 남긴 입맞춤의 흔적을 수십 배, 수백 배로 덮으려 했다.',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '와 ',
        tachyon.get_colored_name(),
        '의 클래식 전선은 이곳에서 막을 내렸다!',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] kiku_sho_win
  kiku_sho_win: (() => {
    const title = '이길 수 있어';
    /**
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} c_call_y マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     * @param {boolean} win_triple_crowns アグネスタキオンが삼관を制したか
     * @param {boolean} invincible アグネスタキオンが無敗か
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
      win_triple_crowns,
      invincible,
    ) => {
      if (win_triple_crowns) {
        if (invincible) {
          await you.say_as_passer_by_and_wait('실황', [
            '무패 삼관의 탄생! 역사의 수레바퀴가 또 한 번 돌아갑니다!',
            tachyon.get_colored_name(),
            ', 무패 삼관 달성!',
          ]);
        } else {
          await you.say_as_passer_by_and_wait('실황', [
            '삼관',
            tachyon.uma_sex_title,
            '탄생! 동세대 최강! 가장 빠르고, 가장 운이 좋고, 가장 강한 ',
            tachyon.uma_sex_title,
            '! 바로 ',
            tachyon.get_colored_name(),
            '！',
          ]);
        }
      } else {
        await you.say_as_passer_by_and_wait('실황', [
          '강적들을 물리치고 누구보다 먼저 결승선을 통과한 것은 초광속의 ',
          tachyon.sex_code - 1 ? '공주' : '왕자',
          '、',
          tachyon.get_colored_name(),
          '! 국화상 최강의 ',
          tachyon.uma_sex_title,
          '는, ',
          tachyon.get_colored_name(),
          '！',
        ]);
      }
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' 이(가) 국화상을 제패했다. 누구도 부정할 수 없는 승리였다.',
      ]);
      await era.printAndWait(
        '그러나 축배를 들기도 전에 반갑지 않은 손님이 찾아왔다.',
      );
      era.println();
      await coffee.say_and_wait([c_call_t, '……오늘 달리는 방식은……']);
      await tachyon.say_and_wait(['오호, ', call_25, ', 무슨 일인가?']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 플랜 B를 이을 후계자.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 플랜 A를 시험할 시금석.',
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          '이번 국화상에서 ',
          tachyon.get_colored_name(),
          '의 최대 적수.',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '동시에 ',
          you.get_colored_name(),
          '이(가) 맡고 있는 또 다른 ',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, ', 네 주법…… 예전과 달라졌어……']);
      await tachyon.say_and_wait(
        '후후, 무슨 문제라도 있나? 주법이란 원래 끊임없이 발전하는 것이지 않은가?',
      );
      await coffee.say_and_wait(
        '……별건 아니야. 다만 축하해. 또 다른 자신을 넘어섰구나.',
      );
      await tachyon.say_and_wait([
        '……또 다른 자신이라고? 잠깐, ',
        call_25,
        '! 그게 무슨 뜻인가!',
      ]);
      await coffee.say_and_wait(
        '……무슨 뜻일까. 난 그저 친구가 전한 말을 대신한 것뿐이야.',
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            '그리고 네가 담당하는 ',
            tachyon.uma_sex_title,
            '라고 해도…… 남의 연인을 너무 오래 독차지하지 말아 줘, ',
            c_call_t,
          ]);
          await era.printAndWait([
            '말을 마친 뒤 ',
            coffee.get_colored_name(),
            '은(는) ',
            you.get_colored_name(),
            '의 뺨에 입을 맞춰 자신의 마음을 드러냈다.',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            '오늘은 특별한 날이니까 ',
            c_call_y,
            '을(를) 잠깐 빌려줄게…… 나중에 돌려줘.',
          ]);
        } else {
          await coffee.say_and_wait([
            '그리고…… 나중에 ',
            c_call_y,
            '을(를) 돌려줘.',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '! …………쳇, 가 버렸군……',
      ]);
      await era.printAndWait([
        '괜찮은지 걱정되어 ',
        you.get_colored_name(),
        '은(는) 걱정스러운 눈으로 ',
        tachyon.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            '별거 아니네…… 그건 그렇고 ',
            callname,
            ', 꽤 인기가 많은 모양이군.',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            '별거 아니네…… 그건 그렇고 ',
            callname,
            ', 연애 문제로 얽힌 빚이 너무 많군.',
          ]);
        } else {
          await tachyon.say_and_wait([
            '별거 아니네…… 그것보다 ',
            callname,
            '……연애 문제로 얽힌 빚이 너무 많군.',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 이를 악문 채 돌아보며 말했다.',
          ]);
          era.println();
          await tachyon.say_and_wait([
            call_25,
            '이(가) 건드린 곳은 제대로 소독해야 하지 않겠나!',
          ]);
          era.println();
          await era.printAndWait([
            '그 말을 핑계로 ',
            tachyon.sex,
            '은(는) ',
            you.get_colored_name(),
            '의 뺨에 여러 차례 입을 맞췄고 ',
            coffee.get_colored_name(),
            '이(가) 먼저 남긴 입맞춤의 흔적을 열 배, 백 배로 덮어 버리려 했다.',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        '어찌 됐든 ',
        you.get_colored_name(),
        '와 ',
        tachyon.get_colored_name(),
        '의 영광스러운 국화상은 막을 내렸다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] palace_a
  palace_a: (() => {
    const title = '한계의 저편';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '과 함께한 3년이 끝났다.',
      ]);
      era.println();
      await era.printAndWait([
        '졸업식 후, ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '에게 향후 계획을 물어본 적이 있었다.',
      ]);
      await tachyon.say_and_wait(
        '학생으로서 가장 중요한 본분은 학습이 아니겠나?',
      );
      await era.printAndWait([
        tachyon.sex,
        '는 그저 웃으며 ',
        tachyon.sex,
        '답지 않은 대사를 내뱉었다.',
      ]);
      era.println();
      await era.printAndWait('하지만 이번만큼은 진심인 듯했다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그해 대학 공통 테스트 수험자 명단에서 ',
        tachyon.sex,
        '의 이름을 발견했다.',
      ]);
      await era.printAndWait([
        '믿기지 않았지만, ',
        tachyon.sex,
        '는 진학을 선택한 모양이었다.',
      ]);
      era.println();
      await era.printAndWait('오늘은 각 대학의 입학식이 있는 날이다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 몇 달 전 합격자 발표가 났던 날을 회상했다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 합격했다는 소식을 들었을 때 ',
        you.get_colored_name(),
        '의 심정은 말로 표현하기 힘들었다.',
      ]);
      await era.printAndWait([
        '가능성으로 가득 찼던 ',
        tachyon.sex,
        '도 결국은 평범한 사람의 길을 걷게 되는구나.',
      ]);
      await era.printAndWait(
        '보통 사람들처럼 진학하고, 보통 사람들처럼 졸업하고, 보통 사람들처럼 취직하고.',
      );
      await era.printAndWait([
        '그러다 보면 언젠가 ',
        tachyon.sex,
        '도 자신처럼 지루한 어른이 되어버리는 걸까.',
      ]);
      await era.printAndWait([
        '단둘이서 했던 그 축하 파티에서 ',
        you.get_colored_name(),
        '이(가) ',
        tachyon.sex,
        '에게 무슨 말을 했는지, ',
        tachyon.sex,
        '가 ',
        you.get_colored_name(),
        '에게 무슨 말을 했는지 이제는 가물가물했다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '와 작별한 자신 역시 원래의 일상으로 돌아가, 다음 ',
        tachyon.uma_sex_title,
        '를 담당하며 ',
        tachyon.sex,
        '의 꿈을 서포트해야 한다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        tachyon.sex,
        '처럼 ',
        you.get_colored_name(),
        '의 시선을 불태울 듯이 강렬한 빛을 내뿜는 ',
        tachyon.uma_sex_title,
        '는…… 아마 다신 만날 수 없겠지.',
      ]);
      await era.printAndWait([
        '어느새 ',
        you.get_colored_name(),
        '은(는) 무의식적으로 과거 이과 준비실이자 실험실이었던 빈 교실 앞에 서 있었다.',
      ]);
      era.println();
      await you.say_and_wait('온 김에 조금 정리나 해둘까.');
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 문을 열자 그곳에는 평소처럼 실험에 몰두하는 ',
        tachyon.get_colored_name(),
        '과 자기 자리에서 커피를 마시는 ',
        coffee.get_colored_name(),
        '가…… 있을 리가 없었다.',
      ]);
      await era.printAndWait([
        '졸업식 이후 아무도 들어오지 않은 교실은 마지막으로 사용했을 때의 모습 그대로였다.',
      ]);
      await era.printAndWait([
        '실험대 위에 놓인 빈 시험관, 내용물이 말라붙은 플라스크, 그리고 탁자 위의 홍차 얼룩까지. 세월의 흔적은 ',
        you.get_colored_name(),
        '의 3년간의 추억을 불러일으켰다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……아, ', callname]);
      era.println();
      await era.printAndWait([
        '등 뒤에서 익숙한 목소리가 들려왔고, ',
        you.get_colored_name(),
        '은(는) 고개를 돌렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 아침저녁으로 간절히 그리워하던 ',
        tachyon.sex,
        '가 서 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('왔으면 어서 짐 옮기는 것 좀 도와주게나.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '을(를) 보자마자 평소와 다름없는 미소를 지어 보였다. 그 미소가 너무나도 선명해서 ',
        you.get_colored_name(),
        '은(는) 마치 아무것도 변하지 않았다는 착각에 빠졌다.',
      ]);
      await era.printAndWait(
        '하긴, 졸업했으니 여기 있는 실험 기구들도 당연히 옮겨야겠지.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 아무 말 없이 묵묵히 ',
        tachyon.get_colored_name(),
        '의 뒤를 따랐다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 당연히 ',
        tachyon.sex,
        '가 짐을 자기 집이나 지금 다니는 학교로 옮기거나, 혹은 폐기 처분하러 가는 줄 알았다.',
      ]);
      await era.printAndWait([
        '그런데 의외로 ',
        tachyon.sex,
        '는 모든 기구를 바로 옆방으로 옮겨놓았다.',
      ]);
      era.println();
      await tachyon.say_and_wait('좋아, 이걸로 다 됐군……');
      era.println();
      await era.printAndWait([
        '마지막 짐을 옮긴 ',
        tachyon.sex,
        '는 이제 다시는 돌아오지 않을 교실 문 앞에 서서 쓸쓸한 미소를 지었다.',
      ]);
      await era.printAndWait([
        '그러고는 다시 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, ', 그럼 오늘의 실험을 시작해볼까!']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '의 눈에는 여전히 광기 어린 빛이 일렁이고 있었다.',
      ]);
      await era.printAndWait([
        '지난 3년간 매일같이 들었던, ',
        tachyon.sex,
        '와 만날 때마다 들었던 인삿말 그대로였다.',
      ]);
      await era.printAndWait([
        '어느새 ',
        you.get_colored_name(),
        '도 미소를 지었다. 웃음이 멈추지 않아 크게 소리 내어 웃었고, 심지어 눈물까지 찔끔 났다.',
      ]);
      await era.printAndWait(
        '아마 이 3년이라는 시간 동안, 정말로 영원히 변하지 않는 것이 있는 모양이다.',
      );
      await era.printAndWait([
        '이를테면 ',
        you.get_colored_name(),
        '과(와) ',
        tachyon.get_colored_name(),
        '의 관계. 이를테면 ',
        tachyon.sex,
        '의 지식에 대한 열망. 이를테면 ',
        you.get_colored_name(),
        '의 ',
        tachyon.sex,
        '에게 품은 감정, 그리고 ',
        tachyon.sex,
        '의 ',
        you.get_colored_name(),
        '에게 품은 감정 같은 것들 말이다.',
      ]);
      await era.printAndWait([
        '복도를 타고 불어온 바람이 마치 ',
        you.get_colored_name(),
        '의 말에 대답하듯 속삭였다.',
      ]);
      await era.printAndWait('창밖으로 낙엽이 떨어지고, 어느덧 가을이 찾아왔다.');
      era.drawLine({ content: '3일 후' });
      era.printButton(
        '「……잠깐만!? 그날 사실 작별 인사하러 온 거 아니었어!?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        '…………',
        callname,
        '? 3일이나 지나서야 이제야 반응하다니, 자네 좀 둔한 거 아닌가.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 실험실…… 아니, 바로 옆의 새 실험실이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 「마지막으로 한 번만 ',
        tachyon.sex,
        '의 폭주에 장단을 맞춰 주자」고 생각하며 ',
        tachyon.sex,
        '의 「마지막」 실험에 동참했었다.',
      ]);
      await era.printAndWait('그런데 그 마지막 실험이 무려 3일이나 이어질 줄은 몰랐다.');

      era.printButton('「대학에 간다며!?」', 1);
      await era.input();
      await tachyon.say_and_wait('그렇다네. 트레센 대학부에 입학했지.');
      era.println();
      await you.say_and_wait(
        '트레센에 대학부가 어디 있어!? 금시초문인데!?',
      );
      era.println();
      await tachyon.say_and_wait(
        '작중 스토리에서는 언급되지 않았을지 몰라도, 공식 설정상 트레센 학원에는 대학부도 존재한다네.',
      );
      era.printButton('「공식 설정은 또 뭔 소리야!?」', 1);
      era.printButton(
        '「백번 양보해서 정말 있다고 쳐도, 너 수업은 안 들어도 되는 거야!?」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 자네 대학을 다녀보긴 한 건지 의심스럽군. 대학생 중에 누가 그렇게 성실하게 수업을 다 듣나.',
      ]);
      era.println();
      await era.printAndWait(
        '반박하고 싶었지만, 고등학교 수업조차 제멋대로 빼먹던 녀석이 눈앞에 있으니 반박할 기운이 싹 사라졌다.',
      );
      era.printButton('「그럼 왜 갑자기 교실은 옮긴 거야!?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '아…… 그건 내가 말하기 좀 그렇네만, 그 교실이 지난 몇 년간 우리의 사용 탓에……',
      );
      await tachyon.say_and_wait('안전상에 약간의 문제가 생겨서 말이지……');
      await tachyon.say_and_wait(
        '그래서 점검이랑 유지보수가 필요하다네…… 한 일주일 정도면 다시 돌아갈 수 있을 거야.',
      );
      era.printButton(
        '「고작 일주일 비우는 거면서 왜 그렇게 감상적인 분위기를 잡은 거야!?」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        '아, ',
        callname,
        '너무하군. 그 교실은 우리 3년간의 학…… 사용 기록이 담긴 곳인데, 감사 인사 정도는 해도 괜찮지 않나.',
      ]);
      era.println();
      await era.printAndWait('할 말이 없었다.');
      await era.printAndWait([
        '돌이켜보니 정말 모든 것이 ',
        tachyon.sex,
        '의 말대로였다.',
      ]);
      await era.printAndWait('결국 자신 혼자 북 치고 장구 치며 감상에 젖어있었던 건가.');
      era.println();
      await tachyon.say_and_wait(
        '합격자 발표 날에 이미 어느 학교에 가는지랑, 앞으로의 실험도 계속 자네에게 부탁하겠다고 말했건만……',
      );
      await tachyon.say_and_wait(
        '전부 잊어버리다니…… 역시, 그날 음료에 넣은 약이 좀 과했던 모양이군.',
      );
      era.println();
      await era.printAndWait(
        '그날 일이 기억 안 나는 게 예술적인 미화가 아니라 진짜로 약 때문에 필름이 끊긴 거였다고!?',
      );
      era.println();
      await tachyon.say_and_wait([
        '자자, 잡담은 이쯤 해두고, ',
        callname,
        ', 어서 가세. 오늘 배합한 약에 문제가 없다면……',
      ]);
      await tachyon.say_and_wait([
        '……어쩌면 모든 ',
        tachyon.uma_sex_title,
        '의 세계를 뒤엎어버릴지도 모른다네.',
      ]);
      era.println();
      await era.printAndWait('세계를…… 뒤엎는다니……?');
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '타키온의 발명이 세계를 멸망시킬 124가지 가능성을 머릿속으로 시뮬레이션해 본 뒤, ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '를 따라 운동장으로 향했다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 평소와 같으면서도 한 번도 본 적 없는 약물을 꺼냈다.',
      ]);
      await era.printAndWait('평소와 같은 것은, 여느 때처럼 빛이 난다는 점이었고.');
      await era.printAndWait(
        '본 적 없는 것은, 그 빛이 평소 보던 어떤 색과도 달랐기 때문이었다.',
      );
      await era.printAndWait(
        '굳이 말하자면…… 청색과 백색이 뒤섞인 빛이었는데, 단순한 혼합광과는 또 달랐다.',
      );
      await era.printAndWait(
        '어쩌면, 이 약은 정말로 온 세상을 뒤엎을지도 모른다.',
      );
      await era.printAndWait([
        '어쩐지 ',
        you.get_colored_name(),
        '은(는) 그런 확신이 들었다.',
      ]);
      await era.printAndWait([
        '하지만 그 변화가 좋은 것인지 나쁜 것인지는 ',
        you.get_colored_name(),
        '(으)로서는 아직 알 길이 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('그럼, 마시겠네.');
      era.println();
      await era.printAndWait([
        '미처 말릴 틈도 없이, ',
        tachyon.get_colored_name(),
        '은 재빨리 병을 따서 약물을 들이켰다.',
      ]);
      era.println();
      await tachyon.say_and_wait('그리고……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 갑자기 달리기 시작했다. 모든 것이 순식간에 일어난 일이라 ',
        you.get_colored_name(),
        '은(는) 아무런 대응도 할 수 없었다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 정해진 훈련량을 전부 소화하고도 숨 하나 흐트러지지 않은 채 ',
        you.get_colored_name(),
        '의 곁으로 돌아왔다.',
      ]);
      await era.printAndWait([
        '이 정도 운동은 지금의 ',
        tachyon.sex,
        '에게는 일도 아니었을 것이다.',
      ]);
      await era.printAndWait([
        '아니, 애초의 측정치대로라면 지금의 ',
        tachyon.sex,
        '는 진작에 ',
        tachyon.uma_sex_title,
        '로서의 한계점에 도달했어야 했다……',
      ]);
      era.println();
      await era.printAndWait([
        '거기까지 생각이 미치자, ',
        you.get_colored_name(),
        '의 머릿속에 어떤 가설이 스쳤다.',
      ]);
      await era.printAndWait([
        '미친 소리 같지만 만약 정말 그렇다면…… ',
        tachyon.sex,
        '의 행동이, 이 모든 상황이 설명된다.',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 떨리는 손으로 주머니를 뒤져, 예전에 ',
        tachyon.sex,
        '이(가) ',
        you.get_colored_name(),
        '에게서 받았던 안경을 찾았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '어떤가, ',
        callname,
        '? 지금 자네 눈에 보이는 나는 『얼마』인가?',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '의 눈에 비친 ',
        tachyon.sex,
        ', 그 머리 위의 숫자와 기호는 한계를 상징하는 「SS+ 1200」이 아니라……',
      ]);
      await era.printAndWait('「UG 1205」', {
        color: adaptability_colors.at(-1),
      });
      era.drawLine();
      await tachyon.print_and_wait([
        you.get_colored_actual_name(),
        '의 표정을 보고, ',
        tachyon.get_colored_name(),
        '은 웃음을 터뜨렸다.',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '는 도구의 관측 따위 없어도 자신의 변화를 알고 있었다. 이 세상 그 누가 ',
        tachyon.sex,
        '보다 자신의 몸을 더 잘 알겠는가.',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        '가 진정 원했던 것은, 바로 눈앞의 ',
        you.get_colored_actual_name(),
        '이(가) 짓고 있는 이 표정이었다.',
      ]);
      era.println();
      await tachyon.print_and_wait('그와 함께 걸어온 3년.');
      await tachyon.print_and_wait('꿈을 위해 온 힘을 다했던 그 시간들.');
      await tachyon.print_and_wait(
        '두 사람의 노력이, 땀과 눈물이 흐르고 흘러 마침내 뚫고 지나온 것은.',
      );
      era.println();
      await tachyon.print_and_wait('한계라는 이름의 장벽이었다.');
      era.println();
      await tachyon.print_and_wait('놀라운가? 기쁜가? 전율이 돋나?');
      await tachyon.print_and_wait([
        '점점 ',
        tachyon.get_colored_name(),
        '은 자신의 표정을 제어할 수 없게 되었다.',
      ]);
      await tachyon.print_and_wait(
        '아아, 분명 이 대사는 좀 더 덤덤하게 내뱉고 싶었건만.',
      );
      await tachyon.print_and_wait('입꼬리는 억제할 수 없이 위로 올라가고.');
      await tachyon.print_and_wait('눈가에는 통제되지 않는 눈물이 맺힌다.');
      await tachyon.print_and_wait('이것이 바로 기쁨의 눈물이라는 것일까.');
      await tachyon.print_and_wait('안 되겠군, 더 이상 참을 수 없어.');
      era.println();
      await tachyon.say_and_wait([
        '오게나, ',
        callname,
        '! 우리 함께 탐구해보세, 한계 너머에 존재하는 세계를!',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '안 돼, 지금 내 표정은 분명 엄청나게 한심하겠지.',
      );
      await tachyon.print_and_wait(
        '정말이지, 이런 얼굴을 하고 협상을 하러 가다니 누가 믿어주겠나.',
      );
      await tachyon.print_and_wait(
        '만약 이런 어리석은 표정을 짓는 자를 믿어주는 이가 있다면……',
      );
      era.println();
      await tachyon.print_and_wait('후후, 그건 분명 미치광이거나 광인일 것이다.');
      await tachyon.print_and_wait([
        '이를테면, 눈앞에서 똑같이 어리석은 표정을 짓고는 여전히 눈동자 속에 광기 어린 빛을 품고 있는 ',
        you.get_colored_actual_name(),
        '처럼 말이야.',
      ]);
      era.println();
      await era.printAndWait(
        '미친 과학자와 광신적인 모르모트가 자신들에게 가장 어울리는 결말을 맞이했다.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] sank_hai_win
  sank_hai_win: (() => {
    const title = '미지의 인자';
    /**
     * Plan A 専用（Plan B は大阪杯出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('실황', [
        tachyon.get_colored_name(),
        '! 새해 G1 연전의 시작을 알리는 초광속의 종이 울립니다!',
        tachyon.get_colored_name(),
        '이(가) 멋지게 결승선을 통과했습니다!',
      ]);
      era.println();
      await tachyon.print_and_wait('오호, 이겼군.');
      await tachyon.print_and_wait([
        '무례하게 들릴지도 모르지만 이것이 ',
        tachyon.get_colored_name(),
        '의 진심이었다.',
      ]);
      await tachyon.print_and_wait([
        '이 레이스장에서 ',
        tachyon.get_colored_name(),
        '을(를) 멈출 수 있는 것은 ',
        tachyon.sex,
        '자신의 부상뿐이다.',
      ]);
      await tachyon.print_and_wait([
        '부상을 극복한 지금은 오만하다고 불려도 상관없다.',
        tachyon.get_colored_name(),
        '은(는) 누구에게도 지지 않는다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        '이(가) 신경 쓰는 것은 오직 실험 결과뿐이다.',
      ]);
      await tachyon.print_and_wait('하지만……');
      era.println();
      await tachyon.say_and_wait(
        '환호성이 없군…… 하긴 그렇지. 급조한 인기몰이가 통할 리 없으니…… 시간이 필요하겠어.',
        true,
      );
      await tachyon.print_and_wait(
        '게다가 환호성이 있다 한들 레이스에 영향을 줄 리도 없지.',
      );
      await tachyon.print_and_wait('그랬다면 인기순으로 순위를 정하면 그만일 테니까.');
      await tachyon.print_and_wait(
        '레이스도 끝났으니…… 그럼 모르모트를 찾으러……',
      );
      era.println();
      await you.say_as_passer_by_and_wait('관객 A', '대단해!');
      era.println();
      await tachyon.say_and_wait('…………？');
      await you.say_as_passer_by_and_wait('관객 B', [
        '엄청나게 빠르군…… 저게 ',
        tachyon.get_colored_name(),
        '란 말인가?',
      ]);
      await you.say_as_passer_by_and_wait(
        '관객 C',
        '언론 보도 때문에 문제아라고만 생각했는데…… 설령 문제아라도 경기장에서는 성적이 전부잖아!',
      );
      await you.say_as_passer_by_and_wait('관객 D', [
        '애초에 클래식 시즌 전적부터 차원이 달랐어. 이런 ',
        tachyon.uma_sex_title,
        '가 트윙클 시리즈에서 무쌍을 찍는 것도 당연하지. 드림컵 선수들이 와도 못 이길 거야!',
      ]);
      await you.say_as_passer_by_and_wait(
        '관객 E',
        '클래식 시즌부터 계속 봤는데 아무리 봐도 너무 강해!',
      );
      era.println();
      await tachyon.say_and_wait('이건……', true);
      era.println();
      await tachyon.print_and_wait(
        '결승선을 통과하고 조금 지나서야 정지 화면이 다시 움직이듯',
      );
      await tachyon.print_and_wait('경기장에 환호성이 울려 퍼졌다.');
      await tachyon.print_and_wait(
        '과장되고 부풀려진 근거 없는 찬사, 터무니없는 소문.',
      );
      await tachyon.print_and_wait('……이상하군. 이번 레이스에 무슨 특별한 점이라도 있었나?');
      era.println();
      await tachyon.say_and_wait(
        '아니…… 늘 이랬어. 다만…… 깨닫지 못했을 뿐.',
        true,
      );
      await tachyon.print_and_wait('두 다리가 부서질까 걱정했고,');
      await tachyon.print_and_wait('실험이 실패할까 걱정했고,');
      await tachyon.print_and_wait('제자리걸음만 할까 걱정했다.');
      await tachyon.print_and_wait(
        '그러니까…… 없었던 게 아니라 들리지 않았던 거야. 중요하지 않다고 여겼으니까.',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타키온 선배, 멋있어요!',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        '역시 타키온 선배가 최강의 ',
        tachyon.uma_sex_title,
        '야!',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        '타키온 선배 필승!',
      );
      await tachyon.print_and_wait('사실 줄곧 있었다.');
      await tachyon.print_and_wait([
        '사츠키상 때 그 사람은 분명 『광속을 넘어라! ',
        tachyon.get_colored_name(),
        '!』라고 외쳤겠지.',
      ]);
      await tachyon.print_and_wait([
        '일본 더비 때 그 사람은 분명 『',
        tachyon.uma_sex_title,
        '의 가능성을 보여 줘!』라고 외쳤겠지.',
      ]);
      await tachyon.print_and_wait([
        '국화상 때 그 사람은 분명 『증명해 줘, ',
        tachyon.uma_sex_title,
        '의 부상도 극복할 수 있다는 걸!』이라고 외쳤겠지.',
      ]);
      era.println();
      await tachyon.print_and_wait('그리고…… 오사카배.');
      await you.say_and_wait([
        tachyon.get_colored_name(),
        '의 가능성은 삼관에만 머무르지 않아!',
      ]);
      era.println();
      await tachyon.print_and_wait('그래.');
      await tachyon.print_and_wait('이번에는 확실히 들렸다.');
      era.println();
      await tachyon.print_and_wait([
        '그랬구나, ',
        tachyon.get_colored_name(),
        '은(는) 줄곧 사랑받고 있었어.',
      ]);
      await tachyon.print_and_wait('팬들에게, 후배들에게, 세상에.');
      await tachyon.print_and_wait('그리고…… 관중석의 맨 앞줄.');
      await tachyon.print_and_wait('빛나지 않는데도 누구보다 눈부신 그 사람.');
      era.println();
      await tachyon.print_and_wait('정말이지, 이 바보.');
      await tachyon.print_and_wait(
        '레이스 중에는 그렇게 멋진 말을 외칠 수 있으면서',
      );
      await tachyon.print_and_wait(
        '왜 마주 보면 그토록 서투른 칭찬밖에 못 하는 거지?',
      );
      await tachyon.print_and_wait('내가 듣지 못했다면 어쩌려고?');
      await tachyon.print_and_wait('그 응원은 헛수고가 되고 말잖아.');
      await tachyon.print_and_wait(
        '응원이란…… 응원받는 사람에게 들리도록 외치는 게 아니었던가?',
      );
      await tachyon.print_and_wait(
        '……그렇다면 누군가에게 들리려는 목적 없이 외치는 것이야말로 진정한 응원인가?',
      );
      era.drawLine();
      await tachyon.say_and_wait(['다녀왔네……', callname]);
      era.printButton('「어서 와, 타키온. 다리는 괜찮아?」', 1);
      era.printButton('「오늘 달리기도 정말 대단했어!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '……응원의 정의를 명확히 내렸다고 생각했는데. 자네 탓에 다시 조사해야겠군.',
      );
      era.println();
      await you.say_and_wait('에에————왜!?');
      era.println();
      await tachyon.say_and_wait(
        '벌로…… 오늘 약은 뇌의 고차원적 인지 판단을 방해하는 약일세……',
      );
      await tachyon.say_and_wait(
        '쉽게 말하자면 진실을 털어놓게 하는 약이지. 마신 다음 오늘 레이스에 관해 제대로 이야기해 보세.',
      );
      era.println();
      await you.say_and_wait('에에에—————!?');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] takz_kin_win_a
  takz_kin_win_a: (() => {
    const title = '신화의 탄생';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('実況', [
        '상반기 결산을 제패하고 신화가 된 것은 ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 당연하다는 듯 가장 먼저 결승선을 통과했다.',
      ]);
      await era.printAndWait('경기장에 커다란 박수와 환호가 울려 퍼졌다.');
      await era.printAndWait(
        '하늘에 꽃가루가 흩날리고 또 하나의 찬란한 레이스가 끝났다.',
      );
      era.println();
      await era.printAndWait('갑자기 관중석이 술렁이더니 열기가 더욱 뜨거워졌다.');
      await era.printAndWait([
        '레이스가 끝나면 언제나 손만 가볍게 흔들고 물러나던 ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('이(가) 이번에는 경기장에 남아 팬들의 환호에 당당히 화답하고 있었다.');
      await era.printAndWait('그 몸짓에 응원 소리가 더 커져 하늘까지 닿을 듯했다.');
      era.drawLine({ content: '退場後' });
      await tachyon.say_and_wait('……후후.');
      era.printButton('「타키온!」', 1);
      era.printButton('「오늘도 정말 멋졌어!」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '응? 아, 그보다 ',
        callname,
        '! 보게나, 측정 결과일세!',
      ]);
      await tachyon.say_and_wait(
        '이번 실험에서는 오사카배보다 환호성이라는 변수를 늘렸네. 레이스 후의 데이터 분석에 따르면,',
      );
      await tachyon.say_and_wait(
        '근육의 출력에 확실히 도움이 되었네…… 평상시 기분 상승으로 얻는 효과를 넘어서는군……',
      );
      await tachyon.say_and_wait(
        '쉽게 말해 실험 성공일세! 관중의 응원은 확실히 영향을 주는군. 하하하하!',
      );
      era.println();
      era.print('……잘 모르겠지만 어쨌든 실험이 성공한 모양이다.');
      era.printButton('「축하해!」', 1);
      era.printButton('「가능성에 한 걸음 더 가까워졌구나!」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '후후…… 아직 밝혀지지 않은 부분은 있지만 레이스에 적용하는 데는 문제가 없네!',
      );
      await tachyon.say_and_wait(
        '그런데…… 이렇게 보니 나도 환호를 들으면 기쁜 모양이군…… 사회적 동물이기 때문일까……',
      );
      era.printButton(
        '「모두 진심으로 타키온을 응원하고 있어. 화답하면 분명 기뻐할 거야.」',
        1,
      );
      era.printButton(
        '「나는 진심으로 타키온을 응원해. 타키온이 기쁘다면 그걸로 됐어.」',
        2,
      );
      if (era.get('love:32') < 50) {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '후후, 그렇겠군…… 다음에는 조금 화답해 보도록 하지. 성원에 대한 보상으로 팬 서비스를 하는 셈일세.',
          );
          era.println();
          await era.printAndWait([
            '보상이 아닌데…… 그렇게 말하고 싶지만 ',
            tachyon.get_colored_name(),
            '에게는 아직 이해하기 어렵겠지.',
          ]);
        } else {
          era.println();
          await tachyon.say_and_wait(
            '자네의 환호성…… 그래, 확실히 들었네……',
          );
          await tachyon.say_and_wait(
            '그렇게 멋진 말을 외칠 수 있으면서 레이스가 끝나고 돌아올 때마다 왜 그렇게 진부한 상투적인 말만 하는 건가?',
          );
        }
      } else {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            '그럼 그 모두에는 자네도 포함되겠군…… 내게 어떤 답례를 원하는가? 감사의 표시로♡',
          );
        } else {
          await tachyon.say_and_wait(
            '그렇군. 그러면 최고의 팬에게는 무엇으로 보답하면 좋을까?',
          );
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 요염한 눈빛으로 ',
          you.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
        await era.printAndWait([
          '一瞬、',
          you.get_colored_name(),
          '은(는) 할 말을 잃었다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '의 다카라즈카 기념이 끝났다!',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_a_95_32
  we_a_95_32: (() => {
    const title = '입장을 바꿔 보는 실험';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} kobe_hai 神戸新聞杯（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      kobe_hai,
      arim_kin,
    ) => {
      await era.printAndWait('그렇게 즐거운 여름 합숙도 끝났다.');
      await era.printAndWait('학원 버스를 타고 돌아갈 준비를 하던 참이었다.');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '타…… 타키온 선배님! 자, 잠깐만 기다려 주세요!',
      );
      era.println();
      await era.printAndWait('응?');
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '은(는) 동시에 돌아보았고, 이마에 커다란 유성을 지닌 조그마한 ',
        tachyon.uma_sex_title,
        '을(를) 발견했다.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '올해 가을…… 저는 ',
        kobe_hai,
        '에 출전해요…… 타키온 선배님…… 그때 응원하러 와 주시면 안 될까요?',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '응원…… 말인가?',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '네! 타키온 선배님께 제 달리기를 보여 드리고 싶어요!',
      );
      era.println();
      await era.printAndWait([
        kobe_hai,
        '……9월 하순 레이스군. 관전만 한다면 중요한 일정을 바꿀 정도는 아니지.',
      ]);
      await era.printAndWait([
        '이제 ',
        tachyon.get_colored_name(),
        '이(가) 응하느냐에 달렸군.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '흠…… 괜찮네. 지금으로서는 그 무렵 다른 일정도 없으니까.',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '정말이세요? 다행이에요! 꼭 이길게요!',
      );
      era.println();
      await era.printAndWait([
        '작은 ',
        tachyon.uma_sex_title,
        '은(는) 흥분한 채 자리에서 벌떡 일어나, 조금 전 억지로 약을 먹었다고는 믿기 어려운 속도로 달려갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……눈부시군. 저 아이들의 가능성이란.');
      era.printButton('「말투가 무슨 노인 같아.」', 1);
      era.printButton('「내 눈에는 타키온이 제일 눈부셔!」', 2);
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          '그런가? 그렇다면…… 앞으로도 계속 지켜봐 주게. 내 가능성은 이제 자네 없이는 존재할 수 없으니까♡',
        );
        await era.printAndWait([
          '여름 합숙은 끝났다. 다음은 ',
          arim_kin,
          '! ……그 전에 ',
          kobe_hai,
          '의 레이스를 보러 가야지!',
        ]);
      } else if (love >= 50) {
        await tachyon.say_and_wait(
          '그렇다면…… 지켜봐 주게. 내 가능성이 어디까지 닿을 수 있는지.',
        );
      } else if (relation >= 225) {
        await tachyon.say_and_wait(
          '후후, 당연하지. 저 아이들이 나를 뛰어넘기에는 아직 한참 이르네!',
        );
      } else if (relation >= 0) {
        await tachyon.say_and_wait(
          '자네…… 그런 낯간지러운 말을 하지 않으면 죽는 병이라도 걸렸나?',
        );
      } else {
        await tachyon.say_and_wait(
          '자네 같은 사람의 기대를 받는 건…… 불쾌하군.',
        );
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_a_95_35
  we_a_95_35: (() => {
    const title = '인자·관찰자의 설정';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait(
        '생각해 보니…… 관중석에서 레이스를 보는 건 이번이 처음이군요.',
      );
      era.println();
      await era.printAndWait(['오늘은 고베 신문배가 열리는 날이다.']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 후배의 초대로 경기를 관전하러 왔다.',
      ]);
      era.printButton('「평소엔 직접 출전하니까.」', 1);
      era.printButton('「평소엔 영상으로만 보니까.」', 2);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에게는 자신의 레이스가 아니면 경기장까지 올 필요가 없었을 것이다.',
      ]);
      await era.printAndWait(
        '레이스 데이터를 분석하려면 관중석보다 경기 종료 후 영상을 보는 편이 더 많은 정보를 얻을 수 있다.',
      );
      await era.printAndWait(
        '그래서 오늘은 진정한 첫 경험이다. 연구자가 아니라 관객으로서 레이스를 관람하는 날.',
      );
      era.println();
      await tachyon.say_and_wait('……현장의 분위기는…… 역시 시끄럽군요.');
      era.println();
      await you.say_as_passer_by_and_wait('팬 A', '힘내!');
      await you.say_as_passer_by_and_wait('팬 B', '꼭 이겨 줘!');
      await you.say_as_passer_by_and_wait('팬 C', [
        '고베 신문배를 국화상의 전초전이라고는 하지만, 사실 2400m라는 거리와 한신 개최라는 점을 보면 국화상을 검증하기에는……',
      ]);
      await you.say_as_passer_by_and_wait('팬 C', [
        '……그러니 고베 신문배에서 우승한 ',
        tachyon.uma_sex_title,
        '이(가) 국화상까지 우승한다고 장담할 수는 없지.',
      ]);
      await you.say_as_passer_by_and_wait('팬 D', '갑자기 무슨 소리야?');
      era.println();
      await tachyon.say_and_wait('이게 제가 출전하기 전 관중석의 풍경인가요?');
      era.printButton('「대체로 이런 분위기야. 사실은 좀 더 떠들썩하지.」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……그렇겠군요. G1이니까요. 마음은 알겠지만 지금 응원한들 무슨 의미가 있겠어요?',
      );
      era.printButton('「의미가 있느냐 없느냐의 계산 문제가 아니야.」', 1);
      era.printButton('「계속 보면 알 거야.」', 2);
      await era.input();
      await tachyon.say_and_wait('보다 보면 알게 된다니…… 어라? 게이트에 들어가는군요.');
      era.drawLine();
      await tachyon.print_and_wait('그 아이가 게이트에 들어갔다.');
      await tachyon.print_and_wait([
        '솔직히 이번 경기에서 ',
        tachyon.get_colored_name(),
        '이(가) 주목할 부분은 그리 많지 않았다.',
      ]);
      await tachyon.print_and_wait('가능성을 지닌 그 아이가 당연히 최우선이다.');
      await tachyon.print_and_wait(
        '……그 외에는 클래식급만 출전하는 G2 레이스일 뿐이다.',
      );
      era.println();
      await tachyon.say_and_wait('질 리가 없는 경기라고 해도 되겠군요.');
      era.println();
      await tachyon.print_and_wait('당연히 사전 인기 순위도 1위.');
      await tachyon.print_and_wait('천시와 지리, 인화까지 갖췄으니 질 리가 없다.');
      await tachyon.print_and_wait('사전 분석에 따른 승률은 97.46%.');
      era.println();
      await tachyon.print_and_wait('그런데……');
      era.println();
      await you.say_as_passer_by_and_wait('観客A', '지지 마!');
      await you.say_as_passer_by_and_wait('観客B', [
        '힘내! 아직 할 수 있어! 바깥으로 돌아서 ',
        tachyon.sex,
        '을(를) 추월해!',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客C',
        '포기하지 마! 반드시 따라잡을 수 있어!',
      );
      era.println();
      await tachyon.print_and_wait([
        '왜 아직도 뒤처진 ',
        tachyon.uma_sex_title,
        '에게 응원을 보내는 거지?',
      ]);
      await tachyon.print_and_wait('분명 이미 따라잡을 수 없는데.');
      await tachyon.print_and_wait('……이해가 가지 않는다.');
      await tachyon.print_and_wait([
        '아니, 이해는 할 수 있다. 헛된 일일지라도 응원하는 ',
        tachyon.uma_sex_title,
        '에게 힘을 주고 싶어 하는 마음은 알겠다.',
      ]);
      await tachyon.print_and_wait(
        '미친 과학자라는 소리를 듣더라도 인간적인 감정을 모르는 로봇은 아니다.',
      );
      await tachyon.print_and_wait('그런데 어째서 나는……');
      era.println();
      await you.say_as_passer_by_and_wait('実況', [
        '따라붙었다! 지금 후방의 ',
        tachyon.uma_sex_title,
        '이(가) 치고 올라온다!',
      ]);
      era.println();
      await tachyon.say_and_wait('！');
      await tachyon.say_and_wait('……힘내.');
      await tachyon.say_and_wait('힘내! 지지 말라고!');

      era.printButton('「！」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '実況',
        '골————인! 1착은 1번 게이트의 1번————!',
      );
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 응원 소리는 경기장 전체에 울리는 환호와 함성에 묻혔다.',
      ]);
      await era.printAndWait([
        '경기장에서 그 목소리를 들은 사람은 아마 ',
        tachyon.sex,
        '곁에 있던 ',
        you.get_colored_name(),
        '와(과)……',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '선배님! 응원이 들렸어요! 고마워요…… 그때 온몸에 힘이 솟아났어요!',
      );
      era.println();
      await tachyon.say_and_wait(
        '……후후, 훌륭한 달리기였어요. 앞으로도 꾸준히 노력하세요.',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '네!',
      );
      era.println();
      await era.printAndWait([
        '고베 신문배가 끝난 뒤 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '은(는) 경기장을 떠났다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……이론으로는 이미 알고 있었지만 외부인의 입장에서…… 혹은 당사자로서 보는 것은 처음이군요.',
      );
      await tachyon.say_and_wait(
        '다른 아이들도, 그 아이도 마지막에는…… 정말로 한계를 뛰어넘었어요.',
      );
      era.println();
      await era.printAndWait([
        '오늘 레이스에서는 여러 명의 ',
        tachyon.uma_sex_title,
        '이(가) ',
      ]);
      await era.printAndWait('한계를 뛰어넘었다.');
      await era.printAndWait([
        '사전에 측정한 ',
        tachyon.couple_title,
        '의 이론상 최고 속도마저 뛰어넘었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        ', 팬 감사제 때 있었던 일 기억하시나요?',
      ]);

      era.printButton(
        '「타키온은 무언가 보답을 바라면서 그 아이를 응원했어?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 대답하지 않고 되물었을 뿐이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……후후.');
      await tachyon.say_and_wait(
        '누군가에게 들리고 싶어서, 말을 주고받고 싶어서 한 행동이 아니에요……',
      );
      await tachyon.say_and_wait(
        '그저 자신의 마음과 감정을 목소리에 담아 내보냈을 뿐이죠.',
      );
      await tachyon.say_and_wait('달리 말하면 『감동』이에요.');
      await tachyon.say_and_wait([
        '관객은 ',
        tachyon.uma_sex_title,
        '에게 감동해서 환호하고 ',
        tachyon.uma_sex_title,
        '도 관객에게 감동받아 자신의 한계를 뛰어넘는 거죠……',
      ]);
      await tachyon.say_and_wait(
        '왼발로 오른발을 밟아 올라가려는 것처럼 영구기관을 연상시키는 비합리적인 개념인데, 실제로 벌어지고 있어요.',
      );
      await tachyon.say_and_wait(
        '역시 연구실에서는 절대 경험할 수 없는 일이군요. 하하하!',
      );

      era.printButton('「이제 레이스를 『좋아하게』 된 거야?」', 1);
      await era.input();
      await tachyon.say_and_wait('……글쎄요. 저도 아직 잘 모르겠어요.');
      era.println();
      await era.printAndWait('……그렇다.');
      await era.printAndWait('결국 직접 경기장에 서서 달린 것은 아니니까.');
      await era.printAndWait('좋아하는지 싫어하는지 아직 말로 표현하기 어려울 것이다.');
      await era.printAndWait([
        '하지만 고베 신문배가 끝났고, 아리마 기념이 코앞까지 다가왔다.',
      ]);
      await era.printAndWait('연구의 끝(데드라인)이 눈앞에 있다.');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_a_95_43
  we_a_95_43: (() => {
    const title = '燃え切った勝負心';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} callname_25 マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕
     * @param {boolean} invincible アグネスタキオンは無敗か
     * @param {boolean} beat_c アグネスタキオンはマンハッタンカフェに勝ったことがあるか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      invincible,
      beat_c,
    ) => {
      await tachyon.say_and_wait('ふう……ふう……');
      era.println();
      await era.printAndWait([
        '神戸新聞杯のあと今日まで、',
        tachyon.get_colored_name(),
        ' のトレーニングは良好な状態を保っていた',
      ]);
      era.println();
      await tachyon.say_and_wait('……今日も、同じですわね');
      era.println();
      await era.printAndWait('だが……維持は、進歩がないということでもある');
      await era.printAndWait([
        '有馬が近づくにつれ、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の気持ちも、焦りを帯びてきた',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'タキオン先輩！ 今日も来ました！',
      );
      era.println();
      await era.printAndWait([
        'そのとき二人を癒したのは、神戸新聞杯のときの後輩',
        tachyon.uma_sex_title,
        'だった',
      ]);
      await era.printAndWait([
        'その後輩の',
        tachyon.uma_sex_title,
        'は、いまではよく ',
        tachyon.get_colored_name(),
        ' についてトレーニングしている',
      ]);
      await era.printAndWait([
        'トレーナーである ',
        you.get_colored_name(),
        ' も、ときどき',
        tachyon.sex,
        'に助言する',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が退屈そうに相手を見ていたとき、見慣れた顔が眼前に浮かんだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'どうしましたの？ そんなに熱心に見て、あの子に気がある、ですの？',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は慌てて首を振った']);
      era.println();
      if (relation >= 0) {
        await tachyon.say_and_wait(
          'くふふ……あの子には、確かにかなりの可能性がありますわ',
        );
        await tachyon.say_and_wait([
          '……以前の私なら、',
          tachyon.sex,
          'を Plan B の候補にしたかもしれませんわね',
        ]);
        await tachyon.say_and_wait(
          'ですが Plan B はすべて、Plan A が成り立たないときの備え',
        );
        await tachyon.say_and_wait(['本末転倒は困りますわよ、', callname]);
      } else {
        await tachyon.say_and_wait(
          '私が気にかけている後輩を、そんな目で見ないでくださいませ',
        );
        await tachyon.say_and_wait(
          '……あなたの類は、他人を巻き込む資格がありませんわ',
        );
        await tachyon.say_and_wait(
          '私の傍にいること自体が、あなたへの最大の慈悲ですわ',
        );
      }
      if (love >= 75) {
        era.println();
        await tachyon.say_and_wait(
          '忘れるようなら、もう一度、あなたの目を灼いて差し上げますわ……',
        );
        await tachyon.say_and_wait([
          '今度は、目が眩むほどに……他の',
          tachyon.uma_sex_title,
          'の姿など、見えなくなるまで',
        ]);
      }
      era.println();
      await era.printAndWait([
        'これは、ある意味で ',
        tachyon.get_colored_name(),
        ' の独占欲だろうか',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は苦笑するしかなかった',
      ]);
      era.println();
      await era.printAndWait([
        'だが今日の来客は、後輩の',
        tachyon.uma_sex_title,
        'だけではなかった',
      ]);
      era.println();
      await tachyon.say_and_wait('……おや');
      await coffee.say_and_wait([c_call_t, '……']);
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '。',
        tachyon.get_colored_name(),
        ' の Plan B の本命',
      ]);
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          you.get_colored_name(),
          ' の担当',
          tachyon.uma_sex_title,
          'でもある',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' と誓い、友人に追いつくと決めた大切な担当',
        ]);
      }
      era.println();
      await era.printAndWait([
        'わけもなく、突然 ',
        tachyon.get_colored_name(),
        ' のもとへ来た',
      ]);
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '？ 私の実験を受けに、ですの？ いつでも大歓……',
      ]);
      await coffee.say_and_wait(
        '違う……ただ、模擬レースを……お願いできないかと思って',
      );
      await tachyon.say_and_wait('……模擬レース？');
      await coffee.say_and_wait('ええ……どうしても、お願いしたい');
      era.println();
      await era.printAndWait('……模擬レースの申請は簡単だ');
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'まして ',
          you.get_colored_name(),
          ' は',
          tachyon.couple_title,
          '二人のトレーナーだ',
        ]);
      }
      await era.printAndWait('特別な手配すら要らず、場を借りれば足りる');
      era.println();
      await era.printAndWait('申請の手続きは、ほどなく下りた');
      await era.printAndWait([
        '二人だけのコースで、',
        you.get_colored_name(),
        ' がスタートの宣告役として柵の外に立つ',
      ]);
      await era.printAndWait('胸の内は、不安とざわめきだった');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '。',
        tachyon.sex,
        'の目標は、',
        tachyon.uma_sex_title,
        'の限界を超えること',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '。',
        coffee.sex,
        'の目標は、友人の歩みに追いつくこと',
      ]);
      era.println();
      await era.printAndWait('運命の配役か、悪趣味な偶然か。');
      await era.printAndWait(['二人とも、最終目標を有馬記念に置いている']);
      await era.printAndWait(
        '今日の模擬レース……理由は不明でも、あの日の予行と見ていいだろう',
      );
      await era.printAndWait([
        '複雑な気持ちを抱えたまま、',
        you.get_colored_name(),
        ' は旗を振り下ろした',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('第3コーナー、それから……最後の直線');
      await tachyon.print_and_wait([call_25, ' は左？ いいえ、右']);
      await tachyon.print_and_wait([
        call_25,
        ' の走りは相変わらず……捉えきれない',
      ]);
      await tachyon.print_and_wait('ですが、法則なら、掴めるはずですわ');
      era.println();
      await tachyon.say_and_wait('今ですわ……っ！？');
      era.println();
      await tachyon.print_and_wait('認めねばなりませんわ');
      await tachyon.print_and_wait('レース前の自分は、確かに油断していた');
      await tachyon.print_and_wait('Plan B の代替として');
      if (beat_c) {
        await tachyon.print_and_wait('そのうえ、かつての敗北者として');
      }
      await tachyon.print_and_wait('口ではいくら綺麗に言っても');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' は独立した個体だ、などと',
      ]);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' には自分に劣らぬ才能がある、などと',
      ]);
      await tachyon.print_and_wait(
        '胸の裡では、傲慢と呼ぶのもおこがましい軽視が生まれていた',
      );
      await tachyon.print_and_wait([
        '偽者の',
        coffee.sex,
        'が、絶好調の本物に勝てるはずがない、と',
      ]);
      era.println();
      await tachyon.say_and_wait('走りも、速度も……見知らぬものですわ');
      era.println();
      await tachyon.print_and_wait('当然ですわ');
      await tachyon.print_and_wait([
        '前回、',
        tachyon.get_colored_name(),
        ' が ',
        coffee.get_colored_name(),
        ' の走りと速度を仔細に見たのは、一年前の七月のことですから',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '自分が進んでいるあいだ、相手はその場で待っていると思った理論家は、侮りの代償を払うことになる',
      );
      await tachyon.print_and_wait('……相手、ですの？');
      era.println();
      await tachyon.print_and_wait('偽者ではない');
      await tachyon.print_and_wait('代替品でもない');
      await tachyon.print_and_wait(
        '漆黒の猟犬が、傲慢な研究者の首筋に牙を立てた',
      );
      await tachyon.print_and_wait('痛みと、敗北で、自らの存在を証明する');
      await tachyon.print_and_wait([
        tachyon.sex,
        'と同じ舞台に立てる「相手」だと、証明する',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……くふふ。相手に勝ちたい、相手を超えたい、誰かを越えたい……なるほど、こういう感触ですのね？',
      );
      era.println();
      await tachyon.print_and_wait('いいでしょう。認めますわ');
      await tachyon.print_and_wait([
        '今回は ',
        tachyon.get_colored_name(),
        ' の負けですわ',
      ]);
      await tachyon.print_and_wait(
        '覚悟が足りない。研究が足りない。真剣さが足りない',
      );
      await tachyon.print_and_wait(
        'この状態で勝ってしまっては、相手の努力を軽んじることになりますわ',
      );
      await tachyon.print_and_wait([
        'むしろ、',
        call_25,
        ' に感謝すべきですわ',
      ]);
      await tachyon.print_and_wait([
        'このまま放置して、有馬記念で欠けた「最後の要素」に気づいたのでは、やり直しは利きませんわ',
      ]);
      await tachyon.print_and_wait('ですから……');
      era.println();
      await tachyon.say_and_wait('ああ……今回の私は———');
      era.printButton('「タキオン、負けるな！」', 1);
      era.printButton('「カフェ、頑張れ！」', 2, {
        disabled: era.get('cflag:25:招募状态') !== recruit_flags.yes,
      });
      const ret = await era.input();
      era.println();
      if (ret === 1) {
        await tachyon.print_and_wait('言葉は喉まで来て、出ない');
        await tachyon.print_and_wait([
          '純粋な ',
          tachyon.get_colored_name(),
          ' なら、目の前の敗北を認めるのは難しくないはずですわ',
        ]);
        await tachyon.print_and_wait(
          'レースは実験と同じ。必ず成功する道理などない',
        );
        await tachyon.print_and_wait(
          '失敗しても構わない。教訓を吸って、やり直せばいい。それだけのこと',
        );
        await tachyon.print_and_wait('まして、これは模擬レースにすぎませんわ');
        era.println();
        await tachyon.print_and_wait('諦める理由はいくらでも挙げられる');
        await tachyon.print_and_wait('続ける理由は、たった一つ');
        await tachyon.print_and_wait('ですがその一つが、他のすべてに勝る');
        era.println();
        await tachyon.say_and_wait('勝ちたい……勝ちたいのですわ！');
        era.println();
        await tachyon.print_and_wait('自分でも驚く執着');
        await tachyon.print_and_wait([
          '純粋な ',
          tachyon.get_colored_name(),
          ' なら、いまならきっぱり諦められる',
        ]);
        await tachyon.print_and_wait(
          'ですが、外界に左右されない、純粋で冷酷な研究者は、もういませんわ',
        );
        era.println();
        await tachyon.print_and_wait(
          '他者の声援を受け入れ、他者に感染されたとき',
        );
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' は、すでに純粋ではなくなった',
        ]);
        await tachyon.print_and_wait([
          'いまの ',
          tachyon.get_colored_name(),
          ' は、研究のため、限界を超えるため',
        ]);
        await tachyon.print_and_wait('そして……');
        await tachyon.print_and_wait('どのレースでも、自分の傍にいる人のため');
        await tachyon.print_and_wait([
          'いつでも ',
          tachyon.get_colored_name(),
          ' の要求を優先してくれる人のため',
        ]);
        era.println();
        if (love >= 50) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' は、唯一の恋人のために走っている',
          ]);
        } else if (relation > 225) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' は、志を同じくする同志のために走っている',
          ]);
        } else {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' は、唯一の実験動物のために走っている',
          ]);
        }
        era.println();
        await tachyon.print_and_wait(
          '反応は相互作用する。化学の基本定理ですわ',
        );
        await tachyon.print_and_wait([
          you.get_colored_actual_name(),
          ' という名のモルモットが ',
          tachyon.get_colored_name(),
          ' の走りに両目を灼かれるのと同時に',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' も',
          you.sex,
          'の声援を受けながら、',
          you.sex,
          'に変えられていく',
        ]);
        era.println();
        await tachyon.say_and_wait([
          you.sex,
          'の前で負けたくない……',
          you.sex,
          'の信頼を裏切りたくない……それに……',
        ]);
        era.println();
        await tachyon.say_and_wait([
          coffee.get_colored_name(),
          ' には、負けたくありませんわ！',
        ]);
      } else {
        await tachyon.say_and_wait('————私の、負けですわ');
        era.println();
        await tachyon.print_and_wait('ですが、永遠ではない');
        await tachyon.print_and_wait('いまだけ、この瞬間だけ認める');
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' は ',
          coffee.get_colored_name(),
          ' に及ばない',
        ]);
        await tachyon.print_and_wait('次は、有馬記念');
        await tachyon.print_and_wait('こちらが挑戦者として向き直り');
        await tachyon.print_and_wait([
          coffee.get_colored_name(),
          ' の喉を引き裂き、噛み砕く',
        ]);
        era.println();
        await tachyon.print_and_wait('ああ……止まない灼熱');
        await tachyon.print_and_wait('どうしても、収まらない');
      }
      era.println();
      await tachyon.print_and_wait('研究者としての傲り？');
      await tachyon.print_and_wait('予備計画への軽視？');
      await tachyon.print_and_wait('いいえ、違いますわ');
      await tachyon.print_and_wait('ただ勝ちたい。徹底して超えたい');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' に負けたくない',
      ]);
      await tachyon.print_and_wait([coffee.get_colored_name(), ' に勝ちたい']);
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait('必ず……勝ちますわ！');
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が模擬レースに勝った',
        ]);
        await era.printAndWait('だが……ほんのわずかな差だ');
        era.println();
        await tachyon.say_and_wait([
          'はあ……はあ……ふ……くふふふ！ どうですの？',
          call_25,
          '、最後は私の勝ちですわ！',
        ]);
        await coffee.say_and_wait(
          '……今が本当の実力だと思わないで……これは模擬レースにすぎない',
        );
        await tachyon.say_and_wait(
          'くふふふ！ 愉快、愉快。負け犬の悔しげな吠え声も悪くありませんわ……ぐっ！',
        );
        await coffee.say_and_wait('…………覚えておきなさい');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は作り笑いの途中で、',
          coffee.get_colored_name(),
          ' の視線に黙った。見えない手で口鼻を塞がれたように',
        ]);
        if (
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 75
        ) {
          await coffee.say_and_wait([
            callname_25,
            '……有馬のとき……声をかけてくれると、うれしい',
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は振り向かず訓練場を去り、',
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          '、そして出番はなかったが確かに場に残っていた後輩',
          tachyon.uma_sex_title,
          'だけが残った',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'タキオン先輩！ 本当にすごかったです！',
        );
        await tachyon.say_and_wait([
          '……ふんふん、まだ序の口ですわ。有馬記念を見てくださいまし。そのときは、極致の走りをお見せしますわ！',
        ]);
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'タキオン先輩～～～～！',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が後輩に二言三言応えると、後輩も場を離れた',
        ]);
        await era.printAndWait('そこまでして……');
        era.printButton(`「……もういい。${tachyon.couple_title}は行った」`, 1);
        await era.input();
        await tachyon.say_and_wait('はあ～～');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は、詰めていた息が抜けたように ',
          you.get_colored_name(),
          ' に寄りかかり、地面に崩れ落ちた',
        ]);
        await era.printAndWait([
          '普段なら ',
          you.get_colored_name(),
          ' は心配顔で、',
          tachyon.sex,
          'の具合を尋ねる',
        ]);
        await era.printAndWait('だが今は……');
        era.printButton('「お疲れ」', 1);
        era.printButton('「きつかっただろ」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' にしかわからない。さっきのレースで ',
          tachyon.get_colored_name(),
          ' は本当に全力を出した',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の走りと可能性に追い詰められ、全力を出し、かろうじて、本当にかろうじて、',
        ]);
        await era.printAndWait('誤差と呼べるほどの差で勝った');
        era.println();
        await tachyon.say_and_wait([
          'ええ……',
          call_25,
          '……想像を、超えて伸びていましたわ……',
        ]);
        await tachyon.say_and_wait([
          '私はまだ……元の態度のまま',
          tachyon.sex,
          'に接していた……',
        ]);
      } else {
        await tachyon.print_and_wait('ああ……この感触が、つまり……');
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は模擬レースに負けた',
        ]);
        await era.printAndWait('だが、ごくわずかな差での敗北だ');
        era.println();
        await coffee.say_and_wait('……この程度なら、失望する');
        await coffee.say_and_wait([
          'こんな ',
          c_call_t,
          ' では、友人を超える目標の助けにならない……',
        ]);
        if (love >= 75) {
          await coffee.say_and_wait([
            'わからない……なぜ ',
            callname_25,
            ' は、あなたに時間を使うのか',
          ]);
          era.println();
          await era.printAndWait([
            coffee.get_colored_name(),
            ' が ',
            you.get_colored_name(),
            ' に寄り添う。親密な仕草と容赦ない批評の落差に、',
            you.get_colored_name(),
            ' は戸惑った',
          ]);
          await era.printAndWait([
            '走り終えたばかりの薄い草の香りと、かすかな汗の匂いが ',
            you.get_colored_name(),
            ' の嗅覚をくすぐる',
          ]);
          await era.printAndWait([
            '少し湿った髪と、息を整えた赤い頬が ',
            you.get_colored_name(),
            ' の視覚を刺激する',
          ]);
          await era.printAndWait([
            '思わず、',
            you.get_colored_name(),
            ' は手を抑えきれなくなる',
          ]);
          era.println();
          await coffee.say_and_wait([
            callname_25,
            '……ここで？ ',
            c_call_t,
            ' の前で……？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は、芝に伏してまだ息を乱す ',
            tachyon.get_colored_name(),
            ' を見て、我に返った',
          ]);
          await coffee.say_and_wait([
            callname_25,
            '、さっきの……よければ、あとで……',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            ' は曖昧な言葉を残して去った',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' を強く睨んだ',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は視線を逸らし、',
            tachyon.sex,
            'を直視できない',
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' が去ったあとでも、',
          tachyon.get_colored_name(),
          ' は芝から起き上がらない',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、芝に伏す ',
          tachyon.get_colored_name(),
          ' を心配そうに見た',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '……',
          call_25,
          ' は本当に……想像を、超えて伸びていましたわ……',
        ]);
        await tachyon.say_and_wait([
          '私はまだ……元の態度のまま',
          tachyon.sex,
          'に接していた……',
        ]);
      }
      await tachyon.say_and_wait('……まったく……恥ずかしいですわ……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'が息を切らして口にした言葉は、今日まで ',
        tachyon.get_colored_name(),
        ' が言うとは思えなかったものだ',
      ]);
      if (invincible) {
        await era.printAndWait([
          '敗北を知らなかった ',
          tachyon.get_colored_name(),
          ' が、その瞬間、敗北の可能性を本当に味わった',
        ]);
      } else {
        await era.printAndWait(
          '以前負けたレースでさえ、これほどの圧迫はなかった',
        );
      }
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait([
          'もし……もしさっき、本当に ',
          call_25,
          ' に負けていたら',
        ]);
        await tachyon.say_and_wait(
          'その可能性を思うだけで、全身が震えますわ……私は拒んでいる。その可能性を拒んでいる',
        );
      } else {
        await tachyon.say_and_wait([
          'もし……もしさっき、',
          call_25,
          ' に勝っていたら',
        ]);
        await tachyon.say_and_wait(
          'その可能性を思うだけで、全身が震えますわ……私は渇望している。その可能性を渇望している',
        );
      }
      await tachyon.say_and_wait([
        call_25,
        ' には負けたくない……',
        call_25,
        ' に負けたのが悔しい',
      ]);
      await tachyon.say_and_wait([
        'なのに……胸はまだ燃えている。また ',
        call_25,
        ' と勝負したい。正面から、徹底して',
        tachyon.sex,
        'を打ち負かしたい',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は顔を上げ、',
        you.get_colored_name(),
        ' の目を見た',
      ]);
      await era.printAndWait([
        '以前の、狂おしく惹きつける光子のような眼差しより、いまの',
        tachyon.sex,
        'の両目は感情の揺らぎで満ちている',
      ]);
      await era.printAndWait([
        '燃える炬火のようだ。だがその旺盛な火は、揺らぎのない光子より眩しく、',
        you.get_colored_name(),
        ' の視線をより強く捉える',
      ]);
      era.println();
      await tachyon.say_and_wait('これが……ライバルの感触、ですの？');
      await tachyon.say_and_wait([
        '負けたことが悔しいのではない……『',
        coffee.get_colored_name(),
        '』に負けたことが悔しい',
      ]);
      await tachyon.say_and_wait('そうとしか説明できませんわ。この熱さは……');
      await tachyon.say_and_wait([
        '……今すぐ戻りましょう！',
        callname,
        '！ これですわ！ これです！ 欠けていた最後のものですわ！',
      ]);
      era.println();
      await era.printAndWait(['年の瀬が近い。次は、有馬記念だ']);
      return [];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_triple_crowns
  we_triple_crowns: (() => {
    const title = '삼관의 꿈';
    /**
     * Plan A 専用（Plan B は菊花賞出走不可のため三冠不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} pocket ジャングルポケット
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      pocket,
      you,
      callname,
      call_25,
      relation,
      love,
      sats_sho,
      toky_yus,
    ) => {
      await tachyon.say_and_wait('...여기는?');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 문득 정신이 아득해졌다.',
      ]);
      await tachyon.print_and_wait(
        '눈앞에 나타난 것은 푸른 잔디가 깔린, 텅 빈 경기장이었다.',
      );
      era.println();
      await tachyon.say_and_wait('...꿈인가?');
      era.println();
      await tachyon.print_and_wait([
        '기억하기로는 지금쯤 국화상이 끝나고, 방금 ',
        callname,
        '과 헤어진 뒤 피곤에 지쳐 침대에 쓰러졌을 터였다.',
      ]);
      await tachyon.print_and_wait(
        '국화상은 확실히 지금까지의 자신이 겪어온 것 중 가장 힘든 전투였다.',
      );
      await tachyon.print_and_wait('하지만 결국 이겨냈다.');
      await tachyon.print_and_wait(
        '그런데 눈앞에 펼쳐진 것은 그 강렬한 인상을 남겼던 경기장이 아니라...',
      );
      era.println();
      await tachyon.print_and_wait('나카야마 경기장?');
      await tachyon.print_and_wait('만약 나카야마라면, 그렇다는 건...');
      era.println();
      await tachyon.print_and_wait(
        '예상대로 뒤를 돌아 전광판을 보니, 화면에는 사츠키상의 로고가 재생되고 있었다.',
      );
      await tachyon.print_and_wait([
        '그러나 게시판의 성적은 이미 레이스가 끝났음을 알리고 있었다. 1위는 ',
        tachyon.get_colored_name(),
        '. 당연한 결과였다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['...사츠키상 때로 돌아온 건가?']);
      era.println();
      await tachyon.print_and_wait(
        '아무도 없는 경기장, 주자도 없는데 이미 종료된 사츠키상.',
      );
      await tachyon.print_and_wait(
        '아무리 논리가 통하지 않는 꿈이라지만, 이 모든 것은 지나치게 상식에서 벗어나 있었다.',
      );
      era.println();
      await tachyon.print_and_wait('그러자...');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 어느새 눈앞에 나타난 빛의 구체를 응시했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '자네... 누구지? 나를 이 꿈속으로 끌어들인 게 자네인가?',
      );
      era.println();
      await tachyon.print_and_wait([
        '꿈속으로 끌어들였다는 말은 그리 과학적인 표현은 아닐지도 모르지만, 만약... ',
        call_25,
        '의 말대로 생각한다면...',
      ]);
      await you.say_as_passer_by_and_wait('???', '............');
      era.println();
      await tachyon.print_and_wait('빛의 구체는 아무런 대답 없이 그저 제자리에 떠 있었다.');
      era.println();
      await tachyon.say_and_wait('...말하기 싫은 건가?');
      await tachyon.say_and_wait('그럼 내 나름대로 추측을 말해보도록 하지...');
      await tachyon.say_and_wait([
        '자네... 바로 「',
        tachyon.get_colored_name(),
        '」이로군.',
      ]);
      era.println();
      await tachyon.print_and_wait('그것을 알아채는 것은 그리 어렵지 않았다.');
      await tachyon.print_and_wait([
        call_25,
        '그저 ',
      ]);
      await tachyon.print_and_wait([
        '전설에 따르면... ',
        tachyon.uma_sex_title,
        '는 이세계의 영혼을 몸에 깃들게 한 존재라고 한다.',
      ]);
      await tachyon.print_and_wait([
        '...뭐, 그런 설화보다는 ',
        tachyon.get_colored_name(),
        ' 자신은 생물의 자연스러운 진화 결과라고 믿고 싶지만 말이다.',
      ]);
      await tachyon.print_and_wait('하지만 만약 그 전설이 사실이라면...');
      era.println();
      await tachyon.print_and_wait('「또 다른 자신」이란, 분명 이것을 말하는 것이리라.');
      await tachyon.print_and_wait(
        '이세계에서 온 영혼, 혹은 「우마 소울(Uma Soul)」이라 불리는 존재.',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('………⬛⬛………⬛⬛⬛………');
      await tachyon.say_and_wait('뭐라고?');
      era.println();
      await tachyon.print_and_wait(
        '갑자기 빛의 구체에 파문이 일더니, 마치 온 힘을 다해 짜낸 듯한 몇 마디 소리가 들려왔다.',
      );
      await tachyon.print_and_wait([
        '저도 모르게 ',
        tachyon.get_colored_name(),
        '은 그 소리를 듣기 위해 점점 가까이 다가갔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('………!');
      era.println();
      await tachyon.print_and_wait('닿았다.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '의 머릿속에 존재하지 않는 기억이 순식간에 흘러들어왔다.',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '그것은 저쪽 세계에서 「',
        tachyon.get_colored_name(),
        '」이라 불린 생물의 기억이었다.',
      ]);
      await tachyon.print_and_wait([
        '처음 예상했던 대로, 「',
        tachyon.get_colored_name(),
        '」의 두 다리는 사츠키상 이후 한계에 도달해 강제로 은퇴해야만 했다.',
      ]);
      await tachyon.print_and_wait([
        '그 세계에서 ',
        tachyon.get_colored_name(),
        '은 가능성의 상징으로 여겨지며 「만약의 ⬛」, 「환상의 삼관⬛」이라 불렸다.',
      ]);
      await tachyon.print_and_wait(
        '만약 그에게 기회가 주어졌다면, 분명 삼관을 따냈을 것이라는 사실을 의심하는 이는 아무도 없었다.',
      );
      await tachyon.print_and_wait(
        '만약 다리 부상이 없었다면, 분명 역사에 이름을 남길 명⬛가 되었을 것이다.',
      );
      await tachyon.print_and_wait(
        '만약 은퇴하지 않았다면, 동세대의 다른 ⬛들은 그에 비해 빛이 바랬을 것이다.',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 삼관에 가장 근접했던 존재였다.',
      ]);
      await tachyon.print_and_wait('하지만 만약은 결국 만약일 뿐이다.');
      await tachyon.print_and_wait('실현되지 못한 만약이란 결국 한 장의 종잇조각에 불과하다.');
      await tachyon.print_and_wait('동기들이 각자의 분야에서 빛을 발함에 따라.');
      await tachyon.print_and_wait('그러한 확신조차 의문으로 변해갔다.');
      await tachyon.print_and_wait([
        '도쿄 2400미터에서, 정말 저 ',
        pocket.get_colored_name(),
        '을 이길 수 있었을까?',
      ]);
      await tachyon.print_and_wait([
        '교토 3000미터에서, 정말 저 ',
        coffee.get_colored_name(),
        '를 이길 수 있었을까?',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 과연 삼관인가...?',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '거기까지 생각이 미치자 ',
        tachyon.get_colored_name(),
        '은 정신을 차렸다.',
      ]);
      await tachyon.print_and_wait([
        '어느덧 ',
        tachyon.sex,
        '는 자신이 구체의 말을 알아들을 수 있게 되었음을 깨달았다.',
      ]);
      await tachyon.say_as_unknown_and_wait('……고마워…… 정말 고마워……');
      await tachyon.say_and_wait('............');
      era.println();
      await tachyon.print_and_wait('만약이라는 가정을 현실로 증명해 내는 것.');
      await tachyon.print_and_wait('허무한 가능성을 실재하는 현실로 바꾸는 것.');
      era.println();
      await tachyon.print_and_wait([
        '비록 이계의 「',
        tachyon.get_colored_name(),
        '」은 성공하지 못했지만.',
      ]);
      await tachyon.print_and_wait([
        '하지만 이곳의 ',
        tachyon.get_colored_name(),
        '은 해냈다.',
      ]);
      await tachyon.print_and_wait('자신의 가능성을 증명해 보인 것이다.');
      era.println();
      await tachyon.print_and_wait([tachyon.get_colored_name(), '은 삼관⬛이다.']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 삼관⬛인가?',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 삼관 ',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait('이다.');
      era.println();
      await tachyon.print_and_wait('과거의 자신을 뛰어넘었다.');
      await tachyon.print_and_wait('또 다른 세계의 자신마저 뛰어넘었다.');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 새로운 한 걸음을 내디뎠다.',
      ]);
      era.println();
      await tachyon.say_and_wait('그럼, 이제 가봐야겠군.');
      await tachyon.say_as_unknown_and_wait('............?');
      era.println();
      await tachyon.print_and_wait([
        '말은 없었지만 어쩐지 ',
        tachyon.get_colored_name(),
        '에게는 구체의 의아함이 전해져 왔다.',
      ]);
      await tachyon.print_and_wait('어디로 가는 거야?');
      await tachyon.print_and_wait('꿈은 이미 이루어진 것 아니야?');
      await tachyon.print_and_wait('목표는 이미 달성한 것 아니야?');
      await tachyon.print_and_wait('이제 와서 또 뭘 더 하려는 거야?');
      era.println();
      await tachyon.say_and_wait([
        '흥, 「',
        tachyon.get_colored_name(),
        '」의 가능성이 고작 클래식 시즌의 종료까지만이라고 생각하나?',
      ]);
      await tachyon.say_and_wait(
        '...아니, 이렇게 말하니 왠지 내 욕을 하는 것 같군... 흠흠, 다시 하지.',
      );
      await tachyon.say_and_wait([
        '「',
        tachyon.get_colored_name(),
        '」의 가능성은 어쩌면 클래식 시즌이 끝날 때까지만일지도 모르지...',
      ]);
      await tachyon.say_and_wait([
        '아니, 기껏해야 사츠키상까지였을지도 몰라. ',
        tachyon.get_colored_name(),
        '의 가능성이란 건 말이야...',
      ]);
      await tachyon.say_and_wait('어쩌면 정말 그랬을지도 모르지.');
      era.println();
      await tachyon.print_and_wait('하지만.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 자신을 위해 모든 것을 불태워 주었던, 눈동자 속에 광기가 서려 있던 그 사람을 떠올렸다.',
      ]);
      era.println();
      if (relation <= 0) {
        await tachyon.say_and_wait([
          '비록... 인격적으로는 아주 형편없어서, ',
          you.sex,
          '를 소멸시키는 게 인류에 더 공헌하는 길일 것 같은 인간이지만 말이야.',
        ]);
      } else if (love >= 75) {
        await tachyon.say_and_wait('내가 가장 사랑하고, 나를 가장 사랑해 주는 나의 연인.');
      } else if (relation <= 225) {
        await tachyon.say_and_wait('나와 함께 걷는, 뜻을 같이하는 동료.');
      } else {
        await tachyon.say_and_wait(
          '나의 모든 것을 이해하고, 목숨을 맡기는 것조차 추호의 망설임도 없을 그 사람.',
        );
      }
      era.println();
      await tachyon.print_and_wait('만약... 그 사람이 없었더라면.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 ',
        sats_sho,
        ' 이후에 완전히 연소되어 버렸을지도 모른다.',
      ]);
      era.println();
      await tachyon.print_and_wait('만약... 그 사람이 없었더라면.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 ',
        toky_yus,
        ' 이후에 자신의 한계를 깨닫고 스스로 물러났을지도 모른다.',
      ]);
      era.println();
      await tachyon.print_and_wait('만약... 그 사람이 없었더라면.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 결코 미래를 꿈꾸지도 못했을 것이다.',
      ]);
      era.println();
      await tachyon.print_and_wait('하지만 만약이라는 가정은 의미가 없다.');
      await tachyon.print_and_wait('게다가 그 만약은 영원히 실현되지 않을 테니까.');
      await tachyon.print_and_wait('그러니...');
      era.println();
      await tachyon.say_and_wait([
        '똑똑히 지켜보게나, 「',
        tachyon.get_colored_name(),
        '」이여. 「우리」는 이미 과거를 넘어 현재에 서 있네. 이제는 미래를 개척할 시간이야!',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은 경기장 출구를 향해 걸어갔다.',
      ]);
      await tachyon.print_and_wait([
        '문을 나서기 전, ',
        tachyon.sex,
        '는 뒤를 한 번 돌아보았다.',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '경기장 안의 스크린에서 사츠키상의 로고는 이미 사라져 있었다.',
      );
      await tachyon.print_and_wait('스크린 속 화면은 텅 비어 있었다.');
      await tachyon.print_and_wait('지난 레이스는 이미 끝났다.');
      await tachyon.print_and_wait('다음번에 이 경기장에 열릴 레이스는 대체 어떤 레이스가 될까?');
      era.println();
      await tachyon.print_and_wait(
        '알 수 없다. 하지만 이미 약속했다, 함께 나아가기로.',
      );
      await tachyon.print_and_wait('그러니.');
      era.println();
      await tachyon.say_and_wait(
        '실험을 계속하도록 하지... 가능성이 도달할 수 있는 그 피안을 보기 위해서 말일세.',
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_a_47_29
  ws_a_47_29: (() => {
    const title = '언론 대응';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait('夏合宿');
      await era.printAndWait([
        tachyon.uma_sex_title,
        '들에게는 휴식과 실력 향상을 겸하는 기간이다.',
      ]);
      await era.printAndWait([
        '기자들에게는 평소 레이스 밖에서는 좀처럼 모습을 드러내지 않는 ',
        tachyon.uma_sex_title,
        '들을 드디어 취재할 수 있는 시기다.',
      ]);
      await era.printAndWait(
        '그래서 파파라치들은 이른 아침부터 합숙소 밖으로 모여들었다.',
      );
      await you.say_as_passer_by_and_wait('기자 A', '봤어?');
      await you.say_as_passer_by_and_wait(
        '기자 B',
        '서두르지 마, 아직 완전히 내리지 않았어.',
      );
      await you.say_as_passer_by_and_wait(
        '記者C',
        '나왔다, 나왔어! 저거야, 트레이너가 빛나는 녀석!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '이(가) 차에서 내리자마자 기자들에게 둘러싸였다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 일이 잘못됐음을 깨닫고 급히 몸의 빛을 줄였지만 이미 늦었다.',
      ]);
      await you.say_as_passer_by_and_wait('기자 A', [
        '여쭤보겠습니다. ',
        tachyon.get_colored_name(),
        '이(가) 월계배 출전을 포기한 이유는 무엇입니까?',
      ]);
      await you.say_as_passer_by_and_wait(
        '기자 B',
        '특별한 사정이라도 있나요?',
      );
      await you.say_as_passer_by_and_wait(
        '記者C',
        '학생회장을 신뢰하지 못한다는 뜻입니까?',
      );
      await era.printAndWait(
        '으윽, 곤란한 질문뿐이다. 게다가 마지막 기자는 발상부터 위험하다. 대립을 부추길 셈인가?',
      );
      await era.printAndWait([
        '이렇게 많은 기자들 앞에서 ',
        you.get_colored_name(),
        '은(는)——',
      ]);
      era.printButton('차근차근 설명한다 (의욕 1단계 하락)', 1);
      era.printButton('쫓아낸다 (명성 하락)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 인내심을 갖고 진영의 목표가 연말 국화상이라고 설명했다.',
        ]);
        await era.printAndWait(
          '그전까지 다른 일정을 미룰 필요가 있으며 현 학생회장에게 불만은 전혀 없다는 점도.',
        );
        await era.printAndWait(
          '기자들에게 붙잡혀 시간이 지체되자 타키온도 점점 안절부절못하기 시작했다.',
        );
        await era.printAndWait([
          '이를 본 ',
          you.get_colored_name(),
          '은(는) 적당한 핑계로 취재를 끝내고 ',
          tachyon.get_colored_name(),
          '을(를) 데리고 합숙 숙소로 들어갔다.',
        ]);
      } else {
        await era.printAndWait('아아, 시끄러워.');
        await era.printAndWait([
          you.get_colored_name(),
          '와(과) ',
          tachyon.get_colored_name(),
          '은(는) 서로 눈을 마주쳤다.',
        ]);
        await era.printAndWait([
          '오래 함께해 온 두 사람답게 ',
          tachyon.sex,
          '은(는) 곧바로 ',
          you.get_colored_name(),
          '의 의도를 알아채고 가방에서 선글라스를 꺼냈다.',
        ]);
        await era.printAndWait('그리고……');
        era.printButton('「전력으로 빛난다!」', 1);
        era.printButton('「太陽拳！」', 2);
        await era.input();
        await you.say_as_passer_by_and_wait('기자 A', '눈이!');
        await you.say_as_passer_by_and_wait('기자 B', '눈부셔!');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '의 출력 120%짜리 전력 발광 앞에서는 태양조차 희미해 보였다.',
        ]);
        await era.printAndWait([
          '기자들이 눈을 비비는 사이 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을(를) 데리고 합숙소 안으로 뛰어들었다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_a_47_31
  ws_a_47_31: (() => {
    const title = '여름 데이터 수집';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('하아…… 하아…… 하아……');
      era.println();
      await era.printAndWait([
        '合宿中、',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '은(는) 국화상을 목표로 거듭 특훈을 진행하고 있었다. 훈련과 휴식을 적절히 조합한 일정 덕분에 성과도 착실히 나타났다.',
      ]);
      era.println();
      await tachyon.say_and_wait('데이터는…… 어떤가요?');

      era.printButton(
        '「주법을 바꾸기 전의 속도까지 회복했어…… 이대로라면 국화상도 문제없겠어!」',
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 다리에 가해지는 부담을 최소화하도록 개선한 주법이 이제 결실을 맺고 있었다. 두 사람의 노력이면 국화상에서도 분명……',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) ',
        tachyon.get_colored_name(),
        '의 미래를 생각하고 있을 때, 숨을 고른 ',
        tachyon.get_colored_name(),
        '이(가) 입을 열었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '좋아요. 제 훈련은 끝났으니 다음은 당신 차례예요.',
      );
      era.println();
      await era.printAndWait('…………올 것이 왔구나.');
      await era.printAndWait([
        '훈련과 휴식을 병행한다는 것의 진상은 이랬다.',
        tachyon.get_colored_name(),
        '이(가) 훈련할 때 ',
        you.get_colored_name(),
        '은(는) 쉬고, ',
        tachyon.get_colored_name(),
        '이(가) 쉴 때는…… 당연히 ',
        you.get_colored_name(),
        '의 차례가 된다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 약 덕분에 지금 ',
        you.get_colored_name(),
        '의 순간적인 힘은 오픈급 ',
        tachyon.uma_sex_title,
        '에게도 뒤지지 않을 정도였다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 약물 실험 데이터를 측정하는 것 역시 ',
        tachyon.get_colored_name(),
        '이(가) 합숙 중 제대로 훈련하기 위한 조건 중 하나였다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '오늘은 자비를 베풀어 직접 고르게 해 드리죠, ',
        callname,
        '……파워 훈련과 스태미나 훈련, 어느 쪽이 좋나요?',
      ]);
      era.println();
      await era.printAndWait('으음…… 어느 쪽이든 별 차이가 없을 것 같은데.');
      era.printButton('파워 훈련(파워＆근성 +10)', 1);
      era.printButton('스태미나 훈련(스태미나＆파워 +10)', 2);
      era.printButton('스피드 훈련(스피드＆지능 +10)', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait('이러쿵저러쿵.');
          await era.printAndWait([
            '그리하여 ',
            you.get_colored_name(),
            '은(는) 사람 키의 세 배는 될 법한 거대한 타이어를 모래사장에서 끌고 있었다.',
          ]);
          await era.printAndWait(
            '대체 무슨 차에 쓰는 타이어지? 옆으로 눕혀도 사람 키의 세 배나 된다.',
          );
          await era.printAndWait([
            '그동안 ',
            tachyon.get_colored_name(),
            '은(는) 줄곧 타이어 위에 앉아 ',
            you.get_colored_name(),
            '에게 응원을……',
          ]);
          era.println();
          await tachyon.say_and_wait(['어서 걸으세요, ', callname]);
          await tachyon.say_and_wait(
            '너무 느려요. 스피드, 스피드를 내라고요!',
          );
          await tachyon.say_and_wait(
            '차라리 옷을 찢고 헐크라도 되는 게 어떨까요?',
          );
          era.println();
          await era.printAndWait('声援……？');
          era.println();
          await era.printAndWait([
            '응원이라기보다 압력 시험을 독촉하는 듯한 구호 속에서 ',
            you.get_colored_name(),
            '은(는) 오늘의 훈련을 마쳤다.',
          ]);
          break;
        case 2:
          era.println();
          await tachyon.say_and_wait('들어가세요.');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 눈이 휘둥그레져 ',
            tachyon.get_colored_name(),
            '을(를) 바라보았다. 훈련이 혹독해서가 아니었다. 오히려……',
          ]);
          era.printButton('「……그냥 수영만 하면 된다고?」', 1);
          await era.input();
          await tachyon.say_and_wait(
            '네. 평소처럼 정해진 거리를 끝까지 헤엄치면 된답니다~~',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            '의 얼굴에는 분명 무언가 꿍꿍이가 있었다. 하지만 뭔지 짐작이 가지 않았다……',
          ]);
          await era.printAndWait([
            '아니, ',
            tachyon.sex,
            '라면 벌일 만한 일이 너무 많아 어느 수를 쓴 것인지 도무지 알 수 없었다.',
          ]);
          await era.printAndWait([
            '여기서 기다린다고 달라질 건 없다. ',
            you.get_colored_name(),
            '은(는) 먼저 물속으로 들어갔다.',
          ]);
          era.println();
          await era.printAndWait('차가워!');
          await era.printAndWait(
            '바닷물의 온도가 평소와는 확연히 달랐다. 비유하자면……',
          );
          await era.printAndWait([
            '以前、',
            tachyon.get_colored_name(),
            '이(가) 내한성 약을 시험하려고 들어가게 했던 얼음 수영장 그 자체였다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 황급히 주위를 둘러봤지만 다른 학생들은 평소처럼 바다에서 놀고 있었다.',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '후후, 유난히 차갑죠? 물에 들어가기 전에 먹인 약의 효과예요. 감각을 예민하게 만드는 약——네, 대○인에 나오는 바로 그 약이랍니다!',
          );
          era.println();
          await era.printAndWait('대마○ 얘기는 꺼내지 마!?');
          await era.printAndWait(
            '이상하게도 체감 온도가 겨울의 얼음 목욕 수준이 된 것 외에는 특별한 감각이 없다. 대마○이라면 지금쯤……',
          );
          era.println();
          await tachyon.say_and_wait(
            '물론 아직 미완성 약이에요. 주로 추위에 대한 신경의 민감도만 높였거든요. 자, 정해진 거리를 제대로 헤엄치세요.',
          );
          era.println();
          await era.printAndWait('추워……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '이(가) 재촉하지 않아도 추위에 쫓긴 ',
            you.get_colored_name(),
            '은(는) 몸에 열을 내려고 필사적으로 움직였고 간신히 수영 목표를 달성했다.',
          ]);
          era.drawLine({ content: '余談' });
          await tachyon.say_and_wait([
            '……신경을 예민하게 만들었을 뿐인데 어째서 감기까지 걸린 건가요, ',
            callname,
          ]);
          era.println();
          await you.say_and_wait('……그건 내가 아니라 네가 대답해야 할 질문 아니야?');
          break;
        case 3:
          await era.printAndWait('어느 쪽이든 악의가 잔뜩 담겨 있잖아……');
          await era.printAndWait([
            '기지를 발휘한 ',
            you.get_colored_name(),
            '은(는) 선택했다.',
          ]);
          era.printButton(
            '「……기숙사 가스레인지를 안 끈 것 같아! 먼저 돌아갈게!」',
            1,
          );
          await era.input();
          await era.printAndWait('도망치는 게 상책이다!');
          era.println();
          await tachyon.say_and_wait([
            '호오, 저와 달리기 시합이라도 하시겠다는 건가요? 최근 체력이 좋아졌다고 조금 우쭐해진 모양이군요, ',
            callname,
            '。',
          ]);
          await tachyon.say_and_wait(
            '좋아요. 10초를 드리죠. 따라잡히면 오늘 먹을 약은 두 배예요.',
          );
          await tachyon.say_and_wait(
            '자, 저를 즐겁게 해 보세요. 아하하하하하!',
          );
          era.println();
          await era.printAndWait([
            '10초가 지나자마자 ',
            tachyon.get_colored_name(),
            '의 발소리가 귓가까지 다가왔다.',
          ]);
          await era.printAndWait(
            '빨리, 빨리! 이런 상황에서 트레이너 양성 학교는 뭐라고 가르쳤지?',
          );
          await you.say_and_wait(
            ['장애물을 이용해 ', tachyon.uma_sex_title, '의 움직임을 방해하라!'],
            true,
          );
          await era.printAndWait(
            '좋아, 서둘러…… 잠깐, 여긴 모래사장이잖아! 장애물이 어디 있어어어어!!!',
          );
          era.println();
          era.println();
          await tachyon.say_and_wait([
            '쯧쯧, 너무 느리군요, ',
            callname,
            '. 그럼 오늘은 약 두 병…… 좋아요, 다시 한번! 똑같이 10초예요. 이번에도 잡히면 네 병…… 계속하자고요~~',
          ]);
          await you.say_and_wait('아직도 하는 거야!?');
          await era.printAndWait([
            '結局、',
            you.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '에게 네 번 쫓기고 네 번 풀려났으며 결국 총 열여섯 병의 약을 먹어야 했다.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_a_47_41
  ws_a_47_41: (() => {
    const title = '두 번째 연례 심사';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('그럼…… 진지한 이야기를 하세.');
      era.println();
      await era.printAndWait(['때는 국화상 경기가 끝난 뒤.']);
      await era.printAndWait([
        '장소는 ',
        tachyon.get_colored_name(),
        '의 연구실이다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 엄숙하게 커튼을 내리고 조명을 켰다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 긴장한 채 침을 삼켰다.',
      ]);
      await era.printAndWait([
        '이 숨 막히는 분위기……',
        tachyon.get_colored_name(),
        '의 성격을 생각하면,',
      ]);
      await era.printAndWait(
        '실험에 실패했나? 위험한 실험동물이 도망쳤나? 위험한 약을 수원지에 뿌리기라도 했나? 아니면……',
      );
      era.printButton('「알겠어, 내가 잡아 올게.」', 1);
      era.printButton('「알겠어, 죄는 내가 뒤집어쓸게.」', 2);
      era.printButton('「알겠어, 자수하자, 타키온.」', 3);
      await era.input();
      await tachyon.say_and_wait(
        '……그게 아닐세. 무슨 엉뚱한 소린가. 삼관 도전도 끝났으니 앞으로의 목표를 논의할 때가 되었다는 말일세.',
      );
      await era.printAndWait('…………뭐!?');
      await era.printAndWait([
        '예상보다 훨씬 정상적인 이야기에 ',
        you.get_colored_name(),
        '은(는) 소리도 내지 못하고 경악했다.',
      ]);
      era.printButton('「目標……」', 1);
      era.printButton('「아, 연구 목표 말이지.」', 2);
      await era.input();
      await era.printAndWait([
        '틀림없어. 실험 이야기일 거야.',
        tachyon.get_colored_name(),
        '의 두 다리는 국화상 이후 이전보다 안정적이었다. 적어도 지금은 부상을 지나치게 걱정할 필요가 없다.',
      ]);
      await era.printAndWait(
        '그렇다면 다음 단계로 나아가는 것도 당연하다. 그래, 그렇지 않으면 마치……',
      );
      era.println();
      await tachyon.say_and_wait(
        '실험 목표…… 그것도 물론 중요하지. 하지만 지금 논의하는 건 경기 일정의 목표일세. 처음 약속은 삼관 도전까지였지 않나. 그게 끝났으니 다음 단계로 나아가야 하네.',
      );
      era.println();
      await era.printAndWait('에에에에!!!!????');
      await era.printAndWait([
        '이번에야말로 ',
        you.get_colored_name(),
        '은(는) 진심으로 경악해 뭉크의 『절규』 같은 자세를 취했다.',
      ]);
      await era.printAndWait([
        '그 모습을 보고 눈앞의 ',
        tachyon.get_colored_name(),
        '도 그만 웃음을 터뜨렸다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '후후…… 내가 먼저 레이스 이야기를 꺼내는 게 그렇게 놀라운 일인가?',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 태도를 보며, 레이스를 실험의 부속물로만 여기던 과거의 ',
        tachyon.get_colored_name(),
        '을(를) 떠올렸다.',
      ]);
      era.printButton('「……타키온…… 많이 달라졌구나.」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '애초에 변하지 않는 것은 없네. 연구에서 현재에 안주해 껍데기 속에 틀어박히는 것은 가장 경계해야 할 일이지……',
      );
      await tachyon.say_and_wait(
        '물론 변화에도 좋고 나쁜 것이 있지. 적어도 지금의 변화에는 만족하네. 그 점은 자네에게 감사해야겠군.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 보기 드물게 솔직한 말에 ',
        you.get_colored_name(),
        '은(는) 순간 움찔했다.',
      ]);
      await era.printAndWait([
        '오늘은 ',
        you.get_colored_name(),
        '에게도, ',
        tachyon.get_colored_name(),
        '에게도 처음 겪는 일이 너무나 많다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '그때의 열정만으로 여기까지 올 수 있으리라고는 정말 생각지 못했네……',
      );
      await tachyon.say_and_wait(
        '나조차 조금 두려울 정도야. 가능성이란 독처럼 이성을 잊게 만드는군……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 자신의 두 다리를 바라보며 살짝 몸을 떨었다.',
      ]);
      await era.printAndWait([tachyon.sex, '의 진심은 잘 모르겠다. 하지만……']);
      era.printButton('「타키온은 아직도 한계에 도전하고 싶은 거야?」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '계속하느냐고? 아니, ',
        callname,
        '난 줄곧 한계에 도전하는 길 위에 있었네. 멈춘 적은 한 번도 없어.',
      ]);
      await tachyon.say_and_wait(
        '국화상은 출발점에 불과하네. 진정으로 한계를 향하는 여정은 국화상 이후에 시작되는 법이지!',
      );
      await tachyon.say_and_wait([
        '중거리 최강을 가리는 오사카배, 현역 ',
        tachyon.uma_sex_title,
        '들이 상반기와 하반기에 정점을 겨루는 타카라즈카 기념과 아리마 기념……',
      ]);
      await tachyon.say_and_wait(
        '넘어야 할 목표와 도달해야 할 정상은 얼마든지 있지 않나?',
      );
      era.println();
      await era.printAndWait('그러니까');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 두 눈을 똑바로 바라보았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '삼관 이후의 세계도 다시 한번 나와 함께 걸어 보세, ',
        callname,
      ]);
      await tachyon.say_and_wait(
        '보답으로 더 넓은 세계를 보여 주겠네.',
      );
      era.printButton('「그래.」', 1);
      era.printButton('「말할 필요도 없지. 기꺼이.」', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '의 클래식 시즌은 막을 내렸다.',
      ]);
      await era.printAndWait('이제 시니어 시즌이 시작된다!');
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_a_95_1
  ws_a_95_1: (() => {
    const title = '二度目の年度審査報告';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_9 アグネスタキオンのダイワスカーレットへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {number} cook_times アグネスタキオンに料理を作った回数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_9,
      call_25,
      relation,
      love,
      cook_times,
    ) => {
      await era.printAndWait([
        '今年は、',
        tachyon.get_colored_name(),
        ' とのシニアだ',
      ]);
      await era.printAndWait(
        '今年の二人の目標……先には明言しなかったが、最強を狙うなら、あの二戦は欠かせない',
      );
      await era.printAndWait([
        '宝塚記念と有馬記念……それに、機会があれば大阪杯にも出たい',
      ]);
      era.println();
      await era.printAndWait([
        'この三戦を勝てば、いわゆる',
        tachyon.uma_sex_title,
        'の限界には届くだろう',
      ]);
      await era.printAndWait([
        'だが、',
        tachyon.get_colored_name(),
        ' の目標はそこではない。',
        tachyon.sex,
        'の目標は……限界を超えること',
      ]);
      await era.printAndWait(
        'だからレース以外にも、研究の手伝いを忘れてはならない……',
      );
      era.println();
      await tachyon.say_and_wait([callname, '、随分早いですわね？']);
      era.println();
      await era.printAndWait([
        '気づけば、今日一緒に参拝すると約束していた ',
        tachyon.get_colored_name(),
        ' も到着していた',
      ]);
      era.printButton(
        '「当たり前だ！ 今年のシニア戦線も、他のあれこれも……願うことが多すぎる！」',
        1,
      );
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          'そう……でしたら、私に叶えさせたい願いはありますの？❤',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は蠱惑的な目で、含みを持たせて ',
          you.get_colored_name(),
          ' に尋ねた',
        ]);
        era.print([
          'この一年、',
          tachyon.get_colored_name(),
          ' に対してしたいことは……',
        ]);
        era.printButton('「タキオンともっとセックスしたい」', 1);
        era.printButton('「タキオンの体をもっと敏感に」', 2);
        era.printButton('「タキオンに踏まれたい」', 3, {
          disabled: you.sex_code === 0,
        });
        era.printButton('「タキオンに真面目にトレーニングしてほしい」', 4);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait(
              '……色魔ですわね。したいなら、帰ってからにしましょう',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の耳元に寄り、小さく言った',
            ]);
            break;
          case 2:
            await tachyon.say_and_wait([
              'それは……薬なら簡単ですわ。でも、',
              callname,
              ' 自身の手で、私を好みの形にしてほしいですわね❤',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の肩に凭れ、心地よさそうに言った',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              'そんな願いを……やはり変態ですわね、',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              '口ではそう言いながらも、',
              tachyon.get_colored_name(),
              ' はそっと靴を脱ぎ、黒ストに包まれた足裏を見せた',
            ]);
            await era.printAndWait('参拝で一日歩いた、十分に熟れた黒スト');
            era.println();
            await tachyon.say_and_wait('こんな両足に……踏まれたい、ですの？');
            await tachyon.say_and_wait(
              '顔に押し付けられて、私の足裏の汚い空気で肺を満たされたい、ですの？',
            );
            await tachyon.say_and_wait(
              '肉棒を踏まれて、私の足の匂いとあなたの先走り汁で、十メートル先まで臭いが届くほどに塗れたい、ですの？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は熱に浮かされた目で ',
              tachyon.get_colored_name(),
              ' を見た。答えは言うまでもない',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……色魔ですわね。したいなら、帰ってからにしましょう',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の耳元に寄り、小さく言った',
            ]);
            break;
          case 4:
            await tachyon.say_and_wait('……色気のわからない方ですわね');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はつまらなそうに舌打ちした',
            ]);
        }
      } else if (love >= 50) {
        await tachyon.say_and_wait('他の願い……たとえば？');
        era.println();
        era.print([
          tachyon.get_colored_name(),
          ' は興味深げに ',
          you.get_colored_name(),
          ' を見た',
        ]);
        era.printButton('「タキオンとの関係が、もっと良くなりますように」', 1);
        era.printButton('「他の担当との関係が、もっと良くなりますように」', 2);
        era.printButton('「シルクソング、今年出ますように！」', 3);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait('ふふ、きっと、そうなりますわ❤');
            break;
          case 2:
            await tachyon.say_and_wait(
              '……他の担当を特に持ち出して、私を怒らせたいのですか？ 残念ですわ、そんな手には乗りません',
            );
            era.println();
            await era.printAndWait([
              'そう言いながらも、',
              tachyon.get_colored_name(),
              ' は不満げに頬を膨らませた',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              'え……それは何ですの……聖巣？ 空〇騎士？……',
              callname,
              ' は、そんなにゲームが好きでしたの？',
            ]);
        }
      } else if (relation <= 0) {
        await tachyon.say_and_wait(
          'ふん、怪力乱神を宝物のように。そんなことより、私の実験をどう助けるか考えなさい',
        );
      } else if (relation <= 225) {
        await tachyon.say_and_wait(
          'ふふ、そういう怪力乱神は信じませんが、好意だけは受け取っておきますわ',
        );
      } else {
        await tachyon.say_and_wait(
          'そう。でしたら、あなたの願いは必ず叶いますわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の口調に、',
          you.get_colored_name(),
          ' は少し意外だった',
        ]);
        await era.printAndWait([
          'こんな迷信に、',
          tachyon.sex,
          'は鼻で笑わずとも、真剣には付き合わないと思っていた',
        ]);
        await era.printAndWait([
          'なのに',
          tachyon.sex,
          'の口調は、心底からそう信じているように聞こえる',
        ]);
        era.printButton('「タキオン……？」', 1);
        era.printButton('「信じないんじゃなかったのか？」', 2);
        await era.input();
        await tachyon.say_and_wait(
          'もちろん、神より手元の研究を信じますわ……ですが、研究より信じているのは、あなたです',
        );
        era.println();
        await era.printAndWait([
          '正確には、',
          you.get_colored_name(),
          ' の尽力を、だ',
        ]);
        await era.printAndWait([tachyon.sex, 'は補足した']);
        era.println();
        await tachyon.say_and_wait(
          'あなたがこの一年注いだ努力は、必ず報われます。神が与えないなら、私が与えますわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は自信満々に言った。神の代わりですか、と。いかにも ',
          tachyon.get_colored_name(),
          ' らしい。だが……神社では、あまり言わない方がいいだろう',
        ]);
      }
      era.drawLine();
      await era.printAndWait(
        '正月の神社は賑わっているが、参拝そのものはすぐに終わった',
      );
      await era.printAndWait([
        '参拝のあと、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は今年度の計画を話し合った',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ええ……十一月に話した通りですわ。問題ありません',
      );
      era.println();
      await era.printAndWait(
        'レースの話はあっさり終わった。ここからが、今日の本筋だ',
      );
      era.println();
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await tachyon.say_and_wait([
          '限界……私たちの尽力をもってすれば、今の私は限界に達したと、大胆に言えますわ……',
          tachyon.uma_sex_title,
          'の限界に',
        ]);
      } else {
        await tachyon.say_and_wait(
          '限界……まだ達してはいませんが、実験を続ければいずれ届きます。問題ではありませんわ',
        );
      }
      era.println();
      await tachyon.say_and_wait('唯一の問題は……限界を越えること');
      await tachyon.say_and_wait(
        'そしてそれについて……今の私には、手がかりがありませんわ',
      );
      era.println();
      await era.printAndWait([
        '手がかりなし、と言いながら、',
        tachyon.get_colored_name(),
        ' の瞳の誇りは、まるで',
        tachyon.sex,
        'がリーマン予想の解法を口にしたかのような顔だ',
      ]);
      era.printButton('「手がかりなし……それは困ったな」', 1);
      await era.input();
      await era.printAndWait('仕方ない');
      await era.printAndWait('本当に手がかりがないなら');
      era.println();
      await era.printAndWait('悩むべきはずなのに、不思議と気持ちは穏やかだ');
      await era.printAndWait('手がかりがないなら、探せばいい');
      era.printButton('「ならタキオン、力をレースに注いでみないか？」', 1);
      era.printButton(
        `${tachyon.uma_sex_title}の限界は、やはりレース場でしか突破できないだろう`,
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '……一理ありますわ。ですが、それは ',
        callname,
        ' の私欲を満たしているだけ、という気がしますわね',
      ]);
      era.printButton(
        '「タキオンが、もっと広い世界を見せると言ったんだろ？」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        'ふふ、そうですわね。では続けましょう、私たちの新しい一年の研究を！',
      );
      era.println();
      era.print('では、研究を始める前に……');
      era.printButton('「先に餅を食べよう」（体力+20%）', 1);
      era.printButton('「すぐトレーニングへ」（ランダム能力+20）', 2);
      era.printButton('「戻って研究しよう」（スキルPt+30）', 3);
      let ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '二人は ',
            tachyon.get_colored_name(),
            ' の研究室へ戻った',
          ]);
          await era.printAndWait(['そして、最初にしたことは……']);
          era.println();
          await tachyon.say_and_wait(
            '……私が言うのも変ですけれど、私たちは……あんな話をした直後に、今何をしているのですか',
          );
          era.println();
          await era.printAndWait('かつては生徒が理科実験に使っていた教室');
          await era.printAndWait([
            'いまは ',
            you.get_colored_name(),
            ' が、熱エネルギーの放出と糯米合成物の燃点を測る実験に使っている',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' は実験器具である炉のそばに座り、暖炉の暖かさを楽しんでいる',
          ]);
          await era.printAndWait([
            'スプリンクラー？ あれは以前、',
            tachyon.get_colored_name(),
            ' が学園内で大規模な薬剤散布実験に使ったせいで、生徒会が接触できないよう強制撤去した',
          ]);
          era.printButton('「そろそろ焼けたぞ」', 1);
          era.printButton('「タキオンは食べないのか？」', 2);
          await era.input();
          await tachyon.say_and_wait('もちろん食べますわ');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' が焼いた糯米合成物——餅を受け取るとすぐ噛み、予想どおり……',
          ]);
          era.println();
          await tachyon.say_and_wait('熱い！……ふーふー');
          era.println();
          if (cook_times < 10) {
            await tachyon.say_and_wait('……案外おいしいですわね。意外でした');
          } else {
            await tachyon.say_and_wait(
              '熱い……でもおいしい。私が鍛えたモルモットだけのことはありますわ',
            );
          }
          era.println();
          await you.say_and_wait('なんで自分の手柄みたいなんだよ……');
          era.println();
          await era.printAndWait(
            '実験研究も、トレーニングもレース対策も、別の日でいい',
          );
          await era.printAndWait('せっかくの正月だ。この静けさを味わおう');
          era.println();
          await era.printAndWait('タキオンは笑い、餅を小さく噛んだ');
          await era.printAndWait([
            '最近は、「明日」や「これから」という言葉が出るだけで、',
            tachyon.get_colored_name(),
            ' の機嫌がふっと良くなる',
          ]);
          await era.printAndWait([
            '気になった ',
            you.get_colored_name(),
            ' は、つい聞いてしまった',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, '、私の脚は……']);
          break;
        case 2:
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' のやる気が乗っているうちに、',
            you.get_colored_name(),
            ' はすぐ',
            tachyon.sex,
            'とトレーニング場へ向かった',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'が場を駆け抜ける姿は、何度も見た光景なのに、',
            you.get_colored_name(),
            ' はまた見惚れてしまう',
          ]);
          await era.printAndWait(
            '光のように輝き、光のように眩しく……光のように、永遠',
          );
          await era.printAndWait(
            'かつて走りにまとわりついていた儚さは、いつの間にか消えていた',
          );
          await era.printAndWait('不安は失われ、残るのは最も純粋な光');
          await era.printAndWait([
            you.get_colored_name(),
            ' はさらに深く、見惚れた',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '？……', callname, '！']);
          era.println();
          await era.printAndWait([
            '気づかぬうちに、',
            tachyon.sex,
            'はトレーニングを終えて ',
            you.get_colored_name(),
            ' のそばまで戻っていた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '私のトレーニングを見ていて、ぼんやりするとは……肝が据わっていますわね……',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は慌てて、自分が感じた違いを',
            tachyon.sex,
            'に説明した',
          ]);
          era.println();
          await tachyon.say_and_wait('……そう、ですの');
          await tachyon.say_and_wait('実は……私自身も、妙な感覚がありますの');
          await tachyon.say_and_wait([
            '菊花賞のあと……脚が……どこかおかしい、というか',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            callname,
            '、その試験管を持ってきなさい。揺らさないで。こぼしたら床を一階まで溶かすかもしれませんわ',
          ]);
          await tachyon.say_and_wait([
            callname,
            '、今は手が離せません。アルコールランプに火をつけて、隣の薬を坩堝に入れて沸騰させて',
          ]);
          await tachyon.say_and_wait([
            'それから……よろしい、これをコーヒー色に染めて、',
            call_25,
            ' のコーヒー粉へ……',
            callname,
            '！ 取り上げて何をするのです！',
          ]);
          await tachyon.say_and_wait(
            'マスクをしなさい。次の煙は強い昏睡作用があります。防護を怠れば週末まで眠るでしょう',
          );
          await tachyon.say_and_wait([
            'これは……リンゴジュースと砂糖を足して……薬？ 違いますわ。あとで ',
            call_9,
            ' が来たときに',
            tachyon.sex,
            'へ出す飲み物です',
          ]);
          era.println();
          await era.printAndWait([
            '参拝のあと、二人は ',
            tachyon.get_colored_name(),
            ' の研究室へ戻った。今日の ',
            tachyon.get_colored_name(),
            ' は調子がすこぶるいい',
          ]);
          await era.printAndWait([
            '指示が止まらない。あまりに奇妙なもの以外は、',
            you.get_colored_name(),
            ' もほとんどこなした。だが……',
          ]);
          era.println();
          await tachyon.say_and_wait('成功しませんわ……ちっ、もう少し足します');
          await tachyon.say_and_wait(
            '今日中に……二十二回の臨床テストを終えなければ',
          );
          era.println();
          await era.printAndWait(
            'いつもの焦った実験効率に、上々の実験状態が重なる',
          );
          await era.printAndWait('結果、やることは倍増した');
          era.printButton('「タキオン、少し休まないか」', 1);
          era.printButton('「そんなに急がなくても。明日でも……」', 2);
          await era.input();
          await tachyon.say_and_wait('明日、ですって……');
          era.println();
          await era.printAndWait('叱ろうとした言葉が、途中で止まった');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は一時停止を押されたように手を止めた',
          ]);
          await era.printAndWait([
            '手の薬管が今にも床へこぼれそうになる。',
            you.get_colored_name(),
            ' は慌てて、一滴で一階まで溶かすというその薬を支えた',
          ]);
          era.printButton('「タキオン！ どうした……！」', 1);
          era.printButton('「急に止まってどうした！」', 2);
          await era.input();
          await tachyon.say_and_wait('…………はは');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' がふいに笑い出した',
          ]);
          era.printButton('「頭が……ついに壊れたか」', 1);
          await era.input();
          await tachyon.say_and_wait([
            '……あとで覚えなさい、',
            callname,
            '……考えていただけです',
          ]);
          era.println();
          await era.printAndWait('何を？');
          era.println();
          await tachyon.say_and_wait('……私たちは本当に、明日を見たのですわね');
          await era.printAndWait('明日？');
          await era.printAndWait('何の話だ。本当に頭を打ったのか？');
          await era.printAndWait([
            'それとも天才と狂人は紙一重で、',
            tachyon.get_colored_name(),
            ' はついに狂ったのか？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '失礼なことを考えている気がしますわ……あなたの言う通り、明日に回しても遅くありませんわ。ふふ',
          );
          await tachyon.say_and_wait(
            'なにしろ、この先には明日がたくさんありますもの',
          );
          era.printButton('「どっちにしろ、明日は来るだろ」', 1);
          era.printButton('「考えすぎだ。とにかく明日続けよう」', 2);
          if ((await era.input()) === 1) {
            await tachyon.say_and_wait(
              'ええ。でも……こんなに美しい明日は……初めてですわ',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は聞き取れないことを呟いた',
            ]);
          } else {
            await tachyon.say_and_wait(
              'ふふ、もちろん。明日続けましょう。ええ、明日',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' に興を削がれても、',
              tachyon.get_colored_name(),
              ' は嬉しそうだった',
            ]);
          }
          era.println();
          await era.printAndWait([
            'なぜか、「明日」を聞いたあと、',
            tachyon.get_colored_name(),
            ' の機嫌がふっと良くなった',
          ]);
          await era.printAndWait([
            '気になった ',
            you.get_colored_name(),
            ' は、つい聞いてしまった',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, '、私の脚は……']);
      }
      era.printButton('どうした！', 1);
      era.printButton('どこかおかしいのか！', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……ふふ、そんなに緊張しないでください。言いたかったのは、私の脚が……菊花賞のあと、急に安定した、ということですわ',
      ]);
      era.println();
      await era.printAndWait('安定した……それは、いいことではないのか？');
      await era.printAndWait('え、今は祝うべきなのか？');
      await era.printAndWait([
        'あまりに唐突な話題に、',
        you.get_colored_name(),
        ' は戸惑い、',
        tachyon.sex,
        'がなぜ今それを持ち出したのかわからない',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……脚の心配を捨てて、一事に集中できるのは、人生で初めてです……',
      );
      await tachyon.say_and_wait(
        '当たり前のように走り続けられる。天涯海角まででも',
      );
      await tachyon.say_and_wait(
        'だから……明日や未来を思うだけで——普通の人には当たり前のことで——私まで、こんな……',
      );
      await tachyon.say_and_wait(
        'どう言えばいいのか……あなたの言う通り、私は確かに喜びの感情を見せていますわ、',
      );
      await tachyon.say_and_wait(
        'ですが、研究に集中できる喜び、なのでしょうか？',
      );
      await tachyon.say_and_wait(
        '……む、どうも違う気がします……検討の価値がありますわね',
      );
      era.println();
      await era.printAndWait([
        'それを聞いて、',
        you.get_colored_name(),
        ' はふと閃いた',
      ]);
      era.printButton('「迷いなく走れるようになったから、じゃないか？」', 1);
      era.printButton('「自由に走れるようになったから、じゃないか？」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'む……',
        callname,
        '、私の言っていることはそういうことですわ。もう一度言う理由がわかりません',
      ]);
      era.printButton('「実験じゃなくて、走ることそのものだ」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '……走るのが好きで、自由に走れるようになったから嬉しい、という意味ですの？',
      ]);
      era.println();
      await era.printAndWait([
        'ああ……やはり、',
        tachyon.get_colored_name(),
        ' には受け入れにくいだろう',
      ]);
      await era.printAndWait(
        '純粋に理性的な自分が、何かを好きだと認めるのは……',
      );
      await tachyon.say_and_wait('それは……');
      era.println();
      await you.say_and_wait('それは？');
      era.println();
      await tachyon.say_and_wait('面白い可能性ではありませんか！');
      era.println();
      await era.printAndWait('…………え？');
      era.println();
      await tachyon.say_and_wait([
        '走ることそのものに興味を持つ……興味深い課題ですわ！',
        callname,
        '！ 次の研究はこれに決めますわ！',
      ]);
      era.println();
      await era.printAndWait('け、研究って何を？');
      era.println();
      await tachyon.say_and_wait(
        '言うまでもありません！ 走りへの『好き』ですわよ！',
      );
      era.println();
      await era.printAndWait('研究……好き？');
      await era.printAndWait([
        you.get_colored_name(),
        ' が立ち直る前に、興奮した ',
        tachyon.get_colored_name(),
        ' は続けた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '予感がありますの……限界を突破する可能性は、ここにありますわ！ 次の目標は、これを研究することにしましょう！',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の言葉を聞き、',
        you.get_colored_name(),
        ' も落ち着いて得失を考え始めた',
      ]);
      await era.printAndWait([
        '本当なら、何があっても ',
        tachyon.get_colored_name(),
        ' の目標を手伝わねばならない',
      ]);
      await era.printAndWait([
        '錯覚だとしても……',
        tachyon.get_colored_name(),
        ' が走りを楽しみ始めたこと自体は、',
        you.get_colored_name(),
        ' にとって悪い話ではない',
      ]);
      await era.printAndWait(
        '研究のために走るのと、好きで走るのとでは、後者の方がいいに決まっている',
      );
      era.println();
      await era.printAndWait(
        'だから、ある難題を除けば、百利あって一害なしの決断だ……',
      );
      await era.printAndWait([
        '考えがまとまると、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' に頷いた',
      ]);
      era.printButton('「それを目標にしよう！」', 1);
      await era.input();
      await era.printAndWait('百利あって一害なし——最大の難題さえ除けば');
      await era.printAndWait(
        'では、「感情」をどう研究する？ 頑張れ、モルモット！',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_a_95_14
  ws_a_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     */
    const f = async (tachyon, you, callname, call_25) => {
      await tachyon.say_and_wait([
        '그러니까 실험 결과에 따르면…… 오사카배 때의 팬들은……',
      ]);
      await tachyon.say_and_wait(
        '게다가 어떤 이의 열정이 힘을 만들어 원래 속도마저 뛰어넘게 했지. 역시 감정에도 어느 정도 힘이 있군.',
      );
      era.printButton(
        '「타키온이 그런 관념론적 개념을 믿을 줄은 몰랐어.」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        '내가 믿는 건 진리와 가능성뿐이네. 가능성이 있다면 모든 걸 걸겠네……',
        callname,
        ', 자네도 그렇지 않나?',
      ]);
      await tachyon.say_and_wait([
        '유물론이든 관념론이든 상관없네. 활용할 수만 있다면 한계를 넘어 가능성의 끝에 도달할 수만 있다면……',
        call_25,
        '의 친구라도 그 힘을 빌리는 데 주저하지 않겠네.',
      ]);
      await tachyon.say_and_wait(
        '……합리적으로 설명하자면 대뇌피질과 중추신경의 활성화와 관계가 있을 걸세. 간단히 말하면…… 후후, 합법적인 각성제인가?',
      );
      era.printButton('「！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '후후, 농담일세…… 하지만 본질적으로 이 흥분이 신체 능력에 주는 상승효과에는 무의식 상태에서도 한계치가 있지.',
      );
      await tachyon.say_and_wait([
        '적어도 오사카배 때 측정한 만큼 높아지지는 않을 텐데…… 설마 내 정신 상태 자체가……',
      ]);
      era.printButton('「타키온?」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……아니, 아무것도 아니네. 검증이 필요할 뿐이지. 그보다 더 깊이 조사하고 싶군…… 『팬』이라는 개념을 말일세.',
      );
      era.printButton('「팬이라……」', 1);
      era.printButton('「그러니까……」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '그게 아니라…… 팬 감사제에 참가해 볼 생각일세.',
      );
      await tachyon.say_and_wait(
        '가까운 거리에서의 접촉…… 이번에는 목적이 두 가지네. 잘만 된다면…… 한꺼번에 해결하고 싶군.',
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait('팬 A', [
        '타키온',
        tachyon.adult_sex_title,
        '! 같이 사진 찍어도 될까요!',
      ]);
      await tachyon.say_and_wait(
        '후후, 물론이지. 특별히 원하는 자세라도 있나?',
      );
      await you.say_as_passer_by_and_wait(
        '팬 A',
        '아니요, 팔짱만 껴 주시면 돼요!',
      );
      await tachyon.say_and_wait('이렇게 말인가?');
      await you.say_as_passer_by_and_wait(
        '팬 A',
        '아, 감사합니다!',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        '팬 B',
        '타키온 씨! 언제나 응원하고 있어요! 타카라즈카 기념도 힘내세요!',
      );
      await tachyon.say_and_wait('그래, 그래. 응원해 줘서 고맙네.');
      await you.say_as_passer_by_and_wait(
        '팬 B',
        '네! 앞으로도 더욱 멋진 달리기를 보여 주세요!',
      );
      await tachyon.say_and_wait('물론이지, 하하하핫!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 찾아온 팬들에게 능숙하게 응대하고 있었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 팬 서비스 중인 모습과 평소 모습의 차이란……',
      ]);
      await era.printAndWait([
        '때로는 어느 쪽이 ',
        tachyon.sex,
        '의 본모습인지 의심스러울 정도다.',
      ]);
      await era.printAndWait('얼마 지나지 않아 행사가 끝났다.');
      era.println();
      await tachyon.say_and_wait('음…… 재미있는 데이터를 얻었네.');
      await tachyon.say_and_wait(
        '오늘 악수나 사인, 사진 촬영을 위해 찾아온 관객들을 분석해 봤네——',
      );
      await tachyon.say_and_wait(
        '이하 『팬』이라고 부르겠네. 관전 목적과 나를 만난 뒤의 심박수, 호흡, 맥박 변화 속도까지……',
      );
      await tachyon.say_and_wait('팬 각자가 한 말을 바탕으로 결론을 내렸지.');
      await tachyon.say_and_wait([
        '————',
        tachyon.get_colored_name(),
        '은(는) 이 팬들에게 실험의 보상과 비슷한 존재라는 것이지.',
      ]);
      await tachyon.say_and_wait(
        '응원이라는 노력을 들이고 그 답을 보상으로 얻고 싶어 하는 걸세……',
      );
      era.printButton('「……그렇지는 않은 것 같아.」', 1);
      era.printButton('「타키온을 응원하는 마음은 그렇게 복잡하지 않아.」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……그래. 이 가설의 가장 큰 허점은 바로 ',
        callname,
        ', 자네의 지원은 무엇을 위한 것인가 하는 점일세.',
      ]);
      await tachyon.say_and_wait(
        '사츠키상, 일본 더비, 국화상, 그리고 오사카배…… 자네는 줄곧 나를 응원해 주었지.',
      );
      await tachyon.say_and_wait(
        '하지만 팬들과 자네는 다르네…… 곁에 있었던 자네는 알겠지. 당시 난 팬들의 지지를 특별한 실험 변수로 취급하지 않았네.',
      );
      await tachyon.say_and_wait(
        '그러니까 자네의 응원과 지지는 아무런 대가도 얻을 수 없지. 연구에 도움을 주는 것과는 달라……',
      );
      await tachyon.say_and_wait(
        '연구를 돕는다면 자네가 보고 싶은 달리기와 레이스를 보상으로 받을 수 있지만……',
      );
      await tachyon.say_and_wait(
        '하지만 응원과 지지로 무엇을 얻는지는 전혀 모르겠군.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 질문에 ',
        you.get_colored_name(),
        '은(는) 할 말을 잃었다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '의 질문에 답하는 것 자체는 어렵지 않다.',
      ]);
      await era.printAndWait(
        '하지만…… 감정 같은 것을 말로 이해시킬 수 있을까?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 말없이 있자 ',
        tachyon.get_colored_name(),
        '은(는) 말을 이었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '이렇게 되면 오늘 실험은 절반의 성공이군……',
      );
      await tachyon.say_and_wait(
        '다음은 타카라즈카 기념일세. 팬들의 지지가 데이터에 미치는 영향을 전체적으로 측정해야겠어.',
      );
      await era.printAndWait([
        '혼란스러운 마음을 안은 채 ',
        tachyon.get_colored_name(),
        '의 팬 감사제는 끝났다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_a_95_31
  ws_a_95_31: (() => {
    const title = '他人の可能性';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_2 アグネスタキオンのサイレンススズカへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, call_2, love) => {
      await era.printAndWait('陽射し、砂浜');
      await era.printAndWait([
        'そして砂浜を駆け回る',
        tachyon.uma_sex_title,
        'たち',
      ]);
      era.printButton('「青春だな」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '……この光景を見てそんな言葉が出るなんて、トレーナー',
        you.adult_sex_title,
        'も……さすがタキオン先輩のトレーナーです',
      ]);
      era.println();
      await era.printAndWait([
        '夏の砂浜では、',
        tachyon.uma_sex_title,
        '同士の追いかけっこが繰り広げられている',
      ]);
      await era.printAndWait('鬼ごっこ、といったところだ');
      await era.printAndWait(
        '一対多なのに、なぜか恐れ逃げているのは多数派のほう',
      );
      await era.printAndWait([
        '恐れられている側は、今年上半期で最も勢いのある',
        tachyon.uma_sex_title,
        'であり、',
        you.get_colored_name(),
        ' の担当',
        tachyon.uma_sex_title,
        '、',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        'おやおや……今の子は、良薬は口に苦し、という道理もわからないのですか',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '……もし、苦いだけならまだしも',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'タキオン先輩の薬……味はいい、いいんですけど……！',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'D',
        '体が光るなんて……本当に恥ずかしいです！',
      );
      era.println();
      await era.printAndWait('…………え？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は眼前の',
        tachyon.uma_sex_title,
        'たちを見る……陽射しでわかりにくいが、腕や肩、脚のあたりが確かに薄く光っている',
      ]);
      await era.printAndWait('だが、光っている場所が妙だ');
      await era.printAndWait([
        'ん？ 太もも内側が光っている',
        tachyon.uma_sex_title,
        'まで……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……この薬の効果は、血流が速まった部位を光らせます。効力はトレーニングの一時間だけ、のはずですわ、',
      );
      await tachyon.say_and_wait(
        '副作用として、興奮時に触れられた部位のタンパク質UMA—Aの活性を加速します。血流加速で光る原理も、そのUMA—Aを通じて',
      );
      era.drawLine();
      await tachyon.say_and_wait(
        '要するに……意中の人、あるいは心拍を上げる相手と身体が触れたときだけ、光るのですわ',
      );
      era.println();
      await era.printAndWait('ああ、なるほど');
      await era.printAndWait('肩や腕が光る理由はわかった');
      await era.printAndWait('……待て、太もも内側は……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        tachyon.sex,
        'が急に顔を赤らめたのを見て、すべてを悟った',
      ]);
      await era.printAndWait('……今の子は遊びが派手だ');
      era.println();
      await tachyon.say_and_wait(
        'とにかく……この薬は補助が主です。持続したトレーニングと合わせてこそ効きますわ',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'わ……私たちはちゃんとトレーニングします！ 怠けません！ だから薬は……',
      );
      await tachyon.say_and_wait(
        'ふふ、それはいけません。両方揃って最良の向上です。ですから……大人しく飲みなさい！',
      );
      era.println();
      await era.printAndWait([
        '瞬く間に、',
        tachyon.get_colored_name(),
        ' は',
        tachyon.uma_sex_title,
        'たちが油断した隙に一歩踏み込み、一名の',
        tachyon.uma_sex_title,
        'の前へ。電光石火で薬を',
        tachyon.sex,
        'の口へ流し込んだ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '見せてあげますわ……',
        callname,
        ' を相手に鍛えた、薬の流し込み技術を！ はっはっはっはっ！',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'ひゃあっ———',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'ぐわっ————',
      );
      era.println();
      await era.printAndWait([
        'なにしろG1級の',
        tachyon.uma_sex_title,
        'であり、',
        you.get_colored_name(),
        ' も認める最速の',
        tachyon.uma_sex_title,
        'だ。まだ育ちきっていない後輩が ',
        tachyon.get_colored_name(),
        ' の相手になるはずもない',
      ]);
      await era.printAndWait('数分もせず、砂浜は倒れた者で埋まっていた');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'タ……タキオン先輩、別人みたい……',
      );
      era.println();
      await era.printAndWait([
        'そういえば、後輩の目に映る姿を保って実験しやすくするため、',
        tachyon.get_colored_name(),
        ' は後輩の前では作り物の落ち着いた先輩を装っていた',
      ]);
      await era.printAndWait([
        '言ってしまえば、今の姿こそ ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の本性だ',
      ]);
      await era.printAndWait(['だが……', tachyon.sex, 'の言う通りでもある']);
      era.printButton('「タキオンは確かに……随分変わったな」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は数日前の ',
        tachyon.get_colored_name(),
        ' の言葉を思い出した',
      ]);
      await tachyon.used_to_say_and_wait(
        'タキオン先輩みたいに強くなりたい……あの子たちがそう言いましたのよ！',
      );
      await tachyon.used_to_say_and_wait([
        'さあ！',
        callname,
        '！ あの子たちのために、',
        tachyon.couple_title,
        'に一番合う薬を調合しなければ！',
      ]);
      await era.printAndWait([
        '「実験のために、',
        tachyon.couple_title,
        'に試薬させる」ではない',
      ]);
      await era.printAndWait([
        '「',
        tachyon.couple_title,
        'のために、薬を調合する」なのだ',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'やっぱり……昔の優しいタキオン先輩はどこへ……',
      );
      era.println();
      await tachyon.say_and_wait(
        'おや～～ここにもまだ一匹、仔馬が残っていますわね？',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'ひっ！！！',
      );
      era.println();
      await era.printAndWait([
        '最後に ',
        you.get_colored_name(),
        ' のそばへ隠れた小さな',
        tachyon.uma_sex_title,
        'まで ',
        tachyon.get_colored_name(),
        ' に押さえ込まれて薬を飲まされ、砂浜のこの残酷な実験は ',
        tachyon.get_colored_name(),
        ' の完勝で幕を閉じた',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'よろしい、',
        callname,
        '。今日の実験を始めましょう',
      ]);
      await era.printAndWait('だが、これだけは変わらない');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、今も限界と、その突破を追い求める',
        tachyon.uma_sex_title,
        'だ',
      ]);
      era.printButton('「で、今日の実験テーマは？」', 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……知っていますわね。最近 ',
          call_2,
          ' が水上を走る方法を覚えたらしい、ということを',
        ]);
        await era.printAndWait('…………え？');
        era.println();
        await tachyon.say_and_wait(
          '計算上、秒速30メートルを超えて水上を走れば、軽功で水面を踏むような効果は確かに出せますわ',
        );
        era.println();
        await era.printAndWait('……いや、30メートル？ 毎秒？');
        await era.printAndWait('いつの間にか、腰に縄が結ばれている');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は海辺の水上バイクに跨っていた',
        ]);
        await you.say_and_wait(
          '……なんでお前は水上バイクで、俺が水上を走るんだよ！？',
        );
        era.println();
        await tachyon.say_and_wait([
          '頑張ってください、',
          callname,
          '。あなたならできますわ',
        ]);
        era.println();
        await era.printAndWait('言い終わるか終わらないかで、体が飛び出した');
        await era.printAndWait([
          '軽功が成功したかは不明だ。だがその光景を見た小さな',
          tachyon.uma_sex_title,
          'たちによれば、水面を跳ねる石に似ていたらしい',
        ]);
      } else {
        await tachyon.say_and_wait('今日は……少し面白い実験をしましょう');
        era.println();
        await era.printAndWait([
          'ふいに、',
          tachyon.get_colored_name(),
          ' は後輩たちの前で、',
          you.get_colored_name(),
          ' の手を握った',
        ]);
        era.printButton('「タ……タキオン？」', 1);
        await era.input();
        await era.printAndWait(
          '地面に伏せて死んだふりをしていた後輩たちが、急に目を上げて二人を見つめた',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は顔を ',
          you.get_colored_name(),
          ' の耳に寄せ、小さく言った',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '前にも言いましたわ。観客、あるいはファンの観察をしたい、と',
        );
        await tachyon.say_and_wait([
          '今は感情を煽ったときの探査……たとえば、ここでキスをしたら、',
          tachyon.couple_title,
          'の反応はどうなるでしょう？',
        ]);
        era.println();
        await era.printAndWait([
          '陽射しが熱すぎるせいか、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の今の目を、まっすぐ見られなかった',
        ]);
        await era.printAndWait([
          'ふいに、',
          tachyon.get_colored_name(),
          ' の唇が ',
          you.get_colored_name(),
          ' の顔に寄る。体が遮り、本当にキスしたように見える',
        ]);
        await era.printAndWait([
          '傍らの',
          tachyon.uma_sex_title,
          'たちから、小さな悲鳴が漏れた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '不思議ですわ。',
          callname,
          '、なぜか',
          tachyon.couple_title,
          'の声を聞いたあと、もっと動きたくなる気がします',
        ]);
        await tachyon.say_and_wait(
          'カリギュラ効果、ですの？ 公衆の場ですることを恥じるほど、かえって欲求が増す',
        );
        era.println();
        await tachyon.say_and_wait('ちゅっ❤');
        era.println();
        await era.printAndWait('キスされた');
        await era.printAndWait('自分を納得させる言い訳も、もうない');
        era.println();
        await tachyon.say_and_wait(
          'では……続けますか？ 観客の感想を、聞いてみましょう❤',
        );
        era.println();
        await era.printAndWait([
          '最後の一文で、',
          tachyon.get_colored_name(),
          ' の声が急に大きくなった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が砂浜を振り返ると、眼前の光景に真っ赤な幼い顔が並んでいた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'どうやら……みんな気に入ったようですわね。宝塚のとき、あなたが言ったでしょう？ ファンサービス……とか',
        ]);
        era.println();
        await era.printAndWait([
          'まずい。当時 ',
          tachyon.get_colored_name(),
          ' を説得した言葉が、ブーメランになった',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の体を抱え、勢いで ',
          you.get_colored_name(),
          ' を砂浜に押し倒した',
        ]);
        era.println();
        await tachyon.say_and_wait('まだ……続けますか？');
        era.printButton('「やめておけ」', 1);
        era.printButton('「……やめておけ」', 2);
        await era.input();
        await era.printAndWait(
          'いくらなんでも、これだけの人前では、やりすぎだ',
        );
        await era.printAndWait([
          'よく見れば、',
          tachyon.get_colored_name(),
          ' の頬にも薄い赤みがある……羞恥か興奮かはわからないが',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'では……この小さな',
          tachyon.uma_sex_title,
          'たちから、興奮時のデータを集めてきてくださいな',
        ]);
        era.println();
        await era.printAndWait([
          'ふいに、',
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の上から立ち上がった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'まだ続けたいなら……データを持って、私のところへ戻ってきなさい❤',
        );
        era.println();
        await era.printAndWait([
          '声を潜めない暗示に、周囲の',
          tachyon.uma_sex_title,
          'たちからまた悲鳴が上がった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は鼻をこする。データ集めは楽になったが、戻っても戻らなくても噂は避けられそうにない',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_a_95_39
  ws_a_95_39: (() => {
    const title = '마지막 인자를 찾아서';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait(
        '계절이 가을로 접어들자, 연말 최대의 레이스에도 세간의 관심이 쏠리기 시작했다.',
      );
      era.println();
      await you.say_as_passer_by_and_wait('기자 A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '님, 연말 아리마 기념에서 가장 유력한 우승 후보로 꼽히는 소감은 어떠십니까?',
      ]);
      await tachyon.say_and_wait([
        '1번 인기라고? 별로…… 아니, 여러분의 성원에 감사드립니다. 아리마 기념에서는……',
      ]);
      await tachyon.say_and_wait('제 자신의 한계를 뛰어넘겠다는 목표로 달리겠습니다.');
      await you.say_as_passer_by_and_wait('기자 B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '의 목표는 ',
        tachyon.uma_sex_title,
        '의 한계를 뛰어넘는다는 뜻이라 하셨는데, 구체적으로 어떤 의미입니까?',
      ]);
      await tachyon.say_and_wait(
        '후후후…… 모든 일이 순조롭게 풀린다면 아리마 기념에서 직접 보시게 될 걸세.',
      );
      await you.say_as_passer_by_and_wait('기자 C', [
        '아리마 기념을 앞두고 ',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '는 어떤 준비를 하고 계십니까?',
      ]);
      await tachyon.say_and_wait(
        '코스와 육체의 한계를 극복하는 건 물론이고, 그 밖에도…… 사실 정신적인 돌파구를 찾고 있네.',
      );
      era.println();
      await era.printAndWait('정신적인 돌파구');
      await era.printAndWait('뜻밖의 화제에 현장의 기자들은 당황했다.');
      await era.printAndWait('겉으로 풍기는 인상으로 보나 가끔 들리는 소문으로 보나, ');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 정신론을 입에 올릴 만한 ',
        tachyon.uma_sex_title,
        '로는 보이지 않았으니까.',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait('기자 A', [
        '저, 정신적인 돌파구라고요? ……다음 상대가 바로 그 ',
        coffee.get_colored_name(),
        '이기 때문에 정신적인 도움이 필요하다는 뜻입니까?',
      ]);
      await tachyon.say_and_wait([call_25, '……상대……?']);
      await you.say_as_passer_by_and_wait('기자 A', '아, 아닌가요?');
      await tachyon.say_and_wait('……아니, 검토해 볼 만한 가능성이군. 후후후.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 의미심장한 말만 남긴 채 더는 설명하지 않았다.',
      ]);
      if (love >= 50 && love < 75) {
        await you.say_as_passer_by_and_wait('기자 A', [
          '그러고 보니…… 한 가지 더, ',
          tachyon.get_colored_name(),
          '와 트레이너 사이의 소문 말입니다.',
        ]);
        await you.say_as_passer_by_and_wait('기자 A', '두 분께 직접 여쭙고 싶습니다……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '을(를) 힐끗 보았다. 어째서인지 ',
          you.get_colored_name(),
          '은(는) 등골이 오싹해졌다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '묻고 싶은 건 나와 ',
          you.sex,
          '사이에…… 연애 감정이 존재하는지, 그런 것이겠지?',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 다시 ',
          you.get_colored_name(),
          '을(를) 바라봤다. 이번에는 알 수 있었다. ',
          tachyon.sex,
          '의 눈빛은 「어떻게 대답해 주길 바라나?」라는 뜻이었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 기자들에게 보이지 않도록 고개를 아주 작게 저었다. ',
          tachyon.sex,
          '에게만 알아볼 수 있을 만큼.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……이렇게 대답하지. ',
          you.sex,
          '는…… 내게 가장 소중한……',
        ]);
        await you.say_as_passer_by_and_wait('기자 A', '가장 소중한……?');
        era.println();
        await era.printAndWait([
          '모두의 시선이 온통 ',
          tachyon.get_colored_name(),
          '의 다음 말에 쏠렸다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '도 자기도 모르게 침을 삼켰다.',
        ]);
        era.println();
        await tachyon.say_and_wait('가장 소중한…… 실험동물일세.');
        era.println();
        await era.printAndWait('대답을 들은 기자들은 일제히 어깨를 축 늘어뜨렸다.');
        await era.printAndWait([
          you.get_colored_name(),
          '도 한숨을 내쉬었다. 다만 안도의 한숨이었다.',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '은(는) 입 모양만으로 ',
          you.get_colored_name(),
          '에게 「빚 하나 진 걸세」라고 전했다.',
        ]);
        await era.printAndWait([
          '하지만 지금 ',
          you.get_colored_name(),
          '에게는 그런 것을 신경 쓸 여유가 없었다.',
        ]);
        era.println();
        await era.printAndWait('여담이지만, 다음 날 신문의 제목은 이랬다……');
        await you.say_as_unknown_and_wait([
          tachyon.get_colored_name(),
          '이(가) 소문에 답하다! 트레이너를 가장 소중한 존재라고 밝혀!',
        ]);
        await era.printAndWait('…………결국 아무것도 피하지 못했잖아.');
      }
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] ws_a_95_48
  ws_a_95_48: (() => {
    const title = '聖夜のサンタ';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait('真冬の夜');
      await era.printAndWait(['明日は、有馬記念だ']);
      await era.printAndWait([
        '体調を整えて、',
        tachyon.get_colored_name(),
        ' の応援に立たねばならない',
      ]);
      await era.printAndWait('だから、早く寝なければ');
      await era.printAndWait('だから……');
      era.println();
      await era.printAndWait(
        '誰だ、この時間に外でガタガタと安眠を妨げるのは！',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は腹立ちまぎれに窓を開けた。外にいたのは、試験管を手にした ',
        tachyon.get_colored_name(),
        ' だった',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'おや、起きてしまいましたの。最新の試薬を試す機会を逃しましたわ……',
      );
      era.printButton('「……それは何だ」', 1);
      era.printButton('「……なぜ窓の外にいる」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'ええ……無味無臭でガラスだけを溶かす薬ですわ。ガラスにしか効きませんから、以前みたいに床まで穴を開ける事故は防げます。ただし副作用は……',
        );
        await tachyon.say_and_wait(
          '溶けたあと、隙間へ潜り込んで掃除がほぼ不可能になりますの。腐食された箇所は、全部外さない限り二度とガラスを嵌められませんわ',
        );
        era.println();
        await era.printAndWait('怖すぎる！？');
      } else {
        await tachyon.say_and_wait(
          'ふふ、サプライズですわ……それより、先に入れてくれませんの？ 外は少々寒いですわよ',
        );
        era.println();
        await era.printAndWait('だからなぜ窓を登るんだ！！');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は遠慮なく部屋へ入った',
      ]);
      await era.printAndWait([you.get_colored_name(), ' は警戒して相手を見る']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の私宅侵入は、これが初めてではない。毎回、朝まで待てない実験を理由に、自分へ薬を盛ってくる',
      ]);
      await era.printAndWait([
        '普段ならまだしも、有馬の前夜という大事な時間に、これ以上',
        tachyon.sex,
        'の好き放題は許されない',
      ]);
      era.printButton('「明日は有馬記念だ」', 1);
      era.printButton('「早く戻って休め」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……ふむ、明日は有馬記念。では……今日は、何ですの？',
      ]);
      era.printButton('「今日？」', 1);
      era.printButton('「……有馬記念の前日？」', 2);
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('場が、いきなり沈黙に落ちた');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' すら、呆れて言葉を失ったかのようだ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '、今日、街のパン屋が急にブッシュ・ド・ノエルを並べ始めたの、気づきました？',
      ]);
      era.printButton('「最近の流行か？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…………ケン○ッキーが、チキンセットを出し始めた、ですの？',
      );
      era.printButton('「○ンタッキーに、チキン以外のセットなんてあるか？」', 1);
      await era.input();
      await tachyon.say_and_wait('……………生徒会長の着ぐるみ、ですの？');
      era.printButton(
        '「どうせ寒い冗談のネタだろ、騙されないぞ、クリスマスツリーに扮して…………え？」',
        1,
      );
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('部屋の中が、また沈黙に沈んだ');
      era.printButton('「まさか……今日……クリスマスか？」', 1);
      await era.input();
      await era.printAndWait('ははは');
      await era.printAndWait([
        '室内に、',
        tachyon.sex,
        'の鈴のような笑い声が響いた',
      ]);
      await era.printAndWait(
        'この声を鈴にするなら、自分もサンタクロースの到来を信じそうだ',
      );
      era.println();
      await tachyon.say_and_wait([
        'そうですわ、',
        callname,
        '！ 今日はクリスマスですわ！ では……欲しいクリスマスプレゼントはありますの？ 今日ばかりは、このサンタクロースが太っ腹に叶えて差し上げますわ！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、どこに隠していたのかサンタ帽を取り出し、耳に斜めに被せた',
      ]);
      await era.printAndWait(
        '両腕を広げ、いつものポーズ。だが口から出たのは「実験を始めましょう」ではなく、「Merry Christmas」だった',
      );
      era.printButton('「Merry Christmas」', 1);
      era.printButton('「クリスマスおめでとう」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'いいですわいいですわ、早く言ってくださいまし。欲しいクリスマスプレゼントは何ですの！',
      );
      era.printButton('「タキオンのキス」', 1);
      era.printButton('「有馬の勝利」', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        await era.printAndWait('クリスマスの空気に当てられたのだろう');
        await era.printAndWait([
          'つい、',
          tachyon.get_colored_name(),
          ' に、担当とトレーナーの関係を明らかに超えた発言をしてしまった',
        ]);
        era.println();
        if (love >= 75) {
          await tachyon.say_and_wait('え………');
          era.println();
          await era.printAndWait('や……やっぱり、変だったか');
          await era.printAndWait('別のに変えよう');
          era.println();
          await tachyon.say_and_wait(
            'いいえ……ただ、普段からしていることをクリスマスの願いにするなんて、安すぎますわ',
          );
          await tachyon.say_and_wait(
            'せっかくのクリスマスですのよ……もっと特別な願いにしませんこと？',
          );
          await tachyon.say_and_wait('たとえば……');
          era.println();
          await era.printAndWait(
            'ゆっくりめくられる制服のスカート。その下は深紫のレース',
          );
          await era.printAndWait('含みのある眼差し。情欲と渇望で満ちている');
          await era.printAndWait('だが……');
          era.printButton('「明日……有馬……」', 1);
          await era.input();
          await era.printAndWait('キーワードしか口にできないのは');
          await era.printAndWait('理性が、その単語を支えるのが精一杯だからだ');
          await era.printAndWait('胸の内は、半分が恐れ、半分が期待');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が、聞き入れないのではないかという恐れ',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が、聞き入れないのではないかという期待',
          ]);
          era.println();
          await tachyon.say_and_wait('……やめますわ');
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), ' は手を止めた']);
          await era.printAndWait([
            you.get_colored_name(),
            ' の胸は、安堵と惜しみが半々だった',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'よく考えれば、明日、実験成功の祝いとして取っておくのも悪くありませんわ',
          );
          era.println();
          await era.printAndWait('明日……');
          await era.printAndWait('期待すべきことが、また一つ増えたらしい');
        } else if (love >= 50) {
          await tachyon.say_and_wait('いいですわよ');
          era.println();
          await era.printAndWait('え……？');
          await era.printAndWait([
            you.get_colored_name(),
            ' が反応するより先に、',
            tachyon.get_colored_name(),
            ' が自ら寄りかかってきた',
          ]);
          await era.printAndWait('待て、何が起きている');
          era.println();
          await tachyon.say_and_wait('んちゅ……ちゅ……ちゅる……');
          era.println();
          await era.printAndWait('数分に及ぶ長いキス');
          await era.printAndWait(
            '短く、同時に長い時間。静かな聖夜に響くのは、唾液の混ざる音だけだった',
          );
          if (!era.get('exp:0:接吻次数')) {
            await era.printAndWait('ファーストキスが、深いディープキス');
            await era.printAndWait(
              'こんな奇蹟じみた夢は、聖夜にしか起きないのかもしれない',
            );
          }
          era.println();
          await tachyon.say_and_wait(
            'このクリスマスプレゼント、気に入りました？',
          );
          era.println();
          await era.printAndWait([
            '月下の',
            tachyon.sex,
            '。その瞳は、妖艶で危うい色を帯びている',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '安心なさい……軽重の見分けくらいは、つきますわ',
          );
          era.println();
          await era.printAndWait([
            '何しろ、明日が有馬記念という状況で、あれまでするのは相手にも自分にも最大の無礼だ',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ですから……ほんの少し、印をつけておくだけ。有馬が終わったあと……ふふ……そのとき、どう応えるか、よく考えておきなさいな',
          ]);
        } else if (relation > 225) {
          await tachyon.say_and_wait(
            'ん？ 奇妙な願いですわね……それだけですの？',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はごく自然に、',
            you.get_colored_name(),
            ' の頬にキスをした',
          ]);
          era.println();
          await era.printAndWait('……あまり、感触がない？');
          era.println();
          await tachyon.say_and_wait(
            'まったく、せっかくのクリスマスの願いを、こんなことに使うなんて……理解できませんわ',
          );
          era.println();
          await era.printAndWait(
            '感触はともかく、そう言われると損をした気分になってくる',
          );
          await era.printAndWait('それなら……');
          era.println();
          await tachyon.say_and_wait([
            '！……ちょっと、ちょっとちょっと、',
            callname,
            '……何をしていますの',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は逆に、',
            tachyon.get_colored_name(),
            ' の腰を抱いた',
          ]);
          await era.printAndWait(
            '礼には礼を、というやつだ……多分。どうでもいい',
          );
          await era.printAndWait(
            'せっかくのクリスマスだ。主導権を握るのも、面白い経験ではないか',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はそっと、',
            tachyon.get_colored_name(),
            ' の額に口づけた',
          ]);
          era.printButton('「クリスマスおめでとう」', 1);
          await era.input();
          await tachyon.say_and_wait(
            '…………今日がクリスマスだから、不問にして差し上げますわ……あとで覚えておきなさい',
          );
          era.printButton('「そう言いながら、タキオンの顔は赤いぞ……」', 1);
          await era.input();
          await tachyon.say_and_wait('黙りなさい！');
        } else if (relation > 0) {
          await tachyon.say_and_wait('おや？ 本当に欲しいですの？');
          era.println();
          await era.printAndWait('————え？');
          era.println();
          await tachyon.say_and_wait(
            '聞いたことがありますわ。誓いのキス、とかいうものですのね',
          );
          era.println();
          await era.printAndWait('えええっ———！？');
          era.println();
          await tachyon.say_and_wait('それなら、いらっしゃい');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は言い終えると、不意に ',
            you.get_colored_name(),
            ' へ近づいた',
          ]);
          era.println();
          await tachyon.say_and_wait('祭りの、大盤振る舞い、ということで……');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'はそっと、',
            you.get_colored_name(),
            ' の体へ身を寄せた',
          ]);
          await era.printAndWait('優しく———手の甲へ、軽く口づけた');
          era.println();
          await tachyon.say_and_wait('よし');
          era.println();
          await era.printAndWait('…………え？');
          era.println();
          await tachyon.say_and_wait([
            'ついでに言えば、誓いの内容は、これから先も永遠に私の ',
            callname,
            ' として実験を受けることですわよ？',
          ]);
          era.println();
          await era.printAndWait('待て！？');
          await era.printAndWait(
            '手の甲への社交キス一身が、釣り合っていないだろう！？',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の文句に答えず、くっくっと笑っているだけだ',
          ]);
          await era.printAndWait('本気なのか、冗談なのか、わからない');
        } else {
          await tachyon.say_and_wait(
            'ちょっと、クリスマスだからといって、その冗談は度が過ぎますわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は危うい目で ',
            you.get_colored_name(),
            ' を牽制した',
          ]);
          await era.printAndWait([
            'だが、その見慣れた冷たい返しが、かえって ',
            you.get_colored_name(),
            ' を安心させた',
          ]);
        }
      } else {
        await era.printAndWait(['たぶん、明日が有馬記念だからだ']);
        await era.printAndWait([
          you.get_colored_name(),
          ' は頭が熱くなり、空気が読めないと言っていい言葉を口にしてしまった',
        ]);
        era.printButton('「有馬……」', 1);
        await era.input();
        await tachyon.say_and_wait('しーっ');
        era.println();
        await era.printAndWait([
          '言葉の途中で、',
          tachyon.get_colored_name(),
          ' の人差し指に押さえられた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '今日は奇蹟と幻想の夜ですわ。現実の話は、明日にしてくださいまし？',
        );
        era.println();
        await era.printAndWait([
          '月下の',
          tachyon.sex,
          'は、本物の天使のようだった',
        ]);
        era.printButton(
          '「タキオンにも、こんなロマンチックな面があるんだな」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait(
          'おや？ はははっ！ そういえば、こんな言葉がありますわね。『科学者こそ、世界最大のロマンチストである』',
        );
        era.println();
        await era.printAndWait(
          'あのロマンチックで、感性的なものを信じていなければ',
        );
        await era.printAndWait(
          '退屈で反復的な研究に、人生を投じたりはしないだろう',
        );
        await era.printAndWait([
          tachyon.uma_sex_title,
          'の可能性を信じる',
          tachyon.sex,
          'と、',
          tachyon.get_colored_name(),
          ' の可能性を信じる ',
          you.get_colored_name(),
        ]);
        await era.printAndWait('最も無邪気な夢想家が、二人いるだけではないか');
        era.println();
        await tachyon.say_and_wait(
          'では、他に欲しいクリスマスプレゼントはありますの？',
        );
        era.printButton('「もういい」', 1);
        await era.input();
        await era.printAndWait('この夢こそ、最高の贈り物だ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の意を察したように頷き、その考えを認めるかのようだった',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'では……あなたの欲しかった贈り物は済みましたわ',
        );
        era.println();
        await era.printAndWait('ん……？');
        await era.printAndWait([
          '「贈り物」の段が終わっても、',
          tachyon.get_colored_name(),
          ' はまだ遊び足りないらしく、続けて口を開いた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '次は、サンタクロースが贈りたい贈り物の番ですわ',
        );
        era.println();
        await era.printAndWait([
          'その言葉を聞いた瞬間、',
          you.get_colored_name(),
          ' は神経を張りつめた',
        ]);
        await era.printAndWait('やっぱり……逃げられないのか');
        era.println();
        await tachyon.say_and_wait([
          callname,
          '、ここ数日、あなたも疲れていたでしょう',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' を気遣う前置きとともに、',
          tachyon.get_colored_name(),
          ' は一歩一歩、ベッド脇の ',
          you.get_colored_name(),
          ' へ近づいた',
        ]);
        await era.printAndWait([
          'じりじりと、',
          you.get_colored_name(),
          ' をベッドの隅へ追い詰めていく',
        ]);
        await era.printAndWait('今度は何だ？ 発光か？ 変色か？ 変形か？');
        era.println();
        await era.printAndWait(
          '恐怖とともにベッドへ這い上がる、赤い瞳の影が迫る',
        );
        await era.printAndWait([
          'やがて距離がほぼ零になったとき、',
          tachyon.sex,
          'は',
          tachyon.sex,
          'の本当の目的を見せた',
        ]);
        era.println();
        await tachyon.say_and_wait('————いい子、いい子');
        era.println();
        await era.printAndWait('後頭部の下は、絹のような感触');
        await era.printAndWait(['眼前は、', tachyon.sex, 'の艶やかな顔']);
        if (tachyon.sex_code - 1) {
          await era.printAndWait(
            '——そう言おうとして、二つの膨らみに視線を遮られた',
          );
        }
        await era.printAndWait('これは……膝枕？');
        era.println();
        await tachyon.say_and_wait(
          'まったく、何だと思いましたの？ 言ったはずですわ。今夜の私は、ただの普通のサンタクロース。それ以上でも、それ以下でもありません',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' はぼんやりと聞いていた。',
          tachyon.sex,
          'の声は、童謡を歌うように柔らかい',
        ]);
        era.println();
        await tachyon.say_and_wait('お疲れさま———それから、ありがとう');
        era.println();
        await era.printAndWait([
          '今夜まで、担当',
          tachyon.uma_sex_title,
          'の暴走に付き合い続けてきた',
        ]);
        await era.printAndWait(
          '明朝からは、有馬記念と、その先のURA決勝が待っている',
        );
        await era.printAndWait('だから少なくとも今、この夜だけは');
        await era.printAndWait('どうか、よい夢を');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_a_advanced
  ws_a_advanced: (() => {
    const title = 'Advanced';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        '만약 정말로 ',
        tachyon.get_colored_name(),
        '의 말대로 ',
        tachyon.sex,
        '에게 희망을 가져다준 사람이 자신이라면',
      ]);
      await era.printAndWait([
        '그렇다면 이 꿈을 향한 길을 ',
        tachyon.sex,
        '와 함께 걷는 것도 자신의 책임이자 의무일 것이다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 말대로 이 이야기의 막을 올린 사람이 자신이라면 어떤 결말이 오든 막이 내릴 때까지 무대에 서 있어야 한다.',
      ]);
      era.println();
      await era.printAndWait('그러니까……');
      era.printButton('「……아니야.」', 1);
      era.printButton('「그런 게 아니야.」', 2);
      await era.input();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await era.printAndWait(['곁을 지키는 것만으로는 부족하다.']);
      await era.printAndWait(['그저 무대에 서 있는 것만으로도 부족하다.']);
      era.println();
      await era.printAndWait([
        '나는 ',
        tachyon.get_colored_name(),
        '의 트레이너다.',
      ]);
      await era.printAndWait([tachyon.sex, '와 함께 발맞춰 나아가는 트레이너다.']);
      await era.printAndWait([tachyon.sex, '의 뒤가 아니라 옆에서 걷는 사람이다.']);

      era.printButton('「……난 Plan A를 선택하겠어.」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……그렇군. 그렇다면 날 위해 온 힘을 다하고 끝까지 지켜보게…… 내가 불타 사라지든 시들어 떨어지든.',
      );
      era.println();
      await era.printAndWait('아니야. 그게 아니야.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 고개를 저으며 ',
        tachyon.get_colored_name(),
        '의 말을 가로막았다.',
      ]);
      era.println();
      await you.say_and_wait('지켜보기만 하는 게 아니야.');
      era.println();
      await tachyon.say_and_wait('……？');
      era.printButton('「난 너와 『함께』, 『우리』의 꿈을 이루겠어.」', 1);
      await era.input();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '은(는) 입을 다물었다.']);
      await era.printAndWait([
        tachyon.sex,
        '의 표정은 화가 난 듯하면서도 조금은 기뻐 보였다.',
      ]);
      await era.printAndWait('그리고……');
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait(
          '……모르모트 주제에 인간과 동등한 지위를 바라나?',
        );
        era.println();
        await era.printAndWait([
          '평소처럼 거만한 한마디가 ',
          you.get_colored_name(),
          '을(를) 깊은 나락으로 떨어뜨렸다.',
        ]);
        await era.printAndWait(
          '나란히 걸으려면 상대도 같은 길을 걸으려는 마음이 있어야 한다.',
        );
        await era.printAndWait(
          '함께 발을 묶고 걷는데 한쪽만 끈을 지키려 해서는 앞으로 나아갈 수 없다.',
        );
        await era.printAndWait('이 말투라면 분명……');
        era.println();
        await tachyon.say_and_wait(
          '그렇다면 내 보폭을 따라잡아 보게. 내가 무시할 수 없을 만큼 빛나 보이도록…… 자네의 가능성을 증명해 보란 말일세!',
        );
      } else if (love < 75) {
        await tachyon.say_and_wait('……후후, 하하하핫!');
        era.println();
        await era.printAndWait([
          '갑자기 ',
          tachyon.get_colored_name(),
          '은(는) 흡족한 듯 웃었다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '그래, 그렇지. 나란히 걷는 동료, 함께 싸우는 전우…… 후후, 재미있군!',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '은(는) 두 팔을 벌리고 뒤에 서 있는 ',
          you.get_colored_name(),
          '을(를) 고개를 갸웃하며 바라보았다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '그렇다면 따라오게, ',
          callname,
          '! 내 위도 아래도 아닌 동료여. 자신 있다면 어서 따라오게.',
        ]);
      } else {
        await tachyon.say_and_wait([
          '그러니까……',
          callname,
          ', 진심인 겐가?',
        ]);
        era.println();
        await era.printAndWait('진심……?');
        await era.printAndWait([
          '나는 진심으로 ',
          tachyon.get_colored_name(),
          '와 함께 걷고 싶다. 그런 뜻이었나?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 결의를 담아 고개를 끄덕였다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……그런데 동행이라면, 결국 동거…… 으음……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 힘껏 고개를 저었다.',
        ]);
        await era.printAndWait(
          '무슨 일이 벌어진 건지는 모르겠지만 어딘가 대화가 어긋나고 있는데……?',
        );
        era.println();
        await tachyon.say_and_wait(
          '……크흠. 알겠네. 그럼 우리의 목표를 향해 함께 노력하세.',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 조금 진정하고 다시 말했다.',
        ]);
        await era.printAndWait(
          '무슨 일이 있었던 건지는 모르겠지만 어쨌든 인정받았다는 뜻이겠지.',
        );
        await era.printAndWait('앞으로도 정신을 바짝 차려야겠다!');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이(가) 월계배 출전을 포기했다는 소식은 학원 전체에 퍼졌다.',
      ]);
      await era.printAndWait([
        '트레이너인 ',
        you.get_colored_name(),
        ' 역시 비판을 피할 수 없었다.',
      ]);
      await era.printAndWait([
        '그럼에도…… 이것 역시 ',
        tachyon.sex,
        '와 함께 걷기 위해 치러야 할 대가일 것이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
