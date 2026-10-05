# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/900400-Kiryuin-Aoi/rec-304.kojo
# @file 桐生院葵 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)
# [번역 대상] intro — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
intro:
  # H_NAME = ハッピーミーク
  - %CHARA% は %YOU% に、担当の%H_UMA% %H_NAME% がいること、素質はかなり良く、まもなく育成が始まることを教えてくれた。
  - よければ、しばらく%H_SEX%のトレーニングを手伝ってみないか。経験にもなるはずだ、とのことだった。

recruit:
  title: 성과
  lines:
    - %H_NAME%가 G1에서 승리한 후, %CHARA%가 %YOU%을(를) 찾아와 훌륭한 성과를 거두었다며 칭찬했다.
    - %CHARA%는 %YOU%과(와) 앞으로도 함께 노력하고 싶다며, %H_NAME%뿐만 아니라 더 많은 %H_UMA%가 승리하여 꿈을 이룰 수 있도록 돕자고 했다.

recruit_hentai:
  title: 「성과」
  lines:
    - %H_NAME%의 육성이 끝난 후, %CHARA%가 %YOU%을(를) 찾아왔다.
    - if: d.meek_pregnant
      lines:
        - %CHARA%는 %YOU%이(가) %H_NAME%를 더럽힌 행위에 대해 극도로 분노했다.
        - 하지만 일이 이렇게 된 이상 %H_NAME%를 위해 %CHARA%도 현실을 받아들일 수밖에 없었다.
        - 하지만 %CHARA%는 절대로 %YOU%을(를) 용서하지 않을 것이다.
    - if: '!d.meek_pregnant && d.meek_love'
      lines:
        - %CHARA%는 순수한 %H_TEEN%의 감정을 이용한 %YOU%을(를) 비난했다.
        - 하지만 %H_NAME%가 %YOU%과(와) 계속 함께하고 싶어 하는 이상 %CHARA%도 더 이상 할 말이 없었다.
        - %CHARA%는 %YOU%이(가) %H_NAME%에게 몹쓸 짓을 하지 않도록 계속 지켜보겠다고 했다.
    - if: '!d.meek_pregnant && !d.meek_love'
      lines:
        - %CHARA%는 진지한 얼굴로 %YOU%이(가) 이렇다 할 성적을 거두지는 못했지만 이 3년 동안 %YOU%도 많이 단련되었을 거라고 말했다.
        - %CHARA%는 %YOU%이(가) 어엿한 트레이너가 되는 그날까지 계속 돕겠다고 했다.
        - 말을 마친 뒤 %CHARA%는 주위에 아무도 없는 틈을 타 %YOU%의 뺨에 입을 맞췄다.
