const era = require('#/era-electron');

const { sys_change_attr_and_print } = require('#/system/sys-calc-base-cflag');
const { sys_like_chara } = require('#/system/sys-calc-chara-others');
const { sys_change_money } = require('#/system/sys-calc-flag');

const Edu7UntilRaceEnd = require('#/event/edu/edu-events-7/race-end');
const { add_event } = require('#/event/queue');
const get_attr_and_print_in_event = require('#/event/snippets/get-attr-and-print-in-event');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { gacha } = require('#/utils/list-utils');

const chara_colors = require('#/data/chara-colors').chara_colors[7];
const GoldShipEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-7');
const { location_enum } = require('#/data/locations');
const { attr_enum } = require('#/data/train-const');

module.exports = class extends Edu7UntilRaceEnd {
  async week_start(gold_ship, me, callname, hook, extra_flag, event_object) {
    const event_arg = event_object?.arg;
    if (event_arg === 47 + 1) {
      await print_event_name(
        [{ color: chara_colors[1], content: '새해의 다짐' }],
        gold_ship,
      );
      await era.printAndWait(
        `새해, 새로운 시작이다. ${gold_ship.name}의 활약이 한 단계 더 발전하기를 바란다... ${me.name}은(는) 그렇게 생각하고 있다.`,
      );
      await era.printAndWait(
        `그리고 ${me.name}이(가) 마음속으로 생각하던 상대는 ${me.name}에게 두 손을 모았고, 두 손바닥이 부딪히며 짝 하는 소리가 들렸다.`,
      );
      await gold_ship.say_and_wait(
        '새해 복 많이 받으세요~ 새해에는…… 작년의 내가 올해의 내가 되었네.',
      );
      await era.printAndWait(
        `${me.name}은(는) 고개를 끄덕이며, ${gold_ship.sex}의 기술적으로 정확한 발언에 동의했다.`,
      );
      await gold_ship.say_and_wait(
        '그나저나 말이야, 이건 정말 대단한 기적이라고 생각해.',
      );
      await gold_ship.say_and_wait(
        '만약 지구도, 우주도 없었다면…… 나는 존재하지 않았을 거야.',
      );
      await era.printAndWait(
        `${gold_ship.sex}가 다시 한 번 ${me.name}에게 합장을 한다. ${me.name}은(는) ${gold_ship.sex}가 세 번 연속으로 이런 짓을 하지 않기를 바라고 있다. `,
      );
      await gold_ship.say_and_wait(
        '그래서 나는 올 한해를 온갖 것들에 감사하는 데 쓰려고 해.',
      );
      await gold_ship.say_and_wait('지구에 감사하고, 우주에 감사하고, 내 눈앞에 있는 너에게 감사하고.');
      await gold_ship.say_and_wait(
        '자, 이제 내가 부를 『새해 복 많이 받으세요~ 추운 겨울을 넘어, 봄을 향해~』를 들어줘.',
      );
      await era.printAndWait(
        `${gold_ship.name}이 엔카 같은 신비로운 곡을 부르기 시작했고, ${gold_ship.sex}의 유려하고 청아한 노래 소리가 트레이닝실 안에 끊임없이 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `반주 없이 아카펠라로 부르는 노래조차도 ${me.name}에게 노래에 가득 담긴 진심을 느끼게 해 주기에 충분했다.`,
      );
      await era.printAndWait(`노래가 끝나자, ${me.name}은(는) 참지 못하고 박수를 쳤다.`);
      await gold_ship.say_and_wait('감사합니다, 감사합니다, 산 정상의 친구 여러분 감사합니다!');
      await era.printAndWait('아이돌 가수는 기쁜 표정으로, 존재하지 않는 관객을 향해 손을 흔들며 인사했다.');
      era.println();

      era.printButton('「말이 나왔으니 말인데……」', 1);
      await era.input();

      await gold_ship.say_and_wait('응? 무슨 일이야? 너도 나한테 뭔가 말하고 싶은 게 있어?');
      await era.printAndWait(
        `${gold_ship.name}은 기대에 찬 표정을 지으며, 허리에 달린 꼬리를 빗자루처럼 힘차게 앞뒤로 흔들었다.`,
      );
      era.println();

      era.printButton('「올해의 클래식 레이스, 꼭 좋은 성적을 거두길 바래.」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '뭐야? 클래식? 난 올해 엄청나게 격렬한 기타 솔로 실력을 뽐내고 싶은데, 유행을 거스르고 바이올린을 연주하는 것도 괜찮을 것 같네.',
      );
      era.println();

      era.print('「뭔 소리야. 내 말은……」');
      era.printButton('「장거리 능력을 열심히 단련하자!」（스태미나+40）', 1);
      era.printButton('「지금 바로 어떻게 할 지 생각해 보자!」（지능+40）', 2);
      era.printButton('「돔 공연을 한번 해보자!」（스킬포인트+50）', 3);
      const ret = await era.input();

      if (ret === 1) {
        await gold_ship.say_and_wait(
          '그렇구나, 장시간 연주를 감당하기 위해 스태미너를 기르는 거였구나!',
        );
        await era.printAndWait(
          `당연히 아니다. ${me.name}은(는) 고개를 저었지만, 이미 자신만의 세계에 빠져든 것 같았다.`,
        );
        await gold_ship.say_and_wait(
          '아, 이제 알겠어! 확실히 클래식 음악은 곡에 따라 10시간까지 가는 것도 있잖아!',
        );
        await gold_ship.say_and_wait(
          '좋아! 10시간이든 20시간이든 다 해치워 버릴 테니까!',
        );
        await era.printAndWait(
          `당연히 아니다. ${me.name}이(가) 클래식 레이스와 클래식 음악의 차이를 설명하기도 전에, ${gold_ship.sex}는 순식간에 악기를 준비하러 가버렸다.`,
        );
        await era.printAndWait('이쯤 되면 그냥 상황에 맞게 대처하는 수 밖에.');
        era.println();
        get_attr_and_print_in_event(7, [0, 40, 0, 0, 0], 0) &&
          (await era.waitAnyKey());
      } else if (ret === 2) {
        await gold_ship.say_and_wait(
          '그렇구나, 밴드 멤버들의 의견을 존중해야 한다는 거구나! 그건 괜찮네.',
        );
        await gold_ship.say_and_wait(
          '어쨌든 밴드가 해체되는 원인은 대부분 음악적 방향의 차이 때문이니까.',
        );
        await gold_ship.say_and_wait('좋아, 그럼 네가 터질 때까지 같이 이야기해 주지……! 자! 주먹을 맞대자!');
        await era.printAndWait(
          '그 후 당신들은 물리적으로 한데 뭉쳐서, 트레이닝실에서 이불을 덮고 함께 잠들었다.',
        );
        await era.printAndWait('꽤 푹 잤다.');
        era.println();
        get_attr_and_print_in_event(7, [0, 0, 0, 0, 40], 0) &&
          (await era.waitAnyKey());
      } else {
        await gold_ship.say_and_wait('이봐 이봐…… 돔 공연!?');
        await gold_ship.say_and_wait(
          '네 꿈, 정말 거대한데!! 나…… 불타오르기 시작했어!!',
        );
        await gold_ship.say_and_wait(
          '좋아!! 지금 바로 공연을 시작하자!! 공연을 열기로 했으니, 1위를 목표로 해야지!!!',
        );
        await era.printAndWait('그 후, 당신들은 한동안 고된 연습을 했다.');
        await era.printAndWait(
          '두 사람이 학원에서 연 소규모 야외 콘서트가 의외로 좋은 평가를 받았다.',
        );
        await era.printAndWait('그레서 레이스는..?');
        era.println();
        get_attr_and_print_in_event(7, undefined, 50) &&
          (await era.waitAnyKey());
      }
      era.set('cflag:7:축제이벤트표시', 0);
    } else if (event_arg === 47 + 29) {
      if (
        era.get('cflag:0:위치') !== location_enum.beach ||
        era.get('cflag:7:위치') !== era.get('cflag:0:위치')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name(
        [{ color: chara_colors[1], content: '여름 합숙' }],
        gold_ship,
      );
      await era.printAndWait(
        '여름 합숙은 우마무스메들에게 유익하면서도 즐거운 시간이다. 매년 여름방학이 되면, 트레센 학생들의 대다수는 해변으로 모여 햇살과 모래사장을 즐기며, 어쩌면 지옥 같은 훈련도 조금은 겪게 된다.',
      );
      await era.printAndWait(
        `그리고 당연하게도, 이맘때면 ${me.name}의 개성 넘치는 담당 우마무스메 ${gold_ship.name}은 특히나 기운이 넘친다.`,
      );
      era.println();

      await gold_ship.say_and_wait(
        '오오오오오! 여름이라고 하면 바다지! 우리 함께 해변으로 출발하자!!!',
      );
      await gold_ship.say_and_wait('zzzzzzz……');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 버스에서 죽은 돼지처럼 자고 있는 ${gold_ship.name}을 보며, 이 녀석의 열정은 정말 골드 쉽 본인처럼 갑자기 나타나기도 하고 사라지기도 한다고 생각했다.`,
      );
      era.println();

      era.printButton('「일어나!!! 해가 중천이야!!!」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '우와~ 깜짝이야! 방금 버스에서 여름 합숙하러 가는 꿈을 꿨는데! 어떻게 배상해 줄 거야!',
      );
      era.println();

      await era.printAndWait(
        `${me.name}이(가) 짜증 섞인 표정으로 엄지손가락을 창밖을 향해 가리키며 이미 도착했다는 신호를 보냈고, 이를 눈치챈 ${gold_ship.name}은 곧바로 신나서 펄쩍펄쩍 뛰며 차에서 내렸다.`,
      );
      era.println();

      await era.printAndWait(
        `당신들은 며칠 동안 즐거운 휴가를 보냈고, 트레이닝도 매우 알차게 진행되었다. 하지만 오늘은 이미 트레이닝 시간이 되었는데도 ${gold_ship.name}은 여전히 나타나지 않았다. ${gold_ship.sex}의 행방을 찾기 위해 당신은 해변으로 향했다.`,
      );
      era.println();

      await era.printAndWait('그리고——');
      era.println();

      await gold_ship.say_and_wait(
        '어이, 지나가는 길에 놓치지 마세요~ 맛있는 야키소바 싸게 팔아요~!!',
      );
      await gold_ship.say_and_wait('달콤하고, 시큼하고, 쓰고, 매운 맛이 다 있어요~ 인생과 똑같죠~!');
      era.println();

      era.printButton('「왜 하필 여기 와서 야키소바를 파는 거야……!!」', 1);
      await era.input();

      await era.printAndWait(
        `${me.name}은(는) 화가 나 노점 앞으로 걸어가 따지려 했다.`,
      );
      era.println();

      await gold_ship.say_and_wait('아~ 트레이너님이시네요~ 매운 맛으로 드시죠?');
      era.println();

      era.printButton('「트레이닝하러 오라고 부르러 왔어.」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '아이고~ 제가 가게 주인 아저씨 대신 일하러 온 거잖아요~ 허리도 아프고 온 삭신이 쑤시는데, 아저씨가 쨍쨍한 햇볕 아래서 하루 종일 야키소바를 만들도록 내버려 둘 수 있겠어요?',
      );
      await gold_ship.say_and_wait(
        '그러니까 오늘은 이 면을 다 팔아야 해! 안 그러면 아저씨의 허리 통증이 낫지 않을 거야!',
      );
      era.println();

      await era.printAndWait(
        `${me.name}은(는) ${gold_ship.sex}의 한 번 말한 건 절대 바꾸지 않는 성격 때문에 설득할 수 없다는 걸 알았기에, 어쩔 수 없이 새콤달콤한 야키소바 한 그릇을 주문하고, 옆에 있는 선베드에 앉아 먹으면서 ${gold_ship.name}을 감시했다. 혹시 ${gold_ship.sex}가 또다시 사라질까 봐...`,
      );
      era.println();

      const changed_attrs = {};
      gacha(Object.values(attr_enum), 3).forEach(
        (e) => (changed_attrs[e] = true),
      );
      const change_list = new Array(5).fill(3);
      gacha(Object.values(attr_enum), 3).forEach((e) => (change_list[e] = 8));
      get_attr_and_print_in_event(7, change_list, 45) &&
        (await era.waitAnyKey());
    } else if (event_arg === 47 + 41) {
      const opera = get_chara_talk(15);
      await print_event_name(
        [{ color: chara_colors[1], content: '노려라 파리 패션 위크 편' }],
        gold_ship,
      );

      await era.printAndWait('골드 쉽은 아리마 기념에서 에이신 플래시와 맞붙게 된다——');
      era.println();

      await era.printAndWait(
        '물론, 에이신 플래시 자체도 강적이지만…… 아리마 기념에서는 모든 참가자가 실력이 뛰어난 강자들이다!',
      );
      era.println();

      era.printButton('（골드 쉽을 잡아서 제대로 훈련시켜야 해………）', 1);
      await era.input();

      await era.printAndWait(
        `그렇다. 바로 이 중요한 시기에 ${
          me.name
        }의 귀엽고 사랑스러운 담당 ${gold_ship.get_uma_sex_title()} 골드 쉽은 또 어디론가 사라져 버렸다. 그 녀석은 ${
          me.name
        }의 앞을 당당하게 지나가면서「오호호호호! 우마무스메의 정점에 서기 위해 필요한 건 압도적인 『아름다움』……!!」이라고 중얼거리더니, 순식간에 사라져 버렸다.`,
      );
      era.println();

      await era.printAndWait(
        `${
          me.name
        }이(가) 서둘러 뒤따르던 중, 우연히 자신의 미적 감각을 자랑스러워하는 ${opera.get_uma_sex_title()}를 마주쳤다……`,
      );
      era.println();

      await gold_ship.say_and_wait('너는……!');
      await opera.say_and_wait(
        '그렇다네! 나는 아름다움의 화신! 신의 사랑을 받는 빛의 아이! 오——',
      );
      await gold_ship.say_and_wait(
        '오페라——!! 흥, 나 골드 쉽님은 파리 패션위크에 쉽게 올라갈 수 있는 존재야!',
      );
      await opera.say_and_wait(
        '으, 감히 내 대사를 뺏다니……! 역시 골드 쉽. 한 순간도 방심할 수 없군! 그럼 우리 중 누가 더 예쁜지, 여기서 승부를 가려 보세나!',
      );
      era.println();
      await era.printAndWait(
        `그 후, 두명의 ${opera.get_uma_sex_title()}들은 ${
          me.name
        }이(가) 지켜보는 가운데 무려 4시간 동안 패션쇼 대결을 펼쳤다……! 두 사람이 즐거워하는 건 그렇다 치더라도, 왜 하필 ${
          me.name
        }까지 끌어들인 건지. 이건 정말 무자비한 짓이 아닐 수 없다!`,
      );
      era.println();

      get_attr_and_print_in_event(7, [0, 5, 0, 0, 0], 0) &&
        (await era.waitAnyKey());
    } else if (event_arg === 95 + 3) {
      const winning_ticket = get_chara_talk(35);
      await print_event_name(
        [{ color: chara_colors[1], content: '노려라 사회인 편' }],
        gold_ship,
      );

      await era.printAndWait('해가 바뀌고, 시니어급 레이스가 시작되었다.');
      await era.printAndWait(
        `곧, 텐노상과 타카라즈카 기념 같은 큰 대회도 ${me.get_couple_title()}에게 다가올 것이다.`,
      );
      era.println();

      await era.printAndWait('그러나 골드 쉽은 아직 트레이닝실에 오지 않았다.');
      era.println();

      await era.printAndWait(`${me.name}은(는) 화를 참으며 학원 내를 수색했다——`);
      era.println();

      await gold_ship.say_and_wait(
        `티케조, 너에게 가장 중요한 건 바로 소위 사회인력이야.`,
      );
      await winning_ticket.say_and_wait('인력 회사?');
      await winning_ticket.say_and_wait(
        '...아니아니, 사회에 잘 적응하고, 규정에 따라 신속하게 행동하며, 주변 사람들에게 피해를 주지 않는 《사회인・력》말이지!',
      );
      await winning_ticket.say_and_wait(
        '《사회인 점력》! 굉장히 멋져 보이는 말이네……!!',
      );
      era.println();

      era.printButton(
        '（근데 네 《사회인 점력》은 완전히 불합격이야 골드 쉽——!!）',
        1,
      );
      await era.input();

      await gold_ship.say_and_wait(
        '왜《사회인・력》을 《사회인 점력》이라고 읽는지는 모르겠지만, 우리의《사회인 점력》을 시험해 보자!',
      );
      await gold_ship.say_and_wait('저기서 훔쳐보는 트레이너, 너도 따라와!');
      era.println();

      await era.printAndWait(
        `말을 마치자, 골드 쉽과 위닝 티켓은 황급히 캠퍼스를 뛰쳐나갔고, ${me.name}는 숨을 헐떡이며 급히 뒤따라갔다.`,
      );
      era.println();

      await era.printAndWait(
        '그 후, 골드 쉽 일행이 전철 안에서 침묵을 지키며 자신의《사회인 점력》을 보여주려 했던 시도는 시작된 지 15초 만에 실패로 끝났다.',
      );
      era.println();

      get_attr_and_print_in_event(7, [0, 0, 0, 5, 0], 0) &&
        (await era.waitAnyKey());
    } else if (event_arg === 95 + 29) {
      if (
        era.get('cflag:0:위치') !== location_enum.beach ||
        era.get('cflag:7:위치') !== era.get('cflag:0:위치')
      ) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name(
        [{ color: chara_colors[1], content: '여름 합숙' }],
        gold_ship,
      );

      await gold_ship.say_and_wait('여름이다! 바다다! 수영복이다!');
      era.println();

      await era.printAndWait('둘은 함께 해변을 거닐며……');
      await era.printAndWait(
        `${gold_ship.name}은 무더운 여름날에도 활기차게 움직였고, ${me.name}은(는) 땀을 뻘뻘 흘리며 따라갔다.`,
      );
      era.println();

      era.printButton('「올해 여름은 왠지 예년보다 더 덥네……!」', 1);
      await era.input();

      await gold_ship.say_and_wait('더우면 옷을 벗으면 되는 거 아니야?');
      era.println();

      await era.printAndWait(
        `${me.name}은(는) 그 말을 듣자마자 눈을 동그랗게 뜨곤, 수영복 외에는 아무것도 입지 않은 자신의 온몸을 훑어보았다. ${me.name}은(는) 두 손가락을 뻗어 먼저 자신의 눈을 가리키더니, 다시 ${gold_ship.name}의 눈을 가리켰다.`,
      );
      era.println();

      await era.printAndWait('「알았어, 알았어. 농담이야——」');
      await era.printAndWait('「빙수 먹으러 가자, 빙수! 체온을 낮추자!」');

      era.printButton('「좋아. 내가 사올게.」（우마코인-5，호감+10，애정+5）', 1);
      await era.input();

      await era.printAndWait(
        `${me.name}은 ${gold_ship.name}을 해변에 홀로 남겨두고 서둘러 간이 음식점으로 가서 빙수를 사러 갔다. 돌아오는 길에——`,
      );

      era.drawLine();
      await era.printAndWait(
        `행인A「어라? 이 ${
          gold_ship.sex_code - 1 ? '아가씨' : '청년'
        } 혼자인가?」`,
      );
      await era.printAndWait(
        `행인B「${gold_ship.sex_code - 1 ? '오빠' : '언니'}들이랑 놀래?」`,
      );
      era.println();

      await gold_ship.print_and_wait(
        `${gold_ship.name}은 여전히 제자리에 서 있지만, 꽃처럼 아름다운 사람은 언제나 관심을 끌기 마련이다. 악의를 품은 몇몇 녀석들이 ${gold_ship.sex}를 둘러싸고 끊임없이 성가시게 굴고 있다. 이런 상황에서도 ${gold_ship.name}은 여전히 상대를 얼버무려 넘기려 애쓰고 있다. 평소의 위풍당당한 모습은 전혀 찾아볼 수 없다……`,
      );
      era.println();

      await gold_ship.print_and_wait(
        `그렇지……저 녀석은 유명한 ${gold_ship.get_uma_sex_title()}라서, 이런 자리에서는 화를 내기 힘들어……`,
      );
      era.println();

      await gold_ship.print_and_wait(
        `비록 ${gold_ship.name}은 겉으로는 매우 제멋대로지만 사실은 누구보다「사화성」이라는 것을 잘 알고 있는 것이다.`,
      );
      era.println();

      era.printButton(
        `「어이, 남의 ${gold_ship.sex_code - 1 ? '여자' : '남자'}에게 뭐 하는 거야?」`,
        1,
      );
      await era.input();

      await era.printAndWait(
        `${me.actual_name}의 말이 끝나자, 현장에 있던 사람들이 모두 놀라 ${me.sex}를 바라보았다.`,
      );
      era.println();

      await gold_ship.say_and_wait('달링~ 왔구나~');
      era.println();

      if (era.get('love:7') >= 75) {
        await gold_ship.print_and_wait(
          `${gold_ship.name}은 기회를 놓치지 않고 불량배들을 밀어내며 ${me.actual_name}에게 달려가 두 팔을 벌려 껴안고 열정적인 딥키스를 선사했다. ${me.actual_name}을(를) 포함한 모두가 깜짝 놀랐지만, ${me.actual_name}은(는) 곧바로 응답했다——두 사람의 혀가 서로를 탐구하며 상대에 대한 갈망과 열정을 나누었다…… 불량배들은 작업이 실패한 것을 알고 욕을 내뱉으며 떠났다.`,
        );
      } else {
        await gold_ship.print_and_wait(
          `${gold_ship.name}는 기회를 놓치지 않고 불량배들을 밀어내며 ${me.actual_name}에게 달려가 두 팔을 벌려 껴안고 ${me.actual_name}의 뺨에 가볍게 입맞춤을 했다——이 입맞춤은 뺨에 립밤의 차가움을 남겼지만, ${me.actual_name}의 요동치는 가슴 속에는 흔적을 뜨거운 흔적을 새겨 넣었다.`,
        );
      }

      era.drawLine();
      await era.printAndWait(
        `사건은 일단락되었고, ${me.name}은(는) 골드 쉽과 함께 파라솔 아래 앉아 빙수의 시원함을 즐기고 있다.`,
      );
      era.println();

      await gold_ship.say_and_wait('휴, 정말 아슬아슬했어~고루시짱 거의 납치당할 뻔 했네~');
      await gold_ship.say_and_wait('고마워, 트레짱♡');
      await gold_ship.say_and_wait('그건 그렇고……난 이제 『네 여자』가 된 건가?');

      await era.printAndWait(
        `${gold_ship.name}은 교활한 표정을 지으며 ${me.name}의 어깨에 기댔고, ${me.name}이(가) 아무리 설명해도 귀담아듣지 않았다…… 이 일은 아마 ${gold_ship.sex}에게 10년은 더 우려먹히겠지……`,
      );
      era.println();
      sys_change_money(-5, 7);
      sys_like_chara(7, 0, 10, true, 5) && (await era.waitAnyKey());
    } else if (event_arg === 'eden') {
      new GoldShipEduMarks().keywords++;
      const your_callname = era.get('callname:7:0');
      const taste = get_chara_talk(302);
      await print_event_name(
        [{ color: chara_colors[1], content: '에덴으로 가는 길' }],
        gold_ship,
      );

      await era.printAndWait(
        `늦겨울 찬바람이 뼈 속까지 스며들고, 정오가 되면 진실이 길을 밝혀주리……${me.name}은(는) 골드 쉽과 함께 네 장의 단서 쪽지를 들고 최종 목적지로 향한다.`,
      );
      era.println();
      await gold_ship.say_and_wait(
        '운명의 만남을 앞두고, 내 오른손도 칠흑 같은 어둠의 저주에 찔려 아파오네……',
      );
      era.println();

      era.printButton('「하지만 이건 네가 피할 수 없는 운명이야, 용기를 내서 나아가자!」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '그건 당연하지. 설령 신이라 해도 내가 그곳으로 가는 것을 막을 수는 없어!',
      );
      await gold_ship.say_and_wait(
        `준비됐어, ${your_callname}? 저기가 우리의 종착지야!`,
      );
      era.println();

      era.printButton('「흥, 이미 준비되어 있다고! 가자!!」', 1);
      await era.input();

      await era.printAndWait(
        `어둠, 이것이 ${me.get_couple_title()}이 이곳에 대해 가진 첫인상이다.`,
      );
      await era.printAndWait(
        `추위, 이것이 이곳이 ${me.get_couple_title()}에게 가한 첫 번째 공격이다.`,
      );
      era.println();
      await era.printAndWait(
        `손을 뻗어도 앞이 보이지 않을 정도로 어두운 동굴 속에서, 오직 한 줄기 빛만이 ${me.get_couple_title()}을 계속 앞으로 나아가게 이끄는 듯하다.`,
      );
      era.println();
      await era.printAndWait(
        '주변의 수많은 기이한 생물들은 당신들을 신경 쓰지 않고, 아주 편안하고 느긋하게 지내고 있다.',
      );
      era.println();
      await gold_ship.say_and_wait('여기가 바로…… 쪽지에 적힌 곳이야.');
      await gold_ship.say_and_wait('『Su』、『an』、『gw』.');
      era.println();

      era.printButton('「마지막 글자는『jok』!」', 1);
      await era.input();

      await gold_ship.say_and_wait(
        '그러니 정답은 이미 뻔하지…… 바로 『Sujokgwan』, 수족관이야!',
      );
      await gold_ship.say_and_wait('설마, 에덴이 이런 곳에 있을 줄이야……');
      era.println();
      await era.printAndWait(
        '바로 그때, 옆에서 한 그림자가 나타났다! 그 작은 그림자는 박수를 치며 우렁찬 웃음을 터뜨렸다.',
      );
      era.println();
      await taste.say_and_wait('훌륭! 『에덴 프로젝트』를 통해 이곳에 오다니!');
      await taste.say_and_wait('감동! 트레이너인 자네의 지원도 절대 빼놓을 수 없지!');
      await gold_ship.say_and_wait('당신이 트레센의 그분이라고?! 왜 여기 있는거야?');
      await gold_ship.say_and_wait(`${your_callname}! 이미 알고 있었어?!`);
      era.println();

      era.printButton(
        '「세 번째 단서 때부터 짐작했어. 장소와 배후가 누군지까지.」',
        1,
      );
      await era.input();

      await gold_ship.say_and_wait('뭐라고?! 그럼 나한테 말해 줘야지!');
      await taste.say_and_wait('가관! 그럼 재미가 없잖나!');
      await taste.say_and_wait('설명! 소위 『에덴 프로젝트』란……!');
      era.println();
      await era.printAndWait(
        `알고 보니, 「에덴 프로젝트」는 열정적이지만 종종 다른 곳에 정신이 팔리는 ${gold_ship.name}이 트윙클 시리즈 대회에 전념할 수 있도록 마련된 계획이었다.`,
      );
      era.println();
      await era.printAndWait(
        '「에덴 프로젝트」를 통해 다양한 단서와 비전서를 이용해 골드 쉽의 호기심을 자극함으로써, 프로젝트의 목표를 달성한 것이다.',
      );
      era.println();
      await era.printAndWait(
        `${taste.name}에게 있어 소위 에덴이란 우마무스메의 삶에서 가장 중요한 트윙클 시리즈를 말하는 것이었다.`,
      );
      era.println();
      await taste.say_and_wait('바로 그거일세!');
      await gold_ship.say_and_wait(
        '그랬구나! 그럼 내 꿈에 나타난 목소리도 너희들이 꾸민 짓이지?',
      );
      await taste.say_and_wait('응?');
      await gold_ship.say_and_wait('응?');
      era.println();

      era.printButton('「응?」', 1);
      await era.input();

      await taste.say_and_wait(
        '놀람! 당신의 친구들을 찾아서 당신을 위한 쪽지와 비전서를 준비해 준 것 외에 숨겨진 흑마술은 사용한 적이 없네!',
      );
      await taste.say_and_wait('아, 이건 말하면 안되는 거로군. 잊어버리게.');
      await gold_ship.say_and_wait(
        '설마, 정말로 고루시짱의 내면에 두 번째 인격이 탄생한 건가?!',
      );
      era.println();

      era.printButton('「그런 건 하나면 충분해!」', 1);
      await era.input();

      await era.printAndWait(
        `이렇게, ${me.get_couple_title()}의 3년간의 여정은 웃음과 장난, 그리고 알 수 없는 일들로 막을 내렸다.`,
      );

      era.drawLine();
      await era.printAndWait(
        `저녁, ${me.name}과(와) ${gold_ship.name}은 해변으로 와서 모래사장에 누워, 얼굴에 닿는 짭짤한 바닷바람을 즐기고 있었다.`,
      );
      era.println();

      era.printButton('「……고마워. 골드 쉽.」', 1);
      await era.input();

      await gold_ship.say_and_wait('응? 왜 갑자기…… 아, 벌써 잠들었나?');
      await gold_ship.say_and_wait('정말이지, 믿음직하면서도 믿음직하지 않은 녀석이네.');
      await gold_ship.say_and_wait(
        '지난 3년 동안 내가 너를 꽤나 힘들게 했는데도 사직서를 내지 않다니.',
      );
      await gold_ship.say_and_wait(
        '어쩔 떄는 진지하고, 어쩔 떄는 나랑 같이 장난치기도 하고. 가끔은 내가 너무 지나친 건 아닌지 생각하기도 했지만, 넌 굳이 어른스러운 척하며 날 말리지도 않았지.',
      );
      await gold_ship.say_and_wait(
        '알고 있지? 이사장이 『에덴』은 트윙클 시리즈라고 했어.',
      );
      await gold_ship.say_and_wait(
        '하지만 내 『에덴』은 트레센도 아니고, 트윙클 시리즈도 아니야……',
      );
      await gold_ship.say_and_wait('……');
      await gold_ship.say_and_wait('쪽♡');
      era.println();

      if (era.get('love:7') >= 50) {
        era.printButton('「눈을 뜬다.」', 1);
      }
      era.printButton('「자는 척 한다.」', 2);
      const ret = await era.input();

      if (ret === 1) {
        await gold_ship.say_and_wait('우왁, 설마 깨어났다고?!');
        await gold_ship.say_and_wait('아니, 애초에 잠들지도 않았던 거야! 하아, 날 속였구나!');

        await quick_into_sex(7);

        await gold_ship.say_and_wait('하아…… 하아…… 속이다니……');
        await gold_ship.say_and_wait('……이 녀……석……');
        era.println();

        era.printButton('「후후, 괴롭힘 당하는 기분 어때?」', 1);
        await era.input();

        await gold_ship.say_and_wait('너…… 한 가지 깜빡했어……');
        await gold_ship.say_and_wait('트레이너는 우마무스메를 이길 수 없다고!');
        era.println();

        era.printButton('「뭣이라!」', 1);
        await era.input();

        await gold_ship.say_and_wait('앞으로도 절대 떠나게 하지 않을 거야♡');
        era.println();
        await era.printAndWait(
          `보아하니, ${me.name}이(가) 고루시짱에게 꽉 잡혀 사는 생활은 앞으로도 아주 오랫동안 계속될 것 같다……`,
        );
      } else {
        await gold_ship.say_and_wait('앞으로도 절대 떠나게 하지 않을 거야♡');
        era.println();
        await era.printAndWait(
          `보아하니, ${me.name}이(가) 고루시짱에게 꽉 잡혀 사는 생활은 앞으로도 아주 오랫동안 계속될 것 같다……`,
        );
      }
      sys_like_chara(7, 0, 200) && (await era.waitAnyKey());
    } else if (event_arg === 'carrot') {
      await print_event_name('당근 뽑는 귀신', gold_ship);
      await era.printAndWait([
        '학원에서 회색 털을 가진 ',
        gold_ship.get_uma_sex_title(),
        '에게 가로막혔다.',
      ]);
      await gold_ship.say_and_wait(
        '하이! 거기 있는 트레이너! 고루시짱과 함께 해변으로 가서 당근 뽑지 않을래!',
      );
      await era.printAndWait([
        '알고 보니 문제아 ',
        gold_ship.get_colored_name(),
        '이었다……애초에 해변에 당근이 나기는 하나?',
      ]);
      era.printButton('「뽑고 싶으면 뽑는 거지!」（우마코인+20）', 1);
      era.printButton('「왠지 좀 수상한데……」（체력+100）', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '해변 모래에서 무지개빛을 뿜어내는, 게다가 보석처럼 보이는 당근을 파냈다?!',
        );
        sys_change_money(20);
      } else {
        await era.printAndWait(
          '평범한 당근을 얻었다…… 잠깐, 해변에서 자란 게 정말 평범한 걸까!? 어쨌든 일단 가져가서 점심 반찬으로 삼아야겠다.',
        );
        sys_change_attr_and_print(0, '체력', 100);
      }
    } else {
      return await super.week_start(
        gold_ship,
        me,
        callname,
        hook,
        extra_flag,
        event_object,
      );
    }
  }
};
