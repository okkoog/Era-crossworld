# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file タマモクロス - 調教
# @author 雞雞
tied_heart:
  title: 縛られた心
  lines:
    #トレーナー室内
    #イベント名：縛られた心
    #トリガー：恋慕状態後にランダム発生
    - 何も見えない……半ば閉じた瞼の外から、光が瞳に入る感触だけがある。
    - 目が乾く。%CHARA%は何度も瞬き、涙で潤す。
    - %TEEN%はゆっくりと意識を取り戻し、故郷より馴染み深いトレーナー室のソファに、ぐったり座っている自分に気づく。
    - %CHARA%は両手を見る。左右それぞれ、頑丈な鉄輪で繋がれ、腕を自由に伸ばせない。
    - 見知らぬ場所に縛られたわけではないという事実に、%SEX%はいくらか安心した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんやこれ——！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんな突っ込みが欲しかったんやろ？ほな、さっさと手錠外して——」
    - %SEX%の視線は、隣で面白そうにこの惨めな姿を鑑賞している%YOU%へ漂う。
    - acc: 1
      content: 「それはあかん。最近のタマ、言うこと聞かんさかい……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなことないわ、でたらめ言うな！」
    - %YOU%は身を寄せ、顔を%CHARA%の眼前まで近づける。
    - %YOU%の熱い息が少女の肌に当たり、%SEX%も思わず呼吸を深くした。
    - acc: 1
      content: 「だってタマ、いつも俺を誘うような顔してるやろ……」
    -
    - acc: 1
      content: 「走ってるとき、一生懸命お尻を振って見せて、運動のあとは体をくっつけて雌の匂いを自慢する……俺がどれだけ我慢してるか、分かるか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それがわしと何の関係が……あんた自身の悪趣味やろ、ロリコン！」
    - %SEX%は真っ赤になって言い返す。だがスポーツブラの下の可憐な乳首は、勝手に勃起し、下腹まで熱くなっていた。
    - %YOU%は上唇を舐め、%CHARA%をソファに押し倒し、相手の両腕のあいだから頭を通す。
    - acc: 1
      content: 「ほんなら、俺を押しのけてみろ。」
    - いまの%CHARA%は両手を手錠で繋がれているだけだ。%UMA%の身体能力なら、脚で抵抗するのも、逃げ出すのも造作ないはず……
    - if: era.get('relation:21:0') > 225
      content:
        - %CHARA%は口を開こうとして、適切な言葉が見つからず、そのまま両腕で%YOU%の首を抱き、二人は深い接吻に沈んだ。
    - if: era.get('relation:21:0') <= 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほんま、えげつない大人やな……」
        - %CHARA%は舌打ちし、気が進まなそうに両腕で%YOU%の首を抱き、深い接吻を迎えた。

# [번역 완료] mark_pleasure
mark_pleasure:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「자, 잠깐만, 몸이…… 몸이 뜨겁다…… 이상하데이……」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……하아…… 저기…… 한 번만 더…… 해도 되나?」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「꼬맹이들아, 미안하데이. 내는 이제 이 사람한테서 못 떨어지겠는갑다……」
      - %CHARA%의 몸은 완전히 타락했다.

# [번역 완료] mark_meek
mark_meek:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「하아…… 하아……」
      - 상기된 %CHARA%의 얼굴이 가까워지고, 등을 따라 몇 줄기의 쾌감이 기어가는 것이 느껴진다……
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%가 좋아해 준다믄, 내도 기쁘고……」
      - %CHARA%는 빈약한 몸을 바짝 붙인 채 천천히 아래로 내려가며,
      - 가슴, 옆구리, 허벅지, 그리고 쾌감을 느끼게 하는 모든 곳을 오가며 몸을 비빈다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그러니까…… %CALLNAME%가 좋아하는 데, 더 알려주면 안 되나……?」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「있제, 다음엔 내한테 뭐 시키고 싶노? 뭐 하면 되노?」
      - %CHARA%의 부드러운 다리가 살아 있는 것처럼 %YOU%의 허리에 감겨 든다.
      - %SEX%의 두 다리는 천천히, 서두르지 않으면서도 먹잇감이 빠져나가지 못할 정도의 힘으로 %YOU%의 하반신을 계속 비빈다……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「지금은 내한테 뭘 해도 괜찮데이❤️」

mark_pain:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「이기 도대체 무슨 일이고——!」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「니 요런 츳코미가 듣고 싶어서 이카는 거제? 됐다 마, 퍼뜩 수갑이나 풀어줘라——」
  - if: d.level === 3
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「내가 언제 그랬노! 니 생사람 잡지 마라!」

mark_shame:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그게 내랑 무슨 상관이고…… 그냥 니 악취미 아이가, 이 썩을 로리콘 자슥아!」

# [번역 완료] mark_hate
mark_hate:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 타마모 크로스는 입을 열어 무어라 말하려 했으나 적당한 단어를 찾지 못했다. 결국 %그녀%는 두 팔로 %당신%의 목을 감싸 안았고, 두 사람은 그대로 깊은 입맞춤 속에 빠져들었다.
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「돈 냈다고 내를 장난감처럼 맘대로 할 수 있다 생각하지 마라!」
      - %CHARA%의 차가운 시선 깊숙이 분노가 배어 있다.
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「참말로 몬된 어른이네……」
      - %CHARA%의 차가운 눈동자에는 아무것도 없고, %YOU%의 모습은 %CHARA%의 눈에 전혀 비치지 않는다.
      - 타마모 크로스는 입술을 한번 다시더니, 못 이기는 척 두 팔로 %당신%의 목을 감싸 안으며 깊은 입맞춤을 받아들였다.
