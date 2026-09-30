good_morning:
  sync: true
  lines:
    # 체력 수치 낮음
    - random: true
      if: era.get('base:0:체력') < era.get('maxbase:0:체력') * 0.45
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「%호칭%…… 아무리 일이 바쁘더라도, 휴식하는 것을 잊지 마세요.」
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「잊지 마세요, 우리의 『여정』은 아직 꽤나 길게 남아있다는 것을요.」
    - random: true
      if: era.get('base:0:체력') < era.get('maxbase:0:체력') * 0.45
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「%호칭%, 오늘은 안색이 별로 안 좋아 보이네요…… 필요하시다면, 일하는 걸 제가 조금 도와드려도 될까요?」
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「……그럼, 적어도 커피라도 한 잔 타드릴게요.」
    - random: true
      if: era.get('base:0:체력') < era.get('maxbase:0:체력') * 0.45
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「%호칭%……」
        - content:
            - color: %대표색%
              fontWeight: bold
              content: 드림 저니
            - ' 아무 말 없이 그저 다정하게 %당신%에게 마사지를 해주고 있다.'
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「당신의 수고를 제가 온전히 나누어 짊어질 수는 없겠지만…… 적어도 당신을 치유할 기회는 제게 주세요.」
    # 체력 수치 높음
    - random: true
      if: era.get('base:0:체력') >= era.get('maxbase:0:체력') * 0.45
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「%호칭%, 오늘 컨디션도 좋아 보이시네요.」
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「오늘의 『여정』도, 분명 비바람 하나 없이 평온하겠죠.」
    - random: true
      if: era.get('base:0:체력') >= era.get('maxbase:0:체력') * 0.45
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「오래 기다리셨죠, %호칭%…… 후후.」
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 드림 저니
            - 「웃는 얼굴이…… 귀엽다고요? ……%호칭%께서 좋아하신다면, 앞으로는 조금 더 많이 웃도록 노력해 볼게요.」

end_talk:
  - if: era.get('flag:변태행위') === 0
    lines:
      - if: era.get('love:119') < 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 드림 저니
          - 「%호칭%, 이제 아시겠나요? 이것이 맹신이 낳은 결과랍니다…… 푹 쉬세요, 모든 건 제가 다 알아서 처리해 두고 당신이 돌아오길 기다릴 테니까요.」
      - if: era.get('love:119') >= 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 드림 저니
          - 「%호칭%, 이제 아시겠나요? 이것이 맹신이 낳은 결과랍니다…… 하지만, 당신이 이대로 포기할 리 없겠죠? 환영 파티를 준비해 두었으니, 언제든 돌아오시는 걸 환영할게요.」