/**
 * @file 나이스 네이처 - 육성
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const {
  sys_change_lust,
  sys_change_motivation,
} = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const Edu60RaceEnd = require('#/event/edu/edu-events-60/race-end');
const nature_school_atrium = require('#/event/edu/edu-events-60/school-atrium');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const get_skills_and_print_in_event = require('#/event/snippets/get-skills-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { location_enum } = require('#/data/locations');

module.exports = class extends Edu60RaceEnd {
  async back_school(nature, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 60) {
      add_event(hook.hook, event_object);
      return;
    }
    if (event_object?.arg !== 'see_fish') {
      return false;
    }
    await print_event_name('물고기 보러 가자', nature);
    await era.printAndWait(`${me.name}이(가) 나이스 네이처와 함께 돌아가는 길에──`);
    await nature.say_and_wait('저기, 어차피 시간도 좀 남았는데…… 그게……………… 물고기 보러 안 갈래?');
    await nature.say_and_wait(`생선 가게 아주머니가 말이야, 『다 같이 보러 오렴』이라고 하셨거든.`);
    era.printButton('「물론이지」', 1);
    await era.input();
    await nature.say_and_wait('……좋아, 그럼 가자.');
    era.drawLine();
    await era.printAndWait(
      `${me.name}은(는) 생선 가게에서 네이처가 사고 싶은 물고기가 있는 줄 알았지만, 네이처를 따라 목적지에 도착해보니……`,
    );
    await nature.say_and_wait(
      '오오～ 헤엄친다 헤엄쳐～～ 한 무리 가득 맛있어 보이는 물고기들이네～～',
    );
    era.printButton('「설마 수족관에 올 줄이야……!!」', 1);
    await era.input();
    await nature.say_and_wait('……아하하.');
    await nature.say_and_wait(
      '아── 알았어 알았다고! 나도 알아. 조금 더 근사한 권유 방법이 있었겠지～ 싶지?',
    );
    await nature.say_and_wait(
      `그게 말이야, ${era.get('callname:60:60')}는 귀엽게 초대하는 건 잘 못한단 말이지──`,
    );
    await nature.say_and_wait('그래도 말이야, 모처럼 아주머니가 티켓도 주셨고, 둘이서 푹 쉬다 오라고 하셨으니까……');
    await nature.say_and_wait('절대로 속이려던 건 아냐. 정말이라니까.');
    era.printButton('「초대해 줘서 고마워」', 1);
    await era.input();
    await nature.say_and_wait('오…… 오오…… 이게 어른의 여유인가? 제법인걸……');
    await nature.say_and_wait('알았어, 응. 쌤이 괜찮다면 다행이고.');
    await nature.say_and_wait(
      '그러니까, 뭐 사과라고 하긴 좀 그렇지만…… 쌤이 보고 싶은 걸 보러 가자!',
    );
    await nature.say_and_wait(
      '좀 찾아봤더니 재미있는 전시가 많더라고. 역시 데이…… 놀러 오는 인기 장소라 그런가.',
    );
    await nature.say_and_wait('해파리 전시나 가오리…… 도미…… 전부 꽤 맛있어 보이네.');
    await nature.say_and_wait('아, 표준 코스로 가려면 돌고래 쇼 같은 걸 볼까?');
    await nature.say_and_wait('……아니, 나랑 그렇게 귀여운 공연을 보는 건 좀 안 어울리나.');
    await nature.say_and_wait(
      `좋아, ${era.get('callname:60:0')}의 결정에 맡길게! 뭐 보고 싶어?`,
    );
    era.println();
    era.printButton('「돌고래 쇼」', 1);
    era.printButton('「……공포의 식인어(?) 특별전!!」', 2);
    const ret = await era.input();
    if (ret === 1) {
      await nature.say_and_wait('……저기 말이야. 내 말 듣고 있었어?');
      era.printButton('「듣고 있었어」', 1);
      await era.input();
      await nature.say_and_wait('응, 알고 있어. 하지만 그런 뜻이 아니었거든?');
      await nature.say_and_wait('아니, 뭐…… 결국 내가 맞춰준다고 말하긴 했으니까.');
      await nature.say_and_wait(
        '알았어 알았어. 쌤이 보면서 힐링할 수 있다면, 뭐.',
      );
      await nature.say_and_wait(
        '난 『꺄아～』 같은 귀여운 반응은 못 해주니까, 그 점은 이해해 줘──',
      );
      era.drawLine();
      await nature.say_and_wait(
        '오오, 힘이 넘치는 돌고래네～ 어? 푸핫!? 잠깐만, 물! 물이──',
      );
      await nature.say_and_wait('가아아악──!!?');
      await nature.say_and_wait('제길…… 저 물보라는 반칙이잖아.');
      await nature.say_and_wait('원래 돌고래 쇼가 이렇게 스릴 넘치는 오락이었나……');
      await nature.say_and_wait(
        '정말이지…… 『꺄아～』는커녕, 단전에서 비명이 터져 나왔네.',
      );
      era.printButton('「즐거워 보이네」', 1);
      await era.input();
      await nature.say_and_wait('후후…… 응, 그러게. 나한텐 이런 방식이 더 잘 맞는 것 같아.');
      await era.printAndWait(
        `${me.name}과(와) 나이스 네이처는 수족관에서 즐거운 시간을 보내며 푹 쉬었다.`,
      );
    } else {
      await nature.say_and_wait('오～ 재밌어 보이는데!');
      await nature.say_and_wait(
        '게다가 무려 『공포의』 전시라니. 얼마나 무서운지 실력 좀 감상해 볼까～',
      );
      await era.printAndWait(`그렇게 ${me.name}과(와) 나이스 네이처는 전시 구역으로 향했다……`);
      await nature.say_and_wait('귀!');
      era.printButton('「……귀?」', 1);
      await era.input();
      await nature.say_and_wait('귀, 여, 워, 죽, 겠, 어!!');
      await nature.say_and_wait(
        '우와아아～～～!! 뭐야 이거! 동글동글한 눈 좀 봐! 『우무문어』라고 하는구나～',
      );
      await nature.say_and_wait('꺄아～～～～');
      await nature.say_and_wait('──앗!!');
      era.printButton('「네가 즐거워하니 다행이야」', 1);
      await era.input();
      await nature.say_and_wait(
        '너…… 너무 반칙이잖아! 공포의 전시라더니, 결과적으로 다 이렇게 귀여운 생물들뿐이고!',
      );
      await nature.say_and_wait('제길………… 너무 귀여워.');
      era.printButton('「저쪽 물고기도 나쁘지 않은데……」', 1);
      await era.input();
      await nature.say_and_wait('우와, 진짜네! 못생겨서 더 귀여워～～!');
      await era.printAndWait(
        `${me.name}과(와) 나이스 네이처는 수족관에서 즐거운 시간을 보내며 푹 쉬었다.`,
      );
    }
    era.println();
    get_attr_and_print_in_event(60, [0, 0, 0, 10, 10], 20) &&
      (await era.waitAnyKey());
    return true;
  }

  async out_shopping(nature, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 60) {
      add_event(hook.hook, event_object);
      return;
    }
    let ret;
    switch (event_object?.arg) {
      case 'hard_work_trainer':
        await print_event_name(
          `${era.get('callname:60:60')}와 고생한 트레이너`,
          nature,
        );

        await era.printAndWait('며칠간 꽉 찬 일정으로 이어지던 업무가 드디어 일단락되었다……');
        await era.printAndWait(
          `${me.name}은(는) 스스로에게 줄 보상으로 맛있는 음식을 사기 위해 무거운 몸을 이끌고 상점가로 향했는데──`,
        );
        await nature.say_and_wait('실례합니다, 거기 트레이너님, 잠시만 기다려 주세요!');
        era.printButton('「네이처……?」', 1);
        await era.input();
        await nature.say_and_wait(
          '에휴── 일하느라 바쁘다는 얘기는 들었지만, 이렇게 초췌해질 때까지 일만 한 거야?',
        );
        await nature.say_and_wait(
          `어쩔 수 없네, ${era.get(
            'callname:60:60',
          )}가 한턱 쏠게. 자, 이쪽으로 와.`,
        );
        await nature.say_and_wait(
          '지금은 개점 준비 중이라 손님은 안 올 거야. 제일 안쪽 가라오케석에 앉아 있어.',
        );
        await nature.say_and_wait(
          `이 가게 사장님이랑 아는 사이거든. 사정을 말씀드렸더니 빌려주신대.`,
        );
        await era.printAndWait(`나이스 네이처는 ${me.name}을(를) 어느 가게의 구석 자리로 안내했다.`);
        await nature.say_and_wait(
          `자, ${era.get(
            'callname:60:0',
          )}은(는) 뭘 먹고 싶어? 뭐든지 주문해도 된다고? 내가 만들 수 있는 거라면.`,
        );
        era.println();
        era.printButton('「아무거나 좋아, 배고파서 죽을 것 같아……」', 1);
        if (era.get('love:60') >= 75) {
          era.printButton('「네이처……」', 2);
        }
        ret = await era.input();
        if (ret === 1) {
          await nature.say_and_wait(
            '정말이지…… 잠깐만 기다려 봐, 간단하게 뭐 좀 만들어 올게…… 맛은 보장 못 하지만.',
          );
          await era.printAndWait(
            `몇 분 뒤, 나이스 네이처는 직접 만든 볶음밥을 ${me.name}에게 가져다 주었다.`,
          );
          era.printButton('「양이 이렇게 많은데, 괜찮아?」', 1);
          await era.input();
          await nature.say_and_wait('어차피 사장님도 『마음껏 대접하렴』이라고 하셨으니까.');
          await nature.say_and_wait('자 자, 식기 전에 어서 먹어.');
          await era.printAndWait(
            `나온 볶음밥은 비주얼과 맛 모두 훌륭해서, ${me.name}의 젓가락…… 아니, 숟가락이 멈출 줄 몰랐다.`,
          );
          await nature.say_and_wait(
            '너무 과장하는 거 아냐? 그냥 어릴 때부터 엄마를 도와드려서 좀 할 줄 아는 것뿐이야.',
          );
          await nature.say_and_wait('……어라, 벌써 다 먹었어!?');
          era.printButton('「너무 맛있어서 순식간에 다 먹었어」', 1);
          await era.input();
          await nature.say_and_wait(
            '괜찮아 괜찮아, 정말 배고팠던 거지? 주방 정리하고 올 테니까 그릇 이리 줘.',
          );
          await era.printAndWait(
            `${me.name}은(는) 멀어지는 나이스 네이처의 뒷모습을 배웅했습니다.`,
          );
          await era.printAndWait(
            '배가 불러서인지 갑자기 졸음이 쏟아지며 의식이 멀어진다──',
          );
          await nature.say_and_wait('……라……라라……♪');
          await nature.say_and_wait('우와! 나 때문에 깬 거야?');
          era.printButton('「……그 노래는?」', 1);
          await era.input();
          await nature.say_and_wait(
            '사실 나도 잘 몰라. 옛날에 엄마가 카운터에서 바쁘실 때 자주 부르시던 노래거든.',
          );
          await nature.say_and_wait(
            '옛날 생각이 나서 나도 모르게 흥얼거려 버렸네…… 미안.',
          );
          era.printButton('「오히려 계속 듣고 싶은데」', 1);
          await era.input();
          await nature.say_and_wait(
            `또 그런다～ ${era.get('callname:60:60')}한테 그런 빈말 안 해도 돼.`,
          );
          era.printButton(
            '「하지만 난 정말 네이처의 노랫소리가 좋은걸. 이 정도 실력이면 위닝 라이브도 문제없겠어!」',
            1,
          );
          await era.input();
          await nature.say_and_wait('흐, 흐응~ 그래? 트레이너 쌤은 참 특이한 취향이라니까.');
          await nature.say_and_wait(
            '……그래도, 『잘한다』가 아니라 『좋다』라고 해준 건 좀 안심되네. 참 편리한 말이야.',
          );
          await nature.say_and_wait(
            '그러면 누구와 비교당할 일도 없고, 누군가를 실망시키지도 않고, 기대에 못 미치는 자신에게 실망할 일도 없으니까.',
          );
          await nature.say_and_wait('아하하. 미안, 말이 너무 안 귀여웠지.');
          era.printButton('「그런 점도 포함해서 네이처가 좋은걸」', 1);
          await era.input();
          await nature.say_and_wait('바…… 바보야!');
          await nature.say_and_wait('그런 말 자꾸 하면 금방 의미가 없어진다고?');
          await era.printAndWait('가게 주인 「준비 다 됐니, 네이처?」');
          await nature.say_and_wait('아주머니, 감사합니다. 정말 큰 도움이 됐어요.');
          await era.printAndWait(
            '가게 주인 「옆에 이분이 소문으로 듣던 그 트레이너군이지? 네이처한테 얘기 많이 들었단다──」',
          );
          await nature.say_and_wait(
            '정말이지──! 그런 얘기 안 하셔도 돼요! 가자, 쌤!',
          );
          era.printButton('「소문……?」', 1);
          await era.input();
          await nature.say_and_wait('가, 자, 고, 요!');
          await era.printAndWait(
            `그렇게 사장님의 따뜻한 시선을 뒤로하며, ${me.name}과(와) 나이스 네이처는 가게를 나섰습니다.`,
          );
          era.println();
          sys_like_chara(60, 0, 50) && (await era.waitAnyKey());
        } else {
          await nature.say_and_wait('에…… 에엣?! 나를?!');
          await era.printAndWait(
            '대답을 듣자마자 나이스 네이처의 놀란 얼굴이 순식간에 붉게 물들었다.',
          );
          await nature.say_and_wait(
            '손님이 안 올 거라고는 했지만…… 여기는 엄연히 다른 사람 가게인데……',
          );
          era.printButton('「네이처가 뭐든 된다고 했잖아?」', 1);
          await era.input();
          await nature.say_and_wait('윽…… 그건 그렇지만…… 하지만……');
          await nature.say_and_wait(
            '으으…… 알았어…… 어른의 스트레스와 피로는 이런 걸로 풀어야 효율적이라는 거지……',
          );
          await era.printAndWait(
            `나이스 네이처는 입술을 깨물며 결심한 듯, 소파에 축 늘어져 있는 ${me.name} 앞으로 다가왔다. 그리고 부드러운 몸을 ${me.name} 위로 완전히 포개며 귓가에 속삭였다.`,
          );
          await nature.say_and_wait(
            '너무 격렬한 건 안 돼…… 옷이랑 방 치우는 거 귀찮으니까……',
          );
          await nature.say_and_wait('그리고, 아주머니한테 들킬지도 모른단 말이야……');
          await era.printAndWait(
            `물론, ${me.name}이(가) 그 말을 들었는지 어땠는지는 또 별개의 이야기……`,
          );
          sys_change_lust(0, lust_from_palam);
          sys_change_lust(60, lust_from_palam);
          await quick_into_sex(60);
        }
        break;
      case 'grass_baseball':
        await print_event_name('동네 야구로 응원!', nature);

        await nature.say_and_wait('경기장이 여기야? 오～ 정말 사람이 많이 모였네～');
        await nature.say_and_wait(
          '그건 그렇고, 동네 야구를 도와주기로 하다니…… 트레이너 일만으로도 충분히 바쁠 텐데.',
        );
        await era.printAndWait(
          `사실 며칠 전, 상점가 사람들이 ${me.name}을(를) 초대했고, ${me.name}은(는) 동네 야구 대회에 참가하기로 했다.`,
        );
        era.printButton('「다들 항상 널 응원해 주시니까」', 1);
        await era.input();
        await nature.say_and_wait('에휴, 다들 나한테 잘해주시긴 하지만……');
        await nature.say_and_wait('……그래도, 너무 무리해서 다치지는 마～?');
        await nature.say_and_wait('평소에도 이미 충분히 무리하고 있으니까……');
        await era.printAndWait('그렇게 상점가 동네 야구 대항전이 막을 올렸다.');
        era.drawLine();
        await era.printAndWait('두 팀 모두 한 치의 양보도 없이 0대 0의 팽팽한 접전이 이어졌다.');
        await nature.say_and_wait(
          '와, 레이스가 점점 뜨거워지네～ 근데 트레이너 쌤, 엄청 지쳐 보이는데.',
        );
        await nature.say_and_wait(
          '편드는 건 아니지만, 이미 충분히 노력했으니까 이제 교체하는 게 낫지 않아?',
        );
        era.printButton('「아직 더 할 수 있어!……」', 1);
        await era.input();
        await nature.say_and_wait(
          '에휴, 열혈이시긴…… 아, 알았어. 내가 챙겨주면 더 힘내겠다는 거지?',
        );
        await nature.say_and_wait('마실 것 좀 챙겨올 테니까 얌전히 여기 앉아 있어～?');
        await nature.say_and_wait('정말이지…… 어디 보자, 집행위원회 텐트가……');
        await era.printAndWait(
          `상점가 아저씨 「이런～ 조금만 더 하면 되는데. ${me.name}이(가) 열심히는 해주는데 좀처럼 점수가 안 나네……」`,
        );
        await nature.say_and_wait('오, 쌤 이야기를 하고 계시나……?', true);
        await era.printAndWait(
          '상점가 아주머니 「긴장해서 그럴 거야. 도와주러 온 건데 주변에 모르는 사람들뿐이니……」',
        );
        await era.printAndWait(
          `상점가 아저씨 「음…… 어떻게 하면 ${me.name}이(가) 기운을 좀 차릴 수 있을까?」`,
        );
        await nature.say_and_wait('어쩐지…… 꽤 익숙한 상황이네……', true);
        await era.printAndWait(
          '이 대화를 들은 나이스 네이처는 자신이 레이스할 때 받았던 모두의 응원을 떠올렸다……',
        );
        await nature.say_and_wait(
          '내 등을 밀어주고, 계속 노력하게 해준 사람이 바로 모두와 트레이너 쌤이였지……',
          true,
        );
        await nature.say_and_wait('걱정만 하고 있을 게 아니라, 이번에는 내가──', true);
        era.drawLine();
        await era.printAndWait(
          `드디어 9회 말. 1점만 내면 끝나는 상황에서 ${me.name}의 타석이 돌아왔다.`,
        );
        await era.printAndWait(
          '마운드에 서 있는 아저씨는 과거 고시엔 후보 선수였던 실력자.',
        );
        await era.printAndWait(
          `${me.name}은(는) 이미 투 스트라이크로 몰려, 이대로 끝날 것 같던 그때──`,
        );
        await nature.say_and_wait('힘내──!!');
        era.printWholeImage(`${era.get('cstr:60:이미지')}_应援_半身`, {
          width: 8,
          offset: 8,
        });
        await era.printAndWait(
          '뒤를 돌아보니, 어느새 치어리더 복장으로 갈아입은 네이처가 관객석에 있었다.',
        );
        await era.printAndWait(`그녀는 온 힘을 다해 ${me.name}을(를) 응원하고 있었다.`);
        await nature.say_and_wait('지지 마, 트레이너 쌤! 한 공만 더! 치면 이기는 거야!');
        await nature.say_and_wait('기운 내! 기운! 다 같이 외쳐요!');
        await era.printAndWait('사람들 「와아아～! Go Fight Win!」');
        await nature.say_and_wait('히, 힘내! 트레이너!');
        await era.printAndWait(
          `나이스 네이처는 부끄러워하면서도 큰 소리로 ${me.name}을(를) 응원했고, 주변 사람들도 마찬가지였다. 반드시 그 마음에 답해야만 한다……!`,
        );
        era.printButton('「흐아아압──!!」', 1);
        await era.input();
        await nature.say_and_wait('날려버려──!!');
        await era.printAndWait('깡──!');
        await nature.say_and_wait(
          '해냈어～! 성공이야! 쌤 대단해! 홈런! 끝내기 홈런이야!',
        );
        era.drawLine();
        era.printButton('「응원해 줘서 고마워!」', 1);
        era.printButton('「네 응원 덕분이야!」', 2);
        if (era.get('love:60') >= 75) {
          era.printButton('「네이처～! 고마워～!」', 3);
        }
        ret = await era.input();
        if (ret === 1) {
          await nature.say_and_wait(
            '으윽…… 그렇게 뜨거운 눈빛으로 쳐다보니까 민망하잖아……',
          );
          await nature.say_and_wait(
            '……고맙다는 말을 해야 할 건 내 쪽이야. 항상 응원해 줘서 고마워.',
          );
          await nature.say_and_wait(
            '아무튼, 앞으로도 계속 힘낼 테니까…… 아～ 나답지 않은 소리를 해버렸네, 정말이지～!',
          );
          await era.printAndWait(
            `나이스 네이처는 쑥스러워하면서도 진심으로 ${me.name}을(를) 응원했다. 오늘 하루, ${me.name}은(는) 무엇과도 바꿀 수 없는 소중한 추억을 남겼다!`,
          );
          era.println();
          get_skills_and_print_in_event(60, [202121]) &&
            (await era.waitAnyKey());
          get_attr_and_print_in_event(60, [0, 20, 0, 0, 0], 20) &&
            (await era.waitAnyKey());
          sys_change_motivation(60, 1) && (await era.waitAnyKey());
        } else if (ret === 2) {
          await nature.say_and_wait(
            `아냐 아냐, 그렇게 말하지 마. ${era.get(
              'callname:60:0',
            )}은(는) 이미 충분히 노력했어. 이건 쌤의 노력과 실력으로 따낸 거야. 하지만……`,
          );
          await era.printAndWait('나이스 네이처는 부끄러운 듯 시선을 돌렸다.');
          await nature.say_and_wait(
            '응원하는 보람이 있네. 다음에 야구 할 때도 응원하러 가줄까…… 그냥 해본 소리야.',
          );
          await era.printAndWait(
            `${me.name}은(는) 서로의 깊은 유대감을 느꼈다. 정말 멋진 하루였다!`,
          );
          era.println();
          get_skills_and_print_in_event(60, [202121]) &&
            (await era.waitAnyKey());
          get_attr_and_print_in_event(60, [0, 20, 20, 0, 0], 20) &&
            (await era.waitAnyKey());
        } else {
          await nature.say_and_wait('앗, 그렇게 크게 소리 지르지 마～ 이목이 집중되잖아!');
          await era.printAndWait(
            `나이스 네이처는 붉어진 얼굴로 ${me.name}의 외침에 답했다.`,
          );
          await nature.say_and_wait('정말이지～ 나 옷 갈아입으러 갈 거야!');
          era.printButton('「옷 갈아입는 건 조금 나중에 하면 안 될까?」', 1);
          await era.input();
          await nature.say_and_wait(
            '왜 그래? 이 옷 엄청 부끄럽단 말이야. 게다가 혼자만 휑해서 추운 것 같기도 하고……',
          );
          await era.printAndWait(
            `나이스 네이처는 투덜거리며 발걸음을 멈추고 ${me.name}을(를) 돌아보았다.`,
          );
          era.printButton('「그게…… 이 차림의 네이처가 너무 귀여워서……」', 1);
          await era.input();
          await nature.say_and_wait('윽! 하아? 그런 기습은 반칙이라고……');
          await era.printAndWait('예상치 못한 말에 나이스 네이처는 한동안 어쩔 줄 몰라 했다.');
          era.printButton('「……욕구가…… 좀 억제가 안 되네……」', 1);
          await era.input();
          await nature.say_and_wait('……ㅆ,쌔,쌤 갑자기 또 무슨 소리를 하는 거야아아아아!');
          await era.printAndWait('연이은 기습에 나이스 네이처는 비명을 질렀다. ');
          await era.printAndWait('하지만 이내 상점가 사람들의 시선이 집중된 것을 깨닫고는 ');
          await era.printAndWait('황급히 주변에 웃으며 수습한 뒤 다시 고개를 돌려 ');
          await era.printAndWait('둘만 들릴 정도의 작은 목소리로 투덜거렸다.');
          await nature.say_and_wait(
            `이 변태 ${era.get('callname:60:0')}! 어떻게 이런 데서 그런 말을 할 수가 있어!`,
          );
          era.printButton('「하지만 네이처 차림이 너무 야한걸……」', 1);
          await era.input();
          await nature.say_and_wait('으냐아아아! 알았으니까! 더 말하지 마!');
          await era.printAndWait(
            `얼굴이 새빨개진 네이처가 필사적으로 손을 휘두르며 ${me.name}의 말을 막았다.`,
          );
          await nature.say_and_wait(
            `으으…… ${era.get('callname:60:0')}을(를) 이렇게 흥분시킨 건 내 잘못이기도 하네.`,
          );
          await nature.say_and_wait(
            '책임지고 해결해 줄 테니까…… 그래도 이런 데서 할 순 없잖아?',
          );
          era.printButton('「탈의실로 가자」', 1);
          await era.input();
          await nature.say_and_wait('거기도 들키기 쉬운 곳이잖아!');
          era.printButton('「그럼 목소리를 죽여달라고 부탁할게」', 1);
          await era.input();
          await nature.say_and_wait(
            `그게 무슨 말이야! 잠…… ${era.get('callname:60:0')}?!`,
          );
          await era.printAndWait(
            `${me.name}은(는) 나이스 네이처의 반대를 뒤로하고, 그녀를 번쩍 안아 들고 탈의실로 달려가 문을 잠갔다.`,
          );
          await era.printAndWait('다행히 이 모습을 본 사람은 없는 것 같다.');
          await era.printAndWait('좁은 공간 안에서 폭풍 같은 전투가 시작되려 하고 있었다……');
          sys_change_lust(0, lust_from_palam);
          sys_change_lust(60, lust_from_palam);
          // 치어리더 복장
          await quick_into_sex(60);
        }
        break;
      default:
        return false;
    }
    return true;
  }

  async out_start(nature, me, callname, hook, extra_flag, event_object) {
    if (era.get('flag:현재상호작용캐릭터') !== 60) {
      add_event(hook.hook, event_object);
      return;
    }
    const event_arg = event_object?.arg;
    if (event_arg !== 95 + 10) {
      return false;
    }
    const mcqueen_talk = get_chara_talk(13);
    const ryan_talk = get_chara_talk(27);
    await print_event_name('네이처 in 메지로', nature);

    await era.printAndWait('오늘 나이스 네이처는 나타나지 않았다. 왜냐하면──');
    await era.printAndWait(
      '「아리마 기념」 이후, 나이스 네이처는 메지로 맥퀸과 메지로 라이언에게 강함의 비결을 물었다.',
    );
    await era.printAndWait(
      `오늘 그녀는 두 사람의 초대를 받아 강함의 이유를 배우러 갔다. ──말하자면 메지로가로 하루 유학을 떠난 셈.`,
    );
    await era.printAndWait(
      `나이스 네이처는 성실하다. 분명 무언가 수확을 얻어 돌아오겠지. ${me.name}은(는) 그렇게 믿으며 그녀를 묵묵히 기다리기로 했다──`,
    );
    era.drawLine();
    await mcqueen_talk.say_and_wait(
      '──방금 그 다즐링 티는 역시 향기부터가 다르군요. 풍미가 아주 깊어요.',
    );
    await ryan_talk.say_and_wait(
      '전부 수작업으로 만든 차라고 하더라고! 전문가의 기술은 역시 믿음직해.',
    );
    await nature.say_and_wait('……저기── 이게 무슨 상황인가요? 왜 차를 마시고 계시죠?');
    await nature.say_and_wait('전 당연히 훈련 코스로 갈 줄 알았는데……');
    await mcqueen_talk.say_and_wait(
      '다 마신 뒤엔 물론 갈 겁니다. 하지만 홍차를 즐기는 것도 일과의 일부예요.',
    );
    await nature.say_and_wait('일과…… 요?');
    await mcqueen_talk.say_and_wait('오늘은 네이처 씨에게 저희의 평소 모습을 보여드리고 싶었습니다.');
    await ryan_talk.say_and_wait(
      '바로 그거야! 하지만 시간도 다 됐으니, 이제 훈련하러 가자!',
    );
    await nature.say_and_wait('아, 네, 넵……!');
    era.drawLine();
    await mcqueen_talk.say_and_wait('하아…… 하아…… 하아……');
    await ryan_talk.say_and_wait('수고했어, 맥퀸! 다음엔 뭐 할 거야?');
    await mcqueen_talk.say_and_wait('……물론 한 바퀴 더 도는 거죠.');
    await mcqueen_talk.say_and_wait(
      '방금 바퀴는 열 바퀴째라 그런지 속도가 조금 떨어졌어요…… 그렇죠?',
    );
    await ryan_talk.say_and_wait('아하하! 좋아, 네가 만족할 때까지 달려보자고!');
    await mcqueen_talk.say_and_wait('네, 다녀오겠습니다!');
    await nature.say_and_wait('하아…… 하아…… 하아악……!');
    await ryan_talk.say_and_wait('오, 네이처! 어서 와! 맥퀸은 막 다시 출발했어!');
    await nature.say_and_wait(
      `방금 봤어요…… ${mcqueen_talk.name}은(는) 더 달리는 건가요……!?`,
    );
    await ryan_talk.say_and_wait(
      `더 달린다기보다, 아직 부족하다는 느낌일까? 본인이 『속도를 더 올리고 싶다』고 했으니까.`,
    );
    await nature.say_and_wait(
      `${mcqueen_talk.name}의 지구력은 충분히 대단한데, 그런데도 더 정진하고 싶은 건가……`,
    );
    await ryan_talk.say_and_wait(
      `……내 생각에 맥퀸은 말이야, 아무리 강해져도 현재의 자신에게 만족하지 않을 거야.`,
    );
    await ryan_talk.say_and_wait(
      `그 아이의 목표는 그만큼 높거든. 그래서 늘 쉬지 않고 노력하는 거지.`,
    );
    await ryan_talk.say_and_wait('그런 모습을 계속 보고 있으면, 나도 힘내야겠다는 생각이 들거든.');
    await nature.say_and_wait('……으으～～～～ 저도 다시 뛰러 갈게요……!');
    await ryan_talk.say_and_wait('아하하하! 역시 지기 싫어한다니까! 조심히 다녀와──!');
    era.drawLine();
    await nature.say_and_wait('──오늘 정말 감사했습니다, 두 분 다!');
    await ryan_talk.say_and_wait('에이── 결국 하루 종일 우리 훈련에 어울리게 해버렸네.');
    await nature.say_and_wait('아니요, 오히려 좋았어요!');
    await nature.say_and_wait('……드디어 알 것 같아요. 전 지금까지 정말 제 생각만 하고 있었네요──');
    await nature.say_and_wait(
      '두 분은 서로를 제대로 바라보고 계세요. 서로의 강함을 인정하고, 경쟁하고 있죠.',
    );
    await nature.say_and_wait('하지만 저는…… 그저 남의 강함을 부러워하기만 했어요.');
    await nature.say_and_wait(
      '늘 자신의 부족한 점만 보고…… 자신이 가진 재능이 무엇인지는 생각도 안 해봤거든요.',
    );
    await mcqueen_talk.say_and_wait('……그래서요?');
    await nature.say_and_wait(
      '앞으로는 그런 것들을 제대로 직시하려고 해요. 타인도…… 그리고 저 자신도요.',
    );
    await ryan_talk.say_and_wait('음, 좋아! 그게 분명 네이처가 강해지는 밑거름이 될 거야!');
    await nature.say_and_wait('저기…… 마지막으로 하나만 여쭤봐도 될까요?');
    await nature.say_and_wait('왜 두 분은 저를 도와주신 건가요?');
    await mcqueen_talk.say_and_wait('……그건 저희에게 귀족의 의무가 있기 때문입니다.');
    await ryan_talk.say_and_wait('푸핫! 지금 쑥스러워서 그러는 거야?');
    await ryan_talk.say_and_wait(
      '진짜 이유는 말이야, 강해진 너와 대결해서 나도 더 강해지고 싶기 때문이야!',
    );
    await ryan_talk.say_and_wait(
      '──우리도 다음 『타카라즈카 기념』에 나갈 생각이니까!',
    );
    await nature.say_and_wait('……윽!');
    await mcqueen_talk.say_and_wait(
      '후후, 표정 좋은걸요. 그럼 다음엔 한신에서 뵙죠.',
    );
    await nature.say_and_wait('네……!');
    era.drawLine();
    await era.printAndWait(
      `다음 날 ${me.name}이(가) 나이스 네이처를 만났을 때, 그녀의 표정은 매우 상쾌해 보였습니다.`,
    );
    await nature.say_and_wait('나…… 그 두 사람을 이기고 싶어. ──『타카라즈카 기념』에서!');
    era.println();
    get_attr_and_print_in_event(60, [0, 5, 0, 5, 0], 0) &&
      (await era.waitAnyKey());
    return true;
  }

  async school_atrium(nature, me, callname, hook, extra_flag, event_object) {
    return await nature_school_atrium(nature, me, hook, event_object);
  }

  async week_end(nature, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg;
    if (event_arg !== 47 + 32 && event_arg !== 95 + 32) {
      return;
    }
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:60:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(hook.hook, event_object);
      return false;
    }
    await print_event_name('여름 합숙 종료', nature);

    await era.printAndWait(
      '오늘은 여름 합숙의 마지막 날이다. 기념으로 학원에서 성대한 불꽃놀이를 준비했다.',
    );
    await era.printAndWait(
      '나이스 네이처와 어깨를 나란히 하고 해변에 서서, 바다 위로 터지는 불꽃을 바라보았다.',
    );
    await nature.say_and_wait(
      `──여름이 끝나가네. 뭐랄까, 정말 청춘 같아── 나랑은 좀 안 어울리는 이미지지만. 그래도, ${era.get(
        'callname:60:0',
      )}──`,
    );
    await era.printAndWait(
      `옆에 있던 나이스 네이처가 감상에 젖었지만, 불꽃이 터지는 소리 때문에 뒷말이 잘 들리지 않았다.`,
    );
    await era.printAndWait(
      `그녀가 마지막에 한 말을 되물으려 했지만, 네이처는 살짝 미소 지으며 말을 아꼈다.`,
    );
    await era.printAndWait('나이스 네이처와의 여름 합숙은 이렇게 마무리되었다.');
    era.println();
    sys_like_chara(60, 0, 50) && (await era.waitAnyKey());
  }

  async week_start(nice_nature, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg;
    if (event_arg === 47 + 1 || event_arg === 95 + 1) {
      await print_event_name('새해', nice_nature);
      await nice_nature.say_and_wait(
        `${era.get('callname:60:0')}, 새해 다짐 안 써볼래?`,
      );
      await era.printAndWait('나이스 네이처가 그렇게 말하며 붓과 종이를 건넸다.');
      await era.printAndWait(
        '새해 다짐── 새해에 바라는 기대와 축복을 종이에 담아보자. 써야 할 내용은──',
      );
      era.printButton('「건강」', 1);
      era.printButton('「강함」', 2);
      era.printButton('「다재다능」', 3);
      if (era.get('love:60') >= 75) {
        era.printButton('「다자녀」', 4);
      }
      const ret = await era.input();
      if (ret === 1) {
        await nice_nature.say_and_wait(
          `건강이라니…… ${era.get(
            'callname:60:0'
          )}도 이제 그런 걸 챙길 나이가 됐구나. 허리나 어깨 아픈 건 참 성가시지? ${era.get(
            'callname:60:60'
          )}도 다 알아──`,
        );
        await nice_nature.say_and_wait([
          '어? 본인 거 쓴 게 아냐? 그럼……? 엣?! 나?! 아니, 그게……',
          callname,
          '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 말은 너무 반칙이야!',
          callname,
          '도 나도, 둘 다 건강하게 이 새해를 보내자!',
        ]);
        get_attr_and_print_in_event(
          60,
          undefined,
          0,
          JSON.parse('{"체력":300}'),
        ) && (await era.waitAnyKey());
      } else if (ret === 2) {
        await nice_nature.say_and_wait([
          '강해지는 것 말이지～',
          callname,
          ', 의외로 열혈인걸? 아니면 정신 연령이 겉보기보다…… 하하하, 농담이야……',
        ]);
        await nice_nature.say_and_wait([
          '어? 본인 거 쓴 게 아냐? 그럼……? 엣?! 나?! 아니, 그게……',
          callname,
          '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 말은 너무 반칙이야!',
          callname,
          '도 나도, 둘 다 즐겁게 이 새해를 보내자!',
        ]);
        get_attr_and_print_in_event(60, new Array(5).fill(10), 0) &&
          (await era.waitAnyKey());
      } else if (ret === 4) {
        await nice_nature.say_and_wait(
          `다, 다자녀라니? ${era.get(
            'callname:60:0'
          )}도 참, 아침부터 너무 대담한 화제를…… 하지만 ${era.get(
            'callname:60:0'
          )}이 원한다면…… 나도 괜찮아. 아니면…… 지금부터 시작해 볼까?`,
        );
        await era.printAndWait(
          '얼굴이 붉어진 나이스 네이처가 한 걸음씩 다가온다. 한판 대결이 불가피해 보이는데……',
        );
        await quick_into_sex(60);
      } else {
        await nice_nature.say_and_wait(
          `다재다능인가? 확실히 재능이 많은 사람이 ${nice_nature.get_child_sex_title()}들에게도 인기가 많겠지. ${era.get(
            'callname:60:0'
          )}도 이제 그런 걸 신경 쓸 나이가 됐구나. 슬슬 자신의 ${
            nice_nature.sex
          }를 생각해야 할…… 내가 이런 말 하는 것도 참 이상하네, 하하하하……`,
        );
        await nice_nature.say_and_wait([
          '어? 본인 거 쓴 게 아냐? 그럼……? 엣?! 나?! 아니, 그게……',
          callname,
          '은(는) 자기보다 나를 더 챙겨주는구나…… 으윽! 그런 말은 너무 반칙이야!',
          callname,
          '도 나도, 둘 다 즐겁게 이 새해를 보내자!',
        ]);
        get_attr_and_print_in_event(60, undefined, 70) &&
          (await era.waitAnyKey());
      }
      era.set('cflag:60:축제이벤트표시', 0);
    } else if (event_arg === 47 + 29) {
      if (
        era.get('cflag:0:위치') !== location_enum.beach ||
        era.get('cflag:60:위치') !== era.get('cflag:0:위치')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name('여름 합숙', nice_nature);
      await era.printAndWait(
        '오늘부터 「여름 합숙」이 시작된다── 실력 향상을 위한 강화 훈련이 펼쳐진다.',
      );
      await nice_nature.say_and_wait('덥다……');
      await nice_nature.say_and_wait(
        '태양님이 아주 기운차시네. 그늘에 사는 나한테는 너무 눈부셔……',
      );
      await nice_nature.say_and_wait(
        '벌써부터 내가 마지막까지 무사히 버틸 수 있을지 걱정되기 시작했어.',
      );
      era.printButton('「「코쿠라 기념」도 나가야 하니까 힘내야지」', 1);
      await era.input();
      await nice_nature.say_and_wait(
        '아니, 문제가 그거라고. 합숙 도중에 레이스에 나가야 하다니 일정이 너무 빡빡해.',
      );
      await nice_nature.say_and_wait(
        '여기서 코쿠라까지는 꽤 머니까, 이동 시간 때문에 훈련량도 줄어들 거고……',
      );
      await nice_nature.say_and_wait(
        '원래 저 멀리 앞서가던 참가자들한테 더 처절하게 따돌림당할 거야──',
      );
      era.printButton('「그럼 코쿠라까지 단숨에 뛰어 가보자!」', 1);
      await era.input();
      await nice_nature.say_and_wait(
        '오, 그거 좋네 좋아! 뛰어가는 것 자체가 훈련이 될 테니 일석이조네.',
      );
      await nice_nature.say_and_wait(
        '어차피 멀어봤자 1000km 정도밖에 안 되겠지? 좋아 좋아, 가뿐하게──',
      );
      await nice_nature.say_and_wait('그럴 리가 없잖아── 갑자기 그런 억지 좀 부리지 마.');
      await nice_nature.say_and_wait('내가 보기에 우리 트레이너 쌤은 은근히 기대하고 있는 것 같은데……');
      await era.printAndWait(
        `그렇게 ${get_chara_talk(0).name}과(와) 나이스 네이처의 뜨거운 여름 합숙이 시작되었다.`,
      );
      await nice_nature.say_and_wait('아, 열정은 적당히만 부탁해. 아무튼 잘 부탁해──');
      era.println();
      get_attr_and_print_in_event(
        60,
        new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 10 : 0)),
        30,
      ) && (await era.waitAnyKey());
    } else if (event_arg === 95 + 29) {
      if (
        era.get('cflag:0:위치') !== location_enum.beach ||
        era.get('cflag:60:위치') !== era.get('cflag:0:위치')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name('여름 합숙', nice_nature);
      await era.printAndWait(
        '또다시 합숙 시즌이 돌아왔다. 나이스 네이처는 작년과는 다르게 적극적인 태도를 보인다.',
      );
      await era.printAndWait(
        '「텐노상(가을)」…… 그리고 그 뒤에 도전할 「아리마 기념」을 위해──',
      );
      await nice_nature.say_and_wait('텐노상 가을이라……');
      await era.printAndWait(`${nice_nature.name}이(가) 자신을 정면으로 마주하는 뜨거운 여름이 시작되었다!`);
      era.println();
      get_attr_and_print_in_event(
        60,
        new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 5 : 0)),
        0,
      ) && (await era.waitAnyKey());
    } else {
      return await super.week_start(
        nice_nature,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
  }
};