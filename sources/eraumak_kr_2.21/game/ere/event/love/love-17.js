/**
 * @file 심볼리 루돌프 - 애정
 * @author 露娜俘虏
 */
const era = require('#/era-electron');

const { sys_love_uma_in_event } = require('#/system/sys-calc-chara-others');

const CustomizedLove = require('#/event/love/love-common');
const { add_event } = require('#/event/queue');
const print_event_name = require('#/event/snippets/print-event-name');

const LunaEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-17');

module.exports = class extends CustomizedLove {
  async 49(luna, me) {
    await print_event_name('음', luna);
    await luna.print_and_wait('태어날 때부터 삶의 궤적이 정해져 있었다.');
    await luna.print_and_wait([
      '루나, 심볼리 가문의 ',
      luna.get_uma_sex_title(),
      '.',
    ]);
    await luna.print_and_wait([
      '수많은 또래와 마찬가지로, ',
      luna.sex,
      '는 심볼리 가문의 숙원을 완수해야 한다.',
    ]);
    await luna.print_and_wait([
      luna.sex,
      '들은 영원히 강력해야 하며, 영원히 사람들을 경외하게 만들어야 한다. 간단히 말해, 승리를 추구해야 한다는 것이다.',
    ]);
    await luna.print_and_wait(
      '그 외에 승리를 위해서라면 모든 것은 선택 사항이며, 불필요하고, 버릴 수 있는 것이었다.',
    );
    await luna.print_and_wait(['바꾸어 말하면, ', luna.sex, '들은 제멋대로 행동해도 좋다는 뜻이기도 했다.']);
    await luna.print_and_wait('어떤 숙모는 정욕에 빠졌고.');
    await luna.print_and_wait('어떤 아주머니는 알코올에 빠졌으며.');
    await luna.print_and_wait('어떤 언니는 폭력에 빠졌다.');
    await luna.print_and_wait('승리만 쟁취할 수 있다면, 그 모든 것이 허용되었다.');
    await luna.print_and_wait(
      '그렇기에 루나가 무시무시한 잠재력을 드러냈을 때, 가문의 거물들은 온화한 미소를 지었다.',
    );
    await luna.print_and_wait(
      '어느 날, 루나가 직접 그들을 찾아갔다. 그들에게는 너무나 익숙한 광경이었다.',
    );
    await luna.print_and_wait('거물들은 인자하게 물었다: 「네가 원하는 것은 무엇이냐?」');
    await luna.print_and_wait(['루나는 대답했다. 사랑을 원한다고.']);
    await luna.print_and_wait([
      '곧이어 루나는 수많은 새 장난감을 얻었고, 메지로 가문의 문은 ',
      luna.sex,
      '에게 열렸으며, 수많은 아름답고 멋진 이들이 ',
      luna.sex,
      '에게 아부하며 정성을 쏟았다……',
    ]);
    await luna.print_and_wait(
      '세상의 온갖 좋은 것들에 둘러싸여 있었음에도, 루나는 자신이 사랑받고 있다고 느끼지 못했다.',
    );
    await luna.print_and_wait([
      luna.sex,
      '가 원한 것은 이해관계로 묶이지 않고, 권력에 가려지지 않은, 그저 순수하고 마음에서 우러나오는 무조건적인 사랑이었다.',
    ]);
    await luna.print_and_wait(
      '밤에 홀로 침대에 앉아 있을 때면, 루나는 아주 미세한 온기라도 찾으려는 듯 몸을 웅크리곤 했다.',
    );
    await luna.print_and_wait([
      '하지만 루나 위로 쏟아지는 달빛은 ',
      luna.sex,
      '에게 뼛속까지 시린 냉기만을 느끼게 할 뿐이었다.',
    ]);
    await luna.say_and_wait('……누구든 좋으니……');
    await luna.print_and_wait([
      '루나는 너무나 두려웠다. 모든 것을 내걸고 세상에 갈구했음에도, ',
      luna.sex,
      '는 여전히 아무것도 얻지 못했다.',
    ]);
    era.println();

    era.printButton('「심볼리 가문의 저택은 왜 이렇게 미로 같은 거야……?」', 1);
    await era.input();
    await luna.print_and_wait('방문 밖에서 누군가의 목소리가 들려온 것 같았다.');

    era.printButton('문을 연다', 1);
    await era.input();
    await me.say_and_wait('여기가 내 방인가……?');
    await me.say_and_wait('죄송합니다!? 제가 길을 잘못—— 어? 너 왜 울고 있어?!');
    await me.say_and_wait('무서워하지 마!!! 난 나쁜 사람이 아니야!!! 진짜로!!!');
    await me.say_and_wait(
      '이런, 애가 왜 갈수록 더 심하게 울지, 콧물이……! 콧물이 내 옷에 묻었잖아!',
    );
    await me.say_and_wait('하아……');
    era.println();

    await luna.print_and_wait('그것은 그저 우연에 불과한 만남이었다.');
    await luna.print_and_wait(
      '발산할 곳이 필요하고, 의지하고 싶고, 온기가 간절했던 아이가 길을 잃은 사람과 마주친 것뿐.',
    );
    await luna.print_and_wait('밤새도록 후자는 울음을 터뜨린 아이를 서투르게 달래주었다.');
    await luna.print_and_wait('그때부터 두 사람 사이에는 조금씩 공통된 화제가 생겨났다.');
    await luna.print_and_wait('그때부터 두 사람은 점차 떨어질 수 없는 사이가 되었다.');
    await luna.print_and_wait(
      '상심한 아이와 평범한 한 사람이 영혼의 공명을 일으킨 것이다.',
    );
    await luna.say_and_wait('분명 그때부터였을 거야, 내가 당신을 결코 잊을 수 없게 된 건……');
    await sys_love_uma_in_event(17);
  }

  async 74(luna, me) {
    await print_event_name('양', luna);
    await luna.print_and_wait(
      '일 년에 한 번뿐인 입학식. 보통의 학교라면 덕망 높은 교장이 개회사를 하기 마련이다.',
    );
    await luna.print_and_wait(
      '하지만 트레센 학원에서 그 임무를 수행할 사람은 오직 한 명뿐이다.',
    );
    await luna.print_and_wait([
      '루나——학생회장은, ',
      luna.sex,
      '에게 고개를 숙이는 인파를 지나 연단 위로 올라갔다.',
    ]);
    await luna.print_and_wait('학생들은 기대에 가득 찼고, 교직원들은 의욕이 넘쳤다.');
    await luna.print_and_wait([
      '새 학기, 비록 일본의 ',
      luna.get_uma_sex_title(),
      '들이 거듭 패배하고 있을지라도, 오늘부터 사람들은 조금씩 패배감에서 벗어나기 시작했다.',
    ]);
    await luna.print_and_wait(
      '학생회장이 있기 때문이다. 심볼리 루돌프——심볼리 가문의 사자——그 「황제」가 있기에 모두가 환호했다.',
    );
    await luna.print_and_wait([
      '뜨거운 시선을 받으며 루나는 위장이 꽉 조이는 듯한 느낌을 받았다. ',
      luna.sex,
      '는 구역질이 날 것만 같았다.',
    ]);
    await luna.print_and_wait('말할 수 없는 허무함과 공포가 다시금 자신의 몸을 휩쓰는 듯했다……');
    await luna.print_and_wait(
      '루나가 무력하게 주위를 둘러보던 중, 문득 한 사람이 발꿈치를 들고 간절히 위를 올려다보는 것을 발견했다.',
    );
    await me.say_and_wait('힘내! 루나!');
    await luna.print_and_wait([
      '비록 멀리 떨어져 있었지만, 루나는 ',
      me.get_colored_actual_name(),
      '의 입모양을 통해 전하고 싶은 말을 읽어낼 수 있었다.',
    ]);
    await luna.say_and_wait('——후우.');
    await luna.say_and_wait('제군들——');
    era.drawLine();
    await luna.print_and_wait('하지만 어쩌면 우연이 겹쳐 운명이 되는 것일지도 모른다.');
    await luna.print_and_wait(
      '수많은 이들의 기억에 남은 이 입학식에서, 사람들은 심볼리 루돌프가 위엄 있으면서도 유머러스한 방식으로 모두를 고무시켰던 것을 기억한다.',
    );
    await luna.print_and_wait(['사람들은 ', luna.sex, '의 진심 어린 미소를 기억한다.']);
    await luna.print_and_wait(
      '하지만 사람들은 알지 못했다. 그 미소가 사실은 진심 어린……「웃음 참기」에서 비롯되었다는 것을.',
    );
    await luna.say_and_wait('발꿈치를 들고 그렇게 긴장한 표정을 짓다니…… 후훗.');
    await luna.print_and_wait([
      me.get_colored_actual_name(),
      ' 조차 알지 못했다. 이 장면이 고귀한 ',
      luna.get_uma_sex_title(),
      '의 기억 속에 얼마나 오래도록 남게 될지를.',
    ]);
    era.println();
    await sys_love_uma_in_event(17);
  }

  async 89(luna, me) {
    await print_event_name('원', luna);
    await luna.print_and_wait([
      luna.get_uma_sex_title(),
      '와 트레이너가 함께 지내는 시간은 사실 담당 교사보다 조금 더 많은 수준일 뿐이다.',
    ]);
    await luna.print_and_wait(
      '훈련, 그리고 훈련 일정 관리. 레이스, 그리고 레이스 일정 관리. 그 외에 두 사람이 특별히 만날 기회는 많지 않다.',
    );
    await luna.print_and_wait(
      '루나처럼 바쁜 몸이라면 더욱 그러하다. 그렇기에 루나는 전례 없는 초조함을 느끼고 있었다.',
    );
    await luna.print_and_wait('서류 작업을 마치고 나니 이미 하늘은 캄캄하게 저물어 있었다.');
    await luna.print_and_wait('피곤한 몸을 이끌고 루나는 교내를 순찰했다.');
    await luna.print_and_wait('한 바퀴, 그리고 또 한 바퀴.');
    await luna.print_and_wait([
      '마침내 ',
      luna.sex,
      '는 팀의 대기실에 도착했고, 그 안에는 불이 켜져 있었다.',
    ]);
    await luna.print_and_wait([
      luna.sex,
      ' 본인도 하루 종일 얼굴을 비추지 못했는데, 혹시 후배가 아직 남아 있는 것일까?',
    ]);
    await luna.print_and_wait(
      '루나는 문을 열었다. 이곳은 자신의 비밀 기지와 달리 잠겨 있지 않았다.',
    );
    await luna.print_and_wait(
      '루나는 놀랍게도 자신의 트레이너가 소파에 누워 있는 것을 발견했다. 바닥에는 책과 각종 데이터가 흩어져 있었다.',
    );
    await luna.say_and_wait('당신뿐이었나……');
    await luna.print_and_wait('나와 마찬가지로 지금까지 일하고 있었던 걸까?');
    await luna.print_and_wait(
      '루나의 입꼬리가 살짝 올라갔다. 자신은 학원을 위해, 트레이너는 이렇게 열심히…… 아마도 오직 자신만을 위해.',
    );
    await luna.print_and_wait([
      '어째서인지 루나의 심장이 빠르게 뛰기 시작했다. ',
      luna.sex,
      '의 얼굴이 화끈거렸다.',
    ]);
    await luna.print_and_wait([
      '마치 ',
      me.get_colored_actual_name(),
      ' 때문에 가슴이 벅차오르는 것 같았다.',
    ]);
    await luna.print_and_wait([
      '루나는 잠시 멍해졌다. ',
      luna.sex,
      '는 가슴팍의 옷을 꽉 움켜쥐며, 트레이너에 대한 자신의 감정이 조금 변했다는 것을 깨달았다.',
    ]);
    await luna.print_and_wait([
      me.get_colored_actual_name(),
      '은(는) 이미 깊은 잠에 빠져 있었다. 여기에는 오직 둘뿐이다. 오직 우리들뿐……',
    ]);
    await luna.print_and_wait(
      '루나는 숨을 죽이고 뒤로 살짝 몸을 기댔다. 반쯤 열려 있던 문이 쾅 소리를 내며 굳게 닫혔다.',
    );
    await luna.print_and_wait(['이어 ', luna.sex, '는 뒷손질로 문을 잠갔다.']);
    await luna.print_and_wait('——이러면 안 된다는 것을 잘 알고 있음에도.');
    await luna.print_and_wait([
      '루나는 무거운 발걸음으로 ',
      me.get_colored_actual_name(),
      '의 앞으로 다가갔다.',
    ]);
    await luna.print_and_wait([
      '——',
      luna.sex,
      '는 학생회장의 직무와 심볼리 가문의 영광을 짊어지고 있다.',
    ]);
    await luna.print_and_wait([
      '루나는 신발을 벗고 ',
      me.get_colored_actual_name(),
      '의 곁에 앉았다.',
    ]);
    await luna.print_and_wait('——누군가에게 들키기라도 하면, 모든 것이 무너질 것이다.');
    await luna.print_and_wait([
      '루나는 몸을 굽혀 ',
      me.get_colored_actual_name(),
      '의 품속으로 파고들었다.',
    ]);
    await luna.print_and_wait([
      '하지만 ',
      luna.get_teen_sex_title(),
      '는 이끌림을 거부하지 않았다. 미래가 어떻게 되든 상관없다. ',
      luna.sex,
      '는 지금 이 순간만을 원했다.',
    ]);
    await luna.print_and_wait([
      me.get_colored_actual_name(),
      '의 품에 웅크린 채, 루나는 탐욕스럽게 그 온기를 만끽했다.',
    ]);
    await luna.say_and_wait('그 오랜 시간이 흘러도, 당신의 향기는 조금도 변하지 않았네.');
    await luna.print_and_wait(
      '마음이 평온해지고 해방되는 기분이었다. 마치 망망대해의 작은 나룻배가 안식처를 찾은 듯했다.',
    );
    await luna.say_and_wait('무슨 일이 있어도 당신을 내 곁에서 보내지 않을 거야.');
    await luna.print_and_wait([
      '루나는 몸을 돌려 ',
      me.get_colored_actual_name(),
      '을(를) 꽉 껴안았다. ',
      luna.sex,
      '는 고개를 들어 품 안의 사람의 입술 근처의 향기를 맡았다.',
    ]);
    await luna.say_and_wait('그러니, 당신도 나를 떠나지 말아줘…… 알겠지?');
    await luna.print_and_wait([
      me.get_colored_actual_name(),
      '의 품 안에서, 루나는 깊은 잠에 빠져들었다.',
    ]);
    await luna.print_and_wait([
      '정말 오랜만에, ',
      luna.sex,
      '는 악몽도 꾸지 않고 아침까지 평온하게 잠들 수 있었다.',
    ]);
    era.println();
    await sys_love_uma_in_event(17);
  }

  async 99(luna, me, callname) {
    await print_event_name('결', luna);
    await luna.print_and_wait('루나는 침대 위에서 이리저리 뒤척였다.');
    await luna.print_and_wait(
      '오랜만에 집에 돌아왔지만 변한 것은 아무것도 없는 듯했다. 오직 가문의 거물들이 자신을 조심스럽게 대하기 시작했다는 것뿐.',
    );
    await luna.print_and_wait([
      '이 모든 변화의 원인은 무엇일까? 내가 점점 강해졌기 때문일까? 심볼리 가문의 ',
      luna.get_uma_sex_title(),
      '로서 이를 자랑스럽게 여겨야 마땅할 터였다.',
    ]);
    await luna.print_and_wait(
      '하지만 루나는 조금도 기쁘지 않았다. 오히려 마음속 어딘가에서 무언가가 타오르는 듯한 기분이었다.',
    );
    await luna.print_and_wait([
      '그저 관례에 따라 집에 돌아온 것뿐인데, ',
      callname,
      '이(가) 곁에 있을 수 없다는 사실이 견딜 수 없었다.',
    ]);
    await luna.print_and_wait('익숙한 길을 걸으면서도 루나는 몇 번이나 벽에 부딪힐 뻔했다.');
    await luna.print_and_wait([
      luna.sex,
      '는 문득 자신이 누군가 곁에서 지켜주는 것에 익숙해졌음을, 자신의 어리광 섞인 기대어옴을 받아주는 존재에 익숙해졌음을 깨달았다.',
    ]);
    await luna.print_and_wait('곁에 없어……');
    await luna.print_and_wait('곁에 없어…………');
    await luna.print_and_wait('곁에 없어………………!');
    await luna.print_and_wait([
      '단지 ',
      me.get_colored_actual_name(),
      '이(가) 곁에 없다는 것만으로, 루나는 형언할 수 없는 상실감을 느꼈다.',
    ]);
    await luna.print_and_wait('밤이 깊어오고, 수년 전처럼 달빛이 다시 침실을 비추었다.');
    await luna.print_and_wait(
      '차가운 기운이 다시 몸을 타고 올라왔고, 루나는 어쩔 수 없이 이불을 머리 끝까지 뒤집어쓴 채 사랑하는 이와 함께했던 순간들을 하나하나 떠올렸다.',
    );
    await luna.print_and_wait([
      '만약 ',
      me.get_colored_actual_name(),
      '이(가) 지금 이곳에 있어 같은 침대에 누워 있다면. 그렇다면……',
    ]);
    await luna.print_and_wait('——서로의 입술은 떨어질 줄 모르고 서로를 탐닉했을 것이며.');
    await luna.print_and_wait('——뜨거운 숨결이 끊임없이 얼굴을 간질였을 것이다.');
    await luna.print_and_wait('——자신의 어깨와 쇄골에는 사랑의 흔적이 남았을 것이고.');
    if (luna.sex_code - 1) {
      await luna.print_and_wait('——자신의 가슴은 몇 번이고 애무받았을 것이다.');
    }
    await luna.print_and_wait('——자신의 긴 다리는 부드럽게 매만져졌을 것이며.');
    await luna.print_and_wait('——서로를 끊임없이 갈구했을 것이다!');
    await luna.print_and_wait([
      '루나의 몸이 가늘게 떨리고 귀가 축 처졌다. ',
      luna.sex,
      '의 가느다란 손가락이 몸 아래를 스치자, ',
      luna.sex,
      '는 감전된 듯 경련했다.',
    ]);
    await luna.print_and_wait([
      '만약 ',
      me.get_colored_actual_name(),
      '이(가) 정말 이곳에 있다면, ',
      luna.sex,
      '는 그 어떤 요구라도 기꺼이 받아들였을 것이다.',
    ]);
    await luna.say_and_wait([
      me.get_colored_actual_name(),
      ', 어서 내 곁으로 돌아와줘……',
    ]);
    await luna.print_and_wait('연인의 이름을 나지막이 읊조리며 루나는 깊은 잠에 빠져들었다.');
    era.println();
    await sys_love_uma_in_event(17);
  }

  async run(stage, extra_flag, event_object) {
    if (new LunaEduMarks().emperor) {
      add_event(stage, event_object);
      return;
    }
    return super.run(stage, extra_flag, event_object);
  }
};