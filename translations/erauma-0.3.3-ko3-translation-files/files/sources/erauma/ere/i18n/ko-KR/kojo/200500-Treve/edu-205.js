// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.

const era = require('#/era-electron');
const get_random_entry = require('#/utils/list-utils')["get_random_entry"];
module.exports = {
  ...require("#/i18n/ja-JP/kojo/200500-Treve/edu-205"),

  // [번역 완료] before_prix_lat_classical
  before_prix_lat_classical: (() => {
    const title = '『폭군』마저 꺾다……';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `${you.name}은(는) ${treve.name}가 승부복 디자인을 결정하던 때를 선명하게 기억하고 있다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 G1 출전은 다른 ${treve.uma_sex_title}보다 빨랐기에 승부복도 서둘러 제작해야 했지만, ${treve.sex}는 단 한 가지 조건만큼은 절대 양보하지 않았다.`,
      );
      era.printButton(`「정말 이걸로 괜찮겠어?」`, 1);
      await era.input();
      await treve.say_and_wait(`이걸로 좋아!`);
      await era.printAndWait(
        `가슴을 당당히 편 ${treve.sex} 앞에서 ${you.name}은(는) 서류에서 눈을 떼지 못했다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 확고한 말에 디자이너는 몇 가지 시안을 과감히 지웠다.`,
      );
      await era.printAndWait(`파랑, 하양, 빨강의 세 가지 색.`);
      await era.printAndWait(`누구나 아는 프랑스 국기의 삼색이다.`);
      await era.printAndWait(`그 색들을 승부복의 바탕색으로 삼겠다는 것이다.`);
      await era.printAndWait(`그 제안에 고개를 끄덕인 사람은 바로……`);
      await era.printAndWait(`${treve.sex}라면 무엇을 짊어지더라도 해낼 것이다.`);
      await era.printAndWait(
        `대기실에서 마지막 점검을 하던 ${treve.name}는 흠잡을 데 없는 승부복을 살피고, 거울 앞에서 자신의 모습을 진지하게 바라보았다.`,
      );
      await era.printAndWait(
        `오늘 개선문상에는 영국과 독일뿐 아니라 일본의 ${treve.uma_sex_title}도 출전한다.`,
      );
      await era.printAndWait(
        `전 세계가 주목하는 이 레이스에서 ${treve.sex}는 국기를 닮은 색의 승부복을 입었다. 하지만 ${treve.sex}에게 긴장한 기색은 없다.`,
      );
      await era.printAndWait(
        `의자에 앉아 ${treve.sex}가 준비하는 모습을 지켜보던 ${you.name}을(를) 향해 ${treve.name}가 돌아섰다.`,
      );
      await era.printAndWait(
        `그날과 똑같은 코트를 입은 ${you.name}은(는), 승부복을 입은 ${treve.name}의 모습을 당시에는 상상조차 하지 못했다.`,
      );
      await treve.say_and_wait(`${callname}。`);
      era.printButton(`「응.」`, 1);
      await era.input();
      await treve.say_and_wait(
        `여기까지 데려와 줘서 고마워. 여러 G1에 출전하게 해 주고, 누구보다 진지하게 지켜봐 줬잖아. 이렇게 큰 목표인 개선문상 앞에서도.`,
      );
      era.printButton(`「그런 말은 끝나고 해 줘.」`, 1);
      await era.input();
      await era.printAndWait(
        `『그러네』라며 웃는 ${treve.name}에게는 위축된 기색이 없었다.`,
      );
      await era.printAndWait(
        `개선문상 무대를 앞두고 ${you.name}은(는) ${treve.sex}가 지닌 특이한 재능을 깨달았다.`,
      );
      await era.printAndWait(`그것은 신체 능력도, 정신적인 안정감도 아니었다.`);
      await era.printAndWait(`훈련을 통해 얻을 수 있는 것과는 다른, 타고난 재능이다.`);
      await era.printAndWait(`타인의 기대를 짊어지는 데 아무런 부담을 느끼지 않는다.`);
      await era.printAndWait(
        `거대한 그릇처럼 다른 이들의 신뢰와 희망을 끝없이 자신의 힘으로 바꿀 수 있다.`,
      );
      await era.printAndWait(
        `보기 드문 완성도와 드높은 경지에서 비롯된 그 재능은 모든 주저함을 끊어 내고 ${treve.name}를 앞으로 나아가게 한다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 다시 한번 스스로에게 물어야 했다.`,
      );
      await era.printAndWait(`나는 왜 ${treve.sex}의 트레이너인 걸까.`);
      await era.printAndWait(
        `문손잡이에 손을 얹은 ${treve.sex}가 다시 ${you.name}을(를) 돌아보며 그 말을 꺼냈다.`,
      );
      await era.printAndWait(`소원일까, 저주일까.`);
      await era.printAndWait(`모든 것이 약동하도록.`);
      await treve.say_and_wait(`이길게. 당신의 ${treve.name}로서.`);
      era.printButton(`말없이 배웅한다 (호감도 +5)`, 1);
      era.printButton(`「넌 이길 거야.」（好感+15）`, 2);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] crazy_fan_end
  crazy_fan_end: (() => {
    const title = '한 번도 친해지지 못한 이국의 공주';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait([
        '마침내 어느 순간을 경계로 ',
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 연락은 완전히 끊어졌다.',
      ]);
      await era.printAndWait(
        '담당은 트레이너를 만나고 싶어 하지 않았고, 트레이너는 담당을 만날 용기가 없었다.',
      );
      await era.printAndWait([
        '하지만 여러 방면의 영향을 고려했는지, ',
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '의 계약을 해지하라고 요구하는 사람은 나타나지 않았다.',
      ]);
      await era.printAndWait([
        montjeu.get_colored_name(),
        '가 다시 한번 프랑스의 공주를 돌보는 중책을 짊어진 듯했다.',
      ]);
      era.println();
      await era.printAndWait([
        '공적인 일로 우연히 ',
        montjeu.get_colored_name(),
        '와 마주쳤을 때, ',
        you.get_colored_name(),
        '이(가) 받은 것은 비난이 아니라, ',
      ]);
      await era.printAndWait('——동정 어린 시선이었다.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 서둘러 인사만 하고 떠날 수밖에 없었다.',
      ]);
      await era.printAndWait(
        '영문 모를 동정에 불안했기 때문일까, 아니면 두려웠기 때문일까……',
      );
      await era.printAndWait('어느 기자와 공주의 결말과 닮았으면서도 전혀 달랐다.');
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) ',
        treve.get_colored_name(),
        '는 두 번 다시 만나지 않았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] foreign_travel
  foreign_travel: (() => {
    const title = '베르사유의 장미';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `튈르리 정원은 파리 중심부에 위치해 있다. 샹젤리제 거리를 지나 콩코르드 광장과 루브르 미술관 사이에 있는 파리 중심부의 대형 정원으로, 관광 명소일 뿐만 아니라 시민들의 휴식처로도 널리 사랑받고 있다.`,
      );
      await era.printAndWait(
        `휴일 낮이 되자 가족 단위로 찾은 사람들이 많았고, 여기저기서 아이들이 뛰어노는 모습을 볼 수 있었다.`,
      );
      await era.printAndWait(`돌연, ${treve.name}는 완전히 움츠러들었다.`);
      await era.printAndWait(
        `${you.name}이(가) 고개를 들자 인사를 건네는 목소리가 들렸다.`,
      );
      await montjeu.say_and_wait('왔구나, 하지만 내가 볼일이 있는 사람은 저쪽이야.');
      await era.printAndWait(
        `신중함과 지성이 묻어나는 ${montjeu.adult_sex_title}의 목소리.`,
      );
      await era.printAndWait(
        `하지만 반사적으로 가장 먼저 떠오른 기억은, 수없이 들었던 ${treve.sex}의 위닝 라이브 목소리였다.`,
      );
      await era.printAndWait(
        `뒤를 돌아보니 늘씬하고 키 큰 ${treve.uma_sex_title}가 팔짱을 낀 채 이쪽을 바라보고 있었다.`,
      );
      await era.printAndWait(`——전설.`);
      await treve.say_and_wait(`스승님!`);
      await era.printAndWait(`${treve.name}는 눈을 반짝이며 그 인물을 불렀다.`);
      await era.printAndWait(`그리고 ${you.name}은(는) 온몸이 굳어 한 발자국도 움직일 수 없었다.`);
      await era.printAndWait(`경종처럼 빠른 심장 박동이 머릿속을 가득 채웠다.`);
      await montjeu.say_and_wait(`그러면.`);
      await era.printAndWait(
        `${montjeu.sex}는 ${you.name}의 왼손에 들린 종이봉투를 바라보았다.`,
      );
      await era.printAndWait(
        `${you.name}을(를) 나무 그늘 아래 벤치로 초대하고, 쓴웃음을 지으며 특산품을 받아들었다.`,
      );
      await era.printAndWait(
        `${montjeu.name}. 프랑스의 전설적인 ${treve.uma_sex_title}이자 개선문상 우승자 중 한 명.`,
      );
      await montjeu.say_and_wait(
        `트레센에 들어간 뒤에도 나는 휴일마다 ${treve.sex}에게 개인 지도를 했어. 타고난 소양에 기술을 더할 수 있다면 가르쳐 주겠다고 했을 뿐이지만, 순식간에 레이스의 요령을 터득하더군.`,
      );
      era.printButton(`「내 방식이 불만인 건가?」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 대답 대신, 바람에 흔들리는 나무를 지그시 응시했다.`,
      );
      await era.printAndWait(`그 너머로 햇빛을 받아 반짝이는 센강의 푸른 물결이 보였다.`);
      await era.printAndWait(`가을이 되었으니 더위는 이미 느껴지지 않을 터였다.`);
      await era.printAndWait(
        `하지만 ${you.name}의 관자놀이에서 뺨으로, 한 방울의 땀이 존재를 새기듯 천천히 흘러내렸다.`,
      );
      await era.printAndWait(
        `침묵은 ${you.name}이(가) 자신을 바라보는 ${montjeu.name}의 시선을 느낀 순간 끝났다.`,
      );
      await montjeu.say_and_wait(
        `불만이 있는지 없는지는 직접 만나보고 결정하고 싶었어. 상대를 실제로 보지 않으면 알 수 없으니까. 그래서, 지금에서야 답을 정했지.`,
      );
      await era.printAndWait(
        `${montjeu.name}는 그 날카로운 눈동자를 ${you.name}에게 돌리고, 미간을 찌푸리며 말로 추격해 왔다.`,
      );
      await montjeu.say_and_wait(`불만이다.`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}는 말을 이어나갔다.`);
      await montjeu.say_and_wait(
        `지금까지 네 실적은 꽤 설득력이 있었지. 좋은 점은 그대로 살리고, 나쁜 점은 고쳐나간다. ${treve.uma_sex_title}의 소질을 최대한 이끌어내는 방식이 결과적으로 방임주의적인 방식이더라도, 하나의 육성 수단으로서 이해할 수 있었어. 완성도가 높은 ${treve.name}를 담당하니 더더욱 설득력이 있게 되겠지.`,
      );
      await era.printAndWait(`방임주의처럼 보였던 거겠지.`);
      await montjeu.say_and_wait(
        `하지만, 지금 네 태도는 그저 방치하는 것에 불과해. 넌 네가 할 수 있는 일을 포기했고, ${treve.name}의 완성을 향한 노력을 저버렸어. 넌 그저 방관자일 뿐이야.`,
      );
      await era.printAndWait(`그럼, 어떡해야 할까.`);
      await era.printAndWait(
        `지금까지 자신의 기술을 믿고, 담당 ${treve.uma_sex_title}를 신뢰해 왔다. 그렇다면, 완벽한 ${treve.uma_sex_title}를 상대로, 결함 투성이인 자신은 어떻게 다가가야 할까?`,
      );
      await era.printAndWait(`${you.name}은(는) ${treve.sex}에 대해 어떻게 생각해야 할까?`);
      await era.printAndWait(`${montjeu.name}가 이어 말했다.`);
      await montjeu.say_and_wait(
        `개선문상은 높은 벽이야. 아무리 프랑스의 천재라 해도, 그렇게 쉽게 거머쥘 수 있는 건 아니지.`,
      );
      era.printButton(`「지금 상태로는 이길 수 없다는 뜻이야?」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그래.`);
      await era.printAndWait(
        `멀리서 ${treve.name}가 들판을 달리고 있다. 그 뒤를 쫓듯 어느새 늘어난 소년 소녀들도 달리고 있었다.`,
      );
      await era.printAndWait(
        `${treve.sex}가 그렇게 하면 누구라도 매료되겠지.`,
      );
      await era.printAndWait(
        `그리고 그것을 아무런 어려움 없이 힘으로 바꾸어, 천재적인 능력으로 레이스에서 이기겠지.`,
      );
      await era.printAndWait(
        `마음속 중얼거림을 긍정하듯, 왕년의 전설이 입을 열었다.`,
      );
      await montjeu.say_and_wait(
        `${treve.sex}는 이길 거다. 분명 너 없이도 이길 수 있는 강력한 떡잎이지.`,
      );
      era.printButton(`「알고 있어.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그렇기 때문에, 물어봐야만 해.`);
      await era.printAndWait(
        `${montjeu.name}가 일어서서 ${you.name}의 눈을 쏘아보는 시선은 조금 차가웠지만, 결코 깔보는 것은 아니었다.`,
      );
      await era.printAndWait(
        `단점을 노골적으로 지적받는 공평한 무대가, ${you.name}의 심장을 꽉 쥐는 듯했다.`,
      );
      await era.printAndWait(
        `지금까지 외면해 왔던 것을 눈앞에 들이미는 듯한 감각이었다.`,
      );
      await montjeu.say_and_wait(
        `혼자서도 이길 수 있는 ${treve.name}의 곁에, 네가 있는 이유를.`,
      );
      await era.printAndWait(`${treve.name}가 멀리서 손을 흔들며 인사했다.`);
      await era.printAndWait(
        `${montjeu.name}는 부드러운 미소와 함께 ${treve.sex}에게 손을 흔들었지만, ${you.name}은(는) 벤치에서 어깨를 늘어뜨린 채 ${treve.sex}를 응시할 수밖에 없었다.`,
      );
      await montjeu.say_and_wait(
        `개선문 앞에 서기 전에 답을 내야 할 거다, ${you.actual_name}. 그렇지 않으면 넌 ${treve.sex}의 미래를 빼앗게 될 거야.`,
      );
      await era.printAndWait(
        `다시 뛰어나간 ${treve.name}의 뒷모습을 수많은 아이들이 쫓고 있었다.`,
      );
      await era.printAndWait(`그 모습은 점차 아스라이 숲 속으로 사라졌다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] o_s_95_25
  o_s_95_25: (() => {
    const title = '다 써 버리고';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `맑았던 과거와 흐릿한 미래를 떠올리다 보니 금세 목적지에 도착했다.`,
      );
      await era.printAndWait(
        `전에 들렀던 찻집에 들어서자 주인이 ${you.name}을(를) 알아보고 다시 눈썹을 치켜올렸다.`,
      );
      await you.say_as_passer_by_and_wait('찻잎 가게 주인', '응? 이번에는 혼자인가?');
      era.printButton(`「신경 쓰지 말아 줘.」`, 1);
      await era.input();
      await era.printAndWait(
        `가게 안을 한번 둘러본 ${you.name}은(는) ${treve.sex}가 유심히 바라보던 꽃차 진열대로 향했다.`,
      );
      await era.printAndWait(
        `그날처럼 종류가 풍부했다. 사과, 살구, 크랜베리 등 화려한 과일 그림이 줄지어 있었다.`,
      );
      await era.printAndWait(
        `진열대를 따라 L(lemon)까지 오자 ${you.name}의 손가락이 텅 빈 선반을 가리켰다.`,
      );
      await era.printAndWait(`구불구불 이어진 진열대에서 빠져나와 주인을 바라보았다.`);
      era.printButton(`「……레몬 향 제품은 없는 건가?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '아, 이번 철에는 생산량이 좋지 않아서 말이야. 프랑스 브랜드라 원래도 유통량이 적거든. 예약금을 걸어 둔 물량이 조금 있을 정도야.',
      );
      await era.printAndWait(
        `그 말이 맞다. 이 상품을 이 남자의 가게 말고 다른 곳에서 발견한 적이 없었다.`,
      );
      era.printButton(`「다시 들어올 예정은?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '당분간은 없어. 도매상에도 재고가 없다더군.',
      );
      era.printButton(`「그렇군—— 아니, 고마워.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}은(는) 그대로 가게를 나가려다 한마디에 발길을 멈췄다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        `${treve.sex}는 잘 지내나?`,
      );
      await era.printAndWait(`그렇다고도, 아니라고도 답할 수 없었다.`);
      await era.printAndWait(
        `${treve.name}가 G1에서 아깝게 패한 일을 실제로 어떻게 받아들이는지 ${you.name}은(는) 잘 알지 못했다.`,
      );
      await you.say_and_wait('도움도 못 되는 트레이너지.', true);
      await era.printAndWait(`남자는 계산대에서 안절부절못했다.`);
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '자네는 아직 괜찮아. 난 그 애가 어떻게 지내는지가 더 걱정이거든. 동종업계 사람들에게 그 차가 있는지 물어볼게.',
      );
      era.printButton(`「기억하고 있었나?」`, 1);
      await era.input();
      await era.printAndWait(
        `그 차가 ${treve.name}의 취향이라는 사실을 언론에 밝힌 기억은 없다. 하지만 남자는 쓴웃음을 지으며 말했다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        '단골손님이 데려온 손님인데 어떻게 잊겠나.',
      );
      era.printButton(`「정말이지……」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻잎 가게 주인',
        `뭐, 나도 ${treve.sex}의 팬이라는 이유도 있지만……`,
      );
      await era.printAndWait(`남자는 휴대전화 화면을 두드리며 묘한 표정으로 중얼거렸다.`);
      await era.printAndWait(
        `${treve.name}는 많은 사람의 기대를 짊어지고 있다. 자신이 할 수 있는 일을 해 주려 애쓰는 사람도 있다.`,
      );
      await era.printAndWait(`${you.name}은(는) 다시 한번 스스로에게 물어야 했다.`);
      await era.printAndWait(`나는 왜 ${treve.name}의 트레이너인 걸까.`);
      await era.printAndWait(`${you.name}은(는) 앞으로 어떻게 나아가야 할지 알 수 없었다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] palace
  palace: (() => {
    const title = (treve) => `${treve.sex}가 이뤄 낸 아름다운 꿈`;
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(`${you.name}은(는) 무언가 소리를 들었다.`);
      await era.printAndWait(
        `어둠 속에서 눈을 뜨자 낯선, 하지만 완전히 낯설지는 않은 천장이 보였다.`,
      );
      await era.printAndWait(`머리가 멍해 상황을 이해하기 어려웠다.`);
      await era.printAndWait(
        `평소 지내던 곳과는 전혀 다른 장소에 있는 것 같았다.`,
      );
      await era.printAndWait(
        `몽롱한 머리로 허공을 바라보던 중 은은한 향기가 코끝을 스쳤다.`,
      );
      await era.printAndWait(
        `이어서 한 명의 ${treve.teen_sex_title}가 갑자기 시야에 들어왔다.`,
      );
      await era.printAndWait(`부드러운 밤색 머리카락과 맑고 푸른 두 눈동자.`);
      await era.printAndWait(
        `그리고 ${treve.sex}의 얼굴에는 아기를 바라보듯 자애로운 미소가 떠올라 있었다.`,
      );
      await treve.say_and_wait(`Bonjour, 잘 잤어?`);
      await era.printAndWait(`쓰다듬는 듯 다정한 목소리가 남아 있던 졸음을 다시 불러왔다.`);
      await era.printAndWait(
        `상대의 얼굴을 보고서야 ${you.name}은(는) 상황을 이해하고 정신을 차리려 했다.`,
      );
      await era.printAndWait(`그러나 따뜻한 손바닥이 조용히 두 눈을 가렸다.`);
      await treve.say_and_wait(`조금만 더 자. 아직 이르잖아.`);
      era.printButton(`「……아니, 일어나야 해.」`, 1);
      era.printButton(`「너와 함께하는 아침을 즐기고 싶어.」 (연모 +1)`, 2);
      const ret = await era.input();
      await treve.say_and_wait(`후후, 그렇구나. 기뻐.`);
      await era.printAndWait(`눈을 가렸던 손바닥이 걷히자 빛이 시야로 들어왔다.`);
      await era.printAndWait(
        `몸을 일으키자 ${treve.name}는 ${you.name}의 침대에 앉아 미소 짓고 있었다.`,
      );
      await era.printAndWait(
        `어쩐지 아쉬운 기분이 들어 잠깐 생각했지만 이 정도면 충분한지도 모른다. 우선 해야 할 일을 해야 한다.`,
      );
      era.printButton(`「좋은 아침, ${treve.name}.」`, 1);
      await era.input();
      await treve.say_and_wait(`응, ${you.actual_name}!`);
      await era.printAndWait(`${treve.name}는 노래하듯 대답했다.`);
      era.drawLine();
      await era.printAndWait(
        `개선문상 이후 두 사람은 주로 해외 레이스에 출전해 왔다.`,
      );
      await era.printAndWait(
        `정확히는 평소 이상의 실력을 발휘한 결과 해외를 주 무대로 삼게 된 것이다.`,
      );
      await era.printAndWait(
        `찰싹 달라붙는 ${treve.name}를 겨우 떼어 내고 옷을 갈아입은 다음 거실로 향했다.`,
      );
      await era.printAndWait(
        `식탁에는 맛있는 요리가 가득했고 ${treve.name}가 ${you.name}을(를) 기다리고 있었다.`,
      );
      await era.printAndWait(`솔직히 놀랐다. ${treve.name}는 요리까지 잘하는구나.`);
      await era.printAndWait(`자리에 앉아 다양한 요리를 둘러봤다.`);
      await era.printAndWait(
        `참치와 앤초비, 올리브 등으로 만든 푸짐한 샐러드.`,
      );
      await era.printAndWait(`따뜻하고 진한 수프가 그윽한 향기를 풍겼다.`);
      await era.printAndWait(`어느 것 하나 눈길을 끌지 않는 요리가 없었지만 특히 눈에 띄는 것이 하나 있었다.`);
      await era.printAndWait(`두툼한 햄과 치즈를 듬뿍 넣은 따뜻한 샌드위치였다.`);
      await era.printAndWait(
        `${treve.name}에게 『잘 먹겠습니다』라고 말한 뒤 정신없이 먹기 시작했다.`,
      );
      await era.printAndWait(
        `진한 치즈 소스에 햄의 풍미까지. 고급 음식점에서 먹었던 맛과 똑같았다.`,
      );
      await era.printAndWait(`——맛이 완전히 같았다. 이제야 기억이 났다.`);
      era.printButton(`「……이거, 사 온 거야?」`, 1);
      await era.input();
      await treve.say_and_wait(`내가 만든 건데?`);
      await treve.say_and_wait(`네가 맛있게 먹길래 연구해 봤어!`);
      await era.printAndWait(`……이 아이가 천재라는 사실을 잠시 잊고 있었다.`);
      await era.printAndWait(
        `하지만 이만큼 완벽하게 재현할 수 있다니 역시 ${treve.sex}답다.`,
      );
      await treve.say_and_wait(`……${callname}, 상을 줘야 하지 않겠어?`);
      await era.printAndWait(
        `방금 전까지 미소 짓던 ${treve.name}가 다음 순간 입을 벌렸다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 붉은 입안과 혀를 보고 어째서인지 가슴이 철렁했다.`,
      );
      await era.printAndWait(
        `보아서는 안 될 것을 보는 듯한 묘한 죄책감이 들었다.`,
      );
      await treve.say_and_wait(`아……♪`);
      await era.printAndWait(
        `그렇게 ${treve.name}는 귀와 꼬리를 움직이며 기대에 찬 눈으로 ${you.name}을(를) 바라봤다.`,
      );
      await era.printAndWait(`……그러니까 저걸 해 달라는 뜻이다.`);
      await era.printAndWait(
        `잠시 망설였지만 응하지 않으면 ${treve.sex}가 계속 입을 벌리고 있을 게 분명했다.`,
      );
      await era.printAndWait(
        `우선 샌드위치를 조금 떼어 천천히 ${treve.sex}의 입에 넣어 주었다.`,
      );
      await treve.say_and_wait(`음……`);
      await era.printAndWait(
        `${treve.name}는 입술을 다물며 ${you.name}의 손가락 끝을 살짝 머금었다.`,
      );
      await era.printAndWait(`생생한 감촉과 온기가 손끝에서 머릿속까지 전해졌다.`);
      await era.printAndWait(
        `이어서 ${treve.sex}는 무언가 생각하듯 입을 움직이며 한입씩 삼켰다.`,
      );
      await treve.say_and_wait(`……음.`);
      await era.printAndWait(`눈을 감았다가 다시 입을 벌렸다.`);
      await era.printAndWait(`다시 한 번 해 달라는 뜻이라고는 생각하지 못했다.`);
      await era.printAndWait(
        `묘한 죄책감과 보호 본능, 마음속을 자극하는 감정. ${you.name}은(는) 다시 샌드위치를 떼었다.`,
      );
      await era.printAndWait(
        `두 번, 세 번, 네 번 ${treve.sex}의 입으로 가져가는 동안 손끝이 조금씩 젖어 갔다.`,
      );
      await era.printAndWait(
        `이윽고 접시에 있던 프랑스식 샌드위치가 사라지면서 식사는 끝나 갔다.`,
      );
      await treve.say_and_wait(`아, 네 몫까지 먹어 버렸네.`);
      era.printButton(`「괜찮아, 정말 괜찮다니까, 응!?」`, 1);
      await era.input();
      await treve.say_and_wait(`응♪ 고마워♪`);
      await era.printAndWait(
        `${treve.name}는 환한 미소로 감사를 전하며 혀로 입술을 한 번 훑었다.`,
      );
      await era.printAndWait(`${you.name}은(는) 젖은 손가락이 내내 신경 쓰였다.`);
      await era.printAndWait(`${treve.name}는 그 모습을 지켜보며 작게 중얼거렸다.`);
      await treve.say_and_wait(`……버릇이 될 것 같아.`);
      await era.printAndWait(`못 들은 척하자.`);
      era.drawLine();
      await treve.say_and_wait(`……또 밤까지 일하는 거구나.`);
      await era.printAndWait(`양쪽 어깨에 따뜻한 손이 얹혔고 머리 위쪽에서 목소리가 들려왔다.`);
      await era.printAndWait(
        `올려다보자 목욕을 마친 뒤의 온기가 남아 있는 ${treve.name}가 진지한 눈으로 ${you.name}을(를) 내려다보고 있었다.`,
      );
      await era.printAndWait(`이제 시간이 됐다. 방으로 돌아가자.`);
      era.printButton('「오늘은 자야겠어. 잘 자, 트레브.」', 1);
      await era.input();
      await treve.say_and_wait(`앗……`);
      await era.printAndWait(`옷자락이 잡아당겨졌다.`);
      await era.printAndWait(
        `뒤돌아보자 ${treve.name}가 외로워 보이는 얼굴로 ${you.name}의 옷자락을 붙잡고 있었다.`,
      );
      await era.printAndWait(
        `그 모습을 보니 ${you.name}은(는) 작은 동물이 떠올랐다.`,
      );
      era.printButton(`「곧바로 잠들기는 어려울 것 같은데, 밤바람이라도 쐴까?」`, 1);
      await era.input();
      await treve.say_and_wait(`……좋아!`);
      await era.printAndWait(`${treve.name}는 눈을 반짝이며 꼬리를 흔들었다.`);
      await era.printAndWait(
        `이런 반응에도 익숙해졌구나, ${you.name}은(는) 생각하며 ${treve.sex}의 손을 잡았다.`,
      );
      await era.printAndWait(
        `달리는 모습은 아름답고 우아했다. 누구에게나 이상적인 달리기였다.`,
      );
      await era.printAndWait(`성녀처럼 맑고 순수한 ${treve.sex}.`);
      await era.printAndWait(`여신처럼 고귀한 ${treve.sex}.`);
      await era.printAndWait(
        `조금 덜렁대지만 의외로 친근한 ${treve.sex}.`,
      );
      await era.printAndWait(`그리고 남보다 외로움을 많이 타는 ${treve.sex}.`);
      era.printButton(`「네가 곁에 있어 주는 것만으로도——」`, 1);
      await era.input();
      await era.printAndWait(`간결하고 분명하게 마음을 전했다.`);
      await era.printAndWait(`${treve.name}에게 가장 잘 어울리는 말로.`);
      era.printButton(`「몇 번이고 너에게 사랑을 전하고 싶어.」`, 1);
      await era.input();
      await era.printAndWait(`엄청난 말을 해 버린 것 같았다.`);
      await era.printAndWait(
        `${you.name}은(는) 식은땀이 줄줄 흐르는 걸 느꼈지만 이미 입 밖으로 나온 말은 주워 담을 수 없었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 귀와 꼬리를 최대한 쫑긋 세우고 눈을 크게 뜨며 얼굴을 붉혔다.`,
      );
      await era.printAndWait(
        `이윽고 어이가 없다는 듯, 체념한 듯 커다란 한숨을 내쉬었다.`,
      );
      await treve.say_and_wait(
        `……알고 보니 당신도 꽤 욕심쟁이네. 참 제멋대로인 소리를 하는군요.`,
      );
      era.printButton(`「몰랐어? 트레이너는 원래 다 그래.」`, 1);
      await era.input();
      await era.printAndWait(
        `누구나 자신이 담당하는 ${treve.uma_sex_title}를 영웅으로 만들고 싶어 하지.`,
      );
      await era.printAndWait(
        `왕관을 손에 넣은 다음 날이면 벌써 새로운 트로피를 찾는다.`,
      );
      await era.printAndWait(
        `트레이너라는 존재는 사실 ${treve.uma_sex_title}보다도 욕심이 많다.`,
      );
      await era.printAndWait(
        `그 말을 듣고 ${treve.name}는 조금 전보다 더 깊은 한숨을 쉬며 두 손을 뻗었다.`,
      );
      await era.printAndWait(
        `조심스럽게 ${you.name}의 양 볼에 손을 얹고 한참 동안 ${you.name}의 눈을 바라봤다.`,
      );
      await treve.say_and_wait(`어쩔 수 없네. 알았어요. 당신 곁에 서 있을게요.`);
      await era.printAndWait(`그렇게 말하며 ${treve.name}는 얼굴을 한층 더 가까이 가져왔다.`);
      await era.printAndWait(
        `눈앞에는 ${treve.sex}의 아름답고 단정한 얼굴이 있었다. 달콤한 향기가 피부의 열기까지 느껴질 만큼 가까워졌다.`,
      );
      await era.printAndWait(
        `그러나 그대로 마주 보던 ${treve.sex}의 눈빛이 갑자기 날카로워졌다.`,
      );
      await treve.say_and_wait(
        `하지만 착각하진 마세요. 당신의 이상에 맞춰 주기만 하진 않을 거예요.`,
      );
      await era.printAndWait(
        `${you.name}을(를) 향한 선전포고였다. 푸른 눈빛이 ${you.name}을(를) 꿰뚫었다.`,
      );
      await treve.say_and_wait(
        `아무에게도 양보하지 않을 거예요. 언제까지나 당신 앞에서 달려 언젠가 당신의 눈에 나만 보이도록 만들겠어요.`,
      );
      await era.printAndWait(`말을 마친 ${treve.name}는 활짝 웃었다.`);
      await era.printAndWait(
        `${treve.sex}가 본래 지닌 천진난만하고 주변까지 즐겁게 만드는 미소였다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 얼굴에 다시 미소가 떠오르자 반짝하고 눈을 깜빡였다.`,
      );
      await treve.say_and_wait(`——내 사랑.`);
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] prix_lat_win_classical
  prix_lat_win_classical: (() => {
    const title = '최강';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `지금껏 들어 본 적 없을 만큼 자신감에 가득 찬 말인데도, ${you.name}에게는 어쩐지 공허하게 들렸다.`,
      );
      await era.printAndWait(
        `멀리서 들려오는 함성은 천둥소리 같아서, 거리가 떨어져 있는데도 귀를 먹먹하게 했다.`,
      );
      await era.printAndWait(
        `${treve.name}의 주행에서 ${you.name}이(가) 고쳐 줄 부분은 거의 없다.`,
      );
      await era.printAndWait(
        `이 보기 드문 재능을 꽃피운 것은 아마 ${montjeu.name}일 것이다.`,
      );
      await era.printAndWait(
        `그리고 그 ${montjeu.name}의 달리기를 떠올리게 하듯이.`,
      );
      await era.printAndWait(
        `선행 전술을 펼치며 무리 앞쪽을 달리는 ${treve.name}가 마지막 직선 주로를 기다리는 순간.`,
      );
      await era.printAndWait(`롱샹의 열기가 최고조에 달한 순간.`);
      await era.printAndWait(
        `그토록 동경했지만 일본이 수십 년 동안 차지하지 못했던 개선문상을 눈앞에 두고, ${you.name}의 가슴속에는 두 감정이 뒤엉켰다.`,
      );
      await era.printAndWait(`하나는 승리에 대한 확신.`);
      await era.printAndWait(
        `${treve.name}는 지금껏 뛰어난 위치 선정으로 승리해 왔다. ${treve.sex}가 가장 잘하는 것은 선행, 특히 무리의 선두에 설 때다.`,
      );
      await era.printAndWait(
        `거기서 마지막 스퍼트를 펼친다면 무패의 ${treve.teen_sex_title}를 따라잡을 ${treve.uma_sex_title}는 없을 것이다.`,
      );
      await era.printAndWait(
        `단언하자면 이 국면까지 왔으니 ${treve.sex}의 승리는 확정적이라는, 그만큼 강한 확신이었다.`,
      );
      await era.printAndWait(`다른 하나는 패배에 대한 공포.`);
      await era.printAndWait(
        `하지만 지금 눈앞을 달리는 ${treve.name}가 패배할 것 같다는 의미가 아니다.`,
      );
      await era.printAndWait(
        `몇 년 전 일본의 그 괴조 앞에 ${montjeu.name}가 좋은 위치를 차지하며 나타났을 때 온몸이 얼어붙던 공포.`,
      );
      await era.printAndWait(
        `${treve.sex}에게는 이길 수 없다는 절망의 기억이 똑같은 모습을 보여 주는 ${treve.name}에게 겹쳐졌다.`,
      );
      await era.printAndWait(`환호성은 아직 멀게 느껴진다.`);
      await era.printAndWait(
        `마지막 직선 주로에서 선두를 달리는 ${
          treve.name
        }가 뒤따르는 ${treve.uma_sex_title}들과의 거리를 서서히 벌렸다.`,
      );
      await era.printAndWait(`롱샹을 가득 메운 응원에 떠밀리듯이.`);
      await era.printAndWait(`저 늠름한 모습에 내가 보탠 것은 과연 있을까.`);
      await era.printAndWait(
        `${you.name}은(는) 울타리를 붙잡고 떨리는 몸을 살짝 내밀어 ${treve.sex}의 옆얼굴을 똑똑히 바라보았다.`,
      );
      await era.printAndWait(
        `땀을 흘리며 무거운 주로의 마지막 100미터를 달리는 ${treve.sex}를 위해 ${you.name}이(가) 할 수 있는 일은 무엇인가.`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`목소리가 나오지 않는다.`);
      await era.printAndWait(
        `${treve.sex}의 승리는 이미 결정됐다. ${you.name}이(가) 해야 할 일은 더 이상 없다.`,
      );
      await era.printAndWait(
        `흥분에 찬 함성이 귀를 울렸고, 그 소리 속에서 ${you.name}은(는) ${treve.name}가 개선문상의 결승선을 통과했다는 사실을 분명히 깨달았다.`,
      );
      era.println();
      await era.printAndWait(`정작 ${you.name}은(는) 그 순간을 보지 못했다.`);
      era.println();
      await era.printAndWait(
        `개선문상 우승 소감을 질문받은 일도, 휴대전화로 밀려든 문자들도, 경기장에서 돌아온 ${treve.name}에게 무슨 말을 했는지도 이제 기억나지 않는다.`,
      );
      await era.printAndWait(
        `하지만 단 하나만은 ${you.name}의 머릿속에 깊이 새겨졌다.`,
      );
      await era.printAndWait(
        `개선문상 뒤 기자회견에서 와인빛 배경판 앞에 트로피를 안고 서 있던 ${treve.name}가 누군가의 질문에 답한 말이었다.`,
      );
      await era.printAndWait(
        `무언가 질문받은 순간, 넋이 나가 있던 ${you.name}의 오른손이 갑자기 붙잡혔다.`,
      );
      await treve.say_and_wait(`내년에도 ${you.sex}와 함께 이길 거야!`);
      await era.printAndWait(`어째서.`);
      await era.printAndWait(`어째서 나인 걸까.`);
      await era.printAndWait(
        `무엇이 이렇게 공허한 나를 ${treve.name}의 곁에 서 있게 하는 걸까.`,
      );
      await era.printAndWait(
        `카메라 플래시의 새하얀 빛이 눈부셨다. 피로에 지친 눈에는 아무것도 들어오지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] prix_lat_win_senior
  prix_lat_win_senior: (() => {
    const title = '정상을 향해 다시 한번 승리를';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(`청명한 가을 하늘이 롱샹의 바로 위로 끝없이 펼쳐져 있었다.`);
      await era.printAndWait(
        `전 세계 최고봉의 ${treve.uma_sex_title}들을 맞이하는 이 레이스에 걸맞은 날씨라 할 수 있을 것이다.`,
      );
      await era.printAndWait(`평소 입던 코트를 걸치고 오긴 했지만, 조금 더웠다.`);
      await era.printAndWait(`관중석 맨 앞줄에서 펜스를 쥐는 것도 이번이 두 번째다.`);
      await era.printAndWait(
        `눈 깜짝할 사이 시간이 지나간 것 같지만 다시 이곳에 서기까지 겪었던 일들은 두 사람에게 모두 필요한 과정이었다.`,
      );
      await era.printAndWait(`그 일들의 무게는 전례가 없을 정도였다.`);
      await era.printAndWait(
        `그리고, 그것이 ${you.name}이(가) 이곳에 있어야 할 이유가 되어 이 순간을 지탱하고 있었다.`,
      );
      await montjeu.say_and_wait(`생각보다 빠르군.`);
      await era.printAndWait(`구무원 옆에 서 있던 인물이 ${you.name}을(를) 향해 미소를 지었다.`);
      await era.printAndWait(
        `${you.name}은(는) 마침내 ${montjeu.name}에게 그때의 대답을 보여줄 수 있겠다고 생각했다.`,
      );
      await era.printAndWait(
        `두 사람은 나란히 게이트에 들어서는 ${treve.name}를 바라보았다.`,
      );
      await montjeu.say_and_wait(`전술은?`);
      era.printButton(`「특별할 건 없어.」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `……미친 건가? 누구보다 잘 아는 건 너잖아. 네가 ${treve.sex}의 특성을 이해하고 방해를 끊임없이 돌파해 왔지? 그걸 바탕으로 쓸 수 있는 대책은 뭐든 다 써야 하는 거 아닌가?`,
      );
      await era.printAndWait(
        `${montjeu.name}를 모방한 ${treve.sex}의 주법은, 쉽게 바꾸기 어려웠다.`,
      );
      await era.printAndWait(
        `이미, ${
          treve.name
        }를 상대하는 방법을 전 세계의 ${treve.uma_sex_title}들이 익혀 가고 있다는 사실을 알고 있었다.`,
      );
      await era.printAndWait(
        `그럼에도, ${treve.sex}에게 줄 수 있는 것은 아무것도 없었다.`,
      );
      era.printButton(`「그렇다 해도, ${treve.sex}를 반드시 이기게 할 거야.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`……`);
      await era.printAndWait(
        `두 번째 개선문상. 복잡한 기복과 깊은 잔디, 2400미터의 무대.`,
      );
      await era.printAndWait(
        `굉음과 함께 달리는 ${treve.couple_title}와 관중들의 뜨거운 성원. 그 속에는 프랑스를 짊어질 ${treve.name}에 대한 기대도 적지 않았다.`,
      );
      await era.printAndWait(
        `올해 들어 한 번도 이기지 못했기에, ${treve.sex}의 쇠퇴를 눈치챈 사람들도 많았다.`,
      );
      await era.printAndWait(
        `하지만, 그것을 눈치챘다 해도 염원하는 사람들을 위해 결코 멈출 수 없었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 이 세상에서 가장 긴 2분 반의 여정에 올랐다.`,
      );
      await era.printAndWait(
        `불로뉴 숲을 빠져나가는 ${treve.couple_title}를 보며 팔짱을 꼈다. ${montjeu.name}는 허리를 꼿꼿이 세우고 주시했다.`,
      );
      await montjeu.say_and_wait(
        `……전략이 파훼된 건 알고 있겠지. 그렇다 해도, 선행 작전을 쓰지 않으면 ${treve.sex}의 승부는 성립조차 하지 않아.`,
      );
      era.printButton(`「힘으로 밀고 나간다면?」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `그건 불가능해. 안 그래도 경쟁이 치열한 데다, 이번엔 전년도 패자라는 타이틀까지 짊어지고 있어. 지금의 ${treve.name}는 아마 완전히 표적이 되었을 거다.`,
      );
      await era.printAndWait(
        `실제로, 선두 그룹에 섞여 들어가는 데에는 성공했지만, ${treve.name}가 앞으로 나아갈 수 있는 코스는 전부 가로막혀 있었다.`,
      );
      await era.printAndWait(`확실히 봉쇄당했다——최종 직선 코스에 진입하기 전까지는.`);
      await era.printAndWait(`코너를 돌아, 레이스는 중반에 접어들었다.`);
      await era.printAndWait(
        `평소라면 선두 그룹 앞에서 페이스를 굳혔겠지만, ${treve.name}는 후방으로 밀려난 형태로 그룹을 쫓고 있었다.`,
      );
      era.printButton(`「${montjeu.name}。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`何？`);
      era.printButton(`「당신은 왜 선행에 능하지?」`, 1);
      await era.input();
      await era.printAndWait(
        `시선이 향한 곳, ${treve.sex}는 그룹이 잠시 뭉친 채 이어지는 레이스를 바라보며 나지막이 말했다.`,
      );
      await montjeu.say_and_wait(
        `내 체력 안배나 각질에 맞았던 것도 있지만…… 그렇지, 가장 큰 이유는 나한테 맞는 위치에 섰기 때문이라고 생각해. 난 인내심이 많은 타입이 아니라서, 마지막 직선까지 기다려야 하는 승부와는 잘 맞지 않았거든.`,
      );
      await era.printAndWait(`${montjeu.name}는 덤덤하게 전방을 응시했다.`);
      era.printButton(`설명한다`, 1);
      await era.input();
      await you.say_and_wait(
        `레이스에서는 심리적인 압박감이 상당하지. ${treve.name}는 정신력이 강한 편이지만 인내심이 많다고 하긴 어려워. 그러니까 ${treve.sex}는 줄곧 선행을 고수했던 거야.`,
      );
      await montjeu.say_and_wait(`……줄곧, 그랬군.`);
      await era.printAndWait(`${montjeu.name}는 무언가를 깨달은 듯했다.`);
      await era.printAndWait(
        `그것을 할 기회는 언제나 있었다. 하지만 마지막 순간까지, 확고한 이유를 찾아 결심을 내리지 못했다.`,
      );
      await era.printAndWait(
        `그렇기 때문에 첫 번째 개선문상에서도 제안하지 않았고, 올해 열린 G1에서도 그 전술을 쓰지 않았다.`,
      );
      await era.printAndWait(`하지만, 지금이라면. 지금이야말로 결단을 내릴 때였다.`);
      await era.printAndWait(`펄스 스트레이트(False Straight)를 빠져나와 최후의 직선으로 향한다.`);
      await era.printAndWait(
        `${treve.name}는 집중 견제를 받는 모양새로, 아직까지도 포위망에 갇혀 있었다.`,
      );
      await era.printAndWait(`펜스 밖으로 몸을 내밀었다.`);
      era.printButton(`「${treve.name}！！」`, 1);
      await era.input();
      await era.printAndWait(`${treve.name}가 ${you.name} 쪽을 살짝 쳐다보았다.`);
      await era.printAndWait(
        `대기실에서의 기억, ${you.name}의 작전은 이미 전달되었다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.sex}가 주저하지 않도록, 정면에서 ${treve.sex}의 눈을 응시하며 전했다.`,
      );
      await era.printAndWait(
        `승패를 떠나, ${you.name}은(는) ${
          treve.name
        }라는 ${treve.uma_sex_title}가 자신의 꿈을 이루길 바랐다.`,
      );
      era.printButton(`「보여줘.」`, 1);
      await era.input();
      await era.printAndWait(
        `발끝으로 지면을 박차는 ${treve.sex}, 삼색의 승부복을 입은 ${treve.sex}가 ${you.name}에게 손가락을 뻗었다.`,
      );
      await treve.say_and_wait(`——${you.actual_name}를 위해서요.`);
      await era.printAndWait(
        `${treve.sex}는 ${you.name}이(가) 자신에게 맡긴 기대를 짊어지고, 어디까지라도 달려갈 것이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 만약 단 하나의 불안 요소가 남아있다면 그것은 ${treve.sex}가 느낄 압박감이라는 것을 알고 있었다.`,
      );
      await era.printAndWait(
        `그렇기 때문에 완벽한 상태로 ${treve.sex}를 내보낸 것이다.`,
      );
      await era.printAndWait(
        `선행 전략은 ${treve.name} 자신이 원했던 것이지만, 옆에서 지켜본 ${you.name}은(는) ${treve.sex}의 각력은 어떤 전법이든 소화해낼 수 있을 만큼 막강하다는 것을 알고 있었다.`,
      );
      await era.printAndWait(
        `그렇기 때문에, ${you.name}은(는) 이것을 ${treve.sex}에게 맡겼다.`,
      );
      await era.printAndWait(
        `${
          treve.name
        }는 포위망 앞쪽의 ${treve.uma_sex_title}들이 있는 곳에서 잠깐 속도를 늦추고 뒤로 물러섰다. 최종 직선이라는 승부처의 예상치 못한 행동에 상대들은 놀라 뒤를 돌아보았다.`,
      );
      await era.printAndWait(
        `하지만 ${
          treve.name
        }는 이미 그곳에 없었다. 다른 ${treve.uma_sex_title}들을 피해 코스의 가장 바깥쪽으로 빠져나간 것이다.`,
      );
      await era.printAndWait(
        `그리고, 움직임이 봉쇄당해 비축해 두었던 체력을 순식간에 폭발시켰다.`,
      );
      await era.printAndWait(
        `막판의 집중력은 예리하게 벼린 칼끝처럼 선두를 꿰뚫었다.`,
      );
      await era.printAndWait(`${treve.name}가 맨 바깥쪽에서 단숨에 치고 올라왔다.`);
      await era.printAndWait(
        `지금까지의 주법과는 완전히 다른 전술에 관중들의 웅성거림은 엄청난 환호성으로 바뀌었다.`,
      );
      await montjeu.say_and_wait(`선입……!?`);
      await era.printAndWait(
        `이것은 ${treve.name}의 유연성을 바탕으로 언제든 구사할 수 있는 전법이었다.`,
      );
      await era.printAndWait(
        `하지만, 견제망을 피할 것을 고려한다면, 잠시 후퇴했다가 다시 시동을 거는 우회 방법을 택할 수밖에 없었다.`,
      );
      await era.printAndWait(`최후의 직선에서 틈을 보이는 상대의 공포심을 이용한 것이다.`);
      await era.printAndWait(`${treve.name}는 순식간에 선행 그룹을 뛰어넘었다.`);
      await era.printAndWait(
        `게다가 전혀 예측할 수 없었던, ${treve.sex}의 선행 이외의 전술이라는 기습은 도망치려던 상대에게 동요를 불러일으켰다.`,
      );
      await era.printAndWait(
        `완전히 봉쇄했다고 생각했던 상대가, 마지막의 마지막에 습격해 온 것이다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 ${montjeu.name}의 그림자마저 추월하며 코스 앞으로 질주했다.`,
      );
      await era.printAndWait(
        `파란 망토가 휘날렸고, ${you.name}은(는) ${treve.sex}의 뒷모습을 응시했다.`,
      );
      await era.printAndWait(
        `${treve.name}는 모든 예상을 뛰어넘고, 모든 과거를 던져버릴 것이다.`,
      );
      await era.printAndWait(
        `그리고, 태어난 모든 희망을 짊어지고 사람들이 닿을 수 없는 곳을 향해 달려나간다.`,
      );
      await era.printAndWait(`아무리 많은 소망을 잊어버린다 해도, 어딘가에서는 반드시 기억하고 있을 것이다.`);
      await era.printAndWait(`이 세상을 바꿀 수 있는 빛나는 누군가를 끊임없이 갈망해 왔다는 것을.`);
      await era.printAndWait(`그리고 마침내, ${treve.sex}와 만났다.`);
      await era.printAndWait(`${treve.name}의 외침이 들려온다.`);
      await era.printAndWait(
        `${
          treve.sex
        }가 남은 힘을 모두 짜내어 결승선까지 100미터도 남지 않은 순간 선두의 ${treve.uma_sex_title}를 추월했다. 마치 시간이 멈춘 것 같았다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 두 사람이 지금까지 해 온 모든 노력이 결실을 맺었다고 느꼈다.`,
      );
      await era.printAndWait(
        `결승선을 넘는 마지막 발소리는 그 무엇보다 크게 이 무대에 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `프랑스 레이스 역사상 36년 만의 위업. 개선문상 연패를 달성한 것은 아무도 줍지 않은 ${treve.uma_sex_title}와 아무도 줍지 않은 이국의 트레이너였다.`,
      );
      await era.printAndWait(
        `조용히 숨을 들이쉬고 내쉬었다. 잔디의 내음이 가득해, 마음을 적시는 것 같았다.`,
      );
      await era.printAndWait(
        `이곳에 있지 않았다면 볼 수 없었을 것들이 확실히 있었다.`,
      );
      await era.printAndWait(
        `이 순간을 위해, ${you.name}은(는) 이 직업을 계속해 오길 정말 잘했다고 생각했다.`,
      );
      await era.printAndWait(`우레와 같은 갈채와 축복 속에서.`);
      await montjeu.say_and_wait(`고개를 들어.`);
      await era.printAndWait(
        `${montjeu.name}의 말대로 시선을 위로 향하자, 어느새 그곳에 서 있는 ${treve.name}와 눈이 마주쳤다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 거칠게 숨을 몰아쉬며 땀을 흘리고 있었다————가볍게 호흡을 가다듬은 뒤, ${you.name}을(를) 향해 오른손을 뻗었다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 순간 ${treve.sex}의 의도를 몰라 당황했음에도, ${treve.name}는 개의치 않고 펜스 밖으로 몸을 쑥 내밀었다.`,
      );
      await era.printAndWait(
        `멍하니 있는 ${you.name} 앞에서, ${treve.name}는 장난꾸러기처럼 미소 짓더니, ${you.name}의 손을 잡고 펜스 너머로 끌어당겼다.`,
      );
      await treve.say_and_wait(`자, 어서요!`);
      era.printButton(`「노인 공경 좀 해달라고.」`, 1);
      await era.input();
      await treve.say_and_wait(
        `다음은 3연패예요, 지체할 시간 없어요! 그리고 저와 사귀어 주세요!`,
      );
      await era.printAndWait(
        `${you.name}은(는) 흩어진 과거를 뒤로 한 채, 눈에 깊이 새겨진 ${treve.sex}의 모습을 떠올렸다.`,
      );
      await era.printAndWait(`마지막 직선 코스, 그것은 모든 것을 떨쳐버릴 듯한 빛이었다.`);
      await era.printAndWait(
        `그리고 언젠가, ${treve.sex}는 사람들에게 그 기록마저 새롭게 칠해버릴 주행을 보여주겠지.`,
      );
      await era.printAndWait(
        `분명 ${you.name}을(를) 상상도 할 수 없는 곳으로 데려가 줄 것이다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 얼굴에 번진 미소를 보며, ${you.name}은(는) 이것이 분명 지금 자신의 전부일 것이라 생각했다.`,
      );
      await era.printAndWait(`가을 하늘은 어디에서나 청명했다.`);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_start
  race_start: (() => {
    const title = '레이스 전';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      const buffer = [
        () =>
          treve.say_and_wait(
            '오늘의 승리는 제가 차지하겠어요. 프랑스의 모두를 위해.',
          ),
        () => treve.say_and_wait('영광은 이미 제 손안에 있어요.'),
        () => treve.say_and_wait('가슴 뛰는 승부를 펼쳐봐요!'),
      ];
      if (era.get('love:205') >= 50) {
        buffer.push(() =>
          treve.say_and_wait(
            `오늘의 승리는 제가 차지하겠어요. ${you.actual_name}을(를) 위해.`,
          ),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] race_win
  race_win: (() => {
    const title = '레이스 승리';
    /** @param {CharaTalk} treve トレヴ */
    const f = async (treve) => {
      const buffer = [
        () => treve.say_and_wait('골인! 제가 이겼어요~'),
        () => treve.say_and_wait('Merci beaucoup! (감사합니다!)'),
        () => treve.say_and_wait('여러분, 축복해주셔서 감사합니다!'),
        () =>
          treve.say_and_wait(
            '이 모든 게 제가 이런 영광을 누릴 수 있는 이유랍니다, 여러분께 최고의 선물을 바치게 해주세요.',
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_47_33
  we_47_33: (() => {
    const title = '먼 곳을 향해';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `콧노래를 흥얼거리며, 가을 햇살이 은은한 온기를 남기는 날에 활기찬 찻집을 찾았다.`,
      );
      await era.printAndWait(
        `어쨌든 상대는 ${treve.name}의 스승이니 빈손으로 찾아가기도 멋쩍었다.`,
      );
      await era.printAndWait(`바구니에는 자신에게 주려고 산 찻캔이 들어 있었다.`);
      await era.printAndWait(
        `그곳에서 살짝 시선을 올리자, 오버사이즈 코트를 입은 ${treve.name}가 자세히 상품을 바라보고 있었다.`,
      );
      await era.printAndWait(
        `여러 찻잎의 향을 확인하고 있는 ${treve.sex}에게, ${you.name}은(는) 슬며시 다가갔다.`,
      );
      era.printButton(`「……트레이닝실에 두는 홍차 찻잎이 얼마 안 남았는데, 좀 골라 줄래?」`, 1);
      await era.input();
      await era.printAndWait(
        `${treve.name}는 귀를 쫑긋 세우며 기쁜 듯 꼬리를 흔들고 품평을 시작했다.`,
      );
      await era.printAndWait(
        `자극이 적은 찻잎이 좋겠다고 생각하며 입구 쪽의 캔을 바구니에 담으려 하자, 이미 그 안에는 레몬 향이 나는 찻잎이 들어 있었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 유독 신경이 쓰이는지 생글생글 웃으며 ${you.name}을(를) 바라보았다.`,
      );
      era.printButton(`「레몬이야?」`, 1);
      await era.input();
      await era.printAndWait(
        `딱히 불만을 표시하려던 건 아니었지만, ${treve.name}는 갑자기 볼을 부풀리며 항의했다.`,
      );
      await treve.say_and_wait(`${callname}, 무슨 불만이라도 있으신가요?`);
      era.printButton(`「불만이 있는 건 아냐…… 예전에 산 적이 있어서. 좋아하는 맛이거든.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) 찻캔 세 개가 든 바구니를 계산대에 올려놓자, 낯익은 점원이 깜짝 놀란 표정을 지었다.`,
      );
      await era.printAndWait(`그는 손가락으로 계산기를 두드리며 눈썹을 치켜올렸다.`);
      await you.say_as_passer_by_and_wait(
        '찻집 주인',
        `오랜만이네요. 그 ${treve.child_sex_title}가 새로 담당하시게 된 우마무스메인가요?`,
      );
      await era.printAndWait(`주인은 ${you.name}의 어깨너머로 뒤를 바라보았다.`);
      await era.printAndWait(
        `지금도 홍차를 구경하고 있는 ${treve.name}는 여전히 무패 행진 중인데다 오크스에서 우승했기에 팬이 제법 늘어난 상태였다.`,
      );
      await era.printAndWait(
        `하지만 대중의 시선을 한 몸에 받는 인기 우마무스메라고 하기에는 아직 조금 무리가 있었다.`,
      );
      await era.printAndWait(`아는 사람만 아는, 딱 그 정도의 느낌이었다.`);
      await era.printAndWait(
        `홍차를 포장하던 주인은 무언가를 눈치챈 듯 고개를 들었다.`,
      );
      era.printButton(`「무슨 일 있나요?」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '찻집 주인',
        `${treve.sex}도 꽤 인기 있는 거 아닌가요?`,
      );
      await era.printAndWait(
        `${you.name}이(가) 뒤를 돌아보니, 두 명의 젊은 여성이 ${treve.name}와 악수를 나누고 있었다.`,
      );
      await era.printAndWait(
        `두 사람 모두 ${treve.sex}의 팬인 듯했고, 밝게 응대해 주는 동경의 ${treve.uma_sex_title}에게 푹 빠진 모습이었다.`,
      );
      await era.printAndWait(
        `G1에서 우승하기 전부터 눈치채고는 있었지만, ${treve.name}에게는 독특한 매력이 있었다.`,
      );
      await era.printAndWait(
        `투명한 귀여움을 뿜어내는 ${treve.sex}에게 매료된 사람은 트레센 내에서도 적지 않았다.`,
      );
      await era.printAndWait(
        `팬이 아직 적었을 때부터 수많은 사람들이 ${treve.sex}를 열광적으로 지지해 주었다.`,
      );
      await era.printAndWait(`그런 생각을 하는 사이, 종이 가방 두 개가 계산대 위에 놓였다.`);
      await era.printAndWait(
        `지갑에서 지폐 몇 장을 꺼내 주인에게 건네자, ${treve.name}가 ${you.name}의 곁으로 돌아왔다.`,
      );
      await you.say_as_passer_by_and_wait(
        '찻집 주인',
        '여기 거스름돈입니다. 앞으로도 잘 부탁드립니다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 개인적으로 쓸 찻잎이 든 봉투를 ${treve.sex}에게 건네며 가게를 나섰다.`,
      );
      await era.printAndWait(
        `일정하게 늘어선 가로수들이 조금씩 잎을 떨어뜨리기 시작했지만, 아직은 황금빛 가을 풍경을 즐길 수 있을 것 같았다.`,
      );
      await era.printAndWait(
        `대로를 걷다 보니, 옆에 있던 ${treve.teen_sex_title}가 뒤를 돌아보았다.`,
      );
      await era.printAndWait(`그 시선 끝에는 방금 전 두 여성의 뒷모습이 보였다.`);
      era.printButton(`「방금 그 팬들이야?」`, 1);
      await era.input();
      await treve.say_and_wait(
        `네…… ${treve.couple_title}께서 줄곧 제 레이스를 지켜보고 계셨대요.`,
      );
      await treve.say_and_wait(`정말 기뻐요.`);
      await era.printAndWait(`${treve.name}가 수줍게 말했다.`);
      await era.printAndWait(
        `그러면서도 ${treve.sex}는 진지한 눈빛으로, 자신의 활약을 기대해 주는 두 팬을 보며 감회에 젖어 있었다.`,
      );
      await treve.say_and_wait(
        `여기에 오기 전까지 정말 많은 분의 도움을 받았어요. 스승님도 그중 한 분이고요. 가족과 친구들을 위해 노력하고 싶다는 마음은 지금도 변함없어요.`,
      );
      await treve.say_and_wait(
        `절 응원해 주시는 분들이 점점 늘어난다고 생각하면, 더 많이 달리고 싶고, 더 많이 이기고 싶어져요.`,
      );
      await era.printAndWait(
        `수많은 ${treve.uma_sex_title}들이 대중의 시선에 노출되는 것에 압박감을 느낀다.`,
      );
      await era.printAndWait(
        `${you.name}의 담당 중에서도 G1처럼 주목받는 무대에서 실력을 제대로 발휘하지 못해 괴로워하는 ${treve.uma_sex_title}가 있었다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}는 활약할수록 더 커져만 가는 기대에 조금도 주저하지 않았다.`,
      );
      await era.printAndWait(`그 모든 것을 힘으로 바꾸어 꿈을 향해 나아간다.`);
      await era.printAndWait(
        `그리고 그런 ${treve.sex}의 지금 목표는 바로 샹젤리제 거리 끝에 서 있는 거대한 건축물이 상징하는 그 레이스다.`,
      );
      await era.printAndWait(
        `나폴레옹이 세운 개선문. 우뚝 솟아 있는 승리의 상징.`,
      );
      await era.printAndWait(
        `${treve.sex}는 분명 그 건너편에 나타나, 그 이름이 붙은 세계 최고봉의 레이스 무대에서 눈부시게 빛날 것이다.`,
      );
      era.printButton(`「……넌 반드시 이길 거야.」（호감도 +5）`, 1);
      await era.input();
      await era.printAndWait(`${treve.name}가 갑자기 뒤를 돌아보았다.`);
      await era.printAndWait(
        `평소처럼 천진난만한 미소를 짓던 모습과는 달리, ${treve.sex}는 상냥하게——하지만 무언가를 호소하듯, 고요한 바다와 같은 미소를 지으며 나지막이 속삭였다.`,
      );
      await treve.say_and_wait(`반드시요.`);
      await era.printAndWait(
        `${you.name}은(는) 그것이 단지 자신만을 향한 말이 아닐지도 모른다고 생각했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_95_28
  we_95_28: (() => {
    const title = '정점 아래에서';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `정신을 차려보니 ${you.name}은(는) 이미 샹젤리제 거리를 걷고 있었다.`,
      );
      await era.printAndWait(`동쪽 하늘로 달이 떠오르고, 어둠이 짙어지는 거리에 가로등이 하나둘 켜졌다.`);
      await montjeu.say_and_wait('답은 찾았나?');
      await era.printAndWait(
        `고개를 저었다. 하지만 ${montjeu.name}는 이미 예상했다는 듯 타하지 않고 조용히 말을 이어갔다.`,
      );
      await montjeu.say_and_wait('그렇다면——');
      era.printButton(`「잠깐.」`, 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) ${montjeu.sex}의 눈을 똑바로 응시했다.`);
      await era.printAndWait(
        `몇 년 전이든 반년 전이든, 도저히 정면으로 마주할 수 없었던 ${montjeu.sex}의 눈이었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 이것이 혼자서 해결할 수 있는 문제가 아님을 알고 있었다.`,
      );
      await era.printAndWait(
        `누군가와 마주하고 자신의 한계를 드러내는 것을 늘 두려워해 왔음을, ${you.name}은(는) 서서히 깨닫고 있었다.`,
      );
      era.printButton(`「내 과거 이야기를 들어줬으면 좋겠어.」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 한동안 ${you.name}의 얼굴을 지긋이 바라보았다.`,
      );
      await era.printAndWait(
        `몸을 도려낼 듯한 시선에 도망치고 싶어지기도 했지만, 여기서 버텨내지 못하면 아무것도 시작되지 않는다.`,
      );
      await era.printAndWait(
        `이윽고 ${montjeu.sex}는 두세 걸음 걸어가 ${you.name}을(를) 이끌며 벤치에 앉았다.`,
      );
      await era.printAndWait(`곁에 앉자, ${montjeu.name}가 서두를 꺼냈다.`);
      await montjeu.say_and_wait('내 앞에서 아무리 말을 번지르르하게 해봤자……');
      era.printButton(
        `「만약 그런 날이 온다면, 나도 ${treve.name}에게 똑같이 말할 거야.」`,
        1,
      );
      await era.input();
      await montjeu.say_and_wait('……알겠어.');
      await era.printAndWait(
        `${you.name}은(는) 그렇게 함으로써 자신과 마주하고자 했다.`,
      );
      await era.printAndWait(
        `그것은 누구나 어찌할 수 없는 미숙함을 스스로 해부하는 것과 같았다.`,
      );
      era.printButton(`고통스러운 과거를 회상한다`, 1);
      await era.input();
      await you.say_and_wait(
        `몇년 전, 난 네가 달렸던 개선문상을 가장 앞에서 지켜봤어. 너와 괴조가 이곳에서 사력을 다해 싸우고, 결국 괴조가 추월당하는 모습을 보았을 때…… 아무것도 할 수 없다는 무력감에 휩싸였지.`,
      );
      await era.printAndWait(
        `단도직입적으로 말해, ${montjeu.sex}는 일본의 수많은 트레이너들에게 일종의 트라우마였다.`,
      );
      await era.printAndWait(`넘을 수 없는 거대한 벽이자, 절대적인 전설.`);
      await era.printAndWait(`${montjeu.name}는 아무것도 묻지 않았다.`);
      await montjeu.say_and_wait(`하지만———— 너에게는 ${treve.name}가 있잖아.`);
      await era.printAndWait(
        `${montjeu.name}는 잠시 시선을 밤의 센강으로 돌렸다.`,
      );
      await era.printAndWait(
        `검게 출렁이는 수면 위에는 별 하나 없었고, 보이지 않는 바람이 일으키는 잔잔한 물결 소리만이 고요히 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}는 강인한 ${treve.uma_sex_title}다. ${treve.sex}는 혼자서도 승리할 수 있을 것이다.`,
      );
      await montjeu.say_and_wait(
        `……${treve.sex}가 스스로를 사람들의 기대를 짊어질 수 있는 그릇이라 말했던 걸 기억하나?`,
      );
      era.printButton(`「응.」`, 1);
      await era.input();
      await era.printAndWait(`무한한 강함, 인간을 초월한 재능.`);
      await era.printAndWait(`그것이 있었기에 지금의 ${treve.name}는 강한 것이다.`);
      await montjeu.say_and_wait(
        `${treve.sex}는 압박감을 견디는 힘이 대단하지. 앞으로도 무한한 기대를 짊어지는 것을 ${treve.sex}는 주저하지 않을 거야.`,
      );
      await montjeu.say_and_wait(
        `다만, 만약 그 타고난 성질이 ${treve.sex}의 가치관을 형성한 것이라면…… 너는 어떻게 생각하지?`,
      );
      await era.printAndWait(`${montjeu.name}가 ${you.name}에게로 시선을 돌렸다.`);
      await era.printAndWait(
        `기대란 본래 아주 귀한 것. 끊임없는 노력과 뛰어난 성과를 내야만 타인에게서 얻을 수 있는 것이지, 결코 당연한 게 아니야.`,
      );
      await era.printAndWait(
        `하지만 ${treve.name}에게는 그것이 당연한 일이었다.`,
      );
      await era.printAndWait(
        `${treve.sex}가 스스로 당연하게 여기며 해온 일들, 그 끝없는 기대의 과정 속에서 그 ${treve.teen_sex_title}는 이 세상에서 무엇을 발견했을까.`,
      );
      await era.printAndWait(`가능성과 현상이 머릿속에서 하나로 연결되었다.`);
      era.printButton(`「……기대받지 못하는 것에 대한 두려움인가?」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement.');
      await era.printAndWait(
        `한때 전설이 되어 모든 이의 기대를 한 몸에 받았던 ${treve.uma_sex_title}가 말을 이었다.`,
      );
      await montjeu.say_and_wait(
        `기대에 부응할 필요가 있지. 부응하면 할수록 새로운 기대는 더욱 커져만 가. 만약 ${treve.sex}가 그런 순환 속에 갇혀 있다면, 오직 기대받는 것만이 자신의 가치라고 오해하게 될지도 몰라. 이것이 ${treve.sex}의 근간을 이루는 생각이라면, 섣불리 부정하는 것은 피해야 하지.`,
      );
      era.printButton(`「오직 ${treve.sex}에게 기대를 걸 수밖에 없겠군.」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}가 고개를 끄덕였다.`);
      await montjeu.say_and_wait(
        `그렇게 하기 위해서라도, 나는 너라는 인물에게 기대를 걸어야만 해. 아무런 가치도 없는 사람에게 ${treve.sex}를 온전히 맡길 수는 없으니까.`,
      );
      await era.printAndWait(`${you.name}은(는) 잘 알고 있었다.`);
      await era.printAndWait(`하지만, 도대체 어떻게 해야 한단 말인가?`);
      await era.printAndWait(
        `${montjeu.name}가 자리에서 일어나 긴 머리를 휘날리며 ${you.name}을(를) 내려다보았다.`,
      );
      await era.printAndWait(
        `죄인을 심판하는 신과 같았던 눈빛과는 달리, 그 안에는 옅은 동정심이 섞여 있었다.`,
      );
      await era.printAndWait(
        `그것은 앞으로도 끊임없이 『고통』에 시달려야 할 자를 향한 연민이었을까.`,
      );
      await montjeu.say_and_wait('내 역할은 여기까지야.');
      era.printButton(`「……미안해.」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}에게 좋은 밤이 되기를 바란다는 짤막한 인사를 남기고, ${montjeu.name}는 떠나갔다.`,
      );
      await era.printAndWait(
        `하늘을 올려다보았다. 보름달이 고요히 떠서 ${you.name}을(를) 내려다보고 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] we_95_33
  we_95_33: (() => {
    const title = '단 하나뿐인, 유일한';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, montjeu, you, callname) => {
      await era.printAndWait(
        `그날 이후로 ${treve.name}가 ${you.name}의 곁을 찾지 않는 날이 점점 늘어났다.`,
      );
      await era.printAndWait(`연락도 서서히 끊겨, 최근에는 편지가 왔다는 알림조차 받지 못했다.`);
      await era.printAndWait(`이런 상황에서 ${you.name}은(는)……`);
      era.printButton(`그렇다고 강하게 책망할 자격이 있는 건 아니다.`, 1);
      era.printButton(`가만히 내버려 둘 수는 없다.`, 2);
      const ret = await era.input();
      if (ret === 2) {
        await era.printAndWait(
          `왠지 모르게 ${you.name}은(는) ${treve.name}와 처음 만났을 때의 정경이 떠올랐다.`,
        );
        await era.printAndWait(`이제 움직여야 할 때다.`);
        await era.printAndWait(
          `……해질녘, 유람선이 ${you.name}의 바로 아래 센강을 천천히 지나가고, 건너편으로는 튈르리 정원이 보였다.`,
        );
        await era.printAndWait(`초가을의 바람이 코트 자락을 스치고 지나갔다.`);
        await era.printAndWait(
          `그 자락을 손으로 만지며, ${you.name}은(는) 다시금 떠올려야 할 과거를 되짚어 보았다.`,
        );
        await era.printAndWait(`트레이너가 된 이유.`);
        await era.printAndWait(
          `승리든 패배든 결국 나중에 따라오는 것일 뿐, 트레센의 문을 두드렸을 때 머릿속에 가득했던 것은 분명 훨씬 더 소박한 소망이었으리라.`,
        );
        await era.printAndWait(`그것은 바로……`);
        await treve.say_and_wait(`……${callname}?`);
        await era.printAndWait(`귀에 익은 목소리였다.`);
        await era.printAndWait(
          `뒤를 돌아보니, 처음 만났을 때처럼 코트를 입은 ${treve.name}가 서 있었다.`,
        );
        await treve.say_and_wait(`왜 여기에 있나요?`);
        era.printButton(`「그건——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.sex}는 곧바로 ${you.name}에게서 시선을 돌려 버렸다.`,
        );
        await era.printAndWait(`산처럼 요지부동인 거절의 벽.`);
        await era.printAndWait(
          `${treve.sex}와 제대로 마주하지 못하고 ${treve.sex}를 혼자 남겨두었던 것, 그것이야말로 ${you.name}이(가) 직시해야 할 과거였다.`,
        );
        await era.printAndWait(
          `${you.name}에게는 이제 와서 후회할 틈조차 없었다.`,
        );
        await treve.say_and_wait(`……죄송해요.`);
        await era.printAndWait(
          `곁을 스쳐 지나가며 뛰쳐나가려는 ${treve.sex}를 향해, ${you.name}이(가) 소리쳐 불러 세웠다.`,
        );
        era.printButton(`「${treve.name}.」`, 1);
        await era.input();
        await era.printAndWait(`${you.name}의 앞에서 ${treve.name}가 발걸음을 멈추었다.`);
        await era.printAndWait(
          `하지만 ${treve.sex}는 고개를 돌리지 않은 채, 여전히 ${you.name}에게 등을 돌리고 있었다.`,
        );
        await era.printAndWait(
          `정적 속의 소란함 가운데, ${you.name}은(는) 천천히 입을 열었다.`,
        );
        await era.printAndWait(`통증이 여전히 온몸을 맴돌았다.`);
        era.printButton(`「네가 나를 선택했을 때 했던 말, 기억해?」`, 1);
        await era.input();
        await treve.say_and_wait(`……수많은 말을 했던 것 같은데요.`);
        await you.say_and_wait(
          `너 이랬잖아. 『개선문상을 연패할 ${treve.uma_sex_title}를 담당하게 된다면, 사회인으로서 트레이너님의 평가도 엄청 올라가지 않겠어요?』라고.`,
        );
        await treve.say_and_wait(
          `그건…… 너무 부끄러우니까, 가급적이면 없었던 일로 해 주셨으면 좋겠어요, ${you.actual_name}.`,
        );
        await era.printAndWait(`${treve.sex}는 고개를 조금 숙였다.`);
        era.printButton(`「난 줄곧 몰랐어.」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 강했다. 지금까지의 ${you.name}에게 있어서, ${treve.sex}는 지나치게 과분할 정도로 훌륭한 담당이었다.`,
        );
        await era.printAndWait(
          `마음 한구석에서 생겨난 그 불균형이 결국 마음의 거리를 벌려 놓았던 것이다.`,
        );
        await era.printAndWait(
          `${treve.sex}가 아무리 훌륭한 성적을 거두어도, ${treve.sex}를 위해 함께 기뻐해 주지 못했다.`,
        );
        era.printButton(
          `「넌 언제나 나를 유일한 트레이너로 바라봐 주었는데 말이야.」`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `달리는 기술은 ${montjeu.name}가 가르쳐 준 것일지도 모른다.`,
        );
        await era.printAndWait(
          `그렇다 하더라도, 지금 이 순간 ${treve.sex}의 곁에 서 있는 사람은 바로 ${you.name}(이)었다.`,
        );
        await era.printAndWait(
          `${treve.sex}의 각질을 확인하고 ${treve.sex}의 특성을 이해하며, ${treve.sex}의 레이스를 계속 지켜봐 온 이는 바로 ${you.name}이었다.`,
        );
        await era.printAndWait(`이 자리에 서 있다는 사실 자체가 의미를 지니는 법이다.`);
        await era.printAndWait(
          `이 세상에서 유일한 ${treve.name}의 트레이너로서, ${you.name}에게는 ${treve.sex}에게 맡겨야 할 무언가가 있었다.`,
        );
        await era.printAndWait(`이 세계에 발을 들여놓은 그날부터.`);
        await era.printAndWait(
          `세계 최고봉이라 불리는 개선문상이라는 레이스가 탄생한 그날부터.`,
        );
        await era.printAndWait(
          `『우리들』에게는 없는 가능성을 품고 태어난 『${treve.couple_title}』와 마주한 그날부터.`,
        );
        await era.printAndWait(`인간으로서, ${you.name}은(는) 진심으로 원하고 있었다.`);
        era.printButton(
          `「${treve.name}, 나의 영혼을 불태워 줘.」（애정도 +5）`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `사람들은 살아가면서 언젠가 자신의 모든 것을 바꾸어 놓을 존재와 조우하게 된다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 분명 그런 염원을 이루기 위해 모든 우연이 이곳에서 하나로 연결된 것이라 생각했다.`,
        );
        await era.printAndWait(
          `이제야 확실히 깨달았다. 자신은 ${treve.sex}의 전속 트레이너라는 것을.`,
        );
        await era.printAndWait(`모든 기대를 ${treve.sex}에게 건다.`);
        await era.printAndWait(`${treve.name}의 어깨가 자그맣게 떨렸다.`);
        await era.printAndWait(
          `뒤를 돌아본 ${treve.sex}는 옅은 미소를 짓고 있었지만, 그 눈가에는 반짝이는 무언가가 맺혀 있었다.`,
        );
        await era.printAndWait(
          `${treve.sex}는 기쁜 듯하면서도 곤란한 표정으로 조심스레 손을 가슴에 얹었다.`,
        );
        await era.printAndWait(
          `센강에서 불어온 바람이 ${treve.sex}의 붉은 리본을 하늘하늘 휘날렸다.`,
        );
        await treve.say_and_wait(`저에게 기대를 걸어 주시는 건가요?`);
        await era.printAndWait(
          `그 짧은 마디 속에, ${treve.sex}가 가슴 깊이 묻어두었던 불안이 파르르 떨리며 배어 나왔다.`,
        );
        await era.printAndWait(
          `그동안 ${treve.sex}에게 모든 것을 걸지 못했던 자신을 반성하며, 그 진심을 확실히 받아들이겠다는 듯 강하게 고개를 끄덕였다.`,
        );
        await era.printAndWait(
          `${treve.name}는 ${you.name}의 몸짓을 보며 눈을 가늘게 떴다.`,
        );
        await treve.say_and_wait("D'accord!");
        await era.printAndWait(
          `마지막으로 흐른 한 방울의 눈물이 노을빛을 받아 아름답게 반짝였다.`,
        );
        await era.printAndWait(
          `지금 이 순간 두 사람 사이에 마침내 단 하나의 소망이 싹텄다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_42
  we_95_42: (() => {
    const title = '영원히 당신의 것';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `어느 휴일 아침, 갑자기 인터폰이 울려 ${you.name}은(는) 현관으로 향했다.`,
      );
      await treve.say_and_wait(`Salut! 트레이너, 저 왔어요!`);
      era.print(`${you.name}의 선택은:`);
      era.printButton(`문을 닫는다`, 1);
      era.printButton(`……헛것을 봤나?（호감도 -10, 애정도 +1）`, 2);
      ret.push(await era.input());
      await treve.say_and_wait(`잠깐만요, 저라니까요!`);
      era.printButton(`도를 아십니까인가?`, 1);
      era.printButton(`「돌아가세요, 전 그런거 안 믿어요!」（호감도 -10, 애정도 +1）`, 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name}은(는) 문을 닫으려고 했지만, 안타깝게도 인간의 악력으로 ${treve.uma_sex_title}를 이기는 것은 불가능했다.`,
      );
      await era.printAndWait(`문이 왈칵 열렸다.`);
      await era.printAndWait(
        `${treve.child_sex_title}는 중심을 잃고 현관 바닥에 엉덩방아를 찧고 말았다.`,
      );
      await era.printAndWait(
        `프랑스의 공주이자 천재인 ${treve.teen_sex_title}. 하지만 ${
          you.name
        } 앞에서 헝클어진 머리를 정돈하는 모습은 절로 웃음을 자아냈다.`,
      );
      await era.printAndWait(
        `옷차림은 여전히 반바지에 티셔츠 차림이었지만, 키는 처음 만났을 때보다 훌쩍 자라 있었다.`,
      );
      await era.printAndWait(
        `유럽인 특유의 투명하고 고운 피부가 돋보였고, 얼굴에는 아직 앳된 티가 남아 있었다.`,
      );
      await era.printAndWait(
        `두 사람은 개선문상에서 승리했다. 이후 TV와 잡지에 자주 등장하고 유명 브랜드와 협업하며 일약 화제의 인물이 되었다.`,
      );
      await treve.say_and_wait(`제가 어디에 있을지는 제가 정해요, 트레이너.`);
      await era.printAndWait(
        `시선이 마주쳤다. ${treve.sex}의 주장에도 나름 일리가 있어, ${treve.name}의 얼굴에는 당당한 기색이 감돌았다.`,
      );
      await era.printAndWait(
        `${treve.name}는 세계 최강의 ${treve.uma_sex_title}다. ${
          you.name
        }은(는) 그때의 광경을 결코 잊지 못한다.`,
      );
      await era.printAndWait(`푸른빛 도는 승부복을 입고 결승선을 통과하던 그 짜릿한 순간을.`);
      await era.printAndWait(
        `꾸밈없는 솔직함과 정직함, 지기 싫어하는 근성과 활력이 넘치던 ${treve.uma_sex_title}の感触。`,
      );
      await era.printAndWait(
        `그때 그 아이가 이렇게 자랐다. 키가 훌쩍 크더니 어느덧 늘씬한 모델 체형으로 변모해 가고 있었다.`,
      );
      await era.printAndWait(`머리카락은 끝부분까지 정성스럽게 관리되어 있어, 마치 인형처럼 정돈되어 있었다.`);
      await era.printAndWait(`그야말로 진짜배기 미인이었다.`);
      await treve.say_and_wait(`${callname}.`);
      await treve.say_and_wait(`돌아가고 싶지 않아요.`);
      await treve.say_and_wait(`하지만…… 당신이 원치 않으신다면 지금 당장 갈게요.`);
      await era.printAndWait(
        `${treve.sex}의 눈동자에 ${you.name}의 부스스한 얼굴이 비쳤다. 뭐, 방금 막 일어났으니 당연한 몰골이겠지만.`,
      );
      era.print(`${you.name}의 대답은……`);
      era.printButton(`「……일단 돌아가.」`, 1);
      era.printButton(`「좀 걸을까.」（호감도 +15）`, 2, {
        disabled: era.get('love:205') < 50,
      });
      ret.push(await era.input());
      if (ret[2] === 1) {
        await treve.say_and_wait(`……알겠어요.`);
        await era.printAndWait(
          `정답에 가까운 대답이었을지는 몰라도, 최선의 선택은 아니었을지도 모른다.`,
        );
        await era.printAndWait(
          `${treve.name}는 덤덤하게 대답하고는, 왔던 길을 되돌아 걸어가기 시작했다.`,
        );
        await era.printAndWait(
          `${you.name}이(가) 말한 대로 돌아가는 ${treve.sex}의 뒷모습이 점점 멀어져 갔다.`,
        );
        await era.printAndWait(
          `그것이 분명 ${you.name}이(가) 바라던 결과였음에도, 어째서인지 차마 끝까지 지켜볼 수가 없었다.`,
        );
        await era.printAndWait(`왜일까? 아니, 이유는 뻔했다.`);
        await era.printAndWait(`——온몸을 파고드는 지독한 허탈감이 가슴을 까맣게 태우고 있었다.`);
        await era.printAndWait(
          `「붙잡지 않아도 되겠어?」 어디선가 그런 목소리가 들려오는 듯했다.`,
        );
        await era.printAndWait(
          `손을 뻗고 싶었지만, ${you.name}은(는) 그 사소한 행동조차 망설였다. 결국 ${you.name}은(는) 아무것도 하지 못했다.`,
        );
        await era.printAndWait(`그리고 ${you.name}은(는) 생각을 떨쳐내려는 듯 집 안으로 무겁게 발걸음을 옮겼다.`);
      } else {
        era.drawLine();
        await era.printAndWait(
          `${treve.name}는 여전히 반바지에 검은 티셔츠 차림이었고, 선글라스를 끼고 있었다.`,
        );
        await era.printAndWait(
          `팬들에게 들키고 싶지 않아서였을까, 특유의 아름다운 밤색 머리칼을 지나치게 단정하게 정리한 탓에 오히려 주변의 시선을 끌고 있었다.`,
        );
        await era.printAndWait(
          `${treve.uma_sex_title}의 미모는 대부분 털색에 의해 결정된다고들 한다.`,
        );
        await era.printAndWait(
          `물론 이목구비 등도 고려해야 하겠지만, 전체적으로 보면 모질과 털빛의 비중이 훨씬 크다.`,
        );
        await era.printAndWait(
          `${treve.name}의 머리카락과 꼬리는 이 근처의 ${treve.uma_sex_title}들과는 확연히 달랐다.`,
        );
        await era.printAndWait(`변장한 의미가 전혀 없잖아……`);
        await era.printAndWait(`${treve.name}는 차창 밖으로 흘러가는 풍경을 가만히 바라보았다.`);
        await era.printAndWait(
          `차에 몸을 싣고 한참을 가다 환승을 위해 내렸을 때, 인파 속에서 길을 잃지 않도록 ${you.name}은(는) ${treve.name}의 손을 꼭 잡고 길을 인도했다.`,
        );
        await era.printAndWait(
          `문득 뒤를 돌아보자, 사람들 틈에 섞여 있던 ${treve.sex}의 얼굴에 진흙 속에 피어난 꽃처럼 눈부시게 아름다운 미소가 피어올라 있었다.`,
        );
        await era.printAndWait(`휴일이라 그런지 거리는 행인들로 붐볐다. 가족 단위의 나들이객도 많았다.`);
        await era.printAndWait(
          `엄마 손을 잡은 아이가 신기한 듯 주변을 두리번거리고 있었다. ${treve.name}는 그 아이에게서 한동안 눈을 떼지 못했다.`,
        );
        await era.printAndWait(
          `${treve.sex}는 촉촉이 젖은 눈으로, 마치 간청하듯 진지하게 속삭였다.`,
        );
        await treve.say_and_wait(`조금만 더, 아주 조금만 더 이대로 있으면 좋겠어요.`);
        await era.printAndWait(
          `결국 도착한 곳은 경기장이었다. 두 사람은 오이 경기장의 레이스를 관람하게 되었다.`,
        );
        await treve.say_and_wait(`역시 레이스군요!`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 흥미진진한 눈빛으로 레이스를 지켜보았다.`,
        );
        await era.printAndWait(`꽤 흥미로운 레이스였지만, 지금 진행 중인 것은 엄연히 G3였다.`);
        era.printButton(`「조금 의외네.」`, 1);
        await era.input();
        await treve.say_and_wait(`네?`);
        era.printButton(
          `「개선문상을 우승한 ${treve.uma_sex_title}가 G3 레이스에 관심을 보이다니 말이야.」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`……그렇게 보일지도 모르겠네요.`);
        await treve.say_and_wait(
          `하지만 당신도 트레이너라면 아실 텐데요. ${treve.couple_title}들에게 있어서는 이것도 개선문상 못지않은 무대라는 걸요.`,
        );
        era.printButton(`「그건 너무 과장한 거 아냐?」`, 1);
        await era.input();
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name}의 말에 어느샌가 묵직한 무게감이 실려 있었다.`,
        );
        await era.printAndWait(
          `몇 년 전의 ${you.name}이었다면 감히 ${treve.sex}에 대해 이렇다 저렇다 말할 자격조차 없었을 것이다.`,
        );
        await treve.say_and_wait(
          `${treve.couple_title}들에게 있어서는 커다란 무대예요. 이를 위해 몸을 조율하고, 이곳에 선 거죠. 자신의 영혼을 걸고서요. 그러니까——`,
        );
        await you.say_and_wait('결승선을 통과했네.', true);
        era.printButton(`「……그래?」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name}에게 있어 이것은 특별할 것 하나 없는, 수많은 G3 레이스 중 하나일 뿐이었다.`,
        );
        await era.printAndWait(
          `평범한 준비와 평범한 노력, 그리고 아주 사소한 반짝임이 있을 뿐인, 그런 평범한 레이스.`,
        );
        await era.printAndWait(
          `어쩌면 ${you.name}은(는) 트레이너라는 권태로운 입장에서 너무나 많은 레이스를 보아온 탓에, 정말 중요한 무언가를 놓치고 있었던 것일지도 모른다.`,
        );
        await treve.say_and_wait(`……후훗.`);
        await era.printAndWait(`씁쓸한 웃음이 새어 나왔다.`);
        await treve.say_and_wait(`……`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `경마장은 한산해졌다. 레이스는 이미 모두 막을 내렸다. 하지만 ${you.name}은(는) 도저히 자리에서 일어날 수 없었다. 마치 납덩이라도 매단 듯 무거운 무릎을 꺾은 채, 텅 빈 관람석에 그대로 주저앉아 있었다.`,
        );
        await era.printAndWait(`바람이 차가웠다.`);
        era.drawLine();
        await era.printAndWait(
          `깊은 밤, ${you.name}과(와) ${treve.name}는 도쿄의 거리를 나란히 걸었다.`,
        );
        await treve.say_and_wait(`……저, 재팬 컵에 나가고 싶어요.`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name}가 이제부터 아주 중요한 이야기를 꺼내려 한다는 사실을, ${you.name}은(는) 직감적으로 알아차렸다.`,
        );
        await treve.say_and_wait(`전 당신을 잊을 수 없었어요, 트레이너.`);
        await treve.say_and_wait(
          `국가나 인종 같은 건 아무래도 좋아요. 하지만 트레이너, 당신과 함께라면 정말 즐거울 것 같아요.`,
        );
        await era.printAndWait(`이것은 온전히 ${you.name}의 죄였다.`);
        await era.printAndWait(`가슴 한구석이 아려왔지만, ${you.name}은(는) 아무렇지 않은 척 표정을 숨겼다.`);
        await treve.say_and_wait(`사랑해요.`);
        await treve.say_and_wait(`줄곧 당신을 사랑해 왔어요.`);
        await era.printAndWait(`한 마디 한 마디가 너무나 매끄럽게 흘러나왔다.`);
        await era.printAndWait(
          `분명 속으로 수없이 연습하고 또 연습했을 터였다. 오직 ${you.name}만을 위해 특별히 연습해 온 고백이었다.`,
        );
        await era.printAndWait(`머릿속이 새하얘졌다. 심장이 거세게 뛰고 호흡이 가빠져 오는 듯한 착각마저 들었다.`);
        await era.printAndWait(
          `${treve.sex}가 마음을 전해올 때마다, ${you.name}의 비겁한 속내 역시 가차 없이 파헤쳐졌다.`,
        );
        await era.printAndWait(
          `마치 고치에서 실을 자아내듯, ${treve.name}의 올곧은 대사들이 마음에 씐 베일을 한 겹씩 벗겨내며 ${you.name}의 심장을 적나라하게 드러내고 있었다.`,
        );
        await era.printAndWait(`그리고 ${you.name}은(는) 뼈저린 후회와 아쉬움을 느꼈다.`);
        await era.printAndWait(`${treve.name}는 끊임없이 이야기를 쏟아냈다.`);
        await treve.say_and_wait(
          `……있죠, ${
            you.actual_name
          }. 우리가 트레이너와 ${treve.uma_sex_title}가 아니었더라도 서로 만날 수 있었을까요?`,
        );
        era.printButton(`「……아니, 못 만났겠지.」`, 1);
        await era.input();
        await treve.say_and_wait(`그렇겠죠.`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `두 사람이 서 있는 자리에서 밤하늘을 올려다보니 희미한 일등성 몇 개만 외롭게 빛나고 있었다.`,
        );
        await era.printAndWait(`도심에서 바라보는 특별할 것 없는 밤하늘.`);
        await era.printAndWait(
          `이 나지막하고 우중충한 하늘 아래에서 태어나 아마도 이곳에서 뼈를 묻을 ${you.name}과(와), 눈부신 은하수 같은 미래를 품고 달리는 ${treve.sex}.`,
        );
        await era.printAndWait(`두 사람 사이의 격차는 너무나도 극명했다.`);
        await era.printAndWait(
          `${you.name}은(는) 당장이라도 울음을 터뜨릴 것 같은 ${treve.name}에게 차갑게 선언했다.`,
        );
        await era.printAndWait(`밤바람이 불어왔다. 해가 저물어가고 있었다.`);
        await era.printAndWait(
          `${treve.name}의 눈동자는 처음 만났을 때와 비교해 조금도 변함이 없었다.`,
        );
        await era.printAndWait(
          `지금까지 수없이 반추해 왔던 기억 속의 ${treve.sex} 그대로였다.`,
        );
        await era.printAndWait(
          `하지만 확실히 변한 것도 있었다. ${treve.sex}의 마음속에 레이스 이외의 것에 대한 열망이 싹튼 것이다.`,
        );
        await era.printAndWait(`시간은 모든 것을 변화시킨다.`);
        await era.printAndWait(
          `${you.name}은(는) ${treve.sex}와는 달리 그저 발목을 잡을 뿐인 존재다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 동경하는 ${treve.uma_sex_title}의 발목을 잡고 싶지 않았다.`,
        );
        await era.printAndWait(`그러니까——`);
        era.printButton(`「헤어지자.」`, 1);
        await era.input();
        await treve.say_and_wait(`읏……!`);
        await you.say_and_wait(
          `다시는 내 앞에 나타나지 마. 공적인 일이 아니라면 일본에 오지도 마. 내 눈앞에서 사라져.`,
        );
        await treve.say_and_wait(`왜, 어째서 그런 심한 말씀을 하시는 거예요!`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `제 기억 속의 트레이너는 무척 상냥하셨단 말이에요, 그래서 전 줄곧——`,
        );
        await you.say_and_wait(`그건 네 착각이야.`);
        await treve.say_and_wait(`으……!`);
        await you.say_and_wait(
          `……곧 밤이 깊어질 테고, 자고 일어나면 아침이 오겠지. 그렇게 내일이 되면 영원히 안녕이야——`,
        );
        await treve.say_and_wait(`기다려 주세요!`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `적어도, 적어도 마음만은… 적어도 트레이너의 진짜 속마음만큼은——`,
        );
        era.printButton(`「모르겠어.」`, 1);
        await era.input();
        await treve.say_and_wait(`아……!`);
        await era.printAndWait(
          `${you.name}은(는) 그야말로 최악의 인간에게나 어울릴 법한 모진 말을 내뱉었다.`,
        );
        await treve.say_and_wait(`거짓말쟁이!`);
        await you.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name}의 등 뒤로 ${treve.name}가 울며 뛰어가는 발소리가 멀어졌다.`,
        );
        await era.printAndWait(`${you.name}은(는) 비틀거리는 걸음으로 도쿄 경기장으로 향했다.`);
        await era.printAndWait(
          `경기장은 싸늘하게 식어 있었고, 도로 위를 달리는 차 소리와 나뭇잎이 서스레치는 소리 등 주변의 소음이 다시금 선명해지는 것 같았다.`,
        );
        await era.printAndWait(`11월, 재팬 컵이 코앞으로 다가와 있었다.`);
        await era.printAndWait(
          `${you.name}은(는) 한동안 그곳에 머물렀다. 쓸쓸한 가을 경기장에 멍하니 홀로 서 있었다.`,
        );
        await era.printAndWait(`${you.name}의 곁에는 이제 아무도 없었다.`);
        await era.printAndWait(`이걸로 된 거다. 그러니까——`);
        era.printButton(`「전부 잊자……」`, 1);
        await era.input();
        await era.printAndWait(`——그렇게 몇 분이나 흘렀을까.`);
        await era.printAndWait(`하늘은 완전히 어두워졌고, 도쿄 경기장 위로 짙은 밤의 어둠이 가라앉았다.`);
        await era.printAndWait(`안내 방송에서는 곧 폐장 시간임을 알리고 있었다.`);
        await era.printAndWait(`가슴 한구석에 거대한 구멍이 뚫린 것만 같았다.`);
        await era.printAndWait(
          `${you.name}이(가) 막 발걸음을 옮겨 떠나려던 찰나…… 출입구 쪽에 ${treve.name}가 서 있었다.`,
        );
        era.printButton(`「어째서…… 여기에 있는 거야……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 엄청난 각력으로 ${you.name}에게 돌진했다. ${treve.sex}의 머리가 창처럼 ${you.name}의 복부에 박혔고, 폐가 으스러지는 듯했다.`,
        );
        await era.printAndWait(`아프다, 엄청나게 아프다.`);
        await era.printAndWait(`뼈를 찌르는 듯한 통증이 신경을 자극했다.`);
        await era.printAndWait(
          `${treve.name}는 ${you.name}의 배를 껴안았고, ${treve.sex}는——`,
        );
        await era.printAndWait(`울고 있었다.`);
        await era.printAndWait(
          `그 사파이어처럼 아름다운 눈동자가 일그러졌고, 찢어질 듯 미간을 찌푸리고 있었다.`,
        );
        await treve.say_and_wait(
          `트레이너 바보! Stupide idiot. Pourquoi dis-tu des choses aussi horribles! (진짜 바보! 어째서 그렇게 심한 말을 하는 건가요!)`,
        );
        era.printButton(`「잠깐만! 무슨 말을 하는!——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name}는 그대로 ${you.name}의 품 안에서 울었다.`,
        );
        await era.printAndWait(
          `멋대로 뛰어들어 피해를 입은 건 ${you.name}인데, 정작 우는 건 ${treve.sex}였다.`,
        );
        await era.printAndWait(
          `물론, ${you.name}의 마음에 상처를 준 것은 ${treve.sex}(이)다.`,
        );
        await era.printAndWait(
          `경기장 정리를 준비하던 직원이 다가와 놀란 표정으로 두 사람을 바라보았다.`,
        );
        await era.printAndWait(
          `아마도 미친 여자애와 나쁜 남자의 치정 싸움 정도로 여겨졌겠지.`,
        );
        await era.printAndWait(`그 사람은 곧바로 시선을 돌려 자신의 업무로 돌아갔다.`);
        await era.printAndWait(
          `일루미네이션이 경기장을 수놓은 가운데 두 사람은 바닥에 주저앉아 있었다.`,
        );
        await treve.say_and_wait(
          `제가 어떤 마음으로 여기에 서 있었는지 알기나 하나요! 저를 마중 나올 거라면 빨리 왔어야죠!`,
        );
        era.printButton(`「어!? 네가 날 매복해서 기다린 게——」`, 1);
        await era.input();
        await treve.say_and_wait(
          `시끄러워요, 시끄러워요! 당신의 변명 따위 듣고 싶지 않아요, 이 바보!`,
        );
        era.printButton(`「어어어?」`, 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 정말로 ',
          treve.uma_sex_title,
          ' 특유의 괴력에 안겨 으스러질 것 같아, ',
          treve.get_colored_name(),
          '의 등을 가볍게 토닥였다.',
        ]);
        await era.printAndWait(
          `분명 『abandonne-포기해』라고 말했는데도, ${treve.name}는 조금도 떨어지려 하지 않았다. 통곡하는 ${treve.sex}는 오히려 힘이 더 강해졌다.`,
        );
        await era.printAndWait(
          `이것이 자업자득이라는 걸까………… 하지만 갈비뼈가 정말로 부러질 것 같다.`,
        );
        await treve.say_and_wait(`어떤가요?`);
        era.printButton(`「?」`, 1);
        await era.input();
        await treve.say_and_wait(`저를 사랑하나요!? 사랑하지 않나요!?`);
        era.printButton(`「그렇게 말할 문제가 아니잖아——」`, 1);
        await era.input();
        await treve.say_and_wait(`바로 그런 문제예요!`);
        era.printButton(`「사랑하지 않았다면, 이렇게 곤란해하지도 않았어.」`, 1);
        era.printButton(`「너를 좋아하니까 곤란한 거잖아!」`, 2);
        await era.input();
        await era.printAndWait(`${treve.name}는 마치 물 만난 물고기 같았다.`);
        await treve.say_and_wait(
          `그럼 빨리 결혼식을 올려요! 약혼하고, 반지도 사야 하고…… 『스승님』도 분명 우리를 축복해 주실 거예요!`,
        );
        await treve.say_and_wait(
          `프랑스에서 한다면 교회겠죠? 일본에서도 괜찮아요, 새하얀 옷을 입고 절 앞에서 사랑을 맹세하는 거예요!`,
        );
        era.printButton(`「절이 아니라 신사라고 하는 거야.」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name}은(는) 혼자 신난 ${treve.name}를 말리기 위해 ${treve.sex}의 어깨를 붙잡았다.`,
        );
        await treve.say_and_wait(`정말 대담하시네요…`);
        await treve.say_and_wait(`밖에서 이러다니…… 하지만 당신이라면——`);
        era.printButton(`「이상한 소리 하지 마! 난 결혼 얘기 같은 건 한 적 없어!」`, 1);
        await era.input();
        await treve.say_and_wait(`즉 일단은 연인이 되자는 뜻이군요, 정말 감동했어요!`);
        await treve.say_and_wait(
          `주변 사람들도 분명 이해하고 받아들여 줄 거야! 그렇지 않으면 아이가 정말 고통받을 거야!`,
        );
        era.printButton(`「난 유럽인도 아닌걸.」`, 1);
        await era.input();
        await treve.say_and_wait(`인종이 그렇게 중요한가요!?`);
        era.printButton(`「중요하잖아!?」`, 1);
        await era.input();
        await treve.say_and_wait(
          `저는 당신의 인종과 외모를 보고 사랑에 빠진 게 아니에요, 당신의 마음에 사랑에 빠진 거라고요!`,
        );
        await treve.say_and_wait(
          `아시아인? 그래서요, 어쨌다는 건가요? 떠들어대는 사람들에겐 『시끄러워』라고 소리쳐 줄 거예요! 누구도 우리를 방해할 순 없어요!`,
        );
        await treve.say_and_wait(`멋대로 제 가치를 결정하지 마세요!`);
        await treve.say_and_wait(
          `제 가치는 제가 결정해요, 앞으로도 계속! 자만하지 마세요! 당신과 결혼한다고 해도, 저는 아무것도 변하지 않아요! 만약 누군가 성가신 소리를 한다면, 그 녀석의 머리를 비틀어 버릴 거예요!`,
        );
        era.printButton(`「그건 좀……」`, 1);
        era.printButton(`「그럴 필요까지는……」`, 2);
        await era.input();
        await era.printAndWait(
          `그러자, 비록 울어서 부은 얼굴이었지만, 그럼에도 ${treve.name}는 고귀하게 일어섰다.`,
        );
        await era.printAndWait(
          `화장이 지워졌어도, ${treve.sex}는 여전히 아름다웠다. 마치 밤을 신성하게 비추는 달 같았다.`,
        );
        await treve.say_and_wait(
          `저는 천재 ${treve.uma_sex_title}예요! 대부분의 일은 fermez-la 라고 할 수 있다고요!`,
        );
        era.printButton(`「널 힘들게 하고 싶지 않아.」 (호감+10, 애정도+1)`, 1);
        era.printButton(`「이해해 줬으면 해……」`, 2);
        ret.push(await era.input());
        await treve.say_and_wait(
          `모르겠어요, 전혀 모르겠어요! 저를 좋아한다면, 저를 기쁘게 해주세요! 저는 당신과 함께 있겠다고 했어요! 저를 행복하게 해줄 수 있는 건 당신뿐이라고 했다고요!`,
        );
        era.printButton(
          `「『행복하게 해줄 수 있는 건 당신뿐』이라니…… 그거 프러포즈잖아!」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`아까 건 아니에요! 지금 게 프러포즈라고요!`);
        era.printButton(`「영문을 모르겠네!」`, 1);
        await era.input();
        await treve.say_and_wait(`영문을 모를 정도로 당신을 좋아해요!`);
        await era.printAndWait(
          `서로의 외침이 도쿄 밤의 한구석에 울려 퍼졌다. 서로 숨을 헐떡이면서도 시선은 피하지 않았다.`,
        );
        await treve.say_and_wait(
          `저는 마음속 어딘가에서 줄곧 당신을 쫓고 있었어요! 당신을 생각하지 않으려고 해봤지만, 역시 무리였어요! 트레이너와 이야기를 나누던 나날들, 그 기억들이 마치 녹화된 것처럼 반복 재생되고 있다고요!`,
        );
        era.print(`${you.name} 역시……`);
        era.printButton(`「계속 널 생각했어.」`, 1);
        era.printButton(`「계속 잊지 못했어……」`, 2);
        await era.input();
        await treve.say_and_wait(`그렇다면!`);
        await era.printAndWait(
          `${treve.name}는 무릎걸음으로 ${you.name}에게 다가가, ${you.name}의 멱살을 쥐었다.`,
        );
        await era.printAndWait(
          `미녀에게 위협당하면 무섭다는 것은 사실인 듯했다.`,
        );
        await era.printAndWait(
          `${treve.sex}의 프랑스계 단정한 외모가 지근거리까지 다가왔다. ${treve.name}는 ${you.name}을(를) 향해 입을 열었다. ${treve.sex}의 분노 어린 외침이 오이 경기장 앞에 울려 퍼졌다.`,
        );
        await treve.say_and_wait(`이 바보.`);
        era.printButton(`「난 바보가 아니야」`, 1);
        await era.input();
        await treve.say_and_wait(
          `아니요, 바보예요! 나약해도 상관없어요…… 변변치 않다면 손을 맞잡고 지탱해 주면 되는 거예요. 당신은 책임을 회피하지 않았고, 저는 더더욱 포기할 수 없어요.`,
        );
        await treve.say_and_wait(
          `트레이너와 ${treve.uma_sex_title}의 관계는 대등해요. 우리는 전력으로 달리고, 트레이너는 이끌어주죠. 마치 어느 한쪽이라도 없어서는 안 될 부부처럼요.`,
        );
        await treve.say_and_wait(
          `그러니까…… 읏, 훌쩍, 우리가 서로 끌리게 된 거잖아요, 안 그런가요?`,
        );
        await era.printAndWait(
          `${you.name}은(는) 자신보다 열 살이나 어린 ${treve.child_sex_title}를 울려버렸다.`,
        );
        await era.printAndWait(`밤은 조금 쌀쌀했다. 낮에는 더웠기에 옷차림은 가벼웠다.`);
        await era.printAndWait(
          `그래도 두 사람이 서로 꼭 붙어 체온으로 몸을 데운다면 추울 리 없었다.`,
        );
        await era.printAndWait(
          `${treve.name}는 여전히 불안한 표정을 짓고 있었고, ${you.name}은(는) ${treve.sex}의 머리를 쓰다듬었다.`,
        );
        era.printButton(`「좀 춥지?」`, 1);
        await era.input();
        await treve.say_and_wait(`……네.`);
        era.printButton(
          `「일단 네가 머무는 호텔로 가자. 이대로면 감기에 걸릴 거야.」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`알겠어요.`);
        await era.printAndWait(
          `${treve.sex}는 ${you.name}의 말에 따라 함께 걸었다.`,
        );
        await era.printAndWait(
          `일루미네이션의 불빛이 두 사람의 뒷모습을 비추고 있었다.`,
        );
        era.drawLine();
        era.printButton(`「${treve.name}, 이게 무슨 상황이야……!?」`, 1);
        await era.input();
        await treve.say_and_wait(
          `${treve.child_sex_title}を部屋に入れたら、することは一つだけだと思わない？`,
        );
        await era.printAndWait(
          `肌をかろうじて隠す布が解け、${treve.name} の海のような青い目が妙な光を放つ。`,
        );
        await treve.say_and_wait(
          `Bonne soirée , ma cheri. (좋은 저녁 보내요. 내 사랑.)`,
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),

  // [번역 대상] we_95_42_end
  async we_95_42_end(treve, you) {
    await era.printAndWait(
      `部屋で落ち着くつもりだったのに、待っているとバスタオル姿の ${treve.name} が現れる。`,
    );
    await era.printAndWait(`未成年の淫行が始まる。`);
    await era.printAndWait(
      `要するに、法という後ろ盾を完全に失った ${you.name} が世界最強の${treve.sex}を止められるはずもなく、そのまま完全に一線を越えた。`,
    );
    await era.printAndWait(`${you.name} と担当は、夜を楽しんだ。`);
    await treve.say_and_wait(`좋은 아침이에요, 내 사랑.`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `隣には裸の ${treve.name} がいる。${you.name} はこの状況に安心する。`,
    );
    era.printButton(`「……좋은 아침이야, 나의 공주님.」`, 1);
    await era.input();
    await treve.say_and_wait(`어머, 인정하신 건가요?`);
    await treve.say_and_wait(`……그렇군요, 역시 처음부터 이랬으면 좋았을 텐데요.`);
    era.printButton(`「무서운 소리 하지 마.」`, 1);
    await era.input();
    await era.printAndWait(
      `창문으로 들어오는 아침 햇살을 받은 ${treve.name}는 그림 속의 성모처럼 아름다웠다.`,
    );
    await era.printAndWait(
      `純白のベールに包まれ、うつ伏せで ${you.name} を見る${treve.sex}は、突出した部分だけを隠し、背を無防備に晒している。`,
    );
    await era.printAndWait(
      `${you.name}은(는) 충동적으로 예술품 같은 ${treve.name}의 머리를 쓰다듬었다. ${treve.sex}의 유려한 머리카락이 손가락 사이를 빠져나갔다.`,
    );
    await treve.say_and_wait(`……♪`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `미소 짓는 ${treve.sex}의 얼굴을 보며, ${you.name}은(는) 결심했다.`,
    );
    await treve.say_and_wait(
      `당신을 정말 좋아해요. 지금까지 쭉 당신을 생각했어요. 이렇게 이야기하는 것을 꿈꿔왔답니다.`,
    );
    era.printButton(`「나도 그래, ${treve.name}.」`, 1);
    await era.input();
    await era.printAndWait(`미소 짓는 ${treve.sex}는, 역시나 아름다웠다.`);
    await treve.say_and_wait(`사랑해요, 트레이너.`);
    era.printButton(`「나도 사랑해. 나만의 ${treve.name}.」`, 1);
    await era.input();
    await era.printAndWait(
      `${treve.sex}가 사랑스럽게 ${you.name}의 손을 맞잡는 모습은, 누가 봐도 성녀 같았다.`,
    );
    await era.printAndWait(
      `${you.name}의 눈앞에 있는 애마의 아름다운 얼굴에 생기가 돌았고, 환한 미소가 피어올랐다.`,
    );
  },

  // [번역 완료] ws_47_24
  ws_47_24: (() => {
    const title = '푸른 하늘 위를 날아오르다';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} prix_prb ブルーインコ賞（色付き名）
     * @param {PrintedSpan} prix_dia ディアヌ賞（色付き名）
     */
    const f = async (treve, you, prix_prb, prix_dia) => {
      await era.printAndWait([
        treve.name,
        '는 새해를 보내고 봄이 조금 지난 5월, 데뷔전과 마찬가지로 1600m의 ',
        prix_prb,
        '에서 대승을 거두었다.',
      ]);
      await era.printAndWait([
        '본인의 강력한 희망에 힘입어, ',
        treve.sex,
        '는 거리가 500m가량 늘어난 ',
        prix_dia,
        '에도 출주했다.',
      ]);
      await era.printAndWait(
        `${you.name}을(를) 포함한 수많은 관객의 예상을 뒤엎고, 삼관 레이스에서 압도적인 승리를 거두었다.`,
      );
      await era.printAndWait(`${treve.name}는 착실하게 실력을 키워나갔다.`);
      await era.printAndWait(
        `그리고 그 과정에서 ${you.name}이(가) 가르칠 수 있는 것은 점차 줄어들었다.`,
      );
      await era.printAndWait(
        `하나를 들으면 열을 아는 ${treve.name}는, 때로는 가르쳐주지 않아도 자연스럽게 정답을 찾아냈다.`,
      );
      await era.printAndWait(
        '베테랑 트레이너조차 눈치채지 못할 만한 점을 스스로 개선하곤 했다.',
      );
      await era.printAndWait(
        `다른 트레이너들에게 방임주의라는 지적을 받을 때도 있었지만, ${you.name}은(는) 이것이 ${treve.sex}에게 맞는 올바른 방식이라고 생각했다.`,
      );
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_47_33
  ws_47_33: (() => {
    const title = '가난한 집? 타향으로';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `어느덧 여름도 막바지에 접어들고, 바닷가 합숙에서 돌아온 ${you.name}은(는) 다시 G1 출주 등록 서류를 작성하고 있었다.`,
      );
      await era.printAndWait(
        `프랑스 오크스를 제패한 지 얼마 지나지 않은 것 같은데, 정신을 차려보니 또 G1이었다.`,
      );
      await era.printAndWait(`대망의 다음 무대는 ${treve.sex}가 그토록 고대하던 개선문상.`);
      await era.printAndWait(
        `지금까지 보여준 압도적인 실력만 놓고 본다면, ${treve.name}가 그 영예를 차지한다 해도 전혀 이상할 게 없었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 출주 신청서에 서명을 마친 뒤, 트레이닝실 소파에 누워 있는 ${treve.name}에게 건넸다.`,
      );
      era.printButton(`「출주 신청서야. 서명해 줘.」`, 1);
      await era.input();
      await treve.say_and_wait(`네에.`);
      await era.printAndWait(
        `어느샌가 ${treve.sex}는 트레이닝실을 마치 자신의 개인 방인 양 드나들고 있었다.`,
      );
      await era.printAndWait(`계약한 이상 딱히 불평할 수도 없는 노릇이었다.`);
      await era.printAndWait(
        `그것보다 ${you.name}은(는) ${treve.sex}가 사생활에서의 이 칠칠치 못한 모습부터 어떻게든 해결해 주기를 바랐다.`,
      );
      await era.printAndWait(
        `${treve.name}는 소파에서 스르륵 미끄러지듯 일어나, 건네받은 볼펜을 톡톡 두드리며 ${you.name}을(를) 슬쩍 바라보았다.`,
      );
      await treve.say_and_wait(`그러고 보니, 이번 주 일요일에 시간 있으세요?`);
      era.printButton(`「낮에는 한가해.」（애정도+1）`, 1);
      era.printButton(`「추가 트레이닝이라도 하려고?」（호감도+5）`, 2);
      const ret = await era.input();
      await era.printAndWait(`${treve.name}는 서명을 하며 생각에 잠겼다.`);
      await treve.say_and_wait(
        `스승님이 만나고 싶어 하신대요. ${treve.sex}는 여름 합숙이 끝나면 들러도 된다고 하셨으니, 슬슬 한 번 다녀오려고요.`,
      );
      era.printButton(`「스승님?」`, 1);
      await era.input();
      await treve.say_and_wait(`네, 제게 달리는 법을 가르쳐 주신 분이에요.`);
      await era.printAndWait(`${treve.sex}를 달리는 우마무스메로 키워낸 인물.`);
      await era.printAndWait(
        `완성도 높은 실력을 갖춘 ${treve.name}를 또 다른 시선에서 바라본 인물을 만난다면, ${treve.sex}를 더 깊이 이해할 좋은 기회가 될 것이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 출주 신청서가 담긴 봉투를 풀로 붙이며, ${treve.sex}의 제안을 수락했다.`,
      );
      await era.printAndWait(
        `그렇다면 빈손으로 갈 수는 없으니 선물을 준비해야 했다. ${you.name}은(는) 찻잎 캔이 진열된 선반으로 시선을 돌렸다.`,
      );
      await era.printAndWait(
        `가을 수확기까지는 아직 멀었기에, 어디에도 가을의 청명함을 담은 찻잎은 없었다.`,
      );
      await era.printAndWait(`그렇다면 수확 기간이 긴 아삼 찻잎을 고르는 편이 나을 것이다.`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_25
  ws_95_25: (() => {
    const title = '낯선 길.';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(`개선문상 이후로 반년 이상이 흘렀다.`);
      await era.printAndWait(
        `${treve.name}의 태도는 여전히 변함없었고, ${you.name}의 지도를 솔직하게 받아들였다.`,
      );
      await era.printAndWait(
        `다방면에서 눈부신 성장을 이루었음에도, 트레이닝에 대한 열의는 전혀 식지 않았다.`,
      );
      await era.printAndWait(
        `${treve.sex}의 사랑스러움이 더 많은 사람에게 알려졌고, 레이스를 거듭할수록 팬도 늘었다.`,
      );
      await era.printAndWait(
        `개선문상에서의 전과를 포함해, 이제 ${treve.sex}는 프랑스를 짊어진 ${treve.teen_sex_title}로서 널리 이름을 떨치고 있었다.`,
      );
      await era.printAndWait(`하지만, 그렇다고 해서 레이스의 결과까지 마음대로 흘러가지는 않았다.`);
      await era.printAndWait(
        `${treve.name}의 개인 소지품이 작년보다 부쩍 늘어난 트레이닝실은 푹푹 찌는 더위에 잠식되어 있었다.`,
      );
      await era.printAndWait(
        `지친 몸을 쉬게 해야 함에도 ${you.name}이(가) 이곳을 떠나지 못하는 이유는 오직 하나뿐이었다.`,
      );
      await era.printAndWait(`올해 들어 기록한 ${treve.name}의 성적 때문이었다.`);
      await era.printAndWait(
        `눈앞의 모니터 속에서는 봄과 초여름에 치렀던 두 차례의 G1 레이스 영상이 끝없이 반복 재생되고 있었다.`,
      );
      await era.printAndWait(`거리도 작년과 같았고, 경기장 상태가 딱히 나빴던 것도 아니다.`);
      await era.printAndWait(`그럼에도 결과는 각각 2착과 3착.`);
      await era.printAndWait(
        `${treve.name}는 계속해서 트레이닝에 매진하고 있었지만, 명확한 해결책을 찾지 못한 탓에 연패 타이틀이 걸린 다음 개선문상도 불안감이 감돌았다.`,
      );
      await era.printAndWait(
        `반복되는 영상과 ${treve.sex}의 컨디션을 번갈아 살피다 보니, 이미 몇 시간이나 흘러 있었다.`,
      );
      await era.printAndWait(
        `까마귀 울음소리에 ${you.name}은(는) 퍼뜩 정신을 차렸다. 고개를 돌려보니 창밖은 이미 노을빛 오렌지색으로 물들어 있었다.`,
      );
      await you.say_and_wait(`……큰일이네.`, true);
      await era.printAndWait(`오늘 트레이닝 일정이 잡혀 있었을 텐데.`);
      await era.printAndWait(
        `생각에 몰두하느라 ${treve.sex}를 잊고 있었다는 사실에 황급히 스마트폰을 꺼내자, 메시지 알림이 와 있었다.`,
      );
      await era.printAndWait(
        `미리보기 창으로도 약 1시간 전에 도착한 그 메시지가 ${treve.name}가 보낸 것임을 선명히 알 수 있었다.`,
      );
      await treve.say_and_wait(
        `죄송해요, 오늘 몸이 좀 안 좋아서 쉴게요.`,
      );
      await era.printAndWait(`원래대로라면 트레이닝 일정이 먼저였을 터.`);
      await era.printAndWait(
        `즉, 약속 시간이 한참 지나고 나서야 이 메시지를 보냈다는 뜻이다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 머리를 감싸 쥐며 ${treve.sex}에게 답장을 보내려 했다`,
      );
      await era.printAndWait(
        `하지만 지금 어떤 변명을 늘어놓아도 무의미할 터였기에, 그저 간결하게 답하는 편이 나았다.`,
      );
      era.printButton(`「알았어.」`, 1);
      await era.input();
      await era.printAndWait(
        `최근 이렇다 할 성과를 내지 못한 ${treve.name}이기에, ${you.name} 스스로도 이제는 ${treve.sex}와 제대로 마주해야 할 때임을 뼈저리게 느끼고 있었다.`,
      );
      await era.printAndWait(
        `원인조차 파악하지 못하는 트레이너가, 과연 ${treve.sex}의 무엇을 책임질 수 있단 말인가.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 자리에서 일어나고 나서야 비로소 배고픔을 느꼈다.`,
      );
      await era.printAndWait(`（……홍차면 되려나?）`);
      await era.printAndWait(`찻잎 캔 선반에서 흘러나오는 은은하고 상큼한 향기가 뇌리를 자극했다.`);
      await era.printAndWait(
        `머리가 맑아지는 듯한 기분에, ${you.name}은(는) 캔 하나를 집어 들었다.`,
      );
      await era.printAndWait(
        `그러나 안에는 내용물이 거의 없었고, 캔 바닥에 남은 찻잎 잔해와 레몬 향의 잔향만이 맴돌고 있었다.`,
      );
      await era.printAndWait(
        `그날 이후로, ${treve.name}는 줄곧 이 홍차를 좋아했다.`,
      );
      await era.printAndWait(
        `어쩌다 트레이닝실에 들를 때면 이 차를 우리는 경우가 많았다.`,
      );
      await era.printAndWait(`가을이 깊어지면 쌀쌀한 날도 늘어날 것이다.`);
      await era.printAndWait(`${you.name}은(는) 묵묵히 캔 뚜껑을 닫았다.`);
      await you.say_and_wait('혼자 가서 좀 사 와야겠네……', true);
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] ws_95_29
  ws_95_29: (() => {
    const title = 'Fly Away';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `${you.name}은(는) 트레이닝실에서 만나기로 약속한 ${treve.name}를 기다리고 있었다.`,
      );
      await era.printAndWait(
        `${treve.sex}가 오기 전까지 남는 시간 동안 지난 레이스의 영상들을 다시 한번 검토했다.`,
      );
      await era.printAndWait(
        `${treve.name}가 슬럼프에 빠진 이유를 하나씩 차례대로 짚어보았다. 하지만 문제는 그뿐만이 아니었다.`,
      );
      await era.printAndWait(`${you.name}은(는) 최근 레이스의 최종 직선 주로를 다시 확인했다.`);
      await era.printAndWait(
        `${treve.name}는 이전과 다름없이 선두 그룹을 뚫고 앞으로 치고 나가기 위해 호시탐탐 기회를 노리고 있었다.`,
      );
      await era.printAndWait(
        `그러나 상대의 포위망을 미처 빠져나오지 못했고, 장기인 막판 스퍼트를 제대로 발휘하지도 못한 채 레이스가 끝나버렸다.`,
      );
      await era.printAndWait(
        `애초에 ${treve.name}는 체구가 그리 크지 않은 ${treve.uma_sex_title}였다.`,
      );
      await era.printAndWait(
        `게다가 작전마저 간파당한다면, 서로 연대하여 ${treve.sex}가 앞으로 나가지 못하도록 가로막는 무리가 생겨나도 이상할 게 없었다.`,
      );
      await era.printAndWait(
        `무엇보다도 ${treve.sex}의 달리기 방식은 너무나 예측하기 쉬웠다. ${treve.name}의 주법은 ${montjeu.name}를 쏙 빼닮아 있었으니까.`,
      );
      await era.printAndWait(
        `당시 트레이너들이 ${montjeu.name}를 저지하기 위해 고심해서 짜냈던 전략들이, 지금 ${treve.name}에게 그대로 통하고 있는 것이다.`,
      );
      await era.printAndWait(
        `전설의 후계자를 계속 승리로 이끌기 위해, ${you.name}은(는) 과연 무엇을 전해줄 수 있을까.`,
      );
      await era.printAndWait(
        `그렇게 고뇌하는 사이 약속 시간으로부터 벌써 한 시간 남짓이 흘렀다. 하지만 ${treve.name}는 올 기미가 보이지 않았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
};
