const era = require('#/era-electron');

const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const TachyonLifeMarks = require('#/data/event/life-event-marks/life-event-marks-32');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,number)>} handlers */
module.exports = (handlers) => {
  handlers.cook01 = async (tachyon, me) => {
    await era.printAndWait([
      '점심시간, 어째서인지 ',
      tachyon.get_colored_name(),
      '은 일부러 ',
      tachyon.sex,
      '의 믹서기를 실험대 위에 올려두고 출력을 최대치로 높여, 엄청난 소음을 내며 ',
      tachyon.sex,
      '의 「점심 식사」를 갈기 시작했다.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문득, ',
      me.get_colored_name(),
      '이(가) 지난주에 너무 바빠서 ',
      tachyon.sex,
      '에게 도시락을 만들어 주는 것을 잊었다는 사실이 떠올랐다…… 이번 주에는 꼭 기억해야겠다.',
    ]);
  };

  handlers.cook02 = async (tachyon, me, callname) => {
    await tachyon.say_and_wait([
      callname,
      ', 자네는 『거의 다 이룬 일을 마지막 한 조각이 모자라 완수하지 못하는』옛날 이야기를 알고 있나?',
    ]);
    await tachyon.say_and_wait(
      '다시 말해, 백 리를 가려는 자는 구십 리를 반으로 여겨야 하는 법. 오직 끈기 있게 노력하는 자만이 성공을 거머쥘 수 있다는 소리라네.',
    );
    await tachyon.say_and_wait(
      '레이스의 세계에서도 마찬가지네. 능력치가 부족할 수도 있고 스킬이 발동하지 않을 수도 있지. 하지만 자네가 우마무스메를 육성하며 배운 지식은 자네를 배신하지 않아.',
    );
    await tachyon.say_and_wait(
      '그래, 서포트 카드가 남들보다 뒤처지면 좀 어떤가. 6R 카드로도 SS 랭크의 우마무스메를 키워낼 수 있지. 모든 것은 그저 노력과 근성의 문제라네……',
    );
    era.println();
    await era.printAndWait([
      '오늘 트레이닝실에 들어서자마자, ',
      tachyon.get_colored_name(),
      '은 영문 모를 장광설을 늘어놓기 시작했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '즉, 내가 하고 싶은 말은………… 노력이라는 건, 요리에 있어서도 마찬가지라는 뜻이라네.',
    );
    era.println();
    await era.printAndWait([
      '그 말을 듣고 나서야 ',
      me.get_colored_name(),
      '은(는) 겨우 상황을 파악했다. 과연 그렇군, 지난 2주간 일이 너무 많아서 ',
      me.get_colored_name(),
      '은(는) 또 잊어버리고 말았던 것이다. 안 돼, 이번에야말로 꼭 기억해야 한다……',
    ]);
  };

  handlers.cook03 = async (tachyon, me, callname) => {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '오늘 실험실에 도착하자마자 ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 기분이 매우 좋지 않다는 것을 눈치챘다. 그리고 ',
      me.get_colored_name(),
      '은(는) 그 이유를 알고 있었다.',
    ]);
    era.println();
    await era.printAndWait(['원인은 바로 ', me.get_colored_name(), '에게 있었다.']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 벌써 3주째 ',
      tachyon.get_colored_name(),
      '에게 요리를 해주지 않았기 때문이다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 다급히 ',
      tachyon.sex,
      '에게 요 몇 주 동안 정말 바빠서 시간을 낼 수 없었다고 변명했다…… 스스로가 듣기에도 믿기지 않는 거짓말을.',
    ]);
    await era.printAndWait([
      '정말로 잊어버렸거나, 혹은 다른 ',
      tachyon.get_uma_sex_title(),
      '를 육성하는 데 시간을 다 썼거나,',
    ]);
    await era.printAndWait(
      '그것도 아니면 단순히 얼마나 다양한 대사가 있는지 보고 싶었을 뿐이거나. 「당신」의 시간은 원하는 만큼 충분했으니까.',
    );
    await era.printAndWait([
      '하지만 지금 이 순간, ',
      me.get_colored_name(),
      '은(는) 서툰 변명을 늘어놓으며 용서를 구할 수밖에 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('…………딱히 자네에게 용서할 건 없네.');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '을(를) 힐끗 쳐다보며 말했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '이것 또한 자네가 가진 가능성 중 하나이며, 훌륭한 연구 샘플이지. 나는 자네의 노력을 부정하지 않네.',
    );
    await tachyon.say_and_wait(
      '마찬가지로 자네의 나태함 또한 비난하지 않겠어. 결국 자네 스스로 선택한 결과일 뿐이며, 나와는 아무런 상관도 없는 일이니까.',
    );
    era.println();
    await era.printAndWait('그렇다, 굳이 말하자면.');
    await era.printAndWait([
      tachyon.sex,
      '가 마침내 고개를 돌렸다. 오늘 들어 처음으로 ',
      me.get_colored_name(),
      '을(를) 정면으로 바라본 것이다.',
    ]);
    await era.printAndWait([tachyon.sex, '의 눈빛에는 실망도, 혐오도, 분노도 없었다.']);
    await era.printAndWait(
      '그저 형언할 수 없는 감정만이 서려 있었다. 굳이 그 감정을 정의하자면———— 「지루함」이었다.',
    );
    era.println();
    await tachyon.say_and_wait('자네의 가능성이라는 것도, 고작 이 정도 수준이었군.');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 마치 실험 목표를 달성하지 못한 실험 동물을 보는 듯한 눈으로 ',
      me.get_colored_name(),
      '을(를) 바라보며 입을 열었다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '자네의 가치를 증명하기 위해 계속 노력하게나, ',
      callname,
      '…… 그러지 않으면, 내가 지루해졌을 때 언제 자네를 버릴지 모르니까.',
    ]);
    era.println();
    sys_like_chara(32, 0, -600) && (await era.waitAnyKey());
  };

  handlers.cook11 = async (tachyon, me) => {
    await tachyon.say_and_wait('으음……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 오늘따라 어딘가 안절부절못하는 모양새였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 긴장한 목소리로 ',
      tachyon.sex,
      '에게 무슨 일이 있냐고 물었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('…………흥, 아무것도 아닐세.');
    era.println();
    await era.printAndWait([tachyon.sex, '는 토라진 듯 아무 일도 없다고 대답했다.']);
    await tachyon.say_and_wait('꼬르륵～～～～');
    await era.printAndWait([
      '바로 그때, 운명적이게도 ',
      tachyon.sex,
      '의 배에서 커다란 소리가 울려 퍼졌다.',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await me.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 문득, ',
      me.get_colored_name(),
      '이(가) 지난주에 ',
      tachyon.sex,
      '에게 도시락을 챙겨주는 것을 완전히 잊었다는 사실을 떠올렸다.',
    ]);
    await era.printAndWait('설마……');
    era.println();
    await tachyon.say_and_wait(
      '…………어차피 음식 따위, 생명 유지에 필요한 최소한의 에너지만 보충하면 그만이라네.',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '는 여전히 억지를 부리고 있었고, ',
      me.get_colored_name(),
      '은(는) 서둘러 사과하며 오늘은 절대로 잊지 않겠다고 약속했다.',
    ]);
  };

  handlers.cook12 = async (tachyon, me, callname) => {
    await tachyon.say_and_wait(['흥, ', callname, ', 오늘의 약이 왔네.']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 갑자기 트레이닝실로 들이닥치더니, ',
      me.get_colored_name(),
      '에게 기묘한 색깔의——사실 평소와 다름없는 색깔의——약 한 병을 강제로 먹였다.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 약을 마시고 얼마 지나지 않아 깊은 잠에 빠졌다.',
    ]);
    await era.printAndWait([
      '꿈속에서 ',
      me.get_colored_name(),
      '은(는) 마치 사막을 걷는 듯했다. 며칠 밤낮을 먹지도 마시지도 못한 상태였다.',
    ]);
    await era.printAndWait([
      '갑자기 장면이 바뀌더니, 꿈속의 ',
      me.get_colored_name(),
      '은(는) 정체 모를 누군가에 의해 곤죽이 된 영양소를 억지로 입에 넣어야 했다. 도저히 삼키기 힘든 맛이었지만,',
    ]);
    await era.printAndWait([
      '조금 전 사막에서의 갈증을 생각하며 ',
      me.get_colored_name(),
      '은(는) 그것을 필사적으로 삼킬 수밖에 없었다…………',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 꿈에서 깨어났고, 눈앞에는 ',
      tachyon.get_colored_name(),
      '의 득의양양한 얼굴이 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['어이쿠, 악몽이라도 꾼 건가? ', callname]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 쓴웃음을 지으며 이 약이 무엇을 의미하는지 대강 짐작했다. 그리고 이번 주에는 꼭 ',
      tachyon.get_colored_name(),
      '의 도시락을 챙기겠다고 약속했다.',
    ]);
  };

  handlers.cook13 = async (tachyon, me, callname) => {
    await era.printAndWait([
      '오늘 아침 ',
      me.get_colored_name(),
      '이(가) 학원에 도착했을 때부터 분위기가 심상치 않았다.',
    ]);
    await era.printAndWait('학원 전체가 묘한 소란에 휩싸여 있었다.');
    await era.printAndWait(
      '그 소란은 점심시간이 되자 절정에 달했고, 식당가에서 마침내 폭발했다.',
    );
    era.println();
    await say_by_passer_by_and_wait('지나가는 트레이너 A', [
      '모든 ',
      tachyon.get_uma_sex_title(),
      '들이 폭주하기 시작했어! ',
      tachyon.sex,
      '들이 왠지 갑자기 자기 담당 트레이너한테 매달리며 도시락을 내놓으라고 난리야!',
    ]);
    await say_by_passer_by_and_wait('지나가는 트레이너 A', [
      '직접 만든 게 아니면 안 된대! 젠장, ',
      tachyon.sex,
      '들은 대체 도시락이 트레이너가 만든 건지 아닌지 어떻게 구분하는 거야!',
    ]);
    era.println();
    await era.printAndWait([
      '어느 엑스트라 트레이너가 트레이닝실에 뛰어들어 마치 상황 설명을 하듯 저 말을 내뱉고는, 문밖에서 들이닥친 그의 담당 ',
      tachyon.get_uma_sex_title(),
      '에게 끌려 나갔다.',
    ]);
    era.printButton('「대, 대체…… 어떻게 된 일이야……」', 1);
    await era.input();
    await tachyon.say_and_wait('이런, 무슨 일인지 궁금한 건가?');
    await era.printAndWait([
      '갑자기 ',
      me.get_colored_name(),
      '의 등 뒤에서 익숙한 목소리가 들려왔다. 하지만 ',
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '가 언제 트레이닝실에 들어왔는지조차 알지 못했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '자네가 그토록 간절히 묻는다면, 내 특별히 가르쳐 주도록 하지.',
    );
    await tachyon.say_and_wait([
      '우마무스메와 도시락의 악을 관철하기 위해, 귀엽고 매혹적인 매드 사이언티스트……',
    ]);
    await tachyon.say_and_wait([
      '너무 기니까 이하는 생략하겠네. 결론은 나, 아그네스 타키온이라네. 자, ',
      callname,
      ', 순순히 도시락을 내놓으시지.',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '이(가) 앉아 있는 의자 등받이에 기대어 고개를 숙였고, ',
      me.get_colored_name(),
      '을(를) 향해 대단히 공격적인 미소를 지어 보였다.',
    ]);
    era.printButton('「너 또 무슨 짓을 저지른 거야」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '이런, 너무하군. 어째서 다짜고짜 나를 의심하는 건가. 어쩌면 나도 피해자일지 모르는데 말이야.',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '는 가련한 척하는 말투로 대답했다.']);
    era.printButton('「방금 네 입으로 직접 자백했잖아」', 1);
    await era.input();
    await tachyon.say_and_wait('에…… 그런 것 같기도 하군.');
    await era.printAndWait('그런 세세한 건 신경 쓰지 말게나.');
    await era.printAndWait([tachyon.sex, '는 소매를 휘저으며 말했다.']);
    era.println();
    await tachyon.say_and_wait(['중요한 건 말이야, ', callname, ', 자네의 도시락을 내놓으라는 거라네.']);
    era.printButton('「이런 강압적인 방식에 내가 순순히 따를 것 같아?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '…………후후, 물론이지. 결국 자네는 내게 도시락을 바치게 될 걸세.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 신비로운 미소를 지었고, ',
      me.get_colored_name(),
      '은(는) 자신도 모르게 양심의 가책을 느꼈다.',
    ]);
    await era.printAndWait([
      '오늘 ',
      me.get_colored_name(),
      '은(는) 분명히 ',
      tachyon.get_colored_name(),
      '의 도시락을 만들었다. 하지만 오늘 일이 너무 바빠서 깜빡하고 가져오지 못했던 것이다.',
    ]);
    await era.printAndWait(
      '하지만 그렇다고 해도, 여기서 물러날 수는 없다. 이것은 트레이너로서의 자존심을 위한 일이다! 자유를 위해! 그리고……',
    );
    era.println();
    await get_chara_talk(302).say_and_wait([
      '공지합니다! 알 수 없는 요인의 영향으로, 학원 내 모든 ',
      tachyon.get_uma_sex_title(),
      '들이 트레이너가 직접 만든 도시락에 대해 원인 불명의 집착을 보이고 있습니다.',
    ]);
    await get_chara_talk(302).say_and_wait([
      '트레이너 여러분은 즉시 담당 우마무스메의 도시락을 제작해 주십시오. 요리를 못 하는 트레이너는 이사장 비서, 가사 대행 교사, 혹은 이미 도시락을 다 먹은 ',
      get_chara_talk(21).get_colored_name(),
      ', ',
      get_chara_talk(12).get_colored_name(),
      ' 또는 ',
      get_chara_talk(28).get_colored_name(),
      '에게 도움을 요청하시기 바랍니다.',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '득의양양한 표정의 ',
      tachyon.get_colored_name(),
      '을 보며, ',
      me.get_colored_name(),
      '은(는) 쓴웃음을 지을 수밖에 없었다.',
    ]);
    await era.printAndWait([
      '역시 ',
      tachyon.sex,
      '에게는 이길 수가 없다. ',
      me.get_colored_name(),
      '은(는) 결국 순순히 도시락을 내어 주었다.',
    ]);
    const life_marks = new TachyonLifeMarks();
    life_marks.l_cook = era.get('flag:현재턴수');
  };

  handlers.cook21 = async (tachyon, me, callname) => {
    await era.printAndWait([
      '점심시간, ',
      me.get_colored_name(),
      '이(가) 한창 데이터를 정리하고 있을 때 트레이닝실 문이 거칠게 열렸다.',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '! 내 밥은! 얼른, 빨리 내놓게!']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 들어오자마자 책상 위로 달려들어 몸을 굴리기 시작했다.',
    ]);
    era.println();
    await era.printAndWait('위험해, 위험해.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 컴퓨터가 ',
      tachyon.get_colored_name(),
      '에게 부딪혀 바닥으로 떨어지는 것을 막기 위해 서둘러 치웠다.',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '! 자네, 벌써 일주일째 나한테 도시락을 안 만들어 줬네만! 배고파 죽겠단 말이네. 빨리 내 도시락 내놓게!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 소매를 휘저으며 화난 듯 ',
      me.get_colored_name(),
      '앞에서 발을 굴렀다. 매끄러운 뺨은 마치 복어처럼 부풀어 올라 있었다.',
    ]);
    era.printButton('「이미 만들어 주지 않았어?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      new TachyonLifeMarks().cook < 20
        ? '그렇게 대충 만든 게 도시락이라고 부를 수 있는 물건인가!?'
        : '맛으로는 구분할 수 없지만…… 내 직감이 말하고 있네. 이건 자네가 건성으로 만든 거라고.',
    );
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('지금 속으로 『이 녀석 정말 귀찮네』라고 생각했지?');
    await me.say_and_wait('……');
    await me.say_and_wait('어떻게 알았지?', true);
    era.println();
    await tachyon.say_and_wait('어쨌든 내일은 꼭 도시락을 가져오게! 안 그러면 자네, 후회하게 될 거야.');
  };

  handlers.cook22 = async (tachyon, me, callname) => {
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 벌써 2주 동안 ',
      me.get_colored_name(),
      '에게 그 어떤 실험도 하지 않았다.',
    ]);
    await era.printAndWait([
      '첫 주에는 솔직히 말해서, ',
      me.get_colored_name(),
      '은(는) 아쉽기는커녕 오히려 기쁘기까지 했다.',
    ]);
    await era.printAndWait([
      '매일 ',
      tachyon.get_colored_name(),
      '을 볼 수는 있었고, 모든 것이 평소와 같았지만 단지 ',
      tachyon.sex,
      '가 ',
      me.get_colored_name(),
      '에게 실험을 하지 않을 뿐이었으니까.',
    ]);
    await era.printAndWait([
      '하지만 둘째 주가 되자 ',
      me.get_colored_name(),
      '은(는) 어딘가 위화감을 느끼기 시작했다. 스톡홀름 증후군……',
    ]);
    await era.printAndWait([
      '까지는 아니더라도, 그저 ',
      tachyon.sex,
      '의 상태가 걱정되었고 왠지 모를 불길한 예감이 들었다.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '의 실험실 앞으로 가서 문을 두드렸다. 안에서는 아무런 대답이 없었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 사태가 심상치 않음을 느끼고 문을 박차고 들어갔다.',
    ]);
    era.println();
    await era.printAndWait([
      '분명 ',
      tachyon.get_colored_name(),
      '처럼 보였지만, 어째서인지 2등신이 되어버린, 왠지 귀엽게 생긴 생명체가 그곳에 있었다.',
    ]);
    await era.printAndWait(
      '등 뒤의 꼬리는 둥글고 포동포동해졌다. 마치…… 너구리 꼬리 같이.',
    );
    await era.printAndWait([
      '에?? 대체 어떻게 된 거지?? 이게 정말 ',
      tachyon.get_colored_name(),
      '인 건가???',
    ]);
    era.println();
    await era.printAndWait('…………그렇군, 이해했다.');
    await era.printAndWait([me.get_colored_name(), '은(는) 모든 것을 완전히 이해했다.']);
    await era.printAndWait(
      '그래, 그 정체불명의 약물들, 실험체를 대하는 비인간적인 태도, 그리고 이제야 드러난 저 꼬리까지.',
    );
    await era.printAndWait([
      '틀림없어, ',
      tachyon.get_colored_name(),
      '은 처음부터 너구리가 변신한 것이었다!',
    ]);
    era.println();
    await era.printAndWait('…………아니, 이런 혼란스러운 망상은 일단 접어두자.');
    await era.printAndWait(
      '어디선가 기묘한 BGM이 흐르기 시작했다. 「아멜리아의 유언」인 듯했다. 매우 아름다운 음악이었지만, 지금의 처량한 상황과는 선명한 대조를 이루었다.',
    );
    await era.printAndWait([
      '당황한 와중에 ',
      me.get_colored_name(),
      '은(는) 이전에 ',
      tachyon.get_colored_name(),
      '이 도시락에 대해 했던 말을 떠올리고, 원래 자신이 먹으려던 도시락을 서둘러 꺼냈다.',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '? 자네 거기서 뭘 하고 있나?']);
    await era.printAndWait([
      '제정신을 차린 ',
      tachyon.get_colored_name(),
      '은 순식간에 원래 모습으로 돌아와 있었고, 텅 빈 도시락통만이 방금 일어난 일이 꿈이 아니었음을 증명하고 있었다.',
    ]);
    await era.printAndWait([
      '꿈이 아니었다…… 어쨌든, 앞으로는 잊지 말고 ',
      tachyon.get_colored_name(),
      '에게 도시락을 만들어 주기로 결심했다.',
    ]);
    const life_marks = new TachyonLifeMarks();
    life_marks.l_cook = era.get('flag:현재턴수');
  };

  handlers.hate = async (tachyon, me, callname) => {
    await era.printAndWait([
      '갑자기, ',
      tachyon.get_colored_name(),
      '이 ',
      me.get_colored_name(),
      '에게 입을 맞추었다.',
    ]);
    await era.printAndWait([
      '뜨거운 액체가 ',
      me.get_couple_title(),
      '의 입술 사이로 전해졌고, 두 사람이 나누어 마신 그 액체는 ',
      me.get_colored_name(),
      '의 목구멍을 타고 흘러내렸다.',
    ]);
    await era.printAndWait('액체가 지나간 자리에 즉각적인 작열감이 느껴졌다.');
    era.println();
    await tachyon.say_and_wait(['아픈가? ', callname]);
    await tachyon.say_and_wait(
      '나도 정말 아프다네…… 내가 직접 만든 약이지만, 위력이 이렇게나 강할 줄은 몰랐어.',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 얼굴에는 미소가 걸려 있었지만, 눈동자에는 그 어떤 웃음기조차 없었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('자네를 탓하지는 않겠네…… 결국, 속은 사람이 잘못한 것이니까.');
    await tachyon.say_and_wait('이것은 자네에게, 그리고 사람을 잘못 본 나 자신에게 내리는 벌이라네.');
    await tachyon.say_and_wait(
      '자네에게 떠나라고 요구하지도 않겠어…… 인정하기 싫지만, 이런 일이 벌어졌음에도 나는 자네가 내 곁을 떠나지 않기를 바라고 있으니까.',
    );
    await tachyon.say_and_wait([
      '그러니 나의 사랑하는 ',
      callname,
      '…… 남은 여 · 생 동안, 부디 서로를 갉아먹으며 함께 살아가도록 하세.',
    ]);
  };
};