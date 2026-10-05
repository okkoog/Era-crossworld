# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 완료] npc_bye
npc_bye:
  - if: d.nothing
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「불 쾌! 나를 심심풀이로 삼지 마세요!」
  - if: '!d.nothing'
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「재 회! 일, 열심히 하세요!」

# [번역 완료] npc_sex
npc_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「수 줍! 그럼 오늘 밤, 당신 집에서 만나요!」


# [번역 완료] npc_talk
npc_talk:
  # 失望
  - if: (t = era.get('relation:302:0')) <= -100
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「냉 담! 나를 만나러 올 틈이 있으면, 먼저 자기 일을 하세요!」
  # 疑念
  - if: t > -100 && t <= 0
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「불 쾌! 별로 만나고 싶지 않아요!」
  # 冷淡
  - if: t > 0 && t <= 75
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「기 괴! 트레이너, 나한테 무슨 볼일인가요?」
  # 良好
  - if: t > 75 && t <= 150
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「인 사! 오늘은 순조로운가요?」
  # 熱意
  - if: t > 150 && t <= 225
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「칭 찬! 당신도 전설의 반열에 올랐군요!」
  # 好意
  - if: t > 225 && t <= 375
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「환 영! 곤란한 일이 있으면 나를 의지하세요!」
  # 親密
  - if: t > 375 && t <= 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「기 쁨! 한가하면 이야기하러 오세요!」
  # 不変
  - if: t > 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「당신이라면…… 환 청! 아무것도 듣지 않았어요!」

