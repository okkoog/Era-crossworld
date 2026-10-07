# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file サイレンススズカ - 育成
# @author 牛蛙煲
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「네, %CALLNAME%. 서둘러 시작하죠.」
  - %CHARA%가 %YOU%에게 고개를 끄덕이며, 컨디션에 문제가 없으니 언제든 훈련을 시작해도 좋다는 신호를 보낸다.

train_success:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오늘 상태도 아주 좋네요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 제 성적이 좀 올랐나요?」
        - %YOU%은(는) %CHARA%에게 엄지손가락을 치켜세워 보였다.
        - %CHARA%는 꽤 기쁜 듯 살짝 미소 짓는다.

train_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아앗!」
  - 멀리서 %YOU%은(는) 스즈카가 갑자기 넘어지는 것을 보고 급히 달려가 %SEX%를 부축해 일으킨다.
  - acc: 1
    content: 「스즈카, 괜찮아? 어디 특별히 아픈 데는 없고?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「특별히 아픈 건 아닌데, 그냥 몸이 좀 굳은 느낌이라 다리가 무거워서요……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하지만 절대 다친 건 아니에요! 훈련을 계속할 수 있…… 윽!」
  - %YOU%은(는) 스즈카의 단호한 표정과 이미 제대로 서 있지 못하는 몸 상태를 번갈아 보고는 한숨을 내쉰다.
  - acc: 1
    content: 「미안해 스즈카, 내가 무리하게 시켰나 봐. 보건실로 가자.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, 괜찮아요. 전 정말 문제없으니까 더 할 수 있……」
  - acc: 1
    content: 「만약 너한테 정말 무슨 일이라도 생기면, 난 평생 죄책감을 가질 거야.」
  - 그 말을 듣자 스즈카는 더 이상 고집을 부리지 않고, 고개를 숙인 채 순순히 %YOU%의 부축을 받으며 보건실로 향했다.

# [번역 완료] train_additional
train_additional:
  - acc: 1
    content: 「스즈카, 이제 쉬어도 돼.」
  - %YOU%은(는) 손에 든 스톱워치를 가볍게 던지며, 막 한 바퀴를 다 뛴 스즈카에게 말한다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「어라, 벌써 시간이 이렇게 됐나요?」
  - %YOU%은(는) 조금 의외라는 표정을 짓는 스즈카를 보며 약간 허탈해졌다.
  - acc: 1
    content: 「응, 벌써 늦었으니까 이제 돌아가서 푹 쉬는 게 어때?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「저기, %CALLNAME%?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아직 다 못 뛴 기분이라서요. 한 바퀴만 더 뛰어도 될까요? 딱 한 바퀴만요!」
  - 매달리듯 바라보는 %CHARA%를 보며, %YOU%은(는)——
  - acc: 1
    key: train
    content: 「알았어, 딱 한 바퀴만이다.」
    lines:
      - 허락을 받자 스즈카는 작게 환호성을 질렀다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「고마워요, %CALLNAME%! 그럼 시작할게요～」
      - %YOU%은(는) 마치 유성처럼 질주하는 스즈카의 뒷모습을 멍하니 바라보았다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「우우, 제대로 느끼기도 전에 끝나버렸어요. 한 바퀴만 더 허락해 주세요……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「태양이 완전히 지지 않았으니까, 아직 한 바퀴 더 뛸 시간은 있어요……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「정말로 마지막 한 바퀴예요, %CALLNAME%……」
      - ……
      - 그렇게 몇 번이고 반복된 뒤, 스즈카가 다시 요청을 하려 하자 %YOU%은(는) 하늘에 뜬 달을 가리켰다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「에엣? 저…… 전혀 눈치채지 못했어요……」
      - %YOU%은(는) 아무 말 없이 미소를 띠며 스즈카를 빤히 바라보았다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그…… 저기, 그렇게 계속 쳐다보지 마세요. 이제 정말 돌아가서 쉴 테니까, 제발 그렇게 보지 말아 주세요……」
      - 계속 바라보자 스즈카는 부끄러워하며, 마침내 한 바퀴 더 달리겠다는 말을 그만두었다.
  - acc: 2
    content: 「기숙사 사감님이 화내실 거야.」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「으으…… 하지만 아직 다 못 뛰었는데……」
      - %YOU%은(는) 스즈카의 귀가 축 처졌다가 다시 쫑긋 세워지는 모습이 무척 귀엽다고 생각했다.
      - acc: 1
        content: 「오늘 쉬어야 내일 더 활기차게 훈련할 수 있는 법이야.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「알겠어요, %CALLNAME%. 가서 푹 쉴게요.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그래도 더 뛰고 싶은데…… 기숙사까지 뛰어서 돌아가야겠어요. 거리는 짧지만……」

race_start:
  - random: true
    lines:
      - 레이스 시작 전, %YOU%은(는) 스즈카의 대기실을 찾아가 %SEX%를 응원했다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「컨디션이 아주 좋아요. 레이스가 조금이라도 빨리 시작되면 좋겠네요, 후훗.」
  - random: true
    lines:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「기대해 주세요, %CALLNAME%. 그 누구보다도 먼저 결승선을 통과할 테니까요.」

race_end:
  - if: d.rank === 1
    lines:
      - 레이스에서 우승한 스즈카가 두 팔을 벌린 채 승리의 기쁨을 만끽하고 있는 듯하다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「다시 한 번, 그 특별한 풍경을 보았어……」
  - if: d.rank > 1 && d.rank <= 5
    lines:
      - %YOU%은(는) 스즈카가 어딘가 넋이 나간 듯 멍하니 있는 모습을 발견했다.
      - 역시 성적 때문이겠지…… 하지만 그 수많은 강적 사이에서 이 정도 순위를 낸 것도 쉬운 일은 아니다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「하지만 %CALLNAME%, 전 앞서나가는 자만이 볼 수 있는 그 풍경을 독점하고 싶어요……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「다음번에는, 절대로 내주지 않겠어……」
      - 스즈카는 두 손을 맞잡고 나직이 중얼거렸다.
      - 「응, 난 스즈카를 믿어. 다음에는 분명 압도적인 차이로 앞서나갈 거야.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「네, 꼭 그럴게요!」
      - 스즈카는 %YOU%를 향해 주먹을 쥐어 보이며 굳게 다짐했다.
  - if: d.rank > 5
    lines:
      - 스즈카는 전광판을 멍하니 바라보고 있었지만, 그곳에 %SEX%의 이름은 없었다.
      - 즉, 참패였다는 뜻이다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「어째서……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「역시 집념이 부족했던 걸까……」
      - acc: 1
        content: 「스즈카, 지금 이 기분을 기억해 둬.」
      - %YOU%의 목소리에 스즈카의 몸이 움찔 떨렸다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……」
      - acc: 1
        content: 「다음번에는 더 잘할 수 있을 거야.」
      - 그 말을 듣자 스즈카의 마음이 조금은 진정된 듯 보였다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「네, 다음에는…… 꼭 이길게요.」

begin_race_win:
  title: 도주
  lines:
    - %YOU%의 세심한 지도 아래, %CHARA%는 아무런 이변 없이 데뷔전 승리를 거머쥐었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 보셨나요? 앞서나가는 풍경을 끝까지 놓치지 않고 꽉 쥐고 있었어요.」
    - acc: 1
      content: 「응, 대단했어 스즈카. 마치 유성 같았어.」
    - 승리하고 돌아온 %CHARA%를(을) 향해 %YOU%은(는) 진심 어린 찬사를 보냈다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하지만 달리는 동안, 저 먼 곳에 더 아름다운 풍경이 기다리고 있을 것 같다는 느낌이 들었어요……」
    - %CHARA%는 레이스가 끝난 경기장을 지긋이 바라보며 기대 섞인 말투로 말한다.
    - acc: 1
      content: 「그럼 이번 데뷔전을 시작점으로 삼아, 함께 한계까지 나아가 보자!」
    - %CHARA%는 잠시 멍해지더니 이내 %YOU%를 향해 미소 지었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네, 함께 노력해요, %CALLNAME%!」

begin_race_lose:
  title: 추입
  lines:
    - content:
        - fontWeight: bold
          content: 실황
        - 「아아, 정말 아쉽게 됐습니다, %CHARA%! 마지막에 승리를 놓치고 마는군요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - %CHARA%는 무척 분해 보인다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「죄송해요, %CALLNAME%. 당신의 믿음에 보답하지 못했어요……」
    - %YOU%은(는) 복잡한 마음으로 %CHARA%의 어깨를 토닥여 주었다.
    - acc: 1
      content: 「스즈카, 한 번의 실패는 아무것도 아니야. 앞으로 네 앞에는 셀 수 없이 많은 풍경이 기다리고 있을 테니까.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「선생님 말씀이 맞아요. 여기서 멈춰 서 있을 수는 없죠……」
    - 다시금 투지를 불태우는 %CHARA%를(을) 보며 %YOU%은(는) 안도의 미소를 지었다.

begin_race_miss:
  title: 결장
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, %CALLNAME%. 분명히 계획했던 일인데…… 아직도 조금 이해가 가질 않아요.」
    - 어떤 알 수 없는 고려 끝에, %YOU%은(는) 지난주 데뷔전에 %CHARA%를(을) 출주시키지 않았다.
    - 그게 말이야, 스즈카. 뭔가 아직 조금 부족하다는 느낌이 들어서. 너에게 완벽한 출발선을 만들어주고 싶어서 어쩔 수 없이……
    - %YOU%은(는) 이마의 땀을 닦으며 %CHARA%에게 열심히 설명했다.
    - %CHARA%는 미간을 찌푸린 채 고개를 끄덕였고, 일단은 그 설명을 받아들인 모양이다.

# [번역 완료] new_year_classical
new_year_classical:
  - %YOU%은(는) 트레이닝실에 지루하게 앉아 이따금 벽에 걸린 시계를 쳐다보았다.
  - acc: 1
    content: 「벌써 시간이 꽤 지났는데…… 무슨 일이라도 생긴 건 아니겠지?」
  - 오늘은 %YOU%과(와) %CHARA%가 함께 맞는 첫 번째 새해이기에, 트레이닝실에서 만나 함께 축하하기로 약속했다.
  - 하지만 약속 시간이 지났음에도 %CHARA%는 나타나지 않았다……
  - %YOU%은(는) 겉옷을 챙겨 입고 %CHARA%를(을) 찾으러 나갈 준비를 한다.
  - 그때 갑자기 트레이닝실 문이 벌컥 열리며 차가운 바람이 안으로 들이닥쳤다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「정말…… 죄송해요, %CALLNAME%…… 방금까지…… 달리고 있었는데, 달리기 시작하니까 시간 가는 걸 잊어버려서……」
  - 숨을 헐떡이는 %CHARA%의 외투를 벗는 것을 도와주며 그 설명을 들은 %YOU%은(는) 쓴웃음을 지었다.
  - acc: 1
    content: 「스즈카, 의욕이 넘치는 건 좋지만 지금은 새해 첫날이야. 푹 쉬는 게 좋아.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「으으…… 네, 푹 쉴게요, %CALLNAME%.」
  - %YOU%은(는) 몰래 안도의 한숨을 내쉰다.
  - acc: 1
    content: 「자, 스즈카. 이제 우리가 만난 뒤 처음으로 맞이하는 새해를 축하하자.」
  - divider: true
  - 축하 파티가 끝날 무렵, %YOU%은(는) 문득 한 가지 생각이 떠올랐다.
  - acc: 1
    content: 「스즈카, 오늘이 클래식급의 첫날이네. 어느새 일 년이 훌쩍 지났구나.」
  - 클래식급은 %UMA%의 생애에서 가장 중요한 시기다. 그 가치가 매우 높은 클래식 3관과 수많은 유명 G1 레이스가 클래식급부터 본격적으로 열리기 때문이다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그러게요. 지난 일 년 동안 %CALLNAME%도 정말 고생 많으셨어요.」
  - 클래식급이라…… 우리 함께 클래식급으로 진격하자, 스즈카! 반짝이는 시리즈를 휩쓸고, 앞선 풍경을 독점하는 거야!
  - %YOU%은(는) 호기롭게 %CHARA%에게 새해 포부를 선언했다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「네, %CALLNAME%와 함께 노력할게요!」
  - acc: 1
    content: 「그럼 클래식급의 첫 번째 목표는……」
  - %YOU%은(는) 조금 성급하게 일어나 책상으로 달려가 무언가를 뒤적이기 시작했다.
  - acc: 1
    content: 「아, 찾았다! 스즈카, 클래식급의 전초전은 야요이상으로 결정했는데, 어때?」
  - 야요이상은 중거리 G2 레이스로, 예로부터 클래식 3관의 첫 레이스인 「사츠키상」의 전초전으로 여겨져 왔다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「전 뭐든 좋아요, %CALLNAME%. 야요이상…… 마침 제가 자신 있는 거리네요.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그럼 %CALLNAME%. 야요이상을 대비해서 먼저 두 바퀴 정도 뛰고 올게요……」
  - acc: 1
    content: 「아니 스즈카, 오늘은 좀 쉬는 게 좋을 것 같다니까……」
  - 투지가 넘치다 못해 너무 흥분한 듯한 %CHARA%를(을) 보며 %YOU%은(는) 눈을 깜빡이며 고개를 내저었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「헤헤, 죄송해요. 저도 모르게 좀 들떠버렸나 봐요……」
  - 이렇게 %YOU%와 %CHARA%은(는) 클래식급의 첫 번째 목표——야요이상을 정했다.

# 初めてのG1前
# [번역 완료] race_clothe
race_clothe:
  title: 승부복
  lines:
    - if: era.get('cflag:2:48') === 47 + 4
      content: 클래식급의 첫 달 말, %CHARA%는 맞춤 제작된 승부복을 받았다.
    - if: era.get('cflag:2:48') !== 47 + 4
      content: 첫 G1 레이스를 앞두고, %CHARA%는 맞춤 제작된 승부복을 받았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 제 승부복이 도착했어요. 잘 어울리는지 한 번 봐 주실래요?」
    - acc: 1
      content: 「정말 귀여운 승부복이네. 스즈카에게 딱 어울려.」
    - %YOU%은(는) 흰색과 초록색이 어우러진 승부복을 입고 뱅글뱅글 도는 %CHARA%를(을) 보며 미소 지었다.
    - %CHARA%는 자신의 새 승부복이 꽤 마음에 든 모양이다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「승부복을 입으니 기분이 확 달라지네요, %CALLNAME%. 지금 당장 나가서 두 바퀴 정도 뛰어보며 체감해 볼게요!」
    - 말을 마치기가 무섭게 %CHARA%는 트레이닝실 밖으로 뛰어나가려 했다.
    - acc: 1
      content: 「하지만 스즈카, 지금은 벌써 밤인걸.」
    - %YOU%은(는) 어이없다는 듯 벽시계를 가리켰다.
    - %CHARA%는 멋쩍은 듯 웃으며 다시 돌아왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「새 옷을 입으니까 너무 신이 났나 봐요……」
    - divider: true
    - 다음 날 이른 아침, %YOU%은(는) 일부러 일찍 일어나 학원의 중앙 도로로 나갔다.
    - 역시나 오래 기다리지 않아, 멀리서 선명한 색채 하나가 다가오는 것이 보였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「후우…… 후우…… 어? %CALLNAME%? 설마 여기서 절 기다리고 계셨던 건가요……」
    - 맞아. 스즈카라면 참지 못하고 일찍 나와서 뛸 것 같았거든. 그래서 나도 일찍 일어났지.
    - %YOU%은(는) 승부복을 입고 아침 조깅을 하던 %CHARA%를(을) 성공적으로 「검거」한 것이 내심 뿌듯했다.
    - acc: 1
      content: 「스즈카, 승부복을 입고 달리는 기분은 어때?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「최고예요! 특히 승부복의 색깔이 제 취향에 딱 맞거든요.」
    - %CHARA%는 옷감을 만져보며 아끼는 기색을 감추지 못한다.
    - %YOU%은(는) 다시 한 번 %CHARA%의 백록색 승부복을 자세히 살펴보았다.
    - acc: 1
      key: attr
      content: 「흰색을 좋아하는구나.」（파워+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네…… 흰색은 눈을 연상시키잖아요. 대설이 내린 뒤의 세상은 언제나 고요하고 아름답거든요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「달리고 있을 때도 그런 아름다운 정적을 즐기는 편이에요.」
    - acc: 2
      content: 「초록색을 좋아하는구나.」（근성+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「초록색은 만물이 소생하는 느낌을 줘요. 달릴 때 마치 바람이 뒤에서 밀어주는 것 같거든요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그래서인지 달리는 시간은 늘 눈 깜짝할 사이에 지나가 버려요.」
    - %YOU%은(는) 깊이 생각에 잠긴 듯 고개를 끄덕였다.
    - acc: 1
      content: 「그렇구나.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그러니 %CALLNAME%, 조금만 더 뛰게 해주세요……」
    - %CHARA%는 아직 아쉬움이 남는 모양이다.
    - acc: 1
      content: 「하지만 곧 수업 시작이야, 스즈카. 미리 준비해야 하지 않겠어?」
    - %CHARA%은(는) 그제야 시간이 늦었다는 걸 깨닫고 %YOU%에게 인사한 뒤 서둘러 떠났다.

# 弥生賞出走後
# やる気+1
# [번역 완료] secret_base
secret_base:
  title: 비밀기지
  lines:
    - 야요이상 레이스가 끝난 어느 날, %CHARA%가 트레이닝실 문을 두드렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 계세요?」
    - acc: 1
      content: 「무슨 일이니, 스즈카?」
    - %CHARA%는 조심스럽게 문을 조금 더 열고 안으로 들어왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 혹시 시간 있으세요? 같이 산에 가자고 초대하고 싶어서요.」
    - acc: 1
      content: 「등산? 신선한 제안이네. 멀리 가야 하니?」
    - 갑자기 나타나 산에 가자고 권하는 %CHARA%에게, 서류를 처리하던 %YOU%은(는) 흥미가 생겼다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음, 그렇게 멀지는 않아요.」
    - acc: 1
      content: 「그럼 몇 분만 기다려 줘. 금방 준비할게……」
    - divider: true
    - 그 뒤 %YOU%은(는) %CHARA%을(를) 따라 학원 근처 어느 산기슭에 도착했다.
    - acc: 1
      content: 「스즈카, 왜 갑자기 산에 오자고 한 거야?」
    - %CHARA%는 살짝 미소 지었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정상에 올라가 보면 아실 거예요.」
    - 그리하여 %YOU%은(는) %CHARA%의 뒤를 따라 결코 낮지 않은 산을 손발을 다 써가며 오르기 시작한다.
    - acc: 1
      content: 「허억…… 후우…… 생각보다 힘드네. 역시 운동 부족인가 봐……」
    - 한참을 올랐다. 봄인데도 %YOU%은(는) 이미 땀범벅이었다.
    - 반면 줄곧 앞에서 걷던 %CHARA%는 가벼운 땀방울만 맺혔을 뿐이었다.
    - 역시 평범한 인간은 %UMA%의 신체 능력을 도저히 따라갈 수 없나 보다……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 잠시 쉴까요?」
    - %CHARA%는 %YOU%의 곁으로 내려와 걱정스럽게 묻는다.
    - acc: 1
      content: 「스즈카는 나 기다리지 말고 먼저 정상에 가 있어. 난 천천히라도 올라갈 수 있으니까……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「안 돼요, %CALLNAME%. 적어도 이번만큼은, 당신과 함께 목적지에 도착하게 해주세요……」
    - %YOU%은(는) %CHARA%의 강권에 못 이겨 잠시 휴식을 취했다.
    - 어느 정도 기운을 차린 뒤, %YOU%과(와) %CHARA%는 단숨에 산 정상까지 올라갔다.
    - acc: 1
      content: 「정말 아름답다……」
    - 이 산 정상에서는 주변의 아름다운 봄 경치가 한눈에 들어왔다. 올라오며 겪은 고생은 아무것도 아닌 것처럼 느껴졌다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 여기 풍경 어때요?」
    - acc: 1
      content: 「너무 멋져, 스즈카. 이런 신기한 곳을 어떻게 찾은 거야?」
    - %CHARA%는 %YOU%의 곁에 살며시 앉는다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「예전에 아침 조깅을 하다가 이 산을 지나간 적이 있는데, 직감이 말해줬어요. 이 산 정상은 분명 아름다울 거라고요. 그래서 여기까지 오게 됐죠.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그 뒤로 스트레스가 쌓일 때마다 이곳에 와요. 산 아래 풍경을 보고 있으면 진심으로 편안해지고 기뻐지거든요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「여긴 저만의 『비밀기지』예요. 저 말고 이곳을 아는 사람은 %CALLNAME%이 처음이랍니다.」
    - acc: 1
      content: 「그거 정말 영광인걸. 그런데 스즈카, 왜 나를 처음으로 데려온 거야?」
    - %CHARA%는 %YOU%에게 조금 더 가까이 다가앉는 듯했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%은(는) 제게 먼 풍경을 보여주시면서 정작 본인은 볼 수 없잖아요. 그래서 모시고 와서, 제가 사랑하는 『먼 풍경』을 보여드리고 싶었어요.」
    - %YOU%은(는) 곁에 있는 %CHARA%를(을) 슬쩍 바라보았다. %SEX%의 얼굴에는 만족스러운 미소가 걸려 있었다.
    - 마음이 움직였다. 보이지 않던 벽 하나가 무너진 듯한 기분이 들었다.

# クラシック級の祭り
# [번역 완료] turn_overcast
turn_overcast:
  title: 맑음 뒤 흐림
  lines:
    - 긴장감 넘치고 보람찼던 여름 합숙도 어느덧 절반이 지나, 몸과 마음이 지칠 때가 되었다.
    - 이에 합숙 시작 이후 계속 팽팽해져 있던 정신을 좀 식히기 위해, %YOU%은(는) 스즈카를 축제에 초대하기로 마음먹었다.
    - 휴게소에서 스즈카를 기다렸지만, 스즈카는 좀처럼 나타나지 않았다.
    - %YOU%은(는) 휴게실에서 스즈카를 기다렸지만, 스즈카는 좀처럼 나타나지 않았다.
    - acc: 1
      content: 「이봐 스즈카, 훈련은 진작 끝났어. 이제 좀 쉬자.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「어? %CALLNAME%, 여긴 어쩐 일이세요?」
    - 역시나 스즈카는 이미 트레이닝복으로 갈아입고 한 바퀴 더 뛰러 가려던 참이었다.
    - acc: 1
      content: 「스즈카, 오늘은 축제가 있는 날이야. 일 년에 한 번뿐인 행사를 놓치면 너무 아깝지 않겠어?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「축제…… 그래도 먼저 조금 달리고 싶어요. %CALLNAME%은(는) 먼저 가세요. 충분히 달리고 나서 따라갈게요.」
    - acc: 1
      content: 「스즈카가 다 뛸 때쯤이면 내년 축제까지 끝났을지도 몰라.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그렇게까지 과장될 리가! %CALLNAME%, 거짓말이죠……」
    - 결국 스즈카를 설득해 함께 축제장으로 향했다.
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「축제, 정말 시끌벅적하네요. 다들 즐거워 보여요. 저기 보세요, %CALLNAME%! 저기 빙수를 파는 곳이 있어요!」
    - 스즈카가 축제 분위기에 어울리지 못할까 봐 걱정했던 것이 무색해질 정도로 잘 즐기는 모습이다.
    - 빙수에 관심을 보이는 스즈카를 보고 %YOU%은(는) 빙수 가게로 데려가 두 컵을 샀다.
    - acc: 1
      content: 「자 스즈카, 이건 합숙 기간 동안 열심히 훈련한 보상이야～」
    - %YOU%은(는) 빙수 한 컵을 스즈카에게 건넸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말요? 고마워요, %CALLNAME%! 음, 정말 달콤해요!」
    - acc: 1
      content: 「스즈카, 앉아서 천천히 먹자.」
    - 스즈카는 얌전하게 당신 곁에 다가와 앉았다.
    - if: d.hoch_sho === 1
      lines:
        - content:
            - fontWeight: bold
              content: 해설
            - 「%CHARA%, 압도적인 기세로 단독 선두입니다! 이미 압승이 확정적입니다!」
        - 갑자기 들려온 실황 목소리에 %YOU%과(와) 스즈카는 동시에 소리가 나는 곳을 돌아보았다.
        - 알고 보니 가게 주인의 텔레비전에서 스즈카가 야요이상에서 승리했을 때의 영상이 나오고 있었다.
        - acc: 1
          content: 「저 때의 스즈카는 정말 멋지고 대단했어.」
        - %YOU%은(는) 진심으로 스즈카를 칭찬했다.
        - 하지만 스즈카는 대답 없이 레이스를 지켜보는 데만 집중하는 듯했다.
        - %YOU%은(는) %SEX%의 시선을 따라가 보았는데, 마침 중계 화면이 스즈카에게 큰 차이로 뒤처진 2위를 비추고 있었다.
        - 2위 %UMA%은(는) 땀을 비 오듯 흘리며 필사적으로 달리고 있었지만, 스즈카와의 거리는 점점 더 벌어질 뿐이었다.
        - acc: 1
          content: 「저 아이도 꽤 실력 있는 아이였는데, 역시 스즈카의 실력이 한 수 위였네. 저기, 스즈카?」
        - %YOU%은(는) 스즈카의 기분이 갑자기 가라앉은 것을 눈치챘다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저, 전 괜찮아요, %CALLNAME%. 얼른 먹고 돌아가서 쉬죠. 갑자기 좀 피곤해진 것 같아요……」
        - 스즈카는 %YOU%에게 억지로 미소를 지어 보였다.
        - %YOU%은(는) 상황 파악이 잘 되지 않았지만, 일단 서둘러 스즈카를 숙소로 데려다주었다. # +失意
    - if: d.hoch_sho > 1
      lines:
        - content:
            - fontWeight: bold
              content: 실황
            - 「인기 우마무스메 %CHARA%, 과연 승리할 수 있을 것인가…… 아아, 아쉽습니다! %CHARA%, 결정적인 실수를 범하고 마는군요!」
        - 갑자기 들려온 실황 소리에 %YOU%은(는) 고개를 돌려 출처를 찾았다.
        - 빙수 가게 주인의 TV에서 야요이상의 하이라이트가 나오고 있었다.
        - acc: 1
          content: 「스즈카……?」
        - %YOU%은(는) 걱정스러운 마음으로 스즈카를 보았다.
        - 스즈카는 대답 없이 자신이 실수했던 그 순간을 뚫어지게 쳐다보고 있었다.
        - 레이스 다시보기가 끝나서야 스즈카는 간신히 정신을 차렸다.
        - %YOU%은(는) 스즈카의 기분이 눈에 띄게 우울해진 것을 발견했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저…… 우리 이제 돌아가요.」
        - 스즈카는 %YOU%에게 억지로 미소를 지어 보였다.
        - %YOU%은(는) 어떻게 위로해야 할지 몰라, 일단 서둘러 스즈카를 숙소로 데려다주었다. # 컨디션-1
    - if: "!d.hoch_sho"
      lines:
        - content:
            - fontWeight: bold
              content: 실황
            - 「출주 우마무스메들 일제히 게이트를 박차고 나옵니다! 아주 멋진 출발입니다!」
        - 갑자기 들려온 실황 목소리에 %YOU%과(와) %CHARA%는 동시에 고개를 돌렸다.
        - 빙수 가게 TV에서 야요이상 레이스가 방영되고 있었다.
        - acc: 1
          content: 「스즈카……?」
        - %YOU%은(는) 걱정스러운 눈으로 %CHARA%을(를) 바라봤다. 원래 출전할 예정이던 레이스를 %SEX%은(는) 결장한 것이다.
        - %CHARA%는 대답 없이 멍한 눈으로 전력 질주하는 %UMA%들을 지켜보고 있었다.
        - 레이스 영상이 끝날 때까지 %CHARA%는 정신을 차리지 못했다.
        - acc: 1
          content: 「스즈카, 이제 가자. 오늘은 일찍 쉬는 게 좋겠어, 응?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네……」
        - %CHARA%는 잠꼬대를 하듯 대답하고는, 넋이 나간 듯 %YOU%를 따라 숙소로 돌아갔다. # 컨디션-2

# 夏合宿終了
# [번역 완료] turn_cloudy
turn_cloudy:
  title: 흐리고 구름 낀
  lines:
    - 일 년에 한 번뿐인 여름 합숙이 끝나고, 합숙에 참여했던 학생들은 즐겁게 짐을 챙기며 학원으로 돌아갈 준비를 하고 있었다.
    - 하지만 %YOU%은(는) 납득이 가지 않았다. 담당인 %CHARA%은(는) 떠들썩한 %UMA%들 사이에 없었고, 짐도 정리되어 있지 않았다.
    - 몇 사람에게 물어보니 스즈카는 오늘 아침 달리러 나간 뒤 아직 돌아오지 않았다고 했다. %YOU%은(는) 마음이 놓이지 않아 직접 찾으러 나섰다.
    - acc: 1
      content: 「스즈카! 스즈카, 어디 있니? 스즈——」
    - 예상보다 빨리, 바닷가에 홀로 앉아 있는 스즈카를 발견할 수 있었다.
    - %SEX%는 모래사장에 앉아 멍하니 바다를 바라보며 %YOU%의 부름에도 대답하지 않았다.
    - %YOU%은(는) 더 이상 부르지 않고 살며시 %SEX%의 곁에 앉는다.
    - acc: 1
      content: 「무슨 안 좋은 일이라도 있어, 스즈카? 나한테 말해봐도 괜찮아.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 뭔가 기분이 이상해요……」
    - 스즈카가 힘없이 말한다.
    - 그 말을 듣고 %YOU%은(는) 잠시 멍해졌다.
    - 확실히 스즈카는 합숙 후반 내내 넋이 나간 듯한 모습이었고, 마치 기계처럼 %YOU%의 지시를 기계적으로 수행할 뿐이었다.
    - acc: 1
      content: 「조금 더 구체적으로 말해줄 수 있겠니?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「요 며칠 동안 계속 달리는 의미에 대해 생각하고 있었어요……」
    - if: d.hoch_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「전 아침 조깅 때처럼, 레이스에서도 홀로 앞서나가는 풍경을 즐길 수 있어요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만 저 때문에 다른 모든 이들 앞선 풍경을 완전히 잃어버리고 마는걸요……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「전 그저 레이스 자체를 즐기는 것뿐이지만, 누군가는 반드시 이겨야만 하는 간절한 이유가 있을지도 몰라요. 그렇게 생각하면 모두에게 너무 불공평한 건 아닐까요?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「혹시 제가 %THEY%의 꿈을 제 손으로 망가뜨려 버린 건 아닐까요……」
        - 스즈카의 말을 듣고서야 %YOU%은(는) 깨달았다. %SEX%가 축제에서 본 그 2위 분의 클로즈업 장면 이후로 이렇게 기운을 차리지 못하고 있었다는 사실을.
        - acc: 1
          content: 「경쟁이니까 승패가 갈리는 건 당연한 거야. 전혀 걱정할 필요 없어.」
        - 스즈카가 뒤돌아보자 마침 %YOU%의 강한 시선과 마주쳤다.
        - acc: 1
          content: 「스즈카, 만약 레이스 중에 네 풍경을 매번 가로채 가는 강력한 라이벌이 나타난다면 너라면 어떻게 하겠니?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저는…… %SEX%을(를) 새로운 목표로 삼아 정면으로 추월하고, 제 풍경을 되찾을 때까지……」
        - 스즈카의 눈에서 강적을 갈구하는 열망을 읽어낸 %YOU%은(는) 만족스럽게 고개를 끄덕였다.
        - acc: 1
          content: 「그러니까 스즈카, 네가 앞서가는 풍경을 쫓는 그 모습 자체가 이미 다른 라이벌들의 새로운 꿈이 되고 있는 거야.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「모두가…… 정말 그렇게 생각할까요, %CALLNAME%?」
        - %YOU%은(는) 대답 대신 조용히 스즈카의 옆모습을 바라보았다.
        - 한참 뒤, 스즈카는 자리에서 일어나 옷에 묻은 모래를 털어냈다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「고마워요, %CALLNAME%. 다 이해했는지는 모르겠지만, 적어도 아까보다는 훨씬 마음이 가벼워졌어요.」
        - %YOU% 역시 일어나 멀리 있는 숙영지를 바라보았다.
        - acc: 1
          content: 「가자, 스즈카. 학원으로 돌아가자. 어쩌면 다음 레이스에서 진짜 정답을 찾을 수 있을지도 몰라.」 # 실의 -> 슬픔
    - if: d.hoch_sho > 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아침 조깅 때는 이런 걸 전혀 신경 쓰지 않았는데……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「레이스에 임하는 모두가 너무나도 전력을 다하고 있고, 반짝거리고 있어서……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%THEY%에게는 반드시 이겨야만 하는 이유가 있는 것 같아요. 저는…… 어느새 %THEY%에게 압도되어 버려서……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 제 승리에 대한 집념이 다른 분들에 비해 턱없이 부족한 것만 같아요. 저도 정말 이기고 싶은데 말이죠……」
        - 스즈카의 고백을 듣고 나서야 %YOU%은(는) 깨달았다. %SEX%가 축제에서 본 자신의 실수 영상을 계기로 기운을 잃었다는 것을.
        - acc: 1
          content: 「스즈카, 가끔 하는 실수는 너무나 당연한 거야. 그리고 눈앞에 아무도 없는 풍경을 양보하지 않으려는 그 마음 역시 승리에 대한 집념이 아닐까?」
        - 스즈카의 눈이 %YOU%의 흔들림 없는 시선과 마주한다.
        - acc: 1
          content: 「이번에 선두의 풍경을 독점하지 못했다면, 다음번에 다시 되찾아오면 돼!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「전…… 알겠어요, %CALLNAME%. 가르침을 주셔서 감사합니다……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「다음 레이스에서는 반드시 승리를 가져올게요. 저를 위해서뿐만 아니라, 선생님을 위해서도요……」
        - 스즈카의 눈동자에 다시 승부욕이 깃드는 것을 본 %YOU%은(는) 만족스럽게 고개를 끄덕였다.
        - 스즈카는 자리에서 일어나 옷을 털었다.
        - %YOU% 역시 몸을 일으켜 숙소 쪽을 바라보았다.
        - acc: 1
          content: 「가자, 학원으로 돌아가자.」 # 컨디션+1
    - if: "!d.hoch_sho"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「선두의 풍경은 이미 아침 조깅을 하면서 수없이 봐왔는데……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그런데 레이스 중인 분들을 볼 때마다 마음 한구석이 텅 빈 것만 같아요. 저도 그 자리에 서 있어야 할 것만 같아서……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그리고 마음껏 달려서, 다시 한 번 그 경치를 독점하고 싶어요……」
        - 이 말을 듣고서야 %YOU%은(는) %SEX%가 축제에서 야요이상을 다시 본 뒤로 왜 기운이 없었는지 이해했다.
        - acc: 1
          content: 「다음은 스즈카야. 다음에는 네가 %THEY% 중에서 가장 빛날 거야.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「다음……이라…… 그러길 바랄게요.」
        - %CHARA%는 일어나 옷에 묻은 모래를 털어냈다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「격려해 주셔서 고마워요, %CALLNAME%. 다음엔 꼭 노력해 볼게요.」
        - %YOU% 역시 일어나 숙영지를 향한다.
        - acc: 1
          content: 「가자, 이제 짐 챙겨야지.」
        - %YOU%은(는) %CHARA%의 뒤를 따르며, 왠지 모를 형용할 수 없는 답답함을 느꼈다.

# 神戸新聞杯入着
# [번역 완료] kobe_hai_end
kobe_hai_end:
  title: 흐림 뒤 맑음
  lines:
    - if: d.rank === 1
      lines:
        - content:
            - fontWeight: bold
              content: 해설
            - 「%CHARA%, 압도적인 기량으로—— 골인!」
        - 관객석 맨 앞에서 스즈카의 환한 표정을 본 %YOU%은(는) 남몰래 안도의 한숨을 내쉬었다.
        - acc: 1
          content: 「이번 레이스에 출주하기를 정말 잘했어.」
        - 잠시 후, 스즈카가 당신을 향해 달려오는 것을 보고 %YOU%은(는) 깜짝 놀랐다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저, 이제 완전히 깨달았어요! 정말 감사합니다!」
        - %YOU%은(는) 눈에 띄게 들뜬 스즈카를 보며 진정하라는 듯 미소 지었다.
        - acc: 1
          content: 「이번 기회에 너만의 답을 찾았기를 바랄게.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네, 찾았어요. 하지만 다음 레이스를 통해서 제 생각이 맞는지 더 확실하게 확인하고 싶어요.」
        - 다시 순수한 스즈카의 모습으로 돌아온 것을 보고 %YOU%은(는) 고개를 끄덕였다.
        - acc: 1
          content: 「가서 마음껏 즐기렴, 스즈카. 너만의 승리를!」 # -실의/슬픔, 컨디션+1
    - if: d.rank > 1
      lines:
        - content:
            - fontWeight: bold
              content: 해설
            - 「%CHARA%, 필사적으로 뒤쫓습니다만, 한 끗이 부족했나요…… 레이스 종료! %CHARA%, 승리를 눈앞에서 놓치고 맙니다!」
        - %YOU%은(는) 전광판을 뚫어지게 쳐다보았다. 스즈카의 이름은 있었지만, 첫 번째 줄은 아니었다——
        - 여름 합숙이 끝날 무렵 스즈카를 다독였고 당시엔 다시 도전할 용기를 얻은 듯 보였지만, 이번 결과는……
        - 여름 합숙 마지막에 스즈카를 격려했을 때는 %SEX%에게 다시 한번 도전할 용기가 생긴 듯 보였다. 하지만 이번에는……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저 돌아왔어요.」
        - 익숙한 목소리에 %YOU%은(는) 화들짝 고개를 들었고, 스즈카가 바로 앞까지 와 있다는 걸 깨달았다.
        - acc: 1
          content: 「스즈카, 너……」
        - 위로하려 했지만 무슨 말을 해야 할지 알 수 없었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「괜찮아요, %CALLNAME%.」
        - %CHARA%는 %YOU%을(를) 진지하게 바라본다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「비록 이번엔 끝까지 버티지 못했지만, 달리는 내내 진지하게 생각했거든요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아직 명쾌한 답을 얻지는 못했지만…… 다음 레이스, 아니면 그다음 레이스에서 반드시 저만의 정답을 찾아낼 수 있을 것 같아요.」
        - %YOU%은(는) 무슨 말을 할지 몰라, 간신히 투박한 한마디를 뱉었다.
        - acc: 1
          content: 「다행이다, 스즈카. 적어도 해결할 희망은 보이네……」 # -실의/슬픔

# 敗戦または不出走
kobe_hai_lose:
  title: 흐린 뒤 다시 흐림
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 저는……」
    - 고베 신문배가 끝난 어느 날, 트레이닝실에서 스즈카와 레이스 녹화 영상을 보던 중 스즈카가 괴로운 듯 말을 아꼈다.
    - %YOU% 역시 기운이 없었다. 이번 레이스가 스즈카의 고민을 해결하는 데 전혀 도움이 되지 않은 것 같았기 때문이다. 오히려……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「죄송해요, %CALLNAME%. 저…… 제 문제가 더 심각해진 것 같아요.」
    - %YOU%은(는) 순간 무슨 말을 해야 할지 몰라, 그저 녹화 영상을 끄고 스즈카의 주의를 돌리려 애썼다.

# クラシック級10月第1週
# [번역 완료] first_step
first_step:
  title: 운명적인 첫발
  lines:
    - 10월의 어느 날, %YOU%은(는) 스즈카를 트레이닝실로 불러 다음 목표를 상의했다.
    - acc: 1
      content: 「스즈카, 클래식급도 벌써 절반 넘게 지났네. 내 눈엔 넌 이미 아주 실력 있는 %UMA%야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「칭찬 감사합니다, %CALLNAME%!」
    - 그래서 다음 목표는 조금 더 가치 있는 레이스에 도전해 봐도 좋을 것 같아.
    - %YOU%은(는) 자신의 구상을 설명했고, 스즈카 역시 그 계획의 실현 가능성을 진지하게 고민하는 듯했다.
    - acc: 1
      content: 「혹시 스즈카도 생각하고 있는 게 있니?」
    - %YOU%은(는) 책상 끝에 있던 레이스 일정표를 %SEX%에게 건넸다.
    - 스즈카는 그것을 받아 진지하게 넘겨보기 시작했다.
    - %YOU%은(는) 책상 옆에 있던 레이스 일정표를 건넸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 결정했어요. 전 『텐노상(가을)』에 출주하고 싶어요!」
    - acc: 1
      content: 「좋아, 목표가 정해졌으니 이제 쉼 없이 달려야겠네.」
    - 스즈카가 고른 목표에 %YOU%은(는) 크게 놀라지 않았다.
    - 가을 시니어 3관 중 하나인 텐노상(가을)은 중거리 레이스 중에서도 인지도가 매우 높은 최고의 G1 레이스다.
    - 게다가 이 레이스는 출주 자격에 제한이 없어 클래식급 신예들과 시니어급 베테랑들이 한데 어우러지는 아주 뜨거운 경쟁의 장이기도 하다.
    - %YOU%은(는) 굳이 몇 년도 텐노상인지 묻지 않았다. 당장 이번 달에 열리는 클래식급 텐노상은 시간상 도저히 무리였으니까.
    - 하지만 시니어급 텐노상까지는 일 년 이상의 시간이 남았고, 그 공백기를 허투루 보낼 수는 없었다.
    - 이에 %YOU%은(는) 일정표를 앞으로 넘겨 적절한 작은 목표 하나를 찾아냈다.
    - acc: 1
      content: 「그전에…… 스즈카, 우선 킨코상에 도전해 보자.」
    - 킨코상은 표준 중거리 G2 레이스로, 야요이상이나 고베 신문배보다 인지도가 약간 더 높다. 스즈카가 텐노상에 도전하기 위한 첫 번째 디딤돌로 아주 적당했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네, 킨코상에 나갈게요. 저를 믿어주세요, %CALLNAME%! 반드시 승리해서, 저 먼 곳의 풍경을 향해 다시 한 걸음 내디딜 테니까요……」
    - 이렇게 %YOU%과(와) 스즈카는 최종 목표인 텐노상(가을)과 그 전초전인 킨코상을 확정했다.

# -失意/悲しみ
# [번역 완료] new_year_senior
new_year_senior:
  - 오늘은 시니어급의 첫날이자, %YOU%과(와) %CHARA%가 만난 지 3년째가 되는 날이다.
  - 지난 일 년 동안 스즈카는 %YOU%의 세심한 지도 아래 다양한 중거리 레이스를 섭렵하며 명성 높은 도주 %UMA%로 성장했다.
  - %YOU%은(는) 그런 생각을 하며 책상 앞에 앉아 지루하게 볼펜을 돌리다가 벽시계를 힐끔거렸다.
  - 실내임에도 불구하고 %YOU%은(는) 두툼한 외출복을 입고 있었다.
  - 잠시 후, 문을 두드리는 조심스러운 소리가 들린다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, 계세요?」
  - %YOU%은(는) 즉시 일어나 문을 열었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「새해 복 많이 받으세요, %CALLNAME%～」
  - 문밖에는 두꺼운 패딩을 껴입은 스즈카가 서 있었다. %SEX%는 %YOU%을(를) 보자마자 미소를 지으며 새해 인사를 건넸다.
  - 길게 늘어뜨린 목도리 사이로, 방금 밖에서 들어온 탓인지 발그레해진 얼굴이 무척 귀여웠다.
  - 담당 우마무스메가 빤히 쳐다보자 오히려 %YOU%이(가) 쑥스러워졌다.
  - acc: 1
    content: 「너도 새해 복 많이 받아, 스즈카!」
  - %YOU%은(는) 차마 담당 우마무스메를 똑바로 쳐다보지 못했다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「후후. %CALLNAME%도 준비가 끝난 것 같으니 출발할까요?」
  - 스즈카는 %YOU%의 당황함을 눈치챈 듯 미소 지으며 화제를 돌렸다.
  - 시니어급의 목표를 거물급 레이스인「텐노상(가을)」으로 정했기에, %YOU%과(와) 스즈카는 함께 신사에 가서 기도를 하기로 약속했었다.
  - divider: true
  - %YOU%과(와) 스즈카는 겨울 특유의 쓸쓸한 분위기 속에서 느긋하게 걸음을 옮겼다.
  - 새해라 그런지 길가에는 사람들의 모습이 거의 보이지 않았다. 이따금 보이는 사람들도 얼굴의 절반을 목도리에 파묻은 채 바삐 지나갈 뿐이었다.
  - 마치 이 세상에 %YOU%과(와) 스즈카 둘만 남은 듯한 기분이 들었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「후훗……」
  - 독특하고 평화로운 분위기를 만끽하던 중, 곁에 있던 스즈카가 작게 웃음을 터뜨렸다.
  - acc: 1
    content: 「무슨 일이야, 스즈카?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아뇨. 다만 이번에는 %CALLNAME%과(와) 아무도 없는 풍경을 함께 나누고 있잖아요. 저에게도, 당신에게도 드문 경험이 아닐까 해서요.」
  - %YOU%은(는) 신사로 가는 길이 조금만 더 길었으면 좋겠다는 생각에 무의식적으로 발걸음을 늦췄다.
  - 하지만 신사는 학원에서 그리 멀지 않았고, 곧 도착하고 말았다.
  - 아쉬움을 뒤로한 채 %YOU%은(는) 스즈카를 데리고 예정대로 참배를 시작했다.
  - acc: 1
    content: 「……새해에는 저와 스즈카가 계속 나아가서, 무사히 텐노상 방패를 손에 넣을 수 있게 해주세요……」
  - 딱히 다른 소원이 없었던 %YOU%은(는) 스즈카의 우승을 기원하는 기도를 마쳤다.
  - 그러고는 옆을 슬쩍 보았는데, 스즈카는 여전히 두 손을 모으고 간절히 기도하는 자세를 유지하고 있었다.
  - 조금 더 시간이 흐른 뒤에야 스즈카는 눈을 떴고, %YOU%의 시선을 느끼자 미소로 화답했다.
  - %YOU%은(는) 갑자기 스즈카가 어떤 소원을 빌었는지 궁금해졌다.
  - acc: 1
    content: 「저기 스즈카, 실례가 안 된다면 무슨 소원을 빌었는지 물어봐도 될까?」
  - 질문을 던지자마자 묘한 쑥스러움이 밀려왔다.
  - 평범한 질문일 뿐인데 왜 이렇게……
  - if: (t=era.get('love:2')) < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『텐노상에서 꼭 이기게 해주세요』라고 빌었어요.」
      - 스즈카는 %YOU%의 민망함을 눈치채지 못한 듯, 미소 지으며 소원 내용을 말해주었다.
      - 예상 가능한 대답이었지만, 질문을 던진 %YOU%은(는) 왠지 부끄러워졌다.
      - acc: 1
        content: 「그렇구나…… 참배도 다 끝났으니 이제 돌아갈까?」
      - %YOU%은(는) 대답에 별다른 코멘트를 하지 않고 화제를 전환했다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「네. %CALLNAME%도 새해에는 힘내세요.」
      - 스즈카는 더 묻지 않고 미소 띤 얼굴로 학원까지 %YOU%의 뒤를 따랐다.
  - if: t >= 50 && t < 90
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『%CALLNAME%와 함께 텐노상에서 꼭 우승하게 해주세요』라고 빌었어요.」
      - 스즈카는 웃으며 대답했다. 놀랍게도 %YOU%의 소원과 완전히 일치했다.
      - acc: 1
        content: 「와, 스즈카. 우리 소원이 완전히 똑같네!」
      - %YOU%은(는) 흥분해서 말했다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「저와 %CALLNAME%의 유대가 이미 아주 깊다는 뜻이겠죠. 보세요, 생각까지 똑같잖아요.」
      - 스즈카 쪽이 오히려 더 기뻐 보였다.
      - acc: 1
        content: 「그거 정말 기쁜걸. 이제 돌아가자. 새해 첫날이라 할 일이 산더미거든.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「네, 가죠. %CALLNAME%과(와) 함께할 새로운 한 해가 정말 기대돼요. 후후.」
  - if: t >= 90
    lines:
      - 하지만 예상과 달리 옆의 스즈카는 얼굴을 돌렸다.
      - acc: 1
        content: 「스즈카? 무슨 일이야?」
      - 걱정스러운 마음에 질문을 던지자, 부끄러웠던 마음도 금세 사라졌다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아, 아무것도 아니에요. 정말 아무 일도 없어요, %CALLNAME%……」
      - 개미만한 목소리로 대답하는 꼴이 전혀 아무렇지 않아 보이지 않았다.
      - acc: 1
        content: 「스즈카?」
      - %YOU%은(는) 살며시 스즈카의 뺨을 받쳐 %SEX%의 얼굴을 조금 자신 쪽으로 돌렸다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「앗, %CALLNAME%, 지금 뭐 하시는 거예요. 근처에 누가 있을지도 모르는데……」
      - 스즈카는 %YOU%의 행동에 놀라 목소리가 더욱 작고 가늘어졌다.
      - 그 틈에 스즈카의 모습을 볼 수 있었다. %SEX%의 얼굴은 잘 익은 복숭아처럼 새빨갰다.
      - %YOU%은(는) 자기도 모르게 움직임을 멈췄다.
      - 에메랄드빛 눈동자는 갈 곳을 잃고 %YOU%과(와)의 시선을 애써 피하고 있었다.
      - acc: 1
        content: 「정말 괜찮은 거 맞아? 전혀 안 괜찮아 보이는데?」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「정말 괜찮아요, %CALLNAME%!」
      - 다음 순간, 스즈카는 %YOU%의 손을 뿌리치고 얼굴을 가린 채 신사 밖으로 달려 나갔다.
      - acc: 1
        content: 「앗, 스즈카! 발밑 조심해야지!」
      - 스즈카의 돌발 행동에 의아함은 더 커졌지만, 생각할 겨를도 없이 %YOU%은(는) 스즈카를 뒤따라 신사를 빠져나왔다.

# 金鯱賞3着以内
# [번역 완료] kink_sho_3
kink_sho_3:
  title: 재기
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 오늘 달리기 정말 즐거웠어요!」
    - %YOU%은(는) 방금 레이스를 마쳤음에도 활기 넘치는 스즈카를 보며 덩달아 기분이 좋아졌다.
    - 목표를 정했다면 그 목표를 향해 나아가는 모습이 바로 이런 것이겠지.
    - 그리고 막 끝난 킨코상에서 보여준 눈부신 달리기는 %SEX%의 실력과 각오를 충분히 증명하고 있었다.
    - acc: 1
      content: 「스즈카, 정말 대단했어! 이제 텐노상에 도전할 자신감이 더 생기네!」
    - %YOU%은(는) 진심으로 스즈카를 칭찬했다.

# 金鯱賞4着以下
# [번역 완료] kink_sho_4
kink_sho_4:
  title: 잠복
  lines:
    - content:
        - fontWeight: bold
          content: 해설
        - 「아아, 아쉽습니다! %CHARA%, 승리까지 정말 한 끗 차이였는데요.」
    - 솔직히 말해서 %YOU%은(는) 조금 실망했다.
    - 처음에는 스즈카가 확실히 유리했지만, 후반부의 판단 착오 한 번으로 인해 걷잡을 수 없이 밀려버렸기 때문이다.
    - 그렇다 해도 자신이 스즈카의 입장이었어도 더 나은 판단을 내리지는 못했을 것 같았다.
    - 이런 식이라면 텐노상은……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「죄송해요, %CALLNAME%. 저도 제가 그런 실수를 할 줄은 몰랐어요……」
    - 귀를 축 늘어뜨린 채 서 있는 스즈카를 보자 꾸지람이나 비난 섞인 말은 전혀 나오지 않았다.
    - 한참 뒤, %YOU%은(는) 한숨을 내쉰다.
    - acc: 1
      content: 「괜찮아, 스즈카. 이번 레이스의 실수를 잘 분석해서 다음엔 반복하지 않도록 하자.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네, %CALLNAME%. 지금 말하기엔 조금 뜬금없을지도 모르지만, 이번 레이스도 제대로 즐길 수 있었어요.」
    - %YOU%은(는) 고개를 끄덕였다. 적어도 스즈카의 멘탈이 무너지지 않은 것만으로도 다행이다. 그렇다면 지금부터 힘을 비축해 기회를 노린다면, 다시 날아오르는 것도 불가능한 일은 아닐 것이다……

# [번역 완료] kink_sho_miss
kink_sho_miss:
  title: 결석
  lines:
    - 날씨가 딱 좋아서, 본래라면 기회를 잡아 열심히 훈련해야 했겠지만……
    - 하지만 스즈카가 아직 나타나지 않았다.
    - %YOU%은(는) 약간 의아한 듯 하늘의 태양을 바라보았다. 지금은 햇살이 눈부신 오전. 스즈카가 훈련을 거를 리가 없는데……
    - 결국 %YOU%은(는) 직접 스즈카를 찾아 나서기로 했다.
    - divider: true
    - acc: 1
      content: 「스즈카? 너…… 여기서 뭐 하고 있어?」
    - 학원 대부분을 돌아다녀도 찾지 못해 풀이 죽은 채 트레이너실로 돌아와 %T_NAME%에게 전화하려던 순간, 뜻밖에도 스즈카를 발견했다.
    - 지금, 스즈카는 침묵한 채 트레이닝실의 TV 앞에 앉아, TV에서 흘러나오는 킨코상 녹화 영상을 보고 있었다.
    - 그 광경을 본 %YOU%도 함께 침묵할 수밖에 없었다. 대체 무슨 말을 건네야 할지 알 수 없었다.
    - 스즈카는 %YOU%이(가) 문을 여는 소리를 듣고는, 묵묵히 자리에서 일어나 TV를 껐다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「가요, %CALLNAME%.」
    - 그리고 %SEX%은(는) %YOU%과(와) 어깨를 스치듯 지나 혼자 트레이너실 밖으로 걸어나갔다. 마침 %SEX%의 옆얼굴이 보였다.
    - 그 모습에 %YOU%은(는) 묘한 공포를 느꼈다.
    - 그 모습은 이유를 알 수 없는 두려움을 불러일으켰다.
    - 스즈카는 이미 트레이닝실을 떠났기에, %YOU%은(는) 깊게 생각할 겨를도 없이 말없이 그 뒤를 쫓아갔다.
    - 다행히 스즈카는 별다른 이상 행동을 보이지 않았고, 평소처럼 훈련장에 도착해 하루의 훈련을 시작했다. 모든 것이 정상이었다.
    - 정말로, 모든 것이 정상인 걸까……?
    - %YOU%은(는) 서둘러 고개를 저으며 그 생각을 머릿속에서 몰아냈다.

# シニア級3月第3週
# [번역 완료] second_step
second_step:
  title: 운명의 두 번째 발걸음
  lines:
    - acc: 1
      content: 「실은 말이야, 스즈카……」
    - %YOU%은(는) 맞은편에 단정하게 앉아 있는 스즈카를 바라보며, 손에 든 레이스 일정을 만지작거렸다.
    - acc: 1
      content: 「가을 텐노상까지는 아직 반년이나 남았으니까, 그 공백기를 채우기 위해 레이스를 한 번 더 뛰는 게 좋을 것 같아……」
    - %CHARA%는 고분고분하게 고개를 끄덕였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%께서 말씀하시는 대로 따를게요.」
    - acc: 1
      content: 「스즈카가 이미 여러 G2급 레이스에서 두각을 나타냈으니, 이번에는 G1에 도전해 봐도 좋을 것 같은데……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「좋아요, %CALLNAME%.」
    - acc: 1
      content: 「그럼 오사카배는 어때? 빅토리아 마일도 괜찮아 보이고, 아니면 야스다 기념이 더 나으려나?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「다 괜찮아요, %CALLNAME%.」
    - %YOU%은(는) 갑자기 말문이 막혔다. 잠시 뒤 난처한 듯 입을 열었다.
    - acc: 1
      content: 「스즈카, 이번에는 네 의견을 묻는 거야. 조금 더 주도적으로 정해봐도 돼.」
    - 그렇게 말하며 손에 든 일정표를 스즈카에게 건넸다.
    - 예상외로 스즈카는 금방 결정을 내렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 그럼 『타카라즈카 기념』으로 할게요.」
    - 팬 투표로 출주 여부가 결정되는 레이스이자 봄 시니어 3관의 마지막 관문인 타카라즈카 기념은, 그 가치가 스즈카의 최종 목표인 가을 텐노상에 견줄 만하다.
    - 하지만 스즈카는 팬들의 인기 같은 것은 전혀 고려하지 않는 듯했다.
    - 이것이 강한 %UMA%의 자신감일지도 모른다.
    - %YOU%은(는) 잡생각을 거두고 스즈카에게 엄지를 치켜세웠다.
    - acc: 1
      content: 「멋진 선택이야, 스즈카. 너라면 분명 좋은 성적을 낼 수 있을 거야.」

# [번역 완료] takz_kin
takz_kin:
  title: 선전포고
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응, 가자.」
    - color: %A_COLOR%
      content: %CHARA%는 이미 아주 익숙해진 게이트를 바라보며 조용히 스스로를 다독였다.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「%CHARA% 양, 잠시만요.」
    - color: %A_COLOR%
      content: 자신의 이름을 부르는 %UMA%이(가) 있어 %CHARA%은(는) 조금 의아한 듯 돌아봤다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, %CALL_18%구나. 이번 레이스도 살살 부탁해.」
    - color: %A_COLOR%
      content: 말을 건넨 이는 %CHARA%의 클래스 메이트인 %A_NAME%였다. 마찬가지로 노련한 중거리 %UMA%이며 레이스 경험도 %CHARA%에게 결코 뒤지지 않는다.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「후훗, 살살 부탁한다는 건 제가 할 소리 같은데요.」
    - color: %A_COLOR%
      content: %A_NAME%도 웃었다. 그 눈에도 승리와 강적을 향한 갈망이 보였다.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「어머나, 여기 꽤나 소란스럽네요?」
    - color: %A_COLOR%
      content: %CHARA%와 %A_NAME%이(가) 함께 고개를 돌리자, 또 한 명의 실력파인 %G_NAME%이(가) 보였다.
    - color: %A_COLOR%
      content: %G_NAME%은(는) %CHARA%와 %A_NAME%의 후배였지만, 클래식 시즌에 연달아 우승을 거머쥐며 만만치 않은 실력을 증명한 바 있다.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「아, 너도 타카라즈카 기념에 나왔구나. 이번 레이스는 정말 전력을 다해야겠네. 승리를 쉽게 내주지는 않을 거야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응, 나도 그 누구보다 먼저 결승선을 통과할 거야.」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「두 선배님의 투지가 대단하시니, 저도 제대로 상대해 드려야겠네요. 이번 레이스도 제가 가져가겠습니다, 지난번처럼 말이죠.」
    - color: %A_COLOR%
      content: 세 명의 %UMA%는 서로를 마주 보며, 상대방의 눈동자 속에 맺힌 투지를 확인했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「시간이 다 됐어, 다들. 시작하자!」

# [번역 완료] takz_kin_win
takz_kin_win:
  title: 선취
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아, 하아……」
    - color: %A_COLOR%
      content: %CHARA%는 거대한 전광판 아래에서 숨을 몰아쉬며, 때때로 전광판 가장 위에 새겨진 자신의 이름을 올려다보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이겼어.」
    - color: %COLOR%
      content: 방금 끝난 타카라즈카 기념에서 %CHARA%는 두 명의 강적과 정면으로 맞붙어 승리하고 마침내 우승을 차지했다.
    - color: %COLOR%
      content: 거기까지 생각이 미치자, 평소 담담한 성격의 %CHARA%조차 조금은 자랑스러운 듯 미소를 짓기 시작했다.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「과연, 스즈카 너의 실력은 소문대로 대단하구나.」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「%11_CALL%의 대도주는 정말 막아내기 힘드네요. 처음에 잡지 못하면 뒤에는 더 이상 기회가 없으니까요.」
    - color: %COLOR%
      content: 두 강적 %UMA%가 천천히 걸어와 %CHARA% 곁에 서며 감개무량한 듯 말했다.
    - color: %COLOR%
      content: %CHARA%은(는) %THEY% 두 사람의 눈에서 후회를 보지 못했다. 있는 것은 부러움과 강적에 대한 동경뿐이었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「두 분의 실력도 대단했어요. 후훗, 실은 레이스를 치르는 동안 두 분이 압박해 와서 꽤 긴장했는걸요.」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「그럼, 미리 다시 선전포고를 해 둘게요. 스즈카, 다음에 레이스에서 만나면 그땐 훨씬 더 큰 압박을 줄 거니까요.」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「아니면, 저희가 아예 %11_CALL%를 앞질러서, %11_CALL%가 말한 그 압박감을 직접 느끼게 해 줄지도 모르죠……」
    - color: %COLOR%
      content: 두 %UMA%는 가벼운 대화 속에서도 %CHARA%에게 다음 승부를 기약했다.
    - color: %COLOR%
      content: %CHARA%는 두 라이벌을 보며 가볍게 웃었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응, 저도 다음 레이스가 기대되네요. 그리고 선두의 경치는 절대 쉽게 내주지 않을 거예요!」
    - color: %COLOR%
      content: 세 명의 %UMA%는 서로의 눈에서 불꽃 같은 열정을 확인했다.

takz_kin_3:
  title: 나란히 선 자들
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「졌어……」
    - color: %COLOR%
      content: 거대한 전광판에는 1위 자리에 선명하게 %G_NAME%의 이름이 새겨져 있었다.
    - color: %COLOR%
      content: 레이스 시작과 동시에 %CHARA%는 계획대로 선두를 선점하며 치고 나갔다.
    - color: %COLOR%
      content: 하지만 종반에 접어들어 %G_NAME%이(가) 상상조차 할 수 없는 근성으로 %CHARA%에게 다가와 단번에 추월해 버렸다.
    - color: %COLOR%
      content: 대도주 작전은 %UMA%의 지구력 소모가 극심했기에, %CHARA%는 %G_NAME%이(가) 자신을 멀찌감치 앞서가는 것을 지켜보며 재가속조차 할 수 없었다.
    - color: %COLOR%
      content: 결국 %G_NAME%에게 아쉬운 패배를 당하고 말았다.
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「내 동기 녀석이 널 두고 경기장의 『괴물』이라고 하더니, 정말 딱 맞는 말이었네.」
    - color: %COLOR%
      content: 마찬가지로 %G_NAME%에게 뒤처졌던 %A_NAME%도 다가와 여운이 남는 듯한 표정을 지었다.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「두 선배님, 제가 한 수 배웠습니다!」
    - color: %COLOR%
      content: %G_NAME%도 다가왔는데, 별로 지친 기색이 없어 보였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말 엄청난 스퍼트였어. 내 도주 우위를 천천히 무너뜨렸지. 시야 끝에 네 모습이 보였을 때는 정말 깜짝 놀랐는걸.」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「하하, 나도 봤어. 스즈카가 추월당할 때 정말 믿을 수 없다는 표정을 짓고 있더라니까.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「엣, 정말? 설마……」
    - color: %COLOR%
      content: %G_NAME%은(는) 두 선배가 후배에게 추월당했음에도 불쾌해하지 않는 것을 보고 한결 마음이 가벼워졌다.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「하지만 결국 선배님들의 실력도 정말 대단했어요. 괜찮으시다면, 이런 멋진 레이스를 함께해 주신 두 분께 감사를 표하고 싶네요.」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「그렇다면 다음에는 내가 너희에게 멋진 레이스를 보여줘서 고맙다는 말을 듣게 될지도 모르겠네?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말이지, 시작도 안 했는데 벌써 승리할 생각부터 하는 거야?」
    - color: %COLOR%
      content: 세 명의 %UMA%는 함께 웃음을 터뜨렸다.
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「그럼 다음 레이스도 두 선배님, 잘 부탁드릴게요!」
    - color: %COLOR%
      content: %CHARA%와 %A_NAME%이(가) 함께 고개를 끄덕였다. 세 명의 %UMA%는 모두 상대의 눈에서 승리를 향한 갈망을 읽었다.

# [번역 완료] takz_kin_lose
takz_kin_lose:
  title: 뒤처짐
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하, 힘들어……」
    - color: %COLOR%
      content: 중거리 레이스 한 번으로 %CHARA%의 체력이 완전히 바닥날 리는 없었지만, %CHARA%는 기운이 전혀 나지 않는 기분이었다.
    - color: %COLOR%
      content: %SEX%는 계속해서 지구력을 잘 안배하며 달리고 있었다, 하지만……
    - color: %COLOR%
      content: %A_NAME%과(와) %G_NAME%, 그리고 뒤따르던 다른 %UMA%들에게 차례차례 추월당할 때까지.
    - color: %COLOR%
      content: %CHARA%는 자신이 몇 위로 들어왔는지조차 신경 쓰고 싶지 않았다.
    - color: %COLOR%
      content: 남은 힘으로 고개를 %A_NAME%과(와) %G_NAME% 쪽으로 돌리자, %THEY%은(는) 즐거운 듯 이야기를 나누고 있었다.
    - color: %COLOR%
      content: 그래, 승리자의 기분이란 그런 거겠지……
    - color: %COLOR%
      content: %CHARA%는 자조 섞인 미소를 지었다.

# [번역 완료] summer_end
summer_end:
  - 세월은 화살과 같아, 어느새 시니어 시즌의 여름 합숙도 끝나가고 있었다.
  - 클래식 시즌의 전례가 있었기에, %YOU%은(는) 합숙 과정 내내 스즈카의 정신 상태를 면밀히 살폈다.
  - 다행히 별다른 일은 일어나지 않았고, 스즈카는 %YOU%이(가) 맡긴 모든 훈련 계획을 훌륭하게 완수해 냈다.
  - 이제 합숙 마지막 날, %YOU%와 스즈카는 짐을 챙기고 있었다.
  - %YOU%은(는) 스즈카가 『텐노상 반드시 우승』이라고 적힌 표어를 가방에 넣는 것을 보고 문득 생각이 났다.
  - acc: 1
    content: 「스즈카, 갑자기 궁금한 게 생겼는데……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「네?」
  - 「텐노상은 도쿄 경기장에서 열리잖아? 그런데 넌 아직 도쿄 경기장에서 달려본 적이 없지 않아?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그래서 %CALLNAME%께서 점찍어둔 레이스가 있으신 거죠? 아마 똑같이 도쿄 경기장에서 열리는 마이니치 왕관이겠네요.」
  - 스즈카의 손놀림은 멈추지 않았다. 마치 %YOU%이(가) 그렇게 물을 줄 미리 알고 있었다는 듯했다.
  - 머리를 긁적였다. 이렇게 영리한 담당 앞에서는 더 할 말도 없었다.
  - acc: 1
    content: 「역시 영리해, 스즈카. 내 눈에 든 %UMA%다워. 한 번에 맞힐 줄이야!」
  - %YOU%은(는) 그저 스즈카에게 엄지를 치켜세워 줄 뿐이었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%께서 그렇게 말씀하시니, 정말 쑥스럽네요……」
  - 스즈카의 짐 정리가 잠시 멈추었다. %SEX%는 훈련용 비치볼을 들어 %YOU%에게 던지는 시늉을 했다.
  - %YOU%은(는) 짐짓 겁먹은 척하며 옆으로 피했다.
  - 이윽고 정리가 모두 끝나고, 다 함께 학원으로 돌아가는 차에 올라탔다.
  - acc: 1
    content: 「그럼 스즈카, 다음 목표는 마이니치 왕관이야. 우선 도쿄 경기장의 코스에 익숙해지는 게 중요해. 승패는 그다음 문제고……」
  - 말이 끝나기도 전에 스즈카가 고개를 저었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아니에요, %CALLNAME%. 지시에 따라 코스를 익히겠지만, 승리도 반드시 쟁취할 거예요.」
  - %YOU%은(는) 잠시 멍해졌다가, 이내 허허 웃음을 터뜨렸다.
  - acc: 1
    content: 「그래, 스즈카라면 분명히 잘해낼 거라고 믿어.」

# シニア級10月第2週終了
# [번역 완료] curse
curse:
  title: 저주
  lines:
    - 가을바람이 불어오자 %YOU%은(는) 코트를 더 단단히 여미며 학원으로 향하는 발걸음을 재촉했다.
    - 지금 %YOU%은(는) 학원에서 조금 떨어진 대로를 걷고 있다. 오른손에는 「로열 비법 허니 당근 쿠키」 봉투가 들려 있었다.
    - 대망의 가을 텐노상이 다가오면서, 담당인 %CHARA%의 훈련도 더욱 고되어지고 있었다.
    - %YOU%이(가) 몇 시에 트레이닝장에 가든, 항상 자율 트레이닝 중인 스즈카를 발견할 수 있었다.
    - 그래서 스즈카의 의욕을 끌어올리려고 오늘도 일찍 일어나 %UMA%들에게 인기 있는 「로열 특제 꿀 당근 파이」를 사러 왔다.
    - 일찍 나왔다고 생각했지만 긴 줄에 서느라, 돌아가려 할 즈음에는 하늘이 완전히 밝아져 있었다.
    - 훈련 계획은 이미 스즈카에게 전해 두었다고 생각하며, 옆의 높은 건물에서 아침 뉴스를 틀어주는 거대한 스크린을 멍하니 바라봤다.
    - 마침 그 타이밍에 아침 뉴스가 끝나고 스크린에는 몇 명의 %UMA% 사진이 나타났다.
    - %YOU%은(는) 절로 발걸음을 멈췄다. 스크린 한가운데에 바로 스즈카의 사진이 있었기 때문이다.
    - content:
        - fontWeight: bold
          content: 진행자
        - 「당당히 인기 1위를 차지한 건 역시 이 %UMA%군요! 독보적인 대도주로 라이벌을 허용하지 않는, 시작부터 끝까지 선두를 지키는 %CHARA% 입니다!」
    - 가슴에 작은 자부심이 솟았다. 자신의 담당이 대형 화면에서 이렇게 칭찬받는 날이 매일 있는 건 아니다.
    - 게다가 다가오는 천황상(가을)의 인기 1위——예상대로이긴 했지만.
    - %YOU%의 마음속에 자부심이 솟구쳤다. 자신의 담당이 대형 스크린에서 극찬을 받는 일은 매일 있는 게 아니니까.
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「%CHARA%인가. 전에 %SEX%의 레이스를 봤는데 정말 패기가 있더군.」
    - content:
        - fontWeight: bold
          content: 행인 B
        - 「맞아. 게이트에서 나갈 때부터 강하게 치고 나가서, 다른 분들은 레이스 내내 %SEX%의 3마신 이내로 접근조차 못 하더라니까!」
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「%SEX%이(가) 인기 1위인 건 당연하지.」
    - %YOU%은(는) 행인들의 대화를 들으며 더욱 우쭐해졌다. 스즈카에 대한 칭찬을 더 듣고 싶은 마음에 몰래 발걸음을 늦췄다.
    - content:
        - fontWeight: bold
          content: 행인 B
        - 「그래, 이번에도 완벽한 대도주로 경쟁자들을 멀리 따돌리고 텐노상 방패를 거머쥐었으면 좋겠네.」
    - 행인 B가 감격스러운 듯 말하자, 행인 A의 표정이 조금 묘해졌다.
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「다른 건 몰라도, 우승에 관해서라면 난 %CHARA%를 그렇게 낙관적으로 보진 않아……」
    - 그 말을 듣고 %YOU%와 행인 B는 동시에 깜짝 놀랐다.
    - content:
        - fontWeight: bold
          content: 행인 B
        - 「왜 그렇게 생각해? %CHARA%의 실력은 우리 모두가 확인했잖아?」
    - 행인 A는 어두운 표정으로 고개를 저었다.
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「실력은 실력이고, 승리는 실력만으로 되는 게 아니야. 운도 따라줘야지.」
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「너는 모를지도 모르겠지만, 가을 텐노상에는 예전부터 『인기 1위는 우승할 수 없다』라는 저주가 있거든.」
    - 여기까지 듣자 %YOU%은(는) 더 이상 참을 수 없었다.
    - acc: 1
      content: 「저기, 두 분. 실례지만 그 얘기는 어디서 나온 건가요?」
    - 두 행인은 깜짝 놀라며 당신을 돌아보았다.
    - content:
        - fontWeight: bold
          content: 행인 B
        - 「이보쇼, 손에 든 걸 보니 트레센 트레이너이신 모양인데?」
    - %YOU%은(는) 가볍게 고개를 끄덕였다. 「로열 비법 허니 당근 쿠키」는 대개 %UMA%를 위해 사는 것이니까.
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「뭐라고 할까요, 이 저주는 도쿄 경기장 관객들 사이에서 입에서 입으로 전해지는 건데, 꽤 잘 들어맞는 저주 중 하나죠.」
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「제가 몇 년 동안 가을 텐노상을 지켜봤는데, 이 저주가 맞아떨어지는 정도는 상상을 초월합니다.」
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「인기 1위 선수는 여러 명 봐 왔지. 패독에서는 화려해서 이미 이긴 거나 다름없어 보였어.」
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「하지만 레이스가 시작되면 %THEY%은(는) 저주라도 받은 것처럼 늦은 출발, 사행, 초조함……」
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「1위는커녕 순위권에 드는 %UMA%조차 몇 없었습니다.」
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「게다가 듣기로는…… 아주 오래전에 어떤 도주 %UMA%는 가을 텐노상에서 실수로 넘어져 골절되는 바람에, 그대로 은퇴하고 평생을 우울하게 살았다고 하더군요……」
    - 눈앞이 빙글 돌며 손에 든 「로열 특제 꿀 당근 파이」를 떨어뜨릴 뻔했다.
    - acc: 1
      content: 「저주라는 건 그냥 미신일 뿐이지 않을까요……?」
    - %YOU%은(는) 억지로 울상 같은 미소를 지어 보였다.
    - content:
        - fontWeight: bold
          content: 행인 A
        - 「트레이너님, 저도 처음엔 믿지 않았습니다. 하지만 제 눈은 속일 수 없더군요. 최근 몇 년간 가을 텐노상의 인기 1위 명단을 한번 찾아보시죠……」
    - %YOU%은(는) 넋이 나간 듯 그 자리에 서서 멀어져 가는 두 행인을 바라보았다.
    - 예전에 모아둔 천황상(가을) 자료가 떠올랐다. 「인기 1위」와 「1착」 명단이 거의 겹치지 않았다는 것……
    - 한참 뒤에야 정신을 차렸을 때, 스크린의 가을 텐노상 특집 방송은 이미 끝난 뒤였다.
    - acc: 1
      content: 「안 돼, 난 스즈카의 트레이너야…… 나조차 %SEX%를 믿지 못하면, 아무도 믿어주지 않아!」
    - 손에 든 「로열 특제 꿀 당근 파이」를 바라보고, 스즈카와 함께한 날들을 떠올린 끝에 결국 서둘러 학원으로 돌아가기로 했다.
    - divider: true
    - 학원으로 돌아와 훈련장에서 계속 달리는 스즈카를 보니 마음이 복잡했다.
    - acc: 1
      content: 「스즈카, 스즈카! 잠시만 이쪽으로 와볼래!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아, 하아…… %CALLNAME% 오셨군요.」
    - 스즈카는 %YOU%의 부름을 듣고 다가왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그보다, %CALLNAME% 괜찮으세요? 안색이 너무 안 좋으신데……」
    - 스즈카는 %YOU%의 상태를 보고 걱정스러운 듯 물었다.
    - 한순간 멍해졌다가 가슴에 따뜻함이 퍼졌다.
    - acc: 1
      content: 「걱정해 줘서 고마워 스즈카, 난 괜찮아. 사실 너에게 보여주고 싶은 게 있어—」
    - %YOU%은(는) 스즈카에게 윙크를 하며 등 뒤로 숨겼던 오른손을 내밀었다.
    - acc: 1
      content: 「짜잔, 로열 비법 허니 당근 쿠키야! 줄을 아주 오랫동안 서서 겨우 샀어.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「와아, %CALLNAME%께서 이걸 사러 가셨던 거군요. 정말…… 감사합니다……」
    - %YOU%은(는) 환호하는 스즈카에게 미소를 지으며 종이봉투를 건넸다.
    - acc: 1
      content: 「요 며칠 고생한 훈련에 대한 보상이야. 사양 말고 맛있게 먹어.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네! %CALLNAME% 안심하세요. 가을 텐노상의 승리로 보답해 드릴게요.」
    - 종이봉투를 참지 못하고 여는 스즈카를 보며 행인이 말한 저주 이야기가 떠올랐다.
    - 한참 고민한 끝에 그래도 스즈카에게 말하기로 했다.
    - acc: 1
      content: 「저기 스즈카, 실은 돌아오는 길에……」
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「으음, 저주라니, 꽤 흥미롭네요.」
    - 행인에게 들은 이야기를 전해주자, %YOU%은(는) 뜻밖에도 스즈카가 입을 가리고 작게 웃기 시작하는 것을 보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%의 안색이 창백해진 게 이것 때문이었군요. 저도 그런 저주는 처음 들어보지만, 전혀 무섭지 않아요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오히려 제 자신의 힘으로 그 저주를 깨뜨리고, 가을 텐노상의 방패를 가져와 당신께 선물할게요.」
    - 스즈카는 %YOU%의 안색이 여전히 좋지 않은 것을 보고 손에 든 종이봉투를 열었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 이 허니 당근 쿠키 하나 드셔보세요. 기분이 좀 나아지실 거예요~」
    - 말이 끝나자마자 스즈카는 달콤한 향기가 나는 허니 당근 쿠키 하나를 %YOU%의 입가에 가져다 댔다.
    - %YOU%은(는) 무의식적으로 그것을 한 입 베어 물고 씹기 시작했다.
    - 과연 소문대로 맛있었다. 아침부터 줄을 선 보람이 있었다.
    - 스즈카는 %YOU%의 기분이 조금 풀린 것을 보고 미소를 더욱 짙게 띠었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「지켜봐 주세요, %CALLNAME%. 압도적인 속도로 그 저주를 박살 내 버릴게요. 반드시요!」

# シニア級10月第3週開始
# [번역 완료] bad_omen
bad_omen:
  title: 불길한 징조
  lines:
    - content:
        - fontWeight: bold
          content: 「해설」
        - 「모든 우마무스메 일제히 출발, 스타트 좋군요! 인기 1위인 %CHARA%가 선두로 치고 나갑니다!」
    - 여긴…… 어디지?
    - %YOU%은(는) 익숙하면서도 낯선 경기장의 관중석에 서 있었다. 어렴풋이 「도쿄 경기장」이라는 글자가 보였다.
    - 도쿄 경기장이라니…… 그렇다면 이곳은 가을 텐노상의 현장인가……
    - 주위를 보니 곁의 관객들도 필사적으로 외치고 있었다. 하지만 그 주변에는 층층이 안개가 끼어 얼굴이 또렷하게 보이지 않았다.
    - 서둘러 먼 코스로 시선을 돌리자 저 멀리 앞서가는 그림자가 보였다.
    - 鈴鹿……
    - 스즈카를 발견하자 조금 안심이 되어 레이스에 집중하려 했다.
    - 스즈카……
    - content:
        - fontWeight: bold
          content: 「해설」
        - 「%CHARA%를 필두로 한 도주 그룹이 중반에 진입했습니다! %SEX%는 여전히 선두 자리를 굳건히 지키고 있습니다! 정말 강력한 도주입니다!」
    - 멀리서 「스즈카」가 중반에 다시 가속하는 모습을 봤다. 몇 번이고 예행연습한 그대로였다.
    - 이제 다음은……
    - %YOU%의 심장이 조여왔다. 이제 곧 코너다. 속도를 거의 무조건 줄여야 하는 이 순간……
    - content:
        - fontWeight: bold
          content: 「해설」
        - 「%CHARA%, 거의 감속하지 않은 채 코너를 통과합니다! 대체 저런 컨트롤이 어떻게 가능한 걸까요! 코스뿐만 아니라 물리 법칙까지 지배하는 것 같습니다!」
    - %YOU%의 눈에 비친 「스즈카」는 상식을 벗어난 방식으로 코너를 돌파하며 오히려 후속 그룹과의 차이를 더 벌렸다.
    - 물 흐르듯 매끄러운 달리기를 보며 목이 말랐다.
    - content:
        - fontWeight: bold
          content: 「해설」
        - 「앞쪽은 도쿄 경마장으로 유명한 큰 느티나무입니다. 큰 느티나무를 지나면 각 %UMA%의 재가속을 볼 수 있습니다!」
    - 「스즈카」의 그림자가 가장 먼저 큰 느티나무 뒤편으로 들어갔다.
    - 아아, 이번에도 손쉬운 승리가 되겠지.
    - %YOU%은(는) 「스즈카」의 형체가 가장 먼저 대느티나무 뒤편으로 달려 들어가는 것을 보았다.
    - 아, 이번에도 분명 낙승이겠지.
    - 얼굴이 새파래지고 식은땀을 흘리며 왼손으로 왼쪽 가슴의 옷을 움켜쥔 채 제대로 된 말조차 나오지 않았다.
    - 주변 관객에게 도움을 청하려 했지만……
    - content:
        - fontWeight: bold
          content: 「중계」
        - 「무슨 일이죠? 대느티나무를 가장 먼저 빠져나온 건 %CHARA%가 아닙니다!」
    - content:
        - fontWeight: bold
          content: 「중계」
        - 「%CHARA%가 여전히 보이지 않습니다!」
    - content:
        - fontWeight: bold
          content: 「중계」
        - 「%CHARA%에게 긴급 상황이 발생한 것 같습니다!」
    - content:
        - fontWeight: bold
          content: 「중계」
        - 「%CHARA%, 제3코너 앞에서 레이스를 중단합니다!」
    - 생각할 틈도 없었고 어떤 말도 귀에 들어오지 않았다. 심장의 격통이 사고를 완전히 빼앗고 있었다.
    - 경기장을 가득 채운 비명 속에서 통증은 절정에 이르렀고, 눈앞으로 끝없는 검은 물결이 밀려왔다.
    - 전 관중의 비명 섞인 함성 속에서 %YOU%의 고통은 절정에 달했고, 이내 끝없는 검은 해일이 밀려왔다.
    - divider: true
    - 눈앞에 갑자기 빛이 번쩍이며 의식이 돌아왔다. 왼쪽 가슴의 격통도 처음부터 없었던 것처럼 사라져 있었다.
    - 주위를 둘러보니 자신은 지금 도쿄 경마장 코스 위에 서 있었다.
    - 이상하다. 왜 코스 위에……
    - 흰 상의를 입은 긴장한 표정의 사람들이 큰 느티나무 쪽으로 달려가고 있었다.
    - 눈동자에 서서히 초점이 맞으며 무언가를 깨달은 듯했다.
    - 이상하다, 왜 트랙 위에 있는 거지……
    - 담당인 「%CHARA%」이(가) 코스의 잔디 위에 조용히 누워 있었다.
    - %SEX%의 왼쪽 다리는 기괴하게 꺾여 있었고, 날카롭고 하얀 뼛조각이 피부와 근육을 뚫고 나와 있었다. 평소 %YOU%의 시선을 사로잡던 그 검은 스타킹을 찢고서.
    - 얼굴은 종이처럼 창백했고, 그와 대조되듯 다리 아래에는 선명한 붉은색이 계속 퍼지고 있었다.
    - 가슴은 더 이상 오르내리지 않았다. 막 달리기를 끝낸 %UMA%라면 거칠게 숨을 쉬고 있어야 하는데.
    - 얼굴에 고통스러운 표정이라도 있었다면 오히려 나았을 것이다. 적어도 이 상황을 느끼고 있다는 증거가 되니까.
    - %SEX%의 얼굴은 종잇장처럼 창백했고, 그와 대조적으로 다리 아래에는 선홍빛 혈흔이 점점 넓게 퍼져나가고 있었다.
    - 그 모든 것을 본 %YOU%은(는) 온몸의 힘이 빠져나가며 그 자리에 주저앉았다.
    - 곧 심장이 다시 아프기 시작했고 전보다 더 심했다.
    - 눈앞이 빙글 돌며 「스즈카」의 피의 붉은색과 구급대원의 옷의 흰색이 시야를 가득 채웠다.
    - 다시 의식을 잃기 직전 구급대원의 대화가 들린 것 같았다. 남은 것은 단 하나의 단어뿐——
    - 분쇄 골절.
    - %YOU%은(는) 다시 허공으로 추락했다.
    - divider: true
    - acc: 1
      content: 「스즈카! 스즈카! 스……」
    - %YOU%은(는) 거칠게 숨을 몰아쉬며 침대에서 벌떡 일어났다. 온몸이 물에 빠진 것처럼 땀으로 흠뻑 젖어 있었다.
    - acc: 1
      content: 「꿈이었나……」
    - 왼쪽 가슴을 만졌다. 몸을 찢는 듯한 격통은 찾아왔을 때와 마찬가지로 완전히 사라져 있었다.
    - 하지만 꿈은 너무나도 생생했다. 특히 「스즈카」가 핏물 속에 쓰러져 생사를 알 수 없게 되었을 때, 마치 껍데기만 남은 듯했던 그 느낌은……
    - %YOU%은(는) 고개를 세게 저으며 그 끔찍한 조각들을 잊으려 애썼다.
    - acc: 1
      content: 「지금은 새벽 2시야. 계속 자자. 내일도 스즈카의 훈련을 봐줘야 하니까……」
    - 식은땀에 젖은 시트와 베갯잇을 갈고 다시 잠들려 했다.
    - 하지만 한참을 뒤척였고 눈을 감을 때마다 그 처참한 꿈이 떠올랐다……
    - 그러나 한참을 뒤척여도 눈을 감기만 하면 그 처참한 꿈의 광경이 떠올랐다.

# 【不吉な予兆】のあと
# [번역 완료] choice
choice:
  title: 선택
  lines:
    - 그 공포스러운 악몽 때문에, %YOU%은(는) 잠을 이루지 못했다.
    - 2년 전 처음 스즈카를 만났던 새벽녘이 떠올랐다. 그때의 자신은 지금처럼 넋이 나가 있지는 않았다.
    - 벽에 걸린 스즈카가 쓴 「반드시 천황상에서 이긴다」라는 표어를 보자 다시 가슴이 희미하게 아팠다.
    - 꿈의 한 장면이 다시 머릿속에 떠오르자 이번에는 상식을 벗어난 생각이 서서히 형태를 갖췄다.
    - 스즈카와 2년 반을 보내며 %SEX%의 목소리도 미소도 완전히 익숙해졌다. 만약 한 번의 레이스로 %SEX%을(를) 잃게 된다면……
    - 그 레이스는 달리지 않아도 된다. 트레이너로서의 명성을 걸더라도 악몽을 현실로 만들어서는 안 된다.
    - 이윽고 격해진 마음을 가라앉히고 훈련장에서 스즈카와 만나기 위해 출발했다.
    - divider: true
    - 그런 레이스라면 차라리 뛰지 않는 게 낫다. 설령 트레이너로서의 명성을 모두 건다 해도, 그 악몽이 현실이 되게 두지는 않으리라.
    - 물 흐르듯 달리는 그림자를 보며 한순간 망설였다.
    - %YOU%이(가) 훈련장에 도착했을 때, 평소보다 훨씬 이른 시간임에도 불구하고 예상대로 그곳에는 이미 훈련 중인 스즈카가 있었다.
    - 만약 정말로 자신의 근거 없는 꿈 하나 때문에 %SEX%의 노력을 전부 부정해 버린다면……
    - 그렇다면 %YOU%과(와) %SEX%의 원수가 무슨 차이가 있단 말인가?
    - 격렬한 갈등에 빠졌다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, %CALLNAME%, 오셨나요!」
    - 멍하니 있던 %YOU%을(를) 먼저 발견한 것은 %CHARA%였다. 그녀가 이쪽으로 달려왔다.
    - 그 인사가 막혀 있던 생각에서 %YOU%을(를) 끌어냈다.
    - %SEX%의 인사는 %YOU%을(를) 정체된 생각의 늪에서 건져 올려 주었다.
    - 머리 위의 초록색 귀 커버부터 오렌지색 긴 머리, 에메랄드빛 눈동자, 가늘지만 탄탄한 다리까지……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 뭘 그렇게 보고 계세요! 그렇게 쳐다보시면 부끄러운데……」
    - %YOU%의 시선에 스즈카는 다소 어색해하는 듯했다.
    - 하지만 곧 스즈카는 위화감을 눈치챘다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 저…… 지금 당장 보건실에 가보셔야 할 것 같아요……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - 창백한 얼굴에 스즈카가 겁먹었는지 %SEX%은(는) 반사적으로 두 걸음 물러났다. 하지만 곧 몹시 긴장한 모습으로 코스의 울타리를 넘었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저…… 제가 보건실까지 같이 가 드릴게요. 지금 상태가 정말 말도 못 하게 안 좋으세요!」
    - 스즈카는 다짜고짜 %YOU%의 손을 잡고 경기장 밖으로 이끌려 했다.
    - 밤새 악몽에 시달려 차가워진 손이 스즈카의 따뜻한 손에 잡히자 살아남은 듯한 감각이 들었다.
    - 그제야 정신을 차리고 자신의 생각을 굳혔다.
    - 훈련장을 나가지 않고 손목을 돌려 오히려 스즈카의 손을 맞잡았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……？」
    - 갑작스러운 행동에 스즈카가 당황했고, %YOU%은(는) 그 기세로 %SEX%의 다른 손도 잡았다.
    - acc: 1
      content: 「스즈카……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 저 여기 있어요……」
    - 당황스럽고 조금은 무섭기도 하겠지만, 스즈카는 %YOU%의 손을 꽉 맞잡아 주었다.
    - acc: 1
      content: 「스즈카, 제발…… 텐노상을 포기해 줘……」
    - 꿈결처럼 그 한마디를 겨우 짜내자 온몸의 힘이 빠지는 듯했다.
    - %YOU%은(는) 마치 잠꼬대하듯 이 한마디를 내뱉었고, 온몸의 기운이 다 빠져나가는 듯한 기분을 느꼈다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 저…… 제발 그런 농담은 하지 말아 주세요. 자…… 제가 어서 보건실로 모셔다드릴게요……」
    - 스즈카는 %YOU%의 정신 상태가 좋지 않아 장소를 가리지 못하고 농담을 던진 것이라 생각하는 듯했다.
    - 이어 %SEX%는 강경하게 %YOU%을(를) 보건실로 데려가려 했다.
    - 평소 냉정하던 스즈카가 자신의 상태 때문에 당황해하는 모습을 보며 %YOU%은(는) 허탈하게 웃었다.
    - acc: 1
      content: 「아니, 스즈카. 진심이야.」
    - 결코 농담이 아닌 말투로 그 결정을 들은 스즈카는 다시 그 자리에 멈춰 섰다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 대체 무슨 일이 있었는지 말씀해 주실 수 있나요? 평소에 이런 심한 농담을 하실 분이 아니라는 건 알고 있지만……」
    - %YOU%은(는) 깊은 숨을 들이켜 요동치는 마음을 가라앉히고, 어젯밤의 꿈을 스즈카에게 빠짐없이 털어놓았다.
    - acc: 1
      content: 「스즈카, 어젯밤에……」
    - divider: true
    - 너무나 생생했던 꿈을 다시 이야기하며 맞은편의 스즈카가 점점 놀라는 모습을 지켜봤다.
    - %YOU%이(가) 너무나도 생생했던 악몽을 다시 묘사하자, 맞은편 스즈카의 표정이 점점 경악으로 물들어갔다.
    - 「그런 거야, 스즈카. 말도 안 된다는 건 알아. 하지만…… 이 꿈은 너무 생생해서 무시할 수 없었어.」
    - %YOU%에게 악몽을 복기하는 것은 그 꿈을 다시 겪는 것과 다름없는 고통이었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… 그렇게 말씀하셔도, 역시 저는 도전해 보고 싶어요……」
    - 고개를 들어 스즈카의 눈을 똑바로 바라봤다. %SEX%의 눈에는 한 줄기 빛과 끝없는 결의가 담겨 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「우리가 텐노상을 위해 얼마나 준비해 왔는지, 어떤 고생을 했는지 트레이너님도 잘 아시잖아요…… 여기서 포기한다면 분명 트레이너님도 분하실 거예요……」
    - 스즈카의 몸이 떨리기 시작했고, 그 떨림은 맞잡은 손을 통해 %YOU%에게 전해졌다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「제발 저를 믿어주세요, 딱 한 번만이라도…… 저를 믿어주시면, 방패를 가져오든 못 가져오든—그건 이제 중요하지 않아요. 어쨌든 반드시 무사히 당신 곁으로 돌아올게요!」
    - 마지막에는 가느다란 흐느낌이 들린 것 같았다.
    - 머릿속은 이미 실타래가 엉킨 것 같았다. 직감이 가져온 불길함과 담당 %UMA%의 결의. 두 힘이 의지를 사이에 두고 맞부딪혀 눈앞이 어지러웠다.
    - 울 것 같은 스즈카를 보고, 그 생생한 악몽을 떠올리고, 다시 보고, 또 생각했다……
    - 이윽고 마음을 독하게 먹고 최종 결정을 내렸다.
    - acc: 1
      key: choice
      content: 「그럼 가자, 스즈카.」
      comment:
        - color: red
          content: (경고: 이 선택은 되돌릴 수 없습니다. 스즈카와의 인연이 충분히 강할 때 선택하는 것을 권장합니다)
      lines:
        - %YOU%은(는) 깊은 숨을 들이켰다.
        - acc: 1
          content: 「대신 부탁이야. 결승선을 통과한 후에는, 반드시 제일 먼저 내 곁으로 돌아와 줘……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%…… 저를 믿어주세요. 반드시, 반드시 무사히 돌아올게요!」
        - 결국 스즈카의 집념에 지고 말았다.
        - 스즈카의 두 손을 놓고 초점 없는 눈으로 훈련장 울타리에 기대었다.
        - acc: 1
          content: 「가서…… 트레이닝해, 스즈카. 잠시 혼자 있게 해 줘……」
        - 온몸의 힘을 다해 스즈카에게 손을 흔들었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 스즈카는 %YOU%의 곁에 한참을 서 있다가, 무거운 마음을 안고 다시 코스로 돌아갔다.
        - acc: 1
          content: 「스즈카, 제발 부디……」
        - 멀어지는 뒷모습을 멍하니 바라보며 중얼거렸다.
    - acc: 2
      content: 「안 돼, 스즈카.」（이성적으로 설득） # 호감도-100
      lines:
        - 오랫동안 고민한 끝에 그래도 스즈카의 부탁을 거절하기로 했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 스즈카는 믿기지 않는다는 표정을 지었다.
        - 잡은 손에 힘을 주고 강한 시선으로 %SEX%을(를) 바라봤다.
        - 스즈카는 형식적으로 손을 뿌리치려 했지만 실패했다.
        - acc: 1
          content: 「스즈카, 이전부터 인기 1위는 이길 수 없다는 징크스도 있었고, 지금은 악몽의 예고까지 있어……」
        - 그 이상 말하지 않았지만 뜻은 분명했다.
        - 천황상(가을)에 나가 실제로 무슨 일이 생길지는 별개로, 하늘은 여러 형태로 암시를 주고 있다.
        - 믿든 안 믿든, 두 개의 우연이 동시에 겹칠 때 그것은 더 이상 우연이 아니게 된다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「알…… 알겠어요. 당신이 정 그렇게 고집하신다면……」
        - 스즈카는 %YOU%의 손에서 거칠게 손을 빼내고는 등을 돌려 달려가 버렸다.
        - acc: 1
          content: 「스즈카……」
        - 멀어지는 뒷모습을 멍하니 바라보자 %SEX%의 절망한 흐느낌이 들리는 듯했다.
        - 자신의 강경함이 %SEX%의 마음을 깊이 상처 입혔다는 건 알고 있었다.
        - 하지만 적어도 이렇게 하면, %SEX%에게 위험한 일은 생기지 않으리라……
    - if: era.get('love:2') >= 90
      acc: 3
      content: %SEX%를 껴안는다.（감성적으로 호소） # 호감도-50
      lines:
        - %YOU%은(는) 아무 말 없이 한 걸음 다가가, 눈앞의 스즈카를 품에 안았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%？」
        - 스즈카는 깜짝 놀라 눈을 크게 떴다.
        - acc: 1
          content: 「스즈카, 넌 내 사랑이야. 난, 난……」
        - 스즈카와 함께한 아름다운 시간, 한밤중에 나눈 속마음, 서툰 입맞춤을 떠올렸다.
        - 눈앞의 %UMA%은(는) 담당일 뿐 아니라 연인이며 전부였다.
        - %SEX%을(를) 잃을 위험은 조금도 감수하고 싶지 않았다.
        - 목이 메어 더 이상 말이 나오지 않았다.
        - 그저 품 안의 스즈카를 더욱 세게 끌어안았고, 뜨거운 눈물이 뺨을 타고 흘러 시야가 흐릿해졌다.
        - 스즈카는 완전히 얼어붙었다. 자신에게 하늘 같고 삶의 전부인 트레이너가 이렇게 진심으로 우는 모습을 처음 보았기 때문이다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 스즈카는 지난날 평소의 수십, 수백 배에 달하는 노력을 쏟았던 목표가 이제 물거품이 되려 한다는 생각에 감정이 북받쳐 올랐다.
        - 그리고 %SEX%도 살며시 %YOU%을(를) 마주 안고 어깨에 기대 흐느끼기 시작했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저, 저는 늘 당신 곁에 있을게요…… 텐노상은…… 포기할 테니까, 제발, 제발 울지 마세요……」
        - acc: 1
          content: 「응, 그럼 스즈카, 스즈카도 이제 울지 마……」
        - %YOU%과(와) 스즈카는 서로를 위로했지만, 결국 누구도 눈물을 멈추지 못했다.
        - 그렇게 두 사람은 서로를 꽉 껴안은 채, 한참 동안 그 자리에 머물렀다.

# シニア級10月第4週開始
# 回避せず、好感が好意未満
# 以降編成から外れる。シニア級終了後に復帰、脚の古傷
# [번역 완료] wing_clipped
wing_clipped:
  title: 부러진 날개
  lines:
    - 여러 우여곡절 끝에 마침내 가을 텐노상의 날이 밝았다.
    - 평소와 달리, 이번에는 %YOU%이(가) 직접 스즈카를 데리고 경기장 내부까지 동행했다. 스태프가 정중하게 제지할 때까지.
    - content:
        - fontWeight: bold
          content: 스태프
        - 「여기서부터는 관중석에서 기다려 주세요. 길을 모르신다면 안내해 드릴까요……」
    - 스태프의 말은 귀에 들어오지 않았고 그저 스즈카의 뒷모습만 빤히 바라봤다.
    - %SEX%의 뒷모습은 %YOU%에게서 점점 멀어지고 작아지더니, 통로 저편으로 사라질 듯했다.
    - 뒤돌아 미소라도 지어 준다면, 무사하겠다고 약속해 준다면, 굳은 시선이라도 돌려준다면……
    - 하지만 그런 일은 없었고 %SEX%은(는) 돌아보지 않은 채 시야에서 사라졌다.
    - 길게 한숨을 내쉬고 스태프의 안내를 따라 관객석으로 향했다.
    - divider: true
    - 출주마들이 입장하기 전부터 장내 분위기는 이미 뜨거웠다.
    - %YOU%은(는) 스즈카가 뒤를 돌아 미소 지어 주기를, 다시 한번 무사할 것이라 약속해 주기를, 아니면 그저 단호한 눈빛이라도 보내주기를 바랐다……
    - 다시 주위를 둘러보다 소름 끼치는 사실을 발견했다. 자신의 자리가 꿈속의 자리와 완전히 같았다.
    - 주변 관객도 같았다. 꿈과 다른 점은 지금은 얼굴이 보인다는 것뿐……
    - 아직 입장이 시작되지 않았음에도 경기장의 열기는 이미 뜨겁게 달아올라 있었다.
    - 주변의 관중들도 마찬가지였다. 꿈과의 유일한 차이점이라면 지금은 그들의 얼굴을 똑똑히 볼 수 있다는 것뿐이었다……
    - %CHARA%와 전의를 불태우는 다른 17명의 %UMA%가 하나둘 게이트로 입장하기 시작했다.
    - 평소와 다를 것 없어 보이는 스즈카를 빤히 바라보며 마음속으로 %SEX%의 무사를 빌었다.
    - 이윽고 게이트가 열리고, 18명의 %UMA%가 일제히 튀어 나갔다.
    - %CHARA%이(가) 선두로 치고 나가며 순식간에 자리를 잡았다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「모든 우마무스메 일제히 출발, 스타트 좋군요! 인기 1위인 %CHARA%가 선두로 치고 나갑니다!」
    - %YOU%은(는) 몸을 크게 떨었다.
    - 실황 중계의 목소리와 내용마저 똑같았다……
    - 멀리서 달리는 스즈카의 폼, 가속하는 타이밍, 후속 그룹과의 거리까지……
    - 전부 똑같았다!
    - 더는 레이스를 볼 마음이 들지 않았다. 두 손은 멈추지 않고 떨렸고 머릿속은 그날 밤의 악몽으로 가득했다.
    - 현실에서 벌어지는 일은 적어도 지금까지는 전부 꿈의 재현이었다.
    - 이윽고 스즈카는 예상대로 아름답고 효율적으로 코너를 빠져나왔고, 곁의 관객들이 열광하며 환호하기 시작했다.
    - 더는 기다릴 수 없다.
    - 스스로 그렇게 말하며 떨리는 몸으로 일어섰다.
    - 그리고 현실에서 일어나는 일들은, 적어도 지금까지는 완벽하게 꿈의 재현이었다.
    - 더 지체할 수 없었다!
    - content:
        - fontWeight: bold
          content: 해설
        - 「앞쪽은 도쿄 경마장으로 유명한 큰 느티나무입니다. 큰 느티나무를 지나면 각 %UMA%의 재가속을 볼 수 있습니다!」
    - 이어 익숙한 조이는 듯한 통증이 찾아왔다——다행히 꿈처럼 의식을 잃을 정도는 아니었다.
    - 필사적으로 앞으로 나아가 열광하는 관객들 사이를 두 손으로 헤치고 코스 울타리 앞까지 나갔다.
    - 뒤이어 익숙한 통증이 느껴졌다—다행히 꿈에서처럼 실신할 정도의 고통은 아니었다!
    - content:
        - fontWeight: bold
          content: 해설
        - 「저기 관객분, 자리로 돌아가 주세요! 잠깐, 방금 무슨 일이 있었죠? 대느티나무를 가장 먼저 빠져나온 것이 %CHARA%가 아닙니다!」
    - 이때는 이미 아무것도 들리지 않았다.
    - acc: 1
      content: 「스즈카! 스즈카!」
    - %YOU%은(는) 코스로 뛰어들어 아직 달리고 있는 %UMA%들의 놀란 시선을 헤치듯 %THEY%을(를) 피해 큰 느티나무 뒤편으로 곧장 달렸다.
    - 제발, 제발, 안 돼——
    - 꿈속에서 잔디에 쓰러져 있던 스즈카를 떠올리며 발걸음을 재촉했다.
    - 마침내 큰 느티나무 뒤편에 도착했다.
    - 제발, 제발 안 돼—
    - %YOU%은(는) 꿈속에서 잔디 위에 쓰러져 있던 스즈카의 모습을 떠올리며 발걸음을 재촉했다.
    - 일어날 일은 결국 일어나고 말았다.
    - acc: 1
      content: 「스즈카!」
    - 달려가 %SEX%의 허리를 받치고 이미 부러진 왼쪽 다리를 들어 올렸다.
    - 이어 남아 있는 의식을 깨우려 했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… 죄, 죄송해요……」
    - 스즈카는 온몸의 힘을 다 쓴 듯 겨우 눈을 떴고, %YOU%을(를) 보자 더는 버티지 못하고 품 안으로 쓰러졌다.
    - acc: 1
      content: 「스즈카, 정신 차려 스즈카!」
    - 온갖 생각이 재가 되어 사라지고 남은 것은 스즈카를 제대로 받치는 일뿐이었다.
    - 얼마나 지났는지 모를 즈음 경기장 구급대가 도착했다. 기계적으로 스즈카를 넘겨주고 그들이 서둘러 구급차에 태우는 모습을 바라봤다.
    - 구급차는 금방 떠났고 레이스도 이미 끝난 지 오래였다. 관중들조차 오늘 일어난 참극을 떠들며 퇴장하기 시작했다.
    - %YOU%은(는) 아무것도 느끼지 못한 채, 구급차가 사라진 방향을 멍하니 바라보며 그 자리에 서 있었다.

# [번역 완료] tenn_sho
tenn_sho:
  title: 무사히 돌아오겠다는 약속
  lines:
    - 여러 우여곡절 끝에 마침내 가을 텐노상의 날이 밝았다.
    - 평소와 달리, 이번에는 %YOU%이(가) 직접 스즈카를 데리고 경기장 내부까지 동행했다. 스태프가 정중하게 제지할 때까지.
    - content:
        - fontWeight: bold
          content: 스태프
        - 「여기서부터는 관중석에서 기다려 주세요. 길을 모르신다면 안내해 드릴까요……」
    - 스태프의 말은 귀에 들어오지 않았고 그저 스즈카의 뒷모습만 빤히 바라봤다.
    - %SEX%의 뒷모습은 %YOU%에게서 점점 멀어지고 작아지더니, 통로 저편으로 사라질 듯했다.
    - 그때, %SEX%의 걸음이 멈추더니 뒤를 돌아보았다.
    - 그리고 %SEX%는 %YOU%을(를) 향해 달려오기 시작했다.
    - if: era.get('love:2') < 75
      lines:
        - 결국 %SEX%는 %YOU%의 앞에 멈춰 섰다.
        - acc: 1
          content: 「스즈카, 제발 꼭, 꼭 무사히 돌아와 줘.」
        - 다른 레이스처럼 1착을 바라지 않고 무거운 마음으로 그저 무사히 돌아오라고 당부했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네, 그럴게요, %CALLNAME%. 무사히 돌아올 뿐만 아니라 텐노상의 방패도 함께 가져올 테니 지켜봐 주세요!」
        - 스즈카는 %YOU%의 손을 잡고 살며시 자신의 뺨에 갖다 대었다.
        - %YOU%과(와) %SEX% 모두 이 순간을 소중히 여겼으나, 결국 스즈카는 아쉬운 듯 손을 뗐다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저…… 다녀올게요.」
        - 말이 끝나기 무섭게 스즈카는 망설임 없이 등을 돌려 떠났다.
        - %YOU%은(는) 한참 동안 %SEX%의 뒷모습을 응시했다.
    - if: era.get('love:2') >= 75
      lines:
        - 결국 %SEX%는 %YOU%의 품으로 와락 뛰어들었다.
        - %YOU%은(는) 만감이 교차하는 마음으로 %SEX%의 머리카락을 계속 쓰다듬었다.
        - acc: 1
          content: 「스즈카, 제발 꼭, 꼭 무사히 돌아와 줘.」
        - 다른 레이스처럼 1착을 바라지 않고 무거운 마음으로 그저 무사히 돌아오라고 당부했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네, 그럴게요, %CALLNAME%. 무사히 돌아올 뿐만 아니라 텐노상의 방패도 함께 가져올 테니 지켜봐 주세요!」
        - 스즈카는 %YOU%의 뺨에 살포시 입을 맞추었다.
        - %YOU%과(와) 스즈카는 서로를 꽉 껴안았고, 옆에 있던 스태프가 참다못해 헛기침을 할 때까지 그 자세를 유지했다.
        - 마침내 얼굴을 붉힌 채 떨어졌다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저…… 다녀올게요.」
        - 스즈카는 계속 뒤를 돌아보며 경기장으로 향했고, 그 모습은 점점 작아지다 마침내 완전히 사라졌다.
        - %YOU%은(는) 한참 동안 %SEX%의 뒷모습을 응시했다.

# [번역 완료] tenn_sho_win
tenn_sho_win:
  title: 비상
  lines:
    - 아직 입장이 시작되지 않았음에도 경기장의 열기는 이미 뜨겁게 달아올라 있었다.
    - 관중들은 흥분하여 떠들어댔고, 그 소음 때문에 %YOU%의 머리가 지끈거렸다.
    - 다시 주위를 둘러보다 소름 끼치는 사실을 발견했다. 자신의 자리가 꿈속의 자리와 완전히 같았다.
    - 주변 관객도 같았다. 꿈과 다른 점은 지금은 얼굴이 보인다는 것뿐……
    - 가슴속 불안이 두 배로 커졌다.
    - 주변의 관중들도 마찬가지였다. 꿈과의 유일한 차이점이라면 지금은 그들의 얼굴을 똑똑히 볼 수 있다는 것뿐이었다……
    - %CHARA%와 전의를 불태우는 다른 17명의 %UMA%가 하나둘 게이트로 입장하기 시작했다.
    - 평소와 다를 것 없어 보이는 스즈카를 빤히 바라보며 마음속으로 %SEX%의 무사를 빌었다.
    - 이윽고 게이트가 열리고, 18명의 %UMA%가 일제히 튀어 나갔다.
    - %CHARA%이(가) 선두로 치고 나가며 순식간에 자리를 잡았다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「모든 우마무스메 일제히 출발, 스타트 좋군요! 인기 1위인 %CHARA%가 선두로 치고 나갑니다!」
    - %YOU%은(는) 몸을 크게 떨었다.
    - 실황 중계의 목소리와 내용마저 똑같았다……
    - 멀리서 달리는 스즈카의 폼, 가속하는 타이밍, 후속 그룹과의 거리까지……
    - 전부 똑같았다!
    - 더는 레이스를 볼 마음이 들지 않았다. 두 손은 멈추지 않고 떨렸고 머릿속은 그날 밤의 악몽으로 가득했다.
    - 현실에서 벌어지는 일은 적어도 지금까지는 전부 꿈의 재현이었다.
    - 이윽고 스즈카는 예상대로 아름답고 효율적으로 코너를 빠져나왔고, 곁의 관객들이 열광하며 환호하기 시작했다.
    - 그리고 현실에서 일어나는 일들은, 적어도 지금까지는 완벽하게 꿈의 재현이었다.
    - 이번에는 스즈카를 믿기로 했다.
    - 곧 선두의 스즈카가 후속 그룹을 이끌고 대느티나무 앞에 도달했고, %YOU%의 가슴에 통증이 느껴지기 시작했다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「앞쪽은 도쿄 경마장으로 유명한 큰 느티나무입니다. 큰 느티나무를 지나면 각 %UMA%의 재가속을 볼 수 있습니다!」
    - 갑작스러운 충동에 일어나 검은 나무숲을 바라봤다——
    - acc: 1
      content: 「스즈카, 나랑 약속했잖아! %CHARA%!」
    - 수만 명의 광적인 관중들 사이에서, %YOU%은(는) 온 힘을 다해 필사적으로 외쳤다.
    - 마치 생명을 불태우는 듯한 그 외침은 기적적으로 주변의 함성을 뚫고 울려 퍼졌고, 주변 관중들은 이상하다는 듯 당신을 쳐다보았다.
    - 힘없이 주저앉아 초점 없는 눈으로 큰 느티나무 출구 쪽을 바라봤다.
    - %YOU%은(는) 힘없이 주저앉아, 대느티나무 출구만을 초점 없는 눈으로 바라보았다.
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「앞에 대느티나무가 보이네……」
    - color: %COLOR%
      content: %CALLNAME%이 특별히 말했던 곳이야, 바로 저기서……
    - color: %COLOR%
      content: %CHARA%는 전방의 코너를 바라보며 마음을 차분히 가라앉혔다.
    - color: %COLOR%
      content: 예상했던 긴장감이나 초조함 대신, 기묘할 정도의 평온함이 찾아왔다……
    - color: %COLOR%
      content: %UMA%의 속도는 비할 데 없이 빨랐고, 순식간에 %CHARA%는 대느티나무의 그림자 속으로 발을 들였다.
    - color: %COLOR%
      content: 완전히 대느티나무에 가려진 그 순간, %CHARA%의 가슴이 서늘해졌다.
    - color: %COLOR%
      content: 달리기의 버팀목인 왼쪽 다리가 갑자기 감각을 잃었다.
    - color: %COLOR%
      content: 이 정도 속도로 코너를 도는 도중에 균형을 잃는다면……
    - color: %COLOR%
      content: %CHARA%의 눈앞에 %CALLNAME%의 꿈속에서 중상을 입고 쓰러져 생사조차 알 수 없었던 %SEX%의 모습이 스쳐 지나갔다.
    - color: %COLOR%
      content: %SEX%는 위기를 벗어나기 위해 왼쪽 다리에 힘을 주려 했으나 아무런 반응이 없었다. 왼쪽 다리는 마치 통나무처럼 딱딱하게 굳어 있을 뿐이었다.
    - color: %COLOR%
      content: 정말로 %CALLNAME%이 꿈꿨던 것처럼, 여기서 끝나는 걸까……
    - color: %COLOR%
      content: 끝없는 절망감이 %CHARA%를(을) 집어삼켰고, %SEX%는 체념한 듯 눈을 감았다.
    - color: %COLOR%
      content: 그때—
    - acc: 1
      content: 「스즈카, 나랑 약속했잖아! %CHARA%!」
    - color: %COLOR%
      content: %CHARA%는 번쩍 눈을 떴다.
    - color: %COLOR%
      content: 이건…… %CALLNAME%의 목소리……
    - color: %COLOR%
      content: 가슴을 찢는 듯한 그 목소리는 관중석의 시끄러운 환호를 뚫고, 경기장 절반을 가로질러 마침내 %CHARA%의 귓가에 닿았다.
    - color: %COLOR%
      content: 관중석은 여기서 정말 멀 텐데, %CALLNAME%이 대체 얼마나 필사적으로 외치셨으면 여기까지 목소리가 닿은 걸까……
    - color: %COLOR%
      content: 이 모든 게, 나를 위해서……
    - color: %COLOR%
      content: 그래, 약속했어. %YOUR_SEX%의 곁으로 돌아가겠다고……
    - color: %COLOR%
      content: %CALLNAME%……%CALLNAME%……%CALLNAME%……！
    - color: %COLOR%
      content: %CHARA%의 눈앞에 %CALLNAME%의 모습이 나타난 듯했다. %YOUR_SEX%는 미소 지으며 %CHARA%에게 손을 내밀고 있었다……
    - color: %COLOR%
      content: %CHARA%의 시야는 흐릿해졌지만, 그래도 굳게 %CALLNAME%의 손을 맞잡았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아아아아아!」
    - color: %COLOR%
      content: %CHARA%는 갑자기 눈부신 빛 속으로 튀어 나갔다.
    - color: %COLOR%
      content: 뒤돌아보며 자신이 이미 큰 느티나무 구간을 빠져나왔다는 사실을 놀라 깨달았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이게……」
    - color: %COLOR%
      content: 다시 왼쪽 다리를 내려다보니 어느새 감각이 돌아와 평소처럼 %CHARA%을(를) 골까지 밀어주고 있다는 사실에 놀라면서도 기뻤다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「역시! 대느티나무를 가장 먼저 빠져나온 것은 %CHARA% 입니다!」
    - divider: true
    - 관중석에서 스즈카가 대느티나무를 빠져나오는 순간을 본 %YOU%은(는) 벅차오르는 기쁨에 다리가 풀려 의자에 주저앉았다.
    - 드러누운 채 거칠게 숨을 쉬었지만 이윽고 고조된 감정은 서서히 가라앉았다.
    - 고개를 내리자 마침 스즈카가 골을 통과하는 순간이 보였다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「%CHARA%, 이 얼마나 강력한 라스트 스퍼트입니까! 마치 유성과도 같은 속도입니다!」
    - 골을 넘고도 멀쩡히 서 있는 스즈카를 보자 가슴속 거센 감정을 더는 억누를 수 없었다.
    - if: era.get('love:2') >= 75
      lines:
        - %YOU%은(는) 재빨리 경기장 울타리를 넘어 코스로 들어갔다.
        - 그리고 멀리서 숨을 고르고 있는 스즈카를 향해 달려갔다.
        - %YOU%이(가) 곁에 도착할 때까지 %SEX%은(는) %YOU%을(를) 알아차리지 못했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%? 왜 여기 계세요?」
        - 설명도 하지 않고 망설임 없이 %SEX%을(를) 끌어안아 품에 안았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「앗!」
        - 스즈카의 얼굴이 순식간에 홍조를 띠었고, %SEX%는 %YOU%의 품에 얼굴을 묻은 채 떨어지려 하지 않았다.
        - %YOU%은(는) 스즈카의 향기, 길게 뻗은 머리카락의 냄새, 그리고 땀 냄새까지 탐하듯 깊게 들이마셨다.
        - 지금 스즈카는 귀 끝까지 파르르 떨고 있었고, 그녀 역시 몹시 격앙된 듯 보였다.
        - acc: 1
          content: 「스즈카, 나의 스즈카. 돌아와 줘서 고마워……」
        - %YOU%의 말을 듣고 %SEX%은(는) 잠시 멍해졌다가 품 안에서 얼굴을 들려고 버둥거렸다.
        - 달콤한 미소, 그리고 물기 어린 애정 가득한 눈동자.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네, 당신의 스즈카, 무사히 돌아왔어요.」
        - 담당 %UMA%을(를) 안고 있으니 온 세상을 품에 안은 듯했다.
        - 한참 뒤에야 스즈카를 놓아주었다.
        - acc: 1
          content: 「스즈카, 지금 정말 힘들지? 자, 내가 데려다줄게……」
        - 그리고 스즈카가 알아차리기 전에 허리를 감싸 안아 들어 올렸다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「꺄악!」
        - 스즈카가 비명을 질렀지만, %YOU%의 제멋대로인 행동을 거부할 힘은 없는 듯했다.
        - 스즈카에게 있어 %YOU%과(와)의 관계가 더할 나위 없이 가깝다고 해도, 많은 사람 앞에서 포옹하는 것이 한계였다.
        - 그렇게 민망한 자세로 안아 올리자 분명 %SEX%은(는) 당황했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 이건 좀 아닌 것 같아요. 다들 보고 있잖아요……」
        - acc: 1
          content: 「아닌 것 같다고? 수많은 사람이 지켜보는 가운데, 방금 텐노상을 우승한 담당을 품에 안고 있는데, 다들 부러워하면 부러워했지 절대 아니라고는 안 할 거야.」
        - %YOU%의 말을 증명이라도 하듯 경기장에는 전례 없는 박수와 환호성이 터져 나왔다.
        - 관중들에게 가을 텐노상 우승자는 매년 나오기에 대단하지만 익숙한 일이었다.
        - 하지만 트레이너가 울타리를 넘어 코스로 들어와 담당 우마무스메를 껴안는 광경은 전무후무한 일이었다.
        - 그래서 지금 관객들은 스즈카가 이겼을 때보다 더 흥분해 있었다. 장난기 많은 사람도 적지 않아 %YOU%와 스즈카를 향해 휘파람을 불었다.
        - 하지만 %YOU%에게는 들리지 않았다. 품 안에서 느껴지는 스즈카의 심장 박동 소리가 관중들의 환호성보다 훨씬 더 뜨겁게 울렸기 때문이다.
        - 스즈카는 벗어날 수 없다는 것을 깨닫고는 고개를 들어 %YOU%의 뺨에 입을 맞추었다.
        - content:
            - fontWeight: bold
              content: 해설
            - 「저기 흥분하신 트레이너님, 담당 %UMA%를 좀 내려놔 주시겠어요? 아직 남은 절차가 있거든요……」
        - 실황은 곤란한 듯 말했다. %SEX%에게도 이런 상황은 처음이었다.
        - 원래 %SEX%도 %YOU%과(와) 스즈카의 사랑을 부러워하는 마음이 있었지만, 그대로 두었다간 %YOU%이(가) 스즈카를 안고 경기장 밖까지 나가버릴 기세였다……
        - %YOU%과(와) 스즈카는 그제야 제정신이 들었다.
        - %YOU%은(는) 조심스럽게 스즈카를 내려주었고, 스즈카는 얼굴을 붉히며 %YOU%의 옷자락을 붙잡았다.
        - 하지만 결국 잠시 떨어져야 했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저…… 금방 올게요!」
        - %YOU%은(는) 스즈카를 향해 손을 흔들었고, 마음을 짓누르던 천 근 무게의 돌덩이가 내려앉는 기분이었다.
        - 가을 텐노상, 해냈구나.
    - if: era.get('love:2') < 75
      lines:
        - 시야가 갑자기 흐려지고 뜨거운 눈물이 흘렀다.
        - 이것이 바로 %CHARA%다. %YOU%의 멋지고 강인한 담당 우마무스메.
        - 운명의 굴레를 거칠게 끊어버린 것도 모자라, 한 걸음 더 나아가 가을 텐노상 1착이라는 영광까지 거머쥐었다.
        - 이런 담당을 만날 수 있어서 정말 다행이야……
        - %YOU%은(는) 주변의 기쁨의 바다 속에서 조용히 눈물을 흘렸다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기, %CALLNAME%? 저…… 울고 계세요?」
        - 화들짝 고개를 들자 어느새 스즈카가 눈앞에 와 걱정스러운 듯 바라보고 있었다.
        - %YOU%이(가) 고개를 들자 어느새 스즈카가 눈앞까지 와서 걱정스러운 눈빛으로 당신을 바라보고 있었다.
        - acc: 1
          content: 「아니, 아냐. 이건 눈물이 아니라…… 자부심이 넘쳐흘러서 그런 거야……」
        - 스즈카는 %YOU%의 농담 섞인 말에 웃음을 터뜨렸다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼, 승리를 무사히 가지고 돌아왔는데, 칭찬 한마디 안 해주실 건가요?」
        - 스즈카는 갑자기 얼굴을 뒤로 빼며 슬픈 표정을 지었다. 하지만 %SEX%의 들뜬 말투가 그 표정을 배신하고 있었다.
        - 어떻게 칭찬해야 할지 몰라 반사적으로 엄지를 치켜세웠다.
        - 그 어색한 모습을 보고 스즈카는 웃음을 참지 못했다.
        - 그녀는 더 이상 말을 잇지 않고 몸을 돌려 멀리 달려 나갔다.
        - %YOU%은(는) 스즈카를 향해 손을 흔들었고, 마음을 짓누르던 천 근 무게의 돌덩이가 내려앉는 기분이었다.
        - 가을 텐노상, 해냈구나.

# [번역 완료] tenn_sho_lose
tenn_sho_lose:
  title: 잘못 없음
  lines:
    - 아직 입장이 시작되지 않았음에도 경기장의 열기는 이미 뜨겁게 달아올라 있었다.
    - 관중들은 흥분하여 떠들어댔고, 그 소음 때문에 %YOU%의 머리가 지끈거렸다.
    - 다시 주위를 둘러보다 소름 끼치는 사실을 발견했다. 자신의 자리가 꿈속의 자리와 완전히 같았다.
    - 주변 관객도 같았다. 꿈과 다른 점은 지금은 얼굴이 보인다는 것뿐……
    - 가슴속 불안이 두 배로 커졌다.
    - 주변의 관중들도 마찬가지였다. 꿈과의 유일한 차이점이라면 지금은 그들의 얼굴을 똑똑히 볼 수 있다는 것뿐이었다……
    - %CHARA%와 전의를 불태우는 다른 17명의 %UMA%가 하나둘 게이트로 입장하기 시작했다.
    - 평소와 다를 것 없어 보이는 스즈카를 빤히 바라보며 마음속으로 %SEX%의 무사를 빌었다.
    - 이윽고 게이트가 열리고, 18명의 %UMA%가 일제히 튀어 나갔다.
    - %CHARA%이(가) 선두로 치고 나가며 순식간에 자리를 잡았다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「모든 우마무스메 일제히 출발, 스타트 좋군요! 인기 1위인 %CHARA%가 선두로 치고 나갑니다!」
    - %YOU%은(는) 몸을 크게 떨었다.
    - 실황 중계의 목소리와 내용마저 똑같았다……
    - 멀리서 달리는 스즈카의 폼, 가속하는 타이밍, 후속 그룹과의 거리까지……
    - 전부 똑같았다!
    - 더는 레이스를 볼 마음이 들지 않았다. 두 손은 멈추지 않고 떨렸고 머릿속은 그날 밤의 악몽으로 가득했다.
    - 현실에서 벌어지는 일은 적어도 지금까지는 전부 꿈의 재현이었다.
    - 이윽고 스즈카는 예상대로 아름답고 효율적으로 코너를 빠져나왔고, 곁의 관객들이 열광하며 환호하기 시작했다.
    - 그리고 현실에서 일어나는 일들은, 적어도 지금까지는 완벽하게 꿈의 재현이었다.
    - 이번에는 스즈카를 믿기로 했다.
    - 곧 선두의 스즈카가 후속 그룹을 이끌고 대느티나무 앞에 도달했고, %YOU%의 가슴에 통증이 느껴지기 시작했다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「앞쪽은 도쿄 경마장으로 유명한 큰 느티나무입니다. 큰 느티나무를 지나면 각 %UMA%의 재가속을 볼 수 있습니다!」
    - 갑작스러운 충동에 일어나 검은 나무숲을 바라봤다——
    - acc: 1
      content: 「스즈카! 스즈카!」
    - 온 힘을 다해 외쳤지만 주변의 환호에 비하면 너무 작아 소리의 벽을 뚫지 못했다.
    - 힘없이 주저앉아 초점 없는 눈으로 큰 느티나무 출구 쪽을 바라봤다.
    - %YOU%은(는) 온 힘을 다해 외쳤으나, 안타깝게도 주변의 환호성에 묻혀 목소리는 성난 파도 속의 조각배처럼 덧없이 흩어졌다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「앞에 대느티나무가 보이네……」
    - %CALLNAME%이 특별히 말했던 곳이야, 바로 저기서……
    - %CHARA%는 전방의 코너를 바라보며 마음을 차분히 가라앉혔다.
    - 예상했던 긴장감이나 초조함 대신, 기묘할 정도의 평온함이 찾아왔다……
    - %UMA%의 속도는 비할 데 없이 빨랐고, 순식간에 %CHARA%는 대느티나무의 그림자 속으로 발을 들였다.
    - 완전히 대느티나무에 가려진 그 순간, %CHARA%의 가슴이 서늘해졌다.
    - 달리기의 버팀목인 왼쪽 다리가 갑자기 감각을 잃었다.
    - 이 정도 속도로 코너를 도는 도중에 균형을 잃는다면……
    - %CHARA%의 눈앞에 %CALLNAME%의 꿈속에서 중상을 입고 쓰러져 생사조차 알 수 없었던 %SEX%의 모습이 스쳐 지나갔다.
    - %SEX%는 위기를 벗어나기 위해 왼쪽 다리에 힘을 주려 했으나 아무런 반응이 없었다. 왼쪽 다리는 마치 통나무처럼 딱딱하게 굳어 있을 뿐이었다.
    - 정말로 %CALLNAME%이 꿈꿨던 것처럼, 여기서 끝나는 걸까……
    - 끝없는 절망감이 %CHARA%를(을) 집어삼켰고, %SEX%는 체념한 듯 눈을 감았다.
    - 그때, %CHARA%의 귀에 무언가 걸려왔다.
    - %SEX%는 무의식적으로 귀를 쫑긋 세워 그 소리를 분별하려 애썼다.
    - 분명 %CALLNAME%의 목소리였으나, 너무나 작아 거의 들리지 않을 정도였다……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… 약속했잖아요, 당신에게 승리를 가져다주겠다고……」
    - %CHARA%은(는) 순식간에 투지를 불태우며 무거운 왼쪽 다리와의 싸움에 집중하기 시작했다.
    - 강하게 땅을 디디자 큰 반동과 함께 선명한 통증이 느껴졌다.
    - 하지만, 통증이 느껴진다는 것은 아직 감각이 살아있다는 뜻이다!
    - 한 걸음, 또 한 걸음. %CHARA%는 고통에 몸을 떨면서도 왼쪽 다리의 제어권을 조금씩 되찾아갔다……
    - 한 걸음, 또 한 걸음. 통증을 견디는 몸은 계속 떨렸지만 동시에 %SEX%은(는) 서서히 왼쪽 다리의 지배권을 되찾아 갔다……
    - 마침내 %CHARA%가 대느티나무를 통과하는 순간, %SEX%의 왼쪽 다리에 완전히 감각이 돌아왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 안 돼!」
    - 기뻐할 틈도 없이 %CHARA%는 좌절감을 느꼈다.
    - 아까 2위의 %UMA%가 그 틈을 타 %SEX%을(를) 추월한 것이다.
    - content:
        - fontWeight: bold
          content: 해설
        - 「아아 안타깝군요! 대느티나무 뒤에서 무슨 일이 있었는지는 알 수 없으나, %CHARA%가 선두 자리를 내주고 말았습니다!」
    - %CHARA%는 가속하여 앞의 %UMA%를 쫓으려 했으나 역부족이었다.
    - %SEX%의 스태미나는 운명과의 싸움으로 거의 바닥나 지금 속도로 완주하는 것만으로도 벅찼다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「역시…… 조금 부족해……」
    - content:
        - fontWeight: bold
          content: 해설
        - 「인기 1위 %CHARA%, 결국 선두를 되찾지 못하는 건가요? 가을 텐노상의 징크스가 다시 한번 증명되는 것 같습니다!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「죄송해요, 실망시켜 드려서……」
    - divider: true
    - 하지만 정작 %YOU%은(는) 스즈카가 정상적인 주법으로 대느티나무를 빠져나오는 모습을 본 순간부터 아무 소리도 들리지 않았다.
    - 앞에 있는 %UMA%도, 실황도 신경 쓰지 않고 그저 계속 달리는 스즈카만 바라봤다.
    - %YOU%에게는 %SEX%이 여전히 달리고 있다는 것만으로 이미 가을 텐노상 우승이나 다름없었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - 레이스가 모두 끝난 후, 스즈카는 미안한 듯 %YOU%의 옷자락을 조심스레 잡아당겼다.
    - %YOU%은(는) 웃으며 %SEX%의 머리를 쓰다듬어 주었다.
    - acc: 1
      content: 「정말 멋진 레이스였어, 스즈카! 자, 가자! 모처럼 도쿄까지 왔는데 제대로 놀지 않으면 손해잖아.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네!」
    - %YOU%은(는) 마치 승리자라도 된 것처럼 스즈카를 데리고 도쿄 경기장을 떠났다.

# [번역 완료] tenn_sho_miss
tenn_sho_miss:
  title: 결장
  lines:
    - 결국 %YOU%의 설득으로 스즈카는 가을 텐노상 출주를 포기했으나, %SEX%는 평소와 다름없이 텐노상 날짜에 맞춰 훈련을 계속해 왔다.
    - 마침내 만천하가 주목하는 텐노상 당일이 되었고, 레이스 시작 직전 스즈카가 트레이닝실 문을 두드렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 당신과 함께 텐노상 중계를 보고 싶어요.」
    - 말을 마치자마자 %SEX%는 막무가내로 %YOU%의 옆자리에 앉았다.
    - %YOU%은(는) 하던 일을 멈추고 가을 텐노상 생중계를 틀 수밖에 없었다.
    - 자신의 꿈과 행인의 소문만으로, 1년 넘게 준비해 온 레이스를 담당 %UMA%에게 포기하게 한 일에 %YOU%은(는) 상당한 죄책감을 느꼈다.
    - 그래서 스즈카의 부탁을 거절할 수 없었다.
    - 곧 개막 나팔 소리가 울리고, 17명의 %UMA%가 차례로 게이트에 입장했다.
    - 팡파르가 울린 순간, 곁의 스즈카가 심하게 떨고 있다는 걸 알아차렸다.
    - acc: 1
      content: 「스즈카? 괜찮아……?」
    - 스즈카는 %YOU%의 물음이 들리지 않는 듯, 오로지 레이스에만 집중하고 있었다.
    - %UMA%들이 게이트를 박차고 나가 첫 번째 코너를 돌았다.
    - 이 레이스에도 도주형 %UMA%은(는) 출전했지만, %SEX%의 도주는 2위와 고작 한 마신 차이에 불과했다. 스즈카의 환상적인 대도주에 비하면 도주라고 부르기도 어려울 정도였다……
    - 이어 모두가 가속했고, 원래 도주하던 %UMA%은(는) 힘이 다해 두 번째 집단으로 떨어졌다. 2위가 잠시 선두에 섰지만 뒤의 몇 명에게 차례로 추월당했다.
    - 이번 레이스에도 도주 우마무스메가 참전했으나, 그 도주는 2위와 겨우 한 마신 차이밖에 나지 않았다. 스즈카의 환상적인 대도주에 비하면 도주라고 부르기도 민망한 수준이었다……
    - 하지만 %YOU%의 머릿속에는 분명했다. 스즈카가 출전했다면 이 시점에 이미 2위를 다섯 마신 이상 떼어 놓았을 것이다……
    - 이어 우마무스메들이 가속을 시작하자 원래의 도주 우마무스메는 힘이 빠져 2위 그룹으로 밀려났고, 잠깐 선두를 차지했던 우마무스메들도 뒤따라온 우마무스메들에게 차례로 추월당했다.
    - 지금 스즈카는 영혼을 잃은 사람 같았다. 눈은 공허했고, 얼굴의 창백함은 예전에 %SEX%에게 출전을 포기하게 했을 때의 %YOU%보다도 심했다.
    - acc: 1
      content: 「스즈카? 스즈카!」
    - 겁이 나서 저도 모르게 손을 뻗어 스즈카의 어깨를 두드렸다.
    - 하지만 스즈카는 아무런 반응이 없었다.
    - 그때 중계 화면 속 가을 텐노상은 종반인 대느티나무 구역에 진입했다.
    - %UMA%들이 대느티나무의 그림자 속으로 줄지어 들어갔고, 다시 차례로 빠져나왔다. 순위의 변동조차 일어나지 않았다.
    - 대느티나무를 지나고 얼마 되지 않아 결승선이 나타났고, 원래 인기 2위였던 우마무스메가 가장 먼저 결승선을 통과하며 이번 텐노상의 1착을 거머쥐었다.
    - 그 순간, %YOU%의 어깨 위로 묵직한 무언가가 쓰러졌다.
    - 스즈카였다. %SEX%는 의식을 잃은 듯 눈을 감은 채 미동도 없이 %YOU%의 품에 안겨 있었다. 아무리 불러도 대답이 없었다.
    - 당황한 %YOU%이(가) 스즈카를 안고 보건실로 달려가려던 찰나.
    - 다행히 스즈카는 문을 나서기 직전 서서히 눈을 떴다.
    - acc: 1
      content: 「아, 스즈카! 정신이 들어? 괜찮아? 어디 아픈 데는 없고?」
    - 조금 기뻐하며 물었지만 스즈카는 대답하지 않았다.
    - if: era.get('love:2') < 75
      lines:
        - 스즈카는 %YOU%에게 안겨 있다는 사실에 아무런 반응도 보이지 않은 채 무미건조하게 품에서 벗어났다.
        - %SEX%는 옷매무새를 가다듬더니 돌아보지도 않고 트레이닝실을 나갔다.
        - acc: 1
          content: 「스즈카?」
        - 말을 걸어도 %SEX%은(는) 걸음조차 멈추지 않고 곧장 떠났다.
        - 트레이닝실에는 오직 %YOU%만이 남겨져 한참 동안 그 자리에 서 있었다.
    - if: era.get('love:2') >= 75
      lines:
        - %SEX%는 아무 말 없이 팔을 뻗어 %YOU%의 목을 감싸 안았다.
        - 놀라 반사적으로 한 걸음 물러나자 마침 뒤의 소파에 걸렸다.
        - 깜짝 놀란 %YOU%이(가) 뒷걸음질 치다 뒤에 있던 소파에 걸려 넘어지고 말았다.
        - 버둥거리며 일어나자 스즈카의 얼굴은 창백함에서 붉음으로 바뀌어 있었고, 선명해서 금방이라도 흘러넘칠 듯했지만 오히려 소름이 끼쳤다.
        - %SEX%은(는) %YOU% 위에 올라앉아 살며시 몸을 숙이고 귀 가까이 다가왔다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 저에게 텐노상을 포기하게 하셨으니…… 뭔가, 보상을 해주셔야겠죠?」
        - 스즈카는 귓가에 숨을 내쉬다가 마지막에는 귓불을 입에 머금고 살짝 깨물었다.
        - 스즈카는 달콤한 숨결을 내뱉으며 %YOU%의 귓볼을 살짝 깨물었다.
        - 남아 있던 의식은 떨리는 손으로 자신과 스즈카의 옷을 벗기라고 명했고, 스즈카의 알몸이 눈앞에 드러난 순간 이성은 완전히 무너졌다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네, 그렇게……」 # 스즈카 주도의 우마뾰이

# シニア級11月第1週
# [번역 완료] third_step_win
third_step_win:
  title: 운명의 세 번째 발걸음·새로운 출발
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 계시나요?」
    - 역사적인 가을 텐노상이 끝난 어느 날, 스즈카가 트레이닝실 문을 두드렸다.
    - %YOU%은(는) 서둘러 일어나 문을 열어 스즈카를 맞이했다.
    - 문밖의 스즈카는 얼굴에 약간의 홍조를 띤 채 %YOU%을(를) 보며 살며시 미소 지었고, 물건 하나를 꺼내 보였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이건 %CALLNAME%의 사무실에 두는 게 더 좋을 것 같아요.」
    - %YOU%은(는) 눈을 크게 떴다. 스즈카가 꺼낸 것은 틀림없는 %SEX%의 천황상 방패였다.
    - acc: 1
      content: 「이 방패는 네 노력의 결과물이잖아. 내가 가지고 있는 건 좀 그렇지 않을까? 스즈카가 가져가는 게……」
    - 손을 저어 스즈카를 말리려 했다.
    - %YOU%은(는) 손사래를 치며 거절하려 했다.
    - 방패를 돌려놓을 생각이 전혀 없어 보이자, 입 밖까지 나왔던 거절을 삼킬 수밖에 없었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말로요, %CALLNAME%. 저는 당신이 저보다 이 방패를 가질 자격이 있다고 생각해요.」
    - 스즈카는 %YOU%의 어깨를 잡고 진지한 눈빛으로 당신을 바라보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「사실 저, 하마터면 %CALLNAME%의 꿈속에서처럼 비극적인 일을 겪을 뻔했거든요. 당신이 제때 저를 불러주신 덕분이에요……」
    - 그때 크게 소리친 뒤 한동안 목이 쉬었던 일이 떠올랐다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그러니까 %CALLNAME%, 지금까지 저를 믿고 지지해 주신 것, 그리고 저를 진심으로 걱정해 주신 것에 대한 감사의 뜻으로 이 방패를 받아주세요.」
    - 몹시 진지한 표정을 보고 어쩔 수 없이 %SEX%의 방패를 받아들었다.

# [번역 완료] third_step_lose
third_step_lose:
  title: 운명의 세 번째 발걸음·졌지만 잘 싸웠다
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 계시나요?」
    - 역사적인 가을 텐노상이 끝난 어느 날, 스즈카가 트레이닝실 문을 두드렸다.
    - %YOU%은(는) 서둘러 일어나 문을 열어 스즈카를 맞이했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 별로 바빠 보이지 않으시는데 저랑 같이 대화 좀 나누실래요?」
    - 무언가를 예리하게 눈치채고 스즈카를 앉혔다.
    - 아니나 다를까, 화제는 곧 스즈카의 가을 텐노상 패배로 이어졌다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아무리 생각해도 너무 아쉬워요, %CALLNAME%……」
    - %YOU%은(는) 풀이 죽은 스즈카를 보며 안타까운 마음이 들었다.
    - 천황상(가을)에 쏟은 노력을 전부 지켜봤다. 마지막 사고만 없었다면 스즈카는 반드시 천황상을 차지했을 거라고 믿고 있다.
    - 하지만 %YOU%에게 있어, 스즈카가 그 위험한 상황에서도 포기하지 않고 고난을 극복해 낸 것만으로도 텐노상 1착보다 훨씬 더 값진 결과였다.
    - acc: 1
      content: 「괜찮아, 스즈카. 나에게는 네가 무사한 것이 그 무엇보다 중요하니까……」

# [번역 완료] third_step_miss
third_step_miss:
  title: 운명의 세 번째 발걸음·모든 길은 하나로
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 계시나요?」
    - 가을 텐노상이 끝난 어느 날, 스즈카가 트레이닝실 문을 두드렸다.
    - %YOU%은(는) 서둘러 일어나 문을 열어 스즈카를 맞이했다.
    - 문밖의 스즈카는 안색이 창백했고, 마치 악몽이라도 꾼 듯 다크서클이 짙게 내려와 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 저…… 당신께 사과드리고 싶어요.」
    - 스즈카의 갑작스러운 말에 %YOU%은(는) 당황하여 한동안 반응하지 못했다.
    - acc: 1
      content: 「무슨 일인지는 모르겠지만, 일단…… 들어와서 이야기하자.」
    - 이마에 밴 식은땀을 닦으며 스즈카에게 우선 앉으라고 말했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 어젯밤에 제가……」
    - 스즈카는 묵묵히 이야기를 시작했고, %YOU%의 표정은 점점 경악으로 물들어갔다.
    - 어젯밤 %SEX%이 꾼 꿈이 이전에 %YOU%이(가) 꾸었던 악몽과 토씨 하나 틀리지 않고 똑같았기 때문이다.
    - 다른 점이라면 %SEX%의 꿈이 자신의 시점이었다는 것뿐이다. 자신이 균형을 잃고 쓰러져 중상을 입고 경주를 중단하는 모습을 보는 것은 결코 좋은 경험이 아니다.
    - 어떻게 위로해야 할지 몰라 조용히 %SEX%의 이야기를 들었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래서 당신께 사과드리고 싶었어요. 그동안 당신을 오해해서 정말……」
    - 스즈카는 가늘게 떨며 자리에서 일어나 %YOU%에게 깊이 허리를 숙여 사과했다.
    - 「사실 스즈카가 사과할 필요는 없어. 만약 내가 당시의 스즈카였어도, 트레이너가 꿈 하나 때문에 텐노상을 포기하라고 하면 절대 안 들었을 테니까.」
    - 스즈카는 %YOU%의 위트 섞인 말에 작게 웃음을 터뜨렸지만, 여전히 진심을 담아 사과를 받아달라고 고집했다.
    - 결국 어쩔 수 없이 받아들었다.

# シニア級11月第1週
# 折れた翼のあと
# [번역 완료] ending
ending:
  title: 운명의 종착점
  lines:
    - 중상을 입은 스즈카가 구급차에 실려 간 이후, %SEX%는 한동안 혼수상태였다.
    - %YOU%은(는) 병원에 문병을 가려 했지만 매번 %SEX%의 주치의에게 제지당했다.
    - 오늘 주치의에게서 스즈카가 의식을 되찾았다는 전화가 와 곧바로 문병 갈 준비를 했다.
    - divider: true
    - %YOU%은(는) 몇 번이나 면회를 시도했으나 그때마다 주치의의 제지에 가로막혔다.
    - 가능한 한 빨리 스즈카의 주치의를 찾아 자세한 상태를 알아보려 했다.
    - content:
        - fontWeight: bold
          content: 주치의
        - 「%SEX%의 상태는 매우 심각합니다. 고속으로 달리던 중 골절되면서 다리의 동맥까지 손상됐습니다.」
    - content:
        - fontWeight: bold
          content: 주치의
        - 「하지만 다행히 트레이너님이 제때 부축해 주신 덕분에 쓰러지면서 발생하는 2차 충격은 피할 수 있었습니다. 그러지 않았다면 최악의 경우 다리를 절단해야 했을지도 모릅니다.」
    - 그 말을 듣자 %YOU%의 몸에 소름이 돋았다.
    - content:
        - fontWeight: bold
          content: 주치의
        - 「당시 상황이 조금만 더 위험했거나 도착이 조금만 늦었다면, %SEX%은(는) 과다출혈로 영원히 당신 곁을 떠났을 수도 있습니다.」
    - 그날 밤 꿈에서 붉은 융단 위에 누워 있던 것 같던 스즈카가 떠올랐다.
    - 다행히 하늘이 충분한 예고를 해주었고, 덕분에 자신의 담당 우마무스메를 구해낼 수 있었다.
    - content:
        - fontWeight: bold
          content: 주치의
        - 「다만 도착이 빨랐고 수술 후 회복도 양호하지만…… 안타깝게도 %SEX%은(는) 평생 격렬한 운동은 할 수 없을 겁니다.」
    - 예상했던 결과였지만 가슴이 무거워졌다.
    - 만약 %UMA%가 평생 달릴 수 없게 된다면, 그것은 %UMA%로서의 삶이 끝난 것과 다름없기 때문이다……
    - 주치의는 말을 아끼며 %YOU%을(를) 스즈카의 병실로 안내했다.
    - 병실 문에 달린 창문 너머로, 스즈카가 초점 없는 눈으로 침대에 앉아 자신의 왼쪽 다리를 때때로 어루만지는 모습이 보였다. 그 모습을 보니 가슴이 찢어지는 것 같았다.
    - 살며시 문을 두드리고 안으로 들어갔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「앗, %CALLNAME%!」
    - 스즈카는 %YOU%을(를) 발견하자마자 마치 생기를 되찾은 듯 조금 활기를 띠었다.
    - 하지만 곧 다시 고개를 숙이고는 자신의 왼쪽 다리를 가만히 쓰다듬었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 죄송해요. 제 고집 때문에 이렇게 큰 폐를 끼쳐서……」
    - 스즈카는 말을 이어갈수록 목소리가 떨리더니 결국 작게 흐느끼기 시작했다.
    - 스즈카의 차가운 오른손을 잡고 복잡한 표정을 지었다.
    - acc: 1
      content: 「내가 더 단호하게 널 막았더라면 이런 일은 없었을 텐데……」
    - %YOU% 역시 자책하고 있었다. 자신이 좀 더 강하게 나갔더라면 스즈카가 이런 상처를 입지 않았을지도 모른다는 생각 때문이었다……
    - 그 뒤 오랫동안 %YOU%와 스즈카는 아무 말도 하지 않았다. 주치의에게 병실 밖으로 나가 달라는 말을 들을 때까지.

# 脚の古傷ルート以外
# [번역 완료] christmas
christmas:
  lines:
    - 책상 앞에 앉아 있던 %YOU%은(는) 무심결에 고개를 들어 창밖을 보았다.
    - 어느새 학원에는 함박눈이 내리고 있었다. 깃털 같은 눈송이가 허공을 떠돌며 고요한 세상을 더욱 정적 속으로 몰아넣었다.
    - 창밖의 풍경을 보며 한숨을 쉬었다.
    - %YOU%은(는) 창밖의 풍경을 보며 나직이 한숨을 내뱉었다.
    - 오늘은 크리스마스이자, 스즈카의 시니어 시즌의 마지막 크리스마스였다. 이는 곧 %YOU%과(와) 스즈카가 함께한 지 어느덧 3년이 다 되어간다는 뜻이기도 했다.
    - 자리에서 일어나자 문득 스즈카에게 산책을 권하고 싶어졌다.
    - 그리고 바로 그 순간, 트레이닝실 문을 두드리는 소리가 들렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 계시나요?」
    - 스즈카의 말이 끝나기도 전에 %YOU%이(가) 문을 활짝 열었고, 덕분에 %SEX%는 깜짝 놀라고 말았다.
    - 문밖의 스즈카는 두툼한 외투를 입고 있어 이미 외출 준비를 마친 듯한 모습이었다.
    - acc: 1
      content: 「스즈카, 우리 산책하러 갈까?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 우리 산책하러 갈까요?」
    - %YOU%과(와) 스즈카는 동시에 서로에게 산책을 제안했고, 잠시 멍하니 서로를 바라보다 이내 웃음을 터뜨렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말 우연이네요, %CALLNAME%. 그럼 같이 가요.」
    - divider: true
    - 곧 %YOU%과(와) 스즈카는 밖으로 나왔다. 하지만 기세 좋게 내리던 눈은 이미 그친 뒤였다.
    - %YOU%은(는) 조금 아쉽다고 느꼈지만, 스즈카는 그렇지 않은 모양이었다.
    - %SEX%는 두껍게 쌓인 눈 위를 밟으며 때때로 가볍게 달리기도 하는 등, 이런 분위기를 무척 마음에 들어 하는 듯했다.
    - acc: 1
      content: 「스즈카는 눈이 그친 뒤의 풍경을 참 좋아하는 것 같네.」
    - 쌓인 눈 위에 선 스즈카는 뒤돌아 활짝 웃으며 %YOU%을(를) 바라봤다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음, 제가 어렸을 때 이야기를 %CALLNAME%께 해드린 적이 없었죠? 저는 사실 눈이 온 뒤의 그 고요함 때문에 달리기를 좋아하게 되었거든요.」
    - 스즈카가 흥미진진하게 어린 시절 이야기를 시작하자, 호기심이 생긴 %YOU%은(는) 귀를 기울여 경청했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그땐 아주 어렸고, 그렇게 큰 눈은 처음 봤어요…… 눈이 온 세상은 정말 조용했고, 온통 하얗게 변해 있었죠……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「조금씩 걸음을 옮겨봤는데, 눈을 밟는 뽀드득 소리 말고는 아무 소리도 들리지 않았어요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래서 천천히 달리기 시작했어요. 점점 더 빠르게. 하얀 세상이 나를 중심으로 회전하고, 마치 세상에 나 혼자만 남은 것 같은 기분이 들었죠.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그렇게 온 세상을 독차지하는 듯한 기분에 깊이 빠져버렸어요. 그리고 나중에 여러 레이스를 겪으면서 알게 되었죠. 아, 1등의 앞에도 아무도 없구나……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래서요, 그 아무도 없는 전방의 풍경을 직접 경험해 본 사람은, 절대로 그 자리를 남에게 양보하고 싶지 않게 돼요.」
    - %YOU%이(가) 스즈카의 어린 시절 이야기에 푹 빠져 있는 사이, 어느새 스즈카가 %YOU%의 팔을 가볍게 붙잡았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이제 돌아갈까요, %CALLNAME%? 크리스마스에는 할 일이 아주 많으니까요.」
    - 그렇게 %YOU%과(와) 스즈카는 스즈카의 생애 마지막 크리스마스를 준비하기 시작했다.

# 脚の古傷ルート
# [번역 완료] hope
hope:
  title: 희망
  lines:
    - 책상 앞에 앉아 있던 %YOU%은(는) 무심코 고개를 들어 창밖을 보았다.
    - 어느덧 학원에는 큰 눈이 내리고 있었다. 함박눈이 공중에서 살랑살랑 흩날리며, 원래도 평온했던 세상을 더욱 정적에 잠기게 했다.
    - 창밖의 풍경을 보며 한숨을 쉬었다.
    - %YOU%은(는) 창밖의 풍경을 바라보며 자신도 모르게 한숨을 내쉬었다.
    - 그리고 결실을 거두기 직전, 스즈카는 한 번의 사고로 선수 생명을 잃었다……
    - 그리고 유종의 미를 거두기 직전, 스즈카는 예상치 못한 사고로 우마무스메 생명이 끊어지고 말았다……
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「눈이 오네요, %CALLNAME%.」
    - 스즈카는 침대에 앉아 넋을 놓고 창밖을 바라보고 있었다. %YOU%이(가) 침대 곁에 와도 돌아보지 않았다.
    - 이어 %SEX%은(는) 혼자 과거 이야기를 시작했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음, 그러고 보니 아직 %CALLNAME%에게 어릴 적 이야기를 해준 적이 없었죠? 제가 달리기를 사랑하게 된 건 바로 눈 온 뒤의 정적 때문이었답니다.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그때는 아주 어렸고, 그렇게 큰 눈은 처음 봤어요…… 눈이 내린 뒤의 세상은 무척 고요했고, 대지는 온통 하얀색이었죠……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「시험 삼아 몇 발자국 걸어보았는데, 눈을 밟을 때 나는 뽀드득 소리 말고는 아무런 소리도 들리지 않았어요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래서 천천히 달리기 시작했어요. 점점 더 빠르게, 하얀 세상이 나를 중심으로 회전하며 마치 온 천지에 나 혼자만 있는 것 같았죠.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「온 세상을 독차지하는 듯한 그 느낌을 깊이 사랑하게 됐어요. 그 후 여러 레이스를 거치며 깨달았죠. 1등의 앞에는 아무도 없다는 것을요……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래서, 그 앞의 아무도 없는 풍경을 정말로 직접 느껴본다면, 결코 다른 이에게 양보하고 싶지 않게 돼요.」
    - 덤덤하게 털어놓는 스즈카의 이야기에 %YOU%의 마음은 더욱 아려왔다.
    - 이어 스즈카는 돌아서 진지하게 %YOU%을(를) 바라봤다. 눈이 붉어 울고 난 뒤처럼 보였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 저를 밖으로 데려가 주세요. 이 눈을 좀 더 가까이서 느끼고 싶어요. 제가 사랑했던 그 경기장을 다시 한번 보고 싶어요……」
    - 목이 메는 스즈카의 목소리를 듣자 %YOU% 역시 눈물이 왈칵 쏟아질 것만 같았다.
    - 그래서 주치의를 찾아 스즈카의 이 작은 소원을 들어달라고 부탁했다.
    - 허락을 받자 들뜬 스즈카를 휠체어에 태워 병원을 나섰다.
    - content:
        - fontWeight: bold
          content: 담당 의사
        - 「음, %SEX%는 수술 후 치료에 매우 협조적이었고, 덕분에 회복 상태가 제 예상보다 훨씬 빠릅니다.」
    - content:
        - fontWeight: bold
          content: 담당 의사
        - 「지금처럼 적극적으로 치료를 계속한다면, 나중에는 일상적인 보행이나 가벼운 조깅 정도는 가능할지도 모릅니다. 하지만 다시 훈련을 받고 레이스에 나가는 것은 절대 불가능합니다.」
    - 담당 의사의 이 말은 %YOU%와 스즈카에게는 생각지도 못한 기쁜 소식이었다.
    - 원래대로라면 스즈카는 다시는 달릴 수 없으며, 걷는 것조차 목발에 의지해야 할 상황이었기 때문이다.
    - 그렇기에 아직 치료 과정이 끝나지는 않았지만, 휠체어를 타고 밖으로 나와 바람을 쐬는 것 정도는 충분히 가능했다.
    - %YOU%은(는) 눈이 흩날리는 세상 속에서 스즈카의 휠체어를 천천히 밀었다. 스즈카는 평소보다 훨씬 들떠 보였고, 심지어 금방이라도 일어설 것만 같았다.
    - 아이처럼 눈송이를 쫓는 스즈카를 바라보니 가슴속에 여러 감정이 뒤섞였다.

# 全勝エンディング
# [번역 완료] invincible
invincible:
  title: 전승
  lines:
    - 지난 3년, 천여 일의 밤낮 동안 %YOU%와 스즈카는 함께 노력하여 수많은 영광을 거머쥐었다.
    - 이제는 축복과 경외를 거두어들일 시간이다.
    - 여러 저명한 %UMA% 매체들이 「%YOURNAME% 트레이너와 %CHARA%의 시대」라는 헤드라인을 뽑아내면서, %YOU%과(와) 스즈카의 삶도 크게 변했다.
    - 스즈카는 살아있는 전설이자, 도주 %UMA% 중 반박할 수 없는 1인자가 되었다.
    - 그리고 당신 또한 자연스럽게 도주 %UMA%계를 지도하는 권위자가 되었다.
    - 갓 입학한 많은 %UMA%들이 스즈카를 본보기로 삼아 도주, 혹은 대도주 각질을 선호하게 되었다.
    - 효과가 어떻든 적어도 %THEY%의 트레이너가 보기에는, 도주를 제대로 익히려면 결국 %YOU%와 스즈카에게 가르침을 청할 수밖에 없다.
    - 업무 틈틈이 %YOU%은(는) 스즈카의 진지한 옆얼굴을 멍하니 바라보곤 한다.
    - 만약 스즈카를 만나지 못했다면, 자신의 삶이 이토록 다채로울 수 있었을까?

# 脚の古傷なし、非一着が2以下
# [번역 완료] better_ending
better_ending:
  title: 성공과 명성
  lines:
    - 지난 3년, 천여 일의 밤낮 동안 %YOU%와 스즈카는 함께 노력하여 수많은 영광을 거머쥐었다.
    - 비록 패배한 적도 있었지만, 스즈카는 여전히 압도적인 승률로 사람들에게 「전설의 %UMA%」라 불리게 되었다.
    - 그 이후로 %YOU%과(와) 스즈카의 생활은 예전과 많이 달라졌다.
    - 스즈카는 이제 현역 %UMA%로서 코스에 설 일은 없지만, 외출할 때마다 사인을 요청하는 팬을 만난다.
    - 그리고 스즈카는 언제나 정성스럽고 세심하게 팬들에게 사인을 해준다.
    - 이런 상황을 마주할 때마다, %YOU%은(는) 트레이너로서의 직업 인생이 거의 완벽에 가까워졌음을 느낀다.

# 脚の古傷あり、非一着が1以下
# [번역 완료] good_ending
good_ending:
  title: 꺾인 날개의 천사
  lines:
    - 지난 3년, 천여 일의 밤낮 동안 %YOU%과(와) 스즈카는 함께 노력하여 수많은 영광을 거머쥐었다.
    - %YOU%과(와) 스즈카는 본래 가장 주목받는 콤비가 되었어야 했다.
    - 마지막의 불완전한 마침표만 없었더라면.
    - 그렇기에 주요 매체들은 이구동성으로, 운이 나쁘지 않았다면 스즈카는 분명 가을 텐노상을 제패했을 것이라고 평했다.
    - 이에 대해 스즈카는 그저 살포시 미소 지을 뿐이다.
    - 그 후의 나날은 여느 때와 다름없이, 평범하고 기억될 만한 일 없는 일상의 연속이었다.
    - 하지만 아직도 스즈카의 복귀를 기대하는 팬을 만나면 일상이 그리 담담하지만은 않게 된다.
    - 하지만 %YOU%과(와) 스즈카가 여전히 스즈카의 복귀를 기다리는 팬들을 만날 때면, 그 일상은 그리 평범하게만 느껴지지는 않았다.

normal_ending:
  title: 상호 보완
  lines:
    - %YOU%과(와) 사일런스 스즈카의 3년이 마침내 지나갔다.
    - 3년 동안 %YOU%은(는) 사일런스 스즈카를 이끌고 나쁘지 않은 성적을 거두었으나, 강자들이 즐비한 트레센 학원에서는 여전히 역부족이었다.
    - 곧 새로운 세대의 %UMA%들이 더욱 눈부신 성적으로 무대 중앙을 차지하게 될 것이다.
    - 그때가 되면, 아마도 왕년의 대도주 우마무스메였던 사일런스 스즈카를 기억해 주는 사람은 그리 많지 않을지도 모른다.
    - 하지만 이런 평온한 삶이야말로 사일런스 스즈카가 원했던 것일지도 모른다.
    - 어떤 의미에서는 서로에게 잘 어울리며, 큰 공도 과도 없는 결과니 이 또한 괜찮지 않을까?

# 鈴鹿が宝塚記念／金鯱賞を欠場したうえで脚を負傷した場合
# [번역 완료] crazy_fan
crazy_fan:
  title: 뜻밖의 비극
  lines:
    - %YOU%은(는) 하늘 위로 겹겹이 쌓인 먹구름을 보며 발걸음을 재촉했다.
    - 오늘은 스즈카가 병원에 재검진을 받으러 가는 날이라, %YOU%은(는) 스즈카를 데리러 학원으로 갈 예정이었다.
    - 그저 평소와 다름없는 외출일 뿐이었지만, %YOU%은(는) 왠지 모를 불길한 예감이 들었다.
    - 착각이라고 계속 자신을 설득하며 어느 골목으로 들어갔다.
    - 이 골목을 이용하면 병원에 빨리 도착할 수 있다. 하지만 출구에는 낡은 차 한 대가 서 있었다.
    - 어쩔 수 없이 왔던 길로 돌아가려 했다.
    - 돌아보려는 순간 눈앞이 갑자기 어두워졌다.
    - 콧속에 흙냄새가 퍼졌고 누군가에게 자루를 뒤집어쓰게 당했다.
    - 버둥거리며 도움을 청하려는 순간 뒤통수를 세게 얻어맞았다.
    - 병원에 더 빨리 도착하기 위해 이 골목을 택했지만, 골목 출구에는 낡은 자동차 한 대가 떡하니 길을 막고 있었다.
    - 숨 막히는 흙먼지 냄새가 코끝을 찔렀다. 누군가에게 자루가 씌워진 것이었다.
    - 옆에는 골목 입구를 막고 있던 그 낡은 자동차가 서 있었다.
    - content:
        - fontWeight: bold
          content: ？？？
        - 「오, 일어났나, %YOURNAME%?」
    - 서둘러 돌아보니 힘줄이 도드라진 몸에 맨상체가 문신투성이인 남자가 있어 소름이 끼쳤다.
    - %YOU%가 급히 고개를 돌리자, 근육이 울룩불룩하고 상체를 드러낸 채 문신으로 뒤덮인 거구의 남자가 서 있었다.
    - content:
        - fontWeight: bold
          content: 팬
        - 「자기소개를 하지. 나는 %CHARA%의 광신적인 팬이다.」
    - 그 미소를 보자 두려움은 더욱 커졌다.
    - content:
        - fontWeight: bold
          content: 팬
        - 「자, %YOURNAME%, 질문이 하나 있다.」
    - content:
        - fontWeight: bold
          content: 팬
        - 「스즈카에게 레이스를 빠지게 할 배짱이 있으면서, 왜 텐노상에는 기어코 %SEX%를 출주시켰지?」
    - content:
        - fontWeight: bold
          content: 팬
        - 「네 그 영명한 지도 덕분에, %SEX%는 따 놓은 당상이었던 승리를 놓친 건 물론이고, 경기장에 설 권리마저 영원히 잃어버렸어……」
    - 눈앞의 팬 상태를 보고 마음속에서 경보가 울렸다.
    - content:
        - fontWeight: bold
          content: 팬
        - 「그럼, 너도 직접 느껴보라고. 스즈카가 느꼈을 그 절망을 말이야.」
    - 아악!
    - 왼쪽 다리에 격통이 치고 올라왔고 자신의 뼈가 부러지는 불쾌한 소리까지 들렸다.
    - 곧이어 오른쪽 다리도 똑같은 처지가 되었다.
    - 광적인 팬은 만족스럽다는 듯 야구 배트를 챙기더니 휘파람을 불었다.
    - content:
        - fontWeight: bold
          content: 팬
        - 「네 마음에 들었으면 좋겠군. 특별히 고른 아주 외진 장소니까. 운 좋으면 살아남으라고, %YOURNAME%!」
    - 말을 마친 그는 그대로 차를 몰고 떠나버렸다.
    - %YOU%은(는) 양다리가 골절된 탓에, 고통을 참으며 지면 위를 기어갈 수밖에 없었다.
    - 얼마 지나지 않아 출혈로 의식이 서서히 흐려졌다.
    - 머지않아 %YOU%은(는) 과다출혈로 인해 서서히 의식을 잃어갔다.
    - 이렇게 될 줄 알았다면, 그때……

# 徹夜のあとで発生
# スピード+5、根性+15
# [번역 완료] run_together
run_together:
  title: 併走
  lines:
    - acc: 1
      content: 「鈴鹿、鈴鹿？」
    - 어둠 속으로 빠져들기 직전, %YOU%은(는) 생각했다.
    - acc: 1
      content: 「스즈카, 또 몰래 달리고 있었지?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그럴 리가요! 저…… 제대로 자고 있었어요!」
    - 진작 알았더라면, 애초에 그러지 말았어야 했는데……
    - 누가 봐도 밤을 새운 듯한 스즈카를 보며 그 변명을 믿을 생각은 없었다.
    - 그때 눈을 굴리다 한 가지 방법이 떠올랐다.
    - acc: 1
      content: 「알았어. 그럼 훈련을 시작할까.」
    - divider: true
    - 하루 훈련은 금세 끝났고 %YOU%은(는) 스즈카를 기숙사 입구까지 바래다준 뒤 잘 자라는 인사를 나눴다.
    - 그 뒤 빠른 걸음으로 기숙사 뒤편 그늘로 돌아가 조용히 기다렸다.
    - 오래 기다리지 않아 운동복 차림의 스즈카가 기숙사 입구에 나타났다.
    - 스즈카는 조심스럽게 좌우를 살핀 뒤 조금 뿌듯한 표정으로 운동장 쪽으로 걸어갔다.
    - %YOU%은(는) 살며시 뒤따라가 두 손으로 스즈카의 눈을 가렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「으앗!」
    - acc: 1
      content: 「누~구~게~?」
    - 일부러 날카로운 가성을 썼는데도 스즈카는 금세 진정했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「으, 죄송해요, %CALLNAME%……」
    - acc: 1
      content: 「현행범이네. 스즈카, 아직도 변명할 거 있어?」
    - %YOU%은(는) 눈앞의 %UMA%이(가) 긴장해 곤란해하는 모습을 바라봤다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「다, 다시는 안 할게요, %CALLNAME%. 안심하세요……」
    - 갑자기 더 재미있는 생각이 떠올랐다.
    - acc: 1
      content: 「이미 운동복까지 입었으니 달리면 되지.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네?」
    - 스즈카는 믿기지 않는 표정으로 %YOU%을(를) 올려다봤고, %YOU%은(는) 자신의 결정을 다시 한번 말했다.
    - 하지만 스즈카가 환호하기 전에 짓궂게 웃으며 규칙 두 가지를 덧붙였다.
    - acc: 1
      content: 「단, 나한테 상의도 없이 자율훈련을 한 벌로 규칙 두 개를 추가할 거야.」
    - 「첫째, 나도 같이 달린다. 둘째, 나를 추월하면 안 된다.」
    - 스즈카는 분명 %YOU%의 의도를 이해하지 못했다. 하지만 결국 달리고 싶은 마음이 속의 의심을 눌렀다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그럼…… 부탁드릴게요.」
    - 이렇게 %YOU%은(는) 스즈카를 아무도 없는 훈련장으로 데려갔다.
    - %YOU%은(는) 평범한 조깅 속도로 달리기 시작했고, 스즈카도 얌전히 뒤를 따라 천천히 달렸다.
    - 하지만 곧 스즈카는 뭔가 이상하다고 느끼기 시작했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%이 너무 느려요! 저는 도주형 %UMA%인데 지금 %CALLNAME% 뒤를 달리고 있다니……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （괴로워. 추월하고 싶어. 마음껏 달리고 싶어!）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （으, 이제 쓸데없는 생각은 하지 말자. 생각하는 것도 체력을 쓰니까. 그런데 조금 피곤해지기 시작했어……）
    - acc: 1
      content: 「스즈카, 너무 빨라.」
    - 곁눈질로 보니 딴생각에 빠진 스즈카가 자신도 모르게 속도를 올리고 있어 말을 걸었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「죄, 죄송해요!」
    - 스즈카의 목소리에 이미 피로가 섞여 있는 걸 듣고 조금 기뻐졌다.
    - 이렇게 스즈카를 훈련장에서 몇 바퀴나 달리게 해 땀범벅이 될 때까지 계속했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아, 하아…… 지쳤어요…… %CALLNAME%은(는) 저렇게 편해 보이는데…… 왜 저는 이렇게 힘든 걸까요……」
    - %YOU%은(는) 스즈카를 옆에 앉혀 잠시 쉬게 했다.
    - acc: 1
      content: 「자, 스즈카. 다음에도 나 몰래 달릴 생각이야?」
    - 일부러 엄한 표정으로 꾸짖었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「으, 안 할게요. 죄송해요!」
    - 스즈카는 얼굴을 가리고 %YOU%의 시선을 정면으로 마주하지 못했다.
    - acc: 1
      content: 「좋아. 잘못을 인정했으니 지금부터 혼자 두 바퀴 달려도 돼.」
    - 스즈카의 귀가 쫑긋 섰다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말요? 해냈다!」
    - 스즈카는 그 자리에서 펄쩍 뛰더니 다음 순간에는 이미 주로 위에 있었다.
    - 밤어둠 속으로 유성처럼 사라지는 뒷모습을 보며 %YOU%은(는) 속으로 계산했다.
    - 이제 당분간은 %SEX%이(가) 몰래 달리고 싶은 마음을 억누를 수 있을 것이다.
