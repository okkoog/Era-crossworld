/**
 * @file 맨하탄 카페 - 지하실
 * @author Necroz
 */
const era = require('#/era-electron');

const { sys_get_colored_callname } = require('#/system/sys-calc-chara-others');

const CustomizedBase = require('#/event/basement/basement-common');

const { get_chara_talk } = require('#/utils/chara-talk-factory');

const { lust_border } = require('#/data/ero/orgasm-const');
const TachyonEduMarks = require('#/data/event/edu-event-marks/edu-event-marks-32');
const CoffeeLifeMarks = require('#/data/event/life-event-marks/life-event-marks-25');

/**
 * @param {CharaTalk} coffee
 * @param {CharaTalk} me
 */
async function battle_common(coffee, me) {
  await era.printAndWait([
    '마음속으로 짧게 사과하며, ',
    me.get_colored_name(),
    '은(는) 곧장 ',
    coffee.get_colored_name(),
    '를 침대 위로 밀어트렸다.',
  ]);
  await era.printAndWait(['상대의 기대 섞인 눈빛 속에서, 하얀 목덜미에 두 손을 올렸다……']);
  era.println();
}

module.exports = class extends CustomizedBase {
  async ask_release_agree() {
    const callname = sys_get_colored_callname(this.id, 0),
      coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await coffee.say_and_wait(['나가고 싶은, 건가요……']);
    era.println();

    await era.printAndWait([
      me.get_colored_name(),
      '의 요청을 들은 ',
      coffee.get_colored_name(),
      '는 조금 곤란한 표정을 지었다.',
    ]);
    era.println();

    await coffee.say_and_wait([
      '괜찮아요…… ',
      callname,
      '이 이곳에 오게 된 것 자체가 예상 밖이었고, 저도 이만하면 만족했으니까요……',
    ]);
    await coffee.say_and_wait(['문은 저쪽에 있어요…… 마음대로 하세요……']);
    await coffee.say_and_wait(['문을 열어달라고요……? 문은 처음부터 잠겨 있지 않았답니다……']);
    era.println();

    await era.printAndWait(['설마 그럴 리가……']);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 문 손잡이를 돌려보자, 딸깍 소리와 함께 문은 너무나도 쉽게 열렸다.',
    ]);
    await era.printAndWait([
      '……이 순간 ',
      me.get_colored_name(),
      '은(는) 지금까지의 탈출 시도가 마치 꿈이었던 것처럼 느껴졌다.',
    ]);
    era.println();

    await coffee.say_and_wait(['……', callname, '.']);
    era.println();

    await era.printAndWait([coffee.get_colored_name(), '의 목소리가 등 뒤에서 들려왔다.']);
    era.println();

    await coffee.say_and_wait(['부디…… 부디 우리의 약속을 기억해 주세요……']);
    await coffee.say_and_wait([
      '다음번에는, 어쩌면…… 제가 직접 ',
      callname,
      '을 이곳으로 데려올지도 모르니까요……',
    ]);
  }

  async ask_release_reject() {
    const callname = sys_get_colored_callname(this.id, 0),
      coffee = get_chara_talk(this.id),
      life_marks = new CoffeeLifeMarks(),
      me = get_chara_talk(0);
    if (life_marks.ask_release_reject) {
      await coffee.say_and_wait([callname, '…… 다시 한번, 시도해 보시겠어요?']);
      era.println();

      await era.printAndWait([
        '지난번의 기억을 떠올린 ',
        me.get_colored_name(),
        '은(는) 소름이 돋았다.',
      ]);
      era.println();

      await coffee.say_and_wait(['후훗…… 전 아직 만족하지 못했거든요, ', callname, '……']);
    } else {
      life_marks.ask_release_reject = 1;
      await coffee.say_and_wait([
        '괜찮아요…… 애초에 ',
        callname,
        '을 이곳에 데려온 건 제가 아니었으니까요……',
      ]);
      era.println();

      await era.printAndWait(['끼익 소리를 내며, 그토록 염원하던 문이 저절로 열렸다.']);
      await era.printAndWait([
        '문밖으로 이어진 계단을 보자, ',
        me.get_colored_name(),
        '은(는) 기뻐서 눈물이 나올 것만 같아 곧장 문밖으로 달려 나갔다.',
      ]);
      await era.printAndWait(['두 계단씩 뛰어오르며, 모퉁이를 몇 번이나 돌았다……']);
      await me.say_and_wait(['어라……'], true);
      await me.say_and_wait(['계단이, 너무 긴 거 아냐?'], true);
      era.println();

      await era.printAndWait(['지하실을 탈출했다는 흥분이 가라앉자, 머리가 차갑게 식기 시작했다.']);
      await me.say_and_wait(['나…… 도대체 계단에서 얼마나 있었던 거지?'], true);
      await era.printAndWait([
        '그 생각이 들자마자, ',
        me.get_colored_name(),
        '은(는) 지하실에서부터 줄곧 자신을 휘감고 있던 그 서늘함이 ',
        me.get_colored_name(),
        '의 곁에서 한 번도 사라진 적이 없음을 깨달았다.',
      ]);
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 미친 듯이 위를 향해 계속 달렸다. 그저 기분 탓일 거라고, 트레센에 이렇게 깊은 지하실이 있을 수도 있다고 뇌를 마비시키며.',
      ]);
      await era.printAndWait([
        '마침내, ',
        me.get_colored_name(),
        '은(는) 발을 헛디뎌 계단에서 굴러떨어졌고, 벽에 부딪히고 나서야 멈출 수 있었다.',
      ]);
      era.println();

      await era.printAndWait(['이상하다…… 분명 계단에서 굴렀는데, 전혀 아프지 않아……']);
      await era.printAndWait([
        '고개를 들어 계단 아래쪽을 바라보자, 지하실 문이 활짝 열린 채 자신이 떠날 때와 조금도 변함없는 모습으로 서 있었다.',
      ]);
      await era.printAndWait(['분명 한참을 걸어 올라갔는데, 순식간에 지하실 문 앞으로 돌아와 버린 것이다……']);
      await era.printAndWait(['돌아가자, 돌아가자—— 귓가에 속삭임이 들리는 듯했다.']);
      await era.printAndWait([
        '한참을 침묵하던 ',
        me.get_colored_name(),
        '은(는) 결국 다시 지하실 안으로 발걸음을 옮겼다.',
      ]);
      era.println();

      await coffee.say_and_wait(['어서 오세요, ', callname, '……']);
      era.println();

      await era.printAndWait([
        '마치 결과를 이미 알고 있었다는 듯, ',
        coffee.get_colored_name(),
        '는 미소를 띤 채 조용히 ',
        me.get_colored_name(),
        '을(를) 바라보고 있었다.',
      ]);
      await era.printAndWait(['등 뒤의 문이 서서히 닫혔다.']);
    }
  }

  async ask_time(date, hours, minutes) {
    const coffee = get_chara_talk(this.id);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait(
        `시간 말인가요…… 지금은 ${CustomizedBase.get_cur_time(hours, minutes)} 예요.`,
      );
      await coffee.say_and_wait('걱정 마세요, 시간은 아주 충분하니까요……');
    } else {
      await coffee.say_and_wait(
        `${CustomizedBase.get_cur_time(hours, minutes)}…… 왜 그러시나요?`,
      );
      await coffee.say_and_wait('혹시 급한 일이라도 있다면…… 대신해 줄 『사람』이 있어요.');
    }
  }

  async battle_escape() {
    const me = get_chara_talk(0);
    await era.printAndWait([
      '얼마간 조사해 본 끝에, ',
      me.get_colored_name(),
      '은(는) 마침내 문이 전혀 잠겨 있지 않다는 사실을 알아냈다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 문 손잡이를 돌리려 할 때마다, 어떤 강력한 힘이 반대편 손잡이를 꽉 붙잡고 있었던 것이다.',
    ]);
    await era.printAndWait([
      '이런 일을 소리 소문 없이 해낼 수 있는 존재를…… ',
      me.get_colored_name(),
      '은(는) 단 하나밖에 알지 못했다.',
    ]);

    era.printButton('「친구…… 너지?」', 1);
    await era.input();

    await era.printAndWait(['응답이 없다.']);

    era.printButton('「카페의 상태를 제때 살피지 못한 건 내 잘못이야……」', 1);
    era.printButton(
      '「하지만 이렇게 지하실에 가둬두는 건 해결책이 아냐, 고칠 기회를 줘……!」',
      2,
    );
    await era.input();

    await era.printAndWait(['손잡이가 스스로 돌아가더니, 문이 천천히 열렸다.']);
    era.println();

    era.printButton('「고마워, 난——」', 1);
    await era.input();

    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 감사의 말을 다 끝내기도 전에, ',
      me.get_colored_name(),
      '은(는) 문밖으로 거세게 걷어차였고, 문은 「쾅」 소리를 내며 닫혔다.',
    ]);
    await era.printAndWait([
      '엉덩이를 문지르며, ',
      me.get_colored_name(),
      '은(는) 지하실을 빠져나왔다.',
    ]);
  }

  async battle_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await battle_common(coffee, me);
    await era.printAndWait([
      me.get_colored_name(),
      '은(는) ',
      coffee.get_uma_sex_title(),
      '의 체력을 과소평가했다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) 기력을 다할 때까지도, ',
      coffee.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 예상처럼 기절하지 않았다.',
    ]);
    await era.printAndWait([
      '촉촉하게 젖은 눈빛, 발그레해진 얼굴…… 명백히 ',
      me.get_colored_name(),
      '에 의해 발정해 버린 상태였다……',
    ]);
    era.println();

    await coffee.say_and_wait([callname, ', 발산이 다 끝났다면…… 이제 제 차례에요……']);
  }

  async battle_prison() {
    const callname = sys_get_colored_callname(this.id, 0),
      coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait([
      '이런 자물쇠는 ',
      me.get_colored_name(),
      '도 본 적이 없었다……',
    ]);
    await era.printAndWait([
      '분명 열릴 만한 위치에 도달했음에도, 문 손잡이는 용접된 것처럼 꿈쩍도 하지 않았다.',
    ]);
    await era.printAndWait(['……', me.get_colored_name(), '은(는) 잠시 포기하기로 했다.']);
    era.println();
    await coffee.say_and_wait([callname, ', 발산이 다 끝났다면…… 이제 제 차례에요……']);
    if (era.get('base:25:성욕') < lust_border.absent_mind) {
      era.add(
        'base:25:성욕',
        lust_border.absent_mind - era.get('base:25:성욕'),
      );
    }
  }

  async battle_success() {
    const coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await battle_common(coffee, me);
    await era.printAndWait(['……성공했다.']);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 처음부터 저항하지 않았고, 심지어 손을 ',
      me.get_colored_name(),
      '의 팔뚝 위에 얹기까지 했다.',
    ]);
    await era.printAndWait([
      '어쩌면 그녀는 이것을 격렬한 사전 행위라고 생각한 것일지도 모른다……',
    ]);
    await era.printAndWait(['자신을 사랑하는 담당을 직접 목 졸라 기절시키다니…… 이건 정말……']);
    await era.printAndWait(['…………일단 탈출하자.']);
  }

  find_escape(out_of_prison, s_level_up, is_back) {
    const callname = sys_get_colored_callname(this.id, 0),
      coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    era.print(['젠장, 이 자물쇠 왜 이렇게 안 열려!']);
    era.print([
      me.get_colored_name(),
      '이(가) 문에 달린 자물쇠에 온 신경을 집중하고 있을 때, 어떤 얼굴이 ',
      me.get_colored_name(),
      '의 얼굴 옆에 나타났다.',
    ]);
    era.println();

    coffee.say([callname, '…… 지금 뭐 하시는 거죠?']);
    era.println();

    era.print([sys_get_colored_callname(0, this.id), '?!']);
    if (is_back) {
      era.print(['언제 돌아온 거야, 분명 계속 문 앞에 있었는데!']);
    } else {
      era.print(['언제 깬 거야, 이제 다 끝장이네……']);
    }
    era.print([
      me.get_colored_name(),
      '은(는) 깜짝 놀라 다리에 힘이 풀렸고, ',
      coffee.get_colored_name(),
      '가 마침 ',
      me.get_colored_name(),
      '을(를) 부축해 주지 않았다면 그대로 바닥에 주저앉을 뻔했다.',
    ]);
    era.println();

    coffee.say(['이상한 짓은 하지 말아 주세요…… 저 곤란해지니까요……']);
  }

  async flatter() {
    const coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    if (Math.random() < 0.5) {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) 먼저 ',
        coffee.get_colored_name(),
        '에게 다가가, 그녀의 부드러운 긴 머리카락을 쓰다듬었다.',
      ]);
      await era.printAndWait([
        '이게 꽤 기분 좋았는지, ',
        coffee.get_colored_name(),
        '는 편안한 자세로 ',
        me.get_colored_name(),
        '의 어깨에 기대었고, 머릿결에서 풍기는 은은한 향기에 ',
        me.get_colored_name(),
        '은(는) 잠시 넋을 잃었다.',
      ]);
    } else {
      await era.printAndWait([
        me.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '에게 달콤한 말들을 속삭였다. 그 닭살 돋는 정도에 ',
        me.get_colored_name(),
        '스스로도 얼굴이 붉어질 정도였다.',
      ]);
      await era.printAndWait([
        '그런 말을 해도 소용없어요—— ',
        coffee.get_colored_name(),
        '의 눈빛은 그런 메시지를 전하고 있었다.',
      ]);
      await era.printAndWait([
        '……하지만 그녀의 등 뒤에서 살랑살랑 흔들리는 꼬리를 보면 사실은 그렇지 않다는 걸 알 수 있었다.',
      ]);
    }
  }

  async rescue_battle_success(owner_id) {
    if (owner_id !== 32 || !new TachyonEduMarks().plan_b) {
      return super.rescue_battle_success(owner_id);
    }
    const c_call_m = sys_get_colored_callname(this.id, 0),
      c_call_t = sys_get_colored_callname(this.id, 32),
      coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await coffee.say_and_wait('이제 와서야 속마음을 털어놓고 싶은 건가요…… 그 모습, 너무 보기 흉하네요……');
    await coffee.say_and_wait('비난, 의구심, 견책…… 욕설……');
    await coffee.say_and_wait([
      '당신의 독단 때문에…… ',
      c_call_m,
      '이 얼마나 고통받고, 얼마나 많은 밤을 잠 못 이루며 지냈는지 아시나요……',
    ]);
    await coffee.say_and_wait([
      me.sex,
      '는 당신의 희생양도 아니고, 당신의 꿈을 이루기 위한 『모르모트』는 더더욱 아니에요…… 당신이 직접 ',
      me.sex,
      '를 버린 거잖아요……',
    ]);
    await coffee.say_and_wait([
      '줄곧 ',
      c_call_m,
      '의 곁을 지켜온 건 저에요…… ',
      c_call_t,
      '……',
    ]);
  }

  async strike_fail() {
    const callname = sys_get_colored_callname(this.id, 0),
      coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait(['지금이다!']);
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 방심한 틈을 타, ',
      me.get_colored_name(),
      '은(는) 손날로 그녀의 뒷덜미를 정확히 가격했다……',
    ]);
    await era.printAndWait(['성공했나……?']);
    era.println();

    await coffee.say_and_wait([callname, '……']);
    era.println();

    await era.printAndWait([
      '팔이 빠져나가기도 전에, ',
      coffee.get_colored_name(),
      '에게 꽉 붙잡혔다.',
    ]);
    era.println();

    await coffee.say_and_wait([
      '상대가 당신을 사랑하는 제가 아니었다면…… 이렇게 ',
      coffee.get_uma_sex_title(),
      '를 공격하는 건 아주 위험한 행동이에요……',
    ]);
    await coffee.say_and_wait(['……하지만, 저도 이런 행위를 못 본 척할 수는 없겠네요……']);
    await coffee.say_and_wait(['누가 상대의 소유물인지, 다시 한번 확실히 가르쳐 드릴 필요가 있겠어요……']);
    era.println();

    await era.printAndWait([
      '지하실의 서늘함이 ',
      me.get_colored_name(),
      '의 사지를 타고 올라왔고, ',
      me.get_colored_name(),
      '의 감각도 그에 따라 얼어붙기 시작했다……',
    ]);
  }

  async strike_success() {
    const coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    await era.printAndWait(['믿을 수 없어……']);
    await era.printAndWait([
      me.get_colored_name(),
      '의 갑작스러운 손날 치기에, ',
      coffee.get_colored_name(),
      '는 짧은 신음과 함께 바닥에 쓰러졌다.',
    ]);
    await era.printAndWait([
      me.get_colored_name(),
      '이(가) ',
      coffee.get_colored_name(),
      '의 상태를 확인해 보니, 정말로 기절해 있었다.',
    ]);
    await era.printAndWait([
      coffee.get_uma_sex_title(),
      '가 이렇게 약했나…… 아니면, 누군가 나를 도와준 걸까?',
    ]);
    await era.printAndWait(['……어쨌든 지금은 도망치자.']);

    await era.printAndWait(['지하실의 서늘함이 조금 가라앉은 듯한 기분이 들었다.']);
  }

  welcome() {
    const callname = sys_get_colored_callname(this.id, 0),
      coffee = get_chara_talk(this.id),
      me = get_chara_talk(0);
    era.print([
      '……',
      me.get_colored_name(),
      '은(는) 천천히 눈을 떴다. 침대 위에 아무렇게나 던져진 듯한 자세 때문인지 몸은 찌뿌둥했고, 머리는 깨질 듯이 울렁거렸다.',
    ]);
    era.print([
      me.get_colored_name(),
      '이(가) 눈앞의 낯선 천장을 살피기도 전에, 익숙한 얼굴이 시야에 나타났다.',
    ]);
    era.println();

    coffee.say(['……좋은 아침이에요, ', callname, '. 아니, 어쩌면 벌써 점심일지도 모르겠네요……']);
    coffee.say(['어째서 여기서 깨어난 건지…… 궁금하신가요?']);
    coffee.say([
      '오늘 학원 곳곳을 다 뒤져도 ',
      callname,
      '을 찾을 수 없었는데, 결국 친구의 안내를 받고서야 당신이 있는 곳을 찾아냈답니다……',
    ]);
    coffee.say(['……만약 이렇게 대답한다면, 믿어 주실 건가요?']);
    era.println();

    era.print([
      '여전히 욱신거리는 뒷머리의 통증을 느끼며, ',
      coffee.get_colored_name(),
      '의 이 설명을 ',
      me.get_colored_name(),
      '은(는) 도저히 믿을 수가 없었다.',
    ]);
    era.println();

    coffee.say(['……최근, ', callname, '과 제가 단둘이 보내는 시간이 점점 줄어들었죠……']);
    era.println();

    era.print([
      coffee.get_colored_name(),
      '는 ',
      me.get_colored_name(),
      '의 관자놀이를 부드럽게 누르며, 귓가에 낮은 목소리로 속삭였다.',
    ]);
    era.println();

    coffee.say([
      '…… ',
      callname,
      '의 고충은 이해해요. 트레센 학원의 트레이너로서 분명 많이 피곤하시겠죠.',
    ]);
    coffee.say([
      '……하지만 아무리 힘들어도, 우리의 약속을 잊으시면 곤란해요…… 도망치는 상대를 뒤쫓는 일이라면, 저도 꽤 자신 있거든요……',
    ]);
    coffee.say(['……여기서 한동안 쉬면서 피로를 풀어보는 건 어떨까요?']);
    coffee.say([
      '제가 처음에 드린 말씀은 정말로 거짓말이 아니에요…… ',
      callname,
      '을 이곳에 데려온 건 『제』가 아니니까요…… 물론 저도 반대하지는 않았지만요……',
    ]);
    coffee.say(['그러니…… 제가 만족할 때까지는, 당분간 여기 계셔 주셔야겠어요……']);
    era.println();

    era.print([
      coffee.get_colored_name(),
      '의 말이 끝나기 무섭게, 지하실의 서늘함이 사방으로 번져 나갔다……',
    ]);
  }
};