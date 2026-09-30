/**
 * @file 베누스 파크 - 育成
 * @author 梦露
 * @author 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { sys_get_callname } = require('#/system/sys-calc-chara-others');

const CustomizedEdu = require('#/event/edu/edu-common');
const vp_week_end = require('#/event/edu/edu-events-205/week-end');
const vp_week_start = require('#/event/edu/edu-events-205/week-start');
const { add_event } = require('#/event/queue');
const check_aim_race = require('#/event/snippets/check-aim-race');
const print_event_name = require('#/event/snippets/print-event-name');

const { say_by_passer_by_and_wait } = require('#/utils/chara-talk');
const { get_chara_talk } = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const TreveEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-205');
const event_hooks = require('#/data/event/event-hooks');
const EventMarks = require('#/data/event/event-marks');
const RaceHistory = require('#/data/race/model/race-history');
const { race_enum } = require('#/data/race/race-const');

module.exports = class extends CustomizedEdu {
  async crazy_fan_end() {
    const me = get_chara_talk(0),
      montjeu = get_chara_talk(204),
      vp = get_chara_talk(205);
    await era.printAndWait([
      '마침내, 어느 순간을 경계로 ',
      me.get_colored_name(),
      '과(와) ',
      vp.get_colored_name(),
      '의 연락은 완전히 끊어졌다.',
    ]);
    await era.printAndWait('담당은 트레이너를 만나고 싶어 하지 않았고, 트레이너는 담당을 만날 엄두를 내지 못했다.');
    await era.printAndWait([
      '하지만 여러 가지 영향을 고려한 탓인지, ',
      me.get_colored_name(),
      '과(와) ',
      vp.get_colored_name(),
      '의 계약을 이어받겠다고 나서는 사람은 없었다.',
    ]);
    await era.printAndWait([
      '아무래도 ',
      montjeu.get_colored_name(),
      '가 다시 한 번 프랑스의 공주를 돌보는 중책을 짊어진 것 같았다.',
    ]);
    await era.printAndWait([
      { isBr: true },
      '공적인 일로 우연히 ',
      montjeu.get_colored_name(),
      '와 마주쳤을 때, ',
      me.get_colored_name(),
      '이(가) 받은 것은 비난이 아니라, ',
    ]);
    await era.printAndWait('——동정 어린 시선이었다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 서둘러 인사를 한 뒤 자리를 떠날 수밖에 없었다.',
    ]);
    await era.printAndWait('이 영문을 알 수 없는 동정에 불안함을 느꼈기 때문일까, 아니면 두려웠기 때문일까……');
    await era.printAndWait('어느 기자와 공주의 결말과 비슷하면서도 사뭇 달랐다.');
    await era.printAndWait([
      me.get_colored_name(),
      '과(와) ',
      vp.get_colored_name(),
      '는 두 번 다시 만나지 않았다.',
    ]);
    await print_event_name('한 번도 친해지지 못한 이국의 공주', vp);
  }

  async foreign_travel(vp, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg === 47 + 36) {
      const montjeu = get_chara_talk(204);
      await print_event_name('베르사유의 장미', vp);
      await era.printAndWait(
        `튈르리 정원은 파리 중심부에 위치해 있다. 샹젤리제 거리를 지나 콩코르드 광장과 루브르 미술관 사이에 있는 파리 중심부의 대형 정원으로, 관광 명소일 뿐만 아니라 시민들의 휴식처로도 널리 사랑받고 있다.`,
      );
      await era.printAndWait(
        `휴일 낮이 되자 가족 단위로 찾은 사람들이 많았고, 여기저기서 아이들이 뛰어노는 모습을 볼 수 있었다.`,
      );
      await era.printAndWait(`돌연, ${vp.name}는 완전히 움츠러들었다.`);
      await era.printAndWait(
        `${me.name}이(가) 고개를 들었을 때, ${me.get_couple_title()}에게 말을 거는 목소리가 들렸다.`,
      );
      await montjeu.say_and_wait('왔구나, 하지만 내가 볼일이 있는 사람은 저쪽이야.');
      await era.printAndWait(
        `신중함과 지성이 묻어나는 ${montjeu.get_adult_sex_title()}의 목소리.`,
      );
      await era.printAndWait(
        `하지만 반사적으로 가장 먼저 떠오른 기억은, 수없이 들었던 ${vp.sex}의 위닝 라이브 목소리였다.`,
      );
      await era.printAndWait(
        `뒤돌아보니, 늘씬하고 키가 큰 ${vp.get_uma_sex_title()}가 팔짱을 낀 채 ${me.get_couple_title()}을 주시하고 있었다.`,
      );
      await era.printAndWait(`——전설.`);
      await vp.say_and_wait(`스승님!`);
      await era.printAndWait(`${vp.name}는 눈을 반짝이며 그 인물을 불렀다.`);
      await era.printAndWait(`그리고 ${me.name}은(는) 온몸이 굳어 한 발자국도 움직일 수 없었다.`);
      await era.printAndWait(`경종처럼 빠른 심장 박동이 머릿속을 가득 채웠다.`);
      await montjeu.say_and_wait(`그러면.`);
      await era.printAndWait(`${montjeu.sex}는 ${me.name}의 왼손에 들린 종이봉투를 바라보았다.`);
      await era.printAndWait(
        `${me.name}을(를) 나무 그늘 아래 벤치로 초대하고, 쓴웃음을 지으며 특산품을 받아들었다.`,
      );
      await era.printAndWait(
        `${montjeu.name}. 프랑스의 전설적인 ${vp.get_uma_sex_title()}이자 개선문상 우승자 중 한 명.`,
      );
      await montjeu.say_and_wait(
        `트레센에 들어간 뒤, 나도 휴일에는 ${vp.sex}에게 개인 지도를 했어. ${vp.sex}의 소양에 기술이 뒷받침된다면 가르쳐 주겠다고 간단히 말했지. 눈 깜짝할 사이에 레이스의 마음가짐을 터득하더군.`,
      );
      era.printButton(`「내 방식이 불만인 건가?」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name}는 대답 대신, 바람에 흔들리는 나무를 지그시 응시했다.`,
      );
      await era.printAndWait(`그 너머로 햇빛을 받아 반짝이는 센강의 푸른 물결이 보였다.`);
      await era.printAndWait(`가을이 되었으니 더위는 이미 느껴지지 않을 터였다.`);
      await era.printAndWait(
        `하지만 ${me.name}의 관자놀이에서 뺨으로, 한 방울의 땀이 존재를 새기듯 천천히 흘러내렸다.`,
      );
      await era.printAndWait(
        `침묵의 시간은 자신을 응시하는 ${montjeu.name}를 ${me.name}이(가) 눈치챘을 때 끝이 났다.`,
      );
      await montjeu.say_and_wait(
        `불만이 있는지 없는지는 직접 만나보고 결정하고 싶었어. 상대를 실제로 보지 않으면 알 수 없으니까. 그래서, 지금에서야 답을 정했지.`,
      );
      await era.printAndWait(
        `${montjeu.name}는 그 날카로운 눈동자를 ${me.name}에게 돌리고, 미간을 찌푸리며 말로 추격해 왔다.`,
      );
      await montjeu.say_and_wait(`불만이다.`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name}는 말을 이어나갔다.`);
      await montjeu.say_and_wait(
        `지금까지 네 실적은 꽤 설득력이 있었지. 좋은 점은 그대로 살리고, 나쁜 점은 고쳐나간다. ${vp.get_uma_sex_title()}의 소질을 최대한 이끌어내는 방식이 결과적으로 방임주의적인 방식이더라도, 하나의 육성 수단으로서 이해할 수 있었어. 완성도가 높은 ${vp.name}를 담당하니 더더욱 설득력이 있게 되겠지.`,
      );
      await era.printAndWait(`방임주의처럼 보였던 거겠지.`);
      await montjeu.say_and_wait(
        `하지만, 지금 네 태도는 그저 방치하는 것에 불과해. 넌 네가 할 수 있는 일을 포기했고, ${vp.name}의 완성을 향한 노력을 저버렸어. 넌 그저 방관자일 뿐이야.`,
      );
      await era.printAndWait(`그럼, 어떡해야 할까.`);
      await era.printAndWait(
        `지금까지 자신의 기술을 믿고, 담당 ${vp.get_uma_sex_title()}를 신뢰해 왔다. 그렇다면, 완벽한 ${vp.get_uma_sex_title()}를 상대로, 결함 투성이인 자신은 어떻게 다가가야 할까?`,
      );
      await era.printAndWait(`${me.name}은(는) ${vp.sex}에 대해 어떻게 생각해야 할까?`);
      await era.printAndWait(`${montjeu.name}가 이어 말했다.`);
      await montjeu.say_and_wait(
        `개선문상은 높은 벽이야. 아무리 프랑스의 천재라 해도, 그렇게 쉽게 거머쥘 수 있는 건 아니지.`,
      );
      era.printButton(`「지금 상태로는 이길 수 없다는 뜻이야?」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그래.`);
      await era.printAndWait(
        `멀리서 ${vp.name}가 들판을 달리고 있다. 그 뒤를 쫓듯 어느새 늘어난 소년 소녀들도 달리고 있었다.`,
      );
      await era.printAndWait(
        `${vp.sex}가 그렇게 하면 누구라도 매료되겠지.`,
      );
      await era.printAndWait(
        `그리고 그것을 아무런 어려움 없이 힘으로 바꾸어, 천재적인 능력으로 레이스에서 이기겠지.`,
      );
      await era.printAndWait(
        `마음속 중얼거림을 긍정하듯, 왕년의 전설이 입을 열었다.`,
      );
      await montjeu.say_and_wait(
        `${vp.sex}는 이길 거다. 분명 너 없이도 이길 수 있는 강력한 떡잎이지.`,
      );
      era.printButton(`「알고 있어.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`그렇기 때문에, 물어봐야만 해.`);
      await era.printAndWait(
        `${montjeu.name}가 일어서서 ${me.name}의 눈을 쏘아보는 시선은 조금 차가웠지만, 결코 깔보는 것은 아니었다.`,
      );
      await era.printAndWait(
        `단점을 노골적으로 지적받는 공평한 무대가, ${me.name}의 심장을 꽉 쥐는 듯했다.`,
      );
      await era.printAndWait(`지금까지 외면해 왔던 것을 눈앞에 들이미는 듯한 감각이었다.`);
      await montjeu.say_and_wait(
        `혼자서도 이길 수 있는 ${vp.name}의 곁에, 네가 있는 이유를.`,
      );
      await era.printAndWait(`${vp.name}가 멀리서 손을 흔들며 인사했다.`);
      await era.printAndWait(
        `${montjeu.name}는 부드러운 미소와 함께 ${vp.sex}에게 손을 흔들었지만, ${me.name}은(는) 벤치에서 어깨를 늘어뜨린 채 ${vp.sex}를 응시할 수밖에 없었다.`,
      );
      await montjeu.say_and_wait(
        `개선문 앞에 서기 전에 답을 내야 할 거다, ${me.name}. 그렇지 않으면 넌 ${vp.sex}의 미래를 빼앗게 될 거야.`,
      );
      await era.printAndWait(`다시 뛰어나간 ${vp.name}의 뒷모습을 수많은 아이들이 쫓고 있었다.`);
      await era.printAndWait(`그 모습은 점차 아스라이 숲 속으로 사라졌다.`);
      return true;
    }
    return await super.foreign_travel(
      vp,
      me,
      callname,
      hook,
      extra_flag,
      event_object,
    );
  }

  async out_start(vp, me, callname, hook, extra_flag, event_object) {
    if (event_object?.arg === 95 + 25) {
      if (era.get('flag:현재상호작용캐릭터') !== 0) {
        add_event(hook.hook, event_object);
        return false;
      }
      await print_event_name('모두 소진하다', vp);
      await era.printAndWait(
        `선명한 과거와 스며드는 미래의 일들을 생각하다 보니, 금세 목적지에 도착했다.`,
      );
      await era.printAndWait(
        `그 찻집에 들어서자, 점장이 ${me.name}을(를) 보며 또다시 눈썹을 치켜올렸다.`,
      );
      await say_by_passer_by_and_wait('찻집 점장', '음? 이번엔 혼자인가요?');
      era.printButton(`「신경 쓰지 마세요.」`, 1);
      await era.input();
      await era.printAndWait(
        `가게 안을 힐끗 둘러본 뒤, ${me.name}은(는) ${vp.sex}가 흥미진진하게 바라보았던 꽃차 코너로 발길을 돌렸다.`,
      );
      await era.printAndWait(
        `그날과 마찬가지로 풍성한 라인업에, 사과, 살구, 크랜베리 등 화려한 과일 일러스트가 늘어서 있었다.`,
      );
      await era.printAndWait(
        `알파벳 순서대로 L(lemon)에 다다랐을 때, ${me.name}의 손가락은 텅 빈 선반을 가리켰다.`,
      );
      await era.printAndWait(`구불구불한 진열대에서 빠져나와 점장에게 시선을 돌렸다.`);
      era.printButton(`「……레몬 향은 없는 건가요?」`, 1);
      await era.input();
      await say_by_passer_by_and_wait(
        '찻집 점장',
        '아, 이 계절엔 생산량이 넉넉지 않아서요. 프랑스 브랜드라 원래 유통량도 적고요. 예약금을 건 사람들에겐 좀 빼두긴 했습니다만.',
      );
      await era.printAndWait(
        `그의 말이 맞다. 이 차는 이 남자의 가게 외에서는 찾아볼 수 없었다.`,
      );
      era.printButton(`「입고 예정은요?」`, 1);
      await era.input();
      await say_by_passer_by_and_wait(
        '찻집 점장',
        '당분간은 없습니다. 도매상에도 재고가 없는 것 같더라고요.',
      );
      era.printButton(`「그런가…… 아니, 됐습니다. 고맙습니다.」`, 1);
      await era.input();
      await era.printAndWait(
        `${me.name}은(는) 그대로 가게를 나서려 했으나, 한마디에 발걸음을 멈추었다.`,
      );
      await say_by_passer_by_and_wait('찻집 점장', `${vp.sex}는 잘 지내나요?`);
      await era.printAndWait(`긍정할 수도 부정할 수도 없었다.`);
      await era.printAndWait(
        `G1에서의 아쉬운 패배에 대해 ${vp.name}가 무슨 생각을 하고 있는지, ${me.name}은(는) 잘 몰랐다.`,
      );
      await me.say_and_wait('아무 역할도 못 하는 트레이너라 생각하겠지.', true);
      await era.printAndWait(`남자는 계산대에서 우물쭈물했다.`);
      await say_by_passer_by_and_wait(
        '찻집 점장',
        '당신은 그렇다 치고, 저는 그 아이의 상태가 더 걱정되네요. 동종 업계 사람들에게 그 찻잎이 있는지 한번 물어보겠습니다.',
      );
      era.printButton(`「기억하고 있으셨나요?」`, 1);
      await era.input();
      await era.printAndWait(
        `언론에 그 찻잎이 ${vp.name}의 취향이라고 밝힌 적은 없을 텐데, 남자는 쓴웃음을 지으며 말했다.`,
      );
      await say_by_passer_by_and_wait(
        '찻집 점장',
        '저희 가게 단골이신데, 데려오신 손님을 어떻게 잊겠습니까?',
      );
      era.printButton(`「으음……」`, 1);
      await era.input();
      await say_by_passer_by_and_wait(
        '찻집 점장',
        `뭐, 제가 ${vp.sex}의 팬이기도 해서요……`,
      );
      await era.printAndWait(
        `남자는 스마트폰 화면을 두드리며 기묘한 표정으로 중얼거렸다.`,
      );
      await era.printAndWait(
        `${vp.name}는 많은 사람들의 기대를 짊어지고 있다. 자신이 할 수 있는 일을 돕기 위해 수고를 마다하지 않는 사람도 있다.`,
      );
      await era.printAndWait(`다시 한번, ${me.name}은(는) 묻지 않을 수 없었다.`);
      await era.printAndWait(`어째서 자신이 ${vp.name}의 트레이너인 걸까?`);
      await era.printAndWait(`${me.name}은(는) 앞으로 어떻게 나아가야 할지 알 수 없었다.`);
      new TreveEduMarks().tea = 0;
      EventMarks.get(0).sub(event_hooks.out_start);
      return true;
    }
  }

  async race_end(vp, me, callname, hook, extra_flag) {
    const edu_weeks = era.get('cflag:205:육성턴수합산'),
      montjeu = get_chara_talk(204);
    if (
      extra_flag.race === race_enum.prix_lat &&
      edu_weeks < 96 &&
      extra_flag.rank === 1
    ) {
      await print_event_name('최강', vp);
      await era.printAndWait(
        `지금까지 없었던 자신감 넘치는 말이었지만, ${me.name}의 귀에는 공허하게만 들렸다.`,
      );
      await era.printAndWait(
        `들려오는 환호성은 마치 먼 곳의 천둥처럼, 멀리 떨어져 있음에도 귀청을 때렸다.`,
      );
      await era.printAndWait(
        `${vp.name}의 달리기에 있어, ${me.name}이(가) 수정해야 할 부분은 거의 존재하지 않았다.`,
      );
      await era.printAndWait(`이 희귀한 재능을 꽃피운 것은 아마도 ${montjeu.name}일 것이다.`);
      await era.printAndWait(
        `그리고, 마치 그 ${montjeu.name}의 주행을 떠올리게 하듯.`,
      );
      await era.printAndWait(
        `선행 전략의 어느 한순간, 선두를 달리던 ${vp.name}가 마침내 최후의 직선 코스에 돌입했을 때.`,
      );
      await era.printAndWait(`롱샹 관중들의 열기가 최고조에 달했을 때.`);
      await era.printAndWait(
        `그토록 동경해 왔고, 일본이 수십 년 동안 얻지 못했던 개선문상을 목전에 두고, ${me.name}의 마음속에는 두 가지 감정이 교차했다.`,
      );
      await era.printAndWait(`하나는 승리에 대한 확신.`);
      await era.printAndWait(
        `${vp.name}는 이전 레이스에서도 교묘한 위치 선정으로 승리를 거두었다. ${vp.sex}는 선행, 특히 마군의 선두 위치에 설 때 가장 뛰어났다.`,
      );
      await era.printAndWait(
        `그곳에서부터 뻗어나가는 라스트 스퍼트가 있다면, 무패의 ${vp.get_teen_sex_title()}인 이 ${vp.get_uma_sex_title()}를 따라잡을 존재는 없었다.`,
      );
      await era.printAndWait(
        `솔직히 말해, 이 단계에 이르면 ${vp.sex}의 승리는 확정된 것이나 다름없을 정도로 강한 확신이었다.`,
      );
      await era.printAndWait(`그리고 또 하나는 패배에 대한 공포.`);
      await era.printAndWait(
        `하지만, 그것이 지금 눈앞에서 달리는 ${vp.name}가 질 것이라는 의미는 아니었다.`,
      );
      await era.printAndWait(
        `수년 전, 일본의 그 괴조를 상대로 그 ${montjeu.name}가 좋은 위치에서 나타났을 때 온몸이 얼어붙었던 공포.`,
      );
      await era.printAndWait(
        `${vp.sex}를 이길 수 없다는 절망적인 플래시백이, 완전히 똑같은 모습을 보여주는 ${vp.name}와 겹쳐졌다.`,
      );
      await era.printAndWait(`환호성이 들려오지만, 아직 멀었다.`);
      await era.printAndWait(
        `최후의 직선에서 선두를 달리는 ${vp.name}는, 점차 뒤따르는 ${vp.get_uma_sex_title()}들을 따돌리고 있었다.`,
      );
      await era.printAndWait(`롱샹을 가득 메운 응원의 목소리에 등을 떠밀리듯이.`);
      await era.printAndWait(`과연, 저 늠름한 모습에 자신이 공헌한 부분이 있을까?`);
      await era.printAndWait(
        `${me.name}은(는) 펜스를 꽉 쥐고 떨리는 몸을 살짝 내밀어, ${vp.sex}의 옆얼굴을 똑똑히 눈에 담았다.`,
      );
      await era.printAndWait(
        `땀을 뚝뚝 흘리며, 불량 마장의 마지막 100미터를 달려나가는 ${vp.sex}를 위해, ${me.name}은(는) 무엇을 할 수 있을까.`,
      );
      await me.say_and_wait(`……`);
      await era.printAndWait(`목소리가 나오지 않았다.`);
      await era.printAndWait(
        `${vp.sex}의 승리는 이미 확정되었고, 더 이상 ${me.name}이(가) 해야 할 일은 없었다.`,
      );
      await era.printAndWait(
        `흥분한 환호성이 귀청을 찢을 듯 울려 퍼졌고, 그 소리를 통해 ${me.name}은(는) ${vp.name}가 개선문상의 결승선을 밟는 순간을 분명히 알게 되었다.`,
      );

      await era.printAndWait(`\n ${me.name}은(는) 그 순간을 보지 못했다.`);

      await era.printAndWait(
        `\n개선문상 우승 감상을 묻는 질문들, 스마트폰 알림창에 노도처럼 밀려오는 메시지들, 심지어 경기장 뒷편에서 돌아온 ${vp.name}에게 무슨 말을 했는지조차 기억나지 않았다.`,
      );
      await era.printAndWait(
        `하지만 단 한 가지, ${me.name}의 뇌리에 깊이 새겨진 것이 있었다.`,
      );
      await era.printAndWait(
        `개선문상이 끝난 후의 인터뷰에서, 와인 레드 빛의 백보드를 등지고 우승 트로피를 안은 ${vp.name}가 누군가의 질문에 대답하며 한 말.`,
      );
      await era.printAndWait(
        `어떤 질문을 받은 순간, 멍하니 있던 ${me.name}의 오른손이 덥석 붙잡혔다.`,
      );
      await vp.say_and_wait(`내년에도 저와 함께 우승할 거예요!`);
      await era.printAndWait(`어째서.`);
      await era.printAndWait(`왜 나인가.`);
      await era.printAndWait(`무엇이 텅 빈 자신을 ${vp.name}의 곁에 서게 한 것일까.`);
      await era.printAndWait(
        `카메라 플래시의 하얀 섬광이 눈부셨지만, 피로가 쌓인 두 눈에는 아무것도 들어오지 않았다.`,
      );
      extra_flag.relation_change = 30;
      extra_flag.love_change = 3;
    } else if (
      extra_flag.race === race_enum.prix_lat &&
      edu_weeks >= 96 &&
      extra_flag.rank === 1 &&
      check_aim_race(RaceHistory.get(205).get(), race_enum.prix_lat, 1, 1)
    ) {
      await print_event_name('정상을 향해 다시 한번 승리를', vp);
      const montjeu = get_chara_talk(204);
      await era.printAndWait(`청명한 가을 하늘이 롱샹의 바로 위로 끝없이 펼쳐져 있었다.`);
      await era.printAndWait(
        `전 세계 최고봉의 ${vp.get_uma_sex_title()}들을 맞이하는 이 레이스에 걸맞은 날씨라 할 수 있을 것이다.`,
      );
      await era.printAndWait(`평소 입던 코트를 걸치고 오긴 했지만, 조금 더웠다.`);
      await era.printAndWait(`관중석 맨 앞줄에서 펜스를 쥐는 것도 이번이 두 번째다.`);
      await era.printAndWait(
        `눈 깜짝할 사이에 시간이 흘러간 것 같았지만, 다시 한 번 이곳에 서기까지 일어난 일들은 ${me.get_couple_title()}에게 모두 필요한 과정이었다.`,
      );
      await era.printAndWait(`그 일들의 무게는 전례가 없을 정도였다.`);
      await era.printAndWait(
        `그리고, 그것이 ${me.name}이(가) 이곳에 있어야 할 이유가 되어 이 순간을 지탱하고 있었다.`,
      );
      await montjeu.say_and_wait(`생각보다 빠르군.`);
      await era.printAndWait(`구무원 옆에 서 있던 인물이 ${me.name}을(를) 향해 미소를 지었다.`);
      await era.printAndWait(
        `${me.name}은(는) 마침내 ${montjeu.name}에게 그때의 대답을 보여줄 수 있겠다고 생각했다.`,
      );
      await era.printAndWait(
        `${me.get_couple_title()}은 나란히 게이트에 들어서는 ${vp.name}를 응시했다.`,
      );
      await montjeu.say_and_wait(`전술은?`);
      era.printButton(`「특별할 건 없어.」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `……미친 건가? 누구보다 잘 아는 건 너잖아. 네가 ${vp.sex}의 특성을 이해하고 방해를 끊임없이 돌파해 왔지? 그걸 바탕으로 쓸 수 있는 대책은 뭐든 다 써야 하는 거 아닌가?`,
      );
      await era.printAndWait(
        `${montjeu.name}를 모방한 ${vp.sex}의 주법은, 쉽게 바꾸기 어려웠다.`,
      );
      await era.printAndWait(
        `전 세계의 ${vp.get_uma_sex_title()}들이 서서히 ${vp.name}에 대한 적응을 마쳤다는 것은 이미 알고 있었다.`,
      );
      await era.printAndWait(`그럼에도, ${vp.sex}에게 줄 수 있는 것은 아무것도 없었다.`);
      era.printButton(`「그렇다 해도, 난 이기게 해줄 거야.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`……`);
      await era.printAndWait(
        `두 번째 개선문상. 복잡한 기복과 깊은 잔디, 2400미터의 무대.`,
      );
      await era.printAndWait(
        `굉음과 함께 달리는 ${vp.sex}들과 관중들의 열렬한 성원. 그 안에는 이제 프랑스라는 국가 자체를 짊어지게 된 ${vp.name}에 대한 기대도 적지 않게 섞여 있었다.`,
      );
      await era.printAndWait(
        `올해 들어 한 번도 이기지 못했기에, ${vp.sex}의 쇠퇴를 눈치챈 사람들도 많았다.`,
      );
      await era.printAndWait(
        `하지만, 그것을 눈치챘다 해도 염원하는 사람들을 위해 결코 멈출 수 없었다.`,
      );
      await era.printAndWait(`${vp.name}는 이 세상에서 가장 긴 2분 반의 여정에 올랐다.`);
      await era.printAndWait(
        `불로뉴 숲을 빠져나가는 ${vp.sex}들을 보며 팔짱을 꼈다. ${montjeu.name}는 허리를 꼿꼿이 세우고 주시했다.`,
      );
      await montjeu.say_and_wait(
        `……전략이 파훼된 건 알고 있겠지. 그렇다 해도, 선행 작전을 쓰지 않으면 ${vp.sex}의 승부는 성립조차 하지 않아.`,
      );
      era.printButton(`「힘으로 밀고 나간다면?」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `그건 불가능해. 안 그래도 경쟁이 치열한 데다, 이번엔 전년도 패자라는 타이틀까지 짊어지고 있어. 지금의 ${vp.name}는 아마 완전히 표적이 되었을 거다.`,
      );
      await era.printAndWait(
        `실제로, 선두 그룹에 섞여 들어가는 데에는 성공했지만, ${vp.name}가 앞으로 나아갈 수 있는 코스는 전부 가로막혀 있었다.`,
      );
      await era.printAndWait(`확실히 봉쇄당했다——최종 직선 코스에 진입하기 전까지는.`);
      await era.printAndWait(`코너를 돌아, 레이스는 중반에 접어들었다.`);
      await era.printAndWait(
        `평소라면 선두 그룹 앞에서 페이스를 굳혔겠지만, ${vp.name}는 후방으로 밀려난 형태로 그룹을 쫓고 있었다.`,
      );
      era.printButton(`「${montjeu.name}.」`, 1);
      await era.input();
      await montjeu.say_and_wait(`왜 그러지?`);
      era.printButton(`「당신은 왜 선행에 능하지?」`, 1);
      await era.input();
      await era.printAndWait(
        `시선이 향한 곳, ${vp.sex}는 그룹이 잠시 뭉친 채 이어지는 레이스를 바라보며 나지막이 말했다.`,
      );
      await montjeu.say_and_wait(
        `내 체력 안배나 각질에 맞았던 것도 있지만…… 그렇지, 가장 큰 이유는 나한테 맞는 위치에 섰기 때문이라고 생각해. 난 인내심이 많은 타입이 아니라서, 마지막 직선까지 기다려야 하는 승부와는 잘 맞지 않았거든.`,
      );
      await era.printAndWait(`${montjeu.name}는 덤덤하게 전방을 응시했다.`);
      era.printButton(`설명한다`, 1);
      await era.input();
      await me.say_and_wait(
        `레이스장에서의 심리적 압박감은 상당해. ${vp.name}는 어느 정도 정신력이 강하긴 하지만, 인내심이 많다고 보긴 어려워. 그러니까 줄곧 선행을 고수해 왔던 거지.`,
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
        `${vp.name}는 집중 견제를 받는 모양새로, 아직까지도 포위망에 갇혀 있었다.`,
      );
      await era.printAndWait(`펜스 밖으로 몸을 내밀었다.`);
      era.printButton(`「${vp.name}!!」`, 1);
      await era.input();
      await era.printAndWait(`${vp.name}가 ${me.name} 쪽을 살짝 쳐다보았다.`);
      await era.printAndWait(
        `대기실에서의 기억, ${me.name}의 작전은 이미 전달되었다.`,
      );
      await era.printAndWait(
        `하지만 ${vp.sex}가 주저하지 않도록, 정면에서 ${vp.sex}의 눈을 응시하며 전했다.`,
      );
      await era.printAndWait(
        `승패를 떠나, ${me.name}은(는) ${vp.name}라는 ${vp.get_uma_sex_title()}가 자신의 꿈을 이루길 바랐다.`,
      );
      era.printButton(`「보여줘.」`, 1);
      await era.input();
      await era.printAndWait(
        `발끝으로 지면을 박차는 ${vp.sex}, 삼색의 승부복을 입은 ${vp.sex}가 ${me.name}에게 손가락을 뻗었다.`,
      );
      await vp.say_and_wait(`——${sys_get_callname(205, 0)}를 위해서요.`);
      await era.printAndWait(
        `${vp.sex}는 ${me.name}이(가) 자신에게 맡긴 기대를 짊어지고, 어디까지라도 달려갈 것이다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) 만약 단 하나의 불안 요소가 남아있다면 그것은 ${vp.sex}가 느낄 압박감이라는 것을 알고 있었다.`,
      );
      await era.printAndWait(`그렇기 때문에 완벽한 상태로 ${vp.sex}를 내보낸 것이다.`);
      await era.printAndWait(
        `선행 전략은 ${vp.name} 자신이 원했던 것이지만, 옆에서 지켜본 ${me.name}은(는) ${vp.sex}의 각력은 어떤 전법이든 소화해낼 수 있을 만큼 막강하다는 것을 알고 있었다.`,
      );
      await era.printAndWait(
        `그렇기 때문에, ${me.name}은(는) 이것을 ${vp.sex}에게 맡겼다.`,
      );
      await era.printAndWait(
        `${vp.name}는 포위망 앞쪽의 ${vp.get_uma_sex_title()}들이 있는 곳에서, 찰나의 순간 속도를 늦추며 뒤로 물러났다. 최후의 직선이라는 마지막 승부처에서 벌어진 예상치 못한 행동에, 상대들은 당황하여 뒤를 돌아보았다.`,
      );
      await era.printAndWait(
        `하지만, ${vp.name}는 이미 그곳에 없었다. 다른 ${vp.get_uma_sex_title()}들을 피하기 위해, 코스 맨 바깥쪽으로 빠져나갔다.`,
      );
      await era.printAndWait(`그리고, 움직임이 봉쇄당해 비축해 두었던 체력을 순식간에 폭발시켰다.`);
      await era.printAndWait(
        `막판의 집중력은 예리하게 벼린 칼끝처럼 선두를 꿰뚫었다.`,
      );
      await era.printAndWait(`${vp.name}가 맨 바깥쪽에서 단숨에 치고 올라왔다.`);
      await era.printAndWait(
        `지금까지의 주법과는 완전히 다른 전술에 관중들의 웅성거림은 엄청난 환호성으로 바뀌었다.`,
      );
      await montjeu.say_and_wait(`선입……!?`);
      await era.printAndWait(`이것은 ${vp.name}의 유연성을 바탕으로 언제든 구사할 수 있는 전법이었다.`);
      await era.printAndWait(
        `하지만, 견제망을 피할 것을 고려한다면, 잠시 후퇴했다가 다시 시동을 거는 우회 방법을 택할 수밖에 없었다.`,
      );
      await era.printAndWait(`최후의 직선에서 틈을 보이는 상대의 공포심을 이용한 것이다.`);
      await era.printAndWait(`${vp.name}는 순식간에 선행 그룹을 뛰어넘었다.`);
      await era.printAndWait(
        `게다가 전혀 예측할 수 없었던, ${vp.sex}의 선행 이외의 전술이라는 기습은 도망치려던 상대에게 동요를 불러일으켰다.`,
      );
      await era.printAndWait(`완전히 봉쇄했다고 생각했던 상대가, 마지막의 마지막에 습격해 온 것이다.`);
      await era.printAndWait(
        `${vp.sex}는 ${montjeu.name}의 그림자마저 추월하며 코스 앞으로 질주했다.`,
      );
      await era.printAndWait(
        `파란 망토가 휘날렸고, ${me.name}은(는) ${vp.sex}의 뒷모습을 응시했다.`,
      );
      await era.printAndWait(`${vp.name}는 모든 예상을 뛰어넘고, 모든 과거를 던져버릴 것이다.`);
      await era.printAndWait(
        `그리고, 태어난 모든 희망을 짊어지고 사람들이 닿을 수 없는 곳을 향해 달려나간다.`,
      );
      await era.printAndWait(`아무리 많은 소망을 잊어버린다 해도, 어딘가에서는 반드시 기억하고 있을 것이다.`);
      await era.printAndWait(`이 세상을 바꿀 수 있는 빛나는 누군가를 끊임없이 갈망해 왔다는 것을.`);
      await era.printAndWait(`그리고 마침내, ${vp.sex}와 만났다.`);
      await era.printAndWait(`${vp.name}의 외침이 들려온다.`);
      await era.printAndWait(
        `${vp.sex}가 남은 힘을 다해 결승선까지 채 100미터도 남지 않은 마지막 순간, 선두의 ${vp.get_uma_sex_title()}를 추월할 때 마치 시간이 멈춘 것 같았다.`,
      );
      await era.printAndWait(
        `${me.name}은(는) ${me.get_couple_title()}의 지금까지의 모든 것이 결실을 맺었다고 느꼈다.`,
      );
      await era.printAndWait(
        `결승선을 넘는 마지막 발소리는 그 무엇보다 크게 이 무대에 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `프랑스 레이스 역사상 36년 만의 위업. 개선문상 연패를 달성한 것은 아무도 줍지 않은 ${vp.get_uma_sex_title()}와 아무도 줍지 않은 이국의 트레이너였다.`, //작중 배경은 2002년
      );
      await era.printAndWait(
        `조용히 숨을 들이쉬고 내쉬었다. 잔디의 내음이 가득해, 마음을 적시는 것 같았다.`,
      );
      await era.printAndWait(`이곳에 있지 않았다면 볼 수 없었을 것들이 확실히 있었다.`);
      await era.printAndWait(
        `이 순간을 위해, ${me.name}은(는) 이 직업을 계속해 오길 정말 잘했다고 생각했다.`,
      );
      await era.printAndWait(`우레와 같은 갈채와 축복 속에서.`);
      await montjeu.say_and_wait(`고개를 들어.`);
      await era.printAndWait(
        `${montjeu.name}의 말대로 시선을 위로 향하자, 어느새 그곳에 서 있는 ${vp.name}와 눈이 마주쳤다.`,
      );
      await era.printAndWait(
        `${vp.sex}는 거칠게 숨을 몰아쉬며 땀을 흘리고 있었다————가볍게 호흡을 가다듬은 뒤, ${me.name}을(를) 향해 오른손을 뻗었다.`,
      );
      await era.printAndWait(
        `${me.name}이(가) 순간 ${vp.sex}의 의도를 몰라 당황했음에도, ${vp.name}는 개의치 않고 펜스 밖으로 몸을 쑥 내밀었다.`,
      );
      await era.printAndWait(
        `멍하니 있는 ${me.name} 앞에서, ${vp.name}는 장난꾸러기처럼 미소 짓더니, ${me.name}의 손을 잡고 펜스 너머로 끌어당겼다.`,
      );
      await vp.say_and_wait(`자, 어서요!`);
      era.printButton(`「노인 공경 좀 해달라고.」`, 1);
      await era.input();
      await vp.say_and_wait(`다음은 3연패예요, 지체할 시간 없어요! 그리고 저와 사귀어 주세요!`);
      await era.printAndWait(
        `${me.name}은(는) 흩어진 과거를 뒤로 한 채, 눈에 깊이 새겨진 ${vp.sex}의 모습을 떠올렸다.`,
      );
      await era.printAndWait(`마지막 직선 코스, 그것은 모든 것을 떨쳐버릴 듯한 빛이었다.`);
      await era.printAndWait(
        `그리고 언젠가, ${vp.sex}는 사람들에게 그 기록마저 새롭게 칠해버릴 주행을 보여주겠지.`,
      );
      await era.printAndWait(`분명 ${me.name}을(를) 상상도 할 수 없는 곳으로 데려가 줄 것이다.`);
      await era.printAndWait(
        `${vp.sex}의 얼굴에 번진 미소를 보며, ${me.name}은(는) 이것이 분명 지금 자신의 전부일 것이라 생각했다.`,
      );
      await era.printAndWait(`가을 하늘은 어디에서나 청명했다.`);
      extra_flag.relation_change = 50;
      extra_flag.love_change = Math.max(50 - era.get('love:205'), 0);
    } else if (extra_flag.rank === 1) {
      await print_event_name('레이스 승리', vp);
      const arr = [
        '골인! 제가 이겼어요~',
        'Merci beaucoup! (감사합니다!)',
        '여러분, 축복해주셔서 감사합니다!',
        '이 모든 게 제가 이런 영광을 누릴 수 있는 이유랍니다, 여러분께 최고의 선물을 바치게 해주세요.',
      ];
      await vp.say_and_wait(get_random_entry(arr));
      extra_flag.love_change = get_random_value(1, 3);
    } else {
      return await super.race_end(vp, me, callname, hook, extra_flag);
    }
  }

  async race_start(vp, me, callname, hook, extra_flag) {
    const edu_weeks = era.get('cflag:205:육성턴수합산');
    let temp;
    if (extra_flag.race === race_enum.prix_lat && edu_weeks < 96) {
      await print_event_name('「폭군」조차 박살낼 수 있는……', vp);
      await era.printAndWait(
        `${me.name}은(는) ${vp.name}가 결정한 승부복 디자인을 받았을 때의 일을 생생히 기억하고 있다.`,
      );
      await era.printAndWait(
        `${vp.sex}가 G1 레이스에 출전하는 시기는 다른 ${vp.get_uma_sex_title()}들보다 일렀다. ${
          vp.sex
        }의 승부복을 서둘러 제작해야 했지만, 단 한 가지, ${vp.sex}가 절대 양보하지 않는 부분이 있었다.`,
      );
      era.printButton(`「정말 이걸로 괜찮아?」`, 1);
      await era.input();
      await vp.say_and_wait(`이게 좋아요!`);
      await era.printAndWait(
        `그리고 가슴을 쫙 펴는 ${vp.sex} 앞에서, ${me.name}은(는) 서류를 뚫어지게 바라보았다.`,
      );
      await era.printAndWait(
        `${vp.sex}의 디자이너가 제시한 몇 가지 안을 배제해 달라는 강력한 요구였다.`,
      );
      await era.printAndWait(`파란색, 하얀색, 빨간색의 트리콜로르.`);
      await era.printAndWait(`누구나 아는 프랑스 국기의 세 가지 색깔이다.`);
      await era.printAndWait(`그리고 그것을 승부복의 바탕색으로 삼는다.`);
      await era.printAndWait(`하지만, 그 제안에 동의한 사람은 바로……`);
      await era.printAndWait(`${vp.sex}라면, 그 어떤 것이라도 짊어질 수 있을 것이다.`);
      await era.printAndWait(
        `대기실에서 마지막 점검을 하는 ${vp.name}는, 한 치의 빈틈도 없는 승부복을 꼼꼼히 확인하며 거울 속 자신의 모습을 진지하게 바라보았다.`,
      );
      await era.printAndWait(
        `오늘의 개선문상에는 영국과 독일뿐만 아니라 일본의 ${vp.get_uma_sex_title()}들도 참가했다.`,
      );
      await era.printAndWait(
        `전 세계의 이목이 쏠리는 이 레이스에서, 국기를 연상케 하는 색상의 승부복을 입음에도 ${vp.sex}는 조금도 긴장하지 않았다.`,
      );
      await era.printAndWait(
        `의자에 앉아 ${vp.sex}의 준비 과정을 지켜보는 ${me.name}을(를) 향해, ${vp.name}가 몸을 돌렸다.`,
      );
      await era.printAndWait(
        `그날과 똑같은 코트를 입고 있는 ${me.name}(으)로서는, 당시 승부복을 입은 ${vp.name}의 모습을 상상할 수 없었다.`,
      );
      await vp.say_and_wait(`${sys_get_callname(205, 0)}.`);
      era.printButton(`「응.」`, 1);
      await era.input();
      await vp.say_and_wait(
        `여기까지 저를 이끌어주셔서 감사합니다. 저를 여러 G1 레이스에 출전시켜 주시고, 보살펴 주시고, 누구보다 진심으로 대해 주셨죠. 비록 그것이 개선문상이라는 거대한 목표 앞이라 할지라도요.`,
      );
      era.printButton(`「끝나고 나서 얘기해.」`, 1);
      await era.input();
      await era.printAndWait(
        `「그렇네요」라며 웃어 보이는 ${vp.name}에게선 어떠한 당혹감도 찾아볼 수 없었다.`,
      );
      await era.printAndWait(
        `이 개선문상의 무대 앞에 서서야, ${me.name}은(는) ${vp.sex}의 특이한 재능을 온전히 이해했다.`,
      );
      await era.printAndWait(`그것은 육체적인 능력도, 정신적인 안정감도 아니었다.`);
      await era.printAndWait(`훈련을 통해 얻을 수 있는 것들과는 다른, 이른바 천부적인 재능.`);
      await era.printAndWait(`타인의 기대를 짊어지는 것에 어떠한 압박감도 느끼지 않는 것.`);
      await era.printAndWait(
        `마치 거대한 그릇처럼, 타인의 신뢰와 희망을 무한히 힘으로 바꿀 수 있었다.`,
      );
      await era.printAndWait(
        `그 희귀한 완성도와 높이에서 우러나온 그것은, 모든 부정적인 가능성을 차단하고 ${vp.name}를 앞으로 나아가게 했다.`,
      );
      await era.printAndWait(`${me.name}은(는) 다시 한번 스스로에게 묻지 않을 수 없었다.`);
      await era.printAndWait(`어째서 자신이 ${vp.sex}의 트레이너인 걸까?`);
      await era.printAndWait(
        `문고리에 손을 얹은 ${vp.sex}가 다시 한 번 ${me.name}을(를) 돌아보며, 그 말을 내뱉었다.`,
      );
      await era.printAndWait(`바람일까, 아니면 저주일까.`);
      await era.printAndWait(`마치 모든 것이 약동하는 듯했다.`);
      await vp.say_and_wait(`제가 이길 거예요. 당신의 ${vp.name}로서.`);
      era.printButton(`침묵한다`, 1);
      era.printButton(`「넌 이길 거야.」 (호감도+15)`, 2);
      temp = await era.input();
      extra_flag.relation_change = temp === 1 ? 5 : 15;
    } else {
      await print_event_name('레이스 전', vp);
      const arr = [
        '오늘의 승리는 제가 차지하겠어요. 프랑스의 모두를 위해.',
        '영광은 이미 제 손안에 있어요.',
        '가슴 뛰는 승부를 펼쳐봐요!',
      ];
      if (era.get('love:205') >= 50) {
        arr.push(`오늘의 승리는 제가 차지하겠어요. ${me.actual_name}을(를) 위해.`);
      }
      await vp.say_and_wait(get_random_entry(arr));
      extra_flag.relation_change = 10;
    }
  }

  async week_end(vp, me, callname, hook, extra_flag, event_object) {
    return await vp_week_end(vp, me, event_object);
  }

  async week_start(vp, me, callname, hook, extra_flag, event_object) {
    return await vp_week_start.call(this, vp, me, event_object);
  }
};