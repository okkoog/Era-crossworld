调教开始:
  # TFLAGNAME:9 = 강간
  - if: era.get('tflag:9') === 0
    lines:
      - if: era.get('love:64') < 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「에?」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「나랑 그런 걸 한다고?」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「이러면 안 돼 %CALLNAME%, 그게…… 나, 나 먼저 갈게……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「아!」
      - if: era.get('love:64') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「안 돼, 이러면……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「오지 마…… %CALLNAME%❤」
  - if: era.get('tflag:9') === -1
    lines:
      - if: era.get('love:64') < 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「저기, 이런 짓을 한다면 아무리 %CALLNAME%라도……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……하지만 따를게, 명령이라면……」
      - if: era.get('love:64') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「하는 거야?」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「그게, 부끄러워…… 아니, 괜찮아!」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%라면……」

加入房事:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「어째서야, %CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「나도 분명…… 나도 원하고 있었는데……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……아니면, 내가 때를 잘못 맞춰 온 걸까?」
  - acc: 1
    content: 「마침 잘 왔어」
  - acc: 2
    content: 「그건 곤란해……」

加入房事接受:
  - %CHARA%는 눈시울을 붉히며, %YOU%의 품에 쓰러지듯 안겨 황홀하게 숨을 들이켰다.
  - 다시 고개를 들었을 때, 눈동자에는 이미 몽롱한 열기가 서려 있었다……

加入房事拒绝:
  - %CHARA%의 표정은 기대에서 어둠으로 변했고, 실망감을 드리워진 앞머리 속으로 감추었다.
  - %YOU%을(를) 향해 억지로 미소를 지어 보이고는, 어색하고 쓸쓸하게 떠나갔다.

加入房事强上:
  - %YOU%의 거절하려는 목소리를 무시한 채, 단숨에 옷깃을 붙잡았다.
  - 힘껏 자신의 앞으로 끌어당기고는, 강압적으로 입을 맞추었다.
  - 입술을 뗐을 때, %CHARA%는 이미 옷을 벗어 던진 채 당신의 위에서 무표정하게 내려다보고 있었다……

夜袭:
  - 잠결에 몸 아래에서 전해지는 격렬한 자극에 의식이 돌아왔다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하아, %CALLNAME%, %CALLNAME%……」
  - if: d.half_life === 1
    lines:
      - %CHARA%는 %YOU%의 몸 위에 엎드려, 본능에 따라 몸을 좌우로 흔들고 있었다.
      - 손가락으로 %YOU%의 얼굴을 가볍게 꼬집어 쥐고는, 강제로 자신의 방향으로 끌어당겼다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 빨리…… 나를 만족시켜줘……❤」
  - if: d.half_life === 0
    lines:
      - %CHARA%는 %YOU%의 몸 위에 엎드려, 자신의 감정과 본능에 따라 끊임없이 몸을 흔들고 있었다.

되돌아갈 수 없는 도주:
  - 무슨 일이 있었던 것일까, 몇 분 전까지만 해도 웃으며 달변을 토해내던 메지로 파머는 지금 %YOU%을(를) 등진 채 침묵을 지키고 있었다.
  - 아마도 %YOU%이(가) 방금 막 욕실에서 나와, 피어오르는 향긋한 수증기를 머금은 채 노골적인 의도를 담아 그녀의 뒤에 앉았기 때문일지도 모른다.
  - 아니면 정신을 차렸을 때, 자신의 몸에 남은 것이라곤 속옷과 얇은 셔츠 한 장뿐이라는 사실을 깨달았기 때문일까.
  - 원인이 무엇이든, 이 소중한 묘한 분위기는 이미 주변을 에워싸고 있었으며, 여기서 포기하는 것은 그야말로 보물을 썩히는 일이나 다름없었다.
  - 메지로 파머는 일정하게 숨을 몰아쉬고 있었고, 곁에 누워 있는 꼬리는 흥미롭다는 듯 이리저리 흔들리며 무언가를 기대하고 있는 듯했다.
  -
  - acc: 1
    content: 메지로 파머에게 다가가 뒤에서 허리를 감싸 안는다
    lines:
      - 품에 안긴 소녀의 숨소리가 점차 거칠어졌지만, 그녀는 여전히 %YOU%의 팔에 손을 겹치며 간신히 냉정을 유지하려 애썼다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「미안해…… %CALLNAME%, 내가 좀 긴장했나 봐」
      -
      - %YOU%이(가) 움츠러든 그 귀에 대고 위로의 말을 속삭이자, 메지로 파머의 육체가 민감하게 떨리더니 이내 곧 힘을 풀었다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……응, 난 괜찮아…… 해도 좋아, %CALLNAME%…… 이제 더는 도망치지 않을 거니까」
      -
      - 메지로 파머는 %YOU%의 손을 자신의 가슴 위로 가져갔고, %YOU%은(는) 그 흐름을 타 단추를 하나하나 풀어내며 셔츠를 벗겨 소녀의 희고 매혹적인 등을 드러냈다.
      - 팔로 그녀의 두 가슴을 받쳐 들고, 허리와 아랫배를 애무하며, 그녀의 목덜미에 머리를 묻고 체취를 갈구했다……
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……」
      -
      - 메지로 파머의 가녀린 부름에 화답하며, %YOU%은(는) 그녀의 턱을 받쳐 옆으로 돌린 뒤 두 입술을 맞추었다……
  - acc: 2
    content: 제자리에 앉아 메지로 파머 스스로 그 얇은 껍질을 깨기를 기다린다
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……」
      -
      - 잠시 후, 메지로 파머는 몸을 돌려 %YOU%과(와) 마주 앉았으나, 시선은 여전히 허공을 헤매며 아랫입술을 가볍게 깨물고 있었다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「사실…… 이미 각오하고 있었어…… 다음에 하게 될 일에 대해서」
      -
      - 그녀는 셔츠의 단추를 하나씩 풀어내어 가슴을 속박에서 해방시켰고, 옆가슴의 골짜기가 선명하게 드러났다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그러니까, 괜찮아…… 여기서 돌아가 버린다면, 너무 아쉽지 않겠어?」
      -
      - 메지로 파머는 가볍게 숨을 내뱉으며 %YOU%을(를) 바라보고는 후련한 듯 살짝 미소 지었다. 이 말 중 얼마만큼이 자신에게 들려주는 것이었을까?
      - 그녀의 손가락이 가볍게 움직이자 셔츠가 어깨 아래로 미끄러져 내려왔고, 풍만한 가슴이 눈앞에 나타나자 대조적으로 어깨가 유난히 가녀려 보였다.
      - 이미 부끄러움에 두 눈을 질끈 감고 있음에도 불구하고, 눈앞의 소녀는 마치 경건한 공양처럼 자신을 아낌없이 %YOU%에게 내보이고 있었다.
      - 좀 더 감상하고 싶었지만, 차마 더는 견디지 못한 %YOU%은(는) 메지로 파머를 품에 안고 입을 맞추었다……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「음으……」
  -
  - 이것은 정사 전 특유의, 매우 공격적인 입맞춤이었다.
  - 살결이 맞닿고 타액이 섞이며, 요동치는 욕망이 마지막 이성마저 집어삼켰으나 한 가지 사실만은 두 사람 모두 확신하고 있었다.
  -
  - 무슨 일이 있어도, 이제 더 이상은 되돌아갈 수 없다는 것을.