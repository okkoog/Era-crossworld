# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file タマモクロス - 調教
# @author 雞雞
tied_heart:
  title: 묶인 마음
  lines:
    # 트레이너실 내부
    # 이벤트명: 묶인 마음
    # 트리거: 연모 상태 이후 무작위 발생
    - 아무것도 보이지 않는다…… 반쯤 감긴 눈꺼풀 너머로 빛이 눈동자에 닿는 감각만 느껴진다.
    - 눈이 말라간다. %CHARA%는 몇 번이고 눈을 깜빡여 눈물로 적셨다.
    - %TEEN%는 천천히 의식을 되찾고, 고향보다도 익숙한 트레이너실 소파에 축 늘어진 채 앉아 있는 자신을 깨달았다.
    - %CHARA%는 두 손을 바라보았다. 양손은 각각 튼튼한 쇠고리로 이어져 있어 팔을 자유롭게 뻗을 수 없었다.
    - 낯선 장소에 묶여 있는 건 아니라는 사실에 %SEX%는 조금 안도했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「뭐고 이거——!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이런 츳코미가 듣고 싶었던 거제? 그럼 얼른 수갑 풀어라——」
    - %SEX%의 시선은 옆에서 재미있다는 듯 이 비참한 모습을 구경하는 %YOU%에게 향했다.
    - acc: 1
      content: 「그건 안 되지. 요즘 타마가 말을 안 듣는 탓에……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그런 거 아이다, 헛소리 하지 마라!」
    - %YOU%은 몸을 가까이 기울여 얼굴을 %CHARA% 바로 앞까지 들이밀었다.
    - %YOU%의 뜨거운 숨결이 그녀의 피부에 닿자, %SEX%도 무심코 숨을 깊게 들이마셨다.
    - acc: 1
      content: 「왜냐면 타마는 맨날 날 유혹하는 듯한 얼굴을 하고 있잖아……」
    -
    - acc: 1
      content: 「달릴 때는 열심히 엉덩이를 흔들어 보여주고, 운동 후엔 몸을 바짝 붙여 암컷 냄새를 자랑하고…… 내가 얼마나 참고 있는지 알아?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그게 내랑 무슨 상관인데…… 니 취향이 이상한 거 아이가, 로리콘!」
    - %SEX%는 새빨개진 얼굴로 쏘아붙였다. 하지만 스포츠 브라 아래의 앙증맞은 유두는 제멋대로 단단해지고, 아랫배까지 뜨거워지고 있었다.
    - %YOU%은 윗입술을 핥으며 %CHARA%를 소파에 밀어 눕히고, 상대의 두 팔 사이로 머리를 집어넣었다.
    - acc: 1
      content: 「그럼 날 밀쳐내 봐.」
    - 지금 %CHARA%는 두 손이 수갑으로 묶여 있을 뿐이다. %UMA%의 신체 능력이라면 다리로 저항하거나 도망치는 건 어렵지 않을 터……
    - if: era.get('relation:21:0') > 225
      content:
        - %CHARA%는 입을 열려 했지만 적당한 말을 찾지 못한 채 그대로 두 팔로 %YOU%의 목을 끌어안았고, 둘은 깊은 입맞춤에 빠져들었다.
    - if: era.get('relation:21:0') <= 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「참말로, 지독한 어른이구만……」
        - %CHARA%는 혀를 차고는 내키지 않는 듯 두 팔로 %YOU%의 목을 끌어안아 깊은 입맞춤을 받아들였다.

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
