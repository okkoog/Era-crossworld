# 번역 작업용 전체 원본 파일. [번역 대상]으로 표시된 함수/블록의 남은 원문만 번역합니다. 이미 한국어인 문구, 함수명, 변수, 조건, 치환 토큰은 유지합니다.
# 원본 경로: sources/erauma/ere/i18n/ko-KR/kojo/104700-Zenno-Rob-Roy/rec-47.kojo
# @file ゼンノロブロイ - 募集
# @author 某不思議なオオハシ
# @author Claude (翻訳)
# [번역 대상] rec1 — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
rec1:
  - 一瞬の光が、地平線を切り開くようだった。遠くから一目見ただけなのに、%YOU%にはわかった。あの崇高で野性的な走り、すべてを出し切る気配、ただひたすら前へ行く姿勢。
  - 그 번뜩이는 빛은, 마치 지평선을 가를 것만 같았다. 그저 멀리서 바라보았을 뿐인데도, %당신%은(는) 그 숭고하고도 거친 주법, 모든 것을 쏟아붓는 기백, 거침없이 나아가는 그 자태를 느낄 수 있었다.
  - acc: 1
    content: (영웅……)
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: (……조교할 가치가 있는 암컷……)
  - まあ、考えすぎるな。あれほどのウマ%UMA%なら、とっくに契約済みだろう。
  # FLAGNAME:15 = 名声
  - if: era.get('flag:15') < 500
    content: 얼른 데뷔전 자료를 정리하고, 신인 트레이너를 받아줄 만한 담당을 찾아보자.
  - acc: 1
    content: (하지만 난 여전히 그 달리기를 한 번 더 보고 싶어)
  - 午前いっぱい資料を整理しても、見込みのあるウマ%UMA%は見つからなかった。
  - if: era.get('flag:15') < 500
    content: 当然だ。見込みのあるウマ%UMA%は、経験の厚いトレーナーと契約したがる。トレーナーは何代もウマ%UMA%を持てるが、ウマ%UMA%の機会は一度きりだから。
  - acc: 1
    content: 「%Y_CALL_301% に借りた資料、返さないとな。図書館に直接返せばいいって言ってたっけ？」
  - %YOU%は図書館へ向かった。入職時に %Y_CALL_301% からトレセンの豪華な設備は聞いていたが、一フロアを占める図書館には、改めて中央だなと思わされる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: ？？？
      - 「저, 저기, 전…… 오늘 당번인 도서위원인데요, 혹시 곤란한 일이라도 있으신가요?」
  - %YOU%が振り返ると、小柄なウマ%UMA%がカウンターの横に座っていた。本の山が%SEX%の頭より高い。声をかけてくれなければ、ここにウマ%UMA%がいることすら気づかなかっただろう。
  - %SEX%が立ち上がって、ようやくトレセンの制服を着た小さなウマ%UMA%の顔が見えた。
  - %당신%이(가) 뒤돌아보니, 체구가 작은 %우마무스메%가 카운터 옆에 앉아 있었다. 책이 산더미처럼 쌓여 %그녀%의 머리를 가릴 정도였기에, %그녀%가 말을 걸지 않았다면 %당신%은(는) 이곳에 %우마무스메%가 있다는 사실조차 눈치채지 못했을 것이다.
  - acc: 1
    key: relation
    content: 「책을 반납하러 왔어」 (호감도+5)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「반납하시려고요? 반납하실 책을 제게 주시면 돼요……」
      - 司書は%YOU%の本を受け取り、カウンターの機械でスキャンしたあと
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「하야카와 씨가 대출하신 책이군요, 자칫하면 반납 기한을 넘길 뻔했어요.」
      - %SEX%は適当に数ページめくる
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「とても大切に扱われていますね。汚れひとつない……あなたも本が好きですか？新人トレーナーで、ウマ%UMA%のトレーニングの本を探しているなら、おすすめできますよ……私、よく図書館で本を読んでますから」
      - acc: 1
        content: 「그래도 될까?」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「그럼요…… 하지만 그 대신, 나중에 당신과 담당 우마무스메의 이야기를 제게도 들려주셔야 해요.」
  - acc: 2
    content: 「영웅을 찾으러 왔어」 (애정도+1)
    lines:
      - 도서위원이 움찔했다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「다, 당신도 영웅전기 같은 걸 좋아하시나요! 저도 영웅 서사시 같은 책을 정말 좋아해요. 역사적인 위업에 후세 사람들의 각색이 더해져, 허구와 진실이 뒤섞인 서사시야말로 신화적 색채를 지닌 진정한 영웅이라 부를 수 있죠!」
      - %YOU%は、急に話が止まらなくなった司書と、微かに震える耳を見て、この子は神話や民俗叙事詩が相当好きなのだと思った
      - %당신%은(는) 갑자기 말문이 터진 도서위원과 파르르 떨리는 귀를 보며, 이 소녀가 신화 전설이나 민속 서사시에 적잖은 흥미를 가지고 있다고 생각했다.
      - %YOU%は%SEX%を励ますつもりだったが、%SEX%の耳は急に垂れ、顔に緊張が広がった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「아…… 죄송해요…… 가, 갑자기 제멋대로 떠들어버려서. 민속 이야기는 이쪽에 있어요. 제가 안내해 드릴게요.」
      - %YOU%は %Y_CALL_301% から借りた本を、そっと返却用の山に置き、%SEX%の後ろについていった。
  - 司書は立ち上がり、該当の棚へ案内しようとする。そこで、まだ名前を伝えていなかったことを思い出し、慌てて%YOU%の方を向いた
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: ？？？
      - 「すみません……自己紹介を忘れていました。中等部の%CHARA%です。美浦寮に住んでいます。もし……英雄叙事詩のことで聞きたいことがあれば……私がお答えできます」
  - if: era.get('cflag:47:0') !== 1
    lines:
      - 振り返り方が急すぎたのか、身長に見合わない発育なのか。%TEEN%の胸のふくらみが、回転に合わせて揺れた。
      - このとき%YOU%は気づいた。%CHARA%というウマ%UMA%は、年齢にそぐわない低さだけでなく、年齢にそぐわない豊かな胸と腰も持っている
      - acc: 1
        content: (이 녀석, 키 클 영양분을 몸매에 다 쏟아부었나?)
      - acc: 2
        content: (훌륭한 가슴과 엉덩이, 다리까지. 완전 순산형 신붓감이네.)
      - %TEEN%は%YOU%の妙な考えと、あちこちに泳ぐ視線に気づいたらしく、軽く咳をした。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%は、どうして英雄譚の本をお探しなんですか？」
  - %YOU%は%SEX%に、あの日見た、心を揺さぶった光景を話した。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「光のように地平線を切り開く英雄……一目見ただけで、何か月も探すのですか？%CALLNAME%は、本当にロマンチックですね……」
  - 本棚の前で、%CHARA%は振り返る
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここが民俗文化の区画です……言いづらいのですが……学園で、あの英雄のようなウマ%UMA%を、一緒に探してもいいですか？」
  - %CHARA%は、少し興奮している？目が光り始めている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「저는…… 영웅 이야기에 대해 아주 잘 알고…… 학원 내에 아는 사람도 꽤 있어요…… 저도 그 영웅을 찾고 싶어요.」
  - acc: 1
    content: 「하지만 트레센 학생의 본분은 달리는 거잖아. 이렇게 나를 도와주면 네 트레이닝에 방해되지 않을까?」
  - %CHARA%は、その質問に少し言葉が縺れた
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だ……大丈夫です。トレーニングも司書の当番もありますけど、私……%CALLNAME%が『英雄』と呼んだウマ%UMA%を見てみたいんです。%SEX%が、なぜ英雄だと思われたのか……私も……私も……」
  - acc: 1
    content: 「저도?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「い……いえ、なんでもないです。とにかく、よろしくお願いします、%CALLNAME%……明日から情報を集めます……一週間後も私が当番なので、そのとき情報を交換しましょう……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - (저도…… 영웅이 되고 싶거든요.)

# [번역 대상] rec2 — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
rec2:
  # 中庭
  - %YOU%は約束どおり、図書館で%CHARA%と落ち合う。
  - 二人で学園中を英雄探ししていることは、もう広まっていた。黒縁眼鏡の小柄なウマ%UMA%と新人トレーナーが英雄を探している、と学園中が知っている。一緒に調べることも、分かれて動くこともある。認めざるを得ない。%CHARA%というウマ%UMA%の知識の広さは、大学を出た%YOU%を、ある面では超えている。
  - 慣れた足取りで門を入り、本の山を越えると、小柄なウマ%UMA%がまた耳を揺らしながら、何かを読んでいる。
  - acc: 1
    content: 「안녕, 약속대로 왔어, 도서관의 영웅.」
    lines:
      - 挨拶しても、%CHARA%は本から目を上げない。%YOU%に気づいていないらしい。
      - acc: 1
        content: (다가가서 %그녀%를 토닥인다)
      - %YOU%は背中を叩こうとしたが、届かない。肩も届かない。仕方なく、本に沈んでいる小さな頭をぽんと叩いた。なんというか、この子、髪の質がいい。
      - %CHARA%は首をかしげて顔を上げ、頭を叩いたのが%YOU%だと知る。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「え……%CALLNAME%。いつ来たのですか？また読み込んでしまって、すみません」
  - acc: 2
    content: 손을 뻗어 흔들거리는 커다란 귀를 두 번 쓰다듬는다.
    lines:
      - 감촉이 정말 좋네. 과연 롭 로이야.
      - %CHARA%は震え、険しい顔で手の方を向いたが、%YOU%だとわかると柔らかくなった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もう、%CALLNAME%……手引きに、ウマ%UMA%の耳と尻尾を勝手に触ってはいけないって書いてありませんか？他の人なら、警備を呼んで引きずり出しますよ」
  -
  - acc: 1
    content: 「이번엔 또 무슨 민속 이야기를 읽고 있었어?」
  - %CHARA%は首を振り、手の本を振って見せる
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これは私が集めた、あの『英雄』の情報です。まず、%CALLNAME%があのウマ%UMA%を見たのは自主トレの時間のはずです。その時間帯はたくさんのウマ%UMA%がトレーニング場を出入りするので、職員に借用記録を見せてもらっても、あのウマ%UMA%を特定するのは難しい……」
  - %CHARA%はノートに集めた情報を見せながら話す
  - acc: 1
    content: 「그럼 정말 방법이 없는 걸까?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「まだあります。%CALLNAME%の印象が十分なら、場に出て一目でわかるはずです」
  - acc: 1
    content: 「でも前に、トレーニング場で何日も座ったぞ。朝から晩まで。それでも、あのウマ%UMA%はもう一度も見られなかった」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「풉…… 학생들 사이에 돌던 『트레이닝 코스 관중석에 뜻을 이루지 못하고 유령이 되어버린 트레이너가 있다』는 괴담의 출처가 당신이셨군요……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「なら方法を変えましょう。私の知り合いで『英雄』と呼べるウマ%UMA%は何人もいます。一人ずつ当たりましょう。たとえば、見た目からして不思議で、宇宙から来たみたいで、有名なTCGのフィールド魔法と同名の……」
  - acc: 1
    content: 「영웅을 그렇게 많이 알고 있어?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「違います！三つの説明は同じウマ%UMA%です。クラスメイトで友人の、ネオユニヴァース。%CALLNAME%、ルドルフ会長の悪いところを真似してませんか？」
  - %CHARA%は、話を遮ってソ連ネタを挟んだ%YOU%を、ふくれ面で見ている
  - 농담을 친 %당신%을(를) 뚱한 표정으로 쳐다보았다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あとは、どうしてもあと一歩及ばなくても、全身全霊で前を追い越そうとするウマ%UMA%……それから、私が一番一番一番尊敬している——%C_NAME%先輩。生まれつきの体と、刻苦の鍛錬を持つ%SEX%が、とても憧れで……そうだ、今日も%C_NAME%先輩はトレーニング場にいるはずです。見に行きませんか？」
  - 放課後、%YOU%と%CHARA%はトレーニング場へ来た。生徒は多いし、%YOU%は入口から遠く眺めただけなのに、疾走する緑の影は、その場の大半の視線を奪っていた。
  - acc: 1
    content: 「저 애가 네가 말한 그 선배야? 정말 빠르네.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そうですそうです。%CALLNAME%、もう少し近づいて、%C_NAME%先輩のトレーニングを見学しましょう」
  - %CHARA%はノートとペンを出し、耳と尻尾がまた揺れ始める。
  - acc: 1
    content: （%SEX%の走り……圧がすごい！）
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: （でも%SEX%は、探している雌じゃない）
  - %YOU%は%CHARA%に、あの日見たのは%SEX%ではないと伝えようとした
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん……歩幅はハの字で、安定しています。巡航速度でしょうか？でも%C_NAME%先輩は、もう二千四百メートル近く走っています……長距離の準備？呼吸もまだ吸吸呼のまま、体力に余裕がある。%C_NAME%先輩は長距離の重賞に備えているのでしょうか……」
  - %SEX%は真剣に、%C_NAME%の走り、残りの体力、合計タイムを分析している。耳と尻尾の揺れも、だんだん大きくなる。
  - acc: 1
    content: 「너도 올라가서 몇 바퀴 뛰어보고 싶어?」
  - %CHARA%は、少し驚いたようだった
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아니…… 그게…… 전 오늘 자율 트레이닝은 쉬기로 했거든요…… 그래서 뛰지는 않을 거예요……」
  - acc: 1
    content: 「어, 나와 함께 『영웅』을 조사해 주려고?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ち……違います……私……その……今日はここまでにしましょう……%C_NAME%先輩も、トレーナーの探す『英雄』ではないなら、次はネオユニヴァースに会いに行きましょう……ぼ、僕はこれで失礼rua（舌を噛んだ）……」
  - (왜 갑자기 이렇게 횡설수설하는 거지? 내가 끌고 가서 트레이닝시킬까 봐 겁먹었나?)
  - (이건……)
  - %YOU%は地面に、とても可愛いノートを見つけた。
  - %당신%은(는) 바닥에 꽤 귀여운 공책이 한 권 떨어져 있는 것을 발견했다.
  - ノートには、%CHARA%が他の人と併走したあとのまとめと、自主トレの経験がびっしり書いてあった。未出走のウマ%UMA%でここまでまとめられるのは、優秀だ。
  - （こんなに走るのが好きなウマ%UMA%が、なぜわざわざ休んで調査に付き合うんだ？）
  - content:
      - fontWeight: bold
        content: 교관
      - 「あ、そこのトレーナーさん。あなたは%CHARA%の専属トレーナーですか？」
  - 「어, 그건 아닌데요.」
  - content:
      - fontWeight: bold
        content: 교관
      - 「그렇군요. 롭 로이 학생이 예전에 부상 때문에 모의 레이스를 여러 번 놓쳤거든요. 다음 모의 레이스가 다가오니 또 불안해하기 시작했어요. 평소 트레이닝 기록도 전보다 훨씬 떨어졌고요. 그래서 체육대회 때 멋지게 활약해 보라고, 그러면 트레이너를 찾을 수도 있을 거라고 조언했지만, 최근 들어 또 의욕이 떨어져서 자주 쉬더라고요. 전 아예 포기하려는 줄 알았어요. 그런데 당신과 나란히 앉아 달리기 이야기를 나누는 걸 보고, 드디어 트레이너를 찾았나 싶어서 제멋대로 기뻐해 버렸네요. 정말 죄송합니다.」
  - acc: 1
    content: 「%SEX%の最近の様子は、走るのを諦めてるようには見えなかった」

# [번역 대상] rec3 — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
rec3:
  # 中庭
  - %YOU%と%CHARA%は、また図書館で情報を交換した。だが進展はない。ネオユニヴァースも、あの日見た「英雄」ではなかった。%YOU%はふと、模擬レースの話を思い出した
  - acc: 1
    content: 「모의 레이스는 어떻게 하기로 했어?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え？あ……その……%CALLNAME%は、どうして知ってるんですか？」
  - 「君のコーチに聞いた。当日、応援に行くよ。がんばれ、%CHARA%！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、どうして……いえ、嫌というわけでは……違う、%CALLNAME%に応援してほしくないわけじゃない……ただ、私は存在感が薄いし、成績もよくなくて……だ、だから……来てくれても、見つからないかもしれない……そう思ってしまうんです。コーチも言いましたよね。最近、調子も本当に悪くて……」
  - %CHARA%は頭を下げ、%SEX%の表情は見えない
  - 젠노 롭 로이는 고개를 푹 숙였고, %그녀%의 표정은 보이지 않았다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아니요, 아니요, 괜찮아요. 오히려 절 위해 경기를 보러 와주시는 분이 계시니, 전 정말 기뻐요…… 에헤헤……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「저는 어릴 때부터 이렇다 할 특기도 없었고, 친구도 별로 없었어요. 부상도 잦았고…… 제 곁에 있어 준 건 책뿐이었죠……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「저는 늘…… 아주 눈에 띄지 않는 아이였어요. 저도 눈에 띄지 않는 제 모습에 진작 익숙해졌고요…… 누군가 일부러 절 보러 와주신다면…… 오히려 쑥스러울 거예요…… 다른 사람의 기대를 짊어지게 되었으니 더 열심히 해야겠다고 생각하다가…… 그러다 보면 또다시 불안해지고…… 불안이 심해지면 다시 다치게 되고……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「物語の英雄は、登場しただけで、すべての視線を集めます。私は英雄から、ずっと遠いまま……恥ずかしい。まったく……『%CHARA%』という名前に、申し訳なくて……」
  - 最後には、%CHARA%の声に泣きが混じった。鈍い%YOU%でも、%CHARA%が圧力で壊れかけているのはわかった
  - 마지막 말을 할 즈음, 젠노 롭 로이의 목소리에는 울음기가 섞여 있었다. 아무리 목석같은 %당신%일지라도 젠노 롭 로이가 과도한 압박감에 무너지기 직전이라는 것을 눈치챌 수 있었다.
  - 言い終わるか終わらないかで、%CHARA%は図書室から飛び出した。
  - %YOU%は追いかけようとしたが、ウマ%UMA%の脚にはもう追いつかない。%CHARA%の背中は、廊下の向こうに消えていた。
  - （やっぱり、人間とウマ%UMA%を同じにはできない）
  - %CHARA%は、今どこへ行くんだろう？
  - divider: true
    content: 훈련장
  - acc: 1
    content: 「역시 여기 있었구나!」
  - 「え、%CALLNAME%はどうして見つかるんですか。普通この展開なら、家に帰ってるはずでは？」
  - acc: 1
    content: 「君は、普通のウマ%UMA%みたいに簡単には諦めないだろ」
  -
  - acc: 1
    content: 「네 마음속엔 여전히 굴하지 않는 불꽃이 타오르고 있거든.」 (전에 주웠던 공책을 꺼내며)
  -
  - acc: 1
    content: 「네 공책이 바로, 네가 지기 싫어한다는 증거야!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え、もしかして……中身を見ましたか？女の子のノートをこっそりめくるのは、よくないですよ、%CALLNAME%……」
  - 「주인을 확인하려고 펼쳐봤어, 정말 미안해!」
  - %CHARA%は、%YOU%のあまりに改まった態度に、笑ってしまった
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아…… 아하하…… 당신이라면 괜찮아요…… 그래서 평가는 어떠신가요…… 바보 같죠? 겉으로는 포기한 척하면서, 몰래 공책에는 병주와 트레이닝 내용을 매번 정리하고 있다니…… 정작 저는…… 아무것도 못 하면서……」
  - %CHARA%は苦く笑った
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「우스운 걸 보여드려서 죄송해요. 그냥 버리셔도 돼요. 아니, 제가 직접 버릴게요. 제 꿈은 제가 알아서……」
  - acc: 1
    content: 「돌려주는 건 문제없지만, 한 가지 확인하고 싶은 게 있어.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「뭔가요?」
  - acc: 1
    content: 「%CHARA%、君の夢は、何だ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「제…… 제가 말하면…… 정말 비웃지 않으실 건가요? 전…… 저는 항상, 언제나 제가 영웅이 되는 모습을 꿈꿔왔어요.」
  - %CHARA%は深く息を吸い、何かを決めたように見えた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「상처와 부상투성이라도, 모의 레이스를 여러 번 놓쳤어도. 아무런 성과를 내지 못했더라도. 아무의 관심도 받지 못하더라도. 전…… 저도—— 영웅이 될 기회를 붙잡고, 영웅이 되고 싶어요.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「처음 『영웅』을 찾아 나선 것도, 모든 트레이닝을 기록하고 요약한 것도, 지금 이렇게 도망쳐 온 것도. 전부 다 제가 영웅이 되고 싶었기 때문이에요…… 하지만…… 현실의 전 그저 창피하고 허무한 꿈을 꾸고 있을 뿐이죠……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「선배님들도, 동급생들도, 후배들도. 저를 아득히 뛰어넘는 존재들이 있어요. 모두가 각자의 훌륭한 꿈을 짊어지고 있죠. 가문의 영광을 지키고 싶다든가, 자신을 응원해 주는 사람들을 행복하게 해주고 싶다든가, 다른 사람들이 불행을 이겨낼 수 있도록 격려하고 싶다든가.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하지만…… 전 그런 게 없는걸요! 전…… 전 그저 사람들의 관심을 더 받고 싶고, 조금 더 눈에 띄고 싶고, 친구가 더 많아졌으면 좋겠다는 생각뿐이라고요!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%THEY%みたいな深い夢も、すごい物語もない。だから……だから私は、%THEY%の背景になっているんです！」
  - acc: 1
    content: 「그럼 넌, 그래도 영웅이 되고 싶어?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……네. 여전히 영웅이 되겠다는 제 꿈을 포기하고 싶지 않아요……」
  - 「그럼 네 공책을 좀 빌려줘.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え、%CALLNAME%、何をするんですか？？」
  - %YOU%は油性ペンを出し、ノートの表紙に五文字を書いた。「ゼンノ英雄譚」
  - acc: 1
    content: 「ロブロイ先生、これを読ませてもらう」
  - acc: 2
    content: 「롭선생님...!! 독서가 하고 싶어요.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「...정말요? 제가 상처투성이에 성적도 안 좋고 눈에 띄지도 않는데…… 저한테 환멸을 느끼실지도 몰라요……?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「정말…… 제 이야기를 읽어주실 건가요……?」
  - 「君が望むなら、必ず強い答えが返ってくる。子供みたいにぐずぐず泣くな。英雄になるつもりだろ、ウマ%UMA%。英雄の涙は、そう簡単には落ちない。」
  - %CHARA%は眼鏡を拭いた
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「大人の%CALLNAME%がウルトラマンの台詞を使うほうが、子供ですよ」
  - 『영웅』을 찾는 계획은 잠시 중지.
  - %YOU%が見たからだ——もっと面白い物語を

# [번역 대상] rec4 — 대사/분기 블록 전체 문맥에서 남은 원문을 번역
rec4:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하아…… 하아…… 어째서 이러지…… 어째서…… 랩 타임이…… 지난번보다 더 느려진 거지……」
  - 「조금 쉬자 롭 로이. 내가 전에 해준 말 기억하지? 내가 널 응원하고 있어. 불안해하거나 긴장할 필요 없어. 자연스럽게 달리면 돼.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はい。もう数周練習します。計時は%CALLNAME%にお願いします」
  - 今の%CHARA%は、まだ自分の力を正確にはわかっていない。それでも、まず自信を上げるのは悪くない。
  - divider: true
  - color: %COLOR%
    content: %CHARA%は一人で情報を集めている
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （うん、%CALLNAME%の探す『英雄』は%C_NAME%先輩のはず。%YOURSEX%は違うと思ってるけど、時間も場所も走りも合ってる……）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （でも……%CALLNAME%が%YOURSEX%の『英雄』を見つけてしまったら……私たちの関係も終わる……情報交換は互いに正直で、%CALLNAME%は私の焦りも解いてくれた……でもこのことだけは……言いたくない）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （でも……言って……終わったあとで%YOURSEX%に伝える……『英雄』のすべてを……その前に……絶対に、%YOURSEX%に私を覚えていてもらわないと）
  - divider: true
    content: 모의 레이스 당일
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - (망했어 망했어 망했어 망했어, 어째서 또 긴장해서 출발이 늦어진 거야!!!)
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （%C_NAME%先輩はもう後半、最終直線に近い。このままだと、また負ける）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - (역시…… 이길 수 없는 걸까…… 그렇게나 많이 트레이닝했는데……)
  - acc: 1
    content: 「이야기의 주인공, 힘내라구!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （%CALLNAME%だ！%YOURSEX%は私を見つけた……でも%C_NAME%先輩が勝って、%CALLNAME%が%SEX%こそ%YOURSEX%の「英雄」だと知ったら、また会いに来てくれるだろうか？）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （だめ。負けても……唯一の読者を失望させたくない。拍手も、声援も、視線がなくても……私は……%YOURSEX%一人の英雄に——なる！）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「오오오오오오오오오오!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - (심장아, 불타올라라. 뇌야, 타올라라. 다리야 움직여줘. 난…… 이대로 무기력하게 지고 싶지 않아!!!)
  - content:
      - fontWeight: bold
        content: 해설
      - 「最終直線、最終直線！%CHARA%が、最終直線で追いついてきた！」
  - acc: 1
    content: (저 주법! 저 자태!)
  - (틀림없어. 저건 그날 보았던—— 마치 지평선을 가를 듯한……)
  - content:
      - fontWeight: bold
        content: 해설
      - 「%C_NAME%がゴール、ゴール！%CHARA%は、現役ウマ%UMA%に劣らない末脚を爆発させても、%C_NAME%を超えられなかった！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （やっぱり……負けた……馬生は、そううまくいかない……次は、%CALLNAME%に、あの日の『英雄』が%C_NAME%先輩だと説明する番だ）
  - 「롭 로이! 내가 그날 본 『영웅』을 드디어 찾았어!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やっぱり%C_NAME%先輩、ですよね……」
  - 「너였어!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「네?」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「롭 로이, 방금 라스트 스퍼트 아주 훌륭했다…… 둘이서 뭔가 할 얘기라도 있나?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、%C_NAME%先輩、ちょうどよかった。あの日の午後四時半ごろの芝、使っていたのは先輩ですよね」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「그래. 너와 병주를 했었지. 정확한 시간은 기억 안 난다만.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でしょう、でしょう。『英雄』は、やっぱり%C_NAME%先輩ですよね！」
  - acc: 1
    content: 「つまり君も%C_NAME%の併走に出て、そのとき芝を使っていた、ということだな」
  - 「너 그날 머리 풀고 있었지?」
  - acc: 1
    content: 「넘어질 뻔할 때 휘청거리기도 했고」 (호감도+5 애정도+1)
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: 「넘어질 뻔할 때 가슴도 엄청나게 흔들렸고」 (애정도+2 명성-5)
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ、そんな細かいところまで見てた！？違う……じゃあ%CALLNAME%が見たのは……」
  - acc: 1
    content: 「롭 로이, 네가 바로 나의 영웅이야! 나와 계약해서 담당소녀가 되어줘!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「????????? 왜 이런 분위기에서 그런 드립을 치시는 건데요????」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「역시, 둘이서 뭔가 할 얘기가 있는 것 같군.」
  -
  - %CHARA%、募集完了
