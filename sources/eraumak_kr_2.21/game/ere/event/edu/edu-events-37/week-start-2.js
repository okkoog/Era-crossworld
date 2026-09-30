const era = require('#/era-electron');

const sys_hurt_uma = require('#/system/chara/sys-hurt-uma');
const { sys_reg_race } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { buff_colors } = require('#/data/color-const');
const status_desc = require('#/data/desc/status.json');
const { location_enum } = require('#/data/locations');
const { race_enum } = require('#/data/race/race-const');

/** @param {Record<string,function(CharaTalk,string,string,{wait:boolean},function):Promise<*>>} handlers */
module.exports = (handlers) => {
  handlers[47 + 29] = async (flash, your_name, callname, flags, cb) => {
    if (
      (era.get('cflag:37:위치') && era.get('cflag:0:위치')) !==
      location_enum.beach
    ) {
      cb();
      return;
    }
    await print_event_name('마음을 나누는 대화 · 1', flash);
    await era.printAndWait(
      '합숙이란, 트레센 학원 주도로 실력 향상을 목적으로 하는, 바닷가에서 진행되는 여름 전용 활동을 말한다.',
    );
    await flash.say_and_wait(
      '이게 일본의 바다군요. 독일 쪽과는 역시 꽤 차이가 있네요.',
    );
    await era.printAndWait(
      `월초, 학원 전용 버스에서 내려 눈앞에 펼쳐진 푸른 바다를 보며 에이신 플래시가 감탄했다.`,
    );
    era.printButton('「놀러 가고 싶어?」', 1);
    await era.input();
    await flash.say_and_wait('아, 아뇨. 괜찮습니다.');
    await era.printAndWait(
      `하지만 다음 순간, ${your_name}의 제안을 들은 ${flash.sex}는 고개를 저었다.`,
    );
    await flash.say_and_wait(
      '무척 마음이 끌리는 선택지이긴 합니다만, 지금은 훈련을 최우선으로 삼아야 합니다.',
    );
    await era.printAndWait('말을 마치며, 에이신 플래시는 고개를 숙여 자신의 두 다리를 바라보았다.');
    await flash.say_and_wait(
      '국화상의 개최가 코앞으로 다가왔습니다. 승리하기 위해서는 단 하나의 기회라도 놓쳐서는 안 돼요.',
    );
    await era.printAndWait(
      `그동안의 휴식 덕분에 ${flash.sex}의 병세는 처음보다 크게 완화되어 있었다.`,
    );
    await era.printAndWait('덕분에 에이신 플래시의 기분도 꽤 밝아진 듯 보였다.');
    await era.printAndWait(
      `이미 세워둔 계획이 더 이상 어긋나지 않을 거라 믿는 ${flash.sex}는 다시 국화상을 목표로 준비하려 한다.`,
    );
    era.printButton('「그 부분에 대해서 말인데.」', 1);
    await era.input();
    await era.printAndWait(
      `${flash.sex}의 열정적인 모습을 보며, ${your_name}은(는) 이제 때가 되었다고 생각했다.`,
    );
    era.printButton('「네게 할 말이 있어.」', 1);
    await era.input();
    era.drawLine();
    await era.printAndWait(
      `사실 트레이너의 관점에서 볼 때, 에이신 플래시의 현재 상태는 ${your_name}에게 조금 난처한 상황이었다.`,
    );
    await era.printAndWait(
      `표면적으로 ${flash.sex}의 회복은 부정할 수 없는 사실이었고, ${your_name} 역시 ${flash.sex}가 경기장을 마음껏 달리는 모습을 보고 싶었다.`,
    );
    await flash.say_and_wait('국화상에 관한 이야기인가요?');
    era.printButton('「응.」', 1);
    await era.input();
    await era.printAndWait(
      `하지만 신중하게 생각하면, 근육 속에 뿌리 깊게 박힌 피로는 그렇게 쉽게 사라지는 것이 아니었다. ${your_name}은(는) 레이스를 준비하며 고강도 훈련을 이어가는 동안 통증이 재발하지 않으리라 보장할 수 없었다.`,
    );
    await flash.say_and_wait(
      '……당신은 그날 약속하셨죠. 국화상 전까지 회복한다면 출주를 허락해주겠다고요.',
    );
    era.printButton('「그래.」', 1);
    await era.input();
    await era.printAndWait(
      `바꿔 말하면, ${your_name}의 시점에서는 국화상을 포기하고 목표를 그 이후의 재팬 컵이나 아리마 기념으로 수정하여, 늘어난 공백기 동안 신체의 불안 요소를 완전히 해결하는 것이 최선이었다.`,
    );
    await flash.say_and_wait('그렇다면 지금이야말로 우위를 점해야 할 때입니다.');
    await era.printAndWait(
      `합숙소 내에서, ${your_name}이(가) 다음에 무슨 말을 할지 짐작한 듯 에이신 플래시의 태도는 매우 단호했다.`,
    );
    era.printButton('「내 말을 오해했나 본데, 널 말리러 온 게 아니야.」', 1);
    await era.input();
    await flash.say_and_wait('에?');
    await era.printAndWait(`하지만 이번에는 ${flash.sex}의 예상이 빗나갔다.`);
    era.printButton(
      '「국화상 참가 여부가 나에게도 양날의 검 같은 선택지라는 건 인정하지만.」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `이어진 시간 동안, ${your_name}은(는) ${flash.sex}에게 자신의 고민을 털어놓았다. ${flash.sex}가 꿈을 이루길 바라면서도, 그 과정에서 다치는 것은 보고 싶지 않은 이성과 감성 사이의 모순된 심정을 고백했다.`,
    );
    await flash.say_and_wait('………');
    await era.printAndWait(
      `에이신 플래시는 총명한 아이였기에, ${your_name}이(가) ${flash.sex}를 이해하듯 ${flash.sex} 역시 ${your_name}의 처지를 충분히 이해할 수 있었다.`,
    );
    era.printButton(
      '「네 상태를 안 뒤로 계속 망설여왔어. 하지만 어쩌면 이런 주저함이야말로 가장 큰 실수일지도 몰라.」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `말을 마치며 ${your_name}은(는) 손을 뻗어, 만남의 상징인 훈장을 ${flash.sex}의 눈앞에 내밀었다.`,
    );
    await flash.say_and_wait(`${callname}……`);
    await era.printAndWait(
      `에이신 플래시는 훈장을 한 번 내려다보고는, 다시 고개를 들어 ${your_name}을(를) 바라보았다.`,
    );
    await flash.say_and_wait('………');
    await era.printAndWait(`${flash.sex}는 입을 달싹이며 말을 망설이는 듯했다.`);
    era.printButton(
      '「만약 내가 결정할 수 없다면, 차라리 네가 결정해줬으면 해.」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}의 어깨를 다독이며 미소를 지었다.`,
    );
    await era.printAndWait(
      `${flash.get_uma_sex_title()}의 문제에 대해 트레이너의 관점에서 답을 낼 수 없다면, 당사자에게 맡기는 것도 방법이다.`,
    );
    await era.printAndWait('걱정할 것 없어. 신뢰는 서로를 향하는 것이고, 일심동체란 바로 이런 거니까.');
    await era.printAndWait('망설일 필요도 없어. 이건 회피가 아니야. 왜냐하면——');
    era.printButton('「네가 어떤 선택을 하든, 내가 끝까지 함께 책임질 테니까.」', 1);
    await era.input();
    await flash.say_and_wait('!');
    await era.printAndWait(
      `노을진 방 안에서, 이국에서 온 ${flash.get_teen_sex_title()}는 ${your_name}의 말에 잠시 얼어붙었다.`,
    );
    await era.printAndWait(
      `주변의 시간이 멈춘 듯했고, 찰나의 홍조 외에는 ${flash.sex}의 표정에서 어떤 동요도 읽을 수 없었다.`,
    );
    await era.printAndWait(
      `하지만 그사이 ${flash.sex}의 맑고 투명한 푸른 눈동자는 침묵 속에 ${your_name}을(를) 계속 응시했고, 그 눈빛 속에는 묘한 빛이 감돌았다.`,
    );
    await flash.say_and_wait('……저……');
    await era.printAndWait('십여 초가 지난 후에야 에이신 플래시가 다시 입을 열었다.');
    await flash.say_and_wait(
      '……어쩌면 당신 말이 맞을지도 모르겠네요. 제 스스로 이 길을 결정하는 것이 우리 모두에게 최선의 선택일 거예요.',
    );
    await era.printAndWait(
      `그러나 아까 전의 단호함과 달리, 지금 ${flash.sex}의 말투에는 다소 망설임이 섞여 있었다.`,
    );
    await flash.say_and_wait('그러니 제게 시간을 조금만 더 주세요. 진지하게 고민해보고 싶습니다.');
    await era.printAndWait(
      `말을 마친 ${flash.sex}는 ${your_name}에게 깊게, 아주 깊게 고개를 숙여 인사했다.`,
    );
    await flash.say_and_wait(
      '합숙이 끝나는 날에 답을 드릴게요. 그때까지는 원래 계획대로 진행해주세요.',
    );
    await era.printAndWait(
      `고개를 든 ${flash.sex}의 얼굴에는 ${your_name}을(를) 향한 달콤한 미소가 머물러 있었다.`,
    );
    era.println();
    flags.wait ||= sys_like_chara(37, 0, 30);
  };

  handlers[95 + 1] = async (flash, your_name, callname, flags) => {
    const fuji = get_chara_talk(5);
    await print_event_name('새해 참배', flash);
    await era.printAndWait('또다시 새로운 봄이 찾아왔다.');
    await era.printAndWait('정월.');
    await say_by_passer_by_and_wait(
      `사회자`,
      `최강 세대 돌입?! 유명 ${flash.get_uma_sex_title()}의 화려한 부활!`,
    );
    await era.printAndWait(
      `${your_name}과(와) 에이신 플래시가 평온하게 보내야 할 오전의 정적은 TV에서 흘러나온 갑작스러운 뉴스 속보로 깨졌다.`,
    );
    await say_by_passer_by_and_wait(
      `사회자`,
      `얼마 전 재팬 컵과 아리마 기념에서 오랜만에 모습을 드러냈던 유명 ${flash.get_uma_sex_title()}들이 방금 기자회견을 가졌습니다.`,
    );
    await say_by_passer_by_and_wait(
      `사회자`,
      `${flash.sex}들은 올해 열리는 모든 G1 레이스에 순차적으로 출주하겠다는 의사를 명확히 밝혔습니다!!!`,
    );
    await say_by_passer_by_and_wait(
      '사회자',
      '현장에 모인 전원이 각자의 분야에서 거대한 업적을 남긴 실력자들이라는 점을 고려하면, 올해 트윙클 시리즈에 얼마나 큰 파장이 일어날지 짐작조차 되지 않습니다.',
    );
    await say_by_passer_by_and_wait('사회자', '그럼 현장에 나가 있는 기자를 연결해 보겠습니다——');
    await say_by_passer_by_and_wait(
      `기자`,
      `후지 키세키${flash.get_adult_sex_title()}, 이 시점에 G1급 중상 레이스에 출주하겠다고 발표하신 의도는 무엇인가요?`,
    );
    await fuji.say_and_wait('음…… 구체적인 의도를 말로 설명하기는 어렵지만, 『높은 벽』이 되기 위해서라고 해두죠.');
    await say_by_passer_by_and_wait('기자', '높은 벽이요?');
    await fuji.say_and_wait('후배들 앞에 서는 높은 벽이 되기 위해, 우리는 이 레이스에 참여하는 겁니다.');
    await fuji.say_and_wait(
      `그러니 마음껏 도전해 보세요. 여기서 당신들을 기다리고 있을게요.`,
    );
    await era.printAndWait('「삑.」');
    await era.printAndWait(
      '화면 속의 후지 키세키가 카메라를 향해 손짓을 하는 장면에서 영상이 멈췄다.',
    );
    await flash.say_and_wait('……높은 벽, 인가요?');
    await era.printAndWait('뉴스를 지켜보던 에이신 플래시는 미미하게 미간을 찌푸렸다.');
    await flash.say_and_wait(
      '두렵지는 않지만, 왜 하필 이 시점에 그런 결정을 내린 걸까요? 그저 후배들의 앞길을 가로막기 위해서?',
    );
    era.printButton('「『시련』을 주겠다는 뜻 아닐까?」', 1);
    await era.input();
    await era.printAndWait(
      `하지만 ${your_name}은(는) 후지 키세키의 마지막 말 속에 담긴 의미를 예리하게 포착해냈다.`,
    );
    await flash.say_and_wait('시련요?');
    await era.printAndWait(
      `${your_name}의 말에 에이신 플래시는 이해가 잘 안 간다는 듯 고개를 갸웃거렸다.`,
    );
    era.printButton(
      '「벽은 가로막는 역할을 하기도 하지만, 능력이 있는 사람은 그걸 뛰어넘을 수도 있으니까.」',
      1,
    );
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 자신의 견해를 ${flash.sex}에게 차근차근 설명해주었다.`,
    );
    await flash.say_and_wait(
      `과연 그렇군요. 후지 키세키 씨의 본의는 후배들이 ${flash.sex}들에게 도전하는 과정에서 성장하기를 바라는 것이었네요.`,
    );
    await era.printAndWait('에이신 플래시는 고개를 끄덕이며 납득한 표정을 지었다.');
    era.printButton('「재팬 컵과 아리마 기념 때의 마음가짐으로 임하자.」', 1);
    await era.input();
    await flash.say_and_wait('네!');
    await era.printAndWait(`다음 순간, ${flash.sex}는 자신감 넘치게 대답했다.`);
    await era.printAndWait('「따르릉——」');
    await flash.say_and_wait('?');
    await era.printAndWait(
      `그때, ${flash.sex}의 스마트폰에서 연락을 알리는 벨소리가 울려 퍼졌다.`,
    );
    await flash.say_and_wait('……어머니의 전화?');
    era.drawLine();
    await flash.say_and_wait('………');
    await era.printAndWait('플래시와 부모님의 통화가 끝났다.');
    era.printButton('「무슨 일이야?」', 1);
    await era.input();
    await era.printAndWait(
      `전화를 내려놓은 ${flash.sex}는 조금 전의 여유로운 모습은 온데간데없이 무척 진지해 보였다.`,
    );
    await flash.say_and_wait(
      '아버지와 어머니께서 내년 10월 하순에 제 레이스를 보러 일본에 오시겠다고 하셨어요.',
    );
    era.printButton('「10월 하순?」', 1);
    await era.input();
    await flash.say_and_wait(
      '네. 이미 결정된 계획에 따르면 그 시기의 레이스는 바로 가을 텐노상입니다.',
    );
    era.printButton('「생각보다 빠른걸.」', 1);
    await era.input();
    await era.printAndWait(
      `에이신 플래시의 원래 생각은 일본에서 여러 G1 타이틀을 획득한 뒤 고향으로 돌아가 부모님께 자신의 성장을 증명하는 것이었다.`,
    );
    await flash.say_and_wait(
      '저도 그렇게 생각해요. 부모님께서 직접 일본까지 오실 시간이 있을 줄은 몰랐거든요. 두 분 다 평소에 무척 바쁘신 분들이라.',
    );
    era.printButton(
      `「어떻게 해서든 자기 ${
        flash.sex_code - 1 ? '딸' : '아들'
      }이 경기장을 달리는 늠름한 모습을 보고 싶으셨겠지.」`,
      1,
    );
    await era.input();
    await flash.say_and_wait(
      '후훗~ 뭐, 생각을 바꿔보면 이것도 나쁘지 않은 일일지도 모르겠네요.',
    );
    await era.printAndWait('말을 하며 에이신 플래시는 주황색 마커를 꺼내 계획서를 수정하기 시작했다.');
    await flash.say_and_wait(
      '부모님께서 직접 지켜보시는 가운데 우승하는 것보다 두 분을 더 자랑스럽게 해드릴 일이 또 어디 있겠어요?',
    );
    await era.printAndWait(
      `${your_name}은(는) ${flash.sex}가 가을 텐노상 출주 예정 칸 옆에 강조의 의미로 동그라미를 여러 개 그리는 것을 보았다.`,
    );
    era.printButton('「그렇네.」', 1);
    await era.input();
    await era.printAndWait(`${your_name}은(는) 고개를 끄덕이며 ${flash.sex}의 생각에 동조했다.`);
    await era.printAndWait(
      `가을 텐노상에서 승리할 수만 있다면 에이신 플래시의 꿈은 이루어진다. 그리고 그것이 바로 ${your_name}이(가) 트레이너로서 존재하는 목적이기도 했다.`,
    );
    await era.printAndWait(
      `그렇다면 ${flash.sex}가 그 텐노상 방패를 얻는 과정이 조금 더 순조로울 수 있도록, ${your_name}은(는) 결심했다——`,
    );
    era.printButton('「신사에 가서 기원하자!」（전 능력치 +20）', 1);
    era.printButton(`「미래의 계획을 변경할까?」（【반드시 해야 할 일】 상태 획득）`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait(
        '기원이란 본래 사람들이 신에게 자신의 소원을 전하며 가호을 받기를 바라는 의식에서 시작되었다.',
      );
      await era.printAndWait(
        '그리고 시대가 흐르면서 이 행위에는 서서히 다른 의미들이 부여되기 시작했다.',
      );
      await era.printAndWait(
        '오늘날 기원은 사람들이 더 나은 삶을 향해 나아가는 염원의 매개체가 되었다.',
      );
      await flash.say_and_wait(
        '음, 비록 이것이 레이스 결과에 실질적인 도움이 된다고는 생각하지 않지만……',
      );
      await era.printAndWait(
        `${your_name}의 제안에 에이신 플래시는 잠시 고민하더니 천천히 고개를 끄덕였다.`,
      );
      await flash.say_and_wait(
        '하지만 당신 말이 맞아요. 자신이 원하는 미래를 꿈꾸는 것은 언제나 좋은 일이니까요.',
      );
      await era.printAndWait(
        `말을 마친 ${flash.sex}는 펼쳐두었던 계획서를 덮고 자리에서 일어났다.`,
      );
      await flash.say_and_wait('게다가 오늘은 정월이니 신사 쪽도 무척 활기차겠네요.');
      era.printButton('「근처에서 축제라도 할지 모르지.」', 1);
      await era.input();
      await flash.say_and_wait('축제라니…… 후훗~');
      await era.printAndWait('에이신 플래시는 가볍게 웃으며 흥미를 보였다.');
      await flash.say_and_wait(
        `앞으로 1년간의 계획에 대한 축복이자 연휴 기간의 기분 전환이라 생각하고 다녀오죠. 출발해요, ${callname}.`,
      );
      await era.printAndWait(
        `말을 마친 ${flash.sex}는 ${your_name}의 손을 잡고 밖으로 나가자는 신호를 보냈다.`,
      );
      era.println();
      flags.wait ||= get_attr_and_print_in_event(
        37,
        new Array(5).fill(20),
        0,
        JSON.parse('{"체력":500}'),
      );
    } else {
      await era.printAndWait(
        '에이신 플래시의 현재 실력을 믿지 못하는 것은 아니지만, 목표 달성이라는 측면만 놓고 본다면.',
      );
      await era.printAndWait(
        `선배들과 계속 고강도 대결을 펼쳐야 해서 몸에 무리가 가기 쉬운 G1 레이스보다는, 분위기가 비교적 완만한 G2나 G3 레이스가 상태를 유지하며 실력을 온전하게 보존하는 데 더 적합하지 않을까.`,
      );
      await flash.say_and_wait('음, 객관적으로 보면 나쁘지 않은 선택지입니다만……');
      await era.printAndWait(
        `${your_name}이(가) 이 생각을 에이신 플래시에게 들려주자, ${flash.sex}는 잠시 생각하더니 고개를 저었다.`,
      );
      await flash.say_and_wait(
        `제 부모님께서는 당신의 ${
          flash.sex_code - 1 ? '딸' : '아들'
        }이 그런 요령을 부려 승리를 따내는 걸 결코 바라지 않으실 거예요.`,
      );
      await era.printAndWait(`말을 하며 ${flash.sex}는 계획서를 덮고 진지하게 말했다.`);
      await flash.say_and_wait(
        '승리란 당당하게 쟁취했을 때 비로소 그 의미가 있는 법이니까요.',
      );
      await flash.say_and_wait(
        '시련이라면 마주하고, 벽이라면 뛰어넘는다. 오직 그런 방식으로 이루어낸 꿈만이 떳떳할 수 있습니다.',
      );
      era.printButton('「정말 기사도 정신이 넘치는 생각이네.」', 1);
      await era.input();
      await era.printAndWait(
        `${flash.sex}의 태도를 본 ${your_name}은(는) 무심코 감탄 섞인 말을 내뱉었다.`,
      );
      await flash.say_and_wait('후훗~ 칭찬 감사합니다.');
      await flash.say_and_wait(
        '아마 이런 생각을 가지고 있었기에 초등학생 때 학급 연극에서 기사 역할로 뽑혔던 것일지도 모르겠네요.',
      );
      await era.printAndWait(
        `말을 마친 에이신 플래시는 활짝 미소 지었다. 어느새 ${flash.sex}의 표정은 다시 평소처럼 여유롭고 온화해져 있었다.`,
      );
      era.println();
      get_attr_and_print_in_event(37, undefined, 0, JSON.parse('{"체력":500}'));
      era.print([
        flash.get_colored_name(),
        '가 ',
        {
          color: buff_colors[1],
          content: '[반드시 해야 할 일]',
          title: status_desc['반드시 해야 할 일'],
        },
        '에 대한 각오를 다졌다!',
      ]);
      era.set('status:37:반드시 해야 할 일', 1);
      flags.wait = true;
    }
    era.set('cflag:37:축제이벤트표시', 0);
  };

  handlers[95 + 14] = async (flash) => {
    era.set('cflag:37:축제이벤트표시', 0);
    const gold_ship = get_chara_talk(7);
    const festa = get_chara_talk(49);
    await print_event_name('팬 대감사제', flash);
    await era.printAndWait('4월, 봄의 팬 대감사제 이벤트 날이 밝았다.');
    await era.printAndWait(
      `오늘 ${flash.get_uma_sex_title()}들은 팬들과 함께 즐길 수 있는 다양한 활동에 참여한다.`,
    );
    await say_by_passer_by_and_wait(
      `사회자`,
      `이어서 G구역의 도전자들을 살펴보겠습니다. 에이신 플래시, 나카야마 페스타, 그리고 골드 쉽 입니다!`,
    );
    await say_by_passer_by_and_wait(
      `사회자`,
      `${flash.sex}들이 도전할 경기는 바로—— 팬 업고 달리기!`,
    );
    await say_by_passer_by_and_wait(
      `사회자`,
      `규칙은 간단합니다. 팬과 함께 가장 먼저 결승선을 통과하는 ${flash.get_uma_sex_title()}가 우승입니다.`,
    );
    await say_by_passer_by_and_wait(
      '사회자',
      '과연 어떤 콤비가 승리를 거머쥐게 될지, 기대해 주십시오!',
    );
    await era.printAndWait(
      '현재 트레센 학원의 운동장은 사회자의 열정적인 멘트로 분위기가 달아올라 인파의 함성으로 가득 찼다.',
    );
    await era.printAndWait('그리고 바로——');
    await gold_ship.say_and_wait('최후의 승자는 당연히 이 몸이지! 고루시 님의 운명적인——');
    await era.printAndWait(
      '신속한 움직임으로 선수를 친 골드 쉽이 앞줄에 있던 관객 한 명을 다짜고짜 끌어냈다.',
    );
    await gold_ship.say_and_wait(`쌀•자•루! 너로 정했다!`);
    await say_by_passer_by_and_wait(
      '골드 쉽의 팬',
      '으아아아?! 갑자기 쌀가마니 들기냐고?! 너무 높고 빠르고 무서워!',
    );
    await festa.say_and_wait('음……');
    await era.printAndWait('옆에 있던 나카야마 페스타도 이에 질세라 움직였다.');
    await festa.say_and_wait(`야, 거기 너.`);
    await era.printAndWait(
      `${flash.sex}는 주위를 훑어보더니 인파 사이에 서 있던 팬 한 명을 지목했다.`,
    );
    await festa.say_and_wait('운이 트일 것 같은 얼굴이네. 나랑 같이 좀 뛰어보자고.');
    await say_by_passer_by_and_wait(
      '나카야마 페스타의 팬',
      '어어, 와아…… 한 손으로 날 들어 올렸어…… 대단하다!',
    );
    await flash.say_and_wait('음……');
    await era.printAndWait(`${flash.sex}들과 달리 에이신 플래시는 무척 신중해 보였다.`);
    await era.printAndWait(`${flash.sex}는 떠들썩한 인파 속을 잠시 관찰했다.`);
    await flash.say_and_wait('저기…… 혹시 절 도와주실 수 있을까요?');
    await era.printAndWait(
      `결국 ${flash.sex}는 인파 구석에서 흑백 배색의 깃발을 들고 서 있던 관객을 선택했다.`,
    );
    await say_by_passer_by_and_wait('에이신 플래시의 팬', '엣, 저…… 저 말인가요?');
    await flash.say_and_wait(
      '네, 들고 계신 깃발의 배색, 제 승부복 배색이 맞죠?',
    );
    await say_by_passer_by_and_wait(
      '에이신 플래시의 팬',
      '그, 그렇긴 한데…… 저…… 제가 정말 괜찮을까요……',
    );
    await flash.say_and_wait('그럼, 실례하겠습니다.');
    await era.printAndWait(
      '팬의 대답을 들었는지 못 들었는지, 에이신 플래시는 팬의 손을 잡았다.',
    );
    await say_by_passer_by_and_wait('에이신 플래시의 팬', '고, 공주님 안기!!!');
    await era.printAndWait(
      `비명 섞인 감탄 소리와 함께, 에이신 플래시는 조금 겁먹은 듯한 팬을 안아 들고 앞서 나간 두 ${flash.sex}의 뒤를 맹렬히 쫓기 시작했다.`,
    );
    era.drawLine();
    await say_by_passer_by_and_wait(
      '사회자',
      '경기 종료! 이번 팬 업고 달리기의 우승자는—— 골드 쉽!!',
    );
    await era.printAndWait(
      '얼마 지나지 않아 골드 쉽의 환호성과 함께 즐거웠던 경기가 막을 내렸다.',
    );
    await say_by_passer_by_and_wait(
      '사회자',
      '팬마저 경악하게 만드는 질주로 거칠게 승리를 쟁취했습니다!',
    );
    await say_by_passer_by_and_wait(
      '에이신 플래시의 팬',
      '죄송해요, 정말 죄송해요! 저 때문에 방해가 돼서……',
    );
    await era.printAndWait(
      '자신이 응원하는 아이돌이 우승하지 못하자, 에이신 플래시의 팬은 연신 고개를 숙이며 자신의 탓으로 돌렸다.',
    );
    await flash.say_and_wait('아니요, 당신은 완벽하게 잘해주셨습니다.');
    await era.printAndWait(
      '에이신 플래시는 고개를 젓고는 옆에서 우승을 만끽하는 골드 쉽을 보며 작게 한숨을 쉬었다.',
    );
    await flash.say_and_wait(
      '그리고 이런 종류의 경쟁에서 저분을 이기는 건 역시 꽤 어려운 일이니까요.',
    );
    await flash.say_and_wait('무엇보다——');
    await era.printAndWait(`말을 하며 ${flash.sex}의 얼굴에 부드러운 미소가 번졌다.`);
    await flash.say_and_wait(
      `소중한 팬분들을 ${flash.sex}처럼 함부로 대할 수는 없으니까요.`,
    );
    await say_by_passer_by_and_wait('에이신 플래시의 팬', '!!!!');
    await say_by_passer_by_and_wait(
      '에이신 플래시의 팬',
      `에…… 에이신 님, 정말 감사합니다!`,
    );
    await flash.say_and_wait(
      '후훗~ 제가 드려야 할 말씀인걸요. 저와 함께 경기에 참여해주셔서 감사합니다.',
    );
    await era.printAndWait('에이신 플래시와 팬이 서로를 보며 미소 지었다.');
  };

  handlers[95 + 23] = async (flash, your_name, callname, flags) => {
    await print_event_name('미래의 일 · 1', flash);
    await era.printAndWait('봄 시니어 3관의 마지막 관문인 타카라즈카 기념이 다가오고 있다.');
    await era.printAndWait(
      '상반기 레이스에서 연이어 활약한 에이신 플래시는 자연스럽게 출주 자격을 얻었다.',
    );
    await era.printAndWait('하지만……');
    await say_by_passer_by_and_wait(
      '의사',
      '신체 건강을 고려해볼 때, 당분간은 레이스에 출주하지 않는 것을 권장합니다.',
    );
    await era.printAndWait(
      '……레이스 전 정기 검진에서 에이신 플래시의 다리에 다시 한번 이상 징후가 발견되었다.',
    );
    await flash.say_and_wait('………');
    await era.printAndWait(
      '비록 작년 일본 더비 이후에 겪었던 증상보다는 훨씬 가벼운 정도였지만.',
    );
    await era.printAndWait(
      '안전을 최우선으로 생각한다면, 눈앞의 타카라즈카 기념은 아쉽게도 포기할 수밖에 없었다.',
    );
    era.printButton('「플래시……」', 1);
    await era.input();
    await era.printAndWait(
      `진단 보고서를 굳은 표정으로 쳐다보는 에이신 플래시를 어떻게 설득해야 할지 ${your_name}이(가) 고민하던 찰나.`,
    );
    await flash.say_and_wait('알겠습니다. 그럼 푹 쉬도록 하죠.');
    era.printButton('「!」', 1);
    await era.input();
    await era.printAndWait(`생각지도 못한 ${flash.sex}의 덤덤한 대답에 ${your_name}은(는) 깜짝 놀랐다.`);
    await flash.say_and_wait('어라, 제가 이렇게 말하는 게 의외인가요?');
    await era.printAndWait(
      `이어서 놀란 ${your_name}의 표정을 본 ${flash.sex}는 고개를 갸웃하며 의아해했다.`,
    );
    era.printButton('「그냥 작년의 네 모습이 생각나서.」', 1);
    await era.input();
    await era.printAndWait(`${your_name}은(는) 머릿속에 스친 생각을 솔직하게 털어놓았다.`);
    await flash.say_and_wait('후후.');
    await era.printAndWait('그 말에 에이신 플래시는 가볍게 웃어 보였다.');
    await flash.say_and_wait(
      '작년 8월 이전의 저였다면, 이미 정해진 계획이 갑자기 틀어지는 상황을 절대 받아들이지 못했을 거예요.',
    );
    await flash.say_and_wait(
      '하지만 사람의 성격은 경험에 따라 변하는 법이잖아요?',
    );
    await era.printAndWait(
      `말을 하며 ${flash.sex}는 고개를 저으며 ${your_name}을(를) 지긋이 바라보았다.`,
    );
    await flash.say_and_wait(
      '지금의 저는 이미 깨달았습니다. 제 꿈은 저 혼자만의 것이 아니라는 사실을요. 그러니 모든 일을 신중하게 판단하고 결정해야 합니다.',
    );
    await flash.say_and_wait('부질없는 고집은 허용되지 않으니까요.');
    era.printButton('「긍정적인 변화네.」', 1);
    await era.input();
    await era.printAndWait(
      `에이신 플래시의 진지한 태도를 보며 ${your_name}은(는) 감탄했고, 동시에 짐을 내려놓은 듯 안도했다.`,
    );
    await flash.say_and_wait(
      '게다가 올해 가장 중요한 목표는 10월의 가을 텐노상입니다.',
    );
    await flash.say_and_wait(
      '그 전까지의 모든 행동은 완벽한 컨디션으로 출주할 수 있다는 전제하에 세워져야 해요.',
    );
    era.printButton('「그럼 그 이후에는?」', 1);
    await era.input();
    await flash.say_and_wait('……에?');
    await era.printAndWait(`묘한 호기심이 생긴 ${your_name}이(가) 뜬금없이 물었다.`);
    await flash.say_and_wait('그…… 이후요?');
    await era.printAndWait(
      `트윙클 시리즈에서 계속해서 승리를 쟁취해 부모님이 ${flash.sex}를 자랑스럽게 여기도록 만드는 것, 그것이 에이신 플래시의 꿈이었다.`,
    );
    await era.printAndWait(
      `하지만 생각해보면, ${flash.sex}는 꿈을 이룬 뒤에 무엇을 하고 싶은지에 대해서는 ${your_name}에게 한 번도 말한 적이 없었다.`,
    );
    await flash.say_and_wait('음……');
    await era.printAndWait(
      `비록 ${your_name}은(는) 에이신 플래시가 스스로 잘 계획하고 있을 거라 믿었지만, ${flash.sex}가 깊은 생각에 빠져 때때로 ${your_name}을(를) 힐끔거리는 모습을 보자.`,
    );
    await era.printAndWait(`${your_name}은(는) 조금 의구심이 들었다.`);
    era.printButton('「아직 생각해보지 않은 거야?」', 1);
    await era.input();
    await flash.say_and_wait('……아뇨, 사실 그건 가장 처음부터 계획해두었던 일입니다.');
    await era.printAndWait('에이신 플래시는 가볍게 고개를 저으며 말을 이었다.');
    await flash.say_and_wait(
      '일본에 오던 그 순간부터 마음속으로 준비하고 있었어요. 꿈을 이루고, 인정받을 수 있는 이상적인 자신이 되었을 때 고향으로 돌아가 수년간 더 공부한 뒤 부모님의 케이크 가게를 물려받는 것이 제 계획이었죠.',
    );
    era.printButton('「멋진 미래네.」', 1);
    await era.input();
    await flash.say_and_wait('모든 일이 순조롭게 풀린다면 정말 그렇겠죠. 하지만……');
    era.printButton('「하지만?」', 1);
    await era.input();
    await flash.say_and_wait('………');
    await era.printAndWait(
      `에이신 플래시는 더 이상 말을 잇지 않고 침묵하며 ${your_name}을(를) 바라보았다.`,
    );
    await flash.say_and_wait('……아니요, 아무것도 아닙니다.');
    await era.printAndWait(`한참 뒤에야 ${flash.sex}가 다시 입을 열었다.`);
    await flash.say_and_wait(
      '아마도 당신과 만난 뒤 너무나 많은 일을 겪었기에, 다시 한번 시간을 들여 꼼꼼하게 계획을 세워야 할 것 같네요.',
    );
    era.printButton('「그렇구나.」', 1);
    await era.input();
    await era.printAndWait(
      `${your_name}은(는) 그 말을 하는 ${flash.sex}의 눈동자에서 자신이 이해할 수 없는 어떤 감정의 일렁임을 느꼈다.`,
    );
    era.println();
    sys_hurt_uma(37, 1);
    flags.wait = true;
    const reg_race = sys_reg_race(37).curr;
    if (reg_race.race === race_enum.takz_kin) {
      reg_race.race = reg_race.week = -1;
    }
  };

  handlers[95 + 29] = async (flash, your_name, callname, flags, cb) => {
    if (
      (era.get('cflag:37:위치') && era.get('cflag:0:위치')) !==
      location_enum.beach
    ) {
      cb();
      return;
    }
    await print_event_name('미래의 일 · 2', flash);
    await era.printAndWait(
      '작년과는 달리, 이번에는 에이신 플래시의 다리 부상 회복 속도가 매우 빨랐다.',
    );
    await era.printAndWait(
      `병세의 정도가 가벼웠던 덕분이기도 하겠지만, ${your_name}은(는) 올해의 ${flash.sex}가 무척 긍정적인 마음가짐으로 요양에 임했기 때문이라고 믿었다.`,
    );
    await era.printAndWait(
      `덕분에 이번 여름 합숙이 시작되기 직전, ${flash.sex}의 몸은 완전히 건강해진 상태였다.`,
    );
    era.drawLine();
    await flash.say_and_wait(
      '어느덧 목표로 삼았던 가을 텐노상이 코앞으로 다가왔군요.',
    );
    await era.printAndWait(
      '월초, 합숙소에 짐을 푼 에이신 플래시는 창밖의 푸른 바다를 보며 감회에 젖은 듯 말했다.',
    );
    era.printButton(
      '「이번 여름 합숙을 실력을 쌓을 기회로 삼아 열심히 해보자.」',
      1,
    );
    await era.input();
    await era.printAndWait(`${your_name}이(가) 격려를 건넸다.`);
    await flash.say_and_wait(
      '네! 다리 부상도 다 나았으니 훈련에는 전혀 지장이 없겠네요.',
    );
    await era.printAndWait('에이신 플래시는 고개를 끄덕이고는 훈련장을 향해 걸어갔다.');
    await flash.say_and_wait('하지만………');
    await flash.say_and_wait('……마지막으로...');
    era.printButton('「?」', 1);
    await era.input();
    await era.printAndWait(
      `완전히 떠나기 전, ${your_name}은(는) ${flash.sex}가 작게 중얼거리는 소리를 들은 것 같았다.`,
    );
  };
};