# @file サイレンススズカ - 日常
# @author 牛蛙煲
# @author Claude (翻訳)
select:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = ウマ跳びS
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%, 준비 운동은 충분히 하고 있어요. 언제든 시작해도 괜찮아요.」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%, 제가 먼저 두 바퀴 정도 뛰고 올까요?」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%, 기분이 좋아 보이시네요. 계속 그런 좋은 기분이셨으면 좋겠어요.」
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - 「저기, 스즈카? ……」
        - %YOU%은(는) 부드럽게 스즈카를 깨우려 했지만, 스즈카는 깊이 잠든 모양이다.

good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALLNAME%이 저의 달리기 방식을 믿어주신다면, 저는 자신감을 가지고 끝까지 관철하겠어요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「서툰 일이라도…… %CALLNAME%이 곁에 있다면, 분명 극복할 수 있을 거예요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「가장 앞의 풍경…… 누구에게도 양보하지 않겠어.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「새벽 공기는 여전히 기분 좋네요…… %CALLNAME%, 서둘러 시작할까요?」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「아침 식사는 이미 마쳤답니다. 에너지를 제대로 섭취하지 않으면 훈련할 수 없으니까요.」
    # STATUSNAME:1 = 夜ふかし気味
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALLNAME%, 정말 죄송해요…… 어제 훈련이 끝난 뒤에, 밤바람이 너무 기분 좋아서 조금 더 달려버리는 바람에……」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALL_1%이(가) 눈 내리는 풍경 퍼즐을 선물해 줬는데, 너무 재미있어서 아침까지 맞추고 말았어요. 정말 죄송합니다……」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「어제 제시간에 침대에 눕긴 했지만, 오늘 훈련 내용을 생각하다 보니 조금 흥분해서 잠이 오질 않았어요……」

good_night:
  sync: true
  lines:
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - if: era.get('status:2:39') === 0
          content: 「저기, 스즈카? ……」
        - %YOU%은(는) 부드럽게 스즈카를 깨우려 했지만, 상대는 깊이 잠든 모양이다.
        - だから、自らスズカを抱えて寮の下まで運んだ。
        - acc: 1
          content: 「이번에도 폐를 끼쳤네요……」
        - %YOU%은(는) 스즈카를 %SEX%의 기숙사 사감에게 맡기고, 상대가 기숙사로 돌아가는 것을 배웅했다.
        - ため息をつく。次は、強度の加減に気をつけなければ。
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「여기까지 데려다주셔서 감사합니다, %CALLNAME%! 내일 봬요!」
        - %YOU% はスズカを寮の下まで送り、%CHARA% は微笑んで礼を述べた。
        - %YOU%도 스즈카를 향해 손을 흔들어 화답했다.
        - スズカが寮の奥へ消えるまで見送ってから、踵を返した。

good_night_sex:
  - 트레이닝이 끝난 뒤, %YOU%은(는) 여느 때처럼 스즈카를 기숙사 앞까지 배웅할 준비를 했다.
  - ところがスズカは、すぐにはついて来なかった。両腕を開き、%YOU% をきつく抱きしめた。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: 사일런스 스즈카
      - 「%CALLNAME%, 아직 드리고 싶은 말씀이 많아요. 벌써 헤어지고 싶지 않네요……」
  - 스즈카는 뺨을 %YOU%의 품 안에 완전히 파묻었고, 평소 얌전하던 꼬리도 살며시 %YOU%의 종아리를 휘감았다.
  - %YOU%은(는) 스즈카의 등을 토닥이며 잠시 생각에 잠겼다.
  - acc: 1
    key: sex
    content: 「좋아, 그럼 좀 더 같이 있어 줄게.」
    lines:
      - %YOU% はそっと顎を上げ、熱を帯びた瞳のなかで、%SEX%の唇に触れた。
      - どれほど経ったかわからないあと、ようやく唇が、名残を残して離れた。
      - 「スズカ、場所を変えよう。ここは、少し向かない」
      - 「스즈카, 장소를 옮기자. 여기는 적절하지 않아.」
  - acc: 2
    content: 「시간이 늦었어, 스즈카. 내일 트레이닝을 위해서라도 쉬어야 해.」
    lines:
      - if: d.check !== 2
        lines:
          - 拒む言葉を聞くと、スズカはすぐに腕を解いた。そして、そっと胸を拳で叩いた。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: 사일런스 스즈카
              - 「%CALLNAME%은 정말 분위기를 모르시네요……」
          - 말을 마친 스즈카는 작게 콧노래를 흥얼거리며 뒤돌아 떠났다.
          - %YOU%은(는) 뒷머리를 긁적이며 서둘러 뒤를 쫓았다.
      - if: d.check === 2
        lines:
          - 拒む言葉を聞いても、スズカはかえって強く抱きついた。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: 사일런스 스즈카
              - 「오늘은 그렇게 쉽게 %CALLNAME%을 보내주지 않을 거예요……」

talk:
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「저기, 조금 참지 못하고 달려보고 싶어지네요. 이제 시작할까요?」
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 지금 훈련하면 평소보다 두 배의 효과를 낼 수 있을 것 같아요.」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 지금 기분이 아주 좋아요. 오늘 훈련은 어떤 걸 할까요?」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「오늘은 어떤 코스에서 달리게 될까요? 기대돼요……」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「저기, 오늘 계획은 무엇인가요?」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「오늘도 평소처럼 열심히 해야겠네요.」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「으으, 기운이 나지 않네요. 어제 너무 오래 달린 걸까요……」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「조금 힘들지만…… 그래도 포기할 순 없어요!」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「전혀 의욕이 생기지 않아요……」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「몸이 무거워요…… 괜찮겠죠, 아마도?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「어제 %CALL_56%이(가) 부적으로 커다란 황금 도미를 선물해 줬는데, 어디에 둬야 할까요…… 으음……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALL_10%에게 단거리 레이스의 요령을 물어봤는데, %SEX%가 『Enjoy spirit desu⭐』라고 하더라고요…… 전혀 이해하지 못했어요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「사실 %CALL_18%은(는) 정말 재미있는 사람이에요. 어제 제가 %CALL_1%의 흉내를 내며 %SEX%를 선배라고 불렀을 때 말이죠…… 후후……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「도심은 어디나 높은 건물뿐이네요. 가끔은 어릴 적처럼 넓은 들판을 마음껏 달리고 싶어질 때가 있어요.」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「추억이 늘어날수록 눈앞의 풍경도 풍성해지네요…… 이제는 %CALLNAME%도 그 안에 있어요.」
  # FLAGNAME:2 = 現在の月
  - if: era.get('flag:2') >= 3 && era.get('flag:2') <= 5
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「오늘 아침 달리기를 할 때 길가에 핀 작은 꽃과 새싹을 봤어요. 덕분에 기분이 아주 좋아졌답니다.」
  - if: era.get('flag:2') >= 6 && era.get('flag:2') <= 8
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「여름 아침은 그렇게 덥진 않지만, 달리고 나면 머리에 작은 벌레들이 꼬여서 조금 힘드네요……」
  - if: era.get('flag:2') >= 9 && era.get('flag:2') <= 11
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「가을바람은 정말 시원하네요. 이런 바람을 맞으며 달리는 건 정말 멋진 일이에요.」
  - if: era.get('flag:2') >= 12 || era.get('flag:2') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「오는 길에 얼어붙은 호수를 봤는데, 왠지 그 위를 달려보고 싶다는 생각이 들었어요…… 위험하다는 건 잘 알지만, 그냥 생각만 해본 거예요.」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「저에게 주시는 선물인가요? 정말 감사합니다, %CALLNAME%!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「선물 감사합니다. 소중히 간직할게요.」

out_church:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「의외로 북적거리네요. 다들 꼭 이루고 싶은 소원이 있나 봐요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「정성을 다해 기도한다면 소원은 반드시 이루어질 거예요!」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「낚시는 조용히 기다려야 하네요. 달리기와는 정반대지만, 인내심이 아주 많이 필요하다는 점은 닮은 것 같아요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 빨리 보세요. 정말 큰 물고기예요.」

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「この感じ……とても、いいですね。次も、一緒に歩いていただけたら嬉しいです」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「저기, %CALLNAME%. 잠시 달리고 싶은데, 여기서 잠깐만 기다려 주실 수 있나요?」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%와 함께 산책하는 건 정말 행복한 경험이에요.」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「의외로 재미있네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「많은 선배님이 이걸로 위닝 라이브 훈련을 하신다고 들었어요.」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 저 인형 갖고 싶어요. 저 대신 뽑아주시면 안 될까요~?」

o_s_drawing:
  - 상점가에서 경품 추첨 이벤트를 하고 있다. %YOU%은(는) 스즈카가 관심을 보이는 듯하자, 이전에 얻은 추첨권 한 장을 %SEX%에게 건넸다.
  - 스즈카는 작은 목소리로 고맙다고 인사한 뒤, 약간 흥분한 모습으로 앞으로 다가갔다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 사일런스 스즈카
          - 「후후, 경품으로 당근을 많이 받았어요.」
      - 스즈카는 싱글벙글 웃으며 손에 든 결과지를 %YOU%에게 보여주었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 사일런스 스즈카
          - 「%CALLNAME%에게 조금 드리고, 스페쨩에게도 조금……」
      - 스즈카의 기분이 아주 좋아 보인다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 사일런스 스즈카
          - 「……으으, 참가상인 종이 티슈를 뽑아버렸어요……」
      - 스즈카는 약간 실망한 표정으로 경품을 챙겼다.

o_s_ktv:
  - %YOU%은(는) %CHARA%을(를) 데리고 노래방에 왔다.
  - 適当に数フレーズ歌ったあと、決まり悪くマイクを渡す。傍では、スズカが微笑んで待っていた。
  - content:
      - fontWeight: bold
        content: %CHARA%
      - 「홀로 올려다 본 밤하늘, 그저 고요하기만 한 세계~」
  - %YOU%은(는) 어느새 노래에 푹 빠져버렸다.

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「いい映画でした。次も、一緒に見に来たいです」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ふふ……%CALLNAME%がホラーを選ぶなんて。お化けを見たときの顔も、面白かったです」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「제가 어떤 영화를 좋아하냐고요? 음…… %CALLNAME%이 좋아하는 거라면 저도 다 좋아요~」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「前に、スペちゃんが連れてきてくれたんです。%SEX%は、美味しいお店を見つけるのが上手ですね」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「이 집 음식은 정말 맛있네요. 저도 모르게 과식해 버렸어요…… %CALLNAME%, 학원까지 천천히 걸어갈까요?」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「에? 왜 안 먹냐고요? %CALLNAME%을 보느라 넋을 잃고 있었거든요. 후후……」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「역시 조금 익숙하지 않은 걸까요……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%이 특별히 가고 싶은 곳이 있나요? 같이 가요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「다음에도 오늘처럼 같이 나와요.」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 제 손을 잡아주실 수 있나요? 이렇게…… 으음, 마음이 놓이네요……」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 부디 저와 계속 함께 걸어가 주세요. 앞으로도 계속 제 곁에 있어 주실 거죠?」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「다 좋아 보여서 결정하기 어렵네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「전에는 필요한 걸 사려고만 왔었는데, 오늘처럼 느긋하게 둘러본 적은 처음이에요.」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「그 풍경, 절대로 내어줄 수 없어. 절대로.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「다음엔 반드시 더 빠르게, 이전의 나보다도 앞서서 달릴 거야. 그 풍경을 위해서, 그리고…… %CALLNAME%을 위해서……」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「기분이 이상해요…… %CALLNAME%, 제 얼굴 엄청 빨갛죠? 타오르는 것 같은 기분이에요……」
  - random: true
    lines:
      - スズカは %YOU% の腕にしっかりしがみつき、顔を肩の後ろに隠した。

s_r_lunch:
  - %YOU%와 %CHARA%은(는) 옥상에서 도시락을 바꿔 먹기로 약속했다.
  - 스즈카의 도시락을 받은 %YOU%은(는) 훌륭한 색감과 맛있는 냄새에 홀린 듯 정신없이 먹기 시작했다.
  - スズカは %YOU% の弁当を丁寧に味わいながら、時おり、その食べっぷりを微笑ましそうに見つめていた。
  - 다 먹은 뒤, %YOU%은(는) 조금 부끄러워하며 빈 도시락 통을 스즈카에게 돌려주었다.

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%의 솜씨, 꽤 훌륭한걸요.」
      - 스즈카는 %YOU%의 요리 실력을 크게 칭찬했다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「私を入れる、とは……あの、私はニンジンではありません」
      - %YOU% が%SEX%の緑の耳カバーとオレンジの長い髪をニンジンに喩えたことに、スズカは抗議した。
  - if: era.get('love:2') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%와 함께 요리하니까 정말 따뜻하네요. 마치 부부가 된 것 같은 느낌이에요……」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 이 부분이 아직 잘 이해가 안 가요. 다시 한번 설명해 주실 수 있나요?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「では、続きをよろしくお願いします」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: 사일런스 스즈카
          - 「네, 이번에도 무사히 승리를 쟁취할게요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: 사일런스 스즈카
          - 「안심하세요. 승리를 %CALLNAME%에게 가져다 드릴게요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: 사일런스 스즈카
          - 「가장 앞의 풍경…… 누구에게도 양보하지 않겠어.」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「으음, 어제 잠은 충분히 잤거든요. 낮잠 같은 건…… 네, %CALLNAME%이 정 그렇게 말씀하신다면 조금만 잘게요……」
      - 勧められて、仕方なく横になったスズカは、五分も経たずに眠っていた。
      - %YOU%은(는) 스즈카의 평온한 잠자리를 지켜보며, 자신의 옷을 %SEX%의 몸 위에 살포시 덮어주었다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日は、少し疲れています……お昼を休ませてくださって、ありがとうございます」
      - 礼を述べると、スズカは目を閉じた。
      - 하지만 곧 %SEX%는 뺨을 붉게 물들인 채 눈을 떴다.
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あの、%CALLNAME%も、お休みになったほうが……い、いえ、見られていると恥ずかしい、というわけでは……」
  - if: era.get('love:2') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「역시 %CALLNAME% 곁에서 쉬는 게 더 편안하네요……」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 수고 많으셨어요. 같이 쉴까요? 제 무릎을 빌려드릴 수도 있어요.」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 한 번만 안아주실 수 있나요?」
      - 両腕を伸ばして抱擁を求めるスズカに、拒む気は起きなかった。一歩前へ出て、そっと%SEX%を抱く。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%, 기분 좋아요…… 오늘도 함께 쉬어요.」
      - 그렇게 %YOU%와 스즈카는 서로 맞닿은 채 낮잠 시간을 보냈다.

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「음, 조금 어렵네요…… 하지만 저와 %CALLNAME%이 힘을 합친다면 분명 할 수 있을 거예요……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「클리어했어요! %CALLNAME%은 정말 대단하시네요.」
      - 스즈카의 진심 어린 칭찬에 %YOU%은(는) 오히려 쑥스러워졌다.

valentine:
  - 어느 날, %YOU%은(는) 자신의 책상에서 무언가를 적고 있었다. 그때 갑자기 트레이닝실 문을 두드리는 소리가 들렸다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, 안에 계신가요?」
  - 스즈카의 목소리였다.
  - %YOU%은(는) 자리에서 일어나 스즈카를 위해 문을 열어주었다.
  - acc: 1
    content: 「스즈카, 무슨 일이야?」
  - 스즈카는 두 손을 등 뒤로 숨긴 채, 어리둥절해하는 %YOU%의 모습을 보며 입가에 살짝 미소를 띄웠다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, 해피 발렌타인이에요~」
  - 이어서 스즈카는 등 뒤에서 도시락 통 하나를 꺼냈다.
  - 스즈카가 천천히 포장을 열자, 정성스럽게 만들어진 딸기 찹쌀떡 두 개가 %YOU%의 눈앞에 나타났다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%이 어떤 디저트를 좋아하실지 몰라서, 결국 제가 제일 좋아하는 딸기 찹쌀떡을 만들어 왔어요. 부디 입에 맞으셨으면 좋겠어요!」
  - しばらくして、今日がバレンタインだと気づいた。
  - ぼんやりしている顔を見て、スズカはさらに嬉しそうに笑った。%SEX%は、いちご大福を無理にでも %YOU% の手へ乗せる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここで、召し上がってください。お味も、伺いたいので」
  - 말을 마친 스즈카는 멋대로 의자를 끌어다 앉고는 고개를 살짝 기울인 채 %YOU%을(를) 바라보았다.
  - acc: 1
    content: 「그럼, 고마워 스즈카. 잘 먹을게.」
  - 担当%UMA%に見つめられながらの食事は、落ち着かない。だから、言われるままに甘いものを口にした。
  - 気づかないうちに、一つ目のいちご大福は、きれいになくなっていた。
  - 결국 스스로도 의식하지 못한 사이에 첫 번째 딸기 찹쌀떡을 순식간에 먹어 치웠다.
  - 생각보다 자신의 담당은 달리기뿐만 아니라 디저트 만들기에도 상당한 실력을 갖추고 있었다.
  - %YOU%은(는) 옆에서 턱을 괸 채 넋을 놓고 바라보는 스즈카를 한번, 그리고 남은 딸기 찹쌀떡을 한번 번갈아 본 뒤 결정했다——
  - acc: 1
    content: 「스즈카도 직접 만든 거 맛 좀 볼래?」
    lines:
      - 역시 디저트는 나눠 먹는 게 제맛이다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「에? 제 걱정은 안 하셔도 돼요. %CALLNAME% 드리려고 만든 거니까요.」
      - 스즈카는 약간 당황하며 사양했다.
      - acc: 1
        content: 「자, 스즈카. 아~ 해봐.」
      - 多くは言わず、いちご大福を手に、ゆっくりと近づいた。
      - 逃げられないと悟ると、小さく口を開け、差し出された大福に歯を立てた。
      - acc: 1
        content: 「어때, 스즈카? 네 솜씨 정말 최고지?」
      - 스즈카는 고개를 휙 돌리며 짐짓 모른 척했다.
      - 그 모습에 %YOU%은(는) 떡을 든 손을 요리조리 움직여 다시 스즈카의 눈앞에 갖다 대었다.
      - そうしてしばらくふざけ合い、結局%SEX%にも、一つ丸ごと食べさせた。
  - acc: 2
    content: 「너무 맛있다. 하나 더 먹어야지.」
    lines:
      - スズカの菓子が忘れられず、二つ目もいただくことにした。
      - 一口目から、やはりすばらしい。
      - 二つ目も長くは残らず、きれいにお腹へ収まった。
      - 역시 첫 입부터 환상적인 맛이었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후후, %CALLNAME%이 드시는 모습도 참 귀엽네요.」
      - 視線に気づいて、微笑みながら言った。
      - 스즈카는 %YOU%의 시선을 눈치채고 미소 지으며 말했다.
  - 弁当箱を整え、スズカへ返した。
  - acc: 1
    content: 「스즈카의 요리 실력이 이렇게 좋을 줄은 몰랐어. 정말 최고야.」
  - 名残を残して、スズカを見る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そんなにお腹を空かせた目で見ないでください。私は、いちご大福ではありません」
  - 怒ったふりをして、頰を膨らませる。
  - 스즈카는 화난 척하며 볼을 빵빵하게 부풀렸다.
  - 「내 말은, 스즈카처럼 솜씨 좋은 사람이랑 같이 살게 될 사람은 정말 행복하겠다는 뜻이었어.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そんな冗談は、だめです。これ以上は、本当に怒ります」
  - また、照れた顔を見られた。代償は、%SEX%をなだめるのにずいぶん時間がかかったことだ。

halloween:
  - 오늘은 할로윈, 요괴와 유령들의 축제다.
  - トレーナー室へ来る途中、奇妙な姿を何体も見た。なかには、危うく跳ね上がりそうなものもあった。
  - それでも無事に部屋へ着き、次のメニューを組もうとする。
  - 組む、と言っても、もう頭はここになかった。
  - 引き出しのなかには、ある%UMA%のために用意した上質な菓子の袋がある。あとは、%SEX%が自ら届けてくれればいい……
  - 突然、戸が叩かれた。驚いて、危うくペンを落とすところだった。
  - 呼吸を整え、期待を込めて前へ出て、勢いよく戸を開ける——
  - acc: 1
    content: 「어서 와, 스즈……」
  - 하지만 문 앞에 서 있는 것은 스즈카가 아니었다.
  - content:
      - fontWeight: bold
        content: %UMA%A
      - 「사탕 안 주면 장난칠 거야!」
  - 무언가 괴물 분장을 한 귀여운 %UMA%이(가) 서 있었다.
  - 一瞬ぼんやりしてから、ようやく微笑みを作り、引き出しから用意していたばら売りの菓子を取り出した。
  - かなりの量を籠へ入れ、%SEX%は嬉しそうに一礼すると、隣のトレーナーの戸を叩きに走っていった。
  - 長い息を吐き、席へ戻る。
  - 이윽고 다시 문 두드리는 소리가 났다.
  - content:
      - fontWeight: bold
        content: %UMA%B
      - 「사탕 안 주면 장난칠 거야!」
  - またスズカではない。菓子を渡しながら、かなり落胆していた。
  - ハロウィンの夜は、だんだん終わりに近づく。部屋には何度も%UMA%が訪れた。いちばん待っていた相手だけが、まだ来ない。
  - 壁の時計の針が十二時に近づくのを見て、ため息をつき、片付けて出ようとした。
  - 바로 그때, 다시 한번 문 두드리는 소리가 들렸다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, 안에 계신…… 으아, 그냥 이름을 부르면 안 됐는데……」
  - 胸が軽くなり、急いで戸を開けた。
  - 문밖에는 마법사 분장을 한 스즈카가 서 있었다.
  - 스즈카의 안색이 붉게 상기되어 있고 숨이 약간 거친 것을 본 %YOU%은(는), 어쩔 수 없다는 듯 고개를 저었다.
  - acc: 1
    content: 「맞춰볼까? 스즈카, 너 또 뛰고 왔지?」
  - 스즈카는 멈칫하더니 얼굴이 더 붉어졌다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%, 죄송해요. 곧장 달려오려고 했는데, 저도 모르게 너무 멀리까지 달려버려서……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아 맞다, 그게…… 사탕 안 주면 장난칠 거예요……?」
  - %CHARA%은(는) 그제야 원래 목적이 생각난 모양이다.
  - 苦笑しながら引き出しを開け、用意していた上質な菓子の袋を取り出し、スズカへ渡した。
  - 올해의 할로윈도 그렇게 묘한 분위기 속에서 지나갔다.

forbid_running:
  title: 走るのは禁止です！
  lines:
    - acc: 1
      content: 「遅すぎる！ もう、許せる時間じゃない！」
    - %YOU% は、頭を下げているスズカを、かなり厳しく責めた。
    - もう深夜だ。額には薄い汗が残っている。明らかに、今しがた走って戻ってきた顔だった。
    - acc: 1
      content: 「コンビニへ行くと言って、何時間も帰ってこないのは、誰だ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すみません……今夜の月が、きれいすぎて……我慢できなくて」
    - acc: 1
      content: 「だめだ。重罪、許せん。三日間、走るのは禁止だ。家で、しっかり反省しろ」
    - 雷に打たれたように、スズカはその場へ力なく座り込んだ。
    - すぐに、%SEX%は飛びついて %YOU% の脚に抱きつく。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめです……それでは、生きていけません——」
    - 悲嘆するスズカには構わず、%SEX%に脚を抱かれたまま、一歩ずつ寝室へ進んだ。
    - スズカは素直に腕を解き、軽く身支度をして寝間着に着替える。%YOU% が横になってから、傍へ滑り込んできた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの……」
    - acc: 1
      content: 「だめだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まだ、何も言っていません」
    - acc: 1
      content: 「だめなものはだめだ、スズカ。本当に、心配なんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……わかりました。大人しくしていますから、%CALLNAME%、怒らないでください……」
    - 分が悪いとわかっているスズカは、横を向いて %YOU% に抱きつき、一緒に眠っていった。
    - divider: true
      content: 翌日
      position: left
    - 家へ入った瞬間、%YOU% は跳ね上がった。
    - 目の前に、ニンジンハンバーグの山があった。
    - acc: 1
      content: 「スズカ？ これは、全部お前が作ったのか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい。……暇だったので、気がついたら、たくさん作ってしまって」
    - divider: true
      content: 翌々日
      position: left
    - スズカが携帯を抱え、反時計回りにぐるぐる歩いている。
    - 画面には、トレーニング場の写真が映っていた。
    - acc: 1
      content: 「スズカ、何をしている」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーニング場の写真を見ながら歩いていれば……走っているつもりになれるかと」
    - 頭を掻く。この想像力を、褒めるべきかどうかはわからなかった。
    - divider: true
      content: そのまた翌日
      position: left
    - 家へ戻っても、スズカの姿がない。
    - 我慢できずに走っているのかと思ったが、寝室で、まだ眠っているスズカを見つけた。
    - acc: 1
      content: 「……一日中、寝ていたのか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「眠っていれば、一日は早く過ぎますから……」
    - 返す言葉が、見つからなかった。
    - divider: true
    - 三日は、もうすぐ終わる。寝室の戸口から、時計の前に座るスズカを、少し不思議そうに見た。
    - acc: 1
      content: 「おい、スズカ。こんな時間まで、起きているのか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あと一分五十八……一分五十七……」
    - 針がある時刻を指した瞬間、スズカはぱっと振り返った。目は高揚していて、そっと玄関の方へ体をずらしている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三日、経ちました。……少しだけ、走ってもいいでしょうか」
    - acc: 1
      content: 「……あと三日、伸ばそうか」
    - 言い終わるか終わらないかのうちに、スズカは玄関の傍から素早く離れた。
    - それから、%SEX%はそっと %YOU% に抱きついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%のために、三日も我慢したんです。……ご褒美、いただけませんか」
    - 胸に寄りかかり、少し赤くなって %YOU% を見上げる。
    - acc: 1
      key: sex
      content: 「わかった。我慢したことは、褒めてやる」
      lines:
        - それから、%YOU% はスズカを抱えたまま、寝室へ入った。
    - acc: 2
      content: 「だめだ。罰なのに、褒美まで欲しがるな」
      lines:
        - それを聞くと、スズカはすぐに腕のなかから抜け出した。
        - そして、もがく %YOU% を担ぎ上げると、寝室へと消えた。
