/**
 * @file 스마트 팔콘 - 日常
 *
 * @author 黑奴一号
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const { say_by_passer_by } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const FalconEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-46');

module.exports = class extends CustomizedDaily {
  select() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    let temp;
    const love = era.get('love:46'),
      me = get_chara_talk(0),
      buffer = [];
    if ((temp = new FalconEduMarks()).after_recruit) {
      falcon.say(
        `하나, 둘, 목·표·는! 톱 우마돌⭐`,
      );
      falcon.say(`가장 크고 빛나는 스테이지 중앙을 향해 단숨에 돌진♪`);
      falcon.say(`팔코는 바로 그런 ${falcon.uma_sex_title}야!`);
      falcon.say(
        `지금은 아직 어디에나 있을 법한 평범한 우마돌이지만. 하·지·만, 팔코가 무대 중앙에 서기만 하면, 팔코는 모든 관객의 시선을 사로잡을 수 있어!`,
      );
      falcon.say(`그러면 팔코의 팬들도 화악~ 하고 단숨에 늘어나겠지?`);
      falcon.say(
        `팬 수가 계속 늘어나면, 팔코가 톱 우마돌이 되겠다는 목표도 단숨에 이루어질 거야!`,
      );
      falcon.say(`팬 1호 님, 앞으로도 잘 부탁해⭐`);
      temp.after_recruit--;
    } else {
      if (era.get('base:46:체력') < era.get('maxbase:46:체력') / 3) {
        buffer.push([
          [
            '으으, 조금 지치네.',
            '기운 내자! 팔코는 팬들의 기대에 부응해야만 해!',
            '팔코, 화이팅!',
          ],
          `억지로 기운을 내는 ${falcon.name}이, 약간 피곤한 기색으로 ${me.name}을(를) 바라보았다.`,
        ]);
      } else {
        buffer.push(
          [
            [
              `팬들의 기대에 부응하지 못하는 건 합격점인 우마돌이 아니야!`,
              `트레이너 ${me.get_adult_sex_title()}, 오늘의 트레이닝 계획은 뭐야?`,
            ],
            `일찍 트레이닝실에 도착한 ${falcon.name}이 ${me.name}의 지시를 기다리고 있었다.`,
          ],
          [
            [
              `……휴우. 체력도 회복됐고, 이제 무대에서 팔코의 공연을 기다리는 팬들에게 보여줄 차례야.`,
              `……에헤? 우마돌 활동을 너무 늦게까지 하느라 통금 시간에 늦을 뻔해서, 이번 달에만 트레이너 ${me.get_adult_sex_title()}이(가) 타즈나 씨한테 세 번이나 혼났다고?`,
              `으음~ 그렇구나. 그럼 오늘의 라이브는 꼭 시간을 조절해야겠네!`,
            ],
            `그 후 강변에서 열린 게릴라 라이브는 또다시 통금 직전까지 이어지고 말았다.`,
          ],
        );
        // 호감도 100 암시 스토리
        if (love === 100) {
          buffer.push([
            [
              `${callname}을 만날 수 있어서 정말 다행이야!`,
              `팔코는 지금 우마돌의 위치에 있지만…… 우마돌이니까 팬 1호에게는 조금 특별한 서비스를 해줘도 괜찮겠지?`,
              `톱 우마돌로 향하는 길 위에서, 앞으로도 팬 1호인 ${callname}이 팔코와 함께 노력해주길 바라⭐`,
            ],
            `${falcon.name}은 ${me.name}이(가) 트레이닝실에 들어오는 순간 ${me.name}을(를) 꽉 껴안았다.`,
          ]);
        } else if (love > 90) {
          buffer.push([
            [
              `에? ${callname}은 여기를 어떻게 안 거야?`,
              `……물어볼 필요도 없겠네. ${callname} 이라면, 분명 올 거라고 생각했어.`,
              `……꿈에 그리던 큰 무대에 다가가고 있는데, 왜 팔코는 조금도 즐겁지 않은 걸까?`,
            ],
            `이전의 활기찬 ${falcon.name}과는 대조적으로, 팔코는 고민에 빠져 있었다.`,
          ]);
        } else if (love >= 75) {
          buffer.push([
            [
              `요즘 거리 공연을 할 때마다 팬들이 점점 늘어나는 것 같아. 팔코가 톱 우마돌이 될 날도 머지않은 것 같네.`,
              `……하지만, ${me.name}에게라면 조금 약한 소리를 해도 괜찮을까?`,
              `……안무를 틀리면, 팬들이 팔코에게 실망할까?`,
            ],
            `팔코의 우마돌로서의 고충이 느껴졌다.`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `${me.name}!`,
                `팔코는 트레이닝실에서 계속 ${me.name}을 기다리고 있었어!`,
                `오늘 트레이닝도 힘내자!`,
              ],
              `생각한 것을 바로 실천에 옮기는 ${falcon.name}이 오늘도 ${me.name}이(가) 오기를 기다리고 있었다.`,
            ],
            [
              [
                `오늘의 땀방울이 내일의 가장 빛나는 별이 될 거야.`,
                `무대 중앙에 설 수 있는 톱 우마돌이 되기 위해서, 팔코는 조금 더 노력해야 해!`,
                `좋아! 지금부터 트레이닝 시작!`,
              ],
              `${falcon.name}이 훈련장에서 ${me.name}의 지시를 기다리고 있었다.`,
            ],
          );
        } else {
          buffer.push([
            [
              `트레이닝 끝난 뒤 휴식 시간에는 뭘 하면 좋을까?`,
              `우마돌 스킬을 공부하러 갈까, 아니면 어제 새로 배운 춤을 연습해볼까?`,
              `어느 쪽이 더 좋을까. 우으~ 팔코가 두 명이라면 좋을 텐데.`,
            ],
            `트레이닝 중에 딴생각을 해서는 톱 우마돌이 될 수 없긴 한데...`,
          ]);
        }
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => falcon.say(e));
      era.print(entry[1]);
    }
  }

  good_morning() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const love = era.get('love:46'),
      me = get_chara_talk(0),
      buffer = [];
    if (era.get('base:46:체력') < era.get('maxbase:46:체력') / 3) {
      if (love >= 75) {
        buffer.push([
          [
            `하아암~ 아침엔 정말 졸리네.`,
            '어제 라이브를 하다가 나도 모르게 너무 늦게까지 노래했나 봐.',
            `오늘 트레이닝은 조금 미뤄도 될까?`,
          ],
          `${me.name}은(는) 팔코를 자신의 허벅지에 기대게 하여 ${falcon.sex}가 소파에서 조금이라도 편하게 잘 수 있도록 해주었다.`,
        ]);
      } else {
        buffer.push([
          [
            `이 정도쯤이야, 우마돌인 팔코는 문제없어⭐`,
          ],
          `말은 그렇게 해도 비틀거리는 몸은 ${falcon.sex}를 속이지 못했다. 하는 수 없이 ${me.name}은(는) ${falcon.sex}를 소파에서 잠시 자게 했다.`,
        ]);
      }
    } else {
      buffer.push(
        [
          [`${callname}, 팔코는 이미 준비 끝났어!`],
          `의욕에 찬 팔코의 상태는 매우 좋아 보였다.`,
        ],
        [
          [
            '모래밭에서 달리는 묵직한 느낌은 귀여운 팔코랑은 조금 안 어울리는 것 같기도……',
            `강인한 팔코도 귀여워? 역시 팬 1호인 ${callname}이야! 일상 트레이닝에서도 팔코는 반짝반짝 빛날 거야!`,
          ],
          `고민을 해결하고 귀여운 미소를 지은 팔코가 다시 트레이닝 열의를 불태웠다.`,
        ],
      );
      // 호감도 100 암시 스토리
      if (love === 100) {
        buffer.push([
          [
            `자기, 안녕! 오늘은 뭘 할 거야?`,
            `우마돌로서도 평범한 ${falcon.uma_sex_title}로서도, 트레이너 ${me.get_adult_sex_title()}을(를) 만날 수 있어서 둥둥 떠다니는 것 같던 팔코의 세계도 서서히 실감이 나기 시작했어.`,
          ],
          `아침 일찍부터 ${falcon.name}이 활기차게 ${callname}에게 아침 인사를 건넸다.`,
        ]);
      } else if (love >= 75) {
        buffer.push([
          [
            `${callname}, 좋은 아침⭐`,
            `우마돌인 팔코는 오늘도 열심히 빛날 거야!`,
            `그러니까 팬 1호인 ${callname}도 앞으로 노력하는 팔코를 잘 지켜봐 줘!`,
          ],
          `${me.name}의 주변을 맴돌며 떠들썩하게 구는 팔코의 모습이 주변 사람들의 시선을 끌었다.`,
        ]);
      } else if (love >= 50) {
        buffer.push(
          [
            [
              `플래시 씨는 마치 걸어 다니는 계획표 같네.`,
              `팔코도 플래시 씨처럼 일을 척척 처리할 수 있다면 고민이 이렇게 많지는 않을 텐데.`,
            ],
            `트레이닝실에서 팔코가 ${me.name}에게 말을 걸었다.`,
          ],
          [
            [
              `우마돌의 길은 언제나 고난과 고통으로 가득 차 있구나.`,
              '팔코도 가끔은 내가 계속 계속해 나갈 수 있을지 잘 모르겠어.',
            ],
            `트레이닝실에서 팔코와 잡담을 나누던 중, ${falcon.sex}가 ${me.name}에게 고민을 털어놓았다.`,
          ],
        );
      } else {
        buffer.push([
          [
            `${callname}, 좋은 아침!`,
            `어젯밤엔 잘 잤어? 오늘도 빛나는 팔코를 보면서 꼭 웃어줘야 해.`,
          ],
          `트레센으로 가는 길에 우연히 ${falcon.name}을 만나 함께 나란히 걸어갔다.`,
        ]);
      }
      const entry = get_random_entry(buffer);
      entry[0].forEach((e) => falcon.say(e));
      era.print(entry[1]);
    }
  }

  async talk() {
    const falcon = get_chara_talk(46);
    let talk_arr;
    const me = get_chara_talk(0);
    switch (era.get('cflag:46:컨디션')) {
      case -2:
        talk_arr = [
          `으으— 머리가 어질어질해. 아니지! 정신 차려야 해, 팔코 화이팅!`,
          `이제 혼자서 이렇게 외롭고 싶지 않아…… 아, 아무것도 아니야? 팔코, 힘내자!`,
        ];
        break;
      case -1:
        talk_arr = [
          `팔코 얼굴에 뭐 묻었어? 어라? 팔코 안색이 안 좋아 보여?`,
          `오늘 컨디션이 별로네. 온 세상이 빙글빙글 도는 것 같아. 앗! ${callname}, 언제 온 거야?`,
        ];
        break;
      case 0:
        talk_arr = [
          [`${callname}, 팔코의 머리 장식이 궁금해?`, ``],
        ];
        break;
      case 1:
        talk_arr = [
          `왠지 오늘 상태가 아주 좋은걸♪`,
          `톱 우마돌이 되기로 결심한 이상, 모래밭이라도 팔코는 열심히 나아갈 거야!`,
          `우마돌로서 무대 공연은 경기만큼이나, 아니 그 이상으로 중요한 일이지. 아마존 양에게 물어보러 갈까……?`,
        ];
        break;
      case 2:
        talk_arr = [
          `최강의 우마돌— ${falcon.name}, 등장♪ 오늘 꼭 이 마음을 ${callname}에게 전할 거야⭐`,
          `${callname}은 귀여운 팔코를 쫒아오지 않아도 돼? 도망치지 않을 거니까❤`,
          `지평선 끝에는 무엇이 있을까~ 당연히 팔코의 큰 무대지! 팔코의 무대를 같이 보러 가지 않을래?`,
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
        `만물이 싹트는 시기는 지금의 팔코에게 딱 어울려! 봄의 팔코도 쑥쑥 성장하겠지!`,
        '열심히 땅을 뚫고 나오는 풀들을 보면, 팔코는 왠지 모르게 정말 감동받게 돼!',
      );
    if (
      // 여름
      era.get('flag:현재월') === 6 ||
      era.get('flag:현재월') === 7 ||
      era.get('flag:현재월') === 8
    )
      talk_arr.push(
        `여름 하면 역시 해변이지! 포근한 바닷바람이 더위를 쫓아내고, 파도가 가져오는 촉촉한 향기에 마음이 설레. 빨리 해변으로 날아가고 싶어!`,
        `여름엔 팔코가 모두에게 시원함과 즐거움을 주는 공연을 선사할게! 여름 합숙 때 해변에서 열리는 라이브는 모두가 팔코에게 더 주목하게 만들 거야!`,
      );
    if (
      // 가을
      era.get('flag:현재월') === 9 ||
      era.get('flag:현재월') === 10 ||
      era.get('flag:현재월') === 11
    )
      talk_arr.push(
        `예술의 가을, 식욕의 가을…… 그리고 우마돌의 가을⭐ 단풍 아래에서 라이브를 열자!`,
        `${callname}, 같이 단풍 구경 갈래? 가을은 다들 감상적인 계절이라고들 하지만…… 팔코가 모두를 미소 짓게 할 거야!`,
      );
    if (
      // 겨울
      era.get('flag:현재월') === 12 ||
      era.get('flag:현재월') === 1 ||
      era.get('flag:현재월') === 2
    )
      talk_arr.push(
        `겨울이라 팬 여러분이 모두 덜덜 떨고 있네…… 그러니까 우마돌인 팔코가 겨울로부터 따뜻함을 되찾아서 팬들의 손에 쥐여줄게! 지금 당장 라이브 하러 가자!`,
        `겨울엔 따뜻한 코타츠에 앉아서 귤을 까먹으며 TV에 나오는 연예인들의 공연을 보고, 그렇게 봄이 오기를 기다리는 게 최고지.`,
      );
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `이거 팔코한테 주는 거야? 정말 고마워!`,
        `팬에게 선물을 받았으니, 음— 자, 이건 팔코가 직접 만든 악수권이야!`,
      ];
    // 호감도 100 암시 스토리
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `선물 그 자체보다 ${me.actual_name}이 팔코에게 전해주는 다정함이 더 잘 느껴져. 그러니까 앞으로도 ${callname}과 함께 지내고 싶어.`,
        `이 선물에서 ${me.actual_name}의 진심 어린 사랑과 영혼의 무게가 느껴져. 그렇다면 팔코도 ${falcon.name}이자 우마돌로서의 모든 사랑과 영혼을 팬 1호인 ${callname}에게 줄게. ${callname}, 정말 좋아해!`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `앗! 무려 팬 1호인 ${callname}이 준 선물이라니! 팔코가 어떻게 보답해야 할지 잘 생각해 봐야겠어!`,
        `가장 좋아하는 팬 1호가 준 선물이니까 팔코가 소중히 간직할게~ 응, 츄❤ 보답으로 이건 어때?`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_cook() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        '레시피대로만 하는 것보다 팔코는 다른 방식도 시도해보고 싶어. 자주 실패하긴 하지만……',
        `우마돌이 직접 요리해서 자신을 동경하는 팬 1호 님에게 대접하는 건 팔코에게도 아주 신선한 경험이야.`,
      ];
    // 호감도 100 암시 스토리
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `팔코에게 있어서 자신을 지켜봐 주는 소중한 사람을 위해 요리하는 건 세상에서 가장 행복한 일이야.`,
        `팔코를 진정으로 이해해주는 가장 사랑하는 ${callname}을 위해서라면 몇 번이라도 사랑을 듬뿍 담아 만들 수 있어! 자, ${callname}, 입 벌려봐. 아—`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `엄마한테 받은 요리 노트를 보고 오늘은 팔코가 요리할게. 팬 1호에게 꼭 맛있는 오므라이스를 만들어 줄 거야❤`,
        `자— 맛은 어때…… 정말?! 다행이다! 팔코는 항상 덜렁거리지만, ${callname}이 즐거워하는 표정을 보니 정말 기뻐!`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_study() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        '으으, 팔코는 책 보는 거 별로 안 좋아해. 시험은 항상 플래시 씨가 빌려준 요점 노트를 전날 벼락치기 해서 턱걸이로 통과하는걸.',
        `만약 레이스 우마돌 역사 같은 게 시험 과목이었다면 팔코는 분명 만점이었을 텐데! 왜 그런 건 안 나올까?`,
      ];
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `${callname}과 함께 이렇게 행복한 시간을 보낼 수 있다니, 너무 사치스러울 정도야.`,
        `엣! 아…… 아무것도 아니야⭐ 앗! 안 돼…… 미안해, 다음부턴 수학책 사이에 만화책 끼워보지 않을게!`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `${callname}이 가르쳐준 덕분에 그 어려운 수학도 이제 낙제를 면하는 수준은 벗어났어⭐`,
        `전에는 항상 플래시 씨가 도와줬는데, 지금은 ${callname}한테 물어보라고 하네. 이상해라.`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_rest() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `우마돌에게는 휴식도 아주 중요해! 그러니까 ${callname}도 적당히 쉬어야 해!`,
        `가끔은 아마존 양이 동경되기도 해. 우마돌이라는 측면에서 말이야.`,
      ];
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `이사만 계속 다녔던 팔코에게 고향이라는 건 아주 낯선 개념이야.`,
        `어릴 때는 이사를 자주 다녀서 친구도 별로 없었고 성격도 좀 내성적이었어... 그러다가 거리 공연을 하는 우마돌을 만난 뒤로 조금씩 밝아졌지.`,
        `팔코의 반짝반짝 빛나는 세상에서 ${callname}은 가장 빛나고 소중한 보석이야. 그러니까 ${callname}, 인생이라는 길 위에서 팔코와 평생 함께 걸어가 줄래?`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `${callname}의 무릎 위에 앉아도 될까? ${callname}은 좋은 냄새가 나네♪`,
        `팔코는 항상 플래시 씨에게 잔소리를 듣곤 했는데~ ${callname}이 내 공부를 도와준 뒤로는 플래시 씨도 왠지 안심하는 눈치야?`,
        `팔코는 밤마다 우마돌 관련 영상을 보면서 인기 있는 우마돌의 스타일을 연구하곤 해.`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_prepare() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `헤어스타일 OK, 승부복 OK, 편자 모양도 문제없음! 모든 준비는 끝났어!`,
        `이제 팬들에게 모래밭의 톱 우마돌이 무엇인지 보여줄 차례야!`,
      ];
    // 호감도 100 암시 스토리
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `꼭, 반드시 이번 레이스에서 가장 좋아하는 ${callname}이 팔코의 스타트부터 골인 지점까지 단 1초도 놓치지 말고 지켜봐 줘야 해!`,
        `수많은 망설임과 방황을 겪었지만, ${callname}의 지지 덕분에 큰 무대에 설 수 있었어. 우마돌로서도 ${falcon.uma_sex_title}로서도, 팔코는~ 이마안큼(두 팔로 큰 하트를 그리며) ${callname}을 좋아해!`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `이제부터 팔코가 가장 자신 있는 댄스를 보여줄게. ${callname}, 팔코의 공연을 똑똑히 지켜봐!`,
        `레이스를 준비할 때는 역시 좀 긴장되네. 그래도 ${callname}이 곁에 있어서 정말 든든해!`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async office_game() {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      talk_arr = [
        `팔코는 게임을 잘 못 하지만…… 하지만 리듬 게임은 예외야⭐`,
        `그러고 보니 요즘 스트리머가 아주 인기라던데…… 에? 팔코도 방송을 해줬으면 좋겠어?`,
        `그렇다면 유행에 뒤처질 수는 없지!`,
      ];
    if (era.get('love:46') === 100) {
      talk_arr.push(
        `에헤헤⭐…… ${callname}에게서 정말 좋은 냄새가 나♪`,
        `연인끼리 하기 좋은 게임이라면, 음…… 오버쿠킹 같은 거 해볼래?`,
        `매일 15분 정도 ${callname}과 함께 게임하는 모습을 방송하는 것도 좋을 것 같아. 그렇게 하자!`,
      );
    } else if (era.get('love:46') >= 75) {
      talk_arr.push(
        `팔코는 비트에 맞춰 화면을 터치하는 게임에 아주 자신 있어…… 앗, ${callname} 지금 스마트폰으로 영상 찍고 있는 거야?`,
        `미소녀 연애 시뮬레이션 게임도 텍스트 어드벤처로서 꽤 역사가 깊지. ${callname}도 그런 거에 관심 있어?`,
        `거리 공연으로 쌓은 노하우 덕분인지 방송 시청자 수도 계속 늘어나고 있어!`,
        `온라인이든 오프라인이든, 팬이라면 톱 우마돌인 팔코는 평등하게 대할 거야!`,
      );
    }
    await falcon.say_and_wait(get_random_entry(talk_arr));
  }

  async school_atrium(hook) {
    const falcon = get_chara_talk(46);
    const me = get_chara_talk(0);
    hook.arg = (await select_action_in_atrium()) === 0;
    if (hook.arg) {
      switch (get_random_value(0, 1)) {
        case 0:
          await falcon.say_and_wait(`수학 너무 어려워! 다음에 또 보충 수업 들어야겠어!`);
          break;
        case 1:
          await falcon.say_and_wait(
            `왜 그 둔탱이 트레이너는 아직도 팔코의 힌트를 못 알아채는 거야!!!`,
          );
          break;
        case 2:
          await falcon.say_and_wait(
            `……많은 친구를 사귀고, 팔코만의 트레이너도 생겼지만`,
          );
          await falcon.say_and_wait(`하지만 왜일까, 가끔은 아직도 무서워져.`);
          break;
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0:
          await falcon.say_and_wait(
            `${falcon.name} 규칙 제1조! 팬을 기다리게 하는 우마돌은 자격 상실이야! 다음 목적지는 어디?`,
          );
          break;
        case 1:
          await falcon.say_and_wait(
            `맛은 어때, ${callname}? 이건 오늘 데이트를 위해서 가사 수업 때 열심히 연습한 팔코의 사랑이 듬뿍 담긴 도시락이야! 사랑이 가득 느껴져?`,
          );
          break;
      }
    }
  }

  async school_rooftop() {
    const falcon = get_chara_talk(46);
    if (Math.random() < 0.5) {
      await falcon.say_and_wait(`옥상에서 바람을 느끼고 있으니…… 갑자기 노래하고 싶어지네⭐`);
      await falcon.say_and_wait(`방금 이 기분을 우마스타그램에 올려야지♪`);
    } else {
      await era.printAndWait(
        [
          falcon.get_colored_name(),
          '「만약 언젠가 팬과 ',
          sys_get_callname(this.id, 0),
          ' 중 하나를 선택해야 한다면……」',
        ],
        { color: falcon.color, fontSize: '0.75rem' },
      );
      await falcon.say_and_wait(`……팔코, 방금 아무 말도 안 했어⭐`);
    }
  }

  async out_church() {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const love = era.get('love:46'),
      me = get_chara_talk(0),
      chara340_talk = get_chara_talk(340),
      chara341_talk = get_chara_talk(341),
      chara342_talk = get_chara_talk(342),
      event_marks = new FalconEduMarks(),
      edu_weeks = era.get('cflag:46:육성턴수합산');
    chara340_talk.name = '자애로운 여신';
    chara341_talk.name = '예지의 여신';
    chara342_talk.name = '엄숙한 여신';

    if (edu_weeks < 47 + 15) {
      await era.printAndWait(`어느 휴일 오전.`);
      await era.printAndWait(
        `신사에 자원봉사를 하러 간 ${falcon.name}이 ${callname}의 손을 이끌고 신사에 도착했다.`,
      );
      await falcon.say_and_wait(`좋은 아침⭐`);
      await falcon.say_and_wait(
        `——도주할 때도 반짝반짝 빛나는 귀여운 우마돌 팔코야♪ 신사의 초대를 받아 자원봉사자로서 뒤에 있는 명소를 소개하게 되어 영광이야.`,
      );
      await era.printAndWait(
        `무녀복 차림으로 일일 봉사자가 된 ${falcon.name}이 손에 든 고헤이를 흔들었다.`,
      );
      await falcon.say_and_wait(
        `그리고! 팔코는 매일 아침 강변 풀밭에서 라이브를 열고 있으니까, 많이 응원해줘♪`,
      );
      await era.printAndWait(
        `그렇게 말하며 ${falcon.name}은 팔을 크게 흔들었고, 손에 든 고헤이가 공중에 은빛 선을 그렸다.`,
      );
      await say_by_passer_by(
        `관광객 A`,
        `봉사자 아가씨, 여기 처음 왔는데 이 신사의 유래에 대해 알려줄 수 있을까요?`,
      );
      await falcon.say_and_wait(
        `——바로 그거야! 우마돌로서 팬의 기대에 제대로 보답하지 않으면 안 되지!`,
      );
      await falcon.say_and_wait(`팔코가 전력을 다해 대답해 줄게!`);
      await era.printAndWait(
        `갑작스러운 활기찬 목소리에 처음 온 관광객은 깜짝 놀란 듯했지만, 더 많은 관광객이 호기심을 느끼며 다가왔다.`,
      );
      await falcon.say_and_wait(`아주 아주 먼 옛날, 이 시냇물은 지금보다 훨씬 컸대.`);
      await falcon.say_and_wait(
        `어느 날, 전 세계에 ${falcon.uma_sex_title}를 탄생시키기 위해 분주히 돌아다니던 세 여신이 이곳에 왔는데, ${falcon.sex}들은 목이 말라 이 시냇가로 왔어.`,
      );
      await falcon.say_and_wait(
        `이 시냇물에서 태어난 신령이 ${falcon.sex}들을 정중하게 맞이했지.`,
      );
      await falcon.say_and_wait(
        `정성스러운 대접에 만족한 세 여신은 시냇물의 신령에게 제안을 했어.`,
      );
      await say_by_passer_by(
        `세 여신`,
        `그대의 따뜻한 환대를 받았으니, 우리가 그대에게 축복을 내리게 해다오.`,
      );
      await falcon.say_and_wait(`하지만 신령은 ${falcon.sex}들의 호의를 거절했어.`);
      await say_by_passer_by(
        `시냇물의 신령`,
        `여신의 축복을 받게 되어 영광입니다만, 그 축복을 이 시냇가에서 살아가는 모든 생명에게 나누어 주십시오.`,
      );
      await say_by_passer_by(`시냇물의 신령`, `그들이 저보다 훨씬 중요하니까요.`);
      await falcon.say_and_wait(
        `신령의 희생정신에 감동한 세 여신은 그의 요청을 수락하여 시냇물에 축복을 내렸어.`,
      );
      await falcon.say_and_wait(
        `그 후로 이 시냇물을 마신 생명들은 세 여신의 축복을 받게 되었대.`,
      );
      await falcon.say_and_wait(
        `이 헌신적인 신령을 기리기 위해 옛날 사람들은 시냇가 주변에 신사를 지었어. 환경이 변하면서 시냇물은 작은 연못이 되었지만.`,
      );
      await falcon.say_and_wait(`그래도 사업 성공과 행복을 빌러 오는 사람들의 발길은 여전히 끊이지 않고 있어.`);
      await falcon.say_and_wait(`이상, 이게 바로 이 신사의 유래야.`);
      await say_by_passer_by(`관광객 A`, `오, 하나 더 해줘요!`);
      await say_by_passer_by(`관광객 B`, `역시 팔코쨩이야!`);
      await say_by_passer_by(`관광객 C`, `말할 것도 없지!`);
      await era.printAndWait(
        `이야기에 빠져든 관광객들이 어느새 팔코를 빽빽하게 에워쌌다.`,
      );
      await falcon.say_and_wait(
        `모두들…… 이렇게 열광적일 줄이야! 팔코도 여러분의 열정을 느꼈어!`,
      );
      await falcon.say_and_wait(`그렇다면! ${falcon.name}의 게릴라 라이브—`);
      era.printButton(`흠흠.`, 1);
      await era.input();
      await falcon.say_and_wait(`에헤? ${callname}?`);
      await era.printAndWait(
        `갑자기 말을 끊자 ${falcon.name}이 깜짝 놀란 표정으로 ${me.name}을(를) 바라보았다.`,
      );
      era.printButton(`여기 온 목적을 잊지 마!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `——맞다! 팔코는 매일 아침 강변에서 게릴라 라이브를 하고 있으니까 많이 응원해줘♪`,
      );
      era.printButton(`팔코!`, 1);
      await era.input();
      await falcon.say_and_wait(`에에—`);
      await me.say_and_wait(
        `방해해서 미안합니다. 신사는 이 귀여운 ${falcon.uma_sex_title} 바로 뒤에 있어요. 지금 출발하지 않으면 앞의 줄이 더 길어질 거예요.`,
      );
      await say_by_passer_by(
        `관광객 D`,
        `맞는 말이네! 빨리 줄을 서지 않으면 대기 시간이 더 늘어나겠어!`,
      );
      await falcon.say_and_wait(`팔코의 안내를 따라와 줘—`);
      await era.printAndWait(
        `몰려들었던 관광객들은 ${me.name}과(와) ${falcon.name}의 안내에 따라 한 줄로 늘어섰다.`,
      );
      await era.printAndWait(`잠시 후\n\n`);
      await say_by_passer_by(`신주`, `${falcon.name} 양, 그리고 트레이너 씨, 수고 많으셨습니다.`);
      await falcon.say_and_wait(`팔코는 정말 즐거운 시간이었어⭐`);
      await say_by_passer_by(`신주`, `자원봉사의 보답으로, 어디 보자—`);
      await era.printAndWait(`잠시 준비를 마친 신주가 세 여신의 신상을 향해 기도를 시작했다.`);
      await say_by_passer_by(
        `신주`,
        `아름답고 자애로우신 세 여신 님, 받드는 종의 말을 들어주소서.`,
      );
      await era.printAndWait(
        `신주가 세 여신에게 기도를 올리는 동안, ${me.name}들은 옆에 서서 묵묵히 응답을 기다렸다.`,
      );
      if (love > 75) {
        await say_by_passer_by(`신주`, `……알겠습니다.`);
        await era.printAndWait(`의식이 끝나고 신주가 ${me.name}들을 보았다.`);
        await say_by_passer_by(`신주`, `세 여신 님께서 당신들에게 하실 말씀이 있다고 하십니다.`);
        await falcon.say_and_wait(`에엣?`);
        await era.printAndWait(
          `신주가 세 여신에게 기도를 올리는 동안, ${me.name}들은 옆에 서서 묵묵히 응답을 기다렸다.`,
        );
        await say_by_passer_by(`신주`, `긴장하지 마세요. 세 여신 님께서는 그저 조금 궁금하실 뿐입니다.`);
        await say_by_passer_by(`신주`, `자, 제 안내를 따르세요……`);
        await era.printAndWait(
          `신주의 지시에 따라 ${me.name}들은 조용히 눈을 감았다.`,
        );
        switch (get_random_value(0, 2)) {
          case 0:
            await chara340_talk.say_and_wait('……참으로 강인한 아이로구나.');
            break;
          case 1:
            await chara341_talk.say_and_wait(
              '사랑스러운 아이야, 모든 짐을 혼자 짊어지려 하지 말거라.',
            );
            break;
          case 2:
            await chara342_talk.say_and_wait(
              '모든 문제의 끝은 에덴에 있으니, 한순간도 멈추지 말고 달리거라.',
            );
        }
        await era.printAndWait(`딸랑딸랑딸랑`);
        await era.printAndWait(`세 여신의 속삭임이 들린 것 같았다.`);
        await falcon.say_and_wait(`……팔코는 지금 이미 충분히 행복해.`);
        await era.printAndWait(`예상과 달리, 팔코는 약간 우울한 표정을 지었다.`);
        await falcon.say_and_wait(
          `${me.name}은(는) 어떤 소원을 빌었어?⭐`,
        );
        await era.printAndWait(
          `우울함은 금세 ${falcon.teen_sex_title}의 미소 뒤로 숨어버렸다.`,
        );
        event_marks.idol++;
      } else {
        await say_by_passer_by(`신주`, `……알겠습니다.`);
        await era.printAndWait(`의식이 끝나고 신주는 품에서 부적 한 장을 꺼냈다.`);
        await say_by_passer_by(`신주`, `작은 성의입니다.`);
        await era.printAndWait([
          falcon.get_colored_name(),
          '/',
          me.get_colored_name(),
          '「',
          { content: '정말', color: falcon.color },
          ' 감사합니다!」',
        ]);
        await say_by_passer_by(
          `신주`,
          `두 분의 사이가 더 깊어지면 다시 한번 방문해 주십시오. 두 분의 목표가 이루어지기를 진심으로 기원하겠습니다.`,
        );
        await era.printAndWait(
          `트레이닝실로 돌아오는 길에 ${me.name}은(는) ${falcon.name}과의 사이가 조금 더 가까워진 것을 느꼈다.`,
        );
      }
    }
  }

async out_shopping(hook) {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const me = get_chara_talk(0),
      love = era.get('love:46');
    const buffer = [];
    let temp;
    hook.arg = await select_action_in_shopping_street();
    switch (hook.arg) {
      case 0:
        switch (get_random_value(0, 2)) {
          case 0:
            await falcon.say_and_wait(
              `${callname}, 팔코의 활약을 잘 지켜봐 줘!`,
            );
            await falcon.say_and_wait(
              `새로운 일이라도 전력을 다할 거야, 팔코, 화이팅♪`,
            );
            await era.printAndWait(
              `전부 Perfect를 달성한 ${falcon.name}과, 겨우 완곡한 ${me.name}을(를) 보며, ${me.name}은(는) 침묵에 빠졌다.`,
            );
            break;
          case 1:
            await falcon.say_and_wait(
              `이 기록을 깨면, 어쩌면 더 많은 사람이 팔코를 알아줄지도 몰라!`,
            );
            await era.printAndWait(
              `새로운 기록 앞에서, ${falcon.name}은 묘한 부분에서 승부욕을 불태웠다.`,
            );
            break;
          case 2:
            await falcon.say_and_wait(
              `……성공이야! ${callname}!`,
            );
            await era.printAndWait(
              `인형 뽑기 기계를 긴장하며 지켜보던 ${falcon.name}은 숨도 쉬지 못하다가, 인형을 뽑고 나서야 환호성을 지르며 안심했다.`,
            );
            break;
        }
        break;
      case 1:
        // 상점가 이벤트 발생 ${falcon.name}이(가) 추첨권 한 장을 받았다
        // 플레이어가 직접 뽑을지 ${falcon.name}에게 맡길지 결정
        await say_by_passer_by(
          `잡화점 점주`,
          `어디 보자…… 포스터랑 전단지, 음…… 이번에는 공백 엽서도 추가로 구매하셨네요.`,
        );
        await say_by_passer_by(`잡화점 점주`, `물건은 다 챙겼으니, 조심히 가세요.`);
        await falcon.say_and_wait(`응, 알았어⭐`);
        await say_by_passer_by(`잡화점 점주`, `아, 맞다. 이건 덤으로 주는 추첨권이에요.`);
        await era.printAndWait(`점주는 웃으며 ${falcon.name}에게 추첨권 한 장을 건넸다.`);
        await say_by_passer_by(
          `잡화점 점주`,
          `입구 쪽으로 가서 그 할아버지를 찾은 다음, 이 표를 건네주면 됩니다.`,
        );
        await falcon.say_and_wait(`정말 고마워. 어쩌면 오늘은 팔코의 행운의 날일지도 모르겠네⭐`);
        await say_by_passer_by(
          `잡화점 점주`,
          `럭키 스타 아가씨, 다음에도 기운차게 오세요. 조심히 가시고.`,
        );
        await falcon.say_and_wait(`다음 인쇄랑 사은품도 잘 부탁해⭐`);
        await era.printAndWait(
          `작은 선물들이 가득 담긴 봉투를 들고, ${falcon.name}은 타다닥 소리를 내며 ${me.name}의 곁으로 왔다.`,
        );
        await falcon.say_and_wait(
          `${callname}, 다음으로 사고 싶은 게 있어?`,
        );
        await era.printAndWait(
          `${me.name}은(는) 고개를 저었고, ${falcon.name}이 꼭 쥐고 있는 추첨권을 쳐다보았다.`,
        );
        await falcon.say_and_wait(
          `……그럼, 역시 ${callname}이 뽑아줘!`,
        );
        await era.printAndWait(`팔코는 ${me.name}을(를) 경품 추첨기 앞으로 밀었다.`);
        era.printButton(`그렇다면야`, 1);
        await era.input();
        switch (get_random_value(0, 4)) {
          case 0:
            await say_by_passer_by(`점주`, `4등 당첨, 종이 티슈!`);
            await era.printAndWait(
              `추첨기에서 떨어지는 하얀 공을 보며 점주가 종을 흔들었다.`,
            );
            await falcon.say_and_wait(
              `……티슈구나. 괜찮아! 팔코의 미소를 보고 기운 내!`,
            );
            await era.printAndWait(
              `${falcon.name}이 필사적으로 분위기를 띄우려 했지만, 티슈를 뽑은 사실은 ${me.name}들을 시무룩하게 만들었다.`,
            );
            break;
          case 1:
            await say_by_passer_by(`점주`, `3등 당첨, 당근 한 개!`);
            await era.printAndWait(
              `추첨기에서 노란 공이 떨어지는 것을 슬쩍 본 점주가 종을 흔들었다.`,
            );
            await falcon.say_and_wait(
              `음…… 이 당근, 마이크로 쓰기에 딱 좋아 보여.`,
            );
            await era.printAndWait(
              `${falcon.name}은 쇼핑백에서 스티커를 꺼내 당근에 붙였다.`,
            );
            await falcon.say_and_wait(
              `내일 공연 잘 부탁해～ 당근${me.get_adult_sex_title()}!`,
            );
            era.printButton(`음식 가지고 장난치지 마!`, 1);
            await era.input();
            await falcon.say_and_wait(`우으— 팔코는 귀엽다고 생각했는데.`);
            await era.printAndWait(
              `이 당근은 오늘 밤 반찬이 되기 전까지 ${falcon.name}의 허리춤에 끈으로 묶여 있게 되었다.`,
            );
            break;
          case 2:
            await say_by_passer_by(`점주`, `2등 당첨, 당근 한 상자!`);
            await era.printAndWait(
              `추첨기에서 당근색 공이 떨어지는 것을 슬쩍 본 점주가 종을 흔들었다.`,
            );
            await era.printAndWait(
              `${callname}이(가) 점주에게서 당근이 가득 든 상자를 건네받고 어떻게 가져갈지 고민하던 찰나.`,
            );
            await era.printAndWait(`작은 두 손이 그 고민거리를 가볍게 들어 올렸다.`);
            await falcon.say_and_wait(
              `와아…… 생각보다 당근이 엄청 많네, 보름은 먹을 수 있겠어.`,
            );
            await falcon.say_and_wait(
              `이건 다음 공연 때 보러 와 주시는 팬분들을 위한 기념품으로 하자!`,
            );
            era.printButton(`당근을 세워놓고 가상의 관객 삼아 우마돌 연습을 하자!`, 1);
            await era.input();
            await falcon.say_and_wait(
              `에? 이미지 트레이닝? 역시 ${callname}, 그렇게 하자.`,
            );
            await era.printAndWait(`그날 밤\n`);
            await falcon.say_and_wait(
              `도주 중에도 계속해서 빛나는, 우마돌—— 팔코 등장♪`,
            );
            await say_by_passer_by(
              `${me.name}과(와) 일렬로 늘어선 당근들`,
              `오오오오!`,
            );
            await falcon.say_and_wait(
              `응응! 팔코, 모두의 열정이 느껴져! 그럼 Let's go!`,
            );
            await say_by_passer_by(
              `${me.name}과(와) 일렬로 늘어선 당근들`,
              `(광란의 응원봉 흔들기)`,
            );
            await falcon.say_and_wait(
              `……다들 이렇게나 열정적일 줄이야, 팔코 감동해서 눈물이 날 것 같아…… 좋아! 팬분들의 기대에 보답하기 위해 팔코의 전력을 보여줄게!`,
            );
            await era.printAndWait(
              `얼마 후, 한밤중의 트레이닝실에 당근들이 ${falcon.uma_sex_title}로 변해 콘서트를 연다는 괴담이 학원에 퍼졌다.`,
            );
            break;
          case 3:
            await say_by_passer_by(`점주`, `1등 당첨, 당근 햄버거!`);
            await era.printAndWait(
              `추첨기에서 빨간 공이 떨어지는 것을 본 점주가 공을 집어 들고 종을 흔들었다.`,
            );
            await falcon.say_and_wait(
              `에? 당근 햄버거야? ……정말 맛있어 보여!`,
            );
            await falcon.say_and_wait(`운이 정말 좋네!`);
            await falcon.say_and_wait(`먼저 우마스타에 글부터 올릴게!`);
            await era.printAndWait(
              `#상점가_1등_경품이_당근_햄버거?! #트레이너와의_에피소드 가 금세 실시간 트렌드를 점령했다.`,
            );
            await era.printAndWait(
              `잠시 후, 트레이너까지 같이 찍어 올리는 바람에 커다란 소동이 일어났고, 타즈나 씨에게 불려 가 한참 동안 설교를 들어야 했다.`,
            );
            break;
          case 4:
            await say_by_passer_by(`점주`, `특등 당첨, 온천 여행권! 축하합니다!`);
            await era.printAndWait(
              `추첨기에서 분홍색 공이 떨어지자 점주는 공을 집어 몇 번이고 확인한 뒤 큰 소리로 결과를 발표했다.`,
            );
            await era.printAndWait(`땡- 땡-`);
            await falcon.say_and_wait(`에……`);
            await falcon.say_and_wait(`역시 오늘은 팔코의 행운의 날이었어!`);
            era.printButton(`에? 진짜 당첨됐어?`, 1);
            await era.input();
            await say_by_passer_by(
              `점주`,
              `이 온천 여행권은 유효기간이 없으니 소중히 사용하세요.`,
            );
            await era.printAndWait(
              `점주는 만면에 웃음을 띠며 ${me.name}들에게 여행권을 건넸다.`,
            );
            await falcon.say_and_wait(`이거, 언제 쓰는 게 좋을까?`);
            era.printButton(`3년 차가 끝난 뒤에 쓰자!`, 1);
            await era.input();
            await falcon.say_and_wait(
              `${callname}이 그렇게 말한다면, ${callname}에게 맡길게?`,
            );
            await falcon.say_and_wait(`꼭 소중히 간직해야 해!`);
            await era.printAndWait(
              `트레이닝실로 돌아와, ${falcon.name}이 지켜보는 가운데 ${me.name}은(는) 이 온천권을 서랍 깊숙한 곳에 넣어두었다.`,
            );
            break;
        }
        break;
      case 2:
        await falcon.say_and_wait(
          `${callname}은 어떤 노래가 듣고 싶어? 여기 있는 노래는 팔코가 다 부를 수 있어⭐`,
        );
        await era.printAndWait(
          `완전히 몰입한 팔코를 보며, ${me.name}도 묵묵히 응원봉을 들어 올렸다.`,
        );
        break;
      case 3:
        buffer.push(
          [
            [`《우마돌의 고민》 ${callname}, 같이 이 영화 보자.`],
            `우마돌인 남자 연예인이 평범한 ${falcon.uma_sex_title}를 좋아하게 되지만, 온갖 암시를 줘도 ${falcon.uma_sex_title}가 눈치채지 못한다. 남배우가 포기하려던 찰나, ${falcon.uma_sex_title}가 그에게 고백하는 내용이었다.`,
          ],
          [
            [`《열혈! 우마돌의 분투기!》, 이거 재미있을 것 같아! ${callname}도 같이 볼래?`],
            `무명 우마돌로 외롭게 지내던 남배우가 상냥한 ${falcon.uma_sex_title}의 정성 어린 보살핌 덕분에 용기를 되찾고, 이야기 마지막에 줄곧 자신을 지지해 준 그 ${falcon.uma_sex_title}에게 고백하는 내용이었다.`,
          ],
          [
            [`《백옥의 시》…… 가끔은 분위기를 바꿔보는 것도 나쁘지 않겠네⭐`],
            `행복하게 살던 ${falcon.uma_sex_title}가 몰락한 고독한 시인에게 첫눈에 반해 열렬히 구애하고, 기구한 운명 속에서 두 사람은 파란만장한 삶을 보낸다. 절정 부분에서 소중한 원고를 잃고 절망한 시인이 집에 불을 지르자 ${falcon.uma_sex_title}가 그를 구해내며,` +
              ` 생과 사의 갈림길에서 비로소 삶을 사랑할 용기를 얻은 시인과 ${falcon.uma_sex_title}가 서로를 꼭 껴안는 내용이었다.`,
          ],
        );
        if (love === 100) {
          buffer.push([
            [
              `《벚꽃은 지기 마련, 오늘 밤 임을 기다리며》 ${callname}, 이 영화 보지 않을래?`,
            ],
            `${me.name}과(와) ${falcon.name}은 화기애애하게 영화 이야기를 나누었고, 두 사람의 손은 어느덧 깍지가 끼워진 채 꼭 맞잡혀 있었다.`,
          ]);
        } else if (love >= 50) {
          buffer.push(
            [
              [
                `《도화월탄》 이거 꽤 유명한 것 같네, ${callname}도 같이 볼래?`,
              ],
              `예상치 못한 고풍스러운 분위기와 남녀 주인공의 사랑 이야기에 두 사람은 감동하여 손수건으로 눈물을 훔쳤다.`,
            ],
            [
              [
                `팔코는 사실 어떤 영화든 다 좋아. ${callname}과 함께라면 말이야.`,
              ],
              `${falcon.name}은 초롱초롱한 눈으로 ${me.name}을(를) 쳐다보았다.`,
            ],
          );
        }
        temp = get_random_entry(buffer);
        for (const e of temp[0]) {
          await falcon.say_and_wait(e);
        }
        await era.printAndWait(temp[1]);
        break;
    }
  }

  async out_station(hook) {
    const callname = sys_get_callname(46, 0),
      falcon = get_chara_talk(46);
    const me = get_chara_talk(0);
    hook.arg = await select_action_in_station(4);
    switch (Math.floor(Math.random() * 3)) {
      case 0:
        switch (get_random_value(0, 1)) {
          // 식사
          case 0:
            await say_by_passer_by(`종업원`, `오래 기다리셨습니다. 과일 파르페 두 개 나왔습니다.`);
            await falcon.say_and_wait(`생각했던 것보다 훨씬 맛있어.`);
            await era.printAndWait(``);
            break;
          case 1:
            await falcon.say_and_wait(`팔코는 이 정도만 있으면 충분해!`);
            await era.printAndWait(
              `${falcon.name}의 앞에는 아주 적은 양의 당근과 채소만이 놓여 있었다.`,
            );
            await me.say_and_wait(`……너무 적게 먹는 거 아니야?`);
            await falcon.say_and_wait(`최근에 돈을 조금 과하게 써버려서 예산 초과야……`);
            await era.printAndWait(`${me.name}들의 시선이 메뉴판의 피자 세트로 향했다.`);
            await me.say_and_wait(`하나 시킬까? 내가 낼게.`);
            await falcon.say_and_wait(`정말 고마워⭐`);
            await era.printAndWait(
              `다음 날 체중을 쟀을 때 2kg이 늘어난 것을 보고 허둥지둥하는 ${falcon.name}은 의외로 귀여웠다.`,
            );
            break;
        }
        break;
      case 1:
        // 데이트
        switch (get_random_value(0, 1)) {
          case 0:
            await era.printAndWait(`우마돌이 팬이랑 데이트하면 분노한 팬들이 불타오르지 않을까?`);
            await falcon.say_and_wait(
              `이건 트레이너와 담당 ${falcon.uma_sex_title} 사이의 아주 건전한 관계라구!`,
            );
            await era.printAndWait(`참 묘한 기분이 들었다.`);
            break;
          case 1:
            await era.printAndWait(
              `${falcon.name}은 현역 우마돌인데, 이렇게 다른 사람이랑 데이트를 해도 될까?`,
            );
            await falcon.say_and_wait(`다행히 아무도 못 알아보는 것 같네.`);
            await era.printAndWait(
              `잔디를 달리는 레이스 ${falcon.uma_sex_title}에 비해, 더트 우마돌은 관객들의 시선에서 조금 멀리 떨어져 있어서 그런 걸지도 몰랐다.`,
            );
            break;
        }
        break;
      case 2: // 쇼핑몰 구경
        switch (get_random_value(0, 1)) {
          case 0:
            await era.printAndWait(
              `쇼핑몰 안을 정처 없이 거닐다가 레이스 ${falcon.uma_sex_title} 굿즈를 파는 가게를 지나쳤다.`,
            );
            await falcon.say_and_wait(`팔코 굿즈가 지난주보다 조금 늘어났어♪`);
            await era.printAndWait(
              `더트 테마 매대에는 ${falcon.name}의 인형이 한 줄을 가득 채우고 있었다.`,
            );
            break;
          case 1:
            await falcon.say_and_wait(`하나, 둘, 셋 찰칵♪`);
            await falcon.say_and_wait(
              `트레이너와 함께하는 쇼핑♪ 우으— 이 사진은 역시 올리지 않는 게 좋겠지.`,
            );
            await era.printAndWait(`(팔코 나름대로) 스캔들을 방지했으니, 참으로 다행스러운 일이었다.`);
            break;
        }
        break;
    }
  }

  async out_river(hook) {
    const falcon = get_chara_talk(46);
    hook.arg = (await select_action_around_river()) > 0;
    if (hook.arg) {
      switch (get_random_value(0, 2)) {
        case 0: // 산책
          await falcon.say_and_wait(`강가 잔디밭에서 콘서트를 열 수 있게 해준 이곳에 보답하고 싶어.`);
          await falcon.say_and_wait(`그래서 팔코는 쉴 때 가끔 고가교 밑에서 봉사활동을 하곤 해.`);
          break;
        case 1:
          await falcon.say_and_wait(`그러고 보니 도주 시스터즈 친구들은 지금 뭘 하고 있을까?`);
          await falcon.say_and_wait(`팔코, 정말 궁금해!`);
          break;
        case 2:
          await falcon.say_and_wait(
            `마루젠 선배는 실력도 대단하고 상냥하게 가르쳐 주시지만, 가끔 묘하게 세대 차이가 느껴진달까?`,
          );
          await falcon.say_and_wait(
            `만약 팔코가 마루젠 선배 같은 위치에 선다면…… 으음, 팔코의 작은 머리로는 그런 커다란 압박감을 견디지 못할 거야.`,
          );
          break;
      }
    } else {
      switch (get_random_value(0, 1)) {
        case 0: // 낚시
          await falcon.say_and_wait(`……! 대단해— 이렇게 큰 물고기를 낚다니.`);
          await era.printAndWait(
            `양동이 속에서 파닥거리는 붕어를 보며, 곁에 앉아있던 팔코는 모든 과정을 지켜보았다.`,
          );
          break;
        case 1:
          await falcon.say_and_wait(
            `초반에 선두 다툼을 하는 것처럼, 차분하게 게이트가 열리는 순간을 기다리는 거야.`,
          );
          await falcon.say_and_wait(`그리고—— 이렇게!`);
          await era.printAndWait(
            `바늘에 걸린 탐욕스러운 물고기가 엄청난 힘에 이끌려 수면 밖으로 튀어 올랐고, 그대로 양동이 속에 골인했다.`,
          );
          await falcon.say_and_wait(`이게 바로 팔코식 낚시법이야!`);
          break;
      }
    }
  }
};