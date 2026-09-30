const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const UraraEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-52');

module.exports = () => {
  const call_me = sys_get_callname(52, 0),
    urara = get_chara_talk(52),
    callname = urara.get_colored_name(),
    love = era.get('love:52'),
    me = get_chara_talk(0),
    self_call = sys_get_callname(52, 52),
    talk_arr = [];
  if (era.get('relation:52:0') > 150 && new UraraEduMarks().loop < 2) {
    talk_arr.push(
      [
        `${call_me}! 오늘은 뭐 하고 놀까?`,
        [
          callname,
          '는 활기찬 모습으로 ',
          me.get_colored_name(),
          '에게 오늘의 계획을 물어왔다.',
        ],
      ],
      [
        `농사짓는 할아버지가 또 무를 보내주셨어. 이따가 나랑 같이 다들 나눠주러 가자! 이건 ${call_me}의 몫이야!`,
        [
          '한가득 짐을 안은 ',
          callname,
          '는 즐거운 듯 당근이 든 종이봉투를 ',
          me.get_colored_name(),
          '의 품에 안겨주었다.',
        ],
      ],
      [
        `${call_me}와의 약속은 꼭 지킬게! 우리 같이 1등 엄청 많이 따내자!`,
        [
          '여느 때처럼 ',
          callname,
          '는 ',
          me.get_colored_name(),
          '에게 흥분 섞인 말투로 말했다.',
        ],
      ],
      [
        `${call_me}, ${call_me}! 잡지 봤어? 사람들이 나보고 『용기를 주는 ${urara.get_uma_sex_title()}』래! 에헤헤~`,
        [
          callname,
          '가 그 의미를 이해하고 있는지는 알 수 없었으나, ',
          urara.sex,
          '의 미소에는 수줍음이 서려 있는 듯했다.',
        ],
      ],
      [
        [
          '어제 나랑 ',
          sys_get_colored_callname(52, 1),
          '이랑 ',
          sys_get_colored_callname(52, 20),
          '이랑 같이 라면 먹으러 갔는데, 식사량 조절에 엄청 신경 썼다구? 조금 많이 먹어버렸지만!',
        ],
        [
          callname,
          '는 웃으며 ',
          me.get_colored_name(),
          '의 앞으로 다가왔다. 적어도 ',
          urara.get_colored_name(),
          '의 살짝 통통해진 배를 보니 ',
          urara.sex,
          '가 정말 즐거웠던 것은 확실해 보였다.',
        ],
      ],
      [
        [
          '아, ',
          sys_get_colored_callname(52, 14),
          '이 또 칼 든',
          sys_get_colored_callname(52, 11),
          '한테 쫓기고 있어! 다들 오늘도 기운이 넘치네!',
        ],
        [
          '듣기에는 꽤 위험해 보이는 상황이었으나, ',
          callname,
          '가 긴장하지 않은 것을 보니 별문제는 없는 듯했다.',
        ],
      ],
      [
        [
          '오늘도 ',
          sys_get_colored_callname(52, 15),
          '은 옥상에서 무언가 연습하고 있었어. 정말 재밌어 보이더라! 언제나 그런 모습인 것 같지만!',
        ],
        [
          callname,
          '는 그렇게 말하며 ',
          me.get_colored_name(),
          '에게 티엠 오페라 오의 흉내를 내보였다. 그리 닮지는 않았지만 의외로 귀여웠다.',
        ],
      ],
      [
        [
          '어제 ',
          sys_get_colored_callname(52, 58),
          '이 기숙사에 돌아갔더니 침대 위에 너구리 씨가 있었대! 너구리 씨는 정말 귀엽네!',
        ],
        [
          '너구리? 학생 기숙사에 너구리가? ',
          callname,
          '가 거짓말을 하지 않는다는 것을 알기에, ',
          me.get_colored_name(),
          '은(는) 더욱 의구심이 깊어졌다.',
        ],
      ],
      [
        [
          sys_get_colored_callname(52, 77),
          '이랑 ',
          sys_get_colored_callname(52, 33),
          '이 푹신푹신한 것에 대해 이야기하고 있었어! 근데 ',
          sys_get_colored_callname(52, 33),
          '이 도중에 또 이불 건조기를 팔려고 하더라고! 왜 그러는 걸까?',
        ],
        ['마지막에 가서는 ', callname, '조차 드물게 의아해했다. 그러게, 왜 그러는 걸까?'],
      ],
    );
    if (love > 0) {
      talk_arr.push(
        [
          `요즘 맛있는 게 생기면 가장 먼저 나누고 싶은 건 언제나 ${call_me}야! 응! 사이가 정말 좋으니까 그런 거겠지!`,
          [
            callname,
            '는 ',
            me.get_colored_name(),
            '과(와) 간식을 나눠 먹으며, 즐거운 듯 ',
            me.get_colored_name(),
            '에게 미소 지었다.',
          ],
        ],
        [
          `${call_me}만 있으면 더 빨리 달릴 수 있을 것 같아! 달리는 게 예전보다 더 즐거워졌어!`,
          [
            '어느샌가 폴짝폴짝 뛰던 ',
            callname,
            '와 ',
            me.get_colored_name(),
            '의 거리가 더욱 가까워졌다.',
          ],
        ],
        [
          [
            sys_get_colored_callname(52, 61),
            '이 오늘도 ',
            call_me,
            '의 말을 잘 들으라고 했어. 마치 엄마처럼! 하지만 ',
            self_call,
            '는 이제 어린애가 아니라고! 정작 ',
            sys_get_colored_callname(52, 61),
            '도 가끔 덤벙거리면서…… 아, ',
            sys_get_colored_callname(52, 61),
            '한테는 비밀이야, ',
            call_me,
            '!',
          ],
          [
            callname,
            '는 오늘도 ',
            urara.sex,
            '의 룸메이트와 사이가 좋아 보였으나, 반격하겠답시고 친구 험담을 해서는 안 될 일이었다.',
          ],
        ],
        [
          `다들 내 달리기가 희망을 준다고 하더라고! ${self_call}는 ${call_me}를 충분히 즐겁게 해주고 있는걸까?`,
          [
            '이전보다 조금 더 성숙해진 미소를 지어 보이며, ',
            callname,
            '는 착실하게 성장해가는 듯 보였다.',
          ],
        ],
      );
    }
    if (love >= 25) {
      talk_arr.push(
        [
          `우리 엄마가 그랬어, 서로 신뢰하는 사람만이 상대방의 매무새를 다듬어준다고! ${self_call}의 머리가 헝클어졌다구? 그럼 ${call_me}가 내 머리 빗겨줄래?`,
          [
            me.get_colored_name(),
            '이(가) 대답하기도 전에 ',
            callname,
            '는 웃으며 리본을 풀고 ',
            me.get_colored_name(),
            '의 앞에서 분홍색 포니테일을 풀어헤쳤다.',
          ],
        ],
        [
          [
            sys_get_colored_callname(52, 30),
            '이 빌려준 그림책에 써 있었어. 연애는 정말 멋진 거래, 과일처럼 새콤달콤하다나 봐! ',
            self_call,
            '도 생각이 엄청 많다구! 하지만…… 지금은 ',
            call_me,
            '에게 더 많이 알려줄 수 없어!',
          ],
          [
            '어느새 자라지 않을 것만 같던 작은 ',
            urara.get_uma_sex_title(),
            '에게서 사춘기 소녀에게서나 볼 법한 분위기가 풍겼다.',
          ],
        ],
        [
          `${call_me}, 조금 더 가까이 와도 괜찮아? 앗! 헤헤, 또 ${call_me}의 무릎 위에 앉아버렸네! ${call_me}의 몸, 여전히 따뜻하구나!`,
          [callname, '는 즐거운 듯 말하며, 찰나의 순간 촉촉한 눈빛을 보였다.'],
        ],
        [
          `다들 어른이 되어야 한다고 말하지만, ${self_call}도 그저 어린애로만 남고 싶지는 않아! 에? 어른이 되려는 이유…… 아, 저기 당근이다!`,
          [
            '무언가를 숨기려는 듯, ',
            me.get_colored_name(),
            '의 질문을 받은 ',
            callname,
            '는 갑자기 얼굴을 붉히며 허둥지둥 변명을 늘어놓고는 달려나갔다.',
          ],
        ],
      );
    }
    if (love >= 50) {
      talk_arr.push(
        [
          `${call_me}한테서 나는 냄새 정말 좋아! 하아…… 아! 미안해! ${call_me}를 곤란하게 만들면 안 되는데. 하지만, 음……`,
          [
            '떨어지려 하면서도 ',
            callname,
            '는 자신도 모르게 얼굴을 붉힌 채 ',
            me.get_colored_name(),
            '의 몸에서 나는 냄새를 맡았다.',
          ],
        ],
        [
          [
            `『허접~ 허접~』, 이건 `,
            sys_get_colored_callname(52, 19),
            `의 수첩에서 배운 건데, ${call_me}를 즐겁게 해줄 수 있대! 에? 하지 말라고? 그럼 ${self_call}는 안 할래! 하지만 ${call_me}…… 계속 ${self_call}만을 바라봐줄 거지?`,
          ],
          [
            me.get_colored_name(),
            '의 당혹감을 관찰하며, ',
            callname,
            '의 맑은 미소 속에는 어느샌가 짓궂은 즐거움이 섞여 있었다.',
          ],
        ],
        [
          [
            `어젯밤에 `,
            sys_get_colored_callname(52, 61),
            `이 침대에서 계속 이상한 소리를 냈어! 그런데 그 소리를 들으니까  온통 ${call_me} 생각이 나서…… 왜 그럴까? ${self_call}는 잘 모르겠지만, 그다음엔……? 그다음엔…… ${self_call}, 잠들어버렸어!`,
          ],
          ['최근의 경험을 끝까지 이야기하지 못한 채, ', callname, '는 얼굴을 붉히며 시선을 피했다.'],
        ],
        [
          `아하~ ${call_me}의 『가랑이 사이』는 ${self_call}의 『전용석』이라고 약속했었잖아? 오해 살 만한 말은 하지 말라고? 오해 같은 거 아니야! 아니면…… ${call_me}, 또 무슨 생각을 하는 거야?`,
          [
            '순수한 말투로 ',
            me.get_colored_name(),
            '에게 유혹적인 속삭임을 내뱉는 ',
            callname,
            '의 귀여운 얼굴이 어느덧 『요염함』을 띠는 듯했다.',
          ],
        ],
      );
    }
    if (love >= 75) {
      talk_arr.push(
        [
          `이 신메뉴 벌꿀 드링크 정말 맛있어! ${call_me}도 한번 마셔볼래? 간접 키스……? 하지만 ${self_call}는 괜찮다고 생각하는데? 설마…… ${call_me}, 부끄러워하는 거야?`,
          [
            '작은 ',
            urara.get_uma_sex_title(),
            '는 ',
            me.get_colored_name(),
            '을(를) 향해 미소 지으며 눈을 가늘게 떴다. 손에 든 달콤한 음료는 어느덧 그 이상의 의미를 품고 있는 듯했다.',
          ],
        ],
        [
          `요즘 또 요리를 배우고 있어! 나중에 ${call_me}의 몸을 가득 채워줄 수 있도록 ${self_call}는 계속 노력할 거야! 그런 말 하지 말라고? 그럼 ${call_me}도 ${self_call}의 몸을 가득 채우고 싶다는 뜻이야? 어른을 놀리지 말라고? 알았어……`,
          [
            me.get_colored_name(),
            '의 지적을 듣자, ',
            callname,
            '는 말을 다 마치기도 전에 이미 붉게 달아오른 얼굴을 돌렸다.',
          ],
        ],
        [
          `상점가 사람들이 나보고 또 예뻐졌대! 내가 더 빨리 달려서 그런 걸까? 응? 그것 때문만은 아니라고? 사실은 나도 알고 있어! ${call_me}가 내 몸을 볼 때 전보다 더 넋을 잃고 본다는 걸 말이야…… 농담이야!`,
          [
            '슬그머니 옷자락을 들어 올려 앳된 몸을 노출하는 ',
            callname,
            '의 순수한 미소에 ',
            me.get_colored_name(),
            '은(는) 초조함으로 머리가 어질어질했다.',
          ],
        ],
        [
          `요즘 ${self_call}는 생각이 참 많아! 응! ${self_call}는 앞으로도 이기는 모습을 더 많이 보여주고 싶어! 무리하지 말라고? 나도 알고 있어! 그러니까 어떤 『1등』은 ${call_me}에게만 보여줄 거야…… 헤헤~`,
          [
            callname,
            '의 미소는 여전히 천진난만해 보였으나, 오직 ',
            call_me,
            '에게만 보여주겠다는 그 1등의 의미는 대체……?',
          ],
        ],
      );
    }
    if (love >= 90) {
      talk_arr.push(
        [
          `오늘도 나를 잘 지켜봐 줘, 계속해서 ${call_me}에게 용기를 줄게! ……그리고 나중에 둘만 있을 때도, ${call_me}도 힘내야 해?`,
          [
            '발꿈치를 들고 ',
            callname,
            '는 다정하게 ',
            me.get_colored_name(),
            '의 뺨을 쓰다듬으며, ',
            me.get_colored_name(),
            '을(를) 불안하게 만드는 말을 남겼다.',
          ],
        ],
        [
          `나중에 ${call_me}는 아이를 몇 명이나 갖고 싶어? 비록 몇 명을 원하든 ${self_call}는 다 받아들일 수 있지만 말이야!`,
          [
            '앞뒤가 맞지 않는 소리를 해대며, ',
            callname,
            '의 뜨거운 시선이 ',
            me.get_colored_name(),
            '을(를) 불편하게 만들었다.',
          ],
        ],
        [
          `사람들은 독점이 사랑의 전부가 아니라고 말하면서도, 서로를 계속 주시하고 있는 거 같아…… ${call_me}는 어떻게 생각해? ${self_call}도 독점은 좋지 않다고 생각하지만, ${self_call}도 가끔 불안해지거든?`,
          [
            me.get_colored_name(),
            '의 소매를 꼭 붙잡은 채, 작은 ',
            urara.get_uma_sex_title(),
            '의 미소에는 외로움이 서려 있었다. ',
            me.get_colored_name(),
            '이(가) 조금 더 가까이 다가와 주길 바라는 듯했다.',
          ],
        ],
        [
          `저기 저기, ${call_me}! 기분 좋고 즐거운 일, 오늘도 같이 할까? 목소리가 너무 크다고? 하지만 나는 같이 훈련하자고 말한 건데? 설마 ${self_call}한테 뭘 하려고……?`,
          [
            me.get_colored_name(),
            '의 반응을 살피는 ',
            callname,
            '의 앳된 미소 띤 얼굴에는 수줍은 홍조가 더욱 짙게 깔렸다.',
          ],
        ],
      );
    }
    if (love === 100) {
      talk_arr.push(
        [
          `달리러 가고 싶기도 하고, 외출하고 싶기도 하지만, 역시 가장 하고 싶은 건 ${call_me}와 함께 있는 거야! 절대 마음대로 보내주지 않을 거야, 그 누구라도 안 돼! 누구라도 안 된다구……`,
          [
            '흥이 잔뜩 오른 ',
            callname,
            '는 평소와 다르게 적극적으로 ',
            me.get_colored_name(),
            '에게 응석을 부려왔지만, 어쩐지 분위기가 조금 위험해진 듯한 기분이었다……?',
          ],
        ],
        [
          `만약 ${call_me}와 헤어지더라도, 다시 만날 수만 있다면 앞이 지옥이라도 쫓아갈 거야…… 아하~ 이건 ${self_call}가 TV에서 배운 거야! ${self_call}의 연기 어땠어? 깜짝 놀랐어, ${call_me}?`,
          ['연기라고는 하지만, ', callname, '의 눈빛은 그 어느 때보다도 진지했다.'],
        ],
        [
          `${call_me}, 내 생각 했어? 낮에 더 많이 했어? 아니면 밤에 더 많이 했어? 훙훙~ ${call_me}가 화내도 멈추지 않을 거야, 지금의 나는 나쁜 ${self_call}니까!`,
          [
            me.get_colored_name(),
            '의 등 뒤에서 허리를 감싸 안으며, ',
            callname,
            '는 달콤한 목소리로 ',
            me.get_colored_name(),
            '의 신경을 자극했다……',
          ],
        ],
        [
          `${self_call}는 천사……? 아직 잘은 모르겠지만, 나도 계속 ${call_me}의 천사가 되고 싶어! 그러니까 ${call_me}가 또 힘들어지면 언제든 ${self_call}에게 기대도 좋아, 알았지?`,
          [
            me.get_colored_name(),
            '이(가) 무심결에 내뱉은 감탄을 들은 작은 담당은 마치 아내처럼, 혹은 어머니처럼 ',
            me.get_colored_name(),
            '의 손을 잡아주었다.',
          ],
        ],
      );
    }
  } else {
    talk_arr.push(
      [
        `……${call_me}! 오늘 훈련도…… 힘내서 하자!`,
        ['그저 평범한 인사를 나눌 뿐임에도, ', callname, '는 웃을 때마다 매번 용기를 쥐어짜 내는 듯 보였다.'],
      ],
      [
        `오늘도 괜찮아! ${self_call}는 ${call_me}와의 약속을 지키기 위해 노력할 거니까!`,
        [
          '기운을 내어 보이며, ',
          callname,
          '는 진지하게 고개를 들어 ',
          me.get_colored_name(),
          '의 눈을 똑바로 응시했다.',
        ],
      ],
      [
        `${call_me}, 저기, 당근! 이건 트레이너 몫이야!`,
        [
          '조금은 수줍어하면서도, ',
          callname,
          '는 웃으며 손에 든 당근을 ',
          me.get_colored_name(),
          '에게 건네주었다.',
        ],
      ],
      [
        `용기…… 그렇네! ${self_call}는 용기를 더 내야 해! 하지만 정말 어렵네……`,
        ['오늘의 잡지를 훑어보던 ', callname, '의 미소는 어째서인지 조금 쓸쓸해 보였다.'],
      ],
      [
        `최근에 다 같이 외출했다가 또 너무 많이 먹어버렸어…… 미안해, 다음번에 꼭 주의할게!`,
        [
          '억지로 미소를 지어 보이며, ',
          me.get_colored_name(),
          ' 앞의 ',
          callname,
          '는 다소 자신감이 부족해 보였다.',
        ],
      ],
      [
        `보충 수업 때 또 다들 도와줬어, 역시! ${self_call}도 다들 만큼 똑똑했다면 좋았을 텐데……`,
        [
          me.get_colored_name(),
          '의 곁에 서 있던 ',
          callname,
          '는 무언가 생각난 듯 기운이 조금 없어 보였다.',
        ],
      ],
    );
    if (love > 0) {
      talk_arr.push(
        [
          `${call_me}, 이거 정말 맛있어! 비록 마지막 한 입뿐이지만……`,
          [
            '남은 간식을 전부 ',
            me.get_colored_name(),
            '에게 나눠주며, ',
            callname,
            '는 트레이너를 깜빡 잊을 뻔했다는 사실에 조금 부끄러워했다.',
          ],
        ],
        [
          `${call_me}와 함께하니까 ${self_call}, 확실히 더 빨라졌어! 하지만 왜 그렇게 즐겁지는 않은 걸까……`,
          ['자신의 성장에 기뻐하면서도, ', callname, '의 미소는 어딘가 부자연스러웠다.'],
        ],
        [
          `${call_me}가 보지 않아도 ${self_call}는 혼자서 할 수 있어—— 그런 말은 안 할 거야! ${self_call}는 ${call_me}에게 용기를 주기로 약속했으니까, 대신 ${call_me}도 도망치면 안 돼, 알았지?`,
          [
            '벚꽃빛 눈동자로 어른의 눈을 똑바로 응시하며, ',
            callname,
            '는 ',
            me.get_colored_name(),
            '에게 거절할 수 없는 부탁을 건넸다.',
          ],
        ],
      );
    }
    if (love >= 25) {
      talk_arr.push(
        [
          `머리가 헝클어졌어? 큰일이다…… 에? 도와준다고? 그럼…… ${call_me}, 살살 해줘야 해?`,
          [
            me.get_colored_name(),
            '의 제안에 ',
            callname,
            '는 조심스레 리본과 머리끈을 풀었고, 긴장한 기색이 역력했으나 순순히 등을 돌려 앉았다.',
          ],
        ],
        [
          `${self_call}는 계속 어린애로만 남고 싶지는 않지만, 어른인 ${call_me}도 이런 모습인걸. 어른이 된다는 건 달리기나 레이스만큼이나 이해하기 어렵네……`,
          [
            callname,
            '가 무어라 나직이 중얼거리는 듯했으나, ',
            me.get_colored_name(),
            '이(가) ',
            urara.sex,
            '를 바라보자 다시 시선을 피했다.',
          ],
        ],
        [
          [
            sys_get_colored_callname(52, 47),
            `의 책에 써 있었어. 연애는 종종 고민을 동반하고, 사람을 늘 괴롭게 만든대…… 요즘 ${self_call}도 고민이 많아. 내 마음이 정말로 괜찮은 건지 잘 모르겠어……`,
          ],
          [
            '예전에는 영영 자라지 않을 것 같던 작은 ',
            callname,
            '가 지금은 마치 사랑 때문에 고민하는 소녀처럼 혼잣말을 중얼거리고 있었다.',
          ],
        ],
      );
    }
    if (love >= 50) {
      talk_arr.push(
        [
          `${call_me}의 오늘의 냄새는…… 응? 일부러 그런 거 아니야!`,
          [
            '건성으로 ',
            me.get_colored_name(),
            '의 옷을 매만지며, 작은 담당은 다소 성의 없이 ',
            me.get_colored_name(),
            '에게 사과했다.',
          ],
        ],
        [
          `요즘 ${call_me}의 몸을 보면 자꾸 뜨거워져. 밤에 ${call_me} 생각을 하면 아래가 자꾸…… 미안해, 더 말 안 할게. 하지만…… 역시 아무것도 아니겠지……?`,
          [
            '한참을 우물쭈물하던 ',
            callname,
            '는 얼굴이 새빨개진 채 결국 끝까지 말을 잇지 못했다.',
          ],
        ],
        [
          `『한심한 허접 어른, 학생을 꼬드기는 가짜 트레이너, 정말 싫어, 최악이야……』 더 말하지 말라고? 하지만 ${call_me}도 지금 흥분했잖아? 『나조차 속이지 못하는 변태 트레이너』……`,
          [
            me.get_colored_name(),
            '의 귓가에 달라붙어 마음껏 『장난』을 치는 ',
            callname,
            '의 즐거운 표정에는 감출 수 없는 멸시와 정욕이 서려 있었다.',
          ],
        ],
      );
      if (love >= 75) {
        talk_arr.push(
          [
            `${self_call}는 계속 요리를 배우고 있어! 하지만 ${call_me}는 평소에…… 좋아하는 사람들이 보내주는 도시락이 부족하지는 않겠지. 맞는 말이야, ${self_call}는 더 먼 미래의 일을 생각하고 있으니까. 배고파지면 ${self_call}에게 부탁해봐도 좋아, 알았지?`,
            [
              me.get_colored_name(),
              '에게 자신의 이야기를 늘어놓는 ',
              callname,
              '의 미소는 어딘가 체념한 듯하면서도 홀가분해 보였다.',
            ],
          ],
          [
            `다들 또 ${self_call}가 예뻐졌대. 내가 정말 예뻐진 걸까? 하지만 나도 알고 있어, ${call_me}가 ${self_call}를 엉망진창으로 만들었다는 걸…… 농담으로 하는 소리 아니야.`,
            [
              '둘만 있을 때 숨김없이 ',
              me.get_colored_name(),
              '에게 밀착하며 몸을 과시하는 ',
              callname,
              '의 순수했던 미소가 점차 탁해져 갔다.',
            ],
          ],
          [
            `기분 좋은 일, ${self_call}도 확실히 ${call_me}랑 하고 싶어. 하지만 일상 훈련도 중요하잖아? 게다가 다음에 1등을 차지하면 ${call_me}도 더 기뻐해 줄 거지? 그때가 되면……`,
            [
              '입으로는 내키지 않는 척하면서도 작은 ',
              urara.get_uma_sex_title(),
              '의 뺨에는 홍조가 돌았다. 하지만 그때가 되면 대체 무슨 말을 하려는 것일까?',
            ],
          ],
        );
      }
      if (love >= 90) {
        talk_arr.push(
          [
            `${self_call} 여기 앉아도 돼? 고마워! 그렇다면…… 지금의 ${call_me}는 또 무슨 생각을 하고 있는 거야?`,
            [
              me.get_colored_name(),
              '의 허벅지 위에 고분고분하게 앉은 ',
              callname,
              '는 의외로 친밀하고도 안심한 듯 ',
              me.get_colored_name(),
              '의 몸에 밀착해왔다.',
            ],
          ],
          [
            `다들 ${self_call}의 달리기가 웃음을 준다고 해. 지금의 ${call_me}는 처음 만났을 때의 희망을 제대로 찾은 걸까?`,
            [
              '평소보다 부쩍 성숙해진 미소를 지으며, ',
              callname,
              '는 기대 섞인 눈빛으로 ',
              me.get_colored_name(),
              '의 곁에 기대어 왔다.',
            ],
          ],
          [
            `미래의 가정, 그리고 아이들…… ${self_call}는 이런 걸 기대하면 안 되는 걸까? 결국 ${call_me}도……`,
            [
              '앞뒤가 맞지 않는 말을 내뱉는 작은 ',
              urara.get_uma_sex_title(),
              '의 표정이 어딘가 우울해 보이는 듯했다.',
            ],
          ],
        );
      }
      if (love === 100) {
        talk_arr.push(
          [
            `서로 만나서 책임지지 않아도 괜찮아, 나는 ${call_me}를 믿으니까. 우리 사이는 여전히…… 비록 TV에 나오는 대사일 뿐이지만, ${self_call}는 연기하고 있는 게 아니야. ${call_me}는 어떻게 생각해?`,
            [
              '연기도 아니고 거짓말도 아닌, ',
              callname,
              '의 미소 속에는 오직 한 사람을 향한 애정만이 가득했다.',
            ],
          ],
          [
            `처음엔 모두를 즐겁게 해주려고 달린 거였는데, 지금은 오직 한 사람만을 위해서라도 나쁘지 않다는 생각이 들어…… 하지만 ${call_me}가 또 힘들어지면, ${self_call}는 ${call_me}만의 천사가 되어줄 수도 있어.`,
            [
              '아내처럼 ',
              me.get_colored_name(),
              '의 팔짱을 낀 채, 작은 담당은 무심결에 한 사람만을 향한 진심 어린 소회를 내비쳤다.',
            ],
          ],
          [
            `${self_call}는 ${call_me}를 독점하고 싶어. 비록 ${call_me}의 마음이 온전히 ${self_call}만의 것이 아님을 알더라도 말이야. 오늘도 마찬가지야. 그러니까 ${call_me}가 거절하더라도 ${self_call}는 포기하지 않을 거야!`,
            [
              '화사한 미소로 섬뜩한 독점욕을 드러내는 ',
              callname,
              '의 벚꽃빛 눈동자에는 조금의 웃음기도 섞여 있지 않았다.',
            ],
          ],
        );
      }
    }
  }
  const temp = get_random_entry(talk_arr);
  urara.say(temp[0]);
  era.print(temp[1]);
};