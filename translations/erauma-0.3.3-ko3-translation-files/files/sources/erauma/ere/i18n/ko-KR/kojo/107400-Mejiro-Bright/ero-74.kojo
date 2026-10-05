# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/107400-Mejiro-Bright/ero-74.kojo
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

# [번역 대상] join_3p_accept — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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
  - %YOU% の空いているほうの手をしっかり握り、上半身を肩に寄せる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그럼 저희…… 다 함께 가보실까요❤」

# [번역 대상] join_3p_force — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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
  - 口ではおとなしく聞いているのに、両手に妙な力が入り始めている。
  - 이런 상황이 되자, %YOU%도 %LOVER%의 의도를 알아차릴 수밖에 없었다.
  - %CHARA%는 숨을 깊이 들이쉬고는 다가와, 붙잡혀 있던 %YOU%의 팔을 부드럽게 해방해 주었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그럼 저희도 다 함께 가요～」

# [번역 대상] join_3p_reject — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
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
  - 両手をそっと重ね、少し遠慮がちに一礼すると、寂しげな後ろ姿で去っていく。
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
