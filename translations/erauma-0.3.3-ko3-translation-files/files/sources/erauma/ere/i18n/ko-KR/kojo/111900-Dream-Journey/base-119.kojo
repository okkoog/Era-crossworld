# 최종 ko-KR 작업 파일: 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

# [번역 대상] ask_release_agree
ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「제가 어찌 당신이 떠나는 걸 막겠어요?」
  -
  - 다행이다, %SEX%가 동의했다.
  - 기쁨에 겨운 %YOU%은(는) %SEX%가 마음을 바꿀까 두려워 서둘러 출구로 향했다.
  - 그러나……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「아, %CALLNAME%, 잠시만요.」
  -
  - 떠나고 싶다.
  - 빨리 바깥의 햇살을 보고 싶다.
  - 그 모든 바람은……… 갑자기 굳어버린 두 다리 탓에 허상으로 흩어졌다.
  -
  - %CHARA% はそばへ来て、%YOU% の襟を整え、自分で皺になった衣の端をひとつずつ直し、この数日室内に閉じ込められて付いた埃を払う。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「外は虫が多いです。%CALLNAME% は出てから、どうか気をつけて……二度と、虫たちに纏わりつかれないように。」
  -
  - 「다시」 얽히게 된다면 무엇이 기다리고 있을까?
  - 薄い笑みの口角と、笑っていない瞳を見れば、答えは明白だ。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「다 정리됐어요, %CALLNAME%…… 계속 가시죠.」
  -
  - 허락의 말이 떨어지자마자, 몸이 다시 움직이기 시작했다.
  - %YOU%은(는) 다시 출구를 향해 발걸음을 옮겼다…… 하지만 이번에는 전혀 서두르지 않았다.
  - 비록 지하실을 벗어난다 해도, %YOU%의 마음은 결코 %CHARA%의 손아귀에서 벗어날 수 없을 것이다.
  - 마치 그러한 각인이, %YOU%의 마음에 깊이 새겨진 듯했다.


# [번역 완료] ask_release_reject
ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「제가 어찌 당신이 떠나는 걸 막겠어요?」
  -
  - 다행이다, %SEX%가 동의했다.
  - 그러나, 문에 가까워질수록 평소 자신의 곁을 맴돌던 향기가 옅어지고, 몸은 더욱 괴로워졌다.
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「어머, 어떻게 돌아오셨나요? 보아하니…… 역시 제 곁이 더 편안하신 모양이네요?」
  -
  - %YOU%은(는) 이미 %CHARA%에게서 벗어날 수 없었다——— 마치 그 사실을 증명하기 위해 %YOU%을(를) 놓아주기라도 한 것처럼.
  - 지하실의 지배자는 여유로운 미소를 지었다.


# [번역 완료] ask_time
ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「지금의 %CALLNAME%, 몸에서 나는 냄새가 아주 마음에 들어요.」
  - 동문서답을 한 %CHARA%은(는) %YOU%의 손목 냄새를 맡았다. 그곳에선 가장 짙은 향기가 피어오르고 있었다.
  - ——오직 %CHARA%만의 향기가.

# [번역 완료] back_basement
back_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%, 저 왔어요.」
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……아, %CALLNAME% 일어났나요?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「아무튼, 다녀왔어요. 응…… 츄읍…… 츕……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「뭘 하냐고요? 그저 귀가할 때의 의식일 뿐인걸요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「지하실로 귀가요? 아니요, 귀가하는 집은 당연히 당신을 뜻한답니다…… 제가 가장 사랑하는, 육체와 영혼의 귀속처❤️」


# [번역 완료] battle_escape
battle_escape:
  - 풀렸다.
  - 마지막 자물쇠…… 낯익은 열쇠 구멍 모양을 보며, %YOU%은(는) 기절해 쓰러진 %CHARA%의 곁으로 돌아왔다.
  - 그 낯익은 모양은, 바로 %CHARA%의 귀 장식인 것 같다.
  -
  - %YOU%은(는) %CHARA%가 깨지 않도록 부드럽게 장식을 빼내어, 마지막 장치를 열었다.
  -
  - 장치가 열림과 동시에, 돌돌 말린 편지지가 %YOU%의 손에 떨어졌다.
  - 편지지에는 %YOU%에 대한 사랑과 사과의 마음이 적혀 있었다.
  -
  - ……이것은 진심에서 우러나온 고백일까?
  - 아니면, 또 다른 계산인 걸까?
  - 여전히 바닥에 쓰러져 있는 %CHARA%를 보며, %YOU%은(는) 잠시 망설였다.
  - %YOU%은(는) 다시 %CHARA%의 곁으로 돌아가, 축 늘어진 몸을 업었다.
  - 적어도, 이 지하실은 결코 %SEX%가 머물 만한 곳이 아니니까……


# [번역 완료] battle_prison
battle_prison:
  - 앞의 장치들은 모두 풀었다.
  - 마지막 자물쇠…… 낯익은 열쇠 구멍 모양을 보며, %YOU%은(는) 어디서 이런 걸 봤는지 도무지 떠올릴 수 없었다.
  -
  - 시간은 천천히 흐르고, %YOU%은(는) 무력하게 자물쇠를 힘껏 당겨보았지만, 아무 소용이 없었다……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「열리지 않나요, %CALLNAME%?」
  -
  - 마침내, 등 뒤에서 목소리가 울려 퍼졌다.
  - 헛된 발버둥은 이미 끝났다.
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……역시, 아직 당신의 신뢰를 얻지 못한 거군요. 슬프네요……」
  -
  - 분명 슬프다고 말하고 있지만, 전혀 낙담한 기색은 보이지 않았다.
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하지만…… 제가 알기로 신뢰란 키워나갈 수 있는 법이니까요. 저는 믿어요. %CALLNAME%께서 저에 대해 더 많이 알아가실수록, 절 더욱 믿게 되실 거라고요?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그러니 부디, 제 몸을, 저의 모든 것을 더 깊이 알아가 주세요……」
  -
  - 저항할 틈조차 없이, %YOU%은(는) %CHARA%에게 짓눌려 바닥에 쓰러졌다……
  - 오직 %CHARA%의 귀 장식만이 지하실의 어스름한 불빛 아래서 은빛으로 반짝이고 있었다……


# [번역 완료] find_escape
find_escape:
  sync: true
  lines:
    - if: d.is_back
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「어머……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……이 자물쇠를 열려고 시도하셨나요?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「안 열리던가요? ……후후, 그거 참 반가운 소식이네요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「당신처럼 정직한 사람은 결코 열 수 없는 자물쇠랍니다…… 이건, 저처럼 마음이 뒤틀린 사람을 위해 준비된 자물쇠니까요……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「그러니 당신이 이 자물쇠를 열 수 없다는 사실에, 저는 진심으로 안도하고 기뻐하고 있답니다.」
    - if: "!d.is_back"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「풀 수 없나요?」
        -
        - %CHARA%의 목소리를 듣자, %YOU%은(는) 무의식중에 항복하듯 두 손을 들었다.
        - %CHARA%는 여유롭게 %YOU%의 곁으로 다가와, 철사 한 가닥만을 열쇠 구멍에 넣고 두어번 움직였다. %YOU%은(는) 도대체 무얼 했는지조차 제대로 보지 못했다.
        - %YOU%을(를) 꽤 오래 괴롭혔던 자물쇠가 눈앞에서 너무도 쉽게 풀려버렸다.
        - 그리고, 자물쇠는 다시 채워졌다.
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「후후…… 여흥 삼아 보여드린 쇼, 만족하시나요? %CALLNAME%?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「낙심할 필요는 없어요…… 적재적소라는 게 있으니까요. 아버지가 금세공장이셨던 터라 이런 장치에 제가 약간의 지식이 있을 뿐이랍니다.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%도 자신이 더 잘하는 일이 있지 않나요? 예를 들면…… 잠자리에서의 일이라든가❤️」
    -
    - %YOU%은(는) %CHARA%에게 이끌려 침대로 되돌아갔다……


# [번역 대상] flatter
flatter:
  - random: true
    lines:
      - 「ごめん、%Y_CALL_119%。きっと僕が、何かして%Y_CALL_119%を不機嫌にさせたんだ。直すから……」
      -
      - 어찌 됐든, 우선 사과부터 하자.
      - %CHARA%은(는) 그 말을 듣고 %YOU%에게 다가왔다.
      - 그러고는……… 손가락으로 %YOU%의 입을 막았다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「쉿……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「제가 가장 좋아하는 그 입술로, 그런 거짓말을 뱉지 말아 주세요……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「本当は、何も間違っていないと思っていらっしゃるのでしょう？」
      -
      - %YOU%은(는) 머뭇거리다가, 결국 고개를 끄덕였다.
      - %CHARA%는 꾸짖는 듯한 표정을 지으며 몸을 숙여 왔다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「당신의 입술과 혀는 거짓을 위해 존재하는 게 아니랍니다…… 그래도 괜찮아요, 그 존재의 의미가 무엇인지 제가 직접 가르쳐 드릴 테니까요…… 츄읍…… 응…… 츕……」
  - random: true
    lines:
      - 「미안해, %Y_CALL_119%. 가만히 생각해 봤는데, 역시 잘 모르겠어…… 내가 언제 실수로 네 기분을 상하게 한 건가? 그래서 날 여기에 가둔 거야……?」
      -
      - 다짜고짜 사과해서 %CHARA%의 용서를 구하는 편이 쉽긴 하겠지만……
      - 이렇게 %CHARA%를 속이는 건 역시 좋지 않겠지……
      - 적어도, 뭘 잘못했는지 안 뒤에 사과해야 한다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%…… 당신의 솔직함은, 여전히 저를 기쁘게 하네요……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「하지만…… 아니요, 당신은 아무것도 잘못하지 않았어요. 그저, 당신의 사랑을 독점할 수 없는 제 마음이 초조했을 뿐이랍니다……」
      -
      - 「하지만……」
      -
      - %YOU%이(가) 무언가 더 말하려 했으나, 입술이 막혀버렸다.
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……응, 생각을 바꿨어요…… %CALLNAME%, 당신이 확실히 잘못했네요…… 당신의 입술이 너무 시끄럽잖아요…… 부디 그 입술의 유일한 용도를 제대로 발휘해 주세요…… 저를 향한 사랑을 속삭이는 데 말이에요❤️」


# [번역 완료] get_up
get_up:
  sync: true
  lines:
    - %CHARA%(이)가 깨어났다……
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「응…… %CALLNAME%, 잘 잤나요?」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「왜 여기에 있냐고요…… 그것보다, 껴안았을 때의 감촉은 어땠나요? 누군가의 취향에 딱 맞는 가녀린 몸 말이에요.」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……기분 좋았……나요? 후후, 당신의 솔직함은 여전히 저를 기쁘게 하네요.」


# [번역 완료] out
out:
  sync: true
  lines:
    - %CHARA%는 다른 할 일이 있어, 떠나려고 한다……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「미안해요, %CALLNAME%…… 저 먼저 가봐야 할 것 같아요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「고민이 있다면 나누어 짊어지겠다고요……? 저는 당신을 이곳에 감금한 사람인데도, 여전히 제게 힘이 되어주고 싶으신 건가요?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「정말 구제 불능인 사람이네요…… 하지만 괜찮아요. 당신은 그저 이곳에 머물며 제 유일한 『귀속처』가 되어주는 것만으로도, 이미 제게 가장 큰 도움을 주고 있으니까요.」


# [번역 대상] start_fixing
start_fixing:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아, %CALLNAME%, 저 좀 도와주시겠어요?」
    # CFLAGNAME:6 = 身長
    - if: era.get('cflag:0:6') > era.get('cflag:119:6')
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「네, 저 좀 잡아주세요…… 이 사다리, 조금 흔들리네요…… 부끄럽게도 키가 모자라서, 당신에게 이런 꼴을 보이고 말았네요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「후우…… 다 됐어요, 고마워요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「뭘 하고 있었냐고요? 그저 문에 새로운 자물쇠를 달고 있었을 뿐이랍니다…… 도와주셔서 감사해요.」
    -
    - ……知らなければ、%SEX%を手伝わなかったのに……


# [번역 완료] strike_fail
strike_fail:
  - 실패했다……
  - %CHARA%가 고개를 돌렸다, 화가 났을까?
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%…… 아주 노력하셨네요……」
  -
  - %CHARA%가 가볍게 %YOU%를 껴안았다.
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「자신 없는 기술을 열심히 배우셨군요…… 정말이지, 조금만 더 힘을 줬다면 저를 잠시 기절시킬 수도 있었을 텐데……」
  - %CHARA%의 가녀린 몸이 품속으로 더욱 파고들었다.
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「하지만 그거 말고도, 인체에는 이용할 수 있는 다른 약점들이 있죠…… 예를 들면……」
  -
  - %CHARA%의 감싸 안은 손이 적당한 힘으로 허리의 어느 부분을 내리쳤다.
  - 순간, 몸이 움직이지 않게 되었다……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「그럼, 저와 돌아가서 꼼꼼히 배워보시죠…… 인체에 관한 지식을 말이에요❤️」
  -
  - %YOU%은(는) 어둠 속으로 빠져들었다……


# [번역 대상] strike_success
strike_success:
  # EXPNAME:25 - 26 = 性愛回数 - 睡眠姦回数
  - if: t = (era.get('exp:119:25') - era.get('exp:119:26')) >= 10
    lines:
      # @author 黑奴队长
      - %YOU% はドリームジャーニーの身体を、知りすぎている
      - 何度も、%SEX%の肌の一寸も、隅々まで探ってきたのだから
      - だから今のように、ある一点を軽く突くだけで、%SEX%が顔を紅潮させ、息を乱して崩れ落ちるのも、当然だろう
      - %YOU% は顔を上げる。隙間から自由という名の微光が漏れる鉄の扉。俯けば、眼前には %YOU% の功績、誇り、最愛、そして罪が横たわっている
      - %YOU% は絶頂の余韻で動けない小柄な身体を抱き、愛の巣であり牢でもある場所からゆっくり出ていく
      - 少なくとも、%SEX%をここに寝かせたままにはできない
  - if: t < 10
    lines:
      # @author 幽白書
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「결국 마지막까지…… 저는 당신의 신뢰를 얻지 못한 건가요?」
      # CFLAGNAME:1 = 種族
      - if: "!era.get('cflag:0:1')"
        content: 비록 인간의 힘이지만, %CHARA%처럼 가녀린 %UMA%에게는 그것으로도 충분했다.
      - %CHARA%는 슬픈 표정을 지으며 천천히 바닥에 쓰러졌다……
      - %YOU%은(는) 지하실에서 도망쳤다……


# [번역 완료] welcome
welcome:
  sync: true
  lines:
    - %YOU%은(는) 천천히 의식을 되찾았다……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「편히 주무셨나요, %CALLNAME%?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「편했다면 정말 다행이네요…… 신경이 둔한 거 아니냐고요? 아니, 그렇지 않아요.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그건 당신이 무의식중에라도 이곳을 안심할 수 있는 곳…… 『집』으로 여기게 되었다는 뜻이 아닐까요?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「아니라고요…… 하지만, 제게는 그렇답니다.」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「오직 당신이 있는 곳만이, 제 귀속처니까요.」

