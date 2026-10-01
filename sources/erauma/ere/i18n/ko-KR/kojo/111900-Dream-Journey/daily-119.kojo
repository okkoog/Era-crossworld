# @file ドリームジャーニー - 日常
# @author 幽白書
# @author Claude (翻訳)
select_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？%CALLNAME%……怖くないのですか？たとえば、前のことが、また起きても。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ふふ。あなたは、本当に優しい人ですね。」

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
            - 「%CALLNAME%……お仕事は忙しいでしょうが、休みも忘れないでください。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私たちの『旅』は、まだ長いのですから。」
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、今日はあまり元気がなさそうですね……よければ、お仕事も手伝わせてください？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……では、せめてコーヒーを淹れましょうか？」
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - %CHARA% は何も言わず、ただ優しく %YOU% をマッサージする。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あなたの苦労を、すべて分け負うことはできません……でも、癒す機会だけは、私にください。」
    # 体力が高い
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME% は、今日もお元気ですね。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日の『旅』も、きっと風もなく雨もないでしょう。」
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お待たせしました、%CALLNAME%……ふふ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「笑顔が……可愛い、ですか？……%CALLNAME% が喜ぶなら、もう少し、笑ってみますね。」

good_morning_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしました、%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「顔色が、よくありませんね……もしかして、外に出ない時間が長すぎて、外の世界が怖くなってしまったのですか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫、大丈夫……私のそばにいれば……怖いことなんて、ありません……」

end_talk:
  # FLAGNAME:36 = 変態行為
  - if: era.get('flag:36') === 0
    lines:
      - if: era.get('love:119') < 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 이제 아시겠나요? 이것이 맹신이 낳은 결과랍니다…… 푹 쉬세요, 모든 건 제가 다 알아서 처리해 두고 당신이 돌아오길 기다릴 테니까요.」
      - if: era.get('love:119') >= 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 이제 아시겠나요? 이것이 맹신이 낳은 결과랍니다…… 하지만, 당신이 이대로 포기할 리 없겠죠? 환영 파티를 준비해 두었으니, 언제든 돌아오시는 걸 환영할게요.」
