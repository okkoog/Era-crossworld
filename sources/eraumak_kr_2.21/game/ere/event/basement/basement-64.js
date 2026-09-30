/**
 * @file 메지로 파머 - 지하실
 * @author KUN (Translated/Adapted)
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedBase {
  async ask_time() {
    const me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 떠보듯 ',
      pama.get_colored_name(),
      '에게 시간을 물었지만, 돌아온 것은 평온한 미소뿐이었다.',
    ]);
    await pama.say_and_wait(['시간은 아직 아주 많이 있어.']);
  }

  async ask_release_agree() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await pama.say_and_wait(['……그렇구나.']);
    await pama.say_and_wait([
      '역시, ',
      callname,
      '도 계속 여기에만 있는 건 싫은 거네.',
    ]);
    await pama.say_and_wait(['미안해, 계속 ', callname, '를 여기에 묶어둬서.']);
    await era.printAndWait([
      pama.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 앞에 미동도 없이 서서, 고개를 떨군 채 금방이라도 쓰러질 듯 위태롭게 흔들렸다.',
    ]);
    await pama.say_and_wait(['하지만 적어도…… 적어도 지금만큼은 다시 한번 내 고집을 들어줘.']);
    await pama.say_and_wait(['아주 조금이면 돼, 정말 아주 조금이면.']);
    await era.printAndWait([
      '비틀거리며 앞으로 다가온 그녀는 ',
      me.get_colored_name(),
      '의 가슴에 머리를 기댔다. 옷 너머로 희미한 열기가 전해졌다.',
    ]);
    await era.printAndWait(['그녀는 허리를 감싸 안으며 힘껏 매달렸다.']);
    await pama.say_and_wait(['이대로면 돼……']);
    await pama.say_and_wait(['이대로, 아주 조금만 더……']);
    await era.printAndWait(['어느 정도의 시간이 흘렀을까, 마침내 꽉 맞잡았던 손이 풀렸다.']);
    await era.printAndWait([
      '얼굴이 새빨갛게 달아오른 ',
      pama.get_colored_name(),
      '는 억지로 미소를 지어 보이며 뺨에 맺힌 이슬을 닦아냈다.',
    ]);
    await pama.say_and_wait(['저기 말이야, ', callname, '.']);
    await pama.say_and_wait(['여기서 나가서도…… 우리 여전히 파트너인 거 맞지?']);
    await era.printAndWait([
      pama.get_colored_name(),
      '가 문 잠금장치를 풀자 경쾌한 소리가 울려 퍼졌다.',
    ]);
    await era.printAndWait([
      '그녀는 문을 등진 채 ',
      me.get_colored_name(),
      '에게 손을 내밀었다.',
    ]);
    await pama.say_and_wait(['자, 가자…… ', callname, '.']);
  }

  async ask_release_reject() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await pama.say_and_wait(['아직은 안 돼.']);
    await era.printAndWait([
      '간청하는 ',
      me.get_colored_name(),
      '을(를) 향해 ',
      pama.get_colored_name(),
      '는 그저 옅은 미소를 띠며 ',
      me.get_colored_name(),
      '의 뺨을 부드럽게 어루만졌다.',
    ]);
    await pama.say_and_wait([callname, '가 여기 없으면 말이야.']);
    await pama.say_and_wait(['난 무척 외로울 거야.']);
    await era.printAndWait([
      '그녀는 몸을 일으켜 ',
      me.get_colored_name(),
      '의 귓가에 입을 맞추듯 다가와 귓바퀴를 살짝 핥았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 소름 돋아 몸을 떠는 것을 느끼고, ',
      pama.get_colored_name(),
      '는 달콤하게 웃음지었다.',
    ]);
    await pama.say_and_wait(['그냥 내 곁에 있어 주면 돼……']);
    await pama.say_and_wait([callname, '……']);
  }

  back_basement() {
    const callname = sys_get_colored_callname(this.id, 0),
      life_marks = LifeEventMarks.get_marks(this.id),
      pama = get_chara_talk(this.id);
    if (life_marks.b_start) {
      if (era.get('base:0:체력') < 100) {
        era.print([
          '피로 섞인 눈을 뜨자, 언제나 밝고 아름답게 빛나던 그 푸른 눈동자와 시선이 마주쳤다.',
        ]);
        pama.say(['으응~?']);
      } else {
        pama.say(['오, 일어났어?']);
        pama.say([callname, '의 자는 얼굴, 아직 다 못 봤는데. 정말이지……']);
        pama.say([
          '하지만 여기 있으면 언제든 ',
          callname,
          '의 웃는 얼굴을 볼 수 있겠지…… 그치?',
        ]);
      }
    } else {
      pama.say(['다녀왔어~']);
      pama.say(['오, ', callname, '! 오늘도 착하게 잘 있었네~']);
      pama.say(['안심해, 내가 계속 곁에 있어 줄게.']);
      pama.say(['여기는…… 내가 도망쳐 온 종착역이니까.']);
    }
  }

  async battle_escape() {
    const me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await era.printAndWait(['짧은 소란이 끝난 뒤, 작은 방에는 다시 정적이 찾아왔다.']);
    await era.printAndWait([
      pama.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 앞에 쓰러진 채 미동도 하지 않았다.',
    ]);
    await era.printAndWait(['이제 눈앞의 자물쇠만 열면 돌아갈 수 있다.']);
    await me.say_and_wait(
      ['……이대로 정말 괜찮은 걸까. ', pama.get_colored_name(), '를 여기에 혼자 남겨두고……'],
      true,
    );
    await era.printAndWait([
      '스스로에게 질문을 던진 뒤, 마음 한구석의 죄책감을 이기지 못한 ',
      me.get_colored_name(),
      '은(는) 결국 뒤를 돌아보았다.',
    ]);
    await era.printAndWait([
      '함께 도망치기로 선택했던 파트너라면, 마땅히 함께 가야 한다.',
    ]);
    await era.printAndWait([
      '억지로 몸을 일으킨 ',
      me.get_colored_name(),
      '은(는) 정신을 잃은 ',
      pama.get_colored_name(),
      '를 품에 안고, 미리 찾아둔 열쇠를 쥐었다.',
    ]);
    await era.printAndWait(['이제 같이 돌아갈 시간이다.']);
  }

  async battle_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await pama.say_and_wait(['그건 곤란해, ', callname, '.']);
    await era.printAndWait([
      '그녀는 불순한 의도가 담긴 ',
      me.get_colored_name(),
      '의 손을 가볍게 제압하고, 오히려 ',
      me.get_colored_name(),
      '을(를) 벽으로 밀어붙였다.',
    ]);
    await era.printAndWait([
      pama.get_colored_name(),
      '는 당황한 기색이 역력한 ',
      me.get_colored_name(),
      '을(를) 내려다보며 묘한 미소를 지었다.',
    ]);
    await pama.say_and_wait([
      '내가 좋아하는 ',
      callname,
      '는 나한테 이런 짓 안 할 텐데 말이야.',
    ]);
    await pama.say_and_wait(['돌아가서 차~분하게 다시 이야기 좀 할까?']);
    await era.printAndWait(['어스름한 조명 아래, 푸른 눈동자가 은은하게 빛나고 있었다.']);
  }

  async battle_prison() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    await era.printAndWait(['차가운 문고리가 날카로운 소리를 냈다.']);
    await era.printAndWait([
      '뒤에서 뻗어온 힘 있는 손이 ',
      me.get_colored_name(),
      '의 떨리는 어깨를 부드럽게 움켜쥐었다. 예상치 못한 온기가 느껴졌다.',
    ]);
    await pama.say_and_wait([callname, '~ 지금 뭐 하고 있어?']);
    await pama.say_and_wait(['제대로 사과한다면, 아무것도 못 본 걸로 해 줄 수도 있는데~']);
    await era.printAndWait([
      '가벼운 말투였지만 ',
      me.get_colored_name(),
      '은(는) 아무 말도 할 수 없었고, 망연자실한 채 ',
      pama.get_colored_name(),
      '에게 이끌려 다시 침대로 돌아왔다.',
    ]);
    await pama.say_and_wait([callname, '는 그냥 여기서 나만 기다리면 돼.']);
    await pama.say_and_wait(['다른 건 전혀 중요하지 않으니까.']);
  }

  get_basement_info(can_strike) {
    if (can_strike) {
      return super.get_basement_info(can_strike);
    }
    const me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    switch (LifeEventMarks.get_marks(this.id).b_s_level) {
      case 1:
        return [
          pama.get_colored_name(),
          '가 조용히 ',
          me.get_colored_name(),
          '의 곁에 앉아 있다. 하지만 불안한 듯 ',
          me.get_colored_name(),
          '이(가) 자신을 바라보는 시선을 피하고 있다……',
        ];
      case 2:
        return [
          pama.get_colored_name(),
          '가 ',
          me.get_colored_name(),
          '의 얼굴을 보며 불안해하면서도, 여전히 손을 놓아줄 생각은 없어 보인다……',
        ];
      case 3:
        return [
          pama.get_colored_name(),
          '가 여전히 ',
          me.get_colored_name(),
          '을(를) 바라보며 묘한 미소를 짓고 있다……',
        ];
      case 4:
        return [
          pama.get_colored_name(),
          '의 얼굴에 공허한 미소가 떠올라 있다. 시선을 돌릴 기색조차 보이지 않는다……',
        ];
      case 5:
        return [
          '적막한 기다림, 끈질기게 따라붙는 시선, 그리고…… ',
          pama.get_colored_name(),
          '의 악의 없는 미소만이 가득하다……',
        ];
    }
    return [];
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    if (!is_back) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    era.print([
      me.get_colored_name(),
      '의 노력 끝에 드디어 문고리가 헐거워지기 시작했다. 조금만 더 힘을 쓰려던 찰나……',
    ]);
    pama.say(['아, 여기서 나 돌아오길 기다리고 있었던 거야?']);
    pama.say(['역시 내 파트너네, ', callname, '!']);
    era.print([
      '그녀는 웃으며 ',
      me.get_colored_name(),
      '의 손에서 도구를 빼앗아 들고는, 다시 문을 굳게 닫았다.',
    ]);
    pama.say(['나를 반겨줄 거면 그냥 여기 있으면 돼.']);
    pama.say(['만약 ', callname, '가 자물쇠를 열어버리면 나 정말 곤란해지거든.']);
    pama.say(['무슨 뜻인지 알지, ', callname, '?']);
  }

  async flatter() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(64),
      relation = era.get(`relation:${this.id}:0`);
    if (relation < 0) {
      await era.printAndWait([
        '당신의 파트너는 본래 햇살 같은 아이였으니, 진심으로 대화하고 부탁한다면……',
      ]);
      await pama.say_and_wait(['아무리 나 같은 애라도 ', callname, '의 거짓말 정도는 눈치챌 수 있어.']);
      await era.printAndWait([
        pama.get_colored_name(),
        '는 망설임 없이 ',
        me.get_colored_name(),
        '의 말을 끊고 무미건조한 미소를 지었다.',
      ]);
      await pama.say_and_wait([
        '자꾸 이러면 말이야, ',
        callname,
        '. 작은 벌을 줘야 할지도 모르겠네.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 무어라 덧붙이기도 전에 ',
        pama.get_colored_name(),
        '는 당신의 입술을 막아버렸다.',
      ]);
      await era.printAndWait([
        '그녀는 일말의 주저함도 없이 ',
        me.get_colored_name(),
        '을(를) 침대로 밀어 넣고는 무표정하게 곁에 앉았다.',
      ]);
      await era.printAndWait(['더는 아무런 말도 꺼낼 수 없을 만큼 무거운 정적이 흘렀다.']);
    } else if (
      relation <
      era.get(`love:${this.id}`) * (era.get('flag:극단적행위제한') || 1)
    ) {
      await era.printAndWait([
        '말로써 ',
        pama.get_colored_name(),
        '와 화해하려 시도했으나, 돌아온 것은 입술을 강제로 막는 입맞춤이었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 숨이 턱 끝까지 차올랐을 때야 비로소 ',
        pama.get_colored_name(),
        '는 만족스러운 듯 입을 뗐다. 은밀한 타액이 길게 실을 그리며 이어졌다.',
      ]);
      await pama.say_and_wait(['안 돼.']);
      await pama.say_and_wait([callname, '는 그런 말 하면 안 되지.']);
      await era.printAndWait([
        '무력해진 ',
        me.get_colored_name(),
        '은(는) 다시 한번 침대 위로 쓰러져 자신을 내려다보는 ',
        pama.get_colored_name(),
        '를 바라보았다.',
      ]);
      await pama.say_and_wait(['난 ', callname, '가 그런 말 하는 거 정말 싫어하거든.']);
      await pama.say_and_wait(['자, 이제 전부 ', callname, ' 잘못이야.']);
      await pama.say_and_wait(['나랑 같이, 영원히 여기 있자.']);
      await pama.say_and_wait([callname, '~']);
    } else {
      await era.printAndWait([
        '빛 한 점 들지 않는 방 안에서 ',
        me.get_colored_name(),
        '은(는) 여전히 대화로 상황을 타개해보려 애썼다.',
      ]);
      await era.printAndWait([
        '하지만 이번에 ',
        pama.get_colored_name(),
        '는 그저 ',
        me.get_colored_name(),
        '의 곁에 앉아 묵묵히 그 말을 듣고만 있었다.',
      ]);
      await pama.say_and_wait(['……네가 말 안 해도 나 다 알고 있어.']);
      await pama.say_and_wait(['난 그냥 겁쟁이일 뿐이야…… 미안해.']);
      await pama.say_and_wait([callname, ', 넌 사실 아무 잘못도 없는데.']);
      await era.printAndWait([
        '그녀는 고개를 떨구고 천천히 ',
        me.get_colored_name(),
        '의 쪽으로 몸을 붙여 어깨에 머리를 기댔다.',
      ]);
      await era.printAndWait([
        '불안한 듯 뻗어온 두 손이 ',
        me.get_colored_name(),
        '의 늘어진 손바닥을 조심스레 감싸 쥐었다.',
      ]);
      await pama.say_and_wait(['적어도…… 조금만 더 내 고집을 부리게 해줘.']);
      await era.printAndWait(['손가락이 손바닥 사이를 파고들어 깍지를 끼었다.']);
      await pama.say_and_wait(['아주 조금만 더…… 이대로 있게 해줘.']);
    }
  }

  start_fixing() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    era.print([
      '휴식을 취하던 ',
      me.get_colored_name(),
      '의 귀에 문쪽에서 금속 조각이 바닥에 떨어지는 소리가 들려왔다.',
    ]);
    era.print([
      '무언가 직감한 ',
      me.get_colored_name(),
      '이(가) 확인하러 나가려던 순간, 문을 열고 들어오던 ',
      pama.get_colored_name(),
      '와 정면으로 마주쳤다.',
    ]);
    era.print(['대문은 여전히 견고했고, 오히려 함정과 잠금장치는 더욱 완벽하게 보강되어 있었다.']);
    pama.say([callname, '? 여긴 웬일이야?']);
    pama.say(['아, 나 찾으러 온 거지? 맞지?']);
    era.print([
      '뻔한 사실을 짐짓 모르는 척하며 ',
      pama.get_colored_name(),
      '는 반강제로 ',
      me.get_colored_name(),
      '을(를) 다시 방 안으로 밀어 넣었다.',
    ]);
    era.print([
      me.get_colored_name(),
      '을(를) 향해 검지 손가락을 입술에 대며 조용히 하라는 제스처를 취하고는 싱긋 웃었다.',
    ]);
    pama.say(['미안해, 시끄럽게 해서 깼어?']);
    pama.say(['조금 이따가 갈게, 기다리고 있어, ', callname, '.']);
  }

  async strike_success() {
    return this.battle_success();
  }

  welcome() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      pama = get_chara_talk(this.id);
    if (Math.random() < 0.5) {
      era.print([
        me.get_colored_name(),
        '이(가) 잠에서 깨어났을 때, 그는 차갑게 폐쇄된 공간에 갇혀 있음을 깨달았다.',
      ]);
      era.print(['주변을 둘러보자, 어둠 속에서 익숙한 미소가 나타났다.']);
      pama.say([callname, '~ 기분은 좀 어때?']);
      pama.say('이거 오직 너만을 위해 특별히 준비한 거야. 놀랐지?');
    } else {
      era.print([
        '음침하고 작은 방 안에서, 깊게 잠들지 못한 ',
        me.get_colored_name(),
        '은(는) 머리를 짚으며 몸을 일으켰다.',
      ]);
      era.print([
        '텅 빈 공간에는 오직 ',
        me.get_colored_name(),
        ' 자신뿐인 것처럼 보였다.',
      ]);
      era.print([
        me.get_colored_name(),
        '이(가) 침대에서 내려와 걸음을 떼려던 찰나, 익숙한 목소리가 들려왔다.',
      ]);
      pama.say([callname, '~ 나 왔어!']);
      era.print([
        '코너 너머로 얼굴을 내민 ',
        pama.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '을(를) 보며 화사하게 미소 지었다.',
      ]);
    }
  }
};