# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file メジロパーマー - 日常
# @author KUN
# @author Claude (翻訳)
# [번역 대상] select
select:
  sync: true
  lines:
    - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「오늘의 %SELF_CALL%도 활기 만발이야! 훈련 정도는 단숨에 해치워 버리자고!」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「나만의 주법으로 달리는 게 얼마나 중요한지 깨닫게 해준 건 바로 %CALLNAME% 너야. 늘 고마워!」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「무슨 일이든 %SELF_CALL%에게 말해줘! 아, 사실은 그냥 내가 너랑 얘기하고 싶을 뿐이지만~」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「요즘 다들 나한테 말을 자주 걸어주네. 난 상관없지만…… 오히려 대환영이야!」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「最近の%CALL_65%%SEX%ってさあ……ねえ、%CALLNAME%、聞いてる？」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「역시 도주할 때의 기분은 최고야…… 오늘도 같이 달려볼까, %CALLNAME%?」
        - if: era.get('love:64') >= 50
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%, 언제쯤 시간 나? 너랑 같이 외출하고 싶은데…… 그냥 그렇다구……」
        - if: era.get('love:64') === 100
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%는 계속 내 곁에 있어 줄 거지…… 그치?」
    - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「쿨…… 쿨……」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「이제 더는 못 먹어…… 에헤헤……」

# [번역 완료] select_escape
select_escape:
  sync: true
  lines:
    - if: d.half_life === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「내가 여기 있는 게 이상해, %CALLNAME%?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%의 곁 말고는…… 이제 어디로 가야 할지 모르겠어……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%의 곁에 있을 수만 있다면……」
    - if: d.half_life === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「여어, %CALLNAME%.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……미안해, 그런 짓을 저질렀으니 용서받지 못하는 게 당연하겠지……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만 난 역시…… 네 곁에 있고 싶어.」

# [번역 완료] office_study
office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「에헤, 그런 거야? 역시 %CALLNAME%네.」
      - %CHARA%는 기쁘게 답안을 작성하더니, 곁에 있는 %YOU%을(를) 향해 엄지를 치켜세우는 것도 잊지 않았다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「OK OK, 이해했어!」
      - %CHARA%는 무언가 깨달은 듯, 남은 문제들을 거침없이 해결해 나갔다.

# [번역 완료] office_prepare
office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「좋아, 이대로 전력을 다해 도망쳐 보겠어!」
      - %CHARA%는 주먹을 꽉 쥐고 기세 좋게 외쳤다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「편자도 다 박았네, 고마워, %CALLNAME%!」
      - %CHARA%는 조금 놀란 표정이었으나, 이내 얼굴에 따스한 미소를 띄웠다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「어라~ 그렇게 긴장할 거까진 없잖아, 트레이너?」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그래도 완벽하게 해낼 거야. 승리를 눈앞에서 놓치고 싶지는 않으니까!」

# [번역 대상] talk
talk:
  # STATUSNAME:10 = 昏睡
  # STATUSNAME:39 = 馬跳S
  - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
    lines:
      - if: d.half_life === 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%의 냄새…… 더 원해…… 어디 있어……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「안…… 보내줄 거야…… 후후~」
      - if: d.half_life === 0
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「후우…… 이제 더는 못 먹어……」
          - if: era.get('love:64') >= 50
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「후아…… %CALLNAME%의 냄새…… 헤헤……」
  - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「가끔은 같이 더 먼 곳으로 도망쳐 보는 건 어때?」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「골프 한번 쳐볼래? %SELF_CALL%가 가르쳐 줄 수 있는데!」
      # CFLAGNAME:48 = 育成合計週
      # BASENAME:0 = 体力
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「으으…… 피로감에선 도망칠 수가 없네…… 휴가라도 내고 싶어질 정도야……」
      # CFLAGNAME:40 = やる気
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「이상하네…… 다리가 무거워……」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「준비 완료! 어떤 훈련이든 해낼 수 있으니까 마음껏 시켜줘, %CALLNAME%!」
      # STATUSNAME:3 = 太り気味
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('status:64:3') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「이런, 좀 너무 많이 먹은 것 같네……」
      # CFLAGNAME:58 = 世話
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_71%의 방식은 역시 좀 무른 느낌인데~ 다음에 좀 더 엄격하게 해달라고 부탁해볼까?」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:71') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「왠지 %CALL_71%이 진심이 아닌 것 같은 기분이 들어, 착각일까?」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「요즘 %CALL_71%이…… 자꾸 딴생각을 하는 것 같아……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「저기, %CALLNAME%. 전부 네가 받아주면 안 될까?」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50 && era.get('love:71') >= 50 && era.get('relation:64:71') > 225
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ、いつか%CALL_71%と一緒に走ってみない？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「훈련이 다 끝나면 같이 돌아간다거나……」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 86
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「큰일이야, %CALL_86%의 훈련은 엄청나게 스파르타라고……!」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「왠지 요즘 갑자기 한가해진 느낌이네……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%~ 나도 학원에 데려가 줘~」
      # CFLAGNAME:0 = 性別
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 59 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_59%는 여전하네, 남자를 대할 때면 겁을 먹으니까.」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「하지만 걱정 마, 필요한 훈련은 내가 책임질게!」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_65%은 역시 에너지가 초-열정적이야! 내가 돌봐주고 있다는 느낌이 전혀 안 들 정도라니까.」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やっぱり、%CALL_65%%SEX%は太陽だよ。まぶしすぎ……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「응? 설마…… %CALLNAME%, 너 질투하는 거야?」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_74%%SEX%、やっぱり……頑張ってるね。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%善信称呼光明%은 역시…… 정말 노력파야.」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「역시 %CALL_74%는 참 순수해…… 가끔 멍하니 있다가 너무 멀리 달려가 버리긴 하지만.」
      - if: d.half_life === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%는 나를 버리지 않을 거지, 그치?」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「역시 %善信称呼光明%는 참 순수해…… 가끔 멍하니 있다가 너무 멀리 달려가 버리긴 하지만.」
      - if: era.get('love:64') >= 50 && era.get('love:64') < 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「가끔 그런 생각이 들어. %CALLNAME% 네가 없었다면 난 지금처럼 웃을 수 없었을 거라고…… 아냐 아냐! 방금 건 못 들은 걸로 해줘!」
      - if: era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「있지, %CALLNAME%. 언제 한번 나랑 같이 메지로 가문에 가보지 않을래?」
      - if: era.get('love:64') === 100
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%는 언제까지나 나의 『트레이너』로 있어 줄 거지?」
      # CFLAGNAME:81 = 妊娠段階
      - if: (era.get('cflag:64:81') >> 2) > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「있지, %호칭%. 언제 한번 나랑 같이 메지로 가문에 가보지 않을래?」
      # CFLAGNAME:66 = 募集状態
      - if: d.half_life === 0 && era.get('cflag:59:66') === 1 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_59%는 남자를 대하는 게 서툴러서 너한테 폐를 끼치고 있네…… 미안해.」
      - if: d.half_life === 0 && era.get('cflag:65:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_65%가 또 못 알아들을 소리를 하네…… 하지만 내가 전부 알아내고 말겠어!」
      - if: d.half_life === 0 && era.get('cflag:74:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「예전엔 내가 %CALL_74%의 머리를 자주 정리해 주곤 했어~ 하지만 이젠 %CALLNAME% 너한테 부탁해야겠네.」

# [번역 대상] office_gift
office_gift:
  - if: d.half_life === 0
    lines:
      - if: era.get('love:64') < 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「선물? 나 주는 거야? 그게…… 기뻐! 정말로!」
          - %CHARA%는 꽤 놀란 듯한 모습이었다.
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「고마워! 소중히 간직할게! 정말 고마워, %CALLNAME%!」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%善信称呼太阳神%가 또 못 알아들을 소리를 하네…… 하지만 내가 전부 알아내고 말겠어!」
      - if: era.get('love:64') >= 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「예전엔 내가 %善信称呼光明%의 머리를 자주 정리해 주곤 했어~ 하지만 이젠 %호칭% 너한테 부탁해야겠네.」
          - %CHARA%は少しもじもじしている。さっき%SEX%が何を言ったかは、聞こえていないことにする。
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「이거 나한테 주는 선물이야?……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「난 게임도 꽤 잘한다구, 에헴~」
      - %CHARA%는 선물을 품에 꽉 껴안았고, 눈가에는 살짝 이슬이 맺혔다.

# [번역 대상] office_cook
office_cook:
  - if: d.half_life === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「안심해, %SELF_CALL%는 요리도 꽤 잘하니까!」
      - %CHARA%는 익숙한 솜씨로 요리를 하며 %YOU%에게 가볍게 손을 흔들어 보였다.
  - if: d.half_life === 0 && era.get('love:64') >= 50 && era.get('love:64') < 90
    random: true
    lines:
      - 두 사람은 어느샌가 자연스럽게 손발을 맞춰 점심 식사를 준비했다. 본인들조차 깨닫지 못할 정도로 완벽한 호흡이었다.
      - 자리에 앉아 식사를 시작하려던 참에야 두 사람은 방금 전의 상황을 떠올렸다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「파머 %씨%는 쉽게 지지 않으니까 잘 봐둬, %호칭%!」
  - if: d.half_life === 0 && era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%SELF_CALL%의 솜씨, %CALLNAME% 너는 지켜보기만 하라고~」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - ( %CALLNAME%의 입맛에 맞을지 모르겠네~ )
  - if: d.half_life === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「먼저 %CALLNAME%의 위장을 사로잡으면, 계속해서……」
      - %YOU%에게는 들리지 않을 정도의 작은 목소리로 중얼거렸다.

# [번역 대상] office_rest
office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%호칭%와 함께라면 뭐든 즐거워, 에헤헤~」
  - random: true
    lines:
      - 조용히 함께 누워 둘만의 고요한 공간을 만끽했다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「오오, 이 게임! 예전에 본가에서 %善信称呼莱恩%이랑 자주 했던 거야!」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%와 함께하는 시간은…… 정말 안심이 돼.」
  - if: era.get('love:64') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「에이, 모처럼 시간이 비었는데……」

# [번역 대상] office_game
office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%호칭%, 정말로 파머 %씨%랑 게임만 할 거야?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%SELF_CALL%는 쉽게 지지 않으니까 잘 봐둬, %CALLNAME%!」
      - %CHARA%는 게임 화면을 진지하게 응시하며 승부욕 넘치는 표정을 지었다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%와 함께라면 뭐든 즐거워, 에헤헤~」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「오오, 이 게임! 예전에 본가에서 %CALL_27%이랑 자주 했던 거야!」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「이거 나한테 주는 선물이야?……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 정말로 %SELF_CALL%랑 게임만 할 거야?」

# [번역 완료] s_a_tree_hollow
s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「역시 도망치는 기분은 최고야!! 절대로 멈추지 않을 거니까!!」
      - 나무 구멍을 향해 외친 뒤 상쾌한 미소를 짓는 %CHARA%를 보며, %YOU%은(는) 마음속으로 반드시 %SEX%를 끝까지 지지해주겠다고 다짐했다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「반드시! 이길 거야! 레이스든, 그 무엇이든!」
      - 비록 %YOU%은(는) 그 말이 무엇을 의미하는지 정확히 알 수 없었으나, %CHARA%의 미소를 본 뒤 더 깊이 생각하지 않기로 했다.

# [번역 완료] s_a_dating
s_a_dating:
  - if: d.half_life === 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「저기, 여기서 데이트 하는건 좀…… 그치?」
      - %CHARA%는 내심 신경 쓰는 눈치였으나, 맞잡은 손은 조금도 놓을 기색이 없었다.
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「데이트라……」
      - %CHARA%는 %YOU%의 팔에 꼭 매달린 채, 주변의 시선에 아랑곳하지 않고 어깨에 얼굴을 가까이 밀착했다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「헤헤~」

# [번역 완료] s_r_lunch
s_r_lunch:
  - if: d.check > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「평소 옥상엔 사람이 거의 없네. 이것도 일종의 데이트라고 할 수 있으려나…… 헤헤.」
      - %CHARA%가 뺨을 긁적이며 무언가 중얼거리는 것을 본 %YOU%은(는), %SEX%의 도시락 통에 문어 소시지 하나를 집어 넣어주었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「앗! 방금 들었어?!」
      - acc: 1
        content: 「못 들었어」
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「앗! 그게…… 정말이야?」
          - %CHARA%는 얼굴을 붉히며 고개를 숙인 채 묵묵히 도시락을 먹었다.
      - acc: 2
        content: 「……」（애정도+1）
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「뭐, 뭐라고 말 좀 해봐, %CALLNAME%!」
          - %CHARA%는 빨개진 얼굴로 볼을 부풀리며 %YOU%의 어깨를 작은 주먹으로 가볍게 두드렸다.
  - if: '!d.check'
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「역시 옥상 풍경은 끝내준다니까!」
          - 옥상에서 풍경을 감상하며 함께 도시락을 나누어 먹었다.
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「맛있다! %CALLNAME%의 요리 솜씨는 정말 대단해!」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「옥상 경치 좋지? 난 기분 전환하고 싶을 때 가끔 올라오곤 해!」

# [번역 완료] o_r_fishing
o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「나한테 맡겨줘……! 예전의 %SELF_CALL%는 이런 거 꽤 잘했거든!」
      - %CHARA%는 소매를 걷어붙이고 눈앞의 낚싯대를 향해 의욕이 넘치는 모습을 보였다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그립네~ 예전에도 자주 이렇게 소풍을 나오곤 했었는데~」
      - %CHARA%는 낚싯대를 던지고 수면 위의 평온한 찌를 바라보며 편안하게 이야기를 나누기 시작했다.

# [번역 대상] o_r_walking
o_r_walking:
  - random: true
    lines:
      - 두 사람은 생각을 비우고 강둑길을 천천히 걸었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「가끔은 이렇게 느긋하게 있는 것도 나쁘지 않네……」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - 주변에 아무도 없는 강둑길을 보며 %CHARA%는 슬며시 %YOU%의 곁으로 다가왔다.
      - 「あの、%SELF_CALL%？」
      - 자신의 팔에 밀착하는 %CHARA%를 보며 마음이 조금 설레었다.
      - %CHARA%는 못 들은 척 아무 말 없이 %YOU%의 팔을 감싸 안으며 몸을 기댔다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「이대로…… 있어도 될까?」

# [번역 완료] o_s_arcade
o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「오오, 내 인형이 있어! %CALLNAME%, %CALLNAME%! 저거 한번 해보고 싶어!」
      - %CHARA%는 인형 뽑기 기계 속의 인형을 가리키며 %YOU%을(를) 이끌고 가볍게 뛰어갔다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「예전에 %SIBLINGS%들과 이걸 자주 하곤 했지. %CALLNAME%, 긴장하는 게 좋을걸?」
      - 눈앞의 오락기를 바라보는 %CHARA%의 눈동자가 반짝였다.

o_s_drawing:
  - random: true
    lines:
      - 마침 최근에는 경품 추첨 이벤트가 없는 모양이다……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「괜찮아, 기회가 되면 꼭 다시 오자!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아쉽네, 오늘도 추첨권 행사는 없구나……」

# [번역 완료] o_s_ktv
o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「친구들이랑 종종 여기 오곤 해. 기분 전환하기에 딱 좋거든.」
      - %CHARA%의 얼굴에는 평소처럼 편안한 미소가 떠올랐고, 그 덕분에 %YOU% 역시 긴장이 풀렸다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「역시 음악은 기분을 들뜨게 해줘, %CALLNAME%!」
      - %CHARA%는 무척 즐거운 듯 음악에 맞춰 몸을 흔들었다.

# [번역 완료] o_s_movie
o_s_movie:
  - if: era.get('cflag:71:66') !== 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아, 저건 %CALL_71%이 추천해줬던 영화네!」
  - if: era.get('cflag:71:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아, 저거 %CALL_71%이 추천했던 영화다!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_71%이랑 같이 오지 못해서 좀 아쉽네…… 다음에 셋이서 같이 오는 건 어때?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「영화 오랜만에 보네. 뭘 보면 좋을까……」
      - %CHARA%는 영화관 포스터들을 하나하나 찬찬히 살펴보았다.
  - if: era.get('love:64') >= 25 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「저기, %CALLNAME%…… 로맨스 영화 같은 거 좋아해?」
      - %CHARA%는 무언가 기대하는 듯 조금 조심스러운 태도를 보였다.
  - if: era.get('love:64') >= 50 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「둘이서 영화를 보러 온다니, 왠지 평소랑은 다른 느낌이네……」
      - %CHARA%는 옆에서 잠시 중얼거렸으나, %YOU%의 손을 잡은 힘은 더욱 단단해졌다.

# [번역 대상] o_c_pray
o_c_pray:
  - 트레센 근처의 신사는 규모는 작지만 %UMA%들 사이에서는 꽤 유명하다.
  - 많은 %UMA%들이 레이스에 나가기 전 이곳을 찾아 기대를 품고 운세를 점치곤 한다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「가끔 이렇게 운 시험을 해보는 것도 나쁘지 않네.」
  - %CHARA%는 도주가 특기인 성격답게, 무언가로부터 도망치고 싶을 때면 기분에 따라 %YOU%을(를) 이끌고 이곳에 와서 운을 시험하곤 한다.
  - 이곳에 오면 항상 마음이 편안해지는 모양인데, %SEX%에게는 이것 또한 일종의 도주일지도 모른다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「여기 있으면…… 많은 일을 잊게 되는 기분이야.」
  - %CHARA%는 머리를 감싸 쥐고 편안한 모습으로 %YOU%의 곁을 털털하게 걸었다.
  - 신사에는 사람이 없었고, 나뭇가지를 스쳐 지나가는 미풍이 얼굴에 닿는 감촉이 무척 쾌적했다.
  - 눈앞의 산통을 보며 %CHARA%는 옆에 있는 %YOU%을(를) 쿡 찌르며 아무렇지 않은 척 말을 걸었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「트레이너도 뽑아볼래? 어쩌면 대길이 나올지도 몰라.」
  - 농담 섞인 말투로 앞을 가리켰다.
  - acc: 1
    content: 「이건 %T称呼善信%의 행운인데, 내가 마음대로 끼어들 순 없지.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「나의 행운이라…… 그럼 나 뽑는다!」
  - %CHARA%는 %YOU%에게 고개를 끄덕이고 신사를 향해 두 손을 모았다.
  - 잠시 눈을 감고 기도한 뒤 점괘를 집어 들었다.
  - if: d.dice <= 0.8
    lines:
      - 종이에는 「길」이라는 글자가 선명하게 적혀 있어 오늘의 행운을 알리는 듯했다.
      - acc: 1
        content: 「행운이 찾아왔네~」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「응응, 오늘 정말 운이 좋은걸.」
      - 점괘 종이를 내려놓고 돌아서서 %YOU%의 손을 꽉 잡았다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「 %CALLNAME%에게도 고마워…… 이건 분명 우리 둘의 행운일 테니까.」
      - 환하게 웃는 그 얼굴을 보자 %YOU%도 어느샌가 %CHARA%와 함께 미소 짓고 있었다.
  - if: d.dice > 0.8
    lines:
      - 점괘 종이를 펼쳤으나 대길은 보이지 않았다.
      - 종이에 적힌 「흉」을 본 %CHARA%는 조금 당황한 듯 %YOU%의 시선을 피했다.
      - acc: 1
        content: 「운은 보존되는 법이니까, 내일은 행운으로 바뀔 거야.」
      - %CHARA%는 조금 낙담한 표정으로 %YOU%을(를) 향해 돌아섰으나 시선은 여전히 비껴가 있었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「어떡하지, 오늘 이거……」
      - 긴장한 탓인지 손가락을 가만히 두지 못하고 꼼지락거렸다.
      - 불안해하는 %CHARA%를 보며 %YOU%은(는) 손을 뻗어 %SEX%의 부드러운 머리카락을 살살 쓰다듬어 주었다.
      - acc: 1
        content: 「괜찮아.」
      - %CHARA%는 아무 말도 하지 않았지만, 쫑긋거리는 귀가 그녀의 기분을 대변해주고 있었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「고마워……」
      - 작은 목소리였지만, 고요한 신사 안에서는 무척이나 선명하게 울려 퍼졌다.

# [번역 대상] o_s_restaurant
o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「같이 뭐 좀 먹으러 갈까? 정말 맛있는 집들을 많이 알고 있거든!」
      - %CHARA%는 열정적으로 %YOU%을(를) 이끌며 가볍게 달려갔다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「흐흥~ 파머 %씨%는 맛집 찾아내는 실력이 남다르다고!」
      - %CHARA%는 허리에 손을 얹고 눈앞의 향긋한 냄새를 풍기는 세트 메뉴를 자랑스럽게 가리켰다.
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - 가게에 앉아 서로의 얼굴을 바라보던 두 사람은 푸핫 하고 웃음을 터뜨렸다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「역시 우리랑은 좀 안 어울리나 봐.」
      - 두 사람은 웃음소리를 죽이며 식기를 들었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「데이트 장소로 여기를 고르는 게 아니었나……」
      - acc: 1
        content: 「왜 그래?」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아무것도 아니야! 그냥……」
      - %YOU%의 표정을 본 %CHARA%의 들떴던 마음이 다시 차분하게 가라앉았다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「다 먹고 나서 조금만 더 같이 있어 줄래, %CALLNAME%?」

# [번역 대상] o_s_dating
o_s_dating:
  - if: d.half_life === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「저, 저기 %CALLNAME%, 여기서 데이트라니……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%랑 같이 있으면, 딱히 부끄럽다거나 하지는 않네……」
          - %CHARA%는 %YOU%의 곁에 밀착하며, 살짝 고개를 숙여 %YOU%의 어깨에 기댔다.
      - if: era.get('cflag:64:0') !== 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「다른 사람들 눈에는, 우리가 평범한 연인으로 보이겠지?」
          - 傍に貼りつき、%YOU%にしか聞こえない声で、そっと耳を噛む。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「조금 과감한 짓을 해도…… 아무도 모르지 않을까?」
          - 두 손으로 팔을 꽉 껴안으며, %CHARA%의 말랑한 가슴 위로 팔을 눌러왔다.
  - if: d.half_life === 1
    lines:
      - 왠지 모르게, %CHARA%는 %YOU%의 손을 꽉 잡은 채 전혀 놓아줄 기색이 없었다.
      - 부드러운 감촉을 즐기느라 딱히 괴로운 느낌은 들지 않았다.
      - 주변에 지나다니는 사람들이 눈에 띄게 줄어든 뒤에야 꽉 쥐었던 손이 조금 느슨해졌다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「이유는 잘 모르겠지만…… 손을 놓으면 %CALLNAME%가 내 곁에서 떠나버릴 것만 같아서……」
      - 다른 이에게는 들리지 않을 낮은 목소리로, %YOU%의 어깨에 기댄 채 소곤거렸다.

# [번역 완료] o_s_shopping
o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「에헤헤, 이거 %CALLNAME%한테 잘 어울린다!」
      - %CHARA%는 한참 동안 %YOU%의 몸에 이것저것 대보더니, 장난스러운 미소를 지으며 무언가를 걸어주었다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME% 이것 봐, 이거 진짜 맛있어 보여!」
      - 어째서인지 상점가 근처에 오자마자 가장 먼저 한 일은 먹거리를 찾아내는 것이었다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 사고 싶은 거 없어? 나도 너한테 선물 하나 해줄 수 있는데!」
      - %CHARA%는 조금 흥분한 듯 %YOU%의 앞에서 깡충거리며 주위를 둘러보았다.
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그러고 보니 %CALLNAME%네 집에 이게 없었지? 내가 사줄 수도 있다구.」
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%네 집에 이게 있으면, 나 놀러 가도 돼?」
      - %CHARA%의 눈이 반짝거렸다. 통금 시간 따위는 전혀 안중에 없는 듯했다.

# [번역 대상] good_night_normal
good_night_normal:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    - if: era.get('status:0:10') === 0 && era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - %CHARA%는 경쾌한 발걸음으로 기숙사까지 배웅해 준 %YOU%에게 인사를 건넄다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「내일 또 볼 수 있는 거지? 그럼 나중에 봐!」
        - random: true
          lines:
            - 바쁜 하루가 지나고, 마찬가지로 지쳐서 쓰러지기 직전인 %CHARA%를 기숙사까지 데려다주었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「으음…… 조금 너무 무리해버린 걸까나, 헤헤~」
    - if: era.get('status:0:10') === 0 && (era.get('status:64:10') > 0 || era.get('status:64:39') > 0)
      lines:
        - 깊이 잠든 메지로 파머를 보니 차마 직접 깨울 수가 없어서, 고생스럽긴 해도 %그녀%를 기숙사까지 업어서 데려다주기로 했다.
        - 이럴 때 짓궂은 장난을 치면 %SEX%가 깨어날까?
    - if: era.get('status:0:10') > 0
      lines:
        - 깊은 잠에 빠진 %YOU%은(는) 몽롱한 의식 속에서 %CHARA%가 손을 뻗으려다 망설이는 듯한 모습을 본 것 같았다. 마지막으로 남은 것은 다정하고 부드러운 작별 인사뿐이었다.

# [번역 완료] good_night_sex
good_night_sex:
  - %CHARA%를 기숙사까지 배웅하고 돌아서려는데, 소매를 살짝 붙잡혔다.
  - %YOU%의 뒤에 서 있는 %CHARA%는 조금 횡설수설하고 있었지만, 마지막 말만큼은 또렷하게 들려왔다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「외박 같은 건 내가 어떻게든 처리할 테니까, 그러니까……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「나…… %CALLNAME%의 곁으로 도망쳐도 될까?」
  - acc: 1
    content: 「좋아.」
    lines:
      - 외박 신청 따위는 이제 상관없었다. 지금은 더 중요한 일이 생겼으니까……
      - 바로 팔에 착 달라붙어 떨어지려 하지 않는 %CHARA%를 데리고 집으로 향하는 일이다.
  - acc: 2
    content: 「너무 고집부리지 마.」
    lines:
      - if: d.check === 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「하지만……」
          - 객관적으로 보아 %UMA%의 힘은 일반인보다 훨씬 강하다……
          - 그러니 지금의 %YOU%을(를) 붙잡아 두는 것쯤은 식은 죽 먹기였다.
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「하고 싶은 대로 하지 않으면, 그걸 어떻게 고집이라고 부르겠어?」
      - if: d.check !== 2
        lines:
          - %CHARA%의 표정은 기대감에서 암울함으로 바뀌었고, 실망감을 축 늘어진 앞머리 너머로 감추었다.
          - 그녀는 몸을 돌려 얌전히 기숙사 안으로 들어갔으나, 문앞에서 다시 한번 %YOU%의 뒷모습을 몰래 훔쳐보고는 고개를 숙인 채 모퉁이 너머로 사라졌다.

# [번역 완료] load_talk
load_talk:
  # CFLAGNAME:81 = 妊娠段階
  # CFLAGNAME:57 = 拡張変数
  # EXPNAME:117 = 出産回数
  - if: (era.get('cflag:64:81') !== 2 && !era.get('cflag:64:57').report) || era.get('exp:64:117') > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그렇구나…… 괜찮아…… %SELF_CALL%는 다 이해하거든.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「분명 내 문제겠지…… 아하하……」
      - color: %COLOR%
        fontSize: 0.75rem
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「나도 알고 있다구……」

# [번역 대상] tree_hollow_snails
tree_hollow_snails:
  title: 달팽이가 되어버릴 것 같아///
  lines:
    # 条件：愛欲以上、アイテムにアナルプラグがあり、アナル中出し後、中庭へ行くと発生
    - 夕方、%YOU%はパーマーの手を引いて学園を散歩している。%SEX%の歩幅はひどく堅く、%YOU%に導かれてようやく踏み出せる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%? 이제 슬슬…… 읏.」
    -
    - %YOU%が中指で%TEEN%のスカートの中の金属を弾くと、%SEX%の言葉はすぐ小さな喘ぎに切れ、すくめた肩が微かに抽る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 취미 나쁘네…… 정말이지, 뒤쪽이 느낌이…… 너무 이상해.」
    -
    - 周囲に人がいないのを確かめてから、%YOU%は後ろからパーマーのスカートを捲る。白い厚い臀の間に、プラグの尻尾の金属がはっきり見える
    - 단 몇 마디 말로 파머를 설득해 직장 안에 정액을 가둔 채 외출하게 만든 지금, %SEX%는 후회하고 있을까?
    - 尻穴を塞がれたパーマーは、居場所のない子犬みたいだ。尻尾は腿の間に挟まり、抗えない%SEX%は%YOU%の言いなりになるしかない……
    -
    - acc: 1
      content: 애널 플러그를 붙잡고 농락한다
      lines:
        - パーマーを木陰へ引き、%YOU%はプラグの一端を掴んで前後に動かし、直腸の精液を掻き混ぜて「ぐちゅぐちゅ」と音を立てる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%…… 안 돼, 들릴 거야…… 윽.」
        -
        - パーマーは口を押さえ、もう一方の手で%YOU%の服をきつく掴む。抗っているのか、羞恥の中で快感を受け入れているのか、わからない
        - %SEX%の尻尾は無意識に払うように%YOU%の腕をくすぐるが、それ以外は%YOU%に密着して、後ろの秘密を隠している
        - パーマーの腰と尻が無意識に捻れ、速度が上がるにつれ、隠しきれない荒い鼻息と小さな喘ぎが聞こえる
        -
        - 「으응…… 윽……」
    - if: era.get('cflag:64:0') !== 1
      acc: 2
      content: 가랑이 사이를 쓰다듬는다
      lines:
        - パーマーと壁際の陰を並んで歩き、%YOU%は手をスカートの下へ入れ、%SEX%の滑らかで締まった尻を抓む
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「만지지 마…… 누가 본단 말이야.」
        -
        - パーマーの苦情は聞き流し、%YOU%は%SEX%の股に沿ってゆっくり深く入り、指が温かく濡れた秘縫の下に触れるまで進む
        - 股下に纏わりついた蜜液を頼りに、%YOU%は中指を%TEEN%の秘穴へ滑らせ、肉壁を弄る
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아…… 으응……」
        -
        - 漏れた嬌声とともに、パーマーはついに歩くのを諦め、%YOU%に凭れて絶えず震え、汁が腿を伝って一滴ずつ落ちる
        - 쾌락에 완전히 굴복한 파머는 더 이상 경계하며 주위를 둘러보지 않았다. 정신이 없어서였을까, 아니면 노출되는 흥분에 몰입해버린 것일까.
    - divider: true
    - %TEEN%の体の変化を感じ取り、絶頂が近いところで%YOU%は手を止める。パーマーの腰が苦悶するように捻れる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「으음…… %CALLNAME%?」
    -
    - パーマーの潤んだ瞳を見て、%YOU%はプラグの尻尾を摘まみ、一気に引き抜く——
    - 「뽁!」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「우와아앗! ……」
    -
    - パーマーの瞳が一気に見開かれ、決壊した快感で%SEX%はバランスを取るために%YOU%をきつく抱き、矜持を失った喘ぎが喉から漏れる
    -
    - 一緒に漏れたものは、ほかにもあるだろうか？
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「안 돼…… %CALLNAME%…… 제발 부탁이야.」
    -
    - しばらくして、少し落ち着いたパーマーを%YOU%が押しのけようとすると、咽びを含んだ哀願が聞こえる。頭を振って拒んでいる
    - %SEX%を壁伝いに歩かせ、%YOU%は少し距離を取って後ろの光景を眺める
    - %TEEN%는 힘이 빠진 다리를 끌며 걸음을 옮겼고, 흔들리는 치마자락 사이로 유백색의 액체 줄기가 끊임없이 흘러내려 바닥에 자국을 남겼다……

# 育成中バージョン
# [번역 완료] cl_palace
cl_palace:
  title: 전당 주간
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「빨리! 트레이너!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오늘은 전당 주간이라구! 늦으면 자리가 없단 말이야!」
    - 파머는 회장을 향해 달려가다가도, 이따금 뒤에 남겨진 %YOU%을(를) 돌아보며 안절부절못한 채 발걸음을 늦췄다.
    - 몇 번을 망설이던 끝에, 파머는 %YOU%의 팔을 붙잡고 단숨에 회장까지 뛰어가기로 결심했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 겨우 맞췄다!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「운 좋게 자리가 딱 남아 있었네, 정말 다행이야!」
    - 숨을 헐떡이는 %YOU%을(를) 앉히고는, 기대에 찬 눈빛으로 무대 위의 선배를 바라보았다.
    - 선배가 들려주는 과거의 이야기와 경험담을 진지하게 경청하며, 파머는 자신도 모르게 설레는 미소를 지었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말 좋네…… 레이스라는 건.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 우리도 저렇게 될 수 있겠지?」
    - acc: 1
      content: 「당연하지.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그럼 나, 훨씬 훨——씬 노력해야겠는걸! 진심으로!」
    - 파머는 다시 무대를 향해 눈을 돌렸다. 그녀의 눈동자에는 동경의 별이 가득 담겨 있었다.

# 育成中バージョン
# [번역 대상] cl_fans_in_edu
cl_fans_in_edu:
  title: 팬 대감사제
  lines:
    - 팬 감사제 당일의 프로그램을 위해, 현역인 파머 역시 출주 요청을 받았다.
    - 当日の客席は、各選手のファンで埋まり、登場する%UMA%一人ひとりに歓声が飛ぶ
    - 비록 단순한 이벤트 레이스였지만…… 경기장에 선 이들 중 적당히 뛸 생각인 사람은 아무도 없었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이거 큰일인데, 대충 뛸 수 있는 분위기가 아니야.」
    - 경기장에 서고 나서야 깨달았다. 주변의 공기가 심상치 않다는 것을.
    - 주변의 %UMA%들은 이미 임시로 마련된 출발선 앞에서 자세를 잡고 있었고, 파머는 그제야 뒤늦게 반응했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「설마 다들 진심인…… 거야?」
    - 차마 입 밖으로 내뱉지는 못했지만, 주변의 모습은 예상과 정확히 일치했다.
    - 파머는 가장 선두로 치고 나갔고, 평소처럼 자신의 도주 위치를 고수했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그러니까!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왜 나까지 진심이 되어버린 거냐고!」
    - divider: true
      content: 이벤트 레이스가 끝난 후
    - 레이스가 끝난 뒤, 예기치 않게 전력으로 달리는 바람에 준비가 부족했던 파머는 트랙 옆에 앉아 부채질을 하고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「힘들어, 왠지 텐노상 훈련 때보다 더 하얗게 불태운 기분이야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 방금 레이스 봤어? 어땠어?」
    - acc: 1
      content: 「너다운 달리기였어.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그럼 팬들도 즐거워했겠지, 헤헤……」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「파머 씨, 매우 훌륭한 도주였습니다.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 부르봉!」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「그런 식의 도주 방식이 있을 줄은 몰랐습니다. 정말 공부가 되었어요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「사실 그냥 평소에 뛰던 방식이라…… 그리고 이렇게 뛰면 정말 힘들다구.」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「그렇습니까? 알겠습니다, 명심하도록 하죠.」
    - 부르봉은 가볍게 목례를 하고는 감사제 무대 쪽으로 향했다.
    - 반대편에서 들려오는 함성이 점점 커지는 것으로 보아, 팬 미팅 세션이 시작된 모양이었다.
    - 파머는 몸에 붙은 풀잎을 털어내고는, 곁에 있는 %YOU%에게 손을 내밀었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マックイーン%THEY%、まだ待ってるかも……ううん、私たちを待ってるよ」
    - 손을 내미는 파머는 한 점 후회 없는 미소를 지었다.

# 育成済みバージョン
# [번역 대상] cl_fans
cl_fans:
  title: 팬 대감사제
  lines:
    - 팬 대감사제 당일, 파머는 %YOU%을(를) 따라 다시 트레센 학원을 찾았다.
    - 평소에도 여러 이유로 학원에 들르긴 하지만, 팬 대감사제 날은 분위기가 사뭇 달랐다.
    - すでにドリームカップへ転戦した%UMA%も、引退した%UMA%も、ファンはこの日を待っている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아직도 팬들이 이렇게나 많이……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「난 이미 트윙클 시리즈에서도 물러났는데 말이지, 에헤헤.」
    - 눈앞의 열정적인 팬들을 보며 파머는 쑥스러운 듯 뺨을 긁적였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그러고 보니, 나보고 한 번 뛰어달라는 요청도 있더라구.」
    - if: (era.get('cflag:64:81') >> 4) === 0
      acc: 1
      content: 「온 김에 한번 뛰어보는 게 어때?」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그렇네……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「出るなら、%SELF_CALL%の逃げ方で行くよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아, 나 승부복으로 갈아입고 올게.」
        - 파머는 가벼운 발걸음으로 반대편으로 달려가더니 순식간에 시야에서 사라졌다.
        - %YOU%은(는) 파머가 사라진 방향을 잠시 바라보다가, 믿음을 담아 관객석으로 향했다.
        - divider: true
          content: 임시 경기장
        - color: %COLOR%
          content: 임시로 마련된 경기장에 오랜만에 반가운 얼굴들이 모였다.
        - color: %COLOR%
          content: 파머는 익숙한 승부복 차림으로 출발선에서 준비운동을 하고 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「한동안 레이스에서 멀어져 있었지……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만 내 주법만큼은 단 한 순간도 잊어본 적 없다구!」
        - color: %COLOR%
          content: 그녀는 과거 현역 시절과 다름없는 스타일로 가장 앞에서 무리를 이끌었다.
        - color: %COLOR%
          content: 비록 체력이 전성기 때만 못해 조금씩 속도가 줄어들기 시작했지만 말이다.
        - color: %COLOR%
          content: 레이스는 딱히 긴박하게 흘러가지 않았다. 어디까지나 팬들의 갈증을 해소해주기 위한 작은 이벤트였으니까.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「후우…… 역시 선두에서 달릴 때가 가장 즐거워.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너 말대로, 달리고 싶을 때 달리는 이 자유로움이 최고야!」
        - 팬들 「파·머! 파·머!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오오, 다들!」
        - color: %COLOR%
          content: 쫑긋거리는 귀가 주변의 소음 속에서 자신의 이름을 가려냈고, 그녀는 관객석을 향해 손을 흔들었다.
        - color: %COLOR%
          content: 물론 그 관객석에는 마찬가지로 목청껏 외치고 있는 %YOU%도 포함되어 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너…… 역시 저기 있었구나.」
        - color: %COLOR%
          content: 관객석을 바라보는 파머의 눈동자에는 본래의 고양감에 즐거움이 더해졌다.
        - if: era.get('love:64') >= 50
          lines:
            - color: %COLOR%
              content: 경기장에 선 채 멀리 있는 트레이너를 향해 승리의 사인을 보냈다. 그 눈빛에는 남들이 눈치채지 못할 미묘한 감정이 섞여 있었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「역시……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「역시 나의『트레이너』는 너뿐이야.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「언제 어디서든 나를 지지해주는 너.」
            - color: %COLOR%
              content: 이미 끝난 친선 레이스라 딱히 제재하는 사람도 없었고, 주변의 다른 %UMA%들도 지인들과 담소를 나누고 있었다.
            - color: %COLOR%
              content: 파머는 관객석 근처로 걸어와 트레이너에게 손을 뻗었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「트레이너, 같이 돌아가는 건 어때?」
    - acc: 2
      content: 「이미 은퇴했으니 후배들의 모습을 감상하자.」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「으음…… 그것도 좋네.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「내 도주는 자칫하면 페이스를 완전히 무너뜨려 버리니까 말이야.」
        - 파머는 너털웃음을 터뜨리며 자신의 전매특허인 주법을 소재로 농담을 던졌다.
        - divider: true
          content: 임시 경기장
        - 自分は出ないつもりでも、先輩の姿を見るのは悪くない
        - 이벤트 레이스가 시작되자 주변 팬들은 오랜만에 보는 우마무스메들의 모습에 열광하며 응원을 보냈다.
        - %YOU%은(는) 파머와 나란히 서서 경기장의 풍경을 눈에 담았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「대단해, 컨디션이 다들 엄청나네.」
        - acc: 1
          content: 「너도 뒤처지지는 않을 텐데.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「농담하지 마, 난 이미 레이스를 떠난 몸이라구.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……하지만 트레이너가 보고 싶다면, 나도 한번 뛰어볼까?」
        - if: era.get('love:64') >= 75
          lines:
            - 파머의 얼굴이 살짝 붉어지더니, 어깨를 %YOU%의 몸에 살며시 기대왔다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「네가 보고 싶어 한다면, 어디서든 달릴 수 있어.」
            - 주변 관객들이 모두 경기장에 집중하느라 %YOU% 쪽을 보는 사람은 아무도 없었다.
            - 비어있던 손이 직감에 이끌려 파머의 손가락 사이로 부드럽게 파고들어 깍지를 끼웠다.
            - 부드러운 손가락은 갑작스러운 접촉에 놀란 듯 일순 긴장하며 어쩔 줄 몰라 했으나, 이내 상대가 누구인지 확인하고는 서서히 힘을 뺐다.
            - 레이스가 마지막 코너에 접어들자 주변의 함성이 폭발적으로 커졌고, 그 소음은 모든 소리를 덮어버릴 것만 같았다.
            - acc: 1
              content: 파머의 귓가를 살짝 핥는다
            - acc: 2
              content: 파머의 머릿결에 얼굴을 묻고 숨을 들이쉰다
            - acc: 3
              content: 파머의 엉덩이를 슬쩍 만진다
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「앗!」
            - %YOU%의 짓궂은 장난에 파머가 짧게 비명을 질렀으나, 주변 소음이 워낙 커서 아무도 눈치채지 못했다.
            - 파머는 조금 화난 듯한 눈빛으로 이쪽을 쳐다보았지만, 별다른 저항은 하지 않았다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「정말이지……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「이런 건 집에 돌아가서 하라구.」

# 育成中限定
# [번역 완료] cl_temple_fair
cl_temple_fair:
  title: 축제
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「최근 트레이너가 계속 나랑만 있어 줬지……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이래선 트레이너 개인의 시간이 전혀 없잖아!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 곧 축제 시즌이네!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그때는, 내가 트레이너를 기분 전환시켜 줘야겠어.」
    - divider: true
      content: 축제 당일
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 오늘 축제가 열린대.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「가게도 많이 나온 것 같은데, 같이 갈래?」
    - 파머는 전혀 모르는 척 연기하며 %YOU%에게 손을 내민다.
    - 뒤편의 어스름한 하늘 아래로 축제 특유의 조명이 켜지고, 소란스러운 소리가 들려온다.
    - acc: 1
      content: 「좋아, 가자」 (호감도+10, 애정도+2)
      lines:
        - %YOU%은(는) 파머가 내민 손을 맞잡고, 발걸음을 맞춰 축제 현장으로 들어갔다.
        - 파머는 평소처럼 여기저기 돌아다니지 않고, 줄곧 %YOU%의 곁에 딱 붙어 따라다닌다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너, 뭐 좋아하는 거 있어?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오늘은 %SELF_CALL%가 계속 옆에 있어 줄게!」
        - acc: 1
          content: 「저기 길거리 음식이 맛있어 보이네」 (체력+100)
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「길거리 음식? 좋아, 가 보자, 트레이너!」
            - 파머는 망설임 없이 %YOU%을(를) 이끌고 노점으로 향해 음식을 살핀다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「트레이너는 뭐 먹고 싶어? 내가 사 줄게!」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「에헴, 사실 오늘을 위해서 용돈을 꽤 많이 남겨 뒀거든.」
            - acc: 1
              content: 「파머 너도 좀 먹어」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「아냐, 이건 트레이너를 위해 사 주는 거니까.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「내가 먹고 싶은 건 나중에 따로 사면 돼……」
            - 파머는 말로는 관심 없는 척하지만, 시선은 정면을 향해 있다.
            - 좌우를 살피며 다음으로 가고 싶은 곳을 찾는 눈치다.
            - acc: 1
              content: 음식을 입가에 가져다 댄다
            - %YOU%은(는) 손에 든 음식을 들어 파머의 입 앞에 가져다주었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「아앙! ……어?」
            - 파머는 조건반사적으로 입을 벌려 한 입 베어 물었다. 만족스러운 표정을 짓다 뒤늦게 상황을 파악하고는 얼굴에 홍조를 띠었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「정말이지! 트레이너!」
            - 장난스레 화난 표정을 지으며 %YOU%에게 가벼운 펀치를 날린다.
        - acc: 2
          content: 「저기 사격 게임 재미있어 보여」 (스킬 포인트+35)
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「에, 사격!」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「좋았어, 이 %SELF_CALL%의 일격필살을 보여 주지……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「아저씨! 저희 이거 할게요!」
            - 파머는 조금 들뜬 기분으로 공기총을 건네받고, %YOU%와 하나씩 나눠 가졌다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「흥흥, 트레이너는 어떤 게 갖고 싶어?」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「내가 떨어뜨려서 선물로 줄게.」
            - 자신만만하게 말하며 공기총을 겨눈다.
            - 귀를 쫑긋거리며 자신 있게 방아쇠를 당긴다.
            - divider: true
              content: 한 차례의 사격이 끝난 후
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「미안, 못 맞혔어……」
            - 파머의 귀가 축 처졌고, 실망스러운 듯 눈을 가늘게 뜬다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「전혀 안 맞을 줄이야……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「미안해, 트레이너……」
            - 시무룩해진 파머를 보며 %YOU%이(가) 총을 집어 들었다.
            - 경쾌한 타격음과 함께 탄환이 경품이 달린 풍선을 꿰뚫었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「오오! 대단해, 트레이너!」
            - 주인장이 건네주는 인형을 보며 파머의 눈이 반짝인다.
            - acc: 1
              content: 「네가 가져」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「에! 이건 트레이너가 딴 경품이잖아.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「내가 받아도 되는 거야……?」
            - acc: 1
              content: 「난 이미 충분히 즐거웠어」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「어?」
            - acc: 1
              content: 「그러니까 파머 너도 기뻐했으면 좋겠어」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그런 거야?」
            - 파머의 어리둥절한 얼굴에 잠시 후 옅은 홍조가 돌았으나 금세 사라졌다.
            - 쑥스러운 듯 두 손으로 인형을 건네받아 소중히 껴안는다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그게…… 고마워.」
            - 얼굴을 인형에 묻은 채, 맑은 눈동자만 내놓고 앞에 선 %YOU%을(를) 바라본다.
            - 남들에게 들리지 않을 정도로 작은 목소리로 다시 한번 속삭였다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「고마워, 트레이너.」
        - divider: true
          content: 축제가 끝난 후
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「진짜 즐거웠어, 배도 부르고 완전 만족!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그치만, 결국 마지막에는 반대로 보살핌을 받았네.」
        - 파머는 전리품을 품에 안고 해변을 거닌다.
        - 걷는 도중, 곁에 있는 %YOU%에게 어깨를 살짝 부딪친다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「처음엔 트레이너를 기쁘게 해 주려고 했는데.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「너무 의욕이 앞섰는지 엉망진창이 돼 버렸네, 헤헤.」
        - acc: 1
          content: 「과거의 일에 얽매여 있는 거야?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응? 아냐, 예전 일 때문이 아니라 단지……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「담당 %UMA%를 지원하는 게 트레이너의 일이잖아?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「나도 트레이너를 지원해 주는 기분을 느껴 보고 싶었어, 그냥 그런 거야.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너는 늘 열심히 노력해 왔으니까!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……아니면, 이런 거 역시 좀 이상해?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아, 부끄러워라……」
        - 파머는 쑥스러운 웃음을 지으면서도 솔직한 표정을 숨기지 않는다.
        - acc: 1
          content: 「그렇게 신경 쓸 필요 없어」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만 그게 트레이너에게 부담이 되는 건 아닐까 해서.」
        - acc: 1
          content: 「파머를 서포트하는 건 나에게 기쁨이야」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어라라.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「잠깐만 기다려 봐……」
        - 파머는 걸음을 멈추고 품에 안은 인형으로 얼굴을 가렸다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (트레이너는 트레이너의 업무를 위해 진지하고 열심히 노력했어.)
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (담당 %UMA%가 있으니까 업무를 완수하기 위해 노력할 수 있는 거겠지……)
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (그러니까, 트레이너로서……)
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (나의 트레이너로서?)
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (어?)
        - 「파머의 트레이너가 되어서 다행이야」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (에에엑!?)
        - 생각이 거기까지 미치자, 파머의 눈빛이 점점 혼란스러워진다.
        - 당황한 기색으로 인형을 꽉 껴안아 달아오른 얼굴을 가리고, 열기를 식히려는 듯 고개를 가볍게 젓는다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너는 트레이너로서의 일을 한 거지만, 그저 트레이너로서 기쁜 게 아니라.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그게 아니라…… 내 트레이너라서 기쁘다는 거야?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「진짜로 『나의』트레이너라서 기쁘다는 거지?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「우와아아……」
        - 도망치고 싶은 충동을 억누르고, 고개를 들어 정면을 응시한다.
        - 자신을 돌아보는 %YOU%을(를) 향해 파머는 작게 숨을 들이켰다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……트레이너.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「노력할게. 열심히 달리고, 이기기 위해 최선을 다할게. 정말로.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「나만의…… 우리들만의 달리기 방식으로 모두에게 보여 주겠어!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「언젠가 트레이너가 『메지로 파머와 파트너가 되어 정말 다행이다』라고 생각할 수 있게 만들 거야!」
        - acc: 1
          content: 「나도 마찬가지야」 (호감도+10)
        - acc: 2
          content: 「그날을 기다릴게」 (애정도+2)
        - acc: 3
          content: 「난 항상 그렇게 생각해 왔어, 파머」
          # 性欲上昇
        - 파머는 잠시 멍한 표정을 짓더니 이내 다시 전리품 뒤로 숨어 버린다.
        - %YOU%이(가) 볼 수 없는 곳에서, 파머는 눈을 감고 방금 들은 말을 가슴 깊이 되새긴다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「우와아아아아……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「우리 트레이너, 진짜…… 장난 아니네……」
        - 다시 한번 봉투를 내려놓고, 수줍게 붉어진 얼굴로 미소 짓는다.
    - acc: 2
      content: 「아니, 난 안 갈래」

# [번역 대상] cl_halloween
cl_halloween:
  title: 할로윈
  lines:
    - 장식물로 꾸며진 트레센 학원은 일찌감치 할로윈 분위기가 가득하다.
    - 아무런 예고 없이 문을 두드리는 소리가 들려왔다.
    - 트레이너의 직분상, %YOU%은(는) 문을 열었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「사탕 안 주면 장난칠 거야, 트레이너!」
    - 파머가 문밖에 서서 꼬마 악마 흉내를 내고 있다.
    - 머리 장식인 뿔이 은은하게 형광빛을 내며 어두운 복도에서 꽤 눈에 띈다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「마음에 들어, 트레이너? 이거 헬리오스랑 같이 고른 거야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、天使っぽいほうの衣装も、もう一着選んであるんだよ」
    - 파머는 장난스러운 동작을 멈추고, 겁먹은 척하는 %YOU%을(를) 보며 짓궂게 웃는다.
    - 창밖의 할로윈 분위기가 이미 집무실 안까지 스며들었다. 여기서 일을 고집하는 건 분위기를 망치는 일일 것이다.
    - 분위기를 잘 읽는 파머는 즉시 상황을 파악했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「밖에도 행사 많이 하던데, 같이 보러 갈래?」
    - acc: 1
      content: 「좋아」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「나이스! 가자!」
    - 자연스럽게 %YOU%의 손을 잡고 밖으로 힘차게 뛰어 나갔다.
    - 즐거운 하루였지만, 결국 체력이 파머를 따라가지 못한 %YOU%은(는) 다음 날 꼼짝없이 누워 있어야만 했다.

# [번역 대상] cl_christmas
cl_christmas:
  title: 크리스마스
  lines:
    - 크리스마스 당일, %YOU%의 집무실 문이 예고 없이 울렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「야호! 트레이너!」
    - パーマーは突然入ってきて、仕事中の%YOU%の前まで来る
    - 창밖의 축제 분위기가 파머의 목소리를 타고 들어왔고, 문틈으로는 작은 별 장식이 굴러 들어왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 시간이 됐다구!」
    - 헬리오스가 크리스마스트리를 안고 집무실로 뛰어 들어왔다.
    - 경쾌한 종소리가 울려 퍼지며, 정적인 집무실은 순식간에 크리스마스…… 아니, 파티 분위기로 변했다.
    - 파티 분위기를 조성하는 데 일가견이 있는 헬리오스가 친구들을 데려와 집무실을 파티장으로 탈바꿈시켰다.
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「야호! 크리스마스 파티 시작이다~!」
    - color: %COLOR_66%
      content:
        - fontWeight: bold
          content: %TURBO%
        - 「우와아!」
    - color: %COLOR_60%
      content:
        - fontWeight: bold
          content: %NATURE%
        - 「에헤헤, 실례할게~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너도 같이 하자!」
    - 떠들썩한 소란 속에서 파머의 손이 %YOU%을(를) 향해 뻗어 왔다.
    - acc: 1
      content: 「알았어, 알았어」
    - 조금 건성인 말투였지만, 파머의 손을 잡고 자리에서 일어났다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오늘은 크리스마스잖아, 같이 놀자구.」
    - 피곤함이 남은 %YOU%을(를) 이끌고 크리스마스트리 앞으로 향한다.
    - color: %COLOR_62%
      content:
        - fontWeight: bold
          content: %TANNHAUSER%
        - 「정말 시끌벅적하네~」
    - divider: true
      content: 시간이 흐른 후
    - 얼마나 시간이 지났을까, 성인인 %YOU%은(는) 더 이상 젊은이들의 활기를 따라갈 기력이 남아 있지 않았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 같이 나가서 바람 좀 쐴까?」
    - 마치 %YOU%의 생각을 읽은 듯, 적절한 타이밍에 뒤에서 어깨를 툭툭 친다.
    - 트레센을 벗어나 크리스마스 기운이 완연한 거리를 걷는다.
    - 주변 상점마다 별과 종, 그리고 빨갛고 하얀 장식 띠가 걸려 있다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「뭐, 이렇게 될 줄 알고는 있었지만 말이야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그치만 트레이너도 즐거웠지?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「가끔은 다 같이 게임도 하고 말이야.」
    - 파머는 뺨을 살짝 긁적였다. 겨울바람 속에 옅은 홍조가 떠오른다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 오늘 파티 마음에 들었어?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「모두가 열심히 준비했거든.」
    - acc: 1
      content: 「응, 정말 즐거웠어」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응응! 트레이너가 즐거우면 됐어!」
    - 대답을 들은 파머는 환하게 웃음을 지었고, 걷는 발걸음마저 가벼워졌다.
    - if: era.get('love:64') >= 75
      lines:
        - acc: 1
          content: 「그럼 파머, 너는? 즐거웠어?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어?」
        - 동작이 부자연스럽게 멈추고 당황한 기색이 역력하다. 자신이 멍하니 서 있었다는 걸 깨닫고는 서둘러 달려와 %YOU%의 발걸음을 맞춘다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아하하, 뭐랄까.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너가 즐거워하는 모습을 보니까, 나도…… 꽤 즐거웠어.」
        - 말은 조금 더듬었지만 망설임은 없었다.
        - %YOU%을(를) 바라보는 눈빛에 묘하게 복잡한 감정이 섞인다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (날 걱정해 주고 있어…… 역시 트레이너는……)
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (역시 난…… 트레이너를 이미……)
        - acc: 1
          content: 「파머?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아무것도 아냐, 트레이너. 그냥 생각 좀 하느라.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (말해 버리면…… 트레이너는 어떻게 생각할까.)
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - (아니야 파머! 말하지 않으면 더 이상 진전할 수 없잖아!)
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너, 난 말이야……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너가 웃는 걸 보면 나까지 기분이 좋아지는 것 같아.」
        - acc: 1
          content: 「그, 그런 거야?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「정말이지, 트레이너와 함께 있는 시간이 점점 늘어나네.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「분명 오늘은 파티였는데, 결국 또 우리 둘뿐이고.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너랑 있는 시간이 다른 모두와 있는 시간보다 많아졌어.」
        - 파머는 하늘을 올려다보면서도 곁눈질로 옆자리를 훔쳐본다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이러다가는…… 트레이너 없이는 못 살게 될지도 몰라.」
        - acc: 1
          content: 「어? 나 없이?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기, 방금 말 조금…… 이상했나?」
        - acc: 1
          content: 「그래도 상관없어」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「상관없다구?」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그 말은 즉……」
            - 기대 섞인 눈빛으로 %YOU%의 수줍은 얼굴을 바라본다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그럼, 실례하겠습니다!」
          # 馬跳
        - acc: 2
          content: 「응, 정말 이상해」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「역시 이상하지?」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「트레이너가 싫다면…… 방금 건 못 들은 걸로 해 줘, 아하하……」
            - 파머는 아무렇지 않은 척 머리를 긁적인다.
            - 取り繕いの姿勢では隠しきれず、変に見えない程度にしかできない
            - %UMA%の落胆は、耳が垂れた瞬間にもう全部出ている
            - acc: 1
              content: 「너도 지금 웃고 있잖아」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「パーマーも、すごく楽しかった……」
            - 붉어진 눈시울로 멈춰 서서 놀란 듯 %YOU%을(를) 돌아본다.
            - 목울대가 미세하게 떨리며 무언가 말하려다 삼킨다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - (나도 행복하게 웃고 있었다니…… 어라?)
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - (이게 무슨 뜻이지…… 어라라?)
            - acc: 1
              content: 「나 역시 파머가 기뻐하는 모습을 보면 행복해져」
            - 그 말을 듣자 파머의 표정이 다시 활짝 펴졌다.
            - 입꼬리가 올라가고 눈동자도 한결 맑아진다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - (그러니까, 이게 이상한 게 아니란 거지……)
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「고마워, 트레이너.」
            - %YOU%이(가) 다음 말을 고르는 사이, 파머가 먼저 다가왔다.
            - 뺨에 얼굴을 밀착시키고는 가볍게 입술 자국을 남긴다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「크리스마스 선물…… 이것도 포함인 거야, 헤헤.」
            - 손가락 하나를 입술에 대며 조용히 속삭인다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「다른 사람한텐 비밀이야. 그리고」
            - 손을 내리고 다시 자세를 바로잡아 %YOU%의 눈을 정면으로 응시한다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「메리 크리스마스, 트레이너.」

# [번역 대상] cl_christmas_sex_end
cl_christmas_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%호칭%? 이제 슬슬…… 읏.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%호칭%, 취미 나쁘네…… 정말이지, 뒤쪽이 느낌이…… 너무 이상해.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「으음…… %호칭%?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「우와아앗! ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「안 돼…… %호칭%…… 제발 부탁이야.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「好き！ %YOURNAME%が、好き！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「오늘은 전당 주간이라구! 늦으면 자리가 없단 말이야!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아, 겨우 맞췄다!」

# 情愛の檻（恋慕＞74、通常）
# [번역 완료] basement_end
basement_end:
  title: 내일 보자
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너? 오늘 기분은 어때?」
    - 주변 풍경은 이제 보이지 않고 오로지 검은 벽뿐이다.
    - 푹신한 침대에 누워 익숙한 천장을 바라본다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 지금 트레이너는 말을 못 하지.」
    - 어두운 환경 속에서 이제 누구도 이곳을 찾아오지 않는다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「내일도 꼭 보러 올게, 트레이너……」
    - 파머는 일어나 침대에 누운 %YOU%을(를) 바라보며 찬란한 미소를 지었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이제 그만 자자…… 나의 트레이너.」

# 金銭奴隷（恋慕＞74）
# [번역 완료] slave_end
slave_end:
  title: 길 잃은 자의 종점
  lines:
    - %CHARA%는 문가에 서서 어둠 속에 잠긴 %YOU%을(를) 바라본다.
    - 방 안에는 오직 두 사람의 시선만이 교차한다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 처음부터 이러고 싶었던 건 아냐. 네가 그렇게 선택한 거지.」
    - 문이 닫히고 방 안은 칠흑 같은 어둠에 휩싸였다.
    - 커튼 사이로 한 줄기 햇살이 스며들어 %YOU%의 얼굴을 비춘다.
    - 파머는 몸을 숙여 %YOU%의 입을 막고 있던 재갈을 풀어주고 천천히 얼굴을 쓰다듬는다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「돈이 필요하면 나한테 말하면 됐잖아, 트레이너.」
    - 지폐 뭉치를 들고 %YOU%의 뺨을 가볍게 툭툭 친다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「나한테만 말하면 돼.」
