/**
 * @file 슈발 그랑 - 지하실
 * @author 無奈
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const ask_release_agree = require('#/event/basement/base-events-89/ask-release-agree');
const back_basement = require('#/event/basement/base-events-89/back-basement');
const find_escape = require('#/event/basement/base-events-89/find-escape');
const flatter = require('#/event/basement/base-events-89/flatter');
const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const GrandLifeMarks = require('#/data/event/life-event-marks/life-event-marks-89');

module.exports = class extends CustomizedBase {
  ask_release_agree = ask_release_agree;

  async ask_release_reject() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0),
      life_marks = new GrandLifeMarks();
    if (era.get('exp:89:감금횟수') === 1 && life_marks.b_ask_release < 4) {
      if (++life_marks.b_ask_release <= 3) {
        await grand.say_and_wait(['안 돼요——']);
        era.println();

        await era.printAndWait([
          '거절한 후, 무슨 말을 하려다 멈춘 ',
          grand.get_teen_sex_title(),
          '는 고개를 숙였다.',
        ]);
        era.println();

        await grand.say_and_wait(['시간을 조금만 더 주세요…… 부탁이에요…… ', callname, '……']);
        await grand.say_and_wait(['제게…… 당신이 절 다시 좋아하게 될 기회를 주세요……']);
        era.println();

        await era.printAndWait([
          grand.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '을(를) 껴안았다.',
        ]);
        await era.printAndWait(['어리광이라기보다는, 구속의 의미를 더 많이 전달하고 있는 힘이었다.']);
        await era.printAndWait([
          '어떻게 반응해야 할지 모르는 ',
          me.get_colored_name(),
          '은(는), 조용히 ',
          grand.get_uma_sex_title(),
          '가 만족할 때까지 기다렸다.',
        ]);
      } else {
        await grand.say_and_wait(['안 돼요——']);
        era.println();

        await era.printAndWait([
          '거절한 후, ',
          grand.get_teen_sex_title(),
          '의 눈시울이 점차 붉어졌다.',
        ]);
        era.println();

        await grand.say_and_wait([
          '이렇게 ',
          callname,
          '을 이곳에 감금하다니… 절 많이 원망하시겠죠……',
        ]);
        await grand.say_and_wait([
          '하지만, 당신을 보내드리면, 전 두 번 다시 ',
          callname,
          '을 볼 수 없을지도 모른단 말이에요……!',
        ]);
        era.println();

        await era.printAndWait([
          grand.get_colored_name(),
          '은 ',
          me.get_colored_name(),
          '을(를) 껴안고 ',
          me.get_colored_name(),
          '의 가슴에 얼굴을 파묻었다.',
        ]);

        era.println();

        await grand.say_and_wait([
          '그건 안 돼요… 멀리서 바라보는 것조차 허락되지 않는다면, 제가 어떻게 변해버릴지 모르겠어요……',
        ]);
        await grand.say_and_wait(['……제발요, ', callname, '…… 절 버리지 마세요……']);
        era.println();

        await era.printAndWait([
          '울며 매달리는 ',
          grand.get_colored_name(),
          '의 모습에도, ',
          me.get_colored_name(),
          '은(는) 처음부터 타협의 여지가 없었다는 것을 알고 있었다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) ',
          grand.sex,
          '를 마주 안아주며 진정할 때까지 기다렸다.',
        ]);
      }
    } else {
      await grand.say_and_wait(['안 돼요.']);
      era.println();

      await era.printAndWait(['떠나겠다는 요청은 단호한 거절로 되돌아왔다.']);
      await era.printAndWait([
        '반박을 허용하지 않는 ',
        grand.get_teen_sex_title(),
        '의 표정을 보고, ',
        me.get_colored_name(),
        '은(는) 자신이 할 수 있는 일이 매우 제한적이라는 것을 깨달았다.',
      ]);
      era.println();

      await grand.say_and_wait(['알아요, ', callname, '은 이다음에 분명 경계를 늦추지 않으시겠죠……']);
      await grand.say_and_wait(['여길 떠나게 되시면…… 당신을 다시 찾기는 힘들어질 거예요.']);
      era.println();

      await era.printAndWait([
        grand.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '을(를) 껴안았다.',
      ]);
      await era.printAndWait(['어리광이라기보다는, 구속의 의미를 더 강하게 전달하고 있는 힘이었다.']);
      era.println();

      await grand.say_and_wait(['이번에는, 제 시야에서 벗어나게 두지 않을 거예요.']);
      await grand.say_and_wait(['……당신을 독점하기 위해서라면, 제가 무슨 짓을 저지를지 몰라요.']);
    }
  }

  async ask_time(date, hours, minutes) {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89);
    await grand.say_and_wait('……! 제…… 제가 지금 볼게요…… 그, 그게……');
    await grand.say_and_wait([
      '지금은 ',
      CustomizedBase.get_cur_time(hours, minutes),
      ' 이에요…… ',
      callname,
      '의 계획을 망쳐버렸죠…… 죄송해요……',
    ]);
  }

  back_basement = back_basement;

  async battle_escape() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      grand.get_child_sex_title(),
      '의 몸을 안아 침대에 눕히고, ',
      me.get_colored_name(),
      '은(는) ',
      grand.get_colored_name(),
      '의 천사 같은 잠든 얼굴을 바라보며 한숨을 내쉬었다.',
    ]);
    await era.printAndWait([
      '한때, ',
      grand.sex,
      '는 항상 천사 같은 미소를 띠고 있었지만, 이 모든 것을 바꾼 것은 바로 ',
      me.get_colored_name(),
      ' 자신이었다.',
    ]);
    await era.printAndWait([
      '무거운 철문은 이미 열려 있었고, ',
      grand.get_teen_sex_title(),
      '의 모든 노력은 곧 물거품이 될 터였다.',
    ]);
    era.println();

    await me.say_and_wait(['미안해, ', sys_get_colored_callname(0, 89), '.']);
    era.println();

    await era.printAndWait([
      grand.get_colored_name(),
      '에게 사과한 후, ',
      me.get_colored_name(),
      '은(는) 몸을 돌려 떠나려 했지만 소매를 붙잡혔다.',
    ]);
    await era.printAndWait([
      '붙잡힌 소매 너머로, ',
      grand.get_child_sex_title(),
      '의 작은 손이 불안하게 떨리고 있는 것이 느껴졌다.',
    ]);
    era.println();

    await grand.say_and_wait(['가지 마세요…… ', callname, '……']);
    era.println();

    await era.printAndWait([
      '깊게 잠들었을 어린 ',
      grand.get_uma_sex_title(),
      '가 꿈속에서 ',
      me.get_colored_name(),
      '의 이름을 불렀다.',
    ]);
    await era.printAndWait([grand.sex, '는 어떤 꿈을 꾸고 있는 걸까?']);
    await era.printAndWait([
      '꿈속의 ',
      me.get_colored_name(),
      ' 역시, ',
      grand.sex,
      '를 버리고 떠나는 선택을 하는 걸까?',
    ]);
    era.println();

    await me.say_and_wait(['……']);
    era.println();

    await era.printAndWait(['더 이상 이곳에 머무를 시간이 없다.']);
    await era.printAndWait([
      '만약 또다시 ',
      grand.get_colored_name(),
      '에게 울면서 붙잡힌다면, ',
      me.get_colored_name(),
      '은(는) 자신이 어떤 결정을 내리게 될지 알 수 없었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 곤히 잠든 ',
      grand.get_colored_name(),
      '에게 살며시 이불을 덮어주고, 뒤돌아 지하실을 나섰다.',
    ]);
  }

  async battle_fail() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0),
      life_marks = new GrandLifeMarks();
    if (++life_marks.b_battle >= 10 && !life_marks.b_battle_fail) {
      life_marks.b_battle_fail = 1;
    }
    if (life_marks.b_battle <= 3) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 철사로 자신의 소매를 뜯어, 셔츠 안감에서 가득 찬 가루약 한 봉지를 꺼냈다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 왠지 커다란 구멍이 난 소매에 손을 넣어, 셔츠 안감에서 작은 가루약 한 봉지를 꺼냈다.',
      ]);
    }
    await era.printAndWait([
      '트레이너 회의에서 배포했던 「대 ',
      grand.get_uma_sex_title(),
      '용 수면제」 샘플을 정말 쓸 날이 오게 될 줄이야.',
    ]);
    await era.printAndWait([
      '강사는 이 약이 ',
      grand.get_uma_sex_title(),
      '가 폭력성을 드러냈을 때의 기억을 잃게 만들어, 다시 정상적인 파트너 관계로 돌아갈 수 있게 해준다고 했다.',
    ]);
    await era.printAndWait([
      '「참으로 위대한 발명이야」라고 혀를 차며 감탄함과 동시에, 식기를 찾고 있는 ',
      grand.get_colored_name(),
      '의 뒷모습을 확인했다.',
    ]);
    era.println();

    if (Math.random() < 0.1) {
      await me.say_and_wait(['에…… 에취!!']);
      era.println();

      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '이(가) 약가루를 꺼내는 순간, ',
        grand.get_colored_name(),
        '의 머리카락 한 올이 코끝을 스쳤다.',
      ]);
      await era.printAndWait([
        '방금 무심코 조금 들이마셔 버렸다…… 하지만 다행히 이건 「대…… ',
        grand.get_uma_sex_title(),
        '용…… 수……면……」',
      ]);
    } else if (era.get('relation:89:0') >= 100) {
      await grand.say_and_wait(['저기…… 제, 제가 먹여드릴게요, ', callname, '.']);
      await grand.say_and_wait(['아—— 아~']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        '의 입가에 음식을 가져다 대는 ',
        grand.get_colored_name(),
        '. 예상치 못한 사태였지만 큰 문제는 아니었다.',
      ]);
      await era.printAndWait([
        '이게 「대 ',
        grand.get_uma_sex_title(),
        '용」 특효약이라는 생각에, ',
        me.get_colored_name(),
        '은(는) 거절하지 않았다.',
      ]);
    } else {
      await grand.say_and_wait(['자, 잘 먹겠습니다……']);
      await me.say_and_wait(['잘 먹을게.']);
      era.println();

      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        grand.get_colored_name(),
        '의 행동 능력을 잃게 한 후의 계획을 구상하며, 한 숟가락의 요리를 입으로 가져갔다.',
      ]);
    }
    era.println();

    await me.say_and_wait(['……?']);
    await grand.say_and_wait(['에……? ', callname, '……?']);
    era.println();

    await era.printAndWait(['빨려 들어갈 듯한 졸음이 덮쳐오며, 의식이 심해로 곤두박질쳤다.']);
    await era.printAndWait([
      '장난하나…… 설마 「대 ',
      grand.get_uma_sex_title(),
      '용」이라는 게 「',
      grand.get_uma_sex_title(),
      '에게도 통할 만큼 약효가 강하다」는 뜻이었나……?',
    ]);
    await era.printAndWait([
      '마음속으로 이 약을 발명한 사람에게 안부를 전하며, ',
      me.get_colored_name(),
      '은(는) 힘없이 ',
      grand.get_colored_name(),
      '의 품에 쓰러졌고, 저항하지 못한 채 깊은 잠에 빠져들었다.',
    ]);
  }

  async battle_prison() {
    const callname = sys_get_colored_callname(89, 0),
      grand = get_chara_talk(89),
      me = get_chara_talk(0);
    await era.printAndWait([
      '침대에서 편안하게 자고 있는 ',
      grand.get_colored_name(),
      '을 보며, ',
      me.get_colored_name(),
      '은(는) 대 ',
      grand.get_uma_sex_title(),
      '용 수면제를 준비해 둔 것을 내심 다행으로 여겼다.',
    ]);
    await era.printAndWait([
      '수면제라고는 해도 지속 시간이 매우 짧아, 약효는 5분 정도면 사라진다.',
    ]);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 서둘러 열쇠 구멍에 다가갔지만, 손에 쥔 철사가 한계까지 휘어지도록 철문은 꿈쩍도 하지 않았다.',
    ]);
    era.println();

    await me.say_and_wait(['쳇, 이걸 어떻——']);
    era.println();

    await era.printAndWait(['갑작스럽게, 뒷목에 거대한 충격이 가해졌다.']);
    await era.printAndWait([
      '그대로 바닥을 향해 고꾸라졌지만, 마치 푹신한 깃털 이불 위에 엎드린 것처럼, 의식이 몽롱해지며 멀어져 갔다.',
    ]);
    era.println();

    await grand.say_and_wait(['……', callname, ', 죄송해요……']);
    await grand.say_and_wait([
      '저도 이러고 싶지 않았어요…… 저도 착한 아이가 되어서 당신이 절 좋아하게 만들고 싶었어요.',
    ]);
    await grand.say_and_wait([
      '당신의 괴로워하는 표정을 보면…… 저도 슬퍼져요. 지금처럼요.',
    ]);
    era.println();

    await era.printAndWait([
      '흐릿해져 가는 의식 속에서, ',
      me.get_colored_name(),
      '은(는) 죄책감으로 가득 찬 그녀의 눈동자와 마주쳤다.',
    ]);
    era.println();

    await grand.say_and_wait([
      '분명 ',
      callname,
      '에게는 여러 가지로…… 책임지고 싶은 일들이 많아서 그렇겠죠……',
    ]);
    await grand.say_and_wait(['제가…… 당신의 그 괴로운 일들을 잊게 해 드릴게요————']);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '의 의식은 끊임없이 가라앉고 있었고, ',
      grand.get_colored_name(),
      '의 목소리는 점점 멀어졌다가…… 이내 가까워져 왔다.',
    ]);
  }

  find_escape = find_escape;

  first_time() {
    const me = get_chara_talk(0);
    era.print([
      '문을 두드리는 소리와 구조를 요청하는 외침이 좁은 공간에 울려 퍼졌으나, 돌아오는 것은 차가운 감촉과 침묵뿐이었다.',
    ]);
    era.print([
      '이 암실에 머무는 시간이 길어질수록 시간 개념은 더욱 모호해졌고, 머릿속엔 수많은 의문들만이 맴돌았다.',
    ]);
    era.println();

    me.say(['콜록…… 콜록콜록……']);
    era.println();

    era.print([
      '목을 무리하게 써서 나오는 기침을 억누르며, ',
      me.get_colored_name(),
      '은(는) 최대한 침착함을 유지하려 애썼다.',
    ]);
    era.print(['만약 누군가에게 납치당한 것이라면, 정면 충돌은 피할 수 없을 것이다.']);
    era.print(['어쩌면 지금은 생각을 정리하고, 잠시 휴식을 취해야 할지도 모른다.']);
  }

  flatter = flatter;

  get_basement_info(can_strike) {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      ret = [];
    if (can_strike) {
      ret.push(
        grand.get_colored_name(),
        '이 요리를 가지고 방금 이곳으로 돌아왔다, 식탁은 바로 기습을 위해 준비한 함정이다……',
      );
    } else if (sys_check_awake(this.id)) {
      const relation = era.get(`relation:${this.id}:0`),
        love = era.get(`love:${this.id}`),
        relation_check = relation >= (era.get('flag:극단적행위제한') || 1) * love,
        { b_s_level } = new GrandLifeMarks();
      if (love >= 85) {
        if (relation_check) {
          ret.push(
            grand.get_colored_name(),
            '은 죄책감이 넘치는 눈으로 ',
            me.get_colored_name(),
            '을(를) 몰래 바라보았다,',
          );
        } else if (relation >= 0) {
          ret.push(
            grand.get_colored_name(),
            '은 두 손을 꽉 쥐고 있는 탓에 관절이 하얗게 변했다,',
          );
        } else {
          ret.push(
            grand.get_colored_name(),
            '의 공허한 눈동자가 ',
            me.get_colored_name(),
            '의 모든 동작을 쫓았다,',
          );
        }
      } else if (relation_check) {
        ret.push(grand.get_colored_name(), '은 무의식적으로 치맛자락을 꽉 쥐고 있었다,');
      } else {
        ret.push(grand.get_colored_name(), '은 혼잣말로 사과를 중얼거리고 있었다,');
      }
      if (b_s_level >= 4) {
        ret.push('죄책감과 의심 사이에서, 후자가 더 우세한 듯하다.');
      } else if (b_s_level === 3) {
        ret.push('추억이 ', grand.sex, '가 과격한 행동을 하지 않는 이유가 된 듯하다.');
      } else {
        ret.push(me.get_colored_name(), '의 행복과 독점욕 사이에서 발버둥 치고 있다.');
      }
    } else {
      ret.push(
        grand.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '의 이름을 중얼거리며 작은 침대의 한구석에서 잠들어 있었고, 짧은 머리카락 사이로 땀방울이 맺혀 있었다.',
      );
    }
    return ret;
  }

  get_up() {
    const grand = get_chara_talk(this.id),
      me = get_chara_talk(0);
    era.print([
      grand.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '의 이름을 부르며 꿈에서 깨어났고, 당황하여 허둥지둥 ',
      me.get_colored_name(),
      '의 모습을 찾았다.',
    ]);
  }

  handle_escape() {
    const life_marks = new GrandLifeMarks();
    life_marks.b_find_escape =
      life_marks.b_flatter =
      life_marks.b_ask_release =
      life_marks.b_battle =
      life_marks.b_strike =
      life_marks.b_battle_fail =
        0;
  }

  out() {
    const callname = sys_get_colored_callname(this.id, 0),
      grand = get_chara_talk(this.id);
    grand.say(['으음……? 아무래도…… 수업 시간이 다가오는 것 같네요……']);
    era.println();

    era.print([
      '비몽사몽 간에 고개를 들자, 스마트폰 화면의 불빛이 ',
      grand.get_teen_sex_title(),
      '의 지치고 창백한 얼굴을 비췄다.',
    ]);
    era.print([
      grand.sex,
      '는 정신적으로도 육체적으로도 상당한 스트레스를 받고 있음이 분명했다.',
    ]);
    era.println();

    grand.say(['아…… 고마워요…… 절 걱정해 주시는군요…… ', callname, '.']);
    grand.say(['하지만…… ', callname, '의 마음을 돌릴 수만 있다면, 이 정도는…… 괜찮아요……']);
  }

  async strike_fail() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    new GrandLifeMarks().b_strike = 1;
    await grand.say_and_wait(['영차…… 영차……']);
    era.println();

    await era.printAndWait([
      '무방비하게 방을 정리하고 있는 ',
      grand.get_colored_name(),
      '의 뒷모습을 주시하며, ',
      me.get_colored_name(),
      '은(는) 극도로 긴장한 채 설치해 둔 함정을 힐끗 보았다.',
    ]);
    await era.printAndWait([
      '만약 누군가 식탁 옆의 의자에 앉는다면, 의자가 부서짐과 동시에 그 뒤의 옷장이 넘어질 것이다.',
    ]);
    await era.printAndWait([
      '그렇게 되면, 아무리 ',
      grand.get_uma_sex_title(),
      '라도 잠시 행동 능력을 잃게 될 것이다.',
    ]);
    era.println();

    await grand.say_and_wait([
      callname,
      '의 잠자리를 준비하다 보니, 왠지…… 그…… 가, 가족이 된 것 같아요…… 에헤헤.',
    ]);
    era.println();

    await era.printAndWait(['조금만 더 앞으로——']);
    era.println();

    await grand.say_and_wait([
      '전 혼자서 상상하곤 했어요…… 저와 ',
      callname,
      '이 가족이 된 모습을요.',
    ]);
    era.println();

    await era.printAndWait(['그 의자에 앉기만 하면——']);
    era.println();

    await grand.say_and_wait([
      '하지만 ',
      callname,
      '을 감금한 순간부터, 그 상상은 이미 현실이 될 수 없게 되었겠죠……',
    ]);
    await grand.say_and_wait(['저기, ', callname, '…… 제가 요리를 준비했는데——']);
    era.println();
    await me.say_and_wait(['——잠깐!!']);
    era.println();
    await grand.say_and_wait([
      '——앗! ',
      callname.content[0],
      '、',
      callname,
      '!',
    ]);
    era.println();

    await era.printAndWait([
      '관절이 부딪히는 소리와 ',
      grand.get_teen_sex_title(),
      '의 비명이 예리하게 울려 퍼졌다.',
    ]);
    await era.printAndWait([
      grand.get_colored_name(),
      '을 밀쳐내고, ',
      grand.sex,
      ' 대신 옷장에 깔리게 된 ',
      me.get_colored_name(),
      '은(는) 왠지 모르게 안도의 한숨을 내쉬었다.',
    ]);
  }

  async strike_success() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    await grand.say_and_wait([callname, ', 저 다녀왔……']);
    await grand.say_and_wait(['에—— 읍, 읍!']);
    era.println();

    await era.printAndWait([
      '문을 열었지만 ',
      me.get_colored_name(),
      '이(가) 보이지 않자, ',
      grand.get_colored_name(),
      '은 잠시 그 자리에 멈춰 섰다.',
    ]);
    await era.printAndWait([
      '그 틈에 문 뒤에 숨어 있던 ',
      me.get_colored_name(),
      '은(는) 타이밍을 노려 수면제 가루를 적신 천으로 ',
      grand.get_colored_name(),
      '의 코와 입을 틀어막았다.',
    ]);
    await era.printAndWait([
      '품속의 ',
      grand.get_child_sex_title(),
      '는 몇 번 발버둥 치지도 못한 채, 금세 조용해졌다.',
    ]);
    era.println();

    await me.say_and_wait(['하아……']);
    era.println();

    await era.printAndWait([
      '계획에 성공한 ',
      me.get_colored_name(),
      '은(는) 반쯤 찢겨나간 자신의 소매를 흘끗 보고는, 호흡을 가다듬으며 한숨을 내쉬었다.',
    ]);
    await era.printAndWait([
      '위험 부담이 크긴 했지만, 이것이 ',
      grand.get_child_sex_title(),
      '의 몸에 상처를 입히지 않는 유일한 방법인 것은 틀림없었다.',
    ]);
    era.println();

    await me.say_and_wait(['푹 쉬어.']);
    era.println();

    await era.printAndWait([
      '품속의 ',
      grand.get_child_sex_title(),
      '의 얼굴에 옅은 화장으로 가려진 다크서클을 보니, 이제 ',
      grand.sex,
      '를 죄책감에서 해방시켜줄 때가 되었다는 생각이 들었다.',
    ]);
    await era.printAndWait([
      '힘이 빠진 ',
      grand.get_colored_name(),
      '을 침대에 눕히고, ',
      me.get_colored_name(),
      '은(는) 직접 사과할 수 있기를 바라는 마음으로 쪽지를 하나 적어 두었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      grand.get_colored_name(),
      '의 주머니에서 꺼낸 열쇠로 문을 열고, 사랑으로 만들어진 이 감옥에서 탈출했다.',
    ]);
  }

  welcome() {
    const grand = get_chara_talk(89),
      me = get_chara_talk(0),
      callname = sys_get_colored_callname(89, 0);
    if (era.get('exp:89:감금횟수') === 1) {
      era.print([
        '차가운 환경이 깊이 잠들어 있던 의식을 깨웠고, ',
        me.get_colored_name(),
        '의 눈에는 낯선 천장이 흐릿하게 비쳤다.',
      ]);
      era.print(['조금이라도 익숙한 것을 찾으려 헤매던 시선은, 작고 하얀 실루엣을 포착했다.']);
      era.println();
      grand.say(['아……! 다행이다, ', callname, '! 깨어나셨군요!']);
      grand.say(['……몸은…… 어디 불편한 곳 없으신가요?']);
      grand.say(['얼, 얼마나 힘을 줘야 할지 몰라서…… 기절하셨을 때, 분명 많이 아프셨겠죠……']);
      grand.say(['……여긴?']);
      era.println();

      era.print(['잠시 흐르는 침묵.']);
      era.print([
        '어찌할 바를 몰라 당황하는 사이, ',
        me.get_colored_name(),
        '의 시선이 ',
        grand.get_colored_name(),
        '의 시선과 마주쳤다.',
      ]);
      era.print(['끈적하고 빛을 잃은 푸른 눈동자에는 깊은 사죄의 마음이 배어 있었다.']);
      era.println();

      grand.say(['죄송해요…… 그건 ', callname, '에게 알려드릴 수 없어요.']);
      grand.say([
        '……하, 하지만! 전 그저 ',
        callname,
        '와 이야기를 나누고 싶었을 뿐, 결코 해치려는 게 아니에요……!',
      ]);
      grand.say(['그러니까…… ', callname, ', 여길 떠나지 말고 계속 제 곁에 있어 주세요.']);
    } else {
      era.print([
        me.get_colored_name(),
        '은(는) 번쩍 눈을 떴고, 낯익은 천장은 우려했던 일이 현실이 되었음을 의미했다.',
      ]);
      era.println();

      grand.say(['아, ', callname, ', 깨어나셨군요.']);
      grand.say(['어째서…… 잘못을 저지른 듯한 표정을 짓고 계신가요?']);
      era.println();

      era.print(['무겁고, 탁하며, 잿빛인 침묵.']);
      era.print([
        '그 푸른 눈동자에 얽매인 ',
        me.get_colored_name(),
        '은(는) 그 속에서 찔리는 구석이 있어 동요하는 자신의 모습을 보았다.',
      ]);
      era.println();

      grand.say([
        callname,
        '을 탓하려는 건 아니에요, 이렇게 된 건…… 전부 제 잘못이니까요.',
      ]);
      grand.say(['지금까지, 제가 너무 ', callname, '에게 의지하기만 했어요…… 항상 어리광만 부리고……']);
      grand.say([
        '가장 좋아하는 ',
        callname,
        '이 슬퍼하는 모습을 차마 볼 수 없어서…… 계속 도망치기만 했어요.',
      ]);
      era.println();

      era.print([
        grand.get_colored_name(),
        '은 부드럽게 ',
        me.get_colored_name(),
        '의 뺨을 쓰다듬으며, 다시 입을 열었다.',
      ]);
      era.println();

      grand.say(['하지만 이번엔…… 마음이 아무리 괴로워도, 노력할게요, 힘낼게요.']);
      grand.say(['더는 남에게 의지하지 않고, 울지 않고, 도망치지 않을 거예요.']);
      grand.say(['당신의 몸, 냄새, 당신의 체온, 저도 똑같이 좋아한답니다.']);
      grand.say([callname, ', 사랑해요.']);
    }
  }
};