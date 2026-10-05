# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/111900-Dream-Journey/daily-119.kojo
# @file ドリームジャーニー - 日常
# @author 幽白書
# @author Claude (翻訳)
# [번역 대상] select_after_basement — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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

# [번역 대상] good_morning — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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
            - 「잊지 마세요, 우리의 『여정』은 아직 꽤나 길게 남아있다는 것을요.」
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
            - 「……그럼, 적어도 커피라도 한 잔 타드릴게요.」
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
            - 「당신의 수고를 제가 온전히 나누어 짊어질 수는 없겠지만…… 적어도 당신을 치유할 기회는 제게 주세요.」
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
            - 「오늘의 『여정』도, 분명 비바람 하나 없이 평온하겠죠.」
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

# [번역 대상] good_morning_after_basement — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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

# [번역 대상] end_talk — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
end_talk:
  # FLAGNAME:36 = 変態行為
  - if: era.get('flag:36') === 0
    lines:
      - if: era.get('love:119') < 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、わかりましたか？これが盲信の結末です……ゆっくり休んでください。戻るまで、私があとのことは整えておきます。」
      - if: era.get('love:119') >= 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、わかりましたか？これが盲信の結末です……でも、あなたはここで諦めたりしないでしょう？おもてなしは用意してあります。いつでも、お帰りを待っています。」
