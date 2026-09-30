/**
 * @file 나이스 네이처 - 애정
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');
const { add_event } = require('#/event/queue');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const event_hooks = require('#/data/event/event-hooks');

module.exports = class extends CustomizedLove {
  async 49(nice_nature, me, callname) {
    await nice_nature.print_and_wait([
      '어느 날 밤, ',
      nice_nature.get_colored_name(),
      '는 서서히 ',
      me.get_colored_actual_name(),
      '에게 단순한 관계 이상의 미묘한 감정을 품고 있음을 깨닫기 시작했다.',
    ]);
    await nice_nature.print_and_wait([
      me.sex,
      '와 함께 보냈던 시간들을 떠올리자, 무심결에 가슴 한구석에서 따스한 온기가 피어올랐다.',
    ]);
    await nice_nature.say_and_wait([callname, '……']);
    await nice_nature.print_and_wait(
      '그저 혼잣말로 이름을 불렀을 뿐인데도, 그 사람의 얼굴이 눈앞에 선명하게 떠올랐다.',
    );
    await nice_nature.print_and_wait(
      '하지만 이것이 정말 철없는 시절의 풋사랑일까, 아니면 일상을 함께하며 생긴 감정의 착각일까?',
    );
    era.println();

    era.printButton(`「나, 아무래도 ${callname}을(를) 좋아하는 것 같아……」（관계 진전）`, 1);
    era.printButton(
      `「아냐 아냐, ${sys_get_callname(
        60,
        60,
      )}가 그런 감정을 가질 리가 없잖아?」（관계 진전 중지）`,
      2,
    );
    const ret = await era.input();
    if (ret === 1) {
      await nice_nature.print_and_wait([
        '등불 아래서, ',
        nice_nature.get_teen_sex_title(),
        '는 소중히 여기는 종이 트로피를 만지작거리며 자기도 모르게 중얼거렸다.',
      ]);
      await nice_nature.say_and_wait([
        '잠깐! 나 지금 무슨 소리를 하는 거야! 마치 사랑에 빠진 ',
        nice_nature.get_teen_sex_title(),
        '같잖아! 난 그런 캐릭터가 아니라고!',
      ]);
      await nice_nature.print_and_wait([
        nice_nature.sex,
        '는 자신의 말을 필사적으로 부정하려 했지만, 그 마음속에 심어진 연심의 씨앗은 이미 소리 없이 싹을 틔우고 있었다……',
      ]);
      era.drawLine({ content: '얼마 후……' });
      await nice_nature.print_and_wait([
        nice_nature.get_colored_name(),
        '는 자기 방 침대에 홀로 앉아 있었다. 원래도 얇은 옷차림이었던 ',
        nice_nature.sex,
        '는 회색 반바지에 손을 올리고, 속옷과 함께 옷을 벗어 던졌다.',
      ]);
      await nice_nature.print_and_wait([
        nice_nature.sex,
        '의 손에는 연모하는 이의 체취가 묻어있는 티셔츠가 들려 있었다.',
      ]);
      await nice_nature.print_and_wait([
        nice_nature.sex,
        '는 티셔츠를 코끝에 갖다 대며, 이미 살짝 젖어버린 은밀한 곳으로 손을 뻗었다. 때로는 입구를 문지르고, 때로는 손가락으로 돌기를 매만지며 행위의 강도를 높여갔다.',
      ]);
      nice_nature.say(['트레이너 쌤, 좀 더…… 많이……']);
      await nice_nature.print_and_wait([
        nice_nature.get_colored_name(),
        '의 손은 붉게 달아올라 애액이 흐르는 비부를 격렬하게 자극하며, 한 단계 더 깊은 쾌락의 늪으로 발을 들였다.',
      ]);
      await nice_nature.print_and_wait([
        '충분히 풀어졌다고 느꼈는지, ',
        nice_nature.sex,
        '는 더 큰 쾌락을 느낄 수 있는 곳으로 손가락을 밀어 넣었다. 빨려 들어간 손가락이 안쪽 벽을 긁어내며 끈적한 소리를 냈다.',
      ]);
      await nice_nature.say_and_wait('으응～～～～!!');
      await nice_nature.print_and_wait([
        '명백히 절정에 도달한 ',
        nice_nature.get_colored_name(),
        '는 짐승 같은 신음과 함께 거친 숨을 내뱉었다. 호흡을 가다듬기 위해 ',
        nice_nature.sex,
        '는 잠시 손을 멈추고 손가락을 까딱였다.',
      ]);
      nice_nature.say([
        callname,
        ', ',
        callname,
        '…… 내가 이런 파렴치한 짓을 하는 건, 전부 ',
        callname,
        '을(를) 생각하고 있기 때문이야……',
      ]);
      await nice_nature.print_and_wait([
        nice_nature.sex,
        '의 체내를 휘젓는 손가락의 움직임이 빨라졌다. 질퍽거리는 외설적인 소리가 울려 퍼지고, ',
        nice_nature.sex,
        '의 이성도 점차 흐릿해지기 시작했다.',
      ]);
      nice_nature.say([
        '나…… 나 ',
        callname,
        '을 좋아해, 정말 좋아해! 그러니까, 좀 더 격렬하게 해줘!',
      ]);
      nice_nature.say(['가버려, 가버려, ', callname, ', 나 가버려어～～～～!!']);
      await nice_nature.print_and_wait([
        nice_nature.get_colored_name(),
        '는 상체를 젖히고 허리를 가늘게 떨며 조수를 뿜어냈다. 뿜어져 나온 액체는 시트가 젖지 않게 깔아둔 수건을 넘어 침대를 흠뻑 적셨다. 오랜 시간 이어진 절정 끝에 ',
        nice_nature.sex,
        '는 온몸을 떨며 만족감의 여운 속에서 깊은 잠에 빠져들었다.',
      ]);
      era.println();
      begin_and_init_ero(60);
      if (era.get('cflag:60:질크기')) {
        era.set('palam:60:질구쾌감', era.get('tcvar:60:질구쾌감상한'));
        await quick_make_love(
          new EroParticipant(60, part_enum.hand),
          new EroParticipant(60, part_enum.virgin),
          false,
        );
      } else {
        era.set('palam:60:음경쾌감', era.get('tcvar:60:음경쾌감상한'));
        await quick_make_love(
          new EroParticipant(60, part_enum.hand),
          new EroParticipant(60, part_enum.penis),
          false,
        );
      }
      end_ero_and_train();
      await sys_love_uma_in_event(60);
    } else {
      await nice_nature.print_and_wait([
        '밤이라서 감상적이 된 것뿐이라 생각하며, ',
        nice_nature.get_colored_name(),
        '는 이불을 머리 끝까지 덮고 잠을 청해 잡념을 떨쳐내기로 했다.',
      ]);
      era.set('cflag:60:호감거절', 49);
    }
  }

  async 74(nice_nature, me, callname, stage, extra_flag, event_object) {
    if (stage === event_hooks.week_end) {
      await nice_nature.print_and_wait([
        '어느 날 밤, ',
        nice_nature.get_colored_name(),
        '은(는) 서서히 ',
        me.get_colored_actual_name(),
        '에 대한 사랑을 자각하기 시작했다.',
      ]);
      await nice_nature.print_and_wait(
        '창가에 기대어 거리 너머 여전히 불이 밝혀진 트레이닝실을 바라보자, 따스한 기운이 마음을 감싸 안았다.',
      );
      await nice_nature.print_and_wait([
        me.get_colored_actual_name(),
        '이(가) 자신에게 쏟아부은 헌신적인 보살핌을 떠올리며, ',
        nice_nature.get_colored_name(),
        '는 가슴속에 맺힌 이 감정의 이름을 이해한 듯했다.',
      ]);
      era.println();

      era.printButton(`「나…… ${callname}이 좋아!」（관계 진전）`, 1);
      era.printButton(
        `「아냐아냐아냐, 우리는 그냥 ${nice_nature.uma_sex_title}와 담당 트레이너 사이일 뿐이라고! 밤이 되니까 역시 사람이 감상적이 되네! 어서 잠이나 자자!」（관계 진전 중지）`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await nice_nature.print_and_wait([
          '목소리는 작았지만, 그 속에는 ',
          nice_nature.get_teen_sex_title(),
          '의 확고한 의지가 담겨 있었다.',
        ]);
        await nice_nature.print_and_wait([
          nice_nature.get_colored_name(),
          '는 자신의 진심을 받아들였고, 스스로가 무엇을 갈망하는지 깨달았다. 이제 남은 것은 단 하나의 관문뿐이었다……',
        ]);
        add_event(event_hooks.back_school, event_object);
      } else {
        era.set('cflag:60:호감거절', 74);
      }
    } else if (stage === event_hooks.back_school) {
      const cur_chara = era.get('flag:현재상호작용캐릭터');
      if (cur_chara > 0 && cur_chara !== this.id) {
        add_event(stage, event_object);
        return;
      }
      await nice_nature.say_and_wait('아아～～～～');
      await nice_nature.print_and_wait([
        '트레이닝실 안에서, ',
        nice_nature.get_colored_name(),
        '는 오늘만 벌써 몇 번째인지 모를 한숨을 내쉬었다.',
      ]);
      await nice_nature.print_and_wait([
        '그 원인은 ',
        nice_nature.sex,
        '의 손에 들린 한 장의 편지지에 있었다.',
      ]);
      await nice_nature.print_and_wait(
        '하트 스티커가 붙은 분홍색 봉투는 누가 봐도 러브레터였다.',
      );
      await nice_nature.print_and_wait([
        '이것은 오늘 아침 이름을 모르는 어느 ',
        nice_nature.get_uma_sex_title(),
        '가 ',
        nice_nature.sex,
        '에게 건네준 것으로, 그녀는 이렇게 말했다. 「이걸 ',
        callname,
        ' 에게 전해줘.」',
      ]);
      await nice_nature.print_and_wait([
        '부탁을 받았으니 ',
        me.sex,
        '에게 전해줄 수밖에 없었다. 사랑에 빠진 ',
        nice_nature.get_uma_sex_title(),
        nice_nature.get_child_sex_title(),
        '의 마음을 ',
        nice_nature.get_colored_name(),
        ' 스스로도 아주 잘 알고 있었기에.',
      ]);
      await nice_nature.say_and_wait('하지만…… 그럼에도 불구하고.', true);
      await nice_nature.say_and_wait(
        '트레이너랑 그 애가 만약 잘 되기라도 한다면——',
        true,
      );
      await nice_nature.say_and_wait(
        ['그냥 버려버릴까… 아냐, 아냐, 그럴 순 없지. 하지만 ', callname, '을 뺏기고 싶지 않은걸…'],
        true,
      );
      await nice_nature.print_and_wait([
        '붉은 머리의 ',
        nice_nature.get_teen_sex_title(),
        '는 몇 번이고 고뇌했다. 필사적으로 올바른 정답을 찾으려 했지만, 결론은 나지 않았다.',
      ]);
      nice_nature.say(['아아아～～ ', callname, '……']);
      era.printButton('「왜 그래, 네이처? 무슨 일 있어?」', 1);
      await era.input();
      nice_nature.say(['아, ', callname, ', 저기 말이야, 사실은……']);
      await nice_nature.print_and_wait([
        nice_nature.get_colored_name(),
        '는 말을 하려다 말고 무언가를 깨달은 듯 비명을 지르며 옆으로 뛰어올랐다.',
      ]);
      await nice_nature.say_and_wait('아아아악?!');
      nice_nature.say([
        callname[0],
        callname[0],
        callname[0],
        callname,
        '! 언제부터 거기 있었어?!',
      ]);
      era.printButton('「방금 왔어. 응? 그 편지는……?」', 1);
      await era.input();
      await nice_nature.say_and_wait(
        '이제 와서 숨기기엔 이미 늦었다. 이 정도로 노골적인 디자인이라면 금방 러브레터라는 걸 들키겠지……',
        true,
      );
      era.printButton('「귀여운 편지네, 팬레터야?」', 1);
      await era.input();
      await nice_nature.say_and_wait('들키지 않았어.', true);
      await nice_nature.say_and_wait('아니, 이건 팬레터가 아니라……');
      era.printButton('「아니야? 그럼 무슨 편지인데?」', 1);
      await era.input();
      await nice_nature.print_and_wait([
        '설마 ',
        me.get_colored_actual_name(),
        '이(가) 이렇게 두 번째 직구 질문을 던질 줄이야. ',
        nice_nature.get_colored_name(),
        '는 방금 왜 무의식적으로 부정했는지 후회하며 막다른 길에 몰린 기분을 느꼈다.',
      ]);
      await nice_nature.say_and_wait('음, 이건……');
      await nice_nature.say_and_wait(['이런 형태로 ', me.sex, '에게 주게 될 줄이야.'], true);
      await nice_nature.print_and_wait([
        '이것도 자업자득인 걸까. ',
        nice_nature.get_teen_sex_title(),
        '는 한숨을 내쉬면서도 결심을 굳히고 편지를 ',
        callname,
        '에게 건넸다.',
      ]);
      await nice_nature.say_and_wait('저기…… 러브레터……');
      era.printButton('「에? 러브레터? 아, 역시 네이처는 인기가 많구나.」', 1);
      await era.input();
      await nice_nature.say_and_wait([
        '잠깐! 남자가 이런 편지지에 러브레터를 쓰겠냐고! ',
        callname,
        '에게 온 거야, 당신 거라고!',
      ]);
      await nice_nature.print_and_wait([
        nice_nature.get_colored_name(),
        '는 너무 혼란스러운 나머지, 자기도 모르게 편지를 탁자 위에 거칠게 내던졌다.',
      ]);
      era.printButton('「나한테 온…… 러브레터?」', 1);
      await era.input();
      await nice_nature.print_and_wait([
        me.get_colored_actual_name(),
        '이(가) 편지지를 뚫어지게 쳐다보자, 그의 얼굴에 떠오른 미소를 본 ',
        nice_nature.get_colored_name(),
        '는 가슴이 미어지는 듯했다.',
      ]);
      era.printButton('「고마워, 정말 기쁜걸.」', 1);
      await era.input();
      await nice_nature.say_and_wait('역시, 이런 걸 받으면 기쁜 거야?');
      era.printButton(
        `「귀여운 ${nice_nature.get_uma_sex_title()} ${nice_nature.get_child_sex_title()}, 그것도 내가 좋아하는 ${nice_nature.get_uma_sex_title()} ${nice_nature.get_child_sex_title()}에게 받는다면 정말 기쁘겠지.」`,
        1,
      );
      await era.input();
      await nice_nature.say_and_wait(
        [
          '좋아하는 ',
          nice_nature.get_uma_sex_title(),
          nice_nature.get_child_sex_title(),
          '…… 역시 그렇구나.',
        ],
        true,
      );
      await nice_nature.say_and_wait(
        [
          callname,
          '이(가) 좋아하는 ',
          nice_nature.get_uma_sex_title(),
          nice_nature.get_child_sex_title(),
          '이(가) 편지를 보냈다. 서로의 진심을 확인한 두 사람은 이제 서로 사랑하는 사이가 되고……',
        ],
        true,
      );
      await nice_nature.say_and_wait('나에게는 처음부터 승산이 없었구나……', true);
      await nice_nature.print_and_wait([
        nice_nature.get_colored_name(),
        '은(는) 가슴의 통증이 한계에 다다랐음에도, 필사적으로 대화를 이어갔다……',
      ]);
      await nice_nature.say_and_wait([
        '그렇구나, ',
        callname,
        '. 쌤이 좋아하는 그 ',
        nice_nature.get_uma_sex_title(),
        nice_nature.get_child_sex_title(),
        ', ',
        nice_nature.sex,
        '도 아주 귀엽고, 둘이 정말 잘 어울리네.',
      ]);
      era.println();

      era.printButton(`「음……? 이 편지, 네이처가 쓴  거 아냐?」（관계 진전）`, 1);
      era.printButton(
        '「그러면 좋겠네. 아쉽게도 지금은 그런 상대가 없어.」（관계 진전 중지）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await nice_nature.say_and_wait('하아?');
        await nice_nature.print_and_wait([
          me.get_colored_actual_name(),
          '의 말에 ',
          nice_nature.get_colored_name(),
          '는 머릿속이 하얘졌다.',
        ]);
        await nice_nature.say_and_wait(
          [callname, ', 내가 쓴 러브레터라고 생각한 거야?'],
          true,
        );
        await nice_nature.say_and_wait(
          [callname, ', 러브레터를 받아서 기뻤던 거야?'],
          true,
        );
        await nice_nature.say_and_wait(
          [
            callname,
            '은 좋아하는 ',
            nice_nature.get_uma_sex_title(),
            nice_nature.get_child_sex_title(),
            '가 보낸 편지라고 생각해서 기뻤던 거지?',
          ],
          true,
        );
        await nice_nature.say_and_wait(
          [
            '——그 말은 즉, ',
            callname,
            '이(가) 좋아하는 ',
            nice_nature.get_uma_sex_title(),
            nice_nature.get_child_sex_title(),
            '는……',
          ],
          true,
        );
        await nice_nature.print_and_wait([
          '겨우 앞뒤 상황을 파악한 ',
          nice_nature.get_colored_name(),
          '의 얼굴이 순식간에 붉게 달아올랐다.',
        ]);
        await nice_nature.say_and_wait([
          '아앗～! 그러고 보니 ',
          sys_get_colored_callname(this.id, 55),
          '가 나한테 볼일이 있다고 했었지～! 미안! ',
          callname,
          '! 나 가봐야겠어! 오늘 저녁에 내가 밥 하러 올 테니까, 그때 봐!',
        ]);
        await nice_nature.print_and_wait([
          me.get_colored_actual_name(),
          '의 말을 끊고, ',
          nice_nature.get_colored_name(),
          '은(는) 쏜살같이 트레이닝실을 뛰쳐나갔다.',
        ]);
        await nice_nature.print_and_wait(
          '한참을 뛰어가다 상점가 근처에서 멈춰 선 그녀는 기운 없이 풀썩 주저앉았다.',
        );
        await nice_nature.say_and_wait(
          '나 바보인가? 왜 도망친 거야? 그냥 받아들이면 됐잖아! 아! 방금 저녁에 밥 하러 간다고 말해버렸어!',
        );
        await nice_nature.print_and_wait([
          nice_nature.get_colored_name(),
          '은(는) 후회스럽다는 듯 머리를 헝클어뜨렸다. 이 흐름대로라면, 저녁에 다시 ',
          me.get_colored_actual_name(),
          '을(를) 만나는 건 대답할 준비가 됐다는 뜻이나 다름없었다……',
        ]);
        await nice_nature.say_and_wait([
          '아냐, 더 이상 뒤돌아보지 말자. 앞으로 나아가는 거야. ',
          callname,
          '이(가) 나에게 준 모든 것에 보답해야 해.',
        ]);
        await nice_nature.print_and_wait([
          nice_nature.get_colored_name(),
          '은(는) 결심을 굳힌 듯 자리에서 일어났다. 그리고 발걸음을 돌려 문구점으로 향했다.',
        ]);
        await nice_nature.print_and_wait(
          '자신의 진심을 오롯이 담아낼 수 있는, 자신만의 편지지를 사기 위해서였다.',
        );
        await nice_nature.say_and_wait(
          '그리고…… 만약을 위해서 속옷도 새로 사야겠어…… 마, 만약을 위해서일 뿐이니까……',
        );
        era.println();
        await sys_love_uma_in_event(60);
      } else {
        await nice_nature.say_and_wait('에? 그래?');
        await nice_nature.print_and_wait([
          me.get_colored_actual_name(),
          '이(가) 내놓은 대답이 의외였는지, ',
          nice_nature.get_colored_name(),
          '은(는) 가슴을 조이던 통증이 조금 가라앉는 것을 느꼈다.',
        ]);
        await nice_nature.say_and_wait('그렇구나…… 헤헤, 그럼…… 아직 기회는 있겠네.');
        era.printButton('「응? 무슨 기회?」', 1);
        await era.input();
        await nice_nature.say_and_wait('비밀이야!');
        await nice_nature.print_and_wait([
          nice_nature.get_colored_name(),
          '은(는) 장난스러운 미소를 띠며 가벼운 발걸음으로 트레이닝실을 떠났다.',
        ]);
        await nice_nature.say_and_wait(
          '하지만 이대로 여유 부리고 있을 수만은 없지. 더 늦기 전에 행동하지 않으면……',
        );
        era.set('cflag:60:호감거절', 74);
        await punish_rejecting_love(60);
      }
    }
  }

  async 89(nice_nature, me) {
    await nice_nature.print_and_wait([
      '밤, ',
      nice_nature.get_colored_name(),
      '은(는) 벽장에서 오래된 과자 깡통 하나를 꺼내 소중하게 책상 위에 올려두었다.',
    ]);
    await nice_nature.print_and_wait([
      '깡통 안에는 정성스럽게 접은 종이 트로피들이 가득 쌓여 있었다. 하나하나가 ',
      me.get_colored_actual_name(),
      '과(와) 함께 걸어온 발자취였으며, 소중한 추억이었다. 지금까지의 모든 레이스뿐만 아니라 두 사람이 함께 보낸 행복한 시간들이 고스란히 담겨 있었다. 앞으로 이 수집품들이 계속 늘어날 것이라 생각하자, ',
      nice_nature.sex,
      '의 얼굴에 자연스럽게 미소가 번졌다.',
    ]);
    await sys_love_uma_in_event(60);
  }
};