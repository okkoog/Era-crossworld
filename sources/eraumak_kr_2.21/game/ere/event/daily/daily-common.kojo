回合开始:
  sync: true
  lines:
    # @author 雞雞
    - random: true
      lines:
        - %CHARA%은(는) 엄지손가락을 치켜세웠다.
    - random: true
      lines:
        - %CHARA%은(는) 잔뜩 먹은 듯 배가 빵빵해졌다.
    - random: true
      lines:
        - %CHARA%은(는) 무언가를 집중해서 읽고 있다.
    - if: era.get(`cflag:${d.id}:성장단계`) < 5
      random: true
      lines:
        - %CHARA%은(는) 친구들과 즐겁게 수다를 떨고 있다.
    - if: "!(era.get('cflag:301:육성턴수합산') < 3 * 48)"
      random: true
      lines:
        - %CHARA%은(는) 접수처에서 %하야카와%에게 무언가를 문의하고 있다.
    # @author 幽白書
    - if: era.get(`talent:${d.id}:감정활동`) === 1
      random: true
      lines:
        - %CHARA%은(는) 주말에 TV에서 본 농담을 %YOU%에게 신나게 이야기하다가, 중간에 참지 못하고 먼저 웃음을 터뜨렸다.
    - if: era.get(`talent:${d.id}:감정활동`) === 1
      random: true
      lines:
        - %CHARA%은(는) 주말에 본 드라마 줄거리를 말하다가, 결국 참지 못하고 또 울음을 터뜨렸다.
    - if: era.get(`talent:${d.id}:감정활동`) === 1
      random: true
      lines:
        - %YOU%은(는) %CHARA%이(가) 몇 명의 %UMA%와 모여 무서운 이야기를 하는 것을 보았다. 얼마 지나지 않아 %CHARA%은(는) 겁에 질려 얼굴이 새하얗게 변했다.
    - if: era.get(`talent:${d.id}:감정활동`) === -1
      random: true
      lines:
        - %YOU%은(는) %CHARA%의 머리카락에 작은 나뭇가지가 꽂혀 있는 것을 보았다. %YOU%이(가) 떼어줄 때까지 %CHARA%은(는) 머리에 이물질이 있다는 사실조차 눈치채지 못했다.
    - if: era.get(`talent:${d.id}:감정활동`) === -1
      random: true
      lines:
        - %YOU%은(는) %CHARA%이(가) 트레이닝 룸에서 곧바로 옷을 갈아입는 행동을 꾸짖었지만, 어째서 그러면 안 되는지 이해하지 못하겠다는 표정만 돌아왔다.
    - if: era.get(`talent:${d.id}:감정활동`) === -1
      random: true
      lines:
        - %CHARA%은(는) 다른 %UMA%들과 연애 이야기를 하고 있는 듯하다. %YOU%은(는) %CHARA%이(가) 연애 중인 %UMA%에게 끊임없이 질문을 퍼부어, 결국 상대가 얼굴을 붉히며 도망칠 때까지 멈추지 않는 것을 보았다.
    - if: era.get(`talent:${d.id}:자신감`) === 1
      random: true
      lines:
        - 트레이닝실에 들어섰을 때, %YOU%은(는) %CHARA%이(가) 평소처럼 자신을 비하하는 말을 하는 것을 들었다.
    - if: era.get(`talent:${d.id}:자신감`) === 1
      random: true
      lines:
        - %YOU%이(가) %CHARA%에게 인사를 건네자, 왠지 모르게 %CHARA%에게 위로를 받았다.
    - if: era.get(`talent:${d.id}:자신감`) === 1
      random: true
      lines:
        - %YOU%이(가) %CHARA%의 머리를 쓰다듬으려고 하자 어째서인지 %CHARA%은(는) %YOU%이(가) 자신을 벌주려는 것으로 오해하고 벌벌 떨며 눈을 감았다.
    - if: era.get(`talent:${d.id}:자신감`) === -1
      random: true
      lines:
        - %CHARA%은(는) 훈련장 한가운데 서서 마치 자신이 세상의 왕이라도 된 듯 거만한 태도를 보이고 있다.
    - if: era.get(`talent:${d.id}:자신감`) === -1
      random: true
      lines:
        - %CHARA%은(는) 관중석에 서서, 훈련장의 다른 %UMA%들의 주법에 대해 손가락질하며 개인적인 주관이 담긴 평가를 내리고 있다.
    - if: era.get(`cflag:${d.id}:종족`) > 0 && era.get(`talent:${d.id}:자신감`) === -1
      random: true
      lines:
        - %CHARA%은(는) 학원에 자신과 실력을 겨룰 만한 상대가 없다며 한숨을 내쉬었다.
    - if: era.get(`talent:${d.id}:고통감수`) === 1
      random: true
      lines:
        - %CHARA%이(가) 넘어졌고, %YOU%은(는) %SEX%가 고개를 들 때 눈가에 눈물이 맺힌 것을 보았다.
    - if: era.get(`talent:${d.id}:고통감수`) === 1
      random: true
      lines:
        - %CHARA%이(가) 친구들과 놀면서 벌칙으로 딱밤 맞기를 하고 있다. %YOU%은(는) 게임에서 진 %CHARA%이(가) 겁먹은 표정을 짓는 것을 보았다.
    - if: era.get(`talent:${d.id}:고통감수`) === 1
      random: true
      lines:
        - %CHARA%이(가) 친구들과 영화 이야기를 하던 중, 영화 속 잔인한 줄거리를 듣고 %CHARA%의 두 귀가 절로 덮였다.
    - if: era.get(`talent:${d.id}:고통감수`) === -1
      random: true
      lines:
        - %CHARA%이(가) 크게 넘어졌다. %YOU%이(가) %CHARA%을(를) 걱정하려던 찰나, %CHARA%은(는) 아무 일도 없었다는 듯 몸을 툭툭 털고 일어났다.
    - if: era.get(`talent:${d.id}:고통감수`) === -1
      random: true
      lines:
        - %CHARA%이(가) 넘어졌다. %YOU%이(가) %CHARA%의 상처를 치료해주고 고개를 들어보니, %CHARA%은(는) 어느새 잠들어 있었다.
    - if: era.get(`talent:${d.id}:고통감수`) === -1
      random: true
      lines:
        - %CHARA%이(가) 고통을 참는 요령을 공유하고 있다…… 의미를 알 수 없는 주제임에도 불구하고, 꽤 많은 사람들이 진지하게 경청하며 메모를 하고 있는 것 같다.
    - if: era.get(`talent:${d.id}:공포감수`) === 1
      random: true
      lines:
        - %CHARA%은(는) 훈련장 구석에 숨어있다. 주위의 지나치게 밝은 사람들과 마주치고 싶지 않은 듯하다.
    - if: era.get(`talent:${d.id}:공포감수`) === 1
      random: true
      lines:
        - %CHARA%은(는) 훈련장 그늘에 홀로 웅크려 앉아, 나뭇가지로 바닥에 반복적인 나선형 무늬를 그리고 있다.
    - if: era.get(`talent:${d.id}:공포감수`) === 1
      random: true
      lines:
        - %YOU%은(는) %CHARA%이(가) 자판기의 반사 유리를 보며 낮은 목소리로 혼잣말을 하는 것을 발견했다.
    - if: era.get(`talent:${d.id}:공포감수`) === -1
      random: true
      lines:
        - %YOU%은(는) %CHARA%이(가) 몰래 민들레 씨앗을 하늘로 불어 날리고는, 고개를 돌려 장난에 성공한 듯한 해맑은 미소를 짓는 것을 발견했다.
    - if: era.get(`talent:${d.id}:공포감수`) === -1
      random: true
      lines:
        - %CHARA%은(는) 트레이닝용 타이어를 커다란 원형으로 굴리며, 음정이 엇나간 라이브 곡을 흥얼거린 채 잔디밭 위에서 타이어를 밀며 달리고 있다.
    - if: era.get(`talent:${d.id}:공포감수`) === -1
      random: true
      lines:
        - %CHARA%은(는) 스포츠 드링크를 품에 안고 통통 튀며 걷고, 머리카락은 바람에 흩날리고 있다.
    - if: era.get(`talent:${d.id}:수치내성`) === 1
      random: true
      lines:
        - %CHARA%은(는) 트레이닝실 커튼 뒤에 숨어 책을 뒤적이다가, 발소리를 듣고 즉시 책을 덮어 가슴에 품었다.
    - if: era.get(`talent:${d.id}:수치내성`) === 1
      random: true
      lines:
        - %CHARA%은(는) 자판기 동전 투입구의 각도를 반복해서 조절하여, 동전이 수직으로 떨어질 때 소리가 나지 않도록 확인하고 있다.
    - if: era.get(`talent:${d.id}:수치내성`) === 1
      random: true
      lines:
        - 트레이닝실의 수납장 뒤가 살짝 흔들렸고, 그 뒤에 숨어서 옷을 갈아입던 %CHARA%은(는) %YOU%에게 들키자 얼굴이 새빨개졌다.
    - if: era.get(`talent:${d.id}:수치내성`) === -1
      random: true
      lines:
        - %YOU%은(는) %CHARA%에게 갑자기 업혀 훈련장을 향해 달려갔고, %YOU%에게 풍속의 쾌감을 느끼게 해주겠다는 말을 들었다.
    - if: era.get(`talent:${d.id}:수치내성`) === -1
      random: true
      lines:
        - %CHARA%은(는) 뜀틀을 한데 모아놓고, 훈련장에 있는 %UMA%들을 불러 모아 누가 한 번에 가장 많은 뜀틀을 넘을 수 있는지 시합을 열었다.
    - if: era.get(`talent:${d.id}:수치내성`) === -1
      random: true
      lines:
        - %CHARA%은(는) 훈련장 입구에 앉아, 지나가는 모든 %UMA%에게 썰렁한 농담을 하나씩 해야만 통과할 수 있게 했다.
    - if: era.get(`talent:${d.id}:반감획득`) === 1
      random: true
      lines:
        - %CHARA%이(가) 지나가는 %UMA%를 쏘아보았고, %SEX%에게 노려봐진 아이들은 모두 겁에 질린 비명을 질렀다.
    - if: era.get(`talent:${d.id}:반감획득`) === 1
      random: true
      lines:
        - %CHARA%이(가) 스프레이로 허들에 낙서를 하다가, %YOU%을(를) 발견하고는 도발하듯 손끝에 묻은 페인트를 벽에 칠했다.
    - if: era.get(`talent:${d.id}:반감획득`) === 1
      random: true
      lines:
        - 탈의실에서 천 찢어지는 소리가 났다. 보니까 %CHARA%이(가) 제복 소매를 구멍투성이로 자르고 있으며 바닥에는 실밥이 널려 있다.
    - if: era.get(`talent:${d.id}:반감획득`) === -1
      random: true
      lines:
        - 기재실에서 따스한 노란 불빛이 새어 나왔고, %CHARA%은(는) 낡은 바벨 원판에 붕대로 충격 방지용 완충띠를 감고 있다.
    - if: era.get(`talent:${d.id}:반감획득`) === -1
      random: true
      lines:
        - %CHARA%은(는) 여러 병의 스포츠 드링크를 들고 훈련장 곁에 서서, 땀투성이가 된 %UMA%를 볼 때마다 다가가 건네주고 있다.
    - if: era.get(`talent:${d.id}:반감획득`) === -1
      random: true
      lines:
        - %CHARA%은(는) 누군가 넘어졌을 때 날카로운 돌에 2차 부상을 입지 않도록 훈련장의 잔돌들을 치우고 있다.
    - if: era.get(`talent:${d.id}:반항의사`) === 1
      random: true
      lines:
        - %YOU%의 일정표가 %CHARA%의 마커펜으로 그어져 지워졌고, %CHARA%이(가) 마음대로 정한 일정으로 바뀌어 있다.
    - if: era.get(`talent:${d.id}:반항의사`) === 1
      random: true
      lines:
        - %YOU%의 트레이닝실은 %CHARA%이(가) 다짜고짜 방에 쑤셔 넣은 온갖 물건들로 가득 찼다.
    - if: era.get(`talent:${d.id}:반항의사`) === 1
      random: true
      lines:
        - 사전에 이야기된 것도 없건만, %CHARA%은(는) 너무나도 당연하다는 듯이 오늘 방과 후에 %YOU%에게 %CHARA%의 쇼핑을 따라오라고 했다.
    - if: era.get(`talent:${d.id}:반항의사`) === -1
      random: true
      lines:
        - %YOU%은(는) %CHARA%이(가) 트레이닝실 문 앞에 서서 손을 올리기를 반복하면서도 끝내 문을 두드리지 못하는 것을 발견했다.
    - if: era.get(`talent:${d.id}:반항의사`) === -1
      random: true
      lines:
        - %CHARA%은(는) 갑자기 작동한 스프링클러에 놀라 바닥에 주저앉았고, 얼굴에는 당혹감이 가득하다.
    - if: era.get(`talent:${d.id}:반항의사`) === -1
      random: true
      lines:
        - 트레이닝실의 라커가 살짝 흔들렸고, %CHARA%은(는) 갑작스러운 병주 요청을 피하기 위해 그 안에 웅크리고 있다.

생일:
  # @author 阿格尼斯数码公司
  - %CHARA%을(를) 위해 성대한 생일 파티를 준비했다!
  - random: true
    lines:
      - %CHARA%은(는) 생일의 주인공으로서 매우 기뻐하는 모습이다.
  - random: true
    lines:
      - %CHARA%은(는) 흔들리는 촛불 앞에서 눈을 감고 올해의 생일 소원을 빌었다
  - random: true
    lines:
      - %CHARA%은(는) 크게 기뻐하며 미소지었다.
  - if: era.get(`talent:${d.id}:사교태도`) === -1 && era.get(`exp:${d.id}:생일횟수`) === 0
    random: true
    lines:
      - 다양한 모임에 자주 참석하는 %CHARA%은(는) %YOU%이(가) %SEX%를 위해 생일 파티를 준비할 줄은 예상하지 못했고, 깜짝 놀란 채로 즐거운 하루를 보냈다
  - if: era.get(`talent:${d.id}:사교태도`) === -1 && era.get(`exp:${d.id}:생일횟수`) > 0
    random: true
    lines:
      - 그렇긴 한데, %CHARA%은(는) 당신의 열정을 알게 된 후, %YOU%이(가) %SEX%를 위해 기획한 생일 파티를 전혀 예상치 못한 전교생 규모의 생일 축제로 만들어 버렸다……!
  - if: era.get(`talent:${d.id}:사교태도`) === -1 && era.get(`exp:${d.id}:생일횟수`) > 0
    random: true
    lines:
      - 그렇긴 한데, %CHARA%은(는) 스스로를 위해 또 다른 생일 파티를 준비한 듯 해서, 두 생일 파티가 합쳐지면서 규모가 엄청나게 커져버렸다……!
  - if: era.get(`talent:${d.id}:사교태도`) === 1 && era.get(`exp:${d.id}:생일횟수`) === 0
    random: true
    lines:
      - %CHARA%은(는) 이런 파티가 있을 줄은 예상하지 못했던 듯, 파티장에 나타난 사람들을 보고는 다소 긴장한 기색을 보인다.
      - if: era.get(`cflag:${d.id}:종족`) > 0
        content: 하지만 꼬리가 아주 빠르게 흔들리고 있다
      - if: era.get(`cflag:${d.id}:종족`) === 0
        content: 하지만 기뻐하는 것 같다
  - if: era.get(`talent:${d.id}:사교태도`) === 1 && era.get(`exp:${d.id}:생일횟수`) > 0
    random: true
    lines:
      - 이번에는 %CHARA%이(가) 의외로 주눅 들지 않고 모두와 함께 생일 축하 노래를 불렀다
  - if: era.get(`talent:${d.id}:사교태도`) === 1 && era.get(`exp:${d.id}:생일횟수`) > 0
    random: true
    lines:
      - %CHARA%은(는) 여전히 조금 수줍어 보이지만, 선물을 받을 때는 매우 기뻐하는 모습이다
  - if: era.get(`talent:${d.id}:사교태도`) === 1 && era.get(`exp:${d.id}:생일횟수`) > 0
    random: true
    lines:
      - if: era.get(`cflag:${d.id}:종족`) > 0
        content:  %CHARA%은(는) 조용히 생일 케이크를 먹으며, 귀를 쫑긋 세우고 주변 사람들이 %SEX%에 관한 여러 옛 이야기를 나누는 것을 듣고 있다
      - if: era.get(`cflag:${d.id}:종족`) === 0
        content: %CHARA%는 조용히 미소지으며 생일 케이크를 먹으면서 주변 사람들이 %SEX%에 관한 온갖 옛 이야기를 나누는 것을 듣고 있다
  - if: era.get(`talent:${d.id}:솔직함정도`) === 1 && era.get(`exp:${d.id}:생일횟수`) === 0
    random: true
    lines:
      - %CHARA%은(는) 분명 이런 행사가 있을 줄은 예상하지 못했지만, 그래도 「이미 눈치챘다」는 식의 말로 깜짝 파티인지 묻는 질문을 얼버무렸다
  - if: era.get(`talent:${d.id}:솔직함정도`) === 1 && era.get(`exp:${d.id}:생일횟수`) > 0
    random: true
    lines:
      - if: era.get(`cflag:${d.id}:종족`) > 0
        content: %CHARA%은(는) 생일 파티가 %SEX%를 만족시키지 못한 점에 대해 불평하면서 꼬리를 흔들며 생일 케이크를 먹는다
      - if: era.get(`cflag:${d.id}:종족`) === 0
        content: %CHARA%은(는) 생일 파티가 %SEX%를 만족시키지 못한 점에 대해 불평하면서, 생일 케이크를 한입 가득 먹는다
  - if: era.get(`talent:${d.id}:솔직함정도`) === 1 && era.get(`exp:${d.id}:생일횟수`) > 0
    random: true
    lines:
      - %CHARA%이(가) 이전에 정리해 둔 %YOU%의 무능함을 지적하는 100가지 말들이 드디어 빛을 보게 되었다
      - 하지만 의외로 이번 생일 파티가 잘 준비되었다고 칭찬했다

로드대화:
  - if: era.get(`cflag:${d.id}:임신단계`) > 2 && !era.get(`cflag:${d.id}:확장변수`)?.report
    content: %CHARA%은(는) 배를 어루만지며, 절망적인 표정으로 멀어져가는 %YOU%을(를) 바라보았다.
  - if: era.get(`cflag:${d.id}:임신단계`) <= 2 && era.get(`exp:${d.id}:출산횟수`) > 0
    content: %CHARA%은(는) 젖병을 든 채, 절망적인 표정으로 멀어져가는 %YOU%을(를) 바라보았다.

학습지도:
  # @author 雞雞
  - random: true
    lines:
      - %YOU%은(는) 트레이닝실에서 %CHARA%의 공부를 지도했고, %SEX%가 모르는 문제를 풀 수 있도록 성공적으로 지도했다.
  # @author 幽白書
  - if: era.get('flag:징벌강도') >= 2
    random: true
    lines:
      - %CHARA%의 학업을 지도한 후, %CHARA%은(는) 얼굴을 붉힌 채 %YOU%을(를) 바라보았다. 다음은 성교육을 할 시간이다.
      - 분명 %YOU%이(가) 지도자임에도 불구하고, %CHARA%은(는) %YOU% 자신보다도 %YOU%의 몸을 더 잘 알고 있었다. %CHARA%의 손길 아래서, %YOU%은(는) 자신의 몸에 있는 모든 민감한 부분과 그것들이 만져졌을 때 자신이 어떤 부끄러운 반응을 보이는지 강제로 깨닫게 되었다.

中庭枯树洞:
  # @author 雞雞
  - random: true
    lines:
      - %YOU%은(는) %CHARA%과(와) 함께 안뜰의 고목나무 구멍으로 갔다.
      - %SEX%가 고목나무 구멍을 향해 포효하는 모습을 보며, %YOU% 역시 %CHARA%을(를) 최강으로 만들겠다는 결심을 굳혔다.
  # @author 幽白書
  - if: era.get('flag:징벌강도') >= 2
    random: true
    lines:
      - %CHARA%은(는) %YOU%을(를) 고목나무 구멍 곁으로 데려갔고,
      - %YOU%이(가) %SEX%가 최근 스트레스가 쌓여 풀고 싶어 한다고 생각하던 찰나, 무방비하게 그루터기에 밀쳐져 눕혀졌다.
      - 이어서 %YOU%의 하반신 옷이 천천히 벗겨지고, 따뜻한 육봉이 구멍 입구에 닿았다.
      - 만약 소리를 낸다면, 나무 구멍의 울림 때문에 %YOU%의 목소리가 틀림없이 학원 전체에 울려 퍼질 것이다.
      - 자신이 담당하는 %UMA%에게 고목나무 구멍에 눌린 채 박혔다는 사실이 소문난다면, %YOU%의 트레이너로서의 명성도 끝장나겠지……
      - 하지만, 애초에 그런 건 진작에 사라진 지 오래다.
      - if: era.get('flag:징벌강도') === 2
        content: %YOU%은(는) 고목나무 구멍 곁에서 음란한 교성을 질렀지만, 성노예인 %YOU%에게는 이 또한 그저 평범한 하루일 뿐이었다.
      - if: era.get('flag:징벌강도') === 3
        content: %YOU%은(는) 고목나무 구멍 곁에서 음란한 교성을 질렀지만, 임신 주머니인 %YOU%에게는 이 또한 그저 평범한 하루일 뿐이었다.

안뜰데이트:
  # @author 雞雞
  - random: true
    lines:
      - %YOU%은(는) %CHARA%과(와) 함께 안뜰로 데이트를 나왔고, 두 사람의 조합에 주변 학생들은 수군거리기를 참지 못했다.
  # @author 幽白書
  - if: era.get('flag:징벌강도') >= 2
    random: true
    lines:
      - %CHARA%은(는) %YOU%의 손을 잡고 함께 안뜰로 데이트를 나왔다.
      - %YOU%은(는) 양다리를 오므렸지만, 허벅지 양쪽으로 하얀 액체가 천천히 흘러내렸고, 얼굴의 마스크는 마치 어떤 액체에 젖은 것처럼 %YOU%의 입과 코에 축축하게 달라붙어 있었다. 몸에서 나는 발정기 냄새에 길을 지나던 %UMA%마저 얼굴을 붉히며 코를 쥐어막을 정도였다.

옥상:
  # @author 雞雞
  - if: "!d.sex"
    content:
      - %YOU%은(는) %CHARA%과(와) 함께 옥상에 올라가 도시락을 먹으며, 서로의 도시락 통에 있는 맛있는 반찬을 교환했다.
  # @author 幽白書
  - if: "d.sex === true"
    lines:
      - 옥상에서의 공개 노출…… 만약 누군가 이때 고개를 든다면, %YOU%은(는) 절대로 참지 못할 것이다.
      - 옥상 아래, 훈련장을 달리고 있는 %UMA%들.
      - 만약 들킨다면 틀림없이 참지 못하고 절정에 달해버릴 테고, 뿜어낸 애액이 빗물처럼 아래 사람들의 몸 위로 떨어지겠지……
      - 그러나 %CHARA%에게 한쪽 다리가 들어올려져 힘을 줄 수 없는 자세가 된 %YOU%은(는) 옥상의 보호용 철조망에 기댄 채, 유방에 철조망의 붉은 자국이 눌려 새겨지도록 내버려둘 수밖에 없었다.
      - if: era.get('talent:0:모유분비') > 0
        lines:
          - 아아, 짜내어져 버렸어……
          - 은밀한 곳에서 애액이 솟구치기 전에, 아래에 있는 %UMA%의 머리 위로 먼저 떨어진 것은 %YOU%의 유두에서 가늘게 뿜어져 나온 모유였다.