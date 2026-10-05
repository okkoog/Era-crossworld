# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ja-JP/kojo/900400-Kiryuin-Aoi/daily-304.kojo
# @file 桐生院葵 - 日常
# @author 黑奴队长（临时）
# @author Claude (翻訳)
# [번역 대상] npc_talk_about_meek_in_edu — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: %YOU% は %CHARA% としばらく話し合い、%H_NAME% への理解を深めた。
  - if: '!d.debuff'
    content: %CHARA% は、もう %YOU% に伝える新しい情報はないと言う。

# [번역 대상] npc_talk_about_meek — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
npc_talk_about_meek:
  - %CHARA% は、特に変わったことはないと言う。
  - ただ、もし %YOU% が%H_UMA%に二度目の機会を与える方法を見つけたら、どうか %H_NAME% の悔いを晴らしてほしい、と付け加えた。
