// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file トレヴ - 募集
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} taste 秋川やよい／北方の味
   * @param {CharaTalk} may サタケメイ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トレヴのプレイヤーへの呼び方
   */
  // [번역 대상] rec
  async rec(treve, taste, may, you, callname) {
    const ret = [];
    await era.printAndWait(
      `어느 휴일, ${you.name}은(는) ${taste.name}과 파리 트레센 학원 측으로부터 동시에 연락 메일을 받았다.`,
    );
    await era.printAndWait('내용은 조금씩 달랐지만, 결국 뜻하는 바는 하나였다.');
    if (era.get('flag:当前声望') >= 1000) {
      await era.printAndWait(
        `단기간에 연이어 국제 G1 레이스 우승을 차지한 ${you.name}은(는) 이미 각국 레이스계에서 결코 무시할 수 없는 존재가 되었다.`,
      );
    }
    await era.printAndWait([
      '며칠 전 파리 트레센 학원의 원장이 이미 ',
      taste.get_colored_name(),
      '과 한차례 회담을 가졌고, 그 결과는——',
    ]);
    await era.printAndWait(
      `머지않아 우수한 프랑스의 주니어 우마무스메들을 선발해 중앙으로 교류차 보낼 예정이며, ${you.name}이(가) 양측의 교섭을 담당할 책임자로 발탁되었다는 것이었다.`,
    );
    await era.printAndWait([
      '이사장의 소꿉친구인 ',
      may.get_colored_name(),
      '가 모든 여정에 걸쳐 ',
      you.get_colored_name(),
      '을(를) 서포트할 예정이다.',
    ]);

    await era.printAndWait('파리로 떠나겠습니까?');
    era.printButton('네', 1);
    era.printButton('아니요', 2);
    ret.push((ret['foreign'] = await era.input()));
    if (ret['foreign'] === 1) {
      await era.printAndWait(
        `${you.name}은(는) 캐리어를 끌고 배낭을 멘 채 기차에서 내려, 붐비는 인파를 따라 역을 빠져나왔다.`,
      );
      await era.printAndWait(
        '사방을 둘러보니 사람을 마중 나온 이들과 차량이 가득했지만, 파리 트레센의 직원이 어디 있는지는 알 수 없었다.',
      );
      await era.printAndWait(
        `${you.name} は少し後悔した。${may.name} が送ると言ったのを、${you.name} はきっぱり断ったのだ。`,
      );
      await era.printAndWait(
        '이 나이에 장거리 여행을 안 해본 것도 아니고, 이 정도 어려움은 쉽게 이겨낼 수 있을 거라 생각했다.',
      );
      await era.printAndWait(
        '하지만 기차를 타기 전에 버스를 한 번 더 타야 했고, 점심도 굶은 채 물만 마실 줄 누가 알았겠는가.',
      );
      await era.printAndWait('지금 당장 배가 고프지는 않았지만, 피로가 꽤 쌓여 있었다.');
      await era.printAndWait(
        `${you.name}은(는) 뙤약볕 아래를 걸으며 대형 파라솔들을 하나하나 유심히 살폈다.`,
      );
      era.println();
      await era.printAndWait(
        `마침내 ${you.name}은(는) 여러 개의 파라솔이 나란히 세워진 파리 트레센 학원의 픽업 장소를 발견했다.`,
      );
      await era.printAndWait('약 2시간 반이 지나서야 차가 마침내 멈춰 섰다.');
      await era.printAndWait('도착이다. 만남의 장소는 교장실이었다.');
      await era.printAndWait(
        `인수인계를 마친 후, ${you.name}은(는) 임시 거점으로 향했다.`,
      );
      await era.printAndWait(
        '파리 트레센은 캠퍼스 자체가 넓을 뿐만 아니라, 겉보기엔 건물 몇 동뿐인 기숙사 구역도 실제로는 중앙의 기숙사보다 훨씬 넓었다.',
      );
      await era.printAndWait('규모가 제법 컸고, 필요한 시설도 완벽히 갖춰져 있었다.');
      await era.printAndWait(
        '침대는 2인용 크기였고, 옆에는 책상과 옷장이 놓여 있었으며 발코니도 있었다.',
      );
      await era.printAndWait(
        `${you.name}의 프랑스 트레센 생활이 본격적으로 시작되었다.`,
      );
      era.drawLine();
      if (era.get('flag:当前声望') >= 1000) {
        await era.printAndWait(
          `${you.name} のトレーナー歴は、もう短いとは言えない。長い歳月に洗われれば、あの取るに足らない功績も、誰にでもできたことだったと思いたくなる。`,
        );
      }
      await era.printAndWait(
        '으슬으슬 떨며 의자에서 일어나, 방구석에 걸려 있던 코트를 집어 들었다. 창밖을 올려다보니 우중충한 하늘이 보였다. 잿빛 채광이 적막한 트레이닝실을 비추고 있었다.',
      );
      await era.printAndWait(
        '가을이 다가오고 있었다. 외투가 없다면 슬슬 떨려오는 이 몸이 견디기 힘들 것 같았다.',
      );
      await era.printAndWait(
        `옷걸이에 걸린 중절모를 쓰고, 오른손에 봉투를 쥔 채 나섰다. 문을 닫는 순간, ${you.name}은(는) 이 방을 잠시 물끄러미 바라보았다. 별 의미 없는 것들뿐이었다.`,
      );
      await era.printAndWait(
        '밖으로 나와 가까운 자리를 찾고 있을 때, 경기장에서 환호성이 들려왔다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 무슨 일이 있나 생각해 보았지만, 전혀 짐작이 가지 않았다.`,
      );
      await era.printAndWait('어쩔 수 없이 기억을 조금 더듬어 보았다.');
      era.printButton('「데뷔전인가?」', 1);
      await era.input();
      await era.printAndWait(
        `수많은 ${treve.uma_sex_title}들이 실전 레이스에서 실력을 뽐내며 스카우트될 기회를 얻는 곳. 젊은 트레이너들이 모여드는 그 장소.`,
      );
      await era.printAndWait(
        '경기장과는 정반대 방향으로 걸어가며, 스카우트에 열을 올렸던 옛 시절을 떠올렸다.',
      );
      await era.printAndWait('싫더라도 이해할 수밖에 없다, 자신은 이곳에 어울리지 않는다는 것을.');
      await era.printAndWait(
        `돌길을 걷다 체육복을 입은 몇몇 ${treve.uma_sex_title}들과 스쳐 지나갔다.`,
      );
      await era.printAndWait(
        `그런 상황 속에서 또다시 ${you.name}의 귀를 자극한 것은, 주머니에 넣어둔 휴대폰의 벨소리였다.`,
      );
      await era.printAndWait(
        `상대가 누군지 확인하지도 않고 전화를 받는 것은 정보에 좌우되는 ${you.name}의 직업병이었다.`,
      );
      await era.printAndWait('전화를 들었다.');
      era.printButton('「여보세요.」', 1);
      await era.input();
      await taste.say_and_wait('사과! 조금 부탁하고 싶은 일이 있네만!');
      await era.printAndWait([
        taste.get_colored_name(),
        ', 겉보기엔 평범한 학원 이사장 같지만, 그녀가 이끄는 조직력과 재능, 그리고 안목을 고려하면 절대적인 유일무이한 존재다.',
      ]);
      await era.printAndWait(
        `${you.name}은(는) 깊은 한숨을 내쉬었다. 방금 전까지의 평온함과는 달리, 노골적인 압박감에 불쾌함마저 느껴졌다.`,
      );
      era.printButton('「무슨 일인가요?」', 1);
      await era.input();
      await taste.say_and_wait(
        `고지! 실은, 그쪽의 ${treve.uma_sex_title} 중 데뷔전에서 훌륭한 모습을 보여준 아이가 있는데 아무도 말을 걸지 않았다는군. 실력도 뛰어나고 레이스에서도 1착을 한 것 같은데, 왜 스카우트되지 않았는지 정말 불가사의하다네.`,
      );
      era.printButton('「이사장님이 내정해 둔 아이니까 그렇겠죠.」', 1);
      await era.input();
      await taste.say_and_wait(
        `농담! 그게… 어쨌든 자네라면 실력이 있으니, 그곳에서 ${treve.sex}를 거둬줄 수 없을까 싶어서 말이네.`,
      );
      await era.printAndWait(
        '이 시치미 떼는 작자는 귓구멍으로 바람이라도 통하게 열어둔 건가.',
      );
      await era.printAndWait(
        `왜 이 땅에 막 도착한 트레이너에게 프랑스의 ${treve.uma_sex_title}를 맡기려는 걸까.`,
      );
      await era.printAndWait(
        `${you.name}의 얼굴은 누가 봐도 눈에 띄게 일그러져 무서워 보였는지, 주변의 ${treve.uma_sex_title}들이 슬금슬금 피했다.`,
      );
      await era.printAndWait(
        `그런 생각을 하며 걷다가 통화하는 사이 길가 벤치에 앉았다. 맞은편 벤치에 앉아있던 한 ${treve.uma_sex_title}와 눈이 마주쳤다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 손에 든 휴대폰을 가볍게 흔들어 보이자, 갈색 털의 ${treve.sex}는 고개를 끄덕였다.`,
      );
      await era.printAndWait(
        `とりあえず、このまま電話しても ${you.name} の迷惑にはならない。`,
      );
      era.printButton('「실력을 봐야 알겠죠.」', 1);
      await era.input();
      await taste.say_and_wait(
        `賛 辞！特に頭が良くて、レース展開がとても上手。${treve.sex}の冷静な走りは新人らしくなくて、教官もすぐ教えることがなくなったの。`,
      );
      await era.printAndWait(
        `${you.name}은(는) 듣기만 해도 우수한 ${treve.uma_sex_title}일 거라 생각했다. 그렇다면 스카우트되지 않은 이유는 아마도…`,
      );
      era.printButton('「성격에 문제가 있나 보군요.」', 1);
      await era.input();
      await taste.say_and_wait('부정! 자신감도 아주 넘친다네.');
      era.printButton('「다리에 불안 요소가 있다거나.」', 1);
      await era.input();
      await taste.say_and_wait('건강! 모든 게 아무 문제 없다네.');
      era.printButton('「그럼 왜 아직 아무도 스카우트를 안 한 건가요?」', 1);
      await era.input();
      await taste.say_and_wait('난감! 나도 그게 알고 싶다네!');
      await era.printAndWait(
        '전화 너머로 한숨 소리가 들려오는 걸 보니, 정말 확신하고 있는 듯했다.',
      );
      await era.printAndWait(
        `그렇게까지 말하니, ${you.name}도 대체 어떤 ${treve.uma_sex_title}인지 궁금해졌다.`,
      );
      await era.printAndWait(
        '기본적으로 거절할 생각이지만, 적어도 한 번 만나보긴 해야겠다.',
      );
      await era.printAndWait(
        '혹여 담당하지 않더라도, 이 학원에 어울릴 만한 지인에게 소개해 줄 수는 있을 테니까.',
      );

      era.printButton('「어떻게 생긴 녀석인가요?」', 1);
      await era.input();
      await taste.say_and_wait(
        `회상! 음, 밤색 털의 ${treve.uma_sex_title}라네. 머리색이 꽤 밝아서, 로즈 골드 같은 느낌이지.`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 고개를 들자, 방금 전 통화를 허락받았던 ',
        treve.uma_sex_title,
        '와 다시 눈이 마주쳤다.',
      ]);
      await era.printAndWait('밤색 털, 밝은 머리색이다.');
      era.printButton('「……다른 특징은요?」', 1);
      await era.input();
      await taste.say_and_wait('특징! 뒷머리를 작게 양갈래로 묶고 있다네.');
      await era.printAndWait(`${treve.sex}의 묶은 머리가 바람에 살랑살랑 흔들렸다.`);
      era.printButton('「……또.」', 1);
      await era.input();
      await taste.say_and_wait(
        '보충! 귀장식은 말이지, 왼쪽에 하얀 모자와 붉은 리본을 달고 있는데 꽤 눈에 띄어서 금방 알아볼 수 있을 거라네.',
      );
      await era.printAndWait(
        '흔들리는 붉은 리본에 하얀 모자와 모자에 짙은 남색 선이 그어져 있는 것이 뚜렷하게 보였다.',
      );
      await era.printAndWait(
        `계속 빤히 쳐다보고 있음에도 불구하고, 그 밤색 머리의 ${treve.uma_sex_title}는 태연하게 ${you.name}을(를) 마주 보았다.`,
      );
      await era.printAndWait(
        `아쿠아마린 같은 눈동자가 미동도 없이 ${you.name} 쪽을 향하고 있었다.`,
      );
      await taste.say_and_wait(
        `걱정! 그쪽 학원이 워낙 넓고 지금 데뷔전을 치르는 ${treve.uma_sex_title}들도 많아서, 찾기 좀 어려울지도 모르겠군.`,
      );
      era.printButton('「……아니, 금방 찾을 수 있을 것 같네요.」', 1);
      await era.input();
      await taste.say_and_wait('최고! 찾을 수 있다니 다행이군. 그럼 이만.');
      await era.printAndWait(
        `그리고 ${you.name}은(는) 무기질적인 신호음과 함께 전화를 끊었다.`,
      );
      await era.printAndWait(
        `천천히 휴대폰을 챙겨 넣은 뒤 깍지를 끼고, 돌이 깔린 보도를 사이에 둔 채 맞은편에 앉아 있는 ${treve.sex}를 다시 정면으로 마주 보았다.`,
      );
      era.printButton('「저기— 여기서 뭐 하고 있어?」', 1);
      await era.input();
      await era.printAndWait(
        `그 ${treve.uma_sex_title}는 손으로 입을 가린 채 잠시 생각하다 대답했다.`,
      );
      await treve.say_as_unknown_and_wait(
        '음, 데뷔전에서 우승하긴 했는데, 어떤 트레이너분도 저를 담당하려고 하시지 않아서요. 지금은 높으신 분께서 저를 위해 찾아봐 주신 사람을 기다리고 있어요……',
      );
      era.printButton('「나야.」', 1);
      await era.input();
      await treve.say_as_unknown_and_wait('네?');
      era.printButton('「내가 바로 그 얼빠진 이사장이 부른 트레이너야.」', 1);
      await era.input();
      await era.printAndWait(
        `${treve.sex}는 아주 잠깐 동안 입을 살짝 벌린 채 눈을 동그랗게 떴다.`,
      );
      await era.printAndWait(
        `현지 트레이너들에게 둘러싸인 채 찾아온 사람이 이런 외국인이라니, ${treve.sex}를 실망하게 했을지도 모른다.`,
      );
      await era.printAndWait(
        `하지만 그것은 기우였던 듯, ${treve.sex}는 자리에서 일어나 ${you.name}에게 다가와 오른손을 내밀었다.`,
      );
      await era.printAndWait(
        `그리고 미소 짓는 얼굴엔 어떤 불순물도 없었다. ${you.name}는 이 순수함에 불타오르는 듯한 감각을 깨달았다.`,
      );
      await treve.say_and_wait(`저는 ${treve.name}라고 해요. 처음 뵙겠습니다!`);
      era.printButton(
        `「……${you.actual_name}. 중앙 트레센의 트레이너야.」`,
        1,
      );
      await era.input();
      await era.printAndWait(`가볍게 손을 흔든 후 다시 ${treve.sex}와 악수를 나누었다.`);
      era.printButton('「대충 이야기는 들었어…… 스카우트 제의를 못 받았다는 거 진짜야?」', 1);
      await era.input();
      await treve.say_and_wait(
        '진짜예요. 제게 말을 걸어주신 트레이너분들은 있었지만, 아무도 제 담당 트레이너가 되어주진 않으셨어요.',
      );
      await era.printAndWait(
        `${you.name}은(는) 내심 의사소통이 잘 안 될까 봐 불안했지만, 첫 대화에서는 특별한 장벽이 느껴지지 않았다.`,
      );
      era.printButton('「왜?」', 1);
      await era.input();
      await era.printAndWait(
        `${treve.name}는 ${you.name}의 눈을 똑바로 응시하며, 한 치의 망설임도 없이 대답했다.`,
      );
      await treve.say_and_wait('저는 개선문상에서 우승하고 싶어요.');
      await era.printAndWait(
        `단 한마디. 그 어떤 트레이너도 데려가지 않은 이유를 단번에 납득한 ${you.name}은(는) 하마터면 손으로 얼굴을 감싸 쥘 뻔했다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 너무 순진했다. 스카우트되지 못한 가장 큰 원인은 필시 이런 식의 자기 어필 때문이리라.`,
      );
      await era.printAndWait(
        `당혹스러워하는 ${you.name}을(를) 보며, ${treve.name}는 고개를 갸우뚱했다.`,
      );
      await treve.say_and_wait(
        '맞아, 맞아. 다들 딱 이런 반응이셨어요…… 하지만 개선문상을 목표로 하는 게 그렇게 이상한가요?',
      );
      era.printButton('「이상한 건 아니지.」', 1);
      await era.input();
      await era.printAndWait(
        `やり方が悪い。${you.name} は先に${treve.sex}と同じベンチに座り、それから ${you.name} を見る ${treve.name} に向き直る。`,
      );
      era.printButton(`상황을 설명한다`, 1);
      await era.input();
      await you.say_and_wait(
        `잘 들어, 개선문상은 이 나라뿐만 아니라 전 세계 ${treve.uma_sex_title}들의 목표라고 할 수 있어. 잔디 중거리를 주 무대로 삼는 ${treve.uma_sex_title}라면 최종 도달점은 당연히 개선문상이겠지.`,
      );
      await era.printAndWait(
        `물론 고개를 끄덕이는 ${treve.sex}의 자질이 어느 정도인지는 아직 확실치 않지만, 그런 목표를 세웠다는 건 잔디 중거리에 상당한 자신이 있다는 뜻일 것이다.`,
      );
      await era.printAndWait(
        `하지만, ${treve.uma_sex_title} 본인의 실력만으로는 부족하다.`,
      );
      era.printButton(`「하지만—— 개선문상 도전은 도박에 가까워.」`, 1);
      await era.input();
      await you.say_and_wait(
        `각국의 ${treve.uma_sex_title} 데이터를 수집하고, 그에 맞춘 특별 훈련을 짜지 않으면 그 레이스에서 이기는 건 불가능에 가까우니까. 갓 데뷔전을 치른 신인 ${treve.uma_sex_title}에게 그 엄청난 수고와 노력을 쏟아부을 사람은 아무도 없어.`,
      );
      await era.printAndWait(
        `보통 트레이너들은 여러 명의 ${treve.uma_sex_title}를 담당해. 모두가 알다시피 개선문상에 도전하게 되면 팀의 전반적인 효율이 크게 떨어지기 때문에, 팀의 평균 성적을 올리기 위해 국제 레이스에는 참가하지 않겠다고 단언하는 트레이너도 있을 정도야.`,
      );
      await era.printAndWait(
        `처음부터 개선문상을 목표로 내세운 ${treve.name}는, 말하자면 그들의 지뢰를 밟은 셈이지.`,
      );
      await treve.say_and_wait('……');
      await era.printAndWait('어쨌든, 초기 목표가 너무 거창하면 곤란하다.');
      await era.printAndWait(
        '예를 들어 평범한 G1 우승을 목표로 했다면 트레이너에게 스카우트되는 것도 그리 어렵지 않았을 텐데.',
      );
      await era.printAndWait(
        '프랑스 국내에서, 혹은 영국이나 독일의 레이스를 거치며 실력을 쌓은 뒤, 일류의 영역에 도달했을 때 개선문상에 도전하겠다고 했다면 고개를 젓지 않는 사람도 있었을 것이다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 지나치게 솔직한 것도 문제라고 생각하며 말을 이었다.`,
      );
      era.printButton('「다른 트레이너에게 널 소개해 줄 수도 있어……」 (모집 중지)', 1);
      era.printButton('「그렇게 개선문상에서 이기고 싶어?」', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        await era.printAndWait(
          `조금 전 풀 죽었던 ${treve.name}의 모습은 온데간데없었다.`,
        );
        await era.printAndWait(`${you.name}의 그 한마디에 반응하듯, 눈동자가 반짝였다.`);
        await treve.say_and_wait('물론이죠!');
        await era.printAndWait(
          '그렇다면, 서투르게 목표를 숨기는 것보다는 처음부터 개선문상을 향한 본인의 열망을 솔직하게 드러내는 편이 최선일 터.',
        );
        await era.printAndWait(`그것을 부정한 것은 다름 아닌 ${you.name}이었다.`);
        era.printButton(
          '「……뭐, 개선문상을 목표로 삼으면서도 여유가 있는 트레이너를 만날 수 있다면 좋겠네.」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `${you.name}이(가) 막 일어서려던 찰나, ${treve.name}가 다급하게 코트 자락을 붙잡았다.`,
        );
        era.printButton('「왜 그래?」', 1);
        await era.input();
        await treve.say_and_wait('저를 스카우트하시는 건……');
        await era.printAndWait('어쩐지 비에 흠뻑 젖은 소동물이 연상되었다.');
        await era.printAndWait('정직하고 실력도 있으며 포부도 크다.');
        await era.printAndWait(
          `${treve.name}는 이렇게까지 거절당한 상황에서도 필사적으로 머리를 굴리고 있었다.`,
        );
        await era.printAndWait(
          `${treve.sex}는 ${you.name}을(를) 구원의 배라고 여길지 모르지만, 이 진흙 배는 가라앉고 있는 중이다.`,
        );
        await era.printAndWait(
          `분명 ${treve.sex}에게 기대를 거는 다른 트레이너가 있을 텐데.`,
        );
        await era.printAndWait('바로 그때, 베누스 파크가 손가락을 튕겼다.');
        await treve.say_and_wait(
          '프랑스에 오셨다는 건, 사실 지금 엄청 한가하신 거 아닌가요?',
        );
        era.printButton('「그렇지.」', 1);
        await era.input();
        await era.printAndWait('일단 이 무례한 발언은 모른 척 넘어가기로 했다.');
        await treve.say_and_wait(
          '하지만 파리 트레센에서 지도 지원금이 나오잖아요?',
        );
        era.printButton('「……맞아.」', 1);
        await era.input();
        await treve.say_and_wait('그렇다면, 그걸 전부 제게 쏟아부어 주세요!');
        await era.printAndWait(
          `양손을 쫙 펴고 내미는 이 ${treve.teen_sex_title}도 일단 무시했다.`,
        );
        era.printButton('「거절할게.」', 1);
        await era.input();
        await treve.say_and_wait('어째서요!');
        await era.printAndWait(
          `걸음을 떼려 했지만, ${treve.sex}가 코트를 꽉 붙잡고 놔주지 않았다.`,
        );
        await era.printAndWait(
          `몇 년을 입은 낡은 코트가 찢어지는 것도 원치 않았기에, 어쩔 수 없이 돌아서자 ${treve.name}가 다시 정면으로 ${you.name}의 눈을 들여다보았다.`,
        );
        await era.printAndWait('대처하기 곤란할 만큼 맑은 눈동자였다.');
        await treve.say_and_wait(
          `그럼, 제가 이유를 하나 만들어 드릴게요. 개선문상을 연패할 ${treve.uma_sex_title}를 담당하게 된다면, 사회인으로서 트레이너님의 평가도 엄청 올라가지 않겠어요?`,
        );
        era.printButton('「그 근거 없는 자신감은 도대체 어디서 나오는 거야?」', 1);
        await era.input();
        await era.printAndWait(
          `말은 그렇게 해도, 실력은 ${taste.name}와 레이스 결과가 이미 보증하고 있다.`,
        );
        await era.printAndWait(`${you.name}은(는) 가볍게 한숨을 내쉬며 하늘을 올려다보았다.`);
        await era.printAndWait(
          '잿빛 천장 대신 드넓은 하늘 곳곳에 먹구름이 흩어져 있었고, 그 틈바구니로 간신히 푸른 하늘의 기운을 엿볼 수 있었다.',
        );
        await era.printAndWait(
          `${treve.name}는 여전히 고개를 들어 ${you.name}을(를) 올려다보고 있었고, ${you.name}은(는)……`,
        );
        era.printButton('「역시 다른 뛰어난 사람을 찾아봐.」 (모집 중지)', 1);
        era.printButton(`억지로 ${you.name}을(를) 경기장으로 이끌려는 그 손을 꽉 잡았다.`, 2);
        ret.push((ret['select'] = await era.input()));
        if (ret['select'] === 2) {
          await era.printAndWait(
            `눈앞의 이 ${treve.teen_sex_title}의 눈빛은 한층 더 강렬하게 빛나고 있었다.`,
          );
          await treve.say_and_wait('앞으로 잘 부탁드려요, 트레이너 선생님!');
          await era.printAndWait(
            `${you.name}의 기분 따위는 아랑곳하지 않고, ${treve.name}는 ${you.name}을(를) 코스 쪽으로 끌고 갔다.`,
          );
          await treve.say_and_wait(
            '왜냐하면 트레이너 선생님은 아직 제가 달리는 모습을 본 적이 없잖아요. 지금 당장 보지 않으면 아무것도 시작되지 않는다구요?',
          );
          await treve.say_and_wait('그 뭐냐, 쇠뿔을 뜨겁게 달궈라 라는 말도 있잖아요.');
          era.printButton('「뜨겁게 달구고 빼야지.」', 1);
          await era.input();
          await era.printAndWait(
            `${treve.name}의 자신감은 확실한 실력으로 증명되었다. 그것은 본격적으로 훈련을 시작하고 나서야 ${you.name}도 확실히 깨닫게 되었다.`,
          );
          await era.printAndWait(
            `${treve.sex}를 담당하게 되면서 ${you.name}은(는) 과거의 기록과 노하우를 두루 참고했다.`,
          );
          await era.printAndWait(
            `게다가, 지금까지의 방식을 토대로 ${treve.sex}를 어떻게 지도할지 고민하면 할수록, ${treve.sex}의 압도적인 기량을 절감할 수 있었다.`,
          );
          await era.printAndWait(
            '가속과 최고 속도를 냉철하게 조절하는 눈부신 각력, 마지막 직선에서도 지친 기색 하나 보이지 않는 스태미나, 그리고 임기응변으로 스스로 전략을 짜내는 두뇌까지.',
          );
          await era.printAndWait(
            `${treve.uma_sex_title}에게 필요한 모든 요소가 극도로 높은 수준에 도달해 있었다.`,
          );
          await era.printAndWait(
            `밸런스도 뛰어나서 ${you.name}은(는) 어떤 각질을 선택하든 훌륭한 승부를 펼칠 수 있을 거라 확신했다.`,
          );
          await era.printAndWait('이 다리를 고려하면 선행이나 선입이 적합하겠지.');
          await treve.say_and_wait(
            '선행이 더 좋을 것 같아요. 마군 앞쪽에서 달리는 편이 빠져나가기 수월하니까요.',
          );
          await era.printAndWait(
            `${treve.name}는 운동장을 달리는 동기생들을 흘끗 보며, 수건으로 땀을 닦아냈다.`,
          );
          await era.printAndWait(
            `육체는 충분히 강인했고, 거기다 ${treve.sex}에게는 그 육체를 더욱 빛내줄 상호보완적인 무기가 하나 더 있었다.`,
          );
          await era.printAndWait(
            '다음 모의 레이스에서는 선행 전략을 써보자. 하지만 연상의 상대들을 맞이해야 하는데……',
          );
          await treve.say_and_wait(['제가 이길 거예요, ', callname, '。']);
          await era.printAndWait(
            '자신의 실력을 냉정하게 꿰뚫고 있기에 가질 수 있는 자신감.',
          );
          await era.printAndWait([
            '지나친 자만도, 그렇다고 불필요한 겸손도 아닌, 자신을 객관적으로 바라보는 그 정신력이 ',
            treve.get_colored_name(),
            '라는 ',
            treve.uma_sex_title,
            '의 완성도를 한층 더 높여주고 있었다.',
          ]);
          await era.printAndWait(
            `만약 서투른 트레이너였다면 섣불리 손을 댔다가 ${treve.sex}의 재능을 망쳐버렸을지도 모른다.`,
          );
          await era.printAndWait([
            '밤색의 ',
            treve.uma_sex_title,
            '는 연습을 끝내려던 ',
            you.get_colored_name(),
            ' に近づき、もう一周走りたいと ',
            you.get_colored_name(),
            ' に告げる。',
          ]);
          era.printButton('「상관은 없는데, 왜 그렇게까지 무리하려는 거야?」', 1);
          await era.input();
          await era.printAndWait(
            `석양빛을 받은 ${treve.name}의 얼굴에는 늘 그렇듯 쾌활한 웃음이 번져 있었다.`,
          );
          await era.printAndWait(
            `${treve.sex}에게 아직 남아 있는 앳됨은 마치 하늘이 내린 재능의 상징 같았다. ${treve.name}는 그 젊음에 걸맞은 강렬한 힘을 품고 있었다.`,
          );
          await treve.say_and_wait(
            '가족들과 친구들, 그리고 더 많은 분이 저를 응원해주고 계시니까요. 그래서, 그 모든 기대에 보답하고 싶어요!',
          );
          await era.printAndWait(
            `그렇게 말하고는 쏜살같이 달려 나가는 ${treve.sex}의 뒷모습이 점점 멀어졌다.`,
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            treve.get_colored_name(),
            '가 코너를 돌아갈 때까지, 그 작은 뒷모습을 계속 눈으로 좇았다.',
          ]);
        }
      }
    }
    return ret;
  },
  rec_final: (() => {
    /**
     * @param {CharaTalk} treve
     * @param {CharaTalk} you
     */
    const f = async (treve, you) => {
      await era.printAndWait('캠퍼스의 나무들이 계절의 색으로 물들었다.');
      await era.printAndWait('연노랑빛 회랑, 투명하고 커다란 유리창, 각진 파사드.');
      await era.printAndWait('현대적인 스타일의 캠퍼스 건물이 새파란 하늘과 어우러져 반짝였다.');
      await era.printAndWait(
        '은행나무, 소나무, 그리고 안뜰의 고목나무도 모두 따스한 햇살을 받고 있었다.',
      );
      await era.printAndWait([
        treve.get_colored_name(),
        '는 중앙 트레센의 교복으로 갈아입고, 교사와 트레이닝실을 잇는 정원을 걸었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        treve.get_colored_name(),
        '의 전속 트레이너가 되었다.',
      ]);
    };
    f.title = '전인미답의 경지';
    return f;
  })(),
};
