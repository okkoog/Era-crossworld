const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');
const { race_enum, race_infos } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,CharaTalk,{wait:boolean}):Promise<void>>} handlers */
module.exports = (handlers) => {
  handlers[39] = async (daiya, me, flags) => {
    await print_event_name('아직은 너무나 먼 곳', daiya);
    const nice_nature = get_chara_talk(60);
    const dictus = get_chara_talk(63);
    const palmer = get_chara_talk(64);
    await era.printAndWait(
      `오늘 ${me.name}은(는) 사토노 다이아몬드와 함께, 키타산 블랙이 출주하는 『국화상』을 관전하러 왔다.`,
    );
    await daiya.say_and_wait('아, 키타짱 일행이 나왔어요!');
    await daiya.say_and_wait('어라……? 키타짱, 왠지 기운이 없어 보이는데……?');
    await daiya.say_and_wait('긴장해서 그런 걸까요……?');
    await nice_nature.print_and_wait(
      '??? 「……아마 그 애가 나오지 않았기 때문일 거야.」',
    );
    await era.printAndWait(
      `나이스 네이처가 인파 속에서 갑자기 나타났다. 듣기로는 ${daiya.sex}가 입학했을 때 신입생 환영회를 열어준 선배 중 한 명이라고 한다.`,
    );
    await daiya.say_and_wait([
      '아……! 분명 그럴 거예요. ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      '과 ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '에서 이겼던 그분이……',
    ]);
    await nice_nature.say_and_wait(
      `맞아, ${nice_nature.sex}는 오늘 출주하지 않으니까. 키타산은 『국화상』에서 그 애를 이기려고 지금까지 정말 열심히 해왔거든.`,
    );
    await nice_nature.say_and_wait(
      '그러니 김이 좀 빠졌겠지…… 게다가 봐, 경기장에도 주인공이 빠진 듯한 분위기가 감돌고 있잖아.',
    );
    await daiya.say_and_wait('주인공이 빠졌다니……');
    await daiya.say_and_wait('……윽!');
    await daiya.say_and_wait('키타짱──!!');
    await daiya.say_and_wait('아……!');
    await daiya.say_and_wait(
      '키타짱, 지금 엄청나게 집중하고 있어요…… 아무래도 걱정할 필요는 없었나 보네요!',
    );
    await daiya.say_and_wait(
      `${daiya.sex}는 분명 자신이 오늘 레이스의 주인공이라는 걸 증명하는 주행을 보여줄 거예요!`,
    );
    await era.printAndWait(
      '실황 「이것은 축제다! 요도의 축제! 키타산의 축제가 시작되었습니다! 『국화상』을 제패한 것은 키타산 블랙──!」',
    );
    await daiya.say_and_wait('대단해……! 역시 키타짱이에요!!');
    await nice_nature.say_and_wait('……세상에, 키타산도 주인공 체질이었구나~……');
    await daiya.say_and_wait(
      '하지만…… 키타짱, 마지막에 코스를 잡을 때 조금 고전하는 느낌이었죠……',
    );
    await daiya.say_and_wait(
      '……저라면 마지막 스퍼트로 승부를 봐야 하니까, 안쪽에 갇히지 않게 제4 코너에서 바깥쪽으로 돌아서, 그런 다음……',
    );
    await nice_nature.say_and_wait(
      '…………설마? 와~ 이쪽 아가씨도 눈부실 정도로 장난 아니네~',
    );
    await era.printAndWait('그렇게 『국화상』을 관전하고 난 다음 날──');
    era.printButton('「오늘 트레이닝은 여기까지!」', 1);
    await era.input();
    await daiya.say_and_wait(
      '트레이너 선생님, 전 아직 더 할 수 있어요! 마침 지구력을 보강하고 싶던 참인데…… 추가 트레이닝 좀 부탁드려도 될까요!!',
    );
    era.printButton('「지금은 아직 지구력을 보강할 단계가 아니야」', 1);
    await era.input();
    await daiya.say_and_wait('그럼 언덕길 대시 트레이닝은 어떤가요!?');
    await era.printAndWait(
      `사토노 다이아몬드가 꽤 적극적으로 말을 건네왔다. 하지만 ${me.name}은(는) 아직 주니어 시즌인 ${daiya.sex}에게 부담이 큰 트레이닝을 시킬 생각은 없었다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) ${daiya.sex}에게 몸이 완전히 성장하기 전에 큰 부담을 주면 부상을 입을 수도 있다고 설명했다.`,
    );
    await daiya.say_and_wait(
      '아…… 듣고 보니 그렇네요. 죄송해요…… 아마 키타짱이 『국화상』에서 활약하는 걸 보고 저도 더 노력해야겠다고 생각했나 봐요……',
    );
    await era.printAndWait(
      `아무래도 ${daiya.sex}는 어제 레이스에 자극을 받은 모양이다. 지금 의욕이 넘치고 있다.`,
    );
    await era.printAndWait(
      `그렇다면 몸에 무리가 가지 않는 선에서 ${daiya.sex}가 에너지를 발산하게 해주려면──`,
    );
    era.printButton('「학원의 징크스를 깨는 훈련을 해볼까?」', 1);
    await era.input();
    await daiya.say_and_wait('할래요!!');
    await daiya.say_and_wait('그럼 바로 출발하죠! 말씀하신 징크스는 어디에 있나요!?');
    await era.printAndWait(`${daiya.sex}는 ${me.name}의 제안에 매우 흥미를 보였다.`);
    await daiya.say_and_wait('시작하죠! 첫 번째 징크스는 뭔가요!?');
    era.drawLine();
    await era.printAndWait(
      `학원 징크스 그 첫 번째, 『옥상에서 딱지치기를 해서 이긴 사람은 계단을 내려갈 때 넘어진다』. ${me.name}이(가) 서둘러 딱지를 꺼내는 동안──`,
    );
    await palmer.print_and_wait('??? 「어라? 사토노랑 트레이너잖아!」');
    await palmer.say_and_wait(
      '뭐야 뭐야? 딱지치기라면 나도 끼워줘! 마침 심심하던 참이었거든──!',
    );
    await era.printAndWait(
      `${me.get_couple_title()}에게 말을 건 사람은 메지로 파머였다. 이쿠노 딕터스와 나이스 네이처도 곁에 있었다.`,
    );
    await daiya.say_and_wait(
      '함께해주신다면 당연히 환영이죠! 사실 저희, 지금 징크스를 깨는 훈련을 하고 있거든요.',
    );
    await nice_nature.say_and_wait('……응? 징크스를 깨는 훈련? 그게 무슨 소리야?');
    await palmer.say_and_wait('과연, 그런 거였구나. 그럼 우리도 도와줄게!');
    await dictus.say_and_wait(
      '네, 그래요. 학원 징크스라면 아주 많지는 않지만, 저도 10개 정도는 알고 있으니까요.',
    );
    await dictus.say_and_wait(
      "이곳의 징크스는 『옥상에서 딱지치기를 해서 이긴 사람은 계단을 내려갈 때 넘어진다』였죠.",
    );
    await dictus.say_and_wait(
      '사토노 양이 딱지치기에서 이기고, 계단을 내려갈 때 넘어지지 않는다면 징크스를 깬 셈이 되겠네요.',
    );
    await palmer.say_and_wait('그러고 보니 네이처, 너 딱지치기 꽤 잘하지 않아?');
    await nice_nature.say_and_wait(
      '그렇게 잘하는 건 아니고…… 그냥 자주 놀았을 뿐이야. 그나저나 사토노는 딱지치기 잘해?',
    );
    await daiya.say_and_wait('경험은 거의 없지만, 열심히 해볼게요!');
    await palmer.say_and_wait('……이거, 네이처를 이기는 것부터가 쉽지 않겠는걸.');
    await daiya.say_and_wait('──도착했어요!');
    await palmer.say_and_wait('오오~! 계단 내려올 때 전혀 안 미끄러졌네!');
    await daiya.say_and_wait('헤헤! 첫 번째 징크스 타파예요!');
    era.drawLine();
    await dictus.say_and_wait(
      '매점의 징크스 『마지막 남은 주스를 산 사람은 하루 종일 운이 나쁘다』.',
    );
    await daiya.say_and_wait('아, 마침 이게 마지막 한 병이네요.');
    await dictus.say_and_wait('운이 좋은지 나쁜지는…… 저와 사토노 양이 같이 뽑기를 해서 확인해 보죠.');
    await nice_nature.say_and_wait(
      '──이쿠노는 4등, 사토노는 1등이네. 와아── 운 정말 좋은걸.',
    );
    await daiya.say_and_wait('헤헤! 두 번째 징크스도 타파! 성공이에요~!!');
    era.drawLine();
    await daiya.say_and_wait(
      '──이걸로 열 번째 징크스까지 깼어요! 연속 10회 타파 성공이에요!!',
    );
    await palmer.say_and_wait(
      '징크스를 10개나 깨다니. 사토노, 정말 대단해…… 감탄했어.',
    );
    await daiya.say_and_wait('후후, 과찬이세요.');
    await palmer.say_and_wait(
      '아니야, 징크스든 가문의 꿈이든 도망치지 않고 정면으로 마주하는 사토노는 정말 멋져.',
    );
    await palmer.say_and_wait('그런 점은 맥퀸이랑 좀 닮았을지도.');
    await daiya.say_and_wait('정말인가요!? 너무 기뻐요!');
    await daiya.say_and_wait('전…… 맥퀸 씨를 동경하고 있거든요.');
    await daiya.say_and_wait(
      '금욕적으로 목표를 향해 나아가고, 어떤 거대한 압박에도 흔들리지 않는 늠름하고 확고한 자태가 제 목표예요.',
    );
    await daiya.say_and_wait(
      '맥퀸 씨가 메지로 가문의 사명을 짊어지고 완수해낸 것처럼, 저도 사토노 가문의 숙원을 이루고 싶어요.',
    );
    await palmer.say_and_wait(
      '후후, 맥퀸도 가문의 꿈을 위해 노력하는 사토노를 항상 높게 평가하고 있어.',
    );
    await daiya.say_and_wait('전 아직 한참 멀었는걸요. 지금까지 특별히 대단한 성적을 낸 것도 아니고요.');
    await nice_nature.say_and_wait(
      `……왠지…… 주인공 체질인 ${daiya.get_uma_sex_title()}도 사실 그렇게 편해 보이지는 않네……`,
    );
    await palmer.say_and_wait(
      '우리도 응원해 줄게. 사토노, 힘내! 절대 지면 안 돼!',
    );
    await daiya.say_and_wait('네! 고맙습니다!');
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

  handlers[47 + 1] = async (daiya, me, flags) => {
    await print_event_name('새해 포부', daiya);
    const kita = get_chara_talk(68);
    await daiya.say_and_wait('트레이너 선생님!');
    await kita.say_and_wait('다이아짱의 트레이너 선생님!');
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      ' 「새해 복 많이 받으세요, 올 한 해도 잘 부탁드립니다!」',
    ]);
    await era.printAndWait(
      `두 사람의 열정적인 새해 첫 부탁이다. 새해 소원을 빌기 위해 ${me.get_couple_title()} 세 사람은 함께 신사로 향했다.`,
    );
    await daiya.say_and_wait('으음~~ 어떤 소원을 빌면 좋을까요.');
    era.printButton('「클래식 3관 달성 아니었어?」', 1);
    await era.input();
    await daiya.say_and_wait(
      '그건 제 힘으로 해내야 하는 일이죠. 신령님께 도와달라고 빌 일은 아니라고 생각해요.',
    );
    era.printButton('「징크스 타파는?」', 1);
    await era.input();
    await daiya.say_and_wait('징크스도 제 실력으로 이겨낼 거예요!');
    await daiya.say_and_wait(
      '……매번 이렇게 신령님께 소원을 빌 때가 되면 뭘 빌어야 할지 몰라서 매년 한참을 고민하곤 해요……',
    );
    await era.printAndWait(
      `${me.name}은(는) ${daiya.sex}에게 소원 대신 『올해의 포부』를 선언해 보라고 제안했다.`,
    );
    await daiya.say_and_wait(
      '그거 좋은 제안이네요! 신령님 앞에서 선언한 이상, 절대 어길 수 없을 테니까요!',
    );
    await daiya.say_and_wait('말하자면 필승 기원, 아니, 필승의 사명인 거죠!');
    await era.printAndWait(
      `……아무래도 ${daiya.sex}는 신령님 앞에 아주 무거운 맹세를 올릴 모양이다.`,
    );
    await daiya.say_and_wait(
      '올해의 포부…… 단순히 클래식 3관에서 이기는 것뿐이라면, 그건 너무 당연한 일이에요.',
    );
    await daiya.say_and_wait(
      `사토노 가문의 ${daiya.get_uma_sex_title()}로서, 명망 있는 ${daiya.get_uma_sex_title()}라면 어떤 모습을 보여야 할지……`,
    );
    await daiya.say_and_wait('제가 되고 싶은 모습──', true);
    await daiya.say_and_wait('제가 특별히 중요하게 여겨야 할 것……', true);
    await daiya.say_and_wait('저는 당당하고 자신 있게, 스스로가 자랑스러워할 수 있는 달리기를 하고 싶어요.');
    await daiya.say_and_wait(
      '맥퀸 씨처럼 기품과 영광이 가득한 모습으로요. 사토노 가문의 대표다운 기개를 모든 분께 보여드리고 싶어요.',
    );
    era.printButton('「너다운 포부야, 아주 좋다고 생각해」', 1);
    await era.input();
    await era.printAndWait(
      `다이아몬드처럼 고귀하고 기품 있는 주행. 어릴 때부터 일류 교육을 받고 자란 ${daiya.sex}다운 포부다.`,
    );
    await daiya.say_and_wait(
      '키타짱, 넌 이미 결정한 모양이네. 그럼 같이 신령님께 선언하자.',
    );
    await kita.say_and_wait('응……!');
    await kita.say_and_wait(
      '『봄 시니어 3관』……! 꼭 멋진 활약을 펼쳐서 더 많은 분이 날 응원하게 만들 거야! 그리고 모두에게 웃음을 줄 거야!',
    );
    await daiya.say_and_wait(
      `전 『클래식 3관』을 차지하겠어요! 사토노 가문의 ${daiya.get_uma_sex_title()}로서, 모두의 눈을 사로잡을 눈부신 활약을 약속드릴게요!`,
    );
    await era.printAndWait(
      `두 ${daiya.sex}의 목표 레이스는 다르지만, 서로를 바라보는 눈빛 속 광채는 똑같았다──`,
    );
    await era.printAndWait(
      `길이 갈라지기 전까지는 나란히 함께 나아가려는 태도에서, ${me.name}은(는) 두 사람의 오랜 우정을 깊이 느낄 수 있었다.`,
    );
    await kita.say_and_wait(
      '헤헤! 나도 이제 슬슬 주목받기 시작했다구! 그러니 더 많은 팬이 생기도록 더 열심히 할 거야!',
    );
    await daiya.say_and_wait(
      '어머, 나도 다이아몬드라는 이름에 걸맞게 모든 사람을 매료시킬 주행을 보여줄 거라구.',
    );
    await kita.say_and_wait(
      '음……! 내가 『봄 시니어 3관』에서 먼저 모두를 홀려버릴 거거든!',
    );
    await daiya.say_and_wait(
      '음…… 내 『클래식 3관』 때가 되면, 사람들의 시선은 전부 저에게 쏠리게 될 거야!',
    );
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      ' 「으으으~~~ 이기는 건 나야!! 으으으~~~ 이기는 건 나라고!!」',
    ]);
    await kita.say_and_wait('그럼 새해 첫 대결로 승부를 내자!');
    era.printButton('「둘 다 좀 진정해……!」', 1);
    await era.input();
    await daiya.say_and_wait('트레이너 선생님, 걱정 마세요. 새해 대결은 저희의 연례 행사거든요.');
    await daiya.say_and_wait('승부를 내기엔 이보다 더 적절한 게 없죠!');
    await era.printAndWait(
      '둘 다 점점 흥분해서 전혀 멈출 기세가 보이지 않는다. 뭐, 매년 하던 거라면 위험하지는 않겠지……',
    );
    await daiya.say_and_wait('대결 내용은 트레이너 선생님이 정해주세요!');
    await kita.say_and_wait('부탁드려요! 꼭 우리 둘 다 전력을 다할 수 있는 걸로 골라주세요!');
    await era.printAndWait(
      `두 ${daiya.sex}가 전력을 다하면서도 신년 분위기에 어울리는 대결……`,
    );
    era.printButton('「장거리 역전 레이스 응원하기」', 1);
    era.printButton('「떡 뿌리기 행사에서 떡 줍기」', 2);
    era.printButton('「연날리기」', 3);
    const ret = await era.input();
    if (ret === 1) {
      await kita.say_and_wait(
        `『신춘 ${daiya.get_uma_sex_title()} 장거리 역전 레이스』 말이지! 지금 시간이라면…… 곧 이 근처를 지나갈 거야!`,
      );
      await daiya.say_and_wait('누가 더 응원을 잘하는지 겨루는 거군요! 그럼 트레이너 선생님이 심판을 봐주세요!');
      era.printButton('「좋아!」', 1);
      await era.input();
      await daiya.say_and_wait('아, 선두 그룹이 보여요!');
      await kita.say_and_wait(
        '힘내라────!! 뒤에서 쫓아온다구! 지금이 고비야!',
      );
      await daiya.say_and_wait(
        '할 수 있어요, 분명 따라잡을 수 있을 거예요!! 맞아요, 바로 그거예요! 그 페이스를 유지하세요!',
      );
      await era.printAndWait(
        `선두 그룹의 ${daiya.get_uma_sex_title()}들이 엄청난 속도로 눈앞을 지나쳐 갔다.`,
      );
      await kita.say_and_wait('좋아, 다음 응원 지점으로 이동하자!');
      await daiya.say_and_wait('다음은 오르막길이에요!');
      era.printButton('「……뭐!?」', 1);
      await era.input();
      await kita.say_and_wait(
        '언덕길은 다들 똑같이 힘들어! 버텨야 해! 지지 마!!',
      );
      await daiya.say_and_wait(
        '지금 가장 중요한 건 인내심이에요! 절대 무리하지 말고 자신의 페이스를 지키세요!!',
      );
      await daiya.say_and_wait('다음 장소로 이동해요!');
      era.printButton('「잠깐만!? 대체 어디까지 따라갈 셈이야……!」', 1);
      await era.input();
      await era.printAndWait([
        daiya.get_colored_name(),
        '&',
        kita.get_colored_name(),
        ' 「마지막 스퍼트다────!! 치고 나가──────!!」',
      ]);
      await era.printAndWait(
        '행사 실황 「두 팀이 거의 동시에 결승선을 통과합니다────!! 마지막 순간까지 한 치의 양보도 없었습니다!!」',
      );
      await kita.say_and_wait('아── 정말 개운하다! 땀 엄청 흘렸네~!');
      await daiya.say_and_wait(
        '저도 모르게 같이 너무 흥분해 버렸네요! ──참, 응원 대결의 판정은……',
      );
      era.printButton('「…………윽!…………으으!!」', 1);
      await era.input();
      await era.printAndWait(
        `……아무래도 ${daiya.sex}들이 신년 기간에 살이 찔 걱정은 안 해도 될 것 같아 다행이다.`,
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    } else if (ret === 2) {
      await daiya.say_and_wait('떡 뿌리기 행사……?');
      await kita.say_and_wait(
        '참배객들한테 떡을 던져주는 행사야! 그러니까 누가 더 많이 줍나 시합하는 거죠?',
      );
      await daiya.say_and_wait('그렇군요, 그럼 떡을 많이 줍기만 하면 된다는 거네요!');
      await era.printAndWait('떡 뿌리기 스태프 「자────── 던집니다!」');
      await era.printAndWait('사람들 「꺄────! 와아아아아아!」');
      await kita.say_and_wait('저쪽으로 많이 떨어질 것 같아! 돌격────!!');
      await daiya.say_and_wait('어라? 어라…… 꺄!');
      await daiya.say_and_wait(
        `사, 사람들에게 밀려나 버렸어요…… ${daiya.get_uma_sex_title()} 구역도 일반인 구역도…… 사람으로 가득해요……`,
      );
      era.printButton('「뒤쪽 바닥을 찾아봐」', 1);
      await era.input();
      await era.printAndWait(
        '사람들의 시선은 공중에서 떨어지는 떡에만 집중되어 있다. 멀리 떨어지거나 받는 데 실패한 떡은 의외로 사람들이 신경 쓰지 않았다.',
      );
      await daiya.say_and_wait('아, 정말이네요! 뒤쪽 바닥에 아주 많아요!');
      await daiya.say_and_wait('좋아── 제가 잔뜩 주워올게요!');
      await daiya.say_and_wait('헤헤헤, 많이 주웠어요!');
      await kita.say_and_wait(
        '풍년이다, 풍년~ 하아~ 좋다♪ 돌아가서 단팥죽 만들어 먹자!',
      );
      await daiya.say_and_wait('응!');
      await era.printAndWait(
        `${me.get_couple_title()}은 돌아오는 길에 팥을 샀고, 학원에 돌아와 셋이서 단팥죽을 배불리 먹었다.`,
      );
      era.println();
      flags.wait =
        get_attr_and_print_in_event(
          67,
          undefined,
          0,
          JSON.parse('{"체력":200}'),
        ) || flags.wait;
    } else {
      await daiya.say_and_wait(
        '연날리기! 아, 재미있겠네요! 누가 더 높이 날리나 겨루는 건가요?',
      );
      await kita.say_and_wait('응! 우리 둘 중에 누가 더 잘 날리는지, 다이아짱의 트레이너 선생님이 심판해 주세요!');
      await era.printAndWait(
        `사토노 다이아몬드는 연을 날려본 경험이 없는 듯하여, ${me.name}이(가) 먼저 시범을 보여주었다.`,
      );
      await daiya.say_and_wait(
        '으음…… 실은 이렇게 조절하고…… 도움닫기를 할 때 풍향을 주의해서……',
      );
      await kita.say_and_wait('흡─────!!');
      await kita.say_and_wait('하아──────!!………… 이상하네~?');
      await kita.say_and_wait('이상하다, 왜 안 뜨는 거지.');
      await daiya.say_and_wait('후후, 이제 제 차례네요!');
      await era.printAndWait(
        `사토노 다이아몬드가 가볍게 달리자, 연도 가뿐하게 하늘로 떠올랐다. ${daiya.sex}가 풍향에 맞춰 도움닫기 방향을 조절한 것이 좋은 결과로 이어졌다.`,
      );
      await kita.say_and_wait('와아, 다이아짱 대단해! 좋아── 나도 다시!');
      await kita.say_and_wait('이얍──────!!……아! 떴다, 떴어!');
      await daiya.say_and_wait(
        '성공하기만을 기다리고 있었어, 키타짱! 이제부터가 진짜 승부야!',
      );
      await era.printAndWait(
        '이론과 기교를 중시하는 사토노 다이아몬드. 기세와 끈기로 밀어붙이는 키타산 블랙.',
      );
      await era.printAndWait(
        '성격에 따라 날리는 방식은 달랐지만, 두 사람의 연은 하늘 위에서 자유롭게 노닐고 있었다.',
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, undefined, 30) || flags.wait;
    }
    era.set('cflag:67:축제이벤트표시', 0);
  };

  handlers[47 + 29] = async (daiya, _, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:67:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return;
    }
    const kita = get_chara_talk(68);
    await print_event_name('여름 합숙 (클래식 시즌) 시작!', daiya);
    await era.printAndWait('오늘부터 기다리고 기다리던 『여름 합숙』이다!');
    await daiya.say_and_wait(
      '이번 여름 합숙을 통해서, 징크스 따위에 휘둘리지 않는 강력한 실력을 기르겠어요!',
    );
    await era.printAndWait(
      '강력한 실력을 갖추기 위해, 이번 여름 합숙에서는 기초 트레이닝에 집중할 계획이다. 체력의 기초를 다지는 것은 매우 중요하다.',
    );
    await era.printAndWait(
      '『국화상』의 3000m를 버틸 수 있는 지구력을 기르는 것도 이번 합숙의 과제다.',
    );
    await kita.say_as_unknown_and_wait('다이아짱──!');
    await kita.say_and_wait('자자, 빨리 방으로 가자!');
    await daiya.say_and_wait('정말이지, 키타짱은 왜 이렇게 들떠 있는거야.');
    await kita.say_and_wait(
      '그치만 바다에 왔잖아! 나 정말 기대된다구! 올해도 꼭 제대로 단련하자~!',
    );
    await daiya.say_and_wait('오──!');
    await kita.say_and_wait('아하하, 다이아짱 너도 엄청 신났으면서!');
    await daiya.say_and_wait(
      '후후, 나도 당연히 의욕이 넘치지. 『국화상』은 무슨 일이 있어도 이겨야 하니까.',
    );
    await daiya.say_and_wait(
      '키타짱이 이겼던 『국화상』에서 승리해서…… 사토노 가문의 징크스를 깨고…… 키타짱의 숙적이 될 자격을 갖춘 내가 되겠어!',
    );
    await kita.say_and_wait('다이아짱……! 그래! 나중에 꼭 같은 레이스에서 달리자.');
    await era.printAndWait([
      daiya.get_colored_name(),
      '&',
      kita.get_colored_name(),
      ' 「파이팅, 오──!」',
    ]);
    await era.printAndWait(
      '두 사람의 의욕 넘치는 목소리가 여름 하늘에 울려 퍼졌다. ──무척이나 뜨거운 여름 합숙이 될 것 같다.',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };

  handlers[47 + 31] = async (daiya, me, flags, cb) => {
    if (
      era.get('cflag:0:위치') !== location_enum.beach ||
      era.get('cflag:67:위치') !== era.get('cflag:0:위치')
    ) {
      cb();
      return;
    }
    await print_event_name('여름 합숙 (클래식 시즌) 도중', daiya);
    const kita = get_chara_talk(68);
    const nice_nature = get_chara_talk(60);
    const tannhauser = get_chara_talk(62);
    const dictus = get_chara_talk(63);
    const palmer = get_chara_talk(64);
    const helios = get_chara_talk(65);
    const turbo = get_chara_talk(66);
    await daiya.say_and_wait('허억, 허억…… 페이스런…… 끝냈어요……');
    era.printButton('「고생했어, 좀 쉬자」', 1);
    await era.input();
    await daiya.say_and_wait('네……');
    await era.printAndWait(
      '여름 합숙이 절반 정도 지난 어느 날. 사토노 다이아몬드의 움직임이 눈에 띄게 둔해진 것이 느껴졌다.',
    );
    await era.printAndWait(
      `무더위 속에서의 훈련은 평소보다 체력 소모가 극심하다. 계속된 강행군에 ${daiya.sex}의 피로가 쌓인 모양이다.`,
    );
    await kita.say_as_unknown_and_wait('이랴아아아아──!');
    await kita.say_and_wait('후우, 10세트 끝! 몸이 점점 가벼워지는 느낌인데~?');
    await kita.say_and_wait('좋아── 웨이트를 두 배로 늘려서 한 세트 더 가보자──!');
    await daiya.say_and_wait('……트레이너 선생님, 다음 훈련으로 넘어가요!');
    era.printButton('「조금 더 쉬는 게 좋겠어……」', 1);
    await era.input();
    await daiya.say_and_wait('아뇨, 전 괜찮아요! 그럼 훈련 시작할게요!');
    era.drawLine();
    await daiya.say_and_wait('허억, 허억, 허억……');
    era.printButton('「오전 훈련은 여기까지만 하자」', 1);
    await era.input();
    await daiya.say_and_wait('하, 하지만…… 원래 예정된 양을 아직 다 못 채웠는데요……');
    await era.printAndWait(
      `${me.name}은(는) ${daiya.sex}에게 지친 상태로 훈련을 계속해봐야 효과가 없다고 설명했다. 실제로 현재 측정 데이터도 크게 떨어진 상태였다.`,
    );
    await daiya.say_and_wait(
      '한계라고 해서 멈춘다면…… 더 먼 곳에는 도달할 수 없어요! 징크스를 압도할 실력을 갖추려면 더 필사적으로 임해야 해요!!',
    );
    await daiya.say_and_wait('게다가 키타짱도 저렇게 노력하고 있잖아요! 저도 질 수 없어요!');
    await era.printAndWait(
      `${daiya.get_couple_title()}과는 조금 떨어진 곳에서, 땀 범벅이 되면서도 묵묵히 훈련을 소화해내는 키타산 블랙을 보며 ${daiya.sex}가 입술을 깨물었다.`,
    );
    await era.printAndWait(
      `하지만 ${me.name}은(는) 기세와 근성으로 한계를 돌파하려는 키타산 블랙의 방식이 사토노 다이아몬드에게는 맞지 않는다고 판단했다.`,
    );
    await daiya.say_and_wait('트레이너 선생님, 필요하시다면 이걸 참고해 주세요.');
    await daiya.say_and_wait(
      '이전에 저를 지도해 주셨던 선생님들이 정리해 주신 제 훈련 데이터예요. 성적 지표와 레이스 영상도 포함되어 있어요.',
    );
    await daiya.say_and_wait(
      '사토노 가문의 훈련 환경은 최첨단 기기를 사용하기 때문에 데이터의 정확도도 매우 높답니다.',
    );
    await era.printAndWait(
      `지금까지 ${daiya.sex}은(는) 매우 훌륭한 환경에서 훈련해 왔다. 뙤약볕 아래의 거친 환경에 익숙하지 않은 탓에 ${daiya.sex}은(는) 평소보다 더 많은 체력과 정신력을 소모하고 있었다.`,
    );
    era.printButton('「일단 점심부터 먹자」', 1);
    await era.input();
    await daiya.say_and_wait('……네……');
    await turbo.say_as_unknown_and_wait('에에에엣! 사토노! 그리고 거기 트레이너!');
    await turbo.say_and_wait('터보가 같이 훈련해 줄게!');
    await daiya.say_and_wait('……어라? 터보 씨?');
    await turbo.say_and_wait('다 같이 할 수 있는 훈련! 사토노 너도 끼워줄게!');
    await dictus.say_and_wait('터보, 너무 서두르지 마세요. 제가 설명해 드릴게요.');
    await era.printAndWait(
      `당황해하는 사이, 사토노 다이아몬드가 말했던 『신입생 환영회를 열어준 선배들』이 차례로 나타났다.`,
    );
    await era.printAndWait(
      '이쿠노 딕터스뿐만 아니라 트윈 터보, 마치카네 탄호이저, 다이타쿠 헬리오스까지 모여 있었다.',
    );
    await dictus.say_and_wait('사토노 양, 괜찮다면 저희와 공동 훈련을 해보지 않겠나요?');
    await dictus.say_and_wait(
      '다양한 사람들과 교류하는 것도 여름 합숙의 큰 장점이죠. 이번 기회에 시도해 보는 건 어떨까요?',
    );
    await daiya.say_and_wait('그렇군요……');
    await palmer.say_as_unknown_and_wait('너무 복잡하게 생각할 것 없어. 작년엔 테이오 일행이 키타산을 도와주기도 했으니까──');
    await turbo.say_and_wait(
      '테이오만 도와주는 건 불공평해! 터보도 선──배── 노릇 하고 싶단 말이야!',
    );
    await palmer.say_and_wait('뭐, 이런 상황이야. 네가 함께해 준다면 우리도 큰 도움이 될 것 같아.');
    await turbo.say_and_wait(
      '그치! 자, 사토노! 어서── 어서── 어서── 어서──!!',
    );
    await nice_nature.say_and_wait(
      '네가 실례가 안 된다면, 우리랑 같이 훈련하지 않을래?',
    );
    await daiya.say_and_wait('그게…… 어떻게 하면 좋을까요, 트레이너 선생님?');
    era.printButton('「어떤 훈련을 할 생각인데?」', 1);
    await era.input();
    await dictus.say_and_wait('두 가지 선택지가 있어요──');
    await era.printAndWait(
      '이쿠노 딕터스가 제안한 방안을 보니── 과연, 체력 소모를 조절하면서 무리하지 않고 진행할 수 있는 내용들이었다.',
    );
    await era.printAndWait(
      '무엇보다 꽤 재미있어 보여서 기분 전환 효과도 기대할 수 있을 것 같았다.',
    );
    era.printButton('「그럼 공동 훈련에 동참할게」', 1);
    await era.input();
    await turbo.say_and_wait('앗싸──!! 사토노, 모든 건 이 터보 선배님만 믿으라구────!');
    await daiya.say_and_wait('후후후, 잘 부탁드려요! 터보 선배님♪');
    await tannhauser.say_and_wait(
      '결정됐으면 점심부터 먹자~♪ 카레 먹을래? 아니면 야키소바? 아니면 둘 다~?',
    );
    await helios.say_and_wait(
      '오예☆ 먹을 거면 당연히 전부 먹어야지! 전원 메뉴 3개 완식 도전!',
    );
    await nice_nature.say_and_wait('너희들 왜 이렇게 빨라!?');
    await dictus.say_and_wait('그럼 점심을 먹고 다시 모이도록 하죠.');
    await dictus.say_and_wait(
      '어떤 훈련을 하는 게 좋을까요? 트레이너 선생님, 생각하신 게 있나요?',
    );
    await era.printAndWait('현재 사토노 다이아몬드의 상태에 가장 적합한 훈련은──');
    era.printButton('「모래로 터널 만들기」', 1);
    era.printButton('「종이 풍선 배구 시합」', 2);
    if ((await era.input()) === 1) {
      await dictus.say_and_wait(
        '모래 터널이군요. 해변 상점 근처의 모래사장 사용권은 이미 얻어두었습니다. 출발하죠.',
      );
      await daiya.say_and_wait(
        '저기…… 질문이 하나 있어요. 모래로 터널을 만드는 게 정말 훈련이 되나요?',
      );
      await nice_nature.say_and_wait(
        '당연히 되지── 우리가 직접 통과할 수 있는 터널을 만들 거거든.',
      );
      await nice_nature.say_and_wait(
        '게다가 터널을 만들려면 모래를 엄청나게 파내야 해. 계속, 계속, 계속 파내야 하지.',
      );
      await daiya.say_and_wait('그렇군요…… 듣고 보니 확실히 단련이 될 것 같네요!');
      await daiya.say_and_wait('휴, 이 정도면 충분할까요?');
      await tannhauser.say_and_wait(
        '응, 괜찮은 것 같아~ 자기가 판 구덩이에 빠지지 않게 조심해!',
      );
      await dictus.say_and_wait('탄호이저 씨, 본인이나 조심하세요.');
      await tannhauser.say_and_wait('앗! 맞다~! ……뭉뭉할게……');
      await tannhauser.say_and_wait(
        '자── 그럼 다음은 기초 공사야. 모래에 물을 아~주 많이 섞어서 밟아서 굳히는 거지.',
      );
      await tannhauser.say_and_wait(
        '터널 높이만큼 모래를 쌓고, 밟고, 또 쌓고, 또 밟고…… 나를 따라 해봐──♪',
      );
      await era.printAndWait('일동 「터널 완성──!」');
      await daiya.say_and_wait('와아~! 정말로 통과할 수 있어요!');
      await palmer.say_and_wait('초보자 솜씨치고는 완성도가 꽤 높은데!');
      await nice_nature.say_and_wait('후우~ 다 하고 나니까 갑자기 피로가 몰려오네……');
      await daiya.say_and_wait(
        '계속 모래를 파고 바닷물을 나르고, 또 모래를 계속 밟았으니까요. 계속 몸을 움직인 셈이네요.',
      );
      await daiya.say_and_wait('그래도 정말 즐거웠어요!');
      await era.printAndWait(
        '모래 터널 만들기는 파워 단련뿐만 아니라 훌륭한 기분 전환 효과도 있었던 모양이다.',
      );
      await turbo.say_and_wait(
        '헤헤헤── 그럼 이제 마지막 단계다! 다 같이 부숴버리자~~!!',
      );
      await daiya.say_and_wait('……네!?');
      await nice_nature.say_and_wait(
        '무슨 마음인진 알겠지만, 모래사장에 이렇게 큰 구멍들을 남겨둘 순 없잖아.',
      );
      await era.printAndWait(
        '모래 터널은 순식간에 무너져 원래대로 돌아갔다. 공동 훈련의 조금은 씁쓸한 추억이 되었다.',
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, [0, 20, 0, 0, 0], 0);
    } else {
      await dictus.say_and_wait(
        '네, 일반 배구공 대신 종이 풍선을 사용할 거예요. 직접 해보시면 알게 될 겁니다.',
      );
      await dictus.say_and_wait('그럼 제1경기! 파머&헬리오스 팀 대 사토노&터보 팀!');
      era.printButton('「시작!」', 1);
      await era.input();
      await era.printAndWait([
        palmer.get_colored_name(),
        '&',
        helios.get_colored_name(),
        '「웨이 웨이☆」',
      ]);
      await turbo.say_and_wait('사토노, 이 터보님만 따라오라구──!');
      await daiya.say_and_wait('네~~♪');
      await palmer.say_and_wait('서브 간다~! 이얍──!');
      await era.printAndWait(
        `${daiya.sex}가 쳐올린 종이 풍선이 높이 떠올랐으나…… 좀처럼 내려오질 않는다.`,
      );
      await turbo.say_and_wait(
        '좋아── 온다 온다 온다 온다! 온다 온다………… 아직 안 오냐────!?',
      );
      await daiya.say_and_wait(
        '낙하 지점은 이 근처 같은데…… 어라! 바람 방향이 바뀌었어요……! 꼭 네트를 넘겨야 하는데……!',
      );
      await daiya.say_and_wait('아…… 네트에 걸렸어……');
      await turbo.say_and_wait(' 뭐야──! 이 풍선 왜 이렇게 느린 거야!!');
      await daiya.say_and_wait(
        '한참 떠 있는다는 게…… 이런 뜻이었군요. 종이 풍선은 배구공보다 훨씬 가벼워서 공중에 머무는 시간이 길어요.',
      );
      await daiya.say_and_wait(
        '게다가 힘 조절을 해서 쳐야 네트를 넘길 수 있으니까, 결국 멈춰 서서 기다리는 시간이 필요하네요.',
      );
      await palmer.say_and_wait(
        '맞아, 끈기 있게 최고의 타이밍을 기다렸다가 적절한 힘으로 쳐야 해. 냉정함이 필수지.',
      );
      await helios.say_and_wait(
        '가끔 바람에 엄청 멀리 날아가기도 해! 그럼 막 뛰어다녀야 하는데 그게 진짜 웃기다니까☆',
      );
      await daiya.say_and_wait('최고의 타이밍을 기다린다…… 이건 레이스 중의 스퍼트 타이밍과 같네요.');
      await daiya.say_and_wait(
        '주변에 휘둘리지 않고 자신만의 타이밍을 끈기 있게 기다리는 것, 상당한 인내력이 필요하겠어요. 정말 좋은 훈련이 될 것 같아요!',
      );
      await era.printAndWait(
        '이윽고── 사토노 다이아몬드는 바람의 방향과 종이 풍선의 낙하 속도를 완벽히 파악하며 승리를 거머쥐었다.',
      );
      await dictus.say_and_wait(
        '훌륭해요, 특히 사토노 양. 어떤 상황에서도 흔들리지 않는 정신력은 정말 감탄스럽군요.',
      );
      await daiya.say_and_wait(
        '헤헤, 저도 모르게 시합에 푹 빠져버렸어요. 정말 즐거웠답니다!',
      );
      await era.printAndWait(
        '사토노 다이아몬드는 공동 훈련을 통해 인내력을 기르는 동시에 기분 전환에도 성공한 듯 보였다.',
      );
      era.println();
      flags.wait = get_attr_and_print_in_event(67, [0, 0, 20, 0, 0], 0);
    }
  };

  handlers[47 + 34] = async (daiya, me, flags) => {
    await print_event_name('나를 가두는 것', daiya);
    const mcqueen = get_chara_talk(13);
    await daiya.say_and_wait('이랴아아아아아──!');
    await daiya.say_and_wait('허억, 허억…… 아직 부족해, 이정도로는 이길 수 없어……');
    await daiya.say_and_wait(
      '『국화상』에서 승리하려면, 어떤 돌발 상황에도 흔들리지 않을 만큼 강해져야만 해……!',
    );
    await era.printAndWait(
      `사토노 다이아몬드는 『국화상』을 위해 연일 고된 훈련에 매진했다. 매일매일 ${daiya.sex}의 성장이 피부로 느껴질 정도였다.`,
    );
    await era.printAndWait(
      '신체적인 컨디션은 최상이었지만, 사토노 다이아몬드의 정신 상태는 매우 팽팽하게 긴장되어 보였다.',
    );
    await era.printAndWait(
      `특히 ${daiya.sex}는 요즘 『징크스를 누를 실력을 길러야 한다』는 말을 입버릇처럼 하고 있었다.`,
    );
    await daiya.say_and_wait('허억, 허억…… 흡!');
    await daiya.say_and_wait(
      '트레이너 선생님, 언덕길 대시 훈련은 이제 어느 정도 여유 있게 소화할 수 있게 됐어요.',
    );
    era.printButton('「두 세트 더 할 수 있겠어?」', 1);
    await era.input();
    await daiya.say_and_wait('네, 그럼 우선 한 세트 더 해볼게요!');
    await era.printAndWait(
      '징크스에 이토록 집착하는 것은 사토노 가문의 기대를 짊어지고 있기 때문일 것이다. 그렇다면──',
    );
    await era.printAndWait(`『${mcqueen.name}』에게 도움을 요청해 보기로 했다.`);
    await mcqueen.say_and_wait('오늘 잘 부탁드려요, 사토노 씨.');
    await daiya.say_and_wait('맥, 맥…… 맥퀸 씨!? 맥퀸 씨가 저와 함께 훈련해 주시는 건가요!?');
    era.printButton('「그녀에게서 배울 점이 많을 거야」', 1);
    await era.input();
    await daiya.say_and_wait('네!! 맥퀸 씨, 이런 소중한 기회를 주셔서 정말 감사합니다!');
    await mcqueen.say_and_wait(
      '후후, 그렇게 긴장하지 마세요. 저 또한 당신에게 좋은 자극을 받을 수 있으니까요.',
    );
    await mcqueen.say_and_wait(
      '자, 시간이 촉박하네요. 가볍게 장거리 러닝으로 몸을 풀고 나서 병행 훈련으로 넘어가도록 하죠.',
    );
    await daiya.say_and_wait('잘 부탁드립니다!');
    await era.printAndWait('두 사람 「이랴아아아아아! 이랴아아아아아!」');
    await daiya.say_and_wait('허억, 허억…… 정말 간발의 차이였는데……');
    await mcqueen.say_and_wait(
      '초반에 거리가 너무 벌어졌군요. 상대의 페이스에 맞춰 스퍼트 지점을 조절하는 연습을 더 하는 게 좋겠어요.',
    );
    await daiya.say_and_wait('확실히…… 맥퀸 씨 덕분에 제 부족한 점을 알게 됐어요!');
    await mcqueen.say_and_wait(
      '후후, 도움이 됐다면 다행이네요. 마지막은 쿨다운을 겸해서 장거리 러닝으로 마무리하죠.',
    );
    await daiya.say_and_wait('네!');
    await era.printAndWait(
      '사토노 다이아몬드의 표정이 한결 밝아졌다. 아까까지만 해도 감돌던 긴장감은 찾아볼 수 없었다.',
    );
    await era.printAndWait(
      `${me.name}은(는) 처지가 비슷한 메지로 맥퀸이라면 사토노 다이아몬드의 마음을 이해해 줄 거라 생각했다. 역시 ${mcqueen.name}에게 도움을 청하길 잘했다.`,
    );
    await daiya.say_and_wait('허억, 허억………… 아! 죄송해요, 맥퀸 씨!');
    await mcqueen.say_and_wait('무슨 일인가요?');
    await daiya.say_and_wait(
      '허니 레몬 드링크를 파는 노점을 발견했어요! 저기…… 잠시 사러 다녀와도 될까요?',
    );
    await mcqueen.say_and_wait(
      '어머, 정말이네요. 그럼 여기서 잠시 쉬면서 수분을 보충하도록 하죠.',
    );
    await daiya.say_and_wait('감사합니다!');
    await mcqueen.say_and_wait('……사토노 양, 꽤 큰 사이즈를 사셨네요……');
    await daiya.say_and_wait('헤헤헤, 사실 이 노점에는 유명한 징크스가 있거든요.');
    await daiya.say_and_wait(
      '레이스 전에 『LL사이즈 허니 레몬 · 꿀 부드럽게 · 특농 · 많이』를 마시면 반드시 진다는 징크스예요!',
    );
    await daiya.say_and_wait(
      '그래서 일부러 『국화상』 전에 마셔서, 이 징크스를 깨뜨려버리고 싶었거든요!',
    );
    await mcqueen.say_and_wait('징크스를 깨뜨린다……?');
    await daiya.say_and_wait([
      '사실 저는 줄곧 ',
      race_infos[race_enum.sats_sho].get_colored_name(),
      ', ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      '와 징크스에 얽매여 있었어요──',
    ]);
    await mcqueen.say_and_wait([
      '──그렇군요. 그래서 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '에서는 더더욱 징크스를 깨겠다는 결의를 다지는 거고요.',
    ]);
    await daiya.say_and_wait([
      '네! 전 절대로 징크스에 굴하지 않을 거예요! ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      '에서 그걸 증명해 보이겠어요!',
    ]);
    await mcqueen.say_and_wait(
      '징크스에 지지 않으려는 당신의 마음가짐은 정말 훌륭해요.',
    );
    await mcqueen.say_and_wait('하지만──');
    await mcqueen.say_and_wait(
      '평소와 다른 일이 생길 때마다 징크스 탓으로 돌리느라, 정작 중요한 평정심을 잃고 휘둘리고 있는 건 아닐까요?',
    );
    await daiya.say_and_wait('어……?');
    await mcqueen.say_and_wait(
      '레이스, 특히 장거리 레이스에서는 평정심을 유지하며 자신의 페이스를 관철하는 것이 무엇보다 중요해요.',
    );
    await mcqueen.say_and_wait(
      '외부 요인에 휘둘리면 집중력이 흐트러지고, 심리적 부담은 체력 소모로 이어지죠. 결국 자신만의 레이스를 펼칠 여유를 잃게 되는 거예요.',
    );
    await mcqueen.say_and_wait(
      '저도 비슷한 경험이 있답니다. 중요한 레이스에서 운 나쁜 일이 일어났던 적이요.',
    );
    await daiya.say_and_wait('맥퀸 씨에게도…… 아……');
    await daiya.say_and_wait([
      '혹시 ',
      race_infos[race_enum.tenn_spr].get_colored_name(),
      ' 때의 일을 말씀하시는 건가요……?',
    ]);
    await mcqueen.say_and_wait(
      '네…… 그 레이스는 제게 연패 달성이 걸린 아주 중요한 레이스였죠.',
    );
    await mcqueen.say_and_wait(
      '게이트에 들어가기 직전, 오른발에 위화감을 느껴 확인해 보니…… 편자가 떨어져 있었어요.',
    );
    await daiya.say_and_wait(
      '그 사건은 저도 알아요. 편자 절반이 휘어버린 탓에…… 현장에서 바로 다시 박으셨죠.',
    );
    await mcqueen.say_and_wait(
      '맞아요. 하지만 당시의 저는 편자가 빠진 것을 불운이나 징크스로 여기지 않았어요.',
    );
    await mcqueen.say_and_wait(
      '그저 편자를 다시 고정하는 일에만 차분히 집중했죠. 그리고 레이스가 시작된 후에는──',
    );
    await mcqueen.say_and_wait(
      '제 신경은 오른발의 편자에도, 당시 최대의 라이벌이었던 테이오 씨에게도 향해 있지 않았어요.',
    );
    await mcqueen.say_and_wait('오직 이기기 위해, 제 달리기 그 자체에만 집중했답니다.');
    await mcqueen.say_and_wait(
      '오로지 제 달리기만을 생각하며 3200m를 달렸어요. 그래서 그 레이스에서 이길 수 있었던 거죠.',
    );
    await daiya.say_and_wait('……자신의 달리기 그 자체에만……');
    await daiya.say_and_wait([
      '전…… ',
      race_infos[race_enum.toky_yus].get_colored_name(),
      ' 때 신발이 망가지는 바람에 예비 신발을 신고 달렸어요. 레이스 내내 신발이 신경 쓰여서……',
    ]);
    await daiya.say_and_wait(
      '레이스에 완전히 집중하지 못했고, 제 실력을 다 발휘하지 못한 게 너무 억울했어요……',
    );
    await mcqueen.say_and_wait('어머, 이미 답을 알고 계셨네요.');
    await daiya.say_and_wait('……제가 징크스에 너무 집착한 나머지, 오히려 징크스에 갇혀버렸던 걸까요……?');
    await daiya.say_and_wait('징크스를 아예 신경 쓰지 않는다면, 징크스에 발목 잡힐 일도 없을 텐데……');
    await mcqueen.say_and_wait('저는 그렇게 생각해요.');
    await daiya.say_and_wait('……단 한 번도 그렇게 생각해 본 적 없었지만…… 듣고 보니 정말 그렇네요……');
    await daiya.say_and_wait(
      '……맥퀸 씨가 언제나 흔들림 없는 실력을 유지하시는 비결을, 이제 조금 알 것 같아요……',
    );
    await daiya.say_and_wait(
      '언제나 자신의 달리기와 목표에만 집중하시니까…… 그래서 어떤 상황에서도 당당하고 확고하실 수 있는 거군요.',
    );
    await daiya.say_and_wait(
      '참으로 올곧은 방식이네요. 후후후, 역시 맥퀸 씨는 정말 대단한 분이에요!',
    );
    await mcqueen.say_and_wait('그렇게 말씀해 주시니 영광이네요.');
    await mcqueen.say_and_wait(
      '그리고…… 징크스라는 건 대개 결과론적인 이야기일 뿐이랍니다.',
    );
    await mcqueen.say_and_wait(
      '만약 제가 그 레이스에서 졌다면, 그것도 징크스 때문이라는 말을 들었겠죠. 하지만 이긴다면 징크스가 끼어들 틈 따위는 없어요.',
    );
    await daiya.say_and_wait(
      '정말 그렇네요! 그럼 허니 레몬을 마시면 레이스에서 진다는 징크스도 사실은……',
    );
    await mcqueen.say_and_wait(
      '제 생각엔…… 마시고 나서 살이 찌기 때문이 아닐까요? 이 정도로 마시면 칼로리 과다인 데다, 레몬 향이 단맛을 가려버리니까요.',
    );
    await daiya.say_and_wait('…………');
    await daiya.say_and_wait('으윽…… 저, 저기…… 벌써 다 마셔버렸는데요……');
    await daiya.say_and_wait(
      '트…… 트레이너 선생님!! 방금 마신 허니 레몬 칼로리만큼…… 추가 훈련으로 전부 태워버리게 해주세요~!',
    );
    era.drawLine({ content: '다음 날' });
    await daiya.say_and_wait([
      '저…… 어젯밤에 ',
      race_infos[race_enum.kiku_sho].get_colored_name(),
      ' 전까지 끝내야 할 과제들을 정리해 봤어요.',
    ]);
    await daiya.say_and_wait(
      '3000m 페이스 배분, 코스 선점 연구, 전개 상황 시뮬레이션…… 그리고 더 강력한 지구력.',
    );
    await daiya.say_and_wait(
      '해내야 할 과제가 산더미예요! 징크스 따위에 신경 쓸 틈은 이제 없어요!',
    );
    await daiya.say_and_wait(
      '반드시 사토노 다이아몬드만의 달리기를 완성하겠어요! 그리고 『국화상』에서 꼭 승리할 거예요!',
    );
    await era.printAndWait(
      '사토노 다이아몬드는 아주 상쾌한 표정으로, 당당하고 자신 있게 승리를 맹세했다.',
    );
    era.println();
    flags.wait = sys_like_chara(67, 0, 25);
  };
};
