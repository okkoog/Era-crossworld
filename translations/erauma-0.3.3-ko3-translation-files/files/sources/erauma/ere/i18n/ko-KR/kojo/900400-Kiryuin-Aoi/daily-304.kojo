# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 대상] npc_talk_about_meek
npc_talk_about_meek:
  - %CHARA% は、特に変わったことはないと言う。
  - ただ、もし %YOU% が%H_UMA%に二度目の機会を与える方法を見つけたら、どうか %H_NAME% の悔いを晴らしてほしい、と付け加えた。

# [번역 대상] npc_talk_about_meek_in_edu
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: %YOU% は %CHARA% としばらく話し合い、%H_NAME% への理解を深めた。
  - if: '!d.debuff'
    content: %CHARA% は、もう %YOU% に伝える新しい情報はないと言う。

