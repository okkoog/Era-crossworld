# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file 사타케 메이 - 모집
# @author 黑奴队长（临时）
# @author Claude (翻訳)

# @author 黑奴队长
# [번역 완료] welcome
welcome:
  title: 개선문상 계획
  lines:
    # A_NAME = 秋川やよい
    - 이번 주 첫 출근일, %YOU%은(는) 학원에서 %A_NAME%를 만났다. %SEX%의 곁에는 노란 모자를 쓴 %PHY%가 한 명 따라붙어 있었다.
    - if: d.who_am_i > 0
      lines:
        - %YOU%은(는) 그 사람이 이전부터 알고 지내던 %CHARA%임을 알아차렸다.
        - 알고 있듯이 %CHARA%의 주된 일은 해외 원정을 보조하는 것이다.
    - if: d.who_am_i === 0
      content: %YOU%이(가) 인사를 건네자 %A_NAME%가 소개해 주었다. 이 %PHY%의 이름은 %CHARA_ACTUAL%. 오랫동안 해외 원정 보조를 맡아왔다고 한다.
    - %A_NAME%는 %YOU%을(를) 격려했다. 일본 국내에서 정상만 다툴 것이 아니라 시야를 해외의 최정상 레이스로 넓혀, 일본의 경주 %UMA%를 세계로 데려가라고.

# @author 黑奴队长
visit:
  title: 개선문의 꿈
  lines:
    - 해외 대회에서의 %YOU%의 성적이 %CHARA%에게 큰 격려가 된 모양이다.
    - 더 직접적으로 이야기하고 싶다면 응접실로 가서 %SEX%와 이야기해 보자.
