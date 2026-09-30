const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const {
  begin_and_init_ero,
  end_ero_and_train,
} = require('#/system/ero/sys-prepare-ero');

const print_event_name = require('#/event/snippets/print-event-name');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');

/**
 * @param {CharaTalk} tachyon
 * @param {CharaTalk} me
 * @param {string} callname
 * @param {number} relation
 * @param {number} love
 */
module.exports = async (tachyon, me, callname, relation, love) => {
  await print_event_name('성탄 전야의 산타클로스', tachyon);
  era.println();
  await era.printAndWait('추운 겨울밤이었다.');
  await era.printAndWait(['내일은 드디어 아리마 기념이다.']);
  await era.printAndWait([
    '컨디션을 잘 조절해서 ',
    tachyon.get_colored_name(),
    '을 제대로 서포트해야만 한다.',
  ]);
  await era.printAndWait('그러니 일찍 잠자리에 들어야 했다.');
  await era.printAndWait('그런데……');
  era.println();
  await era.printAndWait('대체 누구기에 이 시간에 밖에서 바스락거리며 잠을 방해하는 것인가!');
  era.println();
  await era.printAndWait([
    me.get_colored_name(),
    '이(가) 분노하며 창문을 열어젖히자, 창밖에는 시험관을 든 ',
    tachyon.get_colored_name(),
    '이 서 있었다.',
  ]);
  era.println();
  await tachyon.say_and_wait(
    '이런, 깨어 있었나. 아쉽군, 새로 배합한 시약을 시험해 볼 기회였는데……',
  );
  era.printButton('「……그건 뭐야?」', 1);
  era.printButton('「……왜 창밖에 있는 건데?」', 2);
  if ((await era.input()) === 1) {
    await tachyon.say_and_wait(
      '음…… 소리도 냄새도 없이 유리를 부식시키는 약이라네. 오직 유리에만 반응해서 예전처럼 실수로 바닥을 뚫어버리는 일은 방지할 수 있지. 하지만 부작용은……',
    );
    await tachyon.say_and_wait(
      '용해가 끝난 뒤 자동으로 틈새에 스며들어 제거하기가 매우 어렵다네. 즉, 부식된 곳은 유리창을 통째로 갈아 끼우지 않는 한 다시는 유리를 끼울 수 없게 될 거야.',
    );
    era.println();
    await era.printAndWait('너무 무섭잖아!?');
  } else {
    await tachyon.say_and_wait(
      '후후, 깜짝 선물이라네…… 그것보다 먼저 안으로 들여보내 주지 않겠나? 바깥이 꽤 춥거든.',
    );
    era.println();
    await era.printAndWait('그러니까 왜 창문으로 기어 올라오는 거냐고!!');
  }
  era.println();
  await era.printAndWait([tachyon.get_colored_name(), '이 방 안으로 쑥 들어왔다.']);
  await era.printAndWait([me.get_colored_name(), '은(는) 다소 경계하는 눈초리로 상대를 바라보았다.']);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '이 무단 침입한 것은 이번이 처음이 아니었다. 매번 아침까지 기다릴 수 없다며 실험을 핑계로 약을 먹이려 들곤 했다.',
  ]);
  await era.printAndWait([
    '평소라면 몰라도, 아리마 기념 전날의 중요한 시간에만큼은 ',
    tachyon.sex,
    '가 제멋대로 굴게 내버려 둘 순 없었다.',
  ]);
  era.printButton('「내일은 아리마 기념이야.」', 1);
  era.printButton('「빨리 돌아가서 쉬어.」', 2);
  await era.input();
  await tachyon.say_and_wait(['……으흠, 내일이 아리마 기념이라면…… 오늘은?']);
  era.printButton('「오늘?」', 1);
  era.printButton('「……아리마 기념 전날?」', 2);
  await era.input();
  await era.printAndWait('…………');
  await era.printAndWait('현장은 순식간에 침묵에 빠졌다.');
  await era.printAndWait([
    '심지어 ',
    tachyon.get_colored_name(),
    '마저 어이가 없다는 표정을 지었다.',
  ]);
  era.println();
  await tachyon.say_and_wait([
    '……',
    callname,
    ', 오늘 거리의 빵집에서 갑자기 통나무 케이크를 팔기 시작한 건 눈치채지 못했나?',
  ]);
  era.printButton('「요즘 유행이라서 그런가?」', 1);
  await era.input();
  await tachyon.say_and_wait('…………K*C에서 치킨 버킷 세트를 팔기 시작했다던데?');
  era.printButton('「K*C에서 치킨 말고 세트로 팔 게 더 있어?」', 1);
  await era.input();
  await tachyon.say_and_wait('……………학생회장이 인형 옷을 입고 돌아다니던데?');
  era.printButton(
    '「분명 또 썰렁한 농담 같은 거겠지. 안 속아, 크리스마스트리 분장이라도………… 어?」',
    1,
  );
  await era.input();
  await era.printAndWait('…………');
  await era.printAndWait('방 안에 다시 정적이 흘렀다.');
  era.printButton('「설마…… 오늘이…… 크리스마스야?」', 1);
  await era.input();
  await era.printAndWait('하하하.');
  await era.printAndWait(['실내에 ', tachyon.sex, '의 은쟁반에 옥구슬이 굴러가는 듯한 웃음소리가 울려 퍼졌다.']);
  await era.printAndWait(
    '만약 이 목소리가 종소리라면, 정말로 산타클로스가 왔다고 믿어버릴지도 모르겠다.',
  );
  era.println();
  await tachyon.say_and_wait([
    '맞았네, ',
    callname,
    '! 오늘이 바로 크리스마스라네! 자…… 그럼 갖고 싶은 크리스마스 선물은 있나? 오늘은 이 산타클로스께서 통 크게 이루어 주지!',
  ]);
  era.println();
  await era.printAndWait([
    tachyon.get_colored_name(),
    '이 어디 숨겼는지 모를 산타 모자를 꺼내 귀에 비스듬히 눌러썼다.',
  ]);
  await era.printAndWait(
    '두 팔을 벌려 평소와 같은 포즈를 취했지만, 입에서 나온 말은 「실험을 시작하지」가 아니라 「Merry Christmas」였다.',
  );
  era.printButton('「Merry Christmas」', 1);
  era.printButton('「메리 크리스마스」', 2);
  await era.input();
  await tachyon.say_and_wait('자자, 얼른 말해보게. 어떤 선물을 원하나!');
  era.printButton('「타키온의 키스」', 1);
  era.printButton('「아리마 기념 승리」', 2);
  if ((await era.input()) === 1) {
    era.println();
    await era.printAndWait('크리스마스의 분위기에 취한 탓이었을까.');
    await era.printAndWait([
      '나도 모르게 ',
      tachyon.get_colored_name(),
      '에게 사제 관계의 선을 넘는 발언을 하고 말았다.',
    ]);
    era.println();
    if (love >= 75) {
      await tachyon.say_and_wait('에………');
      era.println();
      await era.printAndWait('역…… 역시 이상하겠지.');
      await era.printAndWait('그냥 다른 걸로 바꿀까.');
      era.println();
      await tachyon.say_and_wait(
        '아니…… 그저 평소에도 하고 있는 일을 크리스마스 소원으로 빌다니, 너무 소박하지 않나.',
      );
      await tachyon.say_and_wait(
        '모처럼의 크리스마스인데…… 조금 더 특별한 소원은 없나?',
      );
      await tachyon.say_and_wait('예를 들면……');
      era.println();
      await era.printAndWait('서서히 들어 올린 교복 치마 아래로 짙은 보랏빛 레이스가 보였다.');
      await era.printAndWait('암시적인 눈빛에는 정욕과 갈망이 가득 담겨 있었다.');
      await era.printAndWait('하지만……');
      era.printButton('「내일…… 아리마……」', 1);
      await era.input();
      await era.printAndWait('간신히 핵심 단어만을 내뱉었다.');
      await era.printAndWait('이성적으로 버틸 수 있는 한계가 딱 여기까지였기 때문이었다.');
      await era.printAndWait('마음 한구석은 두려우면서도 동시에 기대되었다.');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 충고를 듣지 않기를 두려워했고.',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 충고를 무시해 주기를 기대했다.',
      ]);
      era.println();
      await tachyon.say_and_wait('……됐네.');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '이 손길을 멈추었다.']);
      await era.printAndWait([
        me.get_colored_name(),
        '의 마음속에는 다행이라는 마음과 아쉬움이 교차했다.',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '생각해 보니 내일 실험 성공의 축하 방식으로 미뤄두는 것도 꽤 괜찮을 것 같군.',
      );
      era.println();
      await era.printAndWait('내일인가……');
      await era.printAndWait('기대해야 할 일이 하나 더 늘어난 모양이었다.');
    } else if (love >= 50) {
      await tachyon.say_and_wait('좋네.');
      era.println();
      await era.printAndWait('어……?');
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 반응하기도 전에, ',
        tachyon.get_colored_name(),
        '이 먼저 다가왔다.',
      ]);
      await era.printAndWait('잠깐, 이게 무슨 상황이지.');
      era.println();
      await tachyon.say_and_wait('쪽…… 츄릅…… 하아……');
      era.println();
      await era.printAndWait('수 분 동안 이어진 긴 입맞춤이었다.');
      await era.printAndWait(
        '짧으면서도 긴 시간 동안, 고요한 성탄 전야에는 타액이 섞이는 소리만이 울려 퍼졌다.',
      );
      if (!era.get('exp:0:키스횟수')) {
        await era.printAndWait('첫 키스가 딥키스라니.');
        await era.printAndWait('이런 환상적인 꿈은 아마 크리스마스 밤에나 일어날 일일 것이다.');
      }
      era.println();
      await tachyon.say_and_wait('이 크리스마스 선물, 마음에 드나?');
      era.println();
      await era.printAndWait([
        '달빛 아래의 ',
        tachyon.sex,
        '는 요염하면서도 위험한 색채를 띤 눈빛을 하고 있었다.',
      ]);
      era.println();
      await tachyon.say_and_wait('안심하게…… 나도 우선순위 정도는 알고 있으니까.');
      era.println();
      await era.printAndWait([
        '아무리 그래도 내일이 아리마 기념인데 그런 짓까지 하는 건 상대와 자신에 대한 예의가 아니었다.',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '그러니…… 이건 살짝 해두는 표식이라네. 아리마가 끝나고 나면, 후후…… 그때 어떻게 답해줄지 잘 생각해보게나.',
      ]);
      begin_and_init_ero(0, 32);
      await quick_make_love(
        new EroParticipant(32, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      end_ero_and_train();
    } else if (relation > 225) {
      await tachyon.say_and_wait('음? 참으로 묘한 요구군…… 고작 그것뿐인가?');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 아주 자연스럽게 ',
        me.get_colored_name(),
        '의 뺨에 살짝 입을 맞추었다.',
      ]);
      era.println();
      await era.printAndWait('……어라, 별 감흥이 없나?');
      era.println();
      await tachyon.say_and_wait(
        '참나, 귀중한 크리스마스 소원을 이런 데 낭비하다니 이해할 수 없군……',
      );
      era.println();
      await era.printAndWait(
        '나쁘진 않았지만, 그런 소리를 들으니 왠지 손해 본 기분이 들었다.',
      );
      await era.printAndWait('그렇다면……');
      era.println();
      await tachyon.say_and_wait(['!……어이, 잠깐, ', callname, '…… 지금 뭐 하는 건가.']);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 반대로 ',
        tachyon.get_colored_name(),
        '의 허리를 끌어안았다.',
      ]);
      await era.printAndWait('받은 게 있으면 돌려주는 게 예의지…… 뭐, 그런 셈 쳤다.');
      await era.printAndWait(
        '모처럼의 크리스마스인데, 직접 주도권을 쥐어보는 것도 재미있는 경험 아니겠는가.',
      );
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 가볍게 ',
        tachyon.get_colored_name(),
        '의 이마에 쪽 하고 입을 맞추었다.',
      ]);
      era.printButton('「메리 크리스마스.」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…………오늘이 크리스마스니까 특별히 넘어가 주는 거라네…… 나중에 두고 보게.',
      );
      era.printButton('「그렇게 말하면서 타키온, 얼굴 엄청 빨개졌는데……」', 1);
      await era.input();
      await tachyon.say_and_wait('시끄럽네!');
    } else if (relation > 0) {
      await tachyon.say_and_wait('오? 진정 원하는 건가?');
      era.println();
      await era.printAndWait('————어?');
      era.println();
      await tachyon.say_and_wait('듣자 하니, 서약의 키스라는 게 있다고 하더군.');
      era.println();
      await era.printAndWait('에에———!?');
      era.println();
      await tachyon.say_and_wait('그렇다면, 이리 오게.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 말을 마치더니 갑자기 ',
        me.get_colored_name(),
        '에게 다가왔다.',
      ]);
      era.println();
      await tachyon.say_and_wait('축제 기념 대방출이라 생각하게나……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        '가 살며시 ',
        me.get_colored_name(),
        '의 몸에 밀착했다.',
      ]);
      await era.printAndWait('상냥하게——— 손등에 가볍게 입을 맞추었다.');
      era.println();
      await tachyon.say_and_wait('됐네.');
      era.println();
      await era.printAndWait('…………어?');
      era.println();
      await tachyon.say_and_wait([
        '참고로 서약의 내용은, 오늘부터 자네는 영원히 나의 ',
        callname,
        '으로서 실험을 받아줘야 한다는 것이라네.',
      ]);
      era.println();
      await era.printAndWait('잠깐만!?');
      await era.printAndWait(
        '손등 키스 한 번이랑 평생권이랑 교환하는 건 가치 차이가 너무 크잖아!?',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은 ',
        me.get_colored_name(),
        '의 항의에는 아랑곳하지 않고 그저 낄낄대며 웃었다.',
      ]);
      await era.printAndWait('이게 진심인지 장난인지 도무지 알 수가 없었다.');
    } else {
      await tachyon.say_and_wait('어이 어이, 아무리 크리스마스라지만 그런 농담은 도를 넘었군.');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '이 날카로운 눈빛으로 ',
        me.get_colored_name(),
        '에게 경고했다.',
      ]);
      await era.printAndWait([
        '하지만 이런 익숙하고 차가운 반응에 오히려 ',
        me.get_colored_name(),
        '은(는) 안도감을 느꼈다.',
      ]);
    }
  } else {
    await era.printAndWait(['아마 내일이 아리마 기념이라서 그랬을 것이다.']);
    await era.printAndWait([
      '그 탓에 ',
      me.get_colored_name(),
      '은(는) 홧김에 분위기 파악 못 하는 소리를 내뱉고 말았다.',
    ]);
    era.printButton('「아리마……」', 1);
    await era.input();
    await tachyon.say_and_wait('쉿.');
    era.println();
    await era.printAndWait([
      '말을 다 마치기도 전에 ',
      tachyon.get_colored_name(),
      '의 검지가 입술을 눌렀다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '오늘은 기적과 마법이 일어나는 밤이라네. 그런 현실적인 이야기는 내일 하도록 하지, 알겠나?',
    );
    era.println();
    await era.printAndWait(['달빛 아래의 ', tachyon.sex, '은 마치 진짜 천사 같았다.']);
    era.printButton('「타키온에게도 이런 로맨틱한 면이 있을 줄은 몰랐어.」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '오? 하하하! 그러고 보니 그런 말이 있지 않나? 『과학자야말로 세계 최대의 로맨티스트』라고 말이야.',
    );
    era.println();
    await era.printAndWait('낭만적이고 감성적인 무언가를 믿지 않는다면.');
    await era.printAndWait('자신의 인생을 그토록 지루하고 반복적인 연구에 쏟아붓지는 않을 것이다.');
    await era.printAndWait([
      tachyon.get_uma_sex_title(),
      '의 가능성을 믿는 ',
      tachyon.sex,
      '와, ',
      tachyon.get_colored_name(),
      '의 가능성을 믿는 ',
      me.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('이들이야말로 세상에서 가장 천진난만한 두 명의 꿈꾸는 자들이 아닐까.');
    era.println();
    await tachyon.say_and_wait('자, 그럼 또 갖고 싶은 크리스마스 선물이 있나?');
    era.printButton('「아니, 됐어.」', 1);
    await era.input();
    await era.printAndWait('지금 이 꿈같은 시간이 가장 멋진 선물이었다.');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 마치 ',
      me.get_colored_name(),
      '의 뜻을 이해했다는 듯 고개를 끄덕이며 동의해주었다.',
    ]);
    era.drawLine();
    await tachyon.say_and_wait('그럼…… 자네가 원하던 선물은 다 줬군.');
    era.println();
    await era.printAndWait('응……?');
    await era.printAndWait([
      '「선물」 증정이 끝났음에도 ',
      tachyon.get_colored_name(),
      '은 아직 놀이가 끝나지 않았다는 듯 말을 이어갔다.',
    ]);
    era.println();
    await tachyon.say_and_wait('이제는 산타클로스가 주고 싶은 선물을 줄 차례라네.');
    era.println();
    await era.printAndWait([
      '그 말을 듣자마자 ',
      me.get_colored_name(),
      '은(는) 즉시 신경을 곤두세웠다.',
    ]);
    await era.printAndWait('역시…… 그냥 넘어갈 리가 없지?');
    era.println();
    await tachyon.say_and_wait([callname, ', 요 며칠간 자네도 꽤 지쳤을 테지.']);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '을(를) 위하는 척하는 도입부와 함께, ',
      tachyon.get_colored_name(),
      '이 침대 옆의 ',
      me.get_colored_name(),
      '에게 한 걸음씩 다가왔다.',
    ]);
    await era.printAndWait([
      '점점 ',
      me.get_colored_name(),
      '을(를) 침대 구석으로 몰아넣었다.',
    ]);
    await era.printAndWait('이번엔 무엇일까. 발광? 변색? 변형?');
    era.println();
    await era.printAndWait('공포와 함께 침대 위로 붉은 눈의 그림자가 드리워졌다.');
    await era.printAndWait([
      '마침내 거리가 제로가 되었을 때, ',
      tachyon.sex,
      '는 ',
      tachyon.sex,
      '의 진짜 목적을 드러냈다.',
    ]);
    era.println();
    await tachyon.say_and_wait('————착하지, 착해.');
    era.println();
    await era.printAndWait('뒷머리에 닿은 것은 부드러운 실크 같은 감촉이었다.');
    await era.printAndWait(['눈앞에는 ', tachyon.sex, '의 매혹적인 얼굴이 보였다.']);
    if (tachyon.sex_code - 1) {
      await era.printAndWait('——그렇게 말하고 싶었지만, 두 산맥에 가려 시야가 차단되었다.');
    }
    await era.printAndWait('이건…… 무릎 베개인가?');
    era.println();
    await tachyon.say_and_wait(
      '참나, 대체 뭘 생각한 건가? 말하지 않았나. 오늘 밤의 나는 그저 평범한 산타클로스일 뿐이라고. 그 이상도 그 이하도 아니야.',
    );
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 마치 자장가를 부르는 듯한 ',
      tachyon.sex,
      '의 상냥한 목소리를 멍하니 듣고 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('고생했네——— 그리고, 고맙군.');
    era.println();
    await era.printAndWait([
      '오늘 밤 이전까지는 늘 ',
      tachyon.get_uma_sex_title(),
      '의 억지에 어울려주어야 했다.',
    ]);
    await era.printAndWait(
      '내일 아침부터는 다시 아리마 기념, 그리고 그 너머의 URA 파이널스를 마주해야 한다.',
    );
    await era.printAndWait('그러니 적어도 지금 이 순간, 이 밤만큼은.');
    await era.printAndWait('부디, 좋은 꿈 꾸길 바라네.');
  }
};