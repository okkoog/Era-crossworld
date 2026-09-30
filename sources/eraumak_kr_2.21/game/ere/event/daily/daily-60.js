/**
 * @file 나이스 네이처 - 日常
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const { get_custom_check } = require('#/event/check/check-factory');
const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedDaily {
  select() {
    if (!sys_check_awake(60)) {
      return super.select();
    }
    get_chara_talk(60).say(
      Math.random() < 0.5
        ? `무슨 일이야, 무슨 일? ${sys_get_callname(60, 60)}에게 볼일이라도 있어?`
        : `응? 할 일이 있는 거야? 그럼 ${sys_get_callname(60, 60)}가 같이 가줄게!`,
    );
  }

  good_morning() {
    const chara_self_name = sys_get_callname(60, 60),
      callname = sys_get_callname(60, 0);
    const talk_arr = [
      `오늘 훈련 스케줄은 뭐야? 나도 리스트 좀 보여줘~`,
      `어제 고깃집 아저씨가 신메뉴가 나왔다고 하시던데, 나중에 같이 가볼래? 내가 쏠게!`,
      `쉿~! 조용히! 봐봐, 저기 고양이가 자고 있어. 우리 다른 데로 돌아갈까?`,
      `오! ${callname}, 기분이 좋아 보이네. 뭐 좋은 일이라도 있었어?`,
      `그러고 보니, 저녁 메뉴는 정했어? 아직이면 이 ${chara_self_name}가 실력 발휘 좀 해볼까!`,
    ];
    if (era.get('status:60:밤샘')) {
      talk_arr.push(
        `으하암~~... ${callname}? 왜 하품을 하고 그래? 아하하하...` +
          `결국 들켜버렸네. 사실 ${chara_self_name}, 딱 쇼츠 하나만 더 보고 자려던 참이었는데, 그게 너무 재밌어서 그만...` +
          `정신을 차려보니 벌써 새벽이더라고. 근데 진짜 재밌었어! ${callname}도 한번 볼래?`,
      );
    } else if (era.get('base:60:체력') === era.get('maxbase:60:체력')) {
      talk_arr.push(
        `오~ ${callname}, 안녕! 쌤 덕분에 ${chara_self_name}는 아주 푹 쉬었어! 맛있는 것도 잔뜩 먹고 잠도 푹 자서, 지금 기운이 넘쳐나거든!` +
          `왠지 평소보다 훨씬 젊어진 기분이랄까! 유일하게 좀 아쉬운 건... 아, 아냐. 아무튼 다음 일정을 알려줘!`,
      );
    } else {
      talk_arr.push(
        `아, ${callname}. 좋은 아침~ 잠을 푹 잤더니 피로가 싹 가신 느낌이야. 여기서 누가 마사지까지 해주면 딱 좋겠지만~ 뭐, 농담이야. 그래서 다음 계획은 뭐야?`,
      );
    }
    get_chara_talk(60).say(get_random_entry(talk_arr));
  }

  async good_night(hook) {
    if (!sys_check_awake(0) || !sys_check_awake(60)) {
      return await super.good_night(hook);
    }
    const chara = get_chara_talk(60),
      check = get_custom_check(60).is_want_make_love(),
      me = get_chara_talk(0);
    if (check > 0) {
      era.print(
        `바쁜 하루가 끝나고, ${me.name}은(는) ${chara.name}를 학생 기숙사 앞까지 배웅했다.`,
      );
      era.print(
        `${me.name}이(가) 평소처럼 손을 흔들며 작별 인사를 하려던 찰나, 나이스 네이처가 갑자기 소매 끝을 붙잡았다.`,
      );
      era.print(
        '고개를 숙여보니, 노을빛 때문인지 네이처의 얼굴이 평소보다 훨씬 붉게 물들어 있었다.',
      );
      era.print(
        `잠시 어색한 침묵이 흐른 뒤, 붉은 머리의 ${chara.get_teen_sex_title()}가 머뭇거리며 입을 열었다.`,
      );
      chara.say(
        '저기, 오늘은... 이미 외박 신청도 해뒀으니까... 조금 더 같이 있어도 괜찮은데? 그게... 그러니까...',
      );
      chara.say(`만약 ${sys_get_callname(60, 0)}이(가) 원한다면... 그, 좀 더 깊은 관계가 되는 것도—`);
      era.print(
        `여기까지 말한 ${chara.get_teen_sex_title()}의 양 볼은 이미 터질 듯이 붉어졌고, 촉촉한 눈망울로 ${
          me.name
        }의 눈을 빤히 바라보았다. ${chara.sex}이(가) 뒷말을 잇지 않아도 ${
          me.name
        }은(는) 이미 그 의미를 충분히 이해했다.`,
      );
      if (check !== 2) {
        era.printButton('수락한다', 1);
        era.printButton('거절한다', 2);
      }
      if (check === 2 || (await era.input()) === 1) {
        chara.say('저, 정말?!');
        era.print(
          `수줍어하던 네이처의 얼굴에 순식간에 기쁨과 설렘이 번졌다. ${me.name}이(가) 다시 대답하기도 전에, 그녀는 덥석 ${me.name}의 팔을 껴안으며 귓가에 작게 속삭였다.`,
        );
        chara.say(
          `오늘 밤 '훈련'도, 잘 부탁할게? 트 · 레 · 이 · 너 · ${me.get_adult_sex_title()} ❤️`,
        );
        era.print(
          `그렇게 ${
            me.name
          }은(는) 네이처에게 이끌려 기숙사 정문을 뒤로했다. 하교하던 다른 ${chara.get_uma_sex_title()}들의 따뜻한 시선을 받으며, 두 사람은 거리 반대편으로 향했다...`,
        );
        hook.arg = true;
      } else {
        chara.say('그렇구나... 알겠어...');
        era.print(
          `${chara.get_teen_sex_title()}는 붙잡고 있던 소매를 놓았고, 얼굴에는 감추기 힘든 실망감이 스쳐 지나갔다.`,
        );
        chara.say(
          `응, 괜찮아. 나도 참, ${sys_get_callname(
            60,
            0,
          )} 오늘 많이 피곤했을 텐데 눈치가 없었네. 방금 한 말은 못 들은 걸로 해줘! 잘 자, ${sys_get_callname(
            60,
            0,
          )}. 내일 봐!`,
        );
        era.print(
          `쓸쓸히 멀어지는 ${chara.get_teen_sex_title()}의 뒷모습을 보며, ${
            me.name
          }의 마음속에는 설명하기 어려운 묘한 기분이 맴돌았다.`,
        );
        hook.arg = false;
      }
    } else {
      era.print(
        `바쁜 하루가 끝나고, ${me.name}은(는) ${chara.name}를 학생 기숙사 앞까지 배웅했다.`,
      );
      chara.say(`오늘 고생 많았어! 내일 봐, ${sys_get_callname(60, 0)}!`);
      era.print(
        `손을 흔들며 멀어지는 ${chara.name}의 뒷모습을 지켜본 뒤, ${me.name}도 자신의 숙소로 돌아가 휴식을 취했다.`,
      );
    }
  }

  async talk() {
    if (!sys_check_awake(60)) {
      return await super.talk();
    }
    const chara_self_name = sys_get_callname(60, 60),
      callname = sys_get_callname(60, 0);
    let talk_arr;
    switch (era.get('cflag:60:컨디션')) {
      case -2:
        talk_arr = [
          '아아— 몸에... 기운이 하나도 안 나...',
          '아— 안 돼! 머릿속에 안 좋은 생각만 가득해... 빨리 진정해야 하는데...',
        ];
        break;
      case -1:
        talk_arr = [
          '으음— 왠지 의욕이 좀 안 생기네.',
          '몸 여기저기가 찌뿌둥한데... 좀 쉬어야 하는 타이밍인가?',
        ];
        break;
      case 0:
        talk_arr = [
          `안녕, ${callname}. 오늘 훈련 내용은 뭐야?`,
          `훈련이든 레이스든 뭐든, ${callname}의 판단에 맡길게~ 내가 할 수 있는 범위 내에서 해볼 테니까.`,
          `하아암— 아, ${callname}. 오늘 일정은 어떻게 돼?`,
        ];
        break;
      case 1:
        talk_arr = [
          '음~ 느낌이 좋은데? 이 기세라면 혹시... 는 아무것도 아냐! 하하하하...',
          '정말 좋은 날씨네. 오늘은 무슨 일이 생길까?',
          `오~ 왠지 좋은 일이 생길 것 같은 예감이 들어. ${callname}은 어때?`,
        ];
        break;
      case 2:
        talk_arr = [
          '오쓰~! 오늘도 전력으로 가보자고— 장난이야. 뭐, 가능한 범위 내에서 최선을 다해볼게.',
          `${chara_self_name}, 컨디션 최고! 이대로 가볍게 몇 바퀴 뛰어볼까? 결과에 너무 큰 기대는 하지 말고.`,
          `오? ${callname}, 안녕~ 같이 아침이라도 먹거나 산책할래? 내가 쏠게!`,
        ];
        break;
    }
    await get_chara_talk(60).say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const callname = sys_get_callname(60, 0);
    await get_chara_talk(60).say_and_wait(
      Math.random() < 0.5
        ? `에? 이거 나 주는 거야? 고마워, ${callname}! 내 취향을 잘 모르겠다고? 괜찮아, ${callname}이(가) 나를 생각해서 챙겨줬다는 것만으로도 충분히 기쁘니까!`
        : `뭐야 뭐야? 선물? 와아! 고마워, ${callname}! 지금 바로 열어봐도 돼?`,
    );
  }

  async office_cook() {
    await get_chara_talk(60).say_and_wait(
      `요리 같은 건 이 ${sys_get_callname(60, 60)}에게 맡기라고! ${sys_get_callname(
        60,
        0,
      )}은(는) 저기 가서 좀 쉬고 있어! 자, 어서 어서!`,
    );
  }

  async office_study() {
    await get_chara_talk(60).say_and_wait(
      `헤에— ${sys_get_callname(
        60,
        0,
      )}이(가) 이런 문제까지 풀 줄 알다니 의외인걸? 혹시 예전엔 수재였어?`,
    );
  }

  async office_rest() {
    await get_chara_talk(60).say_and_wait(
      '가끔은 이렇게 둘이서 아무것도 안 하고 멍하니 있는 것도 나쁘지 않네. 아주 가끔이라면 말이야.',
    );
  }

  async office_prepare() {
    await get_chara_talk(60).say_and_wait(
      `상점가 식구들이랑 ${sys_get_callname(60, 0)}의 기대를 저버리지 않을게!`,
    );
  }

  async office_game() {
    await get_chara_talk(60).say_and_wait(
      `오? 이 ${sys_get_callname(
        60,
        60,
      )}에게 도전하겠다고? 배짱 좋은걸! 그럼 진 사람이 이긴 사람 소원 하나 들어주기다? 그래야 의욕이 생기지!`,
    );
  }

  async school_atrium(hook) {
    hook.arg = (await select_action_in_atrium()) > 0;
    await get_chara_talk(60).say_and_wait(
      hook.arg
        ? `학원에서 이런 짓을... 아무래도 주변 시선이 좀 신경 쓰이긴 하네... 그래도 ${sys_get_callname(
            60,
            0,
          )}이(가) 상관없다면—`
        : `빌어먹을!!!!! 다들, 그리고 ${sys_get_callname(
            60,
            0,
          )}이(가) 나한테 그렇게 기대를 걸어줬는데, 나는—`,
    );
  }

  async school_rooftop() {
    await get_chara_talk(60).say_and_wait(
      `쨔잔! ${sys_get_callname(
        60,
        60,
      )}표 수제 도시락이야! 매일 영양 균형을 잘 맞춰야 한다니까!`,
    );
  }

  async out_river(hook, extra_flag) {
    const chara_talk = get_chara_talk(60);
    if (!get_random_value(0, 2)) {
      await chara_talk.say_and_wait('...그래서, 야채가게 아주머니가 또...');
      await era.printAndWait(
        `시원하게 불어오는 강바람을 느끼며, ${chara_talk.name}이(가) 들려주는 상점가의 시시콜콜한 이야기를 듣고 있었다.`,
      );
      await chara_talk.say_and_wait(
        `...${era.get('callname:60:0')}? 듣고 있어?`,
      );
      await era.printAndWait(
        `반응이 없는 게 서운했는지, ${chara_talk.name}이(가) 살짝 볼을 부풀리며 투정을 부렸다.`,
      );
      await era.printAndWait(
        `적절히 대답하며 달래주자, ${chara_talk.name}은(는) 다시 아까처럼 신나서 이야기를 이어갔다...`,
      );
      era.println();
      sys_change_motivation(60, 1);
      sys_like_chara(60, 0, 5);
      await era.waitAnyKey();
      hook.override = true;
    } else {
      if (!(hook.arg = (await select_action_around_river()) > 0)) {
        extra_flag.jpy = get_random_value(0, 5);
      }
      await chara_talk.say_and_wait(
        hook.arg
          ? `정말 좋은 날씨네~ 아예 점심도 여기 강가 근처에서 먹을까? ${era.get(
              'callname:60:0',
            )}도 같이 할래?`
          : `그러고 보니, 예전에 세이운 군이랑 몇 번 낚시하러 온 적이 있거든. ${
              chara_talk.sex
            }한테 기술을 꽤 전수받았지! 어때, ${era.get(
              'callname:60:0',
            )}? 이 ${era.get('callname:60:60')}가 한 수 가르쳐줄까?`,
      );
    }
  }

  async out_church(hook) {
    const chara_self_name = sys_get_callname(60, 60),
      chara_talk = get_chara_talk(60);
    await chara_talk.say_and_wait(`어디 보자, ${chara_self_name}의 오늘 운세는—`);
    await era.printAndWait(
      `${chara_talk.name}이(가) 가볍게 점괘 통을 흔들자, 잠시 후 종이 한 장이 툭 떨어졌다.`,
    );
    hook.arg = get_random_value(0, 3);
    await chara_talk.say_and_wait(
      [
        '으와아... 설마 이 점괘가 나올 줄이야... 뭐, 뭐 그냥 운이 좀 안 좋은 것뿐이니까 신경 쓰지 마! ...불운한 일 같은 건 안 생기겠...지...?',
        '음, 소길(소길)이네. 뭐 나쁘지 않은 결과지. 근데 위에서부터 세면... 이것도 결국 3위인가?',
        '중길(중길)— 괜찮은걸? 어쩌면 조만간 좋은 일이 생길지도 몰라.',
        `오~ 대길(대길)! 드디어 이 ${chara_self_name}에게도 빛날 날이 오는 건가... 농담이야. 그래도 이런 행운이 레이스 때까지 이어졌으면 좋겠네!`,
      ][hook.arg],
    );
  }

  async out_shopping(hook) {
    const callname = sys_get_callname(60, 0);
    const chara_self_name = sys_get_callname(60, 60);
    const chara_talk = get_chara_talk(60);
    const temp = await select_action_in_shopping_street();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        await chara_talk.say_and_wait(
          Math.random() < 0.5
            ? `이 집게, 힘이 너무 없어 보이는데 정말 뽑히긴 하는 거야? ...뭐? 예전에 특훈으로 익힌 비기라고? ${callname}에게도 그런 청춘 같은 면이 있었구나. 그럼 이 ${chara_self_name}에게 그 실력을 한번 보여주시지!`
            : `오락실인가... 어린애들이 자주 놀러 오는 곳이네. 나? 나는 딱히 이런 데 자주 오는 타입은 아니라고! ${chara_self_name}는 가사 전담파거든. 뭐, 가끔 같이 놀러 오는 정도라면 괜찮을지도. 아주 가끔이라면 말이야.`,
        );
        break;
      case 1:
        await chara_talk.say_and_wait(
          `뭐가 나올까? 뭐, 십중팔구 3등상이겠지만... 혹시 모르잖아?`,
        );
        break;
      case 2:
        await era.printAndWait(`${chara_talk.name}과(와) 함께 노래방에 갔다...`);
        await chara_talk.say_and_wait('—어, 어때? 내가 부른 노래?');
        await era.printAndWait(`노래가 끝나고, ${chara_talk.name}은(는) 긴장한 기색으로 감상을 기다리고 있다.`);
        await chara_talk.say_and_wait(
          `천사 같은 목소리라니... 비행기가 너무 과하잖아. ${callname}, 이 ${chara_self_name}에게 사탕발림해봤자 아무것도 안 나온다고?` +
            `자, 이제 다음은 ${callname} 차례야!`,
        );
        await era.printAndWait(
          `${chara_talk.name}과(와) 함께 즐거운 시간을 보냈다.`,
        );
        break;
      case 3:
        if (Math.random() < 0.5) {
          await chara_talk.say_and_wait(
            `연애 영화? ${callname}은(는) 의외로 소녀 감성이네? 내가 좋아할 것 같았다고? 하하하—`,
          );
          await chara_talk.say_and_wait(
            `이런 소재는 저기 어린 여학생들이나 꽁냥거리는 커플들한테나 어울리는 거지. 그래도 ${callname}이(가) 보고 싶다면 같이 봐줄 순 있어.`,
          );
          await chara_talk.say_and_wait(
            `${callname}과(와) 함께라면 뭐든...`,
            true,
          );
        } else {
          await chara_talk.say_and_wait(
            '와... 이 포스터 진짜 박력 넘치네. 거대 로봇이랑 닭 모양 괴수의 대결이라니, 설정은 잘 모르겠지만 꽤 재밌어 보여. 오늘 영화는 이걸로 할까?',
          );
        }
    }
  }

  async out_station(hook) {
    const chara_talk = get_chara_talk(60);
    hook.arg = await select_action_in_station(60);
    switch (hook.arg) {
      case 0:
        if (Math.random() < 0.5) {
          await chara_talk.say_and_wait(
            `이쪽에도 맛있는 게 잔뜩 있네. ${era.get(
              'callname:60:0',
            )}은(는) 뭐 먹고 싶어? 여기? 좋아, 가자!`,
          );
          await chara_talk.say_and_wait('일단 쌤이 좋아하는 음식을 메모해두고...', true);
        } else {
          await chara_talk.say_and_wait(
            '음... 배가 좀 고파졌는데, 이 근처에서 대충 뭐라도 좀 먹고 갈까?',
          );
        }
        break;
      case 1:
        await chara_talk.say_and_wait(
          Math.random() < 0.5
            ? `저기... 손, 잡아도 될까? 봐봐... 이러는 게 더 데이트 느낌 나지 않아? 안 돼!? 에헤헤... ${era.get(
                'callname:60:0',
              )}의 손, 정말 따뜻하다—`
            : `좀 피곤해? 그럼... ${era.get(
                'callname:60:60',
              )}의 무릎베개라도 해볼래? 아, 얼굴 그쪽으로 돌리지 마! ...부끄러우니까...`,
        );
        break;
      case 2:
        await era.printAndWait(`${chara_talk.name}과(와) 함께 쇼핑몰을 구경했다...`);
        await chara_talk.say_and_wait('오~ 이 옷 꽤 귀여운걸—');
        await era.printAndWait(`${chara_talk.name}이(가) 쇼윈도에 전시된 옷을 보며 감탄했다.`);
        await chara_talk.say_and_wait(
          `그치? ${era.get(
            'callname:60:0',
          )}도 그렇게 생각하지? ...자, 잠깐! 내가 입어보고 싶다는 뜻은 아니라고?` +
            `봐봐, 이런 샤랄라한 스타일은 훨씬 젊은 애들한테나 어울리지. ${era.get(
              'callname:60:60',
            )}한테는 안 어울린다니까!`,
        );
        await era.printAndWait(
          `계속되는 권유에 ${chara_talk.name}은(는) 필사적으로 거절하며 도망치듯 자리를 피했다.`,
        );
    }
  }

  async celebration(hook) {
    const nice_nature = get_chara_talk(60),
      weeks = (era.get('flag:현재턴수') - 1) % 48;
    switch (weeks) {
      case 5:
        await print_event_name('발렌타인데이', nice_nature);
        await nice_nature.say_and_wait(
          `야아, ${era.get('callname:60:0')}. 좋은 아침~`,
        );
        await era.printAndWait(
          '이른 아침, 학원에 도착하자마자 나이스 네이처가 마치 기다리고 있었다는 듯 교문에 나타났다.',
        );
        await nice_nature.say_and_wait('에... 저기... 뭐, 이따가 훈련장에서 봐!');
        await era.printAndWait(
          `${nice_nature.get_teen_sex_title()}은(는) 무언가 말하고 싶은 기색이었지만, 결국 말을 아끼며 교문 안으로 뛰어 들어갔다.`,
        );
        era.drawLine({ content: '⏰ 점심시간 ⏰' });
        await nice_nature.say_and_wait(
          `오~ ${era.get('callname:60:0')}, ${era.get('callname:60:60')}야!`,
        );
        await era.printAndWait('식당에서 식사를 하던 도중, 네이처가 갑자기 곁에 나타났다.');
        await nice_nature.say_and_wait(
          `${era.get('callname:60:0')}에게 줄 좋은 게 있어. 바로 이 초...`,
        );
        await era.printAndWait('네이처는 말을 더듬으며 왠지 하기 힘든 말을 꺼내려는 듯 보였다.');
        await nice_nature.say_and_wait(
          `초... 초특가 메밀국수 쿠폰! 예전에 상점가 아주머니가 몇 장 주셨는데, 나 혼자 다 못 써서 ${era.get(
            'callname:60:0',
          )} 너 주는 거야! 하하하하... 그럼, 나중에 봐!`,
        );
        await era.printAndWait('네이처는 묘하게 이상한 모습으로 식당을 빠져나갔다.');
        era.drawLine({ content: '⏰ 저녁시간 ⏰' });
        await nice_nature.say_and_wait('여기까지만 배웅해줘도 괜찮아.');
        await era.printAndWait(
          '네이처를 미호 생활관 앞까지 데려다주고 돌아서려는데, 그녀가 소매를 붙잡았다.',
        );
        await nice_nature.say_and_wait('이, 이거! 부디 받아줘!');
        await era.printAndWait(
          '네이처는 얼굴을 붉히며 용기를 내어 등 뒤에서 초콜릿 상자를 내밀었다.',
        );
        await nice_nature.say_and_wait(
          '나름대로... 직접 만든 초콜릿인데, 마음에 안 들면 안 받아도 괜찮으니까...?',
        );
        await era.printAndWait('하지만 이렇게 소중한 선물을 거절할 리가 없다.');
        await era.printAndWait('나이스 네이처와의 유대감이 한층 더 깊어졌다.');
        break;
      case 13:
        await print_event_name('팬 대감사제', nice_nature);
        await nice_nature.say_and_wait('와아— 여기 진짜 북적거리네?');
        await era.printAndWait('방문객들로 꽉 찬 교정을 보며 나이스 네이처가 감탄했다.');
        await nice_nature.say_and_wait(
          '그래도 대부분 테이오나 맥퀸 같은 반짝거리는 스타들의 팬들이겠지?',
        );
        await nice_nature.say_and_wait('나 같은 조연은 그냥 뒤에서 지원이나—');
        await era.printAndWait('??? 「아! 네이처 발견!」');
        await era.printAndWait(
          `네이처가 뒤돌아 자리를 뜨려던 찰나, 어떤 여성이 그녀의 이름을 부르며 불러세웠다.`,
        );
        await nice_nature.say_and_wait('에? 야채가게 아주머니? 여긴 어쩐 일이세요?');
        await era.printAndWait(
          '야채가게 아주머니 「당연히 네이처가 학원생활 잘하고 있나 보러 왔지! 나뿐만이 아니라고—」',
        );
        await nice_nature.say_and_wait(
          '아! 고깃집 아저씨! 구멍가게 할머니까지... 다들 어떻게 오신 거예요...',
        );
        await era.printAndWait(
          '야채가게 아주머니 「당연히 와야지! 우리 상점가 식구들 모두가 네이처의 팬인걸!」',
        );
        await nice_nature.say_and_wait(
          '으으... 그 마음은 정말 기쁘지만... 그래도 이렇게까지 오시면 왠지 부끄럽다니까요...',
        );
        await era.printAndWait(
          '양 갈래 머리에 얼굴을 파묻은 네이처가 상점가 이웃들에게 둘러싸였다.',
        );
        await era.printAndWait(
          `그녀에게 이번 팬 대감사제는 아주 즐거운 기억으로 남을 것 같다...`,
        );
        break;
      case 47:
        await print_event_name('크리스마스', nice_nature);
        await nice_nature.say_and_wait('여보세요? 나야. 보이스 피싱 아니고 본인 맞으니까 끊지 마?');
        await era.printAndWait('전화기 너머로 익숙한 목소리, 나이스 네이처의 목소리가 들려왔다.');
        await nice_nature.say_and_wait(
          '저기 말야, 지금 공원으로 좀 와줄 수 있어? 지금 바로... 응, 이따 봐!',
        );
        era.drawLine({ content: '⏰ 공원 도착 ⏰' });
        await nice_nature.say_and_wait(
          `아, 왔다! ${era.get('callname:60:0')}! 여기야, 여기~!`,
        );
        await era.printAndWait('멀리서 손을 흔드는 네이처의 모습이 보였다.');
        await era.printAndWait('오늘은 크리스마스다.');
        await nice_nature.say_and_wait(
          `뭐, 별일은 아니고. 그냥 ${era.get(
            'callname:60:60',
          )}이(가) 보기에 네 스케줄이 비어 있는 것 같아서, 같이 크리스마스를 보내자고 부른 것뿐이야!`,
        );
        await nice_nature.say_and_wait('안... 돼?');
        await era.printAndWait(
          '긍정적인 답변을 듣자 네이처는 다시 환하게 미소 지었고, 곧 등 뒤에서 선물 상자 하나를 꺼냈다.',
        );
        await nice_nature.say_and_wait(
          '이거! 메리 크리스마스! 이건 내가 직접 짠 목도리야... 솜씨가 서툴러서 무늬도 좀 촌스러울지 모르겠지만...',
        );
        await nice_nature.say_and_wait('그래도! 괜찮다면 받아줬으면 좋겠어!');
        await era.printAndWait(
          '상자 안에는 정성스럽게 짜인 목도리가 담겨 있었다. 네이처의 진심이 느껴지는 선물이었다.',
        );
        await nice_nature.say_and_wait(
          '마음에 들어? 그, 그렇구나... 내 기분 맞춰주려고 하는 말 아니지?',
        );
        await era.printAndWait(
          '불안해하는 네이처를 안심시켜준 뒤, 두 사람은 평화롭고 따뜻한 크리스마스를 함께 보냈다...',
        );
        break;
      default:
        return await super.celebration(hook);
    }
  }

  async load_talk() {
    const nice_nature = get_chara_talk(this.id);
    if (
      era.get('cflag:60:임신단계') >> pregnant_stage_enum.embryo &&
      !LifeEventMarks.get_marks(this.id).report
    ) {
      const callname = sys_get_colored_callname(this.id, 0);
      await nice_nature.say_and_wait([
        '아하하, 역시 그런가. 결국 네이처 씨는... 하지만 잠깐, 안 돼, ',
        callname,
        '. 우리 아이만큼은, 적어도, 적어도 우리 아이에게 이름이라도 지어줘...',
      ]);
      await nice_nature.say_and_wait(
        '이 아이에게 아빠가 없어도 상관없어. 나 혼자서라도 키울 수 있어. 하지만 제발, 부탁이야, 이름 하나만이라도...',
      );
      await nice_nature.say_and_wait([
        '『카게츠 네이처』? 『엘레강트 네이처』? 그런 이름이라도 좋아. 이건 네이처 씨로서 당신에게 하는 마지막 부탁이야, ',
        callname,
        '. 이름을 지어줘...',
      ]);
      await era.printAndWait(
        [nice_nature.get_colored_name(), '「', callname, '————!!」'],
        { color: nice_nature.color, fontSize: '3rem' },
      );
    } else {
      await nice_nature.say_and_wait([
        '만약 ',
        sys_get_colored_callname(this.id, 0),
        '이라면, 분명 더 나은 미래를 찾아낼 수 있을 거야... ',
        sys_get_callname(this.id, this.id),
        '는 쌤을 믿고 있다구? 지금도, 예전도, 그리고 앞으로도...',
      ]);
    }
  }
};