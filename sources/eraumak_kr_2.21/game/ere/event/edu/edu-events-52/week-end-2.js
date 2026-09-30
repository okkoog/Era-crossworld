const era = require('#/era-electron');

const {
  sys_change_attr_and_print,
  sys_change_weight,
} = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
} = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

/** @param {Record<string,function(CharaTalk,CharaTalk,CharaTalk,string,UraraEduMarks,EventObject):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47] = async (urara, me, in_urara, callname, edu_marks) => {
    await print_event_name('뜻밖의 연말 상담!', urara);
    await in_urara.say_as_unknown_and_wait([
      '오늘 우라라는 일찌감치 아무도 없는 트레이닝실에 도착했습니다. 홀로 있는 ',
      urara.sex,
      '는 무슨 고민이라도 있는 걸까요?',
    ]);
    await in_urara.say_as_unknown_and_wait([
      '그렇다면 ',
      urara.sex,
      '가 트레이너 ',
      me.get_adult_sex_title(),
      '에게 무엇을 상담하고 싶은지, 직접 가서 들어보도록 하죠.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '축제가 끝난 뒤의 거리을 홀로 걸으며, ',
      me.get_colored_name(),
      '은(는) 가끔 멈춰 서서 욱신거리는 손가락 마디를 주무르며 비틀비틀 트레센으로 돌아왔다.',
    ]);
    await era.printAndWait(
      '아직 남아있는 축제 분위기와 여전히 열정적인 상점가 이웃들에게 휩쓸려, 손에 들린 물건들이 또다시 한도를 초과해버렸다.',
    );
    await era.printAndWait([
      '만약 ',
      urara.get_colored_name(),
      '가 있었다면 좋았을 텐데. 짐의 무게는 변함없거나 오히려 늘었겠지만, 적어도 돌아오는 길의 기분만큼은 훨씬 나았을 것이다.',
    ]);
    await era.printAndWait([
      '어쩔 수 없이 굳은 손을 비비며, ',
      me.get_colored_name(),
      '은(는) 트레이닝실의 문을 열었다. 하지만 상상했던 정적은 찾아오지 않았다.',
    ]);
    await era.printAndWait(
      '먼저 온 누군가가 이미 실내의 난로와 조명을 켜 두었고, 며칠 전 미처 치우지 못한 크리스마스 장식들이 반짝이고 있었다.',
    );
    await era.printAndWait(
      '복슬복슬한 겨울옷을 입은 분홍색 소동물이 따스한 불빛 아래서 즐겁게 방을 정리하고 있었다.',
    );
    await era.printAndWait([
      '그리고 문을 열고 들어오는 ',
      me.get_colored_name(),
      '을(를) 본 작은 ',
      urara.get_uma_sex_title(),
      '는 소파에서 가볍게 일어나, ',
      urara.sex,
      '의 트레이너를 향해 벚꽃색 눈동자를 깜빡였다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 상점가에 다녀왔구나! 얼른 들어와, 밖은 아직 많이 춥다고!',
    ]);
    await era.printAndWait(
      '예상치 못한 기쁨이었다. 방금 전까지만 해도 생각하던 담당이 다음 순간 거짓말처럼 눈앞에 나타난 것이다.',
    );

    era.printButton('「어……응!」', 1);
    await era.input();

    await era.printAndWait([
      '달려와 짐 정리를 도와주는 작은 ',
      urara.get_uma_sex_title(),
      '에게 반응하면서도, ',
      me.get_colored_name(),
      '은(는) 무언가 위화감을 느꼈다.',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '가 트레이닝실을 청소하러 오는 것은 놀라운 일이 아니지만, 얌전히 누군가를 기다리기보다는 차라리 직접 찾아가는 것을 선호하는 ',
      urara.sex,
      '가 아닌가.',
    ]);
    await era.printAndWait([
      '방에 들어오기 전부터 탁자 위에 놓여 있던 음료와 산처럼 쌓인 쿠키를 보니, 이 꼬마 ',
      urara.get_uma_sex_title(),
      '는 정말로 오로지 ',
      me.get_colored_name(),
      '만을 기다리고 있었던 모양이다.',
    ]);
    await era.printAndWait([
      '설마 ',
      urara.sex,
      '도 ',
      me.get_colored_name(),
      '과(와) 크리스마스를 보내고 싶었던 걸까? 하지만 ',
      urara.get_colored_name(),
      '가 원했다면 분명 당일에 찾아왔을 텐데, 대체 무엇을 준비한 것일까?',
    ]);
    await urara.say_and_wait([
      callname,
      ', 뭘 그렇게 멍하니 있어! 방 정리 다 끝났으니까 얼른 앉아!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 생각을 끊어내며, 작은 ',
      urara.get_uma_sex_title(),
      '는 멍청히 서 있는 손님을 의자에 앉히고 탁자 위의 쿠키 산을 ',
      me.get_colored_name(),
      '의 앞으로 밀어주었다.',
    ]);
    await era.printAndWait(
      '눈앞의 기묘한 모양을 한 쿠키들은 최소한의 형태만 유지하고 있었지만, 시중의 세일 품목에서는 느낄 수 없는 자연스러운 향기를 풍기고 있었다.',
    );

    era.printButton('「음…… 이건?」', 1);
    await era.input();

    await urara.say_and_wait([
      '이건 토끼! 이건 고양이! 이건 당근! 이건…… ',
      sys_get_colored_callname(52, 61),
      '이랑 ',
      sys_get_colored_callname(52, 30),
      '? 됐어, 그런 건 중요하지 않아!',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '의 중의적인 질문에 대해, ',
      urara.get_colored_name(),
      '는 잠시 생각하더니 좀 더 구체적인 질문부터 대답하기로 결정했다.',
    ]);
    await era.printAndWait([
      '어쩐지 굉장한 것들이 섞여 있는 듯하지만, ',
      urara.get_colored_name(),
      '의 말대로 그것이 핵심은 아니었다.',
    ]);
    await era.printAndWait([
      '담당마의 벚꽃빛 눈동자가 기대감으로 반짝이는 가운데, ',
      me.get_colored_name(),
      '은(는) 접시에서 모양이 그나마 괜찮은 쿠키 하나를 집어 입에 넣었다.',
    ]);
    await urara.say_and_wait([
      '헤헤~ 이거 전부 내가 만든 거야! 다른 사람들 몫은 이미 다 나눠줬으니까, 이건 전부 ',
      callname,
      ' 거야!',
    ]);
    await urara.say_and_wait([
      callname,
      ', 우라라가 만든 쿠키 맛있어? 어때?',
    ]);
    await era.printAndWait([
      '우유 향이 감도는 달콤함이 혀끝에 고르게 퍼지자, 자신도 모르게 ',
      me.get_colored_name(),
      '은(는) 다음 쿠키로 손을 뻗었다.',
    ]);
    await era.printAndWait([
      '이것은 상당히 맛이 좋았다. 비록 모양을 알아보긴 힘들었지만, 쿠키 그 자체로서는 ',
      me.get_colored_name(),
      '이(가) 최근 맛본 어떤 수제 선물에도 뒤지지 않는 수준이었다.',
    ]);
    await era.printAndWait([
      '유일한 문제라면, 상점가 이웃들에게 뒤지지 않는 ',
      urara.get_colored_name(),
      '의 열정 때문인지 양이 너무 많다는 것 정도일까.',
    ]);
    await era.printAndWait([
      '두 번째 쿠키를 가볍게 삼키며, ',
      me.get_colored_name(),
      '은(는) 진지하게 기다리고 있는 작은 ',
      urara.get_uma_sex_title(),
      '에게 반농담 섞인 최고의 찬사를 건넸다.',
    ]);

    era.printButton(
      '「이런 맛을 낼 수 있다면, 우라라는 나중에 분명 좋은 아내가 되겠는걸.」',
      1,
    );
    await era.input();

    if (era.get('relation:52:0') > 150) {
      await urara.say_and_wait(
        '에? 아, 에? 응! 우라라는 나중에 좋은 아내가 될 거야!',
      );
      await urara.say_and_wait([
        ' 그러니까 ',
        callname,
        '도 나중에 좋은 남편이 될 거야! 에헤헤~ 헤헤…… 으……',
      ]);
      await era.printAndWait([
        '부끄러움에 귀를 접으며, 말끝을 흐릴수록 ',
        urara.get_colored_name(),
        '의 가뜩이나 작은 몸이 눈에 띄게 더 움츠러들었다.',
      ]);
      await urara.say_and_wait(
        '잘은 모르지만, 엄마가 그러셨어. 이런 농담을 할 때는 상대방이 진심으로 받아들일 가능성도 생각해야 한다고……?',
      );
      await era.printAndWait([
        '쿠키 산 너머로 긴장과 부끄러움이 역력한 붉은 얼굴을 반쯤 내밀며, ',
        urara.get_colored_name(),
        '는 당황 반 수줍음 반 섞인 목소리로 말했다.',
      ]);
      await era.printAndWait('……정말로 모르는 게 맞는 걸까?');
    } else {
      await urara.say_and_wait(['에? ', callname, '! 그런 말은 하면 안 돼!']);
      await urara.say_and_wait(
        '잘은 모르겠지만, 엄마가 그러셨어. 이런 농담은 함부로 하는 게 아니라고!',
      );
      await era.printAndWait([
        '입으로는 모른다고 하면서도, ',
        urara.get_colored_name(),
        '의 몸은 정직하게 부끄러움으로 붉어진 얼굴을 쿠키 산 뒤로 숨겼다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 설마 아무한테나 이런 말을 하고 다닌 건 아니지? 안 돼! 사람들이 진심으로 믿어버리면 곤란하잖아!',
      ]);
      await era.printAndWait([
        '마치 조신하지 못한 어른을 꾸짖기라도 하듯, 가림막 너머로 삐죽 나온 분홍색 귀 덮개가 ',
        me.get_colored_name(),
        '을(를) 향해 파닥거리며 삿대질을 해댔다.',
      ]);
      await era.printAndWait('……이거 다 알고 있는 거 아니야?');
    }
    era.println();
    await era.printAndWait([
      '잠깐, 방금 말이 헛나온 건가…… 아니! ',
      urara.get_colored_name(),
      '에게 대체 무슨 소리를 한 거야?!',
    ]);
    await era.printAndWait([
      '담당에게서 예상치 못한 충격적인 답변을 듣자, ',
      me.get_colored_name(),
      '은(는) 묘한 기쁨을 느끼는 동시에 자신의 발언에 약간의 자괴감을 느꼈다.',
    ]);
    await era.printAndWait([
      '오늘의 ',
      urara.get_colored_name(),
      '는 평소보다 더 이상한데, 자신까지 이렇게 직설적이고 이상한 농담을 던져 분위기를 싸하게 만들다니.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 자신의 경솔함을 자책하고 있을 때, 탁자 맞은편에 앉아 있던 ',
      urara.get_colored_name(),
      '가 먼저 탁자 위의 쿠키 하나를 집어 들었다.',
    ]);
    await urara.say_and_wait([
      '맞다, ',
      callname,
      '는 왜 트레이너가 된 거야?',
    ]);
    await era.printAndWait([
      '이 타이밍에 왜 그런 화제를 꺼내는지 되묻고 싶었지만, 질문자가 ',
      urara.get_colored_name(),
      '라면 굳이 정답을 서둘러 찾을 필요는 없었다.',
    ]);
    await era.printAndWait([
      '지금 당장 이해되지 않는 일이라도, 나중에는 반드시 그 의도를 알게 될 날이 오기 마련이다. ',
      urara.get_colored_name(),
      '와 지내다 보면 늘 그랬으니까.',
    ]);

    era.printButton(
      '「일단 확인해 두겠는데, 흥미나 열정 같은 뻔한 대답을 듣고 싶은 건 아니지?」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '나는 ',
      callname,
      '의 진심을 의심하지 않아. 하지만 ',
      callname,
      '가 무엇을 얻고 싶은지 알고 싶어!',
    ]);
    await era.printAndWait([
      '꿈이 아니라 욕망을 묻다니, ',
      urara.get_colored_name(),
      '가 원래 이렇게 날카로운 아이였나? 지금의 작은 ',
      urara.get_uma_sex_title(),
      '는 정말 얕볼 수 없었다.',
    ]);
    await era.printAndWait([
      '성장기에 접어든 사춘기 ',
      urara.get_teen_sex_title(),
      '에게 어른의 세속적인 욕망이 가득 담긴 이야기를 들려주어야 한다니, 음……',
    ]);
    await era.printAndWait([
      '생각을 간단히 정리하고 탄식하듯 깊은 숨을 들이마신 뒤, ',
      me.get_colored_name(),
      '은(는) ',
      urara.get_colored_name(),
      '의 맑은 시선 아래에서 천천히 첫 마디를 뱉었다.',
    ]);

    era.drawLine({ content: '이야기 시간' });
    await era.printAndWait(
      '특별할 건 없어. 처음으로 돌아가 보면, 그 사람이 원했던 것은 아주 단순했지. 안정적인 직장, 월급, 혹은 돈?',
    );
    await era.printAndWait([
      me.sex,
      '는 그저 나중에 진로를 선택할 때, 전공 분야 중에서 가장 안정적이고 돈을 많이 버는 직업을 골랐을 뿐이야.',
    ]);
    await era.printAndWait(
      '적어도 당시에는, 혹은 지금도 그럴까? 이 직업은 대중적인 인식에서 매우 훌륭한 것이었고, 그 사람은 마침 약간의 재능이 있었지.',
    );
    await urara.say_and_wait('그렇구나, 집에 돈이 부족해서였어?');
    await era.printAndWait(
      '아니야, 그 사람의 집안은 가난하지 않았고, 생활고나 거대한 외부 압박이 있었던 것도 아니야. 다만……',
    );
    await era.printAndWait(
      '다만 예전에 화려한 쇼윈도를 몇 번이나 지나치면서도, 자신이 갖고 싶은 물건을 단 하나도 살 기회가 없었을 뿐이야. 그게 전부지.',
    );
    await era.printAndWait([
      '그래서, 음…… 결국은 안정감과 만족감이 부족했던 거겠지. ',
      me.sex,
      '는 어쩌면 그것을 빌미로 과거로부터 이어진 불안감을 떨쳐내고 싶었을지도 몰라.',
    ]);
    await urara.say_and_wait('하지만 그 사람은 결국 소원을 이뤘는걸?');
    await era.printAndWait([
      '하지만 그 사람은 야망이 참 부족했어. ',
      me.sex,
      '는 지금 이 자리까지 오기 위해 정말 고생을 많이 했고, 도중에 몇 번이나 포기할 뻔했으니까.',
    ]);
    await era.printAndWait([
      '세 여신님의 보살핌이었을까? 아니면 ',
      me.sex,
      '가 스스로를 포기하지 못할 정도로 겁쟁이였던 걸까?',
    ]);
    await era.printAndWait(
      '결과적으로, 우여곡절 끝에 그 사람은 중앙에 입성하게 되었지. 정말 아슬아슬했다니까.',
    );
    await urara.say_and_wait('그…… 그 사람의 지금 생각은 어때?');
    await era.printAndWait(
      '이 직업은 아주 좋아. 먹고 자는 게 해결되고, 복리후생이나 사회적 지위도 괜찮지. 급여가 들어오는 방식이 좀 묘하긴 하지만 만족하고 있어.',
    );
    await urara.say_and_wait('응응! 그러니까 그 사람도 1착을 따낸 거네!');
    await era.printAndWait([
      '예전 같으면 아니라고 했겠지만, 지금의 ',
      me.sex,
      '는 아마 곧 자신이 원하던 1착을 찾을 수 있을 것 같아——',
    ]);
    era.drawLine();

    await me.say_and_wait(
      '게다가 이건 그 사람에게 지금 특별한 담당이생긴 덕분이기도 하고 말이야.',
      true,
    );
    await era.printAndWait([
      '끝맺음 말을 다 뱉지 못한 채, ',
      me.get_colored_name(),
      '은(는) 쓴웃음을 지으며 과거 이야기를 마쳤다. 고개를 들어보니, 예상했던 혐오, 연민, 불이해……',
    ]);
    await era.printAndWait([
      '그런 것들은 전혀 나타나지 않았다. ',
      urara.get_colored_name(),
      '는 평소의 어떤 감정도 드러내지 않은 채, 그저 아주 진지하게 ',
      me.get_colored_name(),
      '의 이야기를 듣고 있었다.',
    ]);
    await era.printAndWait([
      '하지만 이거 큰일인데. 표정에는 드러나지 않아도 분명 자신의 트레이너가 이렇게나 속 좁고 세속적인 어른이라고 생각하고 있겠지……',
    ]);
    await urara.say_and_wait([
      '응! 우라라는 알 것 같아! ',
      callname,
      '는 정말 산뜻하구나! 마치 경치를 보려고 지구를 정복하러 온 악당 보스 같아!',
    ]);
    await me.say_and_wait(
      '……어? 산뜻하다고?! 악당 보스는 또 뭐야? 우라라, 네 트레이너는 전혀 모르겠는데——',
      true,
    );
    await era.printAndWait([
      '안타깝게도 반복해서 멍청히 서 있는 ',
      me.get_colored_name(),
      '에게 직접적인 해답은 주어지지 않았고, ',
      urara.get_colored_name(),
      '는 그저 즐겁게 웃고 있을 뿐이었다.',
    ]);
    await era.printAndWait(
      '과거 때문에 추해진 어른에게 혐오나 연민, 불이해를 보이지 않고, 그저 소중한 누군가로 인해 느끼는 순수한 즐거움의 미소였다.',
    );
    await urara.say_and_wait([
      '흐흥~ ',
      callname,
      '는 『우라라』를 이해해줌으로써 나를 도와줬고, 오늘 우라라도 『',
      callname,
      '』에 대해 더 많이 알게 됐어!',
    ]);
    await urara.say_and_wait([
      '이제 우라라도 알겠어. 어려운 일들을 어떻게 말해야 ',
      callname,
      '가 알아들을 수 있을지 말이야!',
    ]);
    await era.printAndWait([
      '우마무스메의 해맑은 미소를 보며, ',
      me.get_colored_name(),
      '은(는) 마침내 깨달았다. 쓸데없는 고민이나 하던 어른이 정말 바보 같다는 것을.',
    ]);

    era.printButton(
      '「우라라, 다음에 또 알고 싶은 게 생기면 직접 물어봐. 네 트레이너는 숨기는 거 없으니까.」',
      1,
    );
    await era.input();

    await urara.say_and_wait([
      '하지만 이런 달리기 페이스는 정말 멋져! 마치 ',
      sys_get_colored_callname(52, 30),
      '의 동화책 같아!',
    ]);
    await era.printAndWait([
      '이 아이는 혹시 정말 천사가 아닐까? 담당의 심오한 뜻이 담긴 듯한 말을 음미하며, ',
      me.get_colored_name(),
      '은(는) 접시 위의 다음 쿠키로 손을 뻗었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) 함께 잠시 멈칫하던 ',
      urara.get_colored_name(),
      '는 마침내 용기를 낸 듯 다시 고개를 들어 ',
      me.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 최근에 꿈을 꿨는데 우라라랑 아주 닮았지만 정말 외로워 보이는 ',
      urara.get_uma_sex_title(),
      '를 봤어.',
    ]);
    await urara.say_and_wait([
      '꿈속의 ',
      urara.sex,
      '는 달리고 있지 않았고, 모두와도 거리가 좀 떨어져 있어서 우라라가 가서 말을 걸고 싶었어.',
    ]);
    await urara.say_and_wait([
      '하지만 ',
      urara.sex,
      '의 미소는 정말 슬퍼 보였고, 몇 번이고 나한테서 멀어지다가 결국 완전히 사라져버렸어.',
    ]);
    await urara.say_and_wait([
      '분명 생김새는 똑같은데, 우라라는 슬프면 울 수 있지만 ',
      urara.sex,
      '는 그저 아무 말 없이 웃기만 했어.',
    ]);
    await era.printAndWait([
      '자신의 양손을 내려다보며 얼굴에는 겨우 미소를 띠고 있었지만, ',
      urara.get_colored_name(),
      '의 귀는 이미 축 처져 있었다.',
    ]);
    await urara.say_and_wait([
      '나는 무슨 일이 있어도 ',
      urara.sex,
      '를 계속 혼자 있게 두고 싶지 않은데, ',
      urara.sex,
      '는 그냥 그게 편하다고 생각하는 것 같아……',
    ]);
    await urara.say_and_wait([
      '무력감이 느껴질 때…… ',
      callname,
      '라면 어떻게 할 거야?',
    ]);

    await in_urara.say_as_unknown_and_wait([
      '……정말이지 갑작스러우면서도 핵심을 찌르는 상담이군요. 트레이너 ',
      me.get_adult_sex_title(),
      '의 의견은 어떠신가요?',
    ]);
    era.printButton(
      '「글쎄…… 아무리 힘들더라도, 자신이 원하는 방향으로 나아가야지.」（잔디 적성 상승）',
      1,
    );
    era.printButton(
      '「음…… 현재의 고난을 즐기는 법을 배우는 것도 사실 하나의 행복이야.」（중&장거리 적성 상승）',
      2,
    );
    if ((await era.input()) === 1) {
      await urara.say_and_wait([
        '하지만 그렇게 했다가 ',
        urara.sex,
        '가 더 슬퍼지기라도 하면……',
      ]);
      await me.say_and_wait(
        '어쩌면 우라라는 지금 당장 납득하기 힘들겠지만, 어딘가에서 누군가와 어느 정도 갈등을 빚는 것은 피할 수 없는 일이야.',
      );
      await me.say_and_wait([
        '게다가 우라라는 아직 그 ',
        urara.get_uma_sex_title(),
        '에게 자신의 진심을 전하지도 않았잖아? 아직 시작도 안 했으니 무서워할 필요 없어.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 일상처럼 마음을 가다듬고, 그저 대담하게 앞으로 나아가면 되는 거야.',
      ]);
      await era.printAndWait([
        '접시에서 미소 짓고 있는 듯한 「',
        sys_get_colored_callname(52, 61),
        '」 모양의 쿠키를 골라, ',
        me.get_colored_name(),
        '은(는) 웃으며 그것을 ',
        urara.get_colored_name(),
        '의 작은 입에 쏙 넣어주었다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '의 말과 쿠키를 함께 천천히 곱씹으며 무언가 생각난 듯 ',
        urara.get_colored_name(),
        '의 눈빛도 점차 밝아지기 시작했다——',
      ]);
      edu_marks.gad++;
    } else {
      await urara.say_and_wait('현재의 고난……?');
      await me.say_and_wait(
        '우라라는 처음으로 친구를 사귀는 데 좌절을 겪었지만, 고난을 해결하고 나면 성장은 물론 기쁨도 느끼게 될 거야.',
      );
      await me.say_and_wait(
        '게다가 우라라는 절대로 이대로 포기하고 싶지 않지? 우라라의 목표는 모두가 즐거워지는 거였잖아?',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '가 나아가는 발걸음처럼, 이를 악물면 고민조차 미소를 짓게 만들 수 있어.',
      ]);
      await era.printAndWait([
        '접시에서 볼이 빵빵해 보이는 「',
        sys_get_colored_callname(52, 30),
        '」 모양의 쿠키를 골라, ',
        me.get_colored_name(),
        '은(는) 웃으며 그것을 ',
        urara.get_colored_name(),
        '의 손바닥 위에 올려주었다.',
      ]);
      await era.printAndWait([
        '손바닥 위의 쿠키를 유심히 바라보던 ',
        urara.get_colored_name(),
        '는 무언가 깨달은 듯 웃으며 그것을 입안에 넣었다——',
      ]);
      edu_marks.dad++;
    }
    era.println();
    await era.printAndWait([
      '아무래도 작은 ',
      urara.get_uma_sex_title(),
      '는 마음속으로 이미 답을 정한 모양이다. 만족스러운 듯 ',
      urara.get_colored_name(),
      '에게 고개를 끄덕여주고, ',
      me.get_colored_name(),
      '은(는) 다시 시선을 탁자로 돌렸다.',
    ]);
    await era.printAndWait(
      '시간이 흐름에 따라 두 사람 사이를 가로막고 있던 마음의 장벽 같던 간식 산도 어느덧 사라져 있었다.',
    );
    await era.printAndWait([
      '하지만 그만큼 시간도 꽤 흘렀다. ',
      me.get_colored_name(),
      '과(와) 동시에 이를 깨달은 ',
      urara.get_colored_name(),
      '도 ',
      me.get_colored_name(),
      '의 어깨너머 벽시계로 시선을 던졌다.',
    ]);
    await urara.say_and_wait([callname, ', 이제…… 아! 벌써 시간이 이렇게 됐어!']);
    await era.printAndWait([
      '시계를 보니 음, 어느덧 「기숙사 통금 레이스」 시간이 다가오고 있었다. ',
      me.get_colored_name(),
      '이(가) 허리를 펴자, ',
      urara.get_colored_name(),
      '도 눈치채고 자리에서 일어났다.',
    ]);
    await era.printAndWait([
      '하지만 트레이닝실을 나가 달려가기 직전, ',
      urara.get_colored_name(),
      '는 무언가 아쉬운 듯 헤어지기 전의 마지막 질문을 던졌다.',
    ]);
    await urara.say_and_wait([
      '맞다! ',
      callname,
      ', 이제 곧 새해네! 우리 그때도 오늘 밤처럼 지낼 수 있어?',
    ]);
    await urara.say_and_wait([
      '간식도 많이 준비해올게! 그러니까 그때도 나랑 같이 놀아줄 시간 있어?',
    ]);

    era.printButton('「우라라가 원한다면 언제든지 가능하지!」', 1);
    await era.input();

    await era.printAndWait([
      '두 사람이 함께 시끄럽게 찬바람 속으로 뛰어들기 전, ',
      me.get_colored_name(),
      '은(는) 만족스러운 듯 ',
      urara.get_colored_name(),
      '에게 웃으며 대답했다.',
    ]);
    era.drawLine();
    await in_urara.say_as_unknown_and_wait(
      '하지만 다음번에는 우라라가 준비하는 간식의 양이 조금 더 적당해진다면 완벽할 텐데 말이죠……',
    );
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '당신을 더 깊이 이해할 수 있게 되어 오늘 우라라는 매우 만족한 모양입니다. 인내심 있게 상대해주셔서 다시 한번 감사드립니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하지만 우라라가 안심했으니, 이제는 제 질문에도 하나 대답해주셨으면 하는데요.',
    );

    await in_urara.say_as_unknown_and_wait(
      '그래서, 아까 그 돈이니 뭐니 하던 발언들은 당신의 진심인가요, 아니면 그저 사실일 뿐인가요?',
    );
    era.printButton(
      '「사실이야. 이렇게 말하면 역시 속물적이라 화를 내려나.」（호감도+20）',
      1,
    );
    era.printButton(
      '「적어도 내가 선택한 길이고, 내가 가장 싫어하던…… 어른이 되지는 않았으니까?」（애감도+10）',
      2,
    );
    const ret = await era.input();
    await in_urara.say_as_unknown_and_wait(
      '그런가요? 그럼 우리 관계도 여기까지네요—— 농담이에요. 당신을 그렇게 싫어하지는 않거든요.',
    );
    await in_urara.say_as_unknown_and_wait([
      '네, 『싫어』합니다. 저는 대부분의 인간과 ',
      urara.get_uma_sex_title(),
      '를 싫어해요. 다만 당신을 그렇게까지 싫어하지 않을 뿐이죠. 적어도 당신은 충분히 진실하니까요.',
    ]);
    await in_urara.say_as_unknown_and_wait('……');
    await in_urara.say_as_unknown_and_wait(
      '하아…… 눈치채셨겠죠. 지금 우라라에게서는 신비로운 능력이 나타나고 있습니다.',
    );
    await in_urara.say_as_unknown_and_wait([
      urara.get_uma_sex_title(),
      '에게 얽힌 미스터리는 밤하늘의 별처럼 많고, 어쩌면 세 여신님만이 우라라에게 어떤 가호가 깃들어 있는지 설명하실 수 있을지도 모릅니다.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '저는 근거 없는 기적을 좋아하지 않고, 정체불명의 희망을 믿는 것은 그저 사람을 상처 입힐 뿐이라고 생각합니다.',
    );
    await in_urara.say_as_unknown_and_wait(
      '찬물을 끼얹으려는 게 아니라, 저도 예전에…… 죄송합니다. 숨기려는 게 아니라, 이 황당무계한 이야기를 어디서부터 시작해야 할지 모르겠네요.',
    );
    await in_urara.say_as_unknown_and_wait(
      '하지만 당신이 담당의 미래를 인도하고 있는 것은 사실이니, 부디 자신의 선택에 최대한 책임을 다해 주세요.',
    );
    await in_urara.say_as_unknown_and_wait([
      '그리고 그 외로운 ',
      urara.get_uma_sex_title(),
      '는…… 아니면 제 생각에 괴팍한 ',
      urara.sex,
      '는 혼자 있어도 괜찮을 것 같아요.',
    ]);
    await in_urara.say_as_unknown_and_wait(
      '……익숙해지겠죠. 다 익숙해질 겁니다. 모든 것들이……',
    );
    era.println();
    let wait_flag = false;
    wait_flag =
      get_attr_and_print_in_event(
        52,
        undefined,
        0,
        JSON.parse('{"체력":400}'),
        true,
      ) || wait_flag;
    sys_change_weight(52, 20);
    sys_change_attr_and_print(0, '체력', 400);
    sys_change_weight(0, 20);
    wait_flag =
      sys_like_chara(52, 0, 20 * (ret === 1), true, 10 * (ret === 2)) ||
      wait_flag;
    wait_flag && (await era.waitAnyKey());
  };
};