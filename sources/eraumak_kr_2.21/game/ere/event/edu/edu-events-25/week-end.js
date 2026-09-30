const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha, get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { chara_colors } = require('#/data/chara-colors');
const CoffeeEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-25');
const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');
const { attr_enum } = require('#/data/train-const');

/**
 * @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},EventObject):Promise>} handlers
 * @param {function():boolean} check_tachyon_plan_b
 */
module.exports = (handlers, check_tachyon_plan_b) => {
  handlers[47 + 31] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:25:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('친구', coffee);
    await coffee.say_and_wait([callname, '…… 친구에 관한 이야기…… 인가요?']);
    era.printButton('「응, 자세히 알고 싶어.」', 1);
    await era.input();
    await era.printAndWait([
      '여름 합숙의 어느 밤, ',
      me.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '에게 ',
      coffee.sex,
      '의 마음속에 있는 특별한 존재—— 친구에 대해 물었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이전에 우연히 ',
      coffee.sex,
      '가 말했던 것을 기억하고 있다. 친구는 ',
      coffee.sex,
      '가 어릴 적부터 ',
      coffee.sex,
      '의 곁에 머물며, 언제나 ',
      coffee.sex,
      '의 앞에서 ',
      coffee.sex,
      '를 이끌어주는 존재라는 것을.',
    ]);
    await era.printAndWait('하지만 이끈다는 것은, 대체 무엇을 뜻하는 걸까?');
    await coffee.say_and_wait('무엇을…… 알고 싶은 건가요?');
    era.printButton('「친구가 이끌어준다는 게 무슨 의미야?」', 1);
    await era.input();
    await coffee.say_and_wait('이끈다는 건…… 언제나 『제 앞을 달리고 있다』는 뜻이에요.');
    await coffee.say_and_wait('아니요, 그렇게 말하면 조금 다르겠네요. 그것뿐만이 아니라……');
    await coffee.say_and_wait('『친구』는 저를…… 행복한 곳으로…… 데려다줘요……');
    await coffee.say_as_unknown_and_wait('후후후, 후후후후후……♪');
    await era.printAndWait('사방에서 들릴 듯 말 듯한 웃음소리가 들려왔다.');
    await coffee.say_and_wait('아무도 모르는, 조용한 장소로 몰래 저를 데려가 주기도 하고……');
    await coffee.say_as_unknown_and_wait('후후후, 후후후후후……♪');
    await era.printAndWait([
      '마치 ',
      me.get_colored_name(),
      '의 귓가에서 들리는 것처럼, ',
      me.get_colored_name(),
      '의 감각을 간지럽혔다.',
    ]);
    await coffee.say_and_wait(
      '놀이공원에 갔을 때는…… 친구가 관람차의 가장 꼭대기에 앉아 있었어요. 그때 친구를 쫓아가기 위해 관람차에 탔다가…… 무척 아름다운 풍경을 보게 됐죠……',
    );
    await coffee.say_and_wait('친구를 쫓아가면, 언제나 즐거운 일이 생겨요……');
    await coffee.say_and_wait('제가 바란다면, 친구는 언제나 제가 어디로 가야 할지 알려주기도 해요……');
    await coffee.say_and_wait('다른 사람들은…… 제게…… 아무것도 준 적이 없지만…… 친구만은 달라요.');
    await coffee.say_and_wait('제게 즐거운 시간을 선사해 주는…… 유일하고 독보적인 존재예요……');
    era.printButton('「……지금도 여전하니?」', 1);
    await era.input();
    await coffee.say_and_wait(['……', callname, ', 왠지 친구와 조금 닮았다는 느낌이 들어요.']);
    await coffee.say_and_wait([
      '하지만 우리가 만날 수 있었던 것도, 친구가 저를 위험에 처한 ',
      callname,
      '의 앞으로 이끌어준 덕분이니까……',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 조금 이해하게 되었다. ',
      coffee.get_colored_name(),
      '에게 있어 친구는 단순히 레이스에서 앞서 달리는 존재만이 아니라는 것을.',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '에게 있어, 친구는 어쩌면 ',
      coffee.sex,
      '를 행복으로 데려다주는 길잡이에 가까운 존재였다.',
    ]);
    await coffee.say_and_wait(
      '지금도 그래요. 제가 원하기만 하면 친구는 저를 어디든 데려다줄 거예요. 예를 들면……',
    );
    await coffee.say_and_wait([
      callname,
      ', 『지금 이런 장소에는 절대 있을 수 없는 물건』을 하나 떠올려 주시겠어요?',
    ]);
    await era.printAndWait([
      '여기에는 있을 리 없는 물건…… ',
      me.get_colored_name(),
      '의 뇌리에 떠오른 것은——',
    ]);
    era.printButton('「……라벤더.」 (파워 +20)', 1);
    era.printButton('「……마리모.」 (근성 +20)', 2);
    era.printButton('「다리가 네 개인…… 말.」', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await coffee.say_and_wait(
          '라벤더…… 인가요. 꿀풀과 라벤더속…… 이곳에서는 자랄 수 없는 꽃이네요……',
        );
        await coffee.say_and_wait('하지만, 제가 진심으로 바란다면……');
        await era.printAndWait('——툭!');
        await era.printAndWait([
          me.get_colored_name(),
          '의 등을…… 갑자기 어떤 강력한 힘이 밀쳤다.',
        ]);
        await era.printAndWait([
          '친구인가!? ',
          me.get_colored_name(),
          '이(가) 그런 생각을 하는 사이, 몸은 이미 누군가에게 재촉당하듯 밀려난 방향으로 나아가고 있었다.',
        ]);
        await era.printAndWait('그리고 마침내 도착한 곳은……');
        await coffee.say_and_wait('이건…… 바위네요. 같이 치워봐요.');
        await coffee.say_and_wait('하나~ 둘…… 영차……');
        await era.printAndWait([
          coffee.get_colored_name(),
          '가 ',
          coffee.sex,
          '의 그 가녀린 팔로 힘껏 바위를 밀어내자, 바위 밑에는…… 해초 같은 것들이 잔뜩 엉켜 있었다.',
        ]);
        await coffee.say_and_wait(
          '줄기 끝마다 꽃봉오리 같은 게 달려 있네요…… 이걸로 라벤더를 대신하라는 뜻일까요……',
        );
        break;
      case 2:
        await coffee.say_and_wait(
          '마리모…… 인가요. 홋카이도 아칸호 등에서 자라는 공 모양의 이끼류……',
        );
        await coffee.say_and_wait(
          '이 근처에서는 절대 찾을 수 없겠지만, 제가 진심으로 바란다면……',
        );
        await era.printAndWait('——툭!');
        await era.printAndWait([
          me.get_colored_name(),
          '의 등을…… 갑자기 어떤 강력한 힘이 밀쳤다.',
        ]);
        await era.printAndWait([
          '친구인가!? ',
          me.get_colored_name(),
          '이(가) 그런 생각을 하는 사이, 몸은 이미 누군가에게 재촉당하듯 밀려난 방향으로 나아가고 있었다.',
        ]);
        await era.printAndWait('그리고 마침내 도착한 곳은……');
        await coffee.say_and_wait('하아, 하아, 우리…… 꽤 멀리까지 왔네요.');
        await coffee.say_and_wait([
          '아, ',
          callname,
          '…… 저기 파도에 떠밀려 백사장으로 올라온 건……',
        ]);
        await coffee.say_and_wait('해조류 덩어리…… 인가요.');
        await era.printAndWait(
          '그곳에 있는 것은 바닷속의 오물을 잔뜩 흡수해 둥글게 뭉쳐진 식물의 잔해였다……',
        );
        await coffee.say_and_wait(
          '겉모습이 그리 예쁘지는 않지만…… 이건 마리모를 대신하라는…… 의미일까요?',
        );
        break;
      case 3:
        await coffee.say_and_wait([
          '말…… 이라니 ',
          coffee.get_uma_sex_title(),
          '를 말하는 건가요? …… 하지만 다리가 네 개라는 건……',
        ]);
        new CoffeeEduMarks().horse = 1;
    }
    if (ret < 3) {
      await era.printAndWait(
        '어쩌면 이것이 친구가 할 수 있는 한계일지도 모른다. 모든 것이 만능은 아닌 모양이다.',
      );
      await era.printAndWait('최선을 다해 도와주려는 수호령 같은 존재일지도 모르겠다.');
      await coffee.say_and_wait('친구는 언제나 이렇게, 제가 행복해질 수 있도록 곧게 이끌어줘요.');
      await coffee.say_and_wait(
        '늘 제 곁에서 저를 도와주는…… 아주 소중한…… 『친구』예요……',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 오늘날 이 자리에 있는 것은, 어쩌면 이 수호령 덕분일지도 모른다.',
      ]);
      await coffee.say_and_wait([
        '……아, ',
        callname,
        '저기 보세요. 바다 위에 작은 섬이 하나 있어요……',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 먼 바다를 바라보았다…… 확실히 작은 섬이 보였다. 하지만 섬으로 가는 다리도 배도 없었고, 헤엄쳐서 갈 수 있는 거리도 아니었다.',
      ]);
      await coffee.say_and_wait(
        '조금 가보고 싶어지네요…… 분명… 조용하고 아름다운 곳이겠죠.',
      );
      await era.printAndWait('하지만 정말로 저 섬에 가고 싶다면……');
      await era.printAndWait('——툭, 툭, 툭!');
      await era.printAndWait([
        '느닷없이 ',
        me.get_colored_name(),
        '의 등이 연속으로 찔렸다……! 마치 「망설이지 말고 가버려」라고 말하는 듯했다.',
      ]);
      await coffee.say_and_wait(
        '아, 『친구』가…… 손을 흔들고 있어요…… 바다 저편에서 『이쪽으로 와』라며 손짓하고 있어요……',
      );
      await era.printAndWait([
        '친구는 ',
        coffee.get_colored_name(),
        '에게 있어 수호령 같은 존재다.',
      ]);
      await era.printAndWait([
        '하지만 정말로 ',
        coffee.sex,
        '를 지킬 마음이 있는 것인지는 도통 알 수가 없었다.',
      ]);
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        25,
        ret === 1 ? [0, 0, 20] : [0, 0, 0, 20],
        0,
        undefined,
        true,
      );
    } else {
      era.println();
    }
    flags.wait_flag = sys_like_chara(25, 0, 25) || flags.wait_flag;
  };

  handlers[47 + 32] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:25:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 종료', coffee);
    await era.printAndWait('여름 합숙의 모든 일정이 끝났다.');
    await coffee.say_and_wait([
      callname,
      '…… 당신 덕분에 제 몸 상태가 무척 좋아졌어요……',
    ]);
    if (check_tachyon_plan_b()) {
      const t_call_c = sys_get_colored_callname(32, 25),
        tachyon = get_chara_talk(32);
      await era.printAndWait([
        '한여름 동안의 필사적인 케어가 성공하여, ',
        coffee.get_colored_name(),
        '의 컨디션이 눈에 띄게 개선되었다.',
      ]);
      await tachyon.say_and_wait([
        '야아, ',
        sys_get_callname(32, 0),
        '. 이번 여름 동안 ',
        t_call_c,
        '과의 진전은 좀 있었나?',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 고문인 ',
        tachyon.get_colored_name(),
        '도 슬쩍 다가왔다.',
      ]);
      era.printButton('「……어느 정도는 알게 된 것 같아.」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '과 합숙 중에 알게 된 정보와 친구에 관한 이야기를 공유했다.',
      ]);
      await tachyon.say_and_wait([
        '과연 그렇군. 의미불명인 구석이 있긴 해도, 전체적으로 꽤 흥미로…… 아니, ',
        t_call_c,
        '에게 유익한 일이군.',
      ]);
      await tachyon.say_and_wait(
        '그렇다는 건—— 아니아니, 잠깐 기다리게. 외압성, 혹은 자상 충동. 여러 방향으로 고려해 본다면……',
      );
      await era.printAndWait([
        '그 후, ',
        tachyon.get_colored_name(),
        '은 깊은 사고의 바다에 빠져들었다.',
      ]);
    }
    await era.printAndWait([
      '여름이 지나가고 다가올 가을에는, 분명 ',
      coffee.get_colored_name(),
      '도 멋진 결실을 맺을 수 있을 것이다.',
    ]);
    new CoffeeEduMarks().horse &&
      (await era.printAndWait([
        '……다만, 그 칠흑같이 기이한 짐승의 모습이 ',
        me.get_colored_name(),
        '의 머릿속을 떠나지 않았다.',
      ]));
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 10));
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      new Array(5).fill(0).map(() => (Math.random() > 0.4 ? 10 : 0)),
      35,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(25, 0, 20, true, 3) || flags.wait_flag;
  };

  handlers[95 + 32] = async (coffee, me, callname, flags, event_object) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:25:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_end, event_object);
      return;
    }
    await print_event_name('여름 합숙 (시니어 시즌) 종료', coffee);
    await era.printAndWait('두 달간의 여름 합숙이 끝났다.');
    await era.printAndWait([
      '이번 여름 동안에는 특별한 일 없이, ',
      me.get_colored_name(),
      '과(와) ',
      coffee.get_colored_name(),
      '가 매일 해변에서 훈련을 함께하며, ',
      coffee.get_colored_name(),
      '의 컨디션을 충분히 조절했다.',
    ]);
    await coffee.say_and_wait('평온한 여름 합숙…… 이런 것도 나쁘지 않네요……');
    await era.printAndWait([
      '트레센으로 돌아가는 버스 안에서, ',
      coffee.get_colored_name(),
      '는 창밖으로 흐르는 풍경을 보며 나지막이 감상을 흘렸다.',
    ]);
    era.printButton('「평범한 생활도 나쁘지 않지……」', 1);
    await era.input();
    await era.printAndWait([
      '하지만 레이스 ',
      coffee.get_uma_sex_title(),
      '의 생애가 언제까지나 평온할 수는 없다. 트레센에 돌아가면, ',
      me.get_couple_title(),
      '은(는) 곧바로 긴박한 ',
      race_infos[race_enum.japa_cup].get_colored_name(),
      '대비 훈련에 들어가야 한다.',
    ]);
    if (new CoffeeEduMarks().horse) {
      era.println();
      await era.printAndWait([
        '무거운 분위기가 ',
        me.get_colored_name(),
        '과(와) ',
        coffee.get_colored_name(),
        ' 두 사람을 감싸고 있었다. 이계의 경주마의 혼, 수수께끼의 친구 등 여러 요인이 ',
        coffee.get_colored_name(),
        '에게 뒤섞여, ',
        coffee.sex,
        '를 일시적으로 혼란스럽게 만들었다.',
      ]);
      await era.printAndWait([
        '그리고 ',
        coffee.get_colored_name(),
        '의 목표—— 친구를 쫓는 것이 과연 ',
        coffee.sex,
        ' 자신의 진정한 소원인지에 대해서도.',
      ]);
    }
    era.println();
    const attr_change = new Array(5).fill(0);
    gacha(Object.values(attr_enum), 3).forEach((e) => (attr_change[e] = 10));
    flags.wait_flag = get_attr_and_print_in_event(
      25,
      attr_change,
      0,
      undefined,
      true,
    );
    flags.wait_flag = sys_like_chara(25, 0, 20, true, 3) || flags.wait_flag;
  };

  /**
   * @this CustomizedEdu
   * @author Mr.E.
   */
  handlers.scared = async function (coffee, me, callname) {
    await print_event_name(['어둠이 무서워'], coffee);
    await era.printAndWait([
      '심야, 칠흑 같은 어둠 속의 교정에서 울음소리가 들려온다. 아이의 목소리일까?',
    ]);
    era.println();
    era.printButton('얼른 기숙사로 돌아가자……', 1);
    era.printButton('어서 가보자, 별일 아니어야 할 텐데……', 2);
    if ((await era.input()) === 1) {
      era.println();
      for (let i = 0; i < 5; ++i) {
        await era.delay(1000);
        era.replaceText(new Array(i + 1).fill('…').join(''));
      }
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 다시 이곳을 빠져나갈 길을 찾아보았지만, 사방이 앞이 보이지 않을 정도로 어두워 도무지 나갈 수가 없었다.',
      ]);
      era.println();
      const random_colors = Object.values(chara_colors).map((e) =>
        Array.isArray(e) ? e[0] : e,
      );
      const buffer = [];
      buffer.push({ content: '???', fontWeight: 'bold'});
      const content = '싫어싫어너무싫어';
      for (let i = 0; i < content.length; ++i) {
        buffer.push({
          content: content[i],
          color: get_random_entry(random_colors),
        });
      }
      buffer.push('너!');
      await era.printAndWait(buffer);
      era.println();
      await me.say_and_wait(['앗!']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 번쩍 눈을 뜨며 주변을 살폈다.',
      ]);
      era.println();
      await me.say_and_wait(['방금 그건…… 꿈인가?']);
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 무릎을 베고 있었고, ',
        coffee.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '를 안마해 주고 있었다.',
      ]);
      era.println();
      await coffee.say_and_wait([
        '괜찮아요, ',
        callname,
        '. 이제 다 끝났어요. 그 아이는 그저 조금 외로웠던 것뿐이에요.',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 깰까 봐 배려하듯, ',
        coffee.get_colored_name(),
        '의 목소리는 평소보다 더욱 부드럽고 낮게 깔렸다.',
      ]);
      era.println();
      await coffee.say_and_wait(['이제 이런 일로 무서워하지 마세요. 제가 늘 곁에 있을 테니까요.']);
      get_attr_and_print_in_event(
        0,
        undefined,
        0,
        JSON.parse(`{"기력":${era.get('maxbase:0:기력') * 0.3}}`),
      ) && (await era.waitAnyKey());
      sys_love_uma(25, get_random_value(1, 5)) && (await era.waitAnyKey());
    } else {
      await era.printAndWait([
        '왠지 모르게, ',
        me.get_colored_name(),
        '이(가) 정신을 차리고 아이를 찾아 나서자, ',
        me.get_colored_name(),
        '의 속도가 점점 빨라지더니 불이 켜진 기숙사 문이 점점 가까워졌고, 머릿속의 울음소리는 오히려 작아져 갔다.',
      ]);
      era.println();
      await me.say_and_wait(['정말 고단한 하루였네, 어서 쉬자.']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 그런 생각을 하며 기숙사 문을 열었다.',
      ]);
      era.println();
      await me.say_and_wait(['내가 뭔가를 잊어버린 것 같은데?']);
      era.println();
      await era.printAndWait([
        '의구심을 품은 채, ',
        me.get_colored_name(),
        '은(는) 깊은 잠에 빠져들었다.',
      ]);
      get_attr_and_print_in_event(0, [20], 0) && (await era.waitAnyKey());
    }
  };
};