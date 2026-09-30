选中互动角色:
  sync: true
  lines:
    # 奴役
    - if: d.rape === 1
      random: true
      lines:
        - color: %대표색%
          content:
            - fontSize: bold
              content: 원더 어큐트
            - 「후후후~ 오늘도 산책하러 갈 거니? 그렇다면 다른 아이들도 데려갈 거니?」
        - 알몸인 원더 어큐트가 조용히 땅에 엎드려 있다가, %당신%이(가) 다가오자 귀를 좌우로 흔들며 목걸이를 입에 물고 %당신%의 손쪽으로 건넸다.
    # 강간
    - if: d.rape === 2
      random: true
      lines:
        - color: %대표색%
          content:
            - fontSize: bold
              content: 원더 어큐트
            - 「으음… 패자는 승자에게 복종해야 하는 법, 이것이 자연의 이치인 게야.」
        - 그렇게 말하며, 원더 어큐트는 평온한 표정으로 오늘의 목걸이를 스스로 착용했다.
    # 被奴役
    - if: d.rape === 3
      random: true
      lines:
        - color: %대표색%
          content:
            - fontSize: bold
              content: 원더 어큐트
            - 「어라라…… 참아내야지? %호칭%~」
        - %당신%의 달아오른 하복부를 누르며 때때로 아래로 탐색하는 원더 어큐트의 얼굴에는 의미심장한 미소가 번진다.
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「어머어머……%호칭%~ 다른 젊고 귀여운 착한 아이들과 수다 떨러 가지 않는게냐?」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「좋은 아침이구나, 아침은 먹었니? 아침은 꼭 먹어야 한단다.」
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「아직 안 먹었다면, 낫토 비빔밥이나 죽에 무말랭이를 곁들인 걸 추천하마~ 몸에 정말 좋을게야.」

回合开始:
  sync: true
  lines:
    # 奴役
    - if: d.rape === 1
      random: true
      lines:
        - color: %대표색%
          content:
            - fontSize: bold
              content: 원더 어큐트
            - 「실내, 옥상, 역, 아니면 훈련장, 어디든 상관없단다?」
        - color: %대표색%
          content:
            - fontSize: bold
              content: 원더 어큐트
            - 「다른 아이들이 필요하다면, 나도 도와줄 수 있단다. 다른 아이들에겐 처음엔 조금 아플 수도 있겠지만, 조금만 다정하게 대해준다면 %여자아이%도 본능적으로 %호칭%의 매력을 이해하게 될 거란다.」
    # 강간
    - if: d.rape === 2
      random: true
      lines:
        - color: %대표색%
        - content:
            - fontSize: bold
              content: 원더 어큐트
            - 「후후~ 이번에는 그렇게 쉽게 %당신%한테 깔리진 않을 거란다? 주먹 실력에는 꽤 자신 있거든.」
    # 被奴役
    - if: d.rape === 3
      random: true
      lines:
        - color: %대표색%
        - content:
            - fontSize: bold
              content: 원더 어큐트
            - 「오늘의 무말랭이는 이미 준비해서 냉장고에 넣어뒀단다. 제시간에 꼭 먹으렴? 또 영양실조로 탈수되어 기절해버리면 안 되니까, %호칭%❤️~」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「아이고…… 정말 열심히 일하고 있구먼~ 방금 절인 설탕 토마토 좀 먹어볼련? 당분을 충분히 보충하면 오후 훈련도 기운 나게 할 수 있을 거란다.」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「%호칭%, 입은 옷이 참 얇은 것 같구먼…… 가을이 되면 옷을 좀 더 껴입어야 한단다. 너무 얇게 입고 감기에 걸리면 정말 괴로울 게야.」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「훈련이 끝나면, 무말랭이를 좀 만들어 볼까 한단다. 내일 %호칭%이 무말랭이를 다른 착한 친구들에게 나눠주면서 사이가 더 좋아질 수 있지 않겠니?」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「어머나…… 정말 활기차 보이는구먼. %호칭%, 무슨 좋은 일이라도 있는게냐? 후후후…… 그럼 팥밥을 준비해 줘야겠구먼~」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「어머나…… 정말 활기차 보이는구먼. %호칭%, 무슨 좋은 일이라도 있는게냐? 후후후…… 그럼 설탕에 절인 토마토를 준비해 줘야겠구먼~」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「어머나…… 정말 활기차 보이는구먼. %호칭%, 무슨 좋은 일이라도 있는게냐? 후후후…… 그럼 당근 토마토 샐러드를 준비해 줘야겠구먼~」
    - random: true
      lines:
        - color: %대표색%
          content:
            - fontWeight: bold
              content: 원더 어큐트
            - 「어머나…… 정말 활기차 보이는구먼. %호칭%, 무슨 좋은 일이라도 있는게냐? 후후후…… 그럼 잉어 양념조림을 준비해 줘야겠구먼~」

잡담:
  # 奴役
  - if: d.rape === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「어라라…… 오늘도 트레센에서 산책할 거니?」
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「알몸으로 목에 목걸이와 고삐를 매고 공공장소로 산책하러 끌려가면 항상 심장이 두근두근거리는구먼. 역시 이게 젊은이들이 자주 말하는 『로맨스』인 겐가?」
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「근성을 기를 수 있을 뿐만 아니라, 로맨스와 즐거움 같은 것도 느낄 수 있다니. 이렇게 훌륭한 훈련 방법은 널리 알려야겠구먼.」
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「%奇锐骏称呼骏川%나 이사장님 같은 분들은 금방 이 매력에 빠져들 것 같구먼.」
  # 강간
  - if: d.rape === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「어라…… 오늘 햇살 참 기분 좋네, 그렇지 않니? 쌓여 있던 집안일을 한꺼번에 끝내기 딱 좋은 타이밍인게야.」
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「빨래하고, 이불 널고, 무도 말리고…… 으음, 오늘 할 일이 의외로 많구먼.」
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「그래서 말인데, %호칭%. 오늘은 날 강간하면 안 된단다?」
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「다들 훈련할 때 안뜰의 마른 나무 구멍으로 끌려가든, 점심시간에 옥상으로 끌려가든, 오후 외출 때 역 옆 골목으로 끌려가든, 오늘은 아무튼 안 된단다?」
  # 被奴役
  - if: d.rape === 3
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「오늘은 컨디션이 특히 좋은 것 같으니, 밤에 찾아가 주는게 좋겠구먼.」
      - color: %대표색%
        content:
          - fontSize: bold
            content: 원더 어큐트
          - 「그러니까, %호칭%. 몸 구석구석 깨끗이 씻고 기다리렴.」
      - 여느 때와 다름없는 미소였지만, 거절할 수 없는 기세가 느껴졌다.
      - 오늘 밤, %당신%은(는) 도대체 어떤 모습이 되어 있을까……
  - if: era.get('cflag:100:컨디션') === -2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「……희유유…… 도저히 기운이 안 나는구먼~」
  - if: era.get('cflag:100:컨디션') === -2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「으음…… 그나저나 다음엔 뭘 해야 하더라? 오늘은 깜빡깜빡해서 그만 잊어버렸구나.」
  - if: era.get('cflag:100:컨디션') === -2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「쿠후후…… 하마터면 잠들 뻔했구먼. 이러면 안 되지, 코밑에다 박하연고라도 좀 발라야겠어……」
  - if: era.get('cflag:100:컨디션') === -2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「콰당…… 아이쿠, 하마터면 개구리를 밟을 뻔했구먼~」
  - if: era.get('cflag:100:컨디션') === -2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「음…… 돌아가면 무말랭이도 담가야 하니, 기운 차리지 않으면 안 되겠구먼~」
  - if: era.get('cflag:100:컨디션') === -1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「후우…… 꾸준함이 곧 힘이란다~ 그러니 걱정 없단다.」
  - if: era.get('cflag:100:컨디션') === -1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「에헤헤…… 조금 기운이 안 나는구먼.」
  - if: era.get('cflag:100:컨디션') === -1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「후후후, 또래 애들만큼 열심히 해야겠구먼.」
  - if: era.get('cflag:100:컨디션') === -1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「심호흡——흡, 하아~ 계속 긴장해야겠구먼.」
  - if: era.get('cflag:100:컨디션') === -1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「집중력이…… 눈앞에서 앵앵 날아다니는 작은 초파리 때문에 흩어져 버렸구나——」
  - if: (era.get('cflag:100:육성턴수합산') < 3 * 48) && era.get('cflag:100:컨디션') === 0
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「영차~ 자, 벽에다 등을 탁 부딪치니 정신이 번쩍 드는구먼.」
  - if: (era.get('cflag:100:육성턴수합산') < 3 * 48) && era.get('cflag:100:컨디션') === 0
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「%호칭%, 우리 트레이닝 시작하자꾸나~」
  - if: (era.get('cflag:100:육성턴수합산') < 3 * 48) && era.get('cflag:100:컨디션') === 0
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「가슴 펴기 운동은—— 벌써 다 끝냈단다~」
  - if: (era.get('cflag:100:육성턴수합산') < 3 * 48) && era.get('cflag:100:컨디션') === 0
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「오늘도 차근차근, 한 걸음씩 성실하게 노력하자꾸나~」
  - if: (era.get('cflag:100:육성턴수합산') < 3 * 48) && era.get('cflag:100:컨디션') === 0
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「이제 가야 한단다, %호칭%.」
  - if: era.get('cflag:100:컨디션') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「음~ 그럼 %호칭%, 오늘 트레이닝은 무엇이냐~?」
  - if: era.get('cflag:100:컨디션') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「어떤 트레이닝이든 진~심~으로 임할 거란다.」
  - if: era.get('cflag:100:컨디션') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「염분 보충도 중요하니, 무말랭이라도 좀 먹으려무나~」
  - if: era.get('cflag:100:컨디션') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「흠, 흠~ 스트레칭은 준비 완료~ 이제 본격적으로 해볼까나.」
  - if: era.get('cflag:100:컨디션') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「아~ %호칭%, 방금 뭐라고 했는감?」
  - if: era.get('cflag:100:컨디션') === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「후후후~ 훨씬 더 엄격한 트레이닝이어도 괜찮단다.」
  - if: era.get('cflag:100:컨디션') === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「어라라…… 벌써 트레이닝할 시간이었구먼~」
  - if: era.get('cflag:100:컨디션') === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「오늘 날씨가 참 좋구나~ 햇님을 보고 있으니 왠지 의욕이 넘쳐나는구먼~」
  - if: era.get('cflag:100:컨디션') === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「이런이런…… 코스를 보고 있으니 왠지 마음이 근질근질하구나~」
  - if: era.get('cflag:100:컨디션') === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontWeight: bold
            content: 원더 어큐트
          - 「트레이닝이 끝나면 이불을 꺼내서 말리고 싶단다~ %호칭%, 이따가 같이 가주겠니?」
  - if: "!(era.get('cflag:100:육성턴수합산') < 3 * 48)"
    random: true
    lines:
      - 원더 어큐트는 줄곧 편안한 표정을 짓고 있다.

사랑의 감옥:
  - 탈출할 수 있는 문이 봉쇄되었다.
  - 잠금장치 때문이 아니라, 순수한 악력 때문이다.
  - 문고리를 원점으로 온 문이 안쪽으로 뒤틀려, 마치 소용돌이치듯 변형되어 있다.
  - 더욱 끔찍한 것은, 문이 떨어져 나가지 않았다는 점이다——문과 벽 사이의 그 취약한 연결부는 도리어 멀쩡했다. 그리고 문과 함께 변형된 것은 다름 아닌 벽면 전체였다.
  - 그렇다…… 철근으로 고정되어 있던 그 콘크리트 벽면이, 통째로 마치 반죽처럼 부드럽게 변형되어 버린 것이다!
  - 단순히 콘크리트를 파괴하는 것만으로는 이런 경지에 이를 수 없다. 이 정도의 변형은, 굳은 콘크리트의 구조를 깨뜨리지 않으면서 모종의 힘으로 벽면에 인성을 부여한 뒤, 자신의 절대적인 완력으로 철근과 콘크리트가 결합된 벽면 전체를 마치 스프링을 쥐어짜듯 소용돌이 형태로 일그러뜨려야만 가능하다……
  - 하지만 이것은 스프링을 쥐어짜는 것조차 아니다——그녀는 벽면 전체를 붙잡지도 않았으니까! 그저 문고리를 쥐었을 뿐인데도 말이다!
  - 이것은 물리학의 기적이다…… 아니, 기적이라는 말로는 부족하다. 여기, 이 밀폐된 방 안에서는 물리학 따위 더 이상 존재하지 않는다!
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「있잖니, %호칭%, 알고 있니? 난 이제 그런 고리타분한 격식 따윈 질렸단다.」
  - 그러나 자신이 여전히 공황과 공포에 휩싸여 있음에도 불구하고. 기적의 문 앞에서, 회색빛 실루엣은 평소와 다름없이 평온한 목소리로 밀폐된 방 안을 울린다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「사실은 말이란다, %호칭%. 나 항상 꾹 참고 있었단다? 너를 다치게 하고 싶지 않아서, 내 나름대로 횟수나 빈도를 엄청 억제하고 있었거든.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「그런데도 %호칭%는 자꾸 다른 아이들이랑 꽁냥거릴 생각만 하는구나……」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「%호칭%가 자기 마음속의 솔직한 생각에 따르겠다고 말한다면…… 」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「나도 조금은 진심으로 해도…… 괜찮은 거겠지?」
  - 말을 마친 원더 어큐트는 주머니에서 엄지손가락 한 마디 정도 두께로 포개어 놓은, 포장을 뜯은 콘돔 무더기를 꺼냈다.
  - 그리고 그녀의 가냘픈 두 손이 %당신%의 눈앞으로 뻗어왔고, 그 손가락 한 마디 두께의 콘돔 뭉치를 엄지와 검지로 집어 %당신%의 앞에 내밀었다.
  - 「찌이이익…… 」
  - 고무 제품에서 결코 날 리가 없는 소리가 울려 퍼졌다.
  - 그 손가락 두께만 한 고무 콘돔 더미가, 무려 %당신%의 눈앞에서 단숨에 두 동강으로 찢겨 나가며 쓰레기 부스러기처럼 바닥으로 힘없이 떨어져 내렸다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「……오늘만큼은 내가 만족할 때까지 절대로 쉬게 하지 않을 거란다. 」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「
      - color: pink
        content: %호칭%❤️~
      - 」
  - …………
  - ………
  - ……
  - 그 탁한 눈동자 속에서, 분홍빛 안광이 번뜩이고 있었다.
  - 이윽고, 밀폐된 방 안 곳곳에 순백의 피가 흘러내리기 시작할 터였다……

돈의 노예:
  - 돈이란 만능 열쇠와 같다. 이 열쇠를 잃어버리는 순간 모든 문이 당신의 앞에서 굳게 닫히고 만다.
  - 성인인 %당신%은(는) 의심할 여지 없이 이 이치를 뼈저리게 잘 알고 있었다.
  - 하지만 그럼에도 불구하고, %당신%은(는) 교육자로서 결코 넘어서는 안 될 선을 넘고 말았다.
  - 다름이 아니라 새로 발매된 트레이딩 카드 게임【다크 트레센】에 가진 돈을 전부 탕진한 것도 모자라, 그중에서도 전 세계 100장 한정인 넘버 100의 UR 패러렐 프리즘 골드 레어 카드인 【잿빛 눈의 소녀】를 손에 넣기 위해 경매 사이트에서 경쟁자와 입찰 경쟁을 벌이다 눈이 돌아간 나머지, 결국 103억 2000만 엔이라는 터무니없는 가격으로 낙찰받아 버린 것이다.
  - 하지만 당연하게도, %당신%에게는 그런 103억 2000만 엔이라는 거금이 있을 리 만무했다.
  - 그저 흔한 경매 장난인 줄로만 알았다. 낙찰을 받더라도 나중에 돈이 없다고 판매 측에 양해를 구하고 소액의 위약금만 물어준 뒤 재경매를 부치면 그만일 거라 생각했는데……
  - 오늘 아침, 변호사 경고장과 법원 소환장이 동시에 송달되었을 때야 %당신%은(는) 사태의 심각성을 깨달았다.
  - 기한 내에 103억 엔의 잔금을 납부하지 못하면, 경매 사이트 측에서 「경매 질서 교란죄」로 형사 고발하여 최고 3년 이상의 유기징역형에 처해질 수도 있는 상황이었다.
  - 비록 재판이 최종적으로 유죄로 결론 나지 않는다 하더라도, 교직원 신분으로 법정에 서는 것 자체가 이미 사회적 말살이나 다름없었다. 그러므로 단돈 한 푼 없는 처지일지언정, %당신%은(는) 무슨 수를 써서라도 이 103억 2000만 엔을 구해와야만 했다.
  - 하지만 그 큰돈을 대체 어디서 구한단 말인가?
  - 은행 대출은 이미 한도까지 꽉 채워 빌린 상태였다.
  - 그렇게 %당신%이(가) 막막함에 머리를 싸매고 있을 때, 언제나 당신의 속마음을 꿰뚫어 보던 원더 어큐트가 살그머니 다가왔다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「%호칭%, 무슨 고민이라도 있는 게냐?…… 어라라, 돈 문제인 게냐?」
  - 법원에서 날아온 독촉 서류를, 어느샌가 등 뒤에 나타난 원더 어큐트에게 고스란히 들키고 말았다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「정확한 액수는 안 적혀 있지만, 아무래도 엄청나게 큰 금액인 모양이구먼.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐特
      - 「돈이라면 말이다, 내게 좀 여윳돈이 있단다…… 내가 좀 보태줄까나?」
  - 이전에도 원더 어큐트에게 돈을 빌린 적은 있었지만, 이토록 천문학적인 액수는 결코 아니었다.
  - 이성이 마음속으로 엄중히 경고하고 있었다. 교직원으로서 자신의 담당 우마무스메와 이 이상 부패한 금전 관계를 맺어서는 안 된다고.
  - 하지만, 눈앞의 이 빚더미는……
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 원더 어큐트
      - 「걱정할 것 없단다, %호칭%. 여태껏 그랬던 것처럼, 집안일로 빚을 갚으면 되잖니~」
  - 그 순간, 원더 어큐트의 얼굴에는 편안하면서도 %당신%이(가) 도저히 거절할 수 없는 미소가 떠올랐다……
  - …………
  - ………
  - ……
  - 돈은 만능 열쇠다. 이 열쇠를 얻으면 모든 문이 당신을 향해 열릴 것이다.
  - 이것은 원더 어큐트가 최근에야 깨달은 이치였다.
  - 설마 가볍게 뽑았던 희귀해 보이는 카드 한 장이 경매 사이트에서 103억 2000만 엔이라는 고가에 팔릴 줄은 정말 몰랐다.
  - 그리고 바로 이 경매를 통해 원더 어큐트는 막대한 부를 얻었고, %당신%이(가) 지고 있던 채무를 대신 상환해 줄 수 있었다.
  - 이제 원더 어큐트는 %당신%의 금전적 주인이 되었다.
  - 원더 어큐트가 제정한 집안일 임금표에 따르면, %당신%이(가) 일을 하나씩 끝낼 때마다 원더 어큐트는 %당신%의 부채를 일부 탕감해 주기로 했다.
  - 예를 들면 요리하기, 설거지하기, 함께 운동하기, 손잡고 산책하기.
  - 그리고 이야기 들려주기, 머리 쓰다듬어 주기, 등 마사지해 주기…… 물론 이것들은 원더 어큐트가 자발적으로 %당신%에게 해주는 것들이었다.
  - if: era.get('cflag:100:성별') * era.get('cflag:0:성별') !== 1
    content: 그리고 키스, 애무, 출산, 육아, 둘째, 셋째 같은 추가 수당…… 비록 이런 것들은 아직 임금표에 명시되어 있지는 않지만, 머지않아 추가될 것이다.
  - 임금표에 따르면 %당신%이(가) 매일 열 번씩 집안일을 수행하더라도, 앞으로 30년은 더 지나야 모든 채무를 청산할 수 있을 것이다.
  - 그때까지 %당신%도 집안일을 수련해야만 했다. 그래야 은퇴 후 원더 어큐트가 %당신%를 데리고 고향으로 내려갔을 때 그녀의 아버지에게 인정받을 수 있을 테니까.
  - 원더 어큐트에게는 이것이 해피엔딩의 시작일지도 모른다. %당신%에게는 이토록 막대한 채무를 지게 된 순간부터 어쩌면 결말이 예정되어 있었던 것일지도 모른다.
  - 금전 관계라는 굴레에 갇힌 채, %당신%은(는) 엔딩을 맞이했다……