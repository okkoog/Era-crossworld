# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/106100-King-Halo/ero-61.kojo
# @file キングヘイロー - 調教
# @author 牛蛙煲
# @author Claude (翻訳)
# [번역 대상] ero_start — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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
