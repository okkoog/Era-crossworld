# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
# @file メジロパーマー - 恋慕
# @author Bottle
# @author KUN
# @author Claude (翻訳)
# [번역 완료] distance
distance:
  # 恋慕24、外出で堤を散歩中に発生
  title: 거리감
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「암냠!」
    -
    - 황혼, %YOU%은(는) 강둑 옆 벤치에 늘어져 앉아 하루의 피로를 발산하고 있었고, 그 옆에는 빵을 입에 가득 물고 먹어치우는 메지로 파머가 있었다.
    - %TEEN%의 밤색 포니테일 아래로 새하얀 뒷덜미가 살짝 보였고, 석양을 등진 채 청춘의 향기를 풍기고 있었다……
    - 정신을 차렸을 때, %YOU%은(는) 이미 오른손을 뻗어 메지로 파머의 머리카락을 헤치고 있었다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응?」
    -
    - 메지로 파머는 입을 삐죽이며 고개를 살짝 돌려, 벽안의 눈동자로 호기심 어린 듯 %YOU%을(를) 응시했다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「움직이지 마, 간지럽단 말이야.」
    -
    - 그러나 죄책감이 %YOU%을(를) 뒤쫓아오기 전, %SEX%는 그저 머리를 흔들어 손길을 뿌리쳤고, 묶인 머리카락이 흩날리며 향기를 풍겼다.
    -
    - 「아…… 미안.」
    -
    - %YOU%은(는) 그제야 자신과 메지로 파머의 거리가 공원의 첫사랑 커플처럼 가깝다는 것을 깨달았다.
    - %SEX% 주변의 온도가 천천히 올라가는 것을 느꼈고, 석양의 빛깔이 %SEX%의 귓가에 조용히 번지는 것을 보았다……
    - 역시 %SEX%도 눈치챈 것일까?
    -
    - acc: 1
      content: 「슬슬 돌아가자, 파머.」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아…… 응.」
        -
        - 메지로 파머는 머리를 정리하며 %YOU%의 발걸음을 뒤따랐다.
    - acc: 2
      content: 「방금 깨달았는데, 파머의 머릿결 정말 예쁘네.」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그…… 그래? 아마 메지로 가문 특제 샴푸의 위력인가 봐, 에헤헤~」
        -
        - 메지로 파머는 웃으며 머리를 긁적였다. 칭찬에 익숙할 %SEX%였지만, 목소리는 이때 미묘하게 변했다.
        - 그것은 수줍음과 초조함이 섞인 %TEEN%의 목소리였다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「시간이 늦었어, %CALLNAME%, 같이 돌아갈까?」
        -
        - 그 변화를 포착한 %YOU%은(는) 그것을 마치 꿀처럼 삼키며, 가벼운 발걸음으로 메지로 파머의 뒤를 따랐다.

# [번역 완료] pre-happy
pre-happy:
  - color: %COLOR%
    content: 【만약 어느 날，%CHARA%나 %YOU%이(가) 잠에 든다면……】

# [번역 완료] happy
happy:
  title: 기쁨
  lines:
    # 연모 39, 한쪽이 혼수 상태일 때 다음 주에 발생
    - 밤, 트레이닝실 안.
    - 이미 깨어난 %YOU%은(는) 차마 떠나지 못했다. 눈앞의 유리창에 그림 같은 풍경이 비치고 있었기 때문이다.
    - 잠든 메지로 파머는 얼굴의 절반을 %YOU%의 오른쪽 어깨에 묻은 채, 창밖의 가득한 별빛을 배경으로 하고 있었다.
    -
    - 고른 숨소리, 평온한 얼굴, 방해하고 싶지 않은 깊은 잠이었다.
    - 그러나 트레이닝실은 숙박하기엔 최악의 장소였고, 무엇보다—— 곧 기숙사 통금 시간이었다.
    -
    - acc: 1
      content: 메지로 파머를 기숙사까지 안아다 준다
    -
    - if: era.get('cflag:71:性别') !== 1
      content: 양손으로 파머의 어깨와 허벅지를 받쳐 든 %YOU%은 남고생의 말 못 할 비밀의 무게를 가늠하고 있다
    - 최근 열심히 다이어트하고 있는 모양이다.
    - 허벅지 안쪽의 부드러운 감촉, 아기처럼 하얀 두 팔, 그리고 변함없는, 오직 메지로 파머만의 체취.
    - %YOU%은(는) 도저히 품 안의 이 귀여운 생명체와 경기장의 늠름한 모습을 연결 지을 수 없었다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「적어도…… 기숙사 문 앞에서는 내려줄래…… %CALLNAME%?」
    -
    - %YOU%은 움찔했다. 파머가 갑자기 깨어나서가 아니다. %YOU%이 한 번도 들어본 적 없는, 토라진 듯한 목소리였기 때문이다.
    -
    - 「지금은 스스로 걷고 싶지 않은거야?」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……응.」
    -
    - 메지로 파머는 얼굴을 %YOU%의 어깨에 파묻고 한쪽 손으로 옷자락을 꽉 쥐었다. 심장 박동과 함께 %SEX%의 불규칙한 숨소리 역시 빨라졌다.
    - 파머의 코에는 자신이 어떤 냄새로 느껴질까. %YOU%은 문득 그런 생각이 들었다.
    - divider: true
    - 기숙사 입구에서 몇 미터 떨어진 나무 그늘 아래, 마침내 땅을 밟은 메지로 파머는 두어 걸음 걷더니 이내 되돌아왔다.
    - %YOU%이(가) 반응하기도 전에, %SEX%는 %YOU%의 양 어깨를 짚고 입술의 형태를 %YOU%의 뺨에 새겼다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오, 오해하지 마, 이건 감사의 키스니까…… 헤헤~」
    -
    - %YOU%은(는) 멍하니 서서, 가로등 불빛 아래 은빛으로 빛나는 머리카락을 휘날리며 달려가는 메지로 파머의 뒷모습을 바라보았다.

# [번역 완료] 49
49:
  title: 온도
  lines:
    # 恋慕49昇格、翌ターンに発生
    - 어느 맑은 오후.
    - 메지로 파머와 고작 40분 동안 병주했을 뿐인데, 이미 탈진할 정도로 지쳐버린 %YOU%은(는) 트레이닝실 소파에 몸을 완전히 맡겼다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하하, %CALLNAME% 너무 약하다니까. %UMA%의 40분은 이제 막 시작이라구.」
    -
    - 그건 인간이 병주할 속도가 아니었다고 반박하고 싶었으나, 너무 피곤해서 한 마디도 내뱉지 못했다.
    - 눈앞의 메지로 파머는 외투를 시원하게 풀어헤친 채 물을 벌컥벌컥 마시고 있었다.
    - 살짝 젖은 스포츠 브라 아래로 땀방울이 맺힌 건강한 복근이 호흡에 맞춰 앞뒤로 꿈틀거리고 있었다.
    - 메지로 파머를 바라보며, 사지가 나른하고 근육통이 심했음에도 불구하고, 몸속 깊은 곳에서는 어떤 갈망이 서서히 고개를 들고 있었다……
    -
    - acc: 1
      content: 「파머, 목말라 죽겠어……」（관계 미갱신）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아하하하~」
        -
        - %YOU%의 초라한 꼴을 보며 메지로 파머는 호탕하게 웃음을 터뜨렸고, 손에 들고 있던 반쯤 마신 물을 던져주었다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼 다음에 또 같이 단련하자. 얼마나 발전할지 기대할게, %CALLNAME%~」
    - acc: 2
      content: 「파머, 마사지 좀 해줄 수 있어?」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「에? 해줄 수는 있는데, 나 인간 마사지는 해본 적 없어서…… 아프게 할지도 몰라.」
        -
        - %YOU%은(는) 상관없다는 듯 손을 저었고, 다리를 두드리며 여기부터 해달라는 표시를 했다.
        - 메지로 파머는 순순히 %YOU% 앞에 무릎을 굽히고 앉아 능숙하게 허벅지 근육을 주물렀다. 다리의 쾌감이 서서히 번져 나갔다……
        - 부끄러움 때문인지 아니면 다른 이유 때문인지, 메지로 파머도 침묵에 빠졌다. 겉으로는 마사지에 집중하는 듯 보였지만, 속으로는 분명 머릿속이 엉망진창이었을 것이다.
        - %SEX%의 굵어지는 숨소리를 들으며, 복숭아처럼 붉게 물든 뺨을 바라보자, %YOU%의 체내 깊은 곳에서 뜨거운 욕구가 끊임없이 솟구쳐 올랐다.
        - divider: true
        - 후끈한 분위기가 잠시 이어지더니 메지로 파머의 동작이 멈췄다. 시선은 %YOU%의 가랑이 사이에 머물렀다.
        - 이곳의 변화는 이미 무시할 수 없는 수준이었다.
        - acc: 1
          key: update
          content: 「이 정도면 됐어, 파머…… 이제 그만하자.」（관계 미갱신）
        - acc: 2
          content: 「괜찮아…… 여기도 부탁해.」（관계 갱신）
          lines:
            - 메지로 파머는 고개를 들었으나, %YOU%과(와) 눈이 마주친 순간 눈빛이 끈적하게 녹아내렸다.
            - %YOU%이(가) %SEX%의 머리 위에 손바닥을 얹고 옆머리를 따라 뺨까지 쓸어내리자, %SEX%의 눈동자에서 마지막 남은 이성이 사라졌다.
            - 주변에 땀 냄새와 열기가 피어오르는 가운데, 메지로 파머는 조심스럽게 손가락으로 %YOU%의 바지 지퍼를 잡았다……
            -
            - 그때, 문밖에서 『다다다』 하는 발걸음 소리가 들려왔다.
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「하이! 무슨 얘기 중이야? 나도 끼워줘 나도!」
            -
            - 문밖의 원기 왕성한 %UMA%는 생각보다 훨씬 빨리 들어왔지만, 다행히 메지로 파머가 이미 일어서서 %YOU%의 앞을 가로막고 있었다.
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「아…… 아무것도 아니야. 아, 맞다, 헬리오스. 그것보다……」
            -
            - 이런 상황에서 진정하는 것은 불가능했다. %YOU%은(는) 아예 자리를 깔고 등 뒤에서 메지로 파머의 몸매를 감상했다.
            - %SEX%의 허벅지 근육은 늠름하면서도 아름다운 곡선을 그리고 있었고, 지금은 긴장한 듯 서로 맞붙어 비벼지고 있었다. 필시 아직 흥분이 가시지 않았기 때문이리라.
            - 몸에 붙는 스포츠 쇼츠는 메지로 가문다운 철저한 관리로 다져진 %SEX%의 크고 둥근 엉덩이 라인을 완벽하게 드러내고 있었다.
            - ……방금 그대로 계속했다면, 안쪽은 어떤 풍경이었을까?
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「미안! %65_CALL% 잠시 빌려 갈게—— 빨리 따라와 %65_CALL%—— 바이바이!」
            -
            - %YOU%이(가) 대답하기도 전에 헬리오스는 다다다 달려 나갔다. 방금 여기서 무슨 일이 있었는지 전혀 눈치채지 못한 것 같다.
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그럼…… 다음에 적당한 곳에서 계속 얘기하자, %CALLNAME%?」
            -
            - 문 앞까지 간 메지로 파머가 뒤를 돌아보더니, 세 손가락으로 원을 만들어 벌린 입가에 대고 앞뒤로 움직이는 시늉을 한 뒤 서둘러 헬리오스를 뒤따라갔다.
            -
            - 복도에서 두 사람이 장난치는 소리가 들려왔다.
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「파…… %65_CALL%? 얼굴이 왜 그렇게 빨개?」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「보지 마 보지 마, 빨리 가자구~」

# [번역 완료] 74
74:
  title: 약속
  lines:
    # 恋慕74昇格、翌週に発生
    - 과거의 여느 황혼과 마찬가지로, 업무를 마친 %YOU%은(는) 메지로 파머를 데리고 교정을 산책하고 있었다.
    - 하지만 오늘 메지로 파머는 평소와 좀 달랐다. 평소엔 수다스럽던 %SEX%가 지금은 작은 보폭으로 %YOU%의 뒤를 따를 뿐이었고, 말을 걸어도 그저 건성으로 대답할 뿐이었다.
    -
    - %YOU%이(가) 의문을 제기하기도 전에 메지로 파머가 먼저 입을 열었다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 우리 관계에 대해서…… 제대로 얘기할 수 있을까?」
    - # EXPNAME:25 = 性交回数
    # EXPNAME:26 = 睡姦回数
    - if: era.get('exp:64:25') > era.get('exp:64:26')
      lines:
        - 「……때가 되었네. 결국 해버렸으니까, 이런저런 일들을.」
        -
        - %YOU%이(가) 뒤를 돌자 눈앞에는 고개를 숙인 메지로 파머가 있었다. 앞머리가 눈을 가리고 있어 현재 감정을 파악할 수 없었다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응, 마치 섹…… 섹스 파트너처럼. 최근 이런 관계가 혐오스럽게 느껴졌어…… 미안해.」
        -
        - 「사과할 필요 없어. 만약 싫어졌다면, 나는——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그게 아니야!」
        -
        - 메지로 파머는 고개를 들었다. 벽안의 눈동자가 %YOU%을(를) 단호하게 바라보았다. 그 표정은 낯익은 것이었다——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「만약 %CALLNAME%가 아니었다면, 당시의 내가 어떻게 지금까지 성장할 수 있었을지 상상조차 안 가. 싫어한다니…… 그럴 리 없잖아.」
        -
        - %YOU%은(는) 회상했다. 그것은 선발 레이스 당일, %SEX%가 자신의 얼굴에 흐르는 눈물을 닦아낸 뒤 고개를 들었을 때의 표정이었다——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「단지…… 이런 몸뿐인 관계는 나에게 더 이상 유지할 수 없는 것이 되어버렸어…… %CALLNAME%도 그렇게 생각하지?」
        -
        - 그것은 내면의 생각을 확신하는 표정이었고, 자신의 마음을 상대에게 간절히 전하고 싶어 하는 표정이었다. 과거에는 담당의 약속이었으나, 지금은——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「만약…… 이런 관계가 한 걸음 더 나아갈 수 있다면?」
    - if: era.get('exp:64:25') === era.get('exp:64:26')
      lines:
        - 「음…… 지난번 트레이닝실에서의 일 말인데——」
        -
        - 예상대로 메지로 파머의 얼굴은 순식간에 새빨개졌고, 이내 두 손으로 얼굴을 가린 채 가느다란 목소리로 애원했다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그…… 그날 일은 잊어줘!」
        -
        - acc: 1
          content: 「아아, 신경 안 써…… 오히려 내가 사과하고 싶네. 그때 좀 너무 들떴던 것 같아.」
          lines:
            - 메지로 파머는 아무 말도 하지 않았지만, 두 팔로 가슴을 감싸고 바닥을 바라보았다. 뺨은 여전히 붉었으나 표정으로 보아 어떤 결심을 내린 듯했다.
        - acc: 2
          content: 「그날 이후로 계속 궁금했는데, 그 동작……도대체 어디서 배운 거야?」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「더 이상 말하지 마!」
            -
            - 메지로 파머는 조급하게 %YOU%의 가슴을 때렸고, 트레이너가 아파하는 소리를 내자 당황하며 사과했다. 마치 주인에게 잘 보이려고만 하는 대형견 같았다.
            - ……힘이 유독 세긴 하지만.
            -
            - 겨우 진정한 메지로 파머는 손을 등 뒤로 하고 신발 끝을 비비며 천천히 입을 열었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%가 그날 이후로 나에게 아무것도 하지 않아서 고마웠어. 하지만……」
        -
        - 메지로 파머는 옆의 분수를 바라보았다. 물줄기가 생각처럼 뿜어져 나와 하나로 이어지고 있었다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「매번 %CALLNAME%를 생각할 때마다 사고가 정지해버려. 머릿속에는 어떻게 하면 나를 봐줄까 하는 생각뿐…… 마치——」
        -
        - %SEX%는 잠시 말을 멈췄다. 석양이 %SEX%의 옆얼굴을 그림처럼 수려하게 비추고 있었다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「마치 끝없이 이어지는 마지막 직선을 달리는 것 같아. 분명 골인지점이 눈앞인데 아무리 해도 닿을 수가 없어.」
        -
        - 메지로 파머는 손을 뻗어 %YOU%의 옷자락을 붙잡고 손가락으로 매만졌다. 마치 닿아 있다는 실감을 갈구하는 듯했다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그리고 뒤에서는, 언제 쫓아올지 모르는…… 다른 아이들이 있어.」
    - 메지로 파머는 %YOU%의 답변을 기다리고 있다.
    -
    - acc: 1
      key: update
      content: 「미안해…… 지금은 대답해 줄 수 없어.」（관계 미갱신）
    - acc: 2
      content: 「응, 그럼 여기서부터 시작하자…… 우리 둘만의 길을.」（관계 갱신）
      lines:
        - %YOU%은(는) 메지로 파머의 손을 잡고 앞으로 끌어당겼다. %TEEN%의 얼굴에 놀란 기색이 스쳤으나, 곧 알아차린 듯 조용히 두 눈을 감고 까치발을 들었다……
        - 그것은 풋풋한 입맞춤이었다. 입술과 입술이 닿은 것은 단 몇 초였지만, 서로 사랑의 계약을 맺기에 충분했다.
        -
        - 메지로 파머는 곧 평소의 밝은 모습으로 돌아왔고, 평소처럼 웃고 떠들며 %YOU%과(와) 함께 자갈길을 산책했다.
        - 오직 달라진 점은 반 뼘밖에 남지 않은 거리, 그리고 석양 아래 맞잡은 열 손가락뿐이었다……

# [번역 완료] 89
89:
  title: 따뜻한 태양
  lines:
    # 恋慕89昇格、任意の外出
    - 어느 맑은 휴일, 메지로 파머는 %YOU%을(를) 메지로 가문의 정원으로 안내했다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「낮잠 time! %CALLNAME%, 이쪽이야 이쪽~」
    -
    - %YOU%이(가) 넓은 침실을 가로지르자, 발코니 근처 원형 소파에 반쯤 누워 웃으며 손짓하는 메지로 파머가 보였다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「여긴 내가 직접 설계한 휴식처야. 옥상의 햇살과 바람도 있고, 침대의 안락함도 누릴 수 있어. 대단하지?」
    -
    - 몸을 부드러운 깃털 소파에 묻자마자, 방 안의 아로마 향기가 산들바람을 타고 은은하게 풍겨왔다.
    - 메지로 파머는 약속이라도 한 듯 %YOU%의 곁에 기대왔다. 팔에 닿는 부드러운 감촉은 깃털보다 포근했고, 어깨 너머로 불어오는 %TEEN%의 숨결은 아로마보다 향긋했다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「따뜻해…… 평생 여기 누워있을 수 있을 것 같아~」
    -
    - 메지로 파머는 몸을 쭉 펴고 %YOU%의 어깨에 얼굴을 비벼댔고, 곧 숨을 죽인 채 %YOU%과(와) 함께 잠시의 평온함을 만끽했다.
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… 만약 나랑 결혼한다면, 아이는 몇 명이나 갖고 싶어?」
    -
    - 갑작스러운 메지로 파머의 말에 %YOU%은(는) 비몽사몽한 상태에서 정신을 차렸다.
    -
    - acc: 1
      key: update
      content: 「무슨 바보 같은 소리야, 벌써 그런 얘기를 하기엔 이르잖아.」（관계 미갱신）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하하, 그렇네.」
        -
        - 메지로 파머는 %YOU%의 팔을 꽉 껴안고 얼굴을 그 사이에 묻더니, 얼마 지나지 않아 깊이 잠들었다……
    - acc: 2
      content: 「글쎄, 아무리 많아도 여기라면 다 수용할 수 있지 않을까?」（관계 갱신）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응…… 할머님께서 말씀하셨어. 우리가 원한다면 아이들을 전부 여기서 키워도 된다고. 메지로 가문의 영광이 영원하도록 말이야.」
        -
        - %YOU%은(는) 메지로 파머를 바라보았다. %SEX%의 시선은 %YOU%의 가슴 너머 창밖을 향하고 있었다. 메지로 가문의 초원 위에서 아이들이 햇살을 받으며 달리고 있었다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만…… 아이들이 %CALLNAME%와 함께, 바깥의 더 넓은 세상에서 사는 것도 나쁘지 않을 것 같아.」
        -
        - %SEX%는 먼 곳을 향하던 시선을 거두고 베개에서 미끄러지듯 내려왔다. %YOU%도 자연스럽게 몸을 옆으로 뉘어 %SEX%와 마주 보았다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「미안, 지금 이런 고민을 할 때는 아닌 것 같네…… 히히~」
        -
        - %YOU%은(는) 메지로 파머의 얼굴을 보며 %SEX%의 머리카락 끝을 만졌다. 그리고 목덜미를 받치고 고개를 살짝 돌려 입을 맞추었다.
        - 처음에는 그저 입술이 닿아 살짝 깨무는 정도였으나, 혀끝의 유혹과 함께 서로를 갈구하며 빨아들이는, 깊은 곳을 적극적으로 탐색하는 키스로 변했다……
        -
        - 잠시 후, 한바탕 타액을 교환한 메지로 파머의 눈동자는 이미 몽롱하게 풀려 있었다.
        - %SEX%는 혀를 내밀고 거친 숨을 몰아쉬었다. 뜨거운 숨결에는 음란한 향기가 섞여 있었고, 여전히 여운에 잠겨 있는 듯했다.
        - if: era.get('cflag:64:0') !== 1
          content: 메지로 파머는 흰 셔츠를 입고 있었고, 풍만한 가슴이 한데 모여 풀어헤쳐진 깃 사이로 골짜기를 드러내고 있었다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%…… 괜찮아. 하고 싶다면, 소리는 조금만 낮춰줘…… %SIBLINGS%들에게 들키면 곤란하니까.」
        -
        - acc: 1
          key: sex
          content: %YOU%은(는) 메지로 파머의 가슴 단추를 하나씩 풀어나갔다……
        - acc: 2
          content: 「들키면 곤란하겠지…… 지금은 안 돼.」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그렇구나, 그럼 내 손을 잡고 조금만 참아줘~」
            -
            - 메지로 파머는 %YOU%과(와) 손깍지를 꼈고, 이내 다시 서서히 결혼 후의 전망을 읊조리기 시작했다……

# [번역 대상] 99
99:
  title: 자물쇠
  lines:
    # 恋慕99、一週間性行為なし
    - color: %COLOR%
      content: 끈적한 연애에 빠진 트레센 %UMA%들에게는, 연인과 만날 수 없는 시간이 늘 있기 마련이다.
    - color: %COLOR%
      content: そんなとき、%THEY%のルームメイトは息を合わせてちょうどいい頃に部屋を空け、%THEY%に私時間を残す——カツラギも例外ではない
    -
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「어이, %104_CALL%, 나 두어 바퀴 뛰고 올게. 문 닫기 몇 분 전에는 돌아올 거니까…… 너무 오래 끌지 마.」
    -
    - color: %COLOR%
      content: %CALLNAME%と肌を重ねてから、もう何日になるだろう
    - color: %COLOR%
      content: 문 닫히는 소리를 들은 메지로 파머는 조급하게 잠옷을 풀어헤치고 상반신을 전등 빛 아래 드러냈다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아❤…… 하아❤…… 하아❤……」
    -
    - color: %COLOR%
      content: 평소처럼 메지로 파머는 위에서 아래로 자신의 피부를 훑어 내렸고, 허리는 그 동작을 따라 괴로운 듯 뒤틀렸다.
    - color: %COLOR%
      content: 속옷이 더러워지기 전에 벗겨내고, 손가락으로 허벅지 안쪽을 지나 치골 라인을 따라 꽃잎까지 훑었다……
    - color: %COLOR%
      content: 하지만…… 이 개운치 않은 기분은 무엇일까? 메지로 파머는 동작을 멈췄다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    -
    - color: %COLOR%
      content: 메지로 파머는 깨달았다. 자신의 몸은 이미 %CALLNAME%가 멀리 있을 때 기쁨을 느끼고 싶어 하지 않는다는 것을. 그저 아주 조금이라도 좋으니……
    - color: %COLOR%
      content: 설령 그것이 %CALLNAME%의 입맞춤이든, 목덜미에 닿는 손길이든, 귓가에 스치는 숨결이든 상관없었다.
    - color: %COLOR%
      content: 혹은 옷에 남은 냄새, 머리카락의 향기, 자기 전의 나지막한 속삭임…… 무엇이든 좋았다.
    - color: %COLOR%
      content: 참을 수 없게 된 메지로 파머는 은밀한 곳을 눌러 흥분을 억누른 채, 다른 한 손으로 %CALLNAME%에게 전화를 걸었다……
    -
    - acc: 1
      key: update
      content: 「연결이 되지 않아 음성 사서함으로 연결됩니다……」（관계 미갱신）
    - acc: 2
      content: 「여보세요? 파머, 무슨 일이야?」（관계 갱신）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아…… 아무것도 아니야, 그저 %CALLNAME%의 목소리가 듣고 싶어서.」
        -
        - color: %COLOR%
          content: %CALLNAME%의 대답을 들은 순간, 메지로 파머는 손가락을 움직이기 시작했다. 젖어서 부풀어 오른 돌기 위에 원을 그리며……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%의 목소리만 있으면, 왠지…… 안심이 돼…… 하아~」
        -
        - color: %COLOR%
          content: 이미 스위치가 켜져 버린 메지로 파머는 수치심도 잊은 채 두 다리를 벌리고 %CALLNAME%를 품에 안는 상상을 하며, 손가락에 맞춰 허리를 흔들었다……
        -
        - acc: 1
          content: 「파머는 정말 나쁜 아이네…… 내 목소리로 이런 짓을 하다니.」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「미안…… 윽❤…… %CALLNAME%의 목소리가…… 너무 다정해서, 그만…… 하아❤」
        - acc: 2
          content: 「파머, 어디 불편한 데라도 있어? 숨소리가 많이 거칠어 보이는데.」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「괴…… 괴롭히지 마, %CALLNAME%…… 응❤」
            -
            - color: %COLOR%
              content: 메지로 파머는 %CALLNAME%의 동작을 흉내 내며 자신의 커다란 가슴을 뒤섞었다. 상상 속의 그 커다란 두 손이 받치고, 주무르고, 잡아당기는 감촉을 느끼며……
            - color: %COLOR%
              content: %CALLNAME%라면 손끝으로 유륜에 원을 그리고, 유두가 발기할 때까지 유혹한 뒤, 마지막엔 힘껏 빨아주겠지……
            - color: %COLOR%
              content: 그다음엔 분명……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하아❤, 하아❤…… %CALLNAME%…… 어떤 자세를 가장 좋아해? ……우마뾰이 할 때.」
        -
        - acc: 1
          content: 「파머의 얼굴을 볼 수 있는 자세가 제일 좋아.」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「잠…… 잠시뿐이야, 계속 쳐다보면…… 부끄러우니까.」
            -
            - color: %COLOR%
              content: 그렇게 말하면서도 메지로 파머는 무릎을 가슴까지 끌어올려, 가장 깊숙이 받아들이기 쉬운 자세로 탐스러운 비소를 노출했다.
            - color: %COLOR%
              content: %CALLNAME%가 했던 것처럼, 메지로 파머는 한 손으로는 두 다리를 감싸 안고, 다른 한 손의 손가락은 비처에 집어넣어 휘저으며, 흘러나온 애액이 꼬리를 적시도록 내버려 두었다.
        - acc: 2
          content: 「뒤에서 파머의 몸을 차지하고 싶어.」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「괜찮아…… 몇 번이라도 좋아.」
            -
            - color: %COLOR%
              content: 메지로 파머는 몸을 뒤집어 엉덩이를 높게 쳐들고 꼬리를 한쪽으로 치웠다. 다리 사이로 꿀 같은 애액이 뚝뚝 떨어졌다.
            - color: %COLOR%
              content: 손가락을 비처에 찔러 넣고 %CALLNAME%가 좋아하는 리듬에 맞춰 삽입을 반복하자, 애액이 뒤섞이는 소리와 함께 허리는 유혹적인 곡선을 그리며 가라앉았다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아❤, 아❤, 아❤~」
        -
        - color: %COLOR%
          content: 비소 속을 침범당한 메지로 파머는 끝내 신음 소리를 참지 못했고, 목구멍에서 새어 나오는 교성이 끊이지 않았다.
        - color: %COLOR%
          content: %CALLNAME%와의 정사를 상상하는 동시에, 발정기 짐승처럼 쾌락을 갈구하는 자신에게 흥분하고 있었다.
        - color: %COLOR%
          content: 정점에 도달하기 직전, 메지로 파머는 갑자기 속도를 늦췄다. 몸은 이미 고조를 갈구하며 경련하고 있었지만, 그럼에도——
        -
        - color: %COLOR%
          content: 어떻게 해서든…… %CALLNAME%의 허락을 듣고 싶었다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%, 이제 곧…… 나…… 가도 돼?」
        -
        - acc: 1
          key: orgasm
          content: 「좋아.」（성욕 하강, 컨디션+1）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……으응❤」
            -
            - color: %COLOR%
              content: 허락이 떨어지자마자 메지로 파머는 가볍게 몸을 움직였을 뿐인데도 조건반사처럼 몸을 활처럼 굽혔고, 눈동자는 거의 풀려 있었다.
            - color: %COLOR%
              content: 손가락이 빠져나가자마자 물줄기가 솟구쳐 올랐고, 이내 메지로 파머의 가쁘고 음란한 숨소리만이 방을 채웠다.
            - color: %COLOR%
              content: 잠시 후, 메지로 파머는 간단히 현장을 정리하고 이불 속으로 기어 들어가 여운과 함께 %CALLNAME%에게 굿나잇 인사를 건넸다.
        - acc: 2
          content: 「안 돼.」（성욕 상승, 컨디션-1）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「에? 아…… 알겠어…… 너무 오래 기다리게 하지는 마.」
            -
            - color: %COLOR%
              content: 메지로 파머는 몸을 돌려 이불 속에 파묻혔다. 몸은 달아오를 대로 달아올랐으나, 두 다리로 다키마쿠라를 꽉 낀 채 %CALLNAME%에게 잘 자라는 인사를 했다.
        -
        - color: %COLOR%
          content: 메지로 파머는 전혀 눈치채지 못했다. 늘 당당했던 자신의 룸메이트가 지금 입구 근처 화장실에서 수증기를 뿜어내고 있다는 사실을.
        - color: %COLOR%
          content: %SEX%가 확신하는 것은, 자신의 몸도 마음도 그 사람 곁에 단단히 묶여 있다는 것이었다.
        - color: %COLOR%
          content: それは%TEEN%が永遠に抜けられない、涙で形を刻み、蜜汁で鋳造された愛の錠

# [번역 완료] here
here:
  title: 여기서도 괜찮아
  lines:
    # 条件：熱恋以上、2週間性行為なしで週を越えると発生
    - 영화관, %YOU%과(와) 메지로 파머는 뒷좌석에 앉아 지루한 듯 시간을 보내고 있었다. 영화보다는 서로에게 주의를 집중하는 쪽을 택한 것이었다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「굳이 따라올 필요 없다고 했잖아. 헬리오스는 맨날 이런 지루한 영화만 보자고 하더니, 이번엔 지 혼자 가버리고……」
    -
    - 그렇게 말하면서도, 메지로 파머는 %YOU%의 어깨에 기대어 이 오붓한 시간을 갖게 된 것을 내심 기뻐하고 있었다.
    - 스크린 빛에 비친 메지로 파머의 졸음 가득한 옆얼굴은 유독 매력적이었고, 스커트 아래의 새하얀 허벅지는 %YOU%의 바로 옆에서 손만 뻗으면 닿을 듯했다……
    - 그러고 보니, 마지막으로 %SEX%를 안았던 게 언제였더라?
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%？」
    -
    - 정신을 차렸을 때, %YOU%의 손은 이미 %TEEN%의 다리 위에 놓여 있었다. 손가락 끝이 치맛자락 안으로 파고들자 메지로 파머는 %YOU%의 손등을 눌렀으나, 밀어내지는 않았다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이런 건, 돌아가서…… 해도 되잖아. 여기는 좀……」
    -
    - acc: 1
      content: 「하지만 난 이미 한계야…… 부탁해, 파머.」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「으…… 네가 그렇게까지 말한다면.」
    -
    - 메지로 파머는 주변을 살피며 아무도 없는 것을 확인한 뒤, %YOU%의 가랑이 사이로 손을 뻗었다. 귓가로 들려오는 거친 숨소리가 점점 급해졌다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아…… %CALLNAME%…… 대단해.」
    -
    - %SEX%는 옷감 위로 잠시 확인하더니, 이미 충혈되어 딱딱하게 부풀어 오른 %YOU%의 성기를 해방해 세 손가락으로 천천히 흔들기 시작했다.
    - 쾌감이 하반신을 타고 흘렀고, 메지로 파머의 입술 사이로 새어 나온 열기가 귓속을 파고들며 전신을 짜릿하게 만들었다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아…… 하아…… %CALLNAME%…… 아주 기분 좋아 보여……」
    -
    - 위아래, 위아래. 메지로 파머는 %YOU%이(가) 좋아하는 리듬을 아는 듯, 정성껏 손으로 봉사하면서 부드럽게 귓바퀴에 입을 맞췄다.
    - %SEX%는 검지로 끝부분에서 흘러나오는 액체를 닦아내었고, 동작에 따라 음란한 물소리를 내며 점점 속도를 높였다……
    - 팔은 메지로 파머의 가슴에 꽉 눌려 있었고, 귓속은 혀끝으로 유린당했으며, %SEX%의 감출 수 없는 욕정 어린 목소리가 뇌리에 울려 퍼졌다……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아, 하아, 하아…… 좋아, 사정해 줘…… 뒷감당은 나한테 맡기고…… 하아.」
    -
    - 이미 주변을 신경 쓸 겨를도 없이, %YOU%은(는) 메지로 파머의 품 안에서 사정을 맞이했다. 하지만 사정 직전, 성기는 따뜻한 온기에 감싸였다.
    - 메지로 파머는 몸을 숙여 성기를 뿌리 끝까지 입안에 머금었고, 목구멍으로 쏟아지는 정액을 받아내었다. %YOU%에게 뒷머리를 눌린 채, 마치 도구처럼 사용되는 것을 받아들였다.
    - divider: true
    - 영화관을 나설 때, 상영관 안에는 불과 몇 사람만이 남아 있었다. %YOU%과(와) 메지로 파머는 하품을 하며 방금 본 영화 내용을 이야기했다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하아암—— 지루하긴 했지만, 이런 영화도 가끔은 나쁘지 않네…… 헤헤.」
    -
    - 메지로 파머는 만족스러운 듯 %YOU%의 팔짱을 꼈지만, %YOU%은(는) 다른 생각을 하며 %SEX%의 얼굴을 빤히 쳐다보았다.
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왜 그래…… %CALLNAME%?」
    -
    - 그것은 꼬불꼬불한 검은색 털 한 가닥이었다. 낙인처럼 %TEEN%의 입가에 달라붙어 있었다.
    - ……%SEX%에게 알려줘야 할까?

# [번역 완료] escape
escape:
  title: 너와 함께 세상 끝까지 도망쳐
  lines:
    # 恋慕＞49のあと、バレンタインに発生
    - 발렌타인데이 당일, 트레센 전체가 분홍빛 분위기에 휩싸였다.
    - 정춘 시절의 학생들 눈에는 이 날이야말로 소중한 날이다. 대부분의 %UMA%들은 의미가 깊은 이 날에 마음을 담은 선물을 보낸다.
    - 예를 들어 지금 학생회 앞에는 초콜릿을 주려는 학생들로 가득 줄이 늘어서 있다.
    - 하지만 그에 반해, 집무실에 있는 %YOU%쪽은 조금 조용하다.
    - 아무래도 교직원에게 선물을 주는 일은 드문 일이기 때문이다.
    - 음, 대부분은 그렇다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「여어! 트레이너!」
    - acc: 1
      content: 「파머?」
    - 파머가 문 너머로 고개를 내밀었다. 꼬리를 조금 불안하게 좌우로 흔들며 %YOU%의 시야 안으로 들어왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「잠깐 나랑 같이 나가주지 않을래?」
    - acc: 1
      key: out
      content: 「좋아」
      lines:
        - 발렌타인데이의 분위기가 짙다. 집무실에서 나오자마자 주변에서 초콜릿 향기가 계속해서 풍겨왔다.
        - 초콜릿의 내용물이나 의미에 대해서는 일단 모른 척하기로 했다.
        - 주변의 다른 학생들을 피해 두 사람은 안심하고 좁은 길을 산책했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「발렌타인데이네…… 다들 정말 시끌벅적해」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「코스 위에도 훈련하는 친구들이 거의 없어. 평소랑은 정말 딴판이야」
        - 파머의 시선이 주변을 몇 번이나 두리번거렸고, 조금은 마음이 딴 데 가 있는 듯했다.
        - acc: 1
          content: 「다들 발렌타인데이를 즐기고 있는 거겠지」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만 그런 건 상관없어~」
        - acc: 1
          content: 「기분이 좋아 보이네」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그거야 당연하지! 다들 즐거워 보이고, 나도 초콜릿을 받았거든?」
        - 파머가 가볍게 두어 걸음 달려가 %YOU%의 앞에서 몸을 돌렸다.
        - 두 손을 등 뒤로 숨기고 몸을 살짝 앞으로 숙인 채, 발걸음을 천천히 뒤로 옮겼다.
        - 시선은 평온하게 %YOU%의 눈을 바라보았고, 얼굴은 살짝 붉어졌다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만…… 트레이너를 불러낸 건 그런 것 때문이 아니야」
        - 갑자기 발걸음을 멈추고는, 줄곧 등 뒤에 숨기고 있던 양손을 들어 검은 상자 하나를 가슴 앞에 놓았다.
        - 잠시 멈칫하더니, %YOU%을(를) 향해 내밀었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「해피 발렌타인! ……그리고, 이건 답례로 주는 초콜릿이랑은 조금 다르다구?」
        - 행인%UMA% 「아! 파머 선배님이다!」
        - 행인%UMA% 「파머 선배님! 제 초콜릿을 받아주세요!」
        - 파머의 귀가 번쩍 솟아올랐고, 조금 당황하며 고개를 돌렸다.
        - 평소 남을 잘 돕는 성격 탓에 학원 내에서 파머의 인기는 놀라울 정도로 높았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아, 저기, 일단 이쪽으로!」
        - 파머는 초콜릿을 %YOU%의 품에 밀어넣고는, 손을 잡고 달리기 시작했다.
        - 학원을 빠져나와 몇 개의 좁은 길을 우회한 뒤에야 겁에 질린 표정으로 뒤를 돌아보았다.
        - 어느덧 학원 뒷산까지 올라와 있었다.
        - 아무도 따라오지 않는 것을 확인하고서야 온몸의 힘을 빼며 손을 놓았다.
        - acc: 1
          content: 「파머, 괜찮아?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「괜찮아 괜찮아, 그냥 조금 지쳤을 뿐이야……」
        - 파머는 무릎을 짚고 조금 부자연스럽게 숨을 몰아쉬었다.
        - 오직 꼬리만이 좌우로 계속 흔들리며 %YOU%의 다리를 가볍게 스쳤다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「여기는 괜찮을 거야. 우리 둘뿐이네, 하하……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「후우…… 심호흡……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「역시 특별한 초콜릿을 주는 걸 남에게 들키는 건 조금 부끄럽네, 에헤헤」
        - 숨을 다시 고른 파머가 아까의 초콜릿을 다시 꺼냈다.
        - acc: 1
          key: special
          content: 「특별한 것?」
          lines:
            - 초콜릿을 건네받은 %YOU%이(가) 무심결에 한마디를 내뱉었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「응, 특별한 거야」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「가격이나 포장 같은 게 아니라……」
            - 파머의 말이 입안을 맴돌며 마지막 단어를 고르고 있었다.
            - 초콜릿을 건네준 뒤의 양손이 가슴 부근에서 불안하게 교차되었다. 마치 마음속의 어지러운 감정을 투영하는 듯했다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「하아」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그게 %SELF_CALL%…… 내가 직접 만든 거야」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그게, 진……」
            - 처음의 기세는 좋았지만, 파머의 붉게 달아오른 얼굴은 나머지 말을 잇지 못함을 말해주고 있었다.
            - 하지만 뒤에 이어질 말은 이미 양쪽 모두가 잘 알고 있었다.
        - if: era.get('love:64') >= 75
          acc: 2
          content: 「진심 초콜릿이라는 거지?」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「응, 진심이야」
            - %YOU%의 물음에 한순간의 망설임도 없이 대답했다.
            - 초콜릿이 자신의 손에서 떠나가는 것을 확인하고 나서야 파머는 해방된 양손을 등 뒤로 거두었다.
            - 몸을 살짝 앞으로 숙인 채, 고개를 돌려 옆의 풍경을 바라보았다.
            - 풍경을 본다고는 했지만 실은 제대로 보고 있지 않았다.
            - 귀를 쫑긋거리며 %SEX%가 기대하고 있는 목소리가 들려오기를 기다리고 있었다.
            - acc: 1
              content: 「고마워, 파머」
            - 귀가 살짝 떨리더니 이내 아래로 조금 처졌다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그냥 고맙다는 것뿐이야……?」
            - acc: 1
              content: 「그리고, 나도 널 좋아해, 파머」
            - 다시 얼굴을 돌린 파머는 이미 수줍은 다홍색으로 물들어 있었다.
            - 몸을 조금씩 움직여 %YOU%의 곁으로 다가와 팔을 붙잡았다.
            - 다만 이 아름다운 순간에, 불쑥 솟아오른 작은 텐트는 그리 어울리지 않았다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……할 거야?」
            - 파머의 눈빛은 조금 움츠러들었지만, 양손은 이미 허리춤으로 올라가 %YOU%의 허리의 부드러운 살을 살짝 꼬집었다.
            - acc: 1
              key: location
              content: 「여기서 말이야?」
            - acc: 2
              content: 「아니면 호텔이라도……」
          # 馬跳
    - acc: 2
      content: 「오늘은 아직 일이 남아서……」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「괜찮아 괜찮아! 기다릴 수 있어…… 그게, 들어가도 될까?」
        - 동의를 구하는 중이었지만 몸은 이미 안으로 들어와 있었다.
        - 집무실 안을 좌우로 두리번거리더니 책상 옆에 몸을 기댔다.
        - 깨끗한 책상 위에는 개인 소지품 외에도 몇 조각의 초콜릿이 흩어져 있었다.
        - 파머의 시선이 멍해지더니 이내 찔리는 구석이 있는 듯했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기…… 이 초콜릿은 뭐야?」
        - acc: 1
          content: 「하야카와 씨가 주신 거야.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아, 하야카와 씨였구나……」
        - 파머는 머리를 짚으며 묘한 미소를 지어 보였다.
        - 웃고는 있었지만 다른 한 손은 불안하게 등 뒤에서 흔들리고 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그러니까, 트레이너는 아직 발렌타인 선물을 못 받았다는 거지?」
        - 등 뒤에 있던 손이 떨리며 정성스럽게 포장된 초콜릿 상자 하나를 꺼냈다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이건…… 어쨌든 그거야, 발렌타인 선물」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「말하자면 지…… 지……」
        - 파머의 목소리가 가늘게 떨렸고 본래 하려던 말은 목구멍에 걸려 나오지 않았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「원래부터 트레이너한테 주려고 했던 거니까…… 아무튼 받아 줘!」
        - 조금 어색하게 말을 이어붙인 뒤에야 초콜릿을 %YOU%의 방향으로 내밀었다.
        - 그리고 파머 본인은 다른 방향으로 고개를 돌려 얼굴을 숨겼다.
        - acc: 1
          key: special
          content: 초콜릿을 받는다
        - if: era.get('love:64') >= 75
          acc: 2
          content: 「진심 초콜릿이야?」
          lines:
            - %YOU%의 목소리를 듣자 파머가 다시 얼굴을 돌렸다.
            - 본래 산뜻하던 얼굴은 이제 넓게 홍조가 퍼져 있었고, 귀는 부자연스럽게 파르르 떨리고 있었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「진심이라니…… 의식하고 나서 입 밖으로 내뱉는 건 정말 쑥스럽다구……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「난 트레이너가 좋아…… 그래서 어느샌가 다 만들어버렸어」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「아까 다른 초콜릿을 봤을 땐 정말 깜짝 놀랐다니까」
            - 파머의 목소리는 작았지만 매우 또렷했다.
            - 오직 둘뿐인 집무실 안에서 파머는 어딘가 조금 외로워 보였다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「저기, 트레이너, 발렌타인데이…… 나랑 같이 있어 줄 수 있을까?」
            - acc: 1
              content: 「당연히 되지」
          # 馬跳

# [번역 대상] valentine_out_after_sex
valentine_out_after_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「응?」
  - 조심스럽게 자신의 옷을 정리하고 나서야 파머가 자리에서 일어났다.
  - 고개를 내밀어 좌우를 살피며 주변에 아무도 없음을 확인한 뒤에야 안심하고 밖으로 나왔다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「만지지 마, 간지럽단 말이야.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「적어도…… 기숙사 문 앞에서는 내려줄래…… %호칭%?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……응.」

valentine_office_after_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「오, 오해하지 마, 이건 감사의 키스니까…… 헤헤~」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하하, %호칭% 너무 약하다니까. %우마무스메%의 40분은 이제 막 시작이라구.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%호칭%, 우리 관계에 대해서…… 제대로 얘기할 수 있을까?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「낮잠 time! %호칭%, 이쪽이야 이쪽~」

# 依存心シリーズ

# [번역 완료] trust
trust:
  title: 네가 믿어주는……
  lines:
    # 恋慕＞80で恋慕イベント受領の有無は不問、G1敗戦が3超、総勝場が4未満、シニア級以降にパーマーが自主トレ。シニア級のレース後は発生しない
    - divider: true
      content: 기숙사
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오늘, 트레이너는 오지 않았어」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「역시…… 실망한 거겠지」
    - color: %COLOR%
      content: 파머는 침대에 누워 작은 소리로 혼잣말을 했다.
    - color: %COLOR%
      content: 옆에 있는 에이스는 진작에 꿈나라로 떠났지만, 오늘 밤의 파머는 창밖의 달빛을 바라보며 도무지 잠들 생각을 하지 못했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왜 오늘은 트레이너가 내 곁에 없는 걸까」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왜 트레이너는 내 곁에 있어 주지 않는 걸까」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「만약 계속해서 트레이너를 실망시킨다면……」
    - （「파머, 난 이제 너한테 질렸어」）
    - （「파머, 우린 여기까지야」）
    - （「잘 가」）
    - color: %COLOR%
      content: 파머가 벌떡 일어나 이불을 걷어찼다. 입으로는 거친 숨을 몰아쉬고 있었다.
    - color: %COLOR%
      content: 분명 잠들지 않았음에도 불구하고 악몽을 본 듯했다.
    - color: %COLOR%
      content: 하지만 머릿속 화면의 %YOURNAME%의 목소리는 너무나 생생해서 마치 본인이 눈앞에 서 있는 것만 같았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……」
    - color: %COLOR%
      content: 어느덧 눈가에는 눈물이 가득 고여 있었다.
    - color: %COLOR%
      content: 붉게 달아오른 눈가에서 눈물을 닦아내고서야 비로소 지금 자신의 진심을 이해할 수 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 그런 거였구나」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「난 트레이너를, 난 트레이너에게……」
    - color: %COLOR%
      content: 시선이 무심코 옆으로 향했다. 룸메이트를 방해하지 않았음을 확인한 뒤에야 다시 이불을 끌어올려 몸을 웅크렸다.
    - color: %COLOR%
      content: 이불을 붙잡고 자신을 덮으며 이불 속에 파묻혔다.
    - color: %COLOR%
      content: 두 손을 천천히 들어 가슴을 압박했다.
    - color: %COLOR%
      content: 심장 박동은 여전히 빨라지고 있었다. 마치 레이스 중에 있는 듯한 기분이었다.
    - color: %COLOR%
      content: 하지만 이 두근거림은 단 한 사람만을 생각하며 느끼는 것이었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……」
    - color: %COLOR%
      content: 땀이 잠옷을 적셨고 숨소리는 점점 커져갔다.
    - color: %COLOR%
      content: 어느 정도 시간이 흘렀을까, 파머가 흠뻑 젖은 이불 속에서 머리를 내밀었다.
    - color: %COLOR%
      content: 얼굴에 황홀한 미소를 띤 채 천천히 눈을 감았다.
    - color: %COLOR%
      content: 시간은 이미 한밤중을 넘겼고 조금씩 졸음이 밀려오기 시작했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아아, 트레이너」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말 보고 싶어」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네가 없다면…… 네가 없다면 난……」
    - color: %COLOR%
      content: 파머는 침대에 누워 가볍게 웃음을 흘렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너가 없다면, 난 영원히 멈춰버리겠지……」
    - color: %COLOR%
      content: 열이 오른 몸은 점차 꿈나라로 가라앉았고, 얼마 지나지 않아 친절한 룸메이트에 의해 흔들어 깨워졌다.
    - color: %COLOR%
      content: 태양이 높이 떴다. 이미 일어날 시간이 된 것이다.
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「파머, 일어날 시간이라구! 너답지 않게 정말 깊게 잠들었네.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「에, 그랬어?」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「그치만 자면서 계속 웃고 있었어. 좋은 꿈이라도 꾼 거야?」
    - color: %COLOR%
      content: 파머는 가슴을 부여잡으며 자연스레 얼굴에 미소를 띄웠다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응, 좋은 꿈 꿨어」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아주 멋진 꿈이었어……」
  # 依存心

# [번역 완료] is_you
is_you:
  title: 바로 너이기에……
  lines:
    # 依存心取得後の翌ターン
    - color: %COLOR%
      content: 아침이 오자 파머는 일찍이 훈련장에 도착해 한 사람을 기다리고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……」
    - color: %COLOR%
      content: 아침의 차가운 벽에 등을 기댄 채, 정면을 매섭게 바라보았다.
    - color: %COLOR%
      content: 그리고 이를 전혀 모르는 %YOURNAME%이(가) 파머의 시야 구석에 나타났다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아…… 왔구나」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이번에는 도망치지 않을 거야」
    - color: %COLOR%
      content: 파머는 몸을 바로 세우고 얼굴 가득 미소를 지었다.
    - color: %COLOR%
      content: 꿈과 현실은 반대라지만, 사람은 그 말 한마디만으로 멈춰 서지 않는다.
    - color: %COLOR%
      content: 한치의 망설임도 없이 즉시 달려가 %YOURNAME%의 곁으로 다가갔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「좋은 아침이야, 트레이너!」
    - color: %COLOR%
      content: 익숙한 목소리에 담긴 열정이 아침을 밝혔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （아니야……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （메지로 파머는…… 아니, 파머는 그런 짓 하지 않아）
    - color: %COLOR%
      content: 밝은 미소를 띤 채 평소와 다름없이 %YOURNAME%의 곁에서 나란히 걸어갔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （하지만 말이야）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （언젠가는, %YOURNAME%이(가) 줄곧 나만을 바라보게 될 거야）

# [번역 대상] nega_dis
nega_dis:
  title: 마이너스 거리의 우리
  lines:
    # 依存心所持、恋慕＞95、情動以上のときターン終了でランダム発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너? 지금 시간 있어?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「잠깐이 아니라…… 오늘 하루 종일.」
    - 다른 사람이 아무도 없는 시간, 파머는 막 퇴근하려던 %YOU%을(를) 단독으로 찾아왔다.
    - 창문을 등진 채, 역광 속에서 평온한 안광을 띤 눈으로 주시하고 있다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SELF_CALL%도 가끔은 엄청 대단한 일을 해보고 싶을 때가 있다구.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너는 나랑 같이 해줄 거지?」
    - acc: 1
      content: 「그거야 당연하지.」
      lines:
        - %YOU%의 대답을 들은 뒤에야 파머의 빛나던 눈동자가 천천히 옮겨갔다.
        - 재빠른 동작으로 %YOU%의 서류를 정리해주고는, 자연스럽게 손을 잡았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오늘은 한가한 거 맞지?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼 트레이너, 오늘은 조금 고생해줘야겠어.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……어쩌면 내일도 그럴지 몰라.」
        - acc: 1
          content: 「에? 내일?」
        - acc: 2
          content: 「보아하니 아주 광란의 밤이 되겠군.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「흐흥~ 트레이너가 말한 대로네.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「내일까지 미쳐버릴 수 있는…… 그런 일이야.」
        - 파머의 목소리는 여전히 평소처럼 쾌활하고 시원시원하다.
        - 다만 %YOU%의 눈에는 앞서가는 파머의 모습 중 알 수 없는 부분이 엿보이는 듯했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「여기, 어때?」
        - 깡충깡충 뛰던 발걸음이 멈추고, 파머는 돌아보지 않은 채 제자리에 섰다.
        - 여관 앞에서 아무 일 없었다는 듯 몇 걸음 뒤로 물러났다.
        - 약간 차가운 손가락이 %YOU%의 손바닥 안으로 파고들어 살며시 잡았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오늘, 많이 준비했어.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「엄청 깜짝 놀랄 만한 일이라구……」
        - 거의 저항할 수 없는 힘으로 %YOU%을(를) 붙잡고 정문을 들어섰다.
        - 분홍색 방에 도착해서야 약간 통증이 느껴질 정도로 꽉 쥐고 있던 손이 풀렸다.
        - 문이 잠기는 소리가 들려오며, 오늘 밤 잠들 수 없음을 예고했다.
        - acc: 1
          content: 「파머, 이건……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「～」
        - 의문이나 훈계가 입 밖으로 나오기 전에 입술이 막혔다.
        - 부드러운 혀가 입술과 치아를 강압적으로 헤집고 들어와 상대와 뒤엉키며, 닿는 모든 곳의 맛을 뺏어갔다.
        - 호흡이 끊겨 의식을 잃기 직전이 되어서야 신선한 공기가 몸속으로 돌아왔다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하아, 하아.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너 냄새……」
        - 옅은 푸른색 눈동자에 어스름한 미광이 반사되었다.
        - %YOU%이(가) 보는 앞에서 약병을 꺼냈다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「있지, %YOURNAME%.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「당신이 선택하는 건 어때?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……나야, 아니면 당신이야?」
        - 시야가 흐릿해진 %YOU%은(는) 본능적으로 그 약의 정체를 짐작하고, 얼굴에 스치는 공포를 억눌렀다.
        - 그리고 이제 선택권은 %YOU%의 다음 한마디에 달려 있다.
        # 薬物はフロンK、恋慕100のときはフロンPに置換
        - acc: 1
          content: 「나한테 줘.」
          lines:
            - 말해버렸다.
            - 몸 아래에 깔린 %YOU%은(는) 자포자기한 심정으로 말해버렸다.
            - 파머의 손에 있던 것을 받아들고 주저 없이 삼켰다.
            - 몸이 급격히 뜨거워지며, 아래쪽에서 전해지는 강력한 충동을 점차 느끼기 시작했다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「아……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「굉장하네……」
            - 파머의 손가락이 가장 민감한 끝부분을 살며시 마찰하며, 가볍게 바지 지퍼를 집어 올렸다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「트레이너…… 기분 좋지?」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「나도 기분 좋게 해줘.」
          # 馬跳へ
        - acc: 2
          content: 「너에게 맡길게.」
          lines:
            - if: era.get('cflag:0:0') === 1
              lines:
                - %YOU%의 앞에서 파머는 손에 든 액체를 단숨에 들이켰다.
                - 하반신에서 뜨거운 감각이 전해져 오며, 아랫배에 밀착되었다.
                - 팽창한 육봉이 파머의 몸 아래에서 미세하게 떨리고 있다.
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「아……」
                - 이 자극은 파머에게 충분히 신선했다.
                - 충혈된 끝부분이 가늘게 떨리며, %YOU%의 앞에서 마치 호흡하듯 들썩였다.
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「트레이너…… 받아들여 줄 거지?」
                - 말로는 %YOU%의 동의를 구하고 있지만, 몸은 충분히 솔직했다.
                - 지금 파머의 광기 어린 표정을 지켜보고 있지만, %YOU%은(는) 아무것도 할 수 없었다.
                - %UMA%의 힘은 %YOU%이(가) 대항할 수 있는 것이 아니다…….
              # 馬跳へ（強姦イベント発生）
            - if: era.get('cflag:0:0') !== 1
              lines:
                - %YOU%의 앞에서 파머는 손에 든 액체를 단숨에 들이켰다.
                - 하반신에서 뜨거운 감각이 전해져 오며, 아랫배에 밀착되었다.
                - 팽창한 육봉이 파머의 몸 아래에서 미세하게 떨리고 있다.
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「아……」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「대단하네, 이거…… 꿀꺽.」
                - 이 자극은 파머에게 충분히 신선했다.
                - 충혈된 끝부분이 가늘게 떨리며, %YOU%의 앞에서 마치 호흡하듯 들썩였다.
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「트레이너…… 받아들여 줄 거지?」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「나 이제 못 참겠어.」
                - 말로는 %YOU%의 동의를 구하고 있지만, 몸은 충분히 솔직했다.
                - 딱딱해진 육봉이 국부 입구를 살며시 압박했다.
                - 조금만 힘을 주어 앞으로 나아가면 두 사람은 하나로 연결될 것이다.
                - acc: 1
                  content: 「싫어……」
                - acc: 2
                  content: 「부탁이야……」
                - %YOU%의 목소리는 희미하여 파머의 귀에 전혀 닿지 않았다.
                - 지금 파머의 광기 어린 표정을 지켜보고 있지만, %YOU%은(는) 아무것도 할 수 없었다.
                - %UMA%의 힘은 %YOU%이(가) 대항할 수 있는 것이 아니다…….
              # 馬跳へ（強姦イベント発生）
        - acc: 3
          content: 「필요 없어.」
          lines:
            - %YOU%의 반응을 듣고 파머의 손이 멈췄다.
            - 앞으로 덮치려던 몸이 천천히 뒤로 물러났다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……안 되는, 거야?」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「나는 안 된다는 거지?」
            - 강압적으로 %YOU%을(를) 이곳으로 데려왔다.
            - 강압적으로 %YOU%을(를) 쓰러뜨렸다.
            - 강압적으로 끝까지 하려고 했다.
            - 하지만 당신의 말 한마디에 동작을 멈췄다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「역시, 나는……」
            - 파머가 얌전하게 일어나려던 찰나, %YOU%이(가) 손을 뻗어 %SEX%를 붙잡았다.
            - 사용되지 않은 약이 바닥에 떨어지며, 파머가 주도권을 잃었음을 선포했다.
            - acc: 1
              content: 「이런 거 없어도 할 수 있어.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
            - acc: 1
              content: 「파머가 원한다면, 난 언제나 여기 있어.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「트레이너……」
            - acc: 1
              content: 「그러니까, 다정하게 하자.」
            - 원래 어두웠던 눈동자에 다시 한번 밝은 안광이 번쩍였다.
            - 떨리던 파머의 두 손이 %YOU%의 목을 강하게 끌어안았다.
            - 입술이 꽉 맞물린 채 얼마나 지났을까.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「하아……」
            - 파머의 눈가에는 눈물이 맺혀 있었고, 황홀한 표정으로 %YOU%을(를) 바라보았다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「부탁해, 트레이너……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「내 몸, 당신에게 맡길게.」
          # 馬跳へ
    - acc: 2
      content: 「오늘은 안 돼.」

# [번역 완료] come_for_you
come_for_you:
  title: 밤이 되면，너를 위해 온다
  lines:
    # 依存心所持、不安以上のときターン終了でランダム発生、ウマ娘×男トレーナー
    - 밤, 이미 꿈속에 빠져 있던 %YOU%은(는) 알 수 없는 소란스러운 소리에 잠에서 깼다.
    - 방은 여전히 익숙한 방이었고, 소리가 날 만한 이유도 딱히 떠오르지 않았다.
    - 하지만 눈을 뜬 순간, 모든 의문이 풀렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아……」
    - 왠지 모르겠지만 전라 상태의 파머가 지금 %YOU%의 몸 위에 엎드려 있었다.
    - 평소 숨겨져 있던 유방이 지금은 공중에 떠 있었고, 유두는 금방이라도 핵심 부위에 닿을 듯했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「깼구나, 트레이너.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「미안해, 원래는 자는 걸 방해하고 싶지 않았는데……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하지만 이렇게 하지 않으면, 나…… 안심하고 잘 수가 없거든.」
    - 어둠 속에서 파머는 천천히 몸을 눌러, 풍만한 산봉우리로 체취 때문에 일어선 부위를 감쌌다.
    - 분홍빛 혀가 충혈된 끝부분을 천천히 원을 그리며 핥더니, 적셔진 후 주저 없이 한입에 집어삼켰다.
    - 부드러운 감각, 상냥한 동작이 본래 민감한 신경을 자극하며 이성의 스위치를 건드린다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「으…… 윽……❤」
    - 쌍봉과 혀의 순환 아래, 그럴 생각이 없었음에도 신체의 본능을 제어할 수 없게 된다.
    - 백탁의 액체가 뿜어져 나와 파머의 구강으로 쏟아져 들어갔다.
    - 혀는 탐욕스럽게 표면을 훑었고, 비릿한 액체가 조금도 남지 않게 되자 그제야 천천히 입을 떼고 위쪽을 향해 가볍게 입을 맞췄다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 정말 착한 아이네.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「지금도 여전히 팔팔하네❤」
    - 따뜻한 손바닥이 방금 사정한 음경을 붙잡고 부드럽게 위아래로 훑기 시작했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「지금, 뭘 하고 싶어?~」
    - 침대에서 천천히 몸을 일으키자, %YOU%의 시야에 이미 흠뻑 젖어버린 하반신이 드러났다.
    - 작은 입구가 벌어졌다 닫혔다를 반복하며 끈적한 액체를 끊임없이 흘리고 있다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오늘 밤…… 뭘 할까?」
    - acc: 1
      key: select
      content: 일어나서 파머를 쓰러뜨린다.
    - acc: 2
      content: 저항을 포기한다.

# [번역 완료] come_fy_end
come_fy_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「여긴 내가 직접 설계한 휴식처야. 옥상의 햇살과 바람도 있고, 침대의 안락함도 누릴 수 있어. 대단하지?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「따뜻해…… 평생 여기 누워있을 수 있을 것 같아~」
  - 손가락으로 %YOU%의 가슴 위에 강하게 원을 그린다.
  - 예쁜 얼굴을 내밀어 %YOU%의 목에 진한 흔적을 남긴다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「어이, %ACE称呼善信%, 나 두어 바퀴 뛰고 올게. 문 닫기 몇 분 전에는 돌아올 거니까…… 너무 오래 끌지 마.」

# [번역 완료] endless_escape
endless_escape:
  title: 끝없는 도망
  lines:
    # （依存心所持時、ほかのBEを置換）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「요즘은 통 의욕이 생기지 않네……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그렇다고 뭔가 부족한 느낌이 드는 것도 아니고…… 이상해」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「헬리오스랑…… 음, 이건 아닌가」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「맥퀸과 라이언 %THEY%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「지금은 다른 사람들을 찾아갈 때가 아닌 것 같아. 나 대체 뭘 하고 있는 거지」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「역시」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너가 있어야겠어」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「벌써 실종된 지 사흘째지만」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「지금 대체 어디 있는 거야, 트레이너……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「방해되는 사람들이 사라졌네」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「드디어…… 돌아갈 수 있겠어」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말 보고 싶어…… 나의 트레이너」

# [번역 완료] pre-rooftop
pre-rooftop:
  - color: %COLOR%
    content: 【%CHARA%가 옥상에서 기다리고 있다】

# イベントタイトル定義用
# [번역 완료] rooftop
rooftop:
  title: 기다림，혹은……
  lines:
    -

    # イベントタイトル定義用
# [번역 완료] rooftop_3
rooftop_3:
  title: 기다림，혹은……기대
  lines:
    -

# [번역 완료] rooftop_event
rooftop_event:
  # 依存心取得後、天皇賞（春）未勝利、屋上で発生
  # 発生9回以下：待つ、それとも……
  # 発生9回超：待つ、それとも……期待
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하아❤…… 하아❤…… 하아❤……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%호칭%……」
  - color: %COLOR%
    content: 메지로 파머는 깨달았다. 자신의 몸은 이미 %호칭%가 멀리 있을 때 기쁨을 느끼고 싶어 하지 않는다는 것을. 그저 아주 조금이라도 좋으니……
  - color: %COLOR%
    content: 설령 그것이 %호칭%의 입맞춤이든, 목덜미에 닿는 손길이든, 귓가에 스치는 숨결이든 상관없었다.
  - color: %COLOR%
    content: 혹은 옷에 남은 냄새, 머리카락의 향기, 자기 전의 나지막한 속삭임…… 무엇이든 좋았다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%호칭%?」
  - color: %COLOR%
    content: 「하지만 난 이미 한계야…… 부탁해, 파머.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「으…… 네가 그렇게까지 말한다면.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하아…… %호칭%…… 대단해.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하아…… 하아…… %호칭%…… 아주 기분 좋아 보여……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하아, 하아, 하아…… 좋아, 사정해 줘…… 뒷감당은 나한테 맡기고…… 하아.」
  - color: %COLOR%
    content: 「파머?」
  - color: %COLOR%
    content: 「좋아」
  # CFLAGNAME:52 = 育成用変数
  - if: era.get('cflag:64:52')?.only_you <= 3
    lines:
      - divider: true
      - 지금 이 순간, %YOU%은(는) 그저 복잡한 표정으로 벽 너머에서 혼잣말을 들을 뿐, %SEX%의 곁으로 단 한 걸음도 내딛지 못했다.
      - 지금 어떤 표정을 지어야 할지, %YOU%에게는 너무나 어려운 일이었을지도 모른다.
  - if: era.get('cflag:64:52')?.only_you > 3
    lines:
      - color: %COLOR%
        content: 문이 열렸다.
      - divider: true
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「에?」
      - 옥상 입구에서 문이 열리는 소리가 들렸고 %YOU%이(가) 올라왔다.
      - acc: 1
        content: 「파머!」
      - acc: 2
        content: 「역시 여기 있었구나」
      - 두 사람의 시선이 마주치는 순간 %YOU%의 목소리가 자연스레 흘러나왔다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「트레이너?!」
      - 파머는 평소처럼 밝게 %YOU%에게 응답했다.
      - 하지만 미소 뒤의 표정은 이내 쓸쓸하게 가라앉았다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「저기, 왜 트레이너가 여기 온 거야?」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「나를 찾으러……」
      - 목소리는 점점 작아졌고 결국 시선마저 돌려버렸다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （무슨 생각을 하는 거야, 난 이미 져버렸는데）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （나 같은 %UMA% 따위가 트레이너에게 이런 정성스러운 보살핌을 받을 가치가 있을 리가）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아…… 쉬고 싶은 거라면 내가 비켜줄게」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「어차피 %SELF_CALL%도 필요 없을 테니까……」
      - 얼굴에 억지 미소를 띄우며 대충 핑계를 대고 떠나려 할 때.
      - 정면에서 따스한 손바닥이 어깨를 짚으며 파머가 일어나려던 동작을 막아세웠다.
      - acc: 1
        content: 「무슨 소리를 하는 거야」
      - 줄곧 처져 있던 귀가 천천히 꼿꼿하게 섰다.
      - 파머는 얼굴을 들어 지금 %YOU%의 표정을 멍하니 바라보았다.
      - 「너는 내 파트너잖아, 어떻게 널 내버려 둘 수 있겠어.」
      - 그저 그뿐인 한마디였지만 눈동자에 다시 생기가 돌기 시작했다.
      - 「져도 상관없어.」
      - 「파머, 넌 내 파트너라고.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「트레이너……」
      - 손을 들어 살짝 붉어진 눈가를 가린 채 아무런 힘도 실리지 않은 주먹으로 %YOU%의 몸을 툭 쳤다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……고마워, 트레이너」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「주변에, 주변에 트레이너가 계속 나를 바라봐 주기만 한다면」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「나, 꼭 다시 일어설 수 있을 거야!」
      - 예전의 자신을 되찾은 듯 파머는 다시 밝은 표정을 지어 보였다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （네가 있기 때문이야, 트레이너）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （너이기 때문에, 그래서……）

# [번역 대상] s_feeling
s_feeling:
  title: 이질감
  lines:
    # 依存心取得後、任意レース勝利後、任意地点のデートで発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오늘따라 갑작스럽네.」
    - 메지로 파머는 %YOU%의 팔을 친근하게 껴안았다. 주변의 시선은 전혀 신경 쓰지 않은 채, 가벼운 힘을 유지하고 있다.
    - 어깨가 맞닿고, 나란히 걸어간다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SELF_CALL%는 전~혀 신경 쓰지 않지만 말이야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - (나의 트레이너가, 먼저 나랑 같이 나와줬어~.)
    - if: era.get('cflag:64:0') !== 1
      content: 얼굴에 옅은 홍조를 띤 채, 심장…… 가슴을 %YOU%의 팔에 누르며 점차 강하게 껴안는다.
    - 꼬리가 자기도 모르게 옆으로 미끄러져 슬그머니 허리에 감긴다.
    - 작은 귀가 계속 실룩거리며, 옆에 있는 %YOU%을(를) 계속해서 가볍게 두드린다.
    - acc: 1
      key: select
      content: 「저기, 파머, 이거 간지러운데……」
      lines:
        - %YOU%의 목소리를 듣자, 실룩이던 귀가 멈췄다.
        - 평소라면 파머는 동작을 멈추고 어색한 미소를 지으며 거리를 두었을 것이다.
        - 하지만 오늘은 오히려 팔을 더 꽉 움켜쥐었다.
        - 움켜쥔 팔에 약간 통증이 느껴질 때쯤에야 파머는 손을 풀었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……으응.」
        - 파머는 고개를 숙인 채, 푼 손으로 %YOU%의 몸을 가볍게 몇 번 찔러보았다.
        - %YOU%에게 보이지 않는 각도에서, 부자연스러운 웃음이 떠올랐다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「알겠어, 트레이너……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「많이 간지럽나 보네……」
    - acc: 2
      content: 「저기, 파머, 밖에서 이러는 건 좀 그렇지 않아?」
      lines:
        - 실룩이는 귀는 멈추지 않고 계속해서 두드리고 있다.
        - 친밀한 동작 때문에 주변 사람들이 점차 이곳을 주목하기 시작했지만, 파머는 조금도 물러날 기색이 없다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어때서 그래.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「우리 그런 사이 맞잖아?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아니면……」
        - 얼굴에 미소를 띤 채, 고개를 돌려 %YOU%을(를) 바라본다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「밖에서만 안 되는 거야?」
        - 한순간의 황홀함이 지나간 뒤, 파머는 다시 똑바로 서서 자세를 바로잡았다.
        - %YOU%과(와) 나란히 거리를 걷고 있지만, 오직 꼬리만이 끊임없이 엉덩이 쪽을 휩쓸고 있다.
        - 현역 %UMA%의 힘은 일반인이 대적할 수 있는 수준이 아니다.
        - 처음에는 평범한 데이트였지만, 분위기는 어느새 다른 방향으로 흘러갔다.
        - 주변 사람들이 더 이상 신경 쓰지 않게 된 뒤에야, 파머는 %YOU%을(를) 데리고 발걸음을 멈췄다.
        - 눈앞의 환경은 누구라도 곧 무슨 일이 일어날지 알 수 있는 곳이었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「여기라면, 트레이너도 안 된다고 말하지 않겠지.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그치?」
        - %YOU%의 대답을 기다리지 않고, 파머는 호텔 문을 밀어 열었다.
        # 強姦

# [번역 대상] s_feeling_end
s_feeling_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「오늘따라 갑작스럽네.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%自称%는 전~혀 신경 쓰지 않지만 말이야.」
  - 파머는 %YOU%을(를) 꽉 껴안으며, 초점 없는 눈으로 가볍게 미소 지었다.
  - 꼬리가 자기도 모르게 옆으로 미끄러져 슬그머니 허리에 감긴다.

# [번역 완료] pre-nap
pre-nap:
  - color: %COLOR%
    content: 【%CHARA%와 옥상에서 점심을 먹겠습니까?】

# [번역 완료] nap
nap:
  title: 평온한 낮잠 시간
  lines:
    # 恋慕＞49、同心刻印lv1、屋上で出現
    - 피곤한 오전이 지난 뒤, 심신이 지친 %YOU%은(는) 도시락을 들고 옥상으로 올라갔다.
    - 문을 열자마자 시야 구석에서 파머가 힘차게 손을 흔들고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「여기야 여기, 트레이너!」
    - 손을 흔든 뒤 파머는 자신의 가방에서 조금 과하게 큰 도시락통을 꺼냈다.
    - %YOU%이(가) 자리에 앉자, 꽉 찬 점심밥이 눈앞에 놓였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 한번 먹어봐! 맛이 꽤 괜찮을 거야!」
    - 파머는 열정적으로 소시지를 집어 %YOU%의 도시락에 놓아주었다.
    - 곁에서 전해지는 열기 덕분에 %YOU%의 피로감도 싹 씻겨 내려가는 듯했다.
    - acc: 1
      content: 「역시 메지로 가문답네, 도시락도 정말 맛있어.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「맛있어? 헤헤……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, 트레이너, 맛이 정말 괜찮은 거 맞지?」
    - 파머의 얼굴에는 수줍은 홍조가 감돌았고, 시선은 자신의 도시락과 %YOU%의 얼굴 사이를 왔다 갔다 했다.
    - acc: 1
      content: 「정말 괜찮아.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래? 응응……」
    - 파머의 얼굴에 감돌던 불안함이 순식간에 사라지고 쾌활하게 변했다.
    - 도시락을 다 먹은 뒤에야 두 사람은 그늘진 곳에 누워 평온한 낮잠 시간을 즐겼다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「후으—」
    - 파머는 %YOU%의 곁에 누워 고르고 긴 숨소리를 냈다.
    - 아무런 방비가 없는 모습은 마치 무슨 일이 일어나도 상관없다는 듯 보였다.
    - 두 사람이 처음 만났던 이 옥상에서, %SEX%는 그렇게 조용히 잠들었다.
    - 평온하고, 무방비하며, 어떤 거부감도 없이 그렇게 조용히 누워 있다.
    - 낮잠 시간은 꽤 길다. 많은 일을 할 수 있을 정도로.
    - acc: 1
      key: select
      content: 이대로 파머의 자는 얼굴을 지켜본다 (호감도 +10)
      lines:
        - 미풍이 부드러운 감촉을 담아 불어온다.
        - 파머의 약간 멍한 듯한 자는 얼굴을 보며, %YOU%은(는) 자연스럽게 미소 지었다.
        - 어느덧 낮잠 시간도 거의 끝나가고 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「음……」
        - 이제 일어날 시간이라는 걸 아는지, 파머가 얕게 어깨를 뒤척였다.
        - 평온하던 얼굴에 약간의 불편함이 서리는 걸 보니 곧 깨어날 것 같다.
        - 이렇게 귀여운 얼굴을 보니 %YOU%은(는) 참지 못하고 몰래 손가락을 뻗었다.
        - acc: 1
          content: 「이제 일어날 시간이야.」
        - acc: 2
          content: 조용히 볼을 쿡쿡 찌른다.
        - 꿈결에 외부의 움직임을 느끼고, 아직 잠이 덜 깬 눈을 약간 불안하게 떴다.
        - 다만 고개를 들었을 때 볼에 무언가가 부딪혔다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아…… 아레?」
        - 낮잠에서 깬 파머는 시선을 살짝 아래로 내려 자신의 볼을 찌르고 있는 손가락을 발견했다.
        - 시선이 잠시 마주친 뒤에야 파머는 %YOU%의 손에서 얼굴을 뗐다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아하하…… 잘 때는 이런 거 신경 못 쓴다니까, 그게……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……자자! 이제 수업 들으러 가야지!」
        - 대화에서 도망치듯 파머는 옥상 문 앞까지 단숨에 달려가 잠시 멈춰 섰다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……아! 내가 도대체 무슨 생각을 하는 거야!」
        - 문을 열고 나가며 %YOU%만을 옥상에 남겨두었다.
    - acc: 2
      content: 살짝 장난을 쳐볼까 (애정도 +2)
      lines:
        - 그냥 장난이나 쳐보자.
        - 파머는 이미 잠들었으니 선을 넘는 짓만 하지 않는다면.
        - 너무 심한 짓만 아니면 조금 장난을 쳐도 되겠지.
        - 고민 끝에 %YOU%은(는) 옷 안에서 새 중성펜을 하나 찾아냈다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「후우……」
        - 파머는 아주 깊이 잠들어 있었고, %YOU%이(가) 대작을 다 그릴 때까지 깨지 않았다.
        - 지금이라면 파머가 깨기 전에 흔적을 지워버려도 문제없을 것이다.
        - 낮잠 시간이 끝나기 전에 중성펜 자국만 지운다면…….
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「음……」
        - 하지만 %YOU%에게 남은 시간은 이미 끝났다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너, 안 잤어? ……아레?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「왜 펜을 들고 있어……」
        - 그렇게 말하며 파머는 습관적으로 자신의 볼을 만졌다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이 느낌은…… 트레이너?」
        - 파머는 믿을 수 없다는 눈빛으로 손에 묻은 잉크를 바라보았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「다 큰 사람이 이런 장난이나 치고.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너는 참 철이 안 든다니까~」
        - 당황한 %YOU%을(를) 향해 농담조로 손을 뻗어 몇 번 쿡쿡 찔렀다.
        - 다만 오후 수업 때 마스크를 쓰고 수업을 듣던 파머는 %YOU%에게도 몇 줄 그려주지 않은 것을 뼈저리게 후회했다.
    - if: era.get('love:64') >= 75
      acc: 3
      content: 키스 한번 하는 건 안 들키겠지.
      lines:
        - 평소 옥상에는 시끄러운 소리가 없다. 이곳에 있는 건 바람 소리와 파머의 고른 숨소리뿐이다.
        - 지금 여기엔 두 사람뿐이니 무슨 짓을 해도 들키지 않는다.
        - 파머는 이미 잠들었으니, 조금만…….
        - acc: 1
          content: 「그냥 살짝 대기만 하는 거라면……」
        - 살며시 파머의 앞으로 다가가 %SEX%에게 내리쬐던 옅은 햇빛을 가렸다.
        - 파머의 숨소리는 여전히 고르며, 곁에 있는 %YOU%을(를) 전혀 경계하지 않는 모습이다.
        - 얼굴을 붉게 물들인 채, %YOU%은(는) 약간 주저하며 천천히 몸을 숙였다.
        - 눈앞의 평온한 자는 얼굴과 붉은 입술을 향해.
        - 양손을 짚어 떨리는 몸을 지탱하고, 두 얼굴이 점차 가까워지며 입술이 닿기 직전까지 갔다.
        - acc: 1
          content: 이대로 키스하자.
        - acc: 2
          content: 이대로 키스해도 정말 괜찮을까.
        - acc: 3
          content: 이대로 키스하면 멈출 수 있을까.
        - 다음 동작을 고민했지만, %YOU%의 몸은 기다려주지 않았다.
        - 입술이 맞닿고 잠시 숨이 멎었다.
        - 뇌의 사고가 일시 정지되었고, 다시 연결되었을 때는 이미 끝난 뒤였다.
        - %YOU%의 얼굴은 상기되었고, 가쁜 숨을 몰아쉬며 달아오른 몸을 식혔다.
        - 다시 곁에 있는 파머를 바라보며 침을 꼴깍 삼켰다.
        - 입술에 남은 온기가 여전히 생각을 자극하고 있었고, 시선은 방금 접촉했던 위치에 고정되었다.
        - 통제할 수 없는 이끌림에 다시 한번 파머의 얼굴로 다가가 필사적으로 숨을 참았다.
        - acc: 1
          content: 이대로 키스하자.
        - acc: 2
          content: 이대로 키스하자.
        - acc: 3
          content: 이대로 키스하자.
        - 입술이 두 번째로 맞닿았지만, 얼굴에 느껴지던 가벼운 콧김이 없었다.
        - 이상함을 눈치챈 %YOU%이(가) 몸을 일으키려 했으나, 한 쌍의 손이 얼굴을 감싸 안아 일어날 수 없게 만들었다.
        - 혀가 입술을 파고들어 치아를 지나 영리하게 휘감아왔다.
        - 숨이 턱 끝까지 차올라 몸이 버틸 수 없을 때가 되어서야 뒷머리를 누르던 손이 풀렸다.
        - 입을 벌린 채 맞닿아 있던 두 얼굴이 떨어지며 입안에 고인 타액을 삼켰다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……이래서는 도저히 잠을 잘 수가 없잖아.」
        - 파머의 얼굴에는 수줍은 미소가 가득했고, %YOU%의 어깨를 가볍게 붙잡았다.
        - 두 사람의 시선이 마주치자 어색하게 웃음이 터져 나왔다.
        - 돌발 상황 때문에 떨어졌던 입술이 다시 한번 맞닿으며 서로의 맛을 교환했다.
        - 낮잠 시간 종료를 알리는 벨 소리가 옥상에 울려 퍼졌지만, 밀착된 두 사람을 떼어놓지는 못했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「시간, 다 됐네.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「조금 아쉽지만…… 응, 아냐.」
        - 파머는 아쉬운 듯 %YOU%에게서 시선을 떼고 일어나 흐트러진 옷을 정리했다.
        - 옥상 문으로 걸어가며 차마 %YOU%의 눈을 똑바로 쳐다보지 못한 채 묘하게 볼을 긁적였다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……트레이너, 우리 갈까?」
        - acc: 1
          key: sex
          content: 「응, 가자.」
          # 性欲+10%
        - acc: 2
          content: 「잠깐만 기다려줘, 파머.」
          lines:
            - 문을 열려던 파머의 손이 멈췄고, 기대감을 담아 뒤를 돌아보았다.
            - 말을 하지 않아도 두 사람은 서로의 마음속에 있는 것을 알고 있었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……지각할 텐데.」
            - 한참 뒤에야 파머는 겨우 핑곗거리를 찾아냈다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그럴 때, 트레이너가 나 대신 설명해줄 수 있어?」
            - acc: 1
              content: 「그럼.」
            - acc: 2
              content: 「안 돼.」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「그렇구나……」
            - 등 뒤로 몰래 문을 걸어 잠그고, 빠른 걸음으로 %YOU%의 앞까지 다가왔다.
            - 망설임 없이 %YOU%의 품으로 뛰어들어 바닥에 쓰러뜨렸다.
            - 파머는 이미 빨갛게 달아오른 얼굴을 들고 %YOU%의 얼굴에 강하게 입을 맞췄다.
            # 馬跳

# [번역 완료] nap_end
nap_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「이런 거, 좋아해?」
  - 파머는 %YOU%의 곁에 앉아, 하늘을 향해 중얼거렸다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「트레이너? 지금 시간 있어?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「잠깐이 아니라…… 오늘 하루 종일.」
  - 창문을 등진 채, 역광 속에서 평온한 안광을 띤 눈으로 주시하고 있다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%自称%도 가끔은 엄청 대단한 일을 해보고 싶을 때가 있다구.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「트레이너는 나랑 같이 해줄 거지?」
  - 파머는 여전히 미소를 띤 채, %YOU%의 손을 잡고 옥상을 떠났다.

# [번역 완료] pre-leisure
pre-leisure:
  - color: %COLOR%
    content: 【%CHARA%와 가라오케에 가보자!】

# [번역 완료] leisure
leisure:
  title: 여유로운 시간
  lines:
    # 恋慕＞49、同心刻印lv1、商店街のカラオケで発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「갑자기 노래방이라니, 무슨 일이라도 있어 트레이너?」
    - 파머는 두 손을 뒤로 모은 채, 조금 의아한 듯 고개를 갸웃하며 곁에 있는 %YOU%을(를) 바라보았다.
    - acc: 1
      content: 「그냥 문득 오고 싶어졌어.」
    - acc: 2
      content: 「가끔은 파머랑 같이 노래하고 싶어서.」
    - 그 설명을 납득했는지, 파머도 더는 묻지 않았다.
    - 두 사람은 노래방 방 문을 열고, 조금 불안한 기색으로 자리에 앉았다.
    - 단둘뿐인 개인실에 오직 두 사람뿐…… 이건 조금, 그런 쪽의 분위기 아닐까?
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, 트레이너는 뭐 부를래? 내가 먼저 예약해 줄게!」
    - 마치 자신의 안절부절못하는 모습을 감추려는 듯, 파머가 먼저 반주기 앞으로 다가갔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「어렵게 둘이서 온 노래방이니까, 트레이너도 마음껏 즐겨야 해!」
    - acc: 1
      key: sex
      content: 「파머가 좋아하는 노래로 예약해 줘.」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그래? 그럼 %SELF_CALL% 마음대로 골라도 되는 거지!」
        - 어째서인지 조금 전까지 불안해 보이던 파머의 모습은 사라지고, 대신 열정적인 노랫소리가 울려 퍼졌다.
    - acc: 2
      content: 「중요한 건 파머 네가 즐거우면 된 거야.」
      lines:
        - 파머의 동작이 잠시 멈추더니, 이내 평정심을 되찾고 천천히 테이블 위의 마이크를 집어 들어 트레이너에게 손을 뻗었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그렇다면, 나랑 같이 불러!」
        - 어째서인지 파머는 웃고는 있었지만 조금 화가 난 듯한 기색이었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그러면 나도 정말 즐거울 거야.」
    - acc: 3
      content: 「노래만 하러 온 건 아니야……」
      lines:
        - %YOU%의 말을 듣고 파머의 움직임이 멈췄다.
        - %SEX%는 언제나 영리했고, 상대방의 말 속에 담긴 깊은 의미를 파악하는 데 능숙했다.
        - 방음이 된 밀실에 단둘이 있다는 것, 그 의미는 이미 충분히 명백했다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너…… 정말 음란하네.」
        - 노래방 기기에서는 이미 반주가 흘러나오기 시작했지만, 아무도 노래를 시작하지 않았다.
        - 소파에 앉아 눈앞의 파트너를 향해 두 팔을 벌렸다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%는 여기 있어……」
        - acc: 1
          key: sex2
          content: 파머를 껴안는다.
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「하아, 트레이너의 냄새……」
            - %YOU%의 품에 얼굴을 묻고, 체온과 향기를 만끽했다.
            - 포옹 사이의 틈새에서 파머의 목소리가 흘러나왔다.
            - 기운이 빠진 듯하면서도, 마치 무장해제 된 듯한 목소리였다.
            - 포옹을 풀었을 때, 파머는 천천히 몸을 숙여 눈앞의 옷자락을 가볍게 젖혔다.
            - 냄새가 짙게 밴 마이크를 쥐고 가볍게 숨을 불어넣었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「트레이너의 냄새……」
          # 馬跳
        - acc: 2
          content: 파머의 볼을 꼬집는다.
          lines:
            - 양팔을 벌린 파머를 향해, %YOU%은(는) 무정하게도 %SEX%의 붉으스레한 볼을 꼬집었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「우와앗!」
            - 파머의 입에서 깜짝 놀란 소리가 튀어나왔고, 눈을 크게 뜨며 %YOU%을(를) 바라보았다.
            - acc: 1
              content: 「무슨 생각을 하는 거야, 이 음란마귀야.」
            - 상대의 반응을 보며 파머는 볼을 부풀리고 주먹을 치켜들었다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「정말이지…… 그런 식으로 장난치지 마.」
            - 오늘의 노랫소리는 %YOU%이(가) 얻어맞으며 내는 비명 소리와 어우러져 울려 퍼졌다.

# [번역 완료] pre-cinema
pre-cinema:
  - color: %COLOR%
    content: 【 %ARDAN%과 %CHARA%이 함께 있을 때 영화관에 가보자!】

# [번역 완료] cinema
cinema:
  title: 영화관 괴담!?
  lines:
    # 恋慕≥74、同チームにメジロアルダンかつ恋慕≥74、依存心なし、外出で商店街の映画館を選択
    - 상점가를 거닐던 중, 마침 영화관 문 앞을 지나게 되었다.
    - 그리고 입구에서 마침 또 다른 한 사람과 마주쳤다.
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「아, 파머 아니신가요?」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「당신도 보러…… 트레이너님도 계셨군요.」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「그럼 저는 두 분을 방해하지 않도록 할게요~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「에잇! 잠깐만, 아르당! 네가 생각하는 그런 거 아니야!」
    - 메지로 아르당이 제멋대로 한 걸음 뒤로 물러나자, 파머는 서둘러 달려가 떠나려는 발걸음을 붙잡았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「우린 그냥 우연히 지나가던 길이었어!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그나저나 아르당, 너는 여기서 뭐 하고 있었어?」
    - 반쯤 강제로 메지로 아르당을 붙잡고 나서야 파머는 정신을 차렸다.
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「후후~ 최근에 신작 영화들이 많이 개봉했거든요.」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「트레이너님과 함께 보기에 적당한 영화가 있는지 미리 보러 왔답니다.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「신작 영화라……」
    - 잠시 생각에 잠긴 파머도 고개를 들어 영화관 상단의 스크린을 바라보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음, 다음 일정까지 딱히 할 일도 없고.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아르당, 뭐 재미있어 보이는 거 찾았어?」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「몇 가지 찾긴 했습니다만, 상영 횟수가 적네요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그렇구나……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래도 여기까지 왔는데! 트레이너, 보고 싶어?」
    - acc: 1
      key: movie
      content: 「공포 영화는 어때?」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오오, 공포 영화!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「엄청 자극적일 것 같아!」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「공포 영화라니…… 트레이너님도 참 심술궂으시네요~」
        - 발매기 앞에서 조금 들떠 있는 파머의 뒤에서, 메지로 아르당은 %YOU%을(를) 향해 약간 곤란하다는 듯한 표정을 지어 보였다.
        - 지금 상황에서 공포 영화를 선택한다는 것이 누구를 괴롭히기 위함인지는 두 사람 모두 잘 알고 있었기 때문이다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「두 분~ 표 세 장 준비됐어.」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「후훗, 가시죠, 트레이너님.」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「이건 파머가 당신을 위해 사준 표니까요~」
        - 세 사람은 함께 상영관으로 들어갔고, 서서히 어두워지는 분위기 속에서 자리에 앉았다.
        - 파머와 메지로 아르당 사이에 끼인 %YOU%은(는) 어쩐지 모를 어색함을 느꼈다.
        - 주변이 완전히 캄캄해지고 스크린에 화면이 떠오르기 시작했을 때.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「……이전의 소품들보다는 정교하지 못한 느낌이네요.」
        - acc: 1
          content: 「그러게.」
        - acc: 2
          content: 「네 변장이 더 무서웠던 것 같아.」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「트레이너님의 화술이 점점 늘고 계시네요, 후후.」
        - 메지로 아르당의 얼굴은 여전히 평온한 모습이었지만, 반대편은 전혀 딴판이었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아…… 아……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「으와악!」
        - 스크린에 귀신이 빈번하게 등장하기 시작하면서부터, 파머는 %YOU%의 손가락을 단 한 순간도 놓지 않았다.
        - 뭐라고 말을 해주고 싶었지만, 영화관 안이라 입을 열기도 마땅치 않았다.
        - acc: 1
          content: （나가서 얘기하자.）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「안 좋아아아!」
        - divider: true
          content: 영화 종료
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「안 좋아…… 진짜 안 좋아.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「으와, 다리에 힘이 하나도 안 들어가……」
        - 갓 상영관을 나온 파머는 여느 사람들처럼 다리가 풀린 채 %YOU%의 어깨를 짚고 부들부들 떨며 겨우 서 있었다.
        - 두 사람의 뒤를 따라 나온 메지로 아르당은 파머의 모습을 보며 자연스럽게 미소를 지었다.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「파머에게도 저런 모습이 있을 줄은 몰랐네요~」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「오늘 보기 드문 광경을 봤네요, 감사합니다~」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「정말이지! 아르당!」
        - 세 사람은 영화관을 나서며 서로 담소를 나누었다.
        - 다만 출구로 발을 내딛는 순간, 밤하늘을 본 파머는 슬그머니 한 걸음 뒤로 물러났다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「밤이…… 원래 이렇게 무서웠나?」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「파머?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기, 트레이너?」
        - 두 걸음 물러난 파머는 %YOU%의 팔을 덥석 붙잡았다. 눈가에는 미처 사라지지 않은 눈물이 맺혀 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「혹시…… 나 데려다줄 수 있을까?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그, 그냥 가는 길만 같이 가주면 되니까, 정말로……」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「어머나?」
        - 눈앞의 촉촉한 눈망울을 보며, 메지로 아르당과 %YOU%은(는) 묘한 시선을 교환할 수밖에 없었다.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「하긴 시간이 확실히 많이 늦긴 했네요……」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「저에게 맡겨주셔도 괜찮답니다?」
        - acc: 1
          content: 「내가 너희를 데려다줄게.」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「그럼 부탁드릴게요.」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「……음, 아니면」
        - 아르당은 팔을 꽉 붙잡고 있는 파머를 천천히 돌아가, 똑같은 자세로 반대편 팔을 꽉 껴안았다.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「트레이너님은 이런 걸 좋아하시려나요?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「빨, 빨리 돌아가자……」
        - 한쪽에는 벌벌 떨고 있는 파머.
        - 다른 한쪽에는 아무런 거리낌 없이 몸을 %YOU%의 팔에 밀착시킨 메지로 아르당.
        - acc: 1
          key: sex
          content: 「……돌아가자.」
        - acc: 2
          content: 「여관으로 가자.」
          # 3P
    - acc: 2
      content: 「연애 영화는 어때?」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「연애 영화? 트레이너는 그런 걸 좋아해?」
        - 대답을 들은 파머는 살짝 고개를 갸웃했지만, 곧바로 몸을 돌려 발매기로 향했다.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「연애라니…… 조금 의외네요.」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「어쩐지 트레이너님이 고르실 법한 장르는 아닌 것 같은데요.」
        - 깊게 생각하지 않은 파머와 달리, 메지로 아르당이 생각하는 바는 달랐다.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - （무려 연애 영화라니.）
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - （분명 세 사람인데……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아르당? 곧 시작할 거야.」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「알겠어요~」
        - 두 %UMA%는 %YOU%의 좌우에 나란히 앉아 묘하게 진지한 태도로 영화를 관람했다.
        - 영화 『너도 똑같이 그를 좋아하고 있잖아, 그렇지.』
        - 영화 『하지만 난 지지 않아.』
        - acc: 1
          content: 「지극히 평범한 전개네……」
        - 어둠 속에서 들려온 %YOU%의 작은 중얼거림은 양옆의 두 사람에게 또렷이 들렸다.
        - 영화 『내가 너보다 먼저…… 그의 마음을 얻고 말겠어!』
        - 딱히 훌륭하지 않은 대사들을 들으며, %YOU%은(는) 속으로 쓴웃음을 지었다.
        - 하지만 웃음이 채 나오기도 전에, 양옆에서 손이 붙잡혔다.
        - 영화의 품질이 낮아서인지 상영관 안에는 사람이 그리 많지 않았다.
        - 다시 말해, 지금 주위에는 파머와 메지로 아르당만이 앉아 있었다.
        - 부드러운 감촉이 손을 타고 조금씩 중앙으로 파고들었고, 다소 민감한 부위에 닿았다.
        - acc: 1
          content: 「！？」
        - 양쪽에서 뻗어온 손이 몸 위아래를 누비며 묘한 이질감을 불러일으켰다.
        - %YOU%의 주의력은 이미 영화에 집중할 수 없게 되었고, 곧 튀어나올 것 같은 신음 소리를 참기 위해 어금니를 꽉 깨물어야 했다.
        - 이러한 고문이 얼마나 지속되었을까, 마침내 영화가 끝나는 순간이 찾아왔다.
        - 좌석에서 이미 붉게 달아오른 얼굴을 간신히 들어 거친 숨을 몰아쉬며 좌우를 살폈다.
        - 그리고 이 모든 일의 시작점인 메지로 아르당과 파머는 각각 팔 한쪽씩을 차지하고 %YOU%을(를) 좌석에서 일으켜 세웠다.
        - 아무도 눈치채지 못한 사이, 두 사람은 동시에 귓가에 입을 맞추듯 다가왔다.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「트레이너님, 의외로 이런 이야기를 좋아하시는군요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이런 걸 봤더니…… 나까지 하고 싶어지잖아.」
        - %YOU%의 대답을 기다리지도 않고, 파머와 메지로 아르당은 %YOU%을(를) 좌우에서 끼고 영화관을 빠져나왔다.
        - 길 앞쪽에서 네온사인을 빛내는 여관을 보며, %YOU%의 얼굴에는 난처하면서도 기가 막힌 듯한 표정이 스쳤다.
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「외박 신청은 이미 준비해 두었답니다.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「음…… 나도 준비됐어……」
        - 침대에 앉은 두 사람은 시선을 교환하더니, 침대 위에서 옷이 벗겨진 채 앉아 있는 %YOU%을(를) 일제히 바라보았다.
      # 3Pへ。アルダン上位、パーマー助手

# [번역 대상] movie_end
movie_end:
  - color: %COLOR_71%
    content:
      - fontWeight: bold
        content: %ARDAN%
      - 「미안해, 원래는 자는 걸 방해하고 싶지 않았는데……」
  - color: %COLOR_71%
    content:
      - fontWeight: bold
        content: %ARDAN%
      - 「하지만 이렇게 하지 않으면, 나…… 안심하고 잘 수가 없거든.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「으…… 윽……❤」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「트레이너, 정말 착한 아이네.」
  - 두 사람은 침대에 쓰러져 가운데 끼인 %YOU%을(를) 함께 껴안고, 달콤하게 가슴팍에 머리를 비볐다.
  - 따뜻한 손바닥이 방금 사정한 음경을 붙잡고 부드럽게 위아래로 훑기 시작했다.

# [번역 완료] delicious
delicious:
  title: 갑자기 간식타임?
  lines:
    # 恋慕＞49のとき、一緒に間食で発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 트레이너, 또 몰래 간식 먹고 있지!」
    - 갑자기 문을 열고 들어온 파머가 감자칩을 꺼내려던 %YOU%의 동작을 큰 소리로 가로막더니, 책상 위에 놓인 봉지를 낚아챘다.
    - 엄밀히 말해 휴식 시간에 감자칩 한 봉지를 먹는 것이 몰래 먹는 일은 아니었지만 말이다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말이지……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「감자칩을 먹을 땐 나도 좀 나눠달라고.」
    - 봉지에서 재빨리 두어 조각을 꺼내 먹은 파머는 자연스럽게 %YOU%의 곁에 앉았다.
    - acc: 1
      content: 「그럼 내 거는?」
    - acc: 2
      content: 「내 감자칩……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아.」
    - 그제야 상황 파악이 된 파머는 어색해하며 들고 온 봉투를 집어 들었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아하하, 트레이너 몫을 생각 안 한 건 아니라고.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「어차피 오늘 오후엔 아무 일도 없잖아, 그치?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래서 내가 특별히 맥퀸한테 부탁해서 다과를 좀 구해왔지~」
    - 말을 하며 파머는 봉투 속에 든 작은 상자들을 전부 꺼내 놓았다.
    - 눈앞에 펼쳐진 몇 상자의 디저트들을 보고 있자니, 감자칩을 빼앗겼던 일은 마치 없었던 일처럼 느껴졌다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「자자, 차도 준비되어 있어~」
    - 어째서인지 원래는 나른하게 보내려던 오후가 두 사람만의 티타임이 되어 버렸다.
    - ……머지않아 갑자기 파티 분위기로 변해버린 상황을 무시한다면 말이다.
# 二人の体力+200、体重+10～20（x10）

# [번역 대상] rest
rest:
  title: 휴식……?
  lines:
    # 恋慕＞74、ウマ娘、非処女のとき、小休止で発生
    - 날씨가 좋지 않은 날, %YOU%은(는) 사무실에서 창밖을 바라보며 한숨을 쉬었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왜 그래, 트레이너?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「겨우 하루 훈련이 취소된 것뿐이잖아, 괜찮아~」
    - 등 뒤에서 파머의 나른한 목소리가 들려왔다.
    - 오늘 하루의 환경에서 도망쳐 나온 파머는 즐거운 듯 집무실에 누워 스마트폰을 만지작거리고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「역시 트레이너의 방은 특별히 편안하단 말이지~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왠지 오늘은 몸이 유독 무겁네~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너도 이리 와~」
    - 집무실에 비치된 소파 위에서 좌우로 두어 번 구르더니, 사람 한 명이 들어갈 만한 공간을 비워주었다.
    - 옆으로 누운 파머는 졸음이 밀려와 감기려던 눈을 뜨고 %YOU%에게 손짓했다.
    - acc: 1
      content: 「오늘은…… 됐어.」
    - acc: 2
      content: 「이건 너무…… 크흠.」
    - 뭔가 말하려던 %YOU%은(는) 그저 한숨을 내쉬고는, 파머의 뜻에 따라 소파에 앉았다.
    - 그리 넓지 않은 소파 위에 두 사람이 편안하게 몸을 눕혔다.
    - 문밖은 훈련을 할 수 없는 날씨였지만, 문 안쪽은 나른한 분위기가 감돌았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아…… 가끔은 이런 것도 나쁘지 않네.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이렇게 둘이서 같이 있으면서, 아무것도 생각하지 않는 거.」
    - 소파에 누운 파머는 눈을 감은 채, 두 손으로 %YOU%의 팔을 타고 올라와 살며시 껴안았다.
    - 파머 특유의 향기가 %YOU%의 주변을 맴돌며 내면의 욕망을 자극했다.
    - 잠든 것처럼 평온한 숨결이 천천히 목덜미에 닿으며 짜릿한 감각을 불러일으켰다.
    - acc: 1
      content: 야한 일을 하고 싶다.
    - acc: 2
      content: %SEX%를 안고 싶다.
    - acc: 3
      content: %SEX%를 범하겠다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「후아…… 트레이너 냄새~ 에헤헤.」
    - 곁에서 잠에 취한 파머가 비몽사몽하며 중얼거리자, 얼굴 위로 홍조가 피어올랐다.
    - 오늘의 날씨는 외출하기엔 적합하지 않았지만, 실내 운동을 하기엔 더없이 좋았다.
    - 몸 아래에서 이미 요동치는 불온한 감각이 이성을 흩트려 놓았다.
    - acc: 1
      content: 「다 파머 네 잘못이야……」
    - acc: 2
      content: 「더는 못 참겠어……」
    - 파머가 비몽사몽 눈을 떴을 때, 눈앞까지 밀착된 얼굴이 보였다.
    - 소리를 내려던 입술은 강압적으로 막혔고, 숨결을 빼앗겼다.
    - 오랜 압박 끝에 파머는 힘없이 소파에 쓰러져, 위를 올려다보며 가늘게 숨을 몰아쉬었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……?」
    - %YOU%은(는) 파머를 온몸으로 짓누르며, 비어 있는 한 손을 주저 없이 아래로 뻗었다.
    - 손가락이 옷감을 헤치고 이미 젖어버린 비소로 파고들어 끊임없이 휘저었다.
    - 발치 아래에서 파머의 얼굴이 서서히 쾌락으로 깨어나는 것을 지켜보며, 손가락의 움직임을 더욱 빠르게 가져갔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「큭…… 으아.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너…… 이러지 마.」
    - 얼굴을 세게 감싸 쥐며 되는대로 발버둥 쳤다.
    - 하지만 그러면 어떠랴, 이건 파머가 먼저 유혹한 것이니 이대로 멈출 리 없었다.
    - if: era.get('cflag:0:0') > 0
      content: 이미 충혈된 그것은 높게 치솟아, 옷자락이 걷힌 젖은 비소 곁에 바짝 밀착되었다. 조금만 더 앞으로 밀어 넣으면 쾌락의 파도가 파머의 사고를 손쉽게 파괴할 것이었다.
    - if: era.get('cflag:0:0') === 0
      content: 파머의 거절이 무색하게 이미 똑같이 젖어버린 몸이 두 꽃잎을 바짝 맞대고 끊임없이 마찰했다. 조금만 더 힘을 주면 눈앞의 몸은 고조된 쾌락에 떨림을 멈추지 못할 것이었다.
    - acc: 1
      content: 「이대로 가버려.」
    - 민감한 몸 때문에 이미 떨고 있는 귀를 살짝 깨물고 가볍게 바람을 불어넣었다.
    - 비소는 쉴 새 없이 파르르 떨면서도 음란하게 오므라들기를 반복했다.
    - 더는 참을 수 없게 된 %YOU%은(는) 떨고 있는 비소를 향해 단숨에 몰아쳤고, 두 사람 사이에 휘몰아치는 쾌락을 만끽했다.
    - 충격으로 사고 능력이 날아간 파머는 %YOU%의 앞에서 단정치 못한 표정을 지은 채 두 팔을 뻗었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너…… 나의 트레이너……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「더 많이, 해도 괜찮아.」
    - 가느다란 두 팔이 %YOU%의 목을 감싸 안으며 힘껏 %YOU%을(를) 껴안았다.
    - 눈앞에서 욕망을 불러일으킨 파머를 상대로, 이제 더 이상 진정해야 할 이유는 남아있지 않았다.
    - 남은 시간은 오로지 탐닉하는 시간만이 계속될 것이었다.
  # 馬跳

# [번역 완료] pre-travel
pre-travel:
  - color: %COLOR%
    content: 【파머호로 %CHARA%와 함께 드라이브하자!】

# [번역 완료] travel
travel:
  title: 짧은 여행
  lines:
    # 恋慕＞74、イベント「驚愕！スポーツカーが贈り物！」のあと、小型車／スポーツカーで外出
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「우후~!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「역시 차를 타고 외출하는 건 기분이 정말 상쾌하네!」
    - 두 사람은 차에 앉아 있었고, 창문을 통해 불어오는 강풍이 파머의 얼굴을 때렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「역시 차를 타는 감각은 전혀 다르단 말이지.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이런 기분은 경기장…… 평소에 달리는 것과는 완전히 딴판이야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음~ 트레이너, 조금만 더 빨리 달릴 수 있어?」
    - acc: 1
      content: 「더 빨라지면 제어할 수 없게 된다고.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 그렇구나……」
    - 옆자리에 앉아 바람을 만끽하며 자연스럽게 상체를 흔들거렸다.
    - 손을 들어 눈앞에서 흩날리는 머리카락을 쓸어 넘기며 창밖으로 빠르게 스쳐 지나가는 풍경을 바라보았다.
    - 차는 해안가를 따라 한참을 달리다, 인적이 없는 한적한 주차장에 멈춰 섰다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「어라~ 오늘은 의외로 사람이 없네.」
    - 차는 이미 멈췄지만 파머는 여전히 자리에 앉아 있었다.
    - 창밖으로 사람이 거의 보이지 않는 해변을 훑어보더니, 묵묵히 안전벨트를 풀었다.
    - acc: 1
      content: 「안 내려가?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응…… 트레이너가 오늘 나를 데리고 나와 준 건 정말 기쁘지만.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하지만 말이야, 우리 둘뿐이라면……」
    - 차 안에서 사복 차림으로 앉아 있던 파머는 얼굴을 살짝 붉히며 %YOU%을(를) 바라보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이거 데이트지, 그치?」
    - acc: 1
      content: 「그래, 데이트야.」
    - 파머의 상체가 비스듬히 기울어지며 반대편으로 넘어왔다.
    - 부드러운 어깨가 %YOU%의 몸에 기대어지고, 홍조를 띤 채 옷깃의 나비매듭을 풀었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 하지만 동작은 거기서 굳어 버렸다. 매듭을 풀었던 손가락은 지금 옷깃을 움켜쥐어 벌어지지 않도록 버티고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이러는 건 조금, 너무 나간 걸까?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너가 싫다면, 안 그럴게.」
    - 몸이 천천히 %YOU%의 품에서 떨어지려 했고, 두 손은 당황하며 옷을 다시 정돈하려 했다.
    - acc: 1
      content: 「딱히 싫지는 않아……」
    - acc: 2
      content: 「하고 싶은 대로 해.」
    - 리본을 매만지던 손가락이 허공에 멈췄고, 이미 추슬렀던 옷자락이 다시 서서히 흘러내렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그 말은 즉……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이렇게 해도, 트레이너도 좋다는 거야?」
    - 조금 전까지 망설임과 회피가 담겨있던 눈동자가 이제는 밝게 빛나기 시작했다.
    - 짙은 녹색 상의가 시트 위로 떨어지며 오늘을 위해 준비한 새 속옷이 드러났다.
    - 두 손으로 %YOU%의 얼굴을 감싸 쥐고, 천천히 자기 쪽으로 끌어당겼다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「여기서…… 하는 거지?」
    - acc: 1
      content: 「네 마음대로 해.」
    - acc: 2
      content: 「하고 싶으면 네가 직접 움직여.」
    - %YOU%의 허락은 파머의 내면 속에 있던 이성의 사슬을 풀어버렸다.
    - 시끌벅적하던 차 안은 점차 반복되는 숨소리와 물소리만이 남게 되었다.
    - 해가 지고 돌아갈 때가 되어서야 차 안에 흩어진 휴지와 범행 도구들을 서둘러 정리하기 시작했다.
  # 馬跳

# [번역 완료] pre-joke
pre-joke:
  - color: %COLOR%
    content: 【%CHARA%가 잠들었을 때……】

# [번역 완료] joke
joke:
  title: 한 편의 짧은 이야기
  lines:
    # 恋慕＞85、パーマーが昏睡のときターン終了
    - color: %COLOR%
      content: 얼마나 시간이 흘렀을까, 더 이상 경기장에 서지 못하게 된 %CHARA%는 본가로 불려갔다.
    - color: %COLOR%
      content: 그리고 %YOURNAME% 또한 %CHARA%의 파트너라는 신분을 잃었다.
    - color: %COLOR%
      content: 두 사람 사이의 인연은 여기서 끊어져, 앞으로는 접점이 없을 것만 같았다.
    - color: %COLOR%
      content: 하지만 %CHARA%와 %YOURNAME%이(가) 다시 마주했을 때, 그 끈은 다시 이어진 듯했다.
    - color: %COLOR%
      content: 아무런 망설임 없이, 아무 말도 하지 않고 %YOURNAME%의 품에 안겼다. 하지만 현역 시절처럼 세게 껴안지는 않았다.
    - color: %COLOR%
      content: 그저 가슴에 얼굴을 대고, 이 고동을 느끼고 싶을 뿐이었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「있지, 트레이너.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「미안해……」
    - color: %COLOR%
      content: 다시 한번 %YOURNAME%의 품에서 몸을 일으키며, 떨리는 손을 들어 올렸다.
    - color: %COLOR%
      content: 손가락 위에 끼워진 밝게 빛나는 반지가 유독 눈에 띄었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「나, 이미 결혼했어……」
    - color: %COLOR%
      content: 눈물이 뺨을 타고 흘러내렸지만, 힘없이 미소 지었다.
    - color: %COLOR%
      content: 한참 동안 서로를 끌어안고 있다가, 마침내 다시 눈을 떴다.
    - divider: true
    - color: %COLOR%
      content: 파머는 덮고 있던 이불을 거칠게 걷어차고, 숨이 막히는 몸에 깊은 숨을 불어넣었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「꿈?」
    - color: %COLOR%
      content: 기숙사 침대 위에 멍하니 앉은 파머는 여전히 떨리고 있는 자신의 두 손을 바라보았다.
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「왜 그래? 악몽이라도 꾼 표정인데.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아무것도 아니야…… 하지만 확실히 악몽이었네.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너 이외의 사람과 결혼한다니……」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「흠, 트레이너가 어쨌다고?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「별일 아니야! 정말로!」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「무슨 일이 있다면, 역시 파트너에게 빨리 말하는 게 좋아.」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「좀 더 솔직해지면 효과가 더 좋을걸.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「솔직하게……」
    - color: %COLOR%
      content: 늘어뜨린 손가락을 가볍게 가슴에 얹고, 여전히 진정되지 않는 심장 고동을 느꼈다.
    - color: %COLOR%
      content: 다시 눈을 뜬 파머는 결연한 눈빛으로 자리에서 일어났다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「알았어…… 솔직하게 말이지.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （직접 결혼 이야기를 꺼내면 분명 무슨 장난이라고 생각하겠지.）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （하지만, 장난이라면……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너에게 살짝 장난을 치면, 화를 내시려나……」

# [번역 완료] not_joke
not_joke:
  title: 별로 웃기지 않은 농담
  lines:
    # 「これは冗談……」発生後にターン終了
    - 업무를 마친 %YOU%이(가) 막 의자에서 일어났을 때, 문밖에서 익숙한 발소리가 들려왔다.
    - 문가에 나타난 것은 원래 오늘 휴가였던 파머였다. 어째서인지 이곳에 나타난 것이었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너…… 지금 시간 좀 있어?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「지금, 너한테 꼭 하고 싶은 말이 있거든.」
    - 자신 없는 목소리로 말을 마친 후, 손을 뒤로 하여 문을 닫았다.
    - 정적만이 감도는 공간 속에서 파머는 천천히 %YOU%의 앞으로 다가왔다.
    - 그러고는 다짜고짜 %YOU%의 품에 온몸을 파묻고 소리 없이 흐느꼈다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「있지, 트레이너.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「미안해……」
    - %YOU%의 품에서 몸을 일으키며, 떨리는 손을 들어 올렸다.
    - 손가락 위의 밝은 반지가 순백의 전등빛을 반사하고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 비록 입 밖으로 내기는 힘들지만……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「나, 어쩌면 결혼하게 될 것 같아.」
    - acc: 1
      content: 「결혼!?」
    - 어느샌가 파머는 더 이상 %YOU%의 앞에 머물지 않았다.
    - 다시 현상황을 인식한 %YOU%은(는) 여전히 거친 숨을 내뱉고 있었고, 팔에서는 시큰한 통증이 느껴졌다.
    - 얼굴에 경악이 가득한 파머는 손을 감싸 쥔 채 멍하니 바라보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……?」
    - 몇 걸음 뒤로 물러난 파머의 얼굴에는 기묘한 기쁨이 서렸고, 천천히 손을 움켜쥐었다.
    - 하얀 반지가 바닥에 떨어지며 플라스틱 소리를 냈다.
    - 「플라스틱?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……맞아.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그냥 플라스틱이야.」
    - 꽉 쥐었던 손을 천천히 펴자 여전히 원래의 깨끗한 모습이었고, 반지의 흔적은 보이지 않았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 내 일 때문에 화난 거야?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이건 그냥 장난이야, 그냥…… 만화에서 본 건데, 아하하.」
    - %YOU%의 얼굴을 보며 조금 멋쩍은 듯 뒷머리를 긁적였다.
    - 이 장난감을 가져왔을 때만 해도, 이렇게 격렬한 분노를 불러일으킬 줄은 전혀 예상치 못했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그냥 장난이야, 그냥 장난……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, 트레이너?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너?」
    - 얼굴에 서려 있던 공포와 기쁨이 순식간에 사라지더니, 당황하며 앞으로 몇 걸음 다가왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, 미안해……」
    - acc: 1
      content: 「이 농담은 전혀 재미없어.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「히익!」
    - 혹시나 하는 요행심을 가졌던 파머는 몸을 떨며 깊은 숨을 들이켰다.
    - 입술을 몇 번 벙긋거리더니 다시 다물었다.
    - 지금의 %YOU%은(는) 매우 화가 나 있다는 게 한눈에 보였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기……」
    - acc: 1
      key: sex
      content: 행동으로 보여준다.
      lines:
        - 방 안에는 파머의 점점 당황하는 숨소리 외에는 무서울 정도로 정적이 흘렀다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「내가 잘못했다는 거 알아, 그러니까……」
        - 계속해서 변명하려던 파머는 돌연 말을 멈췄다.
        - 입술은 무자비하게 자유를 빼앗겼고, %YOU%의 품속에 온 힘을 다해 꽉 붙잡혔다.
        - 심장이 격렬하게 뛰었지만, 그 힘을 %YOU%을(를) 밀어내는 데 쓰지는 않았다.
        - 이미 잘못을 인정한 파머는 묵묵히 자신을 껴안은 사람을 마주 안으며 눈을 감았다.
        - 다시 입술을 뗐을 때, 밝은 파란색 눈동자는 이미 물안개로 덮여 있었다.
        - 눈앞에서 여전히 화를 내고 있는 그 얼굴이, 지금은 유독 사랑스럽게 보였다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「만약, 만약 이래서.」
        - 파머가 입을 열며 살며시 앞으로 몸을 밀착했다.
        - 이미 홍조가 가득한 얼굴을 내밀어 %YOU%의 귀를 살짝 깨물었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이렇게 해서 네 화가 풀린다면…… 거절하지 않을게.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%는 언제나 너의 것이니까.」
        # 馬跳
    - acc: 2
      content: 말로 한다.
      lines:
        - 조용하던 방 안이 %YOU%의 목소리로 깨졌다.
        - 파머는 멍하니 %YOU%을(를) 바라보았고, 눈동자에는 두려움이 서려 있었다.
        - acc: 1
          content: 「……이런 장난은 받아들일 수 없어.」
        - 그렇게 말한 %YOU%은(는) 불쾌한 기색으로 자리에 다시 앉아 가방을 집어 들었다.
        - 장난이 지나쳤음을 자각한 파머는 조용히 자신의 손을 맞잡고 다리를 불안하게 움직였다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기, 트레이너……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「가려고?」
        - 곁에 선 파머의 목소리는 매우 작았고, %YOU%의 옷자락을 살며시 붙잡았다.
        - 눈에는 눈물이 고인 채 고개를 숙였다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너가 이런 걸 싫어한다면……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「나, 다시는 안 그럴게……」
        - 목소리에는 울먹임이 섞여 파르르 떨리고 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너 화만 풀린다면, 뭐든 할게!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그러니까 제발 이러지 마……」
        - 장난의 심각성을 뼈저리게 느낀 파머도 공포감을 맛보았다.
        - acc: 1
          content: 「됐어, 앞으로 이런 장난은 금지야.」
        - acc: 2
          content: 그대로 떠난다.
        - 제자리에 서서 떠나가는 %YOU%의 뒷모습을 보던 파머는 허리를 숙여 장난감 반지를 주워 올렸다.
        - 몇 초간 꽉 쥐고 있더니, 화가 난 듯 옆에 있는 쓰레기통에 내던져 버렸다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「무슨 연애 만화가 이래……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이런 장난이 무슨 소용이 있냐고……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「난 정말…… 바보야!」

# [번역 완료] not_joke_end
not_joke_end:
  - %YOU%의 곁에 쓰러져 움직이지 않는 파머는 그저 미소 지을 뿐이었다.
  - %YOU%의 몸에 살며시 기대어 그 품속으로 파고들었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「오늘 밤…… 뭘 할까?」

# [번역 완료] end_joke
end_joke:
  title: 농담은 이제 끝
  lines:
    #「面白くない冗談」選択分岐2、次ターン開始時
    - 그것은 전혀 재미없는 농담이었다.
    - 홀로 남겨진 파머는 그 말을 머릿속에서 몇 번이고 되새기며 플라스틱 장난감 반지를 바라보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이런 장난은 금지야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……만약 장난이 아니었다면, 트레이너는 어떻게 했을까.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「만약에, 만약에……」
    - 초점 없던 두 눈이 다시 서서히 빛을 발하기 시작했고, 눈동자에 비친 장난감은 더 이상 장난감이 아니었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「만약 반지를 트레이너에게 주는 거라면.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「만약에, 만약에……」
    - 혼잣말 소리가 점점 빨라지더니, 몸까지 묘하게 흥분되기 시작했다.
    - 심장이 격렬하게 뛰고 숨소리도 부자연스럽게 가팔라졌다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「준비해야겠어.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「우리 두 사람의 반지를 말이야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말 기대되네…… 트레이너~」
  # 恋慕+4

# [번역 대상] concern
concern:
  title: 너무 신경쓰지 마!
  lines:
    # 男/FUTA、ウマ娘、恋慕≥74、同チームメジロライアンかつ恋慕≥74、依存なし
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왠지 요즘은 계속 평온하네~」
    - %YOU%과(와) 파머 두 사람만이 오붓하게 있던 어느 오후, 갑자기 한마디 중얼거렸다.
    - acc: 1
      content: 「확실히 그렇네.」
    - %YOU%의 무심한 대답을 들은 파머는 가볍게 미소 지으며 다가왔다.
    - 두 손을 의자 등받이에 얹고는, 아무 생각 없이 책상 위의 서류를 내려다보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이런 날에도 이렇게 열심히 일하는구나.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「가끔은 좀 쉬는 게 어때?」
    - acc: 1
      content: 「지금 쉴 수는 없지.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「에~ 그런 거야?」
    - 집무실에 아무도 없는 틈을 타, 슬쩍 손을 뻗어 %YOU%의 볼을 꼬집었다.
    - 손가락으로 볼을 몇 번 가볍게 만지작거리던 파머가 먼저 웃음을 터뜨렸다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 가끔은 좀 편하게 있어봐.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그렇게 일이 좋아?」
    - 파머의 목소리가 귓가에 울리자 일하려던 의욕이 사라졌고, %YOU%은(는) 생각을 멈추고 뒤로 몸을 기댔다.
    - 뒤통수에 닿는 부드러운 감촉을 느끼며, 상황을 파악하는 데 몇 초가 걸렸다.
    - acc: 1
      content: 손을 뻗어 만져본다.
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어?」
        - 처음에는 아무것도 눈치채지 못했던 파머는 %YOU%의 손가락이 자신의 가슴에 닿는 것을 보았다.
        - 분위기가 순식간에 조용해졌고, 상황을 확인하려는 %YOU%만이 움켜쥔 부위를 가볍게 몇 번 주물렀다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기……」
        - 비록 정자세로 앉아 있는 %YOU%은(는) 지금 파머의 표정을 볼 수 없었지만, 자신이 무엇을 했는지는 이미 깨달았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너, 이거 좋아해?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「정말이지……」
    - acc: 2
      content: 아무것도 하지 않는다.
      lines:
        - 뒤통수에 전해지는 부드러운 감촉을 만끽하며, %YOU%은(는) 아무것도 하지 않는 쪽을 택했다.
        - 평소에는 보면서도 선뜻 만지기 힘들었던 부위가 지금 이 순간 자신에게 바짝 밀착되어 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기, 졸린 거야?」
        - 「아, 아마도 그런 것 같아.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아, 그럼 오늘은 좀 일찍 퇴근할래?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어차피 오늘 별일 없으니까, 내가 트레이너를 집까지 데려다줄게.」
        - 파머는 웃으며 손을 놓았지만, 의자 뒤편에서 물러나지는 않았다.
        - 비록 정자세로 앉아 있는 %YOU%은(는) 지금 파머의 표정을 볼 수 없었지만, 무슨 일이 일어났는지는 이미 알고 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「저기……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너는 정말 심술궂네, 다 알고 있으면서.」
    - 파머는 %YOU%의 머리를 가볍게 한 대 쳤지만, 전혀 화난 기색은 아니었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （그렇게 여기가 좋은 걸까……）
    - %YOU%의 곁에서 떨어지며, 조금 신경 쓰이는 듯 교복 아래의 가슴을 슬쩍 밀어 올렸다.
    - 눈길을 슬쩍 %YOU% 쪽으로 돌리자, 약간의 기대가 섞인 눈빛과 마주쳤다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （사실 트레이너한테라면……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （안 될 것도, 없긴 하지만.）
    - 마치 결심이라도 한 듯 파머는 %YOU%의 손을 살며시 끌어당겼다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「원한다면…… 해도 괜찮아.」
    - 파머는 %YOU%의 손바닥을 가슴 위에 얹고 약간 힘주어 몇 번 주무르게 했다.
    - 얼굴에는 멈추지 않는 홍조가 감돌았지만, 도망치고 싶은 마음을 애써 억누르고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「기분이…… 묘하네……」
    - 얼굴에 미소를 지어 보였지만, 억지로 참는 표정 같지는 않았다.
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: ？？？
        - 「파머! %CALLNAME_27% 안에 있어?」
    - 문밖에서 갑자기 들려온 익숙하고 쾌활한 목소리가 파머와 %YOU%의 동작을 가로막았다.
    - 두 사람 사이로 이성이 돌아왔고, 동시에 시선은 문쪽을 향했다.
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「내가 평소에 쓰던 걸 가져왔는……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「……어? 어어?」
    - 아무 생각 없이 문을 열었을 때, 라이언의 눈에 들어온 것은 두 사람이 끈적하게 붙어 있는 모습이었다.
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「어…… 설마, 내가…… %CALLNAME_27% 당신……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - acc: 1
      content: 「……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「으와아아아앙!」
    - 메지로 라이언은 품에 안은 배낭을 껴안고 즉시 뒤돌아 도망치려 했다.
    - 하지만 도망치는 것에 있어서는 파머가 훨씬 숙련되어 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「잠깐만!」
    - 파머는 도망치려던 메지로 라이언을 한 손으로 붙잡아 벽으로 밀어붙였다.
    - 배낭으로 가리려 했으나 전혀 가려지지 않는 메지로 라이언의 새빨개진 얼굴을 보며, 파머도 민망한 듯 멍하니 멈춰 섰다.
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「아! 미, 미안…… 미안해. 으음.」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「내가 분위기를 좀 못 읽었나?」
    - 축 처진 귀가 기운 없이 파르르 떨렸다.
    - 눈가에 눈물이 살짝 고인 채, 약한 기색으로 위를 올려다보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「라이언……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「너도 트레이너 때문이지?」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「……응.」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「트레이너가 요즘 너무 피곤해 보이길래……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「그래서 내가 평소에 베고 있으면 정말 편한 베개를 가져왔거든……」
    - 배낭을 껴안은 메지로 라이언은 점점 몸을 아래로 웅크렸고, 눈빛만이 파머를 바라보고 있었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그렇구나.」
    - 파머는 손을 놓고 천천히 몸을 낮춰 앉았다.
    - 얼굴을 가리고 있던 배낭을 살며시 치우고, 가볍게 웃으며 메지로 라이언과 눈을 맞췄다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「사실 우리 다 똑같네.」
    - 조심스러운 손길로 문을 닫고 슬쩍 잠금쇠까지 걸었다.
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「저기…… 파머?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「자자, 신경 쓰지 마.」
    - 파머는 메지로 라이언의 뒤에서 %SEX%의 어깨를 밀며, 아무것도 모르는 %YOU%에게 다가왔다.
    - 재빠르게 얼굴을 가린 배낭을 치워버리고는, 메지로 라이언의 가슴 쪽을 슬쩍 밀어 올렸다.
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「파, 파머!?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「괜찮다니까~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너, 너도 이거 좋아하잖아~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「내가 지금 꽉 잡아뒀다고.」
    - 파머는 메지로 라이언을 밀어 %YOU% 앞에 세우고 자신은 뒤에 숨었다.
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「으으, 이러지 마 파머……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하지만 라이언 너도 기대하고 있잖아?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「자, 트레이너, 어떻게 할 거야?」
    - 파머는 메지로 라이언의 등 뒤에서 이미 홍조가 가득한 얼굴을 내밀고 %YOU%의 표정을 훔쳐보았다.
    - acc: 1
      key: sex
      content: 「메지로 라이언을 괴롭힌다.」
      lines:
        - 메지로 라이언의 가슴에 맺힌 풍성한 열매는 눈을 뗄 수 없게 만들었다.
        - %YOU%이(가) 생각에 잠겨 있는 사이, 손은 이미 본능에 따라 그곳을 움켜쥐었다.
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「윽!」
        - 손바닥을 통해 격렬한 떨림이 전해졌다.
        - 메지로 라이언은 눈을 질끈 감고 경직된 채 제자리에 서 있었다.
        - %SEX%가 용기를 내서 눈을 뜨기도 전에, 파머가 살짝 앞으로 밀었다.
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「이, 이러지 마……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「괜찮아, 트레이너.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「라이언 %SEX%라면 분명 괜찮을 거야.」
        - 옆에 앉은 파머는 메지로 라이언의 두 손을 가볍게 누르며 %YOU%의 표정을 살폈다.
    - acc: 2
      content: 「메지로 파머를 괴롭힌다.」
      lines:
        - 라이언 뒤에 숨어 있는 파머를 보자 마음속에서 새로운 생각이 싹텄다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「자, 라이언도 분명 개의치 않을……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어, 어라?」
        - 파머의 얼굴에 있던 미소가 서서히 사라지더니 굳어버렸다.
        - 자리에서 일어난 %YOU%은(는) 메지로 라이언의 어깨 너머로 손을 뻗어, 파머를 붙잡아 단숨에 끌어당겼다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「앗! 내가 아니라니까!」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「라이언 %SEX% 쪽이……」
        - 뭔가 더 말하려던 파머는 점차 동작을 멈추고 겁을 먹은 듯 몸을 웅크렸다.
        - 홍조 띤 얼굴로 요동치는 가슴을 짓누르며 말을 이었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……나, 나도 원해.」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「파머……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「우리 정말 똑같네.」
    - acc: 3
      content: 「두 사람을 함께 쓰러뜨린다.」
      lines:
        - 눈앞에 딱 붙어 있는 두 우마무스메를 보자 %YOU%의 눈에서는 이미 이성이 사라졌다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「꺄앗!」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「와앗!」
        - 방금 전까지 즐겁게 농담을 주고받던 자매는 지금 나란히 바닥에 쓰러졌다.
        - 거친 숨소리가 세 사람 사이에 울려 퍼졌고, 곧 더욱 노골적인 소리로 변할 것만 같았다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「두 사람을 한꺼번에……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「에!? 두 사람?……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이건 좀 너무하잖아!」
        - 비록 상위에 있었지만, 힘은 아래에 있는 두 사람이 더 강했다.
        - %YOU%은(는) 배낭 위에 눕혀진 채, 자신의 바지가 무참히 벗겨지는 것을 속수무책으로 지켜보았다.
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「음, 트레이너가 이런 걸 좋아할 줄은 몰랐는데……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「정말 너무해……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「벌을 주지 않으면 안 되겠네.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그치? 트레이너?」
        - 파머는 %YOU%의 허리 위에 올라타 메지로 라이언을 불러 함께 짓눌렀다.
        - 옷가지가 바닥에 떨어지고, 두 점의 아름다운 육체가 %YOU%의 몸 위를 짓뭉갰다.
        - 아래에 있는 꼬마 트레이너는 이미 준비를 마친 채, 욕구불만 상태로 공기 중에 노출되어 파르르 떨고 있었다.

# [번역 대상] concern_end
concern_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「정말 정력이 좋네, 트레이너.」
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「이미 여기까지 해버렸으니…… 부디 책임져줘~」
  - 손을 흔든 뒤 파머는 자신의 가방에서 조금 과하게 큰 도시락통을 꺼냈다.
  - とろんとした両目がぼんやり%YOU%を見る。二人の顔の前に、愛液まみれの凶器が近づいている
  - %YOU%は愛馬の髪をそっと撫で、%THEY%を促す
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「트레이너, 한번 먹어봐! 맛이 꽤 괜찮을 거야!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「맛있어? 헤헤……」
  - 파머의 얼굴에 감돌던 불안함이 순식간에 사라지고 쾌활하게 변했다.
  - 도시락을 다 먹은 뒤에야 두 사람은 그늘진 곳에 누워 평온한 낮잠 시간을 즐겼다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「후으—」
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「아…… 이젠 선생님한테 붙잡혀서 보충 수업을 들어야겠네.」

# [번역 대상] dessert
dessert:
  title: 디저트……뭔가 이상한데?
  lines:
    # 男/FUTA、ウマ娘、恋慕≥74、同チームメジロマックイーンかつ恋慕≥74、依存なし、メジロマックイーン菊花賞後にランダム
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음…… 요즘 멜론 파르페가 인기가 많은 것 같네.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하지만 과일 파이도 괜찮아 보이는데, 어떡하지.」
    - 파머는 스마트폰을 붙잡고 고민하며 앞뒤로 화면을 넘겼다.
    - acc: 1
      content: 「디저트가 먹고 싶어?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응? 아니야.」
    - %YOU%의 목소리를 듣자, 파머는 자연스럽게 소파에서 몸을 일으켰다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「요즘 맥퀸이 계속 노력하고 있잖아?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그래서 말인데, 디저트를 사서 %SEX%에게 주려고……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그런데 요즘 디저트 종류가 너무 많아서 고르기가 힘드네.」
    - acc: 1
      content: 「그럼 직접 맥퀸을 찾아가 보는 건 어때?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「직접 본인을 찾아가라고?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「음…… 안 될 건 없지만.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「왠지 금방 맥퀸이 너무 많이 먹지 못하게 말리는 상황이 될 것 같아.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「맥퀸 %SEX%는 못 참고 한꺼번에 먹어 버리거든~」
    - acc: 1
      content: 「그 말은 %SEX% 본인에게 들려줄 수 없겠네.」
    - acc: 2
      content: 「그 표현은 좀 너무한걸.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하지만 사실인걸~」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「문밖에서 다 들었답니다, 두 분.」
    - 두 사람의 화기애애한 대화 속에 또 다른 목소리가 끼어들었다.
    - 깜짝 놀란 파머와 %YOU%은(는) 동시에 문쪽을 뒤돌아보았다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「제가 체중 조절에 서툴다는 건 알고 있지만……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「그렇게 말씀하시는 건 조금 너무하지 않나요?」
    - 문이 닫히는 소리와 함께, 메지로 맥퀸이 불만스러운 표정으로 집무실 안으로 들어왔다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「정말이지……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「농담을 주고받는 걸 반대하는 건 아니지만요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아하하, 그게……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「있잖아, 처음에는 우리도 너한테 디저트를 선물하려고 했던 거라니까?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이번 한 번만 봐줘~」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「안~ 돼~ 요~」
    - 볼을 부풀린 메지로 맥퀸은 %YOU%과(와) 파머 앞으로 다가와, 불만인 척 팔짱을 꼈다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그…… 그럼 어떻게 해야 우릴 용서해 줄 거야?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「우리가 할 수 있는 거라면 뭐든 할 테니까!」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「으흠, 어디 생각 좀 해볼까요.」
    - 장난기 어린 미소를 지으며 당황한 파머를 바라보았다.
    - 하지만 곧 파머를 보던 시선은 옆에서 어쩔 줄 몰라 하는 %YOU%에게로 향했다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「뭐든 상관없다고 하셨으니……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「그럼 트레이너님을 조금 번거롭게 해드려야겠네요~」
    - 그렇게 말한 메지로 맥퀸은 파머가 보는 앞에서 %YOU%의 무릎 위에 주저앉았다.
    - acc: 1
      content: 「저기, 내 의견은?」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「%CALLNAME_13%는 조용히 해 주시겠어요.」
    - 메지로 맥퀸이 정중한 호칭으로 제지하자, 아래에 앉아 있던 %YOU%은(는) 어색하게 입을 다물 수밖에 없었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, 그러면 트레이너가 곤란해할 거야.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「차라리 나한테 시켜…… 예를 들면 디저트 가게 셔틀이라든가!」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「그렇게 하면 벌이라고 할 수 없잖아요.」
    - 말하면서, %YOU%의 허벅지 위에 올려둔 엉덩이를 살짝 위로 움직였다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「저기, 이건 좀 너무……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「트레이너님은 불만 없으시죠?」
    - 말을 꺼내지 못하게 된 %YOU%은(는) 무언가 말하고 싶어도 앞의 파머에게 눈짓을 보내는 것이 고작이었다.
    - 안타깝게도 당황한 파머는 그 시선을 전혀 알아채지 못했다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「보세요, 트레이너님은 아무 말씀 없으시잖아요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「하지만……」
    - 파머의 시선은 메지로 맥퀸과 %YOU% 사이를 왕복했고, 불안한 듯 손가락을 꼼지락거렸다.
    - 무언가 말하고 싶은 듯했지만, 자신이 뱉은 말이 있어 입을 열기가 어려워 보였다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （……너무 장난이 과했나.）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （원래는 그냥 파머에게 가벼운 장난만 치려고 했는데……）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （이제 어떡하지, 사과한다고 해도 파머가 받아주지 않을 것 같은데.）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「어, 음, 저도 화가 좀 풀렸으니까 이제……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「너무해……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「어?」
    - 들리지 않는다는 듯, 파머는 혼자 얼굴을 붉혔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「나도 트레이너랑 그렇게 같이 있고 싶단 말이야!」
    - 메지로 맥퀸과 %YOU%이(가) 반응할 틈도 없이, 파머가 달려들었다.
    - 평범한 사무용 의자는 세 사람의 무게와 충격을 이기지 못하고 그대로 바닥에 넘어졌다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「아파라……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 미, 미안해!」
    - 의자가 바닥에 부딪히는 소리와 함께 파머는 이성을 되찾은 듯 당황하며 자리에서 일어났다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「아, 아니에요, 제가 사과해야 할 일이죠……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「그러지 말았어야 했는데…… 파머?」
    - 자책하며 사과하던 메지로 맥퀸은 파머의 대답이 없자 고개를 들었다.
    - 파머의 눈빛이 심상치 않다는 것을 눈치채고, 시선이 머무는 곳을 따라 내려다보았다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「아……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「트레이너님, 설마……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「저희 때문에, 그렇게 되신 건가요?」
    - 상황을 눈치챈 메지로 맥퀸이 천천히 일어나 뒤에 있는 %YOU%을(를) 바라보았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이, 이런 건……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「저기, 파머……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「트레이너님은, 당신에게 돌려드릴게요……」
    - 기어들어 가는 목소리로 말하며 %YOU%의 허리 위에서 몸을 뗐다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 잘못을 저질렀다는 자각 때문인지, 불안한 기색으로 %YOU%을(를) 일으켜 세우려 했다.
    - 손을 뻗어 붙잡으려던 찰나, 당황한 나머지 특정 부위를 건드리고 말았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「맥퀸 너……」
    - 동작을 멈춘 메지로 맥퀸은 위에서 매서운 눈빛으로 내려다보는 파머를 겁먹은 듯 바라보았다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「죄송해요!」
    - 크게 사과한 뒤 메지로 맥퀸은 문쪽으로 달려갔다.
    - 하지만 문 밖으로 나가기도 전에 파머가 메지로 맥퀸의 어깨를 단숨에 붙잡았다.
    - 문이 잠기는 소리와 함께, 두 %UMA%은 다시 %YOU% 앞으로 돌아왔다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「파머!? 이건 뭐 하는 거예요?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 메지로 맥퀸의 목소리가 들리지 않는 듯, 파머는 %SEX%를 끌고 %YOU%의 곁으로 왔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「사과할 거라면……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너에게 직접 하라고!」
    - acc: 1
      content: 「내 의견은……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「트레이너는 조용히 해!」
    - 강압적인 목소리로 %YOU%이(가) 하려던 말을 억눌렀다.
    - 파머는 어쩔 줄 몰라 하는 메지로 맥퀸의 손을 붙잡아 %YOU%의 몸에 살며시 갖다 대었다.
    - 겹쳐진 손은 가슴을 타고 조금씩 아래로 미끄러져 내려갔다.
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「죄송해요, 죄송해요!」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「파머, 제가 잘못했어요, 이러지 마세요……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그럼 트레이너한테 물어보자.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「의견이 있는지 없는지 말이야.」
    - acc: 1
      key: sex
      content: 「의견 없습니다!」
      lines:
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「보, 보세요, 트레이너님도 의견이 없다고……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼 계속해도 되겠네.」
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「에?」
        - 그렇게 말한 파머는 메지로 맥퀸의 손을 힘주어 움켜쥐었다.
        - 조금씩 %YOU%의 하반신 안쪽으로 파고들자, 따뜻한 액체가 손에 묻어났다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「맥퀸 너도 이런 거 좋아하는 거…… 맞지?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그럼, 의견이 없는 트레이너.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「말랑말랑한 맥퀸이야~」
    - acc: 2
      content: 「의견 있습니다!」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「정말 의견이 있어?」
        - 파머의 눈빛에는 약간의 추궁이 섞여 있었다.
        - 손은 이미 반강제적으로 메지로 맥퀸을 붙잡아 민감한 부위를 훑고 있었다.
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「파머……」
        - 앞으로 끌려온 메지로 맥퀸은 홍조 띤 얼굴로 파머에게 무언가 말하려 애썼다.
        - 두 다리는 움찔거리며 비벼졌고, 눈동자는 불안하게 좌우로 흔들렸다.
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「이제 그만, 저를 놓아주지 않을래요?」
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「트레이너님도 곤란해하시고 계시잖아요……」
        - 말은 약하게 내뱉었지만, 점차 거칠어지는 콧김이 모든 것을 말해주고 있었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「하지만 맥퀸 넌 이미 이렇게 됐는걸.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「트레이너도 마찬가지고.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「애초에 트레이너가 의견을 내지 못하게 한 건 너였잖아, 그치?」
        - 메지로 맥퀸을 붙잡았던 손을 놓고, 파머는 자연스럽게 두 사람의 옷을 풀어헤쳤다.
        - 옷가지가 바닥에 떨어지자, 군침이 돌 만큼 아름다운 육체가 %YOU%의 앞에 드러났다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「좀 더 적극적으로 해보는 건 어때?」
        - 가볍게 앞으로 밀어, 메지로 맥퀸을 자신과 %YOU% 사이에 끼워 넣었다.
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「그, 그렇다면……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「좀 더 마음을 열어봐, 맥퀸.」
        - 마치 이성의 끈이 끊어진 것처럼.
        - 맥퀸과 파머는 동시에 %YOU%의 몸 위로 엎어졌다.

# [번역 완료] dessert_end
dessert_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「갑자기 땡땡이를 쳤으니, 집안에서 연락이 오지는 않을까 모르겠네.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……하지만 그때가 되면, 트레이너가 같이 있어 줄 거지?」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「이제 가자, 트레이너.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……계속 여기 있다가는 들키고 말 거야.」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「갑자기 노래방이라니, 무슨 일이라도 있어 트레이너?」
  - %YOU%의 아래에 앉아 있던 메지로 맥퀸은 몸을 움찔거리면서도 몽롱한 눈빛으로 위를 올려다보며 %YOU%의 얼굴을 바라보았다.
  - 그런 자매를 보며, 파머는 묵묵히 %YOU%의 품 안으로 더욱 깊숙이 파고들었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「저기, 트레이너는 뭐 부를래? 내가 먼저 예약해 줄게!」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「어렵게 둘이서 온 노래방이니까, 트레이너도 마음껏 즐겨야 해!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아, 파머 아니신가요?」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「당신도 보러…… 트레이너님도 계셨군요.」

# [번역 대상] party
party:
  title: 파티 타임
  lines:
    #恋慕≥74、同チームダイタクヘリオスかつ恋慕≥74、依存なし、商店街で発生
    - 어느 평범한 휴일, %YOU%은(는) 파머의 전화 한 통에 집에서 불려 나오게 되었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「야호! %CALLNAME%! 여기야 여기!」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「오오, %CALLNAME_65%도 왔네!」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「이제 파티 시작이라구, 웨이!」
    - %YOU%를 맞이한 후, 다이타쿠 헬리오스와 메지로 파머는 함께 즐겁게 달리기 시작했다.
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「우선은 노래 타임이야, 가자!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오오, 우선은 음악이지!」
    - 파티의 시작은 그렇게 가라오케로 정해졌다.
    - 익숙한 가게에 들어가 이미 안면을 튼 사장님과 인사를 나눈 뒤, 세 사람은 함께 방으로 들어갔다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%! 뭐 좀 부를래?」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「음흠? %CALLNAME_65%가 먼저 할 거야!?」
    - 마이크를 쥔 다이타쿠 헬리오스가 뒤를 돌아보자, 눈 속에 흥분한 작은 별들이 가득했다.
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「파머찡~ 내가 먼저 하게 해줘~」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「최근에 겨우 배운 신곡이란 말이야, 하게 해줘~」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「알았어 알았어~ 난 기다릴게~」
    - 선곡 패널에서 떨어진 파머는 자연스럽게 %YOU%의 곁에 앉았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「헬리오스와 함께 있을 때는 정말 즐겁네.」
    - acc: 1
      content: 「어느샌가 기분이 고조되네.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그치?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오, 이제 시작하려나 봐!」
    - 파머의 귀가 살짝 떨리더니, 다이타쿠 헬리오스 쪽을 바라보았다.
    - 양손은 자동으로 테이블 위의 마라카스를 집어 들고, 흘러나오는 음악에 맞춰 흔들기 시작했다.
    - 청량한 셔플 소리가 다이타쿠 헬리오스의 초고속 비트 음악과 어우러져, 세 사람뿐인 방은 십여 명이 있는 것 같은 시끌벅적한 소리를 내뿜었다.
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아하하~ 조금 너무 달아올랐나~」
    - 다시 자리에 앉은 메지로 파머는 몸을 소파에 완전히 파묻었다. 에어컨이 켜진 방임에도 몸에서 열기가 훅훅 끼쳐왔다.
    - 다이타쿠 헬리오스는 여전히 즐겁게 노래하고 있었지만, 눈에 띄게 기세가 꺾여 있었다.
    - acc: 1
      content: 「지쳤어?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「응, 조금 지쳤네.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이럴 때는 헬리오스가 부럽다니까…… 지구력이 엄청나!」
    - 소파에 널브러진 메지로 파머는 다이타쿠 헬리오스가 떠들썩하게 마이크를 붙잡고 있는 모습을 보며 발그레해진 얼굴로 작게 웃었다.
    - 화려한 미러볼이 일곱 빛깔 조명을 세 사람에게 비추자, 분위기가 약간 미묘해졌다.
    - 밝지 않은 공간 속에서, 메지로 파머가 열을 식히기 위해 셔츠를 살짝 당기는 동작, 다이타쿠 헬리오스가 들썩일 때의 소리…….
    - %YOU%의 눈에는 왠지 모르게 자꾸 은밀한 부위들로 주의가 집중되었다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%? 얼굴 빨개졌어. 더워?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 그럼 음료수 좀 시킬게!」
    - 항상 %YOU%를 세심하게 신경 써주는 메지로 파머.
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「우와앗?! %CALLNAME_65% 지친 거야?」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「그럼 잠시 휴식!」
    - 전혀 이상한 점을 눈치채지 못한 다이타쿠 헬리오스.
    - 그리고 지금 이 순간, 조명의 엄호 아래 민감한 부위를 가리고 있는 %YOU%.
    - acc: 1
      content: （이거 큰일인데……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 뭐 마실래?」
    - 소파에서 몸을 일으켜 %YOU% 쪽으로 다가오는 메지로 파머.
    - 마이크를 내려놓고 %YOU%의 옆에 털썩 주저앉은 다이타쿠 헬리오스.
    - 직접적인 접촉이 아님에도 불구하고, 체온이 호흡과 함께 양옆에서 밀려 들어왔다.
    - 특정 부위가 딱딱하게 꼿꼿이 섰다.
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%CALLNAME_65%？」
    - 운이 없으려니 뒤로 넘어져도 코가 깨진다고 했던가.
    - 원래 음악에 맞춰 돌아가야 할 미러볼이 하필 우마뾰이 전설의 전주 부분에서 소파 위로 조명을 집중시켰다.
    - 순식간에 양옆의 우마무스메들이 똑똑히 보고 말았다.
    - 옷 위로 드러난 부자연스럽고 작은 돌출을.
    - 음료를 주문하려던 메지로 파머의 스마트폰이 소파 위로 떨어지며 둔탁한 소리를 냈다.
    - 시끌벅적하던 다이타쿠 헬리오스도 이때만큼은 얼굴을 붉히며 시선을 피했다.
    - content:
        - fontWeight: bold
          content: 음악
        - 「우마뾰이~ 우마뾰이~」
    - 누군가가 먼저 침을 꿀꺽 삼키는 소리가 정적을 깨뜨렸다.
    - 누구랄 것도 없이 모두의 얼굴이 새빨갛게 달아올랐다.
    - acc: 1
      key: sex
      content: 「하자.」
      lines:
        # プレイヤー主導、ヘリオス助手
        - 한마디로 결정되었다.
        - 메지로 파머는 두 눈을 감고 살며시 %YOU%의 몸 앞으로 다가왔다.
        - 이미 열기에 젖어버린 옷가지가 소파 한구석으로 내팽개쳐졌다.
        - 짙은 파란색 브릿지가 %YOU%의 아랫배를 스쳤고, 달아오른 작은 얼굴이 아래쪽에 밀착되었다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%…… 살살 해줘야 해……」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「으응…… %CALLNAME_65%의 냄새……」
    - acc: 2
      content: 「할래?」
      lines:
        # パーマー主導、ヘリオス助手
        - %YOU%은(는) 물어보고 말았다, 가장 물어봐서는 안 될 말을.
        - 하지만 이 질문에 말로 된 대답은 필요 없었다.
        - 손가락이 두 방향에서 %YOU%의 근육을 따라 옷 속으로 파고들어, 흥분한 부위를 움켜쥐었다.
        - %YOU%이(가) 참지 못하고 목소리를 내뱉으려는 순간, 입술마저 막혀버렸다.
        - 쓰러지기 전 시야에 마지막으로 남은 것은 하얀 초승달 모양의 브릿지였다.

# [번역 완료] party_end
party_end:
  - 메지로 아르당이 제멋대로 한 걸음 뒤로 물러나자, 파머는 서둘러 달려가 떠나려는 발걸음을 붙잡았다.
  - 반쯤 강제로 메지로 아르당을 붙잡고 나서야 파머는 정신을 차렸다.
  - content:
      - fontWeight: bold
        content: 음악
      - 「우마뾰이~ 우마뾰이~」
  - 누군가가 먼저 침을 꿀꺽 삼키는 소리가 정적을 깨뜨렸다.
  - 두 쌍의 눈이 잠시 화면을 바라보다가, 약속이나 한 듯 %YOU%에게 향했다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「빤히——」
  - color: %COLOR_65%
    content:
      - fontWeight: bold
        content: %HELIOS%
      - 「빤히——」
  - acc: 1
    content: 「아, 알았어……」
  - 양옆에서 시선이 쏟아지는 가운데, %YOU%은(는) 깊게 숨을 들이마셨다.
  - 양옆의 시선 속에서 %당신%은(는) 심호흡을 크게 내쉬었다.
  - 양팔을 벌려 두 명의 %우마무스메%을 힘껏 끌어안았다.
