// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
module.exports = {
  ...require("#/i18n/ja-JP/kojo/100900-Daiwa-Scarlet/ero-9"),

  // [번역 완료] ts_end
  ts_end: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} daiwa
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (daiwa, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 눈을 떴을 때는 이미 휴게실 침대 위였다.',
      ]);
      await era.printAndWait([
        '멍하던 머리가 점차 맑아지자 ',
        you.get_colored_name(),
        '은(는) 허리가 유난히 무겁다는 걸 깨닫고, 이어 엉망이 된 시트를 보았다.',
      ]);
      era.println();
      await era.printAndWait([
        '옆을 보니 ',
        daiwa.get_colored_name(),
        '이(가) 얼굴을 가린 채 무언가 중얼거리고 있었다.',
      ]);
      await daiwa.say_and_wait(
        '어떻게 해야 하죠…… 합의였어요…… 그래요, 합의였어요…… 트레이너도 그렇게 흥분해 있었으니까요…… 하지만 트레이너가 출산휴가에 들어가면…… 아아……',
      );
      era.println();
      await era.printAndWait([
        '그녀는 무언가로 고민하고 있는 듯하다. 낮까지 이어졌던 열기는 이미 가라앉았고, ',
        you.get_colored_name(),
        '은(는) 조금씩 무슨 일이 있었는지, 자신에게 무슨 일이 일어났는지를 떠올려 갔다.',
      ]);
      await era.printAndWait([
        '그래. 그 뒤 ',
        daiwa.get_colored_name(),
        '에게 침대로 옮겨져 여자로서 안겼다.',
      ]);
      era.println();
      await era.printAndWait(
        '아래를 내려다보니 평소처럼 눈에 띄는 가슴과 비정상적으로 부푼 배가 보였다.',
      );
      await era.printAndWait('탁자 위에는 빈 병 하나가 놓여 있었다.');
      era.println();
      await you.say_and_wait('……다이와……');
      await daiwa.say_and_wait([
        '히익! 죄, 죄송해요, ',
        callname,
        '! 저…… 너무 심하게 해버렸어요…… 윽……',
      ]);
      await you.say_and_wait('그래 그래, 알았어. 괜찮아, 괜찮아.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 사과하는 ',
        daiwa.get_colored_name(),
        '을(를) 품에 안고 머리를 쓰다듬었다.',
      ]);
      era.println();
      await daiwa.say_and_wait('하지만, 하지만…… 호, 혹시 아이가 생겼다면……');
      await you.say_and_wait('응, 마신 건 한 병뿐이지?');
      await daiwa.say_and_wait('네, 네……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 침대에서 내려와 빈 병의 라벨을 확인했다. 응, 역시 그렇다.',
      ]);
      era.println();
      if (era.get('status:9:弗隆K')) {
        await you.say_and_wait('자, 다이와. 여기 제대로 읽어봐.');
        await daiwa.say_and_wait('여기요?');
        await you.say_and_wait(
          '제대로 적혀 있잖아? 이 약으로 생긴 남성기와 매우 닮은 기관에는 생식 능력이 없다고.',
        );
        await daiwa.say_and_wait(
          '……네? 어? 그럼 당신 뱃속에 있는 건 뭔가요?',
        );
        await you.say_and_wait(
          '음——아마 정장액일 거야. 정액의 성분은 정자만 있는 게 아니니까. 정장액은 투명한 액체고, 정자가 있었다면 이건 하얗게 탁해졌을 거야. 그러니까 다이와는 걱정하지 않아도 돼, 아이는 생기지 않아…… 우왓!?',
        );
        era.println();
        await era.printAndWait([
          '거기까지 말했을 때 다이와가 갑자기 ',
          you.get_colored_name(),
          '을(를) 밀어 넘어뜨렸다.',
          you.get_colored_name(),
          '의 냄새에 취한 것인지도 모른다. 그녀도 상당히 많이 들이마셨다.',
        ]);
        era.println();
        await daiwa.say_and_wait(
          '그렇군요…… 즉, SEX를 해도 아이는 생기지 않는다는 거죠?',
        );
        await you.say_and_wait('아…… 응, 그래.');
      } else {
        await you.say_and_wait(
          '괜찮아, 다이와. 반드시 임신하는 건 아니니까.',
        );
        await you.say_and_wait('그리고 다이와의 아이를 갖는 거라면 대환영이야~');
        await daiwa.say_and_wait([callname, '……']);
        await you.say_and_wait('그러니까, 이리 와.');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 누워 두 팔을 벌렸다.',
        ]);
        await era.printAndWait([
          daiwa.get_colored_name(),
          '의 얼굴이 다시 육식동물 같은 표정으로 변했다.',
        ]);
        era.println();
        await daiwa.say_and_wait('……');
      }
      await daiwa.say_and_wait([
        '……',
        callname,
        ', 지금의 저한테 안 된다고 해도 멈추지 않을 거예요?',
      ]);
      await you.say_and_wait(
        '……응, 알아. 내가 제일 좋아하는 다이와니까.',
      );
      await daiwa.say_and_wait('~~~!');
      era.println();
      await era.printAndWait([
        '그날, ',
        you.get_colored_name(),
        '은(는) 자신이 몇 번 기절하고 몇 번 깨어났는지 기억하지 못했다. 다만 당시 떠올린 단 하나의 감상만은 기억한다. 사춘기의 성욕은 무섭다는 것.',
      ]);
    };
    f.title = '「컨디션 난조」인 트레이너……와 사랑하는 다이와';
    return f;
  })(),

  // [번역 완료] ts_start
  ts_start: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} daiwa
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (daiwa, you, callname) => {
      await era.printAndWait(
        '아침부터 왠지 몸이 뜨거웠다. 그렇다고 열이 나는 것도 아니어서 신경 쓰지 않았다.',
      );
      await era.printAndWait('기분 탓이겠지?');
      await era.printAndWait('——그렇게 생각했는데……');
      await you.say_and_wait('……이상하네…… 아침에는 아무렇지도 않았는데……');
      await era.printAndWait(
        '——갑자기 몸 상태가 무너졌다. 온몸이 뜨겁고, 심장은 멈출 기미도 없이 뛰고 있다……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 트레이너실 소파에 앉아 가슴 쪽 단추를 풀었다.',
      ]);
      await era.printAndWait(
        '배 깊숙한 곳이 묘하게 욱신거린다. 지금 당장 옷을 전부 벗고 밖을 뛰어다니고 싶다——그런, 제정신이 아닌 기분이었다.',
      );
      era.println();
      await daiwa.say_and_wait(['안녕하세요, ', callname, '.']);
      era.println();
      await era.printAndWait([
        '어느새 ',
        daiwa.get_colored_name(),
        '이(가) 얼굴을 비출 시간이 되어 있었다.',
      ]);
      era.println();
      await you.say_and_wait('아…… 응…… 안녕…… 다이와……');
      await daiwa.say_and_wait('……');
      era.println();
      await era.printAndWait('툭, 하고 다이와의 가방이 바닥에 떨어졌다.');
      await era.printAndWait('아, 그러고 보니 지금 차림은 좀……');
      era.println();
      await daiwa.say_and_wait([callname, '……?']);
      await you.say_and_wait('아…… 잠깐만……');
      era.println();
      await era.printAndWait([
        '머리로는 빨리 옷매무새를 정리해야 한다는 걸 아는데도 단추가 좀처럼 잠기지 않았다. 한참을 버벅인 끝에 눈앞에 ',
        daiwa.get_colored_name(),
        '의 얼굴이 와 있었다.',
      ]);
      era.println();
      await you.say_and_wait('……? 왜 그래?');
      await daiwa.say_and_wait(
        '당신…… 아침부터 계속 그런 냄새를 풍기고 계셨던 건가요?',
      );
      await you.say_and_wait('……냄새?');
      era.println();
      await era.printAndWait([
        '그러고 보니 오늘은 계속 달콤한 냄새가 달라붙어 있는 느낌이다. 게다가 ',
        daiwa.get_colored_name(),
        '의 얼굴을 보고 있으면 이유도 없이 만지고 싶어진다.',
      ]);
      era.println();
      await era.printAndWait([
        '그렇게 생각한 다음 순간, ',
        daiwa.get_colored_name(),
        '은(는) 갑자기 ',
        you.get_colored_name(),
        '을(를) 번쩍 안아 올렸다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 반사적으로 그녀의 목에 팔을 둘렀다. 올려다보니 그 얼굴은 육식동물 같기도 하고 먹잇감을 발견한 사냥꾼 같기도 했다.',
      ]);
      await you.say_and_wait(
        '이래선 내가 먹잇감이다. 당장이라도 잡아먹힐 것 같은 가엾은 어린 양……',
        true,
      );
      await era.printAndWait([
        '하지만 지금의 ',
        you.get_colored_name(),
        '은(는) 그래도 상관없다고 생각했다.',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 얼굴을 그녀의 목덜미에 가져다 대고 뺨을 비비며 체향을 들이마셨다. 시야 끝에 왜 샀는지도 모르는 작은 병이 테이블 그늘에 놓여 있는 것이 스쳤다.',
      ]);
      await you.say_and_wait('이제…… 아무것도 기억나지 않아……', true);
      await era.printAndWait(
        '목덜미에서 풍기는 그녀의 냄새와 아까보다 짙어진 달콤한 향이 콧속을 자극한다……',
      );
    };
    f.title = '트레이너의 컨디션 난조!?';
    return f;
  })(),
};
