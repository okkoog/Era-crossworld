const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { add_event } = require('#/event/queue');

const event_hooks = require('#/data/event/event-hooks');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 6] = async (urara, me, in_urara, callname) => {
    await print_event_name('깜짝 선물! II!', urara);
    await in_urara.say_as_unknown_and_wait('……');
    era.drawLine();
    await era.printAndWait(
      '이른 아침, 일어나 세수하고 옷을 입는다. 아침 식사를 서둘러 마치고, 현관에 서서 무심하게 달력을 훑어보았다.',
    );
    await era.printAndWait([
      '하지만 날짜를 확인한 직후, ',
      me.get_colored_name(),
      '은(는) 즉시 엄숙해졌다. 오늘은 발렌타인데이, 언제나 긴장을 늦출 수 없는 특별한 날이다.',
    ]);
    await era.printAndWait([
      '계획은 언제나 변화를 따라가지 못하는 법. 현관 앞에서 한숨을 내쉬며, ',
      me.get_colored_name(),
      '은(는) 곧 누군가 두드릴 것 같은 대문을 열었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 예상대로, 문 뒤에서 고개를 내민 것은 「지난번」과 같은 분홍색 귀 커버와 소동물 같은 귀여운 미소였다.',
    ]);

    era.printButton('「이번에도 정말 빨리 왔네, 무리하지 않아도 괜찮아.」', 1);
    await era.input();

    if (era.get('relation:52:0') > 150) {
      if (era.get('love:52') >= 50) {
        await urara.say_and_wait(
          '무리하는 거 아니야! 우라라는 오늘을 위해 많이 준비했어. 어제 이미 다른 사람들 몫은 다 나눠줬거든!',
        );
        await urara.say_and_wait([
          '상대가 ',
          callname,
          '니까, 이번에는 좀 더 제대로 하고 싶었어! 모처럼 맞이한 발렌타인데이잖아!',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '에게 장난스럽게 웃으며, 작은 ',
          urara.get_uma_sex_title(),
          '는 손에 든 봉투를 흔들며 ',
          me.get_colored_name(),
          '의 몸에 밀착했다. 묘한 분위기가 더욱 짙어지기 시작했다.',
        ]);
      } else {
        await urara.say_and_wait([
          '우라라는 무리하지 않았어! 다른 사람들 초콜릿은 어제 미리 나눠줬고, 오늘은 ',
          callname,
          '뿐이야!',
        ]);
        await urara.say_and_wait([
          '하지만 다들 축제 분위기니까, 오늘 ',
          callname,
          '랑 조금 더 오래 놀아도 괜찮지?',
        ]);
        await era.printAndWait([
          '천진난만하고 귀여운 미소를 지으며, 작은 ',
          urara.get_uma_sex_title(),
          '는 ',
          me.get_colored_name(),
          '의 현관 앞에서 깡충깡충 뛰며 과자 봉투를 들어 보였다.',
        ]);
      }
    } else if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '무리하는 거 아니라니까? 우라라는 어제 다른 사람들 초콜릿은 다 나눠줬지만, ',
        callname,
        ' 거는…… 특별한 거야!',
      ]);
      await urara.say_and_wait([
        '게다가 나도 ',
        callname,
        '랑 함께 발렌타인데이를 보내고 싶어서…… 이건, ',
        callname,
        '에게 주는 선물이야!',
      ]);
      await era.printAndWait([
        '품에 안은 종이봉투를 살며시 들어 올리며, 작은 ',
        urara.get_uma_sex_title(),
        '는 약간의 ',
        urara.get_teen_sex_title(),
        '다운 분위기를 풍기며 천천히 ',
        me.get_colored_name(),
        '의 몸에 밀착해 왔다.',
      ]);
    } else {
      await urara.say_and_wait([
        '사실 무리한 건 아니야! 그냥 어제 초콜릿을 나눠줄 때 ',
        callname,
        '를 깜빡해서……',
      ]);
      await urara.say_and_wait([
        '그래서 오늘 특별히 ',
        callname,
        '의 초콜릿을 가져왔어. 하지만…… 밖이 좀 춥네, ',
        callname,
        '……?',
      ]);
      await era.printAndWait([
        '작은 손에 입김을 호호 불며, 작은 ',
        urara.get_uma_sex_title(),
        '는 품 안에서 초콜릿이 담긴 봉투를 꺼냈다.',
      ]);

      if (
        era.getAddedCharacters().filter((e) => era.get(`love:${e}`) >= 75)
          .length > 2
      ) {
        await urara.say_and_wait([
          '그리고 우라라는 깨달았어! 오늘은 인기 많은 ',
          callname,
          '를 노리는 사람이 아주 많을 테니까, 우라라도 선수를 쳐야 한다는 걸!',
        ]);
        await era.printAndWait([
          '음…… 에? 아? 갑작스러운 ',
          urara.get_colored_name(),
          '의 말에 머리를 한 대 얻어맞은 듯한 기분이 들어, ',
          me.get_colored_name(),
          '은(는) 순간 당황하여 무슨 말을 해야 할지 몰랐다.',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 얼굴에 나타난 당혹감을 알아차린 듯, ',
          urara.get_colored_name(),
          '는 여전히 장난기 어린 미소를 띠고 있었지만 적절한 타이밍에 화제를 돌렸다.',
        ]);
        await urara.say_and_wait([
          '헤헤~ 아무것도 아니야, 우라라는 아무 말도 안 했어~ ',
          callname,
          '가 잘못 들은 거야~',
        ]);
        await era.printAndWait([
          '……이게 정말 화제를 끝내려는 태도인 것인가? 그리고 이런 어른을 도발하는 방법을 대체 어디서 배워온 것일까……',
        ]);
      }
    }
    await era.printAndWait([
      '가볍게 ',
      me.get_colored_name(),
      '의 집 안으로 미끄러져 들어온 ',
      urara.get_colored_name(),
      '는 두 사람이 테이블 앞에 자리를 잡자, 웃으며 종이봉투의 내용물을 접시 위에 쏟아부었다.',
    ]);
    await era.printAndWait([
      '작년의 지나치게 독창적이었던 여러 맛 초콜릿에 비하면, 올해 작은 ',
      urara.get_uma_sex_title(),
      '의 선물은 그 정도로 아기자기하지는 않았다.',
    ]);
    await era.printAndWait([
      '하지만 눈앞에 쌓인 산더미 같은 하트 모양 초콜릿 쿠키를 응시하며, ',
      me.get_colored_name(),
      '의 기억은 서서히 만난 후 첫 번째 연말의 기억으로 거슬러 올라갔다……',
    ]);
    await urara.say_and_wait([
      '왜냐하면 ',
      callname,
      '가 좋아하는 건 역시 우라라의 쿠키잖아? 그래서 다시 만들어 왔어!',
    ]);
    await urara.say_and_wait([
      callname,
      ', 지금 바로 한 입 먹어봐! 이번에는 정말 혀가 녹아내릴 정도로 맛있다고 보장할게!',
    ]);
    await era.printAndWait([
      '혀가 녹아내릴 정도라니, 왠지 위험하게 들린다. 쿠키를 묘사하는 표현치고는 좀 과한데, 아니면 ',
      urara.get_colored_name(),
      '가 또 무언가를 넣은 것일까?',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 기대 섞인 재촉 속에, ',
      me.get_colored_name(),
      '은(는) 생각에 잠긴 채 아직 온기가 남아 있는 쿠키로 손을 뻗었다.',
    ]);
    await era.printAndWait(
      '확실히…… 굉장히 맛있다. 모양은 여전히 투박했지만, 맛은 지난 연말보다 훨씬 섬세하고 달콤했다……',
    );
    await era.printAndWait([
      me.get_colored_name(),
      '의 얼굴에 나타난 「혀가 녹을 듯한」 충격을 읽어냈는지, ',
      urara.get_colored_name(),
      '는 슬그머니 ',
      me.get_colored_name(),
      '의 곁으로 다가와 앉았다.',
    ]);
    await urara.say_and_wait(
      '사실 여기엔 맛의 비밀이 있어. 원래 비밀로 해야 하지만, 우라라가 특별히 알려줄게!',
    );
    await urara.say_and_wait([
      callname,
      ', 알고 싶으면 귀를 좀 더 가까이 대볼래……?',
    ]);
    let ret;
    if (era.get('love:52') >= 50) {
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '이(가) 귀를 기울이려던 찰나, ',
        urara.get_colored_name(),
        '는 다음 순간 표정을 바꾸었다. 갑자기 ',
        me.get_colored_name(),
        '의 허리 위에 올라탄 작은 ',
        urara.get_uma_sex_title(),
        '는 ',
        me.get_colored_name(),
        '을(를) 아래에 눌러 눕혔다.',
      ]);
      await era.printAndWait([
        '작고 부드러운 몸으로 ',
        me.get_colored_name(),
        '의 위를 압박하며, ',
        urara.get_teen_sex_title(),
        '는 붉게 물든 뺨과 벚꽃색 눈동자 속에 연인을 향한 정욕을 가득 피워내고 있었다.',
      ]);
      await urara.say_and_wait([
        callname,
        '를 향한 축복도, ',
        callname,
        '를 향한 사랑도, 우라라가 아주 많이 많이 넣었거든……',
      ]);
      await urara.say_and_wait([
        '그러니까 어렵게 만든 만큼, 꼭 우라라와 함께 다 먹어줘야 해, 알았지?',
      ]);
      if (era.get('talent:52:유방사이즈') > 0) {
        await urara.say_and_wait([
          '그리고 ',
          callname,
          '에 대한 『사랑』 말고도, 우라라는 어떤 사람들이 말하던 것처럼 『다른 것』도 넣었는데……',
        ]);
        await era.printAndWait([
          me.get_colored_name(),
          '의 위에 올라타 살며시 겉옷을 벗은 발칙한 ',
          urara.get_uma_sex_title(),
          '는 이미 발정의 전조로 끈적하게 젖어버린 가슴 가리개를 풀었다.',
        ]);
        await era.printAndWait(
          '직후 흔들리며 시야에 들어온 것은, 바짝 세워진 끝부분에서 끊임없이 우윳빛 액체를 분비하는 한 쌍의 탐스러운 가슴이었다.',
        );
        await era.printAndWait([
          '팔을 굽혀 자신의 가냘픈 몸과는 어울리지 않는 두 개의 매혹적인 가슴을 받쳐 들며, ',
          urara.get_colored_name(),
          '는 수줍게 물든 얼굴에 어른스러운 요염함까지 더했다.',
        ]);
        await urara.say_and_wait([
          '타액 말고도, 우라라가 쿠키를 만들 때 쓴 우유도 내 거야. 그러니까…… ',
          callname,
          ', 많이 먹어줘야 해?',
        ]);
      }
      await era.printAndWait([
        '쿠키를 입술 사이에 물고, 작은 ',
        urara.get_uma_sex_title(),
        '는 몸을 숙여 부드럽고 가느다란 입술과 혀, 그리고 달콤함이 녹아든 타액을 함께 ',
        me.get_colored_name(),
        '의 입안으로 밀어 넣었다.',
      ]);
      await era.printAndWait([
        '밀어내고 싶어 안달하던 마음에서 어느덧 사고조차 녹아내리는 열띤 흡입 속의 손깍지까지, ',
        me.get_colored_name(),
        '과(와) 얽힌 ',
        urara.get_teen_sex_title(),
        '는 몸의 힘을 풀었다……',
      ]);
      await era.printAndWait([
        '공수가 교체되자 눈동자가 풀린 꼬마 ',
        urara.get_uma_sex_title(),
        '는 ',
        callname,
        '의 단단한 품 안에서 달콤한 입맞춤을 나누며 가느다란 신음을 흘렸다.',
      ]);
      await era.printAndWait([
        '완전히 발렌타인데이의 함정에 빠져버린 ',
        me.get_colored_name(),
        '을(를) 마주하며, 이 발칙한 ',
        urara.get_uma_sex_title(),
        '는 자신의 몸에 대한 권리를 사랑하는 이에게 안심하고 맡겼다……',
      ]);

      await era.printAndWait('지금이라면, 무엇을 해도 허락받을 수 있을 것만 같다……');
      era.printButton('여기서 우라라를 먹어치운다…… (애정도+10)', 1);
      era.printButton('일단은 참는다…… (호감도+20)', 2);
      ret = await era.input();
      if (ret === 1) {
        await quick_into_sex(52);
      } else {
        await era.printAndWait([
          '고개를 저으며, ',
          me.get_colored_name(),
          '은(는) 옷매무새가 흐트러진 ',
          urara.get_colored_name(),
          '를 놓아주었다. 하지만 ',
          me.get_colored_name(),
          '의 예상과는 달리, 이때의 작은 ',
          urara.get_uma_sex_title(),
          '는 특별히 불만을 표시하지 않았다.',
        ]);
        await era.printAndWait([
          '조용히 반쯤 벗겨진 옷을 추스르며, 작은 ',
          urara.get_uma_sex_title(),
          '의 상기된 얼굴에는 장난에 실패했을 때의 익살스러운 미소가 떠올랐다.',
        ]);
        await urara.say_and_wait([
          callname,
          '가 한 말이 맞네. 아침부터 이러는 건 좀 과했어. 하지만 모처럼의 발렌타인데이니까, 이건 다 먹어줘야 해……?',
        ]);
        await urara.say_and_wait(
          '자, 여기 아직 많이 남았어! 입 벌려봐, 분명 즐거워질 거야!',
        );
        await era.printAndWait([
          '역시나 포기하지 않은 ',
          urara.get_colored_name(),
          '는 너무 많은 「조미료」가 섞인 다음 쿠키를 집어 들고, 달콤한 미소와 함께 과자를 입에 물었다.',
        ]);
        await era.printAndWait('아무래도 이번 발렌타인데이는 험난하게 지나갈 것 같다……');
      }
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '의 귓가에 가벼운 숨결을 내뿜으며, ',
        urara.get_teen_sex_title(),
        '의 향기와 축제의 축복이 함께 ',
        me.get_colored_name(),
        '의 귓속으로 흘러 들어왔다.',
      ]);
      await urara.say_and_wait([
        '사실은…… 우라라가 진심을 아주 많이 담았어. 왜냐하면 ',
        callname,
        '가 매일매일 행복했으면 좋겠거든!',
      ]);
      await urara.say_and_wait('그리고 사람들이 말해준, 마법의 주문이 효력을 발휘하는 마지막 단계…… 쪽~');
      await era.printAndWait([
        me.get_colored_name(),
        '의 곁에 딱 붙어 귓속말 거리를 유지하며, ',
        urara.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 뺨에 천사의 축복 같은 가벼운 입맞춤을 남겼다.',
      ]);
      await era.printAndWait([
        '아직 연인 사이도 아닌데 이 꼬마 ',
        urara.get_uma_sex_title(),
        '가 이렇게나 귀중한 선물을 주다니, 사람들은 대체 ',
        urara.sex,
        '에게 무슨 말을 해준 것일까……',
      ]);
      await era.printAndWait([
        '곁눈질로 ',
        urara.get_teen_sex_title(),
        '다운 화사한 미소를 바라보며, ',
        me.get_colored_name(),
        '의 심장 소리도 어느덧 자율적으로 박자를 맞추기 시작했다.',
      ]);

      await urara.say_and_wait([
        '헤헤~ ',
        callname,
        ', 기분이 어때? 우라라의 주문이 성공한 것 같아?',
      ]);
      era.printButton('「오늘 하루 종일 세수도 못 할 만큼 행복해!」 (애정도+10)', 1);
      era.printButton('「응! 우라라의 주문은 대성공이야!」 (호감도+20)', 2);
      ret = await era.input();

      await urara.say_and_wait([
        '그렇지? ',
        callname,
        '를 설레고 기쁘게 만드는 마법은 역시 효과가 좋네! 과연 예전부터 전해져 내려온 방법다워!',
      ]);
      await era.printAndWait([
        '역시 이 「마법의 주문」은 우정용이 아니었던 모양이다. 신이 난 작은 ',
        urara.get_uma_sex_title(),
        '를 보며, 무언가 짐작한 ',
        me.get_colored_name(),
        '은(는) 시선을 피했다.',
      ]);
      await urara.say_and_wait([
        callname,
        '가 더 행복해질 수 있게 하는 우라라의 쿠키는 아직 많이 남았다고?',
      ]);
      await urara.say_and_wait([
        callname,
        '! 우라라와 함께, 미래의 좋은 기분을 다 먹어버리자!',
      ]);
      await era.printAndWait([
        '웃으며 축복이 담긴 다음 발렌타인 선물을 집어 든 ',
        urara.get_colored_name(),
        '는 가슴 설레는 미소와 함께 그것을 ',
        me.get_colored_name(),
        '의 입안으로 밀어 넣었다.',
      ]);
      await era.printAndWait([
        '어느덧 묘하게 변해버린 「우정」의 분위기 속에서, ',
        me.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '와 함께 초콜릿 쿠키를 나눠 먹으며 발렌타인데이의 아침을 보냈다.',
      ]);
    }
    era.drawLine();
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait('저, 저는 괜찮답니다……? 하아……');
    era.add('item:발렌타인초콜릿', 1);
    era.println();
    let wait_flag = get_attr_and_print_in_event(
      52,
      undefined,
      0,
      JSON.parse('{"체력":2000}'),
    );
    wait_flag =
      get_attr_and_print_in_event(
        0,
        undefined,
        0,
        JSON.parse('{"체력":2000}'),
      ) || wait_flag;
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 2), true, 10 * (ret === 1)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
    era.set('cflag:52:축제이벤트표시', 0);
  };

  handlers[95 + 29] = async (
    urara,
    me,
    in_urara,
    callname,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:52:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return false;
    }
    await print_event_name('여름 합숙 (시니어 시즌) 시작', urara);
    await in_urara.say_as_unknown_and_wait([
      '이미 한 번 겪어본 일이지만, 작은 ',
      urara.get_uma_sex_title(),
      '는 언제나 성장하는 법이에요.',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '사람은 같은 강물에 두 번 발을 담글 수 없듯이, 같은 해변에 서 있는 ',
      urara.sex,
      '도 이전과는 다를 거예요.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '오늘부터 3년 차 여름 합숙의 시작이다. ',
      me.get_colored_name(),
      '과(와) ',
      me.get_colored_name(),
      '의 담당은 다시 합숙 장소인 해변에 도착했다.',
    ]);
    await era.printAndWait([
      '드넓은 바다는 언제나 여행자의 고민을 씻어준다. ',
      urara.get_colored_name(),
      '도 마침내 자신을 옭아매던 생각들을 잠시 내려놓은 듯했다.',
    ]);
    await era.printAndWait([
      '비록 처음 백사장에 섰을 때의 신선함은 사라졌지만, 작은 ',
      urara.get_uma_sex_title(),
      '는 여전히 태양 아래서 즐겁게 먼 곳을 바라보는 것을 좋아했다.',
    ]);
    await era.printAndWait([
      '반쯤 벗은 겉옷 아래로 보이는 짙은 남색의 학교 수영복. 물에 젖어 밀착된 옷감은 ',
      urara.sex,
      '의 여리면서도 건강하고 탄력 있는 몸의 곡선을 그대로 드러내고 있었다.',
    ]);
    if (era.get('talent:52:유방사이즈') > 0) {
      await era.printAndWait([
        '수영복 위로 도드라진 가슴이 ',
        urara.sex,
        '의 작은 몸에 묵직하게 매달려, 과하게 발달한 풍만한 엉덩이와 함께 유혹하듯 흔들리고 있었다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.get_uma_sex_title(),
        '의 풍만한 육체는 몸에 맞지 않는 조이는 천 아래에서 답답한 듯 꿈틀거렸고, 부드러운 가슴은 가슴팍에 두 개의 작은 돌기를 만들어내고 있었다.',
      ]);
    }
    await era.printAndWait([
      '분홍색 귀와 꼬리가 햇빛 아래서 자연스럽게 흔들렸고, 흩날리는 머리카락은 해풍을 타고 ',
      urara.sex,
      '의 가녀린 어깨를 부드럽게 스치고 지나갔다.',
    ]);
    await era.printAndWait([
      '햇살이 너무 눈부셨기 때문일까, 한동안 ',
      me.get_colored_name(),
      '은(는) 그 뒷모습이 정말 자신의 ',
      urara.get_colored_name(),
      '인지 확신하지 못했다.',
    ]);
    await urara.say_and_wait([callname, ', 여기야!']);
    await era.printAndWait([
      me.get_colored_name(),
      '의 시선을 눈치챈 작은 ',
      urara.get_uma_sex_title(),
      '가 파도와 백사장의 경계선을 따라 ',
      me.get_colored_name(),
      '에게 달려왔고, 뒤로는 얕은 발자국이 길게 남았다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 앞에 멈춰 서서 어깨 뒤로 벚꽃색 머리카락을 가볍게 넘기는 ',
      urara.get_colored_name(),
      '의 눈동자 속 꽃무늬가 햇빛 아래서 부드럽게 빛났다.',
    ]);
    await era.printAndWait([
      urara.get_teen_sex_title(),
      '다운 성숙해진 분위기와 여전히 천진난만한 얼굴이 마치 섞인 차와 우유처럼, ',
      me.get_colored_name(),
      '의 눈앞에서 아련하게 섞여 들고 있었다.',
    ]);
    await era.printAndWait([urara.sex, '…… 이제 제법 어른스러워진 걸까?']);
    era.println();
    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait([
        callname,
        '! 이번에는 조금 늦었네? 우라라는 아침 일찍 짐 정리를 다 끝냈는데!',
      ]);
      await era.printAndWait([
        '의욕 가득한 모습으로 ',
        me.get_colored_name(),
        '의 곁으로 다가와 머리카락을 뒤로 넘긴 작은 ',
        urara.get_uma_sex_title(),
        '는 살며시 웃으며 ',
        me.get_colored_name(),
        '의 손을 잡았다.',
      ]);
      await urara.say_and_wait(
        '이제 중요한 레이스가 있으니까, 열심히 힘내야 해! 그러니까 지금 당장 훈련 시작하자!',
      );
    } else {
      await urara.say_and_wait([
        '설마 이번에 땡땡이치려는 사람이 ',
        callname,
        '일 줄은 몰랐는걸? 나를 꽤 오래 기다리게 했어!',
      ]);
      await era.printAndWait([
        '가볍게 뛰어와 ',
        me.get_colored_name(),
        '의 곁에 선 ',
        urara.get_colored_name(),
        '는 웃으며 ',
        me.get_colored_name(),
        '의 손목을 잡고 훈련장 쪽으로 끌어당겼다.',
      ]);
      await urara.say_and_wait(
        '앞으로 아주 중요한 레이스가 있으니까, 이번 훈련은 조금 거칠게 해도 괜찮아!',
      );
    }
    era.println();
    await era.printAndWait([
      urara.get_colored_name(),
      '의 지금 모습은 모두 진짜다. 비록 ',
      urara.sex,
      '의 정신 상태는 여전히 걱정되지만, 담당의 기대에 부응하기 위해서라도 ',
      callname,
      '로서 힘을 낼 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '다만 팔에 닿는 생생하고 부드러운 육체의 감촉에, ',
      me.get_colored_name(),
      '의 뇌 속 어떤 끈이 끊어질 것만 같은 기분이 들었다.',
    ]);
    await era.printAndWait([
      '어린 줄만 알았던 ',
      urara.sex,
      '가 언제 이렇게 「매혹적」으로 변한 것일까? 왠지 모를 감상에 젖게 된다……',
    ]);

    if (era.get('love:52') >= 50) {
      await urara.say_and_wait([
        '그리고 둘만 남았을 때, 우라라가 ',
        callname,
        '의 활약을 기대해도 될까?',
      ]);
      await era.printAndWait('그건…… 일단 보류해두기로 하자.');
      await era.printAndWait([
        urara.get_colored_name(),
        '의 뜨거운 눈빛과 매혹적인 육체를 마주할 용기가 나지 않아, ',
        me.get_colored_name(),
        '은(는) 먼 바다로 시선을 돌렸다……',
      ]);
    }
  };
};