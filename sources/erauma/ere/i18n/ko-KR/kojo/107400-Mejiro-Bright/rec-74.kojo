# @file メジロブライト - 募集
# @author KUN
rec0:
  - %CHARA%はトレーニング場にいないようだ…… ひとりで外を見て回ってもいいかもしれない。

rec1:
  title: 느긋한 공원 여행
  lines:
    # 任意外出
    - トレセンの募集シーズン、ひとり散歩に出た%YOU%は、あてもなく公園を歩いていた。
    - 공원의 풍경은 평소와 다름없이 평화롭고 평온했다.
    - 길을 오가는 행인들도 모두 느긋하게 움직이고 있었다.
    - することがない%YOU%は脇のベンチを見つけ、歩いて疲れた足に、ほんの少し休みを与えた。
    # FLAGNAME:2 = 今月
    - if: era.get('flag:2') === 1
      content: 첫눈이 채 녹지 않은 가운데, 빛바랜 나뭇잎 몇 장이 천천히 떨어지고 있었다.
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아～암」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「하아～암」
    - 바로 옆의 다른 벤치에는 나이가 그리 많아 보이지 않는 %UMA%가 앉아 있었다.
    - ふわふわの長い髪の下は、ぼんやりした小さな顔。体は少し後ろに傾いていて、半眼の目を見ていなければ、眠っていると思っただろう。
    - if: d.mejiro
      lines:
        - acc: 1
          content: 「역시 브라이트네, 정말 느긋하기도 하지……」
    - if: "!d.mejiro"
      lines:
        - acc: 1
          content: 「정말 느긋하기도 하네……」
        - acc: 2
          content: 「이 아이, 벌써 잠든 건 아니겠지……」
    - あまり気にしない%YOU%は、とりあえず放っておき、平凡な一日を続けることにした……
    -
    - 公園を適当に何周か歩いたあと、今日は雑用もない%YOU%は、思い切ってベンチに座り、のんびりした時間を味わう。
    - 어느덧 시간은 두 사람 사이로 소리 없이 흘러갔다.
    - 雲が陽を隠して日光浴が終わると、%YOU%はやっと怠惰にベンチから身を起こした。
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아～암」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「하아～암」
    - acc: 1
      content: 「응?」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「어라라?」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「어라라?」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 좋은 아침이에요～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「아, 안녕하세요～」
    - 隣の%UMA%は、いまになって%YOU%の存在に気づいたらしく、のんびりこちらを見る。
    - 귀를 쫑긋쫑긋 움직이더니, 이내 부드러운 미소를 지어 보였다.
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, 위를 보고 계셨나요?」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「저기, 당신도 위를 보고 계셨나요?」
    - 隣に座っていた%YOU%は好奇心に従い、ゆっくり顔を上げて上を見る。
    - 그리 높지 않은 말라붙은 나무 한 그루가 있었고, 그 꼭대기에는 시든 낙엽 몇 장이 남아 있었다. 그런데 유독 나뭇가지 끝에 매달린 잎사귀 하나만큼은 바람이 세차게 불어도 떨어지지 않고 버티고 있었다.
    - acc: 1
      content: 「저 나뭇잎을 보고 있었던 거야?」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네에～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「맞아요～」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기 꼭대기에, 외롭게 시든 잎이 한 장 남아 있죠?」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「저기 꼭대기에, 외롭게 시든 잎이 한 장 남아 있죠?」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「금방이라도 날아가 버릴 것처럼 보이지만, 전혀 떨어지지 않는답니다～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「금방이라도 날아가 버릴 것처럼 보이지만, 전혀 떨어지지 않는답니다～」
    - 툭 던진 말에 이어, 눈앞의 %UMA%는 다시 한번 고개를 들어 위를 바라보았다.
    - %YOU%の目に映ったその一枚の枯葉が、なぜか気になり始める。
    - acc: 1
      content: （남아서 같이 지켜본다）（모집을 계속한다）
      key: rec
      lines:
        - 立ち上がろうとした%YOU%は考えを変え、またベンチに座り直す。
        - 시선을 천천히 고목 꼭대기로 옮겨, 그 나뭇잎을 가만히 응시했다.
        - 시간은 다시 한번 두 사람의 곁을 흘러 지나갔다……
        -
        - 얼마나 흘렀을까, 곁에 있던 %UMA%가 돌연 입을 열었다.
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「참 꿋꿋한 아이네요～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「참 꿋꿋한 아이네요～」
        - acc: 1
          content: 「그러게」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어라라? 대답이……」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「어라라? 대답이……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「와아, 아직 계셨군요～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「와아, 아직 계셨군요～」
        - acc: 1
          content: 「저 나뭇잎이 왠지 신경 쓰여서 그만……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「신경 쓰여서, 내내……?」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「신경 쓰여서, 내내……?」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「우후후～ 역시 당신다우셔요～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「우후후～ 어쩌면 저와 닮으셨을지도 모르겠네요～」
        - 눈앞의 %UMA%는 부드럽고 가볍게 미소 지었다.
        - 그 웃음소리가 이어지던 중, 저 멀리서 다른 목소리가 들려왔다.
        -
        - if: d.mejiro
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: 메지로 도베르
            - 「브라이트! 드디어 찾았잖아!」
        - if: "!d.mejiro"
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: ？？？
            - 「브라이트! 드디어 찾았잖아!」
        - if: d.mejiro
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 메지로 도베르
                - 「어라, 당신도 여기 있었어?」
            - メジロドーベルは慌てて小走りで来ると、そっと%CHARA%の手を取り、安心したように息を吐く。
            - だがすぐに、隣に立っている%YOU%を、少し咎めるように見た。
        - if: "!d.mejiro"
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - 「어라, 이분은 누구셔?」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - 「설마, 이상한 사람은 아니겠지……」
            - 小走りで来た%UMA%はそっと%CHARA%の手を取り、安心したように息を吐く。
            - だがすぐに、隣に立っている%YOU%を警戒の目で見た。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「괜찮답니다, 도베르～」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이분이 곁에 있어 주신 덕분에 지루하지 않게 기다릴 수 있었던 걸요～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이 %SIR%께서 내내 함께해 주셨답니다, 참 좋은 분이셔요～」
        - color: %COLOR59%
          content:
            - fontWeight: bold
              content: 메지로 도베르
            - 「그렇지만……」
        - if: d.mejiro
          lines:
            - acc: 1
              content: 「그럼, 난 이만 가 볼게?」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 메지로 도베르
                - 「앗? 으응…… 마음대로 해.」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 메지로 도베르
                - 「깜짝 놀랐잖아…… 첫인상이 영락없이 수상한 사람 같았단 말이야.」
        - if: "!d.mejiro"
          lines:
            - acc: 1
              content: 「저기, 난 트레센 학원의 트레이너야. 배지도 제대로 차고 있다고.」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 메지로 도베르
                - 「어라? 정말이네, 트레이너 배지다……」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: 메지로 도베르
                - 「깜짝 놀랐잖아…… 이상한 사람인 줄 알았단 말이야.」
        - もう連れができた%CHARA%を見て、自分の出番は終わったと悟った%YOU%は、自然に背を向けて離れた。
        - divider: true
        - color: %COLOR%
          content: 遠ざかる%YOU%の背中を見ながら、%CHARA%は小さく首を傾げる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너님……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응후후～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응……?」
    - acc: 2
      content: （그저 시든 잎일 뿐이다）（모집을 중단한다）
      lines:
        - 고작 시든 잎 한 장일 뿐인데…… 대수롭지 않은 일이다.
        - そう思った%YOU%は立ち上がり、公園を離れた。

rec2:
  title: 느릿느릿한 등장～
  lines:
    # 中庭で発火
    - 公園でのんびりした時間を過ごしてから間もなく、あの独特な雰囲気の%UMA%が、また%YOU%の前に現れた。
    - ちょうど窓辺にいた%CHARA%は%YOU%を見つけると、急がずこちらへ歩いてくる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「평안하신가요, 트레이너님.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「얼마 만에 뵙는 건지 모르겠네요～」
    - acc: 1
      content: 「……어? 나한테 말하는 거야?」
    - ぼんやりする%YOU%とは対照的に、%SEX%の表情は陽だまりのような笑顔だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네에, 그렇답니다～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「지난번에 공원에 계실 때 신세를 많이 졌으니까요～」
    - そう言いながら%CHARA%は、%YOU%へそっとお辞儀をする。
    - 再び顔を上げたときも、まだ寝ぼけたような表情のまま、ふわりと%YOU%と目が合う。
    - acc: 1 # 募集終了
      content: 「……그건 트레이너로서 당연히 해야 할 의무였을 뿐이야.」（모집을 중단한다）
      key: rec
    - acc: 2
      content: 「아니야, 나도 그 시간을 충분히 즐겼는걸……」（모집을 계속한다）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「즐기셨다니요……?」
        - ぼんやり首を傾げ、戸惑うように%YOU%を見る。
        - 길게 뻗은 바보털이 공중에서 쫑긋거리며, 창문으로 불어오는 바람을 따라 한들한들 흔들렸다.
        - acc: 1
          content: 「나도 그렇게 차분하게 가라앉는 분위기가 마음에 들었거든.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오호라～ 그러셨군요～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너님은 저와 마음이 아주 잘 맞으시네요～」
        - 下がっていた両手をそっと上げ、%CHARA%は持ち上がった口角を隠す。
        - 내려뜨렸던 두 손을 살며시 올려 메지로 브라이트는 번지는 미소를 가렸다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「앗, 맞다!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「지금 말씀드리기엔 조금 어색할지도 모르겠습니다만……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「혹시 제 측정을 도와주실 수 있으신가요?」
        - 다소 뜬금없게 화제를 전환했음에도, 목소리 톤은 여전히 평온하기 그지없었다.
        - acc: 1
          content: 「측정?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네에～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「다음 교내 레이스에 신청을 해 두었거든요. 그래서 전문가의 시선으로 점검해 주셨으면 해요～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「물론 마음이 내키지 않으신다면 사양하셔도 괜찮답니다?」
        - 조금 전까지 졸려 보이던 얼굴은 레이스 이야기가 나오자마자 단숨에 생기를 띠었다.
        - 真剣な目で眼前の%YOU%を見るその瞳は、「メジロ」の名にふさわしい。
        - acc: 1
          content: 「좋아, 도와줄게.」
        - divider: true
        - トレーニング場へ移り、運動着に着替えた%CHARA%を見る。
        - コース脇に立つ%YOU%は、気づかないうちに手のストップウォッチを握りしめていた。
        - あのメジロ家の%CHARA%だ。どんな走りを見せるのか……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 평범한 트레이너 A
            - 「%CHARA%か、%SEX%の走りが楽しみだな！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 평범한 트레이너 B
            - 「듣기로는 아직 전속 트레이너가 없다던데? 어쩌면 이번이 기회일지도……」
        - 周囲のひそひそ話のなか、%CHARA%が踏み出す——
        -
        - 意外なことに、皆が想像したような迫力の加速はなく、速くもないペースを保っているだけだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 평범한 트레이너 A
            - 「전혀 가속을 안 하잖아? 진짜야?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 평범한 트레이너 B
            - 「보아하니 소문만큼 대단하진 않은 모양이네……」
        - acc: 1
          content: 「……하지만 속도가 전혀 줄지 않는 느낌인걸.」
        - 周囲が速度をけなすのとは違い、%YOU%は%CHARA%の脚を見て、少しずつ考えをまとめていく。
        -
        - %CHARA%が試し走りを終えるころ、周囲の人はほとんど散っていた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너님～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어라라, 제가 벌써 결승선을 통과한 건가요?」
        - 最初から最後まで同じ速度で走り切り、リズムの整った呼吸のまま%YOU%の前まで来る。
        - acc: 1
          content: 「응, 이미 끝났어.」
        - 目の前の純粋な笑顔を見て、%YOU%は黙って手のストップウォッチをしまう。
        - これほど可能性のある一幕を見て、%TITLE%トレーナーとしての%YOU%は、もう十分興味を持っていた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어라, 벌써 충분하신가요?」
        - acc: 1
          content: 「응, 완전 충분해.」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼…… 트레이너님께선 제 성적을 어떻게 보시나요?」
        - acc: 1
          content: 「왠지 모르게, 너를 그냥 그런 식으로 달리게 내버려 둘 순 없겠다는 생각이 들어.」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그냥 달리게 내버려 둘 수 없다니요……?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「무슨 뜻인지 여쭈어도 될까요?」
        - %YOU%の前に立つ%CHARA%は、新人の%UMA%のようにスタミナ切れで息を乱す様子がなく、試し走りの前と変わらず穏やかだった。
        - 안색에도 피로한 기색은커녕, 여전히 나풀거리는 미소가 머물러 있었다.
        - acc: 1
          content: 「우선은 그 느릿느릿한 태도부터 조금씩 고쳐나가 볼까……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「우선은…… 느릿느릿한 태도부터요?」
        - %CHARA%の少しぼんやりした目を見て、%YOU%は決心する。
        - acc: 1
          content: 「시기상 조금 성급할지도 모르겠지만…… 나랑 팀을 맺어주지 않을래?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「팀이라니…… 아, 전속 트레이너 계약 계약 말씀을 하시는 건가요?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……하지만 전 아직 공식 교내 레이스도 뛰지 않았는데, 트레이너님께선 벌써 결정을 내리시는 건가요?」
        - 自分のレースを見る前にそう提案されて、%CHARA%も理解できない顔になる。
        - だが今の%YOU%にとっては、もう決まったことだった。
        - acc: 1
          content: 「응, 결정했어!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아…… 우후후～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼, 조금만 더 고민할 시간을 주실 수 있으신가요?」
        - 少し呆けた%CHARA%は、すぐにまた先ほどの寝ぼけた目に戻る。
        - 急がない%YOU%は軽く頷き、%CHARA%と手を振って一旦分かれた。
        - divider: true
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「우후후…… 역시, 당신께 부탁드리길 잘했네요～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아 참, 이제부터는 %CALLNAME%이라고 불러야겠네요～」
        - color: %COLOR%
          content: %YOU%に最後の一言が聞こえないと確かめてから、%CHARA%はまたこらえきれずに小さく笑った。

rec3:
  title: 오랜만이에요～
  lines:
    - また中庭を通ったとき、どこからともなく清風が%YOU%の眼前を横切り、視線を脇へ逸らす。
    - 길게 뻗은 바보털 하나……
    - 밤색 긴 머리를 늘어뜨린 %UMA%가 안뜰 벤치에 우두커니 앉아 있었다.
    - %YOU%はこの%UMA%の名前を覚えていた。個人的な興味とトレーナーとして、%SEX%の模擬レースを何度か見にも行っている。
    - 마침 오늘 훈련장으로 가려던 목적도 팀에 영입할 %UMA%를 찾기 위함이었으니, 눈앞의 저 아이라면 그야말로 안성맞춤이 아닌가.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「어라라? 누구시지요?」
    - 背後の視線に気づいたらしく、%CHARA%はゆっくり振り返り、%YOU%を見た途端にぱっと明るい笑顔を見せる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오랜만이에요～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오늘은 어떤 일로 오셨나요?」
    - かわいいアホ毛が問いかけと同時に跳ね、%YOU%の胸にも小さく当たった。
    - %YOU%は心のなかで冷静になれと繰り返し、%SEX%の頬を撫でたい衝動を押し戻す。
    - 以前は、こんなにふにゃふにゃだとは気づかなかったな。
    - 예전엔 왜 저렇게 말랑말랑하고 귀여운 구석이 있다는 걸 눈치채지 못했을까?
    - acc: 1
      content: 「널 스카우트하러 왔어.」（모집을 계속한다）
      key: rec
      lines:
        - （너무 돌직구였나!）
        - %YOU%は心のなかで自分を強く突っ込みつつ、本当にそれが本音だと認めると、突っ込みをやめた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네에……?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「앗, 그렇군요!」
        - 半拍遅れた%CHARA%はやっと立ち上がり、きちんと%YOU%を見る。
        - %YOU%と%CHARA%はしばらく見つめ合い、先に耐えきれず笑ったのは%YOU%のほうだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기, 트레이너 씨?」
        - 「아니야, 신경 쓰지 마.」
        - 笑顔を収めて、%YOU%は一歩前へ出る。
        - 以前%CHARA%が出たレースは、%YOU%は現場で見ている。
        - 模擬レースではあったが、%CHARA%の走り方に問題はなく、少し助言が必要なだけだ。
        - 「%CHARA%さん、君のレースは見ている」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네에?」
        - %CHARA%はぼんやりした顔のまま、少し傾ぐ。
        - 메지로 브라이트는 멍한 표정을 지은 채 고개를 살짝 기울였다.
        - 이왕 영입 제안을 하러 온 거, 먼저 트레이너로서의 실력부터 보여주는 편이 좋겠지.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아, 물론이지요. 말씀해 주셔요～」
        - %CHARA%の顔を見ながら、%YOU%は長く胸にしまっていた助言を口にする。
        - 다소 불명확한 가속 타이밍, 처지는 템포, 그리고 미세하게 어긋나는 보폭의 문제점들까지.
        - %YOU%の話を聞き終えても、%CHARA%は素直に頷くだけだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「호오, 호오……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「왠지, 당장 가서 달려보고 싶어지네요～」
        - そうして気合いの入った様子を見て、%YOU%の口角は自然に上がる。
        - 提案の筋が通るとわかれば、%CHARA%は契約を考えてくれるだろう。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼, %CALLNAME%, 오늘은 저와 함께 트레이닝해 주실 수 있으신가요?」
        - もちろん、と%YOU%は答えるつもりだった。
        - だがその呼び方を思い出して、%YOU%も呆けた。
        - 「어? 방금 뭐라고 불렀어?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「네에～ %CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그야～ 저도 마음을 정했으니까요～」
    - acc: 2
      content: 「나…… 난 그냥 지나가던 길이었어.」（모집을 중단한다）
