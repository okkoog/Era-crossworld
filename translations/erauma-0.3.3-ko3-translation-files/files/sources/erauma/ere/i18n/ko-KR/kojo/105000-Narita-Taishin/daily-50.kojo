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


# [번역 대상] o_s_drawing
o_s_drawing:
  - 会計を済ませると、店主が帰りかけた %YOU% を呼び止めた。
  - 店主「少々お待ちを、お客様。」
  - 店主は傍の机から小さな紙片を抜き、渡してきた。
  - 店主「サービスのおくじです。あちらで引けます。ご幸運を。」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「くじか。最近ゲームのガチャ運が悪いし、アンタが引け、%CALLNAME%。」
  - くじを渡したあと、%YOU% はゆっくり抽選機のハンドルを回した……
  -
  - if: d.dice === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「い、一等！？ 珍しいわね。」
      - 店主「おめでとうございます。運がいいですね。はい、おふたり様の温泉旅行券です。どうぞ。」
      - %YOU% は店主から旅行券を受け取った。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ふたりの温泉旅行か。誰と行くか、決めた？」
      - 「……」
      - 「タイシンと一緒に引いたんだから、タイシンと行くに決まってる！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「え？ ちょ、ちょっと待てって！」
      - 「行きたくないのか？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「そういうわけじゃないけど……もう、アンタってやつは！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「先に家の人と相談しないと……」
      - 「じゃあ、一緒に行くってことだな？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「うるさい！」
      - %YOU% は器用に、%CHARA% の蹴りをかわした。
  - if: d.dice === 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ハンバーグ、でかい。ひとりじゃ食べきれない……一緒に食べよ、%CALLNAME%。」
      - %CHARA% と一緒にハンバーグを味わった。
  - if: d.dice === 2
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「大根こんなに……どうする。帰ったらハヤヒデとチケット%THEY%で分けよう。」
  - if: d.dice === 3
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ニンジン？ ちょうどお腹空いてた。」
  - if: d.dice === 4
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「チッ……ないよりマシか。」
      - そうは言っても、最下等しか引けないのは、不運としか言いようがない。


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


# [번역 대상] talk
talk:
  - if: era.get('base:50:体力') < era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「大丈夫だって言ってるでしょ。休む必要ない。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「このくらいで足を止めてたまるか。」
  - if: era.get('base:50:体力') >= era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「調子はまあ悪くない。今日の予定は？」
      - random: true
        if: era.get('love:50') >= 100 && era.get('cflag:50:育成回合计时') >= 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「最近の感想を聞けって？」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「んー……この三年、本当にいろんなことがあった。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「勝ちも負けも、私にとっては大事な思い出。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「これから先はまだわからない。でも、アンタが傍にいると思うと、安心する……」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ちょっ、その顔はなに！」
          - 一瞬、タイシンの幸せそうな笑みが、照れた睨みに変わった。
      - random: true
        if: era.get('love:50') >= 90 && era.get('status:0:熬夜') > 0
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「しっかりしなさいよ。昨日も徹夜したんでしょ。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「まったく、体には気をつけろって何度言わせるの。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「いつも心配させるなよ……」
      - random: true
        if: era.get('love:50') >= 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ほら、これ、持ってきた。」
          - タイシンは %YOU% に缶をひとつ渡した
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「なに？ 甘い飲み物ばっかりだと太るって？」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「飲みたくないなら返せばいいでしょ。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「そんな目で見ないで。体重はちゃんと管理してるわよ。」
      - random: true
        if: era.get('love:50') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ソシャゲの新イベント、内容多すぎ。徹夜しないとコンプできないかも。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ダメだ、そんなことでトレーニングを疎かにできない。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「でも今回の限定アイテム、逃すと次まで長いし。」
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「くっ、決められない……」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「この調子なら、いける！」
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「準備はできてる。早く始めよう、%CALLNAME%！」
      - random: true
        if: era.get('cflag:50:干劲') === 1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「調子？ まあ悪くない。計画どおりでいい。」
      - random: true
        if: era.get('cflag:50:干劲') === 0 && era.get('cflag:50:育成回合计时') < 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「今日のトレーニングはなに、いつもどおり？」
      - random: true
        if: era.get('cflag:50:干劲') === -1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「体は少し疲れてるけど、もう少しなら持つ。」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「くそっ、なんで足がこんなに重い……」
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「いや、大丈夫。トレーニングは続ける。」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「だんだん暖かくなってきたな。昼はどこかで少し仮眠しよう。」
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「春……桜、咲くかな。時間があったら公園を散歩するか。」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「あー暑い……トレーニング前から汗だ。場の連中もうるさいし、余計に暑くなる。」
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「夏になると、蝉の声があちこちだな。夏らしいけど、たまにうるさいと思う。」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「道の両側に落ち葉が積もると、秋だって感じる。防寒しないと。」
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「秋の午後は眠くなるな。今日も授業で先生に怒られた……なに？ 昨夜は徹夜してないわよ！」
      - random: true
        if: era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「冬になっても、家の花屋は忙しい。一年の雑務を片付けて、来年の準備もある。こたつでみかんばっかり剥いてるわけにはいかない。」
      - random: true
        if: era.get('love:50') >= 50 && (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2)
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「雪だな。雪の日は家にいたくなる。豪華な鍋でも煮て……ん？ アンタも食べたい？ 当然、アンタの分もあるわよ、バカ。」

