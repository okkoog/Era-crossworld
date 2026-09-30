const era = require('#/era-electron');

const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const Love52AfterGirlFriend = require('#/event/love/love-events-52/after-girl-friend');
const { add_event } = require('#/event/queue');
const masturbate = require('#/event/snippets/masturbate');
const print_event_name = require('#/event/snippets/print-event-name');

const event_hooks = require('#/data/event/event-hooks');
const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const punish_rejecting_love = require('#/event/love/snippets/punish-rejecting-love');

module.exports = class extends Love52AfterGirlFriend {
  async 89(urara, me, callname, stage, extra_flag, event_object) {
    const { in_urara, relation } = this.get_event_vars();
    const life_marks = new UraraLifeMarks();
    if (stage === event_hooks.week_end) {
      if (life_marks.active_89 === 0) {
        await print_event_name('다시는 돌아보지 않겠다는 결심', urara);
        await urara.print_and_wait(
          '또 그런 거겠지, 우라라가 눈을 감기만 하면 분명 뭔가가 일어나겠지?',
        );
        await urara.print_and_wait(
          '하지만 평온한 밤에는 아무 일도 일어나지 않고, 침대에서 눈을 떠봐도 여전히 익숙한 기숙사 방이야.',
        );
        await urara.print_and_wait([
          '깜짝 놀랄 만한 서프라이즈도 없고, 망상 속에서 우라라에게 이런저런 짓을 할 ',
          callname,
          '도 없어.',
        ]);
        await urara.print_and_wait([
          '어쩐지 조금…… 기분이 안 좋나? 하지만 잠꼬대로 「일류」를 외치는 ',
          sys_get_colored_callname(52, 61),
          ' 말고는 딱히 흥을 깰 만한 이유도 없는데.',
        ]);
        await urara.print_and_wait(
          '잠들어야 할 시간은 이미 한참 지났지만, 우라라는 또 쓸데없는 생각 때문에 잠을 못 이루고 있어.',
        );
        await urara.print_and_wait([
          '머지않아 우라라는 어쩌면 금방 ',
          callname,
          '와 기분 좋은 일을 하는 것만 생각하는 나쁜 아이가 되어버릴지도 몰라.',
        ]);
        await urara.print_and_wait([
          '하지만 그전에, 우라라는 먼저 머릿속에 ',
          callname,
          ' 말고는 아무것도 들어있지 않은 바보가 되어버리겠지.',
        ]);
        era.println();
        if (era.get('exp:52:성관계횟수') >= 10) {
          await urara.say_and_wait([
            '분, 분명히 다 ',
            callname,
            ' 때문에 이렇게 된 거니까!',
          ]);
          await urara.print_and_wait(
            '설마 우라라가 원래부터 야한 나쁜 아이였던 걸까? 우라라라도 역시 기운이 빠진다고.',
          );
          await urara.print_and_wait([
            '하지만 아무리 부정해도, 우라라의 몸은 이미 ',
            callname,
            '가 없으면 안 되게 되어버렸어……',
          ]);
        } else {
          await urara.say_and_wait([
            '만약 ',
            callname,
            '가 우라라랑 더 많이, 훨씬 더 많이 사이좋게 지내줬다면 우라라는 나쁜 아이가 되지 않았을까?',
          ]);
          await urara.print_and_wait([
            '그렇지만 우라라의 몸은 이미 ',
            callname,
            '를 맞이할 준비가 다 끝났는데, ',
            callname,
            '는 여전히 너무 무관심해.',
          ]);
          await urara.print_and_wait([
            '역시 ',
            callname,
            '는 좀 더 어른스러운 사람을 좋아하는 걸까? 조금 슬프네……',
          ]);
        }
        era.println();
        if (relation > 150) {
          await urara.say_and_wait([
            '하지만 설령 그렇다고 해도, 난 ',
            callname,
            '를 미워하고 싶지 않아. 오히려 우라라는 ',
            callname,
            '를 사랑하고 있는걸.',
          ]);
          await urara.print_and_wait([
            '「',
            urara.get_colored_name(),
            '」라는 이름의 ',
            urara.get_uma_sex_title(),
            '는 ',
            callname,
            '에게 미쳐있어서, 이젠 「연인 관계」조차 만족할 수 없게 되었어.',
          ]);
          await urara.print_and_wait(
            '하지만 여기서 한 걸음 더 나아간다면, 그건 정말 소중한 관계가 되는 거잖아? 「연인」 이상이라면 역시 부부겠지?',
          );
          await urara.print_and_wait(
            '엄마가 먼저 말씀하신 적은 없지만, 우라라도 그게 인생의 가장 큰 일이라는 것 정도는 알고 있어.',
          );
          await urara.print_and_wait([
            '비록 ',
            callname,
            '와 몸을 맞대는 사이가 되었다고 해도, 이런 제멋대로인 요구는 쉽게 꺼낼 수 있는 게 아니야.',
          ]);
        } else {
          await urara.say_and_wait([
            '우라라도 예전엔 자주 스스로를 의심하곤 했지만, 그때마다 매번 여전히 ',
            callname,
            '를 사랑하고 있다는 걸 깨닫게 돼.',
          ]);
          await urara.print_and_wait([
            '인정하기 힘들더라도, 「',
            urara.get_colored_name(),
            '」는 이제 이 불안한 사랑을 소중히 간직할 수밖에 없어.',
          ]);
          await urara.print_and_wait([
            '만약 우라라가 한 걸음 더 나아가서 ',
            callname,
            '를 곁에 묶어둘 수 있다면? 하지만 더 나아간다면……',
          ]);
          await urara.print_and_wait(
            '함부로 누군가와 결합하는 건 행복해지기 어렵다고, 엄마가 예전에 우라라에게 말해줬어.',
          );
          await urara.print_and_wait(
            '하지만 지금은 불행해질 것을 알면서도, 우라라는 이 누더기 같은 경험들을 차마 버릴 수가 없어.',
          );
        }
        era.println();
        urara.say(['그럼 지금 ', callname, '와의 관계는……']);
        era.printButton('「나는 물러서지 않을 거야!」 (관계 진전)', 1);
        era.printButton('「역시 너무 이른가……」 (관계 진전 보류)', 2);
        if ((await era.input()) === 1) {
          await urara.print_and_wait('결정했어, 우라라는 이제 물러나지 않을 거야.');
          await urara.print_and_wait([
            '우라라는 이미 ',
            callname,
            '의 마음속에 나만의 자리를 차지했지만, 이걸로는 전혀 부족해.',
          ]);
          await urara.print_and_wait(
            '왜냐하면 우라라가 선택하지 않더라도 시간은 멈추지 않고, 우라라도 영원히 어린아이인 건 아니니까.',
          );
          await urara.print_and_wait([
            '계속 ',
            callname,
            '의 기분만 살피는 것보다, 차라리 우라라가 먼저 행동하는 게 나아. 설령 거절당한다고 해도 상관없어.',
          ]);
          await urara.print_and_wait(
            '앞으로 무슨 일이 일어나든 우라라는 어른처럼 용기를 낼 거야. 다른 사람들도 할 수 있다면 우라라도 할 수 있어!',
          );
          await urara.print_and_wait([
            '그리고 그냥 「연인」으로서의 약속 말고도, 우라라는 ',
            callname,
            '와, 아니 ',
            me.actual_name,
            '과(와) 더 많은 것들을 약속하고 싶어——',
          ]);
          if (
            era
              .getAddedCharacters()
              .filter((e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75)
              .length > 0
          ) {
            era.println();
            await urara.print_and_wait([
              '하지만 우선, ',
              callname,
              '가 승낙하든 말든, 우라라는 ',
              callname,
              '가 시간을 좀 더 내줬으면 좋겠어.',
            ]);
            await urara.print_and_wait([
              '비록 우라라가 ',
              callname,
              '를 제대로 혼낼 수는 없지만, 이것만큼은 조금 화난 척할 수 있으니까!',
            ]);
            await urara.print_and_wait([
              callname,
              '가 모두를 좋아하는 이유가 다들 달리기가 빠르기 때문이라면, 앞으로 훈련도 더 열심히 해야겠네……',
            ]);
            era.drawLine();
            await in_urara.say_as_unknown_and_wait([
              '연심으로 인해 투지가 드높아진 ',
              urara.get_teen_sex_title(),
              '는 마음속으로 미래의 계획을 세우며 생각에 잠긴 채 꿈나라로 향했습니다.',
            ]);
            await in_urara.say_as_unknown_and_wait(
              '오늘 밤의 우라라는 마침내 용기를 냄으로써, 고민과 불안으로 잠 못 이루던 날들을 넘어섰습니다.',
            );
            await in_urara.say_as_unknown_and_wait([
              '이 어린 ',
              urara.get_uma_sex_title(),
              '가 언제 행동을 시작하든, 설령 조금 서툴지라도 그것은 분명 진정한 진심일 것입니다.',
            ]);
          }
          add_event(event_hooks.week_start, event_object);
        } else {
          await urara.say_and_wait([
            '맞아, 아직은 너무 일러. ',
            callname,
            '도 분명 들어주지 않을 거야.',
          ]);
          await urara.print_and_wait([
            '우라라도 몰랐어. 언젠가 ',
            callname,
            '에게 거절당하는 걸 무서워하게 될 날이 올 줄은.',
          ]);
          await urara.print_and_wait(
            '거절당할지도 모른다는 생각을 안 해본 건 아니지만, 거절당한 뒤에 어떻게 될지가 너무 무서워.',
          );
          await urara.print_and_wait([
            '이렇게 중요한 일로 거절당한다면, 우라라는 ',
            callname,
            '와 지금 같은 관계를 계속 유지할 수 있을까?',
          ]);
          await urara.print_and_wait([
            '그럴 땐 어떡하지? 그냥 ',
            callname,
            '에게 매달려서, 우라라를 애완동물로 삼아도 좋으니까 버리지만 말아달라고 빌어야 하나?',
          ]);
          await urara.print_and_wait(
            '정말로 그런 취급을 당할지도 모른다고 생각하니 몸의 요동이 멈추질 않아. 우라라는 정말 엄청 나쁜 아이가 되어버렸어.',
          );
          await urara.say_and_wait([
            '일단 몸부터 진정시키자. 내일도 일찍 일어나야 하니까…… 하아…… ',
            callname,
            '……',
          ]);
          await urara.print_and_wait([
            '과도한 불안과 억눌러왔던 열등감이 한꺼번에 터져 나오며, ',
            urara.get_teen_sex_title(),
            '는 초조해진 몸에 거칠게 손을 뻗었다.',
          ]);
          era.drawLine();
          await in_urara.say_as_unknown_and_wait([
            '적어도 이 어린 ',
            urara.get_uma_sex_title(),
            '에게 있어, ',
            callname,
            '와 한 걸음 더 나아가는 것은 오늘 밤의 심리 상태로는 확실히 적절하지 않아 보이네요.',
          ]);
          await in_urara.say_as_unknown_and_wait([
            '하아. ',
            callname,
            '가 우라라를 정말 그렇게 대할지는 제쳐두더라도, 그저 용기만 냈으면 좋았을 텐데 말입니다……',
          ]);
          begin_and_init_ero(52);
          await masturbate(52);
          end_ero_and_train();
          era.set('status:52:밤샘', 1);
          era.set('cflag:52:호감거절', 89);
        }
      } else {
        await print_event_name('더 이상 망설이지 않는 당신', urara);
        await urara.say_and_wait([callname, ', 여긴 이제 아무것도 없네.']);
        await era.printAndWait([
          '그때의 결혼식장을 다시 지나가던 중, ',
          urara.get_colored_name(),
          '의 말에 따라 ',
          me.get_colored_name(),
          '은(는) 다시 한번 울타리 너머로 공원 안을 바라보았다.',
        ]);
        await era.printAndWait([
          '이번에는 잔디밭 위에 사람이 다녀간 흔적조차 깨끗이 사라져 버렸고, 오직 ',
          urara.get_colored_name(),
          '의 나지막한 탄식만이 ',
          me.get_colored_name(),
          '의 귓가에 맴돌고 있었다.',
        ]);
        await era.printAndWait([
          '담당이 너무나 왜소한 탓에 ',
          urara.sex,
          '의 눈을 제대로 관찰할 수는 없었지만, 머리 위에서 축 처진 한 쌍의 귀를 통해 ',
          urara.sex,
          '의 심경을 엿볼 수 있었다.',
        ]);

        era.printButton(
          `「${sys_get_callname(0, 52)}, 같이 안으로 들어가 보자.」`,
          1,
        );
        await era.input();

        await urara.say_and_wait('에? 응……');
        await era.printAndWait([
          '깜짝 놀란 뒤 이어진 건 어딘가 멍한 대답이었고, ',
          urara.get_colored_name(),
          '는 순순히 ',
          me.get_colored_name(),
          '의 발걸음을 따라 낮은 울타리를 함께 돌아서 들어갔다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          me.get_colored_name(),
          '과(와) 함께 그 신혼부부를 배웅했던 잔디밭 위에 섰음에도 불구하고, 어린 ',
          urara.get_uma_sex_title(),
          '의 꼬리는 여전히 의욕 없이 흔들리고 있었다.',
        ]);
        await era.printAndWait([
          '아마도 지난번 거절당했던 슬픈 기억에 여전히 잠겨있는 듯, ',
          urara.get_colored_name(),
          '는 평소의 활력을 잃은 모습이었다.',
        ]);
        await era.printAndWait([
          '당연한 일일지도 모른다. 아무리 아름다운 곳이라 해도, 이곳은 한 명의 ',
          urara.get_teen_sex_title(),
          '가 희망을 품었으나 사랑하는 이에게 직접 거절당한 상처 입은 장소이기 때문이다.',
        ]);
        await era.printAndWait([
          '이 순간 ',
          urara.get_colored_name(),
          '는 기다려달라던 그 약속에 대해 여전히 불안한 의구심을 품고 있었을지도 모른다. 그때의 ',
          me.get_colored_name(),
          '은(는) 정말 못된 어른이었다.',
        ]);
        await era.printAndWait(
          '적어도 지금은, 미련한 어른이 보상을 해줄 차례일지도 모른다. 담당의 내면에 생긴 공허함을 다시 채워주어야 할 시간이다.',
        );
        await era.printAndWait(
          '하고 싶은 말은 산더미처럼 많았지만, 지금 할 수 있는 말은 역시 이것뿐이었다——',
        );

        era.printButton(`먼저 ${sys_get_callname(0, 52)}의 손을 잡는다.`, 1);
        await era.input();

        await urara.say_and_wait('……아!');
        await era.printAndWait([
          '두 사람의 평소와 다름없는 호흡이었을까, 혹은 어린 ',
          urara.get_uma_sex_title(),
          '가 오랫동안 기다려온 감응이었을까, ',
          urara.get_colored_name(),
          '는 눈을 크게 떴다. 벚꽃빛 눈동자가 놀라움에서 기쁨으로 변해갔다.',
        ]);
        await era.printAndWait([
          '접촉하는 순간, ',
          urara.get_colored_name(),
          '는 알아차렸다. 이것은 그저 연인 사이의 스킨십이 아니라, ',
          me.get_colored_name(),
          '가 약속을 이루고자 하는 순간임을.',
        ]);
        era.println();

        if (relation > 150) {
          await urara.say_and_wait(
            '상상했던 거랑은 조금 다르지만, 드디어 때가 왔구나. 정말 행복해.',
          );
          await era.printAndWait([
            '순식간에 ',
            me.get_colored_name(),
            '과(와)의 거리가 0으로 좁혀졌고, ',
            urara.get_colored_name(),
            '의 천진난만하면서도 사랑이 깃든 얼굴이 그 어느 때보다 가깝게 다가왔다.',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '는 평소 함께 지내던 행복한 표정을 되찾았다. 지금 이 순간 그녀는 마치 익숙한 푸른 잔디 위에서 반지를 끼려는 신부처럼 보였다.',
          ]);
          await era.printAndWait([
            '비록 작은 ',
            urara.sex,
            '에게 진짜 웨딩드레스도, 사람들의 축복도 없었지만, 지금 이 순간의 ',
            urara.sex,
            '는 연인의 눈 속에서 가장 빛나는 주인공이었다.',
          ]);
          await urara.say_and_wait([
            '만약 ',
            callname,
            '가 좀 더 빨리 말해줬으면 좋았을 텐데. 그러니까 우라라에게 보답하는 의미로, 앞으로는 계속 함께 있어야 해?',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '의 진심 어린 미소 앞에서, ',
            me.get_colored_name(),
            '은(는) 당연히 가장 확실한 대답을 돌려주었다——',
          ]);
        } else {
          await urara.say_and_wait([
            '일부러 여기까지 돌아오다니, ',
            callname,
            '는 참 서투르네. 우라라가 할 말은 아니지만 말이야……',
          ]);
          await era.printAndWait([
            '기쁜 감정을 필사적으로 숨기며 ',
            urara.get_colored_name(),
            '는 반짝이는 눈동자를 억누르려 애썼으나, 실룩거리는 귀와 꼬리까지는 감추지 못했다.',
          ]);
          await era.printAndWait([
            '상쾌한 잔디 위에 서서 약속을 완수한 ',
            urara.get_colored_name(),
            '의 미소에서 마침내 먹구름이 걷혔다.',
          ]);
          await era.printAndWait([
            '두 사람 사이의 애정과 관계의 균형이 여전히 미묘할지라도, 지금 이 순간 ',
            urara.get_colored_name(),
            '의 반려가 되겠다는 의지는 결코 변하지 않았다.',
          ]);
          await urara.say_and_wait([
            '어쨌든 이번엔 정말로 마음 정한 거지! 다신 번복하면 안 돼, ',
            callname,
            '?',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '의 장난 섞인 미소에 대항하여, ',
            me.get_colored_name(),
            '도 명확한 대답을 돌려주었다——',
          ]);
        }
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
          era.println();
          await urara.say_and_wait([
            '그렇게 되면, 어쩌면 우라라는 나중에 ',
            callname,
            '가 더 많은 사람에게 약속하는 걸 보게 될지도 모르겠네……',
          ]);
          await urara.say_and_wait([
            '괜찮아, 우라라는 ',
            callname,
            '를 용서해 줄 수 있어. 왜냐하면 우라라도 ',
            callname,
            '의 아내니까!',
          ]);
          await era.printAndWait([
            '갑작스럽게 ',
            me.get_colored_name(),
            '의 손을 맞잡은 손에 ',
            urara.get_uma_sex_title(),
            '의 힘이 실렸다. ',
            urara.get_colored_name(),
            '의 미소에는 자신의 권리를 선포하는 듯한 암시가 서려 있었다.',
          ]);
          await urara.say_and_wait(
            '그러니까 순서가 어떻게 됐든, 트레이닝 때 말을 듣지 않는 아이들은 내가 잘 타이를게?',
          );
        }
        era.printButton(
          `「미안해, ${sys_get_callname(0, 52)}를 너무 오래 기다리게 했어!」`,
          1,
        );
        await era.input();

        era.drawLine();
        await in_urara.say_as_unknown_and_wait('이제 당신은, 더 이상 되돌아갈 수 없답니다?');
        await sys_love_uma_in_event(52);
      }
    } else if (stage === event_hooks.week_start) {
      await print_event_name(`약속을 나눈 ${urara.sex}`, urara);
      await in_urara.say_as_unknown_and_wait(
        '그때 결혼식장을 지나친 것은 순수한 우연이었을지도 모릅니다. 하지만 달리는 궤적을 바꾸기에는, 한 번의 우연으로도 충분하지요.',
      );
      era.drawLine();
      await era.printAndWait([
        '결혼식장과 울타리 하나를 사이에 두고, 기억 속의 ',
        me.get_colored_name(),
        '과(와) ',
        urara.get_uma_sex_title(),
        '는 울타리 밖에서 축복하는 인파를 뚫고 지나가는 신혼부부를 배웅하고 있었다.',
      ]);
      await era.printAndWait([
        '마치 무언가를 암시하듯, 그 부부 중 한 명은 아담한 ',
        urara.get_uma_sex_title(),
        '였고, 다른 한 명은 ',
        urara.sex,
        '보다 훨씬 체격이 큰 ',
        me.get_phy_sex_title(),
        '이었다.',
      ]);
      await era.printAndWait([
        '추억 속의 ',
        urara.get_colored_name(),
        '는 아무 말도 하지 않았지만, 맑은 벚꽃빛 눈동자에는 동경의 빛이 스쳐 지나갔다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '도 어느덧 가정을 꾸리는 것을 꿈꾸는 단계에 접어든 것일까. 이런 도착적인 생각은 제대로 된 어른이 할 법한 것이 아니었다.',
      ]);
      await era.printAndWait([
        '하지만 어쩔 수 없었다. 작은 ',
        urara.get_uma_sex_title(),
        '와 연인이 된 것은 다름 아닌 ',
        urara.sex,
        '의 트레이너였으니까.',
      ]);
      await era.printAndWait(
        '그렇다면 스스로에게 물어보자. 만약 담당이 미래에 연인과 가정을 꾸리길 원한다면, 트레이너로서의 준비는 되어 있는가?',
      );
      era.println();

      if (relation > 150) {
        await urara.say_and_wait([callname, ', 무슨 생각해?']);
        await era.printAndWait([
          urara.get_colored_name(),
          '는 어느샌가 고개를 돌려, 평소처럼 진심 어린 미소를 ',
          me.get_colored_name(),
          '에게 지어 보였다.',
        ]);
        await era.printAndWait([
          '어쩌면 ',
          me.get_colored_name(),
          '들은 지금 저 신혼부부와 다를 바 없을지도 모른다. 연인의 아름다운 미소를 느끼며, ',
          me.get_colored_name(),
          '은(는) 그렇게 확신했다.',
        ]);
        await era.printAndWait([
          '그러므로 지금의 ',
          urara.get_colored_name(),
          '에게는 진지한 약속이 필요했다. 그녀가 「어른」으로 정의되든 그렇지 않든 간에.',
        ]);
      } else {
        await urara.say_and_wait([callname, ', 무슨 신경 쓰이는 일이라도 있어?']);
        await era.printAndWait([
          '시선을 거둔 ',
          urara.get_colored_name(),
          '는 가만히 ',
          me.get_colored_name(),
          '을(를) 바라보며, 조금 난처하면서도 기쁜 기색이 역력한 미소를 지었다.',
        ]);
        await era.printAndWait([
          '작은 ',
          urara.get_uma_sex_title(),
          '는 가끔 분위기와 어울리지 않는 표정을 짓곤 하지만, 그 이유를 모른다고 한다면 스스로도 믿지 못할 거짓말이 될 터였다.',
        ]);
        await era.printAndWait([
          '하지만 이 작은 ',
          urara.get_uma_sex_title(),
          '가 느끼는 것이 동경인지 불안인지, 혹은 둘 다인지, 그것만큼은 ',
          me.get_colored_name(),
          '도 지금 확인할 방법이 없었다.',
        ]);
      }
      era.println();

      await urara.say_and_wait([
        callname,
        ', 언젠가 우라라도 하얀 드레스를 입을 수 있을까?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 이전 질문에 답하기도 전에, 그리고 생각할 시간조차 주지 않고, 벚꽃빛 어린 연인이 다시 질문을 던졌다.',
      ]);
      await urara.say_and_wait([
        '우라라는 더 이상 바라는 건 없지만, ',
        callname,
        ', 우라라의 손은 지금 비어 있다구?',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '을(를) 직접 보지 않은 채, ',
        urara.get_colored_name(),
        '는 좁은 울타리 너머로 마치 재생되는 미래를 보듯 떠들썩한 결혼식을 응시했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 작은 손은 곁에서 조용히 기다리고 있었다. 그 위에는 하얀 면사포도, 반짝이는 반지박스도 없었지만.',
      ]);
      await era.printAndWait([
        urara.sex,
        '도 분명 그런 것들의 의미를 알고 있을 것이다. 하지만 작은 ',
        urara.get_uma_sex_title(),
        '가 원하는 것은 오직 손바닥이 맞닿는 온기, 그리고 새끼손가락을 걸고 나누는 약속뿐이었다.',
      ]);
      await era.printAndWait([
        '앞으로 어떤 일을 마주하게 되더라도, 작은 ',
        urara.sex,
        '는 이미 ',
        me.get_colored_name(),
        '의 대답을 기다리기로 결심한 듯했다.',
      ]);
      in_urara.say_as_unknown(
        `여전히 트레이너 ${me.get_adult_sex_title()}을(를) 기다리고 있는 ${sys_get_callname(
          0,
          52,
        )}를 향한 당신의 결정은……`,
      );
      era.printButton(`${sys_get_callname(0, 52)}의 손을 잡는다. (관계 진전)`, 1);
      era.printButton('아직 마음의 준비가 되지 않았다. (관계 진전 보류)', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '와의 관계가 어떤 단계에 와 있는지, ',
          me.get_colored_name(),
          '은(는) 이미 잘 알고 있었다.',
        ]);
        await era.printAndWait([
          '이것저것 따질 필요는 없었다. ',
          me.get_colored_name(),
          '이(가) 연인의 작은 손을 잡아끌자, ',
          urara.get_colored_name(),
          '의 꼿꼿이 서 있던 귀가 마침내 안도한 듯 축 늘어졌다.',
        ]);
        await era.printAndWait([
          '가벼운 맞댐에서 다섯 손가락을 교차하는 형태로 바뀌자, 작은 ',
          urara.get_uma_sex_title(),
          '의 가느다란 손가락이 수줍은 듯 ',
          me.get_colored_name(),
          '의 손바닥 사이를 간지럽혔다.',
        ]);
        await era.printAndWait([
          '응답을 받은 ',
          urara.get_colored_name(),
          '는 여전히 말이 없었으나, 수줍은 홍조가 ',
          urara.sex,
          '의 뺨을 정직하게 물들였다.',
        ]);
        await era.printAndWait(
          '너무나도 작은 연인의 손을 어루만지자, 가슴 깊이 눌러두었던 배덕감이 숨을 쉴 때마다 쏟아져 나올 것만 같았다.',
        );
        await era.printAndWait('하지만 아무런 약속도 없이, 정말 이대로 괜찮은 것일까?');
        era.println();
        if (relation > 150) {
          await urara.say_and_wait([
            '그렇구나. 어른이라서 생각을 숨겨야만 하지만, ',
            callname,
            '의 마음 한구석에는 우라라에게 미안한 마음이 있나 보네.',
          ]);
          await urara.say_and_wait([
            '걱정하지 마. 우라라는 처음부터 ',
            callname,
            '와의 차이 같은 건 신경 쓰지 않았으니까. 그래서 우라라도 용기를 내서 먼저 말할 수 있었던 거야.',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '는 여전히 ',
            me.get_colored_name(),
            '을(를) 보며 웃고 있었다. 마치 모든 것을 다 안다는 듯한 표정으로 ',
            me.get_colored_name(),
            '의 내면 가장 깊은 곳을 어루만져 주었다.',
          ]);
          await urara.say_and_wait([
            '그냥 이거면 충분해! ',
            callname,
            '도 그동안 고생 많았으니까, 우라라는 아무것도 필요 없어.',
          ]);
          await urara.say_and_wait([
            callname,
            ', 앞으로도 계속 잘 부탁해. 물론 전보다 한 단계 더 나아간 사이로서 말이야!',
          ]);
          await era.printAndWait([
            '결혼 행진곡이 울려 퍼짐과 동시에, 벚꽃빛 미소가 ',
            me.get_colored_name(),
            '의 시야를 가득 채웠다.',
          ]);
          await era.printAndWait(
            '그렇다. 보이지 않는 곳에서 꼬마 우라라는 이미 누군가와 평생을 함께할 준비를 마쳤던 것이다……',
          );
        } else {
          await urara.say_and_wait([
            '뭘 걱정하는 거야, ',
            callname,
            '? 이미 할 건 다 해놓고서, 이제 와서 우라라가 마음을 바꿀까 봐 무서워?',
          ]);
          await urara.say_and_wait([
            '그럴 리 없잖아! 우라라는 ',
            callname,
            '가 욕심쟁이라는 걸 아니까, 내가 직접 ',
            callname,
            ' 곁에 머물면서 답을 찾아낼 거야.',
          ]);
          await era.printAndWait([
            '여전히 ',
            me.get_colored_name(),
            '을(를) 바라보지 않은 채, ',
            urara.get_colored_name(),
            '는 울타리 너머 하늘을 바라보며 삶의 끝에 있을 무언가를 생각하는 듯했다.',
          ]);
          await urara.say_and_wait([
            '게다가 그런 사람이라 하더라도 나는 ',
            callname,
            '가 노력해 온 걸 다 보고 있었어. 그러니까 우라라는 아무것도 없어도 돼.',
          ]);
          await urara.say_and_wait([
            '조금 심한 말일지도 모르지만, 우라라가 보기엔 ',
            callname,
            '는 제대로 된 약속 같은 건 못할 것 같거든.',
          ]);
          await era.printAndWait([
            '결혼식 종소리가 울리고, 작은 ',
            urara.get_uma_sex_title(),
            '는 해탈한 듯한 사랑을 담은 미소를 띠며 ',
            me.get_colored_name(),
            '을(를) 향해 고개를 돌렸다.',
          ]);
          await era.printAndWait([
            '자신의 트레이너가 어떤 사람인지 다 알면서도, ',
            urara.get_colored_name(),
            '는 기꺼이 그와 함께하길 원하는 것인가……',
          ]);
        }
        era.println();
        await urara.say_and_wait([callname, ', 잠깐 눈 좀 감아봐!']);
        await era.printAndWait(
          '긴장으로 조금 떨리면서도 약속이라도 한 듯 두 사람은 눈을 감았다. 이윽고 결혼식의 주인공들과 겹쳐지는 입맞춤이 이어졌다.',
        );
        await era.printAndWait(
          '어쩌면 언젠가, 갈라진 평행선 밖의 두 사람도 이 성대한 의식의 주인공이 될 날이 올지도 모른다.',
        );
        await era.printAndWait(
          '미래가 미지수일지라도, 누구 하나 확답을 주지 않았을지라도, 행복이 희귀해질지라도.',
        );
        await era.printAndWait(
          '연인이 서로를 향한 결심을 굳혔다면, 남은 선택지는 손을 잡고 함께 나아가는 것뿐이었다.',
        );
        if (
          era
            .getAddedCharacters()
            .findIndex(
              (e) => e > 0 && e !== 52 && era.get(`love:${e}`) >= 75,
            ) !== -1
        ) {
          era.println();
          await urara.say_and_wait([
            '그나저나 ',
            callname,
            '는 정말 욕심쟁이라니까. 비록 이건 우라라의 선택이기도 하지만, 그래도 사람들이 우라라를 너무 탓하지 않았으면 좋겠어.',
          ]);
          await urara.say_and_wait([
            '하지만 우라라랑 ',
            callname,
            '는 이미 선택을 해버렸으니까, 이제 늦었네……',
          ]);
          await era.printAndWait([
            '입을 맞춘 뒤 연인의 귓가에 속삭이는 ',
            urara.get_teen_sex_title(),
            '의 미소에는 어딘가 씁쓸함이 묻어 있었다.',
          ]);
          era.drawLine();
          await in_urara.say_as_unknown_and_wait(
            '그 말대로군요. 당신은 참으로 잔인한 사람입니다. 하지만 조금은 기운을 내주세요. 왜냐하면……',
          );
        } else {
          era.drawLine();
        }
        await in_urara.say_as_unknown_and_wait('당신은 이제 되돌아갈 수 없으니까요……');
        await sys_love_uma_in_event(52);
      } else {
        await urara.say_and_wait(
          '지금은 안 되는구나…… 괜찮아, 우라라는 계속 기다릴게!',
        );
        await era.printAndWait([
          '애타는 기다림이 결실을 맺지 못하자 여전히 텅 빈 손바닥을 움켜쥐며, ',
          urara.get_colored_name(),
          '는 스스로를 위로하듯 다시 입을 열었다.',
        ]);
        await urara.say_and_wait([
          '그래도 언젠가 ',
          callname,
          '가 마음을 정하게 되면…… 꼭 우라라에게 제일 먼저 말해줘야 해!',
        ]);
        await urara.say_and_wait(
          '왜냐하면 우라라도 정말 큰 용기를 내서 말한 거니까……',
        );
        await era.printAndWait([
          '가장 좋아하는 ',
          callname,
          '를 차마 쳐다보지도 못한 채, 붉어진 눈시울을 그림자 속에 감춘 ',
          urara.get_colored_name(),
          '의 미소는 가늘게 떨리는 목소리와 함께 슬픔으로 물들었다.',
        ]);
        await urara.say_and_wait([
          '역시 조금은 슬프네…… 우라라, 정말로 ',
          callname,
          '랑……',
        ]);
        await era.printAndWait('이윽고, 억지로 지어 보이던 미소마저 점차 무너져 내렸다——');

        era.printButton(
          `「슬퍼하지 마, ${sys_get_callname(
            0,
            52,
          )}. 안 된다는 게 아니라, 단지 지금은 때가 아닐 뿐이야.」`,
          1,
        );
        await era.input();

        await urara.say_and_wait('……어?');
        await era.printAndWait([
          '예상치 못한 말에 ',
          urara.get_colored_name(),
          '의 떨리던 목소리가 멈췄다. 붉어진 눈동자에는 약간의 당혹감이 서려 있었다.',
        ]);
        era.println();
        if (relation > 150) {
          await urara.say_and_wait([
            '우라라는 ',
            callname,
            '가 이제 나한테 질린 줄 알았어. 다행히 그건 아니었구나……',
          ]);
          await era.printAndWait([
            '눈가의 눈물을 닦을 생각도 못한 채, 작은 ',
            urara.get_uma_sex_title(),
            '는 안도하며 ',
            callname,
            '의 품에 덥석 매달렸다.',
          ]);
          await era.printAndWait([
            '연인의 체온을 느끼며 안심하자, ',
            urara.get_colored_name(),
            '는 미움받을까 봐 두려워 폭주하던 마음을 점차 가라앉혔다.',
          ]);
        } else {
          await urara.say_and_wait([
            '어라, ',
            callname,
            ', 우라라를 버리려는 게 아니었어? 왠지 조금 기뻐……',
          ]);
          await era.printAndWait([
            '눈가의 눈물을 몰래 훔치며, ',
            urara.get_teen_sex_title(),
            '는 어떻게 그런 결론에 도달했는지 모를 말을 작게 웅얼거렸다.',
          ]);
          await era.printAndWait([
            '하지만 지금까지의 관계를 돌이켜보면, 어쩌면 ',
            urara.get_colored_name(),
            '가 그런 결론을 내린 것도 그리 이상한 일은 아닐지도 몰랐다……',
          ]);
        }
        era.printButton(
          `「그러니까 ${sys_get_callname(
            0,
            52,
          )}가 말한 대로, 적절한 때가 되면 내가 가장 먼저 ${sys_get_callname(
            52,
            0,
          )}에게 알려줄게!」`,
          1,
        );
        await era.input();

        await urara.say_and_wait('그럼…… 약속한 거다?');
        await era.printAndWait([
          '잠시 생각에 잠겼던 ',
          urara.get_colored_name(),
          '는 미소를 지으며 ',
          me.get_colored_name(),
          '에게 새끼손가락을 내밀었다.',
        ]);

        era.printButton('「약속할게!」', 1);
        await era.input();

        await era.printAndWait(
          '서로의 새끼손가락이 얽히자, 마치 두 사람의 인생에서 가장 중요한 약속을 축복하듯 결혼식장의 종소리가 다시 한번 울려 퍼졌다.',
        );
        await era.printAndWait([
          '이런 축복이 있다면, ',
          urara.sex,
          '와 맺어질 날도 분명 머지않아 찾아올 것이다. 하지만 그날은 과연 어떤 형태로 다가오게 될까……',
        ]);
        await urara.say_and_wait([
          '그치만 ',
          callname,
          '한테 거절당하고, 앞으로 남은 날 동안 ',
          callname,
          '의 애완동물처럼 취급받는 것도, 어쩌면……',
        ]);
        await urara.say_and_wait('아, 아니! 아냐, 아무것도 아냐!');
        await era.printAndWait([
          '방금 아무 말도 안 한 척 시치미를 떼는 ',
          urara.get_colored_name(),
          '를 보고 있자니, 왠지 약속의 날이 자신도 모르게 다시 멀어진 것 같은 기분이 들었다……',
        ]);
        era.drawLine();
        await in_urara.say_as_unknown_and_wait(
          '여기서 멈춘다고요?! 아니…… 아무것도 아닙니다……',
        );
        await in_urara.say_as_unknown_and_wait(
          '그런데 말인데요…… 당신은 어째서 이렇게 능숙하신 거죠?',
        );
        era.set('cflag:52:호감거절', 89);
        new UraraLifeMarks().active_89 = 1;
        await punish_rejecting_love(52);
      }
    }
  }
};