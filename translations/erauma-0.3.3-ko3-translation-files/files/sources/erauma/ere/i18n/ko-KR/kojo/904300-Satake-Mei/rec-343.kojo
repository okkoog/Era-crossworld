# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/904300-Satake-Mei/rec-343.kojo
# @file 사타케 메이 - 모집
# @author 黑奴队长（临时）
# @author Claude (翻訳)

# @author 黑奴队长
# [번역 대상] welcome — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
welcome:
  title: 凱旋門賞計画
  lines:
    # A_NAME = 秋川やよい
    - 今週最初の出勤日、%YOU% は学園で %A_NAME% に出会った。%SEX%の傍らには、黄色い帽子を被った%PHY%が一人ついている。
    - if: d.who_am_i > 0
      lines:
        - %YOU% は、その人が以前からの知り合い、%CHARA% だと気づいた。
        - 知ってのとおり、%CHARA% の仕事の中心は、海外遠征の補佐だ。
    - if: d.who_am_i === 0
      content: %YOU% が挨拶に出ると、%A_NAME% は紹介してくれた。この%PHY%の名は %CHARA_ACTUAL%。長く海外遠征の補佐を務めている、と。
    - %A_NAME% は %YOU% を励ました。日本国内で頂点を争うだけでなく、視野を海外の先端レースへ広げ、日本の競走%UMA%を世界へ連れていけ、と。

# @author 黑奴队长
visit:
  title: 개선문의 꿈
  lines:
    - 해외 대회에서의 %YOU%의 성적이 %CHARA%에게 큰 격려가 된 모양이다.
    - 더 직접적으로 이야기하고 싶다면 응접실로 가서 %SEX%와 이야기해 보자.
