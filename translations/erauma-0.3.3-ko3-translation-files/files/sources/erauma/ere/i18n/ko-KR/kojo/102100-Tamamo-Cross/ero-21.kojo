# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/102100-Tamamo-Cross/ero-21.kojo
# @file タマモクロス - 調教
# @author 雞雞
tied_heart:
  # 검토 보류: 본문 미복제. HELD_LOCATIONS.md 참조.
  sync: true
  lines: []

# [번역 대상] mark_pleasure — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
mark_pleasure:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ちょ、ちょっと待って、体……体が熱い……変や……」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……はぁ……あの……もう一回……してもええか？」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ちびども、ごめんやで。わし、もうこの人から離れられへんらしい……」
      - %CHARA% の体は、完全に堕ちた。

# [번역 대상] mark_meek — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
mark_meek:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はぁ……はぁ……」
      - %CHARA% の上気した顔が近づき、背中をいくつかの快感が這うのが分かる……
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME% が喜んでくれるんやったら、わしも嬉しいし……」
      - %CHARA% は貧しい体を寄せて、ゆっくりと下へ移動し、
      - 胸、脇腹、太もも、そして快感を感じさせるあらゆる場所を行き来して擦りつける。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やから……%CALLNAME% の好きなところ、もっと教えてくれへんか……？」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なあ、次はわしに何させたいん？何したらええん？」
      - %CHARA% の柔らかい脚が、生き物のように %YOU% の腰に絡みつく。
      - %SEX%の両脚はゆっくりと、慌てず、だが獲物がちょうど逃げられない力で、%YOU% の下半身を擦り続ける……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今やったら、わしに何したってもええで❤️」

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

# [번역 대상] mark_hate — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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
          - 「金出したからって、わしを玩具みたいに好き勝手できる思うなよ！」
      - %CHARA% の冷たい視線の奥に、怒りが滲んでいる。
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「참말로 몬된 어른이네……」
      - %CHARA% の冷たい瞳には何もなく、%YOU% の姿は %CHARA% の目にまったく映っていない。
      - 타마모 크로스는 입술을 한번 다시더니, 못 이기는 척 두 팔로 %당신%의 목을 감싸 안으며 깊은 입맞춤을 받아들였다.
