# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file メジロマックイーン - 日常
# @author 伊兰
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「좋은 아침이에요, %CALLNAME%. 함께 식당에서 아침 먹고 트레이닝하러 가볼까요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「평안하신가요! 오늘도 저희 사이의 계약이 처음 시작되었을 때의 열정을 유지해 봐요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「평안하시길. 오늘도 우아한 하루를 보내도록 해요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「메지로 가문의 숙원을 위해서라면, 무엇을 해야 하든 마다하지 않겠어요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「몸가짐은 하루의 기본이죠. 자는 모습이 낮까지 남아있지 않도록 매일 아침 정성 들여 용모를 가꾼답니다.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「좋은 아침이에요. 멋진 하루를 보내기 위해 기운을 내 볼까요.」
    # STATUSNAME:1 = 徹夜
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「메지로 가문의 %UMA%면서 밤을 새우느라 지각할 뻔하다니, 정말 부끄러운 일이네요.」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「하암~ 그러고 보니 어제 그 야구 경기 정말 대단했죠…… 아, 아무 말도 안 했어요! 정말로요!」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「정말 죄송해요. 어제 제시간에 잠들긴 했습니다만, 골드 쉽 씨가 나오는 악몽을 꾸는 바람에…… 생각만 해도 소름이 돋네요……」

select:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = 馬跳S
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「오늘의 저도 메지로 가문의 영광을 이어가기 위해 노력하고 있답니다.」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「오늘 트레이닝도 잘 부탁드려요, %CALLNAME%.」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「저를 찾으셨나요, %CALLNAME%?」
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      random: true
      lines:
        - 「잠들었네……」
        - 트레이닝실에서 깊이 잠든 맥퀸을 바라보며, %YOU%의 마음은 조금 복잡해졌다.

good_night:
  sync: true
  lines:
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      lines:
        - if: era.get('status:13:39') === 0
          content: 「정말, 무리하기는……」
        - %YOU%은(는) 기력을 모두 소진해버린 맥퀸을 공주님 안기 자세로 조금 힘들게 들어 올려 기숙사 건물 아래까지 데려다주었다.
        - 「어쨌든 이녀석을 방까지 데려다주는 건 부탁할게.」
        - 사감은 고개를 끄덕이며 조심스럽게 맥퀸을 건네받았다.
        - 짐을 내려놓은 %YOU%은(는) 숨을 크게 들이마시고는, 불이 환하게 켜진 학생 기숙사를 뒤로한 채 자신의 숙소로 발걸음을 돌렸다.
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 메지로 맥퀸
            - 「수고하셨어요, %CALLNAME%. 내일 봬요!」
        - 드디어 하루를 마친 %YOU%은(는) 기숙사 건물 입구 앞에 서서 맥퀸이 기숙사로 들어가는 것을 배웅했다.
        - %YOU%은(는) 손을 흔드는 메지로 맥퀸을 보며 미소와 함께 같이 손을 흔들어 주었다.
        - 메지로 맥퀸이 건물로 들어가 더 이상 모습이 보이지 않게 되어서야 %YOU%은(는) 몸을 돌려 자신의 숙소로 향했다.


talk:
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「지금은 컨디션이 최고예요. 이것이야말로 메지로 가문의 %UMA%인 저다운 모습이죠!」
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「오늘은 활력이 넘치는군요. 자, %CALLNAME%, 어떤 강도의 트레이닝이라도 전부 받아들이겠어요!」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「%CALLNAME%, 오늘 어떤 트레이닝이 있나요? 평소보다 더 빠른 속도로 완수하는 모습을 보여드릴게요.」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「평소보다 컨디션이 좋은 것 같아요.」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「자, %CALLNAME%, 무엇부터 시작하면 될까요?」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「오늘도 열심히 트레이닝에 임하겠어요, %CALLNAME%.」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「죄송해요, %CALLNAME%. 오늘은 집중력이 조금 떨어지네요……」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「우우, 오늘은 왠지 의욕이 생기지 않아요……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「의욕을 내야 한다는 건 알지만, 몸이 따라주질 않는 것 같아요……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「메지로 가문의 %UMA%가, 이런 일로 쓰러질 리가……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「메지로 저택은 매우 넓어서, 어릴 적에는 길을 찾기 위해 인형으로 표시를 해두곤 했답니다.」
  # CFLAGNAME:66 = 募集状態
  - if: era.get('cflag:7:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「%CALL_7%는…… 왠지 모르게 우연히 알게 된 이후로 계속 저를 쫓아다니고 있어요.」
  - if: era.get('cflag:63:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「%CALL_63%가 겉보기엔 저렇게 엄격해 보여도, 사실은 아주 다정한 분이랍니다.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「다음에 기회가 된다면 티타임을 즐기러 오시지 않겠나요? 메지로 가문의 방식대로 대접해 드릴게요.」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「다음에 같이 야구 경기를 보러 가지 않으실래요? 저의 그 품위없는 행동을 너그럽게 봐주실 수 있다면 말이죠……」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「우리 메지로 가문의 %UMA%들은 사적으로 각자 다양한 취미를 가지고 있으니, 그리 대단한 일은 아니랍니다.」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「이것을 제게 주시는 건가요? 정말 감사합니다. 메지로 가문의 너그러움을 보여줄 수 있는 답례를 꼭 준비해야겠어요……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「%CALLNAME%이 주신 선물, 소중히 간직할게요.」

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「소원이 이루어질 수 있도록, 절차를 하나하나 정성껏 함께 마쳐보도록 해요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「트레센의 역사 속에서 수많은 우마무스메들이 부상으로 은퇴했다는 사실을 생각하면, 역시 조금 무서워지네요.」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「연못 너머의 찌를 바라보며, 물고기를 낚기 위해 매 순간 전념하며 자신을 단련하는 것. 그것이 아마 낚시의 정수가 아닐까 싶네요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「정말 큰 물고기네요. 물고기를 들고 같이 사진을 찍어볼까요?」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「밤의 시원한 공기를 마시며 강변을 산책하면 기분이 아주 상쾌해져요. 고민거리들도 잠시 잊어버리게 되고요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「강바람이 정말 기분 좋네요. 다음에 여기 오면 같이 가볍게 달려보지 않으실래요?」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「뽑히지 않는다면, 그냥 통째로 사버리는 건 어떨까요?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「어머나, 테이오 양은 이 댄스 게임기를 아주 좋아하는 모양이네요.」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「제 인형을 뽑고 싶으신 건가요? 정말이지, 진짜가 이렇게 옆에 있는데 말이에요.」

# [번역 대상] o_s_drawing
o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「自分が強運だと想像できれば、良いものが当たるはずですわ。」
  - %YOU%から抽選券を受け取ったマックイーンは、期待を込めて回し始めた。
  - ぐるぐるぐる……
  - 盤の中の小球が落ちるまで、マックイーンの手は止まらない。
  - if: d.hot_spring === 1
    random: true
    lines:
      - 目を輝かせたマックイーンが、%YOU%の前まで歩いてくる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、温泉旅行券が当たりましたわ！」
      -
      - acc: 1
        content: 「おめでとう！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メジロ家にも上質な温泉宿はございますけれど、%CALLNAME%がいらっしゃるなら、普通の暮らしのほうがよろしいですわね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それで、いつこの券を使いましょうか？ 期限はないようですわよ？」
      -
      - acc: 1
        content: 「マックイーンが卒業してからの息抜き、というのはどうだ？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「確かにそうですわね。では%CALLNAME%、この券は大切に保管してくださいませ。」
      - そう言ってマックイーンは温泉旅行券を渡し、%YOU%は何度か撫でてから、丁寧に財布へしまった。

o_s_ktv:
  - random: true
    lines:
      - 위닝 라이브 연습을 위해, %YOU%과 맥퀸은 카라오케를 찾았다.
      - 「역시 맥퀸의 목소리는 천상의 목소리구나.」
      - 맥퀸의 노래를 다 들은 %YOU%은(는) 자신도 모르게 인자한 아버지 같은 미소를 지었다.
  # CFLAGNAME:57 = 拡張変数
  - if: era.get('cflag:13:57')?.love_40 === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「날려버려라— 야타카!!」
      - %YOU%은(는) 뒤에서 그동안 참아왔던 갈증을 해소하듯 좋아하는 야구팀 응원가를 열창하는 맥퀸의 모습을 지켜보았다.
      - 뭐…… 평소에 보기 힘든 맥퀸의 아이 같은 모습을 볼 수 있었으니 나름대로 가치 있는 시간이었다.
  - if: era.get('love:13') > 75
    random: true
    lines:
      - 「바람을 몰던 그 아이에게~ ♫」
      - 「조금 뜨거운 시선~ ♫」
      - 왠지 모르게 맥퀸과 깊은 사이가 된 이후로, %YOU%은(는) 노래를 부를 때 이 가사 대목만 나오면 유독 열정적으로 부르게 되었다.
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「Waiting for Tomorrow~ ♫」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「조금씩이라도 나아가면 돼~ ♫」
      - 경쾌한 반주와 맥퀸의 부드러운 목소리가 하나로 어우러졌다.
      - 실로 더할 나위 없는 즐거움이었다.

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「메…… 메지로 가문의 %YOUNG_LADY%로서, 고작 이런 것에 겁먹을 리가……!」
      - 식은땀을 흘리며 다리를 후들거리는 맥퀸을 본 %YOU%은(는) 어쩔 수 없이 %SEX%의 손을 잡아주어 중심을 잡을 수 있게 도와주었다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「연애 영화라니…… %CALLNAME%은 의외로 소녀 감성이 풍부하시네요. 실례가 안 된다면 %CALLNAME%의 연애관은 어떤지 여쭤봐도 될까요?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「제가 좋아하는 영화 장르를 꼽자면, 아마 미스터리물일 거예요. 좋은 영화라면 사건이 일단락된 후에 나타나는 대반전이 가장 의외이면서도 즐거운 법이니까요!」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「%CALLNAME%, 식사를 마친 후에 디저트를 조금만 먹어도 될까요? 절대로 많이 먹지 않겠어요!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「이 샤브샤브 가게의 고기는 정말 최상급이네요. 다음에 또 오지 않으실래요?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「그동안 체중 관리를 열심히 했으니 한 번쯤은 괜찮다구요? 그렇다면 사양 않고 먹어보겠습니다!」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「죄송해요~ 화장을 조금 하느라 기다리게 해버렸네요. 오늘은 어디로 갈까요?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「그동안의 가르침에 대한 보답으로, 오늘은 제가 대접하게 해주세요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「길을 건널 때는 역시 손을 잡고 가는 게 마음이 놓이네요~」
  - if: era.get('love:13') >= 51
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「우리 한번 이렇게 해보는 건 어떨까요…… 네, 손을 잡는 거요. 팬분들에게 들키면 어쩌나 싶어서 조금 긴장되긴 하지만요.」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「%CALLNAME%, 걷다가 지치셨나요? 그럼 사람 없는 곳을 찾아서 무릎베개를 해드릴까요?」
      - 이윽고 나무 그늘 아래 벤치에서, %YOU%은(는) 맥퀸의 부드러운 손길을 느끼며 눈을 감고 서서히 몸의 긴장을 풀었다.

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「이 옷, 어떤가요?」
      - 맥퀸은 탈의실 문을 열고 나와 %YOU% 앞에서 가볍게 한 바퀴를 돌았다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「백화점 1층은 보통 고급 브랜드들이 입점해 있어서 상품들이 꽤 비싼 편이랍니다. 제가 한번 구경시켜 드릴까요, %CALLNAME%?」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「가문의 선배님들도, 중책을 맡은 저를 분명히 지켜보고 계시겠죠.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「때로는 모두의 기대를 한 몸에 받는 것이 속박처럼 느껴져 숨이 막힐 때도 있답니다.」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「교내에서 손을 잡다니요? 만약 친구들에게 들키기라도 하면 어떡하려고요……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「사람들이 우리를 많이 쳐다보는 것 같아요. 진정해야 해, 진정……」

s_r_lunch:
  - random: true
    lines:
      - 오늘은 맥퀸과 함께 옥상에 올라갔다. 맥퀸은 도시락을 가져와 %YOU%과 함께 나누어 먹었다.
      - 여러 가지 업무로 지쳐있던 %YOU%은(는) 구원의 동아줄을 잡은 듯이 도시락을 허겁지겁 먹어 치웠다.
  - random: true
    lines:
      - 방금 같이 점심을 다 먹었을 뿐인데, 맥퀸은 %YOU%의 어깨에 기댄 채 움직이지 않았다. 벌써 잠이 솔솔 오는 걸까?
      - 어깨를 움직이기 힘들어진 %YOU%은(는) 잠시 멍하니 자세를 유지하며 맥퀸이 깨지 않기를 바랐다.
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「%CALLNAME%, 아~ 하세요.」
      - 그 관계를 넘어선 이후로, 어느덧 식사 시간조차 느긋하게 흐르게 되었다.
      - 아마도 맥퀸이 한 숟가락씩 %YOU%에게 직접 먹여주는 탓이리라.
      - 하지만 어느덧 익숙해진 %YOU%도 미소를 지으며 맥퀸이 주는 음식을 받아먹었다.

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「으음, 전 파르페를 먹고 싶다구요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「오랫동안 혼자 지내서 요리하는 게 귀찮으시다고요? 제가 곁에 있어도 여전히 그렇게 생각하실 건가요?」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「일전에 고용인분에게 요리 기술을 조금 배워왔답니다. 그래서 오늘은 제가 직접 만든 도시락을 가져왔는데, 한번 드셔보실래요?」

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 메지로 맥퀸
      - 「메지로 가문의 %UMA%라고 해서 모든 걸 다 알고 있는 건 아니랍니다.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 메지로 맥퀸
      - 「그러니 %CALLNAME%, 저를 지도해 주세요.」

office_rest:
  - random: true
    lines:
      - 잠깐 피곤해서 눈을 붙였을 뿐인데 그만 잠이 들어버리고 말았다.
      - 어깨에 닿는 이질적인 느낌에 %YOU%이 옆을 돌아보니, 메지로 맥퀸이 곤히 잠들어 있었다.
      - 결국 %YOU%은(는) 차마 깨우지 못하고 그 상태로 몇 분을 더 머물렀다.
  - random: true
    lines:
      - 「조심…… 움직이지 마, 그래……」
      - %YOU%은(는) 무릎 위에서 얼굴이 붉어진 맥퀸은 아랑곳하지 않고, 면봉으로 %SEX%의 귀를 파주었다.
      - 다만 인간의 귀와 비교했을 때, 우마무스메의 귀가 주는 감촉은 조금 기묘했다……
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「야구 경기 녹화 테이프를 가져왔어요. 같이 야구 중계를 보지 않으실래요?」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「제 무릎베개가 좋으신가요? %CALLNAME%만 좋으시다면 언제든 이렇게 해드릴 수 있답니다.」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - 「맥퀸, 이리 와서 한번 안아보자.」
      - 맥퀸의 허락을 받은 후, %YOU%은(는) 맥퀸의 몸을 꽉 끌어안으며 %SEX%의 머리카락에서 나는 향기를 탐욕스럽게 들이마셨다.
      - 친밀한 담당과 이렇게 붙어있는 것보다 더 행복한 일은 없을 것이다.

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「세상에, 괴물의 패턴을 완전히 꿰뚫고 계시네요. 마치 손바닥 위에서 가지고 노는 것 같아요. 정말 대단해요!」
      - %YOU%의 능숙한 조작 실력을 본 곁의 맥퀸은 놀라움에 입을 다물지 못했다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 메지로 맥퀸
          - 「저희의 일심동체를 시험하는 이런 게임이라면, 반드시 클리어해 보이겠어요.」
      - 익숙하지 않은 솜씨의 맥퀸이었지만 열심히 컨트롤러를 조작하며 %YOU%과 함께 2인용 게임에 열중했다.

# ジュニア級
# [번역 대상] birthday1
birthday1:
  title: 初めての誕生日
  lines:
    - マックイーンの誕生日当日のトレーナー室では、居合わせたメジロ家の%UMA%が申し合わせたように静かに席につき、視線を同じ場所へ向けていた。
    - %THEY%が見ている先は、もちろん今日の主役だ。
    - %YOU%は両手を、目隠しをしたマックイーンの肩に置き、ゆっくり大テーブルの前まで案内した。
    - acc: 1
      content: 「よし。」
    - %YOU%が目隠しを外すと、大テーブルのそばに座っていたメジロ家の%UMA%が一斉に声を上げた。
    - content:
        - fontWeight: bold
          content: みんな
        - 「マックイーン、お誕生日おめでとう！！！！！！」
    - 目に入ったのは、いちばん馴染み深いメジロ家の姉妹たちと、飾り立てられた壁。横断幕には「メジロマックイーンお誕生日おめでとう！」の文字がはっきりとあった。
    - マックイーンは少し驚き、それから甘く微笑んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさま、ありがとうございます。」
    - マックイーンが座ると、微笑みを浮かべたラモーヌが手紙を渡した。
    - color: %COLOR_86%
      content:
        - fontWeight: bold
          content: %RAMONU%
        - 「お祖母さまからのお手紙よ。」
    - その言葉にマックイーンはすぐに耳を立て、手紙を受け取って開封し、丁寧に読み始めた。
    - 入学して初めての誕生日を祝うこと、メジロ家の悲願を改めて述べること、学園ではしっかり鍛えるように、と……
    - しばらくして、%SEX%は手紙をきちんと折りたたんだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メジロの栄光は、わたくしが継いでまいりますわ。」
    - acc: 1
      content: 「とりあえず、まずは誕生日を楽しく過ごそう。」
    - マックイーンは少し驚いて後ろの%YOU%を見、本能的に手紙の内容を隠した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわね。」
    - %SEX%は手紙をしまい、表情が一気に明るくなる。
    - 誕生日の歌を歌い、願い事をし、ケーキを分け合う流れを経て、今日もマックイーンの誕生日を祝って終わった。

birthday2:
  title: 二年目の誕生日
  lines:
    - この週のマックイーンの誕生日、%YOU%はマックイーンを自分のアパートへ連れてきた。
    - acc: 1
      content: 「ここに座って。本でもテレビでもいい、とにかく動かないでくれ。」
    - %YOU%はそう言ったが、マックイーンは小さく呟いてから、その頼みを聞いた。
    - 数分後、%YOU%が両手でメロンパフェを厨房から運び出し、マックイーンの前にきちんと置いた。
    - %YOU%はパフェを睨むマックイーンの目を面白がりながら、笑って%SEX%の向かいへ座った。
    - 「今日の主役を祝うために、特別に作ったパフェだ。」
    - その一言が安心材料になったのか、%SEX%は長いスプーンを手に取り、なかなか口をつけない。
    - %SEX%の表情も、迷い始めている。
    - acc: 1
      content: 「太るのが心配か？ 材料は低カロリーを基本にしてあるよ。」
    - %YOU%は首を傾げてマックイーンを見た。
    - マックイーンは首を横に振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ、%CALLNAME%が自ら作ってくださったパフェですもの、こうも簡単に食べてしまうのが惜しくて。」
    - acc: 1
      content: 「普段も作らないわけじゃないが、迷っているうちに溶けてしまうぞ。」
    - %YOU%の言葉を聞いて、マックイーンは片手にパフェ、片手にスプーンを持ち、慎重にアイスクリームを少しすくって、口の中で味わった。
    - それから頬を押さえ、極上の味に出会ったときのような甘い表情を浮かべる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%のパフェは、やはりどのスイーツ店より美味しいですわ。」
    - それでも%SEX%は、一匙ずつ丁寧に味わい続けた。
    - %YOU%も%SEX%の享受する顔を眺めながら、一緒に時間を溶かした。

# [번역 대상] birthday3
birthday3:
  title: 三年目の誕生日
  lines:
    - マックイーンの誕生日の夜。
    - 目隠しをしたマックイーンを、%YOU%がトレーナー室へ案内する。
    - 布を外した瞬間、トレーナー室にいたマックイーンの友人たちが一斉に声を上げた。
    - content:
        - fontWeight: bold
          content: みんな
        - 「マックイーン、お誕生日おめでとう！！！！！！」
    - それだけでなく、左右からクラッカーが鳴った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさま……」
    - これほど盛大な場に、マックイーンは口を押さえて感動を隠そうとする。
    - acc: 1
      content: 「今夜は肩の力を抜いて、思いきり休もう。」
    - %YOU%はマックイーンの手を引き、%SEX%と一緒にケーキの前へ座った。
    - あとはお決まりの、誕生日の歌と願い事。
    - 贈り物の番では、誰もがマックイーンに品を渡したが、%YOU%だけがまだだった。
    - %YOU%は机の引き出しを開け、何かを取り出した。
    - 「今の時期には、少し場違いかもしれない。」
    - %YOU%はマックイーンに贈り物を見せた。
    - ——紙で作った天皇賞（春）の盾。
    - 「今月が天皇賞（春）だ。とにかく、勝ちを祈っている。」
    - 目の前のマックイーンは両手で盾を持ち、少し間を置いてから口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当に、お馬鹿さんですわね、%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「期待していてください——本物の天皇賞の盾を、持ち帰ってみせますわ。」
    - マックイーンは決意の表情で、%YOU%が贈った「盾」を撫でた。
    - acc: 1
      content: 「とにかく、まずは誕生日を楽しもう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわね。」
    - その盾を机に置いたあと、%YOU%とマックイーンはすぐに誕生日を祝う人々の輪へ戻った。
