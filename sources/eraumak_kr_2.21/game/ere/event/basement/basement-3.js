/**
 * @file 토카이 테이오 - 지하실
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const sys_filter_chara = require('#/system/sys-filter-chara');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');
const TeioLifeMarks = require('#/data/event/life-event-marks/life-event-marks-3');
const recruit_flags = require('#/data/event/recruit-flags');

/**
 * @param {CharaTalk} teio
 * @param {CharaTalk} me
 */
async function ask_release_common(teio, me) {
  era.printButton('「이제 충분히 놀았겠지 테이오. 이제 날 풀어줘.」', 1);
  era.printButton('「테이오님...제발 절 내보내주세요.」', 2);
  await era.input();

  await teio.say_and_wait('……하.');
  await era.printAndWait([
    '당신 맞은편 의자에 걸터앉은 작은 ',
    teio.get_uma_sex_title(),
    '는 몸을 앞으로 기울이며 청흑색의 눈동자를 깜빡이지 않고 ',
    me.get_colored_name(),
    '을(를) 응시하고 있다. 마치 블랙홀처럼, 들여다보려는 빛을 모두 삼켜버릴 듯이.',
  ]);
  await teio.say_and_wait('어떻게 그런 말을 할 수 있나……나의 트레이너여.');
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 등골이 오싹해졌지만, 이 순간 약한 모습을 보이고 싶지 않아 ',
    teio.sex,
    '를 빤히 쳐다보았다. 마음 한구석에는 희망이 깃들어 있었다. 지금 이 뒤틀린 홍채 너머에서 내가 아끼던 그 아이를 찾아내고 싶다는 희망이.',
  ]);
}

/**
 * @param {CharaTalk} teio
 * @param {CharaTalk} me
 */
async function strike_common(teio, me) {
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 눈을 감고 잠든 척하며, 현재 상황을 집중해서 분석하기 시작했다.',
  ]);
  await era.printAndWait([
    '분명 지금 상황에서 구조를 기대하기는 어렵다. 차라리 스스로를 믿는 편이 낫다. 하지만 ',
    me.get_colored_name(),
    '의 현재 정신 상태로는…… ',
    teio.sex,
    '를 설득해 자신을 풀어주게 할 자신도, 정면으로 맞서 싸울 자신도 없었다. 어느 쪽도 좋은 선택지는 아니었다.',
  ]);
  await era.printAndWait(['그렇다면, 방법은 단 하나뿐이다.']);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 트레이너로서의 두뇌를 풀가동해 전술을 짜고, 스스로 미끼가 되어 때를 기다렸다.',
  ]);
  await era.printAndWait([
    '작은 발소리가 다가오고, 서늘한 기운이 스쳐 지나가며, 바스락거리는 옷 벗는 소리가 들려온다……',
  ]);
  await era.printAndWait([
    '지금이다! ',
    me.get_colored_name(),
    '은(는) 정적을 깨고 침대에서 단숨에 뛰어올라, 양손을 뻗어 ',
    teio.sex,
    '의 머리카락과 꼬리를 낚아챘다——',
  ]);
  era.println();
}

/**
 * @param {CharaTalk} teio
 * @param {CharaTalk} me
 */
async function after_battle_common(teio, me) {
  await teio.say_and_wait(['이게 뭐야, 거짓말이지……']);
  era.println();

  await era.printAndWait([
    me.get_colored_name(),
    '의 손날이 ',
    teio.sex,
    '의 뒷덜미를 정확히 강타했다.',
  ]);
  await era.printAndWait([
    teio.sex,
    '는 한쪽 손을 들어 ',
    me.get_colored_name(),
    '의 어깨를 짚으며 무언가 말하려는 듯 입술을 달싹였지만, 결국 몸에 힘이 풀리며 쓰러졌다.',
  ]);
  await era.printAndWait([
    '승자가 된 ',
    me.get_colored_name(),
    '은(는) 조심스럽게 ',
    teio.sex,
    '의 몸을 부축해 벽에 기대어 앉히고는, 굳게 잠긴 문을 향해 돌아섰다.',
  ]);
  await era.printAndWait([
    '드디어 때가 왔다…… 이토록 긴 감금과 고뇌, 그리고 투쟁 끝에 결판을 낼 시간이다.',
  ]);
  await era.printAndWait([
    me.get_colored_name(),
    '은(는) 품속에서 몰래 찰흙으로 본떠 두었던 ',
    teio.get_colored_name(),
    '의 지문 복제를 꺼내 기억 속 자물쇠 위치에 갖다 대었다.',
  ]);
  await era.printAndWait([
    '만약 ',
    me.get_colored_name(),
    '의 계산이 틀리지 않았다면…… 이것으로 밖으로 나갈 수 있을 것이다.',
  ]);
  era.println();
}

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const me = get_chara_talk(0),
      teio = get_chara_talk(3);
    await ask_release_common(teio, me);
    await era.printAndWait([
      '마치 반 세기처럼 느껴지는 긴 시선 교환 끝에, ',
      teio.get_colored_name(),
      '가 고개를 떨구었다.',
    ]);
    await teio.say_and_wait([
      '미안해…… ',
      sys_get_colored_callname(3, 0),
      ', 내가 잘못했어.',
    ]);
    await teio.say_and_wait('문은…… 지금 열려 있어. 마음대로 해.');
    await era.printAndWait([
      '말을 마친 ',
      teio.sex,
      '는 자신의 두 다리를 끌어안고 몸을 돌린 채 ',
      me.get_colored_name(),
      '에게 길을 터주었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문을 향해 걸어갔지만, 곁눈질로 본 ',
      teio.get_child_sex_title(),
      '는 가늘게 몸을 떨고 있었다——',
    ]);
    era.printButton('그대로 내버려 둔다', 1);
    era.printButton(`${teio.sex}를 데리고 나간다`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 조금의 지체도 없이 자유로운 세상을 향해 발을 내디뎠다—— ',
        teio.sex,
        '는 어떻게 되냐고? 이제 따끔한 교훈을 얻을 시간이다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 망설임 없이 웅크린 그림자를 향해 다가가, 가볍게 손을 뻗어 ',
        teio.sex,
        '의 머리를 쓰다듬었다. 머리칼부터 척추를 따라 꼬리 끝까지 부드럽게 쓰다듬자, ',
        teio.get_uma_sex_title(),
        '의 떨림이 처음엔 격해지더니 점차 잦아들었다.',
      ]);
      await era.printAndWait([
        '더 가까이 다가가 ',
        teio.sex,
        '의 구레나룻을 잡고 조심스레 고개를 돌리게 하자, 익숙한 얼굴이 나타났다. ',
        me.get_colored_name(),
        '은(는) 눈물로 씻겨 내려간 그 맑은 하늘색 눈동자를 보며 자신도 모르게 미소 지었다.',
      ]);
      await me.say_and_wait('돌아가자, 함께.');
      await teio.say_and_wait('으으……');
      await era.printAndWait([
        teio.sex,
        '는 얼굴을 훔치며 한쪽 손으로 조심스럽고도 꽉 ',
        me.get_colored_name(),
        '의 소맷자락을 붙잡았다. 그리고 비틀거리며 바닥에서 일어나 ',
        me.get_colored_name(),
        '을(를) 밖으로 안내했다.',
      ]);
      new TeioLifeMarks().release_agree = 1;
    }
  }

  async ask_release_reject() {
    const me = get_chara_talk(0),
      teio = get_chara_talk(3);
    await ask_release_common(teio, me);
    await teio.say_and_wait('트레이너……');
    await era.printAndWait([
      teio.sex,
      '는 고개를 갸우뚱하며 미소 지었다—— ',
      me.get_colored_name(),
      '에게는 아주 익숙한 몸짓이었지만, 눈앞의 이 ',
      teio.sex_code - 1 ? '암' : '수',
      '컷 짐승은 마치 처음 보는 존재처럼 느껴졌다.',
    ]);
    await teio.say_and_wait('당신이 가르쳐줬잖아…… 현실에 너무 많은 환상을 품지 말라고.');
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 무엇을 기대했든 간에, 현재의 상황은 명확했다.',
    ]);
  }

  async ask_time(date, hours, minutes) {
    const me = get_chara_talk(0),
      teio = get_chara_talk(3),
      buffer = [],
      life_marks = new TeioLifeMarks();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      teio.get_colored_name(),
      '에게 현재 시간을 물었다……',
    ]);
    if (life_marks.b_s_level > 3 - era.get('status:3:다리부상')) {
      buffer.push(
        '어떤 건 모르는 편이 더 나을지도 몰라…… 헤헤, 나를 어린애 취급할 때 자주 하던 말이잖아?',
      );
    } else {
      buffer.push('함께 있는 시간 말이야? ……평생이야❤️', [
        CustomizedBase.get_cur_time(hours, minutes),
        '~ 후후…… 그렇게 서두르지 마. ',
        sys_get_colored_callname(3, 0),
        '는 침착한 어른이잖아, 그치?',
      ]);
      if (era.get('status:3:다리부상')) {
        buffer.push([
          CustomizedBase.get_cur_time(hours, minutes),
          '……별로 지나지도 않았는데 벌써 내가 질려버린 거야, ',
          sys_get_colored_callname(3, 0),
          '?',
        ]);
      }
    }
    await teio.say_and_wait(get_random_entry(buffer));
  }

  async battle_escape() {
    const me = get_chara_talk(0),
      teio = get_chara_talk(3);
    await after_battle_common(teio, me);
    await era.printAndWait([
      '갑자기 알림음이 울리자 ',
      me.get_colored_name(),
      '은(는) 깜짝 놀랐다—— 다행히도 자물쇠의 자동 개방음이었다. ',
      me.get_colored_name(),
      '은(는) 안도의 한숨을 내쉬며 빛이 비치는 바깥세상을 향해 걸어갔다……',
    ]);
  }

  async battle_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      teio = get_chara_talk(3);
    await this.battle_success();
    if (era.get('status:3:다리부상')) {
      await teio.say_and_wait([callname, '? 미, 미안해! 하지만, 제발 다시는 날 떠나지 마……']);
      await era.printAndWait([]);
    } else {
      await teio.say_and_wait([callname, '?! 괜찮아? ……설마 이런 방법까지 쓰다니……']);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        teio.get_teen_sex_title(),
        '에게 손쉽게 제압당했다. ',
        teio.sex,
        '는 분노보다는 놀라움이 더 큰 표정이었다.',
      ]);
    }
  }

  async battle_prison() {
    const me = get_chara_talk(0),
      teio = get_chara_talk(3);
    await after_battle_common(teio, me);
    await era.printAndWait([
      '알림음이 울리고, 찰칵 소리와 함께 문이 다시 잠겼다. ',
      me.get_colored_name(),
      '은(는) 상황이 좋지 않음을 직감하고 몇 걸음 뒤로 물러났다. 숨을 한 번 고른 뒤, 온 힘을 다해 몸을 날려 문을 들이받았다.',
    ]);
    era.println();

    await era.printAndWait([
      '거대한 소리가 지하 공간에 메아리치고, ',
      me.get_colored_name(),
      '은(는) 그 반동으로 튕겨 나갔다. 눈앞에 별이 보이고 조금 전 ',
      teio.get_uma_sex_title(),
      '와 싸우며 입은 상처가 도지는 듯했다. ',
      me.get_colored_name(),
      '은(는) 거친 숨을 몰아쉬며 주저앉았고, 시선은 마침 곤히 잠든 담당 우마무스메의 얼굴과 마주쳤다.',
    ]);
    era.println();

    await era.printAndWait([
      teio.sex,
      '의 모습은 ',
      me.get_colored_name(),
      '이(가) 잘 아는 그 ',
      teio.get_uma_sex_title(),
      '와 다를 바 없어 보였다.',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 쓴웃음을 지으며 ',
      teio.sex,
      '의 속눈썹에 맺힌 눈물을 닦아주었다. 더 이상의 반항을 멈추고, ',
      me.get_colored_name(),
      '은(는) 자신의 운명을 받아들였다.',
    ]);
  }

  async battle_success() {
    const me = get_chara_talk(0);
    await era.printAndWait('어떻게 해도…… 무리인가……');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 현재 상황에 대해 고민하고 온갖 계획을 세워보았으나, 모두 불가능하거나 무의미하다는 결론에 도달했다. ',
      me.get_colored_name(),
      '은(는) 눈을 뜨고, 가장 단순하면서도 확실한 방법을 쓰기로 했다. 자신을 이곳에 가둔 ',
      { color: get_chara_color(3), content: '테이오' },
      '를 정면으로 꺾는 것이다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 트레이너 시절 담당에게 가르쳤던 근육 사용법들을 떠올리며, 깊은 숨을 들이마시고 직접 실천할 준비를 마쳤다.',
    ]);
    era.println();
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const life_marks = new TeioLifeMarks();
    if (
      !out_of_prison ||
      !is_back ||
      life_marks.b_s_level < 3 - era.get('status:3:다리부상')
    ) {
      return super.find_escape(out_of_prison, s_level_up, is_back);
    }
    const me = get_chara_talk(0),
      teio = get_chara_talk(3);
    era.print(['어쩐 일인지, ', teio.get_colored_name(), '가 자리를 비운 지 꽤 시간이 흘렀다.']);
    era.print([
      '수업에 갔나? 트레이닝? 아니면 축제? 그것도 아니라면—— 생각이 여기에 미치자 ',
      me.get_colored_name(),
      '의 머리가 더 아파왔다—— 학원 관계자들에게 자신의 실종에 대해 거짓말이라도 지어내고 있는 걸까?',
    ]);
    era.print([
      '더 이상 지체할 수 없다. ',
      me.get_colored_name(),
      '은(는) 구조를 기다리기보다 스스로 기회를 잡아 도망치기로 마음먹었다.',
    ]);
    era.println();
    era.print([
      me.get_colored_name(),
      '이(가) 조심스레 문을 밀자—— 이번엔 잠겨 있지 않았다! ',
      me.get_colored_name(),
      '은(는) 기뻐하며 문턱을 넘었다. 미친 듯이 뛰는 심장을 진정시키며 어둠을 자극하지 않으려 애썼다……',
    ]);
    teio.say('에이……');
    era.print(['순간, 방금까지 요동치던 피가 차갑게 식었다.']);
    era.print([
      '향긋하고 따스한 몸이 밀착되더니, 가늘지만 힘 있는 두 팔이 ',
      me.get_colored_name(),
      '의 허리를 단단히 감싸 안았다. ',
      me.get_colored_name(),
      '은(는) 꼼짝도 할 수 없었다.',
    ]);
    teio.say(
      '예전에 내가 자율 트레이닝 때 땡땡이치는지 확인하려고 당신이 썼던 방법인데…… 어른의 수법이란 건 참, 후후.',
    );
    era.print([
      '입장이 완전히 역전된 지금, ',
      me.get_colored_name(),
      '은(는) 결국 ',
      teio.sex,
      '의 손에 이끌려 방으로 돌아가 「벌」을 기다리게 되었다……',
    ]);
  }

  first_time() {
    const me = get_chara_talk(0),
      team_list = sys_filter_chara(
        'cflag',
        '모집상태',
        recruit_flags.yes,
      ).filter((e) => e > 0 && e !== 3),
      highest_love = Math.max(...team_list.map((e) => era.get(`love:${e}`)));
    let another_lover = get_random_entry(
      team_list.filter(
        (e) =>
          era.get(`love:${e}`) === highest_love &&
          (era.get(`relation:3:${e}`) <= 375 ||
            era.get(`relation:${e}:3`) <= 75),
      ),
    );
    if (!another_lover) {
      another_lover = 304;
    }
    another_lover = get_chara_talk(another_lover);
   era.print([
      '기숙사 밖에서 ',
      me.get_colored_name(),
      '은(는) 마침 ',
      another_lover.get_colored_name(),
      '와(과) 만나 한동안 즐겁게 대화를 나누었다.',
    ]);
    era.print([
      '하지만 ',
      me.get_colored_name(),
      '은(는) 눈치채지 못했다. 멀지 않은 곳에서 어떤 시선이 계속해서 ',
      me.get_couple_title(),
      '을 지켜보고 있었다는 것을. ',
      me.get_colored_name(),
      '과(와) ',
      another_lover.sex,
      '의 대화가 길어지고 사적인 주제로 깊어질수록, 웃음소리가 커질수록, 그 시선의 주인의 눈동자는 파르르 떨리며 점차 어둡게 가라앉았다……',
    ]);
    era.println();

    era.print(['시선의 주인은 주변 사물을 손가락 마디가 하얘질 정도로 꽉 움켜쥐고 있었다.']);
    era.println();

    era.print([me.get_colored_name(), '은(는) 고개를 돌리다 번쩍 눈을 떴다.']);
    era.print(['현실인가? 아니면 꿈인가?']);
    era.print([
      me.get_colored_name(),
      '은(는) 자신이 조금 아이 같은 장식이 된 더블 침대에 누워 있다는 사실을 깨달았다……',
    ]);
    era.print(['눈앞에 보이는 것은 낯선 천장이다……']);
    new TeioLifeMarks().b_start = 0;
  }

  async flatter() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      teio = get_chara_talk(this.id);
    if (era.get('status:3:다리부상')) {
      await teio.say_and_wait([
        '미안해, ',
        callname,
        '. 하지만 무슨 일이 있어도 당신이 날 떠나게 두진 않을 거야……',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 평소처럼 담당을 달래보려 했지만, 아무런 소용이 없었다.',
      ]);
      era.println();

      await teio.say_and_wait([callname, ', 지금은 이 제왕님이 결정할 문제라구.']);
    }
  }

  async strike_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      teio = get_chara_talk(this.id);
    await strike_common(teio, me);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 우스꽝스러운 자세로 침대에 고꾸라졌다.',
    ]);
    era.println();

    await teio.say_and_wait([callname, '……지금 뭐 하는 거야?']);
    era.println();

    await era.printAndWait([
      '결과적으로 담당을 웃길 뻔했을 뿐만 아니라, ',
      teio.sex,
      '의 경계심만 더 키운 꼴이 되었다.',
    ]);
  }

  async strike_success() {
    const callname = sys_get_colored_callname(this.id, 0),
      me = get_chara_talk(0),
      teio = get_chara_talk(this.id);
    await strike_common(teio, me);
    if (era.get('status:3:다리부상')) {
      await teio.say_and_wait(['앗——']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '는 기민하게 반응했으나 몸이 한순간 늦게 따라왔고, 그 틈에 ',
        me.get_colored_name(),
        '이(가) 실수로 ',
        teio.sex,
        '의 종아리를 붙잡는 바람에 두 사람은 폭신한 침대 위로 함께 쓰러졌다……',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……제발 날 떠나지 마……']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        teio.sex,
        '를 바라보며 무언가 말하려다 이내 입을 다물었다.',
      ]);
      await era.printAndWait([
        '트레이너와 ',
        me.sex,
        '의 담당 ',
        teio.get_uma_sex_title(),
        '는 한참 동안 서로를 바라보다가, 약속이라도 한 듯 고개를 돌렸다.',
      ]);
      era.println();

      await teio.say_and_wait(['……그냥 보내줄게.']);
      era.println();

      await era.printAndWait([
        teio.sex,
        '는 ',
        me.get_colored_name(),
        '의 손을 잡고 문밖으로 향했다. 아주 작지만 또렷한 목소리가 ',
        me.get_colored_name(),
        '의 귓가에 들려왔다.',
      ]);
      era.println();

      await teio.say_and_wait(['미안해.']);
    } else {
      await teio.say_and_wait(['꺄악!']);
      era.println();

      await era.printAndWait([
        '오랜만에 듣는 ',
        teio.get_teen_sex_title(),
        '의 본래 목소리가 비명처럼 터져 나왔다. ',
        teio.sex,
        '는 ',
        me.get_colored_name(),
        '에게 제압당했고, 주도권은 다시 역전되었다.',
      ]);
      era.println();

      await teio.say_and_wait(['……', callname, '.']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 숙련된 마사지와 애무가 섞인 손길로 ',
        teio.sex,
        '에게 응답했고, ',
        teio.sex,
        '는 점차 힘이 빠지며 목소리가 거친 숨소리로 변해갔다……',
      ]);
      era.println();

      await teio.say_and_wait(['열쇠…… 없어…… 나 정말……']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        teio.sex,
        '의 말을 이해하고 그녀를 데리고 문 앞으로 가서 그대로 문을 밀었다.',
      ]);
      era.println();

      await era.printAndWait(['아주 쉽게, 문이 열렸다……']);
    }
  }

  welcome() {
    this.first_time();
  }
};
