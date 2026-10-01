# @file オグリキャップ - 日常
# @author 雞雞
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 오구리 캡
            - 「학원에 처음 왔을 때는 정말 아무것도 몰랐지…… 네가 있어서 정말 큰 도움이 됐어.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 오구리 캡
            - 「고향의 모두를 기쁘게 하기 위해…… 나도 노력해야 해.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 오구리 캡
            - 「私より速い%UMA%が、まだいる。……胸が、熱い……！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 오구리 캡
            - 「같이 밥 먹으러 가자.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 오구리 캡
            - 「레이스를 할 때면 항상 트레이너가 나와 함께 달리고 있다는 기분이 들어. ……그게 내 마음을 정말 든든하게 해줘.」

select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 오구리 캡
            - 「나는 오구리 캡이다. 잘 부탁한다.」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 오구리 캡
            - 「트레이너…… 부탁할게.」

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「음…… 아무래도 좀 지친 모양이다.」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「미안하지만, 잠시 쉬게 해줘.」
  # CFLAGNAME:66 = 募集状態
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「방금 타마랑 싸웠어…… 하지만 내 말 좀 들어봐. 오징어 구이라고 하면 통오징어 구이가 떠오르는 게 정상이잖아……?」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「음…… 방금 복도에서 크릭이 머리를 쓰다듬어 주던데…… 내 머리가 자다 깨서 엉망이었나……?」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:34:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「방금 이나리와 점심 먹고 왔는데, 밥 먹는 속도가 정말 빠르더라. 그렇게 먹으면 몸에 안 좋을 텐데……」
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「훗! 훗! 우이후! 이거 말이야? 상태가 아주 좋을 때는 이렇다. 그러니 마음껏 기대해!」
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「이 느낌…… 음. 정말 트레이닝이 기대되는군!」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「많이 먹었다. 오늘도 상태가 아주 좋아!」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「음…… 오늘 기분이 좋군. 강도 높은 트레이닝을 시작하자!」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「자, 오늘은 어떻게 훈련할 거야?」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「좋아, 오늘도 힘내자.」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「아무래도 컨디션이 계속 좋지 않군. 잠이 부족해서 그런 걸까……」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「으으…… 힘이 나질 않아. 좀 더 먹어둬야 했던 걸까……」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「음음…… 아, 미안. 도무지 의욕이 나질 않아서……」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「최근 몸이 무겁게 느껴지네…… 이런 건 하지 않는 게 좋겠어……」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「정말 이것만으로 배가 불러?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「오오, 이것이 설마 전설의 암연소혼반인가!」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「트레이너…… 소스를 좀 더 뿌려줘♡ 물론 하얀색 소스로 말이지♡」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「트레이너…… 이 컨트롤러 대체 어떻게 조작하는 거야?」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「으으, 또 졌다…… 실제 레이스였다면 내가 분명 이겼을 텐데!」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「트레이너♡ 내가 지면, 나를 따끔하게 벌해줘♡」

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 오구리 캡
      - 「선물인가? 먹을 것인지 궁금하네…… 아무튼 상하게 할 수는 없으니, 열어보게 해줘. 트레이너.」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「모두의 염원을 내 힘으로……!」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「고맙다. 확실히 성장한 게 느껴지네.」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「……트레이너 특제 밀크 에너지 드링크를 좀 마셔도 되겠지♡?」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「최근 정말 많은 일이 있었군……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「손톱을 깎아줄게. 이래 봬도 꽤 자신 있거든.」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「트레이너, 손톱 정리 끝났어. 이제 네 손가락이 활약할 차례네♡」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「……음. 이번 시험도 문제를 다 풀기 전에 끝나버렸네.」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「내 예전 꿈은 소힘줄찜이 되는 것이었지…… 말을 돌리지 말라고? 으으……」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「트레이너, 내 이번 시험 성적은 69점이야……♡」

out_church:
  - その日、%YOU% はオグリキャップに連れられ、トレセン近くの神社へやってきた。……%YOU% は不思議に思って、尋ねた。
  -
  - acc: 1
    content: 「왜 신사에 온 거야?」
  -
  - %SEX%는 미간을 찌푸리며 바닥을 보았고, 귀도 힘없이 처졌다.
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 오구리 캡
      - 「사실 요즘 몸 상태가 좀 좋지 않아서……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 오구리 캡
      - 「뭐를 하든 어긋나고, 아무튼 컨디션이 엉망이야…… 그런데 고향의 마사 아저씨가 『곤란할 때는 신령님께 빌어보렴』이라고 하셨던 게 생각나서 말이지.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 오구리 캡
      - 「그리고 고향에 있을 때도 경기장 안에 있는 작은 신사에서 기도를 하고 나서 레이스에 이기곤 했거든.」
  -
  - acc: 1
    content: 「그래서 나를 부른 거구나…… 그럼 같이 기도하자.」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: 오구리 캡
      - 「그래도 되겠어? 정말 고마워. %YOURNAME%.」

  - 당신들은 익숙하게 새전함에 돈을 넣고 정성스럽게 신의 가호를 빌었다……
  - 그 후, 오구리 캡이 무언가 이상한 점을 느낀 듯한데……
  -
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「이건…… 라면 가게의 무료 면 추가권! 복이 벌써 찾아올 줄이야!」
      -
      - オグリキャップは驚いた顔でポケットから一枚の紙を取り出した。だが %YOU% には、%SEX%が以前から入れっぱなしにしていただけのように思えた。
      - 하지만 어찌 됐든 %SEX%의 웃는 얼굴을 보니, 굳이 분위기를 깰 필요는 없을 것이다.
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: 오구리 캡
          - 「이건…… 라면 가게의 무료 면 추가권! 복이 벌써 찾아올 줄이야! 으…… 유통기한이 지났네……」
      -
      - 오구리 캡은 깜짝 놀라며 주머니에서 종이 한 장을 꺼냈지만, 무료 쿠폰의 유효기간은 이미 한참 지나 있었다.
      - さっきより沈んだオグリキャップを見て、%YOU% は自腹で%SEX%にラーメンをおごることにした。……たぶん、もっと多く。

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「釣った魚は……どう料理するか」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「おお！ 魚が、いっぱいだ！ ……その目は、何か」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……いい空気だ。外が、好きだ。澄んでる」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー、走りたい。……付いてこれるか」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クレーンの中……怪物姿の、私か」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「なぜ、爪が弱い……！」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クロスを、掴みたい。クリークが、喜ぶ」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「抽選か……当たるなら、飯がいい」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「都会でも、ガラポンなんだな」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「われらは勇敢な歩兵隊、大股で進む熱血の決死隊～♪」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「歌も、レースと同じだ。血が、沸く」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クリーク、クロスに童謡を歌ってる……」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「ポスターの人……マヤノの、父親に似てる。……六十過ぎだと？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「うう……ハチ公……うわあああ——」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「『いただきます』は、忘れない」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「うまかった。——ごちそうさま」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「服、きれい……？ ……ありがとう……❤️」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……賑やかだ。田舎と、違う」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……何も、言うな。今を、味わう」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー、撮ってくれ。家族に送る。……撮り方が、わからない」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「箱の中に、人が……！ ……古い冗談、か」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「古い蹄鉄を、飾りに？ ……ブライトに頼めばいい。『近くの人には、言わない方がいい』……？」

s_a_tree_hollow:
  - %YOU% はオグリキャップと中庭の枯れ木の洞へ来た。%SEX%が洞に向かって咆哮する姿を見て、%YOU% はオグリキャップを最強へと導く覚悟を新たにした。

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「学園で、デート……恥ずかしい」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「%THEY%の視線が、刺さる……」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……キス、するか？」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「肉まんは、熱いうちに」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナーの飯は、うまい。……将来、いい嫁だ」
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クロスに、たこ焼きを習った。……食べるか？」
