# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/av-sister/daily.kojo
# @file アドマイヤヒコボシ - 日常（仮）
# <br>設定は織姫の妹であり、最初の産駒<br>
# 日常イベント口上のサンプル<br>
# 差し替え歓迎
# @author 黒奴隊長
# @author Claude (翻訳)
# [번역 대상] select — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
select:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日もよろしくね、%ELDER_BROTHER%……あ、こっちだ。%DAD%～❤️」
