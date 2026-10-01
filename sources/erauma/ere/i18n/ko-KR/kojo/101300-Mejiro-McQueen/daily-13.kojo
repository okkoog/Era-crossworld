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
              content: %CHARA%
            - 「좋은 아침이에요, %CALLNAME%. 함께 식당에서 아침 먹고 트레이닝하러 가볼까요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「평안하신가요! 오늘도 저희 사이의 계약이 처음 시작되었을 때의 열정을 유지해 봐요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「평안하시길. 오늘도 우아한 하루를 보내도록 해요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「메지로 가문의 숙원을 위해서라면, 무엇을 해야 하든 마다하지 않겠어요.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「몸가짐은 하루의 기본이죠. 자는 모습이 낮까지 남아있지 않도록 매일 아침 정성 들여 용모를 가꾼답니다.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「좋은 아침이에요. 멋진 하루를 보내기 위해 기운을 내 볼까요.」
    # STATUSNAME:1 = 徹夜
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「메지로 가문의 %UMA%면서 밤을 새우느라 지각할 뻔하다니, 정말 부끄러운 일이네요.」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하암~ 그러고 보니 어제 그 야구 경기 정말 대단했죠…… 아, 아무 말도 안 했어요! 정말로요!」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
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
              content: %CHARA%
            - 「오늘의 저도 메지로 가문의 영광을 이어가기 위해 노력하고 있답니다.」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오늘 트레이닝도 잘 부탁드려요, %CALLNAME%.」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
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
              content: %CHARA%
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
            content: %CHARA%
          - 「지금은 컨디션이 최고예요. 이것이야말로 메지로 가문의 %UMA%인 저다운 모습이죠!」
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「오늘은 활력이 넘치는군요. 자, %CALLNAME%, 어떤 강도의 트레이닝이라도 전부 받아들이겠어요!」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 오늘 어떤 트레이닝이 있나요? 평소보다 더 빠른 속도로 완수하는 모습을 보여드릴게요.」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「평소보다 컨디션이 좋은 것 같아요.」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「자, %CALLNAME%, 무엇부터 시작하면 될까요?」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「오늘도 열심히 트레이닝에 임하겠어요, %CALLNAME%.」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「죄송해요, %CALLNAME%. 오늘은 집중력이 조금 떨어지네요……」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「우우, 오늘은 왠지 의욕이 생기지 않아요……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「의욕을 내야 한다는 건 알지만, 몸이 따라주질 않는 것 같아요……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「메지로 가문의 %UMA%가, 이런 일로 쓰러질 리가……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「메지로 저택은 매우 넓어서, 어릴 적에는 길을 찾기 위해 인형으로 표시를 해두곤 했답니다.」
  # CFLAGNAME:66 = 募集状態
  - if: era.get('cflag:7:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%麦昆称呼船%는…… 왠지 모르게 우연히 알게 된 이후로 계속 저를 쫓아다니고 있어요.」
  - if: era.get('cflag:63:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%麦昆称呼狄杜%가 겉보기엔 저렇게 엄격해 보여도, 사실은 아주 다정한 분이랍니다.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「다음에 기회가 된다면 티타임을 즐기러 오시지 않겠나요? 메지로 가문의 방식대로 대접해 드릴게요.」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「다음에 같이 야구 경기를 보러 가지 않으실래요? 저의 그 품위없는 행동을 너그럽게 봐주실 수 있다면 말이죠……」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「우리 메지로 가문의 %UMA%들은 사적으로 각자 다양한 취미를 가지고 있으니, 그리 대단한 일은 아니랍니다.」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「이것을 제게 주시는 건가요? 정말 감사합니다. 메지로 가문의 너그러움을 보여줄 수 있는 답례를 꼭 준비해야겠어요……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%이 주신 선물, 소중히 간직할게요.」

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「願いが叶うよう、手順はきちんと最後まで済ませましょう。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレセンの歴史には、傷病で引退したウマ娘が数多くいると思うと、やはり怖くなりますわ。」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「池の浮きを見つめ、いつ魚がかかってもよいよう全神経を集中させる。それが釣りを鍛える真髄かもしれませんわね。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大きな魚ですこと。一緒に写真を撮りません？」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「夜の涼しい川辺を歩けば、気持ちがとても楽になりますわ。悩みも、しばらく忘れられますの」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「川辺の風は気持ちがよろしいですわね。今度はここで一緒に走ってみませんこと？」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どうしても出ないのでしたら、買い取ってしまいましょうか。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あら、テイオーさんはこのダンスマシンがお好きですのね。」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わたくしのぬいぐるみが欲しいですの？ もう、本人が傍にいるというのに。」

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
      - 勝利者ステージの練習のため、%YOU%とマックイーンはカラオケへ来た。
      - 「やっぱりマックイーンの声は天の声だな。」
      - 歌い終えたマックイーンを見て、%YOU%は思わず父親のような笑顔を浮かべた。
  # CFLAGNAME:57 = 拡張変数
  - if: era.get('cflag:13:57')?.love_40 === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「打ち込めーYATAKA！！」
      - 長く我慢していたマックイーンが、好きな球団の応援歌を全力で歌うのを、%YOU%は後ろから見ていた。
      - まあ……滅多に見られない、子供のようなマックイーンの姿だ。それだけでも価値がある。
  - if: era.get('love:13') > 75
    random: true
    lines:
      - 「風走らせたあの子に～♫」
      - 「やや熱い視線～♫」
      - なぜか、マックイーンとあの関係になってから、この二行を%YOU%が歌うと、いつも熱を帯びてしまう。
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Waiting for Tomorrow～♫」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「少しずつ進めばいいよ～♫」
      - 軽やかな伴奏と、マックイーンの優しい声が溶け合う。
      - 何とも言えないほど、心地よい。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メ……メジロ家の%YOUNG_LADY%たるものが、こんなもので怯えるなど……！」
      - 冷や汗を流し、脚を震わせるマックイーンを見て、%YOU%は仕方なく%SEX%の手を取り、立っていられるようにした。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「恋愛映画、ですの……%CALLNAME%は意外と乙女心をお持ちなのですね。%CALLNAME%の恋愛観、伺ってみたくなりますわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好きな映画と申しますと、サスペンスでしょうか。優れた作品では、決着のあとに来る大逆転こそ、最も意外で嬉しいものですわ！」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、お食事のあと、食後のデザートを少々お願いしてもよろしいです？ 絶対に食べ過ぎませんわ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こちらの鍋のお肉は一級品ですわ。今度も通ってみませんこと？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これまで体重管理をしてきましたから、一ついただいてもよろしいですわよね？ では、いただきます！」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「申し訳ありません～ 少しお化粧をしておりまして。お待たせいたしました。今日はどちらへ参りましょうか？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これまで%CALLNAME%にご指導いただいた御礼に、今日はわたくしがお会計をいたしますわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「横断歩道では、手を繋いでいたほうが安心ですわね～」
  - if: era.get('love:13') >= 51
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こうしてみませんこと……ええ、手を繋いで。少し緊張いたしますわ。ファンに見つかったら……」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、お疲れですの？ 人の少ないところで膝枕でもいかが？」
      - 木陰のベンチで、マックイーンの優しい撫で方に目を閉じ、%YOU%は次第に力が抜けていった。

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お洋服、いかがです？」
      - マックイーンは更衣室の扉を開け、%YOU%の前で一回転した。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「デパートの一階は高級ブランドが入っていることが多く、品物も高価ですわ。ご案内いたしましょうか、%CALLNAME%？」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ご家族の先輩方も、重任を担うわたくしを見ていらっしゃるはずですわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「期待を寄せられるわたくしも、時には縛られる息苦しさを感じますの。」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「学園の中で手を繋ぐですって？ 万一、クラスメイトに見つかったらどうなさいますの……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「たくさんの視線を感じてしまいますわ。落ち着いて、落ち着いて……」

s_r_lunch:
  - random: true
    lines:
      - 今日はマックイーンと屋上へ上がり、%SEX%が持ってきた弁当を%YOU%と分け合った。
      - あれこれ疲れ果てた%YOU%は、まるで救いの藁のようにかき込んだ。
  - random: true
    lines:
      - 昼食を終えたばかりなのに、マックイーンは%YOU%の肩に寄りかかったまま動かない。もう眠くなったのか。
      - 身動きが取れなくなった%YOU%は、起こさないよう、そのままの姿勢を保った。
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、あーん」
      - あの一線を越えてから、食事の時間まで、いつの間にかゆっくりになっている。
      - マックイーンが一匙ずつ%YOU%に食べさせてくれるせいだろう。
      - 慣れてきた%YOU%も、微笑んでその世話を受けている。

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「으음, 전 파르페를 먹고 싶다구요.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「長年一人暮らしですと、料理が面倒になりますの？ わたくしがいれば、%CALLNAME%はそうは思いませんでしょう？」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「일전에 고용인분에게 요리 기술을 조금 배워왔답니다. 그래서 오늘은 제가 직접 만든 도시락을 가져왔는데, 한번 드셔보실래요?」

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「메지로 가문의 %UMA%라고 해서 모든 걸 다 알고 있는 건 아니랍니다.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
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
            content: %CHARA%
          - 「야구 경기 녹화 테이프를 가져왔어요. 같이 야구 중계를 보지 않으실래요?」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
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
            content: %CHARA%
          - 「세상에, 괴물의 패턴을 완전히 꿰뚫고 계시네요. 마치 손바닥 위에서 가지고 노는 것 같아요. 정말 대단해요!」
      - %YOU%의 능숙한 조작 실력을 본 곁의 맥퀸은 놀라움에 입을 다물지 못했다.
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「저희의 일심동체를 시험하는 이런 게임이라면, 반드시 클리어해 보이겠어요.」
      - 익숙하지 않은 솜씨의 맥퀸이었지만 열심히 컨트롤러를 조작하며 %YOU%과 함께 2인용 게임에 열중했다.

# ジュニア級
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
