# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 완료] ask_release_agree
ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……그렇구나.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「역시, %CALLNAME%도 계속 여기에만 있는 건 싫은 거네.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「미안해, 계속 %CALLNAME%를 여기에 묶어둬서.」
  - %YOU%의 앞에 미동도 없이 서서, 고개를 떨군 채 금방이라도 쓰러질 듯 위태롭게 흔들렸다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하지만 적어도…… 적어도 지금만큼은 다시 한번 내 고집을 들어줘.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아주 조금이면 돼, 정말 아주 조금이면.」
  - 비틀거리며 앞으로 다가온 그녀는 %YOU%의 가슴에 머리를 기댔다. 옷 너머로 희미한 열기가 전해졌다.
  - 그녀는 허리를 감싸 안으며 힘껏 매달렸다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「이대로면 돼……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「이대로, 아주 조금만 더……」
  - 어느 정도의 시간이 흘렀을까, 마침내 꽉 맞잡았던 손이 풀렸다.
  - 얼굴이 새빨갛게 달아오른 %CHARA%는 억지로 미소를 지어 보이며 뺨에 맺힌 이슬을 닦아냈다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「저기 말이야, %CALLNAME%.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「여기서 나가서도…… 우리 여전히 파트너인 거 맞지?」
  - %CHARA%가 문 잠금장치를 풀자 경쾌한 소리가 울려 퍼졌다.
  - 그녀는 문을 등진 채 %YOU%에게 손을 내밀었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「자, 가자…… %CALLNAME%.」


# [번역 완료] ask_release_reject
ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아직은 안 돼.」
  - 간청하는 %YOU%을(를) 향해 %CHARA%는 그저 옅은 미소를 띠며 뺨을 부드럽게 어루만졌다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%가 여기 없으면 말이야.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「난 무척 외로울 거야.」
  - 그녀는 몸을 일으켜 %YOU%의 귓가에 입을 맞추듯 다가와 귓바퀴를 살짝 핥았다.
  - %YOU%이(가) 소름 돋아 몸을 떠는 것을 느끼고, %CHARA%는 달콤하게 웃음지었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그냥 내 곁에 있어 주면 돼……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」


# [번역 완료] ask_time
ask_time:
  - %YOU%이(가) 떠보듯 %CHARA%에게 시간을 물었지만, 돌아온 것은 평온한 미소뿐이었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「시간은 아직 아주 많이 있어.」

# [번역 완료] back_basement
back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - if: era.get('base:0:体力') < 100
          lines:
            - 피로 섞인 눈을 뜨자, 언제나 밝고 아름답게 빛나던 그 푸른 눈동자와 시선이 마주쳤다.
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「으응~?」
        - if: era.get('base:0:体力') >= 100
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「오, 일어났어?」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%의 자는 얼굴, 아직 다 못 봤는데. 정말이지……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「하지만 여기 있으면 언제든 %CALLNAME%의 웃는 얼굴을 볼 수 있겠지…… 그치?」
    - if: '!d.start'
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「다녀왔어~」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「오, %CALLNAME%! 오늘도 착하게 잘 있었네~」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「안심해, 내가 계속 곁에 있어 줄게.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「여기는…… 내가 도망쳐 온 종착역이니까.」


# [번역 완료] battle_escape
battle_escape:
  - 짧은 소란이 끝난 뒤, 작은 방에는 다시 정적이 찾아왔다.
  - %CHARA%는 %YOU%의 앞에 쓰러진 채 미동도 하지 않았다.
  - 이제 눈앞의 자물쇠만 열면 돌아갈 수 있다.
  - （……이대로 정말 괜찮은 걸까. %CHARA%를 여기에 혼자 남겨두고……）
  - 스스로에게 질문을 던진 뒤, 마음 한구석의 죄책감을 이기지 못한 %YOU%은(는) 결국 뒤를 돌아보았다.
  - 함께 도망치기로 선택했던 파트너라면, 마땅히 함께 가야 한다.
  - 억지로 몸을 일으켜 정신을 잃은 %CHARA%를 품에 안고, 미리 찾아둔 열쇠를 쥐었다.
  - 이제 같이 돌아갈 시간이다.


# [번역 완료] battle_fail
battle_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그건 곤란해, %CALLNAME%.」
  - 그녀는 불순한 의도가 담긴 손을 가볍게 제압하고, 오히려 %YOU%을(를) 벽으로 밀어붙였다.
  - %CHARA%는 당황한 기색이 역력한 %YOU%을(를) 내려다보며 묘한 미소를 지었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「내가 좋아하는 %CALLNAME%는 나한테 이런 짓 안 할 텐데 말이야.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「돌아가서 차~분하게 다시 이야기 좀 할까?」
  - 어스름한 조명 아래, 푸른 눈동자가 은은하게 빛나고 있었다.


# [번역 완료] battle_prison
battle_prison:
  - 차가운 문고리가 날카로운 소리를 냈다.
  - 뒤에서 뻗어온 힘 있는 손이 %YOU%의 떨리는 어깨를 부드럽게 움켜쥐었다. 예상치 못한 온기가 느껴졌다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%~ 지금 뭐 하고 있어?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「제대로 사과한다면, 아무것도 못 본 걸로 해 줄 수도 있는데~」
  - 가벼운 말투였지만 %YOU%은(는) 아무 말도 할 수 없었고, 망연자실한 채 %CHARA%에게 이끌려 다시 침대로 돌아왔다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%는 그냥 여기서 나만 기다리면 돼.」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「다른 건 전혀 중요하지 않으니까.」


# [번역 완료] find_escape
find_escape:
  sync: true
  lines:
    - %YOU%의 노력 끝에 드디어 문고리가 헐거워지기 시작했다. 조금만 더 힘을 쓰려던 찰나……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, 여기서 나 돌아오길 기다리고 있었던 거야?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「역시 내 파트너네, %CALLNAME%!」
    - 그녀는 웃으며 %YOU%의 손에서 도구를 빼앗아 들고는, 다시 문을 굳게 닫았다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「나를 반겨줄 거면 그냥 여기 있으면 돼.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「만약 %CALLNAME%가 자물쇠를 열어버리면 나 정말 곤란해지거든.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「무슨 뜻인지 알지, %CALLNAME%?」


# [번역 완료] flatter
flatter:
  - if: (t = era.get('relation:64:0')) < 0
    lines:
      - 당신의 파트너는 본래 햇살 같은 아이였으니, 진심으로 대화하고 부탁한다면……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아무리 나 같은 애라도 %CALLNAME%의 거짓말 정도는 눈치챌 수 있어.」
      - %CHARA%는 망설임 없이 %YOU%의 말을 끊고 무미건조한 미소를 지었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「자꾸 이러면 말이야, %CALLNAME%. 작은 벌을 줘야 할지도 모르겠네.」
      - %YOU%이(가) 무어라 덧붙이기도 전에 %CHARA%는 당신의 입술을 막아버렸다.
      - 그녀는 일말의 주저함도 없이 %YOU%을(를) 침대로 밀어 넣고는 무표정하게 곁에 앉았다.
      - 더는 아무런 말도 꺼낼 수 없을 만큼 무거운 정적이 흘렀다.
  - if: t >= 0 && (t = (t < era.get('love:64') * (era.get('flag:极端行为限制') || 1)))
    lines:
      - 말로써 %CHARA%와 화해하려 시도했으나, 돌아온 것은 입술을 강제로 막는 입맞춤이었다.
      - %YOU%의 숨이 턱 끝까지 차올랐을 때야 비로소 %CHARA%는 만족스러운 듯 입을 뗐다. 은밀한 타액이 길게 실을 그리며 이어졌다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「안 돼.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%는 그런 말 하면 안 되지.」
      - 무력해진 %YOU%은(는) 다시 한번 침대 위로 쓰러져 자신을 내려다보는 %CHARA%를 바라보았다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「난 %CALLNAME%가 그런 말 하는 거 정말 싫어하거든.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「자, 이제 전부 %CALLNAME% 잘못이야.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「나랑 같이, 영원히 여기 있자.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
  - if: '!t'
    lines:
      - 빛 한 점 들지 않는 방 안에서 %YOU%은(는) 여전히 대화로 상황을 타개해보려 애썼다.
      - 하지만 이번에 %CHARA%는 그저 %YOU%의 곁에 앉아 묵묵히 그 말을 듣고만 있었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%가 말 안 해도 나 다 알고 있어.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「난 그냥 겁쟁이일 뿐이야…… 미안해.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%, 넌 사실 아무 잘못도 없는데.」
      - 그녀는 고개를 떨구고 천천히 %YOU%의 쪽으로 몸을 붙여 어깨에 머리를 기댔다.
      - 불안한 듯 뻗어온 두 손이 %YOU%의 늘어진 손바닥을 조심스레 감싸 쥐었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「적어도…… 조금만 더 내 고집을 부리게 해줘.」
      - 손가락이 손바닥 사이를 파고들어 깍지를 끼었다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「아주 조금만 더…… 이대로 있게 해줘.」


# [번역 완료] start_fixing
start_fixing:
  - 휴식을 취하던 %YOU%의 귀에 문쪽에서 금속 조각이 바닥에 떨어지는 소리가 들려왔다.
  - 무언가 직감한 %YOU%이(가) 확인하러 나가려던 순간, 문을 열고 들어오던 %CHARA%와 정면으로 마주쳤다.
  - 대문은 여전히 견고했고, 오히려 함정과 잠금장치는 더욱 완벽하게 보강되어 있었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%? 여긴 웬일이야?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아, 나 찾으러 온 거지? 맞지?」
  - 뻔한 사실을 짐짓 모르는 척하며 %CHARA%는 반강제로 %YOU%을(를) 다시 방 안으로 밀어 넣었다.
  - %YOU%을(를) 향해 검지 손가락을 입술에 대며 조용히 하라는 제스처를 취하고는 싱긋 웃었다.
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「미안해, 시끄럽게 해서 깼어?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「조금 이따가 갈게, 기다리고 있어, %CALLNAME%.」


# [번역 완료] welcome
welcome:
  sync: true
  lines:
    - random: true
      lines:
        - %YOU%이(가) 잠에서 깨어났을 때, 그는 차갑게 폐쇄된 공간에 갇혀 있음을 깨달았다.
        - 주변을 둘러보자, 어둠 속에서 익숙한 미소가 나타났다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%~ 기분은 좀 어때?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「이거 오직 너만을 위해 특별히 준비한 거야. 놀랐지?」
    - random: true
      lines:
        - 음침하고 작은 방 안에서, 깊게 잠들지 못한 %YOU%은(는) 머리를 짚으며 몸을 일으켰다.
        - 텅 빈 공간에는 오직 %YOU% 자신뿐인 것처럼 보였다.
        - 침대에서 내려와 걸음을 떼려던 찰나, 익숙한 목소리가 들려왔다.
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%~ 나 왔어!」
        - 코너 너머로 얼굴을 내민 %CHARA%가 %YOU%을(를) 보며 화사하게 미소 지었다.

