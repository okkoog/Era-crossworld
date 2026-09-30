const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const Love52UntilGirlFriend = require('#/event/love/love-events-52/until-girl-friend');
const print_event_name = require('#/event/snippets/print-event-name');

const UraraLifeMarks = require('#/data/event/life-event-marks/life-event-marks-52');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends Love52UntilGirlFriend {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} me
   */
  async 75(urara, me) {
    const { in_urara, relation } = this.get_event_vars();
    await print_event_name('점점 분명해지는 사랑', urara);
    new UraraLifeMarks().girl_friend = 1;
    await in_urara.say_as_unknown_and_wait(
      '설령 숨기고 감추더라도, 감정은 언젠가 꽃을 피우고 열매를 맺는 법입니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '그렇다면 그것이 현재진행형인 당신에게, 지금 문제를 하나 내보죠——',
    );
    await in_urara.say_as_unknown_and_wait('큰까마귀는 왜 책상하고 닮았을까요?');
    era.drawLine();
    await urara.print_and_wait([
      '구석진 곳의 벤치에 기대어 잠든 ',
      me.get_colored_name(),
      '을(를) 발견하고, 힘차게 달려오던 우라라는 조심스레 발소리를 죽였다.',
    ]);
    await urara.say_and_wait('에헤? 트레이너, 어젯밤에 또 제대로 못 잔 건가? 그럼 살금살금……');
    await urara.print_and_wait([
      '목소리를 낮추고 몰래 ',
      me.get_colored_name(),
      '의 곁으로 다가온 우라라는 벤치에 걸터앉아, 조용히 기다리며 ',
      me.get_colored_name(),
      '의 평온한 옆모습을 지켜보았다.',
    ]);
    await urara.print_and_wait([
      '몸이 서서히 달아오르고 따스한 감정이 다시금 가슴을 채운다. 만난 이래로 차곡차곡 쌓여온 경험 덕분에, 지금의 우라라는 이 고동이 무엇인지 충분히 이해하고 있었다.',
    ]);
    await urara.say_and_wait(
      '가만히 생각해보면, 지금 트레이너는 처음 만났을 때랑 비슷한 모습이라 왠지 인연이 느껴지네.',
    );
    await urara.print_and_wait([
      '깊게 잠든 ',
      me.get_colored_name(),
      '에게 천천히 다가가, 귀를 ',
      me.get_colored_name(),
      '의 몸에 대고 우라라는 ',
      me.get_colored_name(),
      '의 숨소리와 심장 박동에 귀를 기울였다.',
    ]);
    await urara.print_and_wait([
      me.get_colored_name(),
      '의 담당은 다시금 ',
      me.get_colored_name(),
      '괴(와) 처음 만났던, ',
      me.get_colored_name(),
      '이(가) 너무 노력한 나머지 쓰러졌던 그날을 떠올렸다.',
    ]);
    await urara.print_and_wait([
      '다만 이번에 재현된 만남 속에서, 우라라는 몸도 마음도 처음과는 완전히 달라져 있었다.',
    ]);
    era.println();
    if (relation > 75) {
      await urara.say_and_wait(
        '예전에는 잘 몰랐지만, 지금은 말야, 나 역시 트레이너를 좋아해.',
      );
      await urara.print_and_wait([
        '안심하며 ',
        me.get_colored_name(),
        '의 곁에 기댄 우라라는 마치 돌아갈 곳을 찾은 아이처럼 잠든 ',
        me.get_colored_name(),
        '을(를) 살며시 껴안았다.',
      ]);
      await urara.print_and_wait([
        '작은 ',
        urara.get_uma_sex_title(),
        '의 인간보다 약간 높은 체온이 사랑을 담은 포옹과 함께 친숙한 온기가 되어 ',
        me.get_colored_name(),
        '의 몸으로 스며들었다.',
      ]);
      await urara.print_and_wait([
        '트레이너가 우라라의 달리기를 바꿔주었으니까, 트레이너가 우라라에게 1착의 기쁨을 알려주었으니까.',
      ]);
      await urara.print_and_wait([
        '트레이너가 우라라의 생활을 바꿔주었으니까, 트레이너가 우라라에게 더 많은 사랑을 깨닫게 해주었으니까, 그래서……',
      ]);
      await urara.say_and_wait('앞으로도 내가 계속, 계속 좋아하게 해줘——');
    } else {
      await urara.say_and_wait('트레이너, 내가 계속 믿어도 되는 거지?');
      await urara.print_and_wait([
        '촉촉한 눈망울로 여전히 잠들어 있는 ',
        me.get_colored_name(),
        '을(를) 바라보며, 우라라는 대답을 기대하지 않는 질문을 중얼거렸다.',
      ]);
      await urara.print_and_wait([
        '작은 ',
        urara.get_uma_sex_title(),
        '가 그저 스스로를 다독이며 조금만 더 용기를 내어, ',
        urara.sex,
        '를 조금 불안하게 만드는 이 동경하는 사람에게 계속 다가가려 하고 있었다.',
      ]);
      await urara.print_and_wait([
        '마치 ',
        urara.sex,
        '의 첫 달리기처럼, 설령 소중히 여겨지지 않을지라도 ',
        urara.sex,
        '는 이 불안정한 사랑을 온 마음을 다해 껴안고 싶었다.',
      ]);
      await urara.print_and_wait([
        '설령 ',
        urara.sex,
        '가 아직 꽃봉오리에 불과한 나이라 해도, 설령 이 감정이 허무하게 버려질지라도, 설령 마지막에 ',
        me.get_colored_name(),
        '이(가)……',
      ]);
      await urara.say_and_wait('지금은 깨어나지 말아줘——');
    }
    era.println();
    await urara.say_and_wait('쪽……');
    await urara.print_and_wait([
      '사랑에 빠진 순진한 ',
      urara.get_teen_sex_title(),
      '의 수줍음과 용기를 담아, 담당의 가벼운 입맞춤이 막 깨어나려던 ',
      me.get_colored_name(),
      '의 이마 위로 떨어졌다.',
    ]);
    await urara.print_and_wait([
      '그것은 결코 격렬한 표현은 아니었으나, 성장을 통해 배운 우라라가 ',
      urara.sex,
      ' 나름대로 이해한 「진정한 사랑」을 ',
      me.get_colored_name(),
      '에게 바친 것이었다.',
    ]);
    era.drawLine();
    await urara.print_and_wait([
      '그리고 익숙한 향기 속에서 천천히 눈을 뜬 ',
      me.get_colored_name(),
      ' 역시, 담당의 가볍지만 묵직한 사랑을 분명하게 느꼈다.',
    ]);

    era.printButton('「……!」', 1);
    await era.input();

    await urara.say_and_wait('에헤헤~ 결국 트레이너한테 들켜버렸네, 미안해 트레이너!');
    await era.printAndWait([
      me.get_colored_name(),
      '에게 들킨 우라라는 마치 장난을 치다 걸린 아이처럼 수줍은 미소를 지었고, 지금 ',
      urara.get_teen_sex_title(),
      '의 뺨을 물들인 발그레한 수줍음은 그 어느 때보다 사랑스러웠다.',
    ]);
    await urara.say_and_wait(
      '제대로 설명하긴 어렵지만, 역시 이게 지금 내 트레이너에 대한 마음에 딱 어울리는 것 같아!',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 무릎 위에 마주 앉아, 아직은 서툰 꼬마 연인이 ',
      me.get_colored_name(),
      '에게 진심을 담아 자신의 감정을 맹세하고 있었다.',
    ]);
    await urara.say_and_wait(
      '트레이너에게 직접 말하고 싶은 것…… 지금은 잘 표현할 수 없지만, 나중에 꼭 해낼 수 있을 거야!',
    );
    await urara.say_and_wait('그러니까 트레이너, 조금만 더 기다려줘, 우라라를 더 기다려줘!');
    await era.printAndWait([
      me.get_colored_name(),
      '에게 마음에서 우러나오는 말을 전하려 애쓰며, 아직 완전히 자라지 않은 소녀는 차마 다 형언할 수 없는 사랑을 고백했다.',
    ]);
    await era.printAndWait([
      '모든 것을 완벽하게 전달하지 못했더라도 우라라가 전하고자 하는 감정은, 이미 이 순간의 ',
      me.get_colored_name(),
      '에게 충분히 전해져 있었다.',
    ]);

    era.printButton('「알고 있어, 그렇기에 나도 우라라를 기대하고 있을게.」', 1);
    await era.input();

    await era.printAndWait([
      '살며시 ',
      urara.get_teen_sex_title(),
      '의 손을 맞잡고 촉촉한 벚꽃색 눈동자를 직시하며, ',
      me.get_colored_name(),
      ' 역시 망설임 없이 우라라에게 「어른의 약속」을 건넸다.',
    ]);
    await era.printAndWait([
      '오늘의 두 사람, 그리고 앞으로의 두 사람은 어쩌면 지금부터가 시작일지도 모른다.',
    ]);

    const love_30 =
        (era.get('cflag:30:모집상태') === recruit_flags.yes &&
          era.get('love:30')) >= 75,
      love_61 =
        (era.get('cflag:61:모집상태') === recruit_flags.yes &&
          era.get('love:61')) >= 75;
    if (love_30 || love_61) {
      era.println();
      await era.printAndWait([
        '다만 트레이너인 ',
        me.get_adult_sex_title(),
        '이(가) 시선을 돌린 찰나, 어린 ',
        urara.get_uma_sex_title(),
        '의 순수한 미소 속에 아주 잠깐 알아채기 힘든 어두운 빛이 스쳐 지나갔다.',
      ]);
      await era.printAndWait([
        '가장 좋아하는 사람의 옆모습을 응시하던 ',
        urara.get_teen_sex_title(),
        '의 뇌리에, 가장 어울리지 않는 순간에 가장 어울리지 않는 광경이 떠올랐다.',
      ]);
      await era.printAndWait([
        '그것은 가여운 ',
        urara.sex,
        '가 가장 떠올리고 싶지 않았던, 하지만 되새겨질 때마다 가슴을 옥죄고 다리를 붙들어 타인이 멀어져 가는 것을 지켜볼 수밖에 없었던 기억이었다.',
      ]);
      if (love_30) {
        era.println();
        const callname_30 = sys_get_colored_callname(52, 30);
        await urara.say_and_wait(
          [
            callname_30,
            '도 이렇게 트레이너를 좋아하고 있겠지, 그럼 ',
            callname_30,
            '도 분명 트레이너에게 이렇게 하겠지! 이렇게 트레이너에게 마음을…… 좋아한다고 표현할까?',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '트레이너와 함께 걷는 『',
            callname_30,
            '』, 트레이너와 친밀하게 지내는 『',
            {
              color: callname_30.color,
              content: '라이스 샤워 씨',
              fontWeight: 'bold',
            },
            '』, 트레이너와 그림자가 겹쳐지는 『',
            {
              color: callname_30.color,
              content: '검은색의——',
              fontWeight: 'bold',
            },
            '』……!',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '하지만 ',
            callname_30,
            '은 그런 게 아냐, ',
            callname_30,
            '은 모두의 『영웅』인걸! ',
            urara.sex,
            '는 이미 트레이너랑 약속했으니까……',
          ],
          true,
        );
      }
      if (love_61) {
        era.println();
        const callname_61 = sys_get_colored_callname(52, 61);
        await urara.say_and_wait(
          [
            callname_61,
            '은 역시 트레이너를 좋아해. 어쩌면 아직 어린 우라라보다 트레이너 옆에 더 잘 어울릴지도 몰라, 하지만……',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '본 적 없는 표정을 짓는 『',
            callname_61,
            '』, 트레이너와 서로 껴안는 『',
            {
              color: callname_61.color,
              content: '킹 헤일로 씨',
              fontWeight: 'bold',
            },
            '』, 트레이너와 점점 밀착되는 『',
            {
              color: callname_61.color,
              content: '삼류의——',
              fontWeight: 'bold',
            },
            '』……!',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '아냐! 절대 그렇지 않아! ',
            callname_61,
            '은 누구보다도 훌륭해! ',
            callname_61,
            '이야말로 누구보다도 트레이너에게 어울리는 사람인데……',
          ],
          true,
        );
      }
      if (love_30 && love_61) {
        era.println();
        await urara.say_and_wait(
          '두 사람 다 역시 트레이너를 좋아하고 있겠지…… 하지만 너무 괴로워…… 괴로워서 머리가 아파…… 괴로워서 토할 것 같아……',
          true,
        );
        await urara.say_and_wait(
          '그런데 우라라는 왜 괴로워하는 거지? 우라라는 기뻐해야 하는 거 아냐?',
          true,
        );
        await urara.say_and_wait(
          '우라라는 왜 가장 소중한 친구들을 저주하고 싶은 걸까…… 하지만 질투 같은 거, 나중에 온 우라라가 가질 자격 따윈 없잖아……?',
          true,
        );
      }
      era.println();
      await urara.say_and_wait(
        '사이에 끼어들고 싶어 하고, 친구들의 좋아하는 마음을 망치고 싶어 하는, 정말로 나쁜 짓을 하는 심술궂은 녀석은……?',
        true,
      );
      await urara.say_and_wait(
        '뭔가 잊어버린 것 같아. 분명 이래선 안 되는데, 하지만 트레이너가 우라라를 기다려준다고 했어! 하지만 트레이너……!',
        true,
      );

      era.printButton('「우라라? 왜 그래? 몸이라도 안 좋은 거야?」', 1);
      await era.input();

      await era.printAndWait([
        me.get_colored_name(),
        '의 부름에, 우라라의 얼굴에 서려 있던 알아채기 힘든 혼돈은 깃털처럼 가볍게 흩어졌다.',
      ]);
      await era.printAndWait([
        '하지만 결코 아름답지 않은, 언젠가 그 뿌리로 ',
        urara.get_teen_sex_title(),
        '의 마음을 갉아먹을 검은 씨앗이 이미 우라라의 내면에 깊이 박히고 말았다.',
      ]);
      await urara.say_and_wait('미안해…… 하지만 우라라는 이미……');
      await era.printAndWait([
        '우라라는 앞으로 다가와 ',
        me.get_colored_name(),
        '이(가) 내민 손을 맞잡았다. 밝은 미소 아래, 열등감 섞인 미안함은 두 사람의 뒤편으로 부는 바람 속으로 사라져 갔다……',
      ]);
    }
  }
};