/**
 * @file 마야노 탑건 - 日常
 * @author 黑奴二号
 */
const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');
const { sys_change_money } = require('#/system/sys-calc-flag');

const select_yes_or_no = require('#/page/components/select-yes-or-no');

const CustomizedDaily = require('#/event/daily/daily-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const event_hooks = require('#/data/event/event-hooks');

/**
 * @param {number} chara_id
 * @param {string|number} attr_name
 * @param {number} val
 * @returns {boolean}
 */
function print_attr_change(chara_id, attr_name, val) {
  const buffer = sys_change_attr_and_print(chara_id, attr_name, val);
  if (buffer.length > 0) {
    era.print([get_chara_talk(chara_id).get_colored_name(), '의 ', ...buffer]);
    return true;
  }
}

module.exports = class extends CustomizedDaily {
  async run(hook, extra_flag, event_object) {
    if (event_object) {
      return;
    }
    hook.override = true;
    const callname = sys_get_callname(24, 0),
      maya = get_chara_talk(24),
      me = get_chara_talk(0),
      relation = era.get('relation:24:0'),
      motivation = era.get('cflag:24:컨디션'); // 의욕 (대화에 영향)
    let talk_arr,
      wait_flag = false;
    switch (hook.hook) {
      case event_hooks.good_morning: // 아침 인사
        if (era.get('base:24:체력') === era.get('maxbase:24:체력')) {
          if (relation > 75) {
            talk_arr = [
              '따르릉따르릉──♪ 마야가 깨우러 왔어~☆',
              [
                '안녕! 에헤헤~ 아침 일찍부터 바로 ',
                callname,
                '을 보고 싶어서 전력으로 달려왔지!',
              ],
            ];
          } else {
            talk_arr = [
              '안녕──! 오늘도 마야는 활기차게 이륙할 거야!',
              [
                callname,
                ', 안녕! 설마~ 지금 마야 찾고 있었어? 에헤헤, 여기 있다구~♪',
              ],
            ];
          }
        } else if (era.get('status:24:밤샘')) {
          if (relation > 75) {
            talk_arr = [
              '후아암…… 오늘은 도시락 만드느라 일찍 일어났어…… 에헤헤, 점심시간 기대해 줘♪',
            ];
          } else {
            talk_arr = [
              [
                '후아암…… 어제는 ',
                sys_get_colored_callname(24, 3),
                '이랑 밤새웠어~ 졸리긴 한데, 왠지 어른이 된 것 같은 기분이야……',
              ],
            ];
          }
        } else {
          if (relation > 75) {
            talk_arr = [
              '저기 저기! 훈련하러 갈 거야? 마야는 언제든 따라갈 수 있어☆ 행복하고 머나먼 미래를 향해서!',
              ['목표 포착☆ ', callname, '의 미소로 오늘의 에너지를 충전~♪'],
            ];
          } else {
            talk_arr = [
              [callname, '~! 우리 오늘 무슨 훈련 할 거야? 마야는 언제든 긴급 이륙할 수 있다구!'],
              [
                '가자, ',
                callname,
                '! 오늘도 기대되는 일, 반짝반짝 빛나는 일을 찾아서 비행 시작이야!',
              ],
            ];
          }
        }
        maya.say(get_random_entry(talk_arr));
        break;
      case event_hooks.talk: // 대화
        if (!sys_check_awake(24)) {
          return await super.talk();
        }
        switch (era.get('cflag:24:컨디션')) {
          case -2:
            talk_arr = [
              '이상하네……? 몸이 마음대로 안 움직여……? 마야, 왜 이러는 걸까……?',
              '으음~? 텐션이 급강하 중인 느낌인데……?',
            ];
            break;
          case -1:
            if (relation > 75) {
              talk_arr = [
                '마야가 열심히 할 테니까, 나중에 꼭 보상해 줘야 해? 안 그러면 기운이 안 날 것 같아……',
                '걱정 마! 마야는 금방 또 기운 차리니까! 상태가 조금 안 좋아도 문제없어!',
              ];
            } else {
              talk_arr = [
                '으으…… 컨디션이 별로인 것 같아. 마야, 추락할 것 같아~',
                '지금은 노력하고 싶지 않아! 누가 뭐래도! 싫은 건 싫은 거야──!',
              ];
            }
            break;
          case 0:
            if (relation > 75) {
              talk_arr = [
                [
                  callname,
                  '이랑 같이 훈련하면 정말 즐거워! 그래서 더 힘내고 싶은 기분이 들어!',
                ],
                [
                  '마야를 지루하게 만들면 안 돼? 뭐, ',
                  callname,
                  '이랑 있으면 지루할 틈이 없겠지만.',
                ],
              ];
            } else {
              talk_arr = [
                '준비 OK!! 마야는 언제든 날아오를 수 있어!',
                '시야 양호! 지시 대기 중! 명령 내릴 준비됐어? 언제든 이륙할 수 있다구!',
              ];
            }
            break;
          case 1: // 의욕 양호
            if (relation > 75) {
              talk_arr = [
                [callname, '! 지금 마야, 엄청 반짝반짝해 보이지 않아? 에헤헤♪'],
                '마야 열심히 할 거야~! 잘하면 꼭 칭찬해 줘야 해☆',
              ];
            } else {
              talk_arr = [
                '어디 재밌는 일 없으려나~♪',
                '오오오! 몸이 엄청 가벼워! 마야, 어디까지든 달릴 수 있을 것 같아~!',
              ];
            }
            break;
          case 2: // 의욕 절정
            if (relation > 75) {
              talk_arr = [
                [
                  callname,
                  '이랑 함께라면 뭐든지 즐거워질 것 같아! 이런 기분은 처음이야!',
                ],
                [
                  '마야는 꼭 반짝반짝하게 빛나는 어른스러운 우마무스메가 될 거야! 그러니까 제일 가까운 곳에서 지켜봐 줘!',
                ],
              ];
            } else {
              talk_arr = [
                '어떤 훈련이든 맡겨만 줘! 슈웅~ 하고 금방 끝내버릴 테니까!',
                '마야의 텐션은 계속 상승 중이야! 정말 반짝반짝한 퍼포먼스를 보여줄 수 있을 것 같아!',
              ];
            }
        }
        await maya.say_and_wait(get_random_entry(talk_arr));
        break;
      case event_hooks.out_river: // 강변 외출
        switch (get_random_value(0, 2)) {
          case 0:
            await maya.say_and_wait([
              callname,
              ', 뭐 마실래~? 마야는 더 뜨겁게, 거기에 꿀이랑 휘핑크림 추가한 커스텀 특제 음료……',
            ]);
            era.printButton('갑자기 무슨 소리야?', 1);
            await era.input();
            await maya.say_and_wait(
              '음료수 말이야! 정말이지, 이런 길을 걸을 때는 한 손에 커피 정도는 들어줘야 한다구!',
            );
            await maya.say_and_wait([
              '이 길을 다 걸으면, 내 커피 ',
              callname,
              '한테 줄게♪',
            ]);
            await maya.say_and_wait([callname, '! 멋진 포즈 잡아봐!']);
            await maya.say_and_wait('하나, 둘, 셋!');
            await maya.say_and_wait('……');
            era.println();
            wait_flag = sys_change_motivation(24, 1) || wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(10, 20)) || wait_flag;
            break;
          case 1:
            await maya.say_and_wait(
              '강둑은 마치 비행기 활주로 같아…… 여기서 달리면 그대로 날아오를 수 있을 것 같아~',
            );
            await maya.say_and_wait([callname, ', 나 잡아봐라☆']);
            era.printButton('넘어지지 않게 조심해', 1);
            await era.input();
            await maya.say_and_wait([
              '괜찮아, ',
              callname,
              '이 잡아줄 거라 믿으니까!',
            ]);
            await era.printAndWait([
              '그 후, ',
              me.get_colored_name(),
              '은(는) ',
              maya.get_colored_name(),
              '과 데이트를 계속했다……',
            ]);
            era.println();
            wait_flag = sys_change_motivation(24, 1) || wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(10, 20)) || wait_flag;
            break;
          case 2:
            await era.printAndWait([
              maya.get_colored_name(),
              '과 함께 강변으로 낚시를 하러 갔다.',
            ]);
            await maya.say_and_wait([
              '',
              callname,
              '랑 같이 낚시 데이트…… 왠지 멋진 어른들이 할 법한 일이네~ 슈웅~',
            ]);
            if (Math.random() < 0.5) {
              await maya.say_and_wait('마야 알았어! 이렇게 하면…… 아! 입질 왔다!');
              await era.printAndWait([
                maya.get_colored_name(),
                '은 금방 요령을 터득한 듯하다.',
              ]);
              era.println();
              wait_flag = sys_change_motivation(24, 1) || wait_flag;
              wait_flag =
                sys_like_chara(24, 0, get_random_value(20, 30)) || wait_flag;
            } else {
              await maya.say_and_wait(
                '아아…… 지루해…… 왜 이렇게 물고기가 안 잡히는 거야?',
              );
              await era.printAndWait([
                '인내심이 부족했던 탓인지, ',
                maya.get_colored_name(),
                '은 아무런 수확도 거두지 못했다.',
              ]);
              era.println();
              wait_flag = sys_change_motivation(24, 1) || wait_flag;
              wait_flag =
                sys_like_chara(24, 0, get_random_value(5, 10)) || wait_flag;
            }
        }
        break;
      case event_hooks.out_church: // 신사 외출
        wait_flag = false;
        await maya.say_and_wait([
          '여기 인연을 맺어주는 점괘가 유명하대♪',
          callname,
          ', 우리도 한번 뽑아보자! ——',
        ]);
        await maya.say_and_wait(
          '뭐, 굳이 신령님께 여쭤보지 않아도 우린 정말 잘 어울리지만☆…… 그래도 두근두근하잖아!',
        );
        await era.printAndWait([
          maya.get_colored_name(),
          '의 소원을 들어주기 위해 「인연 점괘」를 뽑기로 했다.',
        ]);
        await maya.say_and_wait('점괘 뽑았어? 마야 보여줘, 보여줘!');
        switch (get_random_value(0, 2)) {
          case 0:
            await maya.say_and_wait('미래에…… 진전이 있을 것이다?');
            await maya.say_and_wait('어라…… 마야의 노력이 전혀 전해지지 않은 거야?');
            era.println();
            wait_flag = sys_change_motivation(24, 1) || wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(0, 5)) || wait_flag;
            break;
          case 1:
            await maya.say_and_wait('사…… 사이가 그럭저럭 좋다……!?');
            await maya.say_and_wait('그럭저럭…… 그럭저럭…… 그럭저럭이라니 그게 뭐야……?');
            era.println();
            wait_flag = sys_change_motivation(24, 1) || wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(10, 20)) || wait_flag;
            break;
          case 2:
            await maya.say_and_wait('……와아!! 『열애 일직선』!! 이거 완전 최고잖아~♪');
            await maya.say_and_wait('헤헤헤~~ 신령님도 우리 사이를 인정해주시는 걸까나~~~');
            era.println();
            wait_flag = sys_change_motivation(24, 1) || wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(20, 30)) || wait_flag;
        }
        if (era.get('status:24:연습X서수') < 0 && Math.random() < 0.8) {
          era.set('status:24:연습X서수', 0);
          era.print([
            { isBr: true },
            maya.get_colored_name(),
            '의 트레이닝이 더욱 순조로워진 듯하다……',
          ]);
          wait_flag = true;
        }
        break;
      case event_hooks.out_shopping: // 상점가 외출
        sys_change_money(-5);
        era.print('상점가 어디로 갈까?');
        era.printButton('노래방에 가자', 1);
        era.printButton('게임 센터에 가자', 2);
        era.printButton('쇼핑하러 가자', 3);
        switch (await era.input()) {
          case 1:
            // 노래방
            await era.printAndWait([
              maya.get_colored_name(),
              '과 함께 노래방에 갔다……',
            ]);
            await maya.say_and_wait([
              '오늘은 꼭 내 노래로 ',
              callname,
              '을 홀려버릴 거야!',
            ]);
            await maya.say_and_wait('어때, 마야의 매력이 듬뿍 느껴져?');
            era.printButton('「귀여워!」', 1);
            era.printButton('「섹시해!」', 2);
            if ((await era.input()) === 1) {
              await maya.say_and_wait([
                '으으……! 설마 ',
                callname,
                '은 이런 노래가 마야한테는 아직 이르다고 생각하는 거야!?',
              ]);
              era.printButton('「그런 뜻이 아니야.」', 1);
              await era.input();
              await maya.say_and_wait(
                '음음…… 그렇구나! 그러니까 마야의 매력은 섹시함뿐만이 아니라는 거지!',
              );
              await era.printAndWait([
                '살짝 오해가 있는 것 같지만, ',
                maya.get_colored_name(),
                '의 기분은 매우 좋아졌다.',
              ]);
            } else {
              await maya.say_and_wait([
                '나이스~♪ ',
                callname,
                '이라면 그렇게 말해줄 줄 알았어!',
              ]);
              await maya.say_and_wait([callname, '은 정말 마야를 너무너무 사랑한다니까~♪']);
            }
            await era.printAndWait([
              maya.get_colored_name(),
              '과 즐거운 시간을 보냈다.',
            ]);
            era.println();
            wait_flag = sys_change_motivation(24, 2) || wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(0, 10)) || wait_flag;
            break;
          case 2:
            // 인형뽑기
            await era.printAndWait([
              maya.get_colored_name(),
              '과 함께 게임 센터에 갔다……',
            ]);
            await maya.say_and_wait(['와아~~~! ', callname, ', 저것 봐, 저것 봐!']);
            await maya.say_and_wait('저기 저 인형──');
            await era.printAndWait([
              me.get_colored_name(),
              '은(는) ',
              maya.get_colored_name(),
              '이 가리킨 곳을 보았다. 그곳에는 우마무스메 테마의 인형이 든 크레인 게임기가 있었다.',
            ]);
            await maya.say_and_wait('저거 데데 인형이지! 너무 귀엽다~ 갖고 싶어~!');
            await maya.say_and_wait('하지만 용돈을 거의 다 써버려서……');
            await era.printAndWait([
              '눈을 반짝이던 ',
              maya.get_colored_name(),
              '의 기운이 금세 시무룩하게 죽어버렸다.',
            ]);
            era.printButton('「내가 뽑아줄까?」', 1);
            await era.input();
            await maya.say_and_wait('정말!? 그럼 마야가 옆에서 열심히 응원할게!!');
            await maya.say_and_wait(['가라 가라, 힘내라 힘내라! ', callname, '♪']);
            switch (get_random_value(0, 2)) {
              case 0:
                await maya.say_and_wait('으아, 아깝다~ 정말 한 끗 차이였는데……!');
                era.printButton('「미안해……」', 1);
                await era.input();
                await maya.say_and_wait(['에이, 신경 쓰지 마, ', callname, '!!']);
                await maya.say_and_wait('마야를 위해서 그렇게 노력해준 것만으로도 충분히 기뻐!');
                await era.printAndWait([
                  '결국 아무것도 뽑지 못했지만, ',
                  maya.get_colored_name(),
                  '은 만족한 듯하다.',
                ]);
                era.println();
                wait_flag = sys_change_motivation(24, 1) || wait_flag;
                wait_flag =
                  sys_like_chara(24, 0, get_random_value(0, 10)) || wait_flag;
                break;
              case 1:
                await maya.say_and_wait(['해냈다! ', callname, ', 고마워!']);
                await maya.say_and_wait([
                  '',
                  callname,
                  '이 인형 뽑을 때 그 진지한 표정, 왠지 조금 설레버렸을지도……♪',
                ]);
                await maya.say_and_wait([
                  '헤헤, 어디에 장식해둘까~? ',
                  callname,
                  '이랑 같이 만든 추억이니까 고민되네!',
                ]);
                await era.printAndWait([
                  maya.get_colored_name(),
                  '은 무척 기뻐하는 듯하다.',
                ]);
                era.println();
                wait_flag = sys_change_motivation(24, 1) || wait_flag;
                wait_flag =
                  sys_like_chara(24, 0, get_random_value(10, 20)) || wait_flag;
                sys_change_money(5);
                break;
              case 2:
                await maya.say_and_wait(
                  '와~ 귀여워~! 게다가 이렇게 많이! 대단해!!',
                );
                await maya.say_and_wait([
                  '헤헤, 이게 다 ',
                  callname,
                  '이 마야를 위해 열심히 해준 덕분이야.',
                ]);
                await maya.say_and_wait('마야, 지금 저어어엉말…… 행복해!!');
                await maya.say_and_wait([
                  '이 인형들을 ',
                  callname,
                  '이라고 생각하고 매일 꽉 안아줄게!',
                ]);
                await era.printAndWait([
                  maya.get_colored_name(),
                  '은 굉장히 기뻐하는 듯하다.',
                ]);
                era.println();
                wait_flag = sys_change_motivation(24, 2) || wait_flag;
                wait_flag =
                  sys_like_chara(24, 0, get_random_value(20, 30)) || wait_flag;
                sys_change_money(5);
            }
            break;
          case 3:
            // 쇼핑
            await era.printAndWait([
              maya.get_colored_name(),
              '과 함께 상점을 둘러보았다……',
            ]);
            if (Math.random() < 0.5) {
              await maya.say_and_wait(
                '와~ 귀엽다~♪ 이건 너무 어른스러운가? 하지만 갭 모에가 느껴져서 더 귀여우려나?',
              );
              await maya.say_and_wait([
                '이럴 때는…… ',
                callname,
                '! 마야랑 같이 고민해 줘~!',
              ]);
              await maya.say_and_wait('지금 세일 중이래♪ 귀여운 옷 잔뜩 살 거야~♪');
              await maya.say_and_wait(
                '그리고 음…… 고민되네~! 이번 달 용돈이 좀 빠듯하거든!',
              );
              await maya.say_and_wait(
                '이 옷은 포인트 디자인에 최신 액세서리를 매치해서, 그야말로 테크니컬한 스타일이야!',
              );
              await maya.say_and_wait(
                '그리고 이건 귀여우면서도 기동성이 좋아서, 점원 언니가 실용성 끝판왕이래!',
              );
              await maya.say_and_wait([
                '있지, ',
                callname,
                '! 마야한테는 어떤 게 더 어울리는 것 같아~?',
              ]);
              era.printButton('「최신 테크니컬 스타일!」', 1);
              era.printButton('「기동성 좋은 실용적인 스타일!」', 2);
              if ((await era.input()) === 1) {
                await maya.say_and_wait(
                  '그치그치~! 마야도 그렇게 생각했어! 역시 유행의 최첨단을 달려줘야지♪',
                );
                await maya.say_and_wait('저기요~ 여기 이거 주세요~!');
                await maya.say_and_wait([
                  '왠지 마야, 멋진 어른 여성에 한 걸음 더 가까워진 기분이야……!',
                ]);
              } else {
                await maya.say_and_wait(
                  '알 것 같아~! 기동성이 좋으면 잘 안 지치니까, 놀러 다닐 때 더 신나게 놀 수 있겠지♪',
                );
                await maya.say_and_wait('좋아, 이걸로 결정! 좋아── 사러 가자♪');
                await maya.say_and_wait([
                  '자, ',
                  callname,
                  ', 출발! 오늘의 데이트는 아직 끝난 게 아니라구?',
                ]);
              }
            } else {
              await maya.say_and_wait(
                '와~ 간식 파는 곳이다! 마야, 먹어보고 싶은 과자가 잔뜩 있어!',
              );
              era.printButton('「체중 조심하고, 딱 하나만 골라.」', 1);
              await era.input();
              await maya.say_and_wait('웅…… 알았어…… 뭘 골라야 잘 골랐다고 소문이 날까~!?');
              await maya.say_and_wait(
                '시즌 한정! 새로운 맛인 『자극 중독 당근 칩』을 고를까~?',
              );
              await maya.say_and_wait(
                '아니면 마야 개인 추천 1순위인 『초달콤달콤 초콜릿』을 고를까?',
              );
              await maya.say_and_wait([
                '으으~ 못 고르겠어! ',
                callname,
                '이 대신 골라줘!',
              ]);
              era.printButton('「새로운 맛에 도전!」', 1);
              era.printButton('「베스트셀러가 최고!」', 2);
              if ((await era.input()) === 1) {
                await maya.say_and_wait(
                  '그치그치! 자극이 부족하면 안 되지♪ 마야는 매운 건 잘 못 먹지만, 그래도 도전해볼래!',
                );
                await era.printAndWait([
                  '결국 ',
                  maya.get_colored_name(),
                  '은 얼굴이 새빨개질 정도로 매워하면서도, 어떻게든 과자를 다 먹었다.',
                ]);
              } else {
                await maya.say_and_wait(
                  '그렇네~ 역시 간식을 고를 때는 안정감이 제일 중요하지.',
                );
                await maya.say_and_wait(
                  '괜히 도전했다가 맛없으면 실망스럽잖아! 좋아── 그럼 이걸로 할래!',
                );
                await maya.say_and_wait([
                  '우리 같이 나눠 먹자! ',
                  callname,
                  ', 아──── 해봐.',
                ]);
                await era.printAndWait([
                  '그 이름처럼, ',
                  maya.get_colored_name(),
                  '이 고른 초콜릿은 굉장히 달았다.',
                ]);
              }
            }
            era.println();
            wait_flag = sys_change_motivation(24, 1) || wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(10, 20)) || wait_flag;
        }
        break;
      case event_hooks.out_station: // 역 외출
        sys_change_money(-5);
        era.print('역에 가서 무엇을 할까?');
        era.printButton('식사하기', 1);
        era.printButton('데이트하기', 2);
        era.printButton('영화 보기', 3);
        switch (await era.input()) {
          case 1: // 식사
            await maya.say_and_wait([
              '데이트, 데이트🌟 ',
              callname,
              ', 우리 어디 갈까🎵',
            ]);
            switch (get_random_value(0, 2)) {
              case 0:
                await maya.say_and_wait('아와와와와와……');
                await maya.say_and_wait(
                  '마야…… 마야는 어른이니까, 분명 다 먹을 수 있을 거야!',
                );
                await era.printAndWait([
                  maya.get_colored_name(),
                  '과 함께 중화요리를 먹으러 갔다. 그녀는 매운 음식에 약하면서도 전설의 마파두부에 도전했다……',
                ]);
                break;
              case 1:
                await maya.say_and_wait([callname, ', 나 먹여줘! 아……']);
                await era.printAndWait([
                  maya.get_colored_name(),
                  '과 함께 패밀리 레스토랑에 갔다. 소박한 요리였지만 두 사람은 즐겁게 식사를 마쳤다.',
                ]);
                break;
              case 2:
                await maya.say_and_wait('서…… 설마 이게 말로만 듣던 캔들라이트 디너!?');
                await maya.say_and_wait('마야, 드디어 오늘 어른의 계단을 오르는 거야?');
                await era.printAndWait([
                  maya.get_colored_name(),
                  '과 함께 레스토랑에 갔다. 우아한 분위기에 그녀의 가슴이 두근거렸다.',
                ]);
            }
            era.println();
            wait_flag =
              print_attr_change(24, '체력', get_random_value(0, 50)) ||
              wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(0, 10)) || wait_flag;
            break;
          case 2: // 데이트
            if (Math.random() < 0.5) {
              await era.printAndWait([
                maya.get_colored_name(),
                '과 역에서 만나기로 약속했다.',
              ]);
              await maya.say_and_wait([
                callname,
                ' 왔다 왔다~! 그럼 우리 같이 데이트하러 가자♪',
              ]);
              await maya.say_and_wait(
                '저기, 이렇게 만나기로 약속하고 만나는 거, 왠지…… 연인 같지 않아?',
              );
              await maya.say_and_wait(
                '농담이야! 가슴 두근거렸어? 마야가 신경 쓰이기 시작했지?',
              );
              await maya.say_and_wait('『어른의 매력으로 마음 흔들기 작전』 대성공이네☆');
              await era.printAndWait([
                '인정하고 싶지는 않지만, ',
                me.get_colored_name(),
                '은(는) 정말로 ',
                maya.get_colored_name(),
                '에게 매료된 것일지도 모른다.',
              ]);
            } else {
              await era.printAndWait([
                maya.get_colored_name(),
                '과 함께 역 근처 거리를 산책했다.',
              ]);
              await maya.say_and_wait('와아…… 오늘 거리엔 사람이 정말 많네……');
              await maya.say_and_wait([
                callname,
                ', 길 잃어버리지 않게 우리 손잡고 가자!',
              ]);
              await maya.say_and_wait(
                '헤헤…… 이렇게 손잡고 산책하니까, 연인 같은 느낌 나네♪',
              );
              await era.printAndWait([
                '주변에서 보기엔 마치 아이를 데리고 가는 보호자 같을지도 모르겠지만…… 어쨌든 ',
                maya.get_colored_name(),
                '이 즐거워 보이니 다행이다.',
              ]);
            }
            era.println();
            wait_flag =
              sys_like_chara(24, 0, get_random_value(20, 30)) || wait_flag;
            break;
          case 3: // 영화 보기
            await era.printAndWait([
              maya.get_colored_name(),
              '과 함께 새로 개봉한 영화를 보러 갔다.',
            ]);
            if (Math.random() < 0.5) {
              await maya.say_and_wait([
                callname,
                '! ',
                callname,
                '! 방금 봤어!?',
              ]);
              await maya.say_and_wait('비행기야! 게다가 마야의 아빠가 조종하는 거라구!');
              await maya.say_and_wait('언젠가 마야도 저 푸른 하늘을 날아오를 거야☆');
              await maya.say_and_wait(['그러니까 ', callname, '도 마야를 꼭 따라와야 해?']);
              await era.printAndWait([
                '우연인지, 마침 ',
                maya.get_colored_name(),
                '의 아버지가 출연한 액션 영화였던 모양이다. 그녀는 매우 즐거워 보였다.',
              ]);
            } else {
              await maya.say_and_wait(
                '범인은 역시 그 사람이었네! 마야는 처음부터 다 알고 있었다구!',
              );
              await maya.say_and_wait([
                '어때, 마야 똑똑하지♪ ',
                callname,
                ', 좀 더 칭찬해 줘도 된다구?',
              ]);
              await era.printAndWait([
                maya.get_colored_name(),
                '은 결말을 미리 맞췄지만, 영화 자체를 충분히 즐긴 듯하다.',
              ]);
            }
            wait_flag = print_attr_change(24, '체력', get_random_value(0, 50));
            wait_flag =
              print_attr_change(0, '체력', get_random_value(0, 50)) ||
              wait_flag;
            wait_flag =
              sys_like_chara(24, 0, get_random_value(0, 10)) || wait_flag;
            break;
        }
        break;
      case event_hooks.school_atrium: // 학원 안뜰
        await maya.say_and_wait(
          (await select_yes_or_no(
            '안뜰에서 무엇을 할까?',
            '말라비틀어진 나무 구멍을 보러 간다',
            '데이트하러 간다',
          ))
            ? ['마야는 어른스러운 ', maya.get_colored_name(), '이니까, 우, 울거나 하지 않는다구?']
            : ['데이트 가자! 마야는 ', callname, '이랑 학원에서 제일 잘 어울리는 커플이 될 거야!'],
        );
        break;
      case event_hooks.school_rooftop: // 학원 옥상
        await maya.say_and_wait([
          '마야가 ',
          callname,
          '을 위해 도시락을 싸 왔어, 같이 먹자!',
        ]);
        break;
      default:
        hook.override = false;
        return super.run(hook, extra_flag, event_object);
    }
    wait_flag && (await era.waitAnyKey());
    return false;
  }
};