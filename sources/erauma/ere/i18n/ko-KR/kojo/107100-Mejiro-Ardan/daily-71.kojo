# @file メジロアルダン - 日常
# @author 洛洛
good_morning:
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「모두가 꿈을 향해 분투하는 모습은 정말 눈이 부실 정도로 빛나네요.」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「오늘 상점가에서 무언가 행사를 하는 모양이에요. %CALLNAME%, 같이 가보시겠어요?」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「후훗, %CALLNAME%. 당신을 보고 있으니 마음이 무척 편안해져요.」
        # STATUSNAME:1 = 熬夜
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「늦게까지 깨어 있느라 하마터면 지각할 뻔했네요. %CALLNAME%에게 걱정 끼쳐 드려 죄송합니다.」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「죄송해요, %CALLNAME%. 어젯밤 역사책에 너무 몰두하는 바람에, 그만 조금 늦게 잠들고 말았습니다.」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「정말 죄송해요. 어제 제시간에 눕기는 했습니다만, 몸이 좀 좋지 않아 깊이 잠들지 못했습니다.」
    - if: era.get('love:71') >= 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「오늘도 저희만의 빛을 함께 그려나가요, 제 사랑🎵」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「이렇게 고요한 밤에는 산책을 하고 싶어져요. 제 사랑, 저와 동행해 주시겠어요?」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「제 사랑이 아침에 끓여 주신 수프는 정말 따뜻했어요. 마시자마자 몸의 세포 하나하나가 환호하는 것만 같았답니다.」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「밤샘 때문에 지각을 하다니... 죄송해요.」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「제 사랑, 죄송해요. 어젯밤 역사책을 읽다가 또 푹 빠져버려서, 그만 늦게 자고 말았습니다.」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「어젯밤 제 컨디션 난조로 제 사랑을 고생시켰네요. 점심시간에 같이 잠깐 눈을 붙이실래요?」

select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            # CFLAGNAME:48 = 育成回合计时
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「안녕하셔요, %CALLNAME%. 오늘도 함께 힘내요.」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%, 오늘 상점가에 새로운 카페가 열었다고 해요. 트레이닝이 끝나면 같이 가보지 않으시겠어요?」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「며칠 전에 저와 언니의 어릴 적 사진을 찾았답니다. 정말 그리운 시절이에요.」
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「좋은 아침이에요, %CALLNAME%. 요즈음 어떻게 지내셨나요?」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%, 한동안 뵙지 못했네요. 하지만 별탈 없이 지내신 것 같아 다행이에요.」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%, 오랜만이에요. 그 시절 저를 지탱해 주시고 도와주셔서 정말 감사했습니다.」
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「좋은 아침이에요, %CALLNAME%. 정신이 맑아지는 홍차를 한 잔 준비해 드릴까요?」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%, 다음 휴일에는 저와 함께 메지로 가문의 피서지에 가지 않으시겠어요?」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%, 무척 피곤해 보이셔요. 제가 마사지를 해 드릴 테니, 몸을 푹 쉬게 해 주세요.」
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「제 사랑, 오늘 아침은 무얼 드시고 싶으신가요? 제가 준비해 드릴게요🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「제 사랑, 요즈음 조금 지쳐 보이셔요. 자~ 제 무릎에 누워 보세요. 제 품에서 편히 쉬셔요🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「후훗, 당신과 함께하는 매일매일이 무척 행복해요. 제 사랑과 만난 것이야말로 세 여신님께서 제게 주신 가장 큰 축복이랍니다🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「제 사랑, 그렇게 무리하시면 안 돼요. 후후🎵 당신의 밤샘을 만류하는 저만의 특약 처방이랍니다.」
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - 소파 위에서 잠든 아르당의 모습은 한 폭의 아름답고 고요한 그림 같아서, %YOU%은(는) 저도 모르게 몸짓을 조심스레 낮추었다.
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - 피곤해진 메지로 아르당이 작은 하품을 했다.
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - 몹시 지친 나머지 %YOU%에게 기대어 잠든 아르당은, 마치 안식처를 찾은 작은 새처럼 보였다.
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - 아르당은 휴게실 침대에서 편안하게 잠들어 있다.

select_in_birthday:
  # 今日はトレーナーの誕生日
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「생일 축하드려요~ %CALLNAME%. 제가 당신을 위해 생일 파티를 준비해 두었답니다.」
    - if: era.get('love:71') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「생일 축하드려요~ %CALLNAME%🎵 제가 당신을 위해 생일 파티를 준비해 두었답니다. 파티가 끝난 후에는 오직 저희 두 사람만의 축하 모임도 기다리고 있어요🎵」

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「과연 %CALLNAME%이셔요. 이토록 명쾌하고 간단하게 설명해 주시다니, 분명 보이지 않는 곳에서 커다란 노력을 기울이셨겠지요.」

talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「어째서일까요, 지금이라면 어디까지든 달릴 수 있을 것만 같은…… 아니, 달리고 싶어요. 제 한계를 뛰어넘어 보고 싶답니다……!」
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「1분, 1초, 단 한 순간…… 지극히 찰나의 시간에도 정신을 집중할 수 있을 것만 같아요. 그렇다면, 분명……」
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「하나, 둘, 셋…… 후우. 체온, 심박수, 근육 상태 모두 좋습니다. 자, 오늘은 무얼 할까요?」
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「다리 상태가 최상이에요. 온 힘을 다해 트레이닝에 임할 수 있겠어요…… 그것만으로도 무척 가슴이 벅차오르네요.」
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「평범하고 아무 일도 없는 날이 제게는 최고의 날이랍니다…… 하지만 『지금』은 더 높은 경지를 향해 나아가야겠지요.」
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「눈앞의 한순간 한순간을 소중히 여기며…… 정성껏 신중하게 트레이닝에 임하도록 해요.」
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「발걸음이 무겁네요…… 하지만 그렇다고 낙담해선 안 되겠지요. 제 자신을 믿어야 해요…… 여태껏 쌓아 올린 수행을요.」
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후우…… 살다 보면 이런 날도 있는 법이지요. 조급해하지 말고…… 차라도 한 잔 마시며 기분 전환을 해 볼까요?」
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%…… 오늘의 전반적인 컨디션을 고려해 보았을 때…… 조정을 거치는 편이 좋을 것 같아요…… 트레이닝 메뉴를요……」
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「지금의 저는 살아온 증거를 남길 수 있을까요…… 아니요, 결코 조급해해선 안 돼요. 심호흡을…… 마음을 가라앉히고, 깊게 숨을 들이쉬고……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「유모 할머니께서 직접 가르쳐 주신 수제 과자를 구워 왔어요. 그 따스한 풍미를 당신도 느껴보셨으면 좋겠네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「병원에 입원해 있을 때 꿈꾸었던 그 의상…… 지금 이렇게 몸에 걸치고 있다니…… 그 시절의 저에게 보여주고 싶을 정도예요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「가슴팍의 브로치는 아버님께서 선물해 주신 목걸이를 참고해서 디자인한 것이랍니다…… 만지고 있으면 마음이 차분해져요.」
  # CFLAGNAME:66 = 招募状态
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「매일 아침 %CALL_69%를 깨우는 평범한 나날들…… 제게는 더없이 행복한 시간이에요.」
  - if: era.get('cflag:64:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「조금 전에 해바라기 꽃다발을 안고 있는 %CALL_64%를 만났답니다…… %SEX%의 미소는 정말 해바라기를 쏙 빼닮았어요🎵」
  - if: era.get('cflag:86:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「얼마 전 %CALL_86%의 어릴 적 사진을 발견했어요. 어린 나이에도 무척 기품 있고 아름다워서…… 정말 눈이 부시더군요.」
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그거 아시나요? %CALL_21%의 대화 방식은…… 세상사는 인정을 엿볼 수 있어서, 마치 라쿠고를 감상하는 기분이 든답니다.」
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「매일 아침 %CALL_69%를 깨우는 평범한 나날들…… 제게는 더없이 행복한 시간이에요.」
  - if: era.get('cflag:72:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_72%는 참 아름답네요, 라는 말을 꺼냈더니…… 후훗, 두 동급생의 뺨이 벚꽃처럼 붉게 물들었지 뭐예요.」
  - if: era.get('cflag:6:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_6% 씨가 음식을 먹는 모습은 저도 모르게 넋을 잃고 보게 돼요. 덕분에 저도 평소보다 조금 더 먹게 된답니다.」
  - if: era.get('cflag:32:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_32% 씨와 함께 밤의 다회를 열었습니다만, 홍차가 빛을 내뿜어서…… 후훗, 참으로 신기한 경험이었답니다🎵」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「선물해 주셔서 감사합니다. 조만간 정성 어린 보답을 준비할 테니 기대를 품고 기다려 주세요🎵」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「제게 주시는 선물인가요? 고맙습니다, 소중히 간직할게요.」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후훗, 이렇게 함께 요리를 하니 무척 신기하고 즐거운 기분이 드네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%께서는 중국 요리도 다루실 줄 아는군요? 나중에 제게도 가르쳐 주실 수 있나요?」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「어머나…… 저와 제 사랑의 호흡이 벌써 이렇게나 잘 맞다니, 마치 수십 년을 함께 산 노부부 같네요, 후훗🎵」

office_rest:
  - random: true
    lines:
      - 밀려오는 가벼운 졸음에 잠시 휴식을 취하려던 것이 그만 깊은 잠으로 이어지고 말았다.
      - 번뜩 고개를 들어보니 아르당 역시 소파에 기대어 잠들어 있었다.
      - %YOU%은(는) %SEX%가 감기에 걸리지 않도록 겉옷을 가만히 덮어주었다.
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「어떠신가요? 제 사랑, 시원하셔요?」
      - %YOU%은(는) 아르당의 무릎을 베고 누웠고, %SEX%는 면봉으로 %YOU%의 귀를 조심스레 파주고 있었다.
      - 머리로 전해지는 부드러운 감촉과 %SEX%에게서 풍겨오는 은은한 향기가 %YOU%의 신경을 간지럽혔다.
      - %SEX%는 %YOU%의 당혹감을 눈치챈 듯 짓궂은 미소를 지으며, 면봉을 멀리하고는 %YOU%의 귓가에 가볍게 바람을 불어 넣었다.

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「세상에, 그런 공략 방법도 있었군요? 정말 대단하셔요.」
      - %YOU%의 기발하고 엉뚱한 아이디어가 기대 이상의 훌륭한 성과를 거두자, 곁에 있던 아르당은 감탄을 금치 못했다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「왠지 모르게 %CALLNAME%과는 호흡이 참 잘 맞는 것 같아요. 이런 감각, 무척 근사하네요.」
      - 평소 비디오 게임을 접할 기회가 드물었던 아르당이었지만, %YOU%과(와) 함께 협동 게임을 플레이하며 놀라울 정도의 완벽한 케미를 보여주었다.

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……전…… 전 증명해 보이고 싶어요…… 제가 언니에게 뒤처지지 않는다는 것을요! 그저 그분의 여동생이 아닌, 오롯이 저 자신— 메지로 아르당 이라는 것을 모두에게 증명하겠어요!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「제 한계를 돌파하여 아직 보지 못한 풍경을 마주하고, 저만의 온전한 빛을 꽃피우고 싶답니다!」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후훗, 학원 교정에서 이렇게 손을 잡고 모두에게 보여주는 일은 꽤나 기묘한 기분이 드네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%? 너무 긴장하신 것 같아요. 자~ 저와 함께 심호흡을 하며 긴장을 풀어보아요.」

s_r_lunch:
  - random: true
    lines:
      - 오늘 아르당과 함께 도시락을 먹게 되었는데, 아르당이 특별히 %YOU%의 몫까지 도시락을 준비해 주었다.
      - 정갈하고 풍성하게 채워진 도시락을 보며 %YOU%은(는) 아르당이 훗날 분명 훌륭한 현모양처가 될 것이라며 감탄을 아끼지 않았다.
      - その言葉に、アルダンは少し体を横に向け、%SEX%の赤い頬を%YOU%に見られないようにする。
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「제 사랑, 아~~ 해 보세요.」
      - 선을 넘어서며 깊은 관계로 발전한 이후로, 두 사람 사이에는 서로 음식을 먹여주는 행동이 일상이 되었다.
      - 식사 시간은 예전보다 조금 더 길어졌을지 모른다.
      - 하지만 두 사람은 서로와 함께하는 이 시간을 더없이 소중히 여기고 있었다.

o_r_fishing:
  - random: true
    lines:
      - %YOU%は竿を川へ投げ、魚がかかるのを待つ。%CHARA% はそばに座り、静かに%YOU%に付き添う。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「와아, 축하드려요, %CALLNAME%. 이렇게나 커다란 물고기를 낚으시다니요.」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「이렇게 강변을 산책하는, 고요하고 평범한 일상 또한 제게는 커다란 기쁨을 주네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「강바람이 스쳐 지나가니 정말 상쾌하네요. 다음번에는 이곳으로 같이 가벼운 조깅을 하러 와요, %CALLNAME%.」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「힘내셔요, %CALLNAME%. 혹시 코인이 부족하시다면 제게도 아직 있으니 말씀해 주세요.」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「저 인형을 갖고 싶으신가요? 사실 저도 무척 탐나던 참이었어요. 우리 함께 노력해 봐요. 당신이 제 곁에 있어 주기만 한다면, 그 어떤 일이든 해낼 수 있을 것만 같은 기분이 들어요.」

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「후훗, 과연 어떤 상품을 뽑게 될지 기대되네요🎵」

o_s_ktv:
  - 위닝 라이브를 연습하기 위해, %YOU%과(와) 아르당은 가라오케를 찾았다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「높은 하늘을 넘어, 꿈을 손에 쥐고, 마치 생명을 태우듯 찬란하게 빛나리니~🎵」
  - %SEX%의 감미롭고 부드러운 목소리에 %YOU%은(는) 저도 모르게 넋을 잃고 빠져들어, 점차 시간 가는 것조차 잊어버렸다.

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후훗, 배우분들의 연기가 무척 흥미롭네요. 그리고 연출가 분도 꽤 참신한 발상을 하시는 분 같아요.」
      - %YOU%은(는) 공포 영화의 갑작스러운 점프 스케어 연출에 저도 모르게 몸을 움츠렸으나, 곁에 있던 아르당은 오히려 흥미진진하게 감상하고 있었다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「추리 영화인가요? 작중에서 펼쳐지는 두뇌 싸움을 보고 있으면 참 즐거워져요. 저도 이따금 주인공의 입장에 몰입해서 범인을 추리해 보곤 한답니다.」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「로맨스 영화인가요? 후후🎵 당신과 함께 감상할 수 있다니 무척 기대되는 걸요. 이렇게 하면 연애에 대한 제 사랑의 생각을 조금 더 깊이 이해할 수 있을 테니까요.」
      - 아르당은 %YOU%의 팔에 슬며시 팔짱을 끼며 행복한 미소를 지었다.

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후훗, %CALLNAME%과 함께 신사에 와서 소원을 비니, 가족들과 함께 왔을 때와는 전혀 다른 기분이 드네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「트레센의 역사 속에서 수많은 우마무스메들이 부상과 질병으로 은퇴해 갔다는 사실을 떠올리면 두려워지기도 해요. 하지만 그렇기에 더더욱 주어진 시간 속에서 저만의 색채를 새겨넣고 싶답니다.」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후훗, %CALLNAME%께서 추천해 주신 가게는 정말 훌륭하네요. 저도 모르게 조금 과식해 버렸어요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「음~ 이 가게의 당근 스튜는 정말 독특한 풍미가 있네요. 대접해 주셔서 감사합니다, %CALLNAME%.」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「기다리게 해서 죄송해요, %CALLNAME%. 오늘 저희는 어디로 향하나요?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%께서는 언제나 저를 많이 도와주셨지요. 이번만큼은 저 역시 %CALLNAME%을 위해 무언가 힘이 되어 드리고 싶어요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「이렇게 가족이 아닌 다른 누군가와 거리를 거니는 것은 처음이라, 무척 신기하고 기묘한 감각이 드네요.」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - 아르당이 %YOU%의 팔짱을 낀 채 거리를 걷자, 주변에서 쏟아지는 수많은 시선에 %YOU%은(는) 내심 어색해했으나, 아르당은 도리어 무척이나 즐거워 보였다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후훗~ 제 사랑🎵 긴장하셨나요?」
      - 당신의 긴장을 알아챈 듯, 아르당은 장난기 어린 목소리로 물어보며 팔짱을 더욱 단단히 조여왔다.

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「제가 입은 이 옷, 어떤가요? %CALLNAME%.」
      - 着替えたアルダンは前へ出て、優雅な立ち姿のまま尋ねる。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「저편의 매장에서 세일 행사를 진행하는 모양이에요. 같이 가보실래요?」

good_night_normal:
  sync: true
  lines:
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「오늘도 수고 많으셨어요, %CALLNAME%. 내일 봬요!」
            - 메지로 아르당과 하루 트레이닝을 마친 후, %YOU%은(는) 기숙사 건물 밖에 서서 아르당이 들어가는 모습을 배웅했다.
            - %YOU%은(는) 미소를 지으며 손을 흔들어 작별을 고하는 메지로 아르당을 바라보며, 똑같이 미소로 화답했다.
        - if: era.get('love:71') >= 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「오늘도 수고 많으셨어요, 제 사랑🎵 피로를 풀어드릴 마사지를 해 드릴까요?」
            - メジロアルダンとの一日の労を終え、メジロアルダンは%YOU%の後ろに回り、ちょうどいい力で%YOU%の肩を揉み始める。
            - 「고마워, 아르당. 너도 오늘 고생 많았는데, 조금 있다가 교대해서 내가 마사지해 줄게.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그럼 부탁드릴게요🎵」
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('status:71:39') === 0
              content: 「아무래도 오늘 %SEX%를 너무 무리하게 연습시킨 모양이네.」
            - %YOU%은(는) %SEX%의 어깨를 가볍게 토닥였다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「으음……~ 어라? 제가 그만 깜빡 잠이 들었나 봐요!」
            - 「오늘 트레이닝은 끝났어. 고생 많았으니 기숙사까지 바래다줄게.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「감사합니다, %CALLNAME%. 신세를 지게 되었네요.」
            - %YOU%は時おりあくびをするメジロアルダンと%SEX%の寮まで行き、サクラチヨノオーが引き継いだのを見て、安心して帰る。
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('status:71:39') === 0
              content: 「오늘도 수고 많았어, 아르당.」
            - %YOU%のそばで安心して眠るメジロアルダンを見て、%YOU%は小さな声で言う。
            - 「좋은 꿈 꾸기를, 잘 자.」
            - %YOU%이(가) %SEX%가 미리 비워둔 머리맡 자리에 눕자, 메지로 아르당은 %YOU%의 온기를 감지하고는 이내 %YOU%을(를) 꼭 끌어안았다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「잘 자셔요, 여신님들께서 제게 보내주신 소중한 보물.」

cl_new_year:
  title: 新年
  lines:
    - 新年の一日。あちこちが祭りの楽しさで溢れている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、あけましておめでとうございます～」
    - acc: 1
      content: 「あけましておめでとう、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、一緒に神社へ初詣に行きませんか？」
    - acc: 1
      content: 「もちろん～」
    - %YOU%はアルダンの誘いを受け、一緒に神社を訪れる。互いを思う願いをかけたあと、新年の小さな遊びも一緒に楽しんだ。

cl_valentine:
  title: バレンタイン
  lines:
    - 今日はバレンタイン。恋する少女たちが、想い人へ本命チョコを、ただの友人へは義理チョコを贈る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「誰だかわかりますか🎵」
    - acc: 1
      content: 「アルダン。」
    - %YOU%が後ろの人の名前を正確に呼ぶと、視界を遮っていた手が外れる。
    - アルダンは%YOU%の前に出て、幸せそうな笑顔で、綺麗に包まれたチョコレートを差し出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ハッピーバレンタイン、%CALLNAME%。手作りですので、行き届かないところもあるかもしれません。召し上がって、ゆっくり休んでください。」
    - acc: 1
      content: 「ありがとう、アルダン。」

cl_fans:
  title: ファン感謝祭
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日はファン感謝祭です。ん……ファンの皆さんを、どうお迎えすればいいのでしょう？ %CALLNAME%」
    - アルダンは少し不安げに、どんな感謝の仕方がいいか%YOU%に尋ねる。
    - acc: 1
      content: 「アルダンらしいやり方で、ファンの心を掴むんだ！」
    - %YOU%の答えを聞き、アルダンは微笑み、自信を取り戻す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ふふ、%CALLNAME%の言い方は、いつも面白くて……それでいて、私を励ましてくれます。」
    - そのあとのファン感謝祭は、滞りなく終わった。

cl_temple_fair:
  title: 縁日
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は縁日があるそうです。夜遅くには肝試しもあるとか。%CALLNAME%、一緒に行きませんか？」
    - アルダンは期待の目で%YOU%を見る。%YOU%には断りようがない。
    - 縁日を一緒に回り、楽しい時間を過ごしたあと、%YOU%と%SEX%は肝試しへ向かう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、肝試し。きっと面白いでしょうね。」
    - acc: 1
      content: 「怖がっていないな。むしろ興奮している。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ。体の都合で、こうした催しにはあまり参加できませんでした。でも今は、%CALLNAME%のおかげで、以前やりたかったことができるんです。」
    - %YOU%はアルダンの手を引き、一緒に肝試しへ入る。アルダンは%YOU%のそばでずっと幸せそうに笑い、時おり視線を%YOU%へ向けている。

cl_halloween:
  title: ハロウィン
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トリック・オア・トリート🎵」
    - ハロウィン当日、%YOU%は事務所でノックを聞き、開けてみると、吸血鬼に扮したアルダンだった。
    - 衣装は誘惑と高貴さを少しにじませ、脅かすつもりのかたちが、かえって可愛い。
    - acc: 1
      content: 「ハッピーハロウィン、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、ハッピーハロウィン、%CALLNAME%。この装い、いかがでしょう？」
    - 「すごくいい。見入ってしまった。完全に虜だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、では初擁を差し上げますね、%CALLNAME%🎵」

cl_christmas:
  title: クリスマス
  lines:
    - %YOU%はアルダンの誘いを受け、メジロ家で開かれるクリスマスパーティーに出席する。
    - 夜になると、%SEX%の友人たちはそれぞれ帰っていった——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、私と『二次会』をしましょう。」
    - acc: 1
      content: 「いいよ。」
    - %YOU%はアルダンの誘いを受け、%SEX%と夜の街を歩く。今日しか見られない景色を目にした。
    - %YOU%とアルダンはプラネタリウムへ行き、一緒に星を観る。
    - 別れ際、来年のクリスマスも一緒に過ごそうと約束して、幸せな一日が終わった。

birthday:
  title: 誕生日
  lines:
    - 今日はメジロアルダンの誕生日。
    - acc: 1
      content: 「お誕生日おめでとう、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう、%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今夜、皆さんを招いて、楽しいパーティーを開きましょう。」
    - %YOU%はアルダンの考えに賛成し、準備へ向かう。
    - 夜、家で盛大なバースデパーティが開かれ、遅くまで遊んだ。

# 恋慕が依存
# 一度きり
birthday_dependence:
  title: 誕生日
  lines:
    - acc: 1
      content: 「お誕生日おめでとう、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう。大好きなあなた。」
    - 今日はアルダンの誕生日。%YOU%は誕生日の贈り物を渡し、アルダンの親族や友人たちと一緒に、%SEX%の誕生会を開いた。
    - アルダンの幸せそうな笑顔を見て、%YOU%は自分の労が報われたと感じる。
    - ………………
    - 会が終わると、アルダンは参加した親族や友人へ順に手を振る。最後のひとりが去ったあと、アルダンは%YOU%のそばへ来て、%YOU%の手を握った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……大好きなあなた。もっと、もっと『いま』の私たちを作りたいんです。もう少し……私と、ふたりだけでいてくれますか？」
    - それからメジロアルダンは%YOU%の手を引き、メジロ家の裏山へ向かう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大好きなあなた、ここは夜いちばん好きな場所です。ここで空を見上げると、とても綺麗な星空が見えるんです。」
    - アルダンの言葉を聞き、%YOU%は顔を上げて夜空を見る。明かりの影響から離れ、星がはっきり見える。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、宇宙は%UMA%たちの歴史のようです。瞬く星ひとつひとつが、歴史に眩い光を残した%UMA%たちのようで、%THEY%はこんなにも輝いて、美しい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「夜ここに来て星を見るのが好きなのも、そのためです。歴史の流れにいる先輩たちの輝きを、浴びているみたいで。」
    - acc: 1
      content: 「君には、もう君自身の輝きがある。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、大好きなあなた、それは少し違います。私が持っているのは、あなたと私、ふたりで描いた輝きだと思います。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「互いを映し合うふたりが、私たち……共通の……たったひとつの輝きを咲かせたんです🎵」
    - メジロアルダンは%YOU%に凭れ、%YOU%と一緒にこの星空を仰ぎ、同期する心拍を感じている。
    - 星空の絵の下で、凭れ合うふたりがいる。
