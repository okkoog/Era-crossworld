/**
 * @file 원더 어큐트 - 招募
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { add_event, cb_enum } = require('#/event/queue');
const CustomizedRecruit = require('#/event/rec/rec-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const EventObject = require('#/data/event/event-object');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedRecruit {
  async recruit(stage, event_object) {
    const acute = get_chara_talk(100),
      me = get_chara_talk(0);
    if (stage === event_hooks.recruit) {
      if (await this.check_before_rec()) {
        return false;
      }
      await me.say_and_wait(
        '……우리 집 앞에는 나무 두 그루가 있다. 하나는 대추나무고, 다른 하나도 대추나무다.',
        true,
      );
      await me.say_and_wait(
        '갑자기 어떤 소설가의 명언이 머릿속에 떠오른다.',
        true,
      );
      await me.say_and_wait('왜일까? 무언가라도 생각하고 싶어서일까… 혹은 이렇게라도 생각을 돌리지 않으면 견딜 수 없기 때문일까?', true);
      await me.say_and_wait(
        '업무에서 오는 피로가 트레이너로서의 자신감을 짓누르고 있는 걸까?',
        true,
      );
      await me.say_and_wait(
        '최근 쉴 틈 없이 이어진 레이스들이 나에게 과도한 압박을 준 걸까?',
        true,
      );
      await me.say_and_wait(
        [
          '아니면 진심을 쏟았던 레이스 ',
          acute.get_uma_sex_title(),
          '에 대해, 트레이너로서 도대체 어떤 거리를 유지해야 할지 줄곧 망설이다가, 결국 양쪽 모두에게 상처를 준 것 때문일까?',
        ],
        true,
      );
      await me.say_and_wait('전부일 수도 있고…… 전부 아닐 수도 있다.', true);
      era.drawLine();
      if (era.get('cflag:60:모집상태') === recruit_flags.yes) {
        await get_chara_talk(60).used_to_say_and_wait(
          '자자, 평범한 인간이니까 피곤함을 느끼는 건 당연한 거라구.',
        );
      }
      if (era.get('cflag:62:모집상태') === recruit_flags.yes) {
        await get_chara_talk(62).used_to_say_and_wait([
          '괜찮아요, ',
          sys_get_colored_callname(62, 0),
          '~ 기운 내세요~',
        ]);
      }
      if (era.get('cflag:13:모집상태') === recruit_flags.yes) {
        await get_chara_talk(13).used_to_say_and_wait([
          '뭐어…… 아무튼, 같이 애프터눈 티라도 마시러 가시겠어요? ',
          sys_get_colored_callname(13, 0),
          '?',
        ]);
      }
      if (era.get('cflag:7:모집상태') === recruit_flags.yes) {
        await get_chara_talk(7).used_to_say_and_wait([
          '오, ',
          sys_get_colored_callname(7, 0),
          '~ 라멘 한 그릇 때리러 갈래?',
        ]);
      }
      if (era.get('cflag:71:모집상태') === recruit_flags.yes) {
        await get_chara_talk(71).used_to_say_and_wait([
          '괜찮아요, ',
          sys_get_colored_callname(71, 0),
          '! 메지로 가문의 재력만 있다면——',
        ]);
      }
      if (era.get('cflag:61:모집상태') === recruit_flags.yes) {
        const temp = get_chara_talk(61);
        await temp.used_to_say_and_wait([
          '오——호호호! 범인들의 시선 따윈 신경 쓸 필요 없어. 언제든 네 재능과 모습은 이 ',
          temp.name,
          '께서 인정해 줄 테니까!',
        ]);
      }
      if (era.get('cflag:6:모집상태') === recruit_flags.yes) {
        await get_chara_talk(6).used_to_say_and_wait([
          '……',
          sys_get_colored_callname(6, 0),
          ', 배고파.',
        ]);
      }
      if (era.get('cflag:21:모집상태') === recruit_flags.yes) {
        await get_chara_talk(21).used_to_say_and_wait([
          '자, ',
          sys_get_colored_callname(21, 0),
          '. 오코노미야키다. 니랑 ',
          sys_get_colored_callname(21, 6),
          ' 몫까지 다 만들어 왔으니까, 이거 묵고 기운내라.',
        ]);
      }
      if (era.get('cflag:11:모집상태') === recruit_flags.yes) {
        await get_chara_talk(11).used_to_say_and_wait([
          '후후~ 정말 귀엽네요, ',
          sys_get_colored_callname(11, 0),
          '~',
        ]);
      }
      if (era.get('cflag:32:모집상태') === recruit_flags.yes) {
        await get_chara_talk(32).used_to_say_and_wait([
          '이런, ',
          sys_get_colored_callname(32, 0),
          '! 그렇게 신경 쓰인다면, 모든 것을 잊게 해주는 이 약을 먹어보겠나? 공짜로 줄 테니~',
        ]);
      }
      if (era.get('cflag:25:모집상태') === recruit_flags.yes) {
        await get_chara_talk(25).used_to_say_and_wait([
          '……이대로 계속 가다간, ',
          sys_get_colored_callname(25, 0),
          '……, 죽어버리실 지도 몰라요?',
        ]);
      }
      era.drawLine();
      await era.printAndWait('옥상에 가서 담배나 한 대 피울까……');
      era.set('cflag:100:무작위모집', 0);
      era.set('flag:대상물색', 100);
      EventMarks.get(0).add(event_hooks.school_rooftop);
      add_event(
        event_hooks.school_rooftop,
        new EventObject(100, cb_enum.recruit),
      );
    } else {
      if (era.get('flag:현재상호작용캐릭터') > 0) {
        add_event(event_hooks.school_rooftop, event_object);
        return;
      }
      era.set('flag:대상물색', 0);
      EventMarks.get(0).sub(event_hooks.school_rooftop);
      await era.printAndWait(
        '황혼이 내려앉은 옥상에서, 무심코 자신을 잠시나마 모든 것에서 잊게 해줄 담배 한 개비에 불을 붙이려 했다.',
      );
      await era.printAndWait('그렇게 손을 뻗어 자신의 주머니를 뒤적였다.');
      await era.printAndWait('—— 그러나 주머니 속에는 아무것도 없었다.');
      era.drawLine();
      await era.printAndWait(
        '황혼의 석양 아래, 비행기 한 대가 하늘 저편을 항해하며 주황빛 직선의 비행운을 남기고 있다.',
      );
      await era.printAndWait(
        '난간에 기대어 하늘을 바라보노라니, 이토록 자유로움을 느껴본 적도, 이토록 압박감을 느껴본 적도 없었다.',
      );
      await era.printAndWait([
        '당초, 자신이 121억이라는 천문학적인 빚을 졌을 때, ',
        get_chara_talk(302).get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 거두어 주었고, ',
        me.get_colored_name(),
        '이(가) 트레이너로서 어떻게든 대출 지옥을 버텨내며 그 천문학적인 구멍을 메울 수 있도록 해주었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 생각했다. 오늘날에 이르기까지, 어쩌면 ',
        sys_get_colored_callname(0, 302),
        '는 여전히 ',
        me.get_colored_name(),
        '을(를) 깊이 신뢰하고 있을지도 모른다고.',
      ]);
      await era.printAndWait([
        sys_get_colored_callname(0, 302),
        ' 뿐만 아니라, ',
        sys_get_colored_callname(0, 301),
        '도 있고, 나아가 다른 담당 ',
        acute.get_uma_sex_title(),
        '들까지…… ',
        me.get_colored_name(),
        '은(는) 생각했다. ',
        acute.sex,
        '들이 여전히 ',
        me.get_colored_name(),
        '에게 기대를 품고 있다고.',
      ]);
      await era.printAndWait('하지만 그 기대라는 것은, 한편으론 또 얼마나 무거운 짐인가?');
      await era.printAndWait([
        '결국 따지고 보면, ',
        me.get_colored_name(),
        '도 한낱 【평범한 사람】에 불과하지 않은가.',
      ]);
      await era.printAndWait(
        '모든 일을 완벽하게 처리해낼 수도 없고, 이토록 과분한 기대를 짊어져서도 안 되며, 그저 세상 속에서 필사적으로 발버둥 치다가 가능하다면 도망치고 싶어 하기도 하는, 가장 평범한 사람이 아닌가?',
      );
      await me.say_and_wait('……………………');
      await me.say_and_wait('…………');
      await me.say_and_wait('……');
      await me.say_and_wait('정말이지…… 도망치고 싶어.', true);
      era.printButton('「하아…… (한숨)」', 1);
      await era.input();
      await acute.say_as_unknown_and_wait(
        '어라라…… 자꾸 한숨을 쉬면, 복이 달아나 버릴게야?',
      );
      await era.printAndWait([
        '바로 그때, ',
        me.get_colored_name(),
        '의 눈앞에 나타난 것은 석양과 함께 빛나는 한 명의 ',
        acute.get_uma_sex_title(),
        '였다.',
      ]);
      await era.printAndWait([
        '그곳은 트레센 학원의 옥상, 낙조의 여운이 감도는 공간 속이었다. ',
        me.get_colored_name(),
        '이(가) 목소리가 들린 곳으로 슬그머니 고개를 돌리자, 언제나 온화한 미소를 짓고 있는 ',
        acute.get_uma_sex_title(),
        '가 ',
        me.get_colored_name(),
        '의 눈앞에 나타났다.',
      ]);
      await era.printAndWait(
        `${acute.sex}의 몸에는 만화에나 나올 법한 독특하고 눈부신 광채 따위는 없었지만, ${acute.sex}의 자태는 이상하리만치 뇌리에서 잊혀지지 않았다.`,
      );
      await era.printAndWait(`왜냐하면 ${acute.sex}는—— 이 저무는 석양에 너무나도 잘 어울렸기 때문이다.`);
      await acute.say_as_unknown_and_wait(
        '어라어라…… 그런 울 것 같은 표정 짓지 말아줘.',
      );
      await acute.say_as_unknown_and_wait(
        '내 이름은 원더 어큐트…… 으음—— 우리 아마 처음 만나는 거였지?',
      );
      await acute.say_and_wait(
        '미안허이, 갑자기 말을 걸어서 놀라게 한 건 아닐런지. 금방이라도 눈물을 흘릴 것 같은 표정을 하고 있길래, 나도 모르게 걱정해버렸구나.',
        );
      await acute.say_and_wait(
        '학원에 있는 못된 아이한테 괴롭힘이라도 당한 게니? 아니면 직장 내 괴롭힘? 그것도 아니라면, 그냥 단순히 배가 고픈 거니?',
      );
      await acute.say_and_wait(
        '만약 배가 고픈 거라면…… 자, 여기 말린 무란다~ 사양하지 말고 손으로 조금 집어 가렴~',
      );
      await era.printAndWait(
        `자애롭게 미소 지으며 석양의 노을 속에 녹아든 ${acute.sex}가 등 뒤에서 말린 무가 가득 담긴 유리 그릇을 꺼냈다.`,
      );
      await era.printAndWait('아첨도 아니고, 환심을 사려는 것도 아니며, 물론 일상적인 팬 서비스 같은 것도 아니다——');
      await era.printAndWait([
        '그저 딱 알맞은, 너무 가깝지도 너무 멀지도 않은 거리감. ',
        acute.sex,
        '는 유리 그릇을 받쳐 든 손을 내밀어, 말린 무를 ',
        me.get_colored_name(),
        '의 눈앞에 바쳤다.',
      ]);
      await era.printAndWait(
        `그리고 홀린 듯이, ${sys_get_callname(0, 0)} 역시 자신의 오른손을 뻗었다.`,
      );
      await era.printAndWait('오도독, 오도독, 오도독, 오도독——');
      await era.printAndWait('그것은 약간 씁쓸하면서도, 뜻밖에도 조금 아삭아삭하고 상쾌한 맛이었다.');
      await era.printAndWait('분명 배가 그다지 고픈 것도 아니었는데…… 왜인지 모르게——');
      await era.printAndWait('멈추고 싶지 않다는 느낌이 들었다.');
      await era.printAndWait(
        '처음에는 그저 손가락 끝으로 가장 위쪽에 있는, 제일 메마른 말린 무 한 조각의 가장자리를 집어 살며시 입가로 가져가 치아로 씹었다.',
      );
      await era.printAndWait(
        '이어서 손가락 끝으로 말린 무 한 조각의 정중앙을 붙잡고, 그대로 입안에 밀어 넣고 우물거렸다.',
      );
      await era.printAndWait('마지막에는 한꺼번에 여러 조각의 말린 무를 웅큼 쥐고 그대로 입안으로 털어 넣었다.');
      await era.printAndWait('먹으면 먹을수록 더욱 갈증이 났다.');
      await era.printAndWait('갈증이 나면 날수록, 왜인지 모르게 가슴 속이 시원하게 풀어져 갔다.');
      await era.printAndWait([
        '유리 그릇에 담겨 있던 말린 무는 눈 깜짝할 사이에 ',
        me.get_colored_name(),
        '의 배 속으로 전부 삼켜져 버렸다.',
      ]);
      await acute.say_and_wait('어라어라…… 정말 호쾌한 식사법이구나~');
      await era.printAndWait('언제나 온화하고 평온하던 얼굴에 미소가 한층 더 짙어졌다.');
      await acute.say_and_wait('어떠니, 맛있었어?');
      era.printButton('「……아, 네.」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 묵묵히 고개를 끄덕였고, 말린 무를 한 통 다 먹어 치워버린 탓에 사과하려던 생각을 마음속으로 꾹 삼켰다.',
      ]);
      await acute.say_and_wait('맛있었다면 다행이네~ 그럼, 여기 와서 앉으렴.');
      await era.printAndWait([
        acute.get_colored_name(),
        '라는 이름의 ',
        acute.get_teen_sex_title(),
        '는 옥상 벽에 기대어 석양을 마주하고 걸터앉았다.',
      ]);
      await era.printAndWait(
        `${acute.sex}는 자리에 앉으며 곁의 빈 자리를 가볍게 톡톡 두드렸다.`,
      );
      await acute.say_and_wait('힘든 일이 있을 때, 혼자서만 끙끙 앓는 건 좋지 않단다~');
      await acute.say_and_wait('시간은 아직 잔뜩 있으니까 말이지? 무슨 일이든 천천히 얘기해 보렴~');
      era.drawLine();
      await era.printAndWait('그날, 해가 저물기 전에.');
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) 석양과 함께 빛나던 ',
        acute.get_teen_sex_title(),
        ', 동시에 훗날 ',
        me.get_colored_name(),
        '의 담당이 된 ',
        acute.get_teen_sex_title(),
        '인 원더 어큐트는.',
      ]);
      await era.printAndWait('정말 수많은, 수많은 이야기를 나누었다——');
      era.set(`cflag:100:모집상태`, recruit_flags.yes);
      await era.printAndWait([
        acute.get_colored_name(),
        '의 트레이너가 되었다!',
      ]);
      return true;
    }
  }
};