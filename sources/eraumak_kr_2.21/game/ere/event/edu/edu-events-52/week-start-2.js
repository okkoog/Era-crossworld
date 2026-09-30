const era = require('#/era-electron');

const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { attr_enum } = require('#/data/train-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 1] = async (urara, me, in_urara, callname) => {
    era.set('cflag:52:축제이벤트표시', 0);
    await print_event_name('새해의 포부', urara);
    await in_urara.say_as_unknown_and_wait(
      '타인과의 관계에 대해서는 제가 평가하지 않겠습니다만, 우라라의 곁에서라면 당신은 의외로 행복한 사람이 될 수 있을지도 모르겠군요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하아? 우라라의 엄마…… 그런 게 아니에요. 우라라의 『엄마들』이 화를 낼 테니까요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '죄송합니다, 조금 흥분했네요. 1년에 한번 뿐인 새해니까요——',
    );
    era.drawLine();
    await urara.print_and_wait([
      '과자가 가득 든 봉투를 들고 문 앞에 선 ',
      urara.get_colored_name(),
      '는 깊은 생각에 잠긴 듯 귀를 쫑긋거리며, ',
      callname,
      '를 만난 뒤 어떤 깜짝 선물을 줄지 고민하고 있었다.',
    ]);
    await urara.print_and_wait([
      sys_get_colored_callname(52, 61),
      '이 중요한 감사는 반드시 격식을 차려야 한다고 했기에, ',
      urara.get_colored_name(),
      '는 이번 새해를 빌어 ',
      callname,
      '에게 다시 한번 진심을 전하고 싶어 했다.',
    ]);
    await urara.print_and_wait(
      '이번에는 딱 적당한 양의 쿠키를 구웠지만, 과연 둘이서 먹기에 충분할까? 그리고 똑같은 일을 반복하는 게 정말 깜짝 선물이 될 수 있을까?',
    );
    await urara.print_and_wait([
      '그래도 지난번에 칭찬받았으니까, ',
      callname,
      '가 좋아해 주기만 하면 되겠지! ',
      sys_get_colored_callname(52, 30),
      '이랑 ',
      sys_get_colored_callname(52, 77),
      '도 선물은 마음이 제일 중요하다고 했으니까!',
    ]);
    await urara.print_and_wait([
      '맞아! 선물도 준비됐고, 감사 인사도 외웠으니 문제없어! ',
      callname,
      ' 습격 준비 OK, 우라라 GO!',
    ]);
    await urara.print_and_wait([
      '심호흡을 크게 하고 마음속으로 「정중한 감사」의 과정을 예행연습하며, 꼬마 ',
      urara.get_uma_sex_title(),
      '는 천천히 ',
      callname,
      '의 집 벨로 손을 뻗었다……',
    ]);
    era.drawLine();
    await era.printAndWait([
      '그때, 문앞에 꼬마 ',
      urara.get_uma_sex_title(),
      '가 서서 한참을 움직이지 않는 것을 발견한 ',
      me.get_colored_name(),
      '이(가) 먼저 문을 열었고, 역습에 성공하여 상대방을 깜짝 놀라게 했다.',
    ]);
    await urara.say_and_wait([
      '에헤? ',
      callname,
      '…… 새해 복 많이 받아! 그게…… 그리고! 작년에는 ',
      callname,
      '가 돌봐준 덕분에 즐거웠어! 다, 다음은……',
    ]);

    era.printButton(
      '「고마워! 아무튼 얼른 들어와. 밖이 이렇게 추운데 무리하지 않아도 괜찮으니까.」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '계획을 들켜서 어쩔 줄 몰라 하는 ',
      urara.get_teen_sex_title(),
      '를 따뜻한 실내로 들인 뒤, ',
      me.get_colored_name(),
      '은(는) 웃으며 따뜻한 손으로 꼬마 ',
      urara.get_uma_sex_title(),
      '의 차갑게 얼어붙은 붉은 뺨을 감싸주었다.',
    ]);
    await era.printAndWait([
      '차갑던 뺨이 점차 녹아내림에 따라, ',
      urara.get_colored_name(),
      '의 얼굴에 머물던 굳은 미소도 평소의 따스하고 밝은 곡선을 되찾아갔다.',
    ]);
    await urara.say_and_wait([
      '헤헤~ 미안해 ',
      callname,
      '. 나머지는 역시 생각이 안 나네……',
    ]);

    era.printButton(
      '「괜찮아, 고마운 마음은 충분히 전해졌으니까. 그리고 『Simple is best』라고들 하잖아.」',
      1,
    );
    await era.input();

    if (era.get('abl:52:영어') < 2) {
      await urara.say_and_wait('심……? 음…… 그게 무슨 뜻이었더라?');
      await era.printAndWait([
        '최소한 ',
        urara.get_colored_name(),
        '의 영어 실력이 좋지 않다는 점은 예상 범위 안이었다. 쓴웃음을 지으며 ',
        urara.get_teen_sex_title(),
        '의 머리를 쓰다듬은 ',
        me.get_colored_name(),
        '은(는) ',
        urara.sex,
        '의 손에 들린 과자 봉투를 받아 들었다.',
      ]);
    }
    await era.printAndWait([
      '아기자기하게 만든 수제 쿠키를 신선한 귤과 함께 탁자 위에 차려놓자, 옆에 놓인 작은 화로도 떡을 구울 준비를 마쳤다.',
    ]);
    await era.printAndWait([
      '호기심 가득한 눈으로 ',
      callname,
      '의 집안을 구경하던 꼬마 ',
      urara.get_uma_sex_title(),
      '도 금방 따뜻해진 분위기 속에서 처음의 긴장감을 털어냈다.',
    ]);
    await era.printAndWait([
      '탁자에 둘러앉아 과자와 과일을 먹으며, 변함없는 안도감 속에서 ',
      me.get_colored_name(),
      '과(와) ',
      urara.get_colored_name(),
      '는 이런저런 이야기를 도란도란 나누었다.',
    ]);
    await era.printAndWait([
      '연말에 새해도 함께 보내기로 약속하고 ',
      urara.get_colored_name(),
      '를 자신의 집으로 초대한 것은 참으로 괜찮은 결정이었다.',
    ]);
    await era.printAndWait([
      '부풀어 오르는 떡을 눈을 반짝이며 쳐다보는 ',
      urara.get_colored_name(),
      '를 보니, ',
      me.get_colored_name(),
      '은(는) 마치 귀여운 소동물을 보는 듯한 기분이 들었다.',
    ]);

    era.printButton('「우라라, 이번 새해에는 앞으로의 나날에 대해 어떤…… 포부가 있어?」', 1);
    await era.input();

    await era.printAndWait([
      '잘 구워진 떡 한 조각을 ',
      urara.get_colored_name(),
      '의 그릇에 담아주며, ',
      me.get_colored_name(),
      '은(는) 젓가락으로 떡을 쿡쿡 찌르는 작은 ',
      urara.get_colored_name(),
      '와 함께 다음 화제를 꺼냈다.',
    ]);
    await urara.say_and_wait(
      '『포』, 『부』? 그게 뭐였더라…… 아, 혹시 슈크림 퍼프(빵) 이야기하는 거야?',
    );
    await era.printAndWait([
      '길게 늘어나는 떡을 입에 문 채, ',
      urara.get_colored_name(),
      '는 고개를 갸웃거리며 질문을 되돌려주었다.',
    ]);

    era.printButton(
      '「……알았어, 슈크림은 다음에 사 줄게.『포부』는 올해의 목표를 말하는 거야.」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '아하, 목표였구나! 그렇다면 전에도 말했던 거랑 똑같아! 계속해서 마음껏 달리고, 1등도 잔뜩 할 거야!',
    );
    await urara.say_and_wait([
      '열심히 달릴게! ',
      callname,
      '도 계속 우라라를 도와줄 거지? 모두를 기쁘게 만들어 주자!',
    ]);
    await era.printAndWait([
      '하지만 그건 우리가 계약한 이래로 계속 해오던 일이 아닌가. ',
      urara.get_colored_name(),
      '의 사랑스러운 미소 앞에서 ',
      me.get_colored_name(),
      '은(는) 조금 어이가 없으면서도 웃음이 났다.',
    ]);
    await era.printAndWait([
      urara.sex,
      '의 말투는 여전히 두루뭉술했다. 천진난만한 것인지, 아니면 나름 생각이 있지만 너무 많이 생략해 버린 것인지 알 길은 없었다.',
    ]);
    await era.printAndWait([
      '그러나 시간은 기다려주지 않는다. 담당이 준비되었다고 하니, 이제 다음 행동 계획을 세워야 할 때였다.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '그럼 수수께끼 풀이에 능숙하신 트레이너 ',
      me.get_adult_sex_title(),
      '께서는 조만간 우라라에게 가장 어울리는 활동이 무엇이라 생각하시나요——',
    ]);
    era.printButton(
      '「그나저나, 지난번 기말고사 성적은 어때? 좀 올랐어?」（근성 +10）',
      1,
    );
    era.printButton(
      '「이제 새해잖아. 모처럼 한가해졌으니 좀 더 푹 쉬는 건 어때?」（스태미나 +10）',
      2,
    );
    era.printButton(
      '「그러고 보니 우라라는 요즘 쉴 때 만화나 애니 같은거 봐?」（스킬 포인트 +20）',
      3,
    );
    const attr_change = new Array(5).fill(0);
    let pt_change = 0;
    switch (await era.input()) {
      case 1:
        attr_change[attr_enum.toughness] = 10;
        await urara.say_and_wait('에에에에에~!?');
        await era.printAndWait(
          '새해에 공부 이야기를 꺼내다니, 실로 악귀 같은 계략이다! 세상에서 가장 미운 어른이 있다면 바로 이런 사람일 것이다!',
        );
        await era.printAndWait([
          callname,
          '의 무심한 듯한 질문에, 긍정의 아이콘인 ',
          urara.get_colored_name(),
          '조차 커다란 동요에 휩싸였다!',
        ]);
        await era.printAndWait([
          '물론 ',
          me.get_colored_name(),
          '은(는) 이미 ',
          urara.get_colored_name(),
          '의 학습 상태를 잘 알고 있었고, 이 질문은 단지 「작심삼일 ',
          urara.get_teen_sex_title(),
          '」를 향한 작은 경고에 불과했다.',
        ]);
        if (era.get('abl:52:영어') < 2) {
          await era.printAndWait(
            '무엇보다 그렇게 간단한 영어조차 모르는 건 조금 위험하다는 생각이 들었다. 교육자로서 방치할 수 없는 노릇이다.',
          );
        }

        era.printButton(
          '「겁내지 마, 혼내려는 게 아니니까. 아무튼 조금씩 극복해 보자. 의욕만 있다면 나아질 수 있을 거야.」',
          1,
        );
        await era.input();

        await urara.say_and_wait(
          '우으…… 하지만 달리기랑 레이스가 훨씬 더 재미있는걸! 그래도, 그래도…… 알았어……',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '여, ',
          callname,
          '를 비겁하다고 탓하지 말기를. 담당을 기 죽이려는 것이 아니라, 작심삼일보다는 끈기 있게 임해야 더 빨리 달릴 수 있는 법이니까.',
        ]);
        await era.printAndWait([
          '가여운 ',
          urara.get_uma_sex_title(),
          '의 눈가에 맺힌 억울함의 벚꽃과 떡을 잔뜩 먹어 햄스터처럼 부푼 뺨을 보며, ',
          me.get_colored_name(),
          '은(는) 찔리는 마음을 감추고 시선을 돌렸다.',
        ]);
        await urara.say_and_wait([
          '너무해…… 나는 ',
          callname,
          ' 집에서 자고 가고 싶었는데……',
        ]);
        await me.say_and_wait('아니, 그러니까…… 응?!');
        break;
      case 2:
        attr_change[attr_enum.endurance] = 10;
        await urara.say_and_wait('응? 좀 더 쉬어야 해? 하지만 난 항상 잘 자고 있는데!');

        era.printButton(
          '「모처럼의 새해니까, 건강하게 마무리하는 게 제일이지. 쉴 기회가 있을 때는 서두를 필요 없어.」',
          1,
        );
        await era.input();

        await era.printAndWait([
          '훌륭한 레이스 ',
          urara.get_uma_sex_title(),
          '에게 가장 중요한 것은 건강이다. 휴식에 적극적이지 않으면, 평소에 아무리 연습해도 부상을 입었을 때 아무 소용이 없게 된다.',
        ]);
        await era.printAndWait([
          '게다가 앞으로의 트레이닝 강도는 점점 높아질 텐데, 건강을 유지하는 것은 무척 중요하다. 특히 ',
          urara.get_colored_name(),
          '에게는 더더욱.',
        ]);
        await urara.say_and_wait([
          '그럼…… ',
          callname,
          '가 그렇게 말한다면, 앞으로는 ',
          callname,
          '랑 더 많이 쉬어도 되겠네?',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 한창 자랄 아이니까 잠을 좀 더 자라는 뜻으로 말한 것이었지만, ',
          urara.get_colored_name(),
          '가 그러겠다면 굳이 거절할 이유도 없었다.',
        ]);
        await urara.say_and_wait([
          '그래서 마침 오늘도 ',
          callname,
          '의 집에서 자고 갈 준비를 해 왔어!',
        ]);
        await era.printAndWait([
          '그렇다면 그것도 나쁘지 않을…… 잠깐만? 방금 마지막에 뭐라고 했지?',
        ]);
        break;
      case 3:
        pt_change = 20;
        await urara.say_and_wait([
          '음…… 요즘은 ',
          sys_get_colored_callname(52, 15),
          '이 추천해 준 애니메이션을 보고 있어! 레이싱 애니야! 그리고 또 있잖아……',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 흥분 섞인 설명을 들으며 스마트폰을 꺼낸 ',
          me.get_colored_name(),
          '은(는) 금방 그 레이싱 소재의 SF 작품을 찾아냈다.',
        ]);
        await era.printAndWait(
          '드라이버와 AI의 조화, AI가 주도하는 레이스인가 아니면 AI가 전적으로 서포트하는가에 대한 신념의 대립, 모든 것을 건 숙명의 라이벌 대결……',
        );
        await era.printAndWait([
          '트레이닝에 활용할 만한 영감을 얻을 수 있을지도 모르겠다, 이걸로 정했어! 그런데 설마 ',
          get_chara_talk(15).get_colored_name(),
          '가 이런 장르의 애니메이션을 추천할 줄이야.',
        ]);
        await urara.say_and_wait([
          '맞다 ',
          callname,
          ', 마침 오늘 밤에 자고 갈 거니까, 저녁에 같이 보자!',
        ]);

        era.printButton('「좋아! 과자 다 먹으면 같이 보자……가 아니라, 뭐라고?」', 1);
        await era.input();
    }
    era.println();
    await urara.say_and_wait([
      '앗! ',
      callname,
      '한테 말하는 걸 깜빡했다! 괜찮아, 이미 모두에게 이야기해 뒀고, 외박 신청도 다 끝냈어!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 뒤늦게 정신을 차리고 놀란 표정을 짓자, 꼬마 ',
      urara.get_uma_sex_title(),
      '는 ',
      me.get_colored_name(),
      '이(가) 준비가 덜 됐을까 봐 걱정하는 줄 알고 서둘러 설명을 덧붙였다.',
    ]);

    era.printButton(
      '「아니, 잠깐만. 그런 뜻이 아니라…… 그게, 만약 네 트레이너가 나쁜 사람이라면 어쩔 생각이야?」',
      1,
    );
    await era.input();

    await urara.say_and_wait(['에? 그러니까 ', callname, '는...스스로가 나쁜 사람이라고 생각하는 거야?']);
    era.println();
    if (era.get('relation:52:0') > 150) {
      await era.printAndWait([
        '사실 ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '가 아무리 ',
        urara.get_uma_sex_title(),
        '라 해도 스스로를 잘 보호해야 하며, 고작 반년 정도 알고 지낸 성인을 너무 쉽게 믿지 말라는 말을 하고 싶었다.',
      ]);
      await era.printAndWait(
        '사회적으로 그런 사례는 차고 넘치며, 매일 같이 지내는 트레이너라 할지라도 그 속내를 전부 알 수는 없는 법이다.',
      );
      await era.printAndWait([
        '하지만 자신이 정말 나쁜 사람인지는…… 눈앞에 있는 ',
        urara.get_colored_name(),
        '의 미소를 마주하고 있으면, 설령 그렇다 한들 ',
        urara.sex,
        ' 앞에서 인정하기란 쉽지 않은 일이었다.',
      ]);
      await era.printAndWait([
        '게다가 처음 만났을 때, 누군가는 분명 당시엔 생판 남이었던 꼬마 ',
        urara.get_uma_sex_title(),
        '에게 음흉한 짓을 하려 했었다……',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        '가 고작 반년 알고 지낸 성인을 함부로 믿지 않길 바라는 의도였으나, 이 말이 ',
        me.get_colored_name(),
        '의 입에서 나오는 것은 아무래도 어색한 일이었다.',
      ]);
      await era.printAndWait([
        '어쩌면 자신은 정말 나쁜 사람일까? 아무튼 ',
        urara.get_colored_name(),
        '에게 이런 훈계를 할 때, ',
        me.get_colored_name(),
        '은(는) 자신의 지금까지의 언행으로부터 자유로울 수 없었다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 겉으로는 계속 친근하게 행동하고 있었지만, ',
        me.get_colored_name(),
        '은(는) ',
        urara.sex,
        '가 웃는 얼굴만큼 정말로 즐거워하는 것은 아님을 잘 알고 있었다.',
      ]);
      await era.printAndWait([
        '어쩌면 지금까지도 꼬마 ',
        urara.get_uma_sex_title(),
        '는 가라앉은 기분을 억지로 참고서 ',
        urara.sex,
        '의 트레이너 곁에 붙어 있는 것인지도 모른다.',
      ]);
    }
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 침묵에 빠진 이유를 눈치챈 듯, ',
      urara.get_colored_name(),
      '는 웃으며 젓가락을 내려놓고 의자를 끌어 ',
      me.get_colored_name(),
      '의 바로 옆에 나란히 앉았다.',
    ]);
    await urara.say_and_wait([
      '나쁜 사람이어도 상관없어! 나는 ',
      callname,
      '를 믿고 싶으니까!',
    ]);

    era.printButton('「이건 믿음만으로 해결될 문제가 아닌데……」', 1);
    await era.input();

    await urara.say_and_wait([
      '하지만 나는 감정만으로 ',
      callname,
      '를 멀리하고 싶지 않아. 설령 ',
      callname,
      '가 나쁜 사람이라도, 우라라는 ',
      callname,
      ' 옆에 꼭 붙어 있을 거야!',
    ]);
    await urara.say_and_wait([
      '그리고 우라라를 도와주는 ',
      callname,
      '가 그렇게 나쁜 사람일 리 없잖아! 그러니까 나쁜 사람이라도, 분명 좋은 사람이 될 수 있을 거야!',
    ]);
    await urara.say_and_wait([
      '그러니까 나랑 ',
      callname,
      '는 함께야! 우리 둘이라면 분명 이인삼각……? 처럼 계속 나아갈 수 있을 거야!',
    ]);
    await era.printAndWait([
      '지금의 ',
      urara.get_colored_name(),
      '는 마치 특촬물의 영웅처럼 반짝반짝 빛나고 있었다. 아니, 어쩌면 처음부터 항상 이런 모습이었을지도 모른다.',
    ]);
    await era.printAndWait([
      '그건 그렇고, 이인삼각? ',
      urara.get_colored_name(),
      '가 대체 어떻게 그런 단어를 알고 있는 거지? 누가 가르쳐 준 걸까?',
    ]);
    if (
      era.get('exp:52:성관계횟수') > era.get('exp:52:수면간횟수') ||
      era.get('love:52') >= 50
    ) {
      await urara.say_and_wait([
        '그리고 알고 지낸 지 반년밖에 안 됐다고 하지만, ',
        callname,
        '는 이미 우라라한테 이런저런 짓을 잔뜩 했잖아?',
      ]);
      await urara.say_and_wait([
        '우라라도 전혀 무서워하지 않는데, ',
        callname,
        '가 오히려 겁을 먹고 도망치려 하다니! 설마 ',
        callname,
        ', 부끄럼쟁이인 거야?',
      ]);
      await era.printAndWait([
        '하아, 이거 정말 ',
        urara.get_colored_name(),
        '에게 아픈 곳을 찔리고 말았다. 이 명백한 사실 앞에서 ',
        me.get_colored_name(),
        '은(는) 그저 쓴웃음을 지을 수밖에 없었다.',
      ]);
    }
    era.println();
    era.printButton(
      '「음…… 하지만 이런 가능성도 있어. 만약 네 트레이너가 사실은 우라라를 잡아먹고 싶어 하는 늑대라면?」',
      1,
    );
    await era.input();

    await era.printAndWait([
      '무엇인가 떠오른 것인지 아니면 그저 대화를 이어가고 싶은 것인지, ',
      me.get_colored_name(),
      '은(는) 이전보다 진지한 표정으로 질문을 이어갔다.',
    ]);
    await urara.say_and_wait([
      '늑대는 정말 무섭지! 정말로 그럴 거야? 그럼 우라라는 빨간 망토가 되는 건가?',
    ]);
    await urara.say_and_wait([
      '에헤헤~ ',
      callname,
      '가 우라라를 잡아먹겠다고 하니까, 우라라는 과연 기대해야 할까 말아야 할까?',
    ]);
    if (era.get('exp:52:성관계횟수') > era.get('exp:52:수면간횟수')) {
      await urara.say_and_wait(
        '아, 깜빡 잊고 있었네! 늑대는 사실 이미 빨간 망토를 잡아먹어 버렸잖아!',
      );
      await urara.say_and_wait([
        '그럼 늑대 ',
        me.get_adult_sex_title(),
        ', 우라라는 맛있었어?',
      ]);
    }
    era.println();
    await era.printAndWait([
      '예상 밖이었다. 분명 ',
      me.get_colored_name(),
      '의 곁에 딱 붙어 있으면서도, ',
      urara.get_colored_name(),
      '는 천진난만하게 웃으며 도발적인 반격을 가해 왔다.',
    ]);
    await era.printAndWait([
      '전혀 믿지 않는다는 듯 순수한 표정을 지으며, ',
      urara.get_colored_name(),
      '는 장난스럽게 윙크를 했다. 그 얼굴에는 「작은 ',
      urara.sex_code - 1 ? '소녀' : '소년',
      '의 의기양양함」이 가득했다.',
    ]);
    await era.printAndWait(
      '아무래도 어린아이와 기 싸움을 하는 것은 좋지 않지만, 적절하게 자신의 위치를 되찾아줄 필요는 있을 것 같다.',
    );
    await era.printAndWait([
      '장난스러운 마음을 품고 자리에서 일어나, ',
      urara.get_colored_name(),
      '가 반응할 틈도 주지 않고 ',
      me.get_colored_name(),
      '은(는) 손을 뻗어 ',
      urara.sex,
      '를 품에 껴안았다.',
    ]);

    era.printButton(
      `「우라라가 그렇게 말한다면, 트레이너는 지금 당장 맛을 봐도 되겠네.」`,
      1,
    );
    await era.input();

    await urara.say_and_wait(['에, 에헤? ', callname, '……?']);
    await era.printAndWait([
      urara.get_teen_sex_title(),
      '의 당황한 반응은 아랑곳하지 않고, ',
      me.get_colored_name(),
      '은(는) 공주님 안기 방식으로 ',
      urara.sex,
      '를 들어 올려 침대가 놓인 방으로 가볍게 데려갔다.',
    ]);
    await era.printAndWait([
      '품 안에서 의외로 가볍던 ',
      urara.get_colored_name(),
      '를 「무심코」 침대 위로 던져버리고, ',
      me.get_colored_name(),
      '은(는) 뒤돌아 침실 문을 「세게」 닫아버렸다.',
    ]);
    await era.printAndWait([
      '침대 위로 몸이 쓰러지는 순간, ',
      urara.get_teen_sex_title(),
      '의 표정은 수줍음을 담은 당혹감에서 공포가 섞인 홍조로 변했다.',
    ]);
    await era.printAndWait([
      '저항하는 것조차 잊은 것인지, 불순한 의도를 마주한 꼬마 ',
      urara.get_uma_sex_title(),
      '는 그저 귀를 접고 꼬리를 만 채 침대 위에서 겁먹은 듯 몸을 웅크렸다.',
    ]);
    await urara.say_and_wait([
      callname,
      '? 우라라는 아직 자고 싶지 않은걸? ',
      callname,
      '……? 꺄악~',
    ]);
    await era.printAndWait([
      '이어진 ',
      urara.get_teen_sex_title(),
      '의 가냘픈 비명 속에서, 당황하여 어쩔 줄 모르던 ',
      urara.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '에게 두 손목을 붙잡힌 채 거칠게 침대 위로 짓눌렸다.',
    ]);
    await era.printAndWait([
      '평소 가장 가깝게 지내던 어른의 몸 아래에 깔려 점차 압박해 오는 온기를 느끼며, ',
      urara.get_teen_sex_title(),
      '의 커다랗게 뜬 눈동자에 눈물이 고이기 시작했다.',
    ]);
    era.println();
    if (era.get('talent:52:고통좋아함') || era.get('exp:52:피학절정횟수') >= 2) {
      await urara.say_and_wait(
        '잡아먹힐 것 같아, 빨리 반항해야 하는데…… 하지만 몸이 이번에도 말을 듣지 않고 제멋대로 움직여……',
        true,
      );
      await urara.say_and_wait([
        '화가 난 ',
        callname,
        '는 나한테 뭘 하려는 걸까? 우라라에게 예전보다 더 잔인한 짓을 할까?',
      ]);
      await urara.say_and_wait([
        '어쩌면 이번에는 ',
        callname,
        '가 나를 가둬버릴지도 몰라. 나중에 모두를 다시 만날 때쯤이면, 몸도 마음도 망가져 버렸을지도 모르겠네.',
      ]);
      await urara.say_and_wait(
        '그런데 그런 생각을 할 때마다 몸이 떨릴 정도로 흥분돼. 어쩌면 나는 이미 예전에 망가져 버린 건지도 몰라……',
      );
      await urara.say_and_wait('분명히…… 조금만 더 상냥하게 해 줬으면 좋았을 텐데……', true);
    } else if (era.get('exp:52:성관계횟수') > era.get('exp:52:수면간횟수')) {
      await urara.say_and_wait(
        [callname, ' 여기서 그런 짓을 하려는 거야? ', callname, ' 지금 정말 이상해……'],
        true,
      );
      await urara.say_and_wait(
        [
          '분명 지금 이러면 안 되는데, 몸에 힘이 쭉 빠져버려. 게다가 ',
          callname,
          '는 이런 짓을 할 때도 항상 다정했으니까……',
        ],
        true,
      );
      await urara.say_and_wait(
        '우라라, 거칠게 다뤄지는 걸까? 많이 아플까? 아주 무서운 일이 일어날까?',
        true,
      );
      await urara.say_and_wait(
        '그런데 왜 이런저런 일을 당할 거라 생각하면, 몸이 뜨거워서 견딜 수 없게 되는 걸까?',
        true,
      );
      await urara.say_and_wait(
        [callname, '가 꼭 해야겠다면, 그럼 우라라도……'],
        true,
      );
    } else {
      await urara.say_and_wait(
        [
          '지금 당장 뿌리치고 도망쳐야 해. 아무리 ',
          callname,
          '라도 이건 안 돼. 그런데 왜 ',
          callname,
          '를 보고 있으면 팔다리에 힘이 들어가지 않는 걸까……',
        ],
        true,
      );
      await urara.say_and_wait(
        '가슴이 아플 정도로 두근거려. 그런데 몸은 흐물흐물해져서, 마치…… 이 사람에게 잡아먹혀도 상관없다는 기분이 들어……',
        true,
      );
      await urara.say_and_wait(
        [
          '우라라는 이제 옷이 찢겨나가고 강제로 치욕스러운 일을 당하게 되겠지. 마치 ',
          sys_get_colored_callname(52, 30),
          '이 몰래 숨겨둔 만화 속 여주인공이 겪었던 것처럼……',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          '어른의 냄새가 너무 가까워…… ',
          callname,
          '의 냄새는 정말 기분 좋아서, 반항하고 싶지 않을 정도로 편안해. 왜 이럴까……',
        ],
        true,
      );
      await urara.say_and_wait(
        ['정말로 이대로 괜찮은 걸까? ', callname, '에게 몸을 맡겨버리는 건……'],
        true,
      );
    }
    era.println();
    await era.printAndWait([
      '마치 운명을 받아들인 듯, ',
      urara.get_teen_sex_title(),
      '는 ',
      me.get_colored_name(),
      ' 아래에서 조용히 눈을 감았다.',
    ]);
    await era.printAndWait([
      '하지만 가여운 ',
      urara.get_uma_sex_title(),
      '가 상상한 처참한 일은 일어나지 않았다. ',
      urara.get_colored_name(),
      '의 손을 놓아주고, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_teen_sex_title(),
      '의 이마를 「톡」하고 가볍게 튕겼다.',
    ]);
    await urara.say_and_wait('꺄앗?');
    await era.printAndWait([
      '깜짝 놀라 눈물이 맺힌 눈을 뜬 ',
      urara.get_colored_name(),
      '의 눈앞에는, 평소의 모습으로 돌아와 곤란한 듯 웃으며 서 있는 ',
      me.get_colored_name(),
      '이(가) 있었다.',
    ]);

    era.printButton(
      `「것 봐, 사실 ${urara.get_uma_sex_title()}의 힘이라면 인간 정도는 쉽게 밀쳐낼 수 있을 텐데, 방금은 대체 왜 그랬던 거야?」`,
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '그치만…… 그건 ',
      callname,
      '가 ',
      callname,
      '니까……',
    ]);

    era.printButton(
      '「만약 우라라가 나중에 만나게 될 다른 친밀한 사람도 이런 늑대라면 어쩔 거야?」',
      1,
    );
    await era.input();

    await urara.say_and_wait('으으…… 그게……');
    await era.printAndWait([
      '정말 울음을 터뜨릴 것 같은 ',
      urara.get_colored_name(),
      '를 보고, ',
      me.get_colored_name(),
      '은(는) 어쩔 수 없다는 듯 ',
      urara.sex,
      '의 곁에 앉아 부드럽게 머리를 쓰다듬어 주었다.',
    ]);
    await era.printAndWait([
      '한참을 달래준 끝에 겨우 진정한 ',
      urara.get_colored_name(),
      '는 지친 듯 ',
      me.get_colored_name(),
      '의 몸에 슬며시 기대왔다.',
    ]);
    await era.printAndWait([
      '너무 심하게 괴롭혔나? 하지만 ',
      me.get_colored_name(),
      '에게 짓눌렸을 때 ',
      urara.get_colored_name(),
      '가 지었던 표정은, 마치 「교미를 갈구하는 ',
      urara.get_phy_sex_title(),
      '」와도 같았는데……',
    ]);
    await era.printAndWait([
      '눈가를 힘껏 비빈 뒤, ',
      me.get_colored_name(),
      '의 곁에 가녀리게 밀착한 꼬마 ',
      urara.get_uma_sex_title(),
      '가 촉촉하게 젖은 눈빛으로 ',
      me.get_colored_name(),
      '를 응시하고 있었다.',
    ]);

    await urara.say_and_wait(['저기…… ', callname, ' 정말로 아무것도 안 할 거야?']);
    era.printButton(
      '「……이제 착한 어린이는 씻고 자야 할 시간이야. 난 탁자를 정리하고 밖에서 잘게.」（호감 +20）',
      1,
    );
    era.printButton(
      '「……아무리 늑대라도 이렇게 분위기 파악 못 하고 빨간 망토를 잡아먹지는 않아.」（애정도 +10）',
      2,
    );
    const ret = await era.input();

    await era.printAndWait([
      '멀어져 가는 ',
      me.get_colored_name(),
      '의 뒷모습을 보며, ',
      urara.get_colored_name(),
      '는 무언가 말하려는 듯 입술을 달싹였지만, 결국 ',
      me.get_colored_name(),
      '를 따라 자리에서 일어날 뿐이었다.',
    ]);
    await era.printAndWait([
      '다시 ',
      me.get_colored_name(),
      '의 품에 안겨 방으로 돌아왔을 때도 끝내 가지 말라는 요청은 하지 못한 채, 그저 무심히 불을 끄고 문 뒤로 사라지는 ',
      me.get_colored_name(),
      '의 뒷모습을 배웅했다.',
    ]);
    await urara.say_and_wait([
      '머릿속이 아직도 복잡해…… 하지만 역시 나는 ',
      callname,
      ' 곁에 있고 싶어……',
    ]);
    await urara.say_and_wait([
      '이번에도 결국 ',
      callname,
      '에게 우라라의 속마음을 이야기할 기회를 놓쳐버렸네……',
    ]);
    await urara.say_and_wait(['우으…… 여기 온통 ', callname, '의 냄새로 가득해……']);
    await urara.say_and_wait(
      '하지만 여긴 다른 사람의 침대니까, 혼자서 기분 좋은 짓을 하면 안 되겠지……',
    );
    await era.printAndWait([
      '아쉬운 듯 작은 소리로 중얼거리며, 따뜻함과 안도감에 항복한 꼬마 ',
      urara.get_uma_sex_title(),
      '는 ',
      me.get_colored_name(),
      '의 이불 속에서 새근새근 잠이 들었다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '오늘 밤, 우라라와 마음을 나눈 당신은 만족하셨나요?',
    );
    await in_urara.say_as_unknown_and_wait(
      '이인삼각이라니, 참으로 낭만적이면서도 무용한 표현이군요. 제가 가장 싫어하는 단어 중 하나이기도 합니다.',
    );
    await in_urara.say_as_unknown_and_wait([
      '하지만 제 취향과는 별개로, 이것은 분명 『당신』과 『',
      urara.get_colored_name(),
      '』가 함께 써 내려갈 이야기니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '그렇다면 이야기의 중반부에 들어선 당신은, 과연 『좋은 트레이너』인가요, 아니면 『나쁜 늑대』인가요?',
    );
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(
        52,
        attr_change,
        pt_change,
        undefined,
        true,
      ) || wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};