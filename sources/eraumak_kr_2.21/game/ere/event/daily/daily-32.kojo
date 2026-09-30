end_talk:
  - if: era.get('flag:변태행위') === 0
    lines:
      - if: era.get('cflag:32:육성용변수')?.plan_b === undefined && era.get('love:32') < 75 && era.get('cflag:32:육성횟수') === 0
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「지루한 모르모트군…… 하지만 다음에 또 무언가 저지를 생각이라면 나를 찾아오게나. 그 눈동자를 봐서라도 말이지.」
      - if: era.get('cflag:32:육성용변수')?.plan_b === 0
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「나를 이 길로 유혹해 놓고는 홀로 떠나버리는 건가? 극한의 저편은 결국 고독한 길일 수밖에 없나 보군.」
      - if: era.get('cflag:32:육성용변수')?.plan_b === 1
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「자네에게 교훈이 되었겠군. 다음에는 기억하게나, 더 이상 무능한 자에게 얽매이지 말라는 것을…… %그녀%의 앞날에 대해서는, 자네의 몫까지 내가 지켜봐 주도록 하지.」
      - if: era.get('love:32') >= 75
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「이 실험이 모두 끝난 후에 자네를 찾아가겠네. 그때까지는 내가 자네에게 주는 긴 휴가라고 생각하게나.」
      - if: era.get('cflag:32:육성횟수') > 0
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「이런이런, 이번에는 제대로 선을 넘어버린 모양이군, %호칭%…… 다음에는 조금 더 조심하게나.」
  - if: era.get('flag:변태행위') > 0
    lines:
      - if: era.get('cflag:32:육성용변수')?.plan_b === undefined && era.get('love:32') < 75 && era.get('cflag:32:육성횟수') === 0
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「하반신에 지배당한 건가? 우스운 이유로군…… 하지만 다음에 또 무언가 저지를 생각이라면 나를 찾아오게나. 그 눈동자를 봐서라도 말이지.」
      - if: era.get('cflag:32:육성용변수')?.plan_b === 0
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「가능성의 저편으로 향하는 꿈조차 자네의 시야를 완전히 채울 수는 없었던 건가? 멍청이가 아니라면, 아마 전례 없는 야심가라고 불러야겠군.」
      - if: era.get('cflag:32:육성용변수')?.plan_b === 1
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「꿈이 깨진 뒤의 자포자기인가? 아니면, 앞길이 막막해진 우마무스메를 떼어내기 위한 미봉책일 뿐인가?」
      - if: era.get('love:32') >= 75
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「미안 미안, %호칭%, 아무래도 우리가 조금 과하게 놀아버린 모양이군…… 다음에는 좀 더 신중해지자고.」
      - if: era.get('cflag:32:육성횟수') > 0
        random: true
        lines:
          - color: %대표색%
            content:
              - fontWeight: bold
                content: 아그네스 타키온
              - 「이런이런, 이번에는 제대로 선을 넘어버린 모양이군, %호칭%…… 다음에는 조금 더 조심하게나.」