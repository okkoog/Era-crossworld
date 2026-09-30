const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
  sys_love_uma_in_event,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = class extends CustomizedLove {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} me
   * @param {string} callname
   */
  async 25(tachyon, me, callname) {
    await print_event_name(
      `「아그네스 타키온」? 「${tachyon.get_uma_sex_title()} A」?`,
      tachyon,
    );
    const c_call_m = sys_get_callname(25, 0),
      c_call_t = sys_get_colored_callname(25, 32),
      coffee = get_chara_talk(25),
      coffee_check = era.get('cflag:25:모집상태') === recruit_flags.yes,
      love_25 = era.get('love:25'),
      t_call_c = sys_get_colored_callname(32, 25);
    await coffee.print_and_wait([
      tachyon.get_colored_name(),
      '의 실험실. 평소에는 학원 안을 떠들썩하게 만들던 이곳이 요 며칠간은 유독 조용했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '정말이지, 담당을 혼자 학원에 내버려 두고 자기만 출장을 가버리다니.',
    );
    await coffee.print_and_wait([
      tachyon.get_colored_name(),
      '은 실험실에서 실험을 하며 투덜투덜 불평을 늘어놓았다',
    ]);
    await coffee.print_and_wait(
      '불평의 대상? 당연히 출장 때문에 일주일이나 자리를 비우게 된 어느 모르모트였다.',
    );
    era.println();
    await tachyon.say_and_wait('도시락까지 직접 전자레인지에 돌려야 하다니…… 이런 태만한 행위는 너무하군.');
    era.println();
    await coffee.print_and_wait([
      tachyon.get_colored_name(),
      '은 끊임없이, 끊임없이, 끊임없이 중얼거렸다.',
    ]);
    await coffee.print_and_wait('그저 중얼거림뿐이라면 어떻게든 견딜 수 있었겠지만……');
    era.println();
    await tachyon.say_and_wait(['자네도 이게 학대라고 생각하지 않나, ', t_call_c, '?']);
    await coffee.say_and_wait('…………당신들의 염장질에 저를 끌어들이지 마세요.');
    era.println();
    await coffee.print_and_wait([
      tachyon.sex,
      '가 전혀 멈출 기미를 보이지 않고 자신까지 화제에 끌어들이려 하자, ',
      tachyon.sex,
      '와 같은 빈 교실을 공유하던 ',
      coffee.get_colored_name(),
      '는 마침내 참지 못하고 폭발했다.',
    ]);
    await coffee.say_and_wait([c_call_t, '…… 그 말만 벌써 세 번째에요.']);
    await tachyon.say_and_wait('겨우 세 번뿐이네만. 그렇게 많은 것도 아니지 않나.');
    await coffee.say_and_wait([c_call_m, '은 오늘 겨우 출장 첫날인데……']);
    await tachyon.say_and_wait('…………그렇다 해도 세 번은……');
    await coffee.say_and_wait([me.sex, '가 학원을 떠난 지 30분도 채 안 지났어요.']);
    await tachyon.say_and_wait('………………');
    era.println();
    await coffee.print_and_wait([
      coffee.get_colored_name(),
      '는 한숨을 내쉬었다. 과거에는 실험 지상주의였던 이 동급생이, 트레이너와 사이가 깊어지더니 어떻게 이렇게까지 변할 수 있는지 의문이었다.',
      love_25 >= 50 ? '……뭐, 이해하지 못할 것도 아니다. 상대가 그 사람이라면.': '',
    ]);
    love_25 < 50 &&
      (await coffee.print_and_wait(
        '원래는 냉혹 무정하고, 윤리관도 없으며, 인명 경시……까지는 아닐지도 모르겠지만.',
      ));
    await coffee.print_and_wait([
      tachyon.sex,
      '가 여전히 궁시렁대며 불평하는 모습을 보자, ',
      coffee.get_colored_name(),
      '의 마음속에는 갑자기 짜증이 솟구쳤고, 자신도 모르게 말이 튀어나왔다.',
    ]);
    era.println();
    await coffee.say_and_wait([
      '애초에…… ',
      c_call_m,
      '은 ',
      c_call_t,
      '만의 전유물이 아니잖아요.',
    ]);
    await tachyon.say_and_wait('…………그건 무슨 의미인가?');
    await coffee.say_and_wait([
      '무슨 의미인지는 ',
      c_call_t,
      '스스로가 더 잘 알고 있지 않나요? ',
      c_call_m,
      '이 출장이라고는 했지만, 어디서 뭘 하는지 자세히 말해줬습니까?',
    ]);
    await tachyon.say_and_wait([
      '…………아니, 처음부터 끝까지 ',
      me.sex,
      '는 내게 출장을 간다는 사실만 전해줬을 뿐이네.',
    ]);
    era.println();
    await coffee.print_and_wait([
      '그야 당연했다. 출장이라고는 해도 사실은 얼마 전 ',
      c_call_t,
      '가 일으킨 약물 유출 사고를 급히 처리하러 간 것이었으니까. 그만큼 ',
      tachyon.get_uma_sex_title(),
      '의 감정을 지나치게 배려하는 ',
      callname,
      '이 ',
      tachyon.sex,
      ' 본인에게 사실대로 말했을 리 없었다.',
      coffee_check ? '……조금 질투가 날 정도네.': '',
    ]);
    await coffee.print_and_wait([coffee.get_colored_name(), '는 속으로 중얼거렸다.']);
    era.println();
    await coffee.say_and_wait([
      '그렇다면…… 이런 가능성도 있지 않을까요? ',
      c_call_m,
      '은 사실 출장을 간 게 아니라…… 누군가와 밀회를 즐기고 있다면?',
    ]);
    await tachyon.say_and_wait('…………');
    await coffee.say_and_wait([
      '그도 그럴 게…… ',
      c_call_t,
      '는 너무 번거롭잖아요. 제가 ',
      c_call_m,
      '이라면 벌써 진작에 질려버렸을걸요?',
    ]);
    await tachyon.say_and_wait([
      '…… ',
      me.sex,
      '는 말했네. 나의 주법과 가능성에 매료되었다고.',
    ]);
    await coffee.say_and_wait('후후……');
    await tachyon.say_and_wait('뭐가 웃긴 거지?');
    era.println();
    await coffee.print_and_wait([
      coffee.get_colored_name(),
      '는 커피를 한 모금 마시며, 지금 이 순간 ',
      tachyon.get_colored_name(),
      '의 반응을 만끽했다.',
    ]);
    await coffee.print_and_wait([
      '최근 들어 계속 ',
      love_25 >= 50 ? `「나의」 ${c_call_m} ` : '트레이너 선생님',
      '과 염장을 지르던 이 사람이 이런 불안한 표정을 짓게 만들다니…… 위험해, 조금 중독될 것 같아.',
    ]);
    era.println();
    await coffee.say_and_wait([
      '바꿔 말하면, ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.get_uma_sex_title(),
      ' 그 자체는 ',
      me.sex,
      '에게 아무런 매력이 없다는 뜻 아닌가요?',
    ]);
    await tachyon.say_and_wait('…………');
    await coffee.say_and_wait([
      '주법, 가능성…… ',
      me.sex,
      '가 바라보고 있는 건 과연 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.get_uma_sex_title(),
      '일까요, 아니면 『그것들을 가진 어떤 ',
      tachyon.get_uma_sex_title(),
      ' A』일까요?',
    ]);
    await tachyon.say_and_wait('……아니야……');
    await coffee.say_and_wait([
      '반대로 말하자면, 그런 것들 말고 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.get_uma_sex_title(),
      '가 ',
      me.sex,
      '에게 대체 어떤 매력이 있다는 걸까요?']);
    await tachyon.say_and_wait('…………');
    era.println();
    await coffee.print_and_wait([
      '방금 전의 짜증은 온데간데없이 사라지고 유열감이 극치에 달한 ',
      coffee.get_colored_name(),
      '는 마지막으로 핵폭탄급 한마디를 던지고 교실을 나섰다.',
    ]);
    await coffee.say_and_wait([
      '아, 참. ',
      c_call_m,
      '의 도시락 말인데, 정말 맛있었어요……',
      love_25 >= 50
        ? `나중에도 ${c_call_m}에게 부탁해 볼까요?`
        : `기회가 되면 다시 그분에게 부탁해 봐야겠네요.`,
    ]);
    era.drawLine();
    await tachyon.say_and_wait('…………');
    await tachyon.print_and_wait([
      coffee.get_colored_name(),
      '가 떠나고, 실험실에는 ',
      tachyon.get_colored_name(),
      ' 혼자만이 남겨졌다.',
    ]);
    await tachyon.print_and_wait([
      '두뇌 회전이 빠른 ',
      tachyon.sex,
      '는 방금 한 말들이 그저 ',
      coffee.get_colored_name(),
      '가 자신을 부추기기 위해 일부러 내뱉은 것임을 알고 있었다.',
    ]);
    await tachyon.print_and_wait([
      tachyon.sex,
      '는 심지어 ',
      coffee.get_colored_name(),
      '가 왜 그런 짓을 했는지 원인조차 짐작하고 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('염장질……?');
    era.println();
    await tachyon.print_and_wait([
      coffee.get_colored_name(),
      '의 말에 따르면, 자신과 ',
      callname,
      '은 ',
      tachyon.sex,
      '의 눈에 그렇게 비치고 있었다는 뜻이었다.',
    ]);
    await tachyon.print_and_wait('하지만, 그건 이상하지 않은가?');
    await tachyon.print_and_wait(
      '염장질이란 연인, 혹은 연모하는 관계인 두 사람이 타인의 시선은 아랑곳하지 않고 애정을 과시하는 것을 말한다.',
    );
    await tachyon.print_and_wait([
      '하지만 자신과 ',
      callname,
      '은 그런 관계가 아니었다.',
    ]);
    await tachyon.print_and_wait('연인, 혹은 연모하는 관계……');
    await tachyon.print_and_wait([
      '주변 사람들 눈에 비친 나와 ',
      callname,
      '은 정말로 그런 사이였던 건가?',
    ]);
    await tachyon.print_and_wait([callname, '과 내가…… 연애……']);
    era.println();
    await tachyon.say_and_wait('………!?');
    era.println();
    await tachyon.print_and_wait(
      '그 생각이 뇌리를 스친 순간, 심장에 강심제를 주입한 것처럼 고동이 거세졌고, 과도한 혈류 탓에 뺨이 뜨겁게 달아올랐다.',
    );
    await tachyon.print_and_wait('이…… 이건 마치…… 내가………');
    era.println();
    await tachyon.say_and_wait([
      '그그그그럴 리가 없지 않나…… 그저 실험동물일 뿐…… 그래! 애당초 ',
      me.sex,
      '는 고작 모르모트 군에 불과하다고!',
    ]);
    await tachyon.say_and_wait([
      '내가 왜 ',
      me.sex,
      '가 좋아하는 게 나라는 존재인지, 아니면 나의 주법이나 가능성인지 신경 써야 하는 거지!',
    ]);
    era.println();
    await tachyon.print_and_wait(
      '그래, 모르모트라면 그저 같은 목표를 공유하기만 하면 되는 것이다.',
    );
    await tachyon.print_and_wait([
      '불필요한 감정 따위를 섞을 필요는 없다. 감정이라는 건 실험에 방해만 될 뿐이다.',
    ]);
    await tachyon.print_and_wait([
      '두 사람의 관계는 연구자와 모르모트, 트레이너와 ',
      tachyon.get_uma_sex_title(),
      '.',
    ]);
    tachyon.print('그 이상의 관계는 필요 없다');
    era.printButton('정말로 그런가?', 1);
    era.printButton('맞아, 그럴 뿐이야', 2);
    if ((await era.input()) === 1) {
      await tachyon.print_and_wait('그렇다. 분명 그럴 터였다');
      await tachyon.print_and_wait('그런데 어째서');
      await tachyon.print_and_wait(
        '연인 취급을 받았다는 사실에 마음속 깊은 곳에서 솟구치는 기쁨과 고양감을 억누를 수가 없는 것인가.',
      );
      await tachyon.print_and_wait([
        me.sex,
        '가 ',
        coffee.get_colored_name(),
        '에게 도시락을 만들어줬다는 사실에, 왜 질투와 분노가 가라앉지 않는 것인가.',
      ]);
      await tachyon.print_and_wait([
        '………… ',
        coffee.get_colored_name(),
        '가 말한 대로, 상대가 나라는 존재를 바라보고 있지 않다는 사실에, 왜 이토록 공포와 두려움이 느껴지는 것인가.',
      ]);
      era.println();
      await tachyon.say_and_wait('…………나에게 대체 무슨 일이 일어난 거지.');
      await tachyon.say_and_wait('이건 마치…… 마치……');
      era.println();
      await tachyon.print_and_wait(['마치, 내가 ', callname, '을 좋아하는 것 같지 않은가.']);
      era.println();
      await tachyon.print_and_wait(
        '당사자조차 갈피를 잡지 못하는 감정이 뜨거운 숨결에 섞여 천장으로 흩어졌고, 이내 고독한 실험실 속으로 사라져 갔다.',
      );
    } else {
      await tachyon.print_and_wait('그렇다.');
      await tachyon.print_and_wait('그걸로 충분하다.');
      await tachyon.print_and_wait('두 사람은 그저 순수한 모르모트와 연구자로 남으면 된다.');
      await tachyon.print_and_wait('그저 지금처럼 계속해서 생활해 나가면 되는 것이다.');
      await tachyon.print_and_wait(
        '제멋대로인 천재 과학자와, 묵묵히 따르는 조수 겸 실험체.',
      );
      await tachyon.print_and_wait('두 사람의 관계는 그저 지금 이대로 유지되면 된다.');
      await tachyon.print_and_wait('유지된다라…… 언제까지?');
      await tachyon.print_and_wait(
        '1년? 2년? 내가 졸업할 때까지? 대학에 진학할 때까지? 사회에 나가기 전까지?',
      );
      await tachyon.print_and_wait('이런 관계를, 그때까지 유지할 수 있을 리가 없지 않나.');
      era.println();
      await tachyon.say_and_wait('하아……');
      era.println();
      await tachyon.print_and_wait(
        '하지만 어찌 됐든 선택은 내려졌다. 그러니 지금은, 이걸로 됐다.',
      );
    }
    era.println();
    await tachyon.say_and_wait(['빨리 돌아오게나, ', callname, '……']);
  }

  async 49(tachyon, me, callname) {
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '릿토 생활관의 어느 침실 안, 한 명의 ',
      tachyon.get_uma_sex_title(),
      '가 베개에 얼굴을 묻고는 낮은 목소리로 웅얼거리고 있었다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '평소 같으면 이 방에서 이런 광경이 벌어지는 것은 딱히 특별할 일도 아니었다.',
    );
    await tachyon.print_and_wait([
      '항상 분홍색 머리의 ',
      tachyon.get_uma_sex_title(),
      '가 베개를 껴안고 어느 ',
      tachyon.get_uma_sex_title(),
      '를 향한 사랑을 속삭이곤 했으니까.',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('하지만 오늘의 주인공은 평소와 조금 달랐다.');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '분홍색 머리의 ',
      tachyon.get_uma_sex_title(),
      '와 같은 방을 쓰는 밤색 머리의 ',
      tachyon.get_uma_sex_title(),
      '가, 지금은 과거 룸메이트가 보여주었던, 당시에는 이해할 수 없었던 행동을 그대로 따라 하고 있었다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '당시의 ',
      tachyon.sex,
      '는 그런 행위가 정말이지 쓸데없는 짓이라고만 생각했다.',
    ]);
    await tachyon.print_and_wait('정말로 하고 싶은 말이라면, 어째서 부끄러워하는 거지?');
    await tachyon.print_and_wait('부끄러움을 느낀다면, 차라리 입 밖으로 내뱉지 않으면 그만 아닌가?');
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '지금에 와서야 ',
      tachyon.sex,
      '는 비로소 그 행동의 이유를 깨달았다.',
    ]);
    await tachyon.print_and_wait('부끄러움을 느끼는 것은 그 말속에 담긴 애정 때문이며, ');
    await tachyon.print_and_wait(
      '굳이 말을 내뱉는 것은, 그렇게라도 하지 않으면 내면의 뜨거운 감정이 해소되지 않기 때문임을.',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '그리하여 지금의 ',
      tachyon.sex,
      ' 역시 베개를 향해, 그리고 룸메이트가 원정 레이스로 자리를 비워 텅 빈 방 안에서 홀로 진심을 털어놓을 수밖에 없었다.',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '……그렇게는 말해도, 사실 이런 감정의 근원이 무엇인지 ',
      tachyon.sex,
      '는 여전히 확실히 파악하지 못한 상태였다.',
    ]);
    await tachyon.print_and_wait('그저 자신에게 순종적인————');
    await tachyon.print_and_wait([
      '동시에 지금 자신의 이 초조한 감정의 근원이기도 한 원흉인 ',
      me.sex,
      '의 이름을 끊임없이 부를 뿐이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('처음 만났을 때, 순전히 실험체로서의 흥미 때문에 붙였던 호칭.');
    await tachyon.print_and_wait('시작할 때는 분석과 냉소만이 담겨 있었던 그 호칭.');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '그것이 지금은 복잡한 감정이 뒤섞여, 입 밖으로 낼 때마다 심장이 떨려오는 호칭으로 변해 있었다.',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('이 감정은 대체 무엇이란 말인가');
    await tachyon.print_and_wait('달콤하면서도 쓰고, 따스하면서도 두려웠다.');
    await tachyon.print_and_wait('이토록 상충하는 속성들이 오직 하나의 감정 안에 모여 있었다.');
    await tachyon.print_and_wait('이상하다, 뜨겁다, 그리고…… 무섭다?');
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('미지의 영역을 대하는 자신의 태도는 언제나 기대와 희열뿐이었다.');
    await tachyon.print_and_wait(
      '그런데 어째서 이 미지의 감정은 자신에게 공포라는 감정을 품게 만드는 것일까.',
    );
    await tachyon.print_and_wait([
      '무엇이 무서운 거지? 이 감정이? 아니면 ',
      callname,
      '이?',
    ]);
    await tachyon.print_and_wait(['내가…… ', callname, '을 무서워한다고?']);
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('더욱 크게 요동치는 내면이 해답을 내놓았다.');
    await tachyon.print_and_wait(['내가 ', callname, '를 두려워하고 있는 건가?']);
    await tachyon.print_and_wait([me.sex, '의 무엇을?']);
    await tachyon.print_and_wait(['고작 ', callname, '따위인데.']);
    await tachyon.print_and_wait('하지만…… 순수한 공포와는 결이 달랐다.');
    await tachyon.print_and_wait('이 복잡한 감정의 정체는 무엇일까?');
    await tachyon.print_and_wait('긴장, 초조, 불안, 흥분, 환희, 공포, 당혹');
    await tachyon.print_and_wait(
      '세상의 모든 감정이 조금씩 묻어있는 것 같으면서도, 그 어느 하나에 속하지는 않는 감정이었다.',
    );
    await tachyon.print_and_wait(['고작 ', callname, '따위인데 말이야.']);
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await tachyon.print_and_wait('……아니, 사실 굳이 추측할 필요도 없지 않은가?');
    await tachyon.print_and_wait([
      me.sex,
      '의 이름을 부를 때마다 내면을 훑고 지나가는 전류.',
    ]);
    await tachyon.print_and_wait([
      me.sex,
      '의 목소리를 들을 때마다 가슴속에서 치밀어 오르는 고동.',
    ]);
    await tachyon.print_and_wait([
      me.sex,
      '의 미소를 볼 때마다 정신없이 뒤엉키는 사고.',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('아아, 역시나.');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('아니, 상상 그 이상이었다.');
    era.println();
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('설마 했던 일이다.');
    await tachyon.print_and_wait('그저 「애정」을 담아 이름을 불렀을 뿐인데');
    await tachyon.print_and_wait('심경이 이토록 극적으로 변할 줄이야.');
    era.println();
    await tachyon.print_and_wait('조바심은 유열로 변했고');
    await tachyon.print_and_wait('당혹감은 안도감으로 변했다.');
    await tachyon.print_and_wait('불안감은 환희로 변했다.');
    await tachyon.print_and_wait('하지만 공포는……');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await tachyon.print_and_wait('어째서, 어째서 공포만은 그대로 남아있는 거지?');
    await tachyon.print_and_wait('분명히, 나 스스로 인정하지 않았나.');
    await tachyon.print_and_wait(['이미 내가 ', callname, '을 사랑하고 있다는 걸 말이야.']);
    await tachyon.print_and_wait('그런데 왜 여전히 무서운 거지?');
    await tachyon.print_and_wait('왜 여전히 공포스러운 거지?');
    era.println();
    await tachyon.print_and_wait('아아……');
    await tachyon.print_and_wait('답은 너무나도 명백하지 않은가.');
    await tachyon.print_and_wait('이 환희가 사랑으로 인해 태어난 것이라면, ');
    await tachyon.print_and_wait('두려움을 느끼는 원인 또한 ');
    await tachyon.print_and_wait('당연히 「사랑받지 못함」에 대한 공포일 테니까.');
    era.println();
    await tachyon.print_and_wait(['만약 ', me.sex, '가 나를 좋아하지 않는다면 어쩌지?']);
    await tachyon.print_and_wait(['만약 ', me.sex, '가 나를 싫어하게 된다면 어쩌지?']);
    await tachyon.print_and_wait(['만약 ', me.sex, '가 다른 누군가를 사랑하게 된다면 어쩌지?']);
    await tachyon.print_and_wait([
      '만약…… ',
      me.sex,
      '가 사랑하는 게 「나 자신」이 아니라면 어쩌지?',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '주법, 가능성…… ',
      me.sex,
      '가 바라보고 있는 건 과연 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.get_uma_sex_title(),
      '일까, 아니면 「그것들을 가진 어떤 ',
      tachyon.get_uma_sex_title(),
      ' A」일까?',
    ]);
    await tachyon.print_and_wait([
      '반대로 말하자면, 그런 것들 말고 ',
      tachyon.get_colored_name(),
      '이라는 ',
      tachyon.get_uma_sex_title(),
      '가 ',
      me.sex,
      '에게 대체 어떤 매력이 있다는 걸까?']);
    era.println();
    await tachyon.print_and_wait([me.sex, '의 그 광기 어린 눈빛이 떠올랐다.']);
    await tachyon.print_and_wait([
      me.sex,
      '가 매료된 것은 ',
      tachyon.get_colored_name(),
      '이 아니라, ',
      tachyon.get_colored_name(),
      '의 주법이었다.',
    ]);
    await tachyon.print_and_wait([
      me.sex,
      '가 돕고 싶어 했던 것은 ',
      tachyon.get_colored_name(),
      '이 아니라, ',
      tachyon.get_colored_name(),
      '의 꿈이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '…………']);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '……그건 그저 부수적인 존재에 불과하지 않은가.']);
    await tachyon.print_and_wait([
      '만약 내가 죽는다면, ',
      me.sex,
      '는 그 사실에 진심으로 슬퍼해 줄까?']);
    await tachyon.print_and_wait([
      '만약 내가 다시는 달릴 수 없게 된다면, ',
      me.sex,
      '는 그 사실에 가슴 아파해 줄까?']);
    await tachyon.print_and_wait([
      '만약 내가 꿈을 포기한다면, ',
      me.sex,
      '는 그 사실을 안타까워해 줄까?']);
    era.println();
    await tachyon.print_and_wait('……아니, 그 질문들에 대한 대답은 분명히 「예」겠지.');
    await tachyon.print_and_wait('하지만, 하지만 말이야.');
    era.println();
    await tachyon.print_and_wait([
      '만약 ',
      tachyon.get_colored_name(),
      '에게서 다리도, 꿈도, 가능성도 전부 사라진다면, ',
      me.sex,
      '는 그래도 ',
      tachyon.get_colored_name(),
      '을 사랑해 줄까?']);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('결코 응답받지 못할 의문만이 베갯속 솜 사이로 흩어져 갔다.');
    era.println();
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('아아, 안 되겠군.');
    await tachyon.print_and_wait(
      '이름을 부를 때마다 여전히 뇌전과도 같은 자극이 느껴졌다.',
    );
    await tachyon.print_and_wait(
      '부를 때마다 뇌가 미쳐버릴 듯한 떨림을 경험했다.',
    );
    await tachyon.print_and_wait('하지만 ');
    await tachyon.print_and_wait('의문을 가질 때마다 마음속 그림자는 한 뼘 더 길어졌고 ');
    await tachyon.print_and_wait('의심을 품을 때마다 내면의 공포는 한 단계 더 커져만 갔다.');
    era.println();
    await tachyon.print_and_wait('무섭다.');
    await tachyon.print_and_wait('불안하다.');
    await tachyon.print_and_wait('괴롭다.');
    era.println();
    await tachyon.print_and_wait('이것이 좋아한다는 것인가.');
    await tachyon.print_and_wait('이것이 매료되었다는 것인가.');
    await tachyon.print_and_wait('이것이, 연애라는 것인가?');
    era.println();
    tachyon.print('만약 그렇다면…… 그렇다면');
    era.printButton('……무언가 해야만 해 (관계 진전)', 1);
    era.printButton('……아니, 역시 그만두자 (관계 보류)', 2);
    if ((await era.input()) === 1) {
      await tachyon.print_and_wait('무언가를 해야만 했다.');
      await tachyon.print_and_wait('이렇게 초조해하고만 있어서는 아무것도 바뀌지 않았다.');
      await tachyon.print_and_wait([
        '애당초 ',
        tachyon.get_colored_name(),
        '은 왕자님이 나타나기만을 기다리는 그런 연약한 ',
        tachyon.get_uma_sex_title(),
        '가 아니니까.']);
      await tachyon.print_and_wait('주어진 변수를 조합하고, 실험을 통해 증명한다.');
      await tachyon.print_and_wait('그것이야말로 연구자로서 마땅히 해야 할 일이었다.');
      await tachyon.print_and_wait('제대로 생각해보는 거다.');
      era.println();
      await tachyon.print_and_wait([
        '유일한 실험 목적, ',
        callname,
        '의 마음속에서 ',
        tachyon.get_colored_name(),
        '이 차지하는 지위를 증명하는 것.']);
      await tachyon.print_and_wait('실험 방안……은 있다. 하지만 위험도와 리스크가……');
      era.println();
      await tachyon.say_and_wait('………………후후.');
      era.println();
      await tachyon.print_and_wait('더 고려할 게 남아있나?');
      await tachyon.print_and_wait([
        '그 사람이 곁에 없는 ',
        tachyon.get_colored_name(),
        '에게, 과연 존재 의의가 남아있기는 한가?']);
      await tachyon.print_and_wait('이미 이 지경까지 와놓고서, 아직도 자신을 속일 셈인가?');
      era.println();
      await tachyon.print_and_wait('아아.');
      await tachyon.print_and_wait([
        '전부 자네 탓이라네. 나를 연구자에서 고작 평범한 한 명의 ',
        tachyon.get_teen_sex_title(),
        '로 만들어 버렸으니.']);
      await tachyon.print_and_wait([
        '그러니 책임을 지게나, 나의 사랑스러운 ',
        callname,
        '.']);
      await tachyon.print_and_wait('나의 고백을, 나의 「연서」를.');
      await tachyon.print_and_wait('부디, 달게 받아주게나.');
      await sys_love_uma_in_event(32);
    } else {
      await tachyon.print_and_wait('안 돼……');
      era.println();
      await tachyon.print_and_wait('만약 무언가 변해버린다면');
      await tachyon.print_and_wait(['만약 앞으로 다시는 ', me.sex, '와 만날 수 없게 된다면.']);
      await tachyon.print_and_wait(['만약 다시는 ', me.sex, '가 만들어준 도시락을 먹을 수 없게 된다면.']);
      await tachyon.print_and_wait(['만약 다시는 그의 그 광기 어린 눈빛을 볼 수 없게 된다면.']);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '은, 더 이상 살아갈 수 없을 것이다.']);
      era.println();
      await tachyon.print_and_wait('그런 일은 절대로 싫었다.');
      await tachyon.print_and_wait('그런 일은 절대로 용납할 수 없었다.');
      era.println();
      await tachyon.print_and_wait([
        callname,
        '과 ',
        tachyon.get_colored_name(),
        '의 일상을 위하여.']);
      await tachyon.print_and_wait('이 나날들을 지켜내기 위하여.');
      await tachyon.print_and_wait('억누르자.');
      await tachyon.print_and_wait('가라앉히자.');
      await tachyon.print_and_wait('참아내는 거다.');
      era.println();
      await tachyon.print_and_wait('내면의 격동을 억누르고');
      await tachyon.print_and_wait('내면의 열기를 가라앉히며');
      await tachyon.print_and_wait('내면의 불안을 참아내자.');
      era.println();
      await tachyon.print_and_wait('다만……');
      await tachyon.print_and_wait('아무리 강한 스프링이라도 압력에 의해 파괴되는 날은 오는 법이다.');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        '이라는 이름의 이 스프링이, 과연 언제까지 버텨낼 수 있을까.']);
      era.set('cflag:32:호감거절', 49);
    }
  }
};