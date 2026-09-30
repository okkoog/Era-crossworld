const era = require('#/era-electron');

const { sys_change_lust } = require('#/system/sys-calc-base-cflag');
const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_from_palam } = require('#/data/ero/orgasm-const');
const { race_enum } = require('#/data/race/race-const');
const CustomizedEdu = require('#/event/edu/edu-common');

/** @param {RaceEndParams} extra_flag */
async function sex_with_nice_nature(extra_flag) {
  if (era.get('love:60') >= 75) {
    era.printButton('「그리고, 이건 관례인 그거──」', 1);
    await era.input();
    sys_change_lust(0, lust_from_palam);
    sys_change_lust(60, lust_from_palam);
    // 승부복
    await quick_into_sex(60);
  } else {
    era.println();
    extra_flag.relation_change = 50;
  }
}

module.exports = class extends CustomizedEdu {
  async race_end(nature, me, callname, hook, extra_flag) {
    const edu_weeks = era.get('cflag:60:육성턴수합산');
    if (
      extra_flag.race === race_enum.begin_race &&
      edu_weeks < 48 &&
      extra_flag.rank === 1
    ) {
      await print_event_name('언제나처럼', nature);

      await nature.say_and_wait(
        `응응. ${sys_get_callname(60, 60)}가 무사히 반짝이며 데뷔했네……`,
      );
      era.printButton('「수고했어」', 1);
      await era.input();
      await nature.say_and_wait('고마워. 한바탕 크게 치르고 왔어── 하하.');
      await nature.say_and_wait('어땠어? 내가 달리는 모습…… 어땠어?');
      era.printButton('「정말 좋았어!」', 1);
      await era.input();
      await nature.say_and_wait('아하하! 대답이 정말 시원시원하네──');
      await nature.say_and_wait(
        `나도 우선은 ${sys_get_callname(60, 0)}이 앞으로를 어떻게 계획하고 있는지 알고 싶어.`,
      );
      era.printButton('「먼저 물어볼게, 뛰고 싶은 레이스가 있어?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……뛰고 싶은 레이스라…… 지금의 내가 목표를 논할 입장이 된다고 생각해?',
      );
      await nature.say_and_wait(
        '이런 건 트레이너 쌤이 주도해도 상관없으니까. 자, 당신의 실력을 보여줄 기회라고~',
      );
      await era.printAndWait(
        `나이스 네이처가 데뷔하기 전부터, ${me.name}은(는) ${nature.sex}가 중거리에 적합하다고 생각했다. ${nature.sex}의 막판 스퍼트는 정교하고, 버텨야 할 때 버틸 줄 안다.`,
      );
      await era.printAndWait(
        '향후 클래식 전선을 확보하기 위해, 선택해야 할 첫 번째 전역은──',
      );
      era.printButton('「『와카고마 스테이크스』에 나가보지 않을래?」', 1);
      await era.input();
      await nature.say_and_wait('오, 과연 그렇구나. 오픈전에서 실력을 가늠해보겠다는 거지?');
      await nature.say_and_wait('나쁠 거 없지? 그렇게 하자.');
      era.printButton('「그럼 언제나처럼 성적을 남겨보자고」', 1);
      await era.input();
      await nature.say_and_wait(
        '언제나처럼이라니…… 그건 그냥 나보고 3등 하라는 소리 아냐? 내 목표는 3등이 아니라고.',
      );
      await nature.say_and_wait('하긴, 매번 1등만 차지하는 괴물 같은 녀석들도 있지만……');
      await nature.say_and_wait(
        `……테이오는 어떻게 할까? ${nature.sex}는 어떤 레이스에 나갈까?`,
      );
      await era.printAndWait(
        `토카이 테이오와 나이스 네이처는 동기이기 때문에, 아무래도 ${nature.sex}는 신경이 쓰이는 모양이다. 하지만……`,
      );
      era.printButton('「가장 중요한 건 트레이닝이야!」', 1);
      await era.input();
      await nature.say_and_wait(
        `알고 있어. 그냥, ${nature.sex}와 마주치지 않았으면 좋겠다고 생각했을 뿐이야~ 그럼, 앞으로도 잘 부탁해~`,
      );
      await era.printAndWait('그렇게 다음 목표는 「와카고마 스테이크스」로 결정되었다!')
      era.println();
      extra_flag.relation_change = 50;
    } else if (extra_flag.race === race_enum.waka_sta) {
      // 클래식급 와카고마S
      const teio_talk = get_chara_talk(3);
      if (extra_flag.rank === 1) {
        await print_event_name('「우연」에서 시작되다', nature);

        await nature.say_and_wait('이겼어…… 내가…… 테이오를 이겼다고?');
        await nature.say_and_wait(
          '하, 하하…… 하하……! 대단해, 정말이야……!? 내가 이겼어……',
        );
        await teio_talk.say_and_wait('이런── 져버렸네!');
        await nature.say_and_wait('……윽! 테이오……! 나는──');
        await teio_talk.say_and_wait('──강해질 계기를 찾았어!');
        await nature.say_and_wait('에……');
        await teio_talk.say_and_wait(
          '내가 아직 더 강해질 수 있다는 거잖아! 헤헤, 기대되기 시작했어──!',
        );
        await teio_talk.say_and_wait(
          '최강이 되기까지 몇 킬로미터나 남았을까? 한숨에 달려가서 따라잡겠어!',
        );
        await nature.say_and_wait('아……');
        await nature.say_and_wait('위험해라. 정말로 우쭐해질 뻔했네.');
        await nature.say_and_wait('아니야. 이번에 이긴 건…… 그냥 우연이야.');
        await nature.say_and_wait('그야, 아무리 생각해도── 그 아이가 훨씬 더 빛나고 있는걸……');
        era.printButton('「네가 이겼어, 네이처!」', 1);
        await era.input();
        await nature.say_and_wait('……응.');
        era.printButton('「기쁘지 않아?」', 1);
        await era.input();
        await nature.say_and_wait(
          '방금 이겼을 때는 당연히 기뻤지. 기쁘긴 하지만…… 이 승리는 분명 우연일 거야. 실력으로 이긴 게 아니라고.',
        );
        era.printButton('「왜 그렇게 생각해?」', 1);
        await era.input();
        await nature.say_and_wait(
          '그치만…… 이상하잖아? 내가 테이오보다 강할 리가 없잖아.',
        );
        await nature.say_and_wait(
          '조금도 반짝이지 않는 이 나라고? 분명 어딘가 잘못된 거야. ──정말이지! 착각이나 하고, 정말 한심해──!',
        );
        await era.printAndWait(
          `나이스 네이처는 분명 승리했다. 그리고 그 원인은 의심할 여지 없이 ${nature.sex}의 실력 덕분이다. 하지만 ${nature.sex}는……`,
        );
        await nature.say_and_wait('……정말 한심해.');
        await era.printAndWait(
          `이기고도 진 것처럼 침울해 있는 것은, ${nature.sex}가 아직 자신의 실력을 완전히 믿지 못하기 때문이다. 즉 자신감 부족. 그렇다면 지금 필요한 것은──`,
        );
      } else {
        await print_event_name('져도 여름은 온다', nature);

        await nature.say_and_wait('하아…… 하아…… 하아……');
        await nature.say_and_wait(
          `……음, 나쁘지 않아, ${era.get('callname:60:60')}, 확실히 성과는 냈어──`,
        );
        await era.printAndWait('???「와아아아아아……!!」');
        await nature.say_and_wait('……어라!? 이 소리는 뭐야──');
        await teio_talk.say_and_wait(
          '내 실력은 이 정도가 아니라고! 앞으로도 내 활약을 눈여겨봐 줘! 너희의 상상을 계속 뛰어넘겠다고 약속할게! 다음에 봐! 다들 고마워♪',
        );
        await era.printAndWait('???「와아아아아아……!!」');
        await nature.say_and_wait('…………');
        await nature.say_and_wait('분위기 엄청 뜨겁네. 역시 테이오야──');
        await nature.say_and_wait(
          '……난 정말 바보야. 그런 상대에게 도전하겠다고 하다니. 그리고 역시 난 고작 이 정도구나. 주제 파악을 너무 못했어. 정말 한심해……',
        );
        await nature.say_and_wait('……아── 테이오…… 정말 눈부시네……');
        era.drawLine();
        await nature.say_and_wait(
          `──아, ${era.get('callname:60:0')}……, 저기…… ${era.get(
            'callname:60:60',
          )}가 레이스 마치고 돌아왔어──`,
        );
        era.printButton(`「${nature.sex}에게 바짝 붙어서 쫓아간 것만으로도 대단해」`, 1);
        await era.input();
        await nature.say_and_wait(
          '하하── 됐어, 그렇게 위로 안 해줘도 돼. 그리고 봐봐, 당신 요구대로 제대로 했지?',
        );
        await nature.say_and_wait(
          '『언제나처럼』 결과를 남겼잖아. 응, 내 할 일은 다 했어.',
        );
        await nature.say_and_wait(
          '……그러니까, 위를 향해 도전하는 건 역시 나한테 과분한 일이었어. 도전 같은 걸 생각 안 했으면 정말 모든 게 평소 같았을 텐데.',
        );
        await nature.say_and_wait(
          '……내 마음도 포함해서 말이야. 정말이지── 난 반짝이는 거랑은 거리가 너무 멀어──',
        );
        await era.printAndWait(
          `실제로 ${nature.sex}의 말대로 이번 성과는 꽤 훌륭했다. 비록 1등은 아니지만, 이번 성적을 좀 더 긍정적으로 바라봐도 좋다.`,
        );
        await nature.say_and_wait('……하아.');
        await era.printAndWait(
          `하지만 ${nature.sex}은(는) 이토록 침울해하고 있다. 주요 원인은 ${nature.sex}가 원래 자신감이 부족하기 때문일 것이다. 그렇다면 지금 필요한 것은──`,
        );
      }
      era.printButton('「네이처, 원정 가보지 않을래?」', 1);
      await era.input();
      await nature.say_and_wait('원정……? 어? 왜……');
      era.printButton('「여름에도 성과를 남겨보자」', 1);
      await era.input();
      await era.printAndWait(
        `지금 ${nature.sex}를 클래식 전선 레이스에 내보내는 것은 위험한 도박이다. ${nature.sex}가 지금 겨우 가지고 있는 자신감마저 잃게 할 수 있다. 그럴 바에는 로컬 레이스에 도전해 꾸준히 성적을 쌓는 것이 결국 ${nature.sex}의 성장을 이끌어낼 것이다.`,
      );
      await nature.say_and_wait(
        '그러니까…… 목표는 『사츠키상』도 아니고, 『일본 더비』도 아니라고……? ……내 실력이 부족하니까.',
      );
      era.printButton('「지금은 조급해하지 말고, 자신이 정말 강해졌는지 확인부터 하자」', 1);
      await era.input();
      await nature.say_and_wait('……알겠어.');
      await nature.say_and_wait(
        '그렇네. 지금 내 상태로는 설령 다음에 또 이긴다 해도…… 스스로 납득하기 힘들 테니까.',
      );
      era.printButton('「이 여름을 이겨내면 반드시 강해질 수 있어」', 1);
      await era.input();
      await nature.say_and_wait('……그러면 좋겠네.');
      await era.printAndWait('말을 마치고, 나이스 네이처는 길게 한숨을 내쉬었다.');
      await nature.say_and_wait(
        '응, OKOK! 각지를 도는 순회 공연도 나한테 어울릴지 몰라. 그래서? 설마 정말로 나를 계속 여기저기 뺑뺑이 돌릴 건 아니지? 어느 레이스에 나갈지 정했어?',
      );
      era.printButton('「『코쿠라 기념』은 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '코쿠라에서 열리는 중상 레이스. 나이스 네이처의 자신감을 높여주기에 이보다 적합한 레이스는 없다.',
      );
      await nature.say_and_wait(
        '과연, 거리도 와카고마랑 같았던가? 응, 거기로 가자. 근데 여름에 코쿠라라니…… 더워서 쓰러지는 거 아냐……?',
      );
      await era.printAndWait([
        '그렇게, ',
        me.get_colored_name(),
        ' 와 ',
        nature.get_colored_name(),
        ' 는 다음 목표를 「코쿠라 기념」으로 결정했다!',
      ]);
      era.println();
      extra_flag.relation_change = 50;
    } else if (
      extra_flag.race === race_enum.koku_kin &&
      edu_weeks < 95 &&
      extra_flag.rank <= 5
    ) {
      // 클래식급 코쿠라 기념
      await print_event_name('도금일지라도', nature);

      await nature.say_and_wait(
        `헤헤…… 해냈어, ${era.get('callname:60:0')}. 확실히 성과를 냈다고!`,
      );
      era.printButton('「정말 잘했어!」', 1);
      await era.input();
      await nature.say_and_wait('응!');
      await nature.say_and_wait(
        '후훗…… 저기 말이야, 코쿠라 상점가 분들도 나를 보러 와주셨어. 그냥 한두 마디 나눠본 사이일 뿐인데? 다들 바쁘실 텐데도……',
      );
      await nature.say_and_wait(
        '……그분들이 이렇게 응원해주시는 걸 보니, 이런 것도 나쁘지 않다는 생각이 들어. 나는 그냥 내 방식대로 한 걸음씩…… 천천히 나아가면 되는 거지?',
      );
      await nature.say_and_wait('언젠가 도달할 수 있을지 없을지는 모르겠지만……');
      await nature.say_and_wait(
        `……저기, ${era.get('callname:60:0')}. 조금 한심한 소리 좀 해도 될까?`,
      );
      era.printButton('「뭔데?」', 1);
      await era.input();
      await nature.say_and_wait('……내가 테이오를 이길 수 있을까?');
      await nature.say_and_wait('……농담이야! 그냥 해본 소리니까 잊어버려──');
      era.printButton('「넌 할 수 있어」', 1);
      await era.input();
      await nature.say_and_wait('……아야야…… 아우.');
      await nature.say_and_wait(
        `……응, ${era.get('callname:60:0')}이라면 분명 그렇게 말해줄 줄 알았어.`,
      );
      await nature.say_and_wait('답을 알고 있으면서도 묻다니, 그래, 나 참 비겁하지. 하지만……');
      await nature.say_and_wait('누군가 나를 밀어주지 않으면 앞으로 나아갈 수가 없거든.');
      await nature.say_and_wait(
        `……테이오가 클래식 전선을 질주하고 있으니, 다음번에 ${nature.sex}는 분명── 『국화상』을 목표로 하겠지.`,
      );
      await nature.say_and_wait(
        '그래서 나도 다음엔…… 『국화상』에서…… 달리고 싶어. 쌤 생각은…… 어때……?',
      );
      era.printButton('「거리가 꽤 늘어날 텐데, 괜찮겠어?」', 1);
      await era.input();
      await era.printAndWait(
        `국화상은 3000미터 레이스다. 이번에 참가한 코쿠라 기념보다 거리가 1000미터나 늘어난다. 나이스 네이처에게는 힘든 싸움이 될지도 모른다. 하지만 ${nature.sex}가 결심했다면……!`,
      );
      await nature.say_and_wait(
        '물론 문제는 아주 많을 거야. 난 아마 그렇게 긴 거리는 잘 못 달릴 테니까.',
      );
      await nature.say_and_wait('그래도…… 이번엔 물러서고 싶지 않아. ──『국화상』에 나가자!');
      era.printButton('「좋아!」', 1);
      await era.input();
      await nature.say_and_wait('하아～～～ 결정됐다. 정말 결정해버렸어.');
      await nature.say_and_wait(
        '네이처짱, 이제 도망갈 곳은 없어. 큰 무대에서 직접 맞붙게 됐다고……',
      );
      await nature.say_and_wait('그래도…… 응. 이것도 나쁘지…… 않으려나?');
      await era.printAndWait(
        `……비록 ${nature.sex}가 자신감을 조금 되찾은 듯 보이지만, 『국화상』에 대비하기 위해 ${me.name}이(가) ${nature.sex}를 위해 해줄 수 있는 일이 더 있을 것이다. ${me.name}이(가) 고민 끝에 떠올린 것은──`,
      );
      await nature.used_to_say_and_wait(
        '내가 어떤 성적을 내든, 사람들은 다 기뻐해 줘.',
      );
      await nature.used_to_say_and_wait(
        '다들 웃으면서 노력했다고 칭찬해줘. 하지만 난 스스로 확신이 안 서.',
      );
      await nature.used_to_say_and_wait(
        '음…… 내가 정말 노력했다고 말하기가 좀 그렇단 말이지── 예를 들어, 1등은 아주 명확하잖아? 트로피를 받고, 텐노상이라면 방패 모양 메달 같은 걸 받으니까.',
      );
      await nature.used_to_say_and_wait(
        '그런 걸 보면, 아, 내가 정말 노력했구나, 싶겠지.',
      );
      await nature.used_to_say_and_wait('……하지만 그런 기분은 1등만의 특권이니까.');
      await era.printAndWait(
        `……${me.name}은(는) 분명 ${nature.sex}를 위해 무언가 더 할 수 있을 것이다!`,
      );
      await era.printAndWait('──그렇게, 코쿠라에서 중앙으로 돌아가는 길에……');
      await nature.say_and_wait('아, 트레이너 쌤. 쌤한테 맡겨둔 간식 좀 꺼내도 될까──?');
      await nature.say_and_wait(
        '코쿠라 사람들이 준 일본 과자 말이야. 신칸센 타는 동안 먹을까 해서──',
      );
      era.printButton('「알았어」', 1);
      await era.input();
      await era.printAndWait('（부스럭부스럭…… 툭）');
      await nature.say_and_wait('앗, 뭐가 떨어지려고 해.');
      await nature.say_and_wait('……종이로 접은 트로피……야? 좀 삐뚤삐뚤하네.');
      era.printButton('「……그거, 내가 만든 거야」', 1);
      await era.input();
      await nature.say_and_wait(
        '오~ 트레이너가 만든 거라고? 후훗── 의외로 귀여운 취미가 있네~',
      );
      era.printButton('「네이처 너에게 선물하려고 만든 거야」', 1);
      await era.input();
      await nature.say_and_wait('그렇구나……');
      await nature.say_and_wait('엣!? 나한테!? 왜……?');
      era.printButton('「자신감을 가졌으면 해서」', 1);
      await era.input();
      await nature.say_and_wait('자신감……');
      await me.say_and_wait(
        '어떤 성과를 내더라도 스스로 자신을 갖기 힘든 그 마음, 이해해.',
      );
      await me.say_and_wait(
        '그렇다면 쌓아온 성적을 형태로 만든다면, 조금이라도 자신감이 생기지 않을까 했어.',
      );
      await nature.say_and_wait('……나를 위해…… 일부러 만든……');
      await nature.say_and_wait(
        '……그러니까, 다 큰 어른이 호텔에서 끙끙거리며 종이를 접어 트로피를 만들었다는 거지?',
      );
      await nature.say_and_wait('나 초등학생 아니거든.');
      era.printButton('「그건 그렇네……」', 1);
      await era.input();
      await era.printAndWait(
        `……맞다. 만들긴 했지만, 이건 너무 ${nature.sex}를 어린애 취급하는 것 같아서 ${me.name}은(는) 줄지 말지 망설이고 있었는데……`,
      );
      await nature.say_and_wait('……후훗.');
      await nature.say_and_wait('정말 어쩔 수 없네. 쌤을 봐서 받아줄게.');
      era.printButton('「어?」', 1);
      await era.input();
      await nature.say_and_wait('어라? 왜 놀라고 그래? 나 주려고 만든 거 아냐?');
      await nature.say_and_wait('자자, 어서 이리 내놔. 안 주면 안 돌아갈 거야.');
      era.printButton('「받아주는 거야?」', 1);
      await era.input();
      await nature.say_and_wait('……그야……');
      await nature.say_and_wait('삐뚤삐뚤한 트로피라니, 딱 나한테 어울리잖아?');
      await nature.say_and_wait(
        '도금된 듯한 금색에, 모서리가 비뚤어진 느낌 같은 거. 이거…… 전부 나랑 닮지 않았어?',
      );
      await nature.say_and_wait(
        '어쩐지 친근감이 든달까? ……응, 그러니까, 말하자면. ──고마워.',
      );
      await nature.say_and_wait('……다음 트로피는 더~ 잘 만들길 기대할게.');
      era.printButton('「다음이라니!?」', 1);
      await era.input();
      await nature.say_and_wait(
        '나 레이스 계속 나갈 거니까. 트레이너 쌤도 더 분발하라고! 나도 레이스에서 힘낼 테니까.',
      );
      era.println();
      extra_flag.relation_change = 50;
    } else if (extra_flag.race === race_enum.kiku_sho && extra_flag.rank <= 5) {
      await print_event_name('자신만의 레이스', nature);

      await era.printAndWait('관객 「나이스 네이처, 수고했어──! 멋진 레이스였어──!」');
      await era.printAndWait(
        '레이스가 끝난 후 관객석에서 들려오는 목소리는, 나이스 네이처가 「자신만의 레이스」를 펼쳤음을 증명하고 있었다. 그리고──',
      );
      await nature.say_and_wait(
        '트레이너, 나…… 나…… 확실히 나만의 레이스를 한 거…… 맞지?',
      );
      era.printButton('「응!」', 1);
      await era.input();
      await nature.say_and_wait('다행이다…… 헤헤.');
      await nature.say_and_wait(
        '『국화상』에서 이 정도 성과를 냈으면 더 바랄 게 없어! 나 정말 노력했어!',
      );
      await nature.say_and_wait('당신 오늘도 준비했어? ……그 삐뚤삐뚤한 트로피.');
      era.printButton('「당연하지, 이건 『참 잘했어요 상』이야!」', 1);
      await era.input();
      await nature.say_and_wait('아…… 트레이너가 직접 만든 트로피!');
      await era.printAndWait(
        `『코쿠라 기념』 때 나이스 네이처의 자신감을 위해 ${me.name}이(가) 종이 트로피를 만들어 선물했다. ${nature.sex}가 기뻐했었기에, ${me.name}은(는) 이번에도 준비했다……`,
      );
      await nature.say_and_wait('……정말 만들었네? 헤헤, 여전히 삐뚤삐뚤해.');
      await nature.say_and_wait('좋아 좋아. 나중에 시상식이라도 열자.');
      await nature.say_and_wait(
        `네이처 ${nature.sex_code === 1 ? '군' : '양'}의 활약을 축하하는 의미로 말이야♪`,
      );
      await nature.say_and_wait(
        `……지금은 이렇게 들떠 있어도 되지만, 테이오가 참가했으면 이렇게 쉽지는 않았겠지…… ${nature.sex}는 괜찮으려나? 부상이 얼마나 심한 건지 모르겠네.`,
      );
      era.printButton(`「${nature.sex}라면 반드시 괜찮을 거야」`, 1);
      await era.input();
      await nature.say_and_wait('응…… 그렇겠지.');
      await nature.say_and_wait(
        `그치만 ${nature.sex}는 테이오잖아. 분명 금방 부활해서 『난 무적이라니까!』 같은 소리나 하겠지.`,
      );
      await nature.say_and_wait('……그전까지 나도 좀 더 강해져야겠네.');
      era.printButton('「아직 큰 대결이 하나 더 기다리고 있어」', 1);
      await era.input();
      await nature.say_and_wait(
        '뭐? 이제 겨울이 다 됐는데, 대결이 또 남았다고? ……아! 설마 당신 말하는 건……',
      );
      era.printButton('「『아리마 기념』에 도전하지 않을래?」', 1);
      await era.input();
      await era.printAndWait(
        `나이스 네이처에게는 든든하고 충실한 팬들이 있고, 『국화상』에서도 실력을 증명했다. 지금의 ${nature.sex}(이)라면 분명 『아리마 기념』에 도전할 수 있다! 뿐만 아니라 『아리마 기념』은 올해 주목받는 모든 우마무스메들이 모이는 자리다. ${nature.sex}들과 함께 달리는 것만으로도 큰 성장을 이룰 수 있을 것이다.`,
      );
      await nature.say_and_wait('『아리마 기념』인가……');
      await nature.say_and_wait(
        '항상 응원해주시는 분들께 보답하고 싶다면, 그곳이 최고의 무대겠지…… 그치?',
      );
      await nature.say_and_wait(
        '……어쩌면 난 전혀 안 될지도 몰라. 참가해도 아무것도 못 할 수도 있어. 하지만……',
      );
      await nature.say_and_wait('──나, 『아리마 기념』에 나가고 싶어!');
      era.printButton('「그럼 도전하자!」', 1);
      await era.input();
      await era.printAndWait(
        `그렇게, ${me.name}과(와) 나이스 네이처는 클래식급의 마지막 도전을 『아리마 기념』으로 결정했다!`,
      );
      if (era.get('love:60') >= 75) {
        era.printButton('「그리고…… 이것도 축하 선물이야」', 1);
        await era.input();
        await nature.say_and_wait('엣? 뭐야 뭐야?');
        await era.printAndWait(
          '나이스 네이처의 물음에 즉답하는 대신, 조용히 대기실 문을 잠갔다.',
        );
        era.printButton('「우리 가문에서 엄선한 조상 대대로 내려오는 염색체야」', 1);
        await era.input();
        await nature.say_and_wait(
          '……엣? 잠깐잠깐잠깐? 여기서 한다고? 여긴 대기실이라고!',
        );
        await era.printAndWait(
          `${me.name}이(가) 갑자기 옷을 벗기 시작하자, 나이스 네이처의 얼굴은 순식간에 새빨개졌고 연신 소파 뒤로 몸을 숨기려 했다.`,
        );
        era.printButton(
          '「괜찮아, 여긴 방음이 완벽해서 아무도 방해하지 않을 거야…… 너도 내심 바라고 있었잖아?」',
          1,
        );
        await era.printAndWait(
          `방금 레이스를 마친 우마무스메의 몸은 고속 질주로 인해 발생한 열기를 계속해서 뿜어내고 있었고, 이로 인해 발정 상태에 가까운 고양감을 느끼고 있었다. 승부복 아래의 두꺼운 속바지마저 이미 살짝 젖어 있는 것이 보일 정도였다.`,
        );
        await nature.say_and_wait('그…… 그치만, 몸에 땀 냄새가 날 텐데──');
        era.printButton('「네이처의 땀이 왜 냄새가 나? 오히려 그게 더 좋은 건데!」', 1);
        await era.input();
        await era.printAndWait(
          `나이스 네이처의 대답을 기다리지 않고, ${me.name}은(는) 그녀를 소파에 눕히고 승부복 안으로 손을 뻗었다. 나이스 네이처 역시 금방 저항을 멈추고 몸을 ${me.name}에게 맡겼다……`,
        );
        sys_change_lust(0, lust_from_palam);
        sys_change_lust(60, lust_from_palam);
        // 승부복
        await quick_into_sex(60);
      } else {
        era.println();
        extra_flag.relation_change = 50;
      }
    } else if (
      extra_flag.race === race_enum.arim_kin &&
      edu_weeks < 96 &&
      extra_flag.rank === 1
    ) {
      await print_event_name('먼 곳을 바라보며', nature);

      await nature.say_and_wait('이, 이겼어……! 내가 『아리마 기념』에서 이겼다고……');
      era.printButton('「축하해!」', 1);
      await era.input();
      await nature.say_and_wait('쌤! 저기 말이야, 나……!');
      await nature.say_and_wait('전부 들렸어. 사람들이 나를 응원하는 소리가!');
      await nature.say_and_wait('거짓말처럼 들리겠지만, 정말이야!');
      await nature.say_and_wait(
        '평소에는 내 심장 소리랑 숨소리, 바람 소리밖에 안 들렸는데.',
      );
      await nature.say_and_wait(
        '하지만 오늘은…… 응원 소리가 똑똑히 들렸어. 『네이처, 힘내라!』 하는 목소리가!',
      );
      await nature.say_and_wait(
        '그 덕분에 체력이 다해갈 때도 버틸 수 있었어. 나 정말…… 즐겁게 달렸어!',
      );
      await era.printAndWait(
        `나이스 네이처와 지지자들 사이에는 깊은 유대감이 있었다. ${nature.sex}에게 있어 오늘의 『아리마 기념』은 아주 특별한 레이스였던 모양이다.`,
      );
      await nature.say_and_wait('계속 더 달리고 싶어. 내년에도…… 이 무대에 서고 싶어!');
      await nature.say_and_wait('……앗, 나 참 바보같이! 너무 성급했나!');
      await nature.say_and_wait('그치만 정말 즐거웠는걸…… (꼼지락)');
      await era.printAndWait(
        '확실히 지금 벌써 내년 『아리마 기념』을 목표로 정하기엔 조금 이른 감이 있다. 그사이에 지금의 동기부여를 유지할 수 있는 레이스를 배치한다면……',
      );
      era.printButton('「『타카라즈카 기념』이 있잖아!」', 1);
      await era.input();
      await nature.say_and_wait(
        '『타카라즈카 기념』…… 팬 투표로 출주자를 정하는 레이스였지? 『아리마 기념』처럼……',
      );
      await nature.say_and_wait(
        '난 이런 레이스에서 더 힘이 나는 것 같아. 응, 나가고 싶어…… 『타카라즈카 기념』!',
      );
      await era.printAndWait(
        `그렇다고는 해도, 해당 레이스까지는 시간이 좀 남아 있다. 이에 ${me.name}과(와) 나이스 네이처는 그사이에 여러 레이스에 참가하며 『타카라즈카 기념』에 도전하기 위해 계속 성장해나가기로 했다.`,
      );
      await nature.say_and_wait(
        '우리 둘 다 너무 앞서가는 거 아냐? 벌써부터 다음 레이스를 정하고 있고──',
      );
      await era.printAndWait('상점가 사람들 「네이처──! 정말 잘 달렸어──!」');
      await era.printAndWait(
        `상점가 사람들 「네가 세계 최고의 우마무스메야! 우리의 자랑이다──!」`,
      );
      await nature.say_and_wait(
        '잠깐만요, 다들……! 너무 커요, 여긴 가게가 아니라고요!',
      );
      await nature.say_and_wait(
        '그리고 세계 최고라니, 너무 비행기 태우시는 거 아녜요! 정말이지, 부끄러워라!',
      );
      await nature.say_and_wait('정말이지…… 헤헤.');
      era.printButton('「지금은 솔직하게 기뻐해」', 1);
      await era.input();
      await nature.say_and_wait(
        '나한테 그게 제일 어려운 일인 거 쌤이 제일 잘 알잖아. 하지만, 지금은…… 그렇네. 응, 그러네.',
      );
      await nature.say_and_wait(
        '지금 이 순간을…… 마음껏 즐겨야겠지. 모든 게 여기서 끝나는 건 아니니까.',
      );
      await era.printAndWait(
        `나이스 네이처는 작은 목소리로 중얼거리며, 함께 『아리마 기념』을 완주한 우마무스메들을 바라보았다……`,
      );
      await nature.say_and_wait('쌤 오늘도 준비했어? ……그 삐뚤삐뚤한 트로피.');
      era.printButton('「당연하지!」', 1);
      await era.input();
      await nature.say_and_wait('……헤헤. 고마워. 그럼…… 우선 반성회부터 해야겠네.');
      await nature.say_and_wait(
        '난 테이오와의 격차에만 신경 쓰느라, 다른 경쟁 상대들을 완전히 잊고 있었어.',
      );
      await nature.say_and_wait(
        '오늘 레이스를 통해서 그걸 깨달았어. 조금이라도 방심했으면 졌을 거야.',
      );
      await nature.say_and_wait(
        '지금은 어떻게 이겼을지 몰라도…… 앞으로 주변 참가자들은 점점 더 강해지겠지.',
      );
      await nature.say_and_wait('이대로 안주하면 안 돼. 이제는 테이오만 외칠 때가 아니야.');
      await era.printAndWait(
        `여러 세대의 우마무스메들이 경쟁하는 『아리마 기념』에 참가함으로써, ${nature.sex}의 시야가 더 넓어진 모양이다…… 이것은 성장의 증거다!`,
      );
      await nature.say_and_wait('내 주변의 우마무스메들에 대해서도 더 잘 알아야겠어……!');
      await sex_with_nice_nature(extra_flag);
    } else if (
      extra_flag.race === race_enum.takz_kin &&
      edu_weeks >= 96 &&
      extra_flag.rank === 1
    ) {
      // 시니어급 타카라즈카 기념
      await print_event_name('닿은 손끝', nature);

      const mcqueen_talk = get_chara_talk(13);
      const ryan_talk = get_chara_talk(27);
      await nature.say_and_wait('──해냈다……! 내가…… 이겼어!');
      era.printButton('「대단해!」', 1);
      await era.input();
      await nature.say_and_wait('왜일까? 평소보다 훨씬 더 기뻐……');
      era.printButton('「네가 필사적으로 달려서 간신히 얻어낸 승리니까」', 1);
      await era.input();
      await nature.say_and_wait('응, 맞아.');
      await nature.say_and_wait(
        '『어차피 나 같은 애가』라거나, 『나는 못 할 거야』 같은……',
      );
      await nature.say_and_wait(
        '그런 생각들이 오늘은 전혀 안 들었어. 그냥 마음속으로 어떻게든 따라잡겠다고만 외쳤지……',
      );
      await mcqueen_talk.say_and_wait(
        '──인상적인 달리기였어요, 네이처 씨. 하지만 다시 겨룰 기회가 있다면 다음엔 지지 않겠어요.',
      );
      await ryan_talk.say_and_wait(
        '응응! 나도 다시 단련을 시작해야겠는걸! 고마워, 네이처!',
      );
      await nature.say_and_wait('별말씀을요, 저야말로…… 감사해요!');
      era.drawLine();
      await nature.say_and_wait(
        `두 분 다 마지막까지 정말 상쾌하네. ${mcqueen_talk.sex}들은 벌써 앞을 내다보고 있어.`,
      );
      await nature.say_and_wait(
        '지더라도 곧바로 시선을 미래로 돌려. 이미 다음 단계를 향해 손을 뻗으며, 다음엔 반드시 이기겠다고 생각하고 있어.',
      );
      await nature.say_and_wait('……테이오도 그랬지. 그래서 그렇게 강한 거야.');
      await nature.say_and_wait(
        '예전의 나는 내 한계를 멋대로 정해버렸어. 아무리 노력해도 여기까지가 한계라고 스스로 타협했지.',
      );
      await nature.say_and_wait(
        '자주 3등을 했던 것도 그 때문이야. 더 잘할 수 없다고 말하면서…… 사실은 나 자신을 포기했던 거야.',
      );
      await nature.say_and_wait(
        '하지만 그러면 안 돼. 빛에 닿고 싶다면 계속해서 자신을 믿어야 해.',
      );
      await nature.say_and_wait(
        '1등을 하겠다는 각오로 얻어낸 3등이라면, 분명…… 앞으로의 밑거름이 될 수 있을 거야.',
      );
      await era.printAndWait(
        `나이스 네이처도 앞을 바라보고 있다. 이제 ${nature.sex}를 큰 무대에 세워도 두려움 없이 도전할 수 있을 것이다.`,
      );
      await era.printAndWait(
        `다음에 이어질 레이스는, 지금의 ${nature.sex}에게 더 많은 자신감과 빛을 불어넣어 줄 것이다……!`,
      );
      era.printButton('「다음은 『텐노상(가을)』에 도전해볼까?」', 1);
      await era.input();
      await nature.say_and_wait('『텐노상(가을)』……!');
      await nature.say_and_wait('나보고…… 유서 깊고 전통 있는 『텐노상』에 나가라고?');
      await nature.say_and_wait('……안 돼, 안 돼. 내가 왜 또 겁을 먹고 그래?');
      await nature.say_and_wait(
        '이런 때일수록…… 나한테 자격이 있는지 의심하면 안 돼. 반드시 나갈 거야! 나 자신을 채찍질해야지!',
      );
      await nature.say_and_wait('가자. 가을의 큰 무대로 직행하는 거야……!');
      await era.printAndWait(
        `──그렇게, ${me.name}과(와) 나이스 네이처는 중거리 최강을 가리는 『텐노상(가을)』에 도전하기로 했다!`,
      );
      await sex_with_nice_nature(extra_flag);
    } else if (
      extra_flag.race === race_enum.tenn_sho &&
      edu_weeks >= 96 &&
      extra_flag.rank <= 5
    ) {
      await print_event_name('황혼의 하늘에 울려 퍼지다', nature);

      await nature.say_and_wait('다 뛰었다……');
      await nature.say_and_wait('수준 높은 레이스에서 진지하게 싸워…… 성과를 냈어.');
      await nature.say_and_wait('한계 따위 생각하지 않고…… 내 손으로 결과를 쥐었어.');
      await nature.say_and_wait(
        '……이대로라면 이룰 수 있을지도 몰라. 반짝이고 싶다는…… 그 꿈을……',
      );
      await nature.say_and_wait('……좀 더 가까이. 조금만 더── 더 빛나는 곳에 다가가고 싶어……!');
      await nature.say_and_wait(`${era.get('callname:60:0')}, 부탁이 하나 있어.`);
      await nature.say_and_wait(
        '시니어급 마지막 『아리마 기념』에 나가기 전에, 레이스를 한 번 더 뛰고 싶어.',
      );
      era.printButton('「왜?」', 1);
      await era.input();
      await nature.say_and_wait(
        '……자신감을 더 갖고 싶어. 반드시 1등을 하겠다는 각오로 참가해서 이기고 싶어.',
      );
      await era.printAndWait(
        '예전의 나이스 네이처였다면 자신감이 부족해서 타인에게 『인정』받기를 갈구했겠지.',
      );
      await era.printAndWait(
        `하지만 지금의 ${nature.sex}는 『승리하기 위해』 더 강해지고 싶어 한다.`,
      );
      era.printButton('「연속 출주가 될 텐데, 괜찮겠어?」', 1);
      await era.input();
      await nature.say_and_wait('분명 괜찮을 거야!');
      await nature.say_and_wait(
        `그야 ${sys_get_callname(60, 60)}의 장점은, 만신창이가 되어도 달리는 모습이니까.`,
      );
      era.printButton('「알겠어」', 1);
      await era.input();
      await nature.say_and_wait('고마워! 어느 레이스에 나갈지는 당신에게 맡길게.');
      await nature.say_and_wait(
        `고민하고 결정하는 일은 ${era.get('callname:60:0')}에게 넘길게!`,
      );
      await era.printAndWait(
        `지금까지 지켜본 ${nature.sex}의 경향과 『아리마 기념』까지 남은 시간을 고려했을 때, 최선의 선택은──`,
      );
      era.printButton('「『주니치 신문배』에 나가는 건 어때?」', 1);
      await era.input();
      await era.printAndWait(
        '비록 대회의 등급은 낮지만, 나이스 네이처라면 여기서 확실한 성과를 낼 수 있다. 안정적으로 1등을 거머쥐는 거다!',
      );
      await nature.say_and_wait(
        '좋네, 『주니치 신문배』…… 거기서 반드시 1등을 따낼게.',
      );
      await nature.say_and_wait(`당당히 이겨서, 가슴을 펴고 ${nature.sex}에게 도전하겠어……!`);
      await sex_with_nice_nature(extra_flag);
    } else if (
      extra_flag.race === race_enum.chun_hai &&
      edu_weeks >= 96 &&
      extra_flag.rank === 1
    ) {
      await print_event_name('마지막 대무대를 향해', nature);

      await nature.say_and_wait('얻었어!');
      await nature.say_and_wait('1등이야. 내가 전력을 다해 얻어낸…… 1등!');
      await nature.say_and_wait('과정이 정말 길었네……');
      await nature.say_and_wait(
        '나약했던 내가, 계속 격려받고, 끌려가고, 필사적으로 뒤쫓고……',
      );
      await nature.say_and_wait('──이제 드디어 내 힘으로 이곳에 섰어!');
      await nature.say_and_wait(
        '이제 고개를 들고 싸울 수 있겠어. 그 무대에서…… 모두와 함께!',
      );
      era.printButton('「드디어 그날이 왔네!」', 1);
      await era.input();
      await nature.say_and_wait(
        '응! 이제 다시는 도망치지 않을 거고, 모두의 기대를 배신하지도 않을 거야.',
      );
      await nature.say_and_wait('반드시…… 이길 거야.');
      await nature.say_and_wait('──『아리마 기념』에서 반짝반짝 빛나는 주인공이 되겠어!');
      era.println();
      extra_flag.relation_change = 50;
    } else if (
      extra_flag.race === race_enum.arim_kin &&
      edu_weeks >= 96 &&
      extra_flag.rank === 1
    ) {
      await print_event_name('아리마의 승자는……', nature);

      const teio_talk = get_chara_talk(3);
      await nature.say_and_wait('아……');
      await nature.say_and_wait('나…… 이긴 거 맞지?');
      era.printButton('「네이처, 네가 해냈어!」', 1);
      await era.input();
      await nature.say_and_wait(`${era.get('callname:60:0')}……`);
      await nature.say_and_wait('현실감이 전혀 안 느껴져…… 나 정말 이긴 거야?');
      await era.printAndWait('관객들 「나이스 네이처──!! 축하해──!!」');
      await nature.say_and_wait('──윽! 어? 세상에…… 이렇게 많은 사람이……');
      await era.printAndWait('상점가 사람들 「네이처──! 축하한다──!!」');
      await nature.say_and_wait('상점가 사람들도…… 다들 와주셨구나.');
      await nature.say_and_wait('모두가 나를 기다려준 거였어. 그리고 난…… 드디어 모두에게 보답했어.');
      era.printButton('「전부 네가 노력해서 쟁취한 결과야」', 1);
      await era.input();
      await nature.say_and_wait('……');
      await nature.say_and_wait(
        `으아아앙～～～～! ${era.get('callname:60:0')}……!`,
      );
      await nature.say_and_wait('포기하지 않길 정말 잘했어……! 꿈을 계속 쫓길 정말 잘했어～～!');
      await era.printAndWait(
        `이것은 ${nature.sex}가 예전에 흘렸던 불안의 눈물과는 달랐다. ${nature.sex}는 기쁨의 눈물을 펑펑 쏟았고, 그 눈물은 땀과 함께 태양 아래에서 반짝반짝 빛났다. 그때──`,
      );
      await teio_talk.say_and_wait('──정말이지, 왜 울고 그러는 거야!?');
      await nature.say_and_wait('……! 테이오……!');
      await teio_talk.say_and_wait(
        '너는 나를 꺾고 1등을 한 거라고? 나를…… 이겼단 말이야……! 승리자라면 위풍당당하게 웃어야지!',
      );
      await nature.say_and_wait('……응, 응, 맞아. 너도 항상 웃고 있었지……');
      await nature.say_and_wait('미안, 이제 괜찮아. 나…… 더는 안 울게.');
      await teio_talk.say_and_wait(
        '그래야지. 계속 울고 있으면 안 들린다고. 이 소리가──',
      );
      await era.printAndWait('관객들의 환호 「와아아아아…… 네이처──!」');
      await teio_talk.say_and_wait('──이 뜨거운 환호성! 이건 전부 네 거야!');
      await nature.say_and_wait('알고 있어. 아주…… 잘 들려.');
      await nature.say_and_wait(
        '……고마워, 테이오. 네가 없었으면 난…… 여기까지 올 수 없었을 거야. 항상 내가 뒤쫓을 수 있게 해줘서 고마워. 솔직히 네 뒤를 달리는 건 정말 힘들었어. 하지만…… 비겁했던 예전의 나는 그 위치가 편안하다고 생각하기도 했었지. 하지만 이제부터는 어떤 도전이든 당당하게 맞설 거야.',
      );
      await nature.say_and_wait('내 이야기 속에서는, 내가 바로 주인공이야!');
      await era.printAndWait(
        '레이스가 끝난 후 승리자 인터뷰 시간. 지금의 나이스 네이처는 수많은 플래시 세례를 받고 있었다.',
      );
      await era.printAndWait(
        '기자A 「──이번 『아리마 기념』은 정말 쟁쟁한 라이벌들이 많았습니다. 자신이 우승할 수 있었던 원동력이 무엇이라고 생각하시나요?」',
      );
      await nature.say_and_wait('글쎄요…… 저도 다들 정말 강하다고 생각했어요.');
      await nature.say_and_wait(
        `하지만 저도 『아주 강한』 우마무스메거든요. 제 모든 실력을 발휘했기에 얻은 결과라고 생각해요.`,
      );
      await nature.say_and_wait('음, 제가 정말 노력했기 때문이라고…… 당당히 말할 수 있어요!');
      await era.printAndWait('기자A 「그럼 나이스 네이처 씨, 마지막으로 팬들에게 한마디 부탁드립니다!」');
      await nature.say_and_wait('저기, 항상 저를 응원해주신 여러분, 감사합니다.');
      await nature.say_and_wait(
        '제가 기대를 저버릴 때도 많았지만, 여러분은 변함없이 저를 지지해주셨어요.',
      );
      await nature.say_and_wait(
        '여러분 덕분에 오늘 제가 여기 올 수 있었어요…… 비록 우여곡절도 많았지만요!',
      );
      await nature.say_and_wait('……조금 이기적인 부탁 하나 해도 될까요?');
      await nature.say_and_wait('그게…… 앞으로도 여러분이 계속 저를 응원해주셨으면 좋겠어요──');
      await nature.say_and_wait(
        '물론 앞으로 컨디션이 안 좋거나 완전히 망칠 때도 있겠죠.',
      );
      await nature.say_and_wait(
        '전 타고난 천재도 아니고, 엄청난 노력가도 아니니까요.',
      );
      await nature.say_and_wait('하지만…… 하지만 말이죠, 이것 하나만큼은 약속할게요.');
      await nature.say_and_wait(
        `──전 여러분의 신뢰를 가장 배신하지 않는 우마무스메가 될게요!`,
      );
      era.println();
      extra_flag.relation_change = 50;
    } else if (extra_flag.rank === 1) {
      await print_event_name('레이스 승리!', nature);

      await nature.say_and_wait(
        `1등이야…… 내가 1등이라고! ${era.get('callname:60:0')} 이것 봐! 나 1등 했어!`,
      );
      era.printButton('「축하해, 네가 강하기 때문에 이긴 거야」', 1);
      era.printButton('「너 자신의 실력으로 이긴 거야」', 2);
      await nature.say_and_wait(
        (await era.input()) === 1
          ? '음, 내가 강하다고……? 사실 잘은 모르겠지만. 뭐…… 좋아, 가끔은 쌤의 아부도 받아들여 볼까.'
          : `뭐야~~ 그건 마치 『내가 강하니까 당연하지』라고 동네방네 소문내는 거랑 똑같잖아. 나중에 또 지면 얼마나 창피하겠어.`,
      );
    } else {
      return await super.race_end(nature, me, callname, hook, extra_flag);
    }
  }
};