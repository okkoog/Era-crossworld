# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 대상] ero_start
ero_start:
  - if: era.get('tflag:强奸') === 0 && era.get('love:61') < 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「な、なにを言ってるんですの！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「きゃあああああっ！」
  - if: era.get('love:61') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ちょっと！ あ、あなた、少し大胆すぎませんこと？」
      - キングヘイローの声は一段高くなったが、%SEX%の体は拒む気配を見せなかった。
  - if: era.get('love:61') >= 75
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、そんなに大きな声で言わないでくださいまし！」
  - if: era.get('love:61') >= 90
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「いいですわ、始めましょう。一流の%UMA%は、どこであろうと一流なんですもの！」
