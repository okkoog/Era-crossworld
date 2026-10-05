# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 완료] npc_talk_about_meek
npc_talk_about_meek:
  - %CHARA%은(는) 특별히 달라진 것은 없다고 말했다.
  - 다만 %YOU%이(가) %H_UMA%에게 두 번째 기회를 줄 방법을 찾는다면, 부디 %H_NAME%의 한을 풀어주길 바란다고 덧붙였다.

# [번역 완료] npc_talk_about_meek_in_edu
npc_talk_about_meek_in_edu:
  - if: d.debuff > 0
    content: %YOU%은(는) %CHARA%와(과) 한동안 이야기를 나누며 %H_NAME%에 대한 이해를 깊게 했다.
  - if: '!d.debuff'
    content: %CHARA%은(는) 이제 %YOU%에게 전할 새로운 정보는 없다고 말했다.

