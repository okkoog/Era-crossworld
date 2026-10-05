# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file メジロブライト - 調教
# @author KUN
join_3p:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아…… %CALLNAME%과…… %CALL_LOVER%?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「분명, 저도 이런 거 하고 싶었는데요……」
  - %CHARA%는 시무룩한 태도로 %YOU%과(와) %LOVER%의 앞에 서서, 불안한 듯 자신의 손가락을 만지작거렸다.
  - 옷 위로도 드러날 만큼 양다리를 교차하며 비벼대고 있었고, 미약하게나마 물소리가 흘러나왔다.
  - acc: 1
    key: accept
    content: 「그럼 우리 같이 하자」
  - acc: 2
    content: 「이번에는…… 좀 힘들겠어」

# [번역 완료] join_3p_accept
join_3p_accept:
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「난 상관없어～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「앗, 대단히 감사합니다!」
  - %YOU%의 빈손을 꼭 잡고, 상반신을 어깨에 기대어 온다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그럼 저희…… 다 함께 가보실까요❤」

# [번역 완료] join_3p_force
join_3p_force:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「안…… 되나요?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「얌전히, 계속 기다리고 있을게요……」
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「브라이트라면 괜찮아.」
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「%L_CALLNAME%도 불만 없지?」
  - 입으로는 얌전히 듣고 있지만, 두 손에는 묘하게 힘이 들어가기 시작한다.
  - 이런 상황이 되자, %YOU%도 %LOVER%의 의도를 알아차릴 수밖에 없었다.
  - %CHARA%는 숨을 깊이 들이쉬고는 다가와, 붙잡혀 있던 %YOU%의 팔을 부드럽게 해방해 주었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그럼 저희도 다 함께 가요～」

# [번역 완료] join_3p_reject
join_3p_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「안…… 되나요?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「얌전히, 계속 기다리고 있을게요……」
  - 두 손을 살며시 모으고 조금 조심스럽게 인사한 뒤, 쓸쓸한 뒷모습을 보이며 떠나간다.
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「나중에 꼭 보상해 줄 거지?」
  - color: %L_COLOR%
    content:
      - fontWeight: bold
        content: %LOVER%
      - 「그러지 않으면…… 나 화낼 거야.」
