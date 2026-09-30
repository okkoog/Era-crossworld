const era = require('#/era-electron');

const quick_make_love = require('#/system/ero/calc-sex/quick-make-love');
const { get_penis_size } = require('#/system/ero/sys-calc-ero-status');
const {
  begin_and_init_ero,
  end_ero_and_train,
  init_ero,
  set_palam_to_max,
} = require('#/system/ero/sys-prepare-ero');
const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const { get_custom_mec } = require('#/event/mec/mec-factory');
const print_event_name = require('#/event/snippets/print-event-name');

const { get_random_entry } = require('#/utils/list-utils');

const EroParticipant = require('#/data/ero/ero-participant');
const { part_enum } = require('#/data/ero/part-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { yes } = require('#/data/event/recruit-flags');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,number,number)>} handlers */
module.exports = (handlers) => {
  handlers.p1 = async (tachyon, me, _, love) => {
    await print_event_name('실험 기록：우마무스메 전환', tachyon);
    if (love < 75) {
      await tachyon.say_and_wait('이런, 모르모트…… 아니, 모르모트 양이 왔군……');
      await tachyon.say_and_wait(
        '응? 내가 어떻게 알았냐고? 후후, 하긴, 그때 자네는 혼수상태였으니까.',
      );
      await tachyon.say_and_wait('그야 수술은 내가 직접 집도했거든.');
      await tachyon.say_and_wait(
        '트레이너로서 무능함은 최대의 죄지. 그 관점에서 말하자면, 자네는 그야말로 극악무도하다고 할 수 있겠군.',
      );
      await tachyon.say_and_wait(
        '하지만 다행으로 여기게나. 내 연구 덕분에 자네는 두 번째 기회를 다시 얻었으니까.',
      );
      await tachyon.say_and_wait(
        '애당초 중앙 트레센에 들어올 수 있었다는 건, 어떤 식으로든 반드시 타인보다 뛰어난 부분이 있다는 뜻이지. 그게 발굴되었느냐 아니냐의 차이일 뿐.',
      );
      await tachyon.say_and_wait(
        '어쩌면, 우마무스메가 된 자네는 의외로 이 방면에 재능이 있을지도 모르지 않나?',
      );
      await tachyon.say_and_wait(
        '열심히 힘내보게나, 모르모트 양…… 이 다시 주어진 기회 속에서 필사적으로 발버둥 쳐보라고.',
      );
      await tachyon.say_and_wait(
        '안 그러면…… 다음번에 수술대 위에서 나를 만난 뒤에 벌어질 일은, 장담컨대 자네가 절대 체험하고 싶지 않은 일이 될 테니까…… 아니, 그것도 모르는 일일까?',
      );
      await tachyon.say_and_wait('정말로 그때가 되면, 내가 듬뿍 예뻐해 줄 테니까 말이야.');
    } else {
      await tachyon.say_and_wait(`모르모트…… 아니, ${me.actual_name} 군.`);
      await tachyon.say_and_wait('미안하네, 하지만 규정은 규정이라서……');
      await tachyon.say_and_wait('아니…… 내 잘못이야………… 자네의 수술…… 내가 집도했네.');
      await tachyon.say_and_wait('……그래, 후후.');
      await tachyon.say_and_wait(
        '안심하게나…… 난 상관없네. 설령 어떤 모습이 된다 해도, 자네 눈동자 속의 빛이 남아있다면 나는 변함없이 자네를 사랑하니까.',
      );
      await tachyon.say_and_wait(
        '…………게다가, 우마무스메가 된 후에는 즐길 수 있는 방법도 더 늘어나지 않았나?',
      );
      await tachyon.say_and_wait('후후, 내가 듬뿍 예뻐해 주겠네.');
    }
  };

  handlers.p2 = async (tachyon, me, _, love) => {
    await print_event_name('실험 기록：성노예 개조', tachyon);
    await era.printAndWait('「쭈웁…… 쭙…… 쮸보…… 쮸루……」');
    era.println();
    if (love < 75) {
      await tachyon.say_and_wait('쯧쯧쯧…… 모르모트 양, 내가 경고하지 않았나?');
      await tachyon.say_and_wait('다시 한번 기회를 줬음에도 이런 꼴이라니…… 후후.');
    } else {
      await tachyon.say_and_wait('모르모트 군…… 정말 한심한 모습이군.');
      await tachyon.say_and_wait('창피해서, 이런 자가 내 연인이라고 인정하고 싶지 않을 정도야.');
    }
    era.println();
    await era.printAndWait('아그네스 타키온의 실험실.');
    await era.printAndWait('이 시간은 원래 아그네스 타키온이 약제를 조제하고 연구해야 할 시간이었다.');
    await era.printAndWait(
      `하지만 새로운 신분으로 돌아온 ${me.name}을(를) 환영하기 위해, ${tachyon.sex}는 특별히 오늘의 일정을 취소하고, 심지어 그를 축하하기 위한 약까지 직접 조제하였다.`,
    );
    era.println();
    await era.printAndWait('「쭈웁…… 쮸루…… 쮸구…… 쭙……」');
    era.println();
    await tachyon.say_and_wait('아니면, 사실 이게 자네가 기대하던 것인가?');
    await tachyon.say_and_wait('자유 의지 따위는 가질 수 없는, 그저 남에게 유린당할 뿐인 성노예가 되는 것을?');
    era.println();
    await era.printAndWait(
      '아그네스 타키온은 두 다리를 벌린 채, 평소 자신이 즐겨 앉던 회전의자에 나른하게 누워 있었다.',
    );
    await era.printAndWait(
      `그리고 ${tachyon.sex}의 가랑이 사이에는 우마무스메 귀가 달린 한 여성이 바닥에 웅크리고 있었다. 그녀는 타키온과 같은 모델인 소매가 긴 백의를 입고 있었으나, 약간의 차이가 있었다.`,
    );
    await era.printAndWait(
      '특별히 잘려 나간 뒷자락 탓에, 바람이 불 때마다 그녀의 매끄러운 엉덩이가 백의 아래로 사람들의 눈앞에 그대로 노출되었다.',
    );
    await era.printAndWait(
      '가슴팍에 마치 약에 부식된 듯 불규칙하게 뚫린 두 개의 구멍은 그녀의 유두를 공기 중에 완전히 노출시키고 있었다.',
    );
    await era.printAndWait(
      '속옷의 존재? 단추를 잠그는 것이 허락되지 않은 백의 중앙의 살색을 본 시점에서 그런 것은 존재하지 않는다는 사실을 이미 깨달았을 것이다.',
    );
    await era.printAndWait(
      '에로틱한 소품이라기엔 지나치게 과격한 옷을 입은 우마무스메는, 머리를 앞뒤로 쉴 새 없이 움직이며 아그네스 타키온의 다리 사이에 달린 거대한 양물을 집어삼키고 있었다.',
    );
    if (era.get('cflag:32:성별') === 0) {
      await era.printAndWait(
        '본래 우마무스메에게 있어서는 안 될 기관이었으나, 그것은 당연히 아그네스 타키온의 약물이 만들어낸 결과물이었다.',
      );
      era.println();
      await tachyon.say_and_wait(
        '후후…… 내 펄롱 P 시리즈 약물 덕분에, 성노예가 해야 할 일을 충분히 체험할 수 있겠군. 양쪽 다 암컷이라면 즐길 거리가 별로 없지 않나.',
      );
      era.println();
      await era.printAndWait(
        `바닥에 웅크린 우마무스메――즉 ${me.name}은(는)――아무 소리도 들리지 않는 듯, 그저 눈앞의 거물에 봉사하는 데 열중하고 있었다.`,
      );
      await era.printAndWait(
        '양쪽 다 암컷이라는 말은 객관적으로 약간의 오류가 있을지 모르나, 대체적인 결론은 비슷했다.',
      );
      await era.printAndWait(
        `그도 그럴 것이, 누구든 한계까지 팽창했음에도 위에 매달린 로터보다 길지 않은 ${me.name}의 성기를 본다면, 그것이 정상적인 수컷이 암컷을 임신시키기 위해 갖춰야 할 사이즈라고 인정하지 않을 것이기 때문이다. 굳이 형용하자면…… 그래, 클리토리스라고 부르는 것이 더 적절할 것이다.`,
      );
    }
    era.println();

    await era.printAndWait([
      `갑자기, 전심전력으로 `,
      tachyon.get_uma_sex_title(),
      `에게 봉사하던 ${me.name}의 전신이 떨리기 시작했다.`,
    ]);
    await era.printAndWait([
      `${me.name}의 가랑이 아래에서, 한계까지 발기해도 `,
      tachyon.get_uma_sex_title(),
      ` 주인의 고환 한쪽 크기밖에 되지 않는 「클리토리스」가 오늘 네 번째의, 물처럼 희박한 액체를 뿜어냈다.`,
    ]);
    era.add('exp:0:음경절정횟수', 3);
    era.add('exp:0:사정량', 12);
    await era.printAndWait('그 모습은 눈앞의 주인을 다소 불쾌하게 만들었다.');
    era.println();

    if (love < 75) {
      await tachyon.say_and_wait(
        '자기 기분만 챙기느라 가장 기초적인 구강 봉사조차 제대로 못 하다니…… 성노예로서도 이렇게까지 실패작일 줄이야.',
      );
      era.println();

      await era.printAndWait([
        `${me.name}은(는) 서둘러 정신을 차리고 다시 자신의 담당 `,
        tachyon.get_uma_sex_title(),
        `이자 주인에게 봉사를 계속했다.`,
      ]);
      await era.printAndWait(
        `하지만 평소 인내심이 부족한 ${tachyon.sex}는 이미 ${me.name}의 서툰 봉사에 진저리가 나 있었다.`,
      );
      await era.printAndWait(
        `${tachyon.sex}는 자리에서 일어나, 가랑이 사이의 거물을 ${me.name}의 목구멍 깊숙이 찔러 넣었다.`,
      );
      await era.printAndWait([
        '그 거대한 음낭이 ',
        me.get_colored_name(),
        '의 턱에 부딪혔다. 묵직하고 따뜻한 유동감은 곧 ',
        me.get_colored_name(),
        '의 입안에 뿜어져 나올 백탁액의 분량을 암시하고 있었다.',
      ]);
      era.println();

      await tachyon.say_and_wait(
        '맞다, 모르모트…… 아니, 성노예 군, 혹시 기억하고 있나 모르겠군.',
      );
      era.println();

      await era.printAndWait(
        `의도적으로 성노예 「군」이라는 호칭으로 되돌리자, ${me.name}은(는) 이 도착적인 관계에 더욱 흥분한 나머지, 아래의 「클리토리스」에서는 아까부터 고장 난 수도꼭지처럼 끊임없이 맑은 액체가 흘러나왔다.`,
      );
      era.println();

      await tachyon.say_and_wait(
        '자네의 개조 수술은 전부 내가 했다네. 그러니 자네의 민감한 부분에 대해서는 내가 단연코 이 세상에서 가장 잘 알고 있는 사람이지.',
      );
      era.println();

      await era.printAndWait(
        `그렇게 말하며 ${tachyon.sex}는 ${me.name}의 목구멍을 거칠게 몇 번이나 찌르며 마치 무언가를 찾는 듯한 움직임을 보였다.`,
      );
      await era.printAndWait(
        `이토록 난폭하게 다뤄지는 과정에서 ${me.name}은(는) 다시 한번 자신이 그저 물건에 불과하며, 성욕 배설을 위한 기구라는 자각을 강하게 느꼈다.`,
      );
      await era.printAndWait(
        `찌르는 도중, 어느 부위를 스쳤는지 ${me.name}의 목구멍이 갑자기 강하게 수축하더니 하반신 앞뒤 할 것 없이 액체를 쏟아냈다.`,
      );
      era.println();

      await tachyon.say_and_wait('아아, 찾았다. 여기로군, 자네 목구멍의 민감점이.');
      await tachyon.say_and_wait(
        '여기를 찌르기만 하면 남자가 천 번 사정하는 것과 맞먹는 쾌감을 맛볼 수 있지…… 후후, 뭐 자네에게 이제 남성으로서의 일 따위는 알 필요 없는 일이겠지만.',
      );
      era.println();

      await era.printAndWait(
        `말을 경청할 정신 따위는 조금도 남아있지 않았다. ${me.name}의 모든 정신은 이제 파도처럼 밀려오는 쾌감에 저항하는 데에만 쓰이고 있었다.`,
      );
      await era.printAndWait(
        `전력으로 저항하지 않으면, 매번 밀려오는 파도마다 ${me.name}을(를) 바닥에 쓰러져 멈추지 않는 분수로 만들어버릴 것 같았다.`,
      );
      await era.printAndWait('하지만 그런 파도조차, 주인의 육봉이 한 번 왕복하는 것에 불과했다.');
      await era.printAndWait(
        `끊임없이 쌓이고 누적되는 쾌감에 ${me.name}의 전신 근육이 수축했고, 그에 따라 목구멍 또한 명기라고 불릴 수준으로 조여들었다.`,
      );
      era.println();

      await tachyon.say_and_wait(
        '오오……! 이 조임이다! 나온다, 제대로 받아내라고!',
      );
      era.println();

      await era.printAndWait(
        `${tachyon.sex}는 ${me.name}의 머리를 강하게 짓누르며 앞뒤로 격렬하게 피스톤질을 했다.`,
      );
      await era.printAndWait(
        '만약 평범한 인간의 몸이었다면, 이런 식의 유린을 당했다면 정말로 생명이 위험했을지도 모른다.',
      );
      await era.printAndWait(
        `다행인지 불행인지, 지금의 ${me.name}은(는) 우마무스메이며, 그것도 특수하게 개조된 우마무스메였다.`,
      );
      await era.printAndWait(
        `그렇기에 아무리 거친 행위라도 ${me.name}의 신체는 이를 견뎌내고 전부 쾌감으로 치환해버렸다.`,
      );
      await era.printAndWait(
        `심지어 질식할 것 같은 고통조차 ${me.name}의 몸은 스스로 쾌감으로 바꿔버렸고, 점점 ${me.name}은(는) 그런 감각을 능동적으로 즐기기 시작했다.`,
      );
      await era.printAndWait(
        `${me.name}의 목구멍은 주인의 출입에 맞춰 끊임없이 수축을 조절했다. 마치 명기 그 자체가 된 것처럼!`,
      );
      era.println();

      await tachyon.say_and_wait('잘 받아내. 밖으로 흘리면 가만두지 않겠어.');
      era.println();

      await era.printAndWait('냉혹한 명령 뒤에 이어진 것은 타오르는 듯 뜨거운 백탁액의 물결이었다.');
      await era.printAndWait(
        `엄청난 양이 ${me.name}의 입과 코, 목구멍과 혀를 가득 채웠고, 금방이라도 밖으로 넘쳐흐를 듯했다……`,
      );
      await era.printAndWait([
        `${me.name}은(는) 황급히 입안에 가득 찬 비릿한 액체를 삼켰으나, ${me.name}의 노력만으로는 `,
        tachyon.get_uma_sex_title(),
        `의 은총을 전부 담아낼 수 없었다.`,
      ]);
      await era.printAndWait([
        `결국…… ${me.name}은(는) 무력하게 손으로 `,
        tachyon.get_uma_sex_title(),
        `의 보배로운 씨앗을 받아낼 수밖에 없었다.`,
      ]);
      era.println();

      await era.printAndWait(
        '그럼에도 불구하고, 입안에서 연신 발사되는 굵직한 포신은 멈추지 않았다.',
      );
      await era.printAndWait(
        `장시간의 저산소 상태는 아무리 질식의 쾌감을 즐기는 ${me.name}일지라도, 강인한 우마무스메의 몸일지라도 완전히 버티기는 힘들었다. 점점 ${me.name}의 의식은 흐릿해져 갔다……`,
      );
      era.println();

      await era.printAndWait('「쾅!」');
      era.println();

      await era.printAndWait([
        '갑자기 느껴진 강렬한 통증이 ',
        me.get_colored_name(),
        '을(를) 깨웠다.',
      ]);
      await era.printAndWait(
        `${me.name}은(는) 비명을 지르려 했으나, 벌어진 목구멍으로 즉시 더 많은 백탁액이 쏟아져 들어왔다.`,
      );
      await era.printAndWait([
        `${me.name}이(가) 고개를 들자 보인 것은 자신의 담당 `,
        tachyon.get_uma_sex_title(),
        ' 이자 주인의 다리였다.',
      ]);
      await era.printAndWait(
        '자신이 그토록 애지중지하며, 자신의 다리보다 더 소중히 여겼던 그 아름다운 발.',
      );
      await era.printAndWait(`그 발이 지금은 가차 없이 ${me.name}의 배를 짓밟고 있었다.`);
      era.println();

      await tachyon.say_and_wait('성노예로서의 능력은…… 완전 낙제점이군.');
      await tachyon.say_and_wait('더 철저하게 조교하지 않으면 안 되겠어……');
      era.println();

      await era.printAndWait(
        `삼키지 못한 나머지 백탁액이 ${me.name}의 온몸에 떨어졌고, 옷 또한 어쩔 수 없이 진득한 액체로 뒤덮였다.`,
      );
      era.println();

      await tachyon.say_and_wait(
        '모처럼의 실험실을 이 꼴로 만들다니…… 쯧, 정말 못 봐주겠군.',
      );
      era.println();

      await era.printAndWait(
        `타키온은 혐오스럽다는 듯 말하더니, 문득 무슨 생각이 떠오른 듯 몸을 굽혀 ${me.name}에게 속삭였다.`,
      );
    } else {
      await tachyon.say_and_wait(
        '이런 희박한 즙이나 뿜어대다니, 이런 쓸모없는 기관이 도대체 존재할 의미가 어디에 있나.',
      );
      await tachyon.say_and_wait(
        '저기 모르모트 군, 내 욕구를 채워줄 수 있는 다른 수컷이라도 찾아봐야 하는 게 아닐까…… 자네는 지금 상태로 대체 누굴 만족시킬 수 있겠나.',
      );
      era.println();

      await era.printAndWait(
        `그 말을 들은 ${me.name}은(는) 황급히 자신의 연인이자 주인님인 ${tachyon.sex}에게 버림받지 않기 위해 더욱 정성스럽게 봉사하기 시작했다.`,
      );
      await era.printAndWait(
        `${tachyon.sex}는 만족스러운 듯 ${me.name}의 머리를 쓰다듬으며, 더 부지런히 봉사할 것을 격려했다.`,
      );
      era.println();

      await tachyon.say_and_wait('그렇게 버림받는 게 무서운가? 착하지, 착해.');
      await tachyon.say_and_wait(
        '안심하게나, 나도 내 몸을 남에게 허락할 생각은 없으니까…… 하지만, 연인으로서 상대의 성욕을 채워주는 건 당연한 의무 아닌가?',
      );
      era.println();

      await era.printAndWait(
        `부드러운 말투와 함께, ${tachyon.sex}는 ${me.name}의 엉덩이를 가볍게 두드리며 신호를 주었다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 즉시 순종적으로 주인을 등지고 서서, 자신을 암컷으로 타락시키는 입구를 스스로 벌렸다.`,
      );
      era.println();

      await era.printAndWait(
        `${tachyon.sex}는 자리에서 일어나, 가랑이 사이의 거물로 이미 젖어버린 ${me.name}의 보지를 가득 채웠다.`,
      );
      await era.printAndWait(
        `거대한 음낭이 ${me.name}의 둥근 엉덩이에 부딪혔다. 묵직하고 따뜻한 유동감은 곧 ${me.name}의 구멍 안에 뿜어져 나올 백탁액의 분량을 암시했다.`,
      );
      await era.printAndWait(
        `삽입되는 순간 ${me.name}은(는) 자신도 모르게 가녀린 신음을 흘렸고, 등 뒤의 주인은 만족스러운 탄식을 내뱉었다.`,
      );
      era.println();

      await tachyon.say_and_wait(
        '후후, 성노예가 되어도 우리 몸은 여전히 최고의 궁합이군.',
      );
      await tachyon.say_and_wait(
        '뭐 당연한 결과지만 말이야. 모르모트 군의 몸은 내가 개조했으니, 모든 건 내 기준에 맞춰 조정되어 있으니까.',
      );
      era.println();

      await era.printAndWait('자신의 몸은, 주인에 의해 맞춤형으로 개조되었다.');
      await era.printAndWait('자신은 주인의 전용 성노예다.');
      era.println();

      await era.printAndWait(
        `그런 생각이 ${me.name} 을(를) 더욱 흥분시켰고, 보지도 저절로 강하게 수축했다.`,
      );
      era.println();

      await tachyon.say_and_wait(
        '으음…… 갑자기 이렇게 조이다니, 왜 그러나? 방금 그 말에 흥분이라도 한 건가? 이런 상황에서 흥분하다니, 예전의 내가 너무 무심했나 보군. 자네의 소망을 미처 몰라봤어.',
      );
      era.println();

      await era.printAndWait(
        `말이 끝나자마자 등 뒤에서의 찌르기는 더욱 강력하고 격렬해졌다. ${me.name}은(는) 주인의 하사품을 맞이하기 위해 뒤로 엉덩이를 내밀며 호응했다.`,
      );
      era.println();

      await tachyon.say_and_wait('나온다…… 제대로 받아내라고!');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}의 손이 ${me.name}의 엉덩이를 세게 내려치자 살이 파르르 떨렸고, ${me.name}이(가) 참지 못하고 내뱉는 신음은 주인의 흥분을 부채질했다.`,
      );
      await era.printAndWait(
        `마침내 ${me.name}이(가) 떨며 절정에 달함과 동시에, 뜨겁게 달궈진 육봉 또한 ${me.name}의 체내에 진득한 백탁액을 쏟아부었다.`,
      );
      await era.printAndWait(`${me.name}은(는) 체내를 채우는 충족감과 함께 의식이 어둠 속으로 빠져들었다……`);
      era.println();

      await tachyon.say_and_wait(
        '이봐, 이렇게 다 흘러넘치지 않나? 모처럼의 실험실을 이 꼴로 만들고……',
      );
      era.println();

      await era.printAndWait(`주인의 불쾌한 목소리를 듣자마자 ${me.name}은(는) 즉시 정신을 차렸다.`);
      await era.printAndWait(
        `바닥에 버려진 주인의 정수를 보며, ${me.name}은(는) 당황한 나머지 가장 확실하게 낭비하지 않을 방법을 선택했다……`,
      );
      era.println();

      await tachyon.say_and_wait('옳지 옳지, 제대로 깨끗하게 치워야 착한 아이지.');
      era.println();

      await era.printAndWait(
        `주인은 바닥에서 강아지처럼 정수를 핥고 있는 ${me.name}의 머리를 쓰다듬어 주었고, 이에 기뻐진 ${me.name}은(는) 더욱 열심히 핥기 시작했다.`,
      );
    }
    era.println();

    love >= 75 && (await tachyon.say_and_wait('음음…… 됐다.'));
    await tachyon.say_and_wait(
      `${
        love >= 75 ? '착한 아이니까, ' : ''
      } 내가 10분 뒤에 돌아올 테니, 그때까지 여기가 깨끗하게 정리되지 않으면 『벌』을 주도록 하지.`,
    );
    await tachyon.say_and_wait('만약 깨끗하게 치워져 있다면 『상』을 주겠어.');
    await tachyon.say_and_wait(
      `어느 쪽을 선택할지는 자네가 직접 결정하게나${love < 75 ? ', 성노예 『군』' : ''}～`,
    );
    love >= 75 &&
      (await tachyon.say_and_wait(
        '걱정 말게, 어떤 결과든 자네를 듬뿍 예뻐해 줄 생각이니까❤️',
      ));
    era.println();

    await era.printAndWait('말을 마친 뒤, 타키온은 바지를 챙겨 입고 실험실을 나섰다.');

    await era.printAndWait(
      `배가 풍선처럼 부풀어 오른 채 바닥에 누워, ${
        love < 75
          ? `입가에 여전히 백탁액을 흘리며 실내에서 무력하게 헐떡이는 ${me.name}`
          : `여전히 밖으로 백탁액을 뿜어내며 무기력하게 바닥을 청소하는 ${me.name}`
      } 만이 남겨졌다.`,
    );
    await era.printAndWait(
      `상인가 벌인가…… ${love < 75 ? `${me.name}은(는) 구석의 청소 도구함을 바라보았다.` : ''}`,
    );
    await era.printAndWait('자, 어떤 결정을 내릴 것인가?');

    !get_penis_size(32) && era.set('status:32:펄롱P', 1);
    begin_and_init_ero(0, 32);
    set_palam_to_max(0, part_enum.penis);
    await quick_make_love(
      new EroParticipant(0, part_enum.mouth),
      new EroParticipant(32, part_enum.penis),
      false,
    );
    if (love < 75) {
      set_palam_to_max(32, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      set_palam_to_max(32, part_enum.penis);
      set_palam_to_max(0, part_enum.mouth);
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await quick_make_love(
        new EroParticipant(32, part_enum.foot),
        new EroParticipant(0, part_enum.body),
        false,
      );
      await quick_make_love(
        new EroParticipant(32, part_enum.hit),
        new EroParticipant(0, part_enum.body),
        false,
      );
    } else {
      await quick_make_love(
        new EroParticipant(32, part_enum.hit),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      set_palam_to_max(32, part_enum.penis);
      set_palam_to_max(0, part_enum.virgin);
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
    }
    end_ero_and_train();
    get_custom_mec(32).set_callname();
  };

  handlers.p3 = async (tachyon, me, _, love) => {
    await print_event_name('실험 기록：임신주머니 및 다수의 우마무스메 체액 연구', tachyon);

    begin_and_init_ero(0, 32);

    await tachyon.say_and_wait('흠흠흠～～');
    era.println();

    await era.printAndWait('아그네스 타키온은 기분 좋게 콧노래를 부르며 익숙한 복도를 걸어갔다.');
    await era.printAndWait(
      '평소 이 복도는 이상한 약이 흘러나오는 실험실 때문에 학생들이 경원시하곤 했으나…… 최근에는 다시 어느 정도 활기를 되찾은 모양이었다.',
    );
    await era.printAndWait(
      `그러나 ${tachyon.sex}는 자신의 실험실을 지나쳐, 어느 청소 도구함 앞에 멈춰 섰다.`,
    );
    era.println();

    await tachyon.say_and_wait([
      '이런…… 정말 가차 없군. 내가 일반적인 ',
      tachyon.get_uma_sex_title(),
      '의 성욕을 얕본 걸까.',
    ]);
    era.println();

    await era.printAndWait(
      `도구함 안에는 초점이 풀린 눈으로 입에 재갈을 문 채, 배는 팽팽하게 부풀어 있고, 아래 구멍에는 구멍을 막기 위한 두 개의 거대한 딜도가 꽂혀 있었으며, 온몸은 애액과 정액으로 범벅된 채 몸 위에는 정(正)자와 상스러운 낙서가 가득한 ${me.name}이(가) 있었다.`,
    );
    era.println();

    await tachyon.say_and_wait('모르모트 군? 정신 차리게.');
    era.println();

    await era.printAndWait(
      `${tachyon.sex}이(가) ${me.name}의 이름을 불렀으나, 3일 밤낮을 유린당한 ${me.name}의 눈동자는 여전히 초점이 없었다. 어떻게든 반응해 보려고 발버둥 쳤으나, 시선은 그저 허공만을 공허하게 바라볼 뿐이었다.`,
    );
    era.println();

    await era.printAndWait([
      '이토록 비참한 광경을 보면서도, ',
      tachyon.get_colored_name(),
      '은 그 어떤 연민이나 동정도 보이지 않았다.',
    ]);
    await era.printAndWait(
      `${tachyon.sex}는 가차 없이 발을 들어 ${me.name}의 배를 짓밟았다.`,
    );
    await era.printAndWait(
      `짓밟히는 순간 ${me.name}의 몸은 마치 새우처럼 격렬하게 움츠러들었으나, 여전히 단단히 고정되어 있었다. 그 부풀어 오른 배가 눌리는 순간, 마치 강제로 바람을 빼는 풍선처럼 아래 입구에서 구멍을 막고 있던 딜도 두 개가 튀어나왔고, 뒤이어 뱃속 가득 들어있던 애액과 정액이 쏟아져 나왔다. 몸을 떤 ${me.name}은(는) 이 짧은 순간에 다시 한번 절정에 달했고, 그 짧은 육봉에서도 희박한 인자즙이 배출되었다.`,
    );
    era.println();

    await quick_make_love(
      new EroParticipant(32, part_enum.foot),
      new EroParticipant(0, part_enum.body),
      false,
    );
    await quick_make_love(
      new EroParticipant(32, part_enum.hit),
      new EroParticipant(0, part_enum.body),
      false,
    );

    await tachyon.say_and_wait(
      '좋아, 이 정도 양이라면 한동안 실험에 필요한 분량은 충분히 공급되겠군.',
    );
    era.println();

    await era.printAndWait([
      `타키온은 분수가 폭발하는 순간 재빨리 꺼낸 비커를 흐뭇하게 바라보았다. 그 안에는 방금 수집한 `,
      tachyon.get_uma_sex_title(),
      `의 체액이 가득했다. 하지만 이 비커 하나는 ${me.name}의 구멍에서 배출된 양의 3분의 1에도 미치지 못했으며, 더 많은 양이 바닥에 뿌려져 청소 담당자의 골칫거리가 되었다.`,
    ]);
    await era.printAndWait('하지만, 원인 제공자가 직접 치우는 것이 당연한 이치 아니겠는가.');
    era.println();

    await tachyon.say_and_wait('모르모트 군～ 이번 실험은 대성공이라네～');
    era.println();

    await era.printAndWait('타키온은 마치 아무 일도 없었다는 듯, 들뜬 목소리로 자신의 실험 결과를 공유했다.');
    await era.printAndWait(
      `그러나…… 소위 아무 일도 없었다는 말은, 그저 ${me.name}의 천진난만한 착각일 뿐이었다.`,
    );
    era.println();

    if (era.get('cflag:25:모집상태') === yes) {
      init_ero(25);
      await quick_make_love(
        new EroParticipant(25, part_enum.hit),
        new EroParticipant(0, part_enum.breast),
        false,
      );
      await quick_make_love(
        new EroParticipant(25, part_enum.mouth),
        new EroParticipant(0, part_enum.breast),
        false,
      );
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 25),
        `, 의외로 정말 음란하더군…… 원래는 ${tachyon.sex}가 이런 놀이를 거절할 줄 알았는데 말이야. 결과는……`,
      ]);
      era.println();
      await era.printAndWait(
        `타키온은 ${me.name}의 목에 새겨진 사냥개의 흔적을 따라 어깨까지 훑어 내려갔다. 그리고 손을 아래로 옮겨, 치흔이 가득한 유방을 만졌으며, 그중에서도 유두의 치흔은 특히 선명했다.`,
      );
      await era.printAndWait(
        `만져지는 순간 ${me.name}은(는) 다시 몸을 떨었다. 그저 가벼운 애무와 머릿속의 상상만으로도 지금의 ${me.name}을(를) 절정에 빠뜨리기엔 충분했다.`,
      );
      era.println();
    }

    if (era.get('cflag:94:모집상태') === yes) {
      !get_penis_size(94) && era.set('status:94:펄롱P', 1);
      init_ero(94);
      era.set('palam:94:음경쾌감', era.get('tcvar:94:음경쾌감상한'));
      await quick_make_love(
        new EroParticipant(94, part_enum.penis),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 94),
        '도 말이야…… 처음에는 그렇게 부끄러워하더니……',
      ]);
      era.println();

      await era.printAndWait(
        `${tachyon.sex}는 재갈 때문에 목소리를 낼 수 없는 ${me.name}의 입술을 만지작거렸다. 퉁퉁 부어오른 입술은 지난 며칠 동안 그곳이 얼마나 많은 수난을 겪었는지 말해주고 있었다.`,
      );
      era.println();

      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 94),
        '의 목소리는 실험실에 있던 나에게까지 아주 또렷하게 들렸거든.',
      ]);
      era.println();
    }

    if (era.get('cflag:9:모집상태') === yes) {
      !get_penis_size(9) && era.set('status:9:펄롱P', 1);
      init_ero(9);
      era.set('palam:9:음경쾌감', era.get('tcvar:9:음경쾌감상한'));
      await quick_make_love(
        new EroParticipant(9, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      era.set('palam:9:음경쾌감', era.get('tcvar:9:음경쾌감상한'));
      await quick_make_love(
        new EroParticipant(9, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      await tachyon.say_and_wait([
        sys_get_colored_callname(32, 9),
        '……후후, 과연 내가 눈여겨본 아이답군. 이런 방면에서도 1등이라니.',
      ]);
      era.println();

      await era.printAndWait(
        '아직 검증은 안 해봤지만, 아까 담은 비커의 7할 정도는 다이와 군 혼자서 사정한 양이 아닐까 싶군.',
      );
      await era.printAndWait([
        `우마뾰이에서도 최고가 되겠다는 집념 덕분에, 지난 3일 동안 ${me.name}의 몸 위에 가장 오래 올라타 있었던 `,
        tachyon.get_uma_sex_title(),
        `가 되었지.`,
      ]);
      era.println();
    }

    if (era.get('cflag:5:모집상태') === yes) {
      init_ero(5);
      await quick_make_love(
        new EroParticipant(5, part_enum.abuse),
        new EroParticipant(0, part_enum.masochism),
        false,
      );
      await tachyon.say_and_wait([
        '그리고, ',
        sys_get_colored_callname(32, 5),
        '도 내 제안을 받아들여 실험에 참여해 주었지. 쯧쯧, 우리 모르모트 군의 위세가 대단해서 기숙사장조차 마수를 피할 수 없었나 보군.',
      ]);
      era.println();

      await era.printAndWait(
        `아그네스 타키온은 모르모트의 허벅지 안쪽을 만졌다. 정(正)자가 빼곡히 적힌 두 다리 중, 특별한 필체로 쓰인 네 줄의 흔적이 희미하게 빛을 내고 있었다. 연예인은 늘 과장된 법이지, 낙서를 할 때조차 예외는 아니었다.`,
      );
      era.println();
    }

    if (era.get('cflag:36:모집상태') === yes) {
      !get_penis_size(36) && era.set('status:36:펄롱P', 1);
      init_ero(36);
      era.set('palam:36:음경쾌감', era.get('tcvar:36:음경쾌감상한'));
      await quick_make_love(
        new EroParticipant(36, part_enum.penis),
        new EroParticipant(0, part_enum.anal),
        false,
      );
      await tachyon.say_and_wait([
        '쯧쯧, 맨날 논리니 뭐니 하더니, 막상 우마뾰이할 때는 이성 따위 다 잊어버린 게 아닌가…… ',
        sys_get_colored_callname(32, 36),
      ]);
      era.println();

      await era.printAndWait(
        `타키온은 ${me.name}의 항문을 만졌다. 며칠 동안 이곳을 퉁퉁 붓도록 범한 주범은 샤커의 육봉이었다. 정말 모든 게 합리적이어야 한다면, 아무런 생산적 의미가 없는 구멍에 사정하는 것이야말로 가장 비논리적인 행위일 텐데. 하지만 지난 3일 동안 ${tachyon.sex}가 쉴 새 없이 몰아붙이던 모습에 ${me.name}은(는) 감히 물어볼 엄두도 내지 못했다. 물론 물어볼 기회조차 없었지만 말이다.`,
      );
      era.println();
    }

    const temp = era
      .getAddedCharacters()
      .filter(
        (e) =>
          era.get(`cflag:${e}:부계캐릭`) + era.get(`cflag:${e}:모계캐릭`) ===
            32 && era.get(`cflag:${e}:성장단계`) >= 2,
      );
    if (temp.length) {
      const child = get_random_entry(temp);
      !get_penis_size(child) && era.set(`status:${child}:펄롱P`, 1);
      init_ero(child);
      era.set(
        `palam:${child}:음경쾌감`,
        era.get(`tcvar:${child}:음경쾌감상한`),
      );
      await quick_make_love(
        new EroParticipant(child, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
      await tachyon.say_and_wait(
        `${era.get(`callname:${child}:-2`)}…… 역시 내 ${sys_get_callname(
          32,
          child,
        )} 답군. 벌써 가르쳐주지도 않았는데 ${sys_get_callname(
          child,
          0,
        )}의 구멍을 쓰다니…… 뭐 어린애니까 독점욕이 강한 건 이해할 수 있지.`,
      );
      era.println();

      await era.printAndWait(
        `타키온은 ${me.name}의 엉덩이를 두드렸다. 그 위에는 서툰 글씨로 『${sys_get_callname(
          child,
          0,
        )}은(는) 내 전용 변기』라고 적혀 있었다. 이 아이가 정말 그 의미를 알고 쓴 건지는 모르겠지만…… 타키온이 이 문장을 읽어주는 소리를 듣고, 아이가 정말 그 뜻을 알고 쓴 것일지도 모른다는 생각에…… ${
          me.name
        }은(는) 다시 참지 못하고 절정에 빠져들었다.`,
      );
      era.println();
    }

    if (era.get('cflag:0:임신단계') >> pregnant_stage_enum.embryo) {
      await tachyon.say_and_wait(
        '뱃속의 아이가 정말 불쌍하군…… 어머니가 이런 만인에게 몸을 허락하는 걸레라니, 나라면 차라리 정액으로 스스로를 질식시켜 버렸을 거야.',
      );
      era.println();

      await era.printAndWait('타키온은 다시 한번 배를 세게 짓밟으며 조롱과 멸시가 섞인 어조로 말했다.');
      era.println();
      await tachyon.say_and_wait(
        '다행으로 알게나, 우마무스메의 몸은 충분히 튼튼해서 이렇게 밟아도 자네만 고통스러울 뿐 뱃속 아이에겐 아무 영향도 없으니까…… 뭐 자네는 그런 것 따위 신경도 안 쓰겠지만 말이야, 육봉만 있으면 좋아하는 창녀니까.',
      );
      era.println();
      await era.printAndWait(
        `${me.name}은(는) 반박하려 했으나, 하체에서 뿜어져 나오는 조수가 그 반박을 허락하지 않았다.`,
      );
      era.println();
      await quick_make_love(
        new EroParticipant(32, part_enum.foot),
        new EroParticipant(0, part_enum.body),
        false,
      );
      await quick_make_love(
        new EroParticipant(32, part_enum.hit),
        new EroParticipant(0, part_enum.body),
        false,
      );
    }
    await tachyon.say_and_wait(
      '여기 이 흔적들은, 『과거에』 자네를 흠모했던 그 아이들이 남긴 것이라네.',
    );
    era.println();
    await era.printAndWait([
      `타키온은 ${me.name}의 몸에 적힌 『암캐』, 『변기 10엔에 한 번』, 『`,
      tachyon.get_uma_sex_title(),
      ` 어른의 정액 변기』, 『섹스 더비 18위』 같은 글자들을 훑었다.`,
    ]);
    await era.printAndWait([
      '줄 하나하나가 자신이 동경하던 트레이너가 음탕한 암컷 임신 주머니로 변한 모습을 보고, 사랑이 증오로, 증오가 욕망으로 변해버린 ',
      tachyon.get_uma_sex_title(),
      '들이 남긴 것이었다.',
    ]);
    era.println();
    await tachyon.say_and_wait('하지만 자네, 아주 기분 좋았지? 응?');
    era.println();
    await era.printAndWait('타키온의 얼굴에 가학심 가득한 미소가 떠올랐다.');
    era.println();
    await tachyon.say_and_wait([
      '좋아 죽는 꼴을 보니, 낙서를 당할 때 ',
      tachyon.sex,
      '들더러 한 글자 한 글자 읽어달라고 조른 게 아닌가? 응? 음탕한 년, 천한 개, 정액을 위해서라면 바닥에 엎드려 신발이라도 핥을 암돼지 같으니라고.',
    ]);
    era.println();
    await era.printAndWait(`말 한마디가 떨어질 때마다 ${me.name}의 아래에서는 여지없이 조수가 흘러나왔다.`);
    await era.printAndWait(`${me.name}이(가) 하려던 반박은 전부 허울뿐인 유혹으로 변해버렸다.`);
    era.println();
    !get_penis_size(32) && era.set('status:32:펄롱P', 1);
    if (love >= 75) {
      await tachyon.say_and_wait('농담일세.');
      era.println();
      await era.printAndWait(
        `갑자기 타키온은 ${me.name}의 얼굴을 붙잡고, 입을 막고 있던 재갈을 부드럽게 벗겨주었다.`,
      );
      await era.printAndWait(
        `재갈이 벗겨지는 순간, 그간의 충격과 더불어 아직 다 배출되지 못한 뱃속의 정액들 때문에 ${me.name}은(는) 자신도 모르게 타키온을 향해 정액과 애액, 위액이 뒤섞인 오물을 전부 토해내 버렸다.`,
      );
      era.println();
      await era.printAndWait(
        `눈앞의 타키온의 백의가 자신 때문에 더러워진 것을 보고 ${me.name}의 안색은 창백해졌다. 단순히 유린당한 뒤라 그런 것이 아니라, 자신의 불경한 행동 때문이었다.`,
      );
      era.println();

      await tachyon.say_and_wait('……괜찮네, 모르모트 군.');
      era.println();
      await era.printAndWait(
        `타키온은 오물이 묻지 않은 소매 쪽으로 ${me.name}의 입가를 부드럽게 닦아주었다.`,
      );
      era.println();
      await tachyon.say_and_wait(
        '내가 말하지 않았나? 난 자네를 버리지 않아. 어떤 모습이 되어도 마찬가지라네.',
      );
      era.println();
      await era.printAndWait(
        `채 반응하기도 전에, ${tachyon.sex}는 ${me.name}의 입술에 입을 맞췄다. 이 입술이 며칠간 얼마나 시달렸는지, 얼마나 많은 이들에게 더럽혀졌는지, 그리고 방금 무엇을 토해냈는지 따위는 전혀 개의치 않는 듯했다.`,
      );
      await era.printAndWait('부드럽고, 따스하며, 모든 것을 포용하는 입맞춤이었다.');
      await era.printAndWait(
        `어느샌가 ${me.name}은(는) 마치 예전의 평범한 날들로 돌아간 것 같은 착각에 빠졌다.`,
      );
      era.println();
      await quick_make_love(
        new EroParticipant(32, part_enum.mouth),
        new EroParticipant(0, part_enum.mouth),
        false,
      );

      await era.printAndWait('……하지만, 그저 착각일 뿐이었다.');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 타키온의 백의 아래로 점점 부풀어 오르는 존재감을 느끼며 자신의 신분을 다시금 떠올렸다.`,
      );
      await era.printAndWait(
        `타키온 또한 이를 눈치채고, 쑥스러운 듯 ${me.name}에게 미소 지었다.`,
      );
      era.println();

      await tachyon.say_and_wait('괜찮겠나? 모르모트 군?');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 대답 대신 그저 순종적으로 바닥에 엎드려, 오늘의 첫 번째 시중을 준비했다.`,
      );

      set_palam_to_max(32, part_enum.penis);
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.virgin),
        false,
      );
    } else {
      await tachyon.say_and_wait('이 꼴을 하고도 발뺌을 하려고?');
      era.println();

      await era.printAndWait(`타키온은 거칠게 ${me.name}의 재갈을 낚아채듯 풀어버렸다.`);
      await era.printAndWait(
        `풀어지는 순간, 가해진 충격과 뱃속에 고여있던 정액들 탓에 ${me.name}은(는) 타키온의 방향으로 정액과 애액, 위액을 쏟아내려 했다.`,
      );
      await era.printAndWait('그러나……');
      era.println();

      await tachyon.say_and_wait('무슨 짓을 하려는 건가, 모르모트 군.');
      era.println();

      await era.printAndWait('아아, 진작 알았어야 했다.');
      await era.printAndWait(
        `${tachyon.sex}가 그렇게 친절하게 자신을 위해 재갈을 풀어줬을 리 없다는 사실을.`,
      );
      await era.printAndWait(
        `${me.name}이(가) 입을 벌리는 찰나, ${tachyon.sex}의 가랑이에 달린 거대한 물건이 튀어나와 뱉어내려던 모든 것과 말을 틀어막아 버렸다.`,
      );
      era.println();
      await tachyon.say_and_wait('요 며칠 실험하느라 바빠서 나 자신은 아직 쓰지도 못했거든.');
      era.println();
      await era.printAndWait(
        `정액 찌든 내와 심지어 오줌 냄새까지 섞인 거대한 물건이 ${me.name}의 목구멍을 막아버렸다.`,
      );
      await era.printAndWait(
        `${tachyon.sex}는 마치 무기물인 오나홀을 다루듯이 ${me.name}의 입과 혀를 거칠게 사용했다.`,
      );
      await era.printAndWait('감정 따위는 조금도 섞이지 않은, 오로지 성욕 처리를 위한 행위였다.');
      era.println();
      await tachyon.say_and_wait(
        '후, 나온다 나와. 잘 받아내라고. 안 그러면…… 뭐 됐어, 어차피 더러워진 바닥을 치우는 건 자네 몫이니까.',
      );
      era.println();
      era.set('palam:32:음경쾌감', era.get('tcvar:32:음경쾌감상한'));
      await quick_make_love(
        new EroParticipant(32, part_enum.penis),
        new EroParticipant(0, part_enum.mouth),
        false,
      );
      await era.printAndWait(
        `타키온은 거침없이 ${me.name}의 입안을 가득 채우고는, 미련 없이 다시 오늘의 연구를 위해 실험실로 돌아갔다.`,
      );
      await era.printAndWait(
        `오늘의 첫 봉사를 마친 ${me.name}은(는) 초점 없는 눈으로 허공을 바라보며, 도대체 어디서부터 모든 것이 잘못된 것인지 생각했다.`,
      );
      await era.printAndWait(
        '……하지만 그런 생각조차 이제는 아무 의미 없었다. 개조 수술 중에 들었던 말처럼, 모든 것은 이제 되돌릴 수 없었으니까.',
      );
      await era.printAndWait(
        `${me.name}은(는) 3일 동안 입안에 쌓인 백탁액을 필사적으로 삼키며, 자신이 더럽힌 복도 바닥을 바라보았다……`,
      );
      era.println();
      era.printButton('입으로', 1);
      era.printButton('청소 도구로', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '어차피 이제 돌아갈 수 없다면 차라리 이성을 포기하고 모든 것을 즐기는 편이 나을지도 몰랐다.',
        );
        era.println();
        await era.printAndWait(
          `${me.name}은(는) 바닥에 엎드려 3일 동안 자신이 남긴 흔적들을 핥아 치우기 시작했다.`,
        );
        await era.printAndWait('그 원인은 무엇이었을까?');
        await era.printAndWait(
          '우마무스메 주인님들이 도구를 써서 치우는 모습을 보면 상황이 더 비참해질까 봐서였을까?',
        );
        await era.printAndWait(
          '아니면 이런 비참한 처지를 스스로에게 각인시켜 어떻게든 이곳을 벗어나기 위해 노력하려는 의지였을까?',
        );
        await era.printAndWait(
          '그것도 아니라면…… 정말로 타키온이 말한 것처럼, 자신은 그저 정액과 육봉을 위해서라면 체면도 던져두고 바닥이라도 핥는 천한 년이 되어버린 것일까?',
        );
        era.println();
        await era.printAndWait('이유 따위는 이제 중요하지 않았다.');
        await era.printAndWait(
          `바닥에 엎드린 ${me.name}의 눈에 보이는 것, 귀에 들리는 것, 입술로 느껴지는 것은 오직 바닥과 자신의 몸 위, 그리고 온몸의 구멍에서 흘러나오는 백탁의 정수뿐이었다.`,
        );
        era.println();
        await era.printAndWait('「뚜벅…… 뚜벅……」');
        await era.printAndWait(
          `우마무스메의 예민한 청각은 ${me.name}에게 복도 저편에서 이쪽으로 다가오는 누군가의 발소리를 들려주었다.`,
        );
        await era.printAndWait(
          `자, 이번에는 또 어떤 `,
          tachyon.get_uma_sex_title(),
          ` 주인님이 자신을 사용하러 온 것일까.`,
        );
        await era.printAndWait(
          `어느샌가 ${me.name}은(는) 스스로 엉덩이를 치켜올리며, 다음 귀빈이 자신을 사용해주기를 기다리고 있었다.`,
        );
      } else {
        await era.printAndWait(
          '육체는 비록 개조되었을지언정, 적어도 정신만큼은 포기할 수 없었다.',
        );
        era.println();
        await era.printAndWait(
          `${me.name}은(는) 비틀거리며 일어섰다. 우마무스메의 몸이라 해도 3일간의 가혹한 유린을 겪은 뒤라 그 움직임조차 버거웠다. 도구함에서 며칠간 자신과 여러 우마무스메의 체액으로 범벅된 청소 도구를 꺼내 바닥의 흔적들을 지우기 시작했다.`,
        );
        era.println();
        await era.printAndWait(
          `그저 일어서서 걷는 것만으로도 발바닥에 가해지는 자극이 ${me.name}을(를) 가벼운 절정에 빠뜨렸다.`,
        );
        await era.printAndWait(
          `아직도 ${me.name}의 보지와 항문에서는 백탁액과 애액이 뒤섞인 끈적한 점액이 쉴 새 없이 흘러나와 청소를 방해했다.`,
        );
        await era.printAndWait(
          '뭉툭한 빗자루 자루를 보거나 그 냄새를 맡을 때마다, 단 5분조차 비어있지 않았던 자신의 구멍들을 그것으로 가득 채우고 싶다는 충동이 가슴을 후벼팠다.',
        );
        era.println();
        await era.printAndWait(
          `${me.name}은(는) 그럼에도 고집스럽게 서서 빗자루와 쓰레받기로 무의미한 청소를 이어나갔다.`,
        );
        await era.printAndWait('나는 인간이다. 우마무스메가 아니고, 성노예도 아니며, 임신주머니도 아니다.');
        await era.printAndWait(`그런 마지막 자존심이 ${me.name}의 마음속에 여전히 남아있었다.`);
        await era.printAndWait('하지만……');
        era.println();
        await era.printAndWait('「뚜벅…… 뚜벅……」');
        await era.printAndWait(
          `우마무스메의 예민한 청각은 복도에서 이쪽을 향해 다가오는 누군가의 발소리를 정확히 포착했다.`,
        );
        await era.printAndWait(
          '오늘의 사용자인가? 그 질문에 답할 필요는 없었다. 애초에 이런 약이 유출되는 복도에 그 목적 말고는 다가올 이유가 없었으니까.',
        );
        await era.printAndWait(
          `${me.name}은(는) 여전히 꿋꿋이 서서 못 들은 척하며 인간으로서의 긍지를 유지하려 애썼다.`,
        );
        era.println();
        await era.printAndWait(
          `――――설령, 그것이 불과 5분 뒤면 ${me.name} 스스로 내던지게 될 무언가일지라도 말이다.`,
        );
      }
    }
    end_ero_and_train();
    get_custom_mec(32).set_callname();
  };
};