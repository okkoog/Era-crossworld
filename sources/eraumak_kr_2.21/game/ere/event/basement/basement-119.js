/**
 * @file 드림 저니 - 지하실
 * @author 幽白書
 */
const era = require('#/era-electron');

const {
  sys_get_callname,
  sys_get_colored_callname,
} = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const LifeEventMarks = require('#/data/event/life-event-marks/marks-class');

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const callname = sys_get_callname(119, 0),
      dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait('제가 어찌 당신이 떠나는 걸 막겠어요?');
    era.println();
    await era.printAndWait(['다행이다, ', dj.sex, '가 동의했다.']);
    await era.printAndWait([
      '기쁨에 겨운 ',
      me.get_colored_name(),
      '은(는) ',
      dj.sex,
      '가 마음을 바꿀까 두려워 서둘러 출구로 향했다.',
    ]);
    await era.printAndWait('그러나……');
    era.println();
    await dj.say_and_wait(['아, ', callname, ', 잠시만요.']);
    era.println();
    await era.printAndWait('떠나고 싶다.');
    await era.printAndWait('빨리 바깥의 햇살을 보고 싶다.');
    await era.printAndWait('그 모든 바람은……… 갑자기 굳어버린 두 다리 탓에 허상으로 흩어졌다.');
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      '가 다가와 ',
      me.get_colored_name(),
      '의 옷깃을 고쳐 매고, 구겨진 옷자락 하나하나를 반듯하게 펴주며, 며칠 동안 실내에 갇혀 지내며 묻은 먼지를 ',
      me.get_colored_name(),
      '에게서 털어주었다.',
    ]);
    era.println();
    await dj.say_and_wait([
      '밖에는 날파리가 많으니 나가실 때 꼭 조심하세요…… 부디 조심해서, 다시는 날파리들에게 얽히지 않도록요.',
    ]);
    era.println();
    await era.printAndWait('「다시」 얽히게 된다면 무엇이 기다리고 있을까?');
    await era.printAndWait([
      dj.sex,
      '의 희미하게 웃는 입가와 전혀 웃음기가 없는 눈빛을 보니, 답은 자명했다.',
    ]);
    era.println();
    await dj.say_and_wait(['다 정리됐어요, ', callname, '…… 계속 가시죠.']);
    era.println();
    await era.printAndWait('허락의 말이 떨어지자마자, 몸이 다시 움직이기 시작했다.');
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 다시 출구를 향해 발걸음을 옮겼다…… 하지만 이번에는 전혀 서두르지 않았다.',
    ]);
    await era.printAndWait([
      '비록 지하실을 벗어난다 해도, ',
      me.get_colored_name(),
      '의 마음은 결코 ',
      dj.get_colored_name(),
      '의 손아귀에서 벗어날 수 없을 것이다.',
    ]);
    await era.printAndWait([
      '마치 그러한 각인이, ',
      me.get_colored_name(),
      '의 마음에 깊이 새겨진 듯했다.',
    ]);
  }

  async ask_release_reject() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait('제가 어찌 당신이 떠나는 걸 막겠어요?');
    era.println();
    await era.printAndWait([
      '다행이다, ',
      me.get_colored_name(),
      '은(는) 기쁨에 겨워 출구로 달려갔다.',
    ]);
    await era.printAndWait(
      '그러나, 문에 가까워질수록 평소 자신의 곁을 맴돌던 향기가 옅어지고, 몸은 더욱 괴로워졌다.',
    );
    era.println();
    await dj.say_and_wait('어머, 어떻게 돌아오셨나요? 보아하니…… 역시 제 곁이 더 편안하신 모양이네요?');
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 이미 ',
      dj.get_colored_name(),
      '에게서 벗어날 수 없었다——— 마치 그 사실을 증명하기 위해 ',
      me.get_colored_name(),
      '을(를) 놓아주기라도 한 것처럼.',
    ]);
    await era.printAndWait('지하실의 지배자는 여유로운 미소를 지었다.');
  }

  async ask_time() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait([
      '지금의 ',
      sys_get_callname(119, 0),
      ', 몸에서 나는 냄새가 아주 마음에 들어요.',
    ]);
    await era.printAndWait([
      '동문서답을 한 ',
      dj.get_colored_name(),
      '은(는) ',
      me.get_colored_name(),
      '의 손목 냄새를 맡았다. 그곳에선 가장 짙은 향기가 피어오르고 있었다.',
    ]);
    await era.printAndWait(['——오직 ', dj.get_colored_name(), '만의 향기가.']);
  }

  back_basement() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0),
      life_marks = LifeEventMarks.get_marks(this.id);
    dj.say([callname, ', 저 왔어요.']);
    if (life_marks.b_start) {
      dj.say(['……아, ', callname, ' 일어났나요?']);
      dj.say('아무튼, 다녀왔어요. 응…… 츄읍…… 츕……');
      era.add('exp:0:키스횟수', 1);
      era.add('exp:119:키스횟수', 1);
      dj.say('뭘 하냐고요? 그저 귀가할 때의 의식일 뿐인걸요.');
      dj.say('지하실로 귀가요? 아니요, 귀가하는 집은 당연히 당신을 뜻한답니다…… 제가 가장 사랑하는, 육체와 영혼의 귀속처❤️');
    }
  }

  async battle_escape() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait('풀렸다.');
    await era.printAndWait([
      '마지막 자물쇠…… 낯익은 열쇠 구멍 모양을 보며, ',
      me.get_colored_name(),
      '은(는) 기절해 쓰러진 ',
      dj.get_colored_name(),
      '의 곁으로 돌아왔다.',
    ]);
    await era.printAndWait([
      '그 낯익은 모양은, 바로 ',
      dj.get_colored_name(),
      '의 귀 장식인 것 같다.',
    ]);
    era.println();
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      dj.get_colored_name(),
      '가 깨지 않도록 부드럽게 장식을 빼내어, 마지막 장치를 열었다.',
    ]);
    era.println();
    await era.printAndWait([
      '장치가 열림과 동시에, 돌돌 말린 편지지가 ',
      me.get_colored_name(),
      '의 손에 떨어졌다.',
    ]);
    await era.printAndWait([
      '편지지에는 ',
      me.get_colored_name(),
      '에 대한 사랑과 사과의 마음이 적혀 있었다.',
    ]);
    era.println();
    await era.printAndWait('……이것은 진심에서 우러나온 고백일까?');
    await era.printAndWait('아니면, 또 다른 계산인 걸까?');
    await era.printAndWait([
      '여전히 바닥에 쓰러져 있는 ',
      dj.get_colored_name(),
      '를 보며, ',
      me.get_colored_name(),
      '은(는) 잠시 망설였다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) 다시 ',
      dj.get_colored_name(),
      '의 곁으로 돌아가, 축 늘어진 몸을 업었다.',
    ]);
    await era.printAndWait([
      '적어도, 이 지하실은 결코 ',
      dj.sex,
      '가 머물 만한 곳이 아니니까……',
    ]);
  }

  async battle_prison() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    await era.printAndWait('앞의 장치들은 모두 풀었다.');
    await era.printAndWait([
      '마지막 자물쇠…… 낯익은 열쇠 구멍 모양을 보며, ',
      me.get_colored_name(),
      '은(는) 어디서 이런 걸 봤는지 도무지 떠올릴 수 없었다.',
    ]);
    era.println();
    await era.printAndWait([
      '시간은 천천히 흐르고, ',
      me.get_colored_name(),
      '은(는) 무력하게 자물쇠를 힘껏 당겨보았지만, 아무 소용이 없었다……',
    ]);
    era.println();
    await dj.say_and_wait(['열리지 않나요, ', callname, '?']);
    era.println();
    await era.printAndWait('마침내, 등 뒤에서 목소리가 울려 퍼졌다.');
    await era.printAndWait('헛된 발버둥은 이미 끝났다.');
    era.println();
    await dj.say_and_wait('……역시, 아직 당신의 신뢰를 얻지 못한 거군요. 슬프네요……');
    era.println();
    await era.printAndWait('분명 슬프다고 말하고 있지만, 전혀 낙담한 기색은 보이지 않았다.');
    era.println();
    await dj.say_and_wait([
      '하지만…… 제가 알기로 신뢰란 키워나갈 수 있는 법이니까요. 저는 믿어요. ',
      callname,
      '께서 저에 대해 더 많이 알아가실수록, 절 더욱 믿게 되실 거라고요?',
    ]);
    await dj.say_and_wait('그러니 부디, 제 몸을, 저의 모든 것을 더 깊이 알아가 주세요……');
    era.println();
    await era.printAndWait([
      '저항할 틈조차 없이, ',
      me.get_colored_name(),
      '은(는) ',
      dj.get_colored_name(),
      '에게 짓눌려 바닥에 쓰러졌다……',
    ]);
    await era.printAndWait([
      '오직 ',
      dj.get_colored_name(),
      '의 귀 장식만이 지하실의 어스름한 불빛 아래서 은빛으로 반짝이고 있었다……',
    ]);
  }

  async battle_success() {}

  find_escape(out_of_prison, s_level_up, is_back) {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    if (!out_of_prison) {
      if (is_back) {
        dj.say('어머……');
        dj.say([callname, '……이 자물쇠를 열려고 시도하셨나요?']);
        dj.say('안 열리던가요? ……후후, 그거 참 반가운 소식이네요.');
        dj.say(
          '당신처럼 정직한 사람은 결코 열 수 없는 자물쇠랍니다…… 이건, 저처럼 마음이 뒤틀린 사람을 위해 준비된 자물쇠니까요……',
        );
        dj.say('그러니 당신이 이 자물쇠를 열 수 없다는 사실에, 저는 진심으로 안도하고 기뻐하고 있답니다.');
      } else {
        dj.say('풀 수 없나요?');
        era.println();
        era.print([
          dj.get_colored_name(),
          '의 목소리를 듣자, ',
          me.get_colored_name(),
          '은(는) 무의식중에 항복하듯 두 손을 들었다.',
        ]);
        era.print([
          dj.get_colored_name(),
          '는 여유롭게 ',
          me.get_colored_name(),
          '의 곁으로 다가와, 철사 한 가닥만을 열쇠 구멍에 넣고 두어번 움직였다. ',
          me.get_colored_name(),
          '은(는) 도대체 무얼 했는지조차 제대로 보지 못했다.',
        ]);
        era.print([
          me.get_colored_name(),
          '을(를) 꽤 오래 괴롭혔던 자물쇠가 눈앞에서 너무도 쉽게 풀려버렸다.',
        ]);
        era.print('그리고, 자물쇠는 다시 채워졌다.');
        era.println();
        dj.say(['후후…… 여흥 삼아 보여드린 쇼, 만족하시나요? ', callname, '?']);
        dj.say(
          '낙심할 필요는 없어요…… 적재적소라는 게 있으니까요. 아버지가 금세공장이셨던 터라 이런 장치에 제가 약간의 지식이 있을 뿐이랍니다.',
        );
        dj.say([callname, '도 자신이 더 잘하는 일이 있지 않나요? 예를 들면…… 잠자리에서의 일이라든가❤️']);
      }
      era.println();
      era.print([
        me.get_colored_name(),
        '은(는) ',
        dj.get_colored_name(),
        '에게 이끌려 침대로 되돌아갔다……',
      ]);
    } else {
      super.find_escape(out_of_prison, s_level_up, is_back);
    }
  }

  async flatter() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      m_call_d = sys_get_colored_callname(0, this.id),
      d_call_m = sys_get_colored_callname(this.id, 0);
    if (Math.random() < 0.5) {
      await me.say_and_wait([
        '미안해, ',
        m_call_d,
        '. 분명 내가 뭔가를 잘못해서 네 기분을 상하게 한 거겠지. 고칠게……',
      ]);
      era.println();
      await era.printAndWait('어찌 됐든, 우선 사과부터 하자.');
      await era.printAndWait([
        dj.get_colored_name(),
        '은(는) 그 말을 듣고 ',
        me.get_colored_name(),
        '에게 다가왔다.',
      ]);
      await era.printAndWait([
        '그러고는……… 손가락으로 ',
        me.get_colored_name(),
        '의 입을 막았다.',
      ]);
      era.println();
      await dj.say_and_wait('쉿……');
      await dj.say_and_wait('제가 가장 좋아하는 그 입술로, 그런 거짓말을 뱉지 말아 주세요……');
      await dj.say_and_wait('사실, 자신이 뭘 잘못했는지 전혀 모르시잖아요?');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 머뭇거리다가, 결국 고개를 끄덕였다.',
      ]);
      await era.printAndWait([
        dj.get_colored_name(),
        '는 꾸짖는 듯한 표정을 지으며 몸을 숙여 왔다.',
      ]);
      era.println();
      await dj.say_and_wait(
        '당신의 입술과 혀는 거짓을 위해 존재하는 게 아니랍니다…… 그래도 괜찮아요, 그 존재의 의미가 무엇인지 제가 직접 가르쳐 드릴 테니까요…… 츄읍…… 응…… 츕……',
      );
    } else {
      await me.say_and_wait([
        '미안해, ',
        m_call_d,
        '. 가만히 생각해 봤는데, 역시 잘 모르겠어…… 내가 언제 실수로 네 기분을 상하게 한 건가? 그래서 날 여기에 가둔 거야……?',
      ]);
      era.println();
      await era.printAndWait([
        '다짜고짜 사과해서 ',
        dj.get_colored_name(),
        '의 용서를 구하는 편이 쉽긴 하겠지만……',
      ]);
      await era.printAndWait([
        '이렇게 ',
        dj.get_colored_name(),
        '를 속이는 건 역시 좋지 않겠지……',
      ]);
      await era.printAndWait('적어도, 뭘 잘못했는지 안 뒤에 사과해야 한다.');
      era.println();
      await dj.say_and_wait('……');
      await dj.say_and_wait([d_call_m, '…… 당신의 솔직함은, 여전히 저를 기쁘게 하네요……']);
      await dj.say_and_wait(
        '하지만…… 아니요, 당신은 아무것도 잘못하지 않았어요. 그저, 당신의 사랑을 독점할 수 없는 제 마음이 초조했을 뿐이랍니다……',
      );
      era.println();
      await me.say_and_wait('하지만……');
      era.println();
      await era.printAndWait([
        me.get_colored_name(),
        '이(가) 무언가 더 말하려 했으나, 입술이 막혀버렸다.',
      ]);
      era.println();
      await dj.say_and_wait([
        '……응, 생각을 바꿨어요…… ',
        d_call_m,
        ', 당신이 확실히 잘못했네요…… 당신의 입술이 너무 시끄럽잖아요…… 부디 그 입술의 유일한 용도를 제대로 발휘해 주세요…… 저를 향한 사랑을 속삭이는 데 말이에요❤️',
      ]);
    }
  }

  get_up() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0),
      life_marks = LifeEventMarks.get_marks(this.id);
    era.print([dj.get_colored_name(), '(이)가 깨어났다……']);
    if (life_marks.b_start) {
      era.println();
      dj.say(['응…… ', callname, ', 잘 잤나요?']);
      dj.say(
        '왜 여기에 있냐고요…… 그것보다, 껴안았을 때의 감촉은 어땠나요? 누군가의 취향에 딱 맞는 가녀린 몸 말이에요.',
      );
      dj.say('……기분 좋았……나요? 후후, 당신의 솔직함은 여전히 저를 기쁘게 하네요.');
    }
  }

  out() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0);
    era.print([dj.get_colored_name(), '는 다른 할 일이 있어, 떠나려고 한다……']);
    era.println();
    dj.say(['미안해요, ', callname, '…… 저 먼저 가봐야 할 것 같아요.']);
    dj.say(
      '고민이 있다면 나누어 짊어지겠다고요……? 저는 당신을 이곳에 감금한 사람인데도, 여전히 제게 힘이 되어주고 싶으신 건가요?',
    );
    dj.say(
      '정말 구제 불능인 사람이네요…… 하지만 괜찮아요. 당신은 그저 이곳에 머물며 제 유일한 『귀속처』가 되어주는 것만으로도, 이미 제게 가장 큰 도움을 주고 있으니까요.',
    );
  }

  start_fixing() {
    const dj = get_chara_talk(this.id),
      callname = sys_get_callname(this.id, 0);
    dj.say(['아, ', callname, ', 저 좀 도와주시겠어요?']);
    if (era.get('cflag:0:키') > era.get('cflag:119:키')) {
      dj.say(
        '네, 저 좀 잡아주세요…… 이 사다리, 조금 흔들리네요…… 부끄럽게도 키가 모자라서, 당신에게 이런 꼴을 보이고 말았네요.',
      );
    }
    dj.say('후우…… 다 됐어요, 고마워요.');
    dj.say('뭘 하고 있었냐고요? 그저 문에 새로운 자물쇠를 달고 있었을 뿐이랍니다…… 도와주셔서 감사해요.');
    era.println();
    era.print(['……이럴 줄 알았으면 안 도와주는 건데……']);
  }

  async strike_fail() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    await era.printAndWait('실패했다……');
    await era.printAndWait([dj.get_colored_name(), '가 고개를 돌렸다, 화가 났을까?']);
    era.println();
    await dj.say_and_wait([callname, '…… 아주 노력하셨네요……']);
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      '가 가볍게 ',
      me.get_colored_name(),
      '를 껴안았다.',
    ]);
    era.println();
    await dj.say_and_wait(
      '자신 없는 기술을 열심히 배우셨군요…… 정말이지, 조금만 더 힘을 줬다면 저를 잠시 기절시킬 수도 있었을 텐데……',
    );
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      '의 가녀린 몸이 품속으로 더욱 파고들었다.',
    ]);
    era.println();
    await dj.say_and_wait(
      '하지만 그거 말고도, 인체에는 이용할 수 있는 다른 약점들이 있죠…… 예를 들면……',
    );
    era.println();
    await era.printAndWait([
      dj.get_colored_name(),
      '의 감싸 안은 손이 적당한 힘으로 허리의 어느 부분을 내리쳤다.',
    ]);
    await era.printAndWait('순간, 몸이 움직이지 않게 되었다……');
    era.println();
    await dj.say_and_wait('그럼, 저와 돌아가서 꼼꼼히 배워보시죠…… 인체에 관한 지식을 말이에요❤️');
    era.println();
    await era.printAndWait([me.get_colored_name(), '은(는) 어둠 속으로 빠져들었다……']);
  }

  async strike_success() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await dj.say_and_wait('결국 마지막까지…… 저는 당신의 신뢰를 얻지 못한 건가요?');
    era.println();
    if (!era.get('cflag:0:종족')) {
      await era.printAndWait([
        '비록 인간의 힘이지만, ',
        dj.get_colored_name(),
        '처럼 가녀린 ',
        dj.get_uma_sex_title(),
        '에게는 그것으로도 충분했다.',
      ]);
    }
    await era.printAndWait([
      dj.get_colored_name(),
      '는 슬픈 표정을 지으며 천천히 바닥에 쓰러졌다……',
    ]);
    await era.printAndWait([me.get_colored_name(), '은(는) 지하실에서 도망쳤다……']);
  }

  welcome() {
    const dj = get_chara_talk(this.id),
      me = get_chara_talk(0),
      callname = sys_get_callname(this.id, 0);
    era.print([me.get_colored_name(), '은(는) 천천히 의식을 되찾았다……']);
    era.println();
    dj.say(['편히 주무셨나요, ', callname, '?']);
    dj.say('편했다면 정말 다행이네요…… 신경이 둔한 거 아니냐고요? 아니, 그렇지 않아요.');
    dj.say(
      '그건 당신이 무의식중에라도 이곳을 안심할 수 있는 곳…… 『집』으로 여기게 되었다는 뜻이 아닐까요?',
    );
    dj.say('아니라고요…… 하지만, 제게는 그렇답니다.');
    dj.say('오직 당신이 있는 곳만이, 제 귀속처니까요.');
  }
};