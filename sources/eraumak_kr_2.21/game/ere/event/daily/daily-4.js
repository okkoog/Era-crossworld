/**
 * @file 마루젠스키 - 日常
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const MaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-4');

module.exports = class extends CustomizedDaily {
  select() {
    const zensky = get_chara_talk(4);
    const edu_marks = new MaEduMarks();
    const love = era.get('love:4');
    const buffer = [];
    if (edu_marks.after_recruit > 0) {
      zensky.say(
        `하이~! ${
          era.get('cflag:4:성별') - 1 ? '예쁜이' : '멋쟁이'
        }님, 바로 이 ${zensky.name}란다.`,
      );
      zensky.say(
        `나를 동경해 주는 후배들에게 경기장에서 이 ${era.get('cflag:4:성별') - 1 ? '누나' : '오빠'}의 멋진 뒷모습을 보여주고 싶네.`,
      );
      zensky.say(
        `그나저나, ${
          era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'
        }은 참 귀엽네. 마치 여름날 같은 느낌이야.`,
      );
      edu_marks.after_recruit = 1;
    } else if (edu_marks.get('sister_annoyance') === 1) {
      zensky.say('더욱 성대한 무대 위에서 레이스를 한다니, 기분이 반짝반짝해져♪');
      zensky.say(`무슨 일이 있으면 꼭 이 ${zensky.elder_sibling_sex_title}한테 상담해야 한다?`);
      zensky.say('……우리 사이에 비밀 같은 건 없으면 좋겠는데 말이야.');
      edu_marks.sub('sister_annoyance');
    } else if (edu_marks.get('girls_blue') === 1) {
      zensky.say('무릎이 전보다 더 심하게 아파오네.');
      zensky.say('앞으로 얼마나 더 버틸 수 있을까?');
      zensky.say(
        `적어도, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 한테는 들키면 안 되겠지.`,
      );
      edu_marks.sub('girls_blue');
    } else if (edu_marks.get('true_end')) {
      zensky.say('다시는 후회가 남지 않도록.');
      zensky.say('적어도, 고군분투하며 길을 찾는 후배들에게 참고가 될 만한 방법을 남겨주고 싶어.');
      zensky.say('앞으로도 노력해야겠어!');
      zensky.say('이대로 씽씽하게 Back Step 밟아보자구!');
      edu_marks.sub('true_end');
    } else if (edu_marks.get('good_end')) {
      zensky.say(
        `괴로움도, 고독함도, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}과 함께라면 아무것도 아닌 것 같아.`,
      );
      zensky.say(
        `${zensky.get_uma_sex_title()}의 길에서 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}을 만난 건, 어쩌면 내 평생의 행운일지도 몰라.`,
      );
      zensky.say('지금까지 도와줘서 정말 고마워.');
      zensky.say('앞으로도 함께 힘내는 거다?');
      zensky.say(
        `음, 혹시 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}에게 부담을 준 건 아니겠지?`,
      );
      edu_marks.sub('good_end');
    } else if (edu_marks.get('wind') === 1) {
      zensky.say(
        `앞으로도 잘 부탁해, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}♪`,
      );
    } else if (edu_marks.get('wind') === 5) {
      zensky.say(
        `이거, 이 ${era.get('cflag:4:성별') - 1 ? '예쁜' : '멋진'} 나한테 주는 거니?`,
      );
      zensky.say(
        `그럼 고맙게 받을게, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}♪`,
      );
      zensky.say('후훗~ 정말 예뻐 보이네.');
    } else if (edu_marks.get('wind') === 10) {
      zensky.say(
        '잔디 위를 아무리 달려도, 그때 그 느낌을 찾을 수가 없네. 정말 맥 빠지는 일이야.',
      );
      zensky.say('……');
      zensky.say('바람이 멈췄어.');
    } else if (edu_marks.get('wind') === 15) {
      zensky.say(
        `트레센의 그날 밤, 잔디 위를 달리던 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}들.`,
      );
      zensky.say(
        `나를 지지해 주던 후배들, 그리고 곁에 있는 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}.`,
      );
      zensky.say('진심으로 행복하다고 느꼈어.');
    } else if (edu_marks.get('wind') === 20) {
      zensky.say('하늘, 잔디, 그리고 방황하던 우리들.');
      zensky.say('그리운 습한 여름과 건조한 가을.');
      zensky.say(
        `앞으로도 우리 계속 같이 가는 거야, ${era.get('cflag:0:성별') - 1 ? '트·레·이·너·짱' : '트·레·이·너·군'}♪`,
      );
    } else if (edu_marks.get('Self_contempt')) {
      zensky.say(`왜 그렇게 기운이 없어 보이니?`);
      zensky.say('어서 기운 차리렴!');
      zensky.say(
        `난 언제나 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}을 기다리고 있으니까!`,
      );
    } else if (edu_marks.get('happiness_day')) {
      zensky.say(`파란 하늘, 싱그러운 잔디... 왠지 모르게 그리운 기분이 드네.`);
      zensky.say(
        `어머, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 언제 왔니.`,
      );
      zensky.say('그럼 이 멋진 하루를 함께 즐겨보자구.');
    } else {
      if (era.get('base:4:체력') < era.get('maxbase:4:체력') / 3) {
        buffer.push([
          [
            '이 정도로는 부족해, 넌 더 잘할 수 있을 거야.',
            `어라라. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 부탁이라면 어쩔 수 없네.`,
          ],
          `${zensky.name}가 복잡한 감정이 섞인 눈빛으로 당신을 바라본다.`,
        ]);
      } else {
        buffer.push(
          [
            [
              '달릴 때 얼굴에 와닿는 바람을 느끼는 게 참 좋아.',
              `혹시 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}에게 고민이 있다면 이 ${
                era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
              }한테 말해 보렴.`,
            ],
            `${zensky.name}가 여유로운 미소를 띠며 당신을 바라본다.`,
          ],
          [
            [
              `오늘 훈련 계획은 뭐니? 어떤 것이든 이 ${
                era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
              }가 가볍게 소화해 줄게!`,
            ],
            `어느샌가 주변에 다른 ${zensky.get_uma_sex_title()}들이 모여든다. 이것이 ${
              zensky.name
            }의 매력이겠지.`,
          ],
        );
        if (love >= 75) {
          buffer.push([
            [
              `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 훈련 끝나고 같이 카운타크 타고 드라이브 갈까?`,
              `밤바람을 맞으면 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}도 나도 기분이 최고조로 달아오를 거야!`,
            ],
            `${zensky.name}가 몸을 당신의 팔에 밀착시킨다. 꼬리도 어느샌가 당신의 다리를 감싸고 있다.`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                '음~ 그러고 보니 사계절의 바람은 저마다 느낌이 다르네. 내가 고른다면 역시 봄바람이 제일 좋아.',
                `우리 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 어떤 계절의 바람을 좋아하니?`,
              ],
              `${zensky.name}가 미소를 지으며 당신을 봅니다.`,
            ],
            [
              [
                '"봄에는 마법이 있어. 사람을 『더 나은 자신』으로 만들고 싶게 하는 마법 말이야."',
                `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 어떻게 생각하니?`,
              ],
              `스트레칭을 시작하기 전, ${zensky.name}와 담소를 나누던 도중 ${
                zensky.sex_code - 1 ? '그녀' : '그'
              }가 당신에게 질문을 던졌다.`,
            ],
          );
        } else {
          buffer.push([
            [
              `나를 동경하는 후배들에게 바람의 매력을 전해주는 거야. 희망의 바람의 화신, ${zensky.name} 등장~!`,
              `후훗, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 이 대사 어떠니?`,
            ],
            `미소 짓는 ${zensky.name}. 기분이 좋은지 꼬리를 살랑살랑 흔들고 있다.`,
          ]);
        }
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => zensky.say(e));
      era.print(entry[1]);
    }
  }

  good_morning() {
    const zensky = get_chara_talk(4);
    const love = era.get('love:4'),
      buffer = [];
    if (era.get('base:4:체력') < era.get('maxbase:4:체력') / 3) {
      if (love >= 75) {
        buffer.push([
          ['으음~ 조금만 더 자게 해줘...', '어제 깜빡하고 만화책을 너무 늦게까지 봤어.'],
          `당신은 어쩔 수 없다는 듯 ${zensky.name}를 깨워 전신 거울 앞으로 데려가 ${
            zensky.sex_code - 1 ? '그녀' : '그'
          }의 머리를 빗겨주었다.`,
        ]);
      } else {
        buffer.push([
          ['아이구... 이런 모습은 후배들한테 보여줄 수 없는데 말이야.'],
          `${zensky.name}가 무척 졸려 보이는 표정이다.`,
        ]);
      }
    } else {
      buffer.push(
        [
          [
            '오늘 훈련 계획은 뭐니?',
            `이 ${era.get('cflag:4:성별') - 1 ? '예쁜이' : '멋쟁이'}는 준비 완료란다!`,
          ],
          `${zensky.name}가 의욕이 넘치는 모습다.`,
        ],
        [
          [
            '잔디 위를 달리는 기분은 정말 상쾌해.',
            `어머, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이었구나.`,
          ],
          `당신이 시간에 맞춰 코스에 도착했을 때, ${zensky.name}는 이미 몇 바퀴나 돌고 있었다.`,
        ],
      );
      if (love >= 75) {
        buffer.push([
          [
            `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 방가방가~⭐`,
            '…… 왜 옆방까지 와서 깨우냐구?',
            `이렇게 상냥한 ${
              era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
            }가 깨워주는 건 정말 행복한 일이 아니니?`,
          ],
          `${zensky.name}가 당신의 이불을 걷어차며 얼른 씻으라고 재촉한다.`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [
              `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}에게는 아직 깨어나지 않은 잠재력이 있는 것 같아.`,
              '아직은 미약하게 느껴지지만, 곧 나타나게 될 거야.',
            ],
            `${zensky.name}가 생각에 잠긴 듯 당신을 유심히 살핀다.`,
          ],
          [
            [
              `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 고민이 있다면 이 ${
                era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
              }한테 털어놓으렴.`,
              '혼자 끙끙 앓다 보면, 만능 열쇠라도 녹슨 자물쇠에는 들어가지 않게 되니까.',
            ],
            `${zensky.name}가 걱정스러운 눈빛으로 당신을 바라본다.`,
          ],
        );
      } else {
        buffer.push([
          [
            '전력으로 달릴 때 가끔 이상한 느낌이 들어. 마치 잔디 위를 둥둥 떠다니는 기분이랄까.',
            `……아, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 좋은 아침.`,
          ],
          `잔디 위를 달리던 ${zensky.name}가 생각에 잠겨 있다.`,
        ]);
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => zensky.say(e));
      era.print(entry[1]);
    }
  }

  async talk() {
    const zensky = get_chara_talk(4);
    let talk_arr;
    switch (era.get('cflag:4:컨디션')) {
      case -2:
        talk_arr = [
          '손가락에 왜 반창고를 붙였냐구? 어라라. 오늘 아침에 직접 아침밥을 하려다가 음악 소리에 취해서 그만 손가락을 살짝 베었지 뭐야…… 아하하, 정말 괜찮아.',
          `왜 오늘 이렇게 늦게 왔냐구? 머리도 엉망이고……? 아침에 일어나다가 그만 종이 상자를 건드려서 내용물이 쏟아지는 바람에, 그거 정리하느라 늦어버렸어. 하지만 괜찮아! 자, 오늘 훈련은 뭐니?`,
        ];
        break;
      case -1:
        talk_arr = [
          `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 이 휴대폰 어떻게 켜는지 좀 봐줄래? 어머? 이렇게 간단한 거였어?`,
          `어제 만화책 보다가 그만 푹 빠져버렸지 뭐야. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 미안해~`,
        ];
        break;
      case 0:
        talk_arr = [
          [
            `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 오늘 스케줄은 어떻게 되니?`,
            `혹시 무슨 고민이라도 있으면 나한테 털어놓으렴. 이 ${
              era.get('cflag:4:성별') - 1 ? '예쁜이' : '멋쟁이'
            }는 언제든 환영이니까♪`,
          ],
        ];
        break;
      case 1:
        talk_arr = [
          `오늘 상태 좋은걸! ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 보기엔 어때?`,
          `노력하는 아이들이 내 뒷모습을 보고, 바람을 가르는 즐거움을 함께 쫓아와 줬으면 좋겠어.`,
          `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 훈련 끝나고 같이 주스 마시러 갈래?`,
        ];
        break;
      case 2:
        talk_arr = [
          `하이~! ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 뜨거운 열정이 여기까지 느껴지는데♪`,
          `컨디션 최고! ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 내가 지난번 기록을 깨는 걸 여기서 지켜봐 줘♪`,
          `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 마음속에 숨겨진 열정을 내가 불태워줄게. Let's go!`,
        ];
        break;
    }
    if (
      // 봄
      era.get('flag:현재월') === 3 ||
      era.get('flag:현재월') === 4 ||
      era.get('flag:현재월') === 5
    )
      talk_arr.push(
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 봄바람의 기운이 느껴지니? 대지의 속박을 풀고 하늘에서 자유롭게 노니는 봄바람 말이야.`,
        `귀여운 후배들이 마치 봄에 핀 꽃들처럼 향기를 내뿜고 있어. 그들의 향기가 세상 구석구석까지 퍼져 나갔으면 좋겠네.`,
      );
    if (
      // 여름
      era.get('flag:현재월') === 6 ||
      era.get('flag:현재월') === 7 ||
      era.get('flag:현재월') === 8
    )
      talk_arr.push(
        '사계절 중에서 내가 가장 끌리는 건 여름이야. 밤 기온이 딱 적당할 때 카운타크와 함께 자유롭게 달리면, 나 자신도 여름 바람과 하나가 된 기분이거든.',
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 오늘 밤에 시간 있니? 훈련 끝나고 같이 바다에 가지 않을래? 눅눅한 바닷바람이 짜증 나는 건조함을 날려줄 거야. 달빛 아래에서 몸과 마음이 씻겨 내려가는 기분이라구.`,
      );
    if (
      // 가을
      era.get('flag:현재월') === 9 ||
      era.get('flag:현재월') === 10 ||
      era.get('flag:현재월') === 11
    )
      talk_arr.push(
        '음~ 벌써 가을이네. 가을은 왠지 이대로 잠들고 싶어지는 공기가 있어. 훈련 끝나고 트레이닝실에서 조금 쉬어도 될까?' +
          `식욕의 가을, 독서의 가을... 가을은 참 감수성이 풍부해지는 계절이야. 여름의 습기와 열정도 가을이 오면 서서히 물러가네.`,
      );
    if (
      // 겨울
      era.get('flag:현재월') === 12 ||
      era.get('flag:현재월') === 1 ||
      era.get('flag:현재월') === 2
    )
      talk_arr.push(
        '만물이 안식에 든 겨울, 오직 바람의 정령만이 이 하얀 대지 위에서 춤을 추고 있어. 후배들도 잔디 위를 마음껏 달리고 싶어 하는 모양이야.',
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 몸이 참 따뜻해 보이네. 이따 훈련 끝나고 상점가에 가서 따뜻한 음료라도 마실까?`,
      );
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const zensky = get_chara_talk(4);
    const talk_arr = [
      `이 인형 나한테 주는 거니? ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 고마워.`,
      `내가 제일 좋아하는 코코넛 음료네! 고마워, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}.`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `이거 답례를 고민해야겠는걸? 가만있을 수 없지. 오늘 밤엔 이 ${
          era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
        }의 손맛을 보여줄게!`,
        `뭐?! 샴페인 잔에 장식한 과일 초콜릿은 어떠냐고? ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 가끔 참 기발한 생각을 한단 말이야…… 조만간 한번 해볼까?`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_cook() {
    const zensky = get_chara_talk(4);
    const talk_arr = [
      '정말 그리운 냄새네. 그럼 사양 않고 잘 먹을게?',
      `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 그냥 여기 앉아서 내가 요리하는 거 구경이나 하렴…… 어머? 나랑 같이 요리하고 싶어?`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 이 오므라이스, 맛이 어떤지 좀 볼래? 어때, 맛있지? ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 행복한 미소를 보니까 나도 벌써 배가 부른 것 같아.`,
        `이 ${
          era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
        }를 위해 밥을 해주고 싶다니…… 어머나, 이게 바로 행복의 맛인가 봐. 내 심장이 지금 (DokiDoki 멈추질 않아♪`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_study() {
    const zensky = get_chara_talk(4);
    const talk_arr = [
      '여러 레이스에 나가려면 다양한 주법을 익히는 것도 중요해…… 아예 파워 슬라이드 주법을 시도해 볼까?',
      '남이 이끄는 위치보다, 이렇게 단숨에 골라인을 끊는 짜릿함이 최고지♪',
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        '역대 중상 레이스 영상을 보면서 도주 주법의 핵심을 분석하고 자신을 더 끌어올려 보자.',
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 지도 덕분에 이 ${
          era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
        }도 크게 성장했어. 정말 대단해!`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_rest() {
    const zensky = get_chara_talk(4);
    const talk_arr = [
      `모처럼의 휴식 시간인데, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 나랑 같이 최신 유행 잡지라도 볼래?`,
      `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 고생 많았어. 아, 미안해. 나도 모르게 머리를 쓰다듬어 버렸네.`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 조금만 더 안고 있어도 될까? 너한테선 항상 따스한 기운이 느껴져.`,
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 매일 고생하네. 내가 도와줄 수 있는 건 없을까? 아니면 지난번처럼 내 가슴에 머리를 묻고 쉴래?`,
        '착하지, 착해. 매일 그렇게 지쳐서 어떡하니. 내 품에서 조금 쉬렴.',
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_prepare() {
    const zensky = get_chara_talk(4);
    const talk_arr = [
      '후배들에게 내 멋진 모습을 보여주지 않으면 안 되겠지.',
      `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 조수석에서 바람의 춤을 제대로 느껴보라구.`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}에게서 전달받은 이 열정의 불꽃을 후배들에게 보여주자.`,
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 조금만 더 꽉 안아봐도 될까? 에이, 안 된다구? 치사해라~`,
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async office_game() {
    const zensky = get_chara_talk(4);
    const talk_arr = [
      `이 ${
        era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
      }가 게임 쪽에는 영 젬병이라 말이야. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 추천할 만한 게임 있니?`,
      `트레이닝실에 이렇게 앉아 있는 것보다 밖에서 훈련하는 게…… 내 수영복 차림이 보고 싶다구? ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 정말 야하네. 그때까지 얌전히 기대하고 있으렴♪`,
    ];
    if (era.get('love:4') >= 75) {
      talk_arr.push(
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 『가을의 추억』이란 게임 들어봤니? 나도 해본 적은 없지만, 이번 기회에 같이 해보자!`,
        '그 여름날의 산들바람을 다시 느끼고 싶네. 그 마을에서 소년과 소녀가 처음 만났을 때처럼 말이야.',
      );
    }
    await zensky.say_and_wait(get_random_entry(talk_arr));
  }

  async out_church() {
    const zensky = get_chara_talk(4);
    const love = era.get('love:4'),
      chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342);
    chara340_talk.name = '용기의 여신';
    chara341_talk.name = '사랑의 여신';
    chara342_talk.name = '규율의 여신';
    await zensky.say_and_wait(
      `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 목적지에 도착했어.`,
    );
    await era.printAndWait(`어느 휴일, 당신들은 신사에 참배하러 가기로 했다.`);
    await era.printAndWait(
      `전설에 따르면 세 여신이 지상에 내려왔을 때 이곳의 샘물을 마셨고, 그 산속 시냇물이 ${
        zensky.sex_code - 1 ? '그녀' : '그'
      }의 축복을 받았다고 합다.`,
    );
    await era.printAndWait(
      `고대 사람들은 그 시냇가 주변에 신사를 지었고, 이곳을 찾는 사람들은 성공이나 사랑의 성취를 기원하게 되었다.`,
    );
    await zensky.say_and_wait(
      `신사에 걸린 방울이 울리면, 간절히 기도하는 사람에게 세 여신의 축복이 내린다는 소문이 있더라구. 이 ${
        zensky.sex_code - 1 ? '예쁜이' : '멋쟁이'
      }도 한번 해보고 싶네.`,
    );
    await era.printAndWait(
      `일찍 도착했지만, 앞에는 듬성듬성한 인파와 캠핑용 텐트가 보인다.`,
    );
    await era.printAndWait(`아마 많은 사람이 어젯밤부터 여기서 기다린 모양이다.`);
    era.printButton(`그럼 우리도 얼른 줄을 서자`, 1);
    await era.input();
    await era.printAndWait(
      `참배객들은 새치기로 소란을 피워 세 여신을 노하게 하고 싶지 않은 듯, 줄은 아주 질서정연했다.`,
    );
    await era.printAndWait(`토리이를 지나 세 여신의 신사 안으로 들어섰다.`);
    await era.printAndWait(
      `당신은 앞사람들을 따라 새전함에 동전 몇 개를 던지고, 손뼉을 친 뒤 두 손을 모아 눈을 감고 기도를 시작했다.`,
    );
    await zensky.say_and_wait(`……`);
    await era.printAndWait(
      `살며시 마루젠스키를 훔쳐보니, ${zensky.sex_code - 1 ? '그녀' : '그'}의 입술이 미세하게 달싹이며 무언가 나직이 읊조리는 듯하다.`,
    );
    if (get_random_value(0, 1)) {
      await era.printAndWait(`한참을 기다려도 방울 소리는 들리지 않는 것 같다.`);
      await zensky.say_and_wait(`정말 아쉽네.`);
      await era.printAndWait(
        `${zensky.name}는 무척 중요한 소원을 빌었는지, 귀를 축 늘어뜨린 채 아주 아쉬운 표정을 짓고 있다.`,
      );
      era.printButton(`${zensky.sex_code - 1 ? '그녀' : '그'}의 손을 잡는다`, 1);
      await era.input();
      await era.printAndWait(
        `당신은 ${zensky.sex_code - 1 ? '그녀' : '그'}의 손을 꼭 잡았다.`,
      );
      await zensky.say_and_wait(
        `……${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 고마워.`,
      );
      await zensky.say_and_wait(`그럼 카운타크랑 같이 드라이브하면서 기분 전환이나 할까!`);
      await era.printAndWait(`그 후, 당신은 몽롱한 의식 속에서 세 여신의 미소를 본 듯한 기분이 들었다.`);
    } else {
      switch (get_random_value(0, 2)) {
        case 0:
          await chara340_talk.say_and_wait('힘내렴, 아이들아.');
          break;
        case 1:
          await chara341_talk.say_and_wait('나의 사랑스러운 아이들아, 부디 행복해지길.');
          break;
        case 2:
          await chara342_talk.say_and_wait('달리렴, 희망은 그 질주의 끝에 있단다.');
      }
      await era.printAndWait(`딸랑딸랑~`);
      await era.printAndWait(`세 여신의 속삭임이 들린 것 같다.`);
      await era.printAndWait(`당신은 몰래 눈을 떠 ${zensky.name} 쪽을 훔쳐보았다.`);
      await zensky.say_and_wait(`……세 여신님, 감사합니다.`);
      await era.printAndWait(
        `기원하던 일이 긍정적인 답을 얻었는지, ${zensky.name}가 홀가분한 미소를 지었다.`,
      );
      await zensky.say_and_wait(
        `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}`,
      );
      await era.printAndWait(`${zensky.name}가 토리이를 나서기 전 발걸음을 멈췄다.`);
      if (love >= 90) {
        await era.printAndWait(
          `메마른 입술이 다른 입술에 의해 포개어지고, 당신은 저도 모르게 ${
            zensky.sex_code - 1 ? '그녀' : '그'
          }의 가냘픈 몸을 껴안았다.`,
        );
        await era.printAndWait(`이 순간, 고동치는 두 심장이 마침내 하나로 이어졌다.`);
        await era.printAndWait(
          `시간, 명예, 그리고 눈앞의 인물 이외의 모든 것은 이제 상관없어졌다.`,
        );
        await era.printAndWait(`지금 이 순간은 그저 이 온기 속에 잠기고 싶을 뿐이다.`);
        await era.printAndWait(
          `숨이 가빠질 때까지, 바람 속에서 춤추던 두 사람은 아쉬운 듯 입술을 뗐다.`,
        );
        await zensky.say_and_wait(
          `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 어쩌면 네가 바로... 아니, 네가 바로 내가 줄곧 찾아 헤매던 그 불꽃이었나 봐.`,
        );
        await era.printAndWait(
          `${zensky.name}가 당신의 손을 꽉 쥐었고, 당신은 그 통증을 묵묵히 받아들였다.`,
        );
        await era.printAndWait(`그리고 두 사람은 다시 한번 서로를 탐닉했다.`);
        await era.printAndWait(`불꽃은 결국 그 건조함을 이겨냈다.`);
      } else {
        await era.printAndWait(
          `무언가 촉촉한 기운이 느껴지고, ${zensky.name}는 뒤돌아서며 가슴속의 두근거림을 억누르려 애쓴다.`,
        );
        await era.printAndWait(`미묘한 감정을 품은 채 당신들은 학원으로 돌아왔다.`);
      }
    }
  }

  async out_shopping(hook) {
    const zensky = get_chara_talk(4);
    const love = era.get('love:4');
    const buffer = [];
    let temp;
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 2)) {
          case 0:
            await zensky.say_and_wait(
              `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}도 같이 춤추자!`,
            );
            await era.printAndWait(
              `마루젠스키는 댄스 머신이 처음이었지만, 유연한 몸과 타고난 리듬감으로 순식간에 게임의 규칙을 익혔다.`,
            );
            break;
          case 1:
            await zensky.say_and_wait(`다음엔 저기 있는 오락거리들을 해볼까?`);
            await era.printAndWait(
              `${zensky.name}은(는) 새로운 장난감을 발견한 아이처럼 눈을 반짝인다.`,
            );
            break;
          case 2:
            await zensky.say_and_wait(`이렇게 열심인 트레이너는 정말 귀엽단 말이야.`, true);
            await era.printAndWait(
              `${zensky.name}가 인형 뽑기 기계 앞에서 긴장한 당신의 모습을 미소 띠며 지켜봤다.`,
            );
            break;
        }
        break;
      case 1:
        await zensky.say_and_wait(
          `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}도 운을 한번 시험해 볼래?`,
        );
        await era.printAndWait(`${zensky.name}가 상점가 근처의 경품 추첨기를 가리킨다.`);
        switch (get_random_value(0, 4)) {
          case 0:
            await zensky.say_and_wait(`괜찮아, 다음 기회가 또 있잖아.`);
            await era.printAndWait(`곽티슈를 뽑고 낙담한 당신을 ${zensky.name}가 위로했다.`);
            break;
          case 1:
            await zensky.say_and_wait(`저녁은 당근 요리로 결정이네!`);
            await era.printAndWait(`${zensky.name}가 뽑힌 당근을 보며 말했다.`);
            break;
          case 2:
            await zensky.say_and_wait(
              `음, 당근이 이렇게 많으면 트레이닝실에서 파티라도 열어야겠어.`,
            );
            await era.printAndWait(
              `그 후 ${zensky.name}는 스페짱 일행을 트레이닝실로 초대해 당근 성찬을 즐겼다.`,
            );
            break;
          case 3:
            await zensky.say_and_wait(`대박! 당근 햄버거 세트야!`);
            await era.printAndWait(
              `그날 저녁, 당신과 ${zensky.name}는 행운의 결과물을 함께 즐겼다.`,
            );
            break;
          case 4:
            await era.printAndWait(`딸랑딸랑~`);
            await zensky.say_and_wait(`!`, true);
            await era.printAndWait(`추첨기 옆 직원이 외쳤다. 「축하합니다! 당첨이에요!」`);
            await era.printAndWait(`온천 여행권을 뽑은 당신을 ${zensky.name}가 바라본다.`);
            await zensky.say_and_wait(
              `운이 정말 좋네! 나중에 시간 내서 같이 온천 가자.`,
            );
            await era.printAndWait(`두 사람은 아주 좋은 기분으로 트레이닝실로 돌아갔다.`);
            break;
        }
        break;
      case 2:
        await zensky.say_and_wait(
          `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 이 최신 유행곡 한번 들어볼래?`,
        );
        await era.printAndWait(
          `${zensky.name}는아주 향수 어린 노래를 선곡했고, 당신은 묘한 그리움에 젖어든다.`,
        );
        break;
      case 3:
        buffer.push(
          [
            [
              `요즘 상영하는 로맨틱 코미디가 그렇게 유명하다는데, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 같이 보러 갈래?`,
            ],
            `${zensky.name}가 추천 영화 목록에 있는 『10대 고전 명작 재상영 』을 가리켰다.`,
          ],
          [
            `자극적인 액션 영화 보고 싶니? 쾅쾅 터지는 그런 느낌 말이야!`,
            `당신들은 최신 개봉 영화에 대해 이야기를 나눴다.`,
          ],
          [
            [
              `트, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}... 나 안 되겠어, 다리가 아직도 후들거려.`,
            ],
            `호기심에 공포 영화를 시도한 두 사람은 서로를 지탱하며 상영관을 빠져나왔다.`,
          ],
        );
        if (love >= 75) {
          buffer.push([
            [`음…… 오늘은 역시 로맨틱 코미디를 보자.`],
            `바보 커플은 영화가 절정에 달했을 때 주인공들처럼 서로 입을 맞췄다.`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}은 결국 따스함이니, 아니면 건조함이니?`,
              ],
              `졸음이 쏟아지는 지루한 영화 도중, ${zensky.name}가 갑자기 혼잣말을 중얼거렸다.`,
            ],
            [
              [`은행잎이 떨어지기 시작하는 가을보다는 역시 습한 여름이 더 좋아.`],
              `${zensky.name}가 영화 포스터를 보며 혼잣말을 했다.`,
            ],
          );
        }
        temp = get_random_entry(buffer);
        for (const e of temp[0]) {
          await zensky.say_and_wait(e);
        }
        await era.printAndWait(temp[1]);
        break;
    }
  }

  async out_station(hook) {
    const zensky = get_chara_talk(4);
    const me = get_chara_talk(0);
    hook.arg = await select_action_in_station(4);
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 1)) {
          case 0:
            await zensky.say_and_wait(
              `이 근처에 평판 좋은 디저트 가게가 있대. 우리 같이 먹으러 가자.`,
            );
            break;
          case 1:
            await zensky.say_and_wait(`과일 파르페 하나 더 추가♪`);
            await me.say_and_wait(`그렇게 많이 먹어도 괜찮겠어?`);
            await era.printAndWait(`당신은 ${zensky.name}의 위장이 버텨낼 수 있을지 걱정이 된다.`);
            await zensky.say_and_wait(
              `걱정 마, 여자애들한테는 디저트 배가 따로 있는 법이라구⭐`,
            );
            await zensky.say_and_wait(
              `${zensky.name}는 과일 파르페를 크게 한 입씩 떠먹었다.`,
            );
            break;
        }
        break;
      case 1:
        switch (get_random_value(0, 1)) {
          case 0:
            await zensky.say_and_wait(
              `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 손은 참 따뜻하네.`,
            );
            await era.printAndWait(`당신에게 있어 ${zensky.name}는 어떤 존재일까?`);
            break;
          case 1:
            await zensky.say_and_wait(
              `비록 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}이 계속 나한테 의지해 줬으면 좋겠지만 말이야.`,
            );
            break;
        }
        break;
      case 2: // 쇼핑몰 구경
        switch (get_random_value(0, 1)) {
          case 0:
            await zensky.say_and_wait(
              `${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}, 사고 싶은 거라도 있니?`,
            );
            break;
          case 1:
            await zensky.say_and_wait(
              `이 근처에 새로 디저트 가게가 생겼대. 나중에 꼭 한번 와보자.`,
            );
            break;
        }
        break;
    }
  }

  async out_river(hook) {
    const zensky = get_chara_talk(4);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      switch (get_random_value(0, 1)) {
        case 0: // 산책
          await zensky.say_and_wait(
            `강변 공기가 참 신선하네. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}도 기분이 좋아지지 않니?`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `강변에서 노래 연습을 하는 후배의 열정을 보고 있으니 내 기분까지 아주 즐거워지네.`,
          );
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0: // 낚시
          await zensky.say_and_wait(
            `으음, 이 ${
              era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
            }는 낚시에는 소질이 없나 봐. ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'} 한테 맡겨도 될까?`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `후훗, ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}의 진지한 모습을 보고 있으니 나도 기쁘네.`,
          );
      }
    }
  }

  async school_atrium(hook) {
    const zensky = get_chara_talk(4);
    hook.arg = (await select_action_in_atrium()) === 0;
    if (hook.arg) {
      switch (get_random_value(0, 1)) {
        case 0:
          await zensky.say_and_wait(
            `고민되는 일? 후훗, 이 ${
              era.get('cflag:4:성별') - 1 ? '누나' : '오빠'
            }는 아직 딱히 없단다.`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `나의 달리기가 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}들에게 희망을 줄까, 아니면 더 깊은 절망을 줄까…… 아냐아냐, 아무것도 아냐⭐`,
          );
          break;
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0:
          await zensky.say_and_wait(
            `나도 막 도착한 참이야. 얼마 안 기다려서 ${era.get('cflag:0:성별') - 1 ? '트레이너 짱' : '트레이너 군'}을 만났네.`,
          );
          break;
        case 1:
          await zensky.say_and_wait(
            `직접 만든 도시락을 준비했어. 피크닉 기분 내면서 한번 먹어볼래?♪`,
          );
          break;
      }
    }
  }

  async school_rooftop() {
    const zensky = get_chara_talk(4);
    if (Math.random() < 0.5) {
      await zensky.say_and_wait(`옥상에서 도시락을 먹으니까 마음도 바람처럼 자유로워지는 것 같아.`);
    } else {
      await zensky.say_and_wait(
        `이렇게 멍하니 머리를 비우고, 포근한 햇살 아래에서 산들바람이 되어 춤추는 상상을 하면 기분도 들뜨게 돼.`,
      );
    }
  }
};