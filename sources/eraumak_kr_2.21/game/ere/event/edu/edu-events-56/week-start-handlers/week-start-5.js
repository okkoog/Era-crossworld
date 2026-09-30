const era = require('#/era-electron');

const sys_filter_chara = require('#/system/sys-filter-chara');

const typing = require('#/event/edu/edu-events-56/snippets/typing');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const event_hooks = require('#/data/event/event-hooks');
const recruit_flags = require('#/data/event/recruit-flags');
const { location_enum } = require('#/data/locations');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},FukukitaruEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  handlers[95 + 25] = async (kitaru, me, callname, flags) => {
    await print_event_name('소원이 없는 소원', kitaru);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 평소처럼 신사의 방울 앞에 서 있었다.',
    ]);
    await kitaru.say_and_wait('후후! 그럼, 이제 소원을 빌 차례야!');
    await kitaru.say_and_wait('미지의 다음 레이스에서……');
    await kitaru.say_and_wait(
      '앗! 뭐든 상관없어요. 아무튼 신령님께서는 지켜봐 주시기만 하면 돼요. 제가 직접 해낼 테니까요!',
    );
    await kitaru.say_and_wait('다른 소원을 빌어볼까……');
    await era.printAndWait([
      '하지만 한참 동안 고개를 숙이고 고민하던, 원래대로라면 정신을 집중해야 할 ',
      kitaru.get_teen_sex_title(),
      '가 갑자기 ',
      kitaru.sex,
      ' 특유의 괴상한 비명을 질렀다.',
    ]);
    await kitaru.say_and_wait('으에! 에에~? 어라라?');
    await era.printAndWait('그러더니 신사를 쏜살같이 뛰쳐나갔다.');
    era.drawLine({ content: me.name + '의 집무실' });
    await era.printAndWait([
      '오렌지색 머리카락의 ',
      kitaru.get_teen_sex_title(),
      '가 다급하게 ',
      me.get_colored_name(),
      '의 집무실 문을 열고 뛰어 들어왔다.',
    ]);
    era.printButton('「무슨 일이야?」', 1);
    await era.input();
    await kitaru.say_and_wait([callname, '! 큰일 났어요!']);
    await kitaru.say_and_wait('점술의 아이인 제가! 세상에 빌 소원이 없어요!');
    await kitaru.say_and_wait('좋은 인연도, 이루고 싶은 소망도, 이미 다 이루어져 버렸거든요.');
    await kitaru.say_and_wait('설마 예전 국화상이 끝났을 때랑 같은 상태인 걸까요?');
    era.printButton('「그건 네가 지금 만족하고 있다는 뜻 아냐?」', 2);
    await era.input();
    await kitaru.say_and_wait('만족이요?');
    await kitaru.say_and_wait([
      '음…… 듣고 보니 그렇네요. 미래의 목표도 어느 정도 윤곽이 잡혔고, ',
      callname,
      '도 제 곁에 있고, 저를 지지해 주시는 팬분들도 계시니까요.',
    ]);
    await kitaru.say_and_wait('팬……');
    await kitaru.say_and_wait([
      '맞아요! ',
      callname,
      ', 저는 멋진 레이스를 통해 지금까지 저를 지탱해 주신 팬분들에게 제대로 보답하고 싶어요!',
    ]);
    await kitaru.say_and_wait([callname, ', 무슨 좋은 제안 없나요?']);
    era.printButton('「똑같이 팬 투표로 결정되는 아리마 기념은 어때?」', 1);
    era.printButton('「재팬 컵과 아리마 기념을 연달아 제패하는 건?」', 2);
    if ((await era.input()) === 2) {
      await kitaru.say_and_wait('어라랏, 놀리지 마세요!');
      await kitaru.say_and_wait(
        '그때 말했던 건 좀 과장된 면이 있었다는 거 저도 알아요. 하지만 아리마 기념 하나라면 문제없다고요!',
      );
      await kitaru.say_and_wait('결정했어요! 아리마 기념으로 가죠!');
    }
    era.drawLine({ content: '마치카네 후쿠키타루네 신사' });
    await kitaru.say_and_wait(
      '지난번 타카라즈카 기념은 신도 같은 팬분들이 자비를 베풀어 주셔서 나갈 수 있었던 거잖아요.',
    );
    await kitaru.say_and_wait('하지만 이번에는 제 힘으로 당당하게 표를 모아서 레이스에 나가고 싶어요.');
    await kitaru.say_and_wait(
      '수많은 소원을 하나로 모아서, 연말의 나카야마에서 한꺼번에 이루고 싶거든요.',
    );
    await kitaru.say_and_wait(
      '제 소원이 이루어졌으니, 이번에는 제가 모두에게 행복을 나눠줄 차례예요!',
    );
    await kitaru.say_and_wait('제가 아리마 기념에서 우승하면, 모두 행복해질 수 있겠죠?');
    await era.printAndWait([
      '시선을 ',
      me.get_colored_name(),
      '에게 돌린 ',
      kitaru.sex,
      '의 표정은 매우 담담했다. 신의 사랑을 받는 ',
      kitaru.get_uma_sex_title(),
      '라고 불러도 과언이 아닐 정도였다.',
    ]);
    era.printButton('「그래.」', 1);
    era.printButton('「분명 그럴 거야!」', 1);
    await era.input();
    await era.printAndWait([me.get_colored_name(), '은(는) 고개를 끄덕이며 찬성했다.']);
    await kitaru.say_and_wait('생각해 보니 신령님 앞에서 꼭 소원만 빌어야 하는 건 아니었네요!');
    await era.printAndWait([
      '오렌지색 머리카락의 ',
      kitaru.get_teen_sex_title(),
      '가 한 발짝 앞으로 내디뎠다. 비록 교복 차림이었지만, 그 자태는 마치 의식을 치르는 무녀처럼 장엄하게 변해갔다.',
    ]);
    await kitaru.say_and_wait('이곳에 좌정하신 신령님이시여! 저의 서약을 받아 주소서!');
    await kitaru.say_and_wait('저 후쿠키타루는 반드시! 아리마 기념에서 승리하겠습니다!');
    await kitaru.say_and_wait('저 스스로 자신감을 되찾게 도와주신 분들에게 행복을 전하기 위해!');
    await era.printAndWait('위엄 있고 늠름한 목소리가 황혼의 봉마시에 울려 퍼졌다.');
    await era.printAndWait('그 모습은 의외라고 생각될 정도로 성스럽게 느껴졌다.');
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };

  handlers[95 + 31] = async (
    kitaru,
    me,
    callname,
    flags,
    edu_marks,
    event_object,
  ) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:56:위치') !== era.get('cflag:0:위치')
    ) {
      add_event(event_hooks.week_start, event_object);
      return;
    }
    await print_event_name('숲속의 참배', kitaru);
    await era.printAndWait([
      '오늘은 오봉의 마지막 날이다. 풍습에 따라 종이등을 강물에 띄워 보내며, 돌아가신 친족이 황천으로 돌아가는 길을 인도하는 날이다.',
    ]);
    await era.printAndWait([
      '밤, 간신히 길을 분간할 수 있을 정도의 숲속에서 연녹색 유카타 차림의 ',
      kitaru.get_colored_name(),
      '가 가로막는 나뭇가지를 헤치며 사람의 발길이 닿지 않는 강가로 모습을 드러냈다.',
    ]);
    await era.printAndWait([
      '여름 합숙소 옆을 흐르는 강 위에는 이미 몇몇 따스한 주황빛 등불이 떠 있었다.',
    ]);
    await kitaru.say_and_wait(['그럼, 마지막 날의 의식은 여기서 하도록 하죠!']);
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 어깨에 메고 있던 보따리를 내려놓았다. 묵직한 물건이 떨어지는 소리가 선명하게 들렸다.',
    ]);
    era.printButton('「오늘 계획은 뭐야?」', 1);
    era.printButton('「이 안에 든 건 뭐야?」', 2);
    await era.input();
    await kitaru.say_and_wait(['그게 말이죠!']);
    await kitaru.say_and_wait(['이번 기회에 과거의 저와 작별 인사를 하려고요!']);
    await era.printAndWait([
      kitaru.sex,
      '가 보따리를 열자, 안에는 온갖 종류의 행운 아이템들이 들어 있었다.',
    ]);
    await era.printAndWait([
      '예전에 ',
      kitaru.get_colored_name(),
      '의 기숙사에서 본 것들, 일부는 집무실에 두었던 것들, 그리고 국화상 때 사 모았던 물건들이 상당수를 차지하고 있었다.',
    ]);
    await kitaru.say_and_wait([
      '음…… 지금 기숙사랑 트레이닝실 쪽에는 100개 정도만 남겨둔 상태예요!',
    ]);
    await kitaru.say_and_wait(['그리고 ', callname, ' 집에 둔 건! 그냥 드릴게요!']);
    era.printButton('「그래도 여전히 많네……」', 1);
    era.printButton('「그럼 감사히 받을게!」', 2);
    if ((await era.input()) === 1) {
      await kitaru.say_and_wait(['앗! 나름대로 오랫동안 엄선해서 고른 것들이라고요!']);
      await era.printAndWait([
        me.get_colored_name(),
        '에게 지적을 받은 ',
        kitaru.get_teen_sex_title(),
        '는 볼을 부풀리며 ',
        me.get_colored_name(),
        '을(를) 째려보았다.',
      ]);
    } else {
      await kitaru.say_and_wait([
        '원래는 수정구슬도 ',
        callname,
        '께 드리려고 했거든요! 하지만 나중에 또 쓸 일이 생길지도 모르니까요!',
      ]);
    }
    era.println();
    await era.printAndWait([
      '작은 깃발, 접힌 자국이 남은 트럼프 카드, 목제 인형들이 강물 속으로 던져져 주황빛 등불과 섞여 하류로 흘러갔다.',
    ]);
    await kitaru.say_and_wait(['어라! 그런데 이렇게 하면 환경 오염이 되지 않을까요?']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      kitaru.get_colored_name(),
      '에게 미리 관리인에게 연락해 두었으니 하류의 차단망에서 수거해 소각할 예정이라고 알려주자, ',
      kitaru.get_teen_sex_title(),
      '는 그제야 안심하고 ',
      kitaru.sex,
      '의 행운 아이템들을 방류하기 시작했다.',
    ]);
    era.drawLine({ content: '잠시 후' });
    await kitaru.say_and_wait(['그럼, 이 종이등을 띄우는 걸로 오늘을 마무리할까요?']);
    await era.printAndWait([
      '불빛에 주황색으로 물든 사각형 종이등이 수면 위에 떴지만, 등은 마치 고정된 것처럼 강 한복판에 멈춰 있었다.',
    ]);
    await kitaru.say_and_wait(['하아……']);
    await era.printAndWait(['어느덧 자정이 되었다. 이제 돌아가야 할 시간이다.']);
    await era.printAndWait([
      '길치 기질이 있는 ',
      kitaru.get_colored_name(),
      '는 길을 잘 기억하지 못하는 듯 보였다. ',
      kitaru.sex,
      '의 길을 잃을수록 초조해지는 발걸음은 인간인 ',
      me.get_colored_name(),
      '이(가) 따라가기 벅찰 정도였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 담당은 거의 제정신이 아닌 듯 앞을 가로막는 가지들을 헤치며 나아갔고, 어두운 숲속에서 연녹색 유카타가 보였다 안 보였다를 반복하자 ',
      me.get_colored_name(),
      '은(는) 담당을 놓칠 뻔했다.',
    ]);
    era.printButton('「마치카네 후쿠키타루!」', 1);
    era.printButton('「기다려!」', 2);
    await era.input();
    await era.printAndWait([
      '하지만 ',
      me.get_colored_name(),
      '이(가) 아무리 외쳐도, 앞서 달려가는 ',
      kitaru.get_uma_sex_title(),
      '는 듣지 못한 듯 숲 깊은 곳으로 계속 뛰어갔다.',
    ]);
    await era.printAndWait([
      '목소리는 칠흑 같은 숲속에 메아리쳤고, 시야 안에는 이제 ',
      me.get_colored_name(),
      ' 혼자만이 남았다.',
    ]);
    await era.printAndWait([
      '곁에 있는 나무줄기를 짚으며, ',
      me.get_colored_name(),
      '의 거칠어진 호흡이 겨우 진정되었지만…… 이제 어떻게 해야 할까?',
    ]);
    await era.printAndWait(['바스락!']);
    await era.printAndWait([
      '등 뒤에서 나뭇잎을 헤치는 소리가 들려왔다. ',
      kitaru.get_colored_name(),
      '일까? 하지만 이 근처에 곰이 출몰한다는 이야기도 들었는데…… 담당도 곁에 없는데 일단 몸을 숨기는 게 좋을까?',
    ]);
    await kitaru.say_as_unknown_and_wait('이봐요!');
    await kitaru.say_as_unknown_and_wait([
      me.get_colored_actual_name(),
      ' ',
      me.get_adult_sex_title(),
      '!',
    ]);
    await kitaru.say_as_unknown_and_wait('여기예요!');
    await era.printAndWait([
      '뒤를 돌아보니, 생글생글 웃고 있는 ',
      kitaru.get_colored_name(),
      '가 ',
      me.get_colored_name(),
      '의 등 뒤에 서 있었다.',
    ]);
    await kitaru.say_and_wait('자! 당신이 또 길을 잃지 않도록.');
    await kitaru.say_and_wait('제 손을 잡아주세요!');
    era.printButton('손을 뻗는다', 1);
    era.printButton('당연히 잡는다', 2);
    await era.input();
    era.drawLine({ content: '잠시 후' });
    await era.printAndWait('다행히 큰길로 돌아온 듯하다.');
    let direction = 0,
      temp;
    do {
      await era.printAndWait([
        me.get_colored_name(),
        '과(와) ',
        kitaru.get_colored_name(),
        '가 걷다 보니, 눈앞에 갈림길이 나타났다.',
      ]);
      await kitaru.say_and_wait('음! 이쪽으로 가보는 건 어때요?');
      await era.printAndWait([
        me.get_colored_name(),
        ' 곁의 ',
        kitaru.get_colored_name(),
        '가 왼쪽 길을 가리켰다.',
      ]);
      era.printButton('왼쪽으로 간다', 1);
      era.printButton('오른쪽으로 간다', 2);
      temp = await era.input();
      direction += temp === 2;
    } while (temp === 2 && direction < 3);
    if (direction < 3) {
      await era.printAndWait([
        '나무들이 드문드문해지고 시야가 밝아지는가 싶더니, ',
        me.get_colored_name(),
        '의 앞에 폐허가 한 곳 나타났다.',
      ]);
      await era.printAndWait([
        '넝쿨이 무성하게 뒤덮인 토리이가 잔해 위에 서 있었다. 아무래도 오랫동안 버려진 신사인 모양이다.',
      ]);
      await kitaru.say_and_wait('어라라, 정말 운이 좋네요!');
      await kitaru.say_and_wait('여기에 이런 특별한 에너지가 흐르는 곳이 있을 줄이야.');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 ',
        me.get_colored_name(),
        '의 손을 잡고 무너진 배전의 지붕을 넘어갔다.',
      ]);
      await kitaru.say_and_wait('와! 영력이 정말 충만하게 느껴져요!');
      await kitaru.say_and_wait([
        '그럼, ',
        me.get_colored_actual_name(),
        ' ',
        me.get_adult_sex_title(),
        ', 저에게 점치고 싶은 게 있나요?',
      ]);
      era.printButton('「이제 돌아가야지?」', 1);
      era.printButton('「질문 하나 해도 될까?」', 2, {
        disabled: era.get('love:56') < 75,
      }); // 호감도 해제
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('그럴까요?');
        await kitaru.say_and_wait('그럼 돌아가죠!');
        await era.printAndWait([
          '그 후 ',
          kitaru.get_colored_name(),
          '와 ',
          me.get_colored_name(),
          '은(는) 돌아왔다. ',
          kitaru.get_colored_name(),
          '는 몹시 지쳤는지 눕자마자 쿨쿨 잠이 들었다.',
        ]);
        return;
      }
      await kitaru.say_and_wait('물론이죠. 뭐든지 물어보세요!');
      await era.printAndWait([
        '눈앞의 ',
        kitaru.get_uma_sex_title(),
        '는 겉모습만 보면 ',
        me.get_colored_name(),
        '의 담당과 똑같았고, 웃는 방식조차 차이가 없었다.',
      ]);
      await era.printAndWait([
        '하지만 기척도 없이 ',
        me.get_colored_name(),
        '의 등 뒤에 나타난 것부터 갑작스러운 호칭의 변화, 그리고 ',
        me.get_colored_name(),
        '을(를) 이곳으로 이끈 것까지 위화감이 한둘이 아니었다.',
      ]);
      era.printButton('「너는 누구야?」', 1);
      await era.input();
      const kami = get_chara_talk(56);
      kami.name = '마치카네 후쿠키타루?';
      await kami.say_and_wait([
        '……아하하. 역시 그 아이의 ',
        callname,
        '이자 인도자답군요.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 모습으로 나타난 ',
        kitaru.get_teen_sex_title(),
        '가 옅은 미소를 지었다.',
      ]);
      await era.printAndWait([
        '분명 ',
        me.get_colored_name(),
        '의 바로 앞에서 입을 열어 말하고 있었지만, ',
        kitaru.sex,
        '의 대답은 마치 ',
        me.get_colored_name(),
        '의 의식 속으로 직접 스며드는 것 같았다.',
      ]);
      await kami.say_and_wait([
        '우리 집 무녀이자 당신 담당의 몸을 빌린 점은 사과하죠. 하지만 ',
        kitaru.sex,
        '가 운명의 사람을 찾은 뒤로 언젠가 한 번 이야기를 나누고 싶었거든요.',
      ]);
      await kitaru.say_and_wait('음…… 당신은 그다지 놀라지 않는 모양이네요.');
      era.printButton('(난 마치카네 후쿠키타루의 트레이너니까)', 1);
      era.printButton(`(${kitaru.sex}라면 이런 일이 일어나도 이상하지 않지)`, 2); // 호감도 해제
      await era.input();
      await kami.say_and_wait('어라라!');
      await kami.say_and_wait([
        '말은 그렇게 해도, ',
        kitaru.sex,
        '의 ',
        kitaru.get_bigger_sibling_sex_title(),
        '가 세상을 떠나기 전까지 ',
        kitaru.sex,
        '는 점술이나 주술에는 전혀 관심이 없었답니다. 예전에는 늘 ',
        kitaru.get_bigger_sibling_sex_title(),
        ' 뒷모습만 쫓아다니며 무슨 일만 생기면 불러대곤 했죠.',
      ]);
      await kami.say_and_wait('꽤 번거로운 아이죠?');
      era.printButton('（고개를 끄덕인다）', 1);
      era.printButton('「확실히, 나도 무슨 일만 생기면 불려 가곤 해」', 2);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '을(를) 바라보고 있으면서도 마치 아주 먼 곳을 응시하는 듯한 ',
        kitaru.sex,
        '의 눈동자를 지켜보며, ',
        me.get_colored_name(),
        '은(는) 대답했다.',
      ]);
      if (sys_filter_chara('cflag', '모집상태', recruit_flags.yes).length > 2) {
        await kami.say_and_wait([
          kitaru.sex,
          '가 국화상의 약속을 지키도록 도와주다니, 정말 대단해요.',
        ]);
      } else {
        await kami.say_and_wait('첫 담당으로 국화상을 제패하다니, 정말 대단한걸요.');
      }
      await kami.say_and_wait([
        kitaru.sex,
        '가 믿는 신으로서, 전 스스로가 꽤 실격이라고 생각해요. 이렇게 영력이 뛰어난 무녀를 곁에 두고도.',
      ]);
      await kami.say_and_wait([
        kitaru.sex,
        '가 가장 필요할 때 나타나 주지도 못했고, ',
        kitaru.sex,
        '가 가장 고통스러울 때 이끌어주지도 못했죠. 그저 가끔 ',
        kitaru.sex,
        '의 꿈속에 나타나 힌트를 조금 주는 게 고작이었으니까요.',
      ]);
      await kami.say_and_wait('으으으…… 역시 신도가 너무 적어서 그런 걸까요.');
      await kami.say_and_wait([
        '그래도 신도가 늘어나면 제가 ',
        kitaru.sex,
        '만 계속 지켜봐 줄 수는 없을 테니, 어쩌면 지금이 좋은 걸지도 모르겠네요.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 담당에게 빙의한 신령은 말을 마치고 무의식적으로 자기 머리카락을 만지작거렸다. 정말 ',
        kitaru.get_colored_name(),
        '와 판에 박은 듯 똑같은 행동이었다.',
      ]);
      await kami.say_and_wait([
        me.get_colored_actual_name(),
        ' ',
        me.get_adult_sex_title(),
        '.',
      ]);
      era.printButton('「응?」', 1);
      era.printButton('「무슨 일이야?」', 2);
      await era.input();
      await kami.say_and_wait([
        '당신이 ',
        kitaru.sex,
        '의 ',
        callname,
        '이라 정말 다행이에요!',
      ]);
      await era.printAndWait([
        '자신의 신령에게 몸을 맡기고 있던 ',
        kitaru.get_colored_name(),
        '가 눈을 몇 번 깜빡이더니, 이내 힘이 풀린 듯 ',
        me.get_colored_name(),
        '의 품속으로 쓰러졌다.',
      ]);
      await typing('이 아이를 잘 부탁합니다. ' + kitaru.sex + '의 운명의 사람이여.');
      era.set('status:56:안정', 1);
      await era.printAndWait([kitaru.get_colored_name(), '의 몸이 미열을 띤 듯 따뜻해졌다.']);
      kami.name = undefined;
      flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
    } else {
      await era.printAndWait([
        '길을 헤매다 보니 어느덧 숲을 빠져나왔다. 저 멀리 기숙사의 불빛이 희미하게 보였다……',
      ]);
    }
  };

  handlers[95 + 37] = async (kitaru, me, callname, flags) => {
    await print_event_name('각자의 천명', kitaru);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 오렌지색 머리카락의 담당이 대리석 묘비의 표면을 부드럽게 쓰다듬는 것을 보았다.',
    ]);
    await era.printAndWait([
      '국화상 전과 마찬가지로 한동안 낮은 목소리로 속삭이던 ',
      kitaru.get_colored_name(),
      '가 몸을 돌려 ',
      me.get_colored_name(),
      '에게 고개를 끄덕였다.',
    ]);
    era.printButton('「이제 돌아갈까?」', 1);
    await era.input();
    await kitaru.say_and_wait('……네.');
    await era.printAndWait([
      '묘역을 벗어난 뒤에도 ',
      kitaru.get_colored_name(),
      '는 평소의 쾌활한 모습으로 돌아오지 않았다.',
    ]);
    era.printButton('「무슨 일 있어?」', 1);
    await era.input();
    await kitaru.say_and_wait([
      '국화상을 제패하고, ',
      kitaru.get_bigger_sibling_sex_title(),
      '의 그림자에서 벗어나고, ', callname,'과 함께 보낸 나날들.',
    ]);
	
    await kitaru.say_and_wait('지난 3년은 저에게 마치 꿈만 같았어요.');
    await era.printAndWait([
      '말을 마친 ',
      kitaru.get_teen_sex_title(),
      '는 다시 침묵에 빠졌다. 두 사람은 돌아오는 길을 나란히 걸으며, 도로 양옆으로 ',
      kitaru.get_colored_name(),
      '의 머리카락 색을 닮은 단풍잎이 끊임없이 떨어지는 것을 바라보았다.',
    ]);
    await era.printAndWait([
      '그러던 중 ',
      me.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '가 ',
      me.get_colored_name(),
      '의 옷소매를 잡아당기는 것을 느꼈다.',
    ]);
    await kitaru.say_and_wait('아, 맞다!');
    await kitaru.say_and_wait([callname, '! 아까 말씀드렸던 제 향후 목표 말인데요!']);
    await kitaru.say_and_wait(
      '앞으로 어떻게 하면 가장 크고 강력한 대길급 행복을 얻을 수 있을지, 완벽하게 정했어요!',
    );
    era.printButton('「그게 뭔데?」', 1);
    era.printButton('「나한테도 알려줄래?」', 2);
    if ((await era.input()) === 2) {
      await kitaru.say_and_wait('물론이죠!');
    }
    await kitaru.say_and_wait('그건 바로—— 계속해서 이렇게 운세를 쫓으며 달려 나가는 거예요!');
    await kitaru.say_and_wait('하지만 예전처럼 단순히 운이 나쁘다고 원망만 하지는 않을 거예요!');
    await kitaru.say_and_wait('어떤 운명이 닥치더라도 당당하게 마주하는 모습으로요!');
    await kitaru.say_and_wait('말하자면, 운명이 저를 위해 준비한 모든 요리를 즐긴다고나 할까요?');
    era.printButton('「정말 멋진 말이네!」', 1);
    era.printButton('「그거 정말 근사한걸!」', 2);
    await era.input();
    await kitaru.say_and_wait('엣헤!');
    await kitaru.say_and_wait('바로 그거예요!');
    await era.printAndWait([
      '흥분한 ',
      kitaru.get_colored_name(),
      '는 아예 달려 나가기 시작했고, 소박한 겨울 풍경에 생동감을 불어넣었다.',
    ]);
    if (era.get('love:56') >= 75) {
      await era.printAndWait([
        '문득 무언가 생각난 듯, 시야에서 멀어지려던 ',
        kitaru.get_colored_name(),
        '가 다시 달려와 ',
        me.get_colored_name(),
        '의 손을 꽉 잡았다.',
      ]);
      await kitaru.say_and_wait(['맞다! ', callname, '!']);
      await kitaru.say_and_wait('당신도 제 곁에 꼭 붙어 있어야만 한다고요!');
    }
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 앞에서 깡충깡충 뛰어갔고, 다시 ',
      kitaru.sex,
      '의 얼굴에 미소가 돌아왔다.',
    ]);
    await era.printAndWait(
      '가을 하늘 아래 흩날리는 낙엽 사이로 선명한 오렌지색 머리카락이 보였다 안 보였다 하며 황금빛으로 빛났다.',
    );
    await era.printAndWait([
      '아리마 기념이 눈앞으로 다가온 지금, ',
      kitaru.get_colored_name(),
      '는 비로소 자신만의 길을 찾아냈다.',
    ]);
    await era.printAndWait([
      '이제 앞으로 제비통에서 어떤 결과가 나오더라도, ',
      kitaru.sex,
      '는 담담하게 받아들일 수 있을 것이다.',
    ]);
    if (era.get('talent:0:자신감') === 1) {
      era.set('talent:56:자신감', 0);
      await era.printAndWait([kitaru.get_colored_name(), '는 더 이상 [자격지심]을 잃었다!']);
    }
    flags.wait_flag = get_attr_and_print_in_event(56, [3, 3, 3, 3, 3], 0);
  };
};