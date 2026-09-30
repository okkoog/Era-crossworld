const era = require('#/era-electron');

const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean},number,number,TachyonEduMarks,EventObject):Promise>} handlers */
module.exports = (handlers) => {
  /**
   * @param {CharaTalk} tachyon
   * @param {CharaTalk} me
   */
  async function want_to_see(tachyon, me) {
    await me.say_and_wait('나는 타키온이 경기장에서 달리는 모습을 보고 싶어.');
    await me.say_and_wait([
      '다른 ',
      tachyon.get_uma_sex_title(),
      '와 겨루어 마지막에 승리하는 모습을 보고 싶어.',
    ]);
    await me.say_and_wait('타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶어.');
  }

  handlers[15] = async (tachyon, me, callname, flags, relation, love) => {
    await print_event_name('실험 과제 책정', tachyon);
    await tachyon.say_and_wait('나가고 싶은 레이스?');
    era.println();
    await era.printAndWait([
      '어느 구 이과 준비실, 혹은 ',
      tachyon.get_colored_name(),
      '의 실험실 안에서, ',
      me.get_colored_name(),
      '은(는) 실험대 앞에 있는 ',
      tachyon.get_colored_name(),
      '에게 고개를 끄덕였다.',
    ]);
    await era.printAndWait([
      '생각해 보면 ',
      tachyon.get_uma_sex_title(),
      '와 계약한 첫날에 물어봤어야 할 일이었지만, 당시의 ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '에게 너무 매료된 나머지 이 일을 완전히 잊고 있었던 것 같았다.',
    ]);
    await era.printAndWait([
      '어찌 됐든, 트윙클 시리즈에 참가할 생각이라면 레이스 일정 계획은 반드시 필요하다. ',
      tachyon.sex,
      '의 선택을 들어야 ',
      tachyon.sex,
      '에게 더 적합한 훈련 방향을 정할 수 있기 때문이다.',
    ]);
    await era.printAndWait('클래식 3관 노선일까, 아니면 티아라? 그것도 아니면 마일?');
    await era.printAndWait([
      '단거리는…… 아마 안 되겠지. 미안한 말이지만 ',
      tachyon.get_colored_name(),
      '에게 그쪽 적성은 없을 것이다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……레이스? 흥미 없네.');
    await tachyon.say_and_wait(
      '애당초 내 연구는 나 자신의 가능성을 위한 것. 남이야 어찌 되든 나와 무슨 상관인가. 강약을 겨루는 건 어린애들의 놀이에 불과해.',
    );
    await era.printAndWait([
      '매우 ',
      tachyon.get_colored_name(),
      '다운 답변이었다.',
    ]);
    await era.printAndWait([
      '솔직히 말해서, ',
      tachyon.sex,
      '가 이렇게 대답할 것은 충분히 예상 범위 안이었다.',
    ]);
    await era.printAndWait('하지만, 트레이너로서 다해야 할 책임이 있었다.');
    await era.printAndWait([
      '게다가…… ',
      tachyon.sex,
      '에게 마음을 빼앗긴 팬으로서, 자신의 아이돌이 더 큰 무대 위에서 광채를 뿜어내는 모습을 보고 싶어 하는 것은 당연한 일이 아닌가.',
    ]);
    era.println();
    await era.printAndWait([
      '그리하여, ',
      me.get_colored_name(),
      '은(는) 말을 정리하고 입을 열었다.',
    ]);
    era.println();
    if (love >= 50 && relation <= 225 && tachyon.sex_code - 1) {
      era.printButton(
        `「그건, 네게 레이스가 필요하기 때문이야. ${tachyon.get_uma_sex_title()}에겐 레이스가 필요해」`,
        1,
      );
      await era.input();
      await era.printAndWait('이것은 추측도, 허세도 아닌 사실의 진술이었다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '에겐 레이스가 필요하다. ',
        tachyon.sex,
        '의 실험을 검증하기 위해서.',
      ]);
      await era.printAndWait([
        tachyon.get_uma_sex_title(),
        '에겐 레이스가 필요하다. 그 투쟁심을 발산하기 위해서.',
      ]);
      await era.printAndWait([
        '두 가지 요구를 동시에 만족시킬 수 있으니, ',
        tachyon.sex,
        '에게 거절할 이유는 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……무슨 뜻인지는 알겠다만, 자네 화법은 정말 정이 안 가는군.',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 차가운 눈으로 ',
        me.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.println();
      await era.printAndWait('아무래도 좀 더 강한 자극이 필요한 걸까? 그렇다면……');
      era.println();
      await me.say_and_wait(
        '아, 만약 타키온이 지는 게 무서워서 참가를 거절하는 거라면 이해할 수 있어.',
      );
      await me.say_and_wait('타키온의 자존심이 걸린 문제이기도 하고, 이번 세대 아이들 중엔 강자가 많으니까.');
      await me.say_and_wait([
        '만약 실력 면에서 타키온을 능가하는 ',
        tachyon.get_uma_sex_title(),
        '가 나타나기라도 한다면, 한계를 넘었다느니 하는 타키온의 말은 마치……',
      ]);
      era.println();
      await era.printAndWait('우스갯소리처럼 들릴 테니까.');
      await era.printAndWait([
        '양손에 시험관 열 개를 집어 들고 관자놀이에 핏대를 세우는 ',
        tachyon.get_colored_name(),
        '을 보고, ',
        me.get_colored_name(),
        '은(는) 뒤에 이어질 말을 삼킬 수밖에 없었다.',
      ]);
      await tachyon.say_and_wait([
        callname,
        ', 자네란 인간은…… 붙임성이 없는 걸 넘어 매를 버는 소리만 골라 하는군. 정말 죽는 게 두렵지 않은 건가?',
      ]);
      await me.say_and_wait('으으으으……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 변명하려 입을 열었지만, ',
        tachyon.get_colored_name(),
        '이 손으로 입을 막아버리는 바람에 아무 말도 할 수 없었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('어디 보자…… 그래, 이게 좋겠군.');
      era.println();
      await era.printAndWait([
        '계속 손으로 막고 있는 게 번거롭다고 생각했는지, ',
        tachyon.get_colored_name(),
        '의 머릿속에 좋은 생각이 스친 모양이었다.',
      ]);
      await era.printAndWait([
        '동시에, ',
        me.get_colored_name(),
        '의 뇌리에도 나쁜 일이 일어날 것만 같은 전류가 흘렀다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '가 천천히 가운의 밑단을 들어 올렸다. ',
        me.get_colored_name(),
        '의 마음속 위험 신호는 정점에 달했지만, 도망친들 어디로 갈 수 있겠는가.',
      ]);
      await era.printAndWait([
        '하물며 ',
        tachyon.get_uma_sex_title(),
        '의 손아귀에서 도망친다고? ',
        me.get_colored_name(),
        '은(는) 비록 ',
        tachyon.get_colored_name(),
        '에게 미쳤다는 소리를 듣긴 해도, 그런 불가능한 망상을 할 정도로 지능이 낮지는 않았다.',
      ]);
      era.println();
      await era.printAndWait('가운 아래에는 윤기가 흐르는 검은색 스타킹이 보였다.');
      await era.printAndWait(
        '이른 아침부터 풍만한 엉덩이와 가느다란 다리를 감싸고 있던 후끈한 스타킹은, 하루 종일의 숙성을 거쳐 안팎으로 완벽하게 "맛"이 들어 있었다.',
      );
      await era.printAndWait([
        '게다가 이 스타킹을 신은 사람은 평소 생활 습관이 엉망인 ',
        tachyon.get_colored_name(),
        '이었다.',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 공포에 질려 고개를 저었으나, 이미 늦었다.',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 천천히 스타킹을 벗어 내렸다. 스타킹이 엉덩이에서 벗겨지는 순간, ',
        me.get_colored_name(),
        '은(는) 마치 ',
        tachyon.get_colored_name(),
        '의 몸이 그 탄력에 떨리는 것만 같은 착각이 들었다.',
      ]);
      await era.printAndWait([
        '스타킹이 가랑이 부근까지 내려왔다. 지금까지 양조된 냄새가 흩어지는 것을 원치 않는 듯, 검은 비단은 ',
        tachyon.get_child_sex_title(),
        '의 양다리 사이 신비로운 부위와 실 같은 분비물로 연결되어 있었다————.',
      ]);
      await era.printAndWait([
        '타키온, 오늘 설마 속옷을 안 입은 건가? ',
        me.get_colored_name(),
        '은(는) 문득 그런 생각이 들었다. 이 실을 보니 진실은 자명해 보였다.',
      ]);
      await era.printAndWait(
        '마치 무대의 막이 오르듯, 눈부시게 하얀 허벅지 피부가 드러났다. 그것은 곧 비극적인 막이 오름을 상징하고 있었다.',
      );
      era.println();
      await tachyon.say_and_wait(['자, ', callname, ', 입 벌리게나～～']);
      era.printButton('「으으으으!!」', 1);
      await era.input();
      await era.printAndWait([
        '이대로는 안 된다는 본능적인 충동에, ',
        me.get_colored_name(),
        '은(는) 부질없는 저항을 시도했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 서둘러 네발로 기어 실험실을 탈출하려 했지만, 예상대로 단 한 걸음 만에 인간으로서는 반응할 수 없는 속도를 낸 ',
        tachyon.get_colored_name(),
        '에게 등을 밟혀 올라타게 되었다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        me.get_colored_name(),
        '의 등에 올라타 스타킹으로 ',
        me.get_colored_name(),
        '의 입을 묶었다. 마치 재갈처럼 고정된 채 압박을 견디지 못한 ',
        me.get_colored_name(),
        '이(가) 입을 벌리자, 스타킹은 그대로 ',
        me.get_colored_name(),
        '의 볼과 입가에 물려졌다.',
      ]);
      await era.printAndWait([
        '순간, 시큼하고 알싸한 냄새가 ',
        me.get_colored_name(),
        '의 입안 가득 퍼졌다. 눅눅한 촉감과 가랑이 사이에서 배어 나온 특유의 체취가 ',
        me.get_colored_name(),
        '의 비강을 침범했다. 이 맹렬한 악취 공세에 ',
        me.get_colored_name(),
        '은(는) 팔다리에 힘이 풀려 바닥에 쓰러지고 말았다.',
      ]);
      era.println();
      await tachyon.say_and_wait('흥…… 조금은 울화가 풀리는군. 본론으로 돌아가지.');
      await tachyon.say_and_wait('레이스 참가는 물론 필수네. 선택할 레이스 말인데……');
      await tachyon.say_and_wait(
        '후후, 클래식 3관을 목표로 하겠네. 아까 그렇게 큰소리를 쳤으니, 만약 내 발목을 잡는다면 가만두지 않을 줄 알게나. 이의는 없겠지?',
      );
      era.println();
      await era.printAndWait([
        '냄새에 정신을 잃기 전, ',
        me.get_colored_name(),
        '의 마지막 생각은 ｢이의가 있든 없든 일단 말은 하게 해줘｣ 라는 것이었다.',
      ]);
      return;
    } else if (
      love >= 50 &&
      relation > 225 &&
      tachyon.sex_code - 1 &&
      me.sex_code > 0
    ) {
      era.printButton('왜냐하면……', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 입을 열려 했으나, 뒤돌아선 ',
        tachyon.get_colored_name(),
        '이 입술을 손가락으로 누르는 바람에 가로막혔다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 일어서서 소파에 앉아 있는 ',
        me.get_colored_name(),
        '을(를) 내리눌렀고, ',
        me.get_colored_name(),
        '과(와) 시선을 정면으로 마주하며 응시했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '자네가 무슨 말을 하려는지 알고 있네. 공적으로나 사적으로나 내가 레이스에 참가해야 할 이유와 필요성도 알고 있어. 하지만……',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '는 몸을 돌려 ',
        me.get_colored_name(),
        '의 허벅지 위에 털썩 주저앉더니, ',
        me.get_colored_name(),
        '의 허벅지 바깥쪽을 툭툭 쳤다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '지금은 레이스에 나갈 기분이 아니란 말이지. 그러니 방법을 좀 생각해보게나. 나를 기쁘게 할 만한 말을 해보란 말이야. 기분이 좋아지면…… 레이스에 나갈 마음이 생길지도 모르지 않나?',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 쓴웃음을 지으며 ',
        tachyon.get_colored_name(),
        '의 허리를 껴안았다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 아주 자연스럽게 몸을 밀착시키며 가장 편안한 자세를 잡았다.',
      ]);
      era.println();
      await me.say_and_wait('타키온이 제일 멋져.');
      await me.say_and_wait('타키온은 너무 귀여워.');
      await me.say_and_wait('타키온은 정말 아름다워.');
      await me.say_and_wait(['가장 대단하고 강한 ', tachyon.get_uma_sex_title()]);
      await me.say_and_wait([
        '초광속의 ',
        tachyon.sex_code === 1 ? '왕자님' : '공주님',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 계속해서 ',
        tachyon.get_colored_name(),
        '의 귓가에 칭찬 섞인 말들을 속삭였다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 귀가 쉬지 않고 쫑긋거리는 모습에서 그 말들이 얼마나 효과적인지가 드러났다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '는 의기양양한 표정을 지으며 ',
        me.get_colored_name(),
        '의 허벅지를 세게 때리며 계속하라는 신호를 보냈다.',
      ]);
      era.println();
      await tachyon.say_and_wait('흐흐…… 더 해보게, 더! 더 많이 말해봐!');
      era.println();
      await era.printAndWait([
        '허벅지가 조금 얼얼해진 ',
        me.get_colored_name(),
        '은(는) 문득 장난기가 발동했다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 안고 있던 손을 풀어 ',
        tachyon.sex,
        '의 허벅지 바깥쪽으로 옮겼다.',
      ]);
      era.println();
      await tachyon.say_and_wait(['……? ', callname, '?']);
      era.printButton('「타키온이 달릴 때 이 큰 엉덩이가 흔들리는 모습을 보고 싶어」', 1);
      await era.input();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 풍만한 엉덩이를 힘껏 찰싹 내리쳤다.',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 전신이 파르르 떨렸고, 몸에 딱 붙은 스타킹 위로 검은 물결이 일렁였다.',
      ]);
      await me.say_and_wait(
        '레이스가 끝난 뒤에, 대기실에서 타키온의 안을 하얀 액체로 듬뿍 채워주고 싶어.',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '의 목소리는 여전히 부드러웠으나, 그 내용은 지극히 상스러운 것이었다.',
      ]);
      await era.printAndWait([
        '기분 탓인지, ',
        tachyon.get_colored_name(),
        '의 귀가 오히려 더 꼿꼿하게 선 것처럼 보였다.',
      ]);
      era.println();
      await me.say_and_wait(
        '그리고 바이브레이터로 타키온의 안을 막은 채 그대로 위닝 라이브 무대에 세우는 거야.',
      );
      await me.say_and_wait(
        '승부복을 입은 타키온이 아랫배의 이물감을 견디며 무대 중앙에 서 있는 거지……',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 천천히 ',
        tachyon.sex,
        '의 배를 쓰다듬으며 말을 끝맺으려 했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        me.get_colored_name(),
        '의 손이 붙잡혔다.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 고개를 돌려 ',
        me.get_colored_name(),
        '을(를) 바라보았다. 어느샌가 그녀의 암적색 눈동자는 욕정에 절여진 연분홍색으로 변해 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '…… 그런 말로 나를 도발하다니…… 뒷감당은 어떻게 할지 알고 있겠지……❤',
      ]);
      era.println();
      await era.printAndWait('아아, 아무래도 장난이 지나쳤던 모양이다.');
      await era.printAndWait([
        '언제부터였는지 ',
        tachyon.get_colored_name(),
        '의 엉덩이는 ',
        me.get_colored_name(),
        '의 하복부에 밀착되어 있었다.',
      ]);
      await era.printAndWait('마치 주인의 손길을 기다리는 강아지처럼 끊임없이 몸을 비벼댔다.');
      era.println();
      await era.printAndWait([
        '이대로 시작해도 상관은 없겠지만…… 원래 ',
        me.get_colored_name(),
        '의 목적이 무엇이었더라……?',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '레이스는 나갈게❤ 클래식 3관❤ 목표는 3관으로 하지❤ 자…… ',
        callname,
        '❤ 어서❤ 이리 오게❤',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 미소를 지으며 ',
        tachyon.get_colored_name(),
        '을 바닥에 눕혀 눌렀다.',
      ]);
      await quick_into_sex(32);
    } else if (relation <= 225) {
      era.printButton('이익으로 유혹한다', 1);
      await era.input();
      await me.say_and_wait(
        '레이스에 참가하면 상금을 실험에 쓸 수 있잖아. 그러면 연구비 문제도 해결될 거야.',
      );
      era.println();
      await era.printAndWait([
        '먼저 이익으로 유혹해 본다. ',
        tachyon.get_colored_name(),
        ' 같은 연구자에게 감정에 호소하는 것은 우스운 일이다. 논리적으로 상대를 설득하는 것이 최선이다.',
      ]);
      await tachyon.say_and_wait([
        '기각하네, ',
        callname,
        '. 내 연구의 부산물만으로도 충분히 돈을 벌 수 있어. 레이스 준비에 낭비되는 시간의 기회비용을 따져보면 상금이 주는 이득보다 훨씬 크단 말일세.',
      ]);
      era.println();
      await me.say_and_wait(
        '하지만 레이스로 모여드는 팬들은? 팬들의 소비력도 상당한 연구비가 될 텐데?',
      );
      era.println();
      await tachyon.say_and_wait(
        '자네 말이 맞네. 인기를 얻는다면 그 이익이 연구 자체의 이익보다 클지도 모르지……',
      );
      await tachyon.say_and_wait(
        '하지만 그렇게 되면 소위 말하는 팬 서비스에 들어가는 시간도 늘어나게 돼. 위닝 라이브나 이미지 관리 같은 것들 말이야. 시간 비용이 더 늘어난단 소리지.',
      );
      await tachyon.say_and_wait(
        '게다가 자네는 한 가지 잊은 게 있군. 내가 돈이 필요한 이유는 실험을 위해서야. 실험이 근본적인 목적이지, 돈벌이가 목적이 아니란 말일세.',
      );
      era.println();
      await me.say_and_wait(
        '……만약 레이스 참가를 거부한다면, 그건 트레센 학원의 건립 방침에 어긋나는 행위가 될 거야.',
      );
      await me.say_and_wait(
        '보통은 이렇게까지 심각해지진 않겠지만, 이미 전과가 있는 타키온이라면…… 최악의 경우 퇴학당할 수도 있어.',
      );
      era.println();
      await era.printAndWait('이익 유혹이 통하지 않으니 이번엔 위협을 해본다.');
      await era.printAndWait(
        '사람을 겁주는 건 좋지 않지만, 실제로 일어날 수 있는 가능성이긴 했다.',
      );
      await era.printAndWait([
        '그 이사장님이 그런 일을 허락할 것 같지는 않았지만, 지금은 일단 ',
        tachyon.get_colored_name(),
        '을 설득하기 위한 카드로 썼다.',
      ]);
      era.println();
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '의 반응은 마치 재미있는 농담이라도 들은 것 같았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 우리가 처음 만났을 때를 기억하나? 그때 이미 퇴학 위협은 한 번 겪었네. 내가 정말 그런 걸 신경 쓸 거라 생각하나?',
      ]);
      era.println();
      await me.say_and_wait('!', true);
      await era.printAndWait('순간 허점을 찔리고 말았다.');
      await era.printAndWait([
        '기억을 더듬어 보면, 당시의 자신은 퇴학당할지도 모른다는 소리를 듣고 정신없이 ',
        tachyon.get_colored_name(),
        '을 찾아다녔었다.',
      ]);
      await era.printAndWait([
        '하지만 정작 당사자인 ',
        tachyon.sex,
        '는 평소처럼 실험실에서 자기 할 일을 하고 있었을 뿐이었다.',
      ]);
      await era.printAndWait(
        '자신과 계약할 당시의 태도로 보아, 딱히 대안이 있어 보이지도 않았다.',
      );
      await era.printAndWait([
        '다시 말해…… ',
        tachyon.sex,
        '는 정말로 퇴학 여부 따위는 안중에도 없었던 것이다.',
      ]);
      era.println();
      await era.printAndWait([
        '어떻게 해야 할까. 회유도 위협도 통하지 않는 ',
        tachyon.sex,
        '를 설득할 방법이 대체 뭐가 있을까.',
      ]);
      era.printButton('포기한다', 1);
      era.printButton('계속 생각한다', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '속수무책. 그것이 지금 ',
          me.get_colored_name(),
          '의 상태였다.',
        ]);
        await era.printAndWait([
          '방법이 없었다. ',
          tachyon.get_colored_name(),
          '에게 있어 ',
          tachyon.sex,
          '가 원하는 것을 레이스에서 얻어야 할 필요가 전혀 없었기 때문이다.',
        ]);
        await era.printAndWait([
          '그리하여 ',
          me.get_colored_name(),
          '은(는) 스스로도 가장 가능성이 없다고 생각했던 최후의 수단을 쓰기로 했다.',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '그래서, ',
          callname,
          ', 나를 설득할 다른 방법이 더 남아 있나?',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 흥미진진한 눈으로 ',
          me.get_colored_name(),
          '을(를) 바라보다가, 다음 순간 표정이 경악으로 바뀌었다.',
        ]);
        await era.printAndWait(
          '이유는 간단했다. 누구라도 눈앞에서 멀쩡히 대화하던 사람이 갑자기 바닥에 무릎을 꿇는다면 놀라지 않을 수 없을 것이다.',
        );
        era.println();
        era.printButton('「왜냐하면…… 보고 싶으니까」', 1);
        await era.input();
        await me.say_and_wait('타키온이 경기장에서 달리는 모습을 보고 싶어.');
        await me.say_and_wait([
          '다른 ',
          tachyon.get_uma_sex_title(),
          '와 경쟁하며 마지막에 승리하는 모습을 보고 싶어.',
        ]);
        await me.say_and_wait('타키온이 위닝 라이브의 센터에서 빛나는 모습을 보고 싶단 말이야!');
        await era.printAndWait(
          '목소리는 갈수록 커졌고 감정도 격해졌다. 마지막 문장은 거의 소리를 지르다시피 했다.',
        );
        await era.printAndWait([
          '마지막 진심을 담은 호소가 ',
          tachyon.get_colored_name(),
          '에게 닿기를 바랄 뿐이었다.',
        ]);
        await era.printAndWait('모든 것이 그저 자신의 독단적인 바람일지도 모르지만 말이다.');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 전전긍긍하며 머리를 바닥에 대고 상대의 대답을 기다렸다.',
        ]);
        era.println();
        await tachyon.say_and_wait('……… 고작 그런 일로…… 도게자를 해?');
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 고개를 들지 않고 그대로 엎드려 있었다.',
        ]);
        era.println();
        await tachyon.say_and_wait('나는 레이스에도, 퇴학에도 관심 없네.');
        await tachyon.say_and_wait([
          '솔직히 말해서, 이런 ',
          tachyon.get_uma_sex_title(),
          '를 담당하는 건 자네에게도 고역이겠지……',
        ]);
        await tachyon.say_and_wait(
          '나라면 지금 당장 협의 불이행을 이유로 계약 해지를 요구했을 텐데…… 자네는……',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 ',
          me.get_colored_name(),
          '의 행동을 형용할 말을 찾지 못해 잠시 말을 멈췄다.',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '………… 자네 머릿속엔 대체 뭐가 들어있는 건가. 그럴 만한 가치가 있다고 보나?',
        );
        era.println();
        await era.printAndWait([
          me.get_colored_name(),
          '은(는) 대답 대신 고개를 들어 ',
          tachyon.sex,
          '를 바라보았다.',
        ]);
      } else {
        await era.printAndWait([
          '문득 ',
          me.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 말 속에서 어떤 영감을 얻었다.',
        ]);
        era.println();
        await era.printAndWait([
          '비록 ',
          me.get_couple_title(),
          '이 알고 지낸 시간은 그리 길지 않을지도 모른다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          me.get_colored_name(),
          '이(가) 파악한 ',
          tachyon.get_colored_name(),
          '이라는 ',
          tachyon.get_uma_sex_title(),
          '는……',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '는 결코 무의미한 일에 시간을 낭비할 성격이 아니었다.',
        ]);
        await era.printAndWait('그래, 무의미한 일에는 절대 시간을 쓰지 않는다.');
        await era.printAndWait('그렇다면 말을 뒤집어 보자.');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '가 시간을 내어 하는 일이라면 반드시 그럴 만한 의미가 있다는 뜻이다.',
        ]);
        await era.printAndWait('그렇다면 질문 하나.');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '이 트레센 학원에 들어온 이유는?',
        ]);
        era.println();
        await era.printAndWait([
          '정말로 필요가 없다면 ',
          tachyon.sex,
          '는 결코 이런 선택을 하지 않았을 것이다.',
        ]);
        await era.printAndWait([
          '타키온이 학원에 들어와서 얻을 수 있는 이득은……',
        ]);
        await era.printAndWait([
          '생각할 것도 없다. ',
          tachyon.sex,
          '의 목표인——',
          tachyon.get_uma_sex_title(),
          '의 가능성을 찾고, 그 한계를 넘어서는 것.',
        ]);
        await era.printAndWait([
          '그러기 위해선 먼저 ',
          tachyon.get_uma_sex_title(),
          '의 모든 것을 철저히 연구해야만 한다.',
        ]);
        await era.printAndWait([
          '그렇다면 고품질의 ',
          tachyon.get_uma_sex_title(),
          '들이 모여 있는 트레센 학원이야말로 최적의 연구 장소임이 분명했다.',
        ]);
        await era.printAndWait([
          '따라서 퇴학은 결코 ',
          tachyon.sex,
          '가 말한 것처럼 가벼운 문제가 아니었다.',
        ]);
        era.println();
        await era.printAndWait('질문 둘.');
        await era.printAndWait([
          '왜 ',
          tachyon.get_colored_name(),
          '은 학생 신분으로 학원에 들어왔는가.',
        ]);
        era.println();
        await era.printAndWait([
          '트레센 학원에는 학생 외에도 다양한 지원 직종이 있고 레이스에 나가지 않는 학과도 있다. 번거로운 일을 피하고 싶다면 왜 처음부터 그런 쪽을 선택하지 않았을까?',
        ]);
        era.println();
        await era.printAndWait([me.get_colored_name(), '은(는) 어떤 단서를 포착했다.']);
        era.println();
        await era.printAndWait([
          '레이스 ',
          tachyon.get_uma_sex_title(),
          '가 된 이유는, 경기장에서 달리기 위해서다.',
        ]);
        await era.printAndWait([
          '레아스에 나갈 생각이 없다면 애당초 레이스 ',
          tachyon.get_uma_sex_title(),
          '를 선택할 이유가 없기 때문이다.',
        ]);
        await era.printAndWait([
          '이쯤 되면 ',
          tachyon.get_colored_name(),
          '이(가) 아까 말했던 레이스에 관심 없다는 말은……',
        ]);
        await era.printAndWait([
          '모르겠다. 왜 그런 거짓말을 했는지는 모르겠지만, ',
        ]);
        await era.printAndWait('일단 눈앞의 난관을 헤쳐 나가는 데는 그 이유까지 알 필요는 없었다.');
        era.println();
        era.printButton('「너는 신경 쓰고 있어. 왜냐하면 실험에는 검증이 필요하니까」', 1);
        await era.input();
        await era.printAndWait('틀림없다.');
        await era.printAndWait('이것이 레이스에 참가해야 하는 이유였다.');
        await era.printAndWait('모든 것은 연구와 최종적인 목적을 위해서였다.');
        era.println();
        await me.say_and_wait([
          '만약 다른 ',
          tachyon.get_uma_sex_title(),
          '들이나 동기들조차 이기지 못한다면, 속도의 한계를 넘겠다는 말은 성립하지 않아.',
        ]);
        await me.say_and_wait([
          '나도 너도 ',
          tachyon.get_colored_name(),
          '이 누구에게든 이길 수 있다는 확신은 있지만, 실험의 검증은 여전히 필수적이야.',
        ]);
        era.println();
        await era.printAndWait('마치 1+1=2라는 사실처럼.');
        await era.printAndWait(
          '설령 모든 사람이 답을 알고 있다 하더라도, 그것을 증명하는 계산식은 존재해야 한다.',
        );
        await era.printAndWait('그것은 불필요한 과정이 아니라 연구의 엄격함이었다.');
        await tachyon.say_and_wait('……말은 잘하는군. 하지만 모의 레이스도 있지 않나?');
        await tachyon.say_and_wait(
          '꼭 공식 레이스가 아니더라도 나는 기회만 있다면 동기나 더 강한 상대와 겨룰 수 있어. 상대를 찾는 게 어렵지도 않을 테고.',
        );
        await tachyon.say_and_wait(
          '만약 내가 압도적인 강함을 보여준다면, 본능에 충실한 맹수들이 나와 겨룰 기회를 놓치지 않을 걸세. 그렇지 않나?',
        );
        era.println();
        await era.printAndWait('매우 설득력 있는 답변이었다.');
        await era.printAndWait([
          '모의 레이스라 할지라도 ',
          tachyon.get_colored_name(),
          '처럼 강력한 ',
          tachyon.get_uma_sex_title(),
          '와 겨룰 기회가 생긴다면, 상대도 반드시 100%의 실력을 발휘할 것이기 때문이다.',
        ]);
        await era.printAndWait('하지만……');
        era.println();
        era.printButton(
          `「너는 120%의 실력을 발휘하는 ${tachyon.get_uma_sex_title()}를 본 적 있어?」`,
          1,
        );
        await era.input();
        await tachyon.say_and_wait('………… 호오?');
        await era.printAndWait('모의 레이스에서 보여주는 것은 언제나 평범한 실력일 뿐이다.');
        await era.printAndWait('한계를 넘어서는 것은 오직 진정한 승부의 세계에서만 가능하다.');
        await era.printAndWait('동서고금을 막론하고 일어난 수많은 이변들이 그것을 증명하고 있었다.');
        era.printButton(
          `「${tachyon.get_uma_sex_title()}의 특성이란, 오직 실전 경기장에서만 한계를 넘는 힘을 발휘한다는 거야」`,
          1,
        );
        await era.input();
        await tachyon.say_and_wait(
          '………… 과연. 그것이 자네가 트레이너로서 내린 견해인가? 그 외에는? 다른 이유도 있나?',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '는 여전히 알 수 없는 묘한 눈빛으로 ',
          me.get_colored_name(),
          '을(를) 바라보았고, ',
          me.get_colored_name(),
          '은(는) 자기도 모르게 몸이 움츠러들었다.',
        ]);
        await era.printAndWait([
          '하지만 ',
          me.get_colored_name(),
          '은(는) 굴하지 않고 마음 깊은 곳에 담아두었던 진실한 이유를 꺼냈다.',
        ]);
        era.println();
        era.printButton('「………… 보고 싶어」', 1);
        await era.input();
        await tachyon.say_and_wait('응?');
        await tachyon.say_and_wait('…………');
        await want_to_see(tachyon, me);
        era.println();
      }
      await era.printAndWait([
        tachyon.sex,
        '는 ',
        me.get_colored_name(),
        '의 표정을 가만히 살피더니, 이내 ',
        me.get_colored_name(),
        '의 눈에 시선을 멈췄다. 마치 ',
        me.get_couple_title(),
        '이 처음 만났을 때처럼, 눈동자 깊은 곳을 꿰뚫어 보는 듯했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('………… 후후, 미치광이와 광인의 조합인가? 이거 재밌군, 재밌어!');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 갑자기 크게 웃기 시작한 ',
        tachyon.sex,
        '를 불안하게 바라보았다.',
      ]);
      await era.printAndWait([
        '감정 변화의 이유는 정확히 알 수 없었지만, 상황은 ',
        me.get_colored_name(),
        '에게 유리한 쪽으로 흘러가는 것 같았다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '좋네. 실험 동물의 의욕을 고취하기 위해서라도 가끔은 적절한 보상이 필요한 법이지.',
      );
      await tachyon.say_and_wait(
        '참가하도록 하겠네. 기왕 뛰기로 한 거, 일단 가볍게 클래식 3관부터 따보도록 하지……',
      );
      await tachyon.say_and_wait(['설마 못 하겠다는 소린 안 하겠지, ', callname, '?']);
      era.println();
      await era.printAndWait(['하지만, ', tachyon.sex, '가 덧붙였다.']);
      era.println();
      await tachyon.say_and_wait([
        '그 대가로…… 나를 지루하게 만들지 말게나, ',
        callname,
      ]);
    } else {
      era.printButton('「왜냐하면, 보고 싶으니까」', 1);
      await era.input();
      await tachyon.say_and_wait('…… 하아?');
      await want_to_see(tachyon, me);
      await era.printAndWait('그리고, 그 외에도……');
      await era.printAndWait([me.get_colored_name(), '은(는) 잠시 생각하더니 다시 덧붙여 말했다.']);
      era.println();
      await me.say_and_wait(
        '물론, 혹시라도, 정말 만약에라도, 타키온이 레이스에서 지고 바닥에 엎드려서 분해하는 고통스러운 모습도 보고 싶어!',
      );
      await tachyon.say_and_wait('!');
      era.println();
      era.printButton('（오호, 도발이 먹혔나?）', 1);
      await era.input();
      await me.say_and_wait(
        '「하지만, 만약 타키온이 지는 게 무서워서 그런 거라면 이해해. 그럴 거라면 역시 안 나가는 게 낫겠지……」',
      );
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 짐짓 ',
        tachyon.get_colored_name(),
        '의 눈치를 살폈다. ',
        tachyon.sex,
        '의 분위기가 심상치 않은 것을 느끼고 서둘러 입을 다물며 물러났다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '…… 감히 칼리굴라 효과를 나에게 써먹다니, ',
        callname,
        ' 자네 간이 배 밖으로 나왔군.',
      ]);
      await me.say_and_wait('아니 난…… 윽푸헉!!?');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 반박하려 했으나, 일어난 ',
        tachyon.get_colored_name(),
        '이 중력 가속도를 실어 배 위로 주저앉는 바람에 마치 눌린 개구리 같은 비명을 내지르고 말았다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '흥…… 고작 자기 사리사욕을 위해 천재인 나의 소중한 시간을 이런 무의미한 투견판에 낭비하게 하려 들다니. 정말 대담하군.',
      ]);
      era.printButton('「그런 뜻이 아니라……」', 1);
      await era.input();
      await me.say_and_wait('게다가 레이스에 참가하면 필요한 실험 데이터도 모을 수 있잖아……');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 자세를 고쳐 앉으며, ',
        me.get_colored_name(),
        '을(를) ',
        tachyon.sex,
        '가 앉기 가장 편한 인간 의자로 만들었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '도 자연스럽게 손을 올려 ',
        tachyon.sex,
        '의 어깨를 주물러 주었다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '후우…… 이거 정말 살 것 같군. 요즘 계속 실험대 앞에만 앉아 있었더니 온몸이 쑤셔서 말이야……',
      );
      await tachyon.say_and_wait('레이스 참가 말인데……');
      await tachyon.say_and_wait('못 할 것도 없지. 목표는 일단 3관으로 정하겠네.');
      await tachyon.say_and_wait(
        '동기들 사이에서 1위조차 못 한다면 확실히 한계를 논할 자격도 없으니까……',
      );
      await tachyon.say_and_wait([
        '그럼, ',
        callname,
        ', 자네가 정성을 다해 나를 보좌해 줄 거지?',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '의 광기 서린 눈빛을 보며 웃으며 대답했다.',
      ]);
      era.printButton('「물론이지」', 1);
      await era.input();
    }
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      tachyon.get_colored_name(),
      '의 목표가 결정되었다.',
    ]);
  };
};