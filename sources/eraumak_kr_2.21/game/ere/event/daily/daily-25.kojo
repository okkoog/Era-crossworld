end_talk:
  - if: era.get('flag:변태행위') === 0
    lines:
      - if: "!era.get('cflag:32:육성용변수')?.plan_b && era.get('love:25') < 75"
        color: %대표색%
        content:
          - fontWeight: bold
            content: 맨하탄 카페
          - 「그렇게 저에게서, 그리고 그들에게서 멀어지는 것…… 당신에게도 좋은 일이겠죠……」
      - if: era.get('cflag:32:육성용변수')?.plan_b > 0 && era.get('love:25') < 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 맨하탄 카페
          - 「우리의 약속을 무시하고, 번거로운 사람에게 시선을 돌린…… 결과가 바로 이거예요……」
      - if: era.get('love:25') >= 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 맨하탄 카페
          - 「커피 전문점을 차려보는 건 어떨까요……? 모든 게 끝나면, 제가 당신을 찾아갈게요.」
  - if: era.get('flag:변태행위') > 0
    lines:
      - if: "!era.get('cflag:32:육성용변수')?.plan_b && era.get('love:25') < 75"
        color: %대표색%
        content:
          - fontWeight: bold
            content: 맨하탄 카페
          - 「앞으로도 부디 조심하세요…… 그들은, 여전히 당신 곁에 있으니까요……」
      - if: era.get('cflag:32:육성용변수')?.plan_b > 0 && era.get('love:25') < 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 맨하탄 카페
          - 「이걸로 우리의 약속에서 벗어나고 싶은 건가요……? ……당신은 도망칠 수 없어요. 저에게서도, %그녀%에게서도……」
      - if: era.get('love:25') >= 75
        color: %대표색%
        content:
          - fontWeight: bold
            content: 맨하탄 카페
          - 「빈도가, 역시 너무 잦았던 걸까요…… 친구도 그렇게 생각하고 있어요……」