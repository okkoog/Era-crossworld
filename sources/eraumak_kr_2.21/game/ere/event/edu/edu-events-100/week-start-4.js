const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const AcuteEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-100');
const RaceHistory = require('#/data/race/model/race-history');

/** @param {Record<string,function(CharaTalk,CharaTalk,string,{wait_flag:boolean}):Promise<boolean|void>>} handlers */
module.exports = (handlers) => {
  handlers[95 + 14] = async (acute, me, callname, flags) => {
    era.set('cflag:100:축제이벤트표시', 0);
    const princess = get_chara_talk(39);
    const city = get_chara_talk(40);
    const sirius = get_chara_talk(70);
    const muteki = get_chara_talk(72);
    await print_event_name('팬 대감사제', acute);
    await era.printAndWait(
      '팬 대감사제. 팬들을 트레센 학원에 초대하여 함께 즐기는 스포츠 축제다.',
    );
    await era.printAndWait([
      '그리고 ',
      acute.get_colored_name(),
      '가 이번 행사에서 도전할 종목은 바로——',
    ]);
    await acute.say_and_wait(
      '사실 나, 예전에도 해본 적이 있단다? 으음…… 내 기억이 맞다면 자세는 분명 이랬었지——음, 음.',
    );
    await era.printAndWait([
      '——전통 종목인 「골프」. 설마 ',
      acute.sex,
      '가 예전에 골프를 쳐봤을 줄은 꿈에도 몰랐다.',
    ]);
    await acute.say_and_wait([
      '으으음…… 그나저나, ',
      callname,
      '. 내가 노려야 할 골대——는 어디에 있니?',
    ]);
    await era.printAndWait([
      '……',
      me.get_colored_name(),
      '은(는) 당근 주얼 10개를 걸고, ',
      acute.get_colored_name(),
      '가 골프를 축구로 착각하고 있다고 확신했다.',
    ]);
    await era.printAndWait([
      '즉, ',
      acute.get_colored_name(),
      '는 역시 골프를 칠 줄 모른다는 소리다.',
    ]);
    await era.printAndWait('그래서 잠시후……');
    await era.printAndWait('————');
    await acute.say_and_wait('후후, 역시 내겐 이 종목이 가장 잘 맞는구나——복싱.');
    await acute.say_and_wait(
      '……으으음? 자세히 보니 복싱이라는 글자 앞에 다른 글자도 적혀 있네——【트릭 복싱】?',
    );
    era.printButton('「아, 복싱 스타일의 체조 같은 거네.」', 1);
    await era.input();
    await era.printAndWait(
      '실제로 치고받으며 싸우는 게 아니라, 그럴싸한 복싱 자세를 취하며 【동작의 아름다움】과 【지구력】을 보여주고 심사위원에게 점수를 받는 경기——',
    );
    await era.printAndWait([
      '……생각해보면 당연하다. 기본적으로 10만 명에 육박하는 팬을 보유한 ',
      acute.get_uma_sex_title(),
      '아이돌들이다. 만약 트레센에서 진짜 복싱을 했다간, 자칫 현장의 팬들이 트레센을 집단 패싸움터로 만들어버릴지도 모른다.',
    ]);
    await acute.say_and_wait([
      '으음…… 정말 아쉽구나. 우리 ',
      callname,
      '은 여자들이 복싱하는 걸 참 좋아하는데 말이지——',
    ]);
    await me.say_and_wait([
      '아하하…… ',
      acute.get_colored_name(),
      ', 그 말은 절대로 하야카와 ',
      acute.get_adult_sex_title(),
      ' 앞에서는 하지 말아 줘. 나 진짜 죽어.',
    ]);
    await era.printAndWait([
      '……물론 ',
      me.get_colored_name(),
      '에게 연단 위에 서서 망원경으로 체육관에서 피 터지게 싸우는 무리를 구경하는 취미 같은 건 없다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '그저 ',
      acute.get_uma_sex_title(),
      '들이 서로 머리채를 잡고 손톱을 세워 할퀴는 모습을 좋아하는 것뿐이다.',
    ]);
    await era.printAndWait('——단지 그뿐이다.');
    await era.printAndWait(
      '자신의 괴짜 같은 취향을 변명하는 사이, 트릭 복싱 선수들의 경기가 이미 시작되었다——',
    );
    await era.printAndWait('…………');
    await sirius.say_and_wait('하, 트릭 복싱인가. 그냥 사바트 기술 몇 개 보여주면 끝이겠군.');
    await era.printAndWait([
      '한쪽은 프랑스식 호신술 「사바트」에 정통한 ',
      sirius.get_colored_name(),
      '——',
    ]);
    await city.say_and_wait(
      '예전에 몸매 관리를 위해서, 한동안 복싱을 배운 적이 있었지.',
    );
    await city.say_and_wait('원, 투…… 스트레이트, 스트레이트, 훅!');
    await era.printAndWait([
      '다른 한쪽은 학생이자 모델인 ',
      city.get_colored_name(),
      '.',
    ]);
    await era.printAndWait('그리고 심사위원이 이 대결에 내린 판결은——');
    await say_by_passer_by_and_wait('심사위원', '거기까지! 두 분 다 퇴장해 주세요.');
    await acute.say_and_wait('둘 다 결승에 못 올라갔다고? 대체 무슨 일인게야?');
    await say_by_passer_by_and_wait(
      '심사위원',
      '【트릭 복싱】 경기 중에 시리우스 양이 발차기 동작을 섞는 바람에 제 선글라스가 날아갈 뻔했습니다.',
    );
    await say_by_passer_by_and_wait(
      '심사위원',
      '그리고 골드 시티 양은 경기 도중 동작 틈틈이 카메라를 바라보며 포즈를 취해서 마치 도발 기술을 쓰는 것처럼 보였습니다.',
    );
    await city.say_and_wait(
      '뭐라고! ——나도 모르게 직업병이 그만…… 생각보다 만만치 않은 종목이네.',
    );
    await era.printAndWait('……대체 무슨 직업이길래 그런 직업병이 생기는 건데?');
    await era.printAndWait('그와 동시에, 옆 경기장에서 거대한 소음이 울려 퍼졌다——');
    await princess.say_and_wait('하, 와, 챠, 하——앗!');
    await era.printAndWait('——퍼~ 엉~ 쾅~~~!——');
    await say_by_passer_by_and_wait(
      '심사위원',
      '카와카미 프린세스 실격! 경기 중에 날아차기로 난간을 박살 내는 건 명백한 반칙 행위입니다!',
    );
    await era.printAndWait('…………');
    await say_by_passer_by_and_wait(
      '머리에 핀을 꽂은 중년 여성 팬',
      '여보, 봤어요?',
    );
    await say_by_passer_by_and_wait(
      '환자복을 입은 중년 남성 팬',
      '봤어. 정통 황O홍의 무영각이군. 아주 짠내 나는구만.',
    );
    await say_by_passer_by_and_wait('옆 동네 미음 동호회 젊은 팬', '짠 발? 얼마나 짠데요?');
    await say_by_passer_by_and_wait('검은 고급 차를 탄 흉터 가득한 팬', [
      '그 키타산 오야붕의 ',
      acute.sex_code - 1 ? '딸': '아들',
      '?…… 훗, 훌륭한 발경이군. 권풍이 차에까지 불어닥쳤어.',
    ]);
    await say_by_passer_by_and_wait(
      '차를 타고 구경 온 흰 옷의 팬',
      '차? 내 차 어디 갔어!? 여기 세워둔 내 커다란 차 어디 갔냐고!? 새로 뽑은 차인데! 왜 사이드미러만 달랑 남은 거야!?',
    );
    await say_by_passer_by_and_wait(
      '사이드미러가 떨어진 새 차 안에서 담배를 물고 있는 머리 큰 중년 남성 팬',
      [
        '이제야 좀 알겠구만. 트레센의 ',
        acute.get_uma_sex_title(),
        '들은 저마다 엄청난 절기를 품고 있어——',
      ],
    );
    await era.printAndWait('…………');
    await era.printAndWait(
      '세상은 넓고 기이한 일은 많다고 감탄할 수밖에 없는 트레센 트릭 복싱 경기장에서,',
    );
    await era.printAndWait('인류의 미스터리나 다름없는 경기 과정을 감상하는 동안,');
    await era.printAndWait([
      acute.get_colored_name(),
      '는 무난하게 승리를 거듭하며 마침내 결승전 무대에 도달했다——',
    ]);
    await era.printAndWait('…………');
    await muteki.say_and_wait([
      sys_get_colored_callname(72, 100),
      ', 잘 부탁드립니다.',
    ]);
    await muteki.say_and_wait([
      '전설적인 파이터인 ',
      acute.get_uma_sex_title(),
      '와 대결할 수 있게 되다니, 무척 고무되는군요.',
    ]);
    await acute.say_and_wait([
      '오오오~ ',
      sys_get_colored_callname(100, 72),
      ', 잘 부탁하마. 네 자세는 여전히 눈이 부시구나~',
    ]);
    await era.printAndWait([
      '공손하게 예를 갖추는 ',
      muteki.get_colored_name(),
      '를 향해, ',
      acute.get_colored_name(),
      '는 평소처럼 느긋하게 응대했다——',
    ]);
    await era.printAndWait('……잠깐만, 전설적인 파이터? 그게 무슨 소리야?');
    await muteki.say_and_wait('그럼…… 콘고 야에가키류, 한 수 가르침을 청합니다.');
    await era.printAndWait([
      '콘고 야에가키류에 정통한 ',
      muteki.get_colored_name(),
      '가 다시 한번 절을 올렸다.',
    ]);
    await era.printAndWait(
      '주먹을 뻗는 동작은 완벽 그 자체였고, 호흡의 리듬 또한 빈틈이라곤 찾아볼 수 없었다. 드러난 겨드랑이마저 선명하게 보일 정도로 모든 면에서 완벽했다.',
    );
    await era.printAndWait([
      '이런 강적을 마주하고도, ',
      acute.get_colored_name(),
      '는 여전히 여유로운 태도를 유지했다.',
    ]);
    await era.printAndWait('호루라기 소리와 함께, 두 사람의 경기가 시작되었다——');
    await era.printAndWait('…………');
    await muteki.say_and_wait('흐읍——하아! 핫!');
    await era.printAndWait([
      '결승전의 서막은 ',
      muteki.get_colored_name(),
      '의 급격한 돌진으로 열렸다.',
    ]);
    await era.printAndWait('매서운 권풍, 격렬한 돌격. 마치 폭풍우처럼 휘몰아치는 복싱이었다.');
    await era.printAndWait(
      '주먹 하나하나가 강력하기 그지없었고, 자잘한 권법의 초식 따위는 생략한 채 오직 힘과 속도를 겸비한 정권 지르기만으로 상대의 방어를 찢어발기는 방식이었다.',
    );
    await say_by_passer_by_and_wait(
      '댕기머리를 땋은 검고 건장한 사내',
      '소O권법! ——의심할 여지도 없이, 저것은 소O권법이다!」',
    );
    era.printButton(
      '（옆에서 해설하고 있는, 갈색 호박처럼 시커멓고 덩치 큰 녀석은 대체 어디서 굴러온 거야?）',
      1,
    );
    await era.input();
    await muteki.say_and_wait(
      '하아아!! 일심불란! 마지막까지 버텨내기만 한다면! 이 링 위에 끝까지 서 있는 자가 바로 승리자다!!!',
    );
    await era.printAndWait([
      '일격, 이격, 삼격…… ',
      muteki.get_colored_name(),
      '의 쉼 없는 맹공이 계속 이어졌다.',
    ]);
    await era.printAndWait(
      '상식적으로 생각하면, 이렇게 강력한 공격은 체력 소모가 엄청날 텐데.',
    );
    await era.printAndWait([
      '즉, ',
      acute.get_colored_name(),
      '가 상대의 힘이 빠질 때까지 버텨내기만 하면——',
    ]);
    await say_by_passer_by_and_wait('검고 건장한 사내', '아니, 소용없다.');
    era.printButton('「……네?」', 1);
    await era.input();
    await era.printAndWait([
      '곁에 있던 사내는 마치 마음을 읽은 것처럼, ',
      me.get_colored_name(),
      '이(가) 속으로 내린 결론을 부정했다.',
    ]);
    await say_by_passer_by_and_wait(
      '검고 건장한 사내',
      '잘 들어봐라, 저 자의 호흡 리듬을—— 단 한 치의 흐트러짐도 없다!',
    );
    await me.say_and_wait('아니, 그걸 누가 들어요!?', true);
    await say_by_passer_by_and_wait(
      '검고 건장한 사내',
      '그렇다, 이 특수한 호흡 리듬은…… 파O전사들이 사용하는 비전의 호흡법이다.',
    );
    await say_by_passer_by_and_wait(
      '검고 건장한 사내',
      '호흡 빈도를 조절함으로써, 체내 흡수된 산소를 전신의 근육 구석구석까지 극한으로 활용하는 방법이지.',
    );
    await say_by_passer_by_and_wait(
      '검고 건장한 사내',
      '전설에 따르면 이 호흡법의 극의에 달한 자는 육체를 젊게 유지시킬 수 있을 뿐만 아니라, 수배의 중력이 작용하는 듯한 해발 수천 미터의 고원에서도 마음먹은 대로 일격을 날릴 수 있다고 한다——',
    );
    await me.say_and_wait('………………………………');
    await me.say_and_wait('그래서요?');
    await say_by_passer_by_and_wait('검고 건장한 사내', '아직도 모르겠나?');
    await era.printAndWait([
      '사내는 도저히 믿을 수 없다는 눈빛으로 ',
      me.get_colored_name(),
      '을 바라보았다.',
    ]);
    await era.printAndWait(
      '……대체 누가 이 자에게 일반인도 온갖 무술의 전문 용어를 상식으로 알고 있을 거라는 자신감을 심어준 걸까?',
    );
    await say_by_passer_by_and_wait('검고 건장한 사내', [
      '겨·우·이·정·도·의 공격 빈도라면, 호흡법을 구사하는 ',
      muteki.get_colored_name(),
      ', 는 사흘 밤낮을 계속 내질러도 전혀 지치지 않을 거다.',
    ]);
    era.printButton('「……네에?」', 1);
    await era.input();
    await say_by_passer_by_and_wait('검고 건장한 사내', [
      '……아니, 사흘 밤낮이란 것도 어디까지나 인☆간이라는 생물의 한계일 뿐—— 만약 ',
      acute.get_uma_sex_title(),
      '라면 그보다 훨씬 오랫동안 버틸 수 있겠지.',
    ]);
    await say_by_passer_by_and_wait('검고 건장한 사내', [
      '콘고 야에가키류에 정통한 ',
      acute.get_uma_sex_title(),
      ', ',
      muteki.get_colored_name(),
      '를 맞이하여, 전설적인 파이터 ',
      acute.get_colored_name(),
      '는 과연 어떻게 대응할 것인가! ',
      acute.get_colored_name(),
      '는 대체 어떤 방법으로 ',
      muteki.get_colored_name(),
      '의 호흡법 연타를 돌파할 것인가? 하아…… 이 얼마나 기가 막힌 광경인가. 파O전사와 O즈의 결전 이후 백년 만…… 갈수록 기대가 되는구만.',
    ]);
    await me.say_and_wait('…………');
    era.printButton('（지금이라도 집에 가서 저녁밥 준비하면 늦지 않으려나?）', 1);
    await era.input();
    await era.printAndWait('…………');
    await acute.say_and_wait('하나… 둘… 셋… 넷! (*정권 지르기)');
    await acute.say_and_wait(
      [
        '과연 ',
        sys_get_colored_callname(100, 72),
        '…… 호흡법을 그렇게 능숙하게 다루다니, 주먹을 그렇게 많이 뻗고도 땀 한 방울 흘리지 않는구나——',
      ],
      true,
    );
    await acute.say_and_wait(
      [
        '이런 공세 속에서 계속 버텨내는 건 무척 고되지만—— 그래도 나 역시 복서였던 아버지의 ',
        acute.sex_code - 1 ? '딸': '아들',
        '이니까 말이잖니!',
      ],
      true,
    );
    await acute.say_and_wait('둘… 둘… 셋… 넷! (*정권 지르기)');
    await era.printAndWait([
      '상대의 숨 막히는 호흡 연타 속에서도, 굳건한 의지를 지닌 ',
      acute.get_colored_name(),
      '는 방어 태세를 유지하며 전혀 밀리지 않았다!',
    ]);
    await era.printAndWait([
      '어떻게 공격해도 빈틈이 보이지 않는 ',
      acute.get_colored_name(),
      '를 마주하자, ',
      muteki.get_colored_name(),
      '의 공세가 점점 조급하고 거칠어지기 시작했다——',
    ]);
    await era.printAndWait([
      '……이대로만 가면, 어쩌면 ',
      muteki.get_colored_name(),
      '가 허점을 드러내는 순간 일격에 승부를 결정지을 수 있을지도?',
    ]);
    await acute.say_and_wait(
      '으음…… 하지만 벌써 몸이 한계에 다다랐어—— 이대로 가다간……',
      true,
    );
    era.printButton(
      `「힘내, ${acute.name}! 고기는 이미 냄비에서 끓고 있으니까! 이기고 돌아가서 같이 니쿠자가 먹자!」`,
      1,
    );
    await era.input();
    await acute.say_and_wait(
      [callname, '…… ', callname, '이 날 응원해 주고 있어——'],
      true,
    );
    await acute.say_and_wait(
      ['후우—— ', callname, '에게 볼품없는 모습을 보여줄 수는 없지.'],
      true,
    );
    await acute.say_and_wait(
      '더 이상 버틸 수 없다면…… 지금 이 순간, 모든 것을 이 일격에 걸겠어……!',
      true,
    );
    await acute.say_and_wait(
      '으아아아!!! 마지막 순간까지 뜨겁게 불태우는 거야. 받아라, 나의 마지막 일격을!!!',
    );
    await era.printAndWait([
      '바로 이 순간, ',
      acute.get_colored_name(),
      '는 수비를 과감히 포기했다.',
    ]);
    await era.printAndWait('한 발을 뒤로 빼며, 꼬리를 휙 하고 털어냈다——');
    await era.printAndWait('모든 정신과 힘을 이 한 번의 지르기에 쏟아부었다!');
    if (
      RaceHistory.get(100)
        .get_values()
        .filter((e) => e.rank === 1).length >= 5
    ) {
      await era.printAndWait([
        acute.get_colored_name(),
        ', 전설의 파이터가 모든 것을 걸고 뻗은 천하제일의 유권.',
      ]);
      await era.printAndWait([
        '그 찰나의 순간, ',
        muteki.get_colored_name(),
        '의 강맹한 강권을 절묘하게 비껴가며—— 탄탄한 근육으로 가득 찬 복부에 내리꽂혔다!',
      ]);
      await era.printAndWait(['그렇다, ', acute.sex, '의 주먹은 강권처럼 격렬하지 않다.']);
      await era.printAndWait(['그렇다, ', acute.sex, '의 주먹은 강권처럼 용맹하지도 않다.']);
      await era.printAndWait('그렇다, 이 부드러운 일격만으로는 승리할 수 없을지도 모른다.');
      await era.printAndWait(
        '어쩌면 거목처럼 단단하고 버드나무처럼 부드러운 유권은, 태생적으로 강권처럼 눈부시게 빛날 수 없는 운명일지도 모른다.',
      );
      await era.printAndWait('하지만 이 일격 하나라면, 그것으로 충분했다.');
      await era.printAndWait('금강불괴 같은 강맹함을 무너뜨리기 위해선——');
      await era.printAndWait('오직 이 일격, 그·것·으·로·충·분·했·다.');
      await muteki.say_and_wait('으학! 윽——');
      await muteki.say_and_wait('호, 호흡의 리듬이!?', true);
      await say_by_passer_by_and_wait('심사위원', '삐, 삐, 삐이——');
      await say_by_passer_by_and_wait('검고 건장한 사내', '허점이 드러났다!');
      await era.printAndWait('그렇다, 좌중의 모두가 똑똑히 목격했다.');
      await era.printAndWait([
        acute.get_colored_name(),
        '의 유권이 ',
        muteki.get_colored_name(),
        '의 복부에 작렬하는 바로 그 순간,',
      ]);
      await era.printAndWait([
        muteki.get_colored_name(),
        '의 그 완벽에 가깝던 호흡법에—— 마침내 거대한 균열이 생겼음을!',
      ]);
      await muteki.say_and_wait('큭…… 제 호흡을 무너뜨리는 것, 그것이 목적이셨습니까?', true);
      await muteki.say_and_wait(
        '제 공격이 멎는 타이밍을 노리고, 호흡이 교차하는 간극을 찾아내어…… 숨을 들이쉬는 찰나의 순간에 리듬을 끊는 유권을 복부에 찌르시다니. 이 얼마나 공포스러운 통찰력입니까.',
        true,
      );
      await muteki.say_and_wait(
        '전설적인 파이터이자 황금 세대의 전설…… 비록 세월의 침식으로 인해 파괴력은 예전만 못할지라도, 세월이 안겨준 지혜와 꺾이지 않는 자의 견고함이 오히려 당신을 새로운 경지로 도달하게 한 것입니까——',
        true,
      );
      await muteki.say_and_wait(
        ['——', sys_get_colored_callname(72, 100), '!'],
        true,
      );
      await acute.say_and_wait('훗…… 숨 돌릴 틈 따윈 주지 않겠단다!');
      await acute.say_and_wait([
        '잘 보려무나, ',
        muteki.get_colored_name(),
        '—— 내 사전에 『포기』나 『끝』이라는 단어는 없으니까 말이란다!!!',
      ]);
      await era.printAndWait('비록 제대로 서 있기조차 힘들고,');
      await era.printAndWait('비록 시야가 흐려져 아무것도 보이지 않으며,');
      await era.printAndWait('비록 다리가 천근만근 무거워 가늘게 떨릴지라도.');
      await era.printAndWait(
        '하지만 무술계의 전설이라 불리는 이는—— 고작 이 정도의 시련에 무릎 꿇지 않는다!',
      );
      await era.printAndWait([
        '어쩌면 아주 잠깐의 휴식만 주어져도, ',
        muteki.get_colored_name(),
        '는 호흡의 리듬을 재정비할 수 있을지 모른다.',
      ]);
      await era.printAndWait(
        '어쩌면 공격 템포가 아주 조금만 늦춰져도, 저 무적의 강권이 다시금 끝없는 공세를 시작할지 모른다.',
      );
      await era.printAndWait([
        '어쩌면 새로운 시대의 총아인 ',
        muteki.get_colored_name(),
        '에게는 무수한 실수가 허용될지라도, 구시대의 전설인 ',
        acute.get_colored_name(),
        '는 단 한 번의 실수만으로도 패배의 나락으로 떨어질 것이다.',
      ]);
      await era.printAndWait('——하지만, 그게 무슨 상관이란 말인가?');
      await era.printAndWait('「단 한 번만 실수해도 패배한다」면, 그렇다면——');
      await era.printAndWait(
        '【단 · 한 · 번 · 도 · 실 · 수 · 하 · 지 · 않 · 으 · 면 · 되 · 는 · 게 · 아 · 닌 · 가?】',
        {
          color: acute.color,
          fontSize: '2rem',
        },
      );
      await era.printAndWait(
        '폭풍우처럼 몰아치는 유권, 영원히 멈추지 않는 유권, 단호하고 결연한 유권——',
      );
      await acute.say_and_wait('나의 유권은 아직 끝나지 않았단다!!!!');
      era.drawLine();
      await era.printAndWait('노을빛이 물든 링 위에, 끝까지 서 있는 승자는 오직 한 사람뿐이었다.');
      await say_by_passer_by_and_wait('심사위원', '여기까지, 승부 판정!');
      await say_by_passer_by_and_wait(
        '심사위원',
        '트레센 제83회 천하제일 트릭 복싱 대회, 최종 우승자는——',
      );
      await say_by_passer_by_and_wait('심사위원', [
        acute.get_colored_name(),
        '!',
      ]);
      await era.printAndWait([
        '결승전 링 위에서, 흐려진 시야 속에서도 ',
        acute.get_colored_name(),
        '는 자신의 오른 주먹을 하늘 높이 치켜들었다.',
      ]);
      await era.printAndWait('링 아래에서 우레와 같은 박수갈채가 쏟아지며 승자에게 영광과 환호를 선사했다.');
      await say_by_passer_by_and_wait('검고 건장한 사내', '이겼다, 이겼어!!!');
      await say_by_passer_by_and_wait(
        '검고 건장한 사내',
        '비록 세월이 흘러 전설적인 주먹이 과거의 파괴력에는 미치지 못할지라도,',
      );
      await say_by_passer_by_and_wait('검고 건장한 사내', [
        '하지만 ',
        acute.sex,
        '는 기어이 자신을 뛰어넘고 세월의 침식을 극복해 내어, 극치에 달한 속도의 유권으로 무적의 강권을 꺾어버렸다!',
      ]);
      await say_by_passer_by_and_wait('검고 건장한 사내', [
        acute.get_colored_name(),
        '! ',
        acute.get_colored_name(),
        '!!! ',
        acute.sex,
        '가 마침내 명실상부한 무술계의 정점에 우뚝 섰다!',
      ]);
      await say_by_passer_by_and_wait('검고 건장한 사내', [
        acute.sex,
        '가 마침내 시간을 이겨낸 것이다!!!!!!',
      ]);
      await era.printAndWait('관객석에서는 흥분한 관중들이 서로를 격하게 부둥켜안았다.');
      await era.printAndWait(
        '감동의 눈물이 온 경기장을 가득 메웠고, 심사위원마저 남몰래 감격의 눈물을 훔치고 있었다.',
      );
      await era.printAndWait('바로 이 순간—— 링 위에 우뚝 선 무인.');
      await era.printAndWait('그 높이 치켜든 주먹은 무술계의 진정한 영원한 전설로 각인되었다.');
      era.drawLine();
      await era.printAndWait([
        '어느덧 노을이 지고 인파가 흩어질 무렵. 이미 기진맥진해진 ',
        acute.get_colored_name(),
        '를 등 뒤에 업고, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 집으로 향하는 길에 올랐다.',
      ]);
      await acute.say_and_wait('에헤헤…… 설마 내가 이길 줄은 정말 몰랐단다.');
      await era.printAndWait([
        '당신의 등 뒤에 기대어 온몸에 힘이 빠져 꼼짝도 못 하면서도, ',
        acute.get_colored_name(),
        '는 여전히 부드럽고 느긋한 어조로 오늘의 전과를 조곤조곤 이야기했다.',
      ]);
      era.printButton(
        '「하하…… 그러게, 정말 아슬아슬했어. 나랑 그 호박 같은 남자랑 링 아래에서 정말 손에 땀을 쥐고 지켜봤다고.」',
        1,
      );
      await era.input();
      await acute.say_and_wait('어머나~~~ 그랬니~?');
      await era.printAndWait([
        '유독 기쁜 탓인지, ',
        acute.get_colored_name(),
        '의 목소리에 흔치 않게 장난기 섞인 음색이 묻어났다.',
      ]);
      await acute.say_and_wait([
        '하지만 내 기억으로는—— 우리 ',
        callname,
        ', 원래 복싱에는 별로 취미가 없지 않았었니?',
      ]);
      era.printButton('「하하…… 그건 그거, 이건 이거지.」', 1);
      await era.input();
      await era.printAndWait([
        '조금 멋쩍은 듯 헛웃음을 지으며, ',
        me.get_colored_name(),
        '은(는) 일부러 고개를 돌려 저 멀리 저무는 석양을 바라보았다. 등 뒤에서 늘 자신의 속마음을 꿰뚫어 보곤 하는 이 어엿한 ',
        acute.get_uma_sex_title(),
        '와 눈이 마주치지 않도록.',
      ]);
      era.printButton('「솔직히 말해서…… 처음에는 복싱 시합에 약간 편견이 있긴 했어.」', 1);
      await era.input();
      await acute.say_and_wait('으음~—— 네 말을 들으니 지금은 생각이 좀 바뀐 모양이구나?');
      era.printButton('「응, 완전히 바뀌었어.」', 1);
      await era.input();
      await era.printAndWait('망설임 없이 순순히 인정했다.');
      await era.printAndWait([
        '……',
        me.get_colored_name(),
        '은(는) 솔직히 인정해야만 했다. 처음에는 복싱 경기에 대해 일종의 비뚤어진 시선을 가지고 있었다는 것을.',
      ]);
      await era.printAndWait(
        '아무래도 이미지상, 서로 타격을 주고받는 거친 시합은 늘 【야만】이라는 단어와 엮이기 마련이니까.',
      );
      await era.printAndWait(
        '하지만 마음 깊은 곳에 숨어 있던 그 사소한 편견은, 방금 전의 깊은 감동을 안겨준 승부 앞에서 이미 눈 녹듯 사라진 지 오래였다.',
      );
      await era.printAndWait('링 위에서 끝까지 포기하지 않던 눈부신 모습, 그리고 하늘을 향해 당당히 치켜들었던 오른 주먹.');
      await era.printAndWait('늘 나약하기만 했던 자신에게는, 아마 평생토록 잊지 못할 광경이 되리라.');
      await era.printAndWait('그 모습은, 실로 너무나도 【눈부셨기】 때문에.');
      await acute.say_and_wait('음~ 후흥~');
      await era.printAndWait([
        '어깨에 기댄 채 가만히 있던 ',
        acute.get_colored_name(),
        '는 대체 무슨 생각을 하는지, 이내 콧노래를 흥얼거리기 시작했다.',
      ]);
      await acute.say_and_wait(['있잖니, ', callname, '.']);
      await me.say_and_wait(['왜 그래, ', acute.get_colored_name(), '?']);
      await acute.say_and_wait(
        '만약에 말이란다…… 만약에 내가 져버렸다면, 그럴 땐 넌 어떻게 했을 거니?',
      );
      era.printButton('「……졌을 때?」', 1);
      await era.input();
      await era.printAndWait('미간을 찌푸렸다. 참으로 난감하고도 엉뚱한 질문이 아닐 수 없다.');
      await era.printAndWait([acute.get_colored_name(), '가 패배한다니?']);
      await era.printAndWait('그런 생각은 애초에 단 한 순간도 해본 적이 없었다.');
      await era.printAndWait(
        '하지만 질문을 받은 이상—— 답변을 위해 진지하게 고민해 볼 필요는 있었다.',
      );
      era.printButton(
        `「……설령 졌다 해도 상관없어. 그깟 패배 정도로 ${acute.name}가 무너질 리 없으니까.」`,
        1,
      );
      await era.input();
      await acute.say_and_wait('……으음? 대체 왜 그렇게 생각하려나?');
      await era.printAndWait([
        acute.get_colored_name(),
        '는 무척 흥미롭다는 듯이 물어왔다. 이 질문의 답변이 내심 무척 신경 쓰이는 모양이다.',
      ]);
      era.printButton('「그야—— 설령 실패하더라도, 그 뒤에 다시 털고 일어나면 그만이니까.」', 1);
      await era.input();
      await era.printAndWait([
        '노을빛이 흐르는, 텅 빈 안뜰. ',
        acute.get_colored_name(),
        '를 업은 ',
        me.get_colored_name(),
        '은(는) 고목나무 구멍 옆에 걸음을 멈추었다.',
      ]);
      await era.printAndWait('그래, 실패할 수도 있다. 하지만 그게 뭐 어쨌단 말인가?');
      await era.printAndWait('단지 【이번에】 운이 나빠 미끄러졌을 뿐이다.');
      await era.printAndWait('다음에 꼭 【다시 이겨내면】 되는 일이다.');
      await era.printAndWait([
        '설령 【100번】을 연거푸 실패한 낙오자라 할지라도, 마지막에 【이겨낼 수만 있다면】—— ',
        acute.sex,
        '는 결국 최후의 승리자로 남는 법이다.',
      ]);
      await era.printAndWait('지극히 당연하고도 단순 명쾌한 이치.');
      await era.printAndWait([
        '——하지만 동시에, 이는 다름 아닌 ',
        acute.get_colored_name(),
        '가 ',
        me.get_colored_name(),
        '에게 몸소 가르쳐 준 진리이기도 했다.',
      ]);
      await era.printAndWait([
        '붉게 물든 노을 속에서, 마치 사고를 치고 꾸중을 들을까 두려워하는 소년처럼, ',
        me.get_colored_name(),
        '은(는) 슬그머니 고개를 돌려 등 뒤에 계신 어른의 눈치를 살폈다.',
      ]);
      await era.printAndWait([
        '하지만 조심스레 돌아본 그곳엔—— 언제부터였는지 ',
        acute.get_colored_name(),
        ' 역시 자신을 물끄러미 바라보고 있었다.',
      ]);
      await era.printAndWait(
        '그 깊고 짙은 눈동자 너머로, 마치 이른 새벽녘 맺힌 이슬처럼 투명한 생명의 에너지가 반짝이고 있었다——',
      );
      await era.printAndWait('찰나의 순간, 가슴이 쿵쾅거리며 걷잡을 수 없이 요동쳤다.');
      await acute.say_and_wait('……');
      await acute.say_and_wait(['………… 아, 저기, ', callname, '.']);
      await acute.say_and_wait('이제…… 슬슬 내려주어도 괜찮단다?');
      era.printButton('「아—— 바, 바로! 바로 내려줄게——」', 1);
      await era.input();
      await era.printAndWait('갑자기 찾아온 심한 허둥거림.');
      await era.printAndWait('마치 어른들에게 나쁜 짓을 들킨 개구쟁이 소년처럼.');
      await era.printAndWait([
        '조심스레 몸을 낮추자, ',
        acute.get_colored_name(),
        '의 발끝이 사뿐히 땅에 닿았다.',
      ]);
      await era.printAndWait('빙그르르—— 땅에 내려온 그녀가 가볍게 몸을 돌렸다.');
      await era.printAndWait([
        '뒤돌아보니 ',
        acute.get_colored_name(),
        '가 자신에게 등을 돌린 채 서 있었다—— 그 얼굴은 보이지 않았다.',
      ]);
      await acute.say_and_wait([
        '……미안하구나, ',
        callname,
        '. 사실 네게 작은 거짓말을 하나 했단다.',
      ]);
      await era.printAndWait('달아오른 심장이 요란하게 고동친다.');
      await acute.say_and_wait(
        '사실은 말이지…… 시합이 끝난 뒤에도 아주 약간은 기운이 남아 있었단다…… 트레이닝실까지 혼자 걸어가는 것 정도는 문제없었을 텐데 말이지.',
      );
      await era.printAndWait(
        '어느덧 밤이 찾아오는 밤바람 속인데도, 전신이 마치 끓어오르는 용암처럼 뜨겁게 달아올랐다.',
      );
      await acute.say_and_wait('그러니까, 내 말은……');
      await era.printAndWait([
        acute.sex,
        '가 천천히 돌아보자 고운 머리칼이 허공을 수놓았다. 유난히 돋보이는 흰 브릿지가 마치 은은한 달빛처럼 아름답게 흔들리며——',
      ]);
      await acute.say_and_wait([
        '비록…… 나나 다른 ',
        acute.get_uma_sex_title(),
        '들에게 이미 귀가 따갑도록 들었을 말이겠지만 말이다?',
      ]);
      await era.printAndWait('붉게 물든 뺨에서 금방이라도 뜨거운 열기가 피어오를 것만 같았다.');
      await acute.say_and_wait('하지만…… 나는 역시 네가 참 좋구나—— 트레이너 군.');
      await era.printAndWait(
        '붉은 노을빛 아래, 수줍으면서도 확신에 찬 고백이 고요한 정원 사이에 은은하게 울려 퍼졌다.',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        '의 얼굴은 이미 토마토처럼 붉어졌지만—— 눈빛만큼은 흔들림 없이 당신을 똑바로 향하고 있었다.',
      ]);
      await era.printAndWait('……이상해 보일지도 모르겠지만,');
      await era.printAndWait('전혀 그렇지 않다.');
      await era.printAndWait('왜냐하면,');
      await era.printAndWait([
        '이 모습이야말로 자신이 가장 잘 알고 있는 ',
        acute.get_colored_name(),
        '이기 때문이다.',
      ]);
      await era.printAndWait('평소엔 한없이 온화하고 부드럽지만, 누구보다 용감하고 결코 꺾이지 않는,');
      await era.printAndWait([
        '그 차분한 미소 뒤편에 누구보다 뜨거운 열정을 품고 달리는 ',
        acute.get_colored_name(),
        '이기에.',
      ]);
      await me.say_and_wait('……');
      await me.say_and_wait('…………');
      await me.say_and_wait('………………하하.');
      await era.printAndWait('저도 모르게 피식 웃음이 새어 나왔다.');
      await era.printAndWait('……이상해 보일지도 모르겠지만,');
      await era.printAndWait('전혀 그렇지 않다.');
      await era.printAndWait('왜냐하면,');
      await era.printAndWait([
        '이 모습 역시 ',
        acute.get_colored_name(),
        '가 가장 잘 알고 있는 트레이너의 모습일 테니까.',
      ]);
      era.drawLine();
      await era.printAndWait('석양이 지는 하늘 아래, 두 사람은 말없이 나란히 걸었다.');
      await era.printAndWait('조금씩 걸어 드디어 트레이닝실에 도착했다.');
      await era.printAndWait('가스레인지 위 냄비 속에선 감자가 마침내 알맞게 익어 있었다.');
      await era.printAndWait([
        acute.get_colored_name(),
        '가 정성스레 음식을 그릇에 담았고, ',
        me.get_colored_name(),
        '은(는) 수저와 앞접시를 날랐다.',
      ]);
      await era.printAndWait('짭조름한 소고기 조림을 듬뿍 얹어 밥과 함께 비빈다.');
      await era.printAndWait('우물우물, 달콤하고 따뜻한 온기를 입안 가득 채워 넣었다.');
      new AcuteEduMarks().ending++;
    } else {
      await say_by_passer_by_and_wait('심사위원', '거기까지!');
      await say_by_passer_by_and_wait(
        '심사위원',
        '트레센 제83회 천하제일 트릭 복싱 대회, 최종 우승자는——',
      );
      await say_by_passer_by_and_wait('심사위원', [
        muteki.get_colored_name(),
        '!',
      ]);
      await say_by_passer_by_and_wait('검고 건장한 사내', [
        acute.get_colored_name(),
        '의 마지막 일격, 복부를 정확히 타격해 ',
        sys_get_colored_callname(100, 72),
        '의 호흡 리듬을 무너뜨린 연출은 그야말로 기적이었다……',
      ]);
      await say_by_passer_by_and_wait(
        '검고 건장한 사내',
        '그러나 참으로 안타깝도다! 최강의 유권이라 할지라도 결국 최강의 강권을 꺾지는 못하는가——',
      );
      await say_by_passer_by_and_wait(
        '검고 건장한 사내',
        '만약 10년만 더 젊었더라면, 저 전설의 육체에 강인함이 온전히 남아 있었을 적이었다면…… 방금 그 신비로운 일격만으로 시합을 끝내고도 남았을 터인데.',
      );
      await say_by_passer_by_and_wait(
        '검고 건장한 사내',
        '하아…… ㅣ인생무상이라더니. 나이야말로 모든 무도가들이 마주하는 가장 잔혹한 대적이로구나.',
      );
      await era.printAndWait('링 아래에서 열정적으로 해설을 하던 검고 건장한 사내는 조용히 눈물을 흘렸다.');
      await era.printAndWait('그리고 다른 한편, 링 위에서는——');
      await acute.say_and_wait([
        callname.substring(0, 1),
        '……',
        callname,
        '……',
      ]);
      await era.printAndWait([
        '링 위에서 흘린 땀방울이 하얀 김이 되어 피어오르는 와중, ',
        acute.get_colored_name(),
        '의 눈가에 촉촉한 이슬이 맺히기 시작했다.',
      ]);
      await acute.say_and_wait(
        '우우웅~~~ 난 이제…… 하얗게 불태웠단다. 아무것도 남지 않은…… 하얀 재가 되어버렸어——',
      );
      await era.printAndWait([
        '모든 기력을 소진한 ',
        acute.get_colored_name(),
        '는 실이 끊어진 인형처럼 링 바닥에 스르륵 쓰러졌다.',
      ]);
      await era.printAndWait('——그러나 그와 동시에, 관중석에서는 사방을 뒤흔드는 폭풍 같은 박수가 터져 나왔다——');
      await era.printAndWait([
        '그렇게 ',
        acute.get_colored_name(),
        '는 뜨거운 박수갈채를 온몸에 받으며 링 뒤편으로 퇴장했다.',
      ]);
      await era.printAndWait('구시대의 전설은, 결국 새로운 시대의 총아에게 자리를 양보해야 하는 법인가——');
      era.drawLine();
      await era.printAndWait([
        '어느덧 석양이 깔리고 관중들이 떠나간 자리. 힘이 다 빠져 움직이지 못하는 ',
        acute.get_colored_name(),
        '를 등에 업은 채, ',
        me.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 터덜터덜 집으로 향했다.',
      ]);
      await acute.say_and_wait([
        '으으음~~ 우리 ',
        callname,
        '에게 영 보기 흉한 꼴을 보여주고 말았구나——',
      ]);
      await era.printAndWait([
        '당신의 등에 축 늘어진 채 손가락 하나 까딱하지 못하면서도, ',
        acute.get_colored_name(),
        '는 입술을 삐죽이며 오늘 시합에 못내 아쉬움을 드러냈다.',
      ]);
      era.printButton(
        '「에이—— 그래도 마지막에 보여준 그 회심의 일격은 나도, 관중들도 전부 똑똑히 봤는걸? 다들 엄청 감동했다고.」',
        1,
      );
      await era.input();
      await acute.say_and_wait('그렇지만…… 패배는 결국 패배인 법이란다.');
      era.printButton('「하하…… 그렇긴 하지. 지긴 졌네.」', 1);
      await era.input();
      await era.printAndWait('사각의 링 위에서 벌어지는 승부란 이토록 무정하고 냉혹하다.');
      await era.printAndWait(
        '승자가 있다면 필연적으로 패자가 생기기 마련. 이긴 자는 무한한 영광을 누리지만, 패배한 자는 쓸쓸히 무대 뒤로 사라질 뿐.',
      );
      await era.printAndWait(
        '몸 상태나 당일의 컨디션, 운의 유무를 불문하고 경기장에서 100%의 실력을 발휘해 승리를 쟁취하지 못한다면 아무리 뛰어난 트레이닝 기록을 가졌어도 결국 물거품에 지나지 않는다.',
      );
      await era.printAndWait(
        '본래 세상이란 철저히 결과만을 놓고 따지는 냉정한 곳이니까. 링 위도 그렇고, 레이스도 마찬가지다.',
      );
      await era.printAndWait('……하지만——');
      era.printButton('「이번에 졌다면, 다음 판에서 화끈하게 이겨버리면 되는 거잖아.」', 1);
      await era.input();
      await acute.say_and_wait(['……', callname, '?']);
      era.printButton(
        '「내 말은—— 설령 지금 무릎을 꿇었어도, 다음 기회에 보기 좋게 다시 빼앗아 오면 그만이라는 뜻이야.」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '설령 결과가 전부인 세상이라 한들, 그것이 인간에게 오직 【단 한 번의 기회】만 주어진다는 뜻은 결코 아니니까.',
      );
      await era.printAndWait('그래, 실패했다. 하지만 그게 대체 어쨌단 말인가?');
      await era.printAndWait('이번 한 번만 아쉽게 미끄러진 것뿐이다.');
      await era.printAndWait('다음 기회에 기어코 【이겨내면】 될 일이다.');
      await era.printAndWait([
        '비록 【100번】을 고꾸라진 낙오자라 할지라도, 마지막 순간에 【승리를 움켜쥘 수만 있다면】—— ',
        acute.sex,
        '는 언제든 최후의 승리자로 군림하는 법이다.',
      ]);
      await era.printAndWait([
        '등 뒤의 ',
        acute.get_colored_name(),
        '를 한 번 추스르며 걷다 보니, 어느새 트레이닝실까지 고작 몇 걸음밖에 남지 않았다.',
      ]);
      await era.printAndWait([
        '슬쩍 고개를 돌려 ',
        acute.get_colored_name(),
        '를 바라보자, 신기하게도 때마침 ',
        acute.get_colored_name(),
        ' 역시 ',
        me.get_colored_name(),
        '을(를) 가만히 응시하고 있었다.',
      ]);
      await era.printAndWait([
        '하지만 평소와는 달리, 이번 ',
        acute.get_colored_name(),
        '의 눈빛 속엔 무언가 낯선 아지랑이가 피어오르고 있었다.',
      ]);
      await era.printAndWait('——대체 어떤 단어로 이 묘한 분위기를 형언할 수 있을까?');
      await era.printAndWait('늘 한결같던 느긋함도, 자애로운 따스함도 아닌……');
      await era.printAndWait(
        '어딘가 미지의 감정에 놀란 듯한 잔잔함, 그리고 평소보다 훨씬 가냘프고 여린 기색.',
      );
      await era.printAndWait(
        '그 깊고 짙은 눈동자 너머로, 마치 이른 새벽녘 맺힌 이슬처럼 투명한 생명의 에너지가 반짝이고 있었다——',
      );
      await era.printAndWait([
        '왠지 모르게, 등 뒤에서 느껴지는 이 「처음 마주하는」 신비롭고 「가녀린 ',
        acute.get_teen_sex_title(),
        '」의 기척에 심장이 쿵쾅쿵쾅 뛰기 시작했다.',
      ]);
      await era.printAndWait(
        '세차게 요동치는 박동—— 이윽고 온몸을 붉게 물들일 듯한 뜨거운 용기가 목구멍 너머까지 치밀어 올랐다.',
      );
      era.printButton('「……하하.」', 1);
      await era.input();
      await era.printAndWait('참지 못하고 헛웃음을 터뜨렸다.');
      await acute.say_and_wait('……왜 웃는 거니?');
      era.printButton('「그냥……냄비 안에서 푹 익어가고 있을 고기가 생각나서.」', 1);
      await era.input();
      await era.printAndWait([
        '말을 마친 ',
        me.get_colored_name(),
        '은(는) 다시 고개를 정면으로 돌렸다. 눈앞에 저녁노을이 짙게 깔린 복도가 길게 뻗어 있었다.',
      ]);
      await acute.say_and_wait('……그게 웃을 일인지 난 잘 모르겠구나.');
      await era.printAndWait([
        '살짝 입술을 삐죽이며, 마치 순진한 소녀처럼 수줍어하는 ',
        acute.get_colored_name(),
        '가 당신의 어깨에 가만히 머리를 기대왔다.',
      ]);
      era.drawLine();
      await acute.print_and_wait('……사실 기운은 벌써 다 회복되었단다.');
      await acute.print_and_wait([
        '적어도 이 짧은 거리 정도는, 명색이 ',
        acute.get_uma_sex_title(),
        '인데 근성으로 가볍게 걸어갈 수 있었을 테지.',
      ]);
      await acute.print_and_wait('……하지만 말이다.');
      await acute.print_and_wait('하지만……');
      await acute.print_and_wait('고작 몇 걸음밖에 남지 않은 길이라면.');
      await acute.print_and_wait([
        '우리 ',
        callname,
        '의 든든한 등에 엎혀 조금만 더 어리광을 부려도…… 괜찮은 법이잖니?',
      ]);
      await acute.say_and_wait('………………');
      await acute.say_and_wait('내 가슴 깊은 곳에서 피어오르는 이 간지러운 고동은……', true);
      await acute.say_and_wait(['역시, 난 우리 ', callname, '을…… 그를——）'], true);
      era.drawLine();
      await acute.print_and_wait('그렇게, 땀 냄새와 눈물이 섞인 짭조름한 팬 대감사제는');
      await acute.print_and_wait('그날 밤, 간이 조금 세서 짭짤했던 니쿠자가 저녁 식사와 함께');
      await acute.print_and_wait('조용히 막을 내렸다——');
      era.println();
      flags.wait_flag = get_attr_and_print_in_event(
        100,
        [],
        25,
        undefined,
        true,
      );
      flags.wait_flag =
        get_attr_and_print_in_event(0, [0, 0, 5, 10, 0], 0, undefined, true) ||
        flags.wait_flag;
    }
  };
};