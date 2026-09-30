/**
 * @file 다이이치 루비 - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');
const { sys_check_awake } = require('#/system/sys-calc-chara-param');

const CustomizedDaily = require('#/event/daily/daily-common');
const select_action_around_river = require('#/event/daily/snippets/select-action-around-river');
const select_action_in_atrium = require('#/event/daily/snippets/select-action-in-atrium');
const select_action_in_shopping_street = require('#/event/daily/snippets/select-action-in-shopping-street');
const select_action_in_station = require('#/event/daily/snippets/select-action-in-station');

const {
  get_chara_talk,
  say_by_passer_by,
} = require('#/utils/chara-talk-factory');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const RubyEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-85');
const RubyLifeMarks = require('#/data/event/life-event-marks/life-event-marks-85');

/** @type {Record<string,function(CharaTalk,CharaTalk,string):Promise>} */
const celebration_handlers = {};

require('#/event/daily/daily-events-85/ero-celebration')(celebration_handlers);

module.exports = class extends CustomizedDaily {
  async celebration(hook) {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0),
      date = (era.get('flag:현재턴수') - 1) % 48;
    if (
      ruby.sex_code !== 0 ||
      me.sex_code !== 1 ||
      era.get('love:85') < 75 ||
      !celebration_handlers[date]
    ) {
      return await super.celebration(hook);
    }
    const pregnant_cache = era.get('cflag:85:임신단계');
    await celebration_handlers[date](ruby, me);
    era.set('cflag:85:임신단계', pregnant_cache);
  }

  select() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    let temp;
    if (!sys_check_awake(85)) {
      era.print(
        `${ruby.name}는 깊은 잠에 빠져들었다. 물론 그 주범인 ${me.name}의 품 안에서 말이다.`,
      );
    } else if ((temp = new RubyLifeMarks()).after_recruit) {
      ruby.say('오늘부터, 잘 부탁드립니다.');
      ruby.say('화려하고, 지고하며, 언제나 가장 눈부신 빛을 발하기를.');
      ruby.say('일족의 조항을 가슴에 품고, 오직 앞으로 나아갈 뿐입니다.');
      ruby.say('……이상입니다.');
      temp.after_recruit = 0;
    } else {
      const buffer = [
        () =>
          era.print([
            ruby.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '에게 고개를 숙여 경의를 표했다.',
          ]),
        () =>
          era.print([
            ruby.get_colored_name(),
            '가 마치 드레스를 입은 것처럼, ',
            me.get_colored_name(),
            '에게 가볍게 치맛자락을 쥐고 인사하는 커트시를 선보였다.',
            { isBr: true },
            '무릎을 굽히는 동시에 양 무릎을 살짝 바깥쪽으로 벌리고, 한쪽 발을 뒤로 뺐다.',
            { isBr: true },
            me.get_colored_name(),
            '은(는) 어쩔 수 없다는 듯 부자연스럽게 사람들 앞에서 허리를 굽혀 답례했다.',
          ]),
      ];
      if (era.get('love:85') >= 75) {
        buffer.push(() =>
          era.print([
            ruby.get_colored_name(),
            '가 잠시 휴식을 취하는 동안, ',
            me.get_colored_name(),
            '은(는) ',
            ruby.sex,
            '와 함께 침대에 누웠다.',
            { isBr: true },
            '창밖에는 선선한 바람이 불어오고, 말소리 하나 없이 나뭇가지가 바람에 흔들리는 소리만 들린다.',
            { isBr: true },
            '스르륵 깨어난 ',
            ruby.get_colored_name(),
            '가 ',
            me.get_colored_name(),
            '의 품 안에서 기지개를 켜고는 자리에 일어났다.',
          ]),
        );
      }
      get_random_entry(buffer)();
    }
  }

  good_morning() {
    const buffer = [
      '안녕하신가요, 그럼 훈련을 시작하도록 하죠.',
      '오늘도 잘 부탁드립니다. 지난날의 일족에 걸맞은 수준에 도달할 수 있도록, 저를 철저하게 지도해 주십시오.',
      '저의 트레이너가 되신 이상, 이미 마음의 준비는 끝마치셨으리라 생각합니다. 후회 없이 당신의 능력을 발휘해 주시길 바랍니다.',
      '모두의 위광을 이어 나가기 위해서는 더 많은 노력이 필요합니다. 하지만 지금의 몸 상태라면, 그것도 불가능한 일은 아닙니다.',
      '레이스에서 성과를 내는 것은 책임입니다. 목적은 명확하니, 그렇다면 게으름 피우지 않고 전진할 뿐입니다.',
      '스포츠 의학회의 최신 발표는 당연히 이미 확인해 두었습니다. 나중에 함께 논의해 볼까요?',
      '저는 단순한 승리를 추구하지 않습니다. 선명한 광채를 남기지 못한다면, 우리 일족에게는 승리라고 할 수 없습니다…… 아시겠나요?',
    ];
    if (era.get('flag:현재명성') >= 500) {
      buffer.push(
        '당신은 이미 사람들에게 자신의 자격을 증명해 보였습니다. 두려워할 것도, 겁먹을 것도 없습니다. 그저 사명일 뿐입니다. 함께 힘을 합쳐 이 일을 완수해 내죠.',
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push('당신이 걷는 길 위에도 반짝이는 빛이 가득하기를.');
    }
    get_chara_talk(85).say(get_random_entry(buffer));
  }

  async talk() {
    if (!sys_check_awake(85)) {
      return await super.talk();
    }
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    let talk_arr;
    const love = era.get('love:85'),
      motivation = era.get('cflag:85:컨디션');
    if (era.get('base:85:체력') < 0.45 * era.get('maxbase:85:체력')) {
      talk_arr = [
        '오늘은 무척 지쳤습니다. 죄송하지만 당신의 지시를 완전히 수행할 여력이 없을 것 같군요.',
        '역시…… 조금 무리를 한 모양이네요.',
        '이야기하지 못한 것은, 잠시 후에 계속해도 될까요……',
      ];
      if (love >= 75) {
        talk_arr.push(
          '『그것』을 하면 무척 피곤해집니다. 하실 생각이 있으시다면, 제가 샤워라도 할 수 있도록 시간을 조금 비워두세요.',
          `혹시 당신은 『累』라는 글자의 뜻을 알고 계시나요? 방금 전 어떤 ${
            me.sex_code - 1 ? '여성분': '남성분'
          }이 제 몸 위에 엎어져 있던 상태를 말하는 거랍니다.`,
        );
      }
    } else if (era.get('cflag:85:육성턴수합산') < 3 * 48) {
      switch (motivation) {
        case 2:
          talk_arr = [
            '가슴에는 화려함을, 몸에는 지고함을. 이것은 미래영겁 변하지 않을 지조입니다.',
            '일족에게 더 큰 영광을 가져다주어야 합니다. 그러므로 어떤 어려움이 닥치더라도, 그것을 뛰어넘는 것 외에 다른 선택지는 존재하지 않습니다.',
          ];
          break;
        case 1:
          talk_arr = [
            '어떤 훈련 방식을 고민하고 계시는 건가요?',
            '오늘의 트레이닝 메뉴를 제시해 주십시오. 부하가 아무리 높더라도 상관없습니다!',
          ];
          break;
        case 0:
          talk_arr = [
            '준비는 이미 끝마쳤습니다. 어설픈 훈련이라면 꺼내지도 말아 주십시오.',
            '훈련에 대해 제안하고 싶은 것이 있습니다. 소지하고 계신 안내 책자를 봐 주십시오.',
            '아니요…… 배려하실 필요는 없습니다. 시간은 한정되어 있으니, 더 가치 있는 일을 해야 합니다.',
          ];
          break;
        case -1:
          talk_arr = ['큭…… 가문을 짊어져야 한다면, 절대로……', '꺾일 수 없습니다…… 절대로……'];
          break;
        case -2:
          talk_arr = [
            '오늘의 컨디션은 정말이지…… 서둘러 원인을 파악해야겠군요.',
            '……감정의 소용돌이란, 정말 성가시네요.',
            '하아…… 이 정도쯤이야, 으음……',
          ];
      }
      talk_arr.push(
        '내일 일정에 대해서입니다. 내일로 예정되어 있던 식사 모임은 취소되었으니, 추가 연습을 준비해 주시길 바랍니다.',
      );
    } else {
      talk_arr = [
        '지금은 휴식 시간입니다만, 저는 아직 가정교사 인터넷 강의를 들어야 하므로 먼저 외국어 숙제를 끝내도록 하겠습니다.',
        '『한겨울을 보내는 모든 이들이 미소를 지으며 새해를 맞이할 수 있도록 하는 것. 그것이 나의 일이다.』…… 아버님께서 자주 제게 말씀하시곤 했습니다.',
        '본가의 서피—— 그러니까 저희 집 강아지는 무척 똑똑하답니다. 배달된 신문이 누구의 것인지 알아채고는 그 사람의 손까지 직접 가져다주니까요.',
        '품격, 기능성, 디자인. 이 옷은 위의 모든 기준을 충족하는 최적의 선택입니다.',
        '당신은 일이 끝난 후에 제 복장을 완벽하게 정리해 줄 자신이 있으신가요?',
        '언제나 가슴을 펴고 모든 일을 완수해 내는 당신의 모습은, 저희 일족도 인정하는 바입니다.',
        '가끔씩 비슷한 질문을 받곤 합니다만…… 사실 저는 메이드의 도움을 받는 일이 거의 없습니다. 모든 일은 제 스스로 해결하고 있죠.',
        '『화려한 일족』, 모두가 그 이름에 걸맞은 고결한 분들이십니다. 그러니 저 역시 정점에 서야만 합니다.',
        '당신은 저의 트레이너입니다. 자신의 직무를 진지하게 이행하며, 끊임없이 연구하고 부지런히 정진해 주십시오.',
        '어머님과 할머님 모두 레이스 장에서 위대한 업적을 남기셨습니다. 그리고 제 몸에 그분들의 피가 흐르고 있다는 것을 증명하려면…… 레이스를 통하는 길밖에는 없습니다.',
        '붉은 머리 장식과 리본. 이것은 제가 『반드시 눈부신 성과를 내겠다』는 결의를 표현하는 색입니다.',
        '봄에는 꽃목걸이를 착용합니다. 시기마다 그에 맞는 장신구를 착용하는 것을 보면 그 사람의 품격을 알 수 있죠.',
        '저는 우리 일족에 걸맞은 광채를 뿜어내야만 합니다. 그것은 찬란하고 휘황찬란한—— 마치 전갈자리의 불꽃과도 같은 빛입니다.',
        '의상 역시 하나의 상징입니다. 위닝 라이브가 존재하는 한, 관객들의 시선을 사로잡을 화려함은 필수적이죠.',
        '수면 부족은 판단력에 악영향을 미칩니다. 잠이 오지 않을 때는 허브차를 마시는 등의 방법을 취해 주십시오.',
        '우리 일족은 잠들기 전 지키는 규칙이 있습니다. 그것은 오늘 하루 동안 그 이름에 부끄럽지 않게 살았는지 스스로 반성하는 것입니다. 무척 중요한 시간이죠.',
        '오늘 아침 신문은 읽어 보셨나요? 우리 일족에 대한 기사가 실려 있으니 꼭 한 번 확인해 보십시오.',
        '저는 어릴 때부터 바쁘게 일하러 나가시는 부모님을 배웅하느라 일찍 일어나 버릇해서, 지금까지도 알람 시계 없이 일어난답니다.',
      ];
      if (love >= 75) {
        talk_arr.push('당신은 제가 인정한 동반자입니다. 자랑스럽게 고개를 드십시오.');
      }
      if (love >= 90) {
        talk_arr.push(
          '오늘은 일족의 내년 동향을 결정하는 중요한 날입니다. 마중 나올 차가 도착했을 때, 부디 지각하는 일은 없도록 해주십시오.',
        );
      }
    }
    await ruby.say_and_wait(get_random_entry(talk_arr));
  }

  async office_gift() {
    const talk_arr = [
      '당신의 지원에 진심으로 감사드립니다.',
      '답례품은 당신에 대한 제 인상에 맞추어 골라도 괜찮을까요?',
    ];
    if (era.get('love:85') >= 75) {
      talk_arr.push(
        '당신이 무슨 말을 하고 싶은지 알고 있으니 부끄러워하실 필요 없습니다. 우리나라에서는 조혼이 꽤 흔한 일이니까요.',
      );
    }
    await get_chara_talk(85).say_and_wait(get_random_entry(talk_arr));
  }

  async office_cook() {
    const ruby = get_chara_talk(85);
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`큭…… 그건 무슨 표정인가요? 저라고 해서 못하는 게 전혀 없는 건 아니랍니다.`);
    } else {
      await ruby.say_and_wait([
        '비주얼이—— 상당히 훌륭하군요. 맛도 흠잡을 데가 없으니, 당신은 분명 ',
        ruby.get_child_sex_title(),
        '의 입맛을 사로잡을 수 있을 겁니다.',
      ]);
    }
  }

  async office_study() {
    const ruby = get_chara_talk(85),
      buffer = [
        () =>
          ruby.say_and_wait(
            '먼저 천천히 엉킨 곳을 풀고, 빗질할 때는 모근 쪽 머리를 꽉 잡고 해주세요. 제 머리를 빗겨주는 것이 그저 일시적인 충동은 아니겠지요?',
          ),
        () =>
          ruby
            .say_and_wait(
              '대인 관계를 잘 다루거나, 혹은 강력한 인적 네트워크를 구축하기 위해 더 중요한 것은 타인을 위해 가치를 창출하는 법을 아는 것입니다.',
            )
            .then(() =>
              ruby.say_and_wait(
                '오직 타인을 위해 가치를 창출할 때만 인간관계가 지속될 수 있습니다. 그렇지 않으면 아무리 많은 사람을 알고 지내도 의미 없는 사교일 뿐입니다. 왜냐하면 아무도 당신을 기억해주지 않을 테니까요.',
              ),
            ),
      ];
    if (ruby.sex_code - 1 && era.get('love:85') >= 90) {
      buffer.push(
        () =>
          ruby
            .say_and_wait(
              '간단히 말해서, 규칙적인 성생활을 유지하고 피임을 하지 않는다면 매우 높은 임신율에 도달할 수 있습니다.',
            )
            .then(() =>
              ruby.say_and_wait(
                '평범한 인간의 월간 임신율은 고작 20~30%에 불과하지만, 우리 우마무스메는 발정기에 들어서면 그 확률이 최소 2배 이상 증가합니다.',
              ),
            ),
        () =>
          ruby
            .say_and_wait(
              '우마무스메의 난자 생존 시간은 일반인보다 더 길기 때문에, 반드시 배란일 당일에 관계를 가질 필요는 없습니다.',
            )
            .then(() =>
              ruby.say_and_wait(
                '배란 전후 2~3일 모두 최적의 시기이므로, 당신이 일주일에 5~6회 정도 관계를 가질 수만 있다면 제 배란일 따위는 신경 쓰지 않으셔도 됩니다.',
              ),
            ),
      );
    }
    await get_random_entry(buffer)();
  }

  async office_rest() {
    const ruby = get_chara_talk(85);
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`그대로 움직이지 말고, 어깨 좀 빌려주세요. 잠시만, 잠시만요……`);
    } else {
      await ruby.say_and_wait(
        `무겁지 않나요? 제 머리숱이 꽤 많을 텐데…… 읏! 살, 살살요. 네, 좀 더 다정하게 쓰다듬어 주세요……`,
      );
    }
  }

  async office_game() {
    const ruby = get_chara_talk(85);
    if (Math.random() < 0.5) {
      await ruby.say_and_wait(`흥미롭군요. 다른 것도 시도해보고 싶습니다.`);
    } else {
      await ruby.say_and_wait([
        '과연 그렇군요, ',
        sys_get_colored_callname(85, 67),
        '가 밤낮으로 빠져드는 이유를 조금은 알 것 같습니다.',
      ]);
    }
  }

  async school_atrium(hook) {
    const ruby = get_chara_talk(85);
    hook.arg = !(await select_action_in_atrium(85));
    if (hook.arg) {
      if (Math.random() < 0.5) {
        await ruby.say_and_wait([
          '그 대신 저를 동반해 주시겠어요? 이 유약한 ',
          ruby.get_child_sex_title(),
          '의 푸념을 들어주시겠습니까?',
        ]);
      } else {
        await ruby.say_and_wait(`선조 분들께서도 세 여신님 곁에서 우리를 함께 지켜보고 계시겠죠.`);
      }
    } else if (Math.random() < 0.5) {
      await ruby.say_and_wait([
        '공공장소에서 아무렇지도 않게 연하의 ',
        ruby.get_child_sex_title(),
        '와 손을 잡다니, 대단하시군요.',
      ]);
    } else {
      await ruby.say_and_wait(`그렇게 꽉 잡지 않아도, 마음대로 도망치지 않아요.`);
    }
  }

  async school_rooftop() {
    const ruby = get_chara_talk(85);
    const buffer = [
      () =>
        era.printAndWait([
          get_chara_talk(0).get_colored_name(),
          '과(와) ',
          ruby.get_colored_name(),
          '는 함께 집사가 가져온 호화로운 도시락을 나누어 먹었다.',
        ]),
    ];
    if (era.get('love:85') >= 50) {
      buffer.push(
        () =>
          ruby.say_and_wait(
            '『평생 베어본 베개 중 최고의 베개』라고요?…… 말은 청산유수시군요. 눈은, 아직 뜨지 마세요.',
          ),
        () => ruby.say_and_wait('충분히 즐기셨을 테니, 오후 훈련 때는 더 이상 치근덕거리는 걸 금지합니다.'),
      );
    }
    if (era.get('love:85') >= 75) {
      buffer.push(() =>
        ruby.say_and_wait(
          '하아…… 됐습니다, 제가 직접 벗죠. 당신은 이럴 때 꼭 손이 서툴러지시더군요. 만에 하나 옷이라도 찢어지면 큰일이니까요.',
        ),
      );
    }
    await get_random_entry(buffer)();
  }

  async out_river(hook) {
    const buffer = [],
      ruby = get_chara_talk(85);
    hook.arg = (await select_action_around_river(85)) > 0;
    if (hook.arg) {
      buffer.push(() =>
        ruby.say_and_wait('아무리 갈 길이 멀다 한들, 이 강물은 저 파란만장하고 넓은 바다로 흘러가겠죠.'),
      );
      if (era.get('love:85') >= 50) {
        buffer.push(() =>
          ruby.say_and_wait(
            `메지로 가문의 강변 근처에 새로 지은 낡은 아파트 말입니다만, 저희 일족도 건설에 참여했습니다. 시간 나면 같이 보러 가보죠.`,
          ),
        );
      }
      if (era.get('love:85') >= 75) {
        buffer.push(() =>
          ruby.say_and_wait(
            '어린 나이에 저렇게 노출이 심한 옷을 과감하게 입다니, 대체 무슨 생각을 하는지 모르겠군요. 제가 입은 걸 보고 싶다고요? 거절합니다…… 적어도 지금은 안 돼요.',
          ),
        );
      }
    } else {
      buffer.push(
        () => ruby.say_and_wait(`사실, 다이이치 가문에도 전문적인 낚시 팀이 있답니다.`),
        () =>
          ruby.say_and_wait(
            `당신은 레이론스라는 이름을 들어보신 적이 있나요? 이곳의 물고기들이 과연 언제까지 존재할 수 있을지 모르겠군요.`,
          ),
        () => ruby.say_and_wait(`무게가 별로 안 나가니까 저보고 따로 단독 인증샷을 찍으라고요? 당신이란 사람은 정말……`),
      );
    }
    await get_random_entry(buffer)();
  }

  async out_shopping(hook) {
    const ruby = get_chara_talk(85),
      temp = await select_action_in_shopping_street(),
      edu_marks = new RubyEduMarks();
    hook.arg = temp <= 1;
    switch (temp) {
      case 0:
        if (Math.random() < 0.5) {
          await ruby.say_and_wait(
            `이건 저도 알고 있습니다. 사토노 그룹에서 새로 출시한 JRPG군요. 그 기원인 《진 · 삼여신전생》의 명성은 저조차도 익히 들은 바 있습니다.`,
          );
        } else {
          await ruby.say_and_wait(
            `게임 배경에 대한 고증이 무척 상세하군요. 제작자가 스토리의 설정을 충실하게 재현해 낸 점은 칭찬할 만합니다.`,
          );
        }
        break;
      case 1:
        switch (
          get_random_value(
            0,
            1 +
              !edu_marks.hot_spring * (era.get('cflag:85:육성턴수합산') >= 96),
          )
        ) {
          case 0:
            await ruby.say_and_wait(
              '네? 흠, 알겠습니다. 이미 돈을 지불했으니 유흥이라 생각하고 한 번 해보죠.',
            );
            break;
          case 1:
            await ruby.say_and_wait(
              '어머님께 본인과 깊은 우정을 나눈 오랜 친구가 한 분 계셨다고 들었습니다. 연인을 사흘 밤낮 동안 지도하여 그의 삐뚤어진 금전 감각을 완전히 뜯어고쳐 놓았다고 하더군요.',
            );
            break;
          case 2:
            await ruby.say_and_wait('온천 여행권을 뽑았습니다!');
            new RubyEduMarks().hot_spring = era.get('cflag:85:육성턴수합산');
        }
        break;
      case 2:
        if (era.get('love:85') < 75 || Math.random() < 0.5) {
          await ruby.say_and_wait([
            '음…… ',
            sys_get_colored_callname(85, 93),
            '가 예전에 제게 말했던 곳이 바로 여기가 맞군요. 방음 자재가…… 일품이네요.',
          ]);
        } else {
          await ruby.say_and_wait(
            `유흥업소의 가수보다 한 수 위라고요? 조금 후에 당신의 방에 방문하는 것을 허락해 주십시오.`,
          );
        }
        break;
      case 3:
        if (era.get('love:85') < 75 || Math.random() < 0.5) {
          await ruby.say_and_wait([
            sys_get_callname(85, 0),
            '. 대…… 대단히 죄송합니다, 이…… 공포 영화는 제가 너무 긴장했는지 조금……',
          ]);
          await era.printAndWait(`영화를 다 보고 나니, 의자 위에 작은 물웅덩이가 생겨 있었다.`);
        } else {
          await ruby.say_and_wait([
            '스토리가 흥미진진하고 가슴을 졸이게 만드는 명작이라고 들었습니다, ',
            sys_get_callname(85, 0),
            '. 하지만 당신의 전과를 고려했을 때, 제가 어떤 종류의 스타킹을 신기를 원하시나요?',
          ]);
        }
    }
  }

  async out_church() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 최근 컨디션이 좋지 않은 ',
      ruby.get_colored_name(),
      ', 그리고 집사를 데리고, 세 명이 함께 신사에 도착했다.',
    ]);
    await ruby.say_and_wait(
      `토리이는 신이 거처하는 영역과 우리가 살아가는 일상 세계를 구분 짓는 결계입니다.`,
    );
    await ruby.say_and_wait(`지나갈 때는 반드시 가볍게 예를 갖추어 절을 해야 합니다.`);
    await ruby.say_and_wait(`……무슨 일이시죠?`);
    era.printButton(`「예의범절이 아주 완벽하다고 생각해서 말이야.」`, 1);
    await era.input();
    await ruby.say_and_wait(
      `우리 일족은 참배할 기회가 많기 때문에, 어릴 때부터 자연스럽게 배웠습니다.`,
    );
    await ruby.say_and_wait(`물론 기도는…… 무언가에 의지하기 위함이 아닙니다. 길을 개척할 수 있는 것은 오직 자신뿐이니까요.`);
    await ruby.say_and_wait(
      `신사란 자신의 뜻과 정면으로 마주하는 공간입니다. 그렇기 때문에 올바른 예법을 갖추어야만 하죠.`,
    );
    await ruby.say_and_wait(`그럼, 참배하러 가겠습니다.`);
    era.drawLine();
    await ruby.say_and_wait([
      sys_get_callname(85, 0),
      '도 끝났나요? 그렇다면……',
    ]);
    await say_by_passer_by(`신주`, [
      '아니, 당신은 루비 님이 아니십니까. 참배해 주셔서 감사드립니다.',
    ]);
    await ruby.say_and_wait(`신주 어르신. 마침 업무적인 인사를 드리려던 참이었습니다.`);
    era.drawLine();
    await ruby.say_and_wait(
      `신주 분께 드리는 인사와 참배를 마치는 예절까지, 이것으로 모두 끝났습니다. 이제 돌아가죠.`,
    );
  }

  async out_station(hook) {
    const ruby = get_chara_talk(85),
      buffer = [];
    hook.arg = await select_action_in_station(85);
    switch (hook.arg) {
      case 0:
        buffer.push(
          () =>
            ruby.say_and_wait(
              `점심은 저 혼자 먹었습니다. 특별한 일이 없다면 굳이 다른 사람과 함께 식사할 필요는 없으니까요.`,
            ),
          () => ruby.say_and_wait(`당신이 식사하는 모습은 무척 보기 좋습니다. 어라, 여기 밥풀이 묻었네요.`),
          () =>
            ruby.say_and_wait(
              `밥을 먹으면서 곁눈질로 훔쳐보는 것은 품위 없는 행동입니다. 혹시 마음에 드는 의상 스타일이 있다면 나중에 제가 입어봐 드릴 수도 있습니다만.`,
            ),
        );
        break;
      case 1:
        buffer.push(
          () => ruby.say_and_wait(`정말 아름다운 장소군요, 마음에 듭니다.`),
          () => ruby.say_and_wait(`가끔은 당신과 만난 인연에 감사하게 되곤 하네요.`),
          () => ruby.say_and_wait(`이것도 당신의 업무 중 하나인가요?`),
        );
        if (era.get('love:85') >= 50) {
          buffer.push(() =>
            ruby.say_and_wait(
              `강도나 강간 같은 강력 범죄는 대개 이런 지하철가에서 발생하곤 합니다. 아무리 본격화가 온 ${ruby.get_uma_sex_title()}라 할지라도 방심하면 끔찍한 일을 당할 수 있죠.`,
            ),
          );
        }
        if (era.get('love:85') >= 75) {
          buffer.push(() =>
            ruby.say_and_wait([
              sys_get_callname(85, 0),
              ', 저를 보는 것보다 기차가 오는지 안 오는지 확인하는 게 더 중요하지 않나요?…… 잠시만요! 함부로 움직이면 남들에게 보인단 말이에요……',
            ]),
          );
        }
        break;
      case 2:
        buffer.push(() =>
          ruby.say_and_wait(
            '이건 쇼핑몰 초청장과 행사장 패스 카드입니다. 행사장이 꽤 넓은데, 제 손을 잡고 이동하는 걸 고려해보지 않으시겠어요?',
          ),
        );
        if (era.get('love:85') >= 50) {
          buffer.push(() =>
            ruby.say_and_wait(
              '어머님과 아버님은 결혼하신 지 석 달 만에 아이를 가지셨습니다. 결코 임산부나 영유아 용품에 관심이 있어서 하는 말은 아닙니다.',
            ),
          );
        }
    }
    return await get_random_entry(buffer)();
  }

  async basement_end() {
    const ruby = get_chara_talk(85),
      me = get_chara_talk(0);
    if (
      !era.get('talent:85:신의발') ||
      era.get('abl:85:다리기술') !== 5 ||
      ruby.sex_code === 1 ||
      me.sex_code === 0
    ) {
      return await super.basement_end();
    }
    await me.say_and_wait('루비 마마…… 루비 마마……');
    era.println();
    era.print([
      me.get_colored_name(),
      '에게 있어서, 이런 삶도 나쁘지 않을지도?',
    ]);
    era.print(
      '다만 숨은 여전히 가쁘게 막혀오고, 얼굴에는 루비가 어제 갈아입은 하얀 실크 스타킹이 씌워져 있어, 그나마 흐릿하게 들어오던 시야를 더욱 완벽하게 유혹 속으로 가두어버린다.',
    );
    era.print('비록 눈꺼풀 너머의 일이지만, 꿈결마저 이 얇은 실크의 장막을 뒤집어썼다.');
    era.print(
      `루비의 몸에 닿았던 스타킹, 그 황홀한 향기와 따스한 체온이 자아내는 몽환적인 미감은 ${me.name}의 마음을 애달프고 간지럽게 흔들어 놓는다.`,
    );
    era.print(
      `마치 루비가 진즉에 ${me.name}을(를) 굴복시켰던 그 아름다운 발바닥처럼, ${me.name}의 눈앞에 머무르며 때때로 콧등을 부드럽게 툭툭 건드리고 부벼대다가도, 이내 슥 들어 올려지기를 반복한다.`,
    );
    await era.printAndWait(
      `${me.name}은(는) 고개를 들어 그 체온이 남아있는 발바닥에 입을 맞추려 애쓴다. 공허함 속에서 연신 떨어지는 가벼운 입맞춤은, ${me.name}의 체내에 잠재된 피학적인 열망을 끊임없이 부추긴다……`,
    );
    era.println();

    await era.printAndWait('또각, 또각, 또각……');
    era.println();

    era.print(
      `애간장을 태우는 규칙적인 발소리가 울려 퍼지고, ${me.name}은(는) 마치 끝없는 허무 속에서 그토록 꿈에 그리던 여인의 실루엣이 걸어 나오는 것을 본 듯한 착각에 빠진다.`,
    );
    era.print(
      `그 매혹적인 곡선과 요염한 자태, 그리고 몽롱하게 풀린 눈동자는 ${me.name}의 심장을 더욱 격렬하게 뛰게 만든다.`,
    );
    await era.printAndWait(
      `이것이 현실인지 꿈인지 도무지 분간할 수 없는 채로, ${me.name}은(는) 자신의 처지조차 잊어버린 채 마치 침대 위가 아닌 다른 곳에 도달한 듯한 감각을 느낀다.`,
    );
    era.println();

    await ruby.say_and_wait(
      '비천한 개새끼 같으니, 그렇게나 엄마의 냄새가 좋은가요? 아주 바닥까지 싹 비워내 사정해놓고도, 엄마가 계속 괴롭혀주길 바라는 건가요?',
    );
    era.println();

    era.print(
      `${me.name}은(는) 혓바닥과 구강 내부가 이미 마비되어 버린 듯한 감각을 느끼며, 뇌 속이 텅 비어 언어 능력조차 상실한 채 쾌감에 절어버린다.`,
    );
    era.print(
      `루비 엄마의 목소리를 들으며 ${me.name}은(는) 자신도 모르게 멍청한 미소를 지었고, 후장의 에그 바이브 역시 전류를 다하여 작동을 멈추었다. 모든 것이 거짓말처럼 아득하고 고요하게 가라앉는다.`,
    );
    era.print(
      `그러나 ${me.name}의 루비 엄마는 이때 살짝 미소를 지으며 자리에서 일어났다. 그 모습은 무척이나 위엄 있고, 압도적인 매력으로 가득 차 있다.`,
    );
    era.print(
      `고운 발을 가슴팍의 유두 위에 얹은 채, 이미 정액으로 뒤범벅이 된 하얀 스타킹을 자신의 발에 꿰어 신는다. 허리를 굽혀 ${me.name}의 가슴팍 위에서 스타킹을 고쳐 신는 것이다.`,
    );
    era.print(
      `까슬까슬한 자극과 동시에 묘하게 매끄러운 감촉이 전해지자, ${me.name}은(는) 기분 좋은 듯 신음했다. ${me.name}은(는) 마치 삶의 의미를 찾은 것만 같았다. 루비 엄마의 발판이 되어, 육변기가 되어, 얌전하고 고분고분한 개새끼가 되어 자신의 정액을 바치는 것도 꽤 나쁘지 않겠다는 생각이 든다.`,
    );
    era.print(
      `${me.name}은(는) 자신이 과거에 지었던 죄악과 범했던 과오들이 비로소 씻겨 내려가 구원받는 듯한 기분에 젖어들며, 이 가학적인 과정을 온몸으로 만끽한다.`,
    );
    await era.printAndWait(
      `마치 신발 깔창처럼 짓밟히는 와중, 루비 엄마가 ${me.name}이(가) 가장 좋아하는 검은색 가죽 구두를 신는 모습이 눈에 들어온다. 그 딱딱한 밑창의 문양이 유두를 가차 없이 짓이기자, 마치 감전된 듯 짜릿한 쾌감이 번지며 ${me.name}은(는) 흡사 구름 위나 황천길 위에서 양분을 흡수하며 누워있는 듯한 황홀경에 빠진다.`,
    );
    era.println();

    await ruby.say_and_wait(
      '그러면, 내 비천한 개새끼 아들래미. 넌 그냥 바닥에 얌전히 자빠져 있으렴. 엄마가 가서 네게 채울 정조대를 찾아올 테니까. 넌 앞으로 평생 엄마 곁에서 개새끼로 살면서, 오직 명령이 내려질 때만 수치스럽게 사정하는 거예요.',
    );
    era.println();

    era.print(
      `이것이 바로 이심전심이라는 것일까. ${me.name}의 루비, 아니, ${me.name}의 루비 엄마 역시 이미 자신이 마음속에서 차지하는 비중이 얼마나 거대한지 눈치챈 모양이다.`,
    );
    era.print(
      `${me.name}역시 기꺼운 마음으로, 온전히 승복하며 루비 엄마의 충직한 개새끼가 되기를 간절히 바랬다!`,
    );
    era.print(
      `멀어져 가는 발소리를 들으며 ${me.name}은(는) 가슴을 짓누르던 커다란 돌덩이가 비로소 내려앉는 듯한 해방감을 느낀다. 성기는 완전히 축 늘어져 손으로 아무리 만져보아도 미동조차 하지 않는다.`,
    );
    era.print(
      `${me.name}은(는) 극심한 피로감을 느끼며 스르륵 다시 잠 속으로 빠져들었다. 이렇게 하면 꿈속에서나마 루비 엄마의 발자취를 쫓아 그녀를 조우할 수 있을 것만 같고, 그녀의 발끝 아래에 완벽히 침잠하여 영원히 그 고운 발의 향기를 맡을 수 있을 것만 같다.`,
    );
    era.print(
      `성기는 또다시 서서히 고개를 치켜들기 시작하지만, ${me.name}은(는) 자신이 어떤 처지에 놓여 있는지, 자신이 어디에 있는지도 모른 채……`,
    );
    await era.printAndWait(
      `오직 꿈결에서, 요염한 두 발을 뻗은 채 발바닥을 까딱거리며 ${me.name}의 앞에서 온화하게 미소 짓고 있는 루비 엄마의 모습을 바라볼 뿐이다……`,
    );
  }

  async load_talk() {
    const ruby = get_chara_talk(85);
    await ruby.say_and_wait('……이것이, 당신의 의지이신가요?');
    await ruby.say_and_wait('……');
    await ruby.say_and_wait('……알겠습니다');
    await ruby.say_and_wait([ruby.get_colored_name(), '는, 다른, 트레이너를——']);
    await ruby.print_and_wait(
      `${ruby.sex}는 말을 끝까지 맺지 못한 채 달려 나가 버렸고, 그 자리에는 몇 방울의 눈물 자국만이 남아 있었다……`,
    );
  }
};