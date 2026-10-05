# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 완료] ero_start
ero_start:
  - if: era.get('tflag:强奸') === 0 && era.get('love:61') < 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「뭐, 무슨 말을 하는 거예요!」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「꺄아아아아악!」
  - if: era.get('love:61') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「잠깐! 다, 당신, 조금 너무 대담한 것 아니신가요?」
      - 킹 헤일로의 목소리는 한층 높아졌지만, %SEX%의 몸은 거부할 기색을 보이지 않았다.
  - if: era.get('love:61') >= 75
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 그렇게 큰 소리로 말하지 말아 주세요!」
  - if: era.get('love:61') >= 90
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「좋아요, 시작하죠. 일류 %UMA%는 어디서든 일류인 법이니까요!」
