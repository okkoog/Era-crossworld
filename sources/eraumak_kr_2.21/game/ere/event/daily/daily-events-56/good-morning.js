const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = () => {
  const message = [],
    kitaru = get_chara_talk(56),
    me = get_chara_talk(0),
    sex_mark = era.get('mark:56:음문'),
    sex_happy = era.get('mark:56:쾌락'),
    relation = era.get('relation:56:0'),
    love = era.get('love:56'),
    callname = sys_get_callname(56, 0);
  if (era.get('base:56:체력') <= era.get('maxbase:56:체력') / 3) {
    message.push(
      () => {
        kitaru.say('오늘의 운세는…… 너무 힘들어요~');
        era.print([
          me.get_colored_name(),
          '이(가) 훈련장에 도착했을 때, 이미 풀밭에 대자로 누워 있는 ',
          kitaru.get_colored_name(),
          '를 발견했다.',
        ]);
      },
      () => {
        kitaru.say('상관없어요…… 운명의 사람이 하시는 말씀이라면, 힘내서 해볼게요!');
        era.print([
          kitaru.get_colored_name(),
          '는 웃으면서 ',
          me.get_colored_name(),
          '에게 손을 흔들었지만, 꼬리는 확연히 힘없이 처져 가랑이 사이에 머물러 있었다.',
        ]);
      },
    );
  } else if (era.get('cflag:56:컨디션') < 0) {
    message.push(
      () => {
        kitaru.say('으으……');
        era.print([
          '난간에 엎드려 있던 ',
          kitaru.get_colored_name(),
          '는 ',
          me.get_colored_name(),
          '을(를) 보자 귀를 건성으로 까딱거렸다.',
        ]);
      },
      () => {
        kitaru.say(['좋은 아침이에요…… ', callname, '.']);
        era.print([kitaru.get_colored_name(), '의 기분이 그리 좋아 보이지 않는다.']);
      },
    );
  } else {
    if (sex_happy || sex_mark === 1) {
      message.push(() => {
        kitaru.say(['우와! 아침의 ', callname, '도 정말 정정하시네요!']);
        kitaru.say(['그냥 ', callname, '께 지켜봐 지는 것만으로도 조금 흥분되기 시작했달까요……']);
      });
    } else if (sex_happy || sex_mark === 2) {
      message.push(() => {
        kitaru.say('으읏…… 햐앗?!');
        kitaru.say(['다리에 힘이 좀 풀려서…… 그냥 ', callname, '이 쳐다보시는 것뿐인데 이렇게 되다니……']);
      });
    } else if (sex_happy || sex_mark === 3) {
      message.push(() => {
        kitaru.say(['원해요…… ', callname, '……']);
        era.print([
          '그렇게 말하며, 아침 질주를 마쳐 약간 열이 오른 체온의 ',
          kitaru.get_teen_sex_title(),
          '가 ',
          me.get_colored_name(),
          '을(를) 껴안았다.',
        ]);
      });
    }
    if (love > 75 && relation > 400) {
      message.push(
        () => {
          kitaru.say('으응…… 조금 일찍 일어났나 보네요!');
          era.print([
            me.get_colored_name(),
            '의 앞에서 기지개를 켜자, ',
            kitaru.sex,
            '의 트레이닝복 상의 아래 가슴이 도드라지며 자신의 존재감을 과시했다.',
          ]);
        },
        () => {
          kitaru.say('역시! 매일 운명의 사람을 봐야 마음이 놓인다니까요!');
          kitaru.say([callname, '도 그렇게 생각하시나요?']);
          era.print([
            me.get_colored_name(),
            '의 팔에 매달리며 ',
            kitaru.sex,
            '의 밤색 귀가 ',
            me.get_colored_name(),
            '의 어깨를 툭툭 건드렸다.',
          ]);
        },
        () => {
          kitaru.say(['점괘에 따르면 ', callname, '은 오늘 연애운이 있다고 하네요!']);
          kitaru.say('보세요, 제가 이렇게 곁에 나타났잖아요?');
          era.print([
            '발꿈치를 들며 ',
            kitaru.sex,
            '가 내뱉는 숨결이 ',
            me.get_colored_name(),
            '의 목덜미에 닿았다.',
          ]);
        },
        () => {
          kitaru.say(['오늘 ', callname, '은 제 곁을 떠나시면 안 돼요!']);
          kitaru.say('왜냐하면! 점괘로 나온 오늘의 행운의 아이템이 바로 이 후쿠짱이니까요!');
        },
        () => {
          era.print([
            kitaru.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '을(를) 등진 채 난간에 기대어 있었고…… 자신의 교복 치마가 난간에 말려 올라가 있다는 사실을 전혀 눈치채지 못한 듯했다.',
          ]);
          kitaru.say(['에헤헤, ', callname, '께 들켜버린 건가요?']);
          era.print([
            '여우처럼 요염한 미소를 지으며, ',
            kitaru.get_teen_sex_title(),
            '는 는 당황하지 않고 천천히 치마를 정리했다. 하얀 속옷에 감싸인 엉덩이가 선명하게 보였다.',
          ]);
        },
      );

      if (love > 89 && relation > 400) {
        const common = () => {
          era.print([
            kitaru.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '을(를) 등진 채 난간에 기대어 있었고…… 자신의 교복 치마가 난간에 말려 올라가 있다는 사실을 전혀 눈치채지 못한 듯했다.',
          ]);
          kitaru.say(['저기…… ', callname, '은 이런 거 좋아하시나요?']);
        };
        message.push(
          () => {
            common();
            era.print([
              '요호 같은 요염한 미소를 띠며, ',
              kitaru.get_teen_sex_title(),
              '는 는 심지어 치마를 살짝 들어 올렸다. 후쿠키타루의 순산형 엉덩이를 반쯤 덮은 하얀 레이스 팬티 너머로 살결이 비쳤다.',
            ]);
          },
          () => {
            common();
            era.print([
              '요호 같은 요염한 미소를 띠며, ',
              kitaru.get_teen_sex_title(),
              '는 는 심지어 치마를 살짝 들어 올렸다. 확연히 조이는 듯한 검은색 속옷이 후쿠키타루의 순산형 엉덩이 위로 유혹적인 굴곡을 만들어냈다.',
            ]);
          },
          () => {
            common();
            era.print([
              '요호 같은 요염한 미소를 띠며, ',
              kitaru.get_teen_sex_title(),
              '는 심지어 치마를 살짝 들어 올렸다. 몇 가닥의 가느다란 끈으로 이루어진 선정적인 속옷이 ',
              kitaru.get_colored_name(),
              '의 엉덩이 살을 거의 그대로 드러내고 있었다.',
            ]);
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              '은(는) ',
              me.get_colored_name(),
              '을(를) 등진 채 난간에 기대어 있었고…… 자신의 교복 치마가 난간에 말려 올라가 있다는 사실을 전혀 눈치채지 못한 듯했다.',
            ]);
            kitaru.say('으햣!!!');
            era.print([
              kitaru.get_colored_name(),
              '가 알아차리기 전에 ',
              me.get_colored_name(),
              '이(가) 장난스럽게 찰싹 때리자, ',
              kitaru.get_teen_sex_title(),
              '는 억누르지 못한 귀여운 비명을 내질렀다.',
            ]);
          },
        );
      }
    }

    if (love >= 50 && relation >= 226) {
      message.push(
        () => {
          kitaru.say('저의 운명의 사람! 오늘의 훈련 계획은 무엇인가요?');
          era.print([
            '그렇게 말하며, ',
            kitaru.sex,
            '의 꼬리가 ',
            me.get_colored_name(),
            '의 다리를 휘감았다.',
          ]);
        },
        () => {
          kitaru.say('그나저나! 훈련이 끝나고 저랑 같이 가판대 보러 가실래요?');
          kitaru.say([
            '마침 ',
            sys_get_colored_callname(56, 58),
            '가 오늘 시간이 없다고 하더라고요!',
          ]);
        },
        () => {
          kitaru.say([
            callname,
            ', 혹시 운을 고치고 싶으시다면 제가 ',
            sys_get_colored_callname(56, 98),
            '보다 조금 더 잘할 거예요!',
          ]);
          era.print([
            kitaru.get_colored_name(),
            '가 조금 볼을 부풀린 채 최근의 소문에 대해 반응했다.',
          ]);
        },
        () => {
          kitaru.say(['오늘은 ', callname, '을 위해 아침밥을 만들어 봤어요!']);
          kitaru.say('맛은 장담 못 하겠지만요~');
          era.print([
            kitaru.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '을(를) 향해 손에 든 도시락통을 들어 보였다.',
          ]);
        },
        () => {
          kitaru.say(['저기, ', callname, '!']);
          kitaru.say('일 끝나고 같이 상점가에서 저녁 먹으러 가는 건 어떠신가요?');
        },
        () => {
          era.print([
            kitaru.get_colored_name(),
            '는 ',
            me.get_colored_name(),
            '을(를) 등진 채 난간에 기대어 있었고…… 자신의 교복 치마가 난간에 말려 올라가 있다는 사실을 전혀 눈치채지 못한 듯했다.',
          ]);
          kitaru.say(['에잇! ', callname, ' 변태!']);
          era.print([
            '당신이 미처 말을 꺼내기도 전에 ',
            me.get_colored_name(),
            '의 발소리를 알아듣고 얼굴을 붉힌 ',
            kitaru.get_teen_sex_title(),
            '는 의외로 침착하게 치마를 정리했다.',
          ]);
        },
      );
    } else if (love < 50 || relation < 226) {
      message.push(
        () => kitaru.say('으음…… 어디서 훈련하는 게 좋을지 제가 한번 점쳐볼까요?'),
        () => kitaru.say(['좋은 아침이에요! ', callname, ', 오늘의 훈련 계획은 뭔가요?']),
        () => kitaru.say([callname, '! 오늘 운세를 제가 한번 점쳐드릴까요?']),
      );
    }
    if (relation >= 226) {
      message.push(
        () => {
          kitaru.say('오늘 운세가 정말 좋네요! 그럼……');
          kitaru.say(['……부디 ', callname, ', 저를 마음껏 부려주세요!']);
          era.print([
            'TV에서 본 것을 흉내 내듯, ',
            kitaru.sex,
            '는 ',
            me.get_colored_name(),
            '에게 조금은 어설픈 몸짓으로 정중히 고개를 숙여 인사했다.',
          ]);
        },
        () => {
          kitaru.say('다루마 님이 진동하고 있어요. 오늘 제 영력이 아주 충만한가 봐요!');
          era.print([
            kitaru.sex,
            '가 ',
            me.get_colored_name(),
            '에게 자신의 왼쪽 귀에 걸린 붉은 다루마를 가리켰다.',
          ]);
        },
        () => {
          kitaru.say('제가 미리 점쳐뒀거든요!');
          kitaru.say([callname, '의 오늘 운세는 대길이랍니다!']);
        },
      );
    }
  }
  get_random_entry(message)();
};