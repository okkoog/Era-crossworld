end_talk:
  - if: era.get('flag:변태행위') === 0
    lines:
      - if: era.get('status:3:다리부상') === 0 && era.get('love:3') < 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 토카이 테이오
          - 「언제부터였을까, 우리의 시선이 어긋나기 시작한 건……」
      - if: era.get('status:3:다리부상') > 0 && era.get('love:3') < 75
        content: 아무 말도 하지 않았다. 토카이 테이오는 그저 마지막으로 %당신%을(를) 한 번 쳐다보았을 뿐이다. 청흑색 눈동자는 눈물로도 씻어낼 수 없을 만큼 탁하게 흐려져 있었다.
      - if: era.get('status:3:다리부상') === 0 && era.get('love:3') >= 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 토카이 테이오
          - 「트레이너…… 아니, 무슨 일이 있어도 난 평생 당신을 그렇게 부를 거야.」
      - if: era.get('status:3:다리부상') > 0 && era.get('love:3') >= 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 토카이 테이오
          - 「결국 우리가 함께 퇴장할 시간이 왔나 봐…… 역시, 조금은 분하네.」
  - if: era.get('flag:변태행위') > 0
    lines:
      - if: era.get('status:3:다리부상') === 0 && era.get('love:3') < 50
        color: %대표색%
        content:
          - fontWeight: bold
            content: 토카이 테이오
          - 「……계약 해지에 동의할게.」
      - if: era.get('status:3:다리부상') === 0 && !d.check && era.get('love:3') >= 50
        color: %대표색%
        content:
          - fontWeight: bold
            content: 토카이 테이오
          - 「이엣—— 드, 들켜버린 거야? 그, 그럼, 앞으로는 우리끼리 몰래……」
      - if: era.get('status:3:다리부상') > 0 && !d.check && era.get('love:3') >= 50
        color: %대표색%
        content:
          - fontWeight: bold
            content: 토카이 테이오
          - 「안 돼, 절대 못 보내. 이렇게 떠나게 두지 않을 거야. 트레이너는 영원히 내 삶과 꿈속에 있어야 해……」
      - if: d.check === 1 && era.get('love:3') >= 50
        color: %대표색%
        content:
          - fontWeight: bold
            content: 토카이 테이오
          - 「설마…… 설마 이런 결말이라니…… 안 돼, 인정 못 해! 당신은 앞으로도 계속 내 곁에 있어야 해. 남들이 뭐라든, 당신은 영원한 나의 트레이너니까!」