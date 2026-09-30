const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = () => {
  const love = era.get('love:400'),
    silence = get_chara_talk(400),
    me = get_chara_talk(0),
    buffer = [];
  buffer.push(
    () =>
      silence.say('오늘 날씨 꽤 괜찮네. 무슨 계획이라도 있으면 일찍 시작하자.'),
    () => silence.say('넌 내가 강해지기 위해 필요한 존재니까, 내 생각은 굳이 배려하지 않아도 돼.'),
    () =>
      silence.say([
        '조금 그립네... ',
        sys_get_colored_callname(400, 25),
        '의 커피... 왜 그렇게 봐, ',
        sys_get_colored_callname(400, 25),
        '가 타준 커피는 확실히 맛있다고.',
      ]),
    () => {
      silence.say(
        '최근에 학원 근처에 새로 생긴 식당 맛이 괜찮더라. 훈련 성과가 충분히 좋으면, 내가 한 번 데려가 줄까?',
      );
      era.print([
        silence.get_colored_name(),
        '는 자기 배를 쓰다듬었다. 아직도 그 요리의 맛을 음미하는 듯하다.',
      ]);
    },
    () =>
      silence.say([
        sys_get_colored_callname(400, 32),
        '의 약은 어때? 많은 경우 확실히 문제를 해결하는 데 도움을 주지만, 부작용이나 그에 수반되는 문제들을 네가 해결할 자신은 있어?',
      ]),
    () =>
      silence.say([
        '내 목표가 뭐냐고? 이기고 싶어. 레아스 ',
        silence.get_uma_sex_title(),
        '의 무대에서 계속 이겨나가는 것, 그것뿐이야.',
      ]),
    () => {
      silence.say([
        '아, ',
        {
          content: '하야카와 ' + (era.get('flag:캐릭터성별') === 1 ? '선생님' : '씨'),
          color: get_chara_color(301),
          fontWeight: 'bold',
        },
        '라...정말 강한... 아니, 아무것도 아니야. 잊어버려.',
      ]);
      era.print([silence.get_colored_name(), '는 고개를 저으며 화제를 돌렸다.']);
    },
  );
  if (love === 100) {
    buffer.push(
      () => {
        silence.say('어째서일까? 우리는 그저 트레이너와 담당 우마무스메일 뿐인데...');
        silence.say('왜 내 시선은 이미 너에게서 떨어지지 않게 된 걸까.');
        era.print([
          '비록 ',
          silence.get_colored_name(),
          '는 작은 목소리로 혼잣말을 하는 듯했지만, ',
          me.get_colored_name(),
          '은(는) 그 말을 듣고 말았다.',
        ]);
      },
      () => {
        silence.say('다리 마사지 좀 해줄래? 이것도 트레이너의 역할 중 하나잖아...');
        era.print([
          silence.get_colored_name(),
          '는 신발을 벗고 양말에 감싸인 작은 발을 뻗었다. ',
        ]);
        era.print([
          '말로는 ',
          me.get_colored_name(),
          '에게 발 마사지를 부탁한다고 했지만, 눈을 감은 채 마치 ',
          me.get_colored_name(),
          '이(가) 뭘 하든 내버려둘 작정인 것 같았다.',
        ]);
      },
    );
  } else if (love >= 90) {
    buffer.push(
      () => {
        silence.say('딱히 추가 훈련 일정이 없다면...');
        silence.say(
          '오늘은 나랑 같이 밥 먹으러 가자. 시간은 걱정 마, 정 안 되면 내가 널 안고 뛰어오면 되니까.',
        );
        era.print([
          silence.get_colored_name(),
          '는 손짓을 섞어가며 말했다. ',
          silence.sex,
          '의 모습은 전혀 농담하는 것처럼 보이지 않았다.',
        ]);
      },
      () => {
        silence.say(
          '미안, 조금 피곤해서 그런데, 나 좀 부축해 줄래? 역시 네 냄새가 제일 안심이 된단 말이지.',
        );
        era.print([
          silence.get_colored_name(),
          '는 자연스럽게 당신의 품에 기대어, ',
          me.get_colored_name(),
          '의 체취를 한껏 만끽하는 듯했다.',
        ]);
      },
    );
  } else if (love >= 75) {
    buffer.push(
      () => silence.say('오늘 훈련 끝나고 나랑 같이 뭐라도 마시러 갈래? 걱정 마, 내가 쏠 테니까.'),
      () =>
        silence.say('아주 괜찮은 카페를 알고 있거든. 너한테 주는 특별 보너스라고 생각하면 어때?'),
      () =>
        silence.say(
          '나랑 서점 좀 같이 가줄래? 오늘 새 잡지랑 만화책이 나온 것 같은데, 같이 갈 사람이 필요해서.',
        ),
    );
  }
  get_random_entry(buffer)();
};