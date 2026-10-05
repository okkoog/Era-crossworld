# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file ドリームジャーニー - 日常
# @author 幽白書
# @author Claude (翻訳)
# [번역 완료] select_after_basement
select_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응? %CALLNAME%…… 무섭지 않으신가요? 예를 들어, 예전 일이 또 일어나더라도요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……후후. 당신은 정말 다정한 분이네요.」

# [번역 완료] good_morning
good_morning:
  sync: true
  lines:
    # 体力が低い
    # BASENAME:0 = 体力
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%…… 일이 바쁘시겠지만, 쉬는 것도 잊지 말아 주세요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「잊지 마세요, 우리의 『여정』은 아직 꽤나 길게 남아있다는 것을요.」
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 오늘은 별로 기운이 없어 보이네요…… 괜찮으시다면, 일도 도와드릴까요?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……그럼, 적어도 커피라도 한 잔 타드릴게요.」
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - %CHARA%는 아무 말 없이, 그저 다정하게 %YOU%을(를) 마사지한다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「당신의 수고를 제가 온전히 나누어 짊어질 수는 없겠지만…… 적어도 당신을 치유할 기회는 제게 주세요.」
    # 体力が高い
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%은(는), 오늘도 건강하시네요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오늘의 『여정』도, 분명 비바람 하나 없이 평온하겠죠.」
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「기다리셨죠, %CALLNAME%…… 후후.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「웃는 얼굴이…… 귀엽다고요?…… %CALLNAME%이(가) 기뻐하신다면, 조금 더 웃어볼게요.」

# [번역 완료] good_morning_after_basement
good_morning_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「무슨 일이신가요, %CALLNAME%?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「안색이 좋지 않네요…… 혹시 너무 오래 밖에 나가지 않아서, 바깥세상이 무서워진 건가요?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「괜찮아요, 괜찮아요…… 제 곁에 있으면…… 무서운 일 같은 건 없어요……」

# [번역 완료] end_talk
end_talk:
  # FLAGNAME:36 = 変態行為
  - if: era.get('flag:36') === 0
    lines:
      - if: era.get('love:119') < 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 이제 아시겠나요? 이것이 맹신의 결말이에요…… 푹 쉬세요. 돌아오실 때까지, 나머지는 제가 정리해 둘게요.」
      - if: era.get('love:119') >= 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 이제 아시겠나요? 이것이 맹신의 결말이에요…… 하지만 당신은 여기서 포기하지 않으시겠죠? 대접할 준비는 해두었습니다. 언제든 돌아오시길 기다릴게요.」
