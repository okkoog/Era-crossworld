/**
 * @file 아그네스 디지털 - 애정
 * @author 片手虾好评发售中!
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const fuck_buddy = require('#/event/love/love-events-19/fuck-buddy');
const girl_friend = require('#/event/love/love-events-19/girl-friend');
const half_life = require('#/event/love/love-events-19/half-life');
const wife = require('#/event/love/love-events-19/wife');
const print_event_name = require('#/event/snippets/print-event-name');

const {
  get_chara_talk,
  say_by_passer_by_and_wait,
} = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');

module.exports = class extends CustomizedLove {
  async 49(digital, me, callname) {
    await fuck_buddy(digital, me, callname);
  }

  async 74(digital, me, callname) {
    await girl_friend(digital, me, callname);
  }

  async 89(digital, me, callname) {
    await wife(digital, me, callname);
  }

  async 99(digital, me, callname) {
    await half_life(digital, me, callname);
  }

  async oshi(digital, me, callname) {
    const teio = get_chara_talk(3),
      mcqueen = get_chara_talk(13),
      opera = get_chara_talk(15),
      dotou = get_chara_talk(58),
      palmer = get_chara_talk(64),
      helios = get_chara_talk(65);
    teio.name = '어린애 같은 면이 있는 ' + teio.get_uma_sex_title();
    opera.name = '전혀 신경 쓰지 않는 듯한 ' + opera.get_uma_sex_title();
    dotou.name = '덜렁거려 보이는 ' + dotou.get_uma_sex_title();
    mcqueen.name = '어느 연보라색 털의 ' + mcqueen.get_uma_sex_title();
    palmer.name = '어느 밤색 털의 ' + palmer.get_uma_sex_title();
    helios.name = '파란 머리로 염색한 듯한 ' + helios.get_uma_sex_title();
    await print_event_name('최애', digital);
    if (era.get('cflag:0:위치') !== location_enum.beach) {
      await get_chara_talk(302).say_and_wait('합숙! 그래. 바로 그거네!');
      await era.printAndWait(
        '과연 그 이사장이라고 해야 할까, 지금은 분명 여름 합숙 기간이 아닌데도 갑자기 이런 상황이 벌어졌다.',
      );
    }
    await me.say_and_wait('합숙인가, 나쁘지 않네.');
    await era.printAndWait([
      digital.get_uma_sex_title(),
      '들에게 합숙은 단순한 여행이 아니라 트레이닝이라는 중요한 단계가 포함된 활동이었고, 이는 마치 여름 방학 숙제와도 같았다.',
    ]);
    await era.printAndWait([
      '다행히 대부분의 ',
      digital.get_uma_sex_title(),
      '들은 트레이닝을 사랑했고, ',
      me.get_colored_name(),
      '의 담당 ',
      digital.get_uma_sex_title(),
      '인 ',
      digital.get_colored_name(),
      ' 또한 예외는 아니었다.',
    ]);
    await era.printAndWait([
      '그러고 보면 ',
      digital.get_colored_name(),
      '은 트레이닝 그 자체보다 최애들과 같은 일을 한다는 행위 자체를 더 즐기는 것 같았는데, 과연 ',
      digital.sex,
      '가 정말로 좋아하는 것이 트레이닝 그 자체일까 하는 의문이 들었다.',
    ]);
    await era.printAndWait([
      '목적지에 도착하기 전까지 이런저런 잡생각을 하는 사이, 바퀴가 구르며 초록빛 위로 금빛과 쪽빛이 덮였고, ',
      me.get_colored_name(),
      '은(는) 합숙 장소에 도착했다.',
    ]);
    await era.printAndWait('과연 트레센. 준비된 환경이 꽤 훌륭했다.');
    await era.printAndWait([
      '주변을 둘러보니 곳곳에 수영복 차림의 ',
      digital.get_uma_sex_title(),
      '들이 가득했다. ',
      digital.get_colored_name(),
      '이 본다면 존귀함에 몸부림치다 못해 쓰러질 텐데, 트레이닝은커녕…… 살아남을 수 있을까?',
    ]);
    era.drawLine();
    await era.printAndWait([
      '짜잔, ',
      digital.get_colored_name(),
      '이 나타났다. 학교 수영복, 이른바 스쿨미즈라 불리는 수영복 차림이었는데, 적당히 몸에 붙어 트레이닝하기에 가장 편해 보이는 복장이었다.',
    ]);
    await era.printAndWait([
      digital.sex,
      '는 고개를 들어 멀리 펼쳐진 절경을 눈에 담더니, 미친 듯이 숨을 크게 들이마셨다……',
    ]);
    await digital.say_and_wait('푸른 하늘…… 하얀 구름…… 불어오는 청춘의 바람……');
    await digital.say_and_wait([
      '여기에 있는 모든 ',
      digital.get_uma_sex_title(),
      '짱들! 아아! 숨을 쉬는 것조차 신성모독 같아……',
    ]);
    await digital.say_and_wait('이토록 불경한데도 참을 수가 없어서, 흡……!');
    await era.printAndWait([
      '그러다가 ' ,
      me.get_colored_name(),
      '을(를) 발견하고는 숨을 들이마시다 말고 사레가 걸려 쿨럭거렸다.',
    ]);
    await digital.say_and_wait(['콜록콜록, ', callname, '(이)였군요!']);
    await digital.say_and_wait('아와와, 트레이닝 시작해요! 전 벌써 준비 다 됐다구요!');
    await era.printAndWait([
      '크게 손을 흔들며 평소와 다름없어 보이는 ',
      digital.get_colored_name(),
      '이었지만, 왠지 조금 위화감이 느껴졌다.',
    ]);
    await me.say_and_wait('모처럼 여기까지 왔는데, 먼저 좀 쉬지 않아도 괜찮겠어?');
    await era.printAndWait([
      '마침 사이가 좋아 보이는 두 명의 ',
      digital.get_uma_sex_title(),
      '가 곁을 지나갔다.',
    ]);
    await palmer.say_and_wait('너 얼굴 좀 봐. 아이스크림 다 묻었잖아! 이래서야 원.');
    await helios.say_and_wait('에헤헤, 그럼 네가 닦아주면 되잖아!');
    await era.printAndWait([
      '그야말로 왕도적인 전개에 ',
      digital.get_colored_name(),
      '은 눈을 굴리며 행복한 미소를 지었다.',
    ]);
    await helios.say_and_wait('오늘 밤에 여름 축제가 열린다는데, 구경 고고씽!');
    await palmer.say_and_wait('잠깐, 왜 마음대로 결정하는 거야!');
    await era.printAndWait([
      '배를 어루만지며 잘 먹었다고 중얼거리던 ',
      digital.get_colored_name(),
      '이 갑자기 표정을 싹 바꾸었다.',
    ]);
    await digital.say_and_wait([
      '헤헤…… 좋은 걸 봤네. 아냐 아냐! 흠! ',
      callname,
      '! 이제 트레이닝하러 가요!',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '은 가슴을 탕탕 치며 최대한 진지해 보이려고 애쓰고 있었다. 대체 무슨 일이 생긴 걸까?',
    ]);
    await era.printAndWait([
      digital.sex,
      '의 그 진지한 눈빛을 보니 ',
      me.get_colored_name(),
      '도 더는 뭐라 할 수 없었고, 트레이닝을 시작하기로 했다.',
    ]);
    era.drawLine();
    await era.printAndWait(
      '스톱워치를 눌렀다. 모래사장에서 달리는 것은 잔디나 더트와는 또 달랐기에, 속도가 떨어지는 것은 당연한 일이었다.',
    );
    await me.say_and_wait('좀 쉬었다 하자.');
    await era.printAndWait([
      digital.sex,
      '에게 물과 수건을 건넸다. 바닷가라 물은 사방에 널려 있었지만, 땀은 닦아내야 했다.',
    ]);
    await era.printAndWait([
      '수건을 받아든 ',
      digital.get_colored_name(),
      '이 얼굴을 닦던 도중, 눈길이 다시 저편의 바다의 집으로 향했다.',
    ]);
    await dotou.say_and_wait('죄죄죄죄송해요! 옷에 소스를 묻히다니!');
    await opera.say_and_wait(
      '아아, 나의 광채는 이런 정도로 어두워지지 않아. 오히려 흠집 덕분에 더욱 눈부시게 빛날 뿐이지!',
    );
    await era.printAndWait('음, 확실히 개성 넘치는 콤비였다. 제법 이름난 녀석들이기도 했다.');
    await digital.say_and_wait('꿀꺽꿀꺽…… 으으으응!');
    await era.printAndWait('갑자기 엔진이 돌아가는 듯한 소리가 들렸는데……?');
    await digital.say_and_wait([
      '아! 그럼! ',
      callname,
      '! 전 트레이닝하러 갈게요. 이어서 열 번 왕복할 거라구요!',
    ]);
    await era.printAndWait('한쪽 주먹을 불끈 쥐고 높이 치켜드는 모습이, 혹시 너무 무리하는 건 아닐까 싶었다.');
    await era.printAndWait('그럼 이렇게 하는 건 어떨까.');
    await me.say_and_wait('오늘 밤 근처에서 축제가 있다는데, 같이 구경 가지 않을래?');
    await digital.say_and_wait('오……! 좋네요, 축제! 좋아요, 가요!');
    await era.printAndWait([digital.sex, '가 조금이라도 긴장을 풀 수 있으면 좋겠지만...']);
    era.drawLine();
    await era.printAndWait(
      '공중에 매달린 전등들이 보도블록을 색색으로 물들였고, 길 양옆의 노점들도 오렌지빛 조명을 밝히며 호응하고 있었다.',
    );
    await era.printAndWait([
      '바다로 합숙을 온 것이긴 했지만, 꽤 많은 ',
      digital.get_uma_sex_title(),
      '들이 유카타를 챙겨와 이 귀한 축제를 마음껏 즐기고 있었다.',
    ]);
    await digital.say_and_wait([
      '흠흠, 그럼 ',
      callname,
      ', 어디부터 구경해볼까요?',
    ]);
    await era.printAndWait(
      '사과 사탕, 붕어빵, 초코 바 같은 먹거리부터 우마무스메 가면 같은 기념품, 그리고 풍선 터뜨리기 같은 게임 가판대까지 한눈에 들어왔다.',
    );
    await era.printAndWait([
      '그 광경을 보며 ',
      digital.get_colored_name(),
      '이 한 곳을 지목했다.',
    ]);
    await era.printAndWait([
      '유카타를 입은 두 명의 ',
      digital.get_uma_sex_title(),
      '가 금붕어를 건지고 있었다.',
    ]);
    await era.printAndWait(
      '그중 한 명이 재빠른 손놀림으로 종이 뜰채를 휘둘러 금붕어 한 마리를 바로 건져 올렸으나, 그 대가로……',
    );
    await teio.say_and_wait(
      '아하하, 금붕어를 낚아야지 물을 낚으면 어떡해. 이것 봐, 옷이 다 젖었잖아.',
    );
    await mcqueen.say_and_wait('에에에엣?!');
    await digital.say_and_wait('쓰읍……');
    await era.printAndWait([digital.get_colored_name(), '은 길게 숨을 내쉬더니……']);
    await digital.say_and_wait(
      '그럼 그럼, 어느 가게부터 가볼까요? 맛있어 보이는 노점이 정말 많네요!',
    );
    await era.printAndWait([
      '평소 같았으면  눈을 반짝이며 쉴 새 없이 떠들어댔을 텐데.',
    ]);
    await era.printAndWait('그렇다면, 다음엔……');
    await me.say_and_wait('내가 가보고 싶은 곳이 하나 있어.');
    era.drawLine();
    await era.printAndWait('북적이는 축제 인파에서 벗어나, 지금은 한적해진 밤바다로 향했다.');
    await era.printAndWait('뒤편은 붉은빛으로 넘실거렸고, 눈앞은 푸르고 하얬다.');
    await era.printAndWait('먼지도 없었지만 바지를 털고 모래사장 위에 그대로 주저앉았다.');
    await era.printAndWait(
      '밤의 해변은 시원하다고 하긴 어려웠다. 불어오는 바람은 축축하고 눅눅했으며, 오직 엉덩이로만 서늘함이 느껴졌다.',
    );
    await era.printAndWait([
      digital.get_colored_name(),
      '은 ',
      me.get_colored_name(),
      '을(를) 바라보더니 똑같이 자리에 앉았고, 그렇게 둘은 어색하게 달과 바다를 바라보았다.',
    ]);
    await digital.say_and_wait([callname, '이(가) 하고 싶었던 일이, 여기 앉아서 바다를 보는 거였나요?']);
    await era.printAndWait('조금 더 솔직해지기로 했다.');
    await me.say_and_wait([
      sys_get_colored_callname(0, 19),
      ', 무슨 일 있었어?',
    ]);
    await digital.say_and_wait('에? 아무 일도 없는데 말입죠?');
    await era.printAndWait([
      '그 말을 내뱉는 ',
      digital.get_colored_name(),
      '은 찔리는 게 있는지 무의식적으로 손을 내밀어 마음의 교류를 차단하려 했다.',
    ]);
    await me.say_and_wait('네가 하고 싶은 일을 억누르고 있는 거야?');
    await era.printAndWait('그렇지 않을까?');
    await digital.say_and_wait([
      '에! 아녜요! 왜냐면, 오늘 제가 하고 싶은 일은 ',
      callname,
      '과(와) 함께 ',
      callname,
      '이(가) 하고 싶은 일을 하는 거니까요!',
    ]);
    await me.say_and_wait('……왜 그렇게 생각하는 거야?');
    await digital.say_and_wait([
      '왜냐면…… ',
      callname,
      '은(는) 저랑 같이 계속 덕질을 도와주셨으니까요……',
    ]);
    await era.printAndWait([
      '말을 하면서 ',
      digital.get_colored_name(),
      '은 고개를 숙인 채 우물쭈물거렸다.',
    ]);
    await digital.say_and_wait('게다가 제 헛소리까지 계속 들어주시고……');
    await era.printAndWait([
      '고개를 숙인 채 ',
      digital.get_colored_name(),
      '은(는) ',
      me.get_colored_name(),
      '을(를) 힐끗 쳐다보았는다. 얼굴이 발갛게 달아올라 있었다.',
    ]);
    await digital.say_and_wait(
      '덕분에 덕질도 훨씬 더 즐거워졌고, 매일매일이 이렇게 으헤헤할 줄은 저도 몰랐거든요……',
    );
    await digital.say_and_wait([
      '이제 ',
      callname,
      '이(가) 없는 혼자만의 오타쿠 활동으로는 돌아갈 수 없게 됐다구요!',
    ]);
    await era.printAndWait([
      '말을 마친 ',
      digital.get_colored_name(),
      '은 허리에 손을 얹으며, ',
      me.get_colored_name(),
      '(이)라는 동지가 있다는 사실에 자부심을 느끼는 듯 보였다.',
    ]);
    await digital.say_and_wait(['그러니까, ', callname, ' 도 제게 소중한 존재라구요!']);
    await era.printAndWait([
      '모든 ',
      digital.get_uma_sex_title(),
      '를 가슴에 품고 있는 것처럼, ',
      me.get_colored_name(),
      ' 또한 가슴 속에 품고 있었다.',
    ]);
    await digital.say_and_wait([
      '수많은 ',
      digital.get_uma_sex_title(),
      '들이 매일 뜨거운 염원을 품고 달리고 있죠.',
    ]);
    await digital.say_and_wait([
      '이 세계는 그야말로, 대 ',
      digital.get_uma_sex_title(),
      '짱 존귀사의 시대!',
    ]);
    await era.printAndWait([
      '멋지게 손가락을 뻗어 ',
      me.get_colored_name(),
      '을(를) 가리켰다.',
    ]);
    await digital.say_and_wait([
      '앞뒤 좌우 어디를 봐도 반짝반짝 빛나는 ',
      digital.get_uma_sex_title(),
      '짱들이 가득해요!',
    ]);
    await digital.say_and_wait('언제 존귀함에 당해 죽을지 모르는 게, 꼭 전쟁터 같달까요.');
    await digital.say_and_wait(
      '이 전장에서 함께 달리며 때로는 감동의 치명타를 입고, 때로는 기쁨을 나누는 것.',
    );
    await digital.say_and_wait('그게 바로, 전우죠!');
    era.drawLine();
    await digital.say_and_wait('하지만, 제가 늘 도움만 받고 있는 건 아닐까요?');
    await digital.say_and_wait('거기에 안주하는 건 왠지 버스만 타는 기분이라서요.');
    await digital.say_and_wait([
      '그래서 말인데, 저도 ',
      callname,
      '을(를) 위해 뭔가를 하고 싶어요. ',
      callname,
      '이(가) 하고 싶은 일, 제가 이루어 드릴게요!',
    ]);
    await digital.say_and_wait('자, 어서요! 온 힘을 다할 거라구요!');
    await era.printAndWait([
      digital.get_colored_name(),
      '이 자신이 좋아하는 일을 억누르고 있는 게 아니라는 사실에 ',
      me.get_colored_name(),
      '은(는) 안심했고, 동시에 ',
      digital.sex,
      '가 ',
      me.get_colored_name(),
      '을(를) 배려해준다는 점에 기분이 좋아졌다.',
    ]);
    await era.printAndWait([
      digital.sex,
      '는 언제나 ',
      digital.get_uma_sex_title(),
      '들에 대한 대가 없는 사랑을 품고 달려왔다.',
    ]);
    await era.printAndWait([
      '그렇다면 ',
      me.get_colored_name(),
      '이(가) 하고 싶은 일은 무엇일까.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 바로 그 모습을 응원하고 싶어서 ',
      digital.sex,
      '의 트레이너가 된 것이었고, 정말로 하고 싶었던 일은……',
    ]);
    await me.say_and_wait('디지털 네가 생기 넘치는 모습을 보고 싶어.');
    await era.printAndWait([
      '응원할 때 전력을 다하는 ',
      digital.sex,
      '의 모습을, 레이스할 때 누구도 막을 수 없는 ',
      digital.sex,
      '의 모습을 보고 싶었다.',
    ]);
    await era.printAndWait([
      digital.get_uma_sex_title(),
      '를 보며 존귀함에 어쩔 줄 몰라 하는 ',
      digital.sex,
      '의 모습을, 그리고 ',
      me.get_colored_name(),
      '과(와) ',
      digital.get_uma_sex_title(),
      '에 대해 쉴 새 없이 떠드는 ',
      digital.sex,
      '의 모습을 보고 싶었다.',
    ]);
    await era.printAndWait([
      '수만 가지 말을 한마디로 줄이자면, ',
      digital.sex,
      '가 행복해하는 모습을 보고 싶다는 뜻이었다.',
    ]);
    await digital.say_and_wait('제 생기…… 넘치는 모습요?');
    await digital.say_and_wait('저의 최애에 대한 마음과…… 같은 건가요?');
    await me.say_and_wait('그래.');
    await era.printAndWait([
      '하지만 ',
      digital.get_colored_name(),
      '은 여전히 자신이 없는 듯했다.',
    ]);
    await digital.say_and_wait('꽃의 화분이나 하고, 보컬의 백댄서나 하는 저를요?');
    await digital.say_and_wait('아니, 그러니까, 어째서요? 여전히 믿기지 않지만요.');
    await digital.say_and_wait(
      '음…… 우우, 조금 기쁘기도 하고, 아니 그보다 영광이라고 해야 하나, 왠지 좀 쑥스럽네요.',
    );
    await digital.say_and_wait('꼭 회지를 낸 작가가 감상평을 받았을 때 같은 기분이에요!');
    await era.printAndWait('참으로 적절한 비유였다.');
    await digital.say_and_wait('그러니까…… 이건——');
    await era.printAndWait([
      digital.get_colored_name(),
      '은 부끄러운지 얼굴을 가려버렸다. 이건—— 대체 무엇일까, 참 흥미로웠다.',
    ]);
    await digital.say_and_wait('그게——');
    await digital.say_and_wait('오타쿠 활동 재개! 이제 더는 사양하지 않겠어요!');
    await era.printAndWait('드디어 본모습으로 돌아왔군.');
    await digital.say_and_wait('온 힘을 다해 생기 넘치는 모습을 보여드릴게요!');
    await era.printAndWait(['우리가 아는 ', digital.get_colored_name(), '이었다.']);
    await digital.say_and_wait([
      '그럼 그럼! 얼른 ',
      digital.get_uma_sex_title(),
      '짱 에너지를 섭취하러 가요!',
    ]);
    await digital.say_and_wait('GOGOGO!');
    await era.printAndWait('달려라!');
    await era.printAndWait(
      '푸른 바다도 아름답지만, 역시 이 축제에는 오렌지빛 조명이 더 잘 어울렸다.',
    );
    await era.printAndWait([
      '아무도 없는 한적한 모래사장이 아니라, ',
      digital.get_colored_name(),
      '과 함께 축제 속을 마음껏 누볐다!',
    ]);

    teio.name = undefined;
    opera.name = undefined;
    dotou.name = undefined;
    mcqueen.name = undefined;
    palmer.name = undefined;
    helios.name = undefined;
  }

  async shine(digital, me, callname) {
    await print_event_name('번뜩임, 응원 활동!', digital);
    await digital.say_and_wait('우후후, 에헤헤!');
    await era.printAndWait([
      '트레이닝실의 ',
      digital.get_colored_name(),
      '이 눈을 가늘게 뜨고 있었다. 아마도 ',
      digital.get_uma_sex_title(),
      '를 상상하는 모양이었다. 누군가 휴대폰을 꺼내 신고할지도 모를 웃음소리를 내며 무척이나 즐거워 보였다.',
    ]);
    await me.say_and_wait('왜 그래? 뭐가 그렇게 즐거워?');
    await digital.say_and_wait('다음 응원 활동을 어떻게 할지 생각 중이었거든요!');
    await era.printAndWait([
      '그리고 ',
      digital.get_colored_name(),
      '은 장황한 논리를 늘어놓았는다. 요지는 응원이 ',
      digital.get_colored_name(),
      '에게 힘을 주니 응원 또한 트레이닝의 일종이라는 것이었다.',
    ]);
    await era.printAndWait('음? 듣고 보니 꽤 일리가 있는 것 같은데?');
    await me.say_and_wait('그렇게 말하니 나도 같이 가보고 싶네.');
    await era.printAndWait([
      me.get_colored_name(),
      '도 함께 가기로 했다. 겸사겸사 ',
      digital.get_colored_name(),
      '에 대해 더 알아볼 기회이기도 했다.',
    ]);
    await digital.say_and_wait(
      '에? 시험 삼아 가보는 건 괜찮지만…… 이거 상당히 마니아틱하다구요? 많이 힘들 텐데요?',
    );
    era.drawLine();
    await era.printAndWait([digital.sex, '의 말이 맞았다.']);
    await digital.say_and_wait('한신 경기장에 오길 정말 잘했어요!! 멋진 데뷔전이었어!');
    await digital.say_and_wait([
      '1위를 차지한 ',
      digital.get_uma_sex_title(),
      '짱, 작년에 은퇴한 ',
      digital.sex_code - 1 ? '언니' : '오빠',
      '의 의지를 이어받아 데뷔한 거라구요! 이런 계승되는 서사, 너무 뜨거워요옷!',
    ]);
    await era.printAndWait(['그리고 ', me.get_colored_name(), ' 에게는,']);
    await digital.say_and_wait(
      '한 치의 양보도 없는 두 사람! 나카야마 경기장의 직선은 아주 짧다구요! 와앗!',
    );
    await digital.say_and_wait(
      '으으…… 너무 멋져요. 적성과 이론을 초월해 내면에서 우러나오는 경쟁심이라니, 최고예요……',
    );
    await era.printAndWait('하루 만에,');
    await digital.say_and_wait(
      '오이 경기장의 더트 코스는 다른 마일 코스들에 비해 멋진 추입을 보기 더 쉬운 곳이죠……',
    );
    await digital.say_and_wait([
      '그 이론을 무시하고 도주를 선택한 ',
      digital.sex,
      '는 비록 결과는 졌지만 행복하게 웃고 있네요.',
    ]);
    await era.printAndWait('일본의 경기장 거의 전부를 훑는 일은,');
    await digital.say_and_wait([
      '이번에 출주한 저 ',
      digital.get_uma_sex_title(),
      ', 지난 몇 번의 성적은 그리 좋지 않았지만 ',
      digital.sex,
      '는 여전히 투지 넘치는 모습으로 저기 서 있다구요!',
    ]);
    await era.printAndWait('확실히 조금…… 고된 일이었다.');
    await digital.say_and_wait([
      '느껴지시나요?! ',
      digital.get_uma_sex_title(),
      '짱들의 뜨거운 열기! 눈부심! 전율의 연속!',
    ]);
    await era.printAndWait('확실히 느껴졌다. 아주 진하고 강렬했다!');
    await era.printAndWait(
      '함께 손을 휘두르다 보니 어느새 팔에는 감각이 없어졌고, 박수를 하도 쳐서 손바닥은 부어올랐으며, 선을 따라 뛰어다니느라 다리 또한 고난을 겪었다.',
    );
    await era.printAndWait([
      '곁에 있는 ',
      digital.get_colored_name(),
      '을 보니 기운이 펄펄 넘쳤고 숨조차 차지 않은 모습이었다. ',
      digital.sex,
      '는…… 혹시 이쪽으로 타고난 걸까?',
    ]);
    await digital.say_and_wait([
      '에? ',
      callname,
      ', 많이 힘드신가요? 음냐, 제가 너무 신난 나머지 배려를 못 했네요. 역시 너무 힘들었나요……',
    ]);
    await era.printAndWait(
      '레이스가 끝난 뒤 관중들이 이미 흩어진 뒤라, 빈자리에 찾아 앉는 것은 어렵지 않았다.',
    );
    await digital.say_and_wait([
      '역시나 ',
      digital.get_uma_sex_title(),
      '짱들의 저 생기 넘치는 모습, 바로 저런 생기 넘치는 모습을 보고 싶었던 거예요.',
    ]);
    await era.printAndWait([
      digital.get_uma_sex_title(),
      '들이 휩쓸고 지나간 빈 경기장을 바라보며, ',
      digital.get_colored_name(),
      '은 줄곧 품어왔던 진심을 내비쳤다.',
    ]);
    await era.printAndWait([
      '경기장 전체의 분위기를 달궈놓고 하늘까지 뒤덮어버릴 수 있는 존재, 그게 바로 ',
      digital.get_uma_sex_title(),
      '였다.',
    ]);
    await era.printAndWait([
      '양손 가득 응원 굿즈를 들고 있는 ',
      digital.get_colored_name(),
      '에게 오늘은 그야말로 수확이 가득한 날이었다.',
    ]);
    await digital.say_and_wait([
      '정말 너무 행복해요. 설마 ',
      callname,
      '이(가) 제 걸음을 따라와 주실 줄이야! 이제 당신도 핵심 팬이라구요! 역시 동지예요!',
    ]);
    await era.printAndWait([
      '무척이나 기뻐 보이는 ',
      digital.get_colored_name(),
      '을 보자, ',
      me.get_colored_name(),
      '의 하루치 피로도 씻은 듯이 사라졌다.',
    ]);
    await era.printAndWait('부디 내일 아침에 온몸이 쑤시지 않기만을 바랄 뿐이었다.');
  }

  async univ(digital, me, callname) {
    await print_event_name('우주에서 서로를 이해하기', digital);
    await digital.print_and_wait([
      digital.name,
      '은 오직 ',
      digital.get_uma_sex_title(),
      '짱들을 위해 세상에 존재하는 ',
      digital.get_uma_sex_title(),
      '로서, 오늘도 온 힘을 다해 최애 활동 중이었다!',
    ]);
    await digital.print_and_wait([
      '에헤에헤, 오늘도 성지순례를 가서 예전에 ',
      digital.get_uma_sex_title(),
      '짱들이 남긴 성적들을 다시 한번 꼼꼼하게 되새겨야겠어요!',
    ]);
    await digital.say_and_wait([
      '쿠후후, 성지순례 가는 길에 ',
      callname,
      ' 선물도 좀 챙겨와야겠네요.',
    ]);
    await me.say_as_unknown_and_wait([
      '잘은 모르겠지만, 너랑 ',
      callname,
      ', 사이가 꽤 좋아 보이는데, 같이 가보는 건 어때?',
    ]);
    await digital.say_and_wait([
      '뭐라구요, ',
      callname,
      '과(와) 함께 성지순례를 가라구요? 오오…… 오오오오!',
    ]);
    await digital.print_and_wait([
      '단 한 번도 생각지 못한 전개였다. ',
      callname,
      '과(와) 함께하는 성지순례라니!',
    ]);
    await digital.print_and_wait('이건 마치 야생 서바이벌 팀에 베어 그릴스가 합류한 격!');
    await digital.say_and_wait('정말 감사합니다! 당장 가서 제안해볼게요!');
    era.drawLine();
    await era.printAndWait([
      '정말로 생각지도 못했는데, ',
      digital.get_colored_name(),
      '이 다가와 ',
      me.get_colored_name(),
      '에게 성지순례를 같이 가자고 제안했다.',
    ]);
    await era.printAndWait([
      '담당 ',
      digital.get_uma_sex_title(),
      '를 위해 지난번처럼 ',
      me.get_colored_name(),
      '도 만반의 준비를 갖췄다.',
    ]);
    await era.printAndWait([
      '약속 시간에 맞춰 집결 장소에 나가니, ',
      digital.sex,
      '가 ',
      me.get_colored_name(),
      '을(를) 향해 손을 흔들고 있었다. 기세가 아주 등등해 보였다.',
    ]);
    await era.printAndWait([
      '평소처럼 분홍색 내의에 회색 겉옷을 입고 있었다. ',
      digital.sex,
      '의 성격상 「I Love UMA」 같은 문구가 적혀 있어도 이상하지 않을 것 같았다.',
    ]);
    await digital.say_and_wait([
      '설마 ',
      callname,
      '이(가) 정말 오실 줄이야! 전 거절당할 준비 다 하고 있었는데……',
    ]);
    await me.say_and_wait('아니 아니, 아무리 생각해도 거절할 리가 없잖아.');
    await digital.say_and_wait('그럼, 시작하죠! 성지순례!');
    await era.printAndWait('큰 손짓으로 전철역으로 향하는 큰길을 가리켰다.');
    era.drawLine();
    await era.printAndWait(
      '도착한 곳은 아주 평범한 목장이었다. 울타리 안에서 한가롭게 풀을 뜯는 소들이 보였는데, 여기가 성지라고?',
    );
    await digital.say_and_wait([
      '아뇨 아뇨, ',
      callname,
      ', 겉모습만 봐서는 안 된다구요!',
    ]);
    await era.printAndWait('디지털이 위풍당당하게 가리킨 것은……풀숲?');
    await era.printAndWait(
      '목장 주인이 관리를 잘 안 했는지 온갖 잡풀들이 무성하게 자라 있었다.',
    );
    await me.say_and_wait('경화수월? 언제부터!');
    await digital.say_and_wait('사실 제가 보여주고 싶었던 건 이거예요.');
    await era.printAndWait([
      digital.sex,
      '가 집어 든 것은 이슬이 맺힌 네잎클로버였다.',
    ]);
    await digital.say_and_wait([
      '맞아요! 얼마나 많은 ',
      digital.get_uma_sex_title(),
      '들이 행운의 상징인 네잎클로버를 동료나 경쟁자에게 선물했겠어요? 서로 치열하게 다투면서도 서로를 축복해주는 그 마음, 우우우——',
    ]);
    await me.say_and_wait(
      '아니, 네잎클로버 하면 신사가 먼저 떠오르지 않아? 역시 비가 내리는 날, 처마 아래서 바라보는 신사의 토리이가……',
    );
    await era.printAndWait('존재하지 않는 기억을 입 밖으로 내버린 걸까?');
    await digital.say_and_wait('! 세상에!');
    await digital.say_and_wait([
      callname,
      '! 뭘 좀 아시네요! 역시! 이런 성지는 서로 교류하면서 돌아다녀야 해요!',
    ]);
    era.drawLine();
    await digital.say_and_wait(
      '자 그럼 다음 역은 여기예요. 언뜻 보기엔 평범한 공원 같지만, 사실은——',
    );
    await digital.say_and_wait('힘이 넘쳐흐르는 공원이라구요!');
    await era.printAndWait('히, 힘이라니?');
    await digital.say_and_wait([
      '네! 수많은 ',
      digital.get_uma_sex_title(),
      '들이 여기 모여서 쉬기도 하고, 그리고 저 모래사장요!',
    ]);
    await me.say_and_wait('오오? 생각났어. 팀 골드가 트레이닝하던 그 모래사장이구나?');
    await digital.say_and_wait('맞아요! 바로…… 에? 방금……');
    await era.printAndWait('잠깐, 팀 골드가 대체 어느 팀이었더라?');
    await me.say_and_wait([
      '일단, 그건 넘어가고, 저 노점 좀 봐. ',
      sys_get_colored_callname(19, 52),
      '가 차렸던 곳 아니야?',
    ]);
    await digital.say_and_wait('오오오오오!');
    era.drawLine();
    await digital.say_and_wait('맛있어! 너무 맛있어! 이게 바로 왕자 라멘인가요?! 과연 왕자답네요!');
    await era.printAndWait(
      '골목 깊숙한 곳에 숨겨진 라멘 가게에 도착했다. 외관이나 내부 인테리어 모두 범상치 않은 고수의 기운이 느껴졌다.',
    );
    await digital.say_and_wait(
      '게다가 이 엄청난 양이라니! 이걸 정복하는 사람은 정말 왕자라고 불릴 만하겠어요!',
    );
    await me.say_and_wait('난 사실 이 왕자 라멘보다 이른바 비밀 메뉴라는 게 더 궁금한데……');
    await say_by_passer_by_and_wait('점장', [
      '오호? ',
      me.sex_code - 1 ? '아가씨' : '총각',
      ' 제법이군! 우리 가게에 비밀 메뉴가 있다는 걸 알다니!',
    ]);
    await era.printAndWait([
      '옆에서 면을 삶던 점장이 그 소리를 듣고 놀라며 ',
      me.get_couple_title(),
      ' 에게 한마디 건넸다.',
    ]);
    await digital.say_and_wait('비밀 메뉴요? 어째서? 어째서 저만 몰랐던 거죠?');
    await era.printAndWait([
      '왕자 라멘을 정복했다는 생각에 들떠 있던 ',
      digital.get_colored_name(),
      '은 그 말을 듣고 놀라 털이 곤두선 듯했다.',
    ]);
    era.drawLine();
    await digital.say_and_wait(
      '이야, 방금 그 하찌미 드링크 가게까지 해서 모든 성지순례 완료!',
    );
    await era.printAndWait(
      '새벽의 첫 햇살을 맞이하며 시작해 해질녘 노을을 배웅하기까지, 정말 바쁜 하루였다.',
    );
    await me.say_and_wait('이곳저곳 참 많이도 돌아다녔네.');
    await digital.say_and_wait(
      '아이고, 이렇게 긴 시간 동안 응원 활동에 어울려주시다니 정말 고생 많으셨어요. 그 근면함에 경의를 표합니다!',
    );
    await era.printAndWait('아니, 갑자기 거수경례까지 할 것까진 없는데.');
    await digital.say_and_wait('그리고, 에헤헤, 무사히 마칠 수 있어서 정말 다행이에요.');
    await digital.say_and_wait('사실 처음에는 예전처럼 혼자 가려고 했거든요.');
    await digital.say_and_wait('하지만……');
    await era.printAndWait([
      '이어서 ',
      digital.sex,
      '의 뜻밖의 사연을 들었다. 밖에서 우연히 지나가던 행인 ',
      digital.get_uma_sex_title(),
      '의 조언을 듣고 ',
      callname,
      '을(를) 초대했다는 것이었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 그 이름 모를 ',
      digital.get_uma_sex_title(),
      '에게 진심으로 감사를 표했고, 덕분에 ',
      me.get_colored_name(),
      '은(는) ',
      digital.get_colored_name(),
      '에 대해 더 깊이 알 수 있었다.',
    ]);
    await digital.say_and_wait(
      '무엇보다 다행인 건, 실제로 같이 다녀보니 정말! 정말로 즐거웠다는 거예요!',
    );
    await era.printAndWait('양손을 크게 벌리는 모습이 정말 즐거워 보였다.');
    await digital.say_and_wait(
      '다행이에요, 당신에게 소중한 휴일인데 미리 계획도 안 세우고 불러낸 거라 거절하시면 어쩌나 했거든요……',
    );
    await digital.say_and_wait('하지만 이건 정말 엄청난 발견이라구요!');
    await digital.say_and_wait([
      '제가 발견한 건 바로, ',
      callname,
      '와(과) 함께 최애를 쫓고 오타쿠 활동을 하는 즐거움이에요!',
    ]);
    await era.printAndWait([
      digital.get_colored_name(),
      '이 이전까지 특이한 취미 때문에 잘 드러내지 않았던 본연의 감정들이 서서히 ',
      me.get_colored_name(),
      '에게 전해지고 있었다.',
    ]);
    await digital.say_and_wait(
      '이 우주에서 저와 함께 응원 활동을 해줄 사람이 있을 줄은 생각지도 못했거든요……',
    );
    await me.say_and_wait('우주급으로 큰 일이었던 거야?!');
    await digital.say_and_wait(
      '아하하, 사실 보셨다시피 전 늘 혼자였잖아요. 제 이런 한계 발언들을 들어주시고 공감해주시는 게 저를 얼마나 행복하게 하는지……',
    );
    await era.printAndWait([
      '느껴진다, ',
      digital.get_colored_name(),
      '의 두 눈이 반짝반짝 빛나고 있었다.',
    ]);
    await digital.say_and_wait([
      '너무 감동적이에요! 지금 이 기분을 당장 ',
      callname,
      '에게 말하고 싶어요!',
    ]);
    await me.say_and_wait('괜찮아, 하고 싶은 말 다 해도 돼.');
    await digital.say_and_wait('에! 정말 아무 말이나 다 해도 되나요!');
    await digital.say_and_wait('정말이죠? 정말이죠! 약속한 거예요!');
    await digital.say_and_wait([
      '디지땅 이제 폭주 발언 시작할게요!',
    ]);
    await digital.say_and_wait([
      '처음 텔레비전 화면으로 ',
      digital.get_uma_sex_title(),
      '짱의 모습을 봤을 때 저는 깨달았죠 저렇게나 격렬하고 눈부시게 열정적인 ',
      digital.sex_code - 1 ? '여신' : '신',
      '님들이 제 평생의 동경이라는 걸요 그 뒤로 저는 심연에 빠진 게 아니라 천국으로 승화되었답니다 매일 ',
      digital.get_uma_sex_title(),
      '짱들을 공양하고 ',
      digital.sex,
      '들을 응원하고 환호하며 동인지까지 만들어 모두에게 ',
      digital.get_uma_sex_title(),
      '짱들의 위대함을 전파했죠 그러다 가끔 주어지는 축복 덕분에 마침내 이 판테온에 발을 들여 모든 ',
      digital.sex_code - 1 ? '여신' : '신',
      '님들과 같은 세계에 머물게 된 거예요 아뇨 저는 그저 같은 공기를 마시는 범인에 불과하지만 ',
      digital.sex,
      '들은 저를 싫어하지 않으시고 오히려 성역과도 같은 경기장에서 멋진 승부를 벌이게 해주셨으니 정말이지 고결하면서도 더러움을 타지 않는 모든 걸 긍정해주시는 위대한 ',
      digital.sex_code - 1 ? '여신' : '신',
      '님들이에요 너무 길어졌지만 제가 하고 싶은 말은 ',
      digital.get_uma_sex_title(),
      '짱들은 정말 최고라는 거예요!',
    ]);
    await era.printAndWait([
      '회전하고, 점프하고, 읊조리고, 노래하며, ',
      digital.get_colored_name(),
      '은 자신의 온 힘을 다해 마음속의 모든 생각을 쏟아냈다.',
    ]);
    await era.printAndWait('그 순수함은 참으로 경외심마저 들게 했다.');
    await digital.say_and_wait(
      '콜록콜록, 하하하하, 다 쏟아내고 나니…… 정말…… 쿨럭…… 속이 다 시원하네요……',
    );
    await era.printAndWait([
      '미친 듯이 숨을 몰아쉬며 가슴이 계속 오르락내리락했다. 너무 무리했는지 ',
      digital.get_colored_name(),
      '은 쿨럭거리다 비틀거리더니 바닥에 주저앉았다.',
    ]);
    await digital.say_and_wait(['어때요, ', callname, '? 헤헤……']);
    await era.printAndWait([
      '바닥에 주저앉아 손으로 몸을 지탱하고 있었지만, ',
      digital.sex,
      '는 아주 환하게 웃고 있었다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '도 ',
      digital.sex,
      ' 곁에 나란히 앉아 ',
      digital.sex,
      '의 몸을 살짝 받쳐주었다.',
    ]);
    await me.say_and_wait(
      '참 좋네. 이렇게 활기 넘치는 폭주 발언이라면 세 여신도 감동했을 거야.',
    );
    await digital.say_and_wait('헤헤헤, 그런가요……');
    await digital.say_and_wait('정말이지, 우주급이네요……');
  }
};