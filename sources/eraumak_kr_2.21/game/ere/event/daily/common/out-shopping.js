const era = require('#/era-electron');

const { sys_change_motivation } = require('#/system/sys-calc-base-cflag');
const {
  sys_get_colored_callname,
  sys_like_chara,
  sys_love_uma,
} = require('#/system/sys-calc-chara-others');

const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const print_event_name = require('#/event/snippets/print-event-name');
const quick_into_sex = require('#/event/snippets/quick-into-sex');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk-factory');

const { location_enum } = require('#/data/locations');

/**
 * @this {CustomizedDaily}
 * @param {CharaTalk} chara
 * @param {CharaTalk} me
 * @param {HookArg} hook
 */
module.exports = async function (chara, me, hook) {
  const temp = await select_action_in_shopping_street();
  if (
    temp === 3 &&
    chara.id > 0 &&
    era.get(`love:${this.id}`) >= 70 &&
    (era.get(`talent:${this.id}:사교태도`) === 1 ||
      era.get(`talent:${this.id}:종잡을수없음`) ||
      era.get(`talent:${this.id}:솔직함정도`) === -1 ||
      era.get(`talent:${this.id}:반항의사`) === -1 ||
      era.get(`talent:${this.id}:수치내성`) === 1 ||
      era.get(`talent:${this.id}:공포감수`) === 1 ||
      era.get(`talent:${this.id}:자신감`) === 1) &&
    Math.random() < era.get(`love:${this.id}`) / 2000
  ) {
    hook.override = true;
    /** @author KUN */
    await print_event_name('이 영화 맞나?', chara);
    await era.printAndWait([
      '원래는 ',
      chara.get_colored_name(),
      '과(와) 함께 상점가를 가볍게 둘러보려 했지만, 뜻밖의 홍보물을 발견했다.',
    ]);
    era.println();
    await say_by_passer_by_and_wait('홍보물', [
      chara.get_uma_sex_title(),
      '의 성장 과정을 완벽하게 담아낸 신작!',
    ]);
    era.println();
    await era.printAndWait([
      '소문은 듣지 못했지만, ',
      me.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 호기심에 표를 사서 입장했다.',
    ]);
    await era.printAndWait('상영관에 앉아 불이 꺼지고 이야기가 시작되기를 약간의 기대감을 안고 기다렸다.');
    await era.printAndWait(
      '스크린의 화면은 확실히 신작다운 퀄리티였지만, 성장 과정은 다소 의외였다.'
    );
    era.println();
    await say_by_passer_by_and_wait('배우', '트레이너, 당신 덕분이에요……');
    await say_by_passer_by_and_wait('배우', '전부 트레이너 덕분에, 지금의 제가……');
    era.println();
    await era.printAndWait([
      '스크린의 과장된 장면에 ',
      me.get_colored_name(),
      '은(는) 묘한 위화감을 느꼈다.',
    ]);
    await era.printAndWait('이게 정말 성장 과정이라고?');
    era.println();
    await era.printAndWait([
      '뭔가 잘못됐음을 깨달은 ',
      me.get_colored_name(),
      '은(는) 고개를 돌려 ',
      chara.get_colored_name(),
      '에게 남은 부분은 그만 보자고 말하려 했다.',
    ]);
    era.println();
    await chara.say_and_wait('……');
    era.println();
    await era.printAndWait('팔 위로 따스한 감촉이 전해졌다.');
    await era.printAndWait([
      '곁에 앉아있던 ',
      chara.get_colored_name(),
      '이(가) 살며시 ',
      me.get_colored_name(),
      '의 손을 잡았다.',
    ]);
    era.println();
    await chara.say_and_wait('……갈 건가요?');
    era.println();
    await era.printAndWait([
      '어두운 상영관 안에서, 오직 ',
      chara.get_colored_name(),
      '의 얼굴만이 유독 뚜렷하게 보였다.',
    ]);
    await era.printAndWait([
      '두 손이 ',
      me.get_colored_name(),
      '의 팔에 포개진 채, 살며시 어깨에 기대어 왔다.',
    ]);
    era.println();
    await era.printAndWait(
      '화면은 두 사람의 마음속에서 더 이상 중요하지 않았고, 시선은 서로에게 단단히 얽매였다.'
    );
    await era.printAndWait('스크린의 희미한 빛이 서로의 얼굴을 비추며, 눈동자에 빛을 굴절시켰다.');
    era.println();
    await chara.say_and_wait([sys_get_colored_callname(this.id, 0), '……']);
    await chara.say_and_wait('저……');
    await say_by_passer_by_and_wait('배우', '당신을 좋아해요!');
    era.println();
    await era.printAndWait('영화가 클라이맥스에 달하며, 두 사람이 하려던 행동을 끊어버렸다.');
    await era.printAndWait([
      '소리가 ',
      me.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      ' 사이를 덮쳤고, 얽힌 시선에는 약간의 어색함이 섞여 있었다.',
    ]);
    era.printButton('「일단…… 진정하자」（컨디션 상승, 호감도+10）', 1);
    era.printButton('「우리…… 같이 어디 좀 갈까」（컨디션  대폭 상승, 연모+1）', 2);
    let wait_flag;
    if ((await era.input()) === 1) {
      await era.printAndWait('영화는 점차 결말을 향해 갔고, 조명도 때맞춰 켜졌다.');
      await era.printAndWait([
        '밝은 빛이 ',
        me.get_colored_name(),
        '의 어색한 얼굴을 비추자 ',
        me.get_colored_name(),
        '도 헛기침을 가볍게 했다.',
      ]);
      era.println();
      await chara.say_and_wait('……네.');
      era.println();
      await era.printAndWait([
        '여전히 맞닿아 있던 손이 ',
        me.get_colored_name(),
        '을(를) 쥐더니, 이내 함께 자리에서 일어났다.',
      ]);
      await era.printAndWait([
        '조금은 아쉬운 기색이었지만 얌전히 일어나 ',
        me.get_colored_name(),
        '의 뒤를 따랐다.',
      ]);
      era.println();
      wait_flag = sys_change_motivation(this.id, 1);
      wait_flag = sys_like_chara(this.id, 0, 20) || wait_flag;
    } else {
      await era.printAndWait([
        '영화의 클라이맥스 속에서도, ',
        me.get_colored_name(),
        '은(는) 그 사이에서 간신히 목소리를 냈다.',
      ]);
      await era.printAndWait([
        '분위기에 휩쓸려 소리친 ',
        chara.get_colored_name(),
        '은(는) 흠칫 놀라며, 즉시 뒤로 몸을 움츠렸다.',
      ]);
      await era.printAndWait([
        '반대로, ',
        me.get_colored_name(),
        '의 얼굴은 부드러워지며, 천천히 앞으로 다가갔다.',
      ]);
      await era.printAndWait([
        '입술이 겹쳐지며, ',
        chara.get_colored_name(),
        '의 놀라움과 수줍음을 모두 마음속으로 밀어 넣은 채, 행복감을 만끽했다.',
      ]);
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        chara.get_colored_name(),
        '의 손을 잡고 조용히 상영관을 빠져나왔다.',
      ]);
      await era.printAndWait([
        '온통 새빨개진 얼굴을 한 ',
        chara.get_colored_name(),
        '을(를) 데리고, 눈앞의 러브호텔을 바라보며 천천히 ',
        chara.sex,
        '의 어깨를 감싸 안고 들어갔다……',
      ]);
      era.println();
      era.set('flag:현재위치', location_enum.love_hotel);
      await quick_into_sex(this.id);
      wait_flag = sys_change_motivation(this.id, 2);
      wait_flag = sys_love_uma(this.id, 1) || wait_flag;
    }
    wait_flag && (await era.waitAnyKey());
  } else {
    hook.arg = temp <= 1;
    let talk;
    switch (temp) {
      case 0:
        talk = '오락실, 인형 뽑기 집게가 인형을 놓지 않기를 기도했다.';
        break;
      case 1:
        talk = '제비뽑기, 좋은 게 나올까?';
        break;
      case 2:
        talk = '가라오케, 분위기 한 번 띄워보자!';
        break;
      case 3:
        talk = '영화관, 요즘 재밌는 영화가 있나?';
    }
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      chara.get_colored_name(),
      '은(는) 함께 상점가에 왔다. ',
      talk,
    ]);
  }
};