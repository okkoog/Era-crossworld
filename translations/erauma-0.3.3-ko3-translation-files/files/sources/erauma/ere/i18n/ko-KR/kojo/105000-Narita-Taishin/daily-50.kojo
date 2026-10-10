# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 완료] o_r_fishing
o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「낚시에서 중요한 건 침착함이야. 참고 기회를 기다리는 거지. 레이스 중반에 돌파구를 찾는 것과 같아.」
      - %CHARA%는 능숙하게 낚싯대를 들어 올려 물고기 한 마리를 낚았다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「낚시를 하고 있으면 자연과 하나가 된 것 같아. 주변에서도 날 알아채지 못하고. 이런 느낌이 좋아.」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「뭐? 아무도 모르는 건 물고기가 안 잡히기 때문 아니냐고?」


# [번역 완료] o_r_walking
o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「하아, 여기 공기 맑네. 기분 좋아졌어.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「저기 벤치에 앉자. 뭐야, 무릎베개라도 해 달라고?」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「또 걷어차이고 싶은 거야?」


# [번역 완료] o_s_arcade
o_s_arcade:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「리듬 게임, 같이 할래? 상관없지만 쉬운 곡으로 할 거야……」
  - 결국 쉬운 곡인데도 이런 게임을 해 본 적 없는 %YOU%은(는) 상대가 되지 못했다.
  - 반면 타이신의 화면에는 커다란 FULL COMBO가 떠 있었다.


# [번역 완료] o_s_drawing
o_s_drawing:
  - 계산을 마치고 돌아가려던 %YOU%을(를) 점주가 불러 세웠다.
  - 점주 「손님, 잠깐만요.」
  - 점주는 옆 테이블에서 작은 종잇조각을 꺼내 건넸다.
  - 점주 「서비스 추첨권입니다. 저쪽에서 뽑으시면 돼요. 행운을 빕니다.」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「추첨권인가. 요즘 게임 가챠 운이 나쁘니까 네가 뽑아, %CALLNAME%.」
  - 추첨권을 건넨 뒤 %YOU%은(는) 천천히 추첨기의 손잡이를 돌렸다……
  -
  - if: d.dice === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「이, 1등!? 드문 일이네.」
      - 점주 「축하합니다. 운이 좋으시군요. 자, 두 분이 함께 가실 수 있는 온천 여행권입니다.」
      - %YOU%은(는) 점주에게서 여행권을 받았다.
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「두 사람이 가는 온천 여행이네. 누구랑 갈지 정했어?」
      - 「……」
      - 「타이신이랑 같이 뽑았으니 타이신이랑 가야지!」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「뭐? 자, 잠깐 기다려!」
      - 「가기 싫은 거야?」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「그런 건 아니지만…… 정말, 너란 녀석은!」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「먼저 집에 이야기해야 하니까……」
      - 「그럼 같이 간다는 거지?」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「시끄러워!」
      - %YOU%은(는) 능숙하게 %CHARA%의 발길질을 피했다.
  - if: d.dice === 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「함박스테이크, 크네. 혼자선 다 못 먹겠어…… 같이 먹자, %CALLNAME%.」
      - %CHARA%와 함께 함박스테이크를 맛보았다.
  - if: d.dice === 2
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「무가 이렇게 많이…… 어떡하지. 돌아가면 하야히데랑 티켓 %THEY%와 나눠야겠어.」
  - if: d.dice === 3
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「당근? 마침 배고팠는데.」
  - if: d.dice === 4
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「쳇…… 없는 것보단 낫지.」
      - 그렇게 말해도 최하위 상품밖에 뽑지 못한 건 불운이라고밖에 할 수 없었다.


# [번역 완료] o_s_ktv
o_s_ktv:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「노래 부를래? 별로 자신은 없어. 우승 무대에서 부르는 정도가 한계야. 다음은 네 차례니까 불러, %CALLNAME%.」


# [번역 완료] o_s_movie
o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『떠들썩한 우리들의 경마장』. 지방의 우마 %UMA%가 주인공인 이야기네. 나쁘지 않겠어. 이걸로 할래.」
      - divider: true
        content: ⏰영화 종료 후⏰
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「영화라지만 각색이 너무 심한 거 아니야?……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『우주 끝까지』. 오랜만에 SF 영화를 보고 싶네. 이걸로 하자.」
      - divider: true
        content: ⏰영화 종료 후⏰
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「……왜 절반 넘게 연애 이야기인데. 칫, 제목에 속았어.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「『최후의 백기사』. 암흑의 시대에 금발의 %UMA%가 일어나 손에 든 창으로 어둠을 꿰뚫는다…… 있지, %CALLNAME%, 왜 기사야? 아무것도 타지 않았는데……」
      - %YOU%은(는) 갑자기 불길한 예감이 들어 %CHARA%의 손을 잡고 다른 영화로 바꿨다.

# 50 恋慕以上

# [번역 완료] o_s_restaurant
o_s_restaurant:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「잘 먹겠습니다.」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「응? 왜 이거밖에 주문 안 해?」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「둘이 먹을 거면 이걸로 충분하지. 이제 폭음폭식 안 해.」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「전에 네가 굳이 말해 줬잖아. 그러니까 나도 제대로 신경 쓰고 있어.」

# [번역 완료] office_game
office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「같이 게임하자고? 좋아. 져도 삐치지 마.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「대전 게임보다 혼자 하는 게임이 더 좋아. 그래도 너랑이라면 나쁘지 않지. 잠깐, 왜 실실 웃는 거야!」


# [번역 완료] office_prepare
office_prepare:
  - if: era.get('cflag:50:干劲') >= 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「아직 시작 안 해? 긴장한 게 아니야. 지금 컨디션이 좋아서 기회를 놓치기 싫을 뿐이야.」
  - if: era.get('cflag:50:干劲') <= -1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「벌써 시작인가…… 컨디션을 가다듬을 틈은 없네. 할 수 있는 건 다 해야지!」
  - if: era.get('cflag:50:干劲') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「컨디션? 뭐, 보통이야. 정해 둔 대로 달리면 돼.」


# [번역 완료] office_rest
office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「후우…… 이런 휴일도 필요하지. 너도 가끔은 쉬어, %CALLNAME%.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「적당한 휴식은 훈련 효과를 두 배로 만든다. 너도 하야히데도 비슷한 말을 했었지.」


# [번역 완료] office_study
office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「선생님은 『이론도 레이스의 일부다』라고 하시지만, 역사 수업이 레이스에 도움이 되기는 해?……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「성적이 나쁜 건 아니지만 특별히 눈에 띄지도 않아. 하야히데 녀석은 시험만 보면 항상 상위권이고…… 티켓? %SEX%의 성적은 나보다 낮을지도 몰라.」


# [번역 완료] s_a_dating
s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「오늘은 어디 데려갈 거야? 나한테 아이디어는 기대하지 마. 평소 가는 곳은 조용한 데뿐이라 데이트에는 안 어울리거든…… 같이 있으면 된다고? ……마음대로 해.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「있지, %CALLNAME%? 저기 괜찮은 꽃집이 있는데 같이 가 줘.」


# [번역 완료] s_a_tree_hollow
s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「다음 레이스는 반드시 이길 거야!」
  - if: era.get('cflag:50:育成回合计时') >= 48 && era.get('cflag:50:育成回合计时') < 144
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「그 녀석들에게 지금의 나를 똑똑히 보여 주겠어!」
  - if: era.get('love:50') >= 50 && era.get('love:50') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「왜 머릿속에 그 바보 생각만 가득한 거야!」


# [번역 완료] school_rooftop
school_rooftop:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「으음…… 여기서 낮잠 자는 것도 이제 숨길 수 없겠네. 뭐 됐어. 어차피 티켓 녀석이 조만간 소문낼 테니까.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「기분 좋은 바람이네. 조금만 더 여기 있고 싶어.」


# [번역 완료] select_after_recruit
select_after_recruit:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「담당 계약을 맺었다고 이걸로 끝이라고 생각하지 마.」
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「말했잖아. 날 이기게 할 방법을 찾아내겠다고.」
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - 「진심인지 빈말인지는 앞으로 3년 동안 증명해 봐.」


# [번역 완료] talk
talk:
  - if: era.get('base:50:体力') < era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「괜찮다니까. 쉴 필요 없어.」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「이 정도로 발걸음을 멈출 순 없지.」
  - if: era.get('base:50:体力') >= era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「컨디션은 뭐, 나쁘지 않아. 오늘 일정은?」
      - random: true
        if: era.get('love:50') >= 100 && era.get('cflag:50:育成回合计时') >= 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「요즘 어땠냐고?」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「으음…… 지난 3년 동안 정말 많은 일이 있었지.」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「승리도 패배도 내겐 모두 소중한 추억이야.」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「앞으로 어떻게 될지는 몰라. 그래도 네가 곁에 있다고 생각하면 안심이 돼……」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「잠깐, 그 표정은 뭐야!」
          - 순간 타이신의 행복한 미소가 부끄러움 섞인 노려봄으로 바뀌었다.
      - random: true
        if: era.get('love:50') >= 90 && era.get('status:0:熬夜') > 0
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「정신 좀 차려. 어제도 밤새웠지?」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「정말, 건강 조심하라고 몇 번이나 말해야 해.」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「자꾸 걱정시키지 마……」
      - random: true
        if: era.get('love:50') >= 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「자, 이거 가져왔어.」
          - 타이신은 %YOU%에게 캔 하나를 건넸다.
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「뭐? 단 음료만 마시면 살찐다고?」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「안 마실 거면 돌려줘.」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「그런 눈으로 보지 마. 체중 관리는 제대로 하고 있거든.」
      - random: true
        if: era.get('love:50') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「모바일 게임 신이벤트, 분량이 너무 많아. 밤새워야 다 끝낼 수 있을지도.」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「안 돼. 그런 일 때문에 훈련을 소홀히 할 수는 없어.」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「그래도 이번 한정 아이템을 놓치면 다음 기회까지 오래 걸린단 말이지.」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「크윽, 못 정하겠어……」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「이 기세라면 할 수 있어!」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「준비는 끝났어. 어서 시작하자, %CALLNAME%!」
      - random: true
        if: era.get('cflag:50:干劲') === 1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「컨디션? 뭐, 나쁘진 않아. 계획대로 하면 돼.」
      - random: true
        if: era.get('cflag:50:干劲') === 0 && era.get('cflag:50:育成回合计时') < 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「오늘 훈련은 뭐야? 평소대로?」
      - random: true
        if: era.get('cflag:50:干劲') === -1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「몸이 조금 피곤하지만 좀 더 버틸 수 있어.」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「젠장, 왜 다리가 이렇게 무거운 거야……」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「아니, 괜찮아. 훈련은 계속할 거야.」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「점점 따뜻해지네. 낮에는 어디서 잠깐 낮잠을 자야겠어.」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「봄이라…… 벚꽃이 필까? 시간 나면 공원이나 산책할래.」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「아, 더워…… 훈련 전부터 땀이 나네. 주변 사람들도 시끄러워서 더 덥게 느껴져.」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「여름이 되니 사방에서 매미 소리가 들리네. 여름답지만 가끔은 시끄럽단 말이지.」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「길 양옆에 낙엽이 쌓이면 가을이 왔다는 게 실감 나. 따뜻하게 입어야지.」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「가을 오후는 졸려. 오늘도 수업에서 선생님께 혼났어…… 뭐? 어젯밤엔 안 샜거든!」
      - random: true
        if: era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「겨울이 되어도 우리 집 꽃집은 바빠. 한 해의 잡일도 끝내고 내년 준비도 해야 하니까. 코타츠에서 귤만 까먹을 수는 없지.」
      - random: true
        if: era.get('love:50') >= 50 && (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2)
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「눈이다. 눈 오는 날은 집에 있고 싶어지네. 맛있는 전골이나 끓이고…… 응? 너도 먹고 싶어? 당연히 네 몫도 있지, 바보야.」

