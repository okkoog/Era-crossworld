/**
 * @file 키타산 블랙 - 日常
 * @author 小黑（原作）
 * @author 黑奴一号 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const KitaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-68');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise>} */
const celebration_handlers = {};

require('#/event/daily/daily-events-68/celebration')(celebration_handlers);

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(68)) {
      return super.select();
    }
    const love = era.get('love:68'),
      kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [];
    if (era.get('base:68:체력') < era.get('maxbase:68:체력') / 3) {
      buffer.push([
        ['어라라…… 제 체력은 아직 더 버틸 수 있을 텐데요?'],
        `${kita.name}은 어깨를 크게 들썩이며 거친 숨을 몰아쉬고 있다. 아무래도 더 이상 트레이닝할 기운이 남아있지 않은 듯하다.`,
      ]);
    } else {
      buffer.push(
        [
          ['으으으…… 죄송해요 트레이너 선생님! 발을 삐끗한 스모 선수를 도와주느라 늦어버렸어요!'],
          [
            kita.get_colored_name(),
            '이 두 손을 모아 빌고 있지만, 누군가에게 도움이 된 자신이 내심 뿌듯한 모양이다.',
          ],
        ],
        [
          [
            '오늘은 다행히 늦지 않았네요 트레이너님~ 그럼 지체하지 말고 바로 트레이닝을 시작하죠!',
          ],
          [
            '이미 땀을 뻘뻘 흘리고 있는 ',
            kita.get_colored_name(),
            '이 싱글벙글 웃으며 ',
            me.get_colored_name(),
            '에게 말했다.',
          ],
        ],
      );
      if (love >= 75) {
        buffer.push([
          [
            '요즘은 트레이너 선생님이 명령을 내리시면 왠지 몸이 뜨거워지는 기분이 들어서……',
            '트레이너 선생님, 저에게 좀 더 많은 걸 요구해 주시겠어요?',
          ],
          `${kita.name}의 얼굴이 발그레하게 달아올랐다. ${me.name}이(가) 그 사실을 지적하자 허둥지둥 얼굴을 가리며 뛰어갔다.`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            ['영차, 영차! 헤헤~ 오늘 트레이너님의 훈련도 정말 굉장하네요. 하지만 저도 지지 않을 거예요!'],
            `${kita.name}은 요즘 들어 훈련에 무척 진심인 모양이다. 지시를 완수하자마자 곧바로 다음 지시를 기다리고 있다.`,
          ],
          [
            [
              '요즘 왠지 트레이너님께 첫눈에 반해버린 것 같은 기분인데……',
              '트레이너 선생님도 저에게 그런 감정을 느끼고 계실까요?',
            ],
            `${me.name}의 곁에서 무언가 조그맣게 중얼거리던 ${kita.name}은, ${me.name}이(가) 가까이 다가가자 고개를 저으며 웃으며 달려가 버렸다.`,
          ],
        );
      } else {
        buffer.push([
          [
            '트레이너 선생님께 칭찬받고 싶어요. 승리한 뒤에 저를 향해 미소 지어 주셨으면 좋겠고요.',
            `그러니까 ${sys_get_callname(68, 0)}, 오늘 훈련도 봐주지 말고 엄하게 부탁드려요!`,
          ],
          [
            '활짝 웃고 있는 ',
            kita.get_colored_name(),
            '은 평소와 다름없는 모습인 듯하다.',
          ],
        ]);
      }
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => kita.say(e));
    era.print(entry[1]);
  }

  good_morning() {
    const love = era.get('love:68'),
      kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [
        [
          [
            `오늘도 몸 상태는 완벽해요. 트레이너 선생님, 훈련을 시작하죠!`,
          ],
        ],
        [
          [
            [
              sys_get_colored_callname(this.id, 3),
              '만큼 강하지는 않지만, 저도 노력해서 강해졌다는 걸 증명해 보이겠어요!',
            ],
          ],
        ],
        [
          [
            [
              '레이스라는 큰 축제를 맞이하기 위해, 마음껏 저를 단련시켜서 저만의 무기를 갖게 해주세요.',
            ],
          ],
        ],
        [
          [
            [
              '최근에 ',
              sys_get_colored_callname(this.id, 67),
              '이 저를 데리고 희한한 요리를 먹으러 다녀요. 시금치 카레라든가, 초콜릿 퐁듀라든가……',
            ],
            [
              '……전부 재미있는 요리이긴 한데, ',
              sys_get_colored_callname(this.id, 67),
              '이 데려가주는 가게들은 좀 지나치게 특이한 거 아닐까요?',
            ],
          ],
          [kita.get_colored_name(), '이 살짝 통통해진 배를 만지며 의아한 표정을 지었다.'],
        ],
        [
          [
            [
              sys_get_colored_callname(this.id, 44),
              '이 최근에 연금술을 배운 모양이에요. 정말 대단하죠~',
            ],
          ],
          [
            kita.get_colored_name(),
            '이 싱글벙글 웃으며 ',
            me.get_colored_name(),
            '에게 주변에서 일어난 재미있는 일들을 이야기한다.',
          ],
        ],
        [
          [
            [
              sys_get_colored_callname(this.id, 0),
              ', 요즘 운이 좀 안 좋으신가요? 그럴 때는 믿음직한 ',
              sys_get_colored_callname(this.id, 98),
              '께 가서 운세를 바꿔달라고 해야 해요!',
            ],
          ],
          ['혼자서 신나게 떠들더니, ', kita.get_colored_name(), '은 후다닥 달려가 버렸다.'],
        ],
        [
          [
            [
              sys_get_colored_callname(this.id, 3),
              '가 제 훈련을 지켜보고 계신 것 같아요. 좋아, 저도 지지 않도록 노력해야겠어요!',
            ],
          ],
          [
            '의욕을 불태우는 ',
            kita.get_colored_name(),
            '은 진지하게 오늘 훈련 준비를 시작했다.',
          ],
        ],
        [
          [
            [
              '요즘 ',
              sys_get_colored_callname(this.id, 301),
              '가 새로운 헤어 에센스를 사고 계시더라고요. ',
              sys_get_colored_callname(this.id, 0),
              '도 머릿결 관리에 신경 쓰고 계시나요?',
            ],
          ],
          [
            me.get_colored_name(),
            '의 머리카락을 만지작거리며 ',
            kita.get_colored_name(),
            '이 태양처럼 환한 미소를 지었다.',
          ],
        ],
      ];
    if (love >= 90) {
      buffer.push(
        [
          [
            `요즘은 트레이너 선생님이 저를 지도해주시는 목소리를 듣지 않으면 안 될 것 같은 기분이 들어요.`,
            '지시를 내리실 때마다 심장이 쿵쾅거리고, 임무를 완수하면 칭찬받고 싶어서 축제라도 하는 것처럼 흥분돼요.',
          ],
          `${kita.name}은 손가락을 만지작거리며 얼굴을 붉혔다.`,
        ],
        [
          [
            `요즘 꼬리로 역기를 들 수 있을지 도전 중인데, 트레이너 선생님도 같이 확인해 주시겠어요?`,
          ],
          `${me.name}의 종아리를 꼬리로 감싼 ${kita.name}이 장난스러운 말투로 건넸다.`,
        ],
        [
          [
            '야~ 가볍게 몸을 풀었더니 온몸이 땀 범벅이네요~',
            '오늘 밤에도 목욕탕의 뜨거운 물에 퐁당 들어가서 구석구석 깨끗이 씻어야겠어요!',
          ],
          `${kita.name}이 팔을 들어 겨드랑이 냄새를 맡는다. 땀에 젖어 매끄럽게 빛나는 겨드랑이가 ${me.name}의 눈앞에 고스란히 드러났다.`,
        ],
        [
          [
            `트레이너 선생님, 이번 주말에 같이 설산으로 훈련 가요!`,
            '걱정 마세요, 시간이 부족하면 제가 트레이너 선생님을 안고 뛸게요! 절대 늦지 않게 해드릴게요!',
          ],
          `의욕이 넘치는 ${kita.name}이 ${me.name}에게 은근슬쩍 스킨십을 시도한다.`,
        ],
      );
    } else if (love >= 75) {
      buffer.push(
        [
          [
            `깊은 밤하늘의 검은 불꽃! 마법 ${kita.get_teen_sex_title()} 키타산! 이런 구호라면 토쇼도 좋아해 주겠죠?`,
          ],
          `${
            kita.name
          }은 한 바퀴 빙그르르 돌더니, 올해 유행하는 프리큐어 변신 포즈를 취해 보였다.`,
        ],
        [
          ['다음 레이스를 위해 배로 노력해서, 저만의 무기를 연마해야겠어요!'],
          `투지에 불타는 ${kita.name}이 오늘 훈련 준비를 마쳤다.`,
        ],
        [
          [
            '최근 키류인 트레이너 선생님이 「강철 같은 의지」를 배우려는 사람이 없어서 고민하시더라고요.',
            '게다가 왠지 다이아짱도 진지하게 그 말에 동의하던데, 대체 왜 그런 걸까요?',
          ],
        ],
        [
          [
            `트레이너 선생님은 저의 든든한 대장님이에요. 그러니까 항상 감사하고 있어요! 에헤헤!`,
          ],
          `${kita.name}이 웃으며 바짝 다가왔다. 검은 귀가 파닥거리며 ${me.name}의 목덜미를 간지럽혔다.`,
        ],
      );
    } else if (love >= 50) {
      buffer.push(
        [
          [
            `그저 트레이너 선생님의 냄새를 맡는 것만으로도 가슴이 두근거려서 멈추질 않아요.`,
            '이런 기분은 대체 뭘까요?',
          ],
          `${kita.name}은 꼬리로 ${me.name}의 종아리를 툭툭 치며 형언할 수 없는 표정을 지었다.`,
        ],
        [
          [
            '최근에 다이아짱이 매일 밤 침대에서 이불을 뒤집어쓰고 이상한 소리를 내는 것 같아요.',
            '게다가 가슴도 좀 커진 것 같은데, 학원 생활이 너무 외로워서 그런 걸까요?',
          ],
          `순진한 표정을 짓던 ${kita.name}은 사토노 다이아몬드가 나타나기 전에 후다닥 도망쳤다.`,
        ],
        [
          [
            `으음, 어제 골드 쉽 선배랑 같이 달린 뒤로 발이 좀 아픈데…… 트레이너 선생님이 좀 봐주실 수 있나요?`,
          ],
          `신발을 벗은 ${kita.name}이 희고 매끄러운 발을 ${me.name}의 앞으로 내밀었다.`,
        ],
        [
          [
            `트레센 학원에 있는 동안 트레이너 선생님께 정말 많은 도움을 받았어요!`,
            '하지만 졸업하고 나면 이런 시간도 끝이겠죠. 그러니까 졸업하기 전까지 트레이너 선생님께 꼭 보답하고 싶어요!',
          ],
          `문득 감상적인 표정을 지은 ${kita.name}은 ${me.name}을(를) 위해 더욱 노력하기로 다짐했다.`,
        ],
      );
    }
    const entry = get_random_entry(buffer);
    entry[0].forEach((e) => kita.say(e));
    entry[1] && era.print(entry[1]);
  }

  async office_cook() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [
        [
          `트레이너 선생님, 제대로 식사 안 하고 컵라면으로 때우시면 안 돼요. 드시더라도 채소라도 좀 곁들여야죠.`,
          `${kita.sex_code - 1 ? '엄마' : '아빠'}처럼 잔소리를 하던 ${kita.name}은 ${
            me.name
          }의 허락을 받고 작은 냄비에 시금치와 배추를 넣었다.`,
        ],
        [
          `에에? 트레이닝실에서 전골을 먹는 건가요? 역시 어른은 대담하네요!`,
          `경외심 가득한 눈빛으로 즉석 전골 키트를 쳐다보는 ${kita.name}은 마치 신기한 것을 발견한 아기 고양이 같다.`,
        ],
        [
          `상점가 분들이 유통기한이 임박한 빵이랑 우유를 좀 주셨는데, 같이 샌드위치 만들어 먹을까요?`,
          `그렇게 말하며 ${kita.name}은 유통기한이 다 되어가는 빵 상자를 꺼내왔다.`,
        ],
      ];
    const entry = get_random_entry(buffer);
    await kita.say_and_wait(entry[0]);
    await era.printAndWait(entry[1]);
  }

  async office_study() {
    await get_chara_talk(68).say_and_wait(
      get_random_value(0, 1)
        ? '저의 문학 공부를 지도해주시는 건가요? 좋아요, 배로 노력할게요!'
        : '으으으…… 노력해도 수학은 역시 모르겠어요……',
    );
  }

  async office_rest() {
    const me = get_chara_talk(0),
      kita = get_chara_talk(68),
      buffer = [
        [
          [
            `쉬시게요? 전 괜찮아요, 제 몸은 아주 튼튼하니까요!`,
            `그것보다 트레이너 선생님, 계속 훈련해요!`,
          ],
          `가슴을 팡팡 두드리며 웃던 ${kita.name}이었지만, ${me.name}의 명령에 결국 얌전히 휴식을 취했다.`,
        ],
        [
          [
            `트레이너 선생님, 저 정말 안 졸린데…… 낮잠 안 자도 괜찮은데……`,
          ],
          `작게 투덜거리던 ${kita.name}은 눕자마자 금세 잠이 들고 말았다.`,
        ],
        [
          [`트랄랄라~ 오늘도 즐겁게 훈련~`, `너무 오래 쉬어서 늘어지면 안 돼~ 트랄랄라~`],
          `소파에 누워 네임펜을 마이크 삼아 쥔 ${kita.name}이 콧노래를 흥얼거린다.`,
        ],
      ];
    const entry = get_random_entry(buffer);
    for (const e of entry[0]) {
      await kita.say_and_wait(e);
    }
    await era.printAndWait(entry[1]);
  }

  async office_prepare() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      buffer = [
        [
          `벌꿀 한 스푼 넣고, 슬라이스한 파파야를 넣어서…… 좋아! 레이스 전 준비 중 하나 완료!`,
          `웃으며 ${me.name}에게 말한 ${
            kita.name
          }은, 음식을 낭비하지 않기 위해 그 꿀물을 테이오 님께 전부 먹여버렸다.`,
        ],
        [
          `트레이너 선생님이 제 편자를 박아주시는 건가요? 에헤헤~ 이런 건 제가 직접 해도 되는데~`,
          `그렇게 말하며 ${kita.name}은 편자 못을 손가락 힘만으로 하나하나 꾹꾹 눌러 박았다.`,
        ],
        [
          `가속할 때 무게 중심을 조절한다…… 과연, 이게 된다면 다음엔 꼭 이길 수 있겠네요!`,
          `화이트보드의 계획서를 진지하게 살피던 ${kita.name}은 ${me.name}의 방안대로 곧장 밖으로 나가 한 바퀴 뛰고 왔다.`,
        ],
      ];
    const entry = get_random_entry(buffer);
    await kita.say_and_wait(entry[0]);
    await era.printAndWait(entry[1]);
  }

  async office_game() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    switch (get_random_value(0, 2)) {
      case 0:
        await kita.say_and_wait(`으음…… 다이아 짱네 집 게임인가요……?`);
        await era.printAndWait(
          `의욕 충만했던 ${kita.name}은 Ｓ◯ＧＡ 게임기라는 것을 확인하자마자 귀를 축 늘어뜨렸다.`,
        );
        break;
      case 1:
        await kita.say_and_wait(
          `오오오옷~ 저의 턴! 드래곤메이드 라도리를 통상 소환! 덱에서 카드 3장을 덤핑합니다!`,
        );
        await era.printAndWait(
          `말이 끝나기 무섭게 ${kita.name}은 드래곤메이드 라도리를 필드에 내놓고, 빛의 창조신을 묘지로 보냈다.`,
        );
        break;
      case 2:
        await kita.say_and_wait(
          `트레이너 선생님! 우리 주사위 놀이 해요! 이거 진짜 재밌거든요!`,
        );
        await kita.say_and_wait(
          `고향에 있을 때 동성회 오빠들이랑 자주 했었어요, 에헤헤~`,
        );
        await era.printAndWait(
          `손가락으로 주사위를 쥐어 챈 ${kita.name}은 ${me.name} 앞에서 본 적 없는 기묘한 기술로 주사위를 굴리기 시작했다.`,
        );
    }
  }

  async out_shopping(hook) {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      love = era.get('love:68'),
      buffer = [],
      edu_marks = new KitaEduMarks();
    let temp;
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 2)) {
          case 0:
            await kita.say_and_wait(
              `트레이너 선생님, 저 갑니다! 화조풍월 오오오오!`,
            );
            await era.printAndWait(
              `경쾌하게 버튼을 연타하자, ${kita.name}이 조종하는 꽃의 요괴가 도약해 흑요석 무술가의 갈비뼈를 박살 냈다.`,
            );
            break;
          case 1:
            await kita.say_and_wait(`음음음, 이 인형 뽑기 집게의 강도는……`);
            await era.printAndWait(
              `인형 뽑기 기계에 얼굴을 바짝 붙이고 몇 분 동안 관찰하던 ${kita.name}이 드디어 동전을 넣었다.`,
            );
            break;
          case 2:
            await era.printAndWait(`${kita.name}과 함께 오락실에 갔다……`);
            await kita.say_and_wait(
              `테이오 님이랑 맥퀸 님 인형! 드디어 트레센 근처 오락실에도 들어왔네요!`,
            );
            await era.printAndWait(
              `말은 그렇게 하지만 목적은 게임기가 아니라 오락실 구석의 인형 뽑기 기계인 모양이다.`,
            );
            await era.printAndWait(
              `긴 줄을 기다려 겨우 기계 앞에 선 ${kita.name}은 여전히 의욕이 넘치는 모습으로 동전을 집어넣었다.`,
            );
            await era.printAndWait(
              `하지만 어설픈 손놀림을 보며 ${me.name}은(는) 걱정이 앞선다. 키타산은 인형 뽑기 초보인 것 같은데, 정말 목표를 뽑을 수 있을까……?`,
            );
            await kita.say_and_wait(
              `오늘의 저는 지갑이 텅 빌 때까지 뽑겠다는 각오로 왔어요! 인형을 뽑기 전까진 못 돌아가요!`,
            );
            await era.printAndWait(
              `기세등등한 ${kita.name}을 보며 ${
                me.name
              }은(는) 한숨을 내쉬고는, ${kita.get_teen_sex_title()}의 곁으로 다가가 직접 조이스틱을 함께 잡았다.`,
            );
        }
        break;
      case 1:
        await era.printAndWait(
          `${kita.name}과 함께 상점가에서 주최한 경품 추첨 행사에 참여했다……`,
        );
        switch (
          get_random_value(
            0,
            3 + !edu_marks.hot_spring && era.get('cflag:68:육성턴수합산') < 144,
          )
        ) {
          case 0:
            await kita.say_and_wait(
              `지나가던 하나야마파 오빠가 주신 추첨권…… 뭐가 나올까요?`,
            );
            await era.printAndWait(`드르륵 드르륵 드르륵……`);
            await era.printAndWait(`뿅~`);
            await era.printAndWait(`상점가 경품을 획득했다: 【평범한 티슈】!`);
            await kita.say_and_wait(
              `아우우, 티슈라니. 경품으로 나쁘지는 않지만……`,
            );
            await kita.say_and_wait(
              `역시 회전판을 부수거나 책상을 엎어버릴 기세로 돌렸어야 했나……`,
            );
            await era.printAndWait(`${kita.name}은 티슈를 받아 들고 실망한 듯 고개를 떨구었다.`);
            break;
          case 1:
            await kita.say_and_wait([
              sys_get_colored_callname(68, 67),
              '이 물건을 사고 받은 추첨권인데, 제가 한 번 해볼게요!',
            ]);
            await era.printAndWait(`드르륵 드르륵 드르륵……`);
            await era.printAndWait(`뿅~`);
            await era.printAndWait(`상점가 경품을 획득했다: 【당근】!`);
            await kita.say_and_wait(
              `우으…… 당근 딱 한 개인가요? 너무 소박해서 좀 아쉬운데요……`,
            );
            await kita.say_and_wait(
              `아! 하지만 이 당근을 콘서트용 마이크로 쓸 수도 있겠어요! 에헤헤~`,
            );
            await era.printAndWait(
              `당근을 마이크처럼 쥐고 길거리에서 노래를 부르던 ${kita.name}은, 잠시 후 당근을 아삭아삭 맛있게 먹어 치웠다.`,
            );
            break;
          case 2:
            await kita.say_and_wait(
              `와아, 추첨이다~ 마침 부녀회 아주머니가 주신 추첨권이 있는데, 트레이너 선생님 같이 해봐요!`,
            );
            await era.printAndWait(`드르륵 드르륵 드르륵……`);
            await era.printAndWait(`뿅~`);
            await era.printAndWait(`상점가 경품을 획득했다: 【당근 산더미】!`);
            await kita.say_and_wait(`우와, 엄청 많아요! 한두 끼 식사로 충분하겠는데요!`);
            await era.printAndWait(
              `당근 산을 보며 신나서 춤을 추며 모두에게 나눠주겠다는 ${kita.name}을 보며, ${
                me.name
              }은(는) ${kita.get_teen_sex_title()}가 자기 몫까지 남겨주는 걸 잊지 않도록 당근 하나를 몰래 챙겨두었다.`,
            );
            break;
          case 3:
            await kita.say_and_wait([
              '에헤헤, ',
              sys_get_colored_callname(68, 44),
              '이 휴지를 사고 받은 추첨권이에요. 뭐가 나올까요?',
            ]);
            await era.printAndWait(`드르륵 드르륵 드르륵……`);
            await era.printAndWait(`뿅~`);
            await era.printAndWait(
              `상점가 경품을 획득했다: 【최고급 당근 햄버그】!`,
            );
            await kita.say_and_wait(
              `정말 호화로운 요리네요! 양도 엄청나요! 거의 솥뚜껑만 한 크기인데요?!`,
            );
            await era.printAndWait(
              `대체 고기를 어디서 구한 건지 의문이 들 정도의 크기다. ${me.name}은(는) 태클을 걸고 싶은 걸 참으며, ${kita.name}의 권유에 따라 다른 아이들도 불러 함께 고기 파티를 벌이기로 했다.`,
            );
            break;
          case 4:
            await kita.say_and_wait(
              `음음, 평소에 상점가를 도운 덕분에 공짜로 받은 추첨 기회…… 실망하게 해드리지 않겠어요!`,
            );
            await era.printAndWait(`드르륵 드르륵 드르륵……`);
            await era.printAndWait(`뿅~`);
            await era.printAndWait(`상점가 경품을 획득했다: 【온천 여행권】!`);
            await kita.say_and_wait(
              `만세! 특별상! 특별상이에요, 트레이너 선생님! 에헤헤헤!`,
            );
            await kita.say_and_wait(
              `아, 하지만 이건 상점가 분들이 호의로 주신 건데…… 이렇게 좋은 걸 받아도 되는 걸까요?`,
            );
            await era.printAndWait(
              `상점가 사람들의 따뜻한 격려 속에, ${kita.name}은 쑥스러워하며 온천 여행권을 소중히 챙겼다.`,
            );
            edu_marks.hot_spring = 1;
        }
        break;
      case 2:
        buffer.push(
          [
            [
              `아아아~ 음! 발성 연습 정상! 트레이너 선생님, 노래 연습 시작할게요!`,
            ],
            `마이크를 꽉 쥐고, ${kita.name}은 평소처럼 고향의 엔카를 부르기 시작했다.`,
          ],
          [
            [
              `오늘은 노래뿐만 아니라 안무 연습도 할 거예요. 트레이너 선생님, 똑똑히 지켜봐 주세요! 샤바다바다~`,
            ],
            `발끝을 세워 빙그르르 돌며, ${kita.name}은 테이오의 스텝을 흉내 내며 뛰어다닌다.`,
          ],
          [
            [
              `토쇼 님께 블랙 메탈 음악을 추천받았어요. 아직 들어보진 못했지만 오늘 한 번 불러볼까요……`,
              `에, 안 돼요? 왜요, 트레이너 선생님?`,
            ],
            `새로운 장르에 도전해보고 싶은 ${kita.name}이 볼을 부풀리며 말했다.`,
          ],
        );
        if (love >= 75) {
          buffer.push([
            [
              `우와아아악…… 이, 이 곡은 너무 야해요! 트레이너 선생님, 들으면 안 돼요!`,
            ],
            `수위 높은 가사가 흘러나오자, ${me.name}과(와) ${kita.name}은 혼비백산하여 즉시 다음 곡으로 넘겨버렸다.`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `어때요 트레이너 선생님, 제 노래 실력에 감동하셨나요?`,
                `왜 그런 표정을 지으세요? 제가 뭐 잘못한 거라도 있나요?`,
              ],
              `${kita.name}이 아무 자각 없이 사랑 노래를 불러주는 것을 몇 번이나 겪은 ${me.name}은(는), 거의 해탈한 듯한 표정을 지었다.`,
            ],
            [
              [`트레이너 선생님, 제 노래 어땠나요? 에헤헤……`],
              `${me.name}의 진심 어린 찬사를 듣자, 꼬리로 ${me.name}을(를) 툭툭 치던 ${kita.name}은 다리를 모으고 수줍게 몸을 배베 꼬았다.`,
            ],
          );
        }
        temp = get_random_entry(buffer);
        for (const e of temp[0]) {
          await kita.say_and_wait(e);
        }
        await era.printAndWait(temp[1]);
        break;
      case 3:
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          kita.get_colored_name(),
          '은 상점가로 영화를 보러 왔다. 요즘 재미있는 영화가 있으려나?',
        ]);
    }
    hook.arg = hook.arg <= 1;
  }

  async out_station(hook) {
    hook.arg = await select_action_in_station(68);
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      love = era.get('love:68'),
      buffer = [];
    let temp;
    switch (hook.arg) {
      case 0:
        buffer.push(
          [
            ['후아아~ 다이아 짱이 추천해준 라면집, 역시 양이 엄청나네요! 잘 먹겠습니다!'],
            `소고기 라면을 크게 한 젓가락 들이킨 ${kita.name}은 행복한 표정을 지었다.`,
          ],
          [
            [
              `저기가 리키 선배가 추천해준 중화요리집이군요. 트레이너 선생님, 오늘은 여기서 볶음밥을 먹어요!`,
            ],
            `낡고 허름해 보이는 가게로 억지로 끌려 들어갔던 ${me.name}과(와) ${kita.name}은 배가 너무 불러서 벽을 짚으며 기어 나왔다.`,
          ],
          [
            ['에헤헤, 상점가 일을 도와드리고 고깃집 할인권을 받았는데 같이 가실래요?'],
            `기름기가 자르르 흐르는 뜨거운 고기 덮밥을 함께 먹고 나자, ${kita.name}의 기분이 눈에 띄게 좋아졌다.`,
          ],
          [
            [
              `트레이너 선생님! 지난주에 옆 동네에 새로운 돈가스집이 생겼대요.`,
              `거기 양도 엄청나고 하나야마파 오빠들도 극찬한 곳이라는데 우리 꼭 가봐요!`,
            ],
            `추천받은 대로 양이 정말 푸짐한 맛집이었지만, ${kita.name}의 뽈록 튀어나온 배를 보자 ${me.name}의 흐뭇함은 이내 걱정으로 바뀌었다.`,
          ],
        );
        if (love >= 90) {
          buffer.push([
            [
              `오늘은 장어 덮밥이에요…… 헤헤, 트레이너 선생님, 힘내셔야 해요~\n`,
            ],
            `곁에 앉은 ${kita.name}은 ${me.name}의 어깨에 머리를 기대며, ${me.name}이(가) 볼 수 없는 방향으로 수줍은 미소를 지었다.`,
          ]);
        }
        break;
      case 1:
        buffer.push(
          [
            [
              `우와아~ 오늘 상점가에서 암벽 등반 대회가 열리네요~ 트레이너 선생님도 해보고 싶으세요?`,
            ],
            `${me.name}은(는) 멀리서 몸을 풀고 있는 거구의 스모 선수들을 보며, 참가 신청을 하러 달려가려는 ${kita.name}을 겨우 만류했다.`,
          ],
          [
            ['저기가 다이아 짱이 자주 가는 미용실이구나, 헤헤~ 조금 관심 생기네요……'],
            `가게 입구에서 몰래 내부 장식을 살피던 키타산이었지만, 결국 용기를 내지 못하고 발길을 돌렸다.`,
          ],
          [
            [
              `정말 예쁜 기념품 가게네요! 테이오 님이랑 맥퀸 님 굿즈도 있을까요?`,
            ],
            `가게는 좀 낡아 보이지만 ${kita.name}이 무척 흥미로워하므로 함께 둘러보기로 했다.`,
          ],
        );
        if (love >= 90) {
          buffer.push([
            [
              `트레이너 선생님과 그냥 걷기만 해도 마음이 정말 편안해져요~ 룰루랄라~`,
              '트레이너 선생님, 조금만 더 같이 걸어 주시겠어요?',
            ],
            `${me.name}의 팔에 살포시 팔짱을 낀 ${kita.name}은 기분 좋게 기대어 왔다.`,
          ]);
        } else if (love > 75) {
          buffer.push([
            [
              `이 시간대 상점가는 사람이 정말 많아요. 트레이너 선생님, 길 잃어버리지 않게 조심하세요.`,
            ],
            `${me.name}의 손을 꽉 잡은 ${kita.name}은 귀를 쫑긋거리며 검은색 안내견처럼 늠름하게 앞장선다.`,
          ]);
        } else if (love > 50) {
          buffer.push([
            ['트레센 근처에 목장이 있을 줄은 몰랐어요! 다음에 꼭 같이 와요~'],
            `까치발을 들고 울타리 너머를 살피며 ${kita.name}은 신나게 콧노래를 불렀다.`,
          ]);
        }
        break;
      case 2:
        await era.printAndWait([
          me.get_colored_name(),
          '과(와) ',
          kita.get_colored_name(),
          '은 역 근처 백화점에 쇼핑을 하러 왔다. 서로에게 줄 선물을 골라볼까.',
        ]);
    }
    temp = get_random_entry(buffer);
    if (temp) {
      for (const e of temp[0]) {
        await kita.say_and_wait(e);
      }
      await era.printAndWait(temp[1]);
    }
  }

  async out_river(hook) {
    const me = get_chara_talk(0),
      kita = get_chara_talk(68);

    if ((hook.arg = (await select_action_around_river()) > 0)) {
      switch (get_random_value(0, 2)) {
        case 0:
          await kita.say_and_wait(
            `강가 공기가 정말 상쾌하네요! 시원하기도 하고요. 이런 날씨가 달리기에는 최고죠!`,
          );
          break;
        case 1:
          await kita.say_and_wait(
            `강가에 갈대밭이 무성하네요! 꼭 고향에 돌아온 것 같은 기분이에요.`,
          );
          break;
        case 2:
          await kita.say_and_wait(
            `강가를 산책하다 다친 격투가를 만나게 될 줄이야! 운반은 저에게 맡겨주세요!`,
          );
          await kita.say_and_wait(
            `에? 다친 게 아니라 맞아서 쓰러진 것 같다고요? 트레이너 선생님도 참 농담도~ 그냥 평범하게 삔 거예요~`,
          );
          await era.printAndWait(
            `하하 웃어넘기며 ${kita.name}은 거구의 격투가를 업은 채 수 미터 폭의 강을 가볍게 뛰어넘었다.`,
          );
      }
    } else {
      await era.printAndWait(`${kita.name}과 낚시를 하러 가기로 했다……`);
      switch (get_random_value(0, 2)) {
        case 0:
          await kita.say_and_wait(`영차 영차 영차! 이영차~!`);
          await era.printAndWait(
            `그런데 왠지 평범한 민물낚시가 아니라 참치잡이 배에 올라타 참치를 낚고 있다?!`,
          );
          await era.printAndWait(
            `파도가 6미터 높이까지 치솟는 험난한 바다 위에서, ${kita.name}은 초인적인 힘으로 그물을 끌어올리고 있다.`,
          );
          await era.printAndWait(
            `그 압도적인 광경과 몇 달간의 사투는 트레이너의 뇌리에 강렬하게 각인되었다.`,
          );
          break;
        case 1:
          await kita.say_and_wait(
            `또 한 마리 낚았어요! 트레이너 선생님 보셨나요?`,
          );
          await era.printAndWait(
            `"역시 블랙 ${
              kita.sex_code - 1 ? '언니' : '오빠'
            }, 정말 대단해!" 아이들의 천진난만한 찬사가 쏟아진다.`,
          );
          await era.printAndWait(
            `${kita.name}은 신나서 꼬리를 흔들며, 분홍색 어린이용 낚싯대를 물속으로 던졌다.`,
          );
          await kita.say_and_wait(`에헤라디야~ 영차 영차! 이영차 이영차!`);
          await era.printAndWait(
            `고기잡이 노래를 부르는 ${kita.name}의 눈부신 모습이 ${me.name}의 눈에 깊이 새겨졌다.`,
          );
          break;
        case 2:
          await kita.say_and_wait(`음음음~ 룰루랄라~`);
          await era.printAndWait(
            `${kita.name}은 조용히 콧노래를 부르며 물고기가 입질하기를 기다리고 있다.`,
          );
      }
    }
  }

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(68)) {
      return await super.good_night(hook);
    }
    const check = get_custom_check(68).is_want_make_love(),
      me = get_chara_talk(0),
      kita = get_chara_talk(68);
    era.print(`바쁜 하루가 끝나고, ${me.name}은(는) ${kita.name}을 학생 기숙사 앞까지 바래다주었다……`);
    if (check > 0) {
      era.print(
        `${me.name}은(는) 평소처럼 작별 인사를 하려 했지만, 키타산은 왠지 평소와 다르게 당신을 보내주려 하지 않는다.`,
      );
      era.printButton('암시를 받아들인다', 1);
      era.printButton('시치미를 뗀다', 2);
      hook.arg = (await era.input()) === 1;
      if (check === 2) {
        hook.arg = 2;
      }
    } else if (era.get('love:68') >= 50) {
      kita.say(`에헤헤, 트레이너 선생님 내일 봐요!`);
      era.print(
        `그렇게 말하며 ${kita.name}은 ${me.name}에게 몸을 꽉 부비고는 다다다 달려가 버렸다.`,
      );
    } else {
      kita.say(
        `트레이너 선생님, 오늘도 정말 고생 많으셨어요. 내일도 계속 정진할게요.`,
      );
      era.print([
        kita.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '에게 정중히 허리를 굽혀 인사했다. ',
        me.get_colored_name(),
        '은(는) ',
        kita.get_colored_name(),
        '의 머리를 쓰다듬어 주었고, ',
        kita.sex,
        '가 기숙사 안으로 들어가는 것을 확인한 뒤에야 발걸음을 옮겼다.',
      ]);
    }
  }

  async talk() {
    if (!sys_check_awake(68)) {
      return await super.talk();
    }
    const me = get_chara_talk(0);
    let talk_arr;
    switch (era.get('cflag:68:컨디션')) {
      case -2:
        talk_arr = [
          '어라라? 분명 제 장점은 끈기 하나만큼은 자신 있다는 거였는데…… 그렇죠?',
          `죄송해요 트레이너 선생님, 평소에 쓰던 기운이…… 다 사라져버린 것 같아요……`,
        ];
        break;
      case -1:
        talk_arr = ['으음…… 힘이 잘 안 들어가네요. 이상하다……', '저기…… 왠지 머리가 어질어질해요.'];
        break;
      case 0:
        talk_arr = [
          `그 어떤 트레이닝이라도 척척 해결해 보겠어요!`,
          `트레이너 선생님, 트레이닝을 시작해요! 전 이미 준비됐어요!`,
        ];
        break;
      case 1:
        talk_arr = [
          '평소보다 더 혹독한 트레이닝이라도 문제없어요!',
          `저 끈기 하나는 끝내주거든요. 트레이너 선생님, 저를 병기처럼 강력하게 단련시켜 주세요!`,
        ];
        break;
      case 2:
        talk_arr = [
          '후후, 이 기세라면 뭐든지 할 수 있을 것 같아요!',
          `발걸음도 가볍고 머리 회전도 빨라요. 오늘의 키타산은 정말 무적이라니까요!`,
        ];
        break;
    }
    await get_chara_talk(68).say_and_wait(get_random_entry(talk_arr));
  }

  async out_church() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    await era.printAndWait(
      `오늘 ${me.name}은(는) ${kita.name}과 함께 신사에 방문했다. 비록 쉬는 날이지만, ${
        me.name
      }은(는) ${kita.get_uma_sex_title()}의 요청으로 기꺼이 신사 앞까지 동행했다.`,
    );
    await era.printAndWait(
      `의욕 넘치는 담당 우마무스메를 위해서이기도 하고, 다음 레이스의 승리를 기원하는 일인 만큼 조금 피곤해도 감수할 가치가 있다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 그렇게 생각하며 토리이를 지나 ${kita.name}이 안내한 신사 안으로 들어갔다.`,
    );
    era.println();
    era.printButton('「사람이 별로 없네.」', 1);
    await era.input();
    await era.printAndWait(`상당히 오래되어 보이는 이 신사는 현재 무척이나 한산하다.`);
    await era.printAndWait(
      `참배객은 ${me.name}과(와) ${kita.name} 둘뿐인 데다, 신직자나 무녀의 모습조차 보이지 않는다.`,
    );
    await era.printAndWait(`이곳 정말 괜찮은 걸까……? 그런 의문이 가슴 속에서 피어오른다.`);
    await era.printAndWait(
      `${me.name}은(는) 묵묵히 동전을 꺼내 새전함에 던져 넣고는, 두 손을 모아 조용히 기도를 올리는 담당 우마무스메의 뒷모습을 지켜보았다.`,
    );
    if (get_random_value(0, 1)) {
      await kita.say_and_wait(`후와아, 다행이다~`);
      await era.printAndWait(
        `흑발의 ${kita.get_uma_sex_title()}는 길게 숨을 내쉬며 안도하더니, 가슴을 쓸어내리며 태양처럼 찬란한 미소를 지어 보였다.`,
      );
      await kita.say_and_wait(
        `리키 선배가 정말 영험하다고 추천해준 신사라, 방금까진 너무 긴장해서 말도 못 했거든요~`,
      );
      await era.printAndWait(`그것 때문에 계속 조용했던 건가……`);
      await era.printAndWait(`${me.name}은(는) 한숨을 내쉬며 담당 우마무스메의 머리를 가볍게 콩 때렸다.`);
      await era.printAndWait(
        `기분 탓인지 몰라도 ${me.name}은(는) 확실히 몸이 가벼워진 것 같은 느낌을 받았다.`,
      );
      await era.printAndWait(`다음에 또 오자고 ${me.name}은(는) 속으로 생각했다.`);
    } else {
      await kita.say_and_wait(
        `운세가 별로 좋지 않네요…… 하지만 괜찮아요! 리키 선배를 찾아가서 액막이 의식을 부탁하면 되니까요!`,
      );
      await era.printAndWait(
        `언제나처럼 씩씩한 키타산의 모습을 보며 ${me.name}은(는) 묘한 대견함을 느꼈다.`,
      );
      await era.printAndWait(`……하지만, 역시 조금은 신경 쓰이는 모양이다.`);
    }
  }

  async week_start() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0),
      punish_level = era.get('flag:징벌강도');
    await print_event_name('징계 이후', kita);
    if (punish_level === 1) {
      await kita.say_and_wait(`우와아~ 트레이너 선생님이 우마무스메가 됐어요! 너무 귀여워요~`);
      if (kita.sex_code !== 1) {
        await kita.say_and_wait(
          '에헤헤~ 같은 우마무스메끼리니까 예전보다 부끄러움이 덜한 것 같아요~',
        );
      }
      await era.printAndWait([
        me.get_colored_name(),
        '에게 달려들어 친근하게 껑충껑충 뛰는 ',
        kita.get_colored_name(),
        '은 은근히 들뜬 표정으로 웃고 있다.',
      ]);
    } else if (punish_level === 3) {
      await kita.say_and_wait(
        `분명 괴롭힘당하는 걸 즐기는 건 저인 줄 알았는데, 흐흥~ 트레이너 선생님은 저보다 훨씬 더 괴롭힘당하고 싶어 하시는군요?`,
      );
      await era.printAndWait(
        `트레이너의 귓가에 대고 달콤하게 속삭이며, 검은 ${kita.uma_sex_title}는 마치 사냥감을 노리는 듯한 눈빛을 보냈다.`,
      );
    }
  }

  async slave_end() {
    const kita = get_chara_talk(68),
      me = get_chara_talk(0);
    await print_event_name('지옥 같은 엔카 축제', kita);

    await era.printAndWait(`뚜벅, 뚜벅, 뚜벅.`);
    await era.printAndWait(
      `${
        kita.name
      }의 발소리가 평소처럼 정시에 문밖에서 울려 퍼졌고, 동시에 그녀의 명랑한 노랫소리가 들려왔다.`,
    );
    await kita.say_and_wait(
      `트레이너 선생님, 점심 인사드려요! 밥은 잘 챙겨 드셨나요?`,
    );
    await era.printAndWait(
      `미닫이문을 양옆으로 열자, 햇살처럼 따뜻한 미소를 띤 키타산의 모습이 나타났다.`,
    );
    await era.printAndWait(
      `하지만 동시에 그것은 ${me.name}의 최대 채권자인 그녀가 짓는, 지독하게 유쾌하면서도 압박감을 주는 미소였다.`,
    );
    await kita.say_and_wait(
      `우헤헤~ 몇 달만 더 있으면 정상적인 생활로 돌아가서 트레센 학원으로 복귀할 수 있겠어요.`,
    );
    await kita.say_and_wait(
      `이 정도 빚이라서 정말 다행이에요. 저 키타산이 감당할 수 있는 범위 안이라니까요.`,
    );
    await kita.say_and_wait(
      `하지만 앞으로 돈이 필요하면 꼭 저에게 말씀하셔야 해요. 다른 곳에서 빌리는 건 위험하니까요.`,
    );
    await era.printAndWait(
      `미소를 지으며 천천히 ${me.name}의 손을 맞잡는 『대가 없는 친절』 ${kita.name}. 그녀가 짓는 표정은 결코 ${me.name}이(가) 아무런 대가 없이 해피엔딩을 맞이하도록 두지 않을 것임을 암시하고 있었다.`,
    );
  }

  async celebration(hook) {
    const date = (era.get('flag:현재턴수') - 1) % 48;
    if (!celebration_handlers[date]) {
      return await super.celebration(hook);
    }
    await celebration_handlers[date](
      get_chara_talk(this.id),
      get_chara_talk(0),
    );
  }
};