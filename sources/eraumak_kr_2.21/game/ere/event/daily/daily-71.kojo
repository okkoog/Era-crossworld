상호작용 대상 선택:
  sync: true
  lines:
    - if: era.get('status:71:숙면') === 0 && era.get('status:71:우마뾰이S') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('cflag:71:육성턴수합산') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「안녕하셔요, %호칭%. 오늘도 함께 힘내요.」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「%호칭%, 오늘 상점가에 새로운 카페가 열었다고 해요. 트레이닝이 끝나면 같이 가보지 않으시겠어요?」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「며칠 전에 저와 언니의 어릴 적 사진을 찾았답니다. 정말 그리운 시절이에요.」
            - if: era.get('cflag:71:육성턴수합산') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「좋은 아침이에요, %호칭%. 요즈음 어떻게 지내셨나요?」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「%호칭%, 한동안 뵙지 못했네요. 하지만 별탈 없이 지내신 것 같아 다행이에요.」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「%호칭%, 오랜만이에요. 그 시절 저를 지탱해 주시고 도와주셔서 정말 감사했습니다.」
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:육성턴수합산') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「좋은 아침이에요, %호칭%. 정신이 맑아지는 홍차를 한 잔 준비해 드릴까요?」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「%호칭%, 다음 휴일에는 저와 함께 메지로 가문의 피서지에 가지 않으시겠어요?」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「%호칭%, 무척 피곤해 보이셔요. 제가 마사지를 해 드릴 테니, 몸을 푹 쉬게 해 주세요.」
            - if: era.get('cflag:71:육성턴수합산') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「제 사랑, 오늘 아침은 무얼 드시고 싶으신가요? 제가 준비해 드릴게요🎵」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「제 사랑, 요즈음 조금 지쳐 보이셔요. 자~ 제 무릎에 누워 보세요. 제 품에서 편히 쉬셔요🎵」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「후훗, 당신과 함께하는 매일매일이 무척 행복해요. 제 사랑과 만난 것이야말로 세 여신님께서 제게 주신 가장 큰 축복이랍니다🎵」
                - random: true
                  lines:
                    - color: %대표색%
                      content:
                        - fontSize: bold
                          content: 메지로 아르당
                        - 「제 사랑, 그렇게 무리하시면 안 돼요. 후후🎵 당신의 밤샘을 만류하는 저만의 특약 처방이랍니다.」
    - if: era.get('status:71:숙면') > 0 || era.get('status:71:우마뾰이S') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('cflag:71:육성턴수합산') < 3 * 48
              lines:
                - 소파 위에서 잠든 아르당의 모습은 한 폭의 아름답고 고요한 그림 같아서, %당신%은(는) 저도 모르게 몸짓을 조심스레 낮추었다.
            - if: era.get('cflag:71:육성턴수합산') >= 3 * 48
              lines:
                - 피곤해진 메지로 아르당이 작은 하품을 했다.
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:육성턴수합산') < 3 * 48
              lines:
                - 몹시 지친 나머지 %당신%에게 기대어 잠든 아르당은, 마치 안식처를 찾은 작은 새처럼 보였다.
            - if: era.get('cflag:71:육성턴수합산') >= 3 * 48
              lines:
                - 아르당은 휴게실 침대에서 편안하게 잠들어 있다.

生日选中互动:
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - color: %대표색%
          content:
            - fontSize: bold
              content: 메지로 아르당
            - 「생일 축하드려요~ %호칭%. 제가 당신을 위해 생일 파티를 준비해 두었답니다.」
    - if: era.get('love:71') >= 75
      lines:
        - color: %대표색%
          content:
            - fontSize: bold
              content: 메지로 아르당
            - 「생일 축하드려요~ %호칭%🎵 제가 당신을 위해 생일 파티를 준비해 두었답니다. 파티가 끝난 후에는 오직 저희 두 사람만의 축하 모임도 기다리고 있어요🎵」

回合开始:
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「모두가 꿈을 향해 분투하는 모습은 정말 눈이 부실 정도로 빛나네요.」
        - random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「오늘 상점가에서 무언가 행사를 하는 모양이에요. %호칭%, 같이 가보시겠어요?」
        - random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「후훗, %호칭%. 당신을 보고 있으니 마음이 무척 편안해져요.」
        - if: era.get('status:71:밤샘') > 0
          random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「늦게까지 깨어 있느라 하마터면 지각할 뻔했네요. %호칭%에게 걱정 끼쳐 드려 죄송합니다.」
        - if: era.get('status:71:밤샘') > 0
          random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「죄송해요, %호칭%. 어젯밤 역사책에 너무 몰두하는 바람에, 그만 조금 늦게 잠들고 말았습니다.」
        - if: era.get('status:71:밤샘') > 0
          random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「정말 죄송해요. 어제 제시간에 눕기는 했습니다만, 몸이 좀 좋지 않아 깊이 잠들지 못했습니다.」
    - if: era.get('love:71') >= 75
      lines:
        - random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「오늘도 저희만의 빛을 함께 그려나가요, 제 사랑🎵」
        - random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「이렇게 고요한 밤에는 산책을 하고 싶어져요. 제 사랑, 저와 동행해 주시겠어요?」
        - random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「제 사랑이 아침에 끓여 주신 수프는 정말 따뜻했어요. 마시자마자 몸의 세포 하나하나가 환호하는 것만 같았답니다.」
        - if: era.get('status:71:밤샘') > 0
          random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「밤샘 때문에 지각을 하다니... 죄송해요.」
        - if: era.get('status:71:밤샘') > 0
          random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「제 사랑, 죄송해요. 어젯밤 역사책을 읽다가 또 푹 빠져버려서, 그만 늦게 자고 말았습니다.」
        - if: era.get('status:71:밤샘') > 0
          random: true
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「어젯밤 제 컨디션 난조로 제 사랑을 고생시켰네요. 점심시간에 같이 잠깐 눈을 붙이실래요?」

回合结束:
  sync: true
  lines:
    - if: era.get('status:71:숙면') === 0 && era.get('status:71:우마뾰이S') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「오늘도 수고 많으셨어요, %호칭%. 내일 봬요!」
            - 메지로 아르당과 하루 트레이닝을 마친 후, %당신%은(는) 기숙사 건물 밖에 서서 아르당이 들어가는 모습을 배웅했다.
            - %당신%은(는) 미소를 지으며 손을 흔들어 작별을 고하는 메지로 아르당을 바라보며, 똑같이 미소로 화답했다.
        - if: era.get('love:71') >= 75
          lines:
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「오늘도 수고 많으셨어요, 제 사랑🎵 피로를 풀어드릴 마사지를 해 드릴까요?」
            - 메지로 아르당과 하루의 노고를 끝마치자, 메지로 아르당이 %당신%의 뒤로 다가와 적당한 힘 조절로 어깨를 주물러 주기 시작했다.
            - 「고마워, 아르당. 너도 오늘 고생 많았는데, 조금 있다가 교대해서 내가 마사지해 줄게.」
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「그럼 부탁드릴게요🎵」
    - if: era.get('status:71:숙면') > 0 || era.get('status:71:우마뾰이S') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('status:71:우마뾰이S') === 0
              content: 「아무래도 오늘 %그녀%를 너무 무리하게 연습시킨 모양이네.」
            - %당신%은(는) %그녀%의 어깨를 가볍게 토닥였다.
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「으음……~ 어라? 제가 그만 깜빡 잠이 들었나 봐요!」
            - 「오늘 트레이닝은 끝났어. 고생 많았으니 기숙사까지 바래다줄게.」
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「감사합니다, %호칭%. 신세를 지게 되었네요.」
            - %당신%은(는) 이따금 하품을 하는 메지로 아르당을 기숙사까지 데려다주었고, 사쿠라 치요노 오가 마중 나온 것을 확인한 뒤에야 안심하고 발걸음을 돌렸다.
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('status:71:우마뾰이S') === 0
              content: 「오늘도 수고 많았어, 아르당.」
            - %당신%은(는) 곁에서 안심한 듯 곤히 잠든 메지로 아르당을 바라보며 나지막이 속삭였다.
            - 「좋은 꿈 꾸기를, 잘 자.」
            - %당신%이(가) %그녀%가 미리 비워둔 머리맡 자리에 눕자, 메지로 아르당은 %당신%의 온기를 감지하고는 이내 %당신%을(를) 꼭 끌어안았다.
            - color: %대표색%
              content:
                - fontSize: bold
                  content: 메지로 아르당
                - 「잘 자셔요, 여신님들께서 제게 보내주신 소중한 보물.」

잡담:
  - if: era.get('cflag:71:컨디션') === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「어째서일까요, 지금이라면 어디까지든 달릴 수 있을 것만 같은…… 아니, 달리고 싶어요. 제 한계를 뛰어넘어 보고 싶답니다……!」
  - if: era.get('cflag:71:컨디션') === 2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「1분, 1초, 단 한 순간…… 지극히 찰나의 시간에도 정신을 집중할 수 있을 것만 같아요. 그렇다면, 분명……」
  - if: era.get('cflag:71:컨디션') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「하나, 둘, 셋…… 후우. 체온, 심박수, 근육 상태 모두 좋습니다. 자, 오늘은 무얼 할까요?」
  - if: era.get('cflag:71:컨디션') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「다리 상태가 최상이에요. 온 힘을 다해 트레이닝에 임할 수 있겠어요…… 그것만으로도 무척 가슴이 벅차오르네요.」
  - if: era.get('cflag:71:컨디션') === 0
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「평범하고 아무 일도 없는 날이 제게는 최고의 날이랍니다…… 하지만 『지금』은 더 높은 경지를 향해 나아가야겠지요.」
  - if: era.get('cflag:71:컨디션') === 0
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「눈앞의 한순간 한순간을 소중히 여기며…… 정성껏 신중하게 트레이닝에 임하도록 해요.」
  - if: era.get('cflag:71:컨디션') === -1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「발걸음이 무겁네요…… 하지만 그렇다고 낙담해선 안 되겠지요. 제 자신을 믿어야 해요…… 여태껏 쌓아 올린 수행을요.」
  - if: era.get('cflag:71:컨디션') === -1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「후우…… 살다 보면 이런 날도 있는 법이지요. 조급해하지 말고…… 차라도 한 잔 마시며 기분 전환을 해 볼까요?」
  - if: era.get('cflag:71:컨디션') === -2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「%호칭%…… 오늘의 전반적인 컨디션을 고려해 보았을 때…… 조정을 거치는 편이 좋을 것 같아요…… 트레이닝 메뉴를요……」
  - if: era.get('cflag:71:컨디션') === -2
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「지금의 저는 살아온 증거를 남길 수 있을까요…… 아니요, 결코 조급해해선 안 돼요. 심호흡을…… 마음을 가라앉히고, 깊게 숨을 들이쉬고……」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「유모 할머니께서 직접 가르쳐 주신 수제 과자를 구워 왔어요. 그 따스한 풍미를 당신도 느껴보셨으면 좋겠네요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「병원에 입원해 있을 때 꿈꾸었던 그 의상…… 지금 이렇게 몸에 걸치고 있다니…… 그 시절의 저에게 보여주고 싶을 정도예요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「가슴팍의 브로치는 아버님께서 선물해 주신 목걸이를 참고해서 디자인한 것이랍니다…… 만지고 있으면 마음이 차분해져요.」
  - if: era.get('cflag:69:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「매일 아침 %阿尔丹称呼千代王%를 깨우는 평범한 나날들…… 제게는 더없이 행복한 시간이에요.」
  - if: era.get('cflag:64:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「조금 전에 해바라기 꽃다발을 안고 있는 %阿尔丹称呼善信%를 만났답니다…… %그녀%의 미소는 정말 해바라기를 쏙 빼닮았어요🎵」
  - if: era.get('cflag:86:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「얼마 전 %阿尔丹称呼高峰%의 어릴 적 사진을 발견했어요. 어린 나이에도 무척 기품 있고 아름다워서…… 정말 눈이 부시더군요.」
  - if: era.get('cflag:21:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「그거 아시나요? %阿尔丹称呼玉藻十字%의 대화 방식은…… 세상사는 인정을 엿볼 수 있어서, 마치 라쿠고를 감상하는 기분이 든답니다.」
  - if: era.get('cflag:69:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「매일 아침 %阿尔丹称呼千代王%를 깨우는 평범한 나날들…… 제게는 더없이 행복한 시간이에요.」
  - if: era.get('cflag:72:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「%阿尔丹称呼八重无敌%는 참 아름답네요, 라는 말을 꺼냈더니…… 후훗, 두 동급생의 뺨이 벚꽃처럼 붉게 물들었지 뭐예요.」
  - if: era.get('cflag:6:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「%阿尔丹称呼小栗帽% 씨가 음식을 먹는 모습은 저도 모르게 넋을 잃고 보게 돼요. 덕분에 저도 평소보다 조금 더 먹게 된답니다.」
  - if: era.get('cflag:32:모집상태') === 1
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「%阿尔丹称呼速子% 씨와 함께 밤의 다회를 열었습니다만, 홍차가 빛을 내뿜어서…… 후훗, 참으로 신기한 경험이었답니다🎵」

선물하기:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「선물해 주셔서 감사합니다. 조만간 정성 어린 보답을 준비할 테니 기대를 품고 기다려 주세요🎵」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「제게 주시는 선물인가요? 고맙습니다, 소중히 간직할게요.」

외출신사기도:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「후훗, %호칭%과 함께 신사에 와서 소원을 비니, 가족들과 함께 왔을 때와는 전혀 다른 기분이 드네요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「트레센의 역사 속에서 수많은 우마무스메들이 부상과 질병으로 은퇴해 갔다는 사실을 떠올리면 두려워지기도 해요. 하지만 그렇기에 더더욱 주어진 시간 속에서 저만의 색채를 새겨넣고 싶답니다.」

강가낚시:
  - random: true
    lines:
      - %당신%은(는) 낚싯대를 꺼내 강물에 던지고 물고기가 입질하기를 기다렸고, 메지로 아르당은 그 곁에 앉아 조용히 동행해 주었다.
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「와아, 축하드려요, %호칭%. 이렇게나 커다란 물고기를 낚으시다니요.」

산책:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「이렇게 강변을 산책하는, 고요하고 평범한 일상 또한 제게는 커다란 기쁨을 주네요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「강바람이 스쳐 지나가니 정말 상쾌하네요. 다음번에는 이곳으로 같이 가벼운 조깅을 하러 와요, %호칭%.」

게임센터:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「힘내셔요, %호칭%. 혹시 코인이 부족하시다면 제게도 아직 있으니 말씀해 주세요.」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「저 인형을 갖고 싶으신가요? 사실 저도 무척 탐나던 참이었어요. 우리 함께 노력해 봐요. 당신이 제 곁에 있어 주기만 한다면, 그 어떤 일이든 해낼 수 있을 것만 같은 기분이 들어요.」

경품추첨:
  - color: %대표색%
    content:
      - fontSize: bold
        content: 메지로 아르당
      - 「후훗, 과연 어떤 상품을 뽑게 될지 기대되네요🎵」

노래방:
  - 위닝 라이브를 연습하기 위해, %당신%과(와) 아르당은 가라오케를 찾았다.
  - color: %대표색%
    content:
      - fontSize: bold
        content: 메지로 아르당
      - 「높은 하늘을 넘어, 꿈을 손에 쥐고, 마치 생명을 태우듯 찬란하게 빛나리니~🎵」
  - %그녀%의 감미롭고 부드러운 목소리에 %당신%은(는) 저도 모르게 넋을 잃고 빠져들어, 점차 시간 가는 것조차 잊어버렸다.

영화관람:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「후훗, 배우분들의 연기가 무척 흥미롭네요. 그리고 연출가 분도 꽤 참신한 발상을 하시는 분 같아요.」
      - %당신%은(는) 공포 영화의 갑작스러운 점프 스케어 연출에 저도 모르게 몸을 움츠렸으나, 곁에 있던 아르당은 오히려 흥미진진하게 감상하고 있었다.
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「추리 영화인가요? 작중에서 펼쳐지는 두뇌 싸움을 보고 있으면 참 즐거워져요. 저도 이따금 주인공의 입장에 몰입해서 범인을 추리해 보곤 한답니다.」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「로맨스 영화인가요? 후후🎵 당신과 함께 감상할 수 있다니 무척 기대되는 걸요. 이렇게 하면 연애에 대한 제 사랑의 생각을 조금 더 깊이 이해할 수 있을 테니까요.」
      - 아르당은 %당신%의 팔에 슬며시 팔짱을 끼며 행복한 미소를 지었다.

식사:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「후훗, %호칭%께서 추천해 주신 가게는 정말 훌륭하네요. 저도 모르게 조금 과식해 버렸어요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「음~ 이 가게의 당근 스튜는 정말 독특한 풍미가 있네요. 대접해 주셔서 감사합니다, %호칭%.」

데이트:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「기다리게 해서 죄송해요, %호칭%. 오늘 저희는 어디로 향하나요?」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「%호칭%께서는 언제나 저를 많이 도와주셨지요. 이번만큼은 저 역시 %호칭%을 위해 무언가 힘이 되어 드리고 싶어요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「이렇게 가족이 아닌 다른 누군가와 거리를 거니는 것은 처음이라, 무척 신기하고 기묘한 감각이 드네요.」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - 아르당이 %당신%의 팔짱을 낀 채 거리를 걷자, 주변에서 쏟아지는 수많은 시선에 %당신%은(는) 내심 어색해했으나, 아르당은 도리어 무척이나 즐거워 보였다.
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「후훗~ 제 사랑🎵 긴장하셨나요?」
      - 당신의 긴장을 알아챈 듯, 아르당은 장난기 어린 목소리로 물어보며 팔짱을 더욱 단단히 조여왔다.

쇼핑몰방문:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「제가 입은 이 옷, 어떤가요? %호칭%.」
      - 아르당은 옷을 갈아입고 %당신%의 앞으로 다가와, 우아한 자태를 유지한 채 나지막이 의견을 물었다.
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「저편의 매장에서 세일 행사를 진행하는 모양이에요. 같이 가보실래요?」

고목나무구멍:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「……전…… 전 증명해 보이고 싶어요…… 제가 언니에게 뒤처지지 않는다는 것을요! 그저 그분의 여동생이 아닌, 오롯이 저 자신— 메지로 아르당 이라는 것을 모두에게 증명하겠어요!」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「제 한계를 돌파하여 아직 보지 못한 풍경을 마주하고, 저만의 온전한 빛을 꽃피우고 싶답니다!」

안뜰데이트:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「후훗, 학원 교정에서 이렇게 손을 잡고 모두에게 보여주는 일은 꽤나 기묘한 기분이 드네요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「%호칭%? 너무 긴장하신 것 같아요. 자~ 저와 함께 심호흡을 하며 긴장을 풀어보아요.」

도시락먹기:
  - random: true
    lines:
      - 오늘 아르당과 함께 도시락을 먹게 되었는데, 아르당이 특별히 %당신%의 몫까지 도시락을 준비해 주었다.
      - 정갈하고 풍성하게 채워진 도시락을 보며 %당신%은(는) 아르당이 훗날 분명 훌륭한 현모양처가 될 것이라며 감탄을 아끼지 않았다.
      - %당신%의 칭찬에 아르당은 부끄러움으로 붉어진 뺨을 감추려는 듯 슬며시 고개를 돌렸다.
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「제 사랑, 아~~ 해 보세요.」
      - 선을 넘어서며 깊은 관계로 발전한 이후로, 두 사람 사이에는 서로 음식을 먹여주는 행동이 일상이 되었다.
      - 식사 시간은 예전보다 조금 더 길어졌을지 모른다.
      - 하지만 두 사람은 서로와 함께하는 이 시간을 더없이 소중히 여기고 있었다.

함께요리하기:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「후훗, 이렇게 함께 요리를 하니 무척 신기하고 즐거운 기분이 드네요.」
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「%호칭%께서는 중국 요리도 다루실 줄 아는군요? 나중에 제게도 가르쳐 주실 수 있나요?」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「어머나…… 저와 제 사랑의 호흡이 벌써 이렇게나 잘 맞다니, 마치 수십 년을 함께 산 노부부 같네요, 후훗🎵」

학습지도:
  - color: %대표색%
    content:
      - fontSize: bold
        content: 메지로 아르당
      - 「과연 %호칭%이셔요. 이토록 명쾌하고 간단하게 설명해 주시다니, 분명 보이지 않는 곳에서 커다란 노력을 기울이셨겠지요.」

함께휴식하기:
  - random: true
    lines:
      - 밀려오는 가벼운 졸음에 잠시 휴식을 취하려던 것이 그만 깊은 잠으로 이어지고 말았다.
      - 번뜩 고개를 들어보니 아르당 역시 소파에 기대어 잠들어 있었다.
      - %당신%은(는) %그녀%가 감기에 걸리지 않도록 겉옷을 가만히 덮어주었다.
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「어떠신가요? 제 사랑, 시원하셔요?」
      - %당신%은(는) 아르당의 무릎을 베고 누웠고, %그녀%는 면봉으로 %당신%의 귀를 조심스레 파주고 있었다.
      - 머리로 전해지는 부드러운 감촉과 %그녀%에게서 풍겨오는 은은한 향기가 %당신%의 신경을 간지럽혔다.
      - %그녀%는 %당신%의 당혹감을 눈치챈 듯 짓궂은 미소를 지으며, 면봉을 멀리하고는 %당신%의 귓가에 가볍게 바람을 불어 넣었다.

함께게임하기:
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「세상에, 그런 공략 방법도 있었군요? 정말 대단하셔요.」
      - %당신%의 기발하고 엉뚱한 아이디어가 기대 이상의 훌륭한 성과를 거두자, 곁에 있던 아르당은 감탄을 금치 못했다.
  - random: true
    lines:
      - color: %대표색%
        content:
          - fontSize: bold
            content: 메지로 아르당
          - 「왠지 모르게 %호칭%과는 호흡이 참 잘 맞는 것 같아요. 이런 감각, 무척 근사하네요.」
      - 평소 비디오 게임을 접할 기회가 드물었던 아르당이었지만, %당신%과(와) 함께 협동 게임을 플레이하며 놀라울 정도의 완벽한 케미를 보여주었다.

새해:
  - 새해 첫날이 밝아오자, 사방이 명절의 환희와 활기찬 기운으로 가득 찼다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「%호칭%, 새해 복 많이 받으셔요~」
  - acc: 1
    content: 「새해 복 많이 받아, 아르당.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「%호칭%, 신년 맞이 참배를 하러 함께 신사에 가지 않으시겠어요?」
  - acc: 1
    content: 「당연히 좋지~」
  - %당신%은(는) 아르당의 제안을 흔쾌히 받아들여 함께 신사를 방문했다. 서로를 위하는 진심 어린 소원을 빌고 난 뒤, 다시 돌아와 다양한 신년 전통 놀이를 즐기며 시간을 보냈다.

발렌타인데이:
  - 오늘은 발렌타인데이. 연정을 품은 소녀들이 마음속 주인공에게 본명 초콜릿을 건네는 날이자, 평소 고마웠던 이들에게 의리 초콜릿을 나누는 날이다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: ???
      - 「제가 누구게~요🎵」
  - acc: 1
    content: 「아르당.」
  - %당신%이(가) 뒤에 선 사람의 이름을 정확하게 맞추자, 눈앞을 가리고 있던 부드러운 손길이 거두어졌다.
  - 아르당이 %당신%의 앞으로 걸어 나와, 얼굴 가득 행복한 미소를 띤 채 정성스럽게 포장된 초콜릿 상자를 건넸다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「해피 발렌타인, %호칭%. 제 손으로 직접 만든 것이라 다소 미흡한 부분도 있겠습니다만, 부디 맛있게 드시고 편안한 휴식을 취해 주세요.」
  - acc: 1
    content: 「고마워, 아르당.」

팬 대감사제:
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「오늘은 팬 대감사제인데, 으음…… 팬분들을 어떤 방식으로 맞이해야 기쁘게 해 드릴 수 있을까요? %호칭%」
  - 아르당은 팬들에게 감사의 마음을 전할 가장 좋은 방법에 대해 조금은 긴장한 기색으로 %당신%에게 조언을 구했다.
  - acc: 1
    content: 「아르당 너만의 스타일로 팬들의 마음을 사로잡고 오면 돼!」
  - %당신%의 진심 어린 답변을 들은 아르당은 이내 화사한 미소를 지으며 자신감을 되찾았다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「……후훗, %호칭%의 표현 방식은 언제 들어도 참 독특하면서도…… 제게 커다란 용기를 북돋아 주시네요.」
  - 그 뒤로 이어진 팬 감사제는 커다란 성황을 이루며 순조롭게 마무리되었다.

축제:
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「오늘 축제가 열린다고 해요. 들리는 소문으로는 심야에 담력 시험도 함께 진행된다던데, %호칭%, 같이 가보실래요?」
  - 아르당이 기대에 찬 눈빛으로 %당신%을(를) 바라보자, %당신%은(는) 도저히 거절할 수 없었다.
  - 축제 야시장을 함께 둘러보며 즐거운 시간을 만끽한 후, %당신%과(와) %그녀%는 마침내 담력 시험장에 도착했다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「후훗, 담력 시험이라니 틀림없이 즐거운 경험이 되겠네요.」
  - acc: 1
    content: 「너는 전혀 무서워하지 않고 오히려 들떠 보이는걸.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「네, 신체적인 제약 탓에 예전에는 이런 대외 활동에 참여할 기회가 거의 없었거든요. 하지만 지금은 %호칭% 덕분에 마침내 해보고 싶었던 일들을 이룰 수 있게 되었답니다.」
  - %당신%은(는) 아르당의 손을 꼭 쥐고 담력 시험의 숲으로 발을 들였다. 아르당은 %당신%의 곁에서 내내 행복한 미소를 지었고, 그 다정한 시선은 문득문득 %당신%의 옆얼굴에 머물렀다.

할로윈:
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「과자를 안 주면 장난칠 거예요🎵」
  - 할로윈 당일, 집무실 문을 두드리는 소리에 %당신%이(가) 문을 열자 흡혈귀 복장을 한 아르당이 서 있었다.
  - %그녀%가 걸친 의상은 은근한 매혹과 고귀한 기품을 자아냈고, 짐짓 겁을 주려는 듯 지어 보이는 몸짓은 사랑스럽기 그지없었다.
  - acc: 1
    content: 「해피 할로윈, 아르당.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「후훗, 해피 할로윈, %호칭%. 어떠신가요? 제 오늘의 분장이?」
  - 「정말 멋진걸. 나도 모르게 넋을 잃고 채로 바라봤어. 완전히 네게 마음을 사로잡힌 것 같네.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「후훗, 그렇다면 제게 첫 포옹을 허락해 주세요, %호칭%🎵」

크리스마스:
  - %당신%은(는) 아르당의 정중한 초대를 받아 메지로 저택에서 개최된 크리스마스 이브 파티에 참석했다.
  - 이윽고 밤이 깊어 파티에 참석했던 친구들이 저마다 집으로 돌아가고 난 뒤——
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「%호칭%, 저와 함께 저희들만의 『2차 파티』를 시작해요.」
  - acc: 1
    content: 「좋아.」
  - %당신%은(는) 아르당의 제안을 받아들여 %그녀%와 함께 밤거리 산책에 나섰고, 오직 오늘 밤에만 허락된 화려한 성탄 야경을 만끽했다.
  - %당신%과(와) 아르당은 플라네타륨 박물관으로 발걸음을 옮겨 밤하늘 가득 펼쳐진 별빛을 함께 관측했다.
  - 다가오는 이별의 문턱에서 두 사람은 내년 크리스마스 역시 반드시 함께 보내자는 소중한 약속을 나누며, 이토록 행복하고 아름다웠던 하루를 매듭지었다.

普通生日:
  - 오늘은 메지로 아르당의 생일이다.
  - acc: 1
    content: 「생일 축하해, 아르당.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「축하해 주셔서 감사합니다, %호칭%.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「오늘 밤에 모두를 초대해서 즐거운 파티를 열었으면 해요.」
  - %당신%은(는) 아르당의 제안에 기꺼이 동의하고 파티를 위한 만반의 준비에 착수했다.
  - 저녁이 되자 집 안에서 성대한 생일 파티가 성대하게 개최되었고, 즐거운 소란은 밤이 아주 깊어질 때까지 이어졌다.

特殊生日:
  #爱慕为依存
  #限一次
  - acc: 1
    content: 「생일 축하해, 아르당.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「축하해 주셔서 감사해요, 제 사랑.」
  - 오늘은 아르당의 생일날. %당신%은(는) 정성 어린 선물을 전달했고, 아르당의 친구들과 힘을 합쳐 %그녀%를 위한 성대한 생일 연회를 베풀었다.
  - 아르당의 얼굴에 피어난 행복한 미소를 바라보며, %당신%은(는) 여태껏 쏟은 모든 노고가 한순간에 보상받는 듯한 깊은 보람을 느꼈다.
  - ………………
  - 파티가 막을 내리고 아르당은 참석해 준 친구들을 한 명씩 차례로 배웅했다. 마지막 친구마저 떠나고 단둘이 남게 되자, 아르당은 %당신%의 곁으로 다가와 살포시 손을 맞잡았다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「……제 사랑, 전 당신과 함께 더 많은, 훨씬 더 많은 『지금』의 날들을 쌓아가고 싶어요. 괜찮으시다면…… 아주 조금만 더 제 곁에 머물러 주시겠어요? 오직 저희 두 사람만의 시간으로요.」
  - 그 후 메지로 아르당은 %당신%의 손을 이끌고 메지로 저택의 뒷산 산등성이로 향했다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「제 사랑, 이곳이 바로 제가 밤마다 가장 즐겨 찾는 비밀 장소랍니다. 여기에 서서 하늘을 올려다보면 눈이 부실 정도로 찬란한 별바다를 마주할 수 있거든요.」
  - 아르당의 감성 어린 말에 %당신% 역시 고개를 들어 밤하늘을 우러러보았다. 도심의 인공적인 불빛에서 멀리 떨어진 덕분에, 밤하늘의 무수한 별들이 선명하게 제 빛을 발하고 있었다.
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「%호칭%, 이 우주는 마치 우마무스메들의 유구한 역사와도 닮았어요. 저기 반짝이는 별 하나하나는 모두 역사 속에 찬란한 궤적을 남긴 위대한 우마무스메 선배님들을 상징하는 것만 같아요. %그녀%들은 이토록 눈부시고 아름답게 빛나고 있으니까요.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「그것이 바로 제가 밤마다 이곳에 와서 별을 바라보는 이유랍니다. 마치 역사라는 기나긴 강물 속에서 선배님들이 남기신 찬란한 광휘를 온몸으로 스러지는 기분이 들거든요.」
  - acc: 1
    content: 「너 역시 너만의 찬란한 빛을 이미 가지고 있어.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「……!」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「후훗, 당신의 말씀은 절반만 정답이네요. 제 생각에 제가 가진 빛은 오롯이 저만의 것이 아니라, 제 사랑과 저, 우리 두 사람이 합심하여 함께 자아낸 공동의 빛이라고 믿고 싶어요.」
  - color: %대표색%
    content:
      - fontWeight: bold
        content: 메지로 아르당
      - 「서로를 비추는 등불이 되어, 우리만의…… 공동의…… 세상에 단 하나뿐인 유일무이한 빛을 피워내는 것이랍니다🎵」
  - 메지로 아르당은 %당신%의 어깨에 조용히 몸을 기대었고, %당신%과(와) 함께 이 광활한 별바다를 올려다보며 서로 일치해가는 심장 박동을 가만히 음미했다.
  - 무수한 별빛이 자아내는 은하수의 캔버스 아래, 두 사람은 서로에게 온전히 의지한 채 영원 같은 찰나를 공유했다.