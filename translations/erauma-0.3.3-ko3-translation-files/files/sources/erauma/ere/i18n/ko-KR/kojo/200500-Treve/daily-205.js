// 최종 ko-KR 작업 파일: 남은 원문만 번역한 뒤 이 파일 자체를 동일 경로에 교체합니다.
/**
 * @file トレヴ - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

// Only reviewed methods override the current Japanese module; all other methods remain inherited.
const __JaOriginal = require('#/i18n/ja-JP/kojo/200500-Treve/daily-205.js');

module.exports = {
  ...__JaOriginal,
  // [번역 완료] good_morning
  good_morning(treve) {
    const buffer = [
      () => treve.say("그럼 다음엔 뭘 하고 놀까요?"),
      () => treve.say("지금은 기운이 넘쳐서 오히려 주체하기 힘들 정도예요."),
    ];
    if (era.get('love:205') >= 50) {
      buffer.push(
        () => treve.say("절 너무 예뻐해 주시는 거 아닌가요…… 조금 과보호일지도?"),
        () =>
          treve.say('이른 아침부터 저녁까지, 매분 매초 당신 생각만 하고 있어요.'),
      );
    }
    if (era.get('love:205') >= 75) {
      buffer.push(
        () => treve.say('당신을 만나기 전까지는 제가 일편단심인 줄 알았어요.'),
        () =>
          treve.say('당신에게 다가갈 때면 첫사랑을 시작한 것처럼 심장이 두근거려요.'),
      );
    }
    get_random_entry(buffer)();
  },
  // [번역 완료] office_prepare
  async office_prepare(treve, callname) {
    const buffer = [
      () => treve.say_and_wait("당신에게 최고의 선물을."),
      () =>
        treve.say_and_wait(`오늘의 승리는 제가 차지하겠어요. ${callname}을(를) 위해서요.`),
    ];
    await get_random_entry(buffer)();
  },
  async office_gift(treve) {
    const buffer = [
      () => treve.say_and_wait("세상이 변해도, 사랑만은 영원한 흔적으로 남는 법이죠."),
      () => treve.say_and_wait("이걸 사랑이라고 생각해도 될까요?"),
    ];
    await get_random_entry(buffer)();
  },
  // [번역 완료] office_rest
  async office_rest(treve) {
    const buffer = [
      () => treve.say_and_wait('앞으로 어떻게 될지는 모르겠네요.'),
      () => treve.say_and_wait("저랑 같이 쉬니까 즐거우신가요?"),
    ];
    await get_random_entry(buffer)();
  },
  // [번역 완료] office_game
  async office_game(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `${callname}! 왜 우마이소프트를 똥겜 제작사라고 부르는 사람이 있는 건가요?`,
        ),
      () =>
        treve.say_and_wait(
          "《어쌔신 크리드: 트레센》…… 모든 면에서 시리즈의 전작들을 완벽하게 뛰어넘은 역작이에요——",
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] basement_end
  basement_end: (() => {
    const title = '애정의 감옥';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait('어느 날, 파리의 거리에서.');
      await treve.say_and_wait([callname, '!']);
      await era.printAndWait(
        `귀에 익은 목소리에 ${you.name}이(가) 뒤를 돌아보니, ${treve.name}가 달려오고 있었다.`,
      );
      await era.printAndWait(
        `앳되고 사랑스러운 ${treve.sex}는 바다처럼 맑은 눈으로 ${you.name}을(를) 올려다보았다.`,
      );
      await era.printAndWait('바람에 흔들리는 머리카락에서 은은한 샴푸 향기가 풍겨왔다.');
      await era.printAndWait(
        `${treve.name}는 「안녕하세요!」 하며 ${you.name}에게 손을 흔들었다.`,
      );
      await treve.say_and_wait('정말 우연이네요.');
      await era.printAndWait(
        `그렇게 말하는 ${treve.name}의 눈이 어째서인지 반짝이고 있었다.`,
      );
      await treve.say_and_wait('제가 관광시켜 드릴게요!');
      await era.printAndWait(`${treve.name}는 당당하게 가슴을 폈다.`);
      era.printButton('「그래도 돼?」', 1);
      await era.input();
      await era.printAndWait(`별 기대 없이 물었지만, ${treve.name}는 활기차게 고개를 끄덕였다.`);
      await treve.say_and_wait(
        '그럼 우선, 저기에 맛있는 가게가 있으니 들어가 봐요.',
      );
      await era.printAndWait(
        `그렇게 말하며 ${treve.name}가 ${you.name}의 손을 잡아끄는 순간, ${treve.sex}의 주머니에서 사진 한 장이 바람을 타고 펄럭이며 떨어졌다.`,
      );
      await era.printAndWait(
        `떨어진 사진을 주워 들자, ${treve.name}의 표정이 순식간에 새하얗게 질렸다.`,
      );
      await treve.say_and_wait('——앗!');
      await era.printAndWait(
        `사진을 줍기가 무섭게—— ${treve.name}가 즉시 손을 뻗어 그것을 빼앗으려 했다.`,
      );
      await era.printAndWait(
        `하얀 뒷면을 돌려 정면을 확인한 ${you.name}은(는) 그곳에 찍힌 사진을 보고 자신도 모르게 숨을 삼켰다.`,
      );
      await era.printAndWait(
        `그러나 사진은 눈 깜짝할 사이에 빼앗겼고, ${treve.name}는 서둘러 주머니에 집어넣으며 눈을 가늘게 떴다.`,
      );
      await treve.say_and_wait('보셨나요……?');
      await era.printAndWait(
        `${treve.name}의 질문에 ${you.name}은(는) 자기도 모르게 고개를 가로저었다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 이내 미소 지으며 『다행이네요!』라고 하더니, ${you.name}의 손을 잡고 달리기 시작했다.`,
      );
      await era.printAndWait(
        `${you.name}의 머릿속에는 ${treve.name}가 숨기려 했던 사진이 계속 맴돌았다. 아주 찰나의 순간이었지만, 틀림없었다.`,
      );
      await era.printAndWait(`——그 사진에 찍혀 있던 것은 바로 ${you.name}(이)었다.`);
      await era.printAndWait(
        '특별한 일 없이 시간이 흘러, 어느새 하늘이 붉게 물들었다.',
      );
      await era.printAndWait(
        `${treve.name}의 안내를 받으며 프랑스의 명소들을 둘러보고, 맛있는 음식도 먹었다.`,
      );
      await era.printAndWait(`${treve.name}와의 대화도 무척 잘 통했고 즐거웠다.`);
      await era.printAndWait('하지만 오직 그 사진 한 장만큼은 머릿속에서 도저히 떠나지 않았다.');
      await era.printAndWait(
        `그것은 ${you.name}이(가) 카메라를 정면으로 바라보고 찍은 사진이 아니었으며, 그런 사진을 찍힌 기억조차 없었다.`,
      );
      await era.printAndWait(
        `분명 어둠 속에서 몰래 찍은 사진이었다. 문제는 ${treve.name}가 대체 왜 그런 사진을 가지고 있느냐는 점이었다.`,
      );
      await era.printAndWait(
        '우연히 그런 사진을 주운 걸까? 그렇다 쳐도 너무 소름 끼쳤다. 혹시 스토커인 걸까?',
      );
      await era.printAndWait(`하지만 다른 사람도 아닌 ${treve.name}라면 별문제 없을 거라 애써 스스로를 안심시켰다.`);
      await era.printAndWait(`어쨌든 나중에 ${treve.sex} 본인에게 직접 물어보면 될 일이었다.`);
      await era.printAndWait(
        `${treve.name}는 고개를 숙였다가 다시 ${you.name}을(를) 올려다보았다.`,
      );
      await era.printAndWait(
        `그 표정에는 한 줄기 슬픔이 어렸다. 하지만 ${treve.sex}의 얼굴에는 굳은 결의가 떠올라 있었다.`,
      );
      await treve.say_and_wait(['저, ', callname, '를——']);
      await era.printAndWait('그 순간—— 피부를 적시는 차가운 감각이 전해졌다.');
      await era.printAndWait(
        '뒤이어 하늘을 뒤덮은 먹구름에서 장대비가 쏟아지기 시작했고, 주변 사람들은 일제히 하늘을 올려다보았다.',
      );
      await treve.say_and_wait([callname, ', 이쪽이에요!']);
      await era.printAndWait(
        `쏟아지는 빗속에서 ${treve.name}는 서둘러 ${you.name}의 손을 잡아끌었다.`,
      );
      await era.printAndWait(
        `${treve.name}에게 손을 붙잡힌 채 정신없이 내달렸다. 고인 물웅덩이에 발자국이 파문을 그리며 번져갔고, 정신을 차렸을 때는 이미 어떤 방 앞에 도착해 있었다.`,
      );
      era.printButton('「트레브, 여긴 어디야?」', 1);
      await era.input();
      await era.printAndWait(
        `낯선 길이었지만 ${you.name}은(는) 이곳이 어떤 곳인지는 직감할 수 있었다—— 아파트였다. 하지만 정확히 누구의 방으로 불려온 것인지는 알 수 없었다.`,
      );
      await era.printAndWait(
        `고개를 돌려 옆에 선 ${treve.name}를 빤히 쳐다보자, ${treve.sex}는 황급히 시선을 회피했다.`,
      );
      await era.printAndWait(
        `갑작스러운 소나기 때문에 ${you.name}과(와) ${treve.name} 모두 물에 쫄딱 젖은 상태였다.`,
      );
      await era.printAndWait(`${treve.name}의 옷은 얇지 않았음에도 불구하고, 물에 젖어 살결이 투명하게 비치고 있었다.`);
      era.printButton('「이거 누구 방이야?」', 1);
      await era.input();
      await treve.say_and_wait('제 방이에요. 잠시만 기다려 주세요.');
      await era.printAndWait(
        `${treve.name}는 생긋 웃으며 그렇게 말했다. 그러고는 문을 열고 ${you.name}에게 수건을 건넨 뒤, 황급히 문을 쾅 닫아버렸다. 방 안에서 무언가를 거칠게 정리하는 소리가 요란하게 들려왔다. ${you.name}이(가) 건네받은 수건으로 얼굴을 닦으며 기다리기를 몇 분, ${treve.name}가 문틈으로 슬그머니 얼굴을 내밀었다.`,
      );
      await treve.say_and_wait(['들어오세요, ', callname, ', 어서 들어오세요.']);
      await treve.say_and_wait('조금 지저분하긴 하지만요.');
      await era.printAndWait(
        `등을 떠밀리듯 ${you.name}은(는) ${treve.name}의 방 안으로 발을 들여놓았다.`,
      );
      await era.printAndWait(
        `${treve.name}는 욕실로 향하려다 말고 급히 돌아서더니, 손가락으로 벽장을 가리켰다.`,
      );
      await treve.say_and_wait('저 벽장은 절대로 열어보시면 안 돼요.');
      era.printButton('「어, 어어. 알았어.」', 1);
      await era.input();
      await treve.say_and_wait('——절대로요!');
      await era.printAndWait(`${you.name}은(는) 영문을 모르겠다는 듯 고개를 끄덕였다.`);
      await era.printAndWait(
        '하지만 바로 그 순간, 벽장 아래 틈새로 사진 같은 종이 한 장이 툭 떨어져 내렸다.',
      );
      await you.say_and_wait('이게 뭐야?');
      await era.printAndWait(
        `벽장을 연 것도 아니니 괜찮겠지. 그런 가벼운 마음으로 ${you.name}이(가) 틈새에 떨어진 사진을 집어 든 순간, 척추를 타고 극심한 오한이 내달렸다.`,
      );
      await era.printAndWait(
        `손이 떨리기 시작했다. 사진 속 내용물은 다름 아닌 ${you.name}을(를) 몰래 촬영한 사진들이었다.`,
      );
      await you.say_and_wait('어라, 왜 이런 게……');
      await era.printAndWait(
        `게다가 이것은 아까 전에 ${treve.name}가 가지고 있던 사진과는 또 다른 종류였다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 충동적으로 벽장 문을 활짝 열어젖혔다—— 그리고 그 순간, 안에 펼쳐진 광경을 본 ${you.name}은(는) 숨이 턱 막혔다.`,
      );
      await you.say_and_wait('왜 여기…… 전부 내 사진밖에 없는 거야……?');
      await era.printAndWait(
        `벽장 내부의 한쪽 벽면을 빼곡하게 채우고 있는 사진들은, 전부 ${you.name}의 일거수일투족을 찍은 것들이었다.`,
      );
      await era.printAndWait(
        `언제 어디서 찍힌 것인지 일일이 따질 겨를도 없었다. ${you.name}은(는) 척추를 타고 올라오는 강한 공포에 사로잡혔다.`,
      );
      await era.printAndWait(
        '마른침을 삼키며 그 기괴한 광경에 압도되어 서서히 시선을 내리자, 허리 높이의 서랍장 위에 일기장 한 권이 놓여 있었다.',
      );
      await era.printAndWait(
        `떨리는 손으로 일기장을 펼쳐 대충 내용을 넘겨보았다. 아기자기하고 예쁜 프랑스어로 매일의 일과가 상세히 기록되어 있었다—— 그리고 그 내용은 전부 ${you.name}에 관한 이야기뿐이었다. ${you.name}이(가) ${treve.name}를 처음 만난 날부터 단 하루도 빠짐없이.`,
      );
      await treve.used_to_say_and_wait(
        '일본에서 온 트레이너. 정말 멋지고 다정하며 웃는 모습이 너무나 귀여운 사람. 노력하는 모습도, 서툰 프랑스어를 구사하는 모습도 전부 좋아하게 되어버렸다.',
      );
      await treve.used_to_say_and_wait(
        '트레이너는 밤색 털의 우마무스메를 좋아하는 것 같다. 나와 함께 있을 때 무척 즐거워 보였으니까.',
      );
      await treve.used_to_say_and_wait(
        '트레이너가 묵는 숙소는 ◯◯ 호텔이다. 나도 같이 묵으면 안 되는 걸까?',
      );
      await treve.used_to_say_and_wait([
        '오늘 드디어 ',
        callname,
        '가 말을 걸어주었다! 이런저런 이야기를 들을 수 있어서 정말 행복했다. 이 시간이 영원히 계속되었으면 좋겠다.',
      ]);
      await treve.used_to_say_and_wait(
        '좋아해. 너무 좋아해. 세상에서 제일 좋아해. 먹어버리고 싶을 정도로 좋아, 좋아좋아좋아좋아좋아좋아좋아——',
      );
      await era.printAndWait(`${you.name}은(는) 소름 끼치는 공포에 급히 일기장을 덮고 손으로 입을 틀어막았다.`);
      await era.printAndWait(
        '신변의 위협을 직감하고 이곳을 빠져나가기 위해 서둘러 뒤를 돌아보려던 찰나—— 머리 뒤쪽에서 둔기로 강하게 내리치는 듯한 충격이 전해졌다. 이내 시야가 사정없이 흔들리더니, 몸에 힘이 빠지며 그대로 바닥으로 쓰러졌다.',
      );
      await era.printAndWait(
        `의식을 잃어가며 마지막으로 들은 것은, 위에서 내려다보는 ${treve.name}의 가라앉은 목소리였다.`,
      );
      await treve.say_and_wait('결국 보셨군요……');
      await era.printAndWait(`그리고 ${you.name}의 의식은 암전되었다.`);
      era.drawLine();
      await era.printAndWait(
        `흐릿해지는 감각 속에서 깨어나 보니, ${you.name}은(는) 낯선 침대 위에 누워 있었다.`,
      );
      await era.printAndWait(
        '머리가 깨질 듯이 아팠다. 무슨 일이 일어난 건지 파악하기 위해, 일단 천장의 희미한 불빛을 응시하며 필사적으로 기억을 더듬었다.',
      );
      era.printButton(`「난 ${treve.name}의 방에 왔었고, 그리고……」`, 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 그제야 모든 기억이 떠올랐다.`);
      await era.printAndWait(
        `${treve.name}가 보여준 광기 어린 이상성이 떠오르자, ${you.name}의 의식이 순식간에 또렷해졌다.`,
      );
      await era.printAndWait(
        `동시에, ${you.name}은(는) 자신의 사지가 수갑에 채여 침대 틀에 단단히 고정되어 있다는 사실을 깨달았다.`,
      );
      era.printButton('「이게 뭐야? 왜 이래……?」', 1);
      await era.input();
      await era.printAndWait(
        `아무리 몸부림을 쳐봐도 사지를 파고드는 날카로운 통증만 더해질 뿐이었다. ${you.name}이(가) 구조를 요청하기 위해 다급히 주위를 둘러보던 그때, 등 뒤에서 익숙한 목소리가 들려왔다.`,
      );
      await treve.say_and_wait(['일어나셨네요, ', callname, '.']);
      await era.printAndWait(`${treve.name}였다.`);
      await era.printAndWait(
        `${treve.sex}는 침대 맡에 선 채, 칠흑같이 어두운 심해를 닮은 눈동자로 ${you.name}을(를) 묵묵히 내려다보고 있었다.`,
      );
      era.printButton('「트레브, 왜 이런 짓을 하는 거야!?」', 1);
      await era.input();
      await treve.say_and_wait([
        '보지 말라고 했잖아요……',
        callname,
        '이(가) 잘못한 거예요.',
      ]);
      await era.printAndWait(
        `${treve.name}는 결박당해 움직이지 못하는 ${you.name}의 손가락 사이에 자신의 손가락을 얽어맸다. 그리고 천천히 ${you.name}의 얼굴 가까이 다가와, 숨결이 닿을 듯한 거리에서 ${you.name}을(를) 빤히 응시했다.`,
      );
      await treve.say_and_wait([
        '전 ',
        callname,
        '에게 첫눈에 반해버렸어요. 그날 이후로 제 머릿속은 온통 ',
        callname,
        '에 대한 생각뿐이었죠. 가슴이 찢어질 만큼 아플 정도로, 정말 너무나도 좋아해요.',
      ]);
      await era.printAndWait(
        `${you.name}의 몸 위로 올라탄 ${treve.name}는 ${you.name}의 가슴팍에 살며시 손을 얹었다.`,
      );
      await era.printAndWait(
        `이대로 있으면 정말 위험하다며 본능이 비명을 질러댔지만, 아무리 발버둥을 쳐도 수갑은 요지부동이었다. 하물며 인간의 힘으로 ${treve.uma_sex_title}를 힘으로 찍어누르는 건 애초에 불가능에 가까웠다.`,
      );
      await treve.say_and_wait([
        callname,
        ', 당신은 이제 일본으로 돌아갈 수 없어요…… 영원히 저의 것, 오직 저만을 위해 살아가는 사람이 되어주실 거죠……?',
      ]);
      await era.printAndWait(
        `${treve.name}는 황홀한 미소를 지으며 요염한 눈빛을 보냈다. 발그레하게 상기된 뺨을 한 채 ${you.name}의 얼굴로 바짝 다가온 ${treve.sex}는, 이내 숨결마저 삼켜버릴 듯 밀착한 거리에서 나지막이 속삭였다.`,
      );
      await treve.say_and_wait([
        '전부 ',
        callname,
        ' 탓이라니까요? 절 이렇게 망가뜨려 놓은 ',
        callname,
        '가 나쁜 거예요.',
      ]);
      await era.printAndWait(
        `어떻게든 고개를 돌리려 했지만 ${treve.name}의 손아귀에 붙잡혀 꼼짝할 수 없었다. 이윽고 ${treve.name}는 거부할 틈도 주지 않고 ${you.name}에게 입을 맞췄다. 숨결이 뒤섞이고, ${treve.name}의 혀가 굳게 닫힌 ${you.name}의 입술을 비집고 들어와 ${you.name}의 혀에 얽혀들었다.`,
      );
      await treve.say_and_wait(['읍, 으응……', callname, '……']);
      await era.printAndWait(
        `질척한 타액 소리가 입안 가득 공허하게 울려 퍼졌다. 쾌감을 음미하듯, ${treve.name}는 집요하게 ${you.name}의 입술을 탐닉했다.`,
      );
      await era.printAndWait(
        `이윽고 숨이 가빠와 한계에 달했을 때가 되어서야, ${treve.sex}는 서서히 입술을 떼어냈다.`,
      );
      await treve.say_and_wait(`하아, 하아, ${treve.name}…… 이제——`);
      await era.printAndWait(
        `사고가 정지되어 간신히 말을 내뱉으려는 순간, ${treve.name}는 다시 한 번 입술을 겹쳐오며 ${you.name}의 유언 같은 반발을 차단해버렸다.`,
      );
      await era.printAndWait(
        `숨이 막혀왔다. 아무리 도망치려 발버둥 쳐도, ${treve.name}는 결코 ${you.name}을(를) 놓아줄 생각이 없어 보였다.`,
      );
      await era.printAndWait(
        `끝없이, 영원토록, 한계조차 모르는 ${treve.name}의 집착 어린 사랑은 입술을 포개고 혀를 섞으며 끊임없이 맹목적인 애정을 갈구했다.`,
      );
      await era.printAndWait(
        `마침내 입술을 뗀 ${treve.name}는 가느다랗게 실을 그리며 이어지는 타액을 삼킨 뒤, 잔혹하리만치 아름다운 미소를 지었다.`,
      );
      await treve.say_and_wait([
        callname,
        '는 제 거예요. 저 말고 그 누구도 바라봐선 안 돼요. 일본 같은 곳엔 절대 안 보내줄 거니까요. 영원히, 언제까지나, 평생 당신만을 사랑할게요.',
      ]);
      await era.printAndWait(
        `${treve.name}는 ${you.name}의 뺨을 다정하게 감싸 안으며, 주체할 수 없는 격정의 여운을 담아 다시금 입술을 겹쳐왔다.`,
      );
      era.drawLine();
      await era.printAndWait('며칠 뒤, 정적만이 감도는 방 안에 켜진 TV에서 뉴스가 흘러나왔다.');
      await you.say_as_unknown_and_wait(
        '——프랑스를 방문 중이던 일본인 트레이너가 돌연 행방불명되었습니다. 현재 현지 경찰과 공조하여 행방을 쫓고 있으나, 이렇다 할 단서가 발견되지 않아 수사에 난항을 겪고 있습니다.',
      );
      await treve.say_as_unknown_and_wait('후후……');
    };
    f.title = title;
    return f;
  })(),

  // [번역 완료] o_c_pray
  async o_c_pray(treve, you, callname, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      `은(는) ${treve.name}에게 근처 신사에 가자고 제안했고, ${treve.sex}는 기쁘게 고개를 끄덕였다.`,
    ]);
    await treve.say_and_wait('무슨 생각을 그렇게 하세요? 영 집중하지 못하시는 것 같아요.');
    await treve.say_and_wait('저 먼저 운세 뽑으러 갈게요!');
    if (dice < 0.5) {
      await treve.say_and_wait(
        `【대길】이 나왔어요! 한 번 더 뽑아도 될까요? 이건 ${callname}에게 선물하고 싶거든요.`,
      );
    } else {
      await treve.say_and_wait('으아아, 이런 건 역시 한 번 경험해 보는 걸로 족해요……');
    }
  },

  // [번역 완료] o_r_fishing
  async o_r_fishing(treve, you) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '드디어 큰 물고기가 걸려들었네요…… 얼마 전에도 꽤 괜찮은 녀석을 낚으셨다고요? 거짓말, 전 보지도 못했는걸요.',
        ),
    ];
    if (you.sex_code === 1 && treve.sex_code !== 1) {
      buffer.push(() =>
        treve.say_and_wait(
          `한 마리도 안 낚이네요…… 흥, ${you.actual_name} 나으리께서 이 소녀에게 하사해 주신 걸로 치죠.`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_r_walking
  async o_r_walking(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '안심하고 제 손을 잡으세요. 설령 멀리 날아가 버려도 괜찮으니까요.',
        ),
      () =>
        treve.say_and_wait('그으…… 로맨스 알레르기에 눈치 하나도 없는 당신 때문에 속 터져 죽겠어요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_arcade
  async o_s_arcade(treve, you, callname, call_target) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '그거 아세요? 프랑스의 오락실에는 연인들뿐만 아니라 귀여운 꼬마 소꿉친구들도 자주 보인답니다.',
        ),
      () =>
        treve.say_and_wait([
          '으윽, 져버렸어요……',
          you.get_colored_actual_name(),
          ', 저기 있는 【펀치력 측정기】에서 다시 한판 붙어요.',
        ]),
    ];
    if (call_target) {
      buffer.push(() =>
        treve.say_and_wait([
          callname,
          '!',
          call_target,
          ' 인형이 있네요! 하나 뽑아도 될까요?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_dating
  async o_s_dating(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '당신이 평소에 하루를 어떻게 보내는지 제대로 지켜봐야겠어요.',
        ),
      () => treve.say_and_wait('왜 제겐 꽃을 안 주시나요? 저도 꽃을 좋아한단 말이에요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_drawing
  async o_s_drawing(treve, callname) {
    const buffer = [
      () => treve.say_and_wait(`와아아…… ${callname}! 제 용돈 좀 가불해 주세요.`),
      () => treve.say_and_wait('파리 4박 5일 호화 여행…… 정말 당첨되면 어떻게 할까요?'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_ktv
  async o_s_ktv(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '당신의 노래 솜씨는 정말 매혹적이네요. 어쩌면 《기차는 떠나고》나 《장밋빛 인생》 같은 곡을 배워 보시는 게 어떨까요……',
        ),
      () =>
        treve.say_and_wait(
          '미리 말해 두겠는데, 전 목이 너무 아파서 여기서 당신이랑 같이 부르는 건……',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_movie
  async o_s_movie(treve) {
    const buffer = [
      () => treve.say_and_wait('몰입감이 뛰어난 수작이네요. impeccable à tous les sens.'),
    ];
    if (treve.sex_code !== 1 && era.get('cflag:0:性别') === 1) {
      buffer.push(() =>
        treve.say_and_wait(
          '스승님께서 저희에게 딱 어울리는 고전 영화가 있다고 하셨어요. 《Un homme et une femme》라는 제목인데…… 남자 하나와 여자 하나라니, 참 묘한 제목이죠, 하하하……',
        ),
      );
    }
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_restaurant
  async o_s_restaurant(treve) {
    const buffer = [
      () => treve.say_and_wait('이런 레스토랑은 꼭 연인들이 데이트하러 오는 곳 같네요……'),
      () =>
        treve.say_and_wait(
          '이런 멋진 곳은 어떻게 찾으신 거예요?! 저렴한데 양도 많아서 도저히 다 못 먹겠어요!',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] o_s_shopping
  async o_s_shopping(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `수박이…… 왜 이렇게 비싸죠?! 게다가 조각으로 팔다니, 이게 말이 되나요, ${callname}?`,
        ),
      () => treve.say_and_wait('전 이것저것 고르는 걸 잘 못해서……'),
      () => treve.say_and_wait('오늘 마침 할인 행사를 하네요, chanceux~'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_cook
  async office_cook(treve) {
    const buffer = [
      () => treve.say_and_wait('프랑스 요리는 말이죠…… 아하하, 지금은 됐어요.'),
      () => treve.say_and_wait('으윽, 누군가가 속을 꽉 움켜쥐는 것 같아요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] office_study
  async office_study(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '이상하네요, 당신도 프랑스어를 배울 때 이렇게 더듬거리셨나요? 아니라고요? ……얄미운 천재 같으니.',
        ),
      () =>
        treve.say_and_wait(
          '당신이 곁에 있으면 더 잘 뛸 수 있을 것 같아요…… 어때요, 나쁘지 않죠?',
        ),
      () => treve.say_and_wait('잠깐 멈춰요! 아무리 변태라지만 이런 식으로 지도하는 게 어디 있어요!'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_dating
  async s_a_dating(treve) {
    const buffer = [
      () => treve.say_and_wait('무서울 정도로 능숙하시네요…… 혹시 이게 본업이신 건 아니겠죠!'),
      () =>
        treve.say_and_wait('지금에 비하면, 예전의 삶은 그저 『죽음을 기다리는 것』뿐이었다고 할 수 있겠네요.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_a_tree_hollow
  async s_a_tree_hollow(treve) {
    const buffer = [
      () => treve.say_and_wait('멀리서 전하는 나의 키스는 씁쓸하고도 애달프구나.'),
      () => treve.say_and_wait('우리의 운명은 험난하고도 굴곡지구나.'),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] s_r_lunch
  async s_r_lunch(treve) {
    const buffer = [
      () => treve.say_and_wait('짜잔! 오늘 점심의 퀄리티는 꽤 훌륭하답니다.'),
      () =>
        treve.say_and_wait(
          '랍스터, 대하, 구운 새우, 홍합에 구운 오징어, 곁들임 메뉴는 감자튀김과 해물 솥밥이에요. 몸보신 톡톡히 하세요.',
        ),
    ];
    await get_random_entry(buffer)();
  },

  // [번역 완료] select
  select(treve, callname) {
    const buffer = [() => treve.say(`Bonjour~ 지시사항이 있나요, ${callname}?`)];
    if (era.get('love:205') >= 50) {
      buffer.push(() => treve.say('부르실 때 이런 곳을 찌르면 안 돼요.'));
    }
    if (era.get('love:205') >= 75) {
      buffer.push(() => treve.say('후후, 괜찮아요.'));
    }
    get_random_entry(buffer)();
  },

  // [번역 완료] talk
  async talk(treve) {
    const buffer = [];
    if (era.get('base:205:体力') < 0.3 * era.get('maxbase:205:体力')) {
      buffer.push(
        () => treve.say_and_wait('품을 잠시 빌려주실 수 있나요?'),
        () => treve.say_and_wait('지금은 걷는 것조차 힘들답니다~'),
      );
    } else {
      switch (era.get('cflag:205:干劲')) {
        case 2:
          buffer.push(() =>
            treve.say_and_wait(
              '방금 건 저 혼자 한 훈련이에요, 훈련이라니까요.',
            ),
          );
          era
            .getAddedCharacters()
            .some((cid) => cid !== 205 && era.get(`love:${cid}`) >= 50) &&
            buffer.push(() =>
              treve.say_and_wait(
                `당신과 ${treve.couple_title}가 어떻게 만났는지 제게 이야기해 주시면 안 되나요?`,
              ),
            );
          era.get('love:205') >= 50 &&
            buffer.push(() =>
              treve.say_and_wait(
                '당신을 『내 연인』이라고 부를 수 있다니, 정말 기분이 좋아요.',
              ),
            );
          break;
        case 1:
          buffer.push(
            () =>
              treve.say_and_wait('누구에게나 저마다의 이야기가 있어서, 전 그런 얘기를 듣는 걸 무척 좋아해요.'),
            () => treve.say_and_wait('앞으로도 계속 절 보살펴 주셨으면 좋겠어요.'),
          );
          break;
        case 0:
          buffer.push(
            () => treve.say_and_wait('당신을 기다리는 건 정말 힘들었어요.'),
            () =>
              treve.say_and_wait(
                '제가 『초보』 트레이너 씨를 위해 시범을 보여 드려야겠어요.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              treve.say_and_wait('만약 절 안아 주신다면 제 컨디션이 조금은 나아질지도 몰라요.'),
            () => treve.say_and_wait('제 열정이 흔적도 없이, 소리 소문도 없이 사라져 버렸어요……'),
          );
          break;
        case -2:
          buffer.push(
            () => treve.say_and_wait('절 쉬게 해 주신다면 더할 나위 없이 좋겠어요.'),
            () => treve.say_and_wait('죽음이란 인생의 세금 같은 것……'),
            () =>
              treve.say_and_wait(
                '당신은 단순한 트레이너가 아니라 여심을 뒤흔드는 바람둥이예요……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
};
