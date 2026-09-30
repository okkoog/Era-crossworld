赛前:
  - if: "!d.item"
    lines:
      # @author 雞雞
      - if: "!d.do_sex"
        lines:
          - random: true
            lines:
              - 「최선을 다해!」
          - random: true
            lines:
              - 「네 기세를 마음껏 발휘해!」
      # @author 幽白書
      - if: d.do_sex
        lines:
          - 다른 트레이너들이 자신의 담당 %UMA%에게 마지막 당부를 하고 있을 때, %YOU%은(는) %CHARA%의 육봉을 입에 머금고 애무하고 있었다.
          - if: era.get('flag:징벌강도') === 2
            content: 레이스 전의 뜨거운 분위기에 심취한 %CHARA%의 단단해진 하반신을 달래주는 것은, 성노예인 %YOU%의 빼놓을 수 없는 책무이기도 했다.
          - if: era.get('flag:징벌강도') === 3
            content: 레이스 전의 뜨거운 분위기에 심취한 %CHARA%의 단단해진 하반신을 달래주는 것은, 임신 주머니인 %YOU%의 빼놓을 수 없는 책무이기도 했다.
          - 모든 정액을 입안으로 삼킨 후, %YOU%은(는) 무사히 레이스를 마치기를 기원하며 %CHARA%의 육봉에 축복의 키스를 올렸다.
  # @author 黑奴队长
  - if: d.item > 0
    lines:
      - %YOU%은(는) %CHARA%에게 직접 「특수 장비」를 장착시켜 주었다.
      - if: d.item === 4
        content: %CHARA%은(는) 애교 섞인 눈흘김으로 %YOU%을(를) 한 번 쳐다보고는, 둘만의 작은 비밀을 옷 아래 숨긴 채 출발선을 향해 걸어갔다……
      - if: d.item === 3
        content: %CHARA%은(는) 얌전히 옷을 입었고, 아랫배 쪽에 옷을 투과하는 분홍빛이 매혹적인 눈빛과 어우러졌다……
      - if: d.item === 2
        content: %CHARA%은(는) 장난감이 몸에 더 잘 고정되도록 천천히 옷을 챙겨 입었다……
      - if: d.item === 1
        content: %CHARA%은(는) 슬쩍 시선을 올려 %YOU%의 표정을 살핀 뒤, 고개를 숙이고 묵묵히 자극을 견뎌냈다……